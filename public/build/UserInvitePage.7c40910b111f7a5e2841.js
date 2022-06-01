"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[7707],{

/***/ "./public/app/features/org/UserInvitePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UserInvitePage": () => (/* binding */ UserInvitePage),
  "default": () => (/* binding */ org_UserInvitePage)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./public/app/core/components/Page/Page.tsx + 1 modules
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
// EXTERNAL MODULE: ./public/app/core/core.ts
var core = __webpack_require__("./public/app/core/core.ts");
// EXTERNAL MODULE: ./public/app/core/selectors/navModel.ts
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/config.ts
var config = __webpack_require__("./public/app/core/config.ts");
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var types = __webpack_require__("./public/app/types/index.ts");
// EXTERNAL MODULE: ./public/app/features/invites/state/actions.ts
var actions = __webpack_require__("./public/app/features/invites/state/actions.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/org/UserInviteForm.tsx
var _Button;

const _excluded = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const roles = [{
  label: 'Viewer',
  value: types/* OrgRole.Viewer */.B5.Viewer
}, {
  label: 'Editor',
  value: types/* OrgRole.Editor */.B5.Editor
}, {
  label: 'Admin',
  value: types/* OrgRole.Admin */.B5.Admin
}];
const defaultValues = {
  name: '',
  email: '',
  role: types/* OrgRole.Editor */.B5.Editor,
  sendEmail: true
};
const UserInviteForm = () => {
  const dispatch = (0,types/* useDispatch */.I0)();

  const onSubmit = async formData => {
    await dispatch((0,actions/* addInvitee */.MA)(formData)).unwrap();
    grafana_runtime_src.locationService.push('/org/users/');
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Form, {
    defaultValues: defaultValues,
    onSubmit: onSubmit,
    children: _ref => {
      let {
        register,
        control,
        errors
      } = _ref;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          invalid: !!errors.loginOrEmail,
          error: !!errors.loginOrEmail ? 'Email or username is required' : undefined,
          label: "Email or username",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({}, register('loginOrEmail', {
            required: true
          }), {
            placeholder: "email@example.com"
          }))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          invalid: !!errors.name,
          label: "Name",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({}, register('name'), {
            placeholder: "(optional)"
          }))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          invalid: !!errors.role,
          label: "Role",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InputControl, {
            render: _ref2 => {
              let {} = _ref2,
                  field = _objectWithoutPropertiesLoose(_ref2.field, _excluded);

              return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, Object.assign({}, field, {
                options: roles
              }));
            },
            control: control,
            name: "role"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: "Send invite email",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Switch, Object.assign({
            id: "send-email-switch"
          }, register('sendEmail')))
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
          children: [_Button || (_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            type: "submit",
            children: "Submit"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
            href: src.locationUtil.assureBaseUrl((0,config/* getConfig */.iE)().appSubUrl + '/org/users'),
            variant: "secondary",
            children: "Back"
          })]
        })]
      });
    }
  });
};
/* harmony default export */ const org_UserInviteForm = (UserInviteForm);
;// CONCATENATED MODULE: ./public/app/features/org/UserInvitePage.tsx
var _h, _UserInviteForm;









const UserInvitePage = _ref => {
  let {
    navModel
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
    navModel: navModel,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default.Contents */.Z.Contents, {
      children: [_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        className: "page-sub-heading",
        children: "Invite user"
      })), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "p-b-2",
        children: ["Send invitation or add existing Grafana user to the organization.", /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: "highlight-word",
          children: [" ", core/* contextSrv.user.orgName */.Vt.user.orgName]
        })]
      }), _UserInviteForm || (_UserInviteForm = /*#__PURE__*/(0,jsx_runtime.jsx)(org_UserInviteForm, {}))]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,navModel/* getNavModel */.h)(state.navIndex, 'users')
});

/* harmony default export */ const org_UserInvitePage = ((0,es.connect)(mapStateToProps)(UserInvitePage));

/***/ })

}]);