"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[4938],{

/***/ "./public/app/features/profile/ChangePasswordPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ChangePasswordPage": () => (/* binding */ ChangePasswordPage),
  "default": () => (/* binding */ profile_ChangePasswordPage)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js
var useMount = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js");
// EXTERNAL MODULE: ./public/app/core/components/Page/Page.tsx + 1 modules
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
// EXTERNAL MODULE: ./public/app/core/selectors/navModel.ts
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/config.ts
var config = __webpack_require__("./public/app/core/config.ts");
// EXTERNAL MODULE: ./public/app/core/components/PasswordField/PasswordField.tsx
var PasswordField = __webpack_require__("./public/app/core/components/PasswordField/PasswordField.tsx");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/profile/ChangePasswordForm.tsx
var _p, _p2;









const ChangePasswordForm = _ref => {
  var _user$authLabels, _Button;

  let {
    user,
    onChangePassword,
    isSaving
  } = _ref;
  const {
    ldapEnabled,
    authProxyEnabled,
    disableLoginForm
  } = config/* default */.ZP;
  const authSource = ((_user$authLabels = user.authLabels) === null || _user$authLabels === void 0 ? void 0 : _user$authLabels.length) && user.authLabels[0];

  if (ldapEnabled || authProxyEnabled) {
    return _p || (_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: "You cannot change password when LDAP or auth proxy authentication is enabled."
    }));
  }

  if (authSource && disableLoginForm) {
    return _p2 || (_p2 = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: "Password cannot be changed here."
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: emotion_css_esm.css`
        max-width: 400px;
      `,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Form, {
      onSubmit: onChangePassword,
      children: _ref2 => {
        var _errors$oldPassword, _errors$newPassword, _errors$confirmNew;

        let {
          register,
          errors,
          getValues
        } = _ref2;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "Old password",
            invalid: !!errors.oldPassword,
            error: errors === null || errors === void 0 ? void 0 : (_errors$oldPassword = errors.oldPassword) === null || _errors$oldPassword === void 0 ? void 0 : _errors$oldPassword.message,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, Object.assign({
              id: "current-password",
              autoComplete: "current-password"
            }, register('oldPassword', {
              required: 'Old password is required'
            })))
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "New password",
            invalid: !!errors.newPassword,
            error: errors === null || errors === void 0 ? void 0 : (_errors$newPassword = errors.newPassword) === null || _errors$newPassword === void 0 ? void 0 : _errors$newPassword.message,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, Object.assign({
              id: "new-password",
              autoComplete: "new-password"
            }, register('newPassword', {
              required: 'New password is required',
              validate: {
                confirm: v => v === getValues().confirmNew || 'Passwords must match',
                old: v => v !== getValues().oldPassword || `New password can't be the same as the old one.`
              }
            })))
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "Confirm password",
            invalid: !!errors.confirmNew,
            error: errors === null || errors === void 0 ? void 0 : (_errors$confirmNew = errors.confirmNew) === null || _errors$confirmNew === void 0 ? void 0 : _errors$confirmNew.message,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, Object.assign({
              id: "confirm-new-password",
              autoComplete: "new-password"
            }, register('confirmNew', {
              required: 'New password confirmation is required',
              validate: v => v === getValues().newPassword || 'Passwords must match'
            })))
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(src.HorizontalGroup, {
            children: [_Button || (_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
              variant: "primary",
              disabled: isSaving,
              type: "submit",
              children: "Change Password"
            })), /*#__PURE__*/(0,jsx_runtime.jsx)(src.LinkButton, {
              variant: "secondary",
              href: `${config/* default.appSubUrl */.ZP.appSubUrl}/profile`,
              fill: "outline",
              children: "Cancel"
            })]
          })]
        });
      }
    })
  });
};
// EXTERNAL MODULE: ./public/app/features/profile/state/actions.ts
var actions = __webpack_require__("./public/app/features/profile/state/actions.ts");
;// CONCATENATED MODULE: ./public/app/features/profile/ChangePasswordPage.tsx
var _h;












function mapStateToProps(state) {
  const userState = state.user;
  const {
    isUpdating,
    user
  } = userState;
  return {
    navModel: (0,navModel/* getNavModel */.h)(state.navIndex, `change-password`),
    isUpdating,
    user
  };
}

const mapDispatchToProps = {
  loadUser: actions/* loadUser */.II,
  changePassword: actions/* changePassword */.Cp
};
const connector = (0,es.connect)(mapStateToProps, mapDispatchToProps);
function ChangePasswordPage(_ref) {
  let {
    navModel,
    loadUser,
    isUpdating,
    user,
    changePassword
  } = _ref;
  (0,useMount/* default */.Z)(() => loadUser());
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
    navModel: navModel,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default.Contents */.Z.Contents, {
      isLoading: !Boolean(user),
      children: user ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          className: "page-heading",
          children: "Change Your Password"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(ChangePasswordForm, {
          user: user,
          onChangePassword: changePassword,
          isSaving: isUpdating
        })]
      }) : null
    })
  });
}
/* harmony default export */ const profile_ChangePasswordPage = (connector(ChangePasswordPage));

/***/ }),

/***/ "./public/app/features/profile/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cp": () => (/* binding */ changePassword),
/* harmony export */   "II": () => (/* binding */ loadUser),
/* harmony export */   "Lj": () => (/* binding */ updateUserProfile),
/* harmony export */   "PA": () => (/* binding */ initUserProfilePage),
/* harmony export */   "cc": () => (/* binding */ revokeUserSession),
/* harmony export */   "hz": () => (/* binding */ changeUserOrg)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/profile/api.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/profile/state/reducers.ts");



function changePassword(payload) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .setUpdating */ .zc)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.changePassword */ .h.changePassword(payload);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .setUpdating */ .zc)({
      updating: false
    }));
  };
}
function initUserProfilePage() {
  return async function (dispatch) {
    await dispatch(loadUser());
    dispatch(loadTeams());
    dispatch(loadOrgs());
    dispatch(loadSessions());
  };
}
function loadUser() {
  return async function (dispatch) {
    const user = await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.loadUser */ .h.loadUser();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .userLoaded */ .aw)({
      user
    }));
  };
}

function loadTeams() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .initLoadTeams */ .qD)());
    const teams = await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.loadTeams */ .h.loadTeams();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .teamsLoaded */ .PL)({
      teams
    }));
  };
}

function loadOrgs() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .initLoadOrgs */ .$S)());
    const orgs = await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.loadOrgs */ .h.loadOrgs();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .orgsLoaded */ .Ns)({
      orgs
    }));
  };
}

function loadSessions() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .initLoadSessions */ .Uk)());
    const sessions = await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.loadSessions */ .h.loadSessions();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .sessionsLoaded */ .z0)({
      sessions
    }));
  };
}

function revokeUserSession(tokenId) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .setUpdating */ .zc)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.revokeUserSession */ .h.revokeUserSession(tokenId);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .userSessionRevoked */ .p$)({
      tokenId
    }));
  };
}
function changeUserOrg(org) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .setUpdating */ .zc)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.setUserOrg */ .h.setUserOrg(org);
    window.location.href = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.appSubUrl + '/profile';
  };
}
function updateUserProfile(payload) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .setUpdating */ .zc)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.updateUserProfile */ .h.updateUserProfile(payload);
    await dispatch(loadUser());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .setUpdating */ .zc)({
      updating: false
    }));
  };
}

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(function () {
        fn();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMount);


/***/ })

}]);