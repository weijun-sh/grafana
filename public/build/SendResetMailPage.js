"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SendResetMailPage"],{

/***/ "./public/app/core/components/ForgottenPassword/ForgottenPassword.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgottenPassword": () => (/* binding */ ForgottenPassword)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _Container, _Legend, _Button;










const paragraphStyles = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  color: ${theme.colors.formDescription};
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.regular};
  margin-top: ${theme.spacing.sm};
  display: block;
`;

const ForgottenPassword = () => {
  var _HorizontalGroup, _p2;

  const [emailSent, setEmailSent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(paragraphStyles);
  const loginHref = `${app_core_config__WEBPACK_IMPORTED_MODULE_4__["default"].appSubUrl}/login`;

  const sendEmail = async formModel => {
    const res = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post('/api/user/password/send-reset-email', formModel);

    if (res) {
      setEmailSent(true);
    }
  };

  if (emailSent) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        children: "An email with a reset link has been sent to the email address. You should receive it shortly."
      })), _Container || (_Container = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Container, {
        margin: "md"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
        variant: "primary",
        href: loginHref,
        children: "Back to login"
      })]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
    onSubmit: sendEmail,
    children: ({
      register,
      errors
    }) => {
      var _errors$userOrEmail;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [_Legend || (_Legend = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Legend, {
          children: "Reset password"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
          label: "User",
          description: "Enter your information to get a reset link sent to you",
          invalid: !!errors.userOrEmail,
          error: errors === null || errors === void 0 ? void 0 : (_errors$userOrEmail = errors.userOrEmail) === null || _errors$userOrEmail === void 0 ? void 0 : _errors$userOrEmail.message,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({
            id: "user-input",
            placeholder: "Email or username"
          }, register('userOrEmail', {
            required: 'Email or username is required'
          })))
        }), _HorizontalGroup || (_HorizontalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
          children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            type: "submit",
            children: "Send reset email"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
            fill: "text",
            href: loginHref,
            children: "Back to login"
          })]
        })), _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: styles,
          children: "Did you forget your username or email? Contact your Grafana administrator."
        }))]
      });
    }
  });
};

/***/ }),

/***/ "./public/app/core/components/ForgottenPassword/SendResetMailPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendResetMailPage": () => (/* binding */ SendResetMailPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
/* harmony import */ var _ForgottenPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/ForgottenPassword/ForgottenPassword.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoginLayout;





const SendResetMailPage = () => _LoginLayout || (_LoginLayout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__.LoginLayout, {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Login_LoginLayout__WEBPACK_IMPORTED_MODULE_1__.InnerBox, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ForgottenPassword__WEBPACK_IMPORTED_MODULE_2__.ForgottenPassword, {})
  })
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendResetMailPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9Gb3Jnb3R0ZW5QYXNzd29yZC9Gb3Jnb3R0ZW5QYXNzd29yZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL0ZvcmdvdHRlblBhc3N3b3JkL1NlbmRSZXNldE1haWxQYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBGb3JtLCBGaWVsZCwgSW5wdXQsIEJ1dHRvbiwgTGVnZW5kLCBDb250YWluZXIsIHVzZVN0eWxlcywgSG9yaXpvbnRhbEdyb3VwLCBMaW5rQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuXG5pbnRlcmZhY2UgRW1haWxEVE8ge1xuICB1c2VyT3JFbWFpbDogc3RyaW5nO1xufVxuXG5jb25zdCBwYXJhZ3JhcGhTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4gY3NzYFxuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZm9ybURlc2NyaXB0aW9ufTtcbiAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbX07XG4gIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkud2VpZ2h0LnJlZ3VsYXJ9O1xuICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcuc219O1xuICBkaXNwbGF5OiBibG9jaztcbmA7XG5cbmV4cG9ydCBjb25zdCBGb3Jnb3R0ZW5QYXNzd29yZDogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtlbWFpbFNlbnQsIHNldEVtYWlsU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhwYXJhZ3JhcGhTdHlsZXMpO1xuICBjb25zdCBsb2dpbkhyZWYgPSBgJHtjb25maWcuYXBwU3ViVXJsfS9sb2dpbmA7XG5cbiAgY29uc3Qgc2VuZEVtYWlsID0gYXN5bmMgKGZvcm1Nb2RlbDogRW1haWxEVE8pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS91c2VyL3Bhc3N3b3JkL3NlbmQtcmVzZXQtZW1haWwnLCBmb3JtTW9kZWwpO1xuICAgIGlmIChyZXMpIHtcbiAgICAgIHNldEVtYWlsU2VudCh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKGVtYWlsU2VudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5BbiBlbWFpbCB3aXRoIGEgcmVzZXQgbGluayBoYXMgYmVlbiBzZW50IHRvIHRoZSBlbWFpbCBhZGRyZXNzLiBZb3Ugc2hvdWxkIHJlY2VpdmUgaXQgc2hvcnRseS48L3A+XG4gICAgICAgIDxDb250YWluZXIgbWFyZ2luPVwibWRcIiAvPlxuICAgICAgICA8TGlua0J1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGhyZWY9e2xvZ2luSHJlZn0+XG4gICAgICAgICAgQmFjayB0byBsb2dpblxuICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPEZvcm0gb25TdWJtaXQ9e3NlbmRFbWFpbH0+XG4gICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycyB9KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPExlZ2VuZD5SZXNldCBwYXNzd29yZDwvTGVnZW5kPlxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJVc2VyXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRW50ZXIgeW91ciBpbmZvcm1hdGlvbiB0byBnZXQgYSByZXNldCBsaW5rIHNlbnQgdG8geW91XCJcbiAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLnVzZXJPckVtYWlsfVxuICAgICAgICAgICAgZXJyb3I9e2Vycm9ycz8udXNlck9yRW1haWw/Lm1lc3NhZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGlkPVwidXNlci1pbnB1dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgb3IgdXNlcm5hbWVcIlxuICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3VzZXJPckVtYWlsJywgeyByZXF1aXJlZDogJ0VtYWlsIG9yIHVzZXJuYW1lIGlzIHJlcXVpcmVkJyB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VuZCByZXNldCBlbWFpbDwvQnV0dG9uPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gZmlsbD1cInRleHRcIiBocmVmPXtsb2dpbkhyZWZ9PlxuICAgICAgICAgICAgICBCYWNrIHRvIGxvZ2luXG4gICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlc30+RGlkIHlvdSBmb3JnZXQgeW91ciB1c2VybmFtZSBvciBlbWFpbD8gQ29udGFjdCB5b3VyIEdyYWZhbmEgYWRtaW5pc3RyYXRvci48L3A+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBMb2dpbkxheW91dCwgSW5uZXJCb3ggfSBmcm9tICcuLi9Mb2dpbi9Mb2dpbkxheW91dCc7XG5cbmltcG9ydCB7IEZvcmdvdHRlblBhc3N3b3JkIH0gZnJvbSAnLi9Gb3Jnb3R0ZW5QYXNzd29yZCc7XG5cbmV4cG9ydCBjb25zdCBTZW5kUmVzZXRNYWlsUGFnZTogRkMgPSAoKSA9PiAoXG4gIDxMb2dpbkxheW91dD5cbiAgICA8SW5uZXJCb3g+XG4gICAgICA8Rm9yZ290dGVuUGFzc3dvcmQgLz5cbiAgICA8L0lubmVyQm94PlxuICA8L0xvZ2luTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VuZFJlc2V0TWFpbFBhZ2U7XG4iXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImdldEJhY2tlbmRTcnYiLCJGb3JtIiwiRmllbGQiLCJJbnB1dCIsIkJ1dHRvbiIsIkxlZ2VuZCIsIkNvbnRhaW5lciIsInVzZVN0eWxlcyIsIkhvcml6b250YWxHcm91cCIsIkxpbmtCdXR0b24iLCJjb25maWciLCJwYXJhZ3JhcGhTdHlsZXMiLCJ0aGVtZSIsImNvbG9ycyIsImZvcm1EZXNjcmlwdGlvbiIsInR5cG9ncmFwaHkiLCJzaXplIiwic20iLCJ3ZWlnaHQiLCJyZWd1bGFyIiwic3BhY2luZyIsIkZvcmdvdHRlblBhc3N3b3JkIiwiZW1haWxTZW50Iiwic2V0RW1haWxTZW50Iiwic3R5bGVzIiwibG9naW5IcmVmIiwiYXBwU3ViVXJsIiwic2VuZEVtYWlsIiwiZm9ybU1vZGVsIiwicmVzIiwicG9zdCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwidXNlck9yRW1haWwiLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJMb2dpbkxheW91dCIsIklubmVyQm94IiwiU2VuZFJlc2V0TWFpbFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9