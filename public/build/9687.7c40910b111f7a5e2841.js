"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[9687],{

 "./public/app/core/components/Signup/SignupPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "SignupPage": () => ( SignupPage),
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
 var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
 var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
 var _PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/PasswordField/PasswordField.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button;











const SignupPage = props => {
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__ .iG)();

  const onSubmit = async formData => {
    if (formData.name === '') {
      delete formData.name;
    }

    delete formData.confirm;
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post('/api/user/signup/step2', {
      email: formData.email,
      code: formData.code,
      username: formData.email,
      orgName: formData.orgName,
      password: formData.password,
      name: formData.name
    }).catch(err => {
      var _err$data;

      const msg = ((_err$data = err.data) === null || _err$data === void 0 ? void 0 : _err$data.message) || err;
      notifyApp.warning(msg);
    });

    if (response.code === 'redirect-to-select-org') {
      window.location.assign((0,app_core_config__WEBPACK_IMPORTED_MODULE_3__ .iE)().appSubUrl + '/profile/select-org?signup=1');
    }

    window.location.assign((0,app_core_config__WEBPACK_IMPORTED_MODULE_3__ .iE)().appSubUrl + '/');
  };

  const defaultValues = {
    email: props.queryParams.email,
    code: props.queryParams.code
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_5__ .dd, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_5__ .$s, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
        defaultValues: defaultValues,
        onSubmit: onSubmit,
        children: _ref => {
          var _errors$email, _errors$password, _errors$confirm;

          let {
            errors,
            register,
            getValues
          } = _ref;
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Your name",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "user-name"
              }, register('name'), {
                placeholder: "(optional)"
              }))
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Email",
              invalid: !!errors.email,
              error: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message,
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "email"
              }, register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/,
                  message: 'Email is invalid'
                }
              }), {
                type: "email",
                placeholder: "Email"
              }))
            }), !(0,app_core_config__WEBPACK_IMPORTED_MODULE_3__ .iE)().autoAssignOrg && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Org. name",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "org-name"
              }, register('orgName'), {
                placeholder: "Org. name"
              }))
            }), (0,app_core_config__WEBPACK_IMPORTED_MODULE_3__ .iE)().verifyEmailEnabled && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Email verification code (sent to your email)",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "verification-code"
              }, register('code'), {
                placeholder: "Code"
              }))
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Password",
              invalid: !!errors.password,
              error: errors === null || errors === void 0 ? void 0 : (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message,
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_6__ .Z, Object.assign({
                id: "new-password",
                autoFocus: true,
                autoComplete: "new-password"
              }, register('password', {
                required: 'Password is required'
              })))
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Confirm password",
              invalid: !!errors.confirm,
              error: errors === null || errors === void 0 ? void 0 : (_errors$confirm = errors.confirm) === null || _errors$confirm === void 0 ? void 0 : _errors$confirm.message,
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_6__ .Z, Object.assign({
                id: "confirm-new-password",
                autoComplete: "new-password"
              }, register('confirm', {
                required: 'Confirmed password is required',
                validate: v => v === getValues().password || 'Passwords must match!'
              })))
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
              children: [_Button || (_Button = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                type: "submit",
                children: "Submit"
              })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
                fill: "text",
                href: (0,app_core_config__WEBPACK_IMPORTED_MODULE_3__ .iE)().appSubUrl + '/login',
                children: "Back to login"
              })]
            })]
          });
        }
      })
    })
  });
};
 const __WEBPACK_DEFAULT_EXPORT__ = (SignupPage);

 })

}]);