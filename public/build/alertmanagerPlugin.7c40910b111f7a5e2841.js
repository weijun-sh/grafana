"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[6795],{

 "./public/app/plugins/datasource/alertmanager/module.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "plugin": () => ( module_plugin)
});

var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var types = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _h, _InlineFormLabel;







const IMPL_OPTIONS = [{
  value: types.sK.cortex,
  label: 'Cortex',
  description: `https://cortexmetrics.io/`
}, {
  value: types.sK.prometheus,
  label: 'Prometheus',
  description: 'https://prometheus.io/. Does not support editing configuration via API, so contact points and notification policies are read-only.'
}];
const ConfigEditor = _ref => {
  let {
    options,
    onOptionsChange
  } = _ref;
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [_h || (_h = (0,jsx_runtime.jsx)("h3", {
      className: "page-heading",
      children: "Alertmanager"
    })), (0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: (0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: (0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel || (_InlineFormLabel = (0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            width: 13,
            children: "Implementation"
          })), (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
            width: 40,
            options: IMPL_OPTIONS,
            value: options.jsonData.implementation || types.sK.cortex,
            onChange: value => onOptionsChange(Object.assign({}, options, {
              jsonData: Object.assign({}, options.jsonData, {
                implementation: value.value
              })
            }))
          })]
        })
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.DataSourceHttpSettings, {
      defaultUrl: '',
      dataSourceConfig: options,
      showAccessOptions: true,
      onChange: onOptionsChange
    })]
  });
};
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
var lastValueFrom = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
;




class AlertManagerDatasource extends src.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;
    this.instanceSettings = instanceSettings;
  } 


  query() {
    return (0,of.of)({
      data: []
    });
  }

  _request(url) {
    const options = {
      headers: {},
      method: 'GET',
      url: this.instanceSettings.url + url
    };

    if (this.instanceSettings.basicAuth || this.instanceSettings.withCredentials) {
      this.instanceSettings.withCredentials = true;
    }

    if (this.instanceSettings.basicAuth) {
      options.headers.Authorization = this.instanceSettings.basicAuth;
    }

    return (0,lastValueFrom.n)((0,grafana_runtime_src.getBackendSrv)().fetch(options));
  }

  async testDatasource() {
    var _alertmanagerResponse3;

    let alertmanagerResponse;

    if (this.instanceSettings.jsonData.implementation === types.sK.prometheus) {
      try {
        var _alertmanagerResponse;

        alertmanagerResponse = await this._request('/alertmanager/api/v2/status');

        if (alertmanagerResponse && ((_alertmanagerResponse = alertmanagerResponse) === null || _alertmanagerResponse === void 0 ? void 0 : _alertmanagerResponse.status) === 200) {
          return {
            status: 'error',
            message: 'It looks like you have chosen Prometheus implementation, but detected a Cortex endpoint. Please update implementation selection and try again.'
          };
        }
      } catch (e) {}

      try {
        alertmanagerResponse = await this._request('/api/v2/status');
      } catch (e) {}
    } else {
      try {
        var _alertmanagerResponse2;

        alertmanagerResponse = await this._request('/api/v2/status');

        if (alertmanagerResponse && ((_alertmanagerResponse2 = alertmanagerResponse) === null || _alertmanagerResponse2 === void 0 ? void 0 : _alertmanagerResponse2.status) === 200) {
          return {
            status: 'error',
            message: 'It looks like you have chosen Cortex implementation, but detected a Prometheus endpoint. Please update implementation selection and try again.'
          };
        }
      } catch (e) {}

      try {
        alertmanagerResponse = await this._request('/alertmanager/api/v2/status');
      } catch (e) {}
    }

    return ((_alertmanagerResponse3 = alertmanagerResponse) === null || _alertmanagerResponse3 === void 0 ? void 0 : _alertmanagerResponse3.status) === 200 ? {
      status: 'success',
      message: 'Health check passed.'
    } : {
      status: 'error',
      message: 'Health check failed.'
    };
  }

}
;



const module_plugin = new src.DataSourcePlugin(AlertManagerDatasource).setConfigEditor(ConfigEditor);

 })

}]);