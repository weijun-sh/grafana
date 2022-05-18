"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertAmRoutes"],{

/***/ "./public/app/core/hooks/useCleanup.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCleanup": () => (/* binding */ useCleanup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");



function useCleanup(stateSelector) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(); //bit of a hack to unburden user from having to wrap stateSelcetor in a useCallback. Otherwise cleanup would happen on every render

  const selectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stateSelector);
  selectorRef.current = stateSelector;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      dispatch((0,_actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__.cleanUpAction)({
        stateSelector: selectorRef.current
      }));
    };
  }, [dispatch]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/AmRoutes.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var _components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_NoAlertManagerWarning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx");
/* harmony import */ var _components_amroutes_AmRootRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRootRoute.tsx");
/* harmony import */ var _components_amroutes_AmSpecificRouting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmSpecificRouting.tsx");
/* harmony import */ var _components_amroutes_MuteTimingsTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/MuteTimingsTable.tsx");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder;























const AmRoutes = () => {
  var _config$receivers;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const [isRootRouteEditMode, setIsRootRouteEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const alertManagers = (0,_hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_12__.useAlertManagersByPermission)('notification');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_11__.useAlertManagerSourceName)(alertManagers);
  const readOnly = alertManagerSourceName ? (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_16__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName) : true;
  const amConfigs = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_13__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const fetchConfig = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (alertManagerSourceName) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_14__.fetchAlertManagerConfigAction)(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchConfig();
  }, [fetchConfig]);
  const {
    result,
    loading: resultLoading,
    error: resultError
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_17__.initialAsyncRequestState;
  const config = result === null || result === void 0 ? void 0 : result.alertmanager_config;
  const [rootRoute, id2ExistingRoute] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_15__.amRouteToFormAmRoute)(config === null || config === void 0 ? void 0 : config.route), [config === null || config === void 0 ? void 0 : config.route]);
  const receivers = (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_15__.stringsToSelectableValues)(((_config$receivers = config === null || config === void 0 ? void 0 : config.receivers) !== null && _config$receivers !== void 0 ? _config$receivers : []).map(receiver => receiver.name));

  const enterRootRouteEditMode = () => {
    setIsRootRouteEditMode(true);
  };

  const exitRootRouteEditMode = () => {
    setIsRootRouteEditMode(false);
  };

  (0,_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_4__.useCleanup)(state => state.unifiedAlerting.saveAMConfig);

  const handleSave = data => {
    if (!result) {
      return;
    }

    const newData = (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_15__.formAmRouteToAmRoute)(alertManagerSourceName, Object.assign({}, rootRoute, data), id2ExistingRoute);

    if (isRootRouteEditMode) {
      exitRootRouteEditMode();
    }

    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_14__.updateAlertManagerConfigAction)({
      newConfig: Object.assign({}, result, {
        alertmanager_config: Object.assign({}, result.alertmanager_config, {
          route: newData
        })
      }),
      oldConfig: result,
      alertManagerSourceName: alertManagerSourceName,
      successMessage: 'Saved',
      refetch: true
    }));
  };

  if (!alertManagerSourceName) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_6__.AlertingPageWrapper, {
      pageId: "am-routes",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_NoAlertManagerWarning__WEBPACK_IMPORTED_MODULE_7__.NoAlertManagerWarning, {
        availableAlertManagers: alertManagers
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_6__.AlertingPageWrapper, {
    pageId: "am-routes",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_5__.AlertManagerPicker, {
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName,
      dataSources: alertManagers
    }), resultError && !resultLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      severity: "error",
      title: "Error loading Alertmanager config",
      children: resultError.message || 'Unknown error.'
    }), resultLoading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, {
      text: "Loading Alertmanager config..."
    }))), result && !resultLoading && !resultError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_amroutes_AmRootRoute__WEBPACK_IMPORTED_MODULE_8__.AmRootRoute, {
        alertManagerSourceName: alertManagerSourceName,
        isEditMode: isRootRouteEditMode,
        onSave: handleSave,
        onEnterEditMode: enterRootRouteEditMode,
        onExitEditMode: exitRootRouteEditMode,
        receivers: receivers,
        routes: rootRoute
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
        className: styles.break
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_amroutes_AmSpecificRouting__WEBPACK_IMPORTED_MODULE_9__.AmSpecificRouting, {
        alertManagerSourceName: alertManagerSourceName,
        onChange: handleSave,
        readOnly: readOnly,
        onRootRouteEdit: enterRootRouteEditMode,
        receivers: receivers,
        routes: rootRoute
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
        className: styles.break
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_amroutes_MuteTimingsTable__WEBPACK_IMPORTED_MODULE_10__.MuteTimingsTable, {
        alertManagerSourceName: alertManagerSourceName
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.withErrorBoundary)(AmRoutes, {
  style: 'page'
}));

const getStyles = theme => ({
  break: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 100%;
    height: 0;
    margin-bottom: ${theme.spacing(2)};
  `
});

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

/***/ "./public/app/features/alerting/unified/components/Authorize.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Authorize": () => (/* binding */ Authorize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Authorize = ({
  actions,
  children,
  fallback = true
}) => {
  if (actions.some(action => app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__.contextSrv.hasAccess(action, fallback))) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: children
    });
  } else {
    return null;
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/EmptyArea.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyArea": () => (/* binding */ EmptyArea)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const EmptyArea = ({
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: styles.container,
    children: children
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background-color: ${theme.colors.bg2};
      color: ${theme.colors.textSemiWeak};
      padding: ${theme.spacing.xl};
      text-align: center;
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/EmptyAreaWithCTA.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyAreaWithCTA": () => (/* binding */ EmptyAreaWithCTA)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _EmptyArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyArea.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const EmptyAreaWithCTA = ({
  buttonIcon,
  buttonLabel,
  buttonSize = 'lg',
  buttonVariant = 'primary',
  onButtonClick,
  text,
  href,
  showButton = true
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  const commonProps = {
    className: styles.button,
    icon: buttonIcon,
    size: buttonSize,
    variant: buttonVariant
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_EmptyArea__WEBPACK_IMPORTED_MODULE_3__.EmptyArea, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: styles.text,
        children: text
      }), showButton && (href ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, Object.assign({
        href: href,
        type: "button"
      }, commonProps, {
        children: buttonLabel
      })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, Object.assign({
        onClick: onButtonClick,
        type: "button"
      }, commonProps, {
        children: buttonLabel
      })))]
    })
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background-color: ${theme.colors.bg2};
      color: ${theme.colors.textSemiWeak};
      padding: ${theme.spacing.xl};
      text-align: center;
    `,
    text: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${theme.spacing.md};
    `,
    button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing.md} 0 ${theme.spacing.sm};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoAlertManagerWarning": () => (/* binding */ NoAlertManagerWarning)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _Alert2, _OtherAlertManagersAv, _NoAlertManagersAvail;









const NoAlertManagersAvailable = () => _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
  title: "No Alertmanager found",
  severity: "warning",
  children: "We could not find any external Alertmanagers and you may not have access to the built-in Grafana Alertmanager."
}));

const OtherAlertManagersAvailable = () => _Alert2 || (_Alert2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
  title: "Selected Alertmanager not found. Select a different Alertmanager.",
  severity: "warning",
  children: "Selected Alertmanager no longer exists or you may not have permission to access it."
}));

const NoAlertManagerWarning = ({
  availableAlertManagers
}) => {
  const [_, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_2__.useAlertManagerSourceName)(availableAlertManagers);
  const hasOtherAMs = availableAlertManagers.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: hasOtherAMs ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__.AlertManagerPicker, {
        onChange: setAlertManagerSourceName,
        dataSources: availableAlertManagers
      }), _OtherAlertManagersAv || (_OtherAlertManagersAv = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(OtherAlertManagersAvailable, {}))]
    }) : _NoAlertManagersAvail || (_NoAlertManagersAvail = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(NoAlertManagersAvailable, {}))
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatcherFilter": () => (/* binding */ MatcherFilter)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _span, _div;







const MatcherFilter = ({
  className,
  onFilterChange,
  defaultQueryString,
  queryString
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);

  const handleSearchChange = e => {
    const target = e.target;
    onFilterChange(target.value);
  };

  const searchIcon = _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    name: 'search'
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        gap: 0.5,
        children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: "Search by label"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
          content: _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: ["Filter alerts using label querying, ex:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", {
              children: `{severity="critical", instance=~"cluster-us-.+"}`
            })]
          })),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            className: styles.icon,
            name: "info-circle",
            size: "sm"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
      placeholder: "Search",
      defaultValue: defaultQueryString,
      value: queryString,
      onChange: handleSearchChange,
      "data-testid": "search-query-input",
      prefix: searchIcon,
      className: styles.inputWidth
    })]
  });
};

const getStyles = theme => ({
  icon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(0.5)};
  `,
  inputWidth: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 340px;
    flex-grow: 0;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRootRoute.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRootRoute": () => (/* binding */ AmRootRoute)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _AmRootRouteForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRootRouteForm.tsx");
/* harmony import */ var _AmRootRouteRead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRootRouteRead.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _i, _p;











const AmRootRoute = ({
  isEditMode,
  onSave,
  onEnterEditMode,
  onExitEditMode,
  receivers,
  routes,
  alertManagerSourceName
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_4__.getNotificationsPermissions)(alertManagerSourceName);
  const isReadOnly = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isVanillaPrometheusAlertManagerDataSource)(alertManagerSourceName);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: styles.container,
    "data-testid": "am-root-route-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: styles.titleContainer,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("h5", {
        className: styles.title,
        children: ["Root policy - ", _i || (_i = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("i", {
          children: "default for all alerts"
        }))]
      }), !isEditMode && !isReadOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_3__.Authorize, {
        actions: [permissions.update],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          icon: "pen",
          onClick: onEnterEditMode,
          size: "sm",
          type: "button",
          variant: "secondary",
          children: "Edit"
        })
      })]
    }), _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
      children: "All alerts will go to the default contact point, unless you set additional matchers in the specific routing area."
    })), isEditMode ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AmRootRouteForm__WEBPACK_IMPORTED_MODULE_6__.AmRootRouteForm, {
      alertManagerSourceName: alertManagerSourceName,
      onCancel: onExitEditMode,
      onSave: onSave,
      receivers: receivers,
      routes: routes
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AmRootRouteRead__WEBPACK_IMPORTED_MODULE_7__.AmRootRouteRead, {
      routes: routes
    })]
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background-color: ${theme.colors.background.secondary};
      color: ${theme.colors.text.secondary};
      padding: ${theme.spacing(2)};
    `,
    titleContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.primary};
      display: flex;
      flex-flow: row nowrap;
    `,
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex: 100%;
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRootRouteForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRootRouteForm": () => (/* binding */ AmRootRouteForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _formStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/formStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span, _Button;

const _excluded = ["onChange", "ref"],
      _excluded2 = ["onChange", "ref"],
      _excluded3 = ["onChange", "ref"],
      _excluded4 = ["onChange", "ref"],
      _excluded5 = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const AmRootRouteForm = ({
  alertManagerSourceName,
  onCancel,
  onSave,
  receivers,
  routes
}) => {
  var _Button2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_formStyles__WEBPACK_IMPORTED_MODULE_6__.getFormStyles);
  const [isTimingOptionsExpanded, setIsTimingOptionsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [groupByOptions, setGroupByOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.stringsToSelectableValues)(routes.groupBy));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
    defaultValues: routes,
    onSubmit: onSave,
    children: ({
      control,
      errors,
      setValue
    }) => {
      var _errors$receiver, _errors$groupWaitValu, _errors$groupInterval, _errors$repeatInterva;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Default contact point",
          invalid: !!errors.receiver,
          error: (_errors$receiver = errors.receiver) === null || _errors$receiver === void 0 ? void 0 : _errors$receiver.message,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: styles.container,
              "data-testid": "am-receiver-select",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                render: _ref => {
                  let {
                    field: {
                      onChange
                    }
                  } = _ref,
                      field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({
                    "aria-label": "Default contact point"
                  }, field, {
                    className: styles.input,
                    onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                    options: receivers
                  }));
                },
                control: control,
                name: "receiver",
                rules: {
                  required: {
                    value: true,
                    message: 'Required.'
                  }
                }
              }), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                children: "or"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Link, {
                className: styles.linkText,
                href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_4__.makeAMLink)('/alerting/notifications/receivers/new', alertManagerSourceName),
                children: "Create a contact point"
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Group by",
          description: "Group alerts when you receive a notification based on labels.",
          "data-testid": "am-group-select",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
            render: _ref2 => {
              let {
                field: {
                  onChange
                }
              } = _ref2,
                  field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, Object.assign({
                "aria-label": "Group by"
              }, field, {
                allowCustomValue: true,
                className: styles.input,
                onCreateOption: opt => {
                  setGroupByOptions(opts => [...opts, (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.stringToSelectableValue)(opt)]); // @ts-ignore-check: react-hook-form made me do this

                  setValue('groupBy', [...field.value, opt]);
                },
                onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapMultiSelectValueToStrings)(value)),
                options: groupByOptions
              }));
            },
            control: control,
            name: "groupBy"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Collapse, {
          collapsible: true,
          className: styles.collapse,
          isOpen: isTimingOptionsExpanded,
          label: "Timing options",
          onToggle: setIsTimingOptionsExpanded,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Group wait",
            description: "The waiting time until the initial notification is sent for a new group created by an incoming alert. Default 30 seconds.",
            invalid: !!errors.groupWaitValue,
            error: (_errors$groupWaitValu = errors.groupWaitValue) === null || _errors$groupWaitValu === void 0 ? void 0 : _errors$groupWaitValu.message,
            "data-testid": "am-group-wait",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.container, styles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: styles.smallInput,
                    invalid: invalid,
                    placeholder: 'Default 30 seconds'
                  })),
                  control: control,
                  name: "groupWaitValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref3 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref3,
                        field = _objectWithoutPropertiesLoose(_ref3.field, _excluded3);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, field, {
                      className: styles.input,
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_5__.timeOptions,
                      "aria-label": "Group wait type"
                    }));
                  },
                  control: control,
                  name: "groupWaitValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Group interval",
            description: "The waiting time to send a batch of new alerts for that group after the first notification was sent. Default 5 minutes.",
            invalid: !!errors.groupIntervalValue,
            error: (_errors$groupInterval = errors.groupIntervalValue) === null || _errors$groupInterval === void 0 ? void 0 : _errors$groupInterval.message,
            "data-testid": "am-group-interval",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.container, styles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: styles.smallInput,
                    invalid: invalid,
                    placeholder: 'Default 5 minutes'
                  })),
                  control: control,
                  name: "groupIntervalValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref4 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref4,
                        field = _objectWithoutPropertiesLoose(_ref4.field, _excluded4);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, field, {
                      className: styles.input,
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_5__.timeOptions,
                      "aria-label": "Group interval type"
                    }));
                  },
                  control: control,
                  name: "groupIntervalValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Repeat interval",
            description: "The waiting time to resend an alert after they have successfully been sent. Default 4 hours.",
            invalid: !!errors.repeatIntervalValue,
            error: (_errors$repeatInterva = errors.repeatIntervalValue) === null || _errors$repeatInterva === void 0 ? void 0 : _errors$repeatInterva.message,
            "data-testid": "am-repeat-interval",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.container, styles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: styles.smallInput,
                    invalid: invalid,
                    placeholder: "Default 4 hours"
                  })),
                  control: control,
                  name: "repeatIntervalValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref5 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref5,
                        field = _objectWithoutPropertiesLoose(_ref5.field, _excluded5);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, field, {
                      className: styles.input,
                      menuPlacement: "top",
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_3__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_5__.timeOptions,
                      "aria-label": "Repeat interval type"
                    }));
                  },
                  control: control,
                  name: "repeatIntervalValueType"
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: styles.container,
          children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "submit",
            children: "Save"
          })), _Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            onClick: onCancel,
            type: "reset",
            variant: "secondary",
            fill: "outline",
            children: "Cancel"
          }))]
        })]
      });
    }
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRootRouteRead.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRootRouteRead": () => (/* binding */ AmRootRouteRead)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _gridStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/gridStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AmRootRouteRead = ({
  routes
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(_gridStyles__WEBPACK_IMPORTED_MODULE_2__.getGridStyles);
  const receiver = routes.receiver || '-';
  const groupBy = routes.groupBy.join(', ') || '-';
  const groupWait = routes.groupWaitValue ? `${routes.groupWaitValue}${routes.groupWaitValueType}` : '-';
  const groupInterval = routes.groupIntervalValue ? `${routes.groupIntervalValue}${routes.groupIntervalValueType}` : '-';
  const repeatInterval = routes.repeatIntervalValue ? `${routes.repeatIntervalValue}${routes.repeatIntervalValueType}` : '-';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.titleCell,
      children: "Contact point"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.valueCell,
      "data-testid": "am-routes-root-receiver",
      children: receiver
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.titleCell,
      children: "Group by"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.valueCell,
      "data-testid": "am-routes-root-group-by",
      children: groupBy
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.titleCell,
      children: "Timings"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: styles.valueCell,
      "data-testid": "am-routes-root-timings",
      children: ["Group wait: ", groupWait, " | Group interval: ", groupInterval, " | Repeat interval: ", repeatInterval]
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRoutesExpandedForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRoutesExpandedForm": () => (/* binding */ AmRoutesExpandedForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useMuteTimingOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useMuteTimingOptions.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _formStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/formStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"],
      _excluded2 = ["onChange", "ref"],
      _excluded3 = ["onChange", "ref"],
      _excluded4 = ["onChange", "ref"],
      _excluded5 = ["onChange", "ref"],
      _excluded6 = ["onChange", "ref"],
      _excluded7 = ["onChange", "ref"];

var _div, _Button;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const AmRoutesExpandedForm = ({
  onCancel,
  onSave,
  receivers,
  routes
}) => {
  var _Button2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const formStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_formStyles__WEBPACK_IMPORTED_MODULE_7__.getFormStyles);
  const [overrideGrouping, setOverrideGrouping] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(routes.groupBy.length > 0);
  const [overrideTimings, setOverrideTimings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!!routes.groupWaitValue || !!routes.groupIntervalValue || !!routes.repeatIntervalValue);
  const [groupByOptions, setGroupByOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.stringsToSelectableValues)(routes.groupBy));
  const muteTimingOptions = (0,_hooks_useMuteTimingOptions__WEBPACK_IMPORTED_MODULE_3__.useMuteTimingOptions)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
    defaultValues: routes,
    onSubmit: onSave,
    children: ({
      control,
      register,
      errors,
      setValue
    }) => {
      var _errors$groupWaitValu, _errors$groupInterval, _errors$repeatInterva;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", Object.assign({
          type: "hidden"
        }, register('id'))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldArray, {
          name: "object_matchers",
          control: control,
          children: ({
            fields,
            append,
            remove
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
              justify: "flex-start",
              spacing: "md",
              children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                children: "Matching labels"
              })), fields.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
                color: "orange",
                className: styles.noMatchersWarning,
                icon: "exclamation-triangle",
                text: "If no matchers are specified, this notification policy will handle all alert instances."
              }), fields.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: styles.matchersContainer,
                children: fields.map((field, index) => {
                  var _errors$object_matche, _errors$object_matche2, _errors$object_matche3, _errors$object_matche4, _errors$object_matche5, _errors$object_matche6, _errors$object_matche7, _errors$object_matche8, _errors$object_matche9, _errors$object_matche10;

                  const localPath = `object_matchers[${index}]`;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
                    align: "flex-start",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
                      label: "Label",
                      invalid: !!((_errors$object_matche = errors.object_matchers) !== null && _errors$object_matche !== void 0 && (_errors$object_matche2 = _errors$object_matche[index]) !== null && _errors$object_matche2 !== void 0 && _errors$object_matche2.name),
                      error: (_errors$object_matche3 = errors.object_matchers) === null || _errors$object_matche3 === void 0 ? void 0 : (_errors$object_matche4 = _errors$object_matche3[index]) === null || _errors$object_matche4 === void 0 ? void 0 : (_errors$object_matche5 = _errors$object_matche4.name) === null || _errors$object_matche5 === void 0 ? void 0 : _errors$object_matche5.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register(`${localPath}.name`, {
                        required: 'Field is required'
                      }), {
                        defaultValue: field.name,
                        placeholder: "label"
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
                      label: 'Operator',
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                        render: _ref => {
                          let {
                            field: {
                              onChange
                            }
                          } = _ref,
                              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

                          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, field, {
                            className: styles.matchersOperator,
                            onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value),
                            options: _utils_alertmanager__WEBPACK_IMPORTED_MODULE_4__.matcherFieldOptions,
                            "aria-label": "Operator"
                          }));
                        },
                        defaultValue: field.operator,
                        control: control,
                        name: `${localPath}.operator`,
                        rules: {
                          required: {
                            value: true,
                            message: 'Required.'
                          }
                        }
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
                      label: "Value",
                      invalid: !!((_errors$object_matche6 = errors.object_matchers) !== null && _errors$object_matche6 !== void 0 && (_errors$object_matche7 = _errors$object_matche6[index]) !== null && _errors$object_matche7 !== void 0 && _errors$object_matche7.value),
                      error: (_errors$object_matche8 = errors.object_matchers) === null || _errors$object_matche8 === void 0 ? void 0 : (_errors$object_matche9 = _errors$object_matche8[index]) === null || _errors$object_matche9 === void 0 ? void 0 : (_errors$object_matche10 = _errors$object_matche9.value) === null || _errors$object_matche10 === void 0 ? void 0 : _errors$object_matche10.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register(`${localPath}.value`, {
                        required: 'Field is required'
                      }), {
                        defaultValue: field.value,
                        placeholder: "value"
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
                      className: styles.removeButton,
                      tooltip: "Remove matcher",
                      name: 'trash-alt',
                      onClick: () => remove(index),
                      children: "Remove"
                    })]
                  }, field.id);
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                className: styles.addMatcherBtn,
                icon: "plus",
                onClick: () => append(_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.emptyArrayFieldMatcher),
                variant: "secondary",
                type: "button",
                children: "Add matcher"
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Contact point",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
            render: _ref2 => {
              let {
                field: {
                  onChange
                }
              } = _ref2,
                  field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({
                "aria-label": "Contact point"
              }, field, {
                className: formStyles.input,
                onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.mapSelectValueToString)(value)),
                options: receivers
              }));
            },
            control: control,
            name: "receiver"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Continue matching subsequent sibling nodes",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, Object.assign({
            id: "continue-toggle"
          }, register('continue')))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Override grouping",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, {
            id: "override-grouping-toggle",
            value: overrideGrouping,
            onChange: () => setOverrideGrouping(overrideGrouping => !overrideGrouping)
          })
        }), overrideGrouping && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Group by",
          description: "Group alerts when you receive a notification based on labels.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
            render: _ref3 => {
              let {
                field: {
                  onChange
                }
              } = _ref3,
                  field = _objectWithoutPropertiesLoose(_ref3.field, _excluded3);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, Object.assign({
                "aria-label": "Group by"
              }, field, {
                allowCustomValue: true,
                className: formStyles.input,
                onCreateOption: opt => {
                  setGroupByOptions(opts => [...opts, (0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.stringToSelectableValue)(opt)]); // @ts-ignore-check: react-hook-form made me do this

                  setValue('groupBy', [...field.value, opt]);
                },
                onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.mapMultiSelectValueToStrings)(value)),
                options: groupByOptions
              }));
            },
            control: control,
            name: "groupBy"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Override general timings",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Switch, {
            id: "override-timings-toggle",
            value: overrideTimings,
            onChange: () => setOverrideTimings(overrideTimings => !overrideTimings)
          })
        }), overrideTimings && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Group wait",
            description: "The waiting time until the initial notification is sent for a new group created by an incoming alert.",
            invalid: !!errors.groupWaitValue,
            error: (_errors$groupWaitValu = errors.groupWaitValue) === null || _errors$groupWaitValu === void 0 ? void 0 : _errors$groupWaitValu.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(formStyles.container, formStyles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: formStyles.smallInput,
                    invalid: invalid,
                    placeholder: "Time",
                    "aria-label": "Group wait value"
                  })),
                  control: control,
                  name: "groupWaitValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref4 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref4,
                        field = _objectWithoutPropertiesLoose(_ref4.field, _excluded4);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, field, {
                      className: formStyles.input,
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_6__.timeOptions,
                      "aria-label": "Group wait type"
                    }));
                  },
                  control: control,
                  name: "groupWaitValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Group interval",
            description: "The waiting time to send a batch of new alerts for that group after the first notification was sent.",
            invalid: !!errors.groupIntervalValue,
            error: (_errors$groupInterval = errors.groupIntervalValue) === null || _errors$groupInterval === void 0 ? void 0 : _errors$groupInterval.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(formStyles.container, formStyles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: formStyles.smallInput,
                    invalid: invalid,
                    placeholder: "Time",
                    "aria-label": "Group interval value"
                  })),
                  control: control,
                  name: "groupIntervalValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref5 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref5,
                        field = _objectWithoutPropertiesLoose(_ref5.field, _excluded5);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, field, {
                      className: formStyles.input,
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_6__.timeOptions,
                      "aria-label": "Group interval type"
                    }));
                  },
                  control: control,
                  name: "groupIntervalValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Repeat interval",
            description: "The waiting time to resend an alert after they have successfully been sent.",
            invalid: !!errors.repeatIntervalValue,
            error: (_errors$repeatInterva = errors.repeatIntervalValue) === null || _errors$repeatInterva === void 0 ? void 0 : _errors$repeatInterva.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(formStyles.container, formStyles.timingContainer),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: ({
                    field,
                    fieldState: {
                      invalid
                    }
                  }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, field, {
                    className: formStyles.smallInput,
                    invalid: invalid,
                    placeholder: "Time",
                    "aria-label": "Repeat interval value"
                  })),
                  control: control,
                  name: "repeatIntervalValue",
                  rules: {
                    validate: _utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
                  render: _ref6 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref6,
                        field = _objectWithoutPropertiesLoose(_ref6.field, _excluded6);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, Object.assign({}, field, {
                      className: formStyles.input,
                      menuPlacement: "top",
                      onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.mapSelectValueToString)(value)),
                      options: _utils_time__WEBPACK_IMPORTED_MODULE_6__.timeOptions,
                      "aria-label": "Repeat interval type"
                    }));
                  },
                  control: control,
                  name: "repeatIntervalValueType"
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: "Mute timings",
          "data-testid": "am-mute-timing-select",
          description: "Add mute timing to policy",
          invalid: !!errors.muteTimeIntervals,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
            render: _ref7 => {
              let {
                field: {
                  onChange
                }
              } = _ref7,
                  field = _objectWithoutPropertiesLoose(_ref7.field, _excluded7);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, Object.assign({
                "aria-label": "Mute timings"
              }, field, {
                className: formStyles.input,
                onChange: value => onChange((0,_utils_amroutes__WEBPACK_IMPORTED_MODULE_5__.mapMultiSelectValueToStrings)(value)),
                options: muteTimingOptions
              }));
            },
            control: control,
            name: "muteTimeIntervals"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: styles.buttonGroup,
          children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "submit",
            children: "Save policy"
          })), _Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            onClick: onCancel,
            fill: "outline",
            type: "button",
            variant: "secondary",
            children: "Cancel"
          }))]
        })]
      });
    }
  });
};

const getStyles = theme => {
  const commonSpacing = theme.spacing(3.5);
  return {
    addMatcherBtn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-bottom: ${commonSpacing};
    `,
    matchersContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background-color: ${theme.colors.background.secondary};
      margin: ${theme.spacing(1, 0)};
      padding: ${theme.spacing(1, 4.6, 1, 1.5)};
      width: fit-content;
    `,
    matchersOperator: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      min-width: 140px;
    `,
    nestedPolicies: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${commonSpacing};
    `,
    removeButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing(1)};
      margin-top: ${theme.spacing(2.5)};
    `,
    buttonGroup: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(6)} 0 ${commonSpacing};

      & > * + * {
        margin-left: ${theme.spacing(1.5)};
      }
    `,
    noMatchersWarning: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing(1)} ${theme.spacing(2)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRoutesExpandedRead.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRoutesExpandedRead": () => (/* binding */ AmRoutesExpandedRead)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _AmRoutesTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRoutesTable.tsx");
/* harmony import */ var _MuteTimingsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/MuteTimingsTable.tsx");
/* harmony import */ var _gridStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/gridStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;












const AmRoutesExpandedRead = ({
  onChange,
  receivers,
  routes,
  readOnly = false,
  alertManagerSourceName
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const gridStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_gridStyles__WEBPACK_IMPORTED_MODULE_8__.getGridStyles);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_3__.getNotificationsPermissions)(alertManagerSourceName);
  const groupWait = routes.groupWaitValue ? `${routes.groupWaitValue}${routes.groupWaitValueType}` : '-';
  const groupInterval = routes.groupIntervalValue ? `${routes.groupIntervalValue}${routes.groupIntervalValueType}` : '-';
  const repeatInterval = routes.repeatIntervalValue ? `${routes.repeatIntervalValue}${routes.repeatIntervalValueType}` : '-';
  const [subroutes, setSubroutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(routes.routes);
  const [isAddMode, setIsAddMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: gridStyles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Group wait"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.valueCell,
      children: groupWait
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Group interval"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.valueCell,
      children: groupInterval
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Repeat interval"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.valueCell,
      children: repeatInterval
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Nested policies"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: gridStyles.valueCell,
      children: [!!subroutes.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_AmRoutesTable__WEBPACK_IMPORTED_MODULE_6__.AmRoutesTable, {
        isAddMode: isAddMode,
        onCancelAdd: () => {
          setIsAddMode(false);
          setSubroutes(subroutes => {
            const newSubroutes = [...subroutes];
            newSubroutes.pop();
            return newSubroutes;
          });
        },
        onChange: newRoutes => {
          onChange(Object.assign({}, routes, {
            routes: newRoutes
          }));

          if (isAddMode) {
            setIsAddMode(false);
          }
        },
        receivers: receivers,
        routes: subroutes,
        alertManagerSourceName: alertManagerSourceName
      }) : _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
        children: "No nested policies configured."
      })), !isAddMode && !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
        actions: [permissions.create],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: styles.addNestedRoutingBtn,
          icon: "plus",
          onClick: () => {
            setSubroutes(subroutes => [...subroutes, _utils_amroutes__WEBPACK_IMPORTED_MODULE_4__.emptyRoute]);
            setIsAddMode(true);
          },
          variant: "secondary",
          type: "button",
          children: "Add nested policy"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Mute timings"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: gridStyles.valueCell,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_MuteTimingsTable__WEBPACK_IMPORTED_MODULE_7__.MuteTimingsTable, {
        alertManagerSourceName: alertManagerSourceName,
        muteTimingNames: routes.muteTimeIntervals,
        hideActions: true
      })
    })]
  });
};

const getStyles = theme => {
  return {
    addNestedRoutingBtn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing(2)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmRoutesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmRoutesTable": () => (/* binding */ AmRoutesTable),
/* harmony export */   "deleteRoute": () => (/* binding */ deleteRoute),
/* harmony export */   "getFilteredRoutes": () => (/* binding */ getFilteredRoutes),
/* harmony export */   "updatedRoute": () => (/* binding */ updatedRoute)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_dynamicTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/dynamicTable.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _EmptyArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyArea.tsx");
/* harmony import */ var _silences_Matchers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/Matchers.tsx");
/* harmony import */ var _AmRoutesExpandedForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRoutesExpandedForm.tsx");
/* harmony import */ var _AmRoutesExpandedRead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRoutesExpandedRead.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span, _EmptyArea;
















const getFilteredRoutes = (routes, labelMatcherQuery, contactPointQuery) => {
  const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__.parseMatchers)(labelMatcherQuery !== null && labelMatcherQuery !== void 0 ? labelMatcherQuery : '');
  let filteredRoutes = routes;

  if (matchers.length) {
    filteredRoutes = routes.filter(route => {
      const routeMatchers = route.object_matchers.map(_utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__.matcherFieldToMatcher);
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.intersectionWith)(routeMatchers, matchers, lodash__WEBPACK_IMPORTED_MODULE_0__.isEqual).length > 0;
    });
  }

  if (contactPointQuery && contactPointQuery.length > 0) {
    filteredRoutes = filteredRoutes.filter(route => route.receiver.toLowerCase().includes(contactPointQuery.toLowerCase()));
  }

  return filteredRoutes;
};
const updatedRoute = (routes, updatedRoute) => {
  const newRoutes = [...routes];
  const editIndex = newRoutes.findIndex(route => route.id === updatedRoute.id);

  if (editIndex >= 0) {
    newRoutes[editIndex] = Object.assign({}, newRoutes[editIndex], updatedRoute);
  }

  return newRoutes;
};
const deleteRoute = (routes, routeId) => {
  return routes.filter(route => route.id !== routeId);
};
const AmRoutesTable = ({
  isAddMode,
  onCancelAdd,
  onChange,
  receivers,
  routes,
  filters,
  readOnly = false,
  alertManagerSourceName
}) => {
  const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [deletingRouteId, setDeletingRouteId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  const [expandedId, setExpandedId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_4__.getNotificationsPermissions)(alertManagerSourceName);
  const canEditRoutes = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(permissions.update);
  const canDeleteRoutes = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(permissions.delete);
  const showActions = !readOnly && (canEditRoutes || canDeleteRoutes);
  const expandItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(item => setExpandedId(item.id), []);
  const collapseItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => setExpandedId(undefined), []);
  const cols = [{
    id: 'matchingCriteria',
    label: 'Matching labels',
    // eslint-disable-next-line react/display-name
    renderCell: item => {
      return item.data.object_matchers.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_silences_Matchers__WEBPACK_IMPORTED_MODULE_9__.Matchers, {
        matchers: item.data.object_matchers.map(_utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__.matcherFieldToMatcher)
      }) : _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
        children: "Matches all alert instances"
      }));
    },
    size: 10
  }, {
    id: 'groupBy',
    label: 'Group by',
    renderCell: item => item.data.groupBy.join(', ') || '-',
    size: 5
  }, {
    id: 'receiverChannel',
    label: 'Contact point',
    renderCell: item => item.data.receiver || '-',
    size: 5
  }, {
    id: 'muteTimings',
    label: 'Mute timings',
    renderCell: item => item.data.muteTimeIntervals.join(', ') || '-',
    size: 5
  }, ...(!showActions ? [] : [{
    id: 'actions',
    label: 'Actions',
    // eslint-disable-next-line react/display-name
    renderCell: item => {
      if (item.renderExpandedContent) {
        return null;
      }

      const expandWithCustomContent = () => {
        expandItem(item);
        setEditMode(true);
      };

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            "aria-label": "Edit route",
            icon: "pen",
            onClick: expandWithCustomContent,
            size: "sm",
            type: "button",
            variant: "secondary",
            children: "Edit"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
            "aria-label": "Delete route",
            name: "trash-alt",
            onClick: () => {
              setDeletingRouteId(item.data.id);
            },
            type: "button"
          })]
        })
      });
    },
    size: '100px'
  }])];
  const filteredRoutes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => getFilteredRoutes(routes, filters === null || filters === void 0 ? void 0 : filters.queryString, filters === null || filters === void 0 ? void 0 : filters.contactPoint), [routes, filters]);
  const dynamicTableRoutes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils_dynamicTable__WEBPACK_IMPORTED_MODULE_6__.prepareItems)(isAddMode ? routes : filteredRoutes), [isAddMode, routes, filteredRoutes]); // expand the last item when adding or reset when the length changed

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isAddMode && dynamicTableRoutes.length) {
      setExpandedId(dynamicTableRoutes[dynamicTableRoutes.length - 1].id);
    }

    if (!isAddMode && dynamicTableRoutes.length) {
      setExpandedId(undefined);
    }
  }, [isAddMode, dynamicTableRoutes]);

  if (routes.length > 0 && filteredRoutes.length === 0) {
    return _EmptyArea || (_EmptyArea = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_EmptyArea__WEBPACK_IMPORTED_MODULE_8__.EmptyArea, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
        children: "No policies found"
      })
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_7__.DynamicTable, {
      cols: cols,
      isExpandable: true,
      items: dynamicTableRoutes,
      testIdGenerator: () => 'am-routes-row',
      onCollapse: collapseItem,
      onExpand: expandItem,
      isExpanded: item => expandedId === item.id,
      renderExpandedContent: item => isAddMode || editMode ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AmRoutesExpandedForm__WEBPACK_IMPORTED_MODULE_10__.AmRoutesExpandedForm, {
        onCancel: () => {
          if (isAddMode) {
            onCancelAdd();
          }

          setEditMode(false);
        },
        onSave: data => {
          const newRoutes = updatedRoute(routes, data);
          setEditMode(false);
          onChange(newRoutes);
        },
        receivers: receivers,
        routes: item.data
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AmRoutesExpandedRead__WEBPACK_IMPORTED_MODULE_11__.AmRoutesExpandedRead, {
        onChange: data => {
          const newRoutes = updatedRoute(routes, data);
          onChange(newRoutes);
        },
        receivers: receivers,
        routes: item.data,
        readOnly: readOnly,
        alertManagerSourceName: alertManagerSourceName
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
      isOpen: !!deletingRouteId,
      title: "Delete notification policy",
      body: "Deleting this notification policy will permanently remove it. Are you sure you want to delete this policy?",
      confirmText: "Yes, delete",
      icon: "exclamation-triangle",
      onConfirm: () => {
        if (deletingRouteId) {
          const newRoutes = deleteRoute(routes, deletingRouteId);
          onChange(newRoutes);
          setDeletingRouteId(undefined);
        }
      },
      onDismiss: () => setDeletingRouteId(undefined)
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/AmSpecificRouting.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmSpecificRouting": () => (/* binding */ AmSpecificRouting)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_amroutes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/amroutes.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _EmptyArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyArea.tsx");
/* harmony import */ var _EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyAreaWithCTA.tsx");
/* harmony import */ var _alert_groups_MatcherFilter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx");
/* harmony import */ var _AmRoutesTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/AmRoutesTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _p, _EmptyArea, _Label, _Icon, _EmptyArea2;


















const AmSpecificRouting = ({
  alertManagerSourceName,
  onChange,
  onRootRouteEdit,
  receivers,
  routes,
  readOnly = false
}) => {
  var _filters$queryString, _filters$contactPoint;

  const [actualRoutes, setActualRoutes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([...routes.routes]);
  const [isAddMode, setIsAddMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_6__.getNotificationsPermissions)(alertManagerSourceName);
  const canCreateNotifications = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(permissions.create);
  const [searchParams, setSearchParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_5__.useURLSearchParams)();
  const {
    queryString,
    contactPoint
  } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.getNotificationPoliciesFilters)(searchParams);
  const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    queryString,
    contactPoint
  });
  (0,react_use__WEBPACK_IMPORTED_MODULE_14__["default"])(() => {
    setSearchParams({
      queryString: filters.queryString,
      contactPoint: filters.contactPoint
    });
  }, 400, [filters]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  const clearFilters = () => {
    setFilters({
      queryString: undefined,
      contactPoint: undefined
    });
    setSearchParams({
      queryString: undefined,
      contactPoint: undefined
    });
  };

  const addNewRoute = () => {
    clearFilters();
    setIsAddMode(true);
    setActualRoutes(() => [...routes.routes, Object.assign({}, _utils_amroutes__WEBPACK_IMPORTED_MODULE_7__.emptyRoute, {
      matchers: [_utils_amroutes__WEBPACK_IMPORTED_MODULE_7__.emptyArrayFieldMatcher]
    })]);
  };

  const onCancelAdd = () => {
    setIsAddMode(false);
    setActualRoutes([...routes.routes]);
  };

  const onTableRouteChange = newRoutes => {
    onChange(Object.assign({}, routes, {
      routes: newRoutes
    }));

    if (isAddMode) {
      setIsAddMode(false);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: styles.container,
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h5", {
      children: "Specific routing"
    })), _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
      children: "Send specific alerts to chosen contact points, based on matching criteria"
    })), !routes.receiver ? readOnly ? _EmptyArea || (_EmptyArea = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_EmptyArea__WEBPACK_IMPORTED_MODULE_9__.EmptyArea, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        children: "There is no default contact point configured for the root route."
      })
    })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_10__.EmptyAreaWithCTA, {
      buttonIcon: "rocket",
      buttonLabel: "Set a default contact point",
      onButtonClick: onRootRouteEdit,
      text: "You haven't set a default contact point for the root route yet.",
      showButton: canCreateNotifications
    }) : actualRoutes.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        children: [!isAddMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: styles.searchContainer,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_alert_groups_MatcherFilter__WEBPACK_IMPORTED_MODULE_11__.MatcherFilter, {
            onFilterChange: filter => setFilters(currentFilters => Object.assign({}, currentFilters, {
              queryString: filter
            })),
            queryString: (_filters$queryString = filters.queryString) !== null && _filters$queryString !== void 0 ? _filters$queryString : '',
            className: styles.filterInput
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: styles.filterInput,
            children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {
              children: "Search by contact point"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
              onChange: ({
                currentTarget
              }) => setFilters(currentFilters => Object.assign({}, currentFilters, {
                contactPoint: currentTarget.value
              })),
              value: (_filters$contactPoint = filters.contactPoint) !== null && _filters$contactPoint !== void 0 ? _filters$contactPoint : '',
              placeholder: "Search by contact point",
              "data-testid": "search-query-input",
              prefix: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                name: 'search'
              }))
            })]
          }), (queryString || contactPoint) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "secondary",
            icon: "times",
            onClick: clearFilters,
            className: styles.clearFilterBtn,
            children: "Clear filters"
          })]
        }), !isAddMode && !readOnly && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_4__.Authorize, {
          actions: [permissions.create],
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: styles.addMatcherBtnRow,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              className: styles.addMatcherBtn,
              icon: "plus",
              onClick: addNewRoute,
              type: "button",
              children: "New policy"
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_AmRoutesTable__WEBPACK_IMPORTED_MODULE_12__.AmRoutesTable, {
        isAddMode: isAddMode,
        readOnly: readOnly,
        onCancelAdd: onCancelAdd,
        onChange: onTableRouteChange,
        receivers: receivers,
        routes: actualRoutes,
        filters: {
          queryString,
          contactPoint
        },
        alertManagerSourceName: alertManagerSourceName
      })]
    }) : readOnly ? _EmptyArea2 || (_EmptyArea2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_EmptyArea__WEBPACK_IMPORTED_MODULE_9__.EmptyArea, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        children: "There are no specific policies configured."
      })
    })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_10__.EmptyAreaWithCTA, {
      buttonIcon: "plus",
      buttonLabel: "New specific policy",
      onButtonClick: addNewRoute,
      text: "You haven't created any specific policies yet.",
      showButton: canCreateNotifications
    })]
  });
};

const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-flow: column wrap;
    `,
    searchContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-flow: row nowrap;
      padding-bottom: ${theme.spacing(2)};
      border-bottom: 1px solid ${theme.colors.border.strong};
    `,
    clearFilterBtn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-self: flex-end;
      margin-left: ${theme.spacing(1)};
    `,
    filterInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 340px;
      & + & {
        margin-left: ${theme.spacing(1)};
      }
    `,
    addMatcherBtnRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-flow: column nowrap;
      padding: ${theme.spacing(2)} 0;
    `,
    addMatcherBtn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-self: flex-end;
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/MuteTimingsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MuteTimingsTable": () => (/* binding */ MuteTimingsTable)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyAreaWithCTA.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _p, _p2, _IconButton, _br, _br2;

















const MuteTimingsTable = ({
  alertManagerSourceName,
  muteTimingNames,
  hideActions
}) => {
  var _result$alertmanager_3;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_8__.getNotificationsPermissions)(alertManagerSourceName);
  const amConfigs = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_6__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const [muteTimingName, setMuteTimingName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    result
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_11__.initialAsyncRequestState;
  const items = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _result$alertmanager_, _result$alertmanager_2;

    const muteTimings = (_result$alertmanager_ = result === null || result === void 0 ? void 0 : (_result$alertmanager_2 = result.alertmanager_config) === null || _result$alertmanager_2 === void 0 ? void 0 : _result$alertmanager_2.mute_time_intervals) !== null && _result$alertmanager_ !== void 0 ? _result$alertmanager_ : [];
    return muteTimings.filter(({
      name
    }) => muteTimingNames ? muteTimingNames.includes(name) : true).map(mute => {
      return {
        id: mute.name,
        data: mute
      };
    });
  }, [result === null || result === void 0 ? void 0 : (_result$alertmanager_3 = result.alertmanager_config) === null || _result$alertmanager_3 === void 0 ? void 0 : _result$alertmanager_3.mute_time_intervals, muteTimingNames]);
  const columns = useColumns(alertManagerSourceName, hideActions, setMuteTimingName);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    className: styles.container,
    children: [!hideActions && (_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h5", {
      children: "Mute timings"
    }))), !hideActions && (_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
      children: "Mute timings are a named interval of time that may be referenced in the notification policy tree to mute particular notification policies for specific times of the day."
    }))), !hideActions && items.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
      actions: [permissions.create],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
        className: styles.addMuteButton,
        icon: "plus",
        variant: "primary",
        href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeAMLink)('alerting/routes/mute-timing/new', alertManagerSourceName),
        children: "New mute timing"
      })
    }), items.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_12__.DynamicTable, {
      items: items,
      cols: columns
    }) : !hideActions ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_EmptyAreaWithCTA__WEBPACK_IMPORTED_MODULE_13__.EmptyAreaWithCTA, {
      text: "You haven't created any mute timings yet",
      buttonLabel: "Add mute timing",
      buttonIcon: "plus",
      buttonSize: "lg",
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeAMLink)('alerting/routes/mute-timing/new', alertManagerSourceName),
      showButton: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(permissions.create)
    }) : _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
      children: "No mute timings configured"
    })), !hideActions && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal, {
      isOpen: !!muteTimingName,
      title: "Delete mute timing",
      body: `Are you sure you would like to delete "${muteTimingName}"`,
      confirmText: "Delete",
      onConfirm: () => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.deleteMuteTimingAction)(alertManagerSourceName, muteTimingName)),
      onDismiss: () => setMuteTimingName('')
    })]
  });
};

function useColumns(alertManagerSourceName, hideActions = false, setMuteTimingName) {
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_8__.getNotificationsPermissions)(alertManagerSourceName);
  const userHasEditPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(permissions.update);
  const userHasDeletePermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(permissions.delete);
  const showActions = !hideActions && (userHasEditPermissions || userHasDeletePermissions);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const columns = [{
      id: 'name',
      label: 'Name',
      renderCell: function renderName({
        data
      }) {
        return data.name;
      },
      size: '250px'
    }, {
      id: 'timeRange',
      label: 'Time range',
      renderCell: ({
        data
      }) => renderTimeIntervals(data.time_intervals)
    }];

    if (showActions) {
      columns.push({
        id: 'actions',
        label: 'Actions',
        renderCell: function renderActions({
          data
        }) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
              actions: [permissions.update],
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Link, {
                href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeAMLink)(`/alerting/routes/mute-timing/edit`, alertManagerSourceName, {
                  muteName: data.name
                }),
                children: _IconButton || (_IconButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                  name: "edit",
                  title: "Edit mute timing"
                }))
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_5__.Authorize, {
              actions: [permissions.delete],
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                name: 'trash-alt',
                title: "Delete mute timing",
                onClick: () => setMuteTimingName(data.name)
              })
            })]
          });
        },
        size: '100px'
      });
    }

    return columns;
  }, [alertManagerSourceName, setMuteTimingName, showActions, permissions]);
}

function renderTimeIntervals(timeIntervals) {
  return timeIntervals.map((interval, index) => {
    const {
      times,
      weekdays,
      days_of_month,
      months,
      years
    } = interval;
    const timeString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.getTimeString)(times);
    const weekdayString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.getWeekdayString)(weekdays);
    const daysString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.getDaysOfMonthString)(days_of_month);
    const monthsString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.getMonthsString)(months);
    const yearsString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.getYearsString)(years);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [`${timeString} ${weekdayString}`, _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("br", {})), [daysString, monthsString, yearsString].join(' | '), _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("br", {}))]
    }, JSON.stringify(interval) + index);
  });
}

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-flow: column nowrap;
  `,
  addMuteButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(2)};
    align-self: flex-end;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/formStyles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFormStyles": () => (/* binding */ getFormStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getFormStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-items: center;
      display: flex;
      flex-flow: row nowrap;

      & > * + * {
        margin-left: ${theme.spacing(1)};
      }
    `,
    input: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex: 1;
    `,
    timingContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-width: ${theme.spacing(33)};
    `,
    smallInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: ${theme.spacing(6.5)};
    `,
    linkText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      text-decoration: underline;
    `,
    collapse: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: none;
      background: none;
      color: ${theme.colors.text.primary};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/gridStyles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGridStyles": () => (/* binding */ getGridStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getGridStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: grid;
      font-style: ${theme.typography.fontSize};
      grid-template-columns: ${theme.spacing(15.5)} auto;

      ${theme.breakpoints.down('md')} {
        grid-template-columns: 100%;
      }
    `,
    titleCell: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.primary};
    `,
    valueCell: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.secondary};
      margin-bottom: ${theme.spacing(1)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/Matchers.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matchers": () => (/* binding */ Matchers)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Matchers = ({
  matchers
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TagList, {
      className: styles.tags,
      tags: matchers.map(matcher => `${matcher.name}${(0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_3__.matcherToOperator)(matcher)}${matcher.value}`)
    })
  });
};

const getStyles = () => ({
  tags: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    justify-content: flex-start;
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

/***/ "./public/app/features/alerting/unified/hooks/useMuteTimingOptions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMuteTimingOptions": () => (/* binding */ useMuteTimingOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _useAlertManagerSources__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");






function useMuteTimingOptions() {
  const alertManagers = (0,_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_4__.useAlertManagersByPermission)('notification');
  const [alertManagerSourceName] = (0,_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_3__.useAlertManagerSourceName)(alertManagers);
  const amConfigs = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_5__.useUnifiedAlertingSelector)(state => state.amConfigs);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _result$alertmanager_, _config$mute_time_int, _config$mute_time_int2;

    const {
      result
    } = alertManagerSourceName && amConfigs[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_2__.initialAsyncRequestState;
    const config = (_result$alertmanager_ = result === null || result === void 0 ? void 0 : result.alertmanager_config) !== null && _result$alertmanager_ !== void 0 ? _result$alertmanager_ : {};
    const muteTimingsOptions = (_config$mute_time_int = config === null || config === void 0 ? void 0 : (_config$mute_time_int2 = config.mute_time_intervals) === null || _config$mute_time_int2 === void 0 ? void 0 : _config$mute_time_int2.map(value => ({
      value: value.name,
      label: value.name,
      description: value.time_intervals.map(interval => (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_1__.timeIntervalToString)(interval)).join(', AND ')
    }))) !== null && _config$mute_time_int !== void 0 ? _config$mute_time_int : [];
    return muteTimingsOptions;
  }, [alertManagerSourceName, amConfigs]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useURLSearchParams.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useURLSearchParams": () => (/* binding */ useURLSearchParams)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");



function useURLSearchParams() {
  const {
    search
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  const queryParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new URLSearchParams(search), [search]);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((searchValues, replace) => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial(searchValues, replace);
  }, []);
  return [queryParams, update];
}

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/amroutes.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "amRouteToFormAmRoute": () => (/* binding */ amRouteToFormAmRoute),
/* harmony export */   "emptyArrayFieldMatcher": () => (/* binding */ emptyArrayFieldMatcher),
/* harmony export */   "emptyRoute": () => (/* binding */ emptyRoute),
/* harmony export */   "formAmRouteToAmRoute": () => (/* binding */ formAmRouteToAmRoute),
/* harmony export */   "mapMultiSelectValueToStrings": () => (/* binding */ mapMultiSelectValueToStrings),
/* harmony export */   "mapSelectValueToString": () => (/* binding */ mapSelectValueToString),
/* harmony export */   "optionalPositiveInteger": () => (/* binding */ optionalPositiveInteger),
/* harmony export */   "stringToSelectableValue": () => (/* binding */ stringToSelectableValue),
/* harmony export */   "stringsToSelectableValues": () => (/* binding */ stringsToSelectableValues)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _alertmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");





const defaultValueAndType = ['', _time__WEBPACK_IMPORTED_MODULE_4__.timeOptions[0].value];

const matchersToArrayFieldMatchers = (matchers, isRegex) => Object.entries(matchers !== null && matchers !== void 0 ? matchers : {}).reduce((acc, [name, value]) => [...acc, {
  name,
  value,
  operator: isRegex ? app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.MatcherOperator.regex : app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.MatcherOperator.equal
}], []);

const intervalToValueAndType = strValue => {
  if (!strValue) {
    return defaultValueAndType;
  }

  const [value, valueType] = strValue ? (0,_time__WEBPACK_IMPORTED_MODULE_4__.parseInterval)(strValue) : [undefined, undefined];
  const timeOption = _time__WEBPACK_IMPORTED_MODULE_4__.timeOptions.find(opt => opt.value === valueType);

  if (!value || !timeOption) {
    return defaultValueAndType;
  }

  return [String(value), timeOption.value];
};

const selectableValueToString = selectableValue => selectableValue.value;

const selectableValuesToStrings = arr => (arr !== null && arr !== void 0 ? arr : []).map(selectableValueToString);

const emptyArrayFieldMatcher = {
  name: '',
  value: '',
  operator: app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.MatcherOperator.equal
};
const emptyRoute = {
  id: '',
  groupBy: [],
  object_matchers: [],
  routes: [],
  continue: false,
  receiver: '',
  groupWaitValue: '',
  groupWaitValueType: _time__WEBPACK_IMPORTED_MODULE_4__.timeOptions[0].value,
  groupIntervalValue: '',
  groupIntervalValueType: _time__WEBPACK_IMPORTED_MODULE_4__.timeOptions[0].value,
  repeatIntervalValue: '',
  repeatIntervalValueType: _time__WEBPACK_IMPORTED_MODULE_4__.timeOptions[0].value,
  muteTimeIntervals: []
}; //returns route, and a record mapping id to existing route route

const amRouteToFormAmRoute = route => {
  var _route$routes, _route$matchers$map, _route$matchers, _route$object_matcher, _route$object_matcher2, _route$continue, _route$receiver, _route$group_by, _route$mute_time_inte;

  if (!route || Object.keys(route).length === 0) {
    return [emptyRoute, {}];
  }

  const [groupWaitValue, groupWaitValueType] = intervalToValueAndType(route.group_wait);
  const [groupIntervalValue, groupIntervalValueType] = intervalToValueAndType(route.group_interval);
  const [repeatIntervalValue, repeatIntervalValueType] = intervalToValueAndType(route.repeat_interval);
  const id = String(Math.random());
  const id2route = {
    [id]: route
  };
  const formRoutes = [];
  (_route$routes = route.routes) === null || _route$routes === void 0 ? void 0 : _route$routes.forEach(subRoute => {
    const [subFormRoute, subId2Route] = amRouteToFormAmRoute(subRoute);
    formRoutes.push(subFormRoute);
    Object.assign(id2route, subId2Route);
  }); // Frontend migration to use object_matchers instead of matchers

  const matchers = route.matchers ? (_route$matchers$map = (_route$matchers = route.matchers) === null || _route$matchers === void 0 ? void 0 : _route$matchers.map(matcher => (0,_alertmanager__WEBPACK_IMPORTED_MODULE_2__.matcherToMatcherField)((0,_alertmanager__WEBPACK_IMPORTED_MODULE_2__.parseMatcher)(matcher)))) !== null && _route$matchers$map !== void 0 ? _route$matchers$map : [] : (_route$object_matcher = (_route$object_matcher2 = route.object_matchers) === null || _route$object_matcher2 === void 0 ? void 0 : _route$object_matcher2.map(matcher => ({
    name: matcher[0],
    operator: matcher[1],
    value: matcher[2]
  }))) !== null && _route$object_matcher !== void 0 ? _route$object_matcher : [];
  return [{
    id,
    object_matchers: [...matchers, ...matchersToArrayFieldMatchers(route.match, false), ...matchersToArrayFieldMatchers(route.match_re, true)],
    continue: (_route$continue = route.continue) !== null && _route$continue !== void 0 ? _route$continue : false,
    receiver: (_route$receiver = route.receiver) !== null && _route$receiver !== void 0 ? _route$receiver : '',
    groupBy: (_route$group_by = route.group_by) !== null && _route$group_by !== void 0 ? _route$group_by : [],
    groupWaitValue,
    groupWaitValueType,
    groupIntervalValue,
    groupIntervalValueType,
    repeatIntervalValue,
    repeatIntervalValueType,
    routes: formRoutes,
    muteTimeIntervals: (_route$mute_time_inte = route.mute_time_intervals) !== null && _route$mute_time_inte !== void 0 ? _route$mute_time_inte : []
  }, id2route];
};
const formAmRouteToAmRoute = (alertManagerSourceName, formAmRoute, id2ExistingRoute) => {
  const existing = id2ExistingRoute[formAmRoute.id];
  const amRoute = Object.assign({}, existing !== null && existing !== void 0 ? existing : {}, {
    continue: formAmRoute.continue,
    group_by: formAmRoute.groupBy,
    object_matchers: formAmRoute.object_matchers.length ? formAmRoute.object_matchers.map(matcher => [matcher.name, matcher.operator, matcher.value]) : undefined,
    match: undefined,
    match_re: undefined,
    group_wait: formAmRoute.groupWaitValue ? `${formAmRoute.groupWaitValue}${formAmRoute.groupWaitValueType}` : undefined,
    group_interval: formAmRoute.groupIntervalValue ? `${formAmRoute.groupIntervalValue}${formAmRoute.groupIntervalValueType}` : undefined,
    repeat_interval: formAmRoute.repeatIntervalValue ? `${formAmRoute.repeatIntervalValue}${formAmRoute.repeatIntervalValueType}` : undefined,
    routes: formAmRoute.routes.map(subRoute => formAmRouteToAmRoute(alertManagerSourceName, subRoute, id2ExistingRoute)),
    mute_time_intervals: formAmRoute.muteTimeIntervals
  });

  if (alertManagerSourceName !== _datasource__WEBPACK_IMPORTED_MODULE_3__.GRAFANA_RULES_SOURCE_NAME) {
    amRoute.matchers = formAmRoute.object_matchers.map(({
      name,
      operator,
      value
    }) => `${name}${operator}${value}`);
    amRoute.object_matchers = undefined;
  } else {
    amRoute.matchers = undefined;
  }

  if (formAmRoute.receiver) {
    amRoute.receiver = formAmRoute.receiver;
  }

  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(amRoute, lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined);
};
const stringToSelectableValue = str => ({
  label: str,
  value: str
});
const stringsToSelectableValues = arr => (arr !== null && arr !== void 0 ? arr : []).map(stringToSelectableValue);
const mapSelectValueToString = selectableValue => {
  var _selectableValueToStr;

  if (!selectableValue) {
    return '';
  }

  return (_selectableValueToStr = selectableValueToString(selectableValue)) !== null && _selectableValueToStr !== void 0 ? _selectableValueToStr : '';
};
const mapMultiSelectValueToStrings = selectableValues => {
  if (!selectableValues) {
    return [];
  }

  return selectableValuesToStrings(selectableValues);
};
const optionalPositiveInteger = value => {
  if (!value) {
    return undefined;
  }

  return !/^\d+$/.test(value) ? 'Must be a positive integer.' : undefined;
};

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/dynamicTable.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareItems": () => (/* binding */ prepareItems)
/* harmony export */ });
const prepareItems = (items, idCreator) => items.map((item, index) => {
  var _idCreator;

  return {
    id: (_idCreator = idCreator === null || idCreator === void 0 ? void 0 : idCreator(item)) !== null && _idCreator !== void 0 ? _idCreator : index,
    data: item
  };
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQVc7QUFDbEUsTUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVixXQUFPZ0osU0FBUDtBQUNEOztBQUVELFNBQU8sQ0FBQyxRQUFRaUssSUFBUixDQUFhalQsS0FBYixDQUFELEdBQXVCLDZCQUF2QixHQUF1RGdKLFNBQTlEO0FBQ0QsQ0FOTTs7Ozs7Ozs7Ozs7QUNsTUEsTUFBTXZCLFlBQVksR0FBRyxDQUMxQndFLEtBRDBCLEVBRTFCaUgsU0FGMEIsS0FJMUJqSCxLQUFLLENBQUMvUSxHQUFOLENBQVUsQ0FBQ3VPLElBQUQsRUFBTzlELEtBQVA7QUFBQTs7QUFBQSxTQUFrQjtBQUMxQk0sSUFBQUEsRUFBRSxnQkFBRWlOLFNBQUYsYUFBRUEsU0FBRix1QkFBRUEsU0FBUyxDQUFHekosSUFBSCxDQUFYLG1EQUF1QjlELEtBREM7QUFFMUJqSyxJQUFBQSxJQUFJLEVBQUUrTjtBQUZvQixHQUFsQjtBQUFBLENBQVYsQ0FKSyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL0FtUm91dGVzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0F1dGhvcml6ZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0VtcHR5QXJlYS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0VtcHR5QXJlYVdpdGhDVEEudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9Ob0FsZXJ0TWFuYWdlcldhcm5pbmcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvTWF0Y2hlckZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2Ftcm91dGVzL0FtUm9vdFJvdXRlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYW1yb3V0ZXMvQW1Sb290Um91dGVGb3JtLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYW1yb3V0ZXMvQW1Sb290Um91dGVSZWFkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYW1yb3V0ZXMvQW1Sb3V0ZXNFeHBhbmRlZEZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbXJvdXRlcy9BbVJvdXRlc0V4cGFuZGVkUmVhZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2Ftcm91dGVzL0FtUm91dGVzVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbXJvdXRlcy9BbVNwZWNpZmljUm91dGluZy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2Ftcm91dGVzL011dGVUaW1pbmdzVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbXJvdXRlcy9mb3JtU3R5bGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbXJvdXRlcy9ncmlkU3R5bGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9zaWxlbmNlcy9NYXRjaGVycy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZU11dGVUaW1pbmdPcHRpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlVVJMU2VhcmNoUGFyYW1zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvYW1yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC91dGlscy9keW5hbWljVGFibGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgY2xlYW5VcEFjdGlvbiwgU3RhdGVTZWxlY3RvciB9IGZyb20gJy4uL2FjdGlvbnMvY2xlYW5VcCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDbGVhbnVwPFQ+KHN0YXRlU2VsZWN0b3I6IFN0YXRlU2VsZWN0b3I8VD4pIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAvL2JpdCBvZiBhIGhhY2sgdG8gdW5idXJkZW4gdXNlciBmcm9tIGhhdmluZyB0byB3cmFwIHN0YXRlU2VsY2V0b3IgaW4gYSB1c2VDYWxsYmFjay4gT3RoZXJ3aXNlIGNsZWFudXAgd291bGQgaGFwcGVuIG9uIGV2ZXJ5IHJlbmRlclxuICBjb25zdCBzZWxlY3RvclJlZiA9IHVzZVJlZihzdGF0ZVNlbGVjdG9yKTtcbiAgc2VsZWN0b3JSZWYuY3VycmVudCA9IHN0YXRlU2VsZWN0b3I7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGNsZWFuVXBBY3Rpb24oeyBzdGF0ZVNlbGVjdG9yOiBzZWxlY3RvclJlZi5jdXJyZW50IH0pKTtcbiAgICB9O1xuICB9LCBbZGlzcGF0Y2hdKTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0LCBMb2FkaW5nUGxhY2Vob2xkZXIsIHVzZVN0eWxlczIsIHdpdGhFcnJvckJvdW5kYXJ5IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUmVjZWl2ZXIgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IHVzZUNsZWFudXAgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2hvb2tzL3VzZUNsZWFudXAnO1xuXG5pbXBvcnQgeyBBbGVydE1hbmFnZXJQaWNrZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvQWxlcnRNYW5hZ2VyUGlja2VyJztcbmltcG9ydCB7IEFsZXJ0aW5nUGFnZVdyYXBwZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlcic7XG5pbXBvcnQgeyBOb0FsZXJ0TWFuYWdlcldhcm5pbmcgfSBmcm9tICcuL2NvbXBvbmVudHMvTm9BbGVydE1hbmFnZXJXYXJuaW5nJztcbmltcG9ydCB7IEFtUm9vdFJvdXRlIH0gZnJvbSAnLi9jb21wb25lbnRzL2Ftcm91dGVzL0FtUm9vdFJvdXRlJztcbmltcG9ydCB7IEFtU3BlY2lmaWNSb3V0aW5nIH0gZnJvbSAnLi9jb21wb25lbnRzL2Ftcm91dGVzL0FtU3BlY2lmaWNSb3V0aW5nJztcbmltcG9ydCB7IE11dGVUaW1pbmdzVGFibGUgfSBmcm9tICcuL2NvbXBvbmVudHMvYW1yb3V0ZXMvTXV0ZVRpbWluZ3NUYWJsZSc7XG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lJztcbmltcG9ydCB7IHVzZUFsZXJ0TWFuYWdlcnNCeVBlcm1pc3Npb24gfSBmcm9tICcuL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZXMnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IGZldGNoQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uLCB1cGRhdGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24gfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgQW1Sb3V0ZVJlY2VpdmVyLCBGb3JtQW1Sb3V0ZSB9IGZyb20gJy4vdHlwZXMvYW1yb3V0ZXMnO1xuaW1wb3J0IHsgYW1Sb3V0ZVRvRm9ybUFtUm91dGUsIGZvcm1BbVJvdXRlVG9BbVJvdXRlLCBzdHJpbmdzVG9TZWxlY3RhYmxlVmFsdWVzIH0gZnJvbSAnLi91dGlscy9hbXJvdXRlcyc7XG5pbXBvcnQgeyBpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZSB9IGZyb20gJy4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuL3V0aWxzL3JlZHV4JztcblxuY29uc3QgQW1Sb3V0ZXM6IEZDID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW2lzUm9vdFJvdXRlRWRpdE1vZGUsIHNldElzUm9vdFJvdXRlRWRpdE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBhbGVydE1hbmFnZXJzID0gdXNlQWxlcnRNYW5hZ2Vyc0J5UGVybWlzc2lvbignbm90aWZpY2F0aW9uJyk7XG4gIGNvbnN0IFthbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lXSA9IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUoYWxlcnRNYW5hZ2Vycyk7XG5cbiAgY29uc3QgcmVhZE9ubHkgPSBhbGVydE1hbmFnZXJTb3VyY2VOYW1lID8gaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkgOiB0cnVlO1xuXG4gIGNvbnN0IGFtQ29uZmlncyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYW1Db25maWdzKTtcblxuICBjb25zdCBmZXRjaENvbmZpZyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hBbGVydE1hbmFnZXJDb25maWdBY3Rpb24oYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkpO1xuICAgIH1cbiAgfSwgW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGRpc3BhdGNoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaENvbmZpZygpO1xuICB9LCBbZmV0Y2hDb25maWddKTtcblxuICBjb25zdCB7XG4gICAgcmVzdWx0LFxuICAgIGxvYWRpbmc6IHJlc3VsdExvYWRpbmcsXG4gICAgZXJyb3I6IHJlc3VsdEVycm9yLFxuICB9ID0gKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgJiYgYW1Db25maWdzW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdKSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG5cbiAgY29uc3QgY29uZmlnID0gcmVzdWx0Py5hbGVydG1hbmFnZXJfY29uZmlnO1xuICBjb25zdCBbcm9vdFJvdXRlLCBpZDJFeGlzdGluZ1JvdXRlXSA9IHVzZU1lbW8oKCkgPT4gYW1Sb3V0ZVRvRm9ybUFtUm91dGUoY29uZmlnPy5yb3V0ZSksIFtjb25maWc/LnJvdXRlXSk7XG5cbiAgY29uc3QgcmVjZWl2ZXJzID0gc3RyaW5nc1RvU2VsZWN0YWJsZVZhbHVlcyhcbiAgICAoY29uZmlnPy5yZWNlaXZlcnMgPz8gW10pLm1hcCgocmVjZWl2ZXI6IFJlY2VpdmVyKSA9PiByZWNlaXZlci5uYW1lKVxuICApIGFzIEFtUm91dGVSZWNlaXZlcltdO1xuXG4gIGNvbnN0IGVudGVyUm9vdFJvdXRlRWRpdE1vZGUgPSAoKSA9PiB7XG4gICAgc2V0SXNSb290Um91dGVFZGl0TW9kZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBleGl0Um9vdFJvdXRlRWRpdE1vZGUgPSAoKSA9PiB7XG4gICAgc2V0SXNSb290Um91dGVFZGl0TW9kZShmYWxzZSk7XG4gIH07XG5cbiAgdXNlQ2xlYW51cCgoc3RhdGUpID0+IHN0YXRlLnVuaWZpZWRBbGVydGluZy5zYXZlQU1Db25maWcpO1xuICBjb25zdCBoYW5kbGVTYXZlID0gKGRhdGE6IFBhcnRpYWw8Rm9ybUFtUm91dGU+KSA9PiB7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gZm9ybUFtUm91dGVUb0FtUm91dGUoXG4gICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLFxuICAgICAge1xuICAgICAgICAuLi5yb290Um91dGUsXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICB9LFxuICAgICAgaWQyRXhpc3RpbmdSb3V0ZVxuICAgICk7XG5cbiAgICBpZiAoaXNSb290Um91dGVFZGl0TW9kZSkge1xuICAgICAgZXhpdFJvb3RSb3V0ZUVkaXRNb2RlKCk7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2goXG4gICAgICB1cGRhdGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24oe1xuICAgICAgICBuZXdDb25maWc6IHtcbiAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgYWxlcnRtYW5hZ2VyX2NvbmZpZzoge1xuICAgICAgICAgICAgLi4ucmVzdWx0LmFsZXJ0bWFuYWdlcl9jb25maWcsXG4gICAgICAgICAgICByb3V0ZTogbmV3RGF0YSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvbGRDb25maWc6IHJlc3VsdCxcbiAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogYWxlcnRNYW5hZ2VyU291cmNlTmFtZSEsXG4gICAgICAgIHN1Y2Nlc3NNZXNzYWdlOiAnU2F2ZWQnLFxuICAgICAgICByZWZldGNoOiB0cnVlLFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGlmICghYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8QWxlcnRpbmdQYWdlV3JhcHBlciBwYWdlSWQ9XCJhbS1yb3V0ZXNcIj5cbiAgICAgICAgPE5vQWxlcnRNYW5hZ2VyV2FybmluZyBhdmFpbGFibGVBbGVydE1hbmFnZXJzPXthbGVydE1hbmFnZXJzfSAvPlxuICAgICAgPC9BbGVydGluZ1BhZ2VXcmFwcGVyPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBbGVydGluZ1BhZ2VXcmFwcGVyIHBhZ2VJZD1cImFtLXJvdXRlc1wiPlxuICAgICAgPEFsZXJ0TWFuYWdlclBpY2tlclxuICAgICAgICBjdXJyZW50PXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICBvbkNoYW5nZT17c2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgZGF0YVNvdXJjZXM9e2FsZXJ0TWFuYWdlcnN9XG4gICAgICAvPlxuICAgICAge3Jlc3VsdEVycm9yICYmICFyZXN1bHRMb2FkaW5nICYmIChcbiAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIiB0aXRsZT1cIkVycm9yIGxvYWRpbmcgQWxlcnRtYW5hZ2VyIGNvbmZpZ1wiPlxuICAgICAgICAgIHtyZXN1bHRFcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yLid9XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAge3Jlc3VsdExvYWRpbmcgJiYgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PVwiTG9hZGluZyBBbGVydG1hbmFnZXIgY29uZmlnLi4uXCIgLz59XG4gICAgICB7cmVzdWx0ICYmICFyZXN1bHRMb2FkaW5nICYmICFyZXN1bHRFcnJvciAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEFtUm9vdFJvdXRlXG4gICAgICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICAgICAgaXNFZGl0TW9kZT17aXNSb290Um91dGVFZGl0TW9kZX1cbiAgICAgICAgICAgIG9uU2F2ZT17aGFuZGxlU2F2ZX1cbiAgICAgICAgICAgIG9uRW50ZXJFZGl0TW9kZT17ZW50ZXJSb290Um91dGVFZGl0TW9kZX1cbiAgICAgICAgICAgIG9uRXhpdEVkaXRNb2RlPXtleGl0Um9vdFJvdXRlRWRpdE1vZGV9XG4gICAgICAgICAgICByZWNlaXZlcnM9e3JlY2VpdmVyc31cbiAgICAgICAgICAgIHJvdXRlcz17cm9vdFJvdXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5icmVha30gLz5cbiAgICAgICAgICA8QW1TcGVjaWZpY1JvdXRpbmdcbiAgICAgICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2F2ZX1cbiAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgIG9uUm9vdFJvdXRlRWRpdD17ZW50ZXJSb290Um91dGVFZGl0TW9kZX1cbiAgICAgICAgICAgIHJlY2VpdmVycz17cmVjZWl2ZXJzfVxuICAgICAgICAgICAgcm91dGVzPXtyb290Um91dGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJyZWFrfSAvPlxuICAgICAgICAgIDxNdXRlVGltaW5nc1RhYmxlIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0FsZXJ0aW5nUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRXJyb3JCb3VuZGFyeShBbVJvdXRlcywgeyBzdHlsZTogJ3BhZ2UnIH0pO1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGJyZWFrOiBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3N0b3JlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFnZUlkOiBzdHJpbmc7XG4gIGlzTG9hZGluZz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBBbGVydGluZ1BhZ2VXcmFwcGVyOiBGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgcGFnZUlkLCBpc0xvYWRpbmcgfSkgPT4ge1xuICBjb25zdCBuYXZNb2RlbCA9IGdldE5hdk1vZGVsKFxuICAgIHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUubmF2SW5kZXgpLFxuICAgIHBhZ2VJZFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17aXNMb2FkaW5nfT57Y2hpbGRyZW59PC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgYWN0aW9uczogQWNjZXNzQ29udHJvbEFjdGlvbltdO1xuICBmYWxsYmFjaz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgY29uc3QgQXV0aG9yaXplOiBGQzxQcm9wcz4gPSAoeyBhY3Rpb25zLCBjaGlsZHJlbiwgZmFsbGJhY2sgPSB0cnVlIH0pID0+IHtcbiAgaWYgKGFjdGlvbnMuc29tZSgoYWN0aW9uKSA9PiBjb250ZXh0U3J2Lmhhc0FjY2VzcyhhY3Rpb24sIGZhbGxiYWNrKSkpIHtcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBjb25zdCBFbXB0eUFyZWE6IEZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmcyfTtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0U2VtaVdlYWt9O1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nLnhsfTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgQnV0dG9uSFRNTEF0dHJpYnV0ZXMsIEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uVmFyaWFudCwgSWNvbk5hbWUsIExpbmtCdXR0b24sIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRW1wdHlBcmVhIH0gZnJvbSAnLi9FbXB0eUFyZWEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVtcHR5QXJlYVdpdGhDVEFQcm9wcyB7XG4gIGJ1dHRvbkxhYmVsOiBzdHJpbmc7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIG9uQnV0dG9uQ2xpY2s/OiBCdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD5bJ29uQ2xpY2snXTtcbiAgdGV4dDogc3RyaW5nO1xuXG4gIGJ1dHRvbkljb24/OiBJY29uTmFtZTtcbiAgYnV0dG9uU2l6ZT86ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZyc7XG4gIGJ1dHRvblZhcmlhbnQ/OiBCdXR0b25WYXJpYW50O1xuICBzaG93QnV0dG9uPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IEVtcHR5QXJlYVdpdGhDVEE6IEZDPEVtcHR5QXJlYVdpdGhDVEFQcm9wcz4gPSAoe1xuICBidXR0b25JY29uLFxuICBidXR0b25MYWJlbCxcbiAgYnV0dG9uU2l6ZSA9ICdsZycsXG4gIGJ1dHRvblZhcmlhbnQgPSAncHJpbWFyeScsXG4gIG9uQnV0dG9uQ2xpY2ssXG4gIHRleHQsXG4gIGhyZWYsXG4gIHNob3dCdXR0b24gPSB0cnVlLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBjb21tb25Qcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IHN0eWxlcy5idXR0b24sXG4gICAgaWNvbjogYnV0dG9uSWNvbixcbiAgICBzaXplOiBidXR0b25TaXplLFxuICAgIHZhcmlhbnQ6IGJ1dHRvblZhcmlhbnQsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RW1wdHlBcmVhPlxuICAgICAgPD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e3RleHR9PC9wPlxuICAgICAgICB7c2hvd0J1dHRvbiAmJlxuICAgICAgICAgIChocmVmID8gKFxuICAgICAgICAgICAgPExpbmtCdXR0b24gaHJlZj17aHJlZn0gdHlwZT1cImJ1dHRvblwiIHsuLi5jb21tb25Qcm9wc30+XG4gICAgICAgICAgICAgIHtidXR0b25MYWJlbH1cbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkJ1dHRvbkNsaWNrfSB0eXBlPVwiYnV0dG9uXCIgey4uLmNvbW1vblByb3BzfT5cbiAgICAgICAgICAgICAge2J1dHRvbkxhYmVsfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICA8Lz5cbiAgICA8L0VtcHR5QXJlYT5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iZzJ9O1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcueGx9O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGAsXG4gICAgdGV4dDogY3NzYFxuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBgLFxuICAgIGJ1dHRvbjogY3NzYFxuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcubWR9IDAgJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJEYXRhU291cmNlIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmltcG9ydCB7IEFsZXJ0TWFuYWdlclBpY2tlciB9IGZyb20gJy4vQWxlcnRNYW5hZ2VyUGlja2VyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYXZhaWxhYmxlQWxlcnRNYW5hZ2VyczogQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZVtdO1xufVxuXG5jb25zdCBOb0FsZXJ0TWFuYWdlcnNBdmFpbGFibGUgPSAoKSA9PiAoXG4gIDxBbGVydCB0aXRsZT1cIk5vIEFsZXJ0bWFuYWdlciBmb3VuZFwiIHNldmVyaXR5PVwid2FybmluZ1wiPlxuICAgIFdlIGNvdWxkIG5vdCBmaW5kIGFueSBleHRlcm5hbCBBbGVydG1hbmFnZXJzIGFuZCB5b3UgbWF5IG5vdCBoYXZlIGFjY2VzcyB0byB0aGUgYnVpbHQtaW4gR3JhZmFuYSBBbGVydG1hbmFnZXIuXG4gIDwvQWxlcnQ+XG4pO1xuXG5jb25zdCBPdGhlckFsZXJ0TWFuYWdlcnNBdmFpbGFibGUgPSAoKSA9PiAoXG4gIDxBbGVydCB0aXRsZT1cIlNlbGVjdGVkIEFsZXJ0bWFuYWdlciBub3QgZm91bmQuIFNlbGVjdCBhIGRpZmZlcmVudCBBbGVydG1hbmFnZXIuXCIgc2V2ZXJpdHk9XCJ3YXJuaW5nXCI+XG4gICAgU2VsZWN0ZWQgQWxlcnRtYW5hZ2VyIG5vIGxvbmdlciBleGlzdHMgb3IgeW91IG1heSBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyBpdC5cbiAgPC9BbGVydD5cbik7XG5cbmV4cG9ydCBjb25zdCBOb0FsZXJ0TWFuYWdlcldhcm5pbmcgPSAoeyBhdmFpbGFibGVBbGVydE1hbmFnZXJzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtfLCBzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lXSA9IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUoYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycyk7XG4gIGNvbnN0IGhhc090aGVyQU1zID0gYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycy5sZW5ndGggPiAwO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtoYXNPdGhlckFNcyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8QWxlcnRNYW5hZ2VyUGlja2VyIG9uQ2hhbmdlPXtzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lfSBkYXRhU291cmNlcz17YXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc30gLz5cbiAgICAgICAgICA8T3RoZXJBbGVydE1hbmFnZXJzQXZhaWxhYmxlIC8+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPE5vQWxlcnRNYW5hZ2Vyc0F2YWlsYWJsZSAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICdAZ3JhZmFuYS9leHBlcmltZW50YWwnO1xuaW1wb3J0IHsgTGFiZWwsIFRvb2x0aXAsIElucHV0LCBJY29uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHF1ZXJ5U3RyaW5nPzogc3RyaW5nO1xuICBkZWZhdWx0UXVlcnlTdHJpbmc/OiBzdHJpbmc7XG4gIG9uRmlsdGVyQ2hhbmdlOiAoZmlsdGVyU3RyaW5nOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBNYXRjaGVyRmlsdGVyID0gKHsgY2xhc3NOYW1lLCBvbkZpbHRlckNoYW5nZSwgZGVmYXVsdFF1ZXJ5U3RyaW5nLCBxdWVyeVN0cmluZyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChlOiBGb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIG9uRmlsdGVyQ2hhbmdlKHRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IHNlYXJjaEljb24gPSA8SWNvbiBuYW1lPXsnc2VhcmNoJ30gLz47XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8TGFiZWw+XG4gICAgICAgIDxTdGFjayBnYXA9ezAuNX0+XG4gICAgICAgICAgPHNwYW4+U2VhcmNoIGJ5IGxhYmVsPC9zcGFuPlxuICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBGaWx0ZXIgYWxlcnRzIHVzaW5nIGxhYmVsIHF1ZXJ5aW5nLCBleDpcbiAgICAgICAgICAgICAgICA8cHJlPntge3NldmVyaXR5PVwiY3JpdGljYWxcIiwgaW5zdGFuY2U9flwiY2x1c3Rlci11cy0uK1wifWB9PC9wcmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IG5hbWU9XCJpbmZvLWNpcmNsZVwiIHNpemU9XCJzbVwiIC8+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9MYWJlbD5cbiAgICAgIDxJbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17ZGVmYXVsdFF1ZXJ5U3RyaW5nfVxuICAgICAgICB2YWx1ZT17cXVlcnlTdHJpbmd9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgIGRhdGEtdGVzdGlkPVwic2VhcmNoLXF1ZXJ5LWlucHV0XCJcbiAgICAgICAgcHJlZml4PXtzZWFyY2hJY29ufVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFdpZHRofVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgaWNvbjogY3NzYFxuICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICBgLFxuICBpbnB1dFdpZHRoOiBjc3NgXG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIGZsZXgtZ3JvdzogMDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBBdXRob3JpemUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0F1dGhvcml6ZSc7XG5pbXBvcnQgeyBBbVJvdXRlUmVjZWl2ZXIsIEZvcm1BbVJvdXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMvYW1yb3V0ZXMnO1xuaW1wb3J0IHsgZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWNjZXNzLWNvbnRyb2wnO1xuaW1wb3J0IHsgaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcblxuaW1wb3J0IHsgQW1Sb290Um91dGVGb3JtIH0gZnJvbSAnLi9BbVJvb3RSb3V0ZUZvcm0nO1xuaW1wb3J0IHsgQW1Sb290Um91dGVSZWFkIH0gZnJvbSAnLi9BbVJvb3RSb3V0ZVJlYWQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFtUm9vdFJvdXRlUHJvcHMge1xuICBpc0VkaXRNb2RlOiBib29sZWFuO1xuICBvbkVudGVyRWRpdE1vZGU6ICgpID0+IHZvaWQ7XG4gIG9uRXhpdEVkaXRNb2RlOiAoKSA9PiB2b2lkO1xuICBvblNhdmU6IChkYXRhOiBQYXJ0aWFsPEZvcm1BbVJvdXRlPikgPT4gdm9pZDtcbiAgcmVjZWl2ZXJzOiBBbVJvdXRlUmVjZWl2ZXJbXTtcbiAgcm91dGVzOiBGb3JtQW1Sb3V0ZTtcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQW1Sb290Um91dGU6IEZDPEFtUm9vdFJvdXRlUHJvcHM+ID0gKHtcbiAgaXNFZGl0TW9kZSxcbiAgb25TYXZlLFxuICBvbkVudGVyRWRpdE1vZGUsXG4gIG9uRXhpdEVkaXRNb2RlLFxuICByZWNlaXZlcnMsXG4gIHJvdXRlcyxcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSxcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IHBlcm1pc3Npb25zID0gZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpO1xuICBjb25zdCBpc1JlYWRPbmx5ID0gaXNWYW5pbGxhUHJvbWV0aGV1c0FsZXJ0TWFuYWdlckRhdGFTb3VyY2UoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gZGF0YS10ZXN0aWQ9XCJhbS1yb290LXJvdXRlLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZUNvbnRhaW5lcn0+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgUm9vdCBwb2xpY3kgLSA8aT5kZWZhdWx0IGZvciBhbGwgYWxlcnRzPC9pPlxuICAgICAgICA8L2g1PlxuICAgICAgICB7IWlzRWRpdE1vZGUgJiYgIWlzUmVhZE9ubHkgJiYgKFxuICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLnVwZGF0ZV19PlxuICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwicGVuXCIgb25DbGljaz17b25FbnRlckVkaXRNb2RlfSBzaXplPVwic21cIiB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0F1dGhvcml6ZT5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+XG4gICAgICAgIEFsbCBhbGVydHMgd2lsbCBnbyB0byB0aGUgZGVmYXVsdCBjb250YWN0IHBvaW50LCB1bmxlc3MgeW91IHNldCBhZGRpdGlvbmFsIG1hdGNoZXJzIGluIHRoZSBzcGVjaWZpYyByb3V0aW5nXG4gICAgICAgIGFyZWEuXG4gICAgICA8L3A+XG4gICAgICB7aXNFZGl0TW9kZSA/IChcbiAgICAgICAgPEFtUm9vdFJvdXRlRm9ybVxuICAgICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9XG4gICAgICAgICAgb25DYW5jZWw9e29uRXhpdEVkaXRNb2RlfVxuICAgICAgICAgIG9uU2F2ZT17b25TYXZlfVxuICAgICAgICAgIHJlY2VpdmVycz17cmVjZWl2ZXJzfVxuICAgICAgICAgIHJvdXRlcz17cm91dGVzfVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPEFtUm9vdFJvdXRlUmVhZCByb3V0ZXM9e3JvdXRlc30gLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGAsXG4gICAgdGl0bGVDb250YWluZXI6IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBgLFxuICAgIHRpdGxlOiBjc3NgXG4gICAgICBmbGV4OiAxMDAlO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQnV0dG9uLCBDb2xsYXBzZSwgRmllbGQsIEZvcm0sIElucHV0LCBJbnB1dENvbnRyb2wsIExpbmssIE11bHRpU2VsZWN0LCBTZWxlY3QsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEFtUm91dGVSZWNlaXZlciwgRm9ybUFtUm91dGUgfSBmcm9tICcuLi8uLi90eXBlcy9hbXJvdXRlcyc7XG5pbXBvcnQge1xuICBtYXBNdWx0aVNlbGVjdFZhbHVlVG9TdHJpbmdzLFxuICBtYXBTZWxlY3RWYWx1ZVRvU3RyaW5nLFxuICBvcHRpb25hbFBvc2l0aXZlSW50ZWdlcixcbiAgc3RyaW5nVG9TZWxlY3RhYmxlVmFsdWUsXG4gIHN0cmluZ3NUb1NlbGVjdGFibGVWYWx1ZXMsXG59IGZyb20gJy4uLy4uL3V0aWxzL2Ftcm91dGVzJztcbmltcG9ydCB7IG1ha2VBTUxpbmsgfSBmcm9tICcuLi8uLi91dGlscy9taXNjJztcbmltcG9ydCB7IHRpbWVPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZSc7XG5cbmltcG9ydCB7IGdldEZvcm1TdHlsZXMgfSBmcm9tICcuL2Zvcm1TdHlsZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFtUm9vdFJvdXRlRm9ybVByb3BzIHtcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nO1xuICBvbkNhbmNlbDogKCkgPT4gdm9pZDtcbiAgb25TYXZlOiAoZGF0YTogRm9ybUFtUm91dGUpID0+IHZvaWQ7XG4gIHJlY2VpdmVyczogQW1Sb3V0ZVJlY2VpdmVyW107XG4gIHJvdXRlczogRm9ybUFtUm91dGU7XG59XG5cbmV4cG9ydCBjb25zdCBBbVJvb3RSb3V0ZUZvcm06IEZDPEFtUm9vdFJvdXRlRm9ybVByb3BzPiA9ICh7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsXG4gIG9uQ2FuY2VsLFxuICBvblNhdmUsXG4gIHJlY2VpdmVycyxcbiAgcm91dGVzLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldEZvcm1TdHlsZXMpO1xuICBjb25zdCBbaXNUaW1pbmdPcHRpb25zRXhwYW5kZWQsIHNldElzVGltaW5nT3B0aW9uc0V4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2dyb3VwQnlPcHRpb25zLCBzZXRHcm91cEJ5T3B0aW9uc10gPSB1c2VTdGF0ZShzdHJpbmdzVG9TZWxlY3RhYmxlVmFsdWVzKHJvdXRlcy5ncm91cEJ5KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBkZWZhdWx0VmFsdWVzPXtyb3V0ZXN9IG9uU3VibWl0PXtvblNhdmV9PlxuICAgICAgeyh7IGNvbnRyb2wsIGVycm9ycywgc2V0VmFsdWUgfSkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkRlZmF1bHQgY29udGFjdCBwb2ludFwiIGludmFsaWQ9eyEhZXJyb3JzLnJlY2VpdmVyfSBlcnJvcj17ZXJyb3JzLnJlY2VpdmVyPy5tZXNzYWdlfT5cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBkYXRhLXRlc3RpZD1cImFtLXJlY2VpdmVyLXNlbGVjdFwiPlxuICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVmYXVsdCBjb250YWN0IHBvaW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UobWFwU2VsZWN0VmFsdWVUb1N0cmluZyh2YWx1ZSkpfVxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JlY2VpdmVyc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJlY2VpdmVyXCJcbiAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9IH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5vcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlua1RleHR9XG4gICAgICAgICAgICAgICAgICBocmVmPXttYWtlQU1MaW5rKCcvYWxlcnRpbmcvbm90aWZpY2F0aW9ucy9yZWNlaXZlcnMvbmV3JywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgY29udGFjdCBwb2ludFxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJHcm91cCBieVwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkdyb3VwIGFsZXJ0cyB3aGVuIHlvdSByZWNlaXZlIGEgbm90aWZpY2F0aW9uIGJhc2VkIG9uIGxhYmVscy5cIlxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJhbS1ncm91cC1zZWxlY3RcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiBAdHMtaWdub3JlLWNoZWNrOiByZWFjdC1ob29rLWZvcm0gbWFkZSBtZSBkbyB0aGlzICovfVxuICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxNdWx0aVNlbGVjdFxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdyb3VwIGJ5XCJcbiAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgb25DcmVhdGVPcHRpb249eyhvcHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRHcm91cEJ5T3B0aW9ucygob3B0cykgPT4gWy4uLm9wdHMsIHN0cmluZ1RvU2VsZWN0YWJsZVZhbHVlKG9wdCldKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlLWNoZWNrOiByZWFjdC1ob29rLWZvcm0gbWFkZSBtZSBkbyB0aGlzXG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKCdncm91cEJ5JywgWy4uLmZpZWxkLnZhbHVlLCBvcHRdKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZShtYXBNdWx0aVNlbGVjdFZhbHVlVG9TdHJpbmdzKHZhbHVlKSl9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtncm91cEJ5T3B0aW9uc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICBuYW1lPVwiZ3JvdXBCeVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPENvbGxhcHNlXG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29sbGFwc2V9XG4gICAgICAgICAgICBpc09wZW49e2lzVGltaW5nT3B0aW9uc0V4cGFuZGVkfVxuICAgICAgICAgICAgbGFiZWw9XCJUaW1pbmcgb3B0aW9uc1wiXG4gICAgICAgICAgICBvblRvZ2dsZT17c2V0SXNUaW1pbmdPcHRpb25zRXhwYW5kZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPVwiR3JvdXAgd2FpdFwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHdhaXRpbmcgdGltZSB1bnRpbCB0aGUgaW5pdGlhbCBub3RpZmljYXRpb24gaXMgc2VudCBmb3IgYSBuZXcgZ3JvdXAgY3JlYXRlZCBieSBhbiBpbmNvbWluZyBhbGVydC4gRGVmYXVsdCAzMCBzZWNvbmRzLlwiXG4gICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmdyb3VwV2FpdFZhbHVlfVxuICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmdyb3VwV2FpdFZhbHVlPy5tZXNzYWdlfVxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImFtLWdyb3VwLXdhaXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuY29udGFpbmVyLCBzdHlsZXMudGltaW5nQ29udGFpbmVyKX0+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQsIGZpZWxkU3RhdGU6IHsgaW52YWxpZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNtYWxsSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydEZWZhdWx0IDMwIHNlY29uZHMnfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJncm91cFdhaXRWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IG9wdGlvbmFsUG9zaXRpdmVJbnRlZ2VyLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcFNlbGVjdFZhbHVlVG9TdHJpbmcodmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RpbWVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkdyb3VwIHdhaXQgdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdyb3VwV2FpdFZhbHVlVHlwZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9XCJHcm91cCBpbnRlcnZhbFwiXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHdhaXRpbmcgdGltZSB0byBzZW5kIGEgYmF0Y2ggb2YgbmV3IGFsZXJ0cyBmb3IgdGhhdCBncm91cCBhZnRlciB0aGUgZmlyc3Qgbm90aWZpY2F0aW9uIHdhcyBzZW50LiBEZWZhdWx0IDUgbWludXRlcy5cIlxuICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5ncm91cEludGVydmFsVmFsdWV9XG4gICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZ3JvdXBJbnRlcnZhbFZhbHVlPy5tZXNzYWdlfVxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImFtLWdyb3VwLWludGVydmFsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmNvbnRhaW5lciwgc3R5bGVzLnRpbWluZ0NvbnRhaW5lcil9PlxuICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkLCBmaWVsZFN0YXRlOiB7IGludmFsaWQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17aW52YWxpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnRGVmYXVsdCA1IG1pbnV0ZXMnfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJncm91cEludGVydmFsVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiBvcHRpb25hbFBvc2l0aXZlSW50ZWdlcixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZShtYXBTZWxlY3RWYWx1ZVRvU3RyaW5nKHZhbHVlKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aW1lT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHcm91cCBpbnRlcnZhbCB0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ3JvdXBJbnRlcnZhbFZhbHVlVHlwZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9XCJSZXBlYXQgaW50ZXJ2YWxcIlxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSB3YWl0aW5nIHRpbWUgdG8gcmVzZW5kIGFuIGFsZXJ0IGFmdGVyIHRoZXkgaGF2ZSBzdWNjZXNzZnVsbHkgYmVlbiBzZW50LiBEZWZhdWx0IDQgaG91cnMuXCJcbiAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMucmVwZWF0SW50ZXJ2YWxWYWx1ZX1cbiAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5yZXBlYXRJbnRlcnZhbFZhbHVlPy5tZXNzYWdlfVxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImFtLXJlcGVhdC1pbnRlcnZhbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb250YWluZXIsIHN0eWxlcy50aW1pbmdDb250YWluZXIpfT5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCwgZmllbGRTdGF0ZTogeyBpbnZhbGlkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB7Li4uZmllbGR9IGNsYXNzTmFtZT17c3R5bGVzLnNtYWxsSW5wdXR9IGludmFsaWQ9e2ludmFsaWR9IHBsYWNlaG9sZGVyPVwiRGVmYXVsdCA0IGhvdXJzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlcGVhdEludGVydmFsVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiBvcHRpb25hbFBvc2l0aXZlSW50ZWdlcixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51UGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcFNlbGVjdFZhbHVlVG9TdHJpbmcodmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RpbWVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlcGVhdCBpbnRlcnZhbCB0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVwZWF0SW50ZXJ2YWxWYWx1ZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNhbmNlbH0gdHlwZT1cInJlc2V0XCIgdmFyaWFudD1cInNlY29uZGFyeVwiIGZpbGw9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBGb3JtQW1Sb3V0ZSB9IGZyb20gJy4uLy4uL3R5cGVzL2Ftcm91dGVzJztcblxuaW1wb3J0IHsgZ2V0R3JpZFN0eWxlcyB9IGZyb20gJy4vZ3JpZFN0eWxlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1Sb290Um91dGVSZWFkUHJvcHMge1xuICByb3V0ZXM6IEZvcm1BbVJvdXRlO1xufVxuXG5leHBvcnQgY29uc3QgQW1Sb290Um91dGVSZWFkOiBGQzxBbVJvb3RSb3V0ZVJlYWRQcm9wcz4gPSAoeyByb3V0ZXMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldEdyaWRTdHlsZXMpO1xuXG4gIGNvbnN0IHJlY2VpdmVyID0gcm91dGVzLnJlY2VpdmVyIHx8ICctJztcbiAgY29uc3QgZ3JvdXBCeSA9IHJvdXRlcy5ncm91cEJ5LmpvaW4oJywgJykgfHwgJy0nO1xuICBjb25zdCBncm91cFdhaXQgPSByb3V0ZXMuZ3JvdXBXYWl0VmFsdWUgPyBgJHtyb3V0ZXMuZ3JvdXBXYWl0VmFsdWV9JHtyb3V0ZXMuZ3JvdXBXYWl0VmFsdWVUeXBlfWAgOiAnLSc7XG4gIGNvbnN0IGdyb3VwSW50ZXJ2YWwgPSByb3V0ZXMuZ3JvdXBJbnRlcnZhbFZhbHVlXG4gICAgPyBgJHtyb3V0ZXMuZ3JvdXBJbnRlcnZhbFZhbHVlfSR7cm91dGVzLmdyb3VwSW50ZXJ2YWxWYWx1ZVR5cGV9YFxuICAgIDogJy0nO1xuICBjb25zdCByZXBlYXRJbnRlcnZhbCA9IHJvdXRlcy5yZXBlYXRJbnRlcnZhbFZhbHVlXG4gICAgPyBgJHtyb3V0ZXMucmVwZWF0SW50ZXJ2YWxWYWx1ZX0ke3JvdXRlcy5yZXBlYXRJbnRlcnZhbFZhbHVlVHlwZX1gXG4gICAgOiAnLSc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ2VsbH0+Q29udGFjdCBwb2ludDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZUNlbGx9IGRhdGEtdGVzdGlkPVwiYW0tcm91dGVzLXJvb3QtcmVjZWl2ZXJcIj5cbiAgICAgICAge3JlY2VpdmVyfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ2VsbH0+R3JvdXAgYnk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWVDZWxsfSBkYXRhLXRlc3RpZD1cImFtLXJvdXRlcy1yb290LWdyb3VwLWJ5XCI+XG4gICAgICAgIHtncm91cEJ5fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlQ2VsbH0+VGltaW5nczwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZUNlbGx9IGRhdGEtdGVzdGlkPVwiYW0tcm91dGVzLXJvb3QtdGltaW5nc1wiPlxuICAgICAgICBHcm91cCB3YWl0OiB7Z3JvdXBXYWl0fSB8IEdyb3VwIGludGVydmFsOiB7Z3JvdXBJbnRlcnZhbH0gfCBSZXBlYXQgaW50ZXJ2YWw6IHtyZXBlYXRJbnRlcnZhbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBGaWVsZCxcbiAgRmllbGRBcnJheSxcbiAgRm9ybSxcbiAgSG9yaXpvbnRhbEdyb3VwLFxuICBJY29uQnV0dG9uLFxuICBJbnB1dCxcbiAgSW5wdXRDb250cm9sLFxuICBNdWx0aVNlbGVjdCxcbiAgU2VsZWN0LFxuICBTd2l0Y2gsXG4gIHVzZVN0eWxlczIsXG4gIEJhZGdlLFxuICBWZXJ0aWNhbEdyb3VwLFxufSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IHVzZU11dGVUaW1pbmdPcHRpb25zIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlTXV0ZVRpbWluZ09wdGlvbnMnO1xuaW1wb3J0IHsgQW1Sb3V0ZVJlY2VpdmVyLCBGb3JtQW1Sb3V0ZSB9IGZyb20gJy4uLy4uL3R5cGVzL2Ftcm91dGVzJztcbmltcG9ydCB7IG1hdGNoZXJGaWVsZE9wdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHtcbiAgZW1wdHlBcnJheUZpZWxkTWF0Y2hlcixcbiAgbWFwTXVsdGlTZWxlY3RWYWx1ZVRvU3RyaW5ncyxcbiAgbWFwU2VsZWN0VmFsdWVUb1N0cmluZyxcbiAgb3B0aW9uYWxQb3NpdGl2ZUludGVnZXIsXG4gIHN0cmluZ1RvU2VsZWN0YWJsZVZhbHVlLFxuICBzdHJpbmdzVG9TZWxlY3RhYmxlVmFsdWVzLFxufSBmcm9tICcuLi8uLi91dGlscy9hbXJvdXRlcyc7XG5pbXBvcnQgeyB0aW1lT3B0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL3RpbWUnO1xuXG5pbXBvcnQgeyBnZXRGb3JtU3R5bGVzIH0gZnJvbSAnLi9mb3JtU3R5bGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBBbVJvdXRlc0V4cGFuZGVkRm9ybVByb3BzIHtcbiAgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG4gIG9uU2F2ZTogKGRhdGE6IEZvcm1BbVJvdXRlKSA9PiB2b2lkO1xuICByZWNlaXZlcnM6IEFtUm91dGVSZWNlaXZlcltdO1xuICByb3V0ZXM6IEZvcm1BbVJvdXRlO1xufVxuXG5leHBvcnQgY29uc3QgQW1Sb3V0ZXNFeHBhbmRlZEZvcm06IEZDPEFtUm91dGVzRXhwYW5kZWRGb3JtUHJvcHM+ID0gKHsgb25DYW5jZWwsIG9uU2F2ZSwgcmVjZWl2ZXJzLCByb3V0ZXMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGZvcm1TdHlsZXMgPSB1c2VTdHlsZXMyKGdldEZvcm1TdHlsZXMpO1xuICBjb25zdCBbb3ZlcnJpZGVHcm91cGluZywgc2V0T3ZlcnJpZGVHcm91cGluZ10gPSB1c2VTdGF0ZShyb3V0ZXMuZ3JvdXBCeS5sZW5ndGggPiAwKTtcbiAgY29uc3QgW292ZXJyaWRlVGltaW5ncywgc2V0T3ZlcnJpZGVUaW1pbmdzXSA9IHVzZVN0YXRlKFxuICAgICEhcm91dGVzLmdyb3VwV2FpdFZhbHVlIHx8ICEhcm91dGVzLmdyb3VwSW50ZXJ2YWxWYWx1ZSB8fCAhIXJvdXRlcy5yZXBlYXRJbnRlcnZhbFZhbHVlXG4gICk7XG4gIGNvbnN0IFtncm91cEJ5T3B0aW9ucywgc2V0R3JvdXBCeU9wdGlvbnNdID0gdXNlU3RhdGUoc3RyaW5nc1RvU2VsZWN0YWJsZVZhbHVlcyhyb3V0ZXMuZ3JvdXBCeSkpO1xuICBjb25zdCBtdXRlVGltaW5nT3B0aW9ucyA9IHVzZU11dGVUaW1pbmdPcHRpb25zKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBkZWZhdWx0VmFsdWVzPXtyb3V0ZXN9IG9uU3VibWl0PXtvblNhdmV9PlxuICAgICAgeyh7IGNvbnRyb2wsIHJlZ2lzdGVyLCBlcnJvcnMsIHNldFZhbHVlIH0pID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7LyogQHRzLWlnbm9yZS1jaGVjazogcmVhY3QtaG9vay1mb3JtIG1hZGUgbWUgZG8gdGhpcyAqL31cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIHsuLi5yZWdpc3RlcignaWQnKX0gLz5cbiAgICAgICAgICB7LyogQHRzLWlnbm9yZS1jaGVjazogcmVhY3QtaG9vay1mb3JtIG1hZGUgbWUgZG8gdGhpcyAqL31cbiAgICAgICAgICA8RmllbGRBcnJheSBuYW1lPVwib2JqZWN0X21hdGNoZXJzXCIgY29udHJvbD17Y29udHJvbH0+XG4gICAgICAgICAgICB7KHsgZmllbGRzLCBhcHBlbmQsIHJlbW92ZSB9KSA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPFZlcnRpY2FsR3JvdXAganVzdGlmeT1cImZsZXgtc3RhcnRcIiBzcGFjaW5nPVwibWRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+TWF0Y2hpbmcgbGFiZWxzPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7ZmllbGRzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5ub01hdGNoZXJzV2FybmluZ31cbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJJZiBubyBtYXRjaGVycyBhcmUgc3BlY2lmaWVkLCB0aGlzIG5vdGlmaWNhdGlvbiBwb2xpY3kgd2lsbCBoYW5kbGUgYWxsIGFsZXJ0IGluc3RhbmNlcy5cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHtmaWVsZHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWF0Y2hlcnNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZHMubWFwKChmaWVsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsUGF0aCA9IGBvYmplY3RfbWF0Y2hlcnNbJHtpbmRleH1dYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAga2V5PXtmaWVsZC5pZH0gYWxpZ249XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLm9iamVjdF9tYXRjaGVycz8uW2luZGV4XT8ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMub2JqZWN0X21hdGNoZXJzPy5baW5kZXhdPy5uYW1lPy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoYCR7bG9jYWxQYXRofS5uYW1lYCwgeyByZXF1aXJlZDogJ0ZpZWxkIGlzIHJlcXVpcmVkJyB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9eydPcGVyYXRvcid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1hdGNoZXJzT3BlcmF0b3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSh2YWx1ZT8udmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bWF0Y2hlckZpZWxkT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcGVyYXRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC5vcGVyYXRvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YCR7bG9jYWxQYXRofS5vcGVyYXRvcmAgYXMgY29uc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLm9iamVjdF9tYXRjaGVycz8uW2luZGV4XT8udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLm9iamVjdF9tYXRjaGVycz8uW2luZGV4XT8udmFsdWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgJHtsb2NhbFBhdGh9LnZhbHVlYCwgeyByZXF1aXJlZDogJ0ZpZWxkIGlzIHJlcXVpcmVkJyB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlbW92ZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJSZW1vdmUgbWF0Y2hlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsndHJhc2gtYWx0J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZShpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTWF0Y2hlckJ0bn1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhcHBlbmQoZW1wdHlBcnJheUZpZWxkTWF0Y2hlcil9XG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWRkIG1hdGNoZXJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVmVydGljYWxHcm91cD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRmllbGRBcnJheT5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJDb250YWN0IHBvaW50XCI+XG4gICAgICAgICAgICB7LyogQHRzLWlnbm9yZS1jaGVjazogcmVhY3QtaG9vay1mb3JtIG1hZGUgbWUgZG8gdGhpcyAqL31cbiAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ29udGFjdCBwb2ludFwiXG4gICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Zvcm1TdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZShtYXBTZWxlY3RWYWx1ZVRvU3RyaW5nKHZhbHVlKSl9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtyZWNlaXZlcnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgbmFtZT1cInJlY2VpdmVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJDb250aW51ZSBtYXRjaGluZyBzdWJzZXF1ZW50IHNpYmxpbmcgbm9kZXNcIj5cbiAgICAgICAgICAgIDxTd2l0Y2ggaWQ9XCJjb250aW51ZS10b2dnbGVcIiB7Li4ucmVnaXN0ZXIoJ2NvbnRpbnVlJyl9IC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJPdmVycmlkZSBncm91cGluZ1wiPlxuICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICBpZD1cIm92ZXJyaWRlLWdyb3VwaW5nLXRvZ2dsZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtvdmVycmlkZUdyb3VwaW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0T3ZlcnJpZGVHcm91cGluZygob3ZlcnJpZGVHcm91cGluZykgPT4gIW92ZXJyaWRlR3JvdXBpbmcpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIHtvdmVycmlkZUdyb3VwaW5nICYmIChcbiAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkdyb3VwIGJ5XCIgZGVzY3JpcHRpb249XCJHcm91cCBhbGVydHMgd2hlbiB5b3UgcmVjZWl2ZSBhIG5vdGlmaWNhdGlvbiBiYXNlZCBvbiBsYWJlbHMuXCI+XG4gICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPE11bHRpU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHcm91cCBieVwiXG4gICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgYWxsb3dDdXN0b21WYWx1ZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Zvcm1TdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlT3B0aW9uPXsob3B0OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRHcm91cEJ5T3B0aW9ucygob3B0cykgPT4gWy4uLm9wdHMsIHN0cmluZ1RvU2VsZWN0YWJsZVZhbHVlKG9wdCldKTtcblxuICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUtY2hlY2s6IHJlYWN0LWhvb2stZm9ybSBtYWRlIG1lIGRvIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSgnZ3JvdXBCeScsIFsuLi5maWVsZC52YWx1ZSwgb3B0XSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcE11bHRpU2VsZWN0VmFsdWVUb1N0cmluZ3ModmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Z3JvdXBCeU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICBuYW1lPVwiZ3JvdXBCeVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEZpZWxkIGxhYmVsPVwiT3ZlcnJpZGUgZ2VuZXJhbCB0aW1pbmdzXCI+XG4gICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgIGlkPVwib3ZlcnJpZGUtdGltaW5ncy10b2dnbGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17b3ZlcnJpZGVUaW1pbmdzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gc2V0T3ZlcnJpZGVUaW1pbmdzKChvdmVycmlkZVRpbWluZ3MpID0+ICFvdmVycmlkZVRpbWluZ3MpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIHtvdmVycmlkZVRpbWluZ3MgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJHcm91cCB3YWl0XCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSB3YWl0aW5nIHRpbWUgdW50aWwgdGhlIGluaXRpYWwgbm90aWZpY2F0aW9uIGlzIHNlbnQgZm9yIGEgbmV3IGdyb3VwIGNyZWF0ZWQgYnkgYW4gaW5jb21pbmcgYWxlcnQuXCJcbiAgICAgICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5ncm91cFdhaXRWYWx1ZX1cbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmdyb3VwV2FpdFZhbHVlPy5tZXNzYWdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChmb3JtU3R5bGVzLmNvbnRhaW5lciwgZm9ybVN0eWxlcy50aW1pbmdDb250YWluZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQsIGZpZWxkU3RhdGU6IHsgaW52YWxpZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Zm9ybVN0eWxlcy5zbWFsbElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiR3JvdXAgd2FpdCB2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZ3JvdXBXYWl0VmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogb3B0aW9uYWxQb3NpdGl2ZUludGVnZXIsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtmb3JtU3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZShtYXBTZWxlY3RWYWx1ZVRvU3RyaW5nKHZhbHVlKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RpbWVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiR3JvdXAgd2FpdCB0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJncm91cFdhaXRWYWx1ZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiR3JvdXAgaW50ZXJ2YWxcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHdhaXRpbmcgdGltZSB0byBzZW5kIGEgYmF0Y2ggb2YgbmV3IGFsZXJ0cyBmb3IgdGhhdCBncm91cCBhZnRlciB0aGUgZmlyc3Qgbm90aWZpY2F0aW9uIHdhcyBzZW50LlwiXG4gICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuZ3JvdXBJbnRlcnZhbFZhbHVlfVxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZ3JvdXBJbnRlcnZhbFZhbHVlPy5tZXNzYWdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChmb3JtU3R5bGVzLmNvbnRhaW5lciwgZm9ybVN0eWxlcy50aW1pbmdDb250YWluZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQsIGZpZWxkU3RhdGU6IHsgaW52YWxpZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Zm9ybVN0eWxlcy5zbWFsbElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiR3JvdXAgaW50ZXJ2YWwgdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImdyb3VwSW50ZXJ2YWxWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiBvcHRpb25hbFBvc2l0aXZlSW50ZWdlcixcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Zvcm1TdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcFNlbGVjdFZhbHVlVG9TdHJpbmcodmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGltZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHcm91cCBpbnRlcnZhbCB0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJncm91cEludGVydmFsVmFsdWVUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJlcGVhdCBpbnRlcnZhbFwiXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgd2FpdGluZyB0aW1lIHRvIHJlc2VuZCBhbiBhbGVydCBhZnRlciB0aGV5IGhhdmUgc3VjY2Vzc2Z1bGx5IGJlZW4gc2VudC5cIlxuICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLnJlcGVhdEludGVydmFsVmFsdWV9XG4gICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5yZXBlYXRJbnRlcnZhbFZhbHVlPy5tZXNzYWdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChmb3JtU3R5bGVzLmNvbnRhaW5lciwgZm9ybVN0eWxlcy50aW1pbmdDb250YWluZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQsIGZpZWxkU3RhdGU6IHsgaW52YWxpZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Zm9ybVN0eWxlcy5zbWFsbElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVwZWF0IGludGVydmFsIHZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZXBlYXRJbnRlcnZhbFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IG9wdGlvbmFsUG9zaXRpdmVJbnRlZ2VyLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Zm9ybVN0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudVBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKG1hcFNlbGVjdFZhbHVlVG9TdHJpbmcodmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGltZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSZXBlYXQgaW50ZXJ2YWwgdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVwZWF0SW50ZXJ2YWxWYWx1ZVR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJNdXRlIHRpbWluZ3NcIlxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJhbS1tdXRlLXRpbWluZy1zZWxlY3RcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBZGQgbXV0ZSB0aW1pbmcgdG8gcG9saWN5XCJcbiAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLm11dGVUaW1lSW50ZXJ2YWxzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICA8TXVsdGlTZWxlY3RcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNdXRlIHRpbWluZ3NcIlxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtmb3JtU3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UobWFwTXVsdGlTZWxlY3RWYWx1ZVRvU3RyaW5ncyh2YWx1ZSkpfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bXV0ZVRpbWluZ09wdGlvbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgbmFtZT1cIm11dGVUaW1lSW50ZXJ2YWxzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgcG9saWN5PC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2FuY2VsfSBmaWxsPVwib3V0bGluZVwiIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgY29uc3QgY29tbW9uU3BhY2luZyA9IHRoZW1lLnNwYWNpbmcoMy41KTtcblxuICByZXR1cm4ge1xuICAgIGFkZE1hdGNoZXJCdG46IGNzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7Y29tbW9uU3BhY2luZ307XG4gICAgYCxcbiAgICBtYXRjaGVyc0NvbnRhaW5lcjogY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnl9O1xuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMSwgMCl9O1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDEsIDQuNiwgMSwgMS41KX07XG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYCxcbiAgICBtYXRjaGVyc09wZXJhdG9yOiBjc3NgXG4gICAgICBtaW4td2lkdGg6IDE0MHB4O1xuICAgIGAsXG4gICAgbmVzdGVkUG9saWNpZXM6IGNzc2BcbiAgICAgIG1hcmdpbi10b3A6ICR7Y29tbW9uU3BhY2luZ307XG4gICAgYCxcbiAgICByZW1vdmVCdXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIuNSl9O1xuICAgIGAsXG4gICAgYnV0dG9uR3JvdXA6IGNzc2BcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDYpfSAwICR7Y29tbW9uU3BhY2luZ307XG5cbiAgICAgICYgPiAqICsgKiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMS41KX07XG4gICAgICB9XG4gICAgYCxcbiAgICBub01hdGNoZXJzV2FybmluZzogY3NzYFxuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDEpfSAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgQW1Sb3V0ZVJlY2VpdmVyLCBGb3JtQW1Sb3V0ZSB9IGZyb20gJy4uLy4uL3R5cGVzL2Ftcm91dGVzJztcbmltcG9ydCB7IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2FjY2Vzcy1jb250cm9sJztcbmltcG9ydCB7IGVtcHR5Um91dGUgfSBmcm9tICcuLi8uLi91dGlscy9hbXJvdXRlcyc7XG5pbXBvcnQgeyBBdXRob3JpemUgfSBmcm9tICcuLi9BdXRob3JpemUnO1xuXG5pbXBvcnQgeyBBbVJvdXRlc1RhYmxlIH0gZnJvbSAnLi9BbVJvdXRlc1RhYmxlJztcbmltcG9ydCB7IE11dGVUaW1pbmdzVGFibGUgfSBmcm9tICcuL011dGVUaW1pbmdzVGFibGUnO1xuaW1wb3J0IHsgZ2V0R3JpZFN0eWxlcyB9IGZyb20gJy4vZ3JpZFN0eWxlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1Sb3V0ZXNFeHBhbmRlZFJlYWRQcm9wcyB7XG4gIG9uQ2hhbmdlOiAocm91dGVzOiBGb3JtQW1Sb3V0ZSkgPT4gdm9pZDtcbiAgcmVjZWl2ZXJzOiBBbVJvdXRlUmVjZWl2ZXJbXTtcbiAgcm91dGVzOiBGb3JtQW1Sb3V0ZTtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBbVJvdXRlc0V4cGFuZGVkUmVhZDogRkM8QW1Sb3V0ZXNFeHBhbmRlZFJlYWRQcm9wcz4gPSAoe1xuICBvbkNoYW5nZSxcbiAgcmVjZWl2ZXJzLFxuICByb3V0ZXMsXG4gIHJlYWRPbmx5ID0gZmFsc2UsXG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgZ3JpZFN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0R3JpZFN0eWxlcyk7XG4gIGNvbnN0IHBlcm1pc3Npb25zID0gZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpO1xuXG4gIGNvbnN0IGdyb3VwV2FpdCA9IHJvdXRlcy5ncm91cFdhaXRWYWx1ZSA/IGAke3JvdXRlcy5ncm91cFdhaXRWYWx1ZX0ke3JvdXRlcy5ncm91cFdhaXRWYWx1ZVR5cGV9YCA6ICctJztcbiAgY29uc3QgZ3JvdXBJbnRlcnZhbCA9IHJvdXRlcy5ncm91cEludGVydmFsVmFsdWVcbiAgICA/IGAke3JvdXRlcy5ncm91cEludGVydmFsVmFsdWV9JHtyb3V0ZXMuZ3JvdXBJbnRlcnZhbFZhbHVlVHlwZX1gXG4gICAgOiAnLSc7XG4gIGNvbnN0IHJlcGVhdEludGVydmFsID0gcm91dGVzLnJlcGVhdEludGVydmFsVmFsdWVcbiAgICA/IGAke3JvdXRlcy5yZXBlYXRJbnRlcnZhbFZhbHVlfSR7cm91dGVzLnJlcGVhdEludGVydmFsVmFsdWVUeXBlfWBcbiAgICA6ICctJztcblxuICBjb25zdCBbc3Vicm91dGVzLCBzZXRTdWJyb3V0ZXNdID0gdXNlU3RhdGUocm91dGVzLnJvdXRlcyk7XG4gIGNvbnN0IFtpc0FkZE1vZGUsIHNldElzQWRkTW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZFN0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWRTdHlsZXMudGl0bGVDZWxsfT5Hcm91cCB3YWl0PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZFN0eWxlcy52YWx1ZUNlbGx9Pntncm91cFdhaXR9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZFN0eWxlcy50aXRsZUNlbGx9Pkdyb3VwIGludGVydmFsPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZFN0eWxlcy52YWx1ZUNlbGx9Pntncm91cEludGVydmFsfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWRTdHlsZXMudGl0bGVDZWxsfT5SZXBlYXQgaW50ZXJ2YWw8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkU3R5bGVzLnZhbHVlQ2VsbH0+e3JlcGVhdEludGVydmFsfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2dyaWRTdHlsZXMudGl0bGVDZWxsfT5OZXN0ZWQgcG9saWNpZXM8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkU3R5bGVzLnZhbHVlQ2VsbH0+XG4gICAgICAgIHshIXN1YnJvdXRlcy5sZW5ndGggPyAoXG4gICAgICAgICAgPEFtUm91dGVzVGFibGVcbiAgICAgICAgICAgIGlzQWRkTW9kZT17aXNBZGRNb2RlfVxuICAgICAgICAgICAgb25DYW5jZWxBZGQ9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0SXNBZGRNb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgc2V0U3Vicm91dGVzKChzdWJyb3V0ZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTdWJyb3V0ZXMgPSBbLi4uc3Vicm91dGVzXTtcbiAgICAgICAgICAgICAgICBuZXdTdWJyb3V0ZXMucG9wKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3Vicm91dGVzO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNoYW5nZT17KG5ld1JvdXRlcykgPT4ge1xuICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgLi4ucm91dGVzLFxuICAgICAgICAgICAgICAgIHJvdXRlczogbmV3Um91dGVzLFxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAoaXNBZGRNb2RlKSB7XG4gICAgICAgICAgICAgICAgc2V0SXNBZGRNb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHJlY2VpdmVycz17cmVjZWl2ZXJzfVxuICAgICAgICAgICAgcm91dGVzPXtzdWJyb3V0ZXN9XG4gICAgICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lPXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHA+Tm8gbmVzdGVkIHBvbGljaWVzIGNvbmZpZ3VyZWQuPC9wPlxuICAgICAgICApfVxuICAgICAgICB7IWlzQWRkTW9kZSAmJiAhcmVhZE9ubHkgJiYgKFxuICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLmNyZWF0ZV19PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGROZXN0ZWRSb3V0aW5nQnRufVxuICAgICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTdWJyb3V0ZXMoKHN1YnJvdXRlcykgPT4gWy4uLnN1YnJvdXRlcywgZW1wdHlSb3V0ZV0pO1xuICAgICAgICAgICAgICAgIHNldElzQWRkTW9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGQgbmVzdGVkIHBvbGljeVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtncmlkU3R5bGVzLnRpdGxlQ2VsbH0+TXV0ZSB0aW1pbmdzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Z3JpZFN0eWxlcy52YWx1ZUNlbGx9PlxuICAgICAgICA8TXV0ZVRpbWluZ3NUYWJsZVxuICAgICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWUhfVxuICAgICAgICAgIG11dGVUaW1pbmdOYW1lcz17cm91dGVzLm11dGVUaW1lSW50ZXJ2YWxzfVxuICAgICAgICAgIGhpZGVBY3Rpb25zXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZE5lc3RlZFJvdXRpbmdCdG46IGNzc2BcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBpbnRlcnNlY3Rpb25XaXRoLCBpc0VxdWFsIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgQ29uZmlybU1vZGFsLCBIb3Jpem9udGFsR3JvdXAsIEljb25CdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuXG5pbXBvcnQgeyBBbVJvdXRlUmVjZWl2ZXIsIEZvcm1BbVJvdXRlIH0gZnJvbSAnLi4vLi4vdHlwZXMvYW1yb3V0ZXMnO1xuaW1wb3J0IHsgZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWNjZXNzLWNvbnRyb2wnO1xuaW1wb3J0IHsgbWF0Y2hlckZpZWxkVG9NYXRjaGVyLCBwYXJzZU1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWxlcnRtYW5hZ2VyJztcbmltcG9ydCB7IHByZXBhcmVJdGVtcyB9IGZyb20gJy4uLy4uL3V0aWxzL2R5bmFtaWNUYWJsZSc7XG5pbXBvcnQgeyBEeW5hbWljVGFibGUsIER5bmFtaWNUYWJsZUNvbHVtblByb3BzLCBEeW5hbWljVGFibGVJdGVtUHJvcHMgfSBmcm9tICcuLi9EeW5hbWljVGFibGUnO1xuaW1wb3J0IHsgRW1wdHlBcmVhIH0gZnJvbSAnLi4vRW1wdHlBcmVhJztcbmltcG9ydCB7IE1hdGNoZXJzIH0gZnJvbSAnLi4vc2lsZW5jZXMvTWF0Y2hlcnMnO1xuXG5pbXBvcnQgeyBBbVJvdXRlc0V4cGFuZGVkRm9ybSB9IGZyb20gJy4vQW1Sb3V0ZXNFeHBhbmRlZEZvcm0nO1xuaW1wb3J0IHsgQW1Sb3V0ZXNFeHBhbmRlZFJlYWQgfSBmcm9tICcuL0FtUm91dGVzRXhwYW5kZWRSZWFkJztcblxuZXhwb3J0IGludGVyZmFjZSBBbVJvdXRlc1RhYmxlUHJvcHMge1xuICBpc0FkZE1vZGU6IGJvb2xlYW47XG4gIG9uQ2hhbmdlOiAocm91dGVzOiBGb3JtQW1Sb3V0ZVtdKSA9PiB2b2lkO1xuICBvbkNhbmNlbEFkZDogKCkgPT4gdm9pZDtcbiAgcmVjZWl2ZXJzOiBBbVJvdXRlUmVjZWl2ZXJbXTtcbiAgcm91dGVzOiBGb3JtQW1Sb3V0ZVtdO1xuICBmaWx0ZXJzPzogeyBxdWVyeVN0cmluZz86IHN0cmluZzsgY29udGFjdFBvaW50Pzogc3RyaW5nIH07XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nO1xufVxuXG50eXBlIFJvdXRlVGFibGVDb2x1bW5Qcm9wcyA9IER5bmFtaWNUYWJsZUNvbHVtblByb3BzPEZvcm1BbVJvdXRlPjtcbnR5cGUgUm91dGVUYWJsZUl0ZW1Qcm9wcyA9IER5bmFtaWNUYWJsZUl0ZW1Qcm9wczxGb3JtQW1Sb3V0ZT47XG5cbmV4cG9ydCBjb25zdCBnZXRGaWx0ZXJlZFJvdXRlcyA9IChyb3V0ZXM6IEZvcm1BbVJvdXRlW10sIGxhYmVsTWF0Y2hlclF1ZXJ5Pzogc3RyaW5nLCBjb250YWN0UG9pbnRRdWVyeT86IHN0cmluZykgPT4ge1xuICBjb25zdCBtYXRjaGVycyA9IHBhcnNlTWF0Y2hlcnMobGFiZWxNYXRjaGVyUXVlcnkgPz8gJycpO1xuXG4gIGxldCBmaWx0ZXJlZFJvdXRlcyA9IHJvdXRlcztcblxuICBpZiAobWF0Y2hlcnMubGVuZ3RoKSB7XG4gICAgZmlsdGVyZWRSb3V0ZXMgPSByb3V0ZXMuZmlsdGVyKChyb3V0ZSkgPT4ge1xuICAgICAgY29uc3Qgcm91dGVNYXRjaGVycyA9IHJvdXRlLm9iamVjdF9tYXRjaGVycy5tYXAobWF0Y2hlckZpZWxkVG9NYXRjaGVyKTtcbiAgICAgIHJldHVybiBpbnRlcnNlY3Rpb25XaXRoKHJvdXRlTWF0Y2hlcnMsIG1hdGNoZXJzLCBpc0VxdWFsKS5sZW5ndGggPiAwO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNvbnRhY3RQb2ludFF1ZXJ5ICYmIGNvbnRhY3RQb2ludFF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICBmaWx0ZXJlZFJvdXRlcyA9IGZpbHRlcmVkUm91dGVzLmZpbHRlcigocm91dGUpID0+XG4gICAgICByb3V0ZS5yZWNlaXZlci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGNvbnRhY3RQb2ludFF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZFJvdXRlcztcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVkUm91dGUgPSAocm91dGVzOiBGb3JtQW1Sb3V0ZVtdLCB1cGRhdGVkUm91dGU6IEZvcm1BbVJvdXRlKTogRm9ybUFtUm91dGVbXSA9PiB7XG4gIGNvbnN0IG5ld1JvdXRlcyA9IFsuLi5yb3V0ZXNdO1xuICBjb25zdCBlZGl0SW5kZXggPSBuZXdSb3V0ZXMuZmluZEluZGV4KChyb3V0ZSkgPT4gcm91dGUuaWQgPT09IHVwZGF0ZWRSb3V0ZS5pZCk7XG5cbiAgaWYgKGVkaXRJbmRleCA+PSAwKSB7XG4gICAgbmV3Um91dGVzW2VkaXRJbmRleF0gPSB7XG4gICAgICAuLi5uZXdSb3V0ZXNbZWRpdEluZGV4XSxcbiAgICAgIC4uLnVwZGF0ZWRSb3V0ZSxcbiAgICB9O1xuICB9XG4gIHJldHVybiBuZXdSb3V0ZXM7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUm91dGUgPSAocm91dGVzOiBGb3JtQW1Sb3V0ZVtdLCByb3V0ZUlkOiBzdHJpbmcpOiBGb3JtQW1Sb3V0ZVtdID0+IHtcbiAgcmV0dXJuIHJvdXRlcy5maWx0ZXIoKHJvdXRlKSA9PiByb3V0ZS5pZCAhPT0gcm91dGVJZCk7XG59O1xuXG5leHBvcnQgY29uc3QgQW1Sb3V0ZXNUYWJsZTogRkM8QW1Sb3V0ZXNUYWJsZVByb3BzPiA9ICh7XG4gIGlzQWRkTW9kZSxcbiAgb25DYW5jZWxBZGQsXG4gIG9uQ2hhbmdlLFxuICByZWNlaXZlcnMsXG4gIHJvdXRlcyxcbiAgZmlsdGVycyxcbiAgcmVhZE9ubHkgPSBmYWxzZSxcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSxcbn0pID0+IHtcbiAgY29uc3QgW2VkaXRNb2RlLCBzZXRFZGl0TW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkZWxldGluZ1JvdXRlSWQsIHNldERlbGV0aW5nUm91dGVJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4gIGNvbnN0IFtleHBhbmRlZElkLCBzZXRFeHBhbmRlZElkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bWJlcj4oKTtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBnZXROb3RpZmljYXRpb25zUGVybWlzc2lvbnMoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG4gIGNvbnN0IGNhbkVkaXRSb3V0ZXMgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24ocGVybWlzc2lvbnMudXBkYXRlKTtcbiAgY29uc3QgY2FuRGVsZXRlUm91dGVzID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25zLmRlbGV0ZSk7XG5cbiAgY29uc3Qgc2hvd0FjdGlvbnMgPSAhcmVhZE9ubHkgJiYgKGNhbkVkaXRSb3V0ZXMgfHwgY2FuRGVsZXRlUm91dGVzKTtcblxuICBjb25zdCBleHBhbmRJdGVtID0gdXNlQ2FsbGJhY2soKGl0ZW06IFJvdXRlVGFibGVJdGVtUHJvcHMpID0+IHNldEV4cGFuZGVkSWQoaXRlbS5pZCksIFtdKTtcbiAgY29uc3QgY29sbGFwc2VJdGVtID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0RXhwYW5kZWRJZCh1bmRlZmluZWQpLCBbXSk7XG5cbiAgY29uc3QgY29sczogUm91dGVUYWJsZUNvbHVtblByb3BzW10gPSBbXG4gICAge1xuICAgICAgaWQ6ICdtYXRjaGluZ0NyaXRlcmlhJyxcbiAgICAgIGxhYmVsOiAnTWF0Y2hpbmcgbGFiZWxzJyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbiAgICAgIHJlbmRlckNlbGw6IChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLmRhdGEub2JqZWN0X21hdGNoZXJzLmxlbmd0aCA/IChcbiAgICAgICAgICA8TWF0Y2hlcnMgbWF0Y2hlcnM9e2l0ZW0uZGF0YS5vYmplY3RfbWF0Y2hlcnMubWFwKG1hdGNoZXJGaWVsZFRvTWF0Y2hlcil9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHNwYW4+TWF0Y2hlcyBhbGwgYWxlcnQgaW5zdGFuY2VzPC9zcGFuPlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHNpemU6IDEwLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdncm91cEJ5JyxcbiAgICAgIGxhYmVsOiAnR3JvdXAgYnknLFxuICAgICAgcmVuZGVyQ2VsbDogKGl0ZW0pID0+IGl0ZW0uZGF0YS5ncm91cEJ5LmpvaW4oJywgJykgfHwgJy0nLFxuICAgICAgc2l6ZTogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncmVjZWl2ZXJDaGFubmVsJyxcbiAgICAgIGxhYmVsOiAnQ29udGFjdCBwb2ludCcsXG4gICAgICByZW5kZXJDZWxsOiAoaXRlbSkgPT4gaXRlbS5kYXRhLnJlY2VpdmVyIHx8ICctJyxcbiAgICAgIHNpemU6IDUsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ211dGVUaW1pbmdzJyxcbiAgICAgIGxhYmVsOiAnTXV0ZSB0aW1pbmdzJyxcbiAgICAgIHJlbmRlckNlbGw6IChpdGVtKSA9PiBpdGVtLmRhdGEubXV0ZVRpbWVJbnRlcnZhbHMuam9pbignLCAnKSB8fCAnLScsXG4gICAgICBzaXplOiA1LFxuICAgIH0sXG4gICAgLi4uKCFzaG93QWN0aW9uc1xuICAgICAgPyBbXVxuICAgICAgOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdhY3Rpb25zJyxcbiAgICAgICAgICAgIGxhYmVsOiAnQWN0aW9ucycsXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG4gICAgICAgICAgICByZW5kZXJDZWxsOiAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5yZW5kZXJFeHBhbmRlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IGV4cGFuZFdpdGhDdXN0b21Db250ZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4cGFuZEl0ZW0oaXRlbSk7XG4gICAgICAgICAgICAgICAgc2V0RWRpdE1vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFZGl0IHJvdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwicGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtleHBhbmRXaXRoQ3VzdG9tQ29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVsZXRlIHJvdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREZWxldGluZ1JvdXRlSWQoaXRlbS5kYXRhLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2l6ZTogJzEwMHB4JyxcbiAgICAgICAgICB9IGFzIFJvdXRlVGFibGVDb2x1bW5Qcm9wcyxcbiAgICAgICAgXSksXG4gIF07XG5cbiAgY29uc3QgZmlsdGVyZWRSb3V0ZXMgPSB1c2VNZW1vKFxuICAgICgpID0+IGdldEZpbHRlcmVkUm91dGVzKHJvdXRlcywgZmlsdGVycz8ucXVlcnlTdHJpbmcsIGZpbHRlcnM/LmNvbnRhY3RQb2ludCksXG4gICAgW3JvdXRlcywgZmlsdGVyc11cbiAgKTtcblxuICBjb25zdCBkeW5hbWljVGFibGVSb3V0ZXMgPSB1c2VNZW1vKFxuICAgICgpID0+IHByZXBhcmVJdGVtcyhpc0FkZE1vZGUgPyByb3V0ZXMgOiBmaWx0ZXJlZFJvdXRlcyksXG4gICAgW2lzQWRkTW9kZSwgcm91dGVzLCBmaWx0ZXJlZFJvdXRlc11cbiAgKTtcblxuICAvLyBleHBhbmQgdGhlIGxhc3QgaXRlbSB3aGVuIGFkZGluZyBvciByZXNldCB3aGVuIHRoZSBsZW5ndGggY2hhbmdlZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0FkZE1vZGUgJiYgZHluYW1pY1RhYmxlUm91dGVzLmxlbmd0aCkge1xuICAgICAgc2V0RXhwYW5kZWRJZChkeW5hbWljVGFibGVSb3V0ZXNbZHluYW1pY1RhYmxlUm91dGVzLmxlbmd0aCAtIDFdLmlkKTtcbiAgICB9XG4gICAgaWYgKCFpc0FkZE1vZGUgJiYgZHluYW1pY1RhYmxlUm91dGVzLmxlbmd0aCkge1xuICAgICAgc2V0RXhwYW5kZWRJZCh1bmRlZmluZWQpO1xuICAgIH1cbiAgfSwgW2lzQWRkTW9kZSwgZHluYW1pY1RhYmxlUm91dGVzXSk7XG5cbiAgaWYgKHJvdXRlcy5sZW5ndGggPiAwICYmIGZpbHRlcmVkUm91dGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RW1wdHlBcmVhPlxuICAgICAgICA8cD5ObyBwb2xpY2llcyBmb3VuZDwvcD5cbiAgICAgIDwvRW1wdHlBcmVhPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RHluYW1pY1RhYmxlXG4gICAgICAgIGNvbHM9e2NvbHN9XG4gICAgICAgIGlzRXhwYW5kYWJsZT17dHJ1ZX1cbiAgICAgICAgaXRlbXM9e2R5bmFtaWNUYWJsZVJvdXRlc31cbiAgICAgICAgdGVzdElkR2VuZXJhdG9yPXsoKSA9PiAnYW0tcm91dGVzLXJvdyd9XG4gICAgICAgIG9uQ29sbGFwc2U9e2NvbGxhcHNlSXRlbX1cbiAgICAgICAgb25FeHBhbmQ9e2V4cGFuZEl0ZW19XG4gICAgICAgIGlzRXhwYW5kZWQ9eyhpdGVtKSA9PiBleHBhbmRlZElkID09PSBpdGVtLmlkfVxuICAgICAgICByZW5kZXJFeHBhbmRlZENvbnRlbnQ9eyhpdGVtOiBSb3V0ZVRhYmxlSXRlbVByb3BzKSA9PlxuICAgICAgICAgIGlzQWRkTW9kZSB8fCBlZGl0TW9kZSA/IChcbiAgICAgICAgICAgIDxBbVJvdXRlc0V4cGFuZGVkRm9ybVxuICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc0FkZE1vZGUpIHtcbiAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsQWRkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldEVkaXRNb2RlKGZhbHNlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25TYXZlPXsoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1JvdXRlcyA9IHVwZGF0ZWRSb3V0ZShyb3V0ZXMsIGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKG5ld1JvdXRlcyk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHJlY2VpdmVycz17cmVjZWl2ZXJzfVxuICAgICAgICAgICAgICByb3V0ZXM9e2l0ZW0uZGF0YX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxBbVJvdXRlc0V4cGFuZGVkUmVhZFxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdSb3V0ZXMgPSB1cGRhdGVkUm91dGUocm91dGVzLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShuZXdSb3V0ZXMpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICByZWNlaXZlcnM9e3JlY2VpdmVyc31cbiAgICAgICAgICAgICAgcm91dGVzPXtpdGVtLmRhdGF9XG4gICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAvPlxuICAgICAgPENvbmZpcm1Nb2RhbFxuICAgICAgICBpc09wZW49eyEhZGVsZXRpbmdSb3V0ZUlkfVxuICAgICAgICB0aXRsZT1cIkRlbGV0ZSBub3RpZmljYXRpb24gcG9saWN5XCJcbiAgICAgICAgYm9keT1cIkRlbGV0aW5nIHRoaXMgbm90aWZpY2F0aW9uIHBvbGljeSB3aWxsIHBlcm1hbmVudGx5IHJlbW92ZSBpdC4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHBvbGljeT9cIlxuICAgICAgICBjb25maXJtVGV4dD1cIlllcywgZGVsZXRlXCJcbiAgICAgICAgaWNvbj1cImV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCJcbiAgICAgICAgb25Db25maXJtPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKGRlbGV0aW5nUm91dGVJZCkge1xuICAgICAgICAgICAgY29uc3QgbmV3Um91dGVzID0gZGVsZXRlUm91dGUocm91dGVzLCBkZWxldGluZ1JvdXRlSWQpO1xuICAgICAgICAgICAgb25DaGFuZ2UobmV3Um91dGVzKTtcbiAgICAgICAgICAgIHNldERlbGV0aW5nUm91dGVJZCh1bmRlZmluZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXREZWxldGluZ1JvdXRlSWQodW5kZWZpbmVkKX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgSW5wdXQsIExhYmVsLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcblxuaW1wb3J0IHsgQXV0aG9yaXplIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BdXRob3JpemUnO1xuaW1wb3J0IHsgdXNlVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVVJMU2VhcmNoUGFyYW1zJztcbmltcG9ydCB7IEFtUm91dGVSZWNlaXZlciwgRm9ybUFtUm91dGUgfSBmcm9tICcuLi8uLi90eXBlcy9hbXJvdXRlcyc7XG5pbXBvcnQgeyBnZXROb3RpZmljYXRpb25zUGVybWlzc2lvbnMgfSBmcm9tICcuLi8uLi91dGlscy9hY2Nlc3MtY29udHJvbCc7XG5pbXBvcnQgeyBlbXB0eUFycmF5RmllbGRNYXRjaGVyLCBlbXB0eVJvdXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvYW1yb3V0ZXMnO1xuaW1wb3J0IHsgZ2V0Tm90aWZpY2F0aW9uUG9saWNpZXNGaWx0ZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBFbXB0eUFyZWEgfSBmcm9tICcuLi9FbXB0eUFyZWEnO1xuaW1wb3J0IHsgRW1wdHlBcmVhV2l0aENUQSB9IGZyb20gJy4uL0VtcHR5QXJlYVdpdGhDVEEnO1xuaW1wb3J0IHsgTWF0Y2hlckZpbHRlciB9IGZyb20gJy4uL2FsZXJ0LWdyb3Vwcy9NYXRjaGVyRmlsdGVyJztcblxuaW1wb3J0IHsgQW1Sb3V0ZXNUYWJsZSB9IGZyb20gJy4vQW1Sb3V0ZXNUYWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW1TcGVjaWZpY1JvdXRpbmdQcm9wcyB7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbiAgb25DaGFuZ2U6IChyb3V0ZXM6IEZvcm1BbVJvdXRlKSA9PiB2b2lkO1xuICBvblJvb3RSb3V0ZUVkaXQ6ICgpID0+IHZvaWQ7XG4gIHJlY2VpdmVyczogQW1Sb3V0ZVJlY2VpdmVyW107XG4gIHJvdXRlczogRm9ybUFtUm91dGU7XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIEZpbHRlcnMge1xuICBxdWVyeVN0cmluZz86IHN0cmluZztcbiAgY29udGFjdFBvaW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQW1TcGVjaWZpY1JvdXRpbmc6IEZDPEFtU3BlY2lmaWNSb3V0aW5nUHJvcHM+ID0gKHtcbiAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSxcbiAgb25DaGFuZ2UsXG4gIG9uUm9vdFJvdXRlRWRpdCxcbiAgcmVjZWl2ZXJzLFxuICByb3V0ZXMsXG4gIHJlYWRPbmx5ID0gZmFsc2UsXG59KSA9PiB7XG4gIGNvbnN0IFthY3R1YWxSb3V0ZXMsIHNldEFjdHVhbFJvdXRlc10gPSB1c2VTdGF0ZShbLi4ucm91dGVzLnJvdXRlc10pO1xuICBjb25zdCBbaXNBZGRNb2RlLCBzZXRJc0FkZE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBwZXJtaXNzaW9ucyA9IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgY29uc3QgY2FuQ3JlYXRlTm90aWZpY2F0aW9ucyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihwZXJtaXNzaW9ucy5jcmVhdGUpO1xuXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VVUkxTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgeyBxdWVyeVN0cmluZywgY29udGFjdFBvaW50IH0gPSBnZXROb3RpZmljYXRpb25Qb2xpY2llc0ZpbHRlcnMoc2VhcmNoUGFyYW1zKTtcblxuICBjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSB1c2VTdGF0ZTxGaWx0ZXJzPih7IHF1ZXJ5U3RyaW5nLCBjb250YWN0UG9pbnQgfSk7XG5cbiAgdXNlRGVib3VuY2UoXG4gICAgKCkgPT4ge1xuICAgICAgc2V0U2VhcmNoUGFyYW1zKHsgcXVlcnlTdHJpbmc6IGZpbHRlcnMucXVlcnlTdHJpbmcsIGNvbnRhY3RQb2ludDogZmlsdGVycy5jb250YWN0UG9pbnQgfSk7XG4gICAgfSxcbiAgICA0MDAsXG4gICAgW2ZpbHRlcnNdXG4gICk7XG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGNsZWFyRmlsdGVycyA9ICgpID0+IHtcbiAgICBzZXRGaWx0ZXJzKHsgcXVlcnlTdHJpbmc6IHVuZGVmaW5lZCwgY29udGFjdFBvaW50OiB1bmRlZmluZWQgfSk7XG4gICAgc2V0U2VhcmNoUGFyYW1zKHsgcXVlcnlTdHJpbmc6IHVuZGVmaW5lZCwgY29udGFjdFBvaW50OiB1bmRlZmluZWQgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkTmV3Um91dGUgPSAoKSA9PiB7XG4gICAgY2xlYXJGaWx0ZXJzKCk7XG4gICAgc2V0SXNBZGRNb2RlKHRydWUpO1xuICAgIHNldEFjdHVhbFJvdXRlcygoKSA9PiBbXG4gICAgICAuLi5yb3V0ZXMucm91dGVzLFxuICAgICAge1xuICAgICAgICAuLi5lbXB0eVJvdXRlLFxuICAgICAgICBtYXRjaGVyczogW2VtcHR5QXJyYXlGaWVsZE1hdGNoZXJdLFxuICAgICAgfSxcbiAgICBdKTtcbiAgfTtcblxuICBjb25zdCBvbkNhbmNlbEFkZCA9ICgpID0+IHtcbiAgICBzZXRJc0FkZE1vZGUoZmFsc2UpO1xuICAgIHNldEFjdHVhbFJvdXRlcyhbLi4ucm91dGVzLnJvdXRlc10pO1xuICB9O1xuXG4gIGNvbnN0IG9uVGFibGVSb3V0ZUNoYW5nZSA9IChuZXdSb3V0ZXM6IEZvcm1BbVJvdXRlW10pOiB2b2lkID0+IHtcbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5yb3V0ZXMsXG4gICAgICByb3V0ZXM6IG5ld1JvdXRlcyxcbiAgICB9KTtcblxuICAgIGlmIChpc0FkZE1vZGUpIHtcbiAgICAgIHNldElzQWRkTW9kZShmYWxzZSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoNT5TcGVjaWZpYyByb3V0aW5nPC9oNT5cbiAgICAgIDxwPlNlbmQgc3BlY2lmaWMgYWxlcnRzIHRvIGNob3NlbiBjb250YWN0IHBvaW50cywgYmFzZWQgb24gbWF0Y2hpbmcgY3JpdGVyaWE8L3A+XG4gICAgICB7IXJvdXRlcy5yZWNlaXZlciA/IChcbiAgICAgICAgcmVhZE9ubHkgPyAoXG4gICAgICAgICAgPEVtcHR5QXJlYT5cbiAgICAgICAgICAgIDxwPlRoZXJlIGlzIG5vIGRlZmF1bHQgY29udGFjdCBwb2ludCBjb25maWd1cmVkIGZvciB0aGUgcm9vdCByb3V0ZS48L3A+XG4gICAgICAgICAgPC9FbXB0eUFyZWE+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEVtcHR5QXJlYVdpdGhDVEFcbiAgICAgICAgICAgIGJ1dHRvbkljb249XCJyb2NrZXRcIlxuICAgICAgICAgICAgYnV0dG9uTGFiZWw9XCJTZXQgYSBkZWZhdWx0IGNvbnRhY3QgcG9pbnRcIlxuICAgICAgICAgICAgb25CdXR0b25DbGljaz17b25Sb290Um91dGVFZGl0fVxuICAgICAgICAgICAgdGV4dD1cIllvdSBoYXZlbid0IHNldCBhIGRlZmF1bHQgY29udGFjdCBwb2ludCBmb3IgdGhlIHJvb3Qgcm91dGUgeWV0LlwiXG4gICAgICAgICAgICBzaG93QnV0dG9uPXtjYW5DcmVhdGVOb3RpZmljYXRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIClcbiAgICAgICkgOiBhY3R1YWxSb3V0ZXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyFpc0FkZE1vZGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPE1hdGNoZXJGaWx0ZXJcbiAgICAgICAgICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlPXsoZmlsdGVyKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRGaWx0ZXJzKChjdXJyZW50RmlsdGVycykgPT4gKHsgLi4uY3VycmVudEZpbHRlcnMsIHF1ZXJ5U3RyaW5nOiBmaWx0ZXIgfSkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBxdWVyeVN0cmluZz17ZmlsdGVycy5xdWVyeVN0cmluZyA/PyAnJ31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcklucHV0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJJbnB1dH0+XG4gICAgICAgICAgICAgICAgICA8TGFiZWw+U2VhcmNoIGJ5IGNvbnRhY3QgcG9pbnQ8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyBjdXJyZW50VGFyZ2V0IH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgc2V0RmlsdGVycygoY3VycmVudEZpbHRlcnMpID0+ICh7IC4uLmN1cnJlbnRGaWx0ZXJzLCBjb250YWN0UG9pbnQ6IGN1cnJlbnRUYXJnZXQudmFsdWUgfSkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpbHRlcnMuY29udGFjdFBvaW50ID8/ICcnfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBjb250YWN0IHBvaW50XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJzZWFyY2gtcXVlcnktaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBwcmVmaXg9ezxJY29uIG5hbWU9eydzZWFyY2gnfSAvPn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgeyhxdWVyeVN0cmluZyB8fCBjb250YWN0UG9pbnQpICYmIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGljb249XCJ0aW1lc1wiIG9uQ2xpY2s9e2NsZWFyRmlsdGVyc30gY2xhc3NOYW1lPXtzdHlsZXMuY2xlYXJGaWx0ZXJCdG59PlxuICAgICAgICAgICAgICAgICAgICBDbGVhciBmaWx0ZXJzXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHshaXNBZGRNb2RlICYmICFyZWFkT25seSAmJiAoXG4gICAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLmNyZWF0ZV19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkTWF0Y2hlckJ0blJvd30+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZE1hdGNoZXJCdG59IGljb249XCJwbHVzXCIgb25DbGljaz17YWRkTmV3Um91dGV9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgTmV3IHBvbGljeVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQXV0aG9yaXplPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8QW1Sb3V0ZXNUYWJsZVxuICAgICAgICAgICAgaXNBZGRNb2RlPXtpc0FkZE1vZGV9XG4gICAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgICBvbkNhbmNlbEFkZD17b25DYW5jZWxBZGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25UYWJsZVJvdXRlQ2hhbmdlfVxuICAgICAgICAgICAgcmVjZWl2ZXJzPXtyZWNlaXZlcnN9XG4gICAgICAgICAgICByb3V0ZXM9e2FjdHVhbFJvdXRlc31cbiAgICAgICAgICAgIGZpbHRlcnM9e3sgcXVlcnlTdHJpbmcsIGNvbnRhY3RQb2ludCB9fVxuICAgICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiByZWFkT25seSA/IChcbiAgICAgICAgPEVtcHR5QXJlYT5cbiAgICAgICAgICA8cD5UaGVyZSBhcmUgbm8gc3BlY2lmaWMgcG9saWNpZXMgY29uZmlndXJlZC48L3A+XG4gICAgICAgIDwvRW1wdHlBcmVhPlxuICAgICAgKSA6IChcbiAgICAgICAgPEVtcHR5QXJlYVdpdGhDVEFcbiAgICAgICAgICBidXR0b25JY29uPVwicGx1c1wiXG4gICAgICAgICAgYnV0dG9uTGFiZWw9XCJOZXcgc3BlY2lmaWMgcG9saWN5XCJcbiAgICAgICAgICBvbkJ1dHRvbkNsaWNrPXthZGROZXdSb3V0ZX1cbiAgICAgICAgICB0ZXh0PVwiWW91IGhhdmVuJ3QgY3JlYXRlZCBhbnkgc3BlY2lmaWMgcG9saWNpZXMgeWV0LlwiXG4gICAgICAgICAgc2hvd0J1dHRvbj17Y2FuQ3JlYXRlTm90aWZpY2F0aW9uc31cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgIGAsXG4gICAgc2VhcmNoQ29udGFpbmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLnN0cm9uZ307XG4gICAgYCxcbiAgICBjbGVhckZpbHRlckJ0bjogY3NzYFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBgLFxuICAgIGZpbHRlcklucHV0OiBjc3NgXG4gICAgICB3aWR0aDogMzQwcHg7XG4gICAgICAmICsgJiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgICAgfVxuICAgIGAsXG4gICAgYWRkTWF0Y2hlckJ0blJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyKX0gMDtcbiAgICBgLFxuICAgIGFkZE1hdGNoZXJCdG46IGNzc2BcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiwgTGlua0J1dHRvbiwgTGluaywgdXNlU3R5bGVzMiwgQ29uZmlybU1vZGFsIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZywgTXV0ZVRpbWVJbnRlcnZhbCwgVGltZUludGVydmFsIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyBBdXRob3JpemUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0F1dGhvcml6ZSc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IGRlbGV0ZU11dGVUaW1pbmdBY3Rpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2FjY2Vzcy1jb250cm9sJztcbmltcG9ydCB7XG4gIGdldFRpbWVTdHJpbmcsXG4gIGdldFdlZWtkYXlTdHJpbmcsXG4gIGdldERheXNPZk1vbnRoU3RyaW5nLFxuICBnZXRNb250aHNTdHJpbmcsXG4gIGdldFllYXJzU3RyaW5nLFxufSBmcm9tICcuLi8uLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgbWFrZUFNTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgQXN5bmNSZXF1ZXN0U3RhdGUsIGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3JlZHV4JztcbmltcG9ydCB7IER5bmFtaWNUYWJsZSwgRHluYW1pY1RhYmxlSXRlbVByb3BzLCBEeW5hbWljVGFibGVDb2x1bW5Qcm9wcyB9IGZyb20gJy4uL0R5bmFtaWNUYWJsZSc7XG5pbXBvcnQgeyBFbXB0eUFyZWFXaXRoQ1RBIH0gZnJvbSAnLi4vRW1wdHlBcmVhV2l0aENUQSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbiAgbXV0ZVRpbWluZ05hbWVzPzogc3RyaW5nW107XG4gIGhpZGVBY3Rpb25zPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE11dGVUaW1pbmdzVGFibGU6IEZDPFByb3BzPiA9ICh7IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIG11dGVUaW1pbmdOYW1lcywgaGlkZUFjdGlvbnMgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBnZXROb3RpZmljYXRpb25zUGVybWlzc2lvbnMoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG4gIGNvbnN0IGFtQ29uZmlncyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYW1Db25maWdzKTtcbiAgY29uc3QgW211dGVUaW1pbmdOYW1lLCBzZXRNdXRlVGltaW5nTmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3QgeyByZXN1bHQgfTogQXN5bmNSZXF1ZXN0U3RhdGU8QWxlcnRNYW5hZ2VyQ29ydGV4Q29uZmlnPiA9XG4gICAgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgJiYgYW1Db25maWdzW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdKSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG5cbiAgY29uc3QgaXRlbXMgPSB1c2VNZW1vKCgpOiBBcnJheTxEeW5hbWljVGFibGVJdGVtUHJvcHM8TXV0ZVRpbWVJbnRlcnZhbD4+ID0+IHtcbiAgICBjb25zdCBtdXRlVGltaW5ncyA9IHJlc3VsdD8uYWxlcnRtYW5hZ2VyX2NvbmZpZz8ubXV0ZV90aW1lX2ludGVydmFscyA/PyBbXTtcbiAgICByZXR1cm4gbXV0ZVRpbWluZ3NcbiAgICAgIC5maWx0ZXIoKHsgbmFtZSB9KSA9PiAobXV0ZVRpbWluZ05hbWVzID8gbXV0ZVRpbWluZ05hbWVzLmluY2x1ZGVzKG5hbWUpIDogdHJ1ZSkpXG4gICAgICAubWFwKChtdXRlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IG11dGUubmFtZSxcbiAgICAgICAgICBkYXRhOiBtdXRlLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gIH0sIFtyZXN1bHQ/LmFsZXJ0bWFuYWdlcl9jb25maWc/Lm11dGVfdGltZV9pbnRlcnZhbHMsIG11dGVUaW1pbmdOYW1lc10pO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSB1c2VDb2x1bW5zKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGhpZGVBY3Rpb25zLCBzZXRNdXRlVGltaW5nTmFtZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICB7IWhpZGVBY3Rpb25zICYmIDxoNT5NdXRlIHRpbWluZ3M8L2g1Pn1cbiAgICAgIHshaGlkZUFjdGlvbnMgJiYgKFxuICAgICAgICA8cD5cbiAgICAgICAgICBNdXRlIHRpbWluZ3MgYXJlIGEgbmFtZWQgaW50ZXJ2YWwgb2YgdGltZSB0aGF0IG1heSBiZSByZWZlcmVuY2VkIGluIHRoZSBub3RpZmljYXRpb24gcG9saWN5IHRyZWUgdG8gbXV0ZVxuICAgICAgICAgIHBhcnRpY3VsYXIgbm90aWZpY2F0aW9uIHBvbGljaWVzIGZvciBzcGVjaWZpYyB0aW1lcyBvZiB0aGUgZGF5LlxuICAgICAgICA8L3A+XG4gICAgICApfVxuICAgICAgeyFoaWRlQWN0aW9ucyAmJiBpdGVtcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMuY3JlYXRlXX0+XG4gICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZE11dGVCdXR0b259XG4gICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICBocmVmPXttYWtlQU1MaW5rKCdhbGVydGluZy9yb3V0ZXMvbXV0ZS10aW1pbmcvbmV3JywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgTmV3IG11dGUgdGltaW5nXG4gICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICA8L0F1dGhvcml6ZT5cbiAgICAgICl9XG4gICAgICB7aXRlbXMubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPER5bmFtaWNUYWJsZSBpdGVtcz17aXRlbXN9IGNvbHM9e2NvbHVtbnN9IC8+XG4gICAgICApIDogIWhpZGVBY3Rpb25zID8gKFxuICAgICAgICA8RW1wdHlBcmVhV2l0aENUQVxuICAgICAgICAgIHRleHQ9XCJZb3UgaGF2ZW4ndCBjcmVhdGVkIGFueSBtdXRlIHRpbWluZ3MgeWV0XCJcbiAgICAgICAgICBidXR0b25MYWJlbD1cIkFkZCBtdXRlIHRpbWluZ1wiXG4gICAgICAgICAgYnV0dG9uSWNvbj1cInBsdXNcIlxuICAgICAgICAgIGJ1dHRvblNpemU9XCJsZ1wiXG4gICAgICAgICAgaHJlZj17bWFrZUFNTGluaygnYWxlcnRpbmcvcm91dGVzL211dGUtdGltaW5nL25ldycsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpfVxuICAgICAgICAgIHNob3dCdXR0b249e2NvbnRleHRTcnYuaGFzUGVybWlzc2lvbihwZXJtaXNzaW9ucy5jcmVhdGUpfVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+Tm8gbXV0ZSB0aW1pbmdzIGNvbmZpZ3VyZWQ8L3A+XG4gICAgICApfVxuICAgICAgeyFoaWRlQWN0aW9ucyAmJiAoXG4gICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICBpc09wZW49eyEhbXV0ZVRpbWluZ05hbWV9XG4gICAgICAgICAgdGl0bGU9XCJEZWxldGUgbXV0ZSB0aW1pbmdcIlxuICAgICAgICAgIGJvZHk9e2BBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gZGVsZXRlIFwiJHttdXRlVGltaW5nTmFtZX1cImB9XG4gICAgICAgICAgY29uZmlybVRleHQ9XCJEZWxldGVcIlxuICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4gZGlzcGF0Y2goZGVsZXRlTXV0ZVRpbWluZ0FjdGlvbihhbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBtdXRlVGltaW5nTmFtZSkpfVxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0TXV0ZVRpbWluZ05hbWUoJycpfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIHVzZUNvbHVtbnMoYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nLCBoaWRlQWN0aW9ucyA9IGZhbHNlLCBzZXRNdXRlVGltaW5nTmFtZTogKG5hbWU6IHN0cmluZykgPT4gdm9pZCkge1xuICBjb25zdCBwZXJtaXNzaW9ucyA9IGdldE5vdGlmaWNhdGlvbnNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcblxuICBjb25zdCB1c2VySGFzRWRpdFBlcm1pc3Npb25zID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25zLnVwZGF0ZSk7XG4gIGNvbnN0IHVzZXJIYXNEZWxldGVQZXJtaXNzaW9ucyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihwZXJtaXNzaW9ucy5kZWxldGUpO1xuICBjb25zdCBzaG93QWN0aW9ucyA9ICFoaWRlQWN0aW9ucyAmJiAodXNlckhhc0VkaXRQZXJtaXNzaW9ucyB8fCB1c2VySGFzRGVsZXRlUGVybWlzc2lvbnMpO1xuICByZXR1cm4gdXNlTWVtbygoKTogQXJyYXk8RHluYW1pY1RhYmxlQ29sdW1uUHJvcHM8TXV0ZVRpbWVJbnRlcnZhbD4+ID0+IHtcbiAgICBjb25zdCBjb2x1bW5zOiBBcnJheTxEeW5hbWljVGFibGVDb2x1bW5Qcm9wczxNdXRlVGltZUludGVydmFsPj4gPSBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnbmFtZScsXG4gICAgICAgIGxhYmVsOiAnTmFtZScsXG4gICAgICAgIHJlbmRlckNlbGw6IGZ1bmN0aW9uIHJlbmRlck5hbWUoeyBkYXRhIH0pIHtcbiAgICAgICAgICByZXR1cm4gZGF0YS5uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiAnMjUwcHgnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICd0aW1lUmFuZ2UnLFxuICAgICAgICBsYWJlbDogJ1RpbWUgcmFuZ2UnLFxuICAgICAgICByZW5kZXJDZWxsOiAoeyBkYXRhIH0pID0+IHJlbmRlclRpbWVJbnRlcnZhbHMoZGF0YS50aW1lX2ludGVydmFscyksXG4gICAgICB9LFxuICAgIF07XG4gICAgaWYgKHNob3dBY3Rpb25zKSB7XG4gICAgICBjb2x1bW5zLnB1c2goe1xuICAgICAgICBpZDogJ2FjdGlvbnMnLFxuICAgICAgICBsYWJlbDogJ0FjdGlvbnMnLFxuICAgICAgICByZW5kZXJDZWxsOiBmdW5jdGlvbiByZW5kZXJBY3Rpb25zKHsgZGF0YSB9KSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxBdXRob3JpemUgYWN0aW9ucz17W3Blcm1pc3Npb25zLnVwZGF0ZV19PlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPXttYWtlQU1MaW5rKGAvYWxlcnRpbmcvcm91dGVzL211dGUtdGltaW5nL2VkaXRgLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIG11dGVOYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBuYW1lPVwiZWRpdFwiIHRpdGxlPVwiRWRpdCBtdXRlIHRpbWluZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0F1dGhvcml6ZT5cbiAgICAgICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMuZGVsZXRlXX0+XG4gICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgIG5hbWU9eyd0cmFzaC1hbHQnfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEZWxldGUgbXV0ZSB0aW1pbmdcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TXV0ZVRpbWluZ05hbWUoZGF0YS5uYW1lKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0F1dGhvcml6ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6ICcxMDBweCcsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH0sIFthbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBzZXRNdXRlVGltaW5nTmFtZSwgc2hvd0FjdGlvbnMsIHBlcm1pc3Npb25zXSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRpbWVJbnRlcnZhbHModGltZUludGVydmFsczogVGltZUludGVydmFsW10pIHtcbiAgcmV0dXJuIHRpbWVJbnRlcnZhbHMubWFwKChpbnRlcnZhbCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB7IHRpbWVzLCB3ZWVrZGF5cywgZGF5c19vZl9tb250aCwgbW9udGhzLCB5ZWFycyB9ID0gaW50ZXJ2YWw7XG4gICAgY29uc3QgdGltZVN0cmluZyA9IGdldFRpbWVTdHJpbmcodGltZXMpO1xuICAgIGNvbnN0IHdlZWtkYXlTdHJpbmcgPSBnZXRXZWVrZGF5U3RyaW5nKHdlZWtkYXlzKTtcbiAgICBjb25zdCBkYXlzU3RyaW5nID0gZ2V0RGF5c09mTW9udGhTdHJpbmcoZGF5c19vZl9tb250aCk7XG4gICAgY29uc3QgbW9udGhzU3RyaW5nID0gZ2V0TW9udGhzU3RyaW5nKG1vbnRocyk7XG4gICAgY29uc3QgeWVhcnNTdHJpbmcgPSBnZXRZZWFyc1N0cmluZyh5ZWFycyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17SlNPTi5zdHJpbmdpZnkoaW50ZXJ2YWwpICsgaW5kZXh9PlxuICAgICAgICB7YCR7dGltZVN0cmluZ30gJHt3ZWVrZGF5U3RyaW5nfWB9XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7W2RheXNTdHJpbmcsIG1vbnRoc1N0cmluZywgeWVhcnNTdHJpbmddLmpvaW4oJyB8ICcpfVxuICAgICAgICA8YnIgLz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfSk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgY29udGFpbmVyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGAsXG4gIGFkZE11dGVCdXR0b246IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBnZXRGb3JtU3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbmVyOiBjc3NgXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcblxuICAgICAgJiA+ICogKyAqIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgICB9XG4gICAgYCxcbiAgICBpbnB1dDogY3NzYFxuICAgICAgZmxleDogMTtcbiAgICBgLFxuICAgIHRpbWluZ0NvbnRhaW5lcjogY3NzYFxuICAgICAgbWF4LXdpZHRoOiAke3RoZW1lLnNwYWNpbmcoMzMpfTtcbiAgICBgLFxuICAgIHNtYWxsSW5wdXQ6IGNzc2BcbiAgICAgIHdpZHRoOiAke3RoZW1lLnNwYWNpbmcoNi41KX07XG4gICAgYCxcbiAgICBsaW5rVGV4dDogY3NzYFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgYCxcbiAgICBjb2xsYXBzZTogY3NzYFxuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgY29uc3QgZ2V0R3JpZFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGZvbnQtc3R5bGU6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250U2l6ZX07XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICR7dGhlbWUuc3BhY2luZygxNS41KX0gYXV0bztcblxuICAgICAgJHt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpfSB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgICAgIH1cbiAgICBgLFxuICAgIHRpdGxlQ2VsbDogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQucHJpbWFyeX07XG4gICAgYCxcbiAgICB2YWx1ZUNlbGw6IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgVGFnTGlzdCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IE1hdGNoZXIgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IG1hdGNoZXJUb09wZXJhdG9yIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWxlcnRtYW5hZ2VyJztcblxudHlwZSBNYXRjaGVyc1Byb3BzID0geyBtYXRjaGVyczogTWF0Y2hlcltdIH07XG5cbmV4cG9ydCBjb25zdCBNYXRjaGVyczogRkM8TWF0Y2hlcnNQcm9wcz4gPSAoeyBtYXRjaGVycyB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFRhZ0xpc3RcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGFnc31cbiAgICAgICAgdGFncz17bWF0Y2hlcnMubWFwKChtYXRjaGVyKSA9PiBgJHttYXRjaGVyLm5hbWV9JHttYXRjaGVyVG9PcGVyYXRvcihtYXRjaGVyKX0ke21hdGNoZXIudmFsdWV9YCl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKCkgPT4gKHtcbiAgdGFnczogY3NzYFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ2FwcC9jb3JlL3N0b3JlJztcblxuaW1wb3J0IHsgQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVksIEFMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWSB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJEYXRhU291cmNlLCBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmZ1bmN0aW9uIHVzZUlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnM6IEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VbXSkge1xuICByZXR1cm4gdXNlQ2FsbGJhY2soXG4gICAgKGFsZXJ0TWFuYWdlck5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgYXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc05hbWVzID0gYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycy5tYXAoKGFtKSA9PiBhbS5uYW1lKTtcbiAgICAgIHJldHVybiBhdmFpbGFibGVBbGVydE1hbmFnZXJzTmFtZXMuaW5jbHVkZXMoYWxlcnRNYW5hZ2VyTmFtZSk7XG4gICAgfSxcbiAgICBbYXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc11cbiAgKTtcbn1cblxuLyogVGhpcyB3aWxsIHJldHVybiBhbSBuYW1lIGVpdGhlciBmcm9tIHF1ZXJ5IHBhcmFtcyBvciBmcm9tIGxvY2FsIHN0b3JhZ2Ugb3IgYSBkZWZhdWx0IChncmFmYW5hKS5cbiAqIER1ZSB0byBSQkFDIHBlcm1pc3Npb25zIEdyYWZhbmEgTWFuYWdlZCBBbGVydCBtYW5hZ2VyIG9yIGV4dGVybmFsIGFsZXJ0IG1hbmFnZXJzIG1heSBub3QgYmUgYXZhaWxhYmxlXG4gKiBJbiB0aGUgd29yc3QgY2FzZSBuZWlodGVyIEdNQSBub3IgZXh0ZXJuYWwgYWxlcnQgbWFuYWdlciBpcyBhdmFpbGFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUoXG4gIGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnM6IEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VbXVxuKTogW3N0cmluZyB8IHVuZGVmaW5lZCwgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZykgPT4gdm9pZF0ge1xuICBjb25zdCBbcXVlcnlQYXJhbXMsIHVwZGF0ZVF1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIGNvbnN0IGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlID0gdXNlSXNBbGVydE1hbmFnZXJBdmFpbGFibGUoYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycyk7XG5cbiAgY29uc3QgdXBkYXRlID0gdXNlQ2FsbGJhY2soXG4gICAgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCFpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSA9PT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSkge1xuICAgICAgICBzdG9yZS5kZWxldGUoQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgICAgICB1cGRhdGVRdWVyeVBhcmFtcyh7IFtBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldOiBudWxsIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcmUuc2V0KEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgICAgICAgdXBkYXRlUXVlcnlQYXJhbXMoeyBbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTogYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFt1cGRhdGVRdWVyeVBhcmFtcywgaXNBbGVydE1hbmFnZXJBdmFpbGFibGVdXG4gICk7XG5cbiAgY29uc3QgcXVlcnlTb3VyY2UgPSBxdWVyeVBhcmFtc1tBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldO1xuXG4gIGlmIChxdWVyeVNvdXJjZSAmJiB0eXBlb2YgcXVlcnlTb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKHF1ZXJ5U291cmNlKSkge1xuICAgICAgcmV0dXJuIFtxdWVyeVNvdXJjZSwgdXBkYXRlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm9uIGV4aXN0aW5nIGFsZXJ0bWFuYWdlclxuICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHVwZGF0ZV07XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RvcmVTb3VyY2UgPSBzdG9yZS5nZXQoQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVkpO1xuICBpZiAoc3RvcmVTb3VyY2UgJiYgdHlwZW9mIHN0b3JlU291cmNlID09PSAnc3RyaW5nJyAmJiBpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShzdG9yZVNvdXJjZSkpIHtcbiAgICB1cGRhdGUoc3RvcmVTb3VyY2UpO1xuICAgIHJldHVybiBbc3RvcmVTb3VyY2UsIHVwZGF0ZV07XG4gIH1cblxuICBpZiAoaXNBbGVydE1hbmFnZXJBdmFpbGFibGUoR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSkpIHtcbiAgICByZXR1cm4gW0dSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUsIHVwZGF0ZV07XG4gIH1cblxuICByZXR1cm4gW3VuZGVmaW5lZCwgdXBkYXRlXTtcbn1cbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzQnlQZXJtaXNzaW9uIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uKGFjY2Vzc1R5cGU6ICdpbnN0YW5jZScgfCAnbm90aWZpY2F0aW9uJykge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiBnZXRBbGVydE1hbmFnZXJEYXRhU291cmNlc0J5UGVybWlzc2lvbihhY2Nlc3NUeXBlKSwgW2FjY2Vzc1R5cGVdKTtcbn1cbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnRtYW5hZ2VyQ29uZmlnIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyB0aW1lSW50ZXJ2YWxUb1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5pbXBvcnQgeyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuLi91dGlscy9yZWR1eCc7XG5cbmltcG9ydCB7IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSBmcm9tICcuL3VzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUnO1xuaW1wb3J0IHsgdXNlQWxlcnRNYW5hZ2Vyc0J5UGVybWlzc2lvbiB9IGZyb20gJy4vdXNlQWxlcnRNYW5hZ2VyU291cmNlcyc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTXV0ZVRpbWluZ09wdGlvbnMoKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+IHtcbiAgY29uc3QgYWxlcnRNYW5hZ2VycyA9IHVzZUFsZXJ0TWFuYWdlcnNCeVBlcm1pc3Npb24oJ25vdGlmaWNhdGlvbicpO1xuICBjb25zdCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZV0gPSB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKGFsZXJ0TWFuYWdlcnMpO1xuICBjb25zdCBhbUNvbmZpZ3MgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFtQ29uZmlncyk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVzdWx0IH0gPSAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSAmJiBhbUNvbmZpZ3NbYWxlcnRNYW5hZ2VyU291cmNlTmFtZV0pIHx8IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcbiAgICBjb25zdCBjb25maWc6IEFsZXJ0bWFuYWdlckNvbmZpZyA9IHJlc3VsdD8uYWxlcnRtYW5hZ2VyX2NvbmZpZyA/PyB7fTtcblxuICAgIGNvbnN0IG11dGVUaW1pbmdzT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+ID1cbiAgICAgIGNvbmZpZz8ubXV0ZV90aW1lX2ludGVydmFscz8ubWFwKCh2YWx1ZSkgPT4gKHtcbiAgICAgICAgdmFsdWU6IHZhbHVlLm5hbWUsXG4gICAgICAgIGxhYmVsOiB2YWx1ZS5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogdmFsdWUudGltZV9pbnRlcnZhbHMubWFwKChpbnRlcnZhbCkgPT4gdGltZUludGVydmFsVG9TdHJpbmcoaW50ZXJ2YWwpKS5qb2luKCcsIEFORCAnKSxcbiAgICAgIH0pKSA/PyBbXTtcblxuICAgIHJldHVybiBtdXRlVGltaW5nc09wdGlvbnM7XG4gIH0sIFthbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBhbUNvbmZpZ3NdKTtcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VVUkxTZWFyY2hQYXJhbXMoKTogW1xuICBVUkxTZWFyY2hQYXJhbXMsXG4gIChzZWFyY2hWYWx1ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkPiwgcmVwbGFjZT86IGJvb2xlYW4pID0+IHZvaWRcbl0ge1xuICBjb25zdCB7IHNlYXJjaCB9ID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgcXVlcnlQYXJhbXMgPSB1c2VNZW1vKCgpID0+IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKSwgW3NlYXJjaF0pO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKChzZWFyY2hWYWx1ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkPiwgcmVwbGFjZT86IGJvb2xlYW4pID0+IHtcbiAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbChzZWFyY2hWYWx1ZXMsIHJlcGxhY2UpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIFtxdWVyeVBhcmFtcywgdXBkYXRlXTtcbn1cbiIsImltcG9ydCB7IGlzVW5kZWZpbmVkLCBvbWl0QnkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVmFsaWRhdGUgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IE1hdGNoZXJPcGVyYXRvciwgUm91dGUgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IEZvcm1BbVJvdXRlIH0gZnJvbSAnLi4vdHlwZXMvYW1yb3V0ZXMnO1xuaW1wb3J0IHsgTWF0Y2hlckZpZWxkVmFsdWUgfSBmcm9tICcuLi90eXBlcy9zaWxlbmNlLWZvcm0nO1xuXG5pbXBvcnQgeyBtYXRjaGVyVG9NYXRjaGVyRmllbGQsIHBhcnNlTWF0Y2hlciB9IGZyb20gJy4vYWxlcnRtYW5hZ2VyJztcbmltcG9ydCB7IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgcGFyc2VJbnRlcnZhbCwgdGltZU9wdGlvbnMgfSBmcm9tICcuL3RpbWUnO1xuXG5jb25zdCBkZWZhdWx0VmFsdWVBbmRUeXBlOiBbc3RyaW5nLCBzdHJpbmddID0gWycnLCB0aW1lT3B0aW9uc1swXS52YWx1ZV07XG5cbmNvbnN0IG1hdGNoZXJzVG9BcnJheUZpZWxkTWF0Y2hlcnMgPSAoXG4gIG1hdGNoZXJzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgdW5kZWZpbmVkLFxuICBpc1JlZ2V4OiBib29sZWFuXG4pOiBNYXRjaGVyRmllbGRWYWx1ZVtdID0+XG4gIE9iamVjdC5lbnRyaWVzKG1hdGNoZXJzID8/IHt9KS5yZWR1Y2U8TWF0Y2hlckZpZWxkVmFsdWVbXT4oXG4gICAgKGFjYywgW25hbWUsIHZhbHVlXSkgPT4gW1xuICAgICAgLi4uYWNjLFxuICAgICAge1xuICAgICAgICBuYW1lLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb3BlcmF0b3I6IGlzUmVnZXggPyBNYXRjaGVyT3BlcmF0b3IucmVnZXggOiBNYXRjaGVyT3BlcmF0b3IuZXF1YWwsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW10gYXMgTWF0Y2hlckZpZWxkVmFsdWVbXVxuICApO1xuXG5jb25zdCBpbnRlcnZhbFRvVmFsdWVBbmRUeXBlID0gKHN0clZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBbc3RyaW5nLCBzdHJpbmddID0+IHtcbiAgaWYgKCFzdHJWYWx1ZSkge1xuICAgIHJldHVybiBkZWZhdWx0VmFsdWVBbmRUeXBlO1xuICB9XG5cbiAgY29uc3QgW3ZhbHVlLCB2YWx1ZVR5cGVdID0gc3RyVmFsdWUgPyBwYXJzZUludGVydmFsKHN0clZhbHVlKSA6IFt1bmRlZmluZWQsIHVuZGVmaW5lZF07XG5cbiAgY29uc3QgdGltZU9wdGlvbiA9IHRpbWVPcHRpb25zLmZpbmQoKG9wdCkgPT4gb3B0LnZhbHVlID09PSB2YWx1ZVR5cGUpO1xuXG4gIGlmICghdmFsdWUgfHwgIXRpbWVPcHRpb24pIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlQW5kVHlwZTtcbiAgfVxuXG4gIHJldHVybiBbU3RyaW5nKHZhbHVlKSwgdGltZU9wdGlvbi52YWx1ZV07XG59O1xuXG5jb25zdCBzZWxlY3RhYmxlVmFsdWVUb1N0cmluZyA9IChzZWxlY3RhYmxlVmFsdWU6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KTogc3RyaW5nID0+IHNlbGVjdGFibGVWYWx1ZS52YWx1ZSE7XG5cbmNvbnN0IHNlbGVjdGFibGVWYWx1ZXNUb1N0cmluZ3MgPSAoYXJyOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gfCB1bmRlZmluZWQpOiBzdHJpbmdbXSA9PlxuICAoYXJyID8/IFtdKS5tYXAoc2VsZWN0YWJsZVZhbHVlVG9TdHJpbmcpO1xuXG5leHBvcnQgY29uc3QgZW1wdHlBcnJheUZpZWxkTWF0Y2hlcjogTWF0Y2hlckZpZWxkVmFsdWUgPSB7XG4gIG5hbWU6ICcnLFxuICB2YWx1ZTogJycsXG4gIG9wZXJhdG9yOiBNYXRjaGVyT3BlcmF0b3IuZXF1YWwsXG59O1xuXG5leHBvcnQgY29uc3QgZW1wdHlSb3V0ZTogRm9ybUFtUm91dGUgPSB7XG4gIGlkOiAnJyxcbiAgZ3JvdXBCeTogW10sXG4gIG9iamVjdF9tYXRjaGVyczogW10sXG4gIHJvdXRlczogW10sXG4gIGNvbnRpbnVlOiBmYWxzZSxcbiAgcmVjZWl2ZXI6ICcnLFxuICBncm91cFdhaXRWYWx1ZTogJycsXG4gIGdyb3VwV2FpdFZhbHVlVHlwZTogdGltZU9wdGlvbnNbMF0udmFsdWUsXG4gIGdyb3VwSW50ZXJ2YWxWYWx1ZTogJycsXG4gIGdyb3VwSW50ZXJ2YWxWYWx1ZVR5cGU6IHRpbWVPcHRpb25zWzBdLnZhbHVlLFxuICByZXBlYXRJbnRlcnZhbFZhbHVlOiAnJyxcbiAgcmVwZWF0SW50ZXJ2YWxWYWx1ZVR5cGU6IHRpbWVPcHRpb25zWzBdLnZhbHVlLFxuICBtdXRlVGltZUludGVydmFsczogW10sXG59O1xuXG4vL3JldHVybnMgcm91dGUsIGFuZCBhIHJlY29yZCBtYXBwaW5nIGlkIHRvIGV4aXN0aW5nIHJvdXRlIHJvdXRlXG5leHBvcnQgY29uc3QgYW1Sb3V0ZVRvRm9ybUFtUm91dGUgPSAocm91dGU6IFJvdXRlIHwgdW5kZWZpbmVkKTogW0Zvcm1BbVJvdXRlLCBSZWNvcmQ8c3RyaW5nLCBSb3V0ZT5dID0+IHtcbiAgaWYgKCFyb3V0ZSB8fCBPYmplY3Qua2V5cyhyb3V0ZSkubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtlbXB0eVJvdXRlLCB7fV07XG4gIH1cblxuICBjb25zdCBbZ3JvdXBXYWl0VmFsdWUsIGdyb3VwV2FpdFZhbHVlVHlwZV0gPSBpbnRlcnZhbFRvVmFsdWVBbmRUeXBlKHJvdXRlLmdyb3VwX3dhaXQpO1xuICBjb25zdCBbZ3JvdXBJbnRlcnZhbFZhbHVlLCBncm91cEludGVydmFsVmFsdWVUeXBlXSA9IGludGVydmFsVG9WYWx1ZUFuZFR5cGUocm91dGUuZ3JvdXBfaW50ZXJ2YWwpO1xuICBjb25zdCBbcmVwZWF0SW50ZXJ2YWxWYWx1ZSwgcmVwZWF0SW50ZXJ2YWxWYWx1ZVR5cGVdID0gaW50ZXJ2YWxUb1ZhbHVlQW5kVHlwZShyb3V0ZS5yZXBlYXRfaW50ZXJ2YWwpO1xuXG4gIGNvbnN0IGlkID0gU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICBjb25zdCBpZDJyb3V0ZSA9IHtcbiAgICBbaWRdOiByb3V0ZSxcbiAgfTtcbiAgY29uc3QgZm9ybVJvdXRlczogRm9ybUFtUm91dGVbXSA9IFtdO1xuICByb3V0ZS5yb3V0ZXM/LmZvckVhY2goKHN1YlJvdXRlKSA9PiB7XG4gICAgY29uc3QgW3N1YkZvcm1Sb3V0ZSwgc3ViSWQyUm91dGVdID0gYW1Sb3V0ZVRvRm9ybUFtUm91dGUoc3ViUm91dGUpO1xuICAgIGZvcm1Sb3V0ZXMucHVzaChzdWJGb3JtUm91dGUpO1xuICAgIE9iamVjdC5hc3NpZ24oaWQycm91dGUsIHN1YklkMlJvdXRlKTtcbiAgfSk7XG5cbiAgLy8gRnJvbnRlbmQgbWlncmF0aW9uIHRvIHVzZSBvYmplY3RfbWF0Y2hlcnMgaW5zdGVhZCBvZiBtYXRjaGVyc1xuICBjb25zdCBtYXRjaGVycyA9IHJvdXRlLm1hdGNoZXJzXG4gICAgPyByb3V0ZS5tYXRjaGVycz8ubWFwKChtYXRjaGVyKSA9PiBtYXRjaGVyVG9NYXRjaGVyRmllbGQocGFyc2VNYXRjaGVyKG1hdGNoZXIpKSkgPz8gW11cbiAgICA6IHJvdXRlLm9iamVjdF9tYXRjaGVycz8ubWFwKFxuICAgICAgICAobWF0Y2hlcikgPT4gKHsgbmFtZTogbWF0Y2hlclswXSwgb3BlcmF0b3I6IG1hdGNoZXJbMV0sIHZhbHVlOiBtYXRjaGVyWzJdIH0gYXMgTWF0Y2hlckZpZWxkVmFsdWUpXG4gICAgICApID8/IFtdO1xuXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaWQsXG4gICAgICBvYmplY3RfbWF0Y2hlcnM6IFtcbiAgICAgICAgLi4ubWF0Y2hlcnMsXG4gICAgICAgIC4uLm1hdGNoZXJzVG9BcnJheUZpZWxkTWF0Y2hlcnMocm91dGUubWF0Y2gsIGZhbHNlKSxcbiAgICAgICAgLi4ubWF0Y2hlcnNUb0FycmF5RmllbGRNYXRjaGVycyhyb3V0ZS5tYXRjaF9yZSwgdHJ1ZSksXG4gICAgICBdLFxuICAgICAgY29udGludWU6IHJvdXRlLmNvbnRpbnVlID8/IGZhbHNlLFxuICAgICAgcmVjZWl2ZXI6IHJvdXRlLnJlY2VpdmVyID8/ICcnLFxuICAgICAgZ3JvdXBCeTogcm91dGUuZ3JvdXBfYnkgPz8gW10sXG4gICAgICBncm91cFdhaXRWYWx1ZSxcbiAgICAgIGdyb3VwV2FpdFZhbHVlVHlwZSxcbiAgICAgIGdyb3VwSW50ZXJ2YWxWYWx1ZSxcbiAgICAgIGdyb3VwSW50ZXJ2YWxWYWx1ZVR5cGUsXG4gICAgICByZXBlYXRJbnRlcnZhbFZhbHVlLFxuICAgICAgcmVwZWF0SW50ZXJ2YWxWYWx1ZVR5cGUsXG4gICAgICByb3V0ZXM6IGZvcm1Sb3V0ZXMsXG4gICAgICBtdXRlVGltZUludGVydmFsczogcm91dGUubXV0ZV90aW1lX2ludGVydmFscyA/PyBbXSxcbiAgICB9LFxuICAgIGlkMnJvdXRlLFxuICBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1BbVJvdXRlVG9BbVJvdXRlID0gKFxuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIGZvcm1BbVJvdXRlOiBGb3JtQW1Sb3V0ZSxcbiAgaWQyRXhpc3RpbmdSb3V0ZTogUmVjb3JkPHN0cmluZywgUm91dGU+XG4pOiBSb3V0ZSA9PiB7XG4gIGNvbnN0IGV4aXN0aW5nOiBSb3V0ZSB8IHVuZGVmaW5lZCA9IGlkMkV4aXN0aW5nUm91dGVbZm9ybUFtUm91dGUuaWRdO1xuICBjb25zdCBhbVJvdXRlOiBSb3V0ZSA9IHtcbiAgICAuLi4oZXhpc3RpbmcgPz8ge30pLFxuICAgIGNvbnRpbnVlOiBmb3JtQW1Sb3V0ZS5jb250aW51ZSxcbiAgICBncm91cF9ieTogZm9ybUFtUm91dGUuZ3JvdXBCeSxcbiAgICBvYmplY3RfbWF0Y2hlcnM6IGZvcm1BbVJvdXRlLm9iamVjdF9tYXRjaGVycy5sZW5ndGhcbiAgICAgID8gZm9ybUFtUm91dGUub2JqZWN0X21hdGNoZXJzLm1hcCgobWF0Y2hlcikgPT4gW21hdGNoZXIubmFtZSwgbWF0Y2hlci5vcGVyYXRvciwgbWF0Y2hlci52YWx1ZV0pXG4gICAgICA6IHVuZGVmaW5lZCxcbiAgICBtYXRjaDogdW5kZWZpbmVkLFxuICAgIG1hdGNoX3JlOiB1bmRlZmluZWQsXG4gICAgZ3JvdXBfd2FpdDogZm9ybUFtUm91dGUuZ3JvdXBXYWl0VmFsdWVcbiAgICAgID8gYCR7Zm9ybUFtUm91dGUuZ3JvdXBXYWl0VmFsdWV9JHtmb3JtQW1Sb3V0ZS5ncm91cFdhaXRWYWx1ZVR5cGV9YFxuICAgICAgOiB1bmRlZmluZWQsXG4gICAgZ3JvdXBfaW50ZXJ2YWw6IGZvcm1BbVJvdXRlLmdyb3VwSW50ZXJ2YWxWYWx1ZVxuICAgICAgPyBgJHtmb3JtQW1Sb3V0ZS5ncm91cEludGVydmFsVmFsdWV9JHtmb3JtQW1Sb3V0ZS5ncm91cEludGVydmFsVmFsdWVUeXBlfWBcbiAgICAgIDogdW5kZWZpbmVkLFxuICAgIHJlcGVhdF9pbnRlcnZhbDogZm9ybUFtUm91dGUucmVwZWF0SW50ZXJ2YWxWYWx1ZVxuICAgICAgPyBgJHtmb3JtQW1Sb3V0ZS5yZXBlYXRJbnRlcnZhbFZhbHVlfSR7Zm9ybUFtUm91dGUucmVwZWF0SW50ZXJ2YWxWYWx1ZVR5cGV9YFxuICAgICAgOiB1bmRlZmluZWQsXG4gICAgcm91dGVzOiBmb3JtQW1Sb3V0ZS5yb3V0ZXMubWFwKChzdWJSb3V0ZSkgPT5cbiAgICAgIGZvcm1BbVJvdXRlVG9BbVJvdXRlKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIHN1YlJvdXRlLCBpZDJFeGlzdGluZ1JvdXRlKVxuICAgICksXG4gICAgbXV0ZV90aW1lX2ludGVydmFsczogZm9ybUFtUm91dGUubXV0ZVRpbWVJbnRlcnZhbHMsXG4gIH07XG5cbiAgaWYgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgIT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUpIHtcbiAgICBhbVJvdXRlLm1hdGNoZXJzID0gZm9ybUFtUm91dGUub2JqZWN0X21hdGNoZXJzLm1hcCgoeyBuYW1lLCBvcGVyYXRvciwgdmFsdWUgfSkgPT4gYCR7bmFtZX0ke29wZXJhdG9yfSR7dmFsdWV9YCk7XG4gICAgYW1Sb3V0ZS5vYmplY3RfbWF0Y2hlcnMgPSB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgYW1Sb3V0ZS5tYXRjaGVycyA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChmb3JtQW1Sb3V0ZS5yZWNlaXZlcikge1xuICAgIGFtUm91dGUucmVjZWl2ZXIgPSBmb3JtQW1Sb3V0ZS5yZWNlaXZlcjtcbiAgfVxuXG4gIHJldHVybiBvbWl0QnkoYW1Sb3V0ZSwgaXNVbmRlZmluZWQpO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ1RvU2VsZWN0YWJsZVZhbHVlID0gKHN0cjogc3RyaW5nKTogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4gPT4gKHtcbiAgbGFiZWw6IHN0cixcbiAgdmFsdWU6IHN0cixcbn0pO1xuXG5leHBvcnQgY29uc3Qgc3RyaW5nc1RvU2VsZWN0YWJsZVZhbHVlcyA9IChhcnI6IHN0cmluZ1tdIHwgdW5kZWZpbmVkKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+ID0+XG4gIChhcnIgPz8gW10pLm1hcChzdHJpbmdUb1NlbGVjdGFibGVWYWx1ZSk7XG5cbmV4cG9ydCBjb25zdCBtYXBTZWxlY3RWYWx1ZVRvU3RyaW5nID0gKHNlbGVjdGFibGVWYWx1ZTogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4pOiBzdHJpbmcgPT4ge1xuICBpZiAoIXNlbGVjdGFibGVWYWx1ZSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RhYmxlVmFsdWVUb1N0cmluZyhzZWxlY3RhYmxlVmFsdWUpID8/ICcnO1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcE11bHRpU2VsZWN0VmFsdWVUb1N0cmluZ3MgPSAoXG4gIHNlbGVjdGFibGVWYWx1ZXM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PiB8IHVuZGVmaW5lZFxuKTogc3RyaW5nW10gPT4ge1xuICBpZiAoIXNlbGVjdGFibGVWYWx1ZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4gc2VsZWN0YWJsZVZhbHVlc1RvU3RyaW5ncyhzZWxlY3RhYmxlVmFsdWVzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBvcHRpb25hbFBvc2l0aXZlSW50ZWdlcjogVmFsaWRhdGU8c3RyaW5nPiA9ICh2YWx1ZSkgPT4ge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiAhL15cXGQrJC8udGVzdCh2YWx1ZSkgPyAnTXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuJyA6IHVuZGVmaW5lZDtcbn07XG4iLCJpbXBvcnQgeyBEeW5hbWljVGFibGVJdGVtUHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL0R5bmFtaWNUYWJsZSc7XG5cbmV4cG9ydCBjb25zdCBwcmVwYXJlSXRlbXMgPSA8VCA9IHVua25vd24+KFxuICBpdGVtczogVFtdLFxuICBpZENyZWF0b3I/OiAoaXRlbTogVCkgPT4gbnVtYmVyIHwgc3RyaW5nXG4pOiBBcnJheTxEeW5hbWljVGFibGVJdGVtUHJvcHM8VD4+ID0+XG4gIGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XG4gICAgaWQ6IGlkQ3JlYXRvcj8uKGl0ZW0pID8/IGluZGV4LFxuICAgIGRhdGE6IGl0ZW0sXG4gIH0pKTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VEaXNwYXRjaCIsImNsZWFuVXBBY3Rpb24iLCJ1c2VDbGVhbnVwIiwic3RhdGVTZWxlY3RvciIsImRpc3BhdGNoIiwic2VsZWN0b3JSZWYiLCJjdXJyZW50IiwiY3NzIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIkFsZXJ0IiwiTG9hZGluZ1BsYWNlaG9sZGVyIiwidXNlU3R5bGVzMiIsIndpdGhFcnJvckJvdW5kYXJ5IiwiQWxlcnRNYW5hZ2VyUGlja2VyIiwiQWxlcnRpbmdQYWdlV3JhcHBlciIsIk5vQWxlcnRNYW5hZ2VyV2FybmluZyIsIkFtUm9vdFJvdXRlIiwiQW1TcGVjaWZpY1JvdXRpbmciLCJNdXRlVGltaW5nc1RhYmxlIiwidXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSIsInVzZUFsZXJ0TWFuYWdlcnNCeVBlcm1pc3Npb24iLCJ1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciIsImZldGNoQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uIiwidXBkYXRlQWxlcnRNYW5hZ2VyQ29uZmlnQWN0aW9uIiwiYW1Sb3V0ZVRvRm9ybUFtUm91dGUiLCJmb3JtQW1Sb3V0ZVRvQW1Sb3V0ZSIsInN0cmluZ3NUb1NlbGVjdGFibGVWYWx1ZXMiLCJpc1ZhbmlsbGFQcm9tZXRoZXVzQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZSIsImluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSIsIkFtUm91dGVzIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiaXNSb290Um91dGVFZGl0TW9kZSIsInNldElzUm9vdFJvdXRlRWRpdE1vZGUiLCJhbGVydE1hbmFnZXJzIiwiYWxlcnRNYW5hZ2VyU291cmNlTmFtZSIsInNldEFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJyZWFkT25seSIsImFtQ29uZmlncyIsInN0YXRlIiwiZmV0Y2hDb25maWciLCJyZXN1bHQiLCJsb2FkaW5nIiwicmVzdWx0TG9hZGluZyIsImVycm9yIiwicmVzdWx0RXJyb3IiLCJjb25maWciLCJhbGVydG1hbmFnZXJfY29uZmlnIiwicm9vdFJvdXRlIiwiaWQyRXhpc3RpbmdSb3V0ZSIsInJvdXRlIiwicmVjZWl2ZXJzIiwibWFwIiwicmVjZWl2ZXIiLCJuYW1lIiwiZW50ZXJSb290Um91dGVFZGl0TW9kZSIsImV4aXRSb290Um91dGVFZGl0TW9kZSIsInVuaWZpZWRBbGVydGluZyIsInNhdmVBTUNvbmZpZyIsImhhbmRsZVNhdmUiLCJkYXRhIiwibmV3RGF0YSIsIm5ld0NvbmZpZyIsIm9sZENvbmZpZyIsInN1Y2Nlc3NNZXNzYWdlIiwicmVmZXRjaCIsIm1lc3NhZ2UiLCJicmVhayIsInN0eWxlIiwidGhlbWUiLCJzcGFjaW5nIiwidXNlU2VsZWN0b3IiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJjaGlsZHJlbiIsInBhZ2VJZCIsImlzTG9hZGluZyIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJjb250ZXh0U3J2IiwiQXV0aG9yaXplIiwiYWN0aW9ucyIsImZhbGxiYWNrIiwic29tZSIsImFjdGlvbiIsImhhc0FjY2VzcyIsInVzZVN0eWxlcyIsIkVtcHR5QXJlYSIsImNvbnRhaW5lciIsImNvbG9ycyIsImJnMiIsInRleHRTZW1pV2VhayIsInhsIiwiQnV0dG9uIiwiTGlua0J1dHRvbiIsIkVtcHR5QXJlYVdpdGhDVEEiLCJidXR0b25JY29uIiwiYnV0dG9uTGFiZWwiLCJidXR0b25TaXplIiwiYnV0dG9uVmFyaWFudCIsIm9uQnV0dG9uQ2xpY2siLCJ0ZXh0IiwiaHJlZiIsInNob3dCdXR0b24iLCJjb21tb25Qcm9wcyIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImljb24iLCJzaXplIiwidmFyaWFudCIsIm1kIiwic20iLCJOb0FsZXJ0TWFuYWdlcnNBdmFpbGFibGUiLCJPdGhlckFsZXJ0TWFuYWdlcnNBdmFpbGFibGUiLCJhdmFpbGFibGVBbGVydE1hbmFnZXJzIiwiXyIsImhhc090aGVyQU1zIiwibGVuZ3RoIiwiU3RhY2siLCJMYWJlbCIsIlRvb2x0aXAiLCJJbnB1dCIsIkljb24iLCJNYXRjaGVyRmlsdGVyIiwib25GaWx0ZXJDaGFuZ2UiLCJkZWZhdWx0UXVlcnlTdHJpbmciLCJxdWVyeVN0cmluZyIsImhhbmRsZVNlYXJjaENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaEljb24iLCJpbnB1dFdpZHRoIiwiZ2V0Tm90aWZpY2F0aW9uc1Blcm1pc3Npb25zIiwiQW1Sb290Um91dGVGb3JtIiwiQW1Sb290Um91dGVSZWFkIiwiaXNFZGl0TW9kZSIsIm9uU2F2ZSIsIm9uRW50ZXJFZGl0TW9kZSIsIm9uRXhpdEVkaXRNb2RlIiwicm91dGVzIiwicGVybWlzc2lvbnMiLCJpc1JlYWRPbmx5IiwidGl0bGVDb250YWluZXIiLCJ0aXRsZSIsInVwZGF0ZSIsImJhY2tncm91bmQiLCJzZWNvbmRhcnkiLCJwcmltYXJ5IiwiY3giLCJDb2xsYXBzZSIsIkZpZWxkIiwiRm9ybSIsIklucHV0Q29udHJvbCIsIkxpbmsiLCJNdWx0aVNlbGVjdCIsIlNlbGVjdCIsIm1hcE11bHRpU2VsZWN0VmFsdWVUb1N0cmluZ3MiLCJtYXBTZWxlY3RWYWx1ZVRvU3RyaW5nIiwib3B0aW9uYWxQb3NpdGl2ZUludGVnZXIiLCJzdHJpbmdUb1NlbGVjdGFibGVWYWx1ZSIsIm1ha2VBTUxpbmsiLCJ0aW1lT3B0aW9ucyIsImdldEZvcm1TdHlsZXMiLCJvbkNhbmNlbCIsImlzVGltaW5nT3B0aW9uc0V4cGFuZGVkIiwic2V0SXNUaW1pbmdPcHRpb25zRXhwYW5kZWQiLCJncm91cEJ5T3B0aW9ucyIsInNldEdyb3VwQnlPcHRpb25zIiwiZ3JvdXBCeSIsImNvbnRyb2wiLCJlcnJvcnMiLCJzZXRWYWx1ZSIsImZpZWxkIiwib25DaGFuZ2UiLCJpbnB1dCIsInJlcXVpcmVkIiwibGlua1RleHQiLCJvcHQiLCJvcHRzIiwiY29sbGFwc2UiLCJncm91cFdhaXRWYWx1ZSIsInRpbWluZ0NvbnRhaW5lciIsImZpZWxkU3RhdGUiLCJpbnZhbGlkIiwic21hbGxJbnB1dCIsInZhbGlkYXRlIiwiZ3JvdXBJbnRlcnZhbFZhbHVlIiwicmVwZWF0SW50ZXJ2YWxWYWx1ZSIsImdldEdyaWRTdHlsZXMiLCJqb2luIiwiZ3JvdXBXYWl0IiwiZ3JvdXBXYWl0VmFsdWVUeXBlIiwiZ3JvdXBJbnRlcnZhbCIsImdyb3VwSW50ZXJ2YWxWYWx1ZVR5cGUiLCJyZXBlYXRJbnRlcnZhbCIsInJlcGVhdEludGVydmFsVmFsdWVUeXBlIiwidGl0bGVDZWxsIiwidmFsdWVDZWxsIiwiRmllbGRBcnJheSIsIkhvcml6b250YWxHcm91cCIsIkljb25CdXR0b24iLCJTd2l0Y2giLCJCYWRnZSIsIlZlcnRpY2FsR3JvdXAiLCJ1c2VNdXRlVGltaW5nT3B0aW9ucyIsIm1hdGNoZXJGaWVsZE9wdGlvbnMiLCJlbXB0eUFycmF5RmllbGRNYXRjaGVyIiwiQW1Sb3V0ZXNFeHBhbmRlZEZvcm0iLCJmb3JtU3R5bGVzIiwib3ZlcnJpZGVHcm91cGluZyIsInNldE92ZXJyaWRlR3JvdXBpbmciLCJvdmVycmlkZVRpbWluZ3MiLCJzZXRPdmVycmlkZVRpbWluZ3MiLCJtdXRlVGltaW5nT3B0aW9ucyIsInJlZ2lzdGVyIiwiZmllbGRzIiwiYXBwZW5kIiwicmVtb3ZlIiwibm9NYXRjaGVyc1dhcm5pbmciLCJtYXRjaGVyc0NvbnRhaW5lciIsImluZGV4IiwibG9jYWxQYXRoIiwib2JqZWN0X21hdGNoZXJzIiwibWF0Y2hlcnNPcGVyYXRvciIsIm9wZXJhdG9yIiwicmVtb3ZlQnV0dG9uIiwiaWQiLCJhZGRNYXRjaGVyQnRuIiwibXV0ZVRpbWVJbnRlcnZhbHMiLCJidXR0b25Hcm91cCIsImNvbW1vblNwYWNpbmciLCJuZXN0ZWRQb2xpY2llcyIsImVtcHR5Um91dGUiLCJBbVJvdXRlc1RhYmxlIiwiQW1Sb3V0ZXNFeHBhbmRlZFJlYWQiLCJncmlkU3R5bGVzIiwic3Vicm91dGVzIiwic2V0U3Vicm91dGVzIiwiaXNBZGRNb2RlIiwic2V0SXNBZGRNb2RlIiwibmV3U3Vicm91dGVzIiwicG9wIiwibmV3Um91dGVzIiwiY3JlYXRlIiwiYWRkTmVzdGVkUm91dGluZ0J0biIsImludGVyc2VjdGlvbldpdGgiLCJpc0VxdWFsIiwiQ29uZmlybU1vZGFsIiwibWF0Y2hlckZpZWxkVG9NYXRjaGVyIiwicGFyc2VNYXRjaGVycyIsInByZXBhcmVJdGVtcyIsIkR5bmFtaWNUYWJsZSIsIk1hdGNoZXJzIiwiZ2V0RmlsdGVyZWRSb3V0ZXMiLCJsYWJlbE1hdGNoZXJRdWVyeSIsImNvbnRhY3RQb2ludFF1ZXJ5IiwibWF0Y2hlcnMiLCJmaWx0ZXJlZFJvdXRlcyIsImZpbHRlciIsInJvdXRlTWF0Y2hlcnMiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidXBkYXRlZFJvdXRlIiwiZWRpdEluZGV4IiwiZmluZEluZGV4IiwiZGVsZXRlUm91dGUiLCJyb3V0ZUlkIiwib25DYW5jZWxBZGQiLCJmaWx0ZXJzIiwiZWRpdE1vZGUiLCJzZXRFZGl0TW9kZSIsImRlbGV0aW5nUm91dGVJZCIsInNldERlbGV0aW5nUm91dGVJZCIsInVuZGVmaW5lZCIsImV4cGFuZGVkSWQiLCJzZXRFeHBhbmRlZElkIiwiY2FuRWRpdFJvdXRlcyIsImhhc1Blcm1pc3Npb24iLCJjYW5EZWxldGVSb3V0ZXMiLCJkZWxldGUiLCJzaG93QWN0aW9ucyIsImV4cGFuZEl0ZW0iLCJpdGVtIiwiY29sbGFwc2VJdGVtIiwiY29scyIsImxhYmVsIiwicmVuZGVyQ2VsbCIsInJlbmRlckV4cGFuZGVkQ29udGVudCIsImV4cGFuZFdpdGhDdXN0b21Db250ZW50IiwiY29udGFjdFBvaW50IiwiZHluYW1pY1RhYmxlUm91dGVzIiwidXNlRGVib3VuY2UiLCJ1c2VVUkxTZWFyY2hQYXJhbXMiLCJnZXROb3RpZmljYXRpb25Qb2xpY2llc0ZpbHRlcnMiLCJvblJvb3RSb3V0ZUVkaXQiLCJhY3R1YWxSb3V0ZXMiLCJzZXRBY3R1YWxSb3V0ZXMiLCJjYW5DcmVhdGVOb3RpZmljYXRpb25zIiwic2VhcmNoUGFyYW1zIiwic2V0U2VhcmNoUGFyYW1zIiwic2V0RmlsdGVycyIsImNsZWFyRmlsdGVycyIsImFkZE5ld1JvdXRlIiwib25UYWJsZVJvdXRlQ2hhbmdlIiwic2VhcmNoQ29udGFpbmVyIiwiY3VycmVudEZpbHRlcnMiLCJmaWx0ZXJJbnB1dCIsImN1cnJlbnRUYXJnZXQiLCJjbGVhckZpbHRlckJ0biIsImFkZE1hdGNoZXJCdG5Sb3ciLCJib3JkZXIiLCJzdHJvbmciLCJkZWxldGVNdXRlVGltaW5nQWN0aW9uIiwiZ2V0VGltZVN0cmluZyIsImdldFdlZWtkYXlTdHJpbmciLCJnZXREYXlzT2ZNb250aFN0cmluZyIsImdldE1vbnRoc1N0cmluZyIsImdldFllYXJzU3RyaW5nIiwibXV0ZVRpbWluZ05hbWVzIiwiaGlkZUFjdGlvbnMiLCJtdXRlVGltaW5nTmFtZSIsInNldE11dGVUaW1pbmdOYW1lIiwiaXRlbXMiLCJtdXRlVGltaW5ncyIsIm11dGVfdGltZV9pbnRlcnZhbHMiLCJtdXRlIiwiY29sdW1ucyIsInVzZUNvbHVtbnMiLCJhZGRNdXRlQnV0dG9uIiwidXNlckhhc0VkaXRQZXJtaXNzaW9ucyIsInVzZXJIYXNEZWxldGVQZXJtaXNzaW9ucyIsInJlbmRlck5hbWUiLCJyZW5kZXJUaW1lSW50ZXJ2YWxzIiwidGltZV9pbnRlcnZhbHMiLCJwdXNoIiwicmVuZGVyQWN0aW9ucyIsIm11dGVOYW1lIiwidGltZUludGVydmFscyIsImludGVydmFsIiwidGltZXMiLCJ3ZWVrZGF5cyIsImRheXNfb2ZfbW9udGgiLCJtb250aHMiLCJ5ZWFycyIsInRpbWVTdHJpbmciLCJ3ZWVrZGF5U3RyaW5nIiwiZGF5c1N0cmluZyIsIm1vbnRoc1N0cmluZyIsInllYXJzU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cG9ncmFwaHkiLCJmb250U2l6ZSIsImJyZWFrcG9pbnRzIiwiZG93biIsIlRhZ0xpc3QiLCJtYXRjaGVyVG9PcGVyYXRvciIsInRhZ3MiLCJtYXRjaGVyIiwidXNlUXVlcnlQYXJhbXMiLCJzdG9yZSIsIkFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZIiwiQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZIiwiR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSIsInVzZUlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlIiwiYWxlcnRNYW5hZ2VyTmFtZSIsImF2YWlsYWJsZUFsZXJ0TWFuYWdlcnNOYW1lcyIsImFtIiwicXVlcnlQYXJhbXMiLCJ1cGRhdGVRdWVyeVBhcmFtcyIsImlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlIiwic2V0IiwicXVlcnlTb3VyY2UiLCJzdG9yZVNvdXJjZSIsImdldCIsImdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzQnlQZXJtaXNzaW9uIiwiYWNjZXNzVHlwZSIsInRpbWVJbnRlcnZhbFRvU3RyaW5nIiwibXV0ZVRpbWluZ3NPcHRpb25zIiwiZGVzY3JpcHRpb24iLCJ1c2VMb2NhdGlvbiIsImxvY2F0aW9uU2VydmljZSIsInNlYXJjaCIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaFZhbHVlcyIsInJlcGxhY2UiLCJwYXJ0aWFsIiwiaXNVbmRlZmluZWQiLCJvbWl0QnkiLCJNYXRjaGVyT3BlcmF0b3IiLCJtYXRjaGVyVG9NYXRjaGVyRmllbGQiLCJwYXJzZU1hdGNoZXIiLCJwYXJzZUludGVydmFsIiwiZGVmYXVsdFZhbHVlQW5kVHlwZSIsIm1hdGNoZXJzVG9BcnJheUZpZWxkTWF0Y2hlcnMiLCJpc1JlZ2V4IiwiT2JqZWN0IiwiZW50cmllcyIsInJlZHVjZSIsImFjYyIsInJlZ2V4IiwiZXF1YWwiLCJpbnRlcnZhbFRvVmFsdWVBbmRUeXBlIiwic3RyVmFsdWUiLCJ2YWx1ZVR5cGUiLCJ0aW1lT3B0aW9uIiwiZmluZCIsIlN0cmluZyIsInNlbGVjdGFibGVWYWx1ZVRvU3RyaW5nIiwic2VsZWN0YWJsZVZhbHVlIiwic2VsZWN0YWJsZVZhbHVlc1RvU3RyaW5ncyIsImFyciIsImNvbnRpbnVlIiwia2V5cyIsImdyb3VwX3dhaXQiLCJncm91cF9pbnRlcnZhbCIsInJlcGVhdF9pbnRlcnZhbCIsIk1hdGgiLCJyYW5kb20iLCJpZDJyb3V0ZSIsImZvcm1Sb3V0ZXMiLCJmb3JFYWNoIiwic3ViUm91dGUiLCJzdWJGb3JtUm91dGUiLCJzdWJJZDJSb3V0ZSIsImFzc2lnbiIsIm1hdGNoIiwibWF0Y2hfcmUiLCJncm91cF9ieSIsImZvcm1BbVJvdXRlIiwiZXhpc3RpbmciLCJhbVJvdXRlIiwic3RyIiwic2VsZWN0YWJsZVZhbHVlcyIsInRlc3QiLCJpZENyZWF0b3IiXSwic291cmNlUm9vdCI6IiJ9