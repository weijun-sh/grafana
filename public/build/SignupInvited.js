"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SignupInvited"],{

/***/ "./public/app/features/invites/SignupInvited.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupInvitedPage": () => (/* binding */ SignupInvitedPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _Button;











const navModel = {
  main: {
    icon: 'grafana',
    text: 'Invite',
    subTitle: 'Register your Grafana account',
    breadcrumbs: [{
      title: 'Login',
      url: 'login'
    }]
  },
  node: {
    text: ''
  }
};
const SignupInvitedPage = ({
  match
}) => {
  const code = match.params.code;
  const [initFormModel, setInitFormModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [greeting, setGreeting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [invitedBy, setInvitedBy] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react_use__WEBPACK_IMPORTED_MODULE_7__["default"])(async () => {
    const invite = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(`/api/user/invite/${code}`);
    setInitFormModel({
      email: invite.email,
      name: invite.name,
      username: invite.email
    });
    setGreeting(invite.name || invite.email || invite.username);
    setInvitedBy(invite.invitedBy);
  }, [code]);

  const onSubmit = async formData => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post('/api/user/invite/complete', Object.assign({}, formData, {
      inviteCode: code
    }));
    window.location.href = (0,app_core_config__WEBPACK_IMPORTED_MODULE_4__.getConfig)().appSubUrl + '/';
  };

  if (!initFormModel) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
        className: "page-sub-heading",
        children: ["Hello ", greeting || 'there', "."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "modal-tagline p-b-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("em", {
          children: invitedBy || 'Someone'
        }), " has invited you to join Grafana and the organization", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "highlight-word",
          children: app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.user.orgName
        }), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})), "Please complete the following and choose a password to accept your invitation and continue:"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
        defaultValues: initFormModel,
        onSubmit: onSubmit,
        children: ({
          register,
          errors
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            invalid: !!errors.email,
            error: errors.email && errors.email.message,
            label: "Email",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
              placeholder: "email@example.com"
            }, register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/,
                message: 'Email is invalid'
              }
            })))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            invalid: !!errors.name,
            error: errors.name && errors.name.message,
            label: "Name",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({
              placeholder: "Name (optional)"
            }, register('name')))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            invalid: !!errors.username,
            error: errors.username && errors.username.message,
            label: "Username",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('username', {
              required: 'Username is required'
            }), {
              placeholder: "Username"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            invalid: !!errors.password,
            error: errors.password && errors.password.message,
            label: "Password",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('password', {
              required: 'Password is required'
            }), {
              type: "password",
              placeholder: "Password"
            }))
          }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "submit",
            children: "Sign up"
          }))]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupInvitedPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sRUFBRSxDQUFDLENBQUNGLE1BQU0sQ0FBQ0ssUUFBekI7QUFBbUMsaUJBQUssRUFBRUwsTUFBTSxDQUFDSyxRQUFQLElBQW1CTCxNQUFNLENBQUNLLFFBQVAsQ0FBZ0JKLE9BQTdFO0FBQXNGLGlCQUFLLEVBQUMsVUFBNUY7QUFBQSxtQ0FDRSx1REFBQyw4Q0FBRCxvQkFDTUYsUUFBUSxDQUFDLFVBQUQsRUFBYTtBQUFFRyxjQUFBQSxRQUFRLEVBQUU7QUFBWixhQUFiLENBRGQ7QUFFRSxrQkFBSSxFQUFDLFVBRlA7QUFHRSx5QkFBVyxFQUFDO0FBSGQ7QUFERixZQW5CRixxQ0EyQkUsdURBQUMsK0NBQUQ7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBLFlBM0JGO0FBQUE7QUFGSixRQVRGO0FBQUE7QUFERixJQURGO0FBK0NELENBM0VNO0FBNkVQLGlFQUFlNUIsaUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9pbnZpdGVzL1NpZ251cEludml0ZWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgRmllbGQsIEZvcm0sIElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgZ2V0Q29uZmlnIH0gZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5cbmludGVyZmFjZSBGb3JtTW9kZWwge1xuICBlbWFpbDogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZD86IHN0cmluZztcbn1cblxuY29uc3QgbmF2TW9kZWwgPSB7XG4gIG1haW46IHtcbiAgICBpY29uOiAnZ3JhZmFuYScsXG4gICAgdGV4dDogJ0ludml0ZScsXG4gICAgc3ViVGl0bGU6ICdSZWdpc3RlciB5b3VyIEdyYWZhbmEgYWNjb3VudCcsXG4gICAgYnJlYWRjcnVtYnM6IFt7IHRpdGxlOiAnTG9naW4nLCB1cmw6ICdsb2dpbicgfV0sXG4gIH0sXG4gIG5vZGU6IHtcbiAgICB0ZXh0OiAnJyxcbiAgfSxcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7IGNvZGU6IHN0cmluZyB9PiB7fVxuXG5leHBvcnQgY29uc3QgU2lnbnVwSW52aXRlZFBhZ2U6IEZDPFByb3BzPiA9ICh7IG1hdGNoIH0pID0+IHtcbiAgY29uc3QgY29kZSA9IG1hdGNoLnBhcmFtcy5jb2RlO1xuICBjb25zdCBbaW5pdEZvcm1Nb2RlbCwgc2V0SW5pdEZvcm1Nb2RlbF0gPSB1c2VTdGF0ZTxGb3JtTW9kZWw+KCk7XG4gIGNvbnN0IFtncmVldGluZywgc2V0R3JlZXRpbmddID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbaW52aXRlZEJ5LCBzZXRJbnZpdGVkQnldID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gIHVzZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBpbnZpdGUgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL3VzZXIvaW52aXRlLyR7Y29kZX1gKTtcblxuICAgIHNldEluaXRGb3JtTW9kZWwoe1xuICAgICAgZW1haWw6IGludml0ZS5lbWFpbCxcbiAgICAgIG5hbWU6IGludml0ZS5uYW1lLFxuICAgICAgdXNlcm5hbWU6IGludml0ZS5lbWFpbCxcbiAgICB9KTtcblxuICAgIHNldEdyZWV0aW5nKGludml0ZS5uYW1lIHx8IGludml0ZS5lbWFpbCB8fCBpbnZpdGUudXNlcm5hbWUpO1xuICAgIHNldEludml0ZWRCeShpbnZpdGUuaW52aXRlZEJ5KTtcbiAgfSwgW2NvZGVdKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChmb3JtRGF0YTogRm9ybU1vZGVsKSA9PiB7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvdXNlci9pbnZpdGUvY29tcGxldGUnLCB7IC4uLmZvcm1EYXRhLCBpbnZpdGVDb2RlOiBjb2RlIH0pO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZ2V0Q29uZmlnKCkuYXBwU3ViVXJsICsgJy8nO1xuICB9O1xuXG4gIGlmICghaW5pdEZvcm1Nb2RlbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXN1Yi1oZWFkaW5nXCI+SGVsbG8ge2dyZWV0aW5nIHx8ICd0aGVyZSd9LjwvaDM+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC10YWdsaW5lIHAtYi0yXCI+XG4gICAgICAgICAgPGVtPntpbnZpdGVkQnkgfHwgJ1NvbWVvbmUnfTwvZW0+IGhhcyBpbnZpdGVkIHlvdSB0byBqb2luIEdyYWZhbmEgYW5kIHRoZSBvcmdhbml6YXRpb257JyAnfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodC13b3JkXCI+e2NvbnRleHRTcnYudXNlci5vcmdOYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBQbGVhc2UgY29tcGxldGUgdGhlIGZvbGxvd2luZyBhbmQgY2hvb3NlIGEgcGFzc3dvcmQgdG8gYWNjZXB0IHlvdXIgaW52aXRhdGlvbiBhbmQgY29udGludWU6XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9ybSBkZWZhdWx0VmFsdWVzPXtpbml0Rm9ybU1vZGVsfSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzIH0pID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxGaWVsZCBpbnZhbGlkPXshIWVycm9ycy5lbWFpbH0gZXJyb3I9e2Vycm9ycy5lbWFpbCAmJiBlcnJvcnMuZW1haWwubWVzc2FnZX0gbGFiZWw9XCJFbWFpbFwiPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbEBleGFtcGxlLmNvbVwiXG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2VtYWlsJywge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0VtYWlsIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAvXlxcUytAXFxTKyQvLFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFbWFpbCBpcyBpbnZhbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZCBpbnZhbGlkPXshIWVycm9ycy5uYW1lfSBlcnJvcj17ZXJyb3JzLm5hbWUgJiYgZXJyb3JzLm5hbWUubWVzc2FnZX0gbGFiZWw9XCJOYW1lXCI+XG4gICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiTmFtZSAob3B0aW9uYWwpXCIgey4uLnJlZ2lzdGVyKCduYW1lJyl9IC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZCBpbnZhbGlkPXshIWVycm9ycy51c2VybmFtZX0gZXJyb3I9e2Vycm9ycy51c2VybmFtZSAmJiBlcnJvcnMudXNlcm5hbWUubWVzc2FnZX0gbGFiZWw9XCJVc2VybmFtZVwiPlxuICAgICAgICAgICAgICAgIDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ3VzZXJuYW1lJywgeyByZXF1aXJlZDogJ1VzZXJuYW1lIGlzIHJlcXVpcmVkJyB9KX0gcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZCBpbnZhbGlkPXshIWVycm9ycy5wYXNzd29yZH0gZXJyb3I9e2Vycm9ycy5wYXNzd29yZCAmJiBlcnJvcnMucGFzc3dvcmQubWVzc2FnZX0gbGFiZWw9XCJQYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdwYXNzd29yZCcsIHsgcmVxdWlyZWQ6ICdQYXNzd29yZCBpcyByZXF1aXJlZCcgfSl9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIHVwPC9CdXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwSW52aXRlZFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUFzeW5jIiwiZ2V0QmFja2VuZFNydiIsIkJ1dHRvbiIsIkZpZWxkIiwiRm9ybSIsIklucHV0IiwiUGFnZSIsImdldENvbmZpZyIsImNvbnRleHRTcnYiLCJuYXZNb2RlbCIsIm1haW4iLCJpY29uIiwidGV4dCIsInN1YlRpdGxlIiwiYnJlYWRjcnVtYnMiLCJ0aXRsZSIsInVybCIsIm5vZGUiLCJTaWdudXBJbnZpdGVkUGFnZSIsIm1hdGNoIiwiY29kZSIsInBhcmFtcyIsImluaXRGb3JtTW9kZWwiLCJzZXRJbml0Rm9ybU1vZGVsIiwiZ3JlZXRpbmciLCJzZXRHcmVldGluZyIsImludml0ZWRCeSIsInNldEludml0ZWRCeSIsImludml0ZSIsImdldCIsImVtYWlsIiwibmFtZSIsInVzZXJuYW1lIiwib25TdWJtaXQiLCJmb3JtRGF0YSIsInBvc3QiLCJpbnZpdGVDb2RlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYXBwU3ViVXJsIiwidXNlciIsIm9yZ05hbWUiLCJyZWdpc3RlciIsImVycm9ycyIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsInBhdHRlcm4iLCJ2YWx1ZSIsInBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==