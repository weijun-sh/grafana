"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[5930],{

/***/ "./public/app/core/components/Signup/VerifyEmailPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "VerifyEmailPage": () => (/* binding */ VerifyEmailPage),
  "default": () => (/* binding */ Signup_VerifyEmailPage)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./public/app/core/components/Login/LoginLayout.tsx
var LoginLayout = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/config.ts
var config = __webpack_require__("./public/app/core/config.ts");
// EXTERNAL MODULE: ./public/app/core/copy/appNotification.ts
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/core/components/Signup/VerifyEmail.tsx
var _p, _Container, _Legend, _Button;









const VerifyEmail = () => {
  const notifyApp = (0,appNotification/* useAppNotification */.iG)();
  const [emailSent, setEmailSent] = (0,react.useState)(false);

  const onSubmit = formModel => {
    (0,src.getBackendSrv)().post('/api/user/signup', formModel).then(() => {
      setEmailSent(true);
    }).catch(err => {
      var _err$data;

      const msg = ((_err$data = err.data) === null || _err$data === void 0 ? void 0 : _err$data.message) || err;
      notifyApp.warning(msg);
    });
  };

  if (emailSent) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [_p || (_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: "An email with a verification link has been sent to the email address. You should receive it shortly."
      })), _Container || (_Container = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Container, {
        margin: "md"
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        variant: "primary",
        href: (0,config/* getConfig */.iE)().appSubUrl + '/signup',
        children: "Complete Signup"
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Form, {
    onSubmit: onSubmit,
    children: _ref => {
      var _errors$email;

      let {
        register,
        errors
      } = _ref;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [_Legend || (_Legend = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Legend, {
          children: "Verify Email"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: "Email",
          description: "Enter your email address to get a verification link sent to you",
          invalid: !!errors.email,
          error: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({
            id: "email"
          }, register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/,
              message: 'Email is invalid'
            }
          }), {
            placeholder: "Email"
          }))
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
          children: [_Button || (_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            type: "submit",
            children: "Send verification email"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
            fill: "text",
            href: (0,config/* getConfig */.iE)().appSubUrl + '/login',
            children: "Back to login"
          })]
        })]
      });
    }
  });
};
;// CONCATENATED MODULE: ./public/app/core/components/Signup/VerifyEmailPage.tsx
var _LoginLayout;





const VerifyEmailPage = () => {
  return _LoginLayout || (_LoginLayout = /*#__PURE__*/(0,jsx_runtime.jsx)(LoginLayout/* LoginLayout */.dd, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoginLayout/* InnerBox */.$s, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(VerifyEmail, {})
    })
  }));
};
/* harmony default export */ const Signup_VerifyEmailPage = (VerifyEmailPage);

/***/ })

}]);