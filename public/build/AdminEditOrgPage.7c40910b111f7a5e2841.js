"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[2721],{

 "./public/app/features/admin/AdminEditOrgPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": () => ( AdminEditOrgPage)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var app_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/core.ts");
 var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
 var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
 var app_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/index.ts");
 var _users_UsersTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/users/UsersTable.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _Legend, _Legend2;

















const getOrg = async orgId => {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().get('/api/orgs/' + orgId);
};

const getOrgUsers = async orgId => {
  if (app_core_core__WEBPACK_IMPORTED_MODULE_6__ .Vt.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_8__ .bW.OrgUsersRead)) {
    return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().get(`/api/orgs/${orgId}/users`, (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_7__ .y)());
  }

  return [];
};

const updateOrgUserRole = async (orgUser, orgId) => {
  await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().patch('/api/orgs/' + orgId + '/users/' + orgUser.userId, orgUser);
};

const removeOrgUser = async (orgUser, orgId) => {
  return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().delete('/api/orgs/' + orgId + '/users/' + orgUser.userId);
};

function AdminEditOrgPage(_ref) {
  let {
    match
  } = _ref;
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.navIndex);
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_11__ .h)(navIndex, 'global-orgs');
  const orgId = parseInt(match.params.id, 10);
  const canWriteOrg = app_core_core__WEBPACK_IMPORTED_MODULE_6__ .Vt.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_8__ .bW.OrgsWrite);
  const canReadUsers = app_core_core__WEBPACK_IMPORTED_MODULE_6__ .Vt.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_8__ .bW.OrgUsersRead);
  const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [orgState, fetchOrg] = (0,react_use__WEBPACK_IMPORTED_MODULE_12__ .Z)(() => getOrg(orgId), []);
  const [, fetchOrgUsers] = (0,react_use__WEBPACK_IMPORTED_MODULE_12__ .Z)(() => getOrgUsers(orgId), []);
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
    return _Alert || (_Alert = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      severity: "info",
      title: "Access denied",
      children: "You do not have permission to see users in this organization. To update this organization, contact your server administrator."
    }));
  };

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ .Z, {
    navModel: navModel,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ .Z.Contents, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: [_Legend || (_Legend = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Legend, {
          children: "Edit organization"
        })), orgState.value && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Form, {
          defaultValues: {
            orgName: orgState.value.name
          },
          onSubmit: async values => await updateOrgName(values.orgName),
          children: _ref2 => {
            let {
              register,
              errors
            } = _ref2;
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
                label: "Name",
                invalid: !!errors.orgName,
                error: "Name is required",
                disabled: !canWriteOrg,
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({}, register('orgName', {
                  required: true
                }), {
                  id: "org-name-input"
                }))
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
                type: "submit",
                disabled: !canWriteOrg,
                children: "Update"
              })]
            });
          }
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
              margin-top: 20px;
            `,
          children: [_Legend2 || (_Legend2 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Legend, {
            children: "Organization users"
          })), !canReadUsers && renderMissingUserListRightsMessage(), canReadUsers && !!users.length && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_users_UsersTable__WEBPACK_IMPORTED_MODULE_9__ .Z, {
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

 }),

 "./public/app/features/users/UsersTable.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/RolePicker/UserRolePicker.tsx");
 var app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
 var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
 var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
 var _admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/admin/OrgRolePicker.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
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
        if (app_core_core__WEBPACK_IMPORTED_MODULE_4__ .Vt.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__ .bW.ActionRolesList)) {
          let options = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_3__ .ul)(orgId);
          setRoleOptions(options);
        }

        if (!app_core_core__WEBPACK_IMPORTED_MODULE_4__ .Vt.accessControlBuiltinRefactorEnabled() && app_core_core__WEBPACK_IMPORTED_MODULE_4__ .Vt.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__ .bW.ActionBuiltinRolesList)) {
          const builtInRoles = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_3__ .fh)(orgId);
          setBuiltinRoles(builtInRoles);
        }
      } catch (e) {
        console.error('Error loading options');
      }
    }

    if (app_core_core__WEBPACK_IMPORTED_MODULE_4__ .Vt.licensedAccessControlEnabled()) {
      fetchOptions();
    }
  }, [orgId]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
      className: "filter-table form-inline",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("thead", {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
          children: [_th || (_th = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {})), _th2 || (_th2 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Login"
          })), _th3 || (_th3 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Email"
          })), _th4 || (_th4 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Name"
          })), _th5 || (_th5 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Seen"
          })), _th6 || (_th6 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            children: "Role"
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("th", {
            style: {
              width: '34px'
            }
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("tbody", {
        children: users.map((user, index) => {
          return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "width-2 text-center",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
                className: "filter-table__avatar",
                src: user.avatarUrl,
                alt: "User avatar"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "max-width-6",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "ellipsis",
                title: user.login,
                children: user.login
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "max-width-5",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "ellipsis",
                title: user.email,
                children: user.email
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "max-width-5",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                className: "ellipsis",
                title: user.name,
                children: user.name
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "width-1",
              children: user.lastSeenAtAge
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              className: "width-8",
              children: app_core_core__WEBPACK_IMPORTED_MODULE_4__ .Vt.licensedAccessControlEnabled() ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_2__ .R, {
                userId: user.userId,
                orgId: orgId,
                builtInRole: user.role,
                onBuiltinRoleChange: newRole => onRoleChange(newRole, user),
                roleOptions: roleOptions,
                builtInRoles: builtinRoles,
                disabled: !app_core_core__WEBPACK_IMPORTED_MODULE_4__ .Vt.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__ .bW.OrgUsersRoleUpdate, user)
              }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_6__ .A, {
                "aria-label": "Role",
                value: user.role,
                disabled: !app_core_core__WEBPACK_IMPORTED_MODULE_4__ .Vt.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__ .bW.OrgUsersRoleUpdate, user),
                onChange: newRole => onRoleChange(newRole, user)
              })
            }), app_core_core__WEBPACK_IMPORTED_MODULE_4__ .Vt.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__ .bW.OrgUsersRemove, user) && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
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
    }), Boolean(userToRemove) && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ConfirmModal, {
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

 const __WEBPACK_DEFAULT_EXPORT__ = (UsersTable);

 })

}]);