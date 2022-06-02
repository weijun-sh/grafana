"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[8039],{

 "./public/app/features/users/UsersListPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "UsersListPage": () => ( UsersListPage),
  "default": () => ( users_UsersListPage)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var actions = __webpack_require__("./public/app/features/invites/state/actions.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;






const mapDispatchToProps = {
  revokeInvite: actions.GY
};
const connector = (0,es.connect)(null, mapDispatchToProps);

class InviteeRow extends react.PureComponent {
  render() {
    const {
      invitee,
      revokeInvite
    } = this.props;
    return (0,jsx_runtime.jsxs)("tr", {
      children: [(0,jsx_runtime.jsx)("td", {
        children: invitee.email
      }), (0,jsx_runtime.jsx)("td", {
        children: invitee.name
      }), (0,jsx_runtime.jsxs)("td", {
        className: "text-right",
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.ClipboardButton, {
          variant: "secondary",
          size: "sm",
          getText: () => invitee.url,
          children: "Copy Invite"
        }), "\xA0"]
      }), (0,jsx_runtime.jsx)("td", {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "destructive",
          size: "sm",
          icon: "times",
          onClick: () => revokeInvite(invitee.code)
        })
      })]
    });
  }

}

 const invites_InviteeRow = (connector(InviteeRow));
;
var _th, _th2, _th3;





class InviteesTable extends react.PureComponent {
  render() {
    const {
      invitees
    } = this.props;
    return (0,jsx_runtime.jsxs)("table", {
      className: "filter-table form-inline",
      children: [(0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [_th || (_th = (0,jsx_runtime.jsx)("th", {
            children: "Email"
          })), _th2 || (_th2 = (0,jsx_runtime.jsx)("th", {
            children: "Name"
          })), _th3 || (_th3 = (0,jsx_runtime.jsx)("th", {})), (0,jsx_runtime.jsx)("th", {
            style: {
              width: '34px'
            }
          })]
        })
      }), (0,jsx_runtime.jsx)("tbody", {
        children: invitees.map((invitee, index) => {
          return (0,jsx_runtime.jsx)(invites_InviteeRow, {
            invitee: invitee
          }, `${invitee.id}-${index}`);
        })
      })]
    });
  }

}
var reselect_es = __webpack_require__("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js");
var reducers = __webpack_require__("./public/app/features/invites/state/reducers.ts");
;


const {
  selectAll,
  selectById,
  selectTotal
} = reducers.wl;

const selectQuery = (_, query) => query;

const selectInvitesMatchingQuery = (0,reselect_es.P1)([selectAll, selectQuery], (invites, searchQuery) => {
  const regex = new RegExp(searchQuery, 'i');
  const matches = invites.filter(invite => regex.test(invite.name) || regex.test(invite.email));
  return matches;
});
var core = __webpack_require__("./public/app/core/core.ts");
var types = __webpack_require__("./public/app/types/index.ts");
var state_reducers = __webpack_require__("./public/app/features/users/state/reducers.ts");
;
const getUsers = state => {
  const regex = new RegExp(state.searchQuery, 'i');
  return state.users.filter(user => {
    return regex.test(user.login) || regex.test(user.email) || regex.test(user.name);
  });
};
const getUsersSearchQuery = state => state.searchQuery;
const getUsersSearchPage = state => state.searchPage;
;
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
    const canAddToOrg = core.Vt.hasAccess(types.bW.UsersCreate, canInvite);
    return (0,jsx_runtime.jsxs)("div", {
      className: "page-action-bar",
      children: [(0,jsx_runtime.jsx)("div", {
        className: "gf-form gf-form--grow",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
          value: searchQuery,
          onChange: setUsersSearchQuery,
          placeholder: "Search user by login, email or name"
        })
      }), pendingInvitesCount > 0 && (0,jsx_runtime.jsx)("div", {
        style: {
          marginLeft: '1rem'
        },
        children: (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
          value: showInvites ? 'invites' : 'users',
          options: options,
          onChange: onShowInvites
        })
      }), canAddToOrg && (_LinkButton || (_LinkButton = (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        href: "org/users/invite",
        children: "Invite"
      }))), externalUserMngLinkUrl && (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
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
  setUsersSearchQuery: state_reducers.oX
};
 const users_UsersActionBar = ((0,es.connect)(mapStateToProps, UsersActionBar_mapDispatchToProps)(UsersActionBar));
var UsersTable = __webpack_require__("./public/app/features/users/UsersTable.tsx");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var accessControl = __webpack_require__("./public/app/core/utils/accessControl.ts");
;



function loadUsers() {
  return async dispatch => {
    const users = await (0,grafana_runtime_src.getBackendSrv)().get('/api/org/users', (0,accessControl.y)());
    dispatch((0,state_reducers.eT)(users));
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
;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function UsersListPage_mapStateToProps(state) {
  const searchQuery = getUsersSearchQuery(state.users);
  return {
    navModel: (0,navModel.h)(state.navIndex, 'users'),
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
  fetchInvitees: actions.nW,
  setUsersSearchQuery: state_reducers.oX,
  setUsersSearchPage: state_reducers.TQ,
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
      return (0,jsx_runtime.jsx)(InviteesTable, {
        invitees: invitees
      });
    } else {
      return (0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
        spacing: "md",
        children: [(0,jsx_runtime.jsx)(UsersTable.Z, {
          users: paginatedUsers,
          onRoleChange: (role, user) => this.onRoleChange(role, user),
          onRemoveUser: user => this.props.removeUser(user.userId)
        }), (0,jsx_runtime.jsx)(grafana_ui_src.HorizontalGroup, {
          justify: "flex-end",
          children: (0,jsx_runtime.jsx)(grafana_ui_src.Pagination, {
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
    return (0,jsx_runtime.jsx)(Page.Z, {
      navModel: navModel,
      children: (0,jsx_runtime.jsx)(Page.Z.Contents, {
        isLoading: !hasFetched,
        children: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [(0,jsx_runtime.jsx)(users_UsersActionBar, {
            onShowInvites: this.onShowInvites,
            showInvites: this.state.showInvites
          }), externalUserMngInfoHtml && (0,jsx_runtime.jsx)("div", {
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
 const users_UsersListPage = (UsersListPage_connector(UsersListPage));

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