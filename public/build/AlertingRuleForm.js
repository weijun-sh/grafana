"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingRuleForm"],{

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

/***/ "./public/app/features/alerting/unified/RuleEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var _components_rule_editor_AlertRuleForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AlertRuleForm.tsx");
/* harmony import */ var _hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents, _AlertWarning, _AlertWarning2, _AlertWarning3, _AlertWarning4, _Page$Contents2, _AlertRuleForm, _LinkButton;

















const ExistingRuleEditor = ({
  identifier
}) => {
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_5__.useCleanup)(state => state.unifiedAlerting.ruleForm.existingRule);
  const {
    loading,
    result,
    error,
    dispatched
  } = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__.useUnifiedAlertingSelector)(state => state.ruleForm.existingRule);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    isEditable
  } = (0,_hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_7__.useIsRuleEditable)(_utils_rule_id__WEBPACK_IMPORTED_MODULE_11__.ruleIdentifierToRuleSourceName(identifier), result === null || result === void 0 ? void 0 : result.rule);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!dispatched) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.fetchEditableRuleAction)(identifier));
    }
  }, [dispatched, dispatch, identifier]);

  if (loading || isEditable === undefined) {
    return _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, {
        text: "Loading rule..."
      })
    }));
  }

  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
        severity: "error",
        title: "Failed to load rule",
        children: error.message
      })
    });
  }

  if (!result) {
    return _AlertWarning || (_AlertWarning = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AlertWarning, {
      title: "Rule not found",
      children: "Sorry! This rule does not exist."
    }));
  }

  if (isEditable === false) {
    return _AlertWarning2 || (_AlertWarning2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AlertWarning, {
      title: "Cannot edit rule",
      children: "Sorry! You do not have permission to edit this rule."
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_rule_editor_AlertRuleForm__WEBPACK_IMPORTED_MODULE_6__.AlertRuleForm, {
    existing: result
  });
};

const RuleEditor = ({
  match
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    id
  } = match.params;
  const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_11__.tryParse(id, true);
  const {
    loading
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_13__["default"])(async () => {
    await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.fetchAllPromBuildInfoAction)());
  }, [dispatch]);
  const {
    canCreateGrafanaRules,
    canCreateCloudRules,
    canEditRules
  } = (0,_utils_accessControlHooks__WEBPACK_IMPORTED_MODULE_10__.useRulesAccess)();

  if (!identifier && !canCreateGrafanaRules && !canCreateCloudRules) {
    return _AlertWarning3 || (_AlertWarning3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AlertWarning, {
      title: "Cannot create rules",
      children: "Sorry! You are not allowed to create rules."
    }));
  }

  if (identifier && !canEditRules(identifier.ruleSourceName)) {
    return _AlertWarning4 || (_AlertWarning4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(AlertWarning, {
      title: "Cannot edit rules",
      children: "Sorry! You are not allowed to edit rules."
    }));
  }

  if (loading) {
    return _Page$Contents2 || (_Page$Contents2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, {
        text: "Loading..."
      })
    }));
  }

  if (identifier) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ExistingRuleEditor, {
      identifier: identifier
    }, id);
  }

  return _AlertRuleForm || (_AlertRuleForm = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_rule_editor_AlertRuleForm__WEBPACK_IMPORTED_MODULE_6__.AlertRuleForm, {}));
};

const AlertWarning = ({
  title,
  children
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
  className: (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(warningStyles).warning,
  severity: "warning",
  title: title,
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
    children: children
  }), _LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
    href: "alerting/list",
    children: "To rule list"
  }))]
});

const warningStyles = theme => ({
  warning: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(4)};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.withErrorBoundary)(RuleEditor, {
  style: 'page'
}));

/***/ }),

/***/ "./public/app/features/alerting/unified/api/preview.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "previewAlertRule": () => (/* binding */ previewAlertRule)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _types_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/types/preview.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");






function previewAlertRule(request) {
  if ((0,_types_preview__WEBPACK_IMPORTED_MODULE_2__.isCloudPreviewRequest)(request)) {
    return previewCloudAlertRule(request);
  }

  if ((0,_types_preview__WEBPACK_IMPORTED_MODULE_2__.isGrafanaPreviewRequest)(request)) {
    return previewGrafanaAlertRule(request);
  }

  throw new Error('unsupported preview rule request');
}

function previewGrafanaAlertRule(request) {
  const type = _types_rule_form__WEBPACK_IMPORTED_MODULE_3__.RuleFormType.grafana;
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.withLoadingIndicator)({
    whileLoading: createResponse(type),
    source: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      method: 'POST',
      url: `/api/v1/rule/test/grafana`,
      data: request
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(({
      data
    }) => {
      return createResponse(type, {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
        series: data.instances.map(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.dataFrameFromJSON)
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(createResponse(type, {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Error,
        error: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.toDataQueryError)(error)
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.share)())
  });
}

function createResponse(ruleType, data = {}) {
  return {
    ruleType,
    data: Object.assign({
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading,
      series: [],
      timeRange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDefaultTimeRange)()
    }, data)
  };
}

function previewCloudAlertRule(request) {
  throw new Error('preview for cloud alerting rules is not implemented');
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelPluginsButtonGroup": () => (/* binding */ PanelPluginsButtonGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function PanelPluginsButtonGroup(props) {
  const {
    value,
    onChange,
    size = 'md'
  } = props;
  const panels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => getSupportedPanels(), []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
    options: panels,
    value: value,
    onChange: onChange,
    size: size
  });
}

function getSupportedPanels() {
  return Object.values(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.panels).reduce((panels, panel) => {
    if (isSupportedPanelPlugin(panel.id)) {
      panels.push({
        value: panel.id,
        label: panel.name,
        imgUrl: panel.info.logos.small
      });
    }

    return panels;
  }, []);
}

function isSupportedPanelPlugin(id) {
  switch (id) {
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__.TIMESERIES:
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__.TABLE:
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__.STAT:
      return true;

    default:
      return false;
  }
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AlertRuleForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertRuleForm": () => (/* binding */ AlertRuleForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./.yarn/__virtual__/react-router-dom-virtual-e45eb1b58b/0/cache/react-router-dom-npm-5.3.0-aa9adb5bec-47584fd629.zip/node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _utils_rule_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _CloudEvaluationBehavior__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/CloudEvaluationBehavior.tsx");
/* harmony import */ var _DetailsStep__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/DetailsStep.tsx");
/* harmony import */ var _GrafanaEvaluationBehavior__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GrafanaEvaluationBehavior.tsx");
/* harmony import */ var _RuleInspector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleInspector.tsx");
/* harmony import */ var _query_and_alert_condition_QueryAndAlertConditionStep__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/QueryAndAlertConditionStep.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _GrafanaEvaluationBeh, _CloudEvaluationBehav, _DetailsStep;
























const AlertRuleForm = ({
  existing
}) => {
  var _ref;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.useAppNotification)();
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_7__.useQueryParams)();
  const [showEditYaml, setShowEditYaml] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const returnTo = (_ref = queryParams['returnTo']) !== null && _ref !== void 0 ? _ref : '/alerting/list';
  const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const defaultValues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (existing) {
      return (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_12__.rulerRuleToFormValues)(existing);
    }

    return Object.assign({}, (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_12__.getDefaultFormValues)(), {
      queries: (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_12__.getDefaultQueries)()
    }, queryParams['defaults'] ? JSON.parse(queryParams['defaults']) : {}, {
      type: _types_rule_form__WEBPACK_IMPORTED_MODULE_10__.RuleFormType.grafana
    });
  }, [existing, queryParams]);
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    mode: 'onSubmit',
    defaultValues,
    shouldFocusError: true
  });
  const {
    handleSubmit,
    watch
  } = formAPI;
  const type = watch('type');
  const dataSourceName = watch('dataSourceName');
  const showStep2 = Boolean(type && (type === _types_rule_form__WEBPACK_IMPORTED_MODULE_10__.RuleFormType.grafana || !!dataSourceName));
  const submitState = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_8__.useUnifiedAlertingSelector)(state => state.ruleForm.saveRule) || _utils_redux__WEBPACK_IMPORTED_MODULE_11__.initialAsyncRequestState;
  (0,app_core_hooks_useCleanup__WEBPACK_IMPORTED_MODULE_6__.useCleanup)(state => state.unifiedAlerting.ruleForm.saveRule);

  const submit = (values, exitOnSave) => {
    var _values$annotations$m, _values$annotations, _values$labels$map$fi, _values$labels;

    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.saveRuleFormAction)({
      values: Object.assign({}, defaultValues, values, {
        annotations: (_values$annotations$m = (_values$annotations = values.annotations) === null || _values$annotations === void 0 ? void 0 : _values$annotations.map(({
          key,
          value
        }) => ({
          key: key.trim(),
          value: value.trim()
        })).filter(({
          key,
          value
        }) => !!key && !!value)) !== null && _values$annotations$m !== void 0 ? _values$annotations$m : [],
        labels: (_values$labels$map$fi = (_values$labels = values.labels) === null || _values$labels === void 0 ? void 0 : _values$labels.map(({
          key,
          value
        }) => ({
          key: key.trim(),
          value: value.trim()
        })).filter(({
          key
        }) => !!key)) !== null && _values$labels$map$fi !== void 0 ? _values$labels$map$fi : []
      }),
      existing,
      redirectOnSave: exitOnSave ? returnTo : undefined
    }));
  };

  const deleteRule = () => {
    if (existing) {
      const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_13__.fromRulerRule(existing.ruleSourceName, existing.namespace, existing.group.name, existing.rule);
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_9__.deleteRuleAction)(identifier, {
        navigateTo: '/alerting/list'
      }));
    }
  };

  const onInvalid = () => {
    notifyApp.error('There are errors in the form. Please correct them and try again!');
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, Object.assign({}, formAPI, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("form", {
      onSubmit: e => e.preventDefault(),
      className: styles.form,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.PageToolbar, {
        title: `${existing ? 'Edit' : 'Create'} alert rule`,
        pageIcon: "bell",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.Link, {
          to: returnTo,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            variant: "secondary",
            disabled: submitState.loading,
            type: "button",
            fill: "outline",
            children: "Cancel"
          })
        }), existing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "destructive",
          type: "button",
          onClick: () => setShowDeleteModal(true),
          children: "Delete"
        }) : null, isCortexLokiOrRecordingRule(watch) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "secondary",
          type: "button",
          onClick: () => setShowEditYaml(true),
          disabled: submitState.loading,
          children: "Edit yaml"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "primary",
          type: "button",
          onClick: handleSubmit(values => submit(values, false), onInvalid),
          disabled: submitState.loading,
          children: [submitState.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
            className: styles.buttonSpinner,
            inline: true
          }), "Save"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          variant: "primary",
          type: "button",
          onClick: handleSubmit(values => submit(values, true), onInvalid),
          disabled: submitState.loading,
          children: [submitState.loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
            className: styles.buttonSpinner,
            inline: true
          }), "Save and exit"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
        className: styles.contentOuter,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.CustomScrollbar, {
          autoHeightMin: "100%",
          hideHorizontalTrack: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
            className: styles.contentInner,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_query_and_alert_condition_QueryAndAlertConditionStep__WEBPACK_IMPORTED_MODULE_18__.QueryAndAlertConditionStep, {
              editingExistingRule: !!existing
            }), showStep2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
              children: [type === _types_rule_form__WEBPACK_IMPORTED_MODULE_10__.RuleFormType.grafana ? _GrafanaEvaluationBeh || (_GrafanaEvaluationBeh = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_GrafanaEvaluationBehavior__WEBPACK_IMPORTED_MODULE_16__.GrafanaEvaluationBehavior, {})) : _CloudEvaluationBehav || (_CloudEvaluationBehav = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_CloudEvaluationBehavior__WEBPACK_IMPORTED_MODULE_14__.CloudEvaluationBehavior, {})), _DetailsStep || (_DetailsStep = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_DetailsStep__WEBPACK_IMPORTED_MODULE_15__.DetailsStep, {}))]
            })]
          })
        })
      })]
    }), showDeleteModal ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal, {
      isOpen: true,
      title: "Delete rule",
      body: "Deleting this rule will permanently remove it. Are you sure you want to delete this rule?",
      confirmText: "Yes, delete",
      icon: "exclamation-triangle",
      onConfirm: deleteRule,
      onDismiss: () => setShowDeleteModal(false)
    }) : null, showEditYaml ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_RuleInspector__WEBPACK_IMPORTED_MODULE_17__.RuleInspector, {
      onClose: () => setShowEditYaml(false)
    }) : null]
  }));
};

const isCortexLokiOrRecordingRule = watch => {
  const [ruleType, dataSourceName] = watch(['type', 'dataSourceName']);
  return (ruleType === _types_rule_form__WEBPACK_IMPORTED_MODULE_10__.RuleFormType.cloudAlerting || ruleType === _types_rule_form__WEBPACK_IMPORTED_MODULE_10__.RuleFormType.cloudRecording) && dataSourceName !== '';
};

const getStyles = theme => {
  return {
    buttonSpinner: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing(1)};
    `,
    form: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    `,
    contentInner: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex: 1;
      padding: ${theme.spacing(2)};
    `,
    contentOuter: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: ${theme.colors.background.primary};
      border: 1px solid ${theme.colors.border.weak};
      border-radius: ${theme.shape.borderRadius()};
      margin: ${theme.spacing(0, 2, 2)};
      overflow: hidden;
      flex: 1;
    `,
    flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AnnotationKeyInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationKeyInput": () => (/* binding */ AnnotationKeyInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _SelectWIthAdd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["value", "existingKeys", "aria-label"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const AnnotationKeyInput = _ref => {
  let {
    value,
    existingKeys,
    'aria-label': ariaLabel
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const annotationOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.values(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.Annotation).filter(key => !existingKeys.includes(key)) // remove keys already taken in other annotations
  .map(key => ({
    value: key,
    label: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.annotationLabels[key]
  })), [existingKeys]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SelectWIthAdd__WEBPACK_IMPORTED_MODULE_2__.SelectWithAdd, Object.assign({
    "aria-label": ariaLabel,
    value: value,
    options: annotationOptions,
    custom: !!value && !Object.values(_utils_constants__WEBPACK_IMPORTED_MODULE_1__.Annotation).includes(value)
  }, rest));
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AnnotationKeyInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationKeyInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"];

var _Label;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const AnnotationsField = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  const {
    control,
    register,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const annotations = watch('annotations');
  const existingKeys = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(index => annotations.filter((_, idx) => idx !== index).map(({
    key
  }) => key), [annotations]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
      children: "Summary and annotations"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldArray, {
      name: 'annotations',
      control: control,
      children: ({
        fields,
        append,
        remove
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: styles.flexColumn,
          children: [fields.map((field, index) => {
            var _annotations$index, _annotations$index$ke, _errors$annotations, _errors$annotations$i, _errors$annotations$i2, _errors$annotations2, _errors$annotations2$, _errors$annotations2$2, _annotations$index2, _errors$annotations3, _errors$annotations3$, _errors$annotations3$2, _errors$annotations4, _errors$annotations4$, _errors$annotations4$2;

            const isUrl = (_annotations$index = annotations[index]) === null || _annotations$index === void 0 ? void 0 : (_annotations$index$ke = _annotations$index.key) === null || _annotations$index$ke === void 0 ? void 0 : _annotations$index$ke.toLocaleLowerCase().endsWith('url');
            const ValueInputComponent = isUrl ? _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input : _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TextArea;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: styles.flexRow,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                className: styles.field,
                invalid: !!((_errors$annotations = errors.annotations) !== null && _errors$annotations !== void 0 && (_errors$annotations$i = _errors$annotations[index]) !== null && _errors$annotations$i !== void 0 && (_errors$annotations$i2 = _errors$annotations$i.key) !== null && _errors$annotations$i2 !== void 0 && _errors$annotations$i2.message),
                error: (_errors$annotations2 = errors.annotations) === null || _errors$annotations2 === void 0 ? void 0 : (_errors$annotations2$ = _errors$annotations2[index]) === null || _errors$annotations2$ === void 0 ? void 0 : (_errors$annotations2$2 = _errors$annotations2$.key) === null || _errors$annotations2$2 === void 0 ? void 0 : _errors$annotations2$2.message,
                "data-testid": `annotation-key-${index}`,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
                  name: `annotations[${index}].key`,
                  render: _ref => {
                    let {} = _ref,
                        field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_AnnotationKeyInput__WEBPACK_IMPORTED_MODULE_4__.AnnotationKeyInput, Object.assign({}, field, {
                      "aria-label": `Annotation detail ${index + 1}`,
                      existingKeys: existingKeys(index),
                      width: 18
                    }));
                  },
                  control: control,
                  rules: {
                    required: {
                      value: !!((_annotations$index2 = annotations[index]) !== null && _annotations$index2 !== void 0 && _annotations$index2.value),
                      message: 'Required.'
                    }
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.flexRowItemMargin, styles.field),
                invalid: !!((_errors$annotations3 = errors.annotations) !== null && _errors$annotations3 !== void 0 && (_errors$annotations3$ = _errors$annotations3[index]) !== null && _errors$annotations3$ !== void 0 && (_errors$annotations3$2 = _errors$annotations3$.value) !== null && _errors$annotations3$2 !== void 0 && _errors$annotations3$2.message),
                error: (_errors$annotations4 = errors.annotations) === null || _errors$annotations4 === void 0 ? void 0 : (_errors$annotations4$ = _errors$annotations4[index]) === null || _errors$annotations4$ === void 0 ? void 0 : (_errors$annotations4$2 = _errors$annotations4$.value) === null || _errors$annotations4$2 === void 0 ? void 0 : _errors$annotations4$2.message,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(ValueInputComponent, Object.assign({
                  "data-testid": `annotation-value-${index}`,
                  className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.annotationValueInput, {
                    [styles.textarea]: !isUrl
                  })
                }, register(`annotations[${index}].value`), {
                  placeholder: isUrl ? 'https://' : `Text`,
                  defaultValue: field.value
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                type: "button",
                className: styles.flexRowItemMargin,
                "aria-label": "delete annotation",
                icon: "trash-alt",
                variant: "secondary",
                onClick: () => remove(index)
              })]
            }, field.id);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            className: styles.addAnnotationsButton,
            icon: "plus-circle",
            type: "button",
            variant: "secondary",
            onClick: () => {
              append({
                key: '',
                value: ''
              });
            },
            children: "Add info"
          })]
        });
      }
    })]
  });
};

const getStyles = theme => ({
  annotationValueInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 426px;
  `,
  textarea: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    height: 76px;
  `,
  addAnnotationsButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex-grow: 0;
    align-self: flex-start;
    margin-left: 148px;
  `,
  flexColumn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
  `,
  field: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing.xs};
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `,
  flexRowItemMargin: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing.xs};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnnotationsField);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/CloudEvaluationBehavior.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudEvaluationBehavior": () => (/* binding */ CloudEvaluationBehavior)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _PreviewRule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/PreviewRule.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _PreviewRule;

const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const CloudEvaluationBehavior = () => {
  var _errors$forTime, _errors$forTime2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  const {
    register,
    control,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const type = watch('type'); // cloud recording rules do not have alert conditions

  if (type === _types_rule_form__WEBPACK_IMPORTED_MODULE_4__.RuleFormType.cloudRecording) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_RuleEditorSection__WEBPACK_IMPORTED_MODULE_7__.RuleEditorSection, {
    stepNo: 2,
    title: "Alert evaluation behavior",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
      label: "For",
      description: "Expression has to be true for this long for the alert to be fired.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: styles.flexRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          invalid: !!((_errors$forTime = errors.forTime) !== null && _errors$forTime !== void 0 && _errors$forTime.message),
          error: (_errors$forTime2 = errors.forTime) === null || _errors$forTime2 === void 0 ? void 0 : _errors$forTime2.message,
          className: styles.inlineField,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register('forTime', {
            pattern: {
              value: /^\d+$/,
              message: 'Must be a positive integer.'
            }
          }), {
            width: 8
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
          name: "forTimeUnit",
          render: _ref => {
            let {
              field: {
                onChange
              }
            } = _ref,
                field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, Object.assign({}, field, {
              options: _utils_time__WEBPACK_IMPORTED_MODULE_5__.timeOptions,
              onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value),
              width: 15,
              className: styles.timeUnit
            }));
          },
          control: control
        })]
      })
    }), _PreviewRule || (_PreviewRule = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_PreviewRule__WEBPACK_IMPORTED_MODULE_6__.PreviewRule, {}))]
  });
};

const getStyles = theme => ({
  inlineField: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 0;
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  timeUnit: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing.xs};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/CloudRulesSourcePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudRulesSourcePicker": () => (/* binding */ CloudRulesSourcePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useRuleSourcesWithRuler.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["value"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function CloudRulesSourcePicker(_ref) {
  let {
    value
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const rulesSourcesWithRuler = (0,_hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_2__.useRulesSourcesWithRuler)();
  const dataSourceFilter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(ds => {
    return !!rulesSourcesWithRuler.find(({
      id
    }) => id === ds.id);
  }, [rulesSourcesWithRuler]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourcePicker, Object.assign({
    noDefault: true,
    alerting: true,
    filter: dataSourceFilter,
    current: value
  }, props));
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/ConditionField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionField": () => (/* binding */ ConditionField)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const ConditionField = () => {
  var _errors$condition, _errors$condition2;

  const {
    watch,
    setValue,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const queries = watch('queries');
  const condition = watch('condition');
  const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => queries.filter(q => !!q.refId).map(q => ({
    value: q.refId,
    label: q.refId
  })), [queries]);
  const expressions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return queries.filter(query => query.datasourceUid === app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_4__.ExpressionDatasourceUID);
  }, [queries]); // automatically use the last expression when new expressions have been added

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const lastExpression = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(expressions);

    if (lastExpression) {
      setValue('condition', lastExpression.refId, {
        shouldValidate: true
      });
    }
  }, [expressions, setValue]); // reset condition if option no longer exists or if it is unset, but there are options available

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const lastExpression = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.last)(expressions);
    const conditionExists = options.find(({
      value
    }) => value === condition);

    if (condition && !conditionExists) {
      var _lastExpression$refId;

      setValue('condition', (_lastExpression$refId = lastExpression === null || lastExpression === void 0 ? void 0 : lastExpression.refId) !== null && _lastExpression$refId !== void 0 ? _lastExpression$refId : null);
    } else if (!condition && lastExpression) {
      setValue('condition', lastExpression.refId, {
        shouldValidate: true
      });
    }
  }, [condition, expressions, options, setValue]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
    label: "Condition",
    description: "The query or expression that will be alerted on",
    error: (_errors$condition = errors.condition) === null || _errors$condition === void 0 ? void 0 : _errors$condition.message,
    invalid: !!((_errors$condition2 = errors.condition) !== null && _errors$condition2 !== void 0 && _errors$condition2.message),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
      name: "condition",
      render: _ref => {
        let {
          field: {
            onChange
          }
        } = _ref,
            field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, Object.assign({
          "aria-label": "Condition"
        }, field, {
          width: 42,
          options: options,
          onChange: v => {
            var _v$value;

            return onChange((_v$value = v === null || v === void 0 ? void 0 : v.value) !== null && _v$value !== void 0 ? _v$value : null);
          },
          noOptionsMessage: "No queries defined"
        }));
      },
      rules: {
        required: {
          value: true,
          message: 'Please select the condition to alert on'
        }
      }
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/DetailsStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsStep": () => (/* binding */ DetailsStep)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _AnnotationsField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx");
/* harmony import */ var _GroupAndNamespaceFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GroupAndNamespaceFields.tsx");
/* harmony import */ var _LabelsField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var _RuleFolderPicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleFolderPicker.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/util.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"];

var _Label, _AnnotationsField, _LabelsField;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const recordingRuleNameValidationPattern = {
  message: 'Recording rule name must be valid metric name. It may only contain letters, numbers, and colons. It may not contain whitespace.',
  value: /^[a-zA-Z_:][a-zA-Z0-9_:]*$/
};
const DetailsStep = () => {
  var _errors$name, _errors$name2, _errors$folder, _errors$folder2, _errors$group, _errors$group2;

  const {
    register,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const ruleFormType = watch('type');
  const dataSourceName = watch('dataSourceName');
  const type = watch('type');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_RuleEditorSection__WEBPACK_IMPORTED_MODULE_9__.RuleEditorSection, {
    stepNo: type === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording ? 2 : 3,
    title: type === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording ? 'Add details for your recording rule' : 'Add details for your alert',
    description: type === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording ? 'Add labels to help you better manage your rules' : 'Write a summary and add labels to help you better manage your alerts',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      className: styles.formInput,
      label: "Rule name",
      error: errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
      invalid: !!((_errors$name2 = errors.name) !== null && _errors$name2 !== void 0 && _errors$name2.message),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({
        id: "name"
      }, register('name', {
        required: {
          value: true,
          message: 'Must enter an alert name'
        },
        pattern: ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording ? recordingRuleNameValidationPattern : undefined,
        validate: {
          pathSeparator: value => {
            // we use the alert rule name as the "groupname" for Grafana managed alerts, so we can't allow path separators
            if (ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.grafana) {
              return (0,_util__WEBPACK_IMPORTED_MODULE_11__.checkForPathSeparator)(value);
            }

            return true;
          }
        }
      })))
    }), (ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording || ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudAlerting) && dataSourceName && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_GroupAndNamespaceFields__WEBPACK_IMPORTED_MODULE_7__.GroupAndNamespaceFields, {
      rulesSourceName: dataSourceName
    }), ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.grafana && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: styles.flexRow,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
        label: _Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
          htmlFor: "folder",
          description: 'Select a folder to store your rule.',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.Stack, {
            gap: 0.5,
            children: ["Folder", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
              placement: "top",
              content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                children: "Each folder has unique folder permission. When you store multiple rules in a folder, the folder access permissions get assigned to the rules."
              }),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
                name: "info-circle",
                size: "xs"
              })
            })]
          })
        })),
        className: styles.formInput,
        error: (_errors$folder = errors.folder) === null || _errors$folder === void 0 ? void 0 : _errors$folder.message,
        invalid: !!((_errors$folder2 = errors.folder) !== null && _errors$folder2 !== void 0 && _errors$folder2.message),
        "data-testid": "folder-picker",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
          render: _ref => {
            let {} = _ref,
                field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_RuleFolderPicker__WEBPACK_IMPORTED_MODULE_10__.RuleFolderPicker, Object.assign({
              inputId: "folder"
            }, field, {
              enableCreateNew: true,
              enableReset: true
            }));
          },
          name: "folder",
          rules: {
            required: {
              value: true,
              message: 'Please select a folder'
            },
            validate: {
              pathSeparator: folder => (0,_util__WEBPACK_IMPORTED_MODULE_11__.checkForPathSeparator)(folder.title)
            }
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
        label: "Group",
        "data-testid": "group-picker",
        description: "Rules within the same group are evaluated after the same time interval.",
        className: styles.formInput,
        error: (_errors$group = errors.group) === null || _errors$group === void 0 ? void 0 : _errors$group.message,
        invalid: !!((_errors$group2 = errors.group) !== null && _errors$group2 !== void 0 && _errors$group2.message),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({
          id: "group"
        }, register('group', {
          required: {
            value: true,
            message: 'Must enter a group name'
          }
        })))
      })]
    }), type !== _types_rule_form__WEBPACK_IMPORTED_MODULE_5__.RuleFormType.cloudRecording && (_AnnotationsField || (_AnnotationsField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_AnnotationsField__WEBPACK_IMPORTED_MODULE_6__["default"], {}))), _LabelsField || (_LabelsField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_LabelsField__WEBPACK_IMPORTED_MODULE_8__["default"], {}))]
  });
};

const getStyles = theme => ({
  formInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 330px;
    & + & {
      margin-left: ${theme.spacing(3)};
    }
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/ExpressionEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpressionEditor": () => (/* binding */ ExpressionEditor)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;








const ExpressionEditor = ({
  value,
  onChange,
  dataSourceName
}) => {
  var _dataSource$component, _dataSource$component2;

  const {
    mapToValue,
    mapToQuery
  } = useQueryMappers(dataSourceName);
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mapToQuery({
    refId: 'A',
    hide: false
  }, value));
  const {
    error,
    loading,
    value: dataSource
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getDataSourceSrv)().get(dataSourceName);
  }, [dataSourceName]);
  const onChangeQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(query => {
    setQuery(query);
    onChange(mapToValue(query));
  }, [onChange, mapToValue]);

  if (loading || (dataSource === null || dataSource === void 0 ? void 0 : dataSource.name) !== dataSourceName) {
    return null;
  }

  if (error || !dataSource || !(dataSource !== null && dataSource !== void 0 && (_dataSource$component = dataSource.components) !== null && _dataSource$component !== void 0 && _dataSource$component.QueryEditor)) {
    const errorMessage = (error === null || error === void 0 ? void 0 : error.message) || 'Data source plugin does not export any Query Editor component';
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: ["Could not load query editor due to: ", errorMessage]
    }));
  }

  const QueryEditor = dataSource === null || dataSource === void 0 ? void 0 : (_dataSource$component2 = dataSource.components) === null || _dataSource$component2 === void 0 ? void 0 : _dataSource$component2.QueryEditor;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(QueryEditor, {
    query: query,
    queries: [query],
    app: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.CloudAlerting,
    onChange: onChangeQuery,
    onRunQuery: lodash__WEBPACK_IMPORTED_MODULE_0__.noop,
    datasource: dataSource
  });
};

function useQueryMappers(dataSourceName) {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const settings = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getDataSourceSrv)().getInstanceSettings(dataSourceName);

    switch (settings === null || settings === void 0 ? void 0 : settings.type) {
      case 'loki':
      case 'prometheus':
        return {
          mapToValue: query => query.expr,
          mapToQuery: (existing, value) => Object.assign({}, existing, {
            expr: value
          })
        };

      default:
        throw new Error(`${dataSourceName} is not supported as an expression editor`);
    }
  }, [dataSourceName]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GrafanaAlertStatePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaAlertStatePicker": () => (/* binding */ GrafanaAlertStatePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["includeNoData", "includeError"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const options = [{
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.GrafanaAlertStateDecision.Alerting,
  label: 'Alerting'
}, {
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.GrafanaAlertStateDecision.NoData,
  label: 'No Data'
}, {
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.GrafanaAlertStateDecision.OK,
  label: 'OK'
}, {
  value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.GrafanaAlertStateDecision.Error,
  label: 'Error'
}];
const GrafanaAlertStatePicker = _ref => {
  let {
    includeNoData,
    includeError
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const opts = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!includeNoData) {
      return options.filter(opt => opt.value !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.GrafanaAlertStateDecision.NoData);
    }

    if (!includeError) {
      return options.filter(opt => opt.value !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.GrafanaAlertStateDecision.Error);
    }

    return options;
  }, [includeNoData, includeError]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, Object.assign({
    options: opts
  }, props));
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GrafanaConditionEvalWarning.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaConditionEvalWarning": () => (/* binding */ GrafanaConditionEvalWarning)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert;







// a warning that will be shown if a problematic yet technically valid combination of "evaluate every" and "evaluate for" is enetered
const GrafanaConditionEvalWarning = () => {
  const {
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const evaluateFor = watch('evaluateFor');
  const evaluateEvery = watch('evaluateEvery');

  if (evaluateFor === '0') {
    return null;
  }

  const durationFor = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.parseDuration)(evaluateFor);
  const durationEvery = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.parseDuration)(evaluateEvery);

  if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(durationFor) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(durationEvery)) {
    return null;
  }

  const millisFor = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.durationToMilliseconds)(durationFor);
  const millisEvery = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.durationToMilliseconds)(durationEvery);

  if (millisFor && millisEvery && millisFor <= millisEvery) {
    return _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      severity: "warning",
      title: "",
      children: "Setting a \"for\" duration that is less than or equal to the evaluation interval will result in the evaluation interval being used to calculate when an alert that has stopped receiving data will be closed."
    }));
  }

  return null;
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GrafanaEvaluationBehavior.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaEvaluationBehavior": () => (/* binding */ GrafanaEvaluationBehavior)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _GrafanaAlertStatePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GrafanaAlertStatePicker.tsx");
/* harmony import */ var _GrafanaConditionEvalWarning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/GrafanaConditionEvalWarning.tsx");
/* harmony import */ var _PreviewRule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/PreviewRule.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"],
      _excluded2 = ["onChange", "ref"];

var _GrafanaConditionEval, _PreviewRule;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const MIN_TIME_RANGE_STEP_S = 10; // 10 seconds

const forValidationOptions = {
  required: {
    value: true,
    message: 'Required.'
  },
  pattern: _utils_time__WEBPACK_IMPORTED_MODULE_5__.durationValidationPattern
};
const evaluateEveryValidationOptions = {
  required: {
    value: true,
    message: 'Required.'
  },
  pattern: _utils_time__WEBPACK_IMPORTED_MODULE_5__.positiveDurationValidationPattern,
  validate: value => {
    const duration = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.parseDuration)(value);

    if (Object.keys(duration).length) {
      const diff = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.durationToMilliseconds)(duration);

      if (diff < MIN_TIME_RANGE_STEP_S * 1000) {
        return `Cannot be less than ${MIN_TIME_RANGE_STEP_S} seconds.`;
      }

      if (diff % (MIN_TIME_RANGE_STEP_S * 1000) !== 0) {
        return `Must be a multiple of ${MIN_TIME_RANGE_STEP_S} seconds.`;
      }
    }

    return true;
  }
};
const GrafanaEvaluationBehavior = () => {
  var _errors$evaluateFor, _errors$evaluateFor2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const [showErrorHandling, setShowErrorHandling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    register,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const evaluateEveryId = 'eval-every-input';
  const evaluateForId = 'eval-for-input';
  return (
    /*#__PURE__*/
    // TODO remove "and alert condition" for recording rules
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_RuleEditorSection__WEBPACK_IMPORTED_MODULE_10__.RuleEditorSection, {
      stepNo: 2,
      title: "Alert evaluation behavior",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
        label: "Evaluate",
        description: "Evaluation interval applies to every rule within a group. It can overwrite the interval of an existing alert rule.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: styles.flexRow,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineLabel, {
            htmlFor: evaluateEveryId,
            width: 16,
            tooltip: "How often the alert will be evaluated to see if it fires",
            children: "Evaluate every"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({
            id: evaluateEveryId,
            width: 8
          }, register('evaluateEvery', evaluateEveryValidationOptions))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineLabel, {
            htmlFor: evaluateForId,
            width: 7,
            tooltip: "Once condition is breached, alert will go into pending state. If it is pending for longer than the \"for\" value, it will become a firing alert.",
            children: "for"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
            className: styles.inlineField,
            error: (_errors$evaluateFor = errors.evaluateFor) === null || _errors$evaluateFor === void 0 ? void 0 : _errors$evaluateFor.message,
            invalid: !!((_errors$evaluateFor2 = errors.evaluateFor) !== null && _errors$evaluateFor2 !== void 0 && _errors$evaluateFor2.message),
            validationMessageHorizontalOverflow: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({
              id: evaluateForId,
              width: 8
            }, register('evaluateFor', forValidationOptions)))
          })]
        })
      }), _GrafanaConditionEval || (_GrafanaConditionEval = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_GrafanaConditionEvalWarning__WEBPACK_IMPORTED_MODULE_8__.GrafanaConditionEvalWarning, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_6__.CollapseToggle, {
        isCollapsed: !showErrorHandling,
        onToggle: collapsed => setShowErrorHandling(!collapsed),
        text: "Configure no data and error handling",
        className: styles.collapseToggle
      }), showErrorHandling && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
          htmlFor: "no-data-state-input",
          label: "Alert state if no data or all values are null",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
            render: _ref => {
              let {
                field: {
                  onChange
                }
              } = _ref,
                  field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_GrafanaAlertStatePicker__WEBPACK_IMPORTED_MODULE_7__.GrafanaAlertStatePicker, Object.assign({}, field, {
                inputId: "no-data-state-input",
                width: 42,
                includeNoData: true,
                includeError: false,
                onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value)
              }));
            },
            name: "noDataState"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
          htmlFor: "exec-err-state-input",
          label: "Alert state if execution error or timeout",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
            render: _ref2 => {
              let {
                field: {
                  onChange
                }
              } = _ref2,
                  field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_GrafanaAlertStatePicker__WEBPACK_IMPORTED_MODULE_7__.GrafanaAlertStatePicker, Object.assign({}, field, {
                inputId: "exec-err-state-input",
                width: 42,
                includeNoData: false,
                includeError: true,
                onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value)
              }));
            },
            name: "execErrState"
          })
        })]
      }), _PreviewRule || (_PreviewRule = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_PreviewRule__WEBPACK_IMPORTED_MODULE_9__.PreviewRule, {}))]
    })
  );
};

const getStyles = theme => ({
  inlineField: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 0;
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  collapseToggle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(2, 0, 2, -1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/GroupAndNamespaceFields.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupAndNamespaceFields": () => (/* binding */ GroupAndNamespaceFields)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _SelectWIthAdd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/util.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"],
      _excluded2 = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const GroupAndNamespaceFields = ({
  rulesSourceName
}) => {
  var _rulerRequests$rulesS, _errors$namespace, _errors$namespace2, _errors$group, _errors$group2;

  const {
    control,
    watch,
    formState: {
      errors
    },
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyle);
  const [customGroup, setCustomGroup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const rulerRequests = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_5__.useUnifiedAlertingSelector)(state => state.rulerRules);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_6__.fetchRulerRulesAction)({
      rulesSourceName
    }));
  }, [rulesSourceName, dispatch]);
  const rulesConfig = (_rulerRequests$rulesS = rulerRequests[rulesSourceName]) === null || _rulerRequests$rulesS === void 0 ? void 0 : _rulerRequests$rulesS.result;
  const namespace = watch('namespace');
  const namespaceOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => rulesConfig ? Object.keys(rulesConfig).map(namespace => ({
    label: namespace,
    value: namespace
  })) : [], [rulesConfig]);
  const groupOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _rulesConfig$namespac;

    return namespace && (rulesConfig === null || rulesConfig === void 0 ? void 0 : (_rulesConfig$namespac = rulesConfig[namespace]) === null || _rulesConfig$namespac === void 0 ? void 0 : _rulesConfig$namespac.map(group => ({
      label: group.name,
      value: group.name
    }))) || [];
  }, [namespace, rulesConfig]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: style.flexRow,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      "data-testid": "namespace-picker",
      label: "Namespace",
      error: (_errors$namespace = errors.namespace) === null || _errors$namespace === void 0 ? void 0 : _errors$namespace.message,
      invalid: !!((_errors$namespace2 = errors.namespace) !== null && _errors$namespace2 !== void 0 && _errors$namespace2.message),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
        render: _ref => {
          let {
            field: {
              onChange
            }
          } = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SelectWIthAdd__WEBPACK_IMPORTED_MODULE_7__.SelectWithAdd, Object.assign({}, field, {
            className: style.input,
            onChange: value => {
              setValue('group', ''); //reset if namespace changes

              onChange(value);
            },
            onCustomChange: custom => {
              custom && setCustomGroup(true);
            },
            options: namespaceOptions,
            width: 42
          }));
        },
        name: "namespace",
        control: control,
        rules: {
          required: {
            value: true,
            message: 'Required.'
          },
          validate: {
            pathSeparator: _util__WEBPACK_IMPORTED_MODULE_8__.checkForPathSeparator
          }
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
      "data-testid": "group-picker",
      label: "Group",
      error: (_errors$group = errors.group) === null || _errors$group === void 0 ? void 0 : _errors$group.message,
      invalid: !!((_errors$group2 = errors.group) !== null && _errors$group2 !== void 0 && _errors$group2.message),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InputControl, {
        render: _ref2 => {
          let {} = _ref2,
              field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SelectWIthAdd__WEBPACK_IMPORTED_MODULE_7__.SelectWithAdd, Object.assign({}, field, {
            options: groupOptions,
            width: 42,
            custom: customGroup,
            className: style.input
          }));
        },
        name: "group",
        control: control,
        rules: {
          required: {
            value: true,
            message: 'Required.'
          },
          validate: {
            pathSeparator: _util__WEBPACK_IMPORTED_MODULE_8__.checkForPathSeparator
          }
        }
      })
    })]
  });
};

const getStyle = theme => ({
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > * + * {
      margin-left: ${theme.spacing(3)};
    }
  `,
  input: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 330px !important;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label, _InlineLabel;









const LabelsField = ({
  className
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  const {
    register,
    control,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const labels = watch('labels');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(className, styles.wrapper),
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
      children: "Custom Labels"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldArray, {
      control: control,
      name: "labels",
      children: ({
        fields,
        append,
        remove
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: styles.flexRow,
            children: [_InlineLabel || (_InlineLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
              width: 18,
              children: "Labels"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: styles.flexColumn,
              children: [fields.map((field, index) => {
                var _errors$labels, _errors$labels$index, _errors$labels$index$, _errors$labels2, _errors$labels2$index, _errors$labels2$index2, _labels$index, _errors$labels3, _errors$labels3$index, _errors$labels3$index2, _errors$labels4, _errors$labels4$index, _errors$labels4$index2, _labels$index2;

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.flexRow, styles.centerAlignRow),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      className: styles.labelInput,
                      invalid: !!((_errors$labels = errors.labels) !== null && _errors$labels !== void 0 && (_errors$labels$index = _errors$labels[index]) !== null && _errors$labels$index !== void 0 && (_errors$labels$index$ = _errors$labels$index.key) !== null && _errors$labels$index$ !== void 0 && _errors$labels$index$.message),
                      error: (_errors$labels2 = errors.labels) === null || _errors$labels2 === void 0 ? void 0 : (_errors$labels2$index = _errors$labels2[index]) === null || _errors$labels2$index === void 0 ? void 0 : (_errors$labels2$index2 = _errors$labels2$index.key) === null || _errors$labels2$index2 === void 0 ? void 0 : _errors$labels2$index2.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`labels[${index}].key`, {
                        required: {
                          value: !!((_labels$index = labels[index]) !== null && _labels$index !== void 0 && _labels$index.value),
                          message: 'Required.'
                        }
                      }), {
                        placeholder: "key",
                        "data-testid": `label-key-${index}`,
                        defaultValue: field.key
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
                      className: styles.equalSign,
                      children: "="
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      className: styles.labelInput,
                      invalid: !!((_errors$labels3 = errors.labels) !== null && _errors$labels3 !== void 0 && (_errors$labels3$index = _errors$labels3[index]) !== null && _errors$labels3$index !== void 0 && (_errors$labels3$index2 = _errors$labels3$index.value) !== null && _errors$labels3$index2 !== void 0 && _errors$labels3$index2.message),
                      error: (_errors$labels4 = errors.labels) === null || _errors$labels4 === void 0 ? void 0 : (_errors$labels4$index = _errors$labels4[index]) === null || _errors$labels4$index === void 0 ? void 0 : (_errors$labels4$index2 = _errors$labels4$index.value) === null || _errors$labels4$index2 === void 0 ? void 0 : _errors$labels4$index2.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`labels[${index}].value`, {
                        required: {
                          value: !!((_labels$index2 = labels[index]) !== null && _labels$index2 !== void 0 && _labels$index2.key),
                          message: 'Required.'
                        }
                      }), {
                        placeholder: "value",
                        "data-testid": `label-value-${index}`,
                        defaultValue: field.value
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                      className: styles.deleteLabelButton,
                      "aria-label": "delete label",
                      icon: "trash-alt",
                      variant: "secondary",
                      onClick: () => {
                        remove(index);
                      }
                    })]
                  })
                }, field.id);
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                className: styles.addLabelButton,
                icon: "plus-circle",
                type: "button",
                variant: "secondary",
                onClick: () => {
                  append({});
                },
                children: "Add label"
              })]
            })]
          })
        });
      }
    })]
  });
};

const getStyles = theme => {
  return {
    wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing.md};
    `,
    flexColumn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
    `,
    flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      & + button {
        margin-left: ${theme.spacing.xs};
      }
    `,
    deleteLabelButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing.xs};
      align-self: flex-start;
    `,
    addLabelButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 0;
      align-self: flex-start;
    `,
    centerAlignRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-items: baseline;
    `,
    equalSign: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-self: flex-start;
      width: 28px;
      justify-content: center;
      margin-left: ${theme.spacing.xs};
    `,
    labelInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 183px;
      margin-bottom: ${theme.spacing.sm};
      & + & {
        margin-left: ${theme.spacing.sm};
      }
    `
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelsField);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/PreviewRule.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewRule": () => (/* binding */ PreviewRule)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _api_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/api/preview.ts");
/* harmony import */ var _hooks_useAlertQueriesStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _PreviewRuleResult__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/PreviewRuleResult.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert;














const fields = ['type', 'dataSourceName', 'condition', 'queries', 'expression'];
function PreviewRule() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const [preview, onPreview] = usePreview();
  const {
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const [type, condition, queries] = watch(['type', 'condition', 'queries']);
  const {
    allDataSourcesAvailable
  } = (0,_hooks_useAlertQueriesStatus__WEBPACK_IMPORTED_MODULE_6__.useAlertQueriesStatus)(queries);

  if (type === _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.cloudRecording || type === _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.cloudAlerting) {
    return null;
  }

  const isPreviewAvailable = Boolean(condition) && allDataSourcesAvailable;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.HorizontalGroup, {
      children: [allDataSourcesAvailable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        disabled: !isPreviewAvailable,
        type: "button",
        variant: "primary",
        onClick: onPreview,
        children: "Preview alerts"
      }), !allDataSourcesAvailable && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
        title: "Preview is not available",
        severity: "warning",
        children: "Cannot display the query preview. Some of the data sources used in the queries are not available."
      })))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PreviewRuleResult__WEBPACK_IMPORTED_MODULE_8__.PreviewRuleResult, {
      preview: preview
    })]
  });
}

function usePreview() {
  const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const isMounted = (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const onPreview = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const values = getValues(fields);
    const request = createPreviewRequest(values);
    (0,_api_preview__WEBPACK_IMPORTED_MODULE_5__.previewAlertRule)(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeWhile)(response => !isCompleted(response), true)).subscribe(response => {
      if (!isMounted()) {
        return;
      }

      setPreview(response);
    });
  }, [getValues, isMounted]);
  return [preview, onPreview];
}

function createPreviewRequest(values) {
  const [type, dataSourceName, condition, queries, expression] = values;

  switch (type) {
    case _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.cloudAlerting:
      return {
        dataSourceName,
        expr: expression
      };

    case _types_rule_form__WEBPACK_IMPORTED_MODULE_7__.RuleFormType.grafana:
      return {
        grafana_condition: {
          condition,
          data: queries,
          now: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTimeFormatISO)(Date.now())
        }
      };

    default:
      throw new Error(`Alert type ${type} not supported by preview.`);
  }
}

function isCompleted(response) {
  switch (response.data.state) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Done:
    case _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Error:
      return true;

    default:
      return false;
  }
}

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing(2)};
      max-width: ${theme.breakpoints.values.xxl}px;
    `
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/PreviewRuleResult.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreviewRuleResult": () => (/* binding */ PreviewRuleResult)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;











function PreviewRuleResult(props) {
  const {
    preview
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const fieldConfig = {
    defaults: {},
    overrides: [{
      matcher: {
        id: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FieldMatcherID.byName,
        options: 'Info'
      },
      properties: [{
        id: 'custom.displayMode',
        value: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TableCellDisplayMode.JSONView
      }]
    }]
  };

  if (!preview) {
    return null;
  }

  const {
    data,
    ruleType
  } = preview;

  if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.container,
      children: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        children: "Loading preview..."
      }))
    });
  }

  if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.container,
      children: data.error ? (0,_utils_redux__WEBPACK_IMPORTED_MODULE_7__.messageFromError)(data.error) : 'Failed to preview alert rule'
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
      children: ["Preview based on the result of running the query, for this moment.", ' ', ruleType === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana ? 'Configuration for `no data` and `error handling` is not applied.' : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.table,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: ({
          width,
          height
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          style: {
            width: `${width}px`,
            height: `${height}px`
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.PanelRenderer, {
            title: "",
            width: width,
            height: height,
            pluginId: "table",
            data: data,
            fieldConfig: fieldConfig
          })
        })
      })
    })]
  });
}

function getStyles(theme) {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(2)} 0;
    `,
    table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex: 1 1 auto;
      height: 135px;
      margin-top: ${theme.spacing(2)};
      border: 1px solid ${theme.colors.border.medium};
      border-radius: ${theme.shape.borderRadius(1)};
    `
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_utils_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/utils/query.ts");
/* harmony import */ var app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var app_features_expressions_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/expressions/types.ts");
/* harmony import */ var app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/expressions/utils/expressionTypes.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var _state_AlertingQueryRunner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertingQueryRunner.ts");
/* harmony import */ var _QueryRows__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/QueryRows.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class QueryEditor extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    var _props$value;

    super(props);

    _defineProperty(this, "runner", void 0);

    _defineProperty(this, "queries", void 0);

    _defineProperty(this, "onRunQueries", () => {
      const {
        queries
      } = this;
      this.runner.run(queries);
    });

    _defineProperty(this, "onCancelQueries", () => {
      this.runner.cancel();
    });

    _defineProperty(this, "onChangeQueries", queries => {
      this.queries = queries;
      this.props.onChange(queries);
    });

    _defineProperty(this, "onDuplicateQuery", query => {
      const {
        queries
      } = this;
      this.onChangeQueries(addQuery(queries, query));
    });

    _defineProperty(this, "onNewAlertingQuery", () => {
      const {
        queries
      } = this;
      const defaultDataSource = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_11__.getDatasourceSrv)().getInstanceSettings('default');

      if (!defaultDataSource) {
        return;
      }

      this.onChangeQueries(addQuery(queries, {
        datasourceUid: defaultDataSource.uid,
        model: {
          refId: '',
          datasource: {
            type: defaultDataSource.type,
            uid: defaultDataSource.uid
          }
        }
      }));
    });

    _defineProperty(this, "onNewExpressionQuery", () => {
      const {
        queries
      } = this;
      this.onChangeQueries(addQuery(queries, {
        datasourceUid: app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_7__.ExpressionDatasourceUID,
        model: app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_7__.dataSource.newQuery({
          type: app_features_expressions_types__WEBPACK_IMPORTED_MODULE_9__.ExpressionQueryType.classic,
          conditions: [app_features_expressions_utils_expressionTypes__WEBPACK_IMPORTED_MODULE_10__.defaultCondition]
        })
      }));
    });

    this.state = {
      panelDataByRefId: {}
    };
    this.runner = new _state_AlertingQueryRunner__WEBPACK_IMPORTED_MODULE_12__.AlertingQueryRunner();
    this.queries = (_props$value = props.value) !== null && _props$value !== void 0 ? _props$value : [];
  }

  componentDidMount() {
    this.runner.get().subscribe(data => {
      this.setState({
        panelDataByRefId: data
      });
    });
  }

  componentWillUnmount() {
    this.runner.destroy();
  }

  isRunning() {
    const data = Object.values(this.state.panelDataByRefId).find(d => Boolean(d));
    return (data === null || data === void 0 ? void 0 : data.state) === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading;
  }

  renderRunQueryButton() {
    const isRunning = this.isRunning();

    if (isRunning) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        icon: "fa fa-spinner",
        type: "button",
        variant: "destructive",
        onClick: this.onCancelQueries,
        children: "Cancel"
      });
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
      icon: "sync",
      type: "button",
      onClick: this.onRunQueries,
      children: "Run queries"
    });
  }

  render() {
    const {
      value = []
    } = this.props;
    const {
      panelDataByRefId
    } = this.state;
    const styles = getStyles(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.theme2);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      className: styles.container,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_QueryRows__WEBPACK_IMPORTED_MODULE_13__.QueryRows, {
        data: panelDataByRefId,
        queries: value,
        onQueriesChange: this.onChangeQueries,
        onDuplicateQuery: this.onDuplicateQuery,
        onRunQueries: this.onRunQueries
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.HorizontalGroup, {
        spacing: "sm",
        align: "flex-start",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          type: "button",
          icon: "plus",
          onClick: this.onNewAlertingQuery,
          variant: "secondary",
          "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.QueryTab.addQuery,
          children: "Add query"
        }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.expressionsEnabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          type: "button",
          icon: "plus",
          onClick: this.onNewExpressionQuery,
          variant: "secondary",
          children: "Add expression"
        }), this.renderRunQueryButton()]
      })]
    });
  }

}

const addQuery = (queries, queryToAdd) => {
  const refId = (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_6__.getNextRefIdChar)(queries);
  const query = Object.assign({}, queryToAdd, {
    refId,
    queryType: '',
    model: Object.assign({}, queryToAdd.model, {
      hide: false,
      refId
    }),
    relativeTimeRange: defaultTimeRange(queryToAdd.model)
  });
  return [...queries, query];
};

const defaultTimeRange = model => {
  if ((0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_8__.isExpressionQuery)(model)) {
    return;
  }

  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getDefaultRelativeTimeRange)();
};

const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.stylesFactory)(theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background-color: ${theme.colors.background.primary};
      height: 100%;
      max-width: ${theme.breakpoints.values.xxl}px;
    `,
    runWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing(1)};
    `,
    editorWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border: 1px solid ${theme.colors.border.medium};
      border-radius: ${theme.shape.borderRadius()};
    `
  };
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/QueryRows.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryRows": () => (/* binding */ QueryRows)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var _QueryWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/QueryWrapper.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/util.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Card$Figure;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class QueryRows extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onRemoveQuery", query => {
      this.props.onQueriesChange(this.props.queries.filter(item => {
        return item.model.refId !== query.refId;
      }));
    });

    _defineProperty(this, "onChangeTimeRange", (timeRange, index) => {
      const {
        queries,
        onQueriesChange
      } = this.props;
      onQueriesChange(queries.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }

        return Object.assign({}, item, {
          relativeTimeRange: timeRange
        });
      }));
    });

    _defineProperty(this, "onChangeThreshold", (thresholds, index) => {
      const {
        queries,
        onQueriesChange
      } = this.props;
      const referencedRefId = queries[index].refId;
      onQueriesChange(queries.map(query => {
        if (!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_6__.isExpressionQuery)(query.model)) {
          return query;
        }

        if (query.model.conditions && query.model.conditions[0].query.params[0] === referencedRefId) {
          return Object.assign({}, query, {
            model: Object.assign({}, query.model, {
              conditions: query.model.conditions.map((condition, conditionIndex) => {
                // Only update the first condition for a given refId.
                if (condition.query.params[0] === referencedRefId && conditionIndex === 0) {
                  return Object.assign({}, condition, {
                    evaluator: Object.assign({}, condition.evaluator, {
                      params: [parseFloat(thresholds.steps[1].value.toPrecision(3))]
                    })
                  });
                }

                return condition;
              })
            })
          });
        }

        return query;
      }));
    });

    _defineProperty(this, "onChangeDataSource", (settings, index) => {
      const {
        queries,
        onQueriesChange
      } = this.props;
      const updatedQueries = queries.map((item, itemIndex) => {
        if (itemIndex !== index) {
          return item;
        }

        return copyModel(item, settings.uid);
      });
      onQueriesChange(updatedQueries);
    });

    _defineProperty(this, "onChangeQuery", (query, index) => {
      const {
        queries,
        onQueriesChange
      } = this.props; // find what queries still have a reference to the old name

      const previousRefId = queries[index].refId;
      const newRefId = query.refId;
      onQueriesChange((0,_util__WEBPACK_IMPORTED_MODULE_9__.queriesWithUpdatedReferences)(queries, previousRefId, newRefId).map((item, itemIndex) => {
        var _item$model$queryType;

        if (itemIndex !== index) {
          return item;
        }

        return Object.assign({}, item, {
          refId: query.refId,
          queryType: (_item$model$queryType = item.model.queryType) !== null && _item$model$queryType !== void 0 ? _item$model$queryType : '',
          model: Object.assign({}, item.model, query, {
            datasource: query.datasource
          })
        });
      }));
    });

    _defineProperty(this, "onDragEnd", result => {
      const {
        queries,
        onQueriesChange
      } = this.props;

      if (!result || !result.destination) {
        return;
      }

      const startIndex = result.source.index;
      const endIndex = result.destination.index;

      if (startIndex === endIndex) {
        return;
      }

      const update = Array.from(queries);
      const [removed] = update.splice(startIndex, 1);
      update.splice(endIndex, 0, removed);
      onQueriesChange(update);
    });

    _defineProperty(this, "onDuplicateQuery", (query, source) => {
      this.props.onDuplicateQuery(Object.assign({}, source, {
        model: query
      }));
    });

    _defineProperty(this, "getDataSourceSettings", query => {
      return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);
    });

    _defineProperty(this, "getThresholdsForQueries", queries => {
      const record = {};

      for (const query of queries) {
        if (!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_6__.isExpressionQuery)(query.model)) {
          continue;
        }

        if (!Array.isArray(query.model.conditions)) {
          continue;
        }

        query.model.conditions.forEach((condition, index) => {
          if (index > 0) {
            return;
          }

          const threshold = condition.evaluator.params[0];
          const refId = condition.query.params[0];

          if (condition.evaluator.type === 'outside_range' || condition.evaluator.type === 'within_range') {
            return;
          }

          if (!record[refId]) {
            record[refId] = {
              mode: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ThresholdsMode.Absolute,
              steps: [{
                value: -Infinity,
                color: _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.theme2.colors.success.main
              }]
            };
          }

          record[refId].steps.push({
            value: threshold,
            color: _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.theme2.colors.error.main
          });
        });
      }

      return record;
    });

    this.state = {
      dataPerQuery: {}
    };
  }

  render() {
    const {
      onDuplicateQuery,
      onRunQueries,
      queries
    } = this.props;
    const thresholdByRefId = this.getThresholdsForQueries(queries);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__.DragDropContext, {
      onDragEnd: this.onDragEnd,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__.Droppable, {
        droppableId: "alerting-queries",
        direction: "vertical",
        children: provided => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", Object.assign({
            ref: provided.innerRef
          }, provided.droppableProps, {
            children: [queries.map((query, index) => {
              var _this$props$data$quer, _this$props$data;

              const data = (_this$props$data$quer = (_this$props$data = this.props.data) === null || _this$props$data === void 0 ? void 0 : _this$props$data[query.refId]) !== null && _this$props$data$quer !== void 0 ? _this$props$data$quer : {
                series: [],
                state: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.NotStarted
              };
              const dsSettings = this.getDataSourceSettings(query);

              if (!dsSettings) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(DatasourceNotFound, {
                  index: index,
                  model: query.model,
                  onUpdateDatasource: () => {
                    const defaultDataSource = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_7__.getDatasourceSrv)().getInstanceSettings(null);

                    if (defaultDataSource) {
                      this.onChangeDataSource(defaultDataSource, index);
                    }
                  },
                  onRemoveQuery: () => {
                    this.onRemoveQuery(query);
                  }
                }, `${query.refId}-${index}`);
              }

              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_QueryWrapper__WEBPACK_IMPORTED_MODULE_8__.QueryWrapper, {
                index: index,
                dsSettings: dsSettings,
                data: data,
                query: query,
                onChangeQuery: this.onChangeQuery,
                onRemoveQuery: this.onRemoveQuery,
                queries: queries,
                onChangeDataSource: this.onChangeDataSource,
                onDuplicateQuery: onDuplicateQuery,
                onRunQueries: onRunQueries,
                onChangeTimeRange: this.onChangeTimeRange,
                thresholds: thresholdByRefId[query.refId],
                onChangeThreshold: this.onChangeThreshold
              }, `${query.refId}-${index}`);
            }), provided.placeholder]
          }));
        }
      })
    });
  }

}

function copyModel(item, uid) {
  return Object.assign({}, item, {
    model: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(item.model, 'datasource'),
    datasourceUid: uid
  });
}

const DatasourceNotFound = ({
  index,
  onUpdateDatasource,
  onRemoveQuery,
  model
}) => {
  const refId = model.refId;
  const [showDetails, setShowDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const toggleDetails = () => {
    setShowDetails(show => !show);
  };

  const handleUpdateDatasource = () => {
    onUpdateDatasource();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_QueryWrapper__WEBPACK_IMPORTED_MODULE_8__.EmptyQueryWrapper, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_QueryOperationRow_QueryOperationRow__WEBPACK_IMPORTED_MODULE_5__.QueryOperationRow, {
      title: refId,
      draggable: true,
      index: index,
      id: refId,
      isOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card, {
        heading: "This datasource has been removed",
        description: 'The datasource for this query was not found, it was either removed or is not installed correctly.',
        children: [_Card$Figure || (_Card$Figure = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Figure, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
            name: "question-circle"
          })
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Actions, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            variant: "secondary",
            onClick: handleUpdateDatasource,
            children: "Update datasource"
          }, "update"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            variant: "destructive",
            onClick: onRemoveQuery,
            children: "Remove query"
          }, "remove")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.SecondaryActions, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            onClick: toggleDetails,
            icon: showDetails ? 'angle-up' : 'angle-down',
            fill: "text",
            size: "sm",
            children: "Show details"
          }, "details")
        })]
      }), showDetails && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("pre", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("code", {
            children: JSON.stringify(model, null, 2)
          })
        })
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/QueryWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyQueryWrapper": () => (/* binding */ EmptyQueryWrapper),
/* harmony export */   "QueryWrapper": () => (/* binding */ QueryWrapper)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var app_features_query_components_QueryEditorRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/query/components/QueryEditorRow.tsx");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _VizWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/VizWrapper.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const QueryWrapper = ({
  data,
  dsSettings,
  index,
  onChangeDataSource,
  onChangeQuery,
  onChangeTimeRange,
  onRunQueries,
  onRemoveQuery,
  onDuplicateQuery,
  query,
  queries,
  thresholds,
  onChangeThreshold
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const isExpression = (0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_5__.isExpressionQuery)(query.model);
  const [pluginId, changePluginId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(isExpression ? _utils_constants__WEBPACK_IMPORTED_MODULE_7__.TABLE : _utils_constants__WEBPACK_IMPORTED_MODULE_7__.TIMESERIES);

  const renderTimePicker = (query, index) => {
    var _query$relativeTimeRa;

    if ((0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_5__.isExpressionQuery)(query.model) || !onChangeTimeRange) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.RelativeTimeRangePicker, {
      timeRange: (_query$relativeTimeRa = query.relativeTimeRange) !== null && _query$relativeTimeRa !== void 0 ? _query$relativeTimeRa : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDefaultRelativeTimeRange)(),
      onChange: range => onChangeTimeRange(range, index)
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: styles.wrapper,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_features_query_components_QueryEditorRow__WEBPACK_IMPORTED_MODULE_6__.QueryEditorRow, {
      alerting: true,
      dataSource: dsSettings,
      onChangeDataSource: !isExpression ? settings => onChangeDataSource(settings, index) : undefined,
      id: query.refId,
      index: index,
      data: data,
      query: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(query.model),
      onChange: query => onChangeQuery(query, index),
      onRemoveQuery: onRemoveQuery,
      onAddQuery: () => onDuplicateQuery((0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(query)),
      onRunQuery: onRunQueries,
      queries: queries,
      renderHeaderExtras: () => renderTimePicker(query, index),
      app: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.CoreApp.UnifiedAlerting,
      visualization: data.state !== _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.NotStarted ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_VizWrapper__WEBPACK_IMPORTED_MODULE_8__.VizWrapper, {
        data: data,
        changePanel: changePluginId,
        currentPanel: pluginId,
        thresholds: thresholds,
        onThresholdsChange: thresholds => onChangeThreshold(thresholds, index)
      }) : null,
      hideDisableQuery: true
    }, query.refId)
  });
};
const EmptyQueryWrapper = ({
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: styles.wrapper,
    children: children
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: AlertingQueryWrapper;
    margin-bottom: ${theme.spacing(1)};
    border: 1px solid ${theme.colors.border.medium};
    border-radius: ${theme.shape.borderRadius(1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleEditorSection": () => (/* binding */ RuleEditorSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const RuleEditorSection = ({
  title,
  stepNo,
  children,
  description
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: styles.parent,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
        className: styles.stepNo,
        children: stepNo
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: styles.content,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
        label: title,
        className: styles.fieldset,
        children: [description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          className: styles.description,
          children: description
        }), children]
      })
    })]
  });
};

const getStyles = theme => ({
  fieldset: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    legend {
      font-size: 16px;
      padding-top: ${theme.spacing(0.5)};
    }
  `,
  parent: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    max-width: ${theme.breakpoints.values.xl};
    & + & {
      margin-top: ${theme.spacing(4)};
    }
  `,
  description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: -${theme.spacing(2)};
  `,
  stepNo: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: inline-block;
    width: ${theme.spacing(4)};
    height: ${theme.spacing(4)};
    line-height: ${theme.spacing(4)};
    border-radius: ${theme.spacing(4)};
    text-align: center;
    color: ${theme.colors.text.maxContrast};
    background-color: ${theme.colors.background.canvas};
    font-size: ${theme.typography.size.lg};
    margin-right: ${theme.spacing(2)};
  `,
  content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex: 1;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/RuleInspector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleInspector": () => (/* binding */ RuleInspector)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/js-yaml-npm-4.1.0-3606f32312-c7830dfd45.zip/node_modules/js-yaml/dist/js-yaml.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const tabs = [{
  label: 'Yaml',
  value: 'yaml'
}];
const RuleInspector = ({
  onClose
}) => {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('yaml');
  const {
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(drawerStyles);

  const onApply = formValues => {
    // Need to loop through all values and set them individually
    // TODO this is not type-safe :(
    for (const key in formValues) {
      // @ts-ignore
      setValue(key, formValues[key]);
    }

    onClose();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Drawer, {
    title: "Inspect Alert rule",
    subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.subtitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(RuleInspectorSubtitle, {
        setActiveTab: setActiveTab,
        activeTab: activeTab
      })
    }),
    onClose: onClose,
    children: activeTab === 'yaml' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(InspectorYamlTab, {
      onSubmit: onApply
    })
  });
};

const RuleInspectorSubtitle = ({
  activeTab,
  setActiveTab
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TabsBar, {
    children: tabs.map((tab, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tab, {
        label: tab.label,
        value: tab.value,
        onChangeTab: () => setActiveTab(tab.value),
        active: activeTab === tab.value
      }, `${tab.value}-${index}`);
    })
  });
};

const InspectorYamlTab = ({
  onSubmit
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(yamlTabStyle);
  const {
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const [alertRuleAsYaml, setAlertRuleAsYaml] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,js_yaml__WEBPACK_IMPORTED_MODULE_1__.dump)(getValues()));

  const onApply = () => {
    onSubmit((0,js_yaml__WEBPACK_IMPORTED_MODULE_1__.load)(alertRuleAsYaml));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.applyButton,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        type: "button",
        onClick: onApply,
        children: "Apply"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.content,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        disableWidth: true,
        children: ({
          height
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CodeEditor, {
          width: "100%",
          height: height,
          language: "yaml",
          value: alertRuleAsYaml,
          onBlur: setAlertRuleAsYaml,
          monacoOptions: {
            minimap: {
              enabled: false
            }
          }
        })
      })
    })]
  });
};

const yamlTabStyle = theme => ({
  content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex-grow: 1;
    height: 100%;
    padding-bottom: 16px;
    margin-bottom: ${theme.spacing(2)};
  `,
  applyButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-grow: 0;
  `
});

const drawerStyles = () => ({
  subtitle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectWithAdd": () => (/* binding */ SelectWithAdd)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const SelectWithAdd = ({
  value,
  onChange,
  options,
  className,
  placeholder,
  width,
  custom,
  onCustomChange,
  disabled = false,
  addLabel = '+ Add new',
  'aria-label': ariaLabel
}) => {
  const [isCustom, setIsCustom] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(custom);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (custom) {
      setIsCustom(custom);
    }
  }, [custom]);

  const _options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [...options, {
    value: '__add__',
    label: addLabel
  }], [options, addLabel]);

  if (isCustom) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
      "aria-label": ariaLabel,
      width: width,
      autoFocus: !custom,
      value: value || '',
      placeholder: placeholder,
      className: className,
      disabled: disabled,
      onChange: e => onChange(e.target.value)
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      "aria-label": ariaLabel,
      width: width,
      options: _options,
      value: value,
      className: className,
      placeholder: placeholder,
      disabled: disabled,
      onChange: val => {
        const value = val === null || val === void 0 ? void 0 : val.value;

        if (value === '__add__') {
          setIsCustom(true);

          if (onCustomChange) {
            onCustomChange(true);
          }

          onChange('');
        } else {
          onChange(value);
        }
      }
    });
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/VizWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VizWrapper": () => (/* binding */ VizWrapper)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-schema/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var _hooks_useVizHeight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useVizHeight.ts");
/* harmony import */ var _PanelPluginsButtonGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











const VizWrapper = ({
  data,
  currentPanel,
  changePanel,
  onThresholdsChange,
  thresholds
}) => {
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    frameIndex: 0,
    showHeader: true
  });
  const vizHeight = (0,_hooks_useVizHeight__WEBPACK_IMPORTED_MODULE_7__.useVizHeight)(data, currentPanel, options.frameIndex);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles(vizHeight));
  const [fieldConfig, setFieldConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultFieldConfig(thresholds, data));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setFieldConfig(fieldConfig => Object.assign({}, fieldConfig, {
      defaults: Object.assign({}, fieldConfig.defaults, {
        thresholds: thresholds,
        unit: defaultUnit(data),
        custom: Object.assign({}, fieldConfig.defaults.custom, {
          thresholdsStyle: {
            mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.GraphTresholdsStyleMode.Line
          }
        })
      })
    }));
  }, [thresholds, setFieldConfig, data]);
  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    eventBus: app_core_app_events__WEBPACK_IMPORTED_MODULE_6__["default"],
    canEditThresholds: true,
    onThresholdsChange: onThresholdsChange
  }), [onThresholdsChange]);

  if (!options || !data) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: styles.buttonGroup,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_PanelPluginsButtonGroup__WEBPACK_IMPORTED_MODULE_8__.PanelPluginsButtonGroup, {
        onChange: changePanel,
        value: currentPanel
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: ({
        width
      }) => {
        if (width === 0) {
          return null;
        }

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          style: {
            height: `${vizHeight}px`,
            width: `${width}px`
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.PanelContextProvider, {
            value: context,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.PanelRenderer, {
              height: vizHeight,
              width: width,
              data: data,
              pluginId: currentPanel,
              title: "title",
              onOptionsChange: setOptions,
              options: options,
              fieldConfig: fieldConfig
            })
          })
        });
      }
    })]
  });
};

const getStyles = visHeight => theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: 0 ${theme.spacing(2)};
    height: ${visHeight + theme.spacing.gridSize * 4}px;
  `,
  buttonGroup: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: flex-end;
  `
});

function defaultUnit(data) {
  var _data$series$, _data$series$$fields$;

  return (_data$series$ = data.series[0]) === null || _data$series$ === void 0 ? void 0 : (_data$series$$fields$ = _data$series$.fields.find(field => field.type === 'number')) === null || _data$series$$fields$ === void 0 ? void 0 : _data$series$$fields$.config.unit;
}

function defaultFieldConfig(thresholds, data) {
  if (!thresholds) {
    return {
      defaults: {},
      overrides: []
    };
  }

  return {
    defaults: {
      thresholds: thresholds,
      unit: defaultUnit(data),
      custom: {
        thresholdsStyle: {
          mode: _grafana_schema__WEBPACK_IMPORTED_MODULE_4__.GraphTresholdsStyleMode.Line
        }
      }
    },
    overrides: []
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/AlertType.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertType": () => (/* binding */ AlertType)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _CloudRulesSourcePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/CloudRulesSourcePicker.tsx");
/* harmony import */ var _rule_types_RuleTypePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleTypePicker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const AlertType = ({
  editingExistingRule
}) => {
  var _errors$type, _errors$type2, _errors$dataSourceNam, _errors$dataSourceNam2;

  const {
    enabledRuleTypes,
    defaultRuleType
  } = getAvailableRuleTypes();
  const {
    control,
    formState: {
      errors
    },
    getValues,
    setValue,
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const ruleFormType = watch('type');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [!editingExistingRule && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
      error: (_errors$type = errors.type) === null || _errors$type === void 0 ? void 0 : _errors$type.message,
      invalid: !!((_errors$type2 = errors.type) !== null && _errors$type2 !== void 0 && _errors$type2.message),
      "data-testid": "alert-type-picker",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
        render: ({
          field: {
            onChange
          }
        }) => {
          var _getValues;

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_rule_types_RuleTypePicker__WEBPACK_IMPORTED_MODULE_8__.RuleTypePicker, {
            "aria-label": "Rule type",
            selected: (_getValues = getValues('type')) !== null && _getValues !== void 0 ? _getValues : defaultRuleType,
            onChange: onChange,
            enabledTypes: enabledRuleTypes
          });
        },
        name: "type",
        control: control,
        rules: {
          required: {
            value: true,
            message: 'Please select alert type'
          }
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: styles.flexRow,
      children: (ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudRecording || ruleFormType === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudAlerting) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
        className: styles.formInput,
        label: "Select data source",
        error: (_errors$dataSourceNam = errors.dataSourceName) === null || _errors$dataSourceNam === void 0 ? void 0 : _errors$dataSourceNam.message,
        invalid: !!((_errors$dataSourceNam2 = errors.dataSourceName) !== null && _errors$dataSourceNam2 !== void 0 && _errors$dataSourceNam2.message),
        "data-testid": "datasource-picker",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InputControl, {
          render: _ref => {
            let {
              field: {
                onChange
              }
            } = _ref,
                field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_CloudRulesSourcePicker__WEBPACK_IMPORTED_MODULE_7__.CloudRulesSourcePicker, Object.assign({}, field, {
              onChange: ds => {
                var _ds$name;

                // reset location if switching data sources, as different rules source will have different groups and namespaces
                setValue('location', undefined);
                onChange((_ds$name = ds === null || ds === void 0 ? void 0 : ds.name) !== null && _ds$name !== void 0 ? _ds$name : null);
              }
            }));
          },
          name: "dataSourceName",
          control: control,
          rules: {
            required: {
              value: true,
              message: 'Please select a data source'
            }
          }
        })
      })
    })]
  });
};

function getAvailableRuleTypes() {
  const canCreateGrafanaRules = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.AlertingRuleCreate);
  const canCreateCloudRules = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.AlertingRuleExternalWrite);
  const defaultRuleType = canCreateGrafanaRules ? _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana : _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudAlerting;
  const enabledRuleTypes = [];

  if (canCreateGrafanaRules) {
    enabledRuleTypes.push(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana);
  }

  if (canCreateCloudRules) {
    enabledRuleTypes.push(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudAlerting, _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudRecording);
  }

  return {
    enabledRuleTypes,
    defaultRuleType
  };
}

const getStyles = theme => ({
  formInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 330px;
    & + & {
      margin-left: ${theme.spacing(3)};
    }
  `,
  flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/Query.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Query": () => (/* binding */ Query)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _ExpressionEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/ExpressionEditor.tsx");
/* harmony import */ var _QueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/QueryEditor.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"],
      _excluded2 = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Query = () => {
  var _errors$expression, _errors$expression2;

  const {
    control,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const type = watch('type');
  const dataSourceName = watch('dataSourceName');
  const isGrafanaManagedType = type === _types_rule_form__WEBPACK_IMPORTED_MODULE_3__.RuleFormType.grafana;
  const isCloudAlertRuleType = type === _types_rule_form__WEBPACK_IMPORTED_MODULE_3__.RuleFormType.cloudAlerting;
  const isRecordingRuleType = type === _types_rule_form__WEBPACK_IMPORTED_MODULE_3__.RuleFormType.cloudRecording;
  const showCloudExpressionEditor = (isRecordingRuleType || isCloudAlertRuleType) && dataSourceName;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [showCloudExpressionEditor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      error: (_errors$expression = errors.expression) === null || _errors$expression === void 0 ? void 0 : _errors$expression.message,
      invalid: !!((_errors$expression2 = errors.expression) !== null && _errors$expression2 !== void 0 && _errors$expression2.message),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
        name: "expression",
        render: _ref => {
          let {} = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ExpressionEditor__WEBPACK_IMPORTED_MODULE_4__.ExpressionEditor, Object.assign({}, field, {
            dataSourceName: dataSourceName
          }));
        },
        control: control,
        rules: {
          required: {
            value: true,
            message: 'A valid expression is required'
          }
        }
      })
    }), isGrafanaManagedType && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
      invalid: !!errors.queries,
      error: !!errors.queries && 'Must provide at least one valid query.' || undefined,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InputControl, {
        name: "queries",
        render: _ref2 => {
          let {} = _ref2,
              field = _objectWithoutPropertiesLoose(_ref2.field, _excluded2);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_QueryEditor__WEBPACK_IMPORTED_MODULE_5__.QueryEditor, Object.assign({}, field));
        },
        control: control,
        rules: {
          validate: queries => Array.isArray(queries) && !!queries.length
        }
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/QueryAndAlertConditionStep.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryAndAlertConditionStep": () => (/* binding */ QueryAndAlertConditionStep)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _ConditionField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/ConditionField.tsx");
/* harmony import */ var _RuleEditorSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleEditorSection.tsx");
/* harmony import */ var _AlertType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/AlertType.tsx");
/* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/query-and-alert-condition/Query.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Query, _ConditionField;










const QueryAndAlertConditionStep = ({
  editingExistingRule
}) => {
  const {
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const type = watch('type');
  const isGrafanaManagedType = type === _types_rule_form__WEBPACK_IMPORTED_MODULE_2__.RuleFormType.grafana;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_RuleEditorSection__WEBPACK_IMPORTED_MODULE_4__.RuleEditorSection, {
    stepNo: 1,
    title: "Set a query and alert condition",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AlertType__WEBPACK_IMPORTED_MODULE_5__.AlertType, {
      editingExistingRule: editingExistingRule
    }), type && (_Query || (_Query = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Query__WEBPACK_IMPORTED_MODULE_6__.Query, {}))), isGrafanaManagedType && (_ConditionField || (_ConditionField = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ConditionField__WEBPACK_IMPORTED_MODULE_3__.ConditionField, {})))]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/DisabledTooltip.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisabledTooltip": () => (/* binding */ DisabledTooltip)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const DisabledTooltip = ({
  children,
  visible = false
}) => {
  if (!visible) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: children
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    content: "You do not appear to have any compatible datasources.",
    placement: "top",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: children
    })
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/GrafanaManagedAlert.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrafanaManagedRuleType": () => (/* binding */ GrafanaManagedRuleType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _RuleType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleType.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;







const GrafanaManagedRuleType = ({
  selected = false,
  disabled,
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_RuleType__WEBPACK_IMPORTED_MODULE_2__.RuleType, {
    name: "Grafana managed alert",
    description: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
      children: ["Supports multiple data sources of any kind.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("br", {}), "Transform data with expressions."]
    })),
    image: "/public/img/grafana_icon.svg",
    selected: selected,
    disabled: disabled,
    value: _types_rule_form__WEBPACK_IMPORTED_MODULE_1__.RuleFormType.grafana,
    onClick: onClick
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/MimirOrLokiAlert.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MimirFlavoredType": () => (/* binding */ MimirFlavoredType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _DisabledTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/DisabledTooltip.tsx");
/* harmony import */ var _RuleType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleType.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;








const MimirFlavoredType = ({
  selected = false,
  disabled = false,
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DisabledTooltip__WEBPACK_IMPORTED_MODULE_2__.DisabledTooltip, {
    visible: disabled,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_RuleType__WEBPACK_IMPORTED_MODULE_3__.RuleType, {
      name: "Mimir or Loki alert",
      description: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        children: ["Use a Mimir, Loki or Cortex datasource.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), "Expressions are not supported."]
      })),
      image: "/public/img/alerting/mimir_logo.svg",
      selected: selected,
      disabled: disabled,
      value: _types_rule_form__WEBPACK_IMPORTED_MODULE_1__.RuleFormType.cloudAlerting,
      onClick: onClick
    })
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/MimirOrLokiRecordingRule.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordingRuleType": () => (/* binding */ RecordingRuleType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _DisabledTooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/DisabledTooltip.tsx");
/* harmony import */ var _RuleType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleType.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _span;








const RecordingRuleType = ({
  selected = false,
  disabled = false,
  onClick
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DisabledTooltip__WEBPACK_IMPORTED_MODULE_2__.DisabledTooltip, {
    visible: disabled,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_RuleType__WEBPACK_IMPORTED_MODULE_3__.RuleType, {
      name: "Mimir or Loki recording rule",
      description: _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        children: ["Precompute expressions.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), "Should be combined with an alert rule."]
      })),
      image: "/public/img/alerting/mimir_logo_recording.svg",
      selected: selected,
      disabled: disabled,
      value: _types_rule_form__WEBPACK_IMPORTED_MODULE_1__.RuleFormType.cloudRecording,
      onClick: onClick
    })
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleType.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleType": () => (/* binding */ RuleType)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const RuleType = props => {
  const {
    name,
    description,
    image,
    selected = false,
    value,
    onClick,
    disabled = false
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const cardStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)({
    [styles.wrapper]: true,
    [styles.disabled]: disabled
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
    className: cardStyles,
    isSelected: selected,
    onClick: () => onClick(value),
    disabled: disabled,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Figure, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
        src: image
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Heading, {
      children: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Description, {
      children: description
    })]
  });
};

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 380px;
    cursor: pointer;
    user-select: none;
  `,
  disabled: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    opacity: 0.5;
  `
});



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/rule-types/RuleTypePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleTypePicker": () => (/* binding */ RuleTypePicker)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useRuleSourcesWithRuler.ts");
/* harmony import */ var _types_rule_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
/* harmony import */ var _GrafanaManagedAlert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/GrafanaManagedAlert.tsx");
/* harmony import */ var _MimirOrLokiAlert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/MimirOrLokiAlert.tsx");
/* harmony import */ var _MimirOrLokiRecordingRule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/rule-types/MimirOrLokiRecordingRule.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");














const RuleTypePicker = ({
  selected,
  onChange,
  enabledTypes
}) => {
  const rulesSourcesWithRuler = (0,_hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_5__.useRulesSourcesWithRuler)();
  const hasLotexDatasources = !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(rulesSourcesWithRuler);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.Stack, {
      direction: "row",
      gap: 2,
      children: [enabledTypes.includes(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_GrafanaManagedAlert__WEBPACK_IMPORTED_MODULE_7__.GrafanaManagedRuleType, {
        selected: selected === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana,
        onClick: onChange
      }), enabledTypes.includes(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudAlerting) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MimirOrLokiAlert__WEBPACK_IMPORTED_MODULE_8__.MimirFlavoredType, {
        selected: selected === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudAlerting,
        onClick: onChange,
        disabled: !hasLotexDatasources
      }), enabledTypes.includes(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudRecording) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MimirOrLokiRecordingRule__WEBPACK_IMPORTED_MODULE_9__.RecordingRuleType, {
        selected: selected === _types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.cloudRecording,
        onClick: onChange,
        disabled: !hasLotexDatasources
      })]
    }), enabledTypes.includes(_types_rule_form__WEBPACK_IMPORTED_MODULE_6__.RuleFormType.grafana) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("small", {
      className: styles.meta,
      children: "Select \u201CGrafana managed\u201D unless you have a Mimir, Loki or Cortex data source with the Ruler API enabled."
    })]
  });
};

const getStyles = theme => ({
  meta: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.disabled};
  `
});



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/util.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkForPathSeparator": () => (/* binding */ checkForPathSeparator),
/* harmony export */   "queriesWithUpdatedReferences": () => (/* binding */ queriesWithUpdatedReferences),
/* harmony export */   "updateMathExpressionRefs": () => (/* binding */ updateMathExpressionRefs)
/* harmony export */ });
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/expressions/guards.ts");

function queriesWithUpdatedReferences(queries, previousRefId, newRefId) {
  return queries.map(query => {
    if (previousRefId === newRefId) {
      return query;
    }

    if (!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_0__.isExpressionQuery)(query.model)) {
      return query;
    }

    const isMathExpression = query.model.type === 'math';
    const isReduceExpression = query.model.type === 'reduce';
    const isResampleExpression = query.model.type === 'resample';
    const isClassicExpression = query.model.type === 'classic_conditions';

    if (isMathExpression) {
      var _query$model$expressi;

      return Object.assign({}, query, {
        model: Object.assign({}, query.model, {
          expression: updateMathExpressionRefs((_query$model$expressi = query.model.expression) !== null && _query$model$expressi !== void 0 ? _query$model$expressi : '', previousRefId, newRefId)
        })
      });
    }

    if (isResampleExpression || isReduceExpression) {
      const isReferencing = query.model.expression === previousRefId;
      return Object.assign({}, query, {
        model: Object.assign({}, query.model, {
          expression: isReferencing ? newRefId : query.model.expression
        })
      });
    }

    if (isClassicExpression) {
      var _query$model$conditio;

      const conditions = (_query$model$conditio = query.model.conditions) === null || _query$model$conditio === void 0 ? void 0 : _query$model$conditio.map(condition => Object.assign({}, condition, {
        query: Object.assign({}, condition.query, {
          params: condition.query.params.map(param => param === previousRefId ? newRefId : param)
        })
      }));
      return Object.assign({}, query, {
        model: Object.assign({}, query.model, {
          conditions
        })
      });
    }

    return query;
  });
}
function updateMathExpressionRefs(expression, previousRefId, newRefId) {
  const oldExpression = new RegExp('(\\$' + previousRefId + '\\b)|(\\${' + previousRefId + '})', 'gm');
  const newExpression = '${' + newRefId + '}';
  return expression.replace(oldExpression, newExpression);
} // some gateways (like Istio) will decode "/" and "\" characters – this will cause 404 errors for any API call
// that includes these values in the URL (ie. /my/path%2fto/resource -> /my/path/to/resource)
//
// see https://istio.io/latest/docs/ops/best-practices/security/#customize-your-system-on-path-normalization

function checkForPathSeparator(value) {
  const containsPathSeparator = value.includes('/') || value.includes('\\');

  if (containsPathSeparator) {
    return 'Cannot contain "/" or "\\" characters';
  }

  return true;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAlertQueriesStatus": () => (/* binding */ useAlertQueriesStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");


function useAlertQueriesStatus(queries) {
  const allDataSourcesAvailable = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => queries.every(query => Boolean((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid))), [queries]);
  return {
    allDataSourcesAvailable
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useFolder.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFolder": () => (/* binding */ useFolder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useFolder(uid) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const folderRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.folders);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (uid) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__.fetchFolderIfNotFetchedAction)(uid));
    }
  }, [dispatch, uid]);

  if (uid) {
    const request = folderRequests[uid] || _utils_redux__WEBPACK_IMPORTED_MODULE_3__.initialAsyncRequestState;
    return {
      folder: request.result,
      loading: request.loading
    };
  }

  return {
    loading: false
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsRuleEditable": () => (/* binding */ useIsRuleEditable)
/* harmony export */ });
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _useFolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useIsRuleEditable(rulesSourceName, rule) {
  var _dataSources$rulesSou, _dataSources$rulesSou2, _dataSources$rulesSou3;

  const dataSources = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.dataSources);
  const folderUID = rule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isGrafanaRulerRule)(rule) ? rule.grafana_alert.namespace_uid : undefined;
  const rulePermission = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_1__.getRulesPermissions)(rulesSourceName);
  const hasEditPermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasAccess(rulePermission.update, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.isEditor);
  const hasRemovePermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasAccess(rulePermission.delete, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.isEditor);
  const {
    folder,
    loading
  } = (0,_useFolder__WEBPACK_IMPORTED_MODULE_3__.useFolder)(folderUID);

  if (!rule) {
    return {
      isEditable: false,
      isRemovable: false,
      loading: false
    };
  } // grafana rules can be edited if user can edit the folder they're in


  if ((0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isGrafanaRulerRule)(rule)) {
    if (!folderUID) {
      throw new Error(`Rule ${rule.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);
    }

    return {
      isEditable: hasEditPermission && (folder === null || folder === void 0 ? void 0 : folder.canSave),
      isRemovable: hasRemovePermission && (folder === null || folder === void 0 ? void 0 : folder.canSave),
      loading
    };
  } // prom rules are only editable by users with Editor role and only if rules source supports editing


  const isRulerAvailable = Boolean((_dataSources$rulesSou = dataSources[rulesSourceName]) === null || _dataSources$rulesSou === void 0 ? void 0 : (_dataSources$rulesSou2 = _dataSources$rulesSou.result) === null || _dataSources$rulesSou2 === void 0 ? void 0 : _dataSources$rulesSou2.rulerConfig);
  return {
    isEditable: hasEditPermission && isRulerAvailable,
    isRemovable: hasRemovePermission && isRulerAvailable,
    loading: (_dataSources$rulesSou3 = dataSources[rulesSourceName]) === null || _dataSources$rulesSou3 === void 0 ? void 0 : _dataSources$rulesSou3.loading
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useRuleSourcesWithRuler.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRulesSourcesWithRuler": () => (/* binding */ useRulesSourcesWithRuler)
/* harmony export */ });
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");


function useRulesSourcesWithRuler() {
  const dataSources = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_1__.useUnifiedAlertingSelector)(state => state.dataSources);
  const dataSourcesWithRuler = Object.values(dataSources).map(ds => ds.result).filter(ds => Boolean(ds === null || ds === void 0 ? void 0 : ds.rulerConfig)); // try fetching rules for each prometheus to see if it has ruler

  return dataSourcesWithRuler.map(ds => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_0__.getDataSourceByName)(ds.name)).filter(dsConfig => Boolean(dsConfig));
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useVizHeight.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useVizHeight": () => (/* binding */ useVizHeight)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");


function useVizHeight(data, pluginId, frameIndex) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.useTheme2)();

  if (pluginId === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.TIMESERIES || pluginId === _utils_constants__WEBPACK_IMPORTED_MODULE_1__.STAT || dataIsEmpty(data)) {
    return 200;
  }

  const values = data.series[frameIndex].fields[0].values.length;
  const rowHeight = theme.spacing.gridSize * 5;
  /*
   Calculate how if we can make  the table smaller than 200px
   for when we only have 1-2 values
   The extra rowHeight is to accommodate the header.
  */

  const tableHeight = values * rowHeight + rowHeight;
  return tableHeight >= 200 ? 200 : tableHeight;
}

function dataIsEmpty(data) {
  return !data || !data.series[0] || !data.series[0].fields[0] || !data.series[0].fields[0].values;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/state/AlertingQueryRunner.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertingQueryRunner": () => (/* binding */ AlertingQueryRunner)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/uuid-npm-8.3.2-eca0baba53-5575a8a75c.zip/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var app_features_query_state_processing_canceler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/query/state/processing/canceler.ts");
/* harmony import */ var app_features_query_state_processing_revision__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/query/state/processing/revision.ts");
/* harmony import */ var app_features_query_state_runRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/query/state/runRequest.ts");
/* harmony import */ var _utils_timeRange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/timeRange.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class AlertingQueryRunner {
  constructor(backendSrv = (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)(), dataSourceSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)()) {
    this.backendSrv = backendSrv;
    this.dataSourceSrv = dataSourceSrv;

    _defineProperty(this, "subject", void 0);

    _defineProperty(this, "subscription", void 0);

    _defineProperty(this, "lastResult", void 0);

    this.backendSrv = backendSrv;
    this.dataSourceSrv = dataSourceSrv;
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.ReplaySubject(1);
    this.lastResult = {};
  }

  get() {
    return this.subject.asObservable();
  }

  async run(queries) {
    if (queries.length === 0) {
      const empty = initialState(queries, _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done);
      return this.subject.next(empty);
    } // do not execute if one more of the queries are not runnable,
    // for example not completely configured


    for (const query of queries) {
      if (!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_3__.isExpressionQuery)(query.model)) {
        const ds = await this.dataSourceSrv.get(query.datasourceUid);

        if (ds.filterQuery && !ds.filterQuery(query.model)) {
          const empty = initialState(queries, _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done);
          return this.subject.next(empty);
        }
      }
    }

    this.subscription = runRequest(this.backendSrv, queries).subscribe({
      next: dataPerQuery => {
        const nextResult = applyChange(dataPerQuery, (refId, data) => {
          const previous = this.lastResult[refId];
          const preProcessed = (0,app_features_query_state_runRequest__WEBPACK_IMPORTED_MODULE_6__.preProcessPanelData)(data, previous);
          return (0,app_features_query_state_processing_revision__WEBPACK_IMPORTED_MODULE_5__.setStructureRevision)(preProcessed, previous);
        });
        this.lastResult = nextResult;
        this.subject.next(this.lastResult);
      },
      error: error => {
        this.lastResult = mapErrorToPanelData(this.lastResult, error);
        this.subject.next(this.lastResult);
      }
    });
  }

  cancel() {
    if (!this.subscription) {
      return;
    }

    this.subscription.unsubscribe();
    let requestIsRunning = false;
    const nextResult = applyChange(this.lastResult, (refId, data) => {
      if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading) {
        requestIsRunning = true;
      }

      return Object.assign({}, data, {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done
      });
    });

    if (requestIsRunning) {
      this.subject.next(nextResult);
    }
  }

  destroy() {
    if (this.subject) {
      this.subject.complete();
    }

    this.cancel();
  }

}

const runRequest = (backendSrv, queries) => {
  const initial = initialState(queries, _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading);
  const request = {
    data: {
      data: queries
    },
    url: '/api/v1/eval',
    method: 'POST',
    requestId: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])()
  };
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.withLoadingIndicator)({
    whileLoading: initial,
    source: backendSrv.fetch(request).pipe(mapToPanelData(initial), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(mapErrorToPanelData(initial, error))), (0,app_features_query_state_processing_canceler__WEBPACK_IMPORTED_MODULE_4__.cancelNetworkRequestsOnUnsubscribe)(backendSrv, request.requestId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.share)())
  });
};

const initialState = (queries, state) => {
  return queries.reduce((dataByQuery, query) => {
    dataByQuery[query.refId] = {
      state,
      series: [],
      timeRange: getTimeRange(query, queries)
    };
    return dataByQuery;
  }, {});
};

const getTimeRange = (query, queries) => {
  if ((0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_3__.isExpressionQuery)(query.model)) {
    const relative = (0,_utils_timeRange__WEBPACK_IMPORTED_MODULE_7__.getTimeRangeForExpression)(query.model, queries);
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.rangeUtil.relativeToTimeRange(relative);
  }

  if (!query.relativeTimeRange) {
    console.warn(`Query with refId: ${query.refId} did not have any relative time range, using default.`);
    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDefaultTimeRange)();
  }

  return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.rangeUtil.relativeToTimeRange(query.relativeTimeRange);
};

const mapToPanelData = dataByQuery => {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(response => {
    const {
      data
    } = response;
    const results = {};

    for (const [refId, result] of Object.entries(data.results)) {
      results[refId] = {
        timeRange: dataByQuery[refId].timeRange,
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
        series: result.frames.map(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.dataFrameFromJSON)
      };
    }

    return results;
  });
};

const mapErrorToPanelData = (lastResult, error) => {
  const queryError = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.toDataQueryError)(error);
  return applyChange(lastResult, (refId, data) => {
    return Object.assign({}, data, {
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Error,
      error: queryError
    });
  });
};

const applyChange = (initial, change) => {
  const nextResult = {};

  for (const [refId, data] of Object.entries(initial)) {
    nextResult[refId] = change(refId, data);
  }

  return nextResult;
};

/***/ }),

/***/ "./public/app/features/alerting/unified/types/preview.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isCloudPreviewRequest": () => (/* binding */ isCloudPreviewRequest),
/* harmony export */   "isGrafanaPreviewRequest": () => (/* binding */ isGrafanaPreviewRequest)
/* harmony export */ });
function isCloudPreviewRequest(request) {
  return 'expr' in request;
}
function isGrafanaPreviewRequest(request) {
  return 'grafana_condition' in request;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/accessControlHooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useRulesAccess": () => (/* binding */ useRulesAccess)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");


function useRulesAccess() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_access_control__WEBPACK_IMPORTED_MODULE_1__.getRulesAccess)(), []);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/timeRange.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTimeRangeForExpression": () => (/* binding */ getTimeRangeForExpression)
/* harmony export */ });
/* harmony import */ var _expressions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/expressions/types.ts");

const FALL_BACK_TIME_RANGE = {
  from: 21600,
  to: 0
};
const getTimeRangeForExpression = (query, queries) => {
  const referencedRefIds = getReferencedIds(query, queries);

  if (!referencedRefIds) {
    return FALL_BACK_TIME_RANGE;
  }

  const {
    from,
    to
  } = getTimeRanges(referencedRefIds, queries);

  if (!from.length && !to.length) {
    return FALL_BACK_TIME_RANGE;
  }

  return {
    from: Math.max(...from),
    to: Math.min(...to)
  };
};

const getReferencedIds = (model, queries) => {
  switch (model.type) {
    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.classic:
      return getReferencedIdsForClassicCondition(model);

    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.math:
      return getReferencedIdsForMath(model, queries);

    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.resample:
    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.reduce:
      return getReferencedIdsForReduce(model);
  }
};

const getReferencedIdsForClassicCondition = model => {
  var _model$conditions;

  return (_model$conditions = model.conditions) === null || _model$conditions === void 0 ? void 0 : _model$conditions.map(condition => {
    return condition.query.params[0];
  });
};

const getTimeRanges = (referencedRefIds, queries) => {
  let from = [];
  let to = [FALL_BACK_TIME_RANGE.to];

  for (const referencedRefIdsKey of referencedRefIds) {
    const query = queries.find(query => query.refId === referencedRefIdsKey);

    if (!query || !query.relativeTimeRange) {
      continue;
    }

    from.push(query.relativeTimeRange.from);
    to.push(query.relativeTimeRange.to);
  }

  return {
    from,
    to
  };
};

const getReferencedIdsForMath = (model, queries) => {
  return queries // filter queries of type query and filter expression on if it includes any refIds
  .filter(q => {
    var _model$expression;

    return q.queryType === 'query' && ((_model$expression = model.expression) === null || _model$expression === void 0 ? void 0 : _model$expression.includes(q.refId));
  }).map(q => {
    return q.refId;
  });
};

const getReferencedIdsForReduce = model => {
  return model.expression ? [model.expression] : undefined;
};

/***/ }),

/***/ "./public/app/features/expressions/guards.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isExpressionQuery": () => (/* binding */ isExpressionQuery)
/* harmony export */ });
/* harmony import */ var _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/expressions/types.ts");


const isExpressionQuery = dataQuery => {
  if (!dataQuery) {
    return false;
  }

  if ((0,_grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_0__.isExpressionReference)(dataQuery.datasource)) {
    return true;
  }

  const expression = dataQuery;

  if (typeof expression.type !== 'string') {
    return false;
  }

  return Object.values(_types__WEBPACK_IMPORTED_MODULE_1__.ExpressionQueryType).includes(expression.type);
};

/***/ }),

/***/ "./.yarn/cache/js-yaml-npm-4.1.0-3606f32312-c7830dfd45.zip/node_modules/js-yaml/dist/js-yaml.mjs":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CORE_SCHEMA": () => (/* binding */ CORE_SCHEMA),
/* harmony export */   "DEFAULT_SCHEMA": () => (/* binding */ DEFAULT_SCHEMA),
/* harmony export */   "FAILSAFE_SCHEMA": () => (/* binding */ FAILSAFE_SCHEMA),
/* harmony export */   "JSON_SCHEMA": () => (/* binding */ JSON_SCHEMA),
/* harmony export */   "Schema": () => (/* binding */ Schema),
/* harmony export */   "Type": () => (/* binding */ Type),
/* harmony export */   "YAMLException": () => (/* binding */ YAMLException),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dump": () => (/* binding */ dump),
/* harmony export */   "load": () => (/* binding */ load),
/* harmony export */   "loadAll": () => (/* binding */ loadAll),
/* harmony export */   "safeDump": () => (/* binding */ safeDump),
/* harmony export */   "safeLoad": () => (/* binding */ safeLoad),
/* harmony export */   "safeLoadAll": () => (/* binding */ safeLoadAll),
/* harmony export */   "types": () => (/* binding */ types)
/* harmony export */ });

/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


var isNothing_1      = isNothing;
var isObject_1       = isObject;
var toArray_1        = toArray;
var repeat_1         = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1         = extend;

var common = {
	isNothing: isNothing_1,
	isObject: isObject_1,
	toArray: toArray_1,
	repeat: repeat_1,
	isNegativeZero: isNegativeZero_1,
	extend: extend_1
};

// YAML error class. http://stackoverflow.com/questions/8458984


function formatError(exception, compact) {
  var where = '', message = exception.reason || '(unknown reason)';

  if (!exception.mark) return message;

  if (exception.mark.name) {
    where += 'in "' + exception.mark.name + '" ';
  }

  where += '(' + (exception.mark.line + 1) + ':' + (exception.mark.column + 1) + ')';

  if (!compact && exception.mark.snippet) {
    where += '\n\n' + exception.mark.snippet;
  }

  return message + ' ' + where;
}


function YAMLException$1(reason, mark) {
  // Super constructor
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }
}


// Inherit from Error
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;


YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ': ' + formatError(this, compact);
};


var exception = YAMLException$1;

// get snippet for a single line, respecting maxLength
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = '';
  var tail = '';
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;

  if (position - lineStart > maxHalfLength) {
    head = ' ... ';
    lineStart = position - maxHalfLength + head.length;
  }

  if (lineEnd - position > maxHalfLength) {
    tail = ' ...';
    lineEnd = position + maxHalfLength - tail.length;
  }

  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, '→') + tail,
    pos: position - lineStart + head.length // relative position
  };
}


function padStart(string, max) {
  return common.repeat(' ', max - string.length) + string;
}


function makeSnippet(mark, options) {
  options = Object.create(options || null);

  if (!mark.buffer) return null;

  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent      !== 'number') options.indent      = 1;
  if (typeof options.linesBefore !== 'number') options.linesBefore = 3;
  if (typeof options.linesAfter  !== 'number') options.linesAfter  = 2;

  var re = /\r?\n|\r|\0/g;
  var lineStarts = [ 0 ];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;

  while ((match = re.exec(mark.buffer))) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);

    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }

  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;

  var result = '', i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);

  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(' ', options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n' + result;
  }

  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(' ', options.indent) + padStart((mark.line + 1).toString(), lineNoLength) +
    ' | ' + line.str + '\n';
  result += common.repeat('-', options.indent + lineNoLength + 3 + line.pos) + '^' + '\n';

  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(' ', options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n';
  }

  return result.replace(/\n$/, '');
}


var snippet = makeSnippet;

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'multi',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'representName',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type$1(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.options       = options; // keep original options in case user wants to extend this type later
  this.tag           = tag;
  this.kind          = options['kind']          || null;
  this.resolve       = options['resolve']       || function () { return true; };
  this.construct     = options['construct']     || function (data) { return data; };
  this.instanceOf    = options['instanceOf']    || null;
  this.predicate     = options['predicate']     || null;
  this.represent     = options['represent']     || null;
  this.representName = options['representName'] || null;
  this.defaultStyle  = options['defaultStyle']  || null;
  this.multi         = options['multi']         || false;
  this.styleAliases  = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

var type = Type$1;

/*eslint-disable max-len*/





function compileList(schema, name) {
  var result = [];

  schema[name].forEach(function (currentType) {
    var newIndex = result.length;

    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag &&
          previousType.kind === currentType.kind &&
          previousType.multi === currentType.multi) {

        newIndex = previousIndex;
      }
    });

    result[newIndex] = currentType;
  });

  return result;
}


function compileMap(/* lists... */) {
  var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      }, index, length;

  function collectType(type) {
    if (type.multi) {
      result.multi[type.kind].push(type);
      result.multi['fallback'].push(type);
    } else {
      result[type.kind][type.tag] = result['fallback'][type.tag] = type;
    }
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}


function Schema$1(definition) {
  return this.extend(definition);
}


Schema$1.prototype.extend = function extend(definition) {
  var implicit = [];
  var explicit = [];

  if (definition instanceof type) {
    // Schema.extend(type)
    explicit.push(definition);

  } else if (Array.isArray(definition)) {
    // Schema.extend([ type1, type2, ... ])
    explicit = explicit.concat(definition);

  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    // Schema.extend({ explicit: [ type1, type2, ... ], implicit: [ type1, type2, ... ] })
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);

  } else {
    throw new exception('Schema.extend argument should be a Type, [ Type ], ' +
      'or a schema definition ({ implicit: [...], explicit: [...] })');
  }

  implicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }

    if (type$1.loadKind && type$1.loadKind !== 'scalar') {
      throw new exception('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }

    if (type$1.multi) {
      throw new exception('There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.');
    }
  });

  explicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
  });

  var result = Object.create(Schema$1.prototype);

  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);

  result.compiledImplicit = compileList(result, 'implicit');
  result.compiledExplicit = compileList(result, 'explicit');
  result.compiledTypeMap  = compileMap(result.compiledImplicit, result.compiledExplicit);

  return result;
};


var schema = Schema$1;

var str = new type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});

var seq = new type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});

var map = new type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});

var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

var _null = new type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; },
    empty:     function () { return '';     }
  },
  defaultStyle: 'lowercase'
});

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

var bool = new type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'o') {
      // base 8
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }
  }

  // base 10 (except 0)

  // value should not start with `_`;
  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  // Should have digits and should not end with `_`
  if (!hasDigits || ch === '_') return false;

  return true;
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch;

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value.slice(2), 16);
    if (value[1] === 'o') return sign * parseInt(value.slice(2), 8);
  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

var int = new type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
    octal:       function (obj) { return obj >= 0 ? '0o'  + obj.toString(8) : '-0o'  + obj.toString(8).slice(1); },
    decimal:     function (obj) { return obj.toString(10); },
    /* eslint-disable max-len */
    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});

var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
      // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

var float = new type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});

var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});

var core = json;

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

var timestamp = new type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

var merge = new type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

/*eslint-disable no-bitwise*/





// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  return new Uint8Array(result);
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(obj) {
  return Object.prototype.toString.call(obj) ===  '[object Uint8Array]';
}

var binary = new type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});

var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString$2.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

var omap = new type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});

var _toString$1 = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString$1.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

var pairs = new type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});

var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

var set = new type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});

var _default = core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});

/*eslint-disable max-len,no-use-before-define*/







var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function _class(obj) { return Object.prototype.toString.call(obj); }

function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}


function State$1(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || _default;
  this.onWarning = options['onWarning'] || null;
  // (Hidden) Remove? makes the loader to expect YAML 1.1 documents
  // if such documents have no explicit %YAML directive
  this.legacy    = options['legacy']    || false;

  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  // position of first leading tab in the current line,
  // used to make sure there are no tabs in the indentation
  this.firstTabInLine = -1;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  var mark = {
    name:     state.filename,
    buffer:   state.input.slice(0, -1), // omit trailing \0
    position: state.position,
    line:     state.line,
    column:   state.position - state.lineStart
  };

  mark.snippet = snippet(mark);

  return new exception(message, mark);
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, 'tag prefix is malformed: ' + prefix);
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode,
  startLine, startLineStart, startPos) {

  var index, quantity;

  // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);

    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }

      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  }

  // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)
  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }


  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty$1.call(overridableKeys, keyNode) &&
        _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }

    // used for this specific key only because Object.defineProperty is slow
    if (keyNode === '__proto__') {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 0x09/* Tab */ && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _lineStart,
      _pos,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = Object.create(null),
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    } else if (ch === 0x2C/* , */) {
      // "flow collection entries can never be completely empty", as per YAML 1.2, section 7.4
      throwError(state, "expected the node content, but found ','");
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line; // Save the current line.
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _keyLine,
      _keyLineStart,
      _keyPos,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = Object.create(null),
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;

      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        // Neither implicit nor explicit notation.
        // Reading is done. Go to the epilogue.
        break;
      }

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }

      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, 'tag name is malformed: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      typeList,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }

  } else if (state.tag === '?') {
    // Implicit resolving is not allowed for non-scalar types, and '?'
    // non-specific tag is only automatically assigned to plain scalars.
    //
    // We only need to check kind conformity in case user explicitly assigns '?'
    // tag, for example like this: "!<?> [0]"
    //
    if (state.result !== null && state.kind !== 'scalar') {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }

    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type = state.implicitTypes[typeIndex];

      if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
        state.result = type.construct(state.result);
        state.tag = type.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== '!') {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];
    } else {
      // looking for multi type
      type = null;
      typeList = state.typeMap.multi[state.kind || 'fallback'];

      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type = typeList[typeIndex];
          break;
        }
      }
    }

    if (!type) {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }

    if (state.result !== null && type.kind !== state.kind) {
      throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
    }

    if (!type.resolve(state.result, state.tag)) { // `state.result` updated in resolver if matched
      throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
    } else {
      state.result = type.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = Object.create(null);
  state.anchorMap = Object.create(null);

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State$1(input, options);

  var nullpos = input.indexOf('\0');

  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, 'null byte is not allowed in input');
  }

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
    options = iterator;
    iterator = null;
  }

  var documents = loadDocuments(input, options);

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load$1(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception('expected a single document in the stream, but found more');
}


var loadAll_1 = loadAll$1;
var load_1    = load$1;

var loader = {
	loadAll: loadAll_1,
	load: load_1
};

/*eslint-disable no-use-before-define*/





var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_BOM                  = 0xFEFF;
var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_CARRIAGE_RETURN      = 0x0D; /* CR */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_EQUALS               = 0x3D; /* = */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new exception('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}


var QUOTING_TYPE_SINGLE = 1,
    QUOTING_TYPE_DOUBLE = 2;

function State(options) {
  this.schema        = options['schema'] || _default;
  this.indent        = Math.max(1, (options['indent'] || 2));
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid   = options['skipInvalid'] || false;
  this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys      = options['sortKeys'] || false;
  this.lineWidth     = options['lineWidth'] || 80;
  this.noRefs        = options['noRefs'] || false;
  this.noCompatMode  = options['noCompatMode'] || false;
  this.condenseFlow  = options['condenseFlow'] || false;
  this.quotingType   = options['quotingType'] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes   = options['forceQuotes'] || false;
  this.replacer      = typeof options['replacer'] === 'function' ? options['replacer'] : null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== CHAR_BOM)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// Including s-white (for some reason, examples doesn't match specs in this aspect)
// ns-char ::= c-printable - b-line-feed - b-carriage-return - c-byte-order-mark
function isNsCharOrWhitespace(c) {
  return isPrintable(c)
    && c !== CHAR_BOM
    // - b-char
    && c !== CHAR_CARRIAGE_RETURN
    && c !== CHAR_LINE_FEED;
}

// [127]  ns-plain-safe(c) ::= c = flow-out  ⇒ ns-plain-safe-out
//                             c = flow-in   ⇒ ns-plain-safe-in
//                             c = block-key ⇒ ns-plain-safe-out
//                             c = flow-key  ⇒ ns-plain-safe-in
// [128] ns-plain-safe-out ::= ns-char
// [129]  ns-plain-safe-in ::= ns-char - c-flow-indicator
// [130]  ns-plain-char(c) ::=  ( ns-plain-safe(c) - “:” - “#” )
//                            | ( /* An ns-char preceding */ “#” )
//                            | ( “:” /* Followed by an ns-plain-safe(c) */ )
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    inblock ? // c = flow-in
      cIsNsCharOrWhitespace
      : cIsNsCharOrWhitespace
        // - c-flow-indicator
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
  )
    // ns-plain-char
    && c !== CHAR_SHARP // false on '#'
    && !(prev === CHAR_COLON && !cIsNsChar) // false on ': '
    || (isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP) // change to true on '[^ ]#'
    || (prev === CHAR_COLON && cIsNsChar); // change to true on ':[^ ]'
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  // No support of ( ( “?” | “:” | “-” ) /* Followed by an ns-plain-safe(c)) */ ) part
  return isPrintable(c) && c !== CHAR_BOM
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_EQUALS
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

// Simplified test for values allowed as the last character in plain style.
function isPlainSafeLast(c) {
  // just not whitespace or colon, it will be checked to be plain character later
  return !isWhitespace(c) && c !== CHAR_COLON;
}

// Same as 'string'.codePointAt(pos), but works in older browsers.
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth,
  testAmbiguousType, quotingType, forceQuotes, inblock) {

  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(codePointAt(string, 0))
          && isPlainSafeLast(codePointAt(string, string.length - 1));

  if (singleLineOnly || forceQuotes) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = (function () {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? ('"' + string + '"') : ("'" + string + "'");
      }
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth,
      testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {

      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char = 0;
  var escapeSeq;

  for (var i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];

    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 0x10000) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level, value, false, false) ||
        (typeof value === 'undefined' &&
         writeNode(state, level, null, false, false))) {

      if (_result !== '') _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level + 1, value, true, true, false, true) ||
        (typeof value === 'undefined' &&
         writeNode(state, level + 1, null, true, true, false, true))) {

      if (!compact || _result !== '') {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {

    pairBuffer = '';
    if (_result !== '') pairBuffer += ', ';

    if (state.condenseFlow) pairBuffer += '"';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new exception('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || _result !== '') {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      if (explicit) {
        if (type.multi && type.representName) {
          state.tag = type.representName(object);
        } else {
          state.tag = type.tag;
        }
      } else {
        state.tag = '?';
      }

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new exception('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);
  var inblock = block;
  var tagStr;

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && (state.dump.length !== 0)) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type === '[object Undefined]') {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new exception('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      // Need to encode all characters except those allowed by the spec:
      //
      // [35] ns-dec-digit    ::=  [#x30-#x39] /* 0-9 */
      // [36] ns-hex-digit    ::=  ns-dec-digit
      //                         | [#x41-#x46] /* A-F */ | [#x61-#x66] /* a-f */
      // [37] ns-ascii-letter ::=  [#x41-#x5A] /* A-Z */ | [#x61-#x7A] /* a-z */
      // [38] ns-word-char    ::=  ns-dec-digit | ns-ascii-letter | “-”
      // [39] ns-uri-char     ::=  “%” ns-hex-digit ns-hex-digit | ns-word-char | “#”
      //                         | “;” | “/” | “?” | “:” | “@” | “&” | “=” | “+” | “$” | “,”
      //                         | “_” | “.” | “!” | “~” | “*” | “'” | “(” | “)” | “[” | “]”
      //
      // Also need to encode '!' because it has special meaning (end of tag prefix).
      //
      tagStr = encodeURI(
        state.tag[0] === '!' ? state.tag.slice(1) : state.tag
      ).replace(/!/g, '%21');

      if (state.tag[0] === '!') {
        tagStr = '!' + tagStr;
      } else if (tagStr.slice(0, 18) === 'tag:yaml.org,2002:') {
        tagStr = '!!' + tagStr.slice(18);
      } else {
        tagStr = '!<' + tagStr + '>';
      }

      state.dump = tagStr + ' ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump$1(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  var value = input;

  if (state.replacer) {
    value = state.replacer.call({ '': value }, '', value);
  }

  if (writeNode(state, 0, value, true, true)) return state.dump + '\n';

  return '';
}

var dump_1 = dump$1;

var dumper = {
	dump: dump_1
};

function renamed(from, to) {
  return function () {
    throw new Error('Function yaml.' + from + ' is removed in js-yaml 4. ' +
      'Use yaml.' + to + ' instead, which is now safe by default.');
  };
}


var Type                = type;
var Schema              = schema;
var FAILSAFE_SCHEMA     = failsafe;
var JSON_SCHEMA         = json;
var CORE_SCHEMA         = core;
var DEFAULT_SCHEMA      = _default;
var load                = loader.load;
var loadAll             = loader.loadAll;
var dump                = dumper.dump;
var YAMLException       = exception;

// Re-export all types in case user wants to create custom schema
var types = {
  binary:    binary,
  float:     float,
  map:       map,
  null:      _null,
  pairs:     pairs,
  set:       set,
  timestamp: timestamp,
  bool:      bool,
  int:       int,
  merge:     merge,
  omap:      omap,
  seq:       seq,
  str:       str
};

// Removed functions from JS-YAML 3.0.x
var safeLoad            = renamed('safeLoad', 'load');
var safeLoadAll         = renamed('safeLoadAll', 'loadAll');
var safeDump            = renamed('safeDump', 'dump');

var jsYaml = {
	Type: Type,
	Schema: Schema,
	FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
	JSON_SCHEMA: JSON_SCHEMA,
	CORE_SCHEMA: CORE_SCHEMA,
	DEFAULT_SCHEMA: DEFAULT_SCHEMA,
	load: load,
	loadAll: loadAll,
	dump: dump,
	YAMLException: YAMLException,
	types: types,
	safeLoad: safeLoad,
	safeLoadAll: safeLoadAll,
	safeDump: safeDump
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jsYaml);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxlcnRpbmdSdWxlRm9ybS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRU8sU0FBU0ksVUFBVCxDQUF1QkMsYUFBdkIsRUFBd0Q7QUFDN0QsUUFBTUMsUUFBUSxHQUFHSix3REFBVyxFQUE1QixDQUQ2RCxDQUU3RDs7QUFDQSxRQUFNSyxXQUFXLEdBQUdOLDZDQUFNLENBQUNJLGFBQUQsQ0FBMUI7QUFDQUUsRUFBQUEsV0FBVyxDQUFDQyxPQUFaLEdBQXNCSCxhQUF0QjtBQUNBTCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxXQUFPLE1BQU07QUFDWE0sTUFBQUEsUUFBUSxDQUFDSCwrREFBYSxDQUFDO0FBQUVFLFFBQUFBLGFBQWEsRUFBRUUsV0FBVyxDQUFDQztBQUE3QixPQUFELENBQWQsQ0FBUjtBQUNELEtBRkQ7QUFHRCxHQUpRLEVBSU4sQ0FBQ0YsUUFBRCxDQUpNLENBQVQ7QUFLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkQ7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFNQSxNQUFNbUIsa0JBQStDLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBb0I7QUFDMUV0QixFQUFBQSxxRUFBVSxDQUFFdUIsS0FBRCxJQUFXQSxLQUFLLENBQUNDLGVBQU4sQ0FBc0JDLFFBQXRCLENBQStCQyxZQUEzQyxDQUFWO0FBQ0EsUUFBTTtBQUFFQyxJQUFBQSxPQUFGO0FBQVdDLElBQUFBLE1BQVg7QUFBbUJDLElBQUFBLEtBQW5CO0FBQTBCQyxJQUFBQTtBQUExQixNQUF5Q2QsNkZBQTBCLENBQUVPLEtBQUQsSUFBV0EsS0FBSyxDQUFDRSxRQUFOLENBQWVDLFlBQTNCLENBQXpFO0FBQ0EsUUFBTXhCLFFBQVEsR0FBR0osd0RBQVcsRUFBNUI7QUFDQSxRQUFNO0FBQUVpQyxJQUFBQTtBQUFGLE1BQWlCaEIsMkVBQWlCLENBQUNLLDJFQUFBLENBQXNDRSxVQUF0QyxDQUFELEVBQW9ETSxNQUFwRCxhQUFvREEsTUFBcEQsdUJBQW9EQSxNQUFNLENBQUVLLElBQTVELENBQXhDO0FBRUFyQyxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZCxRQUFJLENBQUNrQyxVQUFMLEVBQWlCO0FBQ2Y1QixNQUFBQSxRQUFRLENBQUNnQix1RUFBdUIsQ0FBQ0ksVUFBRCxDQUF4QixDQUFSO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ1EsVUFBRCxFQUFhNUIsUUFBYixFQUF1Qm9CLFVBQXZCLENBSk0sQ0FBVDs7QUFNQSxNQUFJSyxPQUFPLElBQUlJLFVBQVUsS0FBS0csU0FBOUIsRUFBeUM7QUFDdkMsNERBQ0Usd0RBQUMsOEVBQUQ7QUFBQSw2QkFDRSx3REFBQywyREFBRDtBQUFvQixZQUFJLEVBQUM7QUFBekI7QUFERixNQURGO0FBS0Q7O0FBRUQsTUFBSUwsS0FBSixFQUFXO0FBQ1Qsd0JBQ0Usd0RBQUMsOEVBQUQ7QUFBQSw2QkFDRSx3REFBQyw4Q0FBRDtBQUFPLGdCQUFRLEVBQUMsT0FBaEI7QUFBd0IsYUFBSyxFQUFDLHFCQUE5QjtBQUFBLGtCQUNHQSxLQUFLLENBQUNNO0FBRFQ7QUFERixNQURGO0FBT0Q7O0FBRUQsTUFBSSxDQUFDUCxNQUFMLEVBQWE7QUFDWCwwREFBTyx3REFBQyxZQUFEO0FBQWMsV0FBSyxFQUFDLGdCQUFwQjtBQUFBO0FBQUEsTUFBUDtBQUNEOztBQUVELE1BQUlHLFVBQVUsS0FBSyxLQUFuQixFQUEwQjtBQUN4Qiw0REFBTyx3REFBQyxZQUFEO0FBQWMsV0FBSyxFQUFDLGtCQUFwQjtBQUFBO0FBQUEsTUFBUDtBQUNEOztBQUVELHNCQUFPLHdEQUFDLGdGQUFEO0FBQWUsWUFBUSxFQUFFSDtBQUF6QixJQUFQO0FBQ0QsQ0F2Q0Q7O0FBMkNBLE1BQU1RLFVBQStCLEdBQUcsQ0FBQztBQUFFQyxFQUFBQTtBQUFGLENBQUQsS0FBZTtBQUNyRCxRQUFNbkMsUUFBUSxHQUFHSix3REFBVyxFQUE1QjtBQUNBLFFBQU07QUFBRXdDLElBQUFBO0FBQUYsTUFBU0QsS0FBSyxDQUFDRSxNQUFyQjtBQUNBLFFBQU1qQixVQUFVLEdBQUdGLHFEQUFBLENBQWdCa0IsRUFBaEIsRUFBb0IsSUFBcEIsQ0FBbkI7QUFFQSxRQUFNO0FBQUVYLElBQUFBO0FBQUYsTUFBY3BCLHNEQUFRLENBQUMsWUFBWTtBQUN2QyxVQUFNTCxRQUFRLENBQUNlLDJFQUEyQixFQUE1QixDQUFkO0FBQ0QsR0FGMkIsRUFFekIsQ0FBQ2YsUUFBRCxDQUZ5QixDQUE1QjtBQUlBLFFBQU07QUFBRXVDLElBQUFBLHFCQUFGO0FBQXlCQyxJQUFBQSxtQkFBekI7QUFBOENDLElBQUFBO0FBQTlDLE1BQStEeEIsMEVBQWMsRUFBbkY7O0FBRUEsTUFBSSxDQUFDRyxVQUFELElBQWUsQ0FBQ21CLHFCQUFoQixJQUF5QyxDQUFDQyxtQkFBOUMsRUFBbUU7QUFDakUsNERBQU8sd0RBQUMsWUFBRDtBQUFjLFdBQUssRUFBQyxxQkFBcEI7QUFBQTtBQUFBLE1BQVA7QUFDRDs7QUFFRCxNQUFJcEIsVUFBVSxJQUFJLENBQUNxQixZQUFZLENBQUNyQixVQUFVLENBQUNzQixjQUFaLENBQS9CLEVBQTREO0FBQzFELDREQUFPLHdEQUFDLFlBQUQ7QUFBYyxXQUFLLEVBQUMsbUJBQXBCO0FBQUE7QUFBQSxNQUFQO0FBQ0Q7O0FBRUQsTUFBSWpCLE9BQUosRUFBYTtBQUNYLDhEQUNFLHdEQUFDLDhFQUFEO0FBQUEsNkJBQ0Usd0RBQUMsMkRBQUQ7QUFBb0IsWUFBSSxFQUFDO0FBQXpCO0FBREYsTUFERjtBQUtEOztBQUVELE1BQUlMLFVBQUosRUFBZ0I7QUFDZCx3QkFBTyx3REFBQyxrQkFBRDtBQUE2QixnQkFBVSxFQUFFQTtBQUF6QyxPQUF5QmdCLEVBQXpCLENBQVA7QUFDRDs7QUFFRCwwREFBTyx3REFBQyxnRkFBRCxLQUFQO0FBQ0QsQ0FoQ0Q7O0FBa0NBLE1BQU1PLFlBQW1DLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxLQUFGO0FBQVNDLEVBQUFBO0FBQVQsQ0FBRCxrQkFDMUMseURBQUMsOENBQUQ7QUFBTyxXQUFTLEVBQUVwQyx1REFBVSxDQUFDcUMsYUFBRCxDQUFWLENBQTBCQyxPQUE1QztBQUFxRCxVQUFRLEVBQUMsU0FBOUQ7QUFBd0UsT0FBSyxFQUFFSCxLQUEvRTtBQUFBLDBCQUNFO0FBQUEsY0FBSUM7QUFBSixJQURGLDZDQUVFLHdEQUFDLG1EQUFEO0FBQVksUUFBSSxFQUFDLGVBQWpCO0FBQUE7QUFBQSxJQUZGO0FBQUEsRUFERjs7QUFPQSxNQUFNQyxhQUFhLEdBQUlFLEtBQUQsS0FBMkI7QUFDL0NELEVBQUFBLE9BQU8sRUFBRTVDLDZDQUFJO0FBQ2YsY0FBYzZDLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDL0I7QUFIaUQsQ0FBM0IsQ0FBdEI7O0FBTUEsaUVBQWV2Qyw4REFBaUIsQ0FBQ3dCLFVBQUQsRUFBYTtBQUFFZ0IsRUFBQUEsS0FBSyxFQUFFO0FBQVQsQ0FBYixDQUFoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUNBO0FBRUE7QUFRQTtBQUVBO0FBUUE7QUFFTyxTQUFTYyxnQkFBVCxDQUEwQkMsT0FBMUIsRUFBd0Y7QUFDN0YsTUFBSUoscUVBQXFCLENBQUNJLE9BQUQsQ0FBekIsRUFBb0M7QUFDbEMsV0FBT0MscUJBQXFCLENBQUNELE9BQUQsQ0FBNUI7QUFDRDs7QUFFRCxNQUFJSCx1RUFBdUIsQ0FBQ0csT0FBRCxDQUEzQixFQUFzQztBQUNwQyxXQUFPRSx1QkFBdUIsQ0FBQ0YsT0FBRCxDQUE5QjtBQUNEOztBQUVELFFBQU0sSUFBSUcsS0FBSixDQUFVLGtDQUFWLENBQU47QUFDRDs7QUFNRCxTQUFTRCx1QkFBVCxDQUFpQ0YsT0FBakMsRUFBc0c7QUFDcEcsUUFBTUksSUFBSSxHQUFHTixrRUFBYjtBQUVBLFNBQU9MLG1FQUFvQixDQUFDO0FBQzFCYSxJQUFBQSxZQUFZLEVBQUVDLGNBQWMsQ0FBQ0gsSUFBRCxDQURGO0FBRTFCSSxJQUFBQSxNQUFNLEVBQUVkLCtEQUFhLEdBQ2xCZSxLQURLLENBQzZCO0FBQ2pDQyxNQUFBQSxNQUFNLEVBQUUsTUFEeUI7QUFFakNDLE1BQUFBLEdBQUcsRUFBRywyQkFGMkI7QUFHakNDLE1BQUFBLElBQUksRUFBRVo7QUFIMkIsS0FEN0IsRUFNTGEsSUFOSyxDQU9KekIsbURBQUcsQ0FBQyxDQUFDO0FBQUV3QixNQUFBQTtBQUFGLEtBQUQsS0FBYztBQUNoQixhQUFPTCxjQUFjLENBQUNILElBQUQsRUFBTztBQUMxQmhELFFBQUFBLEtBQUssRUFBRW9DLDREQURtQjtBQUUxQnVCLFFBQUFBLE1BQU0sRUFBRUgsSUFBSSxDQUFDSSxTQUFMLENBQWU1QixHQUFmLENBQW1CRSw0REFBbkI7QUFGa0IsT0FBUCxDQUFyQjtBQUlELEtBTEUsQ0FQQyxFQWFKSCwwREFBVSxDQUFFekIsS0FBRCxJQUFrQjtBQUMzQixhQUFPd0Isd0NBQUUsQ0FDUHFCLGNBQWMsQ0FBQ0gsSUFBRCxFQUFPO0FBQ25CaEQsUUFBQUEsS0FBSyxFQUFFb0MsNkRBRFk7QUFFbkI5QixRQUFBQSxLQUFLLEVBQUVpQyxrRUFBZ0IsQ0FBQ2pDLEtBQUQ7QUFGSixPQUFQLENBRFAsQ0FBVDtBQU1ELEtBUFMsQ0FiTixFQXFCSjJCLHFEQUFLLEVBckJEO0FBRmtCLEdBQUQsQ0FBM0I7QUEwQkQ7O0FBRUQsU0FBU2tCLGNBQVQsQ0FBd0JVLFFBQXhCLEVBQWdETCxJQUF3QixHQUFHLEVBQTNFLEVBQW9HO0FBQ2xHLFNBQU87QUFDTEssSUFBQUEsUUFESztBQUVMTCxJQUFBQSxJQUFJO0FBQ0Z4RCxNQUFBQSxLQUFLLEVBQUVvQywrREFETDtBQUVGdUIsTUFBQUEsTUFBTSxFQUFFLEVBRk47QUFHRkksTUFBQUEsU0FBUyxFQUFFNUIsa0VBQW1CO0FBSDVCLE9BSUNxQixJQUpEO0FBRkMsR0FBUDtBQVNEOztBQUVELFNBQVNYLHFCQUFULENBQStCRCxPQUEvQixFQUFrRztBQUNoRyxRQUFNLElBQUlHLEtBQUosQ0FBVSxxREFBVixDQUFOO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkQ7QUFHQTtBQUNBO0FBRUE7O0FBVU8sU0FBU3VCLHVCQUFULENBQWlDQyxLQUFqQyxFQUFtRTtBQUN4RSxRQUFNO0FBQUVDLElBQUFBLEtBQUY7QUFBU0MsSUFBQUEsUUFBVDtBQUFtQkMsSUFBQUEsSUFBSSxHQUFHO0FBQTFCLE1BQW1DSCxLQUF6QztBQUNBLFFBQU1JLE1BQU0sR0FBR1gsOENBQU8sQ0FBQyxNQUFNWSxrQkFBa0IsRUFBekIsRUFBNkIsRUFBN0IsQ0FBdEI7QUFFQSxzQkFBTyx1REFBQyx5REFBRDtBQUFrQixXQUFPLEVBQUVELE1BQTNCO0FBQW1DLFNBQUssRUFBRUgsS0FBMUM7QUFBaUQsWUFBUSxFQUFFQyxRQUEzRDtBQUFxRSxRQUFJLEVBQUVDO0FBQTNFLElBQVA7QUFDRDs7QUFFRCxTQUFTRSxrQkFBVCxHQUE2RTtBQUMzRSxTQUFPQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2IsMkRBQWQsRUFBNkJjLE1BQTdCLENBQW9DLENBQUNKLE1BQUQsRUFBd0RLLEtBQXhELEtBQWtFO0FBQzNHLFFBQUlDLHNCQUFzQixDQUFDRCxLQUFLLENBQUNqRSxFQUFQLENBQTFCLEVBQXNDO0FBQ3BDNEQsTUFBQUEsTUFBTSxDQUFDTyxJQUFQLENBQVk7QUFDVlYsUUFBQUEsS0FBSyxFQUFFUSxLQUFLLENBQUNqRSxFQURIO0FBRVZvRSxRQUFBQSxLQUFLLEVBQUVILEtBQUssQ0FBQ0ksSUFGSDtBQUdWQyxRQUFBQSxNQUFNLEVBQUVMLEtBQUssQ0FBQ00sSUFBTixDQUFXQyxLQUFYLENBQWlCQztBQUhmLE9BQVo7QUFLRDs7QUFDRCxXQUFPYixNQUFQO0FBQ0QsR0FUTSxFQVNKLEVBVEksQ0FBUDtBQVVEOztBQUVELFNBQVNNLHNCQUFULENBQWdDbEUsRUFBaEMsRUFBeUU7QUFDdkUsVUFBUUEsRUFBUjtBQUNFLFNBQUtzRCx3REFBTDtBQUNBLFNBQUtELG1EQUFMO0FBQ0EsU0FBS0Qsa0RBQUw7QUFDRSxhQUFPLElBQVA7O0FBQ0Y7QUFDRSxhQUFPLEtBQVA7QUFOSjtBQVFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFNTyxNQUFNNUUsYUFBd0IsR0FBRyxDQUFDO0FBQUV3SCxFQUFBQTtBQUFGLENBQUQsS0FBa0I7QUFBQTs7QUFDeEQsUUFBTUMsTUFBTSxHQUFHNUgsdURBQVUsQ0FBQzZILFNBQUQsQ0FBekI7QUFDQSxRQUFNdEksUUFBUSxHQUFHSix3REFBVyxFQUE1QjtBQUNBLFFBQU0ySSxTQUFTLEdBQUdoQixpRkFBa0IsRUFBcEM7QUFDQSxRQUFNLENBQUNpQixXQUFELElBQWdCaEIsNkVBQWMsRUFBcEM7QUFDQSxRQUFNLENBQUNpQixZQUFELEVBQWVDLGVBQWYsSUFBa0M1QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFFQSxRQUFNNkIsUUFBZ0IsV0FBSUgsV0FBVyxDQUFDLFVBQUQsQ0FBZix1Q0FBc0QsZ0JBQTVFO0FBQ0EsUUFBTSxDQUFDSSxlQUFELEVBQWtCQyxrQkFBbEIsSUFBd0MvQiwrQ0FBUSxDQUFVLEtBQVYsQ0FBdEQ7QUFFQSxRQUFNZ0MsYUFBNkIsR0FBR3pELDhDQUFPLENBQUMsTUFBTTtBQUNsRCxRQUFJK0MsUUFBSixFQUFjO0FBQ1osYUFBT1Isd0VBQXFCLENBQUNRLFFBQUQsQ0FBNUI7QUFDRDs7QUFDRCw2QkFDS1AsdUVBQW9CLEVBRHpCO0FBRUVrQixNQUFBQSxPQUFPLEVBQUVqQixvRUFBaUI7QUFGNUIsT0FHTVUsV0FBVyxDQUFDLFVBQUQsQ0FBWCxHQUEwQlEsSUFBSSxDQUFDQyxLQUFMLENBQVdULFdBQVcsQ0FBQyxVQUFELENBQXRCLENBQTFCLEdBQTBFLEVBSGhGO0FBSUVuRSxNQUFBQSxJQUFJLEVBQUVOLG1FQUFvQk87QUFKNUI7QUFNRCxHQVY0QyxFQVUxQyxDQUFDOEQsUUFBRCxFQUFXSSxXQUFYLENBVjBDLENBQTdDO0FBWUEsUUFBTVUsT0FBTyxHQUFHbkMsd0RBQU8sQ0FBaUI7QUFDdENvQyxJQUFBQSxJQUFJLEVBQUUsVUFEZ0M7QUFFdENMLElBQUFBLGFBRnNDO0FBR3RDTSxJQUFBQSxnQkFBZ0IsRUFBRTtBQUhvQixHQUFqQixDQUF2QjtBQU1BLFFBQU07QUFBRUMsSUFBQUEsWUFBRjtBQUFnQkMsSUFBQUE7QUFBaEIsTUFBMEJKLE9BQWhDO0FBRUEsUUFBTTdFLElBQUksR0FBR2lGLEtBQUssQ0FBQyxNQUFELENBQWxCO0FBQ0EsUUFBTUMsY0FBYyxHQUFHRCxLQUFLLENBQUMsZ0JBQUQsQ0FBNUI7QUFFQSxRQUFNRSxTQUFTLEdBQUdDLE9BQU8sQ0FBQ3BGLElBQUksS0FBS0EsSUFBSSxLQUFLTixtRUFBVCxJQUFpQyxDQUFDLENBQUN3RixjQUF4QyxDQUFMLENBQXpCO0FBRUEsUUFBTUcsV0FBVyxHQUFHNUksNkZBQTBCLENBQUVPLEtBQUQsSUFBV0EsS0FBSyxDQUFDRSxRQUFOLENBQWVvSSxRQUEzQixDQUExQixJQUFrRWhDLG1FQUF0RjtBQUNBN0gsRUFBQUEscUVBQVUsQ0FBRXVCLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxlQUFOLENBQXNCQyxRQUF0QixDQUErQm9JLFFBQTNDLENBQVY7O0FBRUEsUUFBTUMsTUFBTSxHQUFHLENBQUN6RCxNQUFELEVBQXlCMEQsVUFBekIsS0FBaUQ7QUFBQTs7QUFDOUQ3SixJQUFBQSxRQUFRLENBQ04wSCxrRUFBa0IsQ0FBQztBQUNqQnZCLE1BQUFBLE1BQU0sb0JBQ0QyQyxhQURDLEVBRUQzQyxNQUZDO0FBR0oyRCxRQUFBQSxXQUFXLGtEQUNUM0QsTUFBTSxDQUFDMkQsV0FERSx3REFDVCxvQkFDSXpHLEdBREosQ0FDUSxDQUFDO0FBQUUwRyxVQUFBQSxHQUFGO0FBQU9sRSxVQUFBQTtBQUFQLFNBQUQsTUFBcUI7QUFBRWtFLFVBQUFBLEdBQUcsRUFBRUEsR0FBRyxDQUFDQyxJQUFKLEVBQVA7QUFBbUJuRSxVQUFBQSxLQUFLLEVBQUVBLEtBQUssQ0FBQ21FLElBQU47QUFBMUIsU0FBckIsQ0FEUixFQUVHQyxNQUZILENBRVUsQ0FBQztBQUFFRixVQUFBQSxHQUFGO0FBQU9sRSxVQUFBQTtBQUFQLFNBQUQsS0FBb0IsQ0FBQyxDQUFDa0UsR0FBRixJQUFTLENBQUMsQ0FBQ2xFLEtBRnpDLENBRFMseUVBRzBDLEVBTmpEO0FBT0pxRSxRQUFBQSxNQUFNLDZDQUNKL0QsTUFBTSxDQUFDK0QsTUFESCxtREFDSixlQUNJN0csR0FESixDQUNRLENBQUM7QUFBRTBHLFVBQUFBLEdBQUY7QUFBT2xFLFVBQUFBO0FBQVAsU0FBRCxNQUFxQjtBQUFFa0UsVUFBQUEsR0FBRyxFQUFFQSxHQUFHLENBQUNDLElBQUosRUFBUDtBQUFtQm5FLFVBQUFBLEtBQUssRUFBRUEsS0FBSyxDQUFDbUUsSUFBTjtBQUExQixTQUFyQixDQURSLEVBRUdDLE1BRkgsQ0FFVSxDQUFDO0FBQUVGLFVBQUFBO0FBQUYsU0FBRCxLQUFhLENBQUMsQ0FBQ0EsR0FGekIsQ0FESSx5RUFHNkI7QUFWL0IsUUFEVztBQWFqQjNCLE1BQUFBLFFBYmlCO0FBY2pCK0IsTUFBQUEsY0FBYyxFQUFFTixVQUFVLEdBQUdsQixRQUFILEdBQWMzRztBQWR2QixLQUFELENBRFosQ0FBUjtBQWtCRCxHQW5CRDs7QUFxQkEsUUFBTW9JLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCLFFBQUloQyxRQUFKLEVBQWM7QUFDWixZQUFNaEgsVUFBVSxHQUFHRiwwREFBQSxDQUNqQmtILFFBQVEsQ0FBQzFGLGNBRFEsRUFFakIwRixRQUFRLENBQUNrQyxTQUZRLEVBR2pCbEMsUUFBUSxDQUFDbUMsS0FBVCxDQUFlOUQsSUFIRSxFQUlqQjJCLFFBQVEsQ0FBQ3JHLElBSlEsQ0FBbkI7QUFPQS9CLE1BQUFBLFFBQVEsQ0FBQ3lILGdFQUFnQixDQUFDckcsVUFBRCxFQUFhO0FBQUVvSixRQUFBQSxVQUFVLEVBQUU7QUFBZCxPQUFiLENBQWpCLENBQVI7QUFDRDtBQUNGLEdBWEQ7O0FBYUEsUUFBTUMsU0FBUyxHQUFHLE1BQU07QUFDdEJsQyxJQUFBQSxTQUFTLENBQUM1RyxLQUFWLENBQWdCLGtFQUFoQjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0UseURBQUMseURBQUQsb0JBQWtCdUgsT0FBbEI7QUFBQSw0QkFDRTtBQUFNLGNBQVEsRUFBR3dCLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxjQUFGLEVBQXZCO0FBQTJDLGVBQVMsRUFBRXRDLE1BQU0sQ0FBQ3VDLElBQTdEO0FBQUEsOEJBQ0UseURBQUMsb0RBQUQ7QUFBYSxhQUFLLEVBQUcsR0FBRXhDLFFBQVEsR0FBRyxNQUFILEdBQVksUUFBUyxhQUFwRDtBQUFrRSxnQkFBUSxFQUFDLE1BQTNFO0FBQUEsZ0NBQ0Usd0RBQUMsbURBQUQ7QUFBTSxZQUFFLEVBQUVPLFFBQVY7QUFBQSxpQ0FDRSx3REFBQywrQ0FBRDtBQUFRLG1CQUFPLEVBQUMsV0FBaEI7QUFBNEIsb0JBQVEsRUFBRWUsV0FBVyxDQUFDakksT0FBbEQ7QUFBMkQsZ0JBQUksRUFBQyxRQUFoRTtBQUF5RSxnQkFBSSxFQUFDLFNBQTlFO0FBQUE7QUFBQTtBQURGLFVBREYsRUFNRzJHLFFBQVEsZ0JBQ1Asd0RBQUMsK0NBQUQ7QUFBUSxpQkFBTyxFQUFDLGFBQWhCO0FBQThCLGNBQUksRUFBQyxRQUFuQztBQUE0QyxpQkFBTyxFQUFFLE1BQU1TLGtCQUFrQixDQUFDLElBQUQsQ0FBN0U7QUFBQTtBQUFBLFVBRE8sR0FJTCxJQVZOLEVBV0dnQywyQkFBMkIsQ0FBQ3ZCLEtBQUQsQ0FBM0IsaUJBQ0Msd0RBQUMsK0NBQUQ7QUFDRSxpQkFBTyxFQUFDLFdBRFY7QUFFRSxjQUFJLEVBQUMsUUFGUDtBQUdFLGlCQUFPLEVBQUUsTUFBTVosZUFBZSxDQUFDLElBQUQsQ0FIaEM7QUFJRSxrQkFBUSxFQUFFZ0IsV0FBVyxDQUFDakksT0FKeEI7QUFBQTtBQUFBLFVBWkosZUFxQkUseURBQUMsK0NBQUQ7QUFDRSxpQkFBTyxFQUFDLFNBRFY7QUFFRSxjQUFJLEVBQUMsUUFGUDtBQUdFLGlCQUFPLEVBQUU0SCxZQUFZLENBQUVsRCxNQUFELElBQVl5RCxNQUFNLENBQUN6RCxNQUFELEVBQVMsS0FBVCxDQUFuQixFQUFvQ3NFLFNBQXBDLENBSHZCO0FBSUUsa0JBQVEsRUFBRWYsV0FBVyxDQUFDakksT0FKeEI7QUFBQSxxQkFNR2lJLFdBQVcsQ0FBQ2pJLE9BQVosaUJBQXVCLHdEQUFDLGdEQUFEO0FBQVMscUJBQVMsRUFBRTRHLE1BQU0sQ0FBQ3lDLGFBQTNCO0FBQTBDLGtCQUFNLEVBQUU7QUFBbEQsWUFOMUI7QUFBQSxVQXJCRixlQThCRSx5REFBQywrQ0FBRDtBQUNFLGlCQUFPLEVBQUMsU0FEVjtBQUVFLGNBQUksRUFBQyxRQUZQO0FBR0UsaUJBQU8sRUFBRXpCLFlBQVksQ0FBRWxELE1BQUQsSUFBWXlELE1BQU0sQ0FBQ3pELE1BQUQsRUFBUyxJQUFULENBQW5CLEVBQW1Dc0UsU0FBbkMsQ0FIdkI7QUFJRSxrQkFBUSxFQUFFZixXQUFXLENBQUNqSSxPQUp4QjtBQUFBLHFCQU1HaUksV0FBVyxDQUFDakksT0FBWixpQkFBdUIsd0RBQUMsZ0RBQUQ7QUFBUyxxQkFBUyxFQUFFNEcsTUFBTSxDQUFDeUMsYUFBM0I7QUFBMEMsa0JBQU0sRUFBRTtBQUFsRCxZQU4xQjtBQUFBLFVBOUJGO0FBQUEsUUFERixlQXlDRTtBQUFLLGlCQUFTLEVBQUV6QyxNQUFNLENBQUMwQyxZQUF2QjtBQUFBLCtCQUNFLHdEQUFDLHdEQUFEO0FBQWlCLHVCQUFhLEVBQUMsTUFBL0I7QUFBc0MsNkJBQW1CLEVBQUUsSUFBM0Q7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUUxQyxNQUFNLENBQUMyQyxZQUF2QjtBQUFBLG9DQUNFLHdEQUFDLDhHQUFEO0FBQTRCLGlDQUFtQixFQUFFLENBQUMsQ0FBQzVDO0FBQW5ELGNBREYsRUFFR29CLFNBQVMsaUJBQ1I7QUFBQSx5QkFDR25GLElBQUksS0FBS04sbUVBQVQsa0VBQWdDLHdEQUFDLGtGQUFELEtBQWhDLG1FQUFnRSx3REFBQyw4RUFBRCxLQUFoRSxDQURILCtDQUVFLHdEQUFDLHNEQUFELEtBRkY7QUFBQSxjQUhKO0FBQUE7QUFERjtBQURGLFFBekNGO0FBQUEsTUFERixFQXdERzZFLGVBQWUsZ0JBQ2Qsd0RBQUMscURBQUQ7QUFDRSxZQUFNLEVBQUUsSUFEVjtBQUVFLFdBQUssRUFBQyxhQUZSO0FBR0UsVUFBSSxFQUFDLDJGQUhQO0FBSUUsaUJBQVcsRUFBQyxhQUpkO0FBS0UsVUFBSSxFQUFDLHNCQUxQO0FBTUUsZUFBUyxFQUFFd0IsVUFOYjtBQU9FLGVBQVMsRUFBRSxNQUFNdkIsa0JBQWtCLENBQUMsS0FBRDtBQVByQyxNQURjLEdBVVosSUFsRU4sRUFtRUdKLFlBQVksZ0JBQUcsd0RBQUMsMERBQUQ7QUFBZSxhQUFPLEVBQUUsTUFBTUMsZUFBZSxDQUFDLEtBQUQ7QUFBN0MsTUFBSCxHQUE4RCxJQW5FN0U7QUFBQSxLQURGO0FBdUVELENBbkpNOztBQXFKUCxNQUFNbUMsMkJBQTJCLEdBQUl2QixLQUFELElBQXlDO0FBQzNFLFFBQU0sQ0FBQ3BFLFFBQUQsRUFBV3FFLGNBQVgsSUFBNkJELEtBQUssQ0FBQyxDQUFDLE1BQUQsRUFBUyxnQkFBVCxDQUFELENBQXhDO0FBRUEsU0FBTyxDQUFDcEUsUUFBUSxLQUFLbkIseUVBQWIsSUFBMkNtQixRQUFRLEtBQUtuQiwwRUFBekQsS0FBeUZ3RixjQUFjLEtBQUssRUFBbkg7QUFDRCxDQUpEOztBQU1BLE1BQU1qQixTQUFTLEdBQUl0RixLQUFELElBQTBCO0FBQzFDLFNBQU87QUFDTDhILElBQUFBLGFBQWEsRUFBRTNLLDZDQUFJO0FBQ3ZCLHNCQUFzQjZDLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDdkMsS0FIUztBQUlMMkgsSUFBQUEsSUFBSSxFQUFFekssNkNBQUk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVFM7QUFVTDZLLElBQUFBLFlBQVksRUFBRTdLLDZDQUFJO0FBQ3RCO0FBQ0EsaUJBQWlCNkMsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNsQyxLQWJTO0FBY0w4SCxJQUFBQSxZQUFZLEVBQUU1Syw2Q0FBSTtBQUN0QixvQkFBb0I2QyxLQUFLLENBQUNtSSxNQUFOLENBQWFDLFVBQWIsQ0FBd0JDLE9BQVE7QUFDcEQsMEJBQTBCckksS0FBSyxDQUFDbUksTUFBTixDQUFhRyxNQUFiLENBQW9CQyxJQUFLO0FBQ25ELHVCQUF1QnZJLEtBQUssQ0FBQ3dJLEtBQU4sQ0FBWUMsWUFBWixFQUEyQjtBQUNsRCxnQkFBZ0J6SSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQXVCO0FBQ3ZDO0FBQ0E7QUFDQSxLQXJCUztBQXNCTHlJLElBQUFBLE9BQU8sRUFBRXZMLDZDQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBMUJTLEdBQVA7QUE0QkQsQ0E3QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TEE7QUFJQTtBQUVBOztBQVlPLE1BQU0yTCxrQkFBNkIsR0FBRyxRQUErRDtBQUFBLE1BQTlEO0FBQUVqRyxJQUFBQSxLQUFGO0FBQVNrRyxJQUFBQSxZQUFUO0FBQXVCLGtCQUFjQztBQUFyQyxHQUE4RDtBQUFBLE1BQVhDLElBQVc7O0FBQzFHLFFBQU1DLGlCQUFpQixHQUFHN0csOENBQU8sQ0FDL0IsTUFDRWEsTUFBTSxDQUFDQyxNQUFQLENBQWN3Rix3REFBZCxFQUNHMUIsTUFESCxDQUNXRixHQUFELElBQVMsQ0FBQ2dDLFlBQVksQ0FBQ0ksUUFBYixDQUFzQnBDLEdBQXRCLENBRHBCLEVBQ2dEO0FBRGhELEdBRUcxRyxHQUZILENBRVEwRyxHQUFELEtBQVU7QUFBRWxFLElBQUFBLEtBQUssRUFBRWtFLEdBQVQ7QUFBY3ZELElBQUFBLEtBQUssRUFBRW9GLDhEQUFnQixDQUFDN0IsR0FBRDtBQUFyQyxHQUFWLENBRlAsQ0FGNkIsRUFLL0IsQ0FBQ2dDLFlBQUQsQ0FMK0IsQ0FBakM7QUFRQSxzQkFDRSx1REFBQyx5REFBRDtBQUNFLGtCQUFZQyxTQURkO0FBRUUsU0FBSyxFQUFFbkcsS0FGVDtBQUdFLFdBQU8sRUFBRXFHLGlCQUhYO0FBSUUsVUFBTSxFQUFFLENBQUMsQ0FBQ3JHLEtBQUYsSUFBVyxDQUFFSyxNQUFNLENBQUNDLE1BQVAsQ0FBY3dGLHdEQUFkLENBQUQsQ0FBd0NRLFFBQXhDLENBQWlEdEcsS0FBakQ7QUFKdEIsS0FLTW9HLElBTE4sRUFERjtBQVNELENBbEJNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCUDtBQUNBO0FBQ0E7QUFHQTtBQUlBOzs7OztBQUVBLE1BQU1hLGdCQUFvQixHQUFHLE1BQU07QUFDakMsUUFBTXpFLE1BQU0sR0FBR3dFLHNEQUFTLENBQUN2RSxTQUFELENBQXhCO0FBQ0EsUUFBTTtBQUNKeUUsSUFBQUEsT0FESTtBQUVKQyxJQUFBQSxRQUZJO0FBR0oxRCxJQUFBQSxLQUhJO0FBSUoyRCxJQUFBQSxTQUFTLEVBQUU7QUFBRUMsTUFBQUE7QUFBRjtBQUpQLE1BS0ZaLCtEQUFjLEVBTGxCO0FBTUEsUUFBTXhDLFdBQVcsR0FBR1IsS0FBSyxDQUFDLGFBQUQsQ0FBekI7QUFFQSxRQUFNeUMsWUFBWSxHQUFHTSxrREFBVyxDQUM3QmMsS0FBRCxJQUE2QnJELFdBQVcsQ0FBQ0csTUFBWixDQUFtQixDQUFDbUQsQ0FBRCxFQUFJQyxHQUFKLEtBQW9CQSxHQUFHLEtBQUtGLEtBQS9DLEVBQXNEOUosR0FBdEQsQ0FBMEQsQ0FBQztBQUFFMEcsSUFBQUE7QUFBRixHQUFELEtBQWFBLEdBQXZFLENBREMsRUFFOUIsQ0FBQ0QsV0FBRCxDQUY4QixDQUFoQztBQUtBLHNCQUNFO0FBQUEsZ0RBQ0UsdURBQUMsOENBQUQ7QUFBQTtBQUFBLE1BREYsZ0JBRUUsdURBQUMsbURBQUQ7QUFBWSxVQUFJLEVBQUUsYUFBbEI7QUFBaUMsYUFBTyxFQUFFaUQsT0FBMUM7QUFBQSxnQkFDRyxDQUFDO0FBQUVPLFFBQUFBLE1BQUY7QUFBVUMsUUFBQUEsTUFBVjtBQUFrQkMsUUFBQUE7QUFBbEIsT0FBRCxLQUFnQztBQUMvQiw0QkFDRTtBQUFLLG1CQUFTLEVBQUVuRixNQUFNLENBQUNvRixVQUF2QjtBQUFBLHFCQUNHSCxNQUFNLENBQUNqSyxHQUFQLENBQVcsQ0FBQ3FLLEtBQUQsRUFBUVAsS0FBUixLQUFrQjtBQUFBOztBQUM1QixrQkFBTVEsS0FBSyx5QkFBRzdELFdBQVcsQ0FBQ3FELEtBQUQsQ0FBZCxnRkFBRyxtQkFBb0JwRCxHQUF2QiwwREFBRyxzQkFBeUI2RCxpQkFBekIsR0FBNkNDLFFBQTdDLENBQXNELEtBQXRELENBQWQ7QUFDQSxrQkFBTUMsbUJBQW1CLEdBQUdILEtBQUssR0FBR2xCLDhDQUFILEdBQVdHLGlEQUE1QztBQUNBLGdDQUNFO0FBQW9CLHVCQUFTLEVBQUV2RSxNQUFNLENBQUNxRCxPQUF0QztBQUFBLHNDQUNFLHVEQUFDLDhDQUFEO0FBQ0UseUJBQVMsRUFBRXJELE1BQU0sQ0FBQ3FGLEtBRHBCO0FBRUUsdUJBQU8sRUFBRSxDQUFDLHlCQUFDUixNQUFNLENBQUNwRCxXQUFSLHlFQUFDLG9CQUFxQnFELEtBQXJCLENBQUQsNEVBQUMsc0JBQTZCcEQsR0FBOUIsbURBQUMsdUJBQWtDOUgsT0FBbkMsQ0FGWjtBQUdFLHFCQUFLLDBCQUFFaUwsTUFBTSxDQUFDcEQsV0FBVCxrRkFBRSxxQkFBcUJxRCxLQUFyQixDQUFGLG9GQUFFLHNCQUE2QnBELEdBQS9CLDJEQUFFLHVCQUFrQzlILE9BSDNDO0FBSUUsK0JBQWMsa0JBQWlCa0wsS0FBTSxFQUp2QztBQUFBLHVDQU1FLHVEQUFDLHFEQUFEO0FBQ0Usc0JBQUksRUFBRyxlQUFjQSxLQUFNLE9BRDdCO0FBRUUsd0JBQU0sRUFBRTtBQUFBLHdCQUFDLEVBQUQ7QUFBQSx3QkFBb0JPLEtBQXBCLHNDQUFHQSxLQUFIOztBQUFBLHdDQUNOLHVEQUFDLG1FQUFELG9CQUNNQSxLQUROO0FBRUUsb0NBQWEscUJBQW9CUCxLQUFLLEdBQUcsQ0FBRSxFQUY3QztBQUdFLGtDQUFZLEVBQUVwQixZQUFZLENBQUNvQixLQUFELENBSDVCO0FBSUUsMkJBQUssRUFBRTtBQUpULHVCQURNO0FBQUEsbUJBRlY7QUFVRSx5QkFBTyxFQUFFSixPQVZYO0FBV0UsdUJBQUssRUFBRTtBQUFFZ0Isb0JBQUFBLFFBQVEsRUFBRTtBQUFFbEksc0JBQUFBLEtBQUssRUFBRSxDQUFDLHlCQUFDaUUsV0FBVyxDQUFDcUQsS0FBRCxDQUFaLGdEQUFDLG9CQUFvQnRILEtBQXJCLENBQVY7QUFBc0M1RCxzQkFBQUEsT0FBTyxFQUFFO0FBQS9DO0FBQVo7QUFYVDtBQU5GLGdCQURGLGVBcUJFLHVEQUFDLDhDQUFEO0FBQ0UseUJBQVMsRUFBRW1LLGdEQUFFLENBQUMvRCxNQUFNLENBQUMyRixpQkFBUixFQUEyQjNGLE1BQU0sQ0FBQ3FGLEtBQWxDLENBRGY7QUFFRSx1QkFBTyxFQUFFLENBQUMsMEJBQUNSLE1BQU0sQ0FBQ3BELFdBQVIsMEVBQUMscUJBQXFCcUQsS0FBckIsQ0FBRCw0RUFBQyxzQkFBNkJ0SCxLQUE5QixtREFBQyx1QkFBb0M1RCxPQUFyQyxDQUZaO0FBR0UscUJBQUssMEJBQUVpTCxNQUFNLENBQUNwRCxXQUFULGtGQUFFLHFCQUFxQnFELEtBQXJCLENBQUYsb0ZBQUUsc0JBQTZCdEgsS0FBL0IsMkRBQUUsdUJBQW9DNUQsT0FIN0M7QUFBQSx1Q0FLRSx1REFBQyxtQkFBRDtBQUNFLGlDQUFjLG9CQUFtQmtMLEtBQU0sRUFEekM7QUFFRSwyQkFBUyxFQUFFZixnREFBRSxDQUFDL0QsTUFBTSxDQUFDNEYsb0JBQVIsRUFBOEI7QUFBRSxxQkFBQzVGLE1BQU0sQ0FBQzZGLFFBQVIsR0FBbUIsQ0FBQ1A7QUFBdEIsbUJBQTlCO0FBRmYsbUJBR01YLFFBQVEsQ0FBRSxlQUFjRyxLQUFNLFNBQXRCLENBSGQ7QUFJRSw2QkFBVyxFQUFFUSxLQUFLLEdBQUcsVUFBSCxHQUFpQixNQUpyQztBQUtFLDhCQUFZLEVBQUVELEtBQUssQ0FBQzdIO0FBTHRCO0FBTEYsZ0JBckJGLGVBa0NFLHVEQUFDLCtDQUFEO0FBQ0Usb0JBQUksRUFBQyxRQURQO0FBRUUseUJBQVMsRUFBRXdDLE1BQU0sQ0FBQzJGLGlCQUZwQjtBQUdFLDhCQUFXLG1CQUhiO0FBSUUsb0JBQUksRUFBQyxXQUpQO0FBS0UsdUJBQU8sRUFBQyxXQUxWO0FBTUUsdUJBQU8sRUFBRSxNQUFNUixNQUFNLENBQUNMLEtBQUQ7QUFOdkIsZ0JBbENGO0FBQUEsZUFBVU8sS0FBSyxDQUFDdEwsRUFBaEIsQ0FERjtBQTZDRCxXQWhEQSxDQURILGVBa0RFLHVEQUFDLCtDQUFEO0FBQ0UscUJBQVMsRUFBRWlHLE1BQU0sQ0FBQzhGLG9CQURwQjtBQUVFLGdCQUFJLEVBQUMsYUFGUDtBQUdFLGdCQUFJLEVBQUMsUUFIUDtBQUlFLG1CQUFPLEVBQUMsV0FKVjtBQUtFLG1CQUFPLEVBQUUsTUFBTTtBQUNiWixjQUFBQSxNQUFNLENBQUM7QUFBRXhELGdCQUFBQSxHQUFHLEVBQUUsRUFBUDtBQUFXbEUsZ0JBQUFBLEtBQUssRUFBRTtBQUFsQixlQUFELENBQU47QUFDRCxhQVBIO0FBQUE7QUFBQSxZQWxERjtBQUFBLFVBREY7QUFnRUQ7QUFsRUgsTUFGRjtBQUFBLElBREY7QUF5RUQsQ0F4RkQ7O0FBMEZBLE1BQU15QyxTQUFTLEdBQUl0RixLQUFELEtBQTBCO0FBQzFDaUwsRUFBQUEsb0JBQW9CLEVBQUU5Tiw2Q0FBSTtBQUM1QjtBQUNBLEdBSDRDO0FBSTFDK04sRUFBQUEsUUFBUSxFQUFFL04sNkNBQUk7QUFDaEI7QUFDQSxHQU40QztBQU8xQ2dPLEVBQUFBLG9CQUFvQixFQUFFaE8sNkNBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsR0FYNEM7QUFZMUNzTixFQUFBQSxVQUFVLEVBQUV0Tiw2Q0FBSTtBQUNsQjtBQUNBO0FBQ0EsR0FmNEM7QUFnQjFDdU4sRUFBQUEsS0FBSyxFQUFFdk4sNkNBQUk7QUFDYixxQkFBcUI2QyxLQUFLLENBQUNDLE9BQU4sQ0FBY21MLEVBQUc7QUFDdEMsR0FsQjRDO0FBbUIxQzFDLEVBQUFBLE9BQU8sRUFBRXZMLDZDQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsR0F2QjRDO0FBd0IxQzZOLEVBQUFBLGlCQUFpQixFQUFFN04sNkNBQUk7QUFDekIsbUJBQW1CNkMsS0FBSyxDQUFDQyxPQUFOLENBQWNtTCxFQUFHO0FBQ3BDO0FBMUI0QyxDQUExQixDQUFsQjs7QUE2QkEsaUVBQWV0QixnQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRU8sTUFBTS9FLHVCQUEyQixHQUFHLE1BQU07QUFBQTs7QUFDL0MsUUFBTU0sTUFBTSxHQUFHd0Usc0RBQVMsQ0FBQ3ZFLFNBQUQsQ0FBeEI7QUFDQSxRQUFNO0FBQ0owRSxJQUFBQSxRQURJO0FBRUpELElBQUFBLE9BRkk7QUFHSnpELElBQUFBLEtBSEk7QUFJSjJELElBQUFBLFNBQVMsRUFBRTtBQUFFQyxNQUFBQTtBQUFGO0FBSlAsTUFLRlosK0RBQWMsRUFMbEI7QUFPQSxRQUFNakksSUFBSSxHQUFHaUYsS0FBSyxDQUFDLE1BQUQsQ0FBbEIsQ0FUK0MsQ0FXL0M7O0FBQ0EsTUFBSWpGLElBQUksS0FBS04seUVBQWIsRUFBMEM7QUFDeEMsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsc0JBQ0Usd0RBQUMsaUVBQUQ7QUFBbUIsVUFBTSxFQUFFLENBQTNCO0FBQThCLFNBQUssRUFBQywyQkFBcEM7QUFBQSw0QkFDRSx1REFBQyw4Q0FBRDtBQUFPLFdBQUssRUFBQyxLQUFiO0FBQW1CLGlCQUFXLEVBQUMsb0VBQS9CO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFc0UsTUFBTSxDQUFDcUQsT0FBdkI7QUFBQSxnQ0FDRSx1REFBQyw4Q0FBRDtBQUFPLGlCQUFPLEVBQUUsQ0FBQyxxQkFBQ3dCLE1BQU0sQ0FBQ3VCLE9BQVIsNENBQUMsZ0JBQWdCeE0sT0FBakIsQ0FBakI7QUFBMkMsZUFBSyxzQkFBRWlMLE1BQU0sQ0FBQ3VCLE9BQVQscURBQUUsaUJBQWdCeE0sT0FBbEU7QUFBMkUsbUJBQVMsRUFBRW9HLE1BQU0sQ0FBQ3FHLFdBQTdGO0FBQUEsaUNBQ0UsdURBQUMsOENBQUQsb0JBQ00xQixRQUFRLENBQUMsU0FBRCxFQUFZO0FBQUUyQixZQUFBQSxPQUFPLEVBQUU7QUFBRTlJLGNBQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCNUQsY0FBQUEsT0FBTyxFQUFFO0FBQTNCO0FBQVgsV0FBWixDQURkO0FBRUUsaUJBQUssRUFBRTtBQUZUO0FBREYsVUFERixlQU9FLHVEQUFDLHFEQUFEO0FBQ0UsY0FBSSxFQUFDLGFBRFA7QUFFRSxnQkFBTSxFQUFFO0FBQUEsZ0JBQUM7QUFBRXlMLGNBQUFBLEtBQUssRUFBRTtBQUFFNUgsZ0JBQUFBO0FBQUY7QUFBVCxhQUFEO0FBQUEsZ0JBQThCNEgsS0FBOUIsc0NBQUdBLEtBQUg7O0FBQUEsZ0NBQ04sdURBQUMsK0NBQUQsb0JBQ01BLEtBRE47QUFFRSxxQkFBTyxFQUFFWSxvREFGWDtBQUdFLHNCQUFRLEVBQUd6SSxLQUFELElBQVdDLFFBQVEsQ0FBQ0QsS0FBRCxhQUFDQSxLQUFELHVCQUFDQSxLQUFLLENBQUVBLEtBQVIsQ0FIL0I7QUFJRSxtQkFBSyxFQUFFLEVBSlQ7QUFLRSx1QkFBUyxFQUFFd0MsTUFBTSxDQUFDdUc7QUFMcEIsZUFETTtBQUFBLFdBRlY7QUFXRSxpQkFBTyxFQUFFN0I7QUFYWCxVQVBGO0FBQUE7QUFERixNQURGLCtDQXdCRSx1REFBQyxxREFBRCxLQXhCRjtBQUFBLElBREY7QUE0QkQsQ0E1Q007O0FBOENQLE1BQU16RSxTQUFTLEdBQUl0RixLQUFELEtBQTBCO0FBQzFDMEwsRUFBQUEsV0FBVyxFQUFFdk8sNkNBQUk7QUFDbkI7QUFDQSxHQUg0QztBQUkxQ3VMLEVBQUFBLE9BQU8sRUFBRXZMLDZDQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQVQ0QztBQVUxQ3lPLEVBQUFBLFFBQVEsRUFBRXpPLDZDQUFJO0FBQ2hCLG1CQUFtQjZDLEtBQUssQ0FBQ0MsT0FBTixDQUFjbUwsRUFBRztBQUNwQztBQVo0QyxDQUExQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUdBO0FBRUE7O0FBU08sU0FBU1csc0JBQVQsT0FBeUU7QUFBQSxNQUF6QztBQUFFbEosSUFBQUE7QUFBRixHQUF5QztBQUFBLE1BQTdCRCxLQUE2Qjs7QUFDOUUsUUFBTW9KLHFCQUFxQixHQUFHRix3RkFBd0IsRUFBdEQ7QUFFQSxRQUFNRyxnQkFBZ0IsR0FBRzVDLGtEQUFXLENBQ2pDNkMsRUFBRCxJQUE2QztBQUMzQyxXQUFPLENBQUMsQ0FBQ0YscUJBQXFCLENBQUNHLElBQXRCLENBQTJCLENBQUM7QUFBRS9NLE1BQUFBO0FBQUYsS0FBRCxLQUFZQSxFQUFFLEtBQUs4TSxFQUFFLENBQUM5TSxFQUFqRCxDQUFUO0FBQ0QsR0FIaUMsRUFJbEMsQ0FBQzRNLHFCQUFELENBSmtDLENBQXBDO0FBT0Esc0JBQU8sdURBQUMsOERBQUQ7QUFBa0IsYUFBUyxNQUEzQjtBQUE0QixZQUFRLE1BQXBDO0FBQXFDLFVBQU0sRUFBRUMsZ0JBQTdDO0FBQStELFdBQU8sRUFBRXBKO0FBQXhFLEtBQW1GRCxLQUFuRixFQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkQ7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFJTyxNQUFNMEosY0FBa0IsR0FBRyxNQUFNO0FBQUE7O0FBQ3RDLFFBQU07QUFDSmhHLElBQUFBLEtBREk7QUFFSmlHLElBQUFBLFFBRkk7QUFHSnRDLElBQUFBLFNBQVMsRUFBRTtBQUFFQyxNQUFBQTtBQUFGO0FBSFAsTUFJRlosK0RBQWMsRUFKbEI7QUFNQSxRQUFNdkQsT0FBTyxHQUFHTyxLQUFLLENBQUMsU0FBRCxDQUFyQjtBQUNBLFFBQU1rRyxTQUFTLEdBQUdsRyxLQUFLLENBQUMsV0FBRCxDQUF2QjtBQUVBLFFBQU1tRyxPQUFPLEdBQUdwSyw4Q0FBTyxDQUNyQixNQUNFMEQsT0FBTyxDQUNKa0IsTUFESCxDQUNXeUYsQ0FBRCxJQUFPLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDQyxLQURyQixFQUVHdE0sR0FGSCxDQUVRcU0sQ0FBRCxLQUFRO0FBQ1g3SixJQUFBQSxLQUFLLEVBQUU2SixDQUFDLENBQUNDLEtBREU7QUFFWG5KLElBQUFBLEtBQUssRUFBRWtKLENBQUMsQ0FBQ0M7QUFGRSxHQUFSLENBRlAsQ0FGbUIsRUFRckIsQ0FBQzVHLE9BQUQsQ0FScUIsQ0FBdkI7QUFXQSxRQUFNNkcsV0FBVyxHQUFHdkssOENBQU8sQ0FBQyxNQUFNO0FBQ2hDLFdBQU8wRCxPQUFPLENBQUNrQixNQUFSLENBQWdCNEYsS0FBRCxJQUFXQSxLQUFLLENBQUNDLGFBQU4sS0FBd0JULGtHQUFsRCxDQUFQO0FBQ0QsR0FGMEIsRUFFeEIsQ0FBQ3RHLE9BQUQsQ0FGd0IsQ0FBM0IsQ0FyQnNDLENBeUJ0Qzs7QUFDQXJKLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1xUSxjQUFjLEdBQUdYLDRDQUFJLENBQUNRLFdBQUQsQ0FBM0I7O0FBQ0EsUUFBSUcsY0FBSixFQUFvQjtBQUNsQlIsTUFBQUEsUUFBUSxDQUFDLFdBQUQsRUFBY1EsY0FBYyxDQUFDSixLQUE3QixFQUFvQztBQUFFSyxRQUFBQSxjQUFjLEVBQUU7QUFBbEIsT0FBcEMsQ0FBUjtBQUNEO0FBQ0YsR0FMUSxFQUtOLENBQUNKLFdBQUQsRUFBY0wsUUFBZCxDQUxNLENBQVQsQ0ExQnNDLENBaUN0Qzs7QUFDQTdQLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1xUSxjQUFjLEdBQUdYLDRDQUFJLENBQUNRLFdBQUQsQ0FBM0I7QUFDQSxVQUFNSyxlQUFlLEdBQUdSLE9BQU8sQ0FBQ04sSUFBUixDQUFhLENBQUM7QUFBRXRKLE1BQUFBO0FBQUYsS0FBRCxLQUFlQSxLQUFLLEtBQUsySixTQUF0QyxDQUF4Qjs7QUFFQSxRQUFJQSxTQUFTLElBQUksQ0FBQ1MsZUFBbEIsRUFBbUM7QUFBQTs7QUFDakNWLE1BQUFBLFFBQVEsQ0FBQyxXQUFELDJCQUFjUSxjQUFkLGFBQWNBLGNBQWQsdUJBQWNBLGNBQWMsQ0FBRUosS0FBOUIseUVBQXVDLElBQXZDLENBQVI7QUFDRCxLQUZELE1BRU8sSUFBSSxDQUFDSCxTQUFELElBQWNPLGNBQWxCLEVBQWtDO0FBQ3ZDUixNQUFBQSxRQUFRLENBQUMsV0FBRCxFQUFjUSxjQUFjLENBQUNKLEtBQTdCLEVBQW9DO0FBQUVLLFFBQUFBLGNBQWMsRUFBRTtBQUFsQixPQUFwQyxDQUFSO0FBQ0Q7QUFDRixHQVRRLEVBU04sQ0FBQ1IsU0FBRCxFQUFZSSxXQUFaLEVBQXlCSCxPQUF6QixFQUFrQ0YsUUFBbEMsQ0FUTSxDQUFUO0FBV0Esc0JBQ0UsdURBQUMsOENBQUQ7QUFDRSxTQUFLLEVBQUMsV0FEUjtBQUVFLGVBQVcsRUFBQyxpREFGZDtBQUdFLFNBQUssdUJBQUVyQyxNQUFNLENBQUNzQyxTQUFULHNEQUFFLGtCQUFrQnZOLE9BSDNCO0FBSUUsV0FBTyxFQUFFLENBQUMsd0JBQUNpTCxNQUFNLENBQUNzQyxTQUFSLCtDQUFDLG1CQUFrQnZOLE9BQW5CLENBSlo7QUFBQSwyQkFNRSx1REFBQyxxREFBRDtBQUNFLFVBQUksRUFBQyxXQURQO0FBRUUsWUFBTSxFQUFFO0FBQUEsWUFBQztBQUFFeUwsVUFBQUEsS0FBSyxFQUFFO0FBQUU1SCxZQUFBQTtBQUFGO0FBQVQsU0FBRDtBQUFBLFlBQThCNEgsS0FBOUIsc0NBQUdBLEtBQUg7O0FBQUEsNEJBQ04sdURBQUMsK0NBQUQ7QUFDRSx3QkFBVztBQURiLFdBRU1BLEtBRk47QUFHRSxlQUFLLEVBQUUsRUFIVDtBQUlFLGlCQUFPLEVBQUUrQixPQUpYO0FBS0Usa0JBQVEsRUFBR1MsQ0FBRDtBQUFBOztBQUFBLG1CQUF3QnBLLFFBQVEsYUFBQ29LLENBQUQsYUFBQ0EsQ0FBRCx1QkFBQ0EsQ0FBQyxDQUFFckssS0FBSiwrQ0FBYSxJQUFiLENBQWhDO0FBQUEsV0FMWjtBQU1FLDBCQUFnQixFQUFDO0FBTm5CLFdBRE07QUFBQSxPQUZWO0FBWUUsV0FBSyxFQUFFO0FBQ0xrSSxRQUFBQSxRQUFRLEVBQUU7QUFDUmxJLFVBQUFBLEtBQUssRUFBRSxJQURDO0FBRVI1RCxVQUFBQSxPQUFPLEVBQUU7QUFGRDtBQURMO0FBWlQ7QUFORixJQURGO0FBNEJELENBekVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWUDtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU15TyxrQ0FBa0MsR0FBRztBQUN6Q3pPLEVBQUFBLE9BQU8sRUFDTCxpSUFGdUM7QUFHekM0RCxFQUFBQSxLQUFLLEVBQUU7QUFIa0MsQ0FBM0M7QUFNTyxNQUFNbUMsV0FBZSxHQUFHLE1BQU07QUFBQTs7QUFDbkMsUUFBTTtBQUNKZ0YsSUFBQUEsUUFESTtBQUVKMUQsSUFBQUEsS0FGSTtBQUdKMkQsSUFBQUEsU0FBUyxFQUFFO0FBQUVDLE1BQUFBO0FBQUY7QUFIUCxNQUlGWiwrREFBYyxFQUpsQjtBQU1BLFFBQU1qRSxNQUFNLEdBQUc1SCx1REFBVSxDQUFDNkgsU0FBRCxDQUF6QjtBQUVBLFFBQU1xSSxZQUFZLEdBQUdySCxLQUFLLENBQUMsTUFBRCxDQUExQjtBQUNBLFFBQU1DLGNBQWMsR0FBR0QsS0FBSyxDQUFDLGdCQUFELENBQTVCO0FBQ0EsUUFBTWpGLElBQUksR0FBR2lGLEtBQUssQ0FBQyxNQUFELENBQWxCO0FBRUEsc0JBQ0UseURBQUMsaUVBQUQ7QUFDRSxVQUFNLEVBQUVqRixJQUFJLEtBQUtOLHlFQUFULEdBQXVDLENBQXZDLEdBQTJDLENBRHJEO0FBRUUsU0FBSyxFQUNITSxJQUFJLEtBQUtOLHlFQUFULEdBQXVDLHFDQUF2QyxHQUErRSw0QkFIbkY7QUFLRSxlQUFXLEVBQ1RNLElBQUksS0FBS04seUVBQVQsR0FDSSxpREFESixHQUVJLHNFQVJSO0FBQUEsNEJBV0Usd0RBQUMsOENBQUQ7QUFDRSxlQUFTLEVBQUVzRSxNQUFNLENBQUN1SSxTQURwQjtBQUVFLFdBQUssRUFBQyxXQUZSO0FBR0UsV0FBSyxFQUFFMUQsTUFBRixhQUFFQSxNQUFGLHVDQUFFQSxNQUFNLENBQUV6RyxJQUFWLGlEQUFFLGFBQWN4RSxPQUh2QjtBQUlFLGFBQU8sRUFBRSxDQUFDLG1CQUFDaUwsTUFBTSxDQUFDekcsSUFBUiwwQ0FBQyxjQUFheEUsT0FBZCxDQUpaO0FBQUEsNkJBTUUsd0RBQUMsOENBQUQ7QUFDRSxVQUFFLEVBQUM7QUFETCxTQUVNK0ssUUFBUSxDQUFDLE1BQUQsRUFBUztBQUNuQmUsUUFBQUEsUUFBUSxFQUFFO0FBQUVsSSxVQUFBQSxLQUFLLEVBQUUsSUFBVDtBQUFlNUQsVUFBQUEsT0FBTyxFQUFFO0FBQXhCLFNBRFM7QUFFbkIwTSxRQUFBQSxPQUFPLEVBQUVnQyxZQUFZLEtBQUs1TSx5RUFBakIsR0FBK0MyTSxrQ0FBL0MsR0FBb0YxTyxTQUYxRTtBQUduQjZPLFFBQUFBLFFBQVEsRUFBRTtBQUNSQyxVQUFBQSxhQUFhLEVBQUdqTCxLQUFELElBQW1CO0FBQ2hDO0FBQ0EsZ0JBQUk4SyxZQUFZLEtBQUs1TSxrRUFBckIsRUFBMkM7QUFDekMscUJBQU8wTSw2REFBcUIsQ0FBQzVLLEtBQUQsQ0FBNUI7QUFDRDs7QUFFRCxtQkFBTyxJQUFQO0FBQ0Q7QUFSTztBQUhTLE9BQVQsQ0FGZDtBQU5GLE1BWEYsRUFvQ0csQ0FBQzhLLFlBQVksS0FBSzVNLHlFQUFqQixJQUFnRDRNLFlBQVksS0FBSzVNLHdFQUFsRSxLQUNDd0YsY0FERCxpQkFDbUIsd0RBQUMsNkVBQUQ7QUFBeUIscUJBQWUsRUFBRUE7QUFBMUMsTUFyQ3RCLEVBdUNHb0gsWUFBWSxLQUFLNU0sa0VBQWpCLGlCQUNDO0FBQUssZUFBUyxFQUFFc0UsTUFBTSxDQUFDcUQsT0FBdkI7QUFBQSw4QkFDRSx3REFBQyw4Q0FBRDtBQUNFLGFBQUssbUNBQ0gsd0RBQUMsOENBQUQ7QUFBTyxpQkFBTyxFQUFDLFFBQWY7QUFBd0IscUJBQVcsRUFBRSxxQ0FBckM7QUFBQSxpQ0FDRSx5REFBQyx3REFBRDtBQUFPLGVBQUcsRUFBRSxHQUFaO0FBQUEsOENBRUUsd0RBQUMsZ0RBQUQ7QUFDRSx1QkFBUyxFQUFDLEtBRFo7QUFFRSxxQkFBTyxlQUNMO0FBQUE7QUFBQSxnQkFISjtBQUFBLHFDQVNFLHdEQUFDLDZDQUFEO0FBQU0sb0JBQUksRUFBQyxhQUFYO0FBQXlCLG9CQUFJLEVBQUM7QUFBOUI7QUFURixjQUZGO0FBQUE7QUFERixVQURHLENBRFA7QUFtQkUsaUJBQVMsRUFBRXJELE1BQU0sQ0FBQ3VJLFNBbkJwQjtBQW9CRSxhQUFLLG9CQUFFMUQsTUFBTSxDQUFDNkQsTUFBVCxtREFBRSxlQUFlOU8sT0FwQnhCO0FBcUJFLGVBQU8sRUFBRSxDQUFDLHFCQUFDaUwsTUFBTSxDQUFDNkQsTUFBUiw0Q0FBQyxnQkFBZTlPLE9BQWhCLENBckJaO0FBc0JFLHVCQUFZLGVBdEJkO0FBQUEsK0JBd0JFLHdEQUFDLHFEQUFEO0FBQ0UsZ0JBQU0sRUFBRTtBQUFBLGdCQUFDLEVBQUQ7QUFBQSxnQkFBb0J5TCxLQUFwQixzQ0FBR0EsS0FBSDs7QUFBQSxnQ0FDTix3REFBQyxnRUFBRDtBQUFrQixxQkFBTyxFQUFDO0FBQTFCLGVBQXVDQSxLQUF2QztBQUE4Qyw2QkFBZSxFQUFFLElBQS9EO0FBQXFFLHlCQUFXLEVBQUU7QUFBbEYsZUFETTtBQUFBLFdBRFY7QUFJRSxjQUFJLEVBQUMsUUFKUDtBQUtFLGVBQUssRUFBRTtBQUNMSyxZQUFBQSxRQUFRLEVBQUU7QUFBRWxJLGNBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWU1RCxjQUFBQSxPQUFPLEVBQUU7QUFBeEIsYUFETDtBQUVMNE8sWUFBQUEsUUFBUSxFQUFFO0FBQ1JDLGNBQUFBLGFBQWEsRUFBR0MsTUFBRCxJQUFvQk4sNkRBQXFCLENBQUNNLE1BQU0sQ0FBQ25PLEtBQVI7QUFEaEQ7QUFGTDtBQUxUO0FBeEJGLFFBREYsZUFzQ0Usd0RBQUMsOENBQUQ7QUFDRSxhQUFLLEVBQUMsT0FEUjtBQUVFLHVCQUFZLGNBRmQ7QUFHRSxtQkFBVyxFQUFDLHlFQUhkO0FBSUUsaUJBQVMsRUFBRXlGLE1BQU0sQ0FBQ3VJLFNBSnBCO0FBS0UsYUFBSyxtQkFBRTFELE1BQU0sQ0FBQzNDLEtBQVQsa0RBQUUsY0FBY3RJLE9BTHZCO0FBTUUsZUFBTyxFQUFFLENBQUMsb0JBQUNpTCxNQUFNLENBQUMzQyxLQUFSLDJDQUFDLGVBQWN0SSxPQUFmLENBTlo7QUFBQSwrQkFRRSx3REFBQyw4Q0FBRDtBQUNFLFlBQUUsRUFBQztBQURMLFdBRU0rSyxRQUFRLENBQUMsT0FBRCxFQUFVO0FBQ3BCZSxVQUFBQSxRQUFRLEVBQUU7QUFBRWxJLFlBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWU1RCxZQUFBQSxPQUFPLEVBQUU7QUFBeEI7QUFEVSxTQUFWLENBRmQ7QUFSRixRQXRDRjtBQUFBLE1BeENKLEVBK0ZHb0MsSUFBSSxLQUFLTix5RUFBVCw0REFBd0Msd0RBQUMseURBQUQsS0FBeEMsRUEvRkgsK0NBZ0dFLHdEQUFDLG9EQUFELEtBaEdGO0FBQUEsSUFERjtBQW9HRCxDQWpITTs7QUFtSFAsTUFBTXVFLFNBQVMsR0FBSXRGLEtBQUQsS0FBMkI7QUFDM0M0TixFQUFBQSxTQUFTLEVBQUV6USw2Q0FBSTtBQUNqQjtBQUNBO0FBQ0EscUJBQXFCNkMsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUN0QztBQUNBLEdBTjZDO0FBTzNDeUksRUFBQUEsT0FBTyxFQUFFdkwsNkNBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWjZDLENBQTNCLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFVTyxNQUFNZ1IsZ0JBQTJDLEdBQUcsQ0FBQztBQUFFdEwsRUFBQUEsS0FBRjtBQUFTQyxFQUFBQSxRQUFUO0FBQW1CeUQsRUFBQUE7QUFBbkIsQ0FBRCxLQUF5QztBQUFBOztBQUNsRyxRQUFNO0FBQUU2SCxJQUFBQSxVQUFGO0FBQWNDLElBQUFBO0FBQWQsTUFBNkJDLGVBQWUsQ0FBQy9ILGNBQUQsQ0FBbEQ7QUFDQSxRQUFNLENBQUNzRyxLQUFELEVBQVEwQixRQUFSLElBQW9CekssK0NBQVEsQ0FBQ3VLLFVBQVUsQ0FBQztBQUFFMUIsSUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBYzZCLElBQUFBLElBQUksRUFBRTtBQUFwQixHQUFELEVBQThCM0wsS0FBOUIsQ0FBWCxDQUFsQztBQUNBLFFBQU07QUFDSmxFLElBQUFBLEtBREk7QUFFSkYsSUFBQUEsT0FGSTtBQUdKb0UsSUFBQUEsS0FBSyxFQUFFNEw7QUFISCxNQUlGcFIscURBQVEsQ0FBQyxNQUFNO0FBQ2pCLFdBQU82USxrRUFBZ0IsR0FBR1EsR0FBbkIsQ0FBdUJuSSxjQUF2QixDQUFQO0FBQ0QsR0FGVyxFQUVULENBQUNBLGNBQUQsQ0FGUyxDQUpaO0FBUUEsUUFBTW9JLGFBQWEsR0FBR3RGLGtEQUFXLENBQzlCd0QsS0FBRCxJQUFzQjtBQUNwQjBCLElBQUFBLFFBQVEsQ0FBQzFCLEtBQUQsQ0FBUjtBQUNBL0osSUFBQUEsUUFBUSxDQUFDc0wsVUFBVSxDQUFDdkIsS0FBRCxDQUFYLENBQVI7QUFDRCxHQUo4QixFQUsvQixDQUFDL0osUUFBRCxFQUFXc0wsVUFBWCxDQUwrQixDQUFqQzs7QUFRQSxNQUFJM1AsT0FBTyxJQUFJLENBQUFnUSxVQUFVLFNBQVYsSUFBQUEsVUFBVSxXQUFWLFlBQUFBLFVBQVUsQ0FBRWhMLElBQVosTUFBcUI4QyxjQUFwQyxFQUFvRDtBQUNsRCxXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFJNUgsS0FBSyxJQUFJLENBQUM4UCxVQUFWLElBQXdCLEVBQUNBLFVBQUQsYUFBQ0EsVUFBRCx3Q0FBQ0EsVUFBVSxDQUFFRyxVQUFiLGtEQUFDLHNCQUF3QkMsV0FBekIsQ0FBNUIsRUFBa0U7QUFDaEUsVUFBTUMsWUFBWSxHQUFHLENBQUFuUSxLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLFlBQUFBLEtBQUssQ0FBRU0sT0FBUCxLQUFrQiwrREFBdkM7QUFDQSx3Q0FBTztBQUFBLHlEQUEwQzZQLFlBQTFDO0FBQUEsTUFBUDtBQUNEOztBQUVELFFBQU1ELFdBQVcsR0FBR0osVUFBSCxhQUFHQSxVQUFILGlEQUFHQSxVQUFVLENBQUVHLFVBQWYsMkRBQUcsdUJBQXdCQyxXQUE1QztBQUVBLHNCQUNFLHVEQUFDLFdBQUQ7QUFDRSxTQUFLLEVBQUVoQyxLQURUO0FBRUUsV0FBTyxFQUFFLENBQUNBLEtBQUQsQ0FGWDtBQUdFLE9BQUcsRUFBRW9CLGdFQUhQO0FBSUUsWUFBUSxFQUFFVSxhQUpaO0FBS0UsY0FBVSxFQUFFWCx3Q0FMZDtBQU1FLGNBQVUsRUFBRVM7QUFOZCxJQURGO0FBVUQsQ0F4Q007O0FBK0NQLFNBQVNILGVBQVQsQ0FBeUIvSCxjQUF6QixFQUErRDtBQUM3RCxTQUFPbEUsOENBQU8sQ0FBQyxNQUFNO0FBQ25CLFVBQU0yTSxRQUFRLEdBQUdkLGtFQUFnQixHQUFHZSxtQkFBbkIsQ0FBdUMxSSxjQUF2QyxDQUFqQjs7QUFFQSxZQUFReUksUUFBUixhQUFRQSxRQUFSLHVCQUFRQSxRQUFRLENBQUUzTixJQUFsQjtBQUNFLFdBQUssTUFBTDtBQUNBLFdBQUssWUFBTDtBQUNFLGVBQU87QUFDTCtNLFVBQUFBLFVBQVUsRUFBR3ZCLEtBQUQsSUFBdUJBLEtBQUQsQ0FBaUNxQyxJQUQ5RDtBQUVMYixVQUFBQSxVQUFVLEVBQUUsQ0FBQ2pKLFFBQUQsRUFBc0J2QyxLQUF0Qix1QkFBMER1QyxRQUExRDtBQUFvRThKLFlBQUFBLElBQUksRUFBRXJNO0FBQTFFO0FBRlAsU0FBUDs7QUFJRjtBQUNFLGNBQU0sSUFBSXpCLEtBQUosQ0FBVyxHQUFFbUYsY0FBZSwyQ0FBNUIsQ0FBTjtBQVJKO0FBVUQsR0FiYSxFQWFYLENBQUNBLGNBQUQsQ0FiVyxDQUFkO0FBY0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUQ7QUFHQTtBQUVBOztBQU9BLE1BQU1rRyxPQUEwQixHQUFHLENBQ2pDO0FBQUU1SixFQUFBQSxLQUFLLEVBQUVzTSw4RkFBVDtBQUE2QzNMLEVBQUFBLEtBQUssRUFBRTtBQUFwRCxDQURpQyxFQUVqQztBQUFFWCxFQUFBQSxLQUFLLEVBQUVzTSw0RkFBVDtBQUEyQzNMLEVBQUFBLEtBQUssRUFBRTtBQUFsRCxDQUZpQyxFQUdqQztBQUFFWCxFQUFBQSxLQUFLLEVBQUVzTSx3RkFBVDtBQUF1QzNMLEVBQUFBLEtBQUssRUFBRTtBQUE5QyxDQUhpQyxFQUlqQztBQUFFWCxFQUFBQSxLQUFLLEVBQUVzTSwyRkFBVDtBQUEwQzNMLEVBQUFBLEtBQUssRUFBRTtBQUFqRCxDQUppQyxDQUFuQztBQU9PLE1BQU0rTCx1QkFBa0MsR0FBRyxRQUErQztBQUFBLE1BQTlDO0FBQUVDLElBQUFBLGFBQUY7QUFBaUJDLElBQUFBO0FBQWpCLEdBQThDO0FBQUEsTUFBWjdNLEtBQVk7O0FBQy9GLFFBQU04TSxJQUFJLEdBQUdyTiw4Q0FBTyxDQUFDLE1BQU07QUFDekIsUUFBSSxDQUFDbU4sYUFBTCxFQUFvQjtBQUNsQixhQUFPL0MsT0FBTyxDQUFDeEYsTUFBUixDQUFnQjBJLEdBQUQsSUFBU0EsR0FBRyxDQUFDOU0sS0FBSixLQUFjc00sNEZBQXRDLENBQVA7QUFDRDs7QUFDRCxRQUFJLENBQUNNLFlBQUwsRUFBbUI7QUFDakIsYUFBT2hELE9BQU8sQ0FBQ3hGLE1BQVIsQ0FBZ0IwSSxHQUFELElBQVNBLEdBQUcsQ0FBQzlNLEtBQUosS0FBY3NNLDJGQUF0QyxDQUFQO0FBQ0Q7O0FBQ0QsV0FBTzFDLE9BQVA7QUFDRCxHQVJtQixFQVFqQixDQUFDK0MsYUFBRCxFQUFnQkMsWUFBaEIsQ0FSaUIsQ0FBcEI7QUFTQSxzQkFBTyx1REFBQywrQ0FBRDtBQUFRLFdBQU8sRUFBRUM7QUFBakIsS0FBMkI5TSxLQUEzQixFQUFQO0FBQ0QsQ0FYTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlA7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFJQTtBQUNPLE1BQU1tTiwyQkFBK0IsR0FBRyxNQUFNO0FBQ25ELFFBQU07QUFBRXpKLElBQUFBO0FBQUYsTUFBWWdELCtEQUFjLEVBQWhDO0FBQ0EsUUFBTTBHLFdBQVcsR0FBRzFKLEtBQUssQ0FBQyxhQUFELENBQXpCO0FBQ0EsUUFBTTJKLGFBQWEsR0FBRzNKLEtBQUssQ0FBQyxlQUFELENBQTNCOztBQUNBLE1BQUkwSixXQUFXLEtBQUssR0FBcEIsRUFBeUI7QUFDdkIsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsUUFBTUUsV0FBVyxHQUFHSiw0REFBYSxDQUFDRSxXQUFELENBQWpDO0FBQ0EsUUFBTUcsYUFBYSxHQUFHTCw0REFBYSxDQUFDRyxhQUFELENBQW5DOztBQUNBLE1BQUlMLCtDQUFPLENBQUNNLFdBQUQsQ0FBUCxJQUF3Qk4sK0NBQU8sQ0FBQ08sYUFBRCxDQUFuQyxFQUFvRDtBQUNsRCxXQUFPLElBQVA7QUFDRDs7QUFDRCxRQUFNQyxTQUFTLEdBQUdQLHFFQUFzQixDQUFDSyxXQUFELENBQXhDO0FBQ0EsUUFBTUcsV0FBVyxHQUFHUixxRUFBc0IsQ0FBQ00sYUFBRCxDQUExQzs7QUFDQSxNQUFJQyxTQUFTLElBQUlDLFdBQWIsSUFBNEJELFNBQVMsSUFBSUMsV0FBN0MsRUFBMEQ7QUFDeEQsNENBQ0UsdURBQUMsOENBQUQ7QUFBTyxjQUFRLEVBQUMsU0FBaEI7QUFBMEIsV0FBSyxFQUFDLEVBQWhDO0FBQUE7QUFBQSxNQURGO0FBTUQ7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QsQ0F2Qk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxNQUFNSyxxQkFBcUIsR0FBRyxFQUE5QixFQUFrQzs7QUFFbEMsTUFBTUMsb0JBQXFDLEdBQUc7QUFDNUM1RixFQUFBQSxRQUFRLEVBQUU7QUFDUmxJLElBQUFBLEtBQUssRUFBRSxJQURDO0FBRVI1RCxJQUFBQSxPQUFPLEVBQUU7QUFGRCxHQURrQztBQUs1QzBNLEVBQUFBLE9BQU8sRUFBRTZFLGtFQUF5QkE7QUFMVSxDQUE5QztBQVFBLE1BQU1JLDhCQUErQyxHQUFHO0FBQ3REN0YsRUFBQUEsUUFBUSxFQUFFO0FBQ1JsSSxJQUFBQSxLQUFLLEVBQUUsSUFEQztBQUVSNUQsSUFBQUEsT0FBTyxFQUFFO0FBRkQsR0FENEM7QUFLdEQwTSxFQUFBQSxPQUFPLEVBQUU0RSwwRUFMNkM7QUFNdEQxQyxFQUFBQSxRQUFRLEVBQUdoTCxLQUFELElBQW1CO0FBQzNCLFVBQU1nTyxRQUFRLEdBQUdmLDREQUFhLENBQUNqTixLQUFELENBQTlCOztBQUNBLFFBQUlLLE1BQU0sQ0FBQzROLElBQVAsQ0FBWUQsUUFBWixFQUFzQkUsTUFBMUIsRUFBa0M7QUFDaEMsWUFBTUMsSUFBSSxHQUFHbkIscUVBQXNCLENBQUNnQixRQUFELENBQW5DOztBQUNBLFVBQUlHLElBQUksR0FBR04scUJBQXFCLEdBQUcsSUFBbkMsRUFBeUM7QUFDdkMsZUFBUSx1QkFBc0JBLHFCQUFzQixXQUFwRDtBQUNEOztBQUNELFVBQUlNLElBQUksSUFBSU4scUJBQXFCLEdBQUcsSUFBNUIsQ0FBSixLQUEwQyxDQUE5QyxFQUFpRDtBQUMvQyxlQUFRLHlCQUF3QkEscUJBQXNCLFdBQXREO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPLElBQVA7QUFDRDtBQWxCcUQsQ0FBeEQ7QUFxQk8sTUFBTXpMLHlCQUE2QixHQUFHLE1BQU07QUFBQTs7QUFDakQsUUFBTUksTUFBTSxHQUFHNUgsdURBQVUsQ0FBQzZILFNBQUQsQ0FBekI7QUFDQSxRQUFNLENBQUMyTCxpQkFBRCxFQUFvQkMsb0JBQXBCLElBQTRDcE4sK0NBQVEsQ0FBQyxLQUFELENBQTFEO0FBQ0EsUUFBTTtBQUNKa0csSUFBQUEsUUFESTtBQUVKQyxJQUFBQSxTQUFTLEVBQUU7QUFBRUMsTUFBQUE7QUFBRjtBQUZQLE1BR0ZaLCtEQUFjLEVBSGxCO0FBS0EsUUFBTTZILGVBQWUsR0FBRyxrQkFBeEI7QUFDQSxRQUFNQyxhQUFhLEdBQUcsZ0JBQXRCO0FBRUE7QUFBQTtBQUNFO0FBQ0EsNkRBQUMsa0VBQUQ7QUFBbUIsWUFBTSxFQUFFLENBQTNCO0FBQThCLFdBQUssRUFBQywyQkFBcEM7QUFBQSw4QkFDRSx3REFBQyw4Q0FBRDtBQUNFLGFBQUssRUFBQyxVQURSO0FBRUUsbUJBQVcsRUFBQyxvSEFGZDtBQUFBLCtCQUlFO0FBQUssbUJBQVMsRUFBRS9MLE1BQU0sQ0FBQ3FELE9BQXZCO0FBQUEsa0NBQ0Usd0RBQUMsb0RBQUQ7QUFDRSxtQkFBTyxFQUFFeUksZUFEWDtBQUVFLGlCQUFLLEVBQUUsRUFGVDtBQUdFLG1CQUFPLEVBQUMsMERBSFY7QUFBQTtBQUFBLFlBREYsZUFRRSx3REFBQyw4Q0FBRDtBQUFPLGNBQUUsRUFBRUEsZUFBWDtBQUE0QixpQkFBSyxFQUFFO0FBQW5DLGFBQTBDbkgsUUFBUSxDQUFDLGVBQUQsRUFBa0I0Ryw4QkFBbEIsQ0FBbEQsRUFSRixlQVNFLHdEQUFDLG9EQUFEO0FBQ0UsbUJBQU8sRUFBRVEsYUFEWDtBQUVFLGlCQUFLLEVBQUUsQ0FGVDtBQUdFLG1CQUFPLEVBQUMsa0pBSFY7QUFBQTtBQUFBLFlBVEYsZUFnQkUsd0RBQUMsOENBQUQ7QUFDRSxxQkFBUyxFQUFFL0wsTUFBTSxDQUFDcUcsV0FEcEI7QUFFRSxpQkFBSyx5QkFBRXhCLE1BQU0sQ0FBQzhGLFdBQVQsd0RBQUUsb0JBQW9CL1EsT0FGN0I7QUFHRSxtQkFBTyxFQUFFLENBQUMsMEJBQUNpTCxNQUFNLENBQUM4RixXQUFSLGlEQUFDLHFCQUFvQi9RLE9BQXJCLENBSFo7QUFJRSwrQ0FBbUMsRUFBRSxJQUp2QztBQUFBLG1DQU1FLHdEQUFDLDhDQUFEO0FBQU8sZ0JBQUUsRUFBRW1TLGFBQVg7QUFBMEIsbUJBQUssRUFBRTtBQUFqQyxlQUF3Q3BILFFBQVEsQ0FBQyxhQUFELEVBQWdCMkcsb0JBQWhCLENBQWhEO0FBTkYsWUFoQkY7QUFBQTtBQUpGLFFBREYsaUVBK0JFLHdEQUFDLHFGQUFELEtBL0JGLGdCQWdDRSx3REFBQywyREFBRDtBQUNFLG1CQUFXLEVBQUUsQ0FBQ00saUJBRGhCO0FBRUUsZ0JBQVEsRUFBR0ksU0FBRCxJQUFlSCxvQkFBb0IsQ0FBQyxDQUFDRyxTQUFGLENBRi9DO0FBR0UsWUFBSSxFQUFDLHNDQUhQO0FBSUUsaUJBQVMsRUFBRWhNLE1BQU0sQ0FBQ2lNO0FBSnBCLFFBaENGLEVBc0NHTCxpQkFBaUIsaUJBQ2hCO0FBQUEsZ0NBQ0Usd0RBQUMsOENBQUQ7QUFBTyxpQkFBTyxFQUFDLHFCQUFmO0FBQXFDLGVBQUssRUFBQywrQ0FBM0M7QUFBQSxpQ0FDRSx3REFBQyxxREFBRDtBQUNFLGtCQUFNLEVBQUU7QUFBQSxrQkFBQztBQUFFdkcsZ0JBQUFBLEtBQUssRUFBRTtBQUFFNUgsa0JBQUFBO0FBQUY7QUFBVCxlQUFEO0FBQUEsa0JBQThCNEgsS0FBOUIsc0NBQUdBLEtBQUg7O0FBQUEsa0NBQ04sd0RBQUMsNkVBQUQsb0JBQ01BLEtBRE47QUFFRSx1QkFBTyxFQUFDLHFCQUZWO0FBR0UscUJBQUssRUFBRSxFQUhUO0FBSUUsNkJBQWEsRUFBRSxJQUpqQjtBQUtFLDRCQUFZLEVBQUUsS0FMaEI7QUFNRSx3QkFBUSxFQUFHN0gsS0FBRCxJQUFXQyxRQUFRLENBQUNELEtBQUQsYUFBQ0EsS0FBRCx1QkFBQ0EsS0FBSyxDQUFFQSxLQUFSO0FBTi9CLGlCQURNO0FBQUEsYUFEVjtBQVdFLGdCQUFJLEVBQUM7QUFYUDtBQURGLFVBREYsZUFnQkUsd0RBQUMsOENBQUQ7QUFBTyxpQkFBTyxFQUFDLHNCQUFmO0FBQXNDLGVBQUssRUFBQywyQ0FBNUM7QUFBQSxpQ0FDRSx3REFBQyxxREFBRDtBQUNFLGtCQUFNLEVBQUU7QUFBQSxrQkFBQztBQUFFNkgsZ0JBQUFBLEtBQUssRUFBRTtBQUFFNUgsa0JBQUFBO0FBQUY7QUFBVCxlQUFEO0FBQUEsa0JBQThCNEgsS0FBOUIsdUNBQUdBLEtBQUg7O0FBQUEsa0NBQ04sd0RBQUMsNkVBQUQsb0JBQ01BLEtBRE47QUFFRSx1QkFBTyxFQUFDLHNCQUZWO0FBR0UscUJBQUssRUFBRSxFQUhUO0FBSUUsNkJBQWEsRUFBRSxLQUpqQjtBQUtFLDRCQUFZLEVBQUUsSUFMaEI7QUFNRSx3QkFBUSxFQUFHN0gsS0FBRCxJQUFXQyxRQUFRLENBQUNELEtBQUQsYUFBQ0EsS0FBRCx1QkFBQ0EsS0FBSyxDQUFFQSxLQUFSO0FBTi9CLGlCQURNO0FBQUEsYUFEVjtBQVdFLGdCQUFJLEVBQUM7QUFYUDtBQURGLFVBaEJGO0FBQUEsUUF2Q0osK0NBd0VFLHdEQUFDLHFEQUFELEtBeEVGO0FBQUE7QUFGRjtBQTZFRCxDQXhGTTs7QUEwRlAsTUFBTXlDLFNBQVMsR0FBSXRGLEtBQUQsS0FBMkI7QUFDM0MwTCxFQUFBQSxXQUFXLEVBQUV2Tyw2Q0FBSTtBQUNuQjtBQUNBLEdBSDZDO0FBSTNDdUwsRUFBQUEsT0FBTyxFQUFFdkwsNkNBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBVDZDO0FBVTNDbVUsRUFBQUEsY0FBYyxFQUFFblUsNkNBQUk7QUFDdEIsY0FBYzZDLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBQyxDQUF4QixDQUEyQjtBQUN6QztBQVo2QyxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUNBOzs7QUFNTyxNQUFNcU4sdUJBQWtDLEdBQUcsQ0FBQztBQUFFa0UsRUFBQUE7QUFBRixDQUFELEtBQXlCO0FBQUE7O0FBQ3pFLFFBQU07QUFDSnpILElBQUFBLE9BREk7QUFFSnpELElBQUFBLEtBRkk7QUFHSjJELElBQUFBLFNBQVMsRUFBRTtBQUFFQyxNQUFBQTtBQUFGLEtBSFA7QUFJSnFDLElBQUFBO0FBSkksTUFLRmpELCtEQUFjLEVBTGxCO0FBT0EsUUFBTXBKLEtBQUssR0FBR3pDLHVEQUFVLENBQUNnVSxRQUFELENBQXhCO0FBRUEsUUFBTSxDQUFDQyxXQUFELEVBQWNDLGNBQWQsSUFBZ0M3TiwrQ0FBUSxDQUFDLEtBQUQsQ0FBOUM7QUFFQSxRQUFNOE4sYUFBYSxHQUFHOVQsNkZBQTBCLENBQUVPLEtBQUQsSUFBV0EsS0FBSyxDQUFDd1QsVUFBbEIsQ0FBaEQ7QUFDQSxRQUFNN1UsUUFBUSxHQUFHSix3REFBVyxFQUE1QjtBQUNBRixFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZE0sSUFBQUEsUUFBUSxDQUFDdVUscUVBQXFCLENBQUM7QUFBRUMsTUFBQUE7QUFBRixLQUFELENBQXRCLENBQVI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsZUFBRCxFQUFrQnhVLFFBQWxCLENBRk0sQ0FBVDtBQUlBLFFBQU04VSxXQUFXLDRCQUFHRixhQUFhLENBQUNKLGVBQUQsQ0FBaEIsMERBQUcsc0JBQWdDOVMsTUFBcEQ7QUFFQSxRQUFNNEksU0FBUyxHQUFHaEIsS0FBSyxDQUFDLFdBQUQsQ0FBdkI7QUFFQSxRQUFNeUwsZ0JBQWdCLEdBQUcxUCw4Q0FBTyxDQUM5QixNQUNFeVAsV0FBVyxHQUFHNU8sTUFBTSxDQUFDNE4sSUFBUCxDQUFZZ0IsV0FBWixFQUF5QnpSLEdBQXpCLENBQThCaUgsU0FBRCxLQUFnQjtBQUFFOUQsSUFBQUEsS0FBSyxFQUFFOEQsU0FBVDtBQUFvQnpFLElBQUFBLEtBQUssRUFBRXlFO0FBQTNCLEdBQWhCLENBQTdCLENBQUgsR0FBMkYsRUFGMUUsRUFHOUIsQ0FBQ3dLLFdBQUQsQ0FIOEIsQ0FBaEM7QUFNQSxRQUFNRSxZQUFZLEdBQUczUCw4Q0FBTyxDQUMxQjtBQUFBOztBQUFBLFdBQ0dpRixTQUFTLEtBQUl3SyxXQUFKLGFBQUlBLFdBQUosZ0RBQUlBLFdBQVcsQ0FBR3hLLFNBQUgsQ0FBZiwwREFBSSxzQkFBMEJqSCxHQUExQixDQUErQmtILEtBQUQsS0FBWTtBQUFFL0QsTUFBQUEsS0FBSyxFQUFFK0QsS0FBSyxDQUFDOUQsSUFBZjtBQUFxQlosTUFBQUEsS0FBSyxFQUFFMEUsS0FBSyxDQUFDOUQ7QUFBbEMsS0FBWixDQUE5QixDQUFKLENBQVYsSUFBdUcsRUFEekc7QUFBQSxHQUQwQixFQUcxQixDQUFDNkQsU0FBRCxFQUFZd0ssV0FBWixDQUgwQixDQUE1QjtBQU1BLHNCQUNFO0FBQUssYUFBUyxFQUFFNVIsS0FBSyxDQUFDd0ksT0FBdEI7QUFBQSw0QkFDRSx1REFBQyw4Q0FBRDtBQUNFLHFCQUFZLGtCQURkO0FBRUUsV0FBSyxFQUFDLFdBRlI7QUFHRSxXQUFLLHVCQUFFd0IsTUFBTSxDQUFDNUMsU0FBVCxzREFBRSxrQkFBa0JySSxPQUgzQjtBQUlFLGFBQU8sRUFBRSxDQUFDLHdCQUFDaUwsTUFBTSxDQUFDNUMsU0FBUiwrQ0FBQyxtQkFBa0JySSxPQUFuQixDQUpaO0FBQUEsNkJBTUUsdURBQUMscURBQUQ7QUFDRSxjQUFNLEVBQUU7QUFBQSxjQUFDO0FBQUV5TCxZQUFBQSxLQUFLLEVBQUU7QUFBRTVILGNBQUFBO0FBQUY7QUFBVCxXQUFEO0FBQUEsY0FBOEI0SCxLQUE5QixzQ0FBR0EsS0FBSDs7QUFBQSw4QkFDTix1REFBQyx5REFBRCxvQkFDTUEsS0FETjtBQUVFLHFCQUFTLEVBQUV4SyxLQUFLLENBQUMrUixLQUZuQjtBQUdFLG9CQUFRLEVBQUdwUCxLQUFELElBQVc7QUFDbkIwSixjQUFBQSxRQUFRLENBQUMsT0FBRCxFQUFVLEVBQVYsQ0FBUixDQURtQixDQUNJOztBQUN2QnpKLGNBQUFBLFFBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0QsYUFOSDtBQU9FLDBCQUFjLEVBQUdxUCxNQUFELElBQXFCO0FBQ25DQSxjQUFBQSxNQUFNLElBQUlQLGNBQWMsQ0FBQyxJQUFELENBQXhCO0FBQ0QsYUFUSDtBQVVFLG1CQUFPLEVBQUVJLGdCQVZYO0FBV0UsaUJBQUssRUFBRTtBQVhULGFBRE07QUFBQSxTQURWO0FBZ0JFLFlBQUksRUFBQyxXQWhCUDtBQWlCRSxlQUFPLEVBQUVoSSxPQWpCWDtBQWtCRSxhQUFLLEVBQUU7QUFDTGdCLFVBQUFBLFFBQVEsRUFBRTtBQUFFbEksWUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZTVELFlBQUFBLE9BQU8sRUFBRTtBQUF4QixXQURMO0FBRUw0TyxVQUFBQSxRQUFRLEVBQUU7QUFDUkMsWUFBQUEsYUFBYSxFQUFFTCx3REFBcUJBO0FBRDVCO0FBRkw7QUFsQlQ7QUFORixNQURGLGVBaUNFLHVEQUFDLDhDQUFEO0FBQU8scUJBQVksY0FBbkI7QUFBa0MsV0FBSyxFQUFDLE9BQXhDO0FBQWdELFdBQUssbUJBQUV2RCxNQUFNLENBQUMzQyxLQUFULGtEQUFFLGNBQWN0SSxPQUFyRTtBQUE4RSxhQUFPLEVBQUUsQ0FBQyxvQkFBQ2lMLE1BQU0sQ0FBQzNDLEtBQVIsMkNBQUMsZUFBY3RJLE9BQWYsQ0FBeEY7QUFBQSw2QkFDRSx1REFBQyxxREFBRDtBQUNFLGNBQU0sRUFBRTtBQUFBLGNBQUMsRUFBRDtBQUFBLGNBQW9CeUwsS0FBcEIsdUNBQUdBLEtBQUg7O0FBQUEsOEJBQ04sdURBQUMseURBQUQsb0JBQW1CQSxLQUFuQjtBQUEwQixtQkFBTyxFQUFFc0gsWUFBbkM7QUFBaUQsaUJBQUssRUFBRSxFQUF4RDtBQUE0RCxrQkFBTSxFQUFFTixXQUFwRTtBQUFpRixxQkFBUyxFQUFFeFIsS0FBSyxDQUFDK1I7QUFBbEcsYUFETTtBQUFBLFNBRFY7QUFJRSxZQUFJLEVBQUMsT0FKUDtBQUtFLGVBQU8sRUFBRWxJLE9BTFg7QUFNRSxhQUFLLEVBQUU7QUFDTGdCLFVBQUFBLFFBQVEsRUFBRTtBQUFFbEksWUFBQUEsS0FBSyxFQUFFLElBQVQ7QUFBZTVELFlBQUFBLE9BQU8sRUFBRTtBQUF4QixXQURMO0FBRUw0TyxVQUFBQSxRQUFRLEVBQUU7QUFDUkMsWUFBQUEsYUFBYSxFQUFFTCx3REFBcUJBO0FBRDVCO0FBRkw7QUFOVDtBQURGLE1BakNGO0FBQUEsSUFERjtBQW1ERCxDQXJGTTs7QUF1RlAsTUFBTWdFLFFBQVEsR0FBSXpSLEtBQUQsS0FBMkI7QUFDMUMwSSxFQUFBQSxPQUFPLEVBQUV2TCw2Q0FBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI2QyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3RDO0FBQ0EsR0FUNEM7QUFVMUNnUyxFQUFBQSxLQUFLLEVBQUU5VSw2Q0FBSTtBQUNiO0FBQ0E7QUFaNEMsQ0FBM0IsQ0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7QUFNQSxNQUFNb1EsV0FBc0IsR0FBRyxDQUFDO0FBQUU0RSxFQUFBQTtBQUFGLENBQUQsS0FBbUI7QUFDaEQsUUFBTTlNLE1BQU0sR0FBR3dFLHNEQUFTLENBQUN2RSxTQUFELENBQXhCO0FBQ0EsUUFBTTtBQUNKMEUsSUFBQUEsUUFESTtBQUVKRCxJQUFBQSxPQUZJO0FBR0p6RCxJQUFBQSxLQUhJO0FBSUoyRCxJQUFBQSxTQUFTLEVBQUU7QUFBRUMsTUFBQUE7QUFBRjtBQUpQLE1BS0ZaLCtEQUFjLEVBTGxCO0FBTUEsUUFBTXBDLE1BQU0sR0FBR1osS0FBSyxDQUFDLFFBQUQsQ0FBcEI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRThDLGdEQUFFLENBQUMrSSxTQUFELEVBQVk5TSxNQUFNLENBQUMrTSxPQUFuQixDQUFsQjtBQUFBLGdEQUNFLHVEQUFDLDhDQUFEO0FBQUE7QUFBQSxNQURGLGdCQUVFLHVEQUFDLG1EQUFEO0FBQVksYUFBTyxFQUFFckksT0FBckI7QUFBOEIsVUFBSSxFQUFDLFFBQW5DO0FBQUEsZ0JBQ0csQ0FBQztBQUFFTyxRQUFBQSxNQUFGO0FBQVVDLFFBQUFBLE1BQVY7QUFBa0JDLFFBQUFBO0FBQWxCLE9BQUQsS0FBZ0M7QUFDL0IsNEJBQ0U7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVuRixNQUFNLENBQUNxRCxPQUF2QjtBQUFBLG9FQUNFLHVEQUFDLG9EQUFEO0FBQWEsbUJBQUssRUFBRSxFQUFwQjtBQUFBO0FBQUEsY0FERixnQkFFRTtBQUFLLHVCQUFTLEVBQUVyRCxNQUFNLENBQUNvRixVQUF2QjtBQUFBLHlCQUNHSCxNQUFNLENBQUNqSyxHQUFQLENBQVcsQ0FBQ3FLLEtBQUQsRUFBUVAsS0FBUixLQUFrQjtBQUFBOztBQUM1QixvQ0FDRTtBQUFBLHlDQUNFO0FBQUssNkJBQVMsRUFBRWYsZ0RBQUUsQ0FBQy9ELE1BQU0sQ0FBQ3FELE9BQVIsRUFBaUJyRCxNQUFNLENBQUNnTixjQUF4QixDQUFsQjtBQUFBLDRDQUNFLHVEQUFDLDhDQUFEO0FBQ0UsK0JBQVMsRUFBRWhOLE1BQU0sQ0FBQ2lOLFVBRHBCO0FBRUUsNkJBQU8sRUFBRSxDQUFDLG9CQUFDcEksTUFBTSxDQUFDaEQsTUFBUixtRUFBQyxlQUFnQmlELEtBQWhCLENBQUQsMEVBQUMscUJBQXdCcEQsR0FBekIsa0RBQUMsc0JBQTZCOUgsT0FBOUIsQ0FGWjtBQUdFLDJCQUFLLHFCQUFFaUwsTUFBTSxDQUFDaEQsTUFBVCw2RUFBRSxnQkFBZ0JpRCxLQUFoQixDQUFGLG9GQUFFLHNCQUF3QnBELEdBQTFCLDJEQUFFLHVCQUE2QjlILE9BSHRDO0FBQUEsNkNBS0UsdURBQUMsOENBQUQsb0JBQ00rSyxRQUFRLENBQUUsVUFBU0csS0FBTSxPQUFqQixFQUF5QjtBQUNuQ1ksd0JBQUFBLFFBQVEsRUFBRTtBQUFFbEksMEJBQUFBLEtBQUssRUFBRSxDQUFDLG1CQUFDcUUsTUFBTSxDQUFDaUQsS0FBRCxDQUFQLDBDQUFDLGNBQWV0SCxLQUFoQixDQUFWO0FBQWlDNUQsMEJBQUFBLE9BQU8sRUFBRTtBQUExQztBQUR5Qix1QkFBekIsQ0FEZDtBQUlFLG1DQUFXLEVBQUMsS0FKZDtBQUtFLHVDQUFjLGFBQVlrTCxLQUFNLEVBTGxDO0FBTUUsb0NBQVksRUFBRU8sS0FBSyxDQUFDM0Q7QUFOdEI7QUFMRixzQkFERixlQWVFLHVEQUFDLG9EQUFEO0FBQWEsK0JBQVMsRUFBRTFCLE1BQU0sQ0FBQ2tOLFNBQS9CO0FBQUE7QUFBQSxzQkFmRixlQWdCRSx1REFBQyw4Q0FBRDtBQUNFLCtCQUFTLEVBQUVsTixNQUFNLENBQUNpTixVQURwQjtBQUVFLDZCQUFPLEVBQUUsQ0FBQyxxQkFBQ3BJLE1BQU0sQ0FBQ2hELE1BQVIscUVBQUMsZ0JBQWdCaUQsS0FBaEIsQ0FBRCw0RUFBQyxzQkFBd0J0SCxLQUF6QixtREFBQyx1QkFBK0I1RCxPQUFoQyxDQUZaO0FBR0UsMkJBQUsscUJBQUVpTCxNQUFNLENBQUNoRCxNQUFULDZFQUFFLGdCQUFnQmlELEtBQWhCLENBQUYsb0ZBQUUsc0JBQXdCdEgsS0FBMUIsMkRBQUUsdUJBQStCNUQsT0FIeEM7QUFBQSw2Q0FLRSx1REFBQyw4Q0FBRCxvQkFDTStLLFFBQVEsQ0FBRSxVQUFTRyxLQUFNLFNBQWpCLEVBQTJCO0FBQ3JDWSx3QkFBQUEsUUFBUSxFQUFFO0FBQUVsSSwwQkFBQUEsS0FBSyxFQUFFLENBQUMsb0JBQUNxRSxNQUFNLENBQUNpRCxLQUFELENBQVAsMkNBQUMsZUFBZXBELEdBQWhCLENBQVY7QUFBK0I5SCwwQkFBQUEsT0FBTyxFQUFFO0FBQXhDO0FBRDJCLHVCQUEzQixDQURkO0FBSUUsbUNBQVcsRUFBQyxPQUpkO0FBS0UsdUNBQWMsZUFBY2tMLEtBQU0sRUFMcEM7QUFNRSxvQ0FBWSxFQUFFTyxLQUFLLENBQUM3SDtBQU50QjtBQUxGLHNCQWhCRixlQThCRSx1REFBQywrQ0FBRDtBQUNFLCtCQUFTLEVBQUV3QyxNQUFNLENBQUNtTixpQkFEcEI7QUFFRSxvQ0FBVyxjQUZiO0FBR0UsMEJBQUksRUFBQyxXQUhQO0FBSUUsNkJBQU8sRUFBQyxXQUpWO0FBS0UsNkJBQU8sRUFBRSxNQUFNO0FBQ2JoSSx3QkFBQUEsTUFBTSxDQUFDTCxLQUFELENBQU47QUFDRDtBQVBILHNCQTlCRjtBQUFBO0FBREYsbUJBQVVPLEtBQUssQ0FBQ3RMLEVBQWhCLENBREY7QUE0Q0QsZUE3Q0EsQ0FESCxlQStDRSx1REFBQywrQ0FBRDtBQUNFLHlCQUFTLEVBQUVpRyxNQUFNLENBQUNvTixjQURwQjtBQUVFLG9CQUFJLEVBQUMsYUFGUDtBQUdFLG9CQUFJLEVBQUMsUUFIUDtBQUlFLHVCQUFPLEVBQUMsV0FKVjtBQUtFLHVCQUFPLEVBQUUsTUFBTTtBQUNibEksa0JBQUFBLE1BQU0sQ0FBQyxFQUFELENBQU47QUFDRCxpQkFQSDtBQUFBO0FBQUEsZ0JBL0NGO0FBQUEsY0FGRjtBQUFBO0FBREYsVUFERjtBQWtFRDtBQXBFSCxNQUZGO0FBQUEsSUFERjtBQTJFRCxDQXBGRDs7QUFzRkEsTUFBTWpGLFNBQVMsR0FBSXRGLEtBQUQsSUFBeUI7QUFDekMsU0FBTztBQUNMb1MsSUFBQUEsT0FBTyxFQUFFalYsNkNBQUk7QUFDakIsb0JBQW9CNkMsS0FBSyxDQUFDQyxPQUFOLENBQWN5UyxFQUFHO0FBQ3JDLEtBSFM7QUFJTGpJLElBQUFBLFVBQVUsRUFBRXROLDZDQUFJO0FBQ3BCO0FBQ0E7QUFDQSxLQVBTO0FBUUx1TCxJQUFBQSxPQUFPLEVBQUV2TCw2Q0FBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCNkMsS0FBSyxDQUFDQyxPQUFOLENBQWNtTCxFQUFHO0FBQ3hDO0FBQ0EsS0FoQlM7QUFpQkxvSCxJQUFBQSxpQkFBaUIsRUFBRXJWLDZDQUFJO0FBQzNCLHFCQUFxQjZDLEtBQUssQ0FBQ0MsT0FBTixDQUFjbUwsRUFBRztBQUN0QztBQUNBLEtBcEJTO0FBcUJMcUgsSUFBQUEsY0FBYyxFQUFFdFYsNkNBQUk7QUFDeEI7QUFDQTtBQUNBLEtBeEJTO0FBeUJMa1YsSUFBQUEsY0FBYyxFQUFFbFYsNkNBQUk7QUFDeEI7QUFDQSxLQTNCUztBQTRCTG9WLElBQUFBLFNBQVMsRUFBRXBWLDZDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjZDLEtBQUssQ0FBQ0MsT0FBTixDQUFjbUwsRUFBRztBQUN0QyxLQWpDUztBQWtDTGtILElBQUFBLFVBQVUsRUFBRW5WLDZDQUFJO0FBQ3BCO0FBQ0EsdUJBQXVCNkMsS0FBSyxDQUFDQyxPQUFOLENBQWMwUyxFQUFHO0FBQ3hDO0FBQ0EsdUJBQXVCM1MsS0FBSyxDQUFDQyxPQUFOLENBQWMwUyxFQUFHO0FBQ3hDO0FBQ0E7QUF4Q1MsR0FBUDtBQTBDRCxDQTNDRDs7QUE2Q0EsaUVBQWVwRixXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7OztBQUVBLE1BQU1qRCxNQUFtQyxHQUFHLENBQUMsTUFBRCxFQUFTLGdCQUFULEVBQTJCLFdBQTNCLEVBQXdDLFNBQXhDLEVBQW1ELFlBQW5ELENBQTVDO0FBRU8sU0FBU2lCLFdBQVQsR0FBa0Q7QUFDdkQsUUFBTWxHLE1BQU0sR0FBRzVILHVEQUFVLENBQUM2SCxTQUFELENBQXpCO0FBQ0EsUUFBTSxDQUFDNE4sT0FBRCxFQUFVQyxTQUFWLElBQXVCQyxVQUFVLEVBQXZDO0FBQ0EsUUFBTTtBQUFFOU0sSUFBQUE7QUFBRixNQUFZZ0QsK0RBQWMsRUFBaEM7QUFDQSxRQUFNLENBQUNqSSxJQUFELEVBQU9tTCxTQUFQLEVBQWtCekcsT0FBbEIsSUFBNkJPLEtBQUssQ0FBQyxDQUFDLE1BQUQsRUFBUyxXQUFULEVBQXNCLFNBQXRCLENBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUUrTSxJQUFBQTtBQUFGLE1BQThCTCxtRkFBcUIsQ0FBQ2pOLE9BQUQsQ0FBekQ7O0FBRUEsTUFBSTFFLElBQUksS0FBS04seUVBQVQsSUFBd0NNLElBQUksS0FBS04sd0VBQXJELEVBQWlGO0FBQy9FLFdBQU8sSUFBUDtBQUNEOztBQUVELFFBQU11UyxrQkFBa0IsR0FBRzdNLE9BQU8sQ0FBQytGLFNBQUQsQ0FBUCxJQUFzQjZHLHVCQUFqRDtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFaE8sTUFBTSxDQUFDa08sU0FBdkI7QUFBQSw0QkFDRSx3REFBQyx3REFBRDtBQUFBLGlCQUNHRix1QkFBdUIsaUJBQ3RCLHVEQUFDLCtDQUFEO0FBQVEsZ0JBQVEsRUFBRSxDQUFDQyxrQkFBbkI7QUFBdUMsWUFBSSxFQUFDLFFBQTVDO0FBQXFELGVBQU8sRUFBQyxTQUE3RDtBQUF1RSxlQUFPLEVBQUVILFNBQWhGO0FBQUE7QUFBQSxRQUZKLEVBTUcsQ0FBQ0UsdUJBQUQsc0NBQ0MsdURBQUMsOENBQUQ7QUFBTyxhQUFLLEVBQUMsMEJBQWI7QUFBd0MsZ0JBQVEsRUFBQyxTQUFqRDtBQUFBO0FBQUEsUUFERCxFQU5IO0FBQUEsTUFERixlQWFFLHVEQUFDLGlFQUFEO0FBQW1CLGFBQU8sRUFBRUg7QUFBNUIsTUFiRjtBQUFBLElBREY7QUFpQkQ7O0FBRUQsU0FBU0UsVUFBVCxHQUFxRTtBQUNuRSxRQUFNLENBQUNGLE9BQUQsRUFBVU0sVUFBVixJQUF3QjFQLCtDQUFRLEVBQXRDO0FBQ0EsUUFBTTtBQUFFMlAsSUFBQUE7QUFBRixNQUFnQm5LLCtEQUFjLEVBQXBDO0FBQ0EsUUFBTW9LLFNBQVMsR0FBR2Qsc0RBQWUsRUFBakM7QUFFQSxRQUFNTyxTQUFTLEdBQUc5SixrREFBVyxDQUFDLE1BQU07QUFDbEMsVUFBTWxHLE1BQU0sR0FBR3NRLFNBQVMsQ0FBQ25KLE1BQUQsQ0FBeEI7QUFDQSxVQUFNckosT0FBTyxHQUFHMFMsb0JBQW9CLENBQUN4USxNQUFELENBQXBDO0FBRUFuQyxJQUFBQSw4REFBZ0IsQ0FBQ0MsT0FBRCxDQUFoQixDQUNHYSxJQURILENBQ1ErUSwwREFBUyxDQUFFZSxRQUFELElBQWMsQ0FBQ0MsV0FBVyxDQUFDRCxRQUFELENBQTNCLEVBQXVDLElBQXZDLENBRGpCLEVBRUdFLFNBRkgsQ0FFY0YsUUFBRCxJQUFjO0FBQ3ZCLFVBQUksQ0FBQ0YsU0FBUyxFQUFkLEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBQ0RGLE1BQUFBLFVBQVUsQ0FBQ0ksUUFBRCxDQUFWO0FBQ0QsS0FQSDtBQVFELEdBWjRCLEVBWTFCLENBQUNILFNBQUQsRUFBWUMsU0FBWixDQVowQixDQUE3QjtBQWNBLFNBQU8sQ0FBQ1IsT0FBRCxFQUFVQyxTQUFWLENBQVA7QUFDRDs7QUFFRCxTQUFTUSxvQkFBVCxDQUE4QnhRLE1BQTlCLEVBQWlFO0FBQy9ELFFBQU0sQ0FBQzlCLElBQUQsRUFBT2tGLGNBQVAsRUFBdUJpRyxTQUF2QixFQUFrQ3pHLE9BQWxDLEVBQTJDZ08sVUFBM0MsSUFBeUQ1USxNQUEvRDs7QUFFQSxVQUFROUIsSUFBUjtBQUNFLFNBQUtOLHdFQUFMO0FBQ0UsYUFBTztBQUNMd0YsUUFBQUEsY0FESztBQUVMMkksUUFBQUEsSUFBSSxFQUFFNkU7QUFGRCxPQUFQOztBQUtGLFNBQUtoVCxrRUFBTDtBQUNFLGFBQU87QUFDTGlULFFBQUFBLGlCQUFpQixFQUFFO0FBQ2pCeEgsVUFBQUEsU0FEaUI7QUFFakIzSyxVQUFBQSxJQUFJLEVBQUVrRSxPQUZXO0FBR2pCa08sVUFBQUEsR0FBRyxFQUFFbkIsZ0VBQWlCLENBQUNvQixJQUFJLENBQUNELEdBQUwsRUFBRDtBQUhMO0FBRGQsT0FBUDs7QUFRRjtBQUNFLFlBQU0sSUFBSTdTLEtBQUosQ0FBVyxjQUFhQyxJQUFLLDRCQUE3QixDQUFOO0FBakJKO0FBbUJEOztBQUVELFNBQVN3UyxXQUFULENBQXFCRCxRQUFyQixFQUE2RDtBQUMzRCxVQUFRQSxRQUFRLENBQUMvUixJQUFULENBQWN4RCxLQUF0QjtBQUNFLFNBQUtvQyw0REFBTDtBQUNBLFNBQUtBLDZEQUFMO0FBQ0UsYUFBTyxJQUFQOztBQUNGO0FBQ0UsYUFBTyxLQUFQO0FBTEo7QUFPRDs7QUFFRCxTQUFTNkUsU0FBVCxDQUFtQnRGLEtBQW5CLEVBQXlDO0FBQ3ZDLFNBQU87QUFDTHVULElBQUFBLFNBQVMsRUFBRXBXLDZDQUFJO0FBQ25CLG9CQUFvQjZDLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDckMsbUJBQW1CRCxLQUFLLENBQUNtVSxXQUFOLENBQWtCaFIsTUFBbEIsQ0FBeUJpUixHQUFJO0FBQ2hEO0FBSlMsR0FBUDtBQU1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhEO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7OztBQU1PLFNBQVNuQixpQkFBVCxDQUEyQnJRLEtBQTNCLEVBQW9FO0FBQ3pFLFFBQU07QUFBRXNRLElBQUFBO0FBQUYsTUFBY3RRLEtBQXBCO0FBQ0EsUUFBTXlDLE1BQU0sR0FBRzVILHVEQUFVLENBQUM2SCxTQUFELENBQXpCO0FBQ0EsUUFBTW9QLFdBQThCLEdBQUc7QUFDckNDLElBQUFBLFFBQVEsRUFBRSxFQUQyQjtBQUVyQ0MsSUFBQUEsU0FBUyxFQUFFLENBQ1Q7QUFDRUMsTUFBQUEsT0FBTyxFQUFFO0FBQUV6VixRQUFBQSxFQUFFLEVBQUVrVixnRUFBTjtBQUE2QjdILFFBQUFBLE9BQU8sRUFBRTtBQUF0QyxPQURYO0FBRUVzSSxNQUFBQSxVQUFVLEVBQUUsQ0FBQztBQUFFM1YsUUFBQUEsRUFBRSxFQUFFLG9CQUFOO0FBQTRCeUQsUUFBQUEsS0FBSyxFQUFFMlIsc0VBQTZCUTtBQUFoRSxPQUFEO0FBRmQsS0FEUztBQUYwQixHQUF2Qzs7QUFVQSxNQUFJLENBQUM5QixPQUFMLEVBQWM7QUFDWixXQUFPLElBQVA7QUFDRDs7QUFFRCxRQUFNO0FBQUVyUixJQUFBQSxJQUFGO0FBQVFLLElBQUFBO0FBQVIsTUFBcUJnUixPQUEzQjs7QUFFQSxNQUFJclIsSUFBSSxDQUFDeEQsS0FBTCxLQUFlb0MsK0RBQW5CLEVBQXlDO0FBQ3ZDLHdCQUNFO0FBQUssZUFBUyxFQUFFNEUsTUFBTSxDQUFDa08sU0FBdkI7QUFBQSwrQ0FDRTtBQUFBO0FBQUEsUUFERjtBQUFBLE1BREY7QUFLRDs7QUFFRCxNQUFJMVIsSUFBSSxDQUFDeEQsS0FBTCxLQUFlb0MsNkRBQW5CLEVBQXVDO0FBQ3JDLHdCQUNFO0FBQUssZUFBUyxFQUFFNEUsTUFBTSxDQUFDa08sU0FBdkI7QUFBQSxnQkFDRzFSLElBQUksQ0FBQ2xELEtBQUwsR0FBYThWLDhEQUFnQixDQUFDNVMsSUFBSSxDQUFDbEQsS0FBTixDQUE3QixHQUE0QztBQUQvQyxNQURGO0FBS0Q7O0FBQ0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUUwRyxNQUFNLENBQUNrTyxTQUF2QjtBQUFBLDRCQUNFO0FBQUEsdUZBQ3FFLEdBRHJFLEVBRUdyUixRQUFRLEtBQUtuQixrRUFBYixHQUFvQyxrRUFBcEMsR0FBeUcsSUFGNUc7QUFBQSxNQURGLGVBS0U7QUFBSyxlQUFTLEVBQUVzRSxNQUFNLENBQUM0UCxLQUF2QjtBQUFBLDZCQUNFLHVEQUFDLG9FQUFEO0FBQUEsa0JBQ0csQ0FBQztBQUFFQyxVQUFBQSxLQUFGO0FBQVNDLFVBQUFBO0FBQVQsU0FBRCxrQkFDQztBQUFLLGVBQUssRUFBRTtBQUFFRCxZQUFBQSxLQUFLLEVBQUcsR0FBRUEsS0FBTSxJQUFsQjtBQUF1QkMsWUFBQUEsTUFBTSxFQUFHLEdBQUVBLE1BQU87QUFBekMsV0FBWjtBQUFBLGlDQUNFLHVEQUFDLDJEQUFEO0FBQ0UsaUJBQUssRUFBQyxFQURSO0FBRUUsaUJBQUssRUFBRUQsS0FGVDtBQUdFLGtCQUFNLEVBQUVDLE1BSFY7QUFJRSxvQkFBUSxFQUFDLE9BSlg7QUFLRSxnQkFBSSxFQUFFdFQsSUFMUjtBQU1FLHVCQUFXLEVBQUU2UztBQU5mO0FBREY7QUFGSjtBQURGLE1BTEY7QUFBQSxJQURGO0FBd0JEOztBQUVELFNBQVNwUCxTQUFULENBQW1CdEYsS0FBbkIsRUFBeUM7QUFDdkMsU0FBTztBQUNMdVQsSUFBQUEsU0FBUyxFQUFFcFcsNkNBQUk7QUFDbkIsZ0JBQWdCNkMsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNqQyxLQUhTO0FBSUxnVixJQUFBQSxLQUFLLEVBQUU5WCw2Q0FBSTtBQUNmO0FBQ0E7QUFDQSxvQkFBb0I2QyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3JDLDBCQUEwQkQsS0FBSyxDQUFDbUksTUFBTixDQUFhRyxNQUFiLENBQW9COE0sTUFBTztBQUNyRCx1QkFBdUJwVixLQUFLLENBQUN3SSxLQUFOLENBQVlDLFlBQVosQ0FBeUIsQ0FBekIsQ0FBNEI7QUFDbkQ7QUFWUyxHQUFQO0FBWUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkQ7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTs7O0FBVU8sTUFBTW9HLFdBQU4sU0FBMEJ3RyxnREFBMUIsQ0FBc0Q7QUFJM0RZLEVBQUFBLFdBQVcsQ0FBQ3JULEtBQUQsRUFBZTtBQUFBOztBQUN4QixVQUFNQSxLQUFOOztBQUR3Qjs7QUFBQTs7QUFBQSwwQ0FpQlgsTUFBTTtBQUNuQixZQUFNO0FBQUVtRCxRQUFBQTtBQUFGLFVBQWMsSUFBcEI7QUFDQSxXQUFLbVEsTUFBTCxDQUFZQyxHQUFaLENBQWdCcFEsT0FBaEI7QUFDRCxLQXBCeUI7O0FBQUEsNkNBc0JSLE1BQU07QUFDdEIsV0FBS21RLE1BQUwsQ0FBWUUsTUFBWjtBQUNELEtBeEJ5Qjs7QUFBQSw2Q0EwQlByUSxPQUFELElBQTJCO0FBQzNDLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFdBQUtuRCxLQUFMLENBQVdFLFFBQVgsQ0FBb0JpRCxPQUFwQjtBQUNELEtBN0J5Qjs7QUFBQSw4Q0ErQk44RyxLQUFELElBQXVCO0FBQ3hDLFlBQU07QUFBRTlHLFFBQUFBO0FBQUYsVUFBYyxJQUFwQjtBQUNBLFdBQUtzUSxlQUFMLENBQXFCQyxRQUFRLENBQUN2USxPQUFELEVBQVU4RyxLQUFWLENBQTdCO0FBQ0QsS0FsQ3lCOztBQUFBLGdEQW9DTCxNQUFNO0FBQ3pCLFlBQU07QUFBRTlHLFFBQUFBO0FBQUYsVUFBYyxJQUFwQjtBQUNBLFlBQU13USxpQkFBaUIsR0FBR1Qsc0ZBQWdCLEdBQUc3RyxtQkFBbkIsQ0FBdUMsU0FBdkMsQ0FBMUI7O0FBRUEsVUFBSSxDQUFDc0gsaUJBQUwsRUFBd0I7QUFDdEI7QUFDRDs7QUFFRCxXQUFLRixlQUFMLENBQ0VDLFFBQVEsQ0FBQ3ZRLE9BQUQsRUFBVTtBQUNoQitHLFFBQUFBLGFBQWEsRUFBRXlKLGlCQUFpQixDQUFDQyxHQURqQjtBQUVoQkMsUUFBQUEsS0FBSyxFQUFFO0FBQ0w5SixVQUFBQSxLQUFLLEVBQUUsRUFERjtBQUVMK0osVUFBQUEsVUFBVSxFQUFFO0FBQ1ZyVixZQUFBQSxJQUFJLEVBQUVrVixpQkFBaUIsQ0FBQ2xWLElBRGQ7QUFFVm1WLFlBQUFBLEdBQUcsRUFBRUQsaUJBQWlCLENBQUNDO0FBRmI7QUFGUDtBQUZTLE9BQVYsQ0FEVjtBQVlELEtBeER5Qjs7QUFBQSxrREEwREgsTUFBTTtBQUMzQixZQUFNO0FBQUV6USxRQUFBQTtBQUFGLFVBQWMsSUFBcEI7QUFFQSxXQUFLc1EsZUFBTCxDQUNFQyxRQUFRLENBQUN2USxPQUFELEVBQVU7QUFDaEIrRyxRQUFBQSxhQUFhLEVBQUVULGtHQURDO0FBRWhCb0ssUUFBQUEsS0FBSyxFQUFFZiw4RkFBQSxDQUE4QjtBQUNuQ3JVLFVBQUFBLElBQUksRUFBRXVVLHVGQUQ2QjtBQUVuQ2lCLFVBQUFBLFVBQVUsRUFBRSxDQUFDaEIsNkZBQUQ7QUFGdUIsU0FBOUI7QUFGUyxPQUFWLENBRFY7QUFTRCxLQXRFeUI7O0FBRXhCLFNBQUt4WCxLQUFMLEdBQWE7QUFBRXlZLE1BQUFBLGdCQUFnQixFQUFFO0FBQXBCLEtBQWI7QUFDQSxTQUFLWixNQUFMLEdBQWMsSUFBSUgsNEVBQUosRUFBZDtBQUNBLFNBQUtoUSxPQUFMLG1CQUFlbkQsS0FBSyxDQUFDQyxLQUFyQix1REFBOEIsRUFBOUI7QUFDRDs7QUFFRGtVLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCLFNBQUtiLE1BQUwsQ0FBWXhILEdBQVosR0FBa0JvRixTQUFsQixDQUE2QmpTLElBQUQsSUFBVTtBQUNwQyxXQUFLbVYsUUFBTCxDQUFjO0FBQUVGLFFBQUFBLGdCQUFnQixFQUFFalY7QUFBcEIsT0FBZDtBQUNELEtBRkQ7QUFHRDs7QUFFRG9WLEVBQUFBLG9CQUFvQixHQUFHO0FBQ3JCLFNBQUtmLE1BQUwsQ0FBWWdCLE9BQVo7QUFDRDs7QUF5RERDLEVBQUFBLFNBQVMsR0FBRztBQUNWLFVBQU10VixJQUFJLEdBQUdxQixNQUFNLENBQUNDLE1BQVAsQ0FBYyxLQUFLOUUsS0FBTCxDQUFXeVksZ0JBQXpCLEVBQTJDM0ssSUFBM0MsQ0FBaURpTCxDQUFELElBQU8zUSxPQUFPLENBQUMyUSxDQUFELENBQTlELENBQWI7QUFDQSxXQUFPLENBQUF2VixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRXhELEtBQU4sTUFBZ0JvQywrREFBdkI7QUFDRDs7QUFFRDRXLEVBQUFBLG9CQUFvQixHQUFHO0FBQ3JCLFVBQU1GLFNBQVMsR0FBRyxLQUFLQSxTQUFMLEVBQWxCOztBQUVBLFFBQUlBLFNBQUosRUFBZTtBQUNiLDBCQUNFLHdEQUFDLCtDQUFEO0FBQVEsWUFBSSxFQUFDLGVBQWI7QUFBNkIsWUFBSSxFQUFDLFFBQWxDO0FBQTJDLGVBQU8sRUFBQyxhQUFuRDtBQUFpRSxlQUFPLEVBQUUsS0FBS0csZUFBL0U7QUFBQTtBQUFBLFFBREY7QUFLRDs7QUFFRCx3QkFDRSx3REFBQywrQ0FBRDtBQUFRLFVBQUksRUFBQyxNQUFiO0FBQW9CLFVBQUksRUFBQyxRQUF6QjtBQUFrQyxhQUFPLEVBQUUsS0FBS0MsWUFBaEQ7QUFBQTtBQUFBLE1BREY7QUFLRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFM1UsTUFBQUEsS0FBSyxHQUFHO0FBQVYsUUFBaUIsS0FBS0QsS0FBNUI7QUFDQSxVQUFNO0FBQUVrVSxNQUFBQTtBQUFGLFFBQXVCLEtBQUt6WSxLQUFsQztBQUNBLFVBQU1nSCxNQUFNLEdBQUdDLFNBQVMsQ0FBQ2hELDJEQUFELENBQXhCO0FBRUEsd0JBQ0U7QUFBSyxlQUFTLEVBQUUrQyxNQUFNLENBQUNrTyxTQUF2QjtBQUFBLDhCQUNFLHdEQUFDLGtEQUFEO0FBQ0UsWUFBSSxFQUFFdUQsZ0JBRFI7QUFFRSxlQUFPLEVBQUVqVSxLQUZYO0FBR0UsdUJBQWUsRUFBRSxLQUFLd1QsZUFIeEI7QUFJRSx3QkFBZ0IsRUFBRSxLQUFLcUIsZ0JBSnpCO0FBS0Usb0JBQVksRUFBRSxLQUFLSDtBQUxyQixRQURGLGVBUUUseURBQUMsd0RBQUQ7QUFBaUIsZUFBTyxFQUFDLElBQXpCO0FBQThCLGFBQUssRUFBQyxZQUFwQztBQUFBLGdDQUNFLHdEQUFDLCtDQUFEO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxjQUFJLEVBQUMsTUFGUDtBQUdFLGlCQUFPLEVBQUUsS0FBS0ksa0JBSGhCO0FBSUUsaUJBQU8sRUFBQyxXQUpWO0FBS0Usd0JBQVlwQywwRkFMZDtBQUFBO0FBQUEsVUFERixFQVVHalQsdUVBQUEsaUJBQ0Msd0RBQUMsK0NBQUQ7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixjQUFJLEVBQUMsTUFBM0I7QUFBa0MsaUJBQU8sRUFBRSxLQUFLd1Ysb0JBQWhEO0FBQXNFLGlCQUFPLEVBQUMsV0FBOUU7QUFBQTtBQUFBLFVBWEosRUFlRyxLQUFLVCxvQkFBTCxFQWZIO0FBQUEsUUFSRjtBQUFBLE1BREY7QUE0QkQ7O0FBcEkwRDs7QUF1STdELE1BQU1mLFFBQVEsR0FBRyxDQUFDdlEsT0FBRCxFQUF3QmdTLFVBQXhCLEtBQWtHO0FBQ2pILFFBQU1wTCxLQUFLLEdBQUc4SSxzRUFBZ0IsQ0FBQzFQLE9BQUQsQ0FBOUI7QUFFQSxRQUFNOEcsS0FBaUIscUJBQ2xCa0wsVUFEa0I7QUFFckJwTCxJQUFBQSxLQUZxQjtBQUdyQnFMLElBQUFBLFNBQVMsRUFBRSxFQUhVO0FBSXJCdkIsSUFBQUEsS0FBSyxvQkFDQXNCLFVBQVUsQ0FBQ3RCLEtBRFg7QUFFSGpJLE1BQUFBLElBQUksRUFBRSxLQUZIO0FBR0g3QixNQUFBQTtBQUhHLE1BSmdCO0FBU3JCc0wsSUFBQUEsaUJBQWlCLEVBQUVDLGdCQUFnQixDQUFDSCxVQUFVLENBQUN0QixLQUFaO0FBVGQsSUFBdkI7QUFZQSxTQUFPLENBQUMsR0FBRzFRLE9BQUosRUFBYThHLEtBQWIsQ0FBUDtBQUNELENBaEJEOztBQWtCQSxNQUFNcUwsZ0JBQWdCLEdBQUl6QixLQUFELElBQXFEO0FBQzVFLE1BQUlkLGtGQUFpQixDQUFDYyxLQUFELENBQXJCLEVBQThCO0FBQzVCO0FBQ0Q7O0FBRUQsU0FBT25CLDBFQUEyQixFQUFsQztBQUNELENBTkQ7O0FBUUEsTUFBTWhRLFNBQVMsR0FBR2tRLDBEQUFhLENBQUV4VixLQUFELElBQTBCO0FBQ3hELFNBQU87QUFDTHVULElBQUFBLFNBQVMsRUFBRXBXLDZDQUFJO0FBQ25CLDBCQUEwQjZDLEtBQUssQ0FBQ21JLE1BQU4sQ0FBYUMsVUFBYixDQUF3QkMsT0FBUTtBQUMxRDtBQUNBLG1CQUFtQnJJLEtBQUssQ0FBQ21VLFdBQU4sQ0FBa0JoUixNQUFsQixDQUF5QmlSLEdBQUk7QUFDaEQsS0FMUztBQU1MK0QsSUFBQUEsVUFBVSxFQUFFaGIsNkNBQUk7QUFDcEIsb0JBQW9CNkMsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNyQyxLQVJTO0FBU0xtWSxJQUFBQSxhQUFhLEVBQUVqYiw2Q0FBSTtBQUN2QiwwQkFBMEI2QyxLQUFLLENBQUNtSSxNQUFOLENBQWFHLE1BQWIsQ0FBb0I4TSxNQUFPO0FBQ3JELHVCQUF1QnBWLEtBQUssQ0FBQ3dJLEtBQU4sQ0FBWUMsWUFBWixFQUEyQjtBQUNsRDtBQVpTLEdBQVA7QUFjRCxDQWY4QixDQUEvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RNQTtBQUNBO0FBQ0E7QUFFQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7QUFpQk8sTUFBTXVOLFNBQU4sU0FBd0JYLGdEQUF4QixDQUFvRDtBQUN6RFksRUFBQUEsV0FBVyxDQUFDclQsS0FBRCxFQUFlO0FBQ3hCLFVBQU1BLEtBQU47O0FBRHdCLDJDQU1UaUssS0FBRCxJQUFzQjtBQUNwQyxXQUFLakssS0FBTCxDQUFXa1csZUFBWCxDQUNFLEtBQUtsVyxLQUFMLENBQVdtRCxPQUFYLENBQW1Ca0IsTUFBbkIsQ0FBMkI4UixJQUFELElBQVU7QUFDbEMsZUFBT0EsSUFBSSxDQUFDdEMsS0FBTCxDQUFXOUosS0FBWCxLQUFxQkUsS0FBSyxDQUFDRixLQUFsQztBQUNELE9BRkQsQ0FERjtBQUtELEtBWnlCOztBQUFBLCtDQWNOLENBQUN2SyxTQUFELEVBQStCK0gsS0FBL0IsS0FBaUQ7QUFDbkUsWUFBTTtBQUFFcEUsUUFBQUEsT0FBRjtBQUFXK1MsUUFBQUE7QUFBWCxVQUErQixLQUFLbFcsS0FBMUM7QUFDQWtXLE1BQUFBLGVBQWUsQ0FDYi9TLE9BQU8sQ0FBQzFGLEdBQVIsQ0FBWSxDQUFDMFksSUFBRCxFQUFPQyxTQUFQLEtBQXFCO0FBQy9CLFlBQUlBLFNBQVMsS0FBSzdPLEtBQWxCLEVBQXlCO0FBQ3ZCLGlCQUFPNE8sSUFBUDtBQUNEOztBQUNELGlDQUNLQSxJQURMO0FBRUVkLFVBQUFBLGlCQUFpQixFQUFFN1Y7QUFGckI7QUFJRCxPQVJELENBRGEsQ0FBZjtBQVdELEtBM0J5Qjs7QUFBQSwrQ0E2Qk4sQ0FBQzZXLFVBQUQsRUFBK0I5TyxLQUEvQixLQUFpRDtBQUNuRSxZQUFNO0FBQUVwRSxRQUFBQSxPQUFGO0FBQVcrUyxRQUFBQTtBQUFYLFVBQStCLEtBQUtsVyxLQUExQztBQUVBLFlBQU1zVyxlQUFlLEdBQUduVCxPQUFPLENBQUNvRSxLQUFELENBQVAsQ0FBZXdDLEtBQXZDO0FBRUFtTSxNQUFBQSxlQUFlLENBQ2IvUyxPQUFPLENBQUMxRixHQUFSLENBQWF3TSxLQUFELElBQVc7QUFDckIsWUFBSSxDQUFDOEksa0ZBQWlCLENBQUM5SSxLQUFLLENBQUM0SixLQUFQLENBQXRCLEVBQXFDO0FBQ25DLGlCQUFPNUosS0FBUDtBQUNEOztBQUVELFlBQUlBLEtBQUssQ0FBQzRKLEtBQU4sQ0FBWUksVUFBWixJQUEwQmhLLEtBQUssQ0FBQzRKLEtBQU4sQ0FBWUksVUFBWixDQUF1QixDQUF2QixFQUEwQmhLLEtBQTFCLENBQWdDeE4sTUFBaEMsQ0FBdUMsQ0FBdkMsTUFBOEM2WixlQUE1RSxFQUE2RjtBQUMzRixtQ0FDS3JNLEtBREw7QUFFRTRKLFlBQUFBLEtBQUssb0JBQ0E1SixLQUFLLENBQUM0SixLQUROO0FBRUhJLGNBQUFBLFVBQVUsRUFBRWhLLEtBQUssQ0FBQzRKLEtBQU4sQ0FBWUksVUFBWixDQUF1QnhXLEdBQXZCLENBQTJCLENBQUNtTSxTQUFELEVBQVkyTSxjQUFaLEtBQStCO0FBQ3BFO0FBQ0Esb0JBQUkzTSxTQUFTLENBQUNLLEtBQVYsQ0FBZ0J4TixNQUFoQixDQUF1QixDQUF2QixNQUE4QjZaLGVBQTlCLElBQWlEQyxjQUFjLEtBQUssQ0FBeEUsRUFBMkU7QUFDekUsMkNBQ0szTSxTQURMO0FBRUU0TSxvQkFBQUEsU0FBUyxvQkFDSjVNLFNBQVMsQ0FBQzRNLFNBRE47QUFFUC9aLHNCQUFBQSxNQUFNLEVBQUUsQ0FBQ2dhLFVBQVUsQ0FBQ0osVUFBVSxDQUFDSyxLQUFYLENBQWlCLENBQWpCLEVBQW9CelcsS0FBcEIsQ0FBMEIwVyxXQUExQixDQUFzQyxDQUF0QyxDQUFELENBQVg7QUFGRDtBQUZYO0FBT0Q7O0FBQ0QsdUJBQU8vTSxTQUFQO0FBQ0QsZUFaVztBQUZUO0FBRlA7QUFtQkQ7O0FBQ0QsZUFBT0ssS0FBUDtBQUNELE9BM0JELENBRGEsQ0FBZjtBQThCRCxLQWhFeUI7O0FBQUEsZ0RBa0VMLENBQUNtQyxRQUFELEVBQXVDN0UsS0FBdkMsS0FBeUQ7QUFDNUUsWUFBTTtBQUFFcEUsUUFBQUEsT0FBRjtBQUFXK1MsUUFBQUE7QUFBWCxVQUErQixLQUFLbFcsS0FBMUM7QUFFQSxZQUFNNFcsY0FBYyxHQUFHelQsT0FBTyxDQUFDMUYsR0FBUixDQUFZLENBQUMwWSxJQUFELEVBQU9DLFNBQVAsS0FBcUI7QUFDdEQsWUFBSUEsU0FBUyxLQUFLN08sS0FBbEIsRUFBeUI7QUFDdkIsaUJBQU80TyxJQUFQO0FBQ0Q7O0FBRUQsZUFBT1UsU0FBUyxDQUFDVixJQUFELEVBQU8vSixRQUFRLENBQUN3SCxHQUFoQixDQUFoQjtBQUNELE9BTnNCLENBQXZCO0FBT0FzQyxNQUFBQSxlQUFlLENBQUNVLGNBQUQsQ0FBZjtBQUNELEtBN0V5Qjs7QUFBQSwyQ0ErRVYsQ0FBQzNNLEtBQUQsRUFBbUIxQyxLQUFuQixLQUFxQztBQUNuRCxZQUFNO0FBQUVwRSxRQUFBQSxPQUFGO0FBQVcrUyxRQUFBQTtBQUFYLFVBQStCLEtBQUtsVyxLQUExQyxDQURtRCxDQUduRDs7QUFDQSxZQUFNOFcsYUFBYSxHQUFHM1QsT0FBTyxDQUFDb0UsS0FBRCxDQUFQLENBQWV3QyxLQUFyQztBQUNBLFlBQU1nTixRQUFRLEdBQUc5TSxLQUFLLENBQUNGLEtBQXZCO0FBRUFtTSxNQUFBQSxlQUFlLENBQ2JELG1FQUE0QixDQUFDOVMsT0FBRCxFQUFVMlQsYUFBVixFQUF5QkMsUUFBekIsQ0FBNUIsQ0FBK0R0WixHQUEvRCxDQUFtRSxDQUFDMFksSUFBRCxFQUFPQyxTQUFQLEtBQXFCO0FBQUE7O0FBQ3RGLFlBQUlBLFNBQVMsS0FBSzdPLEtBQWxCLEVBQXlCO0FBQ3ZCLGlCQUFPNE8sSUFBUDtBQUNEOztBQUVELGlDQUNLQSxJQURMO0FBRUVwTSxVQUFBQSxLQUFLLEVBQUVFLEtBQUssQ0FBQ0YsS0FGZjtBQUdFcUwsVUFBQUEsU0FBUywyQkFBRWUsSUFBSSxDQUFDdEMsS0FBTCxDQUFXdUIsU0FBYix5RUFBMEIsRUFIckM7QUFJRXZCLFVBQUFBLEtBQUssb0JBQ0FzQyxJQUFJLENBQUN0QyxLQURMLEVBRUE1SixLQUZBO0FBR0g2SixZQUFBQSxVQUFVLEVBQUU3SixLQUFLLENBQUM2SjtBQUhmO0FBSlA7QUFVRCxPQWZELENBRGEsQ0FBZjtBQWtCRCxLQXhHeUI7O0FBQUEsdUNBMEdiaFksTUFBRCxJQUF3QjtBQUNsQyxZQUFNO0FBQUVxSCxRQUFBQSxPQUFGO0FBQVcrUyxRQUFBQTtBQUFYLFVBQStCLEtBQUtsVyxLQUExQzs7QUFFQSxVQUFJLENBQUNsRSxNQUFELElBQVcsQ0FBQ0EsTUFBTSxDQUFDa2IsV0FBdkIsRUFBb0M7QUFDbEM7QUFDRDs7QUFFRCxZQUFNQyxVQUFVLEdBQUduYixNQUFNLENBQUMrQyxNQUFQLENBQWMwSSxLQUFqQztBQUNBLFlBQU0yUCxRQUFRLEdBQUdwYixNQUFNLENBQUNrYixXQUFQLENBQW1CelAsS0FBcEM7O0FBQ0EsVUFBSTBQLFVBQVUsS0FBS0MsUUFBbkIsRUFBNkI7QUFDM0I7QUFDRDs7QUFFRCxZQUFNQyxNQUFNLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXbFUsT0FBWCxDQUFmO0FBQ0EsWUFBTSxDQUFDbVUsT0FBRCxJQUFZSCxNQUFNLENBQUNJLE1BQVAsQ0FBY04sVUFBZCxFQUEwQixDQUExQixDQUFsQjtBQUNBRSxNQUFBQSxNQUFNLENBQUNJLE1BQVAsQ0FBY0wsUUFBZCxFQUF3QixDQUF4QixFQUEyQkksT0FBM0I7QUFDQXBCLE1BQUFBLGVBQWUsQ0FBQ2lCLE1BQUQsQ0FBZjtBQUNELEtBM0h5Qjs7QUFBQSw4Q0E2SFAsQ0FBQ2xOLEtBQUQsRUFBbUJwTCxNQUFuQixLQUFnRDtBQUNqRSxXQUFLbUIsS0FBTCxDQUFXOFUsZ0JBQVgsbUJBQ0tqVyxNQURMO0FBRUVnVixRQUFBQSxLQUFLLEVBQUU1SjtBQUZUO0FBSUQsS0FsSXlCOztBQUFBLG1EQW9JREEsS0FBRCxJQUErRDtBQUNyRixhQUFPcUIsa0VBQWdCLEdBQUdlLG1CQUFuQixDQUF1Q3BDLEtBQUssQ0FBQ0MsYUFBN0MsQ0FBUDtBQUNELEtBdEl5Qjs7QUFBQSxxREF3SUMvRyxPQUFELElBQTZEO0FBQ3JGLFlBQU1xVSxNQUF3QyxHQUFHLEVBQWpEOztBQUVBLFdBQUssTUFBTXZOLEtBQVgsSUFBb0I5RyxPQUFwQixFQUE2QjtBQUMzQixZQUFJLENBQUM0UCxrRkFBaUIsQ0FBQzlJLEtBQUssQ0FBQzRKLEtBQVAsQ0FBdEIsRUFBcUM7QUFDbkM7QUFDRDs7QUFFRCxZQUFJLENBQUN1RCxLQUFLLENBQUNLLE9BQU4sQ0FBY3hOLEtBQUssQ0FBQzRKLEtBQU4sQ0FBWUksVUFBMUIsQ0FBTCxFQUE0QztBQUMxQztBQUNEOztBQUVEaEssUUFBQUEsS0FBSyxDQUFDNEosS0FBTixDQUFZSSxVQUFaLENBQXVCeUQsT0FBdkIsQ0FBK0IsQ0FBQzlOLFNBQUQsRUFBWXJDLEtBQVosS0FBc0I7QUFDbkQsY0FBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNiO0FBQ0Q7O0FBQ0QsZ0JBQU1vUSxTQUFTLEdBQUcvTixTQUFTLENBQUM0TSxTQUFWLENBQW9CL1osTUFBcEIsQ0FBMkIsQ0FBM0IsQ0FBbEI7QUFDQSxnQkFBTXNOLEtBQUssR0FBR0gsU0FBUyxDQUFDSyxLQUFWLENBQWdCeE4sTUFBaEIsQ0FBdUIsQ0FBdkIsQ0FBZDs7QUFFQSxjQUFJbU4sU0FBUyxDQUFDNE0sU0FBVixDQUFvQi9YLElBQXBCLEtBQTZCLGVBQTdCLElBQWdEbUwsU0FBUyxDQUFDNE0sU0FBVixDQUFvQi9YLElBQXBCLEtBQTZCLGNBQWpGLEVBQWlHO0FBQy9GO0FBQ0Q7O0FBQ0QsY0FBSSxDQUFDK1ksTUFBTSxDQUFDek4sS0FBRCxDQUFYLEVBQW9CO0FBQ2xCeU4sWUFBQUEsTUFBTSxDQUFDek4sS0FBRCxDQUFOLEdBQWdCO0FBQ2R4RyxjQUFBQSxJQUFJLEVBQUVxUyxrRUFEUTtBQUVkYyxjQUFBQSxLQUFLLEVBQUUsQ0FDTDtBQUNFelcsZ0JBQUFBLEtBQUssRUFBRSxDQUFDNFgsUUFEVjtBQUVFQyxnQkFBQUEsS0FBSyxFQUFFcFksK0VBQWlDc1k7QUFGMUMsZUFESztBQUZPLGFBQWhCO0FBU0Q7O0FBRURSLFVBQUFBLE1BQU0sQ0FBQ3pOLEtBQUQsQ0FBTixDQUFjMk0sS0FBZCxDQUFvQi9WLElBQXBCLENBQXlCO0FBQ3ZCVixZQUFBQSxLQUFLLEVBQUUwWCxTQURnQjtBQUV2QkcsWUFBQUEsS0FBSyxFQUFFcFksNkVBQStCc1k7QUFGZixXQUF6QjtBQUlELFNBMUJEO0FBMkJEOztBQUVELGFBQU9SLE1BQVA7QUFDRCxLQWxMeUI7O0FBR3hCLFNBQUsvYixLQUFMLEdBQWE7QUFBRXdjLE1BQUFBLFlBQVksRUFBRTtBQUFoQixLQUFiO0FBQ0Q7O0FBZ0xEckQsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFRSxNQUFBQSxnQkFBRjtBQUFvQkgsTUFBQUEsWUFBcEI7QUFBa0N4UixNQUFBQTtBQUFsQyxRQUE4QyxLQUFLbkQsS0FBekQ7QUFDQSxVQUFNa1ksZ0JBQWdCLEdBQUcsS0FBS0MsdUJBQUwsQ0FBNkJoVixPQUE3QixDQUF6QjtBQUVBLHdCQUNFLHdEQUFDLGlFQUFEO0FBQWlCLGVBQVMsRUFBRSxLQUFLaVYsU0FBakM7QUFBQSw2QkFDRSx3REFBQywyREFBRDtBQUFXLG1CQUFXLEVBQUMsa0JBQXZCO0FBQTBDLGlCQUFTLEVBQUMsVUFBcEQ7QUFBQSxrQkFDSUMsUUFBRCxJQUFjO0FBQ2IsOEJBQ0U7QUFBSyxlQUFHLEVBQUVBLFFBQVEsQ0FBQ0M7QUFBbkIsYUFBaUNELFFBQVEsQ0FBQ0UsY0FBMUM7QUFBQSx1QkFDR3BWLE9BQU8sQ0FBQzFGLEdBQVIsQ0FBWSxDQUFDd00sS0FBRCxFQUFRMUMsS0FBUixLQUFrQjtBQUFBOztBQUM3QixvQkFBTXRJLElBQWUsZ0RBQUcsS0FBS2UsS0FBTCxDQUFXZixJQUFkLHFEQUFHLGlCQUFrQmdMLEtBQUssQ0FBQ0YsS0FBeEIsQ0FBSCx5RUFBcUM7QUFDeEQzSyxnQkFBQUEsTUFBTSxFQUFFLEVBRGdEO0FBRXhEM0QsZ0JBQUFBLEtBQUssRUFBRW9DLGtFQUF1QjJhO0FBRjBCLGVBQTFEO0FBSUEsb0JBQU1DLFVBQVUsR0FBRyxLQUFLQyxxQkFBTCxDQUEyQnpPLEtBQTNCLENBQW5COztBQUVBLGtCQUFJLENBQUN3TyxVQUFMLEVBQWlCO0FBQ2Ysb0NBQ0Usd0RBQUMsa0JBQUQ7QUFFRSx1QkFBSyxFQUFFbFIsS0FGVDtBQUdFLHVCQUFLLEVBQUUwQyxLQUFLLENBQUM0SixLQUhmO0FBSUUsb0NBQWtCLEVBQUUsTUFBTTtBQUN4QiwwQkFBTUYsaUJBQWlCLEdBQUdULHFGQUFnQixHQUFHN0csbUJBQW5CLENBQXVDLElBQXZDLENBQTFCOztBQUNBLHdCQUFJc0gsaUJBQUosRUFBdUI7QUFDckIsMkJBQUtnRixrQkFBTCxDQUF3QmhGLGlCQUF4QixFQUEyQ3BNLEtBQTNDO0FBQ0Q7QUFDRixtQkFUSDtBQVVFLCtCQUFhLEVBQUUsTUFBTTtBQUNuQix5QkFBS3FSLGFBQUwsQ0FBbUIzTyxLQUFuQjtBQUNEO0FBWkgsbUJBQ1EsR0FBRUEsS0FBSyxDQUFDRixLQUFNLElBQUd4QyxLQUFNLEVBRC9CLENBREY7QUFnQkQ7O0FBRUQsa0NBQ0Usd0RBQUMsdURBQUQ7QUFDRSxxQkFBSyxFQUFFQSxLQURUO0FBR0UsMEJBQVUsRUFBRWtSLFVBSGQ7QUFJRSxvQkFBSSxFQUFFeFosSUFKUjtBQUtFLHFCQUFLLEVBQUVnTCxLQUxUO0FBTUUsNkJBQWEsRUFBRSxLQUFLOEIsYUFOdEI7QUFPRSw2QkFBYSxFQUFFLEtBQUs2TSxhQVB0QjtBQVFFLHVCQUFPLEVBQUV6VixPQVJYO0FBU0Usa0NBQWtCLEVBQUUsS0FBS3dWLGtCQVQzQjtBQVVFLGdDQUFnQixFQUFFN0QsZ0JBVnBCO0FBV0UsNEJBQVksRUFBRUgsWUFYaEI7QUFZRSxpQ0FBaUIsRUFBRSxLQUFLa0UsaUJBWjFCO0FBYUUsMEJBQVUsRUFBRVgsZ0JBQWdCLENBQUNqTyxLQUFLLENBQUNGLEtBQVAsQ0FiOUI7QUFjRSxpQ0FBaUIsRUFBRSxLQUFLK087QUFkMUIsaUJBRVEsR0FBRTdPLEtBQUssQ0FBQ0YsS0FBTSxJQUFHeEMsS0FBTSxFQUYvQixDQURGO0FBa0JELGFBNUNBLENBREgsRUE4Q0c4USxRQUFRLENBQUNVLFdBOUNaO0FBQUEsYUFERjtBQWtERDtBQXBESDtBQURGLE1BREY7QUEwREQ7O0FBblB3RDs7QUFzUDNELFNBQVNsQyxTQUFULENBQW1CVixJQUFuQixFQUFxQ3ZDLEdBQXJDLEVBQWtGO0FBQ2hGLDJCQUNLdUMsSUFETDtBQUVFdEMsSUFBQUEsS0FBSyxFQUFFNEIsNENBQUksQ0FBQ1UsSUFBSSxDQUFDdEMsS0FBTixFQUFhLFlBQWIsQ0FGYjtBQUdFM0osSUFBQUEsYUFBYSxFQUFFMEo7QUFIakI7QUFLRDs7QUFTRCxNQUFNb0Ysa0JBQWtCLEdBQUcsQ0FBQztBQUFFelIsRUFBQUEsS0FBRjtBQUFTMFIsRUFBQUEsa0JBQVQ7QUFBNkJMLEVBQUFBLGFBQTdCO0FBQTRDL0UsRUFBQUE7QUFBNUMsQ0FBRCxLQUFrRjtBQUMzRyxRQUFNOUosS0FBSyxHQUFHOEosS0FBSyxDQUFDOUosS0FBcEI7QUFFQSxRQUFNLENBQUNtUCxXQUFELEVBQWNDLGNBQWQsSUFBZ0NqWSwrQ0FBUSxDQUFVLEtBQVYsQ0FBOUM7O0FBRUEsUUFBTWtZLGFBQWEsR0FBRyxNQUFNO0FBQzFCRCxJQUFBQSxjQUFjLENBQUVFLElBQUQsSUFBVSxDQUFDQSxJQUFaLENBQWQ7QUFDRCxHQUZEOztBQUlBLFFBQU1DLHNCQUFzQixHQUFHLE1BQU07QUFDbkNMLElBQUFBLGtCQUFrQjtBQUNuQixHQUZEOztBQUlBLHNCQUNFLHdEQUFDLDREQUFEO0FBQUEsMkJBQ0UseURBQUMsc0dBQUQ7QUFBbUIsV0FBSyxFQUFFbFAsS0FBMUI7QUFBaUMsZUFBUyxNQUExQztBQUEyQyxXQUFLLEVBQUV4QyxLQUFsRDtBQUF5RCxRQUFFLEVBQUV3QyxLQUE3RDtBQUFvRSxZQUFNLE1BQTFFO0FBQUEsOEJBQ0UseURBQUMsNkNBQUQ7QUFDRSxlQUFPLEVBQUMsa0NBRFY7QUFFRSxtQkFBVyxFQUNULG1HQUhKO0FBQUEsZ0VBTUUsd0RBQUMsb0RBQUQ7QUFBQSxpQ0FDRSx3REFBQyw2Q0FBRDtBQUFNLGdCQUFJLEVBQUM7QUFBWDtBQURGLFVBTkYsZ0JBU0UseURBQUMscURBQUQ7QUFBQSxrQ0FDRSx3REFBQywrQ0FBRDtBQUFxQixtQkFBTyxFQUFDLFdBQTdCO0FBQXlDLG1CQUFPLEVBQUV1UCxzQkFBbEQ7QUFBQTtBQUFBLGFBQVksUUFBWixDQURGLGVBSUUsd0RBQUMsK0NBQUQ7QUFBcUIsbUJBQU8sRUFBQyxhQUE3QjtBQUEyQyxtQkFBTyxFQUFFVixhQUFwRDtBQUFBO0FBQUEsYUFBWSxRQUFaLENBSkY7QUFBQSxVQVRGLGVBaUJFLHdEQUFDLDhEQUFEO0FBQUEsaUNBQ0Usd0RBQUMsK0NBQUQ7QUFFRSxtQkFBTyxFQUFFUSxhQUZYO0FBR0UsZ0JBQUksRUFBRUYsV0FBVyxHQUFHLFVBQUgsR0FBZ0IsWUFIbkM7QUFJRSxnQkFBSSxFQUFDLE1BSlA7QUFLRSxnQkFBSSxFQUFDLElBTFA7QUFBQTtBQUFBLGFBQ00sU0FETjtBQURGLFVBakJGO0FBQUEsUUFERixFQThCR0EsV0FBVyxpQkFDVjtBQUFBLCtCQUNFO0FBQUEsaUNBQ0U7QUFBQSxzQkFBTzlWLElBQUksQ0FBQ21XLFNBQUwsQ0FBZTFGLEtBQWYsRUFBc0IsSUFBdEIsRUFBNEIsQ0FBNUI7QUFBUDtBQURGO0FBREYsUUEvQko7QUFBQTtBQURGLElBREY7QUEwQ0QsQ0F2REQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1NBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFDQTtBQUNBO0FBR0E7QUFHQTs7QUFrQk8sTUFBTW1DLFlBQXVCLEdBQUcsQ0FBQztBQUN0Qy9XLEVBQUFBLElBRHNDO0FBRXRDd1osRUFBQUEsVUFGc0M7QUFHdENsUixFQUFBQSxLQUhzQztBQUl0Q29SLEVBQUFBLGtCQUpzQztBQUt0QzVNLEVBQUFBLGFBTHNDO0FBTXRDOE0sRUFBQUEsaUJBTnNDO0FBT3RDbEUsRUFBQUEsWUFQc0M7QUFRdENpRSxFQUFBQSxhQVJzQztBQVN0QzlELEVBQUFBLGdCQVRzQztBQVV0QzdLLEVBQUFBLEtBVnNDO0FBV3RDOUcsRUFBQUEsT0FYc0M7QUFZdENrVCxFQUFBQSxVQVpzQztBQWF0Q3lDLEVBQUFBO0FBYnNDLENBQUQsS0FjakM7QUFDSixRQUFNclcsTUFBTSxHQUFHNUgsdURBQVUsQ0FBQzZILFNBQUQsQ0FBekI7QUFDQSxRQUFNa1gsWUFBWSxHQUFHN0csa0ZBQWlCLENBQUM5SSxLQUFLLENBQUM0SixLQUFQLENBQXRDO0FBQ0EsUUFBTSxDQUFDZ0csUUFBRCxFQUFXQyxjQUFYLElBQTZCNVksK0NBQVEsQ0FBd0IwWSxZQUFZLEdBQUcvWixtREFBSCxHQUFXQyx3REFBL0MsQ0FBM0M7O0FBRUEsUUFBTWlhLGdCQUFnQixHQUFHLENBQUM5UCxLQUFELEVBQW9CMUMsS0FBcEIsS0FBaUQ7QUFBQTs7QUFDeEUsUUFBSXdMLGtGQUFpQixDQUFDOUksS0FBSyxDQUFDNEosS0FBUCxDQUFqQixJQUFrQyxDQUFDZ0YsaUJBQXZDLEVBQTBEO0FBQ3hELGFBQU8sSUFBUDtBQUNEOztBQUVELHdCQUNFLHVEQUFDLGdFQUFEO0FBQ0UsZUFBUywyQkFBRTVPLEtBQUssQ0FBQ29MLGlCQUFSLHlFQUE2QjNDLDBFQUEyQixFQURuRTtBQUVFLGNBQVEsRUFBR3NILEtBQUQsSUFBV25CLGlCQUFpQixDQUFDbUIsS0FBRCxFQUFRelMsS0FBUjtBQUZ4QyxNQURGO0FBTUQsR0FYRDs7QUFhQSxzQkFDRTtBQUFLLGFBQVMsRUFBRTlFLE1BQU0sQ0FBQytNLE9BQXZCO0FBQUEsMkJBQ0UsdURBQUMsd0ZBQUQ7QUFDRSxjQUFRLE1BRFY7QUFFRSxnQkFBVSxFQUFFaUosVUFGZDtBQUdFLHdCQUFrQixFQUFFLENBQUNtQixZQUFELEdBQWlCeE4sUUFBRCxJQUFjdU0sa0JBQWtCLENBQUN2TSxRQUFELEVBQVc3RSxLQUFYLENBQWhELEdBQW9FbkwsU0FIMUY7QUFJRSxRQUFFLEVBQUU2TixLQUFLLENBQUNGLEtBSlo7QUFLRSxXQUFLLEVBQUV4QyxLQUxUO0FBT0UsVUFBSSxFQUFFdEksSUFQUjtBQVFFLFdBQUssRUFBRXVhLGlEQUFTLENBQUN2UCxLQUFLLENBQUM0SixLQUFQLENBUmxCO0FBU0UsY0FBUSxFQUFHNUosS0FBRCxJQUFXOEIsYUFBYSxDQUFDOUIsS0FBRCxFQUFRMUMsS0FBUixDQVRwQztBQVVFLG1CQUFhLEVBQUVxUixhQVZqQjtBQVdFLGdCQUFVLEVBQUUsTUFBTTlELGdCQUFnQixDQUFDMEUsaURBQVMsQ0FBQ3ZQLEtBQUQsQ0FBVixDQVhwQztBQVlFLGdCQUFVLEVBQUUwSyxZQVpkO0FBYUUsYUFBTyxFQUFFeFIsT0FiWDtBQWNFLHdCQUFrQixFQUFFLE1BQU00VyxnQkFBZ0IsQ0FBQzlQLEtBQUQsRUFBUTFDLEtBQVIsQ0FkNUM7QUFlRSxTQUFHLEVBQUU4RCxrRUFmUDtBQWdCRSxtQkFBYSxFQUNYcE0sSUFBSSxDQUFDeEQsS0FBTCxLQUFlb0Msa0VBQWYsZ0JBQ0UsdURBQUMsbURBQUQ7QUFDRSxZQUFJLEVBQUVvQixJQURSO0FBRUUsbUJBQVcsRUFBRTZhLGNBRmY7QUFHRSxvQkFBWSxFQUFFRCxRQUhoQjtBQUlFLGtCQUFVLEVBQUV4RCxVQUpkO0FBS0UsMEJBQWtCLEVBQUdBLFVBQUQsSUFBZ0J5QyxpQkFBaUIsQ0FBQ3pDLFVBQUQsRUFBYTlPLEtBQWI7QUFMdkQsUUFERixHQVFJLElBekJSO0FBMkJFLHNCQUFnQixFQUFFO0FBM0JwQixPQU1PMEMsS0FBSyxDQUFDRixLQU5iO0FBREYsSUFERjtBQWlDRCxDQWpFTTtBQW1FQSxNQUFNZ00saUJBQXlCLEdBQUcsQ0FBQztBQUFFOVksRUFBQUE7QUFBRixDQUFELEtBQWtCO0FBQ3pELFFBQU13RixNQUFNLEdBQUc1SCx1REFBVSxDQUFDNkgsU0FBRCxDQUF6QjtBQUNBLHNCQUFPO0FBQUssYUFBUyxFQUFFRCxNQUFNLENBQUMrTSxPQUF2QjtBQUFBLGNBQWlDdlM7QUFBakMsSUFBUDtBQUNELENBSE07O0FBS1AsTUFBTXlGLFNBQVMsR0FBSXRGLEtBQUQsS0FBMkI7QUFDM0NvUyxFQUFBQSxPQUFPLEVBQUVqViw2Q0FBSTtBQUNmO0FBQ0EscUJBQXFCNkMsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUN0Qyx3QkFBd0JELEtBQUssQ0FBQ21JLE1BQU4sQ0FBYUcsTUFBYixDQUFvQjhNLE1BQU87QUFDbkQscUJBQXFCcFYsS0FBSyxDQUFDd0ksS0FBTixDQUFZQyxZQUFaLENBQXlCLENBQXpCLENBQTRCO0FBQ2pEO0FBTjZDLENBQTNCLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7QUNqSEE7QUFDQTtBQUdBOzs7QUFRTyxNQUFNK0MsaUJBQTZDLEdBQUcsQ0FBQztBQUFFNUwsRUFBQUEsS0FBRjtBQUFTbWQsRUFBQUEsTUFBVDtBQUFpQmxkLEVBQUFBLFFBQWpCO0FBQTJCbWQsRUFBQUE7QUFBM0IsQ0FBRCxLQUE4QztBQUN6RyxRQUFNM1gsTUFBTSxHQUFHNUgsdURBQVUsQ0FBQzZILFNBQUQsQ0FBekI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUQsTUFBTSxDQUFDNFgsTUFBdkI7QUFBQSw0QkFDRTtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBRTVYLE1BQU0sQ0FBQzBYLE1BQXhCO0FBQUEsa0JBQWlDQTtBQUFqQztBQURGLE1BREYsZUFJRTtBQUFLLGVBQVMsRUFBRTFYLE1BQU0sQ0FBQzZYLE9BQXZCO0FBQUEsNkJBQ0Usd0RBQUMsaURBQUQ7QUFBVSxhQUFLLEVBQUV0ZCxLQUFqQjtBQUF3QixpQkFBUyxFQUFFeUYsTUFBTSxDQUFDOFgsUUFBMUM7QUFBQSxtQkFDR0gsV0FBVyxpQkFBSTtBQUFHLG1CQUFTLEVBQUUzWCxNQUFNLENBQUMyWCxXQUFyQjtBQUFBLG9CQUFtQ0E7QUFBbkMsVUFEbEIsRUFFR25kLFFBRkg7QUFBQTtBQURGLE1BSkY7QUFBQSxJQURGO0FBYUQsQ0FoQk07O0FBa0JQLE1BQU15RixTQUFTLEdBQUl0RixLQUFELEtBQTJCO0FBQzNDbWQsRUFBQUEsUUFBUSxFQUFFaGdCLDZDQUFJO0FBQ2hCO0FBQ0E7QUFDQSxxQkFBcUI2QyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxHQUFkLENBQW1CO0FBQ3hDO0FBQ0EsR0FONkM7QUFPM0NnZCxFQUFBQSxNQUFNLEVBQUU5Ziw2Q0FBSTtBQUNkO0FBQ0E7QUFDQSxpQkFBaUI2QyxLQUFLLENBQUNtVSxXQUFOLENBQWtCaFIsTUFBbEIsQ0FBeUJpYSxFQUFHO0FBQzdDO0FBQ0Esb0JBQW9CcGQsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNyQztBQUNBLEdBZDZDO0FBZTNDK2MsRUFBQUEsV0FBVyxFQUFFN2YsNkNBQUk7QUFDbkIsbUJBQW1CNkMsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNwQyxHQWpCNkM7QUFrQjNDOGMsRUFBQUEsTUFBTSxFQUFFNWYsNkNBQUk7QUFDZDtBQUNBLGFBQWE2QyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQzlCLGNBQWNELEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDL0IsbUJBQW1CRCxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3BDLHFCQUFxQkQsS0FBSyxDQUFDQyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUN0QztBQUNBLGFBQWFELEtBQUssQ0FBQ21JLE1BQU4sQ0FBYWtWLElBQWIsQ0FBa0JDLFdBQVk7QUFDM0Msd0JBQXdCdGQsS0FBSyxDQUFDbUksTUFBTixDQUFhQyxVQUFiLENBQXdCbVYsTUFBTztBQUN2RCxpQkFBaUJ2ZCxLQUFLLENBQUN3ZCxVQUFOLENBQWlCemEsSUFBakIsQ0FBc0IwYSxFQUFHO0FBQzFDLG9CQUFvQnpkLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDckMsR0E3QjZDO0FBOEIzQ2lkLEVBQUFBLE9BQU8sRUFBRS9mLDZDQUFJO0FBQ2Y7QUFDQTtBQWhDNkMsQ0FBM0IsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7QUFRQSxNQUFNNmdCLElBQUksR0FBRyxDQUFDO0FBQUV4YSxFQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQlgsRUFBQUEsS0FBSyxFQUFFO0FBQXhCLENBQUQsQ0FBYjtBQUVPLE1BQU1xQyxhQUF3QixHQUFHLENBQUM7QUFBRStZLEVBQUFBO0FBQUYsQ0FBRCxLQUFpQjtBQUN2RCxRQUFNLENBQUNDLFNBQUQsRUFBWUMsWUFBWixJQUE0QnJhLCtDQUFRLENBQUMsTUFBRCxDQUExQztBQUNBLFFBQU07QUFBRXlJLElBQUFBO0FBQUYsTUFBZWpELCtEQUFjLEVBQW5DO0FBQ0EsUUFBTWpFLE1BQU0sR0FBRzVILHVEQUFVLENBQUMyZ0IsWUFBRCxDQUF6Qjs7QUFFQSxRQUFNQyxPQUFPLEdBQUlDLFVBQUQsSUFBZ0M7QUFDOUM7QUFDQTtBQUNBLFNBQUssTUFBTXZYLEdBQVgsSUFBa0J1WCxVQUFsQixFQUE4QjtBQUM1QjtBQUNBL1IsTUFBQUEsUUFBUSxDQUFDeEYsR0FBRCxFQUFNdVgsVUFBVSxDQUFDdlgsR0FBRCxDQUFoQixDQUFSO0FBQ0Q7O0FBQ0RrWCxJQUFBQSxPQUFPO0FBQ1IsR0FSRDs7QUFVQSxzQkFDRSx1REFBQywrQ0FBRDtBQUNFLFNBQUssRUFBQyxvQkFEUjtBQUVFLFlBQVEsZUFDTjtBQUFLLGVBQVMsRUFBRTVZLE1BQU0sQ0FBQ2taLFFBQXZCO0FBQUEsNkJBQ0UsdURBQUMscUJBQUQ7QUFBdUIsb0JBQVksRUFBRUosWUFBckM7QUFBbUQsaUJBQVMsRUFBRUQ7QUFBOUQ7QUFERixNQUhKO0FBT0UsV0FBTyxFQUFFRCxPQVBYO0FBQUEsY0FTR0MsU0FBUyxLQUFLLE1BQWQsaUJBQXdCLHVEQUFDLGdCQUFEO0FBQWtCLGNBQVEsRUFBRUc7QUFBNUI7QUFUM0IsSUFERjtBQWFELENBNUJNOztBQW1DUCxNQUFNRyxxQkFBd0MsR0FBRyxDQUFDO0FBQUVOLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFELEtBQWlDO0FBQ2hGLHNCQUNFLHVEQUFDLGdEQUFEO0FBQUEsY0FDR0gsSUFBSSxDQUFDM2QsR0FBTCxDQUFTLENBQUNvZSxHQUFELEVBQU10VSxLQUFOLEtBQWdCO0FBQ3hCLDBCQUNFLHVEQUFDLDRDQUFEO0FBRUUsYUFBSyxFQUFFc1UsR0FBRyxDQUFDamIsS0FGYjtBQUdFLGFBQUssRUFBRWliLEdBQUcsQ0FBQzViLEtBSGI7QUFJRSxtQkFBVyxFQUFFLE1BQU1zYixZQUFZLENBQUNNLEdBQUcsQ0FBQzViLEtBQUwsQ0FKakM7QUFLRSxjQUFNLEVBQUVxYixTQUFTLEtBQUtPLEdBQUcsQ0FBQzViO0FBTDVCLFNBQ1EsR0FBRTRiLEdBQUcsQ0FBQzViLEtBQU0sSUFBR3NILEtBQU0sRUFEN0IsQ0FERjtBQVNELEtBVkE7QUFESCxJQURGO0FBZUQsQ0FoQkQ7O0FBc0JBLE1BQU11VSxnQkFBa0MsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFrQjtBQUMzRCxRQUFNdFosTUFBTSxHQUFHNUgsdURBQVUsQ0FBQ21oQixZQUFELENBQXpCO0FBQ0EsUUFBTTtBQUFFbkwsSUFBQUE7QUFBRixNQUFnQm5LLCtEQUFjLEVBQXBDO0FBQ0EsUUFBTSxDQUFDdVYsZUFBRCxFQUFrQkMsa0JBQWxCLElBQXdDaGIsK0NBQVEsQ0FBQzRaLDZDQUFJLENBQUNqSyxTQUFTLEVBQVYsQ0FBTCxDQUF0RDs7QUFFQSxRQUFNNEssT0FBTyxHQUFHLE1BQU07QUFDcEJNLElBQUFBLFFBQVEsQ0FBQ2hCLDZDQUFJLENBQUNrQixlQUFELENBQUwsQ0FBUjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRXhaLE1BQU0sQ0FBQzBaLFdBQXZCO0FBQUEsNkJBQ0UsdURBQUMsK0NBQUQ7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUVWLE9BQS9CO0FBQUE7QUFBQTtBQURGLE1BREYsZUFPRTtBQUFLLGVBQVMsRUFBRWhaLE1BQU0sQ0FBQzZYLE9BQXZCO0FBQUEsNkJBQ0UsdURBQUMsb0VBQUQ7QUFBVyxvQkFBWSxNQUF2QjtBQUFBLGtCQUNHLENBQUM7QUFBRS9ILFVBQUFBO0FBQUYsU0FBRCxrQkFDQyx1REFBQyxtREFBRDtBQUNFLGVBQUssRUFBQyxNQURSO0FBRUUsZ0JBQU0sRUFBRUEsTUFGVjtBQUdFLGtCQUFRLEVBQUMsTUFIWDtBQUlFLGVBQUssRUFBRTBKLGVBSlQ7QUFLRSxnQkFBTSxFQUFFQyxrQkFMVjtBQU1FLHVCQUFhLEVBQUU7QUFDYkUsWUFBQUEsT0FBTyxFQUFFO0FBQ1BDLGNBQUFBLE9BQU8sRUFBRTtBQURGO0FBREk7QUFOakI7QUFGSjtBQURGLE1BUEY7QUFBQSxJQURGO0FBNEJELENBckNEOztBQXVDQSxNQUFNTCxZQUFZLEdBQUk1ZSxLQUFELEtBQTJCO0FBQzlDa2QsRUFBQUEsT0FBTyxFQUFFL2YsNkNBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI2QyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3RDLEdBTmdEO0FBTzlDOGUsRUFBQUEsV0FBVyxFQUFFNWhCLDZDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQVZnRCxDQUEzQixDQUFyQjs7QUFhQSxNQUFNaWhCLFlBQVksR0FBRyxPQUFPO0FBQzFCRyxFQUFBQSxRQUFRLEVBQUVwaEIsNkNBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFMNEIsQ0FBUCxDQUFyQjs7Ozs7Ozs7Ozs7Ozs7QUM5SEE7QUFHQTs7QUFnQk8sTUFBTTBMLGFBQXdCLEdBQUcsQ0FBQztBQUN2Q2hHLEVBQUFBLEtBRHVDO0FBRXZDQyxFQUFBQSxRQUZ1QztBQUd2QzJKLEVBQUFBLE9BSHVDO0FBSXZDMEYsRUFBQUEsU0FKdUM7QUFLdkN3SixFQUFBQSxXQUx1QztBQU12Q3pHLEVBQUFBLEtBTnVDO0FBT3ZDaEQsRUFBQUEsTUFQdUM7QUFRdkNnTixFQUFBQSxjQVJ1QztBQVN2Q0MsRUFBQUEsUUFBUSxHQUFHLEtBVDRCO0FBVXZDQyxFQUFBQSxRQUFRLEdBQUcsV0FWNEI7QUFXdkMsZ0JBQWNwVztBQVh5QixDQUFELEtBWWxDO0FBQ0osUUFBTSxDQUFDcVcsUUFBRCxFQUFXQyxXQUFYLElBQTBCeGIsK0NBQVEsQ0FBQ29PLE1BQUQsQ0FBeEM7QUFFQXhWLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUl3VixNQUFKLEVBQVk7QUFDVm9OLE1BQUFBLFdBQVcsQ0FBQ3BOLE1BQUQsQ0FBWDtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNBLE1BQUQsQ0FKTSxDQUFUOztBQU1BLFFBQU1xTixRQUFRLEdBQUdsZCw4Q0FBTyxDQUN0QixNQUFzQyxDQUFDLEdBQUdvSyxPQUFKLEVBQWE7QUFBRTVKLElBQUFBLEtBQUssRUFBRSxTQUFUO0FBQW9CVyxJQUFBQSxLQUFLLEVBQUU0YjtBQUEzQixHQUFiLENBRGhCLEVBRXRCLENBQUMzUyxPQUFELEVBQVUyUyxRQUFWLENBRnNCLENBQXhCOztBQUtBLE1BQUlDLFFBQUosRUFBYztBQUNaLHdCQUNFLHVEQUFDLDhDQUFEO0FBQ0Usb0JBQVlyVyxTQURkO0FBRUUsV0FBSyxFQUFFa00sS0FGVDtBQUdFLGVBQVMsRUFBRSxDQUFDaEQsTUFIZDtBQUlFLFdBQUssRUFBRXJQLEtBQUssSUFBSSxFQUpsQjtBQUtFLGlCQUFXLEVBQUU4WSxXQUxmO0FBTUUsZUFBUyxFQUFFeEosU0FOYjtBQU9FLGNBQVEsRUFBRWdOLFFBUFo7QUFRRSxjQUFRLEVBQUd6WCxDQUFELElBQU81RSxRQUFRLENBQUU0RSxDQUFDLENBQUM4WCxNQUFILENBQStCM2MsS0FBaEM7QUFSM0IsTUFERjtBQVlELEdBYkQsTUFhTztBQUNMLHdCQUNFLHVEQUFDLCtDQUFEO0FBQ0Usb0JBQVltRyxTQURkO0FBRUUsV0FBSyxFQUFFa00sS0FGVDtBQUdFLGFBQU8sRUFBRXFLLFFBSFg7QUFJRSxXQUFLLEVBQUUxYyxLQUpUO0FBS0UsZUFBUyxFQUFFc1AsU0FMYjtBQU1FLGlCQUFXLEVBQUV3SixXQU5mO0FBT0UsY0FBUSxFQUFFd0QsUUFQWjtBQVFFLGNBQVEsRUFBR00sR0FBRCxJQUEwQjtBQUNsQyxjQUFNNWMsS0FBSyxHQUFHNGMsR0FBSCxhQUFHQSxHQUFILHVCQUFHQSxHQUFHLENBQUU1YyxLQUFuQjs7QUFDQSxZQUFJQSxLQUFLLEtBQUssU0FBZCxFQUF5QjtBQUN2QnljLFVBQUFBLFdBQVcsQ0FBQyxJQUFELENBQVg7O0FBQ0EsY0FBSUosY0FBSixFQUFvQjtBQUNsQkEsWUFBQUEsY0FBYyxDQUFDLElBQUQsQ0FBZDtBQUNEOztBQUNEcGMsVUFBQUEsUUFBUSxDQUFDLEVBQUQsQ0FBUjtBQUNELFNBTkQsTUFNTztBQUNMQSxVQUFBQSxRQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFuQkgsTUFERjtBQXVCRDtBQUNGLENBaEVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlA7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7QUFZTyxNQUFNMFosVUFBcUIsR0FBRyxDQUFDO0FBQUUxYSxFQUFBQSxJQUFGO0FBQVFpZSxFQUFBQSxZQUFSO0FBQXNCQyxFQUFBQSxXQUF0QjtBQUFtQ0MsRUFBQUEsa0JBQW5DO0FBQXVEL0csRUFBQUE7QUFBdkQsQ0FBRCxLQUF5RTtBQUM1RyxRQUFNLENBQUN4TSxPQUFELEVBQVV3VCxVQUFWLElBQXdCbmMsK0NBQVEsQ0FBZTtBQUNuRG9jLElBQUFBLFVBQVUsRUFBRSxDQUR1QztBQUVuREMsSUFBQUEsVUFBVSxFQUFFO0FBRnVDLEdBQWYsQ0FBdEM7QUFJQSxRQUFNQyxTQUFTLEdBQUdQLGlFQUFZLENBQUNoZSxJQUFELEVBQU9pZSxZQUFQLEVBQXFCclQsT0FBTyxDQUFDeVQsVUFBN0IsQ0FBOUI7QUFDQSxRQUFNN2EsTUFBTSxHQUFHNUgsdURBQVUsQ0FBQzZILFNBQVMsQ0FBQzhhLFNBQUQsQ0FBVixDQUF6QjtBQUVBLFFBQU0sQ0FBQzFMLFdBQUQsRUFBYzJMLGNBQWQsSUFBZ0N2YywrQ0FBUSxDQUFtQndjLGtCQUFrQixDQUFDckgsVUFBRCxFQUFhcFgsSUFBYixDQUFyQyxDQUE5QztBQUVBbkYsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QyakIsSUFBQUEsY0FBYyxDQUFFM0wsV0FBRCxzQkFDVkEsV0FEVTtBQUViQyxNQUFBQSxRQUFRLG9CQUNIRCxXQUFXLENBQUNDLFFBRFQ7QUFFTnNFLFFBQUFBLFVBQVUsRUFBRUEsVUFGTjtBQUdOc0gsUUFBQUEsSUFBSSxFQUFFQyxXQUFXLENBQUMzZSxJQUFELENBSFg7QUFJTnFRLFFBQUFBLE1BQU0sb0JBQ0R3QyxXQUFXLENBQUNDLFFBQVosQ0FBcUJ6QyxNQURwQjtBQUVKdU8sVUFBQUEsZUFBZSxFQUFFO0FBQ2Z0YSxZQUFBQSxJQUFJLEVBQUV1Wix5RUFBNEJnQjtBQURuQjtBQUZiO0FBSkE7QUFGSyxNQUFELENBQWQ7QUFjRCxHQWZRLEVBZU4sQ0FBQ3pILFVBQUQsRUFBYW9ILGNBQWIsRUFBNkJ4ZSxJQUE3QixDQWZNLENBQVQ7QUFpQkEsUUFBTThlLE9BQXFCLEdBQUd0ZSw4Q0FBTyxDQUNuQyxPQUFPO0FBQ0x1ZSxJQUFBQSxRQUFRLEVBQUVoQiwyREFETDtBQUVMaUIsSUFBQUEsaUJBQWlCLEVBQUUsSUFGZDtBQUdMYixJQUFBQSxrQkFBa0IsRUFBRUE7QUFIZixHQUFQLENBRG1DLEVBTW5DLENBQUNBLGtCQUFELENBTm1DLENBQXJDOztBQVNBLE1BQUksQ0FBQ3ZULE9BQUQsSUFBWSxDQUFDNUssSUFBakIsRUFBdUI7QUFDckIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUV3RCxNQUFNLENBQUMrTSxPQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFL00sTUFBTSxDQUFDeWIsV0FBdkI7QUFBQSw2QkFDRSx1REFBQyw2RUFBRDtBQUF5QixnQkFBUSxFQUFFZixXQUFuQztBQUFnRCxhQUFLLEVBQUVEO0FBQXZEO0FBREYsTUFERixlQUlFLHVEQUFDLG9FQUFEO0FBQUEsZ0JBQ0csQ0FBQztBQUFFNUssUUFBQUE7QUFBRixPQUFELEtBQWU7QUFDZCxZQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLGlCQUFPLElBQVA7QUFDRDs7QUFDRCw0QkFDRTtBQUFLLGVBQUssRUFBRTtBQUFFQyxZQUFBQSxNQUFNLEVBQUcsR0FBRWlMLFNBQVUsSUFBdkI7QUFBNEJsTCxZQUFBQSxLQUFLLEVBQUcsR0FBRUEsS0FBTTtBQUE1QyxXQUFaO0FBQUEsaUNBQ0UsdURBQUMsNkRBQUQ7QUFBc0IsaUJBQUssRUFBRXlMLE9BQTdCO0FBQUEsbUNBQ0UsdURBQUMsMkRBQUQ7QUFDRSxvQkFBTSxFQUFFUCxTQURWO0FBRUUsbUJBQUssRUFBRWxMLEtBRlQ7QUFHRSxrQkFBSSxFQUFFclQsSUFIUjtBQUlFLHNCQUFRLEVBQUVpZSxZQUpaO0FBS0UsbUJBQUssRUFBQyxPQUxSO0FBTUUsNkJBQWUsRUFBRUcsVUFObkI7QUFPRSxxQkFBTyxFQUFFeFQsT0FQWDtBQVFFLHlCQUFXLEVBQUVpSTtBQVJmO0FBREY7QUFERixVQURGO0FBZ0JEO0FBckJILE1BSkY7QUFBQSxJQURGO0FBOEJELENBdEVNOztBQXdFUCxNQUFNcFAsU0FBUyxHQUFJeWIsU0FBRCxJQUF3Qi9nQixLQUFELEtBQTJCO0FBQ2xFb1MsRUFBQUEsT0FBTyxFQUFFalYsNkNBQUk7QUFDZixpQkFBaUI2QyxLQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ2xDLGNBQWM4Z0IsU0FBUyxHQUFHL2dCLEtBQUssQ0FBQ0MsT0FBTixDQUFjK2dCLFFBQWQsR0FBeUIsQ0FBRTtBQUNyRCxHQUpvRTtBQUtsRUYsRUFBQUEsV0FBVyxFQUFFM2pCLDZDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQVJvRSxDQUEzQixDQUF6Qzs7QUFXQSxTQUFTcWpCLFdBQVQsQ0FBcUIzZSxJQUFyQixFQUEwRDtBQUFBOztBQUN4RCwwQkFBT0EsSUFBSSxDQUFDRyxNQUFMLENBQVksQ0FBWixDQUFQLDJFQUFPLGNBQWdCc0ksTUFBaEIsQ0FBdUI2QixJQUF2QixDQUE2QnpCLEtBQUQsSUFBV0EsS0FBSyxDQUFDckosSUFBTixLQUFlLFFBQXRELENBQVAsMERBQU8sc0JBQWlFaUIsTUFBakUsQ0FBd0VpZSxJQUEvRTtBQUNEOztBQUVELFNBQVNELGtCQUFULENBQTRCckgsVUFBNUIsRUFBMERwWCxJQUExRCxFQUE2RjtBQUMzRixNQUFJLENBQUNvWCxVQUFMLEVBQWlCO0FBQ2YsV0FBTztBQUFFdEUsTUFBQUEsUUFBUSxFQUFFLEVBQVo7QUFBZ0JDLE1BQUFBLFNBQVMsRUFBRTtBQUEzQixLQUFQO0FBQ0Q7O0FBRUQsU0FBTztBQUNMRCxJQUFBQSxRQUFRLEVBQUU7QUFDUnNFLE1BQUFBLFVBQVUsRUFBRUEsVUFESjtBQUVSc0gsTUFBQUEsSUFBSSxFQUFFQyxXQUFXLENBQUMzZSxJQUFELENBRlQ7QUFHUnFRLE1BQUFBLE1BQU0sRUFBRTtBQUNOdU8sUUFBQUEsZUFBZSxFQUFFO0FBQ2Z0YSxVQUFBQSxJQUFJLEVBQUV1Wix5RUFBNEJnQjtBQURuQjtBQURYO0FBSEEsS0FETDtBQVVMOUwsSUFBQUEsU0FBUyxFQUFFO0FBVk4sR0FBUDtBQVlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaElEO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OztBQU1PLE1BQU13TSxTQUFvQixHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQTZCO0FBQUE7O0FBQy9ELFFBQU07QUFBRUMsSUFBQUEsZ0JBQUY7QUFBb0JDLElBQUFBO0FBQXBCLE1BQXdDQyxxQkFBcUIsRUFBbkU7QUFFQSxRQUFNO0FBQ0p6WCxJQUFBQSxPQURJO0FBRUpFLElBQUFBLFNBQVMsRUFBRTtBQUFFQyxNQUFBQTtBQUFGLEtBRlA7QUFHSnVKLElBQUFBLFNBSEk7QUFJSmxILElBQUFBLFFBSkk7QUFLSmpHLElBQUFBO0FBTEksTUFNRmdELCtEQUFjLEVBTmxCO0FBUUEsUUFBTWpFLE1BQU0sR0FBRzVILHVEQUFVLENBQUM2SCxTQUFELENBQXpCO0FBQ0EsUUFBTXFJLFlBQVksR0FBR3JILEtBQUssQ0FBQyxNQUFELENBQTFCO0FBRUEsc0JBQ0U7QUFBQSxlQUNHLENBQUMrYSxtQkFBRCxpQkFDQyx1REFBQyw4Q0FBRDtBQUFPLFdBQUssa0JBQUVuWCxNQUFNLENBQUM3SSxJQUFULGlEQUFFLGFBQWFwQyxPQUEzQjtBQUFvQyxhQUFPLEVBQUUsQ0FBQyxtQkFBQ2lMLE1BQU0sQ0FBQzdJLElBQVIsMENBQUMsY0FBYXBDLE9BQWQsQ0FBOUM7QUFBcUUscUJBQVksbUJBQWpGO0FBQUEsNkJBQ0UsdURBQUMscURBQUQ7QUFDRSxjQUFNLEVBQUUsQ0FBQztBQUFFeUwsVUFBQUEsS0FBSyxFQUFFO0FBQUU1SCxZQUFBQTtBQUFGO0FBQVQsU0FBRDtBQUFBOztBQUFBLDhCQUNOLHVEQUFDLHNFQUFEO0FBQ0UsMEJBQVcsV0FEYjtBQUVFLG9CQUFRLGdCQUFFMlEsU0FBUyxDQUFDLE1BQUQsQ0FBWCxtREFBdUI4TixlQUZqQztBQUdFLG9CQUFRLEVBQUV6ZSxRQUhaO0FBSUUsd0JBQVksRUFBRXdlO0FBSmhCLFlBRE07QUFBQSxTQURWO0FBU0UsWUFBSSxFQUFDLE1BVFA7QUFVRSxlQUFPLEVBQUV2WCxPQVZYO0FBV0UsYUFBSyxFQUFFO0FBQ0xnQixVQUFBQSxRQUFRLEVBQUU7QUFBRWxJLFlBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWU1RCxZQUFBQSxPQUFPLEVBQUU7QUFBeEI7QUFETDtBQVhUO0FBREYsTUFGSixlQXFCRTtBQUFLLGVBQVMsRUFBRW9HLE1BQU0sQ0FBQ3FELE9BQXZCO0FBQUEsZ0JBQ0csQ0FBQ2lGLFlBQVksS0FBSzVNLHlFQUFqQixJQUFnRDRNLFlBQVksS0FBSzVNLHdFQUFsRSxrQkFDQyx1REFBQyw4Q0FBRDtBQUNFLGlCQUFTLEVBQUVzRSxNQUFNLENBQUN1SSxTQURwQjtBQUVFLGFBQUssRUFBQyxvQkFGUjtBQUdFLGFBQUssMkJBQUUxRCxNQUFNLENBQUMzRCxjQUFULDBEQUFFLHNCQUF1QnRILE9BSGhDO0FBSUUsZUFBTyxFQUFFLENBQUMsNEJBQUNpTCxNQUFNLENBQUMzRCxjQUFSLG1EQUFDLHVCQUF1QnRILE9BQXhCLENBSlo7QUFLRSx1QkFBWSxtQkFMZDtBQUFBLCtCQU9FLHVEQUFDLHFEQUFEO0FBQ0UsZ0JBQU0sRUFBRTtBQUFBLGdCQUFDO0FBQUV5TCxjQUFBQSxLQUFLLEVBQUU7QUFBRTVILGdCQUFBQTtBQUFGO0FBQVQsYUFBRDtBQUFBLGdCQUE4QjRILEtBQTlCLHNDQUFHQSxLQUFIOztBQUFBLGdDQUNOLHVEQUFDLDJFQUFELG9CQUNNQSxLQUROO0FBRUUsc0JBQVEsRUFBR3dCLEVBQUQsSUFBb0M7QUFBQTs7QUFDNUM7QUFDQUssZ0JBQUFBLFFBQVEsQ0FBQyxVQUFELEVBQWF2TixTQUFiLENBQVI7QUFDQThELGdCQUFBQSxRQUFRLGFBQUNvSixFQUFELGFBQUNBLEVBQUQsdUJBQUNBLEVBQUUsQ0FBRXpJLElBQUwsK0NBQWEsSUFBYixDQUFSO0FBQ0Q7QUFOSCxlQURNO0FBQUEsV0FEVjtBQVdFLGNBQUksRUFBQyxnQkFYUDtBQVlFLGlCQUFPLEVBQUVzRyxPQVpYO0FBYUUsZUFBSyxFQUFFO0FBQ0xnQixZQUFBQSxRQUFRLEVBQUU7QUFBRWxJLGNBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWU1RCxjQUFBQSxPQUFPLEVBQUU7QUFBeEI7QUFETDtBQWJUO0FBUEY7QUFGSixNQXJCRjtBQUFBLElBREY7QUFxREQsQ0FuRU07O0FBcUVQLFNBQVN1aUIscUJBQVQsR0FBaUM7QUFDL0IsUUFBTWppQixxQkFBcUIsR0FBRzBoQixtRkFBQSxDQUF5QkMsNkVBQXpCLENBQTlCO0FBQ0EsUUFBTTFoQixtQkFBbUIsR0FBR3loQixtRkFBQSxDQUF5QkMsb0ZBQXpCLENBQTVCO0FBQ0EsUUFBTUssZUFBZSxHQUFHaGlCLHFCQUFxQixHQUFHd0Isa0VBQUgsR0FBMEJBLHdFQUF2RTtBQUVBLFFBQU11Z0IsZ0JBQWdDLEdBQUcsRUFBekM7O0FBQ0EsTUFBSS9oQixxQkFBSixFQUEyQjtBQUN6QitoQixJQUFBQSxnQkFBZ0IsQ0FBQy9kLElBQWpCLENBQXNCeEMsa0VBQXRCO0FBQ0Q7O0FBQ0QsTUFBSXZCLG1CQUFKLEVBQXlCO0FBQ3ZCOGhCLElBQUFBLGdCQUFnQixDQUFDL2QsSUFBakIsQ0FBc0J4Qyx3RUFBdEIsRUFBa0RBLHlFQUFsRDtBQUNEOztBQUVELFNBQU87QUFBRXVnQixJQUFBQSxnQkFBRjtBQUFvQkMsSUFBQUE7QUFBcEIsR0FBUDtBQUNEOztBQUVELE1BQU1qYyxTQUFTLEdBQUl0RixLQUFELEtBQTJCO0FBQzNDNE4sRUFBQUEsU0FBUyxFQUFFelEsNkNBQUk7QUFDakI7QUFDQTtBQUNBLHFCQUFxQjZDLEtBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDdEM7QUFDQSxHQU42QztBQU8zQ3lJLEVBQUFBLE9BQU8sRUFBRXZMLDZDQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVo2QyxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7QUFFTyxNQUFNeWtCLEtBQVMsR0FBRyxNQUFNO0FBQUE7O0FBQzdCLFFBQU07QUFDSjdYLElBQUFBLE9BREk7QUFFSnpELElBQUFBLEtBRkk7QUFHSjJELElBQUFBLFNBQVMsRUFBRTtBQUFFQyxNQUFBQTtBQUFGO0FBSFAsTUFJRlosK0RBQWMsRUFKbEI7QUFNQSxRQUFNakksSUFBSSxHQUFHaUYsS0FBSyxDQUFDLE1BQUQsQ0FBbEI7QUFDQSxRQUFNQyxjQUFjLEdBQUdELEtBQUssQ0FBQyxnQkFBRCxDQUE1QjtBQUVBLFFBQU11YixvQkFBb0IsR0FBR3hnQixJQUFJLEtBQUtOLGtFQUF0QztBQUNBLFFBQU0rZ0Isb0JBQW9CLEdBQUd6Z0IsSUFBSSxLQUFLTix3RUFBdEM7QUFDQSxRQUFNZ2hCLG1CQUFtQixHQUFHMWdCLElBQUksS0FBS04seUVBQXJDO0FBRUEsUUFBTWloQix5QkFBeUIsR0FBRyxDQUFDRCxtQkFBbUIsSUFBSUQsb0JBQXhCLEtBQWlEdmIsY0FBbkY7QUFFQSxzQkFDRTtBQUFBLGVBRUd5Yix5QkFBeUIsaUJBQ3hCLHVEQUFDLDhDQUFEO0FBQU8sV0FBSyx3QkFBRTlYLE1BQU0sQ0FBQzZKLFVBQVQsdURBQUUsbUJBQW1COVUsT0FBakM7QUFBMEMsYUFBTyxFQUFFLENBQUMseUJBQUNpTCxNQUFNLENBQUM2SixVQUFSLGdEQUFDLG9CQUFtQjlVLE9BQXBCLENBQXBEO0FBQUEsNkJBQ0UsdURBQUMscURBQUQ7QUFDRSxZQUFJLEVBQUMsWUFEUDtBQUVFLGNBQU0sRUFBRSxRQUFrQztBQUFBLGNBQWpDLEVBQWlDO0FBQUEsY0FBZHlMLEtBQWMsc0NBQS9CQSxLQUErQjs7QUFDeEMsOEJBQU8sdURBQUMsK0RBQUQsb0JBQXNCQSxLQUF0QjtBQUE2QiwwQkFBYyxFQUFFbkU7QUFBN0MsYUFBUDtBQUNELFNBSkg7QUFLRSxlQUFPLEVBQUV3RCxPQUxYO0FBTUUsYUFBSyxFQUFFO0FBQ0xnQixVQUFBQSxRQUFRLEVBQUU7QUFBRWxJLFlBQUFBLEtBQUssRUFBRSxJQUFUO0FBQWU1RCxZQUFBQSxPQUFPLEVBQUU7QUFBeEI7QUFETDtBQU5UO0FBREYsTUFISixFQWtCRzRpQixvQkFBb0IsaUJBQ25CLHVEQUFDLDhDQUFEO0FBQ0UsYUFBTyxFQUFFLENBQUMsQ0FBQzNYLE1BQU0sQ0FBQ25FLE9BRHBCO0FBRUUsV0FBSyxFQUFHLENBQUMsQ0FBQ21FLE1BQU0sQ0FBQ25FLE9BQVQsSUFBb0Isd0NBQXJCLElBQWtFL0csU0FGM0U7QUFBQSw2QkFJRSx1REFBQyxxREFBRDtBQUNFLFlBQUksRUFBQyxTQURQO0FBRUUsY0FBTSxFQUFFO0FBQUEsY0FBQyxFQUFEO0FBQUEsY0FBb0IwTCxLQUFwQix1Q0FBR0EsS0FBSDs7QUFBQSw4QkFBa0MsdURBQUMscURBQUQsb0JBQWlCQSxLQUFqQixFQUFsQztBQUFBLFNBRlY7QUFHRSxlQUFPLEVBQUVYLE9BSFg7QUFJRSxhQUFLLEVBQUU7QUFDTDhELFVBQUFBLFFBQVEsRUFBRzlILE9BQUQsSUFBYWlVLEtBQUssQ0FBQ0ssT0FBTixDQUFjdFUsT0FBZCxLQUEwQixDQUFDLENBQUNBLE9BQU8sQ0FBQ2dMO0FBRHREO0FBSlQ7QUFKRixNQW5CSjtBQUFBLElBREY7QUFvQ0QsQ0FwRE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFNTyxNQUFNNUwsMEJBQXFDLEdBQUcsQ0FBQztBQUFFa2MsRUFBQUE7QUFBRixDQUFELEtBQTZCO0FBQ2hGLFFBQU07QUFBRS9hLElBQUFBO0FBQUYsTUFBWWdELCtEQUFjLEVBQWhDO0FBRUEsUUFBTWpJLElBQUksR0FBR2lGLEtBQUssQ0FBQyxNQUFELENBQWxCO0FBQ0EsUUFBTXViLG9CQUFvQixHQUFHeGdCLElBQUksS0FBS04sa0VBQXRDO0FBRUEsc0JBQ0Usd0RBQUMsaUVBQUQ7QUFBbUIsVUFBTSxFQUFFLENBQTNCO0FBQThCLFNBQUssRUFBQyxpQ0FBcEM7QUFBQSw0QkFDRSx1REFBQyxpREFBRDtBQUFXLHlCQUFtQixFQUFFc2dCO0FBQWhDLE1BREYsRUFFR2hnQixJQUFJLHNDQUFJLHVEQUFDLHlDQUFELEtBQUosRUFGUCxFQUdHd2dCLG9CQUFvQix3REFBSSx1REFBQywyREFBRCxLQUFKLEVBSHZCO0FBQUEsSUFERjtBQU9ELENBYk07Ozs7Ozs7Ozs7Ozs7O0FDZFA7QUFFQTs7OztBQU1BLE1BQU1JLGVBQTBCLEdBQUcsQ0FBQztBQUFFcGlCLEVBQUFBLFFBQUY7QUFBWXFpQixFQUFBQSxPQUFPLEdBQUc7QUFBdEIsQ0FBRCxLQUFtQztBQUNwRSxNQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaLHdCQUFPO0FBQUEsZ0JBQUdyaUI7QUFBSCxNQUFQO0FBQ0Q7O0FBRUQsc0JBQ0UsdURBQUMsZ0RBQUQ7QUFBUyxXQUFPLEVBQUMsdURBQWpCO0FBQXlFLGFBQVMsRUFBQyxLQUFuRjtBQUFBLDJCQUNFO0FBQUEsZ0JBQU1BO0FBQU47QUFERixJQURGO0FBS0QsQ0FWRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBRUE7QUFFQTs7OztBQUVBLE1BQU11aUIsc0JBQXVDLEdBQUcsQ0FBQztBQUFFQyxFQUFBQSxRQUFRLEdBQUcsS0FBYjtBQUFvQmxELEVBQUFBLFFBQXBCO0FBQThCbUQsRUFBQUE7QUFBOUIsQ0FBRCxLQUE2QztBQUMzRixzQkFDRSx1REFBQywrQ0FBRDtBQUNFLFFBQUksRUFBQyx1QkFEUDtBQUVFLGVBQVcsaUNBQ1Q7QUFBQSw2RUFFRSxnRUFGRjtBQUFBLE1BRFMsQ0FGYjtBQVNFLFNBQUssRUFBQyw4QkFUUjtBQVVFLFlBQVEsRUFBRUQsUUFWWjtBQVdFLFlBQVEsRUFBRWxELFFBWFo7QUFZRSxTQUFLLEVBQUVwZSxrRUFaVDtBQWFFLFdBQU8sRUFBRXVoQjtBQWJYLElBREY7QUFpQkQsQ0FsQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUVBO0FBQ0E7Ozs7QUFNQSxNQUFNQyxpQkFBNEIsR0FBRyxDQUFDO0FBQUVGLEVBQUFBLFFBQVEsR0FBRyxLQUFiO0FBQW9CbEQsRUFBQUEsUUFBUSxHQUFHLEtBQS9CO0FBQXNDbUQsRUFBQUE7QUFBdEMsQ0FBRCxLQUFxRDtBQUN4RixzQkFDRSx1REFBQyw2REFBRDtBQUFpQixXQUFPLEVBQUVuRCxRQUExQjtBQUFBLDJCQUNFLHVEQUFDLCtDQUFEO0FBQ0UsVUFBSSxFQUFDLHFCQURQO0FBRUUsaUJBQVcsaUNBQ1Q7QUFBQSwyRUFFRSxnRUFGRjtBQUFBLFFBRFMsQ0FGYjtBQVNFLFdBQUssRUFBQyxxQ0FUUjtBQVVFLGNBQVEsRUFBRWtELFFBVlo7QUFXRSxjQUFRLEVBQUVsRCxRQVhaO0FBWUUsV0FBSyxFQUFFcGUsd0VBWlQ7QUFhRSxhQUFPLEVBQUV1aEI7QUFiWDtBQURGLElBREY7QUFtQkQsQ0FwQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFFQTtBQUVBO0FBQ0E7Ozs7QUFFQSxNQUFNRSxpQkFBa0MsR0FBRyxDQUFDO0FBQUVILEVBQUFBLFFBQVEsR0FBRyxLQUFiO0FBQW9CbEQsRUFBQUEsUUFBUSxHQUFHLEtBQS9CO0FBQXNDbUQsRUFBQUE7QUFBdEMsQ0FBRCxLQUFxRDtBQUM5RixzQkFDRSx1REFBQyw2REFBRDtBQUFpQixXQUFPLEVBQUVuRCxRQUExQjtBQUFBLDJCQUNFLHVEQUFDLCtDQUFEO0FBQ0UsVUFBSSxFQUFDLDhCQURQO0FBRUUsaUJBQVcsaUNBQ1Q7QUFBQSwyREFFRSxnRUFGRjtBQUFBLFFBRFMsQ0FGYjtBQVNFLFdBQUssRUFBQywrQ0FUUjtBQVVFLGNBQVEsRUFBRWtELFFBVlo7QUFXRSxjQUFRLEVBQUVsRCxRQVhaO0FBWUUsV0FBSyxFQUFFcGUseUVBWlQ7QUFhRSxhQUFPLEVBQUV1aEI7QUFiWDtBQURGLElBREY7QUFtQkQsQ0FwQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUdBOzs7O0FBa0JBLE1BQU1ILFFBQW1CLEdBQUl2ZixLQUFELElBQVc7QUFDckMsUUFBTTtBQUFFYSxJQUFBQSxJQUFGO0FBQVF1WixJQUFBQSxXQUFSO0FBQXFCeUYsSUFBQUEsS0FBckI7QUFBNEJKLElBQUFBLFFBQVEsR0FBRyxLQUF2QztBQUE4Q3hmLElBQUFBLEtBQTlDO0FBQXFEeWYsSUFBQUEsT0FBckQ7QUFBOERuRCxJQUFBQSxRQUFRLEdBQUc7QUFBekUsTUFBbUZ2YyxLQUF6RjtBQUNBLFFBQU15QyxNQUFNLEdBQUc1SCx1REFBVSxDQUFDNkgsU0FBRCxDQUF6QjtBQUVBLFFBQU1vZCxVQUFVLEdBQUd0WixnREFBRSxDQUFDO0FBQ3BCLEtBQUMvRCxNQUFNLENBQUMrTSxPQUFSLEdBQWtCLElBREU7QUFFcEIsS0FBQy9NLE1BQU0sQ0FBQzhaLFFBQVIsR0FBbUJBO0FBRkMsR0FBRCxDQUFyQjtBQUtBLHNCQUNFLHdEQUFDLDZDQUFEO0FBQU0sYUFBUyxFQUFFdUQsVUFBakI7QUFBNkIsY0FBVSxFQUFFTCxRQUF6QztBQUFtRCxXQUFPLEVBQUUsTUFBTUMsT0FBTyxDQUFDemYsS0FBRCxDQUF6RTtBQUFrRixZQUFRLEVBQUVzYyxRQUE1RjtBQUFBLDRCQUNFLHVEQUFDLG9EQUFEO0FBQUEsNkJBQ0U7QUFBSyxXQUFHLEVBQUVzRDtBQUFWO0FBREYsTUFERixlQUlFLHVEQUFDLHFEQUFEO0FBQUEsZ0JBQWVoZjtBQUFmLE1BSkYsZUFLRSx1REFBQyx5REFBRDtBQUFBLGdCQUFtQnVaO0FBQW5CLE1BTEY7QUFBQSxJQURGO0FBU0QsQ0FsQkQ7O0FBb0JBLE1BQU0xWCxTQUFTLEdBQUl0RixLQUFELEtBQTJCO0FBQzNDb1MsRUFBQUEsT0FBTyxFQUFFalYsNkNBQUk7QUFDZjtBQUNBO0FBQ0E7QUFDQSxHQUw2QztBQU0zQ2dpQixFQUFBQSxRQUFRLEVBQUVoaUIsNkNBQUk7QUFDaEI7QUFDQTtBQVI2QyxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFRQSxNQUFNZ2tCLGNBQXVDLEdBQUcsQ0FBQztBQUFFa0IsRUFBQUEsUUFBRjtBQUFZdmYsRUFBQUEsUUFBWjtBQUFzQjZmLEVBQUFBO0FBQXRCLENBQUQsS0FBMEM7QUFDeEYsUUFBTTNXLHFCQUFxQixHQUFHRix3RkFBd0IsRUFBdEQ7QUFDQSxRQUFNOFcsbUJBQW1CLEdBQUcsQ0FBQ2hULCtDQUFPLENBQUM1RCxxQkFBRCxDQUFwQztBQUVBLFFBQU0zRyxNQUFNLEdBQUc1SCx1REFBVSxDQUFDNkgsU0FBRCxDQUF6QjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0UseURBQUMsd0RBQUQ7QUFBTyxlQUFTLEVBQUMsS0FBakI7QUFBdUIsU0FBRyxFQUFFLENBQTVCO0FBQUEsaUJBQ0dxZCxZQUFZLENBQUN4WixRQUFiLENBQXNCcEksa0VBQXRCLGtCQUNDLHdEQUFDLHdFQUFEO0FBQXdCLGdCQUFRLEVBQUVzaEIsUUFBUSxLQUFLdGhCLGtFQUEvQztBQUFxRSxlQUFPLEVBQUUrQjtBQUE5RSxRQUZKLEVBSUc2ZixZQUFZLENBQUN4WixRQUFiLENBQXNCcEksd0VBQXRCLGtCQUNDLHdEQUFDLGdFQUFEO0FBQ0UsZ0JBQVEsRUFBRXNoQixRQUFRLEtBQUt0aEIsd0VBRHpCO0FBRUUsZUFBTyxFQUFFK0IsUUFGWDtBQUdFLGdCQUFRLEVBQUUsQ0FBQzhmO0FBSGIsUUFMSixFQVdHRCxZQUFZLENBQUN4WixRQUFiLENBQXNCcEkseUVBQXRCLGtCQUNDLHdEQUFDLHdFQUFEO0FBQ0UsZ0JBQVEsRUFBRXNoQixRQUFRLEtBQUt0aEIseUVBRHpCO0FBRUUsZUFBTyxFQUFFK0IsUUFGWDtBQUdFLGdCQUFRLEVBQUUsQ0FBQzhmO0FBSGIsUUFaSjtBQUFBLE1BREYsRUFvQkdELFlBQVksQ0FBQ3haLFFBQWIsQ0FBc0JwSSxrRUFBdEIsa0JBQ0M7QUFBTyxlQUFTLEVBQUVzRSxNQUFNLENBQUN3ZCxJQUF6QjtBQUFBO0FBQUEsTUFyQko7QUFBQSxJQURGO0FBNkJELENBbkNEOztBQXFDQSxNQUFNdmQsU0FBUyxHQUFJdEYsS0FBRCxLQUEyQjtBQUMzQzZpQixFQUFBQSxJQUFJLEVBQUUxbEIsNkNBQUk7QUFDWixhQUFhNkMsS0FBSyxDQUFDbUksTUFBTixDQUFha1YsSUFBYixDQUFrQjhCLFFBQVM7QUFDeEM7QUFINkMsQ0FBM0IsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFHTyxTQUFTdEcsNEJBQVQsQ0FDTDlTLE9BREssRUFFTDJULGFBRkssRUFHTEMsUUFISyxFQUlTO0FBQ2QsU0FBTzVULE9BQU8sQ0FBQzFGLEdBQVIsQ0FBYXdNLEtBQUQsSUFBVztBQUM1QixRQUFJNk0sYUFBYSxLQUFLQyxRQUF0QixFQUFnQztBQUM5QixhQUFPOU0sS0FBUDtBQUNEOztBQUVELFFBQUksQ0FBQzhJLGtGQUFpQixDQUFDOUksS0FBSyxDQUFDNEosS0FBUCxDQUF0QixFQUFxQztBQUNuQyxhQUFPNUosS0FBUDtBQUNEOztBQUVELFVBQU1pVyxnQkFBZ0IsR0FBR2pXLEtBQUssQ0FBQzRKLEtBQU4sQ0FBWXBWLElBQVosS0FBcUIsTUFBOUM7QUFDQSxVQUFNMGhCLGtCQUFrQixHQUFHbFcsS0FBSyxDQUFDNEosS0FBTixDQUFZcFYsSUFBWixLQUFxQixRQUFoRDtBQUNBLFVBQU0yaEIsb0JBQW9CLEdBQUduVyxLQUFLLENBQUM0SixLQUFOLENBQVlwVixJQUFaLEtBQXFCLFVBQWxEO0FBQ0EsVUFBTTRoQixtQkFBbUIsR0FBR3BXLEtBQUssQ0FBQzRKLEtBQU4sQ0FBWXBWLElBQVosS0FBcUIsb0JBQWpEOztBQUVBLFFBQUl5aEIsZ0JBQUosRUFBc0I7QUFBQTs7QUFDcEIsK0JBQ0tqVyxLQURMO0FBRUU0SixRQUFBQSxLQUFLLG9CQUNBNUosS0FBSyxDQUFDNEosS0FETjtBQUVIMUMsVUFBQUEsVUFBVSxFQUFFbVAsd0JBQXdCLDBCQUFDclcsS0FBSyxDQUFDNEosS0FBTixDQUFZMUMsVUFBYix5RUFBMkIsRUFBM0IsRUFBK0IyRixhQUEvQixFQUE4Q0MsUUFBOUM7QUFGakM7QUFGUDtBQU9EOztBQUVELFFBQUlxSixvQkFBb0IsSUFBSUQsa0JBQTVCLEVBQWdEO0FBQzlDLFlBQU1JLGFBQWEsR0FBR3RXLEtBQUssQ0FBQzRKLEtBQU4sQ0FBWTFDLFVBQVosS0FBMkIyRixhQUFqRDtBQUVBLCtCQUNLN00sS0FETDtBQUVFNEosUUFBQUEsS0FBSyxvQkFDQTVKLEtBQUssQ0FBQzRKLEtBRE47QUFFSDFDLFVBQUFBLFVBQVUsRUFBRW9QLGFBQWEsR0FBR3hKLFFBQUgsR0FBYzlNLEtBQUssQ0FBQzRKLEtBQU4sQ0FBWTFDO0FBRmhEO0FBRlA7QUFPRDs7QUFFRCxRQUFJa1AsbUJBQUosRUFBeUI7QUFBQTs7QUFDdkIsWUFBTXBNLFVBQVUsNEJBQUdoSyxLQUFLLENBQUM0SixLQUFOLENBQVlJLFVBQWYsMERBQUcsc0JBQXdCeFcsR0FBeEIsQ0FBNkJtTSxTQUFELHNCQUMxQ0EsU0FEMEM7QUFFN0NLLFFBQUFBLEtBQUssb0JBQ0FMLFNBQVMsQ0FBQ0ssS0FEVjtBQUVIeE4sVUFBQUEsTUFBTSxFQUFFbU4sU0FBUyxDQUFDSyxLQUFWLENBQWdCeE4sTUFBaEIsQ0FBdUJnQixHQUF2QixDQUE0QitpQixLQUFELElBQW9CQSxLQUFLLEtBQUsxSixhQUFWLEdBQTBCQyxRQUExQixHQUFxQ3lKLEtBQXBGO0FBRkw7QUFGd0MsUUFBNUIsQ0FBbkI7QUFRQSwrQkFBWXZXLEtBQVo7QUFBbUI0SixRQUFBQSxLQUFLLG9CQUFPNUosS0FBSyxDQUFDNEosS0FBYjtBQUFvQkksVUFBQUE7QUFBcEI7QUFBeEI7QUFDRDs7QUFFRCxXQUFPaEssS0FBUDtBQUNELEdBakRNLENBQVA7QUFrREQ7QUFFTSxTQUFTcVcsd0JBQVQsQ0FBa0NuUCxVQUFsQyxFQUFzRDJGLGFBQXRELEVBQTZFQyxRQUE3RSxFQUF1RztBQUM1RyxRQUFNMEosYUFBYSxHQUFHLElBQUlDLE1BQUosQ0FBVyxTQUFTNUosYUFBVCxHQUF5QixZQUF6QixHQUF3Q0EsYUFBeEMsR0FBd0QsSUFBbkUsRUFBeUUsSUFBekUsQ0FBdEI7QUFDQSxRQUFNNkosYUFBYSxHQUFHLE9BQU81SixRQUFQLEdBQWtCLEdBQXhDO0FBRUEsU0FBTzVGLFVBQVUsQ0FBQ3lQLE9BQVgsQ0FBbUJILGFBQW5CLEVBQWtDRSxhQUFsQyxDQUFQO0FBQ0QsRUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTOVYscUJBQVQsQ0FBK0I1SyxLQUEvQixFQUE4RDtBQUNuRSxRQUFNNGdCLHFCQUFxQixHQUFHNWdCLEtBQUssQ0FBQ3NHLFFBQU4sQ0FBZSxHQUFmLEtBQXVCdEcsS0FBSyxDQUFDc0csUUFBTixDQUFlLElBQWYsQ0FBckQ7O0FBQ0EsTUFBSXNhLHFCQUFKLEVBQTJCO0FBQ3pCLFdBQU8sdUNBQVA7QUFDRDs7QUFFRCxTQUFPLElBQVA7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2hGRDtBQUVBO0FBR08sU0FBU3pRLHFCQUFULENBQStCak4sT0FBL0IsRUFBc0Q7QUFDM0QsUUFBTXNOLHVCQUF1QixHQUFHaFIsOENBQU8sQ0FDckMsTUFBTTBELE9BQU8sQ0FBQzJkLEtBQVIsQ0FBZTdXLEtBQUQsSUFBV3BHLE9BQU8sQ0FBQ3lILGtFQUFnQixHQUFHZSxtQkFBbkIsQ0FBdUNwQyxLQUFLLENBQUNDLGFBQTdDLENBQUQsQ0FBaEMsQ0FEK0IsRUFFckMsQ0FBQy9HLE9BQUQsQ0FGcUMsQ0FBdkM7QUFLQSxTQUFPO0FBQUVzTixJQUFBQTtBQUFGLEdBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQ1pEO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFPTyxTQUFTdVEsU0FBVCxDQUFtQnBOLEdBQW5CLEVBQTRDO0FBQ2pELFFBQU14WixRQUFRLEdBQUdKLHdEQUFXLEVBQTVCO0FBQ0EsUUFBTWluQixjQUFjLEdBQUcvbEIsdUZBQTBCLENBQUVPLEtBQUQsSUFBV0EsS0FBSyxDQUFDeWxCLE9BQWxCLENBQWpEO0FBQ0FwbkIsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSThaLEdBQUosRUFBUztBQUNQeFosTUFBQUEsUUFBUSxDQUFDMm1CLDZFQUE2QixDQUFDbk4sR0FBRCxDQUE5QixDQUFSO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ3haLFFBQUQsRUFBV3daLEdBQVgsQ0FKTSxDQUFUOztBQU1BLE1BQUlBLEdBQUosRUFBUztBQUNQLFVBQU12VixPQUFPLEdBQUc0aUIsY0FBYyxDQUFDck4sR0FBRCxDQUFkLElBQXVCN1Isa0VBQXZDO0FBQ0EsV0FBTztBQUNMb0osTUFBQUEsTUFBTSxFQUFFOU0sT0FBTyxDQUFDdkMsTUFEWDtBQUVMRCxNQUFBQSxPQUFPLEVBQUV3QyxPQUFPLENBQUN4QztBQUZaLEtBQVA7QUFJRDs7QUFDRCxTQUFPO0FBQ0xBLElBQUFBLE9BQU8sRUFBRTtBQURKLEdBQVA7QUFHRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDRDtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBUU8sU0FBU1osaUJBQVQsQ0FBMkIyVCxlQUEzQixFQUFvRHpTLElBQXBELEVBQW9GO0FBQUE7O0FBQ3pGLFFBQU1rbEIsV0FBVyxHQUFHbm1CLHVGQUEwQixDQUFFTyxLQUFELElBQVdBLEtBQUssQ0FBQzRsQixXQUFsQixDQUE5QztBQUNBLFFBQU1DLFNBQVMsR0FBR25sQixJQUFJLElBQUlpbEIsZ0VBQWtCLENBQUNqbEIsSUFBRCxDQUExQixHQUFtQ0EsSUFBSSxDQUFDb2xCLGFBQUwsQ0FBbUJDLGFBQXRELEdBQXNFcGxCLFNBQXhGO0FBRUEsUUFBTXFsQixjQUFjLEdBQUdOLDBFQUFtQixDQUFDdlMsZUFBRCxDQUExQztBQUNBLFFBQU04UyxpQkFBaUIsR0FBR3JELCtFQUFBLENBQXFCb0QsY0FBYyxDQUFDdEssTUFBcEMsRUFBNENrSCw4RUFBNUMsQ0FBMUI7QUFDQSxRQUFNd0QsbUJBQW1CLEdBQUd4RCwrRUFBQSxDQUFxQm9ELGNBQWMsQ0FBQ0ssTUFBcEMsRUFBNEN6RCw4RUFBNUMsQ0FBNUI7QUFFQSxRQUFNO0FBQUVsVCxJQUFBQSxNQUFGO0FBQVV0UCxJQUFBQTtBQUFWLE1BQXNCbWxCLHFEQUFTLENBQUNNLFNBQUQsQ0FBckM7O0FBRUEsTUFBSSxDQUFDbmxCLElBQUwsRUFBVztBQUNULFdBQU87QUFBRUYsTUFBQUEsVUFBVSxFQUFFLEtBQWQ7QUFBcUI4bEIsTUFBQUEsV0FBVyxFQUFFLEtBQWxDO0FBQXlDbG1CLE1BQUFBLE9BQU8sRUFBRTtBQUFsRCxLQUFQO0FBQ0QsR0Fad0YsQ0FjekY7OztBQUNBLE1BQUl1bEIsZ0VBQWtCLENBQUNqbEIsSUFBRCxDQUF0QixFQUE4QjtBQUM1QixRQUFJLENBQUNtbEIsU0FBTCxFQUFnQjtBQUNkLFlBQU0sSUFBSTlpQixLQUFKLENBQ0gsUUFBT3JDLElBQUksQ0FBQ29sQixhQUFMLENBQW1CdmtCLEtBQU0sa0VBRDdCLENBQU47QUFHRDs7QUFDRCxXQUFPO0FBQ0xmLE1BQUFBLFVBQVUsRUFBRXlsQixpQkFBaUIsS0FBSXZXLE1BQUosYUFBSUEsTUFBSix1QkFBSUEsTUFBTSxDQUFFNlcsT0FBWixDQUR4QjtBQUVMRCxNQUFBQSxXQUFXLEVBQUVGLG1CQUFtQixLQUFJMVcsTUFBSixhQUFJQSxNQUFKLHVCQUFJQSxNQUFNLENBQUU2VyxPQUFaLENBRjNCO0FBR0xubUIsTUFBQUE7QUFISyxLQUFQO0FBS0QsR0ExQndGLENBNEJ6Rjs7O0FBQ0EsUUFBTW9tQixnQkFBZ0IsR0FBR3BlLE9BQU8sMEJBQUN3ZCxXQUFXLENBQUN6UyxlQUFELENBQVosb0ZBQUMsc0JBQThCOVMsTUFBL0IsMkRBQUMsdUJBQXNDb21CLFdBQXZDLENBQWhDO0FBQ0EsU0FBTztBQUNMam1CLElBQUFBLFVBQVUsRUFBRXlsQixpQkFBaUIsSUFBSU8sZ0JBRDVCO0FBRUxGLElBQUFBLFdBQVcsRUFBRUYsbUJBQW1CLElBQUlJLGdCQUYvQjtBQUdMcG1CLElBQUFBLE9BQU8sNEJBQUV3bEIsV0FBVyxDQUFDelMsZUFBRCxDQUFiLDJEQUFFLHVCQUE4Qi9TO0FBSGxDLEdBQVA7QUFLRDs7Ozs7Ozs7Ozs7OztBQy9DRDtBQUVBO0FBRU8sU0FBU3FOLHdCQUFULEdBQWtFO0FBQ3ZFLFFBQU1tWSxXQUFXLEdBQUdubUIsdUZBQTBCLENBQUVPLEtBQUQsSUFBV0EsS0FBSyxDQUFDNGxCLFdBQWxCLENBQTlDO0FBRUEsUUFBTWUsb0JBQW9CLEdBQUc5aEIsTUFBTSxDQUFDQyxNQUFQLENBQWM4Z0IsV0FBZCxFQUMxQjVqQixHQUQwQixDQUNyQjZMLEVBQUQsSUFBUUEsRUFBRSxDQUFDeE4sTUFEVyxFQUUxQnVJLE1BRjBCLENBRWxCaUYsRUFBRCxJQUFtQ3pGLE9BQU8sQ0FBQ3lGLEVBQUQsYUFBQ0EsRUFBRCx1QkFBQ0EsRUFBRSxDQUFFNFksV0FBTCxDQUZ2QixDQUE3QixDQUh1RSxDQU12RTs7QUFFQSxTQUFPRSxvQkFBb0IsQ0FDeEIza0IsR0FESSxDQUNDNkwsRUFBRCxJQUFRNlksc0VBQW1CLENBQUM3WSxFQUFFLENBQUN6SSxJQUFKLENBRDNCLEVBRUp3RCxNQUZJLENBRUlnZSxRQUFELElBQXNEeGUsT0FBTyxDQUFDd2UsUUFBRCxDQUZoRSxDQUFQO0FBR0Q7Ozs7Ozs7Ozs7Ozs7QUNqQkQ7QUFFQTtBQUVPLFNBQVNwRixZQUFULENBQXNCaGUsSUFBdEIsRUFBdUM0YSxRQUF2QyxFQUF5RHlELFVBQXpELEVBQTZFO0FBQ2xGLFFBQU1sZ0IsS0FBSyxHQUFHa2xCLHNEQUFTLEVBQXZCOztBQUNBLE1BQUl6SSxRQUFRLEtBQUsvWix3REFBYixJQUEyQitaLFFBQVEsS0FBS2phLGtEQUF4QyxJQUFnRDJpQixXQUFXLENBQUN0akIsSUFBRCxDQUEvRCxFQUF1RTtBQUNyRSxXQUFPLEdBQVA7QUFDRDs7QUFFRCxRQUFNc0IsTUFBTSxHQUFHdEIsSUFBSSxDQUFDRyxNQUFMLENBQVlrZSxVQUFaLEVBQXdCNVYsTUFBeEIsQ0FBK0IsQ0FBL0IsRUFBa0NuSCxNQUFsQyxDQUF5QzROLE1BQXhEO0FBQ0EsUUFBTXFVLFNBQVMsR0FBR3BsQixLQUFLLENBQUNDLE9BQU4sQ0FBYytnQixRQUFkLEdBQXlCLENBQTNDO0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFDRSxRQUFNcUUsV0FBVyxHQUFHbGlCLE1BQU0sR0FBR2lpQixTQUFULEdBQXFCQSxTQUF6QztBQUVBLFNBQU9DLFdBQVcsSUFBSSxHQUFmLEdBQXFCLEdBQXJCLEdBQTJCQSxXQUFsQztBQUNEOztBQUVELFNBQVNGLFdBQVQsQ0FBcUJ0akIsSUFBckIsRUFBc0M7QUFDcEMsU0FBTyxDQUFDQSxJQUFELElBQVMsQ0FBQ0EsSUFBSSxDQUFDRyxNQUFMLENBQVksQ0FBWixDQUFWLElBQTRCLENBQUNILElBQUksQ0FBQ0csTUFBTCxDQUFZLENBQVosRUFBZXNJLE1BQWYsQ0FBc0IsQ0FBdEIsQ0FBN0IsSUFBeUQsQ0FBQ3pJLElBQUksQ0FBQ0csTUFBTCxDQUFZLENBQVosRUFBZXNJLE1BQWYsQ0FBc0IsQ0FBdEIsRUFBeUJuSCxNQUExRjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkQ7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVNPLE1BQU00UyxtQkFBTixDQUEwQjtBQUsvQkUsRUFBQUEsV0FBVyxDQUFTNlAsVUFBVSxHQUFHbmxCLDRFQUFhLEVBQW5DLEVBQStDb2xCLGFBQWEsR0FBRzdYLGtFQUFnQixFQUEvRSxFQUFtRjtBQUFBLFNBQTFFNFgsVUFBMEUsR0FBMUVBLFVBQTBFO0FBQUEsU0FBcENDLGFBQW9DLEdBQXBDQSxhQUFvQzs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxTQUExRUQsVUFBMEUsR0FBMUVBLFVBQTBFO0FBQUEsU0FBcENDLGFBQW9DLEdBQXBDQSxhQUFvQztBQUM1RixTQUFLQyxPQUFMLEdBQWUsSUFBSVYsK0NBQUosQ0FBa0IsQ0FBbEIsQ0FBZjtBQUNBLFNBQUtXLFVBQUwsR0FBa0IsRUFBbEI7QUFDRDs7QUFFRHZYLEVBQUFBLEdBQUcsR0FBMEM7QUFDM0MsV0FBTyxLQUFLc1gsT0FBTCxDQUFhRSxZQUFiLEVBQVA7QUFDRDs7QUFFUSxRQUFIL1AsR0FBRyxDQUFDcFEsT0FBRCxFQUF3QjtBQUMvQixRQUFJQSxPQUFPLENBQUNnTCxNQUFSLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLFlBQU1vVixLQUFLLEdBQUdDLFlBQVksQ0FBQ3JnQixPQUFELEVBQVV0Riw0REFBVixDQUExQjtBQUNBLGFBQU8sS0FBS3VsQixPQUFMLENBQWFLLElBQWIsQ0FBa0JGLEtBQWxCLENBQVA7QUFDRCxLQUo4QixDQU0vQjtBQUNBOzs7QUFDQSxTQUFLLE1BQU10WixLQUFYLElBQW9COUcsT0FBcEIsRUFBNkI7QUFDM0IsVUFBSSxDQUFDNFAsa0ZBQWlCLENBQUM5SSxLQUFLLENBQUM0SixLQUFQLENBQXRCLEVBQXFDO0FBQ25DLGNBQU12SyxFQUFFLEdBQUcsTUFBTSxLQUFLNlosYUFBTCxDQUFtQnJYLEdBQW5CLENBQXVCN0IsS0FBSyxDQUFDQyxhQUE3QixDQUFqQjs7QUFDQSxZQUFJWixFQUFFLENBQUNvYSxXQUFILElBQWtCLENBQUNwYSxFQUFFLENBQUNvYSxXQUFILENBQWV6WixLQUFLLENBQUM0SixLQUFyQixDQUF2QixFQUFvRDtBQUNsRCxnQkFBTTBQLEtBQUssR0FBR0MsWUFBWSxDQUFDcmdCLE9BQUQsRUFBVXRGLDREQUFWLENBQTFCO0FBQ0EsaUJBQU8sS0FBS3VsQixPQUFMLENBQWFLLElBQWIsQ0FBa0JGLEtBQWxCLENBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBS0ksWUFBTCxHQUFvQkMsVUFBVSxDQUFDLEtBQUtWLFVBQU4sRUFBa0IvZixPQUFsQixDQUFWLENBQXFDK04sU0FBckMsQ0FBK0M7QUFDakV1UyxNQUFBQSxJQUFJLEVBQUd4TCxZQUFELElBQWtCO0FBQ3RCLGNBQU00TCxVQUFVLEdBQUdDLFdBQVcsQ0FBQzdMLFlBQUQsRUFBZSxDQUFDbE8sS0FBRCxFQUFROUssSUFBUixLQUFpQjtBQUM1RCxnQkFBTThrQixRQUFRLEdBQUcsS0FBS1YsVUFBTCxDQUFnQnRaLEtBQWhCLENBQWpCO0FBQ0EsZ0JBQU1pYSxZQUFZLEdBQUdoQix3RkFBbUIsQ0FBQy9qQixJQUFELEVBQU84a0IsUUFBUCxDQUF4QztBQUNBLGlCQUFPaEIsa0dBQW9CLENBQUNpQixZQUFELEVBQWVELFFBQWYsQ0FBM0I7QUFDRCxTQUo2QixDQUE5QjtBQU1BLGFBQUtWLFVBQUwsR0FBa0JRLFVBQWxCO0FBQ0EsYUFBS1QsT0FBTCxDQUFhSyxJQUFiLENBQWtCLEtBQUtKLFVBQXZCO0FBQ0QsT0FWZ0U7QUFZakV0bkIsTUFBQUEsS0FBSyxFQUFHQSxLQUFELElBQWtCO0FBQ3ZCLGFBQUtzbkIsVUFBTCxHQUFrQlksbUJBQW1CLENBQUMsS0FBS1osVUFBTixFQUFrQnRuQixLQUFsQixDQUFyQztBQUNBLGFBQUtxbkIsT0FBTCxDQUFhSyxJQUFiLENBQWtCLEtBQUtKLFVBQXZCO0FBQ0Q7QUFmZ0UsS0FBL0MsQ0FBcEI7QUFpQkQ7O0FBRUQ3UCxFQUFBQSxNQUFNLEdBQUc7QUFDUCxRQUFJLENBQUMsS0FBS21RLFlBQVYsRUFBd0I7QUFDdEI7QUFDRDs7QUFDRCxTQUFLQSxZQUFMLENBQWtCTyxXQUFsQjtBQUVBLFFBQUlDLGdCQUFnQixHQUFHLEtBQXZCO0FBRUEsVUFBTU4sVUFBVSxHQUFHQyxXQUFXLENBQUMsS0FBS1QsVUFBTixFQUFrQixDQUFDdFosS0FBRCxFQUFROUssSUFBUixLQUFpQjtBQUMvRCxVQUFJQSxJQUFJLENBQUN4RCxLQUFMLEtBQWVvQywrREFBbkIsRUFBeUM7QUFDdkNzbUIsUUFBQUEsZ0JBQWdCLEdBQUcsSUFBbkI7QUFDRDs7QUFFRCwrQkFDS2xsQixJQURMO0FBRUV4RCxRQUFBQSxLQUFLLEVBQUVvQyw0REFBaUJzQjtBQUYxQjtBQUlELEtBVDZCLENBQTlCOztBQVdBLFFBQUlnbEIsZ0JBQUosRUFBc0I7QUFDcEIsV0FBS2YsT0FBTCxDQUFhSyxJQUFiLENBQWtCSSxVQUFsQjtBQUNEO0FBQ0Y7O0FBRUR2UCxFQUFBQSxPQUFPLEdBQUc7QUFDUixRQUFJLEtBQUs4TyxPQUFULEVBQWtCO0FBQ2hCLFdBQUtBLE9BQUwsQ0FBYWdCLFFBQWI7QUFDRDs7QUFFRCxTQUFLNVEsTUFBTDtBQUNEOztBQWpGOEI7O0FBb0ZqQyxNQUFNb1EsVUFBVSxHQUFHLENBQUNWLFVBQUQsRUFBeUIvZixPQUF6QixLQUEwRjtBQUMzRyxRQUFNa2hCLE9BQU8sR0FBR2IsWUFBWSxDQUFDcmdCLE9BQUQsRUFBVXRGLCtEQUFWLENBQTVCO0FBQ0EsUUFBTVEsT0FBTyxHQUFHO0FBQ2RZLElBQUFBLElBQUksRUFBRTtBQUFFQSxNQUFBQSxJQUFJLEVBQUVrRTtBQUFSLEtBRFE7QUFFZG5FLElBQUFBLEdBQUcsRUFBRSxjQUZTO0FBR2RELElBQUFBLE1BQU0sRUFBRSxNQUhNO0FBSWR1bEIsSUFBQUEsU0FBUyxFQUFFMUIsZ0RBQU07QUFKSCxHQUFoQjtBQU9BLFNBQU85a0IsbUVBQW9CLENBQUM7QUFDMUJhLElBQUFBLFlBQVksRUFBRTBsQixPQURZO0FBRTFCeGxCLElBQUFBLE1BQU0sRUFBRXFrQixVQUFVLENBQUNwa0IsS0FBWCxDQUF3Q1QsT0FBeEMsRUFBaURhLElBQWpELENBQ05xbEIsY0FBYyxDQUFDRixPQUFELENBRFIsRUFFTjdtQiwyREFBVSxDQUFFekIsS0FBRCxJQUFXd0IseUNBQUUsQ0FBQzBtQixtQkFBbUIsQ0FBQ0ksT0FBRCxFQUFVdG9CLEtBQVYsQ0FBcEIsQ0FBZCxDQUZKLEVBR04rbUIsZ0hBQWtDLENBQUNJLFVBQUQsRUFBYTdrQixPQUFPLENBQUNpbUIsU0FBckIsQ0FINUIsRUFJTjVtQixzREFBSyxFQUpDO0FBRmtCLEdBQUQsQ0FBM0I7QUFTRCxDQWxCRDs7QUFvQkEsTUFBTThsQixZQUFZLEdBQUcsQ0FBQ3JnQixPQUFELEVBQXdCMUgsS0FBeEIsS0FBMkU7QUFDOUYsU0FBTzBILE9BQU8sQ0FBQzNDLE1BQVIsQ0FBZSxDQUFDZ2tCLFdBQUQsRUFBeUN2YSxLQUF6QyxLQUFtRDtBQUN2RXVhLElBQUFBLFdBQVcsQ0FBQ3ZhLEtBQUssQ0FBQ0YsS0FBUCxDQUFYLEdBQTJCO0FBQ3pCdE8sTUFBQUEsS0FEeUI7QUFFekIyRCxNQUFBQSxNQUFNLEVBQUUsRUFGaUI7QUFHekJJLE1BQUFBLFNBQVMsRUFBRWlsQixZQUFZLENBQUN4YSxLQUFELEVBQVE5RyxPQUFSO0FBSEUsS0FBM0I7QUFNQSxXQUFPcWhCLFdBQVA7QUFDRCxHQVJNLEVBUUosRUFSSSxDQUFQO0FBU0QsQ0FWRDs7QUFZQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQ3hhLEtBQUQsRUFBb0I5RyxPQUFwQixLQUF5RDtBQUM1RSxNQUFJNFAsa0ZBQWlCLENBQUM5SSxLQUFLLENBQUM0SixLQUFQLENBQXJCLEVBQW9DO0FBQ2xDLFVBQU02USxRQUFRLEdBQUd6QiwyRUFBeUIsQ0FBQ2haLEtBQUssQ0FBQzRKLEtBQVAsRUFBYzFRLE9BQWQsQ0FBMUM7QUFDQSxXQUFPMGYsd0VBQUEsQ0FBOEI2QixRQUE5QixDQUFQO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDemEsS0FBSyxDQUFDb0wsaUJBQVgsRUFBOEI7QUFDNUJ1UCxJQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYyxxQkFBb0I1YSxLQUFLLENBQUNGLEtBQU0sdURBQTlDO0FBQ0EsV0FBT25NLGtFQUFtQixFQUExQjtBQUNEOztBQUVELFNBQU9pbEIsd0VBQUEsQ0FBOEI1WSxLQUFLLENBQUNvTCxpQkFBcEMsQ0FBUDtBQUNELENBWkQ7O0FBY0EsTUFBTWtQLGNBQWMsR0FDbEJDLFdBRHFCLElBRWlFO0FBQ3RGLFNBQU8vbUIsb0RBQUcsQ0FBRXVULFFBQUQsSUFBYztBQUN2QixVQUFNO0FBQUUvUixNQUFBQTtBQUFGLFFBQVcrUixRQUFqQjtBQUNBLFVBQU04VCxPQUFrQyxHQUFHLEVBQTNDOztBQUVBLFNBQUssTUFBTSxDQUFDL2EsS0FBRCxFQUFRak8sTUFBUixDQUFYLElBQThCd0UsTUFBTSxDQUFDeWtCLE9BQVAsQ0FBZTlsQixJQUFJLENBQUM2bEIsT0FBcEIsQ0FBOUIsRUFBNEQ7QUFDMURBLE1BQUFBLE9BQU8sQ0FBQy9hLEtBQUQsQ0FBUCxHQUFpQjtBQUNmdkssUUFBQUEsU0FBUyxFQUFFZ2xCLFdBQVcsQ0FBQ3phLEtBQUQsQ0FBWCxDQUFtQnZLLFNBRGY7QUFFZi9ELFFBQUFBLEtBQUssRUFBRW9DLDREQUZRO0FBR2Z1QixRQUFBQSxNQUFNLEVBQUV0RCxNQUFNLENBQUNrcEIsTUFBUCxDQUFjdm5CLEdBQWQsQ0FBa0JFLDREQUFsQjtBQUhPLE9BQWpCO0FBS0Q7O0FBRUQsV0FBT21uQixPQUFQO0FBQ0QsR0FiUyxDQUFWO0FBY0QsQ0FqQkQ7O0FBbUJBLE1BQU1iLG1CQUFtQixHQUFHLENBQUNaLFVBQUQsRUFBd0N0bkIsS0FBeEMsS0FBb0Y7QUFDOUcsUUFBTWtwQixVQUFVLEdBQUdqbkIsa0VBQWdCLENBQUNqQyxLQUFELENBQW5DO0FBRUEsU0FBTytuQixXQUFXLENBQUNULFVBQUQsRUFBYSxDQUFDdFosS0FBRCxFQUFROUssSUFBUixLQUFpQjtBQUM5Qyw2QkFDS0EsSUFETDtBQUVFeEQsTUFBQUEsS0FBSyxFQUFFb0MsNkRBRlQ7QUFHRTlCLE1BQUFBLEtBQUssRUFBRWtwQjtBQUhUO0FBS0QsR0FOaUIsQ0FBbEI7QUFPRCxDQVZEOztBQVlBLE1BQU1uQixXQUFXLEdBQUcsQ0FDbEJPLE9BRGtCLEVBRWxCYSxNQUZrQixLQUdZO0FBQzlCLFFBQU1yQixVQUFxQyxHQUFHLEVBQTlDOztBQUVBLE9BQUssTUFBTSxDQUFDOVosS0FBRCxFQUFROUssSUFBUixDQUFYLElBQTRCcUIsTUFBTSxDQUFDeWtCLE9BQVAsQ0FBZVYsT0FBZixDQUE1QixFQUFxRDtBQUNuRFIsSUFBQUEsVUFBVSxDQUFDOVosS0FBRCxDQUFWLEdBQW9CbWIsTUFBTSxDQUFDbmIsS0FBRCxFQUFROUssSUFBUixDQUExQjtBQUNEOztBQUVELFNBQU80a0IsVUFBUDtBQUNELENBWEQ7Ozs7Ozs7Ozs7OztBQ3ZLTyxTQUFTNWxCLHFCQUFULENBQStCSSxPQUEvQixFQUFnRztBQUNyRyxTQUFPLFVBQVVBLE9BQWpCO0FBQ0Q7QUFFTSxTQUFTSCx1QkFBVCxDQUFpQ0csT0FBakMsRUFBb0c7QUFDekcsU0FBTyx1QkFBdUJBLE9BQTlCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMvQkQ7QUFFQTtBQUVPLFNBQVNoRCxjQUFULEdBQTBCO0FBQy9CLFNBQU9vRSw4Q0FBTyxDQUFDLE1BQU0wbEIsK0RBQWMsRUFBckIsRUFBeUIsRUFBekIsQ0FBZDtBQUNEOzs7Ozs7Ozs7Ozs7QUNIRDtBQUVBLE1BQU1DLG9CQUFvQixHQUFHO0FBQUUvTixFQUFBQSxJQUFJLEVBQUUsS0FBUjtBQUFlZ08sRUFBQUEsRUFBRSxFQUFFO0FBQW5CLENBQTdCO0FBRU8sTUFBTXBDLHlCQUF5QixHQUFHLENBQUNoWixLQUFELEVBQXlCOUcsT0FBekIsS0FBc0U7QUFDN0csUUFBTW1pQixnQkFBc0MsR0FBR0MsZ0JBQWdCLENBQUN0YixLQUFELEVBQVE5RyxPQUFSLENBQS9EOztBQUVBLE1BQUksQ0FBQ21pQixnQkFBTCxFQUF1QjtBQUNyQixXQUFPRixvQkFBUDtBQUNEOztBQUVELFFBQU07QUFBRS9OLElBQUFBLElBQUY7QUFBUWdPLElBQUFBO0FBQVIsTUFBZUcsYUFBYSxDQUFDRixnQkFBRCxFQUFtQm5pQixPQUFuQixDQUFsQzs7QUFFQSxNQUFJLENBQUNrVSxJQUFJLENBQUNsSixNQUFOLElBQWdCLENBQUNrWCxFQUFFLENBQUNsWCxNQUF4QixFQUFnQztBQUM5QixXQUFPaVgsb0JBQVA7QUFDRDs7QUFFRCxTQUFPO0FBQ0wvTixJQUFBQSxJQUFJLEVBQUVvTyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxHQUFHck8sSUFBWixDQUREO0FBRUxnTyxJQUFBQSxFQUFFLEVBQUVJLElBQUksQ0FBQ0UsR0FBTCxDQUFTLEdBQUdOLEVBQVo7QUFGQyxHQUFQO0FBSUQsQ0FqQk07O0FBbUJQLE1BQU1FLGdCQUFnQixHQUFHLENBQUMxUixLQUFELEVBQXlCMVEsT0FBekIsS0FBeUU7QUFDaEcsVUFBUTBRLEtBQUssQ0FBQ3BWLElBQWQ7QUFDRSxTQUFLdVUsMkVBQUw7QUFDRSxhQUFPNFMsbUNBQW1DLENBQUMvUixLQUFELENBQTFDOztBQUNGLFNBQUtiLHdFQUFMO0FBQ0UsYUFBTzhTLHVCQUF1QixDQUFDalMsS0FBRCxFQUFRMVEsT0FBUixDQUE5Qjs7QUFDRixTQUFLNlAsNEVBQUw7QUFDQSxTQUFLQSwwRUFBTDtBQUNFLGFBQU9nVCx5QkFBeUIsQ0FBQ25TLEtBQUQsQ0FBaEM7QUFQSjtBQVNELENBVkQ7O0FBWUEsTUFBTStSLG1DQUFtQyxHQUFJL1IsS0FBRCxJQUE0QjtBQUFBOztBQUN0RSw4QkFBT0EsS0FBSyxDQUFDSSxVQUFiLHNEQUFPLGtCQUFrQnhXLEdBQWxCLENBQXVCbU0sU0FBRCxJQUFlO0FBQzFDLFdBQU9BLFNBQVMsQ0FBQ0ssS0FBVixDQUFnQnhOLE1BQWhCLENBQXVCLENBQXZCLENBQVA7QUFDRCxHQUZNLENBQVA7QUFHRCxDQUpEOztBQU1BLE1BQU0rb0IsYUFBYSxHQUFHLENBQUNGLGdCQUFELEVBQTZCbmlCLE9BQTdCLEtBQXVEO0FBQzNFLE1BQUlrVSxJQUFjLEdBQUcsRUFBckI7QUFDQSxNQUFJZ08sRUFBRSxHQUFHLENBQUNELG9CQUFvQixDQUFDQyxFQUF0QixDQUFUOztBQUNBLE9BQUssTUFBTVksbUJBQVgsSUFBa0NYLGdCQUFsQyxFQUFvRDtBQUNsRCxVQUFNcmIsS0FBSyxHQUFHOUcsT0FBTyxDQUFDb0csSUFBUixDQUFjVSxLQUFELElBQVdBLEtBQUssQ0FBQ0YsS0FBTixLQUFnQmtjLG1CQUF4QyxDQUFkOztBQUVBLFFBQUksQ0FBQ2hjLEtBQUQsSUFBVSxDQUFDQSxLQUFLLENBQUNvTCxpQkFBckIsRUFBd0M7QUFDdEM7QUFDRDs7QUFDRGdDLElBQUFBLElBQUksQ0FBQzFXLElBQUwsQ0FBVXNKLEtBQUssQ0FBQ29MLGlCQUFOLENBQXdCZ0MsSUFBbEM7QUFDQWdPLElBQUFBLEVBQUUsQ0FBQzFrQixJQUFILENBQVFzSixLQUFLLENBQUNvTCxpQkFBTixDQUF3QmdRLEVBQWhDO0FBQ0Q7O0FBRUQsU0FBTztBQUNMaE8sSUFBQUEsSUFESztBQUVMZ08sSUFBQUE7QUFGSyxHQUFQO0FBSUQsQ0FqQkQ7O0FBbUJBLE1BQU1TLHVCQUF1QixHQUFHLENBQUNqUyxLQUFELEVBQXlCMVEsT0FBekIsS0FBbUQ7QUFDakYsU0FDRUEsT0FBTyxDQUNMO0FBREssR0FFSmtCLE1BRkgsQ0FFV3lGLENBQUQ7QUFBQTs7QUFBQSxXQUFPQSxDQUFDLENBQUNzTCxTQUFGLEtBQWdCLE9BQWhCLDBCQUEyQnZCLEtBQUssQ0FBQzFDLFVBQWpDLHNEQUEyQixrQkFBa0I1SyxRQUFsQixDQUEyQnVELENBQUMsQ0FBQ0MsS0FBN0IsQ0FBM0IsQ0FBUDtBQUFBLEdBRlYsRUFHR3RNLEdBSEgsQ0FHUXFNLENBQUQsSUFBTztBQUNWLFdBQU9BLENBQUMsQ0FBQ0MsS0FBVDtBQUNELEdBTEgsQ0FERjtBQVFELENBVEQ7O0FBV0EsTUFBTWljLHlCQUF5QixHQUFJblMsS0FBRCxJQUE0QjtBQUM1RCxTQUFPQSxLQUFLLENBQUMxQyxVQUFOLEdBQW1CLENBQUMwQyxLQUFLLENBQUMxQyxVQUFQLENBQW5CLEdBQXdDL1UsU0FBL0M7QUFDRCxDQUZEOzs7Ozs7Ozs7Ozs7O0FDekVBO0FBRUE7QUFFTyxNQUFNMlcsaUJBQWlCLEdBQUlvVCxTQUFELElBQXlEO0FBQ3hGLE1BQUksQ0FBQ0EsU0FBTCxFQUFnQjtBQUNkLFdBQU8sS0FBUDtBQUNEOztBQUVELE1BQUlELHVHQUFxQixDQUFDQyxTQUFTLENBQUNyUyxVQUFYLENBQXpCLEVBQWlEO0FBQy9DLFdBQU8sSUFBUDtBQUNEOztBQUVELFFBQU0zQyxVQUFVLEdBQUdnVixTQUFuQjs7QUFFQSxNQUFJLE9BQU9oVixVQUFVLENBQUMxUyxJQUFsQixLQUEyQixRQUEvQixFQUF5QztBQUN2QyxXQUFPLEtBQVA7QUFDRDs7QUFDRCxTQUFPNkIsTUFBTSxDQUFDQyxNQUFQLENBQWN5Uyx1REFBZCxFQUFtQ3pNLFFBQW5DLENBQTRDNEssVUFBVSxDQUFDMVMsSUFBdkQsQ0FBUDtBQUNELENBZk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSlA7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnREFBZ0QsZ0JBQWdCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsa0JBQWtCLGVBQWU7QUFDakM7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWMsMEJBQTBCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyx5QkFBeUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Es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QztBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7QUFNQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFF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O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0Msa0JBQWtCO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQsa0JBQWtCO0FBQ3JFO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQSxlQUFlLGVBQWU7QUFDOUI7O0FBRUE7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLFFBQVE7QUFDUjtBQUNBOztBQUVBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsSUFBSSx5QkFBeUI7QUFDN0Isc0JBQXNCLEtBQUs7QUFDM0I7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0EsNkVBQTZFO0FBQzdFLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUEsUUFBUTtBQUNSLDZEQUE2RCxzQkFBc0I7QUFDbkY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Ysb0VBQW9FOztBQUVwRSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQSxRQUFRO0FBQ1IsK0RBQStEOztBQUUvRCxRQUFRO0FBQ1I7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7O0FBRUEsSUFBSTtBQUNKOztBQUVBLElBQUk7QUFDSjs7QUFFQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUEsbUVBQW1FLDBCQUEwQjtBQUM3Rjs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSwwREFBMEQsMEJBQTBCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEU7QUFDOUU7O0FBRUEsa0RBQWtEO0FBQ2xEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQsZ0JBQWdCO0FBQ2pFO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxzQ0FBc0MsS0FBSztBQUMzQyxzQ0FBc0M7QUFDdEMsc0NBQXNDLEtBQUs7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsd0NBQXdDLGdCQUFnQjtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1REFBdUQsZ0JBQWdCO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsTUFBTTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLGdCQUFnQjtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlELGdCQUFnQjs7QUFFakU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLGlEQUFpRCxnQkFBZ0I7QUFDakU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixHQUFHO0FBQ2hDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsNENBQTRDLGdCQUFnQjtBQUM1RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxREFBcUQsZ0JBQWdCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBLGdEQUFnRCxnQkFBZ0I7QUFDaEU7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQSx1REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0Esa0NBQWtDLFdBQVc7QUFDN0M7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7QUFDeUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2hvb2tzL3VzZUNsZWFudXAudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9SdWxlRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2FwaS9wcmV2aWV3LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9QYW5lbFBsdWdpbnNCdXR0b25Hcm91cC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0FsZXJ0UnVsZUZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9Bbm5vdGF0aW9uS2V5SW5wdXQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9Bbm5vdGF0aW9uc0ZpZWxkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvQ2xvdWRFdmFsdWF0aW9uQmVoYXZpb3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9DbG91ZFJ1bGVzU291cmNlUGlja2VyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvQ29uZGl0aW9uRmllbGQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9EZXRhaWxzU3RlcC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0V4cHJlc3Npb25FZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9HcmFmYW5hQWxlcnRTdGF0ZVBpY2tlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0dyYWZhbmFDb25kaXRpb25FdmFsV2FybmluZy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0dyYWZhbmFFdmFsdWF0aW9uQmVoYXZpb3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9Hcm91cEFuZE5hbWVzcGFjZUZpZWxkcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0xhYmVsc0ZpZWxkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvUHJldmlld1J1bGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9QcmV2aWV3UnVsZVJlc3VsdC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL1F1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvUXVlcnlSb3dzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvUXVlcnlXcmFwcGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvUnVsZUVkaXRvclNlY3Rpb24udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9SdWxlSW5zcGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvU2VsZWN0V0l0aEFkZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL1ZpeldyYXBwZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9xdWVyeS1hbmQtYWxlcnQtY29uZGl0aW9uL0FsZXJ0VHlwZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL3F1ZXJ5LWFuZC1hbGVydC1jb25kaXRpb24vUXVlcnkudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9xdWVyeS1hbmQtYWxlcnQtY29uZGl0aW9uL1F1ZXJ5QW5kQWxlcnRDb25kaXRpb25TdGVwLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvcnVsZS10eXBlcy9EaXNhYmxlZFRvb2x0aXAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9ydWxlLXR5cGVzL0dyYWZhbmFNYW5hZ2VkQWxlcnQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9ydWxlLXR5cGVzL01pbWlyT3JMb2tpQWxlcnQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9ydWxlLXR5cGVzL01pbWlyT3JMb2tpUmVjb3JkaW5nUnVsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtZWRpdG9yL3J1bGUtdHlwZXMvUnVsZVR5cGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLWVkaXRvci9ydWxlLXR5cGVzL1J1bGVUeXBlUGlja2VyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS1lZGl0b3IvdXRpbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUFsZXJ0UXVlcmllc1N0YXR1cy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUZvbGRlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUlzUnVsZUVkaXRhYmxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlUnVsZVNvdXJjZXNXaXRoUnVsZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VWaXpIZWlnaHQudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9zdGF0ZS9BbGVydGluZ1F1ZXJ5UnVubmVyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdHlwZXMvcHJldmlldy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3V0aWxzL2FjY2Vzc0NvbnRyb2xIb29rcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3V0aWxzL3RpbWVSYW5nZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9leHByZXNzaW9ucy9ndWFyZHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL2pzLXlhbWwtbnBtLTQuMS4wLTM2MDZmMzIzMTItYzc4MzBkZmQ0NS56aXAvbm9kZV9tb2R1bGVzL2pzLXlhbWwvZGlzdC9qcy15YW1sLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBjbGVhblVwQWN0aW9uLCBTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vYWN0aW9ucy9jbGVhblVwJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNsZWFudXA8VD4oc3RhdGVTZWxlY3RvcjogU3RhdGVTZWxlY3RvcjxUPikge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIC8vYml0IG9mIGEgaGFjayB0byB1bmJ1cmRlbiB1c2VyIGZyb20gaGF2aW5nIHRvIHdyYXAgc3RhdGVTZWxjZXRvciBpbiBhIHVzZUNhbGxiYWNrLiBPdGhlcndpc2UgY2xlYW51cCB3b3VsZCBoYXBwZW4gb24gZXZlcnkgcmVuZGVyXG4gIGNvbnN0IHNlbGVjdG9yUmVmID0gdXNlUmVmKHN0YXRlU2VsZWN0b3IpO1xuICBzZWxlY3RvclJlZi5jdXJyZW50ID0gc3RhdGVTZWxlY3RvcjtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goY2xlYW5VcEFjdGlvbih7IHN0YXRlU2VsZWN0b3I6IHNlbGVjdG9yUmVmLmN1cnJlbnQgfSkpO1xuICAgIH07XG4gIH0sIFtkaXNwYXRjaF0pO1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0LCBMaW5rQnV0dG9uLCBMb2FkaW5nUGxhY2Vob2xkZXIsIHVzZVN0eWxlczIsIHdpdGhFcnJvckJvdW5kYXJ5IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgdXNlQ2xlYW51cCB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZUNsZWFudXAnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IFJ1bGVJZGVudGlmaWVyIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBBbGVydFJ1bGVGb3JtIH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGUtZWRpdG9yL0FsZXJ0UnVsZUZvcm0nO1xuaW1wb3J0IHsgdXNlSXNSdWxlRWRpdGFibGUgfSBmcm9tICcuL2hvb2tzL3VzZUlzUnVsZUVkaXRhYmxlJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBmZXRjaEFsbFByb21CdWlsZEluZm9BY3Rpb24sIGZldGNoRWRpdGFibGVSdWxlQWN0aW9uIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IHVzZVJ1bGVzQWNjZXNzIH0gZnJvbSAnLi91dGlscy9hY2Nlc3NDb250cm9sSG9va3MnO1xuaW1wb3J0ICogYXMgcnVsZUlkIGZyb20gJy4vdXRpbHMvcnVsZS1pZCc7XG5cbmludGVyZmFjZSBFeGlzdGluZ1J1bGVFZGl0b3JQcm9wcyB7XG4gIGlkZW50aWZpZXI6IFJ1bGVJZGVudGlmaWVyO1xufVxuXG5jb25zdCBFeGlzdGluZ1J1bGVFZGl0b3I6IEZDPEV4aXN0aW5nUnVsZUVkaXRvclByb3BzPiA9ICh7IGlkZW50aWZpZXIgfSkgPT4ge1xuICB1c2VDbGVhbnVwKChzdGF0ZSkgPT4gc3RhdGUudW5pZmllZEFsZXJ0aW5nLnJ1bGVGb3JtLmV4aXN0aW5nUnVsZSk7XG4gIGNvbnN0IHsgbG9hZGluZywgcmVzdWx0LCBlcnJvciwgZGlzcGF0Y2hlZCB9ID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ydWxlRm9ybS5leGlzdGluZ1J1bGUpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgaXNFZGl0YWJsZSB9ID0gdXNlSXNSdWxlRWRpdGFibGUocnVsZUlkLnJ1bGVJZGVudGlmaWVyVG9SdWxlU291cmNlTmFtZShpZGVudGlmaWVyKSwgcmVzdWx0Py5ydWxlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZGlzcGF0Y2hlZCkge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hFZGl0YWJsZVJ1bGVBY3Rpb24oaWRlbnRpZmllcikpO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoZWQsIGRpc3BhdGNoLCBpZGVudGlmaWVyXSk7XG5cbiAgaWYgKGxvYWRpbmcgfHwgaXNFZGl0YWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9XCJMb2FkaW5nIHJ1bGUuLi5cIiAvPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICk7XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImVycm9yXCIgdGl0bGU9XCJGYWlsZWQgdG8gbG9hZCBydWxlXCI+XG4gICAgICAgICAge2Vycm9yLm1lc3NhZ2V9XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgKTtcbiAgfVxuXG4gIGlmICghcmVzdWx0KSB7XG4gICAgcmV0dXJuIDxBbGVydFdhcm5pbmcgdGl0bGU9XCJSdWxlIG5vdCBmb3VuZFwiPlNvcnJ5ISBUaGlzIHJ1bGUgZG9lcyBub3QgZXhpc3QuPC9BbGVydFdhcm5pbmc+O1xuICB9XG5cbiAgaWYgKGlzRWRpdGFibGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIDxBbGVydFdhcm5pbmcgdGl0bGU9XCJDYW5ub3QgZWRpdCBydWxlXCI+U29ycnkhIFlvdSBkbyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGVkaXQgdGhpcyBydWxlLjwvQWxlcnRXYXJuaW5nPjtcbiAgfVxuXG4gIHJldHVybiA8QWxlcnRSdWxlRm9ybSBleGlzdGluZz17cmVzdWx0fSAvPjtcbn07XG5cbnR5cGUgUnVsZUVkaXRvclByb3BzID0gR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8eyBpZD86IHN0cmluZyB9PjtcblxuY29uc3QgUnVsZUVkaXRvcjogRkM8UnVsZUVkaXRvclByb3BzPiA9ICh7IG1hdGNoIH0pID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGlkIH0gPSBtYXRjaC5wYXJhbXM7XG4gIGNvbnN0IGlkZW50aWZpZXIgPSBydWxlSWQudHJ5UGFyc2UoaWQsIHRydWUpO1xuXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGRpc3BhdGNoKGZldGNoQWxsUHJvbUJ1aWxkSW5mb0FjdGlvbigpKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgY29uc3QgeyBjYW5DcmVhdGVHcmFmYW5hUnVsZXMsIGNhbkNyZWF0ZUNsb3VkUnVsZXMsIGNhbkVkaXRSdWxlcyB9ID0gdXNlUnVsZXNBY2Nlc3MoKTtcblxuICBpZiAoIWlkZW50aWZpZXIgJiYgIWNhbkNyZWF0ZUdyYWZhbmFSdWxlcyAmJiAhY2FuQ3JlYXRlQ2xvdWRSdWxlcykge1xuICAgIHJldHVybiA8QWxlcnRXYXJuaW5nIHRpdGxlPVwiQ2Fubm90IGNyZWF0ZSBydWxlc1wiPlNvcnJ5ISBZb3UgYXJlIG5vdCBhbGxvd2VkIHRvIGNyZWF0ZSBydWxlcy48L0FsZXJ0V2FybmluZz47XG4gIH1cblxuICBpZiAoaWRlbnRpZmllciAmJiAhY2FuRWRpdFJ1bGVzKGlkZW50aWZpZXIucnVsZVNvdXJjZU5hbWUpKSB7XG4gICAgcmV0dXJuIDxBbGVydFdhcm5pbmcgdGl0bGU9XCJDYW5ub3QgZWRpdCBydWxlc1wiPlNvcnJ5ISBZb3UgYXJlIG5vdCBhbGxvd2VkIHRvIGVkaXQgcnVsZXMuPC9BbGVydFdhcm5pbmc+O1xuICB9XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD1cIkxvYWRpbmcuLi5cIiAvPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICk7XG4gIH1cblxuICBpZiAoaWRlbnRpZmllcikge1xuICAgIHJldHVybiA8RXhpc3RpbmdSdWxlRWRpdG9yIGtleT17aWR9IGlkZW50aWZpZXI9e2lkZW50aWZpZXJ9IC8+O1xuICB9XG5cbiAgcmV0dXJuIDxBbGVydFJ1bGVGb3JtIC8+O1xufTtcblxuY29uc3QgQWxlcnRXYXJuaW5nOiBGQzx7IHRpdGxlOiBzdHJpbmcgfT4gPSAoeyB0aXRsZSwgY2hpbGRyZW4gfSkgPT4gKFxuICA8QWxlcnQgY2xhc3NOYW1lPXt1c2VTdHlsZXMyKHdhcm5pbmdTdHlsZXMpLndhcm5pbmd9IHNldmVyaXR5PVwid2FybmluZ1wiIHRpdGxlPXt0aXRsZX0+XG4gICAgPHA+e2NoaWxkcmVufTwvcD5cbiAgICA8TGlua0J1dHRvbiBocmVmPVwiYWxlcnRpbmcvbGlzdFwiPlRvIHJ1bGUgbGlzdDwvTGlua0J1dHRvbj5cbiAgPC9BbGVydD5cbik7XG5cbmNvbnN0IHdhcm5pbmdTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHdhcm5pbmc6IGNzc2BcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZyg0KX07XG4gIGAsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEVycm9yQm91bmRhcnkoUnVsZUVkaXRvciwgeyBzdHlsZTogJ3BhZ2UnIH0pO1xuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIGRhdGFGcmFtZUZyb21KU09OLFxuICBEYXRhRnJhbWVKU09OLFxuICBnZXREZWZhdWx0VGltZVJhbmdlLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgd2l0aExvYWRpbmdJbmRpY2F0b3IsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiwgdG9EYXRhUXVlcnlFcnJvciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQge1xuICBDbG91ZFByZXZpZXdSdWxlUmVxdWVzdCxcbiAgR3JhZmFuYVByZXZpZXdSdWxlUmVxdWVzdCxcbiAgaXNDbG91ZFByZXZpZXdSZXF1ZXN0LFxuICBpc0dyYWZhbmFQcmV2aWV3UmVxdWVzdCxcbiAgUHJldmlld1J1bGVSZXF1ZXN0LFxuICBQcmV2aWV3UnVsZVJlc3BvbnNlLFxufSBmcm9tICcuLi90eXBlcy9wcmV2aWV3JztcbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSB9IGZyb20gJy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmV2aWV3QWxlcnRSdWxlKHJlcXVlc3Q6IFByZXZpZXdSdWxlUmVxdWVzdCk6IE9ic2VydmFibGU8UHJldmlld1J1bGVSZXNwb25zZT4ge1xuICBpZiAoaXNDbG91ZFByZXZpZXdSZXF1ZXN0KHJlcXVlc3QpKSB7XG4gICAgcmV0dXJuIHByZXZpZXdDbG91ZEFsZXJ0UnVsZShyZXF1ZXN0KTtcbiAgfVxuXG4gIGlmIChpc0dyYWZhbmFQcmV2aWV3UmVxdWVzdChyZXF1ZXN0KSkge1xuICAgIHJldHVybiBwcmV2aWV3R3JhZmFuYUFsZXJ0UnVsZShyZXF1ZXN0KTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgcHJldmlldyBydWxlIHJlcXVlc3QnKTtcbn1cblxudHlwZSBHcmFmYW5hUHJldmlld1J1bGVSZXNwb25zZSA9IHtcbiAgaW5zdGFuY2VzOiBEYXRhRnJhbWVKU09OW107XG59O1xuXG5mdW5jdGlvbiBwcmV2aWV3R3JhZmFuYUFsZXJ0UnVsZShyZXF1ZXN0OiBHcmFmYW5hUHJldmlld1J1bGVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxQcmV2aWV3UnVsZVJlc3BvbnNlPiB7XG4gIGNvbnN0IHR5cGUgPSBSdWxlRm9ybVR5cGUuZ3JhZmFuYTtcblxuICByZXR1cm4gd2l0aExvYWRpbmdJbmRpY2F0b3Ioe1xuICAgIHdoaWxlTG9hZGluZzogY3JlYXRlUmVzcG9uc2UodHlwZSksXG4gICAgc291cmNlOiBnZXRCYWNrZW5kU3J2KClcbiAgICAgIC5mZXRjaDxHcmFmYW5hUHJldmlld1J1bGVSZXNwb25zZT4oe1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgdXJsOiBgL2FwaS92MS9ydWxlL3Rlc3QvZ3JhZmFuYWAsXG4gICAgICAgIGRhdGE6IHJlcXVlc3QsXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gY3JlYXRlUmVzcG9uc2UodHlwZSwge1xuICAgICAgICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgICAgICAgICAgc2VyaWVzOiBkYXRhLmluc3RhbmNlcy5tYXAoZGF0YUZyYW1lRnJvbUpTT04pLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9mKFxuICAgICAgICAgICAgY3JlYXRlUmVzcG9uc2UodHlwZSwge1xuICAgICAgICAgICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkVycm9yLFxuICAgICAgICAgICAgICBlcnJvcjogdG9EYXRhUXVlcnlFcnJvcihlcnJvciksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgICBzaGFyZSgpXG4gICAgICApLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVzcG9uc2UocnVsZVR5cGU6IFJ1bGVGb3JtVHlwZSwgZGF0YTogUGFydGlhbDxQYW5lbERhdGE+ID0ge30pOiBQcmV2aWV3UnVsZVJlc3BvbnNlIHtcbiAgcmV0dXJuIHtcbiAgICBydWxlVHlwZSxcbiAgICBkYXRhOiB7XG4gICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkxvYWRpbmcsXG4gICAgICBzZXJpZXM6IFtdLFxuICAgICAgdGltZVJhbmdlOiBnZXREZWZhdWx0VGltZVJhbmdlKCksXG4gICAgICAuLi5kYXRhLFxuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIHByZXZpZXdDbG91ZEFsZXJ0UnVsZShyZXF1ZXN0OiBDbG91ZFByZXZpZXdSdWxlUmVxdWVzdCk6IE9ic2VydmFibGU8UHJldmlld1J1bGVSZXNwb25zZT4ge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3ByZXZpZXcgZm9yIGNsb3VkIGFsZXJ0aW5nIHJ1bGVzIGlzIG5vdCBpbXBsZW1lbnRlZCcpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBSYWRpb0J1dHRvbkdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBTVEFULCBUQUJMRSwgVElNRVNFUklFUyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCB0eXBlIFN1cHBvcnRlZFBhbmVsUGx1Z2lucyA9ICd0aW1lc2VyaWVzJyB8ICd0YWJsZScgfCAnc3RhdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHZhbHVlOiBTdXBwb3J0ZWRQYW5lbFBsdWdpbnM7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IFN1cHBvcnRlZFBhbmVsUGx1Z2lucykgPT4gdm9pZDtcbiAgc2l6ZT86ICdzbScgfCAnbWQnO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBhbmVsUGx1Z2luc0J1dHRvbkdyb3VwKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgdmFsdWUsIG9uQ2hhbmdlLCBzaXplID0gJ21kJyB9ID0gcHJvcHM7XG4gIGNvbnN0IHBhbmVscyA9IHVzZU1lbW8oKCkgPT4gZ2V0U3VwcG9ydGVkUGFuZWxzKCksIFtdKTtcblxuICByZXR1cm4gPFJhZGlvQnV0dG9uR3JvdXAgb3B0aW9ucz17cGFuZWxzfSB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gc2l6ZT17c2l6ZX0gLz47XG59XG5cbmZ1bmN0aW9uIGdldFN1cHBvcnRlZFBhbmVscygpOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8U3VwcG9ydGVkUGFuZWxQbHVnaW5zPj4ge1xuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhjb25maWcucGFuZWxzKS5yZWR1Y2UoKHBhbmVsczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPFN1cHBvcnRlZFBhbmVsUGx1Z2lucz4+LCBwYW5lbCkgPT4ge1xuICAgIGlmIChpc1N1cHBvcnRlZFBhbmVsUGx1Z2luKHBhbmVsLmlkKSkge1xuICAgICAgcGFuZWxzLnB1c2goe1xuICAgICAgICB2YWx1ZTogcGFuZWwuaWQsXG4gICAgICAgIGxhYmVsOiBwYW5lbC5uYW1lLFxuICAgICAgICBpbWdVcmw6IHBhbmVsLmluZm8ubG9nb3Muc21hbGwsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhbmVscztcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBpc1N1cHBvcnRlZFBhbmVsUGx1Z2luKGlkOiBzdHJpbmcpOiBpZCBpcyBTdXBwb3J0ZWRQYW5lbFBsdWdpbnMge1xuICBzd2l0Y2ggKGlkKSB7XG4gICAgY2FzZSBUSU1FU0VSSUVTOlxuICAgIGNhc2UgVEFCTEU6XG4gICAgY2FzZSBTVEFUOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtLCBGb3JtUHJvdmlkZXIsIFVzZUZvcm1XYXRjaCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUGFnZVRvb2xiYXIsIEJ1dHRvbiwgdXNlU3R5bGVzMiwgQ3VzdG9tU2Nyb2xsYmFyLCBTcGlubmVyLCBDb25maXJtTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VBcHBOb3RpZmljYXRpb24gfSBmcm9tICdhcHAvY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyB1c2VDbGVhbnVwIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlQ2xlYW51cCc7XG5pbXBvcnQgeyB1c2VRdWVyeVBhcmFtcyB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZVF1ZXJ5UGFyYW1zJztcbmltcG9ydCB7IFJ1bGVXaXRoTG9jYXRpb24gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5cbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgZGVsZXRlUnVsZUFjdGlvbiwgc2F2ZVJ1bGVGb3JtQWN0aW9uIH0gZnJvbSAnLi4vLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUsIFJ1bGVGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcbmltcG9ydCB7IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3JlZHV4JztcbmltcG9ydCB7IHJ1bGVyUnVsZVRvRm9ybVZhbHVlcywgZ2V0RGVmYXVsdEZvcm1WYWx1ZXMsIGdldERlZmF1bHRRdWVyaWVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZS1mb3JtJztcbmltcG9ydCAqIGFzIHJ1bGVJZCBmcm9tICcuLi8uLi91dGlscy9ydWxlLWlkJztcblxuaW1wb3J0IHsgQ2xvdWRFdmFsdWF0aW9uQmVoYXZpb3IgfSBmcm9tICcuL0Nsb3VkRXZhbHVhdGlvbkJlaGF2aW9yJztcbmltcG9ydCB7IERldGFpbHNTdGVwIH0gZnJvbSAnLi9EZXRhaWxzU3RlcCc7XG5pbXBvcnQgeyBHcmFmYW5hRXZhbHVhdGlvbkJlaGF2aW9yIH0gZnJvbSAnLi9HcmFmYW5hRXZhbHVhdGlvbkJlaGF2aW9yJztcbmltcG9ydCB7IFJ1bGVJbnNwZWN0b3IgfSBmcm9tICcuL1J1bGVJbnNwZWN0b3InO1xuaW1wb3J0IHsgUXVlcnlBbmRBbGVydENvbmRpdGlvblN0ZXAgfSBmcm9tICcuL3F1ZXJ5LWFuZC1hbGVydC1jb25kaXRpb24vUXVlcnlBbmRBbGVydENvbmRpdGlvblN0ZXAnO1xuXG50eXBlIFByb3BzID0ge1xuICBleGlzdGluZz86IFJ1bGVXaXRoTG9jYXRpb247XG59O1xuXG5leHBvcnQgY29uc3QgQWxlcnRSdWxlRm9ybTogRkM8UHJvcHM+ID0gKHsgZXhpc3RpbmcgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgbm90aWZ5QXBwID0gdXNlQXBwTm90aWZpY2F0aW9uKCk7XG4gIGNvbnN0IFtxdWVyeVBhcmFtc10gPSB1c2VRdWVyeVBhcmFtcygpO1xuICBjb25zdCBbc2hvd0VkaXRZYW1sLCBzZXRTaG93RWRpdFlhbWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJldHVyblRvOiBzdHJpbmcgPSAocXVlcnlQYXJhbXNbJ3JldHVyblRvJ10gYXMgc3RyaW5nIHwgdW5kZWZpbmVkKSA/PyAnL2FsZXJ0aW5nL2xpc3QnO1xuICBjb25zdCBbc2hvd0RlbGV0ZU1vZGFsLCBzZXRTaG93RGVsZXRlTW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGRlZmF1bHRWYWx1ZXM6IFJ1bGVGb3JtVmFsdWVzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICByZXR1cm4gcnVsZXJSdWxlVG9Gb3JtVmFsdWVzKGV4aXN0aW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmdldERlZmF1bHRGb3JtVmFsdWVzKCksXG4gICAgICBxdWVyaWVzOiBnZXREZWZhdWx0UXVlcmllcygpLFxuICAgICAgLi4uKHF1ZXJ5UGFyYW1zWydkZWZhdWx0cyddID8gSlNPTi5wYXJzZShxdWVyeVBhcmFtc1snZGVmYXVsdHMnXSBhcyBzdHJpbmcpIDoge30pLFxuICAgICAgdHlwZTogUnVsZUZvcm1UeXBlLmdyYWZhbmEsXG4gICAgfTtcbiAgfSwgW2V4aXN0aW5nLCBxdWVyeVBhcmFtc10pO1xuXG4gIGNvbnN0IGZvcm1BUEkgPSB1c2VGb3JtPFJ1bGVGb3JtVmFsdWVzPih7XG4gICAgbW9kZTogJ29uU3VibWl0JyxcbiAgICBkZWZhdWx0VmFsdWVzLFxuICAgIHNob3VsZEZvY3VzRXJyb3I6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCB3YXRjaCB9ID0gZm9ybUFQSTtcblxuICBjb25zdCB0eXBlID0gd2F0Y2goJ3R5cGUnKTtcbiAgY29uc3QgZGF0YVNvdXJjZU5hbWUgPSB3YXRjaCgnZGF0YVNvdXJjZU5hbWUnKTtcblxuICBjb25zdCBzaG93U3RlcDIgPSBCb29sZWFuKHR5cGUgJiYgKHR5cGUgPT09IFJ1bGVGb3JtVHlwZS5ncmFmYW5hIHx8ICEhZGF0YVNvdXJjZU5hbWUpKTtcblxuICBjb25zdCBzdWJtaXRTdGF0ZSA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZUZvcm0uc2F2ZVJ1bGUpIHx8IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcbiAgdXNlQ2xlYW51cCgoc3RhdGUpID0+IHN0YXRlLnVuaWZpZWRBbGVydGluZy5ydWxlRm9ybS5zYXZlUnVsZSk7XG5cbiAgY29uc3Qgc3VibWl0ID0gKHZhbHVlczogUnVsZUZvcm1WYWx1ZXMsIGV4aXRPblNhdmU6IGJvb2xlYW4pID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIHNhdmVSdWxlRm9ybUFjdGlvbih7XG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgIC4uLmRlZmF1bHRWYWx1ZXMsXG4gICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgIGFubm90YXRpb25zOlxuICAgICAgICAgICAgdmFsdWVzLmFubm90YXRpb25zXG4gICAgICAgICAgICAgID8ubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gKHsga2V5OiBrZXkudHJpbSgpLCB2YWx1ZTogdmFsdWUudHJpbSgpIH0pKVxuICAgICAgICAgICAgICAuZmlsdGVyKCh7IGtleSwgdmFsdWUgfSkgPT4gISFrZXkgJiYgISF2YWx1ZSkgPz8gW10sXG4gICAgICAgICAgbGFiZWxzOlxuICAgICAgICAgICAgdmFsdWVzLmxhYmVsc1xuICAgICAgICAgICAgICA/Lm1hcCgoeyBrZXksIHZhbHVlIH0pID0+ICh7IGtleToga2V5LnRyaW0oKSwgdmFsdWU6IHZhbHVlLnRyaW0oKSB9KSlcbiAgICAgICAgICAgICAgLmZpbHRlcigoeyBrZXkgfSkgPT4gISFrZXkpID8/IFtdLFxuICAgICAgICB9LFxuICAgICAgICBleGlzdGluZyxcbiAgICAgICAgcmVkaXJlY3RPblNhdmU6IGV4aXRPblNhdmUgPyByZXR1cm5UbyA6IHVuZGVmaW5lZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVSdWxlID0gKCkgPT4ge1xuICAgIGlmIChleGlzdGluZykge1xuICAgICAgY29uc3QgaWRlbnRpZmllciA9IHJ1bGVJZC5mcm9tUnVsZXJSdWxlKFxuICAgICAgICBleGlzdGluZy5ydWxlU291cmNlTmFtZSxcbiAgICAgICAgZXhpc3RpbmcubmFtZXNwYWNlLFxuICAgICAgICBleGlzdGluZy5ncm91cC5uYW1lLFxuICAgICAgICBleGlzdGluZy5ydWxlXG4gICAgICApO1xuXG4gICAgICBkaXNwYXRjaChkZWxldGVSdWxlQWN0aW9uKGlkZW50aWZpZXIsIHsgbmF2aWdhdGVUbzogJy9hbGVydGluZy9saXN0JyB9KSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uSW52YWxpZCA9ICgpID0+IHtcbiAgICBub3RpZnlBcHAuZXJyb3IoJ1RoZXJlIGFyZSBlcnJvcnMgaW4gdGhlIGZvcm0uIFBsZWFzZSBjb3JyZWN0IHRoZW0gYW5kIHRyeSBhZ2FpbiEnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtUHJvdmlkZXIgey4uLmZvcm1BUEl9PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT17c3R5bGVzLmZvcm19PlxuICAgICAgICA8UGFnZVRvb2xiYXIgdGl0bGU9e2Ake2V4aXN0aW5nID8gJ0VkaXQnIDogJ0NyZWF0ZSd9IGFsZXJ0IHJ1bGVgfSBwYWdlSWNvbj1cImJlbGxcIj5cbiAgICAgICAgICA8TGluayB0bz17cmV0dXJuVG99PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgZGlzYWJsZWQ9e3N1Ym1pdFN0YXRlLmxvYWRpbmd9IHR5cGU9XCJidXR0b25cIiBmaWxsPVwib3V0bGluZVwiPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7ZXhpc3RpbmcgPyAoXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RGVsZXRlTW9kYWwodHJ1ZSl9PlxuICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtpc0NvcnRleExva2lPclJlY29yZGluZ1J1bGUod2F0Y2gpICYmIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RWRpdFlhbWwodHJ1ZSl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXRTdGF0ZS5sb2FkaW5nfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBFZGl0IHlhbWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXQoKHZhbHVlcykgPT4gc3VibWl0KHZhbHVlcywgZmFsc2UpLCBvbkludmFsaWQpfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdFN0YXRlLmxvYWRpbmd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3N1Ym1pdFN0YXRlLmxvYWRpbmcgJiYgPFNwaW5uZXIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uU3Bpbm5lcn0gaW5saW5lPXt0cnVlfSAvPn1cbiAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdCgodmFsdWVzKSA9PiBzdWJtaXQodmFsdWVzLCB0cnVlKSwgb25JbnZhbGlkKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXRTdGF0ZS5sb2FkaW5nfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzdWJtaXRTdGF0ZS5sb2FkaW5nICYmIDxTcGlubmVyIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvblNwaW5uZXJ9IGlubGluZT17dHJ1ZX0gLz59XG4gICAgICAgICAgICBTYXZlIGFuZCBleGl0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvUGFnZVRvb2xiYXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudE91dGVyfT5cbiAgICAgICAgICA8Q3VzdG9tU2Nyb2xsYmFyIGF1dG9IZWlnaHRNaW49XCIxMDAlXCIgaGlkZUhvcml6b250YWxUcmFjaz17dHJ1ZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRJbm5lcn0+XG4gICAgICAgICAgICAgIDxRdWVyeUFuZEFsZXJ0Q29uZGl0aW9uU3RlcCBlZGl0aW5nRXhpc3RpbmdSdWxlPXshIWV4aXN0aW5nfSAvPlxuICAgICAgICAgICAgICB7c2hvd1N0ZXAyICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAge3R5cGUgPT09IFJ1bGVGb3JtVHlwZS5ncmFmYW5hID8gPEdyYWZhbmFFdmFsdWF0aW9uQmVoYXZpb3IgLz4gOiA8Q2xvdWRFdmFsdWF0aW9uQmVoYXZpb3IgLz59XG4gICAgICAgICAgICAgICAgICA8RGV0YWlsc1N0ZXAgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ3VzdG9tU2Nyb2xsYmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHtzaG93RGVsZXRlTW9kYWwgPyAoXG4gICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICBpc09wZW49e3RydWV9XG4gICAgICAgICAgdGl0bGU9XCJEZWxldGUgcnVsZVwiXG4gICAgICAgICAgYm9keT1cIkRlbGV0aW5nIHRoaXMgcnVsZSB3aWxsIHBlcm1hbmVudGx5IHJlbW92ZSBpdC4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJ1bGU/XCJcbiAgICAgICAgICBjb25maXJtVGV4dD1cIlllcywgZGVsZXRlXCJcbiAgICAgICAgICBpY29uPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIlxuICAgICAgICAgIG9uQ29uZmlybT17ZGVsZXRlUnVsZX1cbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldFNob3dEZWxldGVNb2RhbChmYWxzZSl9XG4gICAgICAgIC8+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHtzaG93RWRpdFlhbWwgPyA8UnVsZUluc3BlY3RvciBvbkNsb3NlPXsoKSA9PiBzZXRTaG93RWRpdFlhbWwoZmFsc2UpfSAvPiA6IG51bGx9XG4gICAgPC9Gb3JtUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCBpc0NvcnRleExva2lPclJlY29yZGluZ1J1bGUgPSAod2F0Y2g6IFVzZUZvcm1XYXRjaDxSdWxlRm9ybVZhbHVlcz4pID0+IHtcbiAgY29uc3QgW3J1bGVUeXBlLCBkYXRhU291cmNlTmFtZV0gPSB3YXRjaChbJ3R5cGUnLCAnZGF0YVNvdXJjZU5hbWUnXSk7XG5cbiAgcmV0dXJuIChydWxlVHlwZSA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkQWxlcnRpbmcgfHwgcnVsZVR5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZykgJiYgZGF0YVNvdXJjZU5hbWUgIT09ICcnO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYnV0dG9uU3Bpbm5lcjogY3NzYFxuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGAsXG4gICAgZm9ybTogY3NzYFxuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBgLFxuICAgIGNvbnRlbnRJbm5lcjogY3NzYFxuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgICBjb250ZW50T3V0ZXI6IGNzc2BcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIud2Vha307XG4gICAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygpfTtcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDAsIDIsIDIpfTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBmbGV4OiAxO1xuICAgIGAsXG4gICAgZmxleFJvdzogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBBbm5vdGF0aW9uLCBhbm5vdGF0aW9uTGFiZWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcblxuaW1wb3J0IHsgU2VsZWN0V2l0aEFkZCB9IGZyb20gJy4vU2VsZWN0V0l0aEFkZCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgZXhpc3RpbmdLZXlzOiBzdHJpbmdbXTtcblxuICB2YWx1ZT86IHN0cmluZztcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgJ2FyaWEtbGFiZWwnPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQW5ub3RhdGlvbktleUlucHV0OiBGQzxQcm9wcz4gPSAoeyB2YWx1ZSwgZXhpc3RpbmdLZXlzLCAnYXJpYS1sYWJlbCc6IGFyaWFMYWJlbCwgLi4ucmVzdCB9KSA9PiB7XG4gIGNvbnN0IGFubm90YXRpb25PcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKTogU2VsZWN0YWJsZVZhbHVlW10gPT5cbiAgICAgIE9iamVjdC52YWx1ZXMoQW5ub3RhdGlvbilcbiAgICAgICAgLmZpbHRlcigoa2V5KSA9PiAhZXhpc3RpbmdLZXlzLmluY2x1ZGVzKGtleSkpIC8vIHJlbW92ZSBrZXlzIGFscmVhZHkgdGFrZW4gaW4gb3RoZXIgYW5ub3RhdGlvbnNcbiAgICAgICAgLm1hcCgoa2V5KSA9PiAoeyB2YWx1ZToga2V5LCBsYWJlbDogYW5ub3RhdGlvbkxhYmVsc1trZXldIH0pKSxcbiAgICBbZXhpc3RpbmdLZXlzXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdFdpdGhBZGRcbiAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIG9wdGlvbnM9e2Fubm90YXRpb25PcHRpb25zfVxuICAgICAgY3VzdG9tPXshIXZhbHVlICYmICEoT2JqZWN0LnZhbHVlcyhBbm5vdGF0aW9uKSBhcyBzdHJpbmdbXSkuaW5jbHVkZXModmFsdWUpfVxuICAgICAgey4uLnJlc3R9XG4gICAgLz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgRmllbGRBcnJheSwgSW5wdXQsIElucHV0Q29udHJvbCwgTGFiZWwsIFRleHRBcmVhLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFJ1bGVGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcblxuaW1wb3J0IHsgQW5ub3RhdGlvbktleUlucHV0IH0gZnJvbSAnLi9Bbm5vdGF0aW9uS2V5SW5wdXQnO1xuXG5jb25zdCBBbm5vdGF0aW9uc0ZpZWxkOiBGQyA9ICgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG4gIGNvbnN0IHtcbiAgICBjb250cm9sLFxuICAgIHJlZ2lzdGVyLFxuICAgIHdhdGNoLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm1Db250ZXh0KCk7XG4gIGNvbnN0IGFubm90YXRpb25zID0gd2F0Y2goJ2Fubm90YXRpb25zJykgYXMgUnVsZUZvcm1WYWx1ZXNbJ2Fubm90YXRpb25zJ107XG5cbiAgY29uc3QgZXhpc3RpbmdLZXlzID0gdXNlQ2FsbGJhY2soXG4gICAgKGluZGV4OiBudW1iZXIpOiBzdHJpbmdbXSA9PiBhbm5vdGF0aW9ucy5maWx0ZXIoKF8sIGlkeDogbnVtYmVyKSA9PiBpZHggIT09IGluZGV4KS5tYXAoKHsga2V5IH0pID0+IGtleSksXG4gICAgW2Fubm90YXRpb25zXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYWJlbD5TdW1tYXJ5IGFuZCBhbm5vdGF0aW9uczwvTGFiZWw+XG4gICAgICA8RmllbGRBcnJheSBuYW1lPXsnYW5ub3RhdGlvbnMnfSBjb250cm9sPXtjb250cm9sfT5cbiAgICAgICAgeyh7IGZpZWxkcywgYXBwZW5kLCByZW1vdmUgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhDb2x1bW59PlxuICAgICAgICAgICAgICB7ZmllbGRzLm1hcCgoZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNVcmwgPSBhbm5vdGF0aW9uc1tpbmRleF0/LmtleT8udG9Mb2NhbGVMb3dlckNhc2UoKS5lbmRzV2l0aCgndXJsJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgVmFsdWVJbnB1dENvbXBvbmVudCA9IGlzVXJsID8gSW5wdXQgOiBUZXh0QXJlYTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZpZWxkLmlkfSBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuYW5ub3RhdGlvbnM/LltpbmRleF0/LmtleT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmFubm90YXRpb25zPy5baW5kZXhdPy5rZXk/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2Bhbm5vdGF0aW9uLWtleS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtgYW5ub3RhdGlvbnNbJHtpbmRleH1dLmtleWB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBbm5vdGF0aW9uS2V5SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YEFubm90YXRpb24gZGV0YWlsICR7aW5kZXggKyAxfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdLZXlzPXtleGlzdGluZ0tleXMoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxOH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3sgcmVxdWlyZWQ6IHsgdmFsdWU6ICEhYW5ub3RhdGlvbnNbaW5kZXhdPy52YWx1ZSwgbWVzc2FnZTogJ1JlcXVpcmVkLicgfSB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmZsZXhSb3dJdGVtTWFyZ2luLCBzdHlsZXMuZmllbGQpfVxuICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmFubm90YXRpb25zPy5baW5kZXhdPy52YWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmFubm90YXRpb25zPy5baW5kZXhdPy52YWx1ZT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxWYWx1ZUlucHV0Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17YGFubm90YXRpb24tdmFsdWUtJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjeChzdHlsZXMuYW5ub3RhdGlvblZhbHVlSW5wdXQsIHsgW3N0eWxlcy50ZXh0YXJlYV06ICFpc1VybCB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgYW5ub3RhdGlvbnNbJHtpbmRleH1dLnZhbHVlYCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aXNVcmwgPyAnaHR0cHM6Ly8nIDogYFRleHRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtmaWVsZC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd0l0ZW1NYXJnaW59XG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImRlbGV0ZSBhbm5vdGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidHJhc2gtYWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmUoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRBbm5vdGF0aW9uc0J1dHRvbn1cbiAgICAgICAgICAgICAgICBpY29uPVwicGx1cy1jaXJjbGVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGFwcGVuZCh7IGtleTogJycsIHZhbHVlOiAnJyB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWRkIGluZm9cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9GaWVsZEFycmF5PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGFubm90YXRpb25WYWx1ZUlucHV0OiBjc3NgXG4gICAgd2lkdGg6IDQyNnB4O1xuICBgLFxuICB0ZXh0YXJlYTogY3NzYFxuICAgIGhlaWdodDogNzZweDtcbiAgYCxcbiAgYWRkQW5ub3RhdGlvbnNCdXR0b246IGNzc2BcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMTQ4cHg7XG4gIGAsXG4gIGZsZXhDb2x1bW46IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGAsXG4gIGZpZWxkOiBjc3NgXG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnhzfTtcbiAgYCxcbiAgZmxleFJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGAsXG4gIGZsZXhSb3dJdGVtTWFyZ2luOiBjc3NgXG4gICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gIGAsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQW5ub3RhdGlvbnNGaWVsZDtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRmllbGQsIElucHV0LCBJbnB1dENvbnRyb2wsIFNlbGVjdCwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUsIFJ1bGVGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcbmltcG9ydCB7IHRpbWVPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvdGltZSc7XG5cbmltcG9ydCB7IFByZXZpZXdSdWxlIH0gZnJvbSAnLi9QcmV2aWV3UnVsZSc7XG5pbXBvcnQgeyBSdWxlRWRpdG9yU2VjdGlvbiB9IGZyb20gJy4vUnVsZUVkaXRvclNlY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgQ2xvdWRFdmFsdWF0aW9uQmVoYXZpb3I6IEZDID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGNvbnRyb2wsXG4gICAgd2F0Y2gsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybUNvbnRleHQ8UnVsZUZvcm1WYWx1ZXM+KCk7XG5cbiAgY29uc3QgdHlwZSA9IHdhdGNoKCd0eXBlJyk7XG5cbiAgLy8gY2xvdWQgcmVjb3JkaW5nIHJ1bGVzIGRvIG5vdCBoYXZlIGFsZXJ0IGNvbmRpdGlvbnNcbiAgaWYgKHR5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UnVsZUVkaXRvclNlY3Rpb24gc3RlcE5vPXsyfSB0aXRsZT1cIkFsZXJ0IGV2YWx1YXRpb24gYmVoYXZpb3JcIj5cbiAgICAgIDxGaWVsZCBsYWJlbD1cIkZvclwiIGRlc2NyaXB0aW9uPVwiRXhwcmVzc2lvbiBoYXMgdG8gYmUgdHJ1ZSBmb3IgdGhpcyBsb25nIGZvciB0aGUgYWxlcnQgdG8gYmUgZmlyZWQuXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd30+XG4gICAgICAgICAgPEZpZWxkIGludmFsaWQ9eyEhZXJyb3JzLmZvclRpbWU/Lm1lc3NhZ2V9IGVycm9yPXtlcnJvcnMuZm9yVGltZT8ubWVzc2FnZX0gY2xhc3NOYW1lPXtzdHlsZXMuaW5saW5lRmllbGR9PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZm9yVGltZScsIHsgcGF0dGVybjogeyB2YWx1ZTogL15cXGQrJC8sIG1lc3NhZ2U6ICdNdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlci4nIH0gfSl9XG4gICAgICAgICAgICAgIHdpZHRoPXs4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgIG5hbWU9XCJmb3JUaW1lVW5pdFwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RpbWVPcHRpb25zfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKHZhbHVlPy52YWx1ZSl9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezE1fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVVbml0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPFByZXZpZXdSdWxlIC8+XG4gICAgPC9SdWxlRWRpdG9yU2VjdGlvbj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICBpbmxpbmVGaWVsZDogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIGAsXG4gIGZsZXhSb3c6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBgLFxuICB0aW1lVW5pdDogY3NzYFxuICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcueHN9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGlja2VyIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCB7IHVzZVJ1bGVzU291cmNlc1dpdGhSdWxlciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVJ1bGVTb3VyY2VzV2l0aFJ1bGVyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgb25DaGFuZ2U6IChkczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpID0+IHZvaWQ7XG4gIHZhbHVlOiBzdHJpbmcgfCBudWxsO1xuICBvbkJsdXI/OiAoKSA9PiB2b2lkO1xuICBuYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2xvdWRSdWxlc1NvdXJjZVBpY2tlcih7IHZhbHVlLCAuLi5wcm9wcyB9OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgY29uc3QgcnVsZXNTb3VyY2VzV2l0aFJ1bGVyID0gdXNlUnVsZXNTb3VyY2VzV2l0aFJ1bGVyKCk7XG5cbiAgY29uc3QgZGF0YVNvdXJjZUZpbHRlciA9IHVzZUNhbGxiYWNrKFxuICAgIChkczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpOiBib29sZWFuID0+IHtcbiAgICAgIHJldHVybiAhIXJ1bGVzU291cmNlc1dpdGhSdWxlci5maW5kKCh7IGlkIH0pID0+IGlkID09PSBkcy5pZCk7XG4gICAgfSxcbiAgICBbcnVsZXNTb3VyY2VzV2l0aFJ1bGVyXVxuICApO1xuXG4gIHJldHVybiA8RGF0YVNvdXJjZVBpY2tlciBub0RlZmF1bHQgYWxlcnRpbmcgZmlsdGVyPXtkYXRhU291cmNlRmlsdGVyfSBjdXJyZW50PXt2YWx1ZX0gey4uLnByb3BzfSAvPjtcbn1cbiIsImltcG9ydCB7IGxhc3QgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRmllbGQsIElucHV0Q29udHJvbCwgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRXhwcmVzc2lvbkRhdGFzb3VyY2VVSUQgfSBmcm9tICdhcHAvZmVhdHVyZXMvZXhwcmVzc2lvbnMvRXhwcmVzc2lvbkRhdGFzb3VyY2UnO1xuXG5pbXBvcnQgeyBSdWxlRm9ybVZhbHVlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5cbmV4cG9ydCBjb25zdCBDb25kaXRpb25GaWVsZDogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB3YXRjaCxcbiAgICBzZXRWYWx1ZSxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtQ29udGV4dDxSdWxlRm9ybVZhbHVlcz4oKTtcblxuICBjb25zdCBxdWVyaWVzID0gd2F0Y2goJ3F1ZXJpZXMnKTtcbiAgY29uc3QgY29uZGl0aW9uID0gd2F0Y2goJ2NvbmRpdGlvbicpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpOiBTZWxlY3RhYmxlVmFsdWVbXSA9PlxuICAgICAgcXVlcmllc1xuICAgICAgICAuZmlsdGVyKChxKSA9PiAhIXEucmVmSWQpXG4gICAgICAgIC5tYXAoKHEpID0+ICh7XG4gICAgICAgICAgdmFsdWU6IHEucmVmSWQsXG4gICAgICAgICAgbGFiZWw6IHEucmVmSWQsXG4gICAgICAgIH0pKSxcbiAgICBbcXVlcmllc11cbiAgKTtcblxuICBjb25zdCBleHByZXNzaW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBxdWVyaWVzLmZpbHRlcigocXVlcnkpID0+IHF1ZXJ5LmRhdGFzb3VyY2VVaWQgPT09IEV4cHJlc3Npb25EYXRhc291cmNlVUlEKTtcbiAgfSwgW3F1ZXJpZXNdKTtcblxuICAvLyBhdXRvbWF0aWNhbGx5IHVzZSB0aGUgbGFzdCBleHByZXNzaW9uIHdoZW4gbmV3IGV4cHJlc3Npb25zIGhhdmUgYmVlbiBhZGRlZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxhc3RFeHByZXNzaW9uID0gbGFzdChleHByZXNzaW9ucyk7XG4gICAgaWYgKGxhc3RFeHByZXNzaW9uKSB7XG4gICAgICBzZXRWYWx1ZSgnY29uZGl0aW9uJywgbGFzdEV4cHJlc3Npb24ucmVmSWQsIHsgc2hvdWxkVmFsaWRhdGU6IHRydWUgfSk7XG4gICAgfVxuICB9LCBbZXhwcmVzc2lvbnMsIHNldFZhbHVlXSk7XG5cbiAgLy8gcmVzZXQgY29uZGl0aW9uIGlmIG9wdGlvbiBubyBsb25nZXIgZXhpc3RzIG9yIGlmIGl0IGlzIHVuc2V0LCBidXQgdGhlcmUgYXJlIG9wdGlvbnMgYXZhaWxhYmxlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbGFzdEV4cHJlc3Npb24gPSBsYXN0KGV4cHJlc3Npb25zKTtcbiAgICBjb25zdCBjb25kaXRpb25FeGlzdHMgPSBvcHRpb25zLmZpbmQoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGNvbmRpdGlvbik7XG5cbiAgICBpZiAoY29uZGl0aW9uICYmICFjb25kaXRpb25FeGlzdHMpIHtcbiAgICAgIHNldFZhbHVlKCdjb25kaXRpb24nLCBsYXN0RXhwcmVzc2lvbj8ucmVmSWQgPz8gbnVsbCk7XG4gICAgfSBlbHNlIGlmICghY29uZGl0aW9uICYmIGxhc3RFeHByZXNzaW9uKSB7XG4gICAgICBzZXRWYWx1ZSgnY29uZGl0aW9uJywgbGFzdEV4cHJlc3Npb24ucmVmSWQsIHsgc2hvdWxkVmFsaWRhdGU6IHRydWUgfSk7XG4gICAgfVxuICB9LCBbY29uZGl0aW9uLCBleHByZXNzaW9ucywgb3B0aW9ucywgc2V0VmFsdWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZFxuICAgICAgbGFiZWw9XCJDb25kaXRpb25cIlxuICAgICAgZGVzY3JpcHRpb249XCJUaGUgcXVlcnkgb3IgZXhwcmVzc2lvbiB0aGF0IHdpbGwgYmUgYWxlcnRlZCBvblwiXG4gICAgICBlcnJvcj17ZXJyb3JzLmNvbmRpdGlvbj8ubWVzc2FnZX1cbiAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmNvbmRpdGlvbj8ubWVzc2FnZX1cbiAgICA+XG4gICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgIG5hbWU9XCJjb25kaXRpb25cIlxuICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDb25kaXRpb25cIlxuICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgd2lkdGg9ezQyfVxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodjogU2VsZWN0YWJsZVZhbHVlKSA9PiBvbkNoYW5nZSh2Py52YWx1ZSA/PyBudWxsKX1cbiAgICAgICAgICAgIG5vT3B0aW9uc01lc3NhZ2U9XCJObyBxdWVyaWVzIGRlZmluZWRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBzZWxlY3QgdGhlIGNvbmRpdGlvbiB0byBhbGVydCBvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyLCBGaWVsZCwgSW5wdXQsIElucHV0Q29udHJvbCwgTGFiZWwsIFRvb2x0aXAsIEljb24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSwgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuXG5pbXBvcnQgQW5ub3RhdGlvbnNGaWVsZCBmcm9tICcuL0Fubm90YXRpb25zRmllbGQnO1xuaW1wb3J0IHsgR3JvdXBBbmROYW1lc3BhY2VGaWVsZHMgfSBmcm9tICcuL0dyb3VwQW5kTmFtZXNwYWNlRmllbGRzJztcbmltcG9ydCBMYWJlbHNGaWVsZCBmcm9tICcuL0xhYmVsc0ZpZWxkJztcbmltcG9ydCB7IFJ1bGVFZGl0b3JTZWN0aW9uIH0gZnJvbSAnLi9SdWxlRWRpdG9yU2VjdGlvbic7XG5pbXBvcnQgeyBSdWxlRm9sZGVyUGlja2VyLCBGb2xkZXIgfSBmcm9tICcuL1J1bGVGb2xkZXJQaWNrZXInO1xuaW1wb3J0IHsgY2hlY2tGb3JQYXRoU2VwYXJhdG9yIH0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgcmVjb3JkaW5nUnVsZU5hbWVWYWxpZGF0aW9uUGF0dGVybiA9IHtcbiAgbWVzc2FnZTpcbiAgICAnUmVjb3JkaW5nIHJ1bGUgbmFtZSBtdXN0IGJlIHZhbGlkIG1ldHJpYyBuYW1lLiBJdCBtYXkgb25seSBjb250YWluIGxldHRlcnMsIG51bWJlcnMsIGFuZCBjb2xvbnMuIEl0IG1heSBub3QgY29udGFpbiB3aGl0ZXNwYWNlLicsXG4gIHZhbHVlOiAvXlthLXpBLVpfOl1bYS16QS1aMC05XzpdKiQvLFxufTtcblxuZXhwb3J0IGNvbnN0IERldGFpbHNTdGVwOiBGQyA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIHdhdGNoLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm1Db250ZXh0PFJ1bGVGb3JtVmFsdWVzICYgeyBsb2NhdGlvbj86IHN0cmluZyB9PigpO1xuXG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBydWxlRm9ybVR5cGUgPSB3YXRjaCgndHlwZScpO1xuICBjb25zdCBkYXRhU291cmNlTmFtZSA9IHdhdGNoKCdkYXRhU291cmNlTmFtZScpO1xuICBjb25zdCB0eXBlID0gd2F0Y2goJ3R5cGUnKTtcblxuICByZXR1cm4gKFxuICAgIDxSdWxlRWRpdG9yU2VjdGlvblxuICAgICAgc3RlcE5vPXt0eXBlID09PSBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmcgPyAyIDogM31cbiAgICAgIHRpdGxlPXtcbiAgICAgICAgdHlwZSA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkUmVjb3JkaW5nID8gJ0FkZCBkZXRhaWxzIGZvciB5b3VyIHJlY29yZGluZyBydWxlJyA6ICdBZGQgZGV0YWlscyBmb3IgeW91ciBhbGVydCdcbiAgICAgIH1cbiAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgdHlwZSA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkUmVjb3JkaW5nXG4gICAgICAgICAgPyAnQWRkIGxhYmVscyB0byBoZWxwIHlvdSBiZXR0ZXIgbWFuYWdlIHlvdXIgcnVsZXMnXG4gICAgICAgICAgOiAnV3JpdGUgYSBzdW1tYXJ5IGFuZCBhZGQgbGFiZWxzIHRvIGhlbHAgeW91IGJldHRlciBtYW5hZ2UgeW91ciBhbGVydHMnXG4gICAgICB9XG4gICAgPlxuICAgICAgPEZpZWxkXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JbnB1dH1cbiAgICAgICAgbGFiZWw9XCJSdWxlIG5hbWVcIlxuICAgICAgICBlcnJvcj17ZXJyb3JzPy5uYW1lPy5tZXNzYWdlfVxuICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5uYW1lPy5tZXNzYWdlfVxuICAgICAgPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgIHsuLi5yZWdpc3RlcignbmFtZScsIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiAnTXVzdCBlbnRlciBhbiBhbGVydCBuYW1lJyB9LFxuICAgICAgICAgICAgcGF0dGVybjogcnVsZUZvcm1UeXBlID09PSBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmcgPyByZWNvcmRpbmdSdWxlTmFtZVZhbGlkYXRpb25QYXR0ZXJuIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgcGF0aFNlcGFyYXRvcjogKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB3ZSB1c2UgdGhlIGFsZXJ0IHJ1bGUgbmFtZSBhcyB0aGUgXCJncm91cG5hbWVcIiBmb3IgR3JhZmFuYSBtYW5hZ2VkIGFsZXJ0cywgc28gd2UgY2FuJ3QgYWxsb3cgcGF0aCBzZXBhcmF0b3JzXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGVGb3JtVHlwZSA9PT0gUnVsZUZvcm1UeXBlLmdyYWZhbmEpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjaGVja0ZvclBhdGhTZXBhcmF0b3IodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG5cbiAgICAgIHsocnVsZUZvcm1UeXBlID09PSBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmcgfHwgcnVsZUZvcm1UeXBlID09PSBSdWxlRm9ybVR5cGUuY2xvdWRBbGVydGluZykgJiZcbiAgICAgICAgZGF0YVNvdXJjZU5hbWUgJiYgPEdyb3VwQW5kTmFtZXNwYWNlRmllbGRzIHJ1bGVzU291cmNlTmFtZT17ZGF0YVNvdXJjZU5hbWV9IC8+fVxuXG4gICAgICB7cnVsZUZvcm1UeXBlID09PSBSdWxlRm9ybVR5cGUuZ3JhZmFuYSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleFJvd30+XG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZm9sZGVyXCIgZGVzY3JpcHRpb249eydTZWxlY3QgYSBmb2xkZXIgdG8gc3RvcmUgeW91ciBydWxlLid9PlxuICAgICAgICAgICAgICAgIDxTdGFjayBnYXA9ezAuNX0+XG4gICAgICAgICAgICAgICAgICBGb2xkZXJcbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBFYWNoIGZvbGRlciBoYXMgdW5pcXVlIGZvbGRlciBwZXJtaXNzaW9uLiBXaGVuIHlvdSBzdG9yZSBtdWx0aXBsZSBydWxlcyBpbiBhIGZvbGRlciwgdGhlIGZvbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzIHBlcm1pc3Npb25zIGdldCBhc3NpZ25lZCB0byB0aGUgcnVsZXMuXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImluZm8tY2lyY2xlXCIgc2l6ZT1cInhzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlucHV0fVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5mb2xkZXI/Lm1lc3NhZ2V9XG4gICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5mb2xkZXI/Lm1lc3NhZ2V9XG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cImZvbGRlci1waWNrZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxSdWxlRm9sZGVyUGlja2VyIGlucHV0SWQ9XCJmb2xkZXJcIiB7Li4uZmllbGR9IGVuYWJsZUNyZWF0ZU5ldz17dHJ1ZX0gZW5hYmxlUmVzZXQ9e3RydWV9IC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIG5hbWU9XCJmb2xkZXJcIlxuICAgICAgICAgICAgICBydWxlcz17e1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIHNlbGVjdCBhIGZvbGRlcicgfSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgICAgICAgICAgcGF0aFNlcGFyYXRvcjogKGZvbGRlcjogRm9sZGVyKSA9PiBjaGVja0ZvclBhdGhTZXBhcmF0b3IoZm9sZGVyLnRpdGxlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJHcm91cFwiXG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cImdyb3VwLXBpY2tlclwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJ1bGVzIHdpdGhpbiB0aGUgc2FtZSBncm91cCBhcmUgZXZhbHVhdGVkIGFmdGVyIHRoZSBzYW1lIHRpbWUgaW50ZXJ2YWwuXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JbnB1dH1cbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuZ3JvdXA/Lm1lc3NhZ2V9XG4gICAgICAgICAgICBpbnZhbGlkPXshIWVycm9ycy5ncm91cD8ubWVzc2FnZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJncm91cFwiXG4gICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZ3JvdXAnLCB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdNdXN0IGVudGVyIGEgZ3JvdXAgbmFtZScgfSxcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHt0eXBlICE9PSBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmcgJiYgPEFubm90YXRpb25zRmllbGQgLz59XG4gICAgICA8TGFiZWxzRmllbGQgLz5cbiAgICA8L1J1bGVFZGl0b3JTZWN0aW9uPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBmb3JtSW5wdXQ6IGNzc2BcbiAgICB3aWR0aDogMzMwcHg7XG4gICAgJiArICYge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygzKX07XG4gICAgfVxuICBgLFxuICBmbGV4Um93OiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IG5vb3AgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IENvcmVBcHAsIERhdGFRdWVyeSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgTG9raVF1ZXJ5IH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9sb2tpL3R5cGVzJztcbmltcG9ydCB7IFByb21RdWVyeSB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcHJvbWV0aGV1cy90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhwcmVzc2lvbkVkaXRvclByb3BzIHtcbiAgdmFsdWU/OiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgZGF0YVNvdXJjZU5hbWU6IHN0cmluZzsgLy8gd2lsbCBiZSBhIHByb21ldGhldXMgb3IgbG9raSBkYXRhc291cmNlXG59XG5cbmV4cG9ydCBjb25zdCBFeHByZXNzaW9uRWRpdG9yOiBGQzxFeHByZXNzaW9uRWRpdG9yUHJvcHM+ID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBkYXRhU291cmNlTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHsgbWFwVG9WYWx1ZSwgbWFwVG9RdWVyeSB9ID0gdXNlUXVlcnlNYXBwZXJzKGRhdGFTb3VyY2VOYW1lKTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShtYXBUb1F1ZXJ5KHsgcmVmSWQ6ICdBJywgaGlkZTogZmFsc2UgfSwgdmFsdWUpKTtcbiAgY29uc3Qge1xuICAgIGVycm9yLFxuICAgIGxvYWRpbmcsXG4gICAgdmFsdWU6IGRhdGFTb3VyY2UsXG4gIH0gPSB1c2VBc3luYygoKSA9PiB7XG4gICAgcmV0dXJuIGdldERhdGFTb3VyY2VTcnYoKS5nZXQoZGF0YVNvdXJjZU5hbWUpO1xuICB9LCBbZGF0YVNvdXJjZU5hbWVdKTtcblxuICBjb25zdCBvbkNoYW5nZVF1ZXJ5ID0gdXNlQ2FsbGJhY2soXG4gICAgKHF1ZXJ5OiBEYXRhUXVlcnkpID0+IHtcbiAgICAgIHNldFF1ZXJ5KHF1ZXJ5KTtcbiAgICAgIG9uQ2hhbmdlKG1hcFRvVmFsdWUocXVlcnkpKTtcbiAgICB9LFxuICAgIFtvbkNoYW5nZSwgbWFwVG9WYWx1ZV1cbiAgKTtcblxuICBpZiAobG9hZGluZyB8fCBkYXRhU291cmNlPy5uYW1lICE9PSBkYXRhU291cmNlTmFtZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGVycm9yIHx8ICFkYXRhU291cmNlIHx8ICFkYXRhU291cmNlPy5jb21wb25lbnRzPy5RdWVyeUVkaXRvcikge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yPy5tZXNzYWdlIHx8ICdEYXRhIHNvdXJjZSBwbHVnaW4gZG9lcyBub3QgZXhwb3J0IGFueSBRdWVyeSBFZGl0b3IgY29tcG9uZW50JztcbiAgICByZXR1cm4gPGRpdj5Db3VsZCBub3QgbG9hZCBxdWVyeSBlZGl0b3IgZHVlIHRvOiB7ZXJyb3JNZXNzYWdlfTwvZGl2PjtcbiAgfVxuXG4gIGNvbnN0IFF1ZXJ5RWRpdG9yID0gZGF0YVNvdXJjZT8uY29tcG9uZW50cz8uUXVlcnlFZGl0b3I7XG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnlFZGl0b3JcbiAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgIHF1ZXJpZXM9e1txdWVyeV19XG4gICAgICBhcHA9e0NvcmVBcHAuQ2xvdWRBbGVydGluZ31cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVF1ZXJ5fVxuICAgICAgb25SdW5RdWVyeT17bm9vcH1cbiAgICAgIGRhdGFzb3VyY2U9e2RhdGFTb3VyY2V9XG4gICAgLz5cbiAgKTtcbn07XG5cbnR5cGUgUXVlcnlNYXBwZXJzPFQgZXh0ZW5kcyBEYXRhUXVlcnkgPSBEYXRhUXVlcnk+ID0ge1xuICBtYXBUb1ZhbHVlOiAocXVlcnk6IFQpID0+IHN0cmluZztcbiAgbWFwVG9RdWVyeTogKGV4aXN0aW5nOiBULCB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiBUO1xufTtcblxuZnVuY3Rpb24gdXNlUXVlcnlNYXBwZXJzKGRhdGFTb3VyY2VOYW1lOiBzdHJpbmcpOiBRdWVyeU1hcHBlcnMge1xuICByZXR1cm4gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBnZXREYXRhU291cmNlU3J2KCkuZ2V0SW5zdGFuY2VTZXR0aW5ncyhkYXRhU291cmNlTmFtZSk7XG5cbiAgICBzd2l0Y2ggKHNldHRpbmdzPy50eXBlKSB7XG4gICAgICBjYXNlICdsb2tpJzpcbiAgICAgIGNhc2UgJ3Byb21ldGhldXMnOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1hcFRvVmFsdWU6IChxdWVyeTogRGF0YVF1ZXJ5KSA9PiAocXVlcnkgYXMgUHJvbVF1ZXJ5IHwgTG9raVF1ZXJ5KS5leHByLFxuICAgICAgICAgIG1hcFRvUXVlcnk6IChleGlzdGluZzogRGF0YVF1ZXJ5LCB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiAoeyAuLi5leGlzdGluZywgZXhwcjogdmFsdWUgfSksXG4gICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZGF0YVNvdXJjZU5hbWV9IGlzIG5vdCBzdXBwb3J0ZWQgYXMgYW4gZXhwcmVzc2lvbiBlZGl0b3JgKTtcbiAgICB9XG4gIH0sIFtkYXRhU291cmNlTmFtZV0pO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFNlbGVjdEJhc2VQcm9wcyB9IGZyb20gJ0BncmFmYW5hL3VpL3NyYy9jb21wb25lbnRzL1NlbGVjdC90eXBlcyc7XG5pbXBvcnQgeyBHcmFmYW5hQWxlcnRTdGF0ZURlY2lzaW9uIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxudHlwZSBQcm9wcyA9IE9taXQ8U2VsZWN0QmFzZVByb3BzPEdyYWZhbmFBbGVydFN0YXRlRGVjaXNpb24+LCAnb3B0aW9ucyc+ICYge1xuICBpbmNsdWRlTm9EYXRhOiBib29sZWFuO1xuICBpbmNsdWRlRXJyb3I6IGJvb2xlYW47XG59O1xuXG5jb25zdCBvcHRpb25zOiBTZWxlY3RhYmxlVmFsdWVbXSA9IFtcbiAgeyB2YWx1ZTogR3JhZmFuYUFsZXJ0U3RhdGVEZWNpc2lvbi5BbGVydGluZywgbGFiZWw6ICdBbGVydGluZycgfSxcbiAgeyB2YWx1ZTogR3JhZmFuYUFsZXJ0U3RhdGVEZWNpc2lvbi5Ob0RhdGEsIGxhYmVsOiAnTm8gRGF0YScgfSxcbiAgeyB2YWx1ZTogR3JhZmFuYUFsZXJ0U3RhdGVEZWNpc2lvbi5PSywgbGFiZWw6ICdPSycgfSxcbiAgeyB2YWx1ZTogR3JhZmFuYUFsZXJ0U3RhdGVEZWNpc2lvbi5FcnJvciwgbGFiZWw6ICdFcnJvcicgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBHcmFmYW5hQWxlcnRTdGF0ZVBpY2tlcjogRkM8UHJvcHM+ID0gKHsgaW5jbHVkZU5vRGF0YSwgaW5jbHVkZUVycm9yLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IG9wdHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWluY2x1ZGVOb0RhdGEpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcigob3B0KSA9PiBvcHQudmFsdWUgIT09IEdyYWZhbmFBbGVydFN0YXRlRGVjaXNpb24uTm9EYXRhKTtcbiAgICB9XG4gICAgaWYgKCFpbmNsdWRlRXJyb3IpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcigob3B0KSA9PiBvcHQudmFsdWUgIT09IEdyYWZhbmFBbGVydFN0YXRlRGVjaXNpb24uRXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfSwgW2luY2x1ZGVOb0RhdGEsIGluY2x1ZGVFcnJvcl0pO1xuICByZXR1cm4gPFNlbGVjdCBvcHRpb25zPXtvcHRzfSB7Li4ucHJvcHN9IC8+O1xufTtcbiIsImltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBkdXJhdGlvblRvTWlsbGlzZWNvbmRzLCBwYXJzZUR1cmF0aW9uIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuXG4vLyBhIHdhcm5pbmcgdGhhdCB3aWxsIGJlIHNob3duIGlmIGEgcHJvYmxlbWF0aWMgeWV0IHRlY2huaWNhbGx5IHZhbGlkIGNvbWJpbmF0aW9uIG9mIFwiZXZhbHVhdGUgZXZlcnlcIiBhbmQgXCJldmFsdWF0ZSBmb3JcIiBpcyBlbmV0ZXJlZFxuZXhwb3J0IGNvbnN0IEdyYWZhbmFDb25kaXRpb25FdmFsV2FybmluZzogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgd2F0Y2ggfSA9IHVzZUZvcm1Db250ZXh0PFJ1bGVGb3JtVmFsdWVzPigpO1xuICBjb25zdCBldmFsdWF0ZUZvciA9IHdhdGNoKCdldmFsdWF0ZUZvcicpO1xuICBjb25zdCBldmFsdWF0ZUV2ZXJ5ID0gd2F0Y2goJ2V2YWx1YXRlRXZlcnknKTtcbiAgaWYgKGV2YWx1YXRlRm9yID09PSAnMCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBkdXJhdGlvbkZvciA9IHBhcnNlRHVyYXRpb24oZXZhbHVhdGVGb3IpO1xuICBjb25zdCBkdXJhdGlvbkV2ZXJ5ID0gcGFyc2VEdXJhdGlvbihldmFsdWF0ZUV2ZXJ5KTtcbiAgaWYgKGlzRW1wdHkoZHVyYXRpb25Gb3IpIHx8IGlzRW1wdHkoZHVyYXRpb25FdmVyeSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBtaWxsaXNGb3IgPSBkdXJhdGlvblRvTWlsbGlzZWNvbmRzKGR1cmF0aW9uRm9yKTtcbiAgY29uc3QgbWlsbGlzRXZlcnkgPSBkdXJhdGlvblRvTWlsbGlzZWNvbmRzKGR1cmF0aW9uRXZlcnkpO1xuICBpZiAobWlsbGlzRm9yICYmIG1pbGxpc0V2ZXJ5ICYmIG1pbGxpc0ZvciA8PSBtaWxsaXNFdmVyeSkge1xuICAgIHJldHVybiAoXG4gICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJ3YXJuaW5nXCIgdGl0bGU9XCJcIj5cbiAgICAgICAgU2V0dGluZyBhICZxdW90O2ZvciZxdW90OyBkdXJhdGlvbiB0aGF0IGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgZXZhbHVhdGlvbiBpbnRlcnZhbCB3aWxsIHJlc3VsdCBpbiB0aGVcbiAgICAgICAgZXZhbHVhdGlvbiBpbnRlcnZhbCBiZWluZyB1c2VkIHRvIGNhbGN1bGF0ZSB3aGVuIGFuIGFsZXJ0IHRoYXQgaGFzIHN0b3BwZWQgcmVjZWl2aW5nIGRhdGEgd2lsbCBiZSBjbG9zZWQuXG4gICAgICA8L0FsZXJ0PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCwgUmVnaXN0ZXJPcHRpb25zIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgcGFyc2VEdXJhdGlvbiwgZHVyYXRpb25Ub01pbGxpc2Vjb25kcywgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRmllbGQsIElubGluZUxhYmVsLCBJbnB1dCwgSW5wdXRDb250cm9sLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBSdWxlRm9ybVZhbHVlcyB9IGZyb20gJy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5pbXBvcnQgeyBwb3NpdGl2ZUR1cmF0aW9uVmFsaWRhdGlvblBhdHRlcm4sIGR1cmF0aW9uVmFsaWRhdGlvblBhdHRlcm4gfSBmcm9tICcuLi8uLi91dGlscy90aW1lJztcbmltcG9ydCB7IENvbGxhcHNlVG9nZ2xlIH0gZnJvbSAnLi4vQ29sbGFwc2VUb2dnbGUnO1xuXG5pbXBvcnQgeyBHcmFmYW5hQWxlcnRTdGF0ZVBpY2tlciB9IGZyb20gJy4vR3JhZmFuYUFsZXJ0U3RhdGVQaWNrZXInO1xuaW1wb3J0IHsgR3JhZmFuYUNvbmRpdGlvbkV2YWxXYXJuaW5nIH0gZnJvbSAnLi9HcmFmYW5hQ29uZGl0aW9uRXZhbFdhcm5pbmcnO1xuaW1wb3J0IHsgUHJldmlld1J1bGUgfSBmcm9tICcuL1ByZXZpZXdSdWxlJztcbmltcG9ydCB7IFJ1bGVFZGl0b3JTZWN0aW9uIH0gZnJvbSAnLi9SdWxlRWRpdG9yU2VjdGlvbic7XG5cbmNvbnN0IE1JTl9USU1FX1JBTkdFX1NURVBfUyA9IDEwOyAvLyAxMCBzZWNvbmRzXG5cbmNvbnN0IGZvclZhbGlkYXRpb25PcHRpb25zOiBSZWdpc3Rlck9wdGlvbnMgPSB7XG4gIHJlcXVpcmVkOiB7XG4gICAgdmFsdWU6IHRydWUsXG4gICAgbWVzc2FnZTogJ1JlcXVpcmVkLicsXG4gIH0sXG4gIHBhdHRlcm46IGR1cmF0aW9uVmFsaWRhdGlvblBhdHRlcm4sXG59O1xuXG5jb25zdCBldmFsdWF0ZUV2ZXJ5VmFsaWRhdGlvbk9wdGlvbnM6IFJlZ2lzdGVyT3B0aW9ucyA9IHtcbiAgcmVxdWlyZWQ6IHtcbiAgICB2YWx1ZTogdHJ1ZSxcbiAgICBtZXNzYWdlOiAnUmVxdWlyZWQuJyxcbiAgfSxcbiAgcGF0dGVybjogcG9zaXRpdmVEdXJhdGlvblZhbGlkYXRpb25QYXR0ZXJuLFxuICB2YWxpZGF0ZTogKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHBhcnNlRHVyYXRpb24odmFsdWUpO1xuICAgIGlmIChPYmplY3Qua2V5cyhkdXJhdGlvbikubGVuZ3RoKSB7XG4gICAgICBjb25zdCBkaWZmID0gZHVyYXRpb25Ub01pbGxpc2Vjb25kcyhkdXJhdGlvbik7XG4gICAgICBpZiAoZGlmZiA8IE1JTl9USU1FX1JBTkdFX1NURVBfUyAqIDEwMDApIHtcbiAgICAgICAgcmV0dXJuIGBDYW5ub3QgYmUgbGVzcyB0aGFuICR7TUlOX1RJTUVfUkFOR0VfU1RFUF9TfSBzZWNvbmRzLmA7XG4gICAgICB9XG4gICAgICBpZiAoZGlmZiAlIChNSU5fVElNRV9SQU5HRV9TVEVQX1MgKiAxMDAwKSAhPT0gMCkge1xuICAgICAgICByZXR1cm4gYE11c3QgYmUgYSBtdWx0aXBsZSBvZiAke01JTl9USU1FX1JBTkdFX1NURVBfU30gc2Vjb25kcy5gO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBHcmFmYW5hRXZhbHVhdGlvbkJlaGF2aW9yOiBGQyA9ICgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBbc2hvd0Vycm9ySGFuZGxpbmcsIHNldFNob3dFcnJvckhhbmRsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm1Db250ZXh0PFJ1bGVGb3JtVmFsdWVzPigpO1xuXG4gIGNvbnN0IGV2YWx1YXRlRXZlcnlJZCA9ICdldmFsLWV2ZXJ5LWlucHV0JztcbiAgY29uc3QgZXZhbHVhdGVGb3JJZCA9ICdldmFsLWZvci1pbnB1dCc7XG5cbiAgcmV0dXJuIChcbiAgICAvLyBUT0RPIHJlbW92ZSBcImFuZCBhbGVydCBjb25kaXRpb25cIiBmb3IgcmVjb3JkaW5nIHJ1bGVzXG4gICAgPFJ1bGVFZGl0b3JTZWN0aW9uIHN0ZXBObz17Mn0gdGl0bGU9XCJBbGVydCBldmFsdWF0aW9uIGJlaGF2aW9yXCI+XG4gICAgICA8RmllbGRcbiAgICAgICAgbGFiZWw9XCJFdmFsdWF0ZVwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiRXZhbHVhdGlvbiBpbnRlcnZhbCBhcHBsaWVzIHRvIGV2ZXJ5IHJ1bGUgd2l0aGluIGEgZ3JvdXAuIEl0IGNhbiBvdmVyd3JpdGUgdGhlIGludGVydmFsIG9mIGFuIGV4aXN0aW5nIGFsZXJ0IHJ1bGUuXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgICAgICA8SW5saW5lTGFiZWxcbiAgICAgICAgICAgIGh0bWxGb3I9e2V2YWx1YXRlRXZlcnlJZH1cbiAgICAgICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgICAgIHRvb2x0aXA9XCJIb3cgb2Z0ZW4gdGhlIGFsZXJ0IHdpbGwgYmUgZXZhbHVhdGVkIHRvIHNlZSBpZiBpdCBmaXJlc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRXZhbHVhdGUgZXZlcnlcbiAgICAgICAgICA8L0lubGluZUxhYmVsPlxuICAgICAgICAgIDxJbnB1dCBpZD17ZXZhbHVhdGVFdmVyeUlkfSB3aWR0aD17OH0gey4uLnJlZ2lzdGVyKCdldmFsdWF0ZUV2ZXJ5JywgZXZhbHVhdGVFdmVyeVZhbGlkYXRpb25PcHRpb25zKX0gLz5cbiAgICAgICAgICA8SW5saW5lTGFiZWxcbiAgICAgICAgICAgIGh0bWxGb3I9e2V2YWx1YXRlRm9ySWR9XG4gICAgICAgICAgICB3aWR0aD17N31cbiAgICAgICAgICAgIHRvb2x0aXA9J09uY2UgY29uZGl0aW9uIGlzIGJyZWFjaGVkLCBhbGVydCB3aWxsIGdvIGludG8gcGVuZGluZyBzdGF0ZS4gSWYgaXQgaXMgcGVuZGluZyBmb3IgbG9uZ2VyIHRoYW4gdGhlIFwiZm9yXCIgdmFsdWUsIGl0IHdpbGwgYmVjb21lIGEgZmlyaW5nIGFsZXJ0LidcbiAgICAgICAgICA+XG4gICAgICAgICAgICBmb3JcbiAgICAgICAgICA8L0lubGluZUxhYmVsPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5saW5lRmllbGR9XG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmV2YWx1YXRlRm9yPy5tZXNzYWdlfVxuICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuZXZhbHVhdGVGb3I/Lm1lc3NhZ2V9XG4gICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZUhvcml6b250YWxPdmVyZmxvdz17dHJ1ZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXQgaWQ9e2V2YWx1YXRlRm9ySWR9IHdpZHRoPXs4fSB7Li4ucmVnaXN0ZXIoJ2V2YWx1YXRlRm9yJywgZm9yVmFsaWRhdGlvbk9wdGlvbnMpfSAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxHcmFmYW5hQ29uZGl0aW9uRXZhbFdhcm5pbmcgLz5cbiAgICAgIDxDb2xsYXBzZVRvZ2dsZVxuICAgICAgICBpc0NvbGxhcHNlZD17IXNob3dFcnJvckhhbmRsaW5nfVxuICAgICAgICBvblRvZ2dsZT17KGNvbGxhcHNlZCkgPT4gc2V0U2hvd0Vycm9ySGFuZGxpbmcoIWNvbGxhcHNlZCl9XG4gICAgICAgIHRleHQ9XCJDb25maWd1cmUgbm8gZGF0YSBhbmQgZXJyb3IgaGFuZGxpbmdcIlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb2xsYXBzZVRvZ2dsZX1cbiAgICAgIC8+XG4gICAgICB7c2hvd0Vycm9ySGFuZGxpbmcgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxGaWVsZCBodG1sRm9yPVwibm8tZGF0YS1zdGF0ZS1pbnB1dFwiIGxhYmVsPVwiQWxlcnQgc3RhdGUgaWYgbm8gZGF0YSBvciBhbGwgdmFsdWVzIGFyZSBudWxsXCI+XG4gICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyYWZhbmFBbGVydFN0YXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XG4gICAgICAgICAgICAgICAgICBpbnB1dElkPVwibm8tZGF0YS1zdGF0ZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NDJ9XG4gICAgICAgICAgICAgICAgICBpbmNsdWRlTm9EYXRhPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgaW5jbHVkZUVycm9yPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKHZhbHVlPy52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgbmFtZT1cIm5vRGF0YVN0YXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8RmllbGQgaHRtbEZvcj1cImV4ZWMtZXJyLXN0YXRlLWlucHV0XCIgbGFiZWw9XCJBbGVydCBzdGF0ZSBpZiBleGVjdXRpb24gZXJyb3Igb3IgdGltZW91dFwiPlxuICAgICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlLCByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmFmYW5hQWxlcnRTdGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD1cImV4ZWMtZXJyLXN0YXRlLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXs0Mn1cbiAgICAgICAgICAgICAgICAgIGluY2x1ZGVOb0RhdGE9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgaW5jbHVkZUVycm9yPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UodmFsdWU/LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBuYW1lPVwiZXhlY0VyclN0YXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAgPFByZXZpZXdSdWxlIC8+XG4gICAgPC9SdWxlRWRpdG9yU2VjdGlvbj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgaW5saW5lRmllbGQ6IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBgLFxuICBmbGV4Um93OiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYCxcbiAgY29sbGFwc2VUb2dnbGU6IGNzc2BcbiAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygyLCAwLCAyLCAtMSl9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRmllbGQsIElucHV0Q29udHJvbCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5pbXBvcnQgeyBmZXRjaFJ1bGVyUnVsZXNBY3Rpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IFJ1bGVGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcblxuaW1wb3J0IHsgU2VsZWN0V2l0aEFkZCB9IGZyb20gJy4vU2VsZWN0V0l0aEFkZCc7XG5pbXBvcnQgeyBjaGVja0ZvclBhdGhTZXBhcmF0b3IgfSBmcm9tICcuL3V0aWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBydWxlc1NvdXJjZU5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEdyb3VwQW5kTmFtZXNwYWNlRmllbGRzOiBGQzxQcm9wcz4gPSAoeyBydWxlc1NvdXJjZU5hbWUgfSkgPT4ge1xuICBjb25zdCB7XG4gICAgY29udHJvbCxcbiAgICB3YXRjaCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gICAgc2V0VmFsdWUsXG4gIH0gPSB1c2VGb3JtQ29udGV4dDxSdWxlRm9ybVZhbHVlcz4oKTtcblxuICBjb25zdCBzdHlsZSA9IHVzZVN0eWxlczIoZ2V0U3R5bGUpO1xuXG4gIGNvbnN0IFtjdXN0b21Hcm91cCwgc2V0Q3VzdG9tR3JvdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJ1bGVyUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJ1bGVyUnVsZXMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hSdWxlclJ1bGVzQWN0aW9uKHsgcnVsZXNTb3VyY2VOYW1lIH0pKTtcbiAgfSwgW3J1bGVzU291cmNlTmFtZSwgZGlzcGF0Y2hdKTtcblxuICBjb25zdCBydWxlc0NvbmZpZyA9IHJ1bGVyUmVxdWVzdHNbcnVsZXNTb3VyY2VOYW1lXT8ucmVzdWx0O1xuXG4gIGNvbnN0IG5hbWVzcGFjZSA9IHdhdGNoKCduYW1lc3BhY2UnKTtcblxuICBjb25zdCBuYW1lc3BhY2VPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+ID0+XG4gICAgICBydWxlc0NvbmZpZyA/IE9iamVjdC5rZXlzKHJ1bGVzQ29uZmlnKS5tYXAoKG5hbWVzcGFjZSkgPT4gKHsgbGFiZWw6IG5hbWVzcGFjZSwgdmFsdWU6IG5hbWVzcGFjZSB9KSkgOiBbXSxcbiAgICBbcnVsZXNDb25maWddXG4gICk7XG5cbiAgY29uc3QgZ3JvdXBPcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+ID0+XG4gICAgICAobmFtZXNwYWNlICYmIHJ1bGVzQ29uZmlnPy5bbmFtZXNwYWNlXT8ubWFwKChncm91cCkgPT4gKHsgbGFiZWw6IGdyb3VwLm5hbWUsIHZhbHVlOiBncm91cC5uYW1lIH0pKSkgfHwgW10sXG4gICAgW25hbWVzcGFjZSwgcnVsZXNDb25maWddXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZmxleFJvd30+XG4gICAgICA8RmllbGRcbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJuYW1lc3BhY2UtcGlja2VyXCJcbiAgICAgICAgbGFiZWw9XCJOYW1lc3BhY2VcIlxuICAgICAgICBlcnJvcj17ZXJyb3JzLm5hbWVzcGFjZT8ubWVzc2FnZX1cbiAgICAgICAgaW52YWxpZD17ISFlcnJvcnMubmFtZXNwYWNlPy5tZXNzYWdlfVxuICAgICAgPlxuICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyBvbkNoYW5nZSwgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgIDxTZWxlY3RXaXRoQWRkXG4gICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5pbnB1dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlKCdncm91cCcsICcnKTsgLy9yZXNldCBpZiBuYW1lc3BhY2UgY2hhbmdlc1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DdXN0b21DaGFuZ2U9eyhjdXN0b206IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICBjdXN0b20gJiYgc2V0Q3VzdG9tR3JvdXAodHJ1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9wdGlvbnM9e25hbWVzcGFjZU9wdGlvbnN9XG4gICAgICAgICAgICAgIHdpZHRoPXs0Mn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwibmFtZXNwYWNlXCJcbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogJ1JlcXVpcmVkLicgfSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgIHBhdGhTZXBhcmF0b3I6IGNoZWNrRm9yUGF0aFNlcGFyYXRvcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8RmllbGQgZGF0YS10ZXN0aWQ9XCJncm91cC1waWNrZXJcIiBsYWJlbD1cIkdyb3VwXCIgZXJyb3I9e2Vycm9ycy5ncm91cD8ubWVzc2FnZX0gaW52YWxpZD17ISFlcnJvcnMuZ3JvdXA/Lm1lc3NhZ2V9PlxuICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyByZWYsIC4uLmZpZWxkIH0gfSkgPT4gKFxuICAgICAgICAgICAgPFNlbGVjdFdpdGhBZGQgey4uLmZpZWxkfSBvcHRpb25zPXtncm91cE9wdGlvbnN9IHdpZHRoPXs0Mn0gY3VzdG9tPXtjdXN0b21Hcm91cH0gY2xhc3NOYW1lPXtzdHlsZS5pbnB1dH0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJncm91cFwiXG4gICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICBydWxlcz17e1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0sXG4gICAgICAgICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgICAgICBwYXRoU2VwYXJhdG9yOiBjaGVja0ZvclBhdGhTZXBhcmF0b3IsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGUgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGZsZXhSb3c6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgJiA+ICogKyAqIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgIH1cbiAgYCxcbiAgaW5wdXQ6IGNzc2BcbiAgICB3aWR0aDogMzMwcHggIWltcG9ydGFudDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWVsZCwgRmllbGRBcnJheSwgSW5wdXQsIElubGluZUxhYmVsLCBMYWJlbCwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IExhYmVsc0ZpZWxkOiBGQzxQcm9wcz4gPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGNvbnRyb2wsXG4gICAgd2F0Y2gsXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICB9ID0gdXNlRm9ybUNvbnRleHQoKTtcbiAgY29uc3QgbGFiZWxzID0gd2F0Y2goJ2xhYmVscycpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjeChjbGFzc05hbWUsIHN0eWxlcy53cmFwcGVyKX0+XG4gICAgICA8TGFiZWw+Q3VzdG9tIExhYmVsczwvTGFiZWw+XG4gICAgICA8RmllbGRBcnJheSBjb250cm9sPXtjb250cm9sfSBuYW1lPVwibGFiZWxzXCI+XG4gICAgICAgIHsoeyBmaWVsZHMsIGFwcGVuZCwgcmVtb3ZlIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgICAgICAgICAgICA8SW5saW5lTGFiZWwgd2lkdGg9ezE4fT5MYWJlbHM8L0lubGluZUxhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleENvbHVtbn0+XG4gICAgICAgICAgICAgICAgICB7ZmllbGRzLm1hcCgoZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZpZWxkLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuZmxleFJvdywgc3R5bGVzLmNlbnRlckFsaWduUm93KX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMubGFiZWxzPy5baW5kZXhdPy5rZXk/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5sYWJlbHM/LltpbmRleF0/LmtleT8ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGBsYWJlbHNbJHtpbmRleH1dLmtleWAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6ICEhbGFiZWxzW2luZGV4XT8udmFsdWUsIG1lc3NhZ2U6ICdSZXF1aXJlZC4nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwia2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtgbGFiZWwta2V5LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZmllbGQua2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbmxpbmVMYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5lcXVhbFNpZ259Pj08L0lubGluZUxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmxhYmVscz8uW2luZGV4XT8udmFsdWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5sYWJlbHM/LltpbmRleF0/LnZhbHVlPy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoYGxhYmVsc1ske2luZGV4fV0udmFsdWVgLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB7IHZhbHVlOiAhIWxhYmVsc1tpbmRleF0/LmtleSwgbWVzc2FnZTogJ1JlcXVpcmVkLicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17YGxhYmVsLXZhbHVlLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZmllbGQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZUxhYmVsQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJkZWxldGUgbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaC1hbHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZShpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZExhYmVsQnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICBpY29uPVwicGx1cy1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBhcHBlbmQoe30pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBZGQgbGFiZWxcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0ZpZWxkQXJyYXk+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHdyYXBwZXI6IGNzc2BcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgYCxcbiAgICBmbGV4Q29sdW1uOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBgLFxuICAgIGZsZXhSb3c6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgICAmICsgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gICAgICB9XG4gICAgYCxcbiAgICBkZWxldGVMYWJlbEJ1dHRvbjogY3NzYFxuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgIGAsXG4gICAgYWRkTGFiZWxCdXR0b246IGNzc2BcbiAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgYCxcbiAgICBjZW50ZXJBbGlnblJvdzogY3NzYFxuICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGAsXG4gICAgZXF1YWxTaWduOiBjc3NgXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcueHN9O1xuICAgIGAsXG4gICAgbGFiZWxJbnB1dDogY3NzYFxuICAgICAgd2lkdGg6IDE4M3B4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICAgICYgKyAmIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgICB9XG4gICAgYCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsc0ZpZWxkO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyB1c2VNb3VudGVkU3RhdGUgfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IHsgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBkYXRlVGltZUZvcm1hdElTTywgR3JhZmFuYVRoZW1lMiwgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uLCBIb3Jpem9udGFsR3JvdXAsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IHByZXZpZXdBbGVydFJ1bGUgfSBmcm9tICcuLi8uLi9hcGkvcHJldmlldyc7XG5pbXBvcnQgeyB1c2VBbGVydFF1ZXJpZXNTdGF0dXMgfSBmcm9tICcuLi8uLi9ob29rcy91c2VBbGVydFF1ZXJpZXNTdGF0dXMnO1xuaW1wb3J0IHsgUHJldmlld1J1bGVSZXF1ZXN0LCBQcmV2aWV3UnVsZVJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vdHlwZXMvcHJldmlldyc7XG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUsIFJ1bGVGb3JtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcblxuaW1wb3J0IHsgUHJldmlld1J1bGVSZXN1bHQgfSBmcm9tICcuL1ByZXZpZXdSdWxlUmVzdWx0JztcblxuY29uc3QgZmllbGRzOiBBcnJheTxrZXlvZiBSdWxlRm9ybVZhbHVlcz4gPSBbJ3R5cGUnLCAnZGF0YVNvdXJjZU5hbWUnLCAnY29uZGl0aW9uJywgJ3F1ZXJpZXMnLCAnZXhwcmVzc2lvbiddO1xuXG5leHBvcnQgZnVuY3Rpb24gUHJldmlld1J1bGUoKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgW3ByZXZpZXcsIG9uUHJldmlld10gPSB1c2VQcmV2aWV3KCk7XG4gIGNvbnN0IHsgd2F0Y2ggfSA9IHVzZUZvcm1Db250ZXh0PFJ1bGVGb3JtVmFsdWVzPigpO1xuICBjb25zdCBbdHlwZSwgY29uZGl0aW9uLCBxdWVyaWVzXSA9IHdhdGNoKFsndHlwZScsICdjb25kaXRpb24nLCAncXVlcmllcyddKTtcbiAgY29uc3QgeyBhbGxEYXRhU291cmNlc0F2YWlsYWJsZSB9ID0gdXNlQWxlcnRRdWVyaWVzU3RhdHVzKHF1ZXJpZXMpO1xuXG4gIGlmICh0eXBlID09PSBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmcgfHwgdHlwZSA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkQWxlcnRpbmcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGlzUHJldmlld0F2YWlsYWJsZSA9IEJvb2xlYW4oY29uZGl0aW9uKSAmJiBhbGxEYXRhU291cmNlc0F2YWlsYWJsZTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIb3Jpem9udGFsR3JvdXA+XG4gICAgICAgIHthbGxEYXRhU291cmNlc0F2YWlsYWJsZSAmJiAoXG4gICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17IWlzUHJldmlld0F2YWlsYWJsZX0gdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17b25QcmV2aWV3fT5cbiAgICAgICAgICAgIFByZXZpZXcgYWxlcnRzXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHshYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUgJiYgKFxuICAgICAgICAgIDxBbGVydCB0aXRsZT1cIlByZXZpZXcgaXMgbm90IGF2YWlsYWJsZVwiIHNldmVyaXR5PVwid2FybmluZ1wiPlxuICAgICAgICAgICAgQ2Fubm90IGRpc3BsYXkgdGhlIHF1ZXJ5IHByZXZpZXcuIFNvbWUgb2YgdGhlIGRhdGEgc291cmNlcyB1c2VkIGluIHRoZSBxdWVyaWVzIGFyZSBub3QgYXZhaWxhYmxlLlxuICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICl9XG4gICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgIDxQcmV2aWV3UnVsZVJlc3VsdCBwcmV2aWV3PXtwcmV2aWV3fSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiB1c2VQcmV2aWV3KCk6IFtQcmV2aWV3UnVsZVJlc3BvbnNlIHwgdW5kZWZpbmVkLCAoKSA9PiB2b2lkXSB7XG4gIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlPFByZXZpZXdSdWxlUmVzcG9uc2UgfCB1bmRlZmluZWQ+KCk7XG4gIGNvbnN0IHsgZ2V0VmFsdWVzIH0gPSB1c2VGb3JtQ29udGV4dDxSdWxlRm9ybVZhbHVlcz4oKTtcbiAgY29uc3QgaXNNb3VudGVkID0gdXNlTW91bnRlZFN0YXRlKCk7XG5cbiAgY29uc3Qgb25QcmV2aWV3ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlcyA9IGdldFZhbHVlcyhmaWVsZHMpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBjcmVhdGVQcmV2aWV3UmVxdWVzdCh2YWx1ZXMpO1xuXG4gICAgcHJldmlld0FsZXJ0UnVsZShyZXF1ZXN0KVxuICAgICAgLnBpcGUodGFrZVdoaWxlKChyZXNwb25zZSkgPT4gIWlzQ29tcGxldGVkKHJlc3BvbnNlKSwgdHJ1ZSkpXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIWlzTW91bnRlZCgpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFByZXZpZXcocmVzcG9uc2UpO1xuICAgICAgfSk7XG4gIH0sIFtnZXRWYWx1ZXMsIGlzTW91bnRlZF0pO1xuXG4gIHJldHVybiBbcHJldmlldywgb25QcmV2aWV3XTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJldmlld1JlcXVlc3QodmFsdWVzOiBhbnlbXSk6IFByZXZpZXdSdWxlUmVxdWVzdCB7XG4gIGNvbnN0IFt0eXBlLCBkYXRhU291cmNlTmFtZSwgY29uZGl0aW9uLCBxdWVyaWVzLCBleHByZXNzaW9uXSA9IHZhbHVlcztcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJ1bGVGb3JtVHlwZS5jbG91ZEFsZXJ0aW5nOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YVNvdXJjZU5hbWUsXG4gICAgICAgIGV4cHI6IGV4cHJlc3Npb24sXG4gICAgICB9O1xuXG4gICAgY2FzZSBSdWxlRm9ybVR5cGUuZ3JhZmFuYTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGdyYWZhbmFfY29uZGl0aW9uOiB7XG4gICAgICAgICAgY29uZGl0aW9uLFxuICAgICAgICAgIGRhdGE6IHF1ZXJpZXMsXG4gICAgICAgICAgbm93OiBkYXRlVGltZUZvcm1hdElTTyhEYXRlLm5vdygpKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbGVydCB0eXBlICR7dHlwZX0gbm90IHN1cHBvcnRlZCBieSBwcmV2aWV3LmApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQ29tcGxldGVkKHJlc3BvbnNlOiBQcmV2aWV3UnVsZVJlc3BvbnNlKTogYm9vbGVhbiB7XG4gIHN3aXRjaCAocmVzcG9uc2UuZGF0YS5zdGF0ZSkge1xuICAgIGNhc2UgTG9hZGluZ1N0YXRlLkRvbmU6XG4gICAgY2FzZSBMb2FkaW5nU3RhdGUuRXJyb3I6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgIG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy52YWx1ZXMueHhsfXB4O1xuICAgIGAsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdXRvU2l6ZXIgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5cbmltcG9ydCB7IEZpZWxkQ29uZmlnU291cmNlLCBGaWVsZE1hdGNoZXJJRCwgR3JhZmFuYVRoZW1lMiwgTG9hZGluZ1N0YXRlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBQYW5lbFJlbmRlcmVyIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBUYWJsZUNlbGxEaXNwbGF5TW9kZSwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgUHJldmlld1J1bGVSZXNwb25zZSB9IGZyb20gJy4uLy4uL3R5cGVzL3ByZXZpZXcnO1xuaW1wb3J0IHsgUnVsZUZvcm1UeXBlIH0gZnJvbSAnLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcbmltcG9ydCB7IG1lc3NhZ2VGcm9tRXJyb3IgfSBmcm9tICcuLi8uLi91dGlscy9yZWR1eCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHByZXZpZXc6IFByZXZpZXdSdWxlUmVzcG9uc2UgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUHJldmlld1J1bGVSZXN1bHQocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgcHJldmlldyB9ID0gcHJvcHM7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgZmllbGRDb25maWc6IEZpZWxkQ29uZmlnU291cmNlID0ge1xuICAgIGRlZmF1bHRzOiB7fSxcbiAgICBvdmVycmlkZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbWF0Y2hlcjogeyBpZDogRmllbGRNYXRjaGVySUQuYnlOYW1lLCBvcHRpb25zOiAnSW5mbycgfSxcbiAgICAgICAgcHJvcGVydGllczogW3sgaWQ6ICdjdXN0b20uZGlzcGxheU1vZGUnLCB2YWx1ZTogVGFibGVDZWxsRGlzcGxheU1vZGUuSlNPTlZpZXcgfV0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgaWYgKCFwcmV2aWV3KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB7IGRhdGEsIHJ1bGVUeXBlIH0gPSBwcmV2aWV3O1xuXG4gIGlmIChkYXRhLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxzcGFuPkxvYWRpbmcgcHJldmlldy4uLjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoZGF0YS5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAge2RhdGEuZXJyb3IgPyBtZXNzYWdlRnJvbUVycm9yKGRhdGEuZXJyb3IpIDogJ0ZhaWxlZCB0byBwcmV2aWV3IGFsZXJ0IHJ1bGUnfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxzcGFuPlxuICAgICAgICBQcmV2aWV3IGJhc2VkIG9uIHRoZSByZXN1bHQgb2YgcnVubmluZyB0aGUgcXVlcnksIGZvciB0aGlzIG1vbWVudC57JyAnfVxuICAgICAgICB7cnVsZVR5cGUgPT09IFJ1bGVGb3JtVHlwZS5ncmFmYW5hID8gJ0NvbmZpZ3VyYXRpb24gZm9yIGBubyBkYXRhYCBhbmQgYGVycm9yIGhhbmRsaW5nYCBpcyBub3QgYXBwbGllZC4nIDogbnVsbH1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxuICAgICAgICA8QXV0b1NpemVyPlxuICAgICAgICAgIHsoeyB3aWR0aCwgaGVpZ2h0IH0pID0+IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGAke3dpZHRofXB4YCwgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgIH19PlxuICAgICAgICAgICAgICA8UGFuZWxSZW5kZXJlclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgICAgcGx1Z2luSWQ9XCJ0YWJsZVwiXG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICBmaWVsZENvbmZpZz17ZmllbGRDb25maWd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0F1dG9TaXplcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDIpfSAwO1xuICAgIGAsXG4gICAgdGFibGU6IGNzc2BcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgaGVpZ2h0OiAxMzVweDtcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIubWVkaXVtfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKDEpfTtcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBEYXRhUXVlcnksXG4gIGdldERlZmF1bHRSZWxhdGl2ZVRpbWVSYW5nZSxcbiAgR3JhZmFuYVRoZW1lMixcbiAgTG9hZGluZ1N0YXRlLFxuICBQYW5lbERhdGEsXG4gIFJlbGF0aXZlVGltZVJhbmdlLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIEhvcml6b250YWxHcm91cCwgc3R5bGVzRmFjdG9yeSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGdldE5leHRSZWZJZENoYXIgfSBmcm9tICdhcHAvY29yZS91dGlscy9xdWVyeSc7XG5pbXBvcnQge1xuICBkYXRhU291cmNlIGFzIGV4cHJlc3Npb25EYXRhc291cmNlLFxuICBFeHByZXNzaW9uRGF0YXNvdXJjZVVJRCxcbn0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL0V4cHJlc3Npb25EYXRhc291cmNlJztcbmltcG9ydCB7IGlzRXhwcmVzc2lvblF1ZXJ5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL2d1YXJkcyc7XG5pbXBvcnQgeyBFeHByZXNzaW9uUXVlcnlUeXBlIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL3R5cGVzJztcbmltcG9ydCB7IGRlZmF1bHRDb25kaXRpb24gfSBmcm9tICdhcHAvZmVhdHVyZXMvZXhwcmVzc2lvbnMvdXRpbHMvZXhwcmVzc2lvblR5cGVzJztcbmltcG9ydCB7IGdldERhdGFzb3VyY2VTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9kYXRhc291cmNlX3Nydic7XG5pbXBvcnQgeyBBbGVydFF1ZXJ5IH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgQWxlcnRpbmdRdWVyeVJ1bm5lciB9IGZyb20gJy4uLy4uL3N0YXRlL0FsZXJ0aW5nUXVlcnlSdW5uZXInO1xuXG5pbXBvcnQgeyBRdWVyeVJvd3MgfSBmcm9tICcuL1F1ZXJ5Um93cyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHZhbHVlPzogQWxlcnRRdWVyeVtdO1xuICBvbkNoYW5nZTogKHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgcGFuZWxEYXRhQnlSZWZJZDogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPjtcbn1cbmV4cG9ydCBjbGFzcyBRdWVyeUVkaXRvciBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHByaXZhdGUgcnVubmVyOiBBbGVydGluZ1F1ZXJ5UnVubmVyO1xuICBwcml2YXRlIHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgcGFuZWxEYXRhQnlSZWZJZDoge30gfTtcbiAgICB0aGlzLnJ1bm5lciA9IG5ldyBBbGVydGluZ1F1ZXJ5UnVubmVyKCk7XG4gICAgdGhpcy5xdWVyaWVzID0gcHJvcHMudmFsdWUgPz8gW107XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJ1bm5lci5nZXQoKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYW5lbERhdGFCeVJlZklkOiBkYXRhIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5ydW5uZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgb25SdW5RdWVyaWVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcyB9ID0gdGhpcztcbiAgICB0aGlzLnJ1bm5lci5ydW4ocXVlcmllcyk7XG4gIH07XG5cbiAgb25DYW5jZWxRdWVyaWVzID0gKCkgPT4ge1xuICAgIHRoaXMucnVubmVyLmNhbmNlbCgpO1xuICB9O1xuXG4gIG9uQ2hhbmdlUXVlcmllcyA9IChxdWVyaWVzOiBBbGVydFF1ZXJ5W10pID0+IHtcbiAgICB0aGlzLnF1ZXJpZXMgPSBxdWVyaWVzO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UocXVlcmllcyk7XG4gIH07XG5cbiAgb25EdXBsaWNhdGVRdWVyeSA9IChxdWVyeTogQWxlcnRRdWVyeSkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcyB9ID0gdGhpcztcbiAgICB0aGlzLm9uQ2hhbmdlUXVlcmllcyhhZGRRdWVyeShxdWVyaWVzLCBxdWVyeSkpO1xuICB9O1xuXG4gIG9uTmV3QWxlcnRpbmdRdWVyeSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHF1ZXJpZXMgfSA9IHRoaXM7XG4gICAgY29uc3QgZGVmYXVsdERhdGFTb3VyY2UgPSBnZXREYXRhc291cmNlU3J2KCkuZ2V0SW5zdGFuY2VTZXR0aW5ncygnZGVmYXVsdCcpO1xuXG4gICAgaWYgKCFkZWZhdWx0RGF0YVNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMub25DaGFuZ2VRdWVyaWVzKFxuICAgICAgYWRkUXVlcnkocXVlcmllcywge1xuICAgICAgICBkYXRhc291cmNlVWlkOiBkZWZhdWx0RGF0YVNvdXJjZS51aWQsXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgcmVmSWQ6ICcnLFxuICAgICAgICAgIGRhdGFzb3VyY2U6IHtcbiAgICAgICAgICAgIHR5cGU6IGRlZmF1bHREYXRhU291cmNlLnR5cGUsXG4gICAgICAgICAgICB1aWQ6IGRlZmF1bHREYXRhU291cmNlLnVpZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIG9uTmV3RXhwcmVzc2lvblF1ZXJ5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcyB9ID0gdGhpcztcblxuICAgIHRoaXMub25DaGFuZ2VRdWVyaWVzKFxuICAgICAgYWRkUXVlcnkocXVlcmllcywge1xuICAgICAgICBkYXRhc291cmNlVWlkOiBFeHByZXNzaW9uRGF0YXNvdXJjZVVJRCxcbiAgICAgICAgbW9kZWw6IGV4cHJlc3Npb25EYXRhc291cmNlLm5ld1F1ZXJ5KHtcbiAgICAgICAgICB0eXBlOiBFeHByZXNzaW9uUXVlcnlUeXBlLmNsYXNzaWMsXG4gICAgICAgICAgY29uZGl0aW9uczogW2RlZmF1bHRDb25kaXRpb25dLFxuICAgICAgICB9KSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBpc1J1bm5pbmcoKSB7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC52YWx1ZXModGhpcy5zdGF0ZS5wYW5lbERhdGFCeVJlZklkKS5maW5kKChkKSA9PiBCb29sZWFuKGQpKTtcbiAgICByZXR1cm4gZGF0YT8uc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Mb2FkaW5nO1xuICB9XG5cbiAgcmVuZGVyUnVuUXVlcnlCdXR0b24oKSB7XG4gICAgY29uc3QgaXNSdW5uaW5nID0gdGhpcy5pc1J1bm5pbmcoKTtcblxuICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxCdXR0b24gaWNvbj1cImZhIGZhLXNwaW5uZXJcIiB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cImRlc3RydWN0aXZlXCIgb25DbGljaz17dGhpcy5vbkNhbmNlbFF1ZXJpZXN9PlxuICAgICAgICAgIENhbmNlbFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b24gaWNvbj1cInN5bmNcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5vblJ1blF1ZXJpZXN9PlxuICAgICAgICBSdW4gcXVlcmllc1xuICAgICAgPC9CdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZhbHVlID0gW10gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwYW5lbERhdGFCeVJlZklkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyhjb25maWcudGhlbWUyKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxRdWVyeVJvd3NcbiAgICAgICAgICBkYXRhPXtwYW5lbERhdGFCeVJlZklkfVxuICAgICAgICAgIHF1ZXJpZXM9e3ZhbHVlfVxuICAgICAgICAgIG9uUXVlcmllc0NoYW5nZT17dGhpcy5vbkNoYW5nZVF1ZXJpZXN9XG4gICAgICAgICAgb25EdXBsaWNhdGVRdWVyeT17dGhpcy5vbkR1cGxpY2F0ZVF1ZXJ5fVxuICAgICAgICAgIG9uUnVuUXVlcmllcz17dGhpcy5vblJ1blF1ZXJpZXN9XG4gICAgICAgIC8+XG4gICAgICAgIDxIb3Jpem9udGFsR3JvdXAgc3BhY2luZz1cInNtXCIgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uTmV3QWxlcnRpbmdRdWVyeX1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLmNvbXBvbmVudHMuUXVlcnlUYWIuYWRkUXVlcnl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIHF1ZXJ5XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAge2NvbmZpZy5leHByZXNzaW9uc0VuYWJsZWQgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWNvbj1cInBsdXNcIiBvbkNsaWNrPXt0aGlzLm9uTmV3RXhwcmVzc2lvblF1ZXJ5fSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIEFkZCBleHByZXNzaW9uXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0aGlzLnJlbmRlclJ1blF1ZXJ5QnV0dG9uKCl9XG4gICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBhZGRRdWVyeSA9IChxdWVyaWVzOiBBbGVydFF1ZXJ5W10sIHF1ZXJ5VG9BZGQ6IFBpY2s8QWxlcnRRdWVyeSwgJ21vZGVsJyB8ICdkYXRhc291cmNlVWlkJz4pOiBBbGVydFF1ZXJ5W10gPT4ge1xuICBjb25zdCByZWZJZCA9IGdldE5leHRSZWZJZENoYXIocXVlcmllcyk7XG5cbiAgY29uc3QgcXVlcnk6IEFsZXJ0UXVlcnkgPSB7XG4gICAgLi4ucXVlcnlUb0FkZCxcbiAgICByZWZJZCxcbiAgICBxdWVyeVR5cGU6ICcnLFxuICAgIG1vZGVsOiB7XG4gICAgICAuLi5xdWVyeVRvQWRkLm1vZGVsLFxuICAgICAgaGlkZTogZmFsc2UsXG4gICAgICByZWZJZCxcbiAgICB9LFxuICAgIHJlbGF0aXZlVGltZVJhbmdlOiBkZWZhdWx0VGltZVJhbmdlKHF1ZXJ5VG9BZGQubW9kZWwpLFxuICB9O1xuXG4gIHJldHVybiBbLi4ucXVlcmllcywgcXVlcnldO1xufTtcblxuY29uc3QgZGVmYXVsdFRpbWVSYW5nZSA9IChtb2RlbDogRGF0YVF1ZXJ5KTogUmVsYXRpdmVUaW1lUmFuZ2UgfCB1bmRlZmluZWQgPT4ge1xuICBpZiAoaXNFeHByZXNzaW9uUXVlcnkobW9kZWwpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIGdldERlZmF1bHRSZWxhdGl2ZVRpbWVSYW5nZSgpO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gc3R5bGVzRmFjdG9yeSgodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnh4bH1weDtcbiAgICBgLFxuICAgIHJ1bldyYXBwZXI6IGNzc2BcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgYCxcbiAgICBlZGl0b3JXcmFwcGVyOiBjc3NgXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIubWVkaXVtfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKCl9O1xuICAgIGAsXG4gIH07XG59KTtcbiIsImltcG9ydCB7IG9taXQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcm9wcGFibGUsIERyb3BSZXN1bHQgfSBmcm9tICdyZWFjdC1iZWF1dGlmdWwtZG5kJztcblxuaW1wb3J0IHtcbiAgRGF0YVF1ZXJ5LFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgTG9hZGluZ1N0YXRlLFxuICBQYW5lbERhdGEsXG4gIFJlbGF0aXZlVGltZVJhbmdlLFxuICBUaHJlc2hvbGRzQ29uZmlnLFxuICBUaHJlc2hvbGRzTW9kZSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGdldERhdGFTb3VyY2VTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgSWNvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFF1ZXJ5T3BlcmF0aW9uUm93IH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9RdWVyeU9wZXJhdGlvblJvdy9RdWVyeU9wZXJhdGlvblJvdyc7XG5pbXBvcnQgeyBpc0V4cHJlc3Npb25RdWVyeSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9leHByZXNzaW9ucy9ndWFyZHMnO1xuaW1wb3J0IHsgZ2V0RGF0YXNvdXJjZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2RhdGFzb3VyY2Vfc3J2JztcbmltcG9ydCB7IEFsZXJ0RGF0YVF1ZXJ5LCBBbGVydFF1ZXJ5IH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgRW1wdHlRdWVyeVdyYXBwZXIsIFF1ZXJ5V3JhcHBlciB9IGZyb20gJy4vUXVlcnlXcmFwcGVyJztcbmltcG9ydCB7IHF1ZXJpZXNXaXRoVXBkYXRlZFJlZmVyZW5jZXMgfSBmcm9tICcuL3V0aWwnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAvLyBUaGUgcXVlcnkgY29uZmlndXJhdGlvblxuICBxdWVyaWVzOiBBbGVydFF1ZXJ5W107XG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT47XG5cbiAgLy8gUXVlcnkgZWRpdGluZ1xuICBvblF1ZXJpZXNDaGFuZ2U6IChxdWVyaWVzOiBBbGVydFF1ZXJ5W10pID0+IHZvaWQ7XG4gIG9uRHVwbGljYXRlUXVlcnk6IChxdWVyeTogQWxlcnRRdWVyeSkgPT4gdm9pZDtcbiAgb25SdW5RdWVyaWVzOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBkYXRhUGVyUXVlcnk6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT47XG59XG5cbmV4cG9ydCBjbGFzcyBRdWVyeVJvd3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0geyBkYXRhUGVyUXVlcnk6IHt9IH07XG4gIH1cblxuICBvblJlbW92ZVF1ZXJ5ID0gKHF1ZXJ5OiBEYXRhUXVlcnkpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uUXVlcmllc0NoYW5nZShcbiAgICAgIHRoaXMucHJvcHMucXVlcmllcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ubW9kZWwucmVmSWQgIT09IHF1ZXJ5LnJlZklkO1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIG9uQ2hhbmdlVGltZVJhbmdlID0gKHRpbWVSYW5nZTogUmVsYXRpdmVUaW1lUmFuZ2UsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7IHF1ZXJpZXMsIG9uUXVlcmllc0NoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvblF1ZXJpZXNDaGFuZ2UoXG4gICAgICBxdWVyaWVzLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpdGVtSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgIHJlbGF0aXZlVGltZVJhbmdlOiB0aW1lUmFuZ2UsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgb25DaGFuZ2VUaHJlc2hvbGQgPSAodGhyZXNob2xkczogVGhyZXNob2xkc0NvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcywgb25RdWVyaWVzQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlZFJlZklkID0gcXVlcmllc1tpbmRleF0ucmVmSWQ7XG5cbiAgICBvblF1ZXJpZXNDaGFuZ2UoXG4gICAgICBxdWVyaWVzLm1hcCgocXVlcnkpID0+IHtcbiAgICAgICAgaWYgKCFpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkpIHtcbiAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocXVlcnkubW9kZWwuY29uZGl0aW9ucyAmJiBxdWVyeS5tb2RlbC5jb25kaXRpb25zWzBdLnF1ZXJ5LnBhcmFtc1swXSA9PT0gcmVmZXJlbmNlZFJlZklkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgLi4ucXVlcnkubW9kZWwsXG4gICAgICAgICAgICAgIGNvbmRpdGlvbnM6IHF1ZXJ5Lm1vZGVsLmNvbmRpdGlvbnMubWFwKChjb25kaXRpb24sIGNvbmRpdGlvbkluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gT25seSB1cGRhdGUgdGhlIGZpcnN0IGNvbmRpdGlvbiBmb3IgYSBnaXZlbiByZWZJZC5cbiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uLnF1ZXJ5LnBhcmFtc1swXSA9PT0gcmVmZXJlbmNlZFJlZklkICYmIGNvbmRpdGlvbkluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5jb25kaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGV2YWx1YXRvcjoge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmNvbmRpdGlvbi5ldmFsdWF0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbcGFyc2VGbG9hdCh0aHJlc2hvbGRzLnN0ZXBzWzFdLnZhbHVlLnRvUHJlY2lzaW9uKDMpKV0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZGl0aW9uO1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgb25DaGFuZ2VEYXRhU291cmNlID0gKHNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHsgcXVlcmllcywgb25RdWVyaWVzQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdXBkYXRlZFF1ZXJpZXMgPSBxdWVyaWVzLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICBpZiAoaXRlbUluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvcHlNb2RlbChpdGVtLCBzZXR0aW5ncy51aWQpO1xuICAgIH0pO1xuICAgIG9uUXVlcmllc0NoYW5nZSh1cGRhdGVkUXVlcmllcyk7XG4gIH07XG5cbiAgb25DaGFuZ2VRdWVyeSA9IChxdWVyeTogRGF0YVF1ZXJ5LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBxdWVyaWVzLCBvblF1ZXJpZXNDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBmaW5kIHdoYXQgcXVlcmllcyBzdGlsbCBoYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBvbGQgbmFtZVxuICAgIGNvbnN0IHByZXZpb3VzUmVmSWQgPSBxdWVyaWVzW2luZGV4XS5yZWZJZDtcbiAgICBjb25zdCBuZXdSZWZJZCA9IHF1ZXJ5LnJlZklkO1xuXG4gICAgb25RdWVyaWVzQ2hhbmdlKFxuICAgICAgcXVlcmllc1dpdGhVcGRhdGVkUmVmZXJlbmNlcyhxdWVyaWVzLCBwcmV2aW91c1JlZklkLCBuZXdSZWZJZCkubWFwKChpdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW1JbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICByZWZJZDogcXVlcnkucmVmSWQsXG4gICAgICAgICAgcXVlcnlUeXBlOiBpdGVtLm1vZGVsLnF1ZXJ5VHlwZSA/PyAnJyxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgLi4uaXRlbS5tb2RlbCxcbiAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgZGF0YXNvdXJjZTogcXVlcnkuZGF0YXNvdXJjZSEsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBvbkRyYWdFbmQgPSAocmVzdWx0OiBEcm9wUmVzdWx0KSA9PiB7XG4gICAgY29uc3QgeyBxdWVyaWVzLCBvblF1ZXJpZXNDaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LmRlc3RpbmF0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9IHJlc3VsdC5zb3VyY2UuaW5kZXg7XG4gICAgY29uc3QgZW5kSW5kZXggPSByZXN1bHQuZGVzdGluYXRpb24uaW5kZXg7XG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IGVuZEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlID0gQXJyYXkuZnJvbShxdWVyaWVzKTtcbiAgICBjb25zdCBbcmVtb3ZlZF0gPSB1cGRhdGUuc3BsaWNlKHN0YXJ0SW5kZXgsIDEpO1xuICAgIHVwZGF0ZS5zcGxpY2UoZW5kSW5kZXgsIDAsIHJlbW92ZWQpO1xuICAgIG9uUXVlcmllc0NoYW5nZSh1cGRhdGUpO1xuICB9O1xuXG4gIG9uRHVwbGljYXRlUXVlcnkgPSAocXVlcnk6IERhdGFRdWVyeSwgc291cmNlOiBBbGVydFF1ZXJ5KTogdm9pZCA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkR1cGxpY2F0ZVF1ZXJ5KHtcbiAgICAgIC4uLnNvdXJjZSxcbiAgICAgIG1vZGVsOiBxdWVyeSxcbiAgICB9KTtcbiAgfTtcblxuICBnZXREYXRhU291cmNlU2V0dGluZ3MgPSAocXVlcnk6IEFsZXJ0UXVlcnkpOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgcmV0dXJuIGdldERhdGFTb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKHF1ZXJ5LmRhdGFzb3VyY2VVaWQpO1xuICB9O1xuXG4gIGdldFRocmVzaG9sZHNGb3JRdWVyaWVzID0gKHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSk6IFJlY29yZDxzdHJpbmcsIFRocmVzaG9sZHNDb25maWc+ID0+IHtcbiAgICBjb25zdCByZWNvcmQ6IFJlY29yZDxzdHJpbmcsIFRocmVzaG9sZHNDb25maWc+ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IHF1ZXJ5IG9mIHF1ZXJpZXMpIHtcbiAgICAgIGlmICghaXNFeHByZXNzaW9uUXVlcnkocXVlcnkubW9kZWwpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocXVlcnkubW9kZWwuY29uZGl0aW9ucykpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHF1ZXJ5Lm1vZGVsLmNvbmRpdGlvbnMuZm9yRWFjaCgoY29uZGl0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IGNvbmRpdGlvbi5ldmFsdWF0b3IucGFyYW1zWzBdO1xuICAgICAgICBjb25zdCByZWZJZCA9IGNvbmRpdGlvbi5xdWVyeS5wYXJhbXNbMF07XG5cbiAgICAgICAgaWYgKGNvbmRpdGlvbi5ldmFsdWF0b3IudHlwZSA9PT0gJ291dHNpZGVfcmFuZ2UnIHx8IGNvbmRpdGlvbi5ldmFsdWF0b3IudHlwZSA9PT0gJ3dpdGhpbl9yYW5nZScpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZWNvcmRbcmVmSWRdKSB7XG4gICAgICAgICAgcmVjb3JkW3JlZklkXSA9IHtcbiAgICAgICAgICAgIG1vZGU6IFRocmVzaG9sZHNNb2RlLkFic29sdXRlLFxuICAgICAgICAgICAgc3RlcHM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAtSW5maW5pdHksXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbmZpZy50aGVtZTIuY29sb3JzLnN1Y2Nlc3MubWFpbixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY29yZFtyZWZJZF0uc3RlcHMucHVzaCh7XG4gICAgICAgICAgdmFsdWU6IHRocmVzaG9sZCxcbiAgICAgICAgICBjb2xvcjogY29uZmlnLnRoZW1lMi5jb2xvcnMuZXJyb3IubWFpbixcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjb3JkO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9uRHVwbGljYXRlUXVlcnksIG9uUnVuUXVlcmllcywgcXVlcmllcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0aHJlc2hvbGRCeVJlZklkID0gdGhpcy5nZXRUaHJlc2hvbGRzRm9yUXVlcmllcyhxdWVyaWVzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17dGhpcy5vbkRyYWdFbmR9PlxuICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiYWxlcnRpbmctcXVlcmllc1wiIGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgeyhwcm92aWRlZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfSB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9PlxuICAgICAgICAgICAgICAgIHtxdWVyaWVzLm1hcCgocXVlcnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhOiBQYW5lbERhdGEgPSB0aGlzLnByb3BzLmRhdGE/LltxdWVyeS5yZWZJZF0gPz8ge1xuICAgICAgICAgICAgICAgICAgICBzZXJpZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLk5vdFN0YXJ0ZWQsXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgY29uc3QgZHNTZXR0aW5ncyA9IHRoaXMuZ2V0RGF0YVNvdXJjZVNldHRpbmdzKHF1ZXJ5KTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCFkc1NldHRpbmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPERhdGFzb3VyY2VOb3RGb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtxdWVyeS5yZWZJZH0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw9e3F1ZXJ5Lm1vZGVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25VcGRhdGVEYXRhc291cmNlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHREYXRhU291cmNlID0gZ2V0RGF0YXNvdXJjZVNydigpLmdldEluc3RhbmNlU2V0dGluZ3MobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0RGF0YVNvdXJjZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2VEYXRhU291cmNlKGRlZmF1bHREYXRhU291cmNlLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZVF1ZXJ5PXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25SZW1vdmVRdWVyeShxdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxRdWVyeVdyYXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtxdWVyeS5yZWZJZH0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgIGRzU2V0dGluZ3M9e2RzU2V0dGluZ3N9XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VRdWVyeT17dGhpcy5vbkNoYW5nZVF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlUXVlcnk9e3RoaXMub25SZW1vdmVRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICBxdWVyaWVzPXtxdWVyaWVzfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlRGF0YVNvdXJjZT17dGhpcy5vbkNoYW5nZURhdGFTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgICAgb25EdXBsaWNhdGVRdWVyeT17b25EdXBsaWNhdGVRdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICBvblJ1blF1ZXJpZXM9e29uUnVuUXVlcmllc31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVRpbWVSYW5nZT17dGhpcy5vbkNoYW5nZVRpbWVSYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGRzPXt0aHJlc2hvbGRCeVJlZklkW3F1ZXJ5LnJlZklkXX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVRocmVzaG9sZD17dGhpcy5vbkNoYW5nZVRocmVzaG9sZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPC9Ecm9wcGFibGU+XG4gICAgICA8L0RyYWdEcm9wQ29udGV4dD5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvcHlNb2RlbChpdGVtOiBBbGVydFF1ZXJ5LCB1aWQ6IHN0cmluZyk6IE9taXQ8QWxlcnRRdWVyeSwgJ2RhdGFzb3VyY2UnPiB7XG4gIHJldHVybiB7XG4gICAgLi4uaXRlbSxcbiAgICBtb2RlbDogb21pdChpdGVtLm1vZGVsLCAnZGF0YXNvdXJjZScpLFxuICAgIGRhdGFzb3VyY2VVaWQ6IHVpZCxcbiAgfTtcbn1cblxuaW50ZXJmYWNlIERhdGFzb3VyY2VOb3RGb3VuZFByb3BzIHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgbW9kZWw6IEFsZXJ0RGF0YVF1ZXJ5O1xuICBvblVwZGF0ZURhdGFzb3VyY2U6ICgpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlUXVlcnk6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IERhdGFzb3VyY2VOb3RGb3VuZCA9ICh7IGluZGV4LCBvblVwZGF0ZURhdGFzb3VyY2UsIG9uUmVtb3ZlUXVlcnksIG1vZGVsIH06IERhdGFzb3VyY2VOb3RGb3VuZFByb3BzKSA9PiB7XG4gIGNvbnN0IHJlZklkID0gbW9kZWwucmVmSWQ7XG5cbiAgY29uc3QgW3Nob3dEZXRhaWxzLCBzZXRTaG93RGV0YWlsc10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlRGV0YWlscyA9ICgpID0+IHtcbiAgICBzZXRTaG93RGV0YWlscygoc2hvdykgPT4gIXNob3cpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZURhdGFzb3VyY2UgPSAoKSA9PiB7XG4gICAgb25VcGRhdGVEYXRhc291cmNlKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RW1wdHlRdWVyeVdyYXBwZXI+XG4gICAgICA8UXVlcnlPcGVyYXRpb25Sb3cgdGl0bGU9e3JlZklkfSBkcmFnZ2FibGUgaW5kZXg9e2luZGV4fSBpZD17cmVmSWR9IGlzT3Blbj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBoZWFkaW5nPVwiVGhpcyBkYXRhc291cmNlIGhhcyBiZWVuIHJlbW92ZWRcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgICdUaGUgZGF0YXNvdXJjZSBmb3IgdGhpcyBxdWVyeSB3YXMgbm90IGZvdW5kLCBpdCB3YXMgZWl0aGVyIHJlbW92ZWQgb3IgaXMgbm90IGluc3RhbGxlZCBjb3JyZWN0bHkuJ1xuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxDYXJkLkZpZ3VyZT5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJxdWVzdGlvbi1jaXJjbGVcIiAvPlxuICAgICAgICAgIDwvQ2FyZC5GaWd1cmU+XG4gICAgICAgICAgPENhcmQuQWN0aW9ucz5cbiAgICAgICAgICAgIDxCdXR0b24ga2V5PVwidXBkYXRlXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e2hhbmRsZVVwZGF0ZURhdGFzb3VyY2V9PlxuICAgICAgICAgICAgICBVcGRhdGUgZGF0YXNvdXJjZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGtleT1cInJlbW92ZVwiIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIG9uQ2xpY2s9e29uUmVtb3ZlUXVlcnl9PlxuICAgICAgICAgICAgICBSZW1vdmUgcXVlcnlcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQ2FyZC5BY3Rpb25zPlxuICAgICAgICAgIDxDYXJkLlNlY29uZGFyeUFjdGlvbnM+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGtleT1cImRldGFpbHNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEZXRhaWxzfVxuICAgICAgICAgICAgICBpY29uPXtzaG93RGV0YWlscyA/ICdhbmdsZS11cCcgOiAnYW5nbGUtZG93bid9XG4gICAgICAgICAgICAgIGZpbGw9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2hvdyBkZXRhaWxzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NhcmQuU2Vjb25kYXJ5QWN0aW9ucz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICB7c2hvd0RldGFpbHMgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICA8Y29kZT57SlNPTi5zdHJpbmdpZnkobW9kZWwsIG51bGwsIDIpfTwvY29kZT5cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9RdWVyeU9wZXJhdGlvblJvdz5cbiAgICA8L0VtcHR5UXVlcnlXcmFwcGVyPlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBDb3JlQXBwLFxuICBEYXRhUXVlcnksXG4gIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLFxuICBnZXREZWZhdWx0UmVsYXRpdmVUaW1lUmFuZ2UsXG4gIEdyYWZhbmFUaGVtZTIsXG4gIExvYWRpbmdTdGF0ZSxcbiAgUGFuZWxEYXRhLFxuICBSZWxhdGl2ZVRpbWVSYW5nZSxcbiAgVGhyZXNob2xkc0NvbmZpZyxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBSZWxhdGl2ZVRpbWVSYW5nZVBpY2tlciwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IGlzRXhwcmVzc2lvblF1ZXJ5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL2d1YXJkcyc7XG5pbXBvcnQgeyBRdWVyeUVkaXRvclJvdyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9xdWVyeS9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yUm93JztcbmltcG9ydCB7IEFsZXJ0UXVlcnkgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBUQUJMRSwgVElNRVNFUklFUyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBTdXBwb3J0ZWRQYW5lbFBsdWdpbnMgfSBmcm9tICcuLi9QYW5lbFBsdWdpbnNCdXR0b25Hcm91cCc7XG5cbmltcG9ydCB7IFZpeldyYXBwZXIgfSBmcm9tICcuL1ZpeldyYXBwZXInO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBkYXRhOiBQYW5lbERhdGE7XG4gIHF1ZXJ5OiBBbGVydFF1ZXJ5O1xuICBxdWVyaWVzOiBBbGVydFF1ZXJ5W107XG4gIGRzU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzO1xuICBvbkNoYW5nZURhdGFTb3VyY2U6IChzZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsIGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gIG9uQ2hhbmdlUXVlcnk6IChxdWVyeTogRGF0YVF1ZXJ5LCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBvbkNoYW5nZVRpbWVSYW5nZT86ICh0aW1lUmFuZ2U6IFJlbGF0aXZlVGltZVJhbmdlLCBpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBvblJlbW92ZVF1ZXJ5OiAocXVlcnk6IERhdGFRdWVyeSkgPT4gdm9pZDtcbiAgb25EdXBsaWNhdGVRdWVyeTogKHF1ZXJ5OiBBbGVydFF1ZXJ5KSA9PiB2b2lkO1xuICBvblJ1blF1ZXJpZXM6ICgpID0+IHZvaWQ7XG4gIGluZGV4OiBudW1iZXI7XG4gIHRocmVzaG9sZHM6IFRocmVzaG9sZHNDb25maWc7XG4gIG9uQ2hhbmdlVGhyZXNob2xkOiAodGhyZXNob2xkczogVGhyZXNob2xkc0NvbmZpZywgaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5V3JhcHBlcjogRkM8UHJvcHM+ID0gKHtcbiAgZGF0YSxcbiAgZHNTZXR0aW5ncyxcbiAgaW5kZXgsXG4gIG9uQ2hhbmdlRGF0YVNvdXJjZSxcbiAgb25DaGFuZ2VRdWVyeSxcbiAgb25DaGFuZ2VUaW1lUmFuZ2UsXG4gIG9uUnVuUXVlcmllcyxcbiAgb25SZW1vdmVRdWVyeSxcbiAgb25EdXBsaWNhdGVRdWVyeSxcbiAgcXVlcnksXG4gIHF1ZXJpZXMsXG4gIHRocmVzaG9sZHMsXG4gIG9uQ2hhbmdlVGhyZXNob2xkLFxufSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGlzRXhwcmVzc2lvbiA9IGlzRXhwcmVzc2lvblF1ZXJ5KHF1ZXJ5Lm1vZGVsKTtcbiAgY29uc3QgW3BsdWdpbklkLCBjaGFuZ2VQbHVnaW5JZF0gPSB1c2VTdGF0ZTxTdXBwb3J0ZWRQYW5lbFBsdWdpbnM+KGlzRXhwcmVzc2lvbiA/IFRBQkxFIDogVElNRVNFUklFUyk7XG5cbiAgY29uc3QgcmVuZGVyVGltZVBpY2tlciA9IChxdWVyeTogQWxlcnRRdWVyeSwgaW5kZXg6IG51bWJlcik6IFJlYWN0Tm9kZSA9PiB7XG4gICAgaWYgKGlzRXhwcmVzc2lvblF1ZXJ5KHF1ZXJ5Lm1vZGVsKSB8fCAhb25DaGFuZ2VUaW1lUmFuZ2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVsYXRpdmVUaW1lUmFuZ2VQaWNrZXJcbiAgICAgICAgdGltZVJhbmdlPXtxdWVyeS5yZWxhdGl2ZVRpbWVSYW5nZSA/PyBnZXREZWZhdWx0UmVsYXRpdmVUaW1lUmFuZ2UoKX1cbiAgICAgICAgb25DaGFuZ2U9eyhyYW5nZSkgPT4gb25DaGFuZ2VUaW1lUmFuZ2UocmFuZ2UsIGluZGV4KX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8UXVlcnlFZGl0b3JSb3c8RGF0YVF1ZXJ5PlxuICAgICAgICBhbGVydGluZ1xuICAgICAgICBkYXRhU291cmNlPXtkc1NldHRpbmdzfVxuICAgICAgICBvbkNoYW5nZURhdGFTb3VyY2U9eyFpc0V4cHJlc3Npb24gPyAoc2V0dGluZ3MpID0+IG9uQ2hhbmdlRGF0YVNvdXJjZShzZXR0aW5ncywgaW5kZXgpIDogdW5kZWZpbmVkfVxuICAgICAgICBpZD17cXVlcnkucmVmSWR9XG4gICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAga2V5PXtxdWVyeS5yZWZJZH1cbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgcXVlcnk9e2Nsb25lRGVlcChxdWVyeS5tb2RlbCl9XG4gICAgICAgIG9uQ2hhbmdlPXsocXVlcnkpID0+IG9uQ2hhbmdlUXVlcnkocXVlcnksIGluZGV4KX1cbiAgICAgICAgb25SZW1vdmVRdWVyeT17b25SZW1vdmVRdWVyeX1cbiAgICAgICAgb25BZGRRdWVyeT17KCkgPT4gb25EdXBsaWNhdGVRdWVyeShjbG9uZURlZXAocXVlcnkpKX1cbiAgICAgICAgb25SdW5RdWVyeT17b25SdW5RdWVyaWVzfVxuICAgICAgICBxdWVyaWVzPXtxdWVyaWVzfVxuICAgICAgICByZW5kZXJIZWFkZXJFeHRyYXM9eygpID0+IHJlbmRlclRpbWVQaWNrZXIocXVlcnksIGluZGV4KX1cbiAgICAgICAgYXBwPXtDb3JlQXBwLlVuaWZpZWRBbGVydGluZ31cbiAgICAgICAgdmlzdWFsaXphdGlvbj17XG4gICAgICAgICAgZGF0YS5zdGF0ZSAhPT0gTG9hZGluZ1N0YXRlLk5vdFN0YXJ0ZWQgPyAoXG4gICAgICAgICAgICA8Vml6V3JhcHBlclxuICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICBjaGFuZ2VQYW5lbD17Y2hhbmdlUGx1Z2luSWR9XG4gICAgICAgICAgICAgIGN1cnJlbnRQYW5lbD17cGx1Z2luSWR9XG4gICAgICAgICAgICAgIHRocmVzaG9sZHM9e3RocmVzaG9sZHN9XG4gICAgICAgICAgICAgIG9uVGhyZXNob2xkc0NoYW5nZT17KHRocmVzaG9sZHMpID0+IG9uQ2hhbmdlVGhyZXNob2xkKHRocmVzaG9sZHMsIGluZGV4KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICBoaWRlRGlzYWJsZVF1ZXJ5PXt0cnVlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBFbXB0eVF1ZXJ5V3JhcHBlcjogRkM8e30+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICBsYWJlbDogQWxlcnRpbmdRdWVyeVdyYXBwZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIubWVkaXVtfTtcbiAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNoYXBlLmJvcmRlclJhZGl1cygxKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZpZWxkU2V0LCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJ1bGVFZGl0b3JTZWN0aW9uUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBzdGVwTm86IG51bWJlcjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBSdWxlRWRpdG9yU2VjdGlvbjogRkM8UnVsZUVkaXRvclNlY3Rpb25Qcm9wcz4gPSAoeyB0aXRsZSwgc3RlcE5vLCBjaGlsZHJlbiwgZGVzY3JpcHRpb24gfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcmVudH0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zdGVwTm99PntzdGVwTm99PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICA8RmllbGRTZXQgbGFiZWw9e3RpdGxlfSBjbGFzc05hbWU9e3N0eWxlcy5maWVsZHNldH0+XG4gICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9wPn1cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvRmllbGRTZXQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZmllbGRzZXQ6IGNzc2BcbiAgICBsZWdlbmQge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgcGFkZGluZy10b3A6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICB9XG4gIGAsXG4gIHBhcmVudDogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXgtd2lkdGg6ICR7dGhlbWUuYnJlYWtwb2ludHMudmFsdWVzLnhsfTtcbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICAgIH1cbiAgYCxcbiAgZGVzY3JpcHRpb246IGNzc2BcbiAgICBtYXJnaW4tdG9wOiAtJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgYCxcbiAgc3RlcE5vOiBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICAgIGhlaWdodDogJHt0aGVtZS5zcGFjaW5nKDQpfTtcbiAgICBsaW5lLWhlaWdodDogJHt0aGVtZS5zcGFjaW5nKDQpfTtcbiAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5tYXhDb250cmFzdH07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5jYW52YXN9O1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUubGd9O1xuICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgYCxcbiAgY29udGVudDogY3NzYFxuICAgIGZsZXg6IDE7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBkdW1wLCBsb2FkIH0gZnJvbSAnanMteWFtbCc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IEF1dG9TaXplciBmcm9tICdyZWFjdC12aXJ0dWFsaXplZC1hdXRvLXNpemVyJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBDb2RlRWRpdG9yLCBEcmF3ZXIsIFRhYiwgVGFic0JhciwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCB0YWJzID0gW3sgbGFiZWw6ICdZYW1sJywgdmFsdWU6ICd5YW1sJyB9XTtcblxuZXhwb3J0IGNvbnN0IFJ1bGVJbnNwZWN0b3I6IEZDPFByb3BzPiA9ICh7IG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGUoJ3lhbWwnKTtcbiAgY29uc3QgeyBzZXRWYWx1ZSB9ID0gdXNlRm9ybUNvbnRleHQ8UnVsZUZvcm1WYWx1ZXM+KCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZHJhd2VyU3R5bGVzKTtcblxuICBjb25zdCBvbkFwcGx5ID0gKGZvcm1WYWx1ZXM6IFJ1bGVGb3JtVmFsdWVzKSA9PiB7XG4gICAgLy8gTmVlZCB0byBsb29wIHRocm91Z2ggYWxsIHZhbHVlcyBhbmQgc2V0IHRoZW0gaW5kaXZpZHVhbGx5XG4gICAgLy8gVE9ETyB0aGlzIGlzIG5vdCB0eXBlLXNhZmUgOihcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmb3JtVmFsdWVzKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBzZXRWYWx1ZShrZXksIGZvcm1WYWx1ZXNba2V5XSk7XG4gICAgfVxuICAgIG9uQ2xvc2UoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHRpdGxlPVwiSW5zcGVjdCBBbGVydCBydWxlXCJcbiAgICAgIHN1YnRpdGxlPXtcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgPFJ1bGVJbnNwZWN0b3JTdWJ0aXRsZSBzZXRBY3RpdmVUYWI9e3NldEFjdGl2ZVRhYn0gYWN0aXZlVGFiPXthY3RpdmVUYWJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICA+XG4gICAgICB7YWN0aXZlVGFiID09PSAneWFtbCcgJiYgPEluc3BlY3RvcllhbWxUYWIgb25TdWJtaXQ9e29uQXBwbHl9IC8+fVxuICAgIDwvRHJhd2VyPlxuICApO1xufTtcblxuaW50ZXJmYWNlIFN1YnRpdGxlUHJvcHMge1xuICBhY3RpdmVUYWI6IHN0cmluZztcbiAgc2V0QWN0aXZlVGFiOiAodGFiOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFJ1bGVJbnNwZWN0b3JTdWJ0aXRsZTogRkM8U3VidGl0bGVQcm9wcz4gPSAoeyBhY3RpdmVUYWIsIHNldEFjdGl2ZVRhYiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRhYnNCYXI+XG4gICAgICB7dGFicy5tYXAoKHRhYiwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VGFiXG4gICAgICAgICAgICBrZXk9e2Ake3RhYi52YWx1ZX0tJHtpbmRleH1gfVxuICAgICAgICAgICAgbGFiZWw9e3RhYi5sYWJlbH1cbiAgICAgICAgICAgIHZhbHVlPXt0YWIudmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZVRhYj17KCkgPT4gc2V0QWN0aXZlVGFiKHRhYi52YWx1ZSl9XG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZVRhYiA9PT0gdGFiLnZhbHVlfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L1RhYnNCYXI+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgWWFtbFRhYlByb3BzIHtcbiAgb25TdWJtaXQ6IChuZXdNb2RlbDogUnVsZUZvcm1WYWx1ZXMpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEluc3BlY3RvcllhbWxUYWI6IEZDPFlhbWxUYWJQcm9wcz4gPSAoeyBvblN1Ym1pdCB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoeWFtbFRhYlN0eWxlKTtcbiAgY29uc3QgeyBnZXRWYWx1ZXMgfSA9IHVzZUZvcm1Db250ZXh0PFJ1bGVGb3JtVmFsdWVzPigpO1xuICBjb25zdCBbYWxlcnRSdWxlQXNZYW1sLCBzZXRBbGVydFJ1bGVBc1lhbWxdID0gdXNlU3RhdGUoZHVtcChnZXRWYWx1ZXMoKSkpO1xuXG4gIGNvbnN0IG9uQXBwbHkgPSAoKSA9PiB7XG4gICAgb25TdWJtaXQobG9hZChhbGVydFJ1bGVBc1lhbWwpIGFzIFJ1bGVGb3JtVmFsdWVzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFwcGx5QnV0dG9ufT5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25BcHBseX0+XG4gICAgICAgICAgQXBwbHlcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPEF1dG9TaXplciBkaXNhYmxlV2lkdGg+XG4gICAgICAgICAgeyh7IGhlaWdodCB9KSA9PiAoXG4gICAgICAgICAgICA8Q29kZUVkaXRvclxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgbGFuZ3VhZ2U9XCJ5YW1sXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2FsZXJ0UnVsZUFzWWFtbH1cbiAgICAgICAgICAgICAgb25CbHVyPXtzZXRBbGVydFJ1bGVBc1lhbWx9XG4gICAgICAgICAgICAgIG1vbmFjb09wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICBtaW5pbWFwOiB7XG4gICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0F1dG9TaXplcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgeWFtbFRhYlN0eWxlID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBjb250ZW50OiBjc3NgXG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICBgLFxuICBhcHBseUJ1dHRvbjogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAwO1xuICBgLFxufSk7XG5cbmNvbnN0IGRyYXdlclN0eWxlcyA9ICgpID0+ICh7XG4gIHN1YnRpdGxlOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IElucHV0LCBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgb3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xuICB2YWx1ZT86IHN0cmluZztcbiAgYWRkTGFiZWw/OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGN1c3RvbT86IGJvb2xlYW47XG4gIG9uQ3VzdG9tQ2hhbmdlPzogKGN1c3RvbTogYm9vbGVhbikgPT4gdm9pZDtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgJ2FyaWEtbGFiZWwnPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgU2VsZWN0V2l0aEFkZDogRkM8UHJvcHM+ID0gKHtcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBvcHRpb25zLFxuICBjbGFzc05hbWUsXG4gIHBsYWNlaG9sZGVyLFxuICB3aWR0aCxcbiAgY3VzdG9tLFxuICBvbkN1c3RvbUNoYW5nZSxcbiAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgYWRkTGFiZWwgPSAnKyBBZGQgbmV3JyxcbiAgJ2FyaWEtbGFiZWwnOiBhcmlhTGFiZWwsXG59KSA9PiB7XG4gIGNvbnN0IFtpc0N1c3RvbSwgc2V0SXNDdXN0b21dID0gdXNlU3RhdGUoY3VzdG9tKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjdXN0b20pIHtcbiAgICAgIHNldElzQ3VzdG9tKGN1c3RvbSk7XG4gICAgfVxuICB9LCBbY3VzdG9tXSk7XG5cbiAgY29uc3QgX29wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPT4gWy4uLm9wdGlvbnMsIHsgdmFsdWU6ICdfX2FkZF9fJywgbGFiZWw6IGFkZExhYmVsIH1dLFxuICAgIFtvcHRpb25zLCBhZGRMYWJlbF1cbiAgKTtcblxuICBpZiAoaXNDdXN0b20pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0XG4gICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBhdXRvRm9jdXM9eyFjdXN0b219XG4gICAgICAgIHZhbHVlPXt2YWx1ZSB8fCAnJ31cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSl9XG4gICAgICAvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIG9wdGlvbnM9e19vcHRpb25zfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgb25DaGFuZ2U9eyh2YWw6IFNlbGVjdGFibGVWYWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsPy52YWx1ZTtcbiAgICAgICAgICBpZiAodmFsdWUgPT09ICdfX2FkZF9fJykge1xuICAgICAgICAgICAgc2V0SXNDdXN0b20odHJ1ZSk7XG4gICAgICAgICAgICBpZiAob25DdXN0b21DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgb25DdXN0b21DaGFuZ2UodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNoYW5nZSgnJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF1dG9TaXplciBmcm9tICdyZWFjdC12aXJ0dWFsaXplZC1hdXRvLXNpemVyJztcblxuaW1wb3J0IHsgRmllbGRDb25maWdTb3VyY2UsIEdyYWZhbmFUaGVtZTIsIFBhbmVsRGF0YSwgVGhyZXNob2xkc0NvbmZpZyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUGFuZWxSZW5kZXJlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgR3JhcGhGaWVsZENvbmZpZywgR3JhcGhUcmVzaG9sZHNTdHlsZU1vZGUgfSBmcm9tICdAZ3JhZmFuYS9zY2hlbWEnO1xuaW1wb3J0IHsgUGFuZWxDb250ZXh0LCBQYW5lbENvbnRleHRQcm92aWRlciwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBhcHBFdmVudHMgZnJvbSAnYXBwL2NvcmUvYXBwX2V2ZW50cyc7XG5pbXBvcnQgeyBQYW5lbE9wdGlvbnMgfSBmcm9tICdhcHAvcGx1Z2lucy9wYW5lbC90YWJsZS9tb2RlbHMuZ2VuJztcblxuaW1wb3J0IHsgdXNlVml6SGVpZ2h0IH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlVml6SGVpZ2h0JztcbmltcG9ydCB7IFN1cHBvcnRlZFBhbmVsUGx1Z2lucywgUGFuZWxQbHVnaW5zQnV0dG9uR3JvdXAgfSBmcm9tICcuLi9QYW5lbFBsdWdpbnNCdXR0b25Hcm91cCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGRhdGE6IFBhbmVsRGF0YTtcbiAgY3VycmVudFBhbmVsOiBTdXBwb3J0ZWRQYW5lbFBsdWdpbnM7XG4gIGNoYW5nZVBhbmVsOiAocGFuZWw6IFN1cHBvcnRlZFBhbmVsUGx1Z2lucykgPT4gdm9pZDtcbiAgdGhyZXNob2xkczogVGhyZXNob2xkc0NvbmZpZztcbiAgb25UaHJlc2hvbGRzQ2hhbmdlOiAodGhyZXNob2xkczogVGhyZXNob2xkc0NvbmZpZykgPT4gdm9pZDtcbn1cblxudHlwZSBQYW5lbEZpZWxkQ29uZmlnID0gRmllbGRDb25maWdTb3VyY2U8R3JhcGhGaWVsZENvbmZpZz47XG5cbmV4cG9ydCBjb25zdCBWaXpXcmFwcGVyOiBGQzxQcm9wcz4gPSAoeyBkYXRhLCBjdXJyZW50UGFuZWwsIGNoYW5nZVBhbmVsLCBvblRocmVzaG9sZHNDaGFuZ2UsIHRocmVzaG9sZHMgfSkgPT4ge1xuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZTxQYW5lbE9wdGlvbnM+KHtcbiAgICBmcmFtZUluZGV4OiAwLFxuICAgIHNob3dIZWFkZXI6IHRydWUsXG4gIH0pO1xuICBjb25zdCB2aXpIZWlnaHQgPSB1c2VWaXpIZWlnaHQoZGF0YSwgY3VycmVudFBhbmVsLCBvcHRpb25zLmZyYW1lSW5kZXgpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyh2aXpIZWlnaHQpKTtcblxuICBjb25zdCBbZmllbGRDb25maWcsIHNldEZpZWxkQ29uZmlnXSA9IHVzZVN0YXRlPFBhbmVsRmllbGRDb25maWc+KGRlZmF1bHRGaWVsZENvbmZpZyh0aHJlc2hvbGRzLCBkYXRhKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGaWVsZENvbmZpZygoZmllbGRDb25maWcpID0+ICh7XG4gICAgICAuLi5maWVsZENvbmZpZyxcbiAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIC4uLmZpZWxkQ29uZmlnLmRlZmF1bHRzLFxuICAgICAgICB0aHJlc2hvbGRzOiB0aHJlc2hvbGRzLFxuICAgICAgICB1bml0OiBkZWZhdWx0VW5pdChkYXRhKSxcbiAgICAgICAgY3VzdG9tOiB7XG4gICAgICAgICAgLi4uZmllbGRDb25maWcuZGVmYXVsdHMuY3VzdG9tLFxuICAgICAgICAgIHRocmVzaG9sZHNTdHlsZToge1xuICAgICAgICAgICAgbW9kZTogR3JhcGhUcmVzaG9sZHNTdHlsZU1vZGUuTGluZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSk7XG4gIH0sIFt0aHJlc2hvbGRzLCBzZXRGaWVsZENvbmZpZywgZGF0YV0pO1xuXG4gIGNvbnN0IGNvbnRleHQ6IFBhbmVsQ29udGV4dCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gKHtcbiAgICAgIGV2ZW50QnVzOiBhcHBFdmVudHMsXG4gICAgICBjYW5FZGl0VGhyZXNob2xkczogdHJ1ZSxcbiAgICAgIG9uVGhyZXNob2xkc0NoYW5nZTogb25UaHJlc2hvbGRzQ2hhbmdlLFxuICAgIH0pLFxuICAgIFtvblRocmVzaG9sZHNDaGFuZ2VdXG4gICk7XG5cbiAgaWYgKCFvcHRpb25zIHx8ICFkYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cbiAgICAgICAgPFBhbmVsUGx1Z2luc0J1dHRvbkdyb3VwIG9uQ2hhbmdlPXtjaGFuZ2VQYW5lbH0gdmFsdWU9e2N1cnJlbnRQYW5lbH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEF1dG9TaXplcj5cbiAgICAgICAgeyh7IHdpZHRoIH0pID0+IHtcbiAgICAgICAgICBpZiAod2lkdGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IGAke3ZpekhlaWdodH1weGAsIHdpZHRoOiBgJHt3aWR0aH1weGAgfX0+XG4gICAgICAgICAgICAgIDxQYW5lbENvbnRleHRQcm92aWRlciB2YWx1ZT17Y29udGV4dH0+XG4gICAgICAgICAgICAgICAgPFBhbmVsUmVuZGVyZXJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17dml6SGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgIHBsdWdpbklkPXtjdXJyZW50UGFuZWx9XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgIG9uT3B0aW9uc0NoYW5nZT17c2V0T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgICAgICBmaWVsZENvbmZpZz17ZmllbGRDb25maWd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9QYW5lbENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0F1dG9TaXplcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh2aXNIZWlnaHQ6IG51bWJlcikgPT4gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgcGFkZGluZzogMCAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGhlaWdodDogJHt2aXNIZWlnaHQgKyB0aGVtZS5zcGFjaW5nLmdyaWRTaXplICogNH1weDtcbiAgYCxcbiAgYnV0dG9uR3JvdXA6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGAsXG59KTtcblxuZnVuY3Rpb24gZGVmYXVsdFVuaXQoZGF0YTogUGFuZWxEYXRhKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGRhdGEuc2VyaWVzWzBdPy5maWVsZHMuZmluZCgoZmllbGQpID0+IGZpZWxkLnR5cGUgPT09ICdudW1iZXInKT8uY29uZmlnLnVuaXQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRGaWVsZENvbmZpZyh0aHJlc2hvbGRzOiBUaHJlc2hvbGRzQ29uZmlnLCBkYXRhOiBQYW5lbERhdGEpOiBQYW5lbEZpZWxkQ29uZmlnIHtcbiAgaWYgKCF0aHJlc2hvbGRzKSB7XG4gICAgcmV0dXJuIHsgZGVmYXVsdHM6IHt9LCBvdmVycmlkZXM6IFtdIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRlZmF1bHRzOiB7XG4gICAgICB0aHJlc2hvbGRzOiB0aHJlc2hvbGRzLFxuICAgICAgdW5pdDogZGVmYXVsdFVuaXQoZGF0YSksXG4gICAgICBjdXN0b206IHtcbiAgICAgICAgdGhyZXNob2xkc1N0eWxlOiB7XG4gICAgICAgICAgbW9kZTogR3JhcGhUcmVzaG9sZHNTdHlsZU1vZGUuTGluZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvdmVycmlkZXM6IFtdLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm1Db250ZXh0IH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsIEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZpZWxkLCBJbnB1dENvbnRyb2wsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSwgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuaW1wb3J0IHsgQ2xvdWRSdWxlc1NvdXJjZVBpY2tlciB9IGZyb20gJy4uL0Nsb3VkUnVsZXNTb3VyY2VQaWNrZXInO1xuaW1wb3J0IHsgUnVsZVR5cGVQaWNrZXIgfSBmcm9tICcuLi9ydWxlLXR5cGVzL1J1bGVUeXBlUGlja2VyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZWRpdGluZ0V4aXN0aW5nUnVsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IEFsZXJ0VHlwZTogRkM8UHJvcHM+ID0gKHsgZWRpdGluZ0V4aXN0aW5nUnVsZSB9KSA9PiB7XG4gIGNvbnN0IHsgZW5hYmxlZFJ1bGVUeXBlcywgZGVmYXVsdFJ1bGVUeXBlIH0gPSBnZXRBdmFpbGFibGVSdWxlVHlwZXMoKTtcblxuICBjb25zdCB7XG4gICAgY29udHJvbCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gICAgZ2V0VmFsdWVzLFxuICAgIHNldFZhbHVlLFxuICAgIHdhdGNoLFxuICB9ID0gdXNlRm9ybUNvbnRleHQ8UnVsZUZvcm1WYWx1ZXMgJiB7IGxvY2F0aW9uPzogc3RyaW5nIH0+KCk7XG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBydWxlRm9ybVR5cGUgPSB3YXRjaCgndHlwZScpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHshZWRpdGluZ0V4aXN0aW5nUnVsZSAmJiAoXG4gICAgICAgIDxGaWVsZCBlcnJvcj17ZXJyb3JzLnR5cGU/Lm1lc3NhZ2V9IGludmFsaWQ9eyEhZXJyb3JzLnR5cGU/Lm1lc3NhZ2V9IGRhdGEtdGVzdGlkPVwiYWxlcnQtdHlwZS1waWNrZXJcIj5cbiAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkOiB7IG9uQ2hhbmdlIH0gfSkgPT4gKFxuICAgICAgICAgICAgICA8UnVsZVR5cGVQaWNrZXJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUnVsZSB0eXBlXCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17Z2V0VmFsdWVzKCd0eXBlJykgPz8gZGVmYXVsdFJ1bGVUeXBlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBlbmFibGVkVHlwZXM9e2VuYWJsZWRSdWxlVHlwZXN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB7IHZhbHVlOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIHNlbGVjdCBhbGVydCB0eXBlJyB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZpZWxkPlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgICAgeyhydWxlRm9ybVR5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZyB8fCBydWxlRm9ybVR5cGUgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZEFsZXJ0aW5nKSAmJiAoXG4gICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSW5wdXR9XG4gICAgICAgICAgICBsYWJlbD1cIlNlbGVjdCBkYXRhIHNvdXJjZVwiXG4gICAgICAgICAgICBlcnJvcj17ZXJyb3JzLmRhdGFTb3VyY2VOYW1lPy5tZXNzYWdlfVxuICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMuZGF0YVNvdXJjZU5hbWU/Lm1lc3NhZ2V9XG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cImRhdGFzb3VyY2UtcGlja2VyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRDb250cm9sXG4gICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgb25DaGFuZ2UsIHJlZiwgLi4uZmllbGQgfSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPENsb3VkUnVsZXNTb3VyY2VQaWNrZXJcbiAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZHM6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0IGxvY2F0aW9uIGlmIHN3aXRjaGluZyBkYXRhIHNvdXJjZXMsIGFzIGRpZmZlcmVudCBydWxlcyBzb3VyY2Ugd2lsbCBoYXZlIGRpZmZlcmVudCBncm91cHMgYW5kIG5hbWVzcGFjZXNcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoJ2xvY2F0aW9uJywgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoZHM/Lm5hbWUgPz8gbnVsbCk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIG5hbWU9XCJkYXRhU291cmNlTmFtZVwiXG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdmFsdWU6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IGEgZGF0YSBzb3VyY2UnIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGdldEF2YWlsYWJsZVJ1bGVUeXBlcygpIHtcbiAgY29uc3QgY2FuQ3JlYXRlR3JhZmFuYVJ1bGVzID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWxlcnRpbmdSdWxlQ3JlYXRlKTtcbiAgY29uc3QgY2FuQ3JlYXRlQ2xvdWRSdWxlcyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFsZXJ0aW5nUnVsZUV4dGVybmFsV3JpdGUpO1xuICBjb25zdCBkZWZhdWx0UnVsZVR5cGUgPSBjYW5DcmVhdGVHcmFmYW5hUnVsZXMgPyBSdWxlRm9ybVR5cGUuZ3JhZmFuYSA6IFJ1bGVGb3JtVHlwZS5jbG91ZEFsZXJ0aW5nO1xuXG4gIGNvbnN0IGVuYWJsZWRSdWxlVHlwZXM6IFJ1bGVGb3JtVHlwZVtdID0gW107XG4gIGlmIChjYW5DcmVhdGVHcmFmYW5hUnVsZXMpIHtcbiAgICBlbmFibGVkUnVsZVR5cGVzLnB1c2goUnVsZUZvcm1UeXBlLmdyYWZhbmEpO1xuICB9XG4gIGlmIChjYW5DcmVhdGVDbG91ZFJ1bGVzKSB7XG4gICAgZW5hYmxlZFJ1bGVUeXBlcy5wdXNoKFJ1bGVGb3JtVHlwZS5jbG91ZEFsZXJ0aW5nLCBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmcpO1xuICB9XG5cbiAgcmV0dXJuIHsgZW5hYmxlZFJ1bGVUeXBlcywgZGVmYXVsdFJ1bGVUeXBlIH07XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZm9ybUlucHV0OiBjc3NgXG4gICAgd2lkdGg6IDMzMHB4O1xuICAgICYgKyAmIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgIH1cbiAgYCxcbiAgZmxleFJvdzogY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IEZpZWxkLCBJbnB1dENvbnRyb2wgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSwgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuaW1wb3J0IHsgRXhwcmVzc2lvbkVkaXRvciB9IGZyb20gJy4uL0V4cHJlc3Npb25FZGl0b3InO1xuaW1wb3J0IHsgUXVlcnlFZGl0b3IgfSBmcm9tICcuLi9RdWVyeUVkaXRvcic7XG5cbmV4cG9ydCBjb25zdCBRdWVyeTogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb250cm9sLFxuICAgIHdhdGNoLFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm1Db250ZXh0PFJ1bGVGb3JtVmFsdWVzPigpO1xuXG4gIGNvbnN0IHR5cGUgPSB3YXRjaCgndHlwZScpO1xuICBjb25zdCBkYXRhU291cmNlTmFtZSA9IHdhdGNoKCdkYXRhU291cmNlTmFtZScpO1xuXG4gIGNvbnN0IGlzR3JhZmFuYU1hbmFnZWRUeXBlID0gdHlwZSA9PT0gUnVsZUZvcm1UeXBlLmdyYWZhbmE7XG4gIGNvbnN0IGlzQ2xvdWRBbGVydFJ1bGVUeXBlID0gdHlwZSA9PT0gUnVsZUZvcm1UeXBlLmNsb3VkQWxlcnRpbmc7XG4gIGNvbnN0IGlzUmVjb3JkaW5nUnVsZVR5cGUgPSB0eXBlID09PSBSdWxlRm9ybVR5cGUuY2xvdWRSZWNvcmRpbmc7XG5cbiAgY29uc3Qgc2hvd0Nsb3VkRXhwcmVzc2lvbkVkaXRvciA9IChpc1JlY29yZGluZ1J1bGVUeXBlIHx8IGlzQ2xvdWRBbGVydFJ1bGVUeXBlKSAmJiBkYXRhU291cmNlTmFtZTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7LyogVGhpcyBpcyB0aGUgUHJvbVFMIEVkaXRvciBmb3IgQ2xvdWQgcnVsZXMgYW5kIHJlY29yZGluZyBydWxlcyAqL31cbiAgICAgIHtzaG93Q2xvdWRFeHByZXNzaW9uRWRpdG9yICYmIChcbiAgICAgICAgPEZpZWxkIGVycm9yPXtlcnJvcnMuZXhwcmVzc2lvbj8ubWVzc2FnZX0gaW52YWxpZD17ISFlcnJvcnMuZXhwcmVzc2lvbj8ubWVzc2FnZX0+XG4gICAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgICAgbmFtZT1cImV4cHJlc3Npb25cIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyByZWYsIC4uLmZpZWxkIH0gfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPEV4cHJlc3Npb25FZGl0b3Igey4uLmZpZWxkfSBkYXRhU291cmNlTmFtZT17ZGF0YVNvdXJjZU5hbWV9IC8+O1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICBydWxlcz17e1xuICAgICAgICAgICAgICByZXF1aXJlZDogeyB2YWx1ZTogdHJ1ZSwgbWVzc2FnZTogJ0EgdmFsaWQgZXhwcmVzc2lvbiBpcyByZXF1aXJlZCcgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GaWVsZD5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBUaGlzIGlzIHRoZSBlZGl0b3IgZm9yIEdyYWZhbmEgbWFuYWdlZCBydWxlcyAqL31cbiAgICAgIHtpc0dyYWZhbmFNYW5hZ2VkVHlwZSAmJiAoXG4gICAgICAgIDxGaWVsZFxuICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLnF1ZXJpZXN9XG4gICAgICAgICAgZXJyb3I9eyghIWVycm9ycy5xdWVyaWVzICYmICdNdXN0IHByb3ZpZGUgYXQgbGVhc3Qgb25lIHZhbGlkIHF1ZXJ5LicpIHx8IHVuZGVmaW5lZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICAgIG5hbWU9XCJxdWVyaWVzXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IDxRdWVyeUVkaXRvciB7Li4uZmllbGR9IC8+fVxuICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICAgIHZhbGlkYXRlOiAocXVlcmllcykgPT4gQXJyYXkuaXNBcnJheShxdWVyaWVzKSAmJiAhIXF1ZXJpZXMubGVuZ3RoLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZpZWxkPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSwgUnVsZUZvcm1WYWx1ZXMgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuaW1wb3J0IHsgQ29uZGl0aW9uRmllbGQgfSBmcm9tICcuLi9Db25kaXRpb25GaWVsZCc7XG5pbXBvcnQgeyBSdWxlRWRpdG9yU2VjdGlvbiB9IGZyb20gJy4uL1J1bGVFZGl0b3JTZWN0aW9uJztcblxuaW1wb3J0IHsgQWxlcnRUeXBlIH0gZnJvbSAnLi9BbGVydFR5cGUnO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICcuL1F1ZXJ5JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZWRpdGluZ0V4aXN0aW5nUnVsZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QW5kQWxlcnRDb25kaXRpb25TdGVwOiBGQzxQcm9wcz4gPSAoeyBlZGl0aW5nRXhpc3RpbmdSdWxlIH0pID0+IHtcbiAgY29uc3QgeyB3YXRjaCB9ID0gdXNlRm9ybUNvbnRleHQ8UnVsZUZvcm1WYWx1ZXM+KCk7XG5cbiAgY29uc3QgdHlwZSA9IHdhdGNoKCd0eXBlJyk7XG4gIGNvbnN0IGlzR3JhZmFuYU1hbmFnZWRUeXBlID0gdHlwZSA9PT0gUnVsZUZvcm1UeXBlLmdyYWZhbmE7XG5cbiAgcmV0dXJuIChcbiAgICA8UnVsZUVkaXRvclNlY3Rpb24gc3RlcE5vPXsxfSB0aXRsZT1cIlNldCBhIHF1ZXJ5IGFuZCBhbGVydCBjb25kaXRpb25cIj5cbiAgICAgIDxBbGVydFR5cGUgZWRpdGluZ0V4aXN0aW5nUnVsZT17ZWRpdGluZ0V4aXN0aW5nUnVsZX0gLz5cbiAgICAgIHt0eXBlICYmIDxRdWVyeSAvPn1cbiAgICAgIHtpc0dyYWZhbmFNYW5hZ2VkVHlwZSAmJiA8Q29uZGl0aW9uRmllbGQgLz59XG4gICAgPC9SdWxlRWRpdG9yU2VjdGlvbj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHZpc2libGU6IGJvb2xlYW47XG59O1xuXG5jb25zdCBEaXNhYmxlZFRvb2x0aXA6IEZDPFByb3BzPiA9ICh7IGNoaWxkcmVuLCB2aXNpYmxlID0gZmFsc2UgfSkgPT4ge1xuICBpZiAoIXZpc2libGUpIHtcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VG9vbHRpcCBjb250ZW50PVwiWW91IGRvIG5vdCBhcHBlYXIgdG8gaGF2ZSBhbnkgY29tcGF0aWJsZSBkYXRhc291cmNlcy5cIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cbiAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxuICAgIDwvVG9vbHRpcD5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IERpc2FibGVkVG9vbHRpcCB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuXG5pbXBvcnQgeyBSdWxlVHlwZSwgU2hhcmVkUHJvcHMgfSBmcm9tICcuL1J1bGVUeXBlJztcblxuY29uc3QgR3JhZmFuYU1hbmFnZWRSdWxlVHlwZTogRkM8U2hhcmVkUHJvcHM+ID0gKHsgc2VsZWN0ZWQgPSBmYWxzZSwgZGlzYWJsZWQsIG9uQ2xpY2sgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSdWxlVHlwZVxuICAgICAgbmFtZT1cIkdyYWZhbmEgbWFuYWdlZCBhbGVydFwiXG4gICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIFN1cHBvcnRzIG11bHRpcGxlIGRhdGEgc291cmNlcyBvZiBhbnkga2luZC5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBUcmFuc2Zvcm0gZGF0YSB3aXRoIGV4cHJlc3Npb25zLlxuICAgICAgICA8L3NwYW4+XG4gICAgICB9XG4gICAgICBpbWFnZT1cIi9wdWJsaWMvaW1nL2dyYWZhbmFfaWNvbi5zdmdcIlxuICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgdmFsdWU9e1J1bGVGb3JtVHlwZS5ncmFmYW5hfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IHsgR3JhZmFuYU1hbmFnZWRSdWxlVHlwZSB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuXG5pbXBvcnQgeyBEaXNhYmxlZFRvb2x0aXAgfSBmcm9tICcuL0Rpc2FibGVkVG9vbHRpcCc7XG5pbXBvcnQgeyBSdWxlVHlwZSwgU2hhcmVkUHJvcHMgfSBmcm9tICcuL1J1bGVUeXBlJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgU2hhcmVkUHJvcHMge1xuICBvbkNsaWNrOiAodmFsdWU6IFJ1bGVGb3JtVHlwZSkgPT4gdm9pZDtcbn1cblxuY29uc3QgTWltaXJGbGF2b3JlZFR5cGU6IEZDPFByb3BzPiA9ICh7IHNlbGVjdGVkID0gZmFsc2UsIGRpc2FibGVkID0gZmFsc2UsIG9uQ2xpY2sgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxEaXNhYmxlZFRvb2x0aXAgdmlzaWJsZT17ZGlzYWJsZWR9PlxuICAgICAgPFJ1bGVUeXBlXG4gICAgICAgIG5hbWU9XCJNaW1pciBvciBMb2tpIGFsZXJ0XCJcbiAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgVXNlIGEgTWltaXIsIExva2kgb3IgQ29ydGV4IGRhdGFzb3VyY2UuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEV4cHJlc3Npb25zIGFyZSBub3Qgc3VwcG9ydGVkLlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgfVxuICAgICAgICBpbWFnZT1cIi9wdWJsaWMvaW1nL2FsZXJ0aW5nL21pbWlyX2xvZ28uc3ZnXCJcbiAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHZhbHVlPXtSdWxlRm9ybVR5cGUuY2xvdWRBbGVydGluZ31cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIC8+XG4gICAgPC9EaXNhYmxlZFRvb2x0aXA+XG4gICk7XG59O1xuXG5leHBvcnQgeyBNaW1pckZsYXZvcmVkVHlwZSB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9ydWxlLWZvcm0nO1xuXG5pbXBvcnQgeyBEaXNhYmxlZFRvb2x0aXAgfSBmcm9tICcuL0Rpc2FibGVkVG9vbHRpcCc7XG5pbXBvcnQgeyBSdWxlVHlwZSwgU2hhcmVkUHJvcHMgfSBmcm9tICcuL1J1bGVUeXBlJztcblxuY29uc3QgUmVjb3JkaW5nUnVsZVR5cGU6IEZDPFNoYXJlZFByb3BzPiA9ICh7IHNlbGVjdGVkID0gZmFsc2UsIGRpc2FibGVkID0gZmFsc2UsIG9uQ2xpY2sgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxEaXNhYmxlZFRvb2x0aXAgdmlzaWJsZT17ZGlzYWJsZWR9PlxuICAgICAgPFJ1bGVUeXBlXG4gICAgICAgIG5hbWU9XCJNaW1pciBvciBMb2tpIHJlY29yZGluZyBydWxlXCJcbiAgICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgUHJlY29tcHV0ZSBleHByZXNzaW9ucy5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgU2hvdWxkIGJlIGNvbWJpbmVkIHdpdGggYW4gYWxlcnQgcnVsZS5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIH1cbiAgICAgICAgaW1hZ2U9XCIvcHVibGljL2ltZy9hbGVydGluZy9taW1pcl9sb2dvX3JlY29yZGluZy5zdmdcIlxuICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgdmFsdWU9e1J1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZ31cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIC8+XG4gICAgPC9EaXNhYmxlZFRvb2x0aXA+XG4gICk7XG59O1xuXG5leHBvcnQgeyBSZWNvcmRpbmdSdWxlVHlwZSB9O1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQ2FyZCwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgUnVsZUZvcm1UeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvcnVsZS1mb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgU2hhcmVkUHJvcHMge1xuICBpbWFnZTogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBSZWFjdE5vZGU7XG4gIHZhbHVlOiBSdWxlRm9ybVR5cGU7XG59XG5cbi8vIHRoZXNlIHByb3BlcnRpZXMgYXJlIHNoYXJlZCBiZXR3ZWVuIGFsbCBSdWxlIFR5cGVzXG5leHBvcnQgaW50ZXJmYWNlIFNoYXJlZFByb3BzIHtcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s6ICh2YWx1ZTogUnVsZUZvcm1UeXBlKSA9PiB2b2lkO1xufVxuXG5jb25zdCBSdWxlVHlwZTogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIGltYWdlLCBzZWxlY3RlZCA9IGZhbHNlLCB2YWx1ZSwgb25DbGljaywgZGlzYWJsZWQgPSBmYWxzZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBjYXJkU3R5bGVzID0gY3goe1xuICAgIFtzdHlsZXMud3JhcHBlcl06IHRydWUsXG4gICAgW3N0eWxlcy5kaXNhYmxlZF06IGRpc2FibGVkLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2FyZFN0eWxlc30gaXNTZWxlY3RlZD17c2VsZWN0ZWR9IG9uQ2xpY2s9eygpID0+IG9uQ2xpY2sodmFsdWUpfSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgPENhcmQuRmlndXJlPlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IC8+XG4gICAgICA8L0NhcmQuRmlndXJlPlxuICAgICAgPENhcmQuSGVhZGluZz57bmFtZX08L0NhcmQuSGVhZGluZz5cbiAgICAgIDxDYXJkLkRlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgd2lkdGg6IDM4MHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYCxcbiAgZGlzYWJsZWQ6IGNzc2BcbiAgICBvcGFjaXR5OiAwLjU7XG4gIGAsXG59KTtcblxuZXhwb3J0IHsgUnVsZVR5cGUgfTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEvc3JjJztcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnQGdyYWZhbmEvZXhwZXJpbWVudGFsJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IHVzZVJ1bGVzU291cmNlc1dpdGhSdWxlciB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVJ1bGVTb3VyY2VzV2l0aFJ1bGVyJztcbmltcG9ydCB7IFJ1bGVGb3JtVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3J1bGUtZm9ybSc7XG5cbmltcG9ydCB7IEdyYWZhbmFNYW5hZ2VkUnVsZVR5cGUgfSBmcm9tICcuL0dyYWZhbmFNYW5hZ2VkQWxlcnQnO1xuaW1wb3J0IHsgTWltaXJGbGF2b3JlZFR5cGUgfSBmcm9tICcuL01pbWlyT3JMb2tpQWxlcnQnO1xuaW1wb3J0IHsgUmVjb3JkaW5nUnVsZVR5cGUgfSBmcm9tICcuL01pbWlyT3JMb2tpUmVjb3JkaW5nUnVsZSc7XG5cbmludGVyZmFjZSBSdWxlVHlwZVBpY2tlclByb3BzIHtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogUnVsZUZvcm1UeXBlKSA9PiB2b2lkO1xuICBzZWxlY3RlZDogUnVsZUZvcm1UeXBlO1xuICBlbmFibGVkVHlwZXM6IFJ1bGVGb3JtVHlwZVtdO1xufVxuXG5jb25zdCBSdWxlVHlwZVBpY2tlcjogRkM8UnVsZVR5cGVQaWNrZXJQcm9wcz4gPSAoeyBzZWxlY3RlZCwgb25DaGFuZ2UsIGVuYWJsZWRUeXBlcyB9KSA9PiB7XG4gIGNvbnN0IHJ1bGVzU291cmNlc1dpdGhSdWxlciA9IHVzZVJ1bGVzU291cmNlc1dpdGhSdWxlcigpO1xuICBjb25zdCBoYXNMb3RleERhdGFzb3VyY2VzID0gIWlzRW1wdHkocnVsZXNTb3VyY2VzV2l0aFJ1bGVyKTtcblxuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFN0YWNrIGRpcmVjdGlvbj1cInJvd1wiIGdhcD17Mn0+XG4gICAgICAgIHtlbmFibGVkVHlwZXMuaW5jbHVkZXMoUnVsZUZvcm1UeXBlLmdyYWZhbmEpICYmIChcbiAgICAgICAgICA8R3JhZmFuYU1hbmFnZWRSdWxlVHlwZSBzZWxlY3RlZD17c2VsZWN0ZWQgPT09IFJ1bGVGb3JtVHlwZS5ncmFmYW5hfSBvbkNsaWNrPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgKX1cbiAgICAgICAge2VuYWJsZWRUeXBlcy5pbmNsdWRlcyhSdWxlRm9ybVR5cGUuY2xvdWRBbGVydGluZykgJiYgKFxuICAgICAgICAgIDxNaW1pckZsYXZvcmVkVHlwZVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkID09PSBSdWxlRm9ybVR5cGUuY2xvdWRBbGVydGluZ31cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2hhbmdlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNMb3RleERhdGFzb3VyY2VzfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtlbmFibGVkVHlwZXMuaW5jbHVkZXMoUnVsZUZvcm1UeXBlLmNsb3VkUmVjb3JkaW5nKSAmJiAoXG4gICAgICAgICAgPFJlY29yZGluZ1J1bGVUeXBlXG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWQgPT09IFJ1bGVGb3JtVHlwZS5jbG91ZFJlY29yZGluZ31cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2hhbmdlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFoYXNMb3RleERhdGFzb3VyY2VzfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L1N0YWNrPlxuICAgICAge2VuYWJsZWRUeXBlcy5pbmNsdWRlcyhSdWxlRm9ybVR5cGUuZ3JhZmFuYSkgJiYgKFxuICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtzdHlsZXMubWV0YX0+XG4gICAgICAgICAgU2VsZWN0ICZsZHF1bztHcmFmYW5hIG1hbmFnZWQmcmRxdW87IHVubGVzcyB5b3UgaGF2ZSBhIE1pbWlyLCBMb2tpIG9yIENvcnRleCBkYXRhIHNvdXJjZSB3aXRoIHRoZSBSdWxlciBBUElcbiAgICAgICAgICBlbmFibGVkLlxuICAgICAgICA8L3NtYWxsPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgbWV0YTogY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LmRpc2FibGVkfTtcbiAgYCxcbn0pO1xuXG5leHBvcnQgeyBSdWxlVHlwZVBpY2tlciB9O1xuIiwiaW1wb3J0IHsgVmFsaWRhdGVSZXN1bHQgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBpc0V4cHJlc3Npb25RdWVyeSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9leHByZXNzaW9ucy9ndWFyZHMnO1xuaW1wb3J0IHsgQWxlcnRRdWVyeSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyaWVzV2l0aFVwZGF0ZWRSZWZlcmVuY2VzKFxuICBxdWVyaWVzOiBBbGVydFF1ZXJ5W10sXG4gIHByZXZpb3VzUmVmSWQ6IHN0cmluZyxcbiAgbmV3UmVmSWQ6IHN0cmluZ1xuKTogQWxlcnRRdWVyeVtdIHtcbiAgcmV0dXJuIHF1ZXJpZXMubWFwKChxdWVyeSkgPT4ge1xuICAgIGlmIChwcmV2aW91c1JlZklkID09PSBuZXdSZWZJZCkge1xuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cblxuICAgIGlmICghaXNFeHByZXNzaW9uUXVlcnkocXVlcnkubW9kZWwpKSB7XG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfVxuXG4gICAgY29uc3QgaXNNYXRoRXhwcmVzc2lvbiA9IHF1ZXJ5Lm1vZGVsLnR5cGUgPT09ICdtYXRoJztcbiAgICBjb25zdCBpc1JlZHVjZUV4cHJlc3Npb24gPSBxdWVyeS5tb2RlbC50eXBlID09PSAncmVkdWNlJztcbiAgICBjb25zdCBpc1Jlc2FtcGxlRXhwcmVzc2lvbiA9IHF1ZXJ5Lm1vZGVsLnR5cGUgPT09ICdyZXNhbXBsZSc7XG4gICAgY29uc3QgaXNDbGFzc2ljRXhwcmVzc2lvbiA9IHF1ZXJ5Lm1vZGVsLnR5cGUgPT09ICdjbGFzc2ljX2NvbmRpdGlvbnMnO1xuXG4gICAgaWYgKGlzTWF0aEV4cHJlc3Npb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIC4uLnF1ZXJ5Lm1vZGVsLFxuICAgICAgICAgIGV4cHJlc3Npb246IHVwZGF0ZU1hdGhFeHByZXNzaW9uUmVmcyhxdWVyeS5tb2RlbC5leHByZXNzaW9uID8/ICcnLCBwcmV2aW91c1JlZklkLCBuZXdSZWZJZCksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpc1Jlc2FtcGxlRXhwcmVzc2lvbiB8fCBpc1JlZHVjZUV4cHJlc3Npb24pIHtcbiAgICAgIGNvbnN0IGlzUmVmZXJlbmNpbmcgPSBxdWVyeS5tb2RlbC5leHByZXNzaW9uID09PSBwcmV2aW91c1JlZklkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAuLi5xdWVyeS5tb2RlbCxcbiAgICAgICAgICBleHByZXNzaW9uOiBpc1JlZmVyZW5jaW5nID8gbmV3UmVmSWQgOiBxdWVyeS5tb2RlbC5leHByZXNzaW9uLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaXNDbGFzc2ljRXhwcmVzc2lvbikge1xuICAgICAgY29uc3QgY29uZGl0aW9ucyA9IHF1ZXJ5Lm1vZGVsLmNvbmRpdGlvbnM/Lm1hcCgoY29uZGl0aW9uKSA9PiAoe1xuICAgICAgICAuLi5jb25kaXRpb24sXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgLi4uY29uZGl0aW9uLnF1ZXJ5LFxuICAgICAgICAgIHBhcmFtczogY29uZGl0aW9uLnF1ZXJ5LnBhcmFtcy5tYXAoKHBhcmFtOiBzdHJpbmcpID0+IChwYXJhbSA9PT0gcHJldmlvdXNSZWZJZCA/IG5ld1JlZklkIDogcGFyYW0pKSxcbiAgICAgICAgfSxcbiAgICAgIH0pKTtcblxuICAgICAgcmV0dXJuIHsgLi4ucXVlcnksIG1vZGVsOiB7IC4uLnF1ZXJ5Lm1vZGVsLCBjb25kaXRpb25zIH0gfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTWF0aEV4cHJlc3Npb25SZWZzKGV4cHJlc3Npb246IHN0cmluZywgcHJldmlvdXNSZWZJZDogc3RyaW5nLCBuZXdSZWZJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgb2xkRXhwcmVzc2lvbiA9IG5ldyBSZWdFeHAoJyhcXFxcJCcgKyBwcmV2aW91c1JlZklkICsgJ1xcXFxiKXwoXFxcXCR7JyArIHByZXZpb3VzUmVmSWQgKyAnfSknLCAnZ20nKTtcbiAgY29uc3QgbmV3RXhwcmVzc2lvbiA9ICckeycgKyBuZXdSZWZJZCArICd9JztcblxuICByZXR1cm4gZXhwcmVzc2lvbi5yZXBsYWNlKG9sZEV4cHJlc3Npb24sIG5ld0V4cHJlc3Npb24pO1xufVxuXG4vLyBzb21lIGdhdGV3YXlzIChsaWtlIElzdGlvKSB3aWxsIGRlY29kZSBcIi9cIiBhbmQgXCJcXFwiIGNoYXJhY3RlcnMg4oCTIHRoaXMgd2lsbCBjYXVzZSA0MDQgZXJyb3JzIGZvciBhbnkgQVBJIGNhbGxcbi8vIHRoYXQgaW5jbHVkZXMgdGhlc2UgdmFsdWVzIGluIHRoZSBVUkwgKGllLiAvbXkvcGF0aCUyZnRvL3Jlc291cmNlIC0+IC9teS9wYXRoL3RvL3Jlc291cmNlKVxuLy9cbi8vIHNlZSBodHRwczovL2lzdGlvLmlvL2xhdGVzdC9kb2NzL29wcy9iZXN0LXByYWN0aWNlcy9zZWN1cml0eS8jY3VzdG9taXplLXlvdXItc3lzdGVtLW9uLXBhdGgtbm9ybWFsaXphdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRm9yUGF0aFNlcGFyYXRvcih2YWx1ZTogc3RyaW5nKTogVmFsaWRhdGVSZXN1bHQge1xuICBjb25zdCBjb250YWluc1BhdGhTZXBhcmF0b3IgPSB2YWx1ZS5pbmNsdWRlcygnLycpIHx8IHZhbHVlLmluY2x1ZGVzKCdcXFxcJyk7XG4gIGlmIChjb250YWluc1BhdGhTZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gJ0Nhbm5vdCBjb250YWluIFwiL1wiIG9yIFwiXFxcXFwiIGNoYXJhY3RlcnMnO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBnZXREYXRhU291cmNlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBBbGVydFF1ZXJ5IH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsZXJ0UXVlcmllc1N0YXR1cyhxdWVyaWVzOiBBbGVydFF1ZXJ5W10pIHtcbiAgY29uc3QgYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUgPSB1c2VNZW1vKFxuICAgICgpID0+IHF1ZXJpZXMuZXZlcnkoKHF1ZXJ5KSA9PiBCb29sZWFuKGdldERhdGFTb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKHF1ZXJ5LmRhdGFzb3VyY2VVaWQpKSksXG4gICAgW3F1ZXJpZXNdXG4gICk7XG5cbiAgcmV0dXJuIHsgYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUgfTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBGb2xkZXJEVE8gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBmZXRjaEZvbGRlcklmTm90RmV0Y2hlZEFjdGlvbiB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvcmVkdXgnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgUmV0dXJuQmFnIHtcbiAgZm9sZGVyPzogRm9sZGVyRFRPO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9sZGVyKHVpZD86IHN0cmluZyk6IFJldHVybkJhZyB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgZm9sZGVyUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZvbGRlcnMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1aWQpIHtcbiAgICAgIGRpc3BhdGNoKGZldGNoRm9sZGVySWZOb3RGZXRjaGVkQWN0aW9uKHVpZCkpO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoLCB1aWRdKTtcblxuICBpZiAodWlkKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGZvbGRlclJlcXVlc3RzW3VpZF0gfHwgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlO1xuICAgIHJldHVybiB7XG4gICAgICBmb2xkZXI6IHJlcXVlc3QucmVzdWx0LFxuICAgICAgbG9hZGluZzogcmVxdWVzdC5sb2FkaW5nLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBSdWxlclJ1bGVEVE8gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBnZXRSdWxlc1Blcm1pc3Npb25zIH0gZnJvbSAnLi4vdXRpbHMvYWNjZXNzLWNvbnRyb2wnO1xuaW1wb3J0IHsgaXNHcmFmYW5hUnVsZXJSdWxlIH0gZnJvbSAnLi4vdXRpbHMvcnVsZXMnO1xuXG5pbXBvcnQgeyB1c2VGb2xkZXIgfSBmcm9tICcuL3VzZUZvbGRlcic7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgUmVzdWx0QmFnIHtcbiAgaXNFZGl0YWJsZT86IGJvb2xlYW47XG4gIGlzUmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzUnVsZUVkaXRhYmxlKHJ1bGVzU291cmNlTmFtZTogc3RyaW5nLCBydWxlPzogUnVsZXJSdWxlRFRPKTogUmVzdWx0QmFnIHtcbiAgY29uc3QgZGF0YVNvdXJjZXMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzKTtcbiAgY29uc3QgZm9sZGVyVUlEID0gcnVsZSAmJiBpc0dyYWZhbmFSdWxlclJ1bGUocnVsZSkgPyBydWxlLmdyYWZhbmFfYWxlcnQubmFtZXNwYWNlX3VpZCA6IHVuZGVmaW5lZDtcblxuICBjb25zdCBydWxlUGVybWlzc2lvbiA9IGdldFJ1bGVzUGVybWlzc2lvbnMocnVsZXNTb3VyY2VOYW1lKTtcbiAgY29uc3QgaGFzRWRpdFBlcm1pc3Npb24gPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhydWxlUGVybWlzc2lvbi51cGRhdGUsIGNvbnRleHRTcnYuaXNFZGl0b3IpO1xuICBjb25zdCBoYXNSZW1vdmVQZXJtaXNzaW9uID0gY29udGV4dFNydi5oYXNBY2Nlc3MocnVsZVBlcm1pc3Npb24uZGVsZXRlLCBjb250ZXh0U3J2LmlzRWRpdG9yKTtcblxuICBjb25zdCB7IGZvbGRlciwgbG9hZGluZyB9ID0gdXNlRm9sZGVyKGZvbGRlclVJRCk7XG5cbiAgaWYgKCFydWxlKSB7XG4gICAgcmV0dXJuIHsgaXNFZGl0YWJsZTogZmFsc2UsIGlzUmVtb3ZhYmxlOiBmYWxzZSwgbG9hZGluZzogZmFsc2UgfTtcbiAgfVxuXG4gIC8vIGdyYWZhbmEgcnVsZXMgY2FuIGJlIGVkaXRlZCBpZiB1c2VyIGNhbiBlZGl0IHRoZSBmb2xkZXIgdGhleSdyZSBpblxuICBpZiAoaXNHcmFmYW5hUnVsZXJSdWxlKHJ1bGUpKSB7XG4gICAgaWYgKCFmb2xkZXJVSUQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFJ1bGUgJHtydWxlLmdyYWZhbmFfYWxlcnQudGl0bGV9IGRvZXMgbm90IGhhdmUgYSBmb2xkZXIgdWlkLCBjYW5ub3QgZGV0ZXJtaW5lIGlmIGl0IGlzIGVkaXRhYmxlLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpc0VkaXRhYmxlOiBoYXNFZGl0UGVybWlzc2lvbiAmJiBmb2xkZXI/LmNhblNhdmUsXG4gICAgICBpc1JlbW92YWJsZTogaGFzUmVtb3ZlUGVybWlzc2lvbiAmJiBmb2xkZXI/LmNhblNhdmUsXG4gICAgICBsb2FkaW5nLFxuICAgIH07XG4gIH1cblxuICAvLyBwcm9tIHJ1bGVzIGFyZSBvbmx5IGVkaXRhYmxlIGJ5IHVzZXJzIHdpdGggRWRpdG9yIHJvbGUgYW5kIG9ubHkgaWYgcnVsZXMgc291cmNlIHN1cHBvcnRzIGVkaXRpbmdcbiAgY29uc3QgaXNSdWxlckF2YWlsYWJsZSA9IEJvb2xlYW4oZGF0YVNvdXJjZXNbcnVsZXNTb3VyY2VOYW1lXT8ucmVzdWx0Py5ydWxlckNvbmZpZyk7XG4gIHJldHVybiB7XG4gICAgaXNFZGl0YWJsZTogaGFzRWRpdFBlcm1pc3Npb24gJiYgaXNSdWxlckF2YWlsYWJsZSxcbiAgICBpc1JlbW92YWJsZTogaGFzUmVtb3ZlUGVybWlzc2lvbiAmJiBpc1J1bGVyQXZhaWxhYmxlLFxuICAgIGxvYWRpbmc6IGRhdGFTb3VyY2VzW3J1bGVzU291cmNlTmFtZV0/LmxvYWRpbmcsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUHJvbUJhc2VkRGF0YVNvdXJjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZUJ5TmFtZSB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUnVsZXNTb3VyY2VzV2l0aFJ1bGVyKCk6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzW10ge1xuICBjb25zdCBkYXRhU291cmNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZGF0YVNvdXJjZXMpO1xuXG4gIGNvbnN0IGRhdGFTb3VyY2VzV2l0aFJ1bGVyID0gT2JqZWN0LnZhbHVlcyhkYXRhU291cmNlcylcbiAgICAubWFwKChkcykgPT4gZHMucmVzdWx0KVxuICAgIC5maWx0ZXIoKGRzKTogZHMgaXMgUHJvbUJhc2VkRGF0YVNvdXJjZSA9PiBCb29sZWFuKGRzPy5ydWxlckNvbmZpZykpO1xuICAvLyB0cnkgZmV0Y2hpbmcgcnVsZXMgZm9yIGVhY2ggcHJvbWV0aGV1cyB0byBzZWUgaWYgaXQgaGFzIHJ1bGVyXG5cbiAgcmV0dXJuIGRhdGFTb3VyY2VzV2l0aFJ1bGVyXG4gICAgLm1hcCgoZHMpID0+IGdldERhdGFTb3VyY2VCeU5hbWUoZHMubmFtZSkpXG4gICAgLmZpbHRlcigoZHNDb25maWcpOiBkc0NvbmZpZyBpcyBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyA9PiBCb29sZWFuKGRzQ29uZmlnKSk7XG59XG4iLCJpbXBvcnQgeyBQYW5lbERhdGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgU1RBVCwgVElNRVNFUklFUyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VWaXpIZWlnaHQoZGF0YTogUGFuZWxEYXRhLCBwbHVnaW5JZDogc3RyaW5nLCBmcmFtZUluZGV4OiBudW1iZXIpIHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZTIoKTtcbiAgaWYgKHBsdWdpbklkID09PSBUSU1FU0VSSUVTIHx8IHBsdWdpbklkID09PSBTVEFUIHx8IGRhdGFJc0VtcHR5KGRhdGEpKSB7XG4gICAgcmV0dXJuIDIwMDtcbiAgfVxuXG4gIGNvbnN0IHZhbHVlcyA9IGRhdGEuc2VyaWVzW2ZyYW1lSW5kZXhdLmZpZWxkc1swXS52YWx1ZXMubGVuZ3RoO1xuICBjb25zdCByb3dIZWlnaHQgPSB0aGVtZS5zcGFjaW5nLmdyaWRTaXplICogNTtcblxuICAvKlxuICAgQ2FsY3VsYXRlIGhvdyBpZiB3ZSBjYW4gbWFrZSAgdGhlIHRhYmxlIHNtYWxsZXIgdGhhbiAyMDBweFxuICAgZm9yIHdoZW4gd2Ugb25seSBoYXZlIDEtMiB2YWx1ZXNcbiAgIFRoZSBleHRyYSByb3dIZWlnaHQgaXMgdG8gYWNjb21tb2RhdGUgdGhlIGhlYWRlci5cbiAgKi9cbiAgY29uc3QgdGFibGVIZWlnaHQgPSB2YWx1ZXMgKiByb3dIZWlnaHQgKyByb3dIZWlnaHQ7XG5cbiAgcmV0dXJuIHRhYmxlSGVpZ2h0ID49IDIwMCA/IDIwMCA6IHRhYmxlSGVpZ2h0O1xufVxuXG5mdW5jdGlvbiBkYXRhSXNFbXB0eShkYXRhOiBQYW5lbERhdGEpIHtcbiAgcmV0dXJuICFkYXRhIHx8ICFkYXRhLnNlcmllc1swXSB8fCAhZGF0YS5zZXJpZXNbMF0uZmllbGRzWzBdIHx8ICFkYXRhLnNlcmllc1swXS5maWVsZHNbMF0udmFsdWVzO1xufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIE9wZXJhdG9yRnVuY3Rpb24sIFJlcGxheVN1YmplY3QsIFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmltcG9ydCB7XG4gIGRhdGFGcmFtZUZyb21KU09OLFxuICBEYXRhRnJhbWVKU09OLFxuICBnZXREZWZhdWx0VGltZVJhbmdlLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgcmFuZ2VVdGlsLFxuICBUaW1lUmFuZ2UsXG4gIHdpdGhMb2FkaW5nSW5kaWNhdG9yLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZldGNoUmVzcG9uc2UsIGdldERhdGFTb3VyY2VTcnYsIHRvRGF0YVF1ZXJ5RXJyb3IgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJhY2tlbmRTcnYsIGdldEJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBpc0V4cHJlc3Npb25RdWVyeSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9leHByZXNzaW9ucy9ndWFyZHMnO1xuaW1wb3J0IHsgY2FuY2VsTmV0d29ya1JlcXVlc3RzT25VbnN1YnNjcmliZSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9xdWVyeS9zdGF0ZS9wcm9jZXNzaW5nL2NhbmNlbGVyJztcbmltcG9ydCB7IHNldFN0cnVjdHVyZVJldmlzaW9uIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3F1ZXJ5L3N0YXRlL3Byb2Nlc3NpbmcvcmV2aXNpb24nO1xuaW1wb3J0IHsgcHJlUHJvY2Vzc1BhbmVsRGF0YSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9xdWVyeS9zdGF0ZS9ydW5SZXF1ZXN0JztcbmltcG9ydCB7IEFsZXJ0UXVlcnkgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBnZXRUaW1lUmFuZ2VGb3JFeHByZXNzaW9uIH0gZnJvbSAnLi4vdXRpbHMvdGltZVJhbmdlJztcblxuZXhwb3J0IGludGVyZmFjZSBBbGVydGluZ1F1ZXJ5UmVzdWx0IHtcbiAgZnJhbWVzOiBEYXRhRnJhbWVKU09OW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRpbmdRdWVyeVJlc3BvbnNlIHtcbiAgcmVzdWx0czogUmVjb3JkPHN0cmluZywgQWxlcnRpbmdRdWVyeVJlc3VsdD47XG59XG5leHBvcnQgY2xhc3MgQWxlcnRpbmdRdWVyeVJ1bm5lciB7XG4gIHByaXZhdGUgc3ViamVjdDogUmVwbGF5U3ViamVjdDxSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+PjtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24/OiBVbnN1YnNjcmliYWJsZTtcbiAgcHJpdmF0ZSBsYXN0UmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2VuZFNydiA9IGdldEJhY2tlbmRTcnYoKSwgcHJpdmF0ZSBkYXRhU291cmNlU3J2ID0gZ2V0RGF0YVNvdXJjZVNydigpKSB7XG4gICAgdGhpcy5zdWJqZWN0ID0gbmV3IFJlcGxheVN1YmplY3QoMSk7XG4gICAgdGhpcy5sYXN0UmVzdWx0ID0ge307XG4gIH1cblxuICBnZXQoKTogT2JzZXJ2YWJsZTxSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+PiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGFzeW5jIHJ1bihxdWVyaWVzOiBBbGVydFF1ZXJ5W10pIHtcbiAgICBpZiAocXVlcmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGVtcHR5ID0gaW5pdGlhbFN0YXRlKHF1ZXJpZXMsIExvYWRpbmdTdGF0ZS5Eb25lKTtcbiAgICAgIHJldHVybiB0aGlzLnN1YmplY3QubmV4dChlbXB0eSk7XG4gICAgfVxuXG4gICAgLy8gZG8gbm90IGV4ZWN1dGUgaWYgb25lIG1vcmUgb2YgdGhlIHF1ZXJpZXMgYXJlIG5vdCBydW5uYWJsZSxcbiAgICAvLyBmb3IgZXhhbXBsZSBub3QgY29tcGxldGVseSBjb25maWd1cmVkXG4gICAgZm9yIChjb25zdCBxdWVyeSBvZiBxdWVyaWVzKSB7XG4gICAgICBpZiAoIWlzRXhwcmVzc2lvblF1ZXJ5KHF1ZXJ5Lm1vZGVsKSkge1xuICAgICAgICBjb25zdCBkcyA9IGF3YWl0IHRoaXMuZGF0YVNvdXJjZVNydi5nZXQocXVlcnkuZGF0YXNvdXJjZVVpZCk7XG4gICAgICAgIGlmIChkcy5maWx0ZXJRdWVyeSAmJiAhZHMuZmlsdGVyUXVlcnkocXVlcnkubW9kZWwpKSB7XG4gICAgICAgICAgY29uc3QgZW1wdHkgPSBpbml0aWFsU3RhdGUocXVlcmllcywgTG9hZGluZ1N0YXRlLkRvbmUpO1xuICAgICAgICAgIHJldHVybiB0aGlzLnN1YmplY3QubmV4dChlbXB0eSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHJ1blJlcXVlc3QodGhpcy5iYWNrZW5kU3J2LCBxdWVyaWVzKS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKGRhdGFQZXJRdWVyeSkgPT4ge1xuICAgICAgICBjb25zdCBuZXh0UmVzdWx0ID0gYXBwbHlDaGFuZ2UoZGF0YVBlclF1ZXJ5LCAocmVmSWQsIGRhdGEpID0+IHtcbiAgICAgICAgICBjb25zdCBwcmV2aW91cyA9IHRoaXMubGFzdFJlc3VsdFtyZWZJZF07XG4gICAgICAgICAgY29uc3QgcHJlUHJvY2Vzc2VkID0gcHJlUHJvY2Vzc1BhbmVsRGF0YShkYXRhLCBwcmV2aW91cyk7XG4gICAgICAgICAgcmV0dXJuIHNldFN0cnVjdHVyZVJldmlzaW9uKHByZVByb2Nlc3NlZCwgcHJldmlvdXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxhc3RSZXN1bHQgPSBuZXh0UmVzdWx0O1xuICAgICAgICB0aGlzLnN1YmplY3QubmV4dCh0aGlzLmxhc3RSZXN1bHQpO1xuICAgICAgfSxcblxuICAgICAgZXJyb3I6IChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy5sYXN0UmVzdWx0ID0gbWFwRXJyb3JUb1BhbmVsRGF0YSh0aGlzLmxhc3RSZXN1bHQsIGVycm9yKTtcbiAgICAgICAgdGhpcy5zdWJqZWN0Lm5leHQodGhpcy5sYXN0UmVzdWx0KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgaWYgKCF0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXG4gICAgbGV0IHJlcXVlc3RJc1J1bm5pbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5leHRSZXN1bHQgPSBhcHBseUNoYW5nZSh0aGlzLmxhc3RSZXN1bHQsIChyZWZJZCwgZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEuc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Mb2FkaW5nKSB7XG4gICAgICAgIHJlcXVlc3RJc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5kYXRhLFxuICAgICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkRvbmUsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgaWYgKHJlcXVlc3RJc1J1bm5pbmcpIHtcbiAgICAgIHRoaXMuc3ViamVjdC5uZXh0KG5leHRSZXN1bHQpO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3ViamVjdCkge1xuICAgICAgdGhpcy5zdWJqZWN0LmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgfVxufVxuXG5jb25zdCBydW5SZXF1ZXN0ID0gKGJhY2tlbmRTcnY6IEJhY2tlbmRTcnYsIHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSk6IE9ic2VydmFibGU8UmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPj4gPT4ge1xuICBjb25zdCBpbml0aWFsID0gaW5pdGlhbFN0YXRlKHF1ZXJpZXMsIExvYWRpbmdTdGF0ZS5Mb2FkaW5nKTtcbiAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICBkYXRhOiB7IGRhdGE6IHF1ZXJpZXMgfSxcbiAgICB1cmw6ICcvYXBpL3YxL2V2YWwnLFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIHJlcXVlc3RJZDogdXVpZHY0KCksXG4gIH07XG5cbiAgcmV0dXJuIHdpdGhMb2FkaW5nSW5kaWNhdG9yKHtcbiAgICB3aGlsZUxvYWRpbmc6IGluaXRpYWwsXG4gICAgc291cmNlOiBiYWNrZW5kU3J2LmZldGNoPEFsZXJ0aW5nUXVlcnlSZXNwb25zZT4ocmVxdWVzdCkucGlwZShcbiAgICAgIG1hcFRvUGFuZWxEYXRhKGluaXRpYWwpLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+IG9mKG1hcEVycm9yVG9QYW5lbERhdGEoaW5pdGlhbCwgZXJyb3IpKSksXG4gICAgICBjYW5jZWxOZXR3b3JrUmVxdWVzdHNPblVuc3Vic2NyaWJlKGJhY2tlbmRTcnYsIHJlcXVlc3QucmVxdWVzdElkKSxcbiAgICAgIHNoYXJlKClcbiAgICApLFxuICB9KTtcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IChxdWVyaWVzOiBBbGVydFF1ZXJ5W10sIHN0YXRlOiBMb2FkaW5nU3RhdGUpOiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+ID0+IHtcbiAgcmV0dXJuIHF1ZXJpZXMucmVkdWNlKChkYXRhQnlRdWVyeTogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPiwgcXVlcnkpID0+IHtcbiAgICBkYXRhQnlRdWVyeVtxdWVyeS5yZWZJZF0gPSB7XG4gICAgICBzdGF0ZSxcbiAgICAgIHNlcmllczogW10sXG4gICAgICB0aW1lUmFuZ2U6IGdldFRpbWVSYW5nZShxdWVyeSwgcXVlcmllcyksXG4gICAgfTtcblxuICAgIHJldHVybiBkYXRhQnlRdWVyeTtcbiAgfSwge30pO1xufTtcblxuY29uc3QgZ2V0VGltZVJhbmdlID0gKHF1ZXJ5OiBBbGVydFF1ZXJ5LCBxdWVyaWVzOiBBbGVydFF1ZXJ5W10pOiBUaW1lUmFuZ2UgPT4ge1xuICBpZiAoaXNFeHByZXNzaW9uUXVlcnkocXVlcnkubW9kZWwpKSB7XG4gICAgY29uc3QgcmVsYXRpdmUgPSBnZXRUaW1lUmFuZ2VGb3JFeHByZXNzaW9uKHF1ZXJ5Lm1vZGVsLCBxdWVyaWVzKTtcbiAgICByZXR1cm4gcmFuZ2VVdGlsLnJlbGF0aXZlVG9UaW1lUmFuZ2UocmVsYXRpdmUpO1xuICB9XG5cbiAgaWYgKCFxdWVyeS5yZWxhdGl2ZVRpbWVSYW5nZSkge1xuICAgIGNvbnNvbGUud2FybihgUXVlcnkgd2l0aCByZWZJZDogJHtxdWVyeS5yZWZJZH0gZGlkIG5vdCBoYXZlIGFueSByZWxhdGl2ZSB0aW1lIHJhbmdlLCB1c2luZyBkZWZhdWx0LmApO1xuICAgIHJldHVybiBnZXREZWZhdWx0VGltZVJhbmdlKCk7XG4gIH1cblxuICByZXR1cm4gcmFuZ2VVdGlsLnJlbGF0aXZlVG9UaW1lUmFuZ2UocXVlcnkucmVsYXRpdmVUaW1lUmFuZ2UpO1xufTtcblxuY29uc3QgbWFwVG9QYW5lbERhdGEgPSAoXG4gIGRhdGFCeVF1ZXJ5OiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+XG4pOiBPcGVyYXRvckZ1bmN0aW9uPEZldGNoUmVzcG9uc2U8QWxlcnRpbmdRdWVyeVJlc3BvbnNlPiwgUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPj4gPT4ge1xuICByZXR1cm4gbWFwKChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgcmVzdWx0czogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPiA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBbcmVmSWQsIHJlc3VsdF0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YS5yZXN1bHRzKSkge1xuICAgICAgcmVzdWx0c1tyZWZJZF0gPSB7XG4gICAgICAgIHRpbWVSYW5nZTogZGF0YUJ5UXVlcnlbcmVmSWRdLnRpbWVSYW5nZSxcbiAgICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgICAgICBzZXJpZXM6IHJlc3VsdC5mcmFtZXMubWFwKGRhdGFGcmFtZUZyb21KU09OKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0pO1xufTtcblxuY29uc3QgbWFwRXJyb3JUb1BhbmVsRGF0YSA9IChsYXN0UmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+LCBlcnJvcjogRXJyb3IpOiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+ID0+IHtcbiAgY29uc3QgcXVlcnlFcnJvciA9IHRvRGF0YVF1ZXJ5RXJyb3IoZXJyb3IpO1xuXG4gIHJldHVybiBhcHBseUNoYW5nZShsYXN0UmVzdWx0LCAocmVmSWQsIGRhdGEpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGF0YSxcbiAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRXJyb3IsXG4gICAgICBlcnJvcjogcXVlcnlFcnJvcixcbiAgICB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGFwcGx5Q2hhbmdlID0gKFxuICBpbml0aWFsOiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+LFxuICBjaGFuZ2U6IChyZWZJZDogc3RyaW5nLCBkYXRhOiBQYW5lbERhdGEpID0+IFBhbmVsRGF0YVxuKTogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPiA9PiB7XG4gIGNvbnN0IG5leHRSZXN1bHQ6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4gPSB7fTtcblxuICBmb3IgKGNvbnN0IFtyZWZJZCwgZGF0YV0gb2YgT2JqZWN0LmVudHJpZXMoaW5pdGlhbCkpIHtcbiAgICBuZXh0UmVzdWx0W3JlZklkXSA9IGNoYW5nZShyZWZJZCwgZGF0YSk7XG4gIH1cblxuICByZXR1cm4gbmV4dFJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBQYW5lbERhdGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0UXVlcnkgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBSdWxlRm9ybVR5cGUgfSBmcm9tICcuL3J1bGUtZm9ybSc7XG5cbmV4cG9ydCB0eXBlIFByZXZpZXdSdWxlUmVxdWVzdCA9IEdyYWZhbmFQcmV2aWV3UnVsZVJlcXVlc3QgfCBDbG91ZFByZXZpZXdSdWxlUmVxdWVzdDtcblxuZXhwb3J0IHR5cGUgR3JhZmFuYVByZXZpZXdSdWxlUmVxdWVzdCA9IHtcbiAgZ3JhZmFuYV9jb25kaXRpb246IHtcbiAgICBjb25kaXRpb246IHN0cmluZztcbiAgICBkYXRhOiBBbGVydFF1ZXJ5W107XG4gICAgbm93OiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSBDbG91ZFByZXZpZXdSdWxlUmVxdWVzdCA9IHtcbiAgZGF0YVNvdXJjZU5hbWU6IHN0cmluZztcbiAgZXhwcjogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgUHJldmlld1J1bGVSZXNwb25zZSA9IHtcbiAgcnVsZVR5cGU6IFJ1bGVGb3JtVHlwZTtcbiAgZGF0YTogUGFuZWxEYXRhO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2xvdWRQcmV2aWV3UmVxdWVzdChyZXF1ZXN0OiBQcmV2aWV3UnVsZVJlcXVlc3QpOiByZXF1ZXN0IGlzIENsb3VkUHJldmlld1J1bGVSZXF1ZXN0IHtcbiAgcmV0dXJuICdleHByJyBpbiByZXF1ZXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNHcmFmYW5hUHJldmlld1JlcXVlc3QocmVxdWVzdDogUHJldmlld1J1bGVSZXF1ZXN0KTogcmVxdWVzdCBpcyBHcmFmYW5hUHJldmlld1J1bGVSZXF1ZXN0IHtcbiAgcmV0dXJuICdncmFmYW5hX2NvbmRpdGlvbicgaW4gcmVxdWVzdDtcbn1cbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGdldFJ1bGVzQWNjZXNzIH0gZnJvbSAnLi9hY2Nlc3MtY29udHJvbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSdWxlc0FjY2VzcygpIHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gZ2V0UnVsZXNBY2Nlc3MoKSwgW10pO1xufVxuIiwiaW1wb3J0IHsgUmVsYXRpdmVUaW1lUmFuZ2UgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0UXVlcnkgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBFeHByZXNzaW9uUXVlcnksIEV4cHJlc3Npb25RdWVyeVR5cGUgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzaW9ucy90eXBlcyc7XG5cbmNvbnN0IEZBTExfQkFDS19USU1FX1JBTkdFID0geyBmcm9tOiAyMTYwMCwgdG86IDAgfTtcblxuZXhwb3J0IGNvbnN0IGdldFRpbWVSYW5nZUZvckV4cHJlc3Npb24gPSAocXVlcnk6IEV4cHJlc3Npb25RdWVyeSwgcXVlcmllczogQWxlcnRRdWVyeVtdKTogUmVsYXRpdmVUaW1lUmFuZ2UgPT4ge1xuICBjb25zdCByZWZlcmVuY2VkUmVmSWRzOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9IGdldFJlZmVyZW5jZWRJZHMocXVlcnksIHF1ZXJpZXMpO1xuXG4gIGlmICghcmVmZXJlbmNlZFJlZklkcykge1xuICAgIHJldHVybiBGQUxMX0JBQ0tfVElNRV9SQU5HRTtcbiAgfVxuXG4gIGNvbnN0IHsgZnJvbSwgdG8gfSA9IGdldFRpbWVSYW5nZXMocmVmZXJlbmNlZFJlZklkcywgcXVlcmllcyk7XG5cbiAgaWYgKCFmcm9tLmxlbmd0aCAmJiAhdG8ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIEZBTExfQkFDS19USU1FX1JBTkdFO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmcm9tOiBNYXRoLm1heCguLi5mcm9tKSxcbiAgICB0bzogTWF0aC5taW4oLi4udG8pLFxuICB9O1xufTtcblxuY29uc3QgZ2V0UmVmZXJlbmNlZElkcyA9IChtb2RlbDogRXhwcmVzc2lvblF1ZXJ5LCBxdWVyaWVzOiBBbGVydFF1ZXJ5W10pOiBzdHJpbmdbXSB8IHVuZGVmaW5lZCA9PiB7XG4gIHN3aXRjaCAobW9kZWwudHlwZSkge1xuICAgIGNhc2UgRXhwcmVzc2lvblF1ZXJ5VHlwZS5jbGFzc2ljOlxuICAgICAgcmV0dXJuIGdldFJlZmVyZW5jZWRJZHNGb3JDbGFzc2ljQ29uZGl0aW9uKG1vZGVsKTtcbiAgICBjYXNlIEV4cHJlc3Npb25RdWVyeVR5cGUubWF0aDpcbiAgICAgIHJldHVybiBnZXRSZWZlcmVuY2VkSWRzRm9yTWF0aChtb2RlbCwgcXVlcmllcyk7XG4gICAgY2FzZSBFeHByZXNzaW9uUXVlcnlUeXBlLnJlc2FtcGxlOlxuICAgIGNhc2UgRXhwcmVzc2lvblF1ZXJ5VHlwZS5yZWR1Y2U6XG4gICAgICByZXR1cm4gZ2V0UmVmZXJlbmNlZElkc0ZvclJlZHVjZShtb2RlbCk7XG4gIH1cbn07XG5cbmNvbnN0IGdldFJlZmVyZW5jZWRJZHNGb3JDbGFzc2ljQ29uZGl0aW9uID0gKG1vZGVsOiBFeHByZXNzaW9uUXVlcnkpID0+IHtcbiAgcmV0dXJuIG1vZGVsLmNvbmRpdGlvbnM/Lm1hcCgoY29uZGl0aW9uKSA9PiB7XG4gICAgcmV0dXJuIGNvbmRpdGlvbi5xdWVyeS5wYXJhbXNbMF07XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0VGltZVJhbmdlcyA9IChyZWZlcmVuY2VkUmVmSWRzOiBzdHJpbmdbXSwgcXVlcmllczogQWxlcnRRdWVyeVtdKSA9PiB7XG4gIGxldCBmcm9tOiBudW1iZXJbXSA9IFtdO1xuICBsZXQgdG8gPSBbRkFMTF9CQUNLX1RJTUVfUkFOR0UudG9dO1xuICBmb3IgKGNvbnN0IHJlZmVyZW5jZWRSZWZJZHNLZXkgb2YgcmVmZXJlbmNlZFJlZklkcykge1xuICAgIGNvbnN0IHF1ZXJ5ID0gcXVlcmllcy5maW5kKChxdWVyeSkgPT4gcXVlcnkucmVmSWQgPT09IHJlZmVyZW5jZWRSZWZJZHNLZXkpO1xuXG4gICAgaWYgKCFxdWVyeSB8fCAhcXVlcnkucmVsYXRpdmVUaW1lUmFuZ2UpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBmcm9tLnB1c2gocXVlcnkucmVsYXRpdmVUaW1lUmFuZ2UuZnJvbSk7XG4gICAgdG8ucHVzaChxdWVyeS5yZWxhdGl2ZVRpbWVSYW5nZS50byk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZyb20sXG4gICAgdG8sXG4gIH07XG59O1xuXG5jb25zdCBnZXRSZWZlcmVuY2VkSWRzRm9yTWF0aCA9IChtb2RlbDogRXhwcmVzc2lvblF1ZXJ5LCBxdWVyaWVzOiBBbGVydFF1ZXJ5W10pID0+IHtcbiAgcmV0dXJuIChcbiAgICBxdWVyaWVzXG4gICAgICAvLyBmaWx0ZXIgcXVlcmllcyBvZiB0eXBlIHF1ZXJ5IGFuZCBmaWx0ZXIgZXhwcmVzc2lvbiBvbiBpZiBpdCBpbmNsdWRlcyBhbnkgcmVmSWRzXG4gICAgICAuZmlsdGVyKChxKSA9PiBxLnF1ZXJ5VHlwZSA9PT0gJ3F1ZXJ5JyAmJiBtb2RlbC5leHByZXNzaW9uPy5pbmNsdWRlcyhxLnJlZklkKSlcbiAgICAgIC5tYXAoKHEpID0+IHtcbiAgICAgICAgcmV0dXJuIHEucmVmSWQ7XG4gICAgICB9KVxuICApO1xufTtcblxuY29uc3QgZ2V0UmVmZXJlbmNlZElkc0ZvclJlZHVjZSA9IChtb2RlbDogRXhwcmVzc2lvblF1ZXJ5KSA9PiB7XG4gIHJldHVybiBtb2RlbC5leHByZXNzaW9uID8gW21vZGVsLmV4cHJlc3Npb25dIDogdW5kZWZpbmVkO1xufTtcbiIsImltcG9ydCB7IERhdGFRdWVyeSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgaXNFeHByZXNzaW9uUmVmZXJlbmNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMvdXRpbHMvRGF0YVNvdXJjZVdpdGhCYWNrZW5kJztcblxuaW1wb3J0IHsgRXhwcmVzc2lvblF1ZXJ5LCBFeHByZXNzaW9uUXVlcnlUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBpc0V4cHJlc3Npb25RdWVyeSA9IChkYXRhUXVlcnk/OiBEYXRhUXVlcnkpOiBkYXRhUXVlcnkgaXMgRXhwcmVzc2lvblF1ZXJ5ID0+IHtcbiAgaWYgKCFkYXRhUXVlcnkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNFeHByZXNzaW9uUmVmZXJlbmNlKGRhdGFRdWVyeS5kYXRhc291cmNlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29uc3QgZXhwcmVzc2lvbiA9IGRhdGFRdWVyeSBhcyBFeHByZXNzaW9uUXVlcnk7XG5cbiAgaWYgKHR5cGVvZiBleHByZXNzaW9uLnR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBPYmplY3QudmFsdWVzKEV4cHJlc3Npb25RdWVyeVR5cGUpLmluY2x1ZGVzKGV4cHJlc3Npb24udHlwZSk7XG59O1xuIiwiXG4vKiEganMteWFtbCA0LjEuMCBodHRwczovL2dpdGh1Yi5jb20vbm9kZWNhL2pzLXlhbWwgQGxpY2Vuc2UgTUlUICovXG5mdW5jdGlvbiBpc05vdGhpbmcoc3ViamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBzdWJqZWN0ID09PSAndW5kZWZpbmVkJykgfHwgKHN1YmplY3QgPT09IG51bGwpO1xufVxuXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHN1YmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCcpICYmIChzdWJqZWN0ICE9PSBudWxsKTtcbn1cblxuXG5mdW5jdGlvbiB0b0FycmF5KHNlcXVlbmNlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHNlcXVlbmNlKSkgcmV0dXJuIHNlcXVlbmNlO1xuICBlbHNlIGlmIChpc05vdGhpbmcoc2VxdWVuY2UpKSByZXR1cm4gW107XG5cbiAgcmV0dXJuIFsgc2VxdWVuY2UgXTtcbn1cblxuXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0LCBzb3VyY2UpIHtcbiAgdmFyIGluZGV4LCBsZW5ndGgsIGtleSwgc291cmNlS2V5cztcblxuICBpZiAoc291cmNlKSB7XG4gICAgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gc291cmNlS2V5cy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICBrZXkgPSBzb3VyY2VLZXlzW2luZGV4XTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuXG5mdW5jdGlvbiByZXBlYXQoc3RyaW5nLCBjb3VudCkge1xuICB2YXIgcmVzdWx0ID0gJycsIGN5Y2xlO1xuXG4gIGZvciAoY3ljbGUgPSAwOyBjeWNsZSA8IGNvdW50OyBjeWNsZSArPSAxKSB7XG4gICAgcmVzdWx0ICs9IHN0cmluZztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuZnVuY3Rpb24gaXNOZWdhdGl2ZVplcm8obnVtYmVyKSB7XG4gIHJldHVybiAobnVtYmVyID09PSAwKSAmJiAoTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZID09PSAxIC8gbnVtYmVyKTtcbn1cblxuXG52YXIgaXNOb3RoaW5nXzEgICAgICA9IGlzTm90aGluZztcbnZhciBpc09iamVjdF8xICAgICAgID0gaXNPYmplY3Q7XG52YXIgdG9BcnJheV8xICAgICAgICA9IHRvQXJyYXk7XG52YXIgcmVwZWF0XzEgICAgICAgICA9IHJlcGVhdDtcbnZhciBpc05lZ2F0aXZlWmVyb18xID0gaXNOZWdhdGl2ZVplcm87XG52YXIgZXh0ZW5kXzEgICAgICAgICA9IGV4dGVuZDtcblxudmFyIGNvbW1vbiA9IHtcblx0aXNOb3RoaW5nOiBpc05vdGhpbmdfMSxcblx0aXNPYmplY3Q6IGlzT2JqZWN0XzEsXG5cdHRvQXJyYXk6IHRvQXJyYXlfMSxcblx0cmVwZWF0OiByZXBlYXRfMSxcblx0aXNOZWdhdGl2ZVplcm86IGlzTmVnYXRpdmVaZXJvXzEsXG5cdGV4dGVuZDogZXh0ZW5kXzFcbn07XG5cbi8vIFlBTUwgZXJyb3IgY2xhc3MuIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODQ1ODk4NFxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKGV4Y2VwdGlvbiwgY29tcGFjdCkge1xuICB2YXIgd2hlcmUgPSAnJywgbWVzc2FnZSA9IGV4Y2VwdGlvbi5yZWFzb24gfHwgJyh1bmtub3duIHJlYXNvbiknO1xuXG4gIGlmICghZXhjZXB0aW9uLm1hcmspIHJldHVybiBtZXNzYWdlO1xuXG4gIGlmIChleGNlcHRpb24ubWFyay5uYW1lKSB7XG4gICAgd2hlcmUgKz0gJ2luIFwiJyArIGV4Y2VwdGlvbi5tYXJrLm5hbWUgKyAnXCIgJztcbiAgfVxuXG4gIHdoZXJlICs9ICcoJyArIChleGNlcHRpb24ubWFyay5saW5lICsgMSkgKyAnOicgKyAoZXhjZXB0aW9uLm1hcmsuY29sdW1uICsgMSkgKyAnKSc7XG5cbiAgaWYgKCFjb21wYWN0ICYmIGV4Y2VwdGlvbi5tYXJrLnNuaXBwZXQpIHtcbiAgICB3aGVyZSArPSAnXFxuXFxuJyArIGV4Y2VwdGlvbi5tYXJrLnNuaXBwZXQ7XG4gIH1cblxuICByZXR1cm4gbWVzc2FnZSArICcgJyArIHdoZXJlO1xufVxuXG5cbmZ1bmN0aW9uIFlBTUxFeGNlcHRpb24kMShyZWFzb24sIG1hcmspIHtcbiAgLy8gU3VwZXIgY29uc3RydWN0b3JcbiAgRXJyb3IuY2FsbCh0aGlzKTtcblxuICB0aGlzLm5hbWUgPSAnWUFNTEV4Y2VwdGlvbic7XG4gIHRoaXMucmVhc29uID0gcmVhc29uO1xuICB0aGlzLm1hcmsgPSBtYXJrO1xuICB0aGlzLm1lc3NhZ2UgPSBmb3JtYXRFcnJvcih0aGlzLCBmYWxzZSk7XG5cbiAgLy8gSW5jbHVkZSBzdGFjayB0cmFjZSBpbiBlcnJvciBvYmplY3RcbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgLy8gQ2hyb21lIGFuZCBOb2RlSlNcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBGRiwgSUUgMTArIGFuZCBTYWZhcmkgNisuIEZhbGxiYWNrIGZvciBvdGhlcnNcbiAgICB0aGlzLnN0YWNrID0gKG5ldyBFcnJvcigpKS5zdGFjayB8fCAnJztcbiAgfVxufVxuXG5cbi8vIEluaGVyaXQgZnJvbSBFcnJvclxuWUFNTEV4Y2VwdGlvbiQxLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbllBTUxFeGNlcHRpb24kMS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBZQU1MRXhjZXB0aW9uJDE7XG5cblxuWUFNTEV4Y2VwdGlvbiQxLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKGNvbXBhY3QpIHtcbiAgcmV0dXJuIHRoaXMubmFtZSArICc6ICcgKyBmb3JtYXRFcnJvcih0aGlzLCBjb21wYWN0KTtcbn07XG5cblxudmFyIGV4Y2VwdGlvbiA9IFlBTUxFeGNlcHRpb24kMTtcblxuLy8gZ2V0IHNuaXBwZXQgZm9yIGEgc2luZ2xlIGxpbmUsIHJlc3BlY3RpbmcgbWF4TGVuZ3RoXG5mdW5jdGlvbiBnZXRMaW5lKGJ1ZmZlciwgbGluZVN0YXJ0LCBsaW5lRW5kLCBwb3NpdGlvbiwgbWF4TGluZUxlbmd0aCkge1xuICB2YXIgaGVhZCA9ICcnO1xuICB2YXIgdGFpbCA9ICcnO1xuICB2YXIgbWF4SGFsZkxlbmd0aCA9IE1hdGguZmxvb3IobWF4TGluZUxlbmd0aCAvIDIpIC0gMTtcblxuICBpZiAocG9zaXRpb24gLSBsaW5lU3RhcnQgPiBtYXhIYWxmTGVuZ3RoKSB7XG4gICAgaGVhZCA9ICcgLi4uICc7XG4gICAgbGluZVN0YXJ0ID0gcG9zaXRpb24gLSBtYXhIYWxmTGVuZ3RoICsgaGVhZC5sZW5ndGg7XG4gIH1cblxuICBpZiAobGluZUVuZCAtIHBvc2l0aW9uID4gbWF4SGFsZkxlbmd0aCkge1xuICAgIHRhaWwgPSAnIC4uLic7XG4gICAgbGluZUVuZCA9IHBvc2l0aW9uICsgbWF4SGFsZkxlbmd0aCAtIHRhaWwubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdHI6IGhlYWQgKyBidWZmZXIuc2xpY2UobGluZVN0YXJ0LCBsaW5lRW5kKS5yZXBsYWNlKC9cXHQvZywgJ+KGkicpICsgdGFpbCxcbiAgICBwb3M6IHBvc2l0aW9uIC0gbGluZVN0YXJ0ICsgaGVhZC5sZW5ndGggLy8gcmVsYXRpdmUgcG9zaXRpb25cbiAgfTtcbn1cblxuXG5mdW5jdGlvbiBwYWRTdGFydChzdHJpbmcsIG1heCkge1xuICByZXR1cm4gY29tbW9uLnJlcGVhdCgnICcsIG1heCAtIHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufVxuXG5cbmZ1bmN0aW9uIG1ha2VTbmlwcGV0KG1hcmssIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IE9iamVjdC5jcmVhdGUob3B0aW9ucyB8fCBudWxsKTtcblxuICBpZiAoIW1hcmsuYnVmZmVyKSByZXR1cm4gbnVsbDtcblxuICBpZiAoIW9wdGlvbnMubWF4TGVuZ3RoKSBvcHRpb25zLm1heExlbmd0aCA9IDc5O1xuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5kZW50ICAgICAgIT09ICdudW1iZXInKSBvcHRpb25zLmluZGVudCAgICAgID0gMTtcbiAgaWYgKHR5cGVvZiBvcHRpb25zLmxpbmVzQmVmb3JlICE9PSAnbnVtYmVyJykgb3B0aW9ucy5saW5lc0JlZm9yZSA9IDM7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5saW5lc0FmdGVyICAhPT0gJ251bWJlcicpIG9wdGlvbnMubGluZXNBZnRlciAgPSAyO1xuXG4gIHZhciByZSA9IC9cXHI/XFxufFxccnxcXDAvZztcbiAgdmFyIGxpbmVTdGFydHMgPSBbIDAgXTtcbiAgdmFyIGxpbmVFbmRzID0gW107XG4gIHZhciBtYXRjaDtcbiAgdmFyIGZvdW5kTGluZU5vID0gLTE7XG5cbiAgd2hpbGUgKChtYXRjaCA9IHJlLmV4ZWMobWFyay5idWZmZXIpKSkge1xuICAgIGxpbmVFbmRzLnB1c2gobWF0Y2guaW5kZXgpO1xuICAgIGxpbmVTdGFydHMucHVzaChtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCk7XG5cbiAgICBpZiAobWFyay5wb3NpdGlvbiA8PSBtYXRjaC5pbmRleCAmJiBmb3VuZExpbmVObyA8IDApIHtcbiAgICAgIGZvdW5kTGluZU5vID0gbGluZVN0YXJ0cy5sZW5ndGggLSAyO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmb3VuZExpbmVObyA8IDApIGZvdW5kTGluZU5vID0gbGluZVN0YXJ0cy5sZW5ndGggLSAxO1xuXG4gIHZhciByZXN1bHQgPSAnJywgaSwgbGluZTtcbiAgdmFyIGxpbmVOb0xlbmd0aCA9IE1hdGgubWluKG1hcmsubGluZSArIG9wdGlvbnMubGluZXNBZnRlciwgbGluZUVuZHMubGVuZ3RoKS50b1N0cmluZygpLmxlbmd0aDtcbiAgdmFyIG1heExpbmVMZW5ndGggPSBvcHRpb25zLm1heExlbmd0aCAtIChvcHRpb25zLmluZGVudCArIGxpbmVOb0xlbmd0aCArIDMpO1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gb3B0aW9ucy5saW5lc0JlZm9yZTsgaSsrKSB7XG4gICAgaWYgKGZvdW5kTGluZU5vIC0gaSA8IDApIGJyZWFrO1xuICAgIGxpbmUgPSBnZXRMaW5lKFxuICAgICAgbWFyay5idWZmZXIsXG4gICAgICBsaW5lU3RhcnRzW2ZvdW5kTGluZU5vIC0gaV0sXG4gICAgICBsaW5lRW5kc1tmb3VuZExpbmVObyAtIGldLFxuICAgICAgbWFyay5wb3NpdGlvbiAtIChsaW5lU3RhcnRzW2ZvdW5kTGluZU5vXSAtIGxpbmVTdGFydHNbZm91bmRMaW5lTm8gLSBpXSksXG4gICAgICBtYXhMaW5lTGVuZ3RoXG4gICAgKTtcbiAgICByZXN1bHQgPSBjb21tb24ucmVwZWF0KCcgJywgb3B0aW9ucy5pbmRlbnQpICsgcGFkU3RhcnQoKG1hcmsubGluZSAtIGkgKyAxKS50b1N0cmluZygpLCBsaW5lTm9MZW5ndGgpICtcbiAgICAgICcgfCAnICsgbGluZS5zdHIgKyAnXFxuJyArIHJlc3VsdDtcbiAgfVxuXG4gIGxpbmUgPSBnZXRMaW5lKG1hcmsuYnVmZmVyLCBsaW5lU3RhcnRzW2ZvdW5kTGluZU5vXSwgbGluZUVuZHNbZm91bmRMaW5lTm9dLCBtYXJrLnBvc2l0aW9uLCBtYXhMaW5lTGVuZ3RoKTtcbiAgcmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJyAnLCBvcHRpb25zLmluZGVudCkgKyBwYWRTdGFydCgobWFyay5saW5lICsgMSkudG9TdHJpbmcoKSwgbGluZU5vTGVuZ3RoKSArXG4gICAgJyB8ICcgKyBsaW5lLnN0ciArICdcXG4nO1xuICByZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnLScsIG9wdGlvbnMuaW5kZW50ICsgbGluZU5vTGVuZ3RoICsgMyArIGxpbmUucG9zKSArICdeJyArICdcXG4nO1xuXG4gIGZvciAoaSA9IDE7IGkgPD0gb3B0aW9ucy5saW5lc0FmdGVyOyBpKyspIHtcbiAgICBpZiAoZm91bmRMaW5lTm8gKyBpID49IGxpbmVFbmRzLmxlbmd0aCkgYnJlYWs7XG4gICAgbGluZSA9IGdldExpbmUoXG4gICAgICBtYXJrLmJ1ZmZlcixcbiAgICAgIGxpbmVTdGFydHNbZm91bmRMaW5lTm8gKyBpXSxcbiAgICAgIGxpbmVFbmRzW2ZvdW5kTGluZU5vICsgaV0sXG4gICAgICBtYXJrLnBvc2l0aW9uIC0gKGxpbmVTdGFydHNbZm91bmRMaW5lTm9dIC0gbGluZVN0YXJ0c1tmb3VuZExpbmVObyArIGldKSxcbiAgICAgIG1heExpbmVMZW5ndGhcbiAgICApO1xuICAgIHJlc3VsdCArPSBjb21tb24ucmVwZWF0KCcgJywgb3B0aW9ucy5pbmRlbnQpICsgcGFkU3RhcnQoKG1hcmsubGluZSArIGkgKyAxKS50b1N0cmluZygpLCBsaW5lTm9MZW5ndGgpICtcbiAgICAgICcgfCAnICsgbGluZS5zdHIgKyAnXFxuJztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQucmVwbGFjZSgvXFxuJC8sICcnKTtcbn1cblxuXG52YXIgc25pcHBldCA9IG1ha2VTbmlwcGV0O1xuXG52YXIgVFlQRV9DT05TVFJVQ1RPUl9PUFRJT05TID0gW1xuICAna2luZCcsXG4gICdtdWx0aScsXG4gICdyZXNvbHZlJyxcbiAgJ2NvbnN0cnVjdCcsXG4gICdpbnN0YW5jZU9mJyxcbiAgJ3ByZWRpY2F0ZScsXG4gICdyZXByZXNlbnQnLFxuICAncmVwcmVzZW50TmFtZScsXG4gICdkZWZhdWx0U3R5bGUnLFxuICAnc3R5bGVBbGlhc2VzJ1xuXTtcblxudmFyIFlBTUxfTk9ERV9LSU5EUyA9IFtcbiAgJ3NjYWxhcicsXG4gICdzZXF1ZW5jZScsXG4gICdtYXBwaW5nJ1xuXTtcblxuZnVuY3Rpb24gY29tcGlsZVN0eWxlQWxpYXNlcyhtYXApIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIGlmIChtYXAgIT09IG51bGwpIHtcbiAgICBPYmplY3Qua2V5cyhtYXApLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICBtYXBbc3R5bGVdLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgICAgIHJlc3VsdFtTdHJpbmcoYWxpYXMpXSA9IHN0eWxlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBUeXBlJDEodGFnLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoVFlQRV9DT05TVFJVQ1RPUl9PUFRJT05TLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgZXhjZXB0aW9uKCdVbmtub3duIG9wdGlvbiBcIicgKyBuYW1lICsgJ1wiIGlzIG1ldCBpbiBkZWZpbml0aW9uIG9mIFwiJyArIHRhZyArICdcIiBZQU1MIHR5cGUuJyk7XG4gICAgfVxuICB9KTtcblxuICAvLyBUT0RPOiBBZGQgdGFnIGZvcm1hdCBjaGVjay5cbiAgdGhpcy5vcHRpb25zICAgICAgID0gb3B0aW9uczsgLy8ga2VlcCBvcmlnaW5hbCBvcHRpb25zIGluIGNhc2UgdXNlciB3YW50cyB0byBleHRlbmQgdGhpcyB0eXBlIGxhdGVyXG4gIHRoaXMudGFnICAgICAgICAgICA9IHRhZztcbiAgdGhpcy5raW5kICAgICAgICAgID0gb3B0aW9uc1sna2luZCddICAgICAgICAgIHx8IG51bGw7XG4gIHRoaXMucmVzb2x2ZSAgICAgICA9IG9wdGlvbnNbJ3Jlc29sdmUnXSAgICAgICB8fCBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9O1xuICB0aGlzLmNvbnN0cnVjdCAgICAgPSBvcHRpb25zWydjb25zdHJ1Y3QnXSAgICAgfHwgZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIGRhdGE7IH07XG4gIHRoaXMuaW5zdGFuY2VPZiAgICA9IG9wdGlvbnNbJ2luc3RhbmNlT2YnXSAgICB8fCBudWxsO1xuICB0aGlzLnByZWRpY2F0ZSAgICAgPSBvcHRpb25zWydwcmVkaWNhdGUnXSAgICAgfHwgbnVsbDtcbiAgdGhpcy5yZXByZXNlbnQgICAgID0gb3B0aW9uc1sncmVwcmVzZW50J10gICAgIHx8IG51bGw7XG4gIHRoaXMucmVwcmVzZW50TmFtZSA9IG9wdGlvbnNbJ3JlcHJlc2VudE5hbWUnXSB8fCBudWxsO1xuICB0aGlzLmRlZmF1bHRTdHlsZSAgPSBvcHRpb25zWydkZWZhdWx0U3R5bGUnXSAgfHwgbnVsbDtcbiAgdGhpcy5tdWx0aSAgICAgICAgID0gb3B0aW9uc1snbXVsdGknXSAgICAgICAgIHx8IGZhbHNlO1xuICB0aGlzLnN0eWxlQWxpYXNlcyAgPSBjb21waWxlU3R5bGVBbGlhc2VzKG9wdGlvbnNbJ3N0eWxlQWxpYXNlcyddIHx8IG51bGwpO1xuXG4gIGlmIChZQU1MX05PREVfS0lORFMuaW5kZXhPZih0aGlzLmtpbmQpID09PSAtMSkge1xuICAgIHRocm93IG5ldyBleGNlcHRpb24oJ1Vua25vd24ga2luZCBcIicgKyB0aGlzLmtpbmQgKyAnXCIgaXMgc3BlY2lmaWVkIGZvciBcIicgKyB0YWcgKyAnXCIgWUFNTCB0eXBlLicpO1xuICB9XG59XG5cbnZhciB0eXBlID0gVHlwZSQxO1xuXG4vKmVzbGludC1kaXNhYmxlIG1heC1sZW4qL1xuXG5cblxuXG5cbmZ1bmN0aW9uIGNvbXBpbGVMaXN0KHNjaGVtYSwgbmFtZSkge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgc2NoZW1hW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKGN1cnJlbnRUeXBlKSB7XG4gICAgdmFyIG5ld0luZGV4ID0gcmVzdWx0Lmxlbmd0aDtcblxuICAgIHJlc3VsdC5mb3JFYWNoKGZ1bmN0aW9uIChwcmV2aW91c1R5cGUsIHByZXZpb3VzSW5kZXgpIHtcbiAgICAgIGlmIChwcmV2aW91c1R5cGUudGFnID09PSBjdXJyZW50VHlwZS50YWcgJiZcbiAgICAgICAgICBwcmV2aW91c1R5cGUua2luZCA9PT0gY3VycmVudFR5cGUua2luZCAmJlxuICAgICAgICAgIHByZXZpb3VzVHlwZS5tdWx0aSA9PT0gY3VycmVudFR5cGUubXVsdGkpIHtcblxuICAgICAgICBuZXdJbmRleCA9IHByZXZpb3VzSW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXN1bHRbbmV3SW5kZXhdID0gY3VycmVudFR5cGU7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxuZnVuY3Rpb24gY29tcGlsZU1hcCgvKiBsaXN0cy4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBzY2FsYXI6IHt9LFxuICAgICAgICBzZXF1ZW5jZToge30sXG4gICAgICAgIG1hcHBpbmc6IHt9LFxuICAgICAgICBmYWxsYmFjazoge30sXG4gICAgICAgIG11bHRpOiB7XG4gICAgICAgICAgc2NhbGFyOiBbXSxcbiAgICAgICAgICBzZXF1ZW5jZTogW10sXG4gICAgICAgICAgbWFwcGluZzogW10sXG4gICAgICAgICAgZmFsbGJhY2s6IFtdXG4gICAgICAgIH1cbiAgICAgIH0sIGluZGV4LCBsZW5ndGg7XG5cbiAgZnVuY3Rpb24gY29sbGVjdFR5cGUodHlwZSkge1xuICAgIGlmICh0eXBlLm11bHRpKSB7XG4gICAgICByZXN1bHQubXVsdGlbdHlwZS5raW5kXS5wdXNoKHR5cGUpO1xuICAgICAgcmVzdWx0Lm11bHRpWydmYWxsYmFjayddLnB1c2godHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFt0eXBlLmtpbmRdW3R5cGUudGFnXSA9IHJlc3VsdFsnZmFsbGJhY2snXVt0eXBlLnRhZ10gPSB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIGFyZ3VtZW50c1tpbmRleF0uZm9yRWFjaChjb2xsZWN0VHlwZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5mdW5jdGlvbiBTY2hlbWEkMShkZWZpbml0aW9uKSB7XG4gIHJldHVybiB0aGlzLmV4dGVuZChkZWZpbml0aW9uKTtcbn1cblxuXG5TY2hlbWEkMS5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gZXh0ZW5kKGRlZmluaXRpb24pIHtcbiAgdmFyIGltcGxpY2l0ID0gW107XG4gIHZhciBleHBsaWNpdCA9IFtdO1xuXG4gIGlmIChkZWZpbml0aW9uIGluc3RhbmNlb2YgdHlwZSkge1xuICAgIC8vIFNjaGVtYS5leHRlbmQodHlwZSlcbiAgICBleHBsaWNpdC5wdXNoKGRlZmluaXRpb24pO1xuXG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkZWZpbml0aW9uKSkge1xuICAgIC8vIFNjaGVtYS5leHRlbmQoWyB0eXBlMSwgdHlwZTIsIC4uLiBdKVxuICAgIGV4cGxpY2l0ID0gZXhwbGljaXQuY29uY2F0KGRlZmluaXRpb24pO1xuXG4gIH0gZWxzZSBpZiAoZGVmaW5pdGlvbiAmJiAoQXJyYXkuaXNBcnJheShkZWZpbml0aW9uLmltcGxpY2l0KSB8fCBBcnJheS5pc0FycmF5KGRlZmluaXRpb24uZXhwbGljaXQpKSkge1xuICAgIC8vIFNjaGVtYS5leHRlbmQoeyBleHBsaWNpdDogWyB0eXBlMSwgdHlwZTIsIC4uLiBdLCBpbXBsaWNpdDogWyB0eXBlMSwgdHlwZTIsIC4uLiBdIH0pXG4gICAgaWYgKGRlZmluaXRpb24uaW1wbGljaXQpIGltcGxpY2l0ID0gaW1wbGljaXQuY29uY2F0KGRlZmluaXRpb24uaW1wbGljaXQpO1xuICAgIGlmIChkZWZpbml0aW9uLmV4cGxpY2l0KSBleHBsaWNpdCA9IGV4cGxpY2l0LmNvbmNhdChkZWZpbml0aW9uLmV4cGxpY2l0KTtcblxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBleGNlcHRpb24oJ1NjaGVtYS5leHRlbmQgYXJndW1lbnQgc2hvdWxkIGJlIGEgVHlwZSwgWyBUeXBlIF0sICcgK1xuICAgICAgJ29yIGEgc2NoZW1hIGRlZmluaXRpb24gKHsgaW1wbGljaXQ6IFsuLi5dLCBleHBsaWNpdDogWy4uLl0gfSknKTtcbiAgfVxuXG4gIGltcGxpY2l0LmZvckVhY2goZnVuY3Rpb24gKHR5cGUkMSkge1xuICAgIGlmICghKHR5cGUkMSBpbnN0YW5jZW9mIHR5cGUpKSB7XG4gICAgICB0aHJvdyBuZXcgZXhjZXB0aW9uKCdTcGVjaWZpZWQgbGlzdCBvZiBZQU1MIHR5cGVzIChvciBhIHNpbmdsZSBUeXBlIG9iamVjdCkgY29udGFpbnMgYSBub24tVHlwZSBvYmplY3QuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGUkMS5sb2FkS2luZCAmJiB0eXBlJDEubG9hZEtpbmQgIT09ICdzY2FsYXInKSB7XG4gICAgICB0aHJvdyBuZXcgZXhjZXB0aW9uKCdUaGVyZSBpcyBhIG5vbi1zY2FsYXIgdHlwZSBpbiB0aGUgaW1wbGljaXQgbGlzdCBvZiBhIHNjaGVtYS4gSW1wbGljaXQgcmVzb2x2aW5nIG9mIHN1Y2ggdHlwZXMgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZSQxLm11bHRpKSB7XG4gICAgICB0aHJvdyBuZXcgZXhjZXB0aW9uKCdUaGVyZSBpcyBhIG11bHRpIHR5cGUgaW4gdGhlIGltcGxpY2l0IGxpc3Qgb2YgYSBzY2hlbWEuIE11bHRpIHRhZ3MgY2FuIG9ubHkgYmUgbGlzdGVkIGFzIGV4cGxpY2l0LicpO1xuICAgIH1cbiAgfSk7XG5cbiAgZXhwbGljaXQuZm9yRWFjaChmdW5jdGlvbiAodHlwZSQxKSB7XG4gICAgaWYgKCEodHlwZSQxIGluc3RhbmNlb2YgdHlwZSkpIHtcbiAgICAgIHRocm93IG5ldyBleGNlcHRpb24oJ1NwZWNpZmllZCBsaXN0IG9mIFlBTUwgdHlwZXMgKG9yIGEgc2luZ2xlIFR5cGUgb2JqZWN0KSBjb250YWlucyBhIG5vbi1UeXBlIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciByZXN1bHQgPSBPYmplY3QuY3JlYXRlKFNjaGVtYSQxLnByb3RvdHlwZSk7XG5cbiAgcmVzdWx0LmltcGxpY2l0ID0gKHRoaXMuaW1wbGljaXQgfHwgW10pLmNvbmNhdChpbXBsaWNpdCk7XG4gIHJlc3VsdC5leHBsaWNpdCA9ICh0aGlzLmV4cGxpY2l0IHx8IFtdKS5jb25jYXQoZXhwbGljaXQpO1xuXG4gIHJlc3VsdC5jb21waWxlZEltcGxpY2l0ID0gY29tcGlsZUxpc3QocmVzdWx0LCAnaW1wbGljaXQnKTtcbiAgcmVzdWx0LmNvbXBpbGVkRXhwbGljaXQgPSBjb21waWxlTGlzdChyZXN1bHQsICdleHBsaWNpdCcpO1xuICByZXN1bHQuY29tcGlsZWRUeXBlTWFwICA9IGNvbXBpbGVNYXAocmVzdWx0LmNvbXBpbGVkSW1wbGljaXQsIHJlc3VsdC5jb21waWxlZEV4cGxpY2l0KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG52YXIgc2NoZW1hID0gU2NoZW1hJDE7XG5cbnZhciBzdHIgPSBuZXcgdHlwZSgndGFnOnlhbWwub3JnLDIwMDI6c3RyJywge1xuICBraW5kOiAnc2NhbGFyJyxcbiAgY29uc3RydWN0OiBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YSAhPT0gbnVsbCA/IGRhdGEgOiAnJzsgfVxufSk7XG5cbnZhciBzZXEgPSBuZXcgdHlwZSgndGFnOnlhbWwub3JnLDIwMDI6c2VxJywge1xuICBraW5kOiAnc2VxdWVuY2UnLFxuICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBkYXRhICE9PSBudWxsID8gZGF0YSA6IFtdOyB9XG59KTtcblxudmFyIG1hcCA9IG5ldyB0eXBlKCd0YWc6eWFtbC5vcmcsMjAwMjptYXAnLCB7XG4gIGtpbmQ6ICdtYXBwaW5nJyxcbiAgY29uc3RydWN0OiBmdW5jdGlvbiAoZGF0YSkgeyByZXR1cm4gZGF0YSAhPT0gbnVsbCA/IGRhdGEgOiB7fTsgfVxufSk7XG5cbnZhciBmYWlsc2FmZSA9IG5ldyBzY2hlbWEoe1xuICBleHBsaWNpdDogW1xuICAgIHN0cixcbiAgICBzZXEsXG4gICAgbWFwXG4gIF1cbn0pO1xuXG5mdW5jdGlvbiByZXNvbHZlWWFtbE51bGwoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIG1heCA9IGRhdGEubGVuZ3RoO1xuXG4gIHJldHVybiAobWF4ID09PSAxICYmIGRhdGEgPT09ICd+JykgfHxcbiAgICAgICAgIChtYXggPT09IDQgJiYgKGRhdGEgPT09ICdudWxsJyB8fCBkYXRhID09PSAnTnVsbCcgfHwgZGF0YSA9PT0gJ05VTEwnKSk7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNOdWxsKG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ID09PSBudWxsO1xufVxuXG52YXIgX251bGwgPSBuZXcgdHlwZSgndGFnOnlhbWwub3JnLDIwMDI6bnVsbCcsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sTnVsbCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sTnVsbCxcbiAgcHJlZGljYXRlOiBpc051bGwsXG4gIHJlcHJlc2VudDoge1xuICAgIGNhbm9uaWNhbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ34nOyAgICB9LFxuICAgIGxvd2VyY2FzZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ251bGwnOyB9LFxuICAgIHVwcGVyY2FzZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ05VTEwnOyB9LFxuICAgIGNhbWVsY2FzZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ051bGwnOyB9LFxuICAgIGVtcHR5OiAgICAgZnVuY3Rpb24gKCkgeyByZXR1cm4gJyc7ICAgICB9XG4gIH0sXG4gIGRlZmF1bHRTdHlsZTogJ2xvd2VyY2FzZSdcbn0pO1xuXG5mdW5jdGlvbiByZXNvbHZlWWFtbEJvb2xlYW4oZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBtYXggPSBkYXRhLmxlbmd0aDtcblxuICByZXR1cm4gKG1heCA9PT0gNCAmJiAoZGF0YSA9PT0gJ3RydWUnIHx8IGRhdGEgPT09ICdUcnVlJyB8fCBkYXRhID09PSAnVFJVRScpKSB8fFxuICAgICAgICAgKG1heCA9PT0gNSAmJiAoZGF0YSA9PT0gJ2ZhbHNlJyB8fCBkYXRhID09PSAnRmFsc2UnIHx8IGRhdGEgPT09ICdGQUxTRScpKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbEJvb2xlYW4oZGF0YSkge1xuICByZXR1cm4gZGF0YSA9PT0gJ3RydWUnIHx8XG4gICAgICAgICBkYXRhID09PSAnVHJ1ZScgfHxcbiAgICAgICAgIGRhdGEgPT09ICdUUlVFJztcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEJvb2xlYW5dJztcbn1cblxudmFyIGJvb2wgPSBuZXcgdHlwZSgndGFnOnlhbWwub3JnLDIwMDI6Ym9vbCcsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sQm9vbGVhbixcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sQm9vbGVhbixcbiAgcHJlZGljYXRlOiBpc0Jvb2xlYW4sXG4gIHJlcHJlc2VudDoge1xuICAgIGxvd2VyY2FzZTogZnVuY3Rpb24gKG9iamVjdCkgeyByZXR1cm4gb2JqZWN0ID8gJ3RydWUnIDogJ2ZhbHNlJzsgfSxcbiAgICB1cHBlcmNhc2U6IGZ1bmN0aW9uIChvYmplY3QpIHsgcmV0dXJuIG9iamVjdCA/ICdUUlVFJyA6ICdGQUxTRSc7IH0sXG4gICAgY2FtZWxjYXNlOiBmdW5jdGlvbiAob2JqZWN0KSB7IHJldHVybiBvYmplY3QgPyAnVHJ1ZScgOiAnRmFsc2UnOyB9XG4gIH0sXG4gIGRlZmF1bHRTdHlsZTogJ2xvd2VyY2FzZSdcbn0pO1xuXG5mdW5jdGlvbiBpc0hleENvZGUoYykge1xuICByZXR1cm4gKCgweDMwLyogMCAqLyA8PSBjKSAmJiAoYyA8PSAweDM5LyogOSAqLykpIHx8XG4gICAgICAgICAoKDB4NDEvKiBBICovIDw9IGMpICYmIChjIDw9IDB4NDYvKiBGICovKSkgfHxcbiAgICAgICAgICgoMHg2MS8qIGEgKi8gPD0gYykgJiYgKGMgPD0gMHg2Ni8qIGYgKi8pKTtcbn1cblxuZnVuY3Rpb24gaXNPY3RDb2RlKGMpIHtcbiAgcmV0dXJuICgoMHgzMC8qIDAgKi8gPD0gYykgJiYgKGMgPD0gMHgzNy8qIDcgKi8pKTtcbn1cblxuZnVuY3Rpb24gaXNEZWNDb2RlKGMpIHtcbiAgcmV0dXJuICgoMHgzMC8qIDAgKi8gPD0gYykgJiYgKGMgPD0gMHgzOS8qIDkgKi8pKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxJbnRlZ2VyKGRhdGEpIHtcbiAgaWYgKGRhdGEgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICB2YXIgbWF4ID0gZGF0YS5sZW5ndGgsXG4gICAgICBpbmRleCA9IDAsXG4gICAgICBoYXNEaWdpdHMgPSBmYWxzZSxcbiAgICAgIGNoO1xuXG4gIGlmICghbWF4KSByZXR1cm4gZmFsc2U7XG5cbiAgY2ggPSBkYXRhW2luZGV4XTtcblxuICAvLyBzaWduXG4gIGlmIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycpIHtcbiAgICBjaCA9IGRhdGFbKytpbmRleF07XG4gIH1cblxuICBpZiAoY2ggPT09ICcwJykge1xuICAgIC8vIDBcbiAgICBpZiAoaW5kZXggKyAxID09PSBtYXgpIHJldHVybiB0cnVlO1xuICAgIGNoID0gZGF0YVsrK2luZGV4XTtcblxuICAgIC8vIGJhc2UgMiwgYmFzZSA4LCBiYXNlIDE2XG5cbiAgICBpZiAoY2ggPT09ICdiJykge1xuICAgICAgLy8gYmFzZSAyXG4gICAgICBpbmRleCsrO1xuXG4gICAgICBmb3IgKDsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICAgICAgY2ggPSBkYXRhW2luZGV4XTtcbiAgICAgICAgaWYgKGNoID09PSAnXycpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoY2ggIT09ICcwJyAmJiBjaCAhPT0gJzEnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGhhc0RpZ2l0cyA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzRGlnaXRzICYmIGNoICE9PSAnXyc7XG4gICAgfVxuXG5cbiAgICBpZiAoY2ggPT09ICd4Jykge1xuICAgICAgLy8gYmFzZSAxNlxuICAgICAgaW5kZXgrKztcblxuICAgICAgZm9yICg7IGluZGV4IDwgbWF4OyBpbmRleCsrKSB7XG4gICAgICAgIGNoID0gZGF0YVtpbmRleF07XG4gICAgICAgIGlmIChjaCA9PT0gJ18nKSBjb250aW51ZTtcbiAgICAgICAgaWYgKCFpc0hleENvZGUoZGF0YS5jaGFyQ29kZUF0KGluZGV4KSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaGFzRGlnaXRzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNEaWdpdHMgJiYgY2ggIT09ICdfJztcbiAgICB9XG5cblxuICAgIGlmIChjaCA9PT0gJ28nKSB7XG4gICAgICAvLyBiYXNlIDhcbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIGZvciAoOyBpbmRleCA8IG1heDsgaW5kZXgrKykge1xuICAgICAgICBjaCA9IGRhdGFbaW5kZXhdO1xuICAgICAgICBpZiAoY2ggPT09ICdfJykgY29udGludWU7XG4gICAgICAgIGlmICghaXNPY3RDb2RlKGRhdGEuY2hhckNvZGVBdChpbmRleCkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGhhc0RpZ2l0cyA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzRGlnaXRzICYmIGNoICE9PSAnXyc7XG4gICAgfVxuICB9XG5cbiAgLy8gYmFzZSAxMCAoZXhjZXB0IDApXG5cbiAgLy8gdmFsdWUgc2hvdWxkIG5vdCBzdGFydCB3aXRoIGBfYDtcbiAgaWYgKGNoID09PSAnXycpIHJldHVybiBmYWxzZTtcblxuICBmb3IgKDsgaW5kZXggPCBtYXg7IGluZGV4KyspIHtcbiAgICBjaCA9IGRhdGFbaW5kZXhdO1xuICAgIGlmIChjaCA9PT0gJ18nKSBjb250aW51ZTtcbiAgICBpZiAoIWlzRGVjQ29kZShkYXRhLmNoYXJDb2RlQXQoaW5kZXgpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBoYXNEaWdpdHMgPSB0cnVlO1xuICB9XG5cbiAgLy8gU2hvdWxkIGhhdmUgZGlnaXRzIGFuZCBzaG91bGQgbm90IGVuZCB3aXRoIGBfYFxuICBpZiAoIWhhc0RpZ2l0cyB8fCBjaCA9PT0gJ18nKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxJbnRlZ2VyKGRhdGEpIHtcbiAgdmFyIHZhbHVlID0gZGF0YSwgc2lnbiA9IDEsIGNoO1xuXG4gIGlmICh2YWx1ZS5pbmRleE9mKCdfJykgIT09IC0xKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9fL2csICcnKTtcbiAgfVxuXG4gIGNoID0gdmFsdWVbMF07XG5cbiAgaWYgKGNoID09PSAnLScgfHwgY2ggPT09ICcrJykge1xuICAgIGlmIChjaCA9PT0gJy0nKSBzaWduID0gLTE7XG4gICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxKTtcbiAgICBjaCA9IHZhbHVlWzBdO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSAnMCcpIHJldHVybiAwO1xuXG4gIGlmIChjaCA9PT0gJzAnKSB7XG4gICAgaWYgKHZhbHVlWzFdID09PSAnYicpIHJldHVybiBzaWduICogcGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIDIpO1xuICAgIGlmICh2YWx1ZVsxXSA9PT0gJ3gnKSByZXR1cm4gc2lnbiAqIHBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCAxNik7XG4gICAgaWYgKHZhbHVlWzFdID09PSAnbycpIHJldHVybiBzaWduICogcGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIDgpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiBwYXJzZUludCh2YWx1ZSwgMTApO1xufVxuXG5mdW5jdGlvbiBpc0ludGVnZXIob2JqZWN0KSB7XG4gIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkpID09PSAnW29iamVjdCBOdW1iZXJdJyAmJlxuICAgICAgICAgKG9iamVjdCAlIDEgPT09IDAgJiYgIWNvbW1vbi5pc05lZ2F0aXZlWmVybyhvYmplY3QpKTtcbn1cblxudmFyIGludCA9IG5ldyB0eXBlKCd0YWc6eWFtbC5vcmcsMjAwMjppbnQnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbEludGVnZXIsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbEludGVnZXIsXG4gIHByZWRpY2F0ZTogaXNJbnRlZ2VyLFxuICByZXByZXNlbnQ6IHtcbiAgICBiaW5hcnk6ICAgICAgZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqID49IDAgPyAnMGInICsgb2JqLnRvU3RyaW5nKDIpIDogJy0wYicgKyBvYmoudG9TdHJpbmcoMikuc2xpY2UoMSk7IH0sXG4gICAgb2N0YWw6ICAgICAgIGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiA+PSAwID8gJzBvJyAgKyBvYmoudG9TdHJpbmcoOCkgOiAnLTBvJyAgKyBvYmoudG9TdHJpbmcoOCkuc2xpY2UoMSk7IH0sXG4gICAgZGVjaW1hbDogICAgIGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai50b1N0cmluZygxMCk7IH0sXG4gICAgLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuICAgIGhleGFkZWNpbWFsOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogPj0gMCA/ICcweCcgKyBvYmoudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkgOiAgJy0weCcgKyBvYmoudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCkuc2xpY2UoMSk7IH1cbiAgfSxcbiAgZGVmYXVsdFN0eWxlOiAnZGVjaW1hbCcsXG4gIHN0eWxlQWxpYXNlczoge1xuICAgIGJpbmFyeTogICAgICBbIDIsICAnYmluJyBdLFxuICAgIG9jdGFsOiAgICAgICBbIDgsICAnb2N0JyBdLFxuICAgIGRlY2ltYWw6ICAgICBbIDEwLCAnZGVjJyBdLFxuICAgIGhleGFkZWNpbWFsOiBbIDE2LCAnaGV4JyBdXG4gIH1cbn0pO1xuXG52YXIgWUFNTF9GTE9BVF9QQVRURVJOID0gbmV3IFJlZ0V4cChcbiAgLy8gMi41ZTQsIDIuNSBhbmQgaW50ZWdlcnNcbiAgJ14oPzpbLStdPyg/OlswLTldWzAtOV9dKikoPzpcXFxcLlswLTlfXSopPyg/OltlRV1bLStdP1swLTldKyk/JyArXG4gIC8vIC4yZTQsIC4yXG4gIC8vIHNwZWNpYWwgY2FzZSwgc2VlbXMgbm90IGZyb20gc3BlY1xuICAnfFxcXFwuWzAtOV9dKyg/OltlRV1bLStdP1swLTldKyk/JyArXG4gIC8vIC5pbmZcbiAgJ3xbLStdP1xcXFwuKD86aW5mfEluZnxJTkYpJyArXG4gIC8vIC5uYW5cbiAgJ3xcXFxcLig/Om5hbnxOYU58TkFOKSkkJyk7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sRmxvYXQoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICghWUFNTF9GTE9BVF9QQVRURVJOLnRlc3QoZGF0YSkgfHxcbiAgICAgIC8vIFF1aWNrIGhhY2sgdG8gbm90IGFsbG93IGludGVnZXJzIGVuZCB3aXRoIGBfYFxuICAgICAgLy8gUHJvYmFibHkgc2hvdWxkIHVwZGF0ZSByZWdleHAgJiBjaGVjayBzcGVlZFxuICAgICAgZGF0YVtkYXRhLmxlbmd0aCAtIDFdID09PSAnXycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0WWFtbEZsb2F0KGRhdGEpIHtcbiAgdmFyIHZhbHVlLCBzaWduO1xuXG4gIHZhbHVlICA9IGRhdGEucmVwbGFjZSgvXy9nLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgc2lnbiAgID0gdmFsdWVbMF0gPT09ICctJyA/IC0xIDogMTtcblxuICBpZiAoJystJy5pbmRleE9mKHZhbHVlWzBdKSA+PSAwKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxKTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJy5pbmYnKSB7XG4gICAgcmV0dXJuIChzaWduID09PSAxKSA/IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSA6IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcblxuICB9IGVsc2UgaWYgKHZhbHVlID09PSAnLm5hbicpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBzaWduICogcGFyc2VGbG9hdCh2YWx1ZSwgMTApO1xufVxuXG5cbnZhciBTQ0lFTlRJRklDX1dJVEhPVVRfRE9UID0gL15bLStdP1swLTldK2UvO1xuXG5mdW5jdGlvbiByZXByZXNlbnRZYW1sRmxvYXQob2JqZWN0LCBzdHlsZSkge1xuICB2YXIgcmVzO1xuXG4gIGlmIChpc05hTihvYmplY3QpKSB7XG4gICAgc3dpdGNoIChzdHlsZSkge1xuICAgICAgY2FzZSAnbG93ZXJjYXNlJzogcmV0dXJuICcubmFuJztcbiAgICAgIGNhc2UgJ3VwcGVyY2FzZSc6IHJldHVybiAnLk5BTic7XG4gICAgICBjYXNlICdjYW1lbGNhc2UnOiByZXR1cm4gJy5OYU4nO1xuICAgIH1cbiAgfSBlbHNlIGlmIChOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkgPT09IG9iamVjdCkge1xuICAgIHN3aXRjaCAoc3R5bGUpIHtcbiAgICAgIGNhc2UgJ2xvd2VyY2FzZSc6IHJldHVybiAnLmluZic7XG4gICAgICBjYXNlICd1cHBlcmNhc2UnOiByZXR1cm4gJy5JTkYnO1xuICAgICAgY2FzZSAnY2FtZWxjYXNlJzogcmV0dXJuICcuSW5mJztcbiAgICB9XG4gIH0gZWxzZSBpZiAoTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZID09PSBvYmplY3QpIHtcbiAgICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgICBjYXNlICdsb3dlcmNhc2UnOiByZXR1cm4gJy0uaW5mJztcbiAgICAgIGNhc2UgJ3VwcGVyY2FzZSc6IHJldHVybiAnLS5JTkYnO1xuICAgICAgY2FzZSAnY2FtZWxjYXNlJzogcmV0dXJuICctLkluZic7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvbW1vbi5pc05lZ2F0aXZlWmVybyhvYmplY3QpKSB7XG4gICAgcmV0dXJuICctMC4wJztcbiAgfVxuXG4gIHJlcyA9IG9iamVjdC50b1N0cmluZygxMCk7XG5cbiAgLy8gSlMgc3RyaW5naWZpZXIgY2FuIGJ1aWxkIHNjaWVudGlmaWMgZm9ybWF0IHdpdGhvdXQgZG90czogNWUtMTAwLFxuICAvLyB3aGlsZSBZQU1MIHJlcXVyZXMgZG90OiA1LmUtMTAwLiBGaXggaXQgd2l0aCBzaW1wbGUgaGFja1xuXG4gIHJldHVybiBTQ0lFTlRJRklDX1dJVEhPVVRfRE9ULnRlc3QocmVzKSA/IHJlcy5yZXBsYWNlKCdlJywgJy5lJykgOiByZXM7XG59XG5cbmZ1bmN0aW9uIGlzRmxvYXQob2JqZWN0KSB7XG4gIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IE51bWJlcl0nKSAmJlxuICAgICAgICAgKG9iamVjdCAlIDEgIT09IDAgfHwgY29tbW9uLmlzTmVnYXRpdmVaZXJvKG9iamVjdCkpO1xufVxuXG52YXIgZmxvYXQgPSBuZXcgdHlwZSgndGFnOnlhbWwub3JnLDIwMDI6ZmxvYXQnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbEZsb2F0LFxuICBjb25zdHJ1Y3Q6IGNvbnN0cnVjdFlhbWxGbG9hdCxcbiAgcHJlZGljYXRlOiBpc0Zsb2F0LFxuICByZXByZXNlbnQ6IHJlcHJlc2VudFlhbWxGbG9hdCxcbiAgZGVmYXVsdFN0eWxlOiAnbG93ZXJjYXNlJ1xufSk7XG5cbnZhciBqc29uID0gZmFpbHNhZmUuZXh0ZW5kKHtcbiAgaW1wbGljaXQ6IFtcbiAgICBfbnVsbCxcbiAgICBib29sLFxuICAgIGludCxcbiAgICBmbG9hdFxuICBdXG59KTtcblxudmFyIGNvcmUgPSBqc29uO1xuXG52YXIgWUFNTF9EQVRFX1JFR0VYUCA9IG5ldyBSZWdFeHAoXG4gICdeKFswLTldWzAtOV1bMC05XVswLTldKScgICAgICAgICAgKyAvLyBbMV0geWVhclxuICAnLShbMC05XVswLTldKScgICAgICAgICAgICAgICAgICAgICsgLy8gWzJdIG1vbnRoXG4gICctKFswLTldWzAtOV0pJCcpOyAgICAgICAgICAgICAgICAgICAvLyBbM10gZGF5XG5cbnZhciBZQU1MX1RJTUVTVEFNUF9SRUdFWFAgPSBuZXcgUmVnRXhwKFxuICAnXihbMC05XVswLTldWzAtOV1bMC05XSknICAgICAgICAgICsgLy8gWzFdIHllYXJcbiAgJy0oWzAtOV1bMC05XT8pJyAgICAgICAgICAgICAgICAgICArIC8vIFsyXSBtb250aFxuICAnLShbMC05XVswLTldPyknICAgICAgICAgICAgICAgICAgICsgLy8gWzNdIGRheVxuICAnKD86W1R0XXxbIFxcXFx0XSspJyAgICAgICAgICAgICAgICAgKyAvLyAuLi5cbiAgJyhbMC05XVswLTldPyknICAgICAgICAgICAgICAgICAgICArIC8vIFs0XSBob3VyXG4gICc6KFswLTldWzAtOV0pJyAgICAgICAgICAgICAgICAgICAgKyAvLyBbNV0gbWludXRlXG4gICc6KFswLTldWzAtOV0pJyAgICAgICAgICAgICAgICAgICAgKyAvLyBbNl0gc2Vjb25kXG4gICcoPzpcXFxcLihbMC05XSopKT8nICAgICAgICAgICAgICAgICArIC8vIFs3XSBmcmFjdGlvblxuICAnKD86WyBcXFxcdF0qKFp8KFstK10pKFswLTldWzAtOV0/KScgKyAvLyBbOF0gdHogWzldIHR6X3NpZ24gWzEwXSB0el9ob3VyXG4gICcoPzo6KFswLTldWzAtOV0pKT8pKT8kJyk7ICAgICAgICAgICAvLyBbMTFdIHR6X21pbnV0ZVxuXG5mdW5jdGlvbiByZXNvbHZlWWFtbFRpbWVzdGFtcChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIGlmIChZQU1MX0RBVEVfUkVHRVhQLmV4ZWMoZGF0YSkgIT09IG51bGwpIHJldHVybiB0cnVlO1xuICBpZiAoWUFNTF9USU1FU1RBTVBfUkVHRVhQLmV4ZWMoZGF0YSkgIT09IG51bGwpIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxUaW1lc3RhbXAoZGF0YSkge1xuICB2YXIgbWF0Y2gsIHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBmcmFjdGlvbiA9IDAsXG4gICAgICBkZWx0YSA9IG51bGwsIHR6X2hvdXIsIHR6X21pbnV0ZSwgZGF0ZTtcblxuICBtYXRjaCA9IFlBTUxfREFURV9SRUdFWFAuZXhlYyhkYXRhKTtcbiAgaWYgKG1hdGNoID09PSBudWxsKSBtYXRjaCA9IFlBTUxfVElNRVNUQU1QX1JFR0VYUC5leGVjKGRhdGEpO1xuXG4gIGlmIChtYXRjaCA9PT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdEYXRlIHJlc29sdmUgZXJyb3InKTtcblxuICAvLyBtYXRjaDogWzFdIHllYXIgWzJdIG1vbnRoIFszXSBkYXlcblxuICB5ZWFyID0gKyhtYXRjaFsxXSk7XG4gIG1vbnRoID0gKyhtYXRjaFsyXSkgLSAxOyAvLyBKUyBtb250aCBzdGFydHMgd2l0aCAwXG4gIGRheSA9ICsobWF0Y2hbM10pO1xuXG4gIGlmICghbWF0Y2hbNF0pIHsgLy8gbm8gaG91clxuICAgIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCwgZGF5KSk7XG4gIH1cblxuICAvLyBtYXRjaDogWzRdIGhvdXIgWzVdIG1pbnV0ZSBbNl0gc2Vjb25kIFs3XSBmcmFjdGlvblxuXG4gIGhvdXIgPSArKG1hdGNoWzRdKTtcbiAgbWludXRlID0gKyhtYXRjaFs1XSk7XG4gIHNlY29uZCA9ICsobWF0Y2hbNl0pO1xuXG4gIGlmIChtYXRjaFs3XSkge1xuICAgIGZyYWN0aW9uID0gbWF0Y2hbN10uc2xpY2UoMCwgMyk7XG4gICAgd2hpbGUgKGZyYWN0aW9uLmxlbmd0aCA8IDMpIHsgLy8gbWlsbGktc2Vjb25kc1xuICAgICAgZnJhY3Rpb24gKz0gJzAnO1xuICAgIH1cbiAgICBmcmFjdGlvbiA9ICtmcmFjdGlvbjtcbiAgfVxuXG4gIC8vIG1hdGNoOiBbOF0gdHogWzldIHR6X3NpZ24gWzEwXSB0el9ob3VyIFsxMV0gdHpfbWludXRlXG5cbiAgaWYgKG1hdGNoWzldKSB7XG4gICAgdHpfaG91ciA9ICsobWF0Y2hbMTBdKTtcbiAgICB0el9taW51dGUgPSArKG1hdGNoWzExXSB8fCAwKTtcbiAgICBkZWx0YSA9ICh0el9ob3VyICogNjAgKyB0el9taW51dGUpICogNjAwMDA7IC8vIGRlbHRhIGluIG1pbGktc2Vjb25kc1xuICAgIGlmIChtYXRjaFs5XSA9PT0gJy0nKSBkZWx0YSA9IC1kZWx0YTtcbiAgfVxuXG4gIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCwgZnJhY3Rpb24pKTtcblxuICBpZiAoZGVsdGEpIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSAtIGRlbHRhKTtcblxuICByZXR1cm4gZGF0ZTtcbn1cblxuZnVuY3Rpb24gcmVwcmVzZW50WWFtbFRpbWVzdGFtcChvYmplY3QgLyosIHN0eWxlKi8pIHtcbiAgcmV0dXJuIG9iamVjdC50b0lTT1N0cmluZygpO1xufVxuXG52YXIgdGltZXN0YW1wID0gbmV3IHR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOnRpbWVzdGFtcCcsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sVGltZXN0YW1wLFxuICBjb25zdHJ1Y3Q6IGNvbnN0cnVjdFlhbWxUaW1lc3RhbXAsXG4gIGluc3RhbmNlT2Y6IERhdGUsXG4gIHJlcHJlc2VudDogcmVwcmVzZW50WWFtbFRpbWVzdGFtcFxufSk7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sTWVyZ2UoZGF0YSkge1xuICByZXR1cm4gZGF0YSA9PT0gJzw8JyB8fCBkYXRhID09PSBudWxsO1xufVxuXG52YXIgbWVyZ2UgPSBuZXcgdHlwZSgndGFnOnlhbWwub3JnLDIwMDI6bWVyZ2UnLCB7XG4gIGtpbmQ6ICdzY2FsYXInLFxuICByZXNvbHZlOiByZXNvbHZlWWFtbE1lcmdlXG59KTtcblxuLyplc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlKi9cblxuXG5cblxuXG4vLyBbIDY0LCA2NSwgNjYgXSAtPiBbIHBhZGRpbmcsIENSLCBMRiBdXG52YXIgQkFTRTY0X01BUCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVxcblxccic7XG5cblxuZnVuY3Rpb24gcmVzb2x2ZVlhbWxCaW5hcnkoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBjb2RlLCBpZHgsIGJpdGxlbiA9IDAsIG1heCA9IGRhdGEubGVuZ3RoLCBtYXAgPSBCQVNFNjRfTUFQO1xuXG4gIC8vIENvbnZlcnQgb25lIGJ5IG9uZS5cbiAgZm9yIChpZHggPSAwOyBpZHggPCBtYXg7IGlkeCsrKSB7XG4gICAgY29kZSA9IG1hcC5pbmRleE9mKGRhdGEuY2hhckF0KGlkeCkpO1xuXG4gICAgLy8gU2tpcCBDUi9MRlxuICAgIGlmIChjb2RlID4gNjQpIGNvbnRpbnVlO1xuXG4gICAgLy8gRmFpbCBvbiBpbGxlZ2FsIGNoYXJhY3RlcnNcbiAgICBpZiAoY29kZSA8IDApIHJldHVybiBmYWxzZTtcblxuICAgIGJpdGxlbiArPSA2O1xuICB9XG5cbiAgLy8gSWYgdGhlcmUgYXJlIGFueSBiaXRzIGxlZnQsIHNvdXJjZSB3YXMgY29ycnVwdGVkXG4gIHJldHVybiAoYml0bGVuICUgOCkgPT09IDA7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxCaW5hcnkoZGF0YSkge1xuICB2YXIgaWR4LCB0YWlsYml0cyxcbiAgICAgIGlucHV0ID0gZGF0YS5yZXBsYWNlKC9bXFxyXFxuPV0vZywgJycpLCAvLyByZW1vdmUgQ1IvTEYgJiBwYWRkaW5nIHRvIHNpbXBsaWZ5IHNjYW5cbiAgICAgIG1heCA9IGlucHV0Lmxlbmd0aCxcbiAgICAgIG1hcCA9IEJBU0U2NF9NQVAsXG4gICAgICBiaXRzID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIC8vIENvbGxlY3QgYnkgNio0IGJpdHMgKDMgYnl0ZXMpXG5cbiAgZm9yIChpZHggPSAwOyBpZHggPCBtYXg7IGlkeCsrKSB7XG4gICAgaWYgKChpZHggJSA0ID09PSAwKSAmJiBpZHgpIHtcbiAgICAgIHJlc3VsdC5wdXNoKChiaXRzID4+IDE2KSAmIDB4RkYpO1xuICAgICAgcmVzdWx0LnB1c2goKGJpdHMgPj4gOCkgJiAweEZGKTtcbiAgICAgIHJlc3VsdC5wdXNoKGJpdHMgJiAweEZGKTtcbiAgICB9XG5cbiAgICBiaXRzID0gKGJpdHMgPDwgNikgfCBtYXAuaW5kZXhPZihpbnB1dC5jaGFyQXQoaWR4KSk7XG4gIH1cblxuICAvLyBEdW1wIHRhaWxcblxuICB0YWlsYml0cyA9IChtYXggJSA0KSAqIDY7XG5cbiAgaWYgKHRhaWxiaXRzID09PSAwKSB7XG4gICAgcmVzdWx0LnB1c2goKGJpdHMgPj4gMTYpICYgMHhGRik7XG4gICAgcmVzdWx0LnB1c2goKGJpdHMgPj4gOCkgJiAweEZGKTtcbiAgICByZXN1bHQucHVzaChiaXRzICYgMHhGRik7XG4gIH0gZWxzZSBpZiAodGFpbGJpdHMgPT09IDE4KSB7XG4gICAgcmVzdWx0LnB1c2goKGJpdHMgPj4gMTApICYgMHhGRik7XG4gICAgcmVzdWx0LnB1c2goKGJpdHMgPj4gMikgJiAweEZGKTtcbiAgfSBlbHNlIGlmICh0YWlsYml0cyA9PT0gMTIpIHtcbiAgICByZXN1bHQucHVzaCgoYml0cyA+PiA0KSAmIDB4RkYpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHJlc3VsdCk7XG59XG5cbmZ1bmN0aW9uIHJlcHJlc2VudFlhbWxCaW5hcnkob2JqZWN0IC8qLCBzdHlsZSovKSB7XG4gIHZhciByZXN1bHQgPSAnJywgYml0cyA9IDAsIGlkeCwgdGFpbCxcbiAgICAgIG1heCA9IG9iamVjdC5sZW5ndGgsXG4gICAgICBtYXAgPSBCQVNFNjRfTUFQO1xuXG4gIC8vIENvbnZlcnQgZXZlcnkgdGhyZWUgYnl0ZXMgdG8gNCBBU0NJSSBjaGFyYWN0ZXJzLlxuXG4gIGZvciAoaWR4ID0gMDsgaWR4IDwgbWF4OyBpZHgrKykge1xuICAgIGlmICgoaWR4ICUgMyA9PT0gMCkgJiYgaWR4KSB7XG4gICAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDE4KSAmIDB4M0ZdO1xuICAgICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiAxMikgJiAweDNGXTtcbiAgICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gNikgJiAweDNGXTtcbiAgICAgIHJlc3VsdCArPSBtYXBbYml0cyAmIDB4M0ZdO1xuICAgIH1cblxuICAgIGJpdHMgPSAoYml0cyA8PCA4KSArIG9iamVjdFtpZHhdO1xuICB9XG5cbiAgLy8gRHVtcCB0YWlsXG5cbiAgdGFpbCA9IG1heCAlIDM7XG5cbiAgaWYgKHRhaWwgPT09IDApIHtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDE4KSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMTIpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFsoYml0cyA+PiA2KSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbYml0cyAmIDB4M0ZdO1xuICB9IGVsc2UgaWYgKHRhaWwgPT09IDIpIHtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzID4+IDEwKSAmIDB4M0ZdO1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gNCkgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzIDw8IDIpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFs2NF07XG4gIH0gZWxzZSBpZiAodGFpbCA9PT0gMSkge1xuICAgIHJlc3VsdCArPSBtYXBbKGJpdHMgPj4gMikgJiAweDNGXTtcbiAgICByZXN1bHQgKz0gbWFwWyhiaXRzIDw8IDQpICYgMHgzRl07XG4gICAgcmVzdWx0ICs9IG1hcFs2NF07XG4gICAgcmVzdWx0ICs9IG1hcFs2NF07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBpc0JpbmFyeShvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAgJ1tvYmplY3QgVWludDhBcnJheV0nO1xufVxuXG52YXIgYmluYXJ5ID0gbmV3IHR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOmJpbmFyeScsIHtcbiAga2luZDogJ3NjYWxhcicsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sQmluYXJ5LFxuICBjb25zdHJ1Y3Q6IGNvbnN0cnVjdFlhbWxCaW5hcnksXG4gIHByZWRpY2F0ZTogaXNCaW5hcnksXG4gIHJlcHJlc2VudDogcmVwcmVzZW50WWFtbEJpbmFyeVxufSk7XG5cbnZhciBfaGFzT3duUHJvcGVydHkkMyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX3RvU3RyaW5nJDIgICAgICAgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiByZXNvbHZlWWFtbE9tYXAoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIG9iamVjdEtleXMgPSBbXSwgaW5kZXgsIGxlbmd0aCwgcGFpciwgcGFpcktleSwgcGFpckhhc0tleSxcbiAgICAgIG9iamVjdCA9IGRhdGE7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgcGFpciA9IG9iamVjdFtpbmRleF07XG4gICAgcGFpckhhc0tleSA9IGZhbHNlO1xuXG4gICAgaWYgKF90b1N0cmluZyQyLmNhbGwocGFpcikgIT09ICdbb2JqZWN0IE9iamVjdF0nKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKHBhaXJLZXkgaW4gcGFpcikge1xuICAgICAgaWYgKF9oYXNPd25Qcm9wZXJ0eSQzLmNhbGwocGFpciwgcGFpcktleSkpIHtcbiAgICAgICAgaWYgKCFwYWlySGFzS2V5KSBwYWlySGFzS2V5ID0gdHJ1ZTtcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwYWlySGFzS2V5KSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAob2JqZWN0S2V5cy5pbmRleE9mKHBhaXJLZXkpID09PSAtMSkgb2JqZWN0S2V5cy5wdXNoKHBhaXJLZXkpO1xuICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxPbWFwKGRhdGEpIHtcbiAgcmV0dXJuIGRhdGEgIT09IG51bGwgPyBkYXRhIDogW107XG59XG5cbnZhciBvbWFwID0gbmV3IHR5cGUoJ3RhZzp5YW1sLm9yZywyMDAyOm9tYXAnLCB7XG4gIGtpbmQ6ICdzZXF1ZW5jZScsXG4gIHJlc29sdmU6IHJlc29sdmVZYW1sT21hcCxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sT21hcFxufSk7XG5cbnZhciBfdG9TdHJpbmckMSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmZ1bmN0aW9uIHJlc29sdmVZYW1sUGFpcnMoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cbiAgdmFyIGluZGV4LCBsZW5ndGgsIHBhaXIsIGtleXMsIHJlc3VsdCxcbiAgICAgIG9iamVjdCA9IGRhdGE7XG5cbiAgcmVzdWx0ID0gbmV3IEFycmF5KG9iamVjdC5sZW5ndGgpO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHBhaXIgPSBvYmplY3RbaW5kZXhdO1xuXG4gICAgaWYgKF90b1N0cmluZyQxLmNhbGwocGFpcikgIT09ICdbb2JqZWN0IE9iamVjdF0nKSByZXR1cm4gZmFsc2U7XG5cbiAgICBrZXlzID0gT2JqZWN0LmtleXMocGFpcik7XG5cbiAgICBpZiAoa2V5cy5sZW5ndGggIT09IDEpIHJldHVybiBmYWxzZTtcblxuICAgIHJlc3VsdFtpbmRleF0gPSBbIGtleXNbMF0sIHBhaXJba2V5c1swXV0gXTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RZYW1sUGFpcnMoZGF0YSkge1xuICBpZiAoZGF0YSA9PT0gbnVsbCkgcmV0dXJuIFtdO1xuXG4gIHZhciBpbmRleCwgbGVuZ3RoLCBwYWlyLCBrZXlzLCByZXN1bHQsXG4gICAgICBvYmplY3QgPSBkYXRhO1xuXG4gIHJlc3VsdCA9IG5ldyBBcnJheShvYmplY3QubGVuZ3RoKTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICBwYWlyID0gb2JqZWN0W2luZGV4XTtcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhwYWlyKTtcblxuICAgIHJlc3VsdFtpbmRleF0gPSBbIGtleXNbMF0sIHBhaXJba2V5c1swXV0gXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBwYWlycyA9IG5ldyB0eXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpwYWlycycsIHtcbiAga2luZDogJ3NlcXVlbmNlJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxQYWlycyxcbiAgY29uc3RydWN0OiBjb25zdHJ1Y3RZYW1sUGFpcnNcbn0pO1xuXG52YXIgX2hhc093blByb3BlcnR5JDIgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiByZXNvbHZlWWFtbFNldChkYXRhKSB7XG4gIGlmIChkYXRhID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcblxuICB2YXIga2V5LCBvYmplY3QgPSBkYXRhO1xuXG4gIGZvciAoa2V5IGluIG9iamVjdCkge1xuICAgIGlmIChfaGFzT3duUHJvcGVydHkkMi5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgaWYgKG9iamVjdFtrZXldICE9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFlhbWxTZXQoZGF0YSkge1xuICByZXR1cm4gZGF0YSAhPT0gbnVsbCA/IGRhdGEgOiB7fTtcbn1cblxudmFyIHNldCA9IG5ldyB0eXBlKCd0YWc6eWFtbC5vcmcsMjAwMjpzZXQnLCB7XG4gIGtpbmQ6ICdtYXBwaW5nJyxcbiAgcmVzb2x2ZTogcmVzb2x2ZVlhbWxTZXQsXG4gIGNvbnN0cnVjdDogY29uc3RydWN0WWFtbFNldFxufSk7XG5cbnZhciBfZGVmYXVsdCA9IGNvcmUuZXh0ZW5kKHtcbiAgaW1wbGljaXQ6IFtcbiAgICB0aW1lc3RhbXAsXG4gICAgbWVyZ2VcbiAgXSxcbiAgZXhwbGljaXQ6IFtcbiAgICBiaW5hcnksXG4gICAgb21hcCxcbiAgICBwYWlycyxcbiAgICBzZXRcbiAgXVxufSk7XG5cbi8qZXNsaW50LWRpc2FibGUgbWF4LWxlbixuby11c2UtYmVmb3JlLWRlZmluZSovXG5cblxuXG5cblxuXG5cbnZhciBfaGFzT3duUHJvcGVydHkkMSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cblxudmFyIENPTlRFWFRfRkxPV19JTiAgID0gMTtcbnZhciBDT05URVhUX0ZMT1dfT1VUICA9IDI7XG52YXIgQ09OVEVYVF9CTE9DS19JTiAgPSAzO1xudmFyIENPTlRFWFRfQkxPQ0tfT1VUID0gNDtcblxuXG52YXIgQ0hPTVBJTkdfQ0xJUCAgPSAxO1xudmFyIENIT01QSU5HX1NUUklQID0gMjtcbnZhciBDSE9NUElOR19LRUVQICA9IDM7XG5cblxudmFyIFBBVFRFUk5fTk9OX1BSSU5UQUJMRSAgICAgICAgID0gL1tcXHgwMC1cXHgwOFxceDBCXFx4MENcXHgwRS1cXHgxRlxceDdGLVxceDg0XFx4ODYtXFx4OUZcXHVGRkZFXFx1RkZGRl18W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0vO1xudmFyIFBBVFRFUk5fTk9OX0FTQ0lJX0xJTkVfQlJFQUtTID0gL1tcXHg4NVxcdTIwMjhcXHUyMDI5XS87XG52YXIgUEFUVEVSTl9GTE9XX0lORElDQVRPUlMgICAgICAgPSAvWyxcXFtcXF1cXHtcXH1dLztcbnZhciBQQVRURVJOX1RBR19IQU5ETEUgICAgICAgICAgICA9IC9eKD86IXwhIXwhW2EtelxcLV0rISkkL2k7XG52YXIgUEFUVEVSTl9UQUdfVVJJICAgICAgICAgICAgICAgPSAvXig/OiF8W14sXFxbXFxdXFx7XFx9XSkoPzolWzAtOWEtZl17Mn18WzAtOWEtelxcLSM7XFwvXFw/OkAmPVxcK1xcJCxfXFwuIX5cXConXFwoXFwpXFxbXFxdXSkqJC9pO1xuXG5cbmZ1bmN0aW9uIF9jbGFzcyhvYmopIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopOyB9XG5cbmZ1bmN0aW9uIGlzX0VPTChjKSB7XG4gIHJldHVybiAoYyA9PT0gMHgwQS8qIExGICovKSB8fCAoYyA9PT0gMHgwRC8qIENSICovKTtcbn1cblxuZnVuY3Rpb24gaXNfV0hJVEVfU1BBQ0UoYykge1xuICByZXR1cm4gKGMgPT09IDB4MDkvKiBUYWIgKi8pIHx8IChjID09PSAweDIwLyogU3BhY2UgKi8pO1xufVxuXG5mdW5jdGlvbiBpc19XU19PUl9FT0woYykge1xuICByZXR1cm4gKGMgPT09IDB4MDkvKiBUYWIgKi8pIHx8XG4gICAgICAgICAoYyA9PT0gMHgyMC8qIFNwYWNlICovKSB8fFxuICAgICAgICAgKGMgPT09IDB4MEEvKiBMRiAqLykgfHxcbiAgICAgICAgIChjID09PSAweDBELyogQ1IgKi8pO1xufVxuXG5mdW5jdGlvbiBpc19GTE9XX0lORElDQVRPUihjKSB7XG4gIHJldHVybiBjID09PSAweDJDLyogLCAqLyB8fFxuICAgICAgICAgYyA9PT0gMHg1Qi8qIFsgKi8gfHxcbiAgICAgICAgIGMgPT09IDB4NUQvKiBdICovIHx8XG4gICAgICAgICBjID09PSAweDdCLyogeyAqLyB8fFxuICAgICAgICAgYyA9PT0gMHg3RC8qIH0gKi87XG59XG5cbmZ1bmN0aW9uIGZyb21IZXhDb2RlKGMpIHtcbiAgdmFyIGxjO1xuXG4gIGlmICgoMHgzMC8qIDAgKi8gPD0gYykgJiYgKGMgPD0gMHgzOS8qIDkgKi8pKSB7XG4gICAgcmV0dXJuIGMgLSAweDMwO1xuICB9XG5cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlKi9cbiAgbGMgPSBjIHwgMHgyMDtcblxuICBpZiAoKDB4NjEvKiBhICovIDw9IGxjKSAmJiAobGMgPD0gMHg2Ni8qIGYgKi8pKSB7XG4gICAgcmV0dXJuIGxjIC0gMHg2MSArIDEwO1xuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVkSGV4TGVuKGMpIHtcbiAgaWYgKGMgPT09IDB4NzgvKiB4ICovKSB7IHJldHVybiAyOyB9XG4gIGlmIChjID09PSAweDc1LyogdSAqLykgeyByZXR1cm4gNDsgfVxuICBpZiAoYyA9PT0gMHg1NS8qIFUgKi8pIHsgcmV0dXJuIDg7IH1cbiAgcmV0dXJuIDA7XG59XG5cbmZ1bmN0aW9uIGZyb21EZWNpbWFsQ29kZShjKSB7XG4gIGlmICgoMHgzMC8qIDAgKi8gPD0gYykgJiYgKGMgPD0gMHgzOS8qIDkgKi8pKSB7XG4gICAgcmV0dXJuIGMgLSAweDMwO1xuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBzaW1wbGVFc2NhcGVTZXF1ZW5jZShjKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuICByZXR1cm4gKGMgPT09IDB4MzAvKiAwICovKSA/ICdcXHgwMCcgOlxuICAgICAgICAoYyA9PT0gMHg2MS8qIGEgKi8pID8gJ1xceDA3JyA6XG4gICAgICAgIChjID09PSAweDYyLyogYiAqLykgPyAnXFx4MDgnIDpcbiAgICAgICAgKGMgPT09IDB4NzQvKiB0ICovKSA/ICdcXHgwOScgOlxuICAgICAgICAoYyA9PT0gMHgwOS8qIFRhYiAqLykgPyAnXFx4MDknIDpcbiAgICAgICAgKGMgPT09IDB4NkUvKiBuICovKSA/ICdcXHgwQScgOlxuICAgICAgICAoYyA9PT0gMHg3Ni8qIHYgKi8pID8gJ1xceDBCJyA6XG4gICAgICAgIChjID09PSAweDY2LyogZiAqLykgPyAnXFx4MEMnIDpcbiAgICAgICAgKGMgPT09IDB4NzIvKiByICovKSA/ICdcXHgwRCcgOlxuICAgICAgICAoYyA9PT0gMHg2NS8qIGUgKi8pID8gJ1xceDFCJyA6XG4gICAgICAgIChjID09PSAweDIwLyogU3BhY2UgKi8pID8gJyAnIDpcbiAgICAgICAgKGMgPT09IDB4MjIvKiBcIiAqLykgPyAnXFx4MjInIDpcbiAgICAgICAgKGMgPT09IDB4MkYvKiAvICovKSA/ICcvJyA6XG4gICAgICAgIChjID09PSAweDVDLyogXFwgKi8pID8gJ1xceDVDJyA6XG4gICAgICAgIChjID09PSAweDRFLyogTiAqLykgPyAnXFx4ODUnIDpcbiAgICAgICAgKGMgPT09IDB4NUYvKiBfICovKSA/ICdcXHhBMCcgOlxuICAgICAgICAoYyA9PT0gMHg0Qy8qIEwgKi8pID8gJ1xcdTIwMjgnIDpcbiAgICAgICAgKGMgPT09IDB4NTAvKiBQICovKSA/ICdcXHUyMDI5JyA6ICcnO1xufVxuXG5mdW5jdGlvbiBjaGFyRnJvbUNvZGVwb2ludChjKSB7XG4gIGlmIChjIDw9IDB4RkZGRikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICB9XG4gIC8vIEVuY29kZSBVVEYtMTYgc3Vycm9nYXRlIHBhaXJcbiAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVVRGLTE2I0NvZGVfcG9pbnRzX1UuMkIwMTAwMDBfdG9fVS4yQjEwRkZGRlxuICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShcbiAgICAoKGMgLSAweDAxMDAwMCkgPj4gMTApICsgMHhEODAwLFxuICAgICgoYyAtIDB4MDEwMDAwKSAmIDB4MDNGRikgKyAweERDMDBcbiAgKTtcbn1cblxudmFyIHNpbXBsZUVzY2FwZUNoZWNrID0gbmV3IEFycmF5KDI1Nik7IC8vIGludGVnZXIsIGZvciBmYXN0IGFjY2Vzc1xudmFyIHNpbXBsZUVzY2FwZU1hcCA9IG5ldyBBcnJheSgyNTYpO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICBzaW1wbGVFc2NhcGVDaGVja1tpXSA9IHNpbXBsZUVzY2FwZVNlcXVlbmNlKGkpID8gMSA6IDA7XG4gIHNpbXBsZUVzY2FwZU1hcFtpXSA9IHNpbXBsZUVzY2FwZVNlcXVlbmNlKGkpO1xufVxuXG5cbmZ1bmN0aW9uIFN0YXRlJDEoaW5wdXQsIG9wdGlvbnMpIHtcbiAgdGhpcy5pbnB1dCA9IGlucHV0O1xuXG4gIHRoaXMuZmlsZW5hbWUgID0gb3B0aW9uc1snZmlsZW5hbWUnXSAgfHwgbnVsbDtcbiAgdGhpcy5zY2hlbWEgICAgPSBvcHRpb25zWydzY2hlbWEnXSAgICB8fCBfZGVmYXVsdDtcbiAgdGhpcy5vbldhcm5pbmcgPSBvcHRpb25zWydvbldhcm5pbmcnXSB8fCBudWxsO1xuICAvLyAoSGlkZGVuKSBSZW1vdmU/IG1ha2VzIHRoZSBsb2FkZXIgdG8gZXhwZWN0IFlBTUwgMS4xIGRvY3VtZW50c1xuICAvLyBpZiBzdWNoIGRvY3VtZW50cyBoYXZlIG5vIGV4cGxpY2l0ICVZQU1MIGRpcmVjdGl2ZVxuICB0aGlzLmxlZ2FjeSAgICA9IG9wdGlvbnNbJ2xlZ2FjeSddICAgIHx8IGZhbHNlO1xuXG4gIHRoaXMuanNvbiAgICAgID0gb3B0aW9uc1snanNvbiddICAgICAgfHwgZmFsc2U7XG4gIHRoaXMubGlzdGVuZXIgID0gb3B0aW9uc1snbGlzdGVuZXInXSAgfHwgbnVsbDtcblxuICB0aGlzLmltcGxpY2l0VHlwZXMgPSB0aGlzLnNjaGVtYS5jb21waWxlZEltcGxpY2l0O1xuICB0aGlzLnR5cGVNYXAgICAgICAgPSB0aGlzLnNjaGVtYS5jb21waWxlZFR5cGVNYXA7XG5cbiAgdGhpcy5sZW5ndGggICAgID0gaW5wdXQubGVuZ3RoO1xuICB0aGlzLnBvc2l0aW9uICAgPSAwO1xuICB0aGlzLmxpbmUgICAgICAgPSAwO1xuICB0aGlzLmxpbmVTdGFydCAgPSAwO1xuICB0aGlzLmxpbmVJbmRlbnQgPSAwO1xuXG4gIC8vIHBvc2l0aW9uIG9mIGZpcnN0IGxlYWRpbmcgdGFiIGluIHRoZSBjdXJyZW50IGxpbmUsXG4gIC8vIHVzZWQgdG8gbWFrZSBzdXJlIHRoZXJlIGFyZSBubyB0YWJzIGluIHRoZSBpbmRlbnRhdGlvblxuICB0aGlzLmZpcnN0VGFiSW5MaW5lID0gLTE7XG5cbiAgdGhpcy5kb2N1bWVudHMgPSBbXTtcblxuICAvKlxuICB0aGlzLnZlcnNpb247XG4gIHRoaXMuY2hlY2tMaW5lQnJlYWtzO1xuICB0aGlzLnRhZ01hcDtcbiAgdGhpcy5hbmNob3JNYXA7XG4gIHRoaXMudGFnO1xuICB0aGlzLmFuY2hvcjtcbiAgdGhpcy5raW5kO1xuICB0aGlzLnJlc3VsdDsqL1xuXG59XG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVFcnJvcihzdGF0ZSwgbWVzc2FnZSkge1xuICB2YXIgbWFyayA9IHtcbiAgICBuYW1lOiAgICAgc3RhdGUuZmlsZW5hbWUsXG4gICAgYnVmZmVyOiAgIHN0YXRlLmlucHV0LnNsaWNlKDAsIC0xKSwgLy8gb21pdCB0cmFpbGluZyBcXDBcbiAgICBwb3NpdGlvbjogc3RhdGUucG9zaXRpb24sXG4gICAgbGluZTogICAgIHN0YXRlLmxpbmUsXG4gICAgY29sdW1uOiAgIHN0YXRlLnBvc2l0aW9uIC0gc3RhdGUubGluZVN0YXJ0XG4gIH07XG5cbiAgbWFyay5zbmlwcGV0ID0gc25pcHBldChtYXJrKTtcblxuICByZXR1cm4gbmV3IGV4Y2VwdGlvbihtZXNzYWdlLCBtYXJrKTtcbn1cblxuZnVuY3Rpb24gdGhyb3dFcnJvcihzdGF0ZSwgbWVzc2FnZSkge1xuICB0aHJvdyBnZW5lcmF0ZUVycm9yKHN0YXRlLCBtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gdGhyb3dXYXJuaW5nKHN0YXRlLCBtZXNzYWdlKSB7XG4gIGlmIChzdGF0ZS5vbldhcm5pbmcpIHtcbiAgICBzdGF0ZS5vbldhcm5pbmcuY2FsbChudWxsLCBnZW5lcmF0ZUVycm9yKHN0YXRlLCBtZXNzYWdlKSk7XG4gIH1cbn1cblxuXG52YXIgZGlyZWN0aXZlSGFuZGxlcnMgPSB7XG5cbiAgWUFNTDogZnVuY3Rpb24gaGFuZGxlWWFtbERpcmVjdGl2ZShzdGF0ZSwgbmFtZSwgYXJncykge1xuXG4gICAgdmFyIG1hdGNoLCBtYWpvciwgbWlub3I7XG5cbiAgICBpZiAoc3RhdGUudmVyc2lvbiAhPT0gbnVsbCkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2R1cGxpY2F0aW9uIG9mICVZQU1MIGRpcmVjdGl2ZScpO1xuICAgIH1cblxuICAgIGlmIChhcmdzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ1lBTUwgZGlyZWN0aXZlIGFjY2VwdHMgZXhhY3RseSBvbmUgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBtYXRjaCA9IC9eKFswLTldKylcXC4oWzAtOV0rKSQvLmV4ZWMoYXJnc1swXSk7XG5cbiAgICBpZiAobWF0Y2ggPT09IG51bGwpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdpbGwtZm9ybWVkIGFyZ3VtZW50IG9mIHRoZSBZQU1MIGRpcmVjdGl2ZScpO1xuICAgIH1cblxuICAgIG1ham9yID0gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcbiAgICBtaW5vciA9IHBhcnNlSW50KG1hdGNoWzJdLCAxMCk7XG5cbiAgICBpZiAobWFqb3IgIT09IDEpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmFjY2VwdGFibGUgWUFNTCB2ZXJzaW9uIG9mIHRoZSBkb2N1bWVudCcpO1xuICAgIH1cblxuICAgIHN0YXRlLnZlcnNpb24gPSBhcmdzWzBdO1xuICAgIHN0YXRlLmNoZWNrTGluZUJyZWFrcyA9IChtaW5vciA8IDIpO1xuXG4gICAgaWYgKG1pbm9yICE9PSAxICYmIG1pbm9yICE9PSAyKSB7XG4gICAgICB0aHJvd1dhcm5pbmcoc3RhdGUsICd1bnN1cHBvcnRlZCBZQU1MIHZlcnNpb24gb2YgdGhlIGRvY3VtZW50Jyk7XG4gICAgfVxuICB9LFxuXG4gIFRBRzogZnVuY3Rpb24gaGFuZGxlVGFnRGlyZWN0aXZlKHN0YXRlLCBuYW1lLCBhcmdzKSB7XG5cbiAgICB2YXIgaGFuZGxlLCBwcmVmaXg7XG5cbiAgICBpZiAoYXJncy5sZW5ndGggIT09IDIpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdUQUcgZGlyZWN0aXZlIGFjY2VwdHMgZXhhY3RseSB0d28gYXJndW1lbnRzJyk7XG4gICAgfVxuXG4gICAgaGFuZGxlID0gYXJnc1swXTtcbiAgICBwcmVmaXggPSBhcmdzWzFdO1xuXG4gICAgaWYgKCFQQVRURVJOX1RBR19IQU5ETEUudGVzdChoYW5kbGUpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnaWxsLWZvcm1lZCB0YWcgaGFuZGxlIChmaXJzdCBhcmd1bWVudCkgb2YgdGhlIFRBRyBkaXJlY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAoX2hhc093blByb3BlcnR5JDEuY2FsbChzdGF0ZS50YWdNYXAsIGhhbmRsZSkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd0aGVyZSBpcyBhIHByZXZpb3VzbHkgZGVjbGFyZWQgc3VmZml4IGZvciBcIicgKyBoYW5kbGUgKyAnXCIgdGFnIGhhbmRsZScpO1xuICAgIH1cblxuICAgIGlmICghUEFUVEVSTl9UQUdfVVJJLnRlc3QocHJlZml4KSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2lsbC1mb3JtZWQgdGFnIHByZWZpeCAoc2Vjb25kIGFyZ3VtZW50KSBvZiB0aGUgVEFHIGRpcmVjdGl2ZScpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBwcmVmaXggPSBkZWNvZGVVUklDb21wb25lbnQocHJlZml4KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd0YWcgcHJlZml4IGlzIG1hbGZvcm1lZDogJyArIHByZWZpeCk7XG4gICAgfVxuXG4gICAgc3RhdGUudGFnTWFwW2hhbmRsZV0gPSBwcmVmaXg7XG4gIH1cbn07XG5cblxuZnVuY3Rpb24gY2FwdHVyZVNlZ21lbnQoc3RhdGUsIHN0YXJ0LCBlbmQsIGNoZWNrSnNvbikge1xuICB2YXIgX3Bvc2l0aW9uLCBfbGVuZ3RoLCBfY2hhcmFjdGVyLCBfcmVzdWx0O1xuXG4gIGlmIChzdGFydCA8IGVuZCkge1xuICAgIF9yZXN1bHQgPSBzdGF0ZS5pbnB1dC5zbGljZShzdGFydCwgZW5kKTtcblxuICAgIGlmIChjaGVja0pzb24pIHtcbiAgICAgIGZvciAoX3Bvc2l0aW9uID0gMCwgX2xlbmd0aCA9IF9yZXN1bHQubGVuZ3RoOyBfcG9zaXRpb24gPCBfbGVuZ3RoOyBfcG9zaXRpb24gKz0gMSkge1xuICAgICAgICBfY2hhcmFjdGVyID0gX3Jlc3VsdC5jaGFyQ29kZUF0KF9wb3NpdGlvbik7XG4gICAgICAgIGlmICghKF9jaGFyYWN0ZXIgPT09IDB4MDkgfHxcbiAgICAgICAgICAgICAgKDB4MjAgPD0gX2NoYXJhY3RlciAmJiBfY2hhcmFjdGVyIDw9IDB4MTBGRkZGKSkpIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZXhwZWN0ZWQgdmFsaWQgSlNPTiBjaGFyYWN0ZXInKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoUEFUVEVSTl9OT05fUFJJTlRBQkxFLnRlc3QoX3Jlc3VsdCkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd0aGUgc3RyZWFtIGNvbnRhaW5zIG5vbi1wcmludGFibGUgY2hhcmFjdGVycycpO1xuICAgIH1cblxuICAgIHN0YXRlLnJlc3VsdCArPSBfcmVzdWx0O1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlTWFwcGluZ3Moc3RhdGUsIGRlc3RpbmF0aW9uLCBzb3VyY2UsIG92ZXJyaWRhYmxlS2V5cykge1xuICB2YXIgc291cmNlS2V5cywga2V5LCBpbmRleCwgcXVhbnRpdHk7XG5cbiAgaWYgKCFjb21tb24uaXNPYmplY3Qoc291cmNlKSkge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICdjYW5ub3QgbWVyZ2UgbWFwcGluZ3M7IHRoZSBwcm92aWRlZCBzb3VyY2Ugb2JqZWN0IGlzIHVuYWNjZXB0YWJsZScpO1xuICB9XG5cbiAgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG5cbiAgZm9yIChpbmRleCA9IDAsIHF1YW50aXR5ID0gc291cmNlS2V5cy5sZW5ndGg7IGluZGV4IDwgcXVhbnRpdHk7IGluZGV4ICs9IDEpIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2luZGV4XTtcblxuICAgIGlmICghX2hhc093blByb3BlcnR5JDEuY2FsbChkZXN0aW5hdGlvbiwga2V5KSkge1xuICAgICAgZGVzdGluYXRpb25ba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgb3ZlcnJpZGFibGVLZXlzW2tleV0gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgdmFsdWVOb2RlLFxuICBzdGFydExpbmUsIHN0YXJ0TGluZVN0YXJ0LCBzdGFydFBvcykge1xuXG4gIHZhciBpbmRleCwgcXVhbnRpdHk7XG5cbiAgLy8gVGhlIG91dHB1dCBpcyBhIHBsYWluIG9iamVjdCBoZXJlLCBzbyBrZXlzIGNhbiBvbmx5IGJlIHN0cmluZ3MuXG4gIC8vIFdlIG5lZWQgdG8gY29udmVydCBrZXlOb2RlIHRvIGEgc3RyaW5nLCBidXQgZG9pbmcgc28gY2FuIGhhbmcgdGhlIHByb2Nlc3NcbiAgLy8gKGRlZXBseSBuZXN0ZWQgYXJyYXlzIHRoYXQgZXhwbG9kZSBleHBvbmVudGlhbGx5IHVzaW5nIGFsaWFzZXMpLlxuICBpZiAoQXJyYXkuaXNBcnJheShrZXlOb2RlKSkge1xuICAgIGtleU5vZGUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChrZXlOb2RlKTtcblxuICAgIGZvciAoaW5kZXggPSAwLCBxdWFudGl0eSA9IGtleU5vZGUubGVuZ3RoOyBpbmRleCA8IHF1YW50aXR5OyBpbmRleCArPSAxKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXlOb2RlW2luZGV4XSkpIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ25lc3RlZCBhcnJheXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW5zaWRlIGtleXMnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBrZXlOb2RlID09PSAnb2JqZWN0JyAmJiBfY2xhc3Moa2V5Tm9kZVtpbmRleF0pID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICBrZXlOb2RlW2luZGV4XSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEF2b2lkIGNvZGUgZXhlY3V0aW9uIGluIGxvYWQoKSB2aWEgdG9TdHJpbmcgcHJvcGVydHlcbiAgLy8gKHN0aWxsIHVzZSBpdHMgb3duIHRvU3RyaW5nIGZvciBhcnJheXMsIHRpbWVzdGFtcHMsXG4gIC8vIGFuZCB3aGF0ZXZlciB1c2VyIHNjaGVtYSBleHRlbnNpb25zIGhhcHBlbiB0byBoYXZlIEBAdG9TdHJpbmdUYWcpXG4gIGlmICh0eXBlb2Yga2V5Tm9kZSA9PT0gJ29iamVjdCcgJiYgX2NsYXNzKGtleU5vZGUpID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGtleU5vZGUgPSAnW29iamVjdCBPYmplY3RdJztcbiAgfVxuXG5cbiAga2V5Tm9kZSA9IFN0cmluZyhrZXlOb2RlKTtcblxuICBpZiAoX3Jlc3VsdCA9PT0gbnVsbCkge1xuICAgIF9yZXN1bHQgPSB7fTtcbiAgfVxuXG4gIGlmIChrZXlUYWcgPT09ICd0YWc6eWFtbC5vcmcsMjAwMjptZXJnZScpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZU5vZGUpKSB7XG4gICAgICBmb3IgKGluZGV4ID0gMCwgcXVhbnRpdHkgPSB2YWx1ZU5vZGUubGVuZ3RoOyBpbmRleCA8IHF1YW50aXR5OyBpbmRleCArPSAxKSB7XG4gICAgICAgIG1lcmdlTWFwcGluZ3Moc3RhdGUsIF9yZXN1bHQsIHZhbHVlTm9kZVtpbmRleF0sIG92ZXJyaWRhYmxlS2V5cyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lcmdlTWFwcGluZ3Moc3RhdGUsIF9yZXN1bHQsIHZhbHVlTm9kZSwgb3ZlcnJpZGFibGVLZXlzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFzdGF0ZS5qc29uICYmXG4gICAgICAgICFfaGFzT3duUHJvcGVydHkkMS5jYWxsKG92ZXJyaWRhYmxlS2V5cywga2V5Tm9kZSkgJiZcbiAgICAgICAgX2hhc093blByb3BlcnR5JDEuY2FsbChfcmVzdWx0LCBrZXlOb2RlKSkge1xuICAgICAgc3RhdGUubGluZSA9IHN0YXJ0TGluZSB8fCBzdGF0ZS5saW5lO1xuICAgICAgc3RhdGUubGluZVN0YXJ0ID0gc3RhcnRMaW5lU3RhcnQgfHwgc3RhdGUubGluZVN0YXJ0O1xuICAgICAgc3RhdGUucG9zaXRpb24gPSBzdGFydFBvcyB8fCBzdGF0ZS5wb3NpdGlvbjtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdkdXBsaWNhdGVkIG1hcHBpbmcga2V5Jyk7XG4gICAgfVxuXG4gICAgLy8gdXNlZCBmb3IgdGhpcyBzcGVjaWZpYyBrZXkgb25seSBiZWNhdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBpcyBzbG93XG4gICAgaWYgKGtleU5vZGUgPT09ICdfX3Byb3RvX18nKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX3Jlc3VsdCwga2V5Tm9kZSwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogdmFsdWVOb2RlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3Jlc3VsdFtrZXlOb2RlXSA9IHZhbHVlTm9kZTtcbiAgICB9XG4gICAgZGVsZXRlIG92ZXJyaWRhYmxlS2V5c1trZXlOb2RlXTtcbiAgfVxuXG4gIHJldHVybiBfcmVzdWx0O1xufVxuXG5mdW5jdGlvbiByZWFkTGluZUJyZWFrKHN0YXRlKSB7XG4gIHZhciBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCA9PT0gMHgwQS8qIExGICovKSB7XG4gICAgc3RhdGUucG9zaXRpb24rKztcbiAgfSBlbHNlIGlmIChjaCA9PT0gMHgwRC8qIENSICovKSB7XG4gICAgc3RhdGUucG9zaXRpb24rKztcbiAgICBpZiAoc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikgPT09IDB4MEEvKiBMRiAqLykge1xuICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ2EgbGluZSBicmVhayBpcyBleHBlY3RlZCcpO1xuICB9XG5cbiAgc3RhdGUubGluZSArPSAxO1xuICBzdGF0ZS5saW5lU3RhcnQgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgc3RhdGUuZmlyc3RUYWJJbkxpbmUgPSAtMTtcbn1cblxuZnVuY3Rpb24gc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgYWxsb3dDb21tZW50cywgY2hlY2tJbmRlbnQpIHtcbiAgdmFyIGxpbmVCcmVha3MgPSAwLFxuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICB3aGlsZSAoaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgICBpZiAoY2ggPT09IDB4MDkvKiBUYWIgKi8gJiYgc3RhdGUuZmlyc3RUYWJJbkxpbmUgPT09IC0xKSB7XG4gICAgICAgIHN0YXRlLmZpcnN0VGFiSW5MaW5lID0gc3RhdGUucG9zaXRpb247XG4gICAgICB9XG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKGFsbG93Q29tbWVudHMgJiYgY2ggPT09IDB4MjMvKiAjICovKSB7XG4gICAgICBkbyB7XG4gICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICAgIH0gd2hpbGUgKGNoICE9PSAweDBBLyogTEYgKi8gJiYgY2ggIT09IDB4MEQvKiBDUiAqLyAmJiBjaCAhPT0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGlzX0VPTChjaCkpIHtcbiAgICAgIHJlYWRMaW5lQnJlYWsoc3RhdGUpO1xuXG4gICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuICAgICAgbGluZUJyZWFrcysrO1xuICAgICAgc3RhdGUubGluZUluZGVudCA9IDA7XG5cbiAgICAgIHdoaWxlIChjaCA9PT0gMHgyMC8qIFNwYWNlICovKSB7XG4gICAgICAgIHN0YXRlLmxpbmVJbmRlbnQrKztcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoY2hlY2tJbmRlbnQgIT09IC0xICYmIGxpbmVCcmVha3MgIT09IDAgJiYgc3RhdGUubGluZUluZGVudCA8IGNoZWNrSW5kZW50KSB7XG4gICAgdGhyb3dXYXJuaW5nKHN0YXRlLCAnZGVmaWNpZW50IGluZGVudGF0aW9uJyk7XG4gIH1cblxuICByZXR1cm4gbGluZUJyZWFrcztcbn1cblxuZnVuY3Rpb24gdGVzdERvY3VtZW50U2VwYXJhdG9yKHN0YXRlKSB7XG4gIHZhciBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbixcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChfcG9zaXRpb24pO1xuXG4gIC8vIENvbmRpdGlvbiBzdGF0ZS5wb3NpdGlvbiA9PT0gc3RhdGUubGluZVN0YXJ0IGlzIHRlc3RlZFxuICAvLyBpbiBwYXJlbnQgb24gZWFjaCBjYWxsLCBmb3IgZWZmaWNpZW5jeS4gTm8gbmVlZHMgdG8gdGVzdCBoZXJlIGFnYWluLlxuICBpZiAoKGNoID09PSAweDJELyogLSAqLyB8fCBjaCA9PT0gMHgyRS8qIC4gKi8pICYmXG4gICAgICBjaCA9PT0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChfcG9zaXRpb24gKyAxKSAmJlxuICAgICAgY2ggPT09IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoX3Bvc2l0aW9uICsgMikpIHtcblxuICAgIF9wb3NpdGlvbiArPSAzO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KF9wb3NpdGlvbik7XG5cbiAgICBpZiAoY2ggPT09IDAgfHwgaXNfV1NfT1JfRU9MKGNoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB3cml0ZUZvbGRlZExpbmVzKHN0YXRlLCBjb3VudCkge1xuICBpZiAoY291bnQgPT09IDEpIHtcbiAgICBzdGF0ZS5yZXN1bHQgKz0gJyAnO1xuICB9IGVsc2UgaWYgKGNvdW50ID4gMSkge1xuICAgIHN0YXRlLnJlc3VsdCArPSBjb21tb24ucmVwZWF0KCdcXG4nLCBjb3VudCAtIDEpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gcmVhZFBsYWluU2NhbGFyKHN0YXRlLCBub2RlSW5kZW50LCB3aXRoaW5GbG93Q29sbGVjdGlvbikge1xuICB2YXIgcHJlY2VkaW5nLFxuICAgICAgZm9sbG93aW5nLFxuICAgICAgY2FwdHVyZVN0YXJ0LFxuICAgICAgY2FwdHVyZUVuZCxcbiAgICAgIGhhc1BlbmRpbmdDb250ZW50LFxuICAgICAgX2xpbmUsXG4gICAgICBfbGluZVN0YXJ0LFxuICAgICAgX2xpbmVJbmRlbnQsXG4gICAgICBfa2luZCA9IHN0YXRlLmtpbmQsXG4gICAgICBfcmVzdWx0ID0gc3RhdGUucmVzdWx0LFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoaXNfV1NfT1JfRU9MKGNoKSAgICAgIHx8XG4gICAgICBpc19GTE9XX0lORElDQVRPUihjaCkgfHxcbiAgICAgIGNoID09PSAweDIzLyogIyAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MjYvKiAmICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgyQS8qICogKi8gICAgfHxcbiAgICAgIGNoID09PSAweDIxLyogISAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4N0MvKiB8ICovICAgIHx8XG4gICAgICBjaCA9PT0gMHgzRS8qID4gKi8gICAgfHxcbiAgICAgIGNoID09PSAweDI3LyogJyAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MjIvKiBcIiAqLyAgICB8fFxuICAgICAgY2ggPT09IDB4MjUvKiAlICovICAgIHx8XG4gICAgICBjaCA9PT0gMHg0MC8qIEAgKi8gICAgfHxcbiAgICAgIGNoID09PSAweDYwLyogYCAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChjaCA9PT0gMHgzRi8qID8gKi8gfHwgY2ggPT09IDB4MkQvKiAtICovKSB7XG4gICAgZm9sbG93aW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpO1xuXG4gICAgaWYgKGlzX1dTX09SX0VPTChmb2xsb3dpbmcpIHx8XG4gICAgICAgIHdpdGhpbkZsb3dDb2xsZWN0aW9uICYmIGlzX0ZMT1dfSU5ESUNBVE9SKGZvbGxvd2luZykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5raW5kID0gJ3NjYWxhcic7XG4gIHN0YXRlLnJlc3VsdCA9ICcnO1xuICBjYXB0dXJlU3RhcnQgPSBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG4gIGhhc1BlbmRpbmdDb250ZW50ID0gZmFsc2U7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgaWYgKGNoID09PSAweDNBLyogOiAqLykge1xuICAgICAgZm9sbG93aW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpO1xuXG4gICAgICBpZiAoaXNfV1NfT1JfRU9MKGZvbGxvd2luZykgfHxcbiAgICAgICAgICB3aXRoaW5GbG93Q29sbGVjdGlvbiAmJiBpc19GTE9XX0lORElDQVRPUihmb2xsb3dpbmcpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChjaCA9PT0gMHgyMy8qICMgKi8pIHtcbiAgICAgIHByZWNlZGluZyA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gLSAxKTtcblxuICAgICAgaWYgKGlzX1dTX09SX0VPTChwcmVjZWRpbmcpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICgoc3RhdGUucG9zaXRpb24gPT09IHN0YXRlLmxpbmVTdGFydCAmJiB0ZXN0RG9jdW1lbnRTZXBhcmF0b3Ioc3RhdGUpKSB8fFxuICAgICAgICAgICAgICAgd2l0aGluRmxvd0NvbGxlY3Rpb24gJiYgaXNfRkxPV19JTkRJQ0FUT1IoY2gpKSB7XG4gICAgICBicmVhaztcblxuICAgIH0gZWxzZSBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgX2xpbmUgPSBzdGF0ZS5saW5lO1xuICAgICAgX2xpbmVTdGFydCA9IHN0YXRlLmxpbmVTdGFydDtcbiAgICAgIF9saW5lSW5kZW50ID0gc3RhdGUubGluZUluZGVudDtcbiAgICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIGZhbHNlLCAtMSk7XG5cbiAgICAgIGlmIChzdGF0ZS5saW5lSW5kZW50ID49IG5vZGVJbmRlbnQpIHtcbiAgICAgICAgaGFzUGVuZGluZ0NvbnRlbnQgPSB0cnVlO1xuICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnBvc2l0aW9uID0gY2FwdHVyZUVuZDtcbiAgICAgICAgc3RhdGUubGluZSA9IF9saW5lO1xuICAgICAgICBzdGF0ZS5saW5lU3RhcnQgPSBfbGluZVN0YXJ0O1xuICAgICAgICBzdGF0ZS5saW5lSW5kZW50ID0gX2xpbmVJbmRlbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNQZW5kaW5nQ29udGVudCkge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgY2FwdHVyZUVuZCwgZmFsc2UpO1xuICAgICAgd3JpdGVGb2xkZWRMaW5lcyhzdGF0ZSwgc3RhdGUubGluZSAtIF9saW5lKTtcbiAgICAgIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgICAgIGhhc1BlbmRpbmdDb250ZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICAgIGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbiArIDE7XG4gICAgfVxuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICB9XG5cbiAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgY2FwdHVyZUVuZCwgZmFsc2UpO1xuXG4gIGlmIChzdGF0ZS5yZXN1bHQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRlLmtpbmQgPSBfa2luZDtcbiAgc3RhdGUucmVzdWx0ID0gX3Jlc3VsdDtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZWFkU2luZ2xlUXVvdGVkU2NhbGFyKHN0YXRlLCBub2RlSW5kZW50KSB7XG4gIHZhciBjaCxcbiAgICAgIGNhcHR1cmVTdGFydCwgY2FwdHVyZUVuZDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCAhPT0gMHgyNy8qICcgKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdGF0ZS5raW5kID0gJ3NjYWxhcic7XG4gIHN0YXRlLnJlc3VsdCA9ICcnO1xuICBzdGF0ZS5wb3NpdGlvbisrO1xuICBjYXB0dXJlU3RhcnQgPSBjYXB0dXJlRW5kID0gc3RhdGUucG9zaXRpb247XG5cbiAgd2hpbGUgKChjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pKSAhPT0gMCkge1xuICAgIGlmIChjaCA9PT0gMHgyNy8qICcgKi8pIHtcbiAgICAgIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIHN0YXRlLnBvc2l0aW9uLCB0cnVlKTtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICAgICAgaWYgKGNoID09PSAweDI3LyogJyAqLykge1xuICAgICAgICBjYXB0dXJlU3RhcnQgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICAgICAgY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKGlzX0VPTChjaCkpIHtcbiAgICAgIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIGNhcHR1cmVFbmQsIHRydWUpO1xuICAgICAgd3JpdGVGb2xkZWRMaW5lcyhzdGF0ZSwgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgZmFsc2UsIG5vZGVJbmRlbnQpKTtcbiAgICAgIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgIH0gZWxzZSBpZiAoc3RhdGUucG9zaXRpb24gPT09IHN0YXRlLmxpbmVTdGFydCAmJiB0ZXN0RG9jdW1lbnRTZXBhcmF0b3Ioc3RhdGUpKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5leHBlY3RlZCBlbmQgb2YgdGhlIGRvY3VtZW50IHdpdGhpbiBhIHNpbmdsZSBxdW90ZWQgc2NhbGFyJyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICAgIGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICB0aHJvd0Vycm9yKHN0YXRlLCAndW5leHBlY3RlZCBlbmQgb2YgdGhlIHN0cmVhbSB3aXRoaW4gYSBzaW5nbGUgcXVvdGVkIHNjYWxhcicpO1xufVxuXG5mdW5jdGlvbiByZWFkRG91YmxlUXVvdGVkU2NhbGFyKHN0YXRlLCBub2RlSW5kZW50KSB7XG4gIHZhciBjYXB0dXJlU3RhcnQsXG4gICAgICBjYXB0dXJlRW5kLFxuICAgICAgaGV4TGVuZ3RoLFxuICAgICAgaGV4UmVzdWx0LFxuICAgICAgdG1wLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggIT09IDB4MjIvKiBcIiAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRlLmtpbmQgPSAnc2NhbGFyJztcbiAgc3RhdGUucmVzdWx0ID0gJyc7XG4gIHN0YXRlLnBvc2l0aW9uKys7XG4gIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICB3aGlsZSAoKGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikpICE9PSAwKSB7XG4gICAgaWYgKGNoID09PSAweDIyLyogXCIgKi8pIHtcbiAgICAgIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIHN0YXRlLnBvc2l0aW9uLCB0cnVlKTtcbiAgICAgIHN0YXRlLnBvc2l0aW9uKys7XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIH0gZWxzZSBpZiAoY2ggPT09IDB4NUMvKiBcXCAqLykge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgc3RhdGUucG9zaXRpb24sIHRydWUpO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gICAgICBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCBmYWxzZSwgbm9kZUluZGVudCk7XG5cbiAgICAgICAgLy8gVE9ETzogcmV3b3JrIHRvIGlubGluZSBmbiB3aXRoIG5vIHR5cGUgY2FzdD9cbiAgICAgIH0gZWxzZSBpZiAoY2ggPCAyNTYgJiYgc2ltcGxlRXNjYXBlQ2hlY2tbY2hdKSB7XG4gICAgICAgIHN0YXRlLnJlc3VsdCArPSBzaW1wbGVFc2NhcGVNYXBbY2hdO1xuICAgICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuXG4gICAgICB9IGVsc2UgaWYgKCh0bXAgPSBlc2NhcGVkSGV4TGVuKGNoKSkgPiAwKSB7XG4gICAgICAgIGhleExlbmd0aCA9IHRtcDtcbiAgICAgICAgaGV4UmVzdWx0ID0gMDtcblxuICAgICAgICBmb3IgKDsgaGV4TGVuZ3RoID4gMDsgaGV4TGVuZ3RoLS0pIHtcbiAgICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICAgICAgICBpZiAoKHRtcCA9IGZyb21IZXhDb2RlKGNoKSkgPj0gMCkge1xuICAgICAgICAgICAgaGV4UmVzdWx0ID0gKGhleFJlc3VsdCA8PCA0KSArIHRtcDtcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZXhwZWN0ZWQgaGV4YWRlY2ltYWwgY2hhcmFjdGVyJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IGNoYXJGcm9tQ29kZXBvaW50KGhleFJlc3VsdCk7XG5cbiAgICAgICAgc3RhdGUucG9zaXRpb24rKztcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3Vua25vd24gZXNjYXBlIHNlcXVlbmNlJyk7XG4gICAgICB9XG5cbiAgICAgIGNhcHR1cmVTdGFydCA9IGNhcHR1cmVFbmQgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgIH0gZWxzZSBpZiAoaXNfRU9MKGNoKSkge1xuICAgICAgY2FwdHVyZVNlZ21lbnQoc3RhdGUsIGNhcHR1cmVTdGFydCwgY2FwdHVyZUVuZCwgdHJ1ZSk7XG4gICAgICB3cml0ZUZvbGRlZExpbmVzKHN0YXRlLCBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCBmYWxzZSwgbm9kZUluZGVudCkpO1xuICAgICAgY2FwdHVyZVN0YXJ0ID0gY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuXG4gICAgfSBlbHNlIGlmIChzdGF0ZS5wb3NpdGlvbiA9PT0gc3RhdGUubGluZVN0YXJ0ICYmIHRlc3REb2N1bWVudFNlcGFyYXRvcihzdGF0ZSkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgZG9jdW1lbnQgd2l0aGluIGEgZG91YmxlIHF1b3RlZCBzY2FsYXInKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgY2FwdHVyZUVuZCA9IHN0YXRlLnBvc2l0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHRocm93RXJyb3Ioc3RhdGUsICd1bmV4cGVjdGVkIGVuZCBvZiB0aGUgc3RyZWFtIHdpdGhpbiBhIGRvdWJsZSBxdW90ZWQgc2NhbGFyJyk7XG59XG5cbmZ1bmN0aW9uIHJlYWRGbG93Q29sbGVjdGlvbihzdGF0ZSwgbm9kZUluZGVudCkge1xuICB2YXIgcmVhZE5leHQgPSB0cnVlLFxuICAgICAgX2xpbmUsXG4gICAgICBfbGluZVN0YXJ0LFxuICAgICAgX3BvcyxcbiAgICAgIF90YWcgICAgID0gc3RhdGUudGFnLFxuICAgICAgX3Jlc3VsdCxcbiAgICAgIF9hbmNob3IgID0gc3RhdGUuYW5jaG9yLFxuICAgICAgZm9sbG93aW5nLFxuICAgICAgdGVybWluYXRvcixcbiAgICAgIGlzUGFpcixcbiAgICAgIGlzRXhwbGljaXRQYWlyLFxuICAgICAgaXNNYXBwaW5nLFxuICAgICAgb3ZlcnJpZGFibGVLZXlzID0gT2JqZWN0LmNyZWF0ZShudWxsKSxcbiAgICAgIGtleU5vZGUsXG4gICAgICBrZXlUYWcsXG4gICAgICB2YWx1ZU5vZGUsXG4gICAgICBjaDtcblxuICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gIGlmIChjaCA9PT0gMHg1Qi8qIFsgKi8pIHtcbiAgICB0ZXJtaW5hdG9yID0gMHg1RDsvKiBdICovXG4gICAgaXNNYXBwaW5nID0gZmFsc2U7XG4gICAgX3Jlc3VsdCA9IFtdO1xuICB9IGVsc2UgaWYgKGNoID09PSAweDdCLyogeyAqLykge1xuICAgIHRlcm1pbmF0b3IgPSAweDdEOy8qIH0gKi9cbiAgICBpc01hcHBpbmcgPSB0cnVlO1xuICAgIF9yZXN1bHQgPSB7fTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgc3RhdGUuYW5jaG9yTWFwW3N0YXRlLmFuY2hvcl0gPSBfcmVzdWx0O1xuICB9XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gIHdoaWxlIChjaCAhPT0gMCkge1xuICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIG5vZGVJbmRlbnQpO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmIChjaCA9PT0gdGVybWluYXRvcikge1xuICAgICAgc3RhdGUucG9zaXRpb24rKztcbiAgICAgIHN0YXRlLnRhZyA9IF90YWc7XG4gICAgICBzdGF0ZS5hbmNob3IgPSBfYW5jaG9yO1xuICAgICAgc3RhdGUua2luZCA9IGlzTWFwcGluZyA/ICdtYXBwaW5nJyA6ICdzZXF1ZW5jZSc7XG4gICAgICBzdGF0ZS5yZXN1bHQgPSBfcmVzdWx0O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICghcmVhZE5leHQpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdtaXNzZWQgY29tbWEgYmV0d2VlbiBmbG93IGNvbGxlY3Rpb24gZW50cmllcycpO1xuICAgIH0gZWxzZSBpZiAoY2ggPT09IDB4MkMvKiAsICovKSB7XG4gICAgICAvLyBcImZsb3cgY29sbGVjdGlvbiBlbnRyaWVzIGNhbiBuZXZlciBiZSBjb21wbGV0ZWx5IGVtcHR5XCIsIGFzIHBlciBZQU1MIDEuMiwgc2VjdGlvbiA3LjRcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsIFwiZXhwZWN0ZWQgdGhlIG5vZGUgY29udGVudCwgYnV0IGZvdW5kICcsJ1wiKTtcbiAgICB9XG5cbiAgICBrZXlUYWcgPSBrZXlOb2RlID0gdmFsdWVOb2RlID0gbnVsbDtcbiAgICBpc1BhaXIgPSBpc0V4cGxpY2l0UGFpciA9IGZhbHNlO1xuXG4gICAgaWYgKGNoID09PSAweDNGLyogPyAqLykge1xuICAgICAgZm9sbG93aW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpO1xuXG4gICAgICBpZiAoaXNfV1NfT1JfRU9MKGZvbGxvd2luZykpIHtcbiAgICAgICAgaXNQYWlyID0gaXNFeHBsaWNpdFBhaXIgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5wb3NpdGlvbisrO1xuICAgICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCBub2RlSW5kZW50KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfbGluZSA9IHN0YXRlLmxpbmU7IC8vIFNhdmUgdGhlIGN1cnJlbnQgbGluZS5cbiAgICBfbGluZVN0YXJ0ID0gc3RhdGUubGluZVN0YXJ0O1xuICAgIF9wb3MgPSBzdGF0ZS5wb3NpdGlvbjtcbiAgICBjb21wb3NlTm9kZShzdGF0ZSwgbm9kZUluZGVudCwgQ09OVEVYVF9GTE9XX0lOLCBmYWxzZSwgdHJ1ZSk7XG4gICAga2V5VGFnID0gc3RhdGUudGFnO1xuICAgIGtleU5vZGUgPSBzdGF0ZS5yZXN1bHQ7XG4gICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgbm9kZUluZGVudCk7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKChpc0V4cGxpY2l0UGFpciB8fCBzdGF0ZS5saW5lID09PSBfbGluZSkgJiYgY2ggPT09IDB4M0EvKiA6ICovKSB7XG4gICAgICBpc1BhaXIgPSB0cnVlO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgbm9kZUluZGVudCk7XG4gICAgICBjb21wb3NlTm9kZShzdGF0ZSwgbm9kZUluZGVudCwgQ09OVEVYVF9GTE9XX0lOLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICB2YWx1ZU5vZGUgPSBzdGF0ZS5yZXN1bHQ7XG4gICAgfVxuXG4gICAgaWYgKGlzTWFwcGluZykge1xuICAgICAgc3RvcmVNYXBwaW5nUGFpcihzdGF0ZSwgX3Jlc3VsdCwgb3ZlcnJpZGFibGVLZXlzLCBrZXlUYWcsIGtleU5vZGUsIHZhbHVlTm9kZSwgX2xpbmUsIF9saW5lU3RhcnQsIF9wb3MpO1xuICAgIH0gZWxzZSBpZiAoaXNQYWlyKSB7XG4gICAgICBfcmVzdWx0LnB1c2goc3RvcmVNYXBwaW5nUGFpcihzdGF0ZSwgbnVsbCwgb3ZlcnJpZGFibGVLZXlzLCBrZXlUYWcsIGtleU5vZGUsIHZhbHVlTm9kZSwgX2xpbmUsIF9saW5lU3RhcnQsIF9wb3MpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3Jlc3VsdC5wdXNoKGtleU5vZGUpO1xuICAgIH1cblxuICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIG5vZGVJbmRlbnQpO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmIChjaCA9PT0gMHgyQy8qICwgKi8pIHtcbiAgICAgIHJlYWROZXh0ID0gdHJ1ZTtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVhZE5leHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICB0aHJvd0Vycm9yKHN0YXRlLCAndW5leHBlY3RlZCBlbmQgb2YgdGhlIHN0cmVhbSB3aXRoaW4gYSBmbG93IGNvbGxlY3Rpb24nKTtcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2NrU2NhbGFyKHN0YXRlLCBub2RlSW5kZW50KSB7XG4gIHZhciBjYXB0dXJlU3RhcnQsXG4gICAgICBmb2xkaW5nLFxuICAgICAgY2hvbXBpbmcgICAgICAgPSBDSE9NUElOR19DTElQLFxuICAgICAgZGlkUmVhZENvbnRlbnQgPSBmYWxzZSxcbiAgICAgIGRldGVjdGVkSW5kZW50ID0gZmFsc2UsXG4gICAgICB0ZXh0SW5kZW50ICAgICA9IG5vZGVJbmRlbnQsXG4gICAgICBlbXB0eUxpbmVzICAgICA9IDAsXG4gICAgICBhdE1vcmVJbmRlbnRlZCA9IGZhbHNlLFxuICAgICAgdG1wLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggPT09IDB4N0MvKiB8ICovKSB7XG4gICAgZm9sZGluZyA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGNoID09PSAweDNFLyogPiAqLykge1xuICAgIGZvbGRpbmcgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0YXRlLmtpbmQgPSAnc2NhbGFyJztcbiAgc3RhdGUucmVzdWx0ID0gJyc7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gICAgaWYgKGNoID09PSAweDJCLyogKyAqLyB8fCBjaCA9PT0gMHgyRC8qIC0gKi8pIHtcbiAgICAgIGlmIChDSE9NUElOR19DTElQID09PSBjaG9tcGluZykge1xuICAgICAgICBjaG9tcGluZyA9IChjaCA9PT0gMHgyQi8qICsgKi8pID8gQ0hPTVBJTkdfS0VFUCA6IENIT01QSU5HX1NUUklQO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3JlcGVhdCBvZiBhIGNob21waW5nIG1vZGUgaWRlbnRpZmllcicpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmICgodG1wID0gZnJvbURlY2ltYWxDb2RlKGNoKSkgPj0gMCkge1xuICAgICAgaWYgKHRtcCA9PT0gMCkge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYmFkIGV4cGxpY2l0IGluZGVudGF0aW9uIHdpZHRoIG9mIGEgYmxvY2sgc2NhbGFyOyBpdCBjYW5ub3QgYmUgbGVzcyB0aGFuIG9uZScpO1xuICAgICAgfSBlbHNlIGlmICghZGV0ZWN0ZWRJbmRlbnQpIHtcbiAgICAgICAgdGV4dEluZGVudCA9IG5vZGVJbmRlbnQgKyB0bXAgLSAxO1xuICAgICAgICBkZXRlY3RlZEluZGVudCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAncmVwZWF0IG9mIGFuIGluZGVudGF0aW9uIHdpZHRoIGlkZW50aWZpZXInKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgZG8geyBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7IH1cbiAgICB3aGlsZSAoaXNfV0hJVEVfU1BBQ0UoY2gpKTtcblxuICAgIGlmIChjaCA9PT0gMHgyMy8qICMgKi8pIHtcbiAgICAgIGRvIHsgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pOyB9XG4gICAgICB3aGlsZSAoIWlzX0VPTChjaCkgJiYgKGNoICE9PSAwKSk7XG4gICAgfVxuICB9XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgcmVhZExpbmVCcmVhayhzdGF0ZSk7XG4gICAgc3RhdGUubGluZUluZGVudCA9IDA7XG5cbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgd2hpbGUgKCghZGV0ZWN0ZWRJbmRlbnQgfHwgc3RhdGUubGluZUluZGVudCA8IHRleHRJbmRlbnQpICYmXG4gICAgICAgICAgIChjaCA9PT0gMHgyMC8qIFNwYWNlICovKSkge1xuICAgICAgc3RhdGUubGluZUluZGVudCsrO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGlmICghZGV0ZWN0ZWRJbmRlbnQgJiYgc3RhdGUubGluZUluZGVudCA+IHRleHRJbmRlbnQpIHtcbiAgICAgIHRleHRJbmRlbnQgPSBzdGF0ZS5saW5lSW5kZW50O1xuICAgIH1cblxuICAgIGlmIChpc19FT0woY2gpKSB7XG4gICAgICBlbXB0eUxpbmVzKys7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBFbmQgb2YgdGhlIHNjYWxhci5cbiAgICBpZiAoc3RhdGUubGluZUluZGVudCA8IHRleHRJbmRlbnQpIHtcblxuICAgICAgLy8gUGVyZm9ybSB0aGUgY2hvbXBpbmcuXG4gICAgICBpZiAoY2hvbXBpbmcgPT09IENIT01QSU5HX0tFRVApIHtcbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJ1xcbicsIGRpZFJlYWRDb250ZW50ID8gMSArIGVtcHR5TGluZXMgOiBlbXB0eUxpbmVzKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hvbXBpbmcgPT09IENIT01QSU5HX0NMSVApIHtcbiAgICAgICAgaWYgKGRpZFJlYWRDb250ZW50KSB7IC8vIGkuZS4gb25seSBpZiB0aGUgc2NhbGFyIGlzIG5vdCBlbXB0eS5cbiAgICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gJ1xcbic7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQnJlYWsgdGhpcyBgd2hpbGVgIGN5Y2xlIGFuZCBnbyB0byB0aGUgZnVuY2l0b24ncyBlcGlsb2d1ZS5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIEZvbGRlZCBzdHlsZTogdXNlIGZhbmN5IHJ1bGVzIHRvIGhhbmRsZSBsaW5lIGJyZWFrcy5cbiAgICBpZiAoZm9sZGluZykge1xuXG4gICAgICAvLyBMaW5lcyBzdGFydGluZyB3aXRoIHdoaXRlIHNwYWNlIGNoYXJhY3RlcnMgKG1vcmUtaW5kZW50ZWQgbGluZXMpIGFyZSBub3QgZm9sZGVkLlxuICAgICAgaWYgKGlzX1dISVRFX1NQQUNFKGNoKSkge1xuICAgICAgICBhdE1vcmVJbmRlbnRlZCA9IHRydWU7XG4gICAgICAgIC8vIGV4Y2VwdCBmb3IgdGhlIGZpcnN0IGNvbnRlbnQgbGluZSAoY2YuIEV4YW1wbGUgOC4xKVxuICAgICAgICBzdGF0ZS5yZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnXFxuJywgZGlkUmVhZENvbnRlbnQgPyAxICsgZW1wdHlMaW5lcyA6IGVtcHR5TGluZXMpO1xuXG4gICAgICAvLyBFbmQgb2YgbW9yZS1pbmRlbnRlZCBibG9jay5cbiAgICAgIH0gZWxzZSBpZiAoYXRNb3JlSW5kZW50ZWQpIHtcbiAgICAgICAgYXRNb3JlSW5kZW50ZWQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucmVzdWx0ICs9IGNvbW1vbi5yZXBlYXQoJ1xcbicsIGVtcHR5TGluZXMgKyAxKTtcblxuICAgICAgLy8gSnVzdCBvbmUgbGluZSBicmVhayAtIHBlcmNlaXZlIGFzIHRoZSBzYW1lIGxpbmUuXG4gICAgICB9IGVsc2UgaWYgKGVtcHR5TGluZXMgPT09IDApIHtcbiAgICAgICAgaWYgKGRpZFJlYWRDb250ZW50KSB7IC8vIGkuZS4gb25seSBpZiB3ZSBoYXZlIGFscmVhZHkgcmVhZCBzb21lIHNjYWxhciBjb250ZW50LlxuICAgICAgICAgIHN0YXRlLnJlc3VsdCArPSAnICc7XG4gICAgICAgIH1cblxuICAgICAgLy8gU2V2ZXJhbCBsaW5lIGJyZWFrcyAtIHBlcmNlaXZlIGFzIGRpZmZlcmVudCBsaW5lcy5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnJlc3VsdCArPSBjb21tb24ucmVwZWF0KCdcXG4nLCBlbXB0eUxpbmVzKTtcbiAgICAgIH1cblxuICAgIC8vIExpdGVyYWwgc3R5bGU6IGp1c3QgYWRkIGV4YWN0IG51bWJlciBvZiBsaW5lIGJyZWFrcyBiZXR3ZWVuIGNvbnRlbnQgbGluZXMuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEtlZXAgYWxsIGxpbmUgYnJlYWtzIGV4Y2VwdCB0aGUgaGVhZGVyIGxpbmUgYnJlYWsuXG4gICAgICBzdGF0ZS5yZXN1bHQgKz0gY29tbW9uLnJlcGVhdCgnXFxuJywgZGlkUmVhZENvbnRlbnQgPyAxICsgZW1wdHlMaW5lcyA6IGVtcHR5TGluZXMpO1xuICAgIH1cblxuICAgIGRpZFJlYWRDb250ZW50ID0gdHJ1ZTtcbiAgICBkZXRlY3RlZEluZGVudCA9IHRydWU7XG4gICAgZW1wdHlMaW5lcyA9IDA7XG4gICAgY2FwdHVyZVN0YXJ0ID0gc3RhdGUucG9zaXRpb247XG5cbiAgICB3aGlsZSAoIWlzX0VPTChjaCkgJiYgKGNoICE9PSAwKSkge1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGNhcHR1cmVTZWdtZW50KHN0YXRlLCBjYXB0dXJlU3RhcnQsIHN0YXRlLnBvc2l0aW9uLCBmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2NrU2VxdWVuY2Uoc3RhdGUsIG5vZGVJbmRlbnQpIHtcbiAgdmFyIF9saW5lLFxuICAgICAgX3RhZyAgICAgID0gc3RhdGUudGFnLFxuICAgICAgX2FuY2hvciAgID0gc3RhdGUuYW5jaG9yLFxuICAgICAgX3Jlc3VsdCAgID0gW10sXG4gICAgICBmb2xsb3dpbmcsXG4gICAgICBkZXRlY3RlZCAgPSBmYWxzZSxcbiAgICAgIGNoO1xuXG4gIC8vIHRoZXJlIGlzIGEgbGVhZGluZyB0YWIgYmVmb3JlIHRoaXMgdG9rZW4sIHNvIGl0IGNhbid0IGJlIGEgYmxvY2sgc2VxdWVuY2UvbWFwcGluZztcbiAgLy8gaXQgY2FuIHN0aWxsIGJlIGZsb3cgc2VxdWVuY2UvbWFwcGluZyBvciBhIHNjYWxhclxuICBpZiAoc3RhdGUuZmlyc3RUYWJJbkxpbmUgIT09IC0xKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gX3Jlc3VsdDtcbiAgfVxuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgaWYgKHN0YXRlLmZpcnN0VGFiSW5MaW5lICE9PSAtMSkge1xuICAgICAgc3RhdGUucG9zaXRpb24gPSBzdGF0ZS5maXJzdFRhYkluTGluZTtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICd0YWIgY2hhcmFjdGVycyBtdXN0IG5vdCBiZSB1c2VkIGluIGluZGVudGF0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKGNoICE9PSAweDJELyogLSAqLykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZm9sbG93aW5nID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbiArIDEpO1xuXG4gICAgaWYgKCFpc19XU19PUl9FT0woZm9sbG93aW5nKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGV0ZWN0ZWQgPSB0cnVlO1xuICAgIHN0YXRlLnBvc2l0aW9uKys7XG5cbiAgICBpZiAoc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpKSB7XG4gICAgICBpZiAoc3RhdGUubGluZUluZGVudCA8PSBub2RlSW5kZW50KSB7XG4gICAgICAgIF9yZXN1bHQucHVzaChudWxsKTtcbiAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX2xpbmUgPSBzdGF0ZS5saW5lO1xuICAgIGNvbXBvc2VOb2RlKHN0YXRlLCBub2RlSW5kZW50LCBDT05URVhUX0JMT0NLX0lOLCBmYWxzZSwgdHJ1ZSk7XG4gICAgX3Jlc3VsdC5wdXNoKHN0YXRlLnJlc3VsdCk7XG4gICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmICgoc3RhdGUubGluZSA9PT0gX2xpbmUgfHwgc3RhdGUubGluZUluZGVudCA+IG5vZGVJbmRlbnQpICYmIChjaCAhPT0gMCkpIHtcbiAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdiYWQgaW5kZW50YXRpb24gb2YgYSBzZXF1ZW5jZSBlbnRyeScpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUubGluZUluZGVudCA8IG5vZGVJbmRlbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkZXRlY3RlZCkge1xuICAgIHN0YXRlLnRhZyA9IF90YWc7XG4gICAgc3RhdGUuYW5jaG9yID0gX2FuY2hvcjtcbiAgICBzdGF0ZS5raW5kID0gJ3NlcXVlbmNlJztcbiAgICBzdGF0ZS5yZXN1bHQgPSBfcmVzdWx0O1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2NrTWFwcGluZyhzdGF0ZSwgbm9kZUluZGVudCwgZmxvd0luZGVudCkge1xuICB2YXIgZm9sbG93aW5nLFxuICAgICAgYWxsb3dDb21wYWN0LFxuICAgICAgX2xpbmUsXG4gICAgICBfa2V5TGluZSxcbiAgICAgIF9rZXlMaW5lU3RhcnQsXG4gICAgICBfa2V5UG9zLFxuICAgICAgX3RhZyAgICAgICAgICA9IHN0YXRlLnRhZyxcbiAgICAgIF9hbmNob3IgICAgICAgPSBzdGF0ZS5hbmNob3IsXG4gICAgICBfcmVzdWx0ICAgICAgID0ge30sXG4gICAgICBvdmVycmlkYWJsZUtleXMgPSBPYmplY3QuY3JlYXRlKG51bGwpLFxuICAgICAga2V5VGFnICAgICAgICA9IG51bGwsXG4gICAgICBrZXlOb2RlICAgICAgID0gbnVsbCxcbiAgICAgIHZhbHVlTm9kZSAgICAgPSBudWxsLFxuICAgICAgYXRFeHBsaWNpdEtleSA9IGZhbHNlLFxuICAgICAgZGV0ZWN0ZWQgICAgICA9IGZhbHNlLFxuICAgICAgY2g7XG5cbiAgLy8gdGhlcmUgaXMgYSBsZWFkaW5nIHRhYiBiZWZvcmUgdGhpcyB0b2tlbiwgc28gaXQgY2FuJ3QgYmUgYSBibG9jayBzZXF1ZW5jZS9tYXBwaW5nO1xuICAvLyBpdCBjYW4gc3RpbGwgYmUgZmxvdyBzZXF1ZW5jZS9tYXBwaW5nIG9yIGEgc2NhbGFyXG4gIGlmIChzdGF0ZS5maXJzdFRhYkluTGluZSAhPT0gLTEpIHJldHVybiBmYWxzZTtcblxuICBpZiAoc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgc3RhdGUuYW5jaG9yTWFwW3N0YXRlLmFuY2hvcl0gPSBfcmVzdWx0O1xuICB9XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICB3aGlsZSAoY2ggIT09IDApIHtcbiAgICBpZiAoIWF0RXhwbGljaXRLZXkgJiYgc3RhdGUuZmlyc3RUYWJJbkxpbmUgIT09IC0xKSB7XG4gICAgICBzdGF0ZS5wb3NpdGlvbiA9IHN0YXRlLmZpcnN0VGFiSW5MaW5lO1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RhYiBjaGFyYWN0ZXJzIG11c3Qgbm90IGJlIHVzZWQgaW4gaW5kZW50YXRpb24nKTtcbiAgICB9XG5cbiAgICBmb2xsb3dpbmcgPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uICsgMSk7XG4gICAgX2xpbmUgPSBzdGF0ZS5saW5lOyAvLyBTYXZlIHRoZSBjdXJyZW50IGxpbmUuXG5cbiAgICAvL1xuICAgIC8vIEV4cGxpY2l0IG5vdGF0aW9uIGNhc2UuIFRoZXJlIGFyZSB0d28gc2VwYXJhdGUgYmxvY2tzOlxuICAgIC8vIGZpcnN0IGZvciB0aGUga2V5IChkZW5vdGVkIGJ5IFwiP1wiKSBhbmQgc2Vjb25kIGZvciB0aGUgdmFsdWUgKGRlbm90ZWQgYnkgXCI6XCIpXG4gICAgLy9cbiAgICBpZiAoKGNoID09PSAweDNGLyogPyAqLyB8fCBjaCA9PT0gMHgzQS8qIDogKi8pICYmIGlzX1dTX09SX0VPTChmb2xsb3dpbmcpKSB7XG5cbiAgICAgIGlmIChjaCA9PT0gMHgzRi8qID8gKi8pIHtcbiAgICAgICAgaWYgKGF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgICBzdG9yZU1hcHBpbmdQYWlyKHN0YXRlLCBfcmVzdWx0LCBvdmVycmlkYWJsZUtleXMsIGtleVRhZywga2V5Tm9kZSwgbnVsbCwgX2tleUxpbmUsIF9rZXlMaW5lU3RhcnQsIF9rZXlQb3MpO1xuICAgICAgICAgIGtleVRhZyA9IGtleU5vZGUgPSB2YWx1ZU5vZGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICBhdEV4cGxpY2l0S2V5ID0gdHJ1ZTtcbiAgICAgICAgYWxsb3dDb21wYWN0ID0gdHJ1ZTtcblxuICAgICAgfSBlbHNlIGlmIChhdEV4cGxpY2l0S2V5KSB7XG4gICAgICAgIC8vIGkuZS4gMHgzQS8qIDogKi8gPT09IGNoYXJhY3RlciBhZnRlciB0aGUgZXhwbGljaXQga2V5LlxuICAgICAgICBhdEV4cGxpY2l0S2V5ID0gZmFsc2U7XG4gICAgICAgIGFsbG93Q29tcGFjdCA9IHRydWU7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICdpbmNvbXBsZXRlIGV4cGxpY2l0IG1hcHBpbmcgcGFpcjsgYSBrZXkgbm9kZSBpcyBtaXNzZWQ7IG9yIGZvbGxvd2VkIGJ5IGEgbm9uLXRhYnVsYXRlZCBlbXB0eSBsaW5lJyk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLnBvc2l0aW9uICs9IDE7XG4gICAgICBjaCA9IGZvbGxvd2luZztcblxuICAgIC8vXG4gICAgLy8gSW1wbGljaXQgbm90YXRpb24gY2FzZS4gRmxvdy1zdHlsZSBub2RlIGFzIHRoZSBrZXkgZmlyc3QsIHRoZW4gXCI6XCIsIGFuZCB0aGUgdmFsdWUuXG4gICAgLy9cbiAgICB9IGVsc2Uge1xuICAgICAgX2tleUxpbmUgPSBzdGF0ZS5saW5lO1xuICAgICAgX2tleUxpbmVTdGFydCA9IHN0YXRlLmxpbmVTdGFydDtcbiAgICAgIF9rZXlQb3MgPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgICAgaWYgKCFjb21wb3NlTm9kZShzdGF0ZSwgZmxvd0luZGVudCwgQ09OVEVYVF9GTE9XX09VVCwgZmFsc2UsIHRydWUpKSB7XG4gICAgICAgIC8vIE5laXRoZXIgaW1wbGljaXQgbm9yIGV4cGxpY2l0IG5vdGF0aW9uLlxuICAgICAgICAvLyBSZWFkaW5nIGlzIGRvbmUuIEdvIHRvIHRoZSBlcGlsb2d1ZS5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZS5saW5lID09PSBfbGluZSkge1xuICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pO1xuXG4gICAgICAgIHdoaWxlIChpc19XSElURV9TUEFDRShjaCkpIHtcbiAgICAgICAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2ggPT09IDB4M0EvKiA6ICovKSB7XG4gICAgICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gICAgICAgICAgaWYgKCFpc19XU19PUl9FT0woY2gpKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYSB3aGl0ZXNwYWNlIGNoYXJhY3RlciBpcyBleHBlY3RlZCBhZnRlciB0aGUga2V5LXZhbHVlIHNlcGFyYXRvciB3aXRoaW4gYSBibG9jayBtYXBwaW5nJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgICAgIHN0b3JlTWFwcGluZ1BhaXIoc3RhdGUsIF9yZXN1bHQsIG92ZXJyaWRhYmxlS2V5cywga2V5VGFnLCBrZXlOb2RlLCBudWxsLCBfa2V5TGluZSwgX2tleUxpbmVTdGFydCwgX2tleVBvcyk7XG4gICAgICAgICAgICBrZXlUYWcgPSBrZXlOb2RlID0gdmFsdWVOb2RlID0gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZXRlY3RlZCA9IHRydWU7XG4gICAgICAgICAgYXRFeHBsaWNpdEtleSA9IGZhbHNlO1xuICAgICAgICAgIGFsbG93Q29tcGFjdCA9IGZhbHNlO1xuICAgICAgICAgIGtleVRhZyA9IHN0YXRlLnRhZztcbiAgICAgICAgICBrZXlOb2RlID0gc3RhdGUucmVzdWx0O1xuXG4gICAgICAgIH0gZWxzZSBpZiAoZGV0ZWN0ZWQpIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnY2FuIG5vdCByZWFkIGFuIGltcGxpY2l0IG1hcHBpbmcgcGFpcjsgYSBjb2xvbiBpcyBtaXNzZWQnKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLnRhZyA9IF90YWc7XG4gICAgICAgICAgc3RhdGUuYW5jaG9yID0gX2FuY2hvcjtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gS2VlcCB0aGUgcmVzdWx0IG9mIGBjb21wb3NlTm9kZWAuXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIGlmIChkZXRlY3RlZCkge1xuICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnY2FuIG5vdCByZWFkIGEgYmxvY2sgbWFwcGluZyBlbnRyeTsgYSBtdWx0aWxpbmUga2V5IG1heSBub3QgYmUgYW4gaW1wbGljaXQga2V5Jyk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnRhZyA9IF90YWc7XG4gICAgICAgIHN0YXRlLmFuY2hvciA9IF9hbmNob3I7XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBLZWVwIHRoZSByZXN1bHQgb2YgYGNvbXBvc2VOb2RlYC5cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIENvbW1vbiByZWFkaW5nIGNvZGUgZm9yIGJvdGggZXhwbGljaXQgYW5kIGltcGxpY2l0IG5vdGF0aW9ucy5cbiAgICAvL1xuICAgIGlmIChzdGF0ZS5saW5lID09PSBfbGluZSB8fCBzdGF0ZS5saW5lSW5kZW50ID4gbm9kZUluZGVudCkge1xuICAgICAgaWYgKGF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgX2tleUxpbmUgPSBzdGF0ZS5saW5lO1xuICAgICAgICBfa2V5TGluZVN0YXJ0ID0gc3RhdGUubGluZVN0YXJ0O1xuICAgICAgICBfa2V5UG9zID0gc3RhdGUucG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChjb21wb3NlTm9kZShzdGF0ZSwgbm9kZUluZGVudCwgQ09OVEVYVF9CTE9DS19PVVQsIHRydWUsIGFsbG93Q29tcGFjdCkpIHtcbiAgICAgICAgaWYgKGF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgICBrZXlOb2RlID0gc3RhdGUucmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlTm9kZSA9IHN0YXRlLnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWF0RXhwbGljaXRLZXkpIHtcbiAgICAgICAgc3RvcmVNYXBwaW5nUGFpcihzdGF0ZSwgX3Jlc3VsdCwgb3ZlcnJpZGFibGVLZXlzLCBrZXlUYWcsIGtleU5vZGUsIHZhbHVlTm9kZSwgX2tleUxpbmUsIF9rZXlMaW5lU3RhcnQsIF9rZXlQb3MpO1xuICAgICAgICBrZXlUYWcgPSBrZXlOb2RlID0gdmFsdWVOb2RlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoKHN0YXRlLmxpbmUgPT09IF9saW5lIHx8IHN0YXRlLmxpbmVJbmRlbnQgPiBub2RlSW5kZW50KSAmJiAoY2ggIT09IDApKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYmFkIGluZGVudGF0aW9uIG9mIGEgbWFwcGluZyBlbnRyeScpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUubGluZUluZGVudCA8IG5vZGVJbmRlbnQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vXG4gIC8vIEVwaWxvZ3VlLlxuICAvL1xuXG4gIC8vIFNwZWNpYWwgY2FzZTogbGFzdCBtYXBwaW5nJ3Mgbm9kZSBjb250YWlucyBvbmx5IHRoZSBrZXkgaW4gZXhwbGljaXQgbm90YXRpb24uXG4gIGlmIChhdEV4cGxpY2l0S2V5KSB7XG4gICAgc3RvcmVNYXBwaW5nUGFpcihzdGF0ZSwgX3Jlc3VsdCwgb3ZlcnJpZGFibGVLZXlzLCBrZXlUYWcsIGtleU5vZGUsIG51bGwsIF9rZXlMaW5lLCBfa2V5TGluZVN0YXJ0LCBfa2V5UG9zKTtcbiAgfVxuXG4gIC8vIEV4cG9zZSB0aGUgcmVzdWx0aW5nIG1hcHBpbmcuXG4gIGlmIChkZXRlY3RlZCkge1xuICAgIHN0YXRlLnRhZyA9IF90YWc7XG4gICAgc3RhdGUuYW5jaG9yID0gX2FuY2hvcjtcbiAgICBzdGF0ZS5raW5kID0gJ21hcHBpbmcnO1xuICAgIHN0YXRlLnJlc3VsdCA9IF9yZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gZGV0ZWN0ZWQ7XG59XG5cbmZ1bmN0aW9uIHJlYWRUYWdQcm9wZXJ0eShzdGF0ZSkge1xuICB2YXIgX3Bvc2l0aW9uLFxuICAgICAgaXNWZXJiYXRpbSA9IGZhbHNlLFxuICAgICAgaXNOYW1lZCAgICA9IGZhbHNlLFxuICAgICAgdGFnSGFuZGxlLFxuICAgICAgdGFnTmFtZSxcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoICE9PSAweDIxLyogISAqLykgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChzdGF0ZS50YWcgIT09IG51bGwpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZHVwbGljYXRpb24gb2YgYSB0YWcgcHJvcGVydHknKTtcbiAgfVxuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggPT09IDB4M0MvKiA8ICovKSB7XG4gICAgaXNWZXJiYXRpbSA9IHRydWU7XG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuXG4gIH0gZWxzZSBpZiAoY2ggPT09IDB4MjEvKiAhICovKSB7XG4gICAgaXNOYW1lZCA9IHRydWU7XG4gICAgdGFnSGFuZGxlID0gJyEhJztcbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG5cbiAgfSBlbHNlIHtcbiAgICB0YWdIYW5kbGUgPSAnISc7XG4gIH1cblxuICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcblxuICBpZiAoaXNWZXJiYXRpbSkge1xuICAgIGRvIHsgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pOyB9XG4gICAgd2hpbGUgKGNoICE9PSAwICYmIGNoICE9PSAweDNFLyogPiAqLyk7XG5cbiAgICBpZiAoc3RhdGUucG9zaXRpb24gPCBzdGF0ZS5sZW5ndGgpIHtcbiAgICAgIHRhZ05hbWUgPSBzdGF0ZS5pbnB1dC5zbGljZShfcG9zaXRpb24sIHN0YXRlLnBvc2l0aW9uKTtcbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuZXhwZWN0ZWQgZW5kIG9mIHRoZSBzdHJlYW0gd2l0aGluIGEgdmVyYmF0aW0gdGFnJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfV1NfT1JfRU9MKGNoKSkge1xuXG4gICAgICBpZiAoY2ggPT09IDB4MjEvKiAhICovKSB7XG4gICAgICAgIGlmICghaXNOYW1lZCkge1xuICAgICAgICAgIHRhZ0hhbmRsZSA9IHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiAtIDEsIHN0YXRlLnBvc2l0aW9uICsgMSk7XG5cbiAgICAgICAgICBpZiAoIVBBVFRFUk5fVEFHX0hBTkRMRS50ZXN0KHRhZ0hhbmRsZSkpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3Ioc3RhdGUsICduYW1lZCB0YWcgaGFuZGxlIGNhbm5vdCBjb250YWluIHN1Y2ggY2hhcmFjdGVycycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlzTmFtZWQgPSB0cnVlO1xuICAgICAgICAgIF9wb3NpdGlvbiA9IHN0YXRlLnBvc2l0aW9uICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndGFnIHN1ZmZpeCBjYW5ub3QgY29udGFpbiBleGNsYW1hdGlvbiBtYXJrcycpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICB0YWdOYW1lID0gc3RhdGUuaW5wdXQuc2xpY2UoX3Bvc2l0aW9uLCBzdGF0ZS5wb3NpdGlvbik7XG5cbiAgICBpZiAoUEFUVEVSTl9GTE9XX0lORElDQVRPUlMudGVzdCh0YWdOYW1lKSkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RhZyBzdWZmaXggY2Fubm90IGNvbnRhaW4gZmxvdyBpbmRpY2F0b3IgY2hhcmFjdGVycycpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0YWdOYW1lICYmICFQQVRURVJOX1RBR19VUkkudGVzdCh0YWdOYW1lKSkge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICd0YWcgbmFtZSBjYW5ub3QgY29udGFpbiBzdWNoIGNoYXJhY3RlcnM6ICcgKyB0YWdOYW1lKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgdGFnTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudCh0YWdOYW1lKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3RhZyBuYW1lIGlzIG1hbGZvcm1lZDogJyArIHRhZ05hbWUpO1xuICB9XG5cbiAgaWYgKGlzVmVyYmF0aW0pIHtcbiAgICBzdGF0ZS50YWcgPSB0YWdOYW1lO1xuXG4gIH0gZWxzZSBpZiAoX2hhc093blByb3BlcnR5JDEuY2FsbChzdGF0ZS50YWdNYXAsIHRhZ0hhbmRsZSkpIHtcbiAgICBzdGF0ZS50YWcgPSBzdGF0ZS50YWdNYXBbdGFnSGFuZGxlXSArIHRhZ05hbWU7XG5cbiAgfSBlbHNlIGlmICh0YWdIYW5kbGUgPT09ICchJykge1xuICAgIHN0YXRlLnRhZyA9ICchJyArIHRhZ05hbWU7XG5cbiAgfSBlbHNlIGlmICh0YWdIYW5kbGUgPT09ICchIScpIHtcbiAgICBzdGF0ZS50YWcgPSAndGFnOnlhbWwub3JnLDIwMDI6JyArIHRhZ05hbWU7XG5cbiAgfSBlbHNlIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5kZWNsYXJlZCB0YWcgaGFuZGxlIFwiJyArIHRhZ0hhbmRsZSArICdcIicpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJlYWRBbmNob3JQcm9wZXJ0eShzdGF0ZSkge1xuICB2YXIgX3Bvc2l0aW9uLFxuICAgICAgY2g7XG5cbiAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICBpZiAoY2ggIT09IDB4MjYvKiAmICovKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICdkdXBsaWNhdGlvbiBvZiBhbiBhbmNob3IgcHJvcGVydHknKTtcbiAgfVxuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb247XG5cbiAgd2hpbGUgKGNoICE9PSAwICYmICFpc19XU19PUl9FT0woY2gpICYmICFpc19GTE9XX0lORElDQVRPUihjaCkpIHtcbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gIH1cblxuICBpZiAoc3RhdGUucG9zaXRpb24gPT09IF9wb3NpdGlvbikge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICduYW1lIG9mIGFuIGFuY2hvciBub2RlIG11c3QgY29udGFpbiBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyJyk7XG4gIH1cblxuICBzdGF0ZS5hbmNob3IgPSBzdGF0ZS5pbnB1dC5zbGljZShfcG9zaXRpb24sIHN0YXRlLnBvc2l0aW9uKTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJlYWRBbGlhcyhzdGF0ZSkge1xuICB2YXIgX3Bvc2l0aW9uLCBhbGlhcyxcbiAgICAgIGNoO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKGNoICE9PSAweDJBLyogKiAqLykgcmV0dXJuIGZhbHNlO1xuXG4gIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgX3Bvc2l0aW9uID0gc3RhdGUucG9zaXRpb247XG5cbiAgd2hpbGUgKGNoICE9PSAwICYmICFpc19XU19PUl9FT0woY2gpICYmICFpc19GTE9XX0lORElDQVRPUihjaCkpIHtcbiAgICBjaCA9IHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoKytzdGF0ZS5wb3NpdGlvbik7XG4gIH1cblxuICBpZiAoc3RhdGUucG9zaXRpb24gPT09IF9wb3NpdGlvbikge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICduYW1lIG9mIGFuIGFsaWFzIG5vZGUgbXVzdCBjb250YWluIGF0IGxlYXN0IG9uZSBjaGFyYWN0ZXInKTtcbiAgfVxuXG4gIGFsaWFzID0gc3RhdGUuaW5wdXQuc2xpY2UoX3Bvc2l0aW9uLCBzdGF0ZS5wb3NpdGlvbik7XG5cbiAgaWYgKCFfaGFzT3duUHJvcGVydHkkMS5jYWxsKHN0YXRlLmFuY2hvck1hcCwgYWxpYXMpKSB7XG4gICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuaWRlbnRpZmllZCBhbGlhcyBcIicgKyBhbGlhcyArICdcIicpO1xuICB9XG5cbiAgc3RhdGUucmVzdWx0ID0gc3RhdGUuYW5jaG9yTWFwW2FsaWFzXTtcbiAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZU5vZGUoc3RhdGUsIHBhcmVudEluZGVudCwgbm9kZUNvbnRleHQsIGFsbG93VG9TZWVrLCBhbGxvd0NvbXBhY3QpIHtcbiAgdmFyIGFsbG93QmxvY2tTdHlsZXMsXG4gICAgICBhbGxvd0Jsb2NrU2NhbGFycyxcbiAgICAgIGFsbG93QmxvY2tDb2xsZWN0aW9ucyxcbiAgICAgIGluZGVudFN0YXR1cyA9IDEsIC8vIDE6IHRoaXM+cGFyZW50LCAwOiB0aGlzPXBhcmVudCwgLTE6IHRoaXM8cGFyZW50XG4gICAgICBhdE5ld0xpbmUgID0gZmFsc2UsXG4gICAgICBoYXNDb250ZW50ID0gZmFsc2UsXG4gICAgICB0eXBlSW5kZXgsXG4gICAgICB0eXBlUXVhbnRpdHksXG4gICAgICB0eXBlTGlzdCxcbiAgICAgIHR5cGUsXG4gICAgICBmbG93SW5kZW50LFxuICAgICAgYmxvY2tJbmRlbnQ7XG5cbiAgaWYgKHN0YXRlLmxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgc3RhdGUubGlzdGVuZXIoJ29wZW4nLCBzdGF0ZSk7XG4gIH1cblxuICBzdGF0ZS50YWcgICAgPSBudWxsO1xuICBzdGF0ZS5hbmNob3IgPSBudWxsO1xuICBzdGF0ZS5raW5kICAgPSBudWxsO1xuICBzdGF0ZS5yZXN1bHQgPSBudWxsO1xuXG4gIGFsbG93QmxvY2tTdHlsZXMgPSBhbGxvd0Jsb2NrU2NhbGFycyA9IGFsbG93QmxvY2tDb2xsZWN0aW9ucyA9XG4gICAgQ09OVEVYVF9CTE9DS19PVVQgPT09IG5vZGVDb250ZXh0IHx8XG4gICAgQ09OVEVYVF9CTE9DS19JTiAgPT09IG5vZGVDb250ZXh0O1xuXG4gIGlmIChhbGxvd1RvU2Vlaykge1xuICAgIGlmIChza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSkpIHtcbiAgICAgIGF0TmV3TGluZSA9IHRydWU7XG5cbiAgICAgIGlmIChzdGF0ZS5saW5lSW5kZW50ID4gcGFyZW50SW5kZW50KSB7XG4gICAgICAgIGluZGVudFN0YXR1cyA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPT09IHBhcmVudEluZGVudCkge1xuICAgICAgICBpbmRlbnRTdGF0dXMgPSAwO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5saW5lSW5kZW50IDwgcGFyZW50SW5kZW50KSB7XG4gICAgICAgIGluZGVudFN0YXR1cyA9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChpbmRlbnRTdGF0dXMgPT09IDEpIHtcbiAgICB3aGlsZSAocmVhZFRhZ1Byb3BlcnR5KHN0YXRlKSB8fCByZWFkQW5jaG9yUHJvcGVydHkoc3RhdGUpKSB7XG4gICAgICBpZiAoc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpKSB7XG4gICAgICAgIGF0TmV3TGluZSA9IHRydWU7XG4gICAgICAgIGFsbG93QmxvY2tDb2xsZWN0aW9ucyA9IGFsbG93QmxvY2tTdHlsZXM7XG5cbiAgICAgICAgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPiBwYXJlbnRJbmRlbnQpIHtcbiAgICAgICAgICBpbmRlbnRTdGF0dXMgPSAxO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPT09IHBhcmVudEluZGVudCkge1xuICAgICAgICAgIGluZGVudFN0YXR1cyA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUubGluZUluZGVudCA8IHBhcmVudEluZGVudCkge1xuICAgICAgICAgIGluZGVudFN0YXR1cyA9IC0xO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGxvd0Jsb2NrQ29sbGVjdGlvbnMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWxsb3dCbG9ja0NvbGxlY3Rpb25zKSB7XG4gICAgYWxsb3dCbG9ja0NvbGxlY3Rpb25zID0gYXROZXdMaW5lIHx8IGFsbG93Q29tcGFjdDtcbiAgfVxuXG4gIGlmIChpbmRlbnRTdGF0dXMgPT09IDEgfHwgQ09OVEVYVF9CTE9DS19PVVQgPT09IG5vZGVDb250ZXh0KSB7XG4gICAgaWYgKENPTlRFWFRfRkxPV19JTiA9PT0gbm9kZUNvbnRleHQgfHwgQ09OVEVYVF9GTE9XX09VVCA9PT0gbm9kZUNvbnRleHQpIHtcbiAgICAgIGZsb3dJbmRlbnQgPSBwYXJlbnRJbmRlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsb3dJbmRlbnQgPSBwYXJlbnRJbmRlbnQgKyAxO1xuICAgIH1cblxuICAgIGJsb2NrSW5kZW50ID0gc3RhdGUucG9zaXRpb24gLSBzdGF0ZS5saW5lU3RhcnQ7XG5cbiAgICBpZiAoaW5kZW50U3RhdHVzID09PSAxKSB7XG4gICAgICBpZiAoYWxsb3dCbG9ja0NvbGxlY3Rpb25zICYmXG4gICAgICAgICAgKHJlYWRCbG9ja1NlcXVlbmNlKHN0YXRlLCBibG9ja0luZGVudCkgfHxcbiAgICAgICAgICAgcmVhZEJsb2NrTWFwcGluZyhzdGF0ZSwgYmxvY2tJbmRlbnQsIGZsb3dJbmRlbnQpKSB8fFxuICAgICAgICAgIHJlYWRGbG93Q29sbGVjdGlvbihzdGF0ZSwgZmxvd0luZGVudCkpIHtcbiAgICAgICAgaGFzQ29udGVudCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoKGFsbG93QmxvY2tTY2FsYXJzICYmIHJlYWRCbG9ja1NjYWxhcihzdGF0ZSwgZmxvd0luZGVudCkpIHx8XG4gICAgICAgICAgICByZWFkU2luZ2xlUXVvdGVkU2NhbGFyKHN0YXRlLCBmbG93SW5kZW50KSB8fFxuICAgICAgICAgICAgcmVhZERvdWJsZVF1b3RlZFNjYWxhcihzdGF0ZSwgZmxvd0luZGVudCkpIHtcbiAgICAgICAgICBoYXNDb250ZW50ID0gdHJ1ZTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlYWRBbGlhcyhzdGF0ZSkpIHtcbiAgICAgICAgICBoYXNDb250ZW50ID0gdHJ1ZTtcblxuICAgICAgICAgIGlmIChzdGF0ZS50YWcgIT09IG51bGwgfHwgc3RhdGUuYW5jaG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnYWxpYXMgbm9kZSBzaG91bGQgbm90IGhhdmUgYW55IHByb3BlcnRpZXMnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWFkUGxhaW5TY2FsYXIoc3RhdGUsIGZsb3dJbmRlbnQsIENPTlRFWFRfRkxPV19JTiA9PT0gbm9kZUNvbnRleHQpKSB7XG4gICAgICAgICAgaGFzQ29udGVudCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoc3RhdGUudGFnID09PSBudWxsKSB7XG4gICAgICAgICAgICBzdGF0ZS50YWcgPSAnPyc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRlLmFuY2hvciAhPT0gbnVsbCkge1xuICAgICAgICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gc3RhdGUucmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpbmRlbnRTdGF0dXMgPT09IDApIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZTogYmxvY2sgc2VxdWVuY2VzIGFyZSBhbGxvd2VkIHRvIGhhdmUgc2FtZSBpbmRlbnRhdGlvbiBsZXZlbCBhcyB0aGUgcGFyZW50LlxuICAgICAgLy8gaHR0cDovL3d3dy55YW1sLm9yZy9zcGVjLzEuMi9zcGVjLmh0bWwjaWQyNzk5Nzg0XG4gICAgICBoYXNDb250ZW50ID0gYWxsb3dCbG9ja0NvbGxlY3Rpb25zICYmIHJlYWRCbG9ja1NlcXVlbmNlKHN0YXRlLCBibG9ja0luZGVudCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnRhZyA9PT0gbnVsbCkge1xuICAgIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlLmFuY2hvck1hcFtzdGF0ZS5hbmNob3JdID0gc3RhdGUucmVzdWx0O1xuICAgIH1cblxuICB9IGVsc2UgaWYgKHN0YXRlLnRhZyA9PT0gJz8nKSB7XG4gICAgLy8gSW1wbGljaXQgcmVzb2x2aW5nIGlzIG5vdCBhbGxvd2VkIGZvciBub24tc2NhbGFyIHR5cGVzLCBhbmQgJz8nXG4gICAgLy8gbm9uLXNwZWNpZmljIHRhZyBpcyBvbmx5IGF1dG9tYXRpY2FsbHkgYXNzaWduZWQgdG8gcGxhaW4gc2NhbGFycy5cbiAgICAvL1xuICAgIC8vIFdlIG9ubHkgbmVlZCB0byBjaGVjayBraW5kIGNvbmZvcm1pdHkgaW4gY2FzZSB1c2VyIGV4cGxpY2l0bHkgYXNzaWducyAnPydcbiAgICAvLyB0YWcsIGZvciBleGFtcGxlIGxpa2UgdGhpczogXCIhPD8+IFswXVwiXG4gICAgLy9cbiAgICBpZiAoc3RhdGUucmVzdWx0ICE9PSBudWxsICYmIHN0YXRlLmtpbmQgIT09ICdzY2FsYXInKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5hY2NlcHRhYmxlIG5vZGUga2luZCBmb3IgITw/PiB0YWc7IGl0IHNob3VsZCBiZSBcInNjYWxhclwiLCBub3QgXCInICsgc3RhdGUua2luZCArICdcIicpO1xuICAgIH1cblxuICAgIGZvciAodHlwZUluZGV4ID0gMCwgdHlwZVF1YW50aXR5ID0gc3RhdGUuaW1wbGljaXRUeXBlcy5sZW5ndGg7IHR5cGVJbmRleCA8IHR5cGVRdWFudGl0eTsgdHlwZUluZGV4ICs9IDEpIHtcbiAgICAgIHR5cGUgPSBzdGF0ZS5pbXBsaWNpdFR5cGVzW3R5cGVJbmRleF07XG5cbiAgICAgIGlmICh0eXBlLnJlc29sdmUoc3RhdGUucmVzdWx0KSkgeyAvLyBgc3RhdGUucmVzdWx0YCB1cGRhdGVkIGluIHJlc29sdmVyIGlmIG1hdGNoZWRcbiAgICAgICAgc3RhdGUucmVzdWx0ID0gdHlwZS5jb25zdHJ1Y3Qoc3RhdGUucmVzdWx0KTtcbiAgICAgICAgc3RhdGUudGFnID0gdHlwZS50YWc7XG4gICAgICAgIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICAgICAgICBzdGF0ZS5hbmNob3JNYXBbc3RhdGUuYW5jaG9yXSA9IHN0YXRlLnJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoc3RhdGUudGFnICE9PSAnIScpIHtcbiAgICBpZiAoX2hhc093blByb3BlcnR5JDEuY2FsbChzdGF0ZS50eXBlTWFwW3N0YXRlLmtpbmQgfHwgJ2ZhbGxiYWNrJ10sIHN0YXRlLnRhZykpIHtcbiAgICAgIHR5cGUgPSBzdGF0ZS50eXBlTWFwW3N0YXRlLmtpbmQgfHwgJ2ZhbGxiYWNrJ11bc3RhdGUudGFnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbG9va2luZyBmb3IgbXVsdGkgdHlwZVxuICAgICAgdHlwZSA9IG51bGw7XG4gICAgICB0eXBlTGlzdCA9IHN0YXRlLnR5cGVNYXAubXVsdGlbc3RhdGUua2luZCB8fCAnZmFsbGJhY2snXTtcblxuICAgICAgZm9yICh0eXBlSW5kZXggPSAwLCB0eXBlUXVhbnRpdHkgPSB0eXBlTGlzdC5sZW5ndGg7IHR5cGVJbmRleCA8IHR5cGVRdWFudGl0eTsgdHlwZUluZGV4ICs9IDEpIHtcbiAgICAgICAgaWYgKHN0YXRlLnRhZy5zbGljZSgwLCB0eXBlTGlzdFt0eXBlSW5kZXhdLnRhZy5sZW5ndGgpID09PSB0eXBlTGlzdFt0eXBlSW5kZXhdLnRhZykge1xuICAgICAgICAgIHR5cGUgPSB0eXBlTGlzdFt0eXBlSW5kZXhdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0eXBlKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAndW5rbm93biB0YWcgITwnICsgc3RhdGUudGFnICsgJz4nKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUucmVzdWx0ICE9PSBudWxsICYmIHR5cGUua2luZCAhPT0gc3RhdGUua2luZCkge1xuICAgICAgdGhyb3dFcnJvcihzdGF0ZSwgJ3VuYWNjZXB0YWJsZSBub2RlIGtpbmQgZm9yICE8JyArIHN0YXRlLnRhZyArICc+IHRhZzsgaXQgc2hvdWxkIGJlIFwiJyArIHR5cGUua2luZCArICdcIiwgbm90IFwiJyArIHN0YXRlLmtpbmQgKyAnXCInKTtcbiAgICB9XG5cbiAgICBpZiAoIXR5cGUucmVzb2x2ZShzdGF0ZS5yZXN1bHQsIHN0YXRlLnRhZykpIHsgLy8gYHN0YXRlLnJlc3VsdGAgdXBkYXRlZCBpbiByZXNvbHZlciBpZiBtYXRjaGVkXG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnY2Fubm90IHJlc29sdmUgYSBub2RlIHdpdGggITwnICsgc3RhdGUudGFnICsgJz4gZXhwbGljaXQgdGFnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnJlc3VsdCA9IHR5cGUuY29uc3RydWN0KHN0YXRlLnJlc3VsdCwgc3RhdGUudGFnKTtcbiAgICAgIGlmIChzdGF0ZS5hbmNob3IgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGUuYW5jaG9yTWFwW3N0YXRlLmFuY2hvcl0gPSBzdGF0ZS5yZXN1bHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLmxpc3RlbmVyICE9PSBudWxsKSB7XG4gICAgc3RhdGUubGlzdGVuZXIoJ2Nsb3NlJywgc3RhdGUpO1xuICB9XG4gIHJldHVybiBzdGF0ZS50YWcgIT09IG51bGwgfHwgIHN0YXRlLmFuY2hvciAhPT0gbnVsbCB8fCBoYXNDb250ZW50O1xufVxuXG5mdW5jdGlvbiByZWFkRG9jdW1lbnQoc3RhdGUpIHtcbiAgdmFyIGRvY3VtZW50U3RhcnQgPSBzdGF0ZS5wb3NpdGlvbixcbiAgICAgIF9wb3NpdGlvbixcbiAgICAgIGRpcmVjdGl2ZU5hbWUsXG4gICAgICBkaXJlY3RpdmVBcmdzLFxuICAgICAgaGFzRGlyZWN0aXZlcyA9IGZhbHNlLFxuICAgICAgY2g7XG5cbiAgc3RhdGUudmVyc2lvbiA9IG51bGw7XG4gIHN0YXRlLmNoZWNrTGluZUJyZWFrcyA9IHN0YXRlLmxlZ2FjeTtcbiAgc3RhdGUudGFnTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RhdGUuYW5jaG9yTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICB3aGlsZSAoKGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdChzdGF0ZS5wb3NpdGlvbikpICE9PSAwKSB7XG4gICAgc2tpcFNlcGFyYXRpb25TcGFjZShzdGF0ZSwgdHJ1ZSwgLTEpO1xuXG4gICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKTtcblxuICAgIGlmIChzdGF0ZS5saW5lSW5kZW50ID4gMCB8fCBjaCAhPT0gMHgyNS8qICUgKi8pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGhhc0RpcmVjdGl2ZXMgPSB0cnVlO1xuICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgIHdoaWxlIChjaCAhPT0gMCAmJiAhaXNfV1NfT1JfRU9MKGNoKSkge1xuICAgICAgY2ggPSBzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KCsrc3RhdGUucG9zaXRpb24pO1xuICAgIH1cblxuICAgIGRpcmVjdGl2ZU5hbWUgPSBzdGF0ZS5pbnB1dC5zbGljZShfcG9zaXRpb24sIHN0YXRlLnBvc2l0aW9uKTtcbiAgICBkaXJlY3RpdmVBcmdzID0gW107XG5cbiAgICBpZiAoZGlyZWN0aXZlTmFtZS5sZW5ndGggPCAxKSB7XG4gICAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZGlyZWN0aXZlIG5hbWUgbXVzdCBub3QgYmUgbGVzcyB0aGFuIG9uZSBjaGFyYWN0ZXIgaW4gbGVuZ3RoJyk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGNoICE9PSAwKSB7XG4gICAgICB3aGlsZSAoaXNfV0hJVEVfU1BBQ0UoY2gpKSB7XG4gICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoID09PSAweDIzLyogIyAqLykge1xuICAgICAgICBkbyB7IGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTsgfVxuICAgICAgICB3aGlsZSAoY2ggIT09IDAgJiYgIWlzX0VPTChjaCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGlzX0VPTChjaCkpIGJyZWFrO1xuXG4gICAgICBfcG9zaXRpb24gPSBzdGF0ZS5wb3NpdGlvbjtcblxuICAgICAgd2hpbGUgKGNoICE9PSAwICYmICFpc19XU19PUl9FT0woY2gpKSB7XG4gICAgICAgIGNoID0gc3RhdGUuaW5wdXQuY2hhckNvZGVBdCgrK3N0YXRlLnBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgZGlyZWN0aXZlQXJncy5wdXNoKHN0YXRlLmlucHV0LnNsaWNlKF9wb3NpdGlvbiwgc3RhdGUucG9zaXRpb24pKTtcbiAgICB9XG5cbiAgICBpZiAoY2ggIT09IDApIHJlYWRMaW5lQnJlYWsoc3RhdGUpO1xuXG4gICAgaWYgKF9oYXNPd25Qcm9wZXJ0eSQxLmNhbGwoZGlyZWN0aXZlSGFuZGxlcnMsIGRpcmVjdGl2ZU5hbWUpKSB7XG4gICAgICBkaXJlY3RpdmVIYW5kbGVyc1tkaXJlY3RpdmVOYW1lXShzdGF0ZSwgZGlyZWN0aXZlTmFtZSwgZGlyZWN0aXZlQXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93V2FybmluZyhzdGF0ZSwgJ3Vua25vd24gZG9jdW1lbnQgZGlyZWN0aXZlIFwiJyArIGRpcmVjdGl2ZU5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH1cblxuICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG5cbiAgaWYgKHN0YXRlLmxpbmVJbmRlbnQgPT09IDAgJiZcbiAgICAgIHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24pICAgICA9PT0gMHgyRC8qIC0gKi8gJiZcbiAgICAgIHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gKyAxKSA9PT0gMHgyRC8qIC0gKi8gJiZcbiAgICAgIHN0YXRlLmlucHV0LmNoYXJDb2RlQXQoc3RhdGUucG9zaXRpb24gKyAyKSA9PT0gMHgyRC8qIC0gKi8pIHtcbiAgICBzdGF0ZS5wb3NpdGlvbiArPSAzO1xuICAgIHNraXBTZXBhcmF0aW9uU3BhY2Uoc3RhdGUsIHRydWUsIC0xKTtcblxuICB9IGVsc2UgaWYgKGhhc0RpcmVjdGl2ZXMpIHtcbiAgICB0aHJvd0Vycm9yKHN0YXRlLCAnZGlyZWN0aXZlcyBlbmQgbWFyayBpcyBleHBlY3RlZCcpO1xuICB9XG5cbiAgY29tcG9zZU5vZGUoc3RhdGUsIHN0YXRlLmxpbmVJbmRlbnQgLSAxLCBDT05URVhUX0JMT0NLX09VVCwgZmFsc2UsIHRydWUpO1xuICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG5cbiAgaWYgKHN0YXRlLmNoZWNrTGluZUJyZWFrcyAmJlxuICAgICAgUEFUVEVSTl9OT05fQVNDSUlfTElORV9CUkVBS1MudGVzdChzdGF0ZS5pbnB1dC5zbGljZShkb2N1bWVudFN0YXJ0LCBzdGF0ZS5wb3NpdGlvbikpKSB7XG4gICAgdGhyb3dXYXJuaW5nKHN0YXRlLCAnbm9uLUFTQ0lJIGxpbmUgYnJlYWtzIGFyZSBpbnRlcnByZXRlZCBhcyBjb250ZW50Jyk7XG4gIH1cblxuICBzdGF0ZS5kb2N1bWVudHMucHVzaChzdGF0ZS5yZXN1bHQpO1xuXG4gIGlmIChzdGF0ZS5wb3NpdGlvbiA9PT0gc3RhdGUubGluZVN0YXJ0ICYmIHRlc3REb2N1bWVudFNlcGFyYXRvcihzdGF0ZSkpIHtcblxuICAgIGlmIChzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSA9PT0gMHgyRS8qIC4gKi8pIHtcbiAgICAgIHN0YXRlLnBvc2l0aW9uICs9IDM7XG4gICAgICBza2lwU2VwYXJhdGlvblNwYWNlKHN0YXRlLCB0cnVlLCAtMSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzdGF0ZS5wb3NpdGlvbiA8IChzdGF0ZS5sZW5ndGggLSAxKSkge1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICdlbmQgb2YgdGhlIHN0cmVhbSBvciBhIGRvY3VtZW50IHNlcGFyYXRvciBpcyBleHBlY3RlZCcpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGxvYWREb2N1bWVudHMoaW5wdXQsIG9wdGlvbnMpIHtcbiAgaW5wdXQgPSBTdHJpbmcoaW5wdXQpO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaW5wdXQubGVuZ3RoICE9PSAwKSB7XG5cbiAgICAvLyBBZGQgdGFpbGluZyBgXFxuYCBpZiBub3QgZXhpc3RzXG4gICAgaWYgKGlucHV0LmNoYXJDb2RlQXQoaW5wdXQubGVuZ3RoIC0gMSkgIT09IDB4MEEvKiBMRiAqLyAmJlxuICAgICAgICBpbnB1dC5jaGFyQ29kZUF0KGlucHV0Lmxlbmd0aCAtIDEpICE9PSAweDBELyogQ1IgKi8pIHtcbiAgICAgIGlucHV0ICs9ICdcXG4nO1xuICAgIH1cblxuICAgIC8vIFN0cmlwIEJPTVxuICAgIGlmIChpbnB1dC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoMSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHN0YXRlID0gbmV3IFN0YXRlJDEoaW5wdXQsIG9wdGlvbnMpO1xuXG4gIHZhciBudWxscG9zID0gaW5wdXQuaW5kZXhPZignXFwwJyk7XG5cbiAgaWYgKG51bGxwb3MgIT09IC0xKSB7XG4gICAgc3RhdGUucG9zaXRpb24gPSBudWxscG9zO1xuICAgIHRocm93RXJyb3Ioc3RhdGUsICdudWxsIGJ5dGUgaXMgbm90IGFsbG93ZWQgaW4gaW5wdXQnKTtcbiAgfVxuXG4gIC8vIFVzZSAwIGFzIHN0cmluZyB0ZXJtaW5hdG9yLiBUaGF0IHNpZ25pZmljYW50bHkgc2ltcGxpZmllcyBib3VuZHMgY2hlY2suXG4gIHN0YXRlLmlucHV0ICs9ICdcXDAnO1xuXG4gIHdoaWxlIChzdGF0ZS5pbnB1dC5jaGFyQ29kZUF0KHN0YXRlLnBvc2l0aW9uKSA9PT0gMHgyMC8qIFNwYWNlICovKSB7XG4gICAgc3RhdGUubGluZUluZGVudCArPSAxO1xuICAgIHN0YXRlLnBvc2l0aW9uICs9IDE7XG4gIH1cblxuICB3aGlsZSAoc3RhdGUucG9zaXRpb24gPCAoc3RhdGUubGVuZ3RoIC0gMSkpIHtcbiAgICByZWFkRG9jdW1lbnQoc3RhdGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlLmRvY3VtZW50cztcbn1cblxuXG5mdW5jdGlvbiBsb2FkQWxsJDEoaW5wdXQsIGl0ZXJhdG9yLCBvcHRpb25zKSB7XG4gIGlmIChpdGVyYXRvciAhPT0gbnVsbCAmJiB0eXBlb2YgaXRlcmF0b3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMgPSBpdGVyYXRvcjtcbiAgICBpdGVyYXRvciA9IG51bGw7XG4gIH1cblxuICB2YXIgZG9jdW1lbnRzID0gbG9hZERvY3VtZW50cyhpbnB1dCwgb3B0aW9ucyk7XG5cbiAgaWYgKHR5cGVvZiBpdGVyYXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBkb2N1bWVudHM7XG4gIH1cblxuICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbmd0aCA9IGRvY3VtZW50cy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgaXRlcmF0b3IoZG9jdW1lbnRzW2luZGV4XSk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBsb2FkJDEoaW5wdXQsIG9wdGlvbnMpIHtcbiAgdmFyIGRvY3VtZW50cyA9IGxvYWREb2N1bWVudHMoaW5wdXQsIG9wdGlvbnMpO1xuXG4gIGlmIChkb2N1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgLyplc2xpbnQtZGlzYWJsZSBuby11bmRlZmluZWQqL1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBkb2N1bWVudHNbMF07XG4gIH1cbiAgdGhyb3cgbmV3IGV4Y2VwdGlvbignZXhwZWN0ZWQgYSBzaW5nbGUgZG9jdW1lbnQgaW4gdGhlIHN0cmVhbSwgYnV0IGZvdW5kIG1vcmUnKTtcbn1cblxuXG52YXIgbG9hZEFsbF8xID0gbG9hZEFsbCQxO1xudmFyIGxvYWRfMSAgICA9IGxvYWQkMTtcblxudmFyIGxvYWRlciA9IHtcblx0bG9hZEFsbDogbG9hZEFsbF8xLFxuXHRsb2FkOiBsb2FkXzFcbn07XG5cbi8qZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUqL1xuXG5cblxuXG5cbnZhciBfdG9TdHJpbmcgICAgICAgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIF9oYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBDSEFSX0JPTSAgICAgICAgICAgICAgICAgID0gMHhGRUZGO1xudmFyIENIQVJfVEFCICAgICAgICAgICAgICAgICAgPSAweDA5OyAvKiBUYWIgKi9cbnZhciBDSEFSX0xJTkVfRkVFRCAgICAgICAgICAgID0gMHgwQTsgLyogTEYgKi9cbnZhciBDSEFSX0NBUlJJQUdFX1JFVFVSTiAgICAgID0gMHgwRDsgLyogQ1IgKi9cbnZhciBDSEFSX1NQQUNFICAgICAgICAgICAgICAgID0gMHgyMDsgLyogU3BhY2UgKi9cbnZhciBDSEFSX0VYQ0xBTUFUSU9OICAgICAgICAgID0gMHgyMTsgLyogISAqL1xudmFyIENIQVJfRE9VQkxFX1FVT1RFICAgICAgICAgPSAweDIyOyAvKiBcIiAqL1xudmFyIENIQVJfU0hBUlAgICAgICAgICAgICAgICAgPSAweDIzOyAvKiAjICovXG52YXIgQ0hBUl9QRVJDRU5UICAgICAgICAgICAgICA9IDB4MjU7IC8qICUgKi9cbnZhciBDSEFSX0FNUEVSU0FORCAgICAgICAgICAgID0gMHgyNjsgLyogJiAqL1xudmFyIENIQVJfU0lOR0xFX1FVT1RFICAgICAgICAgPSAweDI3OyAvKiAnICovXG52YXIgQ0hBUl9BU1RFUklTSyAgICAgICAgICAgICA9IDB4MkE7IC8qICogKi9cbnZhciBDSEFSX0NPTU1BICAgICAgICAgICAgICAgID0gMHgyQzsgLyogLCAqL1xudmFyIENIQVJfTUlOVVMgICAgICAgICAgICAgICAgPSAweDJEOyAvKiAtICovXG52YXIgQ0hBUl9DT0xPTiAgICAgICAgICAgICAgICA9IDB4M0E7IC8qIDogKi9cbnZhciBDSEFSX0VRVUFMUyAgICAgICAgICAgICAgID0gMHgzRDsgLyogPSAqL1xudmFyIENIQVJfR1JFQVRFUl9USEFOICAgICAgICAgPSAweDNFOyAvKiA+ICovXG52YXIgQ0hBUl9RVUVTVElPTiAgICAgICAgICAgICA9IDB4M0Y7IC8qID8gKi9cbnZhciBDSEFSX0NPTU1FUkNJQUxfQVQgICAgICAgID0gMHg0MDsgLyogQCAqL1xudmFyIENIQVJfTEVGVF9TUVVBUkVfQlJBQ0tFVCAgPSAweDVCOyAvKiBbICovXG52YXIgQ0hBUl9SSUdIVF9TUVVBUkVfQlJBQ0tFVCA9IDB4NUQ7IC8qIF0gKi9cbnZhciBDSEFSX0dSQVZFX0FDQ0VOVCAgICAgICAgID0gMHg2MDsgLyogYCAqL1xudmFyIENIQVJfTEVGVF9DVVJMWV9CUkFDS0VUICAgPSAweDdCOyAvKiB7ICovXG52YXIgQ0hBUl9WRVJUSUNBTF9MSU5FICAgICAgICA9IDB4N0M7IC8qIHwgKi9cbnZhciBDSEFSX1JJR0hUX0NVUkxZX0JSQUNLRVQgID0gMHg3RDsgLyogfSAqL1xuXG52YXIgRVNDQVBFX1NFUVVFTkNFUyA9IHt9O1xuXG5FU0NBUEVfU0VRVUVOQ0VTWzB4MDBdICAgPSAnXFxcXDAnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDA3XSAgID0gJ1xcXFxhJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwOF0gICA9ICdcXFxcYic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MDldICAgPSAnXFxcXHQnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDBBXSAgID0gJ1xcXFxuJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgwQl0gICA9ICdcXFxcdic7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MENdICAgPSAnXFxcXGYnO1xuRVNDQVBFX1NFUVVFTkNFU1sweDBEXSAgID0gJ1xcXFxyJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgxQl0gICA9ICdcXFxcZSc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MjJdICAgPSAnXFxcXFwiJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHg1Q10gICA9ICdcXFxcXFxcXCc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4ODVdICAgPSAnXFxcXE4nO1xuRVNDQVBFX1NFUVVFTkNFU1sweEEwXSAgID0gJ1xcXFxfJztcbkVTQ0FQRV9TRVFVRU5DRVNbMHgyMDI4XSA9ICdcXFxcTCc7XG5FU0NBUEVfU0VRVUVOQ0VTWzB4MjAyOV0gPSAnXFxcXFAnO1xuXG52YXIgREVQUkVDQVRFRF9CT09MRUFOU19TWU5UQVggPSBbXG4gICd5JywgJ1knLCAneWVzJywgJ1llcycsICdZRVMnLCAnb24nLCAnT24nLCAnT04nLFxuICAnbicsICdOJywgJ25vJywgJ05vJywgJ05PJywgJ29mZicsICdPZmYnLCAnT0ZGJ1xuXTtcblxudmFyIERFUFJFQ0FURURfQkFTRTYwX1NZTlRBWCA9IC9eWy0rXT9bMC05X10rKD86OlswLTlfXSspKyg/OlxcLlswLTlfXSopPyQvO1xuXG5mdW5jdGlvbiBjb21waWxlU3R5bGVNYXAoc2NoZW1hLCBtYXApIHtcbiAgdmFyIHJlc3VsdCwga2V5cywgaW5kZXgsIGxlbmd0aCwgdGFnLCBzdHlsZSwgdHlwZTtcblxuICBpZiAobWFwID09PSBudWxsKSByZXR1cm4ge307XG5cbiAgcmVzdWx0ID0ge307XG4gIGtleXMgPSBPYmplY3Qua2V5cyhtYXApO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBrZXlzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICB0YWcgPSBrZXlzW2luZGV4XTtcbiAgICBzdHlsZSA9IFN0cmluZyhtYXBbdGFnXSk7XG5cbiAgICBpZiAodGFnLnNsaWNlKDAsIDIpID09PSAnISEnKSB7XG4gICAgICB0YWcgPSAndGFnOnlhbWwub3JnLDIwMDI6JyArIHRhZy5zbGljZSgyKTtcbiAgICB9XG4gICAgdHlwZSA9IHNjaGVtYS5jb21waWxlZFR5cGVNYXBbJ2ZhbGxiYWNrJ11bdGFnXTtcblxuICAgIGlmICh0eXBlICYmIF9oYXNPd25Qcm9wZXJ0eS5jYWxsKHR5cGUuc3R5bGVBbGlhc2VzLCBzdHlsZSkpIHtcbiAgICAgIHN0eWxlID0gdHlwZS5zdHlsZUFsaWFzZXNbc3R5bGVdO1xuICAgIH1cblxuICAgIHJlc3VsdFt0YWddID0gc3R5bGU7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBlbmNvZGVIZXgoY2hhcmFjdGVyKSB7XG4gIHZhciBzdHJpbmcsIGhhbmRsZSwgbGVuZ3RoO1xuXG4gIHN0cmluZyA9IGNoYXJhY3Rlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblxuICBpZiAoY2hhcmFjdGVyIDw9IDB4RkYpIHtcbiAgICBoYW5kbGUgPSAneCc7XG4gICAgbGVuZ3RoID0gMjtcbiAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPD0gMHhGRkZGKSB7XG4gICAgaGFuZGxlID0gJ3UnO1xuICAgIGxlbmd0aCA9IDQ7XG4gIH0gZWxzZSBpZiAoY2hhcmFjdGVyIDw9IDB4RkZGRkZGRkYpIHtcbiAgICBoYW5kbGUgPSAnVSc7XG4gICAgbGVuZ3RoID0gODtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgZXhjZXB0aW9uKCdjb2RlIHBvaW50IHdpdGhpbiBhIHN0cmluZyBtYXkgbm90IGJlIGdyZWF0ZXIgdGhhbiAweEZGRkZGRkZGJyk7XG4gIH1cblxuICByZXR1cm4gJ1xcXFwnICsgaGFuZGxlICsgY29tbW9uLnJlcGVhdCgnMCcsIGxlbmd0aCAtIHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufVxuXG5cbnZhciBRVU9USU5HX1RZUEVfU0lOR0xFID0gMSxcbiAgICBRVU9USU5HX1RZUEVfRE9VQkxFID0gMjtcblxuZnVuY3Rpb24gU3RhdGUob3B0aW9ucykge1xuICB0aGlzLnNjaGVtYSAgICAgICAgPSBvcHRpb25zWydzY2hlbWEnXSB8fCBfZGVmYXVsdDtcbiAgdGhpcy5pbmRlbnQgICAgICAgID0gTWF0aC5tYXgoMSwgKG9wdGlvbnNbJ2luZGVudCddIHx8IDIpKTtcbiAgdGhpcy5ub0FycmF5SW5kZW50ID0gb3B0aW9uc1snbm9BcnJheUluZGVudCddIHx8IGZhbHNlO1xuICB0aGlzLnNraXBJbnZhbGlkICAgPSBvcHRpb25zWydza2lwSW52YWxpZCddIHx8IGZhbHNlO1xuICB0aGlzLmZsb3dMZXZlbCAgICAgPSAoY29tbW9uLmlzTm90aGluZyhvcHRpb25zWydmbG93TGV2ZWwnXSkgPyAtMSA6IG9wdGlvbnNbJ2Zsb3dMZXZlbCddKTtcbiAgdGhpcy5zdHlsZU1hcCAgICAgID0gY29tcGlsZVN0eWxlTWFwKHRoaXMuc2NoZW1hLCBvcHRpb25zWydzdHlsZXMnXSB8fCBudWxsKTtcbiAgdGhpcy5zb3J0S2V5cyAgICAgID0gb3B0aW9uc1snc29ydEtleXMnXSB8fCBmYWxzZTtcbiAgdGhpcy5saW5lV2lkdGggICAgID0gb3B0aW9uc1snbGluZVdpZHRoJ10gfHwgODA7XG4gIHRoaXMubm9SZWZzICAgICAgICA9IG9wdGlvbnNbJ25vUmVmcyddIHx8IGZhbHNlO1xuICB0aGlzLm5vQ29tcGF0TW9kZSAgPSBvcHRpb25zWydub0NvbXBhdE1vZGUnXSB8fCBmYWxzZTtcbiAgdGhpcy5jb25kZW5zZUZsb3cgID0gb3B0aW9uc1snY29uZGVuc2VGbG93J10gfHwgZmFsc2U7XG4gIHRoaXMucXVvdGluZ1R5cGUgICA9IG9wdGlvbnNbJ3F1b3RpbmdUeXBlJ10gPT09ICdcIicgPyBRVU9USU5HX1RZUEVfRE9VQkxFIDogUVVPVElOR19UWVBFX1NJTkdMRTtcbiAgdGhpcy5mb3JjZVF1b3RlcyAgID0gb3B0aW9uc1snZm9yY2VRdW90ZXMnXSB8fCBmYWxzZTtcbiAgdGhpcy5yZXBsYWNlciAgICAgID0gdHlwZW9mIG9wdGlvbnNbJ3JlcGxhY2VyJ10gPT09ICdmdW5jdGlvbicgPyBvcHRpb25zWydyZXBsYWNlciddIDogbnVsbDtcblxuICB0aGlzLmltcGxpY2l0VHlwZXMgPSB0aGlzLnNjaGVtYS5jb21waWxlZEltcGxpY2l0O1xuICB0aGlzLmV4cGxpY2l0VHlwZXMgPSB0aGlzLnNjaGVtYS5jb21waWxlZEV4cGxpY2l0O1xuXG4gIHRoaXMudGFnID0gbnVsbDtcbiAgdGhpcy5yZXN1bHQgPSAnJztcblxuICB0aGlzLmR1cGxpY2F0ZXMgPSBbXTtcbiAgdGhpcy51c2VkRHVwbGljYXRlcyA9IG51bGw7XG59XG5cbi8vIEluZGVudHMgZXZlcnkgbGluZSBpbiBhIHN0cmluZy4gRW1wdHkgbGluZXMgKFxcbiBvbmx5KSBhcmUgbm90IGluZGVudGVkLlxuZnVuY3Rpb24gaW5kZW50U3RyaW5nKHN0cmluZywgc3BhY2VzKSB7XG4gIHZhciBpbmQgPSBjb21tb24ucmVwZWF0KCcgJywgc3BhY2VzKSxcbiAgICAgIHBvc2l0aW9uID0gMCxcbiAgICAgIG5leHQgPSAtMSxcbiAgICAgIHJlc3VsdCA9ICcnLFxuICAgICAgbGluZSxcbiAgICAgIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKHBvc2l0aW9uIDwgbGVuZ3RoKSB7XG4gICAgbmV4dCA9IHN0cmluZy5pbmRleE9mKCdcXG4nLCBwb3NpdGlvbik7XG4gICAgaWYgKG5leHQgPT09IC0xKSB7XG4gICAgICBsaW5lID0gc3RyaW5nLnNsaWNlKHBvc2l0aW9uKTtcbiAgICAgIHBvc2l0aW9uID0gbGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lID0gc3RyaW5nLnNsaWNlKHBvc2l0aW9uLCBuZXh0ICsgMSk7XG4gICAgICBwb3NpdGlvbiA9IG5leHQgKyAxO1xuICAgIH1cblxuICAgIGlmIChsaW5lLmxlbmd0aCAmJiBsaW5lICE9PSAnXFxuJykgcmVzdWx0ICs9IGluZDtcblxuICAgIHJlc3VsdCArPSBsaW5lO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVOZXh0TGluZShzdGF0ZSwgbGV2ZWwpIHtcbiAgcmV0dXJuICdcXG4nICsgY29tbW9uLnJlcGVhdCgnICcsIHN0YXRlLmluZGVudCAqIGxldmVsKTtcbn1cblxuZnVuY3Rpb24gdGVzdEltcGxpY2l0UmVzb2x2aW5nKHN0YXRlLCBzdHIpIHtcbiAgdmFyIGluZGV4LCBsZW5ndGgsIHR5cGU7XG5cbiAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHN0YXRlLmltcGxpY2l0VHlwZXMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHR5cGUgPSBzdGF0ZS5pbXBsaWNpdFR5cGVzW2luZGV4XTtcblxuICAgIGlmICh0eXBlLnJlc29sdmUoc3RyKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBbMzNdIHMtd2hpdGUgOjo9IHMtc3BhY2UgfCBzLXRhYlxuZnVuY3Rpb24gaXNXaGl0ZXNwYWNlKGMpIHtcbiAgcmV0dXJuIGMgPT09IENIQVJfU1BBQ0UgfHwgYyA9PT0gQ0hBUl9UQUI7XG59XG5cbi8vIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2hhcmFjdGVyIGNhbiBiZSBwcmludGVkIHdpdGhvdXQgZXNjYXBpbmcuXG4vLyBGcm9tIFlBTUwgMS4yOiBcImFueSBhbGxvd2VkIGNoYXJhY3RlcnMga25vd24gdG8gYmUgbm9uLXByaW50YWJsZVxuLy8gc2hvdWxkIGFsc28gYmUgZXNjYXBlZC4gW0hvd2V2ZXIsXSBUaGlzIGlzbuKAmXQgbWFuZGF0b3J5XCJcbi8vIERlcml2ZWQgZnJvbSBuYi1jaGFyIC0gXFx0IC0gI3g4NSAtICN4QTAgLSAjeDIwMjggLSAjeDIwMjkuXG5mdW5jdGlvbiBpc1ByaW50YWJsZShjKSB7XG4gIHJldHVybiAgKDB4MDAwMjAgPD0gYyAmJiBjIDw9IDB4MDAwMDdFKVxuICAgICAgfHwgKCgweDAwMEExIDw9IGMgJiYgYyA8PSAweDAwRDdGRikgJiYgYyAhPT0gMHgyMDI4ICYmIGMgIT09IDB4MjAyOSlcbiAgICAgIHx8ICgoMHgwRTAwMCA8PSBjICYmIGMgPD0gMHgwMEZGRkQpICYmIGMgIT09IENIQVJfQk9NKVxuICAgICAgfHwgICgweDEwMDAwIDw9IGMgJiYgYyA8PSAweDEwRkZGRik7XG59XG5cbi8vIFszNF0gbnMtY2hhciA6Oj0gbmItY2hhciAtIHMtd2hpdGVcbi8vIFsyN10gbmItY2hhciA6Oj0gYy1wcmludGFibGUgLSBiLWNoYXIgLSBjLWJ5dGUtb3JkZXItbWFya1xuLy8gWzI2XSBiLWNoYXIgIDo6PSBiLWxpbmUtZmVlZCB8IGItY2FycmlhZ2UtcmV0dXJuXG4vLyBJbmNsdWRpbmcgcy13aGl0ZSAoZm9yIHNvbWUgcmVhc29uLCBleGFtcGxlcyBkb2Vzbid0IG1hdGNoIHNwZWNzIGluIHRoaXMgYXNwZWN0KVxuLy8gbnMtY2hhciA6Oj0gYy1wcmludGFibGUgLSBiLWxpbmUtZmVlZCAtIGItY2FycmlhZ2UtcmV0dXJuIC0gYy1ieXRlLW9yZGVyLW1hcmtcbmZ1bmN0aW9uIGlzTnNDaGFyT3JXaGl0ZXNwYWNlKGMpIHtcbiAgcmV0dXJuIGlzUHJpbnRhYmxlKGMpXG4gICAgJiYgYyAhPT0gQ0hBUl9CT01cbiAgICAvLyAtIGItY2hhclxuICAgICYmIGMgIT09IENIQVJfQ0FSUklBR0VfUkVUVVJOXG4gICAgJiYgYyAhPT0gQ0hBUl9MSU5FX0ZFRUQ7XG59XG5cbi8vIFsxMjddICBucy1wbGFpbi1zYWZlKGMpIDo6PSBjID0gZmxvdy1vdXQgIOKHkiBucy1wbGFpbi1zYWZlLW91dFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBmbG93LWluICAg4oeSIG5zLXBsYWluLXNhZmUtaW5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjID0gYmxvY2sta2V5IOKHkiBucy1wbGFpbi1zYWZlLW91dFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBmbG93LWtleSAg4oeSIG5zLXBsYWluLXNhZmUtaW5cbi8vIFsxMjhdIG5zLXBsYWluLXNhZmUtb3V0IDo6PSBucy1jaGFyXG4vLyBbMTI5XSAgbnMtcGxhaW4tc2FmZS1pbiA6Oj0gbnMtY2hhciAtIGMtZmxvdy1pbmRpY2F0b3Jcbi8vIFsxMzBdICBucy1wbGFpbi1jaGFyKGMpIDo6PSAgKCBucy1wbGFpbi1zYWZlKGMpIC0g4oCcOuKAnSAtIOKAnCPigJ0gKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIC8qIEFuIG5zLWNoYXIgcHJlY2VkaW5nICovIOKAnCPigJ0gKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIOKAnDrigJ0gLyogRm9sbG93ZWQgYnkgYW4gbnMtcGxhaW4tc2FmZShjKSAqLyApXG5mdW5jdGlvbiBpc1BsYWluU2FmZShjLCBwcmV2LCBpbmJsb2NrKSB7XG4gIHZhciBjSXNOc0NoYXJPcldoaXRlc3BhY2UgPSBpc05zQ2hhck9yV2hpdGVzcGFjZShjKTtcbiAgdmFyIGNJc05zQ2hhciA9IGNJc05zQ2hhck9yV2hpdGVzcGFjZSAmJiAhaXNXaGl0ZXNwYWNlKGMpO1xuICByZXR1cm4gKFxuICAgIC8vIG5zLXBsYWluLXNhZmVcbiAgICBpbmJsb2NrID8gLy8gYyA9IGZsb3ctaW5cbiAgICAgIGNJc05zQ2hhck9yV2hpdGVzcGFjZVxuICAgICAgOiBjSXNOc0NoYXJPcldoaXRlc3BhY2VcbiAgICAgICAgLy8gLSBjLWZsb3ctaW5kaWNhdG9yXG4gICAgICAgICYmIGMgIT09IENIQVJfQ09NTUFcbiAgICAgICAgJiYgYyAhPT0gQ0hBUl9MRUZUX1NRVUFSRV9CUkFDS0VUXG4gICAgICAgICYmIGMgIT09IENIQVJfUklHSFRfU1FVQVJFX0JSQUNLRVRcbiAgICAgICAgJiYgYyAhPT0gQ0hBUl9MRUZUX0NVUkxZX0JSQUNLRVRcbiAgICAgICAgJiYgYyAhPT0gQ0hBUl9SSUdIVF9DVVJMWV9CUkFDS0VUXG4gIClcbiAgICAvLyBucy1wbGFpbi1jaGFyXG4gICAgJiYgYyAhPT0gQ0hBUl9TSEFSUCAvLyBmYWxzZSBvbiAnIydcbiAgICAmJiAhKHByZXYgPT09IENIQVJfQ09MT04gJiYgIWNJc05zQ2hhcikgLy8gZmFsc2Ugb24gJzogJ1xuICAgIHx8IChpc05zQ2hhck9yV2hpdGVzcGFjZShwcmV2KSAmJiAhaXNXaGl0ZXNwYWNlKHByZXYpICYmIGMgPT09IENIQVJfU0hBUlApIC8vIGNoYW5nZSB0byB0cnVlIG9uICdbXiBdIydcbiAgICB8fCAocHJldiA9PT0gQ0hBUl9DT0xPTiAmJiBjSXNOc0NoYXIpOyAvLyBjaGFuZ2UgdG8gdHJ1ZSBvbiAnOlteIF0nXG59XG5cbi8vIFNpbXBsaWZpZWQgdGVzdCBmb3IgdmFsdWVzIGFsbG93ZWQgYXMgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBwbGFpbiBzdHlsZS5cbmZ1bmN0aW9uIGlzUGxhaW5TYWZlRmlyc3QoYykge1xuICAvLyBVc2VzIGEgc3Vic2V0IG9mIG5zLWNoYXIgLSBjLWluZGljYXRvclxuICAvLyB3aGVyZSBucy1jaGFyID0gbmItY2hhciAtIHMtd2hpdGUuXG4gIC8vIE5vIHN1cHBvcnQgb2YgKCAoIOKAnD/igJ0gfCDigJw64oCdIHwg4oCcLeKAnSApIC8qIEZvbGxvd2VkIGJ5IGFuIG5zLXBsYWluLXNhZmUoYykpICovICkgcGFydFxuICByZXR1cm4gaXNQcmludGFibGUoYykgJiYgYyAhPT0gQ0hBUl9CT01cbiAgICAmJiAhaXNXaGl0ZXNwYWNlKGMpIC8vIC0gcy13aGl0ZVxuICAgIC8vIC0gKGMtaW5kaWNhdG9yIDo6PVxuICAgIC8vIOKAnC3igJ0gfCDigJw/4oCdIHwg4oCcOuKAnSB8IOKAnCzigJ0gfCDigJxb4oCdIHwg4oCcXeKAnSB8IOKAnHvigJ0gfCDigJx94oCdXG4gICAgJiYgYyAhPT0gQ0hBUl9NSU5VU1xuICAgICYmIGMgIT09IENIQVJfUVVFU1RJT05cbiAgICAmJiBjICE9PSBDSEFSX0NPTE9OXG4gICAgJiYgYyAhPT0gQ0hBUl9DT01NQVxuICAgICYmIGMgIT09IENIQVJfTEVGVF9TUVVBUkVfQlJBQ0tFVFxuICAgICYmIGMgIT09IENIQVJfUklHSFRfU1FVQVJFX0JSQUNLRVRcbiAgICAmJiBjICE9PSBDSEFSX0xFRlRfQ1VSTFlfQlJBQ0tFVFxuICAgICYmIGMgIT09IENIQVJfUklHSFRfQ1VSTFlfQlJBQ0tFVFxuICAgIC8vIHwg4oCcI+KAnSB8IOKAnCbigJ0gfCDigJwq4oCdIHwg4oCcIeKAnSB8IOKAnHzigJ0gfCDigJw94oCdIHwg4oCcPuKAnSB8IOKAnCfigJ0gfCDigJxcIuKAnVxuICAgICYmIGMgIT09IENIQVJfU0hBUlBcbiAgICAmJiBjICE9PSBDSEFSX0FNUEVSU0FORFxuICAgICYmIGMgIT09IENIQVJfQVNURVJJU0tcbiAgICAmJiBjICE9PSBDSEFSX0VYQ0xBTUFUSU9OXG4gICAgJiYgYyAhPT0gQ0hBUl9WRVJUSUNBTF9MSU5FXG4gICAgJiYgYyAhPT0gQ0hBUl9FUVVBTFNcbiAgICAmJiBjICE9PSBDSEFSX0dSRUFURVJfVEhBTlxuICAgICYmIGMgIT09IENIQVJfU0lOR0xFX1FVT1RFXG4gICAgJiYgYyAhPT0gQ0hBUl9ET1VCTEVfUVVPVEVcbiAgICAvLyB8IOKAnCXigJ0gfCDigJxA4oCdIHwg4oCcYOKAnSlcbiAgICAmJiBjICE9PSBDSEFSX1BFUkNFTlRcbiAgICAmJiBjICE9PSBDSEFSX0NPTU1FUkNJQUxfQVRcbiAgICAmJiBjICE9PSBDSEFSX0dSQVZFX0FDQ0VOVDtcbn1cblxuLy8gU2ltcGxpZmllZCB0ZXN0IGZvciB2YWx1ZXMgYWxsb3dlZCBhcyB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gcGxhaW4gc3R5bGUuXG5mdW5jdGlvbiBpc1BsYWluU2FmZUxhc3QoYykge1xuICAvLyBqdXN0IG5vdCB3aGl0ZXNwYWNlIG9yIGNvbG9uLCBpdCB3aWxsIGJlIGNoZWNrZWQgdG8gYmUgcGxhaW4gY2hhcmFjdGVyIGxhdGVyXG4gIHJldHVybiAhaXNXaGl0ZXNwYWNlKGMpICYmIGMgIT09IENIQVJfQ09MT047XG59XG5cbi8vIFNhbWUgYXMgJ3N0cmluZycuY29kZVBvaW50QXQocG9zKSwgYnV0IHdvcmtzIGluIG9sZGVyIGJyb3dzZXJzLlxuZnVuY3Rpb24gY29kZVBvaW50QXQoc3RyaW5nLCBwb3MpIHtcbiAgdmFyIGZpcnN0ID0gc3RyaW5nLmNoYXJDb2RlQXQocG9zKSwgc2Vjb25kO1xuICBpZiAoZmlyc3QgPj0gMHhEODAwICYmIGZpcnN0IDw9IDB4REJGRiAmJiBwb3MgKyAxIDwgc3RyaW5nLmxlbmd0aCkge1xuICAgIHNlY29uZCA9IHN0cmluZy5jaGFyQ29kZUF0KHBvcyArIDEpO1xuICAgIGlmIChzZWNvbmQgPj0gMHhEQzAwICYmIHNlY29uZCA8PSAweERGRkYpIHtcbiAgICAgIC8vIGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgICAgcmV0dXJuIChmaXJzdCAtIDB4RDgwMCkgKiAweDQwMCArIHNlY29uZCAtIDB4REMwMCArIDB4MTAwMDA7XG4gICAgfVxuICB9XG4gIHJldHVybiBmaXJzdDtcbn1cblxuLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIGJsb2NrIGluZGVudGF0aW9uIGluZGljYXRvciBpcyByZXF1aXJlZC5cbmZ1bmN0aW9uIG5lZWRJbmRlbnRJbmRpY2F0b3Ioc3RyaW5nKSB7XG4gIHZhciBsZWFkaW5nU3BhY2VSZSA9IC9eXFxuKiAvO1xuICByZXR1cm4gbGVhZGluZ1NwYWNlUmUudGVzdChzdHJpbmcpO1xufVxuXG52YXIgU1RZTEVfUExBSU4gICA9IDEsXG4gICAgU1RZTEVfU0lOR0xFICA9IDIsXG4gICAgU1RZTEVfTElURVJBTCA9IDMsXG4gICAgU1RZTEVfRk9MREVEICA9IDQsXG4gICAgU1RZTEVfRE9VQkxFICA9IDU7XG5cbi8vIERldGVybWluZXMgd2hpY2ggc2NhbGFyIHN0eWxlcyBhcmUgcG9zc2libGUgYW5kIHJldHVybnMgdGhlIHByZWZlcnJlZCBzdHlsZS5cbi8vIGxpbmVXaWR0aCA9IC0xID0+IG5vIGxpbWl0LlxuLy8gUHJlLWNvbmRpdGlvbnM6IHN0ci5sZW5ndGggPiAwLlxuLy8gUG9zdC1jb25kaXRpb25zOlxuLy8gICAgU1RZTEVfUExBSU4gb3IgU1RZTEVfU0lOR0xFID0+IG5vIFxcbiBhcmUgaW4gdGhlIHN0cmluZy5cbi8vICAgIFNUWUxFX0xJVEVSQUwgPT4gbm8gbGluZXMgYXJlIHN1aXRhYmxlIGZvciBmb2xkaW5nIChvciBsaW5lV2lkdGggaXMgLTEpLlxuLy8gICAgU1RZTEVfRk9MREVEID0+IGEgbGluZSA+IGxpbmVXaWR0aCBhbmQgY2FuIGJlIGZvbGRlZCAoYW5kIGxpbmVXaWR0aCAhPSAtMSkuXG5mdW5jdGlvbiBjaG9vc2VTY2FsYXJTdHlsZShzdHJpbmcsIHNpbmdsZUxpbmVPbmx5LCBpbmRlbnRQZXJMZXZlbCwgbGluZVdpZHRoLFxuICB0ZXN0QW1iaWd1b3VzVHlwZSwgcXVvdGluZ1R5cGUsIGZvcmNlUXVvdGVzLCBpbmJsb2NrKSB7XG5cbiAgdmFyIGk7XG4gIHZhciBjaGFyID0gMDtcbiAgdmFyIHByZXZDaGFyID0gbnVsbDtcbiAgdmFyIGhhc0xpbmVCcmVhayA9IGZhbHNlO1xuICB2YXIgaGFzRm9sZGFibGVMaW5lID0gZmFsc2U7IC8vIG9ubHkgY2hlY2tlZCBpZiBzaG91bGRUcmFja1dpZHRoXG4gIHZhciBzaG91bGRUcmFja1dpZHRoID0gbGluZVdpZHRoICE9PSAtMTtcbiAgdmFyIHByZXZpb3VzTGluZUJyZWFrID0gLTE7IC8vIGNvdW50IHRoZSBmaXJzdCBsaW5lIGNvcnJlY3RseVxuICB2YXIgcGxhaW4gPSBpc1BsYWluU2FmZUZpcnN0KGNvZGVQb2ludEF0KHN0cmluZywgMCkpXG4gICAgICAgICAgJiYgaXNQbGFpblNhZmVMYXN0KGNvZGVQb2ludEF0KHN0cmluZywgc3RyaW5nLmxlbmd0aCAtIDEpKTtcblxuICBpZiAoc2luZ2xlTGluZU9ubHkgfHwgZm9yY2VRdW90ZXMpIHtcbiAgICAvLyBDYXNlOiBubyBibG9jayBzdHlsZXMuXG4gICAgLy8gQ2hlY2sgZm9yIGRpc2FsbG93ZWQgY2hhcmFjdGVycyB0byBydWxlIG91dCBwbGFpbiBhbmQgc2luZ2xlLlxuICAgIGZvciAoaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBjaGFyID49IDB4MTAwMDAgPyBpICs9IDIgOiBpKyspIHtcbiAgICAgIGNoYXIgPSBjb2RlUG9pbnRBdChzdHJpbmcsIGkpO1xuICAgICAgaWYgKCFpc1ByaW50YWJsZShjaGFyKSkge1xuICAgICAgICByZXR1cm4gU1RZTEVfRE9VQkxFO1xuICAgICAgfVxuICAgICAgcGxhaW4gPSBwbGFpbiAmJiBpc1BsYWluU2FmZShjaGFyLCBwcmV2Q2hhciwgaW5ibG9jayk7XG4gICAgICBwcmV2Q2hhciA9IGNoYXI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIENhc2U6IGJsb2NrIHN0eWxlcyBwZXJtaXR0ZWQuXG4gICAgZm9yIChpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGNoYXIgPj0gMHgxMDAwMCA/IGkgKz0gMiA6IGkrKykge1xuICAgICAgY2hhciA9IGNvZGVQb2ludEF0KHN0cmluZywgaSk7XG4gICAgICBpZiAoY2hhciA9PT0gQ0hBUl9MSU5FX0ZFRUQpIHtcbiAgICAgICAgaGFzTGluZUJyZWFrID0gdHJ1ZTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYW55IGxpbmUgY2FuIGJlIGZvbGRlZC5cbiAgICAgICAgaWYgKHNob3VsZFRyYWNrV2lkdGgpIHtcbiAgICAgICAgICBoYXNGb2xkYWJsZUxpbmUgPSBoYXNGb2xkYWJsZUxpbmUgfHxcbiAgICAgICAgICAgIC8vIEZvbGRhYmxlIGxpbmUgPSB0b28gbG9uZywgYW5kIG5vdCBtb3JlLWluZGVudGVkLlxuICAgICAgICAgICAgKGkgLSBwcmV2aW91c0xpbmVCcmVhayAtIDEgPiBsaW5lV2lkdGggJiZcbiAgICAgICAgICAgICBzdHJpbmdbcHJldmlvdXNMaW5lQnJlYWsgKyAxXSAhPT0gJyAnKTtcbiAgICAgICAgICBwcmV2aW91c0xpbmVCcmVhayA9IGk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIWlzUHJpbnRhYmxlKGNoYXIpKSB7XG4gICAgICAgIHJldHVybiBTVFlMRV9ET1VCTEU7XG4gICAgICB9XG4gICAgICBwbGFpbiA9IHBsYWluICYmIGlzUGxhaW5TYWZlKGNoYXIsIHByZXZDaGFyLCBpbmJsb2NrKTtcbiAgICAgIHByZXZDaGFyID0gY2hhcjtcbiAgICB9XG4gICAgLy8gaW4gY2FzZSB0aGUgZW5kIGlzIG1pc3NpbmcgYSBcXG5cbiAgICBoYXNGb2xkYWJsZUxpbmUgPSBoYXNGb2xkYWJsZUxpbmUgfHwgKHNob3VsZFRyYWNrV2lkdGggJiZcbiAgICAgIChpIC0gcHJldmlvdXNMaW5lQnJlYWsgLSAxID4gbGluZVdpZHRoICYmXG4gICAgICAgc3RyaW5nW3ByZXZpb3VzTGluZUJyZWFrICsgMV0gIT09ICcgJykpO1xuICB9XG4gIC8vIEFsdGhvdWdoIGV2ZXJ5IHN0eWxlIGNhbiByZXByZXNlbnQgXFxuIHdpdGhvdXQgZXNjYXBpbmcsIHByZWZlciBibG9jayBzdHlsZXNcbiAgLy8gZm9yIG11bHRpbGluZSwgc2luY2UgdGhleSdyZSBtb3JlIHJlYWRhYmxlIGFuZCB0aGV5IGRvbid0IGFkZCBlbXB0eSBsaW5lcy5cbiAgLy8gQWxzbyBwcmVmZXIgZm9sZGluZyBhIHN1cGVyLWxvbmcgbGluZS5cbiAgaWYgKCFoYXNMaW5lQnJlYWsgJiYgIWhhc0ZvbGRhYmxlTGluZSkge1xuICAgIC8vIFN0cmluZ3MgaW50ZXJwcmV0YWJsZSBhcyBhbm90aGVyIHR5cGUgaGF2ZSB0byBiZSBxdW90ZWQ7XG4gICAgLy8gZS5nLiB0aGUgc3RyaW5nICd0cnVlJyB2cy4gdGhlIGJvb2xlYW4gdHJ1ZS5cbiAgICBpZiAocGxhaW4gJiYgIWZvcmNlUXVvdGVzICYmICF0ZXN0QW1iaWd1b3VzVHlwZShzdHJpbmcpKSB7XG4gICAgICByZXR1cm4gU1RZTEVfUExBSU47XG4gICAgfVxuICAgIHJldHVybiBxdW90aW5nVHlwZSA9PT0gUVVPVElOR19UWVBFX0RPVUJMRSA/IFNUWUxFX0RPVUJMRSA6IFNUWUxFX1NJTkdMRTtcbiAgfVxuICAvLyBFZGdlIGNhc2U6IGJsb2NrIGluZGVudGF0aW9uIGluZGljYXRvciBjYW4gb25seSBoYXZlIG9uZSBkaWdpdC5cbiAgaWYgKGluZGVudFBlckxldmVsID4gOSAmJiBuZWVkSW5kZW50SW5kaWNhdG9yKHN0cmluZykpIHtcbiAgICByZXR1cm4gU1RZTEVfRE9VQkxFO1xuICB9XG4gIC8vIEF0IHRoaXMgcG9pbnQgd2Uga25vdyBibG9jayBzdHlsZXMgYXJlIHZhbGlkLlxuICAvLyBQcmVmZXIgbGl0ZXJhbCBzdHlsZSB1bmxlc3Mgd2Ugd2FudCB0byBmb2xkLlxuICBpZiAoIWZvcmNlUXVvdGVzKSB7XG4gICAgcmV0dXJuIGhhc0ZvbGRhYmxlTGluZSA/IFNUWUxFX0ZPTERFRCA6IFNUWUxFX0xJVEVSQUw7XG4gIH1cbiAgcmV0dXJuIHF1b3RpbmdUeXBlID09PSBRVU9USU5HX1RZUEVfRE9VQkxFID8gU1RZTEVfRE9VQkxFIDogU1RZTEVfU0lOR0xFO1xufVxuXG4vLyBOb3RlOiBsaW5lIGJyZWFraW5nL2ZvbGRpbmcgaXMgaW1wbGVtZW50ZWQgZm9yIG9ubHkgdGhlIGZvbGRlZCBzdHlsZS5cbi8vIE5CLiBXZSBkcm9wIHRoZSBsYXN0IHRyYWlsaW5nIG5ld2xpbmUgKGlmIGFueSkgb2YgYSByZXR1cm5lZCBibG9jayBzY2FsYXJcbi8vICBzaW5jZSB0aGUgZHVtcGVyIGFkZHMgaXRzIG93biBuZXdsaW5lLiBUaGlzIGFsd2F5cyB3b3Jrczpcbi8vICAgIOKAoiBObyBlbmRpbmcgbmV3bGluZSA9PiB1bmFmZmVjdGVkOyBhbHJlYWR5IHVzaW5nIHN0cmlwIFwiLVwiIGNob21waW5nLlxuLy8gICAg4oCiIEVuZGluZyBuZXdsaW5lICAgID0+IHJlbW92ZWQgdGhlbiByZXN0b3JlZC5cbi8vICBJbXBvcnRhbnRseSwgdGhpcyBrZWVwcyB0aGUgXCIrXCIgY2hvbXAgaW5kaWNhdG9yIGZyb20gZ2FpbmluZyBhbiBleHRyYSBsaW5lLlxuZnVuY3Rpb24gd3JpdGVTY2FsYXIoc3RhdGUsIHN0cmluZywgbGV2ZWwsIGlza2V5LCBpbmJsb2NrKSB7XG4gIHN0YXRlLmR1bXAgPSAoZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdHJpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gc3RhdGUucXVvdGluZ1R5cGUgPT09IFFVT1RJTkdfVFlQRV9ET1VCTEUgPyAnXCJcIicgOiBcIicnXCI7XG4gICAgfVxuICAgIGlmICghc3RhdGUubm9Db21wYXRNb2RlKSB7XG4gICAgICBpZiAoREVQUkVDQVRFRF9CT09MRUFOU19TWU5UQVguaW5kZXhPZihzdHJpbmcpICE9PSAtMSB8fCBERVBSRUNBVEVEX0JBU0U2MF9TWU5UQVgudGVzdChzdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5xdW90aW5nVHlwZSA9PT0gUVVPVElOR19UWVBFX0RPVUJMRSA/ICgnXCInICsgc3RyaW5nICsgJ1wiJykgOiAoXCInXCIgKyBzdHJpbmcgKyBcIidcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGluZGVudCA9IHN0YXRlLmluZGVudCAqIE1hdGgubWF4KDEsIGxldmVsKTsgLy8gbm8gMC1pbmRlbnQgc2NhbGFyc1xuICAgIC8vIEFzIGluZGVudGF0aW9uIGdldHMgZGVlcGVyLCBsZXQgdGhlIHdpZHRoIGRlY3JlYXNlIG1vbm90b25pY2FsbHlcbiAgICAvLyB0byB0aGUgbG93ZXIgYm91bmQgbWluKHN0YXRlLmxpbmVXaWR0aCwgNDApLlxuICAgIC8vIE5vdGUgdGhhdCB0aGlzIGltcGxpZXNcbiAgICAvLyAgc3RhdGUubGluZVdpZHRoIOKJpCA0MCArIHN0YXRlLmluZGVudDogd2lkdGggaXMgZml4ZWQgYXQgdGhlIGxvd2VyIGJvdW5kLlxuICAgIC8vICBzdGF0ZS5saW5lV2lkdGggPiA0MCArIHN0YXRlLmluZGVudDogd2lkdGggZGVjcmVhc2VzIHVudGlsIHRoZSBsb3dlciBib3VuZC5cbiAgICAvLyBUaGlzIGJlaGF2ZXMgYmV0dGVyIHRoYW4gYSBjb25zdGFudCBtaW5pbXVtIHdpZHRoIHdoaWNoIGRpc2FsbG93cyBuYXJyb3dlciBvcHRpb25zLFxuICAgIC8vIG9yIGFuIGluZGVudCB0aHJlc2hvbGQgd2hpY2ggY2F1c2VzIHRoZSB3aWR0aCB0byBzdWRkZW5seSBpbmNyZWFzZS5cbiAgICB2YXIgbGluZVdpZHRoID0gc3RhdGUubGluZVdpZHRoID09PSAtMVxuICAgICAgPyAtMSA6IE1hdGgubWF4KE1hdGgubWluKHN0YXRlLmxpbmVXaWR0aCwgNDApLCBzdGF0ZS5saW5lV2lkdGggLSBpbmRlbnQpO1xuXG4gICAgLy8gV2l0aG91dCBrbm93aW5nIGlmIGtleXMgYXJlIGltcGxpY2l0L2V4cGxpY2l0LCBhc3N1bWUgaW1wbGljaXQgZm9yIHNhZmV0eS5cbiAgICB2YXIgc2luZ2xlTGluZU9ubHkgPSBpc2tleVxuICAgICAgLy8gTm8gYmxvY2sgc3R5bGVzIGluIGZsb3cgbW9kZS5cbiAgICAgIHx8IChzdGF0ZS5mbG93TGV2ZWwgPiAtMSAmJiBsZXZlbCA+PSBzdGF0ZS5mbG93TGV2ZWwpO1xuICAgIGZ1bmN0aW9uIHRlc3RBbWJpZ3VpdHkoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gdGVzdEltcGxpY2l0UmVzb2x2aW5nKHN0YXRlLCBzdHJpbmcpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoY2hvb3NlU2NhbGFyU3R5bGUoc3RyaW5nLCBzaW5nbGVMaW5lT25seSwgc3RhdGUuaW5kZW50LCBsaW5lV2lkdGgsXG4gICAgICB0ZXN0QW1iaWd1aXR5LCBzdGF0ZS5xdW90aW5nVHlwZSwgc3RhdGUuZm9yY2VRdW90ZXMgJiYgIWlza2V5LCBpbmJsb2NrKSkge1xuXG4gICAgICBjYXNlIFNUWUxFX1BMQUlOOlxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgY2FzZSBTVFlMRV9TSU5HTEU6XG4gICAgICAgIHJldHVybiBcIidcIiArIHN0cmluZy5yZXBsYWNlKC8nL2csIFwiJydcIikgKyBcIidcIjtcbiAgICAgIGNhc2UgU1RZTEVfTElURVJBTDpcbiAgICAgICAgcmV0dXJuICd8JyArIGJsb2NrSGVhZGVyKHN0cmluZywgc3RhdGUuaW5kZW50KVxuICAgICAgICAgICsgZHJvcEVuZGluZ05ld2xpbmUoaW5kZW50U3RyaW5nKHN0cmluZywgaW5kZW50KSk7XG4gICAgICBjYXNlIFNUWUxFX0ZPTERFRDpcbiAgICAgICAgcmV0dXJuICc+JyArIGJsb2NrSGVhZGVyKHN0cmluZywgc3RhdGUuaW5kZW50KVxuICAgICAgICAgICsgZHJvcEVuZGluZ05ld2xpbmUoaW5kZW50U3RyaW5nKGZvbGRTdHJpbmcoc3RyaW5nLCBsaW5lV2lkdGgpLCBpbmRlbnQpKTtcbiAgICAgIGNhc2UgU1RZTEVfRE9VQkxFOlxuICAgICAgICByZXR1cm4gJ1wiJyArIGVzY2FwZVN0cmluZyhzdHJpbmcpICsgJ1wiJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBleGNlcHRpb24oJ2ltcG9zc2libGUgZXJyb3I6IGludmFsaWQgc2NhbGFyIHN0eWxlJyk7XG4gICAgfVxuICB9KCkpO1xufVxuXG4vLyBQcmUtY29uZGl0aW9uczogc3RyaW5nIGlzIHZhbGlkIGZvciBhIGJsb2NrIHNjYWxhciwgMSA8PSBpbmRlbnRQZXJMZXZlbCA8PSA5LlxuZnVuY3Rpb24gYmxvY2tIZWFkZXIoc3RyaW5nLCBpbmRlbnRQZXJMZXZlbCkge1xuICB2YXIgaW5kZW50SW5kaWNhdG9yID0gbmVlZEluZGVudEluZGljYXRvcihzdHJpbmcpID8gU3RyaW5nKGluZGVudFBlckxldmVsKSA6ICcnO1xuXG4gIC8vIG5vdGUgdGhlIHNwZWNpYWwgY2FzZTogdGhlIHN0cmluZyAnXFxuJyBjb3VudHMgYXMgYSBcInRyYWlsaW5nXCIgZW1wdHkgbGluZS5cbiAgdmFyIGNsaXAgPSAgICAgICAgICBzdHJpbmdbc3RyaW5nLmxlbmd0aCAtIDFdID09PSAnXFxuJztcbiAgdmFyIGtlZXAgPSBjbGlwICYmIChzdHJpbmdbc3RyaW5nLmxlbmd0aCAtIDJdID09PSAnXFxuJyB8fCBzdHJpbmcgPT09ICdcXG4nKTtcbiAgdmFyIGNob21wID0ga2VlcCA/ICcrJyA6IChjbGlwID8gJycgOiAnLScpO1xuXG4gIHJldHVybiBpbmRlbnRJbmRpY2F0b3IgKyBjaG9tcCArICdcXG4nO1xufVxuXG4vLyAoU2VlIHRoZSBub3RlIGZvciB3cml0ZVNjYWxhci4pXG5mdW5jdGlvbiBkcm9wRW5kaW5nTmV3bGluZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZ1tzdHJpbmcubGVuZ3RoIC0gMV0gPT09ICdcXG4nID8gc3RyaW5nLnNsaWNlKDAsIC0xKSA6IHN0cmluZztcbn1cblxuLy8gTm90ZTogYSBsb25nIGxpbmUgd2l0aG91dCBhIHN1aXRhYmxlIGJyZWFrIHBvaW50IHdpbGwgZXhjZWVkIHRoZSB3aWR0aCBsaW1pdC5cbi8vIFByZS1jb25kaXRpb25zOiBldmVyeSBjaGFyIGluIHN0ciBpc1ByaW50YWJsZSwgc3RyLmxlbmd0aCA+IDAsIHdpZHRoID4gMC5cbmZ1bmN0aW9uIGZvbGRTdHJpbmcoc3RyaW5nLCB3aWR0aCkge1xuICAvLyBJbiBmb2xkZWQgc3R5bGUsICRrJCBjb25zZWN1dGl2ZSBuZXdsaW5lcyBvdXRwdXQgYXMgJGsrMSQgbmV3bGluZXPigJRcbiAgLy8gdW5sZXNzIHRoZXkncmUgYmVmb3JlIG9yIGFmdGVyIGEgbW9yZS1pbmRlbnRlZCBsaW5lLCBvciBhdCB0aGUgdmVyeVxuICAvLyBiZWdpbm5pbmcgb3IgZW5kLCBpbiB3aGljaCBjYXNlICRrJCBtYXBzIHRvICRrJC5cbiAgLy8gVGhlcmVmb3JlLCBwYXJzZSBlYWNoIGNodW5rIGFzIG5ld2xpbmUocykgZm9sbG93ZWQgYnkgYSBjb250ZW50IGxpbmUuXG4gIHZhciBsaW5lUmUgPSAvKFxcbispKFteXFxuXSopL2c7XG5cbiAgLy8gZmlyc3QgbGluZSAocG9zc2libHkgYW4gZW1wdHkgbGluZSlcbiAgdmFyIHJlc3VsdCA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5leHRMRiA9IHN0cmluZy5pbmRleE9mKCdcXG4nKTtcbiAgICBuZXh0TEYgPSBuZXh0TEYgIT09IC0xID8gbmV4dExGIDogc3RyaW5nLmxlbmd0aDtcbiAgICBsaW5lUmUubGFzdEluZGV4ID0gbmV4dExGO1xuICAgIHJldHVybiBmb2xkTGluZShzdHJpbmcuc2xpY2UoMCwgbmV4dExGKSwgd2lkdGgpO1xuICB9KCkpO1xuICAvLyBJZiB3ZSBoYXZlbid0IHJlYWNoZWQgdGhlIGZpcnN0IGNvbnRlbnQgbGluZSB5ZXQsIGRvbid0IGFkZCBhbiBleHRyYSBcXG4uXG4gIHZhciBwcmV2TW9yZUluZGVudGVkID0gc3RyaW5nWzBdID09PSAnXFxuJyB8fCBzdHJpbmdbMF0gPT09ICcgJztcbiAgdmFyIG1vcmVJbmRlbnRlZDtcblxuICAvLyByZXN0IG9mIHRoZSBsaW5lc1xuICB2YXIgbWF0Y2g7XG4gIHdoaWxlICgobWF0Y2ggPSBsaW5lUmUuZXhlYyhzdHJpbmcpKSkge1xuICAgIHZhciBwcmVmaXggPSBtYXRjaFsxXSwgbGluZSA9IG1hdGNoWzJdO1xuICAgIG1vcmVJbmRlbnRlZCA9IChsaW5lWzBdID09PSAnICcpO1xuICAgIHJlc3VsdCArPSBwcmVmaXhcbiAgICAgICsgKCFwcmV2TW9yZUluZGVudGVkICYmICFtb3JlSW5kZW50ZWQgJiYgbGluZSAhPT0gJydcbiAgICAgICAgPyAnXFxuJyA6ICcnKVxuICAgICAgKyBmb2xkTGluZShsaW5lLCB3aWR0aCk7XG4gICAgcHJldk1vcmVJbmRlbnRlZCA9IG1vcmVJbmRlbnRlZDtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIEdyZWVkeSBsaW5lIGJyZWFraW5nLlxuLy8gUGlja3MgdGhlIGxvbmdlc3QgbGluZSB1bmRlciB0aGUgbGltaXQgZWFjaCB0aW1lLFxuLy8gb3RoZXJ3aXNlIHNldHRsZXMgZm9yIHRoZSBzaG9ydGVzdCBsaW5lIG92ZXIgdGhlIGxpbWl0LlxuLy8gTkIuIE1vcmUtaW5kZW50ZWQgbGluZXMgKmNhbm5vdCogYmUgZm9sZGVkLCBhcyB0aGF0IHdvdWxkIGFkZCBhbiBleHRyYSBcXG4uXG5mdW5jdGlvbiBmb2xkTGluZShsaW5lLCB3aWR0aCkge1xuICBpZiAobGluZSA9PT0gJycgfHwgbGluZVswXSA9PT0gJyAnKSByZXR1cm4gbGluZTtcblxuICAvLyBTaW5jZSBhIG1vcmUtaW5kZW50ZWQgbGluZSBhZGRzIGEgXFxuLCBicmVha3MgY2FuJ3QgYmUgZm9sbG93ZWQgYnkgYSBzcGFjZS5cbiAgdmFyIGJyZWFrUmUgPSAvIFteIF0vZzsgLy8gbm90ZTogdGhlIG1hdGNoIGluZGV4IHdpbGwgYWx3YXlzIGJlIDw9IGxlbmd0aC0yLlxuICB2YXIgbWF0Y2g7XG4gIC8vIHN0YXJ0IGlzIGFuIGluY2x1c2l2ZSBpbmRleC4gZW5kLCBjdXJyLCBhbmQgbmV4dCBhcmUgZXhjbHVzaXZlLlxuICB2YXIgc3RhcnQgPSAwLCBlbmQsIGN1cnIgPSAwLCBuZXh0ID0gMDtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIC8vIEludmFyaWFudHM6IDAgPD0gc3RhcnQgPD0gbGVuZ3RoLTEuXG4gIC8vICAgMCA8PSBjdXJyIDw9IG5leHQgPD0gbWF4KDAsIGxlbmd0aC0yKS4gY3VyciAtIHN0YXJ0IDw9IHdpZHRoLlxuICAvLyBJbnNpZGUgdGhlIGxvb3A6XG4gIC8vICAgQSBtYXRjaCBpbXBsaWVzIGxlbmd0aCA+PSAyLCBzbyBjdXJyIGFuZCBuZXh0IGFyZSA8PSBsZW5ndGgtMi5cbiAgd2hpbGUgKChtYXRjaCA9IGJyZWFrUmUuZXhlYyhsaW5lKSkpIHtcbiAgICBuZXh0ID0gbWF0Y2guaW5kZXg7XG4gICAgLy8gbWFpbnRhaW4gaW52YXJpYW50OiBjdXJyIC0gc3RhcnQgPD0gd2lkdGhcbiAgICBpZiAobmV4dCAtIHN0YXJ0ID4gd2lkdGgpIHtcbiAgICAgIGVuZCA9IChjdXJyID4gc3RhcnQpID8gY3VyciA6IG5leHQ7IC8vIGRlcml2ZSBlbmQgPD0gbGVuZ3RoLTJcbiAgICAgIHJlc3VsdCArPSAnXFxuJyArIGxpbmUuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgICAvLyBza2lwIHRoZSBzcGFjZSB0aGF0IHdhcyBvdXRwdXQgYXMgXFxuXG4gICAgICBzdGFydCA9IGVuZCArIDE7ICAgICAgICAgICAgICAgICAgICAvLyBkZXJpdmUgc3RhcnQgPD0gbGVuZ3RoLTFcbiAgICB9XG4gICAgY3VyciA9IG5leHQ7XG4gIH1cblxuICAvLyBCeSB0aGUgaW52YXJpYW50cywgc3RhcnQgPD0gbGVuZ3RoLTEsIHNvIHRoZXJlIGlzIHNvbWV0aGluZyBsZWZ0IG92ZXIuXG4gIC8vIEl0IGlzIGVpdGhlciB0aGUgd2hvbGUgc3RyaW5nIG9yIGEgcGFydCBzdGFydGluZyBmcm9tIG5vbi13aGl0ZXNwYWNlLlxuICByZXN1bHQgKz0gJ1xcbic7XG4gIC8vIEluc2VydCBhIGJyZWFrIGlmIHRoZSByZW1haW5kZXIgaXMgdG9vIGxvbmcgYW5kIHRoZXJlIGlzIGEgYnJlYWsgYXZhaWxhYmxlLlxuICBpZiAobGluZS5sZW5ndGggLSBzdGFydCA+IHdpZHRoICYmIGN1cnIgPiBzdGFydCkge1xuICAgIHJlc3VsdCArPSBsaW5lLnNsaWNlKHN0YXJ0LCBjdXJyKSArICdcXG4nICsgbGluZS5zbGljZShjdXJyICsgMSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ICs9IGxpbmUuc2xpY2Uoc3RhcnQpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5zbGljZSgxKTsgLy8gZHJvcCBleHRyYSBcXG4gam9pbmVyXG59XG5cbi8vIEVzY2FwZXMgYSBkb3VibGUtcXVvdGVkIHN0cmluZy5cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICB2YXIgY2hhciA9IDA7XG4gIHZhciBlc2NhcGVTZXE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmcubGVuZ3RoOyBjaGFyID49IDB4MTAwMDAgPyBpICs9IDIgOiBpKyspIHtcbiAgICBjaGFyID0gY29kZVBvaW50QXQoc3RyaW5nLCBpKTtcbiAgICBlc2NhcGVTZXEgPSBFU0NBUEVfU0VRVUVOQ0VTW2NoYXJdO1xuXG4gICAgaWYgKCFlc2NhcGVTZXEgJiYgaXNQcmludGFibGUoY2hhcikpIHtcbiAgICAgIHJlc3VsdCArPSBzdHJpbmdbaV07XG4gICAgICBpZiAoY2hhciA+PSAweDEwMDAwKSByZXN1bHQgKz0gc3RyaW5nW2kgKyAxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ICs9IGVzY2FwZVNlcSB8fCBlbmNvZGVIZXgoY2hhcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG93U2VxdWVuY2Uoc3RhdGUsIGxldmVsLCBvYmplY3QpIHtcbiAgdmFyIF9yZXN1bHQgPSAnJyxcbiAgICAgIF90YWcgICAgPSBzdGF0ZS50YWcsXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aCxcbiAgICAgIHZhbHVlO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3QubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHZhbHVlID0gb2JqZWN0W2luZGV4XTtcblxuICAgIGlmIChzdGF0ZS5yZXBsYWNlcikge1xuICAgICAgdmFsdWUgPSBzdGF0ZS5yZXBsYWNlci5jYWxsKG9iamVjdCwgU3RyaW5nKGluZGV4KSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8vIFdyaXRlIG9ubHkgdmFsaWQgZWxlbWVudHMsIHB1dCBudWxsIGluc3RlYWQgb2YgaW52YWxpZCBlbGVtZW50cy5cbiAgICBpZiAod3JpdGVOb2RlKHN0YXRlLCBsZXZlbCwgdmFsdWUsIGZhbHNlLCBmYWxzZSkgfHxcbiAgICAgICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgIHdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwsIG51bGwsIGZhbHNlLCBmYWxzZSkpKSB7XG5cbiAgICAgIGlmIChfcmVzdWx0ICE9PSAnJykgX3Jlc3VsdCArPSAnLCcgKyAoIXN0YXRlLmNvbmRlbnNlRmxvdyA/ICcgJyA6ICcnKTtcbiAgICAgIF9yZXN1bHQgKz0gc3RhdGUuZHVtcDtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS50YWcgPSBfdGFnO1xuICBzdGF0ZS5kdW1wID0gJ1snICsgX3Jlc3VsdCArICddJztcbn1cblxuZnVuY3Rpb24gd3JpdGVCbG9ja1NlcXVlbmNlKHN0YXRlLCBsZXZlbCwgb2JqZWN0LCBjb21wYWN0KSB7XG4gIHZhciBfcmVzdWx0ID0gJycsXG4gICAgICBfdGFnICAgID0gc3RhdGUudGFnLFxuICAgICAgaW5kZXgsXG4gICAgICBsZW5ndGgsXG4gICAgICB2YWx1ZTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICB2YWx1ZSA9IG9iamVjdFtpbmRleF07XG5cbiAgICBpZiAoc3RhdGUucmVwbGFjZXIpIHtcbiAgICAgIHZhbHVlID0gc3RhdGUucmVwbGFjZXIuY2FsbChvYmplY3QsIFN0cmluZyhpbmRleCksIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBXcml0ZSBvbmx5IHZhbGlkIGVsZW1lbnRzLCBwdXQgbnVsbCBpbnN0ZWFkIG9mIGludmFsaWQgZWxlbWVudHMuXG4gICAgaWYgKHdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwgKyAxLCB2YWx1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUpIHx8XG4gICAgICAgICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICB3cml0ZU5vZGUoc3RhdGUsIGxldmVsICsgMSwgbnVsbCwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIHRydWUpKSkge1xuXG4gICAgICBpZiAoIWNvbXBhY3QgfHwgX3Jlc3VsdCAhPT0gJycpIHtcbiAgICAgICAgX3Jlc3VsdCArPSBnZW5lcmF0ZU5leHRMaW5lKHN0YXRlLCBsZXZlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZS5kdW1wICYmIENIQVJfTElORV9GRUVEID09PSBzdGF0ZS5kdW1wLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgX3Jlc3VsdCArPSAnLSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfcmVzdWx0ICs9ICctICc7XG4gICAgICB9XG5cbiAgICAgIF9yZXN1bHQgKz0gc3RhdGUuZHVtcDtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS50YWcgPSBfdGFnO1xuICBzdGF0ZS5kdW1wID0gX3Jlc3VsdCB8fCAnW10nOyAvLyBFbXB0eSBzZXF1ZW5jZSBpZiBubyB2YWxpZCB2YWx1ZXMuXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvd01hcHBpbmcoc3RhdGUsIGxldmVsLCBvYmplY3QpIHtcbiAgdmFyIF9yZXN1bHQgICAgICAgPSAnJyxcbiAgICAgIF90YWcgICAgICAgICAgPSBzdGF0ZS50YWcsXG4gICAgICBvYmplY3RLZXlMaXN0ID0gT2JqZWN0LmtleXMob2JqZWN0KSxcbiAgICAgIGluZGV4LFxuICAgICAgbGVuZ3RoLFxuICAgICAgb2JqZWN0S2V5LFxuICAgICAgb2JqZWN0VmFsdWUsXG4gICAgICBwYWlyQnVmZmVyO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3RLZXlMaXN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcblxuICAgIHBhaXJCdWZmZXIgPSAnJztcbiAgICBpZiAoX3Jlc3VsdCAhPT0gJycpIHBhaXJCdWZmZXIgKz0gJywgJztcblxuICAgIGlmIChzdGF0ZS5jb25kZW5zZUZsb3cpIHBhaXJCdWZmZXIgKz0gJ1wiJztcblxuICAgIG9iamVjdEtleSA9IG9iamVjdEtleUxpc3RbaW5kZXhdO1xuICAgIG9iamVjdFZhbHVlID0gb2JqZWN0W29iamVjdEtleV07XG5cbiAgICBpZiAoc3RhdGUucmVwbGFjZXIpIHtcbiAgICAgIG9iamVjdFZhbHVlID0gc3RhdGUucmVwbGFjZXIuY2FsbChvYmplY3QsIG9iamVjdEtleSwgb2JqZWN0VmFsdWUpO1xuICAgIH1cblxuICAgIGlmICghd3JpdGVOb2RlKHN0YXRlLCBsZXZlbCwgb2JqZWN0S2V5LCBmYWxzZSwgZmFsc2UpKSB7XG4gICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGlzIHBhaXIgYmVjYXVzZSBvZiBpbnZhbGlkIGtleTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuZHVtcC5sZW5ndGggPiAxMDI0KSBwYWlyQnVmZmVyICs9ICc/ICc7XG5cbiAgICBwYWlyQnVmZmVyICs9IHN0YXRlLmR1bXAgKyAoc3RhdGUuY29uZGVuc2VGbG93ID8gJ1wiJyA6ICcnKSArICc6JyArIChzdGF0ZS5jb25kZW5zZUZsb3cgPyAnJyA6ICcgJyk7XG5cbiAgICBpZiAoIXdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwsIG9iamVjdFZhbHVlLCBmYWxzZSwgZmFsc2UpKSB7XG4gICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGlzIHBhaXIgYmVjYXVzZSBvZiBpbnZhbGlkIHZhbHVlLlxuICAgIH1cblxuICAgIHBhaXJCdWZmZXIgKz0gc3RhdGUuZHVtcDtcblxuICAgIC8vIEJvdGgga2V5IGFuZCB2YWx1ZSBhcmUgdmFsaWQuXG4gICAgX3Jlc3VsdCArPSBwYWlyQnVmZmVyO1xuICB9XG5cbiAgc3RhdGUudGFnID0gX3RhZztcbiAgc3RhdGUuZHVtcCA9ICd7JyArIF9yZXN1bHQgKyAnfSc7XG59XG5cbmZ1bmN0aW9uIHdyaXRlQmxvY2tNYXBwaW5nKHN0YXRlLCBsZXZlbCwgb2JqZWN0LCBjb21wYWN0KSB7XG4gIHZhciBfcmVzdWx0ICAgICAgID0gJycsXG4gICAgICBfdGFnICAgICAgICAgID0gc3RhdGUudGFnLFxuICAgICAgb2JqZWN0S2V5TGlzdCA9IE9iamVjdC5rZXlzKG9iamVjdCksXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aCxcbiAgICAgIG9iamVjdEtleSxcbiAgICAgIG9iamVjdFZhbHVlLFxuICAgICAgZXhwbGljaXRQYWlyLFxuICAgICAgcGFpckJ1ZmZlcjtcblxuICAvLyBBbGxvdyBzb3J0aW5nIGtleXMgc28gdGhhdCB0aGUgb3V0cHV0IGZpbGUgaXMgZGV0ZXJtaW5pc3RpY1xuICBpZiAoc3RhdGUuc29ydEtleXMgPT09IHRydWUpIHtcbiAgICAvLyBEZWZhdWx0IHNvcnRpbmdcbiAgICBvYmplY3RLZXlMaXN0LnNvcnQoKTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygc3RhdGUuc29ydEtleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBDdXN0b20gc29ydCBmdW5jdGlvblxuICAgIG9iamVjdEtleUxpc3Quc29ydChzdGF0ZS5zb3J0S2V5cyk7XG4gIH0gZWxzZSBpZiAoc3RhdGUuc29ydEtleXMpIHtcbiAgICAvLyBTb21ldGhpbmcgaXMgd3JvbmdcbiAgICB0aHJvdyBuZXcgZXhjZXB0aW9uKCdzb3J0S2V5cyBtdXN0IGJlIGEgYm9vbGVhbiBvciBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0S2V5TGlzdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgcGFpckJ1ZmZlciA9ICcnO1xuXG4gICAgaWYgKCFjb21wYWN0IHx8IF9yZXN1bHQgIT09ICcnKSB7XG4gICAgICBwYWlyQnVmZmVyICs9IGdlbmVyYXRlTmV4dExpbmUoc3RhdGUsIGxldmVsKTtcbiAgICB9XG5cbiAgICBvYmplY3RLZXkgPSBvYmplY3RLZXlMaXN0W2luZGV4XTtcbiAgICBvYmplY3RWYWx1ZSA9IG9iamVjdFtvYmplY3RLZXldO1xuXG4gICAgaWYgKHN0YXRlLnJlcGxhY2VyKSB7XG4gICAgICBvYmplY3RWYWx1ZSA9IHN0YXRlLnJlcGxhY2VyLmNhbGwob2JqZWN0LCBvYmplY3RLZXksIG9iamVjdFZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoIXdyaXRlTm9kZShzdGF0ZSwgbGV2ZWwgKyAxLCBvYmplY3RLZXksIHRydWUsIHRydWUsIHRydWUpKSB7XG4gICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGlzIHBhaXIgYmVjYXVzZSBvZiBpbnZhbGlkIGtleS5cbiAgICB9XG5cbiAgICBleHBsaWNpdFBhaXIgPSAoc3RhdGUudGFnICE9PSBudWxsICYmIHN0YXRlLnRhZyAhPT0gJz8nKSB8fFxuICAgICAgICAgICAgICAgICAgIChzdGF0ZS5kdW1wICYmIHN0YXRlLmR1bXAubGVuZ3RoID4gMTAyNCk7XG5cbiAgICBpZiAoZXhwbGljaXRQYWlyKSB7XG4gICAgICBpZiAoc3RhdGUuZHVtcCAmJiBDSEFSX0xJTkVfRkVFRCA9PT0gc3RhdGUuZHVtcC5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgIHBhaXJCdWZmZXIgKz0gJz8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFpckJ1ZmZlciArPSAnPyAnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhaXJCdWZmZXIgKz0gc3RhdGUuZHVtcDtcblxuICAgIGlmIChleHBsaWNpdFBhaXIpIHtcbiAgICAgIHBhaXJCdWZmZXIgKz0gZ2VuZXJhdGVOZXh0TGluZShzdGF0ZSwgbGV2ZWwpO1xuICAgIH1cblxuICAgIGlmICghd3JpdGVOb2RlKHN0YXRlLCBsZXZlbCArIDEsIG9iamVjdFZhbHVlLCB0cnVlLCBleHBsaWNpdFBhaXIpKSB7XG4gICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGlzIHBhaXIgYmVjYXVzZSBvZiBpbnZhbGlkIHZhbHVlLlxuICAgIH1cblxuICAgIGlmIChzdGF0ZS5kdW1wICYmIENIQVJfTElORV9GRUVEID09PSBzdGF0ZS5kdW1wLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgIHBhaXJCdWZmZXIgKz0gJzonO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWlyQnVmZmVyICs9ICc6ICc7XG4gICAgfVxuXG4gICAgcGFpckJ1ZmZlciArPSBzdGF0ZS5kdW1wO1xuXG4gICAgLy8gQm90aCBrZXkgYW5kIHZhbHVlIGFyZSB2YWxpZC5cbiAgICBfcmVzdWx0ICs9IHBhaXJCdWZmZXI7XG4gIH1cblxuICBzdGF0ZS50YWcgPSBfdGFnO1xuICBzdGF0ZS5kdW1wID0gX3Jlc3VsdCB8fCAne30nOyAvLyBFbXB0eSBtYXBwaW5nIGlmIG5vIHZhbGlkIHBhaXJzLlxufVxuXG5mdW5jdGlvbiBkZXRlY3RUeXBlKHN0YXRlLCBvYmplY3QsIGV4cGxpY2l0KSB7XG4gIHZhciBfcmVzdWx0LCB0eXBlTGlzdCwgaW5kZXgsIGxlbmd0aCwgdHlwZSwgc3R5bGU7XG5cbiAgdHlwZUxpc3QgPSBleHBsaWNpdCA/IHN0YXRlLmV4cGxpY2l0VHlwZXMgOiBzdGF0ZS5pbXBsaWNpdFR5cGVzO1xuXG4gIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSB0eXBlTGlzdC5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgdHlwZSA9IHR5cGVMaXN0W2luZGV4XTtcblxuICAgIGlmICgodHlwZS5pbnN0YW5jZU9mICB8fCB0eXBlLnByZWRpY2F0ZSkgJiZcbiAgICAgICAgKCF0eXBlLmluc3RhbmNlT2YgfHwgKCh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JykgJiYgKG9iamVjdCBpbnN0YW5jZW9mIHR5cGUuaW5zdGFuY2VPZikpKSAmJlxuICAgICAgICAoIXR5cGUucHJlZGljYXRlICB8fCB0eXBlLnByZWRpY2F0ZShvYmplY3QpKSkge1xuXG4gICAgICBpZiAoZXhwbGljaXQpIHtcbiAgICAgICAgaWYgKHR5cGUubXVsdGkgJiYgdHlwZS5yZXByZXNlbnROYW1lKSB7XG4gICAgICAgICAgc3RhdGUudGFnID0gdHlwZS5yZXByZXNlbnROYW1lKG9iamVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGUudGFnID0gdHlwZS50YWc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLnRhZyA9ICc/JztcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUucmVwcmVzZW50KSB7XG4gICAgICAgIHN0eWxlID0gc3RhdGUuc3R5bGVNYXBbdHlwZS50YWddIHx8IHR5cGUuZGVmYXVsdFN0eWxlO1xuXG4gICAgICAgIGlmIChfdG9TdHJpbmcuY2FsbCh0eXBlLnJlcHJlc2VudCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpIHtcbiAgICAgICAgICBfcmVzdWx0ID0gdHlwZS5yZXByZXNlbnQob2JqZWN0LCBzdHlsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoX2hhc093blByb3BlcnR5LmNhbGwodHlwZS5yZXByZXNlbnQsIHN0eWxlKSkge1xuICAgICAgICAgIF9yZXN1bHQgPSB0eXBlLnJlcHJlc2VudFtzdHlsZV0ob2JqZWN0LCBzdHlsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbignITwnICsgdHlwZS50YWcgKyAnPiB0YWcgcmVzb2x2ZXIgYWNjZXB0cyBub3QgXCInICsgc3R5bGUgKyAnXCIgc3R5bGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLmR1bXAgPSBfcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIFNlcmlhbGl6ZXMgYG9iamVjdGAgYW5kIHdyaXRlcyBpdCB0byBnbG9iYWwgYHJlc3VsdGAuXG4vLyBSZXR1cm5zIHRydWUgb24gc3VjY2Vzcywgb3IgZmFsc2Ugb24gaW52YWxpZCBvYmplY3QuXG4vL1xuZnVuY3Rpb24gd3JpdGVOb2RlKHN0YXRlLCBsZXZlbCwgb2JqZWN0LCBibG9jaywgY29tcGFjdCwgaXNrZXksIGlzYmxvY2tzZXEpIHtcbiAgc3RhdGUudGFnID0gbnVsbDtcbiAgc3RhdGUuZHVtcCA9IG9iamVjdDtcblxuICBpZiAoIWRldGVjdFR5cGUoc3RhdGUsIG9iamVjdCwgZmFsc2UpKSB7XG4gICAgZGV0ZWN0VHlwZShzdGF0ZSwgb2JqZWN0LCB0cnVlKTtcbiAgfVxuXG4gIHZhciB0eXBlID0gX3RvU3RyaW5nLmNhbGwoc3RhdGUuZHVtcCk7XG4gIHZhciBpbmJsb2NrID0gYmxvY2s7XG4gIHZhciB0YWdTdHI7XG5cbiAgaWYgKGJsb2NrKSB7XG4gICAgYmxvY2sgPSAoc3RhdGUuZmxvd0xldmVsIDwgMCB8fCBzdGF0ZS5mbG93TGV2ZWwgPiBsZXZlbCk7XG4gIH1cblxuICB2YXIgb2JqZWN0T3JBcnJheSA9IHR5cGUgPT09ICdbb2JqZWN0IE9iamVjdF0nIHx8IHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScsXG4gICAgICBkdXBsaWNhdGVJbmRleCxcbiAgICAgIGR1cGxpY2F0ZTtcblxuICBpZiAob2JqZWN0T3JBcnJheSkge1xuICAgIGR1cGxpY2F0ZUluZGV4ID0gc3RhdGUuZHVwbGljYXRlcy5pbmRleE9mKG9iamVjdCk7XG4gICAgZHVwbGljYXRlID0gZHVwbGljYXRlSW5kZXggIT09IC0xO1xuICB9XG5cbiAgaWYgKChzdGF0ZS50YWcgIT09IG51bGwgJiYgc3RhdGUudGFnICE9PSAnPycpIHx8IGR1cGxpY2F0ZSB8fCAoc3RhdGUuaW5kZW50ICE9PSAyICYmIGxldmVsID4gMCkpIHtcbiAgICBjb21wYWN0ID0gZmFsc2U7XG4gIH1cblxuICBpZiAoZHVwbGljYXRlICYmIHN0YXRlLnVzZWREdXBsaWNhdGVzW2R1cGxpY2F0ZUluZGV4XSkge1xuICAgIHN0YXRlLmR1bXAgPSAnKnJlZl8nICsgZHVwbGljYXRlSW5kZXg7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9iamVjdE9yQXJyYXkgJiYgZHVwbGljYXRlICYmICFzdGF0ZS51c2VkRHVwbGljYXRlc1tkdXBsaWNhdGVJbmRleF0pIHtcbiAgICAgIHN0YXRlLnVzZWREdXBsaWNhdGVzW2R1cGxpY2F0ZUluZGV4XSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgaWYgKGJsb2NrICYmIChPYmplY3Qua2V5cyhzdGF0ZS5kdW1wKS5sZW5ndGggIT09IDApKSB7XG4gICAgICAgIHdyaXRlQmxvY2tNYXBwaW5nKHN0YXRlLCBsZXZlbCwgc3RhdGUuZHVtcCwgY29tcGFjdCk7XG4gICAgICAgIGlmIChkdXBsaWNhdGUpIHtcbiAgICAgICAgICBzdGF0ZS5kdW1wID0gJyZyZWZfJyArIGR1cGxpY2F0ZUluZGV4ICsgc3RhdGUuZHVtcDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3JpdGVGbG93TWFwcGluZyhzdGF0ZSwgbGV2ZWwsIHN0YXRlLmR1bXApO1xuICAgICAgICBpZiAoZHVwbGljYXRlKSB7XG4gICAgICAgICAgc3RhdGUuZHVtcCA9ICcmcmVmXycgKyBkdXBsaWNhdGVJbmRleCArICcgJyArIHN0YXRlLmR1bXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIGlmIChibG9jayAmJiAoc3RhdGUuZHVtcC5sZW5ndGggIT09IDApKSB7XG4gICAgICAgIGlmIChzdGF0ZS5ub0FycmF5SW5kZW50ICYmICFpc2Jsb2Nrc2VxICYmIGxldmVsID4gMCkge1xuICAgICAgICAgIHdyaXRlQmxvY2tTZXF1ZW5jZShzdGF0ZSwgbGV2ZWwgLSAxLCBzdGF0ZS5kdW1wLCBjb21wYWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3cml0ZUJsb2NrU2VxdWVuY2Uoc3RhdGUsIGxldmVsLCBzdGF0ZS5kdW1wLCBjb21wYWN0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZHVwbGljYXRlKSB7XG4gICAgICAgICAgc3RhdGUuZHVtcCA9ICcmcmVmXycgKyBkdXBsaWNhdGVJbmRleCArIHN0YXRlLmR1bXA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdyaXRlRmxvd1NlcXVlbmNlKHN0YXRlLCBsZXZlbCwgc3RhdGUuZHVtcCk7XG4gICAgICAgIGlmIChkdXBsaWNhdGUpIHtcbiAgICAgICAgICBzdGF0ZS5kdW1wID0gJyZyZWZfJyArIGR1cGxpY2F0ZUluZGV4ICsgJyAnICsgc3RhdGUuZHVtcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICAgIGlmIChzdGF0ZS50YWcgIT09ICc/Jykge1xuICAgICAgICB3cml0ZVNjYWxhcihzdGF0ZSwgc3RhdGUuZHVtcCwgbGV2ZWwsIGlza2V5LCBpbmJsb2NrKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFVuZGVmaW5lZF0nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdGF0ZS5za2lwSW52YWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgdGhyb3cgbmV3IGV4Y2VwdGlvbigndW5hY2NlcHRhYmxlIGtpbmQgb2YgYW4gb2JqZWN0IHRvIGR1bXAgJyArIHR5cGUpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS50YWcgIT09IG51bGwgJiYgc3RhdGUudGFnICE9PSAnPycpIHtcbiAgICAgIC8vIE5lZWQgdG8gZW5jb2RlIGFsbCBjaGFyYWN0ZXJzIGV4Y2VwdCB0aG9zZSBhbGxvd2VkIGJ5IHRoZSBzcGVjOlxuICAgICAgLy9cbiAgICAgIC8vIFszNV0gbnMtZGVjLWRpZ2l0ICAgIDo6PSAgWyN4MzAtI3gzOV0gLyogMC05ICovXG4gICAgICAvLyBbMzZdIG5zLWhleC1kaWdpdCAgICA6Oj0gIG5zLWRlYy1kaWdpdFxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfCBbI3g0MS0jeDQ2XSAvKiBBLUYgKi8gfCBbI3g2MS0jeDY2XSAvKiBhLWYgKi9cbiAgICAgIC8vIFszN10gbnMtYXNjaWktbGV0dGVyIDo6PSAgWyN4NDEtI3g1QV0gLyogQS1aICovIHwgWyN4NjEtI3g3QV0gLyogYS16ICovXG4gICAgICAvLyBbMzhdIG5zLXdvcmQtY2hhciAgICA6Oj0gIG5zLWRlYy1kaWdpdCB8IG5zLWFzY2lpLWxldHRlciB8IOKAnC3igJ1cbiAgICAgIC8vIFszOV0gbnMtdXJpLWNoYXIgICAgIDo6PSAg4oCcJeKAnSBucy1oZXgtZGlnaXQgbnMtaGV4LWRpZ2l0IHwgbnMtd29yZC1jaGFyIHwg4oCcI+KAnVxuICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfCDigJw74oCdIHwg4oCcL+KAnSB8IOKAnD/igJ0gfCDigJw64oCdIHwg4oCcQOKAnSB8IOKAnCbigJ0gfCDigJw94oCdIHwg4oCcK+KAnSB8IOKAnCTigJ0gfCDigJws4oCdXG4gICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB8IOKAnF/igJ0gfCDigJwu4oCdIHwg4oCcIeKAnSB8IOKAnH7igJ0gfCDigJwq4oCdIHwg4oCcJ+KAnSB8IOKAnCjigJ0gfCDigJwp4oCdIHwg4oCcW+KAnSB8IOKAnF3igJ1cbiAgICAgIC8vXG4gICAgICAvLyBBbHNvIG5lZWQgdG8gZW5jb2RlICchJyBiZWNhdXNlIGl0IGhhcyBzcGVjaWFsIG1lYW5pbmcgKGVuZCBvZiB0YWcgcHJlZml4KS5cbiAgICAgIC8vXG4gICAgICB0YWdTdHIgPSBlbmNvZGVVUkkoXG4gICAgICAgIHN0YXRlLnRhZ1swXSA9PT0gJyEnID8gc3RhdGUudGFnLnNsaWNlKDEpIDogc3RhdGUudGFnXG4gICAgICApLnJlcGxhY2UoLyEvZywgJyUyMScpO1xuXG4gICAgICBpZiAoc3RhdGUudGFnWzBdID09PSAnIScpIHtcbiAgICAgICAgdGFnU3RyID0gJyEnICsgdGFnU3RyO1xuICAgICAgfSBlbHNlIGlmICh0YWdTdHIuc2xpY2UoMCwgMTgpID09PSAndGFnOnlhbWwub3JnLDIwMDI6Jykge1xuICAgICAgICB0YWdTdHIgPSAnISEnICsgdGFnU3RyLnNsaWNlKDE4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhZ1N0ciA9ICchPCcgKyB0YWdTdHIgKyAnPic7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmR1bXAgPSB0YWdTdHIgKyAnICcgKyBzdGF0ZS5kdW1wO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBnZXREdXBsaWNhdGVSZWZlcmVuY2VzKG9iamVjdCwgc3RhdGUpIHtcbiAgdmFyIG9iamVjdHMgPSBbXSxcbiAgICAgIGR1cGxpY2F0ZXNJbmRleGVzID0gW10sXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aDtcblxuICBpbnNwZWN0Tm9kZShvYmplY3QsIG9iamVjdHMsIGR1cGxpY2F0ZXNJbmRleGVzKTtcblxuICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gZHVwbGljYXRlc0luZGV4ZXMubGVuZ3RoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgIHN0YXRlLmR1cGxpY2F0ZXMucHVzaChvYmplY3RzW2R1cGxpY2F0ZXNJbmRleGVzW2luZGV4XV0pO1xuICB9XG4gIHN0YXRlLnVzZWREdXBsaWNhdGVzID0gbmV3IEFycmF5KGxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIGluc3BlY3ROb2RlKG9iamVjdCwgb2JqZWN0cywgZHVwbGljYXRlc0luZGV4ZXMpIHtcbiAgdmFyIG9iamVjdEtleUxpc3QsXG4gICAgICBpbmRleCxcbiAgICAgIGxlbmd0aDtcblxuICBpZiAob2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgaW5kZXggPSBvYmplY3RzLmluZGV4T2Yob2JqZWN0KTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBpZiAoZHVwbGljYXRlc0luZGV4ZXMuaW5kZXhPZihpbmRleCkgPT09IC0xKSB7XG4gICAgICAgIGR1cGxpY2F0ZXNJbmRleGVzLnB1c2goaW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvYmplY3RzLnB1c2gob2JqZWN0KTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICBmb3IgKGluZGV4ID0gMCwgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgICBpbnNwZWN0Tm9kZShvYmplY3RbaW5kZXhdLCBvYmplY3RzLCBkdXBsaWNhdGVzSW5kZXhlcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdEtleUxpc3QgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gICAgICAgIGZvciAoaW5kZXggPSAwLCBsZW5ndGggPSBvYmplY3RLZXlMaXN0Lmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7IGluZGV4ICs9IDEpIHtcbiAgICAgICAgICBpbnNwZWN0Tm9kZShvYmplY3Rbb2JqZWN0S2V5TGlzdFtpbmRleF1dLCBvYmplY3RzLCBkdXBsaWNhdGVzSW5kZXhlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZHVtcCQxKGlucHV0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBzdGF0ZSA9IG5ldyBTdGF0ZShvcHRpb25zKTtcblxuICBpZiAoIXN0YXRlLm5vUmVmcykgZ2V0RHVwbGljYXRlUmVmZXJlbmNlcyhpbnB1dCwgc3RhdGUpO1xuXG4gIHZhciB2YWx1ZSA9IGlucHV0O1xuXG4gIGlmIChzdGF0ZS5yZXBsYWNlcikge1xuICAgIHZhbHVlID0gc3RhdGUucmVwbGFjZXIuY2FsbCh7ICcnOiB2YWx1ZSB9LCAnJywgdmFsdWUpO1xuICB9XG5cbiAgaWYgKHdyaXRlTm9kZShzdGF0ZSwgMCwgdmFsdWUsIHRydWUsIHRydWUpKSByZXR1cm4gc3RhdGUuZHVtcCArICdcXG4nO1xuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGR1bXBfMSA9IGR1bXAkMTtcblxudmFyIGR1bXBlciA9IHtcblx0ZHVtcDogZHVtcF8xXG59O1xuXG5mdW5jdGlvbiByZW5hbWVkKGZyb20sIHRvKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiB5YW1sLicgKyBmcm9tICsgJyBpcyByZW1vdmVkIGluIGpzLXlhbWwgNC4gJyArXG4gICAgICAnVXNlIHlhbWwuJyArIHRvICsgJyBpbnN0ZWFkLCB3aGljaCBpcyBub3cgc2FmZSBieSBkZWZhdWx0LicpO1xuICB9O1xufVxuXG5cbnZhciBUeXBlICAgICAgICAgICAgICAgID0gdHlwZTtcbnZhciBTY2hlbWEgICAgICAgICAgICAgID0gc2NoZW1hO1xudmFyIEZBSUxTQUZFX1NDSEVNQSAgICAgPSBmYWlsc2FmZTtcbnZhciBKU09OX1NDSEVNQSAgICAgICAgID0ganNvbjtcbnZhciBDT1JFX1NDSEVNQSAgICAgICAgID0gY29yZTtcbnZhciBERUZBVUxUX1NDSEVNQSAgICAgID0gX2RlZmF1bHQ7XG52YXIgbG9hZCAgICAgICAgICAgICAgICA9IGxvYWRlci5sb2FkO1xudmFyIGxvYWRBbGwgICAgICAgICAgICAgPSBsb2FkZXIubG9hZEFsbDtcbnZhciBkdW1wICAgICAgICAgICAgICAgID0gZHVtcGVyLmR1bXA7XG52YXIgWUFNTEV4Y2VwdGlvbiAgICAgICA9IGV4Y2VwdGlvbjtcblxuLy8gUmUtZXhwb3J0IGFsbCB0eXBlcyBpbiBjYXNlIHVzZXIgd2FudHMgdG8gY3JlYXRlIGN1c3RvbSBzY2hlbWFcbnZhciB0eXBlcyA9IHtcbiAgYmluYXJ5OiAgICBiaW5hcnksXG4gIGZsb2F0OiAgICAgZmxvYXQsXG4gIG1hcDogICAgICAgbWFwLFxuICBudWxsOiAgICAgIF9udWxsLFxuICBwYWlyczogICAgIHBhaXJzLFxuICBzZXQ6ICAgICAgIHNldCxcbiAgdGltZXN0YW1wOiB0aW1lc3RhbXAsXG4gIGJvb2w6ICAgICAgYm9vbCxcbiAgaW50OiAgICAgICBpbnQsXG4gIG1lcmdlOiAgICAgbWVyZ2UsXG4gIG9tYXA6ICAgICAgb21hcCxcbiAgc2VxOiAgICAgICBzZXEsXG4gIHN0cjogICAgICAgc3RyXG59O1xuXG4vLyBSZW1vdmVkIGZ1bmN0aW9ucyBmcm9tIEpTLVlBTUwgMy4wLnhcbnZhciBzYWZlTG9hZCAgICAgICAgICAgID0gcmVuYW1lZCgnc2FmZUxvYWQnLCAnbG9hZCcpO1xudmFyIHNhZmVMb2FkQWxsICAgICAgICAgPSByZW5hbWVkKCdzYWZlTG9hZEFsbCcsICdsb2FkQWxsJyk7XG52YXIgc2FmZUR1bXAgICAgICAgICAgICA9IHJlbmFtZWQoJ3NhZmVEdW1wJywgJ2R1bXAnKTtcblxudmFyIGpzWWFtbCA9IHtcblx0VHlwZTogVHlwZSxcblx0U2NoZW1hOiBTY2hlbWEsXG5cdEZBSUxTQUZFX1NDSEVNQTogRkFJTFNBRkVfU0NIRU1BLFxuXHRKU09OX1NDSEVNQTogSlNPTl9TQ0hFTUEsXG5cdENPUkVfU0NIRU1BOiBDT1JFX1NDSEVNQSxcblx0REVGQVVMVF9TQ0hFTUE6IERFRkFVTFRfU0NIRU1BLFxuXHRsb2FkOiBsb2FkLFxuXHRsb2FkQWxsOiBsb2FkQWxsLFxuXHRkdW1wOiBkdW1wLFxuXHRZQU1MRXhjZXB0aW9uOiBZQU1MRXhjZXB0aW9uLFxuXHR0eXBlczogdHlwZXMsXG5cdHNhZmVMb2FkOiBzYWZlTG9hZCxcblx0c2FmZUxvYWRBbGw6IHNhZmVMb2FkQWxsLFxuXHRzYWZlRHVtcDogc2FmZUR1bXBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGpzWWFtbDtcbmV4cG9ydCB7IENPUkVfU0NIRU1BLCBERUZBVUxUX1NDSEVNQSwgRkFJTFNBRkVfU0NIRU1BLCBKU09OX1NDSEVNQSwgU2NoZW1hLCBUeXBlLCBZQU1MRXhjZXB0aW9uLCBkdW1wLCBsb2FkLCBsb2FkQWxsLCBzYWZlRHVtcCwgc2FmZUxvYWQsIHNhZmVMb2FkQWxsLCB0eXBlcyB9O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZURpc3BhdGNoIiwiY2xlYW5VcEFjdGlvbiIsInVzZUNsZWFudXAiLCJzdGF0ZVNlbGVjdG9yIiwiZGlzcGF0Y2giLCJzZWxlY3RvclJlZiIsImN1cnJlbnQiLCJjc3MiLCJSZWFjdCIsInVzZUFzeW5jIiwiQWxlcnQiLCJMaW5rQnV0dG9uIiwiTG9hZGluZ1BsYWNlaG9sZGVyIiwidXNlU3R5bGVzMiIsIndpdGhFcnJvckJvdW5kYXJ5IiwiUGFnZSIsIkFsZXJ0UnVsZUZvcm0iLCJ1c2VJc1J1bGVFZGl0YWJsZSIsInVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIiwiZmV0Y2hBbGxQcm9tQnVpbGRJbmZvQWN0aW9uIiwiZmV0Y2hFZGl0YWJsZVJ1bGVBY3Rpb24iLCJ1c2VSdWxlc0FjY2VzcyIsInJ1bGVJZCIsIkV4aXN0aW5nUnVsZUVkaXRvciIsImlkZW50aWZpZXIiLCJzdGF0ZSIsInVuaWZpZWRBbGVydGluZyIsInJ1bGVGb3JtIiwiZXhpc3RpbmdSdWxlIiwibG9hZGluZyIsInJlc3VsdCIsImVycm9yIiwiZGlzcGF0Y2hlZCIsImlzRWRpdGFibGUiLCJydWxlSWRlbnRpZmllclRvUnVsZVNvdXJjZU5hbWUiLCJydWxlIiwidW5kZWZpbmVkIiwibWVzc2FnZSIsIlJ1bGVFZGl0b3IiLCJtYXRjaCIsImlkIiwicGFyYW1zIiwidHJ5UGFyc2UiLCJjYW5DcmVhdGVHcmFmYW5hUnVsZXMiLCJjYW5DcmVhdGVDbG91ZFJ1bGVzIiwiY2FuRWRpdFJ1bGVzIiwicnVsZVNvdXJjZU5hbWUiLCJBbGVydFdhcm5pbmciLCJ0aXRsZSIsImNoaWxkcmVuIiwid2FybmluZ1N0eWxlcyIsIndhcm5pbmciLCJ0aGVtZSIsInNwYWNpbmciLCJzdHlsZSIsIm9mIiwiY2F0Y2hFcnJvciIsIm1hcCIsInNoYXJlIiwiZGF0YUZyYW1lRnJvbUpTT04iLCJnZXREZWZhdWx0VGltZVJhbmdlIiwiTG9hZGluZ1N0YXRlIiwid2l0aExvYWRpbmdJbmRpY2F0b3IiLCJnZXRCYWNrZW5kU3J2IiwidG9EYXRhUXVlcnlFcnJvciIsImlzQ2xvdWRQcmV2aWV3UmVxdWVzdCIsImlzR3JhZmFuYVByZXZpZXdSZXF1ZXN0IiwiUnVsZUZvcm1UeXBlIiwicHJldmlld0FsZXJ0UnVsZSIsInJlcXVlc3QiLCJwcmV2aWV3Q2xvdWRBbGVydFJ1bGUiLCJwcmV2aWV3R3JhZmFuYUFsZXJ0UnVsZSIsIkVycm9yIiwidHlwZSIsImdyYWZhbmEiLCJ3aGlsZUxvYWRpbmciLCJjcmVhdGVSZXNwb25zZSIsInNvdXJjZSIsImZldGNoIiwibWV0aG9kIiwidXJsIiwiZGF0YSIsInBpcGUiLCJEb25lIiwic2VyaWVzIiwiaW5zdGFuY2VzIiwicnVsZVR5cGUiLCJMb2FkaW5nIiwidGltZVJhbmdlIiwidXNlTWVtbyIsImNvbmZpZyIsIlJhZGlvQnV0dG9uR3JvdXAiLCJTVEFUIiwiVEFCTEUiLCJUSU1FU0VSSUVTIiwiUGFuZWxQbHVnaW5zQnV0dG9uR3JvdXAiLCJwcm9wcyIsInZhbHVlIiwib25DaGFuZ2UiLCJzaXplIiwicGFuZWxzIiwiZ2V0U3VwcG9ydGVkUGFuZWxzIiwiT2JqZWN0IiwidmFsdWVzIiwicmVkdWNlIiwicGFuZWwiLCJpc1N1cHBvcnRlZFBhbmVsUGx1Z2luIiwicHVzaCIsImxhYmVsIiwibmFtZSIsImltZ1VybCIsImluZm8iLCJsb2dvcyIsInNtYWxsIiwidXNlU3RhdGUiLCJ1c2VGb3JtIiwiRm9ybVByb3ZpZGVyIiwiTGluayIsIlBhZ2VUb29sYmFyIiwiQnV0dG9uIiwiQ3VzdG9tU2Nyb2xsYmFyIiwiU3Bpbm5lciIsIkNvbmZpcm1Nb2RhbCIsInVzZUFwcE5vdGlmaWNhdGlvbiIsInVzZVF1ZXJ5UGFyYW1zIiwiZGVsZXRlUnVsZUFjdGlvbiIsInNhdmVSdWxlRm9ybUFjdGlvbiIsImluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSIsInJ1bGVyUnVsZVRvRm9ybVZhbHVlcyIsImdldERlZmF1bHRGb3JtVmFsdWVzIiwiZ2V0RGVmYXVsdFF1ZXJpZXMiLCJDbG91ZEV2YWx1YXRpb25CZWhhdmlvciIsIkRldGFpbHNTdGVwIiwiR3JhZmFuYUV2YWx1YXRpb25CZWhhdmlvciIsIlJ1bGVJbnNwZWN0b3IiLCJRdWVyeUFuZEFsZXJ0Q29uZGl0aW9uU3RlcCIsImV4aXN0aW5nIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwibm90aWZ5QXBwIiwicXVlcnlQYXJhbXMiLCJzaG93RWRpdFlhbWwiLCJzZXRTaG93RWRpdFlhbWwiLCJyZXR1cm5UbyIsInNob3dEZWxldGVNb2RhbCIsInNldFNob3dEZWxldGVNb2RhbCIsImRlZmF1bHRWYWx1ZXMiLCJxdWVyaWVzIiwiSlNPTiIsInBhcnNlIiwiZm9ybUFQSSIsIm1vZGUiLCJzaG91bGRGb2N1c0Vycm9yIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJkYXRhU291cmNlTmFtZSIsInNob3dTdGVwMiIsIkJvb2xlYW4iLCJzdWJtaXRTdGF0ZSIsInNhdmVSdWxlIiwic3VibWl0IiwiZXhpdE9uU2F2ZSIsImFubm90YXRpb25zIiwia2V5IiwidHJpbSIsImZpbHRlciIsImxhYmVscyIsInJlZGlyZWN0T25TYXZlIiwiZGVsZXRlUnVsZSIsImZyb21SdWxlclJ1bGUiLCJuYW1lc3BhY2UiLCJncm91cCIsIm5hdmlnYXRlVG8iLCJvbkludmFsaWQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiaXNDb3J0ZXhMb2tpT3JSZWNvcmRpbmdSdWxlIiwiYnV0dG9uU3Bpbm5lciIsImNvbnRlbnRPdXRlciIsImNvbnRlbnRJbm5lciIsImNsb3VkQWxlcnRpbmciLCJjbG91ZFJlY29yZGluZyIsImNvbG9ycyIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwiYm9yZGVyIiwid2VhayIsInNoYXBlIiwiYm9yZGVyUmFkaXVzIiwiZmxleFJvdyIsIkFubm90YXRpb24iLCJhbm5vdGF0aW9uTGFiZWxzIiwiU2VsZWN0V2l0aEFkZCIsIkFubm90YXRpb25LZXlJbnB1dCIsImV4aXN0aW5nS2V5cyIsImFyaWFMYWJlbCIsInJlc3QiLCJhbm5vdGF0aW9uT3B0aW9ucyIsImluY2x1ZGVzIiwiY3giLCJ1c2VDYWxsYmFjayIsInVzZUZvcm1Db250ZXh0IiwiRmllbGQiLCJGaWVsZEFycmF5IiwiSW5wdXQiLCJJbnB1dENvbnRyb2wiLCJMYWJlbCIsIlRleHRBcmVhIiwidXNlU3R5bGVzIiwiQW5ub3RhdGlvbnNGaWVsZCIsImNvbnRyb2wiLCJyZWdpc3RlciIsImZvcm1TdGF0ZSIsImVycm9ycyIsImluZGV4IiwiXyIsImlkeCIsImZpZWxkcyIsImFwcGVuZCIsInJlbW92ZSIsImZsZXhDb2x1bW4iLCJmaWVsZCIsImlzVXJsIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJlbmRzV2l0aCIsIlZhbHVlSW5wdXRDb21wb25lbnQiLCJyZXF1aXJlZCIsImZsZXhSb3dJdGVtTWFyZ2luIiwiYW5ub3RhdGlvblZhbHVlSW5wdXQiLCJ0ZXh0YXJlYSIsImFkZEFubm90YXRpb25zQnV0dG9uIiwieHMiLCJTZWxlY3QiLCJ0aW1lT3B0aW9ucyIsIlByZXZpZXdSdWxlIiwiUnVsZUVkaXRvclNlY3Rpb24iLCJmb3JUaW1lIiwiaW5saW5lRmllbGQiLCJwYXR0ZXJuIiwidGltZVVuaXQiLCJEYXRhU291cmNlUGlja2VyIiwidXNlUnVsZXNTb3VyY2VzV2l0aFJ1bGVyIiwiQ2xvdWRSdWxlc1NvdXJjZVBpY2tlciIsInJ1bGVzU291cmNlc1dpdGhSdWxlciIsImRhdGFTb3VyY2VGaWx0ZXIiLCJkcyIsImZpbmQiLCJsYXN0IiwiRXhwcmVzc2lvbkRhdGFzb3VyY2VVSUQiLCJDb25kaXRpb25GaWVsZCIsInNldFZhbHVlIiwiY29uZGl0aW9uIiwib3B0aW9ucyIsInEiLCJyZWZJZCIsImV4cHJlc3Npb25zIiwicXVlcnkiLCJkYXRhc291cmNlVWlkIiwibGFzdEV4cHJlc3Npb24iLCJzaG91bGRWYWxpZGF0ZSIsImNvbmRpdGlvbkV4aXN0cyIsInYiLCJTdGFjayIsIlRvb2x0aXAiLCJJY29uIiwiR3JvdXBBbmROYW1lc3BhY2VGaWVsZHMiLCJMYWJlbHNGaWVsZCIsIlJ1bGVGb2xkZXJQaWNrZXIiLCJjaGVja0ZvclBhdGhTZXBhcmF0b3IiLCJyZWNvcmRpbmdSdWxlTmFtZVZhbGlkYXRpb25QYXR0ZXJuIiwicnVsZUZvcm1UeXBlIiwiZm9ybUlucHV0IiwidmFsaWRhdGUiLCJwYXRoU2VwYXJhdG9yIiwiZm9sZGVyIiwibm9vcCIsIkNvcmVBcHAiLCJnZXREYXRhU291cmNlU3J2IiwiRXhwcmVzc2lvbkVkaXRvciIsIm1hcFRvVmFsdWUiLCJtYXBUb1F1ZXJ5IiwidXNlUXVlcnlNYXBwZXJzIiwic2V0UXVlcnkiLCJoaWRlIiwiZGF0YVNvdXJjZSIsImdldCIsIm9uQ2hhbmdlUXVlcnkiLCJjb21wb25lbnRzIiwiUXVlcnlFZGl0b3IiLCJlcnJvck1lc3NhZ2UiLCJDbG91ZEFsZXJ0aW5nIiwic2V0dGluZ3MiLCJnZXRJbnN0YW5jZVNldHRpbmdzIiwiZXhwciIsIkdyYWZhbmFBbGVydFN0YXRlRGVjaXNpb24iLCJBbGVydGluZyIsIk5vRGF0YSIsIk9LIiwiR3JhZmFuYUFsZXJ0U3RhdGVQaWNrZXIiLCJpbmNsdWRlTm9EYXRhIiwiaW5jbHVkZUVycm9yIiwib3B0cyIsIm9wdCIsImlzRW1wdHkiLCJkdXJhdGlvblRvTWlsbGlzZWNvbmRzIiwicGFyc2VEdXJhdGlvbiIsIkdyYWZhbmFDb25kaXRpb25FdmFsV2FybmluZyIsImV2YWx1YXRlRm9yIiwiZXZhbHVhdGVFdmVyeSIsImR1cmF0aW9uRm9yIiwiZHVyYXRpb25FdmVyeSIsIm1pbGxpc0ZvciIsIm1pbGxpc0V2ZXJ5IiwiSW5saW5lTGFiZWwiLCJwb3NpdGl2ZUR1cmF0aW9uVmFsaWRhdGlvblBhdHRlcm4iLCJkdXJhdGlvblZhbGlkYXRpb25QYXR0ZXJuIiwiQ29sbGFwc2VUb2dnbGUiLCJNSU5fVElNRV9SQU5HRV9TVEVQX1MiLCJmb3JWYWxpZGF0aW9uT3B0aW9ucyIsImV2YWx1YXRlRXZlcnlWYWxpZGF0aW9uT3B0aW9ucyIsImR1cmF0aW9uIiwia2V5cyIsImxlbmd0aCIsImRpZmYiLCJzaG93RXJyb3JIYW5kbGluZyIsInNldFNob3dFcnJvckhhbmRsaW5nIiwiZXZhbHVhdGVFdmVyeUlkIiwiZXZhbHVhdGVGb3JJZCIsImNvbGxhcHNlZCIsImNvbGxhcHNlVG9nZ2xlIiwiZmV0Y2hSdWxlclJ1bGVzQWN0aW9uIiwicnVsZXNTb3VyY2VOYW1lIiwiZ2V0U3R5bGUiLCJjdXN0b21Hcm91cCIsInNldEN1c3RvbUdyb3VwIiwicnVsZXJSZXF1ZXN0cyIsInJ1bGVyUnVsZXMiLCJydWxlc0NvbmZpZyIsIm5hbWVzcGFjZU9wdGlvbnMiLCJncm91cE9wdGlvbnMiLCJpbnB1dCIsImN1c3RvbSIsImNsYXNzTmFtZSIsIndyYXBwZXIiLCJjZW50ZXJBbGlnblJvdyIsImxhYmVsSW5wdXQiLCJlcXVhbFNpZ24iLCJkZWxldGVMYWJlbEJ1dHRvbiIsImFkZExhYmVsQnV0dG9uIiwibWQiLCJzbSIsInVzZU1vdW50ZWRTdGF0ZSIsInRha2VXaGlsZSIsImRhdGVUaW1lRm9ybWF0SVNPIiwiSG9yaXpvbnRhbEdyb3VwIiwidXNlQWxlcnRRdWVyaWVzU3RhdHVzIiwiUHJldmlld1J1bGVSZXN1bHQiLCJwcmV2aWV3Iiwib25QcmV2aWV3IiwidXNlUHJldmlldyIsImFsbERhdGFTb3VyY2VzQXZhaWxhYmxlIiwiaXNQcmV2aWV3QXZhaWxhYmxlIiwiY29udGFpbmVyIiwic2V0UHJldmlldyIsImdldFZhbHVlcyIsImlzTW91bnRlZCIsImNyZWF0ZVByZXZpZXdSZXF1ZXN0IiwicmVzcG9uc2UiLCJpc0NvbXBsZXRlZCIsInN1YnNjcmliZSIsImV4cHJlc3Npb24iLCJncmFmYW5hX2NvbmRpdGlvbiIsIm5vdyIsIkRhdGUiLCJicmVha3BvaW50cyIsInh4bCIsIkF1dG9TaXplciIsIkZpZWxkTWF0Y2hlcklEIiwiUGFuZWxSZW5kZXJlciIsIlRhYmxlQ2VsbERpc3BsYXlNb2RlIiwibWVzc2FnZUZyb21FcnJvciIsImZpZWxkQ29uZmlnIiwiZGVmYXVsdHMiLCJvdmVycmlkZXMiLCJtYXRjaGVyIiwiYnlOYW1lIiwicHJvcGVydGllcyIsIkpTT05WaWV3IiwidGFibGUiLCJ3aWR0aCIsImhlaWdodCIsIm1lZGl1bSIsIlB1cmVDb21wb25lbnQiLCJnZXREZWZhdWx0UmVsYXRpdmVUaW1lUmFuZ2UiLCJzZWxlY3RvcnMiLCJzdHlsZXNGYWN0b3J5IiwiZ2V0TmV4dFJlZklkQ2hhciIsImV4cHJlc3Npb25EYXRhc291cmNlIiwiaXNFeHByZXNzaW9uUXVlcnkiLCJFeHByZXNzaW9uUXVlcnlUeXBlIiwiZGVmYXVsdENvbmRpdGlvbiIsImdldERhdGFzb3VyY2VTcnYiLCJBbGVydGluZ1F1ZXJ5UnVubmVyIiwiUXVlcnlSb3dzIiwiY29uc3RydWN0b3IiLCJydW5uZXIiLCJydW4iLCJjYW5jZWwiLCJvbkNoYW5nZVF1ZXJpZXMiLCJhZGRRdWVyeSIsImRlZmF1bHREYXRhU291cmNlIiwidWlkIiwibW9kZWwiLCJkYXRhc291cmNlIiwibmV3UXVlcnkiLCJjbGFzc2ljIiwiY29uZGl0aW9ucyIsInBhbmVsRGF0YUJ5UmVmSWQiLCJjb21wb25lbnREaWRNb3VudCIsInNldFN0YXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkZXN0cm95IiwiaXNSdW5uaW5nIiwiZCIsInJlbmRlclJ1blF1ZXJ5QnV0dG9uIiwib25DYW5jZWxRdWVyaWVzIiwib25SdW5RdWVyaWVzIiwicmVuZGVyIiwidGhlbWUyIiwib25EdXBsaWNhdGVRdWVyeSIsIm9uTmV3QWxlcnRpbmdRdWVyeSIsIlF1ZXJ5VGFiIiwiZXhwcmVzc2lvbnNFbmFibGVkIiwib25OZXdFeHByZXNzaW9uUXVlcnkiLCJxdWVyeVRvQWRkIiwicXVlcnlUeXBlIiwicmVsYXRpdmVUaW1lUmFuZ2UiLCJkZWZhdWx0VGltZVJhbmdlIiwicnVuV3JhcHBlciIsImVkaXRvcldyYXBwZXIiLCJvbWl0IiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJvcHBhYmxlIiwiVGhyZXNob2xkc01vZGUiLCJDYXJkIiwiUXVlcnlPcGVyYXRpb25Sb3ciLCJFbXB0eVF1ZXJ5V3JhcHBlciIsIlF1ZXJ5V3JhcHBlciIsInF1ZXJpZXNXaXRoVXBkYXRlZFJlZmVyZW5jZXMiLCJvblF1ZXJpZXNDaGFuZ2UiLCJpdGVtIiwiaXRlbUluZGV4IiwidGhyZXNob2xkcyIsInJlZmVyZW5jZWRSZWZJZCIsImNvbmRpdGlvbkluZGV4IiwiZXZhbHVhdG9yIiwicGFyc2VGbG9hdCIsInN0ZXBzIiwidG9QcmVjaXNpb24iLCJ1cGRhdGVkUXVlcmllcyIsImNvcHlNb2RlbCIsInByZXZpb3VzUmVmSWQiLCJuZXdSZWZJZCIsImRlc3RpbmF0aW9uIiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwidXBkYXRlIiwiQXJyYXkiLCJmcm9tIiwicmVtb3ZlZCIsInNwbGljZSIsInJlY29yZCIsImlzQXJyYXkiLCJmb3JFYWNoIiwidGhyZXNob2xkIiwiQWJzb2x1dGUiLCJJbmZpbml0eSIsImNvbG9yIiwic3VjY2VzcyIsIm1haW4iLCJkYXRhUGVyUXVlcnkiLCJ0aHJlc2hvbGRCeVJlZklkIiwiZ2V0VGhyZXNob2xkc0ZvclF1ZXJpZXMiLCJvbkRyYWdFbmQiLCJwcm92aWRlZCIsImlubmVyUmVmIiwiZHJvcHBhYmxlUHJvcHMiLCJOb3RTdGFydGVkIiwiZHNTZXR0aW5ncyIsImdldERhdGFTb3VyY2VTZXR0aW5ncyIsIm9uQ2hhbmdlRGF0YVNvdXJjZSIsIm9uUmVtb3ZlUXVlcnkiLCJvbkNoYW5nZVRpbWVSYW5nZSIsIm9uQ2hhbmdlVGhyZXNob2xkIiwicGxhY2Vob2xkZXIiLCJEYXRhc291cmNlTm90Rm91bmQiLCJvblVwZGF0ZURhdGFzb3VyY2UiLCJzaG93RGV0YWlscyIsInNldFNob3dEZXRhaWxzIiwidG9nZ2xlRGV0YWlscyIsInNob3ciLCJoYW5kbGVVcGRhdGVEYXRhc291cmNlIiwic3RyaW5naWZ5IiwiY2xvbmVEZWVwIiwiUmVsYXRpdmVUaW1lUmFuZ2VQaWNrZXIiLCJRdWVyeUVkaXRvclJvdyIsIlZpeldyYXBwZXIiLCJpc0V4cHJlc3Npb24iLCJwbHVnaW5JZCIsImNoYW5nZVBsdWdpbklkIiwicmVuZGVyVGltZVBpY2tlciIsInJhbmdlIiwiVW5pZmllZEFsZXJ0aW5nIiwiRmllbGRTZXQiLCJzdGVwTm8iLCJkZXNjcmlwdGlvbiIsInBhcmVudCIsImNvbnRlbnQiLCJmaWVsZHNldCIsInhsIiwidGV4dCIsIm1heENvbnRyYXN0IiwiY2FudmFzIiwidHlwb2dyYXBoeSIsImxnIiwiZHVtcCIsImxvYWQiLCJDb2RlRWRpdG9yIiwiRHJhd2VyIiwiVGFiIiwiVGFic0JhciIsInRhYnMiLCJvbkNsb3NlIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiZHJhd2VyU3R5bGVzIiwib25BcHBseSIsImZvcm1WYWx1ZXMiLCJzdWJ0aXRsZSIsIlJ1bGVJbnNwZWN0b3JTdWJ0aXRsZSIsInRhYiIsIkluc3BlY3RvcllhbWxUYWIiLCJvblN1Ym1pdCIsInlhbWxUYWJTdHlsZSIsImFsZXJ0UnVsZUFzWWFtbCIsInNldEFsZXJ0UnVsZUFzWWFtbCIsImFwcGx5QnV0dG9uIiwibWluaW1hcCIsImVuYWJsZWQiLCJvbkN1c3RvbUNoYW5nZSIsImRpc2FibGVkIiwiYWRkTGFiZWwiLCJpc0N1c3RvbSIsInNldElzQ3VzdG9tIiwiX29wdGlvbnMiLCJ0YXJnZXQiLCJ2YWwiLCJHcmFwaFRyZXNob2xkc1N0eWxlTW9kZSIsIlBhbmVsQ29udGV4dFByb3ZpZGVyIiwiYXBwRXZlbnRzIiwidXNlVml6SGVpZ2h0IiwiY3VycmVudFBhbmVsIiwiY2hhbmdlUGFuZWwiLCJvblRocmVzaG9sZHNDaGFuZ2UiLCJzZXRPcHRpb25zIiwiZnJhbWVJbmRleCIsInNob3dIZWFkZXIiLCJ2aXpIZWlnaHQiLCJzZXRGaWVsZENvbmZpZyIsImRlZmF1bHRGaWVsZENvbmZpZyIsInVuaXQiLCJkZWZhdWx0VW5pdCIsInRocmVzaG9sZHNTdHlsZSIsIkxpbmUiLCJjb250ZXh0IiwiZXZlbnRCdXMiLCJjYW5FZGl0VGhyZXNob2xkcyIsImJ1dHRvbkdyb3VwIiwidmlzSGVpZ2h0IiwiZ3JpZFNpemUiLCJjb250ZXh0U3J2IiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsIlJ1bGVUeXBlUGlja2VyIiwiQWxlcnRUeXBlIiwiZWRpdGluZ0V4aXN0aW5nUnVsZSIsImVuYWJsZWRSdWxlVHlwZXMiLCJkZWZhdWx0UnVsZVR5cGUiLCJnZXRBdmFpbGFibGVSdWxlVHlwZXMiLCJoYXNQZXJtaXNzaW9uIiwiQWxlcnRpbmdSdWxlQ3JlYXRlIiwiQWxlcnRpbmdSdWxlRXh0ZXJuYWxXcml0ZSIsIlF1ZXJ5IiwiaXNHcmFmYW5hTWFuYWdlZFR5cGUiLCJpc0Nsb3VkQWxlcnRSdWxlVHlwZSIsImlzUmVjb3JkaW5nUnVsZVR5cGUiLCJzaG93Q2xvdWRFeHByZXNzaW9uRWRpdG9yIiwiRGlzYWJsZWRUb29sdGlwIiwidmlzaWJsZSIsIlJ1bGVUeXBlIiwiR3JhZmFuYU1hbmFnZWRSdWxlVHlwZSIsInNlbGVjdGVkIiwib25DbGljayIsIk1pbWlyRmxhdm9yZWRUeXBlIiwiUmVjb3JkaW5nUnVsZVR5cGUiLCJpbWFnZSIsImNhcmRTdHlsZXMiLCJlbmFibGVkVHlwZXMiLCJoYXNMb3RleERhdGFzb3VyY2VzIiwibWV0YSIsImlzTWF0aEV4cHJlc3Npb24iLCJpc1JlZHVjZUV4cHJlc3Npb24iLCJpc1Jlc2FtcGxlRXhwcmVzc2lvbiIsImlzQ2xhc3NpY0V4cHJlc3Npb24iLCJ1cGRhdGVNYXRoRXhwcmVzc2lvblJlZnMiLCJpc1JlZmVyZW5jaW5nIiwicGFyYW0iLCJvbGRFeHByZXNzaW9uIiwiUmVnRXhwIiwibmV3RXhwcmVzc2lvbiIsInJlcGxhY2UiLCJjb250YWluc1BhdGhTZXBhcmF0b3IiLCJldmVyeSIsImZldGNoRm9sZGVySWZOb3RGZXRjaGVkQWN0aW9uIiwidXNlRm9sZGVyIiwiZm9sZGVyUmVxdWVzdHMiLCJmb2xkZXJzIiwiZ2V0UnVsZXNQZXJtaXNzaW9ucyIsImlzR3JhZmFuYVJ1bGVyUnVsZSIsImRhdGFTb3VyY2VzIiwiZm9sZGVyVUlEIiwiZ3JhZmFuYV9hbGVydCIsIm5hbWVzcGFjZV91aWQiLCJydWxlUGVybWlzc2lvbiIsImhhc0VkaXRQZXJtaXNzaW9uIiwiaGFzQWNjZXNzIiwiaXNFZGl0b3IiLCJoYXNSZW1vdmVQZXJtaXNzaW9uIiwiZGVsZXRlIiwiaXNSZW1vdmFibGUiLCJjYW5TYXZlIiwiaXNSdWxlckF2YWlsYWJsZSIsInJ1bGVyQ29uZmlnIiwiZ2V0RGF0YVNvdXJjZUJ5TmFtZSIsImRhdGFTb3VyY2VzV2l0aFJ1bGVyIiwiZHNDb25maWciLCJ1c2VUaGVtZTIiLCJkYXRhSXNFbXB0eSIsInJvd0hlaWdodCIsInRhYmxlSGVpZ2h0IiwiUmVwbGF5U3ViamVjdCIsInY0IiwidXVpZHY0IiwicmFuZ2VVdGlsIiwiY2FuY2VsTmV0d29ya1JlcXVlc3RzT25VbnN1YnNjcmliZSIsInNldFN0cnVjdHVyZVJldmlzaW9uIiwicHJlUHJvY2Vzc1BhbmVsRGF0YSIsImdldFRpbWVSYW5nZUZvckV4cHJlc3Npb24iLCJiYWNrZW5kU3J2IiwiZGF0YVNvdXJjZVNydiIsInN1YmplY3QiLCJsYXN0UmVzdWx0IiwiYXNPYnNlcnZhYmxlIiwiZW1wdHkiLCJpbml0aWFsU3RhdGUiLCJuZXh0IiwiZmlsdGVyUXVlcnkiLCJzdWJzY3JpcHRpb24iLCJydW5SZXF1ZXN0IiwibmV4dFJlc3VsdCIsImFwcGx5Q2hhbmdlIiwicHJldmlvdXMiLCJwcmVQcm9jZXNzZWQiLCJtYXBFcnJvclRvUGFuZWxEYXRhIiwidW5zdWJzY3JpYmUiLCJyZXF1ZXN0SXNSdW5uaW5nIiwiY29tcGxldGUiLCJpbml0aWFsIiwicmVxdWVzdElkIiwibWFwVG9QYW5lbERhdGEiLCJkYXRhQnlRdWVyeSIsImdldFRpbWVSYW5nZSIsInJlbGF0aXZlIiwicmVsYXRpdmVUb1RpbWVSYW5nZSIsImNvbnNvbGUiLCJ3YXJuIiwicmVzdWx0cyIsImVudHJpZXMiLCJmcmFtZXMiLCJxdWVyeUVycm9yIiwiY2hhbmdlIiwiZ2V0UnVsZXNBY2Nlc3MiLCJGQUxMX0JBQ0tfVElNRV9SQU5HRSIsInRvIiwicmVmZXJlbmNlZFJlZklkcyIsImdldFJlZmVyZW5jZWRJZHMiLCJnZXRUaW1lUmFuZ2VzIiwiTWF0aCIsIm1heCIsIm1pbiIsImdldFJlZmVyZW5jZWRJZHNGb3JDbGFzc2ljQ29uZGl0aW9uIiwibWF0aCIsImdldFJlZmVyZW5jZWRJZHNGb3JNYXRoIiwicmVzYW1wbGUiLCJnZXRSZWZlcmVuY2VkSWRzRm9yUmVkdWNlIiwicmVmZXJlbmNlZFJlZklkc0tleSIsImlzRXhwcmVzc2lvblJlZmVyZW5jZSIsImRhdGFRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=