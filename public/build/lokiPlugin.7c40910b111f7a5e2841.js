"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[1598],{

 "./public/app/plugins/datasource/loki/components/LokiOptionFields.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "JX": () => ( LokiOptionFields),
   "TQ": () => ( DEFAULT_RESOLUTION),
   "Wz": () => ( preprocessMaxLines),
   "oZ": () => ( RESOLUTION_OPTIONS),
   "uG": () => ( queryTypeOptions)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
 var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InlineFormLabel;

const _excluded = ["instant", "range"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const queryTypeOptions = [{
  value: _types__WEBPACK_IMPORTED_MODULE_5__ .EM.Range,
  label: 'Range',
  description: 'Run query over a range of time.'
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_5__ .EM.Instant,
  label: 'Instant',
  description: 'Run query against a single point in time. For this query, the "To" time is used.'
}];

if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.featureToggles.lokiLive) {
  queryTypeOptions.push({
    value: _types__WEBPACK_IMPORTED_MODULE_5__ .EM.Stream,
    label: 'Stream',
    description: 'Run a query and keep sending results on an interval'
  });
}

const DEFAULT_RESOLUTION = {
  value: 1,
  label: '1/1'
};
const RESOLUTION_OPTIONS = [DEFAULT_RESOLUTION].concat((0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)([2, 3, 4, 5, 10], value => ({
  value,
  label: '1/' + value
})));
function LokiOptionFields(props) {
  var _props$query, _query$queryType;

  const {
    lineLimitValue,
    resolution,
    onRunQuery,
    runOnBlur,
    onChange
  } = props;
  const query = (_props$query = props.query) !== null && _props$query !== void 0 ? _props$query : {};
  let queryType = (_query$queryType = query.queryType) !== null && _query$queryType !== void 0 ? _query$queryType : query.instant ? _types__WEBPACK_IMPORTED_MODULE_5__ .EM.Instant : _types__WEBPACK_IMPORTED_MODULE_5__ .EM.Range;

  function onChangeQueryLimit(value) {
    const nextQuery = Object.assign({}, query, {
      maxLines: preprocessMaxLines(value)
    });
    onChange(nextQuery);
  }

  function onQueryTypeChange(queryType) {
    const rest = _objectWithoutPropertiesLoose(query, _excluded);

    onChange(Object.assign({}, rest, {
      queryType
    }));
  }

  function onMaxLinesChange(e) {
    if (query.maxLines !== preprocessMaxLines(e.currentTarget.value)) {
      onChangeQueryLimit(e.currentTarget.value);
    }
  }

  function onReturnKeyDown(e) {
    if (e.key === 'Enter') {
      onRunQuery();
    }
  }

  function onResolutionChange(option) {
    const nextQuery = Object.assign({}, query, {
      resolution: option.value
    });
    onChange(nextQuery);
  }

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    "aria-label": "Loki extra field",
    className: "gf-form-inline",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      "data-testid": "queryTypeField",
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('gf-form explore-input-margin', _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
            flex-wrap: nowrap;
          `),
      "aria-label": "Query type field",
      children: [_InlineFormLabel || (_InlineFormLabel = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFormLabel, {
        width: "auto",
        children: "Query type"
      })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.RadioButtonGroup, {
        options: queryTypeOptions,
        value: queryType,
        onChange: type => {
          onQueryTypeChange(type);

          if (runOnBlur) {
            onRunQuery();
          }
        }
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      "data-testid": "lineLimitField",
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('gf-form', _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
            flex-wrap: nowrap;
          `),
      "aria-label": "Line limit field",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Line limit",
        tooltip: 'Upper limit for number of log lines returned by query.',
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          className: "width-4",
          placeholder: "auto",
          type: "number",
          min: 0,
          onChange: onMaxLinesChange,
          onKeyDown: onReturnKeyDown,
          value: lineLimitValue,
          onBlur: () => {
            if (runOnBlur) {
              onRunQuery();
            }
          }
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Resolution",
        tooltip: 'Resolution 1/1 sets step parameter of Loki metrics range queries such that each pixel corresponds to one data point. For better performance, lower resolutions can be picked. 1/2 only retrieves a data point for every other pixel, and 1/10 retrieves one data point per 10 pixels.',
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
          isSearchable: false,
          onChange: onResolutionChange,
          options: RESOLUTION_OPTIONS,
          value: resolution,
          "aria-label": "Select resolution"
        })
      })]
    })]
  });
}
 var __WEBPACK_DEFAULT_EXPORT__ = (( null && (memo(LokiOptionFields))));
function preprocessMaxLines(value) {
  if (value.length === 0) {
    return NaN;
  } else if (value.length > 0 && (isNaN(+value) || +value < 0)) {
    return 0;
  } else {
    return +value;
  }
}

 }),

 "./public/app/plugins/datasource/loki/module.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "plugin": () => ( module_plugin)
});

var src = __webpack_require__("./packages/grafana-data/src/index.ts");
;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class LokiAnnotationsQueryCtrl {
  constructor($scope) {
    this.annotation = $scope.ctrl.annotation;
    this.annotation.target = this.annotation.target || {};
    this.onQueryChange = this.onQueryChange.bind(this);
  }

  onQueryChange(query) {
    this.annotation.expr = query.expr;
    this.annotation.maxLines = query.maxLines;
    this.annotation.instant = query.instant;
  }

}
LokiAnnotationsQueryCtrl.$inject = ["$scope"];

_defineProperty(LokiAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _h, _div, _div2, _div3, _div4, _div5, _div6, _div7, _div8;

function LokiCheatSheet_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const DEFAULT_EXAMPLES = ['{job="default/prometheus"}'];
const PREFERRED_LABELS = ['job', 'app', 'k8s_app'];
const EXAMPLES_LIMIT = 5;
const LOGQL_EXAMPLES = [{
  title: 'Log pipeline',
  expression: '{job="mysql"} |= "metrics" | logfmt | duration > 10s',
  label: 'This query targets the MySQL job, filters out logs that don’t contain the word "metrics" and parses each log line to extract more labels and filters with them.'
}, {
  title: 'Count over time',
  expression: 'count_over_time({job="mysql"}[5m])',
  label: 'This query counts all the log lines within the last five minutes for the MySQL job.'
}, {
  title: 'Rate',
  expression: 'rate(({job="mysql"} |= "error" != "timeout")[10s])',
  label: 'This query gets the per-second rate of all non-timeout errors within the last ten seconds for the MySQL job.'
}, {
  title: 'Aggregate, count, and group',
  expression: 'sum(count_over_time({job="mysql"}[5m])) by (level)',
  label: 'Get the count of logs during the last five minutes, grouping by level.'
}];
class LokiCheatSheet extends react.PureComponent {
  constructor() {
    super(...arguments);

    LokiCheatSheet_defineProperty(this, "state", {
      userExamples: []
    });

    LokiCheatSheet_defineProperty(this, "checkUserLabels", async () => {
      var _this$props$datasourc;

      const provider = (_this$props$datasourc = this.props.datasource) === null || _this$props$datasourc === void 0 ? void 0 : _this$props$datasourc.languageProvider;

      if (provider.started) {
        const labels = provider.getLabelKeys() || [];
        const preferredLabel = PREFERRED_LABELS.find(l => labels.includes(l));

        if (preferredLabel) {
          const values = await provider.getLabelValues(preferredLabel);
          const userExamples = (0,lodash.shuffle)(values).slice(0, EXAMPLES_LIMIT).map(value => `{${preferredLabel}="${value}"}`);
          this.setState({
            userExamples
          });
        }
      } else {
        this.scheduleUserLabelChecking();
      }
    });
  }

  componentDidMount() {
    this.scheduleUserLabelChecking();
  }

  componentWillUnmount() {
    clearTimeout(this.userLabelTimer);
  }

  scheduleUserLabelChecking() {
    this.userLabelTimer = setTimeout(this.checkUserLabels, 1000);
  }

  renderExpression(expr) {
    const {
      onClickExample
    } = this.props;
    return (0,jsx_runtime.jsx)("div", {
      className: "cheat-sheet-item__example",
      onClick: e => onClickExample({
        refId: 'A',
        expr
      }),
      children: (0,jsx_runtime.jsx)("code", {
        children: expr
      })
    }, expr);
  }

  render() {
    const {
      userExamples
    } = this.state;
    const hasUserExamples = userExamples.length > 0;
    return (0,jsx_runtime.jsxs)("div", {
      children: [_h || (_h = (0,jsx_runtime.jsx)("h2", {
        children: "Loki Cheat Sheet"
      })), (0,jsx_runtime.jsxs)("div", {
        className: "cheat-sheet-item",
        children: [_div || (_div = (0,jsx_runtime.jsx)("div", {
          className: "cheat-sheet-item__title",
          children: "See your logs"
        })), _div2 || (_div2 = (0,jsx_runtime.jsx)("div", {
          className: "cheat-sheet-item__label",
          children: "Start by selecting a log stream from the Log browser, or alternatively you can write a stream selector into the query field."
        })), hasUserExamples ? (0,jsx_runtime.jsxs)("div", {
          children: [_div3 || (_div3 = (0,jsx_runtime.jsx)("div", {
            className: "cheat-sheet-item__label",
            children: "Here are some example streams from your logs:"
          })), userExamples.map(example => this.renderExpression(example))]
        }) : (0,jsx_runtime.jsxs)("div", {
          children: [_div4 || (_div4 = (0,jsx_runtime.jsx)("div", {
            className: "cheat-sheet-item__label",
            children: "Here is an example of a log stream:"
          })), this.renderExpression(DEFAULT_EXAMPLES[0])]
        })]
      }), (0,jsx_runtime.jsxs)("div", {
        className: "cheat-sheet-item",
        children: [_div5 || (_div5 = (0,jsx_runtime.jsx)("div", {
          className: "cheat-sheet-item__title",
          children: "Combine stream selectors"
        })), this.renderExpression('{app="cassandra",namespace="prod"}'), _div6 || (_div6 = (0,jsx_runtime.jsx)("div", {
          className: "cheat-sheet-item__label",
          children: "Returns all log lines from streams that have both labels."
        }))]
      }), (0,jsx_runtime.jsxs)("div", {
        className: "cheat-sheet-item",
        children: [_div7 || (_div7 = (0,jsx_runtime.jsx)("div", {
          className: "cheat-sheet-item__title",
          children: "Filtering for search terms."
        })), this.renderExpression('{app="cassandra"} |~ "(duration|latency)s*(=|is|of)s*[d.]+"'), this.renderExpression('{app="cassandra"} |= "exact match"'), this.renderExpression('{app="cassandra"} != "do not match"'), _div8 || (_div8 = (0,jsx_runtime.jsxs)("div", {
          className: "cheat-sheet-item__label",
          children: [(0,jsx_runtime.jsx)("a", {
            href: "https://grafana.com/docs/loki/latest/logql/#log-pipeline",
            target: "logql",
            children: "LogQL"
          }), ' ', "supports exact and regular expression filters."]
        }))]
      }), LOGQL_EXAMPLES.map(item => (0,jsx_runtime.jsxs)("div", {
        className: "cheat-sheet-item",
        children: [(0,jsx_runtime.jsx)("div", {
          className: "cheat-sheet-item__title",
          children: item.title
        }), this.renderExpression(item.expression), (0,jsx_runtime.jsx)("div", {
          className: "cheat-sheet-item__label",
          children: item.label
        })]
      }, item.expression))]
    });
  }

}
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var experimental = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var QueryEditorModeToggle = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/QueryEditorModeToggle.tsx");
var QueryHeaderSwitch = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/QueryHeaderSwitch.tsx");
var types = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/types.ts");
var LokiAndPromQueryModellerBase = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/LokiAndPromQueryModellerBase.ts");
var operationUtils = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/operationUtils.ts");
var syntax = __webpack_require__("./public/app/plugins/datasource/loki/syntax.ts");
;
let LokiVisualQueryOperationCategory;

(function (LokiVisualQueryOperationCategory) {
  LokiVisualQueryOperationCategory["Aggregations"] = "Aggregations";
  LokiVisualQueryOperationCategory["RangeFunctions"] = "Range functions";
  LokiVisualQueryOperationCategory["Functions"] = "Functions";
  LokiVisualQueryOperationCategory["Formats"] = "Formats";
  LokiVisualQueryOperationCategory["LineFilters"] = "Line filters";
  LokiVisualQueryOperationCategory["LabelFilters"] = "Label filters";
  LokiVisualQueryOperationCategory["BinaryOps"] = "Binary operations";
})(LokiVisualQueryOperationCategory || (LokiVisualQueryOperationCategory = {}));

let LokiOperationId;

(function (LokiOperationId) {
  LokiOperationId["Json"] = "json";
  LokiOperationId["Logfmt"] = "logfmt";
  LokiOperationId["Regexp"] = "regexp";
  LokiOperationId["Pattern"] = "pattern";
  LokiOperationId["Unpack"] = "unpack";
  LokiOperationId["LineFormat"] = "line_format";
  LokiOperationId["LabelFormat"] = "label_format";
  LokiOperationId["Rate"] = "rate";
  LokiOperationId["CountOverTime"] = "count_over_time";
  LokiOperationId["SumOverTime"] = "sum_over_time";
  LokiOperationId["AvgOverTime"] = "avg_over_time";
  LokiOperationId["MaxOverTime"] = "max_over_time";
  LokiOperationId["MinOverTime"] = "min_over_time";
  LokiOperationId["FirstOverTime"] = "first_over_time";
  LokiOperationId["LastOverTime"] = "last_over_time";
  LokiOperationId["StdvarOverTime"] = "stdvar_over_time";
  LokiOperationId["StddevOverTime"] = "stddev_over_time";
  LokiOperationId["QuantileOverTime"] = "quantile_over_time";
  LokiOperationId["BytesRate"] = "bytes_rate";
  LokiOperationId["BytesOverTime"] = "bytes_over_time";
  LokiOperationId["AbsentOverTime"] = "absent_over_time";
  LokiOperationId["Sum"] = "sum";
  LokiOperationId["Avg"] = "avg";
  LokiOperationId["Min"] = "min";
  LokiOperationId["Max"] = "max";
  LokiOperationId["Stddev"] = "stddev";
  LokiOperationId["Stdvar"] = "stdvar";
  LokiOperationId["Count"] = "count";
  LokiOperationId["TopK"] = "topk";
  LokiOperationId["BottomK"] = "bottomk";
  LokiOperationId["LineContains"] = "__line_contains";
  LokiOperationId["LineContainsNot"] = "__line_contains_not";
  LokiOperationId["LineMatchesRegex"] = "__line_matches_regex";
  LokiOperationId["LineMatchesRegexNot"] = "__line_matches_regex_not";
  LokiOperationId["LabelFilter"] = "__label_filter";
  LokiOperationId["LabelFilterNoErrors"] = "__label_filter_no_errors";
  LokiOperationId["Unwrap"] = "unwrap";
  LokiOperationId["Addition"] = "__addition";
  LokiOperationId["Subtraction"] = "__subtraction";
  LokiOperationId["MultiplyBy"] = "__multiply_by";
  LokiOperationId["DivideBy"] = "__divide_by";
  LokiOperationId["Modulo"] = "__modulo";
  LokiOperationId["Exponent"] = "__exponent";
  LokiOperationId["NestedQuery"] = "__nested_query";
  LokiOperationId["EqualTo"] = "__equal_to";
  LokiOperationId["NotEqualTo"] = "__not_equal_to";
  LokiOperationId["GreaterThan"] = "__greater_than";
  LokiOperationId["LessThan"] = "__less_than";
  LokiOperationId["GreaterOrEqual"] = "__greater_or_equal";
  LokiOperationId["LessOrEqual"] = "__less_or_equal";
})(LokiOperationId || (LokiOperationId = {}));

let LokiOperationOrder;

(function (LokiOperationOrder) {
  LokiOperationOrder[LokiOperationOrder["LineFilters"] = 1] = "LineFilters";
  LokiOperationOrder[LokiOperationOrder["LineFormats"] = 2] = "LineFormats";
  LokiOperationOrder[LokiOperationOrder["LabelFilters"] = 3] = "LabelFilters";
  LokiOperationOrder[LokiOperationOrder["Unwrap"] = 4] = "Unwrap";
  LokiOperationOrder[LokiOperationOrder["NoErrors"] = 5] = "NoErrors";
  LokiOperationOrder[LokiOperationOrder["RangeVectorFunction"] = 5] = "RangeVectorFunction";
  LokiOperationOrder[LokiOperationOrder["Last"] = 6] = "Last";
})(LokiOperationOrder || (LokiOperationOrder = {}));
;


const binaryScalarDefs = [{
  id: LokiOperationId.Addition,
  name: 'Add scalar',
  sign: '+'
}, {
  id: LokiOperationId.Subtraction,
  name: 'Subtract scalar',
  sign: '-'
}, {
  id: LokiOperationId.MultiplyBy,
  name: 'Multiply by scalar',
  sign: '*'
}, {
  id: LokiOperationId.DivideBy,
  name: 'Divide by scalar',
  sign: '/'
}, {
  id: LokiOperationId.Modulo,
  name: 'Modulo by scalar',
  sign: '%'
}, {
  id: LokiOperationId.Exponent,
  name: 'Exponent',
  sign: '^'
}, {
  id: LokiOperationId.EqualTo,
  name: 'Equal to',
  sign: '==',
  comparison: true
}, {
  id: LokiOperationId.NotEqualTo,
  name: 'Not equal to',
  sign: '!=',
  comparison: true
}, {
  id: LokiOperationId.GreaterThan,
  name: 'Greater than',
  sign: '>',
  comparison: true
}, {
  id: LokiOperationId.LessThan,
  name: 'Less than',
  sign: '<',
  comparison: true
}, {
  id: LokiOperationId.GreaterOrEqual,
  name: 'Greater or equal to',
  sign: '>=',
  comparison: true
}, {
  id: LokiOperationId.LessOrEqual,
  name: 'Less or equal to',
  sign: '<=',
  comparison: true
}]; 

const binaryScalarOperations = binaryScalarDefs.map(opDef => {
  const params = [{
    name: 'Value',
    type: 'number'
  }];
  const defaultParams = [2];

  if (opDef.comparison) {
    params.unshift({
      name: 'Bool',
      type: 'boolean',
      description: 'If checked comparison will return 0 or 1 for the value rather than filtering.'
    });
    defaultParams.unshift(false);
  }

  return {
    id: opDef.id,
    name: opDef.name,
    params,
    defaultParams,
    alternativesKey: 'binary scalar operations',
    category: LokiVisualQueryOperationCategory.BinaryOps,
    renderer: getSimpleBinaryRenderer(opDef.sign),
    addOperationHandler: operationUtils.PP
  };
});

function getSimpleBinaryRenderer(operator) {
  return function binaryRenderer(model, def, innerExpr) {
    let param = model.params[0];
    let bool = '';

    if (model.params.length === 2) {
      param = model.params[1];
      bool = model.params[0] ? ' bool' : '';
    }

    return `${innerExpr} ${operator}${bool} ${param}`;
  };
}
;




function getOperationDefinitions() {
  const aggregations = [LokiOperationId.Sum, LokiOperationId.Min, LokiOperationId.Max, LokiOperationId.Avg, LokiOperationId.Stddev, LokiOperationId.Stdvar, LokiOperationId.Count].flatMap(opId => (0,operationUtils.IT)(opId, {
    addOperationHandler: addLokiOperation,
    orderRank: LokiOperationOrder.Last
  }));
  const aggregationsWithParam = [LokiOperationId.TopK, LokiOperationId.BottomK].flatMap(opId => {
    return (0,operationUtils.Z3)(opId, {
      params: [{
        name: 'K-value',
        type: 'number'
      }],
      defaultParams: [5]
    }, {
      addOperationHandler: addLokiOperation,
      orderRank: LokiOperationOrder.Last
    });
  });
  const list = [createRangeOperation(LokiOperationId.Rate), createRangeOperation(LokiOperationId.CountOverTime), createRangeOperation(LokiOperationId.SumOverTime), createRangeOperation(LokiOperationId.BytesRate), createRangeOperation(LokiOperationId.BytesOverTime), createRangeOperation(LokiOperationId.AbsentOverTime), createRangeOperation(LokiOperationId.AvgOverTime), createRangeOperation(LokiOperationId.MaxOverTime), createRangeOperation(LokiOperationId.MinOverTime), createRangeOperation(LokiOperationId.FirstOverTime), createRangeOperation(LokiOperationId.LastOverTime), createRangeOperation(LokiOperationId.StdvarOverTime), createRangeOperation(LokiOperationId.StddevOverTime), createRangeOperation(LokiOperationId.QuantileOverTime), ...aggregations, ...aggregationsWithParam, {
    id: LokiOperationId.Json,
    name: 'Json',
    params: [],
    defaultParams: [],
    alternativesKey: 'format',
    category: LokiVisualQueryOperationCategory.Formats,
    orderRank: LokiOperationOrder.LineFormats,
    renderer: pipelineRenderer,
    addOperationHandler: addLokiOperation
  }, {
    id: LokiOperationId.Logfmt,
    name: 'Logfmt',
    params: [],
    defaultParams: [],
    alternativesKey: 'format',
    category: LokiVisualQueryOperationCategory.Formats,
    orderRank: LokiOperationOrder.LineFormats,
    renderer: pipelineRenderer,
    addOperationHandler: addLokiOperation,
    explainHandler: () => `This will extract all keys and values from a [logfmt](https://grafana.com/docs/loki/latest/logql/log_queries/#logfmt) formatted log line as labels. The extracted labels can be used in label filter expressions and used as values for a range aggregation via the unwrap operation.`
  }, {
    id: LokiOperationId.Regexp,
    name: 'Regexp',
    params: [{
      name: 'String',
      type: 'string',
      hideName: true,
      placeholder: '<re>',
      description: 'The regexp expression that matches the structure of a log line.',
      minWidth: 20
    }],
    defaultParams: [''],
    alternativesKey: 'format',
    category: LokiVisualQueryOperationCategory.Formats,
    orderRank: LokiOperationOrder.LineFormats,
    renderer: (model, def, innerExpr) => `${innerExpr} | regexp \`${model.params[0]}\``,
    addOperationHandler: addLokiOperation,
    explainHandler: () => `The [regexp parser](https://grafana.com/docs/loki/latest/logql/log_queries/#regular-expression) takes a single parameter | regexp "<re>" which is the regular expression using the Golang RE2 syntax. The regular expression must contain a least one named sub-match (e.g (?P<name>re)), each sub-match will extract a different label. The expression matches the structure of a log line. The extracted labels can be used in label filter expressions and used as values for a range aggregation via the unwrap operation.`
  }, {
    id: LokiOperationId.Pattern,
    name: 'Pattern',
    params: [{
      name: 'String',
      type: 'string',
      hideName: true,
      placeholder: '<pattern-expression>',
      description: 'The expression that matches the structure of a log line.',
      minWidth: 20
    }],
    defaultParams: [''],
    alternativesKey: 'format',
    category: LokiVisualQueryOperationCategory.Formats,
    orderRank: LokiOperationOrder.LineFormats,
    renderer: (model, def, innerExpr) => `${innerExpr} | pattern \`${model.params[0]}\``,
    addOperationHandler: addLokiOperation,
    explainHandler: () => `The [pattern parser](https://grafana.com/docs/loki/latest/logql/log_queries/#pattern) allows the explicit extraction of fields from log lines by defining a pattern expression (| pattern \`<pattern-expression>\`). The expression matches the structure of a log line. The extracted labels can be used in label filter expressions and used as values for a range aggregation via the unwrap operation.`
  }, {
    id: LokiOperationId.Unpack,
    name: 'Unpack',
    params: [],
    defaultParams: [],
    alternativesKey: 'format',
    category: LokiVisualQueryOperationCategory.Formats,
    orderRank: LokiOperationOrder.LineFormats,
    renderer: pipelineRenderer,
    addOperationHandler: addLokiOperation,
    explainHandler: () => `This will extract all keys and values from a JSON log line, [unpacking](https://grafana.com/docs/loki/latest/logql/log_queries/#unpack) all embedded labels in the pack stage. The extracted labels can be used in label filter expressions and used as values for a range aggregation via the unwrap operation.`
  }, {
    id: LokiOperationId.LineFormat,
    name: 'Line format',
    params: [{
      name: 'String',
      type: 'string',
      hideName: true,
      placeholder: '{{.status_code}}',
      description: 'A line template that can refer to stream labels and extracted labels.',
      minWidth: 20
    }],
    defaultParams: [''],
    alternativesKey: 'format',
    category: LokiVisualQueryOperationCategory.Formats,
    orderRank: LokiOperationOrder.LineFormats,
    renderer: (model, def, innerExpr) => `${innerExpr} | line_format \`${model.params[0]}\``,
    addOperationHandler: addLokiOperation,
    explainHandler: () => `This will replace log line using a specified template. The template can refer to stream labels and extracted labels.

        Example: \`{{.status_code}} - {{.message}}\`

        [Read the docs](https://grafana.com/docs/loki/latest/logql/log_queries/#line-format-expression) for more.
        `
  }, {
    id: LokiOperationId.LabelFormat,
    name: 'Label format',
    params: [{
      name: 'Label',
      type: 'string'
    }, {
      name: 'Rename',
      type: 'string'
    }],
    defaultParams: ['', ''],
    alternativesKey: 'format',
    category: LokiVisualQueryOperationCategory.Formats,
    orderRank: LokiOperationOrder.LineFormats,
    renderer: (model, def, innerExpr) => `${innerExpr} | label_format ${model.params[1]}=\`${model.params[0]}\``,
    addOperationHandler: addLokiOperation,
    explainHandler: () => `This will change name of label to desired new label. In the example below, label "error_level" will be renamed to "level".

        Example: error_level=\`level\`

        [Read the docs](https://grafana.com/docs/loki/latest/logql/log_queries/#labels-format-expression) for more.
        `
  }, {
    id: LokiOperationId.LineContains,
    name: 'Line contains',
    params: [{
      name: 'String',
      type: 'string',
      hideName: true,
      placeholder: 'Text to find',
      description: 'Find log lines that contains this text',
      minWidth: 20
    }],
    defaultParams: [''],
    alternativesKey: 'line filter',
    category: LokiVisualQueryOperationCategory.LineFilters,
    orderRank: LokiOperationOrder.LineFilters,
    renderer: getLineFilterRenderer('|='),
    addOperationHandler: addLokiOperation,
    explainHandler: op => `Return log lines that contain string \`${op.params[0]}\`.`
  }, {
    id: LokiOperationId.LineContainsNot,
    name: 'Line does not contain',
    params: [{
      name: 'String',
      type: 'string',
      hideName: true,
      placeholder: 'Text to exclude',
      description: 'Find log lines that does not contain this text',
      minWidth: 26
    }],
    defaultParams: [''],
    alternativesKey: 'line filter',
    category: LokiVisualQueryOperationCategory.LineFilters,
    orderRank: LokiOperationOrder.LineFilters,
    renderer: getLineFilterRenderer('!='),
    addOperationHandler: addLokiOperation,
    explainHandler: op => `Return log lines that does not contain string \`${op.params[0]}\`.`
  }, {
    id: LokiOperationId.LineMatchesRegex,
    name: 'Line contains regex match',
    params: [{
      name: 'Regex',
      type: 'string',
      hideName: true,
      placeholder: 'Pattern to match',
      description: 'Find log lines that match this regex pattern',
      minWidth: 30
    }],
    defaultParams: [''],
    alternativesKey: 'line filter',
    category: LokiVisualQueryOperationCategory.LineFilters,
    orderRank: LokiOperationOrder.LineFilters,
    renderer: getLineFilterRenderer('|~'),
    addOperationHandler: addLokiOperation,
    explainHandler: op => `Return log lines that match regex \`${op.params[0]}\`.`
  }, {
    id: LokiOperationId.LineMatchesRegexNot,
    name: 'Line does not match regex',
    params: [{
      name: 'Regex',
      type: 'string',
      hideName: true,
      placeholder: 'Pattern to exclude',
      description: 'Find log lines that does not match this regex pattern',
      minWidth: 30
    }],
    defaultParams: [''],
    alternativesKey: 'line filter',
    category: LokiVisualQueryOperationCategory.LineFilters,
    orderRank: LokiOperationOrder.LineFilters,
    renderer: getLineFilterRenderer('!~'),
    addOperationHandler: addLokiOperation,
    explainHandler: op => `Return log lines that does not match regex \`${op.params[0]}\`.`
  }, {
    id: LokiOperationId.LabelFilter,
    name: 'Label filter expression',
    params: [{
      name: 'Label',
      type: 'string'
    }, {
      name: 'Operator',
      type: 'string',
      options: ['=', '!=', '>', '<', '>=', '<=']
    }, {
      name: 'Value',
      type: 'string'
    }],
    defaultParams: ['', '=', ''],
    category: LokiVisualQueryOperationCategory.LabelFilters,
    orderRank: LokiOperationOrder.LabelFilters,
    renderer: labelFilterRenderer,
    addOperationHandler: addLokiOperation,
    explainHandler: () => `Label expression filter allows filtering using original and extracted labels.`
  }, {
    id: LokiOperationId.LabelFilterNoErrors,
    name: 'No pipeline errors',
    params: [],
    defaultParams: [],
    category: LokiVisualQueryOperationCategory.LabelFilters,
    orderRank: LokiOperationOrder.NoErrors,
    renderer: (model, def, innerExpr) => `${innerExpr} | __error__=\`\``,
    addOperationHandler: addLokiOperation,
    explainHandler: () => `Filter out all formatting and parsing errors.`
  }, {
    id: LokiOperationId.Unwrap,
    name: 'Unwrap',
    params: [{
      name: 'Identifier',
      type: 'string',
      hideName: true,
      minWidth: 16,
      placeholder: 'Label key'
    }],
    defaultParams: [''],
    category: LokiVisualQueryOperationCategory.Formats,
    orderRank: LokiOperationOrder.Unwrap,
    renderer: (op, def, innerExpr) => `${innerExpr} | unwrap ${op.params[0]}`,
    addOperationHandler: addLokiOperation,
    explainHandler: op => {
      let label = String(op.params[0]).length > 0 ? op.params[0] : '<label>';
      return `Use the extracted label \`${label}\` as sample values instead of log lines for the subsequent range aggregation.`;
    }
  }, ...binaryScalarOperations, {
    id: LokiOperationId.NestedQuery,
    name: 'Binary operation with query',
    params: [],
    defaultParams: [],
    category: LokiVisualQueryOperationCategory.BinaryOps,
    renderer: (model, def, innerExpr) => innerExpr,
    addOperationHandler: addNestedQueryHandler
  }];
  return list;
}

function createRangeOperation(name) {
  const params = [getRangeVectorParamDef()];
  const defaultParams = ['$__interval'];
  let renderer = operationWithRangeVectorRenderer;

  if (name === LokiOperationId.QuantileOverTime) {
    defaultParams.push('0.95');
    params.push({
      name: 'Quantile',
      type: 'number'
    });
    renderer = operationWithRangeVectorRendererAndParam;
  }

  return {
    id: name,
    name: (0,operationUtils.t7)(name),
    params,
    defaultParams,
    alternativesKey: 'range function',
    category: LokiVisualQueryOperationCategory.RangeFunctions,
    orderRank: LokiOperationOrder.RangeVectorFunction,
    renderer,
    addOperationHandler: addLokiOperation,
    explainHandler: (op, def) => {
      var _FUNCTIONS$find$docum, _FUNCTIONS$find;

      let opDocs = (_FUNCTIONS$find$docum = (_FUNCTIONS$find = syntax.r8.find(x => x.insertText === op.id)) === null || _FUNCTIONS$find === void 0 ? void 0 : _FUNCTIONS$find.documentation) !== null && _FUNCTIONS$find$docum !== void 0 ? _FUNCTIONS$find$docum : '';

      if (op.params[0] === '$__interval') {
        return `${opDocs} \`$__interval\` is variable that will be replaced with a calculated interval based on **Max data points**,  **Min interval** and query time range. You find these options you find under **Query options** at the right of the data source select dropdown.`;
      } else {
        return `${opDocs} The [range vector](https://grafana.com/docs/loki/latest/logql/metric_queries/#range-vector-aggregation) is set to \`${op.params[0]}\`.`;
      }
    }
  };
}

function getRangeVectorParamDef() {
  return {
    name: 'Range',
    type: 'string',
    options: ['$__interval', '$__range', '1m', '5m', '10m', '1h', '24h']
  };
}

function operationWithRangeVectorRenderer(model, def, innerExpr) {
  var _, _model$params;

  let rangeVector = (_ = ((_model$params = model.params) !== null && _model$params !== void 0 ? _model$params : [])[0]) !== null && _ !== void 0 ? _ : '$__interval';
  return `${def.id}(${innerExpr} [${rangeVector}])`;
}

function operationWithRangeVectorRendererAndParam(model, def, innerExpr) {
  var _model$params2, _params$;

  const params = (_model$params2 = model.params) !== null && _model$params2 !== void 0 ? _model$params2 : [];
  const rangeVector = (_params$ = params[0]) !== null && _params$ !== void 0 ? _params$ : '$__interval';
  const param = params[1];
  return `${def.id}(${param}, ${innerExpr} [${rangeVector}])`;
}

function getLineFilterRenderer(operation) {
  return function lineFilterRenderer(model, def, innerExpr) {
    if (model.params[0] === '') {
      return innerExpr;
    }

    return `${innerExpr} ${operation} \`${model.params[0]}\``;
  };
}

function labelFilterRenderer(model, def, innerExpr) {
  if (model.params[0] === '') {
    return innerExpr;
  }

  if (model.params[1] === '<' || model.params[1] === '>') {
    return `${innerExpr} | ${model.params[0]} ${model.params[1]} ${model.params[2]}`;
  }

  return `${innerExpr} | ${model.params[0]}${model.params[1]}\`${model.params[2]}\``;
}

function pipelineRenderer(model, def, innerExpr) {
  return `${innerExpr} | ${model.id}`;
}

function isRangeVectorFunction(def) {
  return def.category === LokiVisualQueryOperationCategory.RangeFunctions;
}

function getIndexOfOrLast(operations, queryModeller, condition) {
  const index = operations.findIndex(x => {
    const opDef = queryModeller.getOperationDef(x.id);

    if (!opDef) {
      return false;
    }

    return condition(opDef);
  });
  return index === -1 ? operations.length : index;
}

function addLokiOperation(def, query, modeller) {
  const newOperation = {
    id: def.id,
    params: def.defaultParams
  };
  const operations = [...query.operations];
  const existingRangeVectorFunction = operations.find(x => {
    const opDef = modeller.getOperationDef(x.id);

    if (!opDef) {
      return false;
    }

    return isRangeVectorFunction(opDef);
  });

  switch (def.category) {
    case LokiVisualQueryOperationCategory.Aggregations:
    case LokiVisualQueryOperationCategory.Functions:
      if (!existingRangeVectorFunction) {
        const placeToInsert = getIndexOfOrLast(operations, modeller, def => def.category === LokiVisualQueryOperationCategory.Functions);
        operations.splice(placeToInsert, 0, {
          id: LokiOperationId.Rate,
          params: ['$__interval']
        });
      }

      operations.push(newOperation);
      break;

    case LokiVisualQueryOperationCategory.RangeFunctions:
      if (existingRangeVectorFunction) {
        const index = operations.indexOf(existingRangeVectorFunction);
        operations[index] = newOperation;
        break;
      }


    default:
      const placeToInsert = getIndexOfOrLast(operations, modeller, x => {
        var _def$orderRank, _x$orderRank;

        return ((_def$orderRank = def.orderRank) !== null && _def$orderRank !== void 0 ? _def$orderRank : 100) < ((_x$orderRank = x.orderRank) !== null && _x$orderRank !== void 0 ? _x$orderRank : 100);
      });
      operations.splice(placeToInsert, 0, newOperation);
      break;
  }

  return Object.assign({}, query, {
    operations
  });
}

function addNestedQueryHandler(def, query) {
  var _query$binaryQueries;

  return Object.assign({}, query, {
    binaryQueries: [...((_query$binaryQueries = query.binaryQueries) !== null && _query$binaryQueries !== void 0 ? _query$binaryQueries : []), {
      operator: '/',
      query
    }]
  });
}
;



class LokiQueryModeller extends LokiAndPromQueryModellerBase.x {
  constructor() {
    super(getOperationDefinitions);
    this.setOperationCategories([LokiVisualQueryOperationCategory.Aggregations, LokiVisualQueryOperationCategory.RangeFunctions, LokiVisualQueryOperationCategory.Formats, LokiVisualQueryOperationCategory.BinaryOps, LokiVisualQueryOperationCategory.LabelFilters, LokiVisualQueryOperationCategory.LineFilters]);
  }

  renderLabels(labels) {
    if (labels.length === 0) {
      return '{}';
    }

    return super.renderLabels(labels);
  }

  getQueryPatterns() {
    return [{
      name: 'Log query and label filter',
      operations: [{
        id: LokiOperationId.LineMatchesRegex,
        params: ['']
      }, {
        id: LokiOperationId.Logfmt,
        params: []
      }, {
        id: LokiOperationId.LabelFilterNoErrors,
        params: []
      }, {
        id: LokiOperationId.LabelFilter,
        params: ['', '=', '']
      }]
    }, {
      name: 'Time series query on value inside log line',
      operations: [{
        id: LokiOperationId.LineMatchesRegex,
        params: ['']
      }, {
        id: LokiOperationId.Logfmt,
        params: []
      }, {
        id: LokiOperationId.LabelFilterNoErrors,
        params: []
      }, {
        id: LokiOperationId.Unwrap,
        params: ['']
      }, {
        id: LokiOperationId.SumOverTime,
        params: ['$__interval']
      }, {
        id: LokiOperationId.Sum,
        params: []
      }]
    }];
  }

}
const lokiQueryModeller = new LokiQueryModeller();
var dist = __webpack_require__("./.yarn/cache/@lezer-lr-npm-0.15.8-8c481c39cd-e741225d6a.zip/node_modules/@lezer/lr/dist/index.js");
;


const Json$1 = 1,
  Logfmt$1 = 2,
  Unpack$1 = 3,
  Pattern$1 = 4,
  Regexp$1 = 5,
  Unwrap$1 = 6,
  Ip$1 = 7,
  LabelFormat$1 = 8,
  LineFormat$1 = 9,
  LabelReplace$1 = 10,
  Offset$1 = 11,
  Bool$1 = 12,
  On$1 = 13,
  Ignoring$1 = 14,
  GroupLeft$1 = 15,
  GroupRight$1 = 16,
  BytesConv$1 = 17,
  DurationConv$1 = 18,
  DurationSecondsConv$1 = 19,
  By$1 = 20,
  Without$1 = 21,
  And$1 = 22,
  Or$1 = 23,
  Unless$1 = 24,
  Sum$1 = 25,
  Avg$1 = 26,
  Count$1 = 27,
  Max$1 = 28,
  Min$1 = 29,
  Stddev$1 = 30,
  Stdvar$1 = 31,
  Bottomk$1 = 32,
  Topk$1 = 33;

const keywordTokens = {
    json: Json$1,
    logfmt : Logfmt$1,
    unpack: Unpack$1,
    pattern : Pattern$1,
    regexp : Regexp$1,
    ip : Ip$1,
    label_format : LabelFormat$1,
    line_format : LineFormat$1,
    label_replace: LabelReplace$1,
    offset: Offset$1,
    bool: Bool$1,
    on: On$1,
    ignoring: Ignoring$1,
    group_left: GroupLeft$1,
    group_right: GroupRight$1,
    unwrap: Unwrap$1,
    bytes: BytesConv$1,
    duration: DurationConv$1,
    duration_seconds: DurationSecondsConv$1
};

const specializeIdentifier = (value, stack) => {
    return keywordTokens[value.toLowerCase()] || -1;
};


const contextualKeywordTokens = {
    by: By$1,
    without: Without$1,
    and: And$1,
    or: Or$1,
    unless: Unless$1,
    sum: Sum$1,
    avg: Avg$1,
    count: Count$1,
    max: Max$1,
    min: Min$1,
    stddev: Stddev$1,
    stdvar: Stdvar$1,
    bottomk: Bottomk$1,
    topk: Topk$1
};

const extendIdentifier = (value, stack) => {
    return contextualKeywordTokens[value.toLowerCase()] || -1;
};

const spec_Identifier = {__proto__:null,count_over_time:255, rate:257, bytes_over_time:259, bytes_rate:261, avg_over_time:263, sum_over_time:265, min_over_time:267, max_over_time:269, stddev_over_time:271, stdvar_over_time:273, quantile_over_time:275, first_over_time:277, last_over_time:279, absent_over_time:281};
const parser = dist.WQ.deserialize({
  version: 13,
  states: "@jOYQPOOO#VQPO'#DSO$fQPO'#DROYQPO'#DROOQO'#EO'#EOO$sQPO'#D}OOQO'#Eg'#EgO$xQPO'#EfQ%TQPOOOOQO'#Eu'#EuO&UQPO'#EuO&ZQPO'#EvOOQO'#D|'#D|OOQO'#DQ'#DQOOQO'#EP'#EPOOQO'#EQ'#EQOOQO'#ER'#EROOQO'#ES'#ESOOQO'#ET'#ETOOQO'#EU'#EUOOQO'#EV'#EVOOQO'#EW'#EWOOQO'#EX'#EXOOQO'#EY'#EYOOQO'#EZ'#EZOOQO'#E['#E[OOQO'#E]'#E]OOQO'#E^'#E^O&`QPO'#DUOOQO'#DT'#DTO&nQPO,59nOOQO'#Da'#DaO&vQPO'#D`O'OQPO'#D_OOQO'#D^'#D^O(lQPO'#D^OOQO'#D]'#D]O*hQPO,59mO+vQPO,59mO+}QPO,5:hO,UQPO,5:iO,aQPO'#EdO.`QPO,5;QO.gQPO,5;QO.lQPO,5;SO.lQPO,5;SO.lQPO,5;SO.lQPO,5;SO.lQPO,5;SO.lQPO,5;SOOQO,5;a,5;aOYQPO,5;bO0rQPO,59pO0wQPO1G/YOOQO1G/Y1G/YOOQO'#Dd'#DdOOQO,59z,59zO1PQPO,59zOOQO,59y,59yO1UQPO'#DUO1sQPO'#DfOOQO'#Df'#DfO3dQPO'#DfO3iQPO'#DmOOQO'#Dl'#DlOOQO'#Dj'#DjO)RQPO'#DjO4QQPO,59xO5nQPO'#DxO5sQPO'#DyOOQO,59x,59xOOQO,59w,59wOOQO1G/X1G/XOOQO1G0S1G0SO5xQPO'#E_O,XQPO'#E_O6aQPO1G0TO6fQPO1G0TO6kQPO,5;OO6sQPO1G0lO8OQPO1G0lO8VQPO1G0lO8^QPO'#EjO:`QPO'#EiO:jQPO'#EiOYQPO1G0nOYQPO1G0nOYQPO1G0nOYQPO1G0nOYQPO1G0nOYQPO1G0nO:tQPO1G0|OOQO1G/[1G/[OOQO1G/Z1G/ZOOQO7+$t7+$tO:{QPO1G/fO;QQPO,59pO;WQPO,5:`O;`QPO'#DiO;eQPO'#DhOOQO,5:R,5:ROOQO,5:Q,5:QO=RQPO,5:XO=WQPO,5:UO)RQPO,5:UO)RQPO,5:UOOQO,5:d,5:dO=fQPO'#D{OOQO'#Dz'#DzO=kQPO,5:eO?XQPO'#D^O5xQPO,5:yO?`QPO'#E`O?eQPO'#EbO@OQPO,5:yO6[QPO,5:yO@YQPO,5:yO@aQPO,5:yO@fQPO7+%oO,XQPO7+%oOOQO'#Ee'#EeOAvQPO1G0jOOQO1G0j1G0jOBOQPO7+&WOYQPO7+&WOC`QPO7+&WOCgQPO7+&WOCnQQO'#EkOOQO,5;U,5;UOEpQPO,5;TOEwQPO,5;TOGYQPO7+&YOGaQPO7+&YOOQO7+&Y7+&YOGnQPO7+&YOGuQPO7+&YOHzQPO7+&YOI[QPO7+&hOIaQPO7+%QOIfQPO1G/qOOQO1G/z1G/zOOQO1G/|1G/|OIkQPO,5:TOIpQPO,5:SOOQO1G/s1G/sOOQO1G/p1G/pOIuQPO1G/pOKcQPO,5:gO5sQPO,5:fOKkQPO,5:|OKyQPO1G0eO6[QPO1G0eOLRQPO,5:zO)RQPO,5:|OLWQPO1G0eOL_QPO'#EaOLWQPO1G0eOOQO1G0e1G0eOLdQPO1G0eO6[QPO1G0eOLkQPO1G0eOOQO<<IZ<<IZOLsQPO<<IZOLxQPO,5;POOQO7+&U7+&UOOQO<<Ir<<IrOL}QPO<<IrOYQPO<<IrOOQO'#Em'#EmOMUQPO,5;VOOQO'#El'#ElOOQO,5;V,5;VOOQO1G0o1G0oOM^QPO1G0oO! ZQPO<<JSOOQO<<Hl<<HlO! `QPO7+%]OOQO1G/o1G/oOOQO1G/n1G/nOOQO1G0R1G0ROOQO1G0Q1G0QOOQO'#Ec'#EcOOQO1G0h1G0hO! eQPO1G0hOOQO7+&P7+&POOQO1G0f1G0fO! jQPO1G0hOOQO,5:{,5:{O! {QPO7+&PO6[QPO7+&PO!!SQPO7+&PO!!bQPOAN>uOOQO1G0k1G0kO!#rQPOAN?^O!%SQPOAN?^O!%ZQQO1G0qOOQO1G0q1G0qOOQO7+&Z7+&ZO!%cQPOAN?nO!%hQPO<<HwO!%mQPO7+&SOOQO<<Ik<<IkO!%rQPO<<IkO!%zQPO<<IkO!&VQPO'#EbOOQOG24aG24aOOQOG24xG24xOOQO1G0r1G0rOOQO7+&]7+&]O!&[QPOG25YOOQOAN>cAN>cO!&aQPO<<InOOQOAN?VAN?VO!&fQPOLD*tOOQOAN?YAN?YOOQO,5:e,5:eO!&kQPO!$'N`O!&pQPO!)9CzO!&uQPO!.K9fOOQO!4//Q!4//QO5sQPO'#DyO!&zQPO'#D^O!'lQPO,59mO!'vQPO'#DROYQPO1G0nOYQPO1G0nOYQPO1G0nOYQPO1G0nOYQPO1G0nOYQPO1G0nO.lQPO,5;SO.lQPO,5;SO.lQPO,5;SO.lQPO,5;SO.lQPO,5;SO.lQPO,5;SO!)RQPO7+&YO!)YQPO7+&YO!)gQPO7+&YO!*oQPO7+&YO!*vQPO7+&YO!)nQPO'#Eh",
  stateData: "!+T~O#mOSrOS~OYZOiUOjUOkUOlUOmUOnUOoUOpUOqUO!kXO#cYO#dYO#nPO#qRO#s^O#t_O#u`O#vaO#wbO#xcO#ydO#zeO#{fO#|gO#}hO$OiO$PjO$QkO~OylO~O|oO!OoO!UoO!VoOfuXguXhuX!buX!duX!euX!fuX!guX#cuX#duX#euX#fuX#guX#huX~O!XsO#kuX#ruX~P#[O#qxO~OdyOeyO#qzO~Of}Og|Oh}O|!RO!b!RO!d!RO!e!RO!f!RO!g!RO#c!OO#d!OO#e!PO#f!PO#g!PO#h!QO~O!k!SO~O#q!TO~Oz!UO|!UO}!UO!O!UO~O#o!VO#p!WO~OV!XO{!YO~O|oO!OoO!UoO!VoOf!RXg!RXh!RX!X!RX!b!RX!d!RX!e!RX!f!RX!g!RX#c!RX#d!RX#e!RX#f!RX#g!RX#h!RX#k!RX#r!RXU!RX$R!RX#o!RX~OP!^OQ!_OR!_OS!`OT!`OW!gOX!fOb!aOy!]O#q!dO~O|oO!OoO!UoO!VoOfuaguahua!bua!dua!eua!fua!gua#cua#dua#eua#fua#gua#hua~O!XsO#kua#rua~P)^OftXgtXhtX|tX!btX!dtX!etX!ftX!gtX#ctX#dtX#etX#ftX#gtX#htX~O#r!jO~P*uO#r!kO~P*uO!k!oO#nPO#q!mO~O#q!pO~OYZOiUOjUOkUOlUOmUOnUOoUOpUOqUO#cYO#dYO#nPO#qRO#s^O#t_O#u`O#vaO#wbO#xcO#ydO#zeO#{fO#|gO#}hO$OiO$PjO$QkO~O!k!rO~P,fO#q!sO~O[!vO]!tO^!tOY#]Pi#]Pj#]Pk#]Pl#]Pm#]Pn#]Po#]Pp#]Pq#]P!k#]P#c#]P#d#]P#n#]P#q#]P#s#]P#t#]P#u#]P#v#]P#w#]P#x#]P#y#]P#z#]P#{#]P#|#]P#}#]P$O#]P$P#]P$Q#]P~O{#OO~OylO#p#QO~O#q#RO~Oz#SO|#SO}!UO!O!UO!b#TO!d#TO!e#TO!f#TO!g#TO~Oy#UOf!YXg!YXh!YX|!YX!O!YX!U!YX!V!YX!X!YX!b!YX!d!YX!e!YX!f!YX!g!YX#c!YX#d!YX#e!YX#f!YX#g!YX#h!YX#k!YX#r!YXU!YX$R!YX#o!YX~O{#XO~Oz#YO|#YO!b#YO!d#YO!e#YO!f#YO!g#YO~Of#[Og#]O#o#[Oh!Qa|!Qa!O!Qa!U!Qa!V!Qa!X!Qa!b!Qa!d!Qa!e!Qa!f!Qa!g!Qa#c!Qa#d!Qa#e!Qa#f!Qa#g!Qa#h!Qa#k!Qa#r!QaU!Qa$R!Qa~O{#^O~Oy#_O~OU#eO|oO!OoO!UoO!VoO!X#bO$R#dO~O#r#jO~O#o#kO~Oy#lO#r#nO~O#r#oO~P*uOf#iXg#iXh#iX|#iX!b#iX!d#iX!e#iX!f#iX!g#iX#c#iX#d#iX#e#iX#f#iX#g#iX#h#iX#r#iX~O#o#pO~P6zO!k#rO~P,fO#q#sO~OY#]Xi#]Xj#]Xk#]Xl#]Xm#]Xn#]Xo#]Xp#]Xq#]X!k#]X#c#]X#d#]X#n#]X#q#]X#s#]X#t#]X#u#]X#v#]X#w#]X#x#]X#y#]X#z#]X#{#]X#|#]X#}#]X$O#]X$P#]X$Q#]X~O_#uO`#uO~P8cO]!tO^!tO~P8cO#o#}O~P*uO{$OO~OV$PO{#OO!i$QO!k$RO~Oz$SO~O#o$TOf![Xg![Xh![X|![X!O![X!U![X!V![X!X![X!b![X!d![X!e![X!f![X!g![X#c![X#d![X#e![X#f![X#g![X#h![X#k![X#r![XU![X$R![X~O!c$UO~Of#[Og#]O#o#[O#r$VO~Oz$XO~O#o$YOf!mag!mah!ma|!ma!O!ma!U!ma!V!ma!X!ma!b!ma!d!ma!e!ma!f!ma!g!ma#c!ma#d!ma#e!ma#f!ma#g!ma#h!ma#k!ma#r!maU!ma$R!ma~OU$ZO~P(lO!c$^O~O!X$_O~OU#eO|oO!OoO!UoO!VoO!X#bO~OZ$aO#r#Ra~P?jO#r$eO~P5xO#r$cO~OdyOeyOf!qqg!qqh!qq|!qq!b!qq!d!qq!e!qq!f!qq!g!qq#c!qq#d!qq#e!qq#f!qq#g!qq#h!qq#k!qq#r!qq#o!qq~O#o$iO#r$jO~OdyOeyOf#Yqg#Yqh#Yq|#Yq!b#Yq!d#Yq!e#Yq!f#Yq!g#Yq#c#Yq#d#Yq#e#Yq#f#Yq#g#Yq#h#Yq#k#Yq#r#Yq#o#Yq~O#r$kO~P*uO#o$mO~P6zO#b$nO#r$qO~OY#]ai#]aj#]ak#]al#]am#]an#]ao#]ap#]aq#]a!k#]a#c#]a#d#]a#n#]a#s#]a#t#]a#u#]a#v#]a#w#]a#x#]a#y#]a#z#]a#{#]a#|#]a#}#]a$O#]a$P#]a$Q#]a~O#q#sO~PCvO_$sO`$sO#q#]a~PCvOf}Oh}O|!RO!b!RO!d!RO!e!RO!f!RO!g!RO#c!OO#d!OO#e#[q#f#[q#g#[q#h#[q#k#[q#r#[q~Og#[q~PFUOf#[qg#[qh#[q~PF[Og|O~PFUO#k#[q#r#[q~P%TOf#[qg#[qh#[q|#[q!b#[q!d#[q!e#[q!f#[q!g#[q#e#[q#f#[q#g#[q#h#[q~O#c!OO#d!OO#k#[q#r#[q~PHPO{$tO~O#r$uO~O#q$vO~O{$wO~Oy#UO~Of#[O#o#[Og!^ih!^i|!^i!O!^i!U!^i!V!^i!X!^i!b!^i!d!^i!e!^i!f!^i!g!^i#c!^i#d!^i#e!^i#f!^i#g!^i#h!^i#k!^i#r!^iU!^i$R!^i~Oy$yO{$yO~Oa${Ob${Oc${Oy$|O~OZ$aO#r#Ri~O$S%PO~O#r#Ri~P?jO!c%RO~O#r%TO~P5xO#r%TO$R#dO~O#r%VO~Oy%WO~O#r%XO~P*uO#o%ZO#r%[O~O#q#sOY#]ii#]ij#]ik#]il#]im#]in#]io#]ip#]iq#]i!k#]i#c#]i#d#]i#n#]i#s#]i#t#]i#u#]i#v#]i#w#]i#x#]i#y#]i#z#]i#{#]i#|#]i#}#]i$O#]i$P#]i$Q#]i~O#o%^O~O{%_O~O#q%`O~Of#[Og#]O#o#[O$R#Ui#r#Ui~O#r#Rq~P?jOU#eOZ%cO!X%dO#r#Rq~OdyOeyOf!q!Rg!q!Rh!q!R|!q!R!b!q!R!d!q!R!e!q!R!f!q!R!g!q!R#c!q!R#d!q!R#e!q!R#f!q!R#g!q!R#h!q!R#k!q!R#r!q!R#o!q!R~OdyOeyOf#Y!Rg#Y!Rh#Y!R|#Y!R!b#Y!R!d#Y!R!e#Y!R!f#Y!R!g#Y!R#c#Y!R#d#Y!R#e#Y!R#f#Y!R#g#Y!R#h#Y!R#k#Y!R#r#Y!R#o#Y!R~O#r%fO~P*uO#b$nO#r%hO~O{%iO~O#r%jO~Oy%kO~OZ$aO#r#Ry~OU#eO!X%dO!c%RO~OU$ZO~O#o%mO~O#r%nO~O{%pO~O#o%qO~O{%rO~O#r%sO~OP!^OQ!_OR!_OS!`OT!`OW%tOX!fOb!aOy!]O#q!dO~O!X%uO#oua~P)^O!X%uO#ouX~P#[Of&POh&PO|&TO!b&TO!d&TO!e&TO!f&TO!g&TO#c&QO#d&QO#e#[q#f#[q#g#[q#h#[q#o#[q~Og#[q~P!(QOf#[qg#[qh#[q~P!(WOg&OO~P!(QOf&POg&OOh&PO|&TO!b&TO!d&TO!e&TO!f&TO!g&TO#c&QO#d&QO#e&RO#f&RO#g&RO#h&SO~O#o#[q~P!)nO#c&QO#d&QO#o#[q~PHPO",
  goto: "/Y#kPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP#l$k%S%r%uPPPPPP&U&h&x'W'iPP'xP'{'{(Q(T(Z(l(l(uPPPPPP(uP(lP'{'{)O)U)]*O*e*z*z*z*z*z*z*z*z*z*z*z*z*z*z+a+j+},Z,s,v-V*O-Y*O-o.e.v/P/SPPPPPPP*O*O[WORz!s#p$mQ#w!wQ#x!xS#y!y%zQ#z!zQ#{!{Q#|!|Q&U%xQ&V%yQ&W%{Q&X%|Q&Y%}R&Z!Tt]Oz!T!s!w!x!y!z!{!|#p$m%x%y%z%{%|%}RvRjQORz!T!s!w!x!y!z!{!|#p$mS!lx#kQ#h!m]%w%x%y%z%{%|%}RnPQmP^!cs!d#[#]#b$_%uR#P!VQuQQ#c!lQ$`#fQ$d#hQ%S$bR%v%w[tQ!l#f#h$b%w]!iu#c$`$d%S%virQu!l#c#f#h$`$b$d%S%v%whqQu!l#c#f#h$`$b$d%S%v%wR![qkpQqu!l#c#f#h$`$b$d%S%v%wR!ZpV!hs#b%uR#W!^Q#V!^R$x$TU!es#b%uQ#Z!dQ$V#[Q$W#]R%Q$__!cs!d#[#]#b$_%u_!bs!d#[#]#b$_%uQ#a!gR%o%tS#`!g%tR$z$Yj]O!w!x!y!z!{!|%x%y%z%{%|%}QwRQ!qzQ!}!TQ#q!sQ$l#pR%Y$mw[ORz!T!s!w!x!y!z!{!|#p$m%x%y%z%{%|%}wTORz!T!s!w!x!y!z!{!|#p$m%x%y%z%{%|%}wSORz!T!s!w!x!y!z!{!|#p$m%x%y%z%{%|%}Q!nxQ#i!mR$h#kS#f!l#hW$[#c#g$d$fQ%O$]Q%U$eR%b%TQ$b#fQ%O$[Q%a%UR%l%bQ#g!lS$]#c$dQ$c#fQ$f#hS%O$`$bS%a%S%UR%l%cR$}$ZQ{VQ$g#jQ$k#oQ%e%VR%f%XR#m!pwVORz!T!s!w!x!y!z!{!|#p$m%x%y%z%{%|%}Q!w|Q!x}Q!y!OQ!z!PQ!{!QQ!|!RQ%x&OQ%y&PQ%z&QQ%{&RQ%|&SR%}&Th!u|}!O!P!Q!R&O&P&Q&R&S&TR#v!vQ#t!tQ$r#uR%]$sR$o#sQ$p#sR%g%Z",
  nodeNames: "⚠ Json Logfmt Unpack Pattern Regexp Unwrap Ip LabelFormat LineFormat LabelReplace Offset Bool On Ignoring GroupLeft GroupRight BytesConv DurationConv DurationSecondsConv By Without And Or Unless Sum Avg Count Max Min Stddev Stdvar Bottomk Topk LineComment LogQL Expr LogExpr Selector Matchers Matcher Identifier Eq String Neq Re Nre PipelineExpr PipelineStage LineFilters LineFilter Filter PipeExact PipeMatch FilterOp Pipe LabelParser JsonExpressionParser JsonExpressionList JsonExpression LabelFilter IpLabelFilter UnitFilter DurationFilter Gtr Duration Gte Lss Lte Eql BytesFilter Bytes NumberFilter Number LineFormatExpr LabelFormatExpr LabelsFormat LabelFormatMatcher MetricExpr RangeAggregationExpr RangeOp CountOverTime Rate BytesOverTime BytesRate AvgOverTime SumOverTime MinOverTime MaxOverTime StddevOverTime StdvarOverTime QuantileOverTime FirstOverTime LastOverTime AbsentOverTime LogRangeExpr Range OffsetExpr UnwrapExpr ConvOp Grouping Labels VectorAggregationExpr VectorOp BinOpExpr BinOpModifier OnOrIgnoringModifier GroupingLabels GroupingLabelList GroupingLabel LabelName Add Sub Mul Div Mod Pow LiteralExpr LabelReplaceExpr",
  maxTerm: 142,
  skippedNodes: [0,34],
  repeatNodeCount: 0,
  tokenData: "3{~RwX^#lpq#lqr$ars$tst%huv%swx%xxy&gyz&lz{&q{|&v|}&{}!O'Q!O!P'V!P!Q(V!Q!R([!R![)r![!]0r!^!_1W!_!`1e!`!a1z!c!}2X!}#O2o#P#Q2t#Q#R2y#R#S2X#S#T3O#T#o2X#o#p3[#p#q3a#q#r3v#y#z#l$f$g#l#BY#BZ#l$IS$I_#l$I|$JO#l$JT$JU#l$KV$KW#l&FU&FV#l~#qY#m~X^#lpq#l#y#z#l$f$g#l#BY#BZ#l$IS$I_#l$I|$JO#l$JT$JU#l$KV$KW#l&FU&FV#l~$dQ!_!`$j#r#s$o~$oO|~~$tO!O~~$yU{~OY$tZr$trs%]s#O$t#O#P%b#P~$t~%bO{~~%ePO~$t~%mQr~OY%hZ~%h~%xO#g~~%}U{~OY%xZw%xwx%]x#O%x#O#P&a#P~%x~&dPO~%x~&lO#q~~&qO#r~~&vO#e~~&{O#c~~'QO#o~~'VO#d~~'YP!Q![']~'bR!k~!Q![']!g!h'k#X#Y'k~'nR{|'w}!O'w!Q!['}~'zP!Q!['}~(SP!k~!Q!['}~([O#f~~(ae!k~!O!P']!Q![)r!g!h+V!i!j+t!m!n+t!o!p+t!r!s+t!v!w+t#U#V+i#W#X+}#X#Y.P#Z#[.c#[#],f#_#`.c#a#b.l#d#e.c#g#h-n#h#i.c#k#l.}#l#m0W#m#n/i~)wd!k~!O!P']!Q![)r!g!h+V!i!j+t!m!n+t!o!p+t!r!s+t!v!w+t#U#V+i#W#X+}#X#Y.P#Z#[.c#[#],f#_#`.c#a#b.l#d#e.c#g#h-n#h#i.c#k#l.}#m#n/i~+YT{|'w}!O'w!Q!['}!d!e+i#]#^+n~+nO!i~~+qP#U#V+i~+wQ!d!e+i#]#^+n~,SP!c~!Q![,V~,YS!Q![,V#[#],f#a#b,z#g#h-n~,kP!c~!Q![,n~,qR!Q![,n#a#b,z#g#h-n~-PQ!c~!Q![-V#g#h-i~-YR!Q![-V#a#b-c#g#h-n~-fP#g#h-i~-nO!c~~-sP!c~!Q![-v~-yQ!Q![-v#a#b-c~.ST{|'w}!O'w!Q!['}#U#V+i#]#^+n~.fQ#U#V+i#]#^+n~.qS!c~!Q![-V#U#V+i#]#^+n#g#h-i~/SP!c~!Q![/V~/YT!Q![/V#W#X+}#[#],f#a#b,z#g#h-n~/nP!c~!Q![/q~/tU!Q![/q#W#X+}#[#],f#a#b,z#g#h-n#k#l.}~0ZR!Q![0d!c!i0d#T#Z0d~0iR!k~!Q![0d!c!i0d#T#Z0dP0wTyP!Q![0r![!]0r!c!}0r#R#S0r#T#o0r~1]P!e~!_!`1`~1eO!f~~1jQz~!_!`1p#r#s1u~1uO!g~~1zO}~~2PP!b~!_!`2S~2XO!d~R2`TyP#bQ!Q![2X![!]0r!c!}2X#R#S2X#T#o2X~2tO$R~~2yO$S~~3OO#h~~3RRO#S3O#S#T%]#T~3O~3aO#n~~3fQ!X~!_!`3l#r#s3q~3qO!U~~3vO!V~~3{O#p~",
  tokenizers: [0, 1],
  topRules: {"LogQL":[0,35]},
  specialized: [{term: 41, get: (value, stack) => (specializeIdentifier(value) << 1)},{term: 41, get: (value, stack) => (extendIdentifier(value) << 1) | 1},{term: 41, get: value => spec_Identifier[value] || -1}],
  tokenPrec: 0
});
const Json = 1,
  Logfmt = 2,
  Unpack = 3,
  Pattern = 4,
  Regexp = 5,
  Unwrap = 6,
  Ip = 7,
  LabelFormat = 8,
  LineFormat = 9,
  LabelReplace = 10,
  Offset = 11,
  Bool = 12,
  On = 13,
  Ignoring = 14,
  GroupLeft = 15,
  GroupRight = 16,
  BytesConv = 17,
  DurationConv = 18,
  DurationSecondsConv = 19,
  By = 20,
  Without = 21,
  And = 22,
  Or = 23,
  Unless = 24,
  Sum = 25,
  Avg = 26,
  Count = 27,
  Max = 28,
  Min = 29,
  Stddev = 30,
  Stdvar = 31,
  Bottomk = 32,
  Topk = 33,
  LineComment = 34,
  LogQL = 35,
  Expr = 36,
  LogExpr = 37,
  Selector = 38,
  Matchers = 39,
  Matcher = 40,
  Identifier = 41,
  Eq = 42,
  index_es_String = 43,
  Neq = 44,
  Re = 45,
  Nre = 46,
  PipelineExpr = 47,
  PipelineStage = 48,
  LineFilters = 49,
  LineFilter = 50,
  Filter = 51,
  PipeExact = 52,
  PipeMatch = 53,
  FilterOp = 54,
  Pipe = 55,
  LabelParser = 56,
  JsonExpressionParser = 57,
  JsonExpressionList = 58,
  JsonExpression = 59,
  LabelFilter = 60,
  IpLabelFilter = 61,
  UnitFilter = 62,
  DurationFilter = 63,
  Gtr = 64,
  Duration = 65,
  Gte = 66,
  Lss = 67,
  Lte = 68,
  Eql = 69,
  BytesFilter = 70,
  Bytes = 71,
  NumberFilter = 72,
  index_es_Number = 73,
  LineFormatExpr = 74,
  LabelFormatExpr = 75,
  LabelsFormat = 76,
  LabelFormatMatcher = 77,
  MetricExpr = 78,
  RangeAggregationExpr = 79,
  RangeOp = 80,
  CountOverTime = 81,
  Rate = 82,
  BytesOverTime = 83,
  BytesRate = 84,
  AvgOverTime = 85,
  SumOverTime = 86,
  MinOverTime = 87,
  MaxOverTime = 88,
  StddevOverTime = 89,
  StdvarOverTime = 90,
  QuantileOverTime = 91,
  FirstOverTime = 92,
  LastOverTime = 93,
  AbsentOverTime = 94,
  LogRangeExpr = 95,
  Range = 96,
  OffsetExpr = 97,
  UnwrapExpr = 98,
  ConvOp = 99,
  Grouping = 100,
  Labels = 101,
  VectorAggregationExpr = 102,
  VectorOp = 103,
  BinOpExpr = 104,
  BinOpModifier = 105,
  OnOrIgnoringModifier = 106,
  GroupingLabels = 107,
  GroupingLabelList = 108,
  GroupingLabel = 109,
  LabelName = 110,
  Add = 111,
  Sub = 112,
  Mul = 113,
  Div = 114,
  Mod = 115,
  Pow = 116,
  LiteralExpr = 117,
  LabelReplaceExpr = 118;



var parsingUtils = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/parsingUtils.ts");
;



function buildVisualQueryFromString(expr) {
  const replacedExpr = (0,parsingUtils.bU)(expr);
  const tree = parser.parse(replacedExpr);
  const node = tree.topNode; 

  const visQuery = {
    labels: [],
    operations: []
  };
  const context = {
    query: visQuery,
    errors: []
  };

  try {
    handleExpression(replacedExpr, node, context);
  } catch (err) {
    console.error(err);
    context.errors.push({
      text: err.message
    });
  } 


  if (isEmptyQuery(context.query)) {
    context.errors = [];
  }

  return context;
}
function handleExpression(expr, node, context) {
  const visQuery = context.query;

  switch (node.name) {
    case 'Matcher':
      {
        visQuery.labels.push(getLabel(expr, node));
        const err = node.getChild(parsingUtils.GQ);

        if (err) {
          context.errors.push((0,parsingUtils.wf)(expr, err));
        }

        break;
      }

    case 'LineFilter':
      {
        const {
          operation,
          error
        } = getLineFilter(expr, node);

        if (operation) {
          visQuery.operations.push(operation);
        } 


        if (error) {
          context.errors.push(createNotSupportedError(expr, node, error));
        }

        break;
      }

    case 'LabelParser':
      {
        visQuery.operations.push(getLabelParser(expr, node));
        break;
      }

    case 'LabelFilter':
      {
        const {
          operation,
          error
        } = getLabelFilter(expr, node);

        if (operation) {
          visQuery.operations.push(operation);
        } 


        if (error) {
          context.errors.push(createNotSupportedError(expr, node, error));
        }

        break;
      }

    case 'JsonExpressionParser':
      {
        const error = 'JsonExpressionParser not supported in visual query builder';
        context.errors.push(createNotSupportedError(expr, node, error));
      }

    case 'LineFormatExpr':
      {
        visQuery.operations.push(getLineFormat(expr, node));
        break;
      }

    case 'LabelFormatMatcher':
      {
        visQuery.operations.push(getLabelFormat(expr, node));
        break;
      }

    case 'UnwrapExpr':
      {
        const {
          operation,
          error
        } = getUnwrap(expr, node);

        if (operation) {
          visQuery.operations.push(operation);
        } 


        if (error) {
          context.errors.push(createNotSupportedError(expr, node, error));
        }

        break;
      }

    case 'RangeAggregationExpr':
      {
        visQuery.operations.push(handleRangeAggregation(expr, node, context));
        break;
      }

    case 'VectorAggregationExpr':
      {
        visQuery.operations.push(handleVectorAggregation(expr, node, context));
        break;
      }

    case 'BinOpExpr':
      {
        handleBinary(expr, node, context);
        break;
      }

    case parsingUtils.GQ:
      {
        if (isIntervalVariableError(node)) {
          break;
        }

        context.errors.push((0,parsingUtils.wf)(expr, node));
        break;
      }

    default:
      {
        let child = node.firstChild;

        while (child) {
          handleExpression(expr, child, context);
          child = child.nextSibling;
        }
      }
  }
}

function getLabel(expr, node) {
  const labelNode = node.getChild('Identifier');
  const label = (0,parsingUtils.KF)(expr, labelNode);
  const op = (0,parsingUtils.KF)(expr, labelNode.nextSibling);
  const value = (0,parsingUtils.KF)(expr, node.getChild('String')).replace(/"/g, '');
  return {
    label,
    op,
    value
  };
}

function getLineFilter(expr, node) {
  const ipLineFilter = (0,parsingUtils.ff)(expr, node, 'Ip');

  if (ipLineFilter.length > 0) {
    return {
      error: 'Matching ip addresses not supported in query builder'
    };
  }

  const mapFilter = {
    '|=': '__line_contains',
    '!=': '__line_contains_not',
    '|~': '__line_matches_regex',
    '!~': '"__line_matches_regex"_not'
  };
  const filter = (0,parsingUtils.KF)(expr, node.getChild('Filter'));
  const filterExpr = handleQuotes((0,parsingUtils.KF)(expr, node.getChild('String')));
  return {
    operation: {
      id: mapFilter[filter],
      params: [filterExpr]
    }
  };
}

function getLabelParser(expr, node) {
  const parserNode = node.firstChild;
  const parser = (0,parsingUtils.KF)(expr, parserNode);
  const string = handleQuotes((0,parsingUtils.KF)(expr, node.getChild('String')));
  const params = !!string ? [string] : [];
  return {
    id: parser,
    params
  };
}

function getLabelFilter(expr, node) {
  if (node.getChild('Or') || node.getChild('And') || node.getChild('Comma')) {
    return {
      error: 'Label filter with comma, "and", "or" not supported in query builder'
    };
  }

  if (node.firstChild.name === 'IpLabelFilter') {
    return {
      error: 'IpLabelFilter not supported in query builder'
    };
  }

  const id = '__label_filter';

  if (node.firstChild.name === 'UnitFilter') {
    const filter = node.firstChild.firstChild;
    const label = filter.firstChild;
    const op = label.nextSibling;
    const value = op.nextSibling;
    const valueString = handleQuotes((0,parsingUtils.KF)(expr, value));
    return {
      operation: {
        id,
        params: [(0,parsingUtils.KF)(expr, label), (0,parsingUtils.KF)(expr, op), valueString]
      }
    };
  } 


  const filter = node.firstChild;
  const label = filter.firstChild;
  const op = label.nextSibling;
  const value = op.nextSibling;
  const params = [(0,parsingUtils.KF)(expr, label), (0,parsingUtils.KF)(expr, op), handleQuotes((0,parsingUtils.KF)(expr, value))]; 

  if (params.join('') === `__error__=`) {
    return {
      operation: {
        id: '__label_filter_no_errors',
        params: []
      }
    };
  }

  return {
    operation: {
      id,
      params
    }
  };
}

function getLineFormat(expr, node) {
  const id = 'line_format';
  const string = handleQuotes((0,parsingUtils.KF)(expr, node.getChild('String')));
  return {
    id,
    params: [string]
  };
}

function getLabelFormat(expr, node) {
  const id = 'label_format';
  const identifier = node.getChild('Identifier');
  const op = identifier.nextSibling;
  const value = op.nextSibling;
  let valueString = handleQuotes((0,parsingUtils.KF)(expr, value));
  return {
    id,
    params: [(0,parsingUtils.KF)(expr, identifier), valueString]
  };
}

function getUnwrap(expr, node) {
  if (node.getChild('ConvOp')) {
    return {
      error: 'Unwrap with conversion operator not supported in query builder'
    };
  }

  const id = 'unwrap';
  const string = (0,parsingUtils.KF)(expr, node.getChild('Identifier'));
  return {
    operation: {
      id,
      params: [string]
    }
  };
}

function handleRangeAggregation(expr, node, context) {
  const nameNode = node.getChild('RangeOp');
  const funcName = (0,parsingUtils.KF)(expr, nameNode);
  const number = node.getChild('Number');
  const logExpr = node.getChild('LogRangeExpr');
  const params = number !== null && number !== undefined ? [(0,parsingUtils.KF)(expr, number)] : [];
  let match = (0,parsingUtils.KF)(expr, node).match(/\[(.+)\]/);

  if (match !== null && match !== void 0 && match[1]) {
    params.push(match[1]);
  }

  const op = {
    id: funcName,
    params
  };

  if (logExpr) {
    handleExpression(expr, logExpr, context);
  }

  return op;
}

function handleVectorAggregation(expr, node, context) {
  const nameNode = node.getChild('VectorOp');
  let funcName = (0,parsingUtils.KF)(expr, nameNode);
  const grouping = node.getChild('Grouping');
  const labels = [];

  if (grouping) {
    const byModifier = grouping.getChild(`By`);

    if (byModifier && funcName) {
      funcName = `__${funcName}_by`;
    }

    const withoutModifier = grouping.getChild(`Without`);

    if (withoutModifier) {
      funcName = `__${funcName}_without`;
    }

    labels.push(...(0,parsingUtils.ff)(expr, grouping, 'Identifier'));
  }

  const metricExpr = node.getChild('MetricExpr');
  const op = {
    id: funcName,
    params: labels
  };

  if (metricExpr) {
    handleExpression(expr, metricExpr, context);
  }

  return op;
}

const operatorToOpName = binaryScalarDefs.reduce((acc, def) => {
  acc[def.sign] = {
    id: def.id,
    comparison: def.comparison
  };
  return acc;
}, {});

function handleBinary(expr, node, context) {
  const visQuery = context.query;
  const left = node.firstChild;
  const op = (0,parsingUtils.KF)(expr, left.nextSibling);
  const binModifier = getBinaryModifier(expr, node.getChild('BinModifiers'));
  const right = node.lastChild;
  const opDef = operatorToOpName[op];
  const leftNumber = getLastChildWithSelector(left, 'MetricExpr.LiteralExpr.Number');
  const rightNumber = getLastChildWithSelector(right, 'MetricExpr.LiteralExpr.Number');
  const rightBinary = right.getChild('BinOpExpr');

  if (leftNumber) {
  } else {
    handleExpression(expr, left, context);
  }

  if (rightNumber) {
    visQuery.operations.push((0,parsingUtils.Es)(opDef, expr, right, !!(binModifier !== null && binModifier !== void 0 && binModifier.isBool)));
  } else if (rightBinary) {
    const leftMostChild = (0,parsingUtils.ge)(right);

    if ((leftMostChild === null || leftMostChild === void 0 ? void 0 : leftMostChild.name) === 'Number') {
      visQuery.operations.push((0,parsingUtils.Es)(opDef, expr, leftMostChild, !!(binModifier !== null && binModifier !== void 0 && binModifier.isBool)));
    } 


    handleExpression(expr, right, context);
  } else {
    visQuery.binaryQueries = visQuery.binaryQueries || [];
    const binQuery = {
      operator: op,
      query: {
        labels: [],
        operations: []
      }
    };

    if (binModifier !== null && binModifier !== void 0 && binModifier.isMatcher) {
      binQuery.vectorMatchesType = binModifier.matchType;
      binQuery.vectorMatches = binModifier.matches;
    }

    visQuery.binaryQueries.push(binQuery);
    handleExpression(expr, right, {
      query: binQuery.query,
      errors: context.errors
    });
  }
}

function getBinaryModifier(expr, node) {
  if (!node) {
    return undefined;
  }

  if (node.getChild('Bool')) {
    return {
      isBool: true,
      isMatcher: false
    };
  } else {
    var _matcher$getChild;

    const matcher = node.getChild('OnOrIgnoring');

    if (!matcher) {
      return undefined;
    }

    const labels = (0,parsingUtils.KF)(expr, (_matcher$getChild = matcher.getChild('GroupingLabels')) === null || _matcher$getChild === void 0 ? void 0 : _matcher$getChild.getChild('GroupingLabelList'));
    return {
      isMatcher: true,
      isBool: false,
      matches: labels,
      matchType: matcher.getChild('On') ? 'on' : 'ignoring'
    };
  }
}

function isIntervalVariableError(node) {
  var _node$parent;

  return (node === null || node === void 0 ? void 0 : (_node$parent = node.parent) === null || _node$parent === void 0 ? void 0 : _node$parent.name) === 'Range';
}

function handleQuotes(string) {
  if (string[0] === `"` && string[string.length - 1] === `"`) {
    return string.replace(/"/g, '').replace(/\\\\/g, '\\');
  }

  return string.replace(/`/g, '');
}


function getLastChildWithSelector(node, selector) {
  let child = node;
  const children = selector.split('.');

  for (const s of children) {
    child = child.getChild(s);

    if (!child) {
      return null;
    }
  }

  return child;
}


function createNotSupportedError(expr, node, error) {
  const err = (0,parsingUtils.wf)(expr, node);
  err.text = `${error}: ${err.text}`;
  return err;
}

function isEmptyQuery(query) {
  if (query.labels.length === 0 && query.operations.length === 0) {
    return true;
  }

  return false;
}
var store = __webpack_require__("./public/app/core/store.ts");
var loki_types = __webpack_require__("./public/app/plugins/datasource/loki/types.ts");
;



const queryEditorModeDefaultLocalStorageKey = 'LokiQueryEditorModeDefault';
function changeEditorMode(query, editorMode, onChange) {
  if (query.expr === '') {
    store.Z.set(queryEditorModeDefaultLocalStorageKey, editorMode);
  }

  onChange(Object.assign({}, query, {
    editorMode
  }));
}
function getDefaultEditorMode(expr) {
  if (expr != null && expr !== '') {
    return types.c.Code;
  }

  const value = store.Z.get(queryEditorModeDefaultLocalStorageKey);

  switch (value) {
    case types.c.Builder:
    case types.c.Code:
    case types.c.Explain:
      return value;

    default:
      return types.c.Builder;
  }
}

function getQueryWithDefaults(query) {
  let result = query;

  if (!query.editorMode) {
    result = Object.assign({}, query, {
      editorMode: getDefaultEditorMode(query.expr)
    });
  }

  if (query.expr == null) {
    result = Object.assign({}, result, {
      expr: ''
    });
  }

  if (query.queryType == null) {
    result = Object.assign({}, result, {
      queryType: loki_types.EM.Range
    });
  }

  return result;
}
var redux_toolkit_esm = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-341575ab98/0/cache/@reduxjs-toolkit-npm-1.8.0-436263eab0-e229571b80.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
var LabelFilters = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/LabelFilters.tsx");
var OperationList = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationList.tsx");
var OperationsEditorRow = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationsEditorRow.tsx");
var language_utils = __webpack_require__("./public/app/plugins/datasource/loki/language_utils.ts");
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var AutoSizeInput = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/AutoSizeInput.tsx");
;
var _FlexItem;











const NestedQuery = react.memo(_ref => {
  let {
    nestedQuery,
    index,
    datasource,
    onChange,
    onRemove,
    onRunQuery
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  return (0,jsx_runtime.jsxs)("div", {
    className: styles.card,
    children: [(0,jsx_runtime.jsxs)("div", {
      className: styles.header,
      children: [(0,jsx_runtime.jsx)("div", {
        className: styles.name,
        children: "Operator"
      }), (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        width: "auto",
        options: operators,
        value: (0,src.toOption)(nestedQuery.operator),
        onChange: value => {
          onChange(index, Object.assign({}, nestedQuery, {
            operator: value.value
          }));
        }
      }), (0,jsx_runtime.jsx)("div", {
        className: styles.name,
        children: "Vector matches"
      }), (0,jsx_runtime.jsxs)("div", {
        className: styles.vectorMatchWrapper,
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          width: "auto",
          value: nestedQuery.vectorMatchesType || 'on',
          allowCustomValue: true,
          options: [{
            value: 'on',
            label: 'on'
          }, {
            value: 'ignoring',
            label: 'ignoring'
          }],
          onChange: val => {
            onChange(index, Object.assign({}, nestedQuery, {
              vectorMatchesType: val.value
            }));
          }
        }), (0,jsx_runtime.jsx)(AutoSizeInput.H, {
          className: styles.vectorMatchInput,
          minWidth: 20,
          defaultValue: nestedQuery.vectorMatches,
          onCommitChange: evt => {
            onChange(index, Object.assign({}, nestedQuery, {
              vectorMatches: evt.currentTarget.value,
              vectorMatchesType: nestedQuery.vectorMatchesType || 'on'
            }));
          }
        })]
      }), _FlexItem || (_FlexItem = (0,jsx_runtime.jsx)(experimental.FlexItem, {
        grow: 1
      })), (0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
        name: "times",
        size: "sm",
        onClick: () => onRemove(index)
      })]
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.body,
      children: (0,jsx_runtime.jsx)(experimental.EditorRows, {
        children: (0,jsx_runtime.jsx)(LokiQueryBuilder, {
          query: nestedQuery.query,
          datasource: datasource,
          nested: true,
          onRunQuery: onRunQuery,
          onChange: update => {
            onChange(index, Object.assign({}, nestedQuery, {
              query: update
            }));
          }
        })
      })
    })]
  });
});
const operators = binaryScalarDefs.map(def => ({
  label: def.sign,
  value: def.sign
}));
NestedQuery.displayName = 'NestedQuery';

const getStyles = theme => {
  return {
    card: (0,emotion_css_esm.css)({
      label: 'card',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(0.5)
    }),
    header: (0,emotion_css_esm.css)({
      label: 'header',
      padding: theme.spacing(0.5, 0.5, 0.5, 1),
      gap: theme.spacing(1),
      display: 'flex',
      alignItems: 'center'
    }),
    name: (0,emotion_css_esm.css)({
      label: 'name',
      whiteSpace: 'nowrap'
    }),
    body: (0,emotion_css_esm.css)({
      label: 'body',
      paddingLeft: theme.spacing(2)
    }),
    vectorMatchInput: (0,emotion_css_esm.css)({
      label: 'vectorMatchInput',
      marginLeft: -1
    }),
    vectorMatchWrapper: (0,emotion_css_esm.css)({
      label: 'vectorMatchWrapper',
      display: 'flex'
    })
  };
};
;




function NestedQueryList(_ref) {
  var _query$binaryQueries;

  let {
    query,
    datasource,
    onChange,
    onRunQuery
  } = _ref;
  const nestedQueries = (_query$binaryQueries = query.binaryQueries) !== null && _query$binaryQueries !== void 0 ? _query$binaryQueries : [];

  const onNestedQueryUpdate = (index, update) => {
    const updatedList = [...nestedQueries];
    updatedList.splice(index, 1, update);
    onChange(Object.assign({}, query, {
      binaryQueries: updatedList
    }));
  };

  const onRemove = index => {
    const updatedList = [...nestedQueries.slice(0, index), ...nestedQueries.slice(index + 1)];
    onChange(Object.assign({}, query, {
      binaryQueries: updatedList
    }));
  };

  return (0,jsx_runtime.jsx)(experimental.Stack, {
    direction: "column",
    gap: 1,
    children: nestedQueries.map((nestedQuery, index) => (0,jsx_runtime.jsx)(NestedQuery, {
      nestedQuery: nestedQuery,
      index: index,
      onChange: onNestedQueryUpdate,
      datasource: datasource,
      onRemove: onRemove,
      onRunQuery: onRunQuery
    }, index.toString()))
  });
}
;












const LokiQueryBuilder = react.memo(_ref => {
  let {
    datasource,
    query,
    nested,
    onChange,
    onRunQuery
  } = _ref;

  const onChangeLabels = labels => {
    onChange(Object.assign({}, query, {
      labels
    }));
  };

  const withTemplateVariableOptions = async optionsPromise => {
    const options = await optionsPromise;
    return [...datasource.getVariables(), ...options].map(value => ({
      label: value,
      value
    }));
  };

  const onGetLabelNames = async forLabel => {
    const labelsToConsider = query.labels.filter(x => x !== forLabel);

    if (labelsToConsider.length === 0) {
      await datasource.languageProvider.refreshLogLabels();
      return datasource.languageProvider.getLabelKeys();
    }

    const expr = lokiQueryModeller.renderLabels(labelsToConsider);
    const series = await datasource.languageProvider.fetchSeriesLabels(expr);
    return Object.keys(series).sort();
  };

  const onGetLabelValues = async forLabel => {
    if (!forLabel.label) {
      return [];
    }

    let values;
    const labelsToConsider = query.labels.filter(x => x !== forLabel);

    if (labelsToConsider.length === 0) {
      values = await datasource.languageProvider.fetchLabelValues(forLabel.label);
    } else {
      const expr = lokiQueryModeller.renderLabels(labelsToConsider);
      const result = await datasource.languageProvider.fetchSeriesLabels(expr);
      values = result[datasource.interpolateString(forLabel.label)];
    }

    return values ? values.map(v => (0,language_utils.Hk)(v, forLabel.op)) : []; 
  };

  const labelFilterError = (0,react.useMemo)(() => {
    const {
      labels,
      operations: op
    } = query;

    if (!labels.length && op.length) {
      if (op.length === 1 && op[0].id === LokiOperationId.LineContains && op[0].params[0] === '') {
        return undefined;
      }

      return 'You need to specify at least 1 label filter (stream selector)';
    }

    return undefined;
  }, [query]);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(experimental.EditorRow, {
      children: (0,jsx_runtime.jsx)(LabelFilters.P, {
        onGetLabelNames: forLabel => withTemplateVariableOptions(onGetLabelNames(forLabel)),
        onGetLabelValues: forLabel => withTemplateVariableOptions(onGetLabelValues(forLabel)),
        labelsFilters: query.labels,
        onChange: onChangeLabels,
        error: labelFilterError
      })
    }), (0,jsx_runtime.jsx)(OperationsEditorRow.B, {
      children: (0,jsx_runtime.jsx)(OperationList.P, {
        queryModeller: lokiQueryModeller,
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery,
        datasource: datasource
      })
    }), query.binaryQueries && query.binaryQueries.length > 0 && (0,jsx_runtime.jsx)(NestedQueryList, {
      query: query,
      datasource: datasource,
      onChange: onChange,
      onRunQuery: onRunQuery
    })]
  });
});
LokiQueryBuilder.displayName = 'LokiQueryBuilder';
var prism = __webpack_require__("./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js");
var prism_default = __webpack_require__.n(prism);
;







function QueryPreview(_ref) {
  let {
    query
  } = _ref;
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = QueryPreview_getStyles(theme);
  const highlighted = prism_default().highlight(query, syntax.xY, 'lokiql');
  return (0,jsx_runtime.jsx)(experimental.EditorRow, {
    children: (0,jsx_runtime.jsx)(experimental.EditorFieldGroup, {
      children: (0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Raw query",
        children: (0,jsx_runtime.jsx)("div", {
          className: (0,emotion_css_esm.cx)(styles.editorField, 'prism-syntax-highlight'),
          "aria-label": "selector",
          dangerouslySetInnerHTML: {
            __html: highlighted
          }
        })
      })
    })
  });
}

const QueryPreview_getStyles = theme => {
  return {
    editorField: (0,emotion_css_esm.css)({
      fontFamily: theme.typography.fontFamilyMonospace,
      fontSize: theme.typography.bodySmall.fontSize
    })
  };
};
;










function LokiQueryBuilderContainer(props) {
  const {
    query,
    onChange,
    onRunQuery,
    datasource
  } = props;
  const [state, dispatch] = (0,react.useReducer)(stateSlice.reducer, {
    expr: query.expr,
    visQuery: query.expr === '' ? {
      labels: [],
      operations: [{
        id: '__line_contains',
        params: ['']
      }]
    } : undefined
  }); 

  (0,react.useEffect)(() => {
    dispatch(exprChanged(query.expr));
  }, [query.expr]);

  const onVisQueryChange = visQuery => {
    const expr = lokiQueryModeller.renderQuery(visQuery);
    dispatch(visualQueryChange({
      visQuery,
      expr
    }));
    onChange(Object.assign({}, props.query, {
      expr: expr
    }));
  };

  if (!state.visQuery) {
    return null;
  }

  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(LokiQueryBuilder, {
      query: state.visQuery,
      datasource: datasource,
      onChange: onVisQueryChange,
      onRunQuery: onRunQuery
    }), query.rawQuery && (0,jsx_runtime.jsx)(QueryPreview, {
      query: query.expr
    })]
  });
}
const stateSlice = (0,redux_toolkit_esm.oM)({
  name: 'loki-builder-container',
  initialState: {
    expr: ''
  },
  reducers: {
    visualQueryChange: (state, action) => {
      state.expr = action.payload.expr;
      state.visQuery = action.payload.visQuery;
    },
    exprChanged: (state, action) => {
      if (!state.visQuery || state.expr !== action.payload) {
        state.expr = action.payload;
        const parseResult = buildVisualQueryFromString(action.payload);
        state.visQuery = parseResult.query;
      }
    }
  }
});
const {
  visualQueryChange,
  exprChanged
} = stateSlice.actions;
var OperationExplainedBox = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationExplainedBox.tsx");
var OperationListExplained = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationListExplained.tsx");
;








const LokiQueryBuilderExplained = react.memo(_ref => {
  let {
    query,
    nested
  } = _ref;
  const visQuery = buildVisualQueryFromString(query || '').query;
  return (0,jsx_runtime.jsxs)(experimental.Stack, {
    gap: 0,
    direction: "column",
    children: [(0,jsx_runtime.jsx)(OperationExplainedBox.B, {
      stepNumber: 1,
      title: `${lokiQueryModeller.renderLabels(visQuery.labels)}`,
      children: "Fetch all log lines matching label filters."
    }), (0,jsx_runtime.jsx)(OperationListExplained.V, {
      stepNumber: 2,
      queryModeller: lokiQueryModeller,
      query: visQuery
    })]
  });
});
LokiQueryBuilderExplained.displayName = 'LokiQueryBuilderExplained';
var QueryOptionGroup = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/QueryOptionGroup.tsx");
var LokiOptionFields = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiOptionFields.tsx");
var throwError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
var lastValueFrom = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
var merge = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
var catchError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
var switchMap = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
var logs_model = __webpack_require__("./public/app/core/logs_model.ts");
var explore = __webpack_require__("./public/app/core/utils/explore.ts");
var TimeSrv = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
var template_srv = __webpack_require__("./public/app/features/templating/template_srv.ts");
var fetch = __webpack_require__("./public/app/core/utils/fetch.ts");
var legend = __webpack_require__("./public/app/plugins/datasource/prometheus/legend.ts");
var promql = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
;



const builtInWords = [...promql.YO, ...promql.fP, ...promql.Os, ...syntax.zy]; 

const metricsAndKeywordsRegexp = /([A-Za-z:][\w:]*)\b(?![\]{=!",])/g;
function addLabelToQuery(query, key, value, operator, hasNoMetrics) {
  if (!key || !value) {
    throw new Error('Need label to add to query.');
  } 


  const transformedValue = value === Infinity ? '+Inf' : value.toString(); 

  let previousWord;
  query = query.replace(metricsAndKeywordsRegexp, (match, word, offset) => {
    const isMetric = isWordMetric(query, word, offset, previousWord, hasNoMetrics);
    previousWord = word;
    return isMetric ? `${word}{}` : word;
  }); 

  const selectorRegexp = /(\$)?{([^{]*)}/g;
  const parts = [];
  let lastIndex = 0;
  let suffix = '';
  let match = selectorRegexp.exec(query);

  while (match) {
    const prefix = query.slice(lastIndex, match.index);
    lastIndex = match.index + match[2].length + 2;
    suffix = query.slice(match.index + match[0].length); 

    if (match[0].startsWith('{.') || match[1]) {
      parts.push(prefix);
      parts.push(match[0]);
    } else {
      const selector = match[2];
      const selectorWithLabel = addLabelToSelector(selector, key, transformedValue, operator);
      parts.push(prefix, selectorWithLabel);
    }

    match = selectorRegexp.exec(query);
  }

  parts.push(suffix);
  return parts.join('');
}
const labelRegexp = /(\w+)\s*(=|!=|=~|!~)\s*("[^"]*")/g;
function addLabelToSelector(selector, labelKey, labelValue, labelOperator) {
  const parsedLabels = []; 

  if (selector) {
    let match = labelRegexp.exec(selector);

    while (match) {
      parsedLabels.push({
        key: match[1],
        operator: match[2],
        value: match[3]
      });
      match = labelRegexp.exec(selector);
    }
  } 


  const operatorForLabelKey = labelOperator || '=';
  parsedLabels.push({
    key: labelKey,
    operator: operatorForLabelKey,
    value: `"${labelValue}"`
  }); 

  const formatted = (0,lodash.chain)(parsedLabels).uniqWith(lodash.isEqual).compact().sortBy('key').map(_ref => {
    let {
      key,
      operator,
      value
    } = _ref;
    return `${key}${operator}${value}`;
  }).value().join(',');
  return `{${formatted}}`;
}

function isPositionInsideChars(text, position, openChar, closeChar) {
  const nextSelectorStart = text.slice(position).indexOf(openChar);
  const nextSelectorEnd = text.slice(position).indexOf(closeChar);
  return nextSelectorEnd > -1 && (nextSelectorStart === -1 || nextSelectorStart > nextSelectorEnd);
}

function isWordMetric(query, word, offset, previousWord, hasNoMetrics) {
  const insideSelector = isPositionInsideChars(query, offset, '{', '}'); 

  const previousWordIsKeyWord = previousWord && promql.fP.indexOf(previousWord) > -1; 

  const isColonBounded = word.endsWith(':'); 

  const startsWithQuote = query[offset - 1] === '"'; 

  const isTemplateVariable = query[offset - 1] === '$'; 

  const isTimeUnit = ['s', 'm', 'h', 'd', 'w'].includes(word) && Boolean(Number(query[offset - 1]));

  if (!hasNoMetrics && !insideSelector && !isColonBounded && !previousWordIsKeyWord && !startsWithQuote && !isTemplateVariable && !isTimeUnit && builtInWords.indexOf(word) === -1) {
    return true;
  }

  return false;
}

 const add_label_to_query = (( null && (addLabelToQuery)));
;



function getDerivedFields(dataFrame, derivedFieldConfigs) {
  if (!derivedFieldConfigs.length) {
    return [];
  }

  const derivedFieldsGrouped = (0,lodash.groupBy)(derivedFieldConfigs, 'name');
  const newFields = Object.values(derivedFieldsGrouped).map(fieldFromDerivedFieldConfig); 

  const lineField = dataFrame.fields.find(f => f.type === src.FieldType.string);

  if (lineField === undefined) {
    throw new Error('invalid logs-dataframe, string-field missing');
  }

  lineField.values.toArray().forEach(line => {
    for (const field of newFields) {
      const logMatch = line.match(derivedFieldsGrouped[field.name][0].matcherRegex);
      field.values.add(logMatch && logMatch[1]);
    }
  });
  return newFields;
}

function fieldFromDerivedFieldConfig(derivedFieldConfigs) {
  const dataSourceSrv = (0,grafana_runtime_src.getDataSourceSrv)();
  const dataLinks = derivedFieldConfigs.reduce((acc, derivedFieldConfig) => {
    if (derivedFieldConfig.datasourceUid) {
      var _dsSettings$name;

      const dsSettings = dataSourceSrv.getInstanceSettings(derivedFieldConfig.datasourceUid);
      acc.push({
        title: derivedFieldConfig.urlDisplayLabel || '',
        url: '',
        internal: {
          query: {
            query: derivedFieldConfig.url
          },
          datasourceUid: derivedFieldConfig.datasourceUid,
          datasourceName: (_dsSettings$name = dsSettings === null || dsSettings === void 0 ? void 0 : dsSettings.name) !== null && _dsSettings$name !== void 0 ? _dsSettings$name : 'Data source not found'
        }
      });
    } else if (derivedFieldConfig.url) {
      acc.push({
        title: derivedFieldConfig.urlDisplayLabel || '',
        url: derivedFieldConfig.url
      });
    }

    return acc;
  }, []);
  return {
    name: derivedFieldConfigs[0].name,
    type: src.FieldType.string,
    config: {
      links: dataLinks
    },
    values: new src.ArrayVector([])
  };
}
;


function makeTableFrames(instantMetricFrames) {
  const framesWithRefId = instantMetricFrames.filter(f => f.refId !== undefined);
  const framesByRefId = (0,lodash.groupBy)(framesWithRefId, frame => frame.refId);
  return Object.entries(framesByRefId).map(_ref => {
    let [refId, frames] = _ref;
    return makeTableFrame(frames, refId);
  });
}

function makeTableFrame(instantMetricFrames, refId) {
  const tableTimeField = {
    name: 'Time',
    config: {},
    values: new src.ArrayVector(),
    type: src.FieldType.time
  };
  const tableValueField = {
    name: `Value #${refId}`,
    config: {},
    values: new src.ArrayVector(),
    type: src.FieldType.number
  }; 

  const allLabelNames = new Set(instantMetricFrames.map(frame => frame.fields.map(field => {
    var _field$labels;

    return Object.keys((_field$labels = field.labels) !== null && _field$labels !== void 0 ? _field$labels : {});
  }).flat()).flat());
  const sortedLabelNames = Array.from(allLabelNames).sort();
  const labelFields = sortedLabelNames.map(labelName => ({
    name: labelName,
    config: {
      filterable: true
    },
    values: new src.ArrayVector(),
    type: src.FieldType.string
  }));
  instantMetricFrames.forEach(frame => {
    var _valueField$labels;

    const timeField = frame.fields.find(field => field.type === src.FieldType.time);
    const valueField = frame.fields.find(field => field.type === src.FieldType.number);

    if (timeField == null || valueField == null) {
      return;
    }

    const timeArray = timeField.values.toArray();
    const valueArray = valueField.values.toArray();

    for (let x of timeArray) {
      tableTimeField.values.add(x);
    }

    for (let x of valueArray) {
      tableValueField.values.add(x);
    }

    const labels = (_valueField$labels = valueField.labels) !== null && _valueField$labels !== void 0 ? _valueField$labels : {};

    for (let f of labelFields) {
      var _labels$f$name;

      const text = (_labels$f$name = labels[f.name]) !== null && _labels$f$name !== void 0 ? _labels$f$name : ''; 

      for (let i = 0; i < valueArray.length; i++) {
        f.values.add(text);
      }
    }
  });
  return {
    fields: [tableTimeField, ...labelFields, tableValueField],
    refId,
    meta: {
      preferredVisualisationType: 'table'
    },
    length: tableTimeField.values.length
  };
}
;
const _excluded = ["instant", "range"],
      _excluded2 = ["instant", "range"],
      _excluded3 = ["instant", "range"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function formatQuery(selector) {
  return `${selector || ''}`.trim();
}

function getHighlighterExpressionsFromQuery(input) {
  let expression = input;
  const results = []; 

  while (expression) {
    const filterStart = expression.search(/\|=|\|~|!=|!~/); 

    if (filterStart === -1) {
      break;
    } 


    const filterOperator = expression.slice(filterStart, filterStart + 2);
    const skip = expression.slice(filterStart).search(/!=|!~/) === 0;
    expression = expression.slice(filterStart + 2);

    if (skip) {
      continue;
    } 


    const filterEnd = expression.search(/\|=|\|~|!=|!~/);
    let filterTerm;

    if (filterEnd === -1) {
      filterTerm = expression.trim();
    } else {
      filterTerm = expression.slice(0, filterEnd).trim();
      expression = expression.slice(filterEnd);
    }

    const quotedTerm = filterTerm.match(/"(.*?)"/);
    const backtickedTerm = filterTerm.match(/`(.*?)`/);
    const term = quotedTerm || backtickedTerm;

    if (term) {
      const unwrappedFilterTerm = term[1];
      const regexOperator = filterOperator === '|~'; 

      if (regexOperator) {
        results.push(backtickedTerm ? unwrappedFilterTerm : unwrappedFilterTerm.replace(/\\\\/g, '\\'));
      } else {
        results.push((0,lodash.escapeRegExp)(unwrappedFilterTerm));
      }
    } else {
      return results;
    }
  }

  return results;
}
function queryHasPipeParser(expr) {
  const parsers = syntax.uR.map(parser => `${parser.label}`).join('|');
  const regexp = new RegExp(`\\\|\\\s?(${parsers})`);
  return regexp.test(expr);
}
function addParsedLabelToQuery(expr, key, value, operator) {
  return expr + ` | ${key}${operator}"${value.toString()}"`;
} 

function getNormalizedLokiQuery(query) {
  if (query.queryType !== undefined) {
    const rest = _objectWithoutPropertiesLoose(query, _excluded);

    return rest;
  } 


  if (query.instant === true) {
    const rest = _objectWithoutPropertiesLoose(query, _excluded2);

    return Object.assign({}, rest, {
      queryType: loki_types.EM.Instant
    });
  } 


  const rest = _objectWithoutPropertiesLoose(query, _excluded3);

  return Object.assign({}, rest, {
    queryType: loki_types.EM.Range
  });
}
;
const backendResultTransformer_excluded = ["meta"],
      backendResultTransformer_excluded2 = ["data"];

function backendResultTransformer_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function isMetricFrame(frame) {
  return frame.fields.every(field => field.type === src.FieldType.time || field.type === src.FieldType.number);
} 


function setFrameMeta(frame, meta) {
  const {
    meta: oldMeta
  } = frame,
        rest = backendResultTransformer_objectWithoutPropertiesLoose(frame, backendResultTransformer_excluded); 


  const newMeta = Object.assign({}, oldMeta, meta);
  return Object.assign({}, rest, {
    meta: newMeta
  });
}

function processStreamFrame(frame, query, derivedFieldConfigs) {
  const meta = {
    preferredVisualisationType: 'logs',
    limit: query === null || query === void 0 ? void 0 : query.maxLines,
    searchWords: query !== undefined ? getHighlighterExpressionsFromQuery(formatQuery(query.expr)) : undefined,
    custom: {
      lokiQueryStatKey: 'Summary: total bytes processed'
    }
  };
  const newFrame = setFrameMeta(frame, meta);
  const derivedFields = getDerivedFields(newFrame, derivedFieldConfigs);
  return Object.assign({}, newFrame, {
    fields: [...newFrame.fields, ...derivedFields]
  });
}

function processStreamsFrames(frames, queryMap, derivedFieldConfigs) {
  return frames.map(frame => {
    const query = frame.refId !== undefined ? queryMap.get(frame.refId) : undefined;
    return processStreamFrame(frame, query, derivedFieldConfigs);
  });
}

function processMetricInstantFrames(frames) {
  return frames.length > 0 ? makeTableFrames(frames) : [];
}

function processMetricRangeFrames(frames) {
  const meta = {
    preferredVisualisationType: 'graph'
  };
  return frames.map(frame => setFrameMeta(frame, meta));
} 


function groupFrames(frames, queryMap) {
  const streamsFrames = [];
  const metricInstantFrames = [];
  const metricRangeFrames = [];
  frames.forEach(frame => {
    if (!isMetricFrame(frame)) {
      streamsFrames.push(frame);
    } else {
      var _queryMap$get;

      const isInstantFrame = frame.refId != null && ((_queryMap$get = queryMap.get(frame.refId)) === null || _queryMap$get === void 0 ? void 0 : _queryMap$get.queryType) === loki_types.EM.Instant;

      if (isInstantFrame) {
        metricInstantFrames.push(frame);
      } else {
        metricRangeFrames.push(frame);
      }
    }
  });
  return {
    streamsFrames,
    metricInstantFrames,
    metricRangeFrames
  };
}

function transformBackendResult(response, queries, derivedFieldConfigs) {
  const {
    data
  } = response,
        rest = backendResultTransformer_objectWithoutPropertiesLoose(response, backendResultTransformer_excluded2); 


  const dataFrames = data.map(d => {
    if (!(0,src.isDataFrame)(d)) {
      throw new Error('transformation only supports dataframe responses');
    }

    return d;
  });
  const queryMap = new Map(queries.map(query => [query.refId, query]));
  const {
    streamsFrames,
    metricInstantFrames,
    metricRangeFrames
  } = groupFrames(dataFrames, queryMap);
  return Object.assign({}, rest, {
    data: [...processMetricRangeFrames(metricRangeFrames), ...processMetricInstantFrames(metricInstantFrames), ...processStreamsFrames(streamsFrames, queryMap, derivedFieldConfigs)]
  });
}
var lru_cache = __webpack_require__("./.yarn/cache/lru-cache-npm-7.9.0-d803108233-c91a293a10.zip/node_modules/lru-cache/index.js");
var lru_cache_default = __webpack_require__.n(lru_cache);
var prometheus_language_utils = __webpack_require__("./public/app/plugins/datasource/prometheus/language_utils.ts");
;
function language_provider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const DEFAULT_KEYS = ['job', 'namespace'];
const EMPTY_SELECTOR = '{}';
const HISTORY_ITEM_COUNT = 10;
const HISTORY_COUNT_CUTOFF = 1000 * 60 * 60 * 24; 

const NS_IN_MS = 1000000; 

const RATE_RANGES = [{
  label: '$__interval',
  sortValue: '$__interval'
}, {
  label: '$__range',
  sortValue: '$__range'
}, {
  label: '1m',
  sortValue: '00:01:00'
}, {
  label: '5m',
  sortValue: '00:05:00'
}, {
  label: '10m',
  sortValue: '00:10:00'
}, {
  label: '30m',
  sortValue: '00:30:00'
}, {
  label: '1h',
  sortValue: '01:00:00'
}, {
  label: '1d',
  sortValue: '24:00:00'
}];
const LABEL_REFRESH_INTERVAL = 1000 * 30; 

const wrapLabel = label => ({
  label,
  filterText: `\"${label}\"`
});

function addHistoryMetadata(item, history) {
  const cutoffTs = Date.now() - HISTORY_COUNT_CUTOFF;
  const historyForItem = history.filter(h => h.ts > cutoffTs && h.query.expr === item.label);
  let hint = `Queried ${historyForItem.length} times in the last 24h.`;
  const recent = historyForItem[0];

  if (recent) {
    const lastQueried = (0,src.dateTime)(recent.ts).fromNow();
    hint = `${hint} Last queried ${lastQueried}.`;
  }

  return Object.assign({}, item, {
    documentation: hint
  });
}
class LokiLanguageProvider extends src.LanguageProvider {

  constructor(datasource, initialValues) {
    super();

    language_provider_defineProperty(this, "labelKeys", void 0);

    language_provider_defineProperty(this, "labelFetchTs", void 0);

    language_provider_defineProperty(this, "started", false);

    language_provider_defineProperty(this, "datasource", void 0);

    language_provider_defineProperty(this, "lookupsDisabled", false);

    language_provider_defineProperty(this, "seriesCache", new (lru_cache_default())({
      max: 10
    }));

    language_provider_defineProperty(this, "labelsCache", new (lru_cache_default())({
      max: 10
    }));

    language_provider_defineProperty(this, "cleanText", s => s.replace(/[{}[\]="(),!~+\-*/^%\|]/g, '').trim());

    language_provider_defineProperty(this, "request", async (url, params) => {
      try {
        return await this.datasource.metadataRequest(url, params);
      } catch (error) {
        console.error(error);
      }

      return undefined;
    });

    language_provider_defineProperty(this, "start", () => {
      if (!this.startTask) {
        this.startTask = this.fetchLabels().then(() => {
          this.started = true;
          return [];
        });
      }

      return this.startTask;
    });

    language_provider_defineProperty(this, "getBeginningCompletionItems", context => {
      return {
        suggestions: [...this.getEmptyCompletionItems(context).suggestions, ...this.getTermCompletionItems().suggestions]
      };
    });

    language_provider_defineProperty(this, "getTermCompletionItems", () => {
      const suggestions = [];
      suggestions.push({
        prefixMatch: true,
        label: 'Functions',
        items: syntax.r8.map(suggestion => Object.assign({}, suggestion, {
          kind: 'function'
        }))
      });
      return {
        suggestions
      };
    });

    language_provider_defineProperty(this, "getPipeCompletionItem", () => {
      const suggestions = [];
      suggestions.push({
        label: 'Operators',
        items: syntax.Rd.map(suggestion => Object.assign({}, suggestion, {
          kind: 'operators'
        }))
      });
      suggestions.push({
        label: 'Parsers',
        items: syntax.uR.map(suggestion => Object.assign({}, suggestion, {
          kind: 'parsers'
        }))
      });
      return {
        suggestions
      };
    });

    language_provider_defineProperty(this, "fetchSeriesLabels", async match => {
      const interpolatedMatch = this.datasource.interpolateString(match);
      const url = 'series';
      const {
        start,
        end
      } = this.datasource.getTimeRangeParams();
      const cacheKey = this.generateCacheKey(url, start, end, interpolatedMatch);
      let value = this.seriesCache.get(cacheKey);

      if (!value) {
        this.seriesCache.set(cacheKey, {});
        const params = {
          'match[]': interpolatedMatch,
          start,
          end
        };
        const data = await this.request(url, params);
        const {
          values
        } = (0,prometheus_language_utils.DY)(data);
        value = values;
        this.seriesCache.set(cacheKey, value);
      }

      return value;
    });

    language_provider_defineProperty(this, "fetchSeries", async match => {
      const url = 'series';
      const {
        start,
        end
      } = this.datasource.getTimeRangeParams();
      const params = {
        'match[]': match,
        start,
        end
      };
      return await this.request(url, params);
    });

    this.datasource = datasource;
    this.labelKeys = [];
    this.labelFetchTs = 0;
    Object.assign(this, initialValues);
  } 


  getSyntax() {
    return syntax.ZP;
  }

  getLabelKeys() {
    return this.labelKeys;
  }


  async provideCompletionItems(input, context) {
    const {
      wrapperClasses,
      value,
      prefix,
      text
    } = input;
    const emptyResult = {
      suggestions: []
    };

    if (!value) {
      return emptyResult;
    } 


    const empty = (value === null || value === void 0 ? void 0 : value.document.text.length) === 0;
    const selectedLines = value.document.getTextsAtRange(value.selection);
    const currentLine = selectedLines.size === 1 ? selectedLines.first().getText() : null;
    const nextCharacter = currentLine ? currentLine[value.selection.anchor.offset] : null; 

    const tokenRecognized = wrapperClasses.length > 3; 

    const prefixUnrecognized = prefix && !tokenRecognized; 

    const noSuffix = !nextCharacter || nextCharacter === ')'; 

    const safePrefix = prefix && !text.match(/^['"~=\]})\s]+$/) && noSuffix; 

    const operatorsPattern = /[+\-*/^%]/;
    const isNextOperand = text.match(operatorsPattern); 

    if (wrapperClasses.includes('context-range')) {
      return this.getRangeCompletionItems();
    } else if (wrapperClasses.includes('context-labels')) {
      return await this.getLabelCompletionItems(input);
    } else if (wrapperClasses.includes('context-pipe')) {
      return this.getPipeCompletionItem();
    } else if (empty) {
      return this.getEmptyCompletionItems(context);
    } else if (prefixUnrecognized && noSuffix && !isNextOperand) {
      return this.getBeginningCompletionItems(context);
    } else if (prefixUnrecognized && safePrefix) {
      return this.getTermCompletionItems();
    }

    return emptyResult;
  }

  getEmptyCompletionItems(context) {
    const history = context === null || context === void 0 ? void 0 : context.history;
    const suggestions = [];

    if (history !== null && history !== void 0 && history.length) {
      const historyItems = (0,lodash.chain)(history).map(h => h.query.expr).filter().uniq().take(HISTORY_ITEM_COUNT).map(wrapLabel).map(item => addHistoryMetadata(item, history)).value();
      suggestions.push({
        prefixMatch: true,
        skipSort: true,
        label: 'History',
        items: historyItems
      });
    }

    return {
      suggestions
    };
  }

  getRangeCompletionItems() {
    return {
      context: 'context-range',
      suggestions: [{
        label: 'Range vector',
        items: [...RATE_RANGES]
      }]
    };
  }

  async getLabelCompletionItems(_ref) {
    let {
      text,
      wrapperClasses,
      labelKey,
      value
    } = _ref;
    let context = 'context-labels';
    const suggestions = [];

    if (!value) {
      return {
        context,
        suggestions: []
      };
    }

    const line = value.anchorBlock.getText();
    const cursorOffset = value.selection.anchor.offset;
    const isValueStart = text.match(/^(=|=~|!=|!~)/); 

    let selector;
    let parsedSelector;

    try {
      parsedSelector = (0,prometheus_language_utils.rV)(line, cursorOffset);
      selector = parsedSelector.selector;
    } catch {
      selector = EMPTY_SELECTOR;
    }

    if (!labelKey && selector === EMPTY_SELECTOR) {
      await this.start();
      const allLabels = this.getLabelKeys();
      return {
        context,
        suggestions: [{
          label: `Labels`,
          items: allLabels.map(wrapLabel)
        }]
      };
    }

    const existingKeys = parsedSelector ? parsedSelector.labelKeys : [];
    let labelValues; 

    if (selector) {
      if (selector === EMPTY_SELECTOR && labelKey) {
        const labelValuesForKey = await this.getLabelValues(labelKey);
        labelValues = {
          [labelKey]: labelValuesForKey
        };
      } else {
        labelValues = await this.getSeriesLabels(selector);
      }
    }

    if (!labelValues) {
      console.warn(`Server did not return any values for selector = ${selector}`);
      return {
        context,
        suggestions
      };
    }

    if (text && isValueStart || wrapperClasses.includes('attr-value')) {
      if (labelKey && labelValues[labelKey]) {
        context = 'context-label-values';
        suggestions.push({
          label: `Label values for "${labelKey}"`,
          items: labelValues[labelKey].map(wrapLabel).filter(_ref2 => {
            let {
              filterText
            } = _ref2;
            return filterText !== text;
          })
        });
      }
    } else {
      const labelKeys = labelValues ? Object.keys(labelValues) : DEFAULT_KEYS;

      if (labelKeys) {
        const possibleKeys = (0,lodash.difference)(labelKeys, existingKeys);

        if (possibleKeys.length) {
          const newItems = possibleKeys.map(key => ({
            label: key
          }));
          const newSuggestion = {
            label: `Labels`,
            items: newItems
          };
          suggestions.push(newSuggestion);
        }
      }
    }

    return {
      context,
      suggestions
    };
  }

  importFromAbstractQuery(labelBasedQuery) {
    return {
      refId: labelBasedQuery.refId,
      expr: (0,prometheus_language_utils.PL)(labelBasedQuery),
      queryType: loki_types.EM.Range
    };
  }

  exportToAbstractQuery(query) {
    const lokiQuery = query.expr;

    if (!lokiQuery || lokiQuery.length === 0) {
      return {
        refId: query.refId,
        labelMatchers: []
      };
    }

    const tokens = prism_default().tokenize(lokiQuery, syntax.ZP);
    return {
      refId: query.refId,
      labelMatchers: (0,prometheus_language_utils.UO)(tokens)
    };
  }

  async getSeriesLabels(selector) {
    if (this.lookupsDisabled) {
      return undefined;
    }

    try {
      return await this.fetchSeriesLabels(selector);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }


  async fetchLabels() {
    const url = 'labels';
    const timeRange = this.datasource.getTimeRangeParams();
    this.labelFetchTs = Date.now().valueOf();
    const res = await this.request(url, timeRange);

    if (Array.isArray(res)) {
      const labels = res.slice().sort().filter(label => label !== '__name__');
      this.labelKeys = labels;
    }

    return [];
  }

  async refreshLogLabels(forceRefresh) {
    if (this.labelKeys && Date.now().valueOf() - this.labelFetchTs > LABEL_REFRESH_INTERVAL || forceRefresh) {
      await this.fetchLabels();
    }
  }


  generateCacheKey(url, start, end, param) {
    return [url, this.roundTime(start), this.roundTime(end), param].join();
  } 


  roundTime(nanos) {
    return nanos ? Math.floor(nanos / NS_IN_MS / 1000 / 60 / 5) : 0;
  }

  async getLabelValues(key) {
    return await this.fetchLabelValues(key);
  }

  async fetchLabelValues(key) {
    var _labelValues;

    const interpolatedKey = this.datasource.interpolateString(key);
    const url = `label/${interpolatedKey}/values`;
    const rangeParams = this.datasource.getTimeRangeParams();
    const {
      start,
      end
    } = rangeParams;
    const cacheKey = this.generateCacheKey(url, start, end, interpolatedKey);
    const params = {
      start,
      end
    };
    let labelValues = this.labelsCache.get(cacheKey);

    if (!labelValues) {
      this.labelsCache.set(cacheKey, []);
      const res = await this.request(url, params);

      if (Array.isArray(res)) {
        labelValues = res.slice().sort();
        this.labelsCache.set(cacheKey, labelValues);
      }
    }

    return (_labelValues = labelValues) !== null && _labelValues !== void 0 ? _labelValues : [];
  }

}
var timer = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/timer.js");
var retryWhen = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/retryWhen.js");
var mergeMap = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
var finalize = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/finalize.js");
var tslib_es6 = __webpack_require__("./.yarn/cache/tslib-npm-2.3.1-0e21e18015-de17a98d46.zip/node_modules/tslib/tslib.es6.js");
var Subject = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subject.js");
var Subscriber = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscriber.js");
var Observable = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Observable.js");
var Subscription = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
var ReplaySubject = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");
;






var DEFAULT_WEBSOCKET_CONFIG = {
    url: '',
    deserializer: function (e) { return JSON.parse(e.data); },
    serializer: function (value) { return JSON.stringify(value); },
};
var WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT = 'WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }';
var WebSocketSubject = (function (_super) {
    (0,tslib_es6.__extends)(WebSocketSubject, _super);
    function WebSocketSubject(urlConfigOrSource, destination) {
        var _this = _super.call(this) || this;
        _this._socket = null;
        if (urlConfigOrSource instanceof Observable.y) {
            _this.destination = destination;
            _this.source = urlConfigOrSource;
        }
        else {
            var config = (_this._config = (0,tslib_es6.__assign)({}, DEFAULT_WEBSOCKET_CONFIG));
            _this._output = new Subject.x();
            if (typeof urlConfigOrSource === 'string') {
                config.url = urlConfigOrSource;
            }
            else {
                for (var key in urlConfigOrSource) {
                    if (urlConfigOrSource.hasOwnProperty(key)) {
                        config[key] = urlConfigOrSource[key];
                    }
                }
            }
            if (!config.WebSocketCtor && WebSocket) {
                config.WebSocketCtor = WebSocket;
            }
            else if (!config.WebSocketCtor) {
                throw new Error('no WebSocket constructor can be found');
            }
            _this.destination = new ReplaySubject.t();
        }
        return _this;
    }
    WebSocketSubject.prototype.lift = function (operator) {
        var sock = new WebSocketSubject(this._config, this.destination);
        sock.operator = operator;
        sock.source = this;
        return sock;
    };
    WebSocketSubject.prototype._resetState = function () {
        this._socket = null;
        if (!this.source) {
            this.destination = new ReplaySubject.t();
        }
        this._output = new Subject.x();
    };
    WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
        var self = this;
        return new Observable.y(function (observer) {
            try {
                self.next(subMsg());
            }
            catch (err) {
                observer.error(err);
            }
            var subscription = self.subscribe({
                next: function (x) {
                    try {
                        if (messageFilter(x)) {
                            observer.next(x);
                        }
                    }
                    catch (err) {
                        observer.error(err);
                    }
                },
                error: function (err) { return observer.error(err); },
                complete: function () { return observer.complete(); },
            });
            return function () {
                try {
                    self.next(unsubMsg());
                }
                catch (err) {
                    observer.error(err);
                }
                subscription.unsubscribe();
            };
        });
    };
    WebSocketSubject.prototype._connectSocket = function () {
        var _this = this;
        var _a = this._config, WebSocketCtor = _a.WebSocketCtor, protocol = _a.protocol, url = _a.url, binaryType = _a.binaryType;
        var observer = this._output;
        var socket = null;
        try {
            socket = protocol ? new WebSocketCtor(url, protocol) : new WebSocketCtor(url);
            this._socket = socket;
            if (binaryType) {
                this._socket.binaryType = binaryType;
            }
        }
        catch (e) {
            observer.error(e);
            return;
        }
        var subscription = new Subscription.w0(function () {
            _this._socket = null;
            if (socket && socket.readyState === 1) {
                socket.close();
            }
        });
        socket.onopen = function (evt) {
            var _socket = _this._socket;
            if (!_socket) {
                socket.close();
                _this._resetState();
                return;
            }
            var openObserver = _this._config.openObserver;
            if (openObserver) {
                openObserver.next(evt);
            }
            var queue = _this.destination;
            _this.destination = Subscriber.Lv.create(function (x) {
                if (socket.readyState === 1) {
                    try {
                        var serializer = _this._config.serializer;
                        socket.send(serializer(x));
                    }
                    catch (e) {
                        _this.destination.error(e);
                    }
                }
            }, function (err) {
                var closingObserver = _this._config.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                if (err && err.code) {
                    socket.close(err.code, err.reason);
                }
                else {
                    observer.error(new TypeError(WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT));
                }
                _this._resetState();
            }, function () {
                var closingObserver = _this._config.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                socket.close();
                _this._resetState();
            });
            if (queue && queue instanceof ReplaySubject.t) {
                subscription.add(queue.subscribe(_this.destination));
            }
        };
        socket.onerror = function (e) {
            _this._resetState();
            observer.error(e);
        };
        socket.onclose = function (e) {
            if (socket === _this._socket) {
                _this._resetState();
            }
            var closeObserver = _this._config.closeObserver;
            if (closeObserver) {
                closeObserver.next(e);
            }
            if (e.wasClean) {
                observer.complete();
            }
            else {
                observer.error(e);
            }
        };
        socket.onmessage = function (e) {
            try {
                var deserializer = _this._config.deserializer;
                observer.next(deserializer(e));
            }
            catch (err) {
                observer.error(err);
            }
        };
    };
    WebSocketSubject.prototype._subscribe = function (subscriber) {
        var _this = this;
        var source = this.source;
        if (source) {
            return source.subscribe(subscriber);
        }
        if (!this._socket) {
            this._connectSocket();
        }
        this._output.subscribe(subscriber);
        subscriber.add(function () {
            var _socket = _this._socket;
            if (_this._output.observers.length === 0) {
                if (_socket && (_socket.readyState === 1 || _socket.readyState === 0)) {
                    _socket.close();
                }
                _this._resetState();
            }
        });
        return subscriber;
    };
    WebSocketSubject.prototype.unsubscribe = function () {
        var _socket = this._socket;
        if (_socket && (_socket.readyState === 1 || _socket.readyState === 0)) {
            _socket.close();
        }
        this._resetState();
        _super.prototype.unsubscribe.call(this);
    };
    return WebSocketSubject;
}(Subject.u));

;

function webSocket(urlConfigOrSource) {
    return new WebSocketSubject(urlConfigOrSource);
}
var stringify = __webpack_require__("./.yarn/cache/uuid-npm-8.3.2-eca0baba53-5575a8a75c.zip/node_modules/uuid/dist/esm-browser/stringify.js");
var validate = __webpack_require__("./.yarn/cache/uuid-npm-8.3.2-eca0baba53-5575a8a75c.zip/node_modules/uuid/dist/esm-browser/validate.js");
;


function parse(uuid) {
  if (!(0,validate.Z)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); 

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; 

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; 

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; 

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; 

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

 const esm_browser_parse = (parse);
;



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); 

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
 function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = esm_browser_parse(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } 


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0,stringify.Z)(bytes);
  } 


  try {
    generateUUID.name = name; 
  } catch (err) {} 


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
;
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); 

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

 const esm_browser_sha1 = (sha1);
;


var v5 = v35('v5', 0x50, esm_browser_sha1);
 const esm_browser_v5 = (v5);
var table_model = __webpack_require__("./public/app/core/table_model.ts");
;









const UUID_NAMESPACE = '6ec946da-0f49-47a8-983a-1d76d17e7c92';

function lokiStreamsToRawDataFrame(streams, refId) {
  const labels = new src.ArrayVector([]);
  const times = new src.ArrayVector([]);
  const timesNs = new src.ArrayVector([]);
  const lines = new src.ArrayVector([]);
  const uids = new src.ArrayVector([]); 

  const usedUids = {};

  for (const stream of streams) {
    const streamLabels = stream.stream;
    const labelsString = Object.entries(streamLabels).map(_ref => {
      let [key, val] = _ref;
      return `${key}="${val}"`;
    }).sort().join('');

    for (const [ts, line] of stream.values) {
      labels.add(streamLabels); 

      times.add(new Date(parseInt(ts.slice(0, -6), 10)).toISOString());
      timesNs.add(ts);
      lines.add(line);
      uids.add(createUid(ts, labelsString, line, usedUids, refId));
    }
  }

  return constructDataFrame(times, timesNs, lines, uids, labels, refId);
}

function constructDataFrame(times, timesNs, lines, uids, labels, refId) {
  const dataFrame = {
    refId,
    fields: [{
      name: 'labels',
      type: src.FieldType.other,
      config: {},
      values: labels
    }, {
      name: 'ts',
      type: src.FieldType.time,
      config: {
        displayName: 'Time'
      },
      values: times
    }, 
    {
      name: 'line',
      type: src.FieldType.string,
      config: {},
      values: lines
    }, 
    {
      name: 'tsNs',
      type: src.FieldType.time,
      config: {
        displayName: 'Time ns'
      },
      values: timesNs
    }, 
    {
      name: 'id',
      type: src.FieldType.string,
      config: {},
      values: uids
    }],
    length: times.length
  };
  return dataFrame;
}


function appendResponseToBufferedData(response, data) {
  const streams = response.streams;

  if (!streams || !streams.length) {
    return;
  }

  let baseLabels = {};

  for (const f of data.fields) {
    if (f.type === src.FieldType.string) {
      if (f.labels) {
        baseLabels = f.labels;
      }

      break;
    }
  }

  const labelsField = data.fields[0];
  const tsField = data.fields[1];
  const lineField = data.fields[2];
  const idField = data.fields[3];
  const tsNsField = data.fields[4]; 

  const usedUids = {};

  for (const stream of streams) {
    const unique = (0,src.findUniqueLabels)(stream.stream, baseLabels);
    const allLabelsString = Object.entries(stream.stream).map(_ref2 => {
      let [key, val] = _ref2;
      return `${key}="${val}"`;
    }).sort().join(''); 

    for (const [ts, line] of stream.values) {
      tsField.values.add(new Date(parseInt(ts.slice(0, -6), 10)).toISOString());
      tsNsField.values.add(ts);
      lineField.values.add(line);
      labelsField.values.add(unique);
      idField.values.add(createUid(ts, allLabelsString, line, usedUids, data.refId));
    }
  }
}

function createUid(ts, labelsString, line, usedUids, refId) {
  let id = esm_browser_v5(`${ts}_${labelsString}_${line}`, UUID_NAMESPACE); 

  if (id in usedUids) {
    const newCount = usedUids[id] + 1;
    usedUids[id] = newCount; 

    id = `${id}_${newCount}`;
  } else {
    usedUids[id] = 0;
  } 


  if (refId) {
    return `${id}_${refId}`;
  }

  return id;
}

function lokiMatrixToTimeSeries(matrixResult, options) {
  const name = createMetricLabel(matrixResult.metric, options);
  return {
    target: name,
    title: name,
    datapoints: lokiPointsToTimeseriesPoints(matrixResult.values),
    tags: matrixResult.metric,
    meta: options.meta,
    refId: options.refId
  };
}

function parsePrometheusFormatSampleValue(value) {
  switch (value) {
    case '+Inf':
      return Number.POSITIVE_INFINITY;

    case '-Inf':
      return Number.NEGATIVE_INFINITY;

    default:
      return parseFloat(value);
  }
}

function lokiPointsToTimeseriesPoints(data) {
  const datapoints = [];

  for (const [time, value] of data) {
    let datapointValue = parsePrometheusFormatSampleValue(value);
    const timestamp = time * 1000;
    datapoints.push([datapointValue, timestamp]);
  }

  return datapoints;
}
function lokiResultsToTableModel(lokiResults, resultCount, refId, meta) {
  if (!lokiResults || lokiResults.length === 0) {
    return new table_model.Z();
  } 


  const metricLabels = new Set(lokiResults.reduce((acc, cur) => acc.concat(Object.keys(cur.metric)), [])); 

  const sortedLabels = [...metricLabels.values()].sort();
  const table = new table_model.Z();
  table.refId = refId;
  table.meta = meta;
  table.columns = [{
    text: 'Time',
    type: src.FieldType.time
  }, ...sortedLabels.map(label => ({
    text: label,
    filterable: true,
    type: src.FieldType.string
  })), {
    text: `Value #${refId}`,
    type: src.FieldType.number
  }]; 

  lokiResults.forEach(series => {
    const newSeries = {
      metric: series.metric,
      values: series.value ? [series.value] : series.values
    };

    if (!newSeries.values) {
      return;
    }

    if (!newSeries.metric) {
      table.rows.concat(newSeries.values.map(_ref3 => {
        let [a, b] = _ref3;
        return [a * 1000, parseFloat(b)];
      }));
    } else {
      table.rows.push(...newSeries.values.map(_ref4 => {
        let [a, b] = _ref4;
        return [a * 1000, ...sortedLabels.map(label => newSeries.metric[label] || ''), parseFloat(b)];
      }));
    }
  });
  return table;
}
function createMetricLabel(labelData, options) {
  var _options$legendFormat;

  let label = options === undefined || (0,lodash.isEmpty)(options.legendFormat) ? getOriginalMetricName(labelData) : (0,legend.W)((0,grafana_runtime_src.getTemplateSrv)().replace((_options$legendFormat = options.legendFormat) !== null && _options$legendFormat !== void 0 ? _options$legendFormat : '', options.scopedVars), labelData);

  if (!label && options) {
    label = options.query;
  }

  return label;
}

function getOriginalMetricName(labelData) {
  const labelPart = Object.entries(labelData).map(label => `${label[0]}="${label[1]}"`).join(',');
  return `{${labelPart}}`;
}

function decamelize(s) {
  return s.replace(/[A-Z]/g, m => ` ${m.toLowerCase()}`);
} 

function lokiStatsToMetaStat(stats) {
  const result = [];

  if (!stats) {
    return result;
  }

  for (const section in stats) {
    const values = stats[section];

    for (const label in values) {
      const value = values[label];
      let unit;

      if (/time/i.test(label) && value) {
        unit = 's';
      } else if (/bytes.*persecond/i.test(label)) {
        unit = 'Bps';
      } else if (/bytes/i.test(label)) {
        unit = 'decbytes';
      }

      const title = `${(0,lodash.capitalize)(section)}: ${decamelize(label)}`;
      result.push({
        displayName: title,
        value,
        unit
      });
    }
  }

  return result;
}

function lokiStreamsToDataFrames(response, target, limit, config) {
  const data = limit > 0 ? response.data.result : [];
  const stats = lokiStatsToMetaStat(response.data.stats); 

  const custom = {
    lokiQueryStatKey: 'Summary: total bytes processed'
  };
  const meta = {
    searchWords: getHighlighterExpressionsFromQuery(formatQuery(target.expr)),
    limit,
    stats,
    custom,
    preferredVisualisationType: 'logs'
  };
  const dataFrame = lokiStreamsToRawDataFrame(data, target.refId);
  enhanceDataFrame(dataFrame, config);

  if (meta.custom && dataFrame.fields.some(f => f.labels && Object.keys(f.labels).some(l => l === '__error__'))) {
    meta.custom.error = 'Error when parsing some of the logs';
  }

  if (stats.length && !data.length) {
    return [{
      fields: [],
      length: 0,
      refId: target.refId,
      meta
    }];
  }

  return [Object.assign({}, dataFrame, {
    refId: target.refId,
    meta
  })];
}

const enhanceDataFrame = (dataFrame, config) => {
  var _config$derivedFields;

  if (!config) {
    return;
  }

  const derivedFields = (_config$derivedFields = config.derivedFields) !== null && _config$derivedFields !== void 0 ? _config$derivedFields : [];

  if (!derivedFields.length) {
    return;
  }

  const derivedFieldsGrouped = (0,lodash.groupBy)(derivedFields, 'name');
  const newFields = Object.values(derivedFieldsGrouped).map(result_transformer_fieldFromDerivedFieldConfig);
  const view = new src.DataFrameView(dataFrame);
  view.forEach(row => {
    for (const field of newFields) {
      const logMatch = row.line.match(derivedFieldsGrouped[field.name][0].matcherRegex);
      field.values.add(logMatch && logMatch[1]);
    }
  });
  dataFrame.fields = [...dataFrame.fields, ...newFields];
};

function result_transformer_fieldFromDerivedFieldConfig(derivedFieldConfigs) {
  const dataSourceSrv = (0,grafana_runtime_src.getDataSourceSrv)();
  const dataLinks = derivedFieldConfigs.reduce((acc, derivedFieldConfig) => {
    if (derivedFieldConfig.datasourceUid) {
      var _dsSettings$name;

      const dsSettings = dataSourceSrv.getInstanceSettings(derivedFieldConfig.datasourceUid);
      acc.push({
        title: derivedFieldConfig.urlDisplayLabel || '',
        url: '',
        internal: {
          query: {
            query: derivedFieldConfig.url
          },
          datasourceUid: derivedFieldConfig.datasourceUid,
          datasourceName: (_dsSettings$name = dsSettings === null || dsSettings === void 0 ? void 0 : dsSettings.name) !== null && _dsSettings$name !== void 0 ? _dsSettings$name : 'Data source not found'
        }
      });
    } else if (derivedFieldConfig.url) {
      acc.push({
        title: derivedFieldConfig.urlDisplayLabel || '',
        url: derivedFieldConfig.url
      });
    }

    return acc;
  }, []);
  return {
    name: derivedFieldConfigs[0].name,
    type: src.FieldType.string,
    config: {
      links: dataLinks
    },
    values: new src.ArrayVector([])
  };
}

function rangeQueryResponseToTimeSeries(response, query, target, scopedVars) {
  var _target$legendFormat;

  const meta = {
    preferredVisualisationType: 'graph'
  };
  const transformerOptions = {
    legendFormat: (_target$legendFormat = target.legendFormat) !== null && _target$legendFormat !== void 0 ? _target$legendFormat : '',
    query: query.query,
    refId: target.refId,
    meta,
    scopedVars
  };

  switch (response.data.resultType) {
    case loki_types.ox.Vector:
      return response.data.result.map(vecResult => lokiMatrixToTimeSeries({
        metric: vecResult.metric,
        values: [vecResult.value]
      }, transformerOptions));

    case loki_types.ox.Matrix:
      return response.data.result.map(matrixResult => lokiMatrixToTimeSeries(matrixResult, transformerOptions));

    default:
      return [];
  }
}

function rangeQueryResponseToDataFrames(response, query, target, scopedVars) {
  const series = rangeQueryResponseToTimeSeries(response, query, target, scopedVars);
  const frames = series.map(s => (0,src.toDataFrame)(s));
  const {
    step
  } = query;

  if (step != null) {
    const intervalMs = step * 1000;
    frames.forEach(frame => {
      frame.fields.forEach(field => {
        if (field.type === src.FieldType.time) {
          field.config.interval = intervalMs;
        }
      });
    });
  }

  return frames;
}
function processRangeQueryResponse(response, target, query, limit, config, scopedVars) {
  switch (response.data.resultType) {
    case loki_types.ox.Stream:
      return (0,of.of)({
        data: lokiStreamsToDataFrames(response, target, limit, config),
        key: `${target.refId}_log`
      });

    case loki_types.ox.Vector:
    case loki_types.ox.Matrix:
      return (0,of.of)({
        data: rangeQueryResponseToDataFrames(response, query, target, scopedVars),
        key: target.refId
      });

    default:
      throw new Error(`Unknown result type "${response.data.resultType}".`);
  }
}
;
function live_streams_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class LiveStreams {
  constructor() {
    live_streams_defineProperty(this, "streams", {});
  }

  getStream(target) {
    let retryInterval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
    let stream = this.streams[target.url];

    if (stream) {
      return stream;
    }

    const data = new src.CircularDataFrame({
      capacity: target.size
    });
    data.addField({
      name: 'labels',
      type: src.FieldType.other
    }); 

    data.addField({
      name: 'ts',
      type: src.FieldType.time,
      config: {
        displayName: 'Time'
      }
    });
    data.addField({
      name: 'line',
      type: src.FieldType.string
    }).labels = (0,src.parseLabels)(target.query);
    data.addField({
      name: 'id',
      type: src.FieldType.string
    });
    data.addField({
      name: 'tsNs',
      type: src.FieldType.time,
      config: {
        displayName: 'Time ns'
      }
    });
    data.meta = Object.assign({}, data.meta, {
      preferredVisualisationType: 'logs'
    });
    data.refId = target.refId;
    stream = webSocket(target.url).pipe((0,map.U)(response => {
      appendResponseToBufferedData(response, data);
      return [data];
    }), (0,retryWhen.a)(attempts => attempts.pipe((0,mergeMap.z)((error, i) => {
      const retryAttempt = i + 1; 

      if (error.code === 1006 && retryAttempt < 30) {
        if (retryAttempt > 10) {
          console.warn(`Websocket connection is being disrupted. We keep reconnecting but consider starting new live tailing again. Error: ${error.reason}`);
        } 


        return (0,timer.H)(retryInterval);
      }

      return (0,throwError._)(error);
    }))), (0,finalize.x)(() => {
      delete this.streams[target.url];
    }));
    this.streams[target.url] = stream;
    return stream;
  }

}
;
const sortDataFrame_excluded = ["fields"];

function sortDataFrame_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function makeIndex(field, dir) {
  const fieldValues = field.values.toArray(); 

  const index = Array(fieldValues.length);

  for (let i = 0; i < index.length; i++) {
    index[i] = i;
  }

  const isAsc = dir === 'ASCENDING';
  index.sort((a, b) => {
    const valA = fieldValues[a];
    const valB = fieldValues[b];

    if (valA < valB) {
      return isAsc ? -1 : 1;
    }

    if (valA > valB) {
      return isAsc ? 1 : -1;
    }

    return 0;
  });
  return index;
} 


function sortDataFrameByTime(frame, dir) {
  const {
    fields
  } = frame,
        rest = sortDataFrame_objectWithoutPropertiesLoose(frame, sortDataFrame_excluded); 


  const tsNsField = fields.find(field => field.name === 'tsNs');

  if (tsNsField === undefined) {
    throw new Error('missing nanosecond-timestamp field. should never happen');
  }

  const index = makeIndex(tsNsField, dir);
  return Object.assign({}, rest, {
    fields: fields.map(field => Object.assign({}, field, {
      values: new src.SortedVector(field.values, index)
    }))
  });
  return frame;
}
var defer = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/defer.js");
var StreamingDataFrame = __webpack_require__("./public/app/features/live/data/StreamingDataFrame.ts");
;





async function getLiveStreamKey(query) {
  const str = JSON.stringify({
    expr: query.expr
  });
  const msgUint8 = new TextEncoder().encode(str); 

  const hashBuffer = await crypto.subtle.digest('SHA-1', msgUint8); 

  const hashArray = Array.from(new Uint8Array(hashBuffer.slice(0, 8))); 

  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
} 

function doLokiChannelStream(query, ds, options) {
  var _options$maxDataPoint;

  const range = options.range;
  const maxDelta = range.to.valueOf() - range.from.valueOf() + 1000;
  let maxLength = (_options$maxDataPoint = options.maxDataPoints) !== null && _options$maxDataPoint !== void 0 ? _options$maxDataPoint : 1000;

  if (maxLength > 100) {
    maxLength *= 2;
  }

  let frame = undefined;

  const updateFrame = msg => {
    if (msg !== null && msg !== void 0 && msg.message) {
      const p = msg.message;

      if (!frame) {
        frame = StreamingDataFrame.Av.fromDataFrameJSON(p, {
          maxLength,
          maxDelta,
          displayNameFormat: query.legendFormat
        });
      } else {
        frame.push(p);
      }
    }

    return frame;
  };

  return (0,defer.P)(() => getLiveStreamKey(query)).pipe((0,mergeMap.z)(key => {
    return (0,grafana_runtime_src.getGrafanaLiveSrv)().getStream({
      scope: src.LiveChannelScope.DataSource,
      namespace: ds.uid,
      path: `tail/${key}`,
      data: Object.assign({}, query, {
        timeRange: {
          from: range.from.valueOf().toString(),
          to: range.to.valueOf().toString()
        }
      })
    }).pipe((0,map.U)(evt => {
      const frame = updateFrame(evt);
      return {
        data: frame ? [frame] : [],
        state: src.LoadingState.Streaming
      };
    }));
  }));
}
;
const datasource_excluded = ["__interval", "__interval_ms"];

function datasource_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function datasource_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























const DEFAULT_MAX_LINES = 1000;
const LOKI_ENDPOINT = '/loki/api/v1';
const datasource_NS_IN_MS = 1000000;
const RANGE_QUERY_ENDPOINT = `${LOKI_ENDPOINT}/query_range`;
const INSTANT_QUERY_ENDPOINT = `${LOKI_ENDPOINT}/query`;
const DEFAULT_QUERY_PARAMS = {
  limit: DEFAULT_MAX_LINES,
  query: ''
};

function makeRequest(query, range, app, requestId) {
  const intervalInfo = src.rangeUtil.calculateInterval(range, 1);
  return {
    targets: [query],
    requestId,
    interval: intervalInfo.interval,
    intervalMs: intervalInfo.intervalMs,
    range: range,
    scopedVars: {},
    timezone: 'UTC',
    app,
    startTime: Date.now()
  };
}

class LokiDatasource extends grafana_runtime_src.DataSourceWithBackend {
  constructor(instanceSettings) {
    var _this, _settingsData$maxLine;

    let templateSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,template_srv.J)();
    let timeSrv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0,TimeSrv.$t)();
    super(instanceSettings);
    _this = this;
    this.instanceSettings = instanceSettings;
    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;

    datasource_defineProperty(this, "streams", new LiveStreams());

    datasource_defineProperty(this, "languageProvider", void 0);

    datasource_defineProperty(this, "maxLines", void 0);

    datasource_defineProperty(this, "runInstantQuery", function (target, options) {
      let responseListLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      const timeNs = _this.getTime(options.range.to, true);

      const queryLimit = isMetricsQuery(target.expr) ? options.maxDataPoints : target.maxLines;
      const query = {
        query: target.expr,
        time: `${timeNs + (1e9 - timeNs % 1e9)}`,
        limit: Math.min(queryLimit || Infinity, _this.maxLines),
        direction: target.direction === loki_types.sb.Forward ? 'FORWARD' : 'BACKWARD'
      };

      const meta = {
        preferredVisualisationType: 'table'
      };
      return _this._request(INSTANT_QUERY_ENDPOINT, query).pipe((0,map.U)(response => {
        if (response.data.data.resultType === loki_types.ox.Stream) {
          return {
            data: response.data ? lokiStreamsToDataFrames(response.data, target, query.limit, _this.instanceSettings.jsonData) : [],
            key: `${target.refId}_instant`
          };
        }

        return {
          data: [lokiResultsToTableModel(response.data.data.result, responseListLength, target.refId, meta)],
          key: `${target.refId}_instant`
        };
      }), (0,catchError.K)(err => (0,throwError._)(() => _this.processError(err, target))));
    });

    datasource_defineProperty(this, "runRangeQuery", (target, options) => {
      let maxDataPoints = isMetricsQuery(target.expr) ? 
      options.maxDataPoints || this.maxLines : 
      target.maxLines || this.maxLines;

      if (options.liveStreaming) {
        return this.runLiveQuery(target, maxDataPoints);
      }

      const query = this.createRangeQuery(target, options, maxDataPoints);
      const headers = target.volumeQuery ? {
        'X-Query-Tags': 'Source=logvolhist'
      } : undefined;
      return this._request(RANGE_QUERY_ENDPOINT, query, {
        headers
      }).pipe((0,catchError.K)(err => (0,throwError._)(() => this.processError(err, target))), (0,switchMap.w)(response => processRangeQueryResponse(response.data, target, query, maxDataPoints, this.instanceSettings.jsonData, options.scopedVars)));
    });

    datasource_defineProperty(this, "runLiveQuery", (target, maxDataPoints) => {
      const liveTarget = this.createLiveTarget(target, maxDataPoints);
      return this.streams.getStream(liveTarget).pipe((0,map.U)(data => ({
        data: data || [],
        key: `loki-${liveTarget.refId}`,
        state: src.LoadingState.Streaming
      })), (0,catchError.K)(err => {
        return (0,throwError._)(() => `Live tailing was stopped due to following error: ${err.reason}`);
      }));
    });

    datasource_defineProperty(this, "getLogRowContext", (row, options) => {
      const direction = options && options.direction || 'BACKWARD';
      const limit = options && options.limit || 10;
      const {
        query,
        range
      } = this.prepareLogRowContextQueryTarget(row, limit, direction);

      const processDataFrame = frame => {
        const cache = new src.FieldCache(frame);
        const timestampField = cache.getFirstFieldOfType(src.FieldType.time);
        const lineField = cache.getFirstFieldOfType(src.FieldType.string);
        const idField = cache.getFieldByName('id');

        if (timestampField === undefined || lineField === undefined || idField === undefined) {
          return Object.assign({}, frame, {
            fields: []
          });
        }

        return Object.assign({}, frame, {
          fields: [Object.assign({}, timestampField, {
            name: 'ts'
          }), Object.assign({}, lineField, {
            name: 'line'
          }), Object.assign({}, idField, {
            name: 'id'
          })]
        });
      };

      const processResults = result => {
        const frames = result.data;
        const processedFrames = frames.map(frame => sortDataFrameByTime(frame, 'DESCENDING')).map(frame => processDataFrame(frame)); 

        return Object.assign({}, result, {
          data: processedFrames
        });
      }; 


      const app = src.CoreApp.Explore;
      return (0,lastValueFrom.n)(this.query(makeRequest(query, range, app, `log-row-context-query-${direction}`)).pipe((0,catchError.K)(err => {
        const error = {
          message: 'Error during context query. Please check JS console logs.',
          status: err.status,
          statusText: err.statusText
        };
        throw error;
      }), (0,switchMap.w)(res => (0,of.of)(processResults(res)))));
    });

    datasource_defineProperty(this, "prepareLogRowContextQueryTarget", (row, limit, direction) => {
      const labels = this.languageProvider.getLabelKeys();
      const expr = Object.keys(row.labels).map(label => {
        if (labels.includes(label)) {
          return `${label}="${row.labels[label].replace(/\\/g, '\\\\')}"`;
        }

        return '';
      }) 
      .filter(label => !!label).join(',');
      const contextTimeBuffer = 2 * 60 * 60 * 1000; 

      const queryDirection = direction === 'FORWARD' ? loki_types.sb.Forward : loki_types.sb.Backward;
      const query = {
        expr: `{${expr}}`,
        queryType: loki_types.EM.Range,
        refId: '',
        maxLines: limit,
        direction: queryDirection
      };
      const fieldCache = new src.FieldCache(row.dataFrame);
      const tsField = fieldCache.getFirstFieldOfType(src.FieldType.time);

      if (tsField === undefined) {
        throw new Error('loki: dataframe missing time-field, should never happen');
      }

      const tsValue = tsField.values.get(row.rowIndex);
      const timestamp = (0,src.toUtc)(tsValue);
      const range = queryDirection === loki_types.sb.Forward ? {
        from: timestamp,
        to: (0,src.toUtc)(row.timeEpochMs + contextTimeBuffer)
      } : {
        from: (0,src.toUtc)(row.timeEpochMs - contextTimeBuffer),
        to: timestamp
      };
      return {
        query,
        range: {
          from: range.from,
          to: range.to,
          raw: range
        }
      };
    });

    this.instanceSettings = instanceSettings;
    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;
    this.languageProvider = new LokiLanguageProvider(this);
    const settingsData = instanceSettings.jsonData || {};
    this.maxLines = parseInt((_settingsData$maxLine = settingsData.maxLines) !== null && _settingsData$maxLine !== void 0 ? _settingsData$maxLine : '0', 10) || DEFAULT_MAX_LINES;
  }

  _request(apiUrl, data, options) {
    const baseUrl = this.instanceSettings.url;
    const params = data ? (0,fetch.tW)(data) : '';
    const url = `${baseUrl}${apiUrl}${params.length ? `?${params}` : ''}`;

    if (this.instanceSettings.withCredentials || this.instanceSettings.basicAuth) {
      options = Object.assign({}, options, {
        withCredentials: true
      });

      if (this.instanceSettings.basicAuth) {
        options.headers = Object.assign({}, options.headers, {
          Authorization: this.instanceSettings.basicAuth
        });
      }
    }

    const req = Object.assign({}, options, {
      url
    });
    return (0,grafana_runtime_src.getBackendSrv)().fetch(req);
  }

  getLogsVolumeDataProvider(request) {
    const isLogsVolumeAvailable = request.targets.some(target => target.expr && !isMetricsQuery(target.expr));

    if (!isLogsVolumeAvailable) {
      return undefined;
    }

    const logsVolumeRequest = (0,lodash.cloneDeep)(request);
    logsVolumeRequest.targets = logsVolumeRequest.targets.filter(target => target.expr && !isMetricsQuery(target.expr)).map(target => {
      return Object.assign({}, target, {
        instant: false,
        volumeQuery: true,
        expr: `sum by (level) (count_over_time(${target.expr}[$__interval]))`
      });
    });
    return (0,logs_model.Bz)(this, logsVolumeRequest, {
      extractLevel,
      range: request.range,
      targets: request.targets
    });
  }

  query(request) {
    const subQueries = [];
    const scopedVars = Object.assign({}, request.scopedVars, this.getRangeScopedVars(request.range));

    if (grafana_runtime_src.config.featureToggles.lokiBackendMode) {
      const fixedRequest = Object.assign({}, request, {
        targets: request.targets.map(getNormalizedLokiQuery)
      });

      if (fixedRequest.liveStreaming) {
        return this.runLiveQueryThroughBackend(fixedRequest);
      } else {
        return super.query(fixedRequest).pipe((0,map.U)(response => {
          var _this$instanceSetting;

          return transformBackendResult(response, fixedRequest.targets, (_this$instanceSetting = this.instanceSettings.jsonData.derivedFields) !== null && _this$instanceSetting !== void 0 ? _this$instanceSetting : []);
        }));
      }
    }

    const filteredTargets = request.targets.filter(target => target.expr && !target.hide).map(target => {
      const expr = this.addAdHocFilters(target.expr);
      return Object.assign({}, target, {
        expr: this.templateSrv.replace(expr, scopedVars, this.interpolateQueryExpr)
      });
    });

    for (const target of filteredTargets) {
      var _request$rangeRaw;

      if (target.instant || target.queryType === loki_types.EM.Instant) {
        subQueries.push(this.runInstantQuery(target, request, filteredTargets.length));
      } else if (grafana_runtime_src.config.featureToggles.lokiLive && target.queryType === loki_types.EM.Stream && ((_request$rangeRaw = request.rangeRaw) === null || _request$rangeRaw === void 0 ? void 0 : _request$rangeRaw.to) === 'now') {
        subQueries.push(doLokiChannelStream(target, this, request));
      } else {
        subQueries.push(this.runRangeQuery(target, request));
      }
    } 


    if ((0,lodash.isEmpty)(subQueries)) {
      return (0,of.of)({
        data: [],
        state: src.LoadingState.Done
      });
    }

    return (0,merge.T)(...subQueries);
  }

  runLiveQueryThroughBackend(request) {
    const logsQueries = request.targets.filter(query => query.expr !== '' && !isMetricsQuery(query.expr));

    if (logsQueries.length === 0) {
      return (0,of.of)({
        data: [],
        state: src.LoadingState.Done
      });
    }

    const subQueries = logsQueries.map(query => {
      const maxDataPoints = query.maxLines || this.maxLines; 

      return this.runLiveQuery(query, maxDataPoints);
    });
    return (0,merge.T)(...subQueries);
  }

  createRangeQuery(target, options, limit) {
    const query = target.expr;
    let range = {};

    if (options.range) {
      const startNs = this.getTime(options.range.from, false);
      const endNs = this.getTime(options.range.to, true);
      const rangeMs = Math.ceil((endNs - startNs) / 1e6);
      const resolution = target.resolution || LokiOptionFields.TQ.value;
      const adjustedInterval = this.adjustInterval(options.intervalMs || 1000, resolution, rangeMs) / 1000; 

      const step = Math.ceil(adjustedInterval * 1000) / 1000;
      range = {
        start: startNs,
        end: endNs,
        step
      };
    }

    return Object.assign({}, DEFAULT_QUERY_PARAMS, range, {
      query,
      limit,
      direction: target.direction === loki_types.sb.Forward ? 'FORWARD' : 'BACKWARD'
    });
  }


  createLiveTarget(target, maxDataPoints) {
    const query = target.expr;
    const baseUrl = this.instanceSettings.url;
    const params = (0,fetch.tW)({
      query
    });
    return {
      query,
      url: (0,explore.F3)(`${baseUrl}/loki/api/v1/tail?${params}`),
      refId: target.refId,
      size: maxDataPoints
    };
  }


  getRangeScopedVars() {
    let range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.timeSrv.timeRange();
    const msRange = range.to.diff(range.from);
    const sRange = Math.round(msRange / 1000);
    return {
      __range_ms: {
        text: msRange,
        value: msRange
      },
      __range_s: {
        text: sRange,
        value: sRange
      },
      __range: {
        text: sRange + 's',
        value: sRange + 's'
      }
    };
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    let expandedQueries = queries;

    if (queries && queries.length) {
      expandedQueries = queries.map(query => Object.assign({}, query, {
        datasource: this.getRef(),
        expr: this.templateSrv.replace(query.expr, scopedVars, this.interpolateQueryExpr)
      }));
    }

    return expandedQueries;
  }

  getQueryDisplayText(query) {
    return query.expr;
  }

  getTimeRangeParams() {
    const timeRange = this.timeSrv.timeRange();
    return {
      start: timeRange.from.valueOf() * datasource_NS_IN_MS,
      end: timeRange.to.valueOf() * datasource_NS_IN_MS
    };
  }

  async importFromAbstractQueries(abstractQueries) {
    await this.languageProvider.start();
    const existingKeys = this.languageProvider.labelKeys;

    if (existingKeys && existingKeys.length) {
      abstractQueries = abstractQueries.map(abstractQuery => {
        abstractQuery.labelMatchers = abstractQuery.labelMatchers.filter(labelMatcher => {
          return existingKeys.includes(labelMatcher.name);
        });
        return abstractQuery;
      });
    }

    return abstractQueries.map(abstractQuery => this.languageProvider.importFromAbstractQuery(abstractQuery));
  }

  async exportToAbstractQueries(queries) {
    return queries.map(query => this.languageProvider.exportToAbstractQuery(query));
  }

  async metadataRequest(url, params) {
    if (url.startsWith('/')) {
      throw new Error(`invalid metadata request url: ${url}`);
    }

    const res = await this.getResource(url, params);
    return res.data || [];
  }

  async metricFindQuery(query) {
    if (!query) {
      return Promise.resolve([]);
    }

    const interpolated = this.templateSrv.replace(query, {}, this.interpolateQueryExpr);
    return await this.processMetricFindQuery(interpolated);
  }

  async processMetricFindQuery(query) {
    const labelNamesRegex = /^label_names\(\)\s*$/;
    const labelValuesRegex = /^label_values\((?:(.+),\s*)?([a-zA-Z_][a-zA-Z0-9_]*)\)\s*$/;
    const labelNames = query.match(labelNamesRegex);

    if (labelNames) {
      return await this.labelNamesQuery();
    }

    const labelValues = query.match(labelValuesRegex);

    if (labelValues) {
      if (labelValues[1]) {
        return await this.labelValuesSeriesQuery(labelValues[1], labelValues[2]);
      }

      return await this.labelValuesQuery(labelValues[2]);
    }

    return Promise.resolve([]);
  }

  async labelNamesQuery() {
    const url = 'labels';
    const params = this.getTimeRangeParams();
    const result = await this.metadataRequest(url, params);
    return result.map(value => ({
      text: value
    }));
  }

  async labelValuesQuery(label) {
    const params = this.getTimeRangeParams();
    const url = `label/${label}/values`;
    const result = await this.metadataRequest(url, params);
    return result.map(value => ({
      text: value
    }));
  }

  async labelValuesSeriesQuery(expr, label) {
    const timeParams = this.getTimeRangeParams();
    const params = Object.assign({}, timeParams, {
      'match[]': expr
    });
    const url = 'series';
    const streams = new Set();
    const result = await this.metadataRequest(url, params);
    result.forEach(stream => {
      if (stream[label]) {
        streams.add({
          text: stream[label]
        });
      }
    });
    return Array.from(streams);
  } 


  async getTagKeys() {
    return await this.labelNamesQuery();
  }

  async getTagValues() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return await this.labelValuesQuery(options.key);
  }

  interpolateQueryExpr(value, variable) {
    if (!variable.multi && !variable.includeAll) {
      return lokiRegularEscape(value);
    }

    if (typeof value === 'string') {
      return lokiSpecialRegexEscape(value);
    }

    const escapedValues = (0,lodash.map)(value, lokiSpecialRegexEscape);
    return escapedValues.join('|');
  }

  modifyQuery(query, action) {
    var _query$expr;

    let expression = (_query$expr = query.expr) !== null && _query$expr !== void 0 ? _query$expr : '';

    switch (action.type) {
      case 'ADD_FILTER':
        {
          expression = this.addLabelToQuery(expression, action.key, action.value, '=');
          break;
        }

      case 'ADD_FILTER_OUT':
        {
          expression = this.addLabelToQuery(expression, action.key, action.value, '!=');
          break;
        }

      default:
        break;
    }

    return Object.assign({}, query, {
      expr: expression
    });
  }

  getTime(date, roundUp) {
    if (typeof date === 'string') {
      date = src.dateMath.parse(date, roundUp);
    }

    return Math.ceil(date.valueOf() * 1e6);
  }

  testDatasource() {
    const nowMs = Date.now();
    const params = {
      start: (nowMs - 10 * 60 * 1000) * datasource_NS_IN_MS,
      end: nowMs * datasource_NS_IN_MS
    };
    return this.metadataRequest('labels', params).then(values => {
      return values.length > 0 ? {
        status: 'success',
        message: 'Data source connected and labels found.'
      } : {
        status: 'error',
        message: 'Data source connected, but no labels received. Verify that Loki and Promtail is configured properly.'
      };
    }, err => {
      var _err$data$message, _err$data;

      const info = (_err$data$message = err === null || err === void 0 ? void 0 : (_err$data = err.data) === null || _err$data === void 0 ? void 0 : _err$data.message) !== null && _err$data$message !== void 0 ? _err$data$message : '';
      const infoInParentheses = info !== '' ? ` (${info})` : '';
      const message = `Unable to fetch labels from Loki${infoInParentheses}, please check the server logs for more details`;
      return {
        status: 'error',
        message: message
      };
    });
  }

  async annotationQuery(options) {
    const {
      expr,
      maxLines,
      instant,
      tagKeys = '',
      titleFormat = '',
      textFormat = ''
    } = options.annotation;

    if (!expr) {
      return [];
    }

    const id = `annotation-${options.annotation.name}`;
    const query = {
      refId: id,
      expr,
      maxLines,
      instant,
      queryType: instant ? loki_types.EM.Instant : loki_types.EM.Range
    };
    const request = makeRequest(query, options.range, src.CoreApp.Dashboard, id);
    const {
      data
    } = await (0,lastValueFrom.n)(this.query(request));
    const annotations = [];
    const splitKeys = tagKeys.split(',').filter(v => v !== '');

    for (const frame of data) {
      const view = new src.DataFrameView(frame);
      view.forEach(row => {
        const {
          labels
        } = row;
        const maybeDuplicatedTags = Object.entries(labels).map(_ref => {
          let [key, val] = _ref;
          return [key, val.trim()];
        }) 
        .filter(_ref2 => {
          let [key, val] = _ref2;

          if (val === '') {
            return false;
          } 


          if (splitKeys.length && !splitKeys.includes(key)) {
            return false;
          }

          return true;
        }).map(_ref3 => {
          let [key, val] = _ref3;
          return val;
        }); 

        const tags = Array.from(new Set(maybeDuplicatedTags));
        annotations.push({
          time: new Date(row.ts).valueOf(),
          title: (0,legend.W)(titleFormat, labels),
          text: (0,legend.W)(textFormat, labels) || row.line,
          tags
        });
      });
    }

    return annotations;
  }

  showContextToggle(row) {
    return (row && row.searchWords && row.searchWords.length > 0) === true;
  }

  processError(err, target) {
    let error = (0,lodash.cloneDeep)(err);
    error.refId = target.refId;

    if (error.data && err.data.message.includes('escape') && target.expr.includes('\\')) {
      error.data.message = `Error: ${err.data.message}. Make sure that all special characters are escaped with \\. For more information on escaping of special characters visit LogQL documentation at https://grafana.com/docs/loki/latest/logql/.`;
    }

    return error;
  }

  adjustInterval(dynamicInterval, resolution, range) {
    let safeInterval = range / 11000;

    if (safeInterval > 1) {
      safeInterval = Math.ceil(safeInterval);
    }

    let adjustedInterval = Math.max(resolution * dynamicInterval, safeInterval);
    return adjustedInterval;
  }

  addAdHocFilters(queryExpr) {
    const adhocFilters = this.templateSrv.getAdhocFilters(this.name);
    let expr = queryExpr;
    expr = adhocFilters.reduce((acc, filter) => {
      const {
        key,
        operator
      } = filter;
      let {
        value
      } = filter;
      return this.addLabelToQuery(acc, key, value, operator, true);
    }, expr);
    return expr;
  }

  addLabelToQuery(queryExpr, key, value, operator, 
  notParsedLabelOverride) {
    let escapedValue = (0,language_utils.Hk)(value.toString(), operator);

    if (queryHasPipeParser(queryExpr) && !isMetricsQuery(queryExpr) && !notParsedLabelOverride) {
      return addParsedLabelToQuery(queryExpr, key, escapedValue, operator);
    } else {
      return addLabelToQuery(queryExpr, key, escapedValue, operator, true);
    }
  } 


  filterQuery(query) {
    if (query.hide || query.expr === '') {
      return false;
    }

    return true;
  } 


  applyTemplateVariables(target, scopedVars) {
    const rest = datasource_objectWithoutPropertiesLoose(scopedVars, datasource_excluded);

    return Object.assign({}, target, {
      legendFormat: this.templateSrv.replace(target.legendFormat, rest),
      expr: this.templateSrv.replace(target.expr, rest, this.interpolateQueryExpr)
    });
  }

  interpolateString(string) {
    return this.templateSrv.replace(string, undefined, this.interpolateQueryExpr);
  }

  getVariables() {
    return this.templateSrv.getVariables().map(v => `$${v.name}`);
  }

}
function lokiRegularEscape(value) {
  if (typeof value === 'string') {
    return value.replace(/'/g, "\\\\'");
  }

  return value;
}
function lokiSpecialRegexEscape(value) {
  if (typeof value === 'string') {
    return lokiRegularEscape(value.replace(/\\/g, '\\\\\\\\').replace(/[$^*{}\[\]+?.()|]/g, '\\\\$&'));
  }

  return value;
}

function isMetricsQuery(query) {
  if (!query) {
    return false;
  }

  const tokens = prism_default().tokenize(query, syntax.ZP);
  return tokens.some(t => {
    return typeof t !== 'string' && t.type === 'function';
  });
}

function extractLevel(dataFrame) {
  var _valueField;

  let valueField;

  try {
    valueField = new src.FieldCache(dataFrame).getFirstFieldOfType(src.FieldType.number);
  } catch {}

  return (_valueField = valueField) !== null && _valueField !== void 0 && _valueField.labels ? getLogLevelFromLabels(valueField.labels) : src.LogLevel.unknown;
}

function getLogLevelFromLabels(labels) {
  const labelNames = ['level', 'lvl', 'loglevel'];
  let levelLabel;

  for (let labelName of labelNames) {
    if (labelName in labels) {
      levelLabel = labelName;
      break;
    }
  }

  return levelLabel ? (0,src.getLogLevelFromKey)(labels[levelLabel]) : src.LogLevel.unknown;
}
;










const LokiQueryBuilderOptions = react.memo(_ref => {
  var _query$queryType, _query$maxLines$toStr, _query$maxLines;

  let {
    query,
    onChange,
    onRunQuery
  } = _ref;

  const onQueryTypeChange = value => {
    onChange(Object.assign({}, query, {
      queryType: value
    }));
    onRunQuery();
  };

  const onResolutionChange = option => {
    onChange(Object.assign({}, query, {
      resolution: option.value
    }));
    onRunQuery();
  };

  const onLegendFormatChanged = evt => {
    onChange(Object.assign({}, query, {
      legendFormat: evt.currentTarget.value
    }));
    onRunQuery();
  };

  function onMaxLinesChange(e) {
    const newMaxLines = (0,LokiOptionFields.Wz)(e.currentTarget.value);

    if (query.maxLines !== newMaxLines) {
      onChange(Object.assign({}, query, {
        maxLines: newMaxLines
      }));
      onRunQuery();
    }
  }

  let queryType = (_query$queryType = query.queryType) !== null && _query$queryType !== void 0 ? _query$queryType : query.instant ? loki_types.EM.Instant : loki_types.EM.Range;
  let showMaxLines = !isMetricsQuery(query.expr);
  return (0,jsx_runtime.jsx)(experimental.EditorRow, {
    children: (0,jsx_runtime.jsxs)(QueryOptionGroup.d, {
      title: "Options",
      collapsedInfo: getCollapsedInfo(query, queryType, showMaxLines),
      children: [(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Legend",
        tooltip: "Series name override or template. Ex. {{hostname}} will be replaced with label value for hostname.",
        children: (0,jsx_runtime.jsx)(AutoSizeInput.H, {
          placeholder: "{{label}}",
          id: "loki-query-editor-legend-format",
          type: "string",
          minWidth: 14,
          defaultValue: query.legendFormat,
          onCommitChange: onLegendFormatChanged
        })
      }), (0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Type",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
          options: LokiOptionFields.uG,
          value: queryType,
          onChange: onQueryTypeChange
        })
      }), showMaxLines && (0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Line limit",
        tooltip: "Upper limit for number of log lines returned by query.",
        children: (0,jsx_runtime.jsx)(AutoSizeInput.H, {
          className: "width-4",
          placeholder: "auto",
          type: "number",
          min: 0,
          defaultValue: (_query$maxLines$toStr = (_query$maxLines = query.maxLines) === null || _query$maxLines === void 0 ? void 0 : _query$maxLines.toString()) !== null && _query$maxLines$toStr !== void 0 ? _query$maxLines$toStr : '',
          onCommitChange: onMaxLinesChange
        })
      }), (0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Resolution",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          isSearchable: false,
          onChange: onResolutionChange,
          options: LokiOptionFields.oZ,
          value: query.resolution || 1,
          "aria-label": "Select resolution"
        })
      })]
    })
  });
});

function getCollapsedInfo(query, queryType, showMaxLines) {
  const queryTypeLabel = LokiOptionFields.uG.find(x => x.value === queryType);
  const resolutionLabel = LokiOptionFields.oZ.find(x => {
    var _query$resolution;

    return x.value === ((_query$resolution = query.resolution) !== null && _query$resolution !== void 0 ? _query$resolution : 1);
  });
  const items = [];

  if (query.legendFormat) {
    items.push(`Legend: ${query.legendFormat}`);
  }

  if (query.resolution) {
    items.push(`Resolution: ${resolutionLabel === null || resolutionLabel === void 0 ? void 0 : resolutionLabel.label}`);
  }

  items.push(`Type: ${queryTypeLabel === null || queryTypeLabel === void 0 ? void 0 : queryTypeLabel.label}`);

  if (showMaxLines && query.maxLines) {
    items.push(`Line limit: ${query.maxLines}`);
  }

  return items;
}

LokiQueryBuilderOptions.displayName = 'LokiQueryBuilderOptions';
var LokiQueryField = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiQueryField.tsx");
;
var _InlineFormLabel;








function LokiQueryEditor(props) {
  var _query$maxLines;

  const {
    query,
    data,
    datasource,
    onChange,
    onRunQuery,
    range
  } = props;

  const onLegendChange = e => {
    const nextQuery = Object.assign({}, query, {
      legendFormat: e.currentTarget.value
    });
    onChange(nextQuery);
  };

  const legendField = (0,jsx_runtime.jsx)("div", {
    className: "gf-form-inline",
    children: (0,jsx_runtime.jsxs)("div", {
      className: "gf-form",
      children: [_InlineFormLabel || (_InlineFormLabel = (0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
        width: 6,
        tooltip: "Controls the name of the time series, using name or pattern. For example {{hostname}} will be replaced with label value for the label hostname. The legend only applies to metric queries.",
        children: "Legend"
      })), (0,jsx_runtime.jsx)("input", {
        type: "text",
        className: "gf-form-input",
        placeholder: "legend format",
        value: query.legendFormat || '',
        onChange: onLegendChange,
        onBlur: onRunQuery
      })]
    })
  });

  return (0,jsx_runtime.jsx)(LokiQueryField.n, {
    datasource: datasource,
    query: query,
    onChange: onChange,
    onRunQuery: onRunQuery,
    onBlur: onRunQuery,
    history: [],
    data: data,
    "data-testid": testIds.editor,
    range: range,
    ExtraFieldElement: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(LokiOptionFields.JX, {
        lineLimitValue: (query === null || query === void 0 ? void 0 : (_query$maxLines = query.maxLines) === null || _query$maxLines === void 0 ? void 0 : _query$maxLines.toString()) || '',
        resolution: (query === null || query === void 0 ? void 0 : query.resolution) || 1,
        query: query,
        onRunQuery: onRunQuery,
        onChange: onChange,
        runOnBlur: true
      }), legendField]
    })
  });
}
const testIds = {
  editor: 'loki-editor'
};
;






function LokiQueryCodeEditor(_ref) {
  let {
    query,
    datasource,
    range,
    onRunQuery,
    onChange,
    data
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(LokiQueryCodeEditor_getStyles);
  return (0,jsx_runtime.jsx)("div", {
    className: styles.wrapper,
    children: (0,jsx_runtime.jsx)(LokiQueryField.n, {
      datasource: datasource,
      query: query,
      range: range,
      onRunQuery: onRunQuery,
      onChange: onChange,
      history: [],
      data: data,
      "data-testid": testIds.editor
    })
  });
}

const LokiQueryCodeEditor_getStyles = theme => {
  return {
    wrapper: emotion_css_esm.css`
      .gf-form {
        margin-bottom: 0;
      }
    `
  };
};
;
var LokiQueryEditorSelector_FlexItem, _Space;


















const LokiQueryEditorSelector = react.memo(props => {
  var _query$editorMode;

  const {
    onChange,
    onRunQuery,
    data
  } = props;
  const [parseModalOpen, setParseModalOpen] = (0,react.useState)(false);
  const [dataIsStale, setDataIsStale] = (0,react.useState)(false);
  const query = getQueryWithDefaults(props.query);
  const onEditorModeChange = (0,react.useCallback)(newEditorMode => {
    if (newEditorMode === types.c.Builder) {
      const result = buildVisualQueryFromString(query.expr || ''); 

      if (result.errors.length) {
        setParseModalOpen(true);
        return;
      }
    }

    changeEditorMode(query, newEditorMode, onChange);
  }, [onChange, query]);
  (0,react.useEffect)(() => {
    setDataIsStale(false);
  }, [data]);

  const onChangeInternal = query => {
    setDataIsStale(true);
    onChange(query);
  };

  const onQueryPreviewChange = event => {
    const isEnabled = event.currentTarget.checked;
    onChange(Object.assign({}, query, {
      rawQuery: isEnabled
    }));
  }; 


  const editorMode = (_query$editorMode = query.editorMode) !== null && _query$editorMode !== void 0 ? _query$editorMode : query.expr ? types.c.Code : types.c.Builder;
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.ConfirmModal, {
      isOpen: parseModalOpen,
      title: "Query parsing",
      body: "There were errors while trying to parse the query. Continuing to visual builder may loose some parts of the query.",
      confirmText: "Continue",
      onConfirm: () => {
        onChange(Object.assign({}, query, {
          editorMode: types.c.Builder
        }));
        setParseModalOpen(false);
      },
      onDismiss: () => setParseModalOpen(false)
    }), (0,jsx_runtime.jsxs)(experimental.EditorHeader, {
      children: [editorMode === types.c.Builder && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [(0,jsx_runtime.jsx)(experimental.InlineSelect, {
          value: null,
          placeholder: "Query patterns",
          allowCustomValue: true,
          onChange: _ref => {
            let {
              value
            } = _ref;
            const result = buildVisualQueryFromString(query.expr || '');
            result.query.operations = value === null || value === void 0 ? void 0 : value.operations;
            onChange(Object.assign({}, query, {
              expr: lokiQueryModeller.renderQuery(result.query)
            }));
          },
          options: lokiQueryModeller.getQueryPatterns().map(x => ({
            label: x.name,
            value: x
          }))
        }), (0,jsx_runtime.jsx)(QueryHeaderSwitch.n, {
          label: "Raw query",
          value: query.rawQuery,
          onChange: onQueryPreviewChange
        })]
      }), LokiQueryEditorSelector_FlexItem || (LokiQueryEditorSelector_FlexItem = (0,jsx_runtime.jsx)(experimental.FlexItem, {
        grow: 1
      })), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: dataIsStale ? 'primary' : 'secondary',
        size: "sm",
        onClick: onRunQuery,
        icon: (data === null || data === void 0 ? void 0 : data.state) === src.LoadingState.Loading ? 'fa fa-spinner' : undefined,
        disabled: (data === null || data === void 0 ? void 0 : data.state) === src.LoadingState.Loading,
        children: "Run query"
      }), (0,jsx_runtime.jsx)(QueryEditorModeToggle.k, {
        mode: editorMode,
        onChange: onEditorModeChange
      })]
    }), _Space || (_Space = (0,jsx_runtime.jsx)(experimental.Space, {
      v: 0.5
    })), (0,jsx_runtime.jsxs)(experimental.EditorRows, {
      children: [editorMode === types.c.Code && (0,jsx_runtime.jsx)(LokiQueryCodeEditor, Object.assign({}, props)), editorMode === types.c.Builder && (0,jsx_runtime.jsx)(LokiQueryBuilderContainer, {
        datasource: props.datasource,
        query: query,
        onChange: onChangeInternal,
        onRunQuery: props.onRunQuery
      }), editorMode === types.c.Explain && (0,jsx_runtime.jsx)(LokiQueryBuilderExplained, {
        query: query.expr
      }), editorMode !== types.c.Explain && (0,jsx_runtime.jsx)(LokiQueryBuilderOptions, {
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery
      })]
    })]
  });
});
LokiQueryEditorSelector.displayName = 'LokiQueryEditorSelector';
;




const LokiExploreQueryEditor = (0,react.memo)(props => {
  var _query$maxLines;

  const {
    query,
    data,
    datasource,
    history,
    onChange,
    onRunQuery,
    range
  } = props;
  return (0,jsx_runtime.jsx)(LokiQueryField.n, {
    datasource: datasource,
    query: query,
    onChange: onChange,
    onBlur: () => {},
    onRunQuery: onRunQuery,
    history: history,
    data: data,
    range: range,
    "data-testid": LokiExploreQueryEditor_testIds.editor,
    ExtraFieldElement: (0,jsx_runtime.jsx)(LokiOptionFields.JX, {
      lineLimitValue: (query === null || query === void 0 ? void 0 : (_query$maxLines = query.maxLines) === null || _query$maxLines === void 0 ? void 0 : _query$maxLines.toString()) || '',
      resolution: query.resolution || 1,
      query: query,
      onRunQuery: onRunQuery,
      onChange: onChange
    })
  });
});
LokiExploreQueryEditor.displayName = 'LokiExploreQueryEditor';
const LokiExploreQueryEditor_testIds = {
  editor: 'loki-editor-explore'
};
;



function LokiQueryEditorForAlerting(props) {
  const {
    query,
    data,
    datasource,
    onChange,
    onRunQuery
  } = props;
  return (0,jsx_runtime.jsx)(LokiQueryField.n, {
    datasource: datasource,
    query: query,
    onChange: onChange,
    onRunQuery: onRunQuery,
    onBlur: onRunQuery,
    history: [],
    data: data,
    placeholder: "Enter a Loki query",
    "data-testid": LokiQueryEditorForAlerting_testIds.editor
  });
}
const LokiQueryEditorForAlerting_testIds = {
  editor: 'loki-editor-cloud-alerting'
};
;








function LokiQueryEditorByApp(props) {
  const {
    app
  } = props;

  switch (app) {
    case src.CoreApp.CloudAlerting:
      return (0,jsx_runtime.jsx)(LokiQueryEditorForAlerting, Object.assign({}, props));

    case src.CoreApp.Explore:
      if (grafana_runtime_src.config.featureToggles.lokiQueryBuilder) {
        return (0,jsx_runtime.jsx)(LokiQueryEditorSelector, Object.assign({}, props));
      }

      return (0,jsx_runtime.jsx)(LokiExploreQueryEditor, Object.assign({}, props));

    default:
      if (grafana_runtime_src.config.featureToggles.lokiQueryBuilder) {
        return (0,jsx_runtime.jsx)(LokiQueryEditorSelector, Object.assign({}, props));
      }

      return (0,jsx_runtime.jsx)(LokiQueryEditor, Object.assign({}, props));
  }
}
 const components_LokiQueryEditorByApp = ((0,react.memo)(LokiQueryEditorByApp));
var alertmanager = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
var classnames = __webpack_require__("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js");
var classnames_default = __webpack_require__.n(classnames);
var links = __webpack_require__("./public/app/features/explore/utils/links.ts");
;
var _thead;









const {
  FormField
} = grafana_ui_src.LegacyForms;
const DebugSection = props => {
  const {
    derivedFields,
    className
  } = props;
  const [debugText, setDebugText] = (0,react.useState)('');
  let debugFields = [];

  if (debugText && derivedFields) {
    debugFields = makeDebugFields(derivedFields, debugText);
  }

  return (0,jsx_runtime.jsxs)("div", {
    className: className,
    children: [(0,jsx_runtime.jsx)(FormField, {
      labelWidth: 12,
      label: 'Debug log message',
      inputEl: (0,jsx_runtime.jsx)("textarea", {
        placeholder: 'Paste an example log line here to test the regular expressions of your derived fields',
        className: classnames_default()('gf-form-input gf-form-textarea', emotion_css_esm.css`
                width: 100%;
              `),
        value: debugText,
        onChange: event => setDebugText(event.currentTarget.value)
      })
    }), !!debugFields.length && (0,jsx_runtime.jsx)(DebugFields, {
      fields: debugFields
    })]
  });
};

const DebugFields = _ref => {
  let {
    fields
  } = _ref;
  return (0,jsx_runtime.jsxs)("table", {
    className: 'filter-table',
    children: [_thead || (_thead = (0,jsx_runtime.jsx)("thead", {
      children: (0,jsx_runtime.jsxs)("tr", {
        children: [(0,jsx_runtime.jsx)("th", {
          children: "Name"
        }), (0,jsx_runtime.jsx)("th", {
          children: "Value"
        }), (0,jsx_runtime.jsx)("th", {
          children: "Url"
        })]
      })
    })), (0,jsx_runtime.jsx)("tbody", {
      children: fields.map(field => {
        let value = field.value;

        if (field.error) {
          value = field.error.message;
        } else if (field.href) {
          value = (0,jsx_runtime.jsx)("a", {
            href: field.href,
            children: value
          });
        }

        return (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("td", {
            children: field.name
          }), (0,jsx_runtime.jsx)("td", {
            children: value
          }), (0,jsx_runtime.jsx)("td", {
            children: field.href ? (0,jsx_runtime.jsx)("a", {
              href: field.href,
              children: field.href
            }) : ''
          })]
        }, `${field.name}=${field.value}`);
      })
    })]
  });
};

function makeDebugFields(derivedFields, debugText) {
  return derivedFields.filter(field => field.name && field.matcherRegex).map(field => {
    try {
      const testMatch = debugText.match(field.matcherRegex);
      const value = testMatch && testMatch[1];
      let link = null;

      if (field.url && value) {
        link = (0,links.a)({
          field: {
            name: '',
            type: src.FieldType.string,
            values: new src.ArrayVector([value]),
            config: {
              links: [{
                title: '',
                url: field.url
              }]
            }
          },
          rowIndex: 0,
          range: {}
        })[0];
      }

      return {
        name: field.name,
        value: value || '<no match>',
        href: link && link.href
      };
    } catch (error) {
      return {
        name: field.name,
        error
      };
    }
  });
}
var usePrevious = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js");
;







const {
  Switch,
  FormField: DerivedField_FormField
} = grafana_ui_src.LegacyForms;
const DerivedField_getStyles = (0,grafana_ui_src.stylesFactory)(() => ({
  row: emotion_css_esm.css`
    display: flex;
    align-items: baseline;
  `,
  nameField: emotion_css_esm.css`
    flex: 2;
  `,
  regexField: emotion_css_esm.css`
    flex: 3;
  `,
  urlField: emotion_css_esm.css`
    flex: 1;
  `,
  urlDisplayLabelField: emotion_css_esm.css`
    flex: 1;
  `
}));
const DerivedField = props => {
  const {
    value,
    onChange,
    onDelete,
    suggestions,
    className
  } = props;
  const styles = DerivedField_getStyles();
  const [showInternalLink, setShowInternalLink] = (0,react.useState)(!!value.datasourceUid);
  const previousUid = (0,usePrevious.Z)(value.datasourceUid); 

  (0,react.useEffect)(() => {
    if (!previousUid && value.datasourceUid && !showInternalLink) {
      setShowInternalLink(true);
    }

    if (previousUid && !value.datasourceUid && showInternalLink) {
      setShowInternalLink(false);
    }
  }, [previousUid, value.datasourceUid, showInternalLink]);

  const handleChange = field => event => {
    onChange(Object.assign({}, value, {
      [field]: event.currentTarget.value
    }));
  };

  return (0,jsx_runtime.jsxs)("div", {
    className: className,
    children: [(0,jsx_runtime.jsxs)("div", {
      className: styles.row,
      children: [(0,jsx_runtime.jsx)(DerivedField_FormField, {
        className: styles.nameField,
        labelWidth: 5 
        ,
        inputWidth: null,
        label: "Name",
        type: "text",
        value: value.name,
        onChange: handleChange('name')
      }), (0,jsx_runtime.jsx)(DerivedField_FormField, {
        className: styles.regexField,
        inputWidth: null,
        label: "Regex",
        type: "text",
        value: value.matcherRegex,
        onChange: handleChange('matcherRegex'),
        tooltip: 'Use to parse and capture some part of the log message. You can use the captured groups in the template.'
      }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "destructive",
        title: "Remove field",
        icon: "times",
        onClick: event => {
          event.preventDefault();
          onDelete();
        },
        className: emotion_css_esm.css`
            margin-left: 8px;
          `
      })]
    }), (0,jsx_runtime.jsxs)("div", {
      className: styles.row,
      children: [(0,jsx_runtime.jsx)(DerivedField_FormField, {
        label: showInternalLink ? 'Query' : 'URL',
        inputEl: (0,jsx_runtime.jsx)(grafana_ui_src.DataLinkInput, {
          placeholder: showInternalLink ? '${__value.raw}' : 'http://example.com/${__value.raw}',
          value: value.url || '',
          onChange: newValue => onChange(Object.assign({}, value, {
            url: newValue
          })),
          suggestions: suggestions
        }),
        className: styles.urlField
      }), (0,jsx_runtime.jsx)(DerivedField_FormField, {
        className: styles.urlDisplayLabelField,
        inputWidth: null,
        label: "URL Label",
        type: "text",
        value: value.urlDisplayLabel,
        onChange: handleChange('urlDisplayLabel'),
        tooltip: 'Use to override the button label when this derived field is found in a log.'
      })]
    }), (0,jsx_runtime.jsxs)("div", {
      className: styles.row,
      children: [(0,jsx_runtime.jsx)(Switch, {
        label: "Internal link",
        checked: showInternalLink,
        onChange: () => {
          if (showInternalLink) {
            onChange(Object.assign({}, value, {
              datasourceUid: undefined
            }));
          }

          setShowInternalLink(!showInternalLink);
        }
      }), showInternalLink && (0,jsx_runtime.jsx)(grafana_runtime_src.DataSourcePicker, {
        tracing: true,
        onChange: ds => onChange(Object.assign({}, value, {
          datasourceUid: ds.uid
        })),
        current: value.datasourceUid
      })]
    })]
  });
};
;
var DerivedFields_h;











const DerivedFields_getStyles = theme => ({
  infoText: emotion_css_esm.css`
    padding-bottom: ${theme.spacing(2)};
    color: ${theme.colors.text.secondary};
  `,
  derivedField: emotion_css_esm.css`
    margin-bottom: ${theme.spacing(1)};
  `
});

const DerivedFields = props => {
  const {
    value,
    onChange
  } = props;
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = DerivedFields_getStyles(theme);
  const [showDebug, setShowDebug] = (0,react.useState)(false);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [DerivedFields_h || (DerivedFields_h = (0,jsx_runtime.jsx)("h3", {
      className: "page-heading",
      children: "Derived fields"
    })), (0,jsx_runtime.jsx)("div", {
      className: styles.infoText,
      children: "Derived fields can be used to extract new fields from a log message and create a link from its value."
    }), (0,jsx_runtime.jsxs)("div", {
      className: "gf-form-group",
      children: [value && value.map((field, index) => {
        return (0,jsx_runtime.jsx)(DerivedField, {
          className: styles.derivedField,
          value: field,
          onChange: newField => {
            const newDerivedFields = [...value];
            newDerivedFields.splice(index, 1, newField);
            onChange(newDerivedFields);
          },
          onDelete: () => {
            const newDerivedFields = [...value];
            newDerivedFields.splice(index, 1);
            onChange(newDerivedFields);
          },
          suggestions: [{
            value: src.DataLinkBuiltInVars.valueRaw,
            label: 'Raw value',
            documentation: 'Exact string captured by the regular expression',
            origin: src.VariableOrigin.Value
          }]
        }, index);
      }), (0,jsx_runtime.jsxs)("div", {
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "secondary",
          className: emotion_css_esm.css`
              margin-right: 10px;
            `,
          icon: "plus",
          onClick: event => {
            event.preventDefault();
            const newDerivedFields = [...(value || []), {
              name: '',
              matcherRegex: ''
            }];
            onChange(newDerivedFields);
          },
          children: "Add"
        }), value && value.length > 0 && (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "secondary",
          type: "button",
          onClick: () => setShowDebug(!showDebug),
          children: showDebug ? 'Hide example log message' : 'Show example log message'
        })]
      })]
    }), showDebug && (0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: (0,jsx_runtime.jsx)(DebugSection, {
        className: emotion_css_esm.css`
              margin-bottom: 10px;
            `,
        derivedFields: value
      })
    })]
  });
};
;




const {
  FormField: MaxLinesField_FormField
} = grafana_ui_src.LegacyForms;
const MaxLinesField = props => {
  const {
    value,
    onChange
  } = props;
  return (0,jsx_runtime.jsx)(MaxLinesField_FormField, {
    label: "Maximum lines",
    labelWidth: 11,
    inputWidth: 20,
    inputEl: (0,jsx_runtime.jsx)("input", {
      type: "number",
      className: "gf-form-input width-8 gf-form-input--has-help-icon",
      value: value,
      onChange: event => onChange(event.currentTarget.value),
      spellCheck: false,
      placeholder: "1000"
    }),
    tooltip: (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: "Loki queries must contain a limit of the maximum number of lines returned (default: 1000). Increase this limit to have a bigger result set for ad-hoc analysis. Decrease this limit if your browser becomes sluggish when displaying the log results."
    })
  });
};
;









const makeJsonUpdater = field => (options, value) => {
  return Object.assign({}, options, {
    jsonData: Object.assign({}, options.jsonData, {
      [field]: value
    })
  });
};

const setMaxLines = makeJsonUpdater('maxLines');
const setDerivedFields = makeJsonUpdater('derivedFields');
const ConfigEditor = props => {
  const {
    options,
    onOptionsChange
  } = props;
  const alertmanagers = (0,alertmanager.Tc)();
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.DataSourceHttpSettings, {
      defaultUrl: 'http://localhost:3100',
      dataSourceConfig: options,
      showAccessOptions: false,
      onChange: onOptionsChange
    }), (0,jsx_runtime.jsx)(grafana_ui_src.AlertingSettings, {
      alertmanagerDataSources: alertmanagers,
      options: options,
      onOptionsChange: onOptionsChange
    }), (0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: (0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: (0,jsx_runtime.jsx)("div", {
          className: "gf-form",
          children: (0,jsx_runtime.jsx)(MaxLinesField, {
            value: options.jsonData.maxLines || '',
            onChange: value => onOptionsChange(setMaxLines(options, value))
          })
        })
      })
    }), (0,jsx_runtime.jsx)(DerivedFields, {
      value: options.jsonData.derivedFields,
      onChange: value => onOptionsChange(setDerivedFields(options, value))
    })]
  });
};
;






const module_plugin = new src.DataSourcePlugin(LokiDatasource).setQueryEditor(components_LokiQueryEditorByApp).setConfigEditor(ConfigEditor).setQueryEditorHelp(LokiCheatSheet).setAnnotationQueryCtrl(LokiAnnotationsQueryCtrl);

 }),

 "./public/app/plugins/datasource/loki/types.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "EM": () => ( LokiQueryType),
   "ox": () => ( LokiResultType),
   "sb": () => ( LokiQueryDirection)
 });
let LokiResultType;

(function (LokiResultType) {
  LokiResultType["Stream"] = "streams";
  LokiResultType["Vector"] = "vector";
  LokiResultType["Matrix"] = "matrix";
})(LokiResultType || (LokiResultType = {}));

let LokiQueryType;

(function (LokiQueryType) {
  LokiQueryType["Range"] = "range";
  LokiQueryType["Instant"] = "instant";
  LokiQueryType["Stream"] = "stream";
})(LokiQueryType || (LokiQueryType = {}));

let LokiQueryDirection;

(function (LokiQueryDirection) {
  LokiQueryDirection["Backward"] = "backward";
  LokiQueryDirection["Forward"] = "forward";
})(LokiQueryDirection || (LokiQueryDirection = {}));

 })

}]);