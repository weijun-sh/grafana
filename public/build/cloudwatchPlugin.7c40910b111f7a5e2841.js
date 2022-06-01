(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[8831],{

/***/ "./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/language.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AND": () => (/* binding */ AND),
/* harmony export */   "ASC": () => (/* binding */ ASC),
/* harmony export */   "BY": () => (/* binding */ BY),
/* harmony export */   "COMPARISON_OPERATORS": () => (/* binding */ COMPARISON_OPERATORS),
/* harmony export */   "DESC": () => (/* binding */ DESC),
/* harmony export */   "EQUALS": () => (/* binding */ EQUALS),
/* harmony export */   "FROM": () => (/* binding */ FROM),
/* harmony export */   "GROUP": () => (/* binding */ GROUP),
/* harmony export */   "KEYWORDS": () => (/* binding */ KEYWORDS),
/* harmony export */   "LIMIT": () => (/* binding */ LIMIT),
/* harmony export */   "LOGICAL_OPERATORS": () => (/* binding */ LOGICAL_OPERATORS),
/* harmony export */   "NOT_EQUALS": () => (/* binding */ NOT_EQUALS),
/* harmony export */   "ORDER": () => (/* binding */ ORDER),
/* harmony export */   "SCHEMA": () => (/* binding */ SCHEMA),
/* harmony export */   "SELECT": () => (/* binding */ SELECT),
/* harmony export */   "STATISTICS": () => (/* binding */ STATISTICS),
/* harmony export */   "WHERE": () => (/* binding */ WHERE),
/* harmony export */   "WITH": () => (/* binding */ WITH),
/* harmony export */   "conf": () => (/* binding */ conf),
/* harmony export */   "language": () => (/* binding */ language)
/* harmony export */ });
const SELECT = 'SELECT';
const FROM = 'FROM';
const WHERE = 'WHERE';
const GROUP = 'GROUP';
const ORDER = 'ORDER';
const BY = 'BY';
const DESC = 'DESC';
const ASC = 'ASC';
const LIMIT = 'LIMIT';
const WITH = 'WITH';
const SCHEMA = 'SCHEMA';
const KEYWORDS = [SELECT, FROM, WHERE, GROUP, ORDER, BY, DESC, ASC, LIMIT, WITH, SCHEMA];
const STATISTICS = ['AVG', 'COUNT', 'MAX', 'MIN', 'SUM'];
const AND = 'AND';
const LOGICAL_OPERATORS = [AND];
const EQUALS = '=';
const NOT_EQUALS = '!=';
const COMPARISON_OPERATORS = [EQUALS, NOT_EQUALS];
const language = {
  defaultToken: '',
  tokenPostfix: '.sql',
  ignoreCase: true,
  brackets: [{
    open: '[',
    close: ']',
    token: 'delimiter.square'
  }, {
    open: '(',
    close: ')',
    token: 'delimiter.parenthesis'
  }],
  keywords: KEYWORDS,
  operators: LOGICAL_OPERATORS,
  builtinFunctions: STATISTICS,
  tokenizer: {
    root: [[/\$[a-zA-Z0-9-_]+/, 'variable'], {
      include: '@comments'
    }, {
      include: '@whitespace'
    }, {
      include: '@numbers'
    }, {
      include: '@strings'
    }, {
      include: '@complexIdentifiers'
    }, [/[;,.]/, 'delimiter'], [/[()]/, '@brackets'], [/[\w@#$]+/, {
      cases: {
        '@keywords': 'keyword',
        '@operators': 'operator',
        '@builtinFunctions': 'predefined',
        '@default': 'identifier'
      }
    }], [/[=!%&+\-*/|~^]/, 'operator'] // TODO: strip these options
    ],
    whitespace: [[/\s+/, 'white']],
    comments: [[/--+.*/, 'comment']],
    comment: [[/[^*/]+/, 'comment'], [/./, 'comment']],
    numbers: [[/0[xX][0-9a-fA-F]*/, 'number'], [/[$][+-]*\d*(\.\d*)?/, 'number'], [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, 'number']],
    strings: [[/N'/, {
      token: 'string',
      next: '@string'
    }], [/'/, {
      token: 'string',
      next: '@string'
    }], [/"/, {
      token: 'type',
      next: '@string_double'
    }]],
    string: [[/[^']+/, 'string'], [/''/, 'string'], [/'/, {
      token: 'string',
      next: '@pop'
    }]],
    string_double: [[/[^\\"]+/, 'type'], [/"/, 'type', '@pop']],
    complexIdentifiers: [[/\[/, {
      token: 'identifier.quote',
      next: '@bracketedIdentifier'
    }], [/"/, {
      token: 'identifier.quote',
      next: '@quotedIdentifier'
    }]],
    bracketedIdentifier: [[/[^\]]+/, 'identifier'], [/]]/, 'identifier'], [/]/, {
      token: 'identifier.quote',
      next: '@pop'
    }]],
    quotedIdentifier: [[/[^"]+/, 'identifier'], [/""/, 'identifier'], [/"/, {
      token: 'identifier.quote',
      next: '@pop'
    }]]
  }
};
const conf = {
  comments: {
    lineComment: '--',
    blockComment: ['/*', '*/']
  },
  brackets: [['{', '}'], ['[', ']'], ['(', ')']],
  autoClosingPairs: [{
    open: '{',
    close: '}'
  }, {
    open: '[',
    close: ']'
  }, {
    open: '(',
    close: ')'
  }, {
    open: '"',
    close: '"'
  }, {
    open: "'",
    close: "'"
  }],
  surroundingPairs: [{
    open: '{',
    close: '}'
  }, {
    open: '[',
    close: ']'
  }, {
    open: '(',
    close: ')'
  }, {
    open: '"',
    close: '"'
  }, {
    open: "'",
    close: "'"
  }]
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/metric-math/language.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "METRIC_MATH_FNS": () => (/* binding */ METRIC_MATH_FNS),
/* harmony export */   "METRIC_MATH_KEYWORDS": () => (/* binding */ METRIC_MATH_KEYWORDS),
/* harmony export */   "METRIC_MATH_OPERATORS": () => (/* binding */ METRIC_MATH_OPERATORS),
/* harmony export */   "METRIC_MATH_PERIODS": () => (/* binding */ METRIC_MATH_PERIODS),
/* harmony export */   "METRIC_MATH_STATISTIC_KEYWORD_STRINGS": () => (/* binding */ METRIC_MATH_STATISTIC_KEYWORD_STRINGS),
/* harmony export */   "conf": () => (/* binding */ conf),
/* harmony export */   "language": () => (/* binding */ language)
/* harmony export */ });
// Metric Math: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html
const METRIC_MATH_FNS = ['ABS', 'ANOMALY_DETECTION_BAND', 'AVG', 'CEIL', 'DATAPOINT_COUNT', 'DIFF', 'DIFF_TIME', 'FILL', 'FIRST', 'LAST', 'FLOOR', 'IF', 'INSIGHT_RULE_METRIC', 'LOG', 'LOG10', 'MAX', 'METRIC_COUNT', 'METRICS', 'MIN', 'MINUTE', 'HOUR', 'DAY', 'DATE', 'MONTH', 'YEAR', 'EPOCH', 'PERIOD', 'RATE', 'REMOVE_EMPTY', 'RUNNING_SUM', 'SEARCH', 'SERVICE_QUOTA', 'SLICE', 'SORT', 'STDDEV', 'SUM', 'TIME_SERIES'];
const METRIC_MATH_STATISTIC_KEYWORD_STRINGS = ['Average', 'Maximum', 'Minimum', 'Sum', 'SampleCount']; // second arguments to SEARCH function

const METRIC_MATH_KEYWORDS = ['REPEAT', 'LINEAR', 'ASC', 'DSC']; // standalone magic arguments to functions

const METRIC_MATH_OPERATORS = ['+', '-', '*', '/', '^', '==', '!=', '<=', '>=', '<', '>', 'AND', '&&', 'OR', '||'];
const METRIC_MATH_PERIODS = [10, 60, 300, 900, 3000, 21600, 86400];
const language = {
  id: 'metricMath',
  ignoreCase: false,
  brackets: [{
    open: '[',
    close: ']',
    token: 'delimiter.square'
  }, {
    open: '(',
    close: ')',
    token: 'delimiter.parenthesis'
  }, {
    open: '{',
    close: '}',
    token: 'delimiter.curly'
  }],
  tokenizer: {
    root: [{
      include: '@nonNestableStates'
    }, {
      include: '@strings'
    }],
    nonNestableStates: [{
      include: '@variables'
    }, {
      include: '@whitespace'
    }, {
      include: '@numbers'
    }, {
      include: '@assignment'
    }, {
      include: '@keywords'
    }, {
      include: '@operators'
    }, {
      include: '@builtInFunctions'
    }, [/[;,.]/, 'delimiter'], [/[(){}\[\]]/, '@brackets'] // [], (), {} are all brackets
    ],
    keywords: [[METRIC_MATH_KEYWORDS.map(escapeRegExp).join('|'), 'keyword']],
    operators: [[METRIC_MATH_OPERATORS.map(escapeRegExp).join('|'), 'operator']],
    builtInFunctions: [[METRIC_MATH_FNS.map(escapeRegExp).join('|'), 'predefined']],
    variables: [[/\$[a-zA-Z0-9-_]+/, 'variable'] // $ followed by any letter/number we assume could be grafana template variable
    ],
    whitespace: [[/\s+/, 'white']],
    assignment: [[/=/, 'tag']],
    numbers: [[/0[xX][0-9a-fA-F]*/, 'number'], [/[$][+-]*\d*(\.\d*)?/, 'number'], [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, 'number']],
    // states that start other states (aka nested states):
    strings: [[/'/, {
      token: 'string',
      next: '@string'
    }], [/"/, {
      token: 'type',
      next: '@string_double'
    }]],
    string: [[/{/, {
      token: 'delimiter.curly',
      next: '@nestedCurly'
    }], // escape out of string and into nestedCurly
    [/\(/, {
      token: 'delimiter.parenthesis',
      next: '@nestedParens'
    }], // escape out of string and into nestedCurly
    [/"/, {
      token: 'type',
      next: '@string_double'
    }], // jump into double string
    [/'/, {
      token: 'string',
      next: '@pop'
    }], // stop being a string
    {
      include: '@nonNestableStates'
    }, [/[^']/, 'string'] // anything that is not a quote, is marked as string
    ],
    string_double: [[/[^"]/, 'type'], // mark anything not a quote as a "type" (different type of string for visual difference)
    [/"/, {
      token: 'type',
      next: '@pop'
    }] // mark also as a type and stop being in the double string state
    ],
    nestedCurly: [[/}/, {
      token: 'delimiter.curly',
      next: '@pop'
    }], // escape out of string and into braces
    [/'/, {
      token: 'string',
      next: '@string'
    }], // go to string if see start of string
    [/"/, {
      token: 'type',
      next: '@string_double'
    }] // go to string_double if see start of double string
    ],
    nestedParens: [[/\)/, {
      token: 'delimiter.parenthesis',
      next: '@pop'
    }], // escape out of string and into braces
    [/'/, {
      token: 'string',
      next: '@string'
    }], // go to string if see start of string
    [/"/, {
      token: 'type',
      next: '@string_double'
    }] // go to string_double if see start of double string
    ]
  }
};
const conf = {
  brackets: [['{', '}'], ['[', ']'], ['(', ')']],
  autoClosingPairs: [{
    open: '{',
    close: '}'
  }, {
    open: '[',
    close: ']'
  }, {
    open: '(',
    close: ')'
  }, {
    open: '"',
    close: '"'
  }, {
    open: "'",
    close: "'"
  }],
  surroundingPairs: [{
    open: '{',
    close: '}'
  }, {
    open: '[',
    close: ']'
  }, {
    open: '(',
    close: ')'
  }, {
    open: '"',
    close: '"'
  }, {
    open: "'",
    close: "'"
  }]
};

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloudwatch/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "plugin": () => (/* binding */ module_plugin)
});

// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js + 1 modules
var useDebounce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
// EXTERNAL MODULE: ./.yarn/cache/@grafana-aws-sdk-npm-0.0.35-2945fc38a2-c286e5ccaa.zip/node_modules/@grafana/aws-sdk/index.js
var aws_sdk = __webpack_require__("./.yarn/cache/@grafana-aws-sdk-npm-0.0.35-2945fc38a2-c286e5ccaa.zip/node_modules/@grafana/aws-sdk/index.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/actions/index.ts
var actions = __webpack_require__("./public/app/core/actions/index.ts");
// EXTERNAL MODULE: ./public/app/core/copy/appNotification.ts
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
// EXTERNAL MODULE: ./public/app/features/plugins/datasource_srv.ts
var datasource_srv = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
// EXTERNAL MODULE: ./public/app/store/store.ts
var store = __webpack_require__("./public/app/store/store.ts");
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/XrayLinkConfig.tsx
var _h, _Alert;










const getStyles = theme => ({
  infoText: emotion_css_esm.css`
    padding-bottom: ${theme.spacing(2)};
    color: ${theme.colors.text.secondary};
  `
});

const xRayDsId = 'grafana-x-ray-datasource';
function XrayLinkConfig(_ref) {
  let {
    datasourceUid,
    onChange
  } = _ref;
  const hasXrayDatasource = Boolean((0,datasource_srv/* getDatasourceSrv */.ak)().getList({
    pluginId: xRayDsId
  }).length);
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
      className: "page-heading",
      children: "X-ray trace link"
    })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.infoText,
      children: "Grafana will automatically create a link to a trace in X-ray data source if logs contain @xrayTraceId field"
    }), !hasXrayDatasource && (_Alert || (_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      title: 'There is no X-ray datasource to link to. First add an X-ray data source and then link it to Cloud Watch. ',
      severity: "info"
    }))), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        htmlFor: "data-source-picker",
        label: "Data source",
        labelWidth: 28,
        tooltip: "X-ray data source containing traces",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_runtime_src.DataSourcePicker, {
          pluginId: xRayDsId,
          onChange: ds => onChange(ds.uid),
          current: datasourceUid,
          noDefault: true
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/ConfigEditor.tsx
var ConfigEditor_h;














const ConfigEditor = props => {
  const {
    options
  } = props;
  const datasource = useDatasource(options.name);
  useAuthenticationWarning(options.jsonData);
  const logsTimeoutError = useTimoutValidation(props.options.jsonData.logsTimeout);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(aws_sdk.ConnectionConfig, Object.assign({}, props, {
      loadRegions: datasource && (() => datasource.getRegions().then(r => r.filter(r => r.value !== 'default').map(v => v.value))),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Namespaces of Custom Metrics",
        labelWidth: 28,
        tooltip: "Namespaces of Custom Metrics.",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          width: 60,
          placeholder: "Namespace1,Namespace2",
          value: options.jsonData.customMetricsNamespaces || '',
          onChange: (0,src.onUpdateDatasourceJsonDataOption)(props, 'customMetricsNamespaces')
        })
      })
    })), ConfigEditor_h || (ConfigEditor_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
      className: "page-heading",
      children: "CloudWatch Logs"
    })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Timeout",
        labelWidth: 28,
        tooltip: "Custom timout for CloudWatch Logs insights queries which have max concurrency limits. Default is 15 minutes. Must be a valid duration string, such as \"15m\" \"30s\" \"2000ms\" etc.",
        invalid: Boolean(logsTimeoutError),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          width: 60,
          placeholder: "15m",
          value: options.jsonData.logsTimeout || '',
          onChange: (0,src.onUpdateDatasourceJsonDataOption)(props, 'logsTimeout'),
          title: 'The timeout must be a valid duration string, such as "15m" "30s" "2000ms" etc.'
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(XrayLinkConfig, {
      onChange: uid => (0,src.updateDatasourcePluginJsonDataOption)(props, 'tracingDatasourceUid', uid),
      datasourceUid: options.jsonData.tracingDatasourceUid
    })]
  });
};

function useAuthenticationWarning(jsonData) {
  const addWarning = message => {
    store/* store.dispatch */.h.dispatch((0,actions/* notifyApp */.$l)((0,appNotification/* createWarningNotification */.ZR)('CloudWatch Authentication', message)));
  };

  (0,react.useEffect)(() => {
    if (jsonData.authType === 'arn') {
      addWarning('Since grafana 7.3 authentication type "arn" is deprecated, falling back to default SDK provider');
    } else if (jsonData.authType === 'credentials' && !jsonData.profile && !jsonData.database) {
      addWarning('As of grafana 7.3 authentication type "credentials" should be used only for shared file credentials. \
             If you don\'t have a credentials file, switch to the default SDK provider for extracting credentials \
             from environment variables or IAM roles');
    }
  }, [jsonData.authType, jsonData.database, jsonData.profile]);
}

function useDatasource(datasourceName) {
  const [datasource, setDatasource] = (0,react.useState)();
  (0,react.useEffect)(() => {
    (0,datasource_srv/* getDatasourceSrv */.ak)().loadDatasource(datasourceName).then(datasource => {
      // It's really difficult to type .loadDatasource() because it's inherently untyped as it involves two JSON.parse()'s
      // So a "as" type assertion here is a necessary evil.
      setDatasource(datasource);
    });
  }, [datasourceName]);
  return datasource;
}

function useTimoutValidation(value) {
  const [err, setErr] = (0,react.useState)(undefined);
  (0,useDebounce/* default */.Z)(() => {
    if (value) {
      try {
        src.rangeUtil.describeInterval(value);
        setErr(undefined);
      } catch (e) {
        setErr(e.toString());
      }
    } else {
      setErr(undefined);
    }
  }, 350, [value]);
  return err;
}
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/TemplateTag.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class TemplateTag
 * @classdesc Consumes a pipeline of composable transformer plugins and produces a template tag.
 */
var TemplateTag = function () {
  /**
   * constructs a template tag
   * @constructs TemplateTag
   * @param  {...Object} [...transformers] - an array or arguments list of transformers
   * @return {Function}                    - a template tag
   */
  function TemplateTag() {
    var _this = this;

    for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
      transformers[_key] = arguments[_key];
    }

    _classCallCheck(this, TemplateTag);

    this.tag = function (strings) {
      for (var _len2 = arguments.length, expressions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        expressions[_key2 - 1] = arguments[_key2];
      }

      if (typeof strings === 'function') {
        // if the first argument passed is a function, assume it is a template tag and return
        // an intermediary tag that processes the template using the aforementioned tag, passing the
        // result to our tag
        return _this.interimTag.bind(_this, strings);
      }

      if (typeof strings === 'string') {
        // if the first argument passed is a string, just transform it
        return _this.transformEndResult(strings);
      }

      // else, return a transformed end result of processing the template with our tag
      strings = strings.map(_this.transformString.bind(_this));
      return _this.transformEndResult(strings.reduce(_this.processSubstitutions.bind(_this, expressions)));
    };

    // if first argument is an array, extrude it as a list of transformers
    if (transformers.length > 0 && Array.isArray(transformers[0])) {
      transformers = transformers[0];
    }

    // if any transformers are functions, this means they are not initiated - automatically initiate them
    this.transformers = transformers.map(function (transformer) {
      return typeof transformer === 'function' ? transformer() : transformer;
    });

    // return an ES2015 template tag
    return this.tag;
  }

  /**
   * Applies all transformers to a template literal tagged with this method.
   * If a function is passed as the first argument, assumes the function is a template tag
   * and applies it to the template, returning a template tag.
   * @param  {(Function|String|Array<String>)} strings        - Either a template tag or an array containing template strings separated by identifier
   * @param  {...*}                            ...expressions - Optional list of substitution values.
   * @return {(String|Function)}                              - Either an intermediary tag function or the results of processing the template.
   */


  _createClass(TemplateTag, [{
    key: 'interimTag',


    /**
     * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
     * template tag to our own template tag.
     * @param  {Function}        nextTag          - the received template tag
     * @param  {Array<String>}   template         - the template to process
     * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
     * @return {*}                                - the final processed value
     */
    value: function interimTag(previousTag, template) {
      for (var _len3 = arguments.length, substitutions = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        substitutions[_key3 - 2] = arguments[_key3];
      }

      return this.tag(_templateObject, previousTag.apply(undefined, [template].concat(substitutions)));
    }

    /**
     * Performs bulk processing on the tagged template, transforming each substitution and then
     * concatenating the resulting values into a string.
     * @param  {Array<*>} substitutions - an array of all remaining substitutions present in this template
     * @param  {String}   resultSoFar   - this iteration's result string so far
     * @param  {String}   remainingPart - the template chunk after the current substitution
     * @return {String}                 - the result of joining this iteration's processed substitution with the result
     */

  }, {
    key: 'processSubstitutions',
    value: function processSubstitutions(substitutions, resultSoFar, remainingPart) {
      var substitution = this.transformSubstitution(substitutions.shift(), resultSoFar);
      return ''.concat(resultSoFar, substitution, remainingPart);
    }

    /**
     * Iterate through each transformer, applying the transformer's `onString` method to the template
     * strings before all substitutions are processed.
     * @param {String}  str - The input string
     * @return {String}     - The final results of processing each transformer
     */

  }, {
    key: 'transformString',
    value: function transformString(str) {
      var cb = function cb(res, transform) {
        return transform.onString ? transform.onString(res) : res;
      };
      return this.transformers.reduce(cb, str);
    }

    /**
     * When a substitution is encountered, iterates through each transformer and applies the transformer's
     * `onSubstitution` method to the substitution.
     * @param  {*}      substitution - The current substitution
     * @param  {String} resultSoFar  - The result up to and excluding this substitution.
     * @return {*}                   - The final result of applying all substitution transformations.
     */

  }, {
    key: 'transformSubstitution',
    value: function transformSubstitution(substitution, resultSoFar) {
      var cb = function cb(res, transform) {
        return transform.onSubstitution ? transform.onSubstitution(res, resultSoFar) : res;
      };
      return this.transformers.reduce(cb, substitution);
    }

    /**
     * Iterates through each transformer, applying the transformer's `onEndResult` method to the
     * template literal after all substitutions have finished processing.
     * @param  {String} endResult - The processed template, just before it is returned from the tag
     * @return {String}           - The final results of processing each transformer
     */

  }, {
    key: 'transformEndResult',
    value: function transformEndResult(endResult) {
      var cb = function cb(res, transform) {
        return transform.onEndResult ? transform.onEndResult(res) : res;
      };
      return this.transformers.reduce(cb, endResult);
    }
  }]);

  return TemplateTag;
}();

/* harmony default export */ const TemplateTag_TemplateTag = (TemplateTag);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZW1wbGF0ZVRhZy9UZW1wbGF0ZVRhZy5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInRyYW5zZm9ybWVycyIsInRhZyIsInN0cmluZ3MiLCJleHByZXNzaW9ucyIsImludGVyaW1UYWciLCJiaW5kIiwidHJhbnNmb3JtRW5kUmVzdWx0IiwibWFwIiwidHJhbnNmb3JtU3RyaW5nIiwicmVkdWNlIiwicHJvY2Vzc1N1YnN0aXR1dGlvbnMiLCJsZW5ndGgiLCJBcnJheSIsImlzQXJyYXkiLCJ0cmFuc2Zvcm1lciIsInByZXZpb3VzVGFnIiwidGVtcGxhdGUiLCJzdWJzdGl0dXRpb25zIiwicmVzdWx0U29GYXIiLCJyZW1haW5pbmdQYXJ0Iiwic3Vic3RpdHV0aW9uIiwidHJhbnNmb3JtU3Vic3RpdHV0aW9uIiwic2hpZnQiLCJjb25jYXQiLCJzdHIiLCJjYiIsInJlcyIsInRyYW5zZm9ybSIsIm9uU3RyaW5nIiwib25TdWJzdGl0dXRpb24iLCJlbmRSZXN1bHQiLCJvbkVuZFJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQUlxQkEsVztBQUNuQjs7Ozs7O0FBTUEseUJBQTZCO0FBQUE7O0FBQUEsc0NBQWRDLFlBQWM7QUFBZEEsa0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxTQXVCN0JDLEdBdkI2QixHQXVCdkIsVUFBQ0MsT0FBRCxFQUE2QjtBQUFBLHlDQUFoQkMsV0FBZ0I7QUFBaEJBLG1CQUFnQjtBQUFBOztBQUNqQyxVQUFJLE9BQU9ELE9BQVAsS0FBbUIsVUFBdkIsRUFBbUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsZUFBTyxNQUFLRSxVQUFMLENBQWdCQyxJQUFoQixDQUFxQixLQUFyQixFQUEyQkgsT0FBM0IsQ0FBUDtBQUNEOztBQUVELFVBQUksT0FBT0EsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUMvQjtBQUNBLGVBQU8sTUFBS0ksa0JBQUwsQ0FBd0JKLE9BQXhCLENBQVA7QUFDRDs7QUFFRDtBQUNBQSxnQkFBVUEsUUFBUUssR0FBUixDQUFZLE1BQUtDLGVBQUwsQ0FBcUJILElBQXJCLENBQTBCLEtBQTFCLENBQVosQ0FBVjtBQUNBLGFBQU8sTUFBS0Msa0JBQUwsQ0FDTEosUUFBUU8sTUFBUixDQUFlLE1BQUtDLG9CQUFMLENBQTBCTCxJQUExQixDQUErQixLQUEvQixFQUFxQ0YsV0FBckMsQ0FBZixDQURLLENBQVA7QUFHRCxLQXpDNEI7O0FBQzNCO0FBQ0EsUUFBSUgsYUFBYVcsTUFBYixHQUFzQixDQUF0QixJQUEyQkMsTUFBTUMsT0FBTixDQUFjYixhQUFhLENBQWIsQ0FBZCxDQUEvQixFQUErRDtBQUM3REEscUJBQWVBLGFBQWEsQ0FBYixDQUFmO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFLQSxZQUFMLEdBQW9CQSxhQUFhTyxHQUFiLENBQWlCLHVCQUFlO0FBQ2xELGFBQU8sT0FBT08sV0FBUCxLQUF1QixVQUF2QixHQUFvQ0EsYUFBcEMsR0FBb0RBLFdBQTNEO0FBQ0QsS0FGbUIsQ0FBcEI7O0FBSUE7QUFDQSxXQUFPLEtBQUtiLEdBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7Ozs7Ozs7OytCQVFXYyxXLEVBQWFDLFEsRUFBNEI7QUFBQSx5Q0FBZkMsYUFBZTtBQUFmQSxxQkFBZTtBQUFBOztBQUNsRCxhQUFPLEtBQUtoQixHQUFaLGtCQUFrQmMsOEJBQVlDLFFBQVosU0FBeUJDLGFBQXpCLEVBQWxCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7O3lDQVFxQkEsYSxFQUFlQyxXLEVBQWFDLGEsRUFBZTtBQUM5RCxVQUFNQyxlQUFlLEtBQUtDLHFCQUFMLENBQ25CSixjQUFjSyxLQUFkLEVBRG1CLEVBRW5CSixXQUZtQixDQUFyQjtBQUlBLGFBQU8sR0FBR0ssTUFBSCxDQUFVTCxXQUFWLEVBQXVCRSxZQUF2QixFQUFxQ0QsYUFBckMsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7b0NBTWdCSyxHLEVBQUs7QUFDbkIsVUFBTUMsS0FBSyxTQUFMQSxFQUFLLENBQUNDLEdBQUQsRUFBTUMsU0FBTjtBQUFBLGVBQ1RBLFVBQVVDLFFBQVYsR0FBcUJELFVBQVVDLFFBQVYsQ0FBbUJGLEdBQW5CLENBQXJCLEdBQStDQSxHQUR0QztBQUFBLE9BQVg7QUFFQSxhQUFPLEtBQUsxQixZQUFMLENBQWtCUyxNQUFsQixDQUF5QmdCLEVBQXpCLEVBQTZCRCxHQUE3QixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7MENBT3NCSixZLEVBQWNGLFcsRUFBYTtBQUMvQyxVQUFNTyxLQUFLLFNBQUxBLEVBQUssQ0FBQ0MsR0FBRCxFQUFNQyxTQUFOO0FBQUEsZUFDVEEsVUFBVUUsY0FBVixHQUNJRixVQUFVRSxjQUFWLENBQXlCSCxHQUF6QixFQUE4QlIsV0FBOUIsQ0FESixHQUVJUSxHQUhLO0FBQUEsT0FBWDtBQUlBLGFBQU8sS0FBSzFCLFlBQUwsQ0FBa0JTLE1BQWxCLENBQXlCZ0IsRUFBekIsRUFBNkJMLFlBQTdCLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O3VDQU1tQlUsUyxFQUFXO0FBQzVCLFVBQU1MLEtBQUssU0FBTEEsRUFBSyxDQUFDQyxHQUFELEVBQU1DLFNBQU47QUFBQSxlQUNUQSxVQUFVSSxXQUFWLEdBQXdCSixVQUFVSSxXQUFWLENBQXNCTCxHQUF0QixDQUF4QixHQUFxREEsR0FENUM7QUFBQSxPQUFYO0FBRUEsYUFBTyxLQUFLMUIsWUFBTCxDQUFrQlMsTUFBbEIsQ0FBeUJnQixFQUF6QixFQUE2QkssU0FBN0IsQ0FBUDtBQUNEOzs7Ozs7ZUFuSGtCL0IsVyIsImZpbGUiOiJUZW1wbGF0ZVRhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNsYXNzIFRlbXBsYXRlVGFnXG4gKiBAY2xhc3NkZXNjIENvbnN1bWVzIGEgcGlwZWxpbmUgb2YgY29tcG9zYWJsZSB0cmFuc2Zvcm1lciBwbHVnaW5zIGFuZCBwcm9kdWNlcyBhIHRlbXBsYXRlIHRhZy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVUYWcge1xuICAvKipcbiAgICogY29uc3RydWN0cyBhIHRlbXBsYXRlIHRhZ1xuICAgKiBAY29uc3RydWN0cyBUZW1wbGF0ZVRhZ1xuICAgKiBAcGFyYW0gIHsuLi5PYmplY3R9IFsuLi50cmFuc2Zvcm1lcnNdIC0gYW4gYXJyYXkgb3IgYXJndW1lbnRzIGxpc3Qgb2YgdHJhbnNmb3JtZXJzXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICAgICAgICAgICAgICAgLSBhIHRlbXBsYXRlIHRhZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoLi4udHJhbnNmb3JtZXJzKSB7XG4gICAgLy8gaWYgZmlyc3QgYXJndW1lbnQgaXMgYW4gYXJyYXksIGV4dHJ1ZGUgaXQgYXMgYSBsaXN0IG9mIHRyYW5zZm9ybWVyc1xuICAgIGlmICh0cmFuc2Zvcm1lcnMubGVuZ3RoID4gMCAmJiBBcnJheS5pc0FycmF5KHRyYW5zZm9ybWVyc1swXSkpIHtcbiAgICAgIHRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVyc1swXTtcbiAgICB9XG5cbiAgICAvLyBpZiBhbnkgdHJhbnNmb3JtZXJzIGFyZSBmdW5jdGlvbnMsIHRoaXMgbWVhbnMgdGhleSBhcmUgbm90IGluaXRpYXRlZCAtIGF1dG9tYXRpY2FsbHkgaW5pdGlhdGUgdGhlbVxuICAgIHRoaXMudHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLm1hcCh0cmFuc2Zvcm1lciA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRyYW5zZm9ybWVyID09PSAnZnVuY3Rpb24nID8gdHJhbnNmb3JtZXIoKSA6IHRyYW5zZm9ybWVyO1xuICAgIH0pO1xuXG4gICAgLy8gcmV0dXJuIGFuIEVTMjAxNSB0ZW1wbGF0ZSB0YWdcbiAgICByZXR1cm4gdGhpcy50YWc7XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBhbGwgdHJhbnNmb3JtZXJzIHRvIGEgdGVtcGxhdGUgbGl0ZXJhbCB0YWdnZWQgd2l0aCB0aGlzIG1ldGhvZC5cbiAgICogSWYgYSBmdW5jdGlvbiBpcyBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LCBhc3N1bWVzIHRoZSBmdW5jdGlvbiBpcyBhIHRlbXBsYXRlIHRhZ1xuICAgKiBhbmQgYXBwbGllcyBpdCB0byB0aGUgdGVtcGxhdGUsIHJldHVybmluZyBhIHRlbXBsYXRlIHRhZy5cbiAgICogQHBhcmFtICB7KEZ1bmN0aW9ufFN0cmluZ3xBcnJheTxTdHJpbmc+KX0gc3RyaW5ncyAgICAgICAgLSBFaXRoZXIgYSB0ZW1wbGF0ZSB0YWcgb3IgYW4gYXJyYXkgY29udGFpbmluZyB0ZW1wbGF0ZSBzdHJpbmdzIHNlcGFyYXRlZCBieSBpZGVudGlmaWVyXG4gICAqIEBwYXJhbSAgey4uLip9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmV4cHJlc3Npb25zIC0gT3B0aW9uYWwgbGlzdCBvZiBzdWJzdGl0dXRpb24gdmFsdWVzLlxuICAgKiBAcmV0dXJuIHsoU3RyaW5nfEZ1bmN0aW9uKX0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIEVpdGhlciBhbiBpbnRlcm1lZGlhcnkgdGFnIGZ1bmN0aW9uIG9yIHRoZSByZXN1bHRzIG9mIHByb2Nlc3NpbmcgdGhlIHRlbXBsYXRlLlxuICAgKi9cbiAgdGFnID0gKHN0cmluZ3MsIC4uLmV4cHJlc3Npb25zKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzdHJpbmdzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBpZiB0aGUgZmlyc3QgYXJndW1lbnQgcGFzc2VkIGlzIGEgZnVuY3Rpb24sIGFzc3VtZSBpdCBpcyBhIHRlbXBsYXRlIHRhZyBhbmQgcmV0dXJuXG4gICAgICAvLyBhbiBpbnRlcm1lZGlhcnkgdGFnIHRoYXQgcHJvY2Vzc2VzIHRoZSB0ZW1wbGF0ZSB1c2luZyB0aGUgYWZvcmVtZW50aW9uZWQgdGFnLCBwYXNzaW5nIHRoZVxuICAgICAgLy8gcmVzdWx0IHRvIG91ciB0YWdcbiAgICAgIHJldHVybiB0aGlzLmludGVyaW1UYWcuYmluZCh0aGlzLCBzdHJpbmdzKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHN0cmluZ3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBpZiB0aGUgZmlyc3QgYXJndW1lbnQgcGFzc2VkIGlzIGEgc3RyaW5nLCBqdXN0IHRyYW5zZm9ybSBpdFxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtRW5kUmVzdWx0KHN0cmluZ3MpO1xuICAgIH1cblxuICAgIC8vIGVsc2UsIHJldHVybiBhIHRyYW5zZm9ybWVkIGVuZCByZXN1bHQgb2YgcHJvY2Vzc2luZyB0aGUgdGVtcGxhdGUgd2l0aCBvdXIgdGFnXG4gICAgc3RyaW5ncyA9IHN0cmluZ3MubWFwKHRoaXMudHJhbnNmb3JtU3RyaW5nLmJpbmQodGhpcykpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUVuZFJlc3VsdChcbiAgICAgIHN0cmluZ3MucmVkdWNlKHRoaXMucHJvY2Vzc1N1YnN0aXR1dGlvbnMuYmluZCh0aGlzLCBleHByZXNzaW9ucykpLFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFuIGludGVybWVkaWFyeSB0ZW1wbGF0ZSB0YWcgdGhhdCByZWNlaXZlcyBhIHRlbXBsYXRlIHRhZyBhbmQgcGFzc2VzIHRoZSByZXN1bHQgb2YgY2FsbGluZyB0aGUgdGVtcGxhdGUgd2l0aCB0aGUgcmVjZWl2ZWRcbiAgICogdGVtcGxhdGUgdGFnIHRvIG91ciBvd24gdGVtcGxhdGUgdGFnLlxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gICAgICAgIG5leHRUYWcgICAgICAgICAgLSB0aGUgcmVjZWl2ZWQgdGVtcGxhdGUgdGFnXG4gICAqIEBwYXJhbSAge0FycmF5PFN0cmluZz59ICAgdGVtcGxhdGUgICAgICAgICAtIHRoZSB0ZW1wbGF0ZSB0byBwcm9jZXNzXG4gICAqIEBwYXJhbSAgey4uLip9ICAgICAgICAgICAgLi4uc3Vic3RpdHV0aW9ucyAtIGBzdWJzdGl0dXRpb25zYCBpcyBhbiBhcnJheSBvZiBhbGwgc3Vic3RpdHV0aW9ucyBpbiB0aGUgdGVtcGxhdGVcbiAgICogQHJldHVybiB7Kn0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gdGhlIGZpbmFsIHByb2Nlc3NlZCB2YWx1ZVxuICAgKi9cbiAgaW50ZXJpbVRhZyhwcmV2aW91c1RhZywgdGVtcGxhdGUsIC4uLnN1YnN0aXR1dGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy50YWdgJHtwcmV2aW91c1RhZyh0ZW1wbGF0ZSwgLi4uc3Vic3RpdHV0aW9ucyl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBidWxrIHByb2Nlc3Npbmcgb24gdGhlIHRhZ2dlZCB0ZW1wbGF0ZSwgdHJhbnNmb3JtaW5nIGVhY2ggc3Vic3RpdHV0aW9uIGFuZCB0aGVuXG4gICAqIGNvbmNhdGVuYXRpbmcgdGhlIHJlc3VsdGluZyB2YWx1ZXMgaW50byBhIHN0cmluZy5cbiAgICogQHBhcmFtICB7QXJyYXk8Kj59IHN1YnN0aXR1dGlvbnMgLSBhbiBhcnJheSBvZiBhbGwgcmVtYWluaW5nIHN1YnN0aXR1dGlvbnMgcHJlc2VudCBpbiB0aGlzIHRlbXBsYXRlXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICByZXN1bHRTb0ZhciAgIC0gdGhpcyBpdGVyYXRpb24ncyByZXN1bHQgc3RyaW5nIHNvIGZhclxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgcmVtYWluaW5nUGFydCAtIHRoZSB0ZW1wbGF0ZSBjaHVuayBhZnRlciB0aGUgY3VycmVudCBzdWJzdGl0dXRpb25cbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgICAgICAgLSB0aGUgcmVzdWx0IG9mIGpvaW5pbmcgdGhpcyBpdGVyYXRpb24ncyBwcm9jZXNzZWQgc3Vic3RpdHV0aW9uIHdpdGggdGhlIHJlc3VsdFxuICAgKi9cbiAgcHJvY2Vzc1N1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgcmVzdWx0U29GYXIsIHJlbWFpbmluZ1BhcnQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnRyYW5zZm9ybVN1YnN0aXR1dGlvbihcbiAgICAgIHN1YnN0aXR1dGlvbnMuc2hpZnQoKSxcbiAgICAgIHJlc3VsdFNvRmFyLFxuICAgICk7XG4gICAgcmV0dXJuICcnLmNvbmNhdChyZXN1bHRTb0Zhciwgc3Vic3RpdHV0aW9uLCByZW1haW5pbmdQYXJ0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIHRocm91Z2ggZWFjaCB0cmFuc2Zvcm1lciwgYXBwbHlpbmcgdGhlIHRyYW5zZm9ybWVyJ3MgYG9uU3RyaW5nYCBtZXRob2QgdG8gdGhlIHRlbXBsYXRlXG4gICAqIHN0cmluZ3MgYmVmb3JlIGFsbCBzdWJzdGl0dXRpb25zIGFyZSBwcm9jZXNzZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSAgc3RyIC0gVGhlIGlucHV0IHN0cmluZ1xuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAtIFRoZSBmaW5hbCByZXN1bHRzIG9mIHByb2Nlc3NpbmcgZWFjaCB0cmFuc2Zvcm1lclxuICAgKi9cbiAgdHJhbnNmb3JtU3RyaW5nKHN0cikge1xuICAgIGNvbnN0IGNiID0gKHJlcywgdHJhbnNmb3JtKSA9PlxuICAgICAgdHJhbnNmb3JtLm9uU3RyaW5nID8gdHJhbnNmb3JtLm9uU3RyaW5nKHJlcykgOiByZXM7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZXJzLnJlZHVjZShjYiwgc3RyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGEgc3Vic3RpdHV0aW9uIGlzIGVuY291bnRlcmVkLCBpdGVyYXRlcyB0aHJvdWdoIGVhY2ggdHJhbnNmb3JtZXIgYW5kIGFwcGxpZXMgdGhlIHRyYW5zZm9ybWVyJ3NcbiAgICogYG9uU3Vic3RpdHV0aW9uYCBtZXRob2QgdG8gdGhlIHN1YnN0aXR1dGlvbi5cbiAgICogQHBhcmFtICB7Kn0gICAgICBzdWJzdGl0dXRpb24gLSBUaGUgY3VycmVudCBzdWJzdGl0dXRpb25cbiAgICogQHBhcmFtICB7U3RyaW5nfSByZXN1bHRTb0ZhciAgLSBUaGUgcmVzdWx0IHVwIHRvIGFuZCBleGNsdWRpbmcgdGhpcyBzdWJzdGl0dXRpb24uXG4gICAqIEByZXR1cm4geyp9ICAgICAgICAgICAgICAgICAgIC0gVGhlIGZpbmFsIHJlc3VsdCBvZiBhcHBseWluZyBhbGwgc3Vic3RpdHV0aW9uIHRyYW5zZm9ybWF0aW9ucy5cbiAgICovXG4gIHRyYW5zZm9ybVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgY29uc3QgY2IgPSAocmVzLCB0cmFuc2Zvcm0pID0+XG4gICAgICB0cmFuc2Zvcm0ub25TdWJzdGl0dXRpb25cbiAgICAgICAgPyB0cmFuc2Zvcm0ub25TdWJzdGl0dXRpb24ocmVzLCByZXN1bHRTb0ZhcilcbiAgICAgICAgOiByZXM7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtZXJzLnJlZHVjZShjYiwgc3Vic3RpdHV0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGVhY2ggdHJhbnNmb3JtZXIsIGFwcGx5aW5nIHRoZSB0cmFuc2Zvcm1lcidzIGBvbkVuZFJlc3VsdGAgbWV0aG9kIHRvIHRoZVxuICAgKiB0ZW1wbGF0ZSBsaXRlcmFsIGFmdGVyIGFsbCBzdWJzdGl0dXRpb25zIGhhdmUgZmluaXNoZWQgcHJvY2Vzc2luZy5cbiAgICogQHBhcmFtICB7U3RyaW5nfSBlbmRSZXN1bHQgLSBUaGUgcHJvY2Vzc2VkIHRlbXBsYXRlLCBqdXN0IGJlZm9yZSBpdCBpcyByZXR1cm5lZCBmcm9tIHRoZSB0YWdcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgLSBUaGUgZmluYWwgcmVzdWx0cyBvZiBwcm9jZXNzaW5nIGVhY2ggdHJhbnNmb3JtZXJcbiAgICovXG4gIHRyYW5zZm9ybUVuZFJlc3VsdChlbmRSZXN1bHQpIHtcbiAgICBjb25zdCBjYiA9IChyZXMsIHRyYW5zZm9ybSkgPT5cbiAgICAgIHRyYW5zZm9ybS5vbkVuZFJlc3VsdCA/IHRyYW5zZm9ybS5vbkVuZFJlc3VsdChyZXMpIDogcmVzO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybWVycy5yZWR1Y2UoY2IsIGVuZFJlc3VsdCk7XG4gIH1cbn1cbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/TemplateTag/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UZW1wbGF0ZVRhZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL1RlbXBsYXRlVGFnJztcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/inlineArrayTransformer.js
var defaults = {
  separator: '',
  conjunction: '',
  serial: false
};

/**
 * Converts an array substitution to a string containing a list
 * @param  {String} [opts.separator = ''] - the character that separates each item
 * @param  {String} [opts.conjunction = '']  - replace the last separator with this
 * @param  {Boolean} [opts.serial = false] - include the separator before the conjunction? (Oxford comma use-case)
 *
 * @return {Object}                     - a TemplateTag transformer
 */
var inlineArrayTransformer = function inlineArrayTransformer() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      // only operate on arrays
      if (Array.isArray(substitution)) {
        var arrayLength = substitution.length;
        var separator = opts.separator;
        var conjunction = opts.conjunction;
        var serial = opts.serial;
        // join each item in the array into a string where each item is separated by separator
        // be sure to maintain indentation
        var indent = resultSoFar.match(/(\n?[^\S\n]+)$/);
        if (indent) {
          substitution = substitution.join(separator + indent[1]);
        } else {
          substitution = substitution.join(separator + ' ');
        }
        // if conjunction is set, replace the last separator with conjunction, but only if there is more than one substitution
        if (conjunction && arrayLength > 1) {
          var separatorIndex = substitution.lastIndexOf(separator);
          substitution = substitution.slice(0, separatorIndex) + (serial ? separator : '') + ' ' + conjunction + substitution.slice(separatorIndex + 1);
        }
      }
      return substitution;
    }
  };
};

/* harmony default export */ const inlineArrayTransformer_inlineArrayTransformer = (inlineArrayTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVBcnJheVRyYW5zZm9ybWVyL2lubGluZUFycmF5VHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdHMiLCJzZXBhcmF0b3IiLCJjb25qdW5jdGlvbiIsInNlcmlhbCIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJvcHRzIiwib25TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJyZXN1bHRTb0ZhciIsIkFycmF5IiwiaXNBcnJheSIsImFycmF5TGVuZ3RoIiwibGVuZ3RoIiwiaW5kZW50IiwibWF0Y2giLCJqb2luIiwic2VwYXJhdG9ySW5kZXgiLCJsYXN0SW5kZXhPZiIsInNsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxXQUFXO0FBQ2ZDLGFBQVcsRUFESTtBQUVmQyxlQUFhLEVBRkU7QUFHZkMsVUFBUTtBQUhPLENBQWpCOztBQU1BOzs7Ozs7OztBQVFBLElBQU1DLHlCQUF5QixTQUF6QkEsc0JBQXlCO0FBQUEsTUFBQ0MsSUFBRCx1RUFBUUwsUUFBUjtBQUFBLFNBQXNCO0FBQ25ETSxrQkFEbUQsMEJBQ3BDQyxZQURvQyxFQUN0QkMsV0FEc0IsRUFDVDtBQUN4QztBQUNBLFVBQUlDLE1BQU1DLE9BQU4sQ0FBY0gsWUFBZCxDQUFKLEVBQWlDO0FBQy9CLFlBQU1JLGNBQWNKLGFBQWFLLE1BQWpDO0FBQ0EsWUFBTVgsWUFBWUksS0FBS0osU0FBdkI7QUFDQSxZQUFNQyxjQUFjRyxLQUFLSCxXQUF6QjtBQUNBLFlBQU1DLFNBQVNFLEtBQUtGLE1BQXBCO0FBQ0E7QUFDQTtBQUNBLFlBQU1VLFNBQVNMLFlBQVlNLEtBQVosQ0FBa0IsZ0JBQWxCLENBQWY7QUFDQSxZQUFJRCxNQUFKLEVBQVk7QUFDVk4seUJBQWVBLGFBQWFRLElBQWIsQ0FBa0JkLFlBQVlZLE9BQU8sQ0FBUCxDQUE5QixDQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0xOLHlCQUFlQSxhQUFhUSxJQUFiLENBQWtCZCxZQUFZLEdBQTlCLENBQWY7QUFDRDtBQUNEO0FBQ0EsWUFBSUMsZUFBZVMsY0FBYyxDQUFqQyxFQUFvQztBQUNsQyxjQUFNSyxpQkFBaUJULGFBQWFVLFdBQWIsQ0FBeUJoQixTQUF6QixDQUF2QjtBQUNBTSx5QkFDRUEsYUFBYVcsS0FBYixDQUFtQixDQUFuQixFQUFzQkYsY0FBdEIsS0FDQ2IsU0FBU0YsU0FBVCxHQUFxQixFQUR0QixJQUVBLEdBRkEsR0FHQUMsV0FIQSxHQUlBSyxhQUFhVyxLQUFiLENBQW1CRixpQkFBaUIsQ0FBcEMsQ0FMRjtBQU1EO0FBQ0Y7QUFDRCxhQUFPVCxZQUFQO0FBQ0Q7QUE1QmtELEdBQXRCO0FBQUEsQ0FBL0I7O0FBK0JBLGVBQWVILHNCQUFmIiwiZmlsZSI6ImlubGluZUFycmF5VHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWZhdWx0cyA9IHtcbiAgc2VwYXJhdG9yOiAnJyxcbiAgY29uanVuY3Rpb246ICcnLFxuICBzZXJpYWw6IGZhbHNlLFxufTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBhcnJheSBzdWJzdGl0dXRpb24gdG8gYSBzdHJpbmcgY29udGFpbmluZyBhIGxpc3RcbiAqIEBwYXJhbSAge1N0cmluZ30gW29wdHMuc2VwYXJhdG9yID0gJyddIC0gdGhlIGNoYXJhY3RlciB0aGF0IHNlcGFyYXRlcyBlYWNoIGl0ZW1cbiAqIEBwYXJhbSAge1N0cmluZ30gW29wdHMuY29uanVuY3Rpb24gPSAnJ10gIC0gcmVwbGFjZSB0aGUgbGFzdCBzZXBhcmF0b3Igd2l0aCB0aGlzXG4gKiBAcGFyYW0gIHtCb29sZWFufSBbb3B0cy5zZXJpYWwgPSBmYWxzZV0gLSBpbmNsdWRlIHRoZSBzZXBhcmF0b3IgYmVmb3JlIHRoZSBjb25qdW5jdGlvbj8gKE94Zm9yZCBjb21tYSB1c2UtY2FzZSlcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgPSAob3B0cyA9IGRlZmF1bHRzKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgLy8gb25seSBvcGVyYXRlIG9uIGFycmF5c1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN1YnN0aXR1dGlvbikpIHtcbiAgICAgIGNvbnN0IGFycmF5TGVuZ3RoID0gc3Vic3RpdHV0aW9uLmxlbmd0aDtcbiAgICAgIGNvbnN0IHNlcGFyYXRvciA9IG9wdHMuc2VwYXJhdG9yO1xuICAgICAgY29uc3QgY29uanVuY3Rpb24gPSBvcHRzLmNvbmp1bmN0aW9uO1xuICAgICAgY29uc3Qgc2VyaWFsID0gb3B0cy5zZXJpYWw7XG4gICAgICAvLyBqb2luIGVhY2ggaXRlbSBpbiB0aGUgYXJyYXkgaW50byBhIHN0cmluZyB3aGVyZSBlYWNoIGl0ZW0gaXMgc2VwYXJhdGVkIGJ5IHNlcGFyYXRvclxuICAgICAgLy8gYmUgc3VyZSB0byBtYWludGFpbiBpbmRlbnRhdGlvblxuICAgICAgY29uc3QgaW5kZW50ID0gcmVzdWx0U29GYXIubWF0Y2goLyhcXG4/W15cXFNcXG5dKykkLyk7XG4gICAgICBpZiAoaW5kZW50KSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbi5qb2luKHNlcGFyYXRvciArIGluZGVudFsxXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24uam9pbihzZXBhcmF0b3IgKyAnICcpO1xuICAgICAgfVxuICAgICAgLy8gaWYgY29uanVuY3Rpb24gaXMgc2V0LCByZXBsYWNlIHRoZSBsYXN0IHNlcGFyYXRvciB3aXRoIGNvbmp1bmN0aW9uLCBidXQgb25seSBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIHN1YnN0aXR1dGlvblxuICAgICAgaWYgKGNvbmp1bmN0aW9uICYmIGFycmF5TGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBzZXBhcmF0b3JJbmRleCA9IHN1YnN0aXR1dGlvbi5sYXN0SW5kZXhPZihzZXBhcmF0b3IpO1xuICAgICAgICBzdWJzdGl0dXRpb24gPVxuICAgICAgICAgIHN1YnN0aXR1dGlvbi5zbGljZSgwLCBzZXBhcmF0b3JJbmRleCkgK1xuICAgICAgICAgIChzZXJpYWwgPyBzZXBhcmF0b3IgOiAnJykgK1xuICAgICAgICAgICcgJyArXG4gICAgICAgICAgY29uanVuY3Rpb24gK1xuICAgICAgICAgIHN1YnN0aXR1dGlvbi5zbGljZShzZXBhcmF0b3JJbmRleCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGlubGluZUFycmF5VHJhbnNmb3JtZXI7XG4iXX0=
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineArrayTransformer/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVBcnJheVRyYW5zZm9ybWVyL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsMEI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuIl19
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndentTransformer/stripIndentTransformer.js
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * strips indentation from a template literal
 * @param  {String} type = 'initial' - whether to remove all indentation or just leading indentation. can be 'all' or 'initial'
 * @return {Object}                  - a TemplateTag transformer
 */
var stripIndentTransformer = function stripIndentTransformer() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'initial';
  return {
    onEndResult: function onEndResult(endResult) {
      if (type === 'initial') {
        // remove the shortest leading indentation from each line
        var match = endResult.match(/^[^\S\n]*(?=\S)/gm);
        var indent = match && Math.min.apply(Math, _toConsumableArray(match.map(function (el) {
          return el.length;
        })));
        if (indent) {
          var regexp = new RegExp('^.{' + indent + '}', 'gm');
          return endResult.replace(regexp, '');
        }
        return endResult;
      }
      if (type === 'all') {
        // remove all indentation from each line
        return endResult.replace(/^[^\S\n]+/gm, '');
      }
      throw new Error('Unknown type: ' + type);
    }
  };
};

/* harmony default export */ const stripIndentTransformer_stripIndentTransformer = (stripIndentTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudFRyYW5zZm9ybWVyL3N0cmlwSW5kZW50VHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsic3RyaXBJbmRlbnRUcmFuc2Zvcm1lciIsInR5cGUiLCJvbkVuZFJlc3VsdCIsImVuZFJlc3VsdCIsIm1hdGNoIiwiaW5kZW50IiwiTWF0aCIsIm1pbiIsIm1hcCIsImVsIiwibGVuZ3RoIiwicmVnZXhwIiwiUmVnRXhwIiwicmVwbGFjZSIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7OztBQUtBLElBQU1BLHlCQUF5QixTQUF6QkEsc0JBQXlCO0FBQUEsTUFBQ0MsSUFBRCx1RUFBUSxTQUFSO0FBQUEsU0FBdUI7QUFDcERDLGVBRG9ELHVCQUN4Q0MsU0FEd0MsRUFDN0I7QUFDckIsVUFBSUYsU0FBUyxTQUFiLEVBQXdCO0FBQ3RCO0FBQ0EsWUFBTUcsUUFBUUQsVUFBVUMsS0FBVixDQUFnQixtQkFBaEIsQ0FBZDtBQUNBLFlBQU1DLFNBQVNELFNBQVNFLEtBQUtDLEdBQUwsZ0NBQVlILE1BQU1JLEdBQU4sQ0FBVTtBQUFBLGlCQUFNQyxHQUFHQyxNQUFUO0FBQUEsU0FBVixDQUFaLEVBQXhCO0FBQ0EsWUFBSUwsTUFBSixFQUFZO0FBQ1YsY0FBTU0sU0FBUyxJQUFJQyxNQUFKLFNBQWlCUCxNQUFqQixRQUE0QixJQUE1QixDQUFmO0FBQ0EsaUJBQU9GLFVBQVVVLE9BQVYsQ0FBa0JGLE1BQWxCLEVBQTBCLEVBQTFCLENBQVA7QUFDRDtBQUNELGVBQU9SLFNBQVA7QUFDRDtBQUNELFVBQUlGLFNBQVMsS0FBYixFQUFvQjtBQUNsQjtBQUNBLGVBQU9FLFVBQVVVLE9BQVYsQ0FBa0IsYUFBbEIsRUFBaUMsRUFBakMsQ0FBUDtBQUNEO0FBQ0QsWUFBTSxJQUFJQyxLQUFKLG9CQUEyQmIsSUFBM0IsQ0FBTjtBQUNEO0FBakJtRCxHQUF2QjtBQUFBLENBQS9COztBQW9CQSxlQUFlRCxzQkFBZiIsImZpbGUiOiJzdHJpcEluZGVudFRyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBzdHJpcHMgaW5kZW50YXRpb24gZnJvbSBhIHRlbXBsYXRlIGxpdGVyYWxcbiAqIEBwYXJhbSAge1N0cmluZ30gdHlwZSA9ICdpbml0aWFsJyAtIHdoZXRoZXIgdG8gcmVtb3ZlIGFsbCBpbmRlbnRhdGlvbiBvciBqdXN0IGxlYWRpbmcgaW5kZW50YXRpb24uIGNhbiBiZSAnYWxsJyBvciAnaW5pdGlhbCdcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAtIGEgVGVtcGxhdGVUYWcgdHJhbnNmb3JtZXJcbiAqL1xuY29uc3Qgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciA9ICh0eXBlID0gJ2luaXRpYWwnKSA9PiAoe1xuICBvbkVuZFJlc3VsdChlbmRSZXN1bHQpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2luaXRpYWwnKSB7XG4gICAgICAvLyByZW1vdmUgdGhlIHNob3J0ZXN0IGxlYWRpbmcgaW5kZW50YXRpb24gZnJvbSBlYWNoIGxpbmVcbiAgICAgIGNvbnN0IG1hdGNoID0gZW5kUmVzdWx0Lm1hdGNoKC9eW15cXFNcXG5dKig/PVxcUykvZ20pO1xuICAgICAgY29uc3QgaW5kZW50ID0gbWF0Y2ggJiYgTWF0aC5taW4oLi4ubWF0Y2gubWFwKGVsID0+IGVsLmxlbmd0aCkpO1xuICAgICAgaWYgKGluZGVudCkge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKGBeLnske2luZGVudH19YCwgJ2dtJyk7XG4gICAgICAgIHJldHVybiBlbmRSZXN1bHQucmVwbGFjZShyZWdleHAsICcnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbmRSZXN1bHQ7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnYWxsJykge1xuICAgICAgLy8gcmVtb3ZlIGFsbCBpbmRlbnRhdGlvbiBmcm9tIGVhY2ggbGluZVxuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9eW15cXFNcXG5dKy9nbSwgJycpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdHlwZTogJHt0eXBlfWApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmlwSW5kZW50VHJhbnNmb3JtZXI7XG4iXX0=
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/trimResultTransformer/trimResultTransformer.js
/**
 * TemplateTag transformer that trims whitespace on the end result of a tagged template
 * @param  {String} side = '' - The side of the string to trim. Can be 'start' or 'end' (alternatively 'left' or 'right')
 * @return {Object}           - a TemplateTag transformer
 */
var trimResultTransformer = function trimResultTransformer() {
  var side = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    onEndResult: function onEndResult(endResult) {
      if (side === '') {
        return endResult.trim();
      }

      side = side.toLowerCase();

      if (side === 'start' || side === 'left') {
        return endResult.replace(/^\s*/, '');
      }

      if (side === 'end' || side === 'right') {
        return endResult.replace(/\s*$/, '');
      }

      throw new Error('Side not supported: ' + side);
    }
  };
};

/* harmony default export */ const trimResultTransformer_trimResultTransformer = (trimResultTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmltUmVzdWx0VHJhbnNmb3JtZXIvdHJpbVJlc3VsdFRyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInNpZGUiLCJvbkVuZFJlc3VsdCIsImVuZFJlc3VsdCIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0EsSUFBTUEsd0JBQXdCLFNBQXhCQSxxQkFBd0I7QUFBQSxNQUFDQyxJQUFELHVFQUFRLEVBQVI7QUFBQSxTQUFnQjtBQUM1Q0MsZUFENEMsdUJBQ2hDQyxTQURnQyxFQUNyQjtBQUNyQixVQUFJRixTQUFTLEVBQWIsRUFBaUI7QUFDZixlQUFPRSxVQUFVQyxJQUFWLEVBQVA7QUFDRDs7QUFFREgsYUFBT0EsS0FBS0ksV0FBTCxFQUFQOztBQUVBLFVBQUlKLFNBQVMsT0FBVCxJQUFvQkEsU0FBUyxNQUFqQyxFQUF5QztBQUN2QyxlQUFPRSxVQUFVRyxPQUFWLENBQWtCLE1BQWxCLEVBQTBCLEVBQTFCLENBQVA7QUFDRDs7QUFFRCxVQUFJTCxTQUFTLEtBQVQsSUFBa0JBLFNBQVMsT0FBL0IsRUFBd0M7QUFDdEMsZUFBT0UsVUFBVUcsT0FBVixDQUFrQixNQUFsQixFQUEwQixFQUExQixDQUFQO0FBQ0Q7O0FBRUQsWUFBTSxJQUFJQyxLQUFKLDBCQUFpQ04sSUFBakMsQ0FBTjtBQUNEO0FBakIyQyxHQUFoQjtBQUFBLENBQTlCOztBQW9CQSxlQUFlRCxxQkFBZiIsImZpbGUiOiJ0cmltUmVzdWx0VHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyIHRoYXQgdHJpbXMgd2hpdGVzcGFjZSBvbiB0aGUgZW5kIHJlc3VsdCBvZiBhIHRhZ2dlZCB0ZW1wbGF0ZVxuICogQHBhcmFtICB7U3RyaW5nfSBzaWRlID0gJycgLSBUaGUgc2lkZSBvZiB0aGUgc3RyaW5nIHRvIHRyaW0uIENhbiBiZSAnc3RhcnQnIG9yICdlbmQnIChhbHRlcm5hdGl2ZWx5ICdsZWZ0JyBvciAncmlnaHQnKVxuICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciA9IChzaWRlID0gJycpID0+ICh7XG4gIG9uRW5kUmVzdWx0KGVuZFJlc3VsdCkge1xuICAgIGlmIChzaWRlID09PSAnJykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC50cmltKCk7XG4gICAgfVxuXG4gICAgc2lkZSA9IHNpZGUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChzaWRlID09PSAnc3RhcnQnIHx8IHNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbiAgICB9XG5cbiAgICBpZiAoc2lkZSA9PT0gJ2VuZCcgfHwgc2lkZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNpZGUgbm90IHN1cHBvcnRlZDogJHtzaWRlfWApO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lcjtcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaLists/commaLists.js





var commaLists = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer({ separator: ',' }), stripIndentTransformer_stripIndentTransformer, trimResultTransformer_trimResultTransformer);

/* harmony default export */ const commaLists_commaLists = ((/* unused pure expression or super */ null && (commaLists)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzL2NvbW1hTGlzdHMuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJzdHJpcEluZGVudFRyYW5zZm9ybWVyIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsImNvbW1hTGlzdHMiLCJzZXBhcmF0b3IiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVAsTUFBd0IsZ0JBQXhCO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0MscUJBQVAsTUFBa0MsMEJBQWxDOztBQUVBLElBQU1DLGFBQWEsSUFBSUosV0FBSixDQUNqQkUsdUJBQXVCLEVBQUVHLFdBQVcsR0FBYixFQUF2QixDQURpQixFQUVqQkosc0JBRmlCLEVBR2pCRSxxQkFIaUIsQ0FBbkI7O0FBTUEsZUFBZUMsVUFBZiIsImZpbGUiOiJjb21tYUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IGNvbW1hTGlzdHMgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIoeyBzZXBhcmF0b3I6ICcsJyB9KSxcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFMaXN0cztcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaLists/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsYztxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vY29tbWFMaXN0cyc7XG4iXX0=
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaListsAnd/commaListsAnd.js





var commaListsAnd = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer({ separator: ',', conjunction: 'and' }), stripIndentTransformer_stripIndentTransformer, trimResultTransformer_trimResultTransformer);

/* harmony default export */ const commaListsAnd_commaListsAnd = ((/* unused pure expression or super */ null && (commaListsAnd)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzQW5kL2NvbW1hTGlzdHNBbmQuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJzdHJpcEluZGVudFRyYW5zZm9ybWVyIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsImNvbW1hTGlzdHNBbmQiLCJzZXBhcmF0b3IiLCJjb25qdW5jdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsZ0JBQWdCLElBQUlKLFdBQUosQ0FDcEJFLHVCQUF1QixFQUFFRyxXQUFXLEdBQWIsRUFBa0JDLGFBQWEsS0FBL0IsRUFBdkIsQ0FEb0IsRUFFcEJMLHNCQUZvQixFQUdwQkUscUJBSG9CLENBQXRCOztBQU1BLGVBQWVDLGFBQWYiLCJmaWxlIjoiY29tbWFMaXN0c0FuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBjb21tYUxpc3RzQW5kID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyKHsgc2VwYXJhdG9yOiAnLCcsIGNvbmp1bmN0aW9uOiAnYW5kJyB9KSxcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWFMaXN0c0FuZDtcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaListsAnd/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzQW5kL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsaUI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2NvbW1hTGlzdHNBbmQnO1xuIl19
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaListsOr/commaListsOr.js





var commaListsOr = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer({ separator: ',', conjunction: 'or' }), stripIndentTransformer_stripIndentTransformer, trimResultTransformer_trimResultTransformer);

/* harmony default export */ const commaListsOr_commaListsOr = ((/* unused pure expression or super */ null && (commaListsOr)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzT3IvY29tbWFMaXN0c09yLmpzIl0sIm5hbWVzIjpbIlRlbXBsYXRlVGFnIiwic3RyaXBJbmRlbnRUcmFuc2Zvcm1lciIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJjb21tYUxpc3RzT3IiLCJzZXBhcmF0b3IiLCJjb25qdW5jdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsZUFBZSxJQUFJSixXQUFKLENBQ25CRSx1QkFBdUIsRUFBRUcsV0FBVyxHQUFiLEVBQWtCQyxhQUFhLElBQS9CLEVBQXZCLENBRG1CLEVBRW5CTCxzQkFGbUIsRUFHbkJFLHFCQUhtQixDQUFyQjs7QUFNQSxlQUFlQyxZQUFmIiwiZmlsZSI6ImNvbW1hTGlzdHNPci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBjb21tYUxpc3RzT3IgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIoeyBzZXBhcmF0b3I6ICcsJywgY29uanVuY3Rpb246ICdvcicgfSksXG4gIHN0cmlwSW5kZW50VHJhbnNmb3JtZXIsXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1hTGlzdHNPcjtcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/commaListsOr/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYUxpc3RzT3IvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixnQjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vY29tbWFMaXN0c09yJztcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/splitStringTransformer/splitStringTransformer.js
var splitStringTransformer = function splitStringTransformer(splitBy) {
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      if (splitBy != null && typeof splitBy === 'string') {
        if (typeof substitution === 'string' && substitution.includes(splitBy)) {
          substitution = substitution.split(splitBy);
        }
      } else {
        throw new Error('You need to specify a string character to split by.');
      }
      return substitution;
    }
  };
};

/* harmony default export */ const splitStringTransformer_splitStringTransformer = (splitStringTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyL3NwbGl0U3RyaW5nVHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsic3BsaXRTdHJpbmdUcmFuc2Zvcm1lciIsIm9uU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwicmVzdWx0U29GYXIiLCJzcGxpdEJ5IiwiaW5jbHVkZXMiLCJzcGxpdCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSx5QkFBeUIsU0FBekJBLHNCQUF5QjtBQUFBLFNBQVk7QUFDekNDLGtCQUR5QywwQkFDMUJDLFlBRDBCLEVBQ1pDLFdBRFksRUFDQztBQUN4QyxVQUFJQyxXQUFXLElBQVgsSUFBbUIsT0FBT0EsT0FBUCxLQUFtQixRQUExQyxFQUFvRDtBQUNsRCxZQUFJLE9BQU9GLFlBQVAsS0FBd0IsUUFBeEIsSUFBb0NBLGFBQWFHLFFBQWIsQ0FBc0JELE9BQXRCLENBQXhDLEVBQXdFO0FBQ3RFRix5QkFBZUEsYUFBYUksS0FBYixDQUFtQkYsT0FBbkIsQ0FBZjtBQUNEO0FBQ0YsT0FKRCxNQUlPO0FBQ0wsY0FBTSxJQUFJRyxLQUFKLENBQVUscURBQVYsQ0FBTjtBQUNEO0FBQ0QsYUFBT0wsWUFBUDtBQUNEO0FBVndDLEdBQVo7QUFBQSxDQUEvQjs7QUFhQSxlQUFlRixzQkFBZiIsImZpbGUiOiJzcGxpdFN0cmluZ1RyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3BsaXRTdHJpbmdUcmFuc2Zvcm1lciA9IHNwbGl0QnkgPT4gKHtcbiAgb25TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCByZXN1bHRTb0Zhcikge1xuICAgIGlmIChzcGxpdEJ5ICE9IG51bGwgJiYgdHlwZW9mIHNwbGl0QnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodHlwZW9mIHN1YnN0aXR1dGlvbiA9PT0gJ3N0cmluZycgJiYgc3Vic3RpdHV0aW9uLmluY2x1ZGVzKHNwbGl0QnkpKSB7XG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbi5zcGxpdChzcGxpdEJ5KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzcGVjaWZ5IGEgc3RyaW5nIGNoYXJhY3RlciB0byBzcGxpdCBieS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyO1xuIl19
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/removeNonPrintingValuesTransformer/removeNonPrintingValuesTransformer.js
var isValidValue = function isValidValue(x) {
  return x != null && !Number.isNaN(x) && typeof x !== 'boolean';
};

var removeNonPrintingValuesTransformer = function removeNonPrintingValuesTransformer() {
  return {
    onSubstitution: function onSubstitution(substitution) {
      if (Array.isArray(substitution)) {
        return substitution.filter(isValidValue);
      }
      if (isValidValue(substitution)) {
        return substitution;
      }
      return '';
    }
  };
};

/* harmony default export */ const removeNonPrintingValuesTransformer_removeNonPrintingValuesTransformer = (removeNonPrintingValuesTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsiaXNWYWxpZFZhbHVlIiwieCIsIk51bWJlciIsImlzTmFOIiwicmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lciIsIm9uU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUNuQkMsS0FBSyxJQUFMLElBQWEsQ0FBQ0MsT0FBT0MsS0FBUCxDQUFhRixDQUFiLENBQWQsSUFBaUMsT0FBT0EsQ0FBUCxLQUFhLFNBRDNCO0FBQUEsQ0FBckI7O0FBR0EsSUFBTUcscUNBQXFDLFNBQXJDQSxrQ0FBcUM7QUFBQSxTQUFPO0FBQ2hEQyxrQkFEZ0QsMEJBQ2pDQyxZQURpQyxFQUNuQjtBQUMzQixVQUFJQyxNQUFNQyxPQUFOLENBQWNGLFlBQWQsQ0FBSixFQUFpQztBQUMvQixlQUFPQSxhQUFhRyxNQUFiLENBQW9CVCxZQUFwQixDQUFQO0FBQ0Q7QUFDRCxVQUFJQSxhQUFhTSxZQUFiLENBQUosRUFBZ0M7QUFDOUIsZUFBT0EsWUFBUDtBQUNEO0FBQ0QsYUFBTyxFQUFQO0FBQ0Q7QUFUK0MsR0FBUDtBQUFBLENBQTNDOztBQVlBLGVBQWVGLGtDQUFmIiwiZmlsZSI6InJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpc1ZhbGlkVmFsdWUgPSB4ID0+XG4gIHggIT0gbnVsbCAmJiAhTnVtYmVyLmlzTmFOKHgpICYmIHR5cGVvZiB4ICE9PSAnYm9vbGVhbic7XG5cbmNvbnN0IHJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIgPSAoKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdWJzdGl0dXRpb24pKSB7XG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uLmZpbHRlcihpc1ZhbGlkVmFsdWUpO1xuICAgIH1cbiAgICBpZiAoaXNWYWxpZFZhbHVlKHN1YnN0aXR1dGlvbikpIHtcbiAgICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyO1xuIl19
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/html/html.js







var html = new TemplateTag_TemplateTag(splitStringTransformer_splitStringTransformer('\n'), removeNonPrintingValuesTransformer_removeNonPrintingValuesTransformer, inlineArrayTransformer_inlineArrayTransformer, stripIndentTransformer_stripIndentTransformer, trimResultTransformer_trimResultTransformer);

/* harmony default export */ const html_html = ((/* unused pure expression or super */ null && (html)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sL2h0bWwuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJzdHJpcEluZGVudFRyYW5zZm9ybWVyIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInNwbGl0U3RyaW5nVHJhbnNmb3JtZXIiLCJyZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyIiwiaHRtbCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxrQ0FBUCxNQUErQyx1Q0FBL0M7O0FBRUEsSUFBTUMsT0FBTyxJQUFJTixXQUFKLENBQ1hJLHVCQUF1QixJQUF2QixDQURXLEVBRVhDLGtDQUZXLEVBR1hILHNCQUhXLEVBSVhELHNCQUpXLEVBS1hFLHFCQUxXLENBQWI7O0FBUUEsZUFBZUcsSUFBZiIsImZpbGUiOiJodG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgc3BsaXRTdHJpbmdUcmFuc2Zvcm1lciBmcm9tICcuLi9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyJztcbmltcG9ydCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyIGZyb20gJy4uL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXInO1xuXG5jb25zdCBodG1sID0gbmV3IFRlbXBsYXRlVGFnKFxuICBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyKCdcXG4nKSxcbiAgcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lcixcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcixcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgaHRtbDtcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/html/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9odG1sL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsUTtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vaHRtbCc7XG4iXX0=
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/codeBlock/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb2RlQmxvY2svaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixTO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi4vaHRtbCc7XG4iXX0=
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/source/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb3VyY2UvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixTO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi4vaHRtbCc7XG4iXX0=
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceSubstitutionTransformer/replaceSubstitutionTransformer.js
var replaceSubstitutionTransformer = function replaceSubstitutionTransformer(replaceWhat, replaceWith) {
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceSubstitutionTransformer requires at least 2 arguments.');
      }

      // Do not touch if null or undefined
      if (substitution == null) {
        return substitution;
      } else {
        return substitution.toString().replace(replaceWhat, replaceWith);
      }
    }
  };
};

/* harmony default export */ const replaceSubstitutionTransformer_replaceSubstitutionTransformer = (replaceSubstitutionTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIvcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lciIsInJlcGxhY2VXaGF0IiwicmVwbGFjZVdpdGgiLCJvblN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInJlc3VsdFNvRmFyIiwiRXJyb3IiLCJ0b1N0cmluZyIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLGlDQUFpQyxTQUFqQ0EsOEJBQWlDLENBQUNDLFdBQUQsRUFBY0MsV0FBZDtBQUFBLFNBQStCO0FBQ3BFQyxrQkFEb0UsMEJBQ3JEQyxZQURxRCxFQUN2Q0MsV0FEdUMsRUFDMUI7QUFDeEMsVUFBSUosZUFBZSxJQUFmLElBQXVCQyxlQUFlLElBQTFDLEVBQWdEO0FBQzlDLGNBQU0sSUFBSUksS0FBSixDQUNKLCtEQURJLENBQU47QUFHRDs7QUFFRDtBQUNBLFVBQUlGLGdCQUFnQixJQUFwQixFQUEwQjtBQUN4QixlQUFPQSxZQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBT0EsYUFBYUcsUUFBYixHQUF3QkMsT0FBeEIsQ0FBZ0NQLFdBQWhDLEVBQTZDQyxXQUE3QyxDQUFQO0FBQ0Q7QUFDRjtBQWRtRSxHQUEvQjtBQUFBLENBQXZDOztBQWlCQSxlQUFlRiw4QkFBZiIsImZpbGUiOiJyZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIgPSAocmVwbGFjZVdoYXQsIHJlcGxhY2VXaXRoKSA9PiAoe1xuICBvblN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHJlc3VsdFNvRmFyKSB7XG4gICAgaWYgKHJlcGxhY2VXaGF0ID09IG51bGwgfHwgcmVwbGFjZVdpdGggPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAncmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyIHJlcXVpcmVzIGF0IGxlYXN0IDIgYXJndW1lbnRzLicsXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIERvIG5vdCB0b3VjaCBpZiBudWxsIG9yIHVuZGVmaW5lZFxuICAgIGlmIChzdWJzdGl0dXRpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbi50b1N0cmluZygpLnJlcGxhY2UocmVwbGFjZVdoYXQsIHJlcGxhY2VXaXRoKTtcbiAgICB9XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyO1xuIl19
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/safeHtml/safeHtml.js







var safeHtml = new TemplateTag_TemplateTag(splitStringTransformer_splitStringTransformer('\n'), inlineArrayTransformer_inlineArrayTransformer, stripIndentTransformer_stripIndentTransformer, trimResultTransformer_trimResultTransformer, replaceSubstitutionTransformer_replaceSubstitutionTransformer(/&/g, '&amp;'), replaceSubstitutionTransformer_replaceSubstitutionTransformer(/</g, '&lt;'), replaceSubstitutionTransformer_replaceSubstitutionTransformer(/>/g, '&gt;'), replaceSubstitutionTransformer_replaceSubstitutionTransformer(/"/g, '&quot;'), replaceSubstitutionTransformer_replaceSubstitutionTransformer(/'/g, '&#x27;'), replaceSubstitutionTransformer_replaceSubstitutionTransformer(/`/g, '&#x60;'));

/* harmony default export */ const safeHtml_safeHtml = ((/* unused pure expression or super */ null && (safeHtml)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWZlSHRtbC9zYWZlSHRtbC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwidHJpbVJlc3VsdFRyYW5zZm9ybWVyIiwic3BsaXRTdHJpbmdUcmFuc2Zvcm1lciIsInJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lciIsInNhZmVIdG1sIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLDhCQUFQLE1BQTJDLG1DQUEzQzs7QUFFQSxJQUFNQyxXQUFXLElBQUlOLFdBQUosQ0FDZkksdUJBQXVCLElBQXZCLENBRGUsRUFFZkYsc0JBRmUsRUFHZkQsc0JBSGUsRUFJZkUscUJBSmUsRUFLZkUsK0JBQStCLElBQS9CLEVBQXFDLE9BQXJDLENBTGUsRUFNZkEsK0JBQStCLElBQS9CLEVBQXFDLE1BQXJDLENBTmUsRUFPZkEsK0JBQStCLElBQS9CLEVBQXFDLE1BQXJDLENBUGUsRUFRZkEsK0JBQStCLElBQS9CLEVBQXFDLFFBQXJDLENBUmUsRUFTZkEsK0JBQStCLElBQS9CLEVBQXFDLFFBQXJDLENBVGUsRUFVZkEsK0JBQStCLElBQS9CLEVBQXFDLFFBQXJDLENBVmUsQ0FBakI7O0FBYUEsZUFBZUMsUUFBZiIsImZpbGUiOiJzYWZlSHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHNwbGl0U3RyaW5nVHJhbnNmb3JtZXIgZnJvbSAnLi4vc3BsaXRTdHJpbmdUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcic7XG5cbmNvbnN0IHNhZmVIdG1sID0gbmV3IFRlbXBsYXRlVGFnKFxuICBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyKCdcXG4nKSxcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcixcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLyYvZywgJyZhbXA7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvPC9nLCAnJmx0OycpLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLz4vZywgJyZndDsnKSxcbiAgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyKC9cIi9nLCAnJnF1b3Q7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvJy9nLCAnJiN4Mjc7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvYC9nLCAnJiN4NjA7JyksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzYWZlSHRtbDtcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/safeHtml/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWZlSHRtbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLFk7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3NhZmVIdG1sJztcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/replaceResultTransformer/replaceResultTransformer.js
/**
 * Replaces tabs, newlines and spaces with the chosen value when they occur in sequences
 * @param  {(String|RegExp)} replaceWhat - the value or pattern that should be replaced
 * @param  {*}               replaceWith - the replacement value
 * @return {Object}                      - a TemplateTag transformer
 */
var replaceResultTransformer = function replaceResultTransformer(replaceWhat, replaceWith) {
  return {
    onEndResult: function onEndResult(endResult) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceResultTransformer requires at least 2 arguments.');
      }
      return endResult.replace(replaceWhat, replaceWith);
    }
  };
};

/* harmony default export */ const replaceResultTransformer_replaceResultTransformer = (replaceResultTransformer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIvcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciIsInJlcGxhY2VXaGF0IiwicmVwbGFjZVdpdGgiLCJvbkVuZFJlc3VsdCIsImVuZFJlc3VsdCIsIkVycm9yIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQU1BLElBQU1BLDJCQUEyQixTQUEzQkEsd0JBQTJCLENBQUNDLFdBQUQsRUFBY0MsV0FBZDtBQUFBLFNBQStCO0FBQzlEQyxlQUQ4RCx1QkFDbERDLFNBRGtELEVBQ3ZDO0FBQ3JCLFVBQUlILGVBQWUsSUFBZixJQUF1QkMsZUFBZSxJQUExQyxFQUFnRDtBQUM5QyxjQUFNLElBQUlHLEtBQUosQ0FDSix5REFESSxDQUFOO0FBR0Q7QUFDRCxhQUFPRCxVQUFVRSxPQUFWLENBQWtCTCxXQUFsQixFQUErQkMsV0FBL0IsQ0FBUDtBQUNEO0FBUjZELEdBQS9CO0FBQUEsQ0FBakM7O0FBV0EsZUFBZUYsd0JBQWYiLCJmaWxlIjoicmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXBsYWNlcyB0YWJzLCBuZXdsaW5lcyBhbmQgc3BhY2VzIHdpdGggdGhlIGNob3NlbiB2YWx1ZSB3aGVuIHRoZXkgb2NjdXIgaW4gc2VxdWVuY2VzXG4gKiBAcGFyYW0gIHsoU3RyaW5nfFJlZ0V4cCl9IHJlcGxhY2VXaGF0IC0gdGhlIHZhbHVlIG9yIHBhdHRlcm4gdGhhdCBzaG91bGQgYmUgcmVwbGFjZWRcbiAqIEBwYXJhbSAgeyp9ICAgICAgICAgICAgICAgcmVwbGFjZVdpdGggLSB0aGUgcmVwbGFjZW1lbnQgdmFsdWVcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICAgICAgICAgICAgICAgLSBhIFRlbXBsYXRlVGFnIHRyYW5zZm9ybWVyXG4gKi9cbmNvbnN0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciA9IChyZXBsYWNlV2hhdCwgcmVwbGFjZVdpdGgpID0+ICh7XG4gIG9uRW5kUmVzdWx0KGVuZFJlc3VsdCkge1xuICAgIGlmIChyZXBsYWNlV2hhdCA9PSBudWxsIHx8IHJlcGxhY2VXaXRoID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciByZXF1aXJlcyBhdCBsZWFzdCAyIGFyZ3VtZW50cy4nLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuZFJlc3VsdC5yZXBsYWNlKHJlcGxhY2VXaGF0LCByZXBsYWNlV2l0aCk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyO1xuIl19
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLine/oneLine.js




var oneLine = new TemplateTag_TemplateTag(replaceResultTransformer_replaceResultTransformer(/(?:\n(?:\s*))+/g, ' '), trimResultTransformer_trimResultTransformer);

/* harmony default export */ const oneLine_oneLine = ((/* unused pure expression or super */ null && (oneLine)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lL29uZUxpbmUuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJvbmVMaW5lIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyxVQUFVLElBQUlILFdBQUosQ0FDZEUseUJBQXlCLGlCQUF6QixFQUE0QyxHQUE1QyxDQURjLEVBRWRELHFCQUZjLENBQWhCOztBQUtBLGVBQWVFLE9BQWYiLCJmaWxlIjoib25lTGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IG9uZUxpbmUgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcigvKD86XFxuKD86XFxzKikpKy9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lO1xuIl19
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLine/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsVztxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vb25lTGluZSc7XG4iXX0=
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineTrim/oneLineTrim.js




var oneLineTrim = new TemplateTag_TemplateTag(replaceResultTransformer_replaceResultTransformer(/(?:\n\s*)/g, ''), trimResultTransformer_trimResultTransformer);

/* harmony default export */ const oneLineTrim_oneLineTrim = ((/* unused pure expression or super */ null && (oneLineTrim)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lVHJpbS9vbmVMaW5lVHJpbS5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciIsIm9uZUxpbmVUcmltIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyxjQUFjLElBQUlILFdBQUosQ0FDbEJFLHlCQUF5QixZQUF6QixFQUF1QyxFQUF2QyxDQURrQixFQUVsQkQscUJBRmtCLENBQXBCOztBQUtBLGVBQWVFLFdBQWYiLCJmaWxlIjoib25lTGluZVRyaW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lVHJpbSA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXG5cXHMqKS9nLCAnJyksXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG9uZUxpbmVUcmltO1xuIl19
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineTrim/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lVHJpbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL29uZUxpbmVUcmltJztcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaLists/oneLineCommaLists.js





var oneLineCommaLists = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer({ separator: ',' }), replaceResultTransformer_replaceResultTransformer(/(?:\s+)/g, ' '), trimResultTransformer_trimResultTransformer);

/* harmony default export */ const oneLineCommaLists_oneLineCommaLists = ((/* unused pure expression or super */ null && (oneLineCommaLists)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0cy9vbmVMaW5lQ29tbWFMaXN0cy5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJvbmVMaW5lQ29tbWFMaXN0cyIsInNlcGFyYXRvciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7QUFDQSxPQUFPQyx3QkFBUCxNQUFxQyw2QkFBckM7O0FBRUEsSUFBTUMsb0JBQW9CLElBQUlKLFdBQUosQ0FDeEJDLHVCQUF1QixFQUFFSSxXQUFXLEdBQWIsRUFBdkIsQ0FEd0IsRUFFeEJGLHlCQUF5QixVQUF6QixFQUFxQyxHQUFyQyxDQUZ3QixFQUd4QkQscUJBSHdCLENBQTFCOztBQU1BLGVBQWVFLGlCQUFmIiwiZmlsZSI6Im9uZUxpbmVDb21tYUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lQ29tbWFMaXN0cyA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcih7IHNlcGFyYXRvcjogJywnIH0pLFxuICByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIoLyg/OlxccyspL2csICcgJyksXG4gIHRyaW1SZXN1bHRUcmFuc2Zvcm1lcixcbik7XG5cbmV4cG9ydCBkZWZhdWx0IG9uZUxpbmVDb21tYUxpc3RzO1xuIl19
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaLists/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLHFCO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9vbmVMaW5lQ29tbWFMaXN0cyc7XG4iXX0=
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaListsOr/oneLineCommaListsOr.js





var oneLineCommaListsOr = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer({ separator: ',', conjunction: 'or' }), replaceResultTransformer_replaceResultTransformer(/(?:\s+)/g, ' '), trimResultTransformer_trimResultTransformer);

/* harmony default export */ const oneLineCommaListsOr_oneLineCommaListsOr = ((/* unused pure expression or super */ null && (oneLineCommaListsOr)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c09yL29uZUxpbmVDb21tYUxpc3RzT3IuanMiXSwibmFtZXMiOlsiVGVtcGxhdGVUYWciLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwidHJpbVJlc3VsdFRyYW5zZm9ybWVyIiwicmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIiwib25lTGluZUNvbW1hTGlzdHNPciIsInNlcGFyYXRvciIsImNvbmp1bmN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyxzQkFBc0IsSUFBSUosV0FBSixDQUMxQkMsdUJBQXVCLEVBQUVJLFdBQVcsR0FBYixFQUFrQkMsYUFBYSxJQUEvQixFQUF2QixDQUQwQixFQUUxQkgseUJBQXlCLFVBQXpCLEVBQXFDLEdBQXJDLENBRjBCLEVBRzFCRCxxQkFIMEIsQ0FBNUI7O0FBTUEsZUFBZUUsbUJBQWYiLCJmaWxlIjoib25lTGluZUNvbW1hTGlzdHNPci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuLi9pbmxpbmVBcnJheVRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmltcG9ydCByZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3Qgb25lTGluZUNvbW1hTGlzdHNPciA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcih7IHNlcGFyYXRvcjogJywnLCBjb25qdW5jdGlvbjogJ29yJyB9KSxcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXHMrKS9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lQ29tbWFMaXN0c09yO1xuIl19
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaListsOr/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c09yL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiXSwibWFwcGluZ3MiOiJxQkFBb0IsdUI7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL29uZUxpbmVDb21tYUxpc3RzT3InO1xuIl19
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaListsAnd/oneLineCommaListsAnd.js





var oneLineCommaListsAnd = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer({ separator: ',', conjunction: 'and' }), replaceResultTransformer_replaceResultTransformer(/(?:\s+)/g, ' '), trimResultTransformer_trimResultTransformer);

/* harmony default export */ const oneLineCommaListsAnd_oneLineCommaListsAnd = ((/* unused pure expression or super */ null && (oneLineCommaListsAnd)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c0FuZC9vbmVMaW5lQ29tbWFMaXN0c0FuZC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsImlubGluZUFycmF5VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJvbmVMaW5lQ29tbWFMaXN0c0FuZCIsInNlcGFyYXRvciIsImNvbmp1bmN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFQLE1BQXdCLGdCQUF4QjtBQUNBLE9BQU9DLHNCQUFQLE1BQW1DLDJCQUFuQztBQUNBLE9BQU9DLHFCQUFQLE1BQWtDLDBCQUFsQztBQUNBLE9BQU9DLHdCQUFQLE1BQXFDLDZCQUFyQzs7QUFFQSxJQUFNQyx1QkFBdUIsSUFBSUosV0FBSixDQUMzQkMsdUJBQXVCLEVBQUVJLFdBQVcsR0FBYixFQUFrQkMsYUFBYSxLQUEvQixFQUF2QixDQUQyQixFQUUzQkgseUJBQXlCLFVBQXpCLEVBQXFDLEdBQXJDLENBRjJCLEVBRzNCRCxxQkFIMkIsQ0FBN0I7O0FBTUEsZUFBZUUsb0JBQWYiLCJmaWxlIjoib25lTGluZUNvbW1hTGlzdHNBbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVtcGxhdGVUYWcgZnJvbSAnLi4vVGVtcGxhdGVUYWcnO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IG9uZUxpbmVDb21tYUxpc3RzQW5kID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyKHsgc2VwYXJhdG9yOiAnLCcsIGNvbmp1bmN0aW9uOiAnYW5kJyB9KSxcbiAgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyKC8oPzpcXHMrKS9nLCAnICcpLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBvbmVMaW5lQ29tbWFMaXN0c0FuZDtcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineCommaListsAnd/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lQ29tbWFMaXN0c0FuZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLHdCO3FCQUFiQSxPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9vbmVMaW5lQ29tbWFMaXN0c0FuZCc7XG4iXX0=
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineLists/inlineLists.js





var inlineLists = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer, stripIndentTransformer_stripIndentTransformer, trimResultTransformer_trimResultTransformer);

/* harmony default export */ const inlineLists_inlineLists = ((/* unused pure expression or super */ null && (inlineLists)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVMaXN0cy9pbmxpbmVMaXN0cy5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwidHJpbVJlc3VsdFRyYW5zZm9ybWVyIiwiaW5saW5lTGlzdHMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVAsTUFBd0IsZ0JBQXhCO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0Msc0JBQVAsTUFBbUMsMkJBQW5DO0FBQ0EsT0FBT0MscUJBQVAsTUFBa0MsMEJBQWxDOztBQUVBLElBQU1DLGNBQWMsSUFBSUosV0FBSixDQUNsQkUsc0JBRGtCLEVBRWxCRCxzQkFGa0IsRUFHbEJFLHFCQUhrQixDQUFwQjs7QUFNQSxlQUFlQyxXQUFmIiwiZmlsZSI6ImlubGluZUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IGlubGluZUFycmF5VHJhbnNmb3JtZXIgZnJvbSAnLi4vaW5saW5lQXJyYXlUcmFuc2Zvcm1lcic7XG5pbXBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4uL3RyaW1SZXN1bHRUcmFuc2Zvcm1lcic7XG5cbmNvbnN0IGlubGluZUxpc3RzID0gbmV3IFRlbXBsYXRlVGFnKFxuICBpbmxpbmVBcnJheVRyYW5zZm9ybWVyLFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyLFxuICB0cmltUmVzdWx0VHJhbnNmb3JtZXIsXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbmxpbmVMaXN0cztcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/inlineLists/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmxpbmVMaXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL2lubGluZUxpc3RzJztcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineInlineLists/oneLineInlineLists.js





var oneLineInlineLists = new TemplateTag_TemplateTag(inlineArrayTransformer_inlineArrayTransformer, replaceResultTransformer_replaceResultTransformer(/(?:\s+)/g, ' '), trimResultTransformer_trimResultTransformer);

/* harmony default export */ const oneLineInlineLists_oneLineInlineLists = ((/* unused pure expression or super */ null && (oneLineInlineLists)));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lSW5saW5lTGlzdHMvb25lTGluZUlubGluZUxpc3RzLmpzIl0sIm5hbWVzIjpbIlRlbXBsYXRlVGFnIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciIsIm9uZUxpbmVJbmxpbmVMaXN0cyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7QUFDQSxPQUFPQyx3QkFBUCxNQUFxQyw2QkFBckM7O0FBRUEsSUFBTUMscUJBQXFCLElBQUlKLFdBQUosQ0FDekJDLHNCQUR5QixFQUV6QkUseUJBQXlCLFVBQXpCLEVBQXFDLEdBQXJDLENBRnlCLEVBR3pCRCxxQkFIeUIsQ0FBM0I7O0FBTUEsZUFBZUUsa0JBQWYiLCJmaWxlIjoib25lTGluZUlubGluZUxpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi9yZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBvbmVMaW5lSW5saW5lTGlzdHMgPSBuZXcgVGVtcGxhdGVUYWcoXG4gIGlubGluZUFycmF5VHJhbnNmb3JtZXIsXG4gIHJlcGxhY2VSZXN1bHRUcmFuc2Zvcm1lcigvKD86XFxzKykvZywgJyAnKSxcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgb25lTGluZUlubGluZUxpc3RzO1xuIl19
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/oneLineInlineLists/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbmVMaW5lSW5saW5lTGlzdHMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixzQjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vb25lTGluZUlubGluZUxpc3RzJztcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndent/stripIndent.js




var stripIndent = new TemplateTag_TemplateTag(stripIndentTransformer_stripIndentTransformer, trimResultTransformer_trimResultTransformer);

/* harmony default export */ const stripIndent_stripIndent = (stripIndent);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudC9zdHJpcEluZGVudC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiLCJzdHJpcEluZGVudCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsY0FBYyxJQUFJSCxXQUFKLENBQ2xCQyxzQkFEa0IsRUFFbEJDLHFCQUZrQixDQUFwQjs7QUFLQSxlQUFlQyxXQUFmIiwiZmlsZSI6InN0cmlwSW5kZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRlbXBsYXRlVGFnIGZyb20gJy4uL1RlbXBsYXRlVGFnJztcbmltcG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4uL3N0cmlwSW5kZW50VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuXG5jb25zdCBzdHJpcEluZGVudCA9IG5ldyBUZW1wbGF0ZVRhZyhcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyaXBJbmRlbnQ7XG4iXX0=
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndent/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudC9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0Il0sIm1hcHBpbmdzIjoicUJBQW9CLGU7cUJBQWJBLE8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmcm9tICcuL3N0cmlwSW5kZW50JztcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndents/stripIndents.js




var stripIndents = new TemplateTag_TemplateTag(stripIndentTransformer_stripIndentTransformer('all'), trimResultTransformer_trimResultTransformer);

/* harmony default export */ const stripIndents_stripIndents = (stripIndents);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudHMvc3RyaXBJbmRlbnRzLmpzIl0sIm5hbWVzIjpbIlRlbXBsYXRlVGFnIiwic3RyaXBJbmRlbnRUcmFuc2Zvcm1lciIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInN0cmlwSW5kZW50cyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxzQkFBUCxNQUFtQywyQkFBbkM7QUFDQSxPQUFPQyxxQkFBUCxNQUFrQywwQkFBbEM7O0FBRUEsSUFBTUMsZUFBZSxJQUFJSCxXQUFKLENBQ25CQyx1QkFBdUIsS0FBdkIsQ0FEbUIsRUFFbkJDLHFCQUZtQixDQUFyQjs7QUFLQSxlQUFlQyxZQUFmIiwiZmlsZSI6InN0cmlwSW5kZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCB0cmltUmVzdWx0VHJhbnNmb3JtZXIgZnJvbSAnLi4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcblxuY29uc3Qgc3RyaXBJbmRlbnRzID0gbmV3IFRlbXBsYXRlVGFnKFxuICBzdHJpcEluZGVudFRyYW5zZm9ybWVyKCdhbGwnKSxcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyaXBJbmRlbnRzO1xuIl19
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/stripIndents/index.js


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJpcEluZGVudHMvaW5kZXguanMiXSwibmFtZXMiOlsiZGVmYXVsdCJdLCJtYXBwaW5ncyI6InFCQUFvQixnQjtxQkFBYkEsTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vc3RyaXBJbmRlbnRzJztcbiJdfQ==
;// CONCATENATED MODULE: ./.yarn/cache/common-tags-npm-1.8.2-2c30ba69b3-767a6255a8.zip/node_modules/common-tags/es/index.js
// core



// transformers


















// tags

































//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUZW1wbGF0ZVRhZyIsInRyaW1SZXN1bHRUcmFuc2Zvcm1lciIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJyZXBsYWNlUmVzdWx0VHJhbnNmb3JtZXIiLCJyZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIiLCJyZXBsYWNlU3RyaW5nVHJhbnNmb3JtZXIiLCJpbmxpbmVBcnJheVRyYW5zZm9ybWVyIiwic3BsaXRTdHJpbmdUcmFuc2Zvcm1lciIsInJlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIiLCJjb21tYUxpc3RzIiwiY29tbWFMaXN0c0FuZCIsImNvbW1hTGlzdHNPciIsImh0bWwiLCJjb2RlQmxvY2siLCJzb3VyY2UiLCJzYWZlSHRtbCIsIm9uZUxpbmUiLCJvbmVMaW5lVHJpbSIsIm9uZUxpbmVDb21tYUxpc3RzIiwib25lTGluZUNvbW1hTGlzdHNPciIsIm9uZUxpbmVDb21tYUxpc3RzQW5kIiwiaW5saW5lTGlzdHMiLCJvbmVMaW5lSW5saW5lTGlzdHMiLCJzdHJpcEluZGVudCIsInN0cmlwSW5kZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7eUJBQ3dCLGU7eUJBQWpCQSxXOztBQUVQOzttQ0FDa0MseUI7bUNBQTNCQyxxQjtvQ0FDNEIsMEI7b0NBQTVCQyxzQjtzQ0FDOEIsNEI7c0NBQTlCQyx3Qjs0Q0FDb0Msa0M7NENBQXBDQyw4QjtzQ0FDOEIsNEI7c0NBQTlCQyx3QjtvQ0FDNEIsMEI7b0NBQTVCQyxzQjtvQ0FDNEIsMEI7b0NBQTVCQyxzQjtnREFDd0Msc0M7Z0RBQXhDQyxrQzs7QUFFUDs7d0JBQ3VCLGM7d0JBQWhCQyxVOzJCQUNtQixpQjsyQkFBbkJDLGE7MEJBQ2tCLGdCOzBCQUFsQkMsWTtrQkFDVSxRO2tCQUFWQyxJO3VCQUNlLGE7dUJBQWZDLFM7b0JBQ1ksVTtvQkFBWkMsTTtzQkFDYyxZO3NCQUFkQyxRO3FCQUNhLFc7cUJBQWJDLE87eUJBQ2lCLGU7eUJBQWpCQyxXOytCQUN1QixxQjsrQkFBdkJDLGlCO2lDQUN5Qix1QjtpQ0FBekJDLG1CO2tDQUMwQix3QjtrQ0FBMUJDLG9CO3lCQUNpQixlO3lCQUFqQkMsVztnQ0FDd0Isc0I7Z0NBQXhCQyxrQjt5QkFDaUIsZTt5QkFBakJDLFc7MEJBQ2tCLGdCOzBCQUFsQkMsWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvcmVcbmV4cG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuL1RlbXBsYXRlVGFnJztcblxuLy8gdHJhbnNmb3JtZXJzXG5leHBvcnQgdHJpbVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4vdHJpbVJlc3VsdFRyYW5zZm9ybWVyJztcbmV4cG9ydCBzdHJpcEluZGVudFRyYW5zZm9ybWVyIGZyb20gJy4vc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcic7XG5leHBvcnQgcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyIGZyb20gJy4vcmVwbGFjZVJlc3VsdFRyYW5zZm9ybWVyJztcbmV4cG9ydCByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIgZnJvbSAnLi9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXInO1xuZXhwb3J0IHJlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lciBmcm9tICcuL3JlcGxhY2VTdHJpbmdUcmFuc2Zvcm1lcic7XG5leHBvcnQgaW5saW5lQXJyYXlUcmFuc2Zvcm1lciBmcm9tICcuL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuZXhwb3J0IHNwbGl0U3RyaW5nVHJhbnNmb3JtZXIgZnJvbSAnLi9zcGxpdFN0cmluZ1RyYW5zZm9ybWVyJztcbmV4cG9ydCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyIGZyb20gJy4vcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lcic7XG5cbi8vIHRhZ3NcbmV4cG9ydCBjb21tYUxpc3RzIGZyb20gJy4vY29tbWFMaXN0cyc7XG5leHBvcnQgY29tbWFMaXN0c0FuZCBmcm9tICcuL2NvbW1hTGlzdHNBbmQnO1xuZXhwb3J0IGNvbW1hTGlzdHNPciBmcm9tICcuL2NvbW1hTGlzdHNPcic7XG5leHBvcnQgaHRtbCBmcm9tICcuL2h0bWwnO1xuZXhwb3J0IGNvZGVCbG9jayBmcm9tICcuL2NvZGVCbG9jayc7XG5leHBvcnQgc291cmNlIGZyb20gJy4vc291cmNlJztcbmV4cG9ydCBzYWZlSHRtbCBmcm9tICcuL3NhZmVIdG1sJztcbmV4cG9ydCBvbmVMaW5lIGZyb20gJy4vb25lTGluZSc7XG5leHBvcnQgb25lTGluZVRyaW0gZnJvbSAnLi9vbmVMaW5lVHJpbSc7XG5leHBvcnQgb25lTGluZUNvbW1hTGlzdHMgZnJvbSAnLi9vbmVMaW5lQ29tbWFMaXN0cyc7XG5leHBvcnQgb25lTGluZUNvbW1hTGlzdHNPciBmcm9tICcuL29uZUxpbmVDb21tYUxpc3RzT3InO1xuZXhwb3J0IG9uZUxpbmVDb21tYUxpc3RzQW5kIGZyb20gJy4vb25lTGluZUNvbW1hTGlzdHNBbmQnO1xuZXhwb3J0IGlubGluZUxpc3RzIGZyb20gJy4vaW5saW5lTGlzdHMnO1xuZXhwb3J0IG9uZUxpbmVJbmxpbmVMaXN0cyBmcm9tICcuL29uZUxpbmVJbmxpbmVMaXN0cyc7XG5leHBvcnQgc3RyaXBJbmRlbnQgZnJvbSAnLi9zdHJpcEluZGVudCc7XG5leHBvcnQgc3RyaXBJbmRlbnRzIGZyb20gJy4vc3RyaXBJbmRlbnRzJztcbiJdfQ==
// EXTERNAL MODULE: ./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js
var prism = __webpack_require__("./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js");
var prism_default = /*#__PURE__*/__webpack_require__.n(prism);
// EXTERNAL MODULE: ./packages/grafana-ui/src/slate-plugins/slate-prism/index.ts + 1 modules
var slate_prism = __webpack_require__("./packages/grafana-ui/src/slate-plugins/slate-prism/index.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/syntax.ts
const QUERY_COMMANDS = [{
  label: 'fields',
  documentation: 'Retrieves the specified fields from log events'
}, {
  label: 'display',
  documentation: 'Specifies which fields to display in the query results'
}, {
  label: 'filter',
  documentation: 'Filters the results of a query based on one or more conditions'
}, {
  label: 'stats',
  documentation: 'Calculates aggregate statistics based on the values of log fields'
}, {
  label: 'sort',
  documentation: 'Sorts the retrieved log events'
}, {
  label: 'limit',
  documentation: 'Specifies the number of log events returned by the query'
}, {
  label: 'parse',
  documentation: 'Extracts data from a log field, creating one or more ephemeral fields that you can process further in the query'
}];
const COMPARISON_OPERATORS = (/* unused pure expression or super */ null && (['=', '!=', '<', '<=', '>', '>=']));
const ARITHMETIC_OPERATORS = (/* unused pure expression or super */ null && (['+', '-', '*', '/', '^', '%']));
const NUMERIC_OPERATORS = [{
  label: 'abs',
  detail: 'abs(a)',
  documentation: 'Absolute value.'
}, {
  label: 'ceil',
  detail: 'ceil(a)',
  documentation: 'Round to ceiling (the smallest integer that is greater than the value of a).'
}, {
  label: 'floor',
  detail: 'floor(a)',
  documentation: 'Round to floor (the largest integer that is smaller than the value of a).'
}, {
  label: 'greatest',
  detail: 'greatest(a,b, ... z)',
  documentation: 'Returns the largest value.'
}, {
  label: 'least',
  detail: 'least(a, b, ... z)',
  documentation: 'Returns the smallest value.'
}, {
  label: 'log',
  detail: 'log(a)',
  documentation: 'Natural logarithm.'
}, {
  label: 'sqrt',
  detail: 'sqrt(a)',
  documentation: 'Square root.'
}];
const GENERAL_FUNCTIONS = [{
  label: 'ispresent',
  detail: 'ispresent(fieldname)',
  documentation: 'Returns true if the field exists.'
}, {
  label: 'coalesce',
  detail: 'coalesce(fieldname1, fieldname2, ... fieldnamex)',
  documentation: 'Returns the first non-null value from the list.'
}];
const STRING_FUNCTIONS = [{
  label: 'isempty',
  detail: 'isempty(fieldname)',
  documentation: 'Returns true if the field is missing or is an empty string.'
}, {
  label: 'isblank',
  detail: 'isblank(fieldname)',
  documentation: 'Returns true if the field is missing, an empty string, or contains only white space.'
}, {
  label: 'concat',
  detail: 'concat(string1, string2, ... stringz)',
  documentation: 'Concatenates the strings.'
}, {
  label: 'ltrim',
  detail: 'ltrim(string) or ltrim(string1, string2)',
  documentation: 'Remove white space from the left of the string. If the function has a second string argument, it removes the characters of string2 from the left of string1.'
}, {
  label: 'rtrim',
  detail: 'rtrim(string) or rtrim(string1, string2)',
  documentation: 'Remove white space from the right of the string. If the function has a second string argument, it removes the characters of string2 from the right of string1.'
}, {
  label: 'trim',
  detail: 'trim(string) or trim(string1, string2)',
  documentation: 'Remove white space from both ends of the string. If the function has a second string argument, it removes the characters of string2 from both sides of string1.'
}, {
  label: 'strlen',
  detail: 'strlen(string)',
  documentation: 'Returns the length of the string in Unicode code points.'
}, {
  label: 'toupper',
  detail: 'toupper(string)',
  documentation: 'Converts the string to uppercase.'
}, {
  label: 'tolower',
  detail: 'tolower(string)',
  documentation: 'Converts the string to lowercase.'
}, {
  label: 'substr',
  detail: 'substr(string1, x), or substr(string1, x, y)',
  documentation: 'Returns a substring from the index specified by the number argument to the end of the string. If the function has a second number argument, it contains the length of the substring to be retrieved.'
}, {
  label: 'replace',
  detail: 'replace(string1, string2, string3)',
  documentation: 'Replaces all instances of string2 in string1 with string3.'
}, {
  label: 'strcontains',
  detail: 'strcontains(string1, string2)',
  documentation: 'Returns 1 if string1 contains string2 and 0 otherwise.'
}];
const DATETIME_FUNCTIONS = [{
  label: 'bin',
  detail: 'bin(period)',
  documentation: 'Rounds the value of @timestamp to the given period and then truncates.'
}, {
  label: 'datefloor',
  detail: 'datefloor(a, period)',
  documentation: 'Truncates the timestamp to the given period.'
}, {
  label: 'dateceil',
  detail: 'dateceil(a, period)',
  documentation: 'Rounds up the timestamp to the given period and then truncates.'
}, {
  label: 'fromMillis',
  detail: 'fromMillis(fieldname)',
  documentation: 'Interprets the input field as the number of milliseconds since the Unix epoch and converts it to a timestamp.'
}, {
  label: 'toMillis',
  detail: 'toMillis(fieldname)',
  documentation: 'Converts the timestamp found in the named field into a number representing the milliseconds since the Unix epoch.'
}];
const IP_FUNCTIONS = [{
  label: 'isValidIp',
  detail: 'isValidIp(fieldname)',
  documentation: 'Returns true if the field is a valid v4 or v6 IP address.'
}, {
  label: 'isValidIpV4',
  detail: 'isValidIpV4(fieldname)',
  documentation: 'Returns true if the field is a valid v4 IP address.'
}, {
  label: 'isValidIpV6',
  detail: 'isValidIpV6(fieldname)',
  documentation: 'Returns true if the field is a valid v6 IP address.'
}, {
  label: 'isIpInSubnet',
  detail: 'isIpInSubnet(fieldname, string)',
  documentation: 'Returns true if the field is a valid v4 or v6 IP address within the specified v4 or v6 subnet.'
}, {
  label: 'isIpv4InSubnet',
  detail: 'isIpv4InSubnet(fieldname, string)',
  documentation: 'Returns true if the field is a valid v4 IP address within the specified v4 subnet.'
}, {
  label: 'isIpv6InSubnet',
  detail: 'isIpv6InSubnet(fieldname, string)',
  documentation: 'Returns true if the field is a valid v6 IP address within the specified v6 subnet.'
}];
const BOOLEAN_FUNCTIONS = [{
  label: 'ispresent',
  detail: 'ispresent(fieldname)',
  documentation: 'Returns true if the field exists.'
}, {
  label: 'isempty',
  detail: 'isempty(fieldname)',
  documentation: 'Returns true if the field is missing or is an empty string.'
}, {
  label: 'isblank',
  detail: 'isblank(fieldname)',
  documentation: 'Returns true if the field is missing, an empty string, or contains only white space.'
}, {
  label: 'strcontains',
  detail: 'strcontains(string1, string2)',
  documentation: 'Returns 1 if string1 contains string2 and 0 otherwise.'
}, ...IP_FUNCTIONS];
const AGGREGATION_FUNCTIONS_STATS = [{
  label: 'avg',
  detail: 'avg(NumericFieldname)',
  documentation: 'The average of the values in the specified field.'
}, {
  label: 'count',
  detail: 'count(fieldname) or count(*)',
  documentation: 'Counts the log records.'
}, {
  label: 'count_distinct',
  detail: 'count_distinct(fieldname)',
  documentation: 'Returns the number of unique values for the field.'
}, {
  label: 'max',
  detail: 'max(fieldname)',
  documentation: 'The maximum of the values for this log field in the queried logs.'
}, {
  label: 'min',
  detail: 'min(fieldname)',
  documentation: 'The minimum of the values for this log field in the queried logs.'
}, {
  label: 'pct',
  detail: 'pct(fieldname, value)',
  documentation: 'A percentile indicates the relative standing of a value in a datas.'
}, {
  label: 'stddev',
  detail: 'stddev(NumericFieldname)',
  documentation: 'The standard deviation of the values in the specified field.'
}, {
  label: 'sum',
  detail: 'sum(NumericFieldname)',
  documentation: 'The sum of the values in the specified field.'
}];
const NON_AGGREGATION_FUNCS_STATS = [{
  label: 'earliest',
  detail: 'earliest(fieldname)',
  documentation: 'Returns the value of fieldName from the log event that has the earliest time stamp in the queried logs.'
}, {
  label: 'latest',
  detail: 'latest(fieldname)',
  documentation: 'Returns the value of fieldName from the log event that has the latest time stamp in the queried logs.'
}, {
  label: 'sortsFirst',
  detail: 'sortsFirst(fieldname)',
  documentation: 'Returns the value of fieldName that sorts first in the queried logs.'
}, {
  label: 'sortsLast',
  detail: 'sortsLast(fieldname)',
  documentation: 'Returns the value of fieldName that sorts last in the queried logs.'
}];
const STATS_FUNCS = [...AGGREGATION_FUNCTIONS_STATS, ...NON_AGGREGATION_FUNCS_STATS];
const KEYWORDS = ['as', 'like', 'by', 'in', 'desc', 'asc'];
const FIELD_AND_FILTER_FUNCTIONS = [...NUMERIC_OPERATORS, ...GENERAL_FUNCTIONS, ...STRING_FUNCTIONS, ...DATETIME_FUNCTIONS, ...IP_FUNCTIONS];
const FUNCTIONS = [...FIELD_AND_FILTER_FUNCTIONS, ...STATS_FUNCS];
const tokenizer = {
  comment: {
    pattern: /^#.*/,
    greedy: true
  },
  backticks: {
    pattern: /`.*?`/,
    alias: 'string',
    greedy: true
  },
  quote: {
    pattern: /".*?"/,
    alias: 'string',
    greedy: true
  },
  regex: {
    pattern: /\/.*?\/(?=\||\s*$|,)/,
    greedy: true
  },
  'query-command': {
    pattern: new RegExp(`\\b(?:${QUERY_COMMANDS.map(command => command.label).join('|')})\\b`, 'i'),
    alias: 'function'
  },
  function: {
    pattern: new RegExp(`\\b(?:${FUNCTIONS.map(f => f.label).join('|')})\\b`, 'i')
  },
  keyword: {
    pattern: new RegExp(`(\\s+)(${KEYWORDS.join('|')})(?=\\s+)`, 'i'),
    lookbehind: true
  },
  // 'log-group-name': {
  //   pattern: /[\.\-_/#A-Za-z0-9]+/,
  // },
  'field-name': {
    pattern: /(@?[_a-zA-Z]+[_.0-9a-zA-Z]*)|(`((\\`)|([^`]))*?`)/,
    greedy: true
  },
  number: /\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,
  'command-separator': {
    pattern: /\|/,
    alias: 'punctuation'
  },
  'comparison-operator': {
    pattern: /([<>]=?)|(!?=)/
  },
  punctuation: /[{}()`,.]/,
  whitespace: /\s+/
};
/* harmony default export */ const syntax = (tokenizer);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/LogsCheatSheet.tsx
var LogsCheatSheet_h, _h2;









const CLIQ_EXAMPLES = [{
  category: 'Lambda',
  examples: [{
    title: 'View latency statistics for 5-minute intervals',
    expr: stripIndents_stripIndents`filter @type = "REPORT" |
                           stats avg(@duration), max(@duration), min(@duration) by bin(5m)`
  }, {
    title: 'Determine the amount of overprovisioned memory',
    expr: stripIndent_stripIndent`
        filter @type = "REPORT" |
        stats max(@memorySize / 1024 / 1024) as provisonedMemoryMB,
              min(@maxMemoryUsed / 1024 / 1024) as smallestMemoryRequestMB,
              avg(@maxMemoryUsed / 1024 / 1024) as avgMemoryUsedMB,
              max(@maxMemoryUsed / 1024 / 1024) as maxMemoryUsedMB,
              provisonedMemoryMB - maxMemoryUsedMB as overProvisionedMB`
  }, {
    title: 'Find the most expensive requests',
    expr: stripIndents_stripIndents`filter @type = "REPORT" |
                           fields @requestId, @billedDuration |
                           sort by @billedDuration desc`
  }]
}, {
  category: 'VPC Flow Logs',
  examples: [{
    title: 'Average, min, and max byte transfers by source and destination IP addresses',
    expr: `stats avg(bytes), min(bytes), max(bytes) by srcAddr, dstAddr`
  }, {
    title: 'IP addresses using UDP transfer protocol',
    expr: 'filter protocol=17 | stats count(*) by srcAddr'
  }, {
    title: 'Top 10 byte transfers by source and destination IP addresses',
    expr: stripIndents_stripIndents`stats sum(bytes) as bytesTransferred by srcAddr, dstAddr |
                           sort bytesTransferred desc |
                           limit 10`
  }, {
    title: 'Top 20 source IP addresses with highest number of rejected requests',
    expr: stripIndents_stripIndents`filter action="REJECT" |
                           stats count(*) as numRejections by srcAddr |
                           sort numRejections desc |
                           limit 20`
  }]
}, {
  category: 'CloudTrail',
  examples: [{
    title: 'Number of log entries by service, event type, and region',
    expr: 'stats count(*) by eventSource, eventName, awsRegion'
  }, {
    title: 'Number of log entries by region and EC2 event type',
    expr: stripIndents_stripIndents`filter eventSource="ec2.amazonaws.com" |
                           stats count(*) as eventCount by eventName, awsRegion |
                           sort eventCount desc`
  }, {
    title: 'Regions, usernames, and ARNs of newly created IAM users',
    expr: stripIndents_stripIndents`filter eventName="CreateUser" |
                           fields awsRegion, requestParameters.userName, responseElements.user.arn`
  }]
}, {
  category: 'Common Queries',
  examples: [{
    title: '25 most recently added log events',
    expr: stripIndents_stripIndents`fields @timestamp, @message |
                           sort @timestamp desc |
                           limit 25`
  }, {
    title: 'Number of exceptions logged every 5 minutes',
    expr: stripIndents_stripIndents`filter @message like /Exception/ |
                           stats count(*) as exceptionCount by bin(5m) |
                           sort exceptionCount desc`
  }, {
    title: 'List of log events that are not exceptions',
    expr: 'fields @message | filter @message not like /Exception/'
  }]
}, {
  category: 'Route 53',
  examples: [{
    title: 'Number of requests received every 10  minutes by edge location',
    expr: 'stats count(*) by queryType, bin(10m)'
  }, {
    title: 'Number of unsuccessful requests by domain',
    expr: 'filter responseCode="SERVFAIL" | stats count(*) by queryName'
  }, {
    title: 'Number of requests received every 10  minutes by edge location',
    expr: 'stats count(*) as numRequests by resolverIp | sort numRequests desc | limit 10'
  }]
}, {
  category: 'AWS AppSync',
  examples: [{
    title: 'Number of unique HTTP status codes',
    expr: stripIndents_stripIndents`fields ispresent(graphQLAPIId) as isApi |
                           filter isApi |
                           filter logType = "RequestSummary" |
                           stats count() as statusCount by statusCode |
                           sort statusCount desc`
  }, {
    title: 'Top 10 resolvers with maximum latency',
    expr: stripIndents_stripIndents`fields resolverArn, duration |
                           filter logType = "Tracing" |
                           sort duration desc |
                           limit 10`
  }, {
    title: 'Most frequently invoked resolvers',
    expr: stripIndents_stripIndents`fields ispresent(resolverArn) as isRes |
                           stats count() as invocationCount by resolverArn |
                           filter isRes |
                           filter logType = "Tracing" |
                           sort invocationCount desc |
                           limit 10`
  }, {
    title: 'Resolvers with most errors in mapping templates',
    expr: stripIndents_stripIndents`fields ispresent(resolverArn) as isRes |
                           stats count() as errorCount by resolverArn, logType |
                           filter isRes and (logType = "RequestMapping" or logType = "ResponseMapping") and fieldInError |
                           sort errorCount desc |
                           limit 10`
  }, {
    title: 'Field latency statistics',
    expr: stripIndents_stripIndents`fields requestId, latency |
                           filter logType = "RequestSummary" |
                           sort latency desc |
                           limit 10`
  }, {
    title: 'Resolver latency statistics',
    expr: stripIndents_stripIndents`fields ispresent(resolverArn) as isRes |
                           filter isRes |
                           filter logType = "Tracing" |
                           stats min(duration), max(duration), avg(duration) as avgDur by resolverArn |
                           sort avgDur desc |
                           limit 10`
  }, {
    title: 'Top 10 requests with maximum latency',
    expr: stripIndents_stripIndents`fields requestId, latency |
                           filter logType = "RequestSummary" |
                           sort latency desc |
                           limit 10`
  }]
}];

function renderHighlightedMarkup(code, keyPrefix) {
  const grammar = syntax;
  const tokens = (0,slate_prism/* flattenTokens */.a)(prism_default().tokenize(code, grammar));
  const spans = tokens.filter(token => typeof token !== 'string').map((token, i) => {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: `prism-token token ${token.types.join(' ')} ${token.aliases.join(' ')}`,
      children: token.content
    }, `${keyPrefix}-token-${i}`);
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "slate-query-field",
    children: spans
  });
}

const exampleCategory = emotion_css_esm.css`
  margin-top: 5px;
`;
class LogsCheatSheet extends react.PureComponent {
  onClickExample(query) {
    this.props.onClickExample(query);
  }

  renderExpression(expr, keyPrefix) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "cheat-sheet-item__example",
      onClick: () => {
        var _this$props$query$ref, _this$props$query$ref2;

        return this.onClickExample({
          refId: (_this$props$query$ref = this.props.query.refId) !== null && _this$props$query$ref !== void 0 ? _this$props$query$ref : 'A',
          expression: expr,
          queryMode: 'Logs',
          region: this.props.query.region,
          id: (_this$props$query$ref2 = this.props.query.refId) !== null && _this$props$query$ref2 !== void 0 ? _this$props$query$ref2 : 'A',
          logGroupNames: 'logGroupNames' in this.props.query ? this.props.query.logGroupNames : []
        });
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
        children: renderHighlightedMarkup(expr, keyPrefix)
      })
    }, expr);
  }

  renderLogsCheatSheet() {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [LogsCheatSheet_h || (LogsCheatSheet_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        children: "CloudWatch Logs Cheat Sheet"
      })), CLIQ_EXAMPLES.map((cat, i) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: `cheat-sheet-item__title ${(0,emotion_css_esm.cx)(exampleCategory)}`,
          children: cat.category
        }), cat.examples.map((item, j) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "cheat-sheet-item",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
            children: item.title
          }), this.renderExpression(item.expr, `item-${j}`)]
        }, `item-${j}`))]
      }, `${cat.category}-${i}`))]
    });
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [_h2 || (_h2 = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        children: "CloudWatch Logs cheat sheet"
      })), CLIQ_EXAMPLES.map((cat, i) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: `cheat-sheet-item__title ${(0,emotion_css_esm.cx)(exampleCategory)}`,
          children: cat.category
        }), cat.examples.map((item, j) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "cheat-sheet-item",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
            children: item.title
          }), this.renderExpression(item.expr, `item-${j}`)]
        }, `item-${j}`))]
      }, `cat-${i}`))]
    });
  }

}
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/MetaInspector.tsx
var _thead;






function MetaInspector(_ref) {
  let {
    data = []
  } = _ref;
  const rows = (0,react.useMemo)(() => (0,lodash.groupBy)(data, 'refId'), [data]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
      className: "filter-table form-inline",
      children: [_thead || (_thead = /*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: "RefId"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: "Metric Data Query ID"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: "Metric Data Query Expression"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: "Period"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {})]
        })
      })), Object.entries(rows).map((_ref2, idx) => {
        var _frame$meta, _frame$meta2;

        let [refId, frames] = _ref2;

        if (!frames.length) {
          return null;
        }

        const frame = frames[0];
        const custom = (_frame$meta = frame.meta) === null || _frame$meta === void 0 ? void 0 : _frame$meta.custom;

        if (!custom) {
          return null;
        }

        return /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              children: refId
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              children: custom.id
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              children: (_frame$meta2 = frame.meta) === null || _frame$meta2 === void 0 ? void 0 : _frame$meta2.executedQueryString
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              children: custom.period
            })]
          })
        }, idx);
      })]
    })
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/guards.ts
const isCloudWatchLogsQuery = cloudwatchQuery => cloudwatchQuery.queryMode === 'Logs';
const isCloudWatchMetricsQuery = cloudwatchQuery => cloudwatchQuery.queryMode === 'Metrics' || !cloudwatchQuery.hasOwnProperty('queryMode'); // in early versions of this plugin, queryMode wasn't defined in a CloudWatchMetricsQuery

const isCloudWatchAnnotationQuery = cloudwatchQuery => cloudwatchQuery.queryMode === 'Annotations';
const isCloudWatchAnnotation = query => {
  var _target;

  return ((_target = query.target) === null || _target === void 0 ? void 0 : _target.queryMode) === 'Annotations';
};
// EXTERNAL MODULE: ./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js
var experimental = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/utils/utils.ts
const toOption = value => ({
  label: value,
  value
});
const appendTemplateVariables = (datasource, values) => [...values, {
  label: 'Template Variables',
  options: datasource.getVariables().map(toOption)
}];
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/Dimensions/FilterItem.tsx









const wildcardOption = {
  value: '*',
  label: '*'
};

const excludeCurrentKey = (dimensions, currentKey) => Object.entries(dimensions !== null && dimensions !== void 0 ? dimensions : {}).reduce((acc, _ref) => {
  let [key, value] = _ref;

  if (key !== currentKey) {
    return Object.assign({}, acc, {
      [key]: value
    });
  }

  return acc;
}, {});

const FilterItem = _ref2 => {
  let {
    filter,
    metricStat: {
      region,
      namespace,
      metricName,
      dimensions
    },
    datasource,
    dimensionKeys,
    disableExpressions,
    onChange,
    onDelete
  } = _ref2;
  const dimensionsExcludingCurrentKey = (0,react.useMemo)(() => excludeCurrentKey(dimensions !== null && dimensions !== void 0 ? dimensions : {}, filter.key), [dimensions, filter]);

  const loadDimensionValues = async () => {
    if (!filter.key) {
      return [];
    }

    return datasource.getDimensionValues(region, namespace, metricName, filter.key, dimensionsExcludingCurrentKey).then(result => {
      if (result.length && !disableExpressions) {
        result.unshift(wildcardOption);
      }

      return appendTemplateVariables(datasource, result);
    });
  };

  const [state, loadOptions] = (0,useAsyncFn/* default */.Z)(loadDimensionValues, [filter.key, dimensions]);
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = getOperatorStyles(theme);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    "data-testid": "cloudwatch-dimensions-filter-item",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.InputGroup, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        "aria-label": "Dimensions filter key",
        inputId: "cloudwatch-dimensions-filter-item-key",
        width: "auto",
        value: filter.key ? (0,src.toOption)(filter.key) : null,
        allowCustomValue: true,
        options: dimensionKeys,
        onChange: change => {
          if (change.label) {
            onChange({
              key: change.label,
              value: undefined
            });
          }
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: (0,emotion_css_esm.cx)(styles.root),
        children: "="
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        "aria-label": "Dimensions filter value",
        inputId: "cloudwatch-dimensions-filter-item-value",
        onOpenMenu: loadOptions,
        width: "auto",
        value: filter.value ? (0,src.toOption)(filter.value) : null,
        allowCustomValue: true,
        isLoading: state.loading,
        options: state.value,
        onChange: change => {
          if (change.value) {
            onChange(Object.assign({}, filter, {
              value: change.value
            }));
          }
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.AccessoryButton, {
        "aria-label": "remove",
        icon: "times",
        variant: "secondary",
        onClick: onDelete,
        type: "button"
      })]
    })
  });
};
const getOperatorStyles = (0,grafana_ui_src.stylesFactory)(theme => ({
  root: (0,emotion_css_esm.css)({
    padding: theme.spacing(0, 1),
    alignSelf: 'center'
  })
}));
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/Dimensions/Dimensions.tsx






const dimensionsToFilterConditions = dimensions => Object.entries(dimensions !== null && dimensions !== void 0 ? dimensions : {}).reduce((acc, _ref) => {
  let [key, value] = _ref;

  if (value && typeof value === 'string') {
    const filter = {
      key,
      value,
      operator: '='
    };
    return [...acc, filter];
  }

  return acc;
}, []);

const filterConditionsToDimensions = filters => {
  return filters.reduce((acc, _ref2) => {
    let {
      key,
      value
    } = _ref2;

    if (key && value) {
      return Object.assign({}, acc, {
        [key]: value
      });
    }

    return acc;
  }, {});
};

const Dimensions = _ref3 => {
  let {
    metricStat,
    datasource,
    dimensionKeys,
    disableExpressions,
    onChange
  } = _ref3;
  const dimensionFilters = (0,react.useMemo)(() => dimensionsToFilterConditions(metricStat.dimensions), [metricStat.dimensions]);
  const [items, setItems] = (0,react.useState)(dimensionFilters);

  const onDimensionsChange = newItems => {
    setItems(newItems); // The onChange event should only be triggered in the case there is a complete dimension object.
    // So when a new key is added that does not yet have a value, it should not trigger an onChange event.

    const newDimensions = filterConditionsToDimensions(newItems);

    if (!(0,lodash.isEqual)(newDimensions, metricStat.dimensions)) {
      onChange(newDimensions);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorList, {
    items: items,
    onChange: onDimensionsChange,
    renderItem: makeRenderFilter(datasource, metricStat, dimensionKeys, disableExpressions)
  });
};

function makeRenderFilter(datasource, metricStat, dimensionKeys, disableExpressions) {
  function renderFilter(item, onChange, onDelete) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(FilterItem, {
      filter: item,
      onChange: item => onChange(item),
      datasource: datasource,
      metricStat: metricStat,
      disableExpressions: disableExpressions,
      dimensionKeys: dimensionKeys,
      onDelete: onDelete
    });
  }

  return renderFilter;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/Forms.tsx
var _div;






const QueryField = _ref => {
  let {
    label,
    tooltip,
    children
  } = _ref;
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(InlineFormLabel, {
      width: 8,
      className: "query-keyword",
      tooltip: tooltip,
      children: label
    }), children]
  });
};
const QueryInlineField = _ref2 => {
  let props = Object.assign({}, _ref2);
  return /*#__PURE__*/_jsxs("div", {
    className: 'gf-form-inline',
    children: [/*#__PURE__*/_jsx(QueryField, Object.assign({}, props)), _div || (_div = /*#__PURE__*/_jsx("div", {
      className: "gf-form gf-form--grow",
      children: /*#__PURE__*/_jsx("div", {
        className: "gf-form-label gf-form-label--grow"
      })
    }))]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/aws_url.ts
const JSURL = __webpack_require__("./.yarn/cache/jsurl-npm-0.1.5-9e17f93783-50b614908d.zip/node_modules/jsurl/index.js");

function encodeUrl(obj, region) {
  return `https://${region}.console.aws.amazon.com/cloudwatch/home?region=${region}#logs-insights:queryDetail=${JSURL.stringify(obj)}`;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/CloudWatchLink.tsx
var _Icon;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class CloudWatchLink extends react.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      href: ''
    });
  }

  async componentDidUpdate(prevProps) {
    const {
      panelData: panelDataNew
    } = this.props;
    const {
      panelData: panelDataOld
    } = prevProps;

    if (panelDataOld !== panelDataNew && panelDataNew !== null && panelDataNew !== void 0 && panelDataNew.request) {
      const href = this.getExternalLink();
      this.setState({
        href
      });
    }
  }

  getExternalLink() {
    var _panelData$request, _query$expression, _query$logGroupNames;

    const {
      query,
      panelData,
      datasource
    } = this.props;
    const range = panelData === null || panelData === void 0 ? void 0 : (_panelData$request = panelData.request) === null || _panelData$request === void 0 ? void 0 : _panelData$request.range;

    if (!range) {
      return '';
    }

    const start = range.from.toISOString();
    const end = range.to.toISOString();
    const urlProps = {
      end,
      start,
      timeType: 'ABSOLUTE',
      tz: 'UTC',
      editorString: (_query$expression = query.expression) !== null && _query$expression !== void 0 ? _query$expression : '',
      isLiveTail: false,
      source: (_query$logGroupNames = query.logGroupNames) !== null && _query$logGroupNames !== void 0 ? _query$logGroupNames : []
    };
    return encodeUrl(urlProps, datasource.getActualRegion(query.region));
  }

  render() {
    const {
      href
    } = this.state;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      children: [_Icon || (_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "share-alt"
      })), " CloudWatch Logs Insights"]
    });
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/utils/query/getStatsGroups.ts
const byRE = /\s+by\s+/im;
/**
 * groups look like this: (@a.foo)( as )(bar),
 * group 1 is the field, group 2 is " as " and group 3 is the alias
 * this regex will not advance past any non-identifier or whitespace characters, e.g. |
 */

const groupsRE = /([\w$@().]+)(?:(\s+as\s+)([\w$]+))?\s*,?\s*/iy;
function getStatsGroups(query) {
  let groups = []; // find " by "

  let b;

  if (b = query.match(byRE)) {
    // continue incremental scanning from there for groups & aliases
    groupsRE.lastIndex = b.index + b[0].length;
    let g;

    while (g = groupsRE.exec(query)) {
      groups.push(g[2] ? g[3] : g[1]);
      groupsRE.lastIndex = g.index + g[0].length;
    }
  }

  return groups;
}
;// CONCATENATED MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useCustomCompareEffect.js

var isPrimitive = function (val) { return val !== Object(val); };
var useCustomCompareEffect = function (effect, deps, depsEqual) {
    if (false) {}
    var ref = (0,react.useRef)(undefined);
    if (!ref.current || !depsEqual(deps, ref.current)) {
        ref.current = deps;
    }
    (0,react.useEffect)(effect, ref.current);
};
/* harmony default export */ const esm_useCustomCompareEffect = (useCustomCompareEffect);

// EXTERNAL MODULE: ./.yarn/cache/fast-deep-equal-npm-3.1.3-790edcfcf5-e21a9d8d84.zip/node_modules/fast-deep-equal/react.js
var fast_deep_equal_react = __webpack_require__("./.yarn/cache/fast-deep-equal-npm-3.1.3-790edcfcf5-e21a9d8d84.zip/node_modules/fast-deep-equal/react.js");
var fast_deep_equal_react_default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_react);
;// CONCATENATED MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/misc/isDeepEqual.js

/* harmony default export */ const isDeepEqual = ((fast_deep_equal_react_default()));

;// CONCATENATED MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDeepCompareEffect.js


var useDeepCompareEffect_isPrimitive = function (val) { return val !== Object(val); };
var useDeepCompareEffect = function (effect, deps) {
    if (false) {}
    esm_useCustomCompareEffect(effect, deps, isDeepEqual);
};
/* harmony default export */ const esm_useDeepCompareEffect = (useDeepCompareEffect);

;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/hooks.ts




const useRegions = datasource => {
  const [regionsIsLoading, setRegionsIsLoading] = (0,react.useState)(false);
  const [regions, setRegions] = (0,react.useState)([{
    label: 'default',
    value: 'default'
  }]);
  (0,react.useEffect)(() => {
    setRegionsIsLoading(true);
    const variableOptionGroup = {
      label: 'Template Variables',
      options: datasource.getVariables().map(src.toOption)
    };
    datasource.getRegions().then(regions => setRegions([...regions, variableOptionGroup])).finally(() => setRegionsIsLoading(false));
  }, [datasource]);
  return [regions, regionsIsLoading];
};
const useNamespaces = datasource => {
  const [namespaces, setNamespaces] = (0,react.useState)([]);
  (0,react.useEffect)(() => {
    datasource.getNamespaces().then(namespaces => {
      setNamespaces(appendTemplateVariables(datasource, namespaces));
    });
  }, [datasource]);
  return namespaces;
};
const useMetrics = (datasource, region, namespace) => {
  const [metrics, setMetrics] = (0,react.useState)([]);
  (0,react.useEffect)(() => {
    datasource.getMetrics(namespace, region).then(result => {
      setMetrics(appendTemplateVariables(datasource, result));
    });
  }, [datasource, region, namespace]);
  return metrics;
};
const useDimensionKeys = (datasource, region, namespace, metricName, dimensionFilter) => {
  const [dimensionKeys, setDimensionKeys] = (0,react.useState)([]); // doing deep comparison to avoid making new api calls to list metrics unless dimension filter object props changes

  esm_useDeepCompareEffect(() => {
    datasource.getDimensionKeys(namespace, region, dimensionFilter, metricName).then(result => {
      setDimensionKeys(appendTemplateVariables(datasource, result));
    });
  }, [datasource, region, namespace, metricName, dimensionFilter]);
  return dimensionKeys;
};
// EXTERNAL MODULE: ./public/app/plugins/datasource/cloudwatch/types.ts
var types = __webpack_require__("./public/app/plugins/datasource/cloudwatch/types.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/MetricsQueryEditor/MetricsQueryHeader.tsx
var _FlexItem;








const metricEditorModes = [{
  label: 'Metric Search',
  value: types/* MetricQueryType.Search */.$5.Search
}, {
  label: 'Metric Query',
  value: types/* MetricQueryType.Query */.$5.Query
}];
const editorModes = [{
  label: 'Builder',
  value: types/* MetricEditorMode.Builder */.MQ.Builder
}, {
  label: 'Code',
  value: types/* MetricEditorMode.Code */.MQ.Code
}];

const MetricsQueryHeader = _ref => {
  let {
    query,
    sqlCodeEditorIsDirty,
    onChange,
    onRunQuery
  } = _ref;
  const {
    metricEditorMode,
    metricQueryType
  } = query;
  const [showConfirm, setShowConfirm] = (0,react.useState)(false);
  const onEditorModeChange = (0,react.useCallback)(newMetricEditorMode => {
    if (sqlCodeEditorIsDirty && metricQueryType === types/* MetricQueryType.Query */.$5.Query && metricEditorMode === types/* MetricEditorMode.Code */.MQ.Code) {
      setShowConfirm(true);
      return;
    }

    onChange(Object.assign({}, query, {
      metricEditorMode: newMetricEditorMode
    }));
  }, [setShowConfirm, onChange, sqlCodeEditorIsDirty, query, metricEditorMode, metricQueryType]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(experimental.InlineSelect, {
      "aria-label": "Metric editor mode",
      value: metricEditorModes.find(m => m.value === metricQueryType),
      options: metricEditorModes,
      onChange: _ref2 => {
        let {
          value
        } = _ref2;
        onChange(Object.assign({}, query, {
          metricQueryType: value
        }));
      }
    }), _FlexItem || (_FlexItem = /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.FlexItem, {
      grow: 1
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
      options: editorModes,
      size: "sm",
      value: metricEditorMode,
      onChange: onEditorModeChange
    }), query.metricQueryType === types/* MetricQueryType.Query */.$5.Query && query.metricEditorMode === types/* MetricEditorMode.Code */.MQ.Code && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => onRunQuery(),
      children: "Run query"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ConfirmModal, {
      isOpen: showConfirm,
      title: "Are you sure?",
      body: "You will lose manual changes done to the query if you go back to the visual builder.",
      confirmText: "Yes, I am sure.",
      dismissText: "No, continue editing the query manually.",
      icon: "exclamation-triangle",
      onConfirm: () => {
        setShowConfirm(false);
        onChange(Object.assign({}, query, {
          metricEditorMode: types/* MetricEditorMode.Builder */.MQ.Builder
        }));
      },
      onDismiss: () => setShowConfirm(false)
    })]
  });
};

/* harmony default export */ const MetricsQueryEditor_MetricsQueryHeader = (MetricsQueryHeader);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/QueryHeader.tsx








const apiModes = [{
  label: 'CloudWatch Metrics',
  value: 'Metrics'
}, {
  label: 'CloudWatch Logs',
  value: 'Logs'
}];

const QueryHeader = _ref => {
  let {
    query,
    sqlCodeEditorIsDirty,
    datasource,
    onChange,
    onRunQuery,
    onRegionChange
  } = _ref;
  const {
    queryMode,
    region
  } = query;
  const [regions, regionIsLoading] = useRegions(datasource);

  const onQueryModeChange = _ref2 => {
    let {
      value
    } = _ref2;

    if (value !== queryMode) {
      const commonProps = (0,lodash.pick)(query, 'id', 'region', 'namespace', 'refId', 'hide', 'key', 'queryType', 'datasource');
      onChange(Object.assign({}, commonProps, {
        queryMode: value
      }));
    }
  };

  const onRegion = async _ref3 => {
    let {
      value
    } = _ref3;

    if (onRegionChange) {
      await onRegionChange(value !== null && value !== void 0 ? value : 'default');
    }

    onChange(Object.assign({}, query, {
      region: value
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.EditorHeader, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(experimental.InlineSelect, {
      label: "Region",
      value: region,
      placeholder: "Select region",
      allowCustomValue: true,
      onChange: _ref4 => {
        let {
          value: region
        } = _ref4;
        return region && onRegion({
          value: region
        });
      },
      options: regions,
      isLoading: regionIsLoading
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.InlineSelect, {
      "aria-label": "Query mode",
      value: queryMode,
      options: apiModes,
      onChange: onQueryModeChange
    }), queryMode === src.ExploreMode.Metrics && /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor_MetricsQueryHeader, {
      query: query,
      datasource: datasource,
      onChange: onChange,
      onRunQuery: onRunQuery,
      sqlCodeEditorIsDirty: sqlCodeEditorIsDirty
    })]
  });
};

/* harmony default export */ const components_QueryHeader = (QueryHeader);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/LogsQueryField.tsx
function LogsQueryField_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const containerClass = emotion_css_esm.css`
  flex-grow: 1;
  min-height: 35px;
`;
const rowGap = emotion_css_esm.css`
  gap: 3px;
`;
class CloudWatchLogsQueryField extends react.PureComponent {
  constructor(props, context) {
    var _logGroupNames$map, _logGroupNames;

    super(props, context);

    LogsQueryField_defineProperty(this, "state", {
      selectedLogGroups: (_logGroupNames$map = (_logGroupNames = this.props.query.logGroupNames) === null || _logGroupNames === void 0 ? void 0 : _logGroupNames.map(logGroup => ({
        value: logGroup,
        label: logGroup
      }))) !== null && _logGroupNames$map !== void 0 ? _logGroupNames$map : [],
      availableLogGroups: [],
      invalidLogGroups: false,
      loadingLogGroups: false,
      hint: undefined
    });

    LogsQueryField_defineProperty(this, "plugins", void 0);

    LogsQueryField_defineProperty(this, "fetchLogGroupOptions", async (region, logGroupNamePrefix) => {
      try {
        const logGroups = await this.props.datasource.describeLogGroups({
          refId: this.props.query.refId,
          region,
          logGroupNamePrefix
        });
        return logGroups.map(logGroup => ({
          value: logGroup,
          label: logGroup
        }));
      } catch (err) {
        let errMessage = 'unknown error';

        if (typeof err !== 'string') {
          try {
            errMessage = JSON.stringify(err);
          } catch (e) {}
        } else {
          errMessage = err;
        }

        (0,store/* dispatch */.WI)((0,actions/* notifyApp */.$l)((0,appNotification/* createErrorNotification */.t_)(errMessage)));
        return [];
      }
    });

    LogsQueryField_defineProperty(this, "onLogGroupSearch", (searchTerm, region, actionMeta) => {
      if (actionMeta.action !== 'input-change') {
        return Promise.resolve();
      } // No need to fetch matching log groups if the search term isn't valid
      // This is also useful for preventing searches when a user is typing out a log group with template vars
      // See https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_LogGroup.html for the source of the pattern below


      const logGroupNamePattern = /^[\.\-_/#A-Za-z0-9]+$/;

      if (!logGroupNamePattern.test(searchTerm)) {
        return Promise.resolve();
      }

      this.setState({
        loadingLogGroups: true
      });
      return this.fetchLogGroupOptions(region, searchTerm).then(matchingLogGroups => {
        this.setState(state => ({
          availableLogGroups: (0,lodash.unionBy)(state.availableLogGroups, matchingLogGroups, 'value')
        }));
      }).finally(() => {
        this.setState({
          loadingLogGroups: false
        });
      });
    });

    LogsQueryField_defineProperty(this, "onLogGroupSearchDebounced", (0,lodash.debounce)(this.onLogGroupSearch, 300));

    LogsQueryField_defineProperty(this, "componentDidMount", () => {
      const {
        query,
        onChange
      } = this.props;
      this.setState({
        loadingLogGroups: true
      });
      query.region && this.fetchLogGroupOptions(query.region).then(logGroups => {
        this.setState(state => {
          const selectedLogGroups = state.selectedLogGroups;

          if (onChange) {
            const nextQuery = Object.assign({}, query, {
              logGroupNames: selectedLogGroups.map(group => group.value)
            });
            onChange(nextQuery);
          }

          return {
            loadingLogGroups: false,
            availableLogGroups: logGroups,
            selectedLogGroups
          };
        });
      });
    });

    LogsQueryField_defineProperty(this, "onChangeQuery", value => {
      // Send text change to parent
      const {
        query,
        onChange
      } = this.props;
      const {
        selectedLogGroups
      } = this.state;

      if (onChange) {
        var _selectedLogGroups$ma;

        const nextQuery = Object.assign({}, query, {
          expression: value,
          logGroupNames: (_selectedLogGroups$ma = selectedLogGroups === null || selectedLogGroups === void 0 ? void 0 : selectedLogGroups.map(logGroupName => logGroupName.value)) !== null && _selectedLogGroups$ma !== void 0 ? _selectedLogGroups$ma : [],
          statsGroups: getStatsGroups(value)
        });
        onChange(nextQuery);
      }
    });

    LogsQueryField_defineProperty(this, "setSelectedLogGroups", selectedLogGroups => {
      var _selectedLogGroups$ma2;

      this.setState({
        selectedLogGroups
      });
      const {
        onChange,
        query
      } = this.props;
      onChange === null || onChange === void 0 ? void 0 : onChange(Object.assign({}, query, {
        logGroupNames: (_selectedLogGroups$ma2 = selectedLogGroups.map(logGroupName => logGroupName.value)) !== null && _selectedLogGroups$ma2 !== void 0 ? _selectedLogGroups$ma2 : []
      }));
    });

    LogsQueryField_defineProperty(this, "setCustomLogGroups", v => {
      const customLogGroup = {
        value: v,
        label: v
      };
      const selectedLogGroups = [...this.state.selectedLogGroups, customLogGroup];
      this.setSelectedLogGroups(selectedLogGroups);
    });

    LogsQueryField_defineProperty(this, "onRegionChange", async v => {
      this.setState({
        loadingLogGroups: true
      });
      const logGroups = await this.fetchLogGroupOptions(v);
      this.setState(state => {
        const selectedLogGroups = (0,lodash.intersectionBy)(state.selectedLogGroups, logGroups, 'value');
        const {
          onChange,
          query
        } = this.props;

        if (onChange) {
          const nextQuery = Object.assign({}, query, {
            logGroupNames: selectedLogGroups.map(group => group.value)
          });
          onChange(nextQuery);
        }

        return {
          availableLogGroups: logGroups,
          selectedLogGroups: selectedLogGroups,
          loadingLogGroups: false
        };
      });
    });

    LogsQueryField_defineProperty(this, "onTypeahead", async typeahead => {
      const {
        datasource,
        query
      } = this.props;
      const {
        selectedLogGroups
      } = this.state;

      if (!datasource.languageProvider) {
        return {
          suggestions: []
        };
      }

      const cloudwatchLanguageProvider = datasource.languageProvider;
      const {
        history,
        absoluteRange
      } = this.props;
      const {
        prefix,
        text,
        value,
        wrapperClasses,
        labelKey,
        editor
      } = typeahead;
      return await cloudwatchLanguageProvider.provideCompletionItems({
        text,
        value,
        prefix,
        wrapperClasses,
        labelKey,
        editor
      }, {
        history,
        absoluteRange,
        logGroupNames: selectedLogGroups.map(logGroup => logGroup.value),
        region: query.region
      });
    });

    LogsQueryField_defineProperty(this, "onQueryFieldClick", (_event, _editor, next) => {
      const {
        selectedLogGroups,
        loadingLogGroups
      } = this.state;
      const queryFieldDisabled = loadingLogGroups || selectedLogGroups.length === 0;

      if (queryFieldDisabled) {
        this.setState({
          invalidLogGroups: true
        });
      }

      next();
    });

    LogsQueryField_defineProperty(this, "onOpenLogGroupMenu", () => {
      this.setState({
        invalidLogGroups: false
      });
    });

    this.plugins = [(0,grafana_ui_src.BracesPlugin)(), (0,grafana_ui_src.SlatePrism)({
      onlyIn: node => node.object === 'block' && node.type === 'code_block',
      getSyntax: node => 'cloudwatch'
    }, Object.assign({}, prism.languages, {
      cloudwatch: syntax
    }))];
  }

  render() {
    var _expression, _data$error;

    const {
      onRunQuery,
      onChange,
      ExtraFieldElement,
      data,
      query,
      datasource,
      allowCustomValue
    } = this.props;
    const {
      selectedLogGroups,
      availableLogGroups,
      loadingLogGroups,
      hint,
      invalidLogGroups
    } = this.state;
    const showError = data && data.error && data.error.refId === query.refId;
    const cleanText = datasource.languageProvider ? datasource.languageProvider.cleanText : undefined;
    const MAX_LOG_GROUPS = 20;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_QueryHeader, {
        query: query,
        onRunQuery: onRunQuery,
        datasource: datasource,
        onChange: onChange,
        sqlCodeEditorIsDirty: false,
        onRegionChange: this.onRegionChange
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: `gf-form gf-form--grow flex-grow-1 ${rowGap}`,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LegacyForms.FormField, {
          label: "Log Groups",
          labelWidth: 6,
          className: "flex-grow-1",
          inputEl: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.MultiSelect, {
            "aria-label": "Log Groups",
            allowCustomValue: allowCustomValue,
            options: (0,lodash.unionBy)(availableLogGroups, selectedLogGroups, 'value'),
            value: selectedLogGroups,
            onChange: v => {
              this.setSelectedLogGroups(v);
            },
            onCreateOption: v => {
              this.setCustomLogGroups(v);
            },
            onBlur: this.props.onRunQuery,
            className: containerClass,
            closeMenuOnSelect: false,
            isClearable: true,
            invalid: invalidLogGroups,
            isOptionDisabled: () => selectedLogGroups.length >= MAX_LOG_GROUPS,
            placeholder: "Choose Log Groups",
            maxVisibleValues: 4,
            noOptionsMessage: "No log groups available",
            isLoading: loadingLogGroups,
            onOpenMenu: this.onOpenLogGroupMenu,
            onInputChange: (value, actionMeta) => {
              this.onLogGroupSearchDebounced(value, query.region, actionMeta);
            }
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "gf-form-inline gf-form-inline--nowrap flex-grow-1",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form gf-form--grow flex-shrink-1",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.QueryField, {
            additionalPlugins: this.plugins,
            query: (_expression = query.expression) !== null && _expression !== void 0 ? _expression : '',
            onChange: this.onChangeQuery,
            onClick: this.onQueryFieldClick,
            onRunQuery: this.props.onRunQuery,
            onTypeahead: this.onTypeahead,
            cleanText: cleanText,
            placeholder: "Enter a CloudWatch Logs Insights query (run with Shift+Enter)",
            portalOrigin: "cloudwatch",
            disabled: loadingLogGroups || selectedLogGroups.length === 0
          })
        }), ExtraFieldElement]
      }), hint && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "query-row-break",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "text-warning",
          children: [hint.message, /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            className: "text-link muted",
            onClick: hint.fix.action,
            children: hint.fix.label
          })]
        })
      }), showError ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "query-row-break",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "prom-query-field-info text-error",
          children: data === null || data === void 0 ? void 0 : (_data$error = data.error) === null || _data$error === void 0 ? void 0 : _data$error.message
        })
      }) : null]
    });
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/LogsQueryEditor.tsx
// Libraries

 // Types





const labelClass = emotion_css_esm.css`
  margin-left: 3px;
  flex-grow: 0;
`;
const CloudWatchLogsQueryEditor = /*#__PURE__*/(0,react.memo)(function CloudWatchLogsQueryEditor(props) {
  var _data$request, _data$request$range;

  const {
    query,
    data,
    datasource,
    onRunQuery,
    onChange,
    exploreId,
    allowCustomValue = false
  } = props;
  let absolute;

  if (data !== null && data !== void 0 && (_data$request = data.request) !== null && _data$request !== void 0 && (_data$request$range = _data$request.range) !== null && _data$request$range !== void 0 && _data$request$range.from) {
    const {
      range
    } = data.request;
    absolute = {
      from: range.from.valueOf(),
      to: range.to.valueOf()
    };
  } else {
    absolute = {
      from: Date.now() - 10000,
      to: Date.now()
    };
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(CloudWatchLogsQueryField, {
    exploreId: exploreId,
    datasource: datasource,
    query: query,
    onChange: onChange,
    onRunQuery: onRunQuery,
    history: [],
    data: data,
    absoluteRange: absolute,
    allowCustomValue: allowCustomValue,
    ExtraFieldElement: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
      className: `gf-form-label--btn ${labelClass}`,
      width: "auto",
      tooltip: "Link to Graph in AWS",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(CloudWatchLink, {
        query: query,
        panelData: data,
        datasource: datasource
      })
    })
  });
});
/* harmony default export */ const LogsQueryEditor = (CloudWatchLogsQueryEditor);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/MetricStatEditor/MetricStatEditor.tsx








function MetricStatEditor(_ref) {
  var _metricStat$statistic;

  let {
    refId,
    metricStat,
    datasource,
    disableExpressions = false,
    onChange,
    onRunQuery
  } = _ref;
  const {
    region,
    namespace,
    metricName,
    dimensions
  } = metricStat;
  const namespaces = useNamespaces(datasource);
  const metrics = useMetrics(datasource, region, namespace);
  const dimensionKeys = useDimensionKeys(datasource, region, namespace, metricName, dimensions !== null && dimensions !== void 0 ? dimensions : {});

  const onMetricStatChange = metricStat => {
    onChange(metricStat);
    onRunQuery();
  };

  const onNamespaceChange = async metricStat => {
    const validatedQuery = await validateMetricName(metricStat);
    onMetricStatChange(validatedQuery);
  };

  const validateMetricName = async metricStat => {
    let {
      metricName,
      namespace,
      region
    } = metricStat;

    if (!metricName) {
      return metricStat;
    }

    await datasource.getMetrics(namespace, region).then(result => {
      if (!result.find(metric => metric.value === metricName)) {
        metricName = '';
      }
    });
    return Object.assign({}, metricStat, {
      metricName
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.EditorRows, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.EditorFieldGroup, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
          label: "Namespace",
          width: 26,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
            "aria-label": "Namespace",
            value: metricStat.namespace,
            allowCustomValue: true,
            options: namespaces,
            onChange: _ref2 => {
              let {
                value: namespace
              } = _ref2;

              if (namespace) {
                onNamespaceChange(Object.assign({}, metricStat, {
                  namespace
                }));
              }
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
          label: "Metric name",
          width: 16,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
            "aria-label": "Metric name",
            value: metricStat.metricName || null,
            allowCustomValue: true,
            options: metrics,
            onChange: _ref3 => {
              let {
                value: metricName
              } = _ref3;

              if (metricName) {
                onMetricStatChange(Object.assign({}, metricStat, {
                  metricName
                }));
              }
            }
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
          label: "Statistic",
          width: 16,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
            inputId: `${refId}-metric-stat-editor-select-statistic`,
            allowCustomValue: true,
            value: toOption((_metricStat$statistic = metricStat.statistic) !== null && _metricStat$statistic !== void 0 ? _metricStat$statistic : datasource.standardStatistics[0]),
            options: appendTemplateVariables(datasource, datasource.standardStatistics.filter(s => s !== metricStat.statistic).map(toOption)),
            onChange: _ref4 => {
              let {
                value: statistic
              } = _ref4;

              if (!statistic || !datasource.standardStatistics.includes(statistic) && !/^p\d{2}(?:\.\d{1,2})?$/.test(statistic) && !statistic.startsWith('$')) {
                return;
              }

              onMetricStatChange(Object.assign({}, metricStat, {
                statistic
              }));
            }
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Dimensions",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Dimensions, {
          metricStat: metricStat,
          onChange: dimensions => onMetricStatChange(Object.assign({}, metricStat, {
            dimensions
          })),
          dimensionKeys: dimensionKeys,
          disableExpressions: disableExpressions,
          datasource: datasource
        })
      })
    }), !disableExpressions && /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Match exact",
        optional: true,
        tooltip: "Only show metrics that exactly match all defined dimension names.",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorSwitch, {
          id: `${refId}-cloudwatch-match-exact`,
          value: !!metricStat.matchExact,
          onChange: e => {
            onMetricStatChange(Object.assign({}, metricStat, {
              matchExact: e.currentTarget.checked
            }));
          }
        })
      })
    })]
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/MetricStatEditor/index.ts

// EXTERNAL MODULE: ./public/app/features/templating/template_srv.ts + 1 modules
var template_srv = __webpack_require__("./public/app/features/templating/template_srv.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/expressions.ts
let QueryEditorPropertyType;

(function (QueryEditorPropertyType) {
  QueryEditorPropertyType["String"] = "string";
})(QueryEditorPropertyType || (QueryEditorPropertyType = {}));

let QueryEditorExpressionType;

(function (QueryEditorExpressionType) {
  QueryEditorExpressionType["Property"] = "property";
  QueryEditorExpressionType["Operator"] = "operator";
  QueryEditorExpressionType["Or"] = "or";
  QueryEditorExpressionType["And"] = "and";
  QueryEditorExpressionType["GroupBy"] = "groupBy";
  QueryEditorExpressionType["Function"] = "function";
  QueryEditorExpressionType["FunctionParameter"] = "functionParameter";
})(QueryEditorExpressionType || (QueryEditorExpressionType = {}));
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/SQLGenerator.ts


class SQLGenerator {
  constructor() {
    let templateSrv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,template_srv/* getTemplateSrv */.J)();
    this.templateSrv = templateSrv;
    this.templateSrv = templateSrv;
  }

  expressionToSqlQuery(_ref) {
    var _select$parameters, _where$expressions$le, _where$expressions;

    let {
      select,
      from,
      where,
      groupBy,
      orderBy,
      orderByDirection,
      limit
    } = _ref;

    if (!from || !(select !== null && select !== void 0 && select.name) || !(select !== null && select !== void 0 && (_select$parameters = select.parameters) !== null && _select$parameters !== void 0 && _select$parameters.length)) {
      return undefined;
    }

    let parts = [];
    this.appendSelect(select, parts);
    this.appendFrom(from, parts);
    this.appendWhere(where, parts, true, (_where$expressions$le = where === null || where === void 0 ? void 0 : (_where$expressions = where.expressions) === null || _where$expressions === void 0 ? void 0 : _where$expressions.length) !== null && _where$expressions$le !== void 0 ? _where$expressions$le : 0);
    this.appendGroupBy(groupBy, parts);
    this.appendOrderBy(orderBy, orderByDirection, parts);
    this.appendLimit(limit, parts);
    return parts.join(' ');
  }

  appendSelect(select, parts) {
    parts.push('SELECT');
    this.appendFunction(select, parts);
  }

  appendFrom(from, parts) {
    var _from$property$name, _from$property;

    parts.push('FROM');
    (from === null || from === void 0 ? void 0 : from.type) === QueryEditorExpressionType.Function ? this.appendFunction(from, parts) : parts.push(this.formatValue((_from$property$name = from === null || from === void 0 ? void 0 : (_from$property = from.property) === null || _from$property === void 0 ? void 0 : _from$property.name) !== null && _from$property$name !== void 0 ? _from$property$name : ''));
  }

  appendWhere(filter, parts, isTopLevelExpression, topLevelExpressionsCount) {
    if (!filter) {
      return;
    }

    const hasChildExpressions = 'expressions' in filter && filter.expressions.length > 0;

    if (isTopLevelExpression && hasChildExpressions) {
      parts.push('WHERE');
    }

    if (filter.type === QueryEditorExpressionType.And) {
      const andParts = [];
      filter.expressions.map(exp => this.appendWhere(exp, andParts, false, topLevelExpressionsCount));

      if (andParts.length === 0) {
        return;
      }

      const andCombined = andParts.join(' AND ');
      const wrapInParentheses = !isTopLevelExpression && topLevelExpressionsCount > 1 && andParts.length > 1;
      return parts.push(wrapInParentheses ? `(${andCombined})` : andCombined);
    }

    if (filter.type === QueryEditorExpressionType.Or) {
      const orParts = [];
      filter.expressions.map(exp => this.appendWhere(exp, orParts, false, topLevelExpressionsCount));

      if (orParts.length === 0) {
        return;
      }

      const orCombined = orParts.join(' OR ');
      const wrapInParentheses = !isTopLevelExpression && topLevelExpressionsCount > 1 && orParts.length > 1;
      parts.push(wrapInParentheses ? `(${orCombined})` : orCombined);
      return;
    }

    if (filter.type === QueryEditorExpressionType.Operator) {
      return this.appendOperator(filter, parts);
    }
  }

  appendGroupBy(groupBy, parts) {
    const groupByParts = [];

    for (const expression of (_groupBy$expressions = groupBy === null || groupBy === void 0 ? void 0 : groupBy.expressions) !== null && _groupBy$expressions !== void 0 ? _groupBy$expressions : []) {
      var _groupBy$expressions;

      if ((expression === null || expression === void 0 ? void 0 : expression.type) !== QueryEditorExpressionType.GroupBy || !expression.property.name) {
        continue;
      }

      groupByParts.push(this.formatValue(expression.property.name));
    }

    if (groupByParts.length > 0) {
      parts.push(`GROUP BY ${groupByParts.join(', ')}`);
    }
  }

  appendOrderBy(orderBy, orderByDirection, parts) {
    if (orderBy) {
      parts.push('ORDER BY');
      this.appendFunction(orderBy, parts);
      parts.push(orderByDirection !== null && orderByDirection !== void 0 ? orderByDirection : 'ASC');
    }
  }

  appendLimit(limit, parts) {
    limit && parts.push(`LIMIT ${limit}`);
  }

  appendOperator(expression, parts, prefix) {
    const {
      property,
      operator
    } = expression;

    if (!property.name || !operator.name || !operator.value) {
      return;
    }

    parts.push(`${this.formatValue(property.name)} ${operator.name} '${operator.value}'`);
  }

  appendFunction(select, parts) {
    var _select$parameters2;

    if (!(select !== null && select !== void 0 && select.name)) {
      return;
    }

    const params = ((_select$parameters2 = select.parameters) !== null && _select$parameters2 !== void 0 ? _select$parameters2 : []).map(p => p.name && this.formatValue(p.name)).filter(Boolean).join(', ');
    parts.push(`${select.name}(${params})`);
  }

  formatValue(label) {
    const specialCharacters = /[/\s\.-]/; // slash, space, dot or dash

    const interpolated = this.templateSrv.replace(label, {}, 'raw');

    if (specialCharacters.test(interpolated)) {
      return `"${label}"`;
    }

    return label;
  }

}
// EXTERNAL MODULE: ./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/language.ts
var language = __webpack_require__("./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/language.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/utils.ts


function getMetricNameFromExpression(selectExpression) {
  var _selectExpression$par;

  return selectExpression === null || selectExpression === void 0 ? void 0 : (_selectExpression$par = selectExpression.parameters) === null || _selectExpression$par === void 0 ? void 0 : _selectExpression$par[0].name;
}
function getNamespaceFromExpression(fromExpression) {
  // It's just a simple `FROM "AWS/EC2"` expression
  if ((fromExpression === null || fromExpression === void 0 ? void 0 : fromExpression.type) === QueryEditorExpressionType.Property) {
    return fromExpression.property.name; // PR TODO: do we need to test the type here? It can only be string?
  } // It's a more complicated `FROM SCHEMA("AWS/EC2", ...)` expression


  if ((fromExpression === null || fromExpression === void 0 ? void 0 : fromExpression.type) === QueryEditorExpressionType.Function) {
    var _fromExpression$param;

    // TODO: do we need to test the name of the function?
    return (_fromExpression$param = fromExpression.parameters) === null || _fromExpression$param === void 0 ? void 0 : _fromExpression$param[0].name;
  }

  return undefined;
}
function getSchemaLabelKeys(fromExpression) {
  var _fromExpression$param2;

  // Schema label keys are second to n arguments in the from expression function
  if ((fromExpression === null || fromExpression === void 0 ? void 0 : fromExpression.type) === QueryEditorExpressionType.Function && fromExpression !== null && fromExpression !== void 0 && (_fromExpression$param2 = fromExpression.parameters) !== null && _fromExpression$param2 !== void 0 && _fromExpression$param2.length) {
    var _fromExpression$param3;

    if ((fromExpression === null || fromExpression === void 0 ? void 0 : (_fromExpression$param3 = fromExpression.parameters) === null || _fromExpression$param3 === void 0 ? void 0 : _fromExpression$param3.length) <= 1) {
      return [];
    } // ignore the first arg (the namespace)


    const paramExpressions = fromExpression === null || fromExpression === void 0 ? void 0 : fromExpression.parameters.slice(1);
    return paramExpressions.reduce((acc, curr) => curr.name ? [...acc, curr.name] : acc, []);
  }

  return undefined;
}
function isUsingWithSchema(fromExpression) {
  return (fromExpression === null || fromExpression === void 0 ? void 0 : fromExpression.type) === QueryEditorExpressionType.Function && fromExpression.name === language.SCHEMA;
}
/** Given a partial operator expression, return a non-partial if it's valid, or undefined */

function sanitizeOperator(expression) {
  var _expression$property, _expression$operator, _expression$operator2;

  const key = (_expression$property = expression.property) === null || _expression$property === void 0 ? void 0 : _expression$property.name;
  const value = (_expression$operator = expression.operator) === null || _expression$operator === void 0 ? void 0 : _expression$operator.value;
  const operator = (_expression$operator2 = expression.operator) === null || _expression$operator2 === void 0 ? void 0 : _expression$operator2.name;

  if (key && value && operator) {
    return {
      type: QueryEditorExpressionType.Operator,
      property: {
        type: QueryEditorPropertyType.String,
        name: key
      },
      operator: {
        value,
        name: operator
      }
    };
  }

  return undefined;
}
/**
 * Given an array of Expressions, flattens them to the leaf Operator expressions.
 * Note, this loses context of any nested ANDs or ORs, so will not be useful once we support nested conditions */

function flattenOperatorExpressions(expressions) {
  return expressions.flatMap(expression => {
    if (expression.type === QueryEditorExpressionType.Operator) {
      return expression;
    }

    if (expression.type === QueryEditorExpressionType.And || expression.type === QueryEditorExpressionType.Or) {
      return flattenOperatorExpressions(expression.expressions);
    } // Expressions that we don't expect to find in the WHERE filter will be ignored


    return [];
  });
}
/** Returns a flattened list of WHERE filters, losing all context of nested filters or AND vs OR. Not suitable
 * if the UI supports nested conditions
 */


function getFlattenedFilters(sql) {
  var _where$expressions;

  const where = sql.where;
  return flattenOperatorExpressions((_where$expressions = where === null || where === void 0 ? void 0 : where.expressions) !== null && _where$expressions !== void 0 ? _where$expressions : []);
}
/**
 * Given an array of Expressions, flattens them to the leaf Operator expressions.
 * Note, this loses context of any nested ANDs or ORs, so will not be useful once we support nested conditions */

function flattenGroupByExpressions(expressions) {
  return expressions.flatMap(expression => {
    if (expression.type === QueryEditorExpressionType.GroupBy) {
      return expression;
    } // Expressions that we don't expect to find in the GROUP BY will be ignored


    return [];
  });
}
/** Returns a flattened list of GROUP BY expressions, losing all context of nested filters or AND vs OR.
 */


function getFlattenedGroupBys(sql) {
  var _groupBy$expressions;

  const groupBy = sql.groupBy;
  return flattenGroupByExpressions((_groupBy$expressions = groupBy === null || groupBy === void 0 ? void 0 : groupBy.expressions) !== null && _groupBy$expressions !== void 0 ? _groupBy$expressions : []);
}
/** Converts a string array to a Dimensions object with null values  **/

function stringArrayToDimensions(arr) {
  return arr.reduce((acc, curr) => {
    if (curr) {
      return Object.assign({}, acc, {
        [curr]: null
      });
    }

    return acc;
  }, {});
}
function setSql(query, sql) {
  var _query$sql;

  return Object.assign({}, query, {
    sql: Object.assign({}, (_query$sql = query.sql) !== null && _query$sql !== void 0 ? _query$sql : {}, sql)
  });
}
function setNamespace(query, namespace) {
  var _query$sql2;

  const sql = (_query$sql2 = query.sql) !== null && _query$sql2 !== void 0 ? _query$sql2 : {}; //updating `namespace` props for CloudWatchMetricsQuery

  query.namespace = namespace ? namespace : '';

  if (namespace === undefined) {
    return setSql(query, {
      from: undefined
    });
  } // It's just a simple `FROM "AWS/EC2"` expression


  if (!sql.from || sql.from.type === QueryEditorExpressionType.Property) {
    return setSql(query, {
      from: {
        type: QueryEditorExpressionType.Property,
        property: {
          type: QueryEditorPropertyType.String,
          name: namespace
        }
      }
    });
  } // It's a more complicated `FROM SCHEMA("AWS/EC2", ...)` expression


  if (sql.from.type === QueryEditorExpressionType.Function) {
    var _sql$from$parameters;

    const namespaceParam = {
      type: QueryEditorExpressionType.FunctionParameter,
      name: namespace
    };
    const labelKeys = ((_sql$from$parameters = sql.from.parameters) !== null && _sql$from$parameters !== void 0 ? _sql$from$parameters : []).slice(1);
    return setSql(query, {
      from: {
        type: QueryEditorExpressionType.Function,
        name: language.SCHEMA,
        parameters: [namespaceParam, ...labelKeys]
      }
    });
  } // TODO: do the with schema bit


  return query;
}
function setSchemaLabels(query, schemaLabels) {
  var _query$sql3, _sql$from, _sql$from$parameters2;

  const sql = (_query$sql3 = query.sql) !== null && _query$sql3 !== void 0 ? _query$sql3 : {};
  schemaLabels = Array.isArray(schemaLabels) ? schemaLabels.map(l => l.value) : [schemaLabels.value]; // schema labels are the second parameter in the schema function. `... FROM SCHEMA("AWS/EC2", label1, label2 ...)`

  if (((_sql$from = sql.from) === null || _sql$from === void 0 ? void 0 : _sql$from.type) === QueryEditorExpressionType.Function && (_sql$from$parameters2 = sql.from.parameters) !== null && _sql$from$parameters2 !== void 0 && _sql$from$parameters2.length) {
    var _schemaLabels, _sql$from$parameters3;

    const parameters = ((_schemaLabels = schemaLabels) !== null && _schemaLabels !== void 0 ? _schemaLabels : []).map(label => ({
      type: QueryEditorExpressionType.FunctionParameter,
      name: label
    }));
    const namespaceParam = ((_sql$from$parameters3 = sql.from.parameters) !== null && _sql$from$parameters3 !== void 0 ? _sql$from$parameters3 : [])[0];
    return setSql(query, {
      from: {
        type: QueryEditorExpressionType.Function,
        name: language.SCHEMA,
        parameters: [namespaceParam, ...parameters]
      }
    });
  }

  return query;
}
function setMetricName(query, metricName) {
  var _query$sql$select, _query$sql4;

  const param = {
    type: QueryEditorExpressionType.FunctionParameter,
    name: metricName
  };
  return setSql(query, {
    select: Object.assign({
      type: QueryEditorExpressionType.Function
    }, (_query$sql$select = (_query$sql4 = query.sql) === null || _query$sql4 === void 0 ? void 0 : _query$sql4.select) !== null && _query$sql$select !== void 0 ? _query$sql$select : {}, {
      parameters: [param]
    })
  });
}
function removeMetricName(query) {
  var _queryWithNoParams$sq, _queryWithNoParams$sq2;

  const queryWithNoParams = Object.assign({}, query);
  (_queryWithNoParams$sq = queryWithNoParams.sql) === null || _queryWithNoParams$sq === void 0 ? true : (_queryWithNoParams$sq2 = _queryWithNoParams$sq.select) === null || _queryWithNoParams$sq2 === void 0 ? true : delete _queryWithNoParams$sq2.parameters;
  return queryWithNoParams;
}
function setAggregation(query, aggregation) {
  var _query$sql$select2, _query$sql5;

  return setSql(query, {
    select: Object.assign({
      type: QueryEditorExpressionType.Function
    }, (_query$sql$select2 = (_query$sql5 = query.sql) === null || _query$sql5 === void 0 ? void 0 : _query$sql5.select) !== null && _query$sql$select2 !== void 0 ? _query$sql$select2 : {}, {
      name: aggregation
    })
  });
}
function setOrderBy(query, aggregation) {
  return setSql(query, {
    orderBy: {
      type: QueryEditorExpressionType.Function,
      name: aggregation
    }
  });
}
function setWithSchema(query, withSchema) {
  var _query$sql6;

  const namespace = getNamespaceFromExpression(((_query$sql6 = query.sql) !== null && _query$sql6 !== void 0 ? _query$sql6 : {}).from);

  if (withSchema) {
    const namespaceParam = {
      type: QueryEditorExpressionType.FunctionParameter,
      name: namespace
    };
    return setSql(query, {
      from: {
        type: QueryEditorExpressionType.Function,
        name: language.SCHEMA,
        parameters: [namespaceParam]
      }
    });
  }

  return setSql(query, {
    from: {
      type: QueryEditorExpressionType.Property,
      property: {
        type: QueryEditorPropertyType.String,
        name: namespace
      }
    }
  });
}
/** Sets the left hand side (InstanceId) in an OperatorExpression
 * Accepts a partial expression to use in an editor
 */

function setOperatorExpressionProperty(expression, property) {
  var _expression$operator3;

  return {
    type: QueryEditorExpressionType.Operator,
    property: {
      type: QueryEditorPropertyType.String,
      name: property
    },
    operator: (_expression$operator3 = expression.operator) !== null && _expression$operator3 !== void 0 ? _expression$operator3 : {}
  };
}
/** Sets the operator ("==") in an OperatorExpression
 * Accepts a partial expression to use in an editor
 */

function setOperatorExpressionName(expression, name) {
  var _expression$property2;

  return {
    type: QueryEditorExpressionType.Operator,
    property: (_expression$property2 = expression.property) !== null && _expression$property2 !== void 0 ? _expression$property2 : {
      type: QueryEditorPropertyType.String
    },
    operator: Object.assign({}, expression.operator, {
      name
    })
  };
}
/** Sets the right hand side ("i-abc123445") in an OperatorExpression
 * Accepts a partial expression to use in an editor
 */

function setOperatorExpressionValue(expression, value) {
  var _expression$property3;

  return {
    type: QueryEditorExpressionType.Operator,
    property: (_expression$property3 = expression.property) !== null && _expression$property3 !== void 0 ? _expression$property3 : {
      type: QueryEditorPropertyType.String
    },
    operator: Object.assign({}, expression.operator, {
      value
    })
  };
}
/** Creates a GroupByExpression for a specified field
 */

function setGroupByField(field) {
  return {
    type: QueryEditorExpressionType.GroupBy,
    property: {
      type: QueryEditorPropertyType.String,
      name: field
    }
  };
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/SQLBuilderSelectRow.tsx











const AGGREGATIONS = language.STATISTICS.map(src.toOption);

const SQLBuilderSelectRow = _ref => {
  var _query$sql, _sql$select;

  let {
    datasource,
    query,
    onQueryChange
  } = _ref;
  const sql = (_query$sql = query.sql) !== null && _query$sql !== void 0 ? _query$sql : {};
  const aggregation = (_sql$select = sql.select) === null || _sql$select === void 0 ? void 0 : _sql$select.name;
  (0,react.useEffect)(() => {
    if (!aggregation) {
      onQueryChange(setAggregation(query, language.STATISTICS[0]));
    }
  }, [aggregation, onQueryChange, query]);
  const metricName = getMetricNameFromExpression(sql.select);
  const namespace = getNamespaceFromExpression(sql.from);
  const schemaLabels = getSchemaLabelKeys(sql.from);
  const withSchemaEnabled = isUsingWithSchema(sql.from);
  const namespaceOptions = useNamespaces(datasource);
  const metricOptions = useMetrics(datasource, query.region, namespace);
  const existingFilters = (0,react.useMemo)(() => stringArrayToDimensions(schemaLabels !== null && schemaLabels !== void 0 ? schemaLabels : []), [schemaLabels]);
  const unusedDimensionKeys = useDimensionKeys(datasource, query.region, namespace, metricName, existingFilters);
  const dimensionKeys = (0,react.useMemo)(() => schemaLabels !== null && schemaLabels !== void 0 && schemaLabels.length ? [...unusedDimensionKeys, ...schemaLabels.map(src.toOption)] : unusedDimensionKeys, [unusedDimensionKeys, schemaLabels]);

  const onNamespaceChange = async query => {
    const validatedQuery = await validateMetricName(query);
    onQueryChange(validatedQuery);
  };

  const validateMetricName = async query => {
    let {
      region,
      sql
    } = query;
    await datasource.getMetrics(query.namespace, region).then(result => {
      if (!result.some(metric => metric.value === metricName)) {
        sql = removeMetricName(query).sql;
      }
    });
    return Object.assign({}, query, {
      sql
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.EditorFieldGroup, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Namespace",
        width: 16,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          "aria-label": "Namespace",
          value: namespace ? (0,src.toOption)(namespace) : null,
          inputId: `${query.refId}-cloudwatch-sql-namespace`,
          options: namespaceOptions,
          allowCustomValue: true,
          onChange: _ref2 => {
            let {
              value
            } = _ref2;
            return value && onNamespaceChange(setNamespace(query, value));
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "With schema",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorSwitch, {
          id: `${query.refId}-cloudwatch-sql-withSchema`,
          value: withSchemaEnabled,
          onChange: ev => ev.target instanceof HTMLInputElement && onQueryChange(setWithSchema(query, ev.target.checked))
        })
      }), withSchemaEnabled && /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Schema labels",
        disabled: !namespace,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          id: `${query.refId}-cloudwatch-sql-schema-label-keys`,
          width: "auto",
          isMulti: true,
          value: schemaLabels ? schemaLabels.map(src.toOption) : null,
          options: dimensionKeys,
          allowCustomValue: true,
          onChange: item => item && onQueryChange(setSchemaLabels(query, item))
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.EditorFieldGroup, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Metric name",
        width: 16,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          "aria-label": "Metric name",
          value: metricName ? (0,src.toOption)(metricName) : null,
          options: metricOptions,
          allowCustomValue: true,
          onChange: _ref3 => {
            let {
              value
            } = _ref3;
            return value && onQueryChange(setMetricName(query, value));
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Aggregation",
        width: 16,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          "aria-label": "Aggregation",
          value: aggregation ? (0,src.toOption)(aggregation) : null,
          options: appendTemplateVariables(datasource, AGGREGATIONS),
          onChange: _ref4 => {
            let {
              value
            } = _ref4;
            return value && onQueryChange(setAggregation(query, value));
          }
        })
      })]
    })]
  });
};

/* harmony default export */ const SQLBuilderEditor_SQLBuilderSelectRow = (SQLBuilderSelectRow);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/SQLFilter.tsx












const OPERATORS = language.COMPARISON_OPERATORS.map(src.toOption);

const SQLFilter = _ref => {
  let {
    query,
    onQueryChange,
    datasource
  } = _ref;
  const filtersFromQuery = (0,react.useMemo)(() => {
    var _query$sql;

    return getFlattenedFilters((_query$sql = query.sql) !== null && _query$sql !== void 0 ? _query$sql : {});
  }, [query.sql]);
  const [filters, setFilters] = (0,react.useState)(filtersFromQuery);

  const onChange = newItems => {
    // As new (empty object) items come in, with need to make sure they have the correct type
    const cleaned = newItems.map(v => {
      var _v$property, _v$operator;

      return {
        type: QueryEditorExpressionType.Operator,
        property: (_v$property = v.property) !== null && _v$property !== void 0 ? _v$property : {
          type: QueryEditorPropertyType.String
        },
        operator: (_v$operator = v.operator) !== null && _v$operator !== void 0 ? _v$operator : {
          name: language.EQUALS
        }
      };
    });
    setFilters(cleaned); // Only save valid and complete filters into the query state

    const validExpressions = [];

    for (const operatorExpression of cleaned) {
      const validated = sanitizeOperator(operatorExpression);

      if (validated) {
        validExpressions.push(validated);
      }
    }

    const where = validExpressions.length ? {
      type: QueryEditorExpressionType.And,
      expressions: validExpressions
    } : undefined;
    onQueryChange(setSql(query, {
      where
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorList, {
    items: filters,
    onChange: onChange,
    renderItem: SQLFilter_makeRenderFilter(datasource, query)
  });
}; // Making component functions in the render body is not recommended, but it works for now.
// If some problems arise (perhaps with state going missing), consider this to be a potential cause


function SQLFilter_makeRenderFilter(datasource, query) {
  function renderFilter(item, onChange, onDelete) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(SQLFilter_FilterItem, {
      datasource: datasource,
      query: query,
      filter: item,
      onChange: onChange,
      onDelete: onDelete
    });
  }

  return renderFilter;
}

/* harmony default export */ const SQLBuilderEditor_SQLFilter = (SQLFilter);

const SQLFilter_FilterItem = props => {
  var _query$sql2, _filter$property2, _filter$property3, _filter$property4, _filter$operator, _filter$operator2, _filter$operator3, _filter$operator4;

  const {
    datasource,
    query,
    filter,
    onChange,
    onDelete
  } = props;
  const sql = (_query$sql2 = query.sql) !== null && _query$sql2 !== void 0 ? _query$sql2 : {};
  const namespace = getNamespaceFromExpression(sql.from);
  const metricName = getMetricNameFromExpression(sql.select);
  const dimensionKeys = useDimensionKeys(datasource, query.region, namespace, metricName);

  const loadDimensionValues = async () => {
    var _filter$property;

    if (!((_filter$property = filter.property) !== null && _filter$property !== void 0 && _filter$property.name)) {
      return [];
    }

    return datasource.getDimensionValues(query.region, namespace, metricName, filter.property.name, {}).then(result => {
      return appendTemplateVariables(datasource, result);
    });
  };

  const [state, loadOptions] = (0,useAsyncFn/* default */.Z)(loadDimensionValues, [query.region, namespace, metricName, (_filter$property2 = filter.property) === null || _filter$property2 === void 0 ? void 0 : _filter$property2.name]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.InputGroup, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      width: "auto",
      value: (_filter$property3 = filter.property) !== null && _filter$property3 !== void 0 && _filter$property3.name ? (0,src.toOption)((_filter$property4 = filter.property) === null || _filter$property4 === void 0 ? void 0 : _filter$property4.name) : null,
      options: dimensionKeys,
      allowCustomValue: true,
      onChange: _ref2 => {
        let {
          value
        } = _ref2;
        return value && onChange(setOperatorExpressionProperty(filter, value));
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      width: "auto",
      value: ((_filter$operator = filter.operator) === null || _filter$operator === void 0 ? void 0 : _filter$operator.name) && (0,src.toOption)(filter.operator.name),
      options: OPERATORS,
      onChange: _ref3 => {
        let {
          value
        } = _ref3;
        return value && onChange(setOperatorExpressionName(filter, value));
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      width: "auto",
      isLoading: state.loading,
      value: (_filter$operator2 = filter.operator) !== null && _filter$operator2 !== void 0 && _filter$operator2.value && typeof ((_filter$operator3 = filter.operator) === null || _filter$operator3 === void 0 ? void 0 : _filter$operator3.value) === 'string' ? (0,src.toOption)((_filter$operator4 = filter.operator) === null || _filter$operator4 === void 0 ? void 0 : _filter$operator4.value) : null,
      options: state.value,
      allowCustomValue: true,
      onOpenMenu: loadOptions,
      onChange: _ref4 => {
        let {
          value
        } = _ref4;
        return value && onChange(setOperatorExpressionValue(filter, value));
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.AccessoryButton, {
      "aria-label": "remove",
      icon: "times",
      variant: "secondary",
      onClick: onDelete
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/SQLGroupBy.tsx










const SQLGroupBy = _ref => {
  var _query$sql;

  let {
    query,
    datasource,
    onQueryChange
  } = _ref;
  const sql = (_query$sql = query.sql) !== null && _query$sql !== void 0 ? _query$sql : {};
  const groupBysFromQuery = (0,react.useMemo)(() => {
    var _query$sql2;

    return getFlattenedGroupBys((_query$sql2 = query.sql) !== null && _query$sql2 !== void 0 ? _query$sql2 : {});
  }, [query.sql]);
  const [items, setItems] = (0,react.useState)(groupBysFromQuery);
  const namespace = getNamespaceFromExpression(sql.from);
  const metricName = getMetricNameFromExpression(sql.select);
  const baseOptions = useDimensionKeys(datasource, query.region, namespace, metricName);
  const options = (0,react.useMemo)( // Exclude options we've already selected
  () => baseOptions.filter(option => !groupBysFromQuery.some(v => v.property.name === option.value)), [baseOptions, groupBysFromQuery]);

  const onChange = newItems => {
    // As new (empty object) items come in, with need to make sure they have the correct type
    const cleaned = newItems.map(v => {
      var _v$property;

      return {
        type: QueryEditorExpressionType.GroupBy,
        property: {
          type: QueryEditorPropertyType.String,
          name: (_v$property = v.property) === null || _v$property === void 0 ? void 0 : _v$property.name
        }
      };
    });
    setItems(cleaned); // Only save complete expressions into the query state;

    const completeExpressions = cleaned.filter(v => {
      var _v$property2;

      return (_v$property2 = v.property) === null || _v$property2 === void 0 ? void 0 : _v$property2.name;
    });
    const groupBy = completeExpressions.length ? {
      type: QueryEditorExpressionType.And,
      expressions: completeExpressions
    } : undefined;
    onQueryChange(setSql(query, {
      groupBy
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorList, {
    items: items,
    onChange: onChange,
    renderItem: makeRenderItem(options)
  });
};

function makeRenderItem(options) {
  function renderItem(item, onChange, onDelete) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(GroupByItem, {
      options: options,
      item: item,
      onChange: onChange,
      onDelete: onDelete
    });
  }

  return renderItem;
}

const GroupByItem = props => {
  var _item$property;

  const {
    options,
    item,
    onChange,
    onDelete
  } = props;
  const fieldName = (_item$property = item.property) === null || _item$property === void 0 ? void 0 : _item$property.name;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.InputGroup, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      "aria-label": `Group by ${fieldName !== null && fieldName !== void 0 ? fieldName : 'filter key'}`,
      width: "auto",
      value: fieldName ? (0,src.toOption)(fieldName) : null,
      options: options,
      allowCustomValue: true,
      onChange: _ref2 => {
        let {
          value
        } = _ref2;
        return value && onChange(setGroupByField(value));
      }
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.AccessoryButton, {
      "aria-label": "remove",
      icon: "times",
      variant: "secondary",
      onClick: onDelete
    })]
  });
};

/* harmony default export */ const SQLBuilderEditor_SQLGroupBy = (SQLGroupBy);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/SQLOrderByGroup.tsx









const orderByDirections = [{
  label: language.ASC,
  value: language.ASC
}, {
  label: language.DESC,
  value: language.DESC
}];

const SQLOrderByGroup = _ref => {
  var _query$sql, _sql$orderBy;

  let {
    query,
    onQueryChange,
    datasource
  } = _ref;
  const sql = (_query$sql = query.sql) !== null && _query$sql !== void 0 ? _query$sql : {};
  const orderBy = (_sql$orderBy = sql.orderBy) === null || _sql$orderBy === void 0 ? void 0 : _sql$orderBy.name;
  const orderByDirection = sql.orderByDirection;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.EditorFieldGroup, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
      label: "Order by",
      optional: true,
      width: 16,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.InputGroup, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          "aria-label": "Order by",
          onChange: _ref2 => {
            let {
              value
            } = _ref2;
            return value && onQueryChange(setOrderBy(query, value));
          },
          options: appendTemplateVariables(datasource, language.STATISTICS.map(src.toOption)),
          value: orderBy ? (0,src.toOption)(orderBy) : null
        }), orderBy && /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.AccessoryButton, {
          "aria-label": "remove",
          icon: "times",
          variant: "secondary",
          onClick: () => onQueryChange(setSql(query, {
            orderBy: undefined
          }))
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
      label: "Direction",
      disabled: !orderBy,
      width: 16,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        "aria-label": "Direction",
        inputId: "cloudwatch-sql-order-by-direction",
        value: orderByDirection ? (0,src.toOption)(orderByDirection) : orderByDirections[0],
        options: appendTemplateVariables(datasource, orderByDirections),
        onChange: item => item && onQueryChange(setSql(query, {
          orderByDirection: item.value
        }))
      })
    })]
  });
};

/* harmony default export */ const SQLBuilderEditor_SQLOrderByGroup = (SQLOrderByGroup);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/SQLBuilderEditor.tsx











function SQLBuilderEditor(_ref) {
  var _query$sql, _query$sql4;

  let {
    query,
    datasource,
    onChange,
    onRunQuery
  } = _ref;
  const sql = (_query$sql = query.sql) !== null && _query$sql !== void 0 ? _query$sql : {};
  const onQueryChange = (0,react.useCallback)(query => {
    var _query$sql2;

    const sqlGenerator = new SQLGenerator();
    const sqlString = sqlGenerator.expressionToSqlQuery((_query$sql2 = query.sql) !== null && _query$sql2 !== void 0 ? _query$sql2 : {});
    const fullQuery = Object.assign({}, query, {
      sqlExpression: sqlString
    });
    onChange(fullQuery);
    onRunQuery();
  }, [onChange, onRunQuery]);
  const [sqlPreview, setSQLPreview] = (0,react.useState)();
  (0,react.useEffect)(() => {
    var _query$sql3;

    const sqlGenerator = new SQLGenerator();
    const sqlString = sqlGenerator.expressionToSqlQuery((_query$sql3 = query.sql) !== null && _query$sql3 !== void 0 ? _query$sql3 : {});

    if (sqlPreview !== sqlString) {
      setSQLPreview(sqlString);
    }
  }, [query, sqlPreview, setSQLPreview]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.EditorRows, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(SQLBuilderEditor_SQLBuilderSelectRow, {
        query: query,
        onQueryChange: onQueryChange,
        datasource: datasource
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Filter",
        optional: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(SQLBuilderEditor_SQLFilter, {
          query: query,
          onQueryChange: onQueryChange,
          datasource: datasource
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.EditorRow, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Group by",
        optional: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(SQLBuilderEditor_SQLGroupBy, {
          query: query,
          onQueryChange: onQueryChange,
          datasource: datasource
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(SQLBuilderEditor_SQLOrderByGroup, {
        query: query,
        onQueryChange: onQueryChange,
        datasource: datasource
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Limit",
        optional: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: `${query.refId}-cloudwatch-sql-builder-editor-limit`,
          value: sql.limit,
          onChange: e => {
            const val = e.currentTarget.valueAsNumber;
            onQueryChange(setSql(query, {
              limit: isNaN(val) ? undefined : val
            }));
          },
          type: "number",
          min: 1
        })
      })]
    }), sqlPreview && /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.EditorRow, {
      children: [ false && /*#__PURE__*/0, /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
        children: sqlPreview !== null && sqlPreview !== void 0 ? sqlPreview : ''
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/SQLBuilderEditor/index.tsx

;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/metric-math/definition.ts
const cloudWatchMetricMathLanguageDefinition = {
  id: 'cloudwatch-MetricMath',
  extensions: [],
  aliases: [],
  mimetypes: [],
  loader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./public/app/plugins/datasource/cloudwatch/metric-math/language.ts"))
};
/* harmony default export */ const definition = (cloudWatchMetricMathLanguageDefinition);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/monarch/commands.ts
const TRIGGER_SUGGEST = {
  id: 'editor.action.triggerSuggest',
  title: ''
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/monarch/register.ts
const registerLanguage = (monaco, language, completionItemProvider) => {
  const {
    id,
    loader
  } = language;
  const languages = monaco.languages.getLanguages();

  if (languages.find(l => l.id === id)) {
    return;
  }

  monaco.languages.register({
    id
  });
  loader().then(monarch => {
    monaco.languages.setMonarchTokensProvider(id, monarch.language);
    monaco.languages.setLanguageConfiguration(id, monarch.conf);
    monaco.languages.registerCompletionItemProvider(id, completionItemProvider.getCompletionProvider(monaco, language));
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/MathExpressionQueryField.tsx






function MathExpressionQueryField(_ref) {
  let {
    expression: query,
    onChange,
    onRunQuery,
    datasource
  } = _ref;
  const containerRef = (0,react.useRef)(null);
  const onEditorMount = (0,react.useCallback)((editor, monaco) => {
    editor.onDidFocusEditorText(() => editor.trigger(TRIGGER_SUGGEST.id, TRIGGER_SUGGEST.id, {}));
    editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
      const text = editor.getValue();
      onChange(text);
      onRunQuery();
    }); // auto resizes the editor to be the height of the content it holds
    // this code comes from the Prometheus query editor.
    // We may wish to consider abstracting it into the grafana/ui repo in the future

    const updateElementHeight = () => {
      const containerDiv = containerRef.current;

      if (containerDiv !== null && editor.getContentHeight() < 200) {
        const pixelHeight = editor.getContentHeight();
        containerDiv.style.height = `${pixelHeight}px`;
        containerDiv.style.width = '100%';
        const pixelWidth = containerDiv.clientWidth;
        editor.layout({
          width: pixelWidth,
          height: pixelHeight
        });
      }
    };

    editor.onDidContentSizeChange(updateElementHeight);
    updateElementHeight();
  }, [onChange, onRunQuery]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    ref: containerRef,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CodeEditor, {
      monacoOptions: {
        // without this setting, the auto-resize functionality causes an infinite loop, don't remove it!
        scrollBeyondLastLine: false,
        // These additional options are style focused and are a subset of those in the query editor in Prometheus
        fontSize: 14,
        lineNumbers: 'off',
        renderLineHighlight: 'none',
        scrollbar: {
          vertical: 'hidden',
          horizontal: 'hidden'
        },
        suggestFontSize: 12,
        wordWrap: 'on'
      },
      language: definition.id,
      value: query,
      onBlur: value => {
        if (value !== query) {
          onChange(value);
          onRunQuery();
        }
      },
      onBeforeEditorMount: monaco => registerLanguage(monaco, definition, datasource.metricMathCompletionItemProvider),
      onEditorDidMount: onEditorMount
    })
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/definition.ts
const cloudWatchSqlLanguageDefinition = {
  id: 'cloudwatch-sql',
  extensions: ['.cloudwatchSql'],
  aliases: ['CloudWatch', 'cloudwatch', 'CloudWatchSQL'],
  mimetypes: [],
  loader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/language.ts"))
};
/* harmony default export */ const cloudwatch_sql_definition = (cloudWatchSqlLanguageDefinition);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/SQLCodeEditor.tsx






const SQLCodeEditor = _ref => {
  let {
    region,
    sql,
    onChange,
    onRunQuery,
    datasource
  } = _ref;
  (0,react.useEffect)(() => {
    datasource.sqlCompletionItemProvider.setRegion(region);
  }, [region, datasource]);
  const onEditorMount = (0,react.useCallback)((editor, monaco) => {
    editor.onDidFocusEditorText(() => editor.trigger(TRIGGER_SUGGEST.id, TRIGGER_SUGGEST.id, {}));
    editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
      const text = editor.getValue();
      onChange(text);
      onRunQuery();
    });
  }, [onChange, onRunQuery]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CodeEditor, {
    height: '150px',
    language: cloudwatch_sql_definition.id,
    value: sql,
    onBlur: value => {
      if (value !== sql) {
        onChange(value);
      }
    },
    showMiniMap: false,
    showLineNumbers: true,
    onBeforeEditorMount: monaco => registerLanguage(monaco, cloudwatch_sql_definition, datasource.sqlCompletionItemProvider),
    onEditorDidMount: onEditorMount
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/index.ts








;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/MetricsQueryEditor/Alias.tsx




const Alias = _ref => {
  let {
    value = '',
    onChange,
    id
  } = _ref;
  const [alias, setAlias] = (0,react.useState)(value);
  const propagateOnChange = (0,lodash.debounce)(onChange, 1500);

  onChange = e => {
    setAlias(e.target.value);
    propagateOnChange(e.target.value);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
    id: id,
    type: "text",
    value: alias,
    onChange: onChange,
    "aria-label": "Optional alias"
  });
};
// EXTERNAL MODULE: ./.yarn/cache/fast-deep-equal-npm-3.1.3-790edcfcf5-e21a9d8d84.zip/node_modules/fast-deep-equal/index.js
var fast_deep_equal = __webpack_require__("./.yarn/cache/fast-deep-equal-npm-3.1.3-790edcfcf5-e21a9d8d84.zip/node_modules/fast-deep-equal/index.js");
var fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/migrations/metricQueryMigrations.ts

// Call this function to migrate queries from within the plugin.
function migrateMetricQuery(query) {
  //add metric query migrations here
  const migratedQuery = migrateAliasPatterns(query);
  return migratedQuery;
}
const aliasPatterns = {
  metric: `PROP('MetricName')`,
  namespace: `PROP('Namespace')`,
  period: `PROP('Period')`,
  region: `PROP('Region')`,
  stat: `PROP('Stat')`,
  label: `LABEL`
};
function migrateAliasPatterns(query) {
  if (grafana_runtime_src.config.featureToggles.cloudWatchDynamicLabels && !query.hasOwnProperty('label')) {
    var _query$alias$replace, _query$alias;

    const regex = /{{\s*(.+?)\s*}}/g;
    query.label = (_query$alias$replace = (_query$alias = query.alias) === null || _query$alias === void 0 ? void 0 : _query$alias.replace(regex, (_, value) => {
      if (aliasPatterns.hasOwnProperty(value)) {
        return `\${${aliasPatterns[value]}}`;
      }

      return `\${PROP('Dim.${value}')}`;
    })) !== null && _query$alias$replace !== void 0 ? _query$alias$replace : '';
  }

  return query;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/MetricsQueryEditor/usePreparedMetricsQuery.ts




const DEFAULT_QUERY = {
  queryMode: 'Metrics',
  namespace: '',
  metricName: '',
  expression: '',
  dimensions: {},
  region: 'default',
  id: '',
  statistic: 'Average',
  period: '',
  metricQueryType: types/* MetricQueryType.Search */.$5.Search,
  metricEditorMode: types/* MetricEditorMode.Builder */.MQ.Builder,
  sqlExpression: '',
  matchExact: true
};

const prepareQuery = query => {
  const withDefaults = Object.assign({}, DEFAULT_QUERY, query);
  const migratedQuery = migrateMetricQuery(withDefaults); // If we didn't make any changes to the object, then return the original object to keep the
  // identity the same, and not trigger any other useEffects or anything.

  return fast_deep_equal_default()(migratedQuery, query) ? query : migratedQuery;
};
/**
 * Returns queries with some defaults + migrations, and calls onChange function to notify if it changes
 */


const usePreparedMetricsQuery = (query, onChangeQuery) => {
  const preparedQuery = (0,react.useMemo)(() => prepareQuery(query), [query]);
  (0,react.useEffect)(() => {
    if (preparedQuery !== query) {
      onChangeQuery(preparedQuery);
    }
  }, [preparedQuery, query, onChangeQuery]);
  return preparedQuery;
};

/* harmony default export */ const MetricsQueryEditor_usePreparedMetricsQuery = (usePreparedMetricsQuery);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/MetricsQueryEditor/MetricsQueryEditor.tsx
var _Space, _Space2;














const MetricsQueryEditor = props => {
  var _query$expression, _query$sqlExpression, _preparedQuery$label, _preparedQuery$alias;

  const {
    query,
    onRunQuery,
    datasource
  } = props;
  const [sqlCodeEditorIsDirty, setSQLCodeEditorIsDirty] = (0,react.useState)(false);
  const preparedQuery = MetricsQueryEditor_usePreparedMetricsQuery(query, props.onChange);

  const onChange = query => {
    const {
      onChange,
      onRunQuery
    } = props;
    onChange(query);
    onRunQuery();
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_QueryHeader, {
      query: query,
      onRunQuery: onRunQuery,
      datasource: datasource,
      onChange: newQuery => {
        if (isCloudWatchMetricsQuery(newQuery) && newQuery.metricEditorMode !== query.metricEditorMode) {
          setSQLCodeEditorIsDirty(false);
        }

        onChange(newQuery);
      },
      sqlCodeEditorIsDirty: sqlCodeEditorIsDirty
    }), _Space || (_Space = /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.Space, {
      v: 0.5
    })), query.metricQueryType === types/* MetricQueryType.Search */.$5.Search && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [query.metricEditorMode === types/* MetricEditorMode.Builder */.MQ.Builder && /*#__PURE__*/(0,jsx_runtime.jsx)(MetricStatEditor, Object.assign({}, props, {
        refId: query.refId,
        metricStat: query,
        onChange: metricStat => props.onChange(Object.assign({}, query, metricStat))
      })), query.metricEditorMode === types/* MetricEditorMode.Code */.MQ.Code && /*#__PURE__*/(0,jsx_runtime.jsx)(MathExpressionQueryField, {
        onRunQuery: onRunQuery,
        expression: (_query$expression = query.expression) !== null && _query$expression !== void 0 ? _query$expression : '',
        onChange: expression => props.onChange(Object.assign({}, query, {
          expression
        })),
        datasource: datasource
      })]
    }), query.metricQueryType === types/* MetricQueryType.Query */.$5.Query && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [query.metricEditorMode === types/* MetricEditorMode.Code */.MQ.Code && /*#__PURE__*/(0,jsx_runtime.jsx)(SQLCodeEditor, {
        region: query.region,
        sql: (_query$sqlExpression = query.sqlExpression) !== null && _query$sqlExpression !== void 0 ? _query$sqlExpression : '',
        onChange: sqlExpression => {
          if (!sqlCodeEditorIsDirty) {
            setSQLCodeEditorIsDirty(true);
          }

          props.onChange(Object.assign({}, preparedQuery, {
            sqlExpression
          }));
        },
        onRunQuery: onRunQuery,
        datasource: datasource
      }), query.metricEditorMode === types/* MetricEditorMode.Builder */.MQ.Builder && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(SQLBuilderEditor, {
          query: query,
          onChange: props.onChange,
          onRunQuery: onRunQuery,
          datasource: datasource
        })
      })]
    }), _Space2 || (_Space2 = /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.Space, {
      v: 0.5
    })), /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.EditorRow, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "ID",
        width: 26,
        optional: true,
        tooltip: "ID can be used to reference other queries in math expressions. The ID can include numbers, letters, and underscore, and must start with a lowercase letter.",
        invalid: !!query.id && !/^$|^[a-z][a-zA-Z0-9_]*$/.test(query.id),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: `${query.refId}-cloudwatch-metric-query-editor-id`,
          onBlur: onRunQuery,
          onChange: event => onChange(Object.assign({}, preparedQuery, {
            id: event.target.value
          })),
          type: "text",
          value: query.id
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Period",
        width: 26,
        tooltip: "Minimum interval between points in seconds.",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: `${query.refId}-cloudwatch-metric-query-editor-period`,
          value: query.period || '',
          placeholder: "auto",
          onBlur: onRunQuery,
          onChange: event => onChange(Object.assign({}, preparedQuery, {
            period: event.target.value
          }))
        })
      }), grafana_runtime_src.config.featureToggles.cloudWatchDynamicLabels ? /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Label",
        width: 26,
        optional: true,
        tooltip: "Change time series legend name using Dynamic labels. See documentation for details.",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: `${query.refId}-cloudwatch-metric-query-editor-label`,
          placeholder: "auto",
          onBlur: onRunQuery,
          value: (_preparedQuery$label = preparedQuery.label) !== null && _preparedQuery$label !== void 0 ? _preparedQuery$label : '',
          onChange: event => onChange(Object.assign({}, preparedQuery, {
            label: event.target.value
          }))
        })
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Alias",
        width: 26,
        optional: true,
        tooltip: "Change time series legend name using this field. See documentation for replacement variable formats.",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Alias, {
          id: `${query.refId}-cloudwatch-metric-query-editor-alias`,
          value: (_preparedQuery$alias = preparedQuery.alias) !== null && _preparedQuery$alias !== void 0 ? _preparedQuery$alias : '',
          onChange: value => onChange(Object.assign({}, preparedQuery, {
            alias: value
          }))
        })
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/PanelQueryEditor.tsx






class PanelQueryEditor extends react.PureComponent {
  render() {
    const {
      query
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: isCloudWatchMetricsQuery(query) ? /*#__PURE__*/(0,jsx_runtime.jsx)(MetricsQueryEditor, Object.assign({}, this.props, {
        query: query
      })) : /*#__PURE__*/(0,jsx_runtime.jsx)(LogsQueryEditor, Object.assign({}, this.props, {
        allowCustomValue: true
      }))
    });
  }

}
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js
var from = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js
var lastValueFrom = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js
var merge = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/zip.js
var zip = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/zip.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js
var throwError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Observable.js
var Observable = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Observable.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
var mergeMap = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/concatMap.js
var concatMap = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/concatMap.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/repeat.js
var repeat = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/repeat.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js
var share = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/scan.js
var scan = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/scan.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/tap.js
var tap = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/tap.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js
var takeWhile = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/takeWhile.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/finalize.js
var finalize = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/finalize.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js
var catchError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
// EXTERNAL MODULE: ./public/app/features/dashboard/services/TimeSrv.ts + 1 modules
var TimeSrv = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var app_types = __webpack_require__("./public/app/types/index.ts");
// EXTERNAL MODULE: ./public/app/core/config.ts
var config = __webpack_require__("./public/app/core/config.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/AnnotationQueryEditor.tsx
var AnnotationQueryEditor_Space, AnnotationQueryEditor_Space2;










const AnnotationQueryEditor = props => {
  const {
    query,
    onChange,
    datasource
  } = props;
  const [regions, regionIsLoading] = useRegions(datasource);

  if (!isCloudWatchAnnotationQuery(query)) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      severity: "error",
      title: "Invalid annotation query",
      topSpacing: 2,
      children: JSON.stringify(query, null, 4)
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorHeader, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.InlineSelect, {
        label: "Region",
        value: regions.find(v => v.value === query.region),
        placeholder: "Select region",
        allowCustomValue: true,
        onChange: _ref => {
          let {
            value: region
          } = _ref;
          return region && onChange(Object.assign({}, query, {
            region
          }));
        },
        options: regions,
        isLoading: regionIsLoading
      })
    }), AnnotationQueryEditor_Space || (AnnotationQueryEditor_Space = /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.Space, {
      v: 0.5
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(MetricStatEditor, Object.assign({}, props, {
      refId: query.refId,
      metricStat: query,
      disableExpressions: true,
      onChange: metricStat => onChange(Object.assign({}, query, metricStat)),
      onRunQuery: () => {}
    })), AnnotationQueryEditor_Space2 || (AnnotationQueryEditor_Space2 = /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.Space, {
      v: 0.5
    })), /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.EditorRow, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Period",
        width: 26,
        tooltip: "Minimum interval between points in seconds.",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          value: query.period || '',
          placeholder: "auto",
          onChange: event => onChange(Object.assign({}, query, {
            period: event.target.value
          }))
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Enable Prefix Matching",
        optional: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorSwitch, {
          value: query.prefixMatching,
          onChange: e => {
            onChange(Object.assign({}, query, {
              prefixMatching: e.currentTarget.checked
            }));
          }
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Action",
        optional: true,
        disabled: !query.prefixMatching,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          value: query.actionPrefix || '',
          onChange: event => onChange(Object.assign({}, query, {
            actionPrefix: event.target.value
          }))
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Alarm Name",
        optional: true,
        disabled: !query.prefixMatching,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          value: query.alarmNamePrefix || '',
          onChange: event => onChange(Object.assign({}, query, {
            alarmNamePrefix: event.target.value
          }))
        })
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/annotationSupport.ts


const CloudWatchAnnotationSupport = {
  // converts legacy angular style queries to new format. Also sets the same default values as in the deprecated angular directive
  prepareAnnotation: query => {
    if (isCloudWatchAnnotation(query)) {
      return query;
    }

    return {
      // setting AnnotationQuery props explicitly since spreading would incorrectly use props that should be on the target only
      datasource: query.datasource,
      enable: query.enable,
      iconColor: query.iconColor,
      name: query.name,
      builtIn: query.builtIn,
      hide: query.hide,
      target: Object.assign({}, query.target, query, {
        statistic: query.statistic || 'Average',
        region: query.region || 'default',
        queryMode: 'Annotations',
        refId: query.refId || 'annotationQuery'
      })
    };
  },
  // return undefined if query is not complete so that annotation query execution is quietly skipped
  prepareQuery: anno => {
    if (!anno.target) {
      return undefined;
    }

    const {
      prefixMatching,
      actionPrefix,
      alarmNamePrefix,
      statistic,
      namespace,
      metricName,
      dimensions = {}
    } = anno.target;
    const validPrefixMatchingQuery = !!prefixMatching && !!actionPrefix && !!alarmNamePrefix;
    const validMetricStatQuery = !prefixMatching && !!namespace && !!metricName && !!statistic && !!Object.values(dimensions).length;

    if (validPrefixMatchingQuery || validMetricStatQuery) {
      return anno.target;
    }

    return undefined;
  },
  QueryEditor: AnnotationQueryEditor
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/monarch/LinkedToken.ts
class LinkedToken {
  constructor(type, value, range, previous, next, tokenTypes) {
    this.type = type;
    this.value = value;
    this.range = range;
    this.previous = previous;
    this.next = next;
    this.tokenTypes = tokenTypes;
    this.type = type;
    this.value = value;
    this.range = range;
    this.previous = previous;
    this.next = next;
    this.tokenTypes = tokenTypes;
  }

  isKeyword() {
    return this.type === this.tokenTypes.Keyword;
  }

  isWhiteSpace() {
    return this.type === this.tokenTypes.Whitespace;
  }

  isParenthesis() {
    return this.type === this.tokenTypes.Parenthesis;
  }

  isIdentifier() {
    return this.type === this.tokenTypes.Identifier;
  }

  isString() {
    return this.type === this.tokenTypes.String;
  }

  isDoubleQuotedString() {
    return this.type === this.tokenTypes.Type;
  }

  isVariable() {
    return this.type === this.tokenTypes.Variable;
  }

  isFunction() {
    return this.type === this.tokenTypes.Function;
  }

  isNumber() {
    return this.type === this.tokenTypes.Number;
  }

  is(type, value) {
    const isType = this.type === type;
    return value !== undefined ? isType && this.value === value : isType;
  }

  endsWith(value) {
    return this.value === value || this.value[this.value.length - 1] === value;
  }

  getPreviousNonWhiteSpaceToken() {
    let curr = this.previous;

    while (curr != null) {
      if (!curr.isWhiteSpace()) {
        return curr;
      }

      curr = curr.previous;
    }

    return null;
  }

  getPreviousOfType(type, value) {
    let curr = this.previous;

    while (curr != null) {
      const isType = curr.type === type;

      if (value !== undefined ? isType && curr.value === value : isType) {
        return curr;
      }

      curr = curr.previous;
    }

    return null;
  }

  getPreviousUntil(type, ignoreTypes, value) {
    let tokens = [];
    let curr = this.previous;

    while (curr != null) {
      if (ignoreTypes.some(t => {
        var _curr;

        return t === ((_curr = curr) === null || _curr === void 0 ? void 0 : _curr.type);
      })) {
        curr = curr.previous;
        continue;
      }

      const isType = curr.type === type;

      if (value !== undefined ? isType && curr.value === value : isType) {
        return tokens;
      }

      if (!curr.isWhiteSpace()) {
        tokens.push(curr);
      }

      curr = curr.previous;
    }

    return tokens;
  }

  getNextUntil(type, ignoreTypes, value) {
    let tokens = [];
    let curr = this.next;

    while (curr != null) {
      if (ignoreTypes.some(t => {
        var _curr2;

        return t === ((_curr2 = curr) === null || _curr2 === void 0 ? void 0 : _curr2.type);
      })) {
        curr = curr.next;
        continue;
      }

      const isType = curr.type === type;

      if (value !== undefined ? isType && curr.value === value : isType) {
        return tokens;
      }

      if (!curr.isWhiteSpace()) {
        tokens.push(curr);
      }

      curr = curr.next;
    }

    return tokens;
  }

  getPreviousKeyword() {
    let curr = this.previous;

    while (curr != null) {
      if (curr.isKeyword()) {
        return curr;
      }

      curr = curr.previous;
    }

    return null;
  }

  getNextNonWhiteSpaceToken() {
    let curr = this.next;

    while (curr != null) {
      if (!curr.isWhiteSpace()) {
        return curr;
      }

      curr = curr.next;
    }

    return null;
  }

  getNextOfType(type, value) {
    let curr = this.next;

    while (curr != null) {
      const isType = curr.type === type;

      if (value !== undefined ? isType && curr.value === value : isType) {
        return curr;
      }

      curr = curr.next;
    }

    return null;
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/monarch/linkedTokenBuilder.ts

function linkedTokenBuilder(monaco, language, model, position, tokenTypes) {
  var _model$getValue;

  let current = null;
  let previous = null;
  const tokensPerLine = monaco.editor.tokenize((_model$getValue = model.getValue()) !== null && _model$getValue !== void 0 ? _model$getValue : '', language.id);

  for (let lineIndex = 0; lineIndex < tokensPerLine.length; lineIndex++) {
    const tokens = tokensPerLine[lineIndex]; // In case position is first column in new line, add empty whitespace token so that links are not broken

    if (!tokens.length && previous) {
      const token = {
        offset: 0,
        type: tokenTypes.Whitespace,
        language: language.id,
        _tokenBrand: undefined
      };
      tokens.push(token);
    }

    for (let columnIndex = 0; columnIndex < tokens.length; columnIndex++) {
      const token = tokens[columnIndex];
      let endColumn = tokens.length > columnIndex + 1 ? tokens[columnIndex + 1].offset + 1 : model.getLineLength(lineIndex + 1) + 1;
      const range = {
        startLineNumber: lineIndex + 1,
        startColumn: token.offset === 0 ? 0 : token.offset + 1,
        endLineNumber: lineIndex + 1,
        endColumn
      };
      const value = model.getValueInRange(range);
      const newToken = new LinkedToken(token.type, value, range, previous, null, tokenTypes);

      if (monaco.Range.containsPosition(range, position)) {
        current = newToken;
      }

      if (previous) {
        previous.next = newToken;
      }

      previous = newToken;
    }
  }

  return current;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/monarch/types.ts
let StatementPosition;

(function (StatementPosition) {
  StatementPosition[StatementPosition["Unknown"] = 0] = "Unknown";
  StatementPosition[StatementPosition["SelectKeyword"] = 1] = "SelectKeyword";
  StatementPosition[StatementPosition["AfterSelectKeyword"] = 2] = "AfterSelectKeyword";
  StatementPosition[StatementPosition["AfterSelectFuncFirstArgument"] = 3] = "AfterSelectFuncFirstArgument";
  StatementPosition[StatementPosition["AfterFromKeyword"] = 4] = "AfterFromKeyword";
  StatementPosition[StatementPosition["SchemaFuncFirstArgument"] = 5] = "SchemaFuncFirstArgument";
  StatementPosition[StatementPosition["SchemaFuncExtraArgument"] = 6] = "SchemaFuncExtraArgument";
  StatementPosition[StatementPosition["FromKeyword"] = 7] = "FromKeyword";
  StatementPosition[StatementPosition["AfterFrom"] = 8] = "AfterFrom";
  StatementPosition[StatementPosition["WhereKey"] = 9] = "WhereKey";
  StatementPosition[StatementPosition["WhereComparisonOperator"] = 10] = "WhereComparisonOperator";
  StatementPosition[StatementPosition["WhereValue"] = 11] = "WhereValue";
  StatementPosition[StatementPosition["AfterWhereValue"] = 12] = "AfterWhereValue";
  StatementPosition[StatementPosition["AfterGroupByKeywords"] = 13] = "AfterGroupByKeywords";
  StatementPosition[StatementPosition["AfterGroupBy"] = 14] = "AfterGroupBy";
  StatementPosition[StatementPosition["AfterOrderByKeywords"] = 15] = "AfterOrderByKeywords";
  StatementPosition[StatementPosition["AfterOrderByFunction"] = 16] = "AfterOrderByFunction";
  StatementPosition[StatementPosition["AfterOrderByDirection"] = 17] = "AfterOrderByDirection";
  StatementPosition[StatementPosition["PredefinedFunction"] = 18] = "PredefinedFunction";
  StatementPosition[StatementPosition["SearchFuncSecondArg"] = 19] = "SearchFuncSecondArg";
  StatementPosition[StatementPosition["SearchFuncThirdArg"] = 20] = "SearchFuncThirdArg";
  StatementPosition[StatementPosition["PredefinedFuncSecondArg"] = 21] = "PredefinedFuncSecondArg";
  StatementPosition[StatementPosition["AfterFunction"] = 22] = "AfterFunction";
  StatementPosition[StatementPosition["WithinString"] = 23] = "WithinString";
})(StatementPosition || (StatementPosition = {}));

let SuggestionKind;

(function (SuggestionKind) {
  SuggestionKind[SuggestionKind["SelectKeyword"] = 0] = "SelectKeyword";
  SuggestionKind[SuggestionKind["FunctionsWithArguments"] = 1] = "FunctionsWithArguments";
  SuggestionKind[SuggestionKind["Metrics"] = 2] = "Metrics";
  SuggestionKind[SuggestionKind["FromKeyword"] = 3] = "FromKeyword";
  SuggestionKind[SuggestionKind["SchemaKeyword"] = 4] = "SchemaKeyword";
  SuggestionKind[SuggestionKind["Namespaces"] = 5] = "Namespaces";
  SuggestionKind[SuggestionKind["LabelKeys"] = 6] = "LabelKeys";
  SuggestionKind[SuggestionKind["WhereKeyword"] = 7] = "WhereKeyword";
  SuggestionKind[SuggestionKind["GroupByKeywords"] = 8] = "GroupByKeywords";
  SuggestionKind[SuggestionKind["OrderByKeywords"] = 9] = "OrderByKeywords";
  SuggestionKind[SuggestionKind["FunctionsWithoutArguments"] = 10] = "FunctionsWithoutArguments";
  SuggestionKind[SuggestionKind["LimitKeyword"] = 11] = "LimitKeyword";
  SuggestionKind[SuggestionKind["SortOrderDirectionKeyword"] = 12] = "SortOrderDirectionKeyword";
  SuggestionKind[SuggestionKind["ComparisonOperators"] = 13] = "ComparisonOperators";
  SuggestionKind[SuggestionKind["LabelValues"] = 14] = "LabelValues";
  SuggestionKind[SuggestionKind["LogicalOperators"] = 15] = "LogicalOperators";
  SuggestionKind[SuggestionKind["KeywordArguments"] = 16] = "KeywordArguments";
  SuggestionKind[SuggestionKind["Operators"] = 17] = "Operators";
  SuggestionKind[SuggestionKind["Statistic"] = 18] = "Statistic";
  SuggestionKind[SuggestionKind["Period"] = 19] = "Period";
})(SuggestionKind || (SuggestionKind = {}));

let CompletionItemPriority;

(function (CompletionItemPriority) {
  CompletionItemPriority["High"] = "a";
  CompletionItemPriority["MediumHigh"] = "d";
  CompletionItemPriority["Medium"] = "g";
  CompletionItemPriority["MediumLow"] = "k";
  CompletionItemPriority["Low"] = "q";
})(CompletionItemPriority || (CompletionItemPriority = {}));
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/monarch/CompletionItemProvider.ts
function CompletionItemProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/*
CompletionItemProvider is an extendable class which needs to implement :
- tokenTypes
- getStatementPosition
- getSuggestionKinds
- getSuggestions
*/
class CompletionItemProvider {
  constructor(datasource) {
    let templateSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,grafana_runtime_src.getTemplateSrv)();

    CompletionItemProvider_defineProperty(this, "templateVariables", void 0);

    CompletionItemProvider_defineProperty(this, "datasource", void 0);

    CompletionItemProvider_defineProperty(this, "templateSrv", void 0);

    CompletionItemProvider_defineProperty(this, "tokenTypes", void 0);

    this.datasource = datasource;
    this.templateSrv = templateSrv;
    this.templateVariables = this.datasource.getVariables();
    this.templateSrv = templateSrv; // implement with more specific tokens when extending this class

    this.tokenTypes = {
      Parenthesis: 'delimiter.parenthesis',
      Whitespace: 'white',
      Keyword: 'keyword',
      Delimiter: 'delimiter',
      Operator: 'operator',
      Identifier: 'identifier',
      Type: 'type',
      Function: 'predefined',
      Number: 'number',
      String: 'string',
      Variable: 'variable'
    };
  } // implemented by subclasses, given a token, returns a lexical position in a query


  getStatementPosition(currentToken) {
    return StatementPosition.Unknown;
  } // implemented by subclasses, given a lexical statement position, returns potential kinds of suggestions


  getSuggestionKinds(position) {
    return [];
  } // implemented by subclasses, given potential suggestions kinds, returns suggestion objects for monaco aka "CompletionItem"


  getSuggestions(monaco, currentToken, suggestionKinds, statementPosition, position) {
    return Promise.reject([]);
  } // called by registerLanguage and passed to monaco with registerCompletionItemProvider
  // returns an object that implements https://microsoft.github.io/monaco-editor/api/interfaces/monaco.languages.CompletionItemProvider.html


  getCompletionProvider(monaco, languageDefinition) {
    return {
      triggerCharacters: [' ', '$', ',', '(', "'"],
      // one of these characters indicates that it is time to look for a suggestion
      provideCompletionItems: async (model, position) => {
        const currentToken = linkedTokenBuilder(monaco, languageDefinition, model, position, this.tokenTypes);
        const statementPosition = this.getStatementPosition(currentToken);
        const suggestionKinds = this.getSuggestionKinds(statementPosition);
        const suggestions = await this.getSuggestions(monaco, currentToken, suggestionKinds, statementPosition, position);
        return {
          suggestions
        };
      }
    };
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/types.ts
const SQLTokenTypes = {
  Parenthesis: 'delimiter.parenthesis.sql',
  Whitespace: 'white.sql',
  Keyword: 'keyword.sql',
  Delimiter: 'delimiter.sql',
  Operator: 'operator.sql',
  Identifier: 'identifier.sql',
  Type: 'type.sql',
  Function: 'predefined.sql',
  Number: 'number.sql',
  String: 'string.sql',
  Variable: 'variable.sql'
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/statementPosition.ts



function getStatementPosition(currentToken) {
  var _currentToken$getPrev, _previousKeyword$getP, _previousKeyword$getP2, _previousNonWhiteSpac, _previousKeyword$getP3, _previousNonWhiteSpac2;

  const previousNonWhiteSpace = currentToken === null || currentToken === void 0 ? void 0 : currentToken.getPreviousNonWhiteSpaceToken();
  const previousKeyword = currentToken === null || currentToken === void 0 ? void 0 : currentToken.getPreviousKeyword();
  const previousIsSlash = currentToken === null || currentToken === void 0 ? void 0 : (_currentToken$getPrev = currentToken.getPreviousNonWhiteSpaceToken()) === null || _currentToken$getPrev === void 0 ? void 0 : _currentToken$getPrev.is(SQLTokenTypes.Operator, '/');

  if (currentToken === null || currentToken.isWhiteSpace() && currentToken.previous === null || currentToken.is(SQLTokenTypes.Keyword, language.SELECT) && currentToken.previous === null || previousIsSlash || currentToken.isIdentifier() && (previousIsSlash || (currentToken === null || currentToken === void 0 ? void 0 : currentToken.previous) === null)) {
    return StatementPosition.SelectKeyword;
  }

  if ((previousNonWhiteSpace === null || previousNonWhiteSpace === void 0 ? void 0 : previousNonWhiteSpace.value) === language.SELECT) {
    return StatementPosition.AfterSelectKeyword;
  }

  if ((previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(SQLTokenTypes.Parenthesis, '(') || currentToken !== null && currentToken !== void 0 && currentToken.is(SQLTokenTypes.Parenthesis, '()')) && (previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === language.SELECT) {
    return StatementPosition.AfterSelectFuncFirstArgument;
  }

  if ((previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === language.SELECT && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isParenthesis()) {
    return StatementPosition.FromKeyword;
  }

  if ((previousNonWhiteSpace === null || previousNonWhiteSpace === void 0 ? void 0 : previousNonWhiteSpace.value) === language.FROM) {
    return StatementPosition.AfterFromKeyword;
  }

  if ((previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(SQLTokenTypes.Parenthesis, '(') || currentToken !== null && currentToken !== void 0 && currentToken.is(SQLTokenTypes.Parenthesis, '()')) && (previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === language.SCHEMA) {
    return StatementPosition.SchemaFuncFirstArgument;
  }

  if ((previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === language.SCHEMA && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(SQLTokenTypes.Delimiter, ',')) {
    return StatementPosition.SchemaFuncExtraArgument;
  }

  if ((previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === language.FROM && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isDoubleQuotedString() || (previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === language.FROM && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isVariable() || (previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === language.SCHEMA && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(SQLTokenTypes.Parenthesis, ')')) {
    return StatementPosition.AfterFrom;
  }

  if ((previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === language.WHERE && (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isKeyword() || previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(SQLTokenTypes.Parenthesis, '(') || previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(SQLTokenTypes.Operator, language.AND))) {
    return StatementPosition.WhereKey;
  }

  if ((previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === language.WHERE && (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isIdentifier() || previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isDoubleQuotedString())) {
    return StatementPosition.WhereComparisonOperator;
  }

  if ((previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === language.WHERE && (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(SQLTokenTypes.Operator, language.EQUALS) || previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(SQLTokenTypes.Operator, language.NOT_EQUALS))) {
    return StatementPosition.WhereValue;
  }

  if ((previousKeyword === null || previousKeyword === void 0 ? void 0 : previousKeyword.value) === language.WHERE && (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isString() || previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(SQLTokenTypes.Parenthesis, ')'))) {
    return StatementPosition.AfterWhereValue;
  }

  if (previousKeyword !== null && previousKeyword !== void 0 && previousKeyword.is(SQLTokenTypes.Keyword, language.BY) && previousKeyword !== null && previousKeyword !== void 0 && (_previousKeyword$getP = previousKeyword.getPreviousKeyword()) !== null && _previousKeyword$getP !== void 0 && _previousKeyword$getP.is(SQLTokenTypes.Keyword, language.GROUP) && (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(SQLTokenTypes.Keyword, language.BY) || previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(SQLTokenTypes.Delimiter, ','))) {
    return StatementPosition.AfterGroupByKeywords;
  }

  if (previousKeyword !== null && previousKeyword !== void 0 && previousKeyword.is(SQLTokenTypes.Keyword, language.BY) && previousKeyword !== null && previousKeyword !== void 0 && (_previousKeyword$getP2 = previousKeyword.getPreviousKeyword()) !== null && _previousKeyword$getP2 !== void 0 && _previousKeyword$getP2.is(SQLTokenTypes.Keyword, language.GROUP) && (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isIdentifier() || previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.isDoubleQuotedString())) {
    return StatementPosition.AfterGroupBy;
  }

  if (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(SQLTokenTypes.Keyword, language.BY) && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && (_previousNonWhiteSpac = previousNonWhiteSpace.getPreviousKeyword()) !== null && _previousNonWhiteSpac !== void 0 && _previousNonWhiteSpac.is(SQLTokenTypes.Keyword, language.ORDER)) {
    return StatementPosition.AfterOrderByKeywords;
  }

  if (previousKeyword !== null && previousKeyword !== void 0 && previousKeyword.is(SQLTokenTypes.Keyword, language.BY) && previousKeyword !== null && previousKeyword !== void 0 && (_previousKeyword$getP3 = previousKeyword.getPreviousKeyword()) !== null && _previousKeyword$getP3 !== void 0 && _previousKeyword$getP3.is(SQLTokenTypes.Keyword, language.ORDER) && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.is(SQLTokenTypes.Parenthesis) && previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && (_previousNonWhiteSpac2 = previousNonWhiteSpace.getPreviousNonWhiteSpaceToken()) !== null && _previousNonWhiteSpac2 !== void 0 && _previousNonWhiteSpac2.is(SQLTokenTypes.Function)) {
    return StatementPosition.AfterOrderByFunction;
  }

  if (previousKeyword !== null && previousKeyword !== void 0 && previousKeyword.is(SQLTokenTypes.Keyword, language.DESC) || previousKeyword !== null && previousKeyword !== void 0 && previousKeyword.is(SQLTokenTypes.Keyword, language.ASC)) {
    return StatementPosition.AfterOrderByDirection;
  }

  return StatementPosition.Unknown;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/suggestionKind.ts

function getSuggestionKinds(statementPosition) {
  switch (statementPosition) {
    case StatementPosition.SelectKeyword:
      return [SuggestionKind.SelectKeyword];

    case StatementPosition.AfterSelectKeyword:
      return [SuggestionKind.FunctionsWithArguments];

    case StatementPosition.AfterSelectFuncFirstArgument:
      return [SuggestionKind.Metrics];

    case StatementPosition.AfterFromKeyword:
      return [SuggestionKind.Namespaces, SuggestionKind.SchemaKeyword];

    case StatementPosition.SchemaFuncFirstArgument:
      return [SuggestionKind.Namespaces];

    case StatementPosition.SchemaFuncExtraArgument:
      return [SuggestionKind.LabelKeys];

    case StatementPosition.FromKeyword:
      return [SuggestionKind.FromKeyword];

    case StatementPosition.AfterFrom:
      return [SuggestionKind.WhereKeyword, SuggestionKind.GroupByKeywords, SuggestionKind.OrderByKeywords, SuggestionKind.LimitKeyword];

    case StatementPosition.WhereKey:
      return [SuggestionKind.LabelKeys];

    case StatementPosition.WhereComparisonOperator:
      return [SuggestionKind.ComparisonOperators];

    case StatementPosition.WhereValue:
      return [SuggestionKind.LabelValues];

    case StatementPosition.AfterWhereValue:
      return [SuggestionKind.LogicalOperators, SuggestionKind.GroupByKeywords, SuggestionKind.OrderByKeywords, SuggestionKind.LimitKeyword];

    case StatementPosition.AfterGroupByKeywords:
      return [SuggestionKind.LabelKeys];

    case StatementPosition.AfterGroupBy:
      return [SuggestionKind.OrderByKeywords, SuggestionKind.LimitKeyword];

    case StatementPosition.AfterOrderByKeywords:
      return [SuggestionKind.FunctionsWithoutArguments];

    case StatementPosition.AfterOrderByFunction:
      return [SuggestionKind.SortOrderDirectionKeyword, SuggestionKind.LimitKeyword];

    case StatementPosition.AfterOrderByDirection:
      return [SuggestionKind.LimitKeyword];
  }

  return [];
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/tokenUtils.ts


const getSelectToken = currentToken => {
  var _currentToken$getPrev;

  return (_currentToken$getPrev = currentToken === null || currentToken === void 0 ? void 0 : currentToken.getPreviousOfType(SQLTokenTypes.Keyword, language.SELECT)) !== null && _currentToken$getPrev !== void 0 ? _currentToken$getPrev : null;
};
const getSelectStatisticToken = currentToken => {
  var _getSelectToken;

  const assumedStatisticToken = (_getSelectToken = getSelectToken(currentToken)) === null || _getSelectToken === void 0 ? void 0 : _getSelectToken.getNextNonWhiteSpaceToken();
  return assumedStatisticToken !== null && assumedStatisticToken !== void 0 && assumedStatisticToken.isVariable() || assumedStatisticToken !== null && assumedStatisticToken !== void 0 && assumedStatisticToken.isFunction() ? assumedStatisticToken : null;
};
const getMetricNameToken = currentToken => {
  var _getSelectStatisticTo, _getSelectStatisticTo2;

  // statistic function is followed by `(` and then an argument
  const assumedMetricNameToken = (_getSelectStatisticTo = getSelectStatisticToken(currentToken)) === null || _getSelectStatisticTo === void 0 ? void 0 : (_getSelectStatisticTo2 = _getSelectStatisticTo.next) === null || _getSelectStatisticTo2 === void 0 ? void 0 : _getSelectStatisticTo2.next;
  return assumedMetricNameToken !== null && assumedMetricNameToken !== void 0 && assumedMetricNameToken.isVariable() || assumedMetricNameToken !== null && assumedMetricNameToken !== void 0 && assumedMetricNameToken.isIdentifier() ? assumedMetricNameToken : null;
};
const getFromKeywordToken = currentToken => {
  const selectToken = getSelectToken(currentToken);
  return selectToken === null || selectToken === void 0 ? void 0 : selectToken.getNextOfType(SQLTokenTypes.Keyword, language.FROM);
};
const getNamespaceToken = currentToken => {
  var _nextNonWhiteSpace$ne;

  const fromToken = getFromKeywordToken(currentToken);
  const nextNonWhiteSpace = fromToken === null || fromToken === void 0 ? void 0 : fromToken.getNextNonWhiteSpaceToken();

  if (nextNonWhiteSpace !== null && nextNonWhiteSpace !== void 0 && nextNonWhiteSpace.isDoubleQuotedString() || nextNonWhiteSpace !== null && nextNonWhiteSpace !== void 0 && nextNonWhiteSpace.isVariable() && (nextNonWhiteSpace === null || nextNonWhiteSpace === void 0 ? void 0 : nextNonWhiteSpace.value.toUpperCase()) !== language.SCHEMA) {
    // schema is not used
    return nextNonWhiteSpace;
  } else if (nextNonWhiteSpace !== null && nextNonWhiteSpace !== void 0 && nextNonWhiteSpace.isKeyword() && (_nextNonWhiteSpace$ne = nextNonWhiteSpace.next) !== null && _nextNonWhiteSpace$ne !== void 0 && _nextNonWhiteSpace$ne.is(SQLTokenTypes.Parenthesis, '(')) {
    var _nextNonWhiteSpace$ne2;

    // schema is specified
    const assumedNamespaceToken = (_nextNonWhiteSpace$ne2 = nextNonWhiteSpace.next) === null || _nextNonWhiteSpace$ne2 === void 0 ? void 0 : _nextNonWhiteSpace$ne2.next;

    if (assumedNamespaceToken !== null && assumedNamespaceToken !== void 0 && assumedNamespaceToken.isDoubleQuotedString() || assumedNamespaceToken !== null && assumedNamespaceToken !== void 0 && assumedNamespaceToken.isVariable()) {
      return assumedNamespaceToken;
    }
  }

  return null;
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/cloudwatch-sql/completion/CompletionItemProvider.ts
function completion_CompletionItemProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class SQLCompletionItemProvider extends CompletionItemProvider {
  constructor(datasource) {
    let templateSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,grafana_runtime_src.getTemplateSrv)();
    super(datasource, templateSrv);

    completion_CompletionItemProvider_defineProperty(this, "region", void 0);

    this.region = datasource.getActualRegion();
    this.getStatementPosition = getStatementPosition;
    this.getSuggestionKinds = getSuggestionKinds;
    this.tokenTypes = SQLTokenTypes;
  }

  setRegion(region) {
    this.region = region;
  }

  async getSuggestions(monaco, currentToken, suggestionKinds, statementPosition, position) {
    let suggestions = [];
    const invalidRangeToken = (currentToken === null || currentToken === void 0 ? void 0 : currentToken.isWhiteSpace()) || (currentToken === null || currentToken === void 0 ? void 0 : currentToken.isParenthesis());
    const range = invalidRangeToken || !(currentToken !== null && currentToken !== void 0 && currentToken.range) ? monaco.Range.fromPositions(position) : currentToken === null || currentToken === void 0 ? void 0 : currentToken.range;

    const toCompletionItem = function (value) {
      let rest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const item = Object.assign({
        label: value,
        insertText: value,
        kind: monaco.languages.CompletionItemKind.Field,
        range,
        sortText: CompletionItemPriority.Medium
      }, rest);
      return item;
    };

    function addSuggestion(value) {
      let rest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      suggestions = [...suggestions, toCompletionItem(value, rest)];
    }

    for (const suggestion of suggestionKinds) {
      switch (suggestion) {
        case SuggestionKind.SelectKeyword:
          addSuggestion(language.SELECT, {
            insertText: `${language.SELECT} $0`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            kind: monaco.languages.CompletionItemKind.Keyword,
            command: TRIGGER_SUGGEST
          });
          break;

        case SuggestionKind.FunctionsWithArguments:
          language.STATISTICS.map(s => addSuggestion(s, {
            insertText: `${s}($0)`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            command: TRIGGER_SUGGEST,
            kind: monaco.languages.CompletionItemKind.Function
          }));
          break;

        case SuggestionKind.FunctionsWithoutArguments:
          language.STATISTICS.map(s => addSuggestion(s, {
            insertText: `${s}() `,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            command: TRIGGER_SUGGEST,
            kind: monaco.languages.CompletionItemKind.Function
          }));
          break;

        case SuggestionKind.Metrics:
          {
            const namespaceToken = getNamespaceToken(currentToken);

            if (namespaceToken !== null && namespaceToken !== void 0 && namespaceToken.value) {
              // if a namespace is specified, only suggest metrics for the namespace
              const metrics = await this.datasource.getMetrics(this.templateSrv.replace(namespaceToken === null || namespaceToken === void 0 ? void 0 : namespaceToken.value.replace(/\"/g, '')), this.templateSrv.replace(this.region));
              metrics.map(m => addSuggestion(m.value));
            } else {
              // If no namespace is specified in the query, just list all metrics
              const metrics = await this.datasource.getAllMetrics(this.templateSrv.replace(this.region));
              (0,lodash.uniq)(metrics.map(m => m.metricName)).map(m => addSuggestion(m, {
                insertText: m
              }));
            }
          }
          break;

        case SuggestionKind.FromKeyword:
          addSuggestion(language.FROM, {
            insertText: `${language.FROM} `,
            command: TRIGGER_SUGGEST
          });
          break;

        case SuggestionKind.SchemaKeyword:
          addSuggestion(language.SCHEMA, {
            sortText: CompletionItemPriority.High,
            insertText: `${language.SCHEMA}($0)`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            command: TRIGGER_SUGGEST,
            kind: monaco.languages.CompletionItemKind.Function
          });
          break;

        case SuggestionKind.Namespaces:
          const metricNameToken = getMetricNameToken(currentToken);
          let namespaces = [];

          if (metricNameToken !== null && metricNameToken !== void 0 && metricNameToken.value) {
            // if a metric is specified, only suggest namespaces that actually have that metric
            const metrics = await this.datasource.getAllMetrics(this.region);
            const metricName = this.templateSrv.replace(metricNameToken.value);
            namespaces = metrics.filter(m => m.metricName === metricName).map(m => m.namespace);
          } else {
            // if no metric is specified, just suggest all namespaces
            const ns = await this.datasource.getNamespaces();
            namespaces = ns.map(n => n.value);
          }

          namespaces.map(n => addSuggestion(`"${n}"`, {
            insertText: `"${n}"`
          }));
          break;

        case SuggestionKind.LabelKeys:
          {
            const metricNameToken = getMetricNameToken(currentToken);
            const namespaceToken = getNamespaceToken(currentToken);

            if (namespaceToken !== null && namespaceToken !== void 0 && namespaceToken.value) {
              var _metricNameToken$valu;

              let dimensionFilter = {};
              let labelKeyTokens;

              if (statementPosition === StatementPosition.SchemaFuncExtraArgument) {
                labelKeyTokens = namespaceToken === null || namespaceToken === void 0 ? void 0 : namespaceToken.getNextUntil(this.tokenTypes.Parenthesis, [this.tokenTypes.Delimiter, this.tokenTypes.Whitespace]);
              } else if (statementPosition === StatementPosition.AfterGroupByKeywords) {
                labelKeyTokens = currentToken === null || currentToken === void 0 ? void 0 : currentToken.getPreviousUntil(this.tokenTypes.Keyword, [this.tokenTypes.Delimiter, this.tokenTypes.Whitespace]);
              }

              dimensionFilter = (labelKeyTokens || []).reduce((acc, curr) => {
                return Object.assign({}, acc, {
                  [curr.value]: null
                });
              }, {});
              const keys = await this.datasource.getDimensionKeys(this.templateSrv.replace(namespaceToken.value.replace(/\"/g, '')), this.templateSrv.replace(this.region), dimensionFilter, (_metricNameToken$valu = metricNameToken === null || metricNameToken === void 0 ? void 0 : metricNameToken.value) !== null && _metricNameToken$valu !== void 0 ? _metricNameToken$valu : '');
              keys.map(m => {
                const key = /[\s\.-]/.test(m.value) ? `"${m.value}"` : m.value;
                addSuggestion(key);
              });
            }
          }
          break;

        case SuggestionKind.LabelValues:
          {
            var _currentToken$getPrev;

            const namespaceToken = getNamespaceToken(currentToken);
            const metricNameToken = getMetricNameToken(currentToken);
            const labelKey = currentToken === null || currentToken === void 0 ? void 0 : (_currentToken$getPrev = currentToken.getPreviousNonWhiteSpaceToken()) === null || _currentToken$getPrev === void 0 ? void 0 : _currentToken$getPrev.getPreviousNonWhiteSpaceToken();

            if (namespaceToken !== null && namespaceToken !== void 0 && namespaceToken.value && labelKey !== null && labelKey !== void 0 && labelKey.value && metricNameToken !== null && metricNameToken !== void 0 && metricNameToken.value) {
              const values = await this.datasource.getDimensionValues(this.templateSrv.replace(this.region), this.templateSrv.replace(namespaceToken.value.replace(/\"/g, '')), this.templateSrv.replace(metricNameToken.value), this.templateSrv.replace(labelKey.value), {});
              values.map(o => addSuggestion(`'${o.value}'`, {
                insertText: `'${o.value}' `,
                command: TRIGGER_SUGGEST
              }));
            }
          }
          break;

        case SuggestionKind.LogicalOperators:
          language.LOGICAL_OPERATORS.map(o => addSuggestion(`${o}`, {
            insertText: `${o} `,
            command: TRIGGER_SUGGEST,
            sortText: CompletionItemPriority.MediumHigh
          }));
          break;

        case SuggestionKind.WhereKeyword:
          addSuggestion(`${language.WHERE}`, {
            insertText: `${language.WHERE} `,
            command: TRIGGER_SUGGEST,
            sortText: CompletionItemPriority.High
          });
          break;

        case SuggestionKind.ComparisonOperators:
          language.COMPARISON_OPERATORS.map(o => addSuggestion(`${o}`, {
            insertText: `${o} `,
            command: TRIGGER_SUGGEST
          }));
          break;

        case SuggestionKind.GroupByKeywords:
          addSuggestion(`${language.GROUP} ${language.BY}`, {
            insertText: `${language.GROUP} ${language.BY} `,
            command: TRIGGER_SUGGEST,
            sortText: CompletionItemPriority.MediumHigh
          });
          break;

        case SuggestionKind.OrderByKeywords:
          addSuggestion(`${language.ORDER} ${language.BY}`, {
            insertText: `${language.ORDER} ${language.BY} `,
            command: TRIGGER_SUGGEST,
            sortText: CompletionItemPriority.Medium
          });
          break;

        case SuggestionKind.LimitKeyword:
          addSuggestion(language.LIMIT, {
            insertText: `${language.LIMIT} `,
            sortText: CompletionItemPriority.MediumLow
          });
          break;

        case SuggestionKind.SortOrderDirectionKeyword:
          [language.ASC, language.DESC].map(s => addSuggestion(s, {
            insertText: `${s} `,
            command: TRIGGER_SUGGEST
          }));
          break;
      }
    } // always suggest template variables


    this.templateVariables.map(v => {
      addSuggestion(v, {
        range,
        label: v,
        insertText: v,
        kind: monaco.languages.CompletionItemKind.Variable,
        sortText: CompletionItemPriority.Low
      });
    });
    return suggestions;
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/ThrottlingErrorMessage.tsx
var _a;




const ThrottlingErrorMessage = _ref => {
  let {
    region
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
    children: ["Please visit the\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      target: "_blank",
      rel: "noreferrer",
      className: "text-link",
      href: `https://${region}.console.aws.amazon.com/servicequotas/home?region=${region}#!/services/monitoring/quotas/L-5E141212`,
      children: "AWS Service Quotas console"
    }), "\xA0to request a quota increase or see our\xA0", _a || (_a = /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
      target: "_blank",
      rel: "noreferrer",
      className: "text-link",
      href: "https://grafana.com/docs/grafana/latest/datasources/cloudwatch/#service-quotas",
      children: "documentation"
    })), "\xA0to learn more."]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/language_provider.ts
function language_provider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class CloudWatchLanguageProvider extends src.LanguageProvider {
  constructor(datasource, initialValues) {
    super();

    language_provider_defineProperty(this, "started", false);

    language_provider_defineProperty(this, "datasource", void 0);

    language_provider_defineProperty(this, "cleanText", s => s.replace(/[()]/g, '').trim());

    language_provider_defineProperty(this, "request", (url, params) => {
      return (0,lastValueFrom/* lastValueFrom */.n)(this.datasource.awsRequest(url, params));
    });

    language_provider_defineProperty(this, "start", () => {
      if (!this.startTask) {
        this.startTask = Promise.resolve().then(() => {
          this.started = true;
          return [];
        });
      }

      return this.startTask;
    });

    language_provider_defineProperty(this, "fetchedFieldsCache", void 0);

    language_provider_defineProperty(this, "fetchFields", async (logGroups, region) => {
      if (this.fetchedFieldsCache && Date.now() - this.fetchedFieldsCache.time < 30 * 1000 && (0,lodash.sortedUniq)(this.fetchedFieldsCache.logGroups).join('|') === (0,lodash.sortedUniq)(logGroups).join('|')) {
        return this.fetchedFieldsCache.fields;
      }

      const results = await Promise.all(logGroups.map(logGroup => this.datasource.getLogGroupFields({
        logGroupName: logGroup,
        region
      })));
      const fields = [...new Set(results.reduce((acc, cur) => {
        var _cur$logGroupFields;

        return acc.concat((_cur$logGroupFields = cur.logGroupFields) === null || _cur$logGroupFields === void 0 ? void 0 : _cur$logGroupFields.map(f => f.name));
      }, [])).values()];
      this.fetchedFieldsCache = {
        time: Date.now(),
        logGroups,
        fields
      };
      return fields;
    });

    language_provider_defineProperty(this, "handleKeyword", async context => {
      var _context$logGroupName;

      const suggs = await this.getFieldCompletionItems((_context$logGroupName = context === null || context === void 0 ? void 0 : context.logGroupNames) !== null && _context$logGroupName !== void 0 ? _context$logGroupName : [], (context === null || context === void 0 ? void 0 : context.region) || 'default');
      const functionSuggestions = [{
        searchFunctionType: grafana_ui_src.SearchFunctionType.Prefix,
        label: 'Functions',
        items: STRING_FUNCTIONS.concat(DATETIME_FUNCTIONS, IP_FUNCTIONS)
      }];
      suggs.suggestions.push(...functionSuggestions);
      return suggs;
    });

    language_provider_defineProperty(this, "handleCommand", async (commandToken, curToken, context) => {
      var _commandToken$next;

      const queryCommand = commandToken.content.toLowerCase();
      const prevToken = prevNonWhitespaceToken(curToken);
      const currentTokenIsFirstArg = prevToken === commandToken;

      if (queryCommand === 'sort') {
        return this.handleSortCommand(currentTokenIsFirstArg, curToken, context);
      }

      if (queryCommand === 'parse') {
        if (currentTokenIsFirstArg) {
          var _context$logGroupName2;

          return await this.getFieldCompletionItems((_context$logGroupName2 = context === null || context === void 0 ? void 0 : context.logGroupNames) !== null && _context$logGroupName2 !== void 0 ? _context$logGroupName2 : [], (context === null || context === void 0 ? void 0 : context.region) || 'default');
        }
      }

      const currentTokenIsAfterCommandAndEmpty = isTokenType(commandToken.next, 'whitespace') && !((_commandToken$next = commandToken.next) !== null && _commandToken$next !== void 0 && _commandToken$next.next);
      const currentTokenIsAfterCommand = currentTokenIsAfterCommandAndEmpty || nextNonWhitespaceToken(commandToken) === curToken;
      const currentTokenIsComma = isTokenType(curToken, 'punctuation', ',');
      const currentTokenIsCommaOrAfterComma = currentTokenIsComma || isTokenType(prevToken, 'punctuation', ','); // We only show suggestions if we are after a command or after a comma which is a field separator

      if (!(currentTokenIsAfterCommand || currentTokenIsCommaOrAfterComma)) {
        return {
          suggestions: []
        };
      }

      if (['display', 'fields'].includes(queryCommand)) {
        var _context$logGroupName3;

        const typeaheadOutput = await this.getFieldCompletionItems((_context$logGroupName3 = context === null || context === void 0 ? void 0 : context.logGroupNames) !== null && _context$logGroupName3 !== void 0 ? _context$logGroupName3 : [], (context === null || context === void 0 ? void 0 : context.region) || 'default');
        typeaheadOutput.suggestions.push(...this.getFieldAndFilterFunctionCompletionItems().suggestions);
        return typeaheadOutput;
      }

      if (queryCommand === 'stats') {
        const typeaheadOutput = this.getStatsAggCompletionItems();

        if (currentTokenIsComma || currentTokenIsAfterCommandAndEmpty) {
          typeaheadOutput === null || typeaheadOutput === void 0 ? void 0 : typeaheadOutput.suggestions.forEach(group => {
            group.skipFilter = true;
          });
        }

        return typeaheadOutput;
      }

      if (queryCommand === 'filter' && currentTokenIsFirstArg) {
        var _context$logGroupName4;

        const sugg = await this.getFieldCompletionItems((_context$logGroupName4 = context === null || context === void 0 ? void 0 : context.logGroupNames) !== null && _context$logGroupName4 !== void 0 ? _context$logGroupName4 : [], (context === null || context === void 0 ? void 0 : context.region) || 'default');
        const boolFuncs = this.getBoolFuncCompletionItems();
        sugg.suggestions.push(...boolFuncs.suggestions);
        return sugg;
      }

      return {
        suggestions: []
      };
    });

    language_provider_defineProperty(this, "handleComparison", async context => {
      var _context$logGroupName5;

      const fieldsSuggestions = await this.getFieldCompletionItems((_context$logGroupName5 = context === null || context === void 0 ? void 0 : context.logGroupNames) !== null && _context$logGroupName5 !== void 0 ? _context$logGroupName5 : [], (context === null || context === void 0 ? void 0 : context.region) || 'default');
      const comparisonSuggestions = this.getComparisonCompletionItems();
      fieldsSuggestions.suggestions.push(...comparisonSuggestions.suggestions);
      return fieldsSuggestions;
    });

    language_provider_defineProperty(this, "getCommandCompletionItems", () => {
      return {
        suggestions: [{
          searchFunctionType: grafana_ui_src.SearchFunctionType.Prefix,
          label: 'Commands',
          items: QUERY_COMMANDS
        }]
      };
    });

    language_provider_defineProperty(this, "getFieldAndFilterFunctionCompletionItems", () => {
      return {
        suggestions: [{
          searchFunctionType: grafana_ui_src.SearchFunctionType.Prefix,
          label: 'Functions',
          items: FIELD_AND_FILTER_FUNCTIONS
        }]
      };
    });

    language_provider_defineProperty(this, "getStatsAggCompletionItems", () => {
      return {
        suggestions: [{
          searchFunctionType: grafana_ui_src.SearchFunctionType.Prefix,
          label: 'Functions',
          items: AGGREGATION_FUNCTIONS_STATS
        }]
      };
    });

    language_provider_defineProperty(this, "getBoolFuncCompletionItems", () => {
      return {
        suggestions: [{
          searchFunctionType: grafana_ui_src.SearchFunctionType.Prefix,
          label: 'Functions',
          items: BOOLEAN_FUNCTIONS
        }]
      };
    });

    language_provider_defineProperty(this, "getComparisonCompletionItems", () => {
      return {
        suggestions: [{
          searchFunctionType: grafana_ui_src.SearchFunctionType.Prefix,
          label: 'Functions',
          items: NUMERIC_OPERATORS.concat(BOOLEAN_FUNCTIONS)
        }]
      };
    });

    language_provider_defineProperty(this, "getFieldCompletionItems", async (logGroups, region) => {
      const fields = await this.fetchFields(logGroups, region);
      return {
        suggestions: [{
          label: 'Fields',
          items: fields.map(field => ({
            label: field,
            insertText: field.match(/@?[_a-zA-Z]+[_.0-9a-zA-Z]*/) ? undefined : `\`${field}\``
          }))
        }]
      };
    });

    this.datasource = datasource;
    Object.assign(this, initialValues);
  } // Strip syntax chars


  getSyntax() {
    return syntax;
  }

  isStatsQuery(query) {
    var _Prism$tokenize;

    const grammar = this.getSyntax();
    const tokens = (_Prism$tokenize = prism_default().tokenize(query, grammar)) !== null && _Prism$tokenize !== void 0 ? _Prism$tokenize : [];
    return !!tokens.find(token => typeof token !== 'string' && token.content.toString().toLowerCase() === 'stats' && token.type === 'query-command');
  }
  /**
   * Return suggestions based on input that can be then plugged into a typeahead dropdown.
   * Keep this DOM-free for testing
   * @param input
   * @param context Is optional in types but is required in case we are doing getLabelCompletionItems
   * @param context.absoluteRange Required in case we are doing getLabelCompletionItems
   * @param context.history Optional used only in getEmptyCompletionItems
   */


  async provideCompletionItems(input, context) {
    const {
      value
    } = input; // Get tokens

    const tokens = value === null || value === void 0 ? void 0 : value.data.get('tokens');

    if (!tokens || !tokens.length) {
      return {
        suggestions: []
      };
    }

    const curToken = tokens.filter(token => {
      var _selection, _selection$start, _selection2, _selection2$start;

      return token.offsets.start <= ((_selection = value.selection) === null || _selection === void 0 ? void 0 : (_selection$start = _selection.start) === null || _selection$start === void 0 ? void 0 : _selection$start.offset) && token.offsets.end >= ((_selection2 = value.selection) === null || _selection2 === void 0 ? void 0 : (_selection2$start = _selection2.start) === null || _selection2$start === void 0 ? void 0 : _selection2$start.offset);
    })[0];
    const isFirstToken = !curToken.prev;
    const prevToken = prevNonWhitespaceToken(curToken);
    const isCommandStart = isFirstToken || !isFirstToken && (prevToken === null || prevToken === void 0 ? void 0 : prevToken.types.includes('command-separator'));

    if (isCommandStart) {
      return this.getCommandCompletionItems();
    }

    if (isInsideFunctionParenthesis(curToken)) {
      var _context$logGroupName6;

      return await this.getFieldCompletionItems((_context$logGroupName6 = context === null || context === void 0 ? void 0 : context.logGroupNames) !== null && _context$logGroupName6 !== void 0 ? _context$logGroupName6 : [], (context === null || context === void 0 ? void 0 : context.region) || 'default');
    }

    if (isAfterKeyword('by', curToken)) {
      return this.handleKeyword(context);
    }

    if (prevToken !== null && prevToken !== void 0 && prevToken.types.includes('comparison-operator')) {
      return this.handleComparison(context);
    }

    const commandToken = previousCommandToken(curToken);

    if (commandToken) {
      return await this.handleCommand(commandToken, curToken, context);
    }

    return {
      suggestions: []
    };
  }

  async handleSortCommand(isFirstArgument, curToken, context) {
    if (isFirstArgument) {
      var _context$logGroupName7;

      return await this.getFieldCompletionItems((_context$logGroupName7 = context === null || context === void 0 ? void 0 : context.logGroupNames) !== null && _context$logGroupName7 !== void 0 ? _context$logGroupName7 : [], (context === null || context === void 0 ? void 0 : context.region) || 'default');
    } else if (isTokenType(prevNonWhitespaceToken(curToken), 'field-name')) {
      // suggest sort options
      return {
        suggestions: [{
          searchFunctionType: grafana_ui_src.SearchFunctionType.Prefix,
          label: 'Sort Order',
          items: [{
            label: 'asc'
          }, {
            label: 'desc'
          }]
        }]
      };
    }

    return {
      suggestions: []
    };
  }

}

function nextNonWhitespaceToken(token) {
  let curToken = token;

  while (curToken.next) {
    if (curToken.next.types.includes('whitespace')) {
      curToken = curToken.next;
    } else {
      return curToken.next;
    }
  }

  return null;
}

function prevNonWhitespaceToken(token) {
  let curToken = token;

  while (curToken.prev) {
    if (isTokenType(curToken.prev, 'whitespace')) {
      curToken = curToken.prev;
    } else {
      return curToken.prev;
    }
  }

  return null;
}

function previousCommandToken(startToken) {
  let thisToken = startToken;

  while (!!thisToken.prev) {
    thisToken = thisToken.prev;

    if (thisToken.types.includes('query-command') && (!thisToken.prev || isTokenType(prevNonWhitespaceToken(thisToken), 'command-separator'))) {
      return thisToken;
    }
  }

  return null;
}

const funcsWithFieldArgs = ['avg', 'count', 'count_distinct', 'earliest', 'latest', 'sortsFirst', 'sortsLast', 'max', 'min', 'pct', 'stddev', 'ispresent', 'fromMillis', 'toMillis', 'isempty', 'isblank', 'isValidIp', 'isValidIpV4', 'isValidIpV6', 'isIpInSubnet', 'isIpv4InSubnet', 'isIpv6InSubnet'].map(funcName => funcName.toLowerCase());
/**
 * Returns true if cursor is currently inside a function parenthesis for example `count(|)` or `count(@mess|)` should
 * return true.
 */

function isInsideFunctionParenthesis(curToken) {
  const prevToken = prevNonWhitespaceToken(curToken);

  if (!prevToken) {
    return false;
  }

  const parenthesisToken = curToken.content === '(' ? curToken : prevToken.content === '(' ? prevToken : undefined;

  if (parenthesisToken) {
    const maybeFunctionToken = prevNonWhitespaceToken(parenthesisToken);

    if (maybeFunctionToken) {
      return funcsWithFieldArgs.includes(maybeFunctionToken.content.toLowerCase()) && maybeFunctionToken.types.includes('function');
    }
  }

  return false;
}

function isAfterKeyword(keyword, token) {
  const maybeKeyword = getPreviousTokenExcluding(token, ['whitespace', 'function', 'punctuation', 'field-name', 'number']);

  if (isTokenType(maybeKeyword, 'keyword', 'by')) {
    const prev = getPreviousTokenExcluding(token, ['whitespace']);

    if (prev === maybeKeyword || isTokenType(prev, 'punctuation', ',')) {
      return true;
    }
  }

  return false;
}

function isTokenType(token, type, content) {
  if (!(token !== null && token !== void 0 && token.types.includes(type))) {
    return false;
  }

  if (content) {
    if ((token === null || token === void 0 ? void 0 : token.content.toLowerCase()) !== content) {
      return false;
    }
  }

  return true;
}

function getPreviousTokenExcluding(token, exclude) {
  let curToken = token.prev;

  main: while (curToken) {
    for (const item of exclude) {
      if (typeof item === 'string') {
        if (curToken.types.includes(item)) {
          curToken = curToken.prev;
          continue main;
        }
      } else {
        if (curToken.types.includes(item.type) && curToken.content.toLowerCase() === item.value) {
          curToken = curToken.prev;
          continue main;
        }
      }
    }

    break;
  }

  return curToken;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/memoizedDebounce.ts

/* harmony default export */ const memoizedDebounce = (function (func) {
  let wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7000;
  const mem = (0,lodash.memoize)(function () {
    return (0,lodash.debounce)(func, wait, {
      leading: true
    });
  }, function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return JSON.stringify(args);
  });
  return function () {
    return mem(...arguments)(...arguments);
  };
});
// EXTERNAL MODULE: ./public/app/plugins/datasource/cloudwatch/metric-math/language.ts
var metric_math_language = __webpack_require__("./public/app/plugins/datasource/cloudwatch/metric-math/language.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/metric-math/completion/types.ts
const MetricMathTokenTypes = {
  Parenthesis: 'delimiter.parenthesis.cloudwatch-MetricMath',
  Whitespace: 'white.cloudwatch-MetricMath',
  Keyword: 'keyword.cloudwatch-MetricMath',
  Delimiter: 'delimiter.cloudwatch-MetricMath',
  Operator: 'operator.cloudwatch-MetricMath',
  Identifier: 'identifier.cloudwatch-MetricMath',
  Type: 'type.cloudwatch-MetricMath',
  Function: 'predefined.cloudwatch-MetricMath',
  Number: 'number.cloudwatch-MetricMath',
  String: 'string.cloudwatch-MetricMath',
  Variable: 'variable.cloudwatch-MetricMath'
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/metric-math/completion/statementPosition.ts


function statementPosition_getStatementPosition(currentToken) {
  const previousNonWhiteSpace = currentToken === null || currentToken === void 0 ? void 0 : currentToken.getPreviousNonWhiteSpaceToken();

  if (currentToken && currentToken.isString()) {
    return StatementPosition.WithinString;
  }

  if (currentToken && previousNonWhiteSpace) {
    const currentFunction = currentToken.getPreviousOfType(MetricMathTokenTypes.Function);
    const isAfterComma = previousNonWhiteSpace.is(MetricMathTokenTypes.Delimiter, ',');
    const isWithinSearch = currentFunction && currentFunction.value === 'SEARCH';
    const allTokensAfterStartOfSearch = currentToken.getPreviousUntil(MetricMathTokenTypes.Function, [], 'SEARCH') || [];

    if (isWithinSearch) {
      // if there's only one ' then we're still within the first arg
      if (allTokensAfterStartOfSearch.filter(_ref => {
        let {
          value
        } = _ref;
        return value === "'";
      }).length === 1) {
        return StatementPosition.WithinString;
      } // if there was a , before the last , and it happened after the start of SEARCH


      const lastComma = previousNonWhiteSpace.getPreviousOfType(MetricMathTokenTypes.Delimiter, ',');

      if (lastComma) {
        const lastCommaIsAfterSearch = lastComma.range.startColumn > currentFunction.range.startColumn && lastComma.range.startLineNumber >= currentFunction.range.startLineNumber;

        if (lastCommaIsAfterSearch) {
          return StatementPosition.SearchFuncThirdArg;
        }
      } // otherwise assume it's the second arg


      return StatementPosition.SearchFuncSecondArg;
    }

    if (!isWithinSearch && isAfterComma) {
      return StatementPosition.PredefinedFuncSecondArg;
    }
  }

  if (previousNonWhiteSpace !== null && previousNonWhiteSpace !== void 0 && previousNonWhiteSpace.endsWith(')')) {
    return StatementPosition.AfterFunction;
  }

  if (!currentToken || !currentToken.isString()) {
    return StatementPosition.PredefinedFunction;
  }

  return StatementPosition.Unknown;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/metric-math/completion/suggestionKind.ts

function suggestionKind_getSuggestionKinds(statementPosition) {
  switch (statementPosition) {
    case StatementPosition.PredefinedFunction:
      return [SuggestionKind.FunctionsWithArguments];

    case StatementPosition.PredefinedFuncSecondArg:
      return [SuggestionKind.FunctionsWithArguments, SuggestionKind.KeywordArguments];

    case StatementPosition.AfterFunction:
      return [SuggestionKind.Operators];

    case StatementPosition.SearchFuncSecondArg:
      return [SuggestionKind.Statistic];

    case StatementPosition.SearchFuncThirdArg:
      return [SuggestionKind.Period];
  }

  return [];
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/metric-math/completion/CompletionItemProvider.ts








class MetricMathCompletionItemProvider extends CompletionItemProvider {
  constructor(datasource) {
    let templateSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,grafana_runtime_src.getTemplateSrv)();
    super(datasource, templateSrv);
    this.getStatementPosition = statementPosition_getStatementPosition;
    this.getSuggestionKinds = suggestionKind_getSuggestionKinds;
    this.tokenTypes = MetricMathTokenTypes;
  }

  async getSuggestions(monaco, currentToken, suggestionKinds, statementPosition, position) {
    let suggestions = [];
    const invalidRangeToken = (currentToken === null || currentToken === void 0 ? void 0 : currentToken.isWhiteSpace()) || (currentToken === null || currentToken === void 0 ? void 0 : currentToken.isParenthesis());
    const range = invalidRangeToken || !(currentToken !== null && currentToken !== void 0 && currentToken.range) ? monaco.Range.fromPositions(position) : currentToken === null || currentToken === void 0 ? void 0 : currentToken.range;

    const toCompletionItem = function (value) {
      let rest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const item = Object.assign({
        label: value,
        insertText: value,
        kind: monaco.languages.CompletionItemKind.Field,
        range,
        sortText: CompletionItemPriority.Medium
      }, rest);
      return item;
    };

    function addSuggestion(value) {
      let rest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      suggestions = [...suggestions, toCompletionItem(value, rest)];
    }

    for (const suggestion of suggestionKinds) {
      switch (suggestion) {
        case SuggestionKind.FunctionsWithArguments:
          metric_math_language.METRIC_MATH_FNS.map(f => addSuggestion(f, {
            insertText: f === 'SEARCH' ? `${f}('$0')` : `${f}($0)`,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            command: TRIGGER_SUGGEST,
            kind: monaco.languages.CompletionItemKind.Function
          }));
          break;

        case SuggestionKind.KeywordArguments:
          metric_math_language.METRIC_MATH_KEYWORDS.map(s => addSuggestion(s, {
            insertText: s,
            command: TRIGGER_SUGGEST,
            kind: monaco.languages.CompletionItemKind.Keyword,
            sortText: CompletionItemPriority.MediumHigh
          }));
          break;

        case SuggestionKind.Statistic:
          metric_math_language.METRIC_MATH_STATISTIC_KEYWORD_STRINGS.map(s => addSuggestion(s, {
            insertText: `'${s}', `,
            command: TRIGGER_SUGGEST
          }));
          break;

        case SuggestionKind.Operators:
          metric_math_language.METRIC_MATH_OPERATORS.map(s => addSuggestion(s, {
            insertText: `${s} `,
            command: TRIGGER_SUGGEST
          }));
          break;

        case SuggestionKind.Period:
          metric_math_language.METRIC_MATH_PERIODS.map((s, idx) => addSuggestion(s.toString(), {
            kind: monaco.languages.CompletionItemKind.Value,
            sortText: String.fromCharCode(97 + idx) // converts index 0, 1 to "a", "b", etc needed to show the time periods in numerical order

          }));
          break;
      }
    } // always suggest template variables


    this.templateVariables.map(v => {
      addSuggestion(v, {
        range,
        label: v,
        insertText: v,
        kind: monaco.languages.CompletionItemKind.Variable,
        sortText: CompletionItemPriority.Low
      });
    });
    return suggestions;
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/utils/datalinks.ts


async function addDataLinksToLogsResponse(response, request, range, replaceFn, getRegion, tracingDatasourceUid) {
  const replace = (target, fieldName) => replaceFn(target, request.scopedVars, true, fieldName);

  for (const dataFrame of response.data) {
    var _curTarget$region;

    const curTarget = request.targets.find(target => target.refId === dataFrame.refId);
    const interpolatedRegion = getRegion(replace((_curTarget$region = curTarget.region) !== null && _curTarget$region !== void 0 ? _curTarget$region : '', 'region'));

    for (const field of dataFrame.fields) {
      if (field.name === '@xrayTraceId' && tracingDatasourceUid) {
        var _curTarget$region2;

        getRegion(replace((_curTarget$region2 = curTarget.region) !== null && _curTarget$region2 !== void 0 ? _curTarget$region2 : '', 'region'));
        const xrayLink = await createInternalXrayLink(tracingDatasourceUid, interpolatedRegion);

        if (xrayLink) {
          field.config.links = [xrayLink];
        }
      } else {
        // Right now we add generic link to open the query in xray console to every field so it shows in the logs row
        // details. Unfortunately this also creates link for all values inside table which look weird.
        field.config.links = [createAwsConsoleLink(curTarget, range, interpolatedRegion, replace)];
      }
    }
  }
}

async function createInternalXrayLink(datasourceUid, region) {
  let ds;

  try {
    ds = await (0,grafana_runtime_src.getDataSourceSrv)().get(datasourceUid);
  } catch (e) {
    console.error('Could not load linked xray data source, it was probably deleted after it was linked', e);
    return undefined;
  }

  return {
    title: ds.name,
    url: '',
    internal: {
      query: {
        query: '${__value.raw}',
        queryType: 'getTrace',
        region: region
      },
      datasourceUid: datasourceUid,
      datasourceName: ds.name
    }
  };
}

function createAwsConsoleLink(target, range, region, replace) {
  var _target$logGroupNames, _target$logGroupNames2;

  const interpolatedExpression = target.expression ? replace(target.expression) : '';
  const interpolatedGroups = (_target$logGroupNames = (_target$logGroupNames2 = target.logGroupNames) === null || _target$logGroupNames2 === void 0 ? void 0 : _target$logGroupNames2.map(logGroup => replace(logGroup, 'log groups'))) !== null && _target$logGroupNames !== void 0 ? _target$logGroupNames : [];
  const urlProps = {
    end: range.to.toISOString(),
    start: range.from.toISOString(),
    timeType: 'ABSOLUTE',
    tz: 'UTC',
    editorString: interpolatedExpression,
    isLiveTail: false,
    source: interpolatedGroups
  };
  const encodedUrl = encodeUrl(urlProps, region);
  return {
    url: encodedUrl,
    title: 'View in CloudWatch console',
    targetBlank: true
  };
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/utils/logsRetry.ts



/**
 * A retry strategy specifically for cloud watch logs query. Cloud watch logs queries need first starting the query
 * and the polling for the results. The start query can fail because of the concurrent queries rate limit,
 * and so we have to retry the start query call if there is already lot of queries running.
 *
 * As we send multiple queries in a single request some can fail and some can succeed and we have to also handle those
 * cases by only retrying the failed queries. We retry the failed queries until we hit the time limit or all queries
 * succeed and only then we pass the data forward. This means we wait longer but makes the code a bit simpler as we
 * can treat starting the query and polling as steps in a pipeline.
 * @param queryFun
 * @param targets
 * @param options
 */
function runWithRetry(queryFun, targets, timeoutFunc) {
  const startTime = new Date();
  let retries = 0;
  let timerID;
  let subscription;
  let collected = {};

  const retryWaitFunction = retry => {
    return Math.pow(2, retry) * 1000 + Math.random() * 100;
  };

  return new Observable/* Observable */.y(observer => {
    // Run function is where the logic takes place. We have it in a function so we can call it recursively.
    function run(currentQueryParams) {
      subscription = queryFun(currentQueryParams).subscribe({
        next(frames) {
          // In case we successfully finished, merge the current response with whatever we already collected.
          const collectedPreviously = (0,grafana_runtime_src.toDataQueryResponse)({
            data: {
              results: collected
            }
          }).data || [];
          observer.next({
            frames: [...collectedPreviously, ...frames]
          });
          observer.complete();
        },

        error(error) {
          // In case of error we first try to figure out what kind of error it is
          // This means it was a generic 500 error probably so we just pass it on
          if (typeof error === 'string') {
            observer.error(error);
            return;
          } // In case of multiple queries this some can error while some may be ok


          const errorData = splitErrorData(error);

          if (!errorData) {
            // Not sure what happened but the error structure wasn't what we expected
            observer.error(error);
            return;
          }

          if (!errorData.errors.length) {
            // So there is no limit error but some other errors so nothing to retry so we just pass it as it would be
            // otherwise.
            observer.error(error);
            return;
          }

          if (timeoutFunc(retries, startTime.valueOf())) {
            // We timed out but we could have started some queries
            if (Object.keys(collected).length || Object.keys(errorData.good).length) {
              var _errorData$good, _collected, _dataResponse$error;

              const dataResponse = (0,grafana_runtime_src.toDataQueryResponse)({
                data: {
                  results: Object.assign({}, (_errorData$good = errorData.good) !== null && _errorData$good !== void 0 ? _errorData$good : {}, (_collected = collected) !== null && _collected !== void 0 ? _collected : {})
                }
              });
              dataResponse.error = Object.assign({}, (_dataResponse$error = dataResponse.error) !== null && _dataResponse$error !== void 0 ? _dataResponse$error : {}, {
                message: `Some queries timed out: ${errorData.errorMessage}`
              }); // So we consider this a partial success and pass the data forward but also with error to be shown to
              // the user.

              observer.next({
                error: dataResponse.error,
                frames: dataResponse.data
              });
              observer.complete();
            } else {
              var _error$data$results, _error$data;

              // So we timed out and there was no data to pass forward so we just pass the error
              const dataResponse = (0,grafana_runtime_src.toDataQueryResponse)({
                data: {
                  results: (_error$data$results = (_error$data = error.data) === null || _error$data === void 0 ? void 0 : _error$data.results) !== null && _error$data$results !== void 0 ? _error$data$results : {}
                }
              });
              observer.error(dataResponse.error);
            }

            return;
          }

          collected = Object.assign({}, collected, errorData.good);
          timerID = setTimeout(() => {
            retries++;
            run(errorData.errors);
          }, // We want to know how long to wait for the next retry. First time this will be 0.
          retryWaitFunction(retries + 1));
        }

      });
    }

    run(targets);
    return () => {
      // We clear only the latest timer and subscription but the observable should complete after one response so
      // there should not be more things running at the same time.
      clearTimeout(timerID);
      subscription.unsubscribe();
    };
  });
}

function splitErrorData(error) {
  var _error$data2;

  const results = (_error$data2 = error.data) === null || _error$data2 === void 0 ? void 0 : _error$data2.results;

  if (!results) {
    return undefined;
  }

  return Object.keys(results).reduce((acc, refId) => {
    var _results$refId$error;

    if ((_results$refId$error = results[refId].error) !== null && _results$refId$error !== void 0 && _results$refId$error.startsWith('LimitExceededException')) {
      acc.errorMessage = results[refId].error;
      acc.errors.push(error.config.data.queries.find(q => q.refId === refId));
    } else {
      acc.good[refId] = results[refId];
    }

    return acc;
  }, {
    errors: [],
    good: {},
    errorMessage: ''
  });
}
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/scheduler/async.js
var scheduler_async = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/scheduler/async.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/utils/rxjs/increasingInterval.ts

/**
 * Creates an Observable that emits sequential numbers after increasing intervals of time
 * starting with `startPeriod`, ending with `endPeriod` and incrementing by `step`.
 */

const increasingInterval = function (_ref) {
  let {
    startPeriod = 0,
    endPeriod = 5000,
    step = 1000
  } = _ref;
  let scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scheduler_async/* asyncScheduler */.z;
  return new Observable/* Observable */.y(subscriber => {
    const state = {
      subscriber,
      counter: 0,
      period: startPeriod,
      step,
      endPeriod
    };
    subscriber.add(scheduler.schedule(dispatch, startPeriod, state));
    return subscriber;
  });
};

function dispatch(state) {
  if (!state) {
    return;
  }

  const {
    subscriber,
    counter,
    period,
    step,
    endPeriod
  } = state;
  subscriber.next(counter);
  const newPeriod = Math.min(period + step, endPeriod);
  this.schedule({
    subscriber,
    counter: counter + 1,
    period: newPeriod,
    step,
    endPeriod
  }, newPeriod);
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/migrations/variableQueryMigrations.ts



function isVariableQuery(rawQuery) {
  return typeof rawQuery !== 'string' && typeof rawQuery.ec2Filters !== 'string' && typeof rawQuery.tags !== 'string';
}

function migrateVariableQuery(rawQuery) {
  if (isVariableQuery(rawQuery)) {
    return rawQuery;
  } // rawQuery is OldVariableQuery


  if (typeof rawQuery !== 'string') {
    const newQuery = (0,lodash.omit)(rawQuery, ['ec2Filters', 'tags']);
    newQuery.ec2Filters = {};
    newQuery.tags = {};

    if (rawQuery.ec2Filters !== '') {
      try {
        newQuery.ec2Filters = JSON.parse(rawQuery.ec2Filters);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${rawQuery.ec2Filters}`);
      }
    }

    if (rawQuery.tags !== '') {
      try {
        newQuery.tags = JSON.parse(rawQuery.tags);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${rawQuery.tags}`);
      }
    }

    return newQuery;
  }

  const newQuery = {
    refId: 'CloudWatchVariableQueryEditor-VariableQuery',
    queryType: types/* VariableQueryType.Regions */.wf.Regions,
    namespace: '',
    region: '',
    metricName: '',
    dimensionKey: '',
    dimensionFilters: {},
    ec2Filters: {},
    instanceID: '',
    attributeName: '',
    resourceType: '',
    tags: {}
  };

  if (rawQuery === '') {
    return newQuery;
  }

  if (rawQuery.match(/^regions\(\)/)) {
    return newQuery;
  }

  if (rawQuery.match(/^namespaces\(\)/)) {
    newQuery.queryType = types/* VariableQueryType.Namespaces */.wf.Namespaces;
    return newQuery;
  }

  const metricNameQuery = rawQuery.match(/^metrics\(([^\)]+?)(,\s?([^,]+?))?\)/);

  if (metricNameQuery) {
    newQuery.queryType = types/* VariableQueryType.Metrics */.wf.Metrics;
    newQuery.namespace = metricNameQuery[1];
    newQuery.region = metricNameQuery[3] || '';
    return newQuery;
  }

  const dimensionKeysQuery = rawQuery.match(/^dimension_keys\(([^\)]+?)(,\s?([^,]+?))?\)/);

  if (dimensionKeysQuery) {
    newQuery.queryType = types/* VariableQueryType.DimensionKeys */.wf.DimensionKeys;
    newQuery.namespace = dimensionKeysQuery[1];
    newQuery.region = dimensionKeysQuery[3] || '';
    return newQuery;
  }

  const dimensionValuesQuery = rawQuery.match(/^dimension_values\(([^,]+?),\s?([^,]+?),\s?([^,]+?),\s?([^,]+?)(,\s?(.+))?\)/);

  if (dimensionValuesQuery) {
    newQuery.queryType = types/* VariableQueryType.DimensionValues */.wf.DimensionValues;
    newQuery.region = dimensionValuesQuery[1];
    newQuery.namespace = dimensionValuesQuery[2];
    newQuery.metricName = dimensionValuesQuery[3];
    newQuery.dimensionKey = dimensionValuesQuery[4];
    newQuery.dimensionFilters = {};

    if (!!dimensionValuesQuery[6]) {
      try {
        newQuery.dimensionFilters = JSON.parse(dimensionValuesQuery[6]);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${dimensionValuesQuery[6]}`);
      }
    }

    return newQuery;
  }

  const ebsVolumeIdsQuery = rawQuery.match(/^ebs_volume_ids\(([^,]+?),\s?([^,]+?)\)/);

  if (ebsVolumeIdsQuery) {
    newQuery.queryType = types/* VariableQueryType.EBSVolumeIDs */.wf.EBSVolumeIDs;
    newQuery.region = ebsVolumeIdsQuery[1];
    newQuery.instanceID = ebsVolumeIdsQuery[2];
    return newQuery;
  }

  const ec2InstanceAttributeQuery = rawQuery.match(/^ec2_instance_attribute\(([^,]+?),\s?([^,]+?),\s?(.+?)\)/);

  if (ec2InstanceAttributeQuery) {
    newQuery.queryType = types/* VariableQueryType.EC2InstanceAttributes */.wf.EC2InstanceAttributes;
    newQuery.region = ec2InstanceAttributeQuery[1];
    newQuery.attributeName = ec2InstanceAttributeQuery[2];

    if (ec2InstanceAttributeQuery[3]) {
      try {
        newQuery.ec2Filters = JSON.parse(ec2InstanceAttributeQuery[3]);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${ec2InstanceAttributeQuery[3]}`);
      }
    }

    return newQuery;
  }

  const resourceARNsQuery = rawQuery.match(/^resource_arns\(([^,]+?),\s?([^,]+?),\s?(.+?)\)/);

  if (resourceARNsQuery) {
    newQuery.queryType = types/* VariableQueryType.ResourceArns */.wf.ResourceArns;
    newQuery.region = resourceARNsQuery[1];
    newQuery.resourceType = resourceARNsQuery[2];

    if (resourceARNsQuery[3]) {
      try {
        newQuery.tags = JSON.parse(resourceARNsQuery[3]);
      } catch {
        throw new Error(`unable to migrate poorly formed filters: ${resourceARNsQuery[3]}`);
      }
    }

    return newQuery;
  }

  const statsQuery = rawQuery.match(/^statistics\(\)/);

  if (statsQuery) {
    newQuery.queryType = types/* VariableQueryType.Statistics */.wf.Statistics;
    return newQuery;
  }

  throw new Error('unable to parse old variable query');
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/MultiFilterItem.tsx






const MultiFilterItem = _ref => {
  var _filter$value;

  let {
    filter,
    onChange,
    onDelete,
    keyPlaceholder
  } = _ref;
  const [localKey, setLocalKey] = (0,react.useState)(filter.key || '');
  const [localValue, setLocalValue] = (0,react.useState)(((_filter$value = filter.value) === null || _filter$value === void 0 ? void 0 : _filter$value.join(', ')) || '');
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = MultiFilterItem_getOperatorStyles(theme);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    "data-testid": "cloudwatch-multifilter-item",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.InputGroup, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        "data-testid": "cloudwatch-multifilter-item-key",
        "aria-label": "Filter key",
        value: localKey,
        placeholder: keyPlaceholder !== null && keyPlaceholder !== void 0 ? keyPlaceholder : 'key',
        onChange: e => setLocalKey(e.currentTarget.value),
        onBlur: () => {
          if (localKey && localKey !== filter.key) {
            onChange(Object.assign({}, filter, {
              key: localKey
            }));
          }
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: (0,emotion_css_esm.cx)(styles.root),
        children: "="
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        "data-testid": "cloudwatch-multifilter-item-value",
        "aria-label": "Filter value",
        value: localValue,
        placeholder: "value1, value2,...",
        onChange: e => setLocalValue(e.currentTarget.value),
        onBlur: () => {
          const newValues = localValue.split(',').map(v => v.trim());

          if (localValue && newValues !== filter.value) {
            onChange(Object.assign({}, filter, {
              value: newValues
            }));
          }

          setLocalValue(newValues.join(', '));
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.AccessoryButton, {
        "aria-label": "remove",
        icon: "times",
        variant: "secondary",
        onClick: onDelete,
        type: "button"
      })]
    })
  });
};
const MultiFilterItem_getOperatorStyles = (0,grafana_ui_src.stylesFactory)(theme => ({
  root: (0,emotion_css_esm.css)({
    padding: theme.spacing(0, 1),
    alignSelf: 'center'
  })
}));
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/MultiFilter.tsx






const multiFiltersToFilterConditions = filters => Object.keys(filters).map(key => ({
  key,
  value: filters[key],
  operator: '='
}));

const filterConditionsToMultiFilters = filters => {
  const res = {};
  filters.forEach(_ref => {
    let {
      key,
      value
    } = _ref;

    if (key && value) {
      res[key] = value;
    }
  });
  return res;
};

const MultiFilter = _ref2 => {
  let {
    filters,
    onChange,
    keyPlaceholder
  } = _ref2;
  const [items, setItems] = (0,react.useState)([]);
  (0,react.useEffect)(() => setItems(filters ? multiFiltersToFilterConditions(filters) : []), [filters]);

  const onFiltersChange = newItems => {
    setItems(newItems); // The onChange event should only be triggered in the case there is a complete dimension object.
    // So when a new key is added that does not yet have a value, it should not trigger an onChange event.

    const newMultifilters = filterConditionsToMultiFilters(newItems);

    if (!(0,lodash.isEqual)(newMultifilters, filters)) {
      onChange(newMultifilters);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorList, {
    items: items,
    onChange: onFiltersChange,
    renderItem: MultiFilter_makeRenderFilter(keyPlaceholder)
  });
};

function MultiFilter_makeRenderFilter(keyPlaceholder) {
  function renderFilter(item, onChange, onDelete) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(MultiFilterItem, {
      filter: item,
      onChange: item => onChange(item),
      onDelete: onDelete,
      keyPlaceholder: keyPlaceholder
    });
  }

  return renderFilter;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/VariableQueryField.tsx



const LABEL_WIDTH = 20;
const VariableQueryField = _ref => {
  let {
    label,
    onChange,
    value,
    options,
    allowCustomValue = false,
    isLoading = false,
    inputId = label
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
    label: label,
    labelWidth: LABEL_WIDTH,
    htmlFor: inputId,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
      "aria-label": label,
      width: 25,
      allowCustomValue: allowCustomValue,
      value: value,
      onChange: _ref2 => {
        let {
          value
        } = _ref2;
        return onChange(value);
      },
      options: options,
      isLoading: isLoading,
      inputId: inputId
    })
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/VariableTextField.tsx



const VariableTextField_LABEL_WIDTH = 20;
const VariableTextField = _ref => {
  let {
    interactive,
    label,
    onBlur,
    placeholder,
    value,
    tooltip
  } = _ref;
  const [localValue, setLocalValue] = (0,react.useState)(value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
    interactive: interactive,
    label: label,
    labelWidth: VariableTextField_LABEL_WIDTH,
    tooltip: tooltip,
    grow: true,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
      "aria-label": label,
      placeholder: placeholder,
      value: localValue,
      onChange: e => setLocalValue(e.currentTarget.value),
      onBlur: () => onBlur(localValue)
    })
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/components/VariableQueryEditor/VariableQueryEditor.tsx
var VariableQueryEditor_a, _a2;













const queryTypes = [{
  value: types/* VariableQueryType.Regions */.wf.Regions,
  label: 'Regions'
}, {
  value: types/* VariableQueryType.Namespaces */.wf.Namespaces,
  label: 'Namespaces'
}, {
  value: types/* VariableQueryType.Metrics */.wf.Metrics,
  label: 'Metrics'
}, {
  value: types/* VariableQueryType.DimensionKeys */.wf.DimensionKeys,
  label: 'Dimension Keys'
}, {
  value: types/* VariableQueryType.DimensionValues */.wf.DimensionValues,
  label: 'Dimension Values'
}, {
  value: types/* VariableQueryType.EBSVolumeIDs */.wf.EBSVolumeIDs,
  label: 'EBS Volume IDs'
}, {
  value: types/* VariableQueryType.EC2InstanceAttributes */.wf.EC2InstanceAttributes,
  label: 'EC2 Instance Attributes'
}, {
  value: types/* VariableQueryType.ResourceArns */.wf.ResourceArns,
  label: 'Resource ARNs'
}, {
  value: types/* VariableQueryType.Statistics */.wf.Statistics,
  label: 'Statistics'
}];
const VariableQueryEditor = _ref => {
  let {
    query,
    datasource,
    onChange
  } = _ref;
  const parsedQuery = migrateVariableQuery(query);
  const {
    region,
    namespace,
    metricName,
    dimensionKey,
    dimensionFilters
  } = parsedQuery;
  const [regions, regionIsLoading] = useRegions(datasource);
  const namespaces = useNamespaces(datasource);
  const metrics = useMetrics(datasource, region, namespace);
  const dimensionKeys = useDimensionKeys(datasource, region, namespace, metricName);
  const keysForDimensionFilter = useDimensionKeys(datasource, region, namespace, metricName, dimensionFilters !== null && dimensionFilters !== void 0 ? dimensionFilters : {});

  const onRegionChange = async region => {
    const validatedQuery = await sanitizeQuery(Object.assign({}, parsedQuery, {
      region
    }));
    onQueryChange(validatedQuery);
  };

  const onNamespaceChange = async namespace => {
    const validatedQuery = await sanitizeQuery(Object.assign({}, parsedQuery, {
      namespace
    }));
    onQueryChange(validatedQuery);
  };

  const onQueryChange = newQuery => {
    onChange(Object.assign({}, newQuery, {
      refId: 'CloudWatchVariableQueryEditor-VariableQuery'
    }));
  }; // Reset dimensionValue parameters if namespace or region change


  const sanitizeQuery = async query => {
    let {
      metricName,
      dimensionKey,
      dimensionFilters,
      namespace,
      region
    } = query;

    if (metricName) {
      await datasource.getMetrics(namespace, region).then(result => {
        if (!result.find(metric => metric.value === metricName)) {
          metricName = '';
        }
      });
    }

    if (dimensionKey) {
      await datasource.getDimensionKeys(namespace, region).then(result => {
        if (!result.find(key => key.value === dimensionKey)) {
          dimensionKey = '';
          dimensionFilters = {};
        }
      });
    }

    return Object.assign({}, query, {
      metricName,
      dimensionKey,
      dimensionFilters
    });
  };

  const hasRegionField = [types/* VariableQueryType.Metrics */.wf.Metrics, types/* VariableQueryType.DimensionKeys */.wf.DimensionKeys, types/* VariableQueryType.DimensionValues */.wf.DimensionValues, types/* VariableQueryType.EBSVolumeIDs */.wf.EBSVolumeIDs, types/* VariableQueryType.EC2InstanceAttributes */.wf.EC2InstanceAttributes, types/* VariableQueryType.ResourceArns */.wf.ResourceArns].includes(parsedQuery.queryType);
  const hasNamespaceField = [types/* VariableQueryType.Metrics */.wf.Metrics, types/* VariableQueryType.DimensionKeys */.wf.DimensionKeys, types/* VariableQueryType.DimensionValues */.wf.DimensionValues].includes(parsedQuery.queryType);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(VariableQueryField, {
      value: parsedQuery.queryType,
      options: queryTypes,
      onChange: value => onQueryChange(Object.assign({}, parsedQuery, {
        queryType: value
      })),
      label: "Query Type",
      inputId: `variable-query-type-${query.refId}`
    }), hasRegionField && /*#__PURE__*/(0,jsx_runtime.jsx)(VariableQueryField, {
      value: region,
      options: regions,
      onChange: value => onRegionChange(value),
      label: "Region",
      isLoading: regionIsLoading,
      inputId: `variable-query-region-${query.refId}`
    }), hasNamespaceField && /*#__PURE__*/(0,jsx_runtime.jsx)(VariableQueryField, {
      value: namespace,
      options: namespaces,
      onChange: value => onNamespaceChange(value),
      label: "Namespace",
      inputId: `variable-query-namespace-${query.refId}`
    }), parsedQuery.queryType === types/* VariableQueryType.DimensionValues */.wf.DimensionValues && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(VariableQueryField, {
        value: metricName || null,
        options: metrics,
        onChange: value => onQueryChange(Object.assign({}, parsedQuery, {
          metricName: value
        })),
        label: "Metric",
        inputId: `variable-query-metric-${query.refId}`
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(VariableQueryField, {
        value: dimensionKey || null,
        options: dimensionKeys,
        onChange: value => onQueryChange(Object.assign({}, parsedQuery, {
          dimensionKey: value
        })),
        label: "Dimension Key",
        inputId: `variable-query-dimension-key-${query.refId}`
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Dimensions",
        labelWidth: 20,
        tooltip: "Dimensions to filter the returned values on",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Dimensions, {
          metricStat: Object.assign({}, parsedQuery, {
            dimensions: parsedQuery.dimensionFilters
          }),
          onChange: dimensions => {
            onChange(Object.assign({}, parsedQuery, {
              dimensionFilters: dimensions
            }));
          },
          dimensionKeys: keysForDimensionFilter,
          disableExpressions: true,
          datasource: datasource
        })
      })]
    }), parsedQuery.queryType === types/* VariableQueryType.EBSVolumeIDs */.wf.EBSVolumeIDs && /*#__PURE__*/(0,jsx_runtime.jsx)(VariableTextField, {
      value: query.instanceID,
      placeholder: "i-XXXXXXXXXXXXXXXXX",
      onBlur: value => onQueryChange(Object.assign({}, parsedQuery, {
        instanceID: value
      })),
      label: "Instance ID"
    }), parsedQuery.queryType === types/* VariableQueryType.EC2InstanceAttributes */.wf.EC2InstanceAttributes && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(VariableTextField, {
        value: parsedQuery.attributeName,
        placeholder: "attribute name",
        onBlur: value => onQueryChange(Object.assign({}, parsedQuery, {
          attributeName: value
        })),
        label: "Attribute Name",
        interactive: true,
        tooltip: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: ['Attribute or tag to query on. Tags should be formatted "Tags.<name>". ', VariableQueryEditor_a || (VariableQueryEditor_a = /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://grafana.com/docs/grafana/latest/datasources/aws-cloudwatch/template-queries-cloudwatch/#selecting-attributes",
            target: "_blank",
            rel: "noreferrer",
            children: "See the documentation for more details"
          }))]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Filters",
        labelWidth: 20,
        tooltip: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [_a2 || (_a2 = /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://grafana.com/docs/grafana/latest/datasources/aws-cloudwatch/template-queries-cloudwatch/#selecting-attributes",
            target: "_blank",
            rel: "noreferrer",
            children: "Pre-defined ec2:DescribeInstances filters/tags"
          })), ' and the values to filter on. Tags should be formatted tag:<name>.']
        }),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(MultiFilter, {
          filters: parsedQuery.ec2Filters,
          onChange: filters => {
            onChange(Object.assign({}, parsedQuery, {
              ec2Filters: filters
            }));
          },
          keyPlaceholder: "filter/tag"
        })
      })]
    }), parsedQuery.queryType === types/* VariableQueryType.ResourceArns */.wf.ResourceArns && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(VariableTextField, {
        value: parsedQuery.resourceType,
        placeholder: "resource type",
        onBlur: value => onQueryChange(Object.assign({}, parsedQuery, {
          resourceType: value
        })),
        label: "Resource Type"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Tags",
        labelWidth: 20,
        tooltip: "Tags to filter the returned values on.",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(MultiFilter, {
          filters: parsedQuery.tags,
          onChange: filters => {
            onChange(Object.assign({}, parsedQuery, {
              tags: filters
            }));
          },
          keyPlaceholder: "tag"
        })
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/variables.ts
function variables_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class CloudWatchVariableSupport extends src.CustomVariableSupport {
  constructor(datasource) {
    super();

    variables_defineProperty(this, "datasource", void 0);

    variables_defineProperty(this, "editor", VariableQueryEditor);

    this.datasource = datasource;
    this.query = this.query.bind(this);
  }

  query(request) {
    const queryObj = migrateVariableQuery(request.targets[0]);
    return (0,from/* from */.D)(this.execute(queryObj)).pipe((0,map/* map */.U)(data => ({
      data
    })));
  }

  async execute(query) {
    try {
      switch (query.queryType) {
        case types/* VariableQueryType.Regions */.wf.Regions:
          return this.handleRegionsQuery();

        case types/* VariableQueryType.Namespaces */.wf.Namespaces:
          return this.handleNamespacesQuery();

        case types/* VariableQueryType.Metrics */.wf.Metrics:
          return this.handleMetricsQuery(query);

        case types/* VariableQueryType.DimensionKeys */.wf.DimensionKeys:
          return this.handleDimensionKeysQuery(query);

        case types/* VariableQueryType.DimensionValues */.wf.DimensionValues:
          return this.handleDimensionValuesQuery(query);

        case types/* VariableQueryType.EBSVolumeIDs */.wf.EBSVolumeIDs:
          return this.handleEbsVolumeIdsQuery(query);

        case types/* VariableQueryType.EC2InstanceAttributes */.wf.EC2InstanceAttributes:
          return this.handleEc2InstanceAttributeQuery(query);

        case types/* VariableQueryType.ResourceArns */.wf.ResourceArns:
          return this.handleResourceARNsQuery(query);

        case types/* VariableQueryType.Statistics */.wf.Statistics:
          return this.handleStatisticsQuery();
      }
    } catch (error) {
      console.error(`Could not run CloudWatchMetricFindQuery ${query}`, error);
      return [];
    }
  }

  async handleRegionsQuery() {
    const regions = await this.datasource.getRegions();
    return regions.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleNamespacesQuery() {
    const namespaces = await this.datasource.getNamespaces();
    return namespaces.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleMetricsQuery(_ref) {
    let {
      namespace,
      region
    } = _ref;
    const metrics = await this.datasource.getMetrics(namespace, region);
    return metrics.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleDimensionKeysQuery(_ref2) {
    let {
      namespace,
      region
    } = _ref2;
    const keys = await this.datasource.getDimensionKeys(namespace, region);
    return keys.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleDimensionValuesQuery(_ref3) {
    let {
      namespace,
      region,
      dimensionKey,
      metricName,
      dimensionFilters
    } = _ref3;

    if (!dimensionKey || !metricName) {
      return [];
    }

    const keys = await this.datasource.getDimensionValues(region, namespace, metricName, dimensionKey, dimensionFilters !== null && dimensionFilters !== void 0 ? dimensionFilters : {});
    return keys.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleEbsVolumeIdsQuery(_ref4) {
    let {
      region,
      instanceID
    } = _ref4;

    if (!instanceID) {
      return [];
    }

    const ids = await this.datasource.getEbsVolumeIds(region, instanceID);
    return ids.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleEc2InstanceAttributeQuery(_ref5) {
    let {
      region,
      attributeName,
      ec2Filters
    } = _ref5;

    if (!attributeName) {
      return [];
    }

    const values = await this.datasource.getEc2InstanceAttribute(region, attributeName, ec2Filters !== null && ec2Filters !== void 0 ? ec2Filters : {});
    return values.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleResourceARNsQuery(_ref6) {
    let {
      region,
      resourceType,
      tags
    } = _ref6;

    if (!resourceType) {
      return [];
    }

    const keys = await this.datasource.getResourceARNs(region, resourceType, tags !== null && tags !== void 0 ? tags : {});
    return keys.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleStatisticsQuery() {
    return this.datasource.standardStatistics.map(s => ({
      text: s,
      value: s,
      expandable: true
    }));
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/datasource.ts
function datasource_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



























const DS_QUERY_ENDPOINT = '/api/ds/query'; // Constants also defined in tsdb/cloudwatch/cloudwatch.go

const LOG_IDENTIFIER_INTERNAL = '__log__grafana_internal__';
const LOGSTREAM_IDENTIFIER_INTERNAL = '__logstream__grafana_internal__';

const displayAlert = (datasourceName, region) => store/* store.dispatch */.h.dispatch((0,actions/* notifyApp */.$l)((0,appNotification/* createErrorNotification */.t_)(`CloudWatch request limit reached in ${region} for data source ${datasourceName}`, '', undefined, /*#__PURE__*/react.createElement(ThrottlingErrorMessage, {
  region
}, null))));

const displayCustomError = (title, message) => store/* store.dispatch */.h.dispatch((0,actions/* notifyApp */.$l)((0,appNotification/* createErrorNotification */.t_)(title, message)));

class CloudWatchDatasource extends grafana_runtime_src.DataSourceWithBackend {
  constructor(instanceSettings) {
    var _this;

    let templateSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,template_srv/* getTemplateSrv */.J)();
    let timeSrv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0,TimeSrv/* getTimeSrv */.$t)();
    super(instanceSettings);
    _this = this;
    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;

    datasource_defineProperty(this, "proxyUrl", void 0);

    datasource_defineProperty(this, "defaultRegion", void 0);

    datasource_defineProperty(this, "datasourceName", void 0);

    datasource_defineProperty(this, "languageProvider", void 0);

    datasource_defineProperty(this, "sqlCompletionItemProvider", void 0);

    datasource_defineProperty(this, "metricMathCompletionItemProvider", void 0);

    datasource_defineProperty(this, "tracingDataSourceUid", void 0);

    datasource_defineProperty(this, "logsTimeout", void 0);

    datasource_defineProperty(this, "type", 'cloudwatch');

    datasource_defineProperty(this, "standardStatistics", ['Average', 'Maximum', 'Minimum', 'Sum', 'SampleCount']);

    datasource_defineProperty(this, "debouncedAlert", memoizedDebounce(displayAlert, app_types/* AppNotificationTimeout.Error */.bd.Error));

    datasource_defineProperty(this, "debouncedCustomAlert", memoizedDebounce(displayCustomError, app_types/* AppNotificationTimeout.Error */.bd.Error));

    datasource_defineProperty(this, "logQueries", {});

    datasource_defineProperty(this, "handleLogQueries", (logQueries, options) => {
      const validLogQueries = logQueries.filter(item => {
        var _item$logGroupNames;

        return (_item$logGroupNames = item.logGroupNames) === null || _item$logGroupNames === void 0 ? void 0 : _item$logGroupNames.length;
      });

      if (logQueries.length > validLogQueries.length) {
        return (0,of.of)({
          data: [],
          error: {
            message: 'Log group is required'
          }
        });
      } // No valid targets, return the empty result to save a round trip.


      if ((0,lodash.isEmpty)(validLogQueries)) {
        return (0,of.of)({
          data: [],
          state: src.LoadingState.Done
        });
      }

      const queryParams = logQueries.map(target => ({
        queryString: target.expression || '',
        refId: target.refId,
        logGroupNames: target.logGroupNames,
        region: this.replace(this.getActualRegion(target.region), options.scopedVars, true, 'region')
      }));
      const startTime = new Date();

      const timeoutFunc = () => {
        return Date.now() >= startTime.valueOf() + src.rangeUtil.intervalToMs(this.logsTimeout);
      };

      return runWithRetry(targets => {
        return this.makeLogActionRequest('StartQuery', targets, {
          makeReplacements: true,
          scopedVars: options.scopedVars,
          skipCache: true
        });
      }, queryParams, timeoutFunc).pipe((0,mergeMap/* mergeMap */.z)(_ref => {
        let {
          frames,
          error
        } = _ref;
        return (// This queries for the results
          this.logsQuery(frames.map(dataFrame => {
            var _dataFrame$meta$custo, _dataFrame$meta, _dataFrame$meta$custo2;

            return {
              queryId: dataFrame.fields[0].values.get(0),
              region: (_dataFrame$meta$custo = (_dataFrame$meta = dataFrame.meta) === null || _dataFrame$meta === void 0 ? void 0 : (_dataFrame$meta$custo2 = _dataFrame$meta.custom) === null || _dataFrame$meta$custo2 === void 0 ? void 0 : _dataFrame$meta$custo2['Region']) !== null && _dataFrame$meta$custo !== void 0 ? _dataFrame$meta$custo : 'default',
              refId: dataFrame.refId,
              statsGroups: logQueries.find(target => target.refId === dataFrame.refId).statsGroups
            };
          }), timeoutFunc).pipe((0,map/* map */.U)(response => {
            if (!response.error && error) {
              response.error = error;
            }

            return response;
          }))
        );
      }), (0,mergeMap/* mergeMap */.z)(dataQueryResponse => {
        return (0,from/* from */.D)((async () => {
          await addDataLinksToLogsResponse(dataQueryResponse, options, this.timeSrv.timeRange(), this.replace.bind(this), this.getActualRegion.bind(this), this.tracingDataSourceUid);
          return dataQueryResponse;
        })());
      }));
    });

    datasource_defineProperty(this, "handleMetricQueries", (metricQueries, options) => {
      var _options$range, _options$range2;

      const validMetricsQueries = metricQueries.filter(this.filterQuery).map(q => {
        const migratedQuery = migrateMetricQuery(q);
        const migratedAndIterpolatedQuery = this.replaceMetricQueryVars(migratedQuery, options);
        return Object.assign({
          intervalMs: options.intervalMs,
          maxDataPoints: options.maxDataPoints
        }, migratedAndIterpolatedQuery, {
          type: 'timeSeriesQuery',
          datasource: this.getRef()
        });
      }); // No valid targets, return the empty result to save a round trip.

      if ((0,lodash.isEmpty)(validMetricsQueries)) {
        return (0,of.of)({
          data: []
        });
      }

      const request = {
        from: options === null || options === void 0 ? void 0 : (_options$range = options.range) === null || _options$range === void 0 ? void 0 : _options$range.from.valueOf().toString(),
        to: options === null || options === void 0 ? void 0 : (_options$range2 = options.range) === null || _options$range2 === void 0 ? void 0 : _options$range2.to.valueOf().toString(),
        queries: validMetricsQueries
      };
      return this.performTimeSeriesQuery(request, options.range);
    });

    datasource_defineProperty(this, "getLogRowContext", async function (row) {
      let {
        limit = 10,
        direction = 'BACKWARD'
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let logStreamField = null;
      let logField = null;

      for (const field of row.dataFrame.fields) {
        if (field.name === LOGSTREAM_IDENTIFIER_INTERNAL) {
          logStreamField = field;

          if (logField !== null) {
            break;
          }
        } else if (field.name === LOG_IDENTIFIER_INTERNAL) {
          logField = field;

          if (logStreamField !== null) {
            break;
          }
        }
      }

      const requestParams = {
        limit,
        startFromHead: direction !== 'BACKWARD',
        logGroupName: parseLogGroupName(logField.values.get(row.rowIndex)),
        logStreamName: logStreamField.values.get(row.rowIndex)
      };

      if (direction === 'BACKWARD') {
        requestParams.endTime = row.timeEpochMs;
      } else {
        requestParams.startTime = row.timeEpochMs;
      }

      const dataFrames = await (0,lastValueFrom/* lastValueFrom */.n)(_this.makeLogActionRequest('GetLogEvents', [requestParams]));
      return {
        data: dataFrames
      };
    });

    datasource_defineProperty(this, "getTargetsByQueryMode", targets => {
      const logQueries = [];
      const metricsQueries = [];
      const annotationQueries = [];
      targets.forEach(query => {
        if (isCloudWatchAnnotationQuery(query)) {
          annotationQueries.push(query);
        } else if (isCloudWatchLogsQuery(query)) {
          logQueries.push(query);
        } else {
          metricsQueries.push(query);
        }
      });
      return {
        logQueries,
        metricsQueries,
        annotationQueries
      };
    });

    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;
    this.proxyUrl = instanceSettings.url;
    this.defaultRegion = instanceSettings.jsonData.defaultRegion;
    this.datasourceName = instanceSettings.name;
    this.languageProvider = new CloudWatchLanguageProvider(this);
    this.tracingDataSourceUid = instanceSettings.jsonData.tracingDatasourceUid;
    this.logsTimeout = instanceSettings.jsonData.logsTimeout || '15m';
    this.sqlCompletionItemProvider = new SQLCompletionItemProvider(this, this.templateSrv);
    this.metricMathCompletionItemProvider = new MetricMathCompletionItemProvider(this, this.templateSrv);
    this.variables = new CloudWatchVariableSupport(this);
    this.annotations = CloudWatchAnnotationSupport;
  }

  query(options) {
    options = (0,lodash.cloneDeep)(options);
    let queries = options.targets.filter(item => item.hide !== true);
    const {
      logQueries,
      metricsQueries,
      annotationQueries
    } = this.getTargetsByQueryMode(queries);
    const dataQueryResponses = [];

    if (logQueries.length > 0) {
      dataQueryResponses.push(this.handleLogQueries(logQueries, options));
    }

    if (metricsQueries.length > 0) {
      dataQueryResponses.push(this.handleMetricQueries(metricsQueries, options));
    }

    if (annotationQueries.length > 0) {
      dataQueryResponses.push(this.handleAnnotationQuery(annotationQueries, options));
    } // No valid targets, return the empty result to save a round trip.


    if ((0,lodash.isEmpty)(dataQueryResponses)) {
      return (0,of.of)({
        data: [],
        state: src.LoadingState.Done
      });
    }

    return (0,merge/* merge */.T)(...dataQueryResponses);
  }
  /**
   * Handle log query. The log query works by starting the query on the CloudWatch and then periodically polling for
   * results.
   * @param logQueries
   * @param options
   */


  filterQuery(query) {
    if (isCloudWatchLogsQuery(query)) {
      var _query$logGroupNames;

      return !!((_query$logGroupNames = query.logGroupNames) !== null && _query$logGroupNames !== void 0 && _query$logGroupNames.length);
    } else if (isCloudWatchAnnotationQuery(query)) {
      // annotation query validity already checked in annotationSupport
      return true;
    }

    const {
      region,
      metricQueryType,
      metricEditorMode,
      expression,
      metricName,
      namespace,
      sqlExpression,
      statistic
    } = query;

    if (!region) {
      return false;
    }

    if (metricQueryType === types/* MetricQueryType.Search */.$5.Search && metricEditorMode === types/* MetricEditorMode.Builder */.MQ.Builder) {
      return !!namespace && !!metricName && !!statistic;
    } else if (metricQueryType === types/* MetricQueryType.Search */.$5.Search && metricEditorMode === types/* MetricEditorMode.Code */.MQ.Code) {
      return !!expression;
    } else if (metricQueryType === types/* MetricQueryType.Query */.$5.Query) {
      // still TBD how to validate the visual query builder for SQL
      return !!sqlExpression;
    }

    throw new Error('invalid metric editor mode');
  }

  replaceMetricQueryVars(query, options) {
    var _query$dimensions;

    query.region = this.templateSrv.replace(this.getActualRegion(query.region), options.scopedVars);
    query.namespace = this.replace(query.namespace, options.scopedVars, true, 'namespace');
    query.metricName = this.replace(query.metricName, options.scopedVars, true, 'metric name');
    query.dimensions = this.convertDimensionFormat((_query$dimensions = query.dimensions) !== null && _query$dimensions !== void 0 ? _query$dimensions : {}, options.scopedVars);
    query.statistic = this.templateSrv.replace(query.statistic, options.scopedVars);
    query.period = String(this.getPeriod(query, options)); // use string format for period in graph query, and alerting

    query.id = this.templateSrv.replace(query.id, options.scopedVars);
    query.expression = this.templateSrv.replace(query.expression, options.scopedVars);
    query.sqlExpression = this.templateSrv.replace(query.sqlExpression, options.scopedVars, 'raw');
    return query;
  }

  handleAnnotationQuery(queries, options) {
    return this.awsRequest(DS_QUERY_ENDPOINT, {
      from: options.range.from.valueOf().toString(),
      to: options.range.to.valueOf().toString(),
      queries: queries.map(query => {
        var _query$dimensions2, _query$actionPrefix, _query$alarmNamePrefi;

        return Object.assign({}, query, {
          statistic: this.templateSrv.replace(query.statistic),
          region: this.templateSrv.replace(this.getActualRegion(query.region)),
          namespace: this.templateSrv.replace(query.namespace),
          metricName: this.templateSrv.replace(query.metricName),
          dimensions: this.convertDimensionFormat((_query$dimensions2 = query.dimensions) !== null && _query$dimensions2 !== void 0 ? _query$dimensions2 : {}, {}),
          period: query.period ? parseInt(query.period, 10) : 300,
          actionPrefix: (_query$actionPrefix = query.actionPrefix) !== null && _query$actionPrefix !== void 0 ? _query$actionPrefix : '',
          alarmNamePrefix: (_query$alarmNamePrefi = query.alarmNamePrefix) !== null && _query$alarmNamePrefi !== void 0 ? _query$alarmNamePrefi : '',
          type: 'annotationQuery',
          datasource: this.getRef()
        });
      })
    }).pipe((0,map/* map */.U)(r => {
      const frames = (0,grafana_runtime_src.toDataQueryResponse)({
        data: r
      }).data;
      return {
        data: frames
      };
    }));
  }
  /**
   * Checks progress and polls data of a started logs query with some retry logic.
   * @param queryParams
   */


  logsQuery(queryParams, timeoutFunc) {
    this.logQueries = {};
    queryParams.forEach(param => {
      var _ref2, _param$statsGroups$le, _param$statsGroups;

      this.logQueries[param.refId] = {
        id: param.queryId,
        region: param.region,
        statsQuery: (_ref2 = ((_param$statsGroups$le = (_param$statsGroups = param.statsGroups) === null || _param$statsGroups === void 0 ? void 0 : _param$statsGroups.length) !== null && _param$statsGroups$le !== void 0 ? _param$statsGroups$le : 0) > 0) !== null && _ref2 !== void 0 ? _ref2 : false
      };
    });
    const dataFrames = increasingInterval({
      startPeriod: 100,
      endPeriod: 1000,
      step: 300
    }).pipe((0,concatMap/* concatMap */.b)(_ => this.makeLogActionRequest('GetQueryResults', queryParams, {
      skipCache: true
    })), (0,repeat/* repeat */.r)(), (0,share/* share */.B)());
    const consecutiveFailedAttempts = dataFrames.pipe((0,scan/* scan */.R)((_ref3, frames) => {
      let {
        failures,
        prevRecordsMatched
      } = _ref3;
      failures++;

      for (const frame of frames) {
        var _frame$meta, _frame$meta$stats, _frame$meta$stats$fin, _prevRecordsMatched;

        const recordsMatched = (_frame$meta = frame.meta) === null || _frame$meta === void 0 ? void 0 : (_frame$meta$stats = _frame$meta.stats) === null || _frame$meta$stats === void 0 ? void 0 : (_frame$meta$stats$fin = _frame$meta$stats.find(stat => stat.displayName === 'Records scanned')) === null || _frame$meta$stats$fin === void 0 ? void 0 : _frame$meta$stats$fin.value;

        if (recordsMatched > ((_prevRecordsMatched = prevRecordsMatched[frame.refId]) !== null && _prevRecordsMatched !== void 0 ? _prevRecordsMatched : 0)) {
          failures = 0;
        }

        prevRecordsMatched[frame.refId] = recordsMatched;
      }

      return {
        failures,
        prevRecordsMatched
      };
    }, {
      failures: 0,
      prevRecordsMatched: {}
    }), (0,map/* map */.U)(_ref4 => {
      let {
        failures
      } = _ref4;
      return failures;
    }), (0,share/* share */.B)());
    const queryResponse = (0,zip/* zip */.$)(dataFrames, consecutiveFailedAttempts).pipe((0,tap/* tap */.b)(_ref5 => {
      let [dataFrames] = _ref5;

      for (const frame of dataFrames) {
        var _frame$meta2, _frame$meta2$custom;

        if ([types/* CloudWatchLogsQueryStatus.Complete */.KB.Complete, types/* CloudWatchLogsQueryStatus.Cancelled */.KB.Cancelled, types/* CloudWatchLogsQueryStatus.Failed */.KB.Failed].includes((_frame$meta2 = frame.meta) === null || _frame$meta2 === void 0 ? void 0 : (_frame$meta2$custom = _frame$meta2.custom) === null || _frame$meta2$custom === void 0 ? void 0 : _frame$meta2$custom['Status']) && this.logQueries.hasOwnProperty(frame.refId)) {
          delete this.logQueries[frame.refId];
        }
      }
    }), (0,map/* map */.U)(_ref6 => {
      let [dataFrames, failedAttempts] = _ref6;

      if (timeoutFunc()) {
        for (const frame of dataFrames) {
          (0,lodash.set)(frame, 'meta.custom.Status', types/* CloudWatchLogsQueryStatus.Cancelled */.KB.Cancelled);
        }
      }

      return {
        data: dataFrames,
        key: 'test-key',
        state: dataFrames.every(dataFrame => {
          var _dataFrame$meta2, _dataFrame$meta2$cust;

          return [types/* CloudWatchLogsQueryStatus.Complete */.KB.Complete, types/* CloudWatchLogsQueryStatus.Cancelled */.KB.Cancelled, types/* CloudWatchLogsQueryStatus.Failed */.KB.Failed].includes((_dataFrame$meta2 = dataFrame.meta) === null || _dataFrame$meta2 === void 0 ? void 0 : (_dataFrame$meta2$cust = _dataFrame$meta2.custom) === null || _dataFrame$meta2$cust === void 0 ? void 0 : _dataFrame$meta2$cust['Status']);
        }) ? src.LoadingState.Done : src.LoadingState.Loading,
        error: timeoutFunc() ? {
          message: `error: query timed out after ${failedAttempts} attempts`,
          type: src.DataQueryErrorType.Timeout
        } : undefined
      };
    }), (0,takeWhile/* takeWhile */.o)(_ref7 => {
      let {
        state
      } = _ref7;
      return state !== src.LoadingState.Error && state !== src.LoadingState.Done;
    }, true));
    return withTeardown(queryResponse, () => this.stopQueries());
  }

  stopQueries() {
    if (Object.keys(this.logQueries).length > 0) {
      this.makeLogActionRequest('StopQuery', Object.values(this.logQueries).map(logQuery => ({
        queryId: logQuery.id,
        region: logQuery.region
      })), {
        makeReplacements: false,
        skipCache: true
      }).pipe((0,finalize/* finalize */.x)(() => {
        this.logQueries = {};
      }));
    }
  }

  async describeLogGroups(params) {
    var _dataFrames$0$fields$, _dataFrames$, _dataFrames$$fields$;

    const dataFrames = await (0,lastValueFrom/* lastValueFrom */.n)(this.makeLogActionRequest('DescribeLogGroups', [params]));
    const logGroupNames = (_dataFrames$0$fields$ = (_dataFrames$ = dataFrames[0]) === null || _dataFrames$ === void 0 ? void 0 : (_dataFrames$$fields$ = _dataFrames$.fields[0]) === null || _dataFrames$$fields$ === void 0 ? void 0 : _dataFrames$$fields$.values.toArray()) !== null && _dataFrames$0$fields$ !== void 0 ? _dataFrames$0$fields$ : [];
    return logGroupNames;
  }

  async getLogGroupFields(params) {
    var _fieldNames$map;

    const dataFrames = await (0,lastValueFrom/* lastValueFrom */.n)(this.makeLogActionRequest('GetLogGroupFields', [params]));
    const fieldNames = dataFrames[0].fields[0].values.toArray();
    const fieldPercentages = dataFrames[0].fields[1].values.toArray();
    const getLogGroupFieldsResponse = {
      logGroupFields: (_fieldNames$map = fieldNames.map((val, i) => ({
        name: val,
        percent: fieldPercentages[i]
      }))) !== null && _fieldNames$map !== void 0 ? _fieldNames$map : []
    };
    return getLogGroupFieldsResponse;
  }

  getVariables() {
    return this.templateSrv.getVariables().map(v => `$${v.name}`);
  }

  getPeriod(target, options) {
    let period = this.templateSrv.replace(target.period, options.scopedVars);

    if (period && period.toLowerCase() !== 'auto') {
      if (/^\d+$/.test(period)) {
        period = parseInt(period, 10);
      } else {
        period = src.rangeUtil.intervalToSeconds(period);
      }

      if (period < 1) {
        period = 1;
      }
    }

    return period || '';
  }

  performTimeSeriesQuery(request, _ref8) {
    let {
      from,
      to
    } = _ref8;
    return this.awsRequest(DS_QUERY_ENDPOINT, request).pipe((0,map/* map */.U)(res => {
      const dataframes = (0,grafana_runtime_src.toDataQueryResponse)({
        data: res
      }).data;

      if (!dataframes || dataframes.length <= 0) {
        return {
          data: []
        };
      }

      const lastError = (0,lodash.findLast)(res.results, v => !!v.error);
      dataframes.forEach(frame => {
        frame.fields.forEach(field => {
          if (field.type === src.FieldType.time) {
            var _frame$meta3, _frame$meta3$custom;

            // field.config.interval is populated in order for Grafana to fill in null values at frame intervals
            field.config.interval = ((_frame$meta3 = frame.meta) === null || _frame$meta3 === void 0 ? void 0 : (_frame$meta3$custom = _frame$meta3.custom) === null || _frame$meta3$custom === void 0 ? void 0 : _frame$meta3$custom.period) * 1000;
          }
        });
      });
      return {
        data: dataframes,
        error: lastError ? {
          message: lastError.error
        } : null
      };
    }), (0,catchError/* catchError */.K)(err => {
      const isFrameError = err.data.results; // Error is not frame specific

      if (!isFrameError && err.data && err.data.message === 'Metric request error' && err.data.error) {
        err.message = err.data.error;
        return (0,throwError/* throwError */._)(() => err);
      } // The error is either for a specific frame or for all the frames


      const results = Object.values(err.data.results);
      const firstErrorResult = results.find(r => r.error);

      if (firstErrorResult) {
        err.message = firstErrorResult.error;
      }

      if (results.some(r => r.error && /^Throttling:.*/.test(r.error))) {
        const failedRedIds = Object.keys(err.data.results);
        const regionsAffected = Object.values(request.queries).reduce((res, _ref9) => {
          let {
            refId,
            region
          } = _ref9;
          return refId && !failedRedIds.includes(refId) || res.includes(region) ? res : [...res, region];
        }, []);
        regionsAffected.forEach(region => {
          const actualRegion = this.getActualRegion(region);

          if (actualRegion) {
            this.debouncedAlert(this.datasourceName, actualRegion);
          }
        });
      }

      return (0,throwError/* throwError */._)(() => err);
    }));
  }

  doMetricResourceRequest(subtype, parameters) {
    return this.getResource(subtype, parameters);
  }

  makeLogActionRequest(subtype, queryParams) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      makeReplacements: true,
      skipCache: false
    };
    const range = this.timeSrv.timeRange();
    const requestParams = {
      from: range.from.valueOf().toString(),
      to: range.to.valueOf().toString(),
      queries: queryParams.map(param => Object.assign({
        refId: param.refId || 'A',
        intervalMs: 1,
        // dummy
        maxDataPoints: 1,
        // dummy
        datasource: this.getRef(),
        type: 'logAction',
        subtype: subtype
      }, param))
    };

    if (options.makeReplacements) {
      requestParams.queries.forEach(query => {
        const fieldsToReplace = ['queryString', 'logGroupNames', 'logGroupName', 'logGroupNamePrefix'];
        const anyQuery = query;

        for (const fieldName of fieldsToReplace) {
          if (query.hasOwnProperty(fieldName)) {
            if (Array.isArray(anyQuery[fieldName])) {
              anyQuery[fieldName] = anyQuery[fieldName].map(val => this.replace(val, options.scopedVars, true, fieldName));
            } else {
              anyQuery[fieldName] = this.replace(anyQuery[fieldName], options.scopedVars, true, fieldName);
            }
          }
        } // TODO: seems to be some sort of bug that we don't really send region with all queries. This means
        //  if you select different than default region in editor you will get results for autocomplete from wrong
        //  region.


        if (anyQuery.region) {
          anyQuery.region = this.replace(anyQuery.region, options.scopedVars, true, 'region');
          anyQuery.region = this.getActualRegion(anyQuery.region);
        }
      });
    }

    const resultsToDataFrames = val => (0,grafana_runtime_src.toDataQueryResponse)(val).data || [];

    let headers = {};

    if (options.skipCache) {
      headers = {
        'X-Cache-Skip': true
      };
    }

    return this.awsRequest(DS_QUERY_ENDPOINT, requestParams, headers).pipe((0,map/* map */.U)(response => resultsToDataFrames({
      data: response
    })), (0,catchError/* catchError */.K)(err => {
      var _err$data, _err$data2;

      if (config/* default.featureToggles.datasourceQueryMultiStatus */.ZP.featureToggles.datasourceQueryMultiStatus && err.status === 207) {
        throw err;
      }

      if (err.status === 400) {
        throw err;
      }

      if ((_err$data = err.data) !== null && _err$data !== void 0 && _err$data.error) {
        throw err.data.error;
      } else if ((_err$data2 = err.data) !== null && _err$data2 !== void 0 && _err$data2.message) {
        // In PROD we do not supply .error
        throw err.data.message;
      }

      throw err;
    }));
  }

  getRegions() {
    return this.doMetricResourceRequest('regions').then(regions => [{
      label: 'default',
      value: 'default',
      text: 'default'
    }, ...regions]);
  }

  getNamespaces() {
    return this.doMetricResourceRequest('namespaces');
  }

  async getMetrics(namespace, region) {
    if (!namespace) {
      return [];
    }

    return this.doMetricResourceRequest('metrics', {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      namespace: this.templateSrv.replace(namespace)
    });
  }

  async getAllMetrics(region) {
    const values = await this.doMetricResourceRequest('all-metrics', {
      region: this.templateSrv.replace(this.getActualRegion(region))
    });
    return values.map(v => ({
      metricName: v.value,
      namespace: v.text
    }));
  }

  async getDimensionKeys(namespace, region) {
    let dimensionFilters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let metricName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    if (!namespace) {
      return [];
    }

    return this.doMetricResourceRequest('dimension-keys', {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      namespace: this.templateSrv.replace(namespace),
      dimensionFilters: JSON.stringify(this.convertDimensionFormat(dimensionFilters, {})),
      metricName
    });
  }

  async getDimensionValues(region, namespace, metricName, dimensionKey, filterDimensions) {
    if (!namespace || !metricName) {
      return [];
    }

    const values = await this.doMetricResourceRequest('dimension-values', {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      namespace: this.templateSrv.replace(namespace),
      metricName: this.templateSrv.replace(metricName.trim()),
      dimensionKey: this.templateSrv.replace(dimensionKey),
      dimensions: JSON.stringify(this.convertDimensionFormat(filterDimensions, {}))
    });
    return values;
  }

  getEbsVolumeIds(region, instanceId) {
    return this.doMetricResourceRequest('ebs-volume-ids', {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      instanceId: this.templateSrv.replace(instanceId)
    });
  }

  getEc2InstanceAttribute(region, attributeName, filters) {
    return this.doMetricResourceRequest('ec2-instance-attribute', {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      attributeName: this.templateSrv.replace(attributeName),
      filters: JSON.stringify(this.convertMultiFilterFormat(filters, 'filter key'))
    });
  }

  getResourceARNs(region, resourceType, tags) {
    return this.doMetricResourceRequest('resource-arns', {
      region: this.templateSrv.replace(this.getActualRegion(region)),
      resourceType: this.templateSrv.replace(resourceType),
      tags: JSON.stringify(this.convertMultiFilterFormat(tags, 'tag name'))
    });
  }

  targetContainsTemplate(target) {
    var _target$logGroupNames;

    return this.templateSrv.containsTemplate(target.region) || this.templateSrv.containsTemplate(target.namespace) || this.templateSrv.containsTemplate(target.metricName) || this.templateSrv.containsTemplate(target.expression) || ((_target$logGroupNames = target.logGroupNames) === null || _target$logGroupNames === void 0 ? void 0 : _target$logGroupNames.some(logGroup => this.templateSrv.containsTemplate(logGroup))) || (0,lodash.find)(target.dimensions, (v, k) => this.templateSrv.containsTemplate(k) || this.templateSrv.containsTemplate(v));
  }

  awsRequest(url, data) {
    let headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const options = {
      method: 'POST',
      url,
      data,
      headers
    };
    return (0,grafana_runtime_src.getBackendSrv)().fetch(options).pipe((0,map/* map */.U)(result => result.data));
  }

  getDefaultRegion() {
    return this.defaultRegion;
  }

  getActualRegion(region) {
    if (region === 'default' || region === undefined || region === '') {
      return this.getDefaultRegion();
    }

    return region;
  }

  showContextToggle() {
    return true;
  }

  convertToCloudWatchTime(date, roundUp) {
    if ((0,lodash.isString)(date)) {
      date = src.dateMath.parse(date, roundUp);
    }

    return Math.round(date.valueOf() / 1000);
  }

  convertDimensionFormat(dimensions, scopedVars) {
    return Object.entries(dimensions).reduce((result, _ref10) => {
      let [key, value] = _ref10;
      key = this.replace(key, scopedVars, true, 'dimension keys');

      if (Array.isArray(value)) {
        return Object.assign({}, result, {
          [key]: value
        });
      }

      if (!value) {
        return Object.assign({}, result, {
          [key]: null
        });
      }

      const newValues = this.getVariableValue(value, scopedVars);
      return Object.assign({}, result, {
        [key]: newValues
      });
    }, {});
  } // get the value for a given template variable


  getVariableValue(value, scopedVars) {
    const variableName = this.templateSrv.getVariableName(value);
    const valueVar = this.templateSrv.getVariables().find(_ref11 => {
      let {
        name
      } = _ref11;
      return name === variableName;
    });

    if (variableName && valueVar) {
      if (valueVar.multi) {
        // rebuild the variable name to handle old migrated queries
        const values = this.templateSrv.replace('$' + variableName, scopedVars, 'pipe').split('|');
        return values;
      }

      return [this.templateSrv.replace(value, scopedVars)];
    }

    return [value];
  }

  convertMultiFilterFormat(multiFilters, fieldName) {
    return Object.entries(multiFilters).reduce((result, _ref12) => {
      let [key, values] = _ref12;
      key = this.replace(key, {}, true, fieldName);

      if (!values) {
        return Object.assign({}, result, {
          [key]: null
        });
      }

      const initialVal = [];
      const newValues = values.reduce((result, value) => {
        const vals = this.getVariableValue(value, {});
        return [...result, ...vals];
      }, initialVal);
      return Object.assign({}, result, {
        [key]: newValues
      });
    }, {});
  }

  replace(target, scopedVars, displayErrorIfIsMultiTemplateVariable, fieldName) {
    if (displayErrorIfIsMultiTemplateVariable && !!target) {
      const variable = this.templateSrv.getVariables().find(_ref13 => {
        let {
          name
        } = _ref13;
        return name === this.templateSrv.getVariableName(target);
      });

      if (variable && variable.multi) {
        this.debouncedCustomAlert('CloudWatch templating error', `Multi template variables are not supported for ${fieldName || target}`);
      }
    }

    return this.templateSrv.replace(target, scopedVars);
  }

  getQueryDisplayText(query) {
    if (query.queryMode === 'Logs') {
      var _query$expression;

      return (_query$expression = query.expression) !== null && _query$expression !== void 0 ? _query$expression : '';
    } else {
      return JSON.stringify(query);
    }
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    if (!queries.length) {
      return queries;
    }

    return queries.map(query => Object.assign({}, query, {
      region: this.getActualRegion(this.replace(query.region, scopedVars))
    }, isCloudWatchMetricsQuery(query) && this.interpolateMetricsQueryVariables(query, scopedVars)));
  }

  interpolateMetricsQueryVariables(query, scopedVars) {
    var _query$dimensions3;

    return {
      alias: this.replace(query.alias, scopedVars),
      metricName: this.replace(query.metricName, scopedVars),
      namespace: this.replace(query.namespace, scopedVars),
      period: this.replace(query.period, scopedVars),
      sqlExpression: this.replace(query.sqlExpression, scopedVars),
      dimensions: Object.entries((_query$dimensions3 = query.dimensions) !== null && _query$dimensions3 !== void 0 ? _query$dimensions3 : {}).reduce((prev, _ref14) => {
        let [key, value] = _ref14;

        if (Array.isArray(value)) {
          return Object.assign({}, prev, {
            [key]: value
          });
        }

        return Object.assign({}, prev, {
          [this.replace(key, scopedVars)]: this.replace(value, scopedVars)
        });
      }, {})
    };
  }

}

function withTeardown(observable, onUnsubscribe) {
  return new Observable/* Observable */.y(subscriber => {
    const innerSub = observable.subscribe({
      next: val => subscriber.next(val),
      error: err => subscriber.next(err),
      complete: () => subscriber.complete()
    });
    return () => {
      innerSub.unsubscribe();
      onUnsubscribe();
    };
  });
}

function parseLogGroupName(logIdentifier) {
  const colonIndex = logIdentifier.lastIndexOf(':');
  return logIdentifier.slice(colonIndex + 1);
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloudwatch/module.tsx






const module_plugin = new src.DataSourcePlugin(CloudWatchDatasource).setQueryEditorHelp(LogsCheatSheet).setConfigEditor(ConfigEditor).setQueryEditor(PanelQueryEditor).setMetadataInspector(MetaInspector);

/***/ }),

/***/ "./.yarn/cache/fast-deep-equal-npm-3.1.3-790edcfcf5-e21a9d8d84.zip/node_modules/fast-deep-equal/react.js":
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        continue;
      }

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./.yarn/cache/jsurl-npm-0.1.5-9e17f93783-50b614908d.zip/node_modules/jsurl/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__("./.yarn/cache/jsurl-npm-0.1.5-9e17f93783-50b614908d.zip/node_modules/jsurl/lib/jsurl.js");

/***/ }),

/***/ "./.yarn/cache/jsurl-npm-0.1.5-9e17f93783-50b614908d.zip/node_modules/jsurl/lib/jsurl.js":
/***/ ((__unused_webpack_module, exports) => {

/**
 * Copyright (c) 2011 Bruno Jouhier <bruno.jouhier@sage.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
//
(function(exports) {
	"use strict";
	exports.stringify = function stringify(v) {
		function encode(s) {
			return !/[^\w-.]/.test(s) ? s : s.replace(/[^\w-.]/g, function(ch) {
				if (ch === '$') return '!';
				ch = ch.charCodeAt(0);
				// thanks to Douglas Crockford for the negative slice trick
				return ch < 0x100 ? '*' + ('00' + ch.toString(16)).slice(-2) : '**' + ('0000' + ch.toString(16)).slice(-4);
			});
		}

		var tmpAry;

		switch (typeof v) {
			case 'number':
				return isFinite(v) ? '~' + v : '~null';
			case 'boolean':
				return '~' + v;
			case 'string':
				return "~'" + encode(v);
			case 'object':
				if (!v) return '~null';

				tmpAry = [];

				if (Array.isArray(v)) {
					for (var i = 0; i < v.length; i++) {
						tmpAry[i] = stringify(v[i]) || '~null';
					}

					return '~(' + (tmpAry.join('') || '~') + ')';
				} else {
					for (var key in v) {
						if (v.hasOwnProperty(key)) {
							var val = stringify(v[key]);

							// skip undefined and functions
							if (val) {
								tmpAry.push(encode(key) + val);
							}
						}
					}

					return '~(' + tmpAry.join('~') + ')';
				}
			default:
				// function, undefined
				return;
		}
	};

	var reserved = {
		"true": true,
		"false": false,
		"null": null
	};

	exports.parse = function(s) {
		if (!s) return s;
		s = s.replace(/%(25)*27/g, "'");
		var i = 0,
			len = s.length;

		function eat(expected) {
			if (s.charAt(i) !== expected) throw new Error("bad JSURL syntax: expected " + expected + ", got " + (s && s.charAt(i)));
			i++;
		}

		function decode() {
			var beg = i,
				ch, r = "";
			while (i < len && (ch = s.charAt(i)) !== '~' && ch !== ')') {
				switch (ch) {
					case '*':
						if (beg < i) r += s.substring(beg, i);
						if (s.charAt(i + 1) === '*') r += String.fromCharCode(parseInt(s.substring(i + 2, i + 6), 16)), beg = (i += 6);
						else r += String.fromCharCode(parseInt(s.substring(i + 1, i + 3), 16)), beg = (i += 3);
						break;
					case '!':
						if (beg < i) r += s.substring(beg, i);
						r += '$', beg = ++i;
						break;
					default:
						i++;
				}
			}
			return r + s.substring(beg, i);
		}

		return (function parseOne() {
			var result, ch, beg;
			eat('~');
			switch (ch = s.charAt(i)) {
				case '(':
					i++;
					if (s.charAt(i) === '~') {
						result = [];
						if (s.charAt(i + 1) === ')') i++;
						else {
							do {
								result.push(parseOne());
							} while (s.charAt(i) === '~');
						}
					} else {
						result = {};
						if (s.charAt(i) !== ')') {
							do {
								var key = decode();
								result[key] = parseOne();
							} while (s.charAt(i) === '~' && ++i);
						}
					}
					eat(')');
					break;
				case "'":
					i++;
					result = decode();
					break;
				default:
					beg = i++;
					while (i < len && /[^)~]/.test(s.charAt(i)))
					i++;
					var sub = s.substring(beg, i);
					if (/[\d\-]/.test(ch)) {
						result = parseFloat(sub);
					} else {
						result = reserved[sub];
						if (typeof result === "undefined") throw new Error("bad value keyword: " + sub);
					}
			}
			return result;
		})();
	}

	exports.tryParse = function(s, def) {
		try {
			return exports.parse(s);
		} catch (ex) {
			return def;
		}
	}

})( true ? exports : (0));


/***/ })

}]);