(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[431],{

/***/ "./public/app/plugins/datasource/prometheus/add_label_to_query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ addLabelToQuery)
/* harmony export */ });
/* harmony import */ var lezer_promql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/lezer-promql-virtual-eaf88aa77a/0/cache/lezer-promql-npm-0.22.0-867da6afaa-cdce054700.zip/node_modules/lezer-promql/index.es.js");
/* harmony import */ var _querybuilder_PromQueryModeller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/PromQueryModeller.ts");
/* harmony import */ var _querybuilder_parsing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/parsing.ts");




/**
 * Adds label filter to existing query. Useful for query modification for example for ad hoc filters.
 *
 * It uses PromQL parser to find instances of metric and labels, alters them and then splices them back into the query.
 * Ideally we could use the parse -> change -> render is a simple 3 steps but right now building the visual query
 * object does not support all possible queries.
 *
 * So instead this just operates on substrings of the query with labels and operates just on those. This makes this
 * more robust and can alter even invalid queries, and preserves in general the query structure and whitespace.
 * @param query
 * @param key
 * @param value
 * @param operator
 */
function addLabelToQuery(query, key, value) {
  let operator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '=';

  if (!key || !value) {
    throw new Error('Need label to add to query.');
  }

  const vectorSelectorPositions = getVectorSelectorPositions(query);

  if (!vectorSelectorPositions.length) {
    return query;
  }

  const filter = toLabelFilter(key, value, operator);
  return addFilter(query, vectorSelectorPositions, filter);
}

/**
 * Parse the string and get all VectorSelector positions in the query together with parsed representation of the vector
 * selector.
 * @param query
 */
function getVectorSelectorPositions(query) {
  const tree = lezer_promql__WEBPACK_IMPORTED_MODULE_0__/* .parser.parse */ .E2.parse(query);
  const positions = [];
  tree.iterate({
    enter: (type, from, to, get) => {
      if (type.name === 'VectorSelector') {
        const visQuery = (0,_querybuilder_parsing__WEBPACK_IMPORTED_MODULE_2__/* .buildVisualQueryFromString */ ._)(query.substring(from, to));
        positions.push({
          query: visQuery.query,
          from,
          to
        });
        return false;
      }
    }
  });
  return positions;
}

function toLabelFilter(key, value, operator) {
  // We need to make sure that we convert the value back to string because it may be a number
  const transformedValue = value === Infinity ? '+Inf' : value.toString();
  return {
    label: key,
    op: operator,
    value: transformedValue
  };
}

function addFilter(query, vectorSelectorPositions, filter) {
  const modeller = new _querybuilder_PromQueryModeller__WEBPACK_IMPORTED_MODULE_1__/* .PromQueryModeller */ .K();
  let newQuery = '';
  let prev = 0;

  for (let i = 0; i < vectorSelectorPositions.length; i++) {
    // This is basically just doing splice on a string for each matched vector selector.
    const match = vectorSelectorPositions[i];
    const isLast = i === vectorSelectorPositions.length - 1;
    const start = query.substring(prev, match.from);
    const end = isLast ? query.substring(match.to) : '';

    if (!labelExists(match.query.labels, filter)) {
      // We don't want to add duplicate labels.
      match.query.labels.push(filter);
    }

    const newLabels = modeller.renderQuery(match.query);
    newQuery += start + newLabels + end;
    prev = match.to;
  }

  return newQuery;
}
/**
 * Check if label exists in the list of labels but ignore the operator.
 * @param labels
 * @param filter
 */


function labelExists(labels, filter) {
  return labels.find(label => label.label === filter.label && label.value === filter.value);
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/datasource.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "cf": () => (/* binding */ ANNOTATION_QUERY_STEP_DEFAULT),
  "vQ": () => (/* binding */ PrometheusDatasource)
});

// UNUSED EXPORTS: alignRange, extractRuleMappingFromGroups, prometheusRegularEscape, prometheusSpecialRegexEscape

// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./.yarn/cache/lru-cache-npm-7.9.0-d803108233-c91a293a10.zip/node_modules/lru-cache/index.js
var lru_cache = __webpack_require__("./.yarn/cache/lru-cache-npm-7.9.0-d803108233-c91a293a10.zip/node_modules/lru-cache/index.js");
var lru_cache_default = /*#__PURE__*/__webpack_require__.n(lru_cache);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js
var lastValueFrom = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/util/pipe.js
var pipe = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/util/pipe.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js
var merge = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js
var forkJoin = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js
var throwError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/tap.js
var tap = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/tap.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/filter.js
var filter = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/filter.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js
var catchError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/utils/explore.ts
var explore = __webpack_require__("./public/app/core/utils/explore.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/api/buildInfo.ts
var api_buildInfo = __webpack_require__("./public/app/features/alerting/unified/api/buildInfo.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/services/TimeSrv.ts + 1 modules
var TimeSrv = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
// EXTERNAL MODULE: ./public/app/features/templating/template_srv.ts + 1 modules
var template_srv = __webpack_require__("./public/app/features/templating/template_srv.ts");
// EXTERNAL MODULE: ./public/app/types/unified-alerting-dto.ts
var unified_alerting_dto = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/prometheus/add_label_to_query.ts
var add_label_to_query = __webpack_require__("./public/app/plugins/datasource/prometheus/add_label_to_query.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/prometheus/language_provider.ts
var language_provider = __webpack_require__("./public/app/plugins/datasource/prometheus/language_provider.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/prometheus/language_utils.ts
var language_utils = __webpack_require__("./public/app/plugins/datasource/prometheus/language_utils.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/prometheus/legend.ts
var legend = __webpack_require__("./public/app/plugins/datasource/prometheus/legend.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/metric_find_query.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class PrometheusMetricFindQuery {
  constructor(datasource, query) {
    this.datasource = datasource;
    this.query = query;

    _defineProperty(this, "range", void 0);

    this.datasource = datasource;
    this.query = query;
    this.datasource = datasource;
    this.query = query;
    this.range = (0,TimeSrv/* getTimeSrv */.$t)().timeRange();
  }

  process() {
    const labelNamesRegex = /^label_names\(\)\s*$/;
    const labelValuesRegex = /^label_values\((?:(.+),\s*)?([a-zA-Z_][a-zA-Z0-9_]*)\)\s*$/;
    const metricNamesRegex = /^metrics\((.+)\)\s*$/;
    const queryResultRegex = /^query_result\((.+)\)\s*$/;
    const labelNamesQuery = this.query.match(labelNamesRegex);

    if (labelNamesQuery) {
      return this.labelNamesQuery();
    }

    const labelValuesQuery = this.query.match(labelValuesRegex);

    if (labelValuesQuery) {
      if (labelValuesQuery[1]) {
        return this.labelValuesQuery(labelValuesQuery[2], labelValuesQuery[1]);
      } else {
        return this.labelValuesQuery(labelValuesQuery[2]);
      }
    }

    const metricNamesQuery = this.query.match(metricNamesRegex);

    if (metricNamesQuery) {
      return this.metricNameQuery(metricNamesQuery[1]);
    }

    const queryResultQuery = this.query.match(queryResultRegex);

    if (queryResultQuery) {
      return (0,lastValueFrom/* lastValueFrom */.n)(this.queryResultQuery(queryResultQuery[1]));
    } // if query contains full metric name, return metric name and label list


    return this.metricNameAndLabelsQuery(this.query);
  }

  labelNamesQuery() {
    const start = this.datasource.getPrometheusTime(this.range.from, false);
    const end = this.datasource.getPrometheusTime(this.range.to, true);
    const params = {
      start: start.toString(),
      end: end.toString()
    };
    const url = `/api/v1/labels`;
    return this.datasource.metadataRequest(url, params).then(result => {
      return (0,lodash.map)(result.data.data, value => {
        return {
          text: value
        };
      });
    });
  }

  labelValuesQuery(label, metric) {
    const start = this.datasource.getPrometheusTime(this.range.from, false);
    const end = this.datasource.getPrometheusTime(this.range.to, true);
    let url;

    if (!metric) {
      const params = {
        start: start.toString(),
        end: end.toString()
      }; // return label values globally

      url = `/api/v1/label/${label}/values`;
      return this.datasource.metadataRequest(url, params).then(result => {
        return (0,lodash.map)(result.data.data, value => {
          return {
            text: value
          };
        });
      });
    } else {
      const params = {
        'match[]': metric,
        start: start.toString(),
        end: end.toString()
      };
      url = `/api/v1/series`;
      return this.datasource.metadataRequest(url, params).then(result => {
        const _labels = (0,lodash.map)(result.data.data, metric => {
          return metric[label] || '';
        }).filter(label => {
          return label !== '';
        });

        return (0,lodash.uniq)(_labels).map(metric => {
          return {
            text: metric,
            expandable: true
          };
        });
      });
    }
  }

  metricNameQuery(metricFilterPattern) {
    const start = this.datasource.getPrometheusTime(this.range.from, false);
    const end = this.datasource.getPrometheusTime(this.range.to, true);
    const params = {
      start: start.toString(),
      end: end.toString()
    };
    const url = `/api/v1/label/__name__/values`;
    return this.datasource.metadataRequest(url, params).then(result => {
      return (0,lodash.chain)(result.data.data).filter(metricName => {
        const r = new RegExp(metricFilterPattern);
        return r.test(metricName);
      }).map(matchedMetricName => {
        return {
          text: matchedMetricName,
          expandable: true
        };
      }).value();
    });
  }

  queryResultQuery(query) {
    const end = this.datasource.getPrometheusTime(this.range.to, true);
    const instantQuery = {
      expr: query
    };
    return this.datasource.performInstantQuery(instantQuery, end).pipe((0,map/* map */.U)(result => {
      return (0,lodash.map)(result.data.data.result, metricData => {
        let text = metricData.metric.__name__ || '';
        delete metricData.metric.__name__;
        text += '{' + (0,lodash.map)(metricData.metric, (v, k) => {
          return k + '="' + v + '"';
        }).join(',') + '}';
        text += ' ' + metricData.value[1] + ' ' + metricData.value[0] * 1000;
        return {
          text: text,
          expandable: true
        };
      });
    }));
  }

  metricNameAndLabelsQuery(query) {
    const start = this.datasource.getPrometheusTime(this.range.from, false);
    const end = this.datasource.getPrometheusTime(this.range.to, true);
    const params = {
      'match[]': query,
      start: start.toString(),
      end: end.toString()
    };
    const url = `/api/v1/series`;
    const self = this;
    return this.datasource.metadataRequest(url, params).then(result => {
      return (0,lodash.map)(result.data.data, metric => {
        return {
          text: self.datasource.getOriginalMetricName(metric),
          expandable: true
        };
      });
    });
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/query_hints.ts


/**
 * Number of time series results needed before starting to suggest sum aggregation hints
 */
const SUM_HINT_THRESHOLD_COUNT = 20;
function getQueryHints(query, series, datasource) {
  const hints = []; // ..._bucket metric needs a histogram_quantile()

  const histogramMetric = query.trim().match(/^\w+_bucket$|^\w+_bucket{.*}$/);

  if (histogramMetric) {
    const label = 'Selected metric has buckets.';
    hints.push({
      type: 'HISTOGRAM_QUANTILE',
      label,
      fix: {
        label: 'Consider calculating aggregated quantile by adding histogram_quantile().',
        action: {
          type: 'ADD_HISTOGRAM_QUANTILE',
          query
        }
      }
    });
  } // Check for need of rate()


  if (query.indexOf('rate(') === -1 && query.indexOf('increase(') === -1) {
    var _datasource$languageP, _datasource$languageP2;

    // Use metric metadata for exact types
    const nameMatch = query.match(/\b(\w+_(total|sum|count))\b/);
    let counterNameMetric = nameMatch ? nameMatch[1] : '';
    const metricsMetadata = (_datasource$languageP = datasource === null || datasource === void 0 ? void 0 : (_datasource$languageP2 = datasource.languageProvider) === null || _datasource$languageP2 === void 0 ? void 0 : _datasource$languageP2.metricsMetadata) !== null && _datasource$languageP !== void 0 ? _datasource$languageP : {};
    const metricMetadataKeys = Object.keys(metricsMetadata);
    let certain = false;

    if (metricMetadataKeys.length > 0) {
      var _metricMetadataKeys$f;

      counterNameMetric = (_metricMetadataKeys$f = metricMetadataKeys.find(metricName => {
        // Only considering first type information, could be non-deterministic
        const metadata = metricsMetadata[metricName];

        if (metadata.type.toLowerCase() === 'counter') {
          const metricRegex = new RegExp(`\\b${metricName}\\b`);

          if (query.match(metricRegex)) {
            certain = true;
            return true;
          }
        }

        return false;
      })) !== null && _metricMetadataKeys$f !== void 0 ? _metricMetadataKeys$f : '';
    }

    if (counterNameMetric) {
      // FixableQuery consists of metric name and optionally label-value pairs. We are not offering fix for complex queries yet.
      const fixableQuery = query.trim().match(/^\w+$|^\w+{.*}$/);
      const verb = certain ? 'is' : 'looks like';
      let label = `Selected metric ${verb} a counter.`;
      let fix;

      if (fixableQuery) {
        fix = {
          label: 'Consider calculating rate of counter by adding rate().',
          action: {
            type: 'ADD_RATE',
            query
          }
        };
      } else {
        label = `${label} Consider calculating rate of counter by adding rate().`;
      }

      hints.push({
        type: 'APPLY_RATE',
        label,
        fix
      });
    }
  } // Check for recording rules expansion


  if (datasource && datasource.ruleMappings) {
    const mapping = datasource.ruleMappings;
    const mappingForQuery = Object.keys(mapping).reduce((acc, ruleName) => {
      if (query.search(ruleName) > -1) {
        return Object.assign({}, acc, {
          [ruleName]: mapping[ruleName]
        });
      }

      return acc;
    }, {});

    if ((0,lodash.size)(mappingForQuery) > 0) {
      const label = 'Query contains recording rules.';
      hints.push({
        type: 'EXPAND_RULES',
        label,
        fix: {
          label: 'Expand rules',
          action: {
            type: 'EXPAND_RULES',
            query,
            mapping: mappingForQuery
          }
        }
      });
    }
  }

  if (series && series.length >= SUM_HINT_THRESHOLD_COUNT) {
    const simpleMetric = query.trim().match(/^\w+$/);

    if (simpleMetric) {
      hints.push({
        type: 'ADD_SUM',
        label: 'Many time series results returned.',
        fix: {
          label: 'Consider aggregating with sum().',
          action: {
            type: 'ADD_SUM',
            query: query,
            preventSubmit: true
          }
        }
      });
    }
  }

  return hints;
}
function getInitHints(datasource) {
  const hints = []; // Hint if using Loki as Prometheus data source

  if (datasource.directUrl.includes('/loki') && !datasource.languageProvider.metrics.length) {
    hints.push({
      label: `Using Loki as a Prometheus data source is no longer supported. You must use the Loki data source for your Loki instance.`,
      type: 'INFO'
    });
  } // Hint for big disabled lookups


  if (datasource.lookupsDisabled) {
    hints.push({
      label: `Labels and metrics lookup was disabled in data source settings.`,
      type: 'INFO'
    });
  }

  return hints;
}
// EXTERNAL MODULE: ./.yarn/cache/d3-npm-5.15.0-0c7696026f-7342d82e55.zip/node_modules/d3/index.js + 412 modules
var d3 = __webpack_require__("./.yarn/cache/d3-npm-5.15.0-0c7696026f-7342d82e55.zip/node_modules/d3/index.js");
// EXTERNAL MODULE: ./public/app/plugins/datasource/prometheus/types.ts
var types = __webpack_require__("./public/app/plugins/datasource/prometheus/types.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/result_transformer.ts
const _excluded = ["__name__"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






 // handles case-insensitive Inf, +Inf, -Inf (with optional "inity" suffix)

const INFINITY_SAMPLE_REGEX = /^[+-]?inf(?:inity)?$/i;

const isTableResult = (dataFrame, options) => {
  var _dataFrame$meta, _dataFrame$meta$custo, _dataFrame$meta2, _dataFrame$meta2$cust;

  // We want to process vector and scalar results in Explore as table
  if (options.app === src.CoreApp.Explore && (((_dataFrame$meta = dataFrame.meta) === null || _dataFrame$meta === void 0 ? void 0 : (_dataFrame$meta$custo = _dataFrame$meta.custom) === null || _dataFrame$meta$custo === void 0 ? void 0 : _dataFrame$meta$custo.resultType) === 'vector' || ((_dataFrame$meta2 = dataFrame.meta) === null || _dataFrame$meta2 === void 0 ? void 0 : (_dataFrame$meta2$cust = _dataFrame$meta2.custom) === null || _dataFrame$meta2$cust === void 0 ? void 0 : _dataFrame$meta2$cust.resultType) === 'scalar')) {
    return true;
  } // We want to process all dataFrames with target.format === 'table' as table


  const target = options.targets.find(target => target.refId === dataFrame.refId);
  return (target === null || target === void 0 ? void 0 : target.format) === 'table';
};

const isHeatmapResult = (dataFrame, options) => {
  const target = options.targets.find(target => target.refId === dataFrame.refId);
  return (target === null || target === void 0 ? void 0 : target.format) === 'heatmap';
}; // V2 result trasnformer used to transform query results from queries that were run trough prometheus backend


function transformV2(response, request, options) {
  const [tableFrames, framesWithoutTable] = (0,lodash.partition)(response.data, df => isTableResult(df, request));
  const processedTableFrames = transformDFToTable(tableFrames);
  const [exemplarFrames, framesWithoutTableAndExemplars] = (0,lodash.partition)(framesWithoutTable, df => {
    var _df$meta, _df$meta$custom;

    return ((_df$meta = df.meta) === null || _df$meta === void 0 ? void 0 : (_df$meta$custom = _df$meta.custom) === null || _df$meta$custom === void 0 ? void 0 : _df$meta$custom.resultType) === 'exemplar';
  }); // EXEMPLAR FRAMES: We enrich exemplar frames with data links and add dataTopic meta info

  const {
    exemplarTraceIdDestinations: destinations
  } = options;
  const processedExemplarFrames = exemplarFrames.map(dataFrame => {
    if (destinations !== null && destinations !== void 0 && destinations.length) {
      for (const exemplarTraceIdDestination of destinations) {
        const traceIDField = dataFrame.fields.find(field => field.name === exemplarTraceIdDestination.name);

        if (traceIDField) {
          var _traceIDField$config$;

          const links = getDataLinks(exemplarTraceIdDestination);
          traceIDField.config.links = (_traceIDField$config$ = traceIDField.config.links) !== null && _traceIDField$config$ !== void 0 && _traceIDField$config$.length ? [...traceIDField.config.links, ...links] : links;
        }
      }
    }

    return Object.assign({}, dataFrame, {
      meta: Object.assign({}, dataFrame.meta, {
        dataTopic: src.DataTopic.Annotations
      })
    });
  });
  const [heatmapResults, framesWithoutTableHeatmapsAndExemplars] = (0,lodash.partition)(framesWithoutTableAndExemplars, df => isHeatmapResult(df, request));
  const processedHeatmapFrames = mergeHeatmapFrames(transformToHistogramOverTime(heatmapResults.sort(sortSeriesByLabel))); // Everything else is processed as time_series result and graph preferredVisualisationType

  const otherFrames = framesWithoutTableHeatmapsAndExemplars.map(dataFrame => {
    const df = Object.assign({}, dataFrame, {
      meta: Object.assign({}, dataFrame.meta, {
        preferredVisualisationType: 'graph'
      })
    });
    return df;
  });
  return Object.assign({}, response, {
    data: [...otherFrames, ...processedTableFrames, ...processedHeatmapFrames, ...processedExemplarFrames]
  });
}
function transformDFToTable(dfs) {
  // If no dataFrames or if 1 dataFrames with no values, return original dataFrame
  if (dfs.length === 0 || dfs.length === 1 && dfs[0].length === 0) {
    return dfs;
  } // Group results by refId and process dataFrames with the same refId as 1 dataFrame


  const dataFramesByRefId = (0,lodash.groupBy)(dfs, 'refId');
  const refIds = Object.keys(dataFramesByRefId);
  const frames = refIds.map(refId => {
    // Create timeField, valueField and labelFields
    const valueText = getValueText(refIds.length, refId);
    const valueField = getValueField({
      data: [],
      valueName: valueText
    });
    const timeField = getTimeField([]);
    const labelFields = []; // Fill labelsFields with labels from dataFrames

    dataFramesByRefId[refId].forEach(df => {
      var _frameValueField$labe;

      const frameValueField = df.fields[1];
      const promLabels = (_frameValueField$labe = frameValueField.labels) !== null && _frameValueField$labe !== void 0 ? _frameValueField$labe : {};
      Object.keys(promLabels).sort().forEach(label => {
        // If we don't have label in labelFields, add it
        if (!labelFields.some(l => l.name === label)) {
          const numberField = label === 'le';
          labelFields.push({
            name: label,
            config: {
              filterable: true
            },
            type: numberField ? src.FieldType.number : src.FieldType.string,
            values: new src.ArrayVector()
          });
        }
      });
    }); // Fill valueField, timeField and labelFields with values

    dataFramesByRefId[refId].forEach(df => {
      df.fields[0].values.toArray().forEach(value => timeField.values.add(value));
      df.fields[1].values.toArray().forEach(value => {
        var _df$fields$1$labels;

        valueField.values.add(parseSampleValue(value));
        const labelsForField = (_df$fields$1$labels = df.fields[1].labels) !== null && _df$fields$1$labels !== void 0 ? _df$fields$1$labels : {};
        labelFields.forEach(field => field.values.add(getLabelValue(labelsForField, field.name)));
      });
    });
    const fields = [timeField, ...labelFields, valueField];
    return {
      refId,
      fields,
      meta: Object.assign({}, dfs[0].meta, {
        preferredVisualisationType: 'table'
      }),
      length: timeField.values.length
    };
  });
  return frames;
}

function getValueText(responseLength) {
  let refId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return responseLength > 1 ? `Value #${refId}` : 'Value';
}

function transform(response, transformOptions) {
  // Create options object from transformOptions
  const options = {
    format: transformOptions.target.format,
    step: transformOptions.query.step,
    legendFormat: transformOptions.target.legendFormat,
    start: transformOptions.query.start,
    end: transformOptions.query.end,
    query: transformOptions.query.expr,
    responseListLength: transformOptions.responseListLength,
    scopedVars: transformOptions.scopedVars,
    refId: transformOptions.target.refId,
    valueWithRefId: transformOptions.target.valueWithRefId,
    meta: {
      // Fix for showing of Prometheus results in Explore table
      preferredVisualisationType: transformOptions.query.instant ? 'table' : 'graph'
    }
  };
  const prometheusResult = response.data.data;

  if ((0,types/* isExemplarData */.WS)(prometheusResult)) {
    var _transformOptions$exe;

    const events = [];
    prometheusResult.forEach(exemplarData => {
      const data = exemplarData.exemplars.map(exemplar => {
        return Object.assign({
          [src.TIME_SERIES_TIME_FIELD_NAME]: exemplar.timestamp * 1000,
          [src.TIME_SERIES_VALUE_FIELD_NAME]: exemplar.value
        }, exemplar.labels, exemplarData.seriesLabels);
      });
      events.push(...data);
    }); // Grouping exemplars by step

    const sampledExemplars = sampleExemplars(events, options);
    const dataFrame = new src.ArrayDataFrame(sampledExemplars);
    dataFrame.meta = {
      dataTopic: src.DataTopic.Annotations
    }; // Add data links if configured

    if ((_transformOptions$exe = transformOptions.exemplarTraceIdDestinations) !== null && _transformOptions$exe !== void 0 && _transformOptions$exe.length) {
      for (const exemplarTraceIdDestination of transformOptions.exemplarTraceIdDestinations) {
        const traceIDField = dataFrame.fields.find(field => field.name === exemplarTraceIdDestination.name);

        if (traceIDField) {
          var _traceIDField$config$2;

          const links = getDataLinks(exemplarTraceIdDestination);
          traceIDField.config.links = (_traceIDField$config$2 = traceIDField.config.links) !== null && _traceIDField$config$2 !== void 0 && _traceIDField$config$2.length ? [...traceIDField.config.links, ...links] : links;
        }
      }
    }

    return [dataFrame];
  }

  if (!(prometheusResult !== null && prometheusResult !== void 0 && prometheusResult.result)) {
    return [];
  } // Return early if result type is scalar


  if (prometheusResult.resultType === 'scalar') {
    return [{
      meta: options.meta,
      refId: options.refId,
      length: 1,
      fields: [getTimeField([prometheusResult.result]), getValueField({
        data: [prometheusResult.result]
      })]
    }];
  } // Return early again if the format is table, this needs special transformation.


  if (options.format === 'table') {
    const tableData = transformMetricDataToTable(prometheusResult.result, options);
    return [tableData];
  } // Process matrix and vector results to DataFrame


  const dataFrame = [];
  prometheusResult.result.forEach(data => dataFrame.push(transformToDataFrame(data, options))); // When format is heatmap use the already created data frames and transform it more

  if (options.format === 'heatmap') {
    return mergeHeatmapFrames(transformToHistogramOverTime(dataFrame.sort(sortSeriesByLabel)));
  } // Return matrix or vector result as DataFrame[]


  return dataFrame;
}

function getDataLinks(options) {
  const dataLinks = [];

  if (options.datasourceUid) {
    var _dsSettings$name;

    const dataSourceSrv = (0,grafana_runtime_src.getDataSourceSrv)();
    const dsSettings = dataSourceSrv.getInstanceSettings(options.datasourceUid);
    dataLinks.push({
      title: options.urlDisplayLabel || `Query with ${dsSettings === null || dsSettings === void 0 ? void 0 : dsSettings.name}`,
      url: '',
      internal: {
        query: {
          query: '${__value.raw}',
          queryType: 'traceId'
        },
        datasourceUid: options.datasourceUid,
        datasourceName: (_dsSettings$name = dsSettings === null || dsSettings === void 0 ? void 0 : dsSettings.name) !== null && _dsSettings$name !== void 0 ? _dsSettings$name : 'Data source not found'
      }
    });
  }

  if (options.url) {
    dataLinks.push({
      title: options.urlDisplayLabel || `Go to ${options.url}`,
      url: options.url,
      targetBlank: true
    });
  }

  return dataLinks;
}
/**
 * Reduce the density of the exemplars by making sure that the highest value exemplar is included
 * and then only the ones that are 2 times the standard deviation of the all the values.
 * This makes sure not to show too many dots near each other.
 */


function sampleExemplars(events, options) {
  const step = options.step || 15;
  const bucketedExemplars = {};
  const values = [];

  for (const exemplar of events) {
    // Align exemplar timestamp to nearest step second
    const alignedTs = String(Math.floor(exemplar[src.TIME_SERIES_TIME_FIELD_NAME] / 1000 / step) * step * 1000);

    if (!bucketedExemplars[alignedTs]) {
      // New bucket found
      bucketedExemplars[alignedTs] = [];
    }

    bucketedExemplars[alignedTs].push(exemplar);
    values.push(exemplar[src.TIME_SERIES_VALUE_FIELD_NAME]);
  } // Getting exemplars from each bucket


  const standardDeviation = (0,d3.deviation)(values);
  const sampledBuckets = Object.keys(bucketedExemplars).sort();
  const sampledExemplars = [];

  for (const ts of sampledBuckets) {
    const exemplarsInBucket = bucketedExemplars[ts];

    if (exemplarsInBucket.length === 1) {
      sampledExemplars.push(exemplarsInBucket[0]);
    } else {
      // Choose which values to sample
      const bucketValues = exemplarsInBucket.map(ex => ex[src.TIME_SERIES_VALUE_FIELD_NAME]).sort(d3.descending);
      const sampledBucketValues = bucketValues.reduce((acc, curr) => {
        if (acc.length === 0) {
          // First value is max and is always added
          acc.push(curr);
        } else {
          // Then take values only when at least 2 standard deviation distance to previously taken value
          const prev = acc[acc.length - 1];

          if (standardDeviation && prev - curr >= 2 * standardDeviation) {
            acc.push(curr);
          }
        }

        return acc;
      }, []); // Find the exemplars for the sampled values

      sampledExemplars.push(...sampledBucketValues.map(value => exemplarsInBucket.find(ex => ex[src.TIME_SERIES_VALUE_FIELD_NAME] === value)));
    }
  }

  return sampledExemplars;
}
/**
 * Transforms matrix and vector result from Prometheus result to DataFrame
 */


function transformToDataFrame(data, options) {
  const {
    name,
    labels
  } = createLabelInfo(data.metric, options);
  const fields = [];

  if ((0,types/* isMatrixData */.el)(data)) {
    const stepMs = options.step ? options.step * 1000 : NaN;
    let baseTimestamp = options.start * 1000;
    const dps = [];

    for (const value of data.values) {
      let dpValue = parseSampleValue(value[1]);

      if (isNaN(dpValue)) {
        dpValue = null;
      }

      const timestamp = value[0] * 1000;

      for (let t = baseTimestamp; t < timestamp; t += stepMs) {
        dps.push([t, null]);
      }

      baseTimestamp = timestamp + stepMs;
      dps.push([timestamp, dpValue]);
    }

    const endTimestamp = options.end * 1000;

    for (let t = baseTimestamp; t <= endTimestamp; t += stepMs) {
      dps.push([t, null]);
    }

    fields.push(getTimeField(dps, true));
    fields.push(getValueField({
      data: dps,
      parseValue: false,
      labels,
      displayNameFromDS: name
    }));
  } else {
    fields.push(getTimeField([data.value]));
    fields.push(getValueField({
      data: [data.value],
      labels,
      displayNameFromDS: name
    }));
  }

  return {
    meta: options.meta,
    refId: options.refId,
    length: fields[0].values.length,
    fields,
    name
  };
}

function transformMetricDataToTable(md, options) {
  if (!md || md.length === 0) {
    return {
      meta: options.meta,
      refId: options.refId,
      length: 0,
      fields: []
    };
  }

  const valueText = options.responseListLength > 1 || options.valueWithRefId ? `Value #${options.refId}` : 'Value';
  const timeField = getTimeField([]);
  const metricFields = Object.keys(md.reduce((acc, series) => Object.assign({}, acc, series.metric), {})).sort().map(label => {
    // Labels have string field type, otherwise table tries to figure out the type which can result in unexpected results
    // Only "le" label has a number field type
    const numberField = label === 'le';
    return {
      name: label,
      config: {
        filterable: true
      },
      type: numberField ? src.FieldType.number : src.FieldType.string,
      values: new src.ArrayVector()
    };
  });
  const valueField = getValueField({
    data: [],
    valueName: valueText
  });
  md.forEach(d => {
    if ((0,types/* isMatrixData */.el)(d)) {
      d.values.forEach(val => {
        timeField.values.add(val[0] * 1000);
        metricFields.forEach(metricField => metricField.values.add(getLabelValue(d.metric, metricField.name)));
        valueField.values.add(parseSampleValue(val[1]));
      });
    } else {
      timeField.values.add(d.value[0] * 1000);
      metricFields.forEach(metricField => metricField.values.add(getLabelValue(d.metric, metricField.name)));
      valueField.values.add(parseSampleValue(d.value[1]));
    }
  });
  return {
    meta: options.meta,
    refId: options.refId,
    length: timeField.values.length,
    fields: [timeField, ...metricFields, valueField]
  };
}

function getLabelValue(metric, label) {
  if (metric.hasOwnProperty(label)) {
    if (label === 'le') {
      return parseSampleValue(metric[label]);
    }

    return metric[label];
  }

  return '';
}

function getTimeField(data) {
  let isMs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    name: src.TIME_SERIES_TIME_FIELD_NAME,
    type: src.FieldType.time,
    config: {},
    values: new src.ArrayVector(data.map(val => isMs ? val[0] : val[0] * 1000))
  };
}

function getValueField(_ref) {
  let {
    data,
    valueName = src.TIME_SERIES_VALUE_FIELD_NAME,
    parseValue = true,
    labels,
    displayNameFromDS
  } = _ref;
  return {
    name: valueName,
    type: src.FieldType.number,
    display: (0,src.getDisplayProcessor)(),
    config: {
      displayNameFromDS
    },
    labels,
    values: new src.ArrayVector(data.map(val => parseValue ? parseSampleValue(val[1]) : val[1]))
  };
}

function createLabelInfo(labels, options) {
  if (options !== null && options !== void 0 && options.legendFormat) {
    const title = (0,legend/* renderLegendFormat */.W)((0,grafana_runtime_src.getTemplateSrv)().replace(options.legendFormat, options === null || options === void 0 ? void 0 : options.scopedVars), labels);
    return {
      name: title,
      labels
    };
  }

  const {
    __name__
  } = labels,
        labelsWithoutName = _objectWithoutPropertiesLoose(labels, _excluded);

  const labelPart = (0,src.formatLabels)(labelsWithoutName);
  let title = `${__name__ !== null && __name__ !== void 0 ? __name__ : ''}${labelPart}`;

  if (!title) {
    title = options.query;
  }

  return {
    name: title,
    labels: labelsWithoutName
  };
}

function getOriginalMetricName(labelData) {
  const metricName = labelData.__name__ || '';
  delete labelData.__name__;
  const labelPart = Object.entries(labelData).map(label => `${label[0]}="${label[1]}"`).join(',');
  return `${metricName}{${labelPart}}`;
}

function mergeHeatmapFrames(frames) {
  if (frames.length === 0) {
    return [];
  }

  const timeField = frames[0].fields.find(field => field.type === src.FieldType.time);
  const countFields = frames.map(frame => {
    let field = frame.fields.find(field => field.type === src.FieldType.number);
    return Object.assign({}, field, {
      name: field.config.displayNameFromDS
    });
  });
  return [Object.assign({}, frames[0], {
    meta: Object.assign({}, frames[0].meta, {
      type: src.DataFrameType.HeatmapBuckets
    }),
    fields: [timeField, ...countFields]
  })];
}

function transformToHistogramOverTime(seriesList) {
  /*      t1 = timestamp1, t2 = timestamp2 etc.
            t1  t2  t3          t1  t2  t3
    le10    10  10  0     =>    10  10  0
    le20    20  10  30    =>    10  0   30
    le30    30  10  35    =>    10  0   5
    */
  for (let i = seriesList.length - 1; i > 0; i--) {
    const topSeries = seriesList[i].fields.find(s => s.name === src.TIME_SERIES_VALUE_FIELD_NAME);
    const bottomSeries = seriesList[i - 1].fields.find(s => s.name === src.TIME_SERIES_VALUE_FIELD_NAME);

    if (!topSeries || !bottomSeries) {
      throw new Error('Prometheus heatmap transform error: data should be a time series');
    }

    for (let j = 0; j < topSeries.values.length; j++) {
      const bottomPoint = bottomSeries.values.get(j) || [0];
      topSeries.values.toArray()[j] -= bottomPoint;
    }
  }

  return seriesList;
}

function sortSeriesByLabel(s1, s2) {
  let le1, le2;

  try {
    var _s1$name, _s2$name;

    // fail if not integer. might happen with bad queries
    le1 = parseSampleValue((_s1$name = s1.name) !== null && _s1$name !== void 0 ? _s1$name : '');
    le2 = parseSampleValue((_s2$name = s2.name) !== null && _s2$name !== void 0 ? _s2$name : '');
  } catch (err) {
    console.error(err);
    return 0;
  }

  if (le1 > le2) {
    return 1;
  }

  if (le1 < le2) {
    return -1;
  }

  return 0;
}
/** @internal */


function parseSampleValue(value) {
  if (INFINITY_SAMPLE_REGEX.test(value)) {
    return value[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
  }

  return parseFloat(value);
}
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js
var from = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/variables.ts






class PrometheusVariableSupport extends src.StandardVariableSupport {
  constructor(datasource) {
    let templateSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,grafana_runtime_src.getTemplateSrv)();
    let timeSrv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0,TimeSrv/* getTimeSrv */.$t)();
    super();
    this.datasource = datasource;
    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;
    this.datasource = datasource;
    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;
    this.query = this.query.bind(this);
  }

  query(request) {
    const query = request.targets[0].expr;

    if (!query) {
      return (0,of.of)({
        data: []
      });
    }

    const scopedVars = Object.assign({}, request.scopedVars, {
      __interval: {
        text: this.datasource.interval,
        value: this.datasource.interval
      },
      __interval_ms: {
        text: src.rangeUtil.intervalToMs(this.datasource.interval),
        value: src.rangeUtil.intervalToMs(this.datasource.interval)
      }
    }, this.datasource.getRangeScopedVars(this.timeSrv.timeRange()));
    const interpolated = this.templateSrv.replace(query, scopedVars, this.datasource.interpolateQueryExpr);
    const metricFindQuery = new PrometheusMetricFindQuery(this.datasource, interpolated);
    const metricFindStream = (0,from/* from */.D)(metricFindQuery.process());
    return metricFindStream.pipe((0,map/* map */.U)(results => ({
      data: results
    })));
  }

  toDataQuery(query) {
    return {
      refId: 'PrometheusDatasource-VariableQuery',
      expr: query.query
    };
  }

}
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/datasource.tsx
var _Badge, _Badge2, _Tooltip, _div, _div2;

function datasource_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























const ANNOTATION_QUERY_STEP_DEFAULT = '60s';
const GET_AND_POST_METADATA_ENDPOINTS = ['api/v1/query', 'api/v1/query_range', 'api/v1/series', 'api/v1/labels'];
class PrometheusDatasource extends grafana_runtime_src.DataSourceWithBackend {
  constructor(instanceSettings) {
    var _instanceSettings$jso, _instanceSettings$jso2;

    let templateSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,template_srv/* getTemplateSrv */.J)();
    let timeSrv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0,TimeSrv/* getTimeSrv */.$t)();
    let languageProvider = arguments.length > 3 ? arguments[3] : undefined;
    super(instanceSettings);
    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;

    datasource_defineProperty(this, "type", void 0);

    datasource_defineProperty(this, "editorSrc", void 0);

    datasource_defineProperty(this, "ruleMappings", void 0);

    datasource_defineProperty(this, "url", void 0);

    datasource_defineProperty(this, "id", void 0);

    datasource_defineProperty(this, "directUrl", void 0);

    datasource_defineProperty(this, "access", void 0);

    datasource_defineProperty(this, "basicAuth", void 0);

    datasource_defineProperty(this, "withCredentials", void 0);

    datasource_defineProperty(this, "metricsNameCache", new (lru_cache_default())({
      max: 10
    }));

    datasource_defineProperty(this, "interval", void 0);

    datasource_defineProperty(this, "queryTimeout", void 0);

    datasource_defineProperty(this, "httpMethod", void 0);

    datasource_defineProperty(this, "languageProvider", void 0);

    datasource_defineProperty(this, "exemplarTraceIdDestinations", void 0);

    datasource_defineProperty(this, "lookupsDisabled", void 0);

    datasource_defineProperty(this, "customQueryParameters", void 0);

    datasource_defineProperty(this, "exemplarsAvailable", void 0);

    datasource_defineProperty(this, "subType", void 0);

    datasource_defineProperty(this, "rulerEnabled", void 0);

    datasource_defineProperty(this, "init", async () => {
      this.loadRules();
      this.exemplarsAvailable = await this.areExemplarsAvailable();
    });

    datasource_defineProperty(this, "prepareTargets", (options, start, end) => {
      const queries = [];
      const activeTargets = [];
      const clonedTargets = (0,lodash.cloneDeep)(options.targets);

      for (const target of clonedTargets) {
        if (!target.expr || target.hide) {
          continue;
        }

        target.requestId = options.panelId + target.refId;
        const metricName = this.languageProvider.histogramMetrics.find(m => target.expr.includes(m)); // In Explore, we run both (instant and range) queries if both are true (selected) or both are undefined (legacy Explore queries)

        if (options.app === src.CoreApp.Explore && target.range === target.instant) {
          // Create instant target
          const instantTarget = (0,lodash.cloneDeep)(target);
          instantTarget.format = 'table';
          instantTarget.instant = true;
          instantTarget.range = false;
          instantTarget.valueWithRefId = true;
          delete instantTarget.maxDataPoints;
          instantTarget.requestId += '_instant'; // Create range target

          const rangeTarget = (0,lodash.cloneDeep)(target);
          rangeTarget.format = 'time_series';
          rangeTarget.instant = false;
          instantTarget.range = true; // Create exemplar query

          if (target.exemplar) {
            // Only create exemplar target for different metric names
            if (!metricName || metricName && !activeTargets.some(activeTarget => activeTarget.expr.includes(metricName))) {
              const exemplarTarget = (0,lodash.cloneDeep)(target);
              exemplarTarget.instant = false;
              exemplarTarget.requestId += '_exemplar';
              queries.push(this.createQuery(exemplarTarget, options, start, end));
              activeTargets.push(exemplarTarget);
            }

            instantTarget.exemplar = false;
            rangeTarget.exemplar = false;
          } // Add both targets to activeTargets and queries arrays


          activeTargets.push(instantTarget, rangeTarget);
          queries.push(this.createQuery(instantTarget, options, start, end), this.createQuery(rangeTarget, options, start, end)); // If running only instant query in Explore, format as table
        } else if (target.instant && options.app === src.CoreApp.Explore) {
          const instantTarget = (0,lodash.cloneDeep)(target);
          instantTarget.format = 'table';
          queries.push(this.createQuery(instantTarget, options, start, end));
          activeTargets.push(instantTarget);
        } else {
          // It doesn't make sense to query for exemplars in dashboard if only instant is selected
          if (target.exemplar && !target.instant) {
            if (!metricName || metricName && !activeTargets.some(activeTarget => activeTarget.expr.includes(metricName))) {
              const exemplarTarget = (0,lodash.cloneDeep)(target);
              exemplarTarget.requestId += '_exemplar';
              queries.push(this.createQuery(exemplarTarget, options, start, end));
              activeTargets.push(exemplarTarget);
            }

            target.exemplar = false;
          }

          queries.push(this.createQuery(target, options, start, end));
          activeTargets.push(target);
        }
      }

      return {
        queries,
        activeTargets
      };
    });

    datasource_defineProperty(this, "handleErrors", (err, target) => {
      const error = {
        message: err && err.statusText || 'Unknown error during query transaction. Please check JS console logs.',
        refId: target.refId
      };

      if (err.data) {
        if (typeof err.data === 'string') {
          error.message = err.data;
        } else if (err.data.error) {
          error.message = (0,explore/* safeStringifyValue */.Xh)(err.data.error);
        }
      } else if (err.message) {
        error.message = err.message;
      } else if (typeof err === 'string') {
        error.message = err;
      }

      error.status = err.status;
      error.statusText = err.statusText;
      return error;
    });

    datasource_defineProperty(this, "processAnnotationResponse", (options, data) => {
      const frames = (0,grafana_runtime_src.toDataQueryResponse)({
        data: data
      }).data;

      if (!frames || !frames.length) {
        return [];
      }

      const annotation = options.annotation;
      const {
        tagKeys = '',
        titleFormat = '',
        textFormat = ''
      } = annotation;
      const step = src.rangeUtil.intervalToSeconds(annotation.step || ANNOTATION_QUERY_STEP_DEFAULT) * 1000;
      const tagKeysArray = tagKeys.split(',');
      const eventList = [];

      for (const frame of frames) {
        const timeField = frame.fields[0];
        const valueField = frame.fields[1];
        const labels = (valueField === null || valueField === void 0 ? void 0 : valueField.labels) || {};
        const tags = Object.keys(labels).filter(label => tagKeysArray.includes(label)).map(label => labels[label]);
        const timeValueTuple = [];
        let idx = 0;
        valueField.values.toArray().forEach(value => {
          let timeStampValue;
          let valueValue;
          const time = timeField.values.get(idx); // If we want to use value as a time, we use value as timeStampValue and valueValue will be 1

          if (options.annotation.useValueForTime) {
            timeStampValue = Math.floor(parseFloat(value));
            valueValue = 1;
          } else {
            timeStampValue = Math.floor(parseFloat(time));
            valueValue = parseFloat(value);
          }

          idx++;
          timeValueTuple.push([timeStampValue, valueValue]);
        });
        const activeValues = timeValueTuple.filter(value => value[1] >= 1);
        const activeValuesTimestamps = activeValues.map(value => value[0]); // Instead of creating singular annotation for each active event we group events into region if they are less
        // or equal to `step` apart.

        let latestEvent = null;

        for (const timestamp of activeValuesTimestamps) {
          var _latestEvent$timeEnd;

          // We already have event `open` and we have new event that is inside the `step` so we just update the end.
          if (latestEvent && ((_latestEvent$timeEnd = latestEvent.timeEnd) !== null && _latestEvent$timeEnd !== void 0 ? _latestEvent$timeEnd : 0) + step >= timestamp) {
            latestEvent.timeEnd = timestamp;
            continue;
          } // Event exists but new one is outside of the `step` so we add it to eventList.


          if (latestEvent) {
            eventList.push(latestEvent);
          } // We start a new region.


          latestEvent = {
            time: timestamp,
            timeEnd: timestamp,
            annotation,
            title: (0,legend/* renderLegendFormat */.W)(titleFormat, labels),
            tags,
            text: (0,legend/* renderLegendFormat */.W)(textFormat, labels)
          };
        }

        if (latestEvent) {
          // Finish up last point if we have one
          latestEvent.timeEnd = activeValuesTimestamps[activeValuesTimestamps.length - 1];
          eventList.push(latestEvent);
        }
      }

      return eventList;
    });

    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;
    this.type = 'prometheus';
    this.subType = unified_alerting_dto/* PromApplication.Prometheus */.T8.Prometheus;
    this.rulerEnabled = false;
    this.editorSrc = 'app/features/prometheus/partials/query.editor.html';
    this.id = instanceSettings.id;
    this.url = instanceSettings.url;
    this.access = instanceSettings.access;
    this.basicAuth = instanceSettings.basicAuth;
    this.withCredentials = instanceSettings.withCredentials;
    this.interval = instanceSettings.jsonData.timeInterval || '15s';
    this.queryTimeout = instanceSettings.jsonData.queryTimeout;
    this.httpMethod = instanceSettings.jsonData.httpMethod || 'POST'; // `directUrl` is never undefined, we set it at https://github.com/grafana/grafana/blob/main/pkg/api/frontendsettings.go#L108
    // here we "fall back" to this.url to make typescript happy, but it should never happen

    this.directUrl = (_instanceSettings$jso = instanceSettings.jsonData.directUrl) !== null && _instanceSettings$jso !== void 0 ? _instanceSettings$jso : this.url;
    this.exemplarTraceIdDestinations = instanceSettings.jsonData.exemplarTraceIdDestinations;
    this.ruleMappings = {};
    this.languageProvider = languageProvider !== null && languageProvider !== void 0 ? languageProvider : new language_provider/* default */.ZP(this);
    this.lookupsDisabled = (_instanceSettings$jso2 = instanceSettings.jsonData.disableMetricsLookup) !== null && _instanceSettings$jso2 !== void 0 ? _instanceSettings$jso2 : false;
    this.customQueryParameters = new URLSearchParams(instanceSettings.jsonData.customQueryParameters);
    this.variables = new PrometheusVariableSupport(this, this.templateSrv, this.timeSrv);
    this.exemplarsAvailable = true;
  }

  getQueryDisplayText(query) {
    return query.expr;
  }

  _addTracingHeaders(httpOptions, options) {
    httpOptions.headers = {};
    const proxyMode = !this.url.match(/^http/);

    if (proxyMode) {
      httpOptions.headers['X-Dashboard-Id'] = options.dashboardId;
      httpOptions.headers['X-Panel-Id'] = options.panelId;
    }
  }
  /**
   * Any request done from this data source should go through here as it contains some common processing for the
   * request. Any processing done here needs to be also copied on the backend as this goes through data source proxy
   * but not through the same code as alerting.
   */


  _request(url, data) {
    let overrides = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    data = data || {};

    for (const [key, value] of this.customQueryParameters) {
      if (data[key] == null) {
        data[key] = value;
      }
    }

    const options = (0,lodash.defaults)(overrides, {
      url: this.url + url,
      method: this.httpMethod,
      headers: {}
    });

    if (options.method === 'GET') {
      if (data && Object.keys(data).length) {
        options.url = options.url + (options.url.search(/\?/) >= 0 ? '&' : '?') + Object.entries(data).map(_ref => {
          let [k, v] = _ref;
          return `${encodeURIComponent(k)}=${encodeURIComponent(v)}`;
        }).join('&');
      }
    } else {
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      options.data = data;
    }

    if (this.basicAuth || this.withCredentials) {
      options.withCredentials = true;
    }

    if (this.basicAuth) {
      options.headers.Authorization = this.basicAuth;
    }

    return (0,grafana_runtime_src.getBackendSrv)().fetch(options);
  }

  async importFromAbstractQueries(abstractQueries) {
    return abstractQueries.map(abstractQuery => this.languageProvider.importFromAbstractQuery(abstractQuery));
  }

  async exportToAbstractQueries(queries) {
    return queries.map(query => this.languageProvider.exportToAbstractQuery(query));
  } // Use this for tab completion features, wont publish response to other components


  async metadataRequest(url) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // If URL includes endpoint that supports POST and GET method, try to use configured method. This might fail as POST is supported only in v2.10+.
    if (GET_AND_POST_METADATA_ENDPOINTS.some(endpoint => url.includes(endpoint))) {
      try {
        return await (0,lastValueFrom/* lastValueFrom */.n)(this._request(url, params, {
          method: this.httpMethod,
          hideFromInspector: true
        }));
      } catch (err) {
        // If status code of error is Method Not Allowed (405) and HTTP method is POST, retry with GET
        if (this.httpMethod === 'POST' && err.status === 405) {
          console.warn(`Couldn't use configured POST HTTP method for this request. Trying to use GET method instead.`);
        } else {
          throw err;
        }
      }
    }

    return await (0,lastValueFrom/* lastValueFrom */.n)(this._request(url, params, {
      method: 'GET',
      hideFromInspector: true
    })); // toPromise until we change getTagValues, getTagKeys to Observable
  }

  interpolateQueryExpr() {
    let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let variable = arguments.length > 1 ? arguments[1] : undefined;

    // if no multi or include all do not regexEscape
    if (!variable.multi && !variable.includeAll) {
      return prometheusRegularEscape(value);
    }

    if (typeof value === 'string') {
      return prometheusSpecialRegexEscape(value);
    }

    const escapedValues = value.map(val => prometheusSpecialRegexEscape(val));

    if (escapedValues.length === 1) {
      return escapedValues[0];
    }

    return '(' + escapedValues.join('|') + ')';
  }

  targetContainsTemplate(target) {
    return this.templateSrv.containsTemplate(target.expr);
  }

  shouldRunExemplarQuery(target, request) {
    if (target.exemplar) {
      // We check all already processed targets and only create exemplar target for not used metric names
      const metricName = this.languageProvider.histogramMetrics.find(m => target.expr.includes(m)); // Remove targets that weren't processed yet (in targets array they are after current target)

      const currentTargetIdx = request.targets.findIndex(t => t.refId === target.refId);
      const targets = request.targets.slice(0, currentTargetIdx);

      if (!metricName || metricName && !targets.some(t => t.expr.includes(metricName))) {
        return true;
      }

      return false;
    }

    return false;
  }

  processTargetV2(target, request) {
    const processedTarget = Object.assign({}, target, {
      queryType: types/* PromQueryType.timeSeriesQuery */.V5.timeSeriesQuery,
      exemplar: this.shouldRunExemplarQuery(target, request),
      requestId: request.panelId + target.refId,
      // We need to pass utcOffsetSec to backend to calculate aligned range
      utcOffsetSec: this.timeSrv.timeRange().to.utcOffset() * 60
    });
    return processedTarget;
  }

  query(request) {
    if (this.access === 'proxy') {
      const targets = request.targets.map(target => this.processTargetV2(target, request));
      return super.query(Object.assign({}, request, {
        targets
      })).pipe((0,map/* map */.U)(response => transformV2(response, request, {
        exemplarTraceIdDestinations: this.exemplarTraceIdDestinations
      }))); // Run queries trough browser/proxy
    } else {
      const start = this.getPrometheusTime(request.range.from, false);
      const end = this.getPrometheusTime(request.range.to, true);
      const {
        queries,
        activeTargets
      } = this.prepareTargets(request, start, end); // No valid targets, return the empty result to save a round trip.

      if (!queries || !queries.length) {
        return (0,of.of)({
          data: [],
          state: src.LoadingState.Done
        });
      }

      if (request.app === src.CoreApp.Explore) {
        return this.exploreQuery(queries, activeTargets, end);
      }

      return this.panelsQuery(queries, activeTargets, end, request.requestId, request.scopedVars);
    }
  }

  exploreQuery(queries, activeTargets, end) {
    let runningQueriesCount = queries.length;
    const subQueries = queries.map((query, index) => {
      const target = activeTargets[index];
      const filterAndMapResponse = (0,pipe/* pipe */.z)( // Decrease the counter here. We assume that each request returns only single value and then completes
      // (should hold until there is some streaming requests involved).
      (0,tap/* tap */.b)(() => runningQueriesCount--), (0,filter/* filter */.h)(response => response.cancelled ? false : true), (0,map/* map */.U)(response => {
        const data = transform(response, {
          query,
          target,
          responseListLength: queries.length,
          exemplarTraceIdDestinations: this.exemplarTraceIdDestinations
        });
        return {
          data,
          key: query.requestId,
          state: runningQueriesCount === 0 ? src.LoadingState.Done : src.LoadingState.Loading
        };
      }));
      return this.runQuery(query, end, filterAndMapResponse);
    });
    return (0,merge/* merge */.T)(...subQueries);
  }

  panelsQuery(queries, activeTargets, end, requestId, scopedVars) {
    const observables = queries.map((query, index) => {
      const target = activeTargets[index];
      const filterAndMapResponse = (0,pipe/* pipe */.z)((0,filter/* filter */.h)(response => response.cancelled ? false : true), (0,map/* map */.U)(response => {
        const data = transform(response, {
          query,
          target,
          responseListLength: queries.length,
          scopedVars,
          exemplarTraceIdDestinations: this.exemplarTraceIdDestinations
        });
        return data;
      }));
      return this.runQuery(query, end, filterAndMapResponse);
    });
    return (0,forkJoin/* forkJoin */.D)(observables).pipe((0,map/* map */.U)(results => {
      const data = results.reduce((result, current) => {
        return [...result, ...current];
      }, []);
      return {
        data,
        key: requestId,
        state: src.LoadingState.Done
      };
    }));
  }

  runQuery(query, end, filter) {
    if (query.instant) {
      return this.performInstantQuery(query, end).pipe(filter);
    }

    if (query.exemplar) {
      return this.getExemplars(query).pipe((0,catchError/* catchError */.K)(() => {
        return (0,of.of)({
          data: [],
          state: src.LoadingState.Done
        });
      }), filter);
    }

    return this.performTimeSeriesQuery(query, query.start, query.end).pipe(filter);
  }

  createQuery(target, options, start, end) {
    const query = {
      hinting: target.hinting,
      instant: target.instant,
      exemplar: target.exemplar,
      step: 0,
      expr: '',
      requestId: target.requestId,
      refId: target.refId,
      start: 0,
      end: 0
    };
    const range = Math.ceil(end - start); // options.interval is the dynamically calculated interval

    let interval = src.rangeUtil.intervalToSeconds(options.interval); // Minimum interval ("Min step"), if specified for the query, or same as interval otherwise.

    const minInterval = src.rangeUtil.intervalToSeconds(this.templateSrv.replace(target.interval || options.interval, options.scopedVars)); // Scrape interval as specified for the query ("Min step") or otherwise taken from the datasource.
    // Min step field can have template variables in it, make sure to replace it.

    const scrapeInterval = target.interval ? src.rangeUtil.intervalToSeconds(this.templateSrv.replace(target.interval, options.scopedVars)) : src.rangeUtil.intervalToSeconds(this.interval);
    const intervalFactor = target.intervalFactor || 1; // Adjust the interval to take into account any specified minimum and interval factor plus Prometheus limits

    const adjustedInterval = this.adjustInterval(interval, minInterval, range, intervalFactor);
    let scopedVars = Object.assign({}, options.scopedVars, this.getRangeScopedVars(options.range), this.getRateIntervalScopedVariable(adjustedInterval, scrapeInterval)); // If the interval was adjusted, make a shallow copy of scopedVars with updated interval vars

    if (interval !== adjustedInterval) {
      interval = adjustedInterval;
      scopedVars = Object.assign({}, options.scopedVars, Object.assign({
        __interval: {
          text: interval + 's',
          value: interval + 's'
        },
        __interval_ms: {
          text: interval * 1000,
          value: interval * 1000
        }
      }, this.getRateIntervalScopedVariable(interval, scrapeInterval), this.getRangeScopedVars(options.range)));
    }

    query.step = interval;
    let expr = target.expr; // Apply adhoc filters

    expr = this.enhanceExprWithAdHocFilters(expr); // Only replace vars in expression after having (possibly) updated interval vars

    query.expr = this.templateSrv.replace(expr, scopedVars, this.interpolateQueryExpr); // Align query interval with step to allow query caching and to ensure
    // that about-same-time query results look the same.

    const adjusted = alignRange(start, end, query.step, this.timeSrv.timeRange().to.utcOffset() * 60);
    query.start = adjusted.start;
    query.end = adjusted.end;

    this._addTracingHeaders(query, options);

    return query;
  }

  getRateIntervalScopedVariable(interval, scrapeInterval) {
    // Fall back to the default scrape interval of 15s if scrapeInterval is 0 for some reason.
    if (scrapeInterval === 0) {
      scrapeInterval = 15;
    }

    const rateInterval = Math.max(interval + scrapeInterval, 4 * scrapeInterval);
    return {
      __rate_interval: {
        text: rateInterval + 's',
        value: rateInterval + 's'
      }
    };
  }

  adjustInterval(interval, minInterval, range, intervalFactor) {
    // Prometheus will drop queries that might return more than 11000 data points.
    // Calculate a safe interval as an additional minimum to take into account.
    // Fractional safeIntervals are allowed, however serve little purpose if the interval is greater than 1
    // If this is the case take the ceil of the value.
    let safeInterval = range / 11000;

    if (safeInterval > 1) {
      safeInterval = Math.ceil(safeInterval);
    }

    return Math.max(interval * intervalFactor, minInterval, safeInterval);
  }

  performTimeSeriesQuery(query, start, end) {
    if (start > end) {
      throw {
        message: 'Invalid time range'
      };
    }

    const url = '/api/v1/query_range';
    const data = {
      query: query.expr,
      start,
      end,
      step: query.step
    };

    if (this.queryTimeout) {
      data['timeout'] = this.queryTimeout;
    }

    return this._request(url, data, {
      requestId: query.requestId,
      headers: query.headers
    }).pipe((0,catchError/* catchError */.K)(err => {
      if (err.cancelled) {
        return (0,of.of)(err);
      }

      return (0,throwError/* throwError */._)(this.handleErrors(err, query));
    }));
  }

  performInstantQuery(query, time) {
    const url = '/api/v1/query';
    const data = {
      query: query.expr,
      time
    };

    if (this.queryTimeout) {
      data['timeout'] = this.queryTimeout;
    }

    return this._request(url, data, {
      requestId: query.requestId,
      headers: query.headers
    }).pipe((0,catchError/* catchError */.K)(err => {
      if (err.cancelled) {
        return (0,of.of)(err);
      }

      return (0,throwError/* throwError */._)(this.handleErrors(err, query));
    }));
  }

  metricFindQuery(query) {
    if (!query) {
      return Promise.resolve([]);
    }

    const scopedVars = Object.assign({
      __interval: {
        text: this.interval,
        value: this.interval
      },
      __interval_ms: {
        text: src.rangeUtil.intervalToMs(this.interval),
        value: src.rangeUtil.intervalToMs(this.interval)
      }
    }, this.getRangeScopedVars(this.timeSrv.timeRange()));
    const interpolated = this.templateSrv.replace(query, scopedVars, this.interpolateQueryExpr);
    const metricFindQuery = new PrometheusMetricFindQuery(this, interpolated);
    return metricFindQuery.process();
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

  async annotationQuery(options) {
    const annotation = options.annotation;
    const {
      expr = ''
    } = annotation;

    if (!expr) {
      return Promise.resolve([]);
    }

    const step = options.annotation.step || ANNOTATION_QUERY_STEP_DEFAULT;
    const queryModel = {
      expr,
      range: true,
      instant: false,
      exemplar: false,
      interval: step,
      queryType: types/* PromQueryType.timeSeriesQuery */.V5.timeSeriesQuery,
      refId: 'X',
      datasource: this.getRef()
    };
    return await (0,lastValueFrom/* lastValueFrom */.n)((0,grafana_runtime_src.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: (this.getPrometheusTime(options.range.from, false) * 1000).toString(),
        to: (this.getPrometheusTime(options.range.to, true) * 1000).toString(),
        queries: [this.applyTemplateVariables(queryModel, {})]
      },
      requestId: `prom-query-${annotation.name}`
    }).pipe((0,map/* map */.U)(rsp => {
      return this.processAnnotationResponse(options, rsp.data);
    })));
  }

  getExemplars(query) {
    const url = '/api/v1/query_exemplars';
    return this._request(url, {
      query: query.expr,
      start: query.start.toString(),
      end: query.end.toString()
    }, {
      requestId: query.requestId,
      headers: query.headers
    });
  }

  async getSubtitle() {
    const buildInfo = await this.getBuildInfo();
    return buildInfo ? this.getBuildInfoMessage(buildInfo) : null;
  }

  async getTagKeys(options) {
    if (options !== null && options !== void 0 && options.series) {
      // Get tags for the provided series only
      const seriesLabels = await Promise.all(options.series.map(series => this.languageProvider.fetchSeriesLabels(series)));
      const uniqueLabels = [...new Set(...seriesLabels.map(value => Object.keys(value)))];
      return uniqueLabels.map(value => ({
        text: value
      }));
    } else {
      var _result$data$data$map, _result$data, _result$data$data;

      // Get all tags
      const result = await this.metadataRequest('/api/v1/labels');
      return (_result$data$data$map = result === null || result === void 0 ? void 0 : (_result$data = result.data) === null || _result$data === void 0 ? void 0 : (_result$data$data = _result$data.data) === null || _result$data$data === void 0 ? void 0 : _result$data$data.map(value => ({
        text: value
      }))) !== null && _result$data$data$map !== void 0 ? _result$data$data$map : [];
    }
  }

  async getTagValues() {
    var _result$data$data$map2, _result$data2, _result$data2$data;

    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const result = await this.metadataRequest(`/api/v1/label/${options.key}/values`);
    return (_result$data$data$map2 = result === null || result === void 0 ? void 0 : (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : (_result$data2$data = _result$data2.data) === null || _result$data2$data === void 0 ? void 0 : _result$data2$data.map(value => ({
      text: value
    }))) !== null && _result$data$data$map2 !== void 0 ? _result$data$data$map2 : [];
  }

  async getBuildInfo() {
    try {
      const buildInfo = await (0,api_buildInfo/* fetchDataSourceBuildInfo */.P)(this);
      return buildInfo;
    } catch (error) {
      // We don't want to break the rest of functionality if build info does not work correctly
      return undefined;
    }
  }

  getBuildInfoMessage(buildInfo) {
    var _buildInfo$applicatio, _buildInfo$applicatio2;

    const enabled = _Badge || (_Badge = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
      color: "green",
      icon: "check",
      text: "Ruler API enabled"
    }));

    const disabled = _Badge2 || (_Badge2 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
      color: "orange",
      icon: "exclamation-triangle",
      text: "Ruler API not enabled"
    }));

    const unsupported = _Tooltip || (_Tooltip = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
      placement: "top",
      content: "Prometheus does not allow editing rules, connect to either a Mimir or Cortex datasource to manage alerts via Grafana.",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
          color: "red",
          icon: "exclamation-triangle",
          text: "Ruler API not supported"
        })
      })
    }));

    const LOGOS = {
      [unified_alerting_dto/* PromApplication.Cortex */.T8.Cortex]: '/public/app/plugins/datasource/prometheus/img/cortex_logo.svg',
      [unified_alerting_dto/* PromApplication.Mimir */.T8.Mimir]: '/public/app/plugins/datasource/prometheus/img/mimir_logo.svg',
      [unified_alerting_dto/* PromApplication.Prometheus */.T8.Prometheus]: '/public/app/plugins/datasource/prometheus/img/prometheus_logo.svg'
    };
    const COLORS = {
      [unified_alerting_dto/* PromApplication.Cortex */.T8.Cortex]: 'blue',
      [unified_alerting_dto/* PromApplication.Mimir */.T8.Mimir]: 'orange',
      [unified_alerting_dto/* PromApplication.Prometheus */.T8.Prometheus]: 'red'
    }; // this will inform the user about what "subtype" the datasource is; Mimir, Cortex or vanilla Prometheus

    const applicationSubType = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
      text: /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          style: {
            width: 14,
            height: 14,
            verticalAlign: 'text-bottom'
          },
          src: LOGOS[(_buildInfo$applicatio = buildInfo.application) !== null && _buildInfo$applicatio !== void 0 ? _buildInfo$applicatio : unified_alerting_dto/* PromApplication.Prometheus */.T8.Prometheus]
        }), ' ', buildInfo.application]
      }),
      color: COLORS[(_buildInfo$applicatio2 = buildInfo.application) !== null && _buildInfo$applicatio2 !== void 0 ? _buildInfo$applicatio2 : unified_alerting_dto/* PromApplication.Prometheus */.T8.Prometheus]
    });

    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'max-content max-content',
        rowGap: '0.5rem',
        columnGap: '2rem',
        marginTop: '1rem'
      },
      children: [_div || (_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "Type"
      })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: applicationSubType
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [_div2 || (_div2 = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: "Ruler API"
        })), buildInfo.application === unified_alerting_dto/* PromApplication.Prometheus */.T8.Prometheus && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: unsupported
        }), buildInfo.application !== unified_alerting_dto/* PromApplication.Prometheus */.T8.Prometheus && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: buildInfo.features.rulerApiEnabled ? enabled : disabled
        })]
      })]
    });
  }

  async testDatasource() {
    const now = new Date().getTime();
    const request = {
      targets: [{
        refId: 'test',
        expr: '1+1',
        instant: true
      }],
      requestId: `${this.id}-health`,
      scopedVars: {},
      dashboardId: 0,
      panelId: 0,
      interval: '1m',
      intervalMs: 60000,
      maxDataPoints: 1,
      range: {
        from: (0,src.dateTime)(now - 1000),
        to: (0,src.dateTime)(now)
      }
    };
    const buildInfo = await this.getBuildInfo();
    return (0,lastValueFrom/* lastValueFrom */.n)(this.query(request)).then(res => {
      if (!res || !res.data || res.state !== src.LoadingState.Done) {
        var _res$error;

        return {
          status: 'error',
          message: `Error reading Prometheus: ${res === null || res === void 0 ? void 0 : (_res$error = res.error) === null || _res$error === void 0 ? void 0 : _res$error.message}`
        };
      } else {
        return {
          status: 'success',
          message: 'Data source is working',
          details: buildInfo && {
            verboseMessage: this.getBuildInfoMessage(buildInfo)
          }
        };
      }
    }).catch(err => {
      console.error('Prometheus Error', err);
      return {
        status: 'error',
        message: err.message
      };
    });
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    let expandedQueries = queries;

    if (queries && queries.length) {
      expandedQueries = queries.map(query => {
        const expandedQuery = Object.assign({}, query, {
          datasource: this.getRef(),
          expr: this.templateSrv.replace(query.expr, scopedVars, this.interpolateQueryExpr),
          interval: this.templateSrv.replace(query.interval, scopedVars)
        });
        return expandedQuery;
      });
    }

    return expandedQueries;
  }

  getQueryHints(query, result) {
    var _query$expr;

    return getQueryHints((_query$expr = query.expr) !== null && _query$expr !== void 0 ? _query$expr : '', result, this);
  }

  getInitHints() {
    return getInitHints(this);
  }

  async loadRules() {
    try {
      var _res$data, _res$data$data;

      const res = await this.metadataRequest('/api/v1/rules');
      const groups = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.groups;

      if (groups) {
        this.ruleMappings = extractRuleMappingFromGroups(groups);
      }
    } catch (e) {
      console.log('Rules API is experimental. Ignore next error.');
      console.error(e);
    }
  }

  async areExemplarsAvailable() {
    try {
      const res = await this.metadataRequest('/api/v1/query_exemplars', {
        query: 'test'
      });

      if (res.data.status === 'success') {
        return true;
      }

      return false;
    } catch (err) {
      return false;
    }
  }

  modifyQuery(query, action) {
    var _query$expr2;

    let expression = (_query$expr2 = query.expr) !== null && _query$expr2 !== void 0 ? _query$expr2 : '';

    switch (action.type) {
      case 'ADD_FILTER':
        {
          expression = (0,add_label_to_query/* addLabelToQuery */.F)(expression, action.key, action.value);
          break;
        }

      case 'ADD_FILTER_OUT':
        {
          expression = (0,add_label_to_query/* addLabelToQuery */.F)(expression, action.key, action.value, '!=');
          break;
        }

      case 'ADD_HISTOGRAM_QUANTILE':
        {
          expression = `histogram_quantile(0.95, sum(rate(${expression}[$__rate_interval])) by (le))`;
          break;
        }

      case 'ADD_RATE':
        {
          expression = `rate(${expression}[$__rate_interval])`;
          break;
        }

      case 'ADD_SUM':
        {
          expression = `sum(${expression.trim()}) by ($1)`;
          break;
        }

      case 'EXPAND_RULES':
        {
          if (action.mapping) {
            expression = (0,language_utils/* expandRecordingRules */.ll)(expression, action.mapping);
          }

          break;
        }

      default:
        break;
    }

    return Object.assign({}, query, {
      expr: expression
    });
  }

  getPrometheusTime(date, roundUp) {
    if (typeof date === 'string') {
      date = src.dateMath.parse(date, roundUp);
    }

    return Math.ceil(date.valueOf() / 1000);
  }

  getTimeRangeParams() {
    const range = this.timeSrv.timeRange();
    return {
      start: this.getPrometheusTime(range.from, false).toString(),
      end: this.getPrometheusTime(range.to, true).toString()
    };
  }

  getOriginalMetricName(labelData) {
    return getOriginalMetricName(labelData);
  }

  enhanceExprWithAdHocFilters(expr) {
    const adhocFilters = this.templateSrv.getAdhocFilters(this.name);
    const finalQuery = adhocFilters.reduce((acc, filter) => {
      const {
        key,
        operator
      } = filter;
      let {
        value
      } = filter;

      if (operator === '=~' || operator === '!~') {
        value = prometheusRegularEscape(value);
      }

      return (0,add_label_to_query/* addLabelToQuery */.F)(acc, key, value, operator);
    }, expr);
    return finalQuery;
  } // Used when running queries trough backend


  filterQuery(query) {
    if (query.hide || !query.expr) {
      return false;
    }

    return true;
  } // Used when running queries trough backend


  applyTemplateVariables(target, scopedVars) {
    const variables = (0,lodash.cloneDeep)(scopedVars); // We want to interpolate these variables on backend

    delete variables.__interval;
    delete variables.__interval_ms; //Add ad hoc filters

    const expr = this.enhanceExprWithAdHocFilters(target.expr);
    return Object.assign({}, target, {
      legendFormat: this.templateSrv.replace(target.legendFormat, variables),
      expr: this.templateSrv.replace(expr, variables, this.interpolateQueryExpr),
      interval: this.templateSrv.replace(target.interval, variables)
    });
  }

  getVariables() {
    return this.templateSrv.getVariables().map(v => `$${v.name}`);
  }

  interpolateString(string) {
    return this.templateSrv.replace(string, undefined, this.interpolateQueryExpr);
  }

}
/**
 * Align query range to step.
 * Rounds start and end down to a multiple of step.
 * @param start Timestamp marking the beginning of the range.
 * @param end Timestamp marking the end of the range.
 * @param step Interval to align start and end with.
 * @param utcOffsetSec Number of seconds current timezone is offset from UTC
 */

function alignRange(start, end, step, utcOffsetSec) {
  const alignedEnd = Math.floor((end + utcOffsetSec) / step) * step - utcOffsetSec;
  const alignedStart = Math.floor((start + utcOffsetSec) / step) * step - utcOffsetSec;
  return {
    end: alignedEnd,
    start: alignedStart
  };
}
function extractRuleMappingFromGroups(groups) {
  return groups.reduce((mapping, group) => group.rules.filter(rule => rule.type === 'recording').reduce((acc, rule) => Object.assign({}, acc, {
    [rule.name]: rule.query
  }), mapping), {});
} // NOTE: these two functions are very similar to the escapeLabelValueIn* functions
// in language_utils.ts, but they are not exactly the same algorithm, and we found
// no way to reuse one in the another or vice versa.

function prometheusRegularEscape(value) {
  return typeof value === 'string' ? value.replace(/\\/g, '\\\\').replace(/'/g, "\\\\'") : value;
}
function prometheusSpecialRegexEscape(value) {
  return typeof value === 'string' ? value.replace(/\\/g, '\\\\\\\\').replace(/[$^*{}\[\]\'+?.()|]/g, '\\\\$&') : value;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/language_provider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UQ": () => (/* binding */ getMetadataString),
/* harmony export */   "ZK": () => (/* binding */ SUGGESTIONS_LIMIT),
/* harmony export */   "ZP": () => (/* binding */ PromQlLanguageProvider)
/* harmony export */ });
/* unused harmony export addHistoryMetadata */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lru-cache-npm-7.9.0-d803108233-c91a293a10.zip/node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _language_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/language_utils.ts");
/* harmony import */ var _promql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const DEFAULT_KEYS = ['job', 'instance'];
const EMPTY_SELECTOR = '{}';
const HISTORY_ITEM_COUNT = 5;
const HISTORY_COUNT_CUTOFF = 1000 * 60 * 60 * 24; // 24h
// Max number of items (metrics, labels, values) that we display as suggestions. Prevents from running out of memory.

const SUGGESTIONS_LIMIT = 10000;

const wrapLabel = label => ({
  label
});

const setFunctionKind = suggestion => {
  suggestion.kind = 'function';
  return suggestion;
};

function addHistoryMetadata(item, history) {
  const cutoffTs = Date.now() - HISTORY_COUNT_CUTOFF;
  const historyForItem = history.filter(h => h.ts > cutoffTs && h.query === item.label);
  const count = historyForItem.length;
  const recent = historyForItem[0];
  let hint = `Queried ${count} times in the last 24h.`;

  if (recent) {
    const lastQueried = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)(recent.ts).fromNow();
    hint = `${hint} Last queried ${lastQueried}.`;
  }

  return Object.assign({}, item, {
    documentation: hint
  });
}

function addMetricsMetadata(metric, metadata) {
  const item = {
    label: metric
  };

  if (metadata && metadata[metric]) {
    item.documentation = getMetadataString(metric, metadata);
  }

  return item;
}

function getMetadataString(metric, metadata) {
  if (!metadata[metric]) {
    return undefined;
  }

  const {
    type,
    help
  } = metadata[metric];
  return `${type.toUpperCase()}: ${help}`;
}
const PREFIX_DELIMITER_REGEX = /(="|!="|=~"|!~"|\{|\[|\(|\+|-|\/|\*|%|\^|\band\b|\bor\b|\bunless\b|==|>=|!=|<=|>|<|=|~|,)/;
class PromQlLanguageProvider extends _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LanguageProvider {
  /**
   *  Cache for labels of series. This is bit simplistic in the sense that it just counts responses each as a 1 and does
   *  not account for different size of a response. If that is needed a `length` function can be added in the options.
   *  10 as a max size is totally arbitrary right now.
   */
  constructor(datasource, initialValues) {
    var _this;

    super();
    _this = this;

    _defineProperty(this, "histogramMetrics", void 0);

    _defineProperty(this, "timeRange", void 0);

    _defineProperty(this, "metrics", void 0);

    _defineProperty(this, "metricsMetadata", void 0);

    _defineProperty(this, "datasource", void 0);

    _defineProperty(this, "labelKeys", []);

    _defineProperty(this, "labelsCache", new (lru_cache__WEBPACK_IMPORTED_MODULE_1___default())({
      max: 10
    }));

    _defineProperty(this, "request", async function (url, defaultValue) {
      let params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      try {
        const res = await _this.datasource.metadataRequest(url, params);
        return res.data.data;
      } catch (error) {
        console.error(error);
      }

      return defaultValue;
    });

    _defineProperty(this, "start", async () => {
      if (this.datasource.lookupsDisabled) {
        return [];
      } // TODO #33976: make those requests parallel


      await this.fetchLabels();
      this.metrics = (await this.fetchLabelValues('__name__')) || [];
      await this.loadMetricsMetadata();
      this.histogramMetrics = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__/* .processHistogramMetrics */ .NO)(this.metrics).sort();
      return [];
    });

    _defineProperty(this, "provideCompletionItems", async function (_ref) {
      let {
        prefix,
        text,
        value,
        labelKey,
        wrapperClasses
      } = _ref;
      let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const emptyResult = {
        suggestions: []
      };

      if (!value) {
        return emptyResult;
      } // Local text properties


      const empty = value.document.text.length === 0;
      const selectedLines = value.document.getTextsAtRange(value.selection);
      const currentLine = selectedLines.size === 1 ? selectedLines.first().getText() : null;
      const nextCharacter = currentLine ? currentLine[value.selection.anchor.offset] : null; // Syntax spans have 3 classes by default. More indicate a recognized token

      const tokenRecognized = wrapperClasses.length > 3; // Non-empty prefix, but not inside known token

      const prefixUnrecognized = prefix && !tokenRecognized; // Prevent suggestions in `function(|suffix)`

      const noSuffix = !nextCharacter || nextCharacter === ')'; // Prefix is safe if it does not immediately follow a complete expression and has no text after it

      const safePrefix = prefix && !text.match(/^[\]})\s]+$/) && noSuffix; // About to type next operand if preceded by binary operator

      const operatorsPattern = /[+\-*/^%]/;
      const isNextOperand = text.match(operatorsPattern); // Determine candidates by CSS context

      if (wrapperClasses.includes('context-range')) {
        // Suggestions for metric[|]
        return _this.getRangeCompletionItems();
      } else if (wrapperClasses.includes('context-labels')) {
        // Suggestions for metric{|} and metric{foo=|}, as well as metric-independent label queries like {|}
        return _this.getLabelCompletionItems({
          prefix,
          text,
          value,
          labelKey,
          wrapperClasses
        });
      } else if (wrapperClasses.includes('context-aggregation')) {
        // Suggestions for sum(metric) by (|)
        return _this.getAggregationCompletionItems(value);
      } else if (empty) {
        // Suggestions for empty query field
        return _this.getEmptyCompletionItems(context);
      } else if (prefixUnrecognized && noSuffix && !isNextOperand) {
        // Show term suggestions in a couple of scenarios
        return _this.getBeginningCompletionItems(context);
      } else if (prefixUnrecognized && safePrefix) {
        // Show term suggestions in a couple of scenarios
        return _this.getTermCompletionItems();
      }

      return emptyResult;
    });

    _defineProperty(this, "getBeginningCompletionItems", context => {
      return {
        suggestions: [...this.getEmptyCompletionItems(context).suggestions, ...this.getTermCompletionItems().suggestions]
      };
    });

    _defineProperty(this, "getEmptyCompletionItems", context => {
      const {
        history
      } = context;
      const suggestions = [];

      if (history && history.length) {
        const historyItems = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.chain)(history).map(h => h.query.expr).filter().uniq().take(HISTORY_ITEM_COUNT).map(wrapLabel).map(item => addHistoryMetadata(item, history)).value();
        suggestions.push({
          searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Prefix,
          skipSort: true,
          label: 'History',
          items: historyItems
        });
      }

      return {
        suggestions
      };
    });

    _defineProperty(this, "getTermCompletionItems", () => {
      const {
        metrics,
        metricsMetadata
      } = this;
      const suggestions = [];
      suggestions.push({
        searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Prefix,
        label: 'Functions',
        items: _promql__WEBPACK_IMPORTED_MODULE_6__/* .FUNCTIONS.map */ .r8.map(setFunctionKind)
      });

      if (metrics && metrics.length) {
        suggestions.push({
          label: 'Metrics',
          items: metrics.map(m => addMetricsMetadata(m, metricsMetadata)),
          searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Fuzzy
        });
      }

      return {
        suggestions
      };
    });

    _defineProperty(this, "getAggregationCompletionItems", async value => {
      const suggestions = []; // Stitch all query lines together to support multi-line queries

      let queryOffset;
      const queryText = value.document.getBlocks().reduce((text, block) => {
        if (text === undefined) {
          return '';
        }

        if (!block) {
          return text;
        }

        const blockText = block === null || block === void 0 ? void 0 : block.getText();

        if (value.anchorBlock.key === block.key) {
          // Newline characters are not accounted for but this is irrelevant
          // for the purpose of extracting the selector string
          queryOffset = value.selection.anchor.offset + text.length;
        }

        return text + blockText;
      }, ''); // Try search for selector part on the left-hand side, such as `sum (m) by (l)`

      const openParensAggregationIndex = queryText.lastIndexOf('(', queryOffset);
      let openParensSelectorIndex = queryText.lastIndexOf('(', openParensAggregationIndex - 1);
      let closeParensSelectorIndex = queryText.indexOf(')', openParensSelectorIndex); // Try search for selector part of an alternate aggregation clause, such as `sum by (l) (m)`

      if (openParensSelectorIndex === -1) {
        const closeParensAggregationIndex = queryText.indexOf(')', queryOffset);
        closeParensSelectorIndex = queryText.indexOf(')', closeParensAggregationIndex + 1);
        openParensSelectorIndex = queryText.lastIndexOf('(', closeParensSelectorIndex);
      }

      const result = {
        suggestions,
        context: 'context-aggregation'
      }; // Suggestions are useless for alternative aggregation clauses without a selector in context

      if (openParensSelectorIndex === -1) {
        return result;
      } // Range vector syntax not accounted for by subsequent parse so discard it if present


      const selectorString = queryText.slice(openParensSelectorIndex + 1, closeParensSelectorIndex).replace(/\[[^\]]+\]$/, '');
      const selector = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__/* .parseSelector */ .rV)(selectorString, selectorString.length - 2).selector;
      const series = await this.getSeries(selector);
      const labelKeys = Object.keys(series);

      if (labelKeys.length > 0) {
        const limitInfo = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__/* .addLimitInfo */ .ZO)(labelKeys);
        suggestions.push({
          label: `Labels${limitInfo}`,
          items: labelKeys.map(wrapLabel),
          searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Fuzzy
        });
      }

      return result;
    });

    _defineProperty(this, "getLabelCompletionItems", async _ref2 => {
      let {
        text,
        wrapperClasses,
        labelKey,
        value
      } = _ref2;

      if (!value) {
        return {
          suggestions: []
        };
      }

      const suggestions = [];
      const line = value.anchorBlock.getText();
      const cursorOffset = value.selection.anchor.offset;
      const suffix = line.substr(cursorOffset);
      const prefix = line.substr(0, cursorOffset);
      const isValueStart = text.match(/^(=|=~|!=|!~)/);
      const isValueEnd = suffix.match(/^"?[,}]|$/); // Detect cursor in front of value, e.g., {key=|"}

      const isPreValue = prefix.match(/(=|=~|!=|!~)$/) && suffix.match(/^"/); // Don't suggest anything at the beginning or inside a value

      const isValueEmpty = isValueStart && isValueEnd;
      const hasValuePrefix = isValueEnd && !isValueStart;

      if (!isValueEmpty && !hasValuePrefix || isPreValue) {
        return {
          suggestions
        };
      } // Get normalized selector


      let selector;
      let parsedSelector;

      try {
        parsedSelector = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__/* .parseSelector */ .rV)(line, cursorOffset);
        selector = parsedSelector.selector;
      } catch {
        selector = EMPTY_SELECTOR;
      }

      const containsMetric = selector.includes('__name__=');
      const existingKeys = parsedSelector ? parsedSelector.labelKeys : [];
      let series = {}; // Query labels for selector

      if (selector) {
        series = await this.getSeries(selector, !containsMetric);
      }

      if (Object.keys(series).length === 0) {
        console.warn(`Server did not return any values for selector = ${selector}`);
        return {
          suggestions
        };
      }

      let context;

      if (text && isValueStart || wrapperClasses.includes('attr-value')) {
        // Label values
        if (labelKey && series[labelKey]) {
          context = 'context-label-values';
          const limitInfo = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__/* .addLimitInfo */ .ZO)(series[labelKey]);
          suggestions.push({
            label: `Label values for "${labelKey}"${limitInfo}`,
            items: series[labelKey].map(wrapLabel),
            searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Fuzzy
          });
        }
      } else {
        // Label keys
        const labelKeys = series ? Object.keys(series) : containsMetric ? null : DEFAULT_KEYS;

        if (labelKeys) {
          const possibleKeys = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.difference)(labelKeys, existingKeys);

          if (possibleKeys.length) {
            context = 'context-labels';
            const newItems = possibleKeys.map(key => ({
              label: key
            }));
            const limitInfo = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__/* .addLimitInfo */ .ZO)(newItems);
            const newSuggestion = {
              label: `Labels${limitInfo}`,
              items: newItems,
              searchFunctionType: _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SearchFunctionType.Fuzzy
            };
            suggestions.push(newSuggestion);
          }
        }
      }

      return {
        context,
        suggestions
      };
    });

    _defineProperty(this, "fetchLabelValues", async key => {
      const params = this.datasource.getTimeRangeParams();
      const url = `/api/v1/label/${this.datasource.interpolateString(key)}/values`;
      return await this.request(url, [], params);
    });

    _defineProperty(this, "fetchSeriesLabels", async (name, withName) => {
      const interpolatedName = this.datasource.interpolateString(name);
      const range = this.datasource.getTimeRangeParams();
      const urlParams = Object.assign({}, range, {
        'match[]': interpolatedName
      });
      const url = `/api/v1/series`; // Cache key is a bit different here. We add the `withName` param and also round up to a minute the intervals.
      // The rounding may seem strange but makes relative intervals like now-1h less prone to need separate request every
      // millisecond while still actually getting all the keys for the correct interval. This still can create problems
      // when user does not the newest values for a minute if already cached.

      const cacheParams = new URLSearchParams({
        'match[]': interpolatedName,
        start: (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__/* .roundSecToMin */ .s4)(parseInt(range.start, 10)).toString(),
        end: (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__/* .roundSecToMin */ .s4)(parseInt(range.end, 10)).toString(),
        withName: withName ? 'true' : 'false'
      });
      const cacheKey = `/api/v1/series?${cacheParams.toString()}`;
      let value = this.labelsCache.get(cacheKey);

      if (!value) {
        const data = await this.request(url, [], urlParams);
        const {
          values
        } = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__/* .processLabels */ .DY)(data, withName);
        value = values;
        this.labelsCache.set(cacheKey, value);
      }

      return value;
    });

    _defineProperty(this, "fetchSeries", async match => {
      const url = '/api/v1/series';
      const range = this.datasource.getTimeRangeParams();
      const params = Object.assign({}, range, {
        'match[]': match
      });
      return await this.request(url, {}, params);
    });

    _defineProperty(this, "fetchDefaultSeries", (0,lodash__WEBPACK_IMPORTED_MODULE_0__.once)(async () => {
      const values = await Promise.all(DEFAULT_KEYS.map(key => this.fetchLabelValues(key)));
      return DEFAULT_KEYS.reduce((acc, key, i) => Object.assign({}, acc, {
        [key]: values[i]
      }), {});
    }));

    this.datasource = datasource;
    this.histogramMetrics = [];
    this.timeRange = {
      start: 0,
      end: 0
    };
    this.metrics = [];
    Object.assign(this, initialValues);
  } // Strip syntax chars so that typeahead suggestions can work on clean inputs


  cleanText(s) {
    const parts = s.split(PREFIX_DELIMITER_REGEX);
    const last = parts.pop();
    return last.trimLeft().replace(/"$/, '').replace(/^"/, '');
  }

  get syntax() {
    return _promql__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP;
  }

  async loadMetricsMetadata() {
    this.metricsMetadata = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__/* .fixSummariesMetadata */ .I4)(await this.request('/api/v1/metadata', {}));
  }

  getLabelKeys() {
    return this.labelKeys;
  }

  getRangeCompletionItems() {
    return {
      context: 'context-range',
      suggestions: [{
        label: 'Range vector',
        items: [..._promql__WEBPACK_IMPORTED_MODULE_6__/* .RATE_RANGES */ .Ty]
      }]
    };
  }

  importFromAbstractQuery(labelBasedQuery) {
    return (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__/* .toPromLikeQuery */ .e5)(labelBasedQuery);
  }

  exportToAbstractQuery(query) {
    const promQuery = query.expr;

    if (!promQuery || promQuery.length === 0) {
      return {
        refId: query.refId,
        labelMatchers: []
      };
    }

    const tokens = prismjs__WEBPACK_IMPORTED_MODULE_2___default().tokenize(promQuery, _promql__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP);
    const labelMatchers = (0,_language_utils__WEBPACK_IMPORTED_MODULE_5__/* .extractLabelMatchers */ .UO)(tokens);
    const nameLabelValue = getNameLabelValue(promQuery, tokens);

    if (nameLabelValue && nameLabelValue.length > 0) {
      labelMatchers.push({
        name: '__name__',
        operator: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.AbstractLabelOperator.Equal,
        value: nameLabelValue
      });
    }

    return {
      refId: query.refId,
      labelMatchers
    };
  }

  async getSeries(selector, withName) {
    if (this.datasource.lookupsDisabled) {
      return {};
    }

    try {
      if (selector === EMPTY_SELECTOR) {
        return await this.fetchDefaultSeries();
      } else {
        return await this.fetchSeriesLabels(selector, withName);
      }
    } catch (error) {
      // TODO: better error handling
      console.error(error);
      return {};
    }
  }

  async getLabelValues(key) {
    return await this.fetchLabelValues(key);
  }
  /**
   * Fetches all label keys
   */


  async fetchLabels() {
    const url = '/api/v1/labels';
    const params = this.datasource.getTimeRangeParams();
    this.labelFetchTs = Date.now().valueOf();
    const res = await this.request(url, [], params);

    if (Array.isArray(res)) {
      this.labelKeys = res.slice().sort();
    }

    return [];
  }
  /**
   * Fetch labels for a series. This is cached by it's args but also by the global timeRange currently selected as
   * they can change over requested time.
   * @param name
   * @param withName
   */


}

function getNameLabelValue(promQuery, tokens) {
  let nameLabelValue = '';

  for (let prop in tokens) {
    if (typeof tokens[prop] === 'string') {
      nameLabelValue = tokens[prop];
      break;
    }
  }

  return nameLabelValue;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/language_utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DY": () => (/* binding */ processLabels),
/* harmony export */   "I4": () => (/* binding */ fixSummariesMetadata),
/* harmony export */   "NO": () => (/* binding */ processHistogramMetrics),
/* harmony export */   "PL": () => (/* binding */ toPromLikeExpr),
/* harmony export */   "U9": () => (/* binding */ escapeLabelValueInExactSelector),
/* harmony export */   "UO": () => (/* binding */ extractLabelMatchers),
/* harmony export */   "ZO": () => (/* binding */ addLimitInfo),
/* harmony export */   "e5": () => (/* binding */ toPromLikeQuery),
/* harmony export */   "ll": () => (/* binding */ expandRecordingRules),
/* harmony export */   "o8": () => (/* binding */ roundMsToMin),
/* harmony export */   "rV": () => (/* binding */ parseSelector),
/* harmony export */   "s4": () => (/* binding */ roundSecToMin),
/* harmony export */   "tU": () => (/* binding */ escapeLabelValueInRegexSelector)
/* harmony export */ });
/* unused harmony exports selectorRegexp, labelRegexp, limitSuggestions */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _add_label_to_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/add_label_to_query.ts");
/* harmony import */ var _language_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/language_provider.ts");
const _excluded = ["__name__"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const processHistogramMetrics = metrics => {
  const resultSet = new Set();
  const regexp = new RegExp('_bucket($|:)');

  for (let index = 0; index < metrics.length; index++) {
    const metric = metrics[index];
    const isHistogramValue = regexp.test(metric);

    if (isHistogramValue) {
      resultSet.add(metric);
    }
  }

  return [...resultSet];
};
function processLabels(labels) {
  let withName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // For processing we are going to use sets as they have significantly better performance than arrays
  // After we process labels, we will convert sets to arrays and return object with label values in arrays
  const valueSet = {};
  labels.forEach(label => {
    const {
      __name__
    } = label,
          rest = _objectWithoutPropertiesLoose(label, _excluded);

    if (withName) {
      valueSet['__name__'] = valueSet['__name__'] || new Set();

      if (!valueSet['__name__'].has(__name__)) {
        valueSet['__name__'].add(__name__);
      }
    }

    Object.keys(rest).forEach(key => {
      if (!valueSet[key]) {
        valueSet[key] = new Set();
      }

      if (!valueSet[key].has(rest[key])) {
        valueSet[key].add(rest[key]);
      }
    });
  }); // valueArray that we are going to return in the object

  const valueArray = {};
  limitSuggestions(Object.keys(valueSet)).forEach(key => {
    valueArray[key] = limitSuggestions(Array.from(valueSet[key]));
  });
  return {
    values: valueArray,
    keys: Object.keys(valueArray)
  };
} // const cleanSelectorRegexp = /\{(\w+="[^"\n]*?")(,\w+="[^"\n]*?")*\}/;

const selectorRegexp = /\{[^}]*?(\}|$)/;
const labelRegexp = /\b(\w+)(!?=~?)("[^"\n]*?")/g;
function parseSelector(query) {
  let cursorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (!query.match(selectorRegexp)) {
    // Special matcher for metrics
    if (query.match(/^[A-Za-z:][\w:]*$/)) {
      return {
        selector: `{__name__="${query}"}`,
        labelKeys: ['__name__']
      };
    }

    throw new Error('Query must contain a selector: ' + query);
  } // Check if inside a selector


  const prefix = query.slice(0, cursorOffset);
  const prefixOpen = prefix.lastIndexOf('{');
  const prefixClose = prefix.lastIndexOf('}');

  if (prefixOpen === -1) {
    throw new Error('Not inside selector, missing open brace: ' + prefix);
  }

  if (prefixClose > -1 && prefixClose > prefixOpen) {
    throw new Error('Not inside selector, previous selector already closed: ' + prefix);
  }

  const suffix = query.slice(cursorOffset);
  const suffixCloseIndex = suffix.indexOf('}');
  const suffixClose = suffixCloseIndex + cursorOffset;
  const suffixOpenIndex = suffix.indexOf('{');
  const suffixOpen = suffixOpenIndex + cursorOffset;

  if (suffixClose === -1) {
    throw new Error('Not inside selector, missing closing brace in suffix: ' + suffix);
  }

  if (suffixOpenIndex > -1 && suffixOpen < suffixClose) {
    throw new Error('Not inside selector, next selector opens before this one closed: ' + suffix);
  } // Extract clean labels to form clean selector, incomplete labels are dropped


  const selector = query.slice(prefixOpen, suffixClose);
  const labels = {};
  selector.replace(labelRegexp, (label, key, operator, value) => {
    const labelOffset = query.indexOf(label);
    const valueStart = labelOffset + key.length + operator.length + 1;
    const valueEnd = labelOffset + key.length + operator.length + value.length - 1; // Skip label if cursor is in value

    if (cursorOffset < valueStart || cursorOffset > valueEnd) {
      labels[key] = {
        value,
        operator
      };
    }

    return '';
  }); // Add metric if there is one before the selector

  const metricPrefix = query.slice(0, prefixOpen);
  const metricMatch = metricPrefix.match(/[A-Za-z:][\w:]*$/);

  if (metricMatch) {
    labels['__name__'] = {
      value: `"${metricMatch[0]}"`,
      operator: '='
    };
  } // Build sorted selector


  const labelKeys = Object.keys(labels).sort();
  const cleanSelector = labelKeys.map(key => `${key}${labels[key].operator}${labels[key].value}`).join(',');
  const selectorString = ['{', cleanSelector, '}'].join('');
  return {
    labelKeys,
    selector: selectorString
  };
}
function expandRecordingRules(query, mapping) {
  const ruleNames = Object.keys(mapping);
  const rulesRegex = new RegExp(`(\\s|^)(${ruleNames.join('|')})(\\s|$|\\(|\\[|\\{)`, 'ig');
  const expandedQuery = query.replace(rulesRegex, (match, pre, name, post) => `${pre}${mapping[name]}${post}`); // Split query into array, so if query uses operators, we can correctly add labels to each individual part.

  const queryArray = expandedQuery.split(/(\+|\-|\*|\/|\%|\^)/); // Regex that matches occurrences of ){ or }{ or ]{ which is a sign of incorrecly added labels.

  const invalidLabelsRegex = /(\)\{|\}\{|\]\{)/;
  const correctlyExpandedQueryArray = queryArray.map(query => {
    return addLabelsToExpression(query, invalidLabelsRegex);
  });
  return correctlyExpandedQueryArray.join('');
}

function addLabelsToExpression(expr, invalidLabelsRegexp) {
  var _match$index;

  const match = expr.match(invalidLabelsRegexp);

  if (!match) {
    return expr;
  } // Split query into 2 parts - before the invalidLabelsRegex match and after.


  const indexOfRegexMatch = (_match$index = match.index) !== null && _match$index !== void 0 ? _match$index : 0;
  const exprBeforeRegexMatch = expr.slice(0, indexOfRegexMatch + 1);
  const exprAfterRegexMatch = expr.slice(indexOfRegexMatch + 1); // Create arrayOfLabelObjects with label objects that have key, operator and value.

  const arrayOfLabelObjects = [];
  exprAfterRegexMatch.replace(labelRegexp, (label, key, operator, value) => {
    arrayOfLabelObjects.push({
      key,
      operator,
      value
    });
    return '';
  }); // Loop through all label objects and add them to query.
  // As a starting point we have valid query without the labels.

  let result = exprBeforeRegexMatch;
  arrayOfLabelObjects.filter(Boolean).forEach(obj => {
    // Remove extra set of quotes from obj.value
    const value = obj.value.slice(1, -1);
    result = (0,_add_label_to_query__WEBPACK_IMPORTED_MODULE_3__/* .addLabelToQuery */ .F)(result, obj.key, value, obj.operator);
  });
  return result;
}
/**
 * Adds metadata for synthetic metrics for which the API does not provide metadata.
 * See https://github.com/grafana/grafana/issues/22337 for details.
 *
 * @param metadata HELP and TYPE metadata from /api/v1/metadata
 */


function fixSummariesMetadata(metadata) {
  if (!metadata) {
    return metadata;
  }

  const baseMetadata = {};
  const summaryMetadata = {};

  for (const metric in metadata) {
    // NOTE: based on prometheus-documentation, we can receive
    // multiple metadata-entries for the given metric, it seems
    // it happens when the same metric is on multiple targets
    // and their help-text differs
    // (https://prometheus.io/docs/prometheus/latest/querying/api/#querying-metric-metadata)
    // for now we just use the first entry.
    const item = metadata[metric][0];
    baseMetadata[metric] = item;

    if (item.type === 'histogram') {
      summaryMetadata[`${metric}_bucket`] = {
        type: 'counter',
        help: `Cumulative counters for the observation buckets (${item.help})`
      };
      summaryMetadata[`${metric}_count`] = {
        type: 'counter',
        help: `Count of events that have been observed for the histogram metric (${item.help})`
      };
      summaryMetadata[`${metric}_sum`] = {
        type: 'counter',
        help: `Total sum of all observed values for the histogram metric (${item.help})`
      };
    }

    if (item.type === 'summary') {
      summaryMetadata[`${metric}_count`] = {
        type: 'counter',
        help: `Count of events that have been observed for the base metric (${item.help})`
      };
      summaryMetadata[`${metric}_sum`] = {
        type: 'counter',
        help: `Total sum of all observed values for the base metric (${item.help})`
      };
    }
  } // Synthetic series


  const syntheticMetadata = {};
  syntheticMetadata['ALERTS'] = {
    type: 'counter',
    help: 'Time series showing pending and firing alerts. The sample value is set to 1 as long as the alert is in the indicated active (pending or firing) state.'
  };
  return Object.assign({}, baseMetadata, summaryMetadata, syntheticMetadata);
}
function roundMsToMin(milliseconds) {
  return roundSecToMin(milliseconds / 1000);
}
function roundSecToMin(seconds) {
  return Math.floor(seconds / 60);
}
function limitSuggestions(items) {
  return items.slice(0, _language_provider__WEBPACK_IMPORTED_MODULE_4__/* .SUGGESTIONS_LIMIT */ .ZK);
}
function addLimitInfo(items) {
  return items && items.length >= _language_provider__WEBPACK_IMPORTED_MODULE_4__/* .SUGGESTIONS_LIMIT */ .ZK ? `, limited to the first ${_language_provider__WEBPACK_IMPORTED_MODULE_4__/* .SUGGESTIONS_LIMIT */ .ZK} received items` : '';
} // NOTE: the following 2 exported functions are very similar to the prometheus*Escape
// functions in datasource.ts, but they are not exactly the same algorithm, and we found
// no way to reuse one in the another or vice versa.
// Prometheus regular-expressions use the RE2 syntax (https://github.com/google/re2/wiki/Syntax),
// so every character that matches something in that list has to be escaped.
// the list of metacharacters is: *+?()|\.[]{}^$
// we make a javascript regular expression that matches those characters:

const RE2_METACHARACTERS = /[*+?()|\\.\[\]{}^$]/g;

function escapePrometheusRegexp(value) {
  return value.replace(RE2_METACHARACTERS, '\\$&');
} // based on the openmetrics-documentation, the 3 symbols we have to handle are:
// - \n ... the newline character
// - \  ... the backslash character
// - "  ... the double-quote character


function escapeLabelValueInExactSelector(labelValue) {
  return labelValue.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/"/g, '\\"');
}
function escapeLabelValueInRegexSelector(labelValue) {
  return escapeLabelValueInExactSelector(escapePrometheusRegexp(labelValue));
}
const FromPromLikeMap = {
  '=': _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.Equal,
  '!=': _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.NotEqual,
  '=~': _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.EqualRegEx,
  '!~': _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AbstractLabelOperator.NotEqualRegEx
};
const ToPromLikeMap = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.invert)(FromPromLikeMap);
function toPromLikeExpr(labelBasedQuery) {
  const expr = labelBasedQuery.labelMatchers.map(selector => {
    const operator = ToPromLikeMap[selector.operator];

    if (operator) {
      return `${selector.name}${operator}"${selector.value}"`;
    } else {
      return '';
    }
  }).filter(e => e !== '').join(', ');
  return expr ? `{${expr}}` : '';
}
function toPromLikeQuery(labelBasedQuery) {
  return {
    refId: labelBasedQuery.refId,
    expr: toPromLikeExpr(labelBasedQuery),
    range: true
  };
}
function extractLabelMatchers(tokens) {
  const labelMatchers = [];

  for (let prop in tokens) {
    if (tokens[prop] instanceof prismjs__WEBPACK_IMPORTED_MODULE_1__.Token) {
      let token = tokens[prop];

      if (token.type === 'context-labels') {
        let labelKey = '';
        let labelValue = '';
        let labelOperator = '';
        let contentTokens = token.content;

        for (let currentToken in contentTokens) {
          if (typeof contentTokens[currentToken] === 'string') {
            let currentStr;
            currentStr = contentTokens[currentToken];

            if (currentStr === '=' || currentStr === '!=' || currentStr === '=~' || currentStr === '!~') {
              labelOperator = currentStr;
            }
          } else if (contentTokens[currentToken] instanceof prismjs__WEBPACK_IMPORTED_MODULE_1__.Token) {
            switch (contentTokens[currentToken].type) {
              case 'label-key':
                labelKey = contentTokens[currentToken].content;
                break;

              case 'label-value':
                labelValue = contentTokens[currentToken].content;
                labelValue = labelValue.substring(1, labelValue.length - 1);
                const labelComparator = FromPromLikeMap[labelOperator];

                if (labelComparator) {
                  labelMatchers.push({
                    name: labelKey,
                    operator: labelComparator,
                    value: labelValue
                  });
                }

                break;
            }
          }
        }
      }
    }
  }

  return labelMatchers;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/PromQueryModeller.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": () => (/* binding */ PromQueryModeller),
  "Z": () => (/* binding */ promQueryModeller)
});

// EXTERNAL MODULE: ./public/app/plugins/datasource/prometheus/promql.ts
var promql = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/binaryScalarOperations.ts
var binaryScalarOperations = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/binaryScalarOperations.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/components/LabelParamEditor.tsx
var LabelParamEditor = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/LabelParamEditor.tsx");
// EXTERNAL MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/shared/operationUtils.ts
var operationUtils = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/operationUtils.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/types.ts
var types = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/types.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/operations.ts




function getOperationDefinitions() {
  const list = [{
    id: types/* PromOperationId.HistogramQuantile */.G.HistogramQuantile,
    name: 'Histogram quantile',
    params: [{
      name: 'Quantile',
      type: 'number',
      options: [0.99, 0.95, 0.9, 0.75, 0.5, 0.25]
    }],
    defaultParams: [0.9],
    category: types/* PromVisualQueryOperationCategory.Functions */.C.Functions,
    renderer: operationUtils/* functionRendererLeft */.pS,
    addOperationHandler: operationUtils/* defaultAddOperationHandler */.PP
  }, {
    id: types/* PromOperationId.LabelReplace */.G.LabelReplace,
    name: 'Label replace',
    params: [{
      name: 'Destination label',
      type: 'string'
    }, {
      name: 'Replacement',
      type: 'string'
    }, {
      name: 'Source label',
      type: 'string'
    }, {
      name: 'Regex',
      type: 'string'
    }],
    category: types/* PromVisualQueryOperationCategory.Functions */.C.Functions,
    defaultParams: ['', '$1', '', '(.*)'],
    renderer: operationUtils/* functionRendererRight */.zJ,
    addOperationHandler: operationUtils/* defaultAddOperationHandler */.PP
  }, {
    id: types/* PromOperationId.Ln */.G.Ln,
    name: 'Ln',
    params: [],
    defaultParams: [],
    category: types/* PromVisualQueryOperationCategory.Functions */.C.Functions,
    renderer: operationUtils/* functionRendererLeft */.pS,
    addOperationHandler: operationUtils/* defaultAddOperationHandler */.PP
  }, createRangeFunction(types/* PromOperationId.Changes */.G.Changes), createRangeFunction(types/* PromOperationId.Rate */.G.Rate, true), createRangeFunction(types/* PromOperationId.Irate */.G.Irate), createRangeFunction(types/* PromOperationId.Increase */.G.Increase, true), createRangeFunction(types/* PromOperationId.Idelta */.G.Idelta), createRangeFunction(types/* PromOperationId.Delta */.G.Delta), createFunction({
    id: types/* PromOperationId.HoltWinters */.G.HoltWinters,
    params: [(0,operationUtils/* getRangeVectorParamDef */.kq)(), {
      name: 'Smoothing Factor',
      type: 'number'
    }, {
      name: 'Trend Factor',
      type: 'number'
    }],
    defaultParams: ['$__interval', 0.5, 0.5],
    alternativesKey: 'range function',
    category: types/* PromVisualQueryOperationCategory.RangeFunctions */.C.RangeFunctions,
    renderer: operationUtils/* rangeRendererRightWithParams */.e8,
    addOperationHandler: addOperationWithRangeVector,
    changeTypeHandler: operationTypeChangedHandlerForRangeFunction
  }), createFunction({
    id: types/* PromOperationId.PredictLinear */.G.PredictLinear,
    params: [(0,operationUtils/* getRangeVectorParamDef */.kq)(), {
      name: 'Seconds from now',
      type: 'number'
    }],
    defaultParams: ['$__interval', 60],
    alternativesKey: 'range function',
    category: types/* PromVisualQueryOperationCategory.RangeFunctions */.C.RangeFunctions,
    renderer: operationUtils/* rangeRendererRightWithParams */.e8,
    addOperationHandler: addOperationWithRangeVector,
    changeTypeHandler: operationTypeChangedHandlerForRangeFunction
  }), createFunction({
    id: types/* PromOperationId.QuantileOverTime */.G.QuantileOverTime,
    params: [(0,operationUtils/* getRangeVectorParamDef */.kq)(), {
      name: 'Quantile',
      type: 'number'
    }],
    defaultParams: ['$__interval', 0.5],
    alternativesKey: 'overtime function',
    category: types/* PromVisualQueryOperationCategory.RangeFunctions */.C.RangeFunctions,
    renderer: operationUtils/* rangeRendererLeftWithParams */.NZ,
    addOperationHandler: addOperationWithRangeVector,
    changeTypeHandler: operationTypeChangedHandlerForRangeFunction
  }), ...binaryScalarOperations/* binaryScalarOperations */.EX, {
    id: types/* PromOperationId.NestedQuery */.G.NestedQuery,
    name: 'Binary operation with query',
    params: [],
    defaultParams: [],
    category: types/* PromVisualQueryOperationCategory.BinaryOps */.C.BinaryOps,
    renderer: (model, def, innerExpr) => innerExpr,
    addOperationHandler: addNestedQueryHandler
  }, createFunction({
    id: types/* PromOperationId.Absent */.G.Absent
  }), createFunction({
    id: types/* PromOperationId.Acos */.G.Acos,
    category: types/* PromVisualQueryOperationCategory.Trigonometric */.C.Trigonometric
  }), createFunction({
    id: types/* PromOperationId.Acosh */.G.Acosh,
    category: types/* PromVisualQueryOperationCategory.Trigonometric */.C.Trigonometric
  }), createFunction({
    id: types/* PromOperationId.Asin */.G.Asin,
    category: types/* PromVisualQueryOperationCategory.Trigonometric */.C.Trigonometric
  }), createFunction({
    id: types/* PromOperationId.Asinh */.G.Asinh,
    category: types/* PromVisualQueryOperationCategory.Trigonometric */.C.Trigonometric
  }), createFunction({
    id: types/* PromOperationId.Atan */.G.Atan,
    category: types/* PromVisualQueryOperationCategory.Trigonometric */.C.Trigonometric
  }), createFunction({
    id: types/* PromOperationId.Atanh */.G.Atanh,
    category: types/* PromVisualQueryOperationCategory.Trigonometric */.C.Trigonometric
  }), createFunction({
    id: types/* PromOperationId.Ceil */.G.Ceil
  }), createFunction({
    id: types/* PromOperationId.Clamp */.G.Clamp,
    name: 'Clamp',
    params: [{
      name: 'Minimum Scalar',
      type: 'number'
    }, {
      name: 'Maximum Scalar',
      type: 'number'
    }],
    defaultParams: [1, 1]
  }), createFunction({
    id: types/* PromOperationId.ClampMax */.G.ClampMax,
    params: [{
      name: 'Maximum Scalar',
      type: 'number'
    }],
    defaultParams: [1]
  }), createFunction({
    id: types/* PromOperationId.ClampMin */.G.ClampMin,
    params: [{
      name: 'Minimum Scalar',
      type: 'number'
    }],
    defaultParams: [1]
  }), createFunction({
    id: types/* PromOperationId.Cos */.G.Cos,
    category: types/* PromVisualQueryOperationCategory.Trigonometric */.C.Trigonometric
  }), createFunction({
    id: types/* PromOperationId.Cosh */.G.Cosh,
    category: types/* PromVisualQueryOperationCategory.Trigonometric */.C.Trigonometric
  }), createFunction({
    id: types/* PromOperationId.DayOfMonth */.G.DayOfMonth,
    category: types/* PromVisualQueryOperationCategory.Time */.C.Time
  }), createFunction({
    id: types/* PromOperationId.DayOfWeek */.G.DayOfWeek,
    category: types/* PromVisualQueryOperationCategory.Time */.C.Time
  }), createFunction({
    id: types/* PromOperationId.DaysInMonth */.G.DaysInMonth,
    category: types/* PromVisualQueryOperationCategory.Time */.C.Time
  }), createFunction({
    id: types/* PromOperationId.Deg */.G.Deg
  }), createRangeFunction(types/* PromOperationId.Deriv */.G.Deriv), //
  createFunction({
    id: types/* PromOperationId.Exp */.G.Exp
  }), createFunction({
    id: types/* PromOperationId.Floor */.G.Floor
  }), createFunction({
    id: types/* PromOperationId.Group */.G.Group
  }), createFunction({
    id: types/* PromOperationId.Hour */.G.Hour
  }), createFunction({
    id: types/* PromOperationId.LabelJoin */.G.LabelJoin,
    params: [{
      name: 'Destination Label',
      type: 'string',
      editor: LabelParamEditor/* LabelParamEditor */.g
    }, {
      name: 'Separator',
      type: 'string'
    }, {
      name: 'Source Label',
      type: 'string',
      restParam: true,
      optional: true,
      editor: LabelParamEditor/* LabelParamEditor */.g
    }],
    defaultParams: ['', ',', ''],
    renderer: labelJoinRenderer,
    addOperationHandler: labelJoinAddOperationHandler
  }), createFunction({
    id: types/* PromOperationId.Log10 */.G.Log10
  }), createFunction({
    id: types/* PromOperationId.Log2 */.G.Log2
  }), createFunction({
    id: types/* PromOperationId.Minute */.G.Minute
  }), createFunction({
    id: types/* PromOperationId.Month */.G.Month
  }), createFunction({
    id: types/* PromOperationId.Pi */.G.Pi,
    renderer: model => `${model.id}()`
  }), createFunction({
    id: types/* PromOperationId.Quantile */.G.Quantile,
    params: [{
      name: 'Value',
      type: 'number'
    }],
    defaultParams: [1],
    renderer: operationUtils/* functionRendererLeft */.pS
  }), createFunction({
    id: types/* PromOperationId.Rad */.G.Rad
  }), createRangeFunction(types/* PromOperationId.Resets */.G.Resets), createFunction({
    id: types/* PromOperationId.Round */.G.Round,
    category: types/* PromVisualQueryOperationCategory.Functions */.C.Functions,
    params: [{
      name: 'To Nearest',
      type: 'number'
    }],
    defaultParams: [1]
  }), createFunction({
    id: types/* PromOperationId.Scalar */.G.Scalar
  }), createFunction({
    id: types/* PromOperationId.Sgn */.G.Sgn
  }), createFunction({
    id: types/* PromOperationId.Sin */.G.Sin,
    category: types/* PromVisualQueryOperationCategory.Trigonometric */.C.Trigonometric
  }), createFunction({
    id: types/* PromOperationId.Sinh */.G.Sinh,
    category: types/* PromVisualQueryOperationCategory.Trigonometric */.C.Trigonometric
  }), createFunction({
    id: types/* PromOperationId.Sort */.G.Sort
  }), createFunction({
    id: types/* PromOperationId.SortDesc */.G.SortDesc
  }), createFunction({
    id: types/* PromOperationId.Sqrt */.G.Sqrt
  }), createFunction({
    id: types/* PromOperationId.Stddev */.G.Stddev
  }), createFunction({
    id: types/* PromOperationId.Tan */.G.Tan,
    category: types/* PromVisualQueryOperationCategory.Trigonometric */.C.Trigonometric
  }), createFunction({
    id: types/* PromOperationId.Tanh */.G.Tanh,
    category: types/* PromVisualQueryOperationCategory.Trigonometric */.C.Trigonometric
  }), createFunction({
    id: types/* PromOperationId.Time */.G.Time,
    renderer: model => `${model.id}()`
  }), createFunction({
    id: types/* PromOperationId.Timestamp */.G.Timestamp
  }), createFunction({
    id: types/* PromOperationId.Vector */.G.Vector,
    params: [{
      name: 'Value',
      type: 'number'
    }],
    defaultParams: [1],
    renderer: model => `${model.id}(${model.params[0]})`
  }), createFunction({
    id: types/* PromOperationId.Year */.G.Year
  })];
  return list;
}
function createFunction(definition) {
  var _definition$name, _definition$params, _definition$defaultPa, _definition$category, _definition$renderer, _definition$addOperat;

  return Object.assign({}, definition, {
    id: definition.id,
    name: (_definition$name = definition.name) !== null && _definition$name !== void 0 ? _definition$name : (0,operationUtils/* getPromAndLokiOperationDisplayName */.t7)(definition.id),
    params: (_definition$params = definition.params) !== null && _definition$params !== void 0 ? _definition$params : [],
    defaultParams: (_definition$defaultPa = definition.defaultParams) !== null && _definition$defaultPa !== void 0 ? _definition$defaultPa : [],
    category: (_definition$category = definition.category) !== null && _definition$category !== void 0 ? _definition$category : types/* PromVisualQueryOperationCategory.Functions */.C.Functions,
    renderer: (_definition$renderer = definition.renderer) !== null && _definition$renderer !== void 0 ? _definition$renderer : definition.params ? operationUtils/* functionRendererRight */.zJ : operationUtils/* functionRendererLeft */.pS,
    addOperationHandler: (_definition$addOperat = definition.addOperationHandler) !== null && _definition$addOperat !== void 0 ? _definition$addOperat : operationUtils/* defaultAddOperationHandler */.PP
  });
}
function createRangeFunction(name) {
  let withRateInterval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    id: name,
    name: (0,operationUtils/* getPromAndLokiOperationDisplayName */.t7)(name),
    params: [(0,operationUtils/* getRangeVectorParamDef */.kq)(withRateInterval)],
    defaultParams: [withRateInterval ? '$__rate_interval' : '$__interval'],
    alternativesKey: 'range function',
    category: types/* PromVisualQueryOperationCategory.RangeFunctions */.C.RangeFunctions,
    renderer: operationWithRangeVectorRenderer,
    addOperationHandler: addOperationWithRangeVector,
    changeTypeHandler: operationTypeChangedHandlerForRangeFunction
  };
}

function operationTypeChangedHandlerForRangeFunction(operation, newDef) {
  // validate current parameter
  if (operation.params[0] === '$__rate_interval' && newDef.defaultParams[0] !== '$__rate_interval') {
    operation.params = newDef.defaultParams;
  } else if (operation.params[0] === '$__interval' && newDef.defaultParams[0] !== '$__interval') {
    operation.params = newDef.defaultParams;
  }

  return operation;
}

function operationWithRangeVectorRenderer(model, def, innerExpr) {
  var _, _model$params;

  let rangeVector = (_ = ((_model$params = model.params) !== null && _model$params !== void 0 ? _model$params : [])[0]) !== null && _ !== void 0 ? _ : '5m';
  return `${def.id}(${innerExpr}[${rangeVector}])`;
}
/**
 * Since there can only be one operation with range vector this will replace the current one (if one was added )
 */

function addOperationWithRangeVector(def, query, modeller) {
  const newOperation = {
    id: def.id,
    params: def.defaultParams
  };

  if (query.operations.length > 0) {
    // If operation exists it has to be in the registry so no point to check if it was found
    const firstOp = modeller.getOperationDef(query.operations[0].id);

    if (firstOp.addOperationHandler === addOperationWithRangeVector) {
      return Object.assign({}, query, {
        operations: [newOperation, ...query.operations.slice(1)]
      });
    }
  }

  return Object.assign({}, query, {
    operations: [newOperation, ...query.operations]
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

function labelJoinRenderer(model, def, innerExpr) {
  if (typeof model.params[1] !== 'string') {
    throw 'The separator must be a string';
  }

  const separator = `"${model.params[1]}"`;
  return `${model.id}(${innerExpr}, "${model.params[0]}", ${separator}, "${model.params.slice(2).join(separator)}")`;
}

function labelJoinAddOperationHandler(def, query) {
  const newOperation = {
    id: def.id,
    params: def.defaultParams
  };
  return Object.assign({}, query, {
    operations: [...query.operations, newOperation]
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/aggregations.ts



function getAggregationOperations() {
  return [...(0,operationUtils/* createAggregationOperation */.IT)(types/* PromOperationId.Sum */.G.Sum), ...(0,operationUtils/* createAggregationOperation */.IT)(types/* PromOperationId.Avg */.G.Avg), ...(0,operationUtils/* createAggregationOperation */.IT)(types/* PromOperationId.Min */.G.Min), ...(0,operationUtils/* createAggregationOperation */.IT)(types/* PromOperationId.Max */.G.Max), ...(0,operationUtils/* createAggregationOperation */.IT)(types/* PromOperationId.Count */.G.Count), ...(0,operationUtils/* createAggregationOperationWithParam */.Z3)(types/* PromOperationId.TopK */.G.TopK, {
    params: [{
      name: 'K-value',
      type: 'number'
    }],
    defaultParams: [5]
  }), ...(0,operationUtils/* createAggregationOperationWithParam */.Z3)(types/* PromOperationId.BottomK */.G.BottomK, {
    params: [{
      name: 'K-value',
      type: 'number'
    }],
    defaultParams: [5]
  }), ...(0,operationUtils/* createAggregationOperationWithParam */.Z3)(types/* PromOperationId.CountValues */.G.CountValues, {
    params: [{
      name: 'Identifier',
      type: 'string'
    }],
    defaultParams: ['count']
  }), createAggregationOverTime(types/* PromOperationId.SumOverTime */.G.SumOverTime), createAggregationOverTime(types/* PromOperationId.AvgOverTime */.G.AvgOverTime), createAggregationOverTime(types/* PromOperationId.MinOverTime */.G.MinOverTime), createAggregationOverTime(types/* PromOperationId.MaxOverTime */.G.MaxOverTime), createAggregationOverTime(types/* PromOperationId.CountOverTime */.G.CountOverTime), createAggregationOverTime(types/* PromOperationId.LastOverTime */.G.LastOverTime), createAggregationOverTime(types/* PromOperationId.PresentOverTime */.G.PresentOverTime), createAggregationOverTime(types/* PromOperationId.AbsentOverTime */.G.AbsentOverTime), createAggregationOverTime(types/* PromOperationId.StddevOverTime */.G.StddevOverTime)];
}

function createAggregationOverTime(name) {
  return {
    id: name,
    name: (0,operationUtils/* getPromAndLokiOperationDisplayName */.t7)(name),
    params: [(0,operationUtils/* getRangeVectorParamDef */.kq)()],
    defaultParams: ['$__interval'],
    alternativesKey: 'overtime function',
    category: types/* PromVisualQueryOperationCategory.RangeFunctions */.C.RangeFunctions,
    renderer: aggregations_operationWithRangeVectorRenderer,
    addOperationHandler: addOperationWithRangeVector
  };
}

function aggregations_operationWithRangeVectorRenderer(model, def, innerExpr) {
  var _, _model$params;

  let rangeVector = (_ = ((_model$params = model.params) !== null && _model$params !== void 0 ? _model$params : [])[0]) !== null && _ !== void 0 ? _ : '$__interval';
  return `${def.id}(${innerExpr}[${rangeVector}])`;
}
// EXTERNAL MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/shared/LokiAndPromQueryModellerBase.ts
var LokiAndPromQueryModellerBase = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/LokiAndPromQueryModellerBase.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/PromQueryModeller.ts





class PromQueryModeller extends LokiAndPromQueryModellerBase/* LokiAndPromQueryModellerBase */.x {
  constructor() {
    super(() => {
      const allOperations = [...getOperationDefinitions(), ...getAggregationOperations()];

      for (const op of allOperations) {
        const func = promql/* FUNCTIONS.find */.r8.find(x => x.insertText === op.id);

        if (func) {
          op.documentation = func.documentation;
        }
      }

      return allOperations;
    });
    this.setOperationCategories([types/* PromVisualQueryOperationCategory.Aggregations */.C.Aggregations, types/* PromVisualQueryOperationCategory.RangeFunctions */.C.RangeFunctions, types/* PromVisualQueryOperationCategory.Functions */.C.Functions, types/* PromVisualQueryOperationCategory.BinaryOps */.C.BinaryOps, types/* PromVisualQueryOperationCategory.Trigonometric */.C.Trigonometric, types/* PromVisualQueryOperationCategory.Time */.C.Time]);
  }

  getQueryPatterns() {
    return [{
      name: 'Rate then sum',
      operations: [{
        id: 'rate',
        params: ['$__rate_interval']
      }, {
        id: 'sum',
        params: []
      }]
    }, {
      name: 'Rate then sum by(label) then avg',
      operations: [{
        id: 'rate',
        params: ['$__rate_interval']
      }, {
        id: '__sum_by',
        params: ['']
      }, {
        id: 'avg',
        params: []
      }]
    }, {
      name: 'Histogram quantile on rate',
      operations: [{
        id: 'rate',
        params: ['$__rate_interval']
      }, {
        id: '__sum_by',
        params: ['le']
      }, {
        id: 'histogram_quantile',
        params: [0.95]
      }]
    }, {
      name: 'Histogram quantile on increase ',
      operations: [{
        id: 'increase',
        params: ['$__rate_interval']
      }, {
        id: '__max_by',
        params: ['le']
      }, {
        id: 'histogram_quantile',
        params: [0.95]
      }]
    }];
  }

}
const promQueryModeller = new PromQueryModeller();

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/binaryScalarOperations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EX": () => (/* binding */ binaryScalarOperations),
/* harmony export */   "PX": () => (/* binding */ binaryScalarOperatorToOperatorName),
/* harmony export */   "iQ": () => (/* binding */ binaryScalarDefs)
/* harmony export */ });
/* harmony import */ var _shared_operationUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/operationUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/types.ts");


const binaryScalarDefs = [{
  id: _types__WEBPACK_IMPORTED_MODULE_1__/* .PromOperationId.Addition */ .G.Addition,
  name: 'Add scalar',
  sign: '+'
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__/* .PromOperationId.Subtraction */ .G.Subtraction,
  name: 'Subtract scalar',
  sign: '-'
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__/* .PromOperationId.MultiplyBy */ .G.MultiplyBy,
  name: 'Multiply by scalar',
  sign: '*'
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__/* .PromOperationId.DivideBy */ .G.DivideBy,
  name: 'Divide by scalar',
  sign: '/'
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__/* .PromOperationId.Modulo */ .G.Modulo,
  name: 'Modulo by scalar',
  sign: '%'
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__/* .PromOperationId.Exponent */ .G.Exponent,
  name: 'Exponent',
  sign: '^'
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__/* .PromOperationId.EqualTo */ .G.EqualTo,
  name: 'Equal to',
  sign: '==',
  comparison: true
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__/* .PromOperationId.NotEqualTo */ .G.NotEqualTo,
  name: 'Not equal to',
  sign: '!=',
  comparison: true
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__/* .PromOperationId.GreaterThan */ .G.GreaterThan,
  name: 'Greater than',
  sign: '>',
  comparison: true
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__/* .PromOperationId.LessThan */ .G.LessThan,
  name: 'Less than',
  sign: '<',
  comparison: true
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__/* .PromOperationId.GreaterOrEqual */ .G.GreaterOrEqual,
  name: 'Greater or equal to',
  sign: '>=',
  comparison: true
}, {
  id: _types__WEBPACK_IMPORTED_MODULE_1__/* .PromOperationId.LessOrEqual */ .G.LessOrEqual,
  name: 'Less or equal to',
  sign: '<=',
  comparison: true
}];
const binaryScalarOperatorToOperatorName = binaryScalarDefs.reduce((acc, def) => {
  acc[def.sign] = {
    id: def.id,
    comparison: def.comparison
  };
  return acc;
}, {}); // Not sure about this one. It could also be a more generic 'Simple math operation' where user specifies
// both the operator and the operand in a single input

const binaryScalarOperations = binaryScalarDefs.map(opDef => {
  const params = [{
    name: 'Value',
    type: 'number'
  }];
  const defaultParams = [2];

  if (opDef.comparison) {
    params.push({
      name: 'Bool',
      type: 'boolean',
      description: 'If checked comparison will return 0 or 1 for the value rather than filtering.'
    });
    defaultParams.push(false);
  }

  return {
    id: opDef.id,
    name: opDef.name,
    params,
    defaultParams,
    alternativesKey: 'binary scalar operations',
    category: _types__WEBPACK_IMPORTED_MODULE_1__/* .PromVisualQueryOperationCategory.BinaryOps */ .C.BinaryOps,
    renderer: getSimpleBinaryRenderer(opDef.sign),
    addOperationHandler: _shared_operationUtils__WEBPACK_IMPORTED_MODULE_0__/* .defaultAddOperationHandler */ .PP
  };
});

function getSimpleBinaryRenderer(operator) {
  return function binaryRenderer(model, def, innerExpr) {
    let param = model.params[0];
    let bool = '';

    if (model.params.length === 2) {
      bool = model.params[1] ? ' bool' : '';
    }

    return `${innerExpr} ${operator}${bool} ${param}`;
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/components/LabelParamEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ LabelParamEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/datasource.tsx");
/* harmony import */ var _PromQueryModeller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/PromQueryModeller.ts");
/* harmony import */ var _shared_operationUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/operationUtils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function LabelParamEditor(_ref) {
  let {
    onChange,
    index,
    operationIndex,
    value,
    query,
    datasource
  } = _ref;
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
    inputId: (0,_shared_operationUtils__WEBPACK_IMPORTED_MODULE_5__/* .getOperationParamId */ .i1)(operationIndex, index),
    autoFocus: value === '' ? true : undefined,
    openMenuOnFocus: true,
    onOpenMenu: async () => {
      setState({
        isLoading: true
      });
      const options = await loadGroupByLabels(query, datasource);
      setState({
        options,
        isLoading: undefined
      });
    },
    isLoading: state.isLoading,
    allowCustomValue: true,
    noOptionsMessage: "No labels found",
    loadingMessage: "Loading labels",
    options: state.options,
    value: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toOption)(value),
    onChange: value => onChange(index, value.value)
  });
}

async function loadGroupByLabels(query, datasource) {
  let labels = query.labels; // This function is used by both Prometheus and Loki and this the only difference

  if (datasource instanceof _datasource__WEBPACK_IMPORTED_MODULE_3__/* .PrometheusDatasource */ .vQ) {
    labels = [{
      label: '__name__',
      op: '=',
      value: query.metric
    }, ...query.labels];
  }

  const expr = _PromQueryModeller__WEBPACK_IMPORTED_MODULE_4__/* .promQueryModeller.renderLabels */ .Z.renderLabels(labels);
  const result = await datasource.languageProvider.fetchSeriesLabels(expr);
  return Object.keys(result).map(x => ({
    label: x,
    value: x
  }));
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/parsing.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ buildVisualQueryFromString)
/* harmony export */ });
/* unused harmony export handleExpression */
/* harmony import */ var lezer_promql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/lezer-promql-virtual-eaf88aa77a/0/cache/lezer-promql-npm-0.22.0-867da6afaa-cdce054700.zip/node_modules/lezer-promql/index.es.js");
/* harmony import */ var _binaryScalarOperations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/binaryScalarOperations.ts");
/* harmony import */ var _shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/parsingUtils.ts");




/**
 * Parses a PromQL query into a visual query model.
 *
 * It traverses the tree and uses sort of state machine to update the query model. The query model is modified
 * during the traversal and sent to each handler as context.
 *
 * @param expr
 */
function buildVisualQueryFromString(expr) {
  const replacedExpr = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .replaceVariables */ .bU)(expr);
  const tree = lezer_promql__WEBPACK_IMPORTED_MODULE_0__/* .parser.parse */ .E2.parse(replacedExpr);
  const node = tree.topNode; // This will be modified in the handlers.

  const visQuery = {
    metric: '',
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
    // Not ideal to log it here, but otherwise we would lose the stack trace.
    console.error(err);
    context.errors.push({
      text: err.message
    });
  } // If we have empty query, we want to reset errors


  if (isEmptyQuery(context.query)) {
    context.errors = [];
  }

  return context;
}

/**
 * Handler for default state. It will traverse the tree and call the appropriate handler for each node. The node
 * handled here does not necessarily need to be of type == Expr.
 * @param expr
 * @param node
 * @param context
 */
function handleExpression(expr, node, context) {
  const visQuery = context.query;

  switch (node.name) {
    case 'MetricIdentifier':
      {
        // Expectation is that there is only one of those per query.
        visQuery.metric = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .getString */ .KF)(expr, node);
        break;
      }

    case 'LabelMatcher':
      {
        // Same as MetricIdentifier should be just one per query.
        visQuery.labels.push(getLabel(expr, node));
        const err = node.getChild(_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .ErrorName */ .GQ);

        if (err) {
          context.errors.push((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .makeError */ .wf)(expr, err));
        }

        break;
      }

    case 'FunctionCall':
      {
        handleFunction(expr, node, context);
        break;
      }

    case 'AggregateExpr':
      {
        handleAggregation(expr, node, context);
        break;
      }

    case 'BinaryExpr':
      {
        handleBinary(expr, node, context);
        break;
      }

    case _shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .ErrorName */ .GQ:
      {
        if (isIntervalVariableError(node)) {
          break;
        }

        context.errors.push((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .makeError */ .wf)(expr, node));
        break;
      }

    default:
      {
        if (node.name === 'ParenExpr') {
          // We don't support parenthesis in the query to group expressions. We just report error but go on with the
          // parsing.
          context.errors.push((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .makeError */ .wf)(expr, node));
        } // Any other nodes we just ignore and go to it's children. This should be fine as there are lot's of wrapper
        // nodes that can be skipped.
        // TODO: there are probably cases where we will just skip nodes we don't support and we should be able to
        //  detect those and report back.


        let child = node.firstChild;

        while (child) {
          handleExpression(expr, child, context);
          child = child.nextSibling;
        }
      }
  }
}

function isIntervalVariableError(node) {
  var _node$prevSibling, _node$prevSibling2, _node$prevSibling2$fi;

  return ((_node$prevSibling = node.prevSibling) === null || _node$prevSibling === void 0 ? void 0 : _node$prevSibling.name) === 'Expr' && ((_node$prevSibling2 = node.prevSibling) === null || _node$prevSibling2 === void 0 ? void 0 : (_node$prevSibling2$fi = _node$prevSibling2.firstChild) === null || _node$prevSibling2$fi === void 0 ? void 0 : _node$prevSibling2$fi.name) === 'VectorSelector';
}

function getLabel(expr, node) {
  const label = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .getString */ .KF)(expr, node.getChild('LabelName'));
  const op = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .getString */ .KF)(expr, node.getChild('MatchOp'));
  const value = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .getString */ .KF)(expr, node.getChild('StringLiteral')).replace(/"/g, '');
  return {
    label,
    op,
    value
  };
}

const rangeFunctions = ['changes', 'rate', 'irate', 'increase', 'delta'];
/**
 * Handle function call which is usually and identifier and its body > arguments.
 * @param expr
 * @param node
 * @param context
 */

function handleFunction(expr, node, context) {
  const visQuery = context.query;
  const nameNode = node.getChild('FunctionIdentifier');
  const funcName = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .getString */ .KF)(expr, nameNode);
  const body = node.getChild('FunctionCallBody');
  const callArgs = body.getChild('FunctionCallArgs');
  const params = [];
  let interval = ''; // This is a bit of a shortcut to get the interval argument. Reasons are
  // - interval is not part of the function args per promQL grammar but we model it as argument for the function in
  //   the query model.
  // - it is easier to handle template variables this way as template variable is an error for the parser

  if (rangeFunctions.includes(funcName) || funcName.endsWith('_over_time')) {
    let match = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .getString */ .KF)(expr, node).match(/\[(.+)\]/);

    if (match !== null && match !== void 0 && match[1]) {
      interval = match[1];
      params.push(match[1]);
    }
  }

  const op = {
    id: funcName,
    params
  }; // We unshift operations to keep the more natural order that we want to have in the visual query editor.

  visQuery.operations.unshift(op);

  if (callArgs) {
    if ((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .getString */ .KF)(expr, callArgs) === interval + ']') {
      // This is a special case where we have a function with a single argument and it is the interval.
      // This happens when you start adding operations in query builder and did not set a metric yet.
      return;
    }

    updateFunctionArgs(expr, callArgs, context, op);
  }
}
/**
 * Handle aggregation as they are distinct type from other functions.
 * @param expr
 * @param node
 * @param context
 */


function handleAggregation(expr, node, context) {
  const visQuery = context.query;
  const nameNode = node.getChild('AggregateOp');
  let funcName = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .getString */ .KF)(expr, nameNode);
  const modifier = node.getChild('AggregateModifier');
  const labels = [];

  if (modifier) {
    const byModifier = modifier.getChild(`By`);

    if (byModifier && funcName) {
      funcName = `__${funcName}_by`;
    }

    const withoutModifier = modifier.getChild(`Without`);

    if (withoutModifier) {
      funcName = `__${funcName}_without`;
    }

    labels.push(...(0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .getAllByType */ .ff)(expr, modifier, 'GroupingLabel'));
  }

  const body = node.getChild('FunctionCallBody');
  const callArgs = body.getChild('FunctionCallArgs');
  const op = {
    id: funcName,
    params: []
  };
  visQuery.operations.unshift(op);
  updateFunctionArgs(expr, callArgs, context, op); // We add labels after params in the visual query editor.

  op.params.push(...labels);
}
/**
 * Handle (probably) all types of arguments that function or aggregation can have.
 *
 *  FunctionCallArgs are nested bit weirdly basically its [firstArg, ...rest] where rest is again FunctionCallArgs so
 *  we cannot just get all the children and iterate them as arguments we have to again recursively traverse through
 *  them.
 *
 * @param expr
 * @param node
 * @param context
 * @param op - We need the operation to add the params to as an additional context.
 */


function updateFunctionArgs(expr, node, context, op) {
  if (!node) {
    return;
  }

  switch (node.name) {
    // In case we have an expression we don't know what kind so we have to look at the child as it can be anything.
    case 'Expr': // FunctionCallArgs are nested bit weirdly as mentioned so we have to go one deeper in this case.

    case 'FunctionCallArgs':
      {
        let child = node.firstChild;

        while (child) {
          updateFunctionArgs(expr, child, context, op);
          child = child.nextSibling;
        }

        break;
      }

    case 'NumberLiteral':
      {
        op.params.push(parseFloat((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .getString */ .KF)(expr, node)));
        break;
      }

    case 'StringLiteral':
      {
        op.params.push((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .getString */ .KF)(expr, node).replace(/"/g, ''));
        break;
      }

    default:
      {
        // Means we get to something that does not seem like simple function arg and is probably nested query so jump
        // back to main context
        handleExpression(expr, node, context);
      }
  }
}
/**
 * Right now binary expressions can be represented in 2 way in visual query. As additional operation in case it is
 * just operation with scalar or it creates a binaryQuery when it's 2 queries.
 * @param expr
 * @param node
 * @param context
 */


function handleBinary(expr, node, context) {
  const visQuery = context.query;
  const left = node.firstChild;
  const op = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .getString */ .KF)(expr, left.nextSibling);
  const binModifier = getBinaryModifier(expr, node.getChild('BinModifiers'));
  const right = node.lastChild;
  const opDef = _binaryScalarOperations__WEBPACK_IMPORTED_MODULE_1__/* .binaryScalarOperatorToOperatorName */ .PX[op];
  const leftNumber = left.getChild('NumberLiteral');
  const rightNumber = right.getChild('NumberLiteral');
  const rightBinary = right.getChild('BinaryExpr');

  if (leftNumber) {// TODO: this should be already handled in case parent is binary expression as it has to be added to parent
    //  if query starts with a number that isn't handled now.
  } else {
    // If this is binary we don't really know if there is a query or just chained scalars. So
    // we have to traverse a bit deeper to know
    handleExpression(expr, left, context);
  }

  if (rightNumber) {
    visQuery.operations.push((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .makeBinOp */ .Es)(opDef, expr, right, !!(binModifier !== null && binModifier !== void 0 && binModifier.isBool)));
  } else if (rightBinary) {
    // Due to the way binary ops are parsed we can get a binary operation on the right that starts with a number which
    // is a factor for a current binary operation. So we have to add it as an operation now.
    const leftMostChild = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .getLeftMostChild */ .ge)(right);

    if ((leftMostChild === null || leftMostChild === void 0 ? void 0 : leftMostChild.name) === 'NumberLiteral') {
      visQuery.operations.push((0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .makeBinOp */ .Es)(opDef, expr, leftMostChild, !!(binModifier !== null && binModifier !== void 0 && binModifier.isBool)));
    } // If we added the first number literal as operation here we still can continue and handle the rest as the first
    // number will be just skipped.


    handleExpression(expr, right, context);
  } else {
    visQuery.binaryQueries = visQuery.binaryQueries || [];
    const binQuery = {
      operator: op,
      query: {
        metric: '',
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
      // Not sure what this could be, maybe should be an error.
      return undefined;
    }

    const labels = (0,_shared_parsingUtils__WEBPACK_IMPORTED_MODULE_2__/* .getString */ .KF)(expr, (_matcher$getChild = matcher.getChild('GroupingLabels')) === null || _matcher$getChild === void 0 ? void 0 : _matcher$getChild.getChild('GroupingLabelList'));
    return {
      isMatcher: true,
      isBool: false,
      matches: labels,
      matchType: matcher.getChild('On') ? 'on' : 'ignoring'
    };
  }
}

function isEmptyQuery(query) {
  if (query.labels.length === 0 && query.operations.length === 0 && !query.metric) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/AutoSizeInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AutoSizeInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["defaultValue", "minWidth", "maxWidth", "onCommitChange", "onKeyDown", "onBlur"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const AutoSizeInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
  const {
    defaultValue = '',
    minWidth = 10,
    maxWidth,
    onCommitChange,
    onKeyDown,
    onBlur
  } = props,
        restProps = _objectWithoutPropertiesLoose(props, _excluded);

  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultValue);
  const [inputWidth, setInputWidth] = react__WEBPACK_IMPORTED_MODULE_0__.useState(minWidth);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setInputWidth(getWidthFor(value.toString(), minWidth, maxWidth));
  }, [value, maxWidth, minWidth]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, restProps, {
    ref: ref,
    value: value.toString(),
    onChange: event => {
      setValue(event.currentTarget.value);
    },
    width: inputWidth,
    onBlur: event => {
      if (onCommitChange) {
        onCommitChange(event);
      }

      if (onBlur) {
        onBlur(event);
      }
    },
    onKeyDown: event => {
      if (event.key === 'Enter' && onCommitChange) {
        onCommitChange(event);
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    },
    "data-testid": 'autosize-input'
  }));
});

function getWidthFor(value, minWidth, maxWidth) {
  if (!value) {
    return minWidth;
  }

  const extraSpace = 3;
  const realWidth = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.measureText)(value.toString(), 14).width / 8 + extraSpace;

  if (minWidth && realWidth < minWidth) {
    return minWidth;
  }

  if (maxWidth && realWidth > maxWidth) {
    return realWidth;
  }

  return realWidth;
}

AutoSizeInput.displayName = 'AutoSizeInput';

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/LabelFilters.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* binding */ LabelFilters)
});

// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js
var experimental = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/shared/LabelFilterItem.tsx






function LabelFilterItem(_ref) {
  var _item$op2;

  let {
    item,
    defaultOp,
    onChange,
    onDelete,
    onGetLabelNames,
    onGetLabelValues
  } = _ref;
  const [state, setState] = (0,react.useState)({});

  const isMultiSelect = () => {
    return item.op === operators[0].label;
  };

  const getSelectOptionsFromString = item => {
    if (item) {
      if (item.indexOf('|') > 0) {
        return item.split('|');
      }

      return [item];
    }

    return [];
  };

  const getOptions = () => {
    var _state$labelValues;

    return [...getSelectOptionsFromString(item === null || item === void 0 ? void 0 : item.value).map(src.toOption), ...((_state$labelValues = state.labelValues) !== null && _state$labelValues !== void 0 ? _state$labelValues : [])];
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    "data-testid": "prometheus-dimensions-filter-item",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.InputGroup, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        inputId: "prometheus-dimensions-filter-item-key",
        width: "auto",
        value: item.label ? (0,src.toOption)(item.label) : null,
        allowCustomValue: true,
        onOpenMenu: async () => {
          setState({
            isLoadingLabelNames: true
          });
          const labelNames = await onGetLabelNames(item);
          setState({
            labelNames,
            isLoadingLabelNames: undefined
          });
        },
        isLoading: state.isLoadingLabelNames,
        options: state.labelNames,
        onChange: change => {
          if (change.label) {
            var _item$op;

            onChange(Object.assign({}, item, {
              op: (_item$op = item.op) !== null && _item$op !== void 0 ? _item$op : defaultOp,
              label: change.label
            }));
          }
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        value: (0,src.toOption)((_item$op2 = item.op) !== null && _item$op2 !== void 0 ? _item$op2 : defaultOp),
        options: operators,
        width: "auto",
        onChange: change => {
          if (change.value != null) {
            onChange(Object.assign({}, item, {
              op: change.value
            }));
          }
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        inputId: "prometheus-dimensions-filter-item-value",
        width: "auto",
        value: isMultiSelect() ? getSelectOptionsFromString(item === null || item === void 0 ? void 0 : item.value).map(src.toOption) : getSelectOptionsFromString(item === null || item === void 0 ? void 0 : item.value).map(src.toOption)[0],
        allowCustomValue: true,
        onOpenMenu: async () => {
          setState({
            isLoadingLabelValues: true
          });
          const labelValues = await onGetLabelValues(item);
          setState(Object.assign({}, state, {
            labelValues,
            isLoadingLabelValues: undefined
          }));
        },
        isMulti: isMultiSelect(),
        isLoading: state.isLoadingLabelValues,
        options: getOptions(),
        onChange: change => {
          if (change.value) {
            var _item$op3;

            onChange(Object.assign({}, item, {
              value: change.value,
              op: (_item$op3 = item.op) !== null && _item$op3 !== void 0 ? _item$op3 : defaultOp
            }));
          } else {
            var _item$op4;

            const changes = change.map(change => {
              return change.label;
            }).join('|');
            onChange(Object.assign({}, item, {
              value: changes,
              op: (_item$op4 = item.op) !== null && _item$op4 !== void 0 ? _item$op4 : defaultOp
            }));
          }
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.AccessoryButton, {
        "aria-label": "remove",
        icon: "times",
        variant: "secondary",
        onClick: onDelete
      })]
    })
  });
}
const operators = [{
  label: '=~',
  value: '=~'
}, {
  label: '=',
  value: '='
}, {
  label: '!=',
  value: '!='
}, {
  label: '!~',
  value: '!~'
}];
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/shared/LabelFilters.tsx





function LabelFilters(_ref) {
  let {
    labelsFilters,
    onChange,
    onGetLabelNames,
    onGetLabelValues,
    error
  } = _ref;
  const defaultOp = '=';
  const [items, setItems] = (0,react.useState)([{
    op: defaultOp
  }]);
  (0,react.useEffect)(() => {
    if (labelsFilters.length > 0) {
      setItems(labelsFilters);
    } else {
      setItems([{
        op: defaultOp
      }]);
    }
  }, [labelsFilters]);

  const onLabelsChange = newItems => {
    setItems(newItems); // Extract full label filters with both label & value

    const newLabels = newItems.filter(x => x.label != null && x.value != null);

    if (!(0,lodash.isEqual)(newLabels, labelsFilters)) {
      onChange(newLabels);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorFieldGroup, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorField, {
      label: "Labels",
      error: error,
      invalid: !!error,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.EditorList, {
        items: items,
        onChange: onLabelsChange,
        renderItem: (item, onChangeItem, onDelete) => /*#__PURE__*/(0,jsx_runtime.jsx)(LabelFilterItem, {
          item: item,
          defaultOp: defaultOp,
          onChange: onChangeItem,
          onDelete: onDelete,
          onGetLabelNames: onGetLabelNames,
          onGetLabelValues: onGetLabelValues
        })
      })
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/LokiAndPromQueryModellerBase.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ LokiAndPromQueryModellerBase)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/types.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class LokiAndPromQueryModellerBase {
  constructor(getOperations) {
    _defineProperty(this, "operationsRegisty", void 0);

    _defineProperty(this, "categories", []);

    this.operationsRegisty = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.Registry(getOperations);
  }

  setOperationCategories(categories) {
    this.categories = categories;
  }

  getOperationsForCategory(category) {
    return this.operationsRegisty.list().filter(op => op.category === category && !op.hideFromList);
  }

  getAlternativeOperations(key) {
    return this.operationsRegisty.list().filter(op => op.alternativesKey === key);
  }

  getCategories() {
    return this.categories;
  }

  getOperationDef(id) {
    return this.operationsRegisty.getIfExists(id);
  }

  renderOperations(queryString, operations) {
    for (const operation of operations) {
      const def = this.operationsRegisty.getIfExists(operation.id);

      if (!def) {
        throw new Error(`Could not find operation ${operation.id} in the registry`);
      }

      queryString = def.renderer(operation, def, queryString);
    }

    return queryString;
  }

  renderBinaryQueries(queryString, binaryQueries) {
    if (binaryQueries) {
      for (const binQuery of binaryQueries) {
        queryString = `${this.renderBinaryQuery(queryString, binQuery)}`;
      }
    }

    return queryString;
  }

  renderBinaryQuery(leftOperand, binaryQuery) {
    let result = leftOperand + ` ${binaryQuery.operator} `;

    if (binaryQuery.vectorMatches) {
      result += `${binaryQuery.vectorMatchesType}(${binaryQuery.vectorMatches}) `;
    }

    return result + this.renderQuery(binaryQuery.query, true);
  }

  renderLabels(labels) {
    if (labels.length === 0) {
      return '';
    }

    let expr = '{';

    for (const filter of labels) {
      if (expr !== '{') {
        expr += ', ';
      }

      expr += `${filter.label}${filter.op}"${filter.value}"`;
    }

    return expr + `}`;
  }

  renderQuery(query, nested) {
    var _query$metric, _query$binaryQueries, _query$binaryQueries2;

    let queryString = `${(_query$metric = query.metric) !== null && _query$metric !== void 0 ? _query$metric : ''}${this.renderLabels(query.labels)}`;
    queryString = this.renderOperations(queryString, query.operations);

    if (!nested && this.hasBinaryOp(query) && Boolean((_query$binaryQueries = query.binaryQueries) === null || _query$binaryQueries === void 0 ? void 0 : _query$binaryQueries.length)) {
      queryString = `(${queryString})`;
    }

    queryString = this.renderBinaryQueries(queryString, query.binaryQueries);

    if (nested && (this.hasBinaryOp(query) || Boolean((_query$binaryQueries2 = query.binaryQueries) === null || _query$binaryQueries2 === void 0 ? void 0 : _query$binaryQueries2.length))) {
      queryString = `(${queryString})`;
    }

    return queryString;
  }

  hasBinaryOp(query) {
    return query.operations.find(op => {
      const def = this.getOperationDef(op.id);
      return (def === null || def === void 0 ? void 0 : def.category) === _types__WEBPACK_IMPORTED_MODULE_1__/* .PromVisualQueryOperationCategory.BinaryOps */ .C.BinaryOps;
    }) !== undefined;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationExplainedBox.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ OperationExplainedBox)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function OperationExplainedBox(_ref) {
  let {
    title,
    stepNumber,
    markdown,
    children
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.box,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.stepNumber,
      children: stepNumber
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.boxInner,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styles.header,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: title
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: styles.body,
        children: [markdown && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.renderMarkdown)(markdown)
          }
        }), children]
      })]
    })]
  });
}

const getStyles = theme => {
  return {
    box: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      background: theme.colors.background.secondary,
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius(),
      position: 'relative',
      marginBottom: theme.spacing(0.5)
    }),
    boxInner: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginLeft: theme.spacing(4)
    }),
    stepNumber: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontWeight: theme.typography.fontWeightMedium,
      background: theme.colors.secondary.main,
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '10px',
      left: '11px',
      fontSize: theme.typography.bodySmall.fontSize
    }),
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      paddingBottom: theme.spacing(0.5),
      display: 'flex',
      alignItems: 'center',
      fontFamily: theme.typography.fontFamilyMonospace
    }),
    body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      'p:last-child': {
        margin: 0
      },
      a: {
        color: theme.colors.text.link,
        textDecoration: 'underline'
      }
    })
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* binding */ OperationList)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js + 4 modules
var react_beautiful_dnd_esm = __webpack_require__("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMountedState.js
var useMountedState = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMountedState.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js
var usePrevious = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js
var experimental = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-popper-tooltip-virtual-d9d7047333/0/cache/react-popper-tooltip-npm-4.3.1-91318ee546-82ae84c3b7.zip/node_modules/react-popper-tooltip/dist/esm/react-popper-tooltip.js + 54 modules
var react_popper_tooltip = __webpack_require__("./.yarn/__virtual__/react-popper-tooltip-virtual-d9d7047333/0/cache/react-popper-tooltip-npm-4.3.1-91318ee546-82ae84c3b7.zip/node_modules/react-popper-tooltip/dist/esm/react-popper-tooltip.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationInfoButton.tsx
var _FlexItem;










const OperationInfoButton = /*#__PURE__*/react.memo(_ref => {
  let {
    def,
    operation
  } = _ref;
  const styles = (0,src.useStyles2)(getStyles);
  const [show, setShow] = (0,react.useState)(false);
  const {
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible
  } = (0,react_popper_tooltip/* usePopperTooltip */.O)({
    placement: 'top',
    visible: show,
    offset: [0, 16],
    onVisibleChange: setShow,
    interactive: true,
    trigger: ['click']
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
      title: "Click to show description",
      ref: setTriggerRef,
      icon: "info-circle",
      size: "sm",
      variant: "secondary",
      fill: "text"
    }), visible && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Portal, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", Object.assign({
        ref: setTooltipRef
      }, getTooltipProps(), {
        className: styles.docBox,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.docBoxHeader,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: def.renderer(operation, def, '<expr>')
          }), _FlexItem || (_FlexItem = /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.FlexItem, {
            grow: 1
          })), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            icon: "times",
            onClick: () => setShow(false),
            fill: "text",
            variant: "secondary",
            title: "Remove operation"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.docBoxBody,
          dangerouslySetInnerHTML: {
            __html: getOperationDocs(def, operation)
          }
        })]
      }))
    })]
  });
});
OperationInfoButton.displayName = 'OperationDocs';

const getStyles = theme => {
  return {
    docBox: (0,emotion_css_esm.css)({
      overflow: 'hidden',
      background: theme.colors.background.primary,
      border: `1px solid ${theme.colors.border.strong}`,
      boxShadow: theme.shadows.z3,
      maxWidth: '600px',
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius(),
      zIndex: theme.zIndex.tooltip
    }),
    docBoxHeader: (0,emotion_css_esm.css)({
      fontSize: theme.typography.h5.fontSize,
      fontFamily: theme.typography.fontFamilyMonospace,
      paddingBottom: theme.spacing(1),
      display: 'flex',
      alignItems: 'center'
    }),
    docBoxBody: (0,emotion_css_esm.css)({
      // The markdown paragraph has a marginBottom this removes it
      marginBottom: theme.spacing(-1),
      color: theme.colors.text.secondary
    }),
    signature: (0,emotion_css_esm.css)({
      fontSize: theme.typography.bodySmall.fontSize,
      fontFamily: theme.typography.fontFamilyMonospace
    }),
    dropdown: (0,emotion_css_esm.css)({
      opacity: 0,
      color: theme.colors.text.secondary
    })
  };
};

function getOperationDocs(def, op) {
  var _def$documentation;

  return (0,grafana_data_src.renderMarkdown)(def.explainHandler ? def.explainHandler(op, def) : (_def$documentation = def.documentation) !== null && _def$documentation !== void 0 ? _def$documentation : 'no docs');
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationHeader.tsx
var OperationHeader_FlexItem;









const OperationHeader = /*#__PURE__*/react.memo(_ref => {
  var _def$name;

  let {
    operation,
    def,
    index,
    onChange,
    onRemove,
    queryModeller,
    dragHandleProps
  } = _ref;
  const styles = (0,src.useStyles2)(OperationHeader_getStyles);
  const [state, setState] = (0,react.useState)({});

  const onToggleSwitcher = () => {
    if (state.isOpen) {
      setState(Object.assign({}, state, {
        isOpen: false
      }));
    } else {
      const alternatives = queryModeller.getAlternativeOperations(def.alternativesKey).map(alt => ({
        label: alt.name,
        value: alt
      }));
      setState({
        isOpen: true,
        alternatives
      });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.header,
    children: [!state.isOpen && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", Object.assign({}, dragHandleProps, {
        children: (_def$name = def.name) !== null && _def$name !== void 0 ? _def$name : def.id
      })), OperationHeader_FlexItem || (OperationHeader_FlexItem = /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.FlexItem, {
        grow: 1
      })), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: `${styles.operationHeaderButtons} operation-header-show-on-hover`,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          icon: "angle-down",
          size: "sm",
          onClick: onToggleSwitcher,
          fill: "text",
          variant: "secondary",
          title: "Click to view alternative operations"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(OperationInfoButton, {
          def: def,
          operation: operation
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          icon: "times",
          size: "sm",
          onClick: () => onRemove(index),
          fill: "text",
          variant: "secondary",
          title: "Remove operation"
        })]
      })]
    }), state.isOpen && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.selectWrapper,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Select, {
        autoFocus: true,
        openMenuOnFocus: true,
        placeholder: "Replace with",
        options: state.alternatives,
        isOpen: true,
        onCloseMenu: onToggleSwitcher,
        onChange: value => {
          if (value.value) {
            // Operation should exist if it is selectable
            const newDef = queryModeller.getOperationDef(value.value.id);
            let changedOp = Object.assign({}, operation, {
              id: value.value.id
            });
            onChange(index, def.changeTypeHandler ? def.changeTypeHandler(changedOp, newDef) : changedOp);
          }
        }
      })
    })]
  });
});
OperationHeader.displayName = 'OperationHeader';

const OperationHeader_getStyles = theme => {
  return {
    header: (0,emotion_css_esm.css)({
      borderBottom: `1px solid ${theme.colors.border.medium}`,
      padding: theme.spacing(0.5, 0.5, 0.5, 1),
      display: 'flex',
      alignItems: 'center',
      '&:hover .operation-header-show-on-hover': (0,emotion_css_esm.css)({
        opacity: 1
      })
    }),
    operationHeaderButtons: (0,emotion_css_esm.css)({
      opacity: 0,
      transition: theme.transitions.create(['opacity'], {
        duration: theme.transitions.duration.short
      })
    }),
    selectWrapper: (0,emotion_css_esm.css)({
      paddingRight: theme.spacing(2)
    })
  };
};
// EXTERNAL MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/shared/AutoSizeInput.tsx
var AutoSizeInput = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/AutoSizeInput.tsx");
// EXTERNAL MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/shared/operationUtils.ts
var operationUtils = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/operationUtils.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationParamEditor.tsx






function getOperationParamEditor(paramDef) {
  if (paramDef.editor) {
    return paramDef.editor;
  }

  if (paramDef.options) {
    return SelectInputParamEditor;
  }

  switch (paramDef.type) {
    case 'boolean':
      return BoolInputParamEditor;

    case 'number':
    case 'string':
    default:
      return SimpleInputParamEditor;
  }
}

function SimpleInputParamEditor(props) {
  var _props$value;

  return /*#__PURE__*/(0,jsx_runtime.jsx)(AutoSizeInput/* AutoSizeInput */.H, {
    id: (0,operationUtils/* getOperationParamId */.i1)(props.operationIndex, props.index),
    defaultValue: (_props$value = props.value) === null || _props$value === void 0 ? void 0 : _props$value.toString(),
    minWidth: props.paramDef.minWidth,
    placeholder: props.paramDef.placeholder,
    title: props.paramDef.description,
    onCommitChange: evt => {
      props.onChange(props.index, evt.currentTarget.value);
    }
  });
}

function BoolInputParamEditor(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Checkbox, {
    id: (0,operationUtils/* getOperationParamId */.i1)(props.operationIndex, props.index),
    value: props.value,
    onChange: evt => props.onChange(props.index, evt.currentTarget.checked)
  });
}

function SelectInputParamEditor(_ref) {
  var _selectOptions$, _selectOptions$find;

  let {
    paramDef,
    value,
    index,
    operationIndex,
    onChange
  } = _ref;
  let selectOptions = paramDef.options;

  if (!((_selectOptions$ = selectOptions[0]) !== null && _selectOptions$ !== void 0 && _selectOptions$.label)) {
    selectOptions = paramDef.options.map(option => ({
      label: option.toString(),
      value: option
    }));
  }

  let valueOption = (_selectOptions$find = selectOptions.find(x => x.value === value)) !== null && _selectOptions$find !== void 0 ? _selectOptions$find : (0,grafana_data_src.toOption)(value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Select, {
    id: (0,operationUtils/* getOperationParamId */.i1)(operationIndex, index),
    value: valueOption,
    options: selectOptions,
    placeholder: paramDef.placeholder,
    allowCustomValue: true,
    onChange: value => onChange(index, value.value)
  });
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationEditor.tsx










function OperationEditor(_ref) {
  let {
    operation,
    index,
    onRemove,
    onChange,
    onRunQuery,
    queryModeller,
    query,
    datasource,
    highlight
  } = _ref;
  const styles = (0,src.useStyles2)(OperationEditor_getStyles);
  const def = queryModeller.getOperationDef(operation.id);
  const shouldHighlight = useHighlight(highlight);

  if (!def) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
      children: ["Operation ", operation.id, " not found"]
    });
  }

  const onParamValueChanged = (paramIdx, value) => {
    const update = Object.assign({}, operation, {
      params: [...operation.params]
    });
    update.params[paramIdx] = value;
    callParamChangedThenOnChange(def, update, index, paramIdx, onChange);
  };

  const onAddRestParam = () => {
    const update = Object.assign({}, operation, {
      params: [...operation.params, '']
    });
    callParamChangedThenOnChange(def, update, index, operation.params.length, onChange);
  };

  const onRemoveRestParam = paramIdx => {
    const update = Object.assign({}, operation, {
      params: [...operation.params.slice(0, paramIdx), ...operation.params.slice(paramIdx + 1)]
    });
    callParamChangedThenOnChange(def, update, index, paramIdx, onChange);
  };

  const operationElements = [];

  for (let paramIndex = 0; paramIndex < operation.params.length; paramIndex++) {
    const paramDef = def.params[Math.min(def.params.length - 1, paramIndex)];
    const Editor = getOperationParamEditor(paramDef);
    operationElements.push( /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.paramRow,
      children: [!paramDef.hideName && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.paramName,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("label", {
          htmlFor: (0,operationUtils/* getOperationParamId */.i1)(index, paramIndex),
          children: paramDef.name
        }), paramDef.description && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Tooltip, {
          placement: "top",
          content: paramDef.description,
          theme: "info",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
            name: "info-circle",
            size: "sm",
            className: styles.infoIcon
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.paramValue,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.Stack, {
          gap: 0.5,
          direction: "row",
          alignItems: "center",
          wrap: false,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Editor, {
            index: paramIndex,
            paramDef: paramDef,
            value: operation.params[paramIndex],
            operation: operation,
            operationIndex: index,
            onChange: onParamValueChanged,
            onRunQuery: onRunQuery,
            query: query,
            datasource: datasource
          }), paramDef.restParam && (operation.params.length > def.params.length || paramDef.optional) && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            "data-testid": `operations.${index}.remove-rest-param`,
            size: "sm",
            fill: "text",
            icon: "times",
            variant: "secondary",
            title: `Remove ${paramDef.name}`,
            onClick: () => onRemoveRestParam(paramIndex)
          })]
        })
      })]
    }, `${paramIndex}-1`));
  } // Handle adding button for rest params


  let restParam;

  if (def.params.length > 0) {
    const lastParamDef = def.params[def.params.length - 1];

    if (lastParamDef.restParam) {
      restParam = renderAddRestParamButton(lastParamDef, onAddRestParam, index, operation.params.length, styles);
    }
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(react_beautiful_dnd_esm/* Draggable */._l, {
    draggableId: `operation-${index}`,
    index: index,
    children: provided => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", Object.assign({
      className: (0,emotion_css_esm.cx)(styles.card, shouldHighlight && styles.cardHighlight),
      ref: provided.innerRef
    }, provided.draggableProps, {
      "data-testid": `operations.${index}.wrapper`,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(OperationHeader, {
        operation: operation,
        dragHandleProps: provided.dragHandleProps,
        def: def,
        index: index,
        onChange: onChange,
        onRemove: onRemove,
        queryModeller: queryModeller
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.body,
        children: operationElements
      }), restParam, index < query.operations.length - 1 && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.arrow,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.arrowLine
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.arrowArrow
        })]
      })]
    }))
  });
}
/**
 * When highlight is switched on makes sure it is switched of right away, so we just flash the highlight and then fade
 * out.
 * @param highlight
 */

function useHighlight(highlight) {
  const [keepHighlight, setKeepHighlight] = (0,react.useState)(true);
  (0,react.useEffect)(() => {
    let t;

    if (highlight) {
      t = setTimeout(() => {
        setKeepHighlight(false);
      }, 1);
    } else {
      setKeepHighlight(true);
    }

    return () => clearTimeout(t);
  }, [highlight]);
  return keepHighlight && highlight;
}

function renderAddRestParamButton(paramDef, onAddRestParam, operationIndex, paramIndex, styles) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.restParam,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
      size: "sm",
      icon: "plus",
      title: `Add ${paramDef.name}`,
      variant: "secondary",
      onClick: onAddRestParam,
      "data-testid": `operations.${operationIndex}.add-rest-param`,
      children: paramDef.name
    })
  }, `${paramIndex}-2`);
}

function callParamChangedThenOnChange(def, operation, operationIndex, paramIndex, onChange) {
  if (def.paramChangedHandler) {
    onChange(operationIndex, def.paramChangedHandler(paramIndex, operation, def));
  } else {
    onChange(operationIndex, operation);
  }
}

const OperationEditor_getStyles = theme => {
  return {
    card: (0,emotion_css_esm.css)({
      background: theme.colors.background.primary,
      border: `1px solid ${theme.colors.border.medium}`,
      display: 'flex',
      flexDirection: 'column',
      cursor: 'grab',
      borderRadius: theme.shape.borderRadius(1),
      marginBottom: theme.spacing(1),
      position: 'relative',
      transition: 'all 1s ease-in 0s'
    }),
    cardHighlight: (0,emotion_css_esm.css)({
      boxShadow: `0px 0px 4px 0px ${theme.colors.primary.border}`,
      border: `1px solid ${theme.colors.primary.border}`
    }),
    infoIcon: (0,emotion_css_esm.css)({
      marginLeft: theme.spacing(0.5),
      color: theme.colors.text.secondary,
      ':hover': {
        color: theme.colors.text.primary
      }
    }),
    body: (0,emotion_css_esm.css)({
      margin: theme.spacing(1, 1, 0.5, 1),
      display: 'table'
    }),
    paramRow: (0,emotion_css_esm.css)({
      label: 'paramRow',
      display: 'table-row',
      verticalAlign: 'middle'
    }),
    paramName: (0,emotion_css_esm.css)({
      display: 'table-cell',
      padding: theme.spacing(0, 1, 0, 0),
      fontSize: theme.typography.bodySmall.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      verticalAlign: 'middle',
      height: '32px'
    }),
    paramValue: (0,emotion_css_esm.css)({
      label: 'paramValue',
      display: 'table-cell',
      verticalAlign: 'middle'
    }),
    restParam: (0,emotion_css_esm.css)({
      padding: theme.spacing(0, 1, 1, 1)
    }),
    arrow: (0,emotion_css_esm.css)({
      position: 'absolute',
      top: '0',
      right: '-18px',
      display: 'flex'
    }),
    arrowLine: (0,emotion_css_esm.css)({
      height: '2px',
      width: '8px',
      backgroundColor: theme.colors.border.strong,
      position: 'relative',
      top: '14px'
    }),
    arrowArrow: (0,emotion_css_esm.css)({
      width: 0,
      height: 0,
      borderTop: `5px solid transparent`,
      borderBottom: `5px solid transparent`,
      borderLeft: `7px solid ${theme.colors.border.strong}`,
      position: 'relative',
      top: '10px'
    })
  };
};
;// CONCATENATED MODULE: ./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationList.tsx









function OperationList(_ref) {
  let {
    query,
    datasource,
    queryModeller,
    onChange,
    onRunQuery
  } = _ref;
  const styles = (0,src.useStyles2)(OperationList_getStyles);
  const {
    operations
  } = query;
  const opsToHighlight = useOperationsHighlight(operations);
  const [cascaderOpen, setCascaderOpen] = (0,react.useState)(false);

  const onOperationChange = (index, update) => {
    const updatedList = [...operations];
    updatedList.splice(index, 1, update);
    onChange(Object.assign({}, query, {
      operations: updatedList
    }));
  };

  const onRemove = index => {
    const updatedList = [...operations.slice(0, index), ...operations.slice(index + 1)];
    onChange(Object.assign({}, query, {
      operations: updatedList
    }));
  };

  const addOptions = queryModeller.getCategories().map(category => {
    return {
      value: category,
      label: category,
      items: queryModeller.getOperationsForCategory(category).map(operation => ({
        value: operation.id,
        label: operation.name,
        isLeaf: true
      }))
    };
  });

  const onAddOperation = value => {
    const operationDef = queryModeller.getOperationDef(value);

    if (!operationDef) {
      return;
    }

    onChange(operationDef.addOperationHandler(operationDef, query, queryModeller));
    setCascaderOpen(false);
  };

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const updatedList = [...operations];
    const element = updatedList[result.source.index];
    updatedList.splice(result.source.index, 1);
    updatedList.splice(result.destination.index, 0, element);
    onChange(Object.assign({}, query, {
      operations: updatedList
    }));
  };

  const onCascaderBlur = () => {
    setCascaderOpen(false);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(experimental.Stack, {
    gap: 1,
    direction: "column",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.Stack, {
      gap: 1,
      children: [operations.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(react_beautiful_dnd_esm/* DragDropContext */.Z5, {
        onDragEnd: onDragEnd,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_beautiful_dnd_esm/* Droppable */.bK, {
          droppableId: "sortable-field-mappings",
          direction: "horizontal",
          children: provided => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", Object.assign({
            className: styles.operationList,
            ref: provided.innerRef
          }, provided.droppableProps, {
            children: [operations.map((op, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(OperationEditor, {
              queryModeller: queryModeller,
              index: index,
              operation: op,
              query: query,
              datasource: datasource,
              onChange: onOperationChange,
              onRemove: onRemove,
              onRunQuery: onRunQuery,
              highlight: opsToHighlight[index]
            }, op.id + index)), provided.placeholder]
          }))
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.addButton,
        children: cascaderOpen ? /*#__PURE__*/(0,jsx_runtime.jsx)(src.Cascader, {
          options: addOptions,
          onSelect: onAddOperation,
          onBlur: onCascaderBlur,
          autoFocus: true,
          alwaysOpen: true,
          hideActiveLevelLabel: true,
          placeholder: 'Search'
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          icon: 'plus',
          variant: 'secondary',
          onClick: () => setCascaderOpen(true),
          title: 'Add operation',
          children: "Operations"
        })
      })]
    })
  });
}
/**
 * Returns indexes of operations that should be highlighted. We check the diff of operations added but at the same time
 * we want to highlight operations only after the initial render, so we check for mounted state and calculate the diff
 * only after.
 * @param operations
 */

function useOperationsHighlight(operations) {
  const isMounted = (0,useMountedState/* default */.Z)();
  const prevOperations = (0,usePrevious/* default */.Z)(operations);

  if (!isMounted()) {
    return operations.map(() => false);
  }

  if (!prevOperations) {
    return operations.map(() => true);
  }

  let newOps = [];

  if (prevOperations.length - 1 === operations.length && operations.every(op => prevOperations.includes(op))) {
    // In case we remove one op and does not change any ops then don't highlight anything.
    return operations.map(() => false);
  }

  if (prevOperations.length + 1 === operations.length && prevOperations.every(op => operations.includes(op))) {
    // If we add a single op just find it and highlight just that.
    const newOp = operations.find(op => !prevOperations.includes(op));
    newOps = operations.map(op => {
      return op === newOp;
    });
  } else {
    // Default diff of all ops.
    newOps = operations.map((op, index) => {
      var _prevOperations$index;

      return !isSameOp(op.id, (_prevOperations$index = prevOperations[index]) === null || _prevOperations$index === void 0 ? void 0 : _prevOperations$index.id);
    });
  }

  return newOps;
}

function isSameOp(op1, op2) {
  return op1 === op2 || `__${op1}_by` === op2 || op1 === `__${op2}_by`;
}

const OperationList_getStyles = theme => {
  return {
    heading: (0,emotion_css_esm.css)({
      label: 'heading',
      fontSize: 12,
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: 0
    }),
    operationList: (0,emotion_css_esm.css)({
      label: 'operationList',
      display: 'flex',
      flexWrap: 'wrap',
      gap: theme.spacing(2)
    }),
    addButton: (0,emotion_css_esm.css)({
      label: 'addButton',
      width: 126,
      paddingBottom: theme.spacing(1)
    })
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationListExplained.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ OperationListExplained)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _OperationExplainedBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationExplainedBox.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function OperationListExplained(_ref) {
  let {
    query,
    queryModeller,
    stepNumber
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: query.operations.map((op, index) => {
      var _def$documentation;

      const def = queryModeller.getOperationDef(op.id);

      if (!def) {
        return `Operation ${op.id} not found`;
      }

      const title = def.renderer(op, def, '<expr>');
      const body = def.explainHandler ? def.explainHandler(op, def) : (_def$documentation = def.documentation) !== null && _def$documentation !== void 0 ? _def$documentation : 'no docs';
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_OperationExplainedBox__WEBPACK_IMPORTED_MODULE_1__/* .OperationExplainedBox */ .B, {
        stepNumber: index + stepNumber,
        title: title,
        markdown: body
      }, index);
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationsEditorRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ OperationsEditorRow)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function OperationsEditorRow(_ref) {
  let {
    children
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: styles.root,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.Stack, {
      gap: 1,
      children: children
    })
  });
}

const getStyles = theme => {
  return {
    root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      padding: theme.spacing(1, 1, 0, 1),
      backgroundColor: theme.colors.background.secondary,
      borderRadius: theme.shape.borderRadius(1)
    })
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/QueryEditorModeToggle.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ QueryEditorModeToggle)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const editorModes = [{
  label: 'Explain',
  value: _types__WEBPACK_IMPORTED_MODULE_3__/* .QueryEditorMode.Explain */ .c.Explain
}, {
  label: 'Builder',
  value: _types__WEBPACK_IMPORTED_MODULE_3__/* .QueryEditorMode.Builder */ .c.Builder,
  component: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tag, {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontSize: 10,
      padding: '1px 5px',
      verticalAlign: 'text-bottom'
    }),
    name: 'Beta',
    colorIndex: 1
  })
}, {
  label: 'Code',
  value: _types__WEBPACK_IMPORTED_MODULE_3__/* .QueryEditorMode.Code */ .c.Code
}];
function QueryEditorModeToggle(_ref) {
  let {
    mode,
    onChange
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    "data-testid": 'QueryEditorModeToggle',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
      options: editorModes,
      size: "sm",
      value: mode,
      onChange: onChange
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/QueryHeaderSwitch.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ QueryHeaderSwitch)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["label"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








function QueryHeaderSwitch(_ref) {
  let {
    label
  } = _ref,
      inputProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  const dashedLabel = label.replace(' ', '-');
  const switchIdRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)(`switch-${dashedLabel}`));
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    gap: 1,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
      htmlFor: switchIdRef.current,
      className: styles.switchLabel,
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Switch, Object.assign({}, inputProps, {
      id: switchIdRef.current
    }))]
  });
}

const getStyles = theme => {
  return {
    switchLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      cursor: 'pointer',
      fontSize: theme.typography.bodySmall.fontSize,
      '&:hover': {
        color: theme.colors.text.primary
      }
    })
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/QueryOptionGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ QueryOptionGroup)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useToggle.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function QueryOptionGroup(_ref) {
  let {
    title,
    children,
    collapsedInfo
  } = _ref;
  const [isOpen, toggleOpen] = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.Stack, {
    gap: 0,
    direction: "column",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.header,
      onClick: toggleOpen,
      title: "Click to edit options",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styles.toggle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          name: isOpen ? 'angle-down' : 'angle-right'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
        className: styles.title,
        children: title
      }), !isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: styles.description,
        children: collapsedInfo.map((x, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: x
        }, i))
      })]
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.body,
      children: children
    })]
  });
}

const getStyles = theme => {
  return {
    switchLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      cursor: 'pointer',
      fontSize: theme.typography.bodySmall.fontSize,
      '&:hover': {
        color: theme.colors.text.primary
      }
    }),
    header: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'baseline',
      color: theme.colors.text.primary,
      '&:hover': {
        background: theme.colors.emphasize(theme.colors.background.primary, 0.03)
      }
    }),
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      flexGrow: 1,
      overflow: 'hidden',
      fontSize: theme.typography.bodySmall.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
      margin: 0
    }),
    description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      fontSize: theme.typography.bodySmall.fontSize,
      paddingLeft: theme.spacing(2),
      gap: theme.spacing(2),
      display: 'flex'
    }),
    body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: 'flex',
      paddingTop: theme.spacing(2),
      gap: theme.spacing(2),
      flexWrap: 'wrap'
    }),
    toggle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      color: theme.colors.text.secondary,
      marginRight: `${theme.spacing(1)}`
    })
  };
};

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/operationUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IT": () => (/* binding */ createAggregationOperation),
/* harmony export */   "NZ": () => (/* binding */ rangeRendererLeftWithParams),
/* harmony export */   "PP": () => (/* binding */ defaultAddOperationHandler),
/* harmony export */   "Z3": () => (/* binding */ createAggregationOperationWithParam),
/* harmony export */   "e8": () => (/* binding */ rangeRendererRightWithParams),
/* harmony export */   "i1": () => (/* binding */ getOperationParamId),
/* harmony export */   "kq": () => (/* binding */ getRangeVectorParamDef),
/* harmony export */   "pS": () => (/* binding */ functionRendererLeft),
/* harmony export */   "t7": () => (/* binding */ getPromAndLokiOperationDisplayName),
/* harmony export */   "zJ": () => (/* binding */ functionRendererRight)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/pluralize-npm-8.0.0-f5f044ed52-08931d4a6a.zip/node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LabelParamEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/components/LabelParamEditor.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/types.ts");




function functionRendererLeft(model, def, innerExpr) {
  const params = renderParams(model, def, innerExpr);
  const str = model.id + '(';

  if (innerExpr) {
    params.push(innerExpr);
  }

  return str + params.join(', ') + ')';
}
function functionRendererRight(model, def, innerExpr) {
  const params = renderParams(model, def, innerExpr);
  const str = model.id + '(';

  if (innerExpr) {
    params.unshift(innerExpr);
  }

  return str + params.join(', ') + ')';
}

function rangeRendererWithParams(model, def, innerExpr, renderLeft) {
  var _, _model$params;

  if (def.params.length < 2) {
    throw `Cannot render a function with params of length [${def.params.length}]`;
  }

  let rangeVector = (_ = ((_model$params = model.params) !== null && _model$params !== void 0 ? _model$params : [])[0]) !== null && _ !== void 0 ? _ : '5m'; // Next frame the remaining parameters, but get rid of the first one because it's used to move the
  // instant vector into a range vector.

  const params = renderParams(Object.assign({}, model, {
    params: model.params.slice(1)
  }), Object.assign({}, def, {
    params: def.params.slice(1),
    defaultParams: def.defaultParams.slice(1)
  }), innerExpr);
  const str = model.id + '('; // Depending on the renderLeft variable, render parameters to the left or right
  // renderLeft === true (renderLeft) => (param1, param2, rangeVector[...])
  // renderLeft === false (renderRight) => (rangeVector[...], param1, param2)

  if (innerExpr) {
    renderLeft ? params.push(`${innerExpr}[${rangeVector}]`) : params.unshift(`${innerExpr}[${rangeVector}]`);
  } // stick everything together


  return str + params.join(', ') + ')';
}

function rangeRendererRightWithParams(model, def, innerExpr) {
  return rangeRendererWithParams(model, def, innerExpr, false);
}
function rangeRendererLeftWithParams(model, def, innerExpr) {
  return rangeRendererWithParams(model, def, innerExpr, true);
}

function renderParams(model, def, innerExpr) {
  var _model$params2;

  return ((_model$params2 = model.params) !== null && _model$params2 !== void 0 ? _model$params2 : []).map((value, index) => {
    const paramDef = def.params[index];

    if (paramDef.type === 'string') {
      return '"' + value + '"';
    }

    return value;
  });
}

function defaultAddOperationHandler(def, query) {
  const newOperation = {
    id: def.id,
    params: def.defaultParams
  };
  return Object.assign({}, query, {
    operations: [...query.operations, newOperation]
  });
}
function getPromAndLokiOperationDisplayName(funcName) {
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.capitalize)(funcName.replace(/_/g, ' '));
}
function getOperationParamId(operationIndex, paramIndex) {
  return `operations.${operationIndex}.param.${paramIndex}`;
}
function getRangeVectorParamDef() {
  let withRateInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  const param = {
    name: 'Range',
    type: 'string',
    options: [{
      label: '$__interval',
      value: '$__interval' // tooltip: 'Dynamic interval based on max data points, scrape and min interval',

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
      label: '1h',
      value: '1h'
    }, {
      label: '24h',
      value: '24h'
    }]
  };

  if (withRateInterval) {
    param.options.unshift({
      label: '$__rate_interval',
      value: '$__rate_interval' // tooltip: 'Always above 4x scrape interval',

    });
  }

  return param;
}
/**
 * This function is shared between Prometheus and Loki variants
 */

function createAggregationOperation(name) {
  let overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const operations = [Object.assign({
    id: name,
    name: getPromAndLokiOperationDisplayName(name),
    params: [{
      name: 'By label',
      type: 'string',
      restParam: true,
      optional: true
    }],
    defaultParams: [],
    alternativesKey: 'plain aggregations',
    category: _types__WEBPACK_IMPORTED_MODULE_3__/* .PromVisualQueryOperationCategory.Aggregations */ .C.Aggregations,
    renderer: functionRendererLeft,
    paramChangedHandler: getOnLabelAddedHandler(`__${name}_by`),
    explainHandler: getAggregationExplainer(name, ''),
    addOperationHandler: defaultAddOperationHandler
  }, overrides), Object.assign({
    id: `__${name}_by`,
    name: `${getPromAndLokiOperationDisplayName(name)} by`,
    params: [{
      name: 'Label',
      type: 'string',
      restParam: true,
      optional: true,
      editor: _components_LabelParamEditor__WEBPACK_IMPORTED_MODULE_2__/* .LabelParamEditor */ .g
    }],
    defaultParams: [''],
    alternativesKey: 'aggregations by',
    category: _types__WEBPACK_IMPORTED_MODULE_3__/* .PromVisualQueryOperationCategory.Aggregations */ .C.Aggregations,
    renderer: getAggregationByRenderer(name),
    paramChangedHandler: getLastLabelRemovedHandler(name),
    explainHandler: getAggregationExplainer(name, 'by'),
    addOperationHandler: defaultAddOperationHandler,
    hideFromList: true
  }, overrides), Object.assign({
    id: `__${name}_without`,
    name: `${getPromAndLokiOperationDisplayName(name)} without`,
    params: [{
      name: 'Label',
      type: 'string',
      restParam: true,
      optional: true,
      editor: _components_LabelParamEditor__WEBPACK_IMPORTED_MODULE_2__/* .LabelParamEditor */ .g
    }],
    defaultParams: [''],
    alternativesKey: 'aggregations by',
    category: _types__WEBPACK_IMPORTED_MODULE_3__/* .PromVisualQueryOperationCategory.Aggregations */ .C.Aggregations,
    renderer: getAggregationWithoutRenderer(name),
    paramChangedHandler: getLastLabelRemovedHandler(name),
    explainHandler: getAggregationExplainer(name, 'without'),
    addOperationHandler: defaultAddOperationHandler,
    hideFromList: true
  }, overrides)];
  return operations;
}
function createAggregationOperationWithParam(name, paramsDef) {
  let overrides = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const operations = createAggregationOperation(name, overrides);
  operations[0].params.unshift(...paramsDef.params);
  operations[1].params.unshift(...paramsDef.params);
  operations[2].params.unshift(...paramsDef.params);
  operations[0].defaultParams = paramsDef.defaultParams;
  operations[1].defaultParams = [...paramsDef.defaultParams, ''];
  operations[2].defaultParams = [...paramsDef.defaultParams, ''];
  operations[1].renderer = getAggregationByRendererWithParameter(name);
  operations[2].renderer = getAggregationByRendererWithParameter(name);
  return operations;
}

function getAggregationByRenderer(aggregation) {
  return function aggregationRenderer(model, def, innerExpr) {
    return `${aggregation} by(${model.params.join(', ')}) (${innerExpr})`;
  };
}

function getAggregationWithoutRenderer(aggregation) {
  return function aggregationRenderer(model, def, innerExpr) {
    return `${aggregation} without(${model.params.join(', ')}) (${innerExpr})`;
  };
}
/**
 * Very simple poc implementation, needs to be modified to support all aggregation operators
 */


function getAggregationExplainer(aggregationName, mode) {
  return function aggregationExplainer(model) {
    const labels = model.params.map(label => `\`${label}\``).join(' and ');
    const labelWord = pluralize__WEBPACK_IMPORTED_MODULE_1___default()('label', model.params.length);

    switch (mode) {
      case 'by':
        return `Calculates ${aggregationName} over dimensions while preserving ${labelWord} ${labels}.`;

      case 'without':
        return `Calculates ${aggregationName} over the dimensions ${labels}. All other labels are preserved.`;

      default:
        return `Calculates ${aggregationName} over the dimensions.`;
    }
  };
}

function getAggregationByRendererWithParameter(aggregation) {
  return function aggregationRenderer(model, def, innerExpr) {
    function mapType(p) {
      if (typeof p === 'string') {
        return `\"${p}\"`;
      }

      return p;
    }

    const params = model.params.slice(0, -1);
    const restParams = model.params.slice(1);
    return `${aggregation} by(${restParams.join(', ')}) (${params.map(mapType).join(', ')}, ${innerExpr})`;
  };
}
/**
 * This function will transform operations without labels to their plan aggregation operation
 */


function getLastLabelRemovedHandler(changeToOperationId) {
  return function onParamChanged(index, op, def) {
    // If definition has more params then is defined there are no optional rest params anymore.
    // We then transform this operation into a different one
    if (op.params.length < def.params.length) {
      return Object.assign({}, op, {
        id: changeToOperationId
      });
    }

    return op;
  };
}

function getOnLabelAddedHandler(changeToOperationId) {
  return function onParamChanged(index, op, def) {
    // Check if we actually have the label param. As it's optional the aggregation can have one less, which is the
    // case of just simple aggregation without label. When user adds the label it now has the same number of params
    // as it's definition, and now we can change it to it's `_by` variant.
    if (op.params.length === def.params.length) {
      return Object.assign({}, op, {
        id: changeToOperationId
      });
    }

    return op;
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/parsingUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Es": () => (/* binding */ makeBinOp),
/* harmony export */   "GQ": () => (/* binding */ ErrorName),
/* harmony export */   "KF": () => (/* binding */ getString),
/* harmony export */   "bU": () => (/* binding */ replaceVariables),
/* harmony export */   "ff": () => (/* binding */ getAllByType),
/* harmony export */   "ge": () => (/* binding */ getLeftMostChild),
/* harmony export */   "wf": () => (/* binding */ makeError)
/* harmony export */ });
/* unused harmony export log */
// This is used for error type for some reason
const ErrorName = '⚠';
function getLeftMostChild(cur) {
  return cur.firstChild ? getLeftMostChild(cur.firstChild) : cur;
}
function makeError(expr, node) {
  var _node$parent;

  return {
    text: getString(expr, node),
    // TODO: this are positions in the string with the replaced variables. Means it cannot be used to show exact
    //  placement of the error for the user. We need some translation table to positions before the variable
    //  replace.
    from: node.from,
    to: node.to,
    parentType: (_node$parent = node.parent) === null || _node$parent === void 0 ? void 0 : _node$parent.name
  };
} // Taken from template_srv, but copied so to not mess with the regex.index which is manipulated in the service

/*
 * This regex matches 3 types of variable reference with an optional format specifier
 * \$(\w+)                          $var1
 * \[\[([\s\S]+?)(?::(\w+))?\]\]    [[var2]] or [[var2:fmt2]]
 * \${(\w+)(?::(\w+))?}             ${var3} or ${var3:fmt3}
 */

const variableRegex = /\$(\w+)|\[\[([\s\S]+?)(?::(\w+))?\]\]|\${(\w+)(?:\.([^:^\}]+))?(?::([^\}]+))?}/g;
/**
 * As variables with $ are creating parsing errors, we first replace them with magic string that is parsable and at
 * the same time we can get the variable and it's format back from it.
 * @param expr
 */

function replaceVariables(expr) {
  return expr.replace(variableRegex, (match, var1, var2, fmt2, var3, fieldPath, fmt3) => {
    const fmt = fmt2 || fmt3;
    let variable = var1;
    let varType = '0';

    if (var2) {
      variable = var2;
      varType = '1';
    }

    if (var3) {
      variable = var3;
      varType = '2';
    }

    return `__V_${varType}__` + variable + '__V__' + (fmt ? '__F__' + fmt + '__F__' : '');
  });
}
const varTypeFunc = [(v, f) => `\$${v}`, (v, f) => `[[${v}${f ? `:${f}` : ''}]]`, (v, f) => `\$\{${v}${f ? `:${f}` : ''}\}`];
/**
 * Get back the text with variables in their original format.
 * @param expr
 */

function returnVariables(expr) {
  return expr.replace(/__V_(\d)__(.+?)__V__(?:__F__(\w+)__F__)?/g, (match, type, v, f) => {
    return varTypeFunc[parseInt(type, 10)](v, f);
  });
}
/**
 * Get the actual string of the expression. That is not stored in the tree so we have to get the indexes from the node
 * and then based on that get it from the expression.
 * @param expr
 * @param node
 */


function getString(expr, node) {
  if (!node) {
    return '';
  }

  return returnVariables(expr.substring(node.from, node.to));
}
/**
 * Create simple scalar binary op object.
 * @param opDef - definition of the op to be created
 * @param expr
 * @param numberNode - the node for the scalar
 * @param hasBool - whether operation has a bool modifier. Is used only for ops for which it makes sense.
 */

function makeBinOp(opDef, expr, numberNode, hasBool) {
  const params = [parseFloat(getString(expr, numberNode))];

  if (opDef.comparison) {
    params.push(hasBool);
  }

  return {
    id: opDef.id,
    params
  };
}
/**
 * Get all nodes with type in the tree. This traverses the tree so it is safe only when you know there shouldn't be
 * too much nesting but you just want to skip some of the wrappers. For example getting function args this way would
 * not be safe is it would also find arguments of nested functions.
 * @param expr
 * @param cur
 * @param type
 */

function getAllByType(expr, cur, type) {
  if (cur.name === type) {
    return [getString(expr, cur)];
  }

  const values = [];
  let pos = 0;
  let child = cur.childAfter(pos);

  while (child) {
    values.push(...getAllByType(expr, child, type));
    pos = child.to;
    child = cur.childAfter(pos);
  }

  return values;
} // Debugging function for convenience. Gives you nice output similar to linux tree util.
// @ts-ignore

function log(expr, cur) {
  if (!cur) {
    console.log('<empty>');
    return;
  }

  const json = toJson(expr, cur);
  const text = jsonToText(json);

  if (!text) {
    console.log('<empty>');
    return;
  }

  console.log(text);
}

function toJson(expr, cur) {
  const treeJson = {};
  const name = nodeToString(expr, cur);
  const children = [];
  let pos = 0;
  let child = cur.childAfter(pos);

  while (child) {
    children.push(toJson(expr, child));
    pos = child.to;
    child = cur.childAfter(pos);
  }

  treeJson.name = name;
  treeJson.children = children;
  return treeJson;
}

function jsonToText(node) {
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    lastChild: true,
    indent: ''
  };
  const name = node.name;
  const {
    lastChild,
    indent
  } = context;
  const newIndent = indent !== '' ? indent + (lastChild ? '└─' : '├─') : '';
  let text = newIndent + name;
  const children = node.children;
  children.forEach((child, index) => {
    const isLastChild = index === children.length - 1;
    text += '\n' + jsonToText(child, {
      lastChild: isLastChild,
      indent: indent + (lastChild ? '  ' : '│ ')
    });
  });
  return text;
}

function nodeToString(expr, node) {
  return node.name + ': ' + getString(expr, node);
}

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/shared/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ QueryEditorMode)
/* harmony export */ });
/**
 * Shared types that can be reused by Loki and other data sources
 */
let QueryEditorMode;

(function (QueryEditorMode) {
  QueryEditorMode["Code"] = "code";
  QueryEditorMode["Builder"] = "builder";
  QueryEditorMode["Explain"] = "explain";
})(QueryEditorMode || (QueryEditorMode = {}));

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/querybuilder/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ PromVisualQueryOperationCategory),
/* harmony export */   "G": () => (/* binding */ PromOperationId)
/* harmony export */ });
/**
 * Visual query model
 */
let PromVisualQueryOperationCategory;

(function (PromVisualQueryOperationCategory) {
  PromVisualQueryOperationCategory["Aggregations"] = "Aggregations";
  PromVisualQueryOperationCategory["RangeFunctions"] = "Range functions";
  PromVisualQueryOperationCategory["Functions"] = "Functions";
  PromVisualQueryOperationCategory["BinaryOps"] = "Binary operations";
  PromVisualQueryOperationCategory["Trigonometric"] = "Trigonometric";
  PromVisualQueryOperationCategory["Time"] = "Time Functions";
})(PromVisualQueryOperationCategory || (PromVisualQueryOperationCategory = {}));

let PromOperationId;

(function (PromOperationId) {
  PromOperationId["Abs"] = "abs";
  PromOperationId["Absent"] = "absent";
  PromOperationId["AbsentOverTime"] = "absent_over_time";
  PromOperationId["Acos"] = "acos";
  PromOperationId["Acosh"] = "acosh";
  PromOperationId["Asin"] = "asin";
  PromOperationId["Asinh"] = "asinh";
  PromOperationId["Atan"] = "atan";
  PromOperationId["Atanh"] = "atanh";
  PromOperationId["Avg"] = "avg";
  PromOperationId["AvgOverTime"] = "avg_over_time";
  PromOperationId["BottomK"] = "bottomk";
  PromOperationId["Ceil"] = "ceil";
  PromOperationId["Changes"] = "changes";
  PromOperationId["Clamp"] = "clamp";
  PromOperationId["ClampMax"] = "clamp_max";
  PromOperationId["ClampMin"] = "clamp_min";
  PromOperationId["Cos"] = "cos";
  PromOperationId["Cosh"] = "cosh";
  PromOperationId["Count"] = "count";
  PromOperationId["CountOverTime"] = "count_over_time";
  PromOperationId["CountScalar"] = "count_scalar";
  PromOperationId["CountValues"] = "count_values";
  PromOperationId["DayOfMonth"] = "day_of_month";
  PromOperationId["DayOfWeek"] = "day_of_week";
  PromOperationId["DaysInMonth"] = "days_in_month";
  PromOperationId["Deg"] = "deg";
  PromOperationId["Delta"] = "delta";
  PromOperationId["Deriv"] = "deriv";
  PromOperationId["DropCommonLabels"] = "drop_common_labels";
  PromOperationId["Exp"] = "exp";
  PromOperationId["Floor"] = "floor";
  PromOperationId["Group"] = "group";
  PromOperationId["HistogramQuantile"] = "histogram_quantile";
  PromOperationId["HoltWinters"] = "holt_winters";
  PromOperationId["Hour"] = "hour";
  PromOperationId["Idelta"] = "idelta";
  PromOperationId["Increase"] = "increase";
  PromOperationId["Irate"] = "irate";
  PromOperationId["LabelJoin"] = "label_join";
  PromOperationId["LabelReplace"] = "label_replace";
  PromOperationId["Last"] = "last";
  PromOperationId["LastOverTime"] = "last_over_time";
  PromOperationId["Ln"] = "ln";
  PromOperationId["Log10"] = "log10";
  PromOperationId["Log2"] = "log2";
  PromOperationId["Max"] = "max";
  PromOperationId["MaxOverTime"] = "max_over_time";
  PromOperationId["Min"] = "min";
  PromOperationId["MinOverTime"] = "min_over_time";
  PromOperationId["Minute"] = "minute";
  PromOperationId["Month"] = "month";
  PromOperationId["Pi"] = "pi";
  PromOperationId["PredictLinear"] = "predict_linear";
  PromOperationId["Present"] = "present";
  PromOperationId["PresentOverTime"] = "present_over_time";
  PromOperationId["Quantile"] = "quantile";
  PromOperationId["QuantileOverTime"] = "quantile_over_time";
  PromOperationId["Rad"] = "rad";
  PromOperationId["Rate"] = "rate";
  PromOperationId["Resets"] = "resets";
  PromOperationId["Round"] = "round";
  PromOperationId["Scalar"] = "scalar";
  PromOperationId["Sgn"] = "sgn";
  PromOperationId["Sin"] = "sin";
  PromOperationId["Sinh"] = "sinh";
  PromOperationId["Sort"] = "sort";
  PromOperationId["SortDesc"] = "sort_desc";
  PromOperationId["Sqrt"] = "sqrt";
  PromOperationId["Stddev"] = "stddev";
  PromOperationId["StddevOverTime"] = "stddev_over_time";
  PromOperationId["Sum"] = "sum";
  PromOperationId["SumOverTime"] = "sum_over_time";
  PromOperationId["Tan"] = "tan";
  PromOperationId["Tanh"] = "tanh";
  PromOperationId["Time"] = "time";
  PromOperationId["Timestamp"] = "timestamp";
  PromOperationId["TopK"] = "topk";
  PromOperationId["Vector"] = "vector";
  PromOperationId["Year"] = "year";
  PromOperationId["Addition"] = "__addition";
  PromOperationId["Subtraction"] = "__subtraction";
  PromOperationId["MultiplyBy"] = "__multiply_by";
  PromOperationId["DivideBy"] = "__divide_by";
  PromOperationId["Modulo"] = "__modulo";
  PromOperationId["Exponent"] = "__exponent";
  PromOperationId["NestedQuery"] = "__nested_query";
  PromOperationId["EqualTo"] = "__equal_to";
  PromOperationId["NotEqualTo"] = "__not_equal_to";
  PromOperationId["GreaterThan"] = "__greater_than";
  PromOperationId["LessThan"] = "__less_than";
  PromOperationId["GreaterOrEqual"] = "__greater_or_equal";
  PromOperationId["LessOrEqual"] = "__less_or_equal";
})(PromOperationId || (PromOperationId = {}));

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V5": () => (/* binding */ PromQueryType),
/* harmony export */   "WS": () => (/* binding */ isExemplarData),
/* harmony export */   "el": () => (/* binding */ isMatrixData),
/* harmony export */   "pD": () => (/* binding */ LegendFormatMode)
/* harmony export */ });
let PromQueryType;

(function (PromQueryType) {
  PromQueryType["timeSeriesQuery"] = "timeSeriesQuery";
})(PromQueryType || (PromQueryType = {}));

function isMatrixData(result) {
  return 'values' in result;
}
function isExemplarData(result) {
  if (result == null || !Array.isArray(result)) {
    return false;
  }

  return result.length ? 'exemplars' in result[0] : false;
}

/**
 * Auto = query.legendFormat == '__auto'
 * Verbose = query.legendFormat == null/undefined/''
 * Custom query.legendFormat.length > 0 && query.legendFormat !== '__auto'
 */
let LegendFormatMode;

(function (LegendFormatMode) {
  LegendFormatMode["Auto"] = "__auto";
  LegendFormatMode["Verbose"] = "__verbose";
  LegendFormatMode["Custom"] = "__custom";
})(LegendFormatMode || (LegendFormatMode = {}));

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

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useToggle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

var toggleReducer = function (state, nextValue) {
    return typeof nextValue === 'boolean' ? nextValue : !state;
};
var useToggle = function (initialValue) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(toggleReducer, initialValue);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useToggle);


/***/ }),

/***/ "./.yarn/cache/lru-cache-npm-7.9.0-d803108233-c91a293a10.zip/node_modules/lru-cache/index.js":
/***/ ((module) => {

const perf = typeof performance === 'object' && performance &&
  typeof performance.now === 'function' ? performance : Date

const hasAbortController = typeof AbortController === 'function'

// minimal backwards-compatibility polyfill
// this doesn't have nearly all the checks and whatnot that
// actual AbortController/Signal has, but it's enough for
// our purposes, and if used properly, behaves the same.
const AC = hasAbortController ? AbortController : Object.assign(
  class AbortController {
    constructor () { this.signal = new AC.AbortSignal }
    abort () {
      this.signal.dispatchEvent('abort')
    }
  },
  {
    AbortSignal: class AbortSignal {
      constructor () {
        this.aborted = false
        this._listeners = []
      }
      dispatchEvent (type) {
        if (type === 'abort') {
          this.aborted = true
          const e = { type, target: this }
          this.onabort(e)
          this._listeners.forEach(f => f(e), this)
        }
      }
      onabort () {}
      addEventListener (ev, fn) {
        if (ev === 'abort') {
          this._listeners.push(fn)
        }
      }
      removeEventListener (ev, fn) {
        if (ev === 'abort') {
          this._listeners = this._listeners.filter(f => f !== fn)
        }
      }
    }
  }
)

const warned = new Set()
const deprecatedOption = (opt, instead) => {
  const code = `LRU_CACHE_OPTION_${opt}`
  if (shouldWarn(code)) {
    warn(code, `${opt} option`, `options.${instead}`, LRUCache)
  }
}
const deprecatedMethod = (method, instead) => {
  const code = `LRU_CACHE_METHOD_${method}`
  if (shouldWarn(code)) {
    const { prototype } = LRUCache
    const { get } = Object.getOwnPropertyDescriptor(prototype, method)
    warn(code, `${method} method`, `cache.${instead}()`, get)
  }
}
const deprecatedProperty = (field, instead) => {
  const code = `LRU_CACHE_PROPERTY_${field}`
  if (shouldWarn(code)) {
    const { prototype } = LRUCache
    const { get } = Object.getOwnPropertyDescriptor(prototype, field)
    warn(code, `${field} property`, `cache.${instead}`, get)
  }
}

const emitWarning = (...a) => {
  typeof process === 'object' &&
    process &&
    typeof process.emitWarning === 'function'
  ? process.emitWarning(...a)
  : console.error(...a)
}

const shouldWarn = code => !warned.has(code)

const warn = (code, what, instead, fn) => {
  warned.add(code)
  const msg = `The ${what} is deprecated. Please use ${instead} instead.`
  emitWarning(msg, 'DeprecationWarning', code, fn)
}

const isPosInt = n => n && n === Math.floor(n) && n > 0 && isFinite(n)

/* istanbul ignore next - This is a little bit ridiculous, tbh.
 * The maximum array length is 2^32-1 or thereabouts on most JS impls.
 * And well before that point, you're caching the entire world, I mean,
 * that's ~32GB of just integers for the next/prev links, plus whatever
 * else to hold that many keys and values.  Just filling the memory with
 * zeroes at init time is brutal when you get that big.
 * But why not be complete?
 * Maybe in the future, these limits will have expanded. */
const getUintArray = max => !isPosInt(max) ? null
: max <= Math.pow(2, 8) ? Uint8Array
: max <= Math.pow(2, 16) ? Uint16Array
: max <= Math.pow(2, 32) ? Uint32Array
: max <= Number.MAX_SAFE_INTEGER ? ZeroArray
: null

class ZeroArray extends Array {
  constructor (size) {
    super(size)
    this.fill(0)
  }
}

class Stack {
  constructor (max) {
    if (max === 0) {
      return []
    }
    const UintArray = getUintArray(max)
    this.heap = new UintArray(max)
    this.length = 0
  }
  push (n) {
    this.heap[this.length++] = n
  }
  pop () {
    return this.heap[--this.length]
  }
}

class LRUCache {
  constructor (options = {}) {
    const {
      max = 0,
      ttl,
      ttlResolution = 1,
      ttlAutopurge,
      updateAgeOnGet,
      updateAgeOnHas,
      allowStale,
      dispose,
      disposeAfter,
      noDisposeOnSet,
      noUpdateTTL,
      maxSize = 0,
      sizeCalculation,
      fetchMethod,
    } = options

    // deprecated options, don't trigger a warning for getting them if
    // the thing being passed in is another LRUCache we're copying.
    const {
      length,
      maxAge,
      stale,
    } = options instanceof LRUCache ? {} : options

    if (max !== 0 && !isPosInt(max)) {
      throw new TypeError('max option must be a nonnegative integer')
    }

    const UintArray = max ? getUintArray(max) : Array
    if (!UintArray) {
      throw new Error('invalid max value: ' + max)
    }

    this.max = max
    this.maxSize = maxSize
    this.sizeCalculation = sizeCalculation || length
    if (this.sizeCalculation) {
      if (!this.maxSize) {
        throw new TypeError('cannot set sizeCalculation without setting maxSize')
      }
      if (typeof this.sizeCalculation !== 'function') {
        throw new TypeError('sizeCalculation set to non-function')
      }
    }

    this.fetchMethod = fetchMethod || null
    if (this.fetchMethod && typeof this.fetchMethod !== 'function') {
      throw new TypeError('fetchMethod must be a function if specified')
    }

    this.keyMap = new Map()
    this.keyList = new Array(max).fill(null)
    this.valList = new Array(max).fill(null)
    this.next = new UintArray(max)
    this.prev = new UintArray(max)
    this.head = 0
    this.tail = 0
    this.free = new Stack(max)
    this.initialFill = 1
    this.size = 0

    if (typeof dispose === 'function') {
      this.dispose = dispose
    }
    if (typeof disposeAfter === 'function') {
      this.disposeAfter = disposeAfter
      this.disposed = []
    } else {
      this.disposeAfter = null
      this.disposed = null
    }
    this.noDisposeOnSet = !!noDisposeOnSet
    this.noUpdateTTL = !!noUpdateTTL

    if (this.maxSize !== 0) {
      if (!isPosInt(this.maxSize)) {
        throw new TypeError('maxSize must be a positive integer if specified')
      }
      this.initializeSizeTracking()
    }

    this.allowStale = !!allowStale || !!stale
    this.updateAgeOnGet = !!updateAgeOnGet
    this.updateAgeOnHas = !!updateAgeOnHas
    this.ttlResolution = isPosInt(ttlResolution) || ttlResolution === 0
      ? ttlResolution : 1
    this.ttlAutopurge = !!ttlAutopurge
    this.ttl = ttl || maxAge || 0
    if (this.ttl) {
      if (!isPosInt(this.ttl)) {
        throw new TypeError('ttl must be a positive integer if specified')
      }
      this.initializeTTLTracking()
    }

    // do not allow completely unbounded caches
    if (this.max === 0 && this.ttl === 0 && this.maxSize === 0) {
      throw new TypeError('At least one of max, maxSize, or ttl is required')
    }
    if (!this.ttlAutopurge && !this.max && !this.maxSize) {
      const code = 'LRU_CACHE_UNBOUNDED'
      if (shouldWarn(code)) {
        warned.add(code)
        const msg = 'TTL caching without ttlAutopurge, max, or maxSize can ' +
          'result in unbounded memory consumption.'
        emitWarning(msg, 'UnboundedCacheWarning', code, LRUCache)
      }
    }

    if (stale) {
      deprecatedOption('stale', 'allowStale')
    }
    if (maxAge) {
      deprecatedOption('maxAge', 'ttl')
    }
    if (length) {
      deprecatedOption('length', 'sizeCalculation')
    }
  }

  getRemainingTTL (key) {
    return this.has(key, { updateAgeOnHas: false }) ? Infinity : 0
  }

  initializeTTLTracking () {
    this.ttls = new ZeroArray(this.max)
    this.starts = new ZeroArray(this.max)

    this.setItemTTL = (index, ttl) => {
      this.starts[index] = ttl !== 0 ? perf.now() : 0
      this.ttls[index] = ttl
      if (ttl !== 0 && this.ttlAutopurge) {
        const t = setTimeout(() => {
          if (this.isStale(index)) {
            this.delete(this.keyList[index])
          }
        }, ttl + 1)
        /* istanbul ignore else - unref() not supported on all platforms */
        if (t.unref) {
          t.unref()
        }
      }
    }

    this.updateItemAge = (index) => {
      this.starts[index] = this.ttls[index] !== 0 ? perf.now() : 0
    }

    // debounce calls to perf.now() to 1s so we're not hitting
    // that costly call repeatedly.
    let cachedNow = 0
    const getNow = () => {
      const n = perf.now()
      if (this.ttlResolution > 0) {
        cachedNow = n
        const t = setTimeout(() => cachedNow = 0, this.ttlResolution)
        /* istanbul ignore else - not available on all platforms */
        if (t.unref) {
          t.unref()
        }
      }
      return n
    }

    this.getRemainingTTL = (key) => {
      const index = this.keyMap.get(key)
      if (index === undefined) {
        return 0
      }
      return this.ttls[index] === 0 || this.starts[index] === 0 ? Infinity
        : ((this.starts[index] + this.ttls[index]) - (cachedNow || getNow()))
    }

    this.isStale = (index) => {
      return this.ttls[index] !== 0 && this.starts[index] !== 0 &&
        ((cachedNow || getNow()) - this.starts[index] > this.ttls[index])
    }
  }
  updateItemAge (index) {}
  setItemTTL (index, ttl) {}
  isStale (index) { return false }

  initializeSizeTracking () {
    this.calculatedSize = 0
    this.sizes = new ZeroArray(this.max)
    this.removeItemSize = index => this.calculatedSize -= this.sizes[index]
    this.requireSize = (k, v, size, sizeCalculation) => {
      if (!isPosInt(size)) {
        if (sizeCalculation) {
          if (typeof sizeCalculation !== 'function') {
            throw new TypeError('sizeCalculation must be a function')
          }
          size = sizeCalculation(v, k)
          if (!isPosInt(size)) {
            throw new TypeError('sizeCalculation return invalid (expect positive integer)')
          }
        } else {
          throw new TypeError('invalid size value (must be positive integer)')
        }
      }
      return size
    }
    this.addItemSize = (index, v, k, size) => {
      this.sizes[index] = size
      const maxSize = this.maxSize - this.sizes[index]
      while (this.calculatedSize > maxSize) {
        this.evict(true)
      }
      this.calculatedSize += this.sizes[index]
    }
  }
  removeItemSize (index) {}
  addItemSize (index, v, k, size) {}
  requireSize (k, v, size, sizeCalculation) {
    if (size || sizeCalculation) {
      throw new TypeError('cannot set size without setting maxSize on cache')
    }
  }

  *indexes ({ allowStale = this.allowStale } = {}) {
    if (this.size) {
      for (let i = this.tail; true; ) {
        if (!this.isValidIndex(i)) {
          break
        }
        if (allowStale || !this.isStale(i)) {
          yield i
        }
        if (i === this.head) {
          break
        } else {
          i = this.prev[i]
        }
      }
    }
  }

  *rindexes ({ allowStale = this.allowStale } = {}) {
    if (this.size) {
      for (let i = this.head; true; ) {
        if (!this.isValidIndex(i)) {
          break
        }
        if (allowStale || !this.isStale(i)) {
          yield i
        }
        if (i === this.tail) {
          break
        } else {
          i = this.next[i]
        }
      }
    }
  }

  isValidIndex (index) {
    return this.keyMap.get(this.keyList[index]) === index
  }

  *entries () {
    for (const i of this.indexes()) {
      yield [this.keyList[i], this.valList[i]]
    }
  }
  *rentries () {
    for (const i of this.rindexes()) {
      yield [this.keyList[i], this.valList[i]]
    }
  }

  *keys () {
    for (const i of this.indexes()) {
      yield this.keyList[i]
    }
  }
  *rkeys () {
    for (const i of this.rindexes()) {
      yield this.keyList[i]
    }
  }

  *values () {
    for (const i of this.indexes()) {
      yield this.valList[i]
    }
  }
  *rvalues () {
    for (const i of this.rindexes()) {
      yield this.valList[i]
    }
  }

  [Symbol.iterator] () {
    return this.entries()
  }

  find (fn, getOptions = {}) {
    for (const i of this.indexes()) {
      if (fn(this.valList[i], this.keyList[i], this)) {
        return this.get(this.keyList[i], getOptions)
      }
    }
  }

  forEach (fn, thisp = this) {
    for (const i of this.indexes()) {
      fn.call(thisp, this.valList[i], this.keyList[i], this)
    }
  }

  rforEach (fn, thisp = this) {
    for (const i of this.rindexes()) {
      fn.call(thisp, this.valList[i], this.keyList[i], this)
    }
  }

  get prune () {
    deprecatedMethod('prune', 'purgeStale')
    return this.purgeStale
  }

  purgeStale () {
    let deleted = false
    for (const i of this.rindexes({ allowStale: true })) {
      if (this.isStale(i)) {
        this.delete(this.keyList[i])
        deleted = true
      }
    }
    return deleted
  }

  dump () {
    const arr = []
    for (const i of this.indexes()) {
      const key = this.keyList[i]
      const value = this.valList[i]
      const entry = { value }
      if (this.ttls) {
        entry.ttl = this.ttls[i]
      }
      if (this.sizes) {
        entry.size = this.sizes[i]
      }
      arr.unshift([key, entry])
    }
    return arr
  }

  load (arr) {
    this.clear()
    for (const [key, entry] of arr) {
      this.set(key, entry.value, entry)
    }
  }

  dispose (v, k, reason) {}

  set (k, v, {
    ttl = this.ttl,
    noDisposeOnSet = this.noDisposeOnSet,
    size = 0,
    sizeCalculation = this.sizeCalculation,
    noUpdateTTL = this.noUpdateTTL,
  } = {}) {
    size = this.requireSize(k, v, size, sizeCalculation)
    let index = this.size === 0 ? undefined : this.keyMap.get(k)
    if (index === undefined) {
      // addition
      index = this.newIndex()
      this.keyList[index] = k
      this.valList[index] = v
      this.keyMap.set(k, index)
      this.next[this.tail] = index
      this.prev[index] = this.tail
      this.tail = index
      this.size ++
      this.addItemSize(index, v, k, size)
      noUpdateTTL = false
    } else {
      // update
      const oldVal = this.valList[index]
      if (v !== oldVal) {
        if (this.isBackgroundFetch(oldVal)) {
          oldVal.__abortController.abort()
        } else {
          if (!noDisposeOnSet) {
            this.dispose(oldVal, k, 'set')
            if (this.disposeAfter) {
              this.disposed.push([oldVal, k, 'set'])
            }
          }
        }
        this.removeItemSize(index)
        this.valList[index] = v
        this.addItemSize(index, v, k, size)
      }
      this.moveToTail(index)
    }
    if (ttl !== 0 && this.ttl === 0 && !this.ttls) {
      this.initializeTTLTracking()
    }
    if (!noUpdateTTL) {
      this.setItemTTL(index, ttl)
    }
    if (this.disposeAfter) {
      while (this.disposed.length) {
        this.disposeAfter(...this.disposed.shift())
      }
    }
    return this
  }

  newIndex () {
    if (this.size === 0) {
      return this.tail
    }
    if (this.size === this.max && this.max !== 0) {
      return this.evict(false)
    }
    if (this.free.length !== 0) {
      return this.free.pop()
    }
    // initial fill, just keep writing down the list
    return this.initialFill++
  }

  pop () {
    if (this.size) {
      const val = this.valList[this.head]
      this.evict(true)
      return val
    }
  }

  evict (free) {
    const head = this.head
    const k = this.keyList[head]
    const v = this.valList[head]
    if (this.isBackgroundFetch(v)) {
      v.__abortController.abort()
    } else {
      this.dispose(v, k, 'evict')
      if (this.disposeAfter) {
        this.disposed.push([v, k, 'evict'])
      }
    }
    this.removeItemSize(head)
    // if we aren't about to use the index, then null these out
    if (free) {
      this.keyList[head] = null
      this.valList[head] = null
      this.free.push(head)
    }
    this.head = this.next[head]
    this.keyMap.delete(k)
    this.size --
    return head
  }

  has (k, { updateAgeOnHas = this.updateAgeOnHas } = {}) {
    const index = this.keyMap.get(k)
    if (index !== undefined) {
      if (!this.isStale(index)) {
        if (updateAgeOnHas) {
          this.updateItemAge(index)
        }
        return true
      }
    }
    return false
  }

  // like get(), but without any LRU updating or TTL expiration
  peek (k, { allowStale = this.allowStale } = {}) {
    const index = this.keyMap.get(k)
    if (index !== undefined && (allowStale || !this.isStale(index))) {
      return this.valList[index]
    }
  }

  backgroundFetch (k, index, options) {
    const v = index === undefined ? undefined : this.valList[index]
    if (this.isBackgroundFetch(v)) {
      return v
    }
    const ac = new AC()
    const fetchOpts = {
      signal: ac.signal,
      options,
    }
    const p = Promise.resolve(this.fetchMethod(k, v, fetchOpts)).then(v => {
      if (!ac.signal.aborted) {
        this.set(k, v, fetchOpts.options)
      }
      return v
    })
    p.__abortController = ac
    p.__staleWhileFetching = v
    if (index === undefined) {
      this.set(k, p, fetchOpts.options)
      index = this.keyMap.get(k)
    } else {
      this.valList[index] = p
    }
    return p
  }

  isBackgroundFetch (p) {
    return p && typeof p === 'object' && typeof p.then === 'function' &&
      Object.prototype.hasOwnProperty.call(p, '__staleWhileFetching')
  }

  // this takes the union of get() and set() opts, because it does both
  async fetch (k, {
    allowStale = this.allowStale,
    updateAgeOnGet = this.updateAgeOnGet,
    ttl = this.ttl,
    noDisposeOnSet = this.noDisposeOnSet,
    size = 0,
    sizeCalculation = this.sizeCalculation,
    noUpdateTTL = this.noUpdateTTL,
  } = {}) {
    if (!this.fetchMethod) {
      return this.get(k, {allowStale, updateAgeOnGet})
    }

    const options = {
      allowStale,
      updateAgeOnGet,
      ttl,
      noDisposeOnSet,
      size,
      sizeCalculation,
      noUpdateTTL,
    }

    let index = this.keyMap.get(k)
    if (index === undefined) {
      return this.backgroundFetch(k, index, options)
    } else {
      // in cache, maybe already fetching
      const v = this.valList[index]
      if (this.isBackgroundFetch(v)) {
        return allowStale && v.__staleWhileFetching !== undefined
          ? v.__staleWhileFetching : v
      }

      if (!this.isStale(index)) {
        this.moveToTail(index)
        if (updateAgeOnGet) {
          this.updateItemAge(index)
        }
        return v
      }

      // ok, it is stale, and not already fetching
      // refresh the cache.
      const p = this.backgroundFetch(k, index, options)
      return allowStale && p.__staleWhileFetching !== undefined
        ? p.__staleWhileFetching : p
    }
  }

  get (k, {
    allowStale = this.allowStale,
    updateAgeOnGet = this.updateAgeOnGet,
  } = {}) {
    const index = this.keyMap.get(k)
    if (index !== undefined) {
      const value = this.valList[index]
      const fetching = this.isBackgroundFetch(value)
      if (this.isStale(index)) {
        // delete only if not an in-flight background fetch
        if (!fetching) {
          this.delete(k)
          return allowStale ? value : undefined
        } else {
          return allowStale ? value.__staleWhileFetching : undefined
        }
      } else {
        // if we're currently fetching it, we don't actually have it yet
        // it's not stale, which means this isn't a staleWhileRefetching,
        // so we just return undefined
        if (fetching) {
          return undefined
        }
        this.moveToTail(index)
        if (updateAgeOnGet) {
          this.updateItemAge(index)
        }
        return value
      }
    }
  }

  connect (p, n) {
    this.prev[n] = p
    this.next[p] = n
  }

  moveToTail (index) {
    // if tail already, nothing to do
    // if head, move head to next[index]
    // else
    //   move next[prev[index]] to next[index] (head has no prev)
    //   move prev[next[index]] to prev[index]
    // prev[index] = tail
    // next[tail] = index
    // tail = index
    if (index !== this.tail) {
      if (index === this.head) {
        this.head = this.next[index]
      } else {
        this.connect(this.prev[index], this.next[index])
      }
      this.connect(this.tail, index)
      this.tail = index
    }
  }

  get del () {
    deprecatedMethod('del', 'delete')
    return this.delete
  }

  delete (k) {
    let deleted = false
    if (this.size !== 0) {
      const index = this.keyMap.get(k)
      if (index !== undefined) {
        deleted = true
        if (this.size === 1) {
          this.clear()
        } else {
          this.removeItemSize(index)
          const v = this.valList[index]
          if (this.isBackgroundFetch(v)) {
            v.__abortController.abort()
          } else {
            this.dispose(v, k, 'delete')
            if (this.disposeAfter) {
              this.disposed.push([v, k, 'delete'])
            }
          }
          this.keyMap.delete(k)
          this.keyList[index] = null
          this.valList[index] = null
          if (index === this.tail) {
            this.tail = this.prev[index]
          } else if (index === this.head) {
            this.head = this.next[index]
          } else {
            this.next[this.prev[index]] = this.next[index]
            this.prev[this.next[index]] = this.prev[index]
          }
          this.size --
          this.free.push(index)
        }
      }
    }
    if (this.disposed) {
      while (this.disposed.length) {
        this.disposeAfter(...this.disposed.shift())
      }
    }
    return deleted
  }

  clear () {
    for (const index of this.rindexes({ allowStale: true })) {
      const v = this.valList[index]
      if (this.isBackgroundFetch(v)) {
        v.__abortController.abort()
      } else {
        const k = this.keyList[index]
        this.dispose(v, k, 'delete')
        if (this.disposeAfter) {
          this.disposed.push([v, k, 'delete'])
        }
      }
    }

    this.keyMap.clear()
    this.valList.fill(null)
    this.keyList.fill(null)
    if (this.ttls) {
      this.ttls.fill(0)
      this.starts.fill(0)
    }
    if (this.sizes) {
      this.sizes.fill(0)
    }
    this.head = 0
    this.tail = 0
    this.initialFill = 1
    this.free.length = 0
    this.calculatedSize = 0
    this.size = 0
    if (this.disposed) {
      while (this.disposed.length) {
        this.disposeAfter(...this.disposed.shift())
      }
    }
  }

  get reset () {
    deprecatedMethod('reset', 'clear')
    return this.clear
  }

  get length () {
    deprecatedProperty('length', 'size')
    return this.size
  }

  static get AbortController () {
    return AC
  }
}

module.exports = LRUCache


/***/ }),

/***/ "./.yarn/__virtual__/lezer-promql-virtual-eaf88aa77a/0/cache/lezer-promql-npm-0.22.0-867da6afaa-cdce054700.zip/node_modules/lezer-promql/index.es.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E2": () => (/* binding */ parser)
/* harmony export */ });
/* unused harmony exports Abs, Absent, AbsentOverTime, Acos, Acosh, Add, AggregateExpr, AggregateModifier, AggregateOp, And, Asin, Asinh, At, AtModifierPreprocessors, Atan, Atan2, Atanh, Avg, AvgOverTime, BinModifiers, BinaryExpr, Bool, Bottomk, By, Ceil, Changes, Clamp, ClampMax, ClampMin, Cos, Cosh, Count, CountOverTime, CountValues, DayOfMonth, DayOfWeek, DaysInMonth, Deg, Delta, Deriv, Div, Duration, End, Eql, EqlRegex, EqlSingle, Exp, Expr, Floor, FunctionCall, FunctionCallArgs, FunctionCallBody, FunctionIdentifier, Group, GroupLeft, GroupRight, GroupingLabel, GroupingLabelList, GroupingLabels, Gte, Gtr, HistogramQuantile, HoltWinters, Hour, Idelta, Identifier, Ignoring, Increase, Irate, LabelJoin, LabelMatchList, LabelMatcher, LabelMatchers, LabelName, LabelReplace, LastOverTime, LineComment, Ln, Log10, Log2, Lss, Lte, MatchOp, MatrixSelector, Max, MaxOverTime, MetricIdentifier, MetricName, Min, MinOverTime, Minute, Mod, Month, Mul, Neq, NeqRegex, NumberLiteral, Offset, OffsetExpr, On, OnOrIgnoring, Or, ParenExpr, Pi, Pow, PredictLinear, PresentOverTime, PromQL, Quantile, QuantileOverTime, Rad, Rate, Resets, Round, Scalar, Sgn, Sin, Sinh, Sort, SortDesc, Sqrt, Start, Stddev, StddevOverTime, Stdvar, StdvarOverTime, StepInvariantExpr, StringLiteral, Sub, SubqueryExpr, Sum, SumOverTime, Tan, Tanh, Time, Timestamp, Topk, UnaryExpr, UnaryOp, Unless, Vector, VectorSelector, Without, Year, inf, nan */
/* harmony import */ var _lezer_lr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@lezer-lr-npm-0.15.8-8c481c39cd-e741225d6a.zip/node_modules/@lezer/lr/dist/index.js");


// This file was generated by lezer-generator. You probably shouldn't edit it.
const 
  inf = 146,
  nan = 147,
  Bool = 1,
  Ignoring = 2,
  On = 3,
  GroupLeft = 4,
  GroupRight = 5,
  Offset = 6,
  Atan2 = 7,
  Avg = 8,
  Bottomk = 9,
  Count = 10,
  CountValues = 11,
  Group = 12,
  Max = 13,
  Min = 14,
  Quantile = 15,
  Stddev = 16,
  Stdvar = 17,
  Sum = 18,
  Topk = 19,
  By = 20,
  Without = 21,
  And = 22,
  Or = 23,
  Unless = 24,
  Start = 25,
  End = 26;

// Copyright 2021 The Prometheus Authors

const keywordTokens = {
    inf: inf,
    nan: nan,
    bool: Bool,
    ignoring: Ignoring,
    on: On,
    group_left: GroupLeft,
    group_right: GroupRight,
    offset: Offset,
};

const specializeIdentifier = (value, stack) => {
    return keywordTokens[value.toLowerCase()] || -1;
};

const contextualKeywordTokens = {
    avg: Avg,
    atan2: Atan2,
    bottomk: Bottomk,
    count: Count,
    count_values: CountValues,
    group: Group,
    max: Max,
    min: Min,
    quantile: Quantile,
    stddev: Stddev,
    stdvar: Stdvar,
    sum: Sum,
    topk: Topk,
    by: By,
    without: Without,
    and: And,
    or: Or,
    unless: Unless,
    start: Start,
    end: End,
};

const extendIdentifier = (value, stack) => {
    return contextualKeywordTokens[value.toLowerCase()] || -1;
};

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_Identifier = {__proto__:null,absent_over_time:307, absent:309, abs:311, acos:313, acosh:315, asin:317, asinh:319, atan:321, atanh:323, avg_over_time:325, ceil:327, changes:329, clamp:331, clamp_max:333, clamp_min:335, cos:337, cosh:339, count_over_time:341, days_in_month:343, day_of_month:345, day_of_week:347, deg:349, delta:351, deriv:353, exp:355, floor:357, histogram_quantile:359, holt_winters:361, hour:363, idelta:365, increase:367, irate:369, label_replace:371, label_join:373, last_over_time:375, ln:377, log10:379, log2:381, max_over_time:383, min_over_time:385, minute:387, month:389, pi:391, predict_linear:393, present_over_time:395, quantile_over_time:397, rad:399, rate:401, resets:403, round:405, scalar:407, sgn:409, sin:411, sinh:413, sort:415, sort_desc:417, sqrt:419, stddev_over_time:421, stdvar_over_time:423, sum_over_time:425, tan:427, tanh:429, timestamp:431, time:433, vector:435, year:437};
const parser = _lezer_lr__WEBPACK_IMPORTED_MODULE_0__/* .LRParser.deserialize */ .WQ.deserialize({
  version: 13,
  states: "6[OYQPOOO&{QPOOOOQO'#C{'#C{O'QQPO'#CzQ']QQOOOOQO'#De'#DeO'WQPO'#DdOOQO'#E}'#E}O(jQPO'#FTOYQPO'#FPOYQPO'#FSOOQO'#FV'#FVO.fQSO'#FWO.nQQO'#FUOOQO'#FU'#FUOOQO'#Cy'#CyOOQO'#Df'#DfOOQO'#Dh'#DhOOQO'#Di'#DiOOQO'#Dj'#DjOOQO'#Dk'#DkOOQO'#Dl'#DlOOQO'#Dm'#DmOOQO'#Dn'#DnOOQO'#Do'#DoOOQO'#Dp'#DpOOQO'#Dq'#DqOOQO'#Dr'#DrOOQO'#Ds'#DsOOQO'#Dt'#DtOOQO'#Du'#DuOOQO'#Dv'#DvOOQO'#Dw'#DwOOQO'#Dx'#DxOOQO'#Dy'#DyOOQO'#Dz'#DzOOQO'#D{'#D{OOQO'#D|'#D|OOQO'#D}'#D}OOQO'#EO'#EOOOQO'#EP'#EPOOQO'#EQ'#EQOOQO'#ER'#EROOQO'#ES'#ESOOQO'#ET'#ETOOQO'#EU'#EUOOQO'#EV'#EVOOQO'#EW'#EWOOQO'#EX'#EXOOQO'#EY'#EYOOQO'#EZ'#EZOOQO'#E['#E[OOQO'#E]'#E]OOQO'#E^'#E^OOQO'#E_'#E_OOQO'#E`'#E`OOQO'#Ea'#EaOOQO'#Eb'#EbOOQO'#Ec'#EcOOQO'#Ed'#EdOOQO'#Ee'#EeOOQO'#Ef'#EfOOQO'#Eg'#EgOOQO'#Eh'#EhOOQO'#Ei'#EiOOQO'#Ej'#EjOOQO'#Ek'#EkOOQO'#El'#ElOOQO'#Em'#EmOOQO'#En'#EnOOQO'#Eo'#EoOOQO'#Ep'#EpOOQO'#Eq'#EqOOQO'#Er'#ErOOQO'#Es'#EsOOQO'#Et'#EtOOQO'#Eu'#EuOOQO'#Ev'#EvOOQO'#Ew'#EwOOQO'#Ex'#ExOOQO'#Ey'#EyOOQO'#Ez'#EzQOQPOOO0XQPO'#C|O0^QPO'#DRO'WQPO,59fO0eQQO,59fO2RQPO,59oO2RQPO,59oO2RQPO,59oO2RQPO,59oO2RQPO,59oO7}QQO,5;gO8SQQO,5;jO8[QPO,5;yOOQO,5:O,5:OOOQO,5;i,5;iO8sQQO,5;kO8zQQO,5;nO:bQPO'#FYO:pQPO,5;rOOQO'#FX'#FXOOQO,5;r,5;rOOQO,5;p,5;pO:xQSO'#C}OOQO,59h,59hO;QQPO,59mO;YQQO'#DSOOQO,59m,59mOOQO1G/Q1G/QO0XQPO'#DWOAVQPO'#DVOAaQPO'#DVOYQPO1G/ZOYQPO1G/ZOYQPO1G/ZOYQPO1G/ZOYQPO1G/ZOAkQSO1G1ROOQO1G1U1G1UOAsQQO1G1UOAxQPO'#E}OOQO'#Fa'#FaOOQO1G1e1G1eOBTQPO1G1eOOQO1G1V1G1VOOQO'#FZ'#FZOBYQPO,5;tOB_QSO1G1^OOQO1G1^1G1^OOQO'#DP'#DPOBgQPO,59iOOQO'#DO'#DOOOQO,59i,59iOYQPO,59nOOQO1G/X1G/XOOQO,59r,59rOH_QPO,59qOHfQPO,59qOI}QQO7+$uOJ_QQO7+$uOKsQQO7+$uOLZQQO7+$uOMrQQO7+$uOOQO7+&m7+&mON]QQO7+&sOOQO7+&p7+&pONeQPO7+'POOQO1G1`1G1`OOQO1G1_1G1_OOQO7+&x7+&xONjQSO1G/TOOQO1G/T1G/TONrQQO1G/YOOQO1G/]1G/]ON|QPO1G/]OOQO<<J_<<J_O!&oQPO<<J_OOQO<<Jk<<JkOOQO1G/U1G/UOOQO7+$o7+$oOOQO7+$w7+$wOOQOAN?yAN?y",
  stateData: "!&t~O$ZOSkOS~OWQOXQOYQOZQO[QO]QO^QO_QO`QOaQObQOcQO!ZZO#t_O$WVO$XVO$[XO$_`O$`aO$abO$bcO$cdO$deO$efO$fgO$ghO$hiO$ijO$jkO$klO$lmO$mnO$noO$opO$pqO$qrO$rsO$stO$tuO$uvO$vwO$wxO$xyO$yzO$z{O${|O$|}O$}!OO%O!PO%P!QO%Q!RO%R!SO%S!TO%T!UO%U!VO%V!WO%W!XO%X!YO%Y!ZO%Z![O%[!]O%]!^O%^!_O%_!`O%`!aO%a!bO%b!cO%c!dO%d!eO%e!fO%f!gO%g!hO%h!iO%i!jO%j!kO%k!lO%l!mO%m!nO%n!oO%o!pO%p!qO%q!rO%r!sO%uWO%vWO%wVO%y[O~O!ZZO~Od!uOe!uO$[!vO~OU#POV!yOf!|Og!}Oh!|Ox!yO{!yO|!yO}!yO!O!zO!P!zO!Q!{O!R!{O!S!{O!T!{O!U!{O!V!{O$S#QO%s#OO~O$W#SO$X#SO%w#SOW#wXX#wXY#wXZ#wX[#wX]#wX^#wX_#wX`#wXa#wXb#wXc#wX!Z#wX#t#wX$W#wX$X#wX$[#wX$_#wX$`#wX$a#wX$b#wX$c#wX$d#wX$e#wX$f#wX$g#wX$h#wX$i#wX$j#wX$k#wX$l#wX$m#wX$n#wX$o#wX$p#wX$q#wX$r#wX$s#wX$t#wX$u#wX$v#wX$w#wX$x#wX$y#wX$z#wX${#wX$|#wX$}#wX%O#wX%P#wX%Q#wX%R#wX%S#wX%T#wX%U#wX%V#wX%W#wX%X#wX%Y#wX%Z#wX%[#wX%]#wX%^#wX%_#wX%`#wX%a#wX%b#wX%c#wX%d#wX%e#wX%f#wX%g#wX%h#wX%i#wX%j#wX%k#wX%l#wX%m#wX%n#wX%o#wX%p#wX%q#wX%r#wX%u#wX%v#wX%w#wX%y#wX~Ot#VO%z#YO~O%y[OU#xXV#xXf#xXg#xXh#xXx#xX{#xX|#xX}#xX!O#xX!P#xX!Q#xX!R#xX!S#xX!T#xX!U#xX!V#xX$S#xX$V#xX%s#xX$^#xX$]#xX~O$[#[O~O$^#`O~PYOd!uOe!uOUnaVnafnagnahnaxna{na|na}na!Ona!Pna!Qna!Rna!Sna!Tna!Una!Vna$Sna$Vna%sna$^na$]na~OP#dOQ#bOR#bOWyPXyPYyPZyP[yP]yP^yP_yP`yPayPbyPcyP!ZyP#tyP$WyP$XyP$[yP$_yP$`yP$ayP$byP$cyP$dyP$eyP$fyP$gyP$hyP$iyP$jyP$kyP$lyP$myP$nyP$oyP$pyP$qyP$ryP$syP$tyP$uyP$vyP$wyP$xyP$yyP$zyP${yP$|yP$}yP%OyP%PyP%QyP%RyP%SyP%TyP%UyP%VyP%WyP%XyP%YyP%ZyP%[yP%]yP%^yP%_yP%`yP%ayP%byP%cyP%dyP%eyP%fyP%gyP%hyP%iyP%jyP%kyP%lyP%myP%nyP%oyP%pyP%qyP%ryP%uyP%vyP%wyP%yyP~O#p#jO~O!P#lO#p#kO~Oi#nOj#nO$WVO$XVO%u#mO%v#mO%wVO~O$^#qO~P']Ox!yOU#vaV#vaf#vag#vah#va{#va|#va}#va!O#va!P#va!Q#va!R#va!S#va!T#va!U#va!V#va$S#va$V#va%s#va$^#va$]#va~O!V#rO$O#rO$P#rO$Q#rO~O$]#tO%z#uO~Ot#vO$^#yO~O$]#zO$^#{O~O$]vX$^vX~P']OWyXXyXYyXZyX[yX]yX^yX_yX`yXayXbyXcyX!ZyX#tyX$WyX$XyX$[yX$_yX$`yX$ayX$byX$cyX$dyX$eyX$fyX$gyX$hyX$iyX$jyX$kyX$lyX$myX$nyX$oyX$pyX$qyX$ryX$syX$tyX$uyX$vyX$wyX$xyX$yyX$zyX${yX$|yX$}yX%OyX%PyX%QyX%RyX%SyX%TyX%UyX%VyX%WyX%XyX%YyX%ZyX%[yX%]yX%^yX%_yX%`yX%ayX%byX%cyX%dyX%eyX%fyX%gyX%hyX%iyX%jyX%kyX%lyX%myX%nyX%oyX%pyX%qyX%ryX%uyX%vyX%wyX%yyX~OS#}OT#}O~P;dOQ#bOR#bO~P;dO%t$UO%x$VO~O#p$WO~O$W#SO$X#SO%w#SO~O$[$XO~O#t$YO~Ot#VO%z$[O~O$]$]O$^$^O~OWyaXyaYyaZya[ya]ya^ya_ya`yaayabyacya!Zya#tya$Wya$Xya$_ya$`ya$aya$bya$cya$dya$eya$fya$gya$hya$iya$jya$kya$lya$mya$nya$oya$pya$qya$rya$sya$tya$uya$vya$wya$xya$yya$zya${ya$|ya$}ya%Oya%Pya%Qya%Rya%Sya%Tya%Uya%Vya%Wya%Xya%Yya%Zya%[ya%]ya%^ya%_ya%`ya%aya%bya%cya%dya%eya%fya%gya%hya%iya%jya%kya%lya%mya%nya%oya%pya%qya%rya%uya%vya%wya%yya~O$[#[O~PBoOS$aOT$aO$[ya~PBoOx!yOUwqfwqgwqhwq!Owq!Pwq!Qwq!Rwq!Swq!Twq!Uwq!Vwq$Swq$Vwq%swq$^wq$]wq~OVwq{wq|wq}wq~PHsOV!yO{!yO|!yO}!yO~PHsOV!yOx!yO{!yO|!yO}!yO!O!zO!P!zOUwqfwqgwqhwq$Swq$Vwq%swq$^wq$]wq~O!Qwq!Rwq!Swq!Twq!Uwq!Vwq~PJoO!Q!{O!R!{O!S!{O!T!{O!U!{O!V!{O~PJoOV!yOf!|Oh!|Ox!yO{!yO|!yO}!yO!O!zO!P!zO!Q!{O!R!{O!S!{O!T!{O!U!{O!V!{O~OUwqgwq$Swq$Vwq%swq$^wq$]wq~PLqO#p$cO%t$bO~O$^$dO~Ot#vO$^$fO~O$]vi$^vi~P']O$[#[OWyiXyiYyiZyi[yi]yi^yi_yi`yiayibyicyi!Zyi#tyi$Wyi$Xyi$_yi$`yi$ayi$byi$cyi$dyi$eyi$fyi$gyi$hyi$iyi$jyi$kyi$lyi$myi$nyi$oyi$pyi$qyi$ryi$syi$tyi$uyi$vyi$wyi$xyi$yyi$zyi${yi$|yi$}yi%Oyi%Pyi%Qyi%Ryi%Syi%Tyi%Uyi%Vyi%Wyi%Xyi%Yyi%Zyi%[yi%]yi%^yi%_yi%`yi%ayi%byi%cyi%dyi%eyi%fyi%gyi%hyi%iyi%jyi%kyi%lyi%myi%nyi%oyi%pyi%qyi%ryi%uyi%vyi%wyi%yyi~O%t$hO~O",
  goto: "(u$UPPPPPPPPPPPPPPPPPPPPPPPPPPPPP$V$u%R%_%e%q%tP%z&T$uP&W&gPPPPPPPPPPP$u&q&}P&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}&}$uP'Z$u$uP$u$u'j$u'v(V(f(i(oPPP$uP(rQSOQ#TXQ#UYQ#_!vQ$P#eQ$Q#fQ$R#gQ$S#hQ$T#iR$_#ze_OXY!v#e#f#g#h#i#zeROXY!v#e#f#g#h#i#zQ!wRR#a!xQ#]!uQ#|#bQ$`#}R$g$aR#w#[Q#x#[R$e$]Q!xRQ#RUR#a!wR#^!vQ#e!yQ#f!zQ#g!{Q#h!|R#i!}Y#c!y!z!{!|!}R$O#deUOXY!v#e#f#g#h#i#zeTOXY!v#e#f#g#h#i#zd_OXY!v#e#f#g#h#i#zR#o#QeYOXY!v#e#f#g#h#i#zd]OXY!v#e#f#g#h#i#zR!tPd^OXY!v#e#f#g#h#i#zR#Z]R#W[Q#X[R$Z#tR#s#VR#p#Q",
  nodeNames: "⚠ Bool Ignoring On GroupLeft GroupRight Offset Atan2 Avg Bottomk Count CountValues Group Max Min Quantile Stddev Stdvar Sum Topk By Without And Or Unless Start End LineComment PromQL Expr AggregateExpr AggregateOp AggregateModifier GroupingLabels GroupingLabelList GroupingLabel LabelName FunctionCallBody FunctionCallArgs BinaryExpr Pow BinModifiers OnOrIgnoring Mul Div Mod Add Sub Eql Gte Gtr Lte Lss Neq FunctionCall FunctionIdentifier AbsentOverTime Identifier Absent Abs Acos Acosh Asin Asinh Atan Atanh AvgOverTime Ceil Changes Clamp ClampMax ClampMin Cos Cosh CountOverTime DaysInMonth DayOfMonth DayOfWeek Deg Delta Deriv Exp Floor HistogramQuantile HoltWinters Hour Idelta Increase Irate LabelReplace LabelJoin LastOverTime Ln Log10 Log2 MaxOverTime MinOverTime Minute Month Pi PredictLinear PresentOverTime QuantileOverTime Rad Rate Resets Round Scalar Sgn Sin Sinh Sort SortDesc Sqrt StddevOverTime StdvarOverTime SumOverTime Tan Tanh Timestamp Time Vector Year MatrixSelector Duration NumberLiteral OffsetExpr ParenExpr StringLiteral SubqueryExpr UnaryExpr UnaryOp VectorSelector MetricIdentifier LabelMatchers LabelMatchList LabelMatcher MatchOp EqlSingle EqlRegex NeqRegex StepInvariantExpr At AtModifierPreprocessors MetricName",
  maxTerm: 226,
  skippedNodes: [0,27],
  repeatNodeCount: 0,
  tokenData: "1R~RwX^#lpq#lqr$ars$tst%huv%swx%xxy&gyz&lz{&q{|&v|}&}}!O'S!O!P'Z!P!Q(Z!Q!R(`!R![)W![!]-r!^!_.n!_!`.{!`!a/b!b!c/o!c!}/t!}#O0[#P#Q0a#Q#R0f#R#S/t#S#T0k#T#o/t#o#p0w#q#r0|#y#z#l$f$g#l#BY#BZ#l$IS$I_#l$I|$JO#l$JT$JU#l$KV$KW#l&FU&FV#l~#qY$Z~X^#lpq#l#y#z#l$f$g#l#BY#BZ#l$IS$I_#l$I|$JO#l$JT$JU#l$KV$KW#l&FU&FV#l~$dQ!_!`$j#r#s$o~$oO!V~~$tO$Q~~$yU#t~OY$tZr$trs%]s#O$t#O#P%b#P~$t~%bO#t~~%ePO~$t~%mQk~OY%hZ~%h~%xO}~~%}U#t~OY%xZw%xwx%]x#O%x#O#P&a#P~%x~&dPO~%x~&lO$[~~&qO$^~~&vO{~R&}O%vP!OQ~'SO$]~R'ZO%uP!PQP'^P!Q!['aP'fR%wP!Q!['a!g!h'o#X#Y'oP'rR{|'{}!O'{!Q![(RP(OP!Q![(RP(WP%wP!Q![(R~(`O|~R(eZ%wP!O!P'a!Q![)W!g!h'o#W#X){#X#Y'o#[#]*d#a#b*x#g#h+l#k#l+}#l#m-W#m#n,iR)]Y%wP!O!P'a!Q![)W!g!h'o#W#X){#X#Y'o#[#]*d#a#b*x#g#h+l#k#l+}#m#n,iQ*QP#pQ!Q![*TQ*WS!Q![*T#[#]*d#a#b*x#g#h+lQ*iP#pQ!Q![*lQ*oR!Q![*l#a#b*x#g#h+lQ*}Q#pQ!Q![+T#g#h+gQ+WR!Q![+T#a#b+a#g#h+lQ+dP#g#h+gQ+lO#pQQ+qP#pQ!Q![+tQ+wQ!Q![+t#a#b+aQ,SP#pQ!Q![,VQ,YT!Q![,V#W#X){#[#]*d#a#b*x#g#h+lQ,nP#pQ!Q![,qQ,tU!Q![,q#W#X){#[#]*d#a#b*x#g#h+l#k#l+}P-ZR!Q![-d!c!i-d#T#Z-dP-iR%wP!Q![-d!c!i-d#T#Z-dV-yT%xS!ZR!Q![.Y![!].Y!c!}.Y#R#S.Y#T#o.YR._T!ZR!Q![.Y![!].Y!c!}.Y#R#S.Y#T#o.Y~.sP!U~!_!`.v~.{O!T~~/QQ$OP!_!`/W#r#s/]Q/]O!QQ~/bO$P~~/gP!S~!_!`/j~/oO!R~~/tO$S~V/{T!ZRtS!Q![/t![!].Y!c!}/t#R#S/t#T#o/t~0aO%s~~0fO%t~~0kOx~~0nRO#S0k#S#T%]#T~0k~0|O%y~~1RO%z~",
  tokenizers: [0, 1, 2],
  topRules: {"PromQL":[0,28],"MetricName":[1,144]},
  specialized: [{term: 57, get: (value, stack) => (specializeIdentifier(value) << 1)},{term: 57, get: (value, stack) => (extendIdentifier(value) << 1) | 1},{term: 57, get: value => spec_Identifier[value] || -1}],
  tokenPrec: 0
});
// This file was generated by lezer-generator. You probably shouldn't edit it.
const 
  inf$1 = 146,
  nan$1 = 147,
  Bool$1 = 1,
  Ignoring$1 = 2,
  On$1 = 3,
  GroupLeft$1 = 4,
  GroupRight$1 = 5,
  Offset$1 = 6,
  Atan2$1 = 7,
  Avg$1 = 8,
  Bottomk$1 = 9,
  Count$1 = 10,
  CountValues$1 = 11,
  Group$1 = 12,
  Max$1 = 13,
  Min$1 = 14,
  Quantile$1 = 15,
  Stddev$1 = 16,
  Stdvar$1 = 17,
  Sum$1 = 18,
  Topk$1 = 19,
  By$1 = 20,
  Without$1 = 21,
  And$1 = 22,
  Or$1 = 23,
  Unless$1 = 24,
  Start$1 = 25,
  End$1 = 26,
  LineComment = 27,
  PromQL = 28,
  Expr = 29,
  AggregateExpr = 30,
  AggregateOp = 31,
  AggregateModifier = 32,
  GroupingLabels = 33,
  GroupingLabelList = 34,
  GroupingLabel = 35,
  LabelName = 36,
  FunctionCallBody = 37,
  FunctionCallArgs = 38,
  BinaryExpr = 39,
  Pow = 40,
  BinModifiers = 41,
  OnOrIgnoring = 42,
  Mul = 43,
  Div = 44,
  Mod = 45,
  Add = 46,
  Sub = 47,
  Eql = 48,
  Gte = 49,
  Gtr = 50,
  Lte = 51,
  Lss = 52,
  Neq = 53,
  FunctionCall = 54,
  FunctionIdentifier = 55,
  AbsentOverTime = 56,
  Identifier = 57,
  Absent = 58,
  Abs = 59,
  Acos = 60,
  Acosh = 61,
  Asin = 62,
  Asinh = 63,
  Atan = 64,
  Atanh = 65,
  AvgOverTime = 66,
  Ceil = 67,
  Changes = 68,
  Clamp = 69,
  ClampMax = 70,
  ClampMin = 71,
  Cos = 72,
  Cosh = 73,
  CountOverTime = 74,
  DaysInMonth = 75,
  DayOfMonth = 76,
  DayOfWeek = 77,
  Deg = 78,
  Delta = 79,
  Deriv = 80,
  Exp = 81,
  Floor = 82,
  HistogramQuantile = 83,
  HoltWinters = 84,
  Hour = 85,
  Idelta = 86,
  Increase = 87,
  Irate = 88,
  LabelReplace = 89,
  LabelJoin = 90,
  LastOverTime = 91,
  Ln = 92,
  Log10 = 93,
  Log2 = 94,
  MaxOverTime = 95,
  MinOverTime = 96,
  Minute = 97,
  Month = 98,
  Pi = 99,
  PredictLinear = 100,
  PresentOverTime = 101,
  QuantileOverTime = 102,
  Rad = 103,
  Rate = 104,
  Resets = 105,
  Round = 106,
  Scalar = 107,
  Sgn = 108,
  Sin = 109,
  Sinh = 110,
  Sort = 111,
  SortDesc = 112,
  Sqrt = 113,
  StddevOverTime = 114,
  StdvarOverTime = 115,
  SumOverTime = 116,
  Tan = 117,
  Tanh = 118,
  Timestamp = 119,
  Time = 120,
  Vector = 121,
  Year = 122,
  MatrixSelector = 123,
  Duration = 124,
  NumberLiteral = 125,
  OffsetExpr = 126,
  ParenExpr = 127,
  StringLiteral = 128,
  SubqueryExpr = 129,
  UnaryExpr = 130,
  UnaryOp = 131,
  VectorSelector = 132,
  MetricIdentifier = 133,
  LabelMatchers = 134,
  LabelMatchList = 135,
  LabelMatcher = 136,
  MatchOp = 137,
  EqlSingle = 138,
  EqlRegex = 139,
  NeqRegex = 140,
  StepInvariantExpr = 141,
  At = 142,
  AtModifierPreprocessors = 143,
  MetricName = 144;




/***/ }),

/***/ "./.yarn/cache/@lezer-lr-npm-0.15.8-8c481c39cd-e741225d6a.zip/node_modules/@lezer/lr/dist/index.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "WQ": () => (/* binding */ LRParser)
});

// UNUSED EXPORTS: ContextTracker, ExternalTokenizer, InputStream, Stack

;// CONCATENATED MODULE: ./.yarn/cache/@lezer-common-npm-0.15.12-62017272b0-dae6581618.zip/node_modules/@lezer/common/dist/index.js
// FIXME profile adding a per-Tree TreeNode cache, validating it by
// parent pointer
/// The default maximum length of a `TreeBuffer` node (1024).
const DefaultBufferLength = 1024;
let nextPropID = 0;
class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}
/// Each [node type](#common.NodeType) or [individual tree](#common.Tree)
/// can have metadata associated with it in props. Instances of this
/// class represent prop names.
class NodeProp {
    /// Create a new node prop type.
    constructor(config = {}) {
        this.id = nextPropID++;
        this.perNode = !!config.perNode;
        this.deserialize = config.deserialize || (() => {
            throw new Error("This node type doesn't define a deserialize function");
        });
    }
    /// This is meant to be used with
    /// [`NodeSet.extend`](#common.NodeSet.extend) or
    /// [`LRParser.configure`](#lr.ParserConfig.props) to compute
    /// prop values for each node type in the set. Takes a [match
    /// object](#common.NodeType^match) or function that returns undefined
    /// if the node type doesn't get this prop, and the prop's value if
    /// it does.
    add(match) {
        if (this.perNode)
            throw new RangeError("Can't add per-node props to node types");
        if (typeof match != "function")
            match = NodeType.match(match);
        return (type) => {
            let result = match(type);
            return result === undefined ? null : [this, result];
        };
    }
}
/// Prop that is used to describe matching delimiters. For opening
/// delimiters, this holds an array of node names (written as a
/// space-separated string when declaring this prop in a grammar)
/// for the node types of closing delimiters that match it.
NodeProp.closedBy = new NodeProp({ deserialize: str => str.split(" ") });
/// The inverse of [`closedBy`](#common.NodeProp^closedBy). This is
/// attached to closing delimiters, holding an array of node names
/// of types of matching opening delimiters.
NodeProp.openedBy = new NodeProp({ deserialize: str => str.split(" ") });
/// Used to assign node types to groups (for example, all node
/// types that represent an expression could be tagged with an
/// `"Expression"` group).
NodeProp.group = new NodeProp({ deserialize: str => str.split(" ") });
/// The hash of the [context](#lr.ContextTracker.constructor)
/// that the node was parsed in, if any. Used to limit reuse of
/// contextual nodes.
NodeProp.contextHash = new NodeProp({ perNode: true });
/// The distance beyond the end of the node that the tokenizer
/// looked ahead for any of the tokens inside the node. (The LR
/// parser only stores this when it is larger than 25, for
/// efficiency reasons.)
NodeProp.lookAhead = new NodeProp({ perNode: true });
/// This per-node prop is used to replace a given node, or part of a
/// node, with another tree. This is useful to include trees from
/// different languages.
NodeProp.mounted = new NodeProp({ perNode: true });
/// A mounted tree, which can be [stored](#common.NodeProp^mounted) on
/// a tree node to indicate that parts of its content are
/// represented by another tree.
class MountedTree {
    constructor(
    /// The inner tree.
    tree, 
    /// If this is null, this tree replaces the entire node (it will
    /// be included in the regular iteration instead of its host
    /// node). If not, only the given ranges are considered to be
    /// covered by this tree. This is used for trees that are mixed in
    /// a way that isn't strictly hierarchical. Such mounted trees are
    /// only entered by [`resolveInner`](#common.Tree.resolveInner)
    /// and [`enter`](#common.SyntaxNode.enter).
    overlay, 
    /// The parser used to create this subtree.
    parser) {
        this.tree = tree;
        this.overlay = overlay;
        this.parser = parser;
    }
}
const noProps = Object.create(null);
/// Each node in a syntax tree has a node type associated with it.
class NodeType {
    /// @internal
    constructor(
    /// The name of the node type. Not necessarily unique, but if the
    /// grammar was written properly, different node types with the
    /// same name within a node set should play the same semantic
    /// role.
    name, 
    /// @internal
    props, 
    /// The id of this node in its set. Corresponds to the term ids
    /// used in the parser.
    id, 
    /// @internal
    flags = 0) {
        this.name = name;
        this.props = props;
        this.id = id;
        this.flags = flags;
    }
    static define(spec) {
        let props = spec.props && spec.props.length ? Object.create(null) : noProps;
        let flags = (spec.top ? 1 /* Top */ : 0) | (spec.skipped ? 2 /* Skipped */ : 0) |
            (spec.error ? 4 /* Error */ : 0) | (spec.name == null ? 8 /* Anonymous */ : 0);
        let type = new NodeType(spec.name || "", props, spec.id, flags);
        if (spec.props)
            for (let src of spec.props) {
                if (!Array.isArray(src))
                    src = src(type);
                if (src) {
                    if (src[0].perNode)
                        throw new RangeError("Can't store a per-node prop on a node type");
                    props[src[0].id] = src[1];
                }
            }
        return type;
    }
    /// Retrieves a node prop for this type. Will return `undefined` if
    /// the prop isn't present on this node.
    prop(prop) { return this.props[prop.id]; }
    /// True when this is the top node of a grammar.
    get isTop() { return (this.flags & 1 /* Top */) > 0; }
    /// True when this node is produced by a skip rule.
    get isSkipped() { return (this.flags & 2 /* Skipped */) > 0; }
    /// Indicates whether this is an error node.
    get isError() { return (this.flags & 4 /* Error */) > 0; }
    /// When true, this node type doesn't correspond to a user-declared
    /// named node, for example because it is used to cache repetition.
    get isAnonymous() { return (this.flags & 8 /* Anonymous */) > 0; }
    /// Returns true when this node's name or one of its
    /// [groups](#common.NodeProp^group) matches the given string.
    is(name) {
        if (typeof name == 'string') {
            if (this.name == name)
                return true;
            let group = this.prop(NodeProp.group);
            return group ? group.indexOf(name) > -1 : false;
        }
        return this.id == name;
    }
    /// Create a function from node types to arbitrary values by
    /// specifying an object whose property names are node or
    /// [group](#common.NodeProp^group) names. Often useful with
    /// [`NodeProp.add`](#common.NodeProp.add). You can put multiple
    /// names, separated by spaces, in a single property name to map
    /// multiple node names to a single value.
    static match(map) {
        let direct = Object.create(null);
        for (let prop in map)
            for (let name of prop.split(" "))
                direct[name] = map[prop];
        return (node) => {
            for (let groups = node.prop(NodeProp.group), i = -1; i < (groups ? groups.length : 0); i++) {
                let found = direct[i < 0 ? node.name : groups[i]];
                if (found)
                    return found;
            }
        };
    }
}
/// An empty dummy node type to use when no actual type is available.
NodeType.none = new NodeType("", Object.create(null), 0, 8 /* Anonymous */);
/// A node set holds a collection of node types. It is used to
/// compactly represent trees by storing their type ids, rather than a
/// full pointer to the type object, in a numeric array. Each parser
/// [has](#lr.LRParser.nodeSet) a node set, and [tree
/// buffers](#common.TreeBuffer) can only store collections of nodes
/// from the same set. A set can have a maximum of 2**16 (65536) node
/// types in it, so that the ids fit into 16-bit typed array slots.
class NodeSet {
    /// Create a set with the given types. The `id` property of each
    /// type should correspond to its position within the array.
    constructor(
    /// The node types in this set, by id.
    types) {
        this.types = types;
        for (let i = 0; i < types.length; i++)
            if (types[i].id != i)
                throw new RangeError("Node type ids should correspond to array positions when creating a node set");
    }
    /// Create a copy of this set with some node properties added. The
    /// arguments to this method should be created with
    /// [`NodeProp.add`](#common.NodeProp.add).
    extend(...props) {
        let newTypes = [];
        for (let type of this.types) {
            let newProps = null;
            for (let source of props) {
                let add = source(type);
                if (add) {
                    if (!newProps)
                        newProps = Object.assign({}, type.props);
                    newProps[add[0].id] = add[1];
                }
            }
            newTypes.push(newProps ? new NodeType(type.name, newProps, type.id, type.flags) : type);
        }
        return new NodeSet(newTypes);
    }
}
const CachedNode = new WeakMap(), CachedInnerNode = new WeakMap();
/// A piece of syntax tree. There are two ways to approach these
/// trees: the way they are actually stored in memory, and the
/// convenient way.
///
/// Syntax trees are stored as a tree of `Tree` and `TreeBuffer`
/// objects. By packing detail information into `TreeBuffer` leaf
/// nodes, the representation is made a lot more memory-efficient.
///
/// However, when you want to actually work with tree nodes, this
/// representation is very awkward, so most client code will want to
/// use the [`TreeCursor`](#common.TreeCursor) or
/// [`SyntaxNode`](#common.SyntaxNode) interface instead, which provides
/// a view on some part of this data structure, and can be used to
/// move around to adjacent nodes.
class Tree {
    /// Construct a new tree. See also [`Tree.build`](#common.Tree^build).
    constructor(
    /// The type of the top node.
    type, 
    /// This node's child nodes.
    children, 
    /// The positions (offsets relative to the start of this tree) of
    /// the children.
    positions, 
    /// The total length of this tree
    length, 
    /// Per-node [node props](#common.NodeProp) to associate with this node.
    props) {
        this.type = type;
        this.children = children;
        this.positions = positions;
        this.length = length;
        /// @internal
        this.props = null;
        if (props && props.length) {
            this.props = Object.create(null);
            for (let [prop, value] of props)
                this.props[typeof prop == "number" ? prop : prop.id] = value;
        }
    }
    /// @internal
    toString() {
        let mounted = this.prop(NodeProp.mounted);
        if (mounted && !mounted.overlay)
            return mounted.tree.toString();
        let children = "";
        for (let ch of this.children) {
            let str = ch.toString();
            if (str) {
                if (children)
                    children += ",";
                children += str;
            }
        }
        return !this.type.name ? children :
            (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) +
                (children.length ? "(" + children + ")" : "");
    }
    /// Get a [tree cursor](#common.TreeCursor) rooted at this tree. When
    /// `pos` is given, the cursor is [moved](#common.TreeCursor.moveTo)
    /// to the given position and side.
    cursor(pos, side = 0) {
        let scope = (pos != null && CachedNode.get(this)) || this.topNode;
        let cursor = new TreeCursor(scope);
        if (pos != null) {
            cursor.moveTo(pos, side);
            CachedNode.set(this, cursor._tree);
        }
        return cursor;
    }
    /// Get a [tree cursor](#common.TreeCursor) that, unlike regular
    /// cursors, doesn't skip through
    /// [anonymous](#common.NodeType.isAnonymous) nodes and doesn't
    /// automatically enter mounted nodes.
    fullCursor() {
        return new TreeCursor(this.topNode, 1 /* Full */);
    }
    /// Get a [syntax node](#common.SyntaxNode) object for the top of the
    /// tree.
    get topNode() {
        return new TreeNode(this, 0, 0, null);
    }
    /// Get the [syntax node](#common.SyntaxNode) at the given position.
    /// If `side` is -1, this will move into nodes that end at the
    /// position. If 1, it'll move into nodes that start at the
    /// position. With 0, it'll only enter nodes that cover the position
    /// from both sides.
    resolve(pos, side = 0) {
        let node = resolveNode(CachedNode.get(this) || this.topNode, pos, side, false);
        CachedNode.set(this, node);
        return node;
    }
    /// Like [`resolve`](#common.Tree.resolve), but will enter
    /// [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
    /// pointing into the innermost overlaid tree at the given position
    /// (with parent links going through all parent structure, including
    /// the host trees).
    resolveInner(pos, side = 0) {
        let node = resolveNode(CachedInnerNode.get(this) || this.topNode, pos, side, true);
        CachedInnerNode.set(this, node);
        return node;
    }
    /// Iterate over the tree and its children, calling `enter` for any
    /// node that touches the `from`/`to` region (if given) before
    /// running over such a node's children, and `leave` (if given) when
    /// leaving the node. When `enter` returns `false`, that node will
    /// not have its children iterated over (or `leave` called).
    iterate(spec) {
        let { enter, leave, from = 0, to = this.length } = spec;
        for (let c = this.cursor(), get = () => c.node;;) {
            let mustLeave = false;
            if (c.from <= to && c.to >= from && (c.type.isAnonymous || enter(c.type, c.from, c.to, get) !== false)) {
                if (c.firstChild())
                    continue;
                if (!c.type.isAnonymous)
                    mustLeave = true;
            }
            for (;;) {
                if (mustLeave && leave)
                    leave(c.type, c.from, c.to, get);
                mustLeave = c.type.isAnonymous;
                if (c.nextSibling())
                    break;
                if (!c.parent())
                    return;
                mustLeave = true;
            }
        }
    }
    /// Get the value of the given [node prop](#common.NodeProp) for this
    /// node. Works with both per-node and per-type props.
    prop(prop) {
        return !prop.perNode ? this.type.prop(prop) : this.props ? this.props[prop.id] : undefined;
    }
    /// Returns the node's [per-node props](#common.NodeProp.perNode) in a
    /// format that can be passed to the [`Tree`](#common.Tree)
    /// constructor.
    get propValues() {
        let result = [];
        if (this.props)
            for (let id in this.props)
                result.push([+id, this.props[id]]);
        return result;
    }
    /// Balance the direct children of this tree, producing a copy of
    /// which may have children grouped into subtrees with type
    /// [`NodeType.none`](#common.NodeType^none).
    balance(config = {}) {
        return this.children.length <= 8 /* BranchFactor */ ? this :
            balanceRange(NodeType.none, this.children, this.positions, 0, this.children.length, 0, this.length, (children, positions, length) => new Tree(this.type, children, positions, length, this.propValues), config.makeTree || ((children, positions, length) => new Tree(NodeType.none, children, positions, length)));
    }
    /// Build a tree from a postfix-ordered buffer of node information,
    /// or a cursor over such a buffer.
    static build(data) { return buildTree(data); }
}
/// The empty tree
Tree.empty = new Tree(NodeType.none, [], [], 0);
class FlatBufferCursor {
    constructor(buffer, index) {
        this.buffer = buffer;
        this.index = index;
    }
    get id() { return this.buffer[this.index - 4]; }
    get start() { return this.buffer[this.index - 3]; }
    get end() { return this.buffer[this.index - 2]; }
    get size() { return this.buffer[this.index - 1]; }
    get pos() { return this.index; }
    next() { this.index -= 4; }
    fork() { return new FlatBufferCursor(this.buffer, this.index); }
}
/// Tree buffers contain (type, start, end, endIndex) quads for each
/// node. In such a buffer, nodes are stored in prefix order (parents
/// before children, with the endIndex of the parent indicating which
/// children belong to it)
class TreeBuffer {
    /// Create a tree buffer.
    constructor(
    /// The buffer's content.
    buffer, 
    /// The total length of the group of nodes in the buffer.
    length, 
    /// The node set used in this buffer.
    set) {
        this.buffer = buffer;
        this.length = length;
        this.set = set;
    }
    /// @internal
    get type() { return NodeType.none; }
    /// @internal
    toString() {
        let result = [];
        for (let index = 0; index < this.buffer.length;) {
            result.push(this.childString(index));
            index = this.buffer[index + 3];
        }
        return result.join(",");
    }
    /// @internal
    childString(index) {
        let id = this.buffer[index], endIndex = this.buffer[index + 3];
        let type = this.set.types[id], result = type.name;
        if (/\W/.test(result) && !type.isError)
            result = JSON.stringify(result);
        index += 4;
        if (endIndex == index)
            return result;
        let children = [];
        while (index < endIndex) {
            children.push(this.childString(index));
            index = this.buffer[index + 3];
        }
        return result + "(" + children.join(",") + ")";
    }
    /// @internal
    findChild(startIndex, endIndex, dir, pos, side) {
        let { buffer } = this, pick = -1;
        for (let i = startIndex; i != endIndex; i = buffer[i + 3]) {
            if (checkSide(side, pos, buffer[i + 1], buffer[i + 2])) {
                pick = i;
                if (dir > 0)
                    break;
            }
        }
        return pick;
    }
    /// @internal
    slice(startI, endI, from, to) {
        let b = this.buffer;
        let copy = new Uint16Array(endI - startI);
        for (let i = startI, j = 0; i < endI;) {
            copy[j++] = b[i++];
            copy[j++] = b[i++] - from;
            copy[j++] = b[i++] - from;
            copy[j++] = b[i++] - startI;
        }
        return new TreeBuffer(copy, to - from, this.set);
    }
}
function checkSide(side, pos, from, to) {
    switch (side) {
        case -2 /* Before */: return from < pos;
        case -1 /* AtOrBefore */: return to >= pos && from < pos;
        case 0 /* Around */: return from < pos && to > pos;
        case 1 /* AtOrAfter */: return from <= pos && to > pos;
        case 2 /* After */: return to > pos;
        case 4 /* DontCare */: return true;
    }
}
function enterUnfinishedNodesBefore(node, pos) {
    let scan = node.childBefore(pos);
    while (scan) {
        let last = scan.lastChild;
        if (!last || last.to != scan.to)
            break;
        if (last.type.isError && last.from == last.to) {
            node = scan;
            scan = last.prevSibling;
        }
        else {
            scan = last;
        }
    }
    return node;
}
function resolveNode(node, pos, side, overlays) {
    var _a;
    // Move up to a node that actually holds the position, if possible
    while (node.from == node.to ||
        (side < 1 ? node.from >= pos : node.from > pos) ||
        (side > -1 ? node.to <= pos : node.to < pos)) {
        let parent = !overlays && node instanceof TreeNode && node.index < 0 ? null : node.parent;
        if (!parent)
            return node;
        node = parent;
    }
    // Must go up out of overlays when those do not overlap with pos
    if (overlays)
        for (let scan = node, parent = scan.parent; parent; scan = parent, parent = scan.parent) {
            if (scan instanceof TreeNode && scan.index < 0 && ((_a = parent.enter(pos, side, true)) === null || _a === void 0 ? void 0 : _a.from) != scan.from)
                node = parent;
        }
    for (;;) {
        let inner = node.enter(pos, side, overlays);
        if (!inner)
            return node;
        node = inner;
    }
}
class TreeNode {
    constructor(node, _from, 
    // Index in parent node, set to -1 if the node is not a direct child of _parent.node (overlay)
    index, _parent) {
        this.node = node;
        this._from = _from;
        this.index = index;
        this._parent = _parent;
    }
    get type() { return this.node.type; }
    get name() { return this.node.type.name; }
    get from() { return this._from; }
    get to() { return this._from + this.node.length; }
    nextChild(i, dir, pos, side, mode = 0) {
        for (let parent = this;;) {
            for (let { children, positions } = parent.node, e = dir > 0 ? children.length : -1; i != e; i += dir) {
                let next = children[i], start = positions[i] + parent._from;
                if (!checkSide(side, pos, start, start + next.length))
                    continue;
                if (next instanceof TreeBuffer) {
                    if (mode & 2 /* NoEnterBuffer */)
                        continue;
                    let index = next.findChild(0, next.buffer.length, dir, pos - start, side);
                    if (index > -1)
                        return new BufferNode(new BufferContext(parent, next, i, start), null, index);
                }
                else if ((mode & 1 /* Full */) || (!next.type.isAnonymous || hasChild(next))) {
                    let mounted;
                    if (!(mode & 1 /* Full */) && next.props && (mounted = next.prop(NodeProp.mounted)) && !mounted.overlay)
                        return new TreeNode(mounted.tree, start, i, parent);
                    let inner = new TreeNode(next, start, i, parent);
                    return (mode & 1 /* Full */) || !inner.type.isAnonymous ? inner
                        : inner.nextChild(dir < 0 ? next.children.length - 1 : 0, dir, pos, side);
                }
            }
            if ((mode & 1 /* Full */) || !parent.type.isAnonymous)
                return null;
            if (parent.index >= 0)
                i = parent.index + dir;
            else
                i = dir < 0 ? -1 : parent._parent.node.children.length;
            parent = parent._parent;
            if (!parent)
                return null;
        }
    }
    get firstChild() { return this.nextChild(0, 1, 0, 4 /* DontCare */); }
    get lastChild() { return this.nextChild(this.node.children.length - 1, -1, 0, 4 /* DontCare */); }
    childAfter(pos) { return this.nextChild(0, 1, pos, 2 /* After */); }
    childBefore(pos) { return this.nextChild(this.node.children.length - 1, -1, pos, -2 /* Before */); }
    enter(pos, side, overlays = true, buffers = true) {
        let mounted;
        if (overlays && (mounted = this.node.prop(NodeProp.mounted)) && mounted.overlay) {
            let rPos = pos - this.from;
            for (let { from, to } of mounted.overlay) {
                if ((side > 0 ? from <= rPos : from < rPos) &&
                    (side < 0 ? to >= rPos : to > rPos))
                    return new TreeNode(mounted.tree, mounted.overlay[0].from + this.from, -1, this);
            }
        }
        return this.nextChild(0, 1, pos, side, buffers ? 0 : 2 /* NoEnterBuffer */);
    }
    nextSignificantParent() {
        let val = this;
        while (val.type.isAnonymous && val._parent)
            val = val._parent;
        return val;
    }
    get parent() {
        return this._parent ? this._parent.nextSignificantParent() : null;
    }
    get nextSibling() {
        return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4 /* DontCare */) : null;
    }
    get prevSibling() {
        return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4 /* DontCare */) : null;
    }
    get cursor() { return new TreeCursor(this); }
    get tree() { return this.node; }
    toTree() { return this.node; }
    resolve(pos, side = 0) {
        return resolveNode(this, pos, side, false);
    }
    resolveInner(pos, side = 0) {
        return resolveNode(this, pos, side, true);
    }
    enterUnfinishedNodesBefore(pos) { return enterUnfinishedNodesBefore(this, pos); }
    getChild(type, before = null, after = null) {
        let r = getChildren(this, type, before, after);
        return r.length ? r[0] : null;
    }
    getChildren(type, before = null, after = null) {
        return getChildren(this, type, before, after);
    }
    /// @internal
    toString() { return this.node.toString(); }
}
function getChildren(node, type, before, after) {
    let cur = node.cursor, result = [];
    if (!cur.firstChild())
        return result;
    if (before != null)
        while (!cur.type.is(before))
            if (!cur.nextSibling())
                return result;
    for (;;) {
        if (after != null && cur.type.is(after))
            return result;
        if (cur.type.is(type))
            result.push(cur.node);
        if (!cur.nextSibling())
            return after == null ? result : [];
    }
}
class BufferContext {
    constructor(parent, buffer, index, start) {
        this.parent = parent;
        this.buffer = buffer;
        this.index = index;
        this.start = start;
    }
}
class BufferNode {
    constructor(context, _parent, index) {
        this.context = context;
        this._parent = _parent;
        this.index = index;
        this.type = context.buffer.set.types[context.buffer.buffer[index]];
    }
    get name() { return this.type.name; }
    get from() { return this.context.start + this.context.buffer.buffer[this.index + 1]; }
    get to() { return this.context.start + this.context.buffer.buffer[this.index + 2]; }
    child(dir, pos, side) {
        let { buffer } = this.context;
        let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, pos - this.context.start, side);
        return index < 0 ? null : new BufferNode(this.context, this, index);
    }
    get firstChild() { return this.child(1, 0, 4 /* DontCare */); }
    get lastChild() { return this.child(-1, 0, 4 /* DontCare */); }
    childAfter(pos) { return this.child(1, pos, 2 /* After */); }
    childBefore(pos) { return this.child(-1, pos, -2 /* Before */); }
    enter(pos, side, overlays, buffers = true) {
        if (!buffers)
            return null;
        let { buffer } = this.context;
        let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], side > 0 ? 1 : -1, pos - this.context.start, side);
        return index < 0 ? null : new BufferNode(this.context, this, index);
    }
    get parent() {
        return this._parent || this.context.parent.nextSignificantParent();
    }
    externalSibling(dir) {
        return this._parent ? null : this.context.parent.nextChild(this.context.index + dir, dir, 0, 4 /* DontCare */);
    }
    get nextSibling() {
        let { buffer } = this.context;
        let after = buffer.buffer[this.index + 3];
        if (after < (this._parent ? buffer.buffer[this._parent.index + 3] : buffer.buffer.length))
            return new BufferNode(this.context, this._parent, after);
        return this.externalSibling(1);
    }
    get prevSibling() {
        let { buffer } = this.context;
        let parentStart = this._parent ? this._parent.index + 4 : 0;
        if (this.index == parentStart)
            return this.externalSibling(-1);
        return new BufferNode(this.context, this._parent, buffer.findChild(parentStart, this.index, -1, 0, 4 /* DontCare */));
    }
    get cursor() { return new TreeCursor(this); }
    get tree() { return null; }
    toTree() {
        let children = [], positions = [];
        let { buffer } = this.context;
        let startI = this.index + 4, endI = buffer.buffer[this.index + 3];
        if (endI > startI) {
            let from = buffer.buffer[this.index + 1], to = buffer.buffer[this.index + 2];
            children.push(buffer.slice(startI, endI, from, to));
            positions.push(0);
        }
        return new Tree(this.type, children, positions, this.to - this.from);
    }
    resolve(pos, side = 0) {
        return resolveNode(this, pos, side, false);
    }
    resolveInner(pos, side = 0) {
        return resolveNode(this, pos, side, true);
    }
    enterUnfinishedNodesBefore(pos) { return enterUnfinishedNodesBefore(this, pos); }
    /// @internal
    toString() { return this.context.buffer.childString(this.index); }
    getChild(type, before = null, after = null) {
        let r = getChildren(this, type, before, after);
        return r.length ? r[0] : null;
    }
    getChildren(type, before = null, after = null) {
        return getChildren(this, type, before, after);
    }
}
/// A tree cursor object focuses on a given node in a syntax tree, and
/// allows you to move to adjacent nodes.
class TreeCursor {
    /// @internal
    constructor(node, 
    /// @internal
    mode = 0) {
        this.mode = mode;
        this.buffer = null;
        this.stack = [];
        this.index = 0;
        this.bufferNode = null;
        if (node instanceof TreeNode) {
            this.yieldNode(node);
        }
        else {
            this._tree = node.context.parent;
            this.buffer = node.context;
            for (let n = node._parent; n; n = n._parent)
                this.stack.unshift(n.index);
            this.bufferNode = node;
            this.yieldBuf(node.index);
        }
    }
    /// Shorthand for `.type.name`.
    get name() { return this.type.name; }
    yieldNode(node) {
        if (!node)
            return false;
        this._tree = node;
        this.type = node.type;
        this.from = node.from;
        this.to = node.to;
        return true;
    }
    yieldBuf(index, type) {
        this.index = index;
        let { start, buffer } = this.buffer;
        this.type = type || buffer.set.types[buffer.buffer[index]];
        this.from = start + buffer.buffer[index + 1];
        this.to = start + buffer.buffer[index + 2];
        return true;
    }
    yield(node) {
        if (!node)
            return false;
        if (node instanceof TreeNode) {
            this.buffer = null;
            return this.yieldNode(node);
        }
        this.buffer = node.context;
        return this.yieldBuf(node.index, node.type);
    }
    /// @internal
    toString() {
        return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
    }
    /// @internal
    enterChild(dir, pos, side) {
        if (!this.buffer)
            return this.yield(this._tree.nextChild(dir < 0 ? this._tree.node.children.length - 1 : 0, dir, pos, side, this.mode));
        let { buffer } = this.buffer;
        let index = buffer.findChild(this.index + 4, buffer.buffer[this.index + 3], dir, pos - this.buffer.start, side);
        if (index < 0)
            return false;
        this.stack.push(this.index);
        return this.yieldBuf(index);
    }
    /// Move the cursor to this node's first child. When this returns
    /// false, the node has no child, and the cursor has not been moved.
    firstChild() { return this.enterChild(1, 0, 4 /* DontCare */); }
    /// Move the cursor to this node's last child.
    lastChild() { return this.enterChild(-1, 0, 4 /* DontCare */); }
    /// Move the cursor to the first child that ends after `pos`.
    childAfter(pos) { return this.enterChild(1, pos, 2 /* After */); }
    /// Move to the last child that starts before `pos`.
    childBefore(pos) { return this.enterChild(-1, pos, -2 /* Before */); }
    /// Move the cursor to the child around `pos`. If side is -1 the
    /// child may end at that position, when 1 it may start there. This
    /// will also enter [overlaid](#common.MountedTree.overlay)
    /// [mounted](#common.NodeProp^mounted) trees unless `overlays` is
    /// set to false.
    enter(pos, side, overlays = true, buffers = true) {
        if (!this.buffer)
            return this.yield(this._tree.enter(pos, side, overlays && !(this.mode & 1 /* Full */), buffers));
        return buffers ? this.enterChild(1, pos, side) : false;
    }
    /// Move to the node's parent node, if this isn't the top node.
    parent() {
        if (!this.buffer)
            return this.yieldNode((this.mode & 1 /* Full */) ? this._tree._parent : this._tree.parent);
        if (this.stack.length)
            return this.yieldBuf(this.stack.pop());
        let parent = (this.mode & 1 /* Full */) ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
        this.buffer = null;
        return this.yieldNode(parent);
    }
    /// @internal
    sibling(dir) {
        if (!this.buffer)
            return !this._tree._parent ? false
                : this.yield(this._tree.index < 0 ? null
                    : this._tree._parent.nextChild(this._tree.index + dir, dir, 0, 4 /* DontCare */, this.mode));
        let { buffer } = this.buffer, d = this.stack.length - 1;
        if (dir < 0) {
            let parentStart = d < 0 ? 0 : this.stack[d] + 4;
            if (this.index != parentStart)
                return this.yieldBuf(buffer.findChild(parentStart, this.index, -1, 0, 4 /* DontCare */));
        }
        else {
            let after = buffer.buffer[this.index + 3];
            if (after < (d < 0 ? buffer.buffer.length : buffer.buffer[this.stack[d] + 3]))
                return this.yieldBuf(after);
        }
        return d < 0 ? this.yield(this.buffer.parent.nextChild(this.buffer.index + dir, dir, 0, 4 /* DontCare */, this.mode)) : false;
    }
    /// Move to this node's next sibling, if any.
    nextSibling() { return this.sibling(1); }
    /// Move to this node's previous sibling, if any.
    prevSibling() { return this.sibling(-1); }
    atLastNode(dir) {
        let index, parent, { buffer } = this;
        if (buffer) {
            if (dir > 0) {
                if (this.index < buffer.buffer.buffer.length)
                    return false;
            }
            else {
                for (let i = 0; i < this.index; i++)
                    if (buffer.buffer.buffer[i + 3] < this.index)
                        return false;
            }
            ({ index, parent } = buffer);
        }
        else {
            ({ index, _parent: parent } = this._tree);
        }
        for (; parent; { index, _parent: parent } = parent) {
            if (index > -1)
                for (let i = index + dir, e = dir < 0 ? -1 : parent.node.children.length; i != e; i += dir) {
                    let child = parent.node.children[i];
                    if ((this.mode & 1 /* Full */) || child instanceof TreeBuffer || !child.type.isAnonymous || hasChild(child))
                        return false;
                }
        }
        return true;
    }
    move(dir, enter) {
        if (enter && this.enterChild(dir, 0, 4 /* DontCare */))
            return true;
        for (;;) {
            if (this.sibling(dir))
                return true;
            if (this.atLastNode(dir) || !this.parent())
                return false;
        }
    }
    /// Move to the next node in a
    /// [pre-order](https://en.wikipedia.org/wiki/Tree_traversal#Pre-order_(NLR))
    /// traversal, going from a node to its first child or, if the
    /// current node is empty or `enter` is false, its next sibling or
    /// the next sibling of the first parent node that has one.
    next(enter = true) { return this.move(1, enter); }
    /// Move to the next node in a last-to-first pre-order traveral. A
    /// node is followed by its last child or, if it has none, its
    /// previous sibling or the previous sibling of the first parent
    /// node that has one.
    prev(enter = true) { return this.move(-1, enter); }
    /// Move the cursor to the innermost node that covers `pos`. If
    /// `side` is -1, it will enter nodes that end at `pos`. If it is 1,
    /// it will enter nodes that start at `pos`.
    moveTo(pos, side = 0) {
        // Move up to a node that actually holds the position, if possible
        while (this.from == this.to ||
            (side < 1 ? this.from >= pos : this.from > pos) ||
            (side > -1 ? this.to <= pos : this.to < pos))
            if (!this.parent())
                break;
        // Then scan down into child nodes as far as possible
        while (this.enterChild(1, pos, side)) { }
        return this;
    }
    /// Get a [syntax node](#common.SyntaxNode) at the cursor's current
    /// position.
    get node() {
        if (!this.buffer)
            return this._tree;
        let cache = this.bufferNode, result = null, depth = 0;
        if (cache && cache.context == this.buffer) {
            scan: for (let index = this.index, d = this.stack.length; d >= 0;) {
                for (let c = cache; c; c = c._parent)
                    if (c.index == index) {
                        if (index == this.index)
                            return c;
                        result = c;
                        depth = d + 1;
                        break scan;
                    }
                index = this.stack[--d];
            }
        }
        for (let i = depth; i < this.stack.length; i++)
            result = new BufferNode(this.buffer, result, this.stack[i]);
        return this.bufferNode = new BufferNode(this.buffer, result, this.index);
    }
    /// Get the [tree](#common.Tree) that represents the current node, if
    /// any. Will return null when the node is in a [tree
    /// buffer](#common.TreeBuffer).
    get tree() {
        return this.buffer ? null : this._tree.node;
    }
}
function hasChild(tree) {
    return tree.children.some(ch => ch instanceof TreeBuffer || !ch.type.isAnonymous || hasChild(ch));
}
function buildTree(data) {
    var _a;
    let { buffer, nodeSet, maxBufferLength = DefaultBufferLength, reused = [], minRepeatType = nodeSet.types.length } = data;
    let cursor = Array.isArray(buffer) ? new FlatBufferCursor(buffer, buffer.length) : buffer;
    let types = nodeSet.types;
    let contextHash = 0, lookAhead = 0;
    function takeNode(parentStart, minPos, children, positions, inRepeat) {
        let { id, start, end, size } = cursor;
        let lookAheadAtStart = lookAhead;
        while (size < 0) {
            cursor.next();
            if (size == -1 /* Reuse */) {
                let node = reused[id];
                children.push(node);
                positions.push(start - parentStart);
                return;
            }
            else if (size == -3 /* ContextChange */) { // Context change
                contextHash = id;
                return;
            }
            else if (size == -4 /* LookAhead */) {
                lookAhead = id;
                return;
            }
            else {
                throw new RangeError(`Unrecognized record size: ${size}`);
            }
        }
        let type = types[id], node, buffer;
        let startPos = start - parentStart;
        if (end - start <= maxBufferLength && (buffer = findBufferSize(cursor.pos - minPos, inRepeat))) {
            // Small enough for a buffer, and no reused nodes inside
            let data = new Uint16Array(buffer.size - buffer.skip);
            let endPos = cursor.pos - buffer.size, index = data.length;
            while (cursor.pos > endPos)
                index = copyToBuffer(buffer.start, data, index);
            node = new TreeBuffer(data, end - buffer.start, nodeSet);
            startPos = buffer.start - parentStart;
        }
        else { // Make it a node
            let endPos = cursor.pos - size;
            cursor.next();
            let localChildren = [], localPositions = [];
            let localInRepeat = id >= minRepeatType ? id : -1;
            let lastGroup = 0, lastEnd = end;
            while (cursor.pos > endPos) {
                if (localInRepeat >= 0 && cursor.id == localInRepeat && cursor.size >= 0) {
                    if (cursor.end <= lastEnd - maxBufferLength) {
                        makeRepeatLeaf(localChildren, localPositions, start, lastGroup, cursor.end, lastEnd, localInRepeat, lookAheadAtStart);
                        lastGroup = localChildren.length;
                        lastEnd = cursor.end;
                    }
                    cursor.next();
                }
                else {
                    takeNode(start, endPos, localChildren, localPositions, localInRepeat);
                }
            }
            if (localInRepeat >= 0 && lastGroup > 0 && lastGroup < localChildren.length)
                makeRepeatLeaf(localChildren, localPositions, start, lastGroup, start, lastEnd, localInRepeat, lookAheadAtStart);
            localChildren.reverse();
            localPositions.reverse();
            if (localInRepeat > -1 && lastGroup > 0) {
                let make = makeBalanced(type);
                node = balanceRange(type, localChildren, localPositions, 0, localChildren.length, 0, end - start, make, make);
            }
            else {
                node = makeTree(type, localChildren, localPositions, end - start, lookAheadAtStart - end);
            }
        }
        children.push(node);
        positions.push(startPos);
    }
    function makeBalanced(type) {
        return (children, positions, length) => {
            let lookAhead = 0, lastI = children.length - 1, last, lookAheadProp;
            if (lastI >= 0 && (last = children[lastI]) instanceof Tree) {
                if (!lastI && last.type == type && last.length == length)
                    return last;
                if (lookAheadProp = last.prop(NodeProp.lookAhead))
                    lookAhead = positions[lastI] + last.length + lookAheadProp;
            }
            return makeTree(type, children, positions, length, lookAhead);
        };
    }
    function makeRepeatLeaf(children, positions, base, i, from, to, type, lookAhead) {
        let localChildren = [], localPositions = [];
        while (children.length > i) {
            localChildren.push(children.pop());
            localPositions.push(positions.pop() + base - from);
        }
        children.push(makeTree(nodeSet.types[type], localChildren, localPositions, to - from, lookAhead - to));
        positions.push(from - base);
    }
    function makeTree(type, children, positions, length, lookAhead = 0, props) {
        if (contextHash) {
            let pair = [NodeProp.contextHash, contextHash];
            props = props ? [pair].concat(props) : [pair];
        }
        if (lookAhead > 25) {
            let pair = [NodeProp.lookAhead, lookAhead];
            props = props ? [pair].concat(props) : [pair];
        }
        return new Tree(type, children, positions, length, props);
    }
    function findBufferSize(maxSize, inRepeat) {
        // Scan through the buffer to find previous siblings that fit
        // together in a TreeBuffer, and don't contain any reused nodes
        // (which can't be stored in a buffer).
        // If `inRepeat` is > -1, ignore node boundaries of that type for
        // nesting, but make sure the end falls either at the start
        // (`maxSize`) or before such a node.
        let fork = cursor.fork();
        let size = 0, start = 0, skip = 0, minStart = fork.end - maxBufferLength;
        let result = { size: 0, start: 0, skip: 0 };
        scan: for (let minPos = fork.pos - maxSize; fork.pos > minPos;) {
            let nodeSize = fork.size;
            // Pretend nested repeat nodes of the same type don't exist
            if (fork.id == inRepeat && nodeSize >= 0) {
                // Except that we store the current state as a valid return
                // value.
                result.size = size;
                result.start = start;
                result.skip = skip;
                skip += 4;
                size += 4;
                fork.next();
                continue;
            }
            let startPos = fork.pos - nodeSize;
            if (nodeSize < 0 || startPos < minPos || fork.start < minStart)
                break;
            let localSkipped = fork.id >= minRepeatType ? 4 : 0;
            let nodeStart = fork.start;
            fork.next();
            while (fork.pos > startPos) {
                if (fork.size < 0) {
                    if (fork.size == -3 /* ContextChange */)
                        localSkipped += 4;
                    else
                        break scan;
                }
                else if (fork.id >= minRepeatType) {
                    localSkipped += 4;
                }
                fork.next();
            }
            start = nodeStart;
            size += nodeSize;
            skip += localSkipped;
        }
        if (inRepeat < 0 || size == maxSize) {
            result.size = size;
            result.start = start;
            result.skip = skip;
        }
        return result.size > 4 ? result : undefined;
    }
    function copyToBuffer(bufferStart, buffer, index) {
        let { id, start, end, size } = cursor;
        cursor.next();
        if (size >= 0 && id < minRepeatType) {
            let startIndex = index;
            if (size > 4) {
                let endPos = cursor.pos - (size - 4);
                while (cursor.pos > endPos)
                    index = copyToBuffer(bufferStart, buffer, index);
            }
            buffer[--index] = startIndex;
            buffer[--index] = end - bufferStart;
            buffer[--index] = start - bufferStart;
            buffer[--index] = id;
        }
        else if (size == -3 /* ContextChange */) {
            contextHash = id;
        }
        else if (size == -4 /* LookAhead */) {
            lookAhead = id;
        }
        return index;
    }
    let children = [], positions = [];
    while (cursor.pos > 0)
        takeNode(data.start || 0, data.bufferStart || 0, children, positions, -1);
    let length = (_a = data.length) !== null && _a !== void 0 ? _a : (children.length ? positions[0] + children[0].length : 0);
    return new Tree(types[data.topID], children.reverse(), positions.reverse(), length);
}
const nodeSizeCache = new WeakMap;
function nodeSize(balanceType, node) {
    if (!balanceType.isAnonymous || node instanceof TreeBuffer || node.type != balanceType)
        return 1;
    let size = nodeSizeCache.get(node);
    if (size == null) {
        size = 1;
        for (let child of node.children) {
            if (child.type != balanceType || !(child instanceof Tree)) {
                size = 1;
                break;
            }
            size += nodeSize(balanceType, child);
        }
        nodeSizeCache.set(node, size);
    }
    return size;
}
function balanceRange(
// The type the balanced tree's inner nodes.
balanceType, 
// The direct children and their positions
children, positions, 
// The index range in children/positions to use
from, to, 
// The start position of the nodes, relative to their parent.
start, 
// Length of the outer node
length, 
// Function to build the top node of the balanced tree
mkTop, 
// Function to build internal nodes for the balanced tree
mkTree) {
    let total = 0;
    for (let i = from; i < to; i++)
        total += nodeSize(balanceType, children[i]);
    let maxChild = Math.ceil((total * 1.5) / 8 /* BranchFactor */);
    let localChildren = [], localPositions = [];
    function divide(children, positions, from, to, offset) {
        for (let i = from; i < to;) {
            let groupFrom = i, groupStart = positions[i], groupSize = nodeSize(balanceType, children[i]);
            i++;
            for (; i < to; i++) {
                let nextSize = nodeSize(balanceType, children[i]);
                if (groupSize + nextSize >= maxChild)
                    break;
                groupSize += nextSize;
            }
            if (i == groupFrom + 1) {
                if (groupSize > maxChild) {
                    let only = children[groupFrom]; // Only trees can have a size > 1
                    divide(only.children, only.positions, 0, only.children.length, positions[groupFrom] + offset);
                    continue;
                }
                localChildren.push(children[groupFrom]);
            }
            else {
                let length = positions[i - 1] + children[i - 1].length - groupStart;
                localChildren.push(balanceRange(balanceType, children, positions, groupFrom, i, groupStart, length, null, mkTree));
            }
            localPositions.push(groupStart + offset - start);
        }
    }
    divide(children, positions, from, to, 0);
    return (mkTop || mkTree)(localChildren, localPositions, length);
}

/// Tree fragments are used during [incremental
/// parsing](#common.Parser.startParse) to track parts of old trees
/// that can be reused in a new parse. An array of fragments is used
/// to track regions of an old tree whose nodes might be reused in new
/// parses. Use the static
/// [`applyChanges`](#common.TreeFragment^applyChanges) method to
/// update fragments for document changes.
class TreeFragment {
    /// Construct a tree fragment.
    constructor(
    /// The start of the unchanged range pointed to by this fragment.
    /// This refers to an offset in the _updated_ document (as opposed
    /// to the original tree).
    from, 
    /// The end of the unchanged range.
    to, 
    /// The tree that this fragment is based on.
    tree, 
    /// The offset between the fragment's tree and the document that
    /// this fragment can be used against. Add this when going from
    /// document to tree positions, subtract it to go from tree to
    /// document positions.
    offset, openStart = false, openEnd = false) {
        this.from = from;
        this.to = to;
        this.tree = tree;
        this.offset = offset;
        this.open = (openStart ? 1 /* Start */ : 0) | (openEnd ? 2 /* End */ : 0);
    }
    /// Whether the start of the fragment represents the start of a
    /// parse, or the end of a change. (In the second case, it may not
    /// be safe to reuse some nodes at the start, depending on the
    /// parsing algorithm.)
    get openStart() { return (this.open & 1 /* Start */) > 0; }
    /// Whether the end of the fragment represents the end of a
    /// full-document parse, or the start of a change.
    get openEnd() { return (this.open & 2 /* End */) > 0; }
    /// Create a set of fragments from a freshly parsed tree, or update
    /// an existing set of fragments by replacing the ones that overlap
    /// with a tree with content from the new tree. When `partial` is
    /// true, the parse is treated as incomplete, and the resulting
    /// fragment has [`openEnd`](#common.TreeFragment.openEnd) set to
    /// true.
    static addTree(tree, fragments = [], partial = false) {
        let result = [new TreeFragment(0, tree.length, tree, 0, false, partial)];
        for (let f of fragments)
            if (f.to > tree.length)
                result.push(f);
        return result;
    }
    /// Apply a set of edits to an array of fragments, removing or
    /// splitting fragments as necessary to remove edited ranges, and
    /// adjusting offsets for fragments that moved.
    static applyChanges(fragments, changes, minGap = 128) {
        if (!changes.length)
            return fragments;
        let result = [];
        let fI = 1, nextF = fragments.length ? fragments[0] : null;
        for (let cI = 0, pos = 0, off = 0;; cI++) {
            let nextC = cI < changes.length ? changes[cI] : null;
            let nextPos = nextC ? nextC.fromA : 1e9;
            if (nextPos - pos >= minGap)
                while (nextF && nextF.from < nextPos) {
                    let cut = nextF;
                    if (pos >= cut.from || nextPos <= cut.to || off) {
                        let fFrom = Math.max(cut.from, pos) - off, fTo = Math.min(cut.to, nextPos) - off;
                        cut = fFrom >= fTo ? null : new TreeFragment(fFrom, fTo, cut.tree, cut.offset + off, cI > 0, !!nextC);
                    }
                    if (cut)
                        result.push(cut);
                    if (nextF.to > nextPos)
                        break;
                    nextF = fI < fragments.length ? fragments[fI++] : null;
                }
            if (!nextC)
                break;
            pos = nextC.toA;
            off = nextC.toA - nextC.toB;
        }
        return result;
    }
}
/// A superclass that parsers should extend.
class Parser {
    /// Start a parse, returning a [partial parse](#common.PartialParse)
    /// object. [`fragments`](#common.TreeFragment) can be passed in to
    /// make the parse incremental.
    ///
    /// By default, the entire input is parsed. You can pass `ranges`,
    /// which should be a sorted array of non-empty, non-overlapping
    /// ranges, to parse only those ranges. The tree returned in that
    /// case will start at `ranges[0].from`.
    startParse(input, fragments, ranges) {
        if (typeof input == "string")
            input = new StringInput(input);
        ranges = !ranges ? [new Range(0, input.length)] : ranges.length ? ranges.map(r => new Range(r.from, r.to)) : [new Range(0, 0)];
        return this.createParse(input, fragments || [], ranges);
    }
    /// Run a full parse, returning the resulting tree.
    parse(input, fragments, ranges) {
        let parse = this.startParse(input, fragments, ranges);
        for (;;) {
            let done = parse.advance();
            if (done)
                return done;
        }
    }
}
class StringInput {
    constructor(string) {
        this.string = string;
    }
    get length() { return this.string.length; }
    chunk(from) { return this.string.slice(from); }
    get lineChunks() { return false; }
    read(from, to) { return this.string.slice(from, to); }
}

/// Create a parse wrapper that, after the inner parse completes,
/// scans its tree for mixed language regions with the `nest`
/// function, runs the resulting [inner parses](#common.NestedParse),
/// and then [mounts](#common.NodeProp^mounted) their results onto the
/// tree.
///
/// The nesting function is passed a cursor to provide context for a
/// node, but _should not_ move that cursor, only inspect its
/// properties and optionally access its
/// [node object](#common.TreeCursor.node).
function parseMixed(nest) {
    return (parse, input, fragments, ranges) => new MixedParse(parse, nest, input, fragments, ranges);
}
class InnerParse {
    constructor(parser, parse, overlay, target, ranges) {
        this.parser = parser;
        this.parse = parse;
        this.overlay = overlay;
        this.target = target;
        this.ranges = ranges;
    }
}
class ActiveOverlay {
    constructor(parser, predicate, mounts, index, start, target, prev) {
        this.parser = parser;
        this.predicate = predicate;
        this.mounts = mounts;
        this.index = index;
        this.start = start;
        this.target = target;
        this.prev = prev;
        this.depth = 0;
        this.ranges = [];
    }
}
const stoppedInner = new NodeProp({ perNode: true });
class MixedParse {
    constructor(base, nest, input, fragments, ranges) {
        this.nest = nest;
        this.input = input;
        this.fragments = fragments;
        this.ranges = ranges;
        this.inner = [];
        this.innerDone = 0;
        this.baseTree = null;
        this.stoppedAt = null;
        this.baseParse = base;
    }
    advance() {
        if (this.baseParse) {
            let done = this.baseParse.advance();
            if (!done)
                return null;
            this.baseParse = null;
            this.baseTree = done;
            this.startInner();
            if (this.stoppedAt != null)
                for (let inner of this.inner)
                    inner.parse.stopAt(this.stoppedAt);
        }
        if (this.innerDone == this.inner.length) {
            let result = this.baseTree;
            if (this.stoppedAt != null)
                result = new Tree(result.type, result.children, result.positions, result.length, result.propValues.concat([[stoppedInner, this.stoppedAt]]));
            return result;
        }
        let inner = this.inner[this.innerDone], done = inner.parse.advance();
        if (done) {
            this.innerDone++;
            // This is a somewhat dodgy but super helpful hack where we
            // patch up nodes created by the inner parse (and thus
            // presumably not aliased anywhere else) to hold the information
            // about the inner parse.
            let props = Object.assign(Object.create(null), inner.target.props);
            props[NodeProp.mounted.id] = new MountedTree(done, inner.overlay, inner.parser);
            inner.target.props = props;
        }
        return null;
    }
    get parsedPos() {
        if (this.baseParse)
            return 0;
        let pos = this.input.length;
        for (let i = this.innerDone; i < this.inner.length; i++) {
            if (this.inner[i].ranges[0].from < pos)
                pos = Math.min(pos, this.inner[i].parse.parsedPos);
        }
        return pos;
    }
    stopAt(pos) {
        this.stoppedAt = pos;
        if (this.baseParse)
            this.baseParse.stopAt(pos);
        else
            for (let i = this.innerDone; i < this.inner.length; i++)
                this.inner[i].parse.stopAt(pos);
    }
    startInner() {
        let fragmentCursor = new FragmentCursor(this.fragments);
        let overlay = null;
        let covered = null;
        let cursor = new TreeCursor(new TreeNode(this.baseTree, this.ranges[0].from, 0, null), 1 /* Full */);
        scan: for (let nest, isCovered; this.stoppedAt == null || cursor.from < this.stoppedAt;) {
            let enter = true, range;
            if (fragmentCursor.hasNode(cursor)) {
                if (overlay) {
                    let match = overlay.mounts.find(m => m.frag.from <= cursor.from && m.frag.to >= cursor.to && m.mount.overlay);
                    if (match)
                        for (let r of match.mount.overlay) {
                            let from = r.from + match.pos, to = r.to + match.pos;
                            if (from >= cursor.from && to <= cursor.to && !overlay.ranges.some(r => r.from < to && r.to > from))
                                overlay.ranges.push({ from, to });
                        }
                }
                enter = false;
            }
            else if (covered && (isCovered = checkCover(covered.ranges, cursor.from, cursor.to))) {
                enter = isCovered != 2 /* Full */;
            }
            else if (!cursor.type.isAnonymous && cursor.from < cursor.to && (nest = this.nest(cursor, this.input))) {
                if (!cursor.tree)
                    materialize(cursor);
                let oldMounts = fragmentCursor.findMounts(cursor.from, nest.parser);
                if (typeof nest.overlay == "function") {
                    overlay = new ActiveOverlay(nest.parser, nest.overlay, oldMounts, this.inner.length, cursor.from, cursor.tree, overlay);
                }
                else {
                    let ranges = punchRanges(this.ranges, nest.overlay || [new Range(cursor.from, cursor.to)]);
                    if (ranges.length)
                        this.inner.push(new InnerParse(nest.parser, nest.parser.startParse(this.input, enterFragments(oldMounts, ranges), ranges), nest.overlay ? nest.overlay.map(r => new Range(r.from - cursor.from, r.to - cursor.from)) : null, cursor.tree, ranges));
                    if (!nest.overlay)
                        enter = false;
                    else if (ranges.length)
                        covered = { ranges, depth: 0, prev: covered };
                }
            }
            else if (overlay && (range = overlay.predicate(cursor))) {
                if (range === true)
                    range = new Range(cursor.from, cursor.to);
                if (range.from < range.to)
                    overlay.ranges.push(range);
            }
            if (enter && cursor.firstChild()) {
                if (overlay)
                    overlay.depth++;
                if (covered)
                    covered.depth++;
            }
            else {
                for (;;) {
                    if (cursor.nextSibling())
                        break;
                    if (!cursor.parent())
                        break scan;
                    if (overlay && !--overlay.depth) {
                        let ranges = punchRanges(this.ranges, overlay.ranges);
                        if (ranges.length)
                            this.inner.splice(overlay.index, 0, new InnerParse(overlay.parser, overlay.parser.startParse(this.input, enterFragments(overlay.mounts, ranges), ranges), overlay.ranges.map(r => new Range(r.from - overlay.start, r.to - overlay.start)), overlay.target, ranges));
                        overlay = overlay.prev;
                    }
                    if (covered && !--covered.depth)
                        covered = covered.prev;
                }
            }
        }
    }
}
function checkCover(covered, from, to) {
    for (let range of covered) {
        if (range.from >= to)
            break;
        if (range.to > from)
            return range.from <= from && range.to >= to ? 2 /* Full */ : 1 /* Partial */;
    }
    return 0 /* None */;
}
// Take a piece of buffer and convert it into a stand-alone
// TreeBuffer.
function sliceBuf(buf, startI, endI, nodes, positions, off) {
    if (startI < endI) {
        let from = buf.buffer[startI + 1], to = buf.buffer[endI - 2];
        nodes.push(buf.slice(startI, endI, from, to));
        positions.push(from - off);
    }
}
// This function takes a node that's in a buffer, and converts it, and
// its parent buffer nodes, into a Tree. This is again acting on the
// assumption that the trees and buffers have been constructed by the
// parse that was ran via the mix parser, and thus aren't shared with
// any other code, making violations of the immutability safe.
function materialize(cursor) {
    let { node } = cursor, depth = 0;
    // Scan up to the nearest tree
    do {
        cursor.parent();
        depth++;
    } while (!cursor.tree);
    // Find the index of the buffer in that tree
    let i = 0, base = cursor.tree, off = 0;
    for (;; i++) {
        off = base.positions[i] + cursor.from;
        if (off <= node.from && off + base.children[i].length >= node.to)
            break;
    }
    let buf = base.children[i], b = buf.buffer;
    // Split a level in the buffer, putting the nodes before and after
    // the child that contains `node` into new buffers.
    function split(startI, endI, type, innerOffset, length) {
        let i = startI;
        while (b[i + 2] + off <= node.from)
            i = b[i + 3];
        let children = [], positions = [];
        sliceBuf(buf, startI, i, children, positions, innerOffset);
        let from = b[i + 1], to = b[i + 2];
        let isTarget = from + off == node.from && to + off == node.to && b[i] == node.type.id;
        children.push(isTarget ? node.toTree() : split(i + 4, b[i + 3], buf.set.types[b[i]], from, to - from));
        positions.push(from - innerOffset);
        sliceBuf(buf, b[i + 3], endI, children, positions, innerOffset);
        return new Tree(type, children, positions, length);
    }
    base.children[i] = split(0, b.length, NodeType.none, 0, buf.length);
    // Move the cursor back to the target node
    for (let d = 0; d <= depth; d++)
        cursor.childAfter(node.from);
}
class StructureCursor {
    constructor(root, offset) {
        this.offset = offset;
        this.done = false;
        this.cursor = root.fullCursor();
    }
    // Move to the first node (in pre-order) that starts at or after `pos`.
    moveTo(pos) {
        let { cursor } = this, p = pos - this.offset;
        while (!this.done && cursor.from < p) {
            if (cursor.to >= pos && cursor.enter(p, 1, false, false)) ;
            else if (!cursor.next(false))
                this.done = true;
        }
    }
    hasNode(cursor) {
        this.moveTo(cursor.from);
        if (!this.done && this.cursor.from + this.offset == cursor.from && this.cursor.tree) {
            for (let tree = this.cursor.tree;;) {
                if (tree == cursor.tree)
                    return true;
                if (tree.children.length && tree.positions[0] == 0 && tree.children[0] instanceof Tree)
                    tree = tree.children[0];
                else
                    break;
            }
        }
        return false;
    }
}
class FragmentCursor {
    constructor(fragments) {
        var _a;
        this.fragments = fragments;
        this.curTo = 0;
        this.fragI = 0;
        if (fragments.length) {
            let first = this.curFrag = fragments[0];
            this.curTo = (_a = first.tree.prop(stoppedInner)) !== null && _a !== void 0 ? _a : first.to;
            this.inner = new StructureCursor(first.tree, -first.offset);
        }
        else {
            this.curFrag = this.inner = null;
        }
    }
    hasNode(node) {
        while (this.curFrag && node.from >= this.curTo)
            this.nextFrag();
        return this.curFrag && this.curFrag.from <= node.from && this.curTo >= node.to && this.inner.hasNode(node);
    }
    nextFrag() {
        var _a;
        this.fragI++;
        if (this.fragI == this.fragments.length) {
            this.curFrag = this.inner = null;
        }
        else {
            let frag = this.curFrag = this.fragments[this.fragI];
            this.curTo = (_a = frag.tree.prop(stoppedInner)) !== null && _a !== void 0 ? _a : frag.to;
            this.inner = new StructureCursor(frag.tree, -frag.offset);
        }
    }
    findMounts(pos, parser) {
        var _a;
        let result = [];
        if (this.inner) {
            this.inner.cursor.moveTo(pos, 1);
            for (let pos = this.inner.cursor.node; pos; pos = pos.parent) {
                let mount = (_a = pos.tree) === null || _a === void 0 ? void 0 : _a.prop(NodeProp.mounted);
                if (mount && mount.parser == parser) {
                    for (let i = this.fragI; i < this.fragments.length; i++) {
                        let frag = this.fragments[i];
                        if (frag.from >= pos.to)
                            break;
                        if (frag.tree == this.curFrag.tree)
                            result.push({
                                frag,
                                pos: pos.from - frag.offset,
                                mount
                            });
                    }
                }
            }
        }
        return result;
    }
}
function punchRanges(outer, ranges) {
    let copy = null, current = ranges;
    for (let i = 1, j = 0; i < outer.length; i++) {
        let gapFrom = outer[i - 1].to, gapTo = outer[i].from;
        for (; j < current.length; j++) {
            let r = current[j];
            if (r.from >= gapTo)
                break;
            if (r.to <= gapFrom)
                continue;
            if (!copy)
                current = copy = ranges.slice();
            if (r.from < gapFrom) {
                copy[j] = new Range(r.from, gapFrom);
                if (r.to > gapTo)
                    copy.splice(j + 1, 0, new Range(gapTo, r.to));
            }
            else if (r.to > gapTo) {
                copy[j--] = new Range(gapTo, r.to);
            }
            else {
                copy.splice(j--, 1);
            }
        }
    }
    return current;
}
function findCoverChanges(a, b, from, to) {
    let iA = 0, iB = 0, inA = false, inB = false, pos = -1e9;
    let result = [];
    for (;;) {
        let nextA = iA == a.length ? 1e9 : inA ? a[iA].to : a[iA].from;
        let nextB = iB == b.length ? 1e9 : inB ? b[iB].to : b[iB].from;
        if (inA != inB) {
            let start = Math.max(pos, from), end = Math.min(nextA, nextB, to);
            if (start < end)
                result.push(new Range(start, end));
        }
        pos = Math.min(nextA, nextB);
        if (pos == 1e9)
            break;
        if (nextA == pos) {
            if (!inA)
                inA = true;
            else {
                inA = false;
                iA++;
            }
        }
        if (nextB == pos) {
            if (!inB)
                inB = true;
            else {
                inB = false;
                iB++;
            }
        }
    }
    return result;
}
// Given a number of fragments for the outer tree, and a set of ranges
// to parse, find fragments for inner trees mounted around those
// ranges, if any.
function enterFragments(mounts, ranges) {
    let result = [];
    for (let { pos, mount, frag } of mounts) {
        let startPos = pos + (mount.overlay ? mount.overlay[0].from : 0), endPos = startPos + mount.tree.length;
        let from = Math.max(frag.from, startPos), to = Math.min(frag.to, endPos);
        if (mount.overlay) {
            let overlay = mount.overlay.map(r => new Range(r.from + pos, r.to + pos));
            let changes = findCoverChanges(ranges, overlay, from, to);
            for (let i = 0, pos = from;; i++) {
                let last = i == changes.length, end = last ? to : changes[i].from;
                if (end > pos)
                    result.push(new TreeFragment(pos, end, mount.tree, -startPos, frag.from >= pos, frag.to <= end));
                if (last)
                    break;
                pos = changes[i].to;
            }
        }
        else {
            result.push(new TreeFragment(from, to, mount.tree, -startPos, frag.from >= startPos, frag.to <= endPos));
        }
    }
    return result;
}



;// CONCATENATED MODULE: ./.yarn/cache/@lezer-lr-npm-0.15.8-8c481c39cd-e741225d6a.zip/node_modules/@lezer/lr/dist/index.js


/// A parse stack. These are used internally by the parser to track
/// parsing progress. They also provide some properties and methods
/// that external code such as a tokenizer can use to get information
/// about the parse state.
class Stack {
    /// @internal
    constructor(
    /// The parse that this stack is part of @internal
    p, 
    /// Holds state, input pos, buffer index triplets for all but the
    /// top state @internal
    stack, 
    /// The current parse state @internal
    state, 
    // The position at which the next reduce should take place. This
    // can be less than `this.pos` when skipped expressions have been
    // added to the stack (which should be moved outside of the next
    // reduction)
    /// @internal
    reducePos, 
    /// The input position up to which this stack has parsed.
    pos, 
    /// The dynamic score of the stack, including dynamic precedence
    /// and error-recovery penalties
    /// @internal
    score, 
    // The output buffer. Holds (type, start, end, size) quads
    // representing nodes created by the parser, where `size` is
    // amount of buffer array entries covered by this node.
    /// @internal
    buffer, 
    // The base offset of the buffer. When stacks are split, the split
    // instance shared the buffer history with its parent up to
    // `bufferBase`, which is the absolute offset (including the
    // offset of previous splits) into the buffer at which this stack
    // starts writing.
    /// @internal
    bufferBase, 
    /// @internal
    curContext, 
    /// @internal
    lookAhead = 0, 
    // A parent stack from which this was split off, if any. This is
    // set up so that it always points to a stack that has some
    // additional buffer content, never to a stack with an equal
    // `bufferBase`.
    /// @internal
    parent) {
        this.p = p;
        this.stack = stack;
        this.state = state;
        this.reducePos = reducePos;
        this.pos = pos;
        this.score = score;
        this.buffer = buffer;
        this.bufferBase = bufferBase;
        this.curContext = curContext;
        this.lookAhead = lookAhead;
        this.parent = parent;
    }
    /// @internal
    toString() {
        return `[${this.stack.filter((_, i) => i % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? "!" + this.score : ""}`;
    }
    // Start an empty stack
    /// @internal
    static start(p, state, pos = 0) {
        let cx = p.parser.context;
        return new Stack(p, [], state, pos, pos, 0, [], 0, cx ? new StackContext(cx, cx.start) : null, 0, null);
    }
    /// The stack's current [context](#lr.ContextTracker) value, if
    /// any. Its type will depend on the context tracker's type
    /// parameter, or it will be `null` if there is no context
    /// tracker.
    get context() { return this.curContext ? this.curContext.context : null; }
    // Push a state onto the stack, tracking its start position as well
    // as the buffer base at that point.
    /// @internal
    pushState(state, start) {
        this.stack.push(this.state, start, this.bufferBase + this.buffer.length);
        this.state = state;
    }
    // Apply a reduce action
    /// @internal
    reduce(action) {
        let depth = action >> 19 /* ReduceDepthShift */, type = action & 65535 /* ValueMask */;
        let { parser } = this.p;
        let dPrec = parser.dynamicPrecedence(type);
        if (dPrec)
            this.score += dPrec;
        if (depth == 0) {
            this.pushState(parser.getGoto(this.state, type, true), this.reducePos);
            // Zero-depth reductions are a special case—they add stuff to
            // the stack without popping anything off.
            if (type < parser.minRepeatTerm)
                this.storeNode(type, this.reducePos, this.reducePos, 4, true);
            this.reduceContext(type, this.reducePos);
            return;
        }
        // Find the base index into `this.stack`, content after which will
        // be dropped. Note that with `StayFlag` reductions we need to
        // consume two extra frames (the dummy parent node for the skipped
        // expression and the state that we'll be staying in, which should
        // be moved to `this.state`).
        let base = this.stack.length - ((depth - 1) * 3) - (action & 262144 /* StayFlag */ ? 6 : 0);
        let start = this.stack[base - 2];
        let bufferBase = this.stack[base - 1], count = this.bufferBase + this.buffer.length - bufferBase;
        // Store normal terms or `R -> R R` repeat reductions
        if (type < parser.minRepeatTerm || (action & 131072 /* RepeatFlag */)) {
            let pos = parser.stateFlag(this.state, 1 /* Skipped */) ? this.pos : this.reducePos;
            this.storeNode(type, start, pos, count + 4, true);
        }
        if (action & 262144 /* StayFlag */) {
            this.state = this.stack[base];
        }
        else {
            let baseStateID = this.stack[base - 3];
            this.state = parser.getGoto(baseStateID, type, true);
        }
        while (this.stack.length > base)
            this.stack.pop();
        this.reduceContext(type, start);
    }
    // Shift a value into the buffer
    /// @internal
    storeNode(term, start, end, size = 4, isReduce = false) {
        if (term == 0 /* Err */) { // Try to omit/merge adjacent error nodes
            let cur = this, top = this.buffer.length;
            if (top == 0 && cur.parent) {
                top = cur.bufferBase - cur.parent.bufferBase;
                cur = cur.parent;
            }
            if (top > 0 && cur.buffer[top - 4] == 0 /* Err */ && cur.buffer[top - 1] > -1) {
                if (start == end)
                    return;
                if (cur.buffer[top - 2] >= start) {
                    cur.buffer[top - 2] = end;
                    return;
                }
            }
        }
        if (!isReduce || this.pos == end) { // Simple case, just append
            this.buffer.push(term, start, end, size);
        }
        else { // There may be skipped nodes that have to be moved forward
            let index = this.buffer.length;
            if (index > 0 && this.buffer[index - 4] != 0 /* Err */)
                while (index > 0 && this.buffer[index - 2] > end) {
                    // Move this record forward
                    this.buffer[index] = this.buffer[index - 4];
                    this.buffer[index + 1] = this.buffer[index - 3];
                    this.buffer[index + 2] = this.buffer[index - 2];
                    this.buffer[index + 3] = this.buffer[index - 1];
                    index -= 4;
                    if (size > 4)
                        size -= 4;
                }
            this.buffer[index] = term;
            this.buffer[index + 1] = start;
            this.buffer[index + 2] = end;
            this.buffer[index + 3] = size;
        }
    }
    // Apply a shift action
    /// @internal
    shift(action, next, nextEnd) {
        let start = this.pos;
        if (action & 131072 /* GotoFlag */) {
            this.pushState(action & 65535 /* ValueMask */, this.pos);
        }
        else if ((action & 262144 /* StayFlag */) == 0) { // Regular shift
            let nextState = action, { parser } = this.p;
            if (nextEnd > this.pos || next <= parser.maxNode) {
                this.pos = nextEnd;
                if (!parser.stateFlag(nextState, 1 /* Skipped */))
                    this.reducePos = nextEnd;
            }
            this.pushState(nextState, start);
            this.shiftContext(next, start);
            if (next <= parser.maxNode)
                this.buffer.push(next, start, nextEnd, 4);
        }
        else { // Shift-and-stay, which means this is a skipped token
            this.pos = nextEnd;
            this.shiftContext(next, start);
            if (next <= this.p.parser.maxNode)
                this.buffer.push(next, start, nextEnd, 4);
        }
    }
    // Apply an action
    /// @internal
    apply(action, next, nextEnd) {
        if (action & 65536 /* ReduceFlag */)
            this.reduce(action);
        else
            this.shift(action, next, nextEnd);
    }
    // Add a prebuilt (reused) node into the buffer.
    /// @internal
    useNode(value, next) {
        let index = this.p.reused.length - 1;
        if (index < 0 || this.p.reused[index] != value) {
            this.p.reused.push(value);
            index++;
        }
        let start = this.pos;
        this.reducePos = this.pos = start + value.length;
        this.pushState(next, start);
        this.buffer.push(index, start, this.reducePos, -1 /* size == -1 means this is a reused value */);
        if (this.curContext)
            this.updateContext(this.curContext.tracker.reuse(this.curContext.context, value, this, this.p.stream.reset(this.pos - value.length)));
    }
    // Split the stack. Due to the buffer sharing and the fact
    // that `this.stack` tends to stay quite shallow, this isn't very
    // expensive.
    /// @internal
    split() {
        let parent = this;
        let off = parent.buffer.length;
        // Because the top of the buffer (after this.pos) may be mutated
        // to reorder reductions and skipped tokens, and shared buffers
        // should be immutable, this copies any outstanding skipped tokens
        // to the new buffer, and puts the base pointer before them.
        while (off > 0 && parent.buffer[off - 2] > parent.reducePos)
            off -= 4;
        let buffer = parent.buffer.slice(off), base = parent.bufferBase + off;
        // Make sure parent points to an actual parent with content, if there is such a parent.
        while (parent && base == parent.bufferBase)
            parent = parent.parent;
        return new Stack(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, buffer, base, this.curContext, this.lookAhead, parent);
    }
    // Try to recover from an error by 'deleting' (ignoring) one token.
    /// @internal
    recoverByDelete(next, nextEnd) {
        let isNode = next <= this.p.parser.maxNode;
        if (isNode)
            this.storeNode(next, this.pos, nextEnd, 4);
        this.storeNode(0 /* Err */, this.pos, nextEnd, isNode ? 8 : 4);
        this.pos = this.reducePos = nextEnd;
        this.score -= 190 /* Delete */;
    }
    /// Check if the given term would be able to be shifted (optionally
    /// after some reductions) on this stack. This can be useful for
    /// external tokenizers that want to make sure they only provide a
    /// given token when it applies.
    canShift(term) {
        for (let sim = new SimulatedStack(this);;) {
            let action = this.p.parser.stateSlot(sim.state, 4 /* DefaultReduce */) || this.p.parser.hasAction(sim.state, term);
            if ((action & 65536 /* ReduceFlag */) == 0)
                return true;
            if (action == 0)
                return false;
            sim.reduce(action);
        }
    }
    // Apply up to Recover.MaxNext recovery actions that conceptually
    // inserts some missing token or rule.
    /// @internal
    recoverByInsert(next) {
        if (this.stack.length >= 300 /* MaxInsertStackDepth */)
            return [];
        let nextStates = this.p.parser.nextStates(this.state);
        if (nextStates.length > 4 /* MaxNext */ << 1 || this.stack.length >= 120 /* DampenInsertStackDepth */) {
            let best = [];
            for (let i = 0, s; i < nextStates.length; i += 2) {
                if ((s = nextStates[i + 1]) != this.state && this.p.parser.hasAction(s, next))
                    best.push(nextStates[i], s);
            }
            if (this.stack.length < 120 /* DampenInsertStackDepth */)
                for (let i = 0; best.length < 4 /* MaxNext */ << 1 && i < nextStates.length; i += 2) {
                    let s = nextStates[i + 1];
                    if (!best.some((v, i) => (i & 1) && v == s))
                        best.push(nextStates[i], s);
                }
            nextStates = best;
        }
        let result = [];
        for (let i = 0; i < nextStates.length && result.length < 4 /* MaxNext */; i += 2) {
            let s = nextStates[i + 1];
            if (s == this.state)
                continue;
            let stack = this.split();
            stack.storeNode(0 /* Err */, stack.pos, stack.pos, 4, true);
            stack.pushState(s, this.pos);
            stack.shiftContext(nextStates[i], this.pos);
            stack.score -= 200 /* Insert */;
            result.push(stack);
        }
        return result;
    }
    // Force a reduce, if possible. Return false if that can't
    // be done.
    /// @internal
    forceReduce() {
        let reduce = this.p.parser.stateSlot(this.state, 5 /* ForcedReduce */);
        if ((reduce & 65536 /* ReduceFlag */) == 0)
            return false;
        let { parser } = this.p;
        if (!parser.validAction(this.state, reduce)) {
            let depth = reduce >> 19 /* ReduceDepthShift */, term = reduce & 65535 /* ValueMask */;
            let target = this.stack.length - depth * 3;
            if (target < 0 || parser.getGoto(this.stack[target], term, false) < 0)
                return false;
            this.storeNode(0 /* Err */, this.reducePos, this.reducePos, 4, true);
            this.score -= 100 /* Reduce */;
        }
        this.reduce(reduce);
        return true;
    }
    /// @internal
    forceAll() {
        while (!this.p.parser.stateFlag(this.state, 2 /* Accepting */)) {
            if (!this.forceReduce()) {
                this.storeNode(0 /* Err */, this.pos, this.pos, 4, true);
                break;
            }
        }
        return this;
    }
    /// Check whether this state has no further actions (assumed to be a direct descendant of the
    /// top state, since any other states must be able to continue
    /// somehow). @internal
    get deadEnd() {
        if (this.stack.length != 3)
            return false;
        let { parser } = this.p;
        return parser.data[parser.stateSlot(this.state, 1 /* Actions */)] == 65535 /* End */ &&
            !parser.stateSlot(this.state, 4 /* DefaultReduce */);
    }
    /// Restart the stack (put it back in its start state). Only safe
    /// when this.stack.length == 3 (state is directly below the top
    /// state). @internal
    restart() {
        this.state = this.stack[0];
        this.stack.length = 0;
    }
    /// @internal
    sameState(other) {
        if (this.state != other.state || this.stack.length != other.stack.length)
            return false;
        for (let i = 0; i < this.stack.length; i += 3)
            if (this.stack[i] != other.stack[i])
                return false;
        return true;
    }
    /// Get the parser used by this stack.
    get parser() { return this.p.parser; }
    /// Test whether a given dialect (by numeric ID, as exported from
    /// the terms file) is enabled.
    dialectEnabled(dialectID) { return this.p.parser.dialect.flags[dialectID]; }
    shiftContext(term, start) {
        if (this.curContext)
            this.updateContext(this.curContext.tracker.shift(this.curContext.context, term, this, this.p.stream.reset(start)));
    }
    reduceContext(term, start) {
        if (this.curContext)
            this.updateContext(this.curContext.tracker.reduce(this.curContext.context, term, this, this.p.stream.reset(start)));
    }
    /// @internal
    emitContext() {
        let last = this.buffer.length - 1;
        if (last < 0 || this.buffer[last] != -3)
            this.buffer.push(this.curContext.hash, this.reducePos, this.reducePos, -3);
    }
    /// @internal
    emitLookAhead() {
        let last = this.buffer.length - 1;
        if (last < 0 || this.buffer[last] != -4)
            this.buffer.push(this.lookAhead, this.reducePos, this.reducePos, -4);
    }
    updateContext(context) {
        if (context != this.curContext.context) {
            let newCx = new StackContext(this.curContext.tracker, context);
            if (newCx.hash != this.curContext.hash)
                this.emitContext();
            this.curContext = newCx;
        }
    }
    /// @internal
    setLookAhead(lookAhead) {
        if (lookAhead > this.lookAhead) {
            this.emitLookAhead();
            this.lookAhead = lookAhead;
        }
    }
    /// @internal
    close() {
        if (this.curContext && this.curContext.tracker.strict)
            this.emitContext();
        if (this.lookAhead > 0)
            this.emitLookAhead();
    }
}
class StackContext {
    constructor(tracker, context) {
        this.tracker = tracker;
        this.context = context;
        this.hash = tracker.strict ? tracker.hash(context) : 0;
    }
}
var Recover;
(function (Recover) {
    Recover[Recover["Insert"] = 200] = "Insert";
    Recover[Recover["Delete"] = 190] = "Delete";
    Recover[Recover["Reduce"] = 100] = "Reduce";
    Recover[Recover["MaxNext"] = 4] = "MaxNext";
    Recover[Recover["MaxInsertStackDepth"] = 300] = "MaxInsertStackDepth";
    Recover[Recover["DampenInsertStackDepth"] = 120] = "DampenInsertStackDepth";
})(Recover || (Recover = {}));
// Used to cheaply run some reductions to scan ahead without mutating
// an entire stack
class SimulatedStack {
    constructor(start) {
        this.start = start;
        this.state = start.state;
        this.stack = start.stack;
        this.base = this.stack.length;
    }
    reduce(action) {
        let term = action & 65535 /* ValueMask */, depth = action >> 19 /* ReduceDepthShift */;
        if (depth == 0) {
            if (this.stack == this.start.stack)
                this.stack = this.stack.slice();
            this.stack.push(this.state, 0, 0);
            this.base += 3;
        }
        else {
            this.base -= (depth - 1) * 3;
        }
        let goto = this.start.p.parser.getGoto(this.stack[this.base - 3], term, true);
        this.state = goto;
    }
}
// This is given to `Tree.build` to build a buffer, and encapsulates
// the parent-stack-walking necessary to read the nodes.
class StackBufferCursor {
    constructor(stack, pos, index) {
        this.stack = stack;
        this.pos = pos;
        this.index = index;
        this.buffer = stack.buffer;
        if (this.index == 0)
            this.maybeNext();
    }
    static create(stack, pos = stack.bufferBase + stack.buffer.length) {
        return new StackBufferCursor(stack, pos, pos - stack.bufferBase);
    }
    maybeNext() {
        let next = this.stack.parent;
        if (next != null) {
            this.index = this.stack.bufferBase - next.bufferBase;
            this.stack = next;
            this.buffer = next.buffer;
        }
    }
    get id() { return this.buffer[this.index - 4]; }
    get start() { return this.buffer[this.index - 3]; }
    get end() { return this.buffer[this.index - 2]; }
    get size() { return this.buffer[this.index - 1]; }
    next() {
        this.index -= 4;
        this.pos -= 4;
        if (this.index == 0)
            this.maybeNext();
    }
    fork() {
        return new StackBufferCursor(this.stack, this.pos, this.index);
    }
}

class CachedToken {
    constructor() {
        this.start = -1;
        this.value = -1;
        this.end = -1;
        this.extended = -1;
        this.lookAhead = 0;
        this.mask = 0;
        this.context = 0;
    }
}
const nullToken = new CachedToken;
/// [Tokenizers](#lr.ExternalTokenizer) interact with the input
/// through this interface. It presents the input as a stream of
/// characters, tracking lookahead and hiding the complexity of
/// [ranges](#common.Parser.parse^ranges) from tokenizer code.
class InputStream {
    /// @internal
    constructor(
    /// @internal
    input, 
    /// @internal
    ranges) {
        this.input = input;
        this.ranges = ranges;
        /// @internal
        this.chunk = "";
        /// @internal
        this.chunkOff = 0;
        /// Backup chunk
        this.chunk2 = "";
        this.chunk2Pos = 0;
        /// The character code of the next code unit in the input, or -1
        /// when the stream is at the end of the input.
        this.next = -1;
        /// @internal
        this.token = nullToken;
        this.rangeIndex = 0;
        this.pos = this.chunkPos = ranges[0].from;
        this.range = ranges[0];
        this.end = ranges[ranges.length - 1].to;
        this.readNext();
    }
    resolveOffset(offset, assoc) {
        let range = this.range, index = this.rangeIndex;
        let pos = this.pos + offset;
        while (pos < range.from) {
            if (!index)
                return null;
            let next = this.ranges[--index];
            pos -= range.from - next.to;
            range = next;
        }
        while (assoc < 0 ? pos > range.to : pos >= range.to) {
            if (index == this.ranges.length - 1)
                return null;
            let next = this.ranges[++index];
            pos += next.from - range.to;
            range = next;
        }
        return pos;
    }
    /// Look at a code unit near the stream position. `.peek(0)` equals
    /// `.next`, `.peek(-1)` gives you the previous character, and so
    /// on.
    ///
    /// Note that looking around during tokenizing creates dependencies
    /// on potentially far-away content, which may reduce the
    /// effectiveness incremental parsing—when looking forward—or even
    /// cause invalid reparses when looking backward more than 25 code
    /// units, since the library does not track lookbehind.
    peek(offset) {
        let idx = this.chunkOff + offset, pos, result;
        if (idx >= 0 && idx < this.chunk.length) {
            pos = this.pos + offset;
            result = this.chunk.charCodeAt(idx);
        }
        else {
            let resolved = this.resolveOffset(offset, 1);
            if (resolved == null)
                return -1;
            pos = resolved;
            if (pos >= this.chunk2Pos && pos < this.chunk2Pos + this.chunk2.length) {
                result = this.chunk2.charCodeAt(pos - this.chunk2Pos);
            }
            else {
                let i = this.rangeIndex, range = this.range;
                while (range.to <= pos)
                    range = this.ranges[++i];
                this.chunk2 = this.input.chunk(this.chunk2Pos = pos);
                if (pos + this.chunk2.length > range.to)
                    this.chunk2 = this.chunk2.slice(0, range.to - pos);
                result = this.chunk2.charCodeAt(0);
            }
        }
        if (pos >= this.token.lookAhead)
            this.token.lookAhead = pos + 1;
        return result;
    }
    /// Accept a token. By default, the end of the token is set to the
    /// current stream position, but you can pass an offset (relative to
    /// the stream position) to change that.
    acceptToken(token, endOffset = 0) {
        let end = endOffset ? this.resolveOffset(endOffset, -1) : this.pos;
        if (end == null || end < this.token.start)
            throw new RangeError("Token end out of bounds");
        this.token.value = token;
        this.token.end = end;
    }
    getChunk() {
        if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
            let { chunk, chunkPos } = this;
            this.chunk = this.chunk2;
            this.chunkPos = this.chunk2Pos;
            this.chunk2 = chunk;
            this.chunk2Pos = chunkPos;
            this.chunkOff = this.pos - this.chunkPos;
        }
        else {
            this.chunk2 = this.chunk;
            this.chunk2Pos = this.chunkPos;
            let nextChunk = this.input.chunk(this.pos);
            let end = this.pos + nextChunk.length;
            this.chunk = end > this.range.to ? nextChunk.slice(0, this.range.to - this.pos) : nextChunk;
            this.chunkPos = this.pos;
            this.chunkOff = 0;
        }
    }
    readNext() {
        if (this.chunkOff >= this.chunk.length) {
            this.getChunk();
            if (this.chunkOff == this.chunk.length)
                return this.next = -1;
        }
        return this.next = this.chunk.charCodeAt(this.chunkOff);
    }
    /// Move the stream forward N (defaults to 1) code units. Returns
    /// the new value of [`next`](#lr.InputStream.next).
    advance(n = 1) {
        this.chunkOff += n;
        while (this.pos + n >= this.range.to) {
            if (this.rangeIndex == this.ranges.length - 1)
                return this.setDone();
            n -= this.range.to - this.pos;
            this.range = this.ranges[++this.rangeIndex];
            this.pos = this.range.from;
        }
        this.pos += n;
        if (this.pos >= this.token.lookAhead)
            this.token.lookAhead = this.pos + 1;
        return this.readNext();
    }
    setDone() {
        this.pos = this.chunkPos = this.end;
        this.range = this.ranges[this.rangeIndex = this.ranges.length - 1];
        this.chunk = "";
        return this.next = -1;
    }
    /// @internal
    reset(pos, token) {
        if (token) {
            this.token = token;
            token.start = pos;
            token.lookAhead = pos + 1;
            token.value = token.extended = -1;
        }
        else {
            this.token = nullToken;
        }
        if (this.pos != pos) {
            this.pos = pos;
            if (pos == this.end) {
                this.setDone();
                return this;
            }
            while (pos < this.range.from)
                this.range = this.ranges[--this.rangeIndex];
            while (pos >= this.range.to)
                this.range = this.ranges[++this.rangeIndex];
            if (pos >= this.chunkPos && pos < this.chunkPos + this.chunk.length) {
                this.chunkOff = pos - this.chunkPos;
            }
            else {
                this.chunk = "";
                this.chunkOff = 0;
            }
            this.readNext();
        }
        return this;
    }
    /// @internal
    read(from, to) {
        if (from >= this.chunkPos && to <= this.chunkPos + this.chunk.length)
            return this.chunk.slice(from - this.chunkPos, to - this.chunkPos);
        if (from >= this.chunk2Pos && to <= this.chunk2Pos + this.chunk2.length)
            return this.chunk2.slice(from - this.chunk2Pos, to - this.chunk2Pos);
        if (from >= this.range.from && to <= this.range.to)
            return this.input.read(from, to);
        let result = "";
        for (let r of this.ranges) {
            if (r.from >= to)
                break;
            if (r.to > from)
                result += this.input.read(Math.max(r.from, from), Math.min(r.to, to));
        }
        return result;
    }
}
/// @internal
class TokenGroup {
    constructor(data, id) {
        this.data = data;
        this.id = id;
    }
    token(input, stack) { readToken(this.data, input, stack, this.id); }
}
TokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = false;
/// `@external tokens` declarations in the grammar should resolve to
/// an instance of this class.
class ExternalTokenizer {
    /// Create a tokenizer. The first argument is the function that,
    /// given an input stream, scans for the types of tokens it
    /// recognizes at the stream's position, and calls
    /// [`acceptToken`](#lr.InputStream.acceptToken) when it finds
    /// one.
    constructor(
    /// @internal
    token, options = {}) {
        this.token = token;
        this.contextual = !!options.contextual;
        this.fallback = !!options.fallback;
        this.extend = !!options.extend;
    }
}
// Tokenizer data is stored a big uint16 array containing, for each
// state:
//
//  - A group bitmask, indicating what token groups are reachable from
//    this state, so that paths that can only lead to tokens not in
//    any of the current groups can be cut off early.
//
//  - The position of the end of the state's sequence of accepting
//    tokens
//
//  - The number of outgoing edges for the state
//
//  - The accepting tokens, as (token id, group mask) pairs
//
//  - The outgoing edges, as (start character, end character, state
//    index) triples, with end character being exclusive
//
// This function interprets that data, running through a stream as
// long as new states with the a matching group mask can be reached,
// and updating `token` when it matches a token.
function readToken(data, input, stack, group) {
    let state = 0, groupMask = 1 << group, { parser } = stack.p, { dialect } = parser;
    scan: for (;;) {
        if ((groupMask & data[state]) == 0)
            break;
        let accEnd = data[state + 1];
        // Check whether this state can lead to a token in the current group
        // Accept tokens in this state, possibly overwriting
        // lower-precedence / shorter tokens
        for (let i = state + 3; i < accEnd; i += 2)
            if ((data[i + 1] & groupMask) > 0) {
                let term = data[i];
                if (dialect.allows(term) &&
                    (input.token.value == -1 || input.token.value == term || parser.overrides(term, input.token.value))) {
                    input.acceptToken(term);
                    break;
                }
            }
        // Do a binary search on the state's edges
        for (let next = input.next, low = 0, high = data[state + 2]; low < high;) {
            let mid = (low + high) >> 1;
            let index = accEnd + mid + (mid << 1);
            let from = data[index], to = data[index + 1];
            if (next < from)
                high = mid;
            else if (next >= to)
                low = mid + 1;
            else {
                state = data[index + 2];
                input.advance();
                continue scan;
            }
        }
        break;
    }
}

// See lezer-generator/src/encode.ts for comments about the encoding
// used here
function decodeArray(input, Type = Uint16Array) {
    if (typeof input != "string")
        return input;
    let array = null;
    for (let pos = 0, out = 0; pos < input.length;) {
        let value = 0;
        for (;;) {
            let next = input.charCodeAt(pos++), stop = false;
            if (next == 126 /* BigValCode */) {
                value = 65535 /* BigVal */;
                break;
            }
            if (next >= 92 /* Gap2 */)
                next--;
            if (next >= 34 /* Gap1 */)
                next--;
            let digit = next - 32 /* Start */;
            if (digit >= 46 /* Base */) {
                digit -= 46 /* Base */;
                stop = true;
            }
            value += digit;
            if (stop)
                break;
            value *= 46 /* Base */;
        }
        if (array)
            array[out++] = value;
        else
            array = new Type(value);
    }
    return array;
}

// FIXME find some way to reduce recovery work done when the input
// doesn't match the grammar at all.
// Environment variable used to control console output
const verbose = typeof process != "undefined" && /\bparse\b/.test(process.env.LOG);
let stackIDs = null;
var Safety;
(function (Safety) {
    Safety[Safety["Margin"] = 25] = "Margin";
})(Safety || (Safety = {}));
function cutAt(tree, pos, side) {
    let cursor = tree.fullCursor();
    cursor.moveTo(pos);
    for (;;) {
        if (!(side < 0 ? cursor.childBefore(pos) : cursor.childAfter(pos)))
            for (;;) {
                if ((side < 0 ? cursor.to < pos : cursor.from > pos) && !cursor.type.isError)
                    return side < 0 ? Math.max(0, Math.min(cursor.to - 1, pos - 25 /* Margin */))
                        : Math.min(tree.length, Math.max(cursor.from + 1, pos + 25 /* Margin */));
                if (side < 0 ? cursor.prevSibling() : cursor.nextSibling())
                    break;
                if (!cursor.parent())
                    return side < 0 ? 0 : tree.length;
            }
    }
}
class dist_FragmentCursor {
    constructor(fragments, nodeSet) {
        this.fragments = fragments;
        this.nodeSet = nodeSet;
        this.i = 0;
        this.fragment = null;
        this.safeFrom = -1;
        this.safeTo = -1;
        this.trees = [];
        this.start = [];
        this.index = [];
        this.nextFragment();
    }
    nextFragment() {
        let fr = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
        if (fr) {
            this.safeFrom = fr.openStart ? cutAt(fr.tree, fr.from + fr.offset, 1) - fr.offset : fr.from;
            this.safeTo = fr.openEnd ? cutAt(fr.tree, fr.to + fr.offset, -1) - fr.offset : fr.to;
            while (this.trees.length) {
                this.trees.pop();
                this.start.pop();
                this.index.pop();
            }
            this.trees.push(fr.tree);
            this.start.push(-fr.offset);
            this.index.push(0);
            this.nextStart = this.safeFrom;
        }
        else {
            this.nextStart = 1e9;
        }
    }
    // `pos` must be >= any previously given `pos` for this cursor
    nodeAt(pos) {
        if (pos < this.nextStart)
            return null;
        while (this.fragment && this.safeTo <= pos)
            this.nextFragment();
        if (!this.fragment)
            return null;
        for (;;) {
            let last = this.trees.length - 1;
            if (last < 0) { // End of tree
                this.nextFragment();
                return null;
            }
            let top = this.trees[last], index = this.index[last];
            if (index == top.children.length) {
                this.trees.pop();
                this.start.pop();
                this.index.pop();
                continue;
            }
            let next = top.children[index];
            let start = this.start[last] + top.positions[index];
            if (start > pos) {
                this.nextStart = start;
                return null;
            }
            if (next instanceof Tree) {
                if (start == pos) {
                    if (start < this.safeFrom)
                        return null;
                    let end = start + next.length;
                    if (end <= this.safeTo) {
                        let lookAhead = next.prop(NodeProp.lookAhead);
                        if (!lookAhead || end + lookAhead < this.fragment.to)
                            return next;
                    }
                }
                this.index[last]++;
                if (start + next.length >= Math.max(this.safeFrom, pos)) { // Enter this node
                    this.trees.push(next);
                    this.start.push(start);
                    this.index.push(0);
                }
            }
            else {
                this.index[last]++;
                this.nextStart = start + next.length;
            }
        }
    }
}
class TokenCache {
    constructor(parser, stream) {
        this.stream = stream;
        this.tokens = [];
        this.mainToken = null;
        this.actions = [];
        this.tokens = parser.tokenizers.map(_ => new CachedToken);
    }
    getActions(stack) {
        let actionIndex = 0;
        let main = null;
        let { parser } = stack.p, { tokenizers } = parser;
        let mask = parser.stateSlot(stack.state, 3 /* TokenizerMask */);
        let context = stack.curContext ? stack.curContext.hash : 0;
        let lookAhead = 0;
        for (let i = 0; i < tokenizers.length; i++) {
            if (((1 << i) & mask) == 0)
                continue;
            let tokenizer = tokenizers[i], token = this.tokens[i];
            if (main && !tokenizer.fallback)
                continue;
            if (tokenizer.contextual || token.start != stack.pos || token.mask != mask || token.context != context) {
                this.updateCachedToken(token, tokenizer, stack);
                token.mask = mask;
                token.context = context;
            }
            if (token.lookAhead > token.end + 25 /* Margin */)
                lookAhead = Math.max(token.lookAhead, lookAhead);
            if (token.value != 0 /* Err */) {
                let startIndex = actionIndex;
                if (token.extended > -1)
                    actionIndex = this.addActions(stack, token.extended, token.end, actionIndex);
                actionIndex = this.addActions(stack, token.value, token.end, actionIndex);
                if (!tokenizer.extend) {
                    main = token;
                    if (actionIndex > startIndex)
                        break;
                }
            }
        }
        while (this.actions.length > actionIndex)
            this.actions.pop();
        if (lookAhead)
            stack.setLookAhead(lookAhead);
        if (!main && stack.pos == this.stream.end) {
            main = new CachedToken;
            main.value = stack.p.parser.eofTerm;
            main.start = main.end = stack.pos;
            actionIndex = this.addActions(stack, main.value, main.end, actionIndex);
        }
        this.mainToken = main;
        return this.actions;
    }
    getMainToken(stack) {
        if (this.mainToken)
            return this.mainToken;
        let main = new CachedToken, { pos, p } = stack;
        main.start = pos;
        main.end = Math.min(pos + 1, p.stream.end);
        main.value = pos == p.stream.end ? p.parser.eofTerm : 0 /* Err */;
        return main;
    }
    updateCachedToken(token, tokenizer, stack) {
        tokenizer.token(this.stream.reset(stack.pos, token), stack);
        if (token.value > -1) {
            let { parser } = stack.p;
            for (let i = 0; i < parser.specialized.length; i++)
                if (parser.specialized[i] == token.value) {
                    let result = parser.specializers[i](this.stream.read(token.start, token.end), stack);
                    if (result >= 0 && stack.p.parser.dialect.allows(result >> 1)) {
                        if ((result & 1) == 0 /* Specialize */)
                            token.value = result >> 1;
                        else
                            token.extended = result >> 1;
                        break;
                    }
                }
        }
        else {
            token.value = 0 /* Err */;
            token.end = Math.min(stack.p.stream.end, stack.pos + 1);
        }
    }
    putAction(action, token, end, index) {
        // Don't add duplicate actions
        for (let i = 0; i < index; i += 3)
            if (this.actions[i] == action)
                return index;
        this.actions[index++] = action;
        this.actions[index++] = token;
        this.actions[index++] = end;
        return index;
    }
    addActions(stack, token, end, index) {
        let { state } = stack, { parser } = stack.p, { data } = parser;
        for (let set = 0; set < 2; set++) {
            for (let i = parser.stateSlot(state, set ? 2 /* Skip */ : 1 /* Actions */);; i += 3) {
                if (data[i] == 65535 /* End */) {
                    if (data[i + 1] == 1 /* Next */) {
                        i = pair(data, i + 2);
                    }
                    else {
                        if (index == 0 && data[i + 1] == 2 /* Other */)
                            index = this.putAction(pair(data, i + 2), token, end, index);
                        break;
                    }
                }
                if (data[i] == token)
                    index = this.putAction(pair(data, i + 1), token, end, index);
            }
        }
        return index;
    }
}
var Rec;
(function (Rec) {
    Rec[Rec["Distance"] = 5] = "Distance";
    Rec[Rec["MaxRemainingPerStep"] = 3] = "MaxRemainingPerStep";
    // When two stacks have been running independently long enough to
    // add this many elements to their buffers, prune one.
    Rec[Rec["MinBufferLengthPrune"] = 500] = "MinBufferLengthPrune";
    Rec[Rec["ForceReduceLimit"] = 10] = "ForceReduceLimit";
    // Once a stack reaches this depth (in .stack.length) force-reduce
    // it back to CutTo to avoid creating trees that overflow the stack
    // on recursive traversal.
    Rec[Rec["CutDepth"] = 15000] = "CutDepth";
    Rec[Rec["CutTo"] = 9000] = "CutTo";
})(Rec || (Rec = {}));
class Parse {
    constructor(parser, input, fragments, ranges) {
        this.parser = parser;
        this.input = input;
        this.ranges = ranges;
        this.recovering = 0;
        this.nextStackID = 0x2654; // ♔, ♕, ♖, ♗, ♘, ♙, ♠, ♡, ♢, ♣, ♤, ♥, ♦, ♧
        this.minStackPos = 0;
        this.reused = [];
        this.stoppedAt = null;
        this.stream = new InputStream(input, ranges);
        this.tokens = new TokenCache(parser, this.stream);
        this.topTerm = parser.top[1];
        let { from } = ranges[0];
        this.stacks = [Stack.start(this, parser.top[0], from)];
        this.fragments = fragments.length && this.stream.end - from > parser.bufferLength * 4
            ? new dist_FragmentCursor(fragments, parser.nodeSet) : null;
    }
    get parsedPos() {
        return this.minStackPos;
    }
    // Move the parser forward. This will process all parse stacks at
    // `this.pos` and try to advance them to a further position. If no
    // stack for such a position is found, it'll start error-recovery.
    //
    // When the parse is finished, this will return a syntax tree. When
    // not, it returns `null`.
    advance() {
        let stacks = this.stacks, pos = this.minStackPos;
        // This will hold stacks beyond `pos`.
        let newStacks = this.stacks = [];
        let stopped, stoppedTokens;
        // Keep advancing any stacks at `pos` until they either move
        // forward or can't be advanced. Gather stacks that can't be
        // advanced further in `stopped`.
        for (let i = 0; i < stacks.length; i++) {
            let stack = stacks[i];
            for (;;) {
                this.tokens.mainToken = null;
                if (stack.pos > pos) {
                    newStacks.push(stack);
                }
                else if (this.advanceStack(stack, newStacks, stacks)) {
                    continue;
                }
                else {
                    if (!stopped) {
                        stopped = [];
                        stoppedTokens = [];
                    }
                    stopped.push(stack);
                    let tok = this.tokens.getMainToken(stack);
                    stoppedTokens.push(tok.value, tok.end);
                }
                break;
            }
        }
        if (!newStacks.length) {
            let finished = stopped && findFinished(stopped);
            if (finished)
                return this.stackToTree(finished);
            if (this.parser.strict) {
                if (verbose && stopped)
                    console.log("Stuck with token " + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : "none"));
                throw new SyntaxError("No parse at " + pos);
            }
            if (!this.recovering)
                this.recovering = 5 /* Distance */;
        }
        if (this.recovering && stopped) {
            let finished = this.stoppedAt != null && stopped[0].pos > this.stoppedAt ? stopped[0]
                : this.runRecovery(stopped, stoppedTokens, newStacks);
            if (finished)
                return this.stackToTree(finished.forceAll());
        }
        if (this.recovering) {
            let maxRemaining = this.recovering == 1 ? 1 : this.recovering * 3 /* MaxRemainingPerStep */;
            if (newStacks.length > maxRemaining) {
                newStacks.sort((a, b) => b.score - a.score);
                while (newStacks.length > maxRemaining)
                    newStacks.pop();
            }
            if (newStacks.some(s => s.reducePos > pos))
                this.recovering--;
        }
        else if (newStacks.length > 1) {
            // Prune stacks that are in the same state, or that have been
            // running without splitting for a while, to avoid getting stuck
            // with multiple successful stacks running endlessly on.
            outer: for (let i = 0; i < newStacks.length - 1; i++) {
                let stack = newStacks[i];
                for (let j = i + 1; j < newStacks.length; j++) {
                    let other = newStacks[j];
                    if (stack.sameState(other) ||
                        stack.buffer.length > 500 /* MinBufferLengthPrune */ && other.buffer.length > 500 /* MinBufferLengthPrune */) {
                        if (((stack.score - other.score) || (stack.buffer.length - other.buffer.length)) > 0) {
                            newStacks.splice(j--, 1);
                        }
                        else {
                            newStacks.splice(i--, 1);
                            continue outer;
                        }
                    }
                }
            }
        }
        this.minStackPos = newStacks[0].pos;
        for (let i = 1; i < newStacks.length; i++)
            if (newStacks[i].pos < this.minStackPos)
                this.minStackPos = newStacks[i].pos;
        return null;
    }
    stopAt(pos) {
        if (this.stoppedAt != null && this.stoppedAt < pos)
            throw new RangeError("Can't move stoppedAt forward");
        this.stoppedAt = pos;
    }
    // Returns an updated version of the given stack, or null if the
    // stack can't advance normally. When `split` and `stacks` are
    // given, stacks split off by ambiguous operations will be pushed to
    // `split`, or added to `stacks` if they move `pos` forward.
    advanceStack(stack, stacks, split) {
        let start = stack.pos, { parser } = this;
        let base = verbose ? this.stackID(stack) + " -> " : "";
        if (this.stoppedAt != null && start > this.stoppedAt)
            return stack.forceReduce() ? stack : null;
        if (this.fragments) {
            let strictCx = stack.curContext && stack.curContext.tracker.strict, cxHash = strictCx ? stack.curContext.hash : 0;
            for (let cached = this.fragments.nodeAt(start); cached;) {
                let match = this.parser.nodeSet.types[cached.type.id] == cached.type ? parser.getGoto(stack.state, cached.type.id) : -1;
                if (match > -1 && cached.length && (!strictCx || (cached.prop(NodeProp.contextHash) || 0) == cxHash)) {
                    stack.useNode(cached, match);
                    if (verbose)
                        console.log(base + this.stackID(stack) + ` (via reuse of ${parser.getName(cached.type.id)})`);
                    return true;
                }
                if (!(cached instanceof Tree) || cached.children.length == 0 || cached.positions[0] > 0)
                    break;
                let inner = cached.children[0];
                if (inner instanceof Tree && cached.positions[0] == 0)
                    cached = inner;
                else
                    break;
            }
        }
        let defaultReduce = parser.stateSlot(stack.state, 4 /* DefaultReduce */);
        if (defaultReduce > 0) {
            stack.reduce(defaultReduce);
            if (verbose)
                console.log(base + this.stackID(stack) + ` (via always-reduce ${parser.getName(defaultReduce & 65535 /* ValueMask */)})`);
            return true;
        }
        if (stack.stack.length >= 15000 /* CutDepth */) {
            while (stack.stack.length > 9000 /* CutTo */ && stack.forceReduce()) { }
        }
        let actions = this.tokens.getActions(stack);
        for (let i = 0; i < actions.length;) {
            let action = actions[i++], term = actions[i++], end = actions[i++];
            let last = i == actions.length || !split;
            let localStack = last ? stack : stack.split();
            localStack.apply(action, term, end);
            if (verbose)
                console.log(base + this.stackID(localStack) + ` (via ${(action & 65536 /* ReduceFlag */) == 0 ? "shift"
                    : `reduce of ${parser.getName(action & 65535 /* ValueMask */)}`} for ${parser.getName(term)} @ ${start}${localStack == stack ? "" : ", split"})`);
            if (last)
                return true;
            else if (localStack.pos > start)
                stacks.push(localStack);
            else
                split.push(localStack);
        }
        return false;
    }
    // Advance a given stack forward as far as it will go. Returns the
    // (possibly updated) stack if it got stuck, or null if it moved
    // forward and was given to `pushStackDedup`.
    advanceFully(stack, newStacks) {
        let pos = stack.pos;
        for (;;) {
            if (!this.advanceStack(stack, null, null))
                return false;
            if (stack.pos > pos) {
                pushStackDedup(stack, newStacks);
                return true;
            }
        }
    }
    runRecovery(stacks, tokens, newStacks) {
        let finished = null, restarted = false;
        for (let i = 0; i < stacks.length; i++) {
            let stack = stacks[i], token = tokens[i << 1], tokenEnd = tokens[(i << 1) + 1];
            let base = verbose ? this.stackID(stack) + " -> " : "";
            if (stack.deadEnd) {
                if (restarted)
                    continue;
                restarted = true;
                stack.restart();
                if (verbose)
                    console.log(base + this.stackID(stack) + " (restarted)");
                let done = this.advanceFully(stack, newStacks);
                if (done)
                    continue;
            }
            let force = stack.split(), forceBase = base;
            for (let j = 0; force.forceReduce() && j < 10 /* ForceReduceLimit */; j++) {
                if (verbose)
                    console.log(forceBase + this.stackID(force) + " (via force-reduce)");
                let done = this.advanceFully(force, newStacks);
                if (done)
                    break;
                if (verbose)
                    forceBase = this.stackID(force) + " -> ";
            }
            for (let insert of stack.recoverByInsert(token)) {
                if (verbose)
                    console.log(base + this.stackID(insert) + " (via recover-insert)");
                this.advanceFully(insert, newStacks);
            }
            if (this.stream.end > stack.pos) {
                if (tokenEnd == stack.pos) {
                    tokenEnd++;
                    token = 0 /* Err */;
                }
                stack.recoverByDelete(token, tokenEnd);
                if (verbose)
                    console.log(base + this.stackID(stack) + ` (via recover-delete ${this.parser.getName(token)})`);
                pushStackDedup(stack, newStacks);
            }
            else if (!finished || finished.score < stack.score) {
                finished = stack;
            }
        }
        return finished;
    }
    // Convert the stack's buffer to a syntax tree.
    stackToTree(stack) {
        stack.close();
        return Tree.build({ buffer: StackBufferCursor.create(stack),
            nodeSet: this.parser.nodeSet,
            topID: this.topTerm,
            maxBufferLength: this.parser.bufferLength,
            reused: this.reused,
            start: this.ranges[0].from,
            length: stack.pos - this.ranges[0].from,
            minRepeatType: this.parser.minRepeatTerm });
    }
    stackID(stack) {
        let id = (stackIDs || (stackIDs = new WeakMap)).get(stack);
        if (!id)
            stackIDs.set(stack, id = String.fromCodePoint(this.nextStackID++));
        return id + stack;
    }
}
function pushStackDedup(stack, newStacks) {
    for (let i = 0; i < newStacks.length; i++) {
        let other = newStacks[i];
        if (other.pos == stack.pos && other.sameState(stack)) {
            if (newStacks[i].score < stack.score)
                newStacks[i] = stack;
            return;
        }
    }
    newStacks.push(stack);
}
class Dialect {
    constructor(source, flags, disabled) {
        this.source = source;
        this.flags = flags;
        this.disabled = disabled;
    }
    allows(term) { return !this.disabled || this.disabled[term] == 0; }
}
const id = x => x;
/// Context trackers are used to track stateful context (such as
/// indentation in the Python grammar, or parent elements in the XML
/// grammar) needed by external tokenizers. You declare them in a
/// grammar file as `@context exportName from "module"`.
///
/// Context values should be immutable, and can be updated (replaced)
/// on shift or reduce actions.
///
/// The export used in a `@context` declaration should be of this
/// type.
class ContextTracker {
    /// Define a context tracker.
    constructor(spec) {
        this.start = spec.start;
        this.shift = spec.shift || id;
        this.reduce = spec.reduce || id;
        this.reuse = spec.reuse || id;
        this.hash = spec.hash || (() => 0);
        this.strict = spec.strict !== false;
    }
}
/// A parser holds the parse tables for a given grammar, as generated
/// by `lezer-generator`.
class LRParser extends Parser {
    /// @internal
    constructor(spec) {
        super();
        /// @internal
        this.wrappers = [];
        if (spec.version != 13 /* Version */)
            throw new RangeError(`Parser version (${spec.version}) doesn't match runtime version (${13 /* Version */})`);
        let nodeNames = spec.nodeNames.split(" ");
        this.minRepeatTerm = nodeNames.length;
        for (let i = 0; i < spec.repeatNodeCount; i++)
            nodeNames.push("");
        let topTerms = Object.keys(spec.topRules).map(r => spec.topRules[r][1]);
        let nodeProps = [];
        for (let i = 0; i < nodeNames.length; i++)
            nodeProps.push([]);
        function setProp(nodeID, prop, value) {
            nodeProps[nodeID].push([prop, prop.deserialize(String(value))]);
        }
        if (spec.nodeProps)
            for (let propSpec of spec.nodeProps) {
                let prop = propSpec[0];
                for (let i = 1; i < propSpec.length;) {
                    let next = propSpec[i++];
                    if (next >= 0) {
                        setProp(next, prop, propSpec[i++]);
                    }
                    else {
                        let value = propSpec[i + -next];
                        for (let j = -next; j > 0; j--)
                            setProp(propSpec[i++], prop, value);
                        i++;
                    }
                }
            }
        this.nodeSet = new NodeSet(nodeNames.map((name, i) => NodeType.define({
            name: i >= this.minRepeatTerm ? undefined : name,
            id: i,
            props: nodeProps[i],
            top: topTerms.indexOf(i) > -1,
            error: i == 0,
            skipped: spec.skippedNodes && spec.skippedNodes.indexOf(i) > -1
        })));
        this.strict = false;
        this.bufferLength = DefaultBufferLength;
        let tokenArray = decodeArray(spec.tokenData);
        this.context = spec.context;
        this.specialized = new Uint16Array(spec.specialized ? spec.specialized.length : 0);
        this.specializers = [];
        if (spec.specialized)
            for (let i = 0; i < spec.specialized.length; i++) {
                this.specialized[i] = spec.specialized[i].term;
                this.specializers[i] = spec.specialized[i].get;
            }
        this.states = decodeArray(spec.states, Uint32Array);
        this.data = decodeArray(spec.stateData);
        this.goto = decodeArray(spec.goto);
        this.maxTerm = spec.maxTerm;
        this.tokenizers = spec.tokenizers.map(value => typeof value == "number" ? new TokenGroup(tokenArray, value) : value);
        this.topRules = spec.topRules;
        this.dialects = spec.dialects || {};
        this.dynamicPrecedences = spec.dynamicPrecedences || null;
        this.tokenPrecTable = spec.tokenPrec;
        this.termNames = spec.termNames || null;
        this.maxNode = this.nodeSet.types.length - 1;
        this.dialect = this.parseDialect();
        this.top = this.topRules[Object.keys(this.topRules)[0]];
    }
    createParse(input, fragments, ranges) {
        let parse = new Parse(this, input, fragments, ranges);
        for (let w of this.wrappers)
            parse = w(parse, input, fragments, ranges);
        return parse;
    }
    /// Get a goto table entry @internal
    getGoto(state, term, loose = false) {
        let table = this.goto;
        if (term >= table[0])
            return -1;
        for (let pos = table[term + 1];;) {
            let groupTag = table[pos++], last = groupTag & 1;
            let target = table[pos++];
            if (last && loose)
                return target;
            for (let end = pos + (groupTag >> 1); pos < end; pos++)
                if (table[pos] == state)
                    return target;
            if (last)
                return -1;
        }
    }
    /// Check if this state has an action for a given terminal @internal
    hasAction(state, terminal) {
        let data = this.data;
        for (let set = 0; set < 2; set++) {
            for (let i = this.stateSlot(state, set ? 2 /* Skip */ : 1 /* Actions */), next;; i += 3) {
                if ((next = data[i]) == 65535 /* End */) {
                    if (data[i + 1] == 1 /* Next */)
                        next = data[i = pair(data, i + 2)];
                    else if (data[i + 1] == 2 /* Other */)
                        return pair(data, i + 2);
                    else
                        break;
                }
                if (next == terminal || next == 0 /* Err */)
                    return pair(data, i + 1);
            }
        }
        return 0;
    }
    /// @internal
    stateSlot(state, slot) {
        return this.states[(state * 6 /* Size */) + slot];
    }
    /// @internal
    stateFlag(state, flag) {
        return (this.stateSlot(state, 0 /* Flags */) & flag) > 0;
    }
    /// @internal
    validAction(state, action) {
        if (action == this.stateSlot(state, 4 /* DefaultReduce */))
            return true;
        for (let i = this.stateSlot(state, 1 /* Actions */);; i += 3) {
            if (this.data[i] == 65535 /* End */) {
                if (this.data[i + 1] == 1 /* Next */)
                    i = pair(this.data, i + 2);
                else
                    return false;
            }
            if (action == pair(this.data, i + 1))
                return true;
        }
    }
    /// Get the states that can follow this one through shift actions or
    /// goto jumps. @internal
    nextStates(state) {
        let result = [];
        for (let i = this.stateSlot(state, 1 /* Actions */);; i += 3) {
            if (this.data[i] == 65535 /* End */) {
                if (this.data[i + 1] == 1 /* Next */)
                    i = pair(this.data, i + 2);
                else
                    break;
            }
            if ((this.data[i + 2] & (65536 /* ReduceFlag */ >> 16)) == 0) {
                let value = this.data[i + 1];
                if (!result.some((v, i) => (i & 1) && v == value))
                    result.push(this.data[i], value);
            }
        }
        return result;
    }
    /// @internal
    overrides(token, prev) {
        let iPrev = findOffset(this.data, this.tokenPrecTable, prev);
        return iPrev < 0 || findOffset(this.data, this.tokenPrecTable, token) < iPrev;
    }
    /// Configure the parser. Returns a new parser instance that has the
    /// given settings modified. Settings not provided in `config` are
    /// kept from the original parser.
    configure(config) {
        // Hideous reflection-based kludge to make it easy to create a
        // slightly modified copy of a parser.
        let copy = Object.assign(Object.create(LRParser.prototype), this);
        if (config.props)
            copy.nodeSet = this.nodeSet.extend(...config.props);
        if (config.top) {
            let info = this.topRules[config.top];
            if (!info)
                throw new RangeError(`Invalid top rule name ${config.top}`);
            copy.top = info;
        }
        if (config.tokenizers)
            copy.tokenizers = this.tokenizers.map(t => {
                let found = config.tokenizers.find(r => r.from == t);
                return found ? found.to : t;
            });
        if (config.contextTracker)
            copy.context = config.contextTracker;
        if (config.dialect)
            copy.dialect = this.parseDialect(config.dialect);
        if (config.strict != null)
            copy.strict = config.strict;
        if (config.wrap)
            copy.wrappers = copy.wrappers.concat(config.wrap);
        if (config.bufferLength != null)
            copy.bufferLength = config.bufferLength;
        return copy;
    }
    /// Returns the name associated with a given term. This will only
    /// work for all terms when the parser was generated with the
    /// `--names` option. By default, only the names of tagged terms are
    /// stored.
    getName(term) {
        return this.termNames ? this.termNames[term] : String(term <= this.maxNode && this.nodeSet.types[term].name || term);
    }
    /// The eof term id is always allocated directly after the node
    /// types. @internal
    get eofTerm() { return this.maxNode + 1; }
    /// The type of top node produced by the parser.
    get topNode() { return this.nodeSet.types[this.top[1]]; }
    /// @internal
    dynamicPrecedence(term) {
        let prec = this.dynamicPrecedences;
        return prec == null ? 0 : prec[term] || 0;
    }
    /// @internal
    parseDialect(dialect) {
        let values = Object.keys(this.dialects), flags = values.map(() => false);
        if (dialect)
            for (let part of dialect.split(" ")) {
                let id = values.indexOf(part);
                if (id >= 0)
                    flags[id] = true;
            }
        let disabled = null;
        for (let i = 0; i < values.length; i++)
            if (!flags[i]) {
                for (let j = this.dialects[values[i]], id; (id = this.data[j++]) != 65535 /* End */;)
                    (disabled || (disabled = new Uint8Array(this.maxTerm + 1)))[id] = 1;
            }
        return new Dialect(dialect, flags, disabled);
    }
    /// (used by the output of the parser generator) @internal
    static deserialize(spec) {
        return new LRParser(spec);
    }
}
function pair(data, off) { return data[off] | (data[off + 1] << 16); }
function findOffset(data, start, term) {
    for (let i = start, next; (next = data[i]) != 65535 /* End */; i++)
        if (next == term)
            return i - start;
    return -1;
}
function findFinished(stacks) {
    let best = null;
    for (let stack of stacks) {
        let stopped = stack.p.stoppedAt;
        if ((stack.pos == stack.p.stream.end || stopped != null && stack.pos > stopped) &&
            stack.p.parser.stateFlag(stack.state, 2 /* Accepting */) &&
            (!best || best.score < stack.score))
            best = stack;
    }
    return best;
}




/***/ })

}]);