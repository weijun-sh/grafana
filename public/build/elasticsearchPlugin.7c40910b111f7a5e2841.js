(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[9897],{

/***/ "./public/app/plugins/datasource/elasticsearch/module.ts":
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
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/hooks/useStatelessReducer.ts

const combineReducers = reducers => (state, action) => {
  const newState = {};

  for (const key in reducers) {
    newState[key] = reducers[key](state[key], action);
  }

  return newState;
};
const useStatelessReducer = (onChange, state, reducer) => {
  const dispatch = (0,react.useCallback)(action => {
    onChange(reducer(state, action));
  }, [onChange, state, reducer]);
  return dispatch;
};
const DispatchContext = /*#__PURE__*/(0,react.createContext)(undefined);
const useDispatch = () => {
  const dispatch = (0,react.useContext)(DispatchContext);

  if (!dispatch) {
    throw new Error('Use DispatchContext first.');
  }

  return dispatch;
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/BucketScriptSettingsEditor/utils.ts
const defaultPipelineVariable = name => ({
  name,
  pipelineAgg: ''
});
/**
 * Given an array of pipeline variables generates a new unique pipeline variable name in the form of `var{n}`.
 * The value for `n` is calculated based on the variables names in pipelineVars matching `var{n}`.
 */

const generatePipelineVariableName = pipelineVars => `var${Math.max(0, ...pipelineVars.map(v => {
  var _v$name$match;

  return parseInt(((_v$name$match = v.name.match('^var(\\d+)$')) === null || _v$name$match === void 0 ? void 0 : _v$name$match[1]) || '0', 10);
})) + 1}`;
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/aggregations.ts

const isEWMAMovingAverage = metric => {
  var _metric$settings;

  return ((_metric$settings = metric.settings) === null || _metric$settings === void 0 ? void 0 : _metric$settings.model) === 'ewma';
};
const isHoltMovingAverage = metric => {
  var _metric$settings2;

  return ((_metric$settings2 = metric.settings) === null || _metric$settings2 === void 0 ? void 0 : _metric$settings2.model) === 'holt';
};
const isHoltWintersMovingAverage = metric => {
  var _metric$settings3;

  return ((_metric$settings3 = metric.settings) === null || _metric$settings3 === void 0 ? void 0 : _metric$settings3.model) === 'holt_winters';
};
const isMovingAverageWithModelSettings = metric => {
  var _metric$settings4;

  return ['holt', 'ewma', 'holt_winters'].includes(((_metric$settings4 = metric.settings) === null || _metric$settings4 === void 0 ? void 0 : _metric$settings4.model) || '');
};
// Guards
// Given the structure of the aggregations (ie. `settings` field being always optional) we cannot
// determine types based solely on objects' properties, therefore we use `metricAggregationConfig` as the
// source of truth.

/**
 * Checks if `metric` requires a field (either referring to a document or another aggregation)
 * @param metric
 */
const isMetricAggregationWithField = metric => metricAggregationConfig[metric.type].requiresField;
const isPipelineAggregation = metric => metricAggregationConfig[metric.type].isPipelineAgg;
const isPipelineAggregationWithMultipleBucketPaths = metric => metricAggregationConfig[metric.type].supportsMultipleBucketPaths;
const isMetricAggregationWithMissingSupport = metric => metricAggregationConfig[metric.type].supportsMissing;
const isMetricAggregationWithSettings = metric => metricAggregationConfig[metric.type].hasSettings;
const isMetricAggregationWithMeta = metric => metricAggregationConfig[metric.type].hasMeta;
const isMetricAggregationWithInlineScript = metric => metricAggregationConfig[metric.type].supportsInlineScript;
const METRIC_AGGREGATION_TYPES = ['count', 'avg', 'sum', 'min', 'max', 'extended_stats', 'percentiles', 'cardinality', 'raw_document', 'raw_data', 'logs', 'moving_avg', 'moving_fn', 'derivative', 'serial_diff', 'cumulative_sum', 'bucket_script', 'rate', 'top_metrics'];
const isMetricAggregationType = s => METRIC_AGGREGATION_TYPES.includes(s);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/utils.ts


const metricAggregationConfig = {
  count: {
    label: 'Count',
    requiresField: false,
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: false,
    hasMeta: false,
    supportsInlineScript: false,
    defaults: {}
  },
  avg: {
    label: 'Average',
    requiresField: true,
    supportsInlineScript: true,
    supportsMissing: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: false,
    defaults: {}
  },
  sum: {
    label: 'Sum',
    requiresField: true,
    supportsInlineScript: true,
    supportsMissing: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: false,
    defaults: {}
  },
  max: {
    label: 'Max',
    requiresField: true,
    supportsInlineScript: true,
    supportsMissing: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: false,
    defaults: {}
  },
  min: {
    label: 'Min',
    requiresField: true,
    supportsInlineScript: true,
    supportsMissing: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: false,
    defaults: {}
  },
  extended_stats: {
    label: 'Extended Stats',
    requiresField: true,
    supportsMissing: true,
    supportsInlineScript: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: true,
    defaults: {
      meta: {
        std_deviation_bounds_lower: true,
        std_deviation_bounds_upper: true
      }
    }
  },
  percentiles: {
    label: 'Percentiles',
    requiresField: true,
    supportsMissing: true,
    supportsInlineScript: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    hasMeta: false,
    defaults: {
      settings: {
        percents: ['25', '50', '75', '95', '99']
      }
    }
  },
  cardinality: {
    label: 'Unique Count',
    requiresField: true,
    supportsMissing: true,
    isPipelineAgg: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {}
  },
  moving_avg: {
    label: 'Moving Average',
    requiresField: true,
    isPipelineAgg: true,
    versionRange: '>=2.0.0 <8.0.0',
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      settings: {
        model: 'simple',
        window: '5'
      }
    }
  },
  moving_fn: {
    // TODO: Check this
    label: 'Moving Function',
    requiresField: true,
    isPipelineAgg: true,
    supportsMultipleBucketPaths: false,
    supportsInlineScript: false,
    supportsMissing: false,
    hasMeta: false,
    hasSettings: true,
    versionRange: '>=7.0.0',
    defaults: {}
  },
  derivative: {
    label: 'Derivative',
    requiresField: true,
    isPipelineAgg: true,
    versionRange: '>=2.0.0',
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {}
  },
  serial_diff: {
    label: 'Serial Difference',
    requiresField: true,
    isPipelineAgg: true,
    versionRange: '>=2.0.0',
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      settings: {
        lag: '1'
      }
    }
  },
  cumulative_sum: {
    label: 'Cumulative Sum',
    requiresField: true,
    isPipelineAgg: true,
    versionRange: '>=2.0.0',
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {}
  },
  bucket_script: {
    label: 'Bucket Script',
    requiresField: false,
    isPipelineAgg: true,
    supportsMissing: false,
    supportsMultipleBucketPaths: true,
    versionRange: '>=2.0.0',
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      pipelineVariables: [defaultPipelineVariable(generatePipelineVariableName([]))]
    }
  },
  raw_document: {
    label: 'Raw Document (legacy)',
    requiresField: false,
    isSingleMetric: true,
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      settings: {
        size: '500'
      }
    }
  },
  raw_data: {
    label: 'Raw Data',
    requiresField: false,
    isSingleMetric: true,
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      settings: {
        size: '500'
      }
    }
  },
  logs: {
    label: 'Logs',
    requiresField: false,
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    isSingleMetric: true,
    supportsInlineScript: false,
    hasMeta: false,
    defaults: {
      settings: {
        limit: '500'
      }
    }
  },
  top_metrics: {
    label: 'Top Metrics',
    xpack: true,
    requiresField: false,
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: false,
    versionRange: '>=7.7.0',
    hasMeta: false,
    defaults: {
      settings: {
        order: 'desc'
      }
    }
  },
  rate: {
    label: 'Rate',
    xpack: true,
    versionRange: '>=7.10.0',
    requiresField: true,
    isPipelineAgg: false,
    supportsMissing: false,
    supportsMultipleBucketPaths: false,
    hasSettings: true,
    supportsInlineScript: true,
    hasMeta: false,
    defaults: {}
  }
};
const pipelineOptions = {
  moving_avg: [{
    label: 'window',
    default: 5
  }, {
    label: 'model',
    default: 'simple'
  }, {
    label: 'predict'
  }, {
    label: 'minimize',
    default: false
  }],
  moving_fn: [{
    label: 'window',
    default: 5
  }, {
    label: 'script'
  }],
  derivative: [{
    label: 'unit'
  }],
  serial_diff: [{
    label: 'lag'
  }],
  cumulative_sum: [{
    label: 'format'
  }],
  bucket_script: []
};
/**
 * Given a metric `MetricA` and an array of metrics, returns all children of `MetricA`.
 * `MetricB` is considered a child of `MetricA` if `MetricA` is referenced by `MetricB` in it's `field` attribute
 * (`MetricA.id === MetricB.field`) or in it's pipeline aggregation variables (for bucket_scripts).
 * @param metric
 * @param metrics
 */

const getChildren = (metric, metrics) => {
  const children = metrics.filter(m => {
    // TODO: Check this.
    if (isPipelineAggregationWithMultipleBucketPaths(m)) {
      var _m$pipelineVariables;

      return (_m$pipelineVariables = m.pipelineVariables) === null || _m$pipelineVariables === void 0 ? void 0 : _m$pipelineVariables.some(pv => pv.pipelineAgg === metric.id);
    }

    return isMetricAggregationWithField(m) && metric.id === m.field;
  });
  return [...children, ...children.flatMap(child => getChildren(child, metrics))];
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/query_def.ts

const extendedStats = [{
  label: 'Avg',
  value: 'avg'
}, {
  label: 'Min',
  value: 'min'
}, {
  label: 'Max',
  value: 'max'
}, {
  label: 'Sum',
  value: 'sum'
}, {
  label: 'Count',
  value: 'count'
}, {
  label: 'Std Dev',
  value: 'std_deviation'
}, {
  label: 'Std Dev Upper',
  value: 'std_deviation_bounds_upper'
}, {
  label: 'Std Dev Lower',
  value: 'std_deviation_bounds_lower'
}];
const movingAvgModelOptions = [{
  label: 'Simple',
  value: 'simple'
}, {
  label: 'Linear',
  value: 'linear'
}, {
  label: 'Exponentially Weighted',
  value: 'ewma'
}, {
  label: 'Holt Linear',
  value: 'holt'
}, {
  label: 'Holt Winters',
  value: 'holt_winters'
}];
const highlightTags = {
  pre: '@HIGHLIGHT@',
  post: '@/HIGHLIGHT@'
};
function defaultMetricAgg() {
  let id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';
  return {
    type: 'count',
    id
  };
}
function defaultBucketAgg() {
  let id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1';
  return {
    type: 'date_histogram',
    id,
    settings: {
      interval: 'auto'
    }
  };
}
const findMetricById = (metrics, id) => metrics.find(metric => metric.id === id);
function hasMetricOfType(target, type) {
  var _target$metrics;

  return !!(target !== null && target !== void 0 && (_target$metrics = target.metrics) !== null && _target$metrics !== void 0 && _target$metrics.some(m => m.type === type));
} // Even if we have type guards when building a query, we currently have no way of getting this information from the response.
// We should try to find a better (type safe) way of doing the following 2.

function isPipelineAgg(metricType) {
  return metricType in pipelineOptions;
}
function isPipelineAggWithMultipleBucketPaths(metricType) {
  return !!metricAggregationConfig[metricType].supportsMultipleBucketPaths;
}
// EXTERNAL MODULE: ./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/index.js
var semver = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/index.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/utils.ts



const describeMetric = metric => {
  if (!isMetricAggregationWithField(metric)) {
    return metricAggregationConfig[metric.type].label;
  } // TODO: field might be undefined


  return `${metricAggregationConfig[metric.type].label} ${metric.field}`;
};
/**
 * Utility function to clean up aggregations settings objects.
 * It removes nullish values and empty strings, array and objects
 * recursing over nested objects (not arrays).
 * @param obj
 */

const removeEmpty = obj => Object.entries(obj).reduce((acc, _ref) => {
  let [key, value] = _ref;

  // Removing nullish values (null & undefined)
  if (value == null) {
    return Object.assign({}, acc);
  } // Removing empty arrays (This won't recurse the array)


  if (Array.isArray(value) && value.length === 0) {
    return Object.assign({}, acc);
  } // Removing empty strings


  if ((value === null || value === void 0 ? void 0 : value.length) === 0) {
    return Object.assign({}, acc);
  } // Recursing over nested objects


  if (!Array.isArray(value) && typeof value === 'object') {
    const cleanObj = removeEmpty(value);

    if (Object.keys(cleanObj).length === 0) {
      return Object.assign({}, acc);
    }

    return Object.assign({}, acc, {
      [key]: cleanObj
    });
  }

  return Object.assign({}, acc, {
    [key]: value
  });
}, {});
/**
 *  This function converts an order by string to the correct metric id For example,
 *  if the user uses the standard deviation extended stat for the order by,
 *  the value would be "1[std_deviation]" and this would return "1"
 */

const convertOrderByToMetricId = orderBy => {
  const metricIdMatches = orderBy.match(/^(\d+)/);
  return metricIdMatches ? metricIdMatches[1] : void 0;
};
/** Gets the actual script value for metrics that support inline scripts.
 *
 *  This is needed because the `script` is a bit polymorphic.
 *  when creating a query with Grafana < 7.4 it was stored as:
 * ```json
 * {
 *    "settings": {
 *      "script": {
 *        "inline": "value"
 *      }
 *    }
 * }
 * ```
 *
 * while from 7.4 it's stored as
 * ```json
 * {
 *    "settings": {
 *      "script": "value"
 *    }
 * }
 * ```
 *
 * This allows us to access both formats and support both queries created before 7.4 and after.
 */

const getScriptValue = metric => {
  var _metric$settings, _metric$settings2, _metric$settings2$scr, _metric$settings3;

  return (typeof ((_metric$settings = metric.settings) === null || _metric$settings === void 0 ? void 0 : _metric$settings.script) === 'object' ? (_metric$settings2 = metric.settings) === null || _metric$settings2 === void 0 ? void 0 : (_metric$settings2$scr = _metric$settings2.script) === null || _metric$settings2$scr === void 0 ? void 0 : _metric$settings2$scr.inline : (_metric$settings3 = metric.settings) === null || _metric$settings3 === void 0 ? void 0 : _metric$settings3.script) || '';
};
/**
 * Coerces the a version string/number to a valid semver string.
 * It takes care of also converting from the legacy format (numeric) to the new one.
 * @param version
 */

const coerceESVersion = version => {
  if (typeof version === 'string') {
    return (0,semver.valid)(version) || '5.0.0';
  }

  switch (version) {
    case 2:
      return '2.0.0';

    case 56:
      return '5.6.0';

    case 60:
      return '6.0.0';

    case 70:
      return '7.0.0';

    case 5:
    default:
      return '5.0.0';
  }
};
const isSupportedVersion = version => {
  if ((0,semver.gte)(version, '7.10.0')) {
    return true;
  }

  return false;
};
// EXTERNAL MODULE: ./.yarn/__virtual__/@reduxjs-toolkit-virtual-341575ab98/0/cache/@reduxjs-toolkit-npm-1.8.0-436263eab0-e229571b80.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 2 modules
var redux_toolkit_esm = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-341575ab98/0/cache/@reduxjs-toolkit-npm-1.8.0-436263eab0-e229571b80.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/state/actions.ts

const addMetric = (0,redux_toolkit_esm/* createAction */.PH)('@metrics/add');
const removeMetric = (0,redux_toolkit_esm/* createAction */.PH)('@metrics/remove');
const toggleMetricVisibility = (0,redux_toolkit_esm/* createAction */.PH)('@metrics/toggle_visibility');
const changeMetricField = (0,redux_toolkit_esm/* createAction */.PH)('@metrics/change_field');
const changeMetricType = (0,redux_toolkit_esm/* createAction */.PH)('@metrics/change_type');
const changeMetricAttribute = (0,redux_toolkit_esm/* createAction */.PH)('@metrics/change_attr');
const changeMetricSetting = (0,redux_toolkit_esm/* createAction */.PH)('@metrics/change_setting');
const changeMetricMeta = (0,redux_toolkit_esm/* createAction */.PH)('@metrics/change_meta');
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/state.ts


/**
 * When the `initQuery` Action is dispatched, the query gets populated with default values where values are not present.
 * This means it won't override any existing value in place, but just ensure the query is in a "runnable" state.
 */
const initQuery = (0,redux_toolkit_esm/* createAction */.PH)('init');
const changeQuery = (0,redux_toolkit_esm/* createAction */.PH)('change_query');
const changeAliasPattern = (0,redux_toolkit_esm/* createAction */.PH)('change_alias_pattern');
const queryReducer = (prevQuery, action) => {
  if (changeQuery.match(action)) {
    return action.payload;
  }

  if (initQuery.match(action)) {
    return prevQuery || '';
  }

  return prevQuery;
};
const aliasPatternReducer = (prevAliasPattern, action) => {
  if (changeAliasPattern.match(action)) {
    return action.payload;
  }

  if (initQuery.match(action)) {
    return prevAliasPattern || '';
  }

  return prevAliasPattern;
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/FiltersSettingsEditor/utils.ts
const defaultFilter = () => ({
  label: '',
  query: '*'
});
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/utils.ts


const bucketAggregationConfig = {
  terms: {
    label: 'Terms',
    requiresField: true,
    defaultSettings: {
      min_doc_count: '1',
      size: '10',
      order: 'desc',
      orderBy: '_term'
    }
  },
  filters: {
    label: 'Filters',
    requiresField: false,
    defaultSettings: {
      filters: [defaultFilter()]
    }
  },
  geohash_grid: {
    label: 'Geo Hash Grid',
    requiresField: true,
    defaultSettings: {
      precision: '3'
    }
  },
  date_histogram: {
    label: 'Date Histogram',
    requiresField: true,
    defaultSettings: {
      interval: 'auto',
      min_doc_count: '0',
      trimEdges: '0',
      timeZone: src.InternalTimeZones.utc
    }
  },
  histogram: {
    label: 'Histogram',
    requiresField: true,
    defaultSettings: {
      interval: '1000',
      min_doc_count: '0'
    }
  }
};
const orderByOptions = [{
  label: 'Term value',
  value: '_term'
}, {
  label: 'Doc Count',
  value: '_count'
}];
const orderOptions = [{
  label: 'Top',
  value: 'desc'
}, {
  label: 'Bottom',
  value: 'asc'
}];
const sizeOptions = [{
  label: 'No limit',
  value: '0'
}, {
  label: '1',
  value: '1'
}, {
  label: '2',
  value: '2'
}, {
  label: '3',
  value: '3'
}, {
  label: '5',
  value: '5'
}, {
  label: '10',
  value: '10'
}, {
  label: '15',
  value: '15'
}, {
  label: '20',
  value: '20'
}];
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/state/actions.ts

const addBucketAggregation = (0,redux_toolkit_esm/* createAction */.PH)('@bucketAggs/add');
const removeBucketAggregation = (0,redux_toolkit_esm/* createAction */.PH)('@bucketAggs/remove');
const changeBucketAggregationType = (0,redux_toolkit_esm/* createAction */.PH)('@bucketAggs/change_type');
const changeBucketAggregationField = (0,redux_toolkit_esm/* createAction */.PH)('@bucketAggs/change_field');
const changeBucketAggregationSetting = (0,redux_toolkit_esm/* createAction */.PH)('@bucketAggs/change_setting');
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/state/reducer.ts







const createReducer = defaultTimeField => (state, action) => {
  if (addBucketAggregation.match(action)) {
    const newAgg = {
      id: action.payload,
      type: 'terms',
      settings: bucketAggregationConfig.terms.defaultSettings
    }; // If the last bucket aggregation is a `date_histogram` we add the new one before it.

    const lastAgg = state[state.length - 1];

    if ((lastAgg === null || lastAgg === void 0 ? void 0 : lastAgg.type) === 'date_histogram') {
      return [...state.slice(0, state.length - 1), newAgg, lastAgg];
    }

    return [...state, newAgg];
  }

  if (removeBucketAggregation.match(action)) {
    return state.filter(bucketAgg => bucketAgg.id !== action.payload);
  }

  if (changeBucketAggregationType.match(action)) {
    return state.map(bucketAgg => {
      if (bucketAgg.id !== action.payload.id) {
        return bucketAgg;
      }
      /*
      TODO: The previous version of the query editor was keeping some of the old bucket aggregation's configurations
      in the new selected one (such as field or some settings).
      It the future would be nice to have the same behavior but it's hard without a proper definition,
      as Elasticsearch will error sometimes if some settings are not compatible.
      */


      return {
        id: bucketAgg.id,
        type: action.payload.newType,
        settings: bucketAggregationConfig[action.payload.newType].defaultSettings
      };
    });
  }

  if (changeBucketAggregationField.match(action)) {
    return state.map(bucketAgg => {
      if (bucketAgg.id !== action.payload.id) {
        return bucketAgg;
      }

      return Object.assign({}, bucketAgg, {
        field: action.payload.newField
      });
    });
  }

  if (changeMetricType.match(action)) {
    // If we are switching to a metric which requires the absence of bucket aggregations
    // we remove all of them.
    if (metricAggregationConfig[action.payload.type].isSingleMetric) {
      return [];
    } else if (state.length === 0) {
      // Else, if there are no bucket aggregations we restore a default one.
      // This happens when switching from a metric that requires the absence of bucket aggregations to
      // one that requires it.
      return [Object.assign({}, defaultBucketAgg('2'), {
        field: defaultTimeField
      })];
    }

    return state;
  }

  if (changeBucketAggregationSetting.match(action)) {
    return state.map(bucketAgg => {
      if (bucketAgg.id !== action.payload.bucketAgg.id) {
        return bucketAgg;
      }

      const newSettings = removeEmpty(Object.assign({}, bucketAgg.settings, {
        [action.payload.settingName]: action.payload.newValue
      }));
      return Object.assign({}, bucketAgg, {
        settings: Object.assign({}, newSettings)
      });
    });
  }

  if (initQuery.match(action)) {
    if (state !== null && state !== void 0 && state.length || 0 > 0) {
      return state;
    }

    return [Object.assign({}, defaultBucketAgg('2'), {
      field: defaultTimeField
    })];
  }

  return state;
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/state/reducer.ts






const reducer_reducer = (state, action) => {
  if (addMetric.match(action)) {
    return [...state, defaultMetricAgg(action.payload)];
  }

  if (removeMetric.match(action)) {
    const metricToRemove = state.find(m => m.id === action.payload);
    const metricsToRemove = [metricToRemove, ...getChildren(metricToRemove, state)];
    const resultingMetrics = state.filter(metric => !metricsToRemove.some(toRemove => toRemove.id === metric.id));

    if (resultingMetrics.length === 0) {
      return [defaultMetricAgg('1')];
    }

    return resultingMetrics;
  }

  if (changeMetricType.match(action)) {
    return state.filter(metric => // When the new metric type is `isSingleMetric` we remove all other metrics from the query
    // leaving only the current one.
    !!metricAggregationConfig[action.payload.type].isSingleMetric ? metric.id === action.payload.id : true).map(metric => {
      if (metric.id !== action.payload.id) {
        return metric;
      }
      /*
      TODO: The previous version of the query editor was keeping some of the old metric's configurations
      in the new selected one (such as field or some settings).
      It the future would be nice to have the same behavior but it's hard without a proper definition,
      as Elasticsearch will error sometimes if some settings are not compatible.
      */


      return Object.assign({
        id: metric.id,
        type: action.payload.type
      }, metricAggregationConfig[action.payload.type].defaults);
    });
  }

  if (changeMetricField.match(action)) {
    return state.map(metric => {
      if (metric.id !== action.payload.id) {
        return metric;
      }

      const newMetric = Object.assign({}, metric, {
        field: action.payload.field
      });

      if (isPipelineAggregation(metric)) {
        return Object.assign({}, newMetric, {
          pipelineAgg: action.payload.field
        });
      }

      return newMetric;
    });
  }

  if (toggleMetricVisibility.match(action)) {
    return state.map(metric => {
      if (metric.id !== action.payload) {
        return metric;
      }

      return Object.assign({}, metric, {
        hide: !metric.hide
      });
    });
  }

  if (changeMetricSetting.match(action)) {
    return state.map(metric => {
      if (metric.id !== action.payload.metric.id) {
        return metric;
      } // TODO: Here, instead of this if statement, we should assert that metric is MetricAggregationWithSettings


      if (isMetricAggregationWithSettings(metric)) {
        const newSettings = removeEmpty(Object.assign({}, metric.settings, {
          [action.payload.settingName]: action.payload.newValue
        }));
        return Object.assign({}, metric, {
          settings: Object.assign({}, newSettings)
        });
      } // This should never happen.


      return metric;
    });
  }

  if (changeMetricMeta.match(action)) {
    return state.map(metric => {
      if (metric.id !== action.payload.metric.id) {
        return metric;
      } // TODO: Here, instead of this if statement, we should assert that metric is MetricAggregationWithMeta


      if (isMetricAggregationWithMeta(metric)) {
        return Object.assign({}, metric, {
          meta: Object.assign({}, metric.meta, {
            [action.payload.meta]: action.payload.newValue
          })
        });
      } // This should never happen.


      return metric;
    });
  }

  if (changeMetricAttribute.match(action)) {
    return state.map(metric => {
      if (metric.id !== action.payload.metric.id) {
        return metric;
      }

      return Object.assign({}, metric, {
        [action.payload.attribute]: action.payload.newValue
      });
    });
  }

  if (initQuery.match(action)) {
    if (state !== null && state !== void 0 && state.length || 0 > 0) {
      return state;
    }

    return [defaultMetricAgg('1')];
  }

  return state;
};
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/ElasticsearchQueryContext.tsx






const DatasourceContext = /*#__PURE__*/(0,react.createContext)(undefined);
const QueryContext = /*#__PURE__*/(0,react.createContext)(undefined);
const RangeContext = /*#__PURE__*/(0,react.createContext)(undefined);
const ElasticsearchProvider = _ref => {
  let {
    children,
    onChange,
    onRunQuery,
    query,
    datasource,
    range
  } = _ref;
  const onStateChange = (0,react.useCallback)(query => {
    onChange(query);
    onRunQuery();
  }, [onChange, onRunQuery]);
  const reducer = combineReducers({
    query: queryReducer,
    alias: aliasPatternReducer,
    metrics: reducer_reducer,
    bucketAggs: createReducer(datasource.timeField)
  });
  const dispatch = useStatelessReducer( // timeField is part of the query model, but its value is always set to be the one from datasource settings.
  newState => onStateChange(Object.assign({}, query, newState, {
    timeField: datasource.timeField
  })), query, reducer); // This initializes the query by dispatching an init action to each reducer.
  // useStatelessReducer will then call `onChange` with the newly generated query

  if (!query.metrics || !query.bucketAggs || query.query === undefined) {
    dispatch(initQuery());
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(DatasourceContext.Provider, {
    value: datasource,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(QueryContext.Provider, {
      value: query,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(RangeContext.Provider, {
        value: range,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(DispatchContext.Provider, {
          value: dispatch,
          children: children
        })
      })
    })
  });
};

const getHook = c => () => {
  const contextValue = (0,react.useContext)(c);

  if (!contextValue) {
    throw new Error('use ElasticsearchProvider first.');
  }

  return contextValue;
};

const useQuery = getHook(QueryContext);
const useDatasource = getHook(DatasourceContext);
const useRange = getHook(RangeContext);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/hooks/useNextId.ts



const toId = e => e.id;

const toInt = idString => parseInt(idString, 10);

const useNextId = () => {
  const {
    metrics,
    bucketAggs
  } = useQuery();
  return (0,react.useMemo)(() => (Math.max(...[...((metrics === null || metrics === void 0 ? void 0 : metrics.map(toId)) || ['0']), ...((bucketAggs === null || bucketAggs === void 0 ? void 0 : bucketAggs.map(toId)) || ['0'])].map(toInt)) + 1).toString(), [metrics, bucketAggs]);
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/IconButton.tsx
const _excluded = ["iconName", "onClick", "className", "label"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const SROnly = emotion_css_esm.css`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const IconButton = _ref => {
  let {
    iconName,
    onClick,
    className,
    label
  } = _ref,
      buttonProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("button", Object.assign({
    className: (0,emotion_css_esm.cx)('gf-form-label gf-form-label--btn query-part', className),
    onClick: onClick
  }, buttonProps, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: SROnly,
      children: label
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
      name: iconName,
      "aria-hidden": "true"
    })]
  }));
};
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/QueryEditorRow.tsx






const QueryEditorRow = _ref => {
  let {
    children,
    label,
    onRemoveClick,
    onHideClick,
    hidden = false
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSegmentGroup, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineLabel, {
        width: 17,
        as: "div",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: label
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: styles.iconWrapper,
          children: [onHideClick && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
            name: hidden ? 'eye-slash' : 'eye',
            onClick: onHideClick,
            surface: "header",
            size: "sm",
            "aria-pressed": hidden,
            "aria-label": "hide metric",
            className: styles.icon
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
            name: "trash-alt",
            surface: "header",
            size: "sm",
            className: styles.icon,
            onClick: onRemoveClick || lodash.noop,
            disabled: !onRemoveClick,
            "aria-label": "remove metric"
          })]
        })]
      })
    }), children]
  });
};

const getStyles = theme => {
  return {
    iconWrapper: emotion_css_esm.css`
      display: flex;
    `,
    icon: emotion_css_esm.css`
      color: ${theme.colors.text.secondary};
      margin-left: ${theme.spacing(0.25)};
    `
  };
};
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js
var lastValueFrom = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/aggregations.ts

const isBucketAggregationWithField = bucketAgg => bucketAggregationConfig[bucketAgg.type].requiresField;
const BUCKET_AGGREGATION_TYPES = ['date_histogram', 'histogram', 'terms', 'filters', 'geohash_grid'];
const isBucketAggregationType = s => BUCKET_AGGREGATION_TYPES.includes(s);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/hooks/useFields.ts





const getFilter = type => {
  if (isMetricAggregationType(type)) {
    switch (type) {
      case 'cardinality':
        return [];

      case 'top_metrics':
        // top_metrics was introduced in 7.7 where `metrics` only supported number:
        // https://www.elastic.co/guide/en/elasticsearch/reference/7.7/search-aggregations-metrics-top-metrics.html#_metrics
        // TODO: starting from 7.11 it supports ips and keywords as well:
        // https://www.elastic.co/guide/en/elasticsearch/reference/7.11/search-aggregations-metrics-top-metrics.html#_metrics
        return ['number'];

      default:
        return ['number'];
    }
  }

  if (isBucketAggregationType(type)) {
    switch (type) {
      case 'date_histogram':
        return ['date'];

      case 'geohash_grid':
        return ['geo_point'];

      case 'histogram':
        return ['number'];

      default:
        return [];
    }
  }

  return [];
};

const toSelectableValue = _ref => {
  let {
    text
  } = _ref;
  return {
    label: text,
    value: text
  };
};
/**
 * Returns a function to query the configured datasource for autocomplete values for the specified aggregation type or data types.
 * Each aggregation can be run on different types, for example avg only operates on numeric fields, geohash_grid only on geo_point fields.
 * If an aggregation type is provided, the promise will resolve with all fields suitable to be used as a field for the given aggregation.
 * If an array of types is providem the promise will resolve with all the fields matching the provided types.
 * @param aggregationType the type of aggregation to get fields for
 */


const useFields = type => {
  const datasource = useDatasource();
  const range = useRange();
  const filter = Array.isArray(type) ? type : getFilter(type);
  let rawFields;
  return async q => {
    // _mapping doesn't support filtering, we avoid sending a request everytime q changes
    if (!rawFields) {
      rawFields = await (0,lastValueFrom/* lastValueFrom */.n)(datasource.getFields(filter, range));
    }

    return rawFields.filter(_ref2 => {
      let {
        text
      } = _ref2;
      return q === undefined || text.includes(q);
    }).map(toSelectableValue);
  };
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/styles.ts

const segmentStyles = emotion_css_esm.css`
  min-width: 150px;
`;
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/SettingsEditorContainer.tsx







const SettingsEditorContainer_getStyles = (theme, hidden) => {
  return {
    wrapper: emotion_css_esm.css`
      max-width: 500px;
      display: flex;
      flex-direction: column;
    `,
    settingsWrapper: emotion_css_esm.css`
      padding-top: ${theme.spacing(0.5)};
    `,
    icon: emotion_css_esm.css`
      margin-right: ${theme.spacing(0.5)};
    `,
    button: emotion_css_esm.css`
      justify-content: start;
      ${hidden && emotion_css_esm.css`
        color: ${theme.colors.text.disabled};
      `}
    `
  };
};

const SettingsEditorContainer = _ref => {
  let {
    label,
    children,
    hidden = false
  } = _ref;
  const [open, setOpen] = (0,react.useState)(false);
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = SettingsEditorContainer_getStyles(theme, hidden);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSegmentGroup, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (0,emotion_css_esm.cx)(styles.wrapper),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
        className: (0,emotion_css_esm.cx)('gf-form-label query-part', styles.button, segmentStyles),
        onClick: () => setOpen(!open),
        "aria-expanded": open,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: open ? 'angle-down' : 'angle-right',
          "aria-hidden": "true",
          className: styles.icon
        }), label]
      }), open && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.settingsWrapper,
        children: children
      })]
    })
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/hooks/useCreatableSelectPersistedBehaviour.ts


const hasValue = searchValue => _ref => {
  let {
    value
  } = _ref;
  return value === searchValue;
};

const getInitialState = (initialOptions, initialValue) => {
  if (initialValue === undefined || initialOptions.some(hasValue(initialValue))) {
    return initialOptions;
  }

  return [...initialOptions, {
    value: initialValue,
    label: initialValue
  }];
};

/**
 * Creates the Props needed by Select to handle custom values and handles custom value creation
 * and the initial value when it is not present in the option array.
 */
const useCreatableSelectPersistedBehaviour = _ref2 => {
  let {
    options: initialOptions,
    value,
    onChange
  } = _ref2;
  const [options, setOptions] = (0,react.useState)(getInitialState(initialOptions, value));

  const addOption = newValue => setOptions([...options, {
    value: newValue,
    label: newValue
  }]);

  return {
    onCreateOption: value => {
      addOption(value);
      onChange({
        value
      });
    },
    onChange,
    allowCustomValue: true,
    options,
    value
  };
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/DateHistogramSettingsEditor.tsx












const defaultIntervalOptions = [{
  label: 'auto',
  value: 'auto'
}, {
  label: '10s',
  value: '10s'
}, {
  label: '1m',
  value: '1m'
}, {
  label: '5m',
  value: '5m'
}, {
  label: '10m',
  value: '10m'
}, {
  label: '20m',
  value: '20m'
}, {
  label: '1h',
  value: '1h'
}, {
  label: '1d',
  value: '1d'
}];

const DateHistogramSettingsEditor_hasValue = searchValue => _ref => {
  let {
    value
  } = _ref;
  return value === searchValue;
};

const isValidNewOption = (inputValue, _, options) => {
  // TODO: would be extremely nice here to allow only template variables and values that are
  // valid date histogram's Interval options
  const valueExists = options.some(DateHistogramSettingsEditor_hasValue(inputValue)); // we also don't want users to create "empty" values

  return !valueExists && inputValue.trim().length > 0;
};

const optionStartsWithValue = (option, value) => {
  var _option$value;

  return ((_option$value = option.value) === null || _option$value === void 0 ? void 0 : _option$value.startsWith(value)) || false;
};

const DateHistogramSettingsEditor = _ref2 => {
  var _bucketAgg$settings, _bucketAggregationCon, _bucketAgg$settings2, _bucketAggregationCon2, _bucketAgg$settings3, _bucketAggregationCon3, _bucketAgg$settings4, _bucketAggregationCon4, _bucketAgg$settings5, _bucketAggregationCon5;

  let {
    bucketAgg
  } = _ref2;
  const dispatch = useDispatch();
  const {
    current: baseId
  } = (0,react.useRef)((0,lodash.uniqueId)('es-date_histogram-'));

  const handleIntervalChange = _ref3 => {
    let {
      value
    } = _ref3;
    return dispatch(changeBucketAggregationSetting({
      bucketAgg,
      settingName: 'interval',
      newValue: value
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
      label: "Interval"
    }, inlineFieldProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, Object.assign({
        inputId: (0,lodash.uniqueId)('es-date_histogram-interval'),
        isValidNewOption: isValidNewOption,
        filterOption: optionStartsWithValue
      }, useCreatableSelectPersistedBehaviour({
        options: defaultIntervalOptions,
        value: ((_bucketAgg$settings = bucketAgg.settings) === null || _bucketAgg$settings === void 0 ? void 0 : _bucketAgg$settings.interval) || ((_bucketAggregationCon = bucketAggregationConfig.date_histogram.defaultSettings) === null || _bucketAggregationCon === void 0 ? void 0 : _bucketAggregationCon.interval),
        onChange: handleIntervalChange
      })))
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
      label: "Min Doc Count"
    }, inlineFieldProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: `${baseId}-min_doc_count`,
        onBlur: e => dispatch(changeBucketAggregationSetting({
          bucketAgg,
          settingName: 'min_doc_count',
          newValue: e.target.value
        })),
        defaultValue: ((_bucketAgg$settings2 = bucketAgg.settings) === null || _bucketAgg$settings2 === void 0 ? void 0 : _bucketAgg$settings2.min_doc_count) || ((_bucketAggregationCon2 = bucketAggregationConfig.date_histogram.defaultSettings) === null || _bucketAggregationCon2 === void 0 ? void 0 : _bucketAggregationCon2.min_doc_count)
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
      label: "Trim Edges"
    }, inlineFieldProps, {
      tooltip: "Trim the edges on the timeseries datapoints",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: `${baseId}-trime_edges`,
        onBlur: e => dispatch(changeBucketAggregationSetting({
          bucketAgg,
          settingName: 'trimEdges',
          newValue: e.target.value
        })),
        defaultValue: ((_bucketAgg$settings3 = bucketAgg.settings) === null || _bucketAgg$settings3 === void 0 ? void 0 : _bucketAgg$settings3.trimEdges) || ((_bucketAggregationCon3 = bucketAggregationConfig.date_histogram.defaultSettings) === null || _bucketAggregationCon3 === void 0 ? void 0 : _bucketAggregationCon3.trimEdges)
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
      label: "Offset"
    }, inlineFieldProps, {
      tooltip: "Change the start value of each bucket by the specified positive (+) or negative offset (-) duration, such as 1h for an hour, or 1d for a day",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: `${baseId}-offset`,
        onBlur: e => dispatch(changeBucketAggregationSetting({
          bucketAgg,
          settingName: 'offset',
          newValue: e.target.value
        })),
        defaultValue: ((_bucketAgg$settings4 = bucketAgg.settings) === null || _bucketAgg$settings4 === void 0 ? void 0 : _bucketAgg$settings4.offset) || ((_bucketAggregationCon4 = bucketAggregationConfig.date_histogram.defaultSettings) === null || _bucketAggregationCon4 === void 0 ? void 0 : _bucketAggregationCon4.offset)
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
      label: "Timezone"
    }, inlineFieldProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.TimeZonePicker, {
        value: ((_bucketAgg$settings5 = bucketAgg.settings) === null || _bucketAgg$settings5 === void 0 ? void 0 : _bucketAgg$settings5.timeZone) || ((_bucketAggregationCon5 = bucketAggregationConfig.date_histogram.defaultSettings) === null || _bucketAggregationCon5 === void 0 ? void 0 : _bucketAggregationCon5.timeZone),
        includeInternal: [src.InternalTimeZones.utc],
        onChange: timeZone => {
          dispatch(changeBucketAggregationSetting({
            bucketAgg,
            settingName: 'timeZone',
            newValue: timeZone
          }));
        }
      })
    }))]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/AddRemove.tsx






/**
 * A component used to show add & remove buttons for mutable lists of values. Wether to show or not the add or the remove buttons
 * depends on the `index` and `elements` props. This enforces a consistent experience whenever this pattern is used.
 */
const AddRemove = _ref => {
  let {
    index,
    onAdd,
    onRemove,
    elements
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: emotion_css_esm.css`
        display: flex;
      `,
    children: [index === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(IconButton, {
      iconName: "plus",
      onClick: onAdd,
      label: "add"
    }), elements.length >= 2 && /*#__PURE__*/(0,jsx_runtime.jsx)(IconButton, {
      iconName: "minus",
      onClick: onRemove,
      label: "remove"
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/FiltersSettingsEditor/state/actions.ts

const addFilter = (0,redux_toolkit_esm/* createAction */.PH)('@bucketAggregations/filter/add');
const removeFilter = (0,redux_toolkit_esm/* createAction */.PH)('@bucketAggregations/filter/remove');
const changeFilter = (0,redux_toolkit_esm/* createAction */.PH)('@bucketAggregations/filter/change');
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/FiltersSettingsEditor/state/reducer.ts


const reducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let action = arguments.length > 1 ? arguments[1] : undefined;

  if (addFilter.match(action)) {
    return [...state, defaultFilter()];
  }

  if (removeFilter.match(action)) {
    return state.slice(0, action.payload).concat(state.slice(action.payload + 1));
  }

  if (changeFilter.match(action)) {
    return state.map((filter, index) => {
      if (index !== action.payload.index) {
        return filter;
      }

      return action.payload.filter;
    });
  }

  return state;
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/FiltersSettingsEditor/index.tsx












const FiltersSettingsEditor = _ref => {
  var _bucketAgg$settings, _bucketAgg$settings3, _bucketAgg$settings3$, _bucketAgg$settings4;

  let {
    bucketAgg
  } = _ref;
  const {
    current: baseId
  } = (0,react.useRef)((0,lodash.uniqueId)('es-filters-'));
  const upperStateDispatch = useDispatch();
  const dispatch = useStatelessReducer(newValue => upperStateDispatch(changeBucketAggregationSetting({
    bucketAgg,
    settingName: 'filters',
    newValue
  })), (_bucketAgg$settings = bucketAgg.settings) === null || _bucketAgg$settings === void 0 ? void 0 : _bucketAgg$settings.filters, reducer); // The model might not have filters (or an empty array of filters) in it because of the way it was built in previous versions of the datasource.
  // If this is the case we add a default one.

  (0,react.useEffect)(() => {
    var _bucketAgg$settings2, _bucketAgg$settings2$;

    if (!((_bucketAgg$settings2 = bucketAgg.settings) !== null && _bucketAgg$settings2 !== void 0 && (_bucketAgg$settings2$ = _bucketAgg$settings2.filters) !== null && _bucketAgg$settings2$ !== void 0 && _bucketAgg$settings2$.length)) {
      dispatch(addFilter());
    }
  }, [dispatch, (_bucketAgg$settings3 = bucketAgg.settings) === null || _bucketAgg$settings3 === void 0 ? void 0 : (_bucketAgg$settings3$ = _bucketAgg$settings3.filters) === null || _bucketAgg$settings3$ === void 0 ? void 0 : _bucketAgg$settings3$.length]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: emotion_css_esm.css`
          display: flex;
          flex-direction: column;
        `,
      children: (_bucketAgg$settings4 = bucketAgg.settings) === null || _bucketAgg$settings4 === void 0 ? void 0 : _bucketAgg$settings4.filters.map((filter, index) => {
        var _bucketAgg$settings5;

        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: emotion_css_esm.css`
              display: flex;
            `,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
            label: "Query",
            labelWidth: 8,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: emotion_css_esm.css`
                  width: 150px;
                `,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.QueryField, {
                placeholder: "Lucene Query",
                portalOrigin: "elasticsearch",
                onBlur: () => {},
                onChange: query => dispatch(changeFilter({
                  index,
                  filter: Object.assign({}, filter, {
                    query
                  })
                })),
                query: filter.query
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
            label: "Label",
            labelWidth: 8,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
              width: 16,
              id: `${baseId}-label-${index}`,
              placeholder: "Label",
              onBlur: e => dispatch(changeFilter({
                index,
                filter: Object.assign({}, filter, {
                  label: e.target.value
                })
              })),
              defaultValue: filter.label
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(AddRemove, {
            index: index,
            elements: ((_bucketAgg$settings5 = bucketAgg.settings) === null || _bucketAgg$settings5 === void 0 ? void 0 : _bucketAgg$settings5.filters) || [],
            onAdd: () => dispatch(addFilter()),
            onRemove: () => dispatch(removeFilter(index))
          })]
        }, index);
      })
    })
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/TermsSettingsEditor.tsx














const TermsSettingsEditor = _ref => {
  var _bucketAgg$settings, _bucketAggregationCon, _bucketAgg$settings2, _bucketAggregationCon2, _bucketAgg$settings3, _bucketAggregationCon3, _bucketAgg$settings4, _bucketAggregationCon4, _bucketAgg$settings5, _bucketAggregationCon5;

  let {
    bucketAgg
  } = _ref;
  const {
    metrics
  } = useQuery();
  const orderBy = createOrderByOptions(metrics);
  const {
    current: baseId
  } = (0,react.useRef)((0,lodash.uniqueId)('es-terms-'));
  const dispatch = useDispatch();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
      label: "Order"
    }, inlineFieldProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        inputId: `${baseId}-order`,
        onChange: e => dispatch(changeBucketAggregationSetting({
          bucketAgg,
          settingName: 'order',
          newValue: e.value
        })),
        options: orderOptions,
        value: ((_bucketAgg$settings = bucketAgg.settings) === null || _bucketAgg$settings === void 0 ? void 0 : _bucketAgg$settings.order) || ((_bucketAggregationCon = bucketAggregationConfig.terms.defaultSettings) === null || _bucketAggregationCon === void 0 ? void 0 : _bucketAggregationCon.order)
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
      label: "Size"
    }, inlineFieldProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, Object.assign({
        inputId: `${baseId}-size` // TODO: isValidNewOption should only allow numbers & template variables

      }, useCreatableSelectPersistedBehaviour({
        options: sizeOptions,
        value: ((_bucketAgg$settings2 = bucketAgg.settings) === null || _bucketAgg$settings2 === void 0 ? void 0 : _bucketAgg$settings2.size) || ((_bucketAggregationCon2 = bucketAggregationConfig.terms.defaultSettings) === null || _bucketAggregationCon2 === void 0 ? void 0 : _bucketAggregationCon2.size),

        onChange(_ref2) {
          let {
            value
          } = _ref2;
          dispatch(changeBucketAggregationSetting({
            bucketAgg,
            settingName: 'size',
            newValue: value
          }));
        }

      })))
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
      label: "Min Doc Count"
    }, inlineFieldProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: `${baseId}-min_doc_count`,
        onBlur: e => dispatch(changeBucketAggregationSetting({
          bucketAgg,
          settingName: 'min_doc_count',
          newValue: e.target.value
        })),
        defaultValue: ((_bucketAgg$settings3 = bucketAgg.settings) === null || _bucketAgg$settings3 === void 0 ? void 0 : _bucketAgg$settings3.min_doc_count) || ((_bucketAggregationCon3 = bucketAggregationConfig.terms.defaultSettings) === null || _bucketAggregationCon3 === void 0 ? void 0 : _bucketAggregationCon3.min_doc_count)
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
      label: "Order By"
    }, inlineFieldProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        inputId: `${baseId}-order_by`,
        onChange: e => dispatch(changeBucketAggregationSetting({
          bucketAgg,
          settingName: 'orderBy',
          newValue: e.value
        })),
        options: orderBy,
        value: ((_bucketAgg$settings4 = bucketAgg.settings) === null || _bucketAgg$settings4 === void 0 ? void 0 : _bucketAgg$settings4.orderBy) || ((_bucketAggregationCon4 = bucketAggregationConfig.terms.defaultSettings) === null || _bucketAggregationCon4 === void 0 ? void 0 : _bucketAggregationCon4.orderBy)
      })
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
      label: "Missing"
    }, inlineFieldProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: `${baseId}-missing`,
        onBlur: e => dispatch(changeBucketAggregationSetting({
          bucketAgg,
          settingName: 'missing',
          newValue: e.target.value
        })),
        defaultValue: ((_bucketAgg$settings5 = bucketAgg.settings) === null || _bucketAgg$settings5 === void 0 ? void 0 : _bucketAgg$settings5.missing) || ((_bucketAggregationCon5 = bucketAggregationConfig.terms.defaultSettings) === null || _bucketAggregationCon5 === void 0 ? void 0 : _bucketAggregationCon5.missing)
      })
    }))]
  });
};
/**
 * This returns the valid options for each of the enabled extended stat
 */

function createOrderByOptionsForExtendedStats(metric) {
  if (!metric.meta) {
    return [];
  }

  const metaKeys = Object.keys(metric.meta);
  return metaKeys.filter(key => {
    var _metric$meta;

    return (_metric$meta = metric.meta) === null || _metric$meta === void 0 ? void 0 : _metric$meta[key];
  }).map(key => {
    let method = key; // The bucket path for std_deviation_bounds.lower and std_deviation_bounds.upper
    // is accessed via std_lower and std_upper, respectively.

    if (key === 'std_deviation_bounds_lower') {
      method = 'std_lower';
    }

    if (key === 'std_deviation_bounds_upper') {
      method = 'std_upper';
    }

    return {
      label: `${describeMetric(metric)} (${method})`,
      value: `${metric.id}[${method}]`
    };
  });
}
/**
 * This returns the valid options for each of the percents listed in the percentile settings
 */


function createOrderByOptionsForPercentiles(metric) {
  var _metric$settings;

  if (!((_metric$settings = metric.settings) !== null && _metric$settings !== void 0 && _metric$settings.percents)) {
    return [];
  }

  return metric.settings.percents.map(percent => {
    // The bucket path for percentile numbers is appended with a `.0` if the number is whole
    // otherwise you have to use the actual value.
    const percentString = /^\d+\.\d+/.test(`${percent}`) ? percent : `${percent}.0`;
    return {
      label: `${describeMetric(metric)} (${percent})`,
      value: `${metric.id}[${percentString}]`
    };
  });
}

function isValidOrderTarget(metric) {
  return (// top metrics can't be used for ordering
    metric.type !== 'top_metrics' && // pipeline aggregations can't be used for ordering: https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-terms-aggregation.html#search-aggregations-bucket-terms-aggregation-order
    !isPipelineAggregation(metric)
  );
}
/**
 * This creates all the valid order by options based on the metrics
 */


const createOrderByOptions = function () {
  let metrics = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  const metricOptions = metrics.filter(isValidOrderTarget).flatMap(metric => {
    if (metric.type === 'extended_stats') {
      return createOrderByOptionsForExtendedStats(metric);
    } else if (metric.type === 'percentiles') {
      return createOrderByOptionsForPercentiles(metric);
    } else {
      return {
        label: describeMetric(metric),
        value: metric.id
      };
    }
  });
  return [...orderByOptions, ...metricOptions];
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/useDescription.ts




const useDescription_hasValue = value => object => object.value === value; // FIXME: We should apply the same defaults we have in bucketAggregationsConfig here instead of "custom" values
// as they might get out of sync.
// The reason we need them is that even though after the refactoring each setting is created with its default value,
// queries created with the old version might not have them.


const useDescription = bucketAgg => {
  const {
    metrics
  } = useQuery();

  switch (bucketAgg.type) {
    case 'terms':
      {
        var _bucketAgg$settings, _bucketAgg$settings2, _bucketAgg$settings3, _bucketAgg$settings4;

        const order = ((_bucketAgg$settings = bucketAgg.settings) === null || _bucketAgg$settings === void 0 ? void 0 : _bucketAgg$settings.order) || 'desc';
        const size = ((_bucketAgg$settings2 = bucketAgg.settings) === null || _bucketAgg$settings2 === void 0 ? void 0 : _bucketAgg$settings2.size) || '10';
        const minDocCount = parseInt(((_bucketAgg$settings3 = bucketAgg.settings) === null || _bucketAgg$settings3 === void 0 ? void 0 : _bucketAgg$settings3.min_doc_count) || '0', 10);
        const orderBy = ((_bucketAgg$settings4 = bucketAgg.settings) === null || _bucketAgg$settings4 === void 0 ? void 0 : _bucketAgg$settings4.orderBy) || '_term';
        let description = '';

        if (size !== '0') {
          var _orderOptions$find;

          const orderLabel = (_orderOptions$find = orderOptions.find(useDescription_hasValue(order))) === null || _orderOptions$find === void 0 ? void 0 : _orderOptions$find.label;
          description = `${orderLabel} ${size}, `;
        }

        if (minDocCount > 0) {
          description += `Min Doc Count: ${minDocCount}, `;
        }

        description += 'Order by: ';
        const orderByOption = orderByOptions.find(useDescription_hasValue(orderBy));

        if (orderByOption) {
          description += orderByOption.label;
        } else {
          const metric = metrics === null || metrics === void 0 ? void 0 : metrics.find(m => m.id === convertOrderByToMetricId(orderBy));

          if (metric) {
            description += describeMetric(metric);
          } else {
            description += 'metric not found';
          }
        }

        if (size === '0') {
          description += ` (${order})`;
        }

        return description;
      }

    case 'histogram':
      {
        var _bucketAgg$settings5, _bucketAgg$settings6;

        const interval = ((_bucketAgg$settings5 = bucketAgg.settings) === null || _bucketAgg$settings5 === void 0 ? void 0 : _bucketAgg$settings5.interval) || 1000;
        const minDocCount = ((_bucketAgg$settings6 = bucketAgg.settings) === null || _bucketAgg$settings6 === void 0 ? void 0 : _bucketAgg$settings6.min_doc_count) || 1;
        return `Interval: ${interval}${minDocCount > 0 ? `, Min Doc Count: ${minDocCount}` : ''}`;
      }

    case 'filters':
      {
        var _bucketAgg$settings7, _bucketAggregationCon;

        const filters = ((_bucketAgg$settings7 = bucketAgg.settings) === null || _bucketAgg$settings7 === void 0 ? void 0 : _bucketAgg$settings7.filters) || ((_bucketAggregationCon = bucketAggregationConfig.filters.defaultSettings) === null || _bucketAggregationCon === void 0 ? void 0 : _bucketAggregationCon.filters);
        return `Filter Queries (${filters.length})`;
      }

    case 'geohash_grid':
      {
        var _bucketAgg$settings8;

        const precision = Math.max(Math.min(parseInt(((_bucketAgg$settings8 = bucketAgg.settings) === null || _bucketAgg$settings8 === void 0 ? void 0 : _bucketAgg$settings8.precision) || '5', 10), 12), 1);
        return `Precision: ${precision}`;
      }

    case 'date_histogram':
      {
        var _bucketAgg$settings9, _bucketAgg$settings10, _bucketAgg$settings11;

        const interval = ((_bucketAgg$settings9 = bucketAgg.settings) === null || _bucketAgg$settings9 === void 0 ? void 0 : _bucketAgg$settings9.interval) || 'auto';
        const minDocCount = ((_bucketAgg$settings10 = bucketAgg.settings) === null || _bucketAgg$settings10 === void 0 ? void 0 : _bucketAgg$settings10.min_doc_count) || 0;
        const trimEdges = ((_bucketAgg$settings11 = bucketAgg.settings) === null || _bucketAgg$settings11 === void 0 ? void 0 : _bucketAgg$settings11.trimEdges) || 0;
        let description = `Interval: ${interval}`;

        if (minDocCount > 0) {
          description += `, Min Doc Count: ${minDocCount}`;
        }

        if (trimEdges > 0) {
          description += `, Trim edges: ${trimEdges}`;
        }

        return description;
      }

    default:
      return 'Settings';
  }
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/SettingsEditor/index.tsx














const inlineFieldProps = {
  labelWidth: 16
};
const SettingsEditor = _ref => {
  var _bucketAgg$settings, _bucketAggregationCon, _bucketAgg$settings2, _bucketAggregationCon2, _bucketAgg$settings3, _bucketAggregationCon3;

  let {
    bucketAgg
  } = _ref;
  const {
    current: baseId
  } = (0,react.useRef)((0,lodash.uniqueId)('es-setting-'));
  const dispatch = useDispatch();
  const settingsDescription = useDescription(bucketAgg);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SettingsEditorContainer, {
    label: settingsDescription,
    children: [bucketAgg.type === 'terms' && /*#__PURE__*/(0,jsx_runtime.jsx)(TermsSettingsEditor, {
      bucketAgg: bucketAgg
    }), bucketAgg.type === 'date_histogram' && /*#__PURE__*/(0,jsx_runtime.jsx)(DateHistogramSettingsEditor, {
      bucketAgg: bucketAgg
    }), bucketAgg.type === 'filters' && /*#__PURE__*/(0,jsx_runtime.jsx)(FiltersSettingsEditor, {
      bucketAgg: bucketAgg
    }), bucketAgg.type === 'geohash_grid' && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
      label: "Precision"
    }, inlineFieldProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: `${baseId}-geohash_grid-precision`,
        onBlur: e => dispatch(changeBucketAggregationSetting({
          bucketAgg,
          settingName: 'precision',
          newValue: e.target.value
        })),
        defaultValue: ((_bucketAgg$settings = bucketAgg.settings) === null || _bucketAgg$settings === void 0 ? void 0 : _bucketAgg$settings.precision) || ((_bucketAggregationCon = bucketAggregationConfig[bucketAgg.type].defaultSettings) === null || _bucketAggregationCon === void 0 ? void 0 : _bucketAggregationCon.precision)
      })
    })), bucketAgg.type === 'histogram' && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
        label: "Interval"
      }, inlineFieldProps, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: `${baseId}-histogram-interval`,
          onBlur: e => dispatch(changeBucketAggregationSetting({
            bucketAgg,
            settingName: 'interval',
            newValue: e.target.value
          })),
          defaultValue: ((_bucketAgg$settings2 = bucketAgg.settings) === null || _bucketAgg$settings2 === void 0 ? void 0 : _bucketAgg$settings2.interval) || ((_bucketAggregationCon2 = bucketAggregationConfig[bucketAgg.type].defaultSettings) === null || _bucketAggregationCon2 === void 0 ? void 0 : _bucketAggregationCon2.interval)
        })
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
        label: "Min Doc Count"
      }, inlineFieldProps, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: `${baseId}-histogram-min_doc_count`,
          onBlur: e => dispatch(changeBucketAggregationSetting({
            bucketAgg,
            settingName: 'min_doc_count',
            newValue: e.target.value
          })),
          defaultValue: ((_bucketAgg$settings3 = bucketAgg.settings) === null || _bucketAgg$settings3 === void 0 ? void 0 : _bucketAgg$settings3.min_doc_count) || ((_bucketAggregationCon3 = bucketAggregationConfig[bucketAgg.type].defaultSettings) === null || _bucketAggregationCon3 === void 0 ? void 0 : _bucketAggregationCon3.min_doc_count)
        })
      }))]
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/BucketAggregationEditor.tsx












const bucketAggOptions = Object.entries(bucketAggregationConfig).map(_ref => {
  let [key, {
    label
  }] = _ref;
  return {
    label,
    value: key
  };
});

const toOption = bucketAgg => ({
  label: bucketAggregationConfig[bucketAgg.type].label,
  value: bucketAgg.type
});

const BucketAggregationEditor = _ref2 => {
  let {
    value
  } = _ref2;
  const dispatch = useDispatch();
  const getFields = useFields(value.type);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineSegmentGroup, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Segment, {
        className: segmentStyles,
        options: bucketAggOptions,
        onChange: e => dispatch(changeBucketAggregationType({
          id: value.id,
          newType: e.value
        })),
        value: toOption(value)
      }), isBucketAggregationWithField(value) && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.SegmentAsync, {
        className: segmentStyles,
        loadOptions: getFields,
        onChange: e => dispatch(changeBucketAggregationField({
          id: value.id,
          newField: e.value
        })),
        placeholder: "Select Field",
        value: value.field
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(SettingsEditor, {
      bucketAgg: value
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/BucketAggregationsEditor/index.tsx










const BucketAggregationsEditor = _ref => {
  let {
    nextId
  } = _ref;
  const dispatch = useDispatch();
  const {
    bucketAggs
  } = useQuery();
  const totalBucketAggs = (bucketAggs === null || bucketAggs === void 0 ? void 0 : bucketAggs.length) || 0;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: bucketAggs.map((bucketAgg, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)(QueryEditorRow, {
      label: index === 0 ? 'Group By' : 'Then By',
      onRemoveClick: totalBucketAggs > 1 && (() => dispatch(removeBucketAggregation(bucketAgg.id))),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BucketAggregationEditor, {
        value: bucketAgg
      }), index === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(IconButton, {
        iconName: "plus",
        onClick: () => dispatch(addBucketAggregation(nextId)),
        label: "add"
      })]
    }, `${bucketAgg.type}-${bucketAgg.id}`))
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/MetricPicker.tsx





const noWrap = emotion_css_esm.css`
  white-space: nowrap;
`;

const MetricPicker_toOption = metric => ({
  label: describeMetric(metric),
  value: metric
});

const toOptions = metrics => metrics.map(MetricPicker_toOption);

const MetricPicker = _ref => {
  let {
    options,
    onChange,
    className,
    value
  } = _ref;
  const selectedOption = options.find(option => option.id === value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Segment, {
    className: (0,emotion_css_esm.cx)(className, noWrap),
    options: toOptions(options),
    onChange: onChange,
    placeholder: "Select Metric",
    value: !!selectedOption ? MetricPicker_toOption(selectedOption) : undefined
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/SettingField.tsx







function SettingField(_ref) {
  let {
    label,
    settingName,
    metric,
    placeholder,
    tooltip
  } = _ref;
  const dispatch = useDispatch();
  const [id] = (0,react.useState)((0,lodash.uniqueId)(`es-field-id-`));
  const settings = metric.settings;
  let defaultValue = (settings === null || settings === void 0 ? void 0 : settings[settingName]) || '';

  if (settingName === 'script') {
    defaultValue = getScriptValue(metric);
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
    label: label,
    labelWidth: 16,
    tooltip: tooltip,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
      id: id,
      placeholder: placeholder,
      onBlur: e => dispatch(changeMetricSetting({
        metric,
        settingName,
        newValue: e.target.value
      })),
      defaultValue: defaultValue
    })
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/BucketScriptSettingsEditor/state/actions.ts

const addPipelineVariable = (0,redux_toolkit_esm/* createAction */.PH)('@pipelineVariables/add');
const removePipelineVariable = (0,redux_toolkit_esm/* createAction */.PH)('@pipelineVariables/remove');
const renamePipelineVariable = (0,redux_toolkit_esm/* createAction */.PH)('@pipelineVariables/rename');
const changePipelineVariableMetric = (0,redux_toolkit_esm/* createAction */.PH)('@pipelineVariables/change_metric');
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/BucketScriptSettingsEditor/state/reducer.ts


const state_reducer_reducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let action = arguments.length > 1 ? arguments[1] : undefined;

  if (addPipelineVariable.match(action)) {
    return [...state, defaultPipelineVariable(generatePipelineVariableName(state))];
  }

  if (removePipelineVariable.match(action)) {
    return state.slice(0, action.payload).concat(state.slice(action.payload + 1));
  }

  if (renamePipelineVariable.match(action)) {
    return state.map((pipelineVariable, index) => {
      if (index !== action.payload.index) {
        return pipelineVariable;
      }

      return Object.assign({}, pipelineVariable, {
        name: action.payload.newName
      });
    });
  }

  if (changePipelineVariableMetric.match(action)) {
    return state.map((pipelineVariable, index) => {
      if (index !== action.payload.index) {
        return pipelineVariable;
      }

      return Object.assign({}, pipelineVariable, {
        pipelineAgg: action.payload.newMetric
      });
    });
  }

  return state;
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/BucketScriptSettingsEditor/index.tsx
var _InlineLabel;















const BucketScriptSettingsEditor = _ref => {
  var _value$pipelineVariab2;

  let {
    value,
    previousMetrics
  } = _ref;
  const upperStateDispatch = useDispatch();
  const dispatch = useStatelessReducer(newValue => upperStateDispatch(changeMetricAttribute({
    metric: value,
    attribute: 'pipelineVariables',
    newValue
  })), value.pipelineVariables, state_reducer_reducer); // The model might not have pipeline variables (or an empty array of pipeline vars) in it because of the way it was built in previous versions of the datasource.
  // If this is the case we add a default one.

  (0,react.useEffect)(() => {
    var _value$pipelineVariab;

    if (!((_value$pipelineVariab = value.pipelineVariables) !== null && _value$pipelineVariab !== void 0 && _value$pipelineVariab.length)) {
      dispatch(addPipelineVariable());
    }
  }, [dispatch, (_value$pipelineVariab2 = value.pipelineVariables) === null || _value$pipelineVariab2 === void 0 ? void 0 : _value$pipelineVariab2.length]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: emotion_css_esm.css`
          display: flex;
        `,
      children: [_InlineLabel || (_InlineLabel = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineLabel, {
        width: 16,
        children: "Variables"
      })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: emotion_css_esm.css`
            display: grid;
            grid-template-columns: 1fr auto;
            row-gap: 4px;
            margin-bottom: 4px;
          `,
        children: value.pipelineVariables.map((pipelineVar, index) =>
        /*#__PURE__*/
        // index as a key doesn't work here since removing an element
        // in the middle of the list, will cause the next element to obtain the same key as the removed one.
        // this will cause react to "drop" the last element of the list instead of the just removed one,
        // and the default value for the input won't match the model as the DOM won't get updated.
        // using pipelineVar.name is not an option since it might be duplicated by the user.
        // generating a unique key on every render, while is probably not the best solution in terms of performance
        // ensures the UI is in a correct state. We might want to optimize this if we see perf issue in the future.
        (0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: emotion_css_esm.css`
                  display: grid;
                  column-gap: 4px;
                  grid-template-columns: auto auto;
                `,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
              "aria-label": "Variable name",
              defaultValue: pipelineVar.name,
              placeholder: "Variable Name",
              onBlur: e => dispatch(renamePipelineVariable({
                newName: e.target.value,
                index
              }))
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetricPicker, {
              onChange: e => dispatch(changePipelineVariableMetric({
                newMetric: e.value.id,
                index
              })),
              options: previousMetrics,
              value: pipelineVar.pipelineAgg
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(AddRemove, {
            index: index,
            elements: value.pipelineVariables || [],
            onAdd: () => dispatch(addPipelineVariable()),
            onRemove: () => dispatch(removePipelineVariable(index))
          })]
        }, (0,lodash.uniqueId)('es-bs-')))
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(SettingField, {
      label: "Script",
      metric: value,
      settingName: "script",
      tooltip: "Elasticsearch v5.0 and above: Scripting language is Painless. Use params.<var> to reference a variable. Elasticsearch pre-v5.0: Scripting language is per default Groovy if not changed. For Groovy use <var> to reference a variable.",
      placeholder: "params.var1 / params.var2"
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/MovingAverageSettingsEditor.tsx











// The way we handle changes for those settings is not ideal compared to the other components in the editor
// FIXME: using `changeMetricSetting` will cause an error when switching from models that have different options
// as they might be incompatible. We should clear all other options on model change.
const MovingAverageSettingsEditor = _ref => {
  var _metric$settings, _metric$settings3, _metric$settings3$set, _metric$settings5, _metric$settings5$set, _metric$settings7, _metric$settings7$set, _metric$settings9, _metric$settings9$set, _metric$settings11, _metric$settings11$se, _metric$settings12;

  let {
    metric
  } = _ref;
  const dispatch = useDispatch();
  const {
    current: baseId
  } = (0,react.useRef)((0,lodash.uniqueId)('es-moving-avg-'));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Model",
      labelWidth: 16,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        inputId: `${baseId}-model`,
        onChange: value => dispatch(changeMetricSetting({
          metric,
          settingName: 'model',
          newValue: value.value
        })),
        options: movingAvgModelOptions,
        value: (_metric$settings = metric.settings) === null || _metric$settings === void 0 ? void 0 : _metric$settings.model
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(SettingField, {
      label: "Window",
      settingName: "window",
      metric: metric,
      placeholder: "5"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(SettingField, {
      label: "Predict",
      settingName: "predict",
      metric: metric
    }), (isEWMAMovingAverage(metric) || isHoltMovingAverage(metric) || isHoltWintersMovingAverage(metric)) && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Alpha",
      labelWidth: 16,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: `${baseId}-alpha`,
        onBlur: e => {
          var _metric$settings2;

          return dispatch(changeMetricSetting({
            metric,
            settingName: 'settings',
            newValue: Object.assign({}, (_metric$settings2 = metric.settings) === null || _metric$settings2 === void 0 ? void 0 : _metric$settings2.settings, {
              alpha: e.target.value
            })
          }));
        },
        defaultValue: (_metric$settings3 = metric.settings) === null || _metric$settings3 === void 0 ? void 0 : (_metric$settings3$set = _metric$settings3.settings) === null || _metric$settings3$set === void 0 ? void 0 : _metric$settings3$set.alpha
      })
    }), (isHoltMovingAverage(metric) || isHoltWintersMovingAverage(metric)) && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Beta",
      labelWidth: 16,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: `${baseId}-beta`,
        onBlur: e => {
          var _metric$settings4;

          return dispatch(changeMetricSetting({
            metric,
            settingName: 'settings',
            newValue: Object.assign({}, (_metric$settings4 = metric.settings) === null || _metric$settings4 === void 0 ? void 0 : _metric$settings4.settings, {
              beta: e.target.value
            })
          }));
        },
        defaultValue: (_metric$settings5 = metric.settings) === null || _metric$settings5 === void 0 ? void 0 : (_metric$settings5$set = _metric$settings5.settings) === null || _metric$settings5$set === void 0 ? void 0 : _metric$settings5$set.beta
      })
    }), isHoltWintersMovingAverage(metric) && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Gamma",
        labelWidth: 16,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: `${baseId}-gamma`,
          onBlur: e => {
            var _metric$settings6;

            return dispatch(changeMetricSetting({
              metric,
              settingName: 'settings',
              newValue: Object.assign({}, (_metric$settings6 = metric.settings) === null || _metric$settings6 === void 0 ? void 0 : _metric$settings6.settings, {
                gamma: e.target.value
              })
            }));
          },
          defaultValue: (_metric$settings7 = metric.settings) === null || _metric$settings7 === void 0 ? void 0 : (_metric$settings7$set = _metric$settings7.settings) === null || _metric$settings7$set === void 0 ? void 0 : _metric$settings7$set.gamma
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Period",
        labelWidth: 16,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: `${baseId}-period`,
          onBlur: e => {
            var _metric$settings8;

            return dispatch(changeMetricSetting({
              metric,
              settingName: 'settings',
              newValue: Object.assign({}, (_metric$settings8 = metric.settings) === null || _metric$settings8 === void 0 ? void 0 : _metric$settings8.settings, {
                period: e.target.value
              })
            }));
          },
          defaultValue: (_metric$settings9 = metric.settings) === null || _metric$settings9 === void 0 ? void 0 : (_metric$settings9$set = _metric$settings9.settings) === null || _metric$settings9$set === void 0 ? void 0 : _metric$settings9$set.period
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Pad",
        labelWidth: 16,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
          id: `${baseId}-pad`,
          onChange: e => {
            var _metric$settings10;

            return dispatch(changeMetricSetting({
              metric,
              settingName: 'settings',
              newValue: Object.assign({}, (_metric$settings10 = metric.settings) === null || _metric$settings10 === void 0 ? void 0 : _metric$settings10.settings, {
                pad: e.target.checked
              })
            }));
          },
          checked: !!((_metric$settings11 = metric.settings) !== null && _metric$settings11 !== void 0 && (_metric$settings11$se = _metric$settings11.settings) !== null && _metric$settings11$se !== void 0 && _metric$settings11$se.pad)
        })
      })]
    }), (isEWMAMovingAverage(metric) || isHoltMovingAverage(metric) || isHoltWintersMovingAverage(metric)) && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Minimize",
      labelWidth: 16,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
        id: `${baseId}-minimize`,
        onChange: e => dispatch(changeMetricSetting({
          metric,
          settingName: 'minimize',
          newValue: e.target.checked
        })),
        checked: !!((_metric$settings12 = metric.settings) !== null && _metric$settings12 !== void 0 && _metric$settings12.minimize)
      })
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/TopMetricsSettingsEditor.tsx











const toMultiSelectValue = value => ({
  value,
  label: value
});

const TopMetricsSettingsEditor = _ref => {
  var _metric$settings, _metric$settings$metr, _metric$settings2, _metric$settings3;

  let {
    metric
  } = _ref;
  const dispatch = useDispatch();
  const getOrderByOptions = useFields(['number', 'date']);
  const getMetricsOptions = useFields(metric.type);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Metrics",
      labelWidth: 16,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.AsyncMultiSelect, {
        onChange: e => dispatch(changeMetricSetting({
          metric,
          settingName: 'metrics',
          newValue: e.map(v => v.value)
        })),
        loadOptions: getMetricsOptions,
        value: (_metric$settings = metric.settings) === null || _metric$settings === void 0 ? void 0 : (_metric$settings$metr = _metric$settings.metrics) === null || _metric$settings$metr === void 0 ? void 0 : _metric$settings$metr.map(toMultiSelectValue),
        closeMenuOnSelect: false,
        defaultOptions: true
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Order",
      labelWidth: 16,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        onChange: e => dispatch(changeMetricSetting({
          metric,
          settingName: 'order',
          newValue: e.value
        })),
        options: orderOptions,
        value: (_metric$settings2 = metric.settings) === null || _metric$settings2 === void 0 ? void 0 : _metric$settings2.order
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Order By",
      labelWidth: 16,
      className: emotion_css_esm.css`
          & > div {
            width: 100%;
          }
        `,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.SegmentAsync, {
        className: emotion_css_esm.css`
            margin-right: 0;
          `,
        loadOptions: getOrderByOptions,
        onChange: e => dispatch(changeMetricSetting({
          metric,
          settingName: 'orderBy',
          newValue: e.value
        })),
        placeholder: "Select Field",
        value: (_metric$settings3 = metric.settings) === null || _metric$settings3 === void 0 ? void 0 : _metric$settings3.orderBy
      })
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/useDescription.ts


const SettingsEditor_useDescription_hasValue = value => object => object.value === value; // FIXME: All the defaults and validations down here should be defined somewhere else
// as they are also the defaults that are gonna be applied to the query.
// In the previous version, the same method was taking care of describing the settings and setting defaults.


const useDescription_useDescription = metric => {
  var _metric$settings2, _metric$settings3, _metric$settings3$per;

  switch (metric.type) {
    case 'cardinality':
      {
        var _metric$settings;

        const precisionThreshold = ((_metric$settings = metric.settings) === null || _metric$settings === void 0 ? void 0 : _metric$settings.precision_threshold) || '';
        return `Precision threshold: ${precisionThreshold}`;
      }

    case 'percentiles':
      if ((_metric$settings2 = metric.settings) !== null && _metric$settings2 !== void 0 && _metric$settings2.percents && ((_metric$settings3 = metric.settings) === null || _metric$settings3 === void 0 ? void 0 : (_metric$settings3$per = _metric$settings3.percents) === null || _metric$settings3$per === void 0 ? void 0 : _metric$settings3$per.length) >= 1) {
        var _metric$settings4;

        return `Values: ${(_metric$settings4 = metric.settings) === null || _metric$settings4 === void 0 ? void 0 : _metric$settings4.percents}`;
      }

      return 'Percents: Default';

    case 'extended_stats':
      {
        const selectedStats = Object.entries(metric.meta || {}).map(_ref => {
          var _extendedStats$find;

          let [key, value] = _ref;
          return value && ((_extendedStats$find = extendedStats.find(SettingsEditor_useDescription_hasValue(key))) === null || _extendedStats$find === void 0 ? void 0 : _extendedStats$find.label);
        }).filter(Boolean);
        return `Stats: ${selectedStats.length > 0 ? selectedStats.join(', ') : 'None selected'}`;
      }

    case 'raw_document':
    case 'raw_data':
      {
        var _metric$settings5;

        const size = ((_metric$settings5 = metric.settings) === null || _metric$settings5 === void 0 ? void 0 : _metric$settings5.size) || 500;
        return `Size: ${size}`;
      }

    default:
      return 'Options';
  }
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/SettingsEditor/index.tsx














 // TODO: Move this somewhere and share it with BucketsAggregation Editor





const SettingsEditor_inlineFieldProps = {
  labelWidth: 16
};
const SettingsEditor_SettingsEditor = _ref => {
  var _metric$settings$size, _metric$settings, _metricAggregationCon, _metric$settings2, _metricAggregationCon3, _metric$settings3, _metric$settings4;

  let {
    metric,
    previousMetrics
  } = _ref;
  const {
    current: baseId
  } = (0,react.useRef)((0,lodash.uniqueId)('es-setting-'));
  const dispatch = useDispatch();
  const description = useDescription_useDescription(metric);
  const query = useQuery();
  const rateAggUnitOptions = [{
    value: 'second',
    label: 'Second'
  }, {
    value: 'minute',
    label: 'Minute'
  }, {
    value: 'hour',
    label: 'Hour'
  }, {
    value: 'day',
    label: 'Day'
  }, {
    value: 'week',
    label: 'Week'
  }, {
    value: 'month',
    label: 'Month'
  }, {
    value: 'quarter',
    label: 'Quarter'
  }, {
    value: 'Year',
    label: 'Year'
  }];
  const rateAggModeOptions = [{
    value: 'sum',
    label: 'Sum'
  }, {
    value: 'value_count',
    label: 'Value count'
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SettingsEditorContainer, {
    label: description,
    hidden: metric.hide,
    children: [metric.type === 'derivative' && /*#__PURE__*/(0,jsx_runtime.jsx)(SettingField, {
      label: "Unit",
      metric: metric,
      settingName: "unit"
    }), metric.type === 'serial_diff' && /*#__PURE__*/(0,jsx_runtime.jsx)(SettingField, {
      label: "Lag",
      metric: metric,
      settingName: "lag",
      placeholder: "1"
    }), metric.type === 'cumulative_sum' && /*#__PURE__*/(0,jsx_runtime.jsx)(SettingField, {
      label: "Format",
      metric: metric,
      settingName: "format"
    }), metric.type === 'moving_avg' && /*#__PURE__*/(0,jsx_runtime.jsx)(MovingAverageSettingsEditor, {
      metric: metric
    }), metric.type === 'moving_fn' && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SettingField, {
        label: "Window",
        metric: metric,
        settingName: "window"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(SettingField, {
        label: "Script",
        metric: metric,
        settingName: "script"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(SettingField, {
        label: "Shift",
        metric: metric,
        settingName: "shift"
      })]
    }), metric.type === 'top_metrics' && /*#__PURE__*/(0,jsx_runtime.jsx)(TopMetricsSettingsEditor, {
      metric: metric
    }), metric.type === 'bucket_script' && /*#__PURE__*/(0,jsx_runtime.jsx)(BucketScriptSettingsEditor, {
      value: metric,
      previousMetrics: previousMetrics
    }), (metric.type === 'raw_data' || metric.type === 'raw_document') && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
      label: "Size"
    }, SettingsEditor_inlineFieldProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: `ES-query-${query.refId}_metric-${metric.id}-size`,
        onBlur: e => dispatch(changeMetricSetting({
          metric,
          settingName: 'size',
          newValue: e.target.value
        })),
        defaultValue: (_metric$settings$size = (_metric$settings = metric.settings) === null || _metric$settings === void 0 ? void 0 : _metric$settings.size) !== null && _metric$settings$size !== void 0 ? _metric$settings$size : (_metricAggregationCon = metricAggregationConfig.raw_data.defaults.settings) === null || _metricAggregationCon === void 0 ? void 0 : _metricAggregationCon.size
      })
    })), metric.type === 'logs' && /*#__PURE__*/(0,jsx_runtime.jsx)(SettingField, {
      label: "Limit",
      metric: metric,
      settingName: "limit",
      placeholder: "500"
    }), metric.type === 'cardinality' && /*#__PURE__*/(0,jsx_runtime.jsx)(SettingField, {
      label: "Precision Threshold",
      metric: metric,
      settingName: "precision_threshold"
    }), metric.type === 'extended_stats' && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [extendedStats.map(stat => {
        var _metric$meta, _metric$meta2, _metricAggregationCon2;

        return /*#__PURE__*/(0,jsx_runtime.jsx)(ExtendedStatSetting, {
          stat: stat,
          onChange: newValue => dispatch(changeMetricMeta({
            metric,
            meta: stat.value,
            newValue
          })),
          value: ((_metric$meta = metric.meta) === null || _metric$meta === void 0 ? void 0 : _metric$meta[stat.value]) !== undefined ? !!((_metric$meta2 = metric.meta) !== null && _metric$meta2 !== void 0 && _metric$meta2[stat.value]) : !!((_metricAggregationCon2 = metricAggregationConfig.extended_stats.defaults.meta) !== null && _metricAggregationCon2 !== void 0 && _metricAggregationCon2[stat.value])
        }, stat.value);
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(SettingField, {
        label: "Sigma",
        metric: metric,
        settingName: "sigma",
        placeholder: "3"
      })]
    }), metric.type === 'percentiles' && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
      label: "Percentiles"
    }, SettingsEditor_inlineFieldProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: `${baseId}-percentiles-percents`,
        onBlur: e => dispatch(changeMetricSetting({
          metric,
          settingName: 'percents',
          newValue: e.target.value.split(',').filter(Boolean)
        })),
        defaultValue: ((_metric$settings2 = metric.settings) === null || _metric$settings2 === void 0 ? void 0 : _metric$settings2.percents) || ((_metricAggregationCon3 = metricAggregationConfig.percentiles.defaults.settings) === null || _metricAggregationCon3 === void 0 ? void 0 : _metricAggregationCon3.percents),
        placeholder: "1,5,25,50,75,95,99"
      })
    })), metric.type === 'rate' && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
        label: "Unit"
      }, SettingsEditor_inlineFieldProps, {
        "data-testid": "unit-select",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          id: `ES-query-${query.refId}_metric-${metric.id}-unit`,
          onChange: e => dispatch(changeMetricSetting({
            metric,
            settingName: 'unit',
            newValue: e.value
          })),
          options: rateAggUnitOptions,
          value: (_metric$settings3 = metric.settings) === null || _metric$settings3 === void 0 ? void 0 : _metric$settings3.unit
        })
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, Object.assign({
        label: "Mode"
      }, SettingsEditor_inlineFieldProps, {
        "data-testid": "mode-select",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          id: `ES-query-${query.refId}_metric-${metric.id}-mode`,
          onChange: e => dispatch(changeMetricSetting({
            metric,
            settingName: 'mode',
            newValue: e.value
          })),
          options: rateAggModeOptions,
          value: (_metric$settings4 = metric.settings) === null || _metric$settings4 === void 0 ? void 0 : _metric$settings4.unit
        })
      }))]
    }), isMetricAggregationWithInlineScript(metric) && /*#__PURE__*/(0,jsx_runtime.jsx)(SettingField, {
      label: "Script",
      metric: metric,
      settingName: "script",
      placeholder: "_value * 1"
    }), isMetricAggregationWithMissingSupport(metric) && /*#__PURE__*/(0,jsx_runtime.jsx)(SettingField, {
      label: "Missing",
      metric: metric,
      settingName: "missing",
      tooltip: "The missing parameter defines how documents that are missing a value should be treated. By default they will be ignored but it is also possible to treat them as if they had a value"
    })]
  });
};

const ExtendedStatSetting = _ref2 => {
  let {
    stat,
    onChange,
    value
  } = _ref2;
  // this is needed for the htmlFor prop in the label so that clicking the label will toggle the switch state.
  const [id] = (0,react.useState)((0,lodash.uniqueId)(`es-field-id-`));
  return /*#__PURE__*/(0,react.createElement)(grafana_ui_src.InlineField, Object.assign({
    label: stat.label
  }, SettingsEditor_inlineFieldProps, {
    key: stat.value
  }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
    id: id,
    onChange: e => onChange(e.target.checked),
    value: value
  }));
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/styles.ts

const styles_getStyles = (theme, hidden) => {
  return {
    color: hidden && emotion_css_esm.css`
        &,
        &:hover,
        label,
        a {
          color: ${hidden ? theme.colors.text.disabled : theme.colors.text.primary};
        }
      `
  };
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/MetricEditor.tsx


















const MetricEditor_toOption = metric => ({
  label: metricAggregationConfig[metric.type].label,
  value: metric.type
});

// If a metric is a Pipeline Aggregation (https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-pipeline.html)
// it doesn't make sense to show it in the type picker when there is no non-pipeline-aggregation previously selected
// as they work on the outputs produced from other aggregations rather than from documents or fields.
// This means we should filter them out from the type picker if there's no other "basic" aggregation before the current one.
const isBasicAggregation = metric => !metricAggregationConfig[metric.type].isPipelineAgg;

const getTypeOptions = function (previousMetrics, esVersion) {
  let xpack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // we'll include Pipeline Aggregations only if at least one previous metric is a "Basic" one
  const includePipelineAggregations = previousMetrics.some(isBasicAggregation);
  return Object.entries(metricAggregationConfig) // Only showing metrics type supported by the configured version of ES
  .filter(_ref => {
    let [_, {
      versionRange = '*'
    }] = _ref;
    return (0,semver.satisfies)(esVersion, versionRange);
  }) // Filtering out Pipeline Aggregations if there's no basic metric selected before
  .filter(_ref2 => {
    let [_, config] = _ref2;
    return includePipelineAggregations || !config.isPipelineAgg;
  }) // Filtering out X-Pack plugins if X-Pack is disabled
  .filter(_ref3 => {
    let [_, config] = _ref3;
    return config.xpack ? xpack : true;
  }).map(_ref4 => {
    let [key, {
      label
    }] = _ref4;
    return {
      label,
      value: key
    };
  });
};

const MetricEditor = _ref5 => {
  let {
    value
  } = _ref5;
  const styles = styles_getStyles((0,grafana_ui_src.useTheme2)(), !!value.hide);
  const datasource = useDatasource();
  const query = useQuery();
  const dispatch = useDispatch();
  const getFields = useFields(value.type);
  const loadOptions = (0,react.useCallback)(async () => {
    const remoteFields = await getFields(); // Metric aggregations that have inline script support don't require a field to be set.

    if (isMetricAggregationWithInlineScript(value)) {
      return [{
        label: 'None'
      }, ...remoteFields];
    }

    return remoteFields;
  }, [getFields, value]);
  const previousMetrics = query.metrics.slice(0, query.metrics.findIndex(m => m.id === value.id));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineSegmentGroup, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Segment, {
        className: (0,emotion_css_esm.cx)(styles.color, segmentStyles),
        options: getTypeOptions(previousMetrics, datasource.esVersion, datasource.xpack),
        onChange: e => dispatch(changeMetricType({
          id: value.id,
          type: e.value
        })),
        value: MetricEditor_toOption(value)
      }), isMetricAggregationWithField(value) && !isPipelineAggregation(value) && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.SegmentAsync, {
        className: (0,emotion_css_esm.cx)(styles.color, segmentStyles),
        loadOptions: loadOptions,
        onChange: e => dispatch(changeMetricField({
          id: value.id,
          field: e.value
        })),
        placeholder: "Select Field",
        value: value.field
      }), isPipelineAggregation(value) && !isPipelineAggregationWithMultipleBucketPaths(value) && /*#__PURE__*/(0,jsx_runtime.jsx)(MetricPicker, {
        className: (0,emotion_css_esm.cx)(styles.color, segmentStyles),
        onChange: e => {
          var _e$value;

          return dispatch(changeMetricField({
            id: value.id,
            field: (_e$value = e.value) === null || _e$value === void 0 ? void 0 : _e$value.id
          }));
        },
        options: previousMetrics,
        value: value.field
      })]
    }), isMetricAggregationWithSettings(value) && /*#__PURE__*/(0,jsx_runtime.jsx)(SettingsEditor_SettingsEditor, {
      metric: value,
      previousMetrics: previousMetrics
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/MetricAggregationsEditor/index.tsx











const MetricAggregationsEditor = _ref => {
  let {
    nextId
  } = _ref;
  const dispatch = useDispatch();
  const {
    metrics
  } = useQuery();
  const totalMetrics = (metrics === null || metrics === void 0 ? void 0 : metrics.length) || 0;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: metrics === null || metrics === void 0 ? void 0 : metrics.map((metric, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)(QueryEditorRow, {
      label: `Metric (${metric.id})`,
      hidden: metric.hide,
      onHideClick: () => dispatch(toggleMetricVisibility(metric.id)),
      onRemoveClick: totalMetrics > 1 && (() => dispatch(removeMetric(metric.id))),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MetricEditor, {
        value: metric
      }), !metricAggregationConfig[metric.type].isSingleMetric && index === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(IconButton, {
        iconName: "plus",
        onClick: () => dispatch(addMetric(nextId)),
        label: "add"
      })]
    }, `${metric.type}-${metric.id}`))
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/components/QueryEditor/index.tsx
var _Alert, QueryEditor_InlineLabel;
















const QueryEditor = _ref => {
  let {
    query,
    onChange,
    onRunQuery,
    datasource,
    range
  } = _ref;

  if (!isSupportedVersion(datasource.esVersion)) {
    return _Alert || (_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      title: `Support for Elasticsearch versions after their end-of-life (currently versions < 7.10) was removed`
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(ElasticsearchProvider, {
    datasource: datasource,
    onChange: onChange,
    onRunQuery: onRunQuery,
    query: query,
    range: range || (0,src.getDefaultTimeRange)(),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(QueryEditorForm, {
      value: query
    })
  });
};

const QueryEditor_getStyles = theme => ({
  root: emotion_css_esm.css`
    display: flex;
  `,
  queryFieldWrapper: emotion_css_esm.css`
    flex-grow: 1;
    margin: 0 ${theme.spacing(0.5)} ${theme.spacing(0.5)} 0;
  `
});

const QueryEditorForm = _ref2 => {
  var _value$bucketAggs, _value$bucketAggs$sli, _value$metrics;

  let {
    value
  } = _ref2;
  const dispatch = useDispatch();
  const nextId = useNextId();
  const styles = (0,grafana_ui_src.useStyles2)(QueryEditor_getStyles); // To be considered a time series query, the last bucked aggregation must be a Date Histogram

  const isTimeSeriesQuery = ((_value$bucketAggs = value.bucketAggs) === null || _value$bucketAggs === void 0 ? void 0 : (_value$bucketAggs$sli = _value$bucketAggs.slice(-1)[0]) === null || _value$bucketAggs$sli === void 0 ? void 0 : _value$bucketAggs$sli.type) === 'date_histogram';
  const showBucketAggregationsEditor = (_value$metrics = value.metrics) === null || _value$metrics === void 0 ? void 0 : _value$metrics.every(metric => !metricAggregationConfig[metric.type].isSingleMetric);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.root,
      children: [QueryEditor_InlineLabel || (QueryEditor_InlineLabel = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineLabel, {
        width: 17,
        children: "Query"
      })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.queryFieldWrapper,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.QueryField, {
          query: value.query // By default QueryField calls onChange if onBlur is not defined, this will trigger a rerender
          // And slate will claim the focus, making it impossible to leave the field.
          ,
          onBlur: () => {},
          onChange: query => dispatch(changeQuery(query)),
          placeholder: "Lucene Query",
          portalOrigin: "elasticsearch"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Alias",
        labelWidth: 15,
        disabled: !isTimeSeriesQuery,
        tooltip: "Aliasing only works for timeseries queries (when the last group is 'Date Histogram'). For all other query types this field is ignored.",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: `ES-query-${value.refId}_alias`,
          placeholder: "Alias Pattern",
          onBlur: e => dispatch(changeAliasPattern(e.currentTarget.value)),
          defaultValue: value.alias
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(MetricAggregationsEditor, {
      nextId: nextId
    }), showBucketAggregationsEditor && /*#__PURE__*/(0,jsx_runtime.jsx)(BucketAggregationsEditor, {
      nextId: nextId
    })]
  });
};
// EXTERNAL MODULE: ./public/app/core/config.ts
var config = __webpack_require__("./public/app/core/config.ts");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js
var usePrevious = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/configuration/DataLink.tsx







const {
  FormField,
  Switch
} = grafana_ui_src.LegacyForms;
const DataLink_getStyles = (0,grafana_ui_src.stylesFactory)(() => ({
  firstRow: emotion_css_esm.css`
    display: flex;
  `,
  nameField: emotion_css_esm.css`
    flex: 2;
  `,
  regexField: emotion_css_esm.css`
    flex: 3;
  `,
  row: emotion_css_esm.css`
    display: flex;
    align-items: baseline;
  `,
  urlField: emotion_css_esm.css`
    flex: 1;
  `,
  urlDisplayLabelField: emotion_css_esm.css`
    flex: 1;
  `
}));
const DataLink = props => {
  const {
    value,
    onChange,
    onDelete,
    suggestions,
    className
  } = props;
  const styles = DataLink_getStyles();
  const [showInternalLink, setShowInternalLink] = useInternalLink(value.datasourceUid);

  const handleChange = field => event => {
    onChange(Object.assign({}, value, {
      [field]: event.currentTarget.value
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.firstRow + ' gf-form',
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FormField, {
        className: styles.nameField,
        labelWidth: 6 // A bit of a hack to prevent using default value for the width from FormField
        ,
        inputWidth: null,
        label: "Field",
        type: "text",
        value: value.field,
        tooltip: 'Can be exact field name or a regex pattern that will match on the field name.',
        onChange: handleChange('field')
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: 'destructive',
        title: "Remove field",
        icon: "times",
        onClick: event => {
          event.preventDefault();
          onDelete();
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "gf-form",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FormField, {
        label: showInternalLink ? 'Query' : 'URL',
        labelWidth: 6,
        inputEl: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.DataLinkInput, {
          placeholder: showInternalLink ? '${__value.raw}' : 'http://example.com/${__value.raw}',
          value: value.url || '',
          onChange: newValue => onChange(Object.assign({}, value, {
            url: newValue
          })),
          suggestions: suggestions
        }),
        className: styles.urlField
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(FormField, {
        className: styles.urlDisplayLabelField,
        inputWidth: null,
        label: "URL Label",
        type: "text",
        value: value.urlDisplayLabel,
        onChange: handleChange('urlDisplayLabel'),
        tooltip: 'Use to override the button label.'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.row,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Switch, {
        labelClass: 'width-6',
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
      }), showInternalLink && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_runtime_src.DataSourcePicker, {
        tracing: true // Uid and value should be always set in the db and so in the items.
        ,
        onChange: ds => {
          onChange(Object.assign({}, value, {
            datasourceUid: ds.uid
          }));
        },
        current: value.datasourceUid
      })]
    })]
  });
};

function useInternalLink(datasourceUid) {
  const [showInternalLink, setShowInternalLink] = (0,react.useState)(!!datasourceUid);
  const previousUid = (0,usePrevious/* default */.Z)(datasourceUid); // Force internal link visibility change if uid changed outside of this component.

  (0,react.useEffect)(() => {
    if (!previousUid && datasourceUid && !showInternalLink) {
      setShowInternalLink(true);
    }

    if (previousUid && !datasourceUid && showInternalLink) {
      setShowInternalLink(false);
    }
  }, [previousUid, datasourceUid, showInternalLink]);
  return [showInternalLink, setShowInternalLink];
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/configuration/DataLinks.tsx
var _h;










const DataLinks_getStyles = theme => {
  return {
    infoText: emotion_css_esm.css`
      padding-bottom: ${theme.spacing(2)};
      color: ${theme.colors.text.secondary};
    `,
    dataLink: emotion_css_esm.css`
      margin-bottom: ${theme.spacing(1)};
    `
  };
};

const DataLinks = props => {
  const {
    value,
    onChange
  } = props;
  const styles = (0,grafana_ui_src.useStyles2)(DataLinks_getStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
      className: "page-heading",
      children: "Data links"
    })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.infoText,
      children: "Add links to existing fields. Links will be shown in log row details next to the field value."
    }), value && value.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: value.map((field, index) => {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(DataLink, {
          className: styles.dataLink,
          value: field,
          onChange: newField => {
            const newDataLinks = [...value];
            newDataLinks.splice(index, 1, newField);
            onChange(newDataLinks);
          },
          onDelete: () => {
            const newDataLinks = [...value];
            newDataLinks.splice(index, 1);
            onChange(newDataLinks);
          },
          suggestions: [{
            value: src.DataLinkBuiltInVars.valueRaw,
            label: 'Raw value',
            documentation: 'Raw value of the field',
            origin: src.VariableOrigin.Value
          }]
        }, index);
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      type: "button",
      variant: 'secondary',
      className: emotion_css_esm.css`
          margin-right: 10px;
        `,
      icon: "plus",
      onClick: event => {
        event.preventDefault();
        const newDataLinks = [...(value || []), {
          field: '',
          url: ''
        }];
        onChange(newDataLinks);
      },
      children: "Add"
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/configuration/utils.ts



const coerceOptions = options => {
  var _options$jsonData$inc;

  const esVersion = coerceESVersion(options.jsonData.esVersion);
  return Object.assign({}, options, {
    jsonData: Object.assign({}, options.jsonData, {
      timeField: options.jsonData.timeField || '@timestamp',
      esVersion,
      maxConcurrentShardRequests: options.jsonData.maxConcurrentShardRequests || defaultMaxConcurrentShardRequests(esVersion),
      logMessageField: options.jsonData.logMessageField || '',
      logLevelField: options.jsonData.logLevelField || '',
      includeFrozen: (_options$jsonData$inc = options.jsonData.includeFrozen) !== null && _options$jsonData$inc !== void 0 ? _options$jsonData$inc : false
    })
  });
};
const isValidOptions = options => {
  return (// esVersion should be a valid semver string
    !!(0,semver.valid)(options.jsonData.esVersion) && // timeField should not be empty or nullish
    !!options.jsonData.timeField && // maxConcurrentShardRequests should be a number AND greater than 0
    !!options.jsonData.maxConcurrentShardRequests && // message & level fields should be defined
    options.jsonData.logMessageField !== undefined && options.jsonData.logLevelField !== undefined
  );
};
const isTruthy = value => Boolean(value);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/configuration/ElasticDetails.tsx
var _code;








const indexPatternTypes = [{
  label: 'No pattern',
  value: 'none'
}, {
  label: 'Hourly',
  value: 'Hourly',
  example: '[logstash-]YYYY.MM.DD.HH'
}, {
  label: 'Daily',
  value: 'Daily',
  example: '[logstash-]YYYY.MM.DD'
}, {
  label: 'Weekly',
  value: 'Weekly',
  example: '[logstash-]GGGG.WW'
}, {
  label: 'Monthly',
  value: 'Monthly',
  example: '[logstash-]YYYY.MM'
}, {
  label: 'Yearly',
  value: 'Yearly',
  example: '[logstash-]YYYY'
}];
const esVersions = [{
  label: '7.10+',
  value: '7.10.0'
}, {
  label: '8.0+',
  value: '8.0.0',
  description: 'support for Elasticsearch 8 is currently experimental'
}];
const ElasticDetails = _ref => {
  var _value$jsonData$inclu;

  let {
    value,
    onChange
  } = _ref;
  const currentVersion = esVersions.find(version => version.value === value.jsonData.esVersion);
  const customOption = !currentVersion && (0,semver.valid)(value.jsonData.esVersion) ? {
    label: value.jsonData.esVersion,
    value: value.jsonData.esVersion
  } : undefined;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.FieldSet, {
      label: "Elasticsearch details",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Index name",
        labelWidth: 26,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: "es_config_indexName",
          value: value.database || '',
          onChange: changeHandler('database', value, onChange),
          width: 24,
          placeholder: "es-index-name",
          required: true
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Pattern",
        labelWidth: 26,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          inputId: "es_config_indexPattern",
          value: indexPatternTypes.find(pattern => pattern.value === (value.jsonData.interval === undefined ? 'none' : value.jsonData.interval)),
          options: indexPatternTypes,
          onChange: intervalHandler(value, onChange),
          width: 24
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Time field name",
        labelWidth: 26,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: "es_config_timeField",
          value: value.jsonData.timeField || '',
          onChange: jsonDataChangeHandler('timeField', value, onChange),
          width: 24,
          placeholder: "@timestamp",
          required: true
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "ElasticSearch version",
        labelWidth: 26,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          inputId: "es_config_version",
          options: [customOption, ...esVersions].filter(isTruthy),
          onChange: option => {
            const maxConcurrentShardRequests = getMaxConcurrenShardRequestOrDefault(value.jsonData.maxConcurrentShardRequests, option.value);
            onChange(Object.assign({}, value, {
              jsonData: Object.assign({}, value.jsonData, {
                esVersion: option.value,
                maxConcurrentShardRequests
              })
            }));
          },
          value: currentVersion || customOption,
          width: 24
        })
      }), (0,semver.gte)(value.jsonData.esVersion, '5.6.0') && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Max concurrent Shard Requests",
        labelWidth: 26,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: "es_config_shardRequests",
          value: value.jsonData.maxConcurrentShardRequests || '',
          onChange: jsonDataChangeHandler('maxConcurrentShardRequests', value, onChange),
          width: 24
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Min time interval",
        labelWidth: 26,
        tooltip: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: ["A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example", ' ', _code || (_code = /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
            children: "1m"
          })), " if your data is written every minute."]
        }),
        error: "Value is not valid, you can use number with time unit specifier: y, M, w, d, h, m, s",
        invalid: !!value.jsonData.timeInterval && !/^\d+(ms|[Mwdhmsy])$/.test(value.jsonData.timeInterval),
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: "es_config_minTimeInterval",
          value: value.jsonData.timeInterval || '',
          onChange: jsonDataChangeHandler('timeInterval', value, onChange),
          width: 24,
          placeholder: "10s"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "X-Pack enabled",
        labelWidth: 26,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
          id: "es_config_xpackEnabled",
          checked: value.jsonData.xpack || false,
          onChange: jsonDataSwitchChangeHandler('xpack', value, onChange)
        })
      }), (0,semver.gte)(value.jsonData.esVersion, '6.6.0') && value.jsonData.xpack && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Include Frozen Indices",
        labelWidth: 26,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
          id: "es_config_frozenIndices",
          checked: (_value$jsonData$inclu = value.jsonData.includeFrozen) !== null && _value$jsonData$inclu !== void 0 ? _value$jsonData$inclu : false,
          onChange: jsonDataSwitchChangeHandler('includeFrozen', value, onChange)
        })
      })]
    })
  });
}; // TODO: Use change handlers from @grafana/data

const changeHandler = (key, value, onChange) => event => {
  onChange(Object.assign({}, value, {
    [key]: event.currentTarget.value
  }));
}; // TODO: Use change handlers from @grafana/data


const jsonDataChangeHandler = (key, value, onChange) => event => {
  onChange(Object.assign({}, value, {
    jsonData: Object.assign({}, value.jsonData, {
      [key]: event.currentTarget.value
    })
  }));
};

const jsonDataSwitchChangeHandler = (key, value, onChange) => event => {
  onChange(Object.assign({}, value, {
    jsonData: Object.assign({}, value.jsonData, {
      [key]: event.currentTarget.checked
    })
  }));
};

const intervalHandler = (value, onChange) => option => {
  const {
    database
  } = value; // If option value is undefined it will send its label instead so we have to convert made up value to undefined here.

  const newInterval = option.value === 'none' ? undefined : option.value;

  if (!database || database.length === 0 || database.startsWith('[logstash-]')) {
    let newDatabase = '';

    if (newInterval !== undefined) {
      const pattern = indexPatternTypes.find(pattern => pattern.value === newInterval);

      if (pattern) {
        var _pattern$example;

        newDatabase = (_pattern$example = pattern.example) !== null && _pattern$example !== void 0 ? _pattern$example : '';
      }
    }

    onChange(Object.assign({}, value, {
      database: newDatabase,
      jsonData: Object.assign({}, value.jsonData, {
        interval: newInterval
      })
    }));
  } else {
    onChange(Object.assign({}, value, {
      jsonData: Object.assign({}, value.jsonData, {
        interval: newInterval
      })
    }));
  }
};

function getMaxConcurrenShardRequestOrDefault(maxConcurrentShardRequests, version) {
  if (maxConcurrentShardRequests === 5 && (0,semver.lt)(version, '7.0.0')) {
    return 256;
  }

  if (maxConcurrentShardRequests === 256 && (0,semver.gte)(version, '7.0.0')) {
    return 5;
  }

  return maxConcurrentShardRequests || defaultMaxConcurrentShardRequests(version);
}

function defaultMaxConcurrentShardRequests(version) {
  return (0,semver.gte)(version, '7.0.0') ? 5 : 256;
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/configuration/LogsConfig.tsx




const LogsConfig = props => {
  const {
    value,
    onChange
  } = props;

  const changeHandler = key => event => {
    onChange(Object.assign({}, value, {
      [key]: event.currentTarget.value
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.FieldSet, {
    label: "Logs",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Message field name",
      labelWidth: 22,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: "es_logs-config_logMessageField",
        value: value.logMessageField,
        onChange: changeHandler('logMessageField'),
        placeholder: "_source",
        width: 24
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Level field name",
      labelWidth: 22,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: "es_logs-config_logLevelField",
        value: value.logLevelField,
        onChange: changeHandler('logLevelField'),
        width: 24
      })
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/configuration/ConfigEditor.tsx
var ConfigEditor_Alert, _Alert2;












const ConfigEditor = props => {
  const {
    options: originalOptions,
    onOptionsChange
  } = props;
  const options = coerceOptions(originalOptions);
  (0,react.useEffect)(() => {
    if (!isValidOptions(originalOptions)) {
      onOptionsChange(coerceOptions(originalOptions));
    } // We can't enforce the eslint rule here because we only want to run this once.
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  const supportedVersion = isSupportedVersion(options.jsonData.esVersion);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [options.access === 'direct' && (ConfigEditor_Alert || (ConfigEditor_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      title: "Deprecation Notice",
      severity: "warning",
      children: "Browser access mode in the Elasticsearch datasource is deprecated and will be removed in a future release."
    }))), !supportedVersion && (_Alert2 || (_Alert2 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      title: "Deprecation notice",
      severity: "error",
      children: `Support for Elasticsearch versions after their end-of-life (currently versions < 7.10) was removed`
    }))), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.DataSourceHttpSettings, {
      defaultUrl: "http://localhost:9200",
      dataSourceConfig: options,
      showAccessOptions: true,
      onChange: onOptionsChange,
      sigV4AuthToggleEnabled: config/* config.sigV4AuthEnabled */.vc.sigV4AuthEnabled
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ElasticDetails, {
      value: options,
      onChange: onOptionsChange
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(LogsConfig, {
      value: options.jsonData,
      onChange: newValue => onOptionsChange(Object.assign({}, options, {
        jsonData: newValue
      }))
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(DataLinks, {
      value: options.jsonData.dataLinks,
      onChange: newValue => {
        onOptionsChange(Object.assign({}, options, {
          jsonData: Object.assign({}, options.jsonData, {
            dataLinks: newValue
          })
        }));
      }
    })]
  });
};
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js
var throwError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/generate.js
var generate = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/generate.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js
var catchError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
var mergeMap = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/skipWhile.js
var skipWhile = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/skipWhile.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js
var throwIfEmpty = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/throwIfEmpty.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/first.js
var first = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/first.js");
// EXTERNAL MODULE: ./public/app/core/logs_model.ts + 1 modules
var logs_model = __webpack_require__("./public/app/core/logs_model.ts");
// EXTERNAL MODULE: ./public/app/features/templating/template_srv.ts + 1 modules
var template_srv = __webpack_require__("./public/app/features/templating/template_srv.ts");
// EXTERNAL MODULE: ./public/app/core/table_model.ts
var table_model = __webpack_require__("./public/app/core/table_model.ts");
// EXTERNAL MODULE: ./public/app/core/utils/flatten.ts
var flatten = __webpack_require__("./public/app/core/utils/flatten.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/elastic_response.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const HIGHLIGHT_TAGS_EXP = `${highlightTags.pre}([^@]+)${highlightTags.post}`;
class ElasticResponse {
  constructor(targets, response) {
    this.targets = targets;
    this.response = response;

    _defineProperty(this, "processResponseToSeries", () => {
      const seriesList = [];

      for (let i = 0; i < this.response.responses.length; i++) {
        const response = this.response.responses[i];
        const target = this.targets[i];

        if (response.error) {
          throw this.getErrorFromElasticResponse(this.response, response.error);
        }

        if (response.hits && response.hits.hits.length > 0) {
          this.processHits(response.hits, seriesList, target);
        }

        if (response.aggregations) {
          const aggregations = response.aggregations;
          const target = this.targets[i];
          const tmpSeriesList = [];
          const table = new table_model/* default */.Z();
          table.refId = target.refId;
          this.processBuckets(aggregations, target, tmpSeriesList, table, {}, 0);
          this.trimDatapoints(tmpSeriesList, target);
          this.nameSeries(tmpSeriesList, target);

          for (let y = 0; y < tmpSeriesList.length; y++) {
            seriesList.push(tmpSeriesList[y]);
          }

          if (table.rows.length > 0) {
            seriesList.push(table);
          }
        }
      }

      return {
        data: seriesList
      };
    });

    this.targets = targets;
    this.response = response;
    this.targets = targets;
    this.response = response;
  }

  processMetrics(esAgg, target, seriesList, props) {
    let newSeries;

    for (let y = 0; y < target.metrics.length; y++) {
      const metric = target.metrics[y];

      if (metric.hide) {
        continue;
      }

      switch (metric.type) {
        case 'count':
          {
            newSeries = {
              datapoints: [],
              metric: 'count',
              props,
              refId: target.refId
            };

            for (let i = 0; i < esAgg.buckets.length; i++) {
              const bucket = esAgg.buckets[i];
              const value = bucket.doc_count;
              newSeries.datapoints.push([value, bucket.key]);
            }

            seriesList.push(newSeries);
            break;
          }

        case 'percentiles':
          {
            if (esAgg.buckets.length === 0) {
              break;
            }

            const firstBucket = esAgg.buckets[0];
            const percentiles = firstBucket[metric.id].values;

            for (const percentileName in percentiles) {
              newSeries = {
                datapoints: [],
                metric: 'p' + percentileName,
                props: props,
                field: metric.field,
                refId: target.refId
              };

              for (let i = 0; i < esAgg.buckets.length; i++) {
                const bucket = esAgg.buckets[i];
                const values = bucket[metric.id].values;
                newSeries.datapoints.push([values[percentileName], bucket.key]);
              }

              seriesList.push(newSeries);
            }

            break;
          }

        case 'extended_stats':
          {
            for (const statName in metric.meta) {
              if (!metric.meta[statName]) {
                continue;
              }

              newSeries = {
                datapoints: [],
                metric: statName,
                props: props,
                field: metric.field,
                refId: target.refId
              };

              for (let i = 0; i < esAgg.buckets.length; i++) {
                const bucket = esAgg.buckets[i];
                const stats = bucket[metric.id]; // add stats that are in nested obj to top level obj

                stats.std_deviation_bounds_upper = stats.std_deviation_bounds.upper;
                stats.std_deviation_bounds_lower = stats.std_deviation_bounds.lower;
                newSeries.datapoints.push([stats[statName], bucket.key]);
              }

              seriesList.push(newSeries);
            }

            break;
          }

        case 'top_metrics':
          {
            var _metric$settings, _metric$settings$metr;

            if ((_metric$settings = metric.settings) !== null && _metric$settings !== void 0 && (_metric$settings$metr = _metric$settings.metrics) !== null && _metric$settings$metr !== void 0 && _metric$settings$metr.length) {
              for (const metricField of (_metric$settings2 = metric.settings) === null || _metric$settings2 === void 0 ? void 0 : _metric$settings2.metrics) {
                var _metric$settings2;

                newSeries = {
                  datapoints: [],
                  metric: metric.type,
                  props: props,
                  refId: target.refId,
                  field: metricField
                };

                for (let i = 0; i < esAgg.buckets.length; i++) {
                  const bucket = esAgg.buckets[i];
                  const stats = bucket[metric.id];
                  const values = stats.top.map(hit => {
                    if (hit.metrics[metricField]) {
                      return hit.metrics[metricField];
                    }

                    return null;
                  });
                  const point = [values[values.length - 1], bucket.key];
                  newSeries.datapoints.push(point);
                }

                seriesList.push(newSeries);
              }
            }

            break;
          }

        default:
          {
            newSeries = {
              datapoints: [],
              metric: metric.type,
              metricId: metric.id,
              props: props,
              refId: target.refId
            };

            if (isMetricAggregationWithField(metric)) {
              newSeries.field = metric.field;
            }

            for (let i = 0; i < esAgg.buckets.length; i++) {
              const bucket = esAgg.buckets[i];
              const value = bucket[metric.id];

              if (value !== undefined) {
                if (value.normalized_value) {
                  newSeries.datapoints.push([value.normalized_value, bucket.key]);
                } else {
                  newSeries.datapoints.push([value.value, bucket.key]);
                }
              }
            }

            seriesList.push(newSeries);
            break;
          }
      }
    }
  }

  processAggregationDocs(esAgg, aggDef, target, table, props) {
    // add columns
    if (table.columns.length === 0) {
      for (const propKey of (0,lodash.keys)(props)) {
        table.addColumn({
          text: propKey,
          filterable: true
        });
      }

      table.addColumn({
        text: aggDef.field,
        filterable: true
      });
    } // helper func to add values to value array


    const addMetricValue = (values, metricName, value) => {
      table.addColumn({
        text: metricName
      });
      values.push(value);
    };

    const buckets = (0,lodash.isArray)(esAgg.buckets) ? esAgg.buckets : [esAgg.buckets];

    for (const bucket of buckets) {
      const values = [];

      for (const propValues of (0,lodash.values)(props)) {
        values.push(propValues);
      } // add bucket key (value)


      values.push(bucket.key);

      for (const metric of target.metrics || []) {
        switch (metric.type) {
          case 'count':
            {
              addMetricValue(values, this.getMetricName(metric.type), bucket.doc_count);
              break;
            }

          case 'extended_stats':
            {
              for (const statName in metric.meta) {
                if (!metric.meta[statName]) {
                  continue;
                }

                const stats = bucket[metric.id]; // add stats that are in nested obj to top level obj

                stats.std_deviation_bounds_upper = stats.std_deviation_bounds.upper;
                stats.std_deviation_bounds_lower = stats.std_deviation_bounds.lower;
                addMetricValue(values, this.getMetricName(statName), stats[statName]);
              }

              break;
            }

          case 'percentiles':
            {
              const percentiles = bucket[metric.id].values;

              for (const percentileName in percentiles) {
                addMetricValue(values, `p${percentileName} ${metric.field}`, percentiles[percentileName]);
              }

              break;
            }

          case 'top_metrics':
            {
              var _metric$settings3;

              const baseName = this.getMetricName(metric.type);

              if ((_metric$settings3 = metric.settings) !== null && _metric$settings3 !== void 0 && _metric$settings3.metrics) {
                for (const metricField of metric.settings.metrics) {
                  // If we selected more than one metric we also add each metric name
                  const metricName = metric.settings.metrics.length > 1 ? `${baseName} ${metricField}` : baseName;
                  const stats = bucket[metric.id]; // Size of top_metrics is fixed to 1.

                  addMetricValue(values, metricName, stats.top[0].metrics[metricField]);
                }
              }

              break;
            }

          default:
            {
              let metricName = this.getMetricName(metric.type);
              const otherMetrics = (0,lodash.filter)(target.metrics, {
                type: metric.type
              }); // if more of the same metric type include field field name in property

              if (otherMetrics.length > 1) {
                if (isMetricAggregationWithField(metric)) {
                  metricName += ' ' + metric.field;
                }

                if (metric.type === 'bucket_script') {
                  //Use the formula in the column name
                  metricName = getScriptValue(metric);
                }
              }

              addMetricValue(values, metricName, bucket[metric.id].value);
              break;
            }
        }
      }

      table.rows.push(values);
    }
  } // This is quite complex
  // need to recurse down the nested buckets to build series


  processBuckets(aggs, target, seriesList, table, props, depth) {
    let bucket, aggDef, esAgg, aggId;
    const maxDepth = target.bucketAggs.length - 1;

    for (aggId in aggs) {
      aggDef = (0,lodash.find)(target.bucketAggs, {
        id: aggId
      });
      esAgg = aggs[aggId];

      if (!aggDef) {
        continue;
      }

      if (depth === maxDepth) {
        if (aggDef.type === 'date_histogram') {
          this.processMetrics(esAgg, target, seriesList, props);
        } else {
          this.processAggregationDocs(esAgg, aggDef, target, table, props);
        }
      } else {
        for (const nameIndex in esAgg.buckets) {
          bucket = esAgg.buckets[nameIndex];
          props = (0,lodash.clone)(props);

          if (bucket.key !== void 0) {
            props[aggDef.field] = bucket.key;
          } else {
            props['filter'] = nameIndex;
          }

          if (bucket.key_as_string) {
            props[aggDef.field] = bucket.key_as_string;
          }

          this.processBuckets(bucket, target, seriesList, table, props, depth + 1);
        }
      }
    }
  }

  getMetricName(metric) {
    const metricDef = Object.entries(metricAggregationConfig).filter(_ref => {
      let [key] = _ref;
      return key === metric;
    }).map(_ref2 => {
      let [_, value] = _ref2;
      return value;
    })[0];

    if (metricDef) {
      return metricDef.label;
    }

    const extendedStat = extendedStats.find(e => e.value === metric);

    if (extendedStat) {
      return extendedStat.label;
    }

    return metric;
  }

  getSeriesName(series, target, dedup) {
    let metricName = this.getMetricName(series.metric);

    if (target.alias) {
      const regex = /\{\{([\s\S]+?)\}\}/g;
      return target.alias.replace(regex, (match, g1, g2) => {
        const group = g1 || g2;

        if (group.indexOf('term ') === 0) {
          return series.props[group.substring(5)];
        }

        if (series.props[group] !== void 0) {
          return series.props[group];
        }

        if (group === 'metric') {
          return metricName;
        }

        if (group === 'field') {
          return series.field || '';
        }

        return match;
      });
    }

    if (isPipelineAgg(series.metric)) {
      if (series.metric && isPipelineAggWithMultipleBucketPaths(series.metric)) {
        const agg = (0,lodash.find)(target.metrics, {
          id: series.metricId
        });

        if (agg && agg.settings.script) {
          metricName = getScriptValue(agg);

          for (const pv of agg.pipelineVariables) {
            const appliedAgg = (0,lodash.find)(target.metrics, {
              id: pv.pipelineAgg
            });

            if (appliedAgg) {
              metricName = metricName.replace('params.' + pv.name, describeMetric(appliedAgg));
            }
          }
        } else {
          metricName = 'Unset';
        }
      } else {
        const appliedAgg = (0,lodash.find)(target.metrics, {
          id: series.field
        });

        if (appliedAgg) {
          metricName += ' ' + describeMetric(appliedAgg);
        } else {
          metricName = 'Unset';
        }
      }
    } else if (series.field) {
      metricName += ' ' + series.field;
    }

    const propKeys = (0,lodash.keys)(series.props);

    if (propKeys.length === 0) {
      return metricName;
    }

    let name = '';

    for (const propName in series.props) {
      name += series.props[propName] + ' ';
    }

    if (dedup) {
      return name.trim() + ' ' + metricName;
    }

    return name.trim();
  }

  nameSeries(seriesList, target) {
    var _target$metrics;

    const metricTypeCount = (0,lodash.uniq)((0,lodash.map)(seriesList, 'metric')).length;
    const hasTopMetricWithMultipleMetrics = ((_target$metrics = target.metrics) === null || _target$metrics === void 0 ? void 0 : _target$metrics.filter(m => m.type === 'top_metrics')).some(m => {
      var _m$settings, _m$settings$metrics;

      return ((m === null || m === void 0 ? void 0 : (_m$settings = m.settings) === null || _m$settings === void 0 ? void 0 : (_m$settings$metrics = _m$settings.metrics) === null || _m$settings$metrics === void 0 ? void 0 : _m$settings$metrics.length) || 0) > 1;
    });

    for (let i = 0; i < seriesList.length; i++) {
      const series = seriesList[i];
      series.target = this.getSeriesName(series, target, metricTypeCount > 1 || hasTopMetricWithMultipleMetrics);
    }
  }

  processHits(hits, seriesList, target) {
    const hitsTotal = typeof hits.total === 'number' ? hits.total : hits.total.value; // <- Works with Elasticsearch 7.0+

    const series = {
      target: target.refId,
      type: 'docs',
      refId: target.refId,
      datapoints: [],
      total: hitsTotal,
      filterable: true
    };
    let propName, hit, doc, i;

    for (i = 0; i < hits.hits.length; i++) {
      hit = hits.hits[i];
      doc = {
        _id: hit._id,
        _type: hit._type,
        _index: hit._index,
        sort: hit.sort,
        highlight: hit.highlight
      };

      if (hit._source) {
        for (propName in hit._source) {
          doc[propName] = hit._source[propName];
        }
      }

      for (propName in hit.fields) {
        doc[propName] = hit.fields[propName];
      }

      series.datapoints.push(doc);
    }

    seriesList.push(series);
  }

  trimDatapoints(aggregations, target) {
    const histogram = (0,lodash.find)(target.bucketAggs, {
      type: 'date_histogram'
    });
    const shouldDropFirstAndLast = histogram && histogram.settings && histogram.settings.trimEdges;

    if (shouldDropFirstAndLast) {
      const trim = histogram.settings.trimEdges;

      for (const prop in aggregations) {
        const points = aggregations[prop];

        if (points.datapoints.length > trim * 2) {
          points.datapoints = points.datapoints.slice(trim, points.datapoints.length - trim);
        }
      }
    }
  }

  getErrorFromElasticResponse(response, err) {
    const result = {};
    result.data = JSON.stringify(err, null, 4);

    if (err.root_cause && err.root_cause.length > 0 && err.root_cause[0].reason) {
      result.message = err.root_cause[0].reason;
    } else {
      result.message = err.reason || 'Unknown elastic error response';
    }

    if (response.$$config) {
      result.config = response.$$config;
    }

    return result;
  }

  getTimeSeries() {
    if (this.targets.some(target => hasMetricOfType(target, 'raw_data'))) {
      return this.processResponseToDataFrames(false);
    }

    return this.processResponseToSeries();
  }

  getLogs(logMessageField, logLevelField) {
    return this.processResponseToDataFrames(true, logMessageField, logLevelField);
  }

  processResponseToDataFrames(isLogsRequest, logMessageField, logLevelField) {
    const dataFrame = [];

    for (let n = 0; n < this.response.responses.length; n++) {
      const response = this.response.responses[n];

      if (response.error) {
        throw this.getErrorFromElasticResponse(this.response, response.error);
      }

      if (response.hits) {
        const {
          propNames,
          docs
        } = flattenHits(response.hits.hits);
        const series = docs.length ? createEmptyDataFrame(propNames.map(toNameTypePair(docs)), isLogsRequest, this.targets[0].timeField, logMessageField, logLevelField) : createEmptyDataFrame([], isLogsRequest);

        if (isLogsRequest) {
          addPreferredVisualisationType(series, 'logs');
        } // Add a row for each document


        for (const doc of docs) {
          if (logLevelField) {
            // Remap level field based on the datasource config. This field is
            // then used in explore to figure out the log level. We may rewrite
            // some actual data in the level field if they are different.
            doc['level'] = doc[logLevelField];
          } // When highlighting exists, we need to collect all the highlighted
          // phrases and add them to the DataFrame's meta.searchWords array.


          if (doc.highlight) {
            var _series$meta;

            // There might be multiple words so we need two versions of the
            // regular expression. One to match gobally, when used with part.match,
            // it returns and array of matches. The second one is used to capture the
            // values between the tags.
            const globalHighlightWordRegex = new RegExp(HIGHLIGHT_TAGS_EXP, 'g');
            const highlightWordRegex = new RegExp(HIGHLIGHT_TAGS_EXP);
            const newSearchWords = Object.keys(doc.highlight).flatMap(key => {
              return doc.highlight[key].flatMap(line => {
                const matchedPhrases = line.match(globalHighlightWordRegex);

                if (!matchedPhrases) {
                  return [];
                }

                return matchedPhrases.map(part => {
                  const matches = part.match(highlightWordRegex);
                  return matches && matches[1] || null;
                });
              });
            }).filter(lodash.identity); // If meta and searchWords already exists, add the words and
            // deduplicate otherwise create a new set of search words.

            const searchWords = (_series$meta = series.meta) !== null && _series$meta !== void 0 && _series$meta.searchWords ? (0,lodash.uniq)([...series.meta.searchWords, ...newSearchWords]) : [...newSearchWords];
            series.meta = series.meta ? Object.assign({}, series.meta, {
              searchWords
            }) : {
              searchWords
            };
          }

          series.add(doc);
        }

        const target = this.targets[n];
        series.refId = target.refId;
        dataFrame.push(series);
      }

      if (response.aggregations) {
        const aggregations = response.aggregations;
        const target = this.targets[n];
        const tmpSeriesList = [];
        const table = new table_model/* default */.Z();
        this.processBuckets(aggregations, target, tmpSeriesList, table, {}, 0);
        this.trimDatapoints(tmpSeriesList, target);
        this.nameSeries(tmpSeriesList, target);

        if (table.rows.length > 0) {
          const series = (0,src.toDataFrame)(table);
          series.refId = target.refId;
          dataFrame.push(series);
        }

        for (let y = 0; y < tmpSeriesList.length; y++) {
          let series = (0,src.toDataFrame)(tmpSeriesList[y]); // When log results, show aggregations only in graph. Log fields are then going to be shown in table.

          if (isLogsRequest) {
            addPreferredVisualisationType(series, 'graph');
          }

          series.refId = target.refId;
          dataFrame.push(series);
        }
      }
    }

    return {
      data: dataFrame
    };
  }

}

/**
 * Flatten the docs from response mainly the _source part which can be nested. This flattens it so that it is one level
 * deep and the keys are: `level1Name.level2Name...`. Also returns list of all properties from all the docs (not all
 * docs have to have the same keys).
 * @param hits
 */
const flattenHits = hits => {
  const docs = []; // We keep a list of all props so that we can create all the fields in the dataFrame, this can lead
  // to wide sparse dataframes in case the scheme is different per document.

  let propNames = [];

  for (const hit of hits) {
    const flattened = hit._source ? (0,flatten["default"])(hit._source) : {};
    const doc = Object.assign({
      _id: hit._id,
      _type: hit._type,
      _index: hit._index,
      sort: hit.sort,
      highlight: hit.highlight,
      _source: Object.assign({}, flattened)
    }, flattened);

    for (const propName of Object.keys(doc)) {
      if (propNames.indexOf(propName) === -1) {
        propNames.push(propName);
      }
    }

    docs.push(doc);
  }

  propNames.sort();
  return {
    docs,
    propNames
  };
};
/**
 * Create empty dataframe but with created fields. Fields are based from propNames (should be from the response) and
 * also from configuration specified fields for message, time, and level.
 * @param propNames
 * @param timeField
 * @param logMessageField
 * @param logLevelField
 */


const createEmptyDataFrame = (props, isLogsRequest, timeField, logMessageField, logLevelField) => {
  const series = new src.MutableDataFrame({
    fields: []
  });

  if (timeField) {
    series.addField({
      config: {
        filterable: true
      },
      name: timeField,
      type: src.FieldType.time
    });
  }

  if (logMessageField) {
    const f = series.addField({
      name: logMessageField,
      type: src.FieldType.string
    });
    series.setParser(f, v => {
      return v || '';
    });
  }

  if (logLevelField) {
    const f = series.addField({
      name: 'level',
      type: src.FieldType.string
    });
    series.setParser(f, v => {
      return v || '';
    });
  }

  const fieldNames = series.fields.map(field => field.name);

  for (const [name, type] of props) {
    // Do not duplicate fields. This can mean that we will shadow some fields.
    if (fieldNames.includes(name)) {
      continue;
    } // Do not add _source field (besides logs) as we are showing each _source field in table instead.


    if (!isLogsRequest && name === '_source') {
      continue;
    }

    const f = series.addField({
      config: {
        filterable: true
      },
      name,
      type
    });
    series.setParser(f, v => {
      return v || '';
    });
  }

  return series;
};

const addPreferredVisualisationType = (series, type) => {
  let s = series;
  s.meta ? s.meta.preferredVisualisationType = type : s.meta = {
    preferredVisualisationType: type
  };
};

const toNameTypePair = docs => propName => {
  var _docs$find;

  return [propName, guessType((_docs$find = docs.find(doc => doc[propName] !== undefined)) === null || _docs$find === void 0 ? void 0 : _docs$find[propName])];
};
/**
 * Trying to guess data type from its value. This is far from perfect, as in order to have accurate guess
 * we should have access to the elasticsearch mapping, but it covers the most common use cases for numbers, strings & arrays.
 */


const guessType = value => {
  switch (typeof value) {
    case 'number':
      return src.FieldType.number;

    case 'string':
      return src.FieldType.string;

    default:
      return src.FieldType.other;
  }
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/index_pattern.ts
function index_pattern_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const intervalMap = {
  Hourly: {
    startOf: 'hour',
    amount: 'hours'
  },
  Daily: {
    startOf: 'day',
    amount: 'days'
  },
  Weekly: {
    startOf: 'isoWeek',
    amount: 'weeks'
  },
  Monthly: {
    startOf: 'month',
    amount: 'months'
  },
  Yearly: {
    startOf: 'year',
    amount: 'years'
  }
};
class IndexPattern {
  constructor(pattern, interval) {
    this.pattern = pattern;
    this.interval = interval;

    index_pattern_defineProperty(this, "dateLocale", 'en');

    this.pattern = pattern;
    this.interval = interval;
  }

  getIndexForToday() {
    if (this.interval) {
      return (0,src.toUtc)().locale(this.dateLocale).format(this.pattern);
    } else {
      return this.pattern;
    }
  }

  getIndexList(from, to) {
    // When no `from` or `to` is provided, we request data from 7 subsequent/previous indices
    // for the provided index pattern.
    // This is useful when requesting log context where the only time data we have is the log
    // timestamp.
    const indexOffset = 7;

    if (!this.interval) {
      return this.pattern;
    }

    const intervalInfo = intervalMap[this.interval];
    const start = (0,src.dateTime)(from || (0,src.dateTime)(to).add(-indexOffset, intervalInfo.amount)).utc().startOf(intervalInfo.startOf);
    const endEpoch = (0,src.dateTime)(to || (0,src.dateTime)(from).add(indexOffset, intervalInfo.amount)).utc().startOf(intervalInfo.startOf).valueOf();
    const indexList = [];

    while (start.valueOf() <= endEpoch) {
      indexList.push(start.locale(this.dateLocale).format(this.pattern));
      start.add(1, intervalInfo.amount);
    }

    return indexList;
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/language_provider.ts
function language_provider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class ElasticsearchLanguageProvider extends src.LanguageProvider {
  constructor(datasource, initialValues) {
    super();

    language_provider_defineProperty(this, "datasource", void 0);

    this.datasource = datasource;
    Object.assign(this, initialValues);
  }
  /**
   * Queries are transformed to an ES Logs query since it's the behaviour most users expect.
   **/


  importFromAbstractQuery(abstractQuery) {
    return {
      metrics: [{
        id: '1',
        type: 'logs'
      }],
      query: this.getElasticsearchQuery(abstractQuery.labelMatchers),
      refId: abstractQuery.refId
    };
  }

  getElasticsearchQuery(labels) {
    return labels.map(label => {
      switch (label.operator) {
        case src.AbstractLabelOperator.Equal:
          {
            return label.name + ':"' + label.value + '"';
          }

        case src.AbstractLabelOperator.NotEqual:
          {
            return 'NOT ' + label.name + ':"' + label.value + '"';
          }

        case src.AbstractLabelOperator.EqualRegEx:
          {
            return label.name + ':/' + label.value + '/';
          }

        case src.AbstractLabelOperator.NotEqualRegEx:
          {
            return 'NOT ' + label.name + ':/' + label.value + '/';
          }
      }
    }).join(' AND ');
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/query_builder.ts
function query_builder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ElasticQueryBuilder {
  constructor(options) {
    query_builder_defineProperty(this, "timeField", void 0);

    query_builder_defineProperty(this, "esVersion", void 0);

    this.timeField = options.timeField;
    this.esVersion = options.esVersion;
  }

  getRangeFilter() {
    const filter = {};
    filter[this.timeField] = {
      gte: '$timeFrom',
      lte: '$timeTo',
      format: 'epoch_millis'
    };
    return filter;
  }

  buildTermsAgg(aggDef, queryNode, target) {
    var _aggDef$settings;

    queryNode.terms = {
      field: aggDef.field
    };

    if (!aggDef.settings) {
      return queryNode;
    } // TODO: This default should be somewhere else together with the one used in the UI


    const size = (_aggDef$settings = aggDef.settings) !== null && _aggDef$settings !== void 0 && _aggDef$settings.size ? parseInt(aggDef.settings.size, 10) : 500;
    queryNode.terms.size = size === 0 ? 500 : size;

    if (aggDef.settings.orderBy !== void 0) {
      queryNode.terms.order = {};

      if (aggDef.settings.orderBy === '_term' && (0,semver.gte)(this.esVersion, '6.0.0')) {
        queryNode.terms.order['_key'] = aggDef.settings.order;
      } else {
        queryNode.terms.order[aggDef.settings.orderBy] = aggDef.settings.order;
      } // if metric ref, look it up and add it to this agg level


      const metricId = convertOrderByToMetricId(aggDef.settings.orderBy);

      if (metricId) {
        for (let metric of target.metrics || []) {
          if (metric.id === metricId) {
            if (metric.type === 'count') {
              queryNode.terms.order = {
                _count: aggDef.settings.order
              };
            } else if (isMetricAggregationWithField(metric)) {
              queryNode.aggs = {};
              queryNode.aggs[metric.id] = {
                [metric.type]: {
                  field: metric.field
                }
              };
            }

            break;
          }
        }
      }
    }

    if (aggDef.settings.min_doc_count !== void 0) {
      queryNode.terms.min_doc_count = parseInt(aggDef.settings.min_doc_count, 10);

      if (isNaN(queryNode.terms.min_doc_count)) {
        queryNode.terms.min_doc_count = aggDef.settings.min_doc_count;
      }
    }

    if (aggDef.settings.missing) {
      queryNode.terms.missing = aggDef.settings.missing;
    }

    return queryNode;
  }

  getDateHistogramAgg(aggDef) {
    const esAgg = {};
    const settings = aggDef.settings || {};
    esAgg.field = aggDef.field || this.timeField;
    esAgg.min_doc_count = settings.min_doc_count || 0;
    esAgg.extended_bounds = {
      min: '$timeFrom',
      max: '$timeTo'
    };
    esAgg.format = 'epoch_millis';

    if (settings.timeZone && settings.timeZone !== src.InternalTimeZones.utc) {
      esAgg.time_zone = settings.timeZone;
    }

    if (settings.offset !== '') {
      esAgg.offset = settings.offset;
    }

    const interval = settings.interval === 'auto' ? '$__interval' : settings.interval;

    if ((0,semver.gte)(this.esVersion, '8.0.0')) {
      // The deprecation was actually introduced in 7.0.0, we might want to use that instead of the removal date,
      // but it woudl be a breaking change on our side.
      esAgg.fixed_interval = interval;
    } else {
      esAgg.interval = interval;
    }

    return esAgg;
  }

  getHistogramAgg(aggDef) {
    const esAgg = {};
    const settings = aggDef.settings || {};
    esAgg.interval = settings.interval;
    esAgg.field = aggDef.field;
    esAgg.min_doc_count = settings.min_doc_count || 0;
    return esAgg;
  }

  getFiltersAgg(aggDef) {
    const filterObj = {};

    for (let {
      query,
      label
    } of ((_aggDef$settings2 = aggDef.settings) === null || _aggDef$settings2 === void 0 ? void 0 : _aggDef$settings2.filters) || []) {
      var _aggDef$settings2;

      filterObj[label || query] = {
        query_string: {
          query: query,
          analyze_wildcard: true
        }
      };
    }

    return filterObj;
  }

  documentQuery(query, size) {
    query.size = size;
    query.sort = [{
      [this.timeField]: {
        order: 'desc',
        unmapped_type: 'boolean'
      }
    }, {
      _doc: {
        order: 'desc'
      }
    }]; // fields field not supported on ES 5.x

    if ((0,semver.lt)(this.esVersion, '5.0.0')) {
      query.fields = ['*', '_source'];
    }

    query.script_fields = {};
    return query;
  }

  addAdhocFilters(query, adhocFilters) {
    if (!adhocFilters) {
      return;
    }

    let i, filter, condition, queryCondition;

    for (i = 0; i < adhocFilters.length; i++) {
      filter = adhocFilters[i];
      condition = {};
      condition[filter.key] = filter.value;
      queryCondition = {};
      queryCondition[filter.key] = {
        query: filter.value
      };

      switch (filter.operator) {
        case '=':
          if (!query.query.bool.must) {
            query.query.bool.must = [];
          }

          query.query.bool.must.push({
            match_phrase: queryCondition
          });
          break;

        case '!=':
          if (!query.query.bool.must_not) {
            query.query.bool.must_not = [];
          }

          query.query.bool.must_not.push({
            match_phrase: queryCondition
          });
          break;

        case '<':
          condition[filter.key] = {
            lt: filter.value
          };
          query.query.bool.filter.push({
            range: condition
          });
          break;

        case '>':
          condition[filter.key] = {
            gt: filter.value
          };
          query.query.bool.filter.push({
            range: condition
          });
          break;

        case '=~':
          query.query.bool.filter.push({
            regexp: condition
          });
          break;

        case '!~':
          query.query.bool.filter.push({
            bool: {
              must_not: {
                regexp: condition
              }
            }
          });
          break;
      }
    }
  }

  build(target, adhocFilters) {
    var _target$metrics, _target$metrics$, _target$metrics2, _target$metrics2$, _metricAgg, _metricAgg2, _metric$settings2, _metric$settings2$met, _metric$settings3;

    // make sure query has defaults;
    target.metrics = target.metrics || [defaultMetricAgg()];
    target.bucketAggs = target.bucketAggs || [defaultBucketAgg()];
    target.timeField = this.timeField;
    let metric;
    let i, j, pv, nestedAggs;
    const query = {
      size: 0,
      query: {
        bool: {
          filter: [{
            range: this.getRangeFilter()
          }]
        }
      }
    };

    if (target.query && target.query !== '') {
      query.query.bool.filter = [...query.query.bool.filter, {
        query_string: {
          analyze_wildcard: true,
          query: target.query
        }
      }];
    }

    this.addAdhocFilters(query, adhocFilters); // If target doesn't have bucketAggs and type is not raw_document, it is invalid query.

    if (target.bucketAggs.length === 0) {
      metric = target.metrics[0];

      if (!metric || !(metric.type === 'raw_document' || metric.type === 'raw_data')) {
        throw {
          message: 'Invalid query'
        };
      }
    }
    /* Handle document query:
     * Check if metric type is raw_document. If metric doesn't have size (or size is 0), update size to 500.
     * Otherwise it will not be a valid query and error will be thrown.
     */


    if (((_target$metrics = target.metrics) === null || _target$metrics === void 0 ? void 0 : (_target$metrics$ = _target$metrics[0]) === null || _target$metrics$ === void 0 ? void 0 : _target$metrics$.type) === 'raw_document' || ((_target$metrics2 = target.metrics) === null || _target$metrics2 === void 0 ? void 0 : (_target$metrics2$ = _target$metrics2[0]) === null || _target$metrics2$ === void 0 ? void 0 : _target$metrics2$.type) === 'raw_data') {
      var _metric$settings;

      metric = target.metrics[0]; // TODO: This default should be somewhere else together with the one used in the UI

      const size = (_metric$settings = metric.settings) !== null && _metric$settings !== void 0 && _metric$settings.size ? parseInt(metric.settings.size, 10) : 500;
      return this.documentQuery(query, size || 500);
    }

    nestedAggs = query;

    for (i = 0; i < target.bucketAggs.length; i++) {
      const aggDef = target.bucketAggs[i];
      const esAgg = {};

      switch (aggDef.type) {
        case 'date_histogram':
          {
            esAgg['date_histogram'] = this.getDateHistogramAgg(aggDef);
            break;
          }

        case 'histogram':
          {
            esAgg['histogram'] = this.getHistogramAgg(aggDef);
            break;
          }

        case 'filters':
          {
            esAgg['filters'] = {
              filters: this.getFiltersAgg(aggDef)
            };
            break;
          }

        case 'terms':
          {
            this.buildTermsAgg(aggDef, esAgg, target);
            break;
          }

        case 'geohash_grid':
          {
            var _aggDef$settings3;

            esAgg['geohash_grid'] = {
              field: aggDef.field,
              precision: (_aggDef$settings3 = aggDef.settings) === null || _aggDef$settings3 === void 0 ? void 0 : _aggDef$settings3.precision
            };
            break;
          }
      }

      nestedAggs.aggs = nestedAggs.aggs || {};
      nestedAggs.aggs[aggDef.id] = esAgg;
      nestedAggs = esAgg;
    }

    nestedAggs.aggs = {};

    for (i = 0; i < target.metrics.length; i++) {
      metric = target.metrics[i];

      if (metric.type === 'count') {
        continue;
      }

      const aggField = {};
      let metricAgg = {};

      if (isPipelineAggregation(metric)) {
        if (isPipelineAggregationWithMultipleBucketPaths(metric)) {
          if (metric.pipelineVariables) {
            metricAgg = {
              buckets_path: {}
            };

            for (j = 0; j < metric.pipelineVariables.length; j++) {
              pv = metric.pipelineVariables[j];

              if (pv.name && pv.pipelineAgg && /^\d*$/.test(pv.pipelineAgg)) {
                const appliedAgg = findMetricById(target.metrics, pv.pipelineAgg);

                if (appliedAgg) {
                  if (appliedAgg.type === 'count') {
                    metricAgg.buckets_path[pv.name] = '_count';
                  } else {
                    metricAgg.buckets_path[pv.name] = pv.pipelineAgg;
                  }
                }
              }
            }
          } else {
            continue;
          }
        } else {
          if (metric.field && /^\d*$/.test(metric.field)) {
            const appliedAgg = findMetricById(target.metrics, metric.field);

            if (appliedAgg) {
              if (appliedAgg.type === 'count') {
                metricAgg = {
                  buckets_path: '_count'
                };
              } else {
                metricAgg = {
                  buckets_path: metric.field
                };
              }
            }
          } else {
            continue;
          }
        }
      } else if (isMetricAggregationWithField(metric)) {
        metricAgg = {
          field: metric.field
        };
      }

      if (isMetricAggregationWithSettings(metric)) {
        Object.entries(metric.settings || {}).filter(_ref => {
          let [_, v] = _ref;
          return v !== null;
        }).forEach(_ref2 => {
          let [k, v] = _ref2;
          metricAgg[k] = k === 'script' ? this.buildScript(getScriptValue(metric)) : v;
        }); // Elasticsearch isn't generally too picky about the data types in the request body,
        // however some fields are required to be numeric.
        // Users might have already created some of those with before, where the values were numbers.

        switch (metric.type) {
          case 'moving_avg':
            metricAgg = Object.assign({}, metricAgg, ((_metricAgg = metricAgg) === null || _metricAgg === void 0 ? void 0 : _metricAgg.window) !== undefined && {
              window: this.toNumber(metricAgg.window)
            }, ((_metricAgg2 = metricAgg) === null || _metricAgg2 === void 0 ? void 0 : _metricAgg2.predict) !== undefined && {
              predict: this.toNumber(metricAgg.predict)
            }, isMovingAverageWithModelSettings(metric) && {
              settings: Object.assign({}, metricAgg.settings, Object.fromEntries(Object.entries(metricAgg.settings || {}) // Only format properties that are required to be numbers
              .filter(_ref3 => {
                let [settingName] = _ref3;
                return ['alpha', 'beta', 'gamma', 'period'].includes(settingName);
              }) // omitting undefined
              .filter(_ref4 => {
                let [_, stringValue] = _ref4;
                return stringValue !== undefined;
              }).map(_ref5 => {
                let [_, stringValue] = _ref5;
                return [_, this.toNumber(stringValue)];
              })))
            });
            break;

          case 'serial_diff':
            metricAgg = Object.assign({}, metricAgg, metricAgg.lag !== undefined && {
              lag: this.toNumber(metricAgg.lag)
            });
            break;

          case 'top_metrics':
            metricAgg = {
              metrics: (_metric$settings2 = metric.settings) === null || _metric$settings2 === void 0 ? void 0 : (_metric$settings2$met = _metric$settings2.metrics) === null || _metric$settings2$met === void 0 ? void 0 : _metric$settings2$met.map(field => ({
                field
              })),
              size: 1
            };

            if ((_metric$settings3 = metric.settings) !== null && _metric$settings3 !== void 0 && _metric$settings3.orderBy) {
              var _metric$settings4, _metric$settings5;

              metricAgg.sort = [{
                [(_metric$settings4 = metric.settings) === null || _metric$settings4 === void 0 ? void 0 : _metric$settings4.orderBy]: (_metric$settings5 = metric.settings) === null || _metric$settings5 === void 0 ? void 0 : _metric$settings5.order
              }];
            }

            break;
        }
      }

      aggField[metric.type] = metricAgg;
      nestedAggs.aggs[metric.id] = aggField;
    }

    return query;
  }

  buildScript(script) {
    if ((0,semver.gte)(this.esVersion, '5.6.0')) {
      return script;
    }

    return {
      inline: script
    };
  }

  toNumber(stringValue) {
    const parsedValue = parseFloat(`${stringValue}`);

    if (isNaN(parsedValue)) {
      return stringValue;
    }

    return parsedValue;
  }

  getTermsQuery(queryDef) {
    const query = {
      size: 0,
      query: {
        bool: {
          filter: [{
            range: this.getRangeFilter()
          }]
        }
      }
    };

    if (queryDef.query) {
      query.query.bool.filter.push({
        query_string: {
          analyze_wildcard: true,
          query: queryDef.query
        }
      });
    }

    let size = 500;

    if (queryDef.size) {
      size = queryDef.size;
    }

    query.aggs = {
      '1': {
        terms: {
          field: queryDef.field,
          size: size,
          order: {}
        }
      }
    }; // Default behaviour is to order results by { _key: asc }
    // queryDef.order allows selection of asc/desc
    // queryDef.orderBy allows selection of doc_count ordering (defaults desc)

    const {
      orderBy = 'key',
      order = orderBy === 'doc_count' ? 'desc' : 'asc'
    } = queryDef;

    if (['asc', 'desc'].indexOf(order) < 0) {
      throw {
        message: `Invalid query sort order ${order}`
      };
    }

    switch (orderBy) {
      case 'key':
      case 'term':
        const keyname = (0,semver.gte)(this.esVersion, '6.0.0') ? '_key' : '_term';
        query.aggs['1'].terms.order[keyname] = order;
        break;

      case 'doc_count':
        query.aggs['1'].terms.order['_count'] = order;
        break;

      default:
        throw {
          message: `Invalid query sort type ${orderBy}`
        };
    }

    return query;
  }

  getLogsQuery(target, limit, adhocFilters) {
    let query = {
      size: 0,
      query: {
        bool: {
          filter: [{
            range: this.getRangeFilter()
          }]
        }
      }
    };
    this.addAdhocFilters(query, adhocFilters);

    if (target.query) {
      query.query.bool.filter.push({
        query_string: {
          analyze_wildcard: true,
          query: target.query
        }
      });
    }

    query = this.documentQuery(query, limit);
    return Object.assign({}, query, {
      aggs: this.build(target, null).aggs,
      highlight: {
        fields: {
          '*': {}
        },
        pre_tags: [highlightTags.pre],
        post_tags: [highlightTags.post],
        fragment_size: 2147483647
      }
    });
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/datasource.ts
function datasource_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















 // Those are metadata fields as defined in https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-fields.html#_identity_metadata_fields.
// custom fields can start with underscores, therefore is not safe to exclude anything that starts with one.

const ELASTIC_META_FIELDS = ['_index', '_type', '_id', '_source', '_size', '_field_names', '_ignored', '_routing', '_meta'];
class ElasticDatasource extends src.DataSourceApi {
  constructor(instanceSettings) {
    var _instanceSettings$dat, _settingsData$include;

    let templateSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,template_srv/* getTemplateSrv */.J)();
    super(instanceSettings);
    this.templateSrv = templateSrv;

    datasource_defineProperty(this, "basicAuth", void 0);

    datasource_defineProperty(this, "withCredentials", void 0);

    datasource_defineProperty(this, "url", void 0);

    datasource_defineProperty(this, "name", void 0);

    datasource_defineProperty(this, "index", void 0);

    datasource_defineProperty(this, "timeField", void 0);

    datasource_defineProperty(this, "esVersion", void 0);

    datasource_defineProperty(this, "xpack", void 0);

    datasource_defineProperty(this, "interval", void 0);

    datasource_defineProperty(this, "maxConcurrentShardRequests", void 0);

    datasource_defineProperty(this, "queryBuilder", void 0);

    datasource_defineProperty(this, "indexPattern", void 0);

    datasource_defineProperty(this, "logMessageField", void 0);

    datasource_defineProperty(this, "logLevelField", void 0);

    datasource_defineProperty(this, "dataLinks", void 0);

    datasource_defineProperty(this, "languageProvider", void 0);

    datasource_defineProperty(this, "includeFrozen", void 0);

    datasource_defineProperty(this, "getLogRowContext", async (row, options) => {
      var _options$limit;

      const sortField = row.dataFrame.fields.find(f => f.name === 'sort');
      const searchAfter = (sortField === null || sortField === void 0 ? void 0 : sortField.values.get(row.rowIndex)) || [row.timeEpochMs];
      const sort = (options === null || options === void 0 ? void 0 : options.direction) === 'FORWARD' ? 'asc' : 'desc';
      const header = (options === null || options === void 0 ? void 0 : options.direction) === 'FORWARD' ? this.getQueryHeader('query_then_fetch', (0,src.dateTime)(row.timeEpochMs)) : this.getQueryHeader('query_then_fetch', undefined, (0,src.dateTime)(row.timeEpochMs));
      const limit = (_options$limit = options === null || options === void 0 ? void 0 : options.limit) !== null && _options$limit !== void 0 ? _options$limit : 10;
      const esQuery = JSON.stringify({
        size: limit,
        query: {
          bool: {
            filter: [{
              range: {
                [this.timeField]: {
                  [(options === null || options === void 0 ? void 0 : options.direction) === 'FORWARD' ? 'gte' : 'lte']: row.timeEpochMs,
                  format: 'epoch_millis'
                }
              }
            }]
          }
        },
        sort: [{
          [this.timeField]: sort
        }, {
          _doc: sort
        }],
        search_after: searchAfter
      });
      const payload = [header, esQuery].join('\n') + '\n';
      const url = this.getMultiSearchUrl();
      const response = await (0,lastValueFrom/* lastValueFrom */.n)(this.post(url, payload));
      const targets = [{
        refId: `${row.dataFrame.refId}`,
        metrics: [{
          type: 'logs',
          id: '1'
        }]
      }];
      const elasticResponse = new ElasticResponse(targets, transformHitsBasedOnDirection(response, sort));
      const logResponse = elasticResponse.getLogs(this.logMessageField, this.logLevelField);

      const dataFrame = (0,lodash.first)(logResponse.data);

      if (!dataFrame) {
        return {
          data: []
        };
      }
      /**
       * The LogRowContextProvider requires there is a field in the dataFrame.fields
       * named `ts` for timestamp and `line` for the actual log line to display.
       * Unfortunatly these fields are hardcoded and are required for the lines to
       * be properly displayed. This code just copies the fields based on this.timeField
       * and this.logMessageField and recreates the dataFrame so it works.
       */


      const timestampField = dataFrame.fields.find(f => f.name === this.timeField);
      const lineField = dataFrame.fields.find(f => f.name === this.logMessageField);

      if (timestampField && lineField) {
        return {
          data: [Object.assign({}, dataFrame, {
            fields: [...dataFrame.fields, Object.assign({}, timestampField, {
              name: 'ts'
            }), Object.assign({}, lineField, {
              name: 'line'
            })]
          })]
        };
      }

      return logResponse;
    });

    this.templateSrv = templateSrv;
    this.basicAuth = instanceSettings.basicAuth;
    this.withCredentials = instanceSettings.withCredentials;
    this.url = instanceSettings.url;
    this.name = instanceSettings.name;
    this.index = (_instanceSettings$dat = instanceSettings.database) !== null && _instanceSettings$dat !== void 0 ? _instanceSettings$dat : '';
    const settingsData = instanceSettings.jsonData || {};
    this.timeField = settingsData.timeField;
    this.esVersion = coerceESVersion(settingsData.esVersion);
    this.xpack = Boolean(settingsData.xpack);
    this.indexPattern = new IndexPattern(this.index, settingsData.interval);
    this.interval = settingsData.timeInterval;
    this.maxConcurrentShardRequests = settingsData.maxConcurrentShardRequests;
    this.queryBuilder = new ElasticQueryBuilder({
      timeField: this.timeField,
      esVersion: this.esVersion
    });
    this.logMessageField = settingsData.logMessageField || '';
    this.logLevelField = settingsData.logLevelField || '';
    this.dataLinks = settingsData.dataLinks || [];
    this.includeFrozen = (_settingsData$include = settingsData.includeFrozen) !== null && _settingsData$include !== void 0 ? _settingsData$include : false;

    if (this.logMessageField === '') {
      this.logMessageField = undefined;
    }

    if (this.logLevelField === '') {
      this.logLevelField = undefined;
    }

    this.languageProvider = new ElasticsearchLanguageProvider(this);
  }

  request(method, url, data, headers) {
    if (!isSupportedVersion(this.esVersion)) {
      const error = new Error('Support for Elasticsearch versions after their end-of-life (currently versions < 7.10) was removed.');
      return (0,throwError/* throwError */._)(() => error);
    }

    const options = {
      url: this.url + '/' + url,
      method,
      data,
      headers
    };

    if (this.basicAuth || this.withCredentials) {
      options.withCredentials = true;
    }

    if (this.basicAuth) {
      options.headers = {
        Authorization: this.basicAuth
      };
    }

    return (0,grafana_runtime_src.getBackendSrv)().fetch(options).pipe((0,map/* map */.U)(results => {
      results.data.$$config = results.config;
      return results.data;
    }), (0,catchError/* catchError */.K)(err => {
      if (err.data) {
        var _ref, _err$data$error$reaso, _err$data$error;

        const message = (_ref = (_err$data$error$reaso = (_err$data$error = err.data.error) === null || _err$data$error === void 0 ? void 0 : _err$data$error.reason) !== null && _err$data$error$reaso !== void 0 ? _err$data$error$reaso : err.data.message) !== null && _ref !== void 0 ? _ref : 'Unknown error';
        return (0,throwError/* throwError */._)({
          message: 'Elasticsearch error: ' + message,
          error: err.data.error
        });
      }

      return (0,throwError/* throwError */._)(err);
    }));
  }

  async importFromAbstractQueries(abstractQueries) {
    return abstractQueries.map(abstractQuery => this.languageProvider.importFromAbstractQuery(abstractQuery));
  }
  /**
   * Sends a GET request to the specified url on the newest matching and available index.
   *
   * When multiple indices span the provided time range, the request is sent starting from the newest index,
   * and then going backwards until an index is found.
   *
   * @param url the url to query the index on, for example `/_mapping`.
   */


  get(url) {
    let range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,src.getDefaultTimeRange)();
    let indexList = this.indexPattern.getIndexList(range.from, range.to);

    if (!Array.isArray(indexList)) {
      indexList = [this.indexPattern.getIndexForToday()];
    }

    const indexUrlList = indexList.map(index => index + url);
    return this.requestAllIndices(indexUrlList);
  }

  requestAllIndices(indexList) {
    const maxTraversals = 7; // do not go beyond one week (for a daily pattern)

    const listLen = indexList.length;
    return (0,generate/* generate */.R)({
      initialState: 0,
      condition: i => i < Math.min(listLen, maxTraversals),
      iterate: i => i + 1
    }).pipe((0,mergeMap/* mergeMap */.z)(index => {
      // catch all errors and emit an object with an err property to simplify checks later in the pipeline
      return this.request('GET', indexList[listLen - index - 1]).pipe((0,catchError/* catchError */.K)(err => (0,of.of)({
        err
      })));
    }), (0,skipWhile/* skipWhile */.n)(resp => {
      var _resp$err;

      return (resp === null || resp === void 0 ? void 0 : (_resp$err = resp.err) === null || _resp$err === void 0 ? void 0 : _resp$err.status) === 404;
    }), // skip all requests that fail because missing Elastic index
    (0,throwIfEmpty/* throwIfEmpty */.T)(() => 'Could not find an available index for this time range.'), // when i === Math.min(listLen, maxTraversals) generate will complete but without emitting any values which means we didn't find a valid index
    (0,first/* first */.P)(), // take the first value that isn't skipped
    (0,map/* map */.U)(resp => {
      if (resp.err) {
        throw resp.err; // if there is some other error except 404 then we must throw it
      }

      return resp;
    }));
  }

  post(url, data) {
    return this.request('POST', url, data, {
      'Content-Type': 'application/x-ndjson'
    });
  }

  annotationQuery(options) {
    const annotation = options.annotation;
    const timeField = annotation.timeField || '@timestamp';
    const timeEndField = annotation.timeEndField || null;
    const queryString = annotation.query;
    const tagsField = annotation.tagsField || 'tags';
    const textField = annotation.textField || null;
    const dateRanges = [];
    const rangeStart = {};
    rangeStart[timeField] = {
      from: options.range.from.valueOf(),
      to: options.range.to.valueOf(),
      format: 'epoch_millis'
    };
    dateRanges.push({
      range: rangeStart
    });

    if (timeEndField) {
      const rangeEnd = {};
      rangeEnd[timeEndField] = {
        from: options.range.from.valueOf(),
        to: options.range.to.valueOf(),
        format: 'epoch_millis'
      };
      dateRanges.push({
        range: rangeEnd
      });
    }

    const queryInterpolated = this.interpolateLuceneQuery(queryString);
    const query = {
      bool: {
        filter: [{
          bool: {
            should: dateRanges,
            minimum_should_match: 1
          }
        }]
      }
    };

    if (queryInterpolated) {
      query.bool.filter.push({
        query_string: {
          query: queryInterpolated
        }
      });
    }

    const data = {
      query,
      size: 10000
    }; // fields field not supported on ES 5.x

    if ((0,semver.lt)(this.esVersion, '5.0.0')) {
      data['fields'] = [timeField, '_source'];
    }

    const header = {
      search_type: 'query_then_fetch',
      ignore_unavailable: true
    }; // old elastic annotations had index specified on them

    if (annotation.index) {
      header.index = annotation.index;
    } else {
      header.index = this.indexPattern.getIndexList(options.range.from, options.range.to);
    }

    const payload = JSON.stringify(header) + '\n' + JSON.stringify(data) + '\n';
    return (0,lastValueFrom/* lastValueFrom */.n)(this.post('_msearch', payload).pipe((0,map/* map */.U)(res => {
      const list = [];
      const hits = res.responses[0].hits.hits;

      const getFieldFromSource = (source, fieldName) => {
        if (!fieldName) {
          return;
        }

        const fieldNames = fieldName.split('.');
        let fieldValue = source;

        for (let i = 0; i < fieldNames.length; i++) {
          fieldValue = fieldValue[fieldNames[i]];

          if (!fieldValue) {
            console.log('could not find field in annotation: ', fieldName);
            return '';
          }
        }

        return fieldValue;
      };

      for (let i = 0; i < hits.length; i++) {
        const source = hits[i]._source;
        let time = getFieldFromSource(source, timeField);

        if (typeof hits[i].fields !== 'undefined') {
          const fields = hits[i].fields;

          if ((0,lodash.isString)(fields[timeField]) || (0,lodash.isNumber)(fields[timeField])) {
            time = fields[timeField];
          }
        }

        const event = {
          annotation: annotation,
          time: (0,src.toUtc)(time).valueOf(),
          text: getFieldFromSource(source, textField),
          tags: getFieldFromSource(source, tagsField)
        };

        if (timeEndField) {
          const timeEnd = getFieldFromSource(source, timeEndField);

          if (timeEnd) {
            event.timeEnd = (0,src.toUtc)(timeEnd).valueOf();
          }
        } // legacy support for title tield


        if (annotation.titleField) {
          const title = getFieldFromSource(source, annotation.titleField);

          if (title) {
            event.text = title + '\n' + event.text;
          }
        }

        if (typeof event.tags === 'string') {
          event.tags = event.tags.split(',');
        }

        list.push(event);
      }

      return list;
    })));
  }

  interpolateLuceneQuery(queryString, scopedVars) {
    return this.templateSrv.replace(queryString, scopedVars, 'lucene');
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    // We need a separate interpolation format for lucene queries, therefore we first interpolate any
    // lucene query string and then everything else
    const interpolateBucketAgg = bucketAgg => {
      if (bucketAgg.type === 'filters') {
        var _bucketAgg$settings, _bucketAgg$settings$f;

        return Object.assign({}, bucketAgg, {
          settings: Object.assign({}, bucketAgg.settings, {
            filters: (_bucketAgg$settings = bucketAgg.settings) === null || _bucketAgg$settings === void 0 ? void 0 : (_bucketAgg$settings$f = _bucketAgg$settings.filters) === null || _bucketAgg$settings$f === void 0 ? void 0 : _bucketAgg$settings$f.map(filter => Object.assign({}, filter, {
              query: this.interpolateLuceneQuery(filter.query, scopedVars) || '*'
            }))
          })
        });
      }

      return bucketAgg;
    };

    const expandedQueries = queries.map(query => {
      var _query$bucketAggs;

      return Object.assign({}, query, {
        datasource: this.getRef(),
        query: this.interpolateLuceneQuery(query.query || '', scopedVars),
        bucketAggs: (_query$bucketAggs = query.bucketAggs) === null || _query$bucketAggs === void 0 ? void 0 : _query$bucketAggs.map(interpolateBucketAgg)
      });
    });
    const finalQueries = JSON.parse(this.templateSrv.replace(JSON.stringify(expandedQueries), scopedVars));
    return finalQueries;
  }

  testDatasource() {
    // validate that the index exist and has date field
    return (0,lastValueFrom/* lastValueFrom */.n)(this.getFields(['date']).pipe((0,mergeMap/* mergeMap */.z)(dateFields => {
      const timeField = (0,lodash.find)(dateFields, {
        text: this.timeField
      });

      if (!timeField) {
        return (0,of.of)({
          status: 'error',
          message: 'No date field named ' + this.timeField + ' found'
        });
      }

      return (0,of.of)({
        status: 'success',
        message: 'Index OK. Time field name OK.'
      });
    }), (0,catchError/* catchError */.K)(err => {
      console.error(err);

      if (err.message) {
        return (0,of.of)({
          status: 'error',
          message: err.message
        });
      } else {
        return (0,of.of)({
          status: 'error',
          message: err.status
        });
      }
    })));
  }

  getQueryHeader(searchType, timeFrom, timeTo) {
    const queryHeader = {
      search_type: searchType,
      ignore_unavailable: true,
      index: this.indexPattern.getIndexList(timeFrom, timeTo)
    };

    if ((0,semver.satisfies)(this.esVersion, '>=5.6.0 <7.0.0')) {
      queryHeader['max_concurrent_shard_requests'] = this.maxConcurrentShardRequests;
    }

    return JSON.stringify(queryHeader);
  }

  getQueryDisplayText(query) {
    // TODO: This might be refactored a bit.
    const metricAggs = query.metrics;
    const bucketAggs = query.bucketAggs;
    let text = '';

    if (query.query) {
      text += 'Query: ' + query.query + ', ';
    }

    text += 'Metrics: ';
    text += metricAggs === null || metricAggs === void 0 ? void 0 : metricAggs.reduce((acc, metric) => {
      const metricConfig = metricAggregationConfig[metric.type];
      let text = metricConfig.label + '(';

      if (isMetricAggregationWithField(metric)) {
        text += metric.field;
      }

      if (isPipelineAggregationWithMultipleBucketPaths(metric)) {
        text += getScriptValue(metric).replace(new RegExp('params.', 'g'), '');
      }

      text += '), ';
      return `${acc} ${text}`;
    }, '');
    text += bucketAggs === null || bucketAggs === void 0 ? void 0 : bucketAggs.reduce((acc, bucketAgg, index) => {
      const bucketConfig = bucketAggregationConfig[bucketAgg.type];
      let text = '';

      if (index === 0) {
        text += ' Group by: ';
      }

      text += bucketConfig.label + '(';

      if (isBucketAggregationWithField(bucketAgg)) {
        text += bucketAgg.field;
      }

      return `${acc} ${text}), `;
    }, '');

    if (query.alias) {
      text += 'Alias: ' + query.alias;
    }

    return text;
  }
  /**
   * This method checks to ensure the user is running a 5.0+ cluster. This is
   * necessary bacause the query being used for the getLogRowContext relies on the
   * search_after feature.
   */


  showContextToggle() {
    return (0,semver.gte)(this.esVersion, '5.0.0');
  }

  getLogsVolumeDataProvider(request) {
    const isLogsVolumeAvailable = request.targets.some(target => {
      var _target$metrics;

      return ((_target$metrics = target.metrics) === null || _target$metrics === void 0 ? void 0 : _target$metrics.length) === 1 && target.metrics[0].type === 'logs';
    });

    if (!isLogsVolumeAvailable) {
      return undefined;
    }

    const logsVolumeRequest = (0,lodash.cloneDeep)(request);
    logsVolumeRequest.targets = logsVolumeRequest.targets.map(target => {
      var _this$timeField;

      const bucketAggs = [];
      const timeField = (_this$timeField = this.timeField) !== null && _this$timeField !== void 0 ? _this$timeField : '@timestamp';

      if (this.logLevelField) {
        bucketAggs.push({
          id: '2',
          type: 'terms',
          settings: {
            min_doc_count: '0',
            size: '0',
            order: 'desc',
            orderBy: '_count',
            missing: src.LogLevel.unknown
          },
          field: this.logLevelField
        });
      }

      bucketAggs.push({
        id: '3',
        type: 'date_histogram',
        settings: {
          interval: 'auto',
          min_doc_count: '0',
          trimEdges: '0'
        },
        field: timeField
      });
      const logsVolumeQuery = {
        refId: target.refId,
        query: target.query,
        metrics: [{
          type: 'count',
          id: '1'
        }],
        timeField,
        bucketAggs
      };
      return logsVolumeQuery;
    });
    return (0,logs_model/* queryLogsVolume */.Bz)(this, logsVolumeRequest, {
      range: request.range,
      targets: request.targets,
      extractLevel: dataFrame => (0,src.getLogLevelFromKey)(dataFrame.name || '')
    });
  }

  query(options) {
    let payload = '';
    const targets = this.interpolateVariablesInQueries((0,lodash.cloneDeep)(options.targets), options.scopedVars);
    const sentTargets = [];
    let targetsContainsLogsQuery = targets.some(target => hasMetricOfType(target, 'logs')); // add global adhoc filters to timeFilter

    const adhocFilters = this.templateSrv.getAdhocFilters(this.name);
    const logLimits = [];

    for (const target of targets) {
      if (target.hide) {
        continue;
      }

      let queryObj;

      if (hasMetricOfType(target, 'logs')) {
        var _target$metrics2, _log$settings, _log$settings2;

        // FIXME: All this logic here should be in the query builder.
        // When moving to the BE-only implementation we should remove this and let the BE
        // Handle this.
        // TODO: defaultBucketAgg creates a dete_histogram aggregation without a field, so it fallbacks to
        // the configured timeField. we should allow people to use a different time field here.
        target.bucketAggs = [defaultBucketAgg()];
        const log = (_target$metrics2 = target.metrics) === null || _target$metrics2 === void 0 ? void 0 : _target$metrics2.find(m => m.type === 'logs');
        const limit = (_log$settings = log.settings) !== null && _log$settings !== void 0 && _log$settings.limit ? parseInt((_log$settings2 = log.settings) === null || _log$settings2 === void 0 ? void 0 : _log$settings2.limit, 10) : 500;
        logLimits.push(limit);
        target.metrics = []; // Setting this for metrics queries that are typed as logs

        queryObj = this.queryBuilder.getLogsQuery(target, limit, adhocFilters);
      } else {
        logLimits.push();

        if (target.alias) {
          target.alias = this.interpolateLuceneQuery(target.alias, options.scopedVars);
        }

        queryObj = this.queryBuilder.build(target, adhocFilters);
      }

      const esQuery = JSON.stringify(queryObj);
      const searchType = queryObj.size === 0 && (0,semver.lt)(this.esVersion, '5.0.0') ? 'count' : 'query_then_fetch';
      const header = this.getQueryHeader(searchType, options.range.from, options.range.to);
      payload += header + '\n';
      payload += esQuery + '\n';
      sentTargets.push(target);
    }

    if (sentTargets.length === 0) {
      return (0,of.of)({
        data: []
      });
    } // We replace the range here for actual values. We need to replace it together with enclosing "" so that we replace
    // it as an integer not as string with digits. This is because elastic will convert the string only if the time
    // field is specified as type date (which probably should) but can also be specified as integer (millisecond epoch)
    // and then sending string will error out.


    payload = payload.replace(/"\$timeFrom"/g, options.range.from.valueOf().toString());
    payload = payload.replace(/"\$timeTo"/g, options.range.to.valueOf().toString());
    payload = this.templateSrv.replace(payload, options.scopedVars);
    const url = this.getMultiSearchUrl();
    return this.post(url, payload).pipe((0,map/* map */.U)(res => {
      const er = new ElasticResponse(sentTargets, res); // TODO: This needs to be revisited, it seems wrong to process ALL the sent queries as logs if only one of them was a log query

      if (targetsContainsLogsQuery) {
        const response = er.getLogs(this.logMessageField, this.logLevelField);
        response.data.forEach((dataFrame, index) => {
          enhanceDataFrame(dataFrame, this.dataLinks, logLimits[index]);
        });
        return response;
      }

      return er.getTimeSeries();
    }));
  }

  isMetadataField(fieldName) {
    return ELASTIC_META_FIELDS.includes(fieldName);
  } // TODO: instead of being a string, this could be a custom type representing all the elastic types
  // FIXME: This doesn't seem to return actual MetricFindValues, we should either change the return type
  // or fix the implementation.


  getFields(type, range) {
    const typeMap = {
      float: 'number',
      double: 'number',
      integer: 'number',
      long: 'number',
      date: 'date',
      date_nanos: 'date',
      string: 'string',
      text: 'string',
      scaled_float: 'number',
      nested: 'nested',
      histogram: 'number'
    };
    return this.get('/_mapping', range).pipe((0,map/* map */.U)(result => {
      const shouldAddField = (obj, key) => {
        if (this.isMetadataField(key)) {
          return false;
        }

        if (!type || type.length === 0) {
          return true;
        } // equal query type filter, or via typemap translation


        return type.includes(obj.type) || type.includes(typeMap[obj.type]);
      }; // Store subfield names: [system, process, cpu, total] -> system.process.cpu.total


      const fieldNameParts = [];
      const fields = {};

      function getFieldsRecursively(obj) {
        for (const key in obj) {
          const subObj = obj[key]; // Check mapping field for nested fields

          if ((0,lodash.isObject)(subObj.properties)) {
            fieldNameParts.push(key);
            getFieldsRecursively(subObj.properties);
          }

          if ((0,lodash.isObject)(subObj.fields)) {
            fieldNameParts.push(key);
            getFieldsRecursively(subObj.fields);
          }

          if ((0,lodash.isString)(subObj.type)) {
            const fieldName = fieldNameParts.concat(key).join('.'); // Hide meta-fields and check field type

            if (shouldAddField(subObj, key)) {
              fields[fieldName] = {
                text: fieldName,
                type: subObj.type
              };
            }
          }
        }

        fieldNameParts.pop();
      }

      for (const indexName in result) {
        const index = result[indexName];

        if (index && index.mappings) {
          const mappings = index.mappings;

          if ((0,semver.lt)(this.esVersion, '7.0.0')) {
            for (const typeName in mappings) {
              const properties = mappings[typeName].properties;
              getFieldsRecursively(properties);
            }
          } else {
            const properties = mappings.properties;
            getFieldsRecursively(properties);
          }
        }
      } // transform to array


      return (0,lodash.map)(fields, value => {
        return value;
      });
    }));
  }

  getTerms(queryDef) {
    let range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,src.getDefaultTimeRange)();
    const searchType = (0,semver.gte)(this.esVersion, '5.0.0') ? 'query_then_fetch' : 'count';
    const header = this.getQueryHeader(searchType, range.from, range.to);
    let esQuery = JSON.stringify(this.queryBuilder.getTermsQuery(queryDef));
    esQuery = esQuery.replace(/\$timeFrom/g, range.from.valueOf().toString());
    esQuery = esQuery.replace(/\$timeTo/g, range.to.valueOf().toString());
    esQuery = header + '\n' + esQuery + '\n';
    const url = this.getMultiSearchUrl();
    return this.post(url, esQuery).pipe((0,map/* map */.U)(res => {
      if (!res.responses[0].aggregations) {
        return [];
      }

      const buckets = res.responses[0].aggregations['1'].buckets;
      return (0,lodash.map)(buckets, bucket => {
        return {
          text: bucket.key_as_string || bucket.key,
          value: bucket.key
        };
      });
    }));
  }

  getMultiSearchUrl() {
    const searchParams = new URLSearchParams();

    if ((0,semver.gte)(this.esVersion, '7.0.0') && this.maxConcurrentShardRequests) {
      searchParams.append('max_concurrent_shard_requests', `${this.maxConcurrentShardRequests}`);
    }

    if ((0,semver.gte)(this.esVersion, '6.6.0') && this.xpack && this.includeFrozen) {
      searchParams.append('ignore_throttled', 'false');
    }

    return ('_msearch?' + searchParams.toString()).replace(/\?$/, '');
  }

  metricFindQuery(query, options) {
    const range = options === null || options === void 0 ? void 0 : options.range;
    const parsedQuery = JSON.parse(query);

    if (query) {
      if (parsedQuery.find === 'fields') {
        parsedQuery.type = this.interpolateLuceneQuery(parsedQuery.type);
        return (0,lastValueFrom/* lastValueFrom */.n)(this.getFields(parsedQuery.type, range));
      }

      if (parsedQuery.find === 'terms') {
        parsedQuery.field = this.interpolateLuceneQuery(parsedQuery.field);
        parsedQuery.query = this.interpolateLuceneQuery(parsedQuery.query);
        return (0,lastValueFrom/* lastValueFrom */.n)(this.getTerms(parsedQuery, range));
      }
    }

    return Promise.resolve([]);
  }

  getTagKeys() {
    return (0,lastValueFrom/* lastValueFrom */.n)(this.getFields());
  }

  getTagValues(options) {
    return (0,lastValueFrom/* lastValueFrom */.n)(this.getTerms({
      field: options.key
    }));
  }

  targetContainsTemplate(target) {
    if (this.templateSrv.containsTemplate(target.query) || this.templateSrv.containsTemplate(target.alias)) {
      return true;
    }

    for (const bucketAgg of target.bucketAggs) {
      if (this.templateSrv.containsTemplate(bucketAgg.field) || this.objectContainsTemplate(bucketAgg.settings)) {
        return true;
      }
    }

    for (const metric of target.metrics) {
      if (this.templateSrv.containsTemplate(metric.field) || this.objectContainsTemplate(metric.settings) || this.objectContainsTemplate(metric.meta)) {
        return true;
      }
    }

    return false;
  }

  isPrimitive(obj) {
    if (obj === null || obj === undefined) {
      return true;
    }

    if (['string', 'number', 'boolean'].some(type => type === typeof true)) {
      return true;
    }

    return false;
  }

  objectContainsTemplate(obj) {
    if (!obj) {
      return false;
    }

    for (const key of Object.keys(obj)) {
      if (this.isPrimitive(obj[key])) {
        if (this.templateSrv.containsTemplate(obj[key])) {
          return true;
        }
      } else if (Array.isArray(obj[key])) {
        for (const item of obj[key]) {
          if (this.objectContainsTemplate(item)) {
            return true;
          }
        }
      } else {
        if (this.objectContainsTemplate(obj[key])) {
          return true;
        }
      }
    }

    return false;
  }

}
/**
 * Modifies dataframe and adds dataLinks from the config.
 * Exported for tests.
 */

function enhanceDataFrame(dataFrame, dataLinks, limit) {
  if (limit) {
    dataFrame.meta = Object.assign({}, dataFrame.meta, {
      limit
    });
  }

  if (!dataLinks.length) {
    return;
  }

  for (const field of dataFrame.fields) {
    const linksToApply = dataLinks.filter(dataLink => new RegExp(dataLink.field).test(field.name));

    if (linksToApply.length === 0) {
      continue;
    }

    field.config = field.config || {};
    field.config.links = [...(field.config.links || [], linksToApply.map(generateDataLink))];
  }
}

function generateDataLink(linkConfig) {
  const dataSourceSrv = (0,grafana_runtime_src.getDataSourceSrv)();

  if (linkConfig.datasourceUid) {
    var _dsSettings$name;

    const dsSettings = dataSourceSrv.getInstanceSettings(linkConfig.datasourceUid);
    return {
      title: linkConfig.urlDisplayLabel || '',
      url: '',
      internal: {
        query: {
          query: linkConfig.url
        },
        datasourceUid: linkConfig.datasourceUid,
        datasourceName: (_dsSettings$name = dsSettings === null || dsSettings === void 0 ? void 0 : dsSettings.name) !== null && _dsSettings$name !== void 0 ? _dsSettings$name : 'Data source not found'
      }
    };
  } else {
    return {
      title: linkConfig.urlDisplayLabel || '',
      url: linkConfig.url
    };
  }
}

function transformHitsBasedOnDirection(response, direction) {
  if (direction === 'desc') {
    return response;
  }

  const actualResponse = response.responses[0];
  return Object.assign({}, response, {
    responses: [Object.assign({}, actualResponse, {
      hits: Object.assign({}, actualResponse.hits, {
        hits: actualResponse.hits.hits.reverse()
      })
    })]
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/elasticsearch/module.ts
function module_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ElasticAnnotationsQueryCtrl {}

module_defineProperty(ElasticAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const module_plugin = new src.DataSourcePlugin(ElasticDatasource).setQueryEditor(QueryEditor).setConfigEditor(ConfigEditor).setAnnotationQueryCtrl(ElasticAnnotationsQueryCtrl);

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function usePrevious(state) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        ref.current = state;
    });
    return ref.current;
}


/***/ }),

/***/ "./.yarn/cache/lru-cache-npm-6.0.0-b4c8668fe1-f97f499f89.zip/node_modules/lru-cache/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// A linked list to keep track of recently-used-ness
const Yallist = __webpack_require__("./.yarn/cache/yallist-npm-4.0.0-b493d9e907-343617202a.zip/node_modules/yallist/yallist.js")

const MAX = Symbol('max')
const LENGTH = Symbol('length')
const LENGTH_CALCULATOR = Symbol('lengthCalculator')
const ALLOW_STALE = Symbol('allowStale')
const MAX_AGE = Symbol('maxAge')
const DISPOSE = Symbol('dispose')
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
const LRU_LIST = Symbol('lruList')
const CACHE = Symbol('cache')
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')

const naiveLength = () => 1

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options }

    if (!options)
      options = {}

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    const max = this[MAX] = options.max || Infinity

    const lc = options.length || naiveLength
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc
    this[ALLOW_STALE] = options.stale || false
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0
    this[DISPOSE] = options.dispose
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
    this.reset()
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity
    trim(this)
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA
    trim(this)
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      })
    }
    trim(this)
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev
      forEachStep(this, fn, walker, thisp)
      walker = prev
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next
      forEachStep(this, fn, walker, thisp)
      walker = next
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value))
    }

    this[CACHE] = new Map() // hash of items by key
    this[LRU_LIST] = new Yallist() // list of items in order of use recency
    this[LENGTH] = 0 // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE]

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0
    const len = this[LENGTH_CALCULATOR](value, key)

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key))
        return false
      }

      const node = this[CACHE].get(key)
      const item = node.value

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value)
      }

      item.now = now
      item.maxAge = maxAge
      item.value = value
      this[LENGTH] += len - item.length
      item.length = len
      this.get(key)
      trim(this)
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge)

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value)

      return false
    }

    this[LENGTH] += hit.length
    this[LRU_LIST].unshift(hit)
    this[CACHE].set(key, this[LRU_LIST].head)
    trim(this)
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail
    if (!node)
      return null

    del(this, node)
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key))
  }

  load (arr) {
    // reset the cache
    this.reset()

    const now = Date.now()
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l]
      const expiresAt = hit.e || 0
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v)
      else {
        const maxAge = expiresAt - now
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge)
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false))
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key)
  if (node) {
    const hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now()
        self[LRU_LIST].unshiftNode(node)
      }
    }
    return hit.value
  }
}

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
}

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

const del = (self, node) => {
  if (node) {
    const hit = node.value
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value)

    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key
    this.value = value
    this.length = length
    this.now = now
    this.maxAge = maxAge || 0
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE])
      hit = undefined
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self)
}

module.exports = LRUCache


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/comparator.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ANY = Symbol('SemVer ANY')
// hoisted class for cyclic dependency
class Comparator {
  static get ANY () {
    return ANY
  }
  constructor (comp, options) {
    options = parseOptions(options)

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp
      } else {
        comp = comp.value
      }
    }

    debug('comparator', comp, options)
    this.options = options
    this.loose = !!options.loose
    this.parse(comp)

    if (this.semver === ANY) {
      this.value = ''
    } else {
      this.value = this.operator + this.semver.version
    }

    debug('comp', this)
  }

  parse (comp) {
    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const m = comp.match(r)

    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`)
    }

    this.operator = m[1] !== undefined ? m[1] : ''
    if (this.operator === '=') {
      this.operator = ''
    }

    // if it literally is just '>' or '' then allow anything.
    if (!m[2]) {
      this.semver = ANY
    } else {
      this.semver = new SemVer(m[2], this.options.loose)
    }
  }

  toString () {
    return this.value
  }

  test (version) {
    debug('Comparator.test', version, this.options.loose)

    if (this.semver === ANY || version === ANY) {
      return true
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    return cmp(version, this.operator, this.semver, this.options)
  }

  intersects (comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required')
    }

    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      }
    }

    if (this.operator === '') {
      if (this.value === '') {
        return true
      }
      return new Range(comp.value, options).test(this.value)
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true
      }
      return new Range(this.value, options).test(comp.semver)
    }

    const sameDirectionIncreasing =
      (this.operator === '>=' || this.operator === '>') &&
      (comp.operator === '>=' || comp.operator === '>')
    const sameDirectionDecreasing =
      (this.operator === '<=' || this.operator === '<') &&
      (comp.operator === '<=' || comp.operator === '<')
    const sameSemVer = this.semver.version === comp.semver.version
    const differentDirectionsInclusive =
      (this.operator === '>=' || this.operator === '<=') &&
      (comp.operator === '>=' || comp.operator === '<=')
    const oppositeDirectionsLessThan =
      cmp(this.semver, '<', comp.semver, options) &&
      (this.operator === '>=' || this.operator === '>') &&
        (comp.operator === '<=' || comp.operator === '<')
    const oppositeDirectionsGreaterThan =
      cmp(this.semver, '>', comp.semver, options) &&
      (this.operator === '<=' || this.operator === '<') &&
        (comp.operator === '>=' || comp.operator === '>')

    return (
      sameDirectionIncreasing ||
      sameDirectionDecreasing ||
      (sameSemVer && differentDirectionsInclusive) ||
      oppositeDirectionsLessThan ||
      oppositeDirectionsGreaterThan
    )
  }
}

module.exports = Comparator

const parseOptions = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/parse-options.js")
const {re, t} = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/re.js")
const cmp = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/cmp.js")
const debug = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js")
const Range = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/range.js")


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/range.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// hoisted class for cyclic dependency
class Range {
  constructor (range, options) {
    options = parseOptions(options)

    if (range instanceof Range) {
      if (
        range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease
      ) {
        return range
      } else {
        return new Range(range.raw, options)
      }
    }

    if (range instanceof Comparator) {
      // just put it in the set and return
      this.raw = range.value
      this.set = [[range]]
      this.format()
      return this
    }

    this.options = options
    this.loose = !!options.loose
    this.includePrerelease = !!options.includePrerelease

    // First, split based on boolean or ||
    this.raw = range
    this.set = range
      .split(/\s*\|\|\s*/)
      // map the range to a 2d array of comparators
      .map(range => this.parseRange(range.trim()))
      // throw out any comparator lists that are empty
      // this generally means that it was not a valid range, which is allowed
      // in loose mode, but will still throw if the WHOLE range is invalid.
      .filter(c => c.length)

    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${range}`)
    }

    // if we have any that are not the null set, throw out null sets.
    if (this.set.length > 1) {
      // keep the first one, in case they're all null sets
      const first = this.set[0]
      this.set = this.set.filter(c => !isNullSet(c[0]))
      if (this.set.length === 0)
        this.set = [first]
      else if (this.set.length > 1) {
        // if we have any that are *, then the range is just *
        for (const c of this.set) {
          if (c.length === 1 && isAny(c[0])) {
            this.set = [c]
            break
          }
        }
      }
    }

    this.format()
  }

  format () {
    this.range = this.set
      .map((comps) => {
        return comps.join(' ').trim()
      })
      .join('||')
      .trim()
    return this.range
  }

  toString () {
    return this.range
  }

  parseRange (range) {
    range = range.trim()

    // memoize range parsing for performance.
    // this is a very hot path, and fully deterministic.
    const memoOpts = Object.keys(this.options).join(',')
    const memoKey = `parseRange:${memoOpts}:${range}`
    const cached = cache.get(memoKey)
    if (cached)
      return cached

    const loose = this.options.loose
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE]
    range = range.replace(hr, hyphenReplace(this.options.includePrerelease))
    debug('hyphen replace', range)
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace)
    debug('comparator trim', range, re[t.COMPARATORTRIM])

    // `~ 1.2.3` => `~1.2.3`
    range = range.replace(re[t.TILDETRIM], tildeTrimReplace)

    // `^ 1.2.3` => `^1.2.3`
    range = range.replace(re[t.CARETTRIM], caretTrimReplace)

    // normalize spaces
    range = range.split(/\s+/).join(' ')

    // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    const compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const rangeList = range
      .split(' ')
      .map(comp => parseComparator(comp, this.options))
      .join(' ')
      .split(/\s+/)
      // >=0.0.0 is equivalent to *
      .map(comp => replaceGTE0(comp, this.options))
      // in loose mode, throw out any that are not valid comparators
      .filter(this.options.loose ? comp => !!comp.match(compRe) : () => true)
      .map(comp => new Comparator(comp, this.options))

    // if any comparators are the null set, then replace with JUST null set
    // if more than one comparator, remove any * comparators
    // also, don't include the same comparator more than once
    const l = rangeList.length
    const rangeMap = new Map()
    for (const comp of rangeList) {
      if (isNullSet(comp))
        return [comp]
      rangeMap.set(comp.value, comp)
    }
    if (rangeMap.size > 1 && rangeMap.has(''))
      rangeMap.delete('')

    const result = [...rangeMap.values()]
    cache.set(memoKey, result)
    return result
  }

  intersects (range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required')
    }

    return this.set.some((thisComparators) => {
      return (
        isSatisfiable(thisComparators, options) &&
        range.set.some((rangeComparators) => {
          return (
            isSatisfiable(rangeComparators, options) &&
            thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options)
              })
            })
          )
        })
      )
    })
  }

  // if ANY of the sets match ALL of its comparators, then pass
  test (version) {
    if (!version) {
      return false
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    for (let i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true
      }
    }
    return false
  }
}
module.exports = Range

const LRU = __webpack_require__("./.yarn/cache/lru-cache-npm-6.0.0-b4c8668fe1-f97f499f89.zip/node_modules/lru-cache/index.js")
const cache = new LRU({ max: 1000 })

const parseOptions = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/parse-options.js")
const Comparator = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/comparator.js")
const debug = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js")
const {
  re,
  t,
  comparatorTrimReplace,
  tildeTrimReplace,
  caretTrimReplace
} = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/re.js")

const isNullSet = c => c.value === '<0.0.0-0'
const isAny = c => c.value === ''

// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options) => {
  let result = true
  const remainingComparators = comparators.slice()
  let testComparator = remainingComparators.pop()

  while (result && remainingComparators.length) {
    result = remainingComparators.every((otherComparator) => {
      return testComparator.intersects(otherComparator, options)
    })

    testComparator = remainingComparators.pop()
  }

  return result
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options) => {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

const isX = id => !id || id.toLowerCase() === 'x' || id === '*'

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
const replaceTildes = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceTilde(comp, options)
  }).join(' ')

const replaceTilde = (comp, options) => {
  const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE]
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('tilde', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = `>=${M}.${m}.${p}-${pr
      } <${M}.${+m + 1}.0-0`
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = `>=${M}.${m}.${p
      } <${M}.${+m + 1}.0-0`
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
const replaceCarets = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceCaret(comp, options)
  }).join(' ')

const replaceCaret = (comp, options) => {
  debug('caret', comp, options)
  const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET]
  const z = options.includePrerelease ? '-0' : ''
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('caret', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      if (M === '0') {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr
        } <${+M + 1}.0.0-0`
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p
        } <${+M + 1}.0.0-0`
      }
    }

    debug('caret return', ret)
    return ret
  })
}

const replaceXRanges = (comp, options) => {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map((comp) => {
    return replaceXRange(comp, options)
  }).join(' ')
}

const replaceXRange = (comp, options) => {
  comp = comp.trim()
  const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE]
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    const xM = isX(M)
    const xm = xM || isX(m)
    const xp = xm || isX(p)
    const anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : ''

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      if (gtlt === '<')
        pr = '-0'

      ret = `${gtlt + M}.${m}.${p}${pr}`
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr
      } <${M}.${+m + 1}.0-0`
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options) => {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[t.STAR], '')
}

const replaceGTE0 = (comp, options) => {
  debug('replaceGTE0', comp, options)
  return comp.trim()
    .replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '')
}

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
const hyphenReplace = incPr => ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) => {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = `>=${fM}.0.0${incPr ? '-0' : ''}`
  } else if (isX(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`
  } else if (fpr) {
    from = `>=${from}`
  } else {
    from = `>=${from}${incPr ? '-0' : ''}`
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = `<${+tM + 1}.0.0-0`
  } else if (isX(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`
  } else {
    to = `<=${to}`
  }

  return (`${from} ${to}`).trim()
}

const testSet = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (let i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === Comparator.ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const debug = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/debug.js")
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/constants.js")
const { re, t } = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/re.js")

const parseOptions = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/parse-options.js")
const { compareIdentifiers } = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/identifiers.js")
class SemVer {
  constructor (version, options) {
    options = parseOptions(options)

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier)
        this.inc('pre', identifier)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier)
        }
        this.inc('pre', identifier)
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            this.prerelease.push(0)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0]
            }
          } else {
            this.prerelease = [identifier, 0]
          }
        }
        break

      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.format()
    this.raw = this.version
    return this
  }
}

module.exports = SemVer


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/clean.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/parse.js")
const clean = (version, options) => {
  const s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}
module.exports = clean


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/cmp.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const eq = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/eq.js")
const neq = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/neq.js")
const gt = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/gt.js")
const gte = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/gte.js")
const lt = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/lt.js")
const lte = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/lte.js")

const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError(`Invalid operator: ${op}`)
  }
}
module.exports = cmp


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/coerce.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js")
const parse = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/parse.js")
const {re, t} = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/re.js")

const coerce = (version, options) => {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version === 'number') {
    version = String(version)
  }

  if (typeof version !== 'string') {
    return null
  }

  options = options || {}

  let match = null
  if (!options.rtl) {
    match = version.match(re[t.COERCE])
  } else {
    // Find the right-most coercible string that does not share
    // a terminus with a more left-ward coercible string.
    // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
    //
    // Walk through the string checking with a /g regexp
    // Manually set the index so as to pick up overlapping matches.
    // Stop when we get a match that ends at the string end, since no
    // coercible string can be more right-ward without the same terminus.
    let next
    while ((next = re[t.COERCERTL].exec(version)) &&
        (!match || match.index + match[0].length !== version.length)
    ) {
      if (!match ||
            next.index + next[0].length !== match.index + match[0].length) {
        match = next
      }
      re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length
    }
    // leave it in a clean state
    re[t.COERCERTL].lastIndex = -1
  }

  if (match === null)
    return null

  return parse(`${match[2]}.${match[3] || '0'}.${match[4] || '0'}`, options)
}
module.exports = coerce


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare-build.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js")
const compareBuild = (a, b, loose) => {
  const versionA = new SemVer(a, loose)
  const versionB = new SemVer(b, loose)
  return versionA.compare(versionB) || versionA.compareBuild(versionB)
}
module.exports = compareBuild


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare-loose.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare.js")
const compareLoose = (a, b) => compare(a, b, true)
module.exports = compareLoose


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js")
const compare = (a, b, loose) =>
  new SemVer(a, loose).compare(new SemVer(b, loose))

module.exports = compare


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/diff.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/parse.js")
const eq = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/eq.js")

const diff = (version1, version2) => {
  if (eq(version1, version2)) {
    return null
  } else {
    const v1 = parse(version1)
    const v2 = parse(version2)
    const hasPre = v1.prerelease.length || v2.prerelease.length
    const prefix = hasPre ? 'pre' : ''
    const defaultResult = hasPre ? 'prerelease' : ''
    for (const key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key
        }
      }
    }
    return defaultResult // may be undefined
  }
}
module.exports = diff


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/eq.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare.js")
const eq = (a, b, loose) => compare(a, b, loose) === 0
module.exports = eq


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/gt.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare.js")
const gt = (a, b, loose) => compare(a, b, loose) > 0
module.exports = gt


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/gte.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare.js")
const gte = (a, b, loose) => compare(a, b, loose) >= 0
module.exports = gte


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/inc.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js")

const inc = (version, release, options, identifier) => {
  if (typeof (options) === 'string') {
    identifier = options
    options = undefined
  }

  try {
    return new SemVer(version, options).inc(release, identifier).version
  } catch (er) {
    return null
  }
}
module.exports = inc


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/lt.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare.js")
const lt = (a, b, loose) => compare(a, b, loose) < 0
module.exports = lt


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/lte.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare.js")
const lte = (a, b, loose) => compare(a, b, loose) <= 0
module.exports = lte


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/major.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js")
const major = (a, loose) => new SemVer(a, loose).major
module.exports = major


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/minor.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js")
const minor = (a, loose) => new SemVer(a, loose).minor
module.exports = minor


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/neq.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare.js")
const neq = (a, b, loose) => compare(a, b, loose) !== 0
module.exports = neq


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/parse.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {MAX_LENGTH} = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/constants.js")
const { re, t } = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/re.js")
const SemVer = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js")

const parseOptions = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/parse-options.js")
const parse = (version, options) => {
  options = parseOptions(options)

  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  const r = options.loose ? re[t.LOOSE] : re[t.FULL]
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

module.exports = parse


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/patch.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js")
const patch = (a, loose) => new SemVer(a, loose).patch
module.exports = patch


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/prerelease.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/parse.js")
const prerelease = (version, options) => {
  const parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}
module.exports = prerelease


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/rcompare.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compare = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare.js")
const rcompare = (a, b, loose) => compare(b, a, loose)
module.exports = rcompare


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/rsort.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compareBuild = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare-build.js")
const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose))
module.exports = rsort


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/satisfies.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/range.js")
const satisfies = (version, range, options) => {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}
module.exports = satisfies


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/sort.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const compareBuild = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare-build.js")
const sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose))
module.exports = sort


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/valid.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parse = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/parse.js")
const valid = (version, options) => {
  const v = parse(version, options)
  return v ? v.version : null
}
module.exports = valid


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// just pre-load all the stuff that index.js lazily exports
const internalRe = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/re.js")
module.exports = {
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: (__webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/constants.js").SEMVER_SPEC_VERSION),
  SemVer: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js"),
  compareIdentifiers: (__webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/identifiers.js").compareIdentifiers),
  rcompareIdentifiers: (__webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/identifiers.js").rcompareIdentifiers),
  parse: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/parse.js"),
  valid: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/valid.js"),
  clean: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/clean.js"),
  inc: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/inc.js"),
  diff: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/diff.js"),
  major: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/major.js"),
  minor: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/minor.js"),
  patch: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/patch.js"),
  prerelease: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/prerelease.js"),
  compare: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare.js"),
  rcompare: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/rcompare.js"),
  compareLoose: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare-loose.js"),
  compareBuild: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare-build.js"),
  sort: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/sort.js"),
  rsort: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/rsort.js"),
  gt: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/gt.js"),
  lt: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/lt.js"),
  eq: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/eq.js"),
  neq: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/neq.js"),
  gte: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/gte.js"),
  lte: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/lte.js"),
  cmp: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/cmp.js"),
  coerce: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/coerce.js"),
  Comparator: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/comparator.js"),
  Range: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/range.js"),
  satisfies: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/satisfies.js"),
  toComparators: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/to-comparators.js"),
  maxSatisfying: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/max-satisfying.js"),
  minSatisfying: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/min-satisfying.js"),
  minVersion: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/min-version.js"),
  validRange: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/valid.js"),
  outside: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/outside.js"),
  gtr: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/gtr.js"),
  ltr: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/ltr.js"),
  intersects: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/intersects.js"),
  simplifyRange: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/simplify.js"),
  subset: __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/subset.js"),
}


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/constants.js":
/***/ ((module) => {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

module.exports = {
  SEMVER_SPEC_VERSION,
  MAX_LENGTH,
  MAX_SAFE_INTEGER,
  MAX_SAFE_COMPONENT_LENGTH
}


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/debug.js":
/***/ ((module) => {

const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/identifiers.js":
/***/ ((module) => {

const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers
}


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/parse-options.js":
/***/ ((module) => {

// parse out just the options we care about so we always get a consistent
// obj with keys in a consistent order.
const opts = ['includePrerelease', 'loose', 'rtl']
const parseOptions = options =>
  !options ? {}
  : typeof options !== 'object' ? { loose: true }
  : opts.filter(k => options[k]).reduce((options, k) => {
    options[k] = true
    return options
  }, {})
module.exports = parseOptions


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/re.js":
/***/ ((module, exports, __webpack_require__) => {

const { MAX_SAFE_COMPONENT_LENGTH } = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/constants.js")
const debug = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/internal/debug.js")
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const src = exports.src = []
const t = exports.t = {}
let R = 0

const createToken = (name, value, isGlobal) => {
  const index = R++
  debug(index, value)
  t[name] = index
  src[index] = value
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*')

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+')

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\.0\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\.0\.0-0\\s*$')


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/gtr.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Determine if version is greater than all the versions possible in the range.
const outside = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/outside.js")
const gtr = (version, range, options) => outside(version, range, '>', options)
module.exports = gtr


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/intersects.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/range.js")
const intersects = (r1, r2, options) => {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}
module.exports = intersects


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/ltr.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const outside = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/outside.js")
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options) => outside(version, range, '<', options)
module.exports = ltr


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/max-satisfying.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js")
const Range = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/range.js")

const maxSatisfying = (versions, range, options) => {
  let max = null
  let maxSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}
module.exports = maxSatisfying


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/min-satisfying.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js")
const Range = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/range.js")
const minSatisfying = (versions, range, options) => {
  let min = null
  let minSV = null
  let rangeObj = null
  try {
    rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}
module.exports = minSatisfying


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/min-version.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js")
const Range = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/range.js")
const gt = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/gt.js")

const minVersion = (range, loose) => {
  range = new Range(range, loose)

  let minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let setMin = null
    comparators.forEach((comparator) => {
      // Clone to avoid manipulating the comparator's semver object.
      const compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!setMin || gt(compver, setMin)) {
            setMin = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error(`Unexpected operation: ${comparator.operator}`)
      }
    })
    if (setMin && (!minver || gt(minver, setMin)))
      minver = setMin
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}
module.exports = minVersion


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/outside.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/semver.js")
const Comparator = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/comparator.js")
const {ANY} = Comparator
const Range = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/range.js")
const satisfies = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/satisfies.js")
const gt = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/gt.js")
const lt = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/lt.js")
const lte = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/lte.js")
const gte = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/gte.js")

const outside = (version, range, hilo, options) => {
  version = new SemVer(version, options)
  range = new Range(range, options)

  let gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisfies the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (let i = 0; i < range.set.length; ++i) {
    const comparators = range.set[i]

    let high = null
    let low = null

    comparators.forEach((comparator) => {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

module.exports = outside


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/simplify.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/satisfies.js")
const compare = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare.js")
module.exports = (versions, range, options) => {
  const set = []
  let min = null
  let prev = null
  const v = versions.sort((a, b) => compare(a, b, options))
  for (const version of v) {
    const included = satisfies(version, range, options)
    if (included) {
      prev = version
      if (!min)
        min = version
    } else {
      if (prev) {
        set.push([min, prev])
      }
      prev = null
      min = null
    }
  }
  if (min)
    set.push([min, null])

  const ranges = []
  for (const [min, max] of set) {
    if (min === max)
      ranges.push(min)
    else if (!max && min === v[0])
      ranges.push('*')
    else if (!max)
      ranges.push(`>=${min}`)
    else if (min === v[0])
      ranges.push(`<=${max}`)
    else
      ranges.push(`${min} - ${max}`)
  }
  const simplified = ranges.join(' || ')
  const original = typeof range.raw === 'string' ? range.raw : String(range)
  return simplified.length < original.length ? simplified : range
}


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/subset.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/range.js")
const Comparator = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/comparator.js")
const { ANY } = Comparator
const satisfies = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/satisfies.js")
const compare = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/functions/compare.js")

// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true

const subset = (sub, dom, options = {}) => {
  if (sub === dom)
    return true

  sub = new Range(sub, options)
  dom = new Range(dom, options)
  let sawNonNull = false

  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options)
      sawNonNull = sawNonNull || isSub !== null
      if (isSub)
        continue OUTER
    }
    // the null set is a subset of everything, but null simple ranges in
    // a complex range should be ignored.  so if we saw a non-null range,
    // then we know this isn't a subset, but if EVERY simple range was null,
    // then it is a subset.
    if (sawNonNull)
      return false
  }
  return true
}

const simpleSubset = (sub, dom, options) => {
  if (sub === dom)
    return true

  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY)
      return true
    else if (options.includePrerelease)
      sub = [ new Comparator('>=0.0.0-0') ]
    else
      sub = [ new Comparator('>=0.0.0') ]
  }

  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease)
      return true
    else
      dom = [ new Comparator('>=0.0.0') ]
  }

  const eqSet = new Set()
  let gt, lt
  for (const c of sub) {
    if (c.operator === '>' || c.operator === '>=')
      gt = higherGT(gt, c, options)
    else if (c.operator === '<' || c.operator === '<=')
      lt = lowerLT(lt, c, options)
    else
      eqSet.add(c.semver)
  }

  if (eqSet.size > 1)
    return null

  let gtltComp
  if (gt && lt) {
    gtltComp = compare(gt.semver, lt.semver, options)
    if (gtltComp > 0)
      return null
    else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<='))
      return null
  }

  // will iterate one or zero times
  for (const eq of eqSet) {
    if (gt && !satisfies(eq, String(gt), options))
      return null

    if (lt && !satisfies(eq, String(lt), options))
      return null

    for (const c of dom) {
      if (!satisfies(eq, String(c), options))
        return false
    }

    return true
  }

  let higher, lower
  let hasDomLT, hasDomGT
  // if the subset has a prerelease, we need a comparator in the superset
  // with the same tuple and a prerelease, or it's not a subset
  let needDomLTPre = lt &&
    !options.includePrerelease &&
    lt.semver.prerelease.length ? lt.semver : false
  let needDomGTPre = gt &&
    !options.includePrerelease &&
    gt.semver.prerelease.length ? gt.semver : false
  // exception: <1.2.3-0 is the same as <1.2.3
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 &&
      lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false
  }

  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>='
    hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<='
    if (gt) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomGTPre.major &&
            c.semver.minor === needDomGTPre.minor &&
            c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false
        }
      }
      if (c.operator === '>' || c.operator === '>=') {
        higher = higherGT(gt, c, options)
        if (higher === c && higher !== gt)
          return false
      } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options))
        return false
    }
    if (lt) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length &&
            c.semver.major === needDomLTPre.major &&
            c.semver.minor === needDomLTPre.minor &&
            c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false
        }
      }
      if (c.operator === '<' || c.operator === '<=') {
        lower = lowerLT(lt, c, options)
        if (lower === c && lower !== lt)
          return false
      } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options))
        return false
    }
    if (!c.operator && (lt || gt) && gtltComp !== 0)
      return false
  }

  // if there was a < or >, and nothing in the dom, then must be false
  // UNLESS it was limited by another range in the other direction.
  // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
  if (gt && hasDomLT && !lt && gtltComp !== 0)
    return false

  if (lt && hasDomGT && !gt && gtltComp !== 0)
    return false

  // we needed a prerelease range in a specific tuple, but didn't get one
  // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
  // because it includes prereleases in the 1.2.3 tuple
  if (needDomGTPre || needDomLTPre)
    return false

  return true
}

// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options) => {
  if (!a)
    return b
  const comp = compare(a.semver, b.semver, options)
  return comp > 0 ? a
    : comp < 0 ? b
    : b.operator === '>' && a.operator === '>=' ? b
    : a
}

// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options) => {
  if (!a)
    return b
  const comp = compare(a.semver, b.semver, options)
  return comp < 0 ? a
    : comp > 0 ? b
    : b.operator === '<' && a.operator === '<=' ? b
    : a
}

module.exports = subset


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/to-comparators.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/range.js")

// Mostly just for testing and legacy API reasons
const toComparators = (range, options) =>
  new Range(range, options).set
    .map(comp => comp.map(c => c.value).join(' ').trim().split(' '))

module.exports = toComparators


/***/ }),

/***/ "./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/ranges/valid.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Range = __webpack_require__("./.yarn/cache/semver-npm-7.3.5-618cf5db6a-5eafe6102b.zip/node_modules/semver/classes/range.js")
const validRange = (range, options) => {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}
module.exports = validRange


/***/ }),

/***/ "./.yarn/cache/yallist-npm-4.0.0-b493d9e907-343617202a.zip/node_modules/yallist/iterator.js":
/***/ ((module) => {

"use strict";

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value
    }
  }
}


/***/ }),

/***/ "./.yarn/cache/yallist-npm-4.0.0-b493d9e907-343617202a.zip/node_modules/yallist/yallist.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null

  return next
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next
  }

  var ret = []
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value)
    walker = this.removeNode(walker)
  }
  if (walker === null) {
    walker = this.tail
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i])
  }
  return ret;
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self)

  if (inserted.next === null) {
    self.tail = inserted
  }
  if (inserted.prev === null) {
    self.head = inserted
  }

  self.length++

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__("./.yarn/cache/yallist-npm-4.0.0-b493d9e907-343617202a.zip/node_modules/yallist/iterator.js")(Yallist)
} catch (er) {}


/***/ })

}]);