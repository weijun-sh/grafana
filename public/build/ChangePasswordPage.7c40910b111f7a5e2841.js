"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[6848],{

 "./public/app/core/components/ForgottenPassword/ChangePasswordPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "ChangePasswordPage": () => ( ChangePasswordPage),
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _Login_LoginCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Login/LoginCtrl.tsx");
 var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
 var _ChangePassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/ForgottenPassword/ChangePassword.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const ChangePasswordPage = props => {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_2__ .dd, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_2__ .$s, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Login_LoginCtrl__WEBPACK_IMPORTED_MODULE_1__ .Z, {
        resetCode: props.queryParams.code,
        children: _ref => {
          let {
            changePassword
          } = _ref;
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ChangePassword__WEBPACK_IMPORTED_MODULE_3__ .G, {
            onSubmit: changePassword
          });
        }
      })
    })
  });
};
 const __WEBPACK_DEFAULT_EXPORT__ = (ChangePasswordPage);

 })

}]);