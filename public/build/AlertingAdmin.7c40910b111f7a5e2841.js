"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[7680],{

 "./public/app/features/alerting/unified/Admin.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "default": () => ( Admin)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var AlertingPageWrapper = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var useAlertManagerSourceName = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
var useAlertManagerSources = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
var useUnifiedAlertingSelector = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
var actions = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
var datasource = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
var redux = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
var AlertManagerPicker = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _Alert;















function AlertmanagerConfig() {
  var _Button;

  const dispatch = (0,es.useDispatch)();
  const alertManagers = (0,useAlertManagerSources.k)('notification');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,useAlertManagerSourceName.k)(alertManagers);
  const [showConfirmDeleteAMConfig, setShowConfirmDeleteAMConfig] = (0,react.useState)(false);
  const {
    loading: isDeleting
  } = (0,useUnifiedAlertingSelector._)(state => state.deleteAMConfig);
  const {
    loading: isSaving
  } = (0,useUnifiedAlertingSelector._)(state => state.saveAMConfig);
  const readOnly = alertManagerSourceName ? (0,datasource.RY)(alertManagerSourceName) : false;
  const styles = (0,src.useStyles2)(getStyles);
  const configRequests = (0,useUnifiedAlertingSelector._)(state => state.amConfigs);
  const {
    result: config,
    loading: isLoadingConfig,
    error: loadingError
  } = alertManagerSourceName && configRequests[alertManagerSourceName] || redux.oq;
  (0,react.useEffect)(() => {
    if (alertManagerSourceName) {
      dispatch((0,actions.Yh)(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch]);

  const resetConfig = () => {
    if (alertManagerSourceName) {
      dispatch((0,actions.Nc)(alertManagerSourceName));
    }

    setShowConfirmDeleteAMConfig(false);
  };

  const defaultValues = (0,react.useMemo)(() => ({
    configJSON: config ? JSON.stringify(config, null, 2) : ''
  }), [config]);
  const loading = isDeleting || isLoadingConfig || isSaving;

  const onSubmit = values => {
    if (alertManagerSourceName && config) {
      dispatch((0,actions.mM)({
        newConfig: JSON.parse(values.configJSON),
        oldConfig: config,
        alertManagerSourceName,
        successMessage: 'Alertmanager configuration updated.',
        refetch: true
      }));
    }
  };

  return (0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [(0,jsx_runtime.jsx)(AlertManagerPicker.P, {
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName,
      dataSources: alertManagers
    }), loadingError && !loading && (0,jsx_runtime.jsx)(src.Alert, {
      severity: "error",
      title: "Error loading Alertmanager configuration",
      children: loadingError.message || 'Unknown error.'
    }), isDeleting && alertManagerSourceName !== datasource.GC && (_Alert || (_Alert = (0,jsx_runtime.jsx)(src.Alert, {
      severity: "info",
      title: "Resetting Alertmanager configuration",
      children: "It might take a while..."
    }))), alertManagerSourceName && config && (0,jsx_runtime.jsx)(src.Form, {
      defaultValues: defaultValues,
      onSubmit: onSubmit,
      children: _ref => {
        var _errors$configJSON;

        let {
          register,
          errors
        } = _ref;
        return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [!readOnly && (0,jsx_runtime.jsx)(src.Field, {
            disabled: loading,
            label: "Configuration",
            invalid: !!errors.configJSON,
            error: (_errors$configJSON = errors.configJSON) === null || _errors$configJSON === void 0 ? void 0 : _errors$configJSON.message,
            children: (0,jsx_runtime.jsx)(src.TextArea, Object.assign({}, register('configJSON', {
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
          }), readOnly && (0,jsx_runtime.jsx)(src.Field, {
            label: "Configuration",
            children: (0,jsx_runtime.jsx)("pre", {
              "data-testid": "readonly-config",
              children: defaultValues.configJSON
            })
          }), !readOnly && (0,jsx_runtime.jsxs)(src.HorizontalGroup, {
            children: [_Button || (_Button = (0,jsx_runtime.jsx)(src.Button, {
              type: "submit",
              variant: "primary",
              disabled: loading,
              children: "Save"
            })), (0,jsx_runtime.jsx)(src.Button, {
              type: "button",
              disabled: loading,
              variant: "destructive",
              onClick: () => setShowConfirmDeleteAMConfig(true),
              children: "Reset configuration"
            })]
          }), !!showConfirmDeleteAMConfig && (0,jsx_runtime.jsx)(src.ConfirmModal, {
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
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
;

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
;
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

  const modalTitle = (0,jsx_runtime.jsxs)("div", {
    className: styles.modalTitle,
    children: [(0,jsx_runtime.jsx)(src.Icon, {
      name: "bell",
      className: styles.modalIcon
    }), _h || (_h = (0,jsx_runtime.jsx)("h3", {
      children: "Add Alertmanager"
    }))]
  });

  const onSubmit = values => {
    onChangeAlertmanagerConfig(values.alertmanagers.map(am => cleanAlertmanagerUrl(am.url)));
    onClose();
  };

  return (0,jsx_runtime.jsxs)(src.Modal, {
    title: modalTitle,
    isOpen: true,
    onDismiss: onClose,
    className: styles.modal,
    children: [(0,jsx_runtime.jsx)("div", {
      className: styles.description,
      children: "We use a service discovery method to find existing Alertmanagers for a given URL."
    }), (0,jsx_runtime.jsx)(src.Form, {
      onSubmit: onSubmit,
      defaultValues: defaultValues,
      children: _ref2 => {
        let {
          register,
          control,
          errors
        } = _ref2;
        return (0,jsx_runtime.jsxs)("div", {
          children: [(0,jsx_runtime.jsx)(src.FieldArray, {
            control: control,
            name: "alertmanagers",
            children: _ref3 => {
              let {
                fields,
                append,
                remove
              } = _ref3;
              return (0,jsx_runtime.jsxs)("div", {
                className: styles.fieldArray,
                children: [(0,jsx_runtime.jsx)("div", {
                  className: styles.bold,
                  children: "Source url"
                }), (0,jsx_runtime.jsx)("div", {
                  className: styles.muted,
                  children: "Authentication can be done via URL (e.g. user:password@myalertmanager.com) and only the Alertmanager v2 API is supported. The suffix is added internally, there is no need to specify it."
                }), fields.map((field, index) => {
                  var _errors$alertmanagers;

                  return (0,jsx_runtime.jsx)(src.Field, {
                    invalid: !!(errors !== null && errors !== void 0 && (_errors$alertmanagers = errors.alertmanagers) !== null && _errors$alertmanagers !== void 0 && _errors$alertmanagers[index]),
                    error: "Field is required",
                    children: (0,jsx_runtime.jsx)(src.Input, Object.assign({
                      className: styles.input,
                      defaultValue: field.url
                    }, register(`alertmanagers.${index}.url`, {
                      required: true
                    }), {
                      placeholder: "http://localhost:9093",
                      addonAfter: (0,jsx_runtime.jsx)(src.Button, {
                        "aria-label": "Remove alertmanager",
                        type: "button",
                        onClick: () => remove(index),
                        variant: "destructive",
                        className: styles.destroyInputRow,
                        children: _Icon || (_Icon = (0,jsx_runtime.jsx)(src.Icon, {
                          name: "trash-alt"
                        }))
                      })
                    }))
                  }, `${field.id}-${index}`);
                }), (0,jsx_runtime.jsx)(src.Button, {
                  type: "button",
                  variant: "secondary",
                  onClick: () => append({
                    url: ''
                  }),
                  children: "Add URL"
                })]
              });
            }
          }), (0,jsx_runtime.jsx)("div", {
            children: (0,jsx_runtime.jsx)(src.Button, {
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
;
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
    dispatch((0,actions.zy)());
    dispatch((0,actions.wE)());
    const interval = setInterval(() => dispatch((0,actions.zy)()), 5000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);
  const onDelete = (0,react.useCallback)(index => {
    const newList = (externalAlertManagers !== null && externalAlertManagers !== void 0 ? externalAlertManagers : []).filter((am, i) => i !== index).map(am => {
      return am.url;
    });
    dispatch((0,actions.sx)({
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
    dispatch((0,actions.sx)({
      alertmanagers: externalAlertManagers.map(am => am.url),
      alertmanagersChoice
    }));
  };

  const onChangeAlertmanagers = alertmanagers => {
    dispatch((0,actions.sx)({
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
  return (0,jsx_runtime.jsxs)("div", {
    children: [ExternalAlertmanagers_h || (ExternalAlertmanagers_h = (0,jsx_runtime.jsx)("h4", {
      children: "External Alertmanagers"
    })), (0,jsx_runtime.jsx)("div", {
      className: styles.muted,
      children: "You can have your Grafana managed alerts be delivered to one or many external Alertmanager(s) in addition to the internal Alertmanager by specifying their URLs below."
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.actions,
      children: !noAlertmanagers && (0,jsx_runtime.jsx)(src.Button, {
        type: "button",
        onClick: onOpenModal,
        children: "Add Alertmanager"
      })
    }), noAlertmanagers ? (0,jsx_runtime.jsx)(EmptyListCTA.Z, {
      title: "You have not added any external alertmanagers",
      onClick: onOpenModal,
      buttonTitle: "Add Alertmanager",
      buttonIcon: "bell-slash"
    }) : (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsxs)("table", {
        className: (0,emotion_css_esm.cx)('filter-table form-inline filter-table--hover', styles.table),
        children: [(0,jsx_runtime.jsx)("thead", {
          children: (0,jsx_runtime.jsxs)("tr", {
            children: [_th || (_th = (0,jsx_runtime.jsx)("th", {
              children: "Url"
            })), _th2 || (_th2 = (0,jsx_runtime.jsx)("th", {
              children: "Status"
            })), (0,jsx_runtime.jsx)("th", {
              style: {
                width: '2%'
              },
              children: "Action"
            })]
          })
        }), (0,jsx_runtime.jsx)("tbody", {
          children: externalAlertManagers === null || externalAlertManagers === void 0 ? void 0 : externalAlertManagers.map((am, index) => {
            return (0,jsx_runtime.jsxs)("tr", {
              children: [(0,jsx_runtime.jsxs)("td", {
                children: [(0,jsx_runtime.jsx)("span", {
                  className: styles.url,
                  children: am.url
                }), am.actualUrl ? (0,jsx_runtime.jsx)(src.Tooltip, {
                  content: `Discovered ${am.actualUrl} from ${am.url}`,
                  theme: "info",
                  children: ExternalAlertmanagers_Icon || (ExternalAlertmanagers_Icon = (0,jsx_runtime.jsx)(src.Icon, {
                    name: "info-circle"
                  }))
                }) : null]
              }), (0,jsx_runtime.jsx)("td", {
                children: (0,jsx_runtime.jsx)(src.Icon, {
                  name: "heart",
                  style: {
                    color: getStatusColor(am.status)
                  },
                  title: am.status
                })
              }), (0,jsx_runtime.jsx)("td", {
                children: (0,jsx_runtime.jsxs)(src.HorizontalGroup, {
                  children: [_Button || (_Button = (0,jsx_runtime.jsx)(src.Button, {
                    variant: "secondary",
                    type: "button",
                    onClick: onEdit,
                    "aria-label": "Edit alertmanager",
                    children: _Icon2 || (_Icon2 = (0,jsx_runtime.jsx)(src.Icon, {
                      name: "pen"
                    }))
                  })), (0,jsx_runtime.jsx)(src.Button, {
                    variant: "destructive",
                    "aria-label": "Remove alertmanager",
                    type: "button",
                    onClick: () => setDeleteModalState({
                      open: true,
                      index
                    }),
                    children: _Icon3 || (_Icon3 = (0,jsx_runtime.jsx)(src.Icon, {
                      name: "trash-alt"
                    }))
                  })]
                })
              })]
            }, index);
          })
        })]
      }), (0,jsx_runtime.jsx)("div", {
        children: (0,jsx_runtime.jsx)(src.Field, {
          label: "Send alerts to",
          description: "Sets which Alertmanager will handle your alerts. Internal (Grafana built in Alertmanager), External (All Alertmanagers configured above), or both.",
          children: (0,jsx_runtime.jsx)(src.RadioButtonGroup, {
            options: alertmanagerChoices,
            value: alertmanagersChoice,
            onChange: value => onChangeAlertmanagerChoice(value)
          })
        })
      })]
    }), (0,jsx_runtime.jsx)(src.ConfirmModal, {
      isOpen: deleteModalState.open,
      title: "Remove Alertmanager",
      body: "Are you sure you want to remove this Alertmanager",
      confirmText: "Remove",
      onConfirm: () => onDelete(deleteModalState.index),
      onDismiss: () => setDeleteModalState({
        open: false,
        index: 0
      })
    }), modalState.open && (0,jsx_runtime.jsx)(AddAlertManagerModal, {
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
;
var _AlertingPageWrapper;







function Admin() {
  return _AlertingPageWrapper || (_AlertingPageWrapper = (0,jsx_runtime.jsxs)(AlertingPageWrapper.J, {
    pageId: "alerting-admin",
    children: [(0,jsx_runtime.jsx)(AlertmanagerConfig, {
      "test-id": "admin-alertmanagerconfig"
    }), (0,jsx_runtime.jsx)(ExternalAlertmanagers, {
      "test-id": "admin-externalalertmanagers"
    })]
  }));
}

 }),

 "./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "J": () => ( AlertingPageWrapper)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AlertingPageWrapper = _ref => {
  let {
    children,
    pageId,
    isLoading
  } = _ref;
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ .h)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.navIndex), pageId);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ .Z, {
    navModel: navModel,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ .Z.Contents, {
      isLoading: isLoading,
      children: children
    })
  });
};

 }),

 "./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "k": () => ( useAlertManagerSourceName)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
 var app_core_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/store.ts");
 var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
 var _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");






function useIsAlertManagerAvailable(availableAlertManagers) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alertManagerName => {
    const availableAlertManagersNames = availableAlertManagers.map(am => am.name);
    return availableAlertManagersNames.includes(alertManagerName);
  }, [availableAlertManagers]);
}


function useAlertManagerSourceName(availableAlertManagers) {
  const [queryParams, updateQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__ .K)();
  const isAlertManagerAvailable = useIsAlertManagerAvailable(availableAlertManagers);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alertManagerSourceName => {
    if (!isAlertManagerAvailable(alertManagerSourceName)) {
      return;
    }

    if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ .GC) {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__ .Z["delete"](_utils_constants__WEBPACK_IMPORTED_MODULE_3__ .de);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__ .c4]: null
      });
    } else {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__ .Z.set(_utils_constants__WEBPACK_IMPORTED_MODULE_3__ .de, alertManagerSourceName);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__ .c4]: alertManagerSourceName
      });
    }
  }, [updateQueryParams, isAlertManagerAvailable]);
  const querySource = queryParams[_utils_constants__WEBPACK_IMPORTED_MODULE_3__ .c4];

  if (querySource && typeof querySource === 'string') {
    if (isAlertManagerAvailable(querySource)) {
      return [querySource, update];
    } else {
      return [undefined, update];
    }
  }

  const storeSource = app_core_store__WEBPACK_IMPORTED_MODULE_2__ .Z.get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__ .de);

  if (storeSource && typeof storeSource === 'string' && isAlertManagerAvailable(storeSource)) {
    update(storeSource);
    return [storeSource, update];
  }

  if (isAlertManagerAvailable(_utils_datasource__WEBPACK_IMPORTED_MODULE_4__ .GC)) {
    return [_utils_datasource__WEBPACK_IMPORTED_MODULE_4__ .GC, update];
  }

  return [undefined, update];
}

 }),

 "./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "k": () => ( useAlertManagersByPermission)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");


function useAlertManagersByPermission(accessType) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__ .LE)(accessType), [accessType]);
}

 })

}]);