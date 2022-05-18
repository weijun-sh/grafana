"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["Profile feature toggle page"],{

/***/ "./public/app/core/hooks/useNavModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useNavModel": () => (/* binding */ useNavModel)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_navModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/selectors/navModel.ts");


const useNavModel = id => {
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.navIndex);
  return (0,_selectors_navModel__WEBPACK_IMPORTED_MODULE_1__.getNavModel)(navIndex, id);
};

/***/ }),

/***/ "./public/app/features/profile/FeatureTogglePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FeatureTogglePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/hooks/useNavModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page$Contents;






function FeatureTogglePage() {
  const navModel = (0,app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_2__.useNavModel)('profile-settings');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    navModel: navModel,
    children: _Page$Contents || (_Page$Contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_1__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
        children: "Profile is not enabled."
      }), "Enable profile in the Grafana config file.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("pre", {
          children: `[profile]
enable = true
`
        })
      })]
    }))
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZSBmZWF0dXJlIHRvZ2dsZSBwYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBS0E7QUFFTyxNQUFNRSxXQUFXLEdBQUlDLEVBQUQsSUFBMEI7QUFDbkQsUUFBTUMsUUFBUSxHQUFHSix3REFBVyxDQUFFSyxLQUFELElBQXVCQSxLQUFLLENBQUNELFFBQTlCLENBQTVCO0FBQ0EsU0FBT0gsZ0VBQVcsQ0FBQ0csUUFBRCxFQUFXRCxFQUFYLENBQWxCO0FBQ0QsQ0FITTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUDtBQUVBO0FBQ0E7OztBQUVlLFNBQVNLLGlCQUFULEdBQTZCO0FBQzFDLFFBQU1DLFFBQVEsR0FBR1AsdUVBQVcsQ0FBQyxrQkFBRCxDQUE1QjtBQUVBLHNCQUNFLHVEQUFDLHFFQUFEO0FBQU0sWUFBUSxFQUFFTyxRQUFoQjtBQUFBLCtEQUNFLHdEQUFDLDhFQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBLFFBREYsNkRBR0U7QUFBQSwrQkFDRTtBQUFBLG9CQUNJO0FBQ2Q7QUFDQTtBQUhVO0FBREYsUUFIRjtBQUFBLE1BREY7QUFBQSxJQURGO0FBZUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2hvb2tzL3VzZU5hdk1vZGVsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3Byb2ZpbGUvRmVhdHVyZVRvZ2dsZVBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy9zdG9yZSc7XG5cbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnLi4vc2VsZWN0b3JzL25hdk1vZGVsJztcblxuZXhwb3J0IGNvbnN0IHVzZU5hdk1vZGVsID0gKGlkOiBzdHJpbmcpOiBOYXZNb2RlbCA9PiB7XG4gIGNvbnN0IG5hdkluZGV4ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS5uYXZJbmRleCk7XG4gIHJldHVybiBnZXROYXZNb2RlbChuYXZJbmRleCwgaWQpO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IHVzZU5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvaG9va3MvdXNlTmF2TW9kZWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlVG9nZ2xlUGFnZSgpIHtcbiAgY29uc3QgbmF2TW9kZWwgPSB1c2VOYXZNb2RlbCgncHJvZmlsZS1zZXR0aW5ncycpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8aDE+UHJvZmlsZSBpcyBub3QgZW5hYmxlZC48L2gxPlxuICAgICAgICBFbmFibGUgcHJvZmlsZSBpbiB0aGUgR3JhZmFuYSBjb25maWcgZmlsZS5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAge2BbcHJvZmlsZV1cbmVuYWJsZSA9IHRydWVcbmB9XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsImdldE5hdk1vZGVsIiwidXNlTmF2TW9kZWwiLCJpZCIsIm5hdkluZGV4Iiwic3RhdGUiLCJSZWFjdCIsIlBhZ2UiLCJGZWF0dXJlVG9nZ2xlUGFnZSIsIm5hdk1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==