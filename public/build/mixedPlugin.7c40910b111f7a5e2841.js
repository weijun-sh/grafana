"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[2001],{

/***/ "./public/app/plugins/datasource/mixed/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Datasource": () => (/* reexport */ MixedDatasource),
  "MixedDatasource": () => (/* reexport */ MixedDatasource)
});

// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js
var from = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js
var forkJoin = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
var mergeMap = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/toArray.js
var toArray = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/toArray.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js
var catchError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
var mergeAll = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/reduce.js
var reduce = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/reduce.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/mixed/MixedDataSource.ts





const MIXED_DATASOURCE_NAME = '-- Mixed --';
class MixedDatasource extends src.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
  }

  query(request) {
    // Remove any invalid queries
    const queries = request.targets.filter(t => {
      var _t$datasource;

      return ((_t$datasource = t.datasource) === null || _t$datasource === void 0 ? void 0 : _t$datasource.uid) !== MIXED_DATASOURCE_NAME;
    });

    if (!queries.length) {
      return (0,of.of)({
        data: []
      }); // nothing
    } // Build groups of queries to run in parallel


    const sets = (0,lodash.groupBy)(queries, 'datasource.uid');
    const mixed = [];

    for (const key in sets) {
      const targets = sets[key];
      mixed.push({
        datasource: (0,grafana_runtime_src.getDataSourceSrv)().get(targets[0].datasource, request.scopedVars),
        targets
      });
    } // Missing UIDs?


    if (!mixed.length) {
      return (0,of.of)({
        data: []
      }); // nothing
    }

    return this.batchQueries(mixed, request);
  }

  batchQueries(mixed, request) {
    const runningQueries = mixed.filter(this.isQueryable).map((query, i) => (0,from/* from */.D)(query.datasource).pipe((0,mergeMap/* mergeMap */.z)(api => {
      const dsRequest = (0,lodash.cloneDeep)(request);
      dsRequest.requestId = `mixed-${i}-${dsRequest.requestId || ''}`;
      dsRequest.targets = query.targets;
      return (0,from/* from */.D)(api.query(dsRequest)).pipe((0,map/* map */.U)(response => {
        return Object.assign({}, response, {
          data: response.data || [],
          state: src.LoadingState.Loading,
          key: `mixed-${i}-${response.key || ''}`
        });
      }), (0,toArray/* toArray */.q)(), (0,catchError/* catchError */.K)(err => {
        err = (0,grafana_runtime_src.toDataQueryError)(err);
        err.message = `${api.name}: ${err.message}`;
        return (0,of.of)([{
          data: [],
          state: src.LoadingState.Error,
          error: err,
          key: `mixed-${i}-${dsRequest.requestId || ''}`
        }]);
      }));
    })));
    return (0,forkJoin/* forkJoin */.D)(runningQueries).pipe(flattenResponses(), (0,map/* map */.U)(this.finalizeResponses), (0,mergeAll/* mergeAll */.J)());
  }

  testDatasource() {
    return Promise.resolve({});
  }

  isQueryable(query) {
    return query && Array.isArray(query.targets) && query.targets.length > 0;
  }

  finalizeResponses(responses) {
    const {
      length
    } = responses;

    if (length === 0) {
      return responses;
    }

    const error = responses.find(response => response.state === src.LoadingState.Error);

    if (error) {
      responses.push(error); // adds the first found error entry so error shows up in the panel
    } else {
      responses[length - 1].state = src.LoadingState.Done;
    }

    return responses;
  }

}

function flattenResponses() {
  return (0,reduce/* reduce */.u)((all, current) => {
    return current.reduce((innerAll, innerCurrent) => {
      innerAll.push.apply(innerAll, innerCurrent);
      return innerAll;
    }, all);
  }, []);
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/mixed/module.ts



/***/ })

}]);