"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertGroups"],{

/***/ "./public/app/features/alerting/unified/AlertGroups.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _components_NoAlertManagerWarning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx");
/* harmony import */ var _components_alert_groups_AlertGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroup.tsx");
/* harmony import */ var _components_alert_groups_AlertGroupFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroupFilter.tsx");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
/* harmony import */ var _hooks_useFilteredAmGroups__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFilteredAmGroups.ts");
/* harmony import */ var _hooks_useGroupedAlerts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useGroupedAlerts.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _p;






















const AlertGroups = () => {
  var _alertGroups;

  const alertManagers = (0,_hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_10__.useAlertManagersByPermission)('instance');
  const [alertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_9__.useAlertManagerSourceName)(alertManagers);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_4__.useQueryParams)();
  const {
    groupBy = []
  } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_16__.getFiltersFromUrlParams)(queryParams);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const alertGroups = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_13__.useUnifiedAlertingSelector)(state => state.amAlertGroups);
  const {
    loading,
    error,
    result: results = []
  } = (_alertGroups = alertGroups[alertManagerSourceName || '']) !== null && _alertGroups !== void 0 ? _alertGroups : _utils_redux__WEBPACK_IMPORTED_MODULE_17__.initialAsyncRequestState;
  const groupedAlerts = (0,_hooks_useGroupedAlerts__WEBPACK_IMPORTED_MODULE_12__.useGroupedAlerts)(results, groupBy);
  const filteredAlertGroups = (0,_hooks_useFilteredAmGroups__WEBPACK_IMPORTED_MODULE_11__.useFilteredAmGroups)(groupedAlerts);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    function fetchNotifications() {
      if (alertManagerSourceName) {
        dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_14__.fetchAlertGroupsAction)(alertManagerSourceName));
      }
    }

    fetchNotifications();
    const interval = setInterval(fetchNotifications, _utils_constants__WEBPACK_IMPORTED_MODULE_15__.NOTIFICATIONS_POLL_INTERVAL_MS);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, alertManagerSourceName]);

  if (!alertManagerSourceName) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_5__.AlertingPageWrapper, {
      pageId: "groups",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_NoAlertManagerWarning__WEBPACK_IMPORTED_MODULE_6__.NoAlertManagerWarning, {
        availableAlertManagers: alertManagers
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_components_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_5__.AlertingPageWrapper, {
    pageId: "groups",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_alert_groups_AlertGroupFilter__WEBPACK_IMPORTED_MODULE_8__.AlertGroupFilter, {
      groups: results
    }), loading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, {
      text: "Loading notifications"
    }))), error && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      title: 'Error loading notifications',
      severity: 'error',
      children: error.message || 'Unknown error'
    }), results && filteredAlertGroups.map((group, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [(index === 1 && Object.keys(filteredAlertGroups[0].labels).length === 0 || index === 0 && Object.keys(group.labels).length > 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("p", {
          className: styles.groupingBanner,
          children: ["Grouped by: ", Object.keys(group.labels).join(', ')]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_components_alert_groups_AlertGroup__WEBPACK_IMPORTED_MODULE_7__.AlertGroup, {
          alertManagerSourceName: alertManagerSourceName || '',
          group: group
        })]
      }, `${JSON.stringify(group.labels)}-group-${index}`);
    }), results && !filteredAlertGroups.length && (_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p", {
      children: "No results."
    })))]
  });
};

const getStyles = theme => ({
  groupingBanner: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(2, 0)};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertGroups);

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

/***/ "./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicTableWithGuidelines": () => (/* binding */ DynamicTableWithGuidelines),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["renderExpandedContent"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








// DynamicTable, but renders visual guidelines on the left, for larger screen widths
const DynamicTableWithGuidelines = _ref => {
  let {
    renderExpandedContent
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_3__.DynamicTable, Object.assign({
    renderExpandedContent: renderExpandedContent ? (item, index, items) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [!(index === items.length - 1) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.contentGuideline, styles.guideline)
      }), renderExpandedContent(item, index, items)]
    }) : undefined,
    renderPrefixHeader: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.relative,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.headerGuideline, styles.guideline)
      })
    }),
    renderPrefixCell: (_, index, items) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.relative,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.topGuideline, styles.guideline)
      }), !(index === items.length - 1) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.bottomGuideline, styles.guideline)
      })]
    })
  }, props));
};
const getStyles = theme => ({
  relative: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    position: relative;
    height: 100%;
  `,
  guideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    left: -19px;
    border-left: 1px solid ${theme.colors.border.medium};
    position: absolute;

    ${theme.breakpoints.down('md')} {
      display: none;
    }
  `,
  topGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 18px;
    border-bottom: 1px solid ${theme.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,
  bottomGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: 50%;
    bottom: 0;
  `,
  contentGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,
  headerGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: -25px;
    bottom: 0;
  `
});

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

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertDetails": () => (/* binding */ AlertDetails)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");














const AlertDetails = ({
  alert,
  alertManagerSourceName
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const instancePermissions = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_6__.getInstancesPermissions)(alertManagerSourceName); // For Grafana Managed alerts the Generator URL redirects to the alert rule edit page, so update permission is required
  // For external alert manager the Generator URL redirects to an external service which we don't control

  const isGrafanaSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_7__.isGrafanaRulesSource)(alertManagerSourceName);
  const isSeeSourceButtonEnabled = isGrafanaSource ? app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.AlertingRuleRead) : true;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.actionsRow,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Authorize__WEBPACK_IMPORTED_MODULE_10__.Authorize, {
        actions: [instancePermissions.update, instancePermissions.create],
        fallback: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.isEditor,
        children: [alert.status.state === app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_4__.AlertState.Suppressed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
          href: `${(0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.makeAMLink)('/alerting/silences', alertManagerSourceName)}&silenceIds=${alert.status.silencedBy.join(',')}`,
          className: styles.button,
          icon: 'bell',
          size: 'sm',
          children: "Manage silences"
        }), alert.status.state === app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_4__.AlertState.Active && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_8__.makeLabelBasedSilenceLink)(alertManagerSourceName, alert.labels),
          className: styles.button,
          icon: 'bell-slash',
          size: 'sm',
          children: "Silence"
        })]
      }), isSeeSourceButtonEnabled && alert.generatorURL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
        className: styles.button,
        href: alert.generatorURL,
        icon: 'chart-line',
        size: 'sm',
        children: "See source"
      })]
    }), Object.entries(alert.annotations).map(([annotationKey, annotationValue]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_9__.AnnotationDetailsField, {
      annotationKey: annotationKey,
      value: annotationValue
    }, annotationKey)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.receivers,
      children: ["Receivers:", ' ', alert.receivers.map(({
        name
      }) => name).filter(name => !!name).join(', ')]
    })]
  });
};

const getStyles = theme => ({
  button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & + & {
      margin-left: ${theme.spacing(1)};
    }
  `,
  actionsRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(2, 0)} !important;
    border-bottom: 1px solid ${theme.colors.border.medium};
  `,
  receivers: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(1, 0)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertGroup": () => (/* binding */ AlertGroup)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _AlertLabels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _AlertGroupAlertsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroupAlertsTable.tsx");
/* harmony import */ var _AlertGroupHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertGroupHeader.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;











const AlertGroup = ({
  alertManagerSourceName,
  group
}) => {
  const [isCollapsed, setIsCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: styles.header,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: styles.group,
        "data-testid": "alert-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_5__.CollapseToggle, {
          isCollapsed: isCollapsed,
          onToggle: () => setIsCollapsed(!isCollapsed),
          "data-testid": "alert-group-collapse-toggle"
        }), Object.keys(group.labels).length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AlertLabels__WEBPACK_IMPORTED_MODULE_4__.AlertLabels, {
          className: styles.headerLabels,
          labels: group.labels
        }) : _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
          children: "No grouping"
        }))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AlertGroupHeader__WEBPACK_IMPORTED_MODULE_7__.AlertGroupHeader, {
        group: group
      })]
    }), !isCollapsed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AlertGroupAlertsTable__WEBPACK_IMPORTED_MODULE_6__.AlertGroupAlertsTable, {
      alertManagerSourceName: alertManagerSourceName,
      alerts: group.alerts
    })]
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & + & {
      margin-top: ${theme.spacing(2)};
    }
  `,
  headerLabels: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding-bottom: 0 !important;
    margin-bottom: -${theme.spacing(0.5)};
  `,
  header: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing(1, 1, 1, 0)};
    background-color: ${theme.colors.background.secondary};
    width: 100%;
  `,
  group: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  summary: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css``,
  spanElement: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing(0.5)};
  `,
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_3__.AlertState.Active]: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.error.main};
  `,
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_3__.AlertState.Suppressed]: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.primary.main};
  `,
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_3__.AlertState.Unprocessed]: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.secondary.main};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertGroupAlertsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertGroupAlertsTable": () => (/* binding */ AlertGroupAlertsTable)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AlertLabels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _DynamicTableWithGuidelines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx");
/* harmony import */ var _silences_AmAlertStateTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx");
/* harmony import */ var _AlertDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertDetails.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











const AlertGroupAlertsTable = ({
  alerts,
  alertManagerSourceName
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [{
    id: 'state',
    label: 'State',
    // eslint-disable-next-line react/display-name
    renderCell: ({
      data: alert
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_silences_AmAlertStateTag__WEBPACK_IMPORTED_MODULE_6__.AmAlertStateTag, {
        state: alert.status.state
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
        className: styles.duration,
        children: ["for", ' ', (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.intervalToAbbreviatedDurationString)({
          start: new Date(alert.startsAt),
          end: new Date(alert.endsAt)
        })]
      })]
    }),
    size: '220px'
  }, {
    id: 'labels',
    label: 'Labels',
    // eslint-disable-next-line react/display-name
    renderCell: ({
      data: {
        labels
      }
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AlertLabels__WEBPACK_IMPORTED_MODULE_4__.AlertLabels, {
      className: styles.labels,
      labels: labels
    }),
    size: 1
  }], [styles]);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => alerts.map(alert => ({
    id: alert.fingerprint,
    data: alert
  })), [alerts]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: styles.tableWrapper,
    "data-testid": "alert-group-table",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_DynamicTableWithGuidelines__WEBPACK_IMPORTED_MODULE_5__.DynamicTableWithGuidelines, {
      cols: columns,
      items: items,
      isExpandable: true,
      renderExpandedContent: ({
        data: alert
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AlertDetails__WEBPACK_IMPORTED_MODULE_7__.AlertDetails, {
        alert: alert,
        alertManagerSourceName: alertManagerSourceName
      })
    })
  });
};

const getStyles = theme => ({
  tableWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(3)};
    ${theme.breakpoints.up('md')} {
      margin-left: ${theme.spacing(4.5)};
    }
  `,
  duration: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing(1)};
    font-size: ${theme.typography.bodySmall.fontSize};
  `,
  labels: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding-bottom: 0;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertGroupFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertGroupFilter": () => (/* binding */ AlertGroupFilter)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _AlertManagerPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var _AlertStateFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/AlertStateFilter.tsx");
/* harmony import */ var _GroupBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/GroupBy.tsx");
/* harmony import */ var _MatcherFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













const AlertGroupFilter = ({
  groups
}) => {
  const [filterKey, setFilterKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * 100));
  const [queryParams, setQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__.useQueryParams)();
  const {
    groupBy = [],
    queryString,
    alertState
  } = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.getFiltersFromUrlParams)(queryParams);
  const matcherFilterKey = `matcher-${filterKey}`;
  const alertManagers = (0,_hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_5__.useAlertManagersByPermission)('instance');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_4__.useAlertManagerSourceName)(alertManagers);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  const clearFilters = () => {
    setQueryParams({
      groupBy: null,
      queryString: null,
      alertState: null
    });
    setTimeout(() => setFilterKey(filterKey + 1), 100);
  };

  const showClearButton = !!(groupBy.length > 0 || queryString || alertState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_7__.AlertManagerPicker, {
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName,
      dataSources: alertManagers
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.filterSection,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_MatcherFilter__WEBPACK_IMPORTED_MODULE_10__.MatcherFilter, {
        className: styles.filterInput,
        defaultQueryString: queryString,
        onFilterChange: value => setQueryParams({
          queryString: value ? value : null
        })
      }, matcherFilterKey), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_GroupBy__WEBPACK_IMPORTED_MODULE_9__.GroupBy, {
        className: styles.filterInput,
        groups: groups,
        groupBy: groupBy,
        onGroupingChange: keys => setQueryParams({
          groupBy: keys.length ? keys.join(',') : null
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_AlertStateFilter__WEBPACK_IMPORTED_MODULE_8__.AlertStateFilter, {
        stateFilter: alertState,
        onStateFilterChange: value => setQueryParams({
          alertState: value ? value : null
        })
      }), showClearButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: styles.clearButton,
        variant: 'secondary',
        icon: "times",
        onClick: clearFilters,
        children: "Clear filters"
      })]
    })]
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    border-bottom: 1px solid ${theme.colors.border.medium};
    margin-bottom: ${theme.spacing(3)};
  `,
  filterSection: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${theme.spacing(3)};
  `,
  filterInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 340px;
    & + & {
      margin-left: ${theme.spacing(1)};
    }
  `,
  clearButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing(1)};
    margin-top: 19px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/AlertStateFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertStateFilter": () => (/* binding */ AlertStateFilter)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label;







const AlertStateFilter = ({
  onStateFilterChange,
  stateFilter
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const alertStateOptions = Object.entries(app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_3__.AlertState).sort(([labelA], [labelB]) => labelA < labelB ? -1 : 1).map(([label, state]) => ({
    label,
    value: state
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.wrapper,
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {
      children: "State"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
      options: alertStateOptions,
      value: stateFilter,
      onChange: onStateFilterChange
    })]
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing(1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/GroupBy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupBy": () => (/* binding */ GroupBy)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label, _Icon;






const GroupBy = ({
  className,
  groups,
  groupBy,
  onGroupingChange
}) => {
  const labelKeyOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniq)(groups.flatMap(group => group.alerts).flatMap(({
    labels
  }) => Object.keys(labels))).filter(label => !(label.startsWith('__') && label.endsWith('__'))) // Filter out private labels
  .map(key => ({
    label: key,
    value: key
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    "data-testid": 'group-by-container',
    className: className,
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {
      children: "Custom group by"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.MultiSelect, {
      "aria-label": 'group by label keys',
      value: groupBy,
      placeholder: "Group by",
      prefix: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: 'tag-alt'
      })),
      onChange: items => {
        onGroupingChange(items.map(({
          value
        }) => value));
      },
      options: labelKeyOptions
    })]
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

/***/ "./public/app/features/alerting/unified/hooks/useFilteredAmGroups.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFilteredAmGroups": () => (/* binding */ useFilteredAmGroups)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");




const useFilteredAmGroups = groups => {
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__.useQueryParams)();
  const filters = (0,_utils_misc__WEBPACK_IMPORTED_MODULE_3__.getFiltersFromUrlParams)(queryParams);
  const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__.parseMatchers)(filters.queryString || '');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return groups.reduce((filteredGroup, group) => {
      const alerts = group.alerts.filter(({
        labels,
        status
      }) => {
        const labelsMatch = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_2__.labelsMatchMatchers)(labels, matchers);
        const filtersMatch = filters.alertState ? status.state === filters.alertState : true;
        return labelsMatch && filtersMatch;
      });

      if (alerts.length > 0) {
        // The ungrouped alerts should be first in the results
        if (Object.keys(group.labels).length === 0) {
          filteredGroup.unshift(Object.assign({}, group, {
            alerts
          }));
        } else {
          filteredGroup.push(Object.assign({}, group, {
            alerts
          }));
        }
      }

      return filteredGroup;
    }, []);
  }, [groups, filters, matchers]);
};

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useGroupedAlerts.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useGroupedAlerts": () => (/* binding */ useGroupedAlerts)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");


const useGroupedAlerts = (groups, groupBy) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (groupBy.length === 0) {
      const emptyGroupings = groups.filter(group => Object.keys(group.labels).length === 0);

      if (emptyGroupings.length > 1) {
        // Merges multiple ungrouped grouping
        return groups.reduce((combinedGroups, group) => {
          if (Object.keys(group.labels).length === 0) {
            const noGroupingGroup = combinedGroups.find(({
              labels
            }) => Object.keys(labels));

            if (!noGroupingGroup) {
              combinedGroups.push({
                alerts: group.alerts,
                labels: {},
                receiver: {
                  name: 'NONE'
                }
              });
            } else {
              noGroupingGroup.alerts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)([...noGroupingGroup.alerts, ...group.alerts], 'labels');
            }
          } else {
            combinedGroups.push(group);
          }

          return combinedGroups;
        }, []);
      } else {
        return groups;
      }
    }

    const alerts = groups.flatMap(({
      alerts
    }) => alerts);
    return alerts.reduce((groupings, alert) => {
      const alertContainsGroupings = groupBy.every(groupByLabel => Object.keys(alert.labels).includes(groupByLabel));

      if (alertContainsGroupings) {
        const existingGrouping = groupings.find(group => {
          return groupBy.every(groupKey => {
            return group.labels[groupKey] === alert.labels[groupKey];
          });
        });

        if (!existingGrouping) {
          const labels = groupBy.reduce((acc, key) => {
            acc = Object.assign({}, acc, {
              [key]: alert.labels[key]
            });
            return acc;
          }, {});
          groupings.push({
            alerts: [alert],
            labels,
            receiver: {
              name: 'NONE'
            }
          });
        } else {
          existingGrouping.alerts.push(alert);
        }
      } else {
        const noGroupingGroup = groupings.find(group => Object.keys(group.labels).length === 0);

        if (!noGroupingGroup) {
          groupings.push({
            alerts: [alert],
            labels: {},
            receiver: {
              name: 'NONE'
            }
          });
        } else {
          noGroupingGroup.alerts.push(alert);
        }
      }

      return groupings;
    }, []);
  }, [groups, groupBy]);
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBR2I4TSxZQUFBQSxRQUFRLEVBQUU7QUFDUi9ILGNBQUFBLElBQUksRUFBRTtBQURFO0FBSEcsV0FBZjtBQU9ELFNBWkQsTUFZTztBQUNMb0ksVUFBQUEsZ0JBQWdCLENBQUN4SCxNQUFqQixDQUF3QjZHLElBQXhCLENBQTZCOUksS0FBN0I7QUFDRDtBQUNGLE9BckJELE1BcUJPO0FBQ0wsY0FBTWtKLGVBQWUsR0FBR0csU0FBUyxDQUFDRixJQUFWLENBQWdCak4sS0FBRCxJQUFXRSxNQUFNLENBQUNDLElBQVAsQ0FBWUgsS0FBSyxDQUFDSSxNQUFsQixFQUEwQkMsTUFBMUIsS0FBcUMsQ0FBL0QsQ0FBeEI7O0FBQ0EsWUFBSSxDQUFDMk0sZUFBTCxFQUFzQjtBQUNwQkcsVUFBQUEsU0FBUyxDQUFDUCxJQUFWLENBQWU7QUFBRTdHLFlBQUFBLE1BQU0sRUFBRSxDQUFDakMsS0FBRCxDQUFWO0FBQW1CMUQsWUFBQUEsTUFBTSxFQUFFLEVBQTNCO0FBQStCOE0sWUFBQUEsUUFBUSxFQUFFO0FBQUUvSCxjQUFBQSxJQUFJLEVBQUU7QUFBUjtBQUF6QyxXQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0w2SCxVQUFBQSxlQUFlLENBQUNqSCxNQUFoQixDQUF1QjZHLElBQXZCLENBQTRCOUksS0FBNUI7QUFDRDtBQUNGOztBQUVELGFBQU9xSixTQUFQO0FBQ0QsS0FsQ00sRUFrQ0osRUFsQ0ksQ0FBUDtBQW1DRCxHQTFEYSxFQTBEWCxDQUFDbkYsTUFBRCxFQUFTbEosT0FBVCxDQTFEVyxDQUFkO0FBMkRELENBNURNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9BbGVydEdyb3Vwcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0FsZXJ0aW5nUGFnZVdyYXBwZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9BdXRob3JpemUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9EeW5hbWljVGFibGVXaXRoR3VpZGVsaW5lcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL05vQWxlcnRNYW5hZ2VyV2FybmluZy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2FsZXJ0LWdyb3Vwcy9BbGVydERldGFpbHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvQWxlcnRHcm91cC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2FsZXJ0LWdyb3Vwcy9BbGVydEdyb3VwQWxlcnRzVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvQWxlcnRHcm91cEZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2FsZXJ0LWdyb3Vwcy9BbGVydFN0YXRlRmlsdGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYWxlcnQtZ3JvdXBzL0dyb3VwQnkudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvTWF0Y2hlckZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3NpbGVuY2VzL0FtQWxlcnRTdGF0ZVRhZy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUZpbHRlcmVkQW1Hcm91cHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VHcm91cGVkQWxlcnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0LCBMb2FkaW5nUGxhY2Vob2xkZXIsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VRdWVyeVBhcmFtcyB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZVF1ZXJ5UGFyYW1zJztcblxuaW1wb3J0IHsgQWxlcnRpbmdQYWdlV3JhcHBlciB9IGZyb20gJy4vY29tcG9uZW50cy9BbGVydGluZ1BhZ2VXcmFwcGVyJztcbmltcG9ydCB7IE5vQWxlcnRNYW5hZ2VyV2FybmluZyB9IGZyb20gJy4vY29tcG9uZW50cy9Ob0FsZXJ0TWFuYWdlcldhcm5pbmcnO1xuaW1wb3J0IHsgQWxlcnRHcm91cCB9IGZyb20gJy4vY29tcG9uZW50cy9hbGVydC1ncm91cHMvQWxlcnRHcm91cCc7XG5pbXBvcnQgeyBBbGVydEdyb3VwRmlsdGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0LWdyb3Vwcy9BbGVydEdyb3VwRmlsdGVyJztcbmltcG9ydCB7IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSBmcm9tICcuL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUnO1xuaW1wb3J0IHsgdXNlQWxlcnRNYW5hZ2Vyc0J5UGVybWlzc2lvbiB9IGZyb20gJy4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlcyc7XG5pbXBvcnQgeyB1c2VGaWx0ZXJlZEFtR3JvdXBzIH0gZnJvbSAnLi9ob29rcy91c2VGaWx0ZXJlZEFtR3JvdXBzJztcbmltcG9ydCB7IHVzZUdyb3VwZWRBbGVydHMgfSBmcm9tICcuL2hvb2tzL3VzZUdyb3VwZWRBbGVydHMnO1xuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IGZldGNoQWxlcnRHcm91cHNBY3Rpb24gfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgTk9USUZJQ0FUSU9OU19QT0xMX0lOVEVSVkFMX01TIH0gZnJvbSAnLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXMgfSBmcm9tICcuL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi91dGlscy9yZWR1eCc7XG5cbmNvbnN0IEFsZXJ0R3JvdXBzID0gKCkgPT4ge1xuICBjb25zdCBhbGVydE1hbmFnZXJzID0gdXNlQWxlcnRNYW5hZ2Vyc0J5UGVybWlzc2lvbignaW5zdGFuY2UnKTtcbiAgY29uc3QgW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdID0gdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZShhbGVydE1hbmFnZXJzKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBbcXVlcnlQYXJhbXNdID0gdXNlUXVlcnlQYXJhbXMoKTtcbiAgY29uc3QgeyBncm91cEJ5ID0gW10gfSA9IGdldEZpbHRlcnNGcm9tVXJsUGFyYW1zKHF1ZXJ5UGFyYW1zKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGFsZXJ0R3JvdXBzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbUFsZXJ0R3JvdXBzKTtcbiAgY29uc3Qge1xuICAgIGxvYWRpbmcsXG4gICAgZXJyb3IsXG4gICAgcmVzdWx0OiByZXN1bHRzID0gW10sXG4gIH0gPSBhbGVydEdyb3Vwc1thbGVydE1hbmFnZXJTb3VyY2VOYW1lIHx8ICcnXSA/PyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG5cbiAgY29uc3QgZ3JvdXBlZEFsZXJ0cyA9IHVzZUdyb3VwZWRBbGVydHMocmVzdWx0cywgZ3JvdXBCeSk7XG4gIGNvbnN0IGZpbHRlcmVkQWxlcnRHcm91cHMgPSB1c2VGaWx0ZXJlZEFtR3JvdXBzKGdyb3VwZWRBbGVydHMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gZmV0Y2hOb3RpZmljYXRpb25zKCkge1xuICAgICAgaWYgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpIHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hBbGVydEdyb3Vwc0FjdGlvbihhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZldGNoTm90aWZpY2F0aW9ucygpO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZmV0Y2hOb3RpZmljYXRpb25zLCBOT1RJRklDQVRJT05TX1BPTExfSU5URVJWQUxfTVMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuICB9LCBbZGlzcGF0Y2gsIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWVdKTtcblxuICBpZiAoIWFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFsZXJ0aW5nUGFnZVdyYXBwZXIgcGFnZUlkPVwiZ3JvdXBzXCI+XG4gICAgICAgIDxOb0FsZXJ0TWFuYWdlcldhcm5pbmcgYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycz17YWxlcnRNYW5hZ2Vyc30gLz5cbiAgICAgIDwvQWxlcnRpbmdQYWdlV3JhcHBlcj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QWxlcnRpbmdQYWdlV3JhcHBlciBwYWdlSWQ9XCJncm91cHNcIj5cbiAgICAgIDxBbGVydEdyb3VwRmlsdGVyIGdyb3Vwcz17cmVzdWx0c30gLz5cbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD1cIkxvYWRpbmcgbm90aWZpY2F0aW9uc1wiIC8+fVxuICAgICAge2Vycm9yICYmICFsb2FkaW5nICYmIChcbiAgICAgICAgPEFsZXJ0IHRpdGxlPXsnRXJyb3IgbG9hZGluZyBub3RpZmljYXRpb25zJ30gc2V2ZXJpdHk9eydlcnJvcid9PlxuICAgICAgICAgIHtlcnJvci5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJ31cbiAgICAgICAgPC9BbGVydD5cbiAgICAgICl9XG4gICAgICB7cmVzdWx0cyAmJlxuICAgICAgICBmaWx0ZXJlZEFsZXJ0R3JvdXBzLm1hcCgoZ3JvdXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2Ake0pTT04uc3RyaW5naWZ5KGdyb3VwLmxhYmVscyl9LWdyb3VwLSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIHsoKGluZGV4ID09PSAxICYmIE9iamVjdC5rZXlzKGZpbHRlcmVkQWxlcnRHcm91cHNbMF0ubGFiZWxzKS5sZW5ndGggPT09IDApIHx8XG4gICAgICAgICAgICAgICAgKGluZGV4ID09PSAwICYmIE9iamVjdC5rZXlzKGdyb3VwLmxhYmVscykubGVuZ3RoID4gMCkpICYmIChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ncm91cGluZ0Jhbm5lcn0+R3JvdXBlZCBieToge09iamVjdC5rZXlzKGdyb3VwLmxhYmVscykuam9pbignLCAnKX08L3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxBbGVydEdyb3VwIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfHwgJyd9IGdyb3VwPXtncm91cH0gLz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICB7cmVzdWx0cyAmJiAhZmlsdGVyZWRBbGVydEdyb3Vwcy5sZW5ndGggJiYgPHA+Tm8gcmVzdWx0cy48L3A+fVxuICAgIDwvQWxlcnRpbmdQYWdlV3JhcHBlcj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZ3JvdXBpbmdCYW5uZXI6IGNzc2BcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygyLCAwKX07XG4gIGAsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRHcm91cHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy9zdG9yZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhZ2VJZDogc3RyaW5nO1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnRpbmdQYWdlV3JhcHBlcjogRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHBhZ2VJZCwgaXNMb2FkaW5nIH0pID0+IHtcbiAgY29uc3QgbmF2TW9kZWwgPSBnZXROYXZNb2RlbChcbiAgICB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KSxcbiAgICBwYWdlSWRcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2lzTG9hZGluZ30+e2NoaWxkcmVufTwvUGFnZS5Db250ZW50cz5cbiAgICA8L1BhZ2U+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFjdGlvbnM6IEFjY2Vzc0NvbnRyb2xBY3Rpb25bXTtcbiAgZmFsbGJhY2s/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhvcml6ZTogRkM8UHJvcHM+ID0gKHsgYWN0aW9ucywgY2hpbGRyZW4sIGZhbGxiYWNrID0gdHJ1ZSB9KSA9PiB7XG4gIGlmIChhY3Rpb25zLnNvbWUoKGFjdGlvbikgPT4gY29udGV4dFNydi5oYXNBY2Nlc3MoYWN0aW9uLCBmYWxsYmFjaykpKSB7XG4gICAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRHluYW1pY1RhYmxlLCBEeW5hbWljVGFibGVQcm9wcyB9IGZyb20gJy4vRHluYW1pY1RhYmxlJztcblxuZXhwb3J0IHR5cGUgRHluYW1pY1RhYmxlV2l0aEd1aWRlbGluZXNQcm9wczxUPiA9IE9taXQ8RHluYW1pY1RhYmxlUHJvcHM8VD4sICdyZW5kZXJQcmVmaXhIZWFkZXIsIHJlbmRlclByZWZpeENlbGwnPjtcblxuLy8gRHluYW1pY1RhYmxlLCBidXQgcmVuZGVycyB2aXN1YWwgZ3VpZGVsaW5lcyBvbiB0aGUgbGVmdCwgZm9yIGxhcmdlciBzY3JlZW4gd2lkdGhzXG5leHBvcnQgY29uc3QgRHluYW1pY1RhYmxlV2l0aEd1aWRlbGluZXMgPSA8VCBleHRlbmRzIG9iamVjdD4oe1xuICByZW5kZXJFeHBhbmRlZENvbnRlbnQsXG4gIC4uLnByb3BzXG59OiBEeW5hbWljVGFibGVXaXRoR3VpZGVsaW5lc1Byb3BzPFQ+KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgcmV0dXJuIChcbiAgICA8RHluYW1pY1RhYmxlXG4gICAgICByZW5kZXJFeHBhbmRlZENvbnRlbnQ9e1xuICAgICAgICByZW5kZXJFeHBhbmRlZENvbnRlbnRcbiAgICAgICAgICA/IChpdGVtLCBpbmRleCwgaXRlbXMpID0+IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7IShpbmRleCA9PT0gaXRlbXMubGVuZ3RoIC0gMSkgJiYgPGRpdiBjbGFzc05hbWU9e2N4KHN0eWxlcy5jb250ZW50R3VpZGVsaW5lLCBzdHlsZXMuZ3VpZGVsaW5lKX0gLz59XG4gICAgICAgICAgICAgICAge3JlbmRlckV4cGFuZGVkQ29udGVudChpdGVtLCBpbmRleCwgaXRlbXMpfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgICAgcmVuZGVyUHJlZml4SGVhZGVyPXsoKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVsYXRpdmV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuaGVhZGVyR3VpZGVsaW5lLCBzdHlsZXMuZ3VpZGVsaW5lKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgcmVuZGVyUHJlZml4Q2VsbD17KF8sIGluZGV4LCBpdGVtcykgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlbGF0aXZlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLnRvcEd1aWRlbGluZSwgc3R5bGVzLmd1aWRlbGluZSl9IC8+XG4gICAgICAgICAgeyEoaW5kZXggPT09IGl0ZW1zLmxlbmd0aCAtIDEpICYmIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuYm90dG9tR3VpZGVsaW5lLCBzdHlsZXMuZ3VpZGVsaW5lKX0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgcmVsYXRpdmU6IGNzc2BcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICBgLFxuICBndWlkZWxpbmU6IGNzc2BcbiAgICBsZWZ0OiAtMTlweDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICR7dGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKX0ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIGAsXG4gIHRvcEd1aWRlbGluZTogY3NzYFxuICAgIHdpZHRoOiAxOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIubWVkaXVtfTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiA1MCU7XG4gIGAsXG4gIGJvdHRvbUd1aWRlbGluZTogY3NzYFxuICAgIHRvcDogNTAlO1xuICAgIGJvdHRvbTogMDtcbiAgYCxcbiAgY29udGVudEd1aWRlbGluZTogY3NzYFxuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogLTQ5cHggIWltcG9ydGFudDtcbiAgYCxcbiAgaGVhZGVyR3VpZGVsaW5lOiBjc3NgXG4gICAgdG9wOiAtMjVweDtcbiAgICBib3R0b206IDA7XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJEYXRhU291cmNlIH0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5cbmltcG9ydCB7IEFsZXJ0TWFuYWdlclBpY2tlciB9IGZyb20gJy4vQWxlcnRNYW5hZ2VyUGlja2VyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYXZhaWxhYmxlQWxlcnRNYW5hZ2VyczogQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZVtdO1xufVxuXG5jb25zdCBOb0FsZXJ0TWFuYWdlcnNBdmFpbGFibGUgPSAoKSA9PiAoXG4gIDxBbGVydCB0aXRsZT1cIk5vIEFsZXJ0bWFuYWdlciBmb3VuZFwiIHNldmVyaXR5PVwid2FybmluZ1wiPlxuICAgIFdlIGNvdWxkIG5vdCBmaW5kIGFueSBleHRlcm5hbCBBbGVydG1hbmFnZXJzIGFuZCB5b3UgbWF5IG5vdCBoYXZlIGFjY2VzcyB0byB0aGUgYnVpbHQtaW4gR3JhZmFuYSBBbGVydG1hbmFnZXIuXG4gIDwvQWxlcnQ+XG4pO1xuXG5jb25zdCBPdGhlckFsZXJ0TWFuYWdlcnNBdmFpbGFibGUgPSAoKSA9PiAoXG4gIDxBbGVydCB0aXRsZT1cIlNlbGVjdGVkIEFsZXJ0bWFuYWdlciBub3QgZm91bmQuIFNlbGVjdCBhIGRpZmZlcmVudCBBbGVydG1hbmFnZXIuXCIgc2V2ZXJpdHk9XCJ3YXJuaW5nXCI+XG4gICAgU2VsZWN0ZWQgQWxlcnRtYW5hZ2VyIG5vIGxvbmdlciBleGlzdHMgb3IgeW91IG1heSBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyBpdC5cbiAgPC9BbGVydD5cbik7XG5cbmV4cG9ydCBjb25zdCBOb0FsZXJ0TWFuYWdlcldhcm5pbmcgPSAoeyBhdmFpbGFibGVBbGVydE1hbmFnZXJzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtfLCBzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lXSA9IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUoYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycyk7XG4gIGNvbnN0IGhhc090aGVyQU1zID0gYXZhaWxhYmxlQWxlcnRNYW5hZ2Vycy5sZW5ndGggPiAwO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtoYXNPdGhlckFNcyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8QWxlcnRNYW5hZ2VyUGlja2VyIG9uQ2hhbmdlPXtzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lfSBkYXRhU291cmNlcz17YXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc30gLz5cbiAgICAgICAgICA8T3RoZXJBbGVydE1hbmFnZXJzQXZhaWxhYmxlIC8+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPE5vQWxlcnRNYW5hZ2Vyc0F2YWlsYWJsZSAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBMaW5rQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEFsZXJ0bWFuYWdlckFsZXJ0LCBBbGVydFN0YXRlIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGdldEluc3RhbmNlc1Blcm1pc3Npb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWNjZXNzLWNvbnRyb2wnO1xuaW1wb3J0IHsgaXNHcmFmYW5hUnVsZXNTb3VyY2UgfSBmcm9tICcuLi8uLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IG1ha2VBTUxpbmssIG1ha2VMYWJlbEJhc2VkU2lsZW5jZUxpbmsgfSBmcm9tICcuLi8uLi91dGlscy9taXNjJztcbmltcG9ydCB7IEFubm90YXRpb25EZXRhaWxzRmllbGQgfSBmcm9tICcuLi9Bbm5vdGF0aW9uRGV0YWlsc0ZpZWxkJztcbmltcG9ydCB7IEF1dGhvcml6ZSB9IGZyb20gJy4uL0F1dGhvcml6ZSc7XG5cbmludGVyZmFjZSBBbU5vdGlmaWNhdGlvbnNBbGVydERldGFpbHNQcm9wcyB7XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbiAgYWxlcnQ6IEFsZXJ0bWFuYWdlckFsZXJ0O1xufVxuXG5leHBvcnQgY29uc3QgQWxlcnREZXRhaWxzOiBGQzxBbU5vdGlmaWNhdGlvbnNBbGVydERldGFpbHNQcm9wcz4gPSAoeyBhbGVydCwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgaW5zdGFuY2VQZXJtaXNzaW9ucyA9IGdldEluc3RhbmNlc1Blcm1pc3Npb25zKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpO1xuXG4gIC8vIEZvciBHcmFmYW5hIE1hbmFnZWQgYWxlcnRzIHRoZSBHZW5lcmF0b3IgVVJMIHJlZGlyZWN0cyB0byB0aGUgYWxlcnQgcnVsZSBlZGl0IHBhZ2UsIHNvIHVwZGF0ZSBwZXJtaXNzaW9uIGlzIHJlcXVpcmVkXG4gIC8vIEZvciBleHRlcm5hbCBhbGVydCBtYW5hZ2VyIHRoZSBHZW5lcmF0b3IgVVJMIHJlZGlyZWN0cyB0byBhbiBleHRlcm5hbCBzZXJ2aWNlIHdoaWNoIHdlIGRvbid0IGNvbnRyb2xcbiAgY29uc3QgaXNHcmFmYW5hU291cmNlID0gaXNHcmFmYW5hUnVsZXNTb3VyY2UoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG4gIGNvbnN0IGlzU2VlU291cmNlQnV0dG9uRW5hYmxlZCA9IGlzR3JhZmFuYVNvdXJjZVxuICAgID8gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWxlcnRpbmdSdWxlUmVhZClcbiAgICA6IHRydWU7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zUm93fT5cbiAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbaW5zdGFuY2VQZXJtaXNzaW9ucy51cGRhdGUsIGluc3RhbmNlUGVybWlzc2lvbnMuY3JlYXRlXX0gZmFsbGJhY2s9e2NvbnRleHRTcnYuaXNFZGl0b3J9PlxuICAgICAgICAgIHthbGVydC5zdGF0dXMuc3RhdGUgPT09IEFsZXJ0U3RhdGUuU3VwcHJlc3NlZCAmJiAoXG4gICAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgICBocmVmPXtgJHttYWtlQU1MaW5rKFxuICAgICAgICAgICAgICAgICcvYWxlcnRpbmcvc2lsZW5jZXMnLFxuICAgICAgICAgICAgICAgIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWVcbiAgICAgICAgICAgICAgKX0mc2lsZW5jZUlkcz0ke2FsZXJ0LnN0YXR1cy5zaWxlbmNlZEJ5LmpvaW4oJywnKX1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICAgIGljb249eydiZWxsJ31cbiAgICAgICAgICAgICAgc2l6ZT17J3NtJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTWFuYWdlIHNpbGVuY2VzXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YWxlcnQuc3RhdHVzLnN0YXRlID09PSBBbGVydFN0YXRlLkFjdGl2ZSAmJiAoXG4gICAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgICBocmVmPXttYWtlTGFiZWxCYXNlZFNpbGVuY2VMaW5rKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIGFsZXJ0LmxhYmVscyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICAgICAgaWNvbj17J2JlbGwtc2xhc2gnfVxuICAgICAgICAgICAgICBzaXplPXsnc20nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaWxlbmNlXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgIHtpc1NlZVNvdXJjZUJ1dHRvbkVuYWJsZWQgJiYgYWxlcnQuZ2VuZXJhdG9yVVJMICYmIChcbiAgICAgICAgICA8TGlua0J1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IGhyZWY9e2FsZXJ0LmdlbmVyYXRvclVSTH0gaWNvbj17J2NoYXJ0LWxpbmUnfSBzaXplPXsnc20nfT5cbiAgICAgICAgICAgIFNlZSBzb3VyY2VcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtPYmplY3QuZW50cmllcyhhbGVydC5hbm5vdGF0aW9ucykubWFwKChbYW5ub3RhdGlvbktleSwgYW5ub3RhdGlvblZhbHVlXSkgPT4gKFxuICAgICAgICA8QW5ub3RhdGlvbkRldGFpbHNGaWVsZCBrZXk9e2Fubm90YXRpb25LZXl9IGFubm90YXRpb25LZXk9e2Fubm90YXRpb25LZXl9IHZhbHVlPXthbm5vdGF0aW9uVmFsdWV9IC8+XG4gICAgICApKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVjZWl2ZXJzfT5cbiAgICAgICAgUmVjZWl2ZXJzOnsnICd9XG4gICAgICAgIHthbGVydC5yZWNlaXZlcnNcbiAgICAgICAgICAubWFwKCh7IG5hbWUgfSkgPT4gbmFtZSlcbiAgICAgICAgICAuZmlsdGVyKChuYW1lKSA9PiAhIW5hbWUpXG4gICAgICAgICAgLmpvaW4oJywgJyl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgYnV0dG9uOiBjc3NgXG4gICAgJiArICYge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgfVxuICBgLFxuICBhY3Rpb25zUm93OiBjc3NgXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIsIDApfSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIubWVkaXVtfTtcbiAgYCxcbiAgcmVjZWl2ZXJzOiBjc3NgXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDEsIDApfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IEFsZXJ0bWFuYWdlckdyb3VwLCBBbGVydFN0YXRlIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyBBbGVydExhYmVscyB9IGZyb20gJy4uL0FsZXJ0TGFiZWxzJztcbmltcG9ydCB7IENvbGxhcHNlVG9nZ2xlIH0gZnJvbSAnLi4vQ29sbGFwc2VUb2dnbGUnO1xuXG5pbXBvcnQgeyBBbGVydEdyb3VwQWxlcnRzVGFibGUgfSBmcm9tICcuL0FsZXJ0R3JvdXBBbGVydHNUYWJsZSc7XG5pbXBvcnQgeyBBbGVydEdyb3VwSGVhZGVyIH0gZnJvbSAnLi9BbGVydEdyb3VwSGVhZGVyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZ3JvdXA6IEFsZXJ0bWFuYWdlckdyb3VwO1xuICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBbGVydEdyb3VwID0gKHsgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgZ3JvdXAgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW2lzQ29sbGFwc2VkLCBzZXRJc0NvbGxhcHNlZF0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncm91cH0gZGF0YS10ZXN0aWQ9XCJhbGVydC1ncm91cFwiPlxuICAgICAgICAgIDxDb2xsYXBzZVRvZ2dsZVxuICAgICAgICAgICAgaXNDb2xsYXBzZWQ9e2lzQ29sbGFwc2VkfVxuICAgICAgICAgICAgb25Ub2dnbGU9eygpID0+IHNldElzQ29sbGFwc2VkKCFpc0NvbGxhcHNlZCl9XG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cImFsZXJ0LWdyb3VwLWNvbGxhcHNlLXRvZ2dsZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoZ3JvdXAubGFiZWxzKS5sZW5ndGggPyAoXG4gICAgICAgICAgICA8QWxlcnRMYWJlbHMgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyTGFiZWxzfSBsYWJlbHM9e2dyb3VwLmxhYmVsc30gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHNwYW4+Tm8gZ3JvdXBpbmc8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbGVydEdyb3VwSGVhZGVyIGdyb3VwPXtncm91cH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgeyFpc0NvbGxhcHNlZCAmJiA8QWxlcnRHcm91cEFsZXJ0c1RhYmxlIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IGFsZXJ0cz17Z3JvdXAuYWxlcnRzfSAvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgd3JhcHBlcjogY3NzYFxuICAgICYgKyAmIHtcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgfVxuICBgLFxuICBoZWFkZXJMYWJlbHM6IGNzc2BcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IC0ke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gIGAsXG4gIGhlYWRlcjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDEsIDEsIDEsIDApfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgd2lkdGg6IDEwMCU7XG4gIGAsXG4gIGdyb3VwOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGAsXG4gIHN1bW1hcnk6IGNzc2BgLFxuICBzcGFuRWxlbWVudDogY3NzYFxuICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gIGAsXG4gIFtBbGVydFN0YXRlLkFjdGl2ZV06IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZXJyb3IubWFpbn07XG4gIGAsXG4gIFtBbGVydFN0YXRlLlN1cHByZXNzZWRdOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnByaW1hcnkubWFpbn07XG4gIGAsXG4gIFtBbGVydFN0YXRlLlVucHJvY2Vzc2VkXTogY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5zZWNvbmRhcnkubWFpbn07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgaW50ZXJ2YWxUb0FiYnJldmlhdGVkRHVyYXRpb25TdHJpbmcgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBbGVydG1hbmFnZXJBbGVydCB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcblxuaW1wb3J0IHsgQWxlcnRMYWJlbHMgfSBmcm9tICcuLi9BbGVydExhYmVscyc7XG5pbXBvcnQgeyBEeW5hbWljVGFibGVDb2x1bW5Qcm9wcywgRHluYW1pY1RhYmxlSXRlbVByb3BzIH0gZnJvbSAnLi4vRHluYW1pY1RhYmxlJztcbmltcG9ydCB7IER5bmFtaWNUYWJsZVdpdGhHdWlkZWxpbmVzIH0gZnJvbSAnLi4vRHluYW1pY1RhYmxlV2l0aEd1aWRlbGluZXMnO1xuaW1wb3J0IHsgQW1BbGVydFN0YXRlVGFnIH0gZnJvbSAnLi4vc2lsZW5jZXMvQW1BbGVydFN0YXRlVGFnJztcblxuaW1wb3J0IHsgQWxlcnREZXRhaWxzIH0gZnJvbSAnLi9BbGVydERldGFpbHMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhbGVydHM6IEFsZXJ0bWFuYWdlckFsZXJ0W107XG4gIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU6IHN0cmluZztcbn1cblxudHlwZSBBbGVydEdyb3VwQWxlcnRzVGFibGVDb2x1bW5Qcm9wcyA9IER5bmFtaWNUYWJsZUNvbHVtblByb3BzPEFsZXJ0bWFuYWdlckFsZXJ0PjtcbnR5cGUgQWxlcnRHcm91cEFsZXJ0c1RhYmxlSXRlbVByb3BzID0gRHluYW1pY1RhYmxlSXRlbVByb3BzPEFsZXJ0bWFuYWdlckFsZXJ0PjtcblxuZXhwb3J0IGNvbnN0IEFsZXJ0R3JvdXBBbGVydHNUYWJsZSA9ICh7IGFsZXJ0cywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgY29sdW1ucyA9IHVzZU1lbW8oXG4gICAgKCk6IEFsZXJ0R3JvdXBBbGVydHNUYWJsZUNvbHVtblByb3BzW10gPT4gW1xuICAgICAge1xuICAgICAgICBpZDogJ3N0YXRlJyxcbiAgICAgICAgbGFiZWw6ICdTdGF0ZScsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbiAgICAgICAgcmVuZGVyQ2VsbDogKHsgZGF0YTogYWxlcnQgfSkgPT4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8QW1BbGVydFN0YXRlVGFnIHN0YXRlPXthbGVydC5zdGF0dXMuc3RhdGV9IC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kdXJhdGlvbn0+XG4gICAgICAgICAgICAgIGZvcnsnICd9XG4gICAgICAgICAgICAgIHtpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyh7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKGFsZXJ0LnN0YXJ0c0F0KSxcbiAgICAgICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKGFsZXJ0LmVuZHNBdCksXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvPlxuICAgICAgICApLFxuICAgICAgICBzaXplOiAnMjIwcHgnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdsYWJlbHMnLFxuICAgICAgICBsYWJlbDogJ0xhYmVscycsXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9kaXNwbGF5LW5hbWVcbiAgICAgICAgcmVuZGVyQ2VsbDogKHsgZGF0YTogeyBsYWJlbHMgfSB9KSA9PiA8QWxlcnRMYWJlbHMgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWxzfSBsYWJlbHM9e2xhYmVsc30gLz4sXG4gICAgICAgIHNpemU6IDEsXG4gICAgICB9LFxuICAgIF0sXG4gICAgW3N0eWxlc11cbiAgKTtcblxuICBjb25zdCBpdGVtcyA9IHVzZU1lbW8oXG4gICAgKCk6IEFsZXJ0R3JvdXBBbGVydHNUYWJsZUl0ZW1Qcm9wc1tdID0+XG4gICAgICBhbGVydHMubWFwKChhbGVydCkgPT4gKHtcbiAgICAgICAgaWQ6IGFsZXJ0LmZpbmdlcnByaW50LFxuICAgICAgICBkYXRhOiBhbGVydCxcbiAgICAgIH0pKSxcbiAgICBbYWxlcnRzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZVdyYXBwZXJ9IGRhdGEtdGVzdGlkPVwiYWxlcnQtZ3JvdXAtdGFibGVcIj5cbiAgICAgIDxEeW5hbWljVGFibGVXaXRoR3VpZGVsaW5lc1xuICAgICAgICBjb2xzPXtjb2x1bW5zfVxuICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgIGlzRXhwYW5kYWJsZT17dHJ1ZX1cbiAgICAgICAgcmVuZGVyRXhwYW5kZWRDb250ZW50PXsoeyBkYXRhOiBhbGVydCB9KSA9PiAoXG4gICAgICAgICAgPEFsZXJ0RGV0YWlscyBhbGVydD17YWxlcnR9IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWU9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9IC8+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB0YWJsZVdyYXBwZXI6IGNzc2BcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgICR7dGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyl9IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoNC41KX07XG4gICAgfVxuICBgLFxuICBkdXJhdGlvbjogY3NzYFxuICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZX07XG4gIGAsXG4gIGxhYmVsczogY3NzYFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VRdWVyeVBhcmFtcyB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZVF1ZXJ5UGFyYW1zJztcbmltcG9ydCB7IEFsZXJ0bWFuYWdlckdyb3VwLCBBbGVydFN0YXRlIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSc7XG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlcyc7XG5pbXBvcnQgeyBnZXRGaWx0ZXJzRnJvbVVybFBhcmFtcyB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyUGlja2VyIH0gZnJvbSAnLi4vQWxlcnRNYW5hZ2VyUGlja2VyJztcblxuaW1wb3J0IHsgQWxlcnRTdGF0ZUZpbHRlciB9IGZyb20gJy4vQWxlcnRTdGF0ZUZpbHRlcic7XG5pbXBvcnQgeyBHcm91cEJ5IH0gZnJvbSAnLi9Hcm91cEJ5JztcbmltcG9ydCB7IE1hdGNoZXJGaWx0ZXIgfSBmcm9tICcuL01hdGNoZXJGaWx0ZXInO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBncm91cHM6IEFsZXJ0bWFuYWdlckdyb3VwW107XG59XG5cbmV4cG9ydCBjb25zdCBBbGVydEdyb3VwRmlsdGVyID0gKHsgZ3JvdXBzIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtmaWx0ZXJLZXksIHNldEZpbHRlcktleV0gPSB1c2VTdGF0ZTxudW1iZXI+KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkpO1xuICBjb25zdCBbcXVlcnlQYXJhbXMsIHNldFF1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIGNvbnN0IHsgZ3JvdXBCeSA9IFtdLCBxdWVyeVN0cmluZywgYWxlcnRTdGF0ZSB9ID0gZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXMocXVlcnlQYXJhbXMpO1xuICBjb25zdCBtYXRjaGVyRmlsdGVyS2V5ID0gYG1hdGNoZXItJHtmaWx0ZXJLZXl9YDtcblxuICBjb25zdCBhbGVydE1hbmFnZXJzID0gdXNlQWxlcnRNYW5hZ2Vyc0J5UGVybWlzc2lvbignaW5zdGFuY2UnKTtcbiAgY29uc3QgW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWUsIHNldEFsZXJ0TWFuYWdlclNvdXJjZU5hbWVdID0gdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZShhbGVydE1hbmFnZXJzKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGNvbnN0IGNsZWFyRmlsdGVycyA9ICgpID0+IHtcbiAgICBzZXRRdWVyeVBhcmFtcyh7XG4gICAgICBncm91cEJ5OiBudWxsLFxuICAgICAgcXVlcnlTdHJpbmc6IG51bGwsXG4gICAgICBhbGVydFN0YXRlOiBudWxsLFxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0RmlsdGVyS2V5KGZpbHRlcktleSArIDEpLCAxMDApO1xuICB9O1xuXG4gIGNvbnN0IHNob3dDbGVhckJ1dHRvbiA9ICEhKGdyb3VwQnkubGVuZ3RoID4gMCB8fCBxdWVyeVN0cmluZyB8fCBhbGVydFN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8QWxlcnRNYW5hZ2VyUGlja2VyXG4gICAgICAgIGN1cnJlbnQ9e2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXtzZXRBbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICBkYXRhU291cmNlcz17YWxlcnRNYW5hZ2Vyc31cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlclNlY3Rpb259PlxuICAgICAgICA8TWF0Y2hlckZpbHRlclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcklucHV0fVxuICAgICAgICAgIGtleT17bWF0Y2hlckZpbHRlcktleX1cbiAgICAgICAgICBkZWZhdWx0UXVlcnlTdHJpbmc9e3F1ZXJ5U3RyaW5nfVxuICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlPXsodmFsdWUpID0+IHNldFF1ZXJ5UGFyYW1zKHsgcXVlcnlTdHJpbmc6IHZhbHVlID8gdmFsdWUgOiBudWxsIH0pfVxuICAgICAgICAvPlxuICAgICAgICA8R3JvdXBCeVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlcklucHV0fVxuICAgICAgICAgIGdyb3Vwcz17Z3JvdXBzfVxuICAgICAgICAgIGdyb3VwQnk9e2dyb3VwQnl9XG4gICAgICAgICAgb25Hcm91cGluZ0NoYW5nZT17KGtleXMpID0+IHNldFF1ZXJ5UGFyYW1zKHsgZ3JvdXBCeToga2V5cy5sZW5ndGggPyBrZXlzLmpvaW4oJywnKSA6IG51bGwgfSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxBbGVydFN0YXRlRmlsdGVyXG4gICAgICAgICAgc3RhdGVGaWx0ZXI9e2FsZXJ0U3RhdGUgYXMgQWxlcnRTdGF0ZX1cbiAgICAgICAgICBvblN0YXRlRmlsdGVyQ2hhbmdlPXsodmFsdWUpID0+IHNldFF1ZXJ5UGFyYW1zKHsgYWxlcnRTdGF0ZTogdmFsdWUgPyB2YWx1ZSA6IG51bGwgfSl9XG4gICAgICAgIC8+XG4gICAgICAgIHtzaG93Q2xlYXJCdXR0b24gJiYgKFxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xlYXJCdXR0b259IHZhcmlhbnQ9eydzZWNvbmRhcnknfSBpY29uPVwidGltZXNcIiBvbkNsaWNrPXtjbGVhckZpbHRlcnN9PlxuICAgICAgICAgICAgQ2xlYXIgZmlsdGVyc1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLm1lZGl1bX07XG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDMpfTtcbiAgYCxcbiAgZmlsdGVyU2VjdGlvbjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICBgLFxuICBmaWx0ZXJJbnB1dDogY3NzYFxuICAgIHdpZHRoOiAzNDBweDtcbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICB9XG4gIGAsXG4gIGNsZWFyQnV0dG9uOiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgbWFyZ2luLXRvcDogMTlweDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUmFkaW9CdXR0b25Hcm91cCwgTGFiZWwsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBbGVydFN0YXRlIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzdGF0ZUZpbHRlcj86IEFsZXJ0U3RhdGU7XG4gIG9uU3RhdGVGaWx0ZXJDaGFuZ2U6ICh2YWx1ZTogQWxlcnRTdGF0ZSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEFsZXJ0U3RhdGVGaWx0ZXIgPSAoeyBvblN0YXRlRmlsdGVyQ2hhbmdlLCBzdGF0ZUZpbHRlciB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGFsZXJ0U3RhdGVPcHRpb25zOiBTZWxlY3RhYmxlVmFsdWVbXSA9IE9iamVjdC5lbnRyaWVzKEFsZXJ0U3RhdGUpXG4gICAgLnNvcnQoKFtsYWJlbEFdLCBbbGFiZWxCXSkgPT4gKGxhYmVsQSA8IGxhYmVsQiA/IC0xIDogMSkpXG4gICAgLm1hcCgoW2xhYmVsLCBzdGF0ZV0pID0+ICh7XG4gICAgICBsYWJlbCxcbiAgICAgIHZhbHVlOiBzdGF0ZSxcbiAgICB9KSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPExhYmVsPlN0YXRlPC9MYWJlbD5cbiAgICAgIDxSYWRpb0J1dHRvbkdyb3VwIG9wdGlvbnM9e2FsZXJ0U3RhdGVPcHRpb25zfSB2YWx1ZT17c3RhdGVGaWx0ZXJ9IG9uQ2hhbmdlPXtvblN0YXRlRmlsdGVyQ2hhbmdlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IHVuaXEgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJY29uLCBMYWJlbCwgTXVsdGlTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBBbGVydG1hbmFnZXJHcm91cCB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBncm91cHM6IEFsZXJ0bWFuYWdlckdyb3VwW107XG4gIGdyb3VwQnk6IHN0cmluZ1tdO1xuICBvbkdyb3VwaW5nQ2hhbmdlOiAoa2V5czogc3RyaW5nW10pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBHcm91cEJ5ID0gKHsgY2xhc3NOYW1lLCBncm91cHMsIGdyb3VwQnksIG9uR3JvdXBpbmdDaGFuZ2UgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgbGFiZWxLZXlPcHRpb25zID0gdW5pcShncm91cHMuZmxhdE1hcCgoZ3JvdXApID0+IGdyb3VwLmFsZXJ0cykuZmxhdE1hcCgoeyBsYWJlbHMgfSkgPT4gT2JqZWN0LmtleXMobGFiZWxzKSkpXG4gICAgLmZpbHRlcigobGFiZWwpID0+ICEobGFiZWwuc3RhcnRzV2l0aCgnX18nKSAmJiBsYWJlbC5lbmRzV2l0aCgnX18nKSkpIC8vIEZpbHRlciBvdXQgcHJpdmF0ZSBsYWJlbHNcbiAgICAubWFwPFNlbGVjdGFibGVWYWx1ZT4oKGtleSkgPT4gKHtcbiAgICAgIGxhYmVsOiBrZXksXG4gICAgICB2YWx1ZToga2V5LFxuICAgIH0pKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS10ZXN0aWQ9eydncm91cC1ieS1jb250YWluZXInfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8TGFiZWw+Q3VzdG9tIGdyb3VwIGJ5PC9MYWJlbD5cbiAgICAgIDxNdWx0aVNlbGVjdFxuICAgICAgICBhcmlhLWxhYmVsPXsnZ3JvdXAgYnkgbGFiZWwga2V5cyd9XG4gICAgICAgIHZhbHVlPXtncm91cEJ5fVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkdyb3VwIGJ5XCJcbiAgICAgICAgcHJlZml4PXs8SWNvbiBuYW1lPXsndGFnLWFsdCd9IC8+fVxuICAgICAgICBvbkNoYW5nZT17KGl0ZW1zKSA9PiB7XG4gICAgICAgICAgb25Hcm91cGluZ0NoYW5nZShpdGVtcy5tYXAoKHsgdmFsdWUgfSkgPT4gdmFsdWUgYXMgc3RyaW5nKSk7XG4gICAgICAgIH19XG4gICAgICAgIG9wdGlvbnM9e2xhYmVsS2V5T3B0aW9uc31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnQGdyYWZhbmEvZXhwZXJpbWVudGFsJztcbmltcG9ydCB7IExhYmVsLCBUb29sdGlwLCBJbnB1dCwgSWNvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBxdWVyeVN0cmluZz86IHN0cmluZztcbiAgZGVmYXVsdFF1ZXJ5U3RyaW5nPzogc3RyaW5nO1xuICBvbkZpbHRlckNoYW5nZTogKGZpbHRlclN0cmluZzogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgTWF0Y2hlckZpbHRlciA9ICh7IGNsYXNzTmFtZSwgb25GaWx0ZXJDaGFuZ2UsIGRlZmF1bHRRdWVyeVN0cmluZywgcXVlcnlTdHJpbmcgfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSAoZTogRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBvbkZpbHRlckNoYW5nZSh0YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBzZWFyY2hJY29uID0gPEljb24gbmFtZT17J3NlYXJjaCd9IC8+O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPExhYmVsPlxuICAgICAgICA8U3RhY2sgZ2FwPXswLjV9PlxuICAgICAgICAgIDxzcGFuPlNlYXJjaCBieSBsYWJlbDwvc3Bhbj5cbiAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgRmlsdGVyIGFsZXJ0cyB1c2luZyBsYWJlbCBxdWVyeWluZywgZXg6XG4gICAgICAgICAgICAgICAgPHByZT57YHtzZXZlcml0eT1cImNyaXRpY2FsXCIsIGluc3RhbmNlPX5cImNsdXN0ZXItdXMtLitcIn1gfTwvcHJlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBuYW1lPVwiaW5mby1jaXJjbGVcIiBzaXplPVwic21cIiAvPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvTGFiZWw+XG4gICAgICA8SW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICBkZWZhdWx0VmFsdWU9e2RlZmF1bHRRdWVyeVN0cmluZ31cbiAgICAgICAgdmFsdWU9e3F1ZXJ5U3RyaW5nfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoQ2hhbmdlfVxuICAgICAgICBkYXRhLXRlc3RpZD1cInNlYXJjaC1xdWVyeS1pbnB1dFwiXG4gICAgICAgIHByZWZpeD17c2VhcmNoSWNvbn1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRXaWR0aH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGljb246IGNzc2BcbiAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgYCxcbiAgaW5wdXRXaWR0aDogY3NzYFxuICAgIHdpZHRoOiAzNDBweDtcbiAgICBmbGV4LWdyb3c6IDA7XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQWxlcnRTdGF0ZSB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcblxuaW1wb3J0IHsgU3RhdGUsIFN0YXRlVGFnIH0gZnJvbSAnLi4vU3RhdGVUYWcnO1xuXG5jb25zdCBhbGVydFN0YXRlVG9TdGF0ZTogUmVjb3JkPEFsZXJ0U3RhdGUsIFN0YXRlPiA9IHtcbiAgW0FsZXJ0U3RhdGUuQWN0aXZlXTogJ2JhZCcsXG4gIFtBbGVydFN0YXRlLlVucHJvY2Vzc2VkXTogJ25ldXRyYWwnLFxuICBbQWxlcnRTdGF0ZS5TdXBwcmVzc2VkXTogJ2luZm8nLFxufTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgc3RhdGU6IEFsZXJ0U3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBBbUFsZXJ0U3RhdGVUYWc6IEZDPFByb3BzPiA9ICh7IHN0YXRlIH0pID0+IDxTdGF0ZVRhZyBzdGF0ZT17YWxlcnRTdGF0ZVRvU3RhdGVbc3RhdGVdfT57c3RhdGV9PC9TdGF0ZVRhZz47XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnYXBwL2NvcmUvc3RvcmUnO1xuXG5pbXBvcnQgeyBBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSwgQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IEFsZXJ0TWFuYWdlckRhdGFTb3VyY2UsIEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfSBmcm9tICcuLi91dGlscy9kYXRhc291cmNlJztcblxuZnVuY3Rpb24gdXNlSXNBbGVydE1hbmFnZXJBdmFpbGFibGUoYXZhaWxhYmxlQWxlcnRNYW5hZ2VyczogQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZVtdKSB7XG4gIHJldHVybiB1c2VDYWxsYmFjayhcbiAgICAoYWxlcnRNYW5hZ2VyTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBhdmFpbGFibGVBbGVydE1hbmFnZXJzTmFtZXMgPSBhdmFpbGFibGVBbGVydE1hbmFnZXJzLm1hcCgoYW0pID0+IGFtLm5hbWUpO1xuICAgICAgcmV0dXJuIGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnNOYW1lcy5pbmNsdWRlcyhhbGVydE1hbmFnZXJOYW1lKTtcbiAgICB9LFxuICAgIFthdmFpbGFibGVBbGVydE1hbmFnZXJzXVxuICApO1xufVxuXG4vKiBUaGlzIHdpbGwgcmV0dXJuIGFtIG5hbWUgZWl0aGVyIGZyb20gcXVlcnkgcGFyYW1zIG9yIGZyb20gbG9jYWwgc3RvcmFnZSBvciBhIGRlZmF1bHQgKGdyYWZhbmEpLlxuICogRHVlIHRvIFJCQUMgcGVybWlzc2lvbnMgR3JhZmFuYSBNYW5hZ2VkIEFsZXJ0IG1hbmFnZXIgb3IgZXh0ZXJuYWwgYWxlcnQgbWFuYWdlcnMgbWF5IG5vdCBiZSBhdmFpbGFibGVcbiAqIEluIHRoZSB3b3JzdCBjYXNlIG5laWh0ZXIgR01BIG5vciBleHRlcm5hbCBhbGVydCBtYW5hZ2VyIGlzIGF2YWlsYWJsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZShcbiAgYXZhaWxhYmxlQWxlcnRNYW5hZ2VyczogQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZVtdXG4pOiBbc3RyaW5nIHwgdW5kZWZpbmVkLCAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nKSA9PiB2b2lkXSB7XG4gIGNvbnN0IFtxdWVyeVBhcmFtcywgdXBkYXRlUXVlcnlQYXJhbXNdID0gdXNlUXVlcnlQYXJhbXMoKTtcbiAgY29uc3QgaXNBbGVydE1hbmFnZXJBdmFpbGFibGUgPSB1c2VJc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShhdmFpbGFibGVBbGVydE1hbmFnZXJzKTtcblxuICBjb25zdCB1cGRhdGUgPSB1c2VDYWxsYmFjayhcbiAgICAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIWlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lID09PSBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FKSB7XG4gICAgICAgIHN0b3JlLmRlbGV0ZShBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSk7XG4gICAgICAgIHVwZGF0ZVF1ZXJ5UGFyYW1zKHsgW0FMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWV06IG51bGwgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdG9yZS5zZXQoQUxFUlRNQU5BR0VSX05BTUVfTE9DQUxfU1RPUkFHRV9LRVksIGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUpO1xuICAgICAgICB1cGRhdGVRdWVyeVBhcmFtcyh7IFtBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVldOiBhbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgW3VwZGF0ZVF1ZXJ5UGFyYW1zLCBpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZV1cbiAgKTtcblxuICBjb25zdCBxdWVyeVNvdXJjZSA9IHF1ZXJ5UGFyYW1zW0FMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWV07XG5cbiAgaWYgKHF1ZXJ5U291cmNlICYmIHR5cGVvZiBxdWVyeVNvdXJjZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoaXNBbGVydE1hbmFnZXJBdmFpbGFibGUocXVlcnlTb3VyY2UpKSB7XG4gICAgICByZXR1cm4gW3F1ZXJ5U291cmNlLCB1cGRhdGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub24gZXhpc3RpbmcgYWxlcnRtYW5hZ2VyXG4gICAgICByZXR1cm4gW3VuZGVmaW5lZCwgdXBkYXRlXTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBzdG9yZVNvdXJjZSA9IHN0b3JlLmdldChBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSk7XG4gIGlmIChzdG9yZVNvdXJjZSAmJiB0eXBlb2Ygc3RvcmVTb3VyY2UgPT09ICdzdHJpbmcnICYmIGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKHN0b3JlU291cmNlKSkge1xuICAgIHVwZGF0ZShzdG9yZVNvdXJjZSk7XG4gICAgcmV0dXJuIFtzdG9yZVNvdXJjZSwgdXBkYXRlXTtcbiAgfVxuXG4gIGlmIChpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FKSkge1xuICAgIHJldHVybiBbR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSwgdXBkYXRlXTtcbiAgfVxuXG4gIHJldHVybiBbdW5kZWZpbmVkLCB1cGRhdGVdO1xufVxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZ2V0QWxlcnRNYW5hZ2VyRGF0YVNvdXJjZXNCeVBlcm1pc3Npb24gfSBmcm9tICcuLi91dGlscy9kYXRhc291cmNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsZXJ0TWFuYWdlcnNCeVBlcm1pc3Npb24oYWNjZXNzVHlwZTogJ2luc3RhbmNlJyB8ICdub3RpZmljYXRpb24nKSB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IGdldEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VzQnlQZXJtaXNzaW9uKGFjY2Vzc1R5cGUpLCBbYWNjZXNzVHlwZV0pO1xufVxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5pbXBvcnQgeyBBbGVydG1hbmFnZXJHcm91cCB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL3R5cGVzJztcblxuaW1wb3J0IHsgbGFiZWxzTWF0Y2hNYXRjaGVycywgcGFyc2VNYXRjaGVycyB9IGZyb20gJy4uL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5pbXBvcnQgeyBnZXRGaWx0ZXJzRnJvbVVybFBhcmFtcyB9IGZyb20gJy4uL3V0aWxzL21pc2MnO1xuXG5leHBvcnQgY29uc3QgdXNlRmlsdGVyZWRBbUdyb3VwcyA9IChncm91cHM6IEFsZXJ0bWFuYWdlckdyb3VwW10pID0+IHtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zXSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gIGNvbnN0IGZpbHRlcnMgPSBnZXRGaWx0ZXJzRnJvbVVybFBhcmFtcyhxdWVyeVBhcmFtcyk7XG4gIGNvbnN0IG1hdGNoZXJzID0gcGFyc2VNYXRjaGVycyhmaWx0ZXJzLnF1ZXJ5U3RyaW5nIHx8ICcnKTtcblxuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGdyb3Vwcy5yZWR1Y2UoKGZpbHRlcmVkR3JvdXA6IEFsZXJ0bWFuYWdlckdyb3VwW10sIGdyb3VwKSA9PiB7XG4gICAgICBjb25zdCBhbGVydHMgPSBncm91cC5hbGVydHMuZmlsdGVyKCh7IGxhYmVscywgc3RhdHVzIH0pID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWxzTWF0Y2ggPSBsYWJlbHNNYXRjaE1hdGNoZXJzKGxhYmVscywgbWF0Y2hlcnMpO1xuICAgICAgICBjb25zdCBmaWx0ZXJzTWF0Y2ggPSBmaWx0ZXJzLmFsZXJ0U3RhdGUgPyBzdGF0dXMuc3RhdGUgPT09IGZpbHRlcnMuYWxlcnRTdGF0ZSA6IHRydWU7XG4gICAgICAgIHJldHVybiBsYWJlbHNNYXRjaCAmJiBmaWx0ZXJzTWF0Y2g7XG4gICAgICB9KTtcbiAgICAgIGlmIChhbGVydHMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBUaGUgdW5ncm91cGVkIGFsZXJ0cyBzaG91bGQgYmUgZmlyc3QgaW4gdGhlIHJlc3VsdHNcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGdyb3VwLmxhYmVscykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZmlsdGVyZWRHcm91cC51bnNoaWZ0KHsgLi4uZ3JvdXAsIGFsZXJ0cyB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWx0ZXJlZEdyb3VwLnB1c2goeyAuLi5ncm91cCwgYWxlcnRzIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsdGVyZWRHcm91cDtcbiAgICB9LCBbXSk7XG4gIH0sIFtncm91cHMsIGZpbHRlcnMsIG1hdGNoZXJzXSk7XG59O1xuIiwiaW1wb3J0IHsgdW5pcUJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExhYmVscyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnRtYW5hZ2VyR3JvdXAgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCB1c2VHcm91cGVkQWxlcnRzID0gKGdyb3VwczogQWxlcnRtYW5hZ2VyR3JvdXBbXSwgZ3JvdXBCeTogc3RyaW5nW10pOiBBbGVydG1hbmFnZXJHcm91cFtdID0+IHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChncm91cEJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZW1wdHlHcm91cGluZ3MgPSBncm91cHMuZmlsdGVyKChncm91cCkgPT4gT2JqZWN0LmtleXMoZ3JvdXAubGFiZWxzKS5sZW5ndGggPT09IDApO1xuICAgICAgaWYgKGVtcHR5R3JvdXBpbmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gTWVyZ2VzIG11bHRpcGxlIHVuZ3JvdXBlZCBncm91cGluZ1xuICAgICAgICByZXR1cm4gZ3JvdXBzLnJlZHVjZSgoY29tYmluZWRHcm91cHMsIGdyb3VwKSA9PiB7XG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGdyb3VwLmxhYmVscykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBub0dyb3VwaW5nR3JvdXAgPSBjb21iaW5lZEdyb3Vwcy5maW5kKCh7IGxhYmVscyB9KSA9PiBPYmplY3Qua2V5cyhsYWJlbHMpKTtcbiAgICAgICAgICAgIGlmICghbm9Hcm91cGluZ0dyb3VwKSB7XG4gICAgICAgICAgICAgIGNvbWJpbmVkR3JvdXBzLnB1c2goeyBhbGVydHM6IGdyb3VwLmFsZXJ0cywgbGFiZWxzOiB7fSwgcmVjZWl2ZXI6IHsgbmFtZTogJ05PTkUnIH0gfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBub0dyb3VwaW5nR3JvdXAuYWxlcnRzID0gdW5pcUJ5KFsuLi5ub0dyb3VwaW5nR3JvdXAuYWxlcnRzLCAuLi5ncm91cC5hbGVydHNdLCAnbGFiZWxzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbWJpbmVkR3JvdXBzLnB1c2goZ3JvdXApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29tYmluZWRHcm91cHM7XG4gICAgICAgIH0sIFtdIGFzIEFsZXJ0bWFuYWdlckdyb3VwW10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYWxlcnRzID0gZ3JvdXBzLmZsYXRNYXAoKHsgYWxlcnRzIH0pID0+IGFsZXJ0cyk7XG4gICAgcmV0dXJuIGFsZXJ0cy5yZWR1Y2UoKGdyb3VwaW5ncywgYWxlcnQpID0+IHtcbiAgICAgIGNvbnN0IGFsZXJ0Q29udGFpbnNHcm91cGluZ3MgPSBncm91cEJ5LmV2ZXJ5KChncm91cEJ5TGFiZWwpID0+IE9iamVjdC5rZXlzKGFsZXJ0LmxhYmVscykuaW5jbHVkZXMoZ3JvdXBCeUxhYmVsKSk7XG5cbiAgICAgIGlmIChhbGVydENvbnRhaW5zR3JvdXBpbmdzKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nR3JvdXBpbmcgPSBncm91cGluZ3MuZmluZCgoZ3JvdXApID0+IHtcbiAgICAgICAgICByZXR1cm4gZ3JvdXBCeS5ldmVyeSgoZ3JvdXBLZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBncm91cC5sYWJlbHNbZ3JvdXBLZXldID09PSBhbGVydC5sYWJlbHNbZ3JvdXBLZXldO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFleGlzdGluZ0dyb3VwaW5nKSB7XG4gICAgICAgICAgY29uc3QgbGFiZWxzID0gZ3JvdXBCeS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XG4gICAgICAgICAgICBhY2MgPSB7IC4uLmFjYywgW2tleV06IGFsZXJ0LmxhYmVsc1trZXldIH07XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sIHt9IGFzIExhYmVscyk7XG4gICAgICAgICAgZ3JvdXBpbmdzLnB1c2goe1xuICAgICAgICAgICAgYWxlcnRzOiBbYWxlcnRdLFxuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcmVjZWl2ZXI6IHtcbiAgICAgICAgICAgICAgbmFtZTogJ05PTkUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleGlzdGluZ0dyb3VwaW5nLmFsZXJ0cy5wdXNoKGFsZXJ0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9Hcm91cGluZ0dyb3VwID0gZ3JvdXBpbmdzLmZpbmQoKGdyb3VwKSA9PiBPYmplY3Qua2V5cyhncm91cC5sYWJlbHMpLmxlbmd0aCA9PT0gMCk7XG4gICAgICAgIGlmICghbm9Hcm91cGluZ0dyb3VwKSB7XG4gICAgICAgICAgZ3JvdXBpbmdzLnB1c2goeyBhbGVydHM6IFthbGVydF0sIGxhYmVsczoge30sIHJlY2VpdmVyOiB7IG5hbWU6ICdOT05FJyB9IH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vR3JvdXBpbmdHcm91cC5hbGVydHMucHVzaChhbGVydCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdyb3VwaW5ncztcbiAgICB9LCBbXSBhcyBBbGVydG1hbmFnZXJHcm91cFtdKTtcbiAgfSwgW2dyb3VwcywgZ3JvdXBCeV0pO1xufTtcbiJdLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwiQWxlcnQiLCJMb2FkaW5nUGxhY2Vob2xkZXIiLCJ1c2VTdHlsZXMyIiwidXNlUXVlcnlQYXJhbXMiLCJBbGVydGluZ1BhZ2VXcmFwcGVyIiwiTm9BbGVydE1hbmFnZXJXYXJuaW5nIiwiQWxlcnRHcm91cCIsIkFsZXJ0R3JvdXBGaWx0ZXIiLCJ1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIiwidXNlQWxlcnRNYW5hZ2Vyc0J5UGVybWlzc2lvbiIsInVzZUZpbHRlcmVkQW1Hcm91cHMiLCJ1c2VHcm91cGVkQWxlcnRzIiwidXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IiLCJmZXRjaEFsZXJ0R3JvdXBzQWN0aW9uIiwiTk9USUZJQ0FUSU9OU19QT0xMX0lOVEVSVkFMX01TIiwiZ2V0RmlsdGVyc0Zyb21VcmxQYXJhbXMiLCJpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUiLCJBbGVydEdyb3VwcyIsImFsZXJ0TWFuYWdlcnMiLCJhbGVydE1hbmFnZXJTb3VyY2VOYW1lIiwiZGlzcGF0Y2giLCJxdWVyeVBhcmFtcyIsImdyb3VwQnkiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJhbGVydEdyb3VwcyIsInN0YXRlIiwiYW1BbGVydEdyb3VwcyIsImxvYWRpbmciLCJlcnJvciIsInJlc3VsdCIsInJlc3VsdHMiLCJncm91cGVkQWxlcnRzIiwiZmlsdGVyZWRBbGVydEdyb3VwcyIsImZldGNoTm90aWZpY2F0aW9ucyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibWVzc2FnZSIsIm1hcCIsImdyb3VwIiwiaW5kZXgiLCJPYmplY3QiLCJrZXlzIiwibGFiZWxzIiwibGVuZ3RoIiwiZ3JvdXBpbmdCYW5uZXIiLCJqb2luIiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW1lIiwic3BhY2luZyIsInVzZVNlbGVjdG9yIiwiUGFnZSIsImdldE5hdk1vZGVsIiwiY2hpbGRyZW4iLCJwYWdlSWQiLCJpc0xvYWRpbmciLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwiY29udGV4dFNydiIsIkF1dGhvcml6ZSIsImFjdGlvbnMiLCJmYWxsYmFjayIsInNvbWUiLCJhY3Rpb24iLCJoYXNBY2Nlc3MiLCJjeCIsIkR5bmFtaWNUYWJsZSIsIkR5bmFtaWNUYWJsZVdpdGhHdWlkZWxpbmVzIiwicmVuZGVyRXhwYW5kZWRDb250ZW50IiwicHJvcHMiLCJpdGVtIiwiaXRlbXMiLCJjb250ZW50R3VpZGVsaW5lIiwiZ3VpZGVsaW5lIiwidW5kZWZpbmVkIiwicmVsYXRpdmUiLCJoZWFkZXJHdWlkZWxpbmUiLCJfIiwidG9wR3VpZGVsaW5lIiwiYm90dG9tR3VpZGVsaW5lIiwiY29sb3JzIiwiYm9yZGVyIiwibWVkaXVtIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiQWxlcnRNYW5hZ2VyUGlja2VyIiwiTm9BbGVydE1hbmFnZXJzQXZhaWxhYmxlIiwiT3RoZXJBbGVydE1hbmFnZXJzQXZhaWxhYmxlIiwiYXZhaWxhYmxlQWxlcnRNYW5hZ2VycyIsInNldEFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJoYXNPdGhlckFNcyIsIkxpbmtCdXR0b24iLCJBbGVydFN0YXRlIiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsImdldEluc3RhbmNlc1Blcm1pc3Npb25zIiwiaXNHcmFmYW5hUnVsZXNTb3VyY2UiLCJtYWtlQU1MaW5rIiwibWFrZUxhYmVsQmFzZWRTaWxlbmNlTGluayIsIkFubm90YXRpb25EZXRhaWxzRmllbGQiLCJBbGVydERldGFpbHMiLCJhbGVydCIsImluc3RhbmNlUGVybWlzc2lvbnMiLCJpc0dyYWZhbmFTb3VyY2UiLCJpc1NlZVNvdXJjZUJ1dHRvbkVuYWJsZWQiLCJoYXNQZXJtaXNzaW9uIiwiQWxlcnRpbmdSdWxlUmVhZCIsImFjdGlvbnNSb3ciLCJ1cGRhdGUiLCJjcmVhdGUiLCJpc0VkaXRvciIsInN0YXR1cyIsIlN1cHByZXNzZWQiLCJzaWxlbmNlZEJ5IiwiYnV0dG9uIiwiQWN0aXZlIiwiZ2VuZXJhdG9yVVJMIiwiZW50cmllcyIsImFubm90YXRpb25zIiwiYW5ub3RhdGlvbktleSIsImFubm90YXRpb25WYWx1ZSIsInJlY2VpdmVycyIsIm5hbWUiLCJmaWx0ZXIiLCJ1c2VTdGF0ZSIsIkFsZXJ0TGFiZWxzIiwiQ29sbGFwc2VUb2dnbGUiLCJBbGVydEdyb3VwQWxlcnRzVGFibGUiLCJBbGVydEdyb3VwSGVhZGVyIiwiaXNDb2xsYXBzZWQiLCJzZXRJc0NvbGxhcHNlZCIsIndyYXBwZXIiLCJoZWFkZXIiLCJoZWFkZXJMYWJlbHMiLCJhbGVydHMiLCJiYWNrZ3JvdW5kIiwic2Vjb25kYXJ5Iiwic3VtbWFyeSIsInNwYW5FbGVtZW50IiwibWFpbiIsInByaW1hcnkiLCJVbnByb2Nlc3NlZCIsInVzZU1lbW8iLCJpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyIsIkFtQWxlcnRTdGF0ZVRhZyIsImNvbHVtbnMiLCJpZCIsImxhYmVsIiwicmVuZGVyQ2VsbCIsImRhdGEiLCJkdXJhdGlvbiIsInN0YXJ0IiwiRGF0ZSIsInN0YXJ0c0F0IiwiZW5kIiwiZW5kc0F0Iiwic2l6ZSIsImZpbmdlcnByaW50IiwidGFibGVXcmFwcGVyIiwidXAiLCJ0eXBvZ3JhcGh5IiwiYm9keVNtYWxsIiwiZm9udFNpemUiLCJCdXR0b24iLCJBbGVydFN0YXRlRmlsdGVyIiwiR3JvdXBCeSIsIk1hdGNoZXJGaWx0ZXIiLCJncm91cHMiLCJmaWx0ZXJLZXkiLCJzZXRGaWx0ZXJLZXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRRdWVyeVBhcmFtcyIsInF1ZXJ5U3RyaW5nIiwiYWxlcnRTdGF0ZSIsIm1hdGNoZXJGaWx0ZXJLZXkiLCJjbGVhckZpbHRlcnMiLCJzZXRUaW1lb3V0Iiwic2hvd0NsZWFyQnV0dG9uIiwiZmlsdGVyU2VjdGlvbiIsImZpbHRlcklucHV0IiwidmFsdWUiLCJjbGVhckJ1dHRvbiIsIlJhZGlvQnV0dG9uR3JvdXAiLCJMYWJlbCIsIm9uU3RhdGVGaWx0ZXJDaGFuZ2UiLCJzdGF0ZUZpbHRlciIsImFsZXJ0U3RhdGVPcHRpb25zIiwic29ydCIsImxhYmVsQSIsImxhYmVsQiIsInVuaXEiLCJJY29uIiwiTXVsdGlTZWxlY3QiLCJjbGFzc05hbWUiLCJvbkdyb3VwaW5nQ2hhbmdlIiwibGFiZWxLZXlPcHRpb25zIiwiZmxhdE1hcCIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsImtleSIsIlN0YWNrIiwiVG9vbHRpcCIsIklucHV0Iiwib25GaWx0ZXJDaGFuZ2UiLCJkZWZhdWx0UXVlcnlTdHJpbmciLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJlIiwidGFyZ2V0Iiwic2VhcmNoSWNvbiIsImljb24iLCJpbnB1dFdpZHRoIiwiU3RhdGVUYWciLCJhbGVydFN0YXRlVG9TdGF0ZSIsInVzZUNhbGxiYWNrIiwic3RvcmUiLCJBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSIsIkFMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWSIsIkdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUiLCJ1c2VJc0FsZXJ0TWFuYWdlckF2YWlsYWJsZSIsImFsZXJ0TWFuYWdlck5hbWUiLCJhdmFpbGFibGVBbGVydE1hbmFnZXJzTmFtZXMiLCJhbSIsImluY2x1ZGVzIiwidXBkYXRlUXVlcnlQYXJhbXMiLCJpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZSIsImRlbGV0ZSIsInNldCIsInF1ZXJ5U291cmNlIiwic3RvcmVTb3VyY2UiLCJnZXQiLCJnZXRBbGVydE1hbmFnZXJEYXRhU291cmNlc0J5UGVybWlzc2lvbiIsImFjY2Vzc1R5cGUiLCJsYWJlbHNNYXRjaE1hdGNoZXJzIiwicGFyc2VNYXRjaGVycyIsImZpbHRlcnMiLCJtYXRjaGVycyIsInJlZHVjZSIsImZpbHRlcmVkR3JvdXAiLCJsYWJlbHNNYXRjaCIsImZpbHRlcnNNYXRjaCIsInVuc2hpZnQiLCJwdXNoIiwidW5pcUJ5IiwiZW1wdHlHcm91cGluZ3MiLCJjb21iaW5lZEdyb3VwcyIsIm5vR3JvdXBpbmdHcm91cCIsImZpbmQiLCJyZWNlaXZlciIsImdyb3VwaW5ncyIsImFsZXJ0Q29udGFpbnNHcm91cGluZ3MiLCJldmVyeSIsImdyb3VwQnlMYWJlbCIsImV4aXN0aW5nR3JvdXBpbmciLCJncm91cEtleSIsImFjYyJdLCJzb3VyY2VSb290IjoiIn0=