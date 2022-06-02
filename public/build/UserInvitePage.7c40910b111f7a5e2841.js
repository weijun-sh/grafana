"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[7707],{

 "./public/app/features/org/UserInvitePage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "UserInvitePage": () => ( UserInvitePage),
  "default": () => ( org_UserInvitePage)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var core = __webpack_require__("./public/app/core/core.ts");
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var config = __webpack_require__("./public/app/core/config.ts");
var types = __webpack_require__("./public/app/types/index.ts");
var actions = __webpack_require__("./public/app/features/invites/state/actions.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _Button;

const _excluded = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const roles = [{
  label: 'Viewer',
  value: types.B5.Viewer
}, {
  label: 'Editor',
  value: types.B5.Editor
}, {
  label: 'Admin',
  value: types.B5.Admin
}];
const defaultValues = {
  name: '',
  email: '',
  role: types.B5.Editor,
  sendEmail: true
};
const UserInviteForm = () => {
  const dispatch = (0,types.I0)();

  const onSubmit = async formData => {
    await dispatch((0,actions.MA)(formData)).unwrap();
    grafana_runtime_src.locationService.push('/org/users/');
  };

  return (0,jsx_runtime.jsx)(grafana_ui_src.Form, {
    defaultValues: defaultValues,
    onSubmit: onSubmit,
    children: _ref => {
      let {
        register,
        control,
        errors
      } = _ref;
      return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          invalid: !!errors.loginOrEmail,
          error: !!errors.loginOrEmail ? 'Email or username is required' : undefined,
          label: "Email or username",
          children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({}, register('loginOrEmail', {
            required: true
          }), {
            placeholder: "email@example.com"
          }))
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          invalid: !!errors.name,
          label: "Name",
          children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({}, register('name'), {
            placeholder: "(optional)"
          }))
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          invalid: !!errors.role,
          label: "Role",
          children: (0,jsx_runtime.jsx)(grafana_ui_src.InputControl, {
            render: _ref2 => {
              let {} = _ref2,
                  field = _objectWithoutPropertiesLoose(_ref2.field, _excluded);

              return (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, Object.assign({}, field, {
                options: roles
              }));
            },
            control: control,
            name: "role"
          })
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: "Send invite email",
          children: (0,jsx_runtime.jsx)(grafana_ui_src.Switch, Object.assign({
            id: "send-email-switch"
          }, register('sendEmail')))
        }), (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
          children: [_Button || (_Button = (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            type: "submit",
            children: "Submit"
          })), (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
            href: src.locationUtil.assureBaseUrl((0,config.iE)().appSubUrl + '/org/users'),
            variant: "secondary",
            children: "Back"
          })]
        })]
      });
    }
  });
};
 const org_UserInviteForm = (UserInviteForm);
;
var _h, _UserInviteForm;









const UserInvitePage = _ref => {
  let {
    navModel
  } = _ref;
  return (0,jsx_runtime.jsx)(Page.Z, {
    navModel: navModel,
    children: (0,jsx_runtime.jsxs)(Page.Z.Contents, {
      children: [_h || (_h = (0,jsx_runtime.jsx)("h3", {
        className: "page-sub-heading",
        children: "Invite user"
      })), (0,jsx_runtime.jsxs)("div", {
        className: "p-b-2",
        children: ["Send invitation or add existing Grafana user to the organization.", (0,jsx_runtime.jsxs)("span", {
          className: "highlight-word",
          children: [" ", core.Vt.user.orgName]
        })]
      }), _UserInviteForm || (_UserInviteForm = (0,jsx_runtime.jsx)(org_UserInviteForm, {}))]
    })
  });
};

const mapStateToProps = state => ({
  navModel: (0,navModel.h)(state.navIndex, 'users')
});

 const org_UserInvitePage = ((0,es.connect)(mapStateToProps)(UserInvitePage));

 })

}]);