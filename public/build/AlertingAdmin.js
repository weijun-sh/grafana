"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingAdmin"],{

/***/ "./public/app/features/alerting/unified/Admin.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Admin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_admin_AlertmanagerConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/admin/AlertmanagerConfig.tsx");
/* harmony import */ var _components_admin_ExternalAlertmanagers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/admin/ExternalAlertmanagers.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _AlertingPageWrapper;







function Admin() {
  return _AlertingPageWrapper || (_AlertingPageWrapper = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_1__.AlertingPageWrapper, {
    pageId: "alerting-admin",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_admin_AlertmanagerConfig__WEBPACK_IMPORTED_MODULE_2__["default"], {
      "test-id": "admin-alertmanagerconfig"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_admin_ExternalAlertmanagers__WEBPACK_IMPORTED_MODULE_3__.ExternalAlertmanagers, {
      "test-id": "admin-externalalertmanagers"
    })]
  }));
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertingPageWrapper": () => (/* binding */ AlertingPageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AlertingPageWrapper = ({
  children,
  pageId,
  isLoading
}) => {
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.navIndex), pageId);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      isLoading: isLoading,
      children: children
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/admin/AddAlertManagerModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddAlertManagerModal": () => (/* binding */ AddAlertManagerModal)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _Icon;






const AddAlertManagerModal = ({
  alertmanagers,
  onChangeAlertmanagerConfig,
  onClose
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    alertmanagers: alertmanagers
  }), [alertmanagers]);

  const modalTitle = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: styles.modalTitle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: "bell",
      className: styles.modalIcon
    }), _h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
      children: "Add Alertmanager"
    }))]
  });

  const onSubmit = values => {
    onChangeAlertmanagerConfig(values.alertmanagers.map(am => cleanAlertmanagerUrl(am.url)));
    onClose();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: modalTitle,
    isOpen: true,
    onDismiss: onClose,
    className: styles.modal,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.description,
      children: "We use a service discovery method to find existing Alertmanagers for a given URL."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
      onSubmit: onSubmit,
      defaultValues: defaultValues,
      children: ({
        register,
        control,
        errors
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldArray, {
          control: control,
          name: "alertmanagers",
          children: ({
            fields,
            append,
            remove
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: styles.fieldArray,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: styles.bold,
              children: "Source url"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: styles.muted,
              children: "Authentication can be done via URL (e.g. user:password@myalertmanager.com) and only the Alertmanager v2 API is supported. The suffix is added internally, there is no need to specify it."
            }), fields.map((field, index) => {
              var _errors$alertmanagers;

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
                invalid: !!(errors !== null && errors !== void 0 && (_errors$alertmanagers = errors.alertmanagers) !== null && _errors$alertmanagers !== void 0 && _errors$alertmanagers[index]),
                error: "Field is required",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                  className: styles.input,
                  defaultValue: field.url
                }, register(`alertmanagers.${index}.url`, {
                  required: true
                }), {
                  placeholder: "http://localhost:9093",
                  addonAfter: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    "aria-label": "Remove alertmanager",
                    type: "button",
                    onClick: () => remove(index),
                    variant: "destructive",
                    className: styles.destroyInputRow,
                    children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                      name: "trash-alt"
                    }))
                  })
                }))
              }, `${field.id}-${index}`);
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              type: "button",
              variant: "secondary",
              onClick: () => append({
                url: ''
              }),
              children: "Add URL"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "submit",
            onSubmit: () => onSubmit,
            children: "Add Alertmanagers"
          })
        })]
      })
    })]
  });
};

function cleanAlertmanagerUrl(url) {
  return url.replace(/\/$/, '').replace(/\/api\/v[1|2]\/alerts/i, '');
}

const getStyles = theme => {
  const muted = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
  `;
  return {
    description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
        margin-bottom: ${theme.spacing(2)};
      `, muted),
    muted: muted,
    bold: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-weight: ${theme.typography.fontWeightBold};
    `,
    modal: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css``,
    modalIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(muted, _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
        margin-right: ${theme.spacing(1)};
      `),
    modalTitle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
    `,
    input: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing(1)};
      margin-right: ${theme.spacing(1)};
    `,
    inputRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
    `,
    destroyInputRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing(1)};
    `,
    fieldArray: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing(4)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/admin/AlertmanagerConfig.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AlertmanagerConfig)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _AlertManagerPicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert;















function AlertmanagerConfig() {
  var _Button;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const alertManagers = (0,_hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_5__.useAlertManagersByPermission)('notification');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_4__.useAlertManagerSourceName)(alertManagers);
  const [showConfirmDeleteAMConfig, setShowConfirmDeleteAMConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    loading: isDeleting
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.deleteAMConfig);
  const {
    loading: isSaving
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.saveAMConfig);
  const readOnly = alertManagerSourceName ? (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_8__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName) : false;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const configRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const {
    result: config,
    loading: isLoadingConfig,
    error: loadingError
  } = alertManagerSourceName && configRequests[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_9__.initialAsyncRequestState;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (alertManagerSourceName) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.fetchAlertManagerConfigAction)(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch]);

  const resetConfig = () => {
    if (alertManagerSourceName) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.deleteAlertManagerConfigAction)(alertManagerSourceName));
    }

    setShowConfirmDeleteAMConfig(false);
  };

  const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    configJSON: config ? JSON.stringify(config, null, 2) : ''
  }), [config]);
  const loading = isDeleting || isLoadingConfig || isSaving;

  const onSubmit = values => {
    if (alertManagerSourceName && config) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.updateAlertManagerConfigAction)({
        newConfig: JSON.parse(values.configJSON),
        oldConfig: config,
        alertManagerSourceName,
        successMessage: 'Alertmanager configuration updated.',
        refetch: true
      }));
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_10__.AlertManagerPicker, {
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName,
      dataSources: alertManagers
    }), loadingError && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      severity: "error",
      title: "Error loading Alertmanager configuration",
      children: loadingError.message || 'Unknown error.'
    }), isDeleting && alertManagerSourceName !== _utils_datasource__WEBPACK_IMPORTED_MODULE_8__.GRAFANA_RULES_SOURCE_NAME && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      severity: "info",
      title: "Resetting Alertmanager configuration",
      children: "It might take a while..."
    }))), alertManagerSourceName && config && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
      defaultValues: defaultValues,
      onSubmit: onSubmit,
      children: ({
        register,
        errors
      }) => {
        var _errors$configJSON;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
          children: [!readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            disabled: loading,
            label: "Configuration",
            invalid: !!errors.configJSON,
            error: (_errors$configJSON = errors.configJSON) === null || _errors$configJSON === void 0 ? void 0 : _errors$configJSON.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TextArea, Object.assign({}, register('configJSON', {
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
          }), readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Configuration",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("pre", {
              "data-testid": "readonly-config",
              children: defaultValues.configJSON
            })
          }), !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
            children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              type: "submit",
              variant: "primary",
              disabled: loading,
              children: "Save"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              type: "button",
              disabled: loading,
              variant: "destructive",
              onClick: () => setShowConfirmDeleteAMConfig(true),
              children: "Reset configuration"
            })]
          }), !!showConfirmDeleteAMConfig && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, {
            isOpen: true,
            title: "Reset Alertmanager configuration",
            body: `Are you sure you want to reset configuration ${alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_8__.GRAFANA_RULES_SOURCE_NAME ? 'for the Grafana Alertmanager' : `for "${alertManagerSourceName}"`}? Contact points and notification policies will be reset to their defaults.`,
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
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(4)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/admin/ExternalAlertmanagers.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalAlertmanagers": () => (/* binding */ ExternalAlertmanagers)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var _hooks_useExternalAmSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useExternalAmSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _AddAlertManagerModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/admin/AddAlertManagerModal.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _th, _th2, _Icon, _Icon2, _Icon3;












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

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const [modalState, setModalState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    open: false,
    payload: [{
      url: ''
    }]
  });
  const [deleteModalState, setDeleteModalState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    open: false,
    index: 0
  });
  const externalAlertManagers = (0,_hooks_useExternalAmSelector__WEBPACK_IMPORTED_MODULE_5__.useExternalAmSelector)();
  const alertmanagersChoice = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => {
    var _state$unifiedAlertin;

    return (_state$unifiedAlertin = state.unifiedAlerting.externalAlertmanagers.alertmanagerConfig.result) === null || _state$unifiedAlertin === void 0 ? void 0 : _state$unifiedAlertin.alertmanagersChoice;
  });
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.fetchExternalAlertmanagersAction)());
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.fetchExternalAlertmanagersConfigAction)());
    const interval = setInterval(() => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.fetchExternalAlertmanagersAction)()), 5000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);
  const onDelete = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(index => {
    // to delete we need to filter the alertmanager from the list and repost
    const newList = (externalAlertManagers !== null && externalAlertManagers !== void 0 ? externalAlertManagers : []).filter((am, i) => i !== index).map(am => {
      return am.url;
    });
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.addExternalAlertmanagersAction)({
      alertmanagers: newList,
      alertmanagersChoice: alertmanagersChoice !== null && alertmanagersChoice !== void 0 ? alertmanagersChoice : 'all'
    }));
    setDeleteModalState({
      open: false,
      index: 0
    });
  }, [externalAlertManagers, dispatch, alertmanagersChoice]);
  const onEdit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const ams = externalAlertManagers ? [...externalAlertManagers] : [{
      url: ''
    }];
    setModalState(state => Object.assign({}, state, {
      open: true,
      payload: ams
    }));
  }, [setModalState, externalAlertManagers]);
  const onOpenModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
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
  const onCloseModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setModalState(state => Object.assign({}, state, {
      open: false
    }));
  }, [setModalState]);

  const onChangeAlertmanagerChoice = alertmanagersChoice => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.addExternalAlertmanagersAction)({
      alertmanagers: externalAlertManagers.map(am => am.url),
      alertmanagersChoice
    }));
  };

  const onChangeAlertmanagers = alertmanagers => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.addExternalAlertmanagersAction)({
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h4", {
      children: "External Alertmanagers"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.muted,
      children: "You can have your Grafana managed alerts be delivered to one or many external Alertmanager(s) in addition to the internal Alertmanager by specifying their URLs below."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.actions,
      children: !noAlertmanagers && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        type: "button",
        onClick: onOpenModal,
        children: "Add Alertmanager"
      })
    }), noAlertmanagers ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "You have not added any external alertmanagers",
      onClick: onOpenModal,
      buttonTitle: "Add Alertmanager",
      buttonIcon: "bell-slash"
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("table", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('filter-table form-inline filter-table--hover', styles.table),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("thead", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
            children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
              children: "Url"
            })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
              children: "Status"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
              style: {
                width: '2%'
              },
              children: "Action"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("tbody", {
          children: externalAlertManagers === null || externalAlertManagers === void 0 ? void 0 : externalAlertManagers.map((am, index) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("td", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                  className: styles.url,
                  children: am.url
                }), am.actualUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                  content: `Discovered ${am.actualUrl} from ${am.url}`,
                  theme: "info",
                  children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                    name: "info-circle"
                  }))
                }) : null]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                  name: "heart",
                  style: {
                    color: getStatusColor(am.status)
                  },
                  title: am.status
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
                  children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    variant: "secondary",
                    type: "button",
                    onClick: onEdit,
                    "aria-label": "Edit alertmanager",
                    children: _Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                      name: "pen"
                    }))
                  })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    variant: "destructive",
                    "aria-label": "Remove alertmanager",
                    type: "button",
                    onClick: () => setDeleteModalState({
                      open: true,
                      index
                    }),
                    children: _Icon3 || (_Icon3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                      name: "trash-alt"
                    }))
                  })]
                })
              })]
            }, index);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          label: "Send alerts to",
          description: "Sets which Alertmanager will handle your alerts. Internal (Grafana built in Alertmanager), External (All Alertmanagers configured above), or both.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
            options: alertmanagerChoices,
            value: alertmanagersChoice,
            onChange: value => onChangeAlertmanagerChoice(value)
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, {
      isOpen: deleteModalState.open,
      title: "Remove Alertmanager",
      body: "Are you sure you want to remove this Alertmanager",
      confirmText: "Remove",
      onConfirm: () => onDelete(deleteModalState.index),
      onDismiss: () => setDeleteModalState({
        open: false,
        index: 0
      })
    }), modalState.open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AddAlertManagerModal__WEBPACK_IMPORTED_MODULE_7__.AddAlertManagerModal, {
      onClose: onCloseModal,
      alertmanagers: modalState.payload,
      onChangeAlertmanagerConfig: onChangeAlertmanagers
    })]
  });
};

const getStyles = theme => ({
  url: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(1)};
  `,
  muted: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.secondary};
  `,
  actions: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(2)};
    display: flex;
    justify-content: flex-end;
  `,
  table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(2)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAlertManagerSourceName": () => (/* binding */ useAlertManagerSourceName)
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
  const [queryParams, updateQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__.useQueryParams)();
  const isAlertManagerAvailable = useIsAlertManagerAvailable(availableAlertManagers);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alertManagerSourceName => {
    if (!isAlertManagerAvailable(alertManagerSourceName)) {
      return;
    }

    if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME) {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_LOCAL_STORAGE_KEY);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_QUERY_KEY]: null
      });
    } else {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__["default"].set(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_LOCAL_STORAGE_KEY, alertManagerSourceName);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_QUERY_KEY]: alertManagerSourceName
      });
    }
  }, [updateQueryParams, isAlertManagerAvailable]);
  const querySource = queryParams[_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_QUERY_KEY];

  if (querySource && typeof querySource === 'string') {
    if (isAlertManagerAvailable(querySource)) {
      return [querySource, update];
    } else {
      // non existing alertmanager
      return [undefined, update];
    }
  }

  const storeSource = app_core_store__WEBPACK_IMPORTED_MODULE_2__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_LOCAL_STORAGE_KEY);

  if (storeSource && typeof storeSource === 'string' && isAlertManagerAvailable(storeSource)) {
    update(storeSource);
    return [storeSource, update];
  }

  if (isAlertManagerAvailable(_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME)) {
    return [_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME, update];
  }

  return [undefined, update];
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAlertManagersByPermission": () => (/* binding */ useAlertManagersByPermission)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");


function useAlertManagersByPermission(accessType) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.getAlertManagerDataSourcesByPermission)(accessType), [accessType]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useExternalAmSelector.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useExternalAmSelector": () => (/* binding */ useExternalAmSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");

const SUFFIX_REGEX = /\/api\/v[1|2]\/alerts/i;
function useExternalAmSelector() {
  const discoveredAlertmanagers = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => {
    var _state$unifiedAlertin;

    return (_state$unifiedAlertin = state.unifiedAlerting.externalAlertmanagers.discoveredAlertmanagers.result) === null || _state$unifiedAlertin === void 0 ? void 0 : _state$unifiedAlertin.data;
  });
  const alertmanagerConfig = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => {
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcyQixvQkFBSixFQUEwQixHQUFHQyxvQkFBN0IsQ0FBUDtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9BZG1pbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0FsZXJ0aW5nUGFnZVdyYXBwZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hZG1pbi9BZGRBbGVydE1hbmFnZXJNb2RhbC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2FkbWluL0FsZXJ0bWFuYWdlckNvbmZpZy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2FkbWluL0V4dGVybmFsQWxlcnRtYW5hZ2Vycy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUV4dGVybmFsQW1TZWxlY3Rvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBbGVydGluZ1BhZ2VXcmFwcGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL0FsZXJ0aW5nUGFnZVdyYXBwZXInO1xuaW1wb3J0IEFsZXJ0bWFuYWdlckNvbmZpZyBmcm9tICcuL2NvbXBvbmVudHMvYWRtaW4vQWxlcnRtYW5hZ2VyQ29uZmlnJztcbmltcG9ydCB7IEV4dGVybmFsQWxlcnRtYW5hZ2VycyB9IGZyb20gJy4vY29tcG9uZW50cy9hZG1pbi9FeHRlcm5hbEFsZXJ0bWFuYWdlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbigpOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEFsZXJ0aW5nUGFnZVdyYXBwZXIgcGFnZUlkPVwiYWxlcnRpbmctYWRtaW5cIj5cbiAgICAgIDxBbGVydG1hbmFnZXJDb25maWcgdGVzdC1pZD1cImFkbWluLWFsZXJ0bWFuYWdlcmNvbmZpZ1wiIC8+XG4gICAgICA8RXh0ZXJuYWxBbGVydG1hbmFnZXJzIHRlc3QtaWQ9XCJhZG1pbi1leHRlcm5hbGFsZXJ0bWFuYWdlcnNcIiAvPlxuICAgIDwvQWxlcnRpbmdQYWdlV3JhcHBlcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3N0b3JlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFnZUlkOiBzdHJpbmc7XG4gIGlzTG9hZGluZz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBBbGVydGluZ1BhZ2VXcmFwcGVyOiBGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgcGFnZUlkLCBpc0xvYWRpbmcgfSkgPT4ge1xuICBjb25zdCBuYXZNb2RlbCA9IGdldE5hdk1vZGVsKFxuICAgIHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUubmF2SW5kZXgpLFxuICAgIHBhZ2VJZFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17aXNMb2FkaW5nfT57Y2hpbGRyZW59PC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgRmllbGRBcnJheSwgRm9ybSwgSWNvbiwgSW5wdXQsIE1vZGFsLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQWxlcnRtYW5hZ2VyVXJsIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBhbGVydG1hbmFnZXJzOiBBbGVydG1hbmFnZXJVcmxbXTtcbiAgb25DaGFuZ2VBbGVydG1hbmFnZXJDb25maWc6IChhbGVydG1hbmFnZXJzOiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEFkZEFsZXJ0TWFuYWdlck1vZGFsOiBGQzxQcm9wcz4gPSAoeyBhbGVydG1hbmFnZXJzLCBvbkNoYW5nZUFsZXJ0bWFuYWdlckNvbmZpZywgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgZGVmYXVsdFZhbHVlczogUmVjb3JkPHN0cmluZywgQWxlcnRtYW5hZ2VyVXJsW10+ID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgYWxlcnRtYW5hZ2VyczogYWxlcnRtYW5hZ2VycyxcbiAgICB9KSxcbiAgICBbYWxlcnRtYW5hZ2Vyc11cbiAgKTtcblxuICBjb25zdCBtb2RhbFRpdGxlID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxUaXRsZX0+XG4gICAgICA8SWNvbiBuYW1lPVwiYmVsbFwiIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsSWNvbn0gLz5cbiAgICAgIDxoMz5BZGQgQWxlcnRtYW5hZ2VyPC9oMz5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBjb25zdCBvblN1Ym1pdCA9ICh2YWx1ZXM6IFJlY29yZDxzdHJpbmcsIEFsZXJ0bWFuYWdlclVybFtdPikgPT4ge1xuICAgIG9uQ2hhbmdlQWxlcnRtYW5hZ2VyQ29uZmlnKHZhbHVlcy5hbGVydG1hbmFnZXJzLm1hcCgoYW0pID0+IGNsZWFuQWxlcnRtYW5hZ2VyVXJsKGFtLnVybCkpKTtcbiAgICBvbkNsb3NlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgdGl0bGU9e21vZGFsVGl0bGV9IGlzT3Blbj17dHJ1ZX0gb25EaXNtaXNzPXtvbkNsb3NlfSBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgV2UgdXNlIGEgc2VydmljZSBkaXNjb3ZlcnkgbWV0aG9kIHRvIGZpbmQgZXhpc3RpbmcgQWxlcnRtYW5hZ2VycyBmb3IgYSBnaXZlbiBVUkwuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gZGVmYXVsdFZhbHVlcz17ZGVmYXVsdFZhbHVlc30+XG4gICAgICAgIHsoeyByZWdpc3RlciwgY29udHJvbCwgZXJyb3JzIH0pID0+IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEZpZWxkQXJyYXkgY29udHJvbD17Y29udHJvbH0gbmFtZT1cImFsZXJ0bWFuYWdlcnNcIj5cbiAgICAgICAgICAgICAgeyh7IGZpZWxkcywgYXBwZW5kLCByZW1vdmUgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGRBcnJheX0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9PlNvdXJjZSB1cmw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubXV0ZWR9PlxuICAgICAgICAgICAgICAgICAgICBBdXRoZW50aWNhdGlvbiBjYW4gYmUgZG9uZSB2aWEgVVJMIChlLmcuIHVzZXI6cGFzc3dvcmRAbXlhbGVydG1hbmFnZXIuY29tKSBhbmQgb25seSB0aGUgQWxlcnRtYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIHYyIEFQSSBpcyBzdXBwb3J0ZWQuIFRoZSBzdWZmaXggaXMgYWRkZWQgaW50ZXJuYWxseSwgdGhlcmUgaXMgbm8gbmVlZCB0byBzcGVjaWZ5IGl0LlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7ZmllbGRzLm1hcCgoZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycz8uYWxlcnRtYW5hZ2Vycz8uW2luZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPVwiRmllbGQgaXMgcmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtmaWVsZC5pZH0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgYWxlcnRtYW5hZ2Vycy4ke2luZGV4fS51cmxgLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHA6Ly9sb2NhbGhvc3Q6OTA5M1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSZW1vdmUgYWxlcnRtYW5hZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZXN0cm95SW5wdXRSb3d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInRyYXNoLWFsdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IGFwcGVuZCh7IHVybDogJycgfSl9PlxuICAgICAgICAgICAgICAgICAgICBBZGQgVVJMXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRmllbGRBcnJheT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uU3VibWl0PXsoKSA9PiBvblN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgQWRkIEFsZXJ0bWFuYWdlcnNcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvRm9ybT5cbiAgICA8L01vZGFsPlxuICApO1xufTtcblxuZnVuY3Rpb24gY2xlYW5BbGVydG1hbmFnZXJVcmwodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsLnJlcGxhY2UoL1xcLyQvLCAnJykucmVwbGFjZSgvXFwvYXBpXFwvdlsxfDJdXFwvYWxlcnRzL2ksICcnKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIGNvbnN0IG11dGVkID0gY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gIGA7XG4gIHJldHVybiB7XG4gICAgZGVzY3JpcHRpb246IGN4KFxuICAgICAgY3NzYFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgICAgYCxcbiAgICAgIG11dGVkXG4gICAgKSxcbiAgICBtdXRlZDogbXV0ZWQsXG4gICAgYm9sZDogY3NzYFxuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZH07XG4gICAgYCxcbiAgICBtb2RhbDogY3NzYGAsXG4gICAgbW9kYWxJY29uOiBjeChcbiAgICAgIG11dGVkLFxuICAgICAgY3NzYFxuICAgICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgICBgXG4gICAgKSxcbiAgICBtb2RhbFRpdGxlOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGAsXG4gICAgaW5wdXQ6IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgYCxcbiAgICBpbnB1dFJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICBgLFxuICAgIGRlc3Ryb3lJbnB1dFJvdzogY3NzYFxuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICAgIGZpZWxkQXJyYXk6IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZyg0KX07XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiwgQ29uZmlybU1vZGFsLCBUZXh0QXJlYSwgSG9yaXpvbnRhbEdyb3VwLCBGaWVsZCwgRm9ybSwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUnO1xuaW1wb3J0IHsgdXNlQWxlcnRNYW5hZ2Vyc0J5UGVybWlzc2lvbiB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZXMnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQge1xuICBkZWxldGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24sXG4gIGZldGNoQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uLFxuICB1cGRhdGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24sXG59IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSwgaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3JlZHV4JztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlclBpY2tlciB9IGZyb20gJy4uL0FsZXJ0TWFuYWdlclBpY2tlcic7XG5cbmludGVyZmFjZSBGb3JtVmFsdWVzIHtcbiAgY29uZmlnSlNPTjogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGVydG1hbmFnZXJDb25maWcoKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGFsZXJ0TWFuYWdlcnMgPSB1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uKCdub3RpZmljYXRpb24nKTtcbiAgY29uc3QgW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIHNldEFsZXJ0TWFuYWdlclNvdXJjZU5hbWVdID0gdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZShhbGVydE1hbmFnZXJzKTtcblxuICBjb25zdCBbc2hvd0NvbmZpcm1EZWxldGVBTUNvbmZpZywgc2V0U2hvd0NvbmZpcm1EZWxldGVBTUNvbmZpZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgbG9hZGluZzogaXNEZWxldGluZyB9ID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5kZWxldGVBTUNvbmZpZyk7XG4gIGNvbnN0IHsgbG9hZGluZzogaXNTYXZpbmcgfSA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2F2ZUFNQ29uZmlnKTtcbiAgY29uc3QgcmVhZE9ubHkgPSBhbGVydE1hbmFnZXJTb3VyY2VOYW1lID8gaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkgOiBmYWxzZTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGNvbmZpZ1JlcXVlc3RzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbUNvbmZpZ3MpO1xuXG4gIGNvbnN0IHtcbiAgICByZXN1bHQ6IGNvbmZpZyxcbiAgICBsb2FkaW5nOiBpc0xvYWRpbmdDb25maWcsXG4gICAgZXJyb3I6IGxvYWRpbmdFcnJvcixcbiAgfSA9IChhbGVydE1hbmFnZXJTb3VyY2VOYW1lICYmIGNvbmZpZ1JlcXVlc3RzW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdKSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hBbGVydE1hbmFnZXJDb25maWdBY3Rpb24oYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkpO1xuICAgIH1cbiAgfSwgW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGRpc3BhdGNoXSk7XG5cbiAgY29uc3QgcmVzZXRDb25maWcgPSAoKSA9PiB7XG4gICAgaWYgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpIHtcbiAgICAgIGRpc3BhdGNoKGRlbGV0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbihhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSk7XG4gICAgfVxuICAgIHNldFNob3dDb25maXJtRGVsZXRlQU1Db25maWcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGRlZmF1bHRWYWx1ZXMgPSB1c2VNZW1vKFxuICAgICgpOiBGb3JtVmFsdWVzID0+ICh7XG4gICAgICBjb25maWdKU09OOiBjb25maWcgPyBKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIDIpIDogJycsXG4gICAgfSksXG4gICAgW2NvbmZpZ11cbiAgKTtcblxuICBjb25zdCBsb2FkaW5nID0gaXNEZWxldGluZyB8fCBpc0xvYWRpbmdDb25maWcgfHwgaXNTYXZpbmc7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAodmFsdWVzOiBGb3JtVmFsdWVzKSA9PiB7XG4gICAgaWYgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgJiYgY29uZmlnKSB7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgdXBkYXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uKHtcbiAgICAgICAgICBuZXdDb25maWc6IEpTT04ucGFyc2UodmFsdWVzLmNvbmZpZ0pTT04pLFxuICAgICAgICAgIG9sZENvbmZpZzogY29uZmlnLFxuICAgICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsXG4gICAgICAgICAgc3VjY2Vzc01lc3NhZ2U6ICdBbGVydG1hbmFnZXIgY29uZmlndXJhdGlvbiB1cGRhdGVkLicsXG4gICAgICAgICAgcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEFsZXJ0TWFuYWdlclBpY2tlclxuICAgICAgICBjdXJyZW50PXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICBvbkNoYW5nZT17c2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgZGF0YVNvdXJjZXM9e2FsZXJ0TWFuYWdlcnN9XG4gICAgICAvPlxuICAgICAge2xvYWRpbmdFcnJvciAmJiAhbG9hZGluZyAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9XCJFcnJvciBsb2FkaW5nIEFsZXJ0bWFuYWdlciBjb25maWd1cmF0aW9uXCI+XG4gICAgICAgICAge2xvYWRpbmdFcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yLid9XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAge2lzRGVsZXRpbmcgJiYgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSAhPT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT1cIlJlc2V0dGluZyBBbGVydG1hbmFnZXIgY29uZmlndXJhdGlvblwiPlxuICAgICAgICAgIEl0IG1pZ2h0IHRha2UgYSB3aGlsZS4uLlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgKX1cbiAgICAgIHthbGVydE1hbmFnZXJTb3VyY2VOYW1lICYmIGNvbmZpZyAmJiAoXG4gICAgICAgIDxGb3JtIGRlZmF1bHRWYWx1ZXM9e2RlZmF1bHRWYWx1ZXN9IG9uU3VibWl0PXtvblN1Ym1pdH0ga2V5PXtkZWZhdWx0VmFsdWVzLmNvbmZpZ0pTT059PlxuICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHshcmVhZE9ubHkgJiYgKFxuICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbmZpZ3VyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuY29uZmlnSlNPTn1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuY29uZmlnSlNPTj8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdjb25maWdKU09OJywge1xuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAodikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlndXJhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezI1fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7cmVhZE9ubHkgJiYgKFxuICAgICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkNvbmZpZ3VyYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxwcmUgZGF0YS10ZXN0aWQ9XCJyZWFkb25seS1jb25maWdcIj57ZGVmYXVsdFZhbHVlcy5jb25maWdKU09OfTwvcHJlPlxuICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHshcmVhZE9ubHkgJiYgKFxuICAgICAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwicHJpbWFyeVwiIGRpc2FibGVkPXtsb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0NvbmZpcm1EZWxldGVBTUNvbmZpZyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmVzZXQgY29uZmlndXJhdGlvblxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHshIXNob3dDb25maXJtRGVsZXRlQU1Db25maWcgJiYgKFxuICAgICAgICAgICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICAgICAgICAgIGlzT3Blbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVzZXQgQWxlcnRtYW5hZ2VyIGNvbmZpZ3VyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgYm9keT17YEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZXNldCBjb25maWd1cmF0aW9uICR7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUVcbiAgICAgICAgICAgICAgICAgICAgICA/ICdmb3IgdGhlIEdyYWZhbmEgQWxlcnRtYW5hZ2VyJ1xuICAgICAgICAgICAgICAgICAgICAgIDogYGZvciBcIiR7YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cImBcbiAgICAgICAgICAgICAgICAgIH0/IENvbnRhY3QgcG9pbnRzIGFuZCBub3RpZmljYXRpb24gcG9saWNpZXMgd2lsbCBiZSByZXNldCB0byB0aGVpciBkZWZhdWx0cy5gfVxuICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ9XCJZZXMsIHJlc2V0IGNvbmZpZ3VyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgb25Db25maXJtPXtyZXNldENvbmZpZ31cbiAgICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0U2hvd0NvbmZpcm1EZWxldGVBTUNvbmZpZyhmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgY29udGFpbmVyOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDQpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ29uZmlybU1vZGFsLFxuICBGaWVsZCxcbiAgSG9yaXpvbnRhbEdyb3VwLFxuICBJY29uLFxuICBSYWRpb0J1dHRvbkdyb3VwLFxuICBUb29sdGlwLFxuICB1c2VTdHlsZXMyLFxuICB1c2VUaGVtZTIsXG59IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBFbXB0eUxpc3RDVEEgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9FbXB0eUxpc3RDVEEvRW1wdHlMaXN0Q1RBJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvc3RvcmUnO1xuXG5pbXBvcnQgeyB1c2VFeHRlcm5hbEFtU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy91c2VFeHRlcm5hbEFtU2VsZWN0b3InO1xuaW1wb3J0IHtcbiAgYWRkRXh0ZXJuYWxBbGVydG1hbmFnZXJzQWN0aW9uLFxuICBmZXRjaEV4dGVybmFsQWxlcnRtYW5hZ2Vyc0FjdGlvbixcbiAgZmV0Y2hFeHRlcm5hbEFsZXJ0bWFuYWdlcnNDb25maWdBY3Rpb24sXG59IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuXG5pbXBvcnQgeyBBZGRBbGVydE1hbmFnZXJNb2RhbCB9IGZyb20gJy4vQWRkQWxlcnRNYW5hZ2VyTW9kYWwnO1xuXG5jb25zdCBhbGVydG1hbmFnZXJDaG9pY2VzID0gW1xuICB7IHZhbHVlOiAnaW50ZXJuYWwnLCBsYWJlbDogJ09ubHkgSW50ZXJuYWwnIH0sXG4gIHsgdmFsdWU6ICdleHRlcm5hbCcsIGxhYmVsOiAnT25seSBFeHRlcm5hbCcgfSxcbiAgeyB2YWx1ZTogJ2FsbCcsIGxhYmVsOiAnQm90aCBpbnRlcm5hbCBhbmQgZXh0ZXJuYWwnIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRXh0ZXJuYWxBbGVydG1hbmFnZXJzID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW21vZGFsU3RhdGUsIHNldE1vZGFsU3RhdGVdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSwgcGF5bG9hZDogW3sgdXJsOiAnJyB9XSB9KTtcbiAgY29uc3QgW2RlbGV0ZU1vZGFsU3RhdGUsIHNldERlbGV0ZU1vZGFsU3RhdGVdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSwgaW5kZXg6IDAgfSk7XG5cbiAgY29uc3QgZXh0ZXJuYWxBbGVydE1hbmFnZXJzID0gdXNlRXh0ZXJuYWxBbVNlbGVjdG9yKCk7XG4gIGNvbnN0IGFsZXJ0bWFuYWdlcnNDaG9pY2UgPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLnVuaWZpZWRBbGVydGluZy5leHRlcm5hbEFsZXJ0bWFuYWdlcnMuYWxlcnRtYW5hZ2VyQ29uZmlnLnJlc3VsdD8uYWxlcnRtYW5hZ2Vyc0Nob2ljZVxuICApO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hFeHRlcm5hbEFsZXJ0bWFuYWdlcnNBY3Rpb24oKSk7XG4gICAgZGlzcGF0Y2goZmV0Y2hFeHRlcm5hbEFsZXJ0bWFuYWdlcnNDb25maWdBY3Rpb24oKSk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBkaXNwYXRjaChmZXRjaEV4dGVybmFsQWxlcnRtYW5hZ2Vyc0FjdGlvbigpKSwgNTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgY29uc3Qgb25EZWxldGUgPSB1c2VDYWxsYmFjayhcbiAgICAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgLy8gdG8gZGVsZXRlIHdlIG5lZWQgdG8gZmlsdGVyIHRoZSBhbGVydG1hbmFnZXIgZnJvbSB0aGUgbGlzdCBhbmQgcmVwb3N0XG4gICAgICBjb25zdCBuZXdMaXN0ID0gKGV4dGVybmFsQWxlcnRNYW5hZ2VycyA/PyBbXSlcbiAgICAgICAgLmZpbHRlcigoYW0sIGkpID0+IGkgIT09IGluZGV4KVxuICAgICAgICAubWFwKChhbSkgPT4ge1xuICAgICAgICAgIHJldHVybiBhbS51cmw7XG4gICAgICAgIH0pO1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIGFkZEV4dGVybmFsQWxlcnRtYW5hZ2Vyc0FjdGlvbih7IGFsZXJ0bWFuYWdlcnM6IG5ld0xpc3QsIGFsZXJ0bWFuYWdlcnNDaG9pY2U6IGFsZXJ0bWFuYWdlcnNDaG9pY2UgPz8gJ2FsbCcgfSlcbiAgICAgICk7XG4gICAgICBzZXREZWxldGVNb2RhbFN0YXRlKHsgb3BlbjogZmFsc2UsIGluZGV4OiAwIH0pO1xuICAgIH0sXG4gICAgW2V4dGVybmFsQWxlcnRNYW5hZ2VycywgZGlzcGF0Y2gsIGFsZXJ0bWFuYWdlcnNDaG9pY2VdXG4gICk7XG5cbiAgY29uc3Qgb25FZGl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IGFtcyA9IGV4dGVybmFsQWxlcnRNYW5hZ2VycyA/IFsuLi5leHRlcm5hbEFsZXJ0TWFuYWdlcnNdIDogW3sgdXJsOiAnJyB9XTtcbiAgICBzZXRNb2RhbFN0YXRlKChzdGF0ZSkgPT4gKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgIHBheWxvYWQ6IGFtcyxcbiAgICB9KSk7XG4gIH0sIFtzZXRNb2RhbFN0YXRlLCBleHRlcm5hbEFsZXJ0TWFuYWdlcnNdKTtcblxuICBjb25zdCBvbk9wZW5Nb2RhbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRNb2RhbFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgY29uc3QgYW1zID0gZXh0ZXJuYWxBbGVydE1hbmFnZXJzID8gWy4uLmV4dGVybmFsQWxlcnRNYW5hZ2VycywgeyB1cmw6ICcnIH1dIDogW3sgdXJsOiAnJyB9XTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICBwYXlsb2FkOiBhbXMsXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCBbZXh0ZXJuYWxBbGVydE1hbmFnZXJzXSk7XG5cbiAgY29uc3Qgb25DbG9zZU1vZGFsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE1vZGFsU3RhdGUoKHN0YXRlKSA9PiAoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBvcGVuOiBmYWxzZSxcbiAgICB9KSk7XG4gIH0sIFtzZXRNb2RhbFN0YXRlXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VBbGVydG1hbmFnZXJDaG9pY2UgPSAoYWxlcnRtYW5hZ2Vyc0Nob2ljZTogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBhZGRFeHRlcm5hbEFsZXJ0bWFuYWdlcnNBY3Rpb24oeyBhbGVydG1hbmFnZXJzOiBleHRlcm5hbEFsZXJ0TWFuYWdlcnMubWFwKChhbSkgPT4gYW0udXJsKSwgYWxlcnRtYW5hZ2Vyc0Nob2ljZSB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2VBbGVydG1hbmFnZXJzID0gKGFsZXJ0bWFuYWdlcnM6IHN0cmluZ1tdKSA9PiB7XG4gICAgZGlzcGF0Y2goYWRkRXh0ZXJuYWxBbGVydG1hbmFnZXJzQWN0aW9uKHsgYWxlcnRtYW5hZ2VycywgYWxlcnRtYW5hZ2Vyc0Nob2ljZTogYWxlcnRtYW5hZ2Vyc0Nob2ljZSA/PyAnYWxsJyB9KSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U3RhdHVzQ29sb3IgPSAoc3RhdHVzOiBzdHJpbmcpID0+IHtcbiAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgY2FzZSAnYWN0aXZlJzpcbiAgICAgICAgcmV0dXJuIHRoZW1lLmNvbG9ycy5zdWNjZXNzLm1haW47XG5cbiAgICAgIGNhc2UgJ3BlbmRpbmcnOlxuICAgICAgICByZXR1cm4gdGhlbWUuY29sb3JzLndhcm5pbmcubWFpbjtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoZW1lLmNvbG9ycy5lcnJvci5tYWluO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBub0FsZXJ0bWFuYWdlcnMgPSBleHRlcm5hbEFsZXJ0TWFuYWdlcnM/Lmxlbmd0aCA9PT0gMDtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDQ+RXh0ZXJuYWwgQWxlcnRtYW5hZ2VyczwvaDQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm11dGVkfT5cbiAgICAgICAgWW91IGNhbiBoYXZlIHlvdXIgR3JhZmFuYSBtYW5hZ2VkIGFsZXJ0cyBiZSBkZWxpdmVyZWQgdG8gb25lIG9yIG1hbnkgZXh0ZXJuYWwgQWxlcnRtYW5hZ2VyKHMpIGluIGFkZGl0aW9uIHRvIHRoZVxuICAgICAgICBpbnRlcm5hbCBBbGVydG1hbmFnZXIgYnkgc3BlY2lmeWluZyB0aGVpciBVUkxzIGJlbG93LlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxuICAgICAgICB7IW5vQWxlcnRtYW5hZ2VycyAmJiAoXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25PcGVuTW9kYWx9PlxuICAgICAgICAgICAgQWRkIEFsZXJ0bWFuYWdlclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7bm9BbGVydG1hbmFnZXJzID8gKFxuICAgICAgICA8RW1wdHlMaXN0Q1RBXG4gICAgICAgICAgdGl0bGU9XCJZb3UgaGF2ZSBub3QgYWRkZWQgYW55IGV4dGVybmFsIGFsZXJ0bWFuYWdlcnNcIlxuICAgICAgICAgIG9uQ2xpY2s9e29uT3Blbk1vZGFsfVxuICAgICAgICAgIGJ1dHRvblRpdGxlPVwiQWRkIEFsZXJ0bWFuYWdlclwiXG4gICAgICAgICAgYnV0dG9uSWNvbj1cImJlbGwtc2xhc2hcIlxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtjeCgnZmlsdGVyLXRhYmxlIGZvcm0taW5saW5lIGZpbHRlci10YWJsZS0taG92ZXInLCBzdHlsZXMudGFibGUpfT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aD5Vcmw8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5TdGF0dXM8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzIlJyB9fT5BY3Rpb248L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge2V4dGVybmFsQWxlcnRNYW5hZ2Vycz8ubWFwKChhbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudXJsfT57YW0udXJsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7YW0uYWN0dWFsVXJsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgY29udGVudD17YERpc2NvdmVyZWQgJHthbS5hY3R1YWxVcmx9IGZyb20gJHthbS51cmx9YH0gdGhlbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJpbmZvLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaGVhcnRcIiBzdHlsZT17eyBjb2xvcjogZ2V0U3RhdHVzQ29sb3IoYW0uc3RhdHVzKSB9fSB0aXRsZT17YW0uc3RhdHVzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkVkaXR9IGFyaWEtbGFiZWw9XCJFZGl0IGFsZXJ0bWFuYWdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicGVuXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVtb3ZlIGFsZXJ0bWFuYWdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREZWxldGVNb2RhbFN0YXRlKHsgb3BlbjogdHJ1ZSwgaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ0cmFzaC1hbHRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9XCJTZW5kIGFsZXJ0cyB0b1wiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU2V0cyB3aGljaCBBbGVydG1hbmFnZXIgd2lsbCBoYW5kbGUgeW91ciBhbGVydHMuIEludGVybmFsIChHcmFmYW5hIGJ1aWx0IGluIEFsZXJ0bWFuYWdlciksIEV4dGVybmFsIChBbGwgQWxlcnRtYW5hZ2VycyBjb25maWd1cmVkIGFib3ZlKSwgb3IgYm90aC5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cFxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2FsZXJ0bWFuYWdlckNob2ljZXN9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2FsZXJ0bWFuYWdlcnNDaG9pY2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2VBbGVydG1hbmFnZXJDaG9pY2UodmFsdWUhKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgaXNPcGVuPXtkZWxldGVNb2RhbFN0YXRlLm9wZW59XG4gICAgICAgIHRpdGxlPVwiUmVtb3ZlIEFsZXJ0bWFuYWdlclwiXG4gICAgICAgIGJvZHk9XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgQWxlcnRtYW5hZ2VyXCJcbiAgICAgICAgY29uZmlybVRleHQ9XCJSZW1vdmVcIlxuICAgICAgICBvbkNvbmZpcm09eygpID0+IG9uRGVsZXRlKGRlbGV0ZU1vZGFsU3RhdGUuaW5kZXgpfVxuICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldERlbGV0ZU1vZGFsU3RhdGUoeyBvcGVuOiBmYWxzZSwgaW5kZXg6IDAgfSl9XG4gICAgICAvPlxuICAgICAge21vZGFsU3RhdGUub3BlbiAmJiAoXG4gICAgICAgIDxBZGRBbGVydE1hbmFnZXJNb2RhbFxuICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2VNb2RhbH1cbiAgICAgICAgICBhbGVydG1hbmFnZXJzPXttb2RhbFN0YXRlLnBheWxvYWR9XG4gICAgICAgICAgb25DaGFuZ2VBbGVydG1hbmFnZXJDb25maWc9e29uQ2hhbmdlQWxlcnRtYW5hZ2Vyc31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHVybDogY3NzYFxuICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbiAgbXV0ZWQ6IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICBgLFxuICBhY3Rpb25zOiBjc3NgXG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGAsXG4gIHRhYmxlOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ2FwcC9jb3JlL3N0b3JlJztcblxuaW1wb3J0IHsgQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVksIEFMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWSB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJEYXRhU291cmNlLCBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmZ1bmN0aW9uIHVzZUlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnM6IEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VbXSkge1xuICByZXR1cm4gdXNlQ2FsbGJhY2soXG4gICAgKGFsZXJ0TWFuYWdlck5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgYXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc05hbWVzID0gYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycy5tYXAoKGFtKSA9PiBhbS5uYW1lKTtcbiAgICAgIHJldHVybiBhdmFpbGFibGVBbGVydE1hbmFnZXJzTmFtZXMuaW5jbHVkZXMoYWxlcnRNYW5hZ2VyTmFtZSk7XG4gICAgfSxcbiAgICBbYXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc11cbiAgKTtcbn1cblxuLyogVGhpcyB3aWxsIHJldHVybiBhbSBuYW1lIGVpdGhlciBmcm9tIHF1ZXJ5IHBhcmFtcyBvciBmcm9tIGxvY2FsIHN0b3JhZ2Ugb3IgYSBkZWZhdWx0IChncmFmYW5hKS5cbiAqIER1ZSB0byBSQkFDIHBlcm1pc3Npb25zIEdyYWZhbmEgTWFuYWdlZCBBbGVydCBtYW5hZ2VyIG9yIGV4dGVybmFsIGFsZXJ0IG1hbmFnZXJzIG1heSBub3QgYmUgYXZhaWxhYmxlXG4gKiBJbiB0aGUgd29yc3QgY2FzZSBuZWlodGVyIEdNQSBub3IgZXh0ZXJuYWwgYWxlcnQgbWFuYWdlciBpcyBhdmFpbGFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUoXG4gIGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnM6IEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VbXVxuKTogW3N0cmluZyB8IHVuZGVmaW5lZCwgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZykgPT4gdm9pZF0ge1xuICBjb25zdCBbcXVlcnlQYXJhbXMsIHVwZGF0ZVF1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIGNvbnN0IGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlID0gdXNlSXNBbGVydE1hbmFnZXJBdmFpbGFibGUoYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycyk7XG5cbiAgY29uc3QgdXBkYXRlID0gdXNlQ2FsbGJhY2soXG4gICAgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCFpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSA9PT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSkge1xuICAgICAgICBzdG9yZS5kZWxldGUoQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgICAgICB1cGRhdGVRdWVyeVBhcmFtcyh7IFtBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldOiBudWxsIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcmUuc2V0KEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgICAgICAgdXBkYXRlUXVlcnlQYXJhbXMoeyBbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTogYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFt1cGRhdGVRdWVyeVBhcmFtcywgaXNBbGVydE1hbmFnZXJBdmFpbGFibGVdXG4gICk7XG5cbiAgY29uc3QgcXVlcnlTb3VyY2UgPSBxdWVyeVBhcmFtc1tBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldO1xuXG4gIGlmIChxdWVyeVNvdXJjZSAmJiB0eXBlb2YgcXVlcnlTb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKHF1ZXJ5U291cmNlKSkge1xuICAgICAgcmV0dXJuIFtxdWVyeVNvdXJjZSwgdXBkYXRlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm9uIGV4aXN0aW5nIGFsZXJ0bWFuYWdlclxuICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHVwZGF0ZV07XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RvcmVTb3VyY2UgPSBzdG9yZS5nZXQoQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVkpO1xuICBpZiAoc3RvcmVTb3VyY2UgJiYgdHlwZW9mIHN0b3JlU291cmNlID09PSAnc3RyaW5nJyAmJiBpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShzdG9yZVNvdXJjZSkpIHtcbiAgICB1cGRhdGUoc3RvcmVTb3VyY2UpO1xuICAgIHJldHVybiBbc3RvcmVTb3VyY2UsIHVwZGF0ZV07XG4gIH1cblxuICBpZiAoaXNBbGVydE1hbmFnZXJBdmFpbGFibGUoR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSkpIHtcbiAgICByZXR1cm4gW0dSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUsIHVwZGF0ZV07XG4gIH1cblxuICByZXR1cm4gW3VuZGVmaW5lZCwgdXBkYXRlXTtcbn1cbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzQnlQZXJtaXNzaW9uIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uKGFjY2Vzc1R5cGU6ICdpbnN0YW5jZScgfCAnbm90aWZpY2F0aW9uJykge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiBnZXRBbGVydE1hbmFnZXJEYXRhU291cmNlc0J5UGVybWlzc2lvbihhY2Nlc3NUeXBlKSwgW2FjY2Vzc1R5cGVdKTtcbn1cbiIsImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMnO1xuXG5jb25zdCBTVUZGSVhfUkVHRVggPSAvXFwvYXBpXFwvdlsxfDJdXFwvYWxlcnRzL2k7XG50eXBlIEFsZXJ0bWFuYWdlckNvbmZpZyA9IHsgdXJsOiBzdHJpbmc7IHN0YXR1czogc3RyaW5nOyBhY3R1YWxVcmw6IHN0cmluZyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRXh0ZXJuYWxBbVNlbGVjdG9yKCk6IEFsZXJ0bWFuYWdlckNvbmZpZ1tdIHwgW10ge1xuICBjb25zdCBkaXNjb3ZlcmVkQWxlcnRtYW5hZ2VycyA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUudW5pZmllZEFsZXJ0aW5nLmV4dGVybmFsQWxlcnRtYW5hZ2Vycy5kaXNjb3ZlcmVkQWxlcnRtYW5hZ2Vycy5yZXN1bHQ/LmRhdGFcbiAgKTtcbiAgY29uc3QgYWxlcnRtYW5hZ2VyQ29uZmlnID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS51bmlmaWVkQWxlcnRpbmcuZXh0ZXJuYWxBbGVydG1hbmFnZXJzLmFsZXJ0bWFuYWdlckNvbmZpZy5yZXN1bHQ/LmFsZXJ0bWFuYWdlcnNcbiAgKTtcblxuICBpZiAoIWRpc2NvdmVyZWRBbGVydG1hbmFnZXJzIHx8ICFhbGVydG1hbmFnZXJDb25maWcpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCBlbmFibGVkQWxlcnRtYW5hZ2VyczogQWxlcnRtYW5hZ2VyQ29uZmlnW10gPSBbXTtcbiAgY29uc3QgZHJvcHBlZEFsZXJ0bWFuYWdlcnM6IEFsZXJ0bWFuYWdlckNvbmZpZ1tdID0gZGlzY292ZXJlZEFsZXJ0bWFuYWdlcnM/LmRyb3BwZWRBbGVydE1hbmFnZXJzLm1hcCgoYW0pID0+ICh7XG4gICAgdXJsOiBhbS51cmwucmVwbGFjZShTVUZGSVhfUkVHRVgsICcnKSxcbiAgICBzdGF0dXM6ICdkcm9wcGVkJyxcbiAgICBhY3R1YWxVcmw6IGFtLnVybCxcbiAgfSkpO1xuXG4gIGZvciAoY29uc3QgdXJsIG9mIGFsZXJ0bWFuYWdlckNvbmZpZykge1xuICAgIGlmIChkaXNjb3ZlcmVkQWxlcnRtYW5hZ2Vycy5hY3RpdmVBbGVydE1hbmFnZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZW5hYmxlZEFsZXJ0bWFuYWdlcnMucHVzaCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICAgICAgYWN0dWFsVXJsOiAnJyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcbiAgICAgIGZvciAoY29uc3QgYWN0aXZlQU0gb2YgZGlzY292ZXJlZEFsZXJ0bWFuYWdlcnMuYWN0aXZlQWxlcnRNYW5hZ2Vycykge1xuICAgICAgICBpZiAoYWN0aXZlQU0udXJsID09PSBgJHt1cmx9L2FwaS92Mi9hbGVydHNgKSB7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgIGVuYWJsZWRBbGVydG1hbmFnZXJzLnB1c2goe1xuICAgICAgICAgICAgdXJsOiBhY3RpdmVBTS51cmwucmVwbGFjZShTVUZGSVhfUkVHRVgsICcnKSxcbiAgICAgICAgICAgIHN0YXR1czogJ2FjdGl2ZScsXG4gICAgICAgICAgICBhY3R1YWxVcmw6IGFjdGl2ZUFNLnVybCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICBlbmFibGVkQWxlcnRtYW5hZ2Vycy5wdXNoKHtcbiAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICAgICAgICBhY3R1YWxVcmw6ICcnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gWy4uLmVuYWJsZWRBbGVydG1hbmFnZXJzLCAuLi5kcm9wcGVkQWxlcnRtYW5hZ2Vyc107XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBbGVydGluZ1BhZ2VXcmFwcGVyIiwiQWxlcnRtYW5hZ2VyQ29uZmlnIiwiRXh0ZXJuYWxBbGVydG1hbmFnZXJzIiwiQWRtaW4iLCJ1c2VTZWxlY3RvciIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsImNoaWxkcmVuIiwicGFnZUlkIiwiaXNMb2FkaW5nIiwibmF2TW9kZWwiLCJzdGF0ZSIsIm5hdkluZGV4IiwiY3NzIiwiY3giLCJ1c2VNZW1vIiwiQnV0dG9uIiwiRmllbGQiLCJGaWVsZEFycmF5IiwiRm9ybSIsIkljb24iLCJJbnB1dCIsIk1vZGFsIiwidXNlU3R5bGVzMiIsIkFkZEFsZXJ0TWFuYWdlck1vZGFsIiwiYWxlcnRtYW5hZ2VycyIsIm9uQ2hhbmdlQWxlcnRtYW5hZ2VyQ29uZmlnIiwib25DbG9zZSIsInN0eWxlcyIsImdldFN0eWxlcyIsImRlZmF1bHRWYWx1ZXMiLCJtb2RhbFRpdGxlIiwibW9kYWxJY29uIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJtYXAiLCJhbSIsImNsZWFuQWxlcnRtYW5hZ2VyVXJsIiwidXJsIiwibW9kYWwiLCJkZXNjcmlwdGlvbiIsInJlZ2lzdGVyIiwiY29udHJvbCIsImVycm9ycyIsImZpZWxkcyIsImFwcGVuZCIsInJlbW92ZSIsImZpZWxkQXJyYXkiLCJib2xkIiwibXV0ZWQiLCJmaWVsZCIsImluZGV4IiwiaW5wdXQiLCJyZXF1aXJlZCIsImRlc3Ryb3lJbnB1dFJvdyIsImlkIiwicmVwbGFjZSIsInRoZW1lIiwiY29sb3JzIiwidGV4dCIsInNlY29uZGFyeSIsInNwYWNpbmciLCJ0eXBvZ3JhcGh5IiwiZm9udFdlaWdodEJvbGQiLCJpbnB1dFJvdyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJBbGVydCIsIkNvbmZpcm1Nb2RhbCIsIlRleHRBcmVhIiwiSG9yaXpvbnRhbEdyb3VwIiwidXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSIsInVzZUFsZXJ0TWFuYWdlcnNCeVBlcm1pc3Npb24iLCJ1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciIsImRlbGV0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiIsImZldGNoQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uIiwidXBkYXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uIiwiR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSIsImlzVmFuaWxsYVByb21ldGhldXNBbGVydE1hbmFnZXJEYXRhU291cmNlIiwiaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIiwiQWxlcnRNYW5hZ2VyUGlja2VyIiwiZGlzcGF0Y2giLCJhbGVydE1hbmFnZXJzIiwiYWxlcnRNYW5hZ2VyU291cmNlTmFtZSIsInNldEFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJzaG93Q29uZmlybURlbGV0ZUFNQ29uZmlnIiwic2V0U2hvd0NvbmZpcm1EZWxldGVBTUNvbmZpZyIsImxvYWRpbmciLCJpc0RlbGV0aW5nIiwiZGVsZXRlQU1Db25maWciLCJpc1NhdmluZyIsInNhdmVBTUNvbmZpZyIsInJlYWRPbmx5IiwiY29uZmlnUmVxdWVzdHMiLCJhbUNvbmZpZ3MiLCJyZXN1bHQiLCJjb25maWciLCJpc0xvYWRpbmdDb25maWciLCJlcnJvciIsImxvYWRpbmdFcnJvciIsInJlc2V0Q29uZmlnIiwiY29uZmlnSlNPTiIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdDb25maWciLCJwYXJzZSIsIm9sZENvbmZpZyIsInN1Y2Nlc3NNZXNzYWdlIiwicmVmZXRjaCIsImNvbnRhaW5lciIsIm1lc3NhZ2UiLCJ2YWx1ZSIsInZhbGlkYXRlIiwidiIsImUiLCJ1c2VDYWxsYmFjayIsIlJhZGlvQnV0dG9uR3JvdXAiLCJUb29sdGlwIiwidXNlVGhlbWUyIiwiRW1wdHlMaXN0Q1RBIiwidXNlRXh0ZXJuYWxBbVNlbGVjdG9yIiwiYWRkRXh0ZXJuYWxBbGVydG1hbmFnZXJzQWN0aW9uIiwiZmV0Y2hFeHRlcm5hbEFsZXJ0bWFuYWdlcnNBY3Rpb24iLCJmZXRjaEV4dGVybmFsQWxlcnRtYW5hZ2Vyc0NvbmZpZ0FjdGlvbiIsImFsZXJ0bWFuYWdlckNob2ljZXMiLCJsYWJlbCIsIm1vZGFsU3RhdGUiLCJzZXRNb2RhbFN0YXRlIiwib3BlbiIsInBheWxvYWQiLCJkZWxldGVNb2RhbFN0YXRlIiwic2V0RGVsZXRlTW9kYWxTdGF0ZSIsImV4dGVybmFsQWxlcnRNYW5hZ2VycyIsImFsZXJ0bWFuYWdlcnNDaG9pY2UiLCJ1bmlmaWVkQWxlcnRpbmciLCJleHRlcm5hbEFsZXJ0bWFuYWdlcnMiLCJhbGVydG1hbmFnZXJDb25maWciLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm9uRGVsZXRlIiwibmV3TGlzdCIsImZpbHRlciIsImkiLCJvbkVkaXQiLCJhbXMiLCJvbk9wZW5Nb2RhbCIsIm9uQ2xvc2VNb2RhbCIsIm9uQ2hhbmdlQWxlcnRtYW5hZ2VyQ2hvaWNlIiwib25DaGFuZ2VBbGVydG1hbmFnZXJzIiwiZ2V0U3RhdHVzQ29sb3IiLCJzdGF0dXMiLCJzdWNjZXNzIiwibWFpbiIsIndhcm5pbmciLCJub0FsZXJ0bWFuYWdlcnMiLCJsZW5ndGgiLCJhY3Rpb25zIiwidGFibGUiLCJ3aWR0aCIsImFjdHVhbFVybCIsImNvbG9yIiwidXNlUXVlcnlQYXJhbXMiLCJzdG9yZSIsIkFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZIiwiQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZIiwidXNlSXNBbGVydE1hbmFnZXJBdmFpbGFibGUiLCJhdmFpbGFibGVBbGVydE1hbmFnZXJzIiwiYWxlcnRNYW5hZ2VyTmFtZSIsImF2YWlsYWJsZUFsZXJ0TWFuYWdlcnNOYW1lcyIsIm5hbWUiLCJpbmNsdWRlcyIsInF1ZXJ5UGFyYW1zIiwidXBkYXRlUXVlcnlQYXJhbXMiLCJpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZSIsInVwZGF0ZSIsImRlbGV0ZSIsInNldCIsInF1ZXJ5U291cmNlIiwidW5kZWZpbmVkIiwic3RvcmVTb3VyY2UiLCJnZXQiLCJnZXRBbGVydE1hbmFnZXJEYXRhU291cmNlc0J5UGVybWlzc2lvbiIsImFjY2Vzc1R5cGUiLCJTVUZGSVhfUkVHRVgiLCJkaXNjb3ZlcmVkQWxlcnRtYW5hZ2VycyIsImRhdGEiLCJlbmFibGVkQWxlcnRtYW5hZ2VycyIsImRyb3BwZWRBbGVydG1hbmFnZXJzIiwiZHJvcHBlZEFsZXJ0TWFuYWdlcnMiLCJhY3RpdmVBbGVydE1hbmFnZXJzIiwicHVzaCIsImZvdW5kIiwiYWN0aXZlQU0iXSwic291cmNlUm9vdCI6IiJ9