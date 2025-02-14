package secretsmigrations

import (
	"context"
	"encoding/base64"
	"encoding/json"
	"fmt"

	"github.com/grafana/grafana/pkg/cmd/grafana-cli/runner"
	"github.com/grafana/grafana/pkg/cmd/grafana-cli/utils"
	"github.com/grafana/grafana/pkg/services/encryption"
	"github.com/grafana/grafana/pkg/services/featuremgmt"
	"github.com/grafana/grafana/pkg/services/ngalert/notifier"
	"github.com/grafana/grafana/pkg/services/secrets/manager"
	"github.com/grafana/grafana/pkg/services/sqlstore"
)

func (s simpleSecret) rollback(
	ctx context.Context,
	secretsSrv *manager.SecretsService,
	encryptionSrv encryption.Internal,
	sqlStore *sqlstore.SQLStore,
	secretKey string,
) (anyFailure bool) {
	var rows []struct {
		Id     int
		Secret []byte
	}

	if err := sqlStore.NewSession(ctx).Table(s.tableName).Select(fmt.Sprintf("id, %s as secret", s.columnName)).Find(&rows); err != nil {
		logger.Warn("Could not find any secret to roll back", "table", s.tableName)
		return true
	}

	for _, row := range rows {
		if len(row.Secret) == 0 {
			continue
		}

		err := sqlStore.WithTransactionalDbSession(ctx, func(sess *sqlstore.DBSession) error {
			decrypted, err := secretsSrv.Decrypt(ctx, row.Secret)
			if err != nil {
				logger.Warn("Could not decrypt secret while rolling it back", "table", s.tableName, "id", row.Id, "error", err)
				return err
			}

			encrypted, err := encryptionSrv.Encrypt(ctx, decrypted, secretKey)
			if err != nil {
				logger.Warn("Could not encrypt secret while rolling it back", "table", s.tableName, "id", row.Id, "error", err)
				return err
			}

			updateSQL := fmt.Sprintf("UPDATE %s SET %s = ?, updated = ? WHERE id = ?", s.tableName, s.columnName)
			if _, err = sess.Exec(updateSQL, encrypted, nowInUTC(), row.Id); err != nil {
				logger.Warn("Could not update secret while rolling it back", "table", s.tableName, "id", row.Id, "error", err)
				return err
			}

			return nil
		})

		if err != nil {
			anyFailure = true
		}
	}

	if anyFailure {
		logger.Warn(fmt.Sprintf("Column %s from %s has been rolled back with errors", s.columnName, s.tableName))
	} else {
		logger.Info(fmt.Sprintf("Column %s from %s has been rolled back successfully", s.columnName, s.tableName))
	}

	return anyFailure
}

func (s b64Secret) rollback(
	ctx context.Context,
	secretsSrv *manager.SecretsService,
	encryptionSrv encryption.Internal,
	sqlStore *sqlstore.SQLStore,
	secretKey string,
) (anyFailure bool) {
	var rows []struct {
		Id     int
		Secret string
	}

	if err := sqlStore.NewSession(ctx).Table(s.tableName).Select(fmt.Sprintf("id, %s as secret", s.columnName)).Find(&rows); err != nil {
		logger.Warn("Could not find any secret to roll back", "table", s.tableName)
		return true
	}

	for _, row := range rows {
		if len(row.Secret) == 0 {
			continue
		}

		err := sqlStore.WithTransactionalDbSession(ctx, func(sess *sqlstore.DBSession) error {
			decoded, err := base64.StdEncoding.DecodeString(row.Secret)
			if err != nil {
				logger.Warn("Could not decode base64-encoded secret while rolling it back", "table", s.tableName, "id", row.Id, "error", err)
				return err
			}

			decrypted, err := secretsSrv.Decrypt(ctx, decoded)
			if err != nil {
				logger.Warn("Could not decrypt secret while rolling it back", "table", s.tableName, "id", row.Id, "error", err)
				return err
			}

			encrypted, err := encryptionSrv.Encrypt(ctx, decrypted, secretKey)
			if err != nil {
				logger.Warn("Could not encrypt secret while rolling it back", "table", s.tableName, "id", row.Id, "error", err)
				return err
			}

			encoded := base64.StdEncoding.EncodeToString(encrypted)
			if s.hasUpdatedColumn {
				updateSQL := fmt.Sprintf("UPDATE %s SET %s = ?, updated = ? WHERE id = ?", s.tableName, s.columnName)
				_, err = sess.Exec(updateSQL, encoded, nowInUTC(), row.Id)
			} else {
				updateSQL := fmt.Sprintf("UPDATE %s SET %s = ? WHERE id = ?", s.tableName, s.columnName)
				_, err = sess.Exec(updateSQL, encoded, row.Id)
			}

			if err != nil {
				logger.Warn("Could not update secret while rolling it back", "table", s.tableName, "id", row.Id, "error", err)
				return err
			}

			return nil
		})

		if err != nil {
			anyFailure = true
		}
	}

	if anyFailure {
		logger.Warn(fmt.Sprintf("Column %s from %s has been rolled back with errors", s.columnName, s.tableName))
	} else {
		logger.Info(fmt.Sprintf("Column %s from %s has been rolled back successfully", s.columnName, s.tableName))
	}

	return anyFailure
}

func (s jsonSecret) rollback(
	ctx context.Context,
	secretsSrv *manager.SecretsService,
	encryptionSrv encryption.Internal,
	sqlStore *sqlstore.SQLStore,
	secretKey string,
) (anyFailure bool) {
	var rows []struct {
		Id             int
		SecureJsonData map[string][]byte
	}

	if err := sqlStore.NewSession(ctx).Table(s.tableName).Cols("id", "secure_json_data").Find(&rows); err != nil {
		logger.Warn("Could not find any secret to roll back", "table", s.tableName)
		return true
	}

	for _, row := range rows {
		if len(row.SecureJsonData) == 0 {
			continue
		}

		err := sqlStore.WithTransactionalDbSession(ctx, func(sess *sqlstore.DBSession) error {
			decrypted, err := secretsSrv.DecryptJsonData(ctx, row.SecureJsonData)
			if err != nil {
				logger.Warn("Could not decrypt secrets while rolling them back", "table", s.tableName, "id", row.Id, "error", err)
				return err
			}

			toUpdate := struct {
				SecureJsonData map[string][]byte
				Updated        string
			}{Updated: nowInUTC()}

			toUpdate.SecureJsonData, err = encryptionSrv.EncryptJsonData(ctx, decrypted, secretKey)
			if err != nil {
				logger.Warn("Could not re-encrypt secrets while rolling them back", "table", s.tableName, "id", row.Id, "error", err)
				return err
			}

			if _, err := sess.Table(s.tableName).Where("id = ?", row.Id).Update(toUpdate); err != nil {
				logger.Warn("Could not update secrets while rolling them back", "table", s.tableName, "id", row.Id, "error", err)
				return err
			}

			return nil
		})

		if err != nil {
			anyFailure = true
		}
	}

	if anyFailure {
		logger.Warn(fmt.Sprintf("Secure json data secrets from %s have been rolled back with errors", s.tableName))
	} else {
		logger.Info(fmt.Sprintf("Secure json data secrets from %s have been rolled back successfully", s.tableName))
	}

	return anyFailure
}

func (s alertingSecret) rollback(
	ctx context.Context,
	secretsSrv *manager.SecretsService,
	encryptionSrv encryption.Internal,
	sqlStore *sqlstore.SQLStore,
	secretKey string,
) (anyFailure bool) {
	var results []struct {
		Id                        int
		AlertmanagerConfiguration string
	}

	selectSQL := "SELECT id, alertmanager_configuration FROM alert_configuration"
	if err := sqlStore.NewSession(ctx).SQL(selectSQL).Find(&results); err != nil {
		logger.Warn("Could not find any alert_configuration secret to roll back")
		return true
	}

	for _, result := range results {
		result := result

		err := sqlStore.WithTransactionalDbSession(ctx, func(sess *sqlstore.DBSession) error {
			postableUserConfig, err := notifier.Load([]byte(result.AlertmanagerConfiguration))
			if err != nil {
				logger.Warn("Could not load configuration (alert_configuration with id: %d) while rolling it back", result.Id, err)
				return err
			}

			for _, receiver := range postableUserConfig.AlertmanagerConfig.Receivers {
				for _, gmr := range receiver.GrafanaManagedReceivers {
					for k, v := range gmr.SecureSettings {
						decoded, err := base64.StdEncoding.DecodeString(v)
						if err != nil {
							logger.Warn("Could not decode base64-encoded secret (alert_configuration with id: %d, key)", k, result.Id, err)
							return err
						}

						decrypted, err := secretsSrv.Decrypt(ctx, decoded)
						if err != nil {
							logger.Warn("Could not decrypt secret (alert_configuration with id: %d, key)", k, result.Id, err)
							return err
						}

						reencrypted, err := encryptionSrv.Encrypt(ctx, decrypted, secretKey)
						if err != nil {
							logger.Warn("Could not re-encrypt secret (alert_configuration with id: %d, key)", k, result.Id, err)
							return err
						}

						gmr.SecureSettings[k] = base64.StdEncoding.EncodeToString(reencrypted)
					}
				}
			}

			marshalled, err := json.Marshal(postableUserConfig)
			if err != nil {
				logger.Warn("Could not marshal configuration (alert_configuration with id: %d) while rolling it back", result.Id, err)
				return err
			}

			result.AlertmanagerConfiguration = string(marshalled)
			if _, err := sess.Table("alert_configuration").Where("id = ?", result.Id).Update(&result); err != nil {
				logger.Warn("Could not update secret (alert_configuration with id: %d) while rolling it back", result.Id, err)
				return err
			}

			return nil
		})

		if err != nil {
			anyFailure = true
		}
	}

	if anyFailure {
		logger.Warn("Alerting configuration secrets have been rolled back with errors")
	} else {
		logger.Info("Alerting configuration secrets have been rolled back successfully")
	}

	return anyFailure
}

func RollBackSecrets(_ utils.CommandLine, runner runner.Runner) error {
	if !runner.Features.IsEnabled(featuremgmt.FlagEnvelopeEncryption) {
		logger.Warn("Envelope encryption is not enabled, quitting...")
		return nil
	}

	toRollback := []interface {
		rollback(context.Context, *manager.SecretsService, encryption.Internal, *sqlstore.SQLStore, string) bool
	}{
		simpleSecret{tableName: "dashboard_snapshot", columnName: "dashboard_encrypted"},
		b64Secret{simpleSecret: simpleSecret{tableName: "user_auth", columnName: "o_auth_access_token"}},
		b64Secret{simpleSecret: simpleSecret{tableName: "user_auth", columnName: "o_auth_refresh_token"}},
		b64Secret{simpleSecret: simpleSecret{tableName: "user_auth", columnName: "o_auth_token_type"}},
		b64Secret{simpleSecret: simpleSecret{tableName: "secrets", columnName: "value"}, hasUpdatedColumn: true},
		jsonSecret{tableName: "data_source"},
		jsonSecret{tableName: "plugin_setting"},
		alertingSecret{},
	}

	var anyFailure bool
	ctx := context.Background()

	for _, r := range toRollback {
		if failed := r.rollback(
			ctx,
			runner.SecretsService,
			runner.EncryptionService,
			runner.SQLStore,
			runner.Cfg.SecretKey,
		); failed {
			anyFailure = true
		}
	}

	if anyFailure {
		logger.Warn("Some errors happened, not cleaning up data keys table...")
		return nil
	}

	if _, sqlErr := runner.SQLStore.NewSession(ctx).Exec("DELETE FROM data_keys"); sqlErr != nil {
		logger.Warn("Error while cleaning up data keys table...", "error", sqlErr)
	}

	return nil
}
