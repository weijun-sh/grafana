"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[8039],{

/***/ "./public/app/features/users/UsersListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UsersListPage": () => (/* binding */ UsersListPage),
  "default": () => (/* binding */ users_UsersListPage)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/Page/Page.tsx + 1 modules
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
// EXTERNAL MODULE: ./public/app/core/selectors/navModel.ts
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
// EXTERNAL MODULE: ./public/app/features/invites/state/actions.ts
var actions = __webpack_require__("./public/app/features/invites/state/actions.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/invites/InviteeRow.tsx






const mapDispatchToProps = {
  revokeInvite: actions/* revokeInvite */.GY
};
const connector = (0,es.connect)(null, mapDispatchToProps);

class InviteeRow extends react.PureComponent {
  render() {
    const {
      invitee,
      revokeInvite
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        children: invitee.email
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        children: invitee.name
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        className: "text-right",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ClipboardButton, {
          variant: "secondary",
          size: "sm",
          getText: () => invitee.url,
          children: "Copy Invite"
        }), "\xA0"]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "destructive",
          size: "sm",
          icon: "times",
          onClick: () => revokeInvite(invitee.code)
        })
      })]
    });
  }

}

/* harmony default export */ const invites_InviteeRow = (connector(InviteeRow));
;// CONCATENATED MODULE: ./public/app/features/invites/InviteesTable.tsx
var _th, _th2, _th3;





class InviteesTable extends react.PureComponent {
  render() {
    const {
      invitees
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
      className: "filter-table form-inline",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: "Email"
          })), _th2 || (_th2 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: "Name"
          })), _th3 || (_th3 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {})), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            style: {
              width: '34px'
            }
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
        children: invitees.map((invitee, index) => {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(invites_InviteeRow, {
            invitee: invitee
          }, `${invitee.id}-${index}`);
        })
      })]
    });
  }

}
// EXTERNAL MODULE: ./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js + 1 modules
var reselect_es = __webpack_require__("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js");
// EXTERNAL MODULE: ./public/app/features/invites/state/reducers.ts
var reducers = __webpack_require__("./public/app/features/invites/state/reducers.ts");
;// CONCATENATED MODULE: ./public/app/features/invites/state/selectors.ts


const {
  selectAll,
  selectById,
  selectTotal
} = reducers/* selectors */.wl;

const selectQuery = (_, query) => query;

const selectInvitesMatchingQuery = (0,reselect_es/* createSelector */.P1)([selectAll, selectQuery], (invites, searchQuery) => {
  const regex = new RegExp(searchQuery, 'i');
  const matches = invites.filter(invite => regex.test(invite.name) || regex.test(invite.email));
  return matches;
});
// EXTERNAL MODULE: ./public/app/core/core.ts
var core = __webpack_require__("./public/app/core/core.ts");
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var types = __webpack_require__("./public/app/types/index.ts");
// EXTERNAL MODULE: ./public/app/features/users/state/reducers.ts
var state_reducers = __webpack_require__("./public/app/features/users/state/reducers.ts");
;// CONCATENATED MODULE: ./public/app/features/users/state/selectors.ts
const getUsers = state => {
  const regex = new RegExp(state.searchQuery, 'i');
  return state.users.filter(user => {
    return regex.test(user.login) || regex.test(user.email) || regex.test(user.name);
  });
};
const getUsersSearchQuery = state => state.searchQuery;
const getUsersSearchPage = state => state.searchPage;
;// CONCATENATED MODULE: ./public/app/features/users/UsersActionBar.tsx
var _LinkButton;











class UsersActionBar extends react.PureComponent {
  render() {
    const {
      canInvite,
      externalUserMngLinkName,
      externalUserMngLinkUrl,
      searchQuery,
      pendingInvitesCount,
      setUsersSearchQuery,
      onShowInvites,
      showInvites
    } = this.props;
    const options = [{
      label: 'Users',
      value: 'users'
    }, {
      label: `Pending Invites (${pendingInvitesCount})`,
      value: 'invites'
    }];
    const canAddToOrg = core/* contextSrv.hasAccess */.Vt.hasAccess(types/* AccessControlAction.UsersCreate */.bW.UsersCreate, canInvite);
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "page-action-bar",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form gf-form--grow",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
          value: searchQuery,
          onChange: setUsersSearchQuery,
          placeholder: "Search user by login, email or name"
        })
      }), pendingInvitesCount > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        style: {
          marginLeft: '1rem'
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
          value: showInvites ? 'invites' : 'users',
          options: options,
          onChange: onShowInvites
        })
      }), canAddToOrg && (_LinkButton || (_LinkButton = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        href: "org/users/invite",
        children: "Invite"
      }))), externalUserMngLinkUrl && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        href: externalUserMngLinkUrl,
        target: "_blank",
        rel: "noopener",
        children: externalUserMngLinkName
      })]
    });
  }

}

function mapStateToProps(state) {
  return {
    searchQuery: getUsersSearchQuery(state.users),
    pendingInvitesCount: selectTotal(state.invites),
    externalUserMngLinkName: state.users.externalUserMngLinkName,
    externalUserMngLinkUrl: state.users.externalUserMngLinkUrl,
    canInvite: state.users.canInvite
  };
}

const UsersActionBar_mapDispatchToProps = {
  setUsersSearchQuery: state_reducers/* setUsersSearchQuery */.oX
};
/* harmony default export */ const users_UsersActionBar = ((0,es.connect)(mapStateToProps, UsersActionBar_mapDispatchToProps)(UsersActionBar));
// EXTERNAL MODULE: ./public/app/features/users/UsersTable.tsx
var UsersTable = __webpack_require__("./public/app/features/users/UsersTable.tsx");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/utils/accessControl.ts
var accessControl = __webpack_require__("./public/app/core/utils/accessControl.ts");
;// CONCATENATED MODULE: ./public/app/features/users/state/actions.ts



function loadUsers() {
  return async dispatch => {
    const users = await (0,grafana_runtime_src.getBackendSrv)().get('/api/org/users', (0,accessControl/* accessControlQueryParam */.y)());
    dispatch((0,state_reducers/* usersLoaded */.eT)(users));
  };
}
function updateUser(user) {
  return async dispatch => {
    await (0,grafana_runtime_src.getBackendSrv)().patch(`/api/org/users/${user.userId}`, {
      role: user.role
    });
    dispatch(loadUsers());
  };
}
function removeUser(userId) {
  return async dispatch => {
    await (0,grafana_runtime_src.getBackendSrv)().delete(`/api/org/users/${userId}`);
    dispatch(loadUsers());
  };
}
;// CONCATENATED MODULE: ./public/app/features/users/UsersListPage.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function UsersListPage_mapStateToProps(state) {
  const searchQuery = getUsersSearchQuery(state.users);
  return {
    navModel: (0,navModel/* getNavModel */.h)(state.navIndex, 'users'),
    users: getUsers(state.users),
    searchQuery: getUsersSearchQuery(state.users),
    searchPage: getUsersSearchPage(state.users),
    invitees: selectInvitesMatchingQuery(state.invites, searchQuery),
    externalUserMngInfo: state.users.externalUserMngInfo,
    hasFetched: state.users.hasFetched
  };
}

const UsersListPage_mapDispatchToProps = {
  loadUsers: loadUsers,
  fetchInvitees: actions/* fetchInvitees */.nW,
  setUsersSearchQuery: state_reducers/* setUsersSearchQuery */.oX,
  setUsersSearchPage: state_reducers/* setUsersSearchPage */.TQ,
  updateUser: updateUser,
  removeUser: removeUser
};
const UsersListPage_connector = (0,es.connect)(UsersListPage_mapStateToProps, UsersListPage_mapDispatchToProps);
const pageLimit = 30;
class UsersListPage extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onRoleChange", (role, user) => {
      const updatedUser = Object.assign({}, user, {
        role: role
      });
      this.props.updateUser(updatedUser);
    });

    _defineProperty(this, "onShowInvites", () => {
      this.setState(prevState => ({
        showInvites: !prevState.showInvites
      }));
    });

    _defineProperty(this, "getPaginatedUsers", users => {
      const offset = (this.props.searchPage - 1) * pageLimit;
      return users.slice(offset, offset + pageLimit);
    });

    if (this.props.externalUserMngInfo) {
      this.externalUserMngInfoHtml = (0,src.renderMarkdown)(this.props.externalUserMngInfo);
    }

    this.state = {
      showInvites: false
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchInvitees();
  }

  async fetchUsers() {
    return await this.props.loadUsers();
  }

  async fetchInvitees() {
    return await this.props.fetchInvitees();
  }

  renderTable() {
    const {
      invitees,
      users,
      setUsersSearchPage
    } = this.props;
    const paginatedUsers = this.getPaginatedUsers(users);
    const totalPages = Math.ceil(users.length / pageLimit);

    if (this.state.showInvites) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(InviteesTable, {
        invitees: invitees
      });
    } else {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
        spacing: "md",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UsersTable/* default */.Z, {
          users: paginatedUsers,
          onRoleChange: (role, user) => this.onRoleChange(role, user),
          onRemoveUser: user => this.props.removeUser(user.userId)
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.HorizontalGroup, {
          justify: "flex-end",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Pagination, {
            onNavigate: setUsersSearchPage,
            currentPage: this.props.searchPage,
            numberOfPages: totalPages,
            hideWhenSinglePage: true
          })
        })]
      });
    }
  }

  render() {
    const {
      navModel,
      hasFetched
    } = this.props;
    const externalUserMngInfoHtml = this.externalUserMngInfoHtml;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
      navModel: navModel,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default.Contents */.Z.Contents, {
        isLoading: !hasFetched,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(users_UsersActionBar, {
            onShowInvites: this.onShowInvites,
            showInvites: this.state.showInvites
          }), externalUserMngInfoHtml && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "grafana-info-box",
            dangerouslySetInnerHTML: {
              __html: externalUserMngInfoHtml
            }
          }), hasFetched && this.renderTable()]
        })
      })
    });
  }

}
/* harmony default export */ const users_UsersListPage = (UsersListPage_connector(UsersListPage));

/***/ }),

/***/ "./public/app/features/users/UsersTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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
        if (app_core_core__WEBPACK_IMPORTED_MODULE_4__/* .contextSrv.hasPermission */ .Vt.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__/* .AccessControlAction.ActionRolesList */ .bW.ActionRolesList)) {
          let options = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_3__/* .fetchRoleOptions */ .ul)(orgId);
          setRoleOptions(options);
        }

        if (!app_core_core__WEBPACK_IMPORTED_MODULE_4__/* .contextSrv.accessControlBuiltinRefactorEnabled */ .Vt.accessControlBuiltinRefactorEnabled() && app_core_core__WEBPACK_IMPORTED_MODULE_4__/* .contextSrv.hasPermission */ .Vt.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__/* .AccessControlAction.ActionBuiltinRolesList */ .bW.ActionBuiltinRolesList)) {
          const builtInRoles = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_3__/* .fetchBuiltinRoles */ .fh)(orgId);
          setBuiltinRoles(builtInRoles);
        }
      } catch (e) {
        console.error('Error loading options');
      }
    }

    if (app_core_core__WEBPACK_IMPORTED_MODULE_4__/* .contextSrv.licensedAccessControlEnabled */ .Vt.licensedAccessControlEnabled()) {
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
              children: app_core_core__WEBPACK_IMPORTED_MODULE_4__/* .contextSrv.licensedAccessControlEnabled */ .Vt.licensedAccessControlEnabled() ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_2__/* .UserRolePicker */ .R, {
                userId: user.userId,
                orgId: orgId,
                builtInRole: user.role,
                onBuiltinRoleChange: newRole => onRoleChange(newRole, user),
                roleOptions: roleOptions,
                builtInRoles: builtinRoles,
                disabled: !app_core_core__WEBPACK_IMPORTED_MODULE_4__/* .contextSrv.hasPermissionInMetadata */ .Vt.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__/* .AccessControlAction.OrgUsersRoleUpdate */ .bW.OrgUsersRoleUpdate, user)
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_6__/* .OrgRolePicker */ .A, {
                "aria-label": "Role",
                value: user.role,
                disabled: !app_core_core__WEBPACK_IMPORTED_MODULE_4__/* .contextSrv.hasPermissionInMetadata */ .Vt.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__/* .AccessControlAction.OrgUsersRoleUpdate */ .bW.OrgUsersRoleUpdate, user),
                onChange: newRole => onRoleChange(newRole, user)
              })
            }), app_core_core__WEBPACK_IMPORTED_MODULE_4__/* .contextSrv.hasPermissionInMetadata */ .Vt.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__/* .AccessControlAction.OrgUsersRemove */ .bW.OrgUsersRemove, user) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
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