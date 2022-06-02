"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[172],{

 "./public/app/features/explore/FeatureTogglePage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": () => ( FeatureTogglePage)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents;







function FeatureTogglePage() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(theme => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
        margin-top: ${theme.spacing(2)};
      `);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ .Z, {
    className: styles,
    children: _Page$Contents || (_Page$Contents = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ .Z.Contents, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
        children: "Explore is disabled"
      }), "To enable Explore, enable it in the Grafana config:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", {
          children: `[explore]
enable = true
`
        })
      })]
    }))
  });
}

 })

}]);