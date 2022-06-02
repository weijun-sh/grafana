"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[5930],{

 "./public/app/core/components/Signup/VerifyEmailPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "VerifyEmailPage": () => ( VerifyEmailPage),
  "default": () => ( Signup_VerifyEmailPage)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var LoginLayout = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var config = __webpack_require__("./public/app/core/config.ts");
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _p, _Container, _Legend, _Button;









const VerifyEmail = () => {
  const notifyApp = (0,appNotification.iG)();
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
    return (0,jsx_runtime.jsxs)("div", {
      children: [_p || (_p = (0,jsx_runtime.jsx)("p", {
        children: "An email with a verification link has been sent to the email address. You should receive it shortly."
      })), _Container || (_Container = (0,jsx_runtime.jsx)(grafana_ui_src.Container, {
        margin: "md"
      })), (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        variant: "primary",
        href: (0,config.iE)().appSubUrl + '/signup',
        children: "Complete Signup"
      })]
    });
  }

  return (0,jsx_runtime.jsx)(grafana_ui_src.Form, {
    onSubmit: onSubmit,
    children: _ref => {
      var _errors$email;

      let {
        register,
        errors
      } = _ref;
      return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [_Legend || (_Legend = (0,jsx_runtime.jsx)(grafana_ui_src.Legend, {
          children: "Verify Email"
        })), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: "Email",
          description: "Enter your email address to get a verification link sent to you",
          invalid: !!errors.email,
          error: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message,
          children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({
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
        }), (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
          children: [_Button || (_Button = (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            type: "submit",
            children: "Send verification email"
          })), (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
            fill: "text",
            href: (0,config.iE)().appSubUrl + '/login',
            children: "Back to login"
          })]
        })]
      });
    }
  });
};
;
var _LoginLayout;





const VerifyEmailPage = () => {
  return _LoginLayout || (_LoginLayout = (0,jsx_runtime.jsx)(LoginLayout.dd, {
    children: (0,jsx_runtime.jsx)(LoginLayout.$s, {
      children: (0,jsx_runtime.jsx)(VerifyEmail, {})
    })
  }));
};
 const Signup_VerifyEmailPage = (VerifyEmailPage);

 })

}]);