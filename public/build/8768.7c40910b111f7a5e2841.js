"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[8768],{

 "./public/app/core/utils/tracing.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "et": () => ( getNonOverlappingDuration),
   "fy": () => ( getStats),
   "nO": () => ( makeSpanMap),
   "np": () => ( makeFrames)
 });
 var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");

function getNonOverlappingDuration(ranges) {
  ranges.sort((a, b) => a[0] - b[0]);
  const mergedRanges = ranges.reduce((acc, range) => {
    if (!acc.length) {
      return [range];
    }

    const tail = acc.slice(-1)[0];
    const [prevStart, prevEnd] = tail;
    const [start, end] = range;

    if (end < prevEnd) {
      return acc;
    }

    if (start > prevEnd) {
      return [...acc, range];
    } 


    return [...acc.slice(0, -1), [prevStart, end]];
  }, []);
  return mergedRanges.reduce((acc, range) => {
    return acc + (range[1] - range[0]);
  }, 0);
}

function makeSpanMap(getSpan) {
  const spanMap = {};
  let span;

  for (let index = 0; span = getSpan(index), !!span; index++) {
    if (!spanMap[span.id]) {
      spanMap[span.id] = {
        span: span.span,
        children: []
      };
    } else {
      spanMap[span.id].span = span.span;
    }

    for (const parentId of span.parentIds) {
      if (parentId) {
        if (!spanMap[parentId]) {
          spanMap[parentId] = {
            span: undefined,
            children: [span.id]
          };
        } else {
          spanMap[parentId].children.push(span.id);
        }
      }
    }
  }

  return spanMap;
}
function getStats(duration, traceDuration, selfDuration) {
  return {
    main: `${toFixedNoTrailingZeros(duration)}ms (${toFixedNoTrailingZeros(duration / traceDuration * 100)}%)`,
    secondary: `${toFixedNoTrailingZeros(selfDuration)}ms (${toFixedNoTrailingZeros(selfDuration / duration * 100)}%)`
  };
}

function toFixedNoTrailingZeros(n) {
  return parseFloat(n.toFixed(2));
}


function makeFrames() {
  const nodesFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayName: 'Total time (% of trace)'
      }
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayName: 'Self time (% of total)'
      }
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.color,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        color: {
          mode: 'continuous-GrYlRd'
        },
        displayName: 'Self time / Trace duration'
      }
    }],
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  const edgesFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }],
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  return [nodesFrame, edgesFrame];
}

 }),

 "./public/app/plugins/datasource/tempo/graphTransform.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "BC": () => ( mapPromMetricsToServiceMap),
   "M7": () => ( createGraphFrames),
   "NZ": () => ( histogramMetric),
   "Yt": () => ( totalsMetric),
   "t3": () => ( serviceMapMetrics),
   "yf": () => ( failedMetric)
 });
 var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/tracing.ts");



function createGraphFrames(data) {
  const {
    nodes,
    edges
  } = convertTraceToGraph(data);
  const [nodesFrame, edgesFrame] = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__ .np)();

  for (const node of nodes) {
    nodesFrame.add(node);
  }

  for (const edge of edges) {
    edgesFrame.add(edge);
  }

  return [nodesFrame, edgesFrame];
}

function convertTraceToGraph(data) {
  const nodes = [];
  const edges = [];
  const view = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataFrameView(data);
  const traceDuration = findTraceDuration(view);
  const spanMap = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__ .nO)(index => {
    if (index >= data.length) {
      return undefined;
    }

    const span = view.get(index);
    return {
      span: Object.assign({}, span),
      id: span.spanID,
      parentIds: span.parentSpanID ? [span.parentSpanID] : []
    };
  });

  for (let i = 0; i < view.length; i++) {
    var _row$serviceName;

    const row = view.get(i);
    const ranges = spanMap[row.spanID].children.map(c => {
      const span = spanMap[c].span;
      return [span.startTime, span.startTime + span.duration];
    });
    const childrenDuration = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__ .et)(ranges);
    const selfDuration = row.duration - childrenDuration;
    const stats = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__ .fy)(row.duration, traceDuration, selfDuration);
    nodes.push({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: row.spanID,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: (_row$serviceName = row.serviceName) !== null && _row$serviceName !== void 0 ? _row$serviceName : '',
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle]: row.operationName,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: stats.main,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: stats.secondary,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.color]: selfDuration / traceDuration
    }); 

    if (row.parentSpanID && spanMap[row.parentSpanID].span) {
      edges.push({
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: row.parentSpanID + '--' + row.spanID,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: row.spanID,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: row.parentSpanID
      });
    }
  }

  return {
    nodes,
    edges
  };
}


function findTraceDuration(view) {
  let traceEndTime = 0;
  let traceStartTime = Infinity;

  for (let i = 0; i < view.length; i++) {
    const row = view.get(i);

    if (row.startTime < traceStartTime) {
      traceStartTime = row.startTime;
    }

    if (row.startTime + row.duration > traceEndTime) {
      traceEndTime = row.startTime + row.duration;
    }
  }

  return traceEndTime - traceStartTime;
}

const secondsMetric = 'traces_service_graph_request_server_seconds_sum';
const totalsMetric = 'traces_service_graph_request_total';
const failedMetric = 'traces_service_graph_request_failed_total';
const histogramMetric = 'traces_service_graph_request_server_seconds_bucket';
const serviceMapMetrics = [secondsMetric, totalsMetric, failedMetric, histogramMetric 
];

function mapPromMetricsToServiceMap(responses, range) {
  const frames = getMetricFrames(responses); 

  const nodesMap = {};
  const edgesMap = {}; 

  collectMetricData(frames[totalsMetric], 'total', totalsMetric, nodesMap, edgesMap);
  collectMetricData(frames[secondsMetric], 'seconds', secondsMetric, nodesMap, edgesMap);
  collectMetricData(frames[failedMetric], 'failed', failedMetric, nodesMap, edgesMap);
  return convertToDataFrames(nodesMap, edgesMap, range);
}

function createServiceMapDataFrames() {
  function createDF(name, fields) {
    return new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
      name,
      fields,
      meta: {
        preferredVisualisationType: 'nodeGraph'
      }
    });
  }

  const nodes = createDF('Nodes', [{
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title,
    config: {
      displayName: 'Service name'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
    config: {
      unit: 'ms/r',
      displayName: 'Average response time'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
    config: {
      unit: 'r/sec',
      displayName: 'Requests per second'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'success',
    config: {
      displayName: 'Success',
      color: {
        fixedColor: 'green',
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed
      }
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'failed',
    config: {
      displayName: 'Failed',
      color: {
        fixedColor: 'red',
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed
      }
    }
  }]);
  const edges = createDF('Edges', [{
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
    config: {
      unit: 'r',
      displayName: 'Requests'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
    config: {
      unit: 'ms/r',
      displayName: 'Average response time'
    }
  }]);
  return [nodes, edges];
}


function getMetricFrames(responses) {
  return responses[0].data.reduce((acc, frame) => {
    acc[frame.refId] = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataFrameView(frame);
    return acc;
  }, {});
}

function collectMetricData(frame, stat, metric, nodesMap, edgesMap) {
  if (!frame) {
    return;
  } 


  const valueName = `Value #${metric}`;

  for (let i = 0; i < frame.length; i++) {
    const row = frame.get(i);
    const edgeId = `${row.client}_${row.server}`;

    if (!edgesMap[edgeId]) {
      edgesMap[edgeId] = {
        target: row.server,
        source: row.client,
        [stat]: row[valueName]
      };
    } else {
      edgesMap[edgeId][stat] = (edgesMap[edgeId][stat] || 0) + row[valueName];
    }

    if (!nodesMap[row.server]) {
      nodesMap[row.server] = {
        [stat]: row[valueName]
      };
    } else {
      nodesMap[row.server][stat] = (nodesMap[row.server][stat] || 0) + row[valueName];
    }

    if (!nodesMap[row.client]) {
      nodesMap[row.client] = {
        [stat]: 0
      };
    }
  }
}

function convertToDataFrames(nodesMap, edgesMap, range) {
  const rangeMs = range.to.valueOf() - range.from.valueOf();
  const [nodes, edges] = createServiceMapDataFrames();

  for (const nodeId of Object.keys(nodesMap)) {
    const node = nodesMap[nodeId];
    nodes.add({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: nodeId,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: nodeId,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: node.total ? node.seconds / node.total * 1000 : Number.NaN,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: node.total ? Math.round(node.total / (rangeMs / 1000) * 100) / 100 : Number.NaN,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'success']: node.total ? (node.total - Math.min(node.failed || 0, node.total)) / node.total : 1,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'failed']: node.total ? Math.min(node.failed || 0, node.total) / node.total : 0
    });
  }

  for (const edgeId of Object.keys(edgesMap)) {
    const edge = edgesMap[edgeId];
    edges.add({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: edgeId,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: edge.source,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: edge.target,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: edge.total,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: edge.total ? edge.seconds / edge.total * 1000 : Number.NaN 

    });
  }

  return {
    nodes,
    edges
  };
}

 }),

 "./public/app/plugins/datasource/tempo/resultTransformer.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "n4": () => ( createTableFrameFromSearch),
  "IM": () => ( transformFromOTLP),
  "g9": () => ( transformToOTLP),
  "Jk": () => ( transformTrace),
  "RY": () => ( transformTraceList)
});


;
var _globalThis = typeof globalThis === 'object' ? globalThis :
    typeof self === 'object' ? self :
        typeof window === 'object' ? window :
            typeof __webpack_require__.g === 'object' ? __webpack_require__.g :
                {};
;

;
var VERSION = '1.1.0';
;

var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function _makeCompatibilityCheck(ownVersion) {
    var acceptedVersions = new Set([ownVersion]);
    var rejectedVersions = new Set();
    var myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) {
        return function () { return false; };
    }
    var ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
        prerelease: myVersionMatch[4],
    };
    if (ownVersionParsed.prerelease != null) {
        return function isExactmatch(globalVersion) {
            return globalVersion === ownVersion;
        };
    }
    function _reject(v) {
        rejectedVersions.add(v);
        return false;
    }
    function _accept(v) {
        acceptedVersions.add(v);
        return true;
    }
    return function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) {
            return true;
        }
        if (rejectedVersions.has(globalVersion)) {
            return false;
        }
        var globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) {
            return _reject(globalVersion);
        }
        var globalVersionParsed = {
            major: +globalVersionMatch[1],
            minor: +globalVersionMatch[2],
            patch: +globalVersionMatch[3],
            prerelease: globalVersionMatch[4],
        };
        if (globalVersionParsed.prerelease != null) {
            return _reject(globalVersion);
        }
        if (ownVersionParsed.major !== globalVersionParsed.major) {
            return _reject(globalVersion);
        }
        if (ownVersionParsed.major === 0) {
            if (ownVersionParsed.minor === globalVersionParsed.minor &&
                ownVersionParsed.patch <= globalVersionParsed.patch) {
                return _accept(globalVersion);
            }
            return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) {
            return _accept(globalVersion);
        }
        return _reject(globalVersion);
    };
}
var isCompatible = _makeCompatibilityCheck(VERSION);
;



var major = VERSION.split('.')[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
var _global = _globalThis;
function registerGlobal(type, instance, diag, allowOverride) {
    var _a;
    if (allowOverride === void 0) { allowOverride = false; }
    var api = (_global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: VERSION,
    });
    if (!allowOverride && api[type]) {
        var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== VERSION) {
        var err = new Error('@opentelemetry/api: All API registration versions must match');
        diag.error(err.stack || err.message);
        return false;
    }
    api[type] = instance;
    diag.debug("@opentelemetry/api: Registered a global for " + type + " v" + VERSION + ".");
    return true;
}
function getGlobal(type) {
    var _a, _b;
    var globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !isCompatible(globalVersion)) {
        return;
    }
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
    diag.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + VERSION + ".");
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) {
        delete api[type];
    }
}
;

var DiagComponentLogger =  (function () {
    function DiagComponentLogger(props) {
        this._namespace = props.namespace || 'DiagComponentLogger';
    }
    DiagComponentLogger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('debug', this._namespace, args);
    };
    DiagComponentLogger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('error', this._namespace, args);
    };
    DiagComponentLogger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('info', this._namespace, args);
    };
    DiagComponentLogger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('warn', this._namespace, args);
    };
    DiagComponentLogger.prototype.verbose = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('verbose', this._namespace, args);
    };
    return DiagComponentLogger;
}());

function logProxy(funcName, namespace, args) {
    var logger = getGlobal('diag');
    if (!logger) {
        return;
    }
    args.unshift(namespace);
    return logger[funcName].apply(logger, args);
}
;
var DiagLogLevel;
(function (DiagLogLevel) {
    DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
    DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
    DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
    DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
    DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
    DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
    DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));
;

function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < DiagLogLevel.NONE) {
        maxLevel = DiagLogLevel.NONE;
    }
    else if (maxLevel > DiagLogLevel.ALL) {
        maxLevel = DiagLogLevel.ALL;
    }
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
        var theFunc = logger[funcName];
        if (typeof theFunc === 'function' && maxLevel >= theLevel) {
            return theFunc.bind(logger);
        }
        return function () { };
    }
    return {
        error: _filterFunc('error', DiagLogLevel.ERROR),
        warn: _filterFunc('warn', DiagLogLevel.WARN),
        info: _filterFunc('info', DiagLogLevel.INFO),
        debug: _filterFunc('debug', DiagLogLevel.DEBUG),
        verbose: _filterFunc('verbose', DiagLogLevel.VERBOSE),
    };
}
;




var API_NAME = 'diag';
var DiagAPI =  (function () {
    function DiagAPI() {
        function _logProxy(funcName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var logger = getGlobal('diag');
                if (!logger)
                    return;
                return logger[funcName].apply(logger, args);
            };
        }
        var self = this;
        self.setLogger = function (logger, logLevel) {
            var _a, _b;
            if (logLevel === void 0) { logLevel = DiagLogLevel.INFO; }
            if (logger === self) {
                var err = new Error('Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation');
                self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
                return false;
            }
            var oldLogger = getGlobal('diag');
            var newLogger = createLogLevelDiagLogger(logLevel, logger);
            if (oldLogger) {
                var stack = (_b = new Error().stack) !== null && _b !== void 0 ? _b : '<failed to generate stacktrace>';
                oldLogger.warn("Current logger will be overwritten from " + stack);
                newLogger.warn("Current logger will overwrite one already registered from " + stack);
            }
            return registerGlobal('diag', newLogger, self, true);
        };
        self.disable = function () {
            unregisterGlobal(API_NAME, self);
        };
        self.createComponentLogger = function (options) {
            return new DiagComponentLogger(options);
        };
        self.verbose = _logProxy('verbose');
        self.debug = _logProxy('debug');
        self.info = _logProxy('info');
        self.warn = _logProxy('warn');
        self.error = _logProxy('error');
    }
    DiagAPI.instance = function () {
        if (!this._instance) {
            this._instance = new DiagAPI();
        }
        return this._instance;
    };
    return DiagAPI;
}());

;
var BaggageImpl =  (function () {
    function BaggageImpl(entries) {
        this._entries = entries ? new Map(entries) : new Map();
    }
    BaggageImpl.prototype.getEntry = function (key) {
        var entry = this._entries.get(key);
        if (!entry) {
            return undefined;
        }
        return Object.assign({}, entry);
    };
    BaggageImpl.prototype.getAllEntries = function () {
        return Array.from(this._entries.entries()).map(function (_a) {
            var k = _a[0], v = _a[1];
            return [k, v];
        });
    };
    BaggageImpl.prototype.setEntry = function (key, entry) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntry = function (key) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntries = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var newBaggage = new BaggageImpl(this._entries);
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            newBaggage._entries.delete(key);
        }
        return newBaggage;
    };
    BaggageImpl.prototype.clear = function () {
        return new BaggageImpl();
    };
    return BaggageImpl;
}());

;
var symbol_baggageEntryMetadataSymbol = Symbol('BaggageEntryMetadata');
;



var diag = DiagAPI.instance();
function createBaggage(entries) {
    if (entries === void 0) { entries = {}; }
    return new BaggageImpl(new Map(Object.entries(entries)));
}
function baggageEntryMetadataFromString(str) {
    if (typeof str !== 'string') {
        diag.error("Cannot create baggage metadata from unknown type: " + typeof str);
        str = '';
    }
    return {
        __TYPE__: baggageEntryMetadataSymbol,
        toString: function () {
            return str;
        },
    };
}
;
var consoleMap = [
    { n: 'error', c: 'error' },
    { n: 'warn', c: 'warn' },
    { n: 'info', c: 'info' },
    { n: 'debug', c: 'debug' },
    { n: 'verbose', c: 'trace' },
];
var DiagConsoleLogger =  (function () {
    function DiagConsoleLogger() {
        function _consoleFunc(funcName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (console) {
                    var theFunc = console[funcName];
                    if (typeof theFunc !== 'function') {
                        theFunc = console.log;
                    }
                    if (typeof theFunc === 'function') {
                        return theFunc.apply(console, args);
                    }
                }
            };
        }
        for (var i = 0; i < consoleMap.length; i++) {
            this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
        }
    }
    return DiagConsoleLogger;
}());

;


;
var defaultTextMapGetter = {
    get: function (carrier, key) {
        if (carrier == null) {
            return undefined;
        }
        return carrier[key];
    },
    keys: function (carrier) {
        if (carrier == null) {
            return [];
        }
        return Object.keys(carrier);
    },
};
var defaultTextMapSetter = {
    set: function (carrier, key, value) {
        if (carrier == null) {
            return;
        }
        carrier[key] = value;
    },
};
;
function createContextKey(description) {
    return Symbol.for(description);
}
var BaseContext =  (function () {
    function BaseContext(parentContext) {
        var self = this;
        self._currentContext = parentContext ? new Map(parentContext) : new Map();
        self.getValue = function (key) { return self._currentContext.get(key); };
        self.setValue = function (key, value) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = function (key) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
    return BaseContext;
}());
var ROOT_CONTEXT = new BaseContext();
;
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};

var NoopContextManager =  (function () {
    function NoopContextManager() {
    }
    NoopContextManager.prototype.active = function () {
        return ROOT_CONTEXT;
    };
    NoopContextManager.prototype.with = function (_context, fn, thisArg) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return fn.call.apply(fn, __spreadArray([thisArg], args));
    };
    NoopContextManager.prototype.bind = function (_context, target) {
        return target;
    };
    NoopContextManager.prototype.enable = function () {
        return this;
    };
    NoopContextManager.prototype.disable = function () {
        return this;
    };
    return NoopContextManager;
}());

;
var context_spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};



var context_API_NAME = 'context';
var NOOP_CONTEXT_MANAGER = new NoopContextManager();
var ContextAPI =  (function () {
    function ContextAPI() {
    }
    ContextAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new ContextAPI();
        }
        return this._instance;
    };
    ContextAPI.prototype.setGlobalContextManager = function (contextManager) {
        return registerGlobal(context_API_NAME, contextManager, DiagAPI.instance());
    };
    ContextAPI.prototype.active = function () {
        return this._getContextManager().active();
    };
    ContextAPI.prototype.with = function (context, fn, thisArg) {
        var _a;
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return (_a = this._getContextManager()).with.apply(_a, context_spreadArray([context, fn, thisArg], args));
    };
    ContextAPI.prototype.bind = function (context, target) {
        return this._getContextManager().bind(context, target);
    };
    ContextAPI.prototype._getContextManager = function () {
        return getGlobal(context_API_NAME) || NOOP_CONTEXT_MANAGER;
    };
    ContextAPI.prototype.disable = function () {
        this._getContextManager().disable();
        unregisterGlobal(context_API_NAME, DiagAPI.instance());
    };
    return ContextAPI;
}());

;
var TraceFlags;
(function (TraceFlags) {
    TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));
;

var INVALID_SPANID = '0000000000000000';
var INVALID_TRACEID = '00000000000000000000000000000000';
var INVALID_SPAN_CONTEXT = {
    traceId: INVALID_TRACEID,
    spanId: INVALID_SPANID,
    traceFlags: TraceFlags.NONE,
};
;

var NonRecordingSpan =  (function () {
    function NonRecordingSpan(_spanContext) {
        if (_spanContext === void 0) { _spanContext = INVALID_SPAN_CONTEXT; }
        this._spanContext = _spanContext;
    }
    NonRecordingSpan.prototype.spanContext = function () {
        return this._spanContext;
    };
    NonRecordingSpan.prototype.setAttribute = function (_key, _value) {
        return this;
    };
    NonRecordingSpan.prototype.setAttributes = function (_attributes) {
        return this;
    };
    NonRecordingSpan.prototype.addEvent = function (_name, _attributes) {
        return this;
    };
    NonRecordingSpan.prototype.setStatus = function (_status) {
        return this;
    };
    NonRecordingSpan.prototype.updateName = function (_name) {
        return this;
    };
    NonRecordingSpan.prototype.end = function (_endTime) { };
    NonRecordingSpan.prototype.isRecording = function () {
        return false;
    };
    NonRecordingSpan.prototype.recordException = function (_exception, _time) { };
    return NonRecordingSpan;
}());

;


var SPAN_KEY = createContextKey('OpenTelemetry Context Key SPAN');
function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
function setSpanContext(context, spanContext) {
    return setSpan(context, new NonRecordingSpan(spanContext));
}
function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
}
;


var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== INVALID_TRACEID;
}
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== INVALID_SPANID;
}
function isSpanContextValid(spanContext) {
    return (isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId));
}
function wrapSpanContext(spanContext) {
    return new NonRecordingSpan(spanContext);
}
;




var context = ContextAPI.getInstance();
var NoopTracer =  (function () {
    function NoopTracer() {
    }
    NoopTracer.prototype.startSpan = function (name, options, context) {
        var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
            return new NonRecordingSpan();
        }
        var parentFromContext = context && getSpanContext(context);
        if (isSpanContext(parentFromContext) &&
            isSpanContextValid(parentFromContext)) {
            return new NonRecordingSpan(parentFromContext);
        }
        else {
            return new NonRecordingSpan();
        }
    };
    NoopTracer.prototype.startActiveSpan = function (name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) {
            return;
        }
        else if (arguments.length === 2) {
            fn = arg2;
        }
        else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        }
        else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : context.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = setSpan(parentContext, span);
        return context.with(contextWithSpanSet, fn, undefined, span);
    };
    return NoopTracer;
}());

function isSpanContext(spanContext) {
    return (typeof spanContext === 'object' &&
        typeof spanContext['spanId'] === 'string' &&
        typeof spanContext['traceId'] === 'string' &&
        typeof spanContext['traceFlags'] === 'number');
}
;

var NOOP_TRACER = new NoopTracer();
var ProxyTracer =  (function () {
    function ProxyTracer(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    ProxyTracer.prototype.startSpan = function (name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    };
    ProxyTracer.prototype.startActiveSpan = function (_name, _options, _context, _fn) {
        var tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    ProxyTracer.prototype._getTracer = function () {
        if (this._delegate) {
            return this._delegate;
        }
        var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer) {
            return NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
    };
    return ProxyTracer;
}());

;

var NoopTracerProvider =  (function () {
    function NoopTracerProvider() {
    }
    NoopTracerProvider.prototype.getTracer = function (_name, _version, _options) {
        return new NoopTracer();
    };
    return NoopTracerProvider;
}());

;


var NOOP_TRACER_PROVIDER = new NoopTracerProvider();
var ProxyTracerProvider =  (function () {
    function ProxyTracerProvider() {
    }
    ProxyTracerProvider.prototype.getTracer = function (name, version, options) {
        var _a;
        return ((_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new ProxyTracer(this, name, version, options));
    };
    ProxyTracerProvider.prototype.getDelegate = function () {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
    };
    ProxyTracerProvider.prototype.setDelegate = function (delegate) {
        this._delegate = delegate;
    };
    ProxyTracerProvider.prototype.getDelegateTracer = function (name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
    };
    return ProxyTracerProvider;
}());

;
var SamplingDecision;
(function (SamplingDecision) {
    SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));
;
var SpanKind;
(function (SpanKind) {
    SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
;
var SpanStatusCode;
(function (SpanStatusCode) {
    SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
;
var VALID_KEY_CHAR_RANGE = '[_0-9a-z-*/]';
var VALID_KEY = "[a-z]" + VALID_KEY_CHAR_RANGE + "{0,255}";
var VALID_VENDOR_KEY = "[a-z0-9]" + VALID_KEY_CHAR_RANGE + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE + "{0,13}";
var VALID_KEY_REGEX = new RegExp("^(?:" + VALID_KEY + "|" + VALID_VENDOR_KEY + ")$");
var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
function validateKey(key) {
    return VALID_KEY_REGEX.test(key);
}
function validateValue(value) {
    return (VALID_VALUE_BASE_REGEX.test(value) &&
        !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value));
}
;

var MAX_TRACE_STATE_ITEMS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LIST_MEMBERS_SEPARATOR = ',';
var LIST_MEMBER_KEY_VALUE_SPLITTER = '=';
var tracestate_impl_TraceStateImpl =  (function () {
    function TraceStateImpl(rawTraceState) {
        this._internalState = new Map();
        if (rawTraceState)
            this._parse(rawTraceState);
    }
    TraceStateImpl.prototype.set = function (key, value) {
        var traceState = this._clone();
        if (traceState._internalState.has(key)) {
            traceState._internalState.delete(key);
        }
        traceState._internalState.set(key, value);
        return traceState;
    };
    TraceStateImpl.prototype.unset = function (key) {
        var traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
    };
    TraceStateImpl.prototype.get = function (key) {
        return this._internalState.get(key);
    };
    TraceStateImpl.prototype.serialize = function () {
        var _this = this;
        return this._keys()
            .reduce(function (agg, key) {
            agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + _this.get(key));
            return agg;
        }, [])
            .join(LIST_MEMBERS_SEPARATOR);
    };
    TraceStateImpl.prototype._parse = function (rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN)
            return;
        this._internalState = rawTraceState
            .split(LIST_MEMBERS_SEPARATOR)
            .reverse() 
            .reduce(function (agg, part) {
            var listMember = part.trim(); 
            var i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (i !== -1) {
                var key = listMember.slice(0, i);
                var value = listMember.slice(i + 1, part.length);
                if (validateKey(key) && validateValue(value)) {
                    agg.set(key, value);
                }
                else {
                }
            }
            return agg;
        }, new Map());
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
            this._internalState = new Map(Array.from(this._internalState.entries())
                .reverse() 
                .slice(0, MAX_TRACE_STATE_ITEMS));
        }
    };
    TraceStateImpl.prototype._keys = function () {
        return Array.from(this._internalState.keys()).reverse();
    };
    TraceStateImpl.prototype._clone = function () {
        var traceState = new TraceStateImpl();
        traceState._internalState = new Map(this._internalState);
        return traceState;
    };
    return TraceStateImpl;
}());

;

function createTraceState(rawTraceState) {
    return new TraceStateImpl(rawTraceState);
}
;





var trace_API_NAME = 'trace';
var TraceAPI =  (function () {
    function TraceAPI() {
        this._proxyTracerProvider = new ProxyTracerProvider();
        this.wrapSpanContext = wrapSpanContext;
        this.isSpanContextValid = isSpanContextValid;
        this.deleteSpan = deleteSpan;
        this.getSpan = getSpan;
        this.getSpanContext = getSpanContext;
        this.setSpan = setSpan;
        this.setSpanContext = setSpanContext;
    }
    TraceAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new TraceAPI();
        }
        return this._instance;
    };
    TraceAPI.prototype.setGlobalTracerProvider = function (provider) {
        var success = registerGlobal(trace_API_NAME, this._proxyTracerProvider, DiagAPI.instance());
        if (success) {
            this._proxyTracerProvider.setDelegate(provider);
        }
        return success;
    };
    TraceAPI.prototype.getTracerProvider = function () {
        return getGlobal(trace_API_NAME) || this._proxyTracerProvider;
    };
    TraceAPI.prototype.getTracer = function (name, version) {
        return this.getTracerProvider().getTracer(name, version);
    };
    TraceAPI.prototype.disable = function () {
        unregisterGlobal(trace_API_NAME, DiagAPI.instance());
        this._proxyTracerProvider = new ProxyTracerProvider();
    };
    return TraceAPI;
}());

;
var NoopTextMapPropagator =  (function () {
    function NoopTextMapPropagator() {
    }
    NoopTextMapPropagator.prototype.inject = function (_context, _carrier) { };
    NoopTextMapPropagator.prototype.extract = function (context, _carrier) {
        return context;
    };
    NoopTextMapPropagator.prototype.fields = function () {
        return [];
    };
    return NoopTextMapPropagator;
}());

;

var BAGGAGE_KEY = createContextKey('OpenTelemetry Baggage Key');
function getBaggage(context) {
    return context.getValue(BAGGAGE_KEY) || undefined;
}
function setBaggage(context, baggage) {
    return context.setValue(BAGGAGE_KEY, baggage);
}
function deleteBaggage(context) {
    return context.deleteValue(BAGGAGE_KEY);
}
;






var propagation_API_NAME = 'propagation';
var NOOP_TEXT_MAP_PROPAGATOR = new NoopTextMapPropagator();
var PropagationAPI =  (function () {
    function PropagationAPI() {
        this.createBaggage = createBaggage;
        this.getBaggage = getBaggage;
        this.setBaggage = setBaggage;
        this.deleteBaggage = deleteBaggage;
    }
    PropagationAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new PropagationAPI();
        }
        return this._instance;
    };
    PropagationAPI.prototype.setGlobalPropagator = function (propagator) {
        return registerGlobal(propagation_API_NAME, propagator, DiagAPI.instance());
    };
    PropagationAPI.prototype.inject = function (context, carrier, setter) {
        if (setter === void 0) { setter = defaultTextMapSetter; }
        return this._getGlobalPropagator().inject(context, carrier, setter);
    };
    PropagationAPI.prototype.extract = function (context, carrier, getter) {
        if (getter === void 0) { getter = defaultTextMapGetter; }
        return this._getGlobalPropagator().extract(context, carrier, getter);
    };
    PropagationAPI.prototype.fields = function () {
        return this._getGlobalPropagator().fields();
    };
    PropagationAPI.prototype.disable = function () {
        unregisterGlobal(propagation_API_NAME, DiagAPI.instance());
    };
    PropagationAPI.prototype._getGlobalPropagator = function () {
        return getGlobal(propagation_API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
    };
    return PropagationAPI;
}());

;





























var esm_context = ContextAPI.getInstance();

var trace = TraceAPI.getInstance();

var propagation = PropagationAPI.getInstance();

var esm_diag = DiagAPI.instance();
 const esm = ({
    trace: trace,
    context: esm_context,
    propagation: propagation,
    diag: esm_diag,
});
;
var SemanticAttributes = {
    AWS_LAMBDA_INVOKED_ARN: 'aws.lambda.invoked_arn',
    DB_SYSTEM: 'db.system',
    DB_CONNECTION_STRING: 'db.connection_string',
    DB_USER: 'db.user',
    DB_JDBC_DRIVER_CLASSNAME: 'db.jdbc.driver_classname',
    DB_NAME: 'db.name',
    DB_STATEMENT: 'db.statement',
    DB_OPERATION: 'db.operation',
    DB_MSSQL_INSTANCE_NAME: 'db.mssql.instance_name',
    DB_CASSANDRA_KEYSPACE: 'db.cassandra.keyspace',
    DB_CASSANDRA_PAGE_SIZE: 'db.cassandra.page_size',
    DB_CASSANDRA_CONSISTENCY_LEVEL: 'db.cassandra.consistency_level',
    DB_CASSANDRA_TABLE: 'db.cassandra.table',
    DB_CASSANDRA_IDEMPOTENCE: 'db.cassandra.idempotence',
    DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: 'db.cassandra.speculative_execution_count',
    DB_CASSANDRA_COORDINATOR_ID: 'db.cassandra.coordinator.id',
    DB_CASSANDRA_COORDINATOR_DC: 'db.cassandra.coordinator.dc',
    DB_HBASE_NAMESPACE: 'db.hbase.namespace',
    DB_REDIS_DATABASE_INDEX: 'db.redis.database_index',
    DB_MONGODB_COLLECTION: 'db.mongodb.collection',
    DB_SQL_TABLE: 'db.sql.table',
    EXCEPTION_TYPE: 'exception.type',
    EXCEPTION_MESSAGE: 'exception.message',
    EXCEPTION_STACKTRACE: 'exception.stacktrace',
    EXCEPTION_ESCAPED: 'exception.escaped',
    FAAS_TRIGGER: 'faas.trigger',
    FAAS_EXECUTION: 'faas.execution',
    FAAS_DOCUMENT_COLLECTION: 'faas.document.collection',
    FAAS_DOCUMENT_OPERATION: 'faas.document.operation',
    FAAS_DOCUMENT_TIME: 'faas.document.time',
    FAAS_DOCUMENT_NAME: 'faas.document.name',
    FAAS_TIME: 'faas.time',
    FAAS_CRON: 'faas.cron',
    FAAS_COLDSTART: 'faas.coldstart',
    FAAS_INVOKED_NAME: 'faas.invoked_name',
    FAAS_INVOKED_PROVIDER: 'faas.invoked_provider',
    FAAS_INVOKED_REGION: 'faas.invoked_region',
    NET_TRANSPORT: 'net.transport',
    NET_PEER_IP: 'net.peer.ip',
    NET_PEER_PORT: 'net.peer.port',
    NET_PEER_NAME: 'net.peer.name',
    NET_HOST_IP: 'net.host.ip',
    NET_HOST_PORT: 'net.host.port',
    NET_HOST_NAME: 'net.host.name',
    NET_HOST_CONNECTION_TYPE: 'net.host.connection.type',
    NET_HOST_CONNECTION_SUBTYPE: 'net.host.connection.subtype',
    NET_HOST_CARRIER_NAME: 'net.host.carrier.name',
    NET_HOST_CARRIER_MCC: 'net.host.carrier.mcc',
    NET_HOST_CARRIER_MNC: 'net.host.carrier.mnc',
    NET_HOST_CARRIER_ICC: 'net.host.carrier.icc',
    PEER_SERVICE: 'peer.service',
    ENDUSER_ID: 'enduser.id',
    ENDUSER_ROLE: 'enduser.role',
    ENDUSER_SCOPE: 'enduser.scope',
    THREAD_ID: 'thread.id',
    THREAD_NAME: 'thread.name',
    CODE_FUNCTION: 'code.function',
    CODE_NAMESPACE: 'code.namespace',
    CODE_FILEPATH: 'code.filepath',
    CODE_LINENO: 'code.lineno',
    HTTP_METHOD: 'http.method',
    HTTP_URL: 'http.url',
    HTTP_TARGET: 'http.target',
    HTTP_HOST: 'http.host',
    HTTP_SCHEME: 'http.scheme',
    HTTP_STATUS_CODE: 'http.status_code',
    HTTP_FLAVOR: 'http.flavor',
    HTTP_USER_AGENT: 'http.user_agent',
    HTTP_REQUEST_CONTENT_LENGTH: 'http.request_content_length',
    HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: 'http.request_content_length_uncompressed',
    HTTP_RESPONSE_CONTENT_LENGTH: 'http.response_content_length',
    HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: 'http.response_content_length_uncompressed',
    HTTP_SERVER_NAME: 'http.server_name',
    HTTP_ROUTE: 'http.route',
    HTTP_CLIENT_IP: 'http.client_ip',
    AWS_DYNAMODB_TABLE_NAMES: 'aws.dynamodb.table_names',
    AWS_DYNAMODB_CONSUMED_CAPACITY: 'aws.dynamodb.consumed_capacity',
    AWS_DYNAMODB_ITEM_COLLECTION_METRICS: 'aws.dynamodb.item_collection_metrics',
    AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: 'aws.dynamodb.provisioned_read_capacity',
    AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: 'aws.dynamodb.provisioned_write_capacity',
    AWS_DYNAMODB_CONSISTENT_READ: 'aws.dynamodb.consistent_read',
    AWS_DYNAMODB_PROJECTION: 'aws.dynamodb.projection',
    AWS_DYNAMODB_LIMIT: 'aws.dynamodb.limit',
    AWS_DYNAMODB_ATTRIBUTES_TO_GET: 'aws.dynamodb.attributes_to_get',
    AWS_DYNAMODB_INDEX_NAME: 'aws.dynamodb.index_name',
    AWS_DYNAMODB_SELECT: 'aws.dynamodb.select',
    AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: 'aws.dynamodb.global_secondary_indexes',
    AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: 'aws.dynamodb.local_secondary_indexes',
    AWS_DYNAMODB_EXCLUSIVE_START_TABLE: 'aws.dynamodb.exclusive_start_table',
    AWS_DYNAMODB_TABLE_COUNT: 'aws.dynamodb.table_count',
    AWS_DYNAMODB_SCAN_FORWARD: 'aws.dynamodb.scan_forward',
    AWS_DYNAMODB_SEGMENT: 'aws.dynamodb.segment',
    AWS_DYNAMODB_TOTAL_SEGMENTS: 'aws.dynamodb.total_segments',
    AWS_DYNAMODB_COUNT: 'aws.dynamodb.count',
    AWS_DYNAMODB_SCANNED_COUNT: 'aws.dynamodb.scanned_count',
    AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: 'aws.dynamodb.attribute_definitions',
    AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: 'aws.dynamodb.global_secondary_index_updates',
    MESSAGING_SYSTEM: 'messaging.system',
    MESSAGING_DESTINATION: 'messaging.destination',
    MESSAGING_DESTINATION_KIND: 'messaging.destination_kind',
    MESSAGING_TEMP_DESTINATION: 'messaging.temp_destination',
    MESSAGING_PROTOCOL: 'messaging.protocol',
    MESSAGING_PROTOCOL_VERSION: 'messaging.protocol_version',
    MESSAGING_URL: 'messaging.url',
    MESSAGING_MESSAGE_ID: 'messaging.message_id',
    MESSAGING_CONVERSATION_ID: 'messaging.conversation_id',
    MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: 'messaging.message_payload_size_bytes',
    MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: 'messaging.message_payload_compressed_size_bytes',
    MESSAGING_OPERATION: 'messaging.operation',
    MESSAGING_CONSUMER_ID: 'messaging.consumer_id',
    MESSAGING_RABBITMQ_ROUTING_KEY: 'messaging.rabbitmq.routing_key',
    MESSAGING_KAFKA_MESSAGE_KEY: 'messaging.kafka.message_key',
    MESSAGING_KAFKA_CONSUMER_GROUP: 'messaging.kafka.consumer_group',
    MESSAGING_KAFKA_CLIENT_ID: 'messaging.kafka.client_id',
    MESSAGING_KAFKA_PARTITION: 'messaging.kafka.partition',
    MESSAGING_KAFKA_TOMBSTONE: 'messaging.kafka.tombstone',
    RPC_SYSTEM: 'rpc.system',
    RPC_SERVICE: 'rpc.service',
    RPC_METHOD: 'rpc.method',
    RPC_GRPC_STATUS_CODE: 'rpc.grpc.status_code',
    RPC_JSONRPC_VERSION: 'rpc.jsonrpc.version',
    RPC_JSONRPC_REQUEST_ID: 'rpc.jsonrpc.request_id',
    RPC_JSONRPC_ERROR_CODE: 'rpc.jsonrpc.error_code',
    RPC_JSONRPC_ERROR_MESSAGE: 'rpc.jsonrpc.error_message',
    MESSAGE_TYPE: 'message.type',
    MESSAGE_ID: 'message.id',
    MESSAGE_COMPRESSED_SIZE: 'message.compressed_size',
    MESSAGE_UNCOMPRESSED_SIZE: 'message.uncompressed_size',
};
var DbSystemValues = {
    OTHER_SQL: 'other_sql',
    MSSQL: 'mssql',
    MYSQL: 'mysql',
    ORACLE: 'oracle',
    DB2: 'db2',
    POSTGRESQL: 'postgresql',
    REDSHIFT: 'redshift',
    HIVE: 'hive',
    CLOUDSCAPE: 'cloudscape',
    HSQLDB: 'hsqldb',
    PROGRESS: 'progress',
    MAXDB: 'maxdb',
    HANADB: 'hanadb',
    INGRES: 'ingres',
    FIRSTSQL: 'firstsql',
    EDB: 'edb',
    CACHE: 'cache',
    ADABAS: 'adabas',
    FIREBIRD: 'firebird',
    DERBY: 'derby',
    FILEMAKER: 'filemaker',
    INFORMIX: 'informix',
    INSTANTDB: 'instantdb',
    INTERBASE: 'interbase',
    MARIADB: 'mariadb',
    NETEZZA: 'netezza',
    PERVASIVE: 'pervasive',
    POINTBASE: 'pointbase',
    SQLITE: 'sqlite',
    SYBASE: 'sybase',
    TERADATA: 'teradata',
    VERTICA: 'vertica',
    H2: 'h2',
    COLDFUSION: 'coldfusion',
    CASSANDRA: 'cassandra',
    HBASE: 'hbase',
    MONGODB: 'mongodb',
    REDIS: 'redis',
    COUCHBASE: 'couchbase',
    COUCHDB: 'couchdb',
    COSMOSDB: 'cosmosdb',
    DYNAMODB: 'dynamodb',
    NEO4J: 'neo4j',
    GEODE: 'geode',
    ELASTICSEARCH: 'elasticsearch',
    MEMCACHED: 'memcached',
    COCKROACHDB: 'cockroachdb',
};
var DbCassandraConsistencyLevelValues = {
    ALL: 'all',
    EACH_QUORUM: 'each_quorum',
    QUORUM: 'quorum',
    LOCAL_QUORUM: 'local_quorum',
    ONE: 'one',
    TWO: 'two',
    THREE: 'three',
    LOCAL_ONE: 'local_one',
    ANY: 'any',
    SERIAL: 'serial',
    LOCAL_SERIAL: 'local_serial',
};
var FaasTriggerValues = {
    DATASOURCE: 'datasource',
    HTTP: 'http',
    PUBSUB: 'pubsub',
    TIMER: 'timer',
    OTHER: 'other',
};
var FaasDocumentOperationValues = {
    INSERT: 'insert',
    EDIT: 'edit',
    DELETE: 'delete',
};
var FaasInvokedProviderValues = {
    ALIBABA_CLOUD: 'alibaba_cloud',
    AWS: 'aws',
    AZURE: 'azure',
    GCP: 'gcp',
};
var NetTransportValues = {
    IP_TCP: 'ip_tcp',
    IP_UDP: 'ip_udp',
    IP: 'ip',
    UNIX: 'unix',
    PIPE: 'pipe',
    INPROC: 'inproc',
    OTHER: 'other',
};
var NetHostConnectionTypeValues = {
    WIFI: 'wifi',
    WIRED: 'wired',
    CELL: 'cell',
    UNAVAILABLE: 'unavailable',
    UNKNOWN: 'unknown',
};
var NetHostConnectionSubtypeValues = {
    GPRS: 'gprs',
    EDGE: 'edge',
    UMTS: 'umts',
    CDMA: 'cdma',
    EVDO_0: 'evdo_0',
    EVDO_A: 'evdo_a',
    CDMA2000_1XRTT: 'cdma2000_1xrtt',
    HSDPA: 'hsdpa',
    HSUPA: 'hsupa',
    HSPA: 'hspa',
    IDEN: 'iden',
    EVDO_B: 'evdo_b',
    LTE: 'lte',
    EHRPD: 'ehrpd',
    HSPAP: 'hspap',
    GSM: 'gsm',
    TD_SCDMA: 'td_scdma',
    IWLAN: 'iwlan',
    NR: 'nr',
    NRNSA: 'nrnsa',
    LTE_CA: 'lte_ca',
};
var HttpFlavorValues = {
    HTTP_1_0: '1.0',
    HTTP_1_1: '1.1',
    HTTP_2_0: '2.0',
    SPDY: 'SPDY',
    QUIC: 'QUIC',
};
var MessagingDestinationKindValues = {
    QUEUE: 'queue',
    TOPIC: 'topic',
};
var MessagingOperationValues = {
    RECEIVE: 'receive',
    PROCESS: 'process',
};
var RpcGrpcStatusCodeValues = {
    OK: 0,
    CANCELLED: 1,
    UNKNOWN: 2,
    INVALID_ARGUMENT: 3,
    DEADLINE_EXCEEDED: 4,
    NOT_FOUND: 5,
    ALREADY_EXISTS: 6,
    PERMISSION_DENIED: 7,
    RESOURCE_EXHAUSTED: 8,
    FAILED_PRECONDITION: 9,
    ABORTED: 10,
    OUT_OF_RANGE: 11,
    UNIMPLEMENTED: 12,
    INTERNAL: 13,
    UNAVAILABLE: 14,
    DATA_LOSS: 15,
    UNAUTHENTICATED: 16,
};
var MessageTypeValues = {
    SENT: 'SENT',
    RECEIVED: 'RECEIVED',
};
;

;
var SemanticResourceAttributes = {
    CLOUD_PROVIDER: 'cloud.provider',
    CLOUD_ACCOUNT_ID: 'cloud.account.id',
    CLOUD_REGION: 'cloud.region',
    CLOUD_AVAILABILITY_ZONE: 'cloud.availability_zone',
    CLOUD_PLATFORM: 'cloud.platform',
    AWS_ECS_CONTAINER_ARN: 'aws.ecs.container.arn',
    AWS_ECS_CLUSTER_ARN: 'aws.ecs.cluster.arn',
    AWS_ECS_LAUNCHTYPE: 'aws.ecs.launchtype',
    AWS_ECS_TASK_ARN: 'aws.ecs.task.arn',
    AWS_ECS_TASK_FAMILY: 'aws.ecs.task.family',
    AWS_ECS_TASK_REVISION: 'aws.ecs.task.revision',
    AWS_EKS_CLUSTER_ARN: 'aws.eks.cluster.arn',
    AWS_LOG_GROUP_NAMES: 'aws.log.group.names',
    AWS_LOG_GROUP_ARNS: 'aws.log.group.arns',
    AWS_LOG_STREAM_NAMES: 'aws.log.stream.names',
    AWS_LOG_STREAM_ARNS: 'aws.log.stream.arns',
    CONTAINER_NAME: 'container.name',
    CONTAINER_ID: 'container.id',
    CONTAINER_RUNTIME: 'container.runtime',
    CONTAINER_IMAGE_NAME: 'container.image.name',
    CONTAINER_IMAGE_TAG: 'container.image.tag',
    DEPLOYMENT_ENVIRONMENT: 'deployment.environment',
    DEVICE_ID: 'device.id',
    DEVICE_MODEL_IDENTIFIER: 'device.model.identifier',
    DEVICE_MODEL_NAME: 'device.model.name',
    FAAS_NAME: 'faas.name',
    FAAS_ID: 'faas.id',
    FAAS_VERSION: 'faas.version',
    FAAS_INSTANCE: 'faas.instance',
    FAAS_MAX_MEMORY: 'faas.max_memory',
    HOST_ID: 'host.id',
    HOST_NAME: 'host.name',
    HOST_TYPE: 'host.type',
    HOST_ARCH: 'host.arch',
    HOST_IMAGE_NAME: 'host.image.name',
    HOST_IMAGE_ID: 'host.image.id',
    HOST_IMAGE_VERSION: 'host.image.version',
    K8S_CLUSTER_NAME: 'k8s.cluster.name',
    K8S_NODE_NAME: 'k8s.node.name',
    K8S_NODE_UID: 'k8s.node.uid',
    K8S_NAMESPACE_NAME: 'k8s.namespace.name',
    K8S_POD_UID: 'k8s.pod.uid',
    K8S_POD_NAME: 'k8s.pod.name',
    K8S_CONTAINER_NAME: 'k8s.container.name',
    K8S_REPLICASET_UID: 'k8s.replicaset.uid',
    K8S_REPLICASET_NAME: 'k8s.replicaset.name',
    K8S_DEPLOYMENT_UID: 'k8s.deployment.uid',
    K8S_DEPLOYMENT_NAME: 'k8s.deployment.name',
    K8S_STATEFULSET_UID: 'k8s.statefulset.uid',
    K8S_STATEFULSET_NAME: 'k8s.statefulset.name',
    K8S_DAEMONSET_UID: 'k8s.daemonset.uid',
    K8S_DAEMONSET_NAME: 'k8s.daemonset.name',
    K8S_JOB_UID: 'k8s.job.uid',
    K8S_JOB_NAME: 'k8s.job.name',
    K8S_CRONJOB_UID: 'k8s.cronjob.uid',
    K8S_CRONJOB_NAME: 'k8s.cronjob.name',
    OS_TYPE: 'os.type',
    OS_DESCRIPTION: 'os.description',
    OS_NAME: 'os.name',
    OS_VERSION: 'os.version',
    PROCESS_PID: 'process.pid',
    PROCESS_EXECUTABLE_NAME: 'process.executable.name',
    PROCESS_EXECUTABLE_PATH: 'process.executable.path',
    PROCESS_COMMAND: 'process.command',
    PROCESS_COMMAND_LINE: 'process.command_line',
    PROCESS_COMMAND_ARGS: 'process.command_args',
    PROCESS_OWNER: 'process.owner',
    PROCESS_RUNTIME_NAME: 'process.runtime.name',
    PROCESS_RUNTIME_VERSION: 'process.runtime.version',
    PROCESS_RUNTIME_DESCRIPTION: 'process.runtime.description',
    SERVICE_NAME: 'service.name',
    SERVICE_NAMESPACE: 'service.namespace',
    SERVICE_INSTANCE_ID: 'service.instance.id',
    SERVICE_VERSION: 'service.version',
    TELEMETRY_SDK_NAME: 'telemetry.sdk.name',
    TELEMETRY_SDK_LANGUAGE: 'telemetry.sdk.language',
    TELEMETRY_SDK_VERSION: 'telemetry.sdk.version',
    TELEMETRY_AUTO_VERSION: 'telemetry.auto.version',
    WEBENGINE_NAME: 'webengine.name',
    WEBENGINE_VERSION: 'webengine.version',
    WEBENGINE_DESCRIPTION: 'webengine.description',
};
var CloudProviderValues = {
    ALIBABA_CLOUD: 'alibaba_cloud',
    AWS: 'aws',
    AZURE: 'azure',
    GCP: 'gcp',
};
var CloudPlatformValues = {
    ALIBABA_CLOUD_ECS: 'alibaba_cloud_ecs',
    ALIBABA_CLOUD_FC: 'alibaba_cloud_fc',
    AWS_EC2: 'aws_ec2',
    AWS_ECS: 'aws_ecs',
    AWS_EKS: 'aws_eks',
    AWS_LAMBDA: 'aws_lambda',
    AWS_ELASTIC_BEANSTALK: 'aws_elastic_beanstalk',
    AZURE_VM: 'azure_vm',
    AZURE_CONTAINER_INSTANCES: 'azure_container_instances',
    AZURE_AKS: 'azure_aks',
    AZURE_FUNCTIONS: 'azure_functions',
    AZURE_APP_SERVICE: 'azure_app_service',
    GCP_COMPUTE_ENGINE: 'gcp_compute_engine',
    GCP_CLOUD_RUN: 'gcp_cloud_run',
    GCP_KUBERNETES_ENGINE: 'gcp_kubernetes_engine',
    GCP_CLOUD_FUNCTIONS: 'gcp_cloud_functions',
    GCP_APP_ENGINE: 'gcp_app_engine',
};
var AwsEcsLaunchtypeValues = {
    EC2: 'ec2',
    FARGATE: 'fargate',
};
var HostArchValues = {
    AMD64: 'amd64',
    ARM32: 'arm32',
    ARM64: 'arm64',
    IA64: 'ia64',
    PPC32: 'ppc32',
    PPC64: 'ppc64',
    X86: 'x86',
};
var OsTypeValues = {
    WINDOWS: 'windows',
    LINUX: 'linux',
    DARWIN: 'darwin',
    FREEBSD: 'freebsd',
    NETBSD: 'netbsd',
    OPENBSD: 'openbsd',
    DRAGONFLYBSD: 'dragonflybsd',
    HPUX: 'hpux',
    AIX: 'aix',
    SOLARIS: 'solaris',
    Z_OS: 'z_os',
};
var TelemetrySdkLanguageValues = {
    CPP: 'cpp',
    DOTNET: 'dotnet',
    ERLANG: 'erlang',
    GO: 'go',
    JAVA: 'java',
    NODEJS: 'nodejs',
    PHP: 'php',
    PYTHON: 'python',
    RUBY: 'ruby',
    WEBJS: 'webjs',
};
;

;


var differenceInHours = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInHours/index.js");
var formatDistance = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var graphTransform = __webpack_require__("./public/app/plugins/datasource/tempo/graphTransform.ts");
;






function createTableFrame(logsFrame, datasourceUid, datasourceName, traceRegexs) {
  const tableFrame = new src.MutableDataFrame({
    fields: [{
      name: 'Time',
      type: src.FieldType.time,
      config: {
        custom: {
          width: 150
        }
      }
    }, {
      name: 'traceID',
      type: src.FieldType.string,
      config: {
        displayNameFromDS: 'Trace ID',
        custom: {
          width: 300
        },
        links: [{
          title: 'Click to open trace ${__value.raw}',
          url: '',
          internal: {
            datasourceUid,
            datasourceName,
            query: {
              query: '${__value.raw}'
            }
          }
        }]
      }
    }, {
      name: 'Message',
      type: src.FieldType.string
    }],
    meta: {
      preferredVisualisationType: 'table'
    }
  });

  if (!logsFrame || traceRegexs.length === 0) {
    return tableFrame;
  }

  const timeField = logsFrame.fields.find(f => f.type === src.FieldType.time); 

  for (let field of logsFrame.fields) {
    let hasMatch = false;

    if (field.type === src.FieldType.string) {
      const values = field.values.toArray();

      for (let i = 0; i < values.length; i++) {
        const line = values[i];

        if (line) {
          for (let traceRegex of traceRegexs) {
            const match = line.match(traceRegex);

            if (match) {
              const traceId = match[1];
              const time = timeField ? timeField.values.get(i) : null;
              tableFrame.fields[0].values.add(time);
              tableFrame.fields[1].values.add(traceId);
              tableFrame.fields[2].values.add(line);
              hasMatch = true;
            }
          }
        }
      }
    }

    if (hasMatch) {
      break;
    }
  }

  return tableFrame;
}
function transformTraceList(response, datasourceId, datasourceName, traceRegexs) {
  response.data.forEach((data, index) => {
    const frame = createTableFrame(data, datasourceId, datasourceName, traceRegexs);
    response.data[index] = frame;
  });
  return response;
} 

function transformBase64IDToHexString(base64) {
  const raw = atob(base64);
  let result = '';

  for (let i = 0; i < raw.length; i++) {
    const hex = raw.charCodeAt(i).toString(16);
    result += hex.length === 2 ? hex : '0' + hex;
  }

  return result.length > 16 ? result.slice(16) : result;
}

function transformHexStringToBase64ID(hex) {
  const hexArray = hex.match(/\w{2}/g) || [];
  return btoa(hexArray.map(function (a) {
    return String.fromCharCode(parseInt(a, 16));
  }).join(''));
}

function getAttributeValue(value) {
  if (value.stringValue) {
    return value.stringValue;
  }

  if (value.boolValue !== undefined) {
    return Boolean(value.boolValue);
  }

  if (value.intValue !== undefined) {
    return Number.parseInt(value.intValue, 10);
  }

  if (value.doubleValue) {
    return Number.parseFloat(value.doubleValue);
  }

  if (value.arrayValue) {
    const arrayValue = [];

    for (const arValue of value.arrayValue.values) {
      arrayValue.push(getAttributeValue(arValue));
    }

    return arrayValue;
  }

  return '';
}

function resourceToProcess(resource) {
  const serviceTags = [];
  let serviceName = 'OTLPResourceNoServiceName';

  if (!resource) {
    return {
      serviceName,
      serviceTags
    };
  }

  for (const attribute of resource.attributes) {
    if (attribute.key === SemanticResourceAttributes.SERVICE_NAME) {
      serviceName = attribute.value.stringValue || serviceName;
    }

    serviceTags.push({
      key: attribute.key,
      value: getAttributeValue(attribute.value)
    });
  }

  return {
    serviceName,
    serviceTags
  };
}

function getSpanTags(span, instrumentationLibrary) {
  const spanTags = [];

  if (instrumentationLibrary) {
    if (instrumentationLibrary.name) {
      spanTags.push({
        key: 'otel.library.name',
        value: instrumentationLibrary.name
      });
    }

    if (instrumentationLibrary.version) {
      spanTags.push({
        key: 'otel.library.version',
        value: instrumentationLibrary.version
      });
    }
  }

  if (span.attributes) {
    for (const attribute of span.attributes) {
      spanTags.push({
        key: attribute.key,
        value: getAttributeValue(attribute.value)
      });
    }
  }

  if (span.status) {
    if (span.status.code && span.status.code !== SpanStatusCode.UNSET) {
      spanTags.push({
        key: 'otel.status_code',
        value: SpanStatusCode[span.status.code]
      });

      if (span.status.message) {
        spanTags.push({
          key: 'otel.status_description',
          value: span.status.message
        });
      }
    }

    if (span.status.code === SpanStatusCode.ERROR) {
      spanTags.push({
        key: 'error',
        value: true
      });
    }
  }

  if (span.kind !== undefined) {
    const split = span.kind.toString().toLowerCase().split('_');
    spanTags.push({
      key: 'span.kind',
      value: split.length ? split[split.length - 1] : span.kind.toString()
    });
  }

  return spanTags;
}

function getReferences(span) {
  const references = [];

  if (span.links) {
    for (const link of span.links) {
      const {
        traceId,
        spanId
      } = link;
      const tags = [];

      if (link.attributes) {
        for (const attribute of link.attributes) {
          tags.push({
            key: attribute.key,
            value: getAttributeValue(attribute.value)
          });
        }
      }

      references.push({
        traceID: traceId,
        spanID: spanId,
        tags
      });
    }
  }

  return references;
}

function getLogs(span) {
  const logs = [];

  if (span.events) {
    for (const event of span.events) {
      const fields = [];

      if (event.attributes) {
        for (const attribute of event.attributes) {
          fields.push({
            key: attribute.key,
            value: getAttributeValue(attribute.value)
          });
        }
      }

      logs.push({
        fields,
        timestamp: event.timeUnixNano / 1000000
      });
    }
  }

  return logs;
}

function transformFromOTLP(traceData) {
  let nodeGraph = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const frame = new src.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: src.FieldType.string
    }, {
      name: 'spanID',
      type: src.FieldType.string
    }, {
      name: 'parentSpanID',
      type: src.FieldType.string
    }, {
      name: 'operationName',
      type: src.FieldType.string
    }, {
      name: 'serviceName',
      type: src.FieldType.string
    }, {
      name: 'serviceTags',
      type: src.FieldType.other
    }, {
      name: 'startTime',
      type: src.FieldType.number
    }, {
      name: 'duration',
      type: src.FieldType.number
    }, {
      name: 'logs',
      type: src.FieldType.other
    }, {
      name: 'references',
      type: src.FieldType.other
    }, {
      name: 'tags',
      type: src.FieldType.other
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'otlp'
      }
    }
  });

  try {
    for (const data of traceData) {
      const {
        serviceName,
        serviceTags
      } = resourceToProcess(data.resource);

      for (const librarySpan of data.instrumentationLibrarySpans) {
        for (const span of librarySpan.spans) {
          frame.add({
            traceID: transformBase64IDToHexString(span.traceId),
            spanID: transformBase64IDToHexString(span.spanId),
            parentSpanID: transformBase64IDToHexString(span.parentSpanId || ''),
            operationName: span.name || '',
            serviceName,
            serviceTags,
            startTime: span.startTimeUnixNano / 1000000,
            duration: (span.endTimeUnixNano - span.startTimeUnixNano) / 1000000,
            tags: getSpanTags(span, librarySpan.instrumentationLibrary),
            logs: getLogs(span),
            references: getReferences(span)
          });
        }
      }
    }
  } catch (error) {
    console.error(error);
    return {
      error: {
        message: 'JSON is not valid OpenTelemetry format: ' + error
      },
      data: []
    };
  }

  let data = [frame];

  if (nodeGraph) {
    data.push(...(0,graphTransform.M7)(frame));
  }

  return {
    data
  };
}

function transformToOTLP(data) {
  let result = {
    batches: []
  }; 

  let services = {};

  for (let i = 0; i < data.length; i++) {
    const span = data.get(i); 

    if (!services[span.serviceName]) {
      services[span.serviceName] = result.batches.length;
      result.batches.push({
        resource: {
          attributes: [],
          droppedAttributesCount: 0
        },
        instrumentationLibrarySpans: [{
          spans: []
        }]
      });
    }

    let batchIndex = services[span.serviceName]; 

    if (result.batches[batchIndex].resource.attributes.length === 0) {
      result.batches[batchIndex].resource.attributes = tagsToAttributes(span.serviceTags);
    } 


    if (!result.batches[batchIndex].instrumentationLibrarySpans[0].instrumentationLibrary) {
      var _span$tags$find;

      let libraryName = (_span$tags$find = span.tags.find(t => t.key === 'otel.library.name')) === null || _span$tags$find === void 0 ? void 0 : _span$tags$find.value;

      if (libraryName) {
        var _span$tags$find2;

        result.batches[batchIndex].instrumentationLibrarySpans[0].instrumentationLibrary = {
          name: libraryName,
          version: (_span$tags$find2 = span.tags.find(t => t.key === 'otel.library.version')) === null || _span$tags$find2 === void 0 ? void 0 : _span$tags$find2.value
        };
      }
    }

    result.batches[batchIndex].instrumentationLibrarySpans[0].spans.push({
      traceId: transformHexStringToBase64ID(span.traceID.padStart(32, '0')),
      spanId: transformHexStringToBase64ID(span.spanID),
      traceState: '',
      parentSpanId: transformHexStringToBase64ID(span.parentSpanID || ''),
      name: span.operationName,
      kind: getOTLPSpanKind(span.tags),
      startTimeUnixNano: span.startTime * 1000000,
      endTimeUnixNano: (span.startTime + span.duration) * 1000000,
      attributes: tagsToAttributes(span.tags),
      droppedAttributesCount: 0,
      droppedEventsCount: 0,
      droppedLinksCount: 0,
      status: getOTLPStatus(span.tags),
      events: getOTLPEvents(span.logs),
      links: getOTLPReferences(span.references)
    });
  }

  return result;
}

function getOTLPSpanKind(tags) {
  var _tags$find;

  let spanKind = undefined;
  const spanKindTagValue = (_tags$find = tags.find(t => t.key === 'span.kind')) === null || _tags$find === void 0 ? void 0 : _tags$find.value;

  switch (spanKindTagValue) {
    case 'server':
      spanKind = 'SPAN_KIND_SERVER';
      break;

    case 'client':
      spanKind = 'SPAN_KIND_CLIENT';
      break;

    case 'producer':
      spanKind = 'SPAN_KIND_PRODUCER';
      break;

    case 'consumer':
      spanKind = 'SPAN_KIND_CONSUMER';
      break;
  }

  return spanKind;
}


function tagsToAttributes(tags) {
  return tags.filter(t => !['span.kind', 'otel.library.name', 'otel.libary.version', 'otel.status_description', 'otel.status_code'].includes(t.key)).reduce((attributes, tag) => [...attributes, {
    key: tag.key,
    value: toAttributeValue(tag)
  }], []);
}


function toAttributeValue(tag) {
  if (typeof tag.value === 'string') {
    return {
      stringValue: tag.value
    };
  } else if (typeof tag.value === 'boolean') {
    return {
      boolValue: tag.value
    };
  } else if (typeof tag.value === 'number') {
    if (tag.value % 1 === 0) {
      return {
        intValue: tag.value
      };
    } else {
      return {
        doubleValue: tag.value
      };
    }
  } else if (typeof tag.value === 'object') {
    if (Array.isArray(tag.value)) {
      const values = [];

      for (const val of tag.value) {
        values.push(toAttributeValue(val));
      }

      return {
        arrayValue: {
          values
        }
      };
    }
  }

  return {
    stringValue: tag.value
  };
}

function getOTLPStatus(tags) {
  let status = undefined;
  const statusCodeTag = tags.find(t => t.key === 'otel.status_code');

  if (statusCodeTag) {
    var _tags$find2;

    status = {
      code: statusCodeTag.value,
      message: (_tags$find2 = tags.find(t => t.key === 'otel_status_description')) === null || _tags$find2 === void 0 ? void 0 : _tags$find2.value
    };
  }

  return status;
}

function getOTLPEvents(logs) {
  if (!logs || !logs.length) {
    return undefined;
  }

  let events = [];

  for (const log of logs) {
    let event = {
      timeUnixNano: log.timestamp * 1000000,
      attributes: [],
      droppedAttributesCount: 0,
      name: ''
    };

    for (const field of log.fields) {
      event.attributes.push({
        key: field.key,
        value: toAttributeValue(field)
      });
    }

    events.push(event);
  }

  return events;
}

function getOTLPReferences(references) {
  if (!references || !references.length) {
    return undefined;
  }

  let links = [];

  for (const ref of references) {
    var _ref$tags;

    let link = {
      traceId: ref.traceID,
      spanId: ref.spanID,
      attributes: [],
      droppedAttributesCount: 0
    };

    if ((_ref$tags = ref.tags) !== null && _ref$tags !== void 0 && _ref$tags.length) {
      for (const tag of ref.tags) {
        var _link$attributes;

        (_link$attributes = link.attributes) === null || _link$attributes === void 0 ? void 0 : _link$attributes.push({
          key: tag.key,
          value: toAttributeValue(tag)
        });
      }
    }

    links.push(link);
  }

  return links;
}

function transformTrace(response) {
  let nodeGraph = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const frame = response.data[0];

  if (!frame) {
    return emptyDataQueryResponse;
  }

  try {
    parseJsonFields(frame);
  } catch (error) {
    console.error(error);
    return {
      error: {
        message: 'Unable to parse trace response: ' + error
      },
      data: []
    };
  }

  let data = [...response.data];

  if (nodeGraph) {
    data.push(...(0,graphTransform.M7)(frame));
  }

  return Object.assign({}, response, {
    data
  });
}

function parseJsonFields(frame) {
  for (const fieldName of ['serviceTags', 'logs', 'tags', 'references']) {
    const field = frame.fields.find(f => f.name === fieldName);

    if (field) {
      const fieldIndex = frame.fields.indexOf(field);
      const values = new src.ArrayVector();
      const newField = Object.assign({}, field, {
        values,
        type: src.FieldType.other
      });

      for (let i = 0; i < field.values.length; i++) {
        const value = field.values.get(i);
        values.set(i, value === '' ? undefined : JSON.parse(value));
      }

      frame.fields[fieldIndex] = newField;
    }
  }
}

function createTableFrameFromSearch(data, instanceSettings) {
  const frame = new src.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: src.FieldType.string,
      config: {
        unit: 'string',
        displayNameFromDS: 'Trace ID',
        links: [{
          title: 'Trace: ${__value.raw}',
          url: '',
          internal: {
            datasourceUid: instanceSettings.uid,
            datasourceName: instanceSettings.name,
            query: {
              query: '${__value.raw}',
              queryType: 'traceId'
            }
          }
        }]
      }
    }, {
      name: 'traceName',
      type: src.FieldType.string,
      config: {
        displayNameFromDS: 'Trace name'
      }
    }, {
      name: 'startTime',
      type: src.FieldType.string,
      config: {
        displayNameFromDS: 'Start time'
      }
    }, {
      name: 'duration',
      type: src.FieldType.number,
      config: {
        displayNameFromDS: 'Duration',
        unit: 'ms'
      }
    }],
    meta: {
      preferredVisualisationType: 'table'
    }
  });

  if (!(data !== null && data !== void 0 && data.length)) {
    return frame;
  } 


  const traceData = data.sort((a, b) => parseInt(b === null || b === void 0 ? void 0 : b.startTimeUnixNano, 10) / 1000000 - parseInt(a === null || a === void 0 ? void 0 : a.startTimeUnixNano, 10) / 1000000).map(transformToTraceData);

  for (const trace of traceData) {
    frame.add(trace);
  }

  return frame;
}

function transformToTraceData(data) {
  let traceName = '';

  if (data.rootServiceName) {
    traceName += data.rootServiceName + ' ';
  }

  if (data.rootTraceName) {
    traceName += data.rootTraceName;
  }

  const traceStartTime = parseInt(data.startTimeUnixNano, 10) / 1000000;
  let startTime = (0,src.dateTimeFormat)(traceStartTime);

  if (Math.abs((0,differenceInHours.Z)(new Date(traceStartTime), Date.now())) <= 1) {
    startTime = (0,formatDistance.Z)(new Date(traceStartTime), Date.now(), {
      addSuffix: true,
      includeSeconds: true
    });
  }

  return {
    traceID: data.traceID,
    startTime: startTime,
    duration: data.durationMs,
    traceName
  };
}

const emptyDataQueryResponse = {
  data: [new src.MutableDataFrame({
    fields: [{
      name: 'trace',
      type: src.FieldType.trace,
      values: []
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'otlp'
      }
    }
  })]
};

 }),

 "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "Z": () => ( formatDistance)
});

var compareAsc = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/compareAsc/index.js");
var differenceInMonths = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInMonths/index.js");
var differenceInSeconds = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInSeconds/index.js");
var en_US = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/locale/en-US/index.js");
var toDate = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/toDate/index.js");
;
function assign_assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}
;

function cloneObject(dirtyObject) {
  return assign_assign({}, dirtyObject);
}
var getTimezoneOffsetInMilliseconds = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
var requiredArgs = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/requiredArgs/index.js");
;








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;

function formatDistance(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,requiredArgs.Z)(2, arguments);
  var locale = options.locale || en_US.Z;

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,compareAsc.Z)(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = cloneObject(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,toDate.Z)(dirtyBaseDate);
    dateRight = (0,toDate.Z)(dirtyDate);
  } else {
    dateLeft = (0,toDate.Z)(dirtyDate);
    dateRight = (0,toDate.Z)(dirtyBaseDate);
  }

  var seconds = (0,differenceInSeconds.Z)(dateRight, dateLeft);
  var offsetInSeconds = ((0,getTimezoneOffsetInMilliseconds.Z)(dateRight) - (0,getTimezoneOffsetInMilliseconds.Z)(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; 

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } 

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); 
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); 
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); 
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); 
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); 
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,differenceInMonths.Z)(dateRight, dateLeft); 

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); 
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); 

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); 
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); 
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

 })

}]);