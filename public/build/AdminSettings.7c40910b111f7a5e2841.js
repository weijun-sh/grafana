"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[9603],{

 "./public/app/features/admin/AdminSettings.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td;










function AdminSettings(_ref) {
  let {
    navModel
  } = _ref;
  const {
    loading,
    value: settings
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_5__ .Z)(() => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().get('/api/admin/settings'), []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ .Z, {
    navModel: navModel,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ .Z.Contents, {
      isLoading: loading,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "grafana-info-box span8",
        style: {
          margin: '20px 0 25px 0'
        },
        children: "These system settings are defined in grafana.ini or custom.ini (or overridden in ENV variables). To change these you currently need to restart Grafana."
      }), settings && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("table", {
        className: "filter-table",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
          children: Object.entries(settings).map((_ref2, i) => {
            let [sectionName, sectionSettings] = _ref2;
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                  className: "admin-settings-section",
                  children: sectionName
                }), _td || (_td = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {}))]
              }), Object.entries(sectionSettings).map((_ref3, j) => {
                let [settingName, settingValue] = _ref3;
                return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                    style: {
                      paddingLeft: '25px'
                    },
                    children: settingName
                  }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
                    style: {
                      whiteSpace: 'break-spaces'
                    },
                    children: settingValue
                  })]
                }, `property-${j}`);
              })]
            }, `section-${i}`);
          })
        })
      })]
    })
  });
}

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__ .h)(state.navIndex, 'server-settings')
});

 const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps)(AdminSettings));

 })

}]);