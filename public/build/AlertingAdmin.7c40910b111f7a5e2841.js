"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[7680],{

/***/ "./public/app/features/alerting/unified/Admin.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Admin)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx
var AlertingPageWrapper = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts
var useAlertManagerSourceName = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts
var useAlertManagerSources = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts
var useUnifiedAlertingSelector = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/state/actions.ts + 4 modules
var actions = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/datasource.ts
var datasource = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/redux.ts
var redux = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertManagerPicker.tsx
var AlertManagerPicker = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/admin/AlertmanagerConfig.tsx
var _Alert;















function AlertmanagerConfig() {
  var _Button;

  const dispatch = (0,es.useDispatch)();
  const alertManagers = (0,useAlertManagerSources/* useAlertManagersByPermission */.k)('notification');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,useAlertManagerSourceName/* useAlertManagerSourceName */.k)(alertManagers);
  const [showConfirmDeleteAMConfig, setShowConfirmDeleteAMConfig] = (0,react.useState)(false);
  const {
    loading: isDeleting
  } = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.deleteAMConfig);
  const {
    loading: isSaving
  } = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.saveAMConfig);
  const readOnly = alertManagerSourceName ? (0,datasource/* isVanillaPrometheusAlertManagerDataSource */.RY)(alertManagerSourceName) : false;
  const styles = (0,src.useStyles2)(getStyles);
  const configRequests = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.amConfigs);
  const {
    result: config,
    loading: isLoadingConfig,
    error: loadingError
  } = alertManagerSourceName && configRequests[alertManagerSourceName] || redux/* initialAsyncRequestState */.oq;
  (0,react.useEffect)(() => {
    if (alertManagerSourceName) {
      dispatch((0,actions/* fetchAlertManagerConfigAction */.Yh)(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch]);

  const resetConfig = () => {
    if (alertManagerSourceName) {
      dispatch((0,actions/* deleteAlertManagerConfigAction */.Nc)(alertManagerSourceName));
    }

    setShowConfirmDeleteAMConfig(false);
  };

  const defaultValues = (0,react.useMemo)(() => ({
    configJSON: config ? JSON.stringify(config, null, 2) : ''
  }), [config]);
  const loading = isDeleting || isLoadingConfig || isSaving;

  const onSubmit = values => {
    if (alertManagerSourceName && config) {
      dispatch((0,actions/* updateAlertManagerConfigAction */.mM)({
        newConfig: JSON.parse(values.configJSON),
        oldConfig: config,
        alertManagerSourceName,
        successMessage: 'Alertmanager configuration updated.',
        refetch: true
      }));
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AlertManagerPicker/* AlertManagerPicker */.P, {
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName,
      dataSources: alertManagers
    }), loadingError && !loading && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Alert, {
      severity: "error",
      title: "Error loading Alertmanager configuration",
      children: loadingError.message || 'Unknown error.'
    }), isDeleting && alertManagerSourceName !== datasource/* GRAFANA_RULES_SOURCE_NAME */.GC && (_Alert || (_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Alert, {
      severity: "info",
      title: "Resetting Alertmanager configuration",
      children: "It might take a while..."
    }))), alertManagerSourceName && config && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Form, {
      defaultValues: defaultValues,
      onSubmit: onSubmit,
      children: _ref => {
        var _errors$configJSON;

        let {
          register,
          errors
        } = _ref;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [!readOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            disabled: loading,
            label: "Configuration",
            invalid: !!errors.configJSON,
            error: (_errors$configJSON = errors.configJSON) === null || _errors$configJSON === void 0 ? void 0 : _errors$configJSON.message,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.TextArea, Object.assign({}, register('configJSON', {
              required: {
                value: true,
                message: 'Required.'
              },
              validate: v => {
                try {
                  JSON.parse(v);
                  return true;
                } catch (e) {
                  return e.message;
                }
              }
            }), {
              id: "configuration",
              rows: 25
            }))
          }), readOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "Configuration",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
              "data-testid": "readonly-config",
              children: defaultValues.configJSON
            })
          }), !readOnly && /*#__PURE__*/(0,jsx_runtime.jsxs)(src.HorizontalGroup, {
            children: [_Button || (_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
              type: "submit",
              variant: "primary",
              disabled: loading,
              children: "Save"
            })), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
              type: "button",
              disabled: loading,
              variant: "destructive",
              onClick: () => setShowConfirmDeleteAMConfig(true),
              children: "Reset configuration"
            })]
          }), !!showConfirmDeleteAMConfig && /*#__PURE__*/(0,jsx_runtime.jsx)(src.ConfirmModal, {
            isOpen: true,
            title: "Reset Alertmanager configuration",
            body: `Are you sure you want to reset configuration ${alertManagerSourceName === datasource/* GRAFANA_RULES_SOURCE_NAME */.GC ? 'for the Grafana Alertmanager' : `for "${alertManagerSourceName}"`}? Contact points and notification policies will be reset to their defaults.`,
            confirmText: "Yes, reset configuration",
            onConfirm: resetConfig,
            onDismiss: () => setShowConfirmDeleteAMConfig(false)
          })]
        });
      }
    }, defaultValues.configJSON)]
  });
}

const getStyles = theme => ({
  container: emotion_css_esm.css`
    margin-bottom: ${theme.spacing(4)};
  `
});
// EXTERNAL MODULE: ./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/hooks/useExternalAmSelector.ts

const SUFFIX_REGEX = /\/api\/v[1|2]\/alerts/i;
function useExternalAmSelector() {
  const discoveredAlertmanagers = (0,es.useSelector)(state => {
    var _state$unifiedAlertin;

    return (_state$unifiedAlertin = state.unifiedAlerting.externalAlertmanagers.discoveredAlertmanagers.result) === null || _state$unifiedAlertin === void 0 ? void 0 : _state$unifiedAlertin.data;
  });
  const alertmanagerConfig = (0,es.useSelector)(state => {
    var _state$unifiedAlertin2;

    return (_state$unifiedAlertin2 = state.unifiedAlerting.externalAlertmanagers.alertmanagerConfig.result) === null || _state$unifiedAlertin2 === void 0 ? void 0 : _state$unifiedAlertin2.alertmanagers;
  });

  if (!discoveredAlertmanagers || !alertmanagerConfig) {
    return [];
  }

  const enabledAlertmanagers = [];
  const droppedAlertmanagers = discoveredAlertmanagers === null || discoveredAlertmanagers === void 0 ? void 0 : discoveredAlertmanagers.droppedAlertManagers.map(am => ({
    url: am.url.replace(SUFFIX_REGEX, ''),
    status: 'dropped',
    actualUrl: am.url
  }));

  for (const url of alertmanagerConfig) {
    if (discoveredAlertmanagers.activeAlertManagers.length === 0) {
      enabledAlertmanagers.push({
        url: url,
        status: 'pending',
        actualUrl: ''
      });
    } else {
      let found = false;

      for (const activeAM of discoveredAlertmanagers.activeAlertManagers) {
        if (activeAM.url === `${url}/api/v2/alerts`) {
          found = true;
          enabledAlertmanagers.push({
            url: activeAM.url.replace(SUFFIX_REGEX, ''),
            status: 'active',
            actualUrl: activeAM.url
          });
        }
      }

      if (!found) {
        enabledAlertmanagers.push({
          url: url,
          status: 'pending',
          actualUrl: ''
        });
      }
    }
  }

  return [...enabledAlertmanagers, ...droppedAlertmanagers];
}
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/admin/AddAlertManagerModal.tsx
var _h, _Icon;






const AddAlertManagerModal = _ref => {
  let {
    alertmanagers,
    onChangeAlertmanagerConfig,
    onClose
  } = _ref;
  const styles = (0,src.useStyles2)(AddAlertManagerModal_getStyles);
  const defaultValues = (0,react.useMemo)(() => ({
    alertmanagers: alertmanagers
  }), [alertmanagers]);

  const modalTitle = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.modalTitle,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
      name: "bell",
      className: styles.modalIcon
    }), _h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
      children: "Add Alertmanager"
    }))]
  });

  const onSubmit = values => {
    onChangeAlertmanagerConfig(values.alertmanagers.map(am => cleanAlertmanagerUrl(am.url)));
    onClose();
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(src.Modal, {
    title: modalTitle,
    isOpen: true,
    onDismiss: onClose,
    className: styles.modal,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.description,
      children: "We use a service discovery method to find existing Alertmanagers for a given URL."
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Form, {
      onSubmit: onSubmit,
      defaultValues: defaultValues,
      children: _ref2 => {
        let {
          register,
          control,
          errors
        } = _ref2;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.FieldArray, {
            control: control,
            name: "alertmanagers",
            children: _ref3 => {
              let {
                fields,
                append,
                remove
              } = _ref3;
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: styles.fieldArray,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: styles.bold,
                  children: "Source url"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: styles.muted,
                  children: "Authentication can be done via URL (e.g. user:password@myalertmanager.com) and only the Alertmanager v2 API is supported. The suffix is added internally, there is no need to specify it."
                }), fields.map((field, index) => {
                  var _errors$alertmanagers;

                  return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
                    invalid: !!(errors !== null && errors !== void 0 && (_errors$alertmanagers = errors.alertmanagers) !== null && _errors$alertmanagers !== void 0 && _errors$alertmanagers[index]),
                    error: "Field is required",
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({
                      className: styles.input,
                      defaultValue: field.url
                    }, register(`alertmanagers.${index}.url`, {
                      required: true
                    }), {
                      placeholder: "http://localhost:9093",
                      addonAfter: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
                        "aria-label": "Remove alertmanager",
                        type: "button",
                        onClick: () => remove(index),
                        variant: "destructive",
                        className: styles.destroyInputRow,
                        children: _Icon || (_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
                          name: "trash-alt"
                        }))
                      })
                    }))
                  }, `${field.id}-${index}`);
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
                  type: "button",
                  variant: "secondary",
                  onClick: () => append({
                    url: ''
                  }),
                  children: "Add URL"
                })]
              });
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
              type: "submit",
              onSubmit: () => onSubmit,
              children: "Add Alertmanagers"
            })
          })]
        });
      }
    })]
  });
};

function cleanAlertmanagerUrl(url) {
  return url.replace(/\/$/, '').replace(/\/api\/v[1|2]\/alerts/i, '');
}

const AddAlertManagerModal_getStyles = theme => {
  const muted = emotion_css_esm.css`
    color: ${theme.colors.text.secondary};
  `;
  return {
    description: (0,emotion_css_esm.cx)(emotion_css_esm.css`
        margin-bottom: ${theme.spacing(2)};
      `, muted),
    muted: muted,
    bold: emotion_css_esm.css`
      font-weight: ${theme.typography.fontWeightBold};
    `,
    modal: emotion_css_esm.css``,
    modalIcon: (0,emotion_css_esm.cx)(muted, emotion_css_esm.css`
        margin-right: ${theme.spacing(1)};
      `),
    modalTitle: emotion_css_esm.css`
      display: flex;
    `,
    input: emotion_css_esm.css`
      margin-bottom: ${theme.spacing(1)};
      margin-right: ${theme.spacing(1)};
    `,
    inputRow: emotion_css_esm.css`
      display: flex;
    `,
    destroyInputRow: emotion_css_esm.css`
      padding: ${theme.spacing(1)};
    `,
    fieldArray: emotion_css_esm.css`
      margin-bottom: ${theme.spacing(4)};
    `
  };
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/admin/ExternalAlertmanagers.tsx
var ExternalAlertmanagers_h, _th, _th2, ExternalAlertmanagers_Icon, _Icon2, _Icon3;












const alertmanagerChoices = [{
  value: 'internal',
  label: 'Only Internal'
}, {
  value: 'external',
  label: 'Only External'
}, {
  value: 'all',
  label: 'Both internal and external'
}];
const ExternalAlertmanagers = () => {
  var _Button;

  const styles = (0,src.useStyles2)(ExternalAlertmanagers_getStyles);
  const dispatch = (0,es.useDispatch)();
  const [modalState, setModalState] = (0,react.useState)({
    open: false,
    payload: [{
      url: ''
    }]
  });
  const [deleteModalState, setDeleteModalState] = (0,react.useState)({
    open: false,
    index: 0
  });
  const externalAlertManagers = useExternalAmSelector();
  const alertmanagersChoice = (0,es.useSelector)(state => {
    var _state$unifiedAlertin;

    return (_state$unifiedAlertin = state.unifiedAlerting.externalAlertmanagers.alertmanagerConfig.result) === null || _state$unifiedAlertin === void 0 ? void 0 : _state$unifiedAlertin.alertmanagersChoice;
  });
  const theme = (0,src.useTheme2)();
  (0,react.useEffect)(() => {
    dispatch((0,actions/* fetchExternalAlertmanagersAction */.zy)());
    dispatch((0,actions/* fetchExternalAlertmanagersConfigAction */.wE)());
    const interval = setInterval(() => dispatch((0,actions/* fetchExternalAlertmanagersAction */.zy)()), 5000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);
  const onDelete = (0,react.useCallback)(index => {
    // to delete we need to filter the alertmanager from the list and repost
    const newList = (externalAlertManagers !== null && externalAlertManagers !== void 0 ? externalAlertManagers : []).filter((am, i) => i !== index).map(am => {
      return am.url;
    });
    dispatch((0,actions/* addExternalAlertmanagersAction */.sx)({
      alertmanagers: newList,
      alertmanagersChoice: alertmanagersChoice !== null && alertmanagersChoice !== void 0 ? alertmanagersChoice : 'all'
    }));
    setDeleteModalState({
      open: false,
      index: 0
    });
  }, [externalAlertManagers, dispatch, alertmanagersChoice]);
  const onEdit = (0,react.useCallback)(() => {
    const ams = externalAlertManagers ? [...externalAlertManagers] : [{
      url: ''
    }];
    setModalState(state => Object.assign({}, state, {
      open: true,
      payload: ams
    }));
  }, [setModalState, externalAlertManagers]);
  const onOpenModal = (0,react.useCallback)(() => {
    setModalState(state => {
      const ams = externalAlertManagers ? [...externalAlertManagers, {
        url: ''
      }] : [{
        url: ''
      }];
      return Object.assign({}, state, {
        open: true,
        payload: ams
      });
    });
  }, [externalAlertManagers]);
  const onCloseModal = (0,react.useCallback)(() => {
    setModalState(state => Object.assign({}, state, {
      open: false
    }));
  }, [setModalState]);

  const onChangeAlertmanagerChoice = alertmanagersChoice => {
    dispatch((0,actions/* addExternalAlertmanagersAction */.sx)({
      alertmanagers: externalAlertManagers.map(am => am.url),
      alertmanagersChoice
    }));
  };

  const onChangeAlertmanagers = alertmanagers => {
    dispatch((0,actions/* addExternalAlertmanagersAction */.sx)({
      alertmanagers,
      alertmanagersChoice: alertmanagersChoice !== null && alertmanagersChoice !== void 0 ? alertmanagersChoice : 'all'
    }));
  };

  const getStatusColor = status => {
    switch (status) {
      case 'active':
        return theme.colors.success.main;

      case 'pending':
        return theme.colors.warning.main;

      default:
        return theme.colors.error.main;
    }
  };

  const noAlertmanagers = (externalAlertManagers === null || externalAlertManagers === void 0 ? void 0 : externalAlertManagers.length) === 0;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [ExternalAlertmanagers_h || (ExternalAlertmanagers_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
      children: "External Alertmanagers"
    })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.muted,
      children: "You can have your Grafana managed alerts be delivered to one or many external Alertmanager(s) in addition to the internal Alertmanager by specifying their URLs below."
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.actions,
      children: !noAlertmanagers && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
        type: "button",
        onClick: onOpenModal,
        children: "Add Alertmanager"
      })
    }), noAlertmanagers ? /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyListCTA/* default */.Z, {
      title: "You have not added any external alertmanagers",
      onClick: onOpenModal,
      buttonTitle: "Add Alertmanager",
      buttonIcon: "bell-slash"
    }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        className: (0,emotion_css_esm.cx)('filter-table form-inline filter-table--hover', styles.table),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [_th || (_th = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: "Url"
            })), _th2 || (_th2 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: "Status"
            })), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              style: {
                width: '2%'
              },
              children: "Action"
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: externalAlertManagers === null || externalAlertManagers === void 0 ? void 0 : externalAlertManagers.map((am, index) => {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                  className: styles.url,
                  children: am.url
                }), am.actualUrl ? /*#__PURE__*/(0,jsx_runtime.jsx)(src.Tooltip, {
                  content: `Discovered ${am.actualUrl} from ${am.url}`,
                  theme: "info",
                  children: ExternalAlertmanagers_Icon || (ExternalAlertmanagers_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
                    name: "info-circle"
                  }))
                }) : null]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
                  name: "heart",
                  style: {
                    color: getStatusColor(am.status)
                  },
                  title: am.status
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)(src.HorizontalGroup, {
                  children: [_Button || (_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
                    variant: "secondary",
                    type: "button",
                    onClick: onEdit,
                    "aria-label": "Edit alertmanager",
                    children: _Icon2 || (_Icon2 = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
                      name: "pen"
                    }))
                  })), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
                    variant: "destructive",
                    "aria-label": "Remove alertmanager",
                    type: "button",
                    onClick: () => setDeleteModalState({
                      open: true,
                      index
                    }),
                    children: _Icon3 || (_Icon3 = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
                      name: "trash-alt"
                    }))
                  })]
                })
              })]
            }, index);
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
          label: "Send alerts to",
          description: "Sets which Alertmanager will handle your alerts. Internal (Grafana built in Alertmanager), External (All Alertmanagers configured above), or both.",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.RadioButtonGroup, {
            options: alertmanagerChoices,
            value: alertmanagersChoice,
            onChange: value => onChangeAlertmanagerChoice(value)
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.ConfirmModal, {
      isOpen: deleteModalState.open,
      title: "Remove Alertmanager",
      body: "Are you sure you want to remove this Alertmanager",
      confirmText: "Remove",
      onConfirm: () => onDelete(deleteModalState.index),
      onDismiss: () => setDeleteModalState({
        open: false,
        index: 0
      })
    }), modalState.open && /*#__PURE__*/(0,jsx_runtime.jsx)(AddAlertManagerModal, {
      onClose: onCloseModal,
      alertmanagers: modalState.payload,
      onChangeAlertmanagerConfig: onChangeAlertmanagers
    })]
  });
};

const ExternalAlertmanagers_getStyles = theme => ({
  url: emotion_css_esm.css`
    margin-right: ${theme.spacing(1)};
  `,
  muted: emotion_css_esm.css`
    color: ${theme.colors.text.secondary};
  `,
  actions: emotion_css_esm.css`
    margin-top: ${theme.spacing(2)};
    display: flex;
    justify-content: flex-end;
  `,
  table: emotion_css_esm.css`
    margin-bottom: ${theme.spacing(2)};
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/Admin.tsx
var _AlertingPageWrapper;







function Admin() {
  return _AlertingPageWrapper || (_AlertingPageWrapper = /*#__PURE__*/(0,jsx_runtime.jsxs)(AlertingPageWrapper/* AlertingPageWrapper */.J, {
    pageId: "alerting-admin",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AlertmanagerConfig, {
      "test-id": "admin-alertmanagerconfig"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ExternalAlertmanagers, {
      "test-id": "admin-externalalertmanagers"
    })]
  }));
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ AlertingPageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AlertingPageWrapper = _ref => {
  let {
    children,
    pageId,
    isLoading
  } = _ref;
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__/* .getNavModel */ .h)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.navIndex), pageId);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Contents */ .Z.Contents, {
      isLoading: isLoading,
      children: children
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useAlertManagerSourceName)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");






function useIsAlertManagerAvailable(availableAlertManagers) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alertManagerName => {
    const availableAlertManagersNames = availableAlertManagers.map(am => am.name);
    return availableAlertManagersNames.includes(alertManagerName);
  }, [availableAlertManagers]);
}
/* This will return am name either from query params or from local storage or a default (grafana).
 * Due to RBAC permissions Grafana Managed Alert manager or external alert managers may not be available
 * In the worst case neihter GMA nor external alert manager is available
 */


function useAlertManagerSourceName(availableAlertManagers) {
  const [queryParams, updateQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__/* .useQueryParams */ .K)();
  const isAlertManagerAvailable = useIsAlertManagerAvailable(availableAlertManagers);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alertManagerSourceName => {
    if (!isAlertManagerAvailable(alertManagerSourceName)) {
      return;
    }

    if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_4__/* .GRAFANA_RULES_SOURCE_NAME */ .GC) {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"]["delete"] */ .Z["delete"](_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_LOCAL_STORAGE_KEY */ .de);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_QUERY_KEY */ .c4]: null
      });
    } else {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].set */ .Z.set(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_LOCAL_STORAGE_KEY */ .de, alertManagerSourceName);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_QUERY_KEY */ .c4]: alertManagerSourceName
      });
    }
  }, [updateQueryParams, isAlertManagerAvailable]);
  const querySource = queryParams[_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_QUERY_KEY */ .c4];

  if (querySource && typeof querySource === 'string') {
    if (isAlertManagerAvailable(querySource)) {
      return [querySource, update];
    } else {
      // non existing alertmanager
      return [undefined, update];
    }
  }

  const storeSource = app_core_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_LOCAL_STORAGE_KEY */ .de);

  if (storeSource && typeof storeSource === 'string' && isAlertManagerAvailable(storeSource)) {
    update(storeSource);
    return [storeSource, update];
  }

  if (isAlertManagerAvailable(_utils_datasource__WEBPACK_IMPORTED_MODULE_4__/* .GRAFANA_RULES_SOURCE_NAME */ .GC)) {
    return [_utils_datasource__WEBPACK_IMPORTED_MODULE_4__/* .GRAFANA_RULES_SOURCE_NAME */ .GC, update];
  }

  return [undefined, update];
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useAlertManagersByPermission)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");


function useAlertManagersByPermission(accessType) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__/* .getAlertManagerDataSourcesByPermission */ .LE)(accessType), [accessType]);
}

/***/ })

}]);