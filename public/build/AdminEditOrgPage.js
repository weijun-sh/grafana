"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AdminEditOrgPage"],{

/***/ "./public/app/features/admin/AdminEditOrgPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminEditOrgPage)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _users_UsersTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/users/UsersTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _Legend, _Legend2;

















const getOrg = async orgId => {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().get('/api/orgs/' + orgId);
};

const getOrgUsers = async orgId => {
  if (app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.OrgUsersRead)) {
    return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().get(`/api/orgs/${orgId}/users`, (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_8__.accessControlQueryParam)());
  }

  return [];
};

const updateOrgUserRole = async (orgUser, orgId) => {
  await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().patch('/api/orgs/' + orgId + '/users/' + orgUser.userId, orgUser);
};

const removeOrgUser = async (orgUser, orgId) => {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().delete('/api/orgs/' + orgId + '/users/' + orgUser.userId);
};

function AdminEditOrgPage({
  match
}) {
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.navIndex);
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__.getNavModel)(navIndex, 'global-orgs');
  const orgId = parseInt(match.params.id, 10);
  const canWriteOrg = app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.OrgsWrite);
  const canReadUsers = app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.OrgUsersRead);
  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [orgState, fetchOrg] = (0,react_use__WEBPACK_IMPORTED_MODULE_12__["default"])(() => getOrg(orgId), []);
  const [, fetchOrgUsers] = (0,react_use__WEBPACK_IMPORTED_MODULE_12__["default"])(() => getOrgUsers(orgId), []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchOrg();
    fetchOrgUsers().then(res => setUsers(res));
  }, [fetchOrg, fetchOrgUsers]);

  const updateOrgName = async name => {
    return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().put('/api/orgs/' + orgId, Object.assign({}, orgState.value, {
      name
    }));
  };

  const renderMissingUserListRightsMessage = () => {
    return _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      severity: "info",
      title: "Access denied",
      children: "You do not have permission to see users in this organization. To update this organization, contact your server administrator."
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [_Legend || (_Legend = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Legend, {
          children: "Edit organization"
        })), orgState.value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Form, {
          defaultValues: {
            orgName: orgState.value.name
          },
          onSubmit: async values => await updateOrgName(values.orgName),
          children: ({
            register,
            errors
          }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
              label: "Name",
              invalid: !!errors.orgName,
              error: "Name is required",
              disabled: !canWriteOrg,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({}, register('orgName', {
                required: true
              }), {
                id: "org-name-input"
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
              type: "submit",
              disabled: !canWriteOrg,
              children: "Update"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
              margin-top: 20px;
            `,
          children: [_Legend2 || (_Legend2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Legend, {
            children: "Organization users"
          })), !canReadUsers && renderMissingUserListRightsMessage(), canReadUsers && !!users.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_users_UsersTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
            users: users,
            orgId: orgId,
            onRoleChange: (role, orgUser) => {
              updateOrgUserRole(Object.assign({}, orgUser, {
                role
              }), orgId);
              setUsers(users.map(user => {
                if (orgUser.userId === user.userId) {
                  return Object.assign({}, orgUser, {
                    role
                  });
                }

                return user;
              }));
              fetchOrgUsers();
            },
            onRemoveUser: orgUser => {
              removeOrgUser(orgUser, orgId);
              setUsers(users.filter(user => orgUser.userId !== user.userId));
              fetchOrgUsers();
            }
          })]
        })]
      })
    })
  });
}

/***/ }),

/***/ "./public/app/features/users/UsersTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/RolePicker/UserRolePicker.tsx");
/* harmony import */ var app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/admin/OrgRolePicker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3, _th4, _th5, _th6;












const UsersTable = props => {
  const {
    users,
    orgId,
    onRoleChange,
    onRemoveUser
  } = props;
  const [userToRemove, setUserToRemove] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [roleOptions, setRoleOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [builtinRoles, setBuiltinRoles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function fetchOptions() {
      try {
        if (app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionRolesList)) {
          let options = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_3__.fetchRoleOptions)(orgId);
          setRoleOptions(options);
        }

        if (!app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.accessControlBuiltinRefactorEnabled() && app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionBuiltinRolesList)) {
          const builtInRoles = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_3__.fetchBuiltinRoles)(orgId);
          setBuiltinRoles(builtInRoles);
        }
      } catch (e) {
        console.error('Error loading options');
      }
    }

    if (app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.licensedAccessControlEnabled()) {
      fetchOptions();
    }
  }, [orgId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
      className: "filter-table form-inline",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Login"
          })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Email"
          })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Name"
          })), _th5 || (_th5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Seen"
          })), _th6 || (_th6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Role"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            style: {
              width: '34px'
            }
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
        children: users.map((user, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "width-2 text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                className: "filter-table__avatar",
                src: user.avatarUrl,
                alt: "User avatar"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "max-width-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "ellipsis",
                title: user.login,
                children: user.login
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "max-width-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "ellipsis",
                title: user.email,
                children: user.email
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "max-width-5",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "ellipsis",
                title: user.name,
                children: user.name
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "width-1",
              children: user.lastSeenAtAge
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "width-8",
              children: app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.licensedAccessControlEnabled() ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_2__.UserRolePicker, {
                userId: user.userId,
                orgId: orgId,
                builtInRole: user.role,
                onBuiltinRoleChange: newRole => onRoleChange(newRole, user),
                roleOptions: roleOptions,
                builtInRoles: builtinRoles,
                disabled: !app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.OrgUsersRoleUpdate, user)
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_6__.OrgRolePicker, {
                "aria-label": "Role",
                value: user.role,
                disabled: !app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.OrgUsersRoleUpdate, user),
                onChange: newRole => onRoleChange(newRole, user)
              })
            }), app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.OrgUsersRemove, user) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
                size: "sm",
                variant: "destructive",
                onClick: () => {
                  setUserToRemove(user);
                },
                icon: "times",
                "aria-label": "Delete user"
              })
            })]
          }, `${user.userId}-${index}`);
        })
      })]
    }), Boolean(userToRemove) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmModal, {
      body: `Are you sure you want to delete user ${userToRemove === null || userToRemove === void 0 ? void 0 : userToRemove.login}?`,
      confirmText: "Delete",
      title: "Delete",
      onDismiss: () => {
        setUserToRemove(null);
      },
      isOpen: true,
      onConfirm: () => {
        if (!userToRemove) {
          return;
        }

        onRemoveUser(userToRemove);
        setUserToRemove(null);
      }
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsersTable);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFELENBQWY7QUFDRCxPQU5IO0FBT0UsWUFBTSxFQUFFLElBUFY7QUFRRSxlQUFTLEVBQUUsTUFBTTtBQUNmLFlBQUksQ0FBQ0QsWUFBTCxFQUFtQjtBQUNqQjtBQUNEOztBQUNERCxRQUFBQSxZQUFZLENBQUNDLFlBQUQsQ0FBWjtBQUNBQyxRQUFBQSxlQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0Q7QUFkSCxNQTlFSjtBQUFBLElBREY7QUFrR0QsQ0FoSUQ7O0FBa0lBLGlFQUFldkQsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL0FkbWluRWRpdE9yZ1BhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3VzZXJzL1VzZXJzVGFibGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlQXN5bmNGbiB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IFVybFF1ZXJ5VmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEZvcm0sIEZpZWxkLCBJbnB1dCwgQnV0dG9uLCBMZWdlbmQsIEFsZXJ0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIH0gZnJvbSAnYXBwL2NvcmUvdXRpbHMvYWNjZXNzQ29udHJvbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlLCBPcmdVc2VyLCBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IFVzZXJzVGFibGUgZnJvbSAnLi4vdXNlcnMvVXNlcnNUYWJsZSc7XG5cbmludGVyZmFjZSBPcmdOYW1lRFRPIHtcbiAgb3JnTmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRPcmcgPSBhc3luYyAob3JnSWQ6IFVybFF1ZXJ5VmFsdWUpID0+IHtcbiAgcmV0dXJuIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvb3Jncy8nICsgb3JnSWQpO1xufTtcblxuY29uc3QgZ2V0T3JnVXNlcnMgPSBhc3luYyAob3JnSWQ6IFVybFF1ZXJ5VmFsdWUpID0+IHtcbiAgaWYgKGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLk9yZ1VzZXJzUmVhZCkpIHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChgL2FwaS9vcmdzLyR7b3JnSWR9L3VzZXJzYCwgYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0oKSk7XG4gIH1cbiAgcmV0dXJuIFtdO1xufTtcblxuY29uc3QgdXBkYXRlT3JnVXNlclJvbGUgPSBhc3luYyAob3JnVXNlcjogT3JnVXNlciwgb3JnSWQ6IFVybFF1ZXJ5VmFsdWUpID0+IHtcbiAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnBhdGNoKCcvYXBpL29yZ3MvJyArIG9yZ0lkICsgJy91c2Vycy8nICsgb3JnVXNlci51c2VySWQsIG9yZ1VzZXIpO1xufTtcblxuY29uc3QgcmVtb3ZlT3JnVXNlciA9IGFzeW5jIChvcmdVc2VyOiBPcmdVc2VyLCBvcmdJZDogVXJsUXVlcnlWYWx1ZSkgPT4ge1xuICByZXR1cm4gYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZSgnL2FwaS9vcmdzLycgKyBvcmdJZCArICcvdXNlcnMvJyArIG9yZ1VzZXIudXNlcklkKTtcbn07XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgaWQ6IHN0cmluZyB9PiB7fVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbkVkaXRPcmdQYWdlKHsgbWF0Y2ggfTogUHJvcHMpIHtcbiAgY29uc3QgbmF2SW5kZXggPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFN0b3JlU3RhdGUpID0+IHN0YXRlLm5hdkluZGV4KTtcbiAgY29uc3QgbmF2TW9kZWwgPSBnZXROYXZNb2RlbChuYXZJbmRleCwgJ2dsb2JhbC1vcmdzJyk7XG4gIGNvbnN0IG9yZ0lkID0gcGFyc2VJbnQobWF0Y2gucGFyYW1zLmlkLCAxMCk7XG4gIGNvbnN0IGNhbldyaXRlT3JnID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uT3Jnc1dyaXRlKTtcbiAgY29uc3QgY2FuUmVhZFVzZXJzID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uT3JnVXNlcnNSZWFkKTtcblxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlPE9yZ1VzZXJbXT4oW10pO1xuXG4gIGNvbnN0IFtvcmdTdGF0ZSwgZmV0Y2hPcmddID0gdXNlQXN5bmNGbigoKSA9PiBnZXRPcmcob3JnSWQpLCBbXSk7XG4gIGNvbnN0IFssIGZldGNoT3JnVXNlcnNdID0gdXNlQXN5bmNGbigoKSA9PiBnZXRPcmdVc2VycyhvcmdJZCksIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoT3JnKCk7XG4gICAgZmV0Y2hPcmdVc2VycygpLnRoZW4oKHJlcykgPT4gc2V0VXNlcnMocmVzKSk7XG4gIH0sIFtmZXRjaE9yZywgZmV0Y2hPcmdVc2Vyc10pO1xuXG4gIGNvbnN0IHVwZGF0ZU9yZ05hbWUgPSBhc3luYyAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoJy9hcGkvb3Jncy8nICsgb3JnSWQsIHsgLi4ub3JnU3RhdGUudmFsdWUsIG5hbWUgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTWlzc2luZ1VzZXJMaXN0UmlnaHRzTWVzc2FnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFsZXJ0IHNldmVyaXR5PVwiaW5mb1wiIHRpdGxlPVwiQWNjZXNzIGRlbmllZFwiPlxuICAgICAgICBZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byBzZWUgdXNlcnMgaW4gdGhpcyBvcmdhbml6YXRpb24uIFRvIHVwZGF0ZSB0aGlzIG9yZ2FuaXphdGlvbiwgY29udGFjdCB5b3VyIHNlcnZlclxuICAgICAgICBhZG1pbmlzdHJhdG9yLlxuICAgICAgPC9BbGVydD5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzPlxuICAgICAgICA8PlxuICAgICAgICAgIDxMZWdlbmQ+RWRpdCBvcmdhbml6YXRpb248L0xlZ2VuZD5cbiAgICAgICAgICB7b3JnU3RhdGUudmFsdWUgJiYgKFxuICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlcz17eyBvcmdOYW1lOiBvcmdTdGF0ZS52YWx1ZS5uYW1lIH19XG4gICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAodmFsdWVzOiBPcmdOYW1lRFRPKSA9PiBhd2FpdCB1cGRhdGVPcmdOYW1lKHZhbHVlcy5vcmdOYW1lKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeyh7IHJlZ2lzdGVyLCBlcnJvcnMgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9XCJOYW1lXCIgaW52YWxpZD17ISFlcnJvcnMub3JnTmFtZX0gZXJyb3I9XCJOYW1lIGlzIHJlcXVpcmVkXCIgZGlzYWJsZWQ9eyFjYW5Xcml0ZU9yZ30+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ29yZ05hbWUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSBpZD1cIm9yZy1uYW1lLWlucHV0XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IWNhbldyaXRlT3JnfT5cbiAgICAgICAgICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NgXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMZWdlbmQ+T3JnYW5pemF0aW9uIHVzZXJzPC9MZWdlbmQ+XG4gICAgICAgICAgICB7IWNhblJlYWRVc2VycyAmJiByZW5kZXJNaXNzaW5nVXNlckxpc3RSaWdodHNNZXNzYWdlKCl9XG4gICAgICAgICAgICB7Y2FuUmVhZFVzZXJzICYmICEhdXNlcnMubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgPFVzZXJzVGFibGVcbiAgICAgICAgICAgICAgICB1c2Vycz17dXNlcnN9XG4gICAgICAgICAgICAgICAgb3JnSWQ9e29yZ0lkfVxuICAgICAgICAgICAgICAgIG9uUm9sZUNoYW5nZT17KHJvbGUsIG9yZ1VzZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZU9yZ1VzZXJSb2xlKHsgLi4ub3JnVXNlciwgcm9sZSB9LCBvcmdJZCk7XG4gICAgICAgICAgICAgICAgICBzZXRVc2VycyhcbiAgICAgICAgICAgICAgICAgICAgdXNlcnMubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG9yZ1VzZXIudXNlcklkID09PSB1c2VyLnVzZXJJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ub3JnVXNlciwgcm9sZSB9O1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBmZXRjaE9yZ1VzZXJzKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvblJlbW92ZVVzZXI9eyhvcmdVc2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZW1vdmVPcmdVc2VyKG9yZ1VzZXIsIG9yZ0lkKTtcbiAgICAgICAgICAgICAgICAgIHNldFVzZXJzKHVzZXJzLmZpbHRlcigodXNlcikgPT4gb3JnVXNlci51c2VySWQgIT09IHVzZXIudXNlcklkKSk7XG4gICAgICAgICAgICAgICAgICBmZXRjaE9yZ1VzZXJzKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgT3JnUm9sZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBDb25maXJtTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBVc2VyUm9sZVBpY2tlciB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUm9sZVBpY2tlci9Vc2VyUm9sZVBpY2tlcic7XG5pbXBvcnQgeyBmZXRjaEJ1aWx0aW5Sb2xlcywgZmV0Y2hSb2xlT3B0aW9ucyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUm9sZVBpY2tlci9hcGknO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiwgT3JnVXNlciwgUm9sZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IE9yZ1JvbGVQaWNrZXIgfSBmcm9tICcuLi9hZG1pbi9PcmdSb2xlUGlja2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXJzOiBPcmdVc2VyW107XG4gIG9yZ0lkPzogbnVtYmVyO1xuICBvblJvbGVDaGFuZ2U6IChyb2xlOiBPcmdSb2xlLCB1c2VyOiBPcmdVc2VyKSA9PiB2b2lkO1xuICBvblJlbW92ZVVzZXI6ICh1c2VyOiBPcmdVc2VyKSA9PiB2b2lkO1xufVxuXG5jb25zdCBVc2Vyc1RhYmxlOiBGQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB1c2Vycywgb3JnSWQsIG9uUm9sZUNoYW5nZSwgb25SZW1vdmVVc2VyIH0gPSBwcm9wcztcbiAgY29uc3QgW3VzZXJUb1JlbW92ZSwgc2V0VXNlclRvUmVtb3ZlXSA9IHVzZVN0YXRlPE9yZ1VzZXIgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3JvbGVPcHRpb25zLCBzZXRSb2xlT3B0aW9uc10gPSB1c2VTdGF0ZTxSb2xlW10+KFtdKTtcbiAgY29uc3QgW2J1aWx0aW5Sb2xlcywgc2V0QnVpbHRpblJvbGVzXSA9IHVzZVN0YXRlPHsgW2tleTogc3RyaW5nXTogUm9sZVtdIH0+KHt9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoT3B0aW9ucygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25Sb2xlc0xpc3QpKSB7XG4gICAgICAgICAgbGV0IG9wdGlvbnMgPSBhd2FpdCBmZXRjaFJvbGVPcHRpb25zKG9yZ0lkKTtcbiAgICAgICAgICBzZXRSb2xlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAhY29udGV4dFNydi5hY2Nlc3NDb250cm9sQnVpbHRpblJlZmFjdG9yRW5hYmxlZCgpICYmXG4gICAgICAgICAgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uQnVpbHRpblJvbGVzTGlzdClcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgYnVpbHRJblJvbGVzID0gYXdhaXQgZmV0Y2hCdWlsdGluUm9sZXMob3JnSWQpO1xuICAgICAgICAgIHNldEJ1aWx0aW5Sb2xlcyhidWlsdEluUm9sZXMpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgb3B0aW9ucycpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29udGV4dFNydi5saWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgIGZldGNoT3B0aW9ucygpO1xuICAgIH1cbiAgfSwgW29yZ0lkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZSBmb3JtLWlubGluZVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIC8+XG4gICAgICAgICAgICA8dGg+TG9naW48L3RoPlxuICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cbiAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgIDx0aD5TZWVuPC90aD5cbiAgICAgICAgICAgIDx0aD5Sb2xlPC90aD5cbiAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzM0cHgnIH19IC8+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8dHIga2V5PXtgJHt1c2VyLnVzZXJJZH0tJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2lkdGgtMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGVfX2F2YXRhclwiIHNyYz17dXNlci5hdmF0YXJVcmx9IGFsdD1cIlVzZXIgYXZhdGFyXCIgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtYXgtd2lkdGgtNlwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWxsaXBzaXNcIiB0aXRsZT17dXNlci5sb2dpbn0+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLmxvZ2lufVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWF4LXdpZHRoLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVsbGlwc2lzXCIgdGl0bGU9e3VzZXIuZW1haWx9PlxuICAgICAgICAgICAgICAgICAgICB7dXNlci5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtYXgtd2lkdGgtNVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWxsaXBzaXNcIiB0aXRsZT17dXNlci5uYW1lfT5cbiAgICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aWR0aC0xXCI+e3VzZXIubGFzdFNlZW5BdEFnZX08L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndpZHRoLThcIj5cbiAgICAgICAgICAgICAgICAgIHtjb250ZXh0U3J2LmxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQoKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJSb2xlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcklkPXt1c2VyLnVzZXJJZH1cbiAgICAgICAgICAgICAgICAgICAgICBvcmdJZD17b3JnSWR9XG4gICAgICAgICAgICAgICAgICAgICAgYnVpbHRJblJvbGU9e3VzZXIucm9sZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkJ1aWx0aW5Sb2xlQ2hhbmdlPXsobmV3Um9sZSkgPT4gb25Sb2xlQ2hhbmdlKG5ld1JvbGUsIHVzZXIpfVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGVPcHRpb25zPXtyb2xlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICBidWlsdEluUm9sZXM9e2J1aWx0aW5Sb2xlc31cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdVc2Vyc1JvbGVVcGRhdGUsIHVzZXIpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPE9yZ1JvbGVQaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUm9sZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXIucm9sZX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdVc2Vyc1JvbGVVcGRhdGUsIHVzZXIpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV3Um9sZSkgPT4gb25Sb2xlQ2hhbmdlKG5ld1JvbGUsIHVzZXIpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAge2NvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdVc2Vyc1JlbW92ZSwgdXNlcikgJiYgKFxuICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJUb1JlbW92ZSh1c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJ0aW1lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZSB1c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAge0Jvb2xlYW4odXNlclRvUmVtb3ZlKSAmJiAoXG4gICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICBib2R5PXtgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB1c2VyICR7dXNlclRvUmVtb3ZlPy5sb2dpbn0/YH1cbiAgICAgICAgICBjb25maXJtVGV4dD1cIkRlbGV0ZVwiXG4gICAgICAgICAgdGl0bGU9XCJEZWxldGVcIlxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0VXNlclRvUmVtb3ZlKG51bGwpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgaXNPcGVuPXt0cnVlfVxuICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF1c2VyVG9SZW1vdmUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25SZW1vdmVVc2VyKHVzZXJUb1JlbW92ZSk7XG4gICAgICAgICAgICBzZXRVc2VyVG9SZW1vdmUobnVsbCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1RhYmxlO1xuIl0sIm5hbWVzIjpbImNzcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsInVzZUFzeW5jRm4iLCJnZXRCYWNrZW5kU3J2IiwiRm9ybSIsIkZpZWxkIiwiSW5wdXQiLCJCdXR0b24iLCJMZWdlbmQiLCJBbGVydCIsIlBhZ2UiLCJjb250ZXh0U3J2IiwiZ2V0TmF2TW9kZWwiLCJhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJVc2Vyc1RhYmxlIiwiZ2V0T3JnIiwib3JnSWQiLCJnZXQiLCJnZXRPcmdVc2VycyIsImhhc1Blcm1pc3Npb24iLCJPcmdVc2Vyc1JlYWQiLCJ1cGRhdGVPcmdVc2VyUm9sZSIsIm9yZ1VzZXIiLCJwYXRjaCIsInVzZXJJZCIsInJlbW92ZU9yZ1VzZXIiLCJkZWxldGUiLCJBZG1pbkVkaXRPcmdQYWdlIiwibWF0Y2giLCJuYXZJbmRleCIsInN0YXRlIiwibmF2TW9kZWwiLCJwYXJzZUludCIsInBhcmFtcyIsImlkIiwiY2FuV3JpdGVPcmciLCJPcmdzV3JpdGUiLCJjYW5SZWFkVXNlcnMiLCJ1c2VycyIsInNldFVzZXJzIiwib3JnU3RhdGUiLCJmZXRjaE9yZyIsImZldGNoT3JnVXNlcnMiLCJ0aGVuIiwicmVzIiwidXBkYXRlT3JnTmFtZSIsIm5hbWUiLCJwdXQiLCJ2YWx1ZSIsInJlbmRlck1pc3NpbmdVc2VyTGlzdFJpZ2h0c01lc3NhZ2UiLCJvcmdOYW1lIiwidmFsdWVzIiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJyZXF1aXJlZCIsImxlbmd0aCIsInJvbGUiLCJtYXAiLCJ1c2VyIiwiZmlsdGVyIiwiQ29uZmlybU1vZGFsIiwiVXNlclJvbGVQaWNrZXIiLCJmZXRjaEJ1aWx0aW5Sb2xlcyIsImZldGNoUm9sZU9wdGlvbnMiLCJPcmdSb2xlUGlja2VyIiwicHJvcHMiLCJvblJvbGVDaGFuZ2UiLCJvblJlbW92ZVVzZXIiLCJ1c2VyVG9SZW1vdmUiLCJzZXRVc2VyVG9SZW1vdmUiLCJyb2xlT3B0aW9ucyIsInNldFJvbGVPcHRpb25zIiwiYnVpbHRpblJvbGVzIiwic2V0QnVpbHRpblJvbGVzIiwiZmV0Y2hPcHRpb25zIiwiQWN0aW9uUm9sZXNMaXN0Iiwib3B0aW9ucyIsImFjY2Vzc0NvbnRyb2xCdWlsdGluUmVmYWN0b3JFbmFibGVkIiwiQWN0aW9uQnVpbHRpblJvbGVzTGlzdCIsImJ1aWx0SW5Sb2xlcyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkIiwid2lkdGgiLCJpbmRleCIsImF2YXRhclVybCIsImxvZ2luIiwiZW1haWwiLCJsYXN0U2VlbkF0QWdlIiwibmV3Um9sZSIsImhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhIiwiT3JnVXNlcnNSb2xlVXBkYXRlIiwiT3JnVXNlcnNSZW1vdmUiLCJCb29sZWFuIl0sInNvdXJjZVJvb3QiOiIifQ==