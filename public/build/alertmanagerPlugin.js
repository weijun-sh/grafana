"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["alertmanagerPlugin"],{

/***/ "./public/app/plugins/datasource/alertmanager/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _InlineFormLabel;







const IMPL_OPTIONS = [{
  value: _types__WEBPACK_IMPORTED_MODULE_2__.AlertManagerImplementation.cortex,
  label: 'Cortex',
  description: `https://cortexmetrics.io/`
}, {
  value: _types__WEBPACK_IMPORTED_MODULE_2__.AlertManagerImplementation.prometheus,
  label: 'Prometheus',
  description: 'https://prometheus.io/. Does not support editing configuration via API, so contact points and notification policies are read-only.'
}];
const ConfigEditor = ({
  options,
  onOptionsChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
      className: "page-heading",
      children: "Alertmanager"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineFormLabel, {
            width: 13,
            children: "Implementation"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
            width: 40,
            options: IMPL_OPTIONS,
            value: options.jsonData.implementation || _types__WEBPACK_IMPORTED_MODULE_2__.AlertManagerImplementation.cortex,
            onChange: value => onOptionsChange(Object.assign({}, options, {
              jsonData: Object.assign({}, options.jsonData, {
                implementation: value.value
              })
            }))
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.DataSourceHttpSettings, {
      defaultUrl: '',
      dataSourceConfig: options,
      showAccessOptions: true,
      onChange: onOptionsChange
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/DataSource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertManagerDatasource": () => (/* binding */ AlertManagerDatasource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");




class AlertManagerDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;
    this.instanceSettings = instanceSettings;
  } // `query()` has to be implemented but we actually don't use it, just need this
  // data source to proxy requests.
  // @ts-ignore


  query() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
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

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch(options));
  }

  async testDatasource() {
    var _alertmanagerResponse3;

    let alertmanagerResponse;

    if (this.instanceSettings.jsonData.implementation === _types__WEBPACK_IMPORTED_MODULE_2__.AlertManagerImplementation.prometheus) {
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

/***/ }),

/***/ "./public/app/plugins/datasource/alertmanager/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/ConfigEditor.tsx");
/* harmony import */ var _DataSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/DataSource.ts");


 // This is not actually a data source but since 7.1,
// it is required to specify query types. Which we don't have.
// @ts-ignore

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_DataSource__WEBPACK_IMPORTED_MODULE_2__.AlertManagerDatasource).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__.ConfigEditor);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUgsb0JBQW9CLFVBQXBCLHdFQUFzQkMsTUFBdEIsTUFBaUMsR0FBakMsR0FDSDtBQUNFQSxNQUFBQSxNQUFNLEVBQUUsU0FEVjtBQUVFQyxNQUFBQSxPQUFPLEVBQUU7QUFGWCxLQURHLEdBS0g7QUFDRUQsTUFBQUEsTUFBTSxFQUFFLE9BRFY7QUFFRUMsTUFBQUEsT0FBTyxFQUFFO0FBRlgsS0FMSjtBQVNEOztBQTFFMEc7Ozs7Ozs7Ozs7Ozs7O0FDWDdHO0FBRUE7Q0FHQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUcsTUFBTSxHQUFHLElBQUlELDJEQUFKLENBQXFCbEIsK0RBQXJCLEVBQTZDb0IsZUFBN0MsQ0FBNkQ3Qix1REFBN0QsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvQ29uZmlnRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvYWxlcnRtYW5hZ2VyL0RhdGFTb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2FsZXJ0bWFuYWdlci9tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcywgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlSHR0cFNldHRpbmdzLCBJbmxpbmVGb3JtTGFiZWwsIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZUpzb25EYXRhLCBBbGVydE1hbmFnZXJJbXBsZW1lbnRhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM8QWxlcnRNYW5hZ2VyRGF0YVNvdXJjZUpzb25EYXRhPjtcblxuY29uc3QgSU1QTF9PUFRJT05TOiBTZWxlY3RhYmxlVmFsdWVbXSA9IFtcbiAge1xuICAgIHZhbHVlOiBBbGVydE1hbmFnZXJJbXBsZW1lbnRhdGlvbi5jb3J0ZXgsXG4gICAgbGFiZWw6ICdDb3J0ZXgnLFxuICAgIGRlc2NyaXB0aW9uOiBgaHR0cHM6Ly9jb3J0ZXhtZXRyaWNzLmlvL2AsXG4gIH0sXG4gIHtcbiAgICB2YWx1ZTogQWxlcnRNYW5hZ2VySW1wbGVtZW50YXRpb24ucHJvbWV0aGV1cyxcbiAgICBsYWJlbDogJ1Byb21ldGhldXMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ2h0dHBzOi8vcHJvbWV0aGV1cy5pby8uIERvZXMgbm90IHN1cHBvcnQgZWRpdGluZyBjb25maWd1cmF0aW9uIHZpYSBBUEksIHNvIGNvbnRhY3QgcG9pbnRzIGFuZCBub3RpZmljYXRpb24gcG9saWNpZXMgYXJlIHJlYWQtb25seS4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IENvbmZpZ0VkaXRvcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZ1wiPkFsZXJ0bWFuYWdlcjwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgPElubGluZUZvcm1MYWJlbCB3aWR0aD17MTN9PkltcGxlbWVudGF0aW9uPC9JbmxpbmVGb3JtTGFiZWw+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgICAgb3B0aW9ucz17SU1QTF9PUFRJT05TfVxuICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS5pbXBsZW1lbnRhdGlvbiB8fCBBbGVydE1hbmFnZXJJbXBsZW1lbnRhdGlvbi5jb3J0ZXh9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgb25PcHRpb25zQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICBqc29uRGF0YToge1xuICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLFxuICAgICAgICAgICAgICAgICAgICBpbXBsZW1lbnRhdGlvbjogdmFsdWUudmFsdWUgYXMgQWxlcnRNYW5hZ2VySW1wbGVtZW50YXRpb24sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8RGF0YVNvdXJjZUh0dHBTZXR0aW5nc1xuICAgICAgICBkZWZhdWx0VXJsPXsnJ31cbiAgICAgICAgZGF0YVNvdXJjZUNvbmZpZz17b3B0aW9uc31cbiAgICAgICAgc2hvd0FjY2Vzc09wdGlvbnM9e3RydWV9XG4gICAgICAgIG9uQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7IGxhc3RWYWx1ZUZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFRdWVyeSwgRGF0YVF1ZXJ5UmVzcG9uc2UsIERhdGFTb3VyY2VBcGksIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWNrZW5kU3J2UmVxdWVzdCwgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBBbGVydE1hbmFnZXJEYXRhU291cmNlSnNvbkRhdGEsIEFsZXJ0TWFuYWdlckltcGxlbWVudGF0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIEFsZXJ0TWFuYWdlclF1ZXJ5ID0ge1xuICBxdWVyeTogc3RyaW5nO1xufSAmIERhdGFRdWVyeTtcblxuZXhwb3J0IGNsYXNzIEFsZXJ0TWFuYWdlckRhdGFzb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlQXBpPEFsZXJ0TWFuYWdlclF1ZXJ5LCBBbGVydE1hbmFnZXJEYXRhU291cmNlSnNvbkRhdGE+IHtcbiAgY29uc3RydWN0b3IocHVibGljIGluc3RhbmNlU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzPEFsZXJ0TWFuYWdlckRhdGFTb3VyY2VKc29uRGF0YT4pIHtcbiAgICBzdXBlcihpbnN0YW5jZVNldHRpbmdzKTtcbiAgfVxuXG4gIC8vIGBxdWVyeSgpYCBoYXMgdG8gYmUgaW1wbGVtZW50ZWQgYnV0IHdlIGFjdHVhbGx5IGRvbid0IHVzZSBpdCwganVzdCBuZWVkIHRoaXNcbiAgLy8gZGF0YSBzb3VyY2UgdG8gcHJveHkgcmVxdWVzdHMuXG4gIC8vIEB0cy1pZ25vcmVcbiAgcXVlcnkoKTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIHJldHVybiBvZih7XG4gICAgICBkYXRhOiBbXSxcbiAgICB9KTtcbiAgfVxuXG4gIF9yZXF1ZXN0KHVybDogc3RyaW5nKSB7XG4gICAgY29uc3Qgb3B0aW9uczogQmFja2VuZFNydlJlcXVlc3QgPSB7XG4gICAgICBoZWFkZXJzOiB7fSxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6IHRoaXMuaW5zdGFuY2VTZXR0aW5ncy51cmwgKyB1cmwsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmluc3RhbmNlU2V0dGluZ3MuYmFzaWNBdXRoIHx8IHRoaXMuaW5zdGFuY2VTZXR0aW5ncy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2VTZXR0aW5ncy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluc3RhbmNlU2V0dGluZ3MuYmFzaWNBdXRoKSB7XG4gICAgICBvcHRpb25zLmhlYWRlcnMhLkF1dGhvcml6YXRpb24gPSB0aGlzLmluc3RhbmNlU2V0dGluZ3MuYmFzaWNBdXRoO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKGdldEJhY2tlbmRTcnYoKS5mZXRjaDxhbnk+KG9wdGlvbnMpKTtcbiAgfVxuXG4gIGFzeW5jIHRlc3REYXRhc291cmNlKCkge1xuICAgIGxldCBhbGVydG1hbmFnZXJSZXNwb25zZTtcblxuICAgIGlmICh0aGlzLmluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEuaW1wbGVtZW50YXRpb24gPT09IEFsZXJ0TWFuYWdlckltcGxlbWVudGF0aW9uLnByb21ldGhldXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGFsZXJ0bWFuYWdlclJlc3BvbnNlID0gYXdhaXQgdGhpcy5fcmVxdWVzdCgnL2FsZXJ0bWFuYWdlci9hcGkvdjIvc3RhdHVzJyk7XG4gICAgICAgIGlmIChhbGVydG1hbmFnZXJSZXNwb25zZSAmJiBhbGVydG1hbmFnZXJSZXNwb25zZT8uc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICAgJ0l0IGxvb2tzIGxpa2UgeW91IGhhdmUgY2hvc2VuIFByb21ldGhldXMgaW1wbGVtZW50YXRpb24sIGJ1dCBkZXRlY3RlZCBhIENvcnRleCBlbmRwb2ludC4gUGxlYXNlIHVwZGF0ZSBpbXBsZW1lbnRhdGlvbiBzZWxlY3Rpb24gYW5kIHRyeSBhZ2Fpbi4nLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB0cnkge1xuICAgICAgICBhbGVydG1hbmFnZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMuX3JlcXVlc3QoJy9hcGkvdjIvc3RhdHVzJyk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBhbGVydG1hbmFnZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMuX3JlcXVlc3QoJy9hcGkvdjIvc3RhdHVzJyk7XG4gICAgICAgIGlmIChhbGVydG1hbmFnZXJSZXNwb25zZSAmJiBhbGVydG1hbmFnZXJSZXNwb25zZT8uc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxuICAgICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICAgJ0l0IGxvb2tzIGxpa2UgeW91IGhhdmUgY2hvc2VuIENvcnRleCBpbXBsZW1lbnRhdGlvbiwgYnV0IGRldGVjdGVkIGEgUHJvbWV0aGV1cyBlbmRwb2ludC4gUGxlYXNlIHVwZGF0ZSBpbXBsZW1lbnRhdGlvbiBzZWxlY3Rpb24gYW5kIHRyeSBhZ2Fpbi4nLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB0cnkge1xuICAgICAgICBhbGVydG1hbmFnZXJSZXNwb25zZSA9IGF3YWl0IHRoaXMuX3JlcXVlc3QoJy9hbGVydG1hbmFnZXIvYXBpL3YyL3N0YXR1cycpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICByZXR1cm4gYWxlcnRtYW5hZ2VyUmVzcG9uc2U/LnN0YXR1cyA9PT0gMjAwXG4gICAgICA/IHtcbiAgICAgICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcbiAgICAgICAgICBtZXNzYWdlOiAnSGVhbHRoIGNoZWNrIHBhc3NlZC4nLFxuICAgICAgICB9XG4gICAgICA6IHtcbiAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgbWVzc2FnZTogJ0hlYWx0aCBjaGVjayBmYWlsZWQuJyxcbiAgICAgICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBDb25maWdFZGl0b3IgfSBmcm9tICcuL0NvbmZpZ0VkaXRvcic7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJEYXRhc291cmNlIH0gZnJvbSAnLi9EYXRhU291cmNlJztcblxuLy8gVGhpcyBpcyBub3QgYWN0dWFsbHkgYSBkYXRhIHNvdXJjZSBidXQgc2luY2UgNy4xLFxuLy8gaXQgaXMgcmVxdWlyZWQgdG8gc3BlY2lmeSBxdWVyeSB0eXBlcy4gV2hpY2ggd2UgZG9uJ3QgaGF2ZS5cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjb25zdCBwbHVnaW4gPSBuZXcgRGF0YVNvdXJjZVBsdWdpbihBbGVydE1hbmFnZXJEYXRhc291cmNlKS5zZXRDb25maWdFZGl0b3IoQ29uZmlnRWRpdG9yKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRhdGFTb3VyY2VIdHRwU2V0dGluZ3MiLCJJbmxpbmVGb3JtTGFiZWwiLCJTZWxlY3QiLCJBbGVydE1hbmFnZXJJbXBsZW1lbnRhdGlvbiIsIklNUExfT1BUSU9OUyIsInZhbHVlIiwiY29ydGV4IiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsInByb21ldGhldXMiLCJDb25maWdFZGl0b3IiLCJvcHRpb25zIiwib25PcHRpb25zQ2hhbmdlIiwianNvbkRhdGEiLCJpbXBsZW1lbnRhdGlvbiIsImxhc3RWYWx1ZUZyb20iLCJvZiIsIkRhdGFTb3VyY2VBcGkiLCJnZXRCYWNrZW5kU3J2IiwiQWxlcnRNYW5hZ2VyRGF0YXNvdXJjZSIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2VTZXR0aW5ncyIsInF1ZXJ5IiwiZGF0YSIsIl9yZXF1ZXN0IiwidXJsIiwiaGVhZGVycyIsIm1ldGhvZCIsImJhc2ljQXV0aCIsIndpdGhDcmVkZW50aWFscyIsIkF1dGhvcml6YXRpb24iLCJmZXRjaCIsInRlc3REYXRhc291cmNlIiwiYWxlcnRtYW5hZ2VyUmVzcG9uc2UiLCJzdGF0dXMiLCJtZXNzYWdlIiwiZSIsIkRhdGFTb3VyY2VQbHVnaW4iLCJwbHVnaW4iLCJzZXRDb25maWdFZGl0b3IiXSwic291cmNlUm9vdCI6IiJ9