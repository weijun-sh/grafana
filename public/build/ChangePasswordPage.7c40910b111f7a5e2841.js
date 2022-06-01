"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[6848],{

/***/ "./public/app/core/components/ForgottenPassword/ChangePasswordPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPage": () => (/* binding */ ChangePasswordPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Login_LoginCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Login/LoginCtrl.tsx");
/* harmony import */ var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
/* harmony import */ var _ChangePassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/ForgottenPassword/ChangePassword.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const ChangePasswordPage = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_2__/* .LoginLayout */ .dd, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_2__/* .InnerBox */ .$s, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Login_LoginCtrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        resetCode: props.queryParams.code,
        children: _ref => {
          let {
            changePassword
          } = _ref;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ChangePassword__WEBPACK_IMPORTED_MODULE_3__/* .ChangePassword */ .G, {
            onSubmit: changePassword
          });
        }
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePasswordPage);

/***/ })

}]);