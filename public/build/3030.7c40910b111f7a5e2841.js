"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[3030],{

 "./public/app/plugins/datasource/dashboard/module.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "plugin": () => ( module_plugin)
});

var src = __webpack_require__("./packages/grafana-data/src/index.ts");
;


class DashboardDatasource extends src.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
  }

  getCollapsedText(query) {
    return `Dashboard Reference: ${query.panelId}`;
  }

  query(options) {
    return Promise.reject('This should not be called directly');
  }

  testDatasource() {
    return Promise.resolve({});
  }

}
;


const module_plugin = new src.DataSourcePlugin(DashboardDatasource);

 })

}]);