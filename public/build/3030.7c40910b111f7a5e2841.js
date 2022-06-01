"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[3030],{

/***/ "./public/app/plugins/datasource/dashboard/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "plugin": () => (/* binding */ module_plugin)
});

// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/dashboard/datasource.ts


/**
 * This should not really be called
 */
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/dashboard/module.ts


const module_plugin = new src.DataSourcePlugin(DashboardDatasource);

/***/ })

}]);