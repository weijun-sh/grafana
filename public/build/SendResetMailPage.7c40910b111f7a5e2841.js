"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[133],{

 "./public/app/core/components/ForgottenPassword/SendResetMailPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "SendResetMailPage": () => ( SendResetMailPage),
  "default": () => ( ForgottenPassword_SendResetMailPage)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var LoginLayout = __webpack_require__("./public/app/core/components/Login/LoginLayout.tsx");
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var config = __webpack_require__("./public/app/core/config.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _p, _Container, _Legend, _Button;










const paragraphStyles = theme => emotion_css_esm.css`
  color: ${theme.colors.formDescription};
  font-size: ${theme.typography.size.sm};
  font-weight: ${theme.typography.weight.regular};
  margin-top: ${theme.spacing.sm};
  display: block;
`;

const ForgottenPassword = () => {
  var _HorizontalGroup, _p2;

  const [emailSent, setEmailSent] = (0,react.useState)(false);
  const styles = (0,grafana_ui_src.useStyles)(paragraphStyles);
  const loginHref = `${config/* default.appSubUrl */.ZP.appSubUrl}/login`;

  const sendEmail = async formModel => {
    const res = await (0,src.getBackendSrv)().post('/api/user/password/send-reset-email', formModel);

    if (res) {
      setEmailSent(true);
    }
  };

  if (emailSent) {
    return (0,jsx_runtime.jsxs)("div", {
      children: [_p || (_p = (0,jsx_runtime.jsx)("p", {
        children: "An email with a reset link has been sent to the email address. You should receive it shortly."
      })), _Container || (_Container = (0,jsx_runtime.jsx)(grafana_ui_src.Container, {
        margin: "md"
      })), (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        variant: "primary",
        href: loginHref,
        children: "Back to login"
      })]
    });
  }

  return (0,jsx_runtime.jsx)(grafana_ui_src.Form, {
    onSubmit: sendEmail,
    children: _ref => {
      var _errors$userOrEmail;

      let {
        register,
        errors
      } = _ref;
      return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [_Legend || (_Legend = (0,jsx_runtime.jsx)(grafana_ui_src.Legend, {
          children: "Reset password"
        })), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: "User",
          description: "Enter your information to get a reset link sent to you",
          invalid: !!errors.userOrEmail,
          error: errors === null || errors === void 0 ? void 0 : (_errors$userOrEmail = errors.userOrEmail) === null || _errors$userOrEmail === void 0 ? void 0 : _errors$userOrEmail.message,
          children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({
            id: "user-input",
            placeholder: "Email or username"
          }, register('userOrEmail', {
            required: 'Email or username is required'
          })))
        }), _HorizontalGroup || (_HorizontalGroup = (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
          children: [_Button || (_Button = (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            type: "submit",
            children: "Send reset email"
          })), (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
            fill: "text",
            href: loginHref,
            children: "Back to login"
          })]
        })), _p2 || (_p2 = (0,jsx_runtime.jsx)("p", {
          className: styles,
          children: "Did you forget your username or email? Contact your Grafana administrator."
        }))]
      });
    }
  });
};
;
var _LoginLayout;





const SendResetMailPage = () => _LoginLayout || (_LoginLayout = (0,jsx_runtime.jsx)(LoginLayout.dd, {
  children: (0,jsx_runtime.jsx)(LoginLayout.$s, {
    children: (0,jsx_runtime.jsx)(ForgottenPassword, {})
  })
}));
 const ForgottenPassword_SendResetMailPage = (SendResetMailPage);

 })

}]);