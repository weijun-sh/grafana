"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[5372],{

 "./public/app/core/hooks/useCleanup.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "x": () => ( useCleanup)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var _actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");



function useCleanup(stateSelector) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(); 

  const selectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stateSelector);
  selectorRef.current = stateSelector;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      dispatch((0,_actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__ .e)({
        stateSelector: selectorRef.current
      }));
    };
  }, [dispatch]);
}

 }),

 "./public/app/features/alerting/unified/RuleEditor.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "default": () => ( unified_RuleEditor)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var useAsync = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var useCleanup = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
var index_esm = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
var react_router_dom = __webpack_require__("./.yarn/__virtual__/react-router-dom-virtual-e45eb1b58b/0/cache/react-router-dom-npm-5.3.0-aa9adb5bec-47584fd629.zip/node_modules/react-router-dom/esm/react-router-dom.js");
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
var useQueryParams = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
var useUnifiedAlertingSelector = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
var actions = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
var rule_form = __webpack_require__("./public/app/features/alerting/unified/types/rule-form.ts");
var redux = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
var utils_rule_form = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
var rule_id = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
var time = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
var useMountedState = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMountedState.js");
var takeWhile = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js");
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
var catchError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
var share = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
;
function isCloudPreviewRequest(request) {
  return 'expr' in request;
}
function isGrafanaPreviewRequest(request) {
  return 'grafana_condition' in request;
}
;






function previewAlertRule(request) {
  if (isCloudPreviewRequest(request)) {
    return previewCloudAlertRule(request);
  }

  if (isGrafanaPreviewRequest(request)) {
    return previewGrafanaAlertRule(request);
  }

  throw new Error('unsupported preview rule request');
}

function previewGrafanaAlertRule(request) {
  const type = rule_form.$.grafana;
  return (0,grafana_data_src.withLoadingIndicator)({
    whileLoading: createResponse(type),
    source: (0,grafana_runtime_src.getBackendSrv)().fetch({
      method: 'POST',
      url: `/api/v1/rule/test/grafana`,
      data: request
    }).pipe((0,map.U)(_ref => {
      let {
        data
      } = _ref;
      return createResponse(type, {
        state: grafana_data_src.LoadingState.Done,
        series: data.instances.map(grafana_data_src.dataFrameFromJSON)
      });
    }), (0,catchError.K)(error => {
      return (0,of.of)(createResponse(type, {
        state: grafana_data_src.LoadingState.Error,
        error: (0,grafana_runtime_src.toDataQueryError)(error)
      }));
    }), (0,share.B)())
  });
}

function createResponse(ruleType) {
  let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    ruleType,
    data: Object.assign({
      state: grafana_data_src.LoadingState.Loading,
      series: [],
      timeRange: (0,grafana_data_src.getDefaultTimeRange)()
    }, data)
  };
}

function previewCloudAlertRule(request) {
  throw new Error('preview for cloud alerting rules is not implemented');
}
var useAlertQueriesStatus = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts");
var dist_index_esm = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _span;











function PreviewRuleResult(props) {
  const {
    preview
  } = props;
  const styles = (0,src.useStyles2)(getStyles);
  const fieldConfig = {
    defaults: {},
    overrides: [{
      matcher: {
        id: grafana_data_src.FieldMatcherID.byName,
        options: 'Info'
      },
      properties: [{
        id: 'custom.displayMode',
        value: src.TableCellDisplayMode.JSONView
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

  if (data.state === grafana_data_src.LoadingState.Loading) {
    return (0,jsx_runtime.jsx)("div", {
      className: styles.container,
      children: _span || (_span = (0,jsx_runtime.jsx)("span", {
        children: "Loading preview..."
      }))
    });
  }

  if (data.state === grafana_data_src.LoadingState.Error) {
    return (0,jsx_runtime.jsx)("div", {
      className: styles.container,
      children: data.error ? (0,redux.kk)(data.error) : 'Failed to preview alert rule'
    });
  }

  return (0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [(0,jsx_runtime.jsxs)("span", {
      children: ["Preview based on the result of running the query, for this moment.", ' ', ruleType === rule_form.$.grafana ? 'Configuration for `no data` and `error handling` is not applied.' : null]
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.table,
      children: (0,jsx_runtime.jsx)(dist_index_esm.Z, {
        children: _ref => {
          let {
            width,
            height
          } = _ref;
          return (0,jsx_runtime.jsx)("div", {
            style: {
              width: `${width}px`,
              height: `${height}px`
            },
            children: (0,jsx_runtime.jsx)(grafana_runtime_src.PanelRenderer, {
              title: "",
              width: width,
              height: height,
              pluginId: "table",
              data: data,
              fieldConfig: fieldConfig
            })
          });
        }
      })
    })]
  });
}

function getStyles(theme) {
  return {
    container: emotion_css_esm.css`
      margin: ${theme.spacing(2)} 0;
    `,
    table: emotion_css_esm.css`
      flex: 1 1 auto;
      height: 135px;
      margin-top: ${theme.spacing(2)};
      border: 1px solid ${theme.colors.border.medium};
      border-radius: ${theme.shape.borderRadius(1)};
    `
  };
}
;
var _Alert;














const fields = ['type', 'dataSourceName', 'condition', 'queries', 'expression'];
function PreviewRule() {
  const styles = (0,src.useStyles2)(PreviewRule_getStyles);
  const [preview, onPreview] = usePreview();
  const {
    watch
  } = (0,index_esm.Gc)();
  const [type, condition, queries] = watch(['type', 'condition', 'queries']);
  const {
    allDataSourcesAvailable
  } = (0,useAlertQueriesStatus.S)(queries);

  if (type === rule_form.$.cloudRecording || type === rule_form.$.cloudAlerting) {
    return null;
  }

  const isPreviewAvailable = Boolean(condition) && allDataSourcesAvailable;
  return (0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [(0,jsx_runtime.jsxs)(src.HorizontalGroup, {
      children: [allDataSourcesAvailable && (0,jsx_runtime.jsx)(src.Button, {
        disabled: !isPreviewAvailable,
        type: "button",
        variant: "primary",
        onClick: onPreview,
        children: "Preview alerts"
      }), !allDataSourcesAvailable && (_Alert || (_Alert = (0,jsx_runtime.jsx)(src.Alert, {
        title: "Preview is not available",
        severity: "warning",
        children: "Cannot display the query preview. Some of the data sources used in the queries are not available."
      })))]
    }), (0,jsx_runtime.jsx)(PreviewRuleResult, {
      preview: preview
    })]
  });
}

function usePreview() {
  const [preview, setPreview] = (0,react.useState)();
  const {
    getValues
  } = (0,index_esm.Gc)();
  const isMounted = (0,useMountedState.Z)();
  const onPreview = (0,react.useCallback)(() => {
    const values = getValues(fields);
    const request = createPreviewRequest(values);
    previewAlertRule(request).pipe((0,takeWhile.o)(response => !isCompleted(response), true)).subscribe(response => {
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
    case rule_form.$.cloudAlerting:
      return {
        dataSourceName,
        expr: expression
      };

    case rule_form.$.grafana:
      return {
        grafana_condition: {
          condition,
          data: queries,
          now: (0,grafana_data_src.dateTimeFormatISO)(Date.now())
        }
      };

    default:
      throw new Error(`Alert type ${type} not supported by preview.`);
  }
}

function isCompleted(response) {
  switch (response.data.state) {
    case grafana_data_src.LoadingState.Done:
    case grafana_data_src.LoadingState.Error:
      return true;

    default:
      return false;
  }
}

function PreviewRule_getStyles(theme) {
  return {
    container: emotion_css_esm.css`
      margin-top: ${theme.spacing(2)};
      max-width: ${theme.breakpoints.values.xxl}px;
    `
  };
}
;





const RuleEditorSection = _ref => {
  let {
    title,
    stepNo,
    children,
    description
  } = _ref;
  const styles = (0,src.useStyles2)(RuleEditorSection_getStyles);
  return (0,jsx_runtime.jsxs)("div", {
    className: styles.parent,
    children: [(0,jsx_runtime.jsx)("div", {
      children: (0,jsx_runtime.jsx)("span", {
        className: styles.stepNo,
        children: stepNo
      })
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.content,
      children: (0,jsx_runtime.jsxs)(src.FieldSet, {
        label: title,
        className: styles.fieldset,
        children: [description && (0,jsx_runtime.jsx)("p", {
          className: styles.description,
          children: description
        }), children]
      })
    })]
  });
};

const RuleEditorSection_getStyles = theme => ({
  fieldset: emotion_css_esm.css`
    legend {
      font-size: 16px;
      padding-top: ${theme.spacing(0.5)};
    }
  `,
  parent: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    max-width: ${theme.breakpoints.values.xl};
    & + & {
      margin-top: ${theme.spacing(4)};
    }
  `,
  description: emotion_css_esm.css`
    margin-top: -${theme.spacing(2)};
  `,
  stepNo: emotion_css_esm.css`
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
  content: emotion_css_esm.css`
    flex: 1;
  `
});
;
var _PreviewRule;

const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const CloudEvaluationBehavior = () => {
  var _errors$forTime, _errors$forTime2;

  const styles = (0,src.useStyles)(CloudEvaluationBehavior_getStyles);
  const {
    register,
    control,
    watch,
    formState: {
      errors
    }
  } = (0,index_esm.Gc)();
  const type = watch('type'); 

  if (type === rule_form.$.cloudRecording) {
    return null;
  }

  return (0,jsx_runtime.jsxs)(RuleEditorSection, {
    stepNo: 2,
    title: "Alert evaluation behavior",
    children: [(0,jsx_runtime.jsx)(src.Field, {
      label: "For",
      description: "Expression has to be true for this long for the alert to be fired.",
      children: (0,jsx_runtime.jsxs)("div", {
        className: styles.flexRow,
        children: [(0,jsx_runtime.jsx)(src.Field, {
          invalid: !!((_errors$forTime = errors.forTime) !== null && _errors$forTime !== void 0 && _errors$forTime.message),
          error: (_errors$forTime2 = errors.forTime) === null || _errors$forTime2 === void 0 ? void 0 : _errors$forTime2.message,
          className: styles.inlineField,
          children: (0,jsx_runtime.jsx)(src.Input, Object.assign({}, register('forTime', {
            pattern: {
              value: /^\d+$/,
              message: 'Must be a positive integer.'
            }
          }), {
            width: 8
          }))
        }), (0,jsx_runtime.jsx)(src.InputControl, {
          name: "forTimeUnit",
          render: _ref => {
            let {
              field: {
                onChange
              }
            } = _ref,
                field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

            return (0,jsx_runtime.jsx)(src.Select, Object.assign({}, field, {
              options: time.qr,
              onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value),
              width: 15,
              className: styles.timeUnit
            }));
          },
          control: control
        })]
      })
    }), _PreviewRule || (_PreviewRule = (0,jsx_runtime.jsx)(PreviewRule, {}))]
  });
};

const CloudEvaluationBehavior_getStyles = theme => ({
  inlineField: emotion_css_esm.css`
    margin-bottom: 0;
  `,
  flexRow: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  timeUnit: emotion_css_esm.css`
    margin-left: ${theme.spacing.xs};
  `
});
var experimental = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
var AnnotationsField = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx");
var SelectWIthAdd = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx");
var guards = __webpack_require__("./public/app/features/expressions/guards.ts");
;

function queriesWithUpdatedReferences(queries, previousRefId, newRefId) {
  return queries.map(query => {
    if (previousRefId === newRefId) {
      return query;
    }

    if (!(0,guards.j)(query.model)) {
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
} 

function checkForPathSeparator(value) {
  const containsPathSeparator = value.includes('/') || value.includes('\\');

  if (containsPathSeparator) {
    return 'Cannot contain "/" or "\\" characters';
  }

  return true;
}
;
const GroupAndNamespaceFields_excluded = ["onChange", "ref"],
      _excluded2 = ["ref"];

function GroupAndNamespaceFields_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const GroupAndNamespaceFields = _ref => {
  var _rulerRequests$rulesS, _errors$namespace, _errors$namespace2, _errors$group, _errors$group2;

  let {
    rulesSourceName
  } = _ref;
  const {
    control,
    watch,
    formState: {
      errors
    },
    setValue
  } = (0,index_esm.Gc)();
  const style = (0,src.useStyles2)(getStyle);
  const [customGroup, setCustomGroup] = (0,react.useState)(false);
  const rulerRequests = (0,useUnifiedAlertingSelector._)(state => state.rulerRules);
  const dispatch = (0,es.useDispatch)();
  (0,react.useEffect)(() => {
    dispatch((0,actions.UR)({
      rulesSourceName
    }));
  }, [rulesSourceName, dispatch]);
  const rulesConfig = (_rulerRequests$rulesS = rulerRequests[rulesSourceName]) === null || _rulerRequests$rulesS === void 0 ? void 0 : _rulerRequests$rulesS.result;
  const namespace = watch('namespace');
  const namespaceOptions = (0,react.useMemo)(() => rulesConfig ? Object.keys(rulesConfig).map(namespace => ({
    label: namespace,
    value: namespace
  })) : [], [rulesConfig]);
  const groupOptions = (0,react.useMemo)(() => {
    var _rulesConfig$namespac;

    return namespace && (rulesConfig === null || rulesConfig === void 0 ? void 0 : (_rulesConfig$namespac = rulesConfig[namespace]) === null || _rulesConfig$namespac === void 0 ? void 0 : _rulesConfig$namespac.map(group => ({
      label: group.name,
      value: group.name
    }))) || [];
  }, [namespace, rulesConfig]);
  return (0,jsx_runtime.jsxs)("div", {
    className: style.flexRow,
    children: [(0,jsx_runtime.jsx)(src.Field, {
      "data-testid": "namespace-picker",
      label: "Namespace",
      error: (_errors$namespace = errors.namespace) === null || _errors$namespace === void 0 ? void 0 : _errors$namespace.message,
      invalid: !!((_errors$namespace2 = errors.namespace) !== null && _errors$namespace2 !== void 0 && _errors$namespace2.message),
      children: (0,jsx_runtime.jsx)(src.InputControl, {
        render: _ref2 => {
          let {
            field: {
              onChange
            }
          } = _ref2,
              field = GroupAndNamespaceFields_objectWithoutPropertiesLoose(_ref2.field, GroupAndNamespaceFields_excluded);

          return (0,jsx_runtime.jsx)(SelectWIthAdd.P, Object.assign({}, field, {
            className: style.input,
            onChange: value => {
              setValue('group', ''); 

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
            pathSeparator: checkForPathSeparator
          }
        }
      })
    }), (0,jsx_runtime.jsx)(src.Field, {
      "data-testid": "group-picker",
      label: "Group",
      error: (_errors$group = errors.group) === null || _errors$group === void 0 ? void 0 : _errors$group.message,
      invalid: !!((_errors$group2 = errors.group) !== null && _errors$group2 !== void 0 && _errors$group2.message),
      children: (0,jsx_runtime.jsx)(src.InputControl, {
        render: _ref3 => {
          let {} = _ref3,
              field = GroupAndNamespaceFields_objectWithoutPropertiesLoose(_ref3.field, _excluded2);

          return (0,jsx_runtime.jsx)(SelectWIthAdd.P, Object.assign({}, field, {
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
            pathSeparator: checkForPathSeparator
          }
        }
      })
    })]
  });
};

const getStyle = theme => ({
  flexRow: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > * + * {
      margin-left: ${theme.spacing(3)};
    }
  `,
  input: emotion_css_esm.css`
    width: 330px !important;
  `
});
var LabelsField = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx");
var RuleFolderPicker = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/RuleFolderPicker.tsx");
;
const DetailsStep_excluded = ["ref"];

var _Label, _AnnotationsField, _LabelsField;

function DetailsStep_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















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
  } = (0,index_esm.Gc)();
  const styles = (0,src.useStyles2)(DetailsStep_getStyles);
  const ruleFormType = watch('type');
  const dataSourceName = watch('dataSourceName');
  const type = watch('type');
  return (0,jsx_runtime.jsxs)(RuleEditorSection, {
    stepNo: type === rule_form.$.cloudRecording ? 2 : 3,
    title: type === rule_form.$.cloudRecording ? 'Add details for your recording rule' : 'Add details for your alert',
    description: type === rule_form.$.cloudRecording ? 'Add labels to help you better manage your rules' : 'Write a summary and add labels to help you better manage your alerts',
    children: [(0,jsx_runtime.jsx)(src.Field, {
      className: styles.formInput,
      label: "Rule name",
      error: errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
      invalid: !!((_errors$name2 = errors.name) !== null && _errors$name2 !== void 0 && _errors$name2.message),
      children: (0,jsx_runtime.jsx)(src.Input, Object.assign({
        id: "name"
      }, register('name', {
        required: {
          value: true,
          message: 'Must enter an alert name'
        },
        pattern: ruleFormType === rule_form.$.cloudRecording ? recordingRuleNameValidationPattern : undefined,
        validate: {
          pathSeparator: value => {
            if (ruleFormType === rule_form.$.grafana) {
              return checkForPathSeparator(value);
            }

            return true;
          }
        }
      })))
    }), (ruleFormType === rule_form.$.cloudRecording || ruleFormType === rule_form.$.cloudAlerting) && dataSourceName && (0,jsx_runtime.jsx)(GroupAndNamespaceFields, {
      rulesSourceName: dataSourceName
    }), ruleFormType === rule_form.$.grafana && (0,jsx_runtime.jsxs)("div", {
      className: styles.flexRow,
      children: [(0,jsx_runtime.jsx)(src.Field, {
        label: _Label || (_Label = (0,jsx_runtime.jsx)(src.Label, {
          htmlFor: "folder",
          description: 'Select a folder to store your rule.',
          children: (0,jsx_runtime.jsxs)(experimental.Stack, {
            gap: 0.5,
            children: ["Folder", (0,jsx_runtime.jsx)(src.Tooltip, {
              placement: "top",
              content: (0,jsx_runtime.jsx)("div", {
                children: "Each folder has unique folder permission. When you store multiple rules in a folder, the folder access permissions get assigned to the rules."
              }),
              children: (0,jsx_runtime.jsx)(src.Icon, {
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
        children: (0,jsx_runtime.jsx)(src.InputControl, {
          render: _ref => {
            let {} = _ref,
                field = DetailsStep_objectWithoutPropertiesLoose(_ref.field, DetailsStep_excluded);

            return (0,jsx_runtime.jsx)(RuleFolderPicker.W, Object.assign({
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
              pathSeparator: folder => checkForPathSeparator(folder.title)
            }
          }
        })
      }), (0,jsx_runtime.jsx)(src.Field, {
        label: "Group",
        "data-testid": "group-picker",
        description: "Rules within the same group are evaluated after the same time interval.",
        className: styles.formInput,
        error: (_errors$group = errors.group) === null || _errors$group === void 0 ? void 0 : _errors$group.message,
        invalid: !!((_errors$group2 = errors.group) !== null && _errors$group2 !== void 0 && _errors$group2.message),
        children: (0,jsx_runtime.jsx)(src.Input, Object.assign({
          id: "group"
        }, register('group', {
          required: {
            value: true,
            message: 'Must enter a group name'
          }
        })))
      })]
    }), type !== rule_form.$.cloudRecording && (_AnnotationsField || (_AnnotationsField = (0,jsx_runtime.jsx)(AnnotationsField.Z, {}))), _LabelsField || (_LabelsField = (0,jsx_runtime.jsx)(LabelsField.Z, {}))]
  });
};

const DetailsStep_getStyles = theme => ({
  formInput: emotion_css_esm.css`
    width: 330px;
    & + & {
      margin-left: ${theme.spacing(3)};
    }
  `,
  flexRow: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  `
});
var CollapseToggle = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
var unified_alerting_dto = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
;
const GrafanaAlertStatePicker_excluded = ["includeNoData", "includeError"];

function GrafanaAlertStatePicker_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const options = [{
  value: unified_alerting_dto.g0.Alerting,
  label: 'Alerting'
}, {
  value: unified_alerting_dto.g0.NoData,
  label: 'No Data'
}, {
  value: unified_alerting_dto.g0.OK,
  label: 'OK'
}, {
  value: unified_alerting_dto.g0.Error,
  label: 'Error'
}];
const GrafanaAlertStatePicker = _ref => {
  let {
    includeNoData,
    includeError
  } = _ref,
      props = GrafanaAlertStatePicker_objectWithoutPropertiesLoose(_ref, GrafanaAlertStatePicker_excluded);

  const opts = (0,react.useMemo)(() => {
    if (!includeNoData) {
      return options.filter(opt => opt.value !== unified_alerting_dto.g0.NoData);
    }

    if (!includeError) {
      return options.filter(opt => opt.value !== unified_alerting_dto.g0.Error);
    }

    return options;
  }, [includeNoData, includeError]);
  return (0,jsx_runtime.jsx)(src.Select, Object.assign({
    options: opts
  }, props));
};
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
;
var GrafanaConditionEvalWarning_Alert;







const GrafanaConditionEvalWarning = () => {
  const {
    watch
  } = (0,index_esm.Gc)();
  const evaluateFor = watch('evaluateFor');
  const evaluateEvery = watch('evaluateEvery');

  if (evaluateFor === '0') {
    return null;
  }

  const durationFor = (0,grafana_data_src.parseDuration)(evaluateFor);
  const durationEvery = (0,grafana_data_src.parseDuration)(evaluateEvery);

  if ((0,lodash.isEmpty)(durationFor) || (0,lodash.isEmpty)(durationEvery)) {
    return null;
  }

  const millisFor = (0,grafana_data_src.durationToMilliseconds)(durationFor);
  const millisEvery = (0,grafana_data_src.durationToMilliseconds)(durationEvery);

  if (millisFor && millisEvery && millisFor <= millisEvery) {
    return GrafanaConditionEvalWarning_Alert || (GrafanaConditionEvalWarning_Alert = (0,jsx_runtime.jsx)(src.Alert, {
      severity: "warning",
      title: "",
      children: "Setting a \"for\" duration that is less than or equal to the evaluation interval will result in the evaluation interval being used to calculate when an alert that has stopped receiving data will be closed."
    }));
  }

  return null;
};
;
const GrafanaEvaluationBehavior_excluded = ["onChange", "ref"],
      GrafanaEvaluationBehavior_excluded2 = ["onChange", "ref"];

var _GrafanaConditionEval, GrafanaEvaluationBehavior_PreviewRule;

function GrafanaEvaluationBehavior_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const MIN_TIME_RANGE_STEP_S = 10; 

const forValidationOptions = {
  required: {
    value: true,
    message: 'Required.'
  },
  pattern: time.lR
};
const evaluateEveryValidationOptions = {
  required: {
    value: true,
    message: 'Required.'
  },
  pattern: time.O8,
  validate: value => {
    const duration = (0,grafana_data_src.parseDuration)(value);

    if (Object.keys(duration).length) {
      const diff = (0,grafana_data_src.durationToMilliseconds)(duration);

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

  const styles = (0,src.useStyles2)(GrafanaEvaluationBehavior_getStyles);
  const [showErrorHandling, setShowErrorHandling] = (0,react.useState)(false);
  const {
    register,
    formState: {
      errors
    }
  } = (0,index_esm.Gc)();
  const evaluateEveryId = 'eval-every-input';
  const evaluateForId = 'eval-for-input';
  return (
    (0,jsx_runtime.jsxs)(RuleEditorSection, {
      stepNo: 2,
      title: "Alert evaluation behavior",
      children: [(0,jsx_runtime.jsx)(src.Field, {
        label: "Evaluate",
        description: "Evaluation interval applies to every rule within a group. It can overwrite the interval of an existing alert rule.",
        children: (0,jsx_runtime.jsxs)("div", {
          className: styles.flexRow,
          children: [(0,jsx_runtime.jsx)(src.InlineLabel, {
            htmlFor: evaluateEveryId,
            width: 16,
            tooltip: "How often the alert will be evaluated to see if it fires",
            children: "Evaluate every"
          }), (0,jsx_runtime.jsx)(src.Input, Object.assign({
            id: evaluateEveryId,
            width: 8
          }, register('evaluateEvery', evaluateEveryValidationOptions))), (0,jsx_runtime.jsx)(src.InlineLabel, {
            htmlFor: evaluateForId,
            width: 7,
            tooltip: "Once condition is breached, alert will go into pending state. If it is pending for longer than the \"for\" value, it will become a firing alert.",
            children: "for"
          }), (0,jsx_runtime.jsx)(src.Field, {
            className: styles.inlineField,
            error: (_errors$evaluateFor = errors.evaluateFor) === null || _errors$evaluateFor === void 0 ? void 0 : _errors$evaluateFor.message,
            invalid: !!((_errors$evaluateFor2 = errors.evaluateFor) !== null && _errors$evaluateFor2 !== void 0 && _errors$evaluateFor2.message),
            validationMessageHorizontalOverflow: true,
            children: (0,jsx_runtime.jsx)(src.Input, Object.assign({
              id: evaluateForId,
              width: 8
            }, register('evaluateFor', forValidationOptions)))
          })]
        })
      }), _GrafanaConditionEval || (_GrafanaConditionEval = (0,jsx_runtime.jsx)(GrafanaConditionEvalWarning, {})), (0,jsx_runtime.jsx)(CollapseToggle.U, {
        isCollapsed: !showErrorHandling,
        onToggle: collapsed => setShowErrorHandling(!collapsed),
        text: "Configure no data and error handling",
        className: styles.collapseToggle
      }), showErrorHandling && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [(0,jsx_runtime.jsx)(src.Field, {
          htmlFor: "no-data-state-input",
          label: "Alert state if no data or all values are null",
          children: (0,jsx_runtime.jsx)(src.InputControl, {
            render: _ref => {
              let {
                field: {
                  onChange
                }
              } = _ref,
                  field = GrafanaEvaluationBehavior_objectWithoutPropertiesLoose(_ref.field, GrafanaEvaluationBehavior_excluded);

              return (0,jsx_runtime.jsx)(GrafanaAlertStatePicker, Object.assign({}, field, {
                inputId: "no-data-state-input",
                width: 42,
                includeNoData: true,
                includeError: false,
                onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value)
              }));
            },
            name: "noDataState"
          })
        }), (0,jsx_runtime.jsx)(src.Field, {
          htmlFor: "exec-err-state-input",
          label: "Alert state if execution error or timeout",
          children: (0,jsx_runtime.jsx)(src.InputControl, {
            render: _ref2 => {
              let {
                field: {
                  onChange
                }
              } = _ref2,
                  field = GrafanaEvaluationBehavior_objectWithoutPropertiesLoose(_ref2.field, GrafanaEvaluationBehavior_excluded2);

              return (0,jsx_runtime.jsx)(GrafanaAlertStatePicker, Object.assign({}, field, {
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
      }), GrafanaEvaluationBehavior_PreviewRule || (GrafanaEvaluationBehavior_PreviewRule = (0,jsx_runtime.jsx)(PreviewRule, {}))]
    })
  );
};

const GrafanaEvaluationBehavior_getStyles = theme => ({
  inlineField: emotion_css_esm.css`
    margin-bottom: 0;
  `,
  flexRow: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  collapseToggle: emotion_css_esm.css`
    margin: ${theme.spacing(2, 0, 2, -1)};
  `
});
;

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
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack || '';
  }
}


YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;


YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ': ' + formatError(this, compact);
};


var exception = YAMLException$1;

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
    pos: position - lineStart + head.length 
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

  this.options       = options; 
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


function compileMap() {
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
    explicit.push(definition);

  } else if (Array.isArray(definition)) {
    explicit = explicit.concat(definition);

  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
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

var js_yaml_map = new type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});

var failsafe = new schema({
  explicit: [
    str,
    seq,
    js_yaml_map
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
  return ((0x30 <= c) && (c <= 0x39)) ||
         ((0x41 <= c) && (c <= 0x46)) ||
         ((0x61 <= c) && (c <= 0x66));
}

function isOctCode(c) {
  return ((0x30 <= c) && (c <= 0x37));
}

function isDecCode(c) {
  return ((0x30 <= c) && (c <= 0x39));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    if (index + 1 === max) return true;
    ch = data[++index];


    if (ch === 'b') {
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


  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

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

var js_yaml_int = new type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
    octal:       function (obj) { return obj >= 0 ? '0o'  + obj.toString(8) : '-0o'  + obj.toString(8).slice(1); },
    decimal:     function (obj) { return obj.toString(10); },
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
  '^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  '|[-+]?\\.(?:inf|Inf|INF)' +
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
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


  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

var js_yaml_float = new type('tag:yaml.org,2002:float', {
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
    js_yaml_int,
    js_yaml_float
  ]
});

var core = json;

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + 
  '-([0-9][0-9])'                    + 
  '-([0-9][0-9])$');                   

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + 
  '-([0-9][0-9]?)'                   + 
  '-([0-9][0-9]?)'                   + 
  '(?:[Tt]|[ \\t]+)'                 + 
  '([0-9][0-9]?)'                    + 
  ':([0-9][0-9])'                    + 
  ':([0-9][0-9])'                    + 
  '(?:\\.([0-9]*))?'                 + 
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + 
  '(?::([0-9][0-9]))?))?$');           

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


  year = +(match[1]);
  month = +(match[2]) - 1; 
  day = +(match[3]);

  if (!match[4]) { 
    return new Date(Date.UTC(year, month, day));
  }


  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { 
      fraction += '0';
    }
    fraction = +fraction;
  }


  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; 
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object ) {
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






var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    if (code > 64) continue;

    if (code < 0) return false;

    bitlen += 6;
  }

  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), 
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];


  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }


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

function representYamlBinary(object ) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;


  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }


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
  return (c === 0x0A) || (c === 0x0D);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09) || (c === 0x20);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09) ||
         (c === 0x20) ||
         (c === 0x0A) ||
         (c === 0x0D);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C ||
         c === 0x5B ||
         c === 0x5D ||
         c === 0x7B ||
         c === 0x7D;
}

function fromHexCode(c) {
  var lc;

  if ((0x30 <= c) && (c <= 0x39)) {
    return c - 0x30;
  }

  lc = c | 0x20;

  if ((0x61 <= lc) && (lc <= 0x66)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78) { return 2; }
  if (c === 0x75) { return 4; }
  if (c === 0x55) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30 <= c) && (c <= 0x39)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  return (c === 0x30) ? '\x00' :
        (c === 0x61) ? '\x07' :
        (c === 0x62) ? '\x08' :
        (c === 0x74) ? '\x09' :
        (c === 0x09) ? '\x09' :
        (c === 0x6E) ? '\x0A' :
        (c === 0x76) ? '\x0B' :
        (c === 0x66) ? '\x0C' :
        (c === 0x72) ? '\x0D' :
        (c === 0x65) ? '\x1B' :
        (c === 0x20) ? ' ' :
        (c === 0x22) ? '\x22' :
        (c === 0x2F) ? '/' :
        (c === 0x5C) ? '\x5C' :
        (c === 0x4E) ? '\x85' :
        (c === 0x5F) ? '\xA0' :
        (c === 0x4C) ? '\u2028' :
        (c === 0x50) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); 
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

  this.firstTabInLine = -1;

  this.documents = [];


}


function generateError(state, message) {
  var mark = {
    name:     state.filename,
    buffer:   state.input.slice(0, -1), 
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

  if (ch === 0x0A) {
    state.position++;
  } else if (ch === 0x0D) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A) {
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
      if (ch === 0x09 && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A && ch !== 0x0D && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20) {
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

  if ((ch === 0x2D || ch === 0x2E) &&
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
      ch === 0x23    ||
      ch === 0x26    ||
      ch === 0x2A    ||
      ch === 0x21    ||
      ch === 0x7C    ||
      ch === 0x3E    ||
      ch === 0x27    ||
      ch === 0x22    ||
      ch === 0x25    ||
      ch === 0x40    ||
      ch === 0x60) {
    return false;
  }

  if (ch === 0x3F || ch === 0x2D) {
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
    if (ch === 0x3A) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23) {
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

  if (ch !== 0x27) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27) {
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

  if (ch !== 0x22) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

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

  if (ch === 0x5B) {
    terminator = 0x5D;
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B) {
    terminator = 0x7D;
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
    } else if (ch === 0x2C) {
      throwError(state, "expected the node content, but found ','");
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line; 
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A) {
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

    if (ch === 0x2C) {
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

  if (ch === 0x7C) {
    folding = false;
  } else if (ch === 0x3E) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B || ch === 0x2D) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B) ? CHOMPING_KEEP : CHOMPING_STRIP;
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

    if (ch === 0x23) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20)) {
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

    if (state.lineIndent < textIndent) {

      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { 
          state.result += '\n';
        }
      }

      break;
    }

    if (folding) {

      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      } else if (emptyLines === 0) {
        if (didReadContent) { 
          state.result += ' ';
        }

      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    } else {
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

    if (ch !== 0x2D) {
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
    _line = state.line; 

    if ((ch === 0x3F || ch === 0x3A) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;

      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        break;
      }

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A) {
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
          return true; 
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; 
      }
    }

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


  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }

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

  if (ch !== 0x21) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21) {
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

  if (ch !== 0x26) return false;

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

  if (ch !== 0x2A) return false;

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
      indentStatus = 1, 
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
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }

  } else if (state.tag === '?') {
    if (state.result !== null && state.kind !== 'scalar') {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }

    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type = state.implicitTypes[typeIndex];

      if (type.resolve(state.result)) { 
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

    if (!type.resolve(state.result, state.tag)) { 
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

    if (state.lineIndent > 0 || ch !== 0x25) {
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

      if (ch === 0x23) {
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
      state.input.charCodeAt(state.position)     === 0x2D &&
      state.input.charCodeAt(state.position + 1) === 0x2D &&
      state.input.charCodeAt(state.position + 2) === 0x2D) {
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

    if (state.input.charCodeAt(state.position) === 0x2E) {
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

    if (input.charCodeAt(input.length - 1) !== 0x0A &&
        input.charCodeAt(input.length - 1) !== 0x0D) {
      input += '\n';
    }

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

  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20) {
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






var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_BOM                  = 0xFEFF;
var CHAR_TAB                  = 0x09; 
var CHAR_LINE_FEED            = 0x0A; 
var CHAR_CARRIAGE_RETURN      = 0x0D; 
var CHAR_SPACE                = 0x20; 
var CHAR_EXCLAMATION          = 0x21; 
var CHAR_DOUBLE_QUOTE         = 0x22; 
var CHAR_SHARP                = 0x23; 
var CHAR_PERCENT              = 0x25; 
var CHAR_AMPERSAND            = 0x26; 
var CHAR_SINGLE_QUOTE         = 0x27; 
var CHAR_ASTERISK             = 0x2A; 
var CHAR_COMMA                = 0x2C; 
var CHAR_MINUS                = 0x2D; 
var CHAR_COLON                = 0x3A; 
var CHAR_EQUALS               = 0x3D; 
var CHAR_GREATER_THAN         = 0x3E; 
var CHAR_QUESTION             = 0x3F; 
var CHAR_COMMERCIAL_AT        = 0x40; 
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; 
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; 
var CHAR_GRAVE_ACCENT         = 0x60; 
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; 
var CHAR_VERTICAL_LINE        = 0x7C; 
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; 

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

function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== CHAR_BOM)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

function isNsCharOrWhitespace(c) {
  return isPrintable(c)
    && c !== CHAR_BOM
    && c !== CHAR_CARRIAGE_RETURN
    && c !== CHAR_LINE_FEED;
}

function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    inblock ? 
      cIsNsCharOrWhitespace
      : cIsNsCharOrWhitespace
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
  )
    && c !== CHAR_SHARP 
    && !(prev === CHAR_COLON && !cIsNsChar) 
    || (isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP) 
    || (prev === CHAR_COLON && cIsNsChar); 
}

function isPlainSafeFirst(c) {
  return isPrintable(c) && c !== CHAR_BOM
    && !isWhitespace(c) 
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_EQUALS
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

function isPlainSafeLast(c) {
  return !isWhitespace(c) && c !== CHAR_COLON;
}

function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth,
  testAmbiguousType, quotingType, forceQuotes, inblock) {

  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false; 
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; 
  var plain = isPlainSafeFirst(codePointAt(string, 0))
          && isPlainSafeLast(codePointAt(string, string.length - 1));

  if (singleLineOnly || forceQuotes) {
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
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
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  if (!hasLineBreak && !hasFoldableLine) {
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}

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

    var indent = state.indent * Math.max(1, level); 
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    var singleLineOnly = iskey
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

function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

function foldString(string, width) {
  var lineRe = /(\n+)([^\n]*)/g;

  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

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

function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  var breakRe = / [^ ]/g; 
  var match;
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  while ((match = breakRe.exec(line))) {
    next = match.index;
    if (next - start > width) {
      end = (curr > start) ? curr : next; 
      result += '\n' + line.slice(start, end);
      start = end + 1;                    
    }
    curr = next;
  }

  result += '\n';
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); 
}

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
  state.dump = _result || '[]'; 
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
      continue; 
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; 
    }

    pairBuffer += state.dump;

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

  if (state.sortKeys === true) {
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
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
      continue; 
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
      continue; 
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; 
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

var types = {
  binary:    binary,
  float:     js_yaml_float,
  map:       js_yaml_map,
  null:      _null,
  pairs:     pairs,
  set:       set,
  timestamp: timestamp,
  bool:      bool,
  int:       js_yaml_int,
  merge:     merge,
  omap:      omap,
  seq:       seq,
  str:       str
};

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

 const js_yaml = (( null && (jsYaml)));


;









const tabs = [{
  label: 'Yaml',
  value: 'yaml'
}];
const RuleInspector = _ref => {
  let {
    onClose
  } = _ref;
  const [activeTab, setActiveTab] = (0,react.useState)('yaml');
  const {
    setValue
  } = (0,index_esm.Gc)();
  const styles = (0,src.useStyles2)(drawerStyles);

  const onApply = formValues => {
    for (const key in formValues) {
      setValue(key, formValues[key]);
    }

    onClose();
  };

  return (0,jsx_runtime.jsx)(src.Drawer, {
    title: "Inspect Alert rule",
    subtitle: (0,jsx_runtime.jsx)("div", {
      className: styles.subtitle,
      children: (0,jsx_runtime.jsx)(RuleInspectorSubtitle, {
        setActiveTab: setActiveTab,
        activeTab: activeTab
      })
    }),
    onClose: onClose,
    children: activeTab === 'yaml' && (0,jsx_runtime.jsx)(InspectorYamlTab, {
      onSubmit: onApply
    })
  });
};

const RuleInspectorSubtitle = _ref2 => {
  let {
    activeTab,
    setActiveTab
  } = _ref2;
  return (0,jsx_runtime.jsx)(src.TabsBar, {
    children: tabs.map((tab, index) => {
      return (0,jsx_runtime.jsx)(src.Tab, {
        label: tab.label,
        value: tab.value,
        onChangeTab: () => setActiveTab(tab.value),
        active: activeTab === tab.value
      }, `${tab.value}-${index}`);
    })
  });
};

const InspectorYamlTab = _ref3 => {
  let {
    onSubmit
  } = _ref3;
  const styles = (0,src.useStyles2)(yamlTabStyle);
  const {
    getValues
  } = (0,index_esm.Gc)();
  const [alertRuleAsYaml, setAlertRuleAsYaml] = (0,react.useState)(dump(getValues()));

  const onApply = () => {
    onSubmit(load(alertRuleAsYaml));
  };

  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)("div", {
      className: styles.applyButton,
      children: (0,jsx_runtime.jsx)(src.Button, {
        type: "button",
        onClick: onApply,
        children: "Apply"
      })
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.content,
      children: (0,jsx_runtime.jsx)(dist_index_esm.Z, {
        disableWidth: true,
        children: _ref4 => {
          let {
            height
          } = _ref4;
          return (0,jsx_runtime.jsx)(src.CodeEditor, {
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
          });
        }
      })
    })]
  });
};

const yamlTabStyle = theme => ({
  content: emotion_css_esm.css`
    flex-grow: 1;
    height: 100%;
    padding-bottom: 16px;
    margin-bottom: ${theme.spacing(2)};
  `,
  applyButton: emotion_css_esm.css`
    display: flex;
    flex-grow: 0;
  `
});

const drawerStyles = () => ({
  subtitle: emotion_css_esm.css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
});
var ExpressionDatasource = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
;
const ConditionField_excluded = ["onChange", "ref"];

function ConditionField_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const ConditionField = () => {
  var _errors$condition, _errors$condition2;

  const {
    watch,
    setValue,
    formState: {
      errors
    }
  } = (0,index_esm.Gc)();
  const queries = watch('queries');
  const condition = watch('condition');
  const options = (0,react.useMemo)(() => queries.filter(q => !!q.refId).map(q => ({
    value: q.refId,
    label: q.refId
  })), [queries]);
  const expressions = (0,react.useMemo)(() => {
    return queries.filter(query => query.datasourceUid === ExpressionDatasource.Yq);
  }, [queries]); 

  (0,react.useEffect)(() => {
    const lastExpression = (0,lodash.last)(expressions);

    if (lastExpression) {
      setValue('condition', lastExpression.refId, {
        shouldValidate: true
      });
    }
  }, [expressions, setValue]); 

  (0,react.useEffect)(() => {
    const lastExpression = (0,lodash.last)(expressions);
    const conditionExists = options.find(_ref => {
      let {
        value
      } = _ref;
      return value === condition;
    });

    if (condition && !conditionExists) {
      var _lastExpression$refId;

      setValue('condition', (_lastExpression$refId = lastExpression === null || lastExpression === void 0 ? void 0 : lastExpression.refId) !== null && _lastExpression$refId !== void 0 ? _lastExpression$refId : null);
    } else if (!condition && lastExpression) {
      setValue('condition', lastExpression.refId, {
        shouldValidate: true
      });
    }
  }, [condition, expressions, options, setValue]);
  return (0,jsx_runtime.jsx)(src.Field, {
    label: "Condition",
    description: "The query or expression that will be alerted on",
    error: (_errors$condition = errors.condition) === null || _errors$condition === void 0 ? void 0 : _errors$condition.message,
    invalid: !!((_errors$condition2 = errors.condition) !== null && _errors$condition2 !== void 0 && _errors$condition2.message),
    children: (0,jsx_runtime.jsx)(src.InputControl, {
      name: "condition",
      render: _ref2 => {
        let {
          field: {
            onChange
          }
        } = _ref2,
            field = ConditionField_objectWithoutPropertiesLoose(_ref2.field, ConditionField_excluded);

        return (0,jsx_runtime.jsx)(src.Select, Object.assign({
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
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
var app_types = __webpack_require__("./public/app/types/index.ts");
var datasource = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
;


function useRulesSourcesWithRuler() {
  const dataSources = (0,useUnifiedAlertingSelector._)(state => state.dataSources);
  const dataSourcesWithRuler = Object.values(dataSources).map(ds => ds.result).filter(ds => Boolean(ds === null || ds === void 0 ? void 0 : ds.rulerConfig)); 

  return dataSourcesWithRuler.map(ds => (0,datasource.c$)(ds.name)).filter(dsConfig => Boolean(dsConfig));
}
;
const CloudRulesSourcePicker_excluded = ["value"];

function CloudRulesSourcePicker_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function CloudRulesSourcePicker(_ref) {
  let {
    value
  } = _ref,
      props = CloudRulesSourcePicker_objectWithoutPropertiesLoose(_ref, CloudRulesSourcePicker_excluded);

  const rulesSourcesWithRuler = useRulesSourcesWithRuler();
  const dataSourceFilter = (0,react.useCallback)(ds => {
    return !!rulesSourcesWithRuler.find(_ref2 => {
      let {
        id
      } = _ref2;
      return id === ds.id;
    });
  }, [rulesSourcesWithRuler]);
  return (0,jsx_runtime.jsx)(grafana_runtime_src.DataSourcePicker, Object.assign({
    noDefault: true,
    alerting: true,
    filter: dataSourceFilter,
    current: value
  }, props));
}
;






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
  const styles = (0,src.useStyles2)(RuleType_getStyles);
  const cardStyles = (0,emotion_css_esm.cx)({
    [styles.wrapper]: true,
    [styles.disabled]: disabled
  });
  return (0,jsx_runtime.jsxs)(src.Card, {
    className: cardStyles,
    isSelected: selected,
    onClick: () => onClick(value),
    disabled: disabled,
    children: [(0,jsx_runtime.jsx)(src.Card.Figure, {
      children: (0,jsx_runtime.jsx)("img", {
        src: image
      })
    }), (0,jsx_runtime.jsx)(src.Card.Heading, {
      children: name
    }), (0,jsx_runtime.jsx)(src.Card.Description, {
      children: description
    })]
  });
};

const RuleType_getStyles = theme => ({
  wrapper: emotion_css_esm.css`
    width: 380px;
    cursor: pointer;
    user-select: none;
  `,
  disabled: emotion_css_esm.css`
    opacity: 0.5;
  `
});


;
var GrafanaManagedAlert_span;







const GrafanaManagedRuleType = _ref => {
  let {
    selected = false,
    disabled,
    onClick
  } = _ref;
  return (0,jsx_runtime.jsx)(RuleType, {
    name: "Grafana managed alert",
    description: GrafanaManagedAlert_span || (GrafanaManagedAlert_span = (0,jsx_runtime.jsxs)("span", {
      children: ["Supports multiple data sources of any kind.", (0,jsx_runtime.jsx)("br", {}), "Transform data with expressions."]
    })),
    image: "/public/img/grafana_icon.svg",
    selected: selected,
    disabled: disabled,
    value: rule_form.$.grafana,
    onClick: onClick
  });
};


;





const DisabledTooltip = _ref => {
  let {
    children,
    visible = false
  } = _ref;

  if (!visible) {
    return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: children
    });
  }

  return (0,jsx_runtime.jsx)(src.Tooltip, {
    content: "You do not appear to have any compatible datasources.",
    placement: "top",
    children: (0,jsx_runtime.jsx)("div", {
      children: children
    })
  });
};


;
var MimirOrLokiAlert_span;








const MimirFlavoredType = _ref => {
  let {
    selected = false,
    disabled = false,
    onClick
  } = _ref;
  return (0,jsx_runtime.jsx)(DisabledTooltip, {
    visible: disabled,
    children: (0,jsx_runtime.jsx)(RuleType, {
      name: "Mimir or Loki alert",
      description: MimirOrLokiAlert_span || (MimirOrLokiAlert_span = (0,jsx_runtime.jsxs)("span", {
        children: ["Use a Mimir, Loki or Cortex datasource.", (0,jsx_runtime.jsx)("br", {}), "Expressions are not supported."]
      })),
      image: "/public/img/alerting/mimir_logo.svg",
      selected: selected,
      disabled: disabled,
      value: rule_form.$.cloudAlerting,
      onClick: onClick
    })
  });
};


;
var MimirOrLokiRecordingRule_span;








const RecordingRuleType = _ref => {
  let {
    selected = false,
    disabled = false,
    onClick
  } = _ref;
  return (0,jsx_runtime.jsx)(DisabledTooltip, {
    visible: disabled,
    children: (0,jsx_runtime.jsx)(RuleType, {
      name: "Mimir or Loki recording rule",
      description: MimirOrLokiRecordingRule_span || (MimirOrLokiRecordingRule_span = (0,jsx_runtime.jsxs)("span", {
        children: ["Precompute expressions.", (0,jsx_runtime.jsx)("br", {}), "Should be combined with an alert rule."]
      })),
      image: "/public/img/alerting/mimir_logo_recording.svg",
      selected: selected,
      disabled: disabled,
      value: rule_form.$.cloudRecording,
      onClick: onClick
    })
  });
};


;














const RuleTypePicker = _ref => {
  let {
    selected,
    onChange,
    enabledTypes
  } = _ref;
  const rulesSourcesWithRuler = useRulesSourcesWithRuler();
  const hasLotexDatasources = !(0,lodash.isEmpty)(rulesSourcesWithRuler);
  const styles = (0,src.useStyles2)(RuleTypePicker_getStyles);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(experimental.Stack, {
      direction: "row",
      gap: 2,
      children: [enabledTypes.includes(rule_form.$.grafana) && (0,jsx_runtime.jsx)(GrafanaManagedRuleType, {
        selected: selected === rule_form.$.grafana,
        onClick: onChange
      }), enabledTypes.includes(rule_form.$.cloudAlerting) && (0,jsx_runtime.jsx)(MimirFlavoredType, {
        selected: selected === rule_form.$.cloudAlerting,
        onClick: onChange,
        disabled: !hasLotexDatasources
      }), enabledTypes.includes(rule_form.$.cloudRecording) && (0,jsx_runtime.jsx)(RecordingRuleType, {
        selected: selected === rule_form.$.cloudRecording,
        onClick: onChange,
        disabled: !hasLotexDatasources
      })]
    }), enabledTypes.includes(rule_form.$.grafana) && (0,jsx_runtime.jsx)("small", {
      className: styles.meta,
      children: "Select \u201CGrafana managed\u201D unless you have a Mimir, Loki or Cortex data source with the Ruler API enabled."
    })]
  });
};

const RuleTypePicker_getStyles = theme => ({
  meta: emotion_css_esm.css`
    color: ${theme.colors.text.disabled};
  `
});


;
const AlertType_excluded = ["onChange", "ref"];

function AlertType_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













const AlertType = _ref => {
  var _errors$type, _errors$type2, _errors$dataSourceNam, _errors$dataSourceNam2;

  let {
    editingExistingRule
  } = _ref;
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
  } = (0,index_esm.Gc)();
  const styles = (0,src.useStyles2)(AlertType_getStyles);
  const ruleFormType = watch('type');
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [!editingExistingRule && (0,jsx_runtime.jsx)(src.Field, {
      error: (_errors$type = errors.type) === null || _errors$type === void 0 ? void 0 : _errors$type.message,
      invalid: !!((_errors$type2 = errors.type) !== null && _errors$type2 !== void 0 && _errors$type2.message),
      "data-testid": "alert-type-picker",
      children: (0,jsx_runtime.jsx)(src.InputControl, {
        render: _ref2 => {
          var _getValues;

          let {
            field: {
              onChange
            }
          } = _ref2;
          return (0,jsx_runtime.jsx)(RuleTypePicker, {
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
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.flexRow,
      children: (ruleFormType === rule_form.$.cloudRecording || ruleFormType === rule_form.$.cloudAlerting) && (0,jsx_runtime.jsx)(src.Field, {
        className: styles.formInput,
        label: "Select data source",
        error: (_errors$dataSourceNam = errors.dataSourceName) === null || _errors$dataSourceNam === void 0 ? void 0 : _errors$dataSourceNam.message,
        invalid: !!((_errors$dataSourceNam2 = errors.dataSourceName) !== null && _errors$dataSourceNam2 !== void 0 && _errors$dataSourceNam2.message),
        "data-testid": "datasource-picker",
        children: (0,jsx_runtime.jsx)(src.InputControl, {
          render: _ref3 => {
            let {
              field: {
                onChange
              }
            } = _ref3,
                field = AlertType_objectWithoutPropertiesLoose(_ref3.field, AlertType_excluded);

            return (0,jsx_runtime.jsx)(CloudRulesSourcePicker, Object.assign({}, field, {
              onChange: ds => {
                var _ds$name;

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
  const canCreateGrafanaRules = context_srv.Vt.hasPermission(app_types.bW.AlertingRuleCreate);
  const canCreateCloudRules = context_srv.Vt.hasPermission(app_types.bW.AlertingRuleExternalWrite);
  const defaultRuleType = canCreateGrafanaRules ? rule_form.$.grafana : rule_form.$.cloudAlerting;
  const enabledRuleTypes = [];

  if (canCreateGrafanaRules) {
    enabledRuleTypes.push(rule_form.$.grafana);
  }

  if (canCreateCloudRules) {
    enabledRuleTypes.push(rule_form.$.cloudAlerting, rule_form.$.cloudRecording);
  }

  return {
    enabledRuleTypes,
    defaultRuleType
  };
}

const AlertType_getStyles = theme => ({
  formInput: emotion_css_esm.css`
    width: 330px;
    & + & {
      margin-left: ${theme.spacing(3)};
    }
  `,
  flexRow: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  `
});
;
var _div;








const ExpressionEditor = _ref => {
  var _dataSource$component, _dataSource$component2;

  let {
    value,
    onChange,
    dataSourceName
  } = _ref;
  const {
    mapToValue,
    mapToQuery
  } = useQueryMappers(dataSourceName);
  const [query, setQuery] = (0,react.useState)(mapToQuery({
    refId: 'A',
    hide: false
  }, value));
  const {
    error,
    loading,
    value: dataSource
  } = (0,useAsync.Z)(() => {
    return (0,grafana_runtime_src.getDataSourceSrv)().get(dataSourceName);
  }, [dataSourceName]);
  const onChangeQuery = (0,react.useCallback)(query => {
    setQuery(query);
    onChange(mapToValue(query));
  }, [onChange, mapToValue]);

  if (loading || (dataSource === null || dataSource === void 0 ? void 0 : dataSource.name) !== dataSourceName) {
    return null;
  }

  if (error || !dataSource || !(dataSource !== null && dataSource !== void 0 && (_dataSource$component = dataSource.components) !== null && _dataSource$component !== void 0 && _dataSource$component.QueryEditor)) {
    const errorMessage = (error === null || error === void 0 ? void 0 : error.message) || 'Data source plugin does not export any Query Editor component';
    return _div || (_div = (0,jsx_runtime.jsxs)("div", {
      children: ["Could not load query editor due to: ", errorMessage]
    }));
  }

  const QueryEditor = dataSource === null || dataSource === void 0 ? void 0 : (_dataSource$component2 = dataSource.components) === null || _dataSource$component2 === void 0 ? void 0 : _dataSource$component2.QueryEditor;
  return (0,jsx_runtime.jsx)(QueryEditor, {
    query: query,
    queries: [query],
    app: grafana_data_src.CoreApp.CloudAlerting,
    onChange: onChangeQuery,
    onRunQuery: lodash.noop,
    datasource: dataSource
  });
};

function useQueryMappers(dataSourceName) {
  return (0,react.useMemo)(() => {
    const settings = (0,grafana_runtime_src.getDataSourceSrv)().getInstanceSettings(dataSourceName);

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
var grafana_e2e_selectors_src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
var utils_query = __webpack_require__("./public/app/core/utils/query.ts");
var expressions_types = __webpack_require__("./public/app/features/expressions/types.ts");
var expressionTypes = __webpack_require__("./public/app/features/expressions/utils/expressionTypes.ts");
var datasource_srv = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
var AlertingQueryRunner = __webpack_require__("./public/app/features/alerting/unified/state/AlertingQueryRunner.ts");
var react_beautiful_dnd_esm = __webpack_require__("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
var QueryOperationRow = __webpack_require__("./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx");
var QueryEditorRow = __webpack_require__("./public/app/features/query/components/QueryEditorRow.tsx");
var constants = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
var grafana_schema_src = __webpack_require__("./packages/grafana-schema/src/index.ts");
var app_events = __webpack_require__("./public/app/core/app_events.ts");
;


function useVizHeight(data, pluginId, frameIndex) {
  const theme = (0,src.useTheme2)();

  if (pluginId === constants.GC || pluginId === constants.Kd || dataIsEmpty(data)) {
    return 200;
  }

  const values = data.series[frameIndex].fields[0].values.length;
  const rowHeight = theme.spacing.gridSize * 5;

  const tableHeight = values * rowHeight + rowHeight;
  return tableHeight >= 200 ? 200 : tableHeight;
}

function dataIsEmpty(data) {
  return !data || !data.series[0] || !data.series[0].fields[0] || !data.series[0].fields[0].values;
}
var PanelPluginsButtonGroup = __webpack_require__("./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx");
;











const VizWrapper = _ref => {
  let {
    data,
    currentPanel,
    changePanel,
    onThresholdsChange,
    thresholds
  } = _ref;
  const [options, setOptions] = (0,react.useState)({
    frameIndex: 0,
    showHeader: true
  });
  const vizHeight = useVizHeight(data, currentPanel, options.frameIndex);
  const styles = (0,src.useStyles2)(VizWrapper_getStyles(vizHeight));
  const [fieldConfig, setFieldConfig] = (0,react.useState)(defaultFieldConfig(thresholds, data));
  (0,react.useEffect)(() => {
    setFieldConfig(fieldConfig => Object.assign({}, fieldConfig, {
      defaults: Object.assign({}, fieldConfig.defaults, {
        thresholds: thresholds,
        unit: defaultUnit(data),
        custom: Object.assign({}, fieldConfig.defaults.custom, {
          thresholdsStyle: {
            mode: grafana_schema_src.i3.Line
          }
        })
      })
    }));
  }, [thresholds, setFieldConfig, data]);
  const context = (0,react.useMemo)(() => ({
    eventBus: app_events.Z,
    canEditThresholds: true,
    onThresholdsChange: onThresholdsChange
  }), [onThresholdsChange]);

  if (!options || !data) {
    return null;
  }

  return (0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    children: [(0,jsx_runtime.jsx)("div", {
      className: styles.buttonGroup,
      children: (0,jsx_runtime.jsx)(PanelPluginsButtonGroup.j, {
        onChange: changePanel,
        value: currentPanel
      })
    }), (0,jsx_runtime.jsx)(dist_index_esm.Z, {
      children: _ref2 => {
        let {
          width
        } = _ref2;

        if (width === 0) {
          return null;
        }

        return (0,jsx_runtime.jsx)("div", {
          style: {
            height: `${vizHeight}px`,
            width: `${width}px`
          },
          children: (0,jsx_runtime.jsx)(src.PanelContextProvider, {
            value: context,
            children: (0,jsx_runtime.jsx)(grafana_runtime_src.PanelRenderer, {
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

const VizWrapper_getStyles = visHeight => theme => ({
  wrapper: emotion_css_esm.css`
    padding: 0 ${theme.spacing(2)};
    height: ${visHeight + theme.spacing.gridSize * 4}px;
  `,
  buttonGroup: emotion_css_esm.css`
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
          mode: grafana_schema_src.i3.Line
        }
      }
    },
    overrides: []
  };
}
;










const QueryWrapper = _ref => {
  let {
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
  } = _ref;
  const styles = (0,src.useStyles2)(QueryWrapper_getStyles);
  const isExpression = (0,guards.j)(query.model);
  const [pluginId, changePluginId] = (0,react.useState)(isExpression ? constants.Fe : constants.GC);

  const renderTimePicker = (query, index) => {
    var _query$relativeTimeRa;

    if ((0,guards.j)(query.model) || !onChangeTimeRange) {
      return null;
    }

    return (0,jsx_runtime.jsx)(src.RelativeTimeRangePicker, {
      timeRange: (_query$relativeTimeRa = query.relativeTimeRange) !== null && _query$relativeTimeRa !== void 0 ? _query$relativeTimeRa : (0,grafana_data_src.getDefaultRelativeTimeRange)(),
      onChange: range => onChangeTimeRange(range, index)
    });
  };

  return (0,jsx_runtime.jsx)("div", {
    className: styles.wrapper,
    children: (0,jsx_runtime.jsx)(QueryEditorRow.x, {
      alerting: true,
      dataSource: dsSettings,
      onChangeDataSource: !isExpression ? settings => onChangeDataSource(settings, index) : undefined,
      id: query.refId,
      index: index,
      data: data,
      query: (0,lodash.cloneDeep)(query.model),
      onChange: query => onChangeQuery(query, index),
      onRemoveQuery: onRemoveQuery,
      onAddQuery: () => onDuplicateQuery((0,lodash.cloneDeep)(query)),
      onRunQuery: onRunQueries,
      queries: queries,
      renderHeaderExtras: () => renderTimePicker(query, index),
      app: grafana_data_src.CoreApp.UnifiedAlerting,
      visualization: data.state !== grafana_data_src.LoadingState.NotStarted ? (0,jsx_runtime.jsx)(VizWrapper, {
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
const EmptyQueryWrapper = _ref2 => {
  let {
    children
  } = _ref2;
  const styles = (0,src.useStyles2)(QueryWrapper_getStyles);
  return (0,jsx_runtime.jsx)("div", {
    className: styles.wrapper,
    children: children
  });
};

const QueryWrapper_getStyles = theme => ({
  wrapper: emotion_css_esm.css`
    label: AlertingQueryWrapper;
    margin-bottom: ${theme.spacing(1)};
    border: 1px solid ${theme.colors.border.medium};
    border-radius: ${theme.shape.borderRadius(1)};
  `
});
;
var _Card$Figure;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class QueryRows extends react.PureComponent {
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
        if (!(0,guards.j)(query.model)) {
          return query;
        }

        if (query.model.conditions && query.model.conditions[0].query.params[0] === referencedRefId) {
          return Object.assign({}, query, {
            model: Object.assign({}, query.model, {
              conditions: query.model.conditions.map((condition, conditionIndex) => {
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
      } = this.props; 

      const previousRefId = queries[index].refId;
      const newRefId = query.refId;
      onQueriesChange(queriesWithUpdatedReferences(queries, previousRefId, newRefId).map((item, itemIndex) => {
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
      return (0,grafana_runtime_src.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);
    });

    _defineProperty(this, "getThresholdsForQueries", queries => {
      const record = {};

      for (const query of queries) {
        if (!(0,guards.j)(query.model)) {
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
              mode: grafana_data_src.ThresholdsMode.Absolute,
              steps: [{
                value: -Infinity,
                color: grafana_runtime_src.config.theme2.colors.success.main
              }]
            };
          }

          record[refId].steps.push({
            value: threshold,
            color: grafana_runtime_src.config.theme2.colors.error.main
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
    return (0,jsx_runtime.jsx)(react_beautiful_dnd_esm.Z5, {
      onDragEnd: this.onDragEnd,
      children: (0,jsx_runtime.jsx)(react_beautiful_dnd_esm.bK, {
        droppableId: "alerting-queries",
        direction: "vertical",
        children: provided => {
          return (0,jsx_runtime.jsxs)("div", Object.assign({
            ref: provided.innerRef
          }, provided.droppableProps, {
            children: [queries.map((query, index) => {
              var _this$props$data$quer, _this$props$data;

              const data = (_this$props$data$quer = (_this$props$data = this.props.data) === null || _this$props$data === void 0 ? void 0 : _this$props$data[query.refId]) !== null && _this$props$data$quer !== void 0 ? _this$props$data$quer : {
                series: [],
                state: grafana_data_src.LoadingState.NotStarted
              };
              const dsSettings = this.getDataSourceSettings(query);

              if (!dsSettings) {
                return (0,jsx_runtime.jsx)(DatasourceNotFound, {
                  index: index,
                  model: query.model,
                  onUpdateDatasource: () => {
                    const defaultDataSource = (0,datasource_srv.ak)().getInstanceSettings(null);

                    if (defaultDataSource) {
                      this.onChangeDataSource(defaultDataSource, index);
                    }
                  },
                  onRemoveQuery: () => {
                    this.onRemoveQuery(query);
                  }
                }, `${query.refId}-${index}`);
              }

              return (0,jsx_runtime.jsx)(QueryWrapper, {
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
    model: (0,lodash.omit)(item.model, 'datasource'),
    datasourceUid: uid
  });
}

const DatasourceNotFound = _ref => {
  let {
    index,
    onUpdateDatasource,
    onRemoveQuery,
    model
  } = _ref;
  const refId = model.refId;
  const [showDetails, setShowDetails] = (0,react.useState)(false);

  const toggleDetails = () => {
    setShowDetails(show => !show);
  };

  const handleUpdateDatasource = () => {
    onUpdateDatasource();
  };

  return (0,jsx_runtime.jsx)(EmptyQueryWrapper, {
    children: (0,jsx_runtime.jsxs)(QueryOperationRow.t, {
      title: refId,
      draggable: true,
      index: index,
      id: refId,
      isOpen: true,
      children: [(0,jsx_runtime.jsxs)(src.Card, {
        heading: "This datasource has been removed",
        description: 'The datasource for this query was not found, it was either removed or is not installed correctly.',
        children: [_Card$Figure || (_Card$Figure = (0,jsx_runtime.jsx)(src.Card.Figure, {
          children: (0,jsx_runtime.jsx)(src.Icon, {
            name: "question-circle"
          })
        })), (0,jsx_runtime.jsxs)(src.Card.Actions, {
          children: [(0,jsx_runtime.jsx)(src.Button, {
            variant: "secondary",
            onClick: handleUpdateDatasource,
            children: "Update datasource"
          }, "update"), (0,jsx_runtime.jsx)(src.Button, {
            variant: "destructive",
            onClick: onRemoveQuery,
            children: "Remove query"
          }, "remove")]
        }), (0,jsx_runtime.jsx)(src.Card.SecondaryActions, {
          children: (0,jsx_runtime.jsx)(src.Button, {
            onClick: toggleDetails,
            icon: showDetails ? 'angle-up' : 'angle-down',
            fill: "text",
            size: "sm",
            children: "Show details"
          }, "details")
        })]
      }), showDetails && (0,jsx_runtime.jsx)("div", {
        children: (0,jsx_runtime.jsx)("pre", {
          children: (0,jsx_runtime.jsx)("code", {
            children: JSON.stringify(model, null, 2)
          })
        })
      })]
    })
  });
};
;
function QueryEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class QueryEditor extends react.PureComponent {
  constructor(props) {
    var _props$value;

    super(props);

    QueryEditor_defineProperty(this, "runner", void 0);

    QueryEditor_defineProperty(this, "queries", void 0);

    QueryEditor_defineProperty(this, "onRunQueries", () => {
      const {
        queries
      } = this;
      this.runner.run(queries);
    });

    QueryEditor_defineProperty(this, "onCancelQueries", () => {
      this.runner.cancel();
    });

    QueryEditor_defineProperty(this, "onChangeQueries", queries => {
      this.queries = queries;
      this.props.onChange(queries);
    });

    QueryEditor_defineProperty(this, "onDuplicateQuery", query => {
      const {
        queries
      } = this;
      this.onChangeQueries(addQuery(queries, query));
    });

    QueryEditor_defineProperty(this, "onNewAlertingQuery", () => {
      const {
        queries
      } = this;
      const defaultDataSource = (0,datasource_srv.ak)().getInstanceSettings('default');

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

    QueryEditor_defineProperty(this, "onNewExpressionQuery", () => {
      const {
        queries
      } = this;
      this.onChangeQueries(addQuery(queries, {
        datasourceUid: ExpressionDatasource.Yq,
        model: ExpressionDatasource.mV.newQuery({
          type: expressions_types.Us.classic,
          conditions: [expressionTypes.R]
        })
      }));
    });

    this.state = {
      panelDataByRefId: {}
    };
    this.runner = new AlertingQueryRunner.v();
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
    return (data === null || data === void 0 ? void 0 : data.state) === grafana_data_src.LoadingState.Loading;
  }

  renderRunQueryButton() {
    const isRunning = this.isRunning();

    if (isRunning) {
      return (0,jsx_runtime.jsx)(src.Button, {
        icon: "fa fa-spinner",
        type: "button",
        variant: "destructive",
        onClick: this.onCancelQueries,
        children: "Cancel"
      });
    }

    return (0,jsx_runtime.jsx)(src.Button, {
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
    const styles = QueryEditor_getStyles(grafana_runtime_src.config.theme2);
    return (0,jsx_runtime.jsxs)("div", {
      className: styles.container,
      children: [(0,jsx_runtime.jsx)(QueryRows, {
        data: panelDataByRefId,
        queries: value,
        onQueriesChange: this.onChangeQueries,
        onDuplicateQuery: this.onDuplicateQuery,
        onRunQueries: this.onRunQueries
      }), (0,jsx_runtime.jsxs)(src.HorizontalGroup, {
        spacing: "sm",
        align: "flex-start",
        children: [(0,jsx_runtime.jsx)(src.Button, {
          type: "button",
          icon: "plus",
          onClick: this.onNewAlertingQuery,
          variant: "secondary",
          "aria-label": grafana_e2e_selectors_src.wl.components.QueryTab.addQuery,
          children: "Add query"
        }), grafana_runtime_src.config.expressionsEnabled && (0,jsx_runtime.jsx)(src.Button, {
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
  const refId = (0,utils_query.Hs)(queries);
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
  if ((0,guards.j)(model)) {
    return;
  }

  return (0,grafana_data_src.getDefaultRelativeTimeRange)();
};

const QueryEditor_getStyles = (0,src.stylesFactory)(theme => {
  return {
    container: emotion_css_esm.css`
      background-color: ${theme.colors.background.primary};
      height: 100%;
      max-width: ${theme.breakpoints.values.xxl}px;
    `,
    runWrapper: emotion_css_esm.css`
      margin-top: ${theme.spacing(1)};
    `,
    editorWrapper: emotion_css_esm.css`
      border: 1px solid ${theme.colors.border.medium};
      border-radius: ${theme.shape.borderRadius()};
    `
  };
});
;
const Query_excluded = ["ref"],
      Query_excluded2 = ["ref"];

function Query_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Query = () => {
  var _errors$expression, _errors$expression2;

  const {
    control,
    watch,
    formState: {
      errors
    }
  } = (0,index_esm.Gc)();
  const type = watch('type');
  const dataSourceName = watch('dataSourceName');
  const isGrafanaManagedType = type === rule_form.$.grafana;
  const isCloudAlertRuleType = type === rule_form.$.cloudAlerting;
  const isRecordingRuleType = type === rule_form.$.cloudRecording;
  const showCloudExpressionEditor = (isRecordingRuleType || isCloudAlertRuleType) && dataSourceName;
  return (0,jsx_runtime.jsxs)("div", {
    children: [showCloudExpressionEditor && (0,jsx_runtime.jsx)(src.Field, {
      error: (_errors$expression = errors.expression) === null || _errors$expression === void 0 ? void 0 : _errors$expression.message,
      invalid: !!((_errors$expression2 = errors.expression) !== null && _errors$expression2 !== void 0 && _errors$expression2.message),
      children: (0,jsx_runtime.jsx)(src.InputControl, {
        name: "expression",
        render: _ref => {
          let {} = _ref,
              field = Query_objectWithoutPropertiesLoose(_ref.field, Query_excluded);

          return (0,jsx_runtime.jsx)(ExpressionEditor, Object.assign({}, field, {
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
    }), isGrafanaManagedType && (0,jsx_runtime.jsx)(src.Field, {
      invalid: !!errors.queries,
      error: !!errors.queries && 'Must provide at least one valid query.' || undefined,
      children: (0,jsx_runtime.jsx)(src.InputControl, {
        name: "queries",
        render: _ref2 => {
          let {} = _ref2,
              field = Query_objectWithoutPropertiesLoose(_ref2.field, Query_excluded2);

          return (0,jsx_runtime.jsx)(QueryEditor, Object.assign({}, field));
        },
        control: control,
        rules: {
          validate: queries => Array.isArray(queries) && !!queries.length
        }
      })
    })]
  });
};
;
var _Query, _ConditionField;










const QueryAndAlertConditionStep = _ref => {
  let {
    editingExistingRule
  } = _ref;
  const {
    watch
  } = (0,index_esm.Gc)();
  const type = watch('type');
  const isGrafanaManagedType = type === rule_form.$.grafana;
  return (0,jsx_runtime.jsxs)(RuleEditorSection, {
    stepNo: 1,
    title: "Set a query and alert condition",
    children: [(0,jsx_runtime.jsx)(AlertType, {
      editingExistingRule: editingExistingRule
    }), type && (_Query || (_Query = (0,jsx_runtime.jsx)(Query, {}))), isGrafanaManagedType && (_ConditionField || (_ConditionField = (0,jsx_runtime.jsx)(ConditionField, {})))]
  });
};
;
var _GrafanaEvaluationBeh, _CloudEvaluationBehav, _DetailsStep;
























const AlertRuleForm = _ref => {
  var _ref2;

  let {
    existing
  } = _ref;
  const styles = (0,src.useStyles2)(AlertRuleForm_getStyles);
  const dispatch = (0,es.useDispatch)();
  const notifyApp = (0,appNotification.iG)();
  const [queryParams] = (0,useQueryParams.K)();
  const [showEditYaml, setShowEditYaml] = (0,react.useState)(false);
  const returnTo = (_ref2 = queryParams['returnTo']) !== null && _ref2 !== void 0 ? _ref2 : '/alerting/list';
  const [showDeleteModal, setShowDeleteModal] = (0,react.useState)(false);
  const defaultValues = (0,react.useMemo)(() => {
    if (existing) {
      return (0,utils_rule_form.DQ)(existing);
    }

    return Object.assign({}, (0,utils_rule_form.uZ)(), {
      queries: (0,utils_rule_form.s0)()
    }, queryParams['defaults'] ? JSON.parse(queryParams['defaults']) : {}, {
      type: rule_form.$.grafana
    });
  }, [existing, queryParams]);
  const formAPI = (0,index_esm.cI)({
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
  const showStep2 = Boolean(type && (type === rule_form.$.grafana || !!dataSourceName));
  const submitState = (0,useUnifiedAlertingSelector._)(state => state.ruleForm.saveRule) || redux.oq;
  (0,useCleanup.x)(state => state.unifiedAlerting.ruleForm.saveRule);

  const submit = (values, exitOnSave) => {
    var _values$annotations$m, _values$annotations, _values$labels$map$fi, _values$labels;

    dispatch((0,actions.wy)({
      values: Object.assign({}, defaultValues, values, {
        annotations: (_values$annotations$m = (_values$annotations = values.annotations) === null || _values$annotations === void 0 ? void 0 : _values$annotations.map(_ref3 => {
          let {
            key,
            value
          } = _ref3;
          return {
            key: key.trim(),
            value: value.trim()
          };
        }).filter(_ref4 => {
          let {
            key,
            value
          } = _ref4;
          return !!key && !!value;
        })) !== null && _values$annotations$m !== void 0 ? _values$annotations$m : [],
        labels: (_values$labels$map$fi = (_values$labels = values.labels) === null || _values$labels === void 0 ? void 0 : _values$labels.map(_ref5 => {
          let {
            key,
            value
          } = _ref5;
          return {
            key: key.trim(),
            value: value.trim()
          };
        }).filter(_ref6 => {
          let {
            key
          } = _ref6;
          return !!key;
        })) !== null && _values$labels$map$fi !== void 0 ? _values$labels$map$fi : []
      }),
      existing,
      redirectOnSave: exitOnSave ? returnTo : undefined
    }));
  };

  const deleteRule = () => {
    if (existing) {
      const identifier = rule_id.Zk(existing.ruleSourceName, existing.namespace, existing.group.name, existing.rule);
      dispatch((0,actions.hS)(identifier, {
        navigateTo: '/alerting/list'
      }));
    }
  };

  const onInvalid = () => {
    notifyApp.error('There are errors in the form. Please correct them and try again!');
  };

  return (0,jsx_runtime.jsxs)(index_esm.RV, Object.assign({}, formAPI, {
    children: [(0,jsx_runtime.jsxs)("form", {
      onSubmit: e => e.preventDefault(),
      className: styles.form,
      children: [(0,jsx_runtime.jsxs)(src.PageToolbar, {
        title: `${existing ? 'Edit' : 'Create'} alert rule`,
        pageIcon: "bell",
        children: [(0,jsx_runtime.jsx)(react_router_dom.Link, {
          to: returnTo,
          children: (0,jsx_runtime.jsx)(src.Button, {
            variant: "secondary",
            disabled: submitState.loading,
            type: "button",
            fill: "outline",
            children: "Cancel"
          })
        }), existing ? (0,jsx_runtime.jsx)(src.Button, {
          variant: "destructive",
          type: "button",
          onClick: () => setShowDeleteModal(true),
          children: "Delete"
        }) : null, isCortexLokiOrRecordingRule(watch) && (0,jsx_runtime.jsx)(src.Button, {
          variant: "secondary",
          type: "button",
          onClick: () => setShowEditYaml(true),
          disabled: submitState.loading,
          children: "Edit yaml"
        }), (0,jsx_runtime.jsxs)(src.Button, {
          variant: "primary",
          type: "button",
          onClick: handleSubmit(values => submit(values, false), onInvalid),
          disabled: submitState.loading,
          children: [submitState.loading && (0,jsx_runtime.jsx)(src.Spinner, {
            className: styles.buttonSpinner,
            inline: true
          }), "Save"]
        }), (0,jsx_runtime.jsxs)(src.Button, {
          variant: "primary",
          type: "button",
          onClick: handleSubmit(values => submit(values, true), onInvalid),
          disabled: submitState.loading,
          children: [submitState.loading && (0,jsx_runtime.jsx)(src.Spinner, {
            className: styles.buttonSpinner,
            inline: true
          }), "Save and exit"]
        })]
      }), (0,jsx_runtime.jsx)("div", {
        className: styles.contentOuter,
        children: (0,jsx_runtime.jsx)(src.CustomScrollbar, {
          autoHeightMin: "100%",
          hideHorizontalTrack: true,
          children: (0,jsx_runtime.jsxs)("div", {
            className: styles.contentInner,
            children: [(0,jsx_runtime.jsx)(QueryAndAlertConditionStep, {
              editingExistingRule: !!existing
            }), showStep2 && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [type === rule_form.$.grafana ? _GrafanaEvaluationBeh || (_GrafanaEvaluationBeh = (0,jsx_runtime.jsx)(GrafanaEvaluationBehavior, {})) : _CloudEvaluationBehav || (_CloudEvaluationBehav = (0,jsx_runtime.jsx)(CloudEvaluationBehavior, {})), _DetailsStep || (_DetailsStep = (0,jsx_runtime.jsx)(DetailsStep, {}))]
            })]
          })
        })
      })]
    }), showDeleteModal ? (0,jsx_runtime.jsx)(src.ConfirmModal, {
      isOpen: true,
      title: "Delete rule",
      body: "Deleting this rule will permanently remove it. Are you sure you want to delete this rule?",
      confirmText: "Yes, delete",
      icon: "exclamation-triangle",
      onConfirm: deleteRule,
      onDismiss: () => setShowDeleteModal(false)
    }) : null, showEditYaml ? (0,jsx_runtime.jsx)(RuleInspector, {
      onClose: () => setShowEditYaml(false)
    }) : null]
  }));
};

const isCortexLokiOrRecordingRule = watch => {
  const [ruleType, dataSourceName] = watch(['type', 'dataSourceName']);
  return (ruleType === rule_form.$.cloudAlerting || ruleType === rule_form.$.cloudRecording) && dataSourceName !== '';
};

const AlertRuleForm_getStyles = theme => {
  return {
    buttonSpinner: emotion_css_esm.css`
      margin-right: ${theme.spacing(1)};
    `,
    form: emotion_css_esm.css`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    `,
    contentInner: emotion_css_esm.css`
      flex: 1;
      padding: ${theme.spacing(2)};
    `,
    contentOuter: emotion_css_esm.css`
      background: ${theme.colors.background.primary};
      border: 1px solid ${theme.colors.border.weak};
      border-radius: ${theme.shape.borderRadius()};
      margin: ${theme.spacing(0, 2, 2)};
      overflow: hidden;
      flex: 1;
    `,
    flexRow: emotion_css_esm.css`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    `
  };
};
var useIsRuleEditable = __webpack_require__("./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts");
var accessControlHooks = __webpack_require__("./public/app/features/alerting/unified/utils/accessControlHooks.ts");
;
var _Page$Contents, _AlertWarning, _AlertWarning2, _AlertWarning3, _AlertWarning4, _Page$Contents2, _AlertRuleForm, _LinkButton;

















const ExistingRuleEditor = _ref => {
  let {
    identifier
  } = _ref;
  (0,useCleanup.x)(state => state.unifiedAlerting.ruleForm.existingRule);
  const {
    loading,
    result,
    error,
    dispatched
  } = (0,useUnifiedAlertingSelector._)(state => state.ruleForm.existingRule);
  const dispatch = (0,es.useDispatch)();
  const {
    isEditable
  } = (0,useIsRuleEditable.M)(rule_id.s0(identifier), result === null || result === void 0 ? void 0 : result.rule);
  (0,react.useEffect)(() => {
    if (!dispatched) {
      dispatch((0,actions.on)(identifier));
    }
  }, [dispatched, dispatch, identifier]);

  if (loading || isEditable === undefined) {
    return _Page$Contents || (_Page$Contents = (0,jsx_runtime.jsx)(Page.Z.Contents, {
      children: (0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
        text: "Loading rule..."
      })
    }));
  }

  if (error) {
    return (0,jsx_runtime.jsx)(Page.Z.Contents, {
      children: (0,jsx_runtime.jsx)(src.Alert, {
        severity: "error",
        title: "Failed to load rule",
        children: error.message
      })
    });
  }

  if (!result) {
    return _AlertWarning || (_AlertWarning = (0,jsx_runtime.jsx)(AlertWarning, {
      title: "Rule not found",
      children: "Sorry! This rule does not exist."
    }));
  }

  if (isEditable === false) {
    return _AlertWarning2 || (_AlertWarning2 = (0,jsx_runtime.jsx)(AlertWarning, {
      title: "Cannot edit rule",
      children: "Sorry! You do not have permission to edit this rule."
    }));
  }

  return (0,jsx_runtime.jsx)(AlertRuleForm, {
    existing: result
  });
};

const RuleEditor = _ref2 => {
  let {
    match
  } = _ref2;
  const dispatch = (0,es.useDispatch)();
  const {
    id
  } = match.params;
  const identifier = rule_id.OA(id, true);
  const {
    loading
  } = (0,useAsync.Z)(async () => {
    await dispatch((0,actions.dV)());
  }, [dispatch]);
  const {
    canCreateGrafanaRules,
    canCreateCloudRules,
    canEditRules
  } = (0,accessControlHooks.B)();

  if (!identifier && !canCreateGrafanaRules && !canCreateCloudRules) {
    return _AlertWarning3 || (_AlertWarning3 = (0,jsx_runtime.jsx)(AlertWarning, {
      title: "Cannot create rules",
      children: "Sorry! You are not allowed to create rules."
    }));
  }

  if (identifier && !canEditRules(identifier.ruleSourceName)) {
    return _AlertWarning4 || (_AlertWarning4 = (0,jsx_runtime.jsx)(AlertWarning, {
      title: "Cannot edit rules",
      children: "Sorry! You are not allowed to edit rules."
    }));
  }

  if (loading) {
    return _Page$Contents2 || (_Page$Contents2 = (0,jsx_runtime.jsx)(Page.Z.Contents, {
      children: (0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
        text: "Loading..."
      })
    }));
  }

  if (identifier) {
    return (0,jsx_runtime.jsx)(ExistingRuleEditor, {
      identifier: identifier
    }, id);
  }

  return _AlertRuleForm || (_AlertRuleForm = (0,jsx_runtime.jsx)(AlertRuleForm, {}));
};

const AlertWarning = _ref3 => {
  let {
    title,
    children
  } = _ref3;
  return (0,jsx_runtime.jsxs)(src.Alert, {
    className: (0,src.useStyles2)(warningStyles).warning,
    severity: "warning",
    title: title,
    children: [(0,jsx_runtime.jsx)("p", {
      children: children
    }), _LinkButton || (_LinkButton = (0,jsx_runtime.jsx)(src.LinkButton, {
      href: "alerting/list",
      children: "To rule list"
    }))]
  });
};

const warningStyles = theme => ({
  warning: emotion_css_esm.css`
    margin: ${theme.spacing(4)};
  `
});

 const unified_RuleEditor = ((0,src.withErrorBoundary)(RuleEditor, {
  style: 'page'
}));

 }),

 "./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "j": () => ( PanelPluginsButtonGroup)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function PanelPluginsButtonGroup(props) {
  const {
    value,
    onChange,
    size = 'md'
  } = props;
  const panels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => getSupportedPanels(), []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
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
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__ .GC:
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__ .Fe:
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__ .Kd:
      return true;

    default:
      return false;
  }
}

 }),

 "./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "Z": () => ( rule_editor_AnnotationsField)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var index_esm = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var constants = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
var SelectWIthAdd = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
const _excluded = ["value", "existingKeys", "aria-label"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const AnnotationKeyInput = _ref => {
  let {
    value,
    existingKeys,
    'aria-label': ariaLabel
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const annotationOptions = (0,react.useMemo)(() => Object.values(constants.q6).filter(key => !existingKeys.includes(key)) 
  .map(key => ({
    value: key,
    label: constants.vY[key]
  })), [existingKeys]);
  return (0,jsx_runtime.jsx)(SelectWIthAdd.P, Object.assign({
    "aria-label": ariaLabel,
    value: value,
    options: annotationOptions,
    custom: !!value && !Object.values(constants.q6).includes(value)
  }, rest));
};
;
const AnnotationsField_excluded = ["ref"];

var _Label;

function AnnotationsField_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const AnnotationsField = () => {
  const styles = (0,src.useStyles)(getStyles);
  const {
    control,
    register,
    watch,
    formState: {
      errors
    }
  } = (0,index_esm.Gc)();
  const annotations = watch('annotations');
  const existingKeys = (0,react.useCallback)(index => annotations.filter((_, idx) => idx !== index).map(_ref => {
    let {
      key
    } = _ref;
    return key;
  }), [annotations]);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [_Label || (_Label = (0,jsx_runtime.jsx)(src.Label, {
      children: "Summary and annotations"
    })), (0,jsx_runtime.jsx)(src.FieldArray, {
      name: 'annotations',
      control: control,
      children: _ref2 => {
        let {
          fields,
          append,
          remove
        } = _ref2;
        return (0,jsx_runtime.jsxs)("div", {
          className: styles.flexColumn,
          children: [fields.map((field, index) => {
            var _annotations$index, _annotations$index$ke, _errors$annotations, _errors$annotations$i, _errors$annotations$i2, _errors$annotations2, _errors$annotations2$, _errors$annotations2$2, _annotations$index2, _errors$annotations3, _errors$annotations3$, _errors$annotations3$2, _errors$annotations4, _errors$annotations4$, _errors$annotations4$2;

            const isUrl = (_annotations$index = annotations[index]) === null || _annotations$index === void 0 ? void 0 : (_annotations$index$ke = _annotations$index.key) === null || _annotations$index$ke === void 0 ? void 0 : _annotations$index$ke.toLocaleLowerCase().endsWith('url');
            const ValueInputComponent = isUrl ? src.Input : src.TextArea;
            return (0,jsx_runtime.jsxs)("div", {
              className: styles.flexRow,
              children: [(0,jsx_runtime.jsx)(src.Field, {
                className: styles.field,
                invalid: !!((_errors$annotations = errors.annotations) !== null && _errors$annotations !== void 0 && (_errors$annotations$i = _errors$annotations[index]) !== null && _errors$annotations$i !== void 0 && (_errors$annotations$i2 = _errors$annotations$i.key) !== null && _errors$annotations$i2 !== void 0 && _errors$annotations$i2.message),
                error: (_errors$annotations2 = errors.annotations) === null || _errors$annotations2 === void 0 ? void 0 : (_errors$annotations2$ = _errors$annotations2[index]) === null || _errors$annotations2$ === void 0 ? void 0 : (_errors$annotations2$2 = _errors$annotations2$.key) === null || _errors$annotations2$2 === void 0 ? void 0 : _errors$annotations2$2.message,
                "data-testid": `annotation-key-${index}`,
                children: (0,jsx_runtime.jsx)(src.InputControl, {
                  name: `annotations[${index}].key`,
                  render: _ref3 => {
                    let {} = _ref3,
                        field = AnnotationsField_objectWithoutPropertiesLoose(_ref3.field, AnnotationsField_excluded);

                    return (0,jsx_runtime.jsx)(AnnotationKeyInput, Object.assign({}, field, {
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
              }), (0,jsx_runtime.jsx)(src.Field, {
                className: (0,emotion_css_esm.cx)(styles.flexRowItemMargin, styles.field),
                invalid: !!((_errors$annotations3 = errors.annotations) !== null && _errors$annotations3 !== void 0 && (_errors$annotations3$ = _errors$annotations3[index]) !== null && _errors$annotations3$ !== void 0 && (_errors$annotations3$2 = _errors$annotations3$.value) !== null && _errors$annotations3$2 !== void 0 && _errors$annotations3$2.message),
                error: (_errors$annotations4 = errors.annotations) === null || _errors$annotations4 === void 0 ? void 0 : (_errors$annotations4$ = _errors$annotations4[index]) === null || _errors$annotations4$ === void 0 ? void 0 : (_errors$annotations4$2 = _errors$annotations4$.value) === null || _errors$annotations4$2 === void 0 ? void 0 : _errors$annotations4$2.message,
                children: (0,jsx_runtime.jsx)(ValueInputComponent, Object.assign({
                  "data-testid": `annotation-value-${index}`,
                  className: (0,emotion_css_esm.cx)(styles.annotationValueInput, {
                    [styles.textarea]: !isUrl
                  })
                }, register(`annotations[${index}].value`), {
                  placeholder: isUrl ? 'https://' : `Text`,
                  defaultValue: field.value
                }))
              }), (0,jsx_runtime.jsx)(src.Button, {
                type: "button",
                className: styles.flexRowItemMargin,
                "aria-label": "delete annotation",
                icon: "trash-alt",
                variant: "secondary",
                onClick: () => remove(index)
              })]
            }, field.id);
          }), (0,jsx_runtime.jsx)(src.Button, {
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
  annotationValueInput: emotion_css_esm.css`
    width: 426px;
  `,
  textarea: emotion_css_esm.css`
    height: 76px;
  `,
  addAnnotationsButton: emotion_css_esm.css`
    flex-grow: 0;
    align-self: flex-start;
    margin-left: 148px;
  `,
  flexColumn: emotion_css_esm.css`
    display: flex;
    flex-direction: column;
  `,
  field: emotion_css_esm.css`
    margin-bottom: ${theme.spacing.xs};
  `,
  flexRow: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `,
  flexRowItemMargin: emotion_css_esm.css`
    margin-left: ${theme.spacing.xs};
  `
});

 const rule_editor_AnnotationsField = (AnnotationsField);

 }),

 "./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label, _InlineLabel;









const LabelsField = _ref => {
  let {
    className
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  const {
    register,
    control,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__ .Gc)();
  const labels = watch('labels');
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(className, styles.wrapper),
    children: [_Label || (_Label = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
      children: "Custom Labels"
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldArray, {
      control: control,
      name: "labels",
      children: _ref2 => {
        let {
          fields,
          append,
          remove
        } = _ref2;
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: styles.flexRow,
            children: [_InlineLabel || (_InlineLabel = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
              width: 18,
              children: "Labels"
            })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: styles.flexColumn,
              children: [fields.map((field, index) => {
                var _errors$labels, _errors$labels$index, _errors$labels$index$, _errors$labels2, _errors$labels2$index, _errors$labels2$index2, _labels$index, _errors$labels3, _errors$labels3$index, _errors$labels3$index2, _errors$labels4, _errors$labels4$index, _errors$labels4$index2, _labels$index2;

                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.flexRow, styles.centerAlignRow),
                    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      className: styles.labelInput,
                      invalid: !!((_errors$labels = errors.labels) !== null && _errors$labels !== void 0 && (_errors$labels$index = _errors$labels[index]) !== null && _errors$labels$index !== void 0 && (_errors$labels$index$ = _errors$labels$index.key) !== null && _errors$labels$index$ !== void 0 && _errors$labels$index$.message),
                      error: (_errors$labels2 = errors.labels) === null || _errors$labels2 === void 0 ? void 0 : (_errors$labels2$index = _errors$labels2[index]) === null || _errors$labels2$index === void 0 ? void 0 : (_errors$labels2$index2 = _errors$labels2$index.key) === null || _errors$labels2$index2 === void 0 ? void 0 : _errors$labels2$index2.message,
                      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`labels[${index}].key`, {
                        required: {
                          value: !!((_labels$index = labels[index]) !== null && _labels$index !== void 0 && _labels$index.value),
                          message: 'Required.'
                        }
                      }), {
                        placeholder: "key",
                        "data-testid": `label-key-${index}`,
                        defaultValue: field.key
                      }))
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
                      className: styles.equalSign,
                      children: "="
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      className: styles.labelInput,
                      invalid: !!((_errors$labels3 = errors.labels) !== null && _errors$labels3 !== void 0 && (_errors$labels3$index = _errors$labels3[index]) !== null && _errors$labels3$index !== void 0 && (_errors$labels3$index2 = _errors$labels3$index.value) !== null && _errors$labels3$index2 !== void 0 && _errors$labels3$index2.message),
                      error: (_errors$labels4 = errors.labels) === null || _errors$labels4 === void 0 ? void 0 : (_errors$labels4$index = _errors$labels4[index]) === null || _errors$labels4$index === void 0 ? void 0 : (_errors$labels4$index2 = _errors$labels4$index.value) === null || _errors$labels4$index2 === void 0 ? void 0 : _errors$labels4$index2.message,
                      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`labels[${index}].value`, {
                        required: {
                          value: !!((_labels$index2 = labels[index]) !== null && _labels$index2 !== void 0 && _labels$index2.key),
                          message: 'Required.'
                        }
                      }), {
                        placeholder: "value",
                        "data-testid": `label-value-${index}`,
                        defaultValue: field.value
                      }))
                    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
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
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
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

 const __WEBPACK_DEFAULT_EXPORT__ = (LabelsField);

 }),

 "./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "P": () => ( SelectWithAdd)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const SelectWithAdd = _ref => {
  let {
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
  } = _ref;
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
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
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
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
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

 }),

 "./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "S": () => ( useAlertQueriesStatus)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");


function useAlertQueriesStatus(queries) {
  const allDataSourcesAvailable = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => queries.every(query => Boolean((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid))), [queries]);
  return {
    allDataSourcesAvailable
  };
}

 }),

 "./public/app/features/alerting/unified/hooks/useFolder.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "W": () => ( useFolder)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
 var _utils_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
 var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useFolder(uid) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const folderRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ ._)(state => state.folders);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (uid) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__ .sw)(uid));
    }
  }, [dispatch, uid]);

  if (uid) {
    const request = folderRequests[uid] || _utils_redux__WEBPACK_IMPORTED_MODULE_3__ .oq;
    return {
      folder: request.result,
      loading: request.loading
    };
  }

  return {
    loading: false
  };
}

 }),

 "./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "M": () => ( useIsRuleEditable)
 });
 var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/services/context_srv.ts");
 var _utils_access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
 var _utils_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
 var _useFolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
 var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useIsRuleEditable(rulesSourceName, rule) {
  var _dataSources$rulesSou, _dataSources$rulesSou2, _dataSources$rulesSou3;

  const dataSources = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ ._)(state => state.dataSources);
  const folderUID = rule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__ .Pc)(rule) ? rule.grafana_alert.namespace_uid : undefined;
  const rulePermission = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_1__ .Bz)(rulesSourceName);
  const hasEditPermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__ .Vt.hasAccess(rulePermission.update, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__ .Vt.isEditor);
  const hasRemovePermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__ .Vt.hasAccess(rulePermission.delete, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__ .Vt.isEditor);
  const {
    folder,
    loading
  } = (0,_useFolder__WEBPACK_IMPORTED_MODULE_3__ .W)(folderUID);

  if (!rule) {
    return {
      isEditable: false,
      isRemovable: false,
      loading: false
    };
  } 


  if ((0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__ .Pc)(rule)) {
    if (!folderUID) {
      throw new Error(`Rule ${rule.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);
    }

    return {
      isEditable: hasEditPermission && (folder === null || folder === void 0 ? void 0 : folder.canSave),
      isRemovable: hasRemovePermission && (folder === null || folder === void 0 ? void 0 : folder.canSave),
      loading
    };
  } 


  const isRulerAvailable = Boolean((_dataSources$rulesSou = dataSources[rulesSourceName]) === null || _dataSources$rulesSou === void 0 ? void 0 : (_dataSources$rulesSou2 = _dataSources$rulesSou.result) === null || _dataSources$rulesSou2 === void 0 ? void 0 : _dataSources$rulesSou2.rulerConfig);
  return {
    isEditable: hasEditPermission && isRulerAvailable,
    isRemovable: hasRemovePermission && isRulerAvailable,
    loading: (_dataSources$rulesSou3 = dataSources[rulesSourceName]) === null || _dataSources$rulesSou3 === void 0 ? void 0 : _dataSources$rulesSou3.loading
  };
}

 }),

 "./public/app/features/alerting/unified/state/AlertingQueryRunner.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "v": () => ( AlertingQueryRunner)
});

var ReplaySubject = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
var catchError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
var share = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
var v4 = __webpack_require__("./.yarn/cache/uuid-npm-8.3.2-eca0baba53-5575a8a75c.zip/node_modules/uuid/dist/esm-browser/v4.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
var guards = __webpack_require__("./public/app/features/expressions/guards.ts");
var canceler = __webpack_require__("./public/app/features/query/state/processing/canceler.ts");
var revision = __webpack_require__("./public/app/features/query/state/processing/revision.ts");
var runRequest = __webpack_require__("./public/app/features/query/state/runRequest.ts");
var types = __webpack_require__("./public/app/features/expressions/types.ts");
;

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
    case types.Us.classic:
      return getReferencedIdsForClassicCondition(model);

    case types.Us.math:
      return getReferencedIdsForMath(model, queries);

    case types.Us.resample:
    case types.Us.reduce:
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
  return queries 
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
;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class AlertingQueryRunner {
  constructor() {
    let backendSrv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,backend_srv.i)();
    let dataSourceSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,grafana_runtime_src.getDataSourceSrv)();
    this.backendSrv = backendSrv;
    this.dataSourceSrv = dataSourceSrv;

    _defineProperty(this, "subject", void 0);

    _defineProperty(this, "subscription", void 0);

    _defineProperty(this, "lastResult", void 0);

    this.backendSrv = backendSrv;
    this.dataSourceSrv = dataSourceSrv;
    this.subject = new ReplaySubject.t(1);
    this.lastResult = {};
  }

  get() {
    return this.subject.asObservable();
  }

  async run(queries) {
    if (queries.length === 0) {
      const empty = initialState(queries, src.LoadingState.Done);
      return this.subject.next(empty);
    } 


    for (const query of queries) {
      if (!(0,guards.j)(query.model)) {
        const ds = await this.dataSourceSrv.get(query.datasourceUid);

        if (ds.filterQuery && !ds.filterQuery(query.model)) {
          const empty = initialState(queries, src.LoadingState.Done);
          return this.subject.next(empty);
        }
      }
    }

    this.subscription = AlertingQueryRunner_runRequest(this.backendSrv, queries).subscribe({
      next: dataPerQuery => {
        const nextResult = applyChange(dataPerQuery, (refId, data) => {
          const previous = this.lastResult[refId];
          const preProcessed = (0,runRequest.zR)(data, previous);
          return (0,revision.C)(preProcessed, previous);
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
      if (data.state === src.LoadingState.Loading) {
        requestIsRunning = true;
      }

      return Object.assign({}, data, {
        state: src.LoadingState.Done
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

const AlertingQueryRunner_runRequest = (backendSrv, queries) => {
  const initial = initialState(queries, src.LoadingState.Loading);
  const request = {
    data: {
      data: queries
    },
    url: '/api/v1/eval',
    method: 'POST',
    requestId: (0,v4.Z)()
  };
  return (0,src.withLoadingIndicator)({
    whileLoading: initial,
    source: backendSrv.fetch(request).pipe(mapToPanelData(initial), (0,catchError.K)(error => (0,of.of)(mapErrorToPanelData(initial, error))), (0,canceler.V)(backendSrv, request.requestId), (0,share.B)())
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
  if ((0,guards.j)(query.model)) {
    const relative = getTimeRangeForExpression(query.model, queries);
    return src.rangeUtil.relativeToTimeRange(relative);
  }

  if (!query.relativeTimeRange) {
    console.warn(`Query with refId: ${query.refId} did not have any relative time range, using default.`);
    return (0,src.getDefaultTimeRange)();
  }

  return src.rangeUtil.relativeToTimeRange(query.relativeTimeRange);
};

const mapToPanelData = dataByQuery => {
  return (0,map.U)(response => {
    const {
      data
    } = response;
    const results = {};

    for (const [refId, result] of Object.entries(data.results)) {
      results[refId] = {
        timeRange: dataByQuery[refId].timeRange,
        state: src.LoadingState.Done,
        series: result.frames.map(src.dataFrameFromJSON)
      };
    }

    return results;
  });
};

const mapErrorToPanelData = (lastResult, error) => {
  const queryError = (0,grafana_runtime_src.toDataQueryError)(error);
  return applyChange(lastResult, (refId, data) => {
    return Object.assign({}, data, {
      state: src.LoadingState.Error,
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

 }),

 "./public/app/features/alerting/unified/utils/accessControlHooks.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "B": () => ( useRulesAccess)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");


function useRulesAccess() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_access_control__WEBPACK_IMPORTED_MODULE_1__ .Rv)(), []);
}

 }),

 "./public/app/features/expressions/guards.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "j": () => ( isExpressionQuery)
 });
 var _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
 var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/expressions/types.ts");


const isExpressionQuery = dataQuery => {
  if (!dataQuery) {
    return false;
  }

  if ((0,_grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_0__ .Pr)(dataQuery.datasource)) {
    return true;
  }

  const expression = dataQuery;

  if (typeof expression.type !== 'string') {
    return false;
  }

  return Object.values(_types__WEBPACK_IMPORTED_MODULE_1__ .Us).includes(expression.type);
};

 })

}]);