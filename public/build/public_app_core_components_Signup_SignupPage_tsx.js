"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_core_components_Signup_SignupPage_tsx"],{

/***/ "./public/app/core/components/Signup/SignupPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
/* harmony import */ var _PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/PasswordField/PasswordField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button;











const SignupPage = props => {
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_4__.useAppNotification)();

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
      window.location.assign((0,app_core_config__WEBPACK_IMPORTED_MODULE_3__.getConfig)().appSubUrl + '/profile/select-org?signup=1');
    }

    window.location.assign((0,app_core_config__WEBPACK_IMPORTED_MODULE_3__.getConfig)().appSubUrl + '/');
  };

  const defaultValues = {
    email: props.queryParams.email,
    code: props.queryParams.code
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_5__.LoginLayout, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_5__.InnerBox, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
        defaultValues: defaultValues,
        onSubmit: onSubmit,
        children: ({
          errors,
          register,
          getValues
        }) => {
          var _errors$email, _errors$password, _errors$confirm;

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Your name",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "user-name"
              }, register('name'), {
                placeholder: "(optional)"
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Email",
              invalid: !!errors.email,
              error: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
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
            }), !(0,app_core_config__WEBPACK_IMPORTED_MODULE_3__.getConfig)().autoAssignOrg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Org. name",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "org-name"
              }, register('orgName'), {
                placeholder: "Org. name"
              }))
            }), (0,app_core_config__WEBPACK_IMPORTED_MODULE_3__.getConfig)().verifyEmailEnabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Email verification code (sent to your email)",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
                id: "verification-code"
              }, register('code'), {
                placeholder: "Code"
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Password",
              invalid: !!errors.password,
              error: errors === null || errors === void 0 ? void 0 : (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_6__.PasswordField, Object.assign({
                id: "new-password",
                autoFocus: true,
                autoComplete: "new-password"
              }, register('password', {
                required: 'Password is required'
              })))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
              label: "Confirm password",
              invalid: !!errors.confirm,
              error: errors === null || errors === void 0 ? void 0 : (_errors$confirm = errors.confirm) === null || _errors$confirm === void 0 ? void 0 : _errors$confirm.message,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PasswordField_PasswordField__WEBPACK_IMPORTED_MODULE_6__.PasswordField, Object.assign({
                id: "confirm-new-password",
                autoComplete: "new-password"
              }, register('confirm', {
                required: 'Confirmed password is required',
                validate: v => v === getValues().password || 'Passwords must match!'
              })))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
              children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                type: "submit",
                children: "Submit"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
                fill: "text",
                href: (0,app_core_config__WEBPACK_IMPORTED_MODULE_3__.getConfig)().appSubUrl + '/login',
                children: "Back to login"
              })]
            })]
          });
        }
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwcF9jb3JlX2NvbXBvbmVudHNfU2lnbnVwX1NpZ251cFBhZ2VfdHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBbUJPLE1BQU1hLFVBQXFCLEdBQUlDLEtBQUQsSUFBVztBQUM5QyxRQUFNQyxTQUFTLEdBQUdOLGlGQUFrQixFQUFwQzs7QUFDQSxRQUFNTyxRQUFRLEdBQUcsTUFBT0MsUUFBUCxJQUErQjtBQUM5QyxRQUFJQSxRQUFRLENBQUNDLElBQVQsS0FBa0IsRUFBdEIsRUFBMEI7QUFDeEIsYUFBT0QsUUFBUSxDQUFDQyxJQUFoQjtBQUNEOztBQUNELFdBQU9ELFFBQVEsQ0FBQ0UsT0FBaEI7QUFFQSxVQUFNQyxRQUFRLEdBQUcsTUFBTW5CLCtEQUFhLEdBQ2pDb0IsSUFEb0IsQ0FDZix3QkFEZSxFQUNXO0FBQzlCQyxNQUFBQSxLQUFLLEVBQUVMLFFBQVEsQ0FBQ0ssS0FEYztBQUU5QkMsTUFBQUEsSUFBSSxFQUFFTixRQUFRLENBQUNNLElBRmU7QUFHOUJDLE1BQUFBLFFBQVEsRUFBRVAsUUFBUSxDQUFDSyxLQUhXO0FBSTlCRyxNQUFBQSxPQUFPLEVBQUVSLFFBQVEsQ0FBQ1EsT0FKWTtBQUs5QkMsTUFBQUEsUUFBUSxFQUFFVCxRQUFRLENBQUNTLFFBTFc7QUFNOUJSLE1BQUFBLElBQUksRUFBRUQsUUFBUSxDQUFDQztBQU5lLEtBRFgsRUFTcEJTLEtBVG9CLENBU2JDLEdBQUQsSUFBUztBQUFBOztBQUNkLFlBQU1DLEdBQUcsR0FBRyxjQUFBRCxHQUFHLENBQUNFLElBQUosd0RBQVVDLE9BQVYsS0FBcUJILEdBQWpDO0FBQ0FiLE1BQUFBLFNBQVMsQ0FBQ2lCLE9BQVYsQ0FBa0JILEdBQWxCO0FBQ0QsS0Fab0IsQ0FBdkI7O0FBY0EsUUFBSVQsUUFBUSxDQUFDRyxJQUFULEtBQWtCLHdCQUF0QixFQUFnRDtBQUM5Q1UsTUFBQUEsTUFBTSxD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LG1CQUFLLEVBQUVvQixNQUFGLGFBQUVBLE1BQUYsMENBQUVBLE1BQU0sQ0FBRXBCLE9BQVYsb0RBQUUsZ0JBQWlCWSxPQUFuRjtBQUFBLHFDQUNFLHVEQUFDLHVFQUFEO0FBQ0Usa0JBQUUsRUFBQyxzQkFETDtBQUVFLDRCQUFZLEVBQUM7QUFGZixpQkFHTVMsUUFBUSxDQUFDLFNBQUQsRUFBWTtBQUN0QkUsZ0JBQUFBLFFBQVEsRUFBRSxnQ0FEWTtBQUV0QkssZ0JBQUFBLFFBQVEsRUFBR0MsQ0FBRCxJQUFPQSxDQUFDLEtBQUtQLFNBQVMsR0FBR2YsUUFBbEIsSUFBOEI7QUFGekIsZUFBWixDQUhkO0FBREYsY0FwQ0YsZUErQ0Usd0RBQUMsd0RBQUQ7QUFBQSw0REFDRSx1REFBQywrQ0FBRDtBQUFRLG9CQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUEsZ0JBREYsZ0JBRUUsdURBQUMsbURBQUQ7QUFBWSxvQkFBSSxFQUFDLE1BQWpCO0FBQXdCLG9CQUFJLEVBQUVsQiwwREFBUyxHQUFHNEIsU0FBWixHQUF3QixRQUF0RDtBQUFBO0FBQUEsZ0JBRkY7QUFBQSxjQS9DRjtBQUFBLFlBREQ7QUFBQTtBQURIO0FBREY7QUFERixJQURGO0FBZ0VELENBakdNO0FBbUdQLGlFQUFldkIsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9TaWdudXAvU2lnbnVwUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBGb3JtLCBGaWVsZCwgSW5wdXQsIEJ1dHRvbiwgSG9yaXpvbnRhbEdyb3VwLCBMaW5rQnV0dG9uLCBGb3JtQVBJIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IHVzZUFwcE5vdGlmaWNhdGlvbiB9IGZyb20gJ2FwcC9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5cbmltcG9ydCB7IElubmVyQm94LCBMb2dpbkxheW91dCB9IGZyb20gJy4uL0xvZ2luL0xvZ2luTGF5b3V0JztcbmltcG9ydCB7IFBhc3N3b3JkRmllbGQgfSBmcm9tICcuLi9QYXNzd29yZEZpZWxkL1Bhc3N3b3JkRmllbGQnO1xuXG5pbnRlcmZhY2UgU2lnbnVwRFRPIHtcbiAgbmFtZT86IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgb3JnTmFtZT86IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgY29kZTogc3RyaW5nO1xuICBjb25maXJtPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUXVlcnlQYXJhbXMge1xuICBlbWFpbD86IHN0cmluZztcbiAgY29kZT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8e30sIFF1ZXJ5UGFyYW1zPiB7fVxuXG5leHBvcnQgY29uc3QgU2lnbnVwUGFnZTogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IG5vdGlmeUFwcCA9IHVzZUFwcE5vdGlmaWNhdGlvbigpO1xuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChmb3JtRGF0YTogU2lnbnVwRFRPKSA9PiB7XG4gICAgaWYgKGZvcm1EYXRhLm5hbWUgPT09ICcnKSB7XG4gICAgICBkZWxldGUgZm9ybURhdGEubmFtZTtcbiAgICB9XG4gICAgZGVsZXRlIGZvcm1EYXRhLmNvbmZpcm07XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKVxuICAgICAgLnBvc3QoJy9hcGkvdXNlci9zaWdudXAvc3RlcDInLCB7XG4gICAgICAgIGVtYWlsOiBmb3JtRGF0YS5lbWFpbCxcbiAgICAgICAgY29kZTogZm9ybURhdGEuY29kZSxcbiAgICAgICAgdXNlcm5hbWU6IGZvcm1EYXRhLmVtYWlsLFxuICAgICAgICBvcmdOYW1lOiBmb3JtRGF0YS5vcmdOYW1lLFxuICAgICAgICBwYXNzd29yZDogZm9ybURhdGEucGFzc3dvcmQsXG4gICAgICAgIG5hbWU6IGZvcm1EYXRhLm5hbWUsXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc3QgbXNnID0gZXJyLmRhdGE/Lm1lc3NhZ2UgfHwgZXJyO1xuICAgICAgICBub3RpZnlBcHAud2FybmluZyhtc2cpO1xuICAgICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuY29kZSA9PT0gJ3JlZGlyZWN0LXRvLXNlbGVjdC1vcmcnKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKGdldENvbmZpZygpLmFwcFN1YlVybCArICcvcHJvZmlsZS9zZWxlY3Qtb3JnP3NpZ251cD0xJyk7XG4gICAgfVxuICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oZ2V0Q29uZmlnKCkuYXBwU3ViVXJsICsgJy8nKTtcbiAgfTtcblxuICBjb25zdCBkZWZhdWx0VmFsdWVzID0ge1xuICAgIGVtYWlsOiBwcm9wcy5xdWVyeVBhcmFtcy5lbWFpbCxcbiAgICBjb2RlOiBwcm9wcy5xdWVyeVBhcmFtcy5jb2RlLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExvZ2luTGF5b3V0PlxuICAgICAgPElubmVyQm94PlxuICAgICAgICA8Rm9ybSBkZWZhdWx0VmFsdWVzPXtkZWZhdWx0VmFsdWVzfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIHsoeyBlcnJvcnMsIHJlZ2lzdGVyLCBnZXRWYWx1ZXMgfTogRm9ybUFQSTxTaWdudXBEVE8+KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJZb3VyIG5hbWVcIj5cbiAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJ1c2VyLW5hbWVcIiB7Li4ucmVnaXN0ZXIoJ25hbWUnKX0gcGxhY2Vob2xkZXI9XCIob3B0aW9uYWwpXCIgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiRW1haWxcIiBpbnZhbGlkPXshIWVycm9ycy5lbWFpbH0gZXJyb3I9e2Vycm9ycy5lbWFpbD8ubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZW1haWwnLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRW1haWwgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IC9eXFxTK0BcXFMrJC8sXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0VtYWlsIGlzIGludmFsaWQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgeyFnZXRDb25maWcoKS5hdXRvQXNzaWduT3JnICYmIChcbiAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJPcmcuIG5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD1cIm9yZy1uYW1lXCIgey4uLnJlZ2lzdGVyKCdvcmdOYW1lJyl9IHBsYWNlaG9sZGVyPVwiT3JnLiBuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7Z2V0Q29uZmlnKCkudmVyaWZ5RW1haWxFbmFibGVkICYmIChcbiAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJFbWFpbCB2ZXJpZmljYXRpb24gY29kZSAoc2VudCB0byB5b3VyIGVtYWlsKVwiPlxuICAgICAgICAgICAgICAgICAgPElucHV0IGlkPVwidmVyaWZpY2F0aW9uLWNvZGVcIiB7Li4ucmVnaXN0ZXIoJ2NvZGUnKX0gcGxhY2Vob2xkZXI9XCJDb2RlXCIgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJQYXNzd29yZFwiIGludmFsaWQ9eyEhZXJyb3JzLnBhc3N3b3JkfSBlcnJvcj17ZXJyb3JzPy5wYXNzd29yZD8ubWVzc2FnZX0+XG4gICAgICAgICAgICAgICAgPFBhc3N3b3JkRmllbGRcbiAgICAgICAgICAgICAgICAgIGlkPVwibmV3LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcigncGFzc3dvcmQnLCB7IHJlcXVpcmVkOiAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD1cIkNvbmZpcm0gcGFzc3dvcmRcIiBpbnZhbGlkPXshIWVycm9ycy5jb25maXJtfSBlcnJvcj17ZXJyb3JzPy5jb25maXJtPy5tZXNzYWdlfT5cbiAgICAgICAgICAgICAgICA8UGFzc3dvcmRGaWVsZFxuICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtLW5ldy1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdjb25maXJtJywge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0NvbmZpcm1lZCBwYXNzd29yZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAodikgPT4gdiA9PT0gZ2V0VmFsdWVzKCkucGFzc3dvcmQgfHwgJ1Bhc3N3b3JkcyBtdXN0IG1hdGNoIScsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gZmlsbD1cInRleHRcIiBocmVmPXtnZXRDb25maWcoKS5hcHBTdWJVcmwgKyAnL2xvZ2luJ30+XG4gICAgICAgICAgICAgICAgICBCYWNrIHRvIGxvZ2luXG4gICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvSW5uZXJCb3g+XG4gICAgPC9Mb2dpbkxheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJnZXRCYWNrZW5kU3J2IiwiRm9ybSIsIkZpZWxkIiwiSW5wdXQiLCJCdXR0b24iLCJIb3Jpem9udGFsR3JvdXAiLCJMaW5rQnV0dG9uIiwiZ2V0Q29uZmlnIiwidXNlQXBwTm90aWZpY2F0aW9uIiwiSW5uZXJCb3giLCJMb2dpbkxheW91dCIsIlBhc3N3b3JkRmllbGQiLCJTaWdudXBQYWdlIiwicHJvcHMiLCJub3RpZnlBcHAiLCJvblN1Ym1pdCIsImZvcm1EYXRhIiwibmFtZSIsImNvbmZpcm0iLCJyZXNwb25zZSIsInBvc3QiLCJlbWFpbCIsImNvZGUiLCJ1c2VybmFtZSIsIm9yZ05hbWUiLCJwYXNzd29yZCIsImNhdGNoIiwiZXJyIiwibXNnIiwiZGF0YSIsIm1lc3NhZ2UiLCJ3YXJuaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJhc3NpZ24iLCJhcHBTdWJVcmwiLCJkZWZhdWx0VmFsdWVzIiwicXVlcnlQYXJhbXMiLCJlcnJvcnMiLCJyZWdpc3RlciIsImdldFZhbHVlcyIsInJlcXVpcmVkIiwicGF0dGVybiIsInZhbHVlIiwiYXV0b0Fzc2lnbk9yZyIsInZlcmlmeUVtYWlsRW5hYmxlZCIsInZhbGlkYXRlIiwidiJdLCJzb3VyY2VSb290IjoiIn0=