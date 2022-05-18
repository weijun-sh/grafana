"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UsersListPage"],{

/***/ "./public/app/features/invites/InviteeRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/invites/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const mapDispatchToProps = {
  revokeInvite: _state_actions__WEBPACK_IMPORTED_MODULE_3__.revokeInvite
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps);

class InviteeRow extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      invitee,
      revokeInvite
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
        children: invitee.email
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
        children: invitee.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("td", {
        className: "text-right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ClipboardButton, {
          variant: "secondary",
          size: "sm",
          getText: () => invitee.url,
          children: "Copy Invite"
        }), "\xA0"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "destructive",
          size: "sm",
          icon: "times",
          onClick: () => revokeInvite(invitee.code)
        })
      })]
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(InviteeRow));

/***/ }),

/***/ "./public/app/features/invites/InviteesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InviteesTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _InviteeRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/invites/InviteeRow.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3;





class InviteesTable extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      invitees
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table", {
      className: "filter-table form-inline",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "Email"
          })), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            children: "Name"
          })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
            style: {
              width: '34px'
            }
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
        children: invitees.map((invitee, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_InviteeRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
            invitee: invitee
          }, `${invitee.id}-${index}`);
        })
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/features/invites/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectById": () => (/* binding */ selectById),
/* harmony export */   "selectInvitesMatchingQuery": () => (/* binding */ selectInvitesMatchingQuery),
/* harmony export */   "selectTotal": () => (/* binding */ selectTotal)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/invites/state/reducers.ts");


const {
  selectAll,
  selectById,
  selectTotal
} = _reducers__WEBPACK_IMPORTED_MODULE_0__.selectors;

const selectQuery = (_, query) => query;

const selectInvitesMatchingQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSelector)([selectAll, selectQuery], (invites, searchQuery) => {
  const regex = new RegExp(searchQuery, 'i');
  const matches = invites.filter(invite => regex.test(invite.name) || regex.test(invite.email));
  return matches;
});

/***/ }),

/***/ "./public/app/features/users/UsersActionBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersActionBar": () => (/* binding */ UsersActionBar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _invites_state_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/invites/state/selectors.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/users/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/users/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LinkButton;











class UsersActionBar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
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
    const canAddToOrg = app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.UsersCreate, canInvite);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "page-action-bar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "gf-form gf-form--grow",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FilterInput, {
          value: searchQuery,
          onChange: setUsersSearchQuery,
          placeholder: "Search user by login, email or name"
        })
      }), pendingInvitesCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        style: {
          marginLeft: '1rem'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
          value: showInvites ? 'invites' : 'users',
          options: options,
          onChange: onShowInvites
        })
      }), canAddToOrg && (_LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
        href: "org/users/invite",
        children: "Invite"
      }))), externalUserMngLinkUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
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
    searchQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_7__.getUsersSearchQuery)(state.users),
    pendingInvitesCount: (0,_invites_state_selectors__WEBPACK_IMPORTED_MODULE_5__.selectTotal)(state.invites),
    externalUserMngLinkName: state.users.externalUserMngLinkName,
    externalUserMngLinkUrl: state.users.externalUserMngLinkUrl,
    canInvite: state.users.canInvite
  };
}

const mapDispatchToProps = {
  setUsersSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_6__.setUsersSearchQuery
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(UsersActionBar));

/***/ }),

/***/ "./public/app/features/users/UsersListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersListPage": () => (/* binding */ UsersListPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _invites_InviteesTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/invites/InviteesTable.tsx");
/* harmony import */ var _invites_state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/invites/state/actions.ts");
/* harmony import */ var _invites_state_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/invites/state/selectors.ts");
/* harmony import */ var _UsersActionBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/users/UsersActionBar.tsx");
/* harmony import */ var _UsersTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/users/UsersTable.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/users/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/users/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/users/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function mapStateToProps(state) {
  const searchQuery = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getUsersSearchQuery)(state.users);
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'users'),
    users: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getUsers)(state.users),
    searchQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getUsersSearchQuery)(state.users),
    searchPage: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getUsersSearchPage)(state.users),
    invitees: (0,_invites_state_selectors__WEBPACK_IMPORTED_MODULE_8__.selectInvitesMatchingQuery)(state.invites, searchQuery),
    externalUserMngInfo: state.users.externalUserMngInfo,
    hasFetched: state.users.hasFetched
  };
}

const mapDispatchToProps = {
  loadUsers: _state_actions__WEBPACK_IMPORTED_MODULE_11__.loadUsers,
  fetchInvitees: _invites_state_actions__WEBPACK_IMPORTED_MODULE_7__.fetchInvitees,
  setUsersSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_12__.setUsersSearchQuery,
  setUsersSearchPage: _state_reducers__WEBPACK_IMPORTED_MODULE_12__.setUsersSearchPage,
  updateUser: _state_actions__WEBPACK_IMPORTED_MODULE_11__.updateUser,
  removeUser: _state_actions__WEBPACK_IMPORTED_MODULE_11__.removeUser
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const pageLimit = 30;
class UsersListPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
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
      this.externalUserMngInfoHtml = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.renderMarkdown)(this.props.externalUserMngInfo);
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
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_invites_InviteesTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
        invitees: invitees
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.VerticalGroup, {
        spacing: "md",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_UsersTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
          users: paginatedUsers,
          onRoleChange: (role, user) => this.onRoleChange(role, user),
          onRemoveUser: user => this.props.removeUser(user.userId)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
          justify: "flex-end",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Pagination, {
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
        isLoading: !hasFetched,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_UsersActionBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
            onShowInvites: this.onShowInvites,
            showInvites: this.state.showInvites
          }), externalUserMngInfoHtml && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(UsersListPage));

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

/***/ }),

/***/ "./public/app/features/users/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadUsers": () => (/* binding */ loadUsers),
/* harmony export */   "removeUser": () => (/* binding */ removeUser),
/* harmony export */   "updateUser": () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/users/state/reducers.ts");



function loadUsers() {
  return async dispatch => {
    const users = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/org/users', (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_1__.accessControlQueryParam)());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.usersLoaded)(users));
  };
}
function updateUser(user) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().patch(`/api/org/users/${user.userId}`, {
      role: user.role
    });
    dispatch(loadUsers());
  };
}
function removeUser(userId) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/org/users/${userId}`);
    dispatch(loadUsers());
  };
}

/***/ }),

/***/ "./public/app/features/users/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUsers": () => (/* binding */ getUsers),
/* harmony export */   "getUsersSearchPage": () => (/* binding */ getUsersSearchPage),
/* harmony export */   "getUsersSearchQuery": () => (/* binding */ getUsersSearchQuery)
/* harmony export */ });
const getUsers = state => {
  const regex = new RegExp(state.searchQuery, 'i');
  return state.users.filter(user => {
    return regex.test(user.login) || regex.test(user.email) || regex.test(user.name);
  });
};
const getUsersSearchQuery = state => state.searchQuery;
const getUsersSearchPage = state => state.searchPage;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRQSxNQUFNZ0MsbUJBQW1CLEdBQUlnQixLQUFELElBQXVCQSxLQUFLLENBQUM3QixXQUF6RDtBQUNBLE1BQU00QyxrQkFBa0IsR0FBSWYsS0FBRCxJQUF1QkEsS0FBSyxDQUFDa0IsVUFBeEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9pbnZpdGVzL0ludml0ZWVSb3cudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2ludml0ZXMvSW52aXRlZXNUYWJsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvaW52aXRlcy9zdGF0ZS9zZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdXNlcnMvVXNlcnNBY3Rpb25CYXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3VzZXJzL1VzZXJzTGlzdFBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3VzZXJzL1VzZXJzVGFibGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3VzZXJzL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdXNlcnMvc3RhdGUvc2VsZWN0b3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgQ2xpcGJvYXJkQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgSW52aXRlZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IHJldm9rZUludml0ZSB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgcmV2b2tlSW52aXRlLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMge1xuICBpbnZpdGVlOiBJbnZpdGVlO1xufVxuXG5leHBvcnQgdHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmNsYXNzIEludml0ZWVSb3cgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGludml0ZWUsIHJldm9rZUludml0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+e2ludml0ZWUuZW1haWx9PC90ZD5cbiAgICAgICAgPHRkPntpbnZpdGVlLm5hbWV9PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICA8Q2xpcGJvYXJkQnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwic21cIiBnZXRUZXh0PXsoKSA9PiBpbnZpdGVlLnVybH0+XG4gICAgICAgICAgICBDb3B5IEludml0ZVxuICAgICAgICAgIDwvQ2xpcGJvYXJkQnV0dG9uPlxuICAgICAgICAgICZuYnNwO1xuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBzaXplPVwic21cIiBpY29uPVwidGltZXNcIiBvbkNsaWNrPXsoKSA9PiByZXZva2VJbnZpdGUoaW52aXRlZS5jb2RlKX0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoSW52aXRlZVJvdyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSW52aXRlZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCBJbnZpdGVlUm93IGZyb20gJy4vSW52aXRlZVJvdyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBpbnZpdGVlczogSW52aXRlZVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZpdGVlc1RhYmxlIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnZpdGVlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlIGZvcm0taW5saW5lXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxuICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoIC8+XG4gICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICczNHB4JyB9fSAvPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7aW52aXRlZXMubWFwKChpbnZpdGVlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxJbnZpdGVlUm93IGtleT17YCR7aW52aXRlZS5pZH0tJHtpbmRleH1gfSBpbnZpdGVlPXtpbnZpdGVlfSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBjb25zdCB7IHNlbGVjdEFsbCwgc2VsZWN0QnlJZCwgc2VsZWN0VG90YWwgfSA9IHNlbGVjdG9ycztcblxuY29uc3Qgc2VsZWN0UXVlcnkgPSAoXzogYW55LCBxdWVyeTogc3RyaW5nKSA9PiBxdWVyeTtcbmV4cG9ydCBjb25zdCBzZWxlY3RJbnZpdGVzTWF0Y2hpbmdRdWVyeSA9IGNyZWF0ZVNlbGVjdG9yKFtzZWxlY3RBbGwsIHNlbGVjdFF1ZXJ5XSwgKGludml0ZXMsIHNlYXJjaFF1ZXJ5KSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzZWFyY2hRdWVyeSwgJ2knKTtcbiAgY29uc3QgbWF0Y2hlcyA9IGludml0ZXMuZmlsdGVyKChpbnZpdGUpID0+IHJlZ2V4LnRlc3QoaW52aXRlLm5hbWUpIHx8IHJlZ2V4LnRlc3QoaW52aXRlLmVtYWlsKSk7XG4gIHJldHVybiBtYXRjaGVzO1xufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IFJhZGlvQnV0dG9uR3JvdXAsIExpbmtCdXR0b24sIEZpbHRlcklucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IHNlbGVjdFRvdGFsIH0gZnJvbSAnLi4vaW52aXRlcy9zdGF0ZS9zZWxlY3RvcnMnO1xuXG5pbXBvcnQgeyBzZXRVc2Vyc1NlYXJjaFF1ZXJ5IH0gZnJvbSAnLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBnZXRVc2Vyc1NlYXJjaFF1ZXJ5IH0gZnJvbSAnLi9zdGF0ZS9zZWxlY3RvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgc2VhcmNoUXVlcnk6IHN0cmluZztcbiAgc2V0VXNlcnNTZWFyY2hRdWVyeTogdHlwZW9mIHNldFVzZXJzU2VhcmNoUXVlcnk7XG4gIG9uU2hvd0ludml0ZXM6ICgpID0+IHZvaWQ7XG4gIHBlbmRpbmdJbnZpdGVzQ291bnQ6IG51bWJlcjtcbiAgY2FuSW52aXRlOiBib29sZWFuO1xuICBzaG93SW52aXRlczogYm9vbGVhbjtcbiAgZXh0ZXJuYWxVc2VyTW5nTGlua1VybDogc3RyaW5nO1xuICBleHRlcm5hbFVzZXJNbmdMaW5rTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVXNlcnNBY3Rpb25CYXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYW5JbnZpdGUsXG4gICAgICBleHRlcm5hbFVzZXJNbmdMaW5rTmFtZSxcbiAgICAgIGV4dGVybmFsVXNlck1uZ0xpbmtVcmwsXG4gICAgICBzZWFyY2hRdWVyeSxcbiAgICAgIHBlbmRpbmdJbnZpdGVzQ291bnQsXG4gICAgICBzZXRVc2Vyc1NlYXJjaFF1ZXJ5LFxuICAgICAgb25TaG93SW52aXRlcyxcbiAgICAgIHNob3dJbnZpdGVzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICB7IGxhYmVsOiAnVXNlcnMnLCB2YWx1ZTogJ3VzZXJzJyB9LFxuICAgICAgeyBsYWJlbDogYFBlbmRpbmcgSW52aXRlcyAoJHtwZW5kaW5nSW52aXRlc0NvdW50fSlgLCB2YWx1ZTogJ2ludml0ZXMnIH0sXG4gICAgXTtcbiAgICBjb25zdCBjYW5BZGRUb09yZyA9IGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uVXNlcnNDcmVhdGUsIGNhbkludml0ZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cbiAgICAgICAgICA8RmlsdGVySW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRVc2Vyc1NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdXNlciBieSBsb2dpbiwgZW1haWwgb3IgbmFtZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtwZW5kaW5nSW52aXRlc0NvdW50ID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMXJlbScgfX0+XG4gICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cCB2YWx1ZT17c2hvd0ludml0ZXMgPyAnaW52aXRlcycgOiAndXNlcnMnfSBvcHRpb25zPXtvcHRpb25zfSBvbkNoYW5nZT17b25TaG93SW52aXRlc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2NhbkFkZFRvT3JnICYmIDxMaW5rQnV0dG9uIGhyZWY9XCJvcmcvdXNlcnMvaW52aXRlXCI+SW52aXRlPC9MaW5rQnV0dG9uPn1cbiAgICAgICAge2V4dGVybmFsVXNlck1uZ0xpbmtVcmwgJiYgKFxuICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9e2V4dGVybmFsVXNlck1uZ0xpbmtVcmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgICAgICB7ZXh0ZXJuYWxVc2VyTW5nTGlua05hbWV9XG4gICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IGFueSkge1xuICByZXR1cm4ge1xuICAgIHNlYXJjaFF1ZXJ5OiBnZXRVc2Vyc1NlYXJjaFF1ZXJ5KHN0YXRlLnVzZXJzKSxcbiAgICBwZW5kaW5nSW52aXRlc0NvdW50OiBzZWxlY3RUb3RhbChzdGF0ZS5pbnZpdGVzKSxcbiAgICBleHRlcm5hbFVzZXJNbmdMaW5rTmFtZTogc3RhdGUudXNlcnMuZXh0ZXJuYWxVc2VyTW5nTGlua05hbWUsXG4gICAgZXh0ZXJuYWxVc2VyTW5nTGlua1VybDogc3RhdGUudXNlcnMuZXh0ZXJuYWxVc2VyTW5nTGlua1VybCxcbiAgICBjYW5JbnZpdGU6IHN0YXRlLnVzZXJzLmNhbkludml0ZSxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBzZXRVc2Vyc1NlYXJjaFF1ZXJ5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXNlcnNBY3Rpb25CYXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgcmVuZGVyTWFya2Rvd24gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEhvcml6b250YWxHcm91cCwgUGFnaW5hdGlvbiwgVmVydGljYWxHcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IE9yZ1VzZXIsIE9yZ1JvbGUsIFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgSW52aXRlZXNUYWJsZSBmcm9tICcuLi9pbnZpdGVzL0ludml0ZWVzVGFibGUnO1xuaW1wb3J0IHsgZmV0Y2hJbnZpdGVlcyB9IGZyb20gJy4uL2ludml0ZXMvc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBzZWxlY3RJbnZpdGVzTWF0Y2hpbmdRdWVyeSB9IGZyb20gJy4uL2ludml0ZXMvc3RhdGUvc2VsZWN0b3JzJztcblxuaW1wb3J0IFVzZXJzQWN0aW9uQmFyIGZyb20gJy4vVXNlcnNBY3Rpb25CYXInO1xuaW1wb3J0IFVzZXJzVGFibGUgZnJvbSAnLi9Vc2Vyc1RhYmxlJztcbmltcG9ydCB7IGxvYWRVc2VycywgcmVtb3ZlVXNlciwgdXBkYXRlVXNlciB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBzZXRVc2Vyc1NlYXJjaFF1ZXJ5LCBzZXRVc2Vyc1NlYXJjaFBhZ2UgfSBmcm9tICcuL3N0YXRlL3JlZHVjZXJzJztcbmltcG9ydCB7IGdldFVzZXJzLCBnZXRVc2Vyc1NlYXJjaFF1ZXJ5LCBnZXRVc2Vyc1NlYXJjaFBhZ2UgfSBmcm9tICcuL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICBjb25zdCBzZWFyY2hRdWVyeSA9IGdldFVzZXJzU2VhcmNoUXVlcnkoc3RhdGUudXNlcnMpO1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgJ3VzZXJzJyksXG4gICAgdXNlcnM6IGdldFVzZXJzKHN0YXRlLnVzZXJzKSxcbiAgICBzZWFyY2hRdWVyeTogZ2V0VXNlcnNTZWFyY2hRdWVyeShzdGF0ZS51c2VycyksXG4gICAgc2VhcmNoUGFnZTogZ2V0VXNlcnNTZWFyY2hQYWdlKHN0YXRlLnVzZXJzKSxcbiAgICBpbnZpdGVlczogc2VsZWN0SW52aXRlc01hdGNoaW5nUXVlcnkoc3RhdGUuaW52aXRlcywgc2VhcmNoUXVlcnkpLFxuICAgIGV4dGVybmFsVXNlck1uZ0luZm86IHN0YXRlLnVzZXJzLmV4dGVybmFsVXNlck1uZ0luZm8sXG4gICAgaGFzRmV0Y2hlZDogc3RhdGUudXNlcnMuaGFzRmV0Y2hlZCxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBsb2FkVXNlcnMsXG4gIGZldGNoSW52aXRlZXMsXG4gIHNldFVzZXJzU2VhcmNoUXVlcnksXG4gIHNldFVzZXJzU2VhcmNoUGFnZSxcbiAgdXBkYXRlVXNlcixcbiAgcmVtb3ZlVXNlcixcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgc2hvd0ludml0ZXM6IGJvb2xlYW47XG59XG5cbmNvbnN0IHBhZ2VMaW1pdCA9IDMwO1xuXG5leHBvcnQgY2xhc3MgVXNlcnNMaXN0UGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGRlY2xhcmUgZXh0ZXJuYWxVc2VyTW5nSW5mb0h0bWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5leHRlcm5hbFVzZXJNbmdJbmZvKSB7XG4gICAgICB0aGlzLmV4dGVybmFsVXNlck1uZ0luZm9IdG1sID0gcmVuZGVyTWFya2Rvd24odGhpcy5wcm9wcy5leHRlcm5hbFVzZXJNbmdJbmZvKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0ludml0ZXM6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoVXNlcnMoKTtcbiAgICB0aGlzLmZldGNoSW52aXRlZXMoKTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoVXNlcnMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucHJvcHMubG9hZFVzZXJzKCk7XG4gIH1cblxuICBhc3luYyBmZXRjaEludml0ZWVzKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnByb3BzLmZldGNoSW52aXRlZXMoKTtcbiAgfVxuXG4gIG9uUm9sZUNoYW5nZSA9IChyb2xlOiBPcmdSb2xlLCB1c2VyOiBPcmdVc2VyKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFVzZXIgPSB7IC4uLnVzZXIsIHJvbGU6IHJvbGUgfTtcblxuICAgIHRoaXMucHJvcHMudXBkYXRlVXNlcih1cGRhdGVkVXNlcik7XG4gIH07XG5cbiAgb25TaG93SW52aXRlcyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICBzaG93SW52aXRlczogIXByZXZTdGF0ZS5zaG93SW52aXRlcyxcbiAgICB9KSk7XG4gIH07XG5cbiAgZ2V0UGFnaW5hdGVkVXNlcnMgPSAodXNlcnM6IE9yZ1VzZXJbXSkgPT4ge1xuICAgIGNvbnN0IG9mZnNldCA9ICh0aGlzLnByb3BzLnNlYXJjaFBhZ2UgLSAxKSAqIHBhZ2VMaW1pdDtcbiAgICByZXR1cm4gdXNlcnMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBwYWdlTGltaXQpO1xuICB9O1xuXG4gIHJlbmRlclRhYmxlKCkge1xuICAgIGNvbnN0IHsgaW52aXRlZXMsIHVzZXJzLCBzZXRVc2Vyc1NlYXJjaFBhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcGFnaW5hdGVkVXNlcnMgPSB0aGlzLmdldFBhZ2luYXRlZFVzZXJzKHVzZXJzKTtcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKHVzZXJzLmxlbmd0aCAvIHBhZ2VMaW1pdCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93SW52aXRlcykge1xuICAgICAgcmV0dXJuIDxJbnZpdGVlc1RhYmxlIGludml0ZWVzPXtpbnZpdGVlc30gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxWZXJ0aWNhbEdyb3VwIHNwYWNpbmc9XCJtZFwiPlxuICAgICAgICAgIDxVc2Vyc1RhYmxlXG4gICAgICAgICAgICB1c2Vycz17cGFnaW5hdGVkVXNlcnN9XG4gICAgICAgICAgICBvblJvbGVDaGFuZ2U9eyhyb2xlLCB1c2VyKSA9PiB0aGlzLm9uUm9sZUNoYW5nZShyb2xlLCB1c2VyKX1cbiAgICAgICAgICAgIG9uUmVtb3ZlVXNlcj17KHVzZXIpID0+IHRoaXMucHJvcHMucmVtb3ZlVXNlcih1c2VyLnVzZXJJZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgICAgb25OYXZpZ2F0ZT17c2V0VXNlcnNTZWFyY2hQYWdlfVxuICAgICAgICAgICAgICBjdXJyZW50UGFnZT17dGhpcy5wcm9wcy5zZWFyY2hQYWdlfVxuICAgICAgICAgICAgICBudW1iZXJPZlBhZ2VzPXt0b3RhbFBhZ2VzfVxuICAgICAgICAgICAgICBoaWRlV2hlblNpbmdsZVBhZ2U9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdk1vZGVsLCBoYXNGZXRjaGVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGV4dGVybmFsVXNlck1uZ0luZm9IdG1sID0gdGhpcy5leHRlcm5hbFVzZXJNbmdJbmZvSHRtbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9eyFoYXNGZXRjaGVkfT5cbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFVzZXJzQWN0aW9uQmFyIG9uU2hvd0ludml0ZXM9e3RoaXMub25TaG93SW52aXRlc30gc2hvd0ludml0ZXM9e3RoaXMuc3RhdGUuc2hvd0ludml0ZXN9IC8+XG4gICAgICAgICAgICB7ZXh0ZXJuYWxVc2VyTW5nSW5mb0h0bWwgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYWZhbmEtaW5mby1ib3hcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGV4dGVybmFsVXNlck1uZ0luZm9IdG1sIH19IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2hhc0ZldGNoZWQgJiYgdGhpcy5yZW5kZXJUYWJsZSgpfVxuICAgICAgICAgIDwvPlxuICAgICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoVXNlcnNMaXN0UGFnZSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE9yZ1JvbGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgQ29uZmlybU1vZGFsIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgVXNlclJvbGVQaWNrZXIgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1JvbGVQaWNrZXIvVXNlclJvbGVQaWNrZXInO1xuaW1wb3J0IHsgZmV0Y2hCdWlsdGluUm9sZXMsIGZldGNoUm9sZU9wdGlvbnMgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1JvbGVQaWNrZXIvYXBpJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIE9yZ1VzZXIsIFJvbGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBPcmdSb2xlUGlja2VyIH0gZnJvbSAnLi4vYWRtaW4vT3JnUm9sZVBpY2tlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB1c2VyczogT3JnVXNlcltdO1xuICBvcmdJZD86IG51bWJlcjtcbiAgb25Sb2xlQ2hhbmdlOiAocm9sZTogT3JnUm9sZSwgdXNlcjogT3JnVXNlcikgPT4gdm9pZDtcbiAgb25SZW1vdmVVc2VyOiAodXNlcjogT3JnVXNlcikgPT4gdm9pZDtcbn1cblxuY29uc3QgVXNlcnNUYWJsZTogRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdXNlcnMsIG9yZ0lkLCBvblJvbGVDaGFuZ2UsIG9uUmVtb3ZlVXNlciB9ID0gcHJvcHM7XG4gIGNvbnN0IFt1c2VyVG9SZW1vdmUsIHNldFVzZXJUb1JlbW92ZV0gPSB1c2VTdGF0ZTxPcmdVc2VyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtyb2xlT3B0aW9ucywgc2V0Um9sZU9wdGlvbnNdID0gdXNlU3RhdGU8Um9sZVtdPihbXSk7XG4gIGNvbnN0IFtidWlsdGluUm9sZXMsIHNldEJ1aWx0aW5Sb2xlc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IFJvbGVbXSB9Pih7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaE9wdGlvbnMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uUm9sZXNMaXN0KSkge1xuICAgICAgICAgIGxldCBvcHRpb25zID0gYXdhaXQgZmV0Y2hSb2xlT3B0aW9ucyhvcmdJZCk7XG4gICAgICAgICAgc2V0Um9sZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWNvbnRleHRTcnYuYWNjZXNzQ29udHJvbEJ1aWx0aW5SZWZhY3RvckVuYWJsZWQoKSAmJlxuICAgICAgICAgIGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvbkJ1aWx0aW5Sb2xlc0xpc3QpXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGJ1aWx0SW5Sb2xlcyA9IGF3YWl0IGZldGNoQnVpbHRpblJvbGVzKG9yZ0lkKTtcbiAgICAgICAgICBzZXRCdWlsdGluUm9sZXMoYnVpbHRJblJvbGVzKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIG9wdGlvbnMnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNvbnRleHRTcnYubGljZW5zZWRBY2Nlc3NDb250cm9sRW5hYmxlZCgpKSB7XG4gICAgICBmZXRjaE9wdGlvbnMoKTtcbiAgICB9XG4gIH0sIFtvcmdJZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGUgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCAvPlxuICAgICAgICAgICAgPHRoPkxvZ2luPC90aD5cbiAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XG4gICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICA8dGg+U2VlbjwvdGg+XG4gICAgICAgICAgICA8dGg+Um9sZTwvdGg+XG4gICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICczNHB4JyB9fSAvPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7dXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIGtleT17YCR7dXNlci51c2VySWR9LSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndpZHRoLTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlX19hdmF0YXJcIiBzcmM9e3VzZXIuYXZhdGFyVXJsfSBhbHQ9XCJVc2VyIGF2YXRhclwiIC8+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWF4LXdpZHRoLTZcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVsbGlwc2lzXCIgdGl0bGU9e3VzZXIubG9naW59PlxuICAgICAgICAgICAgICAgICAgICB7dXNlci5sb2dpbn1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1heC13aWR0aC01XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbGxpcHNpc1wiIHRpdGxlPXt1c2VyLmVtYWlsfT5cbiAgICAgICAgICAgICAgICAgICAge3VzZXIuZW1haWx9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWF4LXdpZHRoLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVsbGlwc2lzXCIgdGl0bGU9e3VzZXIubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2lkdGgtMVwiPnt1c2VyLmxhc3RTZWVuQXRBZ2V9PC90ZD5cblxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aWR0aC04XCI+XG4gICAgICAgICAgICAgICAgICB7Y29udGV4dFNydi5saWNlbnNlZEFjY2Vzc0NvbnRyb2xFbmFibGVkKCkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyUm9sZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZD17dXNlci51c2VySWR9XG4gICAgICAgICAgICAgICAgICAgICAgb3JnSWQ9e29yZ0lkfVxuICAgICAgICAgICAgICAgICAgICAgIGJ1aWx0SW5Sb2xlPXt1c2VyLnJvbGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25CdWlsdGluUm9sZUNoYW5nZT17KG5ld1JvbGUpID0+IG9uUm9sZUNoYW5nZShuZXdSb2xlLCB1c2VyKX1cbiAgICAgICAgICAgICAgICAgICAgICByb2xlT3B0aW9ucz17cm9sZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgYnVpbHRJblJvbGVzPXtidWlsdGluUm9sZXN9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uT3JnVXNlcnNSb2xlVXBkYXRlLCB1c2VyKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxPcmdSb2xlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJvbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyLnJvbGV9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uT3JnVXNlcnNSb2xlVXBkYXRlLCB1c2VyKX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5ld1JvbGUpID0+IG9uUm9sZUNoYW5nZShuZXdSb2xlLCB1c2VyKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICAgIHtjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uT3JnVXNlcnNSZW1vdmUsIHVzZXIpICYmIChcbiAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImRlc3RydWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VyVG9SZW1vdmUodXNlcik7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwidGltZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWxldGUgdXNlclwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIHtCb29sZWFuKHVzZXJUb1JlbW92ZSkgJiYgKFxuICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgYm9keT17YEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdXNlciAke3VzZXJUb1JlbW92ZT8ubG9naW59P2B9XG4gICAgICAgICAgY29uZmlybVRleHQ9XCJEZWxldGVcIlxuICAgICAgICAgIHRpdGxlPVwiRGVsZXRlXCJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHtcbiAgICAgICAgICAgIHNldFVzZXJUb1JlbW92ZShudWxsKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGlzT3Blbj17dHJ1ZX1cbiAgICAgICAgICBvbkNvbmZpcm09eygpID0+IHtcbiAgICAgICAgICAgIGlmICghdXNlclRvUmVtb3ZlKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uUmVtb3ZlVXNlcih1c2VyVG9SZW1vdmUpO1xuICAgICAgICAgICAgc2V0VXNlclRvUmVtb3ZlKG51bGwpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcnNUYWJsZTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIH0gZnJvbSAnYXBwL2NvcmUvdXRpbHMvYWNjZXNzQ29udHJvbCc7XG5pbXBvcnQgeyBPcmdVc2VyIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgVGh1bmtSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IHVzZXJzTG9hZGVkIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVXNlcnMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL29yZy91c2VycycsIGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCkpO1xuICAgIGRpc3BhdGNoKHVzZXJzTG9hZGVkKHVzZXJzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVVc2VyKHVzZXI6IE9yZ1VzZXIpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucGF0Y2goYC9hcGkvb3JnL3VzZXJzLyR7dXNlci51c2VySWR9YCwgeyByb2xlOiB1c2VyLnJvbGUgfSk7XG4gICAgZGlzcGF0Y2gobG9hZFVzZXJzKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVXNlcih1c2VySWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoYC9hcGkvb3JnL3VzZXJzLyR7dXNlcklkfWApO1xuICAgIGRpc3BhdGNoKGxvYWRVc2VycygpKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IFVzZXJzU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlcnMgPSAoc3RhdGU6IFVzZXJzU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLnNlYXJjaFF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS51c2Vycy5maWx0ZXIoKHVzZXIpID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh1c2VyLmxvZ2luKSB8fCByZWdleC50ZXN0KHVzZXIuZW1haWwpIHx8IHJlZ2V4LnRlc3QodXNlci5uYW1lKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlcnNTZWFyY2hRdWVyeSA9IChzdGF0ZTogVXNlcnNTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUXVlcnk7XG5leHBvcnQgY29uc3QgZ2V0VXNlcnNTZWFyY2hQYWdlID0gKHN0YXRlOiBVc2Vyc1N0YXRlKSA9PiBzdGF0ZS5zZWFyY2hQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbm5lY3QiLCJCdXR0b24iLCJDbGlwYm9hcmRCdXR0b24iLCJyZXZva2VJbnZpdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJJbnZpdGVlUm93IiwicmVuZGVyIiwiaW52aXRlZSIsInByb3BzIiwiZW1haWwiLCJuYW1lIiwidXJsIiwiY29kZSIsIkludml0ZWVzVGFibGUiLCJpbnZpdGVlcyIsIndpZHRoIiwibWFwIiwiaW5kZXgiLCJpZCIsImNyZWF0ZVNlbGVjdG9yIiwic2VsZWN0b3JzIiwic2VsZWN0QWxsIiwic2VsZWN0QnlJZCIsInNlbGVjdFRvdGFsIiwic2VsZWN0UXVlcnkiLCJfIiwicXVlcnkiLCJzZWxlY3RJbnZpdGVzTWF0Y2hpbmdRdWVyeSIsImludml0ZXMiLCJzZWFyY2hRdWVyeSIsInJlZ2V4IiwiUmVnRXhwIiwibWF0Y2hlcyIsImZpbHRlciIsImludml0ZSIsInRlc3QiLCJSYWRpb0J1dHRvbkdyb3VwIiwiTGlua0J1dHRvbiIsIkZpbHRlcklucHV0IiwiY29udGV4dFNydiIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJzZXRVc2Vyc1NlYXJjaFF1ZXJ5IiwiZ2V0VXNlcnNTZWFyY2hRdWVyeSIsIlVzZXJzQWN0aW9uQmFyIiwiY2FuSW52aXRlIiwiZXh0ZXJuYWxVc2VyTW5nTGlua05hbWUiLCJleHRlcm5hbFVzZXJNbmdMaW5rVXJsIiwicGVuZGluZ0ludml0ZXNDb3VudCIsIm9uU2hvd0ludml0ZXMiLCJzaG93SW52aXRlcyIsIm9wdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwiY2FuQWRkVG9PcmciLCJoYXNBY2Nlc3MiLCJVc2Vyc0NyZWF0ZSIsIm1hcmdpbkxlZnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJzIiwicmVuZGVyTWFya2Rvd24iLCJIb3Jpem9udGFsR3JvdXAiLCJQYWdpbmF0aW9uIiwiVmVydGljYWxHcm91cCIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsImZldGNoSW52aXRlZXMiLCJVc2Vyc1RhYmxlIiwibG9hZFVzZXJzIiwicmVtb3ZlVXNlciIsInVwZGF0ZVVzZXIiLCJzZXRVc2Vyc1NlYXJjaFBhZ2UiLCJnZXRVc2VycyIsImdldFVzZXJzU2VhcmNoUGFnZSIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJzZWFyY2hQYWdlIiwiZXh0ZXJuYWxVc2VyTW5nSW5mbyIsImhhc0ZldGNoZWQiLCJwYWdlTGltaXQiLCJVc2Vyc0xpc3RQYWdlIiwiY29uc3RydWN0b3IiLCJyb2xlIiwidXNlciIsInVwZGF0ZWRVc2VyIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJvZmZzZXQiLCJzbGljZSIsImV4dGVybmFsVXNlck1uZ0luZm9IdG1sIiwiY29tcG9uZW50RGlkTW91bnQiLCJmZXRjaFVzZXJzIiwicmVuZGVyVGFibGUiLCJwYWdpbmF0ZWRVc2VycyIsImdldFBhZ2luYXRlZFVzZXJzIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwib25Sb2xlQ2hhbmdlIiwidXNlcklkIiwiX19odG1sIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb25maXJtTW9kYWwiLCJVc2VyUm9sZVBpY2tlciIsImZldGNoQnVpbHRpblJvbGVzIiwiZmV0Y2hSb2xlT3B0aW9ucyIsIk9yZ1JvbGVQaWNrZXIiLCJvcmdJZCIsIm9uUmVtb3ZlVXNlciIsInVzZXJUb1JlbW92ZSIsInNldFVzZXJUb1JlbW92ZSIsInJvbGVPcHRpb25zIiwic2V0Um9sZU9wdGlvbnMiLCJidWlsdGluUm9sZXMiLCJzZXRCdWlsdGluUm9sZXMiLCJmZXRjaE9wdGlvbnMiLCJoYXNQZXJtaXNzaW9uIiwiQWN0aW9uUm9sZXNMaXN0IiwiYWNjZXNzQ29udHJvbEJ1aWx0aW5SZWZhY3RvckVuYWJsZWQiLCJBY3Rpb25CdWlsdGluUm9sZXNMaXN0IiwiYnVpbHRJblJvbGVzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQiLCJhdmF0YXJVcmwiLCJsb2dpbiIsImxhc3RTZWVuQXRBZ2UiLCJuZXdSb2xlIiwiaGFzUGVybWlzc2lvbkluTWV0YWRhdGEiLCJPcmdVc2Vyc1JvbGVVcGRhdGUiLCJPcmdVc2Vyc1JlbW92ZSIsIkJvb2xlYW4iLCJnZXRCYWNrZW5kU3J2IiwiYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0iLCJ1c2Vyc0xvYWRlZCIsImRpc3BhdGNoIiwiZ2V0IiwicGF0Y2giLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9