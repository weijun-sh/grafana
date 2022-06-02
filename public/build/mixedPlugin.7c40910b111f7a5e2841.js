"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[2001],{

 "./public/app/plugins/datasource/mixed/module.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "Datasource": () => ( MixedDatasource),
  "MixedDatasource": () => ( MixedDatasource)
});

var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
var from = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
var forkJoin = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js");
var mergeMap = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
var toArray = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/toArray.js");
var catchError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
var mergeAll = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");
var reduce = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/reduce.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
;





const MIXED_DATASOURCE_NAME = '-- Mixed --';
class MixedDatasource extends src.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
  }

  query(request) {
    const queries = request.targets.filter(t => {
      var _t$datasource;

      return ((_t$datasource = t.datasource) === null || _t$datasource === void 0 ? void 0 : _t$datasource.uid) !== MIXED_DATASOURCE_NAME;
    });

    if (!queries.length) {
      return (0,of.of)({
        data: []
      }); 
    } 


    const sets = (0,lodash.groupBy)(queries, 'datasource.uid');
    const mixed = [];

    for (const key in sets) {
      const targets = sets[key];
      mixed.push({
        datasource: (0,grafana_runtime_src.getDataSourceSrv)().get(targets[0].datasource, request.scopedVars),
        targets
      });
    } 


    if (!mixed.length) {
      return (0,of.of)({
        data: []
      }); 
    }

    return this.batchQueries(mixed, request);
  }

  batchQueries(mixed, request) {
    const runningQueries = mixed.filter(this.isQueryable).map((query, i) => (0,from.D)(query.datasource).pipe((0,mergeMap.z)(api => {
      const dsRequest = (0,lodash.cloneDeep)(request);
      dsRequest.requestId = `mixed-${i}-${dsRequest.requestId || ''}`;
      dsRequest.targets = query.targets;
      return (0,from.D)(api.query(dsRequest)).pipe((0,map.U)(response => {
        return Object.assign({}, response, {
          data: response.data || [],
          state: src.LoadingState.Loading,
          key: `mixed-${i}-${response.key || ''}`
        });
      }), (0,toArray.q)(), (0,catchError.K)(err => {
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
    return (0,forkJoin.D)(runningQueries).pipe(flattenResponses(), (0,map.U)(this.finalizeResponses), (0,mergeAll.J)());
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
      responses.push(error); 
    } else {
      responses[length - 1].state = src.LoadingState.Done;
    }

    return responses;
  }

}

function flattenResponses() {
  return (0,reduce.u)((all, current) => {
    return current.reduce((innerAll, innerCurrent) => {
      innerAll.push.apply(innerAll, innerCurrent);
      return innerAll;
    }, all);
  }, []);
}
;



 })

}]);