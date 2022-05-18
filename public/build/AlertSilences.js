"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertSilences"],{

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

/***/ "./public/app/features/alerting/unified/Silences.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_NoAlertManagerWarning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx");
/* harmony import */ var _components_silences_SilencesEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencesEditor.tsx");
/* harmony import */ var _components_silences_SilencesTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencesTable.tsx");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Redirect, _LoadingPlaceholder;



















const Silences = () => {
  var _alertsRequest$error, _alertsRequest$result;

  const alertManagers = (0,_hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_9__.useAlertManagersByPermission)('instance');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_8__.useAlertManagerSourceName)(alertManagers);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const silences = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_10__.useUnifiedAlertingSelector)(state => state.silences);
  const alertsRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_10__.useUnifiedAlertingSelector)(state => state.amAlerts);
  const alertsRequest = alertManagerSourceName ? alertsRequests[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_13__.initialAsyncRequestState : undefined;
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useLocation)();
  const isRoot = location.pathname.endsWith('/alerting/silences');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function fetchAll() {
      if (alertManagerSourceName) {
        dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.fetchSilencesAction)(alertManagerSourceName));
        dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.fetchAmAlertsAction)(alertManagerSourceName));
      }
    }

    fetchAll();
    const interval = setInterval(() => fetchAll, _utils_constants__WEBPACK_IMPORTED_MODULE_12__.SILENCES_POLL_INTERVAL_MS);
    return () => {
      clearInterval(interval);
    };
  }, [alertManagerSourceName, dispatch]);
  const {
    result,
    loading,
    error
  } = alertManagerSourceName && silences[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_13__.initialAsyncRequestState;
  const getSilenceById = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(id => result && result.find(silence => silence.id === id), [result]);

  if (!alertManagerSourceName) {
    return isRoot ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_4__.AlertingPageWrapper, {
      pageId: "silences",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_NoAlertManagerWarning__WEBPACK_IMPORTED_MODULE_5__.NoAlertManagerWarning, {
        availableAlertManagers: alertManagers
      })
    }) : _Redirect || (_Redirect = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Redirect, {
      to: "/alerting/silences"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_4__.AlertingPageWrapper, {
    pageId: "silences",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__.AlertManagerPicker, {
      disabled: !isRoot,
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName,
      dataSources: alertManagers
    }), error && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "error",
      title: "Error loading silences",
      children: error.message || 'Unknown error.'
    }), (alertsRequest === null || alertsRequest === void 0 ? void 0 : alertsRequest.error) && !(alertsRequest !== null && alertsRequest !== void 0 && alertsRequest.loading) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "error",
      title: "Error loading Alertmanager alerts",
      children: ((_alertsRequest$error = alertsRequest.error) === null || _alertsRequest$error === void 0 ? void 0 : _alertsRequest$error.message) || 'Unknown error.'
    }), loading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
      text: "loading silences..."
    }))), result && !error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
        exact: true,
        path: "/alerting/silences",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_silences_SilencesTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
          silences: result,
          alertManagerAlerts: (_alertsRequest$result = alertsRequest === null || alertsRequest === void 0 ? void 0 : alertsRequest.result) !== null && _alertsRequest$result !== void 0 ? _alertsRequest$result : [],
          alertManagerSourceName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
        exact: true,
        path: "/alerting/silence/new",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_silences_SilencesEditor__WEBPACK_IMPORTED_MODULE_6__["default"], {
          alertManagerSourceName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
        exact: true,
        path: "/alerting/silence/:id/edit",
        children: ({
          match
        }) => {
          return (match === null || match === void 0 ? void 0 : match.params.id) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_silences_SilencesEditor__WEBPACK_IMPORTED_MODULE_6__["default"], {
            silence: getSilenceById(match.params.id),
            alertManagerSourceName: alertManagerSourceName
          });
        }
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withErrorBoundary)(Silences, {
  style: 'page'
}));

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

/***/ "./public/app/features/alerting/unified/components/rules/ActionButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionButton": () => (/* binding */ ActionButton),
/* harmony export */   "getStyle": () => (/* binding */ getStyle)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_ui_src_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["className"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ActionButton = _ref => {
  let {
    className
  } = _ref,
      restProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui_src_components_Button__WEBPACK_IMPORTED_MODULE_3__.Button, Object.assign({
    variant: "secondary",
    size: "xs",
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyle), className)
  }, restProps));
};
const getStyle = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  height: 24px;
  font-size: ${theme.typography.size.sm};
`;

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/ActionIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionIcon": () => (/* binding */ ActionIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["tooltip", "icon", "to", "target", "onClick", "className", "tooltipPlacement"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ActionIcon = _ref => {
  let {
    tooltip,
    icon,
    to,
    target,
    onClick,
    className,
    tooltipPlacement = 'top'
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const ariaLabel = typeof tooltip === 'string' ? tooltip : undefined;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    content: tooltip,
    placement: tooltipPlacement,
    children: to ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, Object.assign({
      variant: "secondary",
      fill: "text",
      icon: icon,
      href: to,
      size: "sm",
      target: target
    }, rest, {
      "aria-label": ariaLabel
    })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, Object.assign({
      className: className,
      variant: "secondary",
      fill: "text",
      size: "sm",
      icon: icon,
      type: "button",
      onClick: onClick
    }, rest, {
      "aria-label": ariaLabel
    }))
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmAlertStateTag": () => (/* binding */ AmAlertStateTag)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _StateTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/StateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const alertStateToState = {
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.AlertState.Active]: 'bad',
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.AlertState.Unprocessed]: 'neutral',
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.AlertState.Suppressed]: 'info'
};
const AmAlertStateTag = ({
  state
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_StateTag__WEBPACK_IMPORTED_MODULE_2__.StateTag, {
  state: alertStateToState[state],
  children: state
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/MatchedSilencedRules.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchedSilencedRules": () => (/* binding */ MatchedSilencedRules)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_matchers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _AlertLabels__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _rules_AlertStateTag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;


















const MatchedSilencedRules = () => {
  var _matchedAlertRules$sl;

  const [matchedAlertRules, setMatchedAlertRules] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const formApi = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    watch
  } = formApi;
  const matchers = watch('matchers');
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const columns = useColumns();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_7__.fetchAllPromAndRulerRulesAction)());
  }, [dispatch]);
  const combinedNamespaces = (0,_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__.useCombinedRuleNamespaces)();
  (0,react_use__WEBPACK_IMPORTED_MODULE_14__["default"])(() => {
    const matchedInstances = combinedNamespaces.flatMap(namespace => {
      return namespace.groups.flatMap(group => {
        return group.rules.map(combinedRule => combinedRule.promRule).filter(rule => (0,_utils_rules__WEBPACK_IMPORTED_MODULE_9__.isAlertingRule)(rule)).flatMap(rule => {
          var _rule$alerts;

          return (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_8__.findAlertInstancesWithMatchers)((_rule$alerts = rule.alerts) !== null && _rule$alerts !== void 0 ? _rule$alerts : [], matchers);
        });
      });
    });
    setMatchedAlertRules(matchedInstances);
  }, 500, [combinedNamespaces, matchers]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("h4", {
      className: styles.title,
      children: ["Affected alert instances", matchedAlertRules.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Badge, {
        className: styles.badge,
        color: "blue",
        text: matchedAlertRules.length
      }) : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: styles.table,
      children: matchers.every(matcher => !matcher.value && !matcher.name) ? _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
        children: "Add a valid matcher to see affected alerts"
      })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_11__.DynamicTable, {
          items: (_matchedAlertRules$sl = matchedAlertRules.slice(0, 5)) !== null && _matchedAlertRules$sl !== void 0 ? _matchedAlertRules$sl : [],
          isExpandable: false,
          cols: columns
        }), matchedAlertRules.length > 5 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: styles.moreMatches,
          children: ["and ", matchedAlertRules.length - 5, " more"]
        })]
      })
    })]
  });
};

function useColumns() {
  return [{
    id: 'state',
    label: 'State',
    renderCell: function renderStateTag({
      data: {
        matchedInstance
      }
    }) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_rules_AlertStateTag__WEBPACK_IMPORTED_MODULE_12__.AlertStateTag, {
        state: matchedInstance.state
      });
    },
    size: '160px'
  }, {
    id: 'labels',
    label: 'Labels',
    renderCell: function renderName({
      data: {
        matchedInstance
      }
    }) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_AlertLabels__WEBPACK_IMPORTED_MODULE_10__.AlertLabels, {
        labels: matchedInstance.labels
      });
    },
    size: '250px'
  }, {
    id: 'created',
    label: 'Created',
    renderCell: function renderSummary({
      data: {
        matchedInstance
      }
    }) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: matchedInstance.activeAt.startsWith('0001') ? '-' : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.dateTime)(matchedInstance.activeAt).format('YYYY-MM-DD HH:mm:ss')
      });
    },
    size: '400px'
  }];
}

const getStyles = theme => ({
  table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: ${theme.breakpoints.values.lg}px;
  `,
  moreMatches: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(1)};
  `,
  title: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    align-items: center;
  `,
  badge: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing(1)};
  `
});

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

/***/ "./public/app/features/alerting/unified/components/silences/MatchersField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const MatchersField = ({
  className
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const formApi = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const {
    control,
    register,
    formState: {
      errors
    }
  } = formApi;
  const {
    fields: matchers = [],
    append,
    remove
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFieldArray)({
    name: 'matchers'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(className, styles.wrapper),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
      label: "Matching labels",
      required: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: styles.matchers,
          children: matchers.map((matcher, index) => {
            var _errors$matchers, _errors$matchers$inde, _errors$matchers2, _errors$matchers2$ind, _errors$matchers2$ind2, _errors$matchers3, _errors$matchers3$ind, _errors$matchers4, _errors$matchers4$ind, _errors$matchers4$ind2;

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: styles.row,
              "data-testid": "matcher",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                label: "Label",
                invalid: !!(errors !== null && errors !== void 0 && (_errors$matchers = errors.matchers) !== null && _errors$matchers !== void 0 && (_errors$matchers$inde = _errors$matchers[index]) !== null && _errors$matchers$inde !== void 0 && _errors$matchers$inde.name),
                error: errors === null || errors === void 0 ? void 0 : (_errors$matchers2 = errors.matchers) === null || _errors$matchers2 === void 0 ? void 0 : (_errors$matchers2$ind = _errors$matchers2[index]) === null || _errors$matchers2$ind === void 0 ? void 0 : (_errors$matchers2$ind2 = _errors$matchers2$ind.name) === null || _errors$matchers2$ind2 === void 0 ? void 0 : _errors$matchers2$ind2.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`matchers.${index}.name`, {
                  required: {
                    value: true,
                    message: 'Required.'
                  }
                }), {
                  defaultValue: matcher.name,
                  placeholder: "label"
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                label: 'Operator',
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
                  control: control,
                  render: _ref => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref,
                        field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, Object.assign({}, field, {
                      onChange: value => onChange(value.value),
                      className: styles.matcherOptions,
                      options: _utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__.matcherFieldOptions,
                      "aria-label": "operator"
                    }));
                  },
                  defaultValue: matcher.operator || _utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__.matcherFieldOptions[0].value,
                  name: `matchers.${index}.operator`,
                  rules: {
                    required: {
                      value: true,
                      message: 'Required.'
                    }
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                label: "Value",
                invalid: !!(errors !== null && errors !== void 0 && (_errors$matchers3 = errors.matchers) !== null && _errors$matchers3 !== void 0 && (_errors$matchers3$ind = _errors$matchers3[index]) !== null && _errors$matchers3$ind !== void 0 && _errors$matchers3$ind.value),
                error: errors === null || errors === void 0 ? void 0 : (_errors$matchers4 = errors.matchers) === null || _errors$matchers4 === void 0 ? void 0 : (_errors$matchers4$ind = _errors$matchers4[index]) === null || _errors$matchers4$ind === void 0 ? void 0 : (_errors$matchers4$ind2 = _errors$matchers4$ind.value) === null || _errors$matchers4$ind2 === void 0 ? void 0 : _errors$matchers4$ind2.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`matchers.${index}.value`, {
                  required: {
                    value: true,
                    message: 'Required.'
                  }
                }), {
                  defaultValue: matcher.value,
                  placeholder: "value"
                }))
              }), matchers.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                className: styles.removeButton,
                tooltip: "Remove matcher",
                name: 'trash-alt',
                onClick: () => remove(index),
                children: "Remove"
              })]
            }, `${matcher.id}`);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          type: "button",
          icon: "plus",
          variant: "secondary",
          onClick: () => {
            const newMatcher = {
              name: '',
              value: '',
              operator: app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_4__.MatcherOperator.equal
            };
            append(newMatcher);
          },
          children: "Add matcher"
        })]
      })
    })
  });
};

const getStyles = theme => {
  return {
    wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing(2)};
    `,
    row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      background-color: ${theme.colors.background.secondary};
      padding: ${theme.spacing(1)} ${theme.spacing(1)} 0 ${theme.spacing(1)};
      & > * + * {
        margin-left: ${theme.spacing(2)};
      }
    `,
    removeButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing(1)};
      margin-top: ${theme.spacing(2.5)};
    `,
    matcherOptions: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      min-width: 140px;
    `,
    matchers: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      max-width: ${theme.breakpoints.values.sm}px;
      margin: ${theme.spacing(1)} 0;
      padding-top: ${theme.spacing(0.5)};
    `
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MatchersField);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/NoSilencesCTA.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoSilencesSplash": () => (/* binding */ NoSilencesSplash)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _CallToActionCard;








const NoSilencesSplash = ({
  alertManagerSourceName
}) => {
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_4__.getInstancesPermissions)(alertManagerSourceName);

  if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasAccess(permissions.create, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.isEditor)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "You haven't created any silences yet",
      buttonIcon: "bell-slash",
      buttonLink: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_5__.makeAMLink)('alerting/silence/new', alertManagerSourceName),
      buttonTitle: "New silence"
    });
  }

  return _CallToActionCard || (_CallToActionCard = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CallToActionCard, {
    callToActionElement: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {}),
    message: "No silences found."
  }));
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilenceDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SilenceDetails": () => (/* binding */ SilenceDetails)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _SilencedAlertsTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencedAlertsTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const SilenceDetails = ({
  silence
}) => {
  const {
    startsAt,
    endsAt,
    comment,
    createdBy,
    silencedAlerts
  } = silence;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const dateDisplayFormat = 'YYYY-MM-DD HH:mm';
  const startsAtDate = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateMath.parse(startsAt);
  const endsAtDate = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateMath.parse(endsAt);
  const duration = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.intervalToAbbreviatedDurationString)({
    start: new Date(startsAt),
    end: new Date(endsAt)
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.title,
      children: "Comment"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: comment
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.title,
      children: "Schedule"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: `${startsAtDate === null || startsAtDate === void 0 ? void 0 : startsAtDate.format(dateDisplayFormat)} - ${endsAtDate === null || endsAtDate === void 0 ? void 0 : endsAtDate.format(dateDisplayFormat)}`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.title,
      children: "Duration"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [" ", duration]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.title,
      children: "Created by"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [" ", createdBy]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.title,
      children: "Affected alerts"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SilencedAlertsTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
      silencedAlerts: silencedAlerts
    })]
  });
};

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: grid;
    grid-template-columns: 1fr 9fr;
    grid-row-gap: 1rem;
  `,
  title: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.primary};
  `,
  row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(1, 0)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencePeriod.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SilencePeriod": () => (/* binding */ SilencePeriod)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const SilencePeriod = () => {
  const {
    control,
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles)(getStyles);
  const {
    field: {
      onChange: onChangeStartsAt,
      value: startsAt
    },
    fieldState: {
      invalid: startsAtInvalid
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useController)({
    name: 'startsAt',
    control,
    rules: {
      validate: value => getValues().endsAt > value
    }
  });
  const {
    field: {
      onChange: onChangeEndsAt,
      value: endsAt
    },
    fieldState: {
      invalid: endsAtInvalid
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useController)({
    name: 'endsAt',
    control,
    rules: {
      validate: value => getValues().startsAt < value
    }
  });
  const {
    field: {
      onChange: onChangeTimeZone,
      value: timeZone
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useController)({
    name: 'timeZone',
    control
  });
  const invalid = startsAtInvalid || endsAtInvalid;
  const from = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)(startsAt);
  const to = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)(endsAt);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
    className: styles.timeRange,
    label: "Silence start and end",
    error: invalid ? 'To is before or the same as from' : '',
    invalid: invalid,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TimeRangeInput, {
      value: {
        from,
        to,
        raw: {
          from,
          to
        }
      },
      timeZone: timeZone,
      onChange: newValue => {
        onChangeStartsAt((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)(newValue.from));
        onChangeEndsAt((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)(newValue.to));
      },
      onChangeTimeZone: newValue => onChangeTimeZone(newValue),
      hideTimeZone: false,
      hideQuickRanges: true,
      placeholder: 'Select time range'
    })
  });
};

const getStyles = theme => ({
  timeRange: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 400px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilenceStateTag.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SilenceStateTag": () => (/* binding */ SilenceStateTag)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _StateTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/StateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const silenceStateToState = {
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.SilenceState.Active]: 'good',
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.SilenceState.Expired]: 'neutral',
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__.SilenceState.Pending]: 'neutral'
};
const SilenceStateTag = ({
  state
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_StateTag__WEBPACK_IMPORTED_MODULE_2__.StateTag, {
  state: silenceStateToState[state],
  children: state
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencedAlertsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _styles_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/styles/table.ts");
/* harmony import */ var _SilencedAlertsTableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencedAlertsTableRow.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _col, _thead;









const SilencedAlertsTable = ({
  silencedAlerts
}) => {
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_styles_table__WEBPACK_IMPORTED_MODULE_3__.getAlertTableStyles);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  if (!!silencedAlerts.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(tableStyles.table, styles.tableMargin),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("colgroup", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("col", {
          className: tableStyles.colExpand
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("col", {
          className: styles.colState
        }), _col || (_col = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("col", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("col", {
          className: styles.colName
        })]
      }), _thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
            children: "State"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
            children: "Alert name"
          })]
        })
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody", {
        children: silencedAlerts.map((alert, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_SilencedAlertsTableRow__WEBPACK_IMPORTED_MODULE_4__.SilencedAlertsTableRow, {
            alert: alert,
            className: index % 2 === 0 ? tableStyles.evenRow : ''
          }, alert.fingerprint);
        })
      })]
    });
  } else {
    return null;
  }
};

const getStyles = theme => ({
  tableMargin: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(1)};
  `,
  colState: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 110px;
  `,
  colName: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 65%;
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SilencedAlertsTable);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencedAlertsTableRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SilencedAlertsTableRow": () => (/* binding */ SilencedAlertsTableRow)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _AlertLabels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _AmAlertStateTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td;









const SilencedAlertsTableRow = ({
  alert,
  className
}) => {
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const duration = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.intervalToAbbreviatedDurationString)({
    start: new Date(alert.startsAt),
    end: new Date(alert.endsAt)
  });
  const alertName = Object.entries(alert.labels).reduce((name, [labelKey, labelValue]) => {
    if (labelKey === 'alertname' || labelKey === '__alert_rule_title__') {
      name = labelValue;
    }

    return name;
  }, '');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
      className: className,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_3__.CollapseToggle, {
          isCollapsed: isCollapsed,
          onToggle: collapsed => setIsCollapsed(collapsed)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AmAlertStateTag__WEBPACK_IMPORTED_MODULE_4__.AmAlertStateTag, {
          state: alert.status.state
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
        children: ["for ", duration, " seconds"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
        children: alertName
      })]
    }), !isCollapsed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
      className: className,
      children: [_td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
        colSpan: 5,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AlertLabels__WEBPACK_IMPORTED_MODULE_2__.AlertLabels, {
          labels: alert.labels
        })
      })]
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencesEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SilencesEditor": () => (/* binding */ SilencesEditor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_matchers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _MatchedSilencedRules__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/MatchedSilencedRules.tsx");
/* harmony import */ var _MatchersField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/MatchersField.tsx");
/* harmony import */ var _SilencePeriod__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencePeriod.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _SilencePeriod, _MatchersField, _MatchedSilencedRules, _Button, _Button2;
























const defaultsFromQuery = searchParams => {
  const defaults = {};
  const comment = searchParams.get('comment');
  const matchers = searchParams.getAll('matcher');
  const formMatchers = (0,_utils_matchers__WEBPACK_IMPORTED_MODULE_14__.parseQueryParamMatchers)(matchers);

  if (formMatchers.length) {
    defaults.matchers = formMatchers.map(_utils_alertmanager__WEBPACK_IMPORTED_MODULE_13__.matcherToMatcherField);
  }

  if (comment) {
    defaults.comment = comment;
  }

  return defaults;
};

const getDefaultFormValues = (searchParams, silence) => {
  const now = new Date();

  if (silence) {
    var _silence$matchers;

    const isExpired = Date.parse(silence.endsAt) < Date.now();
    const interval = isExpired ? {
      start: now,
      end: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.addDurationToDate)(now, {
        hours: 2
      })
    } : {
      start: new Date(silence.startsAt),
      end: new Date(silence.endsAt)
    };
    return {
      id: silence.id,
      startsAt: interval.start.toISOString(),
      endsAt: interval.end.toISOString(),
      comment: silence.comment,
      createdBy: silence.createdBy,
      duration: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.intervalToAbbreviatedDurationString)(interval),
      isRegex: false,
      matchers: ((_silence$matchers = silence.matchers) === null || _silence$matchers === void 0 ? void 0 : _silence$matchers.map(_utils_alertmanager__WEBPACK_IMPORTED_MODULE_13__.matcherToMatcherField)) || [],
      matcherName: '',
      matcherValue: '',
      timeZone: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.DefaultTimeZone
    };
  } else {
    const endsAt = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.addDurationToDate)(now, {
      hours: 2
    }); // Default time period is now + 2h

    return Object.assign({
      id: '',
      startsAt: now.toISOString(),
      endsAt: endsAt.toISOString(),
      comment: `created ${(0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.dateTime)().format('YYYY-MM-DD HH:mm')}`,
      createdBy: _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.bootData.user.name,
      duration: '2h',
      isRegex: false,
      matchers: [{
        name: '',
        value: '',
        operator: app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_9__.MatcherOperator.equal
      }],
      matcherName: '',
      matcherValue: '',
      timeZone: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.DefaultTimeZone
    }, defaultsFromQuery(searchParams));
  }
};

const SilencesEditor = ({
  silence,
  alertManagerSourceName
}) => {
  var _formState$errors$com;

  const [urlSearchParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_10__.useURLSearchParams)();
  const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => getDefaultFormValues(urlSearchParams, silence), [silence, urlSearchParams]);
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    defaultValues
  });
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const {
    loading
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_11__.useUnifiedAlertingSelector)(state => state.updateSilence);
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_8__.useCleanup)(state => state.unifiedAlerting.updateSilence);
  const {
    register,
    handleSubmit,
    formState,
    watch,
    setValue,
    clearErrors
  } = formAPI;

  const onSubmit = data => {
    const {
      id,
      startsAt,
      endsAt,
      comment,
      createdBy,
      matchers: matchersFields
    } = data;
    const matchers = matchersFields.map(_utils_alertmanager__WEBPACK_IMPORTED_MODULE_13__.matcherFieldToMatcher);
    const payload = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pickBy)({
      id,
      startsAt,
      endsAt,
      comment,
      createdBy,
      matchers
    }, value => !!value);
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_12__.createOrUpdateSilenceAction)({
      alertManagerSourceName,
      payload,
      exitOnSave: true,
      successMessage: `Silence ${payload.id ? 'updated' : 'created'}`
    }));
  };

  const duration = watch('duration');
  const startsAt = watch('startsAt');
  const endsAt = watch('endsAt'); // Keep duration and endsAt in sync

  const [prevDuration, setPrevDuration] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(duration);
  (0,react_use__WEBPACK_IMPORTED_MODULE_20__["default"])(() => {
    if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.isValidDate)(startsAt) && (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.isValidDate)(endsAt)) {
      if (duration !== prevDuration) {
        setValue('endsAt', (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.dateTime)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.addDurationToDate)(new Date(startsAt), (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.parseDuration)(duration))).toISOString());
        setPrevDuration(duration);
      } else {
        const startValue = new Date(startsAt).valueOf();
        const endValue = new Date(endsAt).valueOf();

        if (endValue > startValue) {
          const nextDuration = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.intervalToAbbreviatedDurationString)({
            start: new Date(startsAt),
            end: new Date(endsAt)
          });
          setValue('duration', nextDuration);
          setPrevDuration(nextDuration);
        }
      }
    }
  }, 700, [clearErrors, duration, endsAt, prevDuration, setValue, startsAt]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, Object.assign({}, formAPI, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.FieldSet, {
        label: `${silence ? 'Recreate silence' : 'Create silence'}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.flexRow, styles.silencePeriod),
          children: [_SilencePeriod || (_SilencePeriod = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_SilencePeriod__WEBPACK_IMPORTED_MODULE_18__.SilencePeriod, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, {
            label: "Duration",
            invalid: !!formState.errors.duration,
            error: formState.errors.duration && (formState.errors.duration.type === 'required' ? 'Required field' : formState.errors.duration.message),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input, Object.assign({
              className: styles.createdBy
            }, register('duration', {
              validate: value => Object.keys((0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.parseDuration)(value)).length === 0 ? 'Invalid duration. Valid example: 1d 4h (Available units: y, M, w, d, h, m, s)' : undefined
            }), {
              id: "duration"
            }))
          })]
        }), _MatchersField || (_MatchersField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_MatchersField__WEBPACK_IMPORTED_MODULE_17__["default"], {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.field, styles.textArea),
          label: "Comment",
          required: true,
          error: (_formState$errors$com = formState.errors.comment) === null || _formState$errors$com === void 0 ? void 0 : _formState$errors$com.message,
          invalid: !!formState.errors.comment,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TextArea, Object.assign({}, register('comment', {
            required: {
              value: true,
              message: 'Required.'
            }
          }), {
            rows: 5,
            placeholder: "Details about the silence"
          }))
        }), _MatchedSilencedRules || (_MatchedSilencedRules = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_MatchedSilencedRules__WEBPACK_IMPORTED_MODULE_16__.MatchedSilencedRules, {}))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        className: styles.flexRow,
        children: [loading && (_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, {
          disabled: true,
          icon: "fa fa-spinner",
          variant: "primary",
          children: "Saving..."
        }))), !loading && (_Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, {
          type: "submit",
          children: "Submit"
        }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton, {
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.makeAMLink)('alerting/silences', alertManagerSourceName),
          variant: 'secondary',
          fill: "outline",
          children: "Cancel"
        })]
      })]
    })
  }));
};

const getStyles = theme => ({
  field: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(1, 0)};
  `,
  textArea: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: ${theme.breakpoints.values.sm}px;
  `,
  createdBy: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 200px;
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > * {
      margin-right: ${theme.spacing(1)};
    }
  `,
  silencePeriod: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: ${theme.breakpoints.values.sm}px;
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SilencesEditor);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencesFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SilencesFilter": () => (/* binding */ SilencesFilter)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label, _Icon;












const stateOptions = Object.entries(app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_6__.SilenceState).map(([key, value]) => ({
  label: key,
  value
}));

const getQueryStringKey = () => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)('query-string-');

const SilencesFilter = () => {
  const [queryStringKey, setQueryStringKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(getQueryStringKey());
  const [queryParams, setQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_5__.useQueryParams)();
  const {
    queryString,
    silenceState
  } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.getSilenceFiltersFromUrlParams)(queryParams);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const handleQueryStringChange = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(e => {
    const target = e.target;
    setQueryParams({
      queryString: target.value || null
    });
  }, 400);

  const handleSilenceStateChange = state => {
    setQueryParams({
      silenceState: state
    });
  };

  const clearFilters = () => {
    setQueryParams({
      queryString: null,
      silenceState: null
    });
    setTimeout(() => setQueryStringKey(getQueryStringKey()));
  };

  const inputInvalid = queryString && queryString.length > 3 ? (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_7__.parseMatchers)(queryString).length === 0 : false;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: styles.flexRow,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      className: styles.rowChild,
      label: _Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.Stack, {
          gap: 0.5,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            children: "Search by matchers"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
            content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              children: ["Filter silences by matchers using a comma separated list of matchers, ie:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("pre", {
                children: `severity=critical, instance=~cluster-us-.+`
              })]
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
              name: "info-circle",
              size: "sm"
            })
          })]
        })
      })),
      invalid: inputInvalid,
      error: inputInvalid ? 'Query must use valid matcher syntax' : null,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
        className: styles.searchInput,
        prefix: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
          name: "search"
        })),
        onChange: handleQueryStringChange,
        defaultValue: queryString !== null && queryString !== void 0 ? queryString : '',
        placeholder: "Search",
        "data-testid": "search-query-input"
      }, queryStringKey)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      className: styles.rowChild,
      label: "State",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.RadioButtonGroup, {
        options: stateOptions,
        value: silenceState,
        onChange: handleSilenceStateChange
      })
    }), (queryString || silenceState) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: styles.rowChild,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        variant: "secondary",
        icon: "times",
        onClick: clearFilters,
        children: "Clear filters"
      })
    })]
  });
};

const getStyles = theme => ({
  searchInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 360px;
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: ${theme.spacing(2)};
    border-bottom: 1px solid ${theme.colors.border.strong};
  `,
  rowChild: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(1)};
    margin-bottom: 0;
    max-height: 52px;
  `,
  fieldLabel: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-size: 12px;
    font-weight: 500;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/SilencesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _rules_ActionButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionButton.tsx");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _Matchers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/Matchers.tsx");
/* harmony import */ var _NoSilencesCTA__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/NoSilencesCTA.tsx");
/* harmony import */ var _SilenceDetails__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilenceDetails.tsx");
/* harmony import */ var _SilenceStateTag__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilenceStateTag.tsx");
/* harmony import */ var _SilencesFilter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/SilencesFilter.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _SilencesFilter, _span, _br, _ActionButton;



























const SilencesTable = ({
  silences,
  alertManagerAlerts,
  alertManagerSourceName
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_6__.useQueryParams)();
  const filteredSilences = useFilteredSilences(silences);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_10__.getInstancesPermissions)(alertManagerSourceName);
  const {
    silenceState
  } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_12__.getSilenceFiltersFromUrlParams)(queryParams);
  const showExpiredSilencesBanner = !!filteredSilences.length && (silenceState === undefined || silenceState === app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_8__.SilenceState.Expired);
  const columns = useColumns(alertManagerSourceName);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const findSilencedAlerts = id => {
      return alertManagerAlerts.filter(alert => alert.status.silencedBy.includes(id));
    };

    return filteredSilences.map(silence => {
      const silencedAlerts = findSilencedAlerts(silence.id);
      return {
        id: silence.id,
        data: Object.assign({}, silence, {
          silencedAlerts
        })
      };
    });
  }, [filteredSilences, alertManagerAlerts]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
    "data-testid": "silences-table",
    children: [!!silences.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.Fragment, {
      children: [_SilencesFilter || (_SilencesFilter = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_SilencesFilter__WEBPACK_IMPORTED_MODULE_21__.SilencesFilter, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_13__.Authorize, {
        actions: [permissions.create],
        fallback: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.isEditor,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
          className: styles.topButtonContainer,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Link, {
            href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_12__.makeAMLink)('/alerting/silence/new', alertManagerSourceName),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
              className: styles.addNewSilence,
              icon: "plus",
              children: "New Silence"
            })
          })
        })
      }), !!items.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_14__.DynamicTable, {
          items: items,
          cols: columns,
          isExpandable: true,
          renderExpandedContent: ({
            data
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_SilenceDetails__WEBPACK_IMPORTED_MODULE_19__.SilenceDetails, {
            silence: data
          })
        }), showExpiredSilencesBanner && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
          className: styles.callout,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, {
            className: styles.calloutIcon,
            name: "info-circle"
          }), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("span", {
            children: "Expired silences are automatically deleted after 5 days."
          }))]
        })]
      }) : 'No matching silences found']
    }), !silences.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_NoSilencesCTA__WEBPACK_IMPORTED_MODULE_18__.NoSilencesSplash, {
      alertManagerSourceName: alertManagerSourceName
    })]
  });
};

const useFilteredSilences = silences => {
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_6__.useQueryParams)();
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const {
      queryString,
      silenceState
    } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_12__.getSilenceFiltersFromUrlParams)(queryParams);
    const silenceIdsString = queryParams === null || queryParams === void 0 ? void 0 : queryParams.silenceIds;
    return silences.filter(silence => {
      if (typeof silenceIdsString === 'string') {
        const idsIncluded = silenceIdsString.split(',').includes(silence.id);

        if (!idsIncluded) {
          return false;
        }
      }

      if (queryString) {
        const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_11__.parseMatchers)(queryString);
        const matchersMatch = matchers.every(matcher => {
          var _silence$matchers;

          return (_silence$matchers = silence.matchers) === null || _silence$matchers === void 0 ? void 0 : _silence$matchers.some(({
            name,
            value,
            isEqual,
            isRegex
          }) => matcher.name === name && matcher.value === value && matcher.isEqual === isEqual && matcher.isRegex === isRegex);
        });

        if (!matchersMatch) {
          return false;
        }
      }

      if (silenceState) {
        const stateMatches = silence.status.state === silenceState;

        if (!stateMatches) {
          return false;
        }
      }

      return true;
    });
  }, [queryParams, silences]);
};

const getStyles = theme => ({
  topButtonContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `,
  addNewSilence: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(2, 0)};
  `,
  callout: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background-color: ${theme.colors.background.secondary};
    border-top: 3px solid ${theme.colors.info.border};
    border-radius: 2px;
    height: 62px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${theme.spacing(2)};

    & > * {
      margin-left: ${theme.spacing(1)};
    }
  `,
  calloutIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.info.text};
  `,
  editButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing(0.5)};
  `
});

function useColumns(alertManagerSourceName) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const permissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_10__.getInstancesPermissions)(alertManagerSourceName);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const handleExpireSilenceClick = id => {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.expireSilenceAction)(alertManagerSourceName, id));
    };

    const showActions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.hasAccess(permissions.update, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.isEditor);
    const columns = [{
      id: 'state',
      label: 'State',
      renderCell: function renderStateTag({
        data: {
          status
        }
      }) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_SilenceStateTag__WEBPACK_IMPORTED_MODULE_20__.SilenceStateTag, {
          state: status.state
        });
      },
      size: '88px'
    }, {
      id: 'matchers',
      label: 'Matching labels',
      renderCell: function renderMatchers({
        data: {
          matchers
        }
      }) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_Matchers__WEBPACK_IMPORTED_MODULE_17__.Matchers, {
          matchers: matchers || []
        });
      },
      size: 9
    }, {
      id: 'alerts',
      label: 'Alerts',
      renderCell: function renderSilencedAlerts({
        data: {
          silencedAlerts
        }
      }) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("span", {
          "data-testid": "alerts",
          children: silencedAlerts.length
        });
      },
      size: 1
    }, {
      id: 'schedule',
      label: 'Schedule',
      renderCell: function renderSchedule({
        data: {
          startsAt,
          endsAt
        }
      }) {
        const startsAtDate = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateMath.parse(startsAt);
        const endsAtDate = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateMath.parse(endsAt);
        const dateDisplayFormat = 'YYYY-MM-DD HH:mm';
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.Fragment, {
          children: [' ', startsAtDate === null || startsAtDate === void 0 ? void 0 : startsAtDate.format(dateDisplayFormat), " ", '-', _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("br", {})), endsAtDate === null || endsAtDate === void 0 ? void 0 : endsAtDate.format(dateDisplayFormat)]
        });
      },
      size: '150px'
    }];

    if (showActions) {
      columns.push({
        id: 'actions',
        label: 'Actions',
        renderCell: function renderActions({
          data: silence
        }) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_4__.Stack, {
            gap: 0.5,
            children: [silence.status.state === 'expired' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Link, {
              href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_12__.makeAMLink)(`/alerting/silence/${silence.id}/edit`, alertManagerSourceName),
              children: _ActionButton || (_ActionButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_rules_ActionButton__WEBPACK_IMPORTED_MODULE_15__.ActionButton, {
                icon: "sync",
                children: "Recreate"
              }))
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_rules_ActionButton__WEBPACK_IMPORTED_MODULE_15__.ActionButton, {
              icon: "bell",
              onClick: () => handleExpireSilenceClick(silence.id),
              children: "Unsilence"
            }), silence.status.state !== 'expired' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_rules_ActionIcon__WEBPACK_IMPORTED_MODULE_16__.ActionIcon, {
              className: styles.editButton,
              to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_12__.makeAMLink)(`/alerting/silence/${silence.id}/edit`, alertManagerSourceName),
              icon: "pen",
              tooltip: "edit"
            })]
          });
        },
        size: '147px'
      });
    }

    return columns;
  }, [alertManagerSourceName, dispatch, styles, permissions]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SilencesTable);

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

/***/ "./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flattenGrafanaManagedRules": () => (/* binding */ flattenGrafanaManagedRules),
/* harmony export */   "sortRulesByName": () => (/* binding */ sortRulesByName),
/* harmony export */   "useCombinedRuleNamespaces": () => (/* binding */ useCombinedRuleNamespaces)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");




// this little monster combines prometheus rules and ruler rules to produce a unified data structure
// can limit to a single rules source
function useCombinedRuleNamespaces(rulesSourceName) {
  const promRulesResponses = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.promRules);
  const rulerRulesResponses = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.rulerRules); // cache results per rules source, so we only recalculate those for which results have actually changed

  const cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const rulesSources = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (rulesSourceName) {
      const rulesSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.getRulesSourceByName)(rulesSourceName);

      if (!rulesSource) {
        throw new Error(`Unknown rules source: ${rulesSourceName}`);
      }

      return [rulesSource];
    }

    return (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.getAllRulesSources)();
  }, [rulesSourceName]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => rulesSources.map(rulesSource => {
    var _promRulesResponses$r, _rulerRulesResponses$;

    const rulesSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.isCloudRulesSource)(rulesSource) ? rulesSource.name : rulesSource;
    const promRules = (_promRulesResponses$r = promRulesResponses[rulesSourceName]) === null || _promRulesResponses$r === void 0 ? void 0 : _promRulesResponses$r.result;
    const rulerRules = (_rulerRulesResponses$ = rulerRulesResponses[rulesSourceName]) === null || _rulerRulesResponses$ === void 0 ? void 0 : _rulerRulesResponses$.result;
    const cached = cache.current[rulesSourceName];

    if (cached && cached.promRules === promRules && cached.rulerRules === rulerRules) {
      return cached.result;
    }

    const namespaces = {}; // first get all the ruler rules in

    Object.entries(rulerRules || {}).forEach(([namespaceName, groups]) => {
      const namespace = {
        rulesSource,
        name: namespaceName,
        groups: []
      };
      namespaces[namespaceName] = namespace;
      addRulerGroupsToCombinedNamespace(namespace, groups);
    }); // then correlate with prometheus rules

    promRules === null || promRules === void 0 ? void 0 : promRules.forEach(({
      name: namespaceName,
      groups
    }) => {
      const ns = namespaces[namespaceName] = namespaces[namespaceName] || {
        rulesSource,
        name: namespaceName,
        groups: []
      };
      addPromGroupsToCombinedNamespace(ns, groups);
    });
    const result = Object.values(namespaces);
    cache.current[rulesSourceName] = {
      promRules,
      rulerRules,
      result
    };
    return result;
  }).flat(), [promRulesResponses, rulerRulesResponses, rulesSources]);
} // merge all groups in case of grafana managed, essentially treating namespaces (folders) as groups

function flattenGrafanaManagedRules(namespaces) {
  return namespaces.map(namespace => {
    const newNamespace = Object.assign({}, namespace, {
      groups: []
    }); // add default group with ungrouped rules

    newNamespace.groups.push({
      name: 'default',
      rules: sortRulesByName(namespace.groups.flatMap(group => group.rules))
    });
    return newNamespace;
  });
}
function sortRulesByName(rules) {
  return rules.sort((a, b) => a.name.localeCompare(b.name));
}

function addRulerGroupsToCombinedNamespace(namespace, groups) {
  namespace.groups = groups.map(group => {
    const combinedGroup = {
      name: group.name,
      interval: group.interval,
      source_tenants: group.source_tenants,
      rules: []
    };
    combinedGroup.rules = group.rules.map(rule => rulerRuleToCombinedRule(rule, namespace, combinedGroup));
    return combinedGroup;
  });
}

function addPromGroupsToCombinedNamespace(namespace, groups) {
  groups.forEach(group => {
    var _group$rules;

    let combinedGroup = namespace.groups.find(g => g.name === group.name);

    if (!combinedGroup) {
      combinedGroup = {
        name: group.name,
        rules: []
      };
      namespace.groups.push(combinedGroup);
    }

    ((_group$rules = group.rules) !== null && _group$rules !== void 0 ? _group$rules : []).forEach(rule => {
      const existingRule = getExistingRuleInGroup(rule, combinedGroup, namespace.rulesSource);

      if (existingRule) {
        existingRule.promRule = rule;
      } else {
        combinedGroup.rules.push(promRuleToCombinedRule(rule, namespace, combinedGroup));
      }
    });
  });
}

function promRuleToCombinedRule(rule, namespace, group) {
  return {
    name: rule.name,
    query: rule.query,
    labels: rule.labels || {},
    annotations: (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRule)(rule) ? rule.annotations || {} : {},
    promRule: rule,
    namespace: namespace,
    group
  };
}

function rulerRuleToCombinedRule(rule, namespace, group) {
  return (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRulerRule)(rule) ? {
    name: rule.alert,
    query: rule.expr,
    labels: rule.labels || {},
    annotations: rule.annotations || {},
    rulerRule: rule,
    namespace,
    group
  } : (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isRecordingRulerRule)(rule) ? {
    name: rule.record,
    query: rule.expr,
    labels: rule.labels || {},
    annotations: {},
    rulerRule: rule,
    namespace,
    group
  } : {
    name: rule.grafana_alert.title,
    query: '',
    labels: rule.labels || {},
    annotations: rule.annotations || {},
    rulerRule: rule,
    namespace,
    group
  };
} // find existing rule in group that matches the given prom rule


function getExistingRuleInGroup(rule, group, rulesSource) {
  var _rules$find;

  if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.isGrafanaRulesSource)(rulesSource)) {
    // assume grafana groups have only the one rule. check name anyway because paranoid
    return group.rules.find(existingRule => existingRule.name === rule.name);
  }

  return (// try finding a rule that matches name, labels, annotations and query
    (_rules$find = group.rules.find(existingRule => !existingRule.promRule && isCombinedRuleEqualToPromRule(existingRule, rule, true))) !== null && _rules$find !== void 0 ? _rules$find : // if that fails, try finding a rule that only matches name, labels and annotations.
    // loki & prom can sometimes modify the query so it doesnt match, eg `2 > 1` becomes `1`
    group.rules.find(existingRule => !existingRule.promRule && isCombinedRuleEqualToPromRule(existingRule, rule, false))
  );
}

function isCombinedRuleEqualToPromRule(combinedRule, rule, checkQuery = true) {
  if (combinedRule.name === rule.name) {
    return JSON.stringify([checkQuery ? hashQuery(combinedRule.query) : '', combinedRule.labels, combinedRule.annotations]) === JSON.stringify([checkQuery ? hashQuery(rule.query) : '', rule.labels || {}, (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRule)(rule) ? rule.annotations || {} : {}]);
  }

  return false;
} // there can be slight differences in how prom & ruler render a query, this will hash them accounting for the differences


function hashQuery(query) {
  // one of them might be wrapped in parens
  if (query.length > 1 && query[0] === '(' && query[query.length - 1] === ')') {
    query = query.slice(1, -1);
  } // whitespace could be added or removed


  query = query.replace(/\s|\n/g, ''); // labels matchers can be reordered, so sort the enitre string, esentially comparing just the character counts

  return query.split('').sort().join('');
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

/***/ "./public/app/features/alerting/unified/styles/table.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAlertTableStyles": () => (/* binding */ getAlertTableStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getAlertTableStyles = theme => ({
  table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 100%;
    border-radius: ${theme.shape.borderRadius()};
    border: solid 1px ${theme.colors.border.weak};
    background-color: ${theme.colors.background.secondary};

    th {
      padding: ${theme.spacing(1)};
    }

    td {
      padding: 0 ${theme.spacing(1)};
    }

    tr {
      height: 38px;
    }
  `,
  evenRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background-color: ${theme.colors.background.primary};
  `,
  colExpand: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 36px;
  `,
  actionsCell: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${theme.spacing(0.5)};
    }
  `
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL1NpbGVuY2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvQWxlcnRpbmdQYWdlV3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0F1dGhvcml6ZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL05vQWxlcnRNYW5hZ2VyV2FybmluZy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL0FjdGlvbkJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL0FjdGlvbkljb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9zaWxlbmNlcy9BbUFsZXJ0U3RhdGVUYWcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9zaWxlbmNlcy9NYXRjaGVkU2lsZW5jZWRSdWxlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3NpbGVuY2VzL01hdGNoZXJzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvc2lsZW5jZXMvTWF0Y2hlcnNGaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3NpbGVuY2VzL05vU2lsZW5jZXNDVEEudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9zaWxlbmNlcy9TaWxlbmNlRGV0YWlscy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3NpbGVuY2VzL1NpbGVuY2VQZXJpb2QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9zaWxlbmNlcy9TaWxlbmNlU3RhdGVUYWcudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9zaWxlbmNlcy9TaWxlbmNlZEFsZXJ0c1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvc2lsZW5jZXMvU2lsZW5jZWRBbGVydHNUYWJsZVJvdy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3NpbGVuY2VzL1NpbGVuY2VzRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvc2lsZW5jZXMvU2lsZW5jZXNGaWx0ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9zaWxlbmNlcy9TaWxlbmNlc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZVVSTFNlYXJjaFBhcmFtcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3N0eWxlcy90YWJsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBjbGVhblVwQWN0aW9uLCBTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vYWN0aW9ucy9jbGVhblVwJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNsZWFudXA8VD4oc3RhdGVTZWxlY3RvcjogU3RhdGVTZWxlY3RvcjxUPikge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIC8vYml0IG9mIGEgaGFjayB0byB1bmJ1cmRlbiB1c2VyIGZyb20gaGF2aW5nIHRvIHdyYXAgc3RhdGVTZWxjZXRvciBpbiBhIHVzZUNhbGxiYWNrLiBPdGhlcndpc2UgY2xlYW51cCB3b3VsZCBoYXBwZW4gb24gZXZlcnkgcmVuZGVyXG4gIGNvbnN0IHNlbGVjdG9yUmVmID0gdXNlUmVmKHN0YXRlU2VsZWN0b3IpO1xuICBzZWxlY3RvclJlZi5jdXJyZW50ID0gc3RhdGVTZWxlY3RvcjtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goY2xlYW5VcEFjdGlvbih7IHN0YXRlU2VsZWN0b3I6IHNlbGVjdG9yUmVmLmN1cnJlbnQgfSkpO1xuICAgIH07XG4gIH0sIFtkaXNwYXRjaF0pO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSZWRpcmVjdCwgUm91dGUsIFJvdXRlQ2hpbGRyZW5Qcm9wcywgU3dpdGNoLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBBbGVydCwgTG9hZGluZ1BsYWNlaG9sZGVyLCB3aXRoRXJyb3JCb3VuZGFyeSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFNpbGVuY2UgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IEFsZXJ0TWFuYWdlclBpY2tlciB9IGZyb20gJy4vY29tcG9uZW50cy9BbGVydE1hbmFnZXJQaWNrZXInO1xuaW1wb3J0IHsgQWxlcnRpbmdQYWdlV3JhcHBlciB9IGZyb20gJy4vY29tcG9uZW50cy9BbGVydGluZ1BhZ2VXcmFwcGVyJztcbmltcG9ydCB7IE5vQWxlcnRNYW5hZ2VyV2FybmluZyB9IGZyb20gJy4vY29tcG9uZW50cy9Ob0FsZXJ0TWFuYWdlcldhcm5pbmcnO1xuaW1wb3J0IFNpbGVuY2VzRWRpdG9yIGZyb20gJy4vY29tcG9uZW50cy9zaWxlbmNlcy9TaWxlbmNlc0VkaXRvcic7XG5pbXBvcnQgU2lsZW5jZXNUYWJsZSBmcm9tICcuL2NvbXBvbmVudHMvc2lsZW5jZXMvU2lsZW5jZXNUYWJsZSc7XG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lJztcbmltcG9ydCB7IHVzZUFsZXJ0TWFuYWdlcnNCeVBlcm1pc3Npb24gfSBmcm9tICcuL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZXMnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IGZldGNoQW1BbGVydHNBY3Rpb24sIGZldGNoU2lsZW5jZXNBY3Rpb24gfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgU0lMRU5DRVNfUE9MTF9JTlRFUlZBTF9NUyB9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IEFzeW5jUmVxdWVzdFN0YXRlLCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuL3V0aWxzL3JlZHV4JztcblxuY29uc3QgU2lsZW5jZXM6IEZDID0gKCkgPT4ge1xuICBjb25zdCBhbGVydE1hbmFnZXJzID0gdXNlQWxlcnRNYW5hZ2Vyc0J5UGVybWlzc2lvbignaW5zdGFuY2UnKTtcbiAgY29uc3QgW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIHNldEFsZXJ0TWFuYWdlclNvdXJjZU5hbWVdID0gdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZShhbGVydE1hbmFnZXJzKTtcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHNpbGVuY2VzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaWxlbmNlcyk7XG4gIGNvbnN0IGFsZXJ0c1JlcXVlc3RzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbUFsZXJ0cyk7XG4gIGNvbnN0IGFsZXJ0c1JlcXVlc3QgPSBhbGVydE1hbmFnZXJTb3VyY2VOYW1lXG4gICAgPyBhbGVydHNSZXF1ZXN0c1thbGVydE1hbmFnZXJTb3VyY2VOYW1lXSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGVcbiAgICA6IHVuZGVmaW5lZDtcblxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IGlzUm9vdCA9IGxvY2F0aW9uLnBhdGhuYW1lLmVuZHNXaXRoKCcvYWxlcnRpbmcvc2lsZW5jZXMnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGZldGNoQWxsKCkge1xuICAgICAgaWYgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpIHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTaWxlbmNlc0FjdGlvbihhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSk7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQW1BbGVydHNBY3Rpb24oYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmZXRjaEFsbCgpO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gZmV0Y2hBbGwsIFNJTEVOQ0VTX1BPTExfSU5URVJWQUxfTVMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuICB9LCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgZGlzcGF0Y2hdKTtcblxuICBjb25zdCB7IHJlc3VsdCwgbG9hZGluZywgZXJyb3IgfTogQXN5bmNSZXF1ZXN0U3RhdGU8U2lsZW5jZVtdPiA9XG4gICAgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgJiYgc2lsZW5jZXNbYWxlcnRNYW5hZ2VyU291cmNlTmFtZV0pIHx8IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcblxuICBjb25zdCBnZXRTaWxlbmNlQnlJZCA9IHVzZUNhbGxiYWNrKChpZDogc3RyaW5nKSA9PiByZXN1bHQgJiYgcmVzdWx0LmZpbmQoKHNpbGVuY2UpID0+IHNpbGVuY2UuaWQgPT09IGlkKSwgW3Jlc3VsdF0pO1xuXG4gIGlmICghYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkge1xuICAgIHJldHVybiBpc1Jvb3QgPyAoXG4gICAgICA8QWxlcnRpbmdQYWdlV3JhcHBlciBwYWdlSWQ9XCJzaWxlbmNlc1wiPlxuICAgICAgICA8Tm9BbGVydE1hbmFnZXJXYXJuaW5nIGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnM9e2FsZXJ0TWFuYWdlcnN9IC8+XG4gICAgICA8L0FsZXJ0aW5nUGFnZVdyYXBwZXI+XG4gICAgKSA6IChcbiAgICAgIDxSZWRpcmVjdCB0bz1cIi9hbGVydGluZy9zaWxlbmNlc1wiIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFsZXJ0aW5nUGFnZVdyYXBwZXIgcGFnZUlkPVwic2lsZW5jZXNcIj5cbiAgICAgIDxBbGVydE1hbmFnZXJQaWNrZXJcbiAgICAgICAgZGlzYWJsZWQ9eyFpc1Jvb3R9XG4gICAgICAgIGN1cnJlbnQ9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXtzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICBkYXRhU291cmNlcz17YWxlcnRNYW5hZ2Vyc31cbiAgICAgIC8+XG4gICAgICB7ZXJyb3IgJiYgIWxvYWRpbmcgJiYgKFxuICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiIHRpdGxlPVwiRXJyb3IgbG9hZGluZyBzaWxlbmNlc1wiPlxuICAgICAgICAgIHtlcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yLid9XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAge2FsZXJ0c1JlcXVlc3Q/LmVycm9yICYmICFhbGVydHNSZXF1ZXN0Py5sb2FkaW5nICYmIChcbiAgICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiZXJyb3JcIiB0aXRsZT1cIkVycm9yIGxvYWRpbmcgQWxlcnRtYW5hZ2VyIGFsZXJ0c1wiPlxuICAgICAgICAgIHthbGVydHNSZXF1ZXN0LmVycm9yPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yLid9XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAge2xvYWRpbmcgJiYgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PVwibG9hZGluZyBzaWxlbmNlcy4uLlwiIC8+fVxuICAgICAge3Jlc3VsdCAmJiAhZXJyb3IgJiYgKFxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2FsZXJ0aW5nL3NpbGVuY2VzXCI+XG4gICAgICAgICAgICA8U2lsZW5jZXNUYWJsZVxuICAgICAgICAgICAgICBzaWxlbmNlcz17cmVzdWx0fVxuICAgICAgICAgICAgICBhbGVydE1hbmFnZXJBbGVydHM9e2FsZXJ0c1JlcXVlc3Q/LnJlc3VsdCA/PyBbXX1cbiAgICAgICAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9hbGVydGluZy9zaWxlbmNlL25ld1wiPlxuICAgICAgICAgICAgPFNpbGVuY2VzRWRpdG9yIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9hbGVydGluZy9zaWxlbmNlLzppZC9lZGl0XCI+XG4gICAgICAgICAgICB7KHsgbWF0Y2ggfTogUm91dGVDaGlsZHJlblByb3BzPHsgaWQ6IHN0cmluZyB9PikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIG1hdGNoPy5wYXJhbXMuaWQgJiYgKFxuICAgICAgICAgICAgICAgICAgPFNpbGVuY2VzRWRpdG9yXG4gICAgICAgICAgICAgICAgICAgIHNpbGVuY2U9e2dldFNpbGVuY2VCeUlkKG1hdGNoLnBhcmFtcy5pZCl9XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICApfVxuICAgIDwvQWxlcnRpbmdQYWdlV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhFcnJvckJvdW5kYXJ5KFNpbGVuY2VzLCB7IHN0eWxlOiAncGFnZScgfSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy9zdG9yZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2VJZDogc3RyaW5nO1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnRpbmdQYWdlV3JhcHBlcjogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHBhZ2VJZCwgaXNMb2FkaW5nIH0pID0+IHtcbiAgY29uc3QgbmF2TW9kZWwgPSBnZXROYXZNb2RlbChcbiAgICB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KSxcbiAgICBwYWdlSWRcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2lzTG9hZGluZ30+e2NoaWxkcmVufTwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFjdGlvbnM6IEFjY2Vzc0NvbnRyb2xBY3Rpb25bXTtcbiAgZmFsbGJhY2s/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhvcml6ZTogRkM8UHJvcHM+ID0gKHsgYWN0aW9ucywgY2hpbGRyZW4sIGZhbGxiYWNrID0gdHJ1ZSB9KSA9PiB7XG4gIGlmIChhY3Rpb25zLnNvbWUoKGFjdGlvbikgPT4gY29udGV4dFNydi5oYXNBY2Nlc3MoYWN0aW9uLCBmYWxsYmFjaykpKSB7XG4gICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJEYXRhU291cmNlIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmltcG9ydCB7IEFsZXJ0TWFuYWdlclBpY2tlciB9IGZyb20gJy4vQWxlcnRNYW5hZ2VyUGlja2VyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYXZhaWxhYmxlQWxlcnRNYW5hZ2VyczogQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZVtdO1xufVxuXG5jb25zdCBOb0FsZXJ0TWFuYWdlcnNBdmFpbGFibGUgPSAoKSA9PiAoXG4gIDxBbGVydCB0aXRsZT1cIk5vIEFsZXJ0bWFuYWdlciBmb3VuZFwiIHNldmVyaXR5PVwid2FybmluZ1wiPlxuICAgIFdlIGNvdWxkIG5vdCBmaW5kIGFueSBleHRlcm5hbCBBbGVydG1hbmFnZXJzIGFuZCB5b3UgbWF5IG5vdCBoYXZlIGFjY2VzcyB0byB0aGUgYnVpbHQtaW4gR3JhZmFuYSBBbGVydG1hbmFnZXIuXG4gIDwvQWxlcnQ+XG4pO1xuXG5jb25zdCBPdGhlckFsZXJ0TWFuYWdlcnNBdmFpbGFibGUgPSAoKSA9PiAoXG4gIDxBbGVydCB0aXRsZT1cIlNlbGVjdGVkIEFsZXJ0bWFuYWdlciBub3QgZm91bmQuIFNlbGVjdCBhIGRpZmZlcmVudCBBbGVydG1hbmFnZXIuXCIgc2V2ZXJpdHk9XCJ3YXJuaW5nXCI+XG4gICAgU2VsZWN0ZWQgQWxlcnRtYW5hZ2VyIG5vIGxvbmdlciBleGlzdHMgb3IgeW91IG1heSBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyBpdC5cbiAgPC9BbGVydD5cbik7XG5cbmV4cG9ydCBjb25zdCBOb0FsZXJ0TWFuYWdlcldhcm5pbmcgPSAoeyBhdmFpbGFibGVBbGVydE1hbmFnZXJzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtfLCBzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lXSA9IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUoYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycyk7XG4gIGNvbnN0IGhhc090aGVyQU1zID0gYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycy5sZW5ndGggPiAwO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtoYXNPdGhlckFNcyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8QWxlcnRNYW5hZ2VyUGlja2VyIG9uQ2hhbmdlPXtzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lfSBkYXRhU291cmNlcz17YXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc30gLz5cbiAgICAgICAgICA8T3RoZXJBbGVydE1hbmFnZXJzQXZhaWxhYmxlIC8+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPE5vQWxlcnRNYW5hZ2Vyc0F2YWlsYWJsZSAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvblByb3BzIH0gZnJvbSAnQGdyYWZhbmEvdWkvc3JjL2NvbXBvbmVudHMvQnV0dG9uJztcblxudHlwZSBQcm9wcyA9IE9taXQ8QnV0dG9uUHJvcHMsICd2YXJpYW50JyB8ICdzaXplJz47XG5cbmV4cG9ydCBjb25zdCBBY3Rpb25CdXR0b246IEZDPFByb3BzPiA9ICh7IGNsYXNzTmFtZSwgLi4ucmVzdFByb3BzIH0pID0+IChcbiAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgc2l6ZT1cInhzXCIgY2xhc3NOYW1lPXtjeCh1c2VTdHlsZXMoZ2V0U3R5bGUpLCBjbGFzc05hbWUpfSB7Li4ucmVzdFByb3BzfSAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IGNzc2BcbiAgaGVpZ2h0OiAyNHB4O1xuICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5zaXplLnNtfTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEljb25OYW1lLCBUb29sdGlwLCBMaW5rQnV0dG9uLCBCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQb3BvdmVyQ29udGVudCwgVG9vbHRpcFBsYWNlbWVudCB9IGZyb20gJ0BncmFmYW5hL3VpL3NyYy9jb21wb25lbnRzL1Rvb2x0aXAnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0b29sdGlwOiBQb3BvdmVyQ29udGVudDtcbiAgaWNvbjogSWNvbk5hbWU7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgdG9vbHRpcFBsYWNlbWVudD86IFRvb2x0aXBQbGFjZW1lbnQ7XG4gIHRvPzogc3RyaW5nO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICAnZGF0YS10ZXN0aWQnPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQWN0aW9uSWNvbjogRkM8UHJvcHM+ID0gKHtcbiAgdG9vbHRpcCxcbiAgaWNvbixcbiAgdG8sXG4gIHRhcmdldCxcbiAgb25DbGljayxcbiAgY2xhc3NOYW1lLFxuICB0b29sdGlwUGxhY2VtZW50ID0gJ3RvcCcsXG4gIC4uLnJlc3Rcbn0pID0+IHtcbiAgY29uc3QgYXJpYUxhYmVsID0gdHlwZW9mIHRvb2x0aXAgPT09ICdzdHJpbmcnID8gdG9vbHRpcCA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gKFxuICAgIDxUb29sdGlwIGNvbnRlbnQ9e3Rvb2x0aXB9IHBsYWNlbWVudD17dG9vbHRpcFBsYWNlbWVudH0+XG4gICAgICB7dG8gPyAoXG4gICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgZmlsbD1cInRleHRcIlxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgaHJlZj17dG99XG4gICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgZmlsbD1cInRleHRcIlxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9Ub29sdGlwPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQWxlcnRTdGF0ZSB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcblxuaW1wb3J0IHsgU3RhdGUsIFN0YXRlVGFnIH0gZnJvbSAnLi4vU3RhdGVUYWcnO1xuXG5jb25zdCBhbGVydFN0YXRlVG9TdGF0ZTogUmVjb3JkPEFsZXJ0U3RhdGUsIFN0YXRlPiA9IHtcbiAgW0FsZXJ0U3RhdGUuQWN0aXZlXTogJ2JhZCcsXG4gIFtBbGVydFN0YXRlLlVucHJvY2Vzc2VkXTogJ25ldXRyYWwnLFxuICBbQWxlcnRTdGF0ZS5TdXBwcmVzc2VkXTogJ2luZm8nLFxufTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc3RhdGU6IEFsZXJ0U3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBBbUFsZXJ0U3RhdGVUYWc6IEZDPFByb3BzPiA9ICh7IHN0YXRlIH0pID0+IDxTdGF0ZVRhZyBzdGF0ZT17YWxlcnRTdGF0ZVRvU3RhdGVbc3RhdGVdfT57c3RhdGV9PC9TdGF0ZVRhZz47XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgZGF0ZVRpbWUsIEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJhZGdlLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQWxlcnQsIEFsZXJ0aW5nUnVsZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMnO1xuaW1wb3J0IHsgZmV0Y2hBbGxQcm9tQW5kUnVsZXJSdWxlc0FjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgTWF0Y2hlckZpZWxkVmFsdWUsIFNpbGVuY2VGb3JtRmllbGRzIH0gZnJvbSAnLi4vLi4vdHlwZXMvc2lsZW5jZS1mb3JtJztcbmltcG9ydCB7IGZpbmRBbGVydEluc3RhbmNlc1dpdGhNYXRjaGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL21hdGNoZXJzJztcbmltcG9ydCB7IGlzQWxlcnRpbmdSdWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZXMnO1xuaW1wb3J0IHsgQWxlcnRMYWJlbHMgfSBmcm9tICcuLi9BbGVydExhYmVscyc7XG5pbXBvcnQgeyBEeW5hbWljVGFibGUsIER5bmFtaWNUYWJsZUNvbHVtblByb3BzLCBEeW5hbWljVGFibGVJdGVtUHJvcHMgfSBmcm9tICcuLi9EeW5hbWljVGFibGUnO1xuaW1wb3J0IHsgQWxlcnRTdGF0ZVRhZyB9IGZyb20gJy4uL3J1bGVzL0FsZXJ0U3RhdGVUYWcnO1xuXG50eXBlIE1hdGNoZWRSdWxlc1RhYmxlSXRlbVByb3BzID0gRHluYW1pY1RhYmxlSXRlbVByb3BzPHtcbiAgbWF0Y2hlZEluc3RhbmNlOiBBbGVydDtcbn0+O1xudHlwZSBNYXRjaGVkUnVsZXNUYWJsZUNvbHVtblByb3BzID0gRHluYW1pY1RhYmxlQ29sdW1uUHJvcHM8eyBtYXRjaGVkSW5zdGFuY2U6IEFsZXJ0IH0+O1xuXG5leHBvcnQgY29uc3QgTWF0Y2hlZFNpbGVuY2VkUnVsZXMgPSAoKSA9PiB7XG4gIGNvbnN0IFttYXRjaGVkQWxlcnRSdWxlcywgc2V0TWF0Y2hlZEFsZXJ0UnVsZXNdID0gdXNlU3RhdGU8TWF0Y2hlZFJ1bGVzVGFibGVJdGVtUHJvcHNbXT4oW10pO1xuICBjb25zdCBmb3JtQXBpID0gdXNlRm9ybUNvbnRleHQ8U2lsZW5jZUZvcm1GaWVsZHM+KCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyB3YXRjaCB9ID0gZm9ybUFwaTtcbiAgY29uc3QgbWF0Y2hlcnM6IE1hdGNoZXJGaWVsZFZhbHVlW10gPSB3YXRjaCgnbWF0Y2hlcnMnKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBjb2x1bW5zID0gdXNlQ29sdW1ucygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hBbGxQcm9tQW5kUnVsZXJSdWxlc0FjdGlvbigpKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgY29uc3QgY29tYmluZWROYW1lc3BhY2VzID0gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcygpO1xuICB1c2VEZWJvdW5jZShcbiAgICAoKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVkSW5zdGFuY2VzID0gY29tYmluZWROYW1lc3BhY2VzLmZsYXRNYXAoKG5hbWVzcGFjZSkgPT4ge1xuICAgICAgICByZXR1cm4gbmFtZXNwYWNlLmdyb3Vwcy5mbGF0TWFwKChncm91cCkgPT4ge1xuICAgICAgICAgIHJldHVybiBncm91cC5ydWxlc1xuICAgICAgICAgICAgLm1hcCgoY29tYmluZWRSdWxlKSA9PiBjb21iaW5lZFJ1bGUucHJvbVJ1bGUpXG4gICAgICAgICAgICAuZmlsdGVyKChydWxlKTogcnVsZSBpcyBBbGVydGluZ1J1bGUgPT4gaXNBbGVydGluZ1J1bGUocnVsZSkpXG4gICAgICAgICAgICAuZmxhdE1hcCgocnVsZSkgPT4gZmluZEFsZXJ0SW5zdGFuY2VzV2l0aE1hdGNoZXJzKHJ1bGUuYWxlcnRzID8/IFtdLCBtYXRjaGVycykpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgc2V0TWF0Y2hlZEFsZXJ0UnVsZXMobWF0Y2hlZEluc3RhbmNlcyk7XG4gICAgfSxcbiAgICA1MDAsXG4gICAgW2NvbWJpbmVkTmFtZXNwYWNlcywgbWF0Y2hlcnNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgQWZmZWN0ZWQgYWxlcnQgaW5zdGFuY2VzXG4gICAgICAgIHttYXRjaGVkQWxlcnRSdWxlcy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDxCYWRnZSBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZX0gY29sb3I9XCJibHVlXCIgdGV4dD17bWF0Y2hlZEFsZXJ0UnVsZXMubGVuZ3RofSAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvaDQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cbiAgICAgICAge21hdGNoZXJzLmV2ZXJ5KChtYXRjaGVyKSA9PiAhbWF0Y2hlci52YWx1ZSAmJiAhbWF0Y2hlci5uYW1lKSA/IChcbiAgICAgICAgICA8c3Bhbj5BZGQgYSB2YWxpZCBtYXRjaGVyIHRvIHNlZSBhZmZlY3RlZCBhbGVydHM8L3NwYW4+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxEeW5hbWljVGFibGUgaXRlbXM9e21hdGNoZWRBbGVydFJ1bGVzLnNsaWNlKDAsIDUpID8/IFtdfSBpc0V4cGFuZGFibGU9e2ZhbHNlfSBjb2xzPXtjb2x1bW5zfSAvPlxuICAgICAgICAgICAge21hdGNoZWRBbGVydFJ1bGVzLmxlbmd0aCA+IDUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vcmVNYXRjaGVzfT5hbmQge21hdGNoZWRBbGVydFJ1bGVzLmxlbmd0aCAtIDV9IG1vcmU8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIHVzZUNvbHVtbnMoKTogTWF0Y2hlZFJ1bGVzVGFibGVDb2x1bW5Qcm9wc1tdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBpZDogJ3N0YXRlJyxcbiAgICAgIGxhYmVsOiAnU3RhdGUnLFxuICAgICAgcmVuZGVyQ2VsbDogZnVuY3Rpb24gcmVuZGVyU3RhdGVUYWcoeyBkYXRhOiB7IG1hdGNoZWRJbnN0YW5jZSB9IH0pIHtcbiAgICAgICAgcmV0dXJuIDxBbGVydFN0YXRlVGFnIHN0YXRlPXttYXRjaGVkSW5zdGFuY2Uuc3RhdGV9IC8+O1xuICAgICAgfSxcbiAgICAgIHNpemU6ICcxNjBweCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2xhYmVscycsXG4gICAgICBsYWJlbDogJ0xhYmVscycsXG4gICAgICByZW5kZXJDZWxsOiBmdW5jdGlvbiByZW5kZXJOYW1lKHsgZGF0YTogeyBtYXRjaGVkSW5zdGFuY2UgfSB9KSB7XG4gICAgICAgIHJldHVybiA8QWxlcnRMYWJlbHMgbGFiZWxzPXttYXRjaGVkSW5zdGFuY2UubGFiZWxzfSAvPjtcbiAgICAgIH0sXG4gICAgICBzaXplOiAnMjUwcHgnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdjcmVhdGVkJyxcbiAgICAgIGxhYmVsOiAnQ3JlYXRlZCcsXG4gICAgICByZW5kZXJDZWxsOiBmdW5jdGlvbiByZW5kZXJTdW1tYXJ5KHsgZGF0YTogeyBtYXRjaGVkSW5zdGFuY2UgfSB9KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHttYXRjaGVkSW5zdGFuY2UuYWN0aXZlQXQuc3RhcnRzV2l0aCgnMDAwMScpXG4gICAgICAgICAgICAgID8gJy0nXG4gICAgICAgICAgICAgIDogZGF0ZVRpbWUobWF0Y2hlZEluc3RhbmNlLmFjdGl2ZUF0KS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBzaXplOiAnNDAwcHgnLFxuICAgIH0sXG4gIF07XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgdGFibGU6IGNzc2BcbiAgICBtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLmxnfXB4O1xuICBgLFxuICBtb3JlTWF0Y2hlczogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIHRpdGxlOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBgLFxuICBiYWRnZTogY3NzYFxuICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBUYWdMaXN0LCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgTWF0Y2hlciB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcblxuaW1wb3J0IHsgbWF0Y2hlclRvT3BlcmF0b3IgfSBmcm9tICcuLi8uLi91dGlscy9hbGVydG1hbmFnZXInO1xuXG50eXBlIE1hdGNoZXJzUHJvcHMgPSB7IG1hdGNoZXJzOiBNYXRjaGVyW10gfTtcblxuZXhwb3J0IGNvbnN0IE1hdGNoZXJzOiBGQzxNYXRjaGVyc1Byb3BzPiA9ICh7IG1hdGNoZXJzIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VGFnTGlzdFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50YWdzfVxuICAgICAgICB0YWdzPXttYXRjaGVycy5tYXAoKG1hdGNoZXIpID0+IGAke21hdGNoZXIubmFtZX0ke21hdGNoZXJUb09wZXJhdG9yKG1hdGNoZXIpfSR7bWF0Y2hlci52YWx1ZX1gKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAoKSA9PiAoe1xuICB0YWdzOiBjc3NgXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0LCB1c2VGaWVsZEFycmF5IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgSW5wdXQsIEljb25CdXR0b24sIElucHV0Q29udHJvbCwgdXNlU3R5bGVzMiwgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgTWF0Y2hlck9wZXJhdG9yIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyBTaWxlbmNlRm9ybUZpZWxkcyB9IGZyb20gJy4uLy4uL3R5cGVzL3NpbGVuY2UtZm9ybSc7XG5pbXBvcnQgeyBtYXRjaGVyRmllbGRPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWxlcnRtYW5hZ2VyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5jb25zdCBNYXRjaGVyc0ZpZWxkOiBGQzxQcm9wcz4gPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGZvcm1BcGkgPSB1c2VGb3JtQ29udGV4dDxTaWxlbmNlRm9ybUZpZWxkcz4oKTtcbiAgY29uc3Qge1xuICAgIGNvbnRyb2wsXG4gICAgcmVnaXN0ZXIsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gZm9ybUFwaTtcblxuICBjb25zdCB7IGZpZWxkczogbWF0Y2hlcnMgPSBbXSwgYXBwZW5kLCByZW1vdmUgfSA9IHVzZUZpZWxkQXJyYXk8U2lsZW5jZUZvcm1GaWVsZHM+KHsgbmFtZTogJ21hdGNoZXJzJyB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeChjbGFzc05hbWUsIHN0eWxlcy53cmFwcGVyKX0+XG4gICAgICA8RmllbGQgbGFiZWw9XCJNYXRjaGluZyBsYWJlbHNcIiByZXF1aXJlZD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hdGNoZXJzfT5cbiAgICAgICAgICAgIHttYXRjaGVycy5tYXAoKG1hdGNoZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9IGtleT17YCR7bWF0Y2hlci5pZH1gfSBkYXRhLXRlc3RpZD1cIm1hdGNoZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnM/Lm1hdGNoZXJzPy5baW5kZXhdPy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzPy5tYXRjaGVycz8uW2luZGV4XT8ubmFtZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGBtYXRjaGVycy4ke2luZGV4fS5uYW1lYCBhcyBjb25zdCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXttYXRjaGVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPXsnT3BlcmF0b3InfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSh2YWx1ZS52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1hdGNoZXJPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXttYXRjaGVyRmllbGRPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlcmF0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bWF0Y2hlci5vcGVyYXRvciB8fCBtYXRjaGVyRmllbGRPcHRpb25zWzBdLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BtYXRjaGVycy4ke2luZGV4fS5vcGVyYXRvcmAgYXMgY29uc3R9XG4gICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0gfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzPy5tYXRjaGVycz8uW2luZGV4XT8udmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnM/Lm1hdGNoZXJzPy5baW5kZXhdPy52YWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGBtYXRjaGVycy4ke2luZGV4fS52YWx1ZWAgYXMgY29uc3QsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiAnUmVxdWlyZWQuJyB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bWF0Y2hlci52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICB7bWF0Y2hlcnMubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmVtb3ZlQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJSZW1vdmUgbWF0Y2hlclwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT17J3RyYXNoLWFsdCd9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3TWF0Y2hlciA9IHsgbmFtZTogJycsIHZhbHVlOiAnJywgb3BlcmF0b3I6IE1hdGNoZXJPcGVyYXRvci5lcXVhbCB9O1xuICAgICAgICAgICAgICBhcHBlbmQobmV3TWF0Y2hlcik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZCBtYXRjaGVyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GaWVsZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIHdyYXBwZXI6IGNzc2BcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgICByb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9ICR7dGhlbWUuc3BhY2luZygxKX0gMCAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgICAgJiA+ICogKyAqIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICB9XG4gICAgYCxcbiAgICByZW1vdmVCdXR0b246IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIuNSl9O1xuICAgIGAsXG4gICAgbWF0Y2hlck9wdGlvbnM6IGNzc2BcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7XG4gICAgYCxcbiAgICBtYXRjaGVyczogY3NzYFxuICAgICAgbWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5zbX1weDtcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDEpfSAwO1xuICAgICAgcGFkZGluZy10b3A6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICBgLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWF0Y2hlcnNGaWVsZDtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2FsbFRvQWN0aW9uQ2FyZCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBFbXB0eUxpc3RDVEEgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9FbXB0eUxpc3RDVEEvRW1wdHlMaXN0Q1RBJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5cbmltcG9ydCB7IGdldEluc3RhbmNlc1Blcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWNjZXNzLWNvbnRyb2wnO1xuaW1wb3J0IHsgbWFrZUFNTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuXG50eXBlIFByb3BzID0ge1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgTm9TaWxlbmNlc1NwbGFzaDogRkM8UHJvcHM+ID0gKHsgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHBlcm1pc3Npb25zID0gZ2V0SW5zdGFuY2VzUGVybWlzc2lvbnMoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG5cbiAgaWYgKGNvbnRleHRTcnYuaGFzQWNjZXNzKHBlcm1pc3Npb25zLmNyZWF0ZSwgY29udGV4dFNydi5pc0VkaXRvcikpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVtcHR5TGlzdENUQVxuICAgICAgICB0aXRsZT1cIllvdSBoYXZlbid0IGNyZWF0ZWQgYW55IHNpbGVuY2VzIHlldFwiXG4gICAgICAgIGJ1dHRvbkljb249XCJiZWxsLXNsYXNoXCJcbiAgICAgICAgYnV0dG9uTGluaz17bWFrZUFNTGluaygnYWxlcnRpbmcvc2lsZW5jZS9uZXcnLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKX1cbiAgICAgICAgYnV0dG9uVGl0bGU9XCJOZXcgc2lsZW5jZVwiXG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIDxDYWxsVG9BY3Rpb25DYXJkIGNhbGxUb0FjdGlvbkVsZW1lbnQ9ezxkaXYgLz59IG1lc3NhZ2U9XCJObyBzaWxlbmNlcyBmb3VuZC5cIiAvPjtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZGF0ZU1hdGgsIEdyYWZhbmFUaGVtZTIsIGludGVydmFsVG9BYmJyZXZpYXRlZER1cmF0aW9uU3RyaW5nIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgU2lsZW5jZWRBbGVydHNUYWJsZSBmcm9tICcuL1NpbGVuY2VkQWxlcnRzVGFibGUnO1xuaW1wb3J0IHsgU2lsZW5jZVRhYmxlSXRlbSB9IGZyb20gJy4vU2lsZW5jZXNUYWJsZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNpbGVuY2U6IFNpbGVuY2VUYWJsZUl0ZW07XG59XG5cbmV4cG9ydCBjb25zdCBTaWxlbmNlRGV0YWlscyA9ICh7IHNpbGVuY2UgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBzdGFydHNBdCwgZW5kc0F0LCBjb21tZW50LCBjcmVhdGVkQnksIHNpbGVuY2VkQWxlcnRzIH0gPSBzaWxlbmNlO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgZGF0ZURpc3BsYXlGb3JtYXQgPSAnWVlZWS1NTS1ERCBISDptbSc7XG4gIGNvbnN0IHN0YXJ0c0F0RGF0ZSA9IGRhdGVNYXRoLnBhcnNlKHN0YXJ0c0F0KTtcbiAgY29uc3QgZW5kc0F0RGF0ZSA9IGRhdGVNYXRoLnBhcnNlKGVuZHNBdCk7XG4gIGNvbnN0IGR1cmF0aW9uID0gaW50ZXJ2YWxUb0FiYnJldmlhdGVkRHVyYXRpb25TdHJpbmcoeyBzdGFydDogbmV3IERhdGUoc3RhcnRzQXQpLCBlbmQ6IG5ldyBEYXRlKGVuZHNBdCkgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+Q29tbWVudDwvZGl2PlxuICAgICAgPGRpdj57Y29tbWVudH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlNjaGVkdWxlPC9kaXY+XG4gICAgICA8ZGl2PntgJHtzdGFydHNBdERhdGU/LmZvcm1hdChkYXRlRGlzcGxheUZvcm1hdCl9IC0gJHtlbmRzQXREYXRlPy5mb3JtYXQoZGF0ZURpc3BsYXlGb3JtYXQpfWB9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5EdXJhdGlvbjwvZGl2PlxuICAgICAgPGRpdj4ge2R1cmF0aW9ufTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+Q3JlYXRlZCBieTwvZGl2PlxuICAgICAgPGRpdj4ge2NyZWF0ZWRCeX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PkFmZmVjdGVkIGFsZXJ0czwvZGl2PlxuICAgICAgPFNpbGVuY2VkQWxlcnRzVGFibGUgc2lsZW5jZWRBbGVydHM9e3NpbGVuY2VkQWxlcnRzfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBjb250YWluZXI6IGNzc2BcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDlmcjtcbiAgICBncmlkLXJvdy1nYXA6IDFyZW07XG4gIGAsXG4gIHRpdGxlOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQucHJpbWFyeX07XG4gIGAsXG4gIHJvdzogY3NzYFxuICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDEsIDApfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250cm9sbGVyLCB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IGRhdGVUaW1lLCBHcmFmYW5hVGhlbWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZpZWxkLCBUaW1lUmFuZ2VJbnB1dCwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBTaWxlbmNlRm9ybUZpZWxkcyB9IGZyb20gJy4uLy4uL3R5cGVzL3NpbGVuY2UtZm9ybSc7XG5cbmV4cG9ydCBjb25zdCBTaWxlbmNlUGVyaW9kID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbnRyb2wsIGdldFZhbHVlcyB9ID0gdXNlRm9ybUNvbnRleHQ8U2lsZW5jZUZvcm1GaWVsZHM+KCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuICBjb25zdCB7XG4gICAgZmllbGQ6IHsgb25DaGFuZ2U6IG9uQ2hhbmdlU3RhcnRzQXQsIHZhbHVlOiBzdGFydHNBdCB9LFxuICAgIGZpZWxkU3RhdGU6IHsgaW52YWxpZDogc3RhcnRzQXRJbnZhbGlkIH0sXG4gIH0gPSB1c2VDb250cm9sbGVyKHtcbiAgICBuYW1lOiAnc3RhcnRzQXQnLFxuICAgIGNvbnRyb2wsXG4gICAgcnVsZXM6IHtcbiAgICAgIHZhbGlkYXRlOiAodmFsdWUpID0+IGdldFZhbHVlcygpLmVuZHNBdCA+IHZhbHVlLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHtcbiAgICBmaWVsZDogeyBvbkNoYW5nZTogb25DaGFuZ2VFbmRzQXQsIHZhbHVlOiBlbmRzQXQgfSxcbiAgICBmaWVsZFN0YXRlOiB7IGludmFsaWQ6IGVuZHNBdEludmFsaWQgfSxcbiAgfSA9IHVzZUNvbnRyb2xsZXIoe1xuICAgIG5hbWU6ICdlbmRzQXQnLFxuICAgIGNvbnRyb2wsXG4gICAgcnVsZXM6IHtcbiAgICAgIHZhbGlkYXRlOiAodmFsdWUpID0+IGdldFZhbHVlcygpLnN0YXJ0c0F0IDwgdmFsdWUsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3Qge1xuICAgIGZpZWxkOiB7IG9uQ2hhbmdlOiBvbkNoYW5nZVRpbWVab25lLCB2YWx1ZTogdGltZVpvbmUgfSxcbiAgfSA9IHVzZUNvbnRyb2xsZXIoe1xuICAgIG5hbWU6ICd0aW1lWm9uZScsXG4gICAgY29udHJvbCxcbiAgfSk7XG5cbiAgY29uc3QgaW52YWxpZCA9IHN0YXJ0c0F0SW52YWxpZCB8fCBlbmRzQXRJbnZhbGlkO1xuXG4gIGNvbnN0IGZyb20gPSBkYXRlVGltZShzdGFydHNBdCk7XG4gIGNvbnN0IHRvID0gZGF0ZVRpbWUoZW5kc0F0KTtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZFxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGltZVJhbmdlfVxuICAgICAgbGFiZWw9XCJTaWxlbmNlIHN0YXJ0IGFuZCBlbmRcIlxuICAgICAgZXJyb3I9e2ludmFsaWQgPyAnVG8gaXMgYmVmb3JlIG9yIHRoZSBzYW1lIGFzIGZyb20nIDogJyd9XG4gICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgID5cbiAgICAgIDxUaW1lUmFuZ2VJbnB1dFxuICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgIGZyb20sXG4gICAgICAgICAgdG8sXG4gICAgICAgICAgcmF3OiB7XG4gICAgICAgICAgICBmcm9tLFxuICAgICAgICAgICAgdG8sXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgdGltZVpvbmU9e3RpbWVab25lfVxuICAgICAgICBvbkNoYW5nZT17KG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2VTdGFydHNBdChkYXRlVGltZShuZXdWYWx1ZS5mcm9tKSk7XG4gICAgICAgICAgb25DaGFuZ2VFbmRzQXQoZGF0ZVRpbWUobmV3VmFsdWUudG8pKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25DaGFuZ2VUaW1lWm9uZT17KG5ld1ZhbHVlKSA9PiBvbkNoYW5nZVRpbWVab25lKG5ld1ZhbHVlKX1cbiAgICAgICAgaGlkZVRpbWVab25lPXtmYWxzZX1cbiAgICAgICAgaGlkZVF1aWNrUmFuZ2VzPXt0cnVlfVxuICAgICAgICBwbGFjZWhvbGRlcj17J1NlbGVjdCB0aW1lIHJhbmdlJ31cbiAgICAgIC8+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICB0aW1lUmFuZ2U6IGNzc2BcbiAgICB3aWR0aDogNDAwcHg7XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2lsZW5jZVN0YXRlIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyBTdGF0ZSwgU3RhdGVUYWcgfSBmcm9tICcuLi9TdGF0ZVRhZyc7XG5cbmNvbnN0IHNpbGVuY2VTdGF0ZVRvU3RhdGU6IFJlY29yZDxTaWxlbmNlU3RhdGUsIFN0YXRlPiA9IHtcbiAgW1NpbGVuY2VTdGF0ZS5BY3RpdmVdOiAnZ29vZCcsXG4gIFtTaWxlbmNlU3RhdGUuRXhwaXJlZF06ICduZXV0cmFsJyxcbiAgW1NpbGVuY2VTdGF0ZS5QZW5kaW5nXTogJ25ldXRyYWwnLFxufTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc3RhdGU6IFNpbGVuY2VTdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IFNpbGVuY2VTdGF0ZVRhZzogRkM8UHJvcHM+ID0gKHsgc3RhdGUgfSkgPT4gKFxuICA8U3RhdGVUYWcgc3RhdGU9e3NpbGVuY2VTdGF0ZVRvU3RhdGVbc3RhdGVdfT57c3RhdGV9PC9TdGF0ZVRhZz5cbik7XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEFsZXJ0bWFuYWdlckFsZXJ0IH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRBbGVydFRhYmxlU3R5bGVzIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3RhYmxlJztcblxuaW1wb3J0IHsgU2lsZW5jZWRBbGVydHNUYWJsZVJvdyB9IGZyb20gJy4vU2lsZW5jZWRBbGVydHNUYWJsZVJvdyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNpbGVuY2VkQWxlcnRzOiBBbGVydG1hbmFnZXJBbGVydFtdO1xufVxuXG5jb25zdCBTaWxlbmNlZEFsZXJ0c1RhYmxlOiBGQzxQcm9wcz4gPSAoeyBzaWxlbmNlZEFsZXJ0cyB9KSA9PiB7XG4gIGNvbnN0IHRhYmxlU3R5bGVzID0gdXNlU3R5bGVzMihnZXRBbGVydFRhYmxlU3R5bGVzKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGlmICghIXNpbGVuY2VkQWxlcnRzLmxlbmd0aCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtjeCh0YWJsZVN0eWxlcy50YWJsZSwgc3R5bGVzLnRhYmxlTWFyZ2luKX0+XG4gICAgICAgIDxjb2xncm91cD5cbiAgICAgICAgICA8Y29sIGNsYXNzTmFtZT17dGFibGVTdHlsZXMuY29sRXhwYW5kfSAvPlxuICAgICAgICAgIDxjb2wgY2xhc3NOYW1lPXtzdHlsZXMuY29sU3RhdGV9IC8+XG4gICAgICAgICAgPGNvbCAvPlxuICAgICAgICAgIDxjb2wgY2xhc3NOYW1lPXtzdHlsZXMuY29sTmFtZX0gLz5cbiAgICAgICAgPC9jb2xncm91cD5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgPHRoPlN0YXRlPC90aD5cbiAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgPHRoPkFsZXJ0IG5hbWU8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7c2lsZW5jZWRBbGVydHMubWFwKChhbGVydCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxTaWxlbmNlZEFsZXJ0c1RhYmxlUm93XG4gICAgICAgICAgICAgICAga2V5PXthbGVydC5maW5nZXJwcmludH1cbiAgICAgICAgICAgICAgICBhbGVydD17YWxlcnR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbmRleCAlIDIgPT09IDAgPyB0YWJsZVN0eWxlcy5ldmVuUm93IDogJyd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHRhYmxlTWFyZ2luOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbiAgY29sU3RhdGU6IGNzc2BcbiAgICB3aWR0aDogMTEwcHg7XG4gIGAsXG4gIGNvbE5hbWU6IGNzc2BcbiAgICB3aWR0aDogNjUlO1xuICBgLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpbGVuY2VkQWxlcnRzVGFibGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnRtYW5hZ2VyQWxlcnQgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IEFsZXJ0TGFiZWxzIH0gZnJvbSAnLi4vQWxlcnRMYWJlbHMnO1xuaW1wb3J0IHsgQ29sbGFwc2VUb2dnbGUgfSBmcm9tICcuLi9Db2xsYXBzZVRvZ2dsZSc7XG5cbmltcG9ydCB7IEFtQWxlcnRTdGF0ZVRhZyB9IGZyb20gJy4vQW1BbGVydFN0YXRlVGFnJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYWxlcnQ6IEFsZXJ0bWFuYWdlckFsZXJ0O1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTaWxlbmNlZEFsZXJ0c1RhYmxlUm93OiBGQzxQcm9wcz4gPSAoeyBhbGVydCwgY2xhc3NOYW1lIH0pID0+IHtcbiAgY29uc3QgW2lzQ29sbGFwc2VkLCBzZXRJc0NvbGxhcHNlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBkdXJhdGlvbiA9IGludGVydmFsVG9BYmJyZXZpYXRlZER1cmF0aW9uU3RyaW5nKHtcbiAgICBzdGFydDogbmV3IERhdGUoYWxlcnQuc3RhcnRzQXQpLFxuICAgIGVuZDogbmV3IERhdGUoYWxlcnQuZW5kc0F0KSxcbiAgfSk7XG4gIGNvbnN0IGFsZXJ0TmFtZSA9IE9iamVjdC5lbnRyaWVzKGFsZXJ0LmxhYmVscykucmVkdWNlKChuYW1lLCBbbGFiZWxLZXksIGxhYmVsVmFsdWVdKSA9PiB7XG4gICAgaWYgKGxhYmVsS2V5ID09PSAnYWxlcnRuYW1lJyB8fCBsYWJlbEtleSA9PT0gJ19fYWxlcnRfcnVsZV90aXRsZV9fJykge1xuICAgICAgbmFtZSA9IGxhYmVsVmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBuYW1lO1xuICB9LCAnJyk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx0ciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8Q29sbGFwc2VUb2dnbGUgaXNDb2xsYXBzZWQ9e2lzQ29sbGFwc2VkfSBvblRvZ2dsZT17KGNvbGxhcHNlZCkgPT4gc2V0SXNDb2xsYXBzZWQoY29sbGFwc2VkKX0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxBbUFsZXJ0U3RhdGVUYWcgc3RhdGU9e2FsZXJ0LnN0YXR1cy5zdGF0ZX0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPmZvciB7ZHVyYXRpb259IHNlY29uZHM8L3RkPlxuICAgICAgICA8dGQ+e2FsZXJ0TmFtZX08L3RkPlxuICAgICAgPC90cj5cbiAgICAgIHshaXNDb2xsYXBzZWQgJiYgKFxuICAgICAgICA8dHIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgIDx0ZCBjb2xTcGFuPXs1fT5cbiAgICAgICAgICAgIDxBbGVydExhYmVscyBsYWJlbHM9e2FsZXJ0LmxhYmVsc30gLz5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHBpY2tCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybSwgRm9ybVByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQge1xuICBEZWZhdWx0VGltZVpvbmUsXG4gIHBhcnNlRHVyYXRpb24sXG4gIGludGVydmFsVG9BYmJyZXZpYXRlZER1cmF0aW9uU3RyaW5nLFxuICBhZGREdXJhdGlvblRvRGF0ZSxcbiAgZGF0ZVRpbWUsXG4gIGlzVmFsaWREYXRlLFxuICBHcmFmYW5hVGhlbWUyLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgRmllbGRTZXQsIElucHV0LCBMaW5rQnV0dG9uLCBUZXh0QXJlYSwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHVzZUNsZWFudXAgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VDbGVhbnVwJztcbmltcG9ydCB7IE1hdGNoZXJPcGVyYXRvciwgU2lsZW5jZSwgU2lsZW5jZUNyZWF0ZVBheWxvYWQgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IHVzZVVSTFNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVSTFNlYXJjaFBhcmFtcyc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IGNyZWF0ZU9yVXBkYXRlU2lsZW5jZUFjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgU2lsZW5jZUZvcm1GaWVsZHMgfSBmcm9tICcuLi8uLi90eXBlcy9zaWxlbmNlLWZvcm0nO1xuaW1wb3J0IHsgbWF0Y2hlclRvTWF0Y2hlckZpZWxkLCBtYXRjaGVyRmllbGRUb01hdGNoZXIgfSBmcm9tICcuLi8uLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgcGFyc2VRdWVyeVBhcmFtTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi91dGlscy9tYXRjaGVycyc7XG5pbXBvcnQgeyBtYWtlQU1MaW5rIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5cbmltcG9ydCB7IE1hdGNoZWRTaWxlbmNlZFJ1bGVzIH0gZnJvbSAnLi9NYXRjaGVkU2lsZW5jZWRSdWxlcyc7XG5pbXBvcnQgTWF0Y2hlcnNGaWVsZCBmcm9tICcuL01hdGNoZXJzRmllbGQnO1xuaW1wb3J0IHsgU2lsZW5jZVBlcmlvZCB9IGZyb20gJy4vU2lsZW5jZVBlcmlvZCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNpbGVuY2U/OiBTaWxlbmNlO1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmc7XG59XG5cbmNvbnN0IGRlZmF1bHRzRnJvbVF1ZXJ5ID0gKHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zKTogUGFydGlhbDxTaWxlbmNlRm9ybUZpZWxkcz4gPT4ge1xuICBjb25zdCBkZWZhdWx0czogUGFydGlhbDxTaWxlbmNlRm9ybUZpZWxkcz4gPSB7fTtcblxuICBjb25zdCBjb21tZW50ID0gc2VhcmNoUGFyYW1zLmdldCgnY29tbWVudCcpO1xuICBjb25zdCBtYXRjaGVycyA9IHNlYXJjaFBhcmFtcy5nZXRBbGwoJ21hdGNoZXInKTtcblxuICBjb25zdCBmb3JtTWF0Y2hlcnMgPSBwYXJzZVF1ZXJ5UGFyYW1NYXRjaGVycyhtYXRjaGVycyk7XG4gIGlmIChmb3JtTWF0Y2hlcnMubGVuZ3RoKSB7XG4gICAgZGVmYXVsdHMubWF0Y2hlcnMgPSBmb3JtTWF0Y2hlcnMubWFwKG1hdGNoZXJUb01hdGNoZXJGaWVsZCk7XG4gIH1cblxuICBpZiAoY29tbWVudCkge1xuICAgIGRlZmF1bHRzLmNvbW1lbnQgPSBjb21tZW50O1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRzO1xufTtcblxuY29uc3QgZ2V0RGVmYXVsdEZvcm1WYWx1ZXMgPSAoc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXMsIHNpbGVuY2U/OiBTaWxlbmNlKTogU2lsZW5jZUZvcm1GaWVsZHMgPT4ge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBpZiAoc2lsZW5jZSkge1xuICAgIGNvbnN0IGlzRXhwaXJlZCA9IERhdGUucGFyc2Uoc2lsZW5jZS5lbmRzQXQpIDwgRGF0ZS5ub3coKTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IGlzRXhwaXJlZFxuICAgICAgPyB7XG4gICAgICAgICAgc3RhcnQ6IG5vdyxcbiAgICAgICAgICBlbmQ6IGFkZER1cmF0aW9uVG9EYXRlKG5vdywgeyBob3VyczogMiB9KSxcbiAgICAgICAgfVxuICAgICAgOiB7IHN0YXJ0OiBuZXcgRGF0ZShzaWxlbmNlLnN0YXJ0c0F0KSwgZW5kOiBuZXcgRGF0ZShzaWxlbmNlLmVuZHNBdCkgfTtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHNpbGVuY2UuaWQsXG4gICAgICBzdGFydHNBdDogaW50ZXJ2YWwuc3RhcnQudG9JU09TdHJpbmcoKSxcbiAgICAgIGVuZHNBdDogaW50ZXJ2YWwuZW5kLnRvSVNPU3RyaW5nKCksXG4gICAgICBjb21tZW50OiBzaWxlbmNlLmNvbW1lbnQsXG4gICAgICBjcmVhdGVkQnk6IHNpbGVuY2UuY3JlYXRlZEJ5LFxuICAgICAgZHVyYXRpb246IGludGVydmFsVG9BYmJyZXZpYXRlZER1cmF0aW9uU3RyaW5nKGludGVydmFsKSxcbiAgICAgIGlzUmVnZXg6IGZhbHNlLFxuICAgICAgbWF0Y2hlcnM6IHNpbGVuY2UubWF0Y2hlcnM/Lm1hcChtYXRjaGVyVG9NYXRjaGVyRmllbGQpIHx8IFtdLFxuICAgICAgbWF0Y2hlck5hbWU6ICcnLFxuICAgICAgbWF0Y2hlclZhbHVlOiAnJyxcbiAgICAgIHRpbWVab25lOiBEZWZhdWx0VGltZVpvbmUsXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBlbmRzQXQgPSBhZGREdXJhdGlvblRvRGF0ZShub3csIHsgaG91cnM6IDIgfSk7IC8vIERlZmF1bHQgdGltZSBwZXJpb2QgaXMgbm93ICsgMmhcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6ICcnLFxuICAgICAgc3RhcnRzQXQ6IG5vdy50b0lTT1N0cmluZygpLFxuICAgICAgZW5kc0F0OiBlbmRzQXQudG9JU09TdHJpbmcoKSxcbiAgICAgIGNvbW1lbnQ6IGBjcmVhdGVkICR7ZGF0ZVRpbWUoKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW0nKX1gLFxuICAgICAgY3JlYXRlZEJ5OiBjb25maWcuYm9vdERhdGEudXNlci5uYW1lLFxuICAgICAgZHVyYXRpb246ICcyaCcsXG4gICAgICBpc1JlZ2V4OiBmYWxzZSxcbiAgICAgIG1hdGNoZXJzOiBbeyBuYW1lOiAnJywgdmFsdWU6ICcnLCBvcGVyYXRvcjogTWF0Y2hlck9wZXJhdG9yLmVxdWFsIH1dLFxuICAgICAgbWF0Y2hlck5hbWU6ICcnLFxuICAgICAgbWF0Y2hlclZhbHVlOiAnJyxcbiAgICAgIHRpbWVab25lOiBEZWZhdWx0VGltZVpvbmUsXG4gICAgICAuLi5kZWZhdWx0c0Zyb21RdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIH07XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBTaWxlbmNlc0VkaXRvcjogRkM8UHJvcHM+ID0gKHsgc2lsZW5jZSwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KSA9PiB7XG4gIGNvbnN0IFt1cmxTZWFyY2hQYXJhbXNdID0gdXNlVVJMU2VhcmNoUGFyYW1zKCk7XG5cbiAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IHVzZU1lbW8oKCkgPT4gZ2V0RGVmYXVsdEZvcm1WYWx1ZXModXJsU2VhcmNoUGFyYW1zLCBzaWxlbmNlKSwgW3NpbGVuY2UsIHVybFNlYXJjaFBhcmFtc10pO1xuICBjb25zdCBmb3JtQVBJID0gdXNlRm9ybSh7IGRlZmF1bHRWYWx1ZXMgfSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51cGRhdGVTaWxlbmNlKTtcblxuICB1c2VDbGVhbnVwKChzdGF0ZSkgPT4gc3RhdGUudW5pZmllZEFsZXJ0aW5nLnVwZGF0ZVNpbGVuY2UpO1xuXG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlLCB3YXRjaCwgc2V0VmFsdWUsIGNsZWFyRXJyb3JzIH0gPSBmb3JtQVBJO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IFNpbGVuY2VGb3JtRmllbGRzKSA9PiB7XG4gICAgY29uc3QgeyBpZCwgc3RhcnRzQXQsIGVuZHNBdCwgY29tbWVudCwgY3JlYXRlZEJ5LCBtYXRjaGVyczogbWF0Y2hlcnNGaWVsZHMgfSA9IGRhdGE7XG4gICAgY29uc3QgbWF0Y2hlcnMgPSBtYXRjaGVyc0ZpZWxkcy5tYXAobWF0Y2hlckZpZWxkVG9NYXRjaGVyKTtcbiAgICBjb25zdCBwYXlsb2FkID0gcGlja0J5KFxuICAgICAge1xuICAgICAgICBpZCxcbiAgICAgICAgc3RhcnRzQXQsXG4gICAgICAgIGVuZHNBdCxcbiAgICAgICAgY29tbWVudCxcbiAgICAgICAgY3JlYXRlZEJ5LFxuICAgICAgICBtYXRjaGVycyxcbiAgICAgIH0sXG4gICAgICAodmFsdWUpID0+ICEhdmFsdWVcbiAgICApIGFzIFNpbGVuY2VDcmVhdGVQYXlsb2FkO1xuICAgIGRpc3BhdGNoKFxuICAgICAgY3JlYXRlT3JVcGRhdGVTaWxlbmNlQWN0aW9uKHtcbiAgICAgICAgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSxcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgZXhpdE9uU2F2ZTogdHJ1ZSxcbiAgICAgICAgc3VjY2Vzc01lc3NhZ2U6IGBTaWxlbmNlICR7cGF5bG9hZC5pZCA/ICd1cGRhdGVkJyA6ICdjcmVhdGVkJ31gLFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGR1cmF0aW9uID0gd2F0Y2goJ2R1cmF0aW9uJyk7XG4gIGNvbnN0IHN0YXJ0c0F0ID0gd2F0Y2goJ3N0YXJ0c0F0Jyk7XG4gIGNvbnN0IGVuZHNBdCA9IHdhdGNoKCdlbmRzQXQnKTtcblxuICAvLyBLZWVwIGR1cmF0aW9uIGFuZCBlbmRzQXQgaW4gc3luY1xuICBjb25zdCBbcHJldkR1cmF0aW9uLCBzZXRQcmV2RHVyYXRpb25dID0gdXNlU3RhdGUoZHVyYXRpb24pO1xuICB1c2VEZWJvdW5jZShcbiAgICAoKSA9PiB7XG4gICAgICBpZiAoaXNWYWxpZERhdGUoc3RhcnRzQXQpICYmIGlzVmFsaWREYXRlKGVuZHNBdCkpIHtcbiAgICAgICAgaWYgKGR1cmF0aW9uICE9PSBwcmV2RHVyYXRpb24pIHtcbiAgICAgICAgICBzZXRWYWx1ZSgnZW5kc0F0JywgZGF0ZVRpbWUoYWRkRHVyYXRpb25Ub0RhdGUobmV3IERhdGUoc3RhcnRzQXQpLCBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uKSkpLnRvSVNPU3RyaW5nKCkpO1xuICAgICAgICAgIHNldFByZXZEdXJhdGlvbihkdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRWYWx1ZSA9IG5ldyBEYXRlKHN0YXJ0c0F0KS52YWx1ZU9mKCk7XG4gICAgICAgICAgY29uc3QgZW5kVmFsdWUgPSBuZXcgRGF0ZShlbmRzQXQpLnZhbHVlT2YoKTtcbiAgICAgICAgICBpZiAoZW5kVmFsdWUgPiBzdGFydFZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0RHVyYXRpb24gPSBpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyh7XG4gICAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZShzdGFydHNBdCksXG4gICAgICAgICAgICAgIGVuZDogbmV3IERhdGUoZW5kc0F0KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0VmFsdWUoJ2R1cmF0aW9uJywgbmV4dER1cmF0aW9uKTtcbiAgICAgICAgICAgIHNldFByZXZEdXJhdGlvbihuZXh0RHVyYXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgNzAwLFxuICAgIFtjbGVhckVycm9ycywgZHVyYXRpb24sIGVuZHNBdCwgcHJldkR1cmF0aW9uLCBzZXRWYWx1ZSwgc3RhcnRzQXRdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVByb3ZpZGVyIHsuLi5mb3JtQVBJfT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgPEZpZWxkU2V0IGxhYmVsPXtgJHtzaWxlbmNlID8gJ1JlY3JlYXRlIHNpbGVuY2UnIDogJ0NyZWF0ZSBzaWxlbmNlJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmZsZXhSb3csIHN0eWxlcy5zaWxlbmNlUGVyaW9kKX0+XG4gICAgICAgICAgICA8U2lsZW5jZVBlcmlvZCAvPlxuICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPVwiRHVyYXRpb25cIlxuICAgICAgICAgICAgICBpbnZhbGlkPXshIWZvcm1TdGF0ZS5lcnJvcnMuZHVyYXRpb259XG4gICAgICAgICAgICAgIGVycm9yPXtcbiAgICAgICAgICAgICAgICBmb3JtU3RhdGUuZXJyb3JzLmR1cmF0aW9uICYmXG4gICAgICAgICAgICAgICAgKGZvcm1TdGF0ZS5lcnJvcnMuZHVyYXRpb24udHlwZSA9PT0gJ3JlcXVpcmVkJyA/ICdSZXF1aXJlZCBmaWVsZCcgOiBmb3JtU3RhdGUuZXJyb3JzLmR1cmF0aW9uLm1lc3NhZ2UpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY3JlYXRlZEJ5fVxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZHVyYXRpb24nLCB7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwYXJzZUR1cmF0aW9uKHZhbHVlKSkubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgPyAnSW52YWxpZCBkdXJhdGlvbi4gVmFsaWQgZXhhbXBsZTogMWQgNGggKEF2YWlsYWJsZSB1bml0czogeSwgTSwgdywgZCwgaCwgbSwgcyknXG4gICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgaWQ9XCJkdXJhdGlvblwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPE1hdGNoZXJzRmllbGQgLz5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmZpZWxkLCBzdHlsZXMudGV4dEFyZWEpfVxuICAgICAgICAgICAgbGFiZWw9XCJDb21tZW50XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBlcnJvcj17Zm9ybVN0YXRlLmVycm9ycy5jb21tZW50Py5tZXNzYWdlfVxuICAgICAgICAgICAgaW52YWxpZD17ISFmb3JtU3RhdGUuZXJyb3JzLmNvbW1lbnR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignY29tbWVudCcsIHsgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0gfSl9XG4gICAgICAgICAgICAgIHJvd3M9ezV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGV0YWlscyBhYm91dCB0aGUgc2lsZW5jZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgPE1hdGNoZWRTaWxlbmNlZFJ1bGVzIC8+XG4gICAgICAgIDwvRmllbGRTZXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd30+XG4gICAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17dHJ1ZX0gaWNvbj1cImZhIGZhLXNwaW5uZXJcIiB2YXJpYW50PVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICBTYXZpbmcuLi5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyFsb2FkaW5nICYmIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvQnV0dG9uPn1cbiAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgaHJlZj17bWFrZUFNTGluaygnYWxlcnRpbmcvc2lsZW5jZXMnLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKX1cbiAgICAgICAgICAgIHZhcmlhbnQ9eydzZWNvbmRhcnknfVxuICAgICAgICAgICAgZmlsbD1cIm91dGxpbmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9Gb3JtUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGZpZWxkOiBjc3NgXG4gICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMSwgMCl9O1xuICBgLFxuICB0ZXh0QXJlYTogY3NzYFxuICAgIG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy52YWx1ZXMuc219cHg7XG4gIGAsXG4gIGNyZWF0ZWRCeTogY3NzYFxuICAgIHdpZHRoOiAyMDBweDtcbiAgYCxcbiAgZmxleFJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgICAmID4gKiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgfVxuICBgLFxuICBzaWxlbmNlUGVyaW9kOiBjc3NgXG4gICAgbWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy5zbX1weDtcbiAgYCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTaWxlbmNlc0VkaXRvcjtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBkZWJvdW5jZSwgdW5pcXVlSWQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICdAZ3JhZmFuYS9leHBlcmltZW50YWwnO1xuaW1wb3J0IHsgTGFiZWwsIEljb24sIElucHV0LCBUb29sdGlwLCBSYWRpb0J1dHRvbkdyb3VwLCB1c2VTdHlsZXMyLCBCdXR0b24sIEZpZWxkIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5pbXBvcnQgeyBTaWxlbmNlU3RhdGUgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IHBhcnNlTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgZ2V0U2lsZW5jZUZpbHRlcnNGcm9tVXJsUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWlzYyc7XG5cbmNvbnN0IHN0YXRlT3B0aW9uczogU2VsZWN0YWJsZVZhbHVlW10gPSBPYmplY3QuZW50cmllcyhTaWxlbmNlU3RhdGUpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiAoe1xuICBsYWJlbDoga2V5LFxuICB2YWx1ZSxcbn0pKTtcblxuY29uc3QgZ2V0UXVlcnlTdHJpbmdLZXkgPSAoKSA9PiB1bmlxdWVJZCgncXVlcnktc3RyaW5nLScpO1xuXG5leHBvcnQgY29uc3QgU2lsZW5jZXNGaWx0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtxdWVyeVN0cmluZ0tleSwgc2V0UXVlcnlTdHJpbmdLZXldID0gdXNlU3RhdGUoZ2V0UXVlcnlTdHJpbmdLZXkoKSk7XG4gIGNvbnN0IFtxdWVyeVBhcmFtcywgc2V0UXVlcnlQYXJhbXNdID0gdXNlUXVlcnlQYXJhbXMoKTtcbiAgY29uc3QgeyBxdWVyeVN0cmluZywgc2lsZW5jZVN0YXRlIH0gPSBnZXRTaWxlbmNlRmlsdGVyc0Zyb21VcmxQYXJhbXMocXVlcnlQYXJhbXMpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgaGFuZGxlUXVlcnlTdHJpbmdDaGFuZ2UgPSBkZWJvdW5jZSgoZTogRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBzZXRRdWVyeVBhcmFtcyh7IHF1ZXJ5U3RyaW5nOiB0YXJnZXQudmFsdWUgfHwgbnVsbCB9KTtcbiAgfSwgNDAwKTtcblxuICBjb25zdCBoYW5kbGVTaWxlbmNlU3RhdGVDaGFuZ2UgPSAoc3RhdGU6IHN0cmluZykgPT4ge1xuICAgIHNldFF1ZXJ5UGFyYW1zKHsgc2lsZW5jZVN0YXRlOiBzdGF0ZSB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhckZpbHRlcnMgPSAoKSA9PiB7XG4gICAgc2V0UXVlcnlQYXJhbXMoe1xuICAgICAgcXVlcnlTdHJpbmc6IG51bGwsXG4gICAgICBzaWxlbmNlU3RhdGU6IG51bGwsXG4gICAgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRRdWVyeVN0cmluZ0tleShnZXRRdWVyeVN0cmluZ0tleSgpKSk7XG4gIH07XG5cbiAgY29uc3QgaW5wdXRJbnZhbGlkID0gcXVlcnlTdHJpbmcgJiYgcXVlcnlTdHJpbmcubGVuZ3RoID4gMyA/IHBhcnNlTWF0Y2hlcnMocXVlcnlTdHJpbmcpLmxlbmd0aCA9PT0gMCA6IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgIDxGaWVsZFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yb3dDaGlsZH1cbiAgICAgICAgbGFiZWw9e1xuICAgICAgICAgIDxMYWJlbD5cbiAgICAgICAgICAgIDxTdGFjayBnYXA9ezAuNX0+XG4gICAgICAgICAgICAgIDxzcGFuPlNlYXJjaCBieSBtYXRjaGVyczwvc3Bhbj5cbiAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIEZpbHRlciBzaWxlbmNlcyBieSBtYXRjaGVycyB1c2luZyBhIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIG1hdGNoZXJzLCBpZTpcbiAgICAgICAgICAgICAgICAgICAgPHByZT57YHNldmVyaXR5PWNyaXRpY2FsLCBpbnN0YW5jZT1+Y2x1c3Rlci11cy0uK2B9PC9wcmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaW5mby1jaXJjbGVcIiBzaXplPVwic21cIiAvPlxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgIH1cbiAgICAgICAgaW52YWxpZD17aW5wdXRJbnZhbGlkfVxuICAgICAgICBlcnJvcj17aW5wdXRJbnZhbGlkID8gJ1F1ZXJ5IG11c3QgdXNlIHZhbGlkIG1hdGNoZXIgc3ludGF4JyA6IG51bGx9XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGtleT17cXVlcnlTdHJpbmdLZXl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSW5wdXR9XG4gICAgICAgICAgcHJlZml4PXs8SWNvbiBuYW1lPVwic2VhcmNoXCIgLz59XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVF1ZXJ5U3RyaW5nQ2hhbmdlfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cXVlcnlTdHJpbmcgPz8gJyd9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgIGRhdGEtdGVzdGlkPVwic2VhcmNoLXF1ZXJ5LWlucHV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8RmllbGQgY2xhc3NOYW1lPXtzdHlsZXMucm93Q2hpbGR9IGxhYmVsPVwiU3RhdGVcIj5cbiAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXAgb3B0aW9ucz17c3RhdGVPcHRpb25zfSB2YWx1ZT17c2lsZW5jZVN0YXRlfSBvbkNoYW5nZT17aGFuZGxlU2lsZW5jZVN0YXRlQ2hhbmdlfSAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIHsocXVlcnlTdHJpbmcgfHwgc2lsZW5jZVN0YXRlKSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93Q2hpbGR9PlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGljb249XCJ0aW1lc1wiIG9uQ2xpY2s9e2NsZWFyRmlsdGVyc30+XG4gICAgICAgICAgICBDbGVhciBmaWx0ZXJzXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgc2VhcmNoSW5wdXQ6IGNzc2BcbiAgICB3aWR0aDogMzYwcHg7XG4gIGAsXG4gIGZsZXhSb3c6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIuc3Ryb25nfTtcbiAgYCxcbiAgcm93Q2hpbGQ6IGNzc2BcbiAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MnB4O1xuICBgLFxuICBmaWVsZExhYmVsOiBjc3NgXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgZGF0ZU1hdGggfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnQGdyYWZhbmEvZXhwZXJpbWVudGFsJztcbmltcG9ydCB7IEljb24sIHVzZVN0eWxlczIsIExpbmssIEJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEFsZXJ0bWFuYWdlckFsZXJ0LCBTaWxlbmNlLCBTaWxlbmNlU3RhdGUgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmltcG9ydCB7IGV4cGlyZVNpbGVuY2VBY3Rpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldEluc3RhbmNlc1Blcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWNjZXNzLWNvbnRyb2wnO1xuaW1wb3J0IHsgcGFyc2VNYXRjaGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5pbXBvcnQgeyBnZXRTaWxlbmNlRmlsdGVyc0Zyb21VcmxQYXJhbXMsIG1ha2VBTUxpbmsgfSBmcm9tICcuLi8uLi91dGlscy9taXNjJztcbmltcG9ydCB7IEF1dGhvcml6ZSB9IGZyb20gJy4uL0F1dGhvcml6ZSc7XG5pbXBvcnQgeyBEeW5hbWljVGFibGUsIER5bmFtaWNUYWJsZUNvbHVtblByb3BzLCBEeW5hbWljVGFibGVJdGVtUHJvcHMgfSBmcm9tICcuLi9EeW5hbWljVGFibGUnO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uIH0gZnJvbSAnLi4vcnVsZXMvQWN0aW9uQnV0dG9uJztcbmltcG9ydCB7IEFjdGlvbkljb24gfSBmcm9tICcuLi9ydWxlcy9BY3Rpb25JY29uJztcblxuaW1wb3J0IHsgTWF0Y2hlcnMgfSBmcm9tICcuL01hdGNoZXJzJztcbmltcG9ydCB7IE5vU2lsZW5jZXNTcGxhc2ggfSBmcm9tICcuL05vU2lsZW5jZXNDVEEnO1xuaW1wb3J0IHsgU2lsZW5jZURldGFpbHMgfSBmcm9tICcuL1NpbGVuY2VEZXRhaWxzJztcbmltcG9ydCB7IFNpbGVuY2VTdGF0ZVRhZyB9IGZyb20gJy4vU2lsZW5jZVN0YXRlVGFnJztcbmltcG9ydCB7IFNpbGVuY2VzRmlsdGVyIH0gZnJvbSAnLi9TaWxlbmNlc0ZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lsZW5jZVRhYmxlSXRlbSBleHRlbmRzIFNpbGVuY2Uge1xuICBzaWxlbmNlZEFsZXJ0czogQWxlcnRtYW5hZ2VyQWxlcnRbXTtcbn1cblxudHlwZSBTaWxlbmNlVGFibGVDb2x1bW5Qcm9wcyA9IER5bmFtaWNUYWJsZUNvbHVtblByb3BzPFNpbGVuY2VUYWJsZUl0ZW0+O1xudHlwZSBTaWxlbmNlVGFibGVJdGVtUHJvcHMgPSBEeW5hbWljVGFibGVJdGVtUHJvcHM8U2lsZW5jZVRhYmxlSXRlbT47XG5pbnRlcmZhY2UgUHJvcHMge1xuICBzaWxlbmNlczogU2lsZW5jZVtdO1xuICBhbGVydE1hbmFnZXJBbGVydHM6IEFsZXJ0bWFuYWdlckFsZXJ0W107XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgU2lsZW5jZXNUYWJsZTogRkM8UHJvcHM+ID0gKHsgc2lsZW5jZXMsIGFsZXJ0TWFuYWdlckFsZXJ0cywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIGNvbnN0IGZpbHRlcmVkU2lsZW5jZXMgPSB1c2VGaWx0ZXJlZFNpbGVuY2VzKHNpbGVuY2VzKTtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBnZXRJbnN0YW5jZXNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcblxuICBjb25zdCB7IHNpbGVuY2VTdGF0ZSB9ID0gZ2V0U2lsZW5jZUZpbHRlcnNGcm9tVXJsUGFyYW1zKHF1ZXJ5UGFyYW1zKTtcblxuICBjb25zdCBzaG93RXhwaXJlZFNpbGVuY2VzQmFubmVyID1cbiAgICAhIWZpbHRlcmVkU2lsZW5jZXMubGVuZ3RoICYmIChzaWxlbmNlU3RhdGUgPT09IHVuZGVmaW5lZCB8fCBzaWxlbmNlU3RhdGUgPT09IFNpbGVuY2VTdGF0ZS5FeHBpcmVkKTtcblxuICBjb25zdCBjb2x1bW5zID0gdXNlQ29sdW1ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcblxuICBjb25zdCBpdGVtcyA9IHVzZU1lbW8oKCk6IFNpbGVuY2VUYWJsZUl0ZW1Qcm9wc1tdID0+IHtcbiAgICBjb25zdCBmaW5kU2lsZW5jZWRBbGVydHMgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIGFsZXJ0TWFuYWdlckFsZXJ0cy5maWx0ZXIoKGFsZXJ0KSA9PiBhbGVydC5zdGF0dXMuc2lsZW5jZWRCeS5pbmNsdWRlcyhpZCkpO1xuICAgIH07XG4gICAgcmV0dXJuIGZpbHRlcmVkU2lsZW5jZXMubWFwKChzaWxlbmNlKSA9PiB7XG4gICAgICBjb25zdCBzaWxlbmNlZEFsZXJ0cyA9IGZpbmRTaWxlbmNlZEFsZXJ0cyhzaWxlbmNlLmlkKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBzaWxlbmNlLmlkLFxuICAgICAgICBkYXRhOiB7IC4uLnNpbGVuY2UsIHNpbGVuY2VkQWxlcnRzIH0sXG4gICAgICB9O1xuICAgIH0pO1xuICB9LCBbZmlsdGVyZWRTaWxlbmNlcywgYWxlcnRNYW5hZ2VyQWxlcnRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGRhdGEtdGVzdGlkPVwic2lsZW5jZXMtdGFibGVcIj5cbiAgICAgIHshIXNpbGVuY2VzLmxlbmd0aCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFNpbGVuY2VzRmlsdGVyIC8+XG4gICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbcGVybWlzc2lvbnMuY3JlYXRlXX0gZmFsbGJhY2s9e2NvbnRleHRTcnYuaXNFZGl0b3J9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BCdXR0b25Db250YWluZXJ9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXttYWtlQU1MaW5rKCcvYWxlcnRpbmcvc2lsZW5jZS9uZXcnLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKX0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hZGROZXdTaWxlbmNlfSBpY29uPVwicGx1c1wiPlxuICAgICAgICAgICAgICAgICAgTmV3IFNpbGVuY2VcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICAgeyEhaXRlbXMubGVuZ3RoID8gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPER5bmFtaWNUYWJsZVxuICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgICBjb2xzPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgIGlzRXhwYW5kYWJsZVxuICAgICAgICAgICAgICAgIHJlbmRlckV4cGFuZGVkQ29udGVudD17KHsgZGF0YSB9KSA9PiA8U2lsZW5jZURldGFpbHMgc2lsZW5jZT17ZGF0YX0gLz59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtzaG93RXhwaXJlZFNpbGVuY2VzQmFubmVyICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGxvdXR9PlxuICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtzdHlsZXMuY2FsbG91dEljb259IG5hbWU9XCJpbmZvLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5FeHBpcmVkIHNpbGVuY2VzIGFyZSBhdXRvbWF0aWNhbGx5IGRlbGV0ZWQgYWZ0ZXIgNSBkYXlzLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAnTm8gbWF0Y2hpbmcgc2lsZW5jZXMgZm91bmQnXG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAgeyFzaWxlbmNlcy5sZW5ndGggJiYgPE5vU2lsZW5jZXNTcGxhc2ggYWxlcnRNYW5hZ2VyU291cmNlTmFtZT17YWxlcnRNYW5hZ2VyU291cmNlTmFtZX0gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCB1c2VGaWx0ZXJlZFNpbGVuY2VzID0gKHNpbGVuY2VzOiBTaWxlbmNlW10pID0+IHtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCB7IHF1ZXJ5U3RyaW5nLCBzaWxlbmNlU3RhdGUgfSA9IGdldFNpbGVuY2VGaWx0ZXJzRnJvbVVybFBhcmFtcyhxdWVyeVBhcmFtcyk7XG4gICAgY29uc3Qgc2lsZW5jZUlkc1N0cmluZyA9IHF1ZXJ5UGFyYW1zPy5zaWxlbmNlSWRzO1xuICAgIHJldHVybiBzaWxlbmNlcy5maWx0ZXIoKHNpbGVuY2UpID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygc2lsZW5jZUlkc1N0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgaWRzSW5jbHVkZWQgPSBzaWxlbmNlSWRzU3RyaW5nLnNwbGl0KCcsJykuaW5jbHVkZXMoc2lsZW5jZS5pZCk7XG4gICAgICAgIGlmICghaWRzSW5jbHVkZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChxdWVyeVN0cmluZykge1xuICAgICAgICBjb25zdCBtYXRjaGVycyA9IHBhcnNlTWF0Y2hlcnMocXVlcnlTdHJpbmcpO1xuICAgICAgICBjb25zdCBtYXRjaGVyc01hdGNoID0gbWF0Y2hlcnMuZXZlcnkoKG1hdGNoZXIpID0+XG4gICAgICAgICAgc2lsZW5jZS5tYXRjaGVycz8uc29tZShcbiAgICAgICAgICAgICh7IG5hbWUsIHZhbHVlLCBpc0VxdWFsLCBpc1JlZ2V4IH0pID0+XG4gICAgICAgICAgICAgIG1hdGNoZXIubmFtZSA9PT0gbmFtZSAmJlxuICAgICAgICAgICAgICBtYXRjaGVyLnZhbHVlID09PSB2YWx1ZSAmJlxuICAgICAgICAgICAgICBtYXRjaGVyLmlzRXF1YWwgPT09IGlzRXF1YWwgJiZcbiAgICAgICAgICAgICAgbWF0Y2hlci5pc1JlZ2V4ID09PSBpc1JlZ2V4XG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICBpZiAoIW1hdGNoZXJzTWF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzaWxlbmNlU3RhdGUpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVNYXRjaGVzID0gc2lsZW5jZS5zdGF0dXMuc3RhdGUgPT09IHNpbGVuY2VTdGF0ZTtcbiAgICAgICAgaWYgKCFzdGF0ZU1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9LCBbcXVlcnlQYXJhbXMsIHNpbGVuY2VzXSk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHRvcEJ1dHRvbkNvbnRhaW5lcjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBgLFxuICBhZGROZXdTaWxlbmNlOiBjc3NgXG4gICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMiwgMCl9O1xuICBgLFxuICBjYWxsb3V0OiBjc3NgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnl9O1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5pbmZvLmJvcmRlcn07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGhlaWdodDogNjJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuXG4gICAgJiA+ICoge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgfVxuICBgLFxuICBjYWxsb3V0SWNvbjogY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5pbmZvLnRleHR9O1xuICBgLFxuICBlZGl0QnV0dG9uOiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgYCxcbn0pO1xuXG5mdW5jdGlvbiB1c2VDb2x1bW5zKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZykge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBnZXRJbnN0YW5jZXNQZXJtaXNzaW9ucyhhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgcmV0dXJuIHVzZU1lbW8oKCk6IFNpbGVuY2VUYWJsZUNvbHVtblByb3BzW10gPT4ge1xuICAgIGNvbnN0IGhhbmRsZUV4cGlyZVNpbGVuY2VDbGljayA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgICBkaXNwYXRjaChleHBpcmVTaWxlbmNlQWN0aW9uKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGlkKSk7XG4gICAgfTtcbiAgICBjb25zdCBzaG93QWN0aW9ucyA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKHBlcm1pc3Npb25zLnVwZGF0ZSwgY29udGV4dFNydi5pc0VkaXRvcik7XG4gICAgY29uc3QgY29sdW1uczogU2lsZW5jZVRhYmxlQ29sdW1uUHJvcHNbXSA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdzdGF0ZScsXG4gICAgICAgIGxhYmVsOiAnU3RhdGUnLFxuICAgICAgICByZW5kZXJDZWxsOiBmdW5jdGlvbiByZW5kZXJTdGF0ZVRhZyh7IGRhdGE6IHsgc3RhdHVzIH0gfSkge1xuICAgICAgICAgIHJldHVybiA8U2lsZW5jZVN0YXRlVGFnIHN0YXRlPXtzdGF0dXMuc3RhdGV9IC8+O1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiAnODhweCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ21hdGNoZXJzJyxcbiAgICAgICAgbGFiZWw6ICdNYXRjaGluZyBsYWJlbHMnLFxuICAgICAgICByZW5kZXJDZWxsOiBmdW5jdGlvbiByZW5kZXJNYXRjaGVycyh7IGRhdGE6IHsgbWF0Y2hlcnMgfSB9KSB7XG4gICAgICAgICAgcmV0dXJuIDxNYXRjaGVycyBtYXRjaGVycz17bWF0Y2hlcnMgfHwgW119IC8+O1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiA5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdhbGVydHMnLFxuICAgICAgICBsYWJlbDogJ0FsZXJ0cycsXG4gICAgICAgIHJlbmRlckNlbGw6IGZ1bmN0aW9uIHJlbmRlclNpbGVuY2VkQWxlcnRzKHsgZGF0YTogeyBzaWxlbmNlZEFsZXJ0cyB9IH0pIHtcbiAgICAgICAgICByZXR1cm4gPHNwYW4gZGF0YS10ZXN0aWQ9XCJhbGVydHNcIj57c2lsZW5jZWRBbGVydHMubGVuZ3RofTwvc3Bhbj47XG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogJ3NjaGVkdWxlJyxcbiAgICAgICAgbGFiZWw6ICdTY2hlZHVsZScsXG4gICAgICAgIHJlbmRlckNlbGw6IGZ1bmN0aW9uIHJlbmRlclNjaGVkdWxlKHsgZGF0YTogeyBzdGFydHNBdCwgZW5kc0F0IH0gfSkge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0c0F0RGF0ZSA9IGRhdGVNYXRoLnBhcnNlKHN0YXJ0c0F0KTtcbiAgICAgICAgICBjb25zdCBlbmRzQXREYXRlID0gZGF0ZU1hdGgucGFyc2UoZW5kc0F0KTtcbiAgICAgICAgICBjb25zdCBkYXRlRGlzcGxheUZvcm1hdCA9ICdZWVlZLU1NLUREIEhIOm1tJztcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAge3N0YXJ0c0F0RGF0ZT8uZm9ybWF0KGRhdGVEaXNwbGF5Rm9ybWF0KX0geyctJ31cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHtlbmRzQXREYXRlPy5mb3JtYXQoZGF0ZURpc3BsYXlGb3JtYXQpfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZTogJzE1MHB4JyxcbiAgICAgIH0sXG4gICAgXTtcbiAgICBpZiAoc2hvd0FjdGlvbnMpIHtcbiAgICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICAgIGlkOiAnYWN0aW9ucycsXG4gICAgICAgIGxhYmVsOiAnQWN0aW9ucycsXG4gICAgICAgIHJlbmRlckNlbGw6IGZ1bmN0aW9uIHJlbmRlckFjdGlvbnMoeyBkYXRhOiBzaWxlbmNlIH0pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN0YWNrIGdhcD17MC41fT5cbiAgICAgICAgICAgICAge3NpbGVuY2Uuc3RhdHVzLnN0YXRlID09PSAnZXhwaXJlZCcgPyAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bWFrZUFNTGluayhgL2FsZXJ0aW5nL3NpbGVuY2UvJHtzaWxlbmNlLmlkfS9lZGl0YCwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSl9PlxuICAgICAgICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBpY29uPVwic3luY1wiPlJlY3JlYXRlPC9BY3Rpb25CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxBY3Rpb25CdXR0b24gaWNvbj1cImJlbGxcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFeHBpcmVTaWxlbmNlQ2xpY2soc2lsZW5jZS5pZCl9PlxuICAgICAgICAgICAgICAgICAgVW5zaWxlbmNlXG4gICAgICAgICAgICAgICAgPC9BY3Rpb25CdXR0b24+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtzaWxlbmNlLnN0YXR1cy5zdGF0ZSAhPT0gJ2V4cGlyZWQnICYmIChcbiAgICAgICAgICAgICAgICA8QWN0aW9uSWNvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgIHRvPXttYWtlQU1MaW5rKGAvYWxlcnRpbmcvc2lsZW5jZS8ke3NpbGVuY2UuaWR9L2VkaXRgLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKX1cbiAgICAgICAgICAgICAgICAgIGljb249XCJwZW5cIlxuICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cImVkaXRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6ICcxNDdweCcsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH0sIFthbGVydE1hbmFnZXJTb3VyY2VOYW1lLCBkaXNwYXRjaCwgc3R5bGVzLCBwZXJtaXNzaW9uc10pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWxlbmNlc1RhYmxlO1xuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ2FwcC9jb3JlL3N0b3JlJztcblxuaW1wb3J0IHsgQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVksIEFMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWSB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJEYXRhU291cmNlLCBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmZ1bmN0aW9uIHVzZUlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnM6IEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VbXSkge1xuICByZXR1cm4gdXNlQ2FsbGJhY2soXG4gICAgKGFsZXJ0TWFuYWdlck5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgYXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc05hbWVzID0gYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycy5tYXAoKGFtKSA9PiBhbS5uYW1lKTtcbiAgICAgIHJldHVybiBhdmFpbGFibGVBbGVydE1hbmFnZXJzTmFtZXMuaW5jbHVkZXMoYWxlcnRNYW5hZ2VyTmFtZSk7XG4gICAgfSxcbiAgICBbYXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc11cbiAgKTtcbn1cblxuLyogVGhpcyB3aWxsIHJldHVybiBhbSBuYW1lIGVpdGhlciBmcm9tIHF1ZXJ5IHBhcmFtcyBvciBmcm9tIGxvY2FsIHN0b3JhZ2Ugb3IgYSBkZWZhdWx0IChncmFmYW5hKS5cbiAqIER1ZSB0byBSQkFDIHBlcm1pc3Npb25zIEdyYWZhbmEgTWFuYWdlZCBBbGVydCBtYW5hZ2VyIG9yIGV4dGVybmFsIGFsZXJ0IG1hbmFnZXJzIG1heSBub3QgYmUgYXZhaWxhYmxlXG4gKiBJbiB0aGUgd29yc3QgY2FzZSBuZWlodGVyIEdNQSBub3IgZXh0ZXJuYWwgYWxlcnQgbWFuYWdlciBpcyBhdmFpbGFibGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUoXG4gIGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnM6IEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VbXVxuKTogW3N0cmluZyB8IHVuZGVmaW5lZCwgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZykgPT4gdm9pZF0ge1xuICBjb25zdCBbcXVlcnlQYXJhbXMsIHVwZGF0ZVF1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIGNvbnN0IGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlID0gdXNlSXNBbGVydE1hbmFnZXJBdmFpbGFibGUoYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycyk7XG5cbiAgY29uc3QgdXBkYXRlID0gdXNlQ2FsbGJhY2soXG4gICAgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCFpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSA9PT0gR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSkge1xuICAgICAgICBzdG9yZS5kZWxldGUoQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgICAgICB1cGRhdGVRdWVyeVBhcmFtcyh7IFtBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldOiBudWxsIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcmUuc2V0KEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZLCBhbGVydE1hbmFnZXJTb3VyY2VOYW1lKTtcbiAgICAgICAgdXBkYXRlUXVlcnlQYXJhbXMoeyBbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTogYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFt1cGRhdGVRdWVyeVBhcmFtcywgaXNBbGVydE1hbmFnZXJBdmFpbGFibGVdXG4gICk7XG5cbiAgY29uc3QgcXVlcnlTb3VyY2UgPSBxdWVyeVBhcmFtc1tBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldO1xuXG4gIGlmIChxdWVyeVNvdXJjZSAmJiB0eXBlb2YgcXVlcnlTb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKHF1ZXJ5U291cmNlKSkge1xuICAgICAgcmV0dXJuIFtxdWVyeVNvdXJjZSwgdXBkYXRlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm9uIGV4aXN0aW5nIGFsZXJ0bWFuYWdlclxuICAgICAgcmV0dXJuIFt1bmRlZmluZWQsIHVwZGF0ZV07XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RvcmVTb3VyY2UgPSBzdG9yZS5nZXQoQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVkpO1xuICBpZiAoc3RvcmVTb3VyY2UgJiYgdHlwZW9mIHN0b3JlU291cmNlID09PSAnc3RyaW5nJyAmJiBpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShzdG9yZVNvdXJjZSkpIHtcbiAgICB1cGRhdGUoc3RvcmVTb3VyY2UpO1xuICAgIHJldHVybiBbc3RvcmVTb3VyY2UsIHVwZGF0ZV07XG4gIH1cblxuICBpZiAoaXNBbGVydE1hbmFnZXJBdmFpbGFibGUoR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSkpIHtcbiAgICByZXR1cm4gW0dSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUsIHVwZGF0ZV07XG4gIH1cblxuICByZXR1cm4gW3VuZGVmaW5lZCwgdXBkYXRlXTtcbn1cbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzQnlQZXJtaXNzaW9uIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uKGFjY2Vzc1R5cGU6ICdpbnN0YW5jZScgfCAnbm90aWZpY2F0aW9uJykge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiBnZXRBbGVydE1hbmFnZXJEYXRhU291cmNlc0J5UGVybWlzc2lvbihhY2Nlc3NUeXBlKSwgW2FjY2Vzc1R5cGVdKTtcbn1cbiIsImltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tYmluZWRSdWxlLFxuICBDb21iaW5lZFJ1bGVHcm91cCxcbiAgQ29tYmluZWRSdWxlTmFtZXNwYWNlLFxuICBSdWxlLFxuICBSdWxlR3JvdXAsXG4gIFJ1bGVOYW1lc3BhY2UsXG4gIFJ1bGVzU291cmNlLFxufSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBSdWxlclJ1bGVEVE8sIFJ1bGVyUnVsZUdyb3VwRFRPLCBSdWxlclJ1bGVzQ29uZmlnRFRPIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHtcbiAgZ2V0QWxsUnVsZXNTb3VyY2VzLFxuICBnZXRSdWxlc1NvdXJjZUJ5TmFtZSxcbiAgaXNDbG91ZFJ1bGVzU291cmNlLFxuICBpc0dyYWZhbmFSdWxlc1NvdXJjZSxcbn0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBpc0FsZXJ0aW5nUnVsZSwgaXNBbGVydGluZ1J1bGVyUnVsZSwgaXNSZWNvcmRpbmdSdWxlclJ1bGUgfSBmcm9tICcuLi91dGlscy9ydWxlcyc7XG5cbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5cbmludGVyZmFjZSBDYWNoZVZhbHVlIHtcbiAgcHJvbVJ1bGVzPzogUnVsZU5hbWVzcGFjZVtdO1xuICBydWxlclJ1bGVzPzogUnVsZXJSdWxlc0NvbmZpZ0RUTyB8IG51bGw7XG4gIHJlc3VsdDogQ29tYmluZWRSdWxlTmFtZXNwYWNlW107XG59XG5cbi8vIHRoaXMgbGl0dGxlIG1vbnN0ZXIgY29tYmluZXMgcHJvbWV0aGV1cyBydWxlcyBhbmQgcnVsZXIgcnVsZXMgdG8gcHJvZHVjZSBhIHVuaWZpZWQgZGF0YSBzdHJ1Y3R1cmVcbi8vIGNhbiBsaW1pdCB0byBhIHNpbmdsZSBydWxlcyBzb3VyY2VcbmV4cG9ydCBmdW5jdGlvbiB1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzKHJ1bGVzU291cmNlTmFtZT86IHN0cmluZyk6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdIHtcbiAgY29uc3QgcHJvbVJ1bGVzUmVzcG9uc2VzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9tUnVsZXMpO1xuICBjb25zdCBydWxlclJ1bGVzUmVzcG9uc2VzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ydWxlclJ1bGVzKTtcblxuICAvLyBjYWNoZSByZXN1bHRzIHBlciBydWxlcyBzb3VyY2UsIHNvIHdlIG9ubHkgcmVjYWxjdWxhdGUgdGhvc2UgZm9yIHdoaWNoIHJlc3VsdHMgaGF2ZSBhY3R1YWxseSBjaGFuZ2VkXG4gIGNvbnN0IGNhY2hlID0gdXNlUmVmPFJlY29yZDxzdHJpbmcsIENhY2hlVmFsdWU+Pih7fSk7XG5cbiAgY29uc3QgcnVsZXNTb3VyY2VzID0gdXNlTWVtbygoKTogUnVsZXNTb3VyY2VbXSA9PiB7XG4gICAgaWYgKHJ1bGVzU291cmNlTmFtZSkge1xuICAgICAgY29uc3QgcnVsZXNTb3VyY2UgPSBnZXRSdWxlc1NvdXJjZUJ5TmFtZShydWxlc1NvdXJjZU5hbWUpO1xuICAgICAgaWYgKCFydWxlc1NvdXJjZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gcnVsZXMgc291cmNlOiAke3J1bGVzU291cmNlTmFtZX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbcnVsZXNTb3VyY2VdO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0QWxsUnVsZXNTb3VyY2VzKCk7XG4gIH0sIFtydWxlc1NvdXJjZU5hbWVdKTtcblxuICByZXR1cm4gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgcnVsZXNTb3VyY2VzXG4gICAgICAgIC5tYXAoKHJ1bGVzU291cmNlKTogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10gPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVzU291cmNlTmFtZSA9IGlzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkgPyBydWxlc1NvdXJjZS5uYW1lIDogcnVsZXNTb3VyY2U7XG4gICAgICAgICAgY29uc3QgcHJvbVJ1bGVzID0gcHJvbVJ1bGVzUmVzcG9uc2VzW3J1bGVzU291cmNlTmFtZV0/LnJlc3VsdDtcbiAgICAgICAgICBjb25zdCBydWxlclJ1bGVzID0gcnVsZXJSdWxlc1Jlc3BvbnNlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ7XG5cbiAgICAgICAgICBjb25zdCBjYWNoZWQgPSBjYWNoZS5jdXJyZW50W3J1bGVzU291cmNlTmFtZV07XG4gICAgICAgICAgaWYgKGNhY2hlZCAmJiBjYWNoZWQucHJvbVJ1bGVzID09PSBwcm9tUnVsZXMgJiYgY2FjaGVkLnJ1bGVyUnVsZXMgPT09IHJ1bGVyUnVsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQucmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuYW1lc3BhY2VzOiBSZWNvcmQ8c3RyaW5nLCBDb21iaW5lZFJ1bGVOYW1lc3BhY2U+ID0ge307XG5cbiAgICAgICAgICAvLyBmaXJzdCBnZXQgYWxsIHRoZSBydWxlciBydWxlcyBpblxuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHJ1bGVyUnVsZXMgfHwge30pLmZvckVhY2goKFtuYW1lc3BhY2VOYW1lLCBncm91cHNdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSA9IHtcbiAgICAgICAgICAgICAgcnVsZXNTb3VyY2UsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWVzcGFjZU5hbWUsXG4gICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbmFtZXNwYWNlc1tuYW1lc3BhY2VOYW1lXSA9IG5hbWVzcGFjZTtcbiAgICAgICAgICAgIGFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2UsIGdyb3Vwcyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyB0aGVuIGNvcnJlbGF0ZSB3aXRoIHByb21ldGhldXMgcnVsZXNcbiAgICAgICAgICBwcm9tUnVsZXM/LmZvckVhY2goKHsgbmFtZTogbmFtZXNwYWNlTmFtZSwgZ3JvdXBzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5zID0gKG5hbWVzcGFjZXNbbmFtZXNwYWNlTmFtZV0gPSBuYW1lc3BhY2VzW25hbWVzcGFjZU5hbWVdIHx8IHtcbiAgICAgICAgICAgICAgcnVsZXNTb3VyY2UsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWVzcGFjZU5hbWUsXG4gICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobnMsIGdyb3Vwcyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBPYmplY3QudmFsdWVzKG5hbWVzcGFjZXMpO1xuXG4gICAgICAgICAgY2FjaGUuY3VycmVudFtydWxlc1NvdXJjZU5hbWVdID0geyBwcm9tUnVsZXMsIHJ1bGVyUnVsZXMsIHJlc3VsdCB9O1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5mbGF0KCksXG4gICAgW3Byb21SdWxlc1Jlc3BvbnNlcywgcnVsZXJSdWxlc1Jlc3BvbnNlcywgcnVsZXNTb3VyY2VzXVxuICApO1xufVxuXG4vLyBtZXJnZSBhbGwgZ3JvdXBzIGluIGNhc2Ugb2YgZ3JhZmFuYSBtYW5hZ2VkLCBlc3NlbnRpYWxseSB0cmVhdGluZyBuYW1lc3BhY2VzIChmb2xkZXJzKSBhcyBncm91cHNcbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuR3JhZmFuYU1hbmFnZWRSdWxlcyhuYW1lc3BhY2VzOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSkge1xuICByZXR1cm4gbmFtZXNwYWNlcy5tYXAoKG5hbWVzcGFjZSkgPT4ge1xuICAgIGNvbnN0IG5ld05hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlID0ge1xuICAgICAgLi4ubmFtZXNwYWNlLFxuICAgICAgZ3JvdXBzOiBbXSxcbiAgICB9O1xuXG4gICAgLy8gYWRkIGRlZmF1bHQgZ3JvdXAgd2l0aCB1bmdyb3VwZWQgcnVsZXNcbiAgICBuZXdOYW1lc3BhY2UuZ3JvdXBzLnB1c2goe1xuICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgcnVsZXM6IHNvcnRSdWxlc0J5TmFtZShuYW1lc3BhY2UuZ3JvdXBzLmZsYXRNYXAoKGdyb3VwKSA9PiBncm91cC5ydWxlcykpLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld05hbWVzcGFjZTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0UnVsZXNCeU5hbWUocnVsZXM6IENvbWJpbmVkUnVsZVtdKSB7XG4gIHJldHVybiBydWxlcy5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbn1cblxuZnVuY3Rpb24gYWRkUnVsZXJHcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLCBncm91cHM6IFJ1bGVyUnVsZUdyb3VwRFRPW10pOiB2b2lkIHtcbiAgbmFtZXNwYWNlLmdyb3VwcyA9IGdyb3Vwcy5tYXAoKGdyb3VwKSA9PiB7XG4gICAgY29uc3QgY29tYmluZWRHcm91cDogQ29tYmluZWRSdWxlR3JvdXAgPSB7XG4gICAgICBuYW1lOiBncm91cC5uYW1lLFxuICAgICAgaW50ZXJ2YWw6IGdyb3VwLmludGVydmFsLFxuICAgICAgc291cmNlX3RlbmFudHM6IGdyb3VwLnNvdXJjZV90ZW5hbnRzLFxuICAgICAgcnVsZXM6IFtdLFxuICAgIH07XG4gICAgY29tYmluZWRHcm91cC5ydWxlcyA9IGdyb3VwLnJ1bGVzLm1hcCgocnVsZSkgPT4gcnVsZXJSdWxlVG9Db21iaW5lZFJ1bGUocnVsZSwgbmFtZXNwYWNlLCBjb21iaW5lZEdyb3VwKSk7XG4gICAgcmV0dXJuIGNvbWJpbmVkR3JvdXA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9tR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSwgZ3JvdXBzOiBSdWxlR3JvdXBbXSk6IHZvaWQge1xuICBncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICBsZXQgY29tYmluZWRHcm91cCA9IG5hbWVzcGFjZS5ncm91cHMuZmluZCgoZykgPT4gZy5uYW1lID09PSBncm91cC5uYW1lKTtcbiAgICBpZiAoIWNvbWJpbmVkR3JvdXApIHtcbiAgICAgIGNvbWJpbmVkR3JvdXAgPSB7XG4gICAgICAgIG5hbWU6IGdyb3VwLm5hbWUsXG4gICAgICAgIHJ1bGVzOiBbXSxcbiAgICAgIH07XG4gICAgICBuYW1lc3BhY2UuZ3JvdXBzLnB1c2goY29tYmluZWRHcm91cCk7XG4gICAgfVxuXG4gICAgKGdyb3VwLnJ1bGVzID8/IFtdKS5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZ1J1bGUgPSBnZXRFeGlzdGluZ1J1bGVJbkdyb3VwKHJ1bGUsIGNvbWJpbmVkR3JvdXAhLCBuYW1lc3BhY2UucnVsZXNTb3VyY2UpO1xuICAgICAgaWYgKGV4aXN0aW5nUnVsZSkge1xuICAgICAgICBleGlzdGluZ1J1bGUucHJvbVJ1bGUgPSBydWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tYmluZWRHcm91cCEucnVsZXMucHVzaChwcm9tUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGUsIG5hbWVzcGFjZSwgY29tYmluZWRHcm91cCEpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByb21SdWxlVG9Db21iaW5lZFJ1bGUocnVsZTogUnVsZSwgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cCk6IENvbWJpbmVkUnVsZSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogcnVsZS5uYW1lLFxuICAgIHF1ZXJ5OiBydWxlLnF1ZXJ5LFxuICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgYW5ub3RhdGlvbnM6IGlzQWxlcnRpbmdSdWxlKHJ1bGUpID8gcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSA6IHt9LFxuICAgIHByb21SdWxlOiBydWxlLFxuICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlLFxuICAgIGdyb3VwLFxuICB9O1xufVxuXG5mdW5jdGlvbiBydWxlclJ1bGVUb0NvbWJpbmVkUnVsZShcbiAgcnVsZTogUnVsZXJSdWxlRFRPLFxuICBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSxcbiAgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwXG4pOiBDb21iaW5lZFJ1bGUge1xuICByZXR1cm4gaXNBbGVydGluZ1J1bGVyUnVsZShydWxlKVxuICAgID8ge1xuICAgICAgICBuYW1lOiBydWxlLmFsZXJ0LFxuICAgICAgICBxdWVyeTogcnVsZS5leHByLFxuICAgICAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBhbm5vdGF0aW9uczogcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSxcbiAgICAgICAgcnVsZXJSdWxlOiBydWxlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIGdyb3VwLFxuICAgICAgfVxuICAgIDogaXNSZWNvcmRpbmdSdWxlclJ1bGUocnVsZSlcbiAgICA/IHtcbiAgICAgICAgbmFtZTogcnVsZS5yZWNvcmQsXG4gICAgICAgIHF1ZXJ5OiBydWxlLmV4cHIsXG4gICAgICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGFubm90YXRpb25zOiB7fSxcbiAgICAgICAgcnVsZXJSdWxlOiBydWxlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIGdyb3VwLFxuICAgICAgfVxuICAgIDoge1xuICAgICAgICBuYW1lOiBydWxlLmdyYWZhbmFfYWxlcnQudGl0bGUsXG4gICAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH07XG59XG5cbi8vIGZpbmQgZXhpc3RpbmcgcnVsZSBpbiBncm91cCB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuIHByb20gcnVsZVxuZnVuY3Rpb24gZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cChcbiAgcnVsZTogUnVsZSxcbiAgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwLFxuICBydWxlc1NvdXJjZTogUnVsZXNTb3VyY2Vcbik6IENvbWJpbmVkUnVsZSB8IHVuZGVmaW5lZCB7XG4gIGlmIChpc0dyYWZhbmFSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkpIHtcbiAgICAvLyBhc3N1bWUgZ3JhZmFuYSBncm91cHMgaGF2ZSBvbmx5IHRoZSBvbmUgcnVsZS4gY2hlY2sgbmFtZSBhbnl3YXkgYmVjYXVzZSBwYXJhbm9pZFxuICAgIHJldHVybiBncm91cCEucnVsZXMuZmluZCgoZXhpc3RpbmdSdWxlKSA9PiBleGlzdGluZ1J1bGUubmFtZSA9PT0gcnVsZS5uYW1lKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIC8vIHRyeSBmaW5kaW5nIGEgcnVsZSB0aGF0IG1hdGNoZXMgbmFtZSwgbGFiZWxzLCBhbm5vdGF0aW9ucyBhbmQgcXVlcnlcbiAgICBncm91cCEucnVsZXMuZmluZChcbiAgICAgIChleGlzdGluZ1J1bGUpID0+ICFleGlzdGluZ1J1bGUucHJvbVJ1bGUgJiYgaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUoZXhpc3RpbmdSdWxlLCBydWxlLCB0cnVlKVxuICAgICkgPz9cbiAgICAvLyBpZiB0aGF0IGZhaWxzLCB0cnkgZmluZGluZyBhIHJ1bGUgdGhhdCBvbmx5IG1hdGNoZXMgbmFtZSwgbGFiZWxzIGFuZCBhbm5vdGF0aW9ucy5cbiAgICAvLyBsb2tpICYgcHJvbSBjYW4gc29tZXRpbWVzIG1vZGlmeSB0aGUgcXVlcnkgc28gaXQgZG9lc250IG1hdGNoLCBlZyBgMiA+IDFgIGJlY29tZXMgYDFgXG4gICAgZ3JvdXAhLnJ1bGVzLmZpbmQoXG4gICAgICAoZXhpc3RpbmdSdWxlKSA9PiAhZXhpc3RpbmdSdWxlLnByb21SdWxlICYmIGlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlKGV4aXN0aW5nUnVsZSwgcnVsZSwgZmFsc2UpXG4gICAgKVxuICApO1xufVxuXG5mdW5jdGlvbiBpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZShjb21iaW5lZFJ1bGU6IENvbWJpbmVkUnVsZSwgcnVsZTogUnVsZSwgY2hlY2tRdWVyeSA9IHRydWUpOiBib29sZWFuIHtcbiAgaWYgKGNvbWJpbmVkUnVsZS5uYW1lID09PSBydWxlLm5hbWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICBjaGVja1F1ZXJ5ID8gaGFzaFF1ZXJ5KGNvbWJpbmVkUnVsZS5xdWVyeSkgOiAnJyxcbiAgICAgICAgY29tYmluZWRSdWxlLmxhYmVscyxcbiAgICAgICAgY29tYmluZWRSdWxlLmFubm90YXRpb25zLFxuICAgICAgXSkgPT09XG4gICAgICBKU09OLnN0cmluZ2lmeShbXG4gICAgICAgIGNoZWNrUXVlcnkgPyBoYXNoUXVlcnkocnVsZS5xdWVyeSkgOiAnJyxcbiAgICAgICAgcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGlzQWxlcnRpbmdSdWxlKHJ1bGUpID8gcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSA6IHt9LFxuICAgICAgXSlcbiAgICApO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gdGhlcmUgY2FuIGJlIHNsaWdodCBkaWZmZXJlbmNlcyBpbiBob3cgcHJvbSAmIHJ1bGVyIHJlbmRlciBhIHF1ZXJ5LCB0aGlzIHdpbGwgaGFzaCB0aGVtIGFjY291bnRpbmcgZm9yIHRoZSBkaWZmZXJlbmNlc1xuZnVuY3Rpb24gaGFzaFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpIHtcbiAgLy8gb25lIG9mIHRoZW0gbWlnaHQgYmUgd3JhcHBlZCBpbiBwYXJlbnNcbiAgaWYgKHF1ZXJ5Lmxlbmd0aCA+IDEgJiYgcXVlcnlbMF0gPT09ICcoJyAmJiBxdWVyeVtxdWVyeS5sZW5ndGggLSAxXSA9PT0gJyknKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5zbGljZSgxLCAtMSk7XG4gIH1cbiAgLy8gd2hpdGVzcGFjZSBjb3VsZCBiZSBhZGRlZCBvciByZW1vdmVkXG4gIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgvXFxzfFxcbi9nLCAnJyk7XG4gIC8vIGxhYmVscyBtYXRjaGVycyBjYW4gYmUgcmVvcmRlcmVkLCBzbyBzb3J0IHRoZSBlbml0cmUgc3RyaW5nLCBlc2VudGlhbGx5IGNvbXBhcmluZyBqdXN0IHRoZSBjaGFyYWN0ZXIgY291bnRzXG4gIHJldHVybiBxdWVyeS5zcGxpdCgnJykuc29ydCgpLmpvaW4oJycpO1xufVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVSTFNlYXJjaFBhcmFtcygpOiBbXG4gIFVSTFNlYXJjaFBhcmFtcyxcbiAgKHNlYXJjaFZhbHVlczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQ+LCByZXBsYWNlPzogYm9vbGVhbikgPT4gdm9pZFxuXSB7XG4gIGNvbnN0IHsgc2VhcmNoIH0gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBxdWVyeVBhcmFtcyA9IHVzZU1lbW8oKCkgPT4gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpLCBbc2VhcmNoXSk7XG5cbiAgY29uc3QgdXBkYXRlID0gdXNlQ2FsbGJhY2soKHNlYXJjaFZhbHVlczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgc3RyaW5nW10gfCB1bmRlZmluZWQ+LCByZXBsYWNlPzogYm9vbGVhbikgPT4ge1xuICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHNlYXJjaFZhbHVlcywgcmVwbGFjZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gW3F1ZXJ5UGFyYW1zLCB1cGRhdGVdO1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgY29uc3QgZ2V0QWxlcnRUYWJsZVN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgdGFibGU6IGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpfTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAke3RoZW1lLmNvbG9ycy5ib3JkZXIud2Vha307XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5zZWNvbmRhcnl9O1xuXG4gICAgdGgge1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICB9XG5cbiAgICB0ZCB7XG4gICAgICBwYWRkaW5nOiAwICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgfVxuXG4gICAgdHIge1xuICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgIH1cbiAgYCxcbiAgZXZlblJvdzogY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gIGAsXG4gIGNvbEV4cGFuZDogY3NzYFxuICAgIHdpZHRoOiAzNnB4O1xuICBgLFxuICBhY3Rpb25zQ2VsbDogY3NzYFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHdpZHRoOiAxJTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgJiA+ICogKyAqIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gICAgfVxuICBgLFxufSk7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlRGlzcGF0Y2giLCJjbGVhblVwQWN0aW9uIiwidXNlQ2xlYW51cCIsInN0YXRlU2VsZWN0b3IiLCJkaXNwYXRjaCIsInNlbGVjdG9yUmVmIiwiY3VycmVudCIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJSZWRpcmVjdCIsIlJvdXRlIiwiU3dpdGNoIiwidXNlTG9jYXRpb24iLCJBbGVydCIsIkxvYWRpbmdQbGFjZWhvbGRlciIsIndpdGhFcnJvckJvdW5kYXJ5IiwiQWxlcnRNYW5hZ2VyUGlja2VyIiwiQWxlcnRpbmdQYWdlV3JhcHBlciIsIk5vQWxlcnRNYW5hZ2VyV2FybmluZyIsIlNpbGVuY2VzRWRpdG9yIiwiU2lsZW5jZXNUYWJsZSIsInVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJ1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uIiwidXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IiLCJmZXRjaEFtQWxlcnRzQWN0aW9uIiwiZmV0Y2hTaWxlbmNlc0FjdGlvbiIsIlNJTEVOQ0VTX1BPTExfSU5URVJWQUxfTVMiLCJpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUiLCJTaWxlbmNlcyIsImFsZXJ0TWFuYWdlcnMiLCJhbGVydE1hbmFnZXJTb3VyY2VOYW1lIiwic2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZSIsInNpbGVuY2VzIiwic3RhdGUiLCJhbGVydHNSZXF1ZXN0cyIsImFtQWxlcnRzIiwiYWxlcnRzUmVxdWVzdCIsInVuZGVmaW5lZCIsImxvY2F0aW9uIiwiaXNSb290IiwicGF0aG5hbWUiLCJlbmRzV2l0aCIsImZldGNoQWxsIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJyZXN1bHQiLCJsb2FkaW5nIiwiZXJyb3IiLCJnZXRTaWxlbmNlQnlJZCIsImlkIiwiZmluZCIsInNpbGVuY2UiLCJtZXNzYWdlIiwibWF0Y2giLCJwYXJhbXMiLCJzdHlsZSIsInVzZVNlbGVjdG9yIiwiUGFnZSIsImdldE5hdk1vZGVsIiwiY2hpbGRyZW4iLCJwYWdlSWQiLCJpc0xvYWRpbmciLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwiY29udGV4dFNydiIsIkF1dGhvcml6ZSIsImFjdGlvbnMiLCJmYWxsYmFjayIsInNvbWUiLCJhY3Rpb24iLCJoYXNBY2Nlc3MiLCJOb0FsZXJ0TWFuYWdlcnNBdmFpbGFibGUiLCJPdGhlckFsZXJ0TWFuYWdlcnNBdmFpbGFibGUiLCJhdmFpbGFibGVBbGVydE1hbmFnZXJzIiwiXyIsImhhc090aGVyQU1zIiwibGVuZ3RoIiwiY3NzIiwiY3giLCJ1c2VTdHlsZXMiLCJCdXR0b24iLCJBY3Rpb25CdXR0b24iLCJjbGFzc05hbWUiLCJyZXN0UHJvcHMiLCJnZXRTdHlsZSIsInRoZW1lIiwidHlwb2dyYXBoeSIsInNpemUiLCJzbSIsIlRvb2x0aXAiLCJMaW5rQnV0dG9uIiwiQWN0aW9uSWNvbiIsInRvb2x0aXAiLCJpY29uIiwidG8iLCJ0YXJnZXQiLCJvbkNsaWNrIiwidG9vbHRpcFBsYWNlbWVudCIsInJlc3QiLCJhcmlhTGFiZWwiLCJBbGVydFN0YXRlIiwiU3RhdGVUYWciLCJhbGVydFN0YXRlVG9TdGF0ZSIsIkFjdGl2ZSIsIlVucHJvY2Vzc2VkIiwiU3VwcHJlc3NlZCIsIkFtQWxlcnRTdGF0ZVRhZyIsInVzZVN0YXRlIiwidXNlRm9ybUNvbnRleHQiLCJ1c2VEZWJvdW5jZSIsImRhdGVUaW1lIiwiQmFkZ2UiLCJ1c2VTdHlsZXMyIiwidXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyIsImZldGNoQWxsUHJvbUFuZFJ1bGVyUnVsZXNBY3Rpb24iLCJmaW5kQWxlcnRJbnN0YW5jZXNXaXRoTWF0Y2hlcnMiLCJpc0FsZXJ0aW5nUnVsZSIsIkFsZXJ0TGFiZWxzIiwiRHluYW1pY1RhYmxlIiwiQWxlcnRTdGF0ZVRhZyIsIk1hdGNoZWRTaWxlbmNlZFJ1bGVzIiwibWF0Y2hlZEFsZXJ0UnVsZXMiLCJzZXRNYXRjaGVkQWxlcnRSdWxlcyIsImZvcm1BcGkiLCJ3YXRjaCIsIm1hdGNoZXJzIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiY29sdW1ucyIsInVzZUNvbHVtbnMiLCJjb21iaW5lZE5hbWVzcGFjZXMiLCJtYXRjaGVkSW5zdGFuY2VzIiwiZmxhdE1hcCIsIm5hbWVzcGFjZSIsImdyb3VwcyIsImdyb3VwIiwicnVsZXMiLCJtYXAiLCJjb21iaW5lZFJ1bGUiLCJwcm9tUnVsZSIsImZpbHRlciIsInJ1bGUiLCJhbGVydHMiLCJ0aXRsZSIsImJhZGdlIiwidGFibGUiLCJldmVyeSIsIm1hdGNoZXIiLCJ2YWx1ZSIsIm5hbWUiLCJzbGljZSIsIm1vcmVNYXRjaGVzIiwibGFiZWwiLCJyZW5kZXJDZWxsIiwicmVuZGVyU3RhdGVUYWciLCJkYXRhIiwibWF0Y2hlZEluc3RhbmNlIiwicmVuZGVyTmFtZSIsImxhYmVscyIsInJlbmRlclN1bW1hcnkiLCJhY3RpdmVBdCIsInN0YXJ0c1dpdGgiLCJmb3JtYXQiLCJicmVha3BvaW50cyIsInZhbHVlcyIsImxnIiwic3BhY2luZyIsIlRhZ0xpc3QiLCJtYXRjaGVyVG9PcGVyYXRvciIsIk1hdGNoZXJzIiwidGFncyIsInVzZUZpZWxkQXJyYXkiLCJGaWVsZCIsIklucHV0IiwiSWNvbkJ1dHRvbiIsIklucHV0Q29udHJvbCIsIlNlbGVjdCIsIk1hdGNoZXJPcGVyYXRvciIsIm1hdGNoZXJGaWVsZE9wdGlvbnMiLCJNYXRjaGVyc0ZpZWxkIiwiY29udHJvbCIsInJlZ2lzdGVyIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwiZmllbGRzIiwiYXBwZW5kIiwicmVtb3ZlIiwid3JhcHBlciIsImluZGV4Iiwicm93IiwicmVxdWlyZWQiLCJmaWVsZCIsIm9uQ2hhbmdlIiwibWF0Y2hlck9wdGlvbnMiLCJvcGVyYXRvciIsInJlbW92ZUJ1dHRvbiIsIm5ld01hdGNoZXIiLCJlcXVhbCIsImNvbG9ycyIsImJhY2tncm91bmQiLCJzZWNvbmRhcnkiLCJDYWxsVG9BY3Rpb25DYXJkIiwiRW1wdHlMaXN0Q1RBIiwiZ2V0SW5zdGFuY2VzUGVybWlzc2lvbnMiLCJtYWtlQU1MaW5rIiwiTm9TaWxlbmNlc1NwbGFzaCIsInBlcm1pc3Npb25zIiwiY3JlYXRlIiwiaXNFZGl0b3IiLCJkYXRlTWF0aCIsImludGVydmFsVG9BYmJyZXZpYXRlZER1cmF0aW9uU3RyaW5nIiwiU2lsZW5jZWRBbGVydHNUYWJsZSIsIlNpbGVuY2VEZXRhaWxzIiwic3RhcnRzQXQiLCJlbmRzQXQiLCJjb21tZW50IiwiY3JlYXRlZEJ5Iiwic2lsZW5jZWRBbGVydHMiLCJkYXRlRGlzcGxheUZvcm1hdCIsInN0YXJ0c0F0RGF0ZSIsInBhcnNlIiwiZW5kc0F0RGF0ZSIsImR1cmF0aW9uIiwic3RhcnQiLCJEYXRlIiwiZW5kIiwiY29udGFpbmVyIiwidGV4dCIsInByaW1hcnkiLCJ1c2VDb250cm9sbGVyIiwiVGltZVJhbmdlSW5wdXQiLCJTaWxlbmNlUGVyaW9kIiwiZ2V0VmFsdWVzIiwib25DaGFuZ2VTdGFydHNBdCIsImZpZWxkU3RhdGUiLCJpbnZhbGlkIiwic3RhcnRzQXRJbnZhbGlkIiwidmFsaWRhdGUiLCJvbkNoYW5nZUVuZHNBdCIsImVuZHNBdEludmFsaWQiLCJvbkNoYW5nZVRpbWVab25lIiwidGltZVpvbmUiLCJmcm9tIiwidGltZVJhbmdlIiwicmF3IiwibmV3VmFsdWUiLCJTaWxlbmNlU3RhdGUiLCJzaWxlbmNlU3RhdGVUb1N0YXRlIiwiRXhwaXJlZCIsIlBlbmRpbmciLCJTaWxlbmNlU3RhdGVUYWciLCJnZXRBbGVydFRhYmxlU3R5bGVzIiwiU2lsZW5jZWRBbGVydHNUYWJsZVJvdyIsInRhYmxlU3R5bGVzIiwidGFibGVNYXJnaW4iLCJjb2xFeHBhbmQiLCJjb2xTdGF0ZSIsImNvbE5hbWUiLCJhbGVydCIsImV2ZW5Sb3ciLCJmaW5nZXJwcmludCIsIkNvbGxhcHNlVG9nZ2xlIiwiaXNDb2xsYXBzZWQiLCJzZXRJc0NvbGxhcHNlZCIsImFsZXJ0TmFtZSIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJsYWJlbEtleSIsImxhYmVsVmFsdWUiLCJjb2xsYXBzZWQiLCJzdGF0dXMiLCJwaWNrQnkiLCJ1c2VNZW1vIiwidXNlRm9ybSIsIkZvcm1Qcm92aWRlciIsIkRlZmF1bHRUaW1lWm9uZSIsInBhcnNlRHVyYXRpb24iLCJhZGREdXJhdGlvblRvRGF0ZSIsImlzVmFsaWREYXRlIiwiY29uZmlnIiwiRmllbGRTZXQiLCJUZXh0QXJlYSIsInVzZVVSTFNlYXJjaFBhcmFtcyIsImNyZWF0ZU9yVXBkYXRlU2lsZW5jZUFjdGlvbiIsIm1hdGNoZXJUb01hdGNoZXJGaWVsZCIsIm1hdGNoZXJGaWVsZFRvTWF0Y2hlciIsInBhcnNlUXVlcnlQYXJhbU1hdGNoZXJzIiwiZGVmYXVsdHNGcm9tUXVlcnkiLCJzZWFyY2hQYXJhbXMiLCJkZWZhdWx0cyIsImdldCIsImdldEFsbCIsImZvcm1NYXRjaGVycyIsImdldERlZmF1bHRGb3JtVmFsdWVzIiwibm93IiwiaXNFeHBpcmVkIiwiaG91cnMiLCJ0b0lTT1N0cmluZyIsImlzUmVnZXgiLCJtYXRjaGVyTmFtZSIsIm1hdGNoZXJWYWx1ZSIsImJvb3REYXRhIiwidXNlciIsInVybFNlYXJjaFBhcmFtcyIsImRlZmF1bHRWYWx1ZXMiLCJmb3JtQVBJIiwidXBkYXRlU2lsZW5jZSIsInVuaWZpZWRBbGVydGluZyIsImhhbmRsZVN1Ym1pdCIsInNldFZhbHVlIiwiY2xlYXJFcnJvcnMiLCJvblN1Ym1pdCIsIm1hdGNoZXJzRmllbGRzIiwicGF5bG9hZCIsImV4aXRPblNhdmUiLCJzdWNjZXNzTWVzc2FnZSIsInByZXZEdXJhdGlvbiIsInNldFByZXZEdXJhdGlvbiIsInN0YXJ0VmFsdWUiLCJ2YWx1ZU9mIiwiZW5kVmFsdWUiLCJuZXh0RHVyYXRpb24iLCJmbGV4Um93Iiwic2lsZW5jZVBlcmlvZCIsInR5cGUiLCJrZXlzIiwidGV4dEFyZWEiLCJkZWJvdW5jZSIsInVuaXF1ZUlkIiwiU3RhY2siLCJMYWJlbCIsIkljb24iLCJSYWRpb0J1dHRvbkdyb3VwIiwidXNlUXVlcnlQYXJhbXMiLCJwYXJzZU1hdGNoZXJzIiwiZ2V0U2lsZW5jZUZpbHRlcnNGcm9tVXJsUGFyYW1zIiwic3RhdGVPcHRpb25zIiwia2V5IiwiZ2V0UXVlcnlTdHJpbmdLZXkiLCJTaWxlbmNlc0ZpbHRlciIsInF1ZXJ5U3RyaW5nS2V5Iiwic2V0UXVlcnlTdHJpbmdLZXkiLCJxdWVyeVBhcmFtcyIsInNldFF1ZXJ5UGFyYW1zIiwicXVlcnlTdHJpbmciLCJzaWxlbmNlU3RhdGUiLCJoYW5kbGVRdWVyeVN0cmluZ0NoYW5nZSIsImUiLCJoYW5kbGVTaWxlbmNlU3RhdGVDaGFuZ2UiLCJjbGVhckZpbHRlcnMiLCJzZXRUaW1lb3V0IiwiaW5wdXRJbnZhbGlkIiwicm93Q2hpbGQiLCJzZWFyY2hJbnB1dCIsImJvcmRlciIsInN0cm9uZyIsImZpZWxkTGFiZWwiLCJMaW5rIiwiZXhwaXJlU2lsZW5jZUFjdGlvbiIsImFsZXJ0TWFuYWdlckFsZXJ0cyIsImZpbHRlcmVkU2lsZW5jZXMiLCJ1c2VGaWx0ZXJlZFNpbGVuY2VzIiwic2hvd0V4cGlyZWRTaWxlbmNlc0Jhbm5lciIsIml0ZW1zIiwiZmluZFNpbGVuY2VkQWxlcnRzIiwic2lsZW5jZWRCeSIsImluY2x1ZGVzIiwidG9wQnV0dG9uQ29udGFpbmVyIiwiYWRkTmV3U2lsZW5jZSIsImNhbGxvdXQiLCJjYWxsb3V0SWNvbiIsInNpbGVuY2VJZHNTdHJpbmciLCJzaWxlbmNlSWRzIiwiaWRzSW5jbHVkZWQiLCJzcGxpdCIsIm1hdGNoZXJzTWF0Y2giLCJpc0VxdWFsIiwic3RhdGVNYXRjaGVzIiwiaW5mbyIsImVkaXRCdXR0b24iLCJoYW5kbGVFeHBpcmVTaWxlbmNlQ2xpY2siLCJzaG93QWN0aW9ucyIsInVwZGF0ZSIsInJlbmRlck1hdGNoZXJzIiwicmVuZGVyU2lsZW5jZWRBbGVydHMiLCJyZW5kZXJTY2hlZHVsZSIsInB1c2giLCJyZW5kZXJBY3Rpb25zIiwic3RvcmUiLCJBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSIsIkFMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWSIsIkdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUiLCJ1c2VJc0FsZXJ0TWFuYWdlckF2YWlsYWJsZSIsImFsZXJ0TWFuYWdlck5hbWUiLCJhdmFpbGFibGVBbGVydE1hbmFnZXJzTmFtZXMiLCJhbSIsInVwZGF0ZVF1ZXJ5UGFyYW1zIiwiaXNBbGVydE1hbmFnZXJBdmFpbGFibGUiLCJkZWxldGUiLCJzZXQiLCJxdWVyeVNvdXJjZSIsInN0b3JlU291cmNlIiwiZ2V0QWxlcnRNYW5hZ2VyRGF0YVNvdXJjZXNCeVBlcm1pc3Npb24iLCJhY2Nlc3NUeXBlIiwiZ2V0QWxsUnVsZXNTb3VyY2VzIiwiZ2V0UnVsZXNTb3VyY2VCeU5hbWUiLCJpc0Nsb3VkUnVsZXNTb3VyY2UiLCJpc0dyYWZhbmFSdWxlc1NvdXJjZSIsImlzQWxlcnRpbmdSdWxlclJ1bGUiLCJpc1JlY29yZGluZ1J1bGVyUnVsZSIsInJ1bGVzU291cmNlTmFtZSIsInByb21SdWxlc1Jlc3BvbnNlcyIsInByb21SdWxlcyIsInJ1bGVyUnVsZXNSZXNwb25zZXMiLCJydWxlclJ1bGVzIiwiY2FjaGUiLCJydWxlc1NvdXJjZXMiLCJydWxlc1NvdXJjZSIsIkVycm9yIiwiY2FjaGVkIiwibmFtZXNwYWNlcyIsImZvckVhY2giLCJuYW1lc3BhY2VOYW1lIiwiYWRkUnVsZXJHcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlIiwibnMiLCJhZGRQcm9tR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZSIsImZsYXQiLCJmbGF0dGVuR3JhZmFuYU1hbmFnZWRSdWxlcyIsIm5ld05hbWVzcGFjZSIsInNvcnRSdWxlc0J5TmFtZSIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJjb21iaW5lZEdyb3VwIiwic291cmNlX3RlbmFudHMiLCJydWxlclJ1bGVUb0NvbWJpbmVkUnVsZSIsImciLCJleGlzdGluZ1J1bGUiLCJnZXRFeGlzdGluZ1J1bGVJbkdyb3VwIiwicHJvbVJ1bGVUb0NvbWJpbmVkUnVsZSIsInF1ZXJ5IiwiYW5ub3RhdGlvbnMiLCJleHByIiwicnVsZXJSdWxlIiwicmVjb3JkIiwiZ3JhZmFuYV9hbGVydCIsImlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlIiwiY2hlY2tRdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYXNoUXVlcnkiLCJyZXBsYWNlIiwiam9pbiIsImxvY2F0aW9uU2VydmljZSIsInNlYXJjaCIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaFZhbHVlcyIsInBhcnRpYWwiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsIndlYWsiLCJhY3Rpb25zQ2VsbCJdLCJzb3VyY2VSb290IjoiIn0=