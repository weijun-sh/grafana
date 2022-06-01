"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[9671],{

/***/ "./public/app/core/components/connectWithCleanUp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ connectWithCleanUp)
/* harmony export */ });
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_cleanUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const connectWithCleanUp = (mapStateToProps, mapDispatchToProps, stateSelector) => Component => {
  const ConnectedComponent = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps // @ts-ignore
  )(Component);

  const ConnectedComponentWithCleanUp = props => {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      return function cleanUp() {
        dispatch((0,_actions_cleanUp__WEBPACK_IMPORTED_MODULE_3__/* .cleanUpAction */ .e)({
          stateSelector
        }));
      };
    }, [dispatch]); // @ts-ignore

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ConnectedComponent, Object.assign({}, props));
  };

  ConnectedComponentWithCleanUp.displayName = `ConnectWithCleanUp(${ConnectedComponent.displayName})`;
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(ConnectedComponentWithCleanUp, Component);
  return ConnectedComponentWithCleanUp;
};

/***/ }),

/***/ "./public/app/features/admin/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ highlightTrial)
/* harmony export */ });
/* unused harmony export isTrial */
/* harmony import */ var _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

function isTrial() {
  var _config$licenseInfo;

  const expiry = (_config$licenseInfo = _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__.config.licenseInfo) === null || _config$licenseInfo === void 0 ? void 0 : _config$licenseInfo.trialExpiry;
  return !!(expiry && expiry > 0);
}
const highlightTrial = () => isTrial() && _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_0__.config.featureToggles.featureHighlights;

/***/ }),

/***/ "./public/app/features/teams/TeamList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TeamList": () => (/* binding */ TeamList),
  "default": () => (/* binding */ teams_TeamList)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
// EXTERNAL MODULE: ./public/app/core/components/Page/Page.tsx + 1 modules
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js");
// EXTERNAL MODULE: ./public/app/core/components/RolePicker/RolePicker.tsx + 4 modules
var RolePicker = __webpack_require__("./public/app/core/components/RolePicker/RolePicker.tsx");
// EXTERNAL MODULE: ./public/app/core/components/RolePicker/api.ts
var api = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/core/components/RolePicker/TeamRolePicker.tsx





const TeamRolePicker = _ref => {
  let {
    teamId,
    orgId,
    roleOptions,
    disabled,
    builtinRolesDisabled
  } = _ref;
  const [{
    loading,
    value: appliedRoles = []
  }, getTeamRoles] = (0,useAsyncFn/* default */.Z)(async () => {
    try {
      return await (0,api/* fetchTeamRoles */._C)(teamId, orgId);
    } catch (e) {
      // TODO handle error
      console.error('Error loading options');
    }

    return [];
  }, [orgId, teamId]);
  (0,react.useEffect)(() => {
    getTeamRoles();
  }, [orgId, teamId, getTeamRoles]);

  const onRolesChange = async roles => {
    await (0,api/* updateTeamRoles */.u7)(roles, teamId, orgId);
    await getTeamRoles();
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(RolePicker/* RolePicker */.I, {
    onRolesChange: onRolesChange,
    roleOptions: roleOptions,
    appliedRoles: appliedRoles,
    isLoading: loading,
    disabled: disabled,
    builtinRolesDisabled: builtinRolesDisabled
  });
};
// EXTERNAL MODULE: ./public/app/core/config.ts
var config = __webpack_require__("./public/app/core/config.ts");
// EXTERNAL MODULE: ./public/app/core/selectors/navModel.ts
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
// EXTERNAL MODULE: ./public/app/core/services/context_srv.ts
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var types = __webpack_require__("./public/app/types/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/connectWithCleanUp.tsx
var connectWithCleanUp = __webpack_require__("./public/app/core/components/connectWithCleanUp.tsx");
// EXTERNAL MODULE: ./public/app/features/teams/state/actions.ts
var actions = __webpack_require__("./public/app/features/teams/state/actions.ts");
// EXTERNAL MODULE: ./public/app/features/teams/state/reducers.ts
var reducers = __webpack_require__("./public/app/features/teams/state/reducers.ts");
// EXTERNAL MODULE: ./public/app/features/teams/state/selectors.ts
var selectors = __webpack_require__("./public/app/features/teams/state/selectors.ts");
;// CONCATENATED MODULE: ./public/app/features/teams/TeamList.tsx
var _th, _th2, _th3, _th4, _th5;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const pageLimit = 30;
class TeamList extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "deleteTeam", team => {
      this.props.deleteTeam(team.id);
    });

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setSearchQuery(value);
    });

    _defineProperty(this, "getPaginatedTeams", teams => {
      const offset = (this.props.searchPage - 1) * pageLimit;
      return teams.slice(offset, offset + pageLimit);
    });

    this.state = {
      roleOptions: []
    };
  }

  componentDidMount() {
    this.fetchTeams();

    if (context_srv/* contextSrv.licensedAccessControlEnabled */.Vt.licensedAccessControlEnabled() && context_srv/* contextSrv.hasPermission */.Vt.hasPermission(types/* AccessControlAction.ActionRolesList */.bW.ActionRolesList)) {
      this.fetchRoleOptions();
    }
  }

  async fetchTeams() {
    await this.props.loadTeams();
  }

  async fetchRoleOptions() {
    const roleOptions = await (0,api/* fetchRoleOptions */.ul)();
    this.setState({
      roleOptions
    });
  }

  renderTeam(team) {
    var _team$email, _team$email2;

    const {
      editorsCanAdmin,
      signedInUser
    } = this.props;
    const permission = team.permission;
    const teamUrl = `org/teams/edit/${team.id}`;
    const isTeamAdmin = (0,selectors/* isPermissionTeamAdmin */.kC)({
      permission,
      editorsCanAdmin,
      signedInUser
    });
    const canDelete = context_srv/* contextSrv.hasAccessInMetadata */.Vt.hasAccessInMetadata(types/* AccessControlAction.ActionTeamsDelete */.bW.ActionTeamsDelete, team, isTeamAdmin);
    const canReadTeam = context_srv/* contextSrv.hasAccessInMetadata */.Vt.hasAccessInMetadata(types/* AccessControlAction.ActionTeamsRead */.bW.ActionTeamsRead, team, isTeamAdmin);
    const canSeeTeamRoles = context_srv/* contextSrv.hasAccessInMetadata */.Vt.hasAccessInMetadata(types/* AccessControlAction.ActionTeamsRolesList */.bW.ActionTeamsRolesList, team, false);
    const canUpdateTeamRoles = context_srv/* contextSrv.hasAccess */.Vt.hasAccess(types/* AccessControlAction.ActionTeamsRolesAdd */.bW.ActionTeamsRolesAdd, false) || context_srv/* contextSrv.hasAccess */.Vt.hasAccess(types/* AccessControlAction.ActionTeamsRolesRemove */.bW.ActionTeamsRolesRemove, false);
    const displayRolePicker = context_srv/* contextSrv.licensedAccessControlEnabled */.Vt.licensedAccessControlEnabled() && context_srv/* contextSrv.hasPermission */.Vt.hasPermission(types/* AccessControlAction.ActionTeamsRolesList */.bW.ActionTeamsRolesList) && context_srv/* contextSrv.hasPermission */.Vt.hasPermission(types/* AccessControlAction.ActionRolesList */.bW.ActionRolesList);
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        className: "width-4 text-center link-td",
        children: canReadTeam ? /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: teamUrl,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
            className: "filter-table__avatar",
            src: team.avatarUrl,
            alt: "Team avatar"
          })
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          className: "filter-table__avatar",
          src: team.avatarUrl,
          alt: "Team avatar"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        className: "link-td",
        children: canReadTeam ? /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: teamUrl,
          children: team.name
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            padding: '0px 8px'
          },
          children: team.name
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        className: "link-td",
        children: canReadTeam ? /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: teamUrl,
          "aria-label": ((_team$email = team.email) === null || _team$email === void 0 ? void 0 : _team$email.length) > 0 ? undefined : 'Empty email cell',
          children: team.email
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            padding: '0px 8px'
          },
          "aria-label": ((_team$email2 = team.email) === null || _team$email2 === void 0 ? void 0 : _team$email2.length) > 0 ? undefined : 'Empty email cell',
          children: team.email
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        className: "link-td",
        children: canReadTeam ? /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: teamUrl,
          children: team.memberCount
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: {
            padding: '0px 8px'
          },
          children: team.memberCount
        })
      }), displayRolePicker && /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        children: canSeeTeamRoles && /*#__PURE__*/(0,jsx_runtime.jsx)(TeamRolePicker, {
          teamId: team.id,
          roleOptions: this.state.roleOptions,
          disabled: !canUpdateTeamRoles
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        className: "text-right",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.DeleteButton, {
          "aria-label": "Delete team",
          size: "sm",
          disabled: !canDelete,
          onConfirm: () => this.deleteTeam(team)
        })
      })]
    }, team.id);
  }

  renderEmptyList() {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyListCTA/* default */.Z, {
      title: "You haven't created any teams yet.",
      buttonIcon: "users-alt",
      buttonLink: "org/teams/new",
      buttonTitle: " New team",
      buttonDisabled: !context_srv/* contextSrv.hasPermission */.Vt.hasPermission(types/* AccessControlAction.ActionTeamsCreate */.bW.ActionTeamsCreate),
      proTip: "Assign folder and dashboard permissions to teams instead of users to ease administration.",
      proTipLink: "",
      proTipLinkTitle: "",
      proTipTarget: "_blank"
    });
  }

  renderTeamList() {
    const {
      teams,
      searchQuery,
      editorsCanAdmin,
      searchPage,
      setTeamsSearchPage
    } = this.props;
    const teamAdmin = context_srv/* contextSrv.hasRole */.Vt.hasRole('Admin') || editorsCanAdmin && context_srv/* contextSrv.hasRole */.Vt.hasRole('Editor');
    const canCreate = context_srv/* contextSrv.hasAccess */.Vt.hasAccess(types/* AccessControlAction.ActionTeamsCreate */.bW.ActionTeamsCreate, teamAdmin);
    const displayRolePicker = context_srv/* contextSrv.licensedAccessControlEnabled */.Vt.licensedAccessControlEnabled() && context_srv/* contextSrv.hasPermission */.Vt.hasPermission(types/* AccessControlAction.ActionTeamsRolesList */.bW.ActionTeamsRolesList) && context_srv/* contextSrv.hasPermission */.Vt.hasPermission(types/* AccessControlAction.ActionRolesList */.bW.ActionRolesList);
    const newTeamHref = canCreate ? 'org/teams/new' : '#';
    const paginatedTeams = this.getPaginatedTeams(teams);
    const totalPages = Math.ceil(teams.length / pageLimit);
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "page-action-bar",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form gf-form--grow",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.FilterInput, {
            placeholder: "Search teams",
            value: searchQuery,
            onChange: this.onSearchQueryChange
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.LinkButton, {
          href: newTeamHref,
          disabled: !canCreate,
          children: "New Team"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "admin-list-table",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(src.VerticalGroup, {
          spacing: "md",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
            className: "filter-table filter-table--hover form-inline",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [_th || (_th = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: "Name"
                })), _th3 || (_th3 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: "Email"
                })), _th4 || (_th4 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: "Members"
                })), displayRolePicker && (_th5 || (_th5 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: "Roles"
                }))), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  style: {
                    width: '1%'
                  }
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
              children: paginatedTeams.map(team => this.renderTeam(team))
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.HorizontalGroup, {
            justify: "flex-end",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Pagination, {
              onNavigate: setTeamsSearchPage,
              currentPage: searchPage,
              numberOfPages: totalPages,
              hideWhenSinglePage: true
            })
          })]
        })
      })]
    });
  }

  renderList() {
    const {
      teamsCount,
      hasFetched
    } = this.props;

    if (!hasFetched) {
      return null;
    }

    if (teamsCount > 0) {
      return this.renderTeamList();
    } else {
      return this.renderEmptyList();
    }
  }

  render() {
    const {
      hasFetched,
      navModel
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
      navModel: navModel,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default.Contents */.Z.Contents, {
        isLoading: !hasFetched,
        children: this.renderList()
      })
    });
  }

}

function mapStateToProps(state) {
  return {
    navModel: (0,navModel/* getNavModel */.h)(state.navIndex, 'teams'),
    teams: (0,selectors/* getTeams */.LK)(state.teams),
    searchQuery: (0,selectors/* getSearchQuery */.uP)(state.teams),
    searchPage: (0,selectors/* getTeamsSearchPage */._u)(state.teams),
    teamsCount: (0,selectors/* getTeamsCount */.v7)(state.teams),
    hasFetched: state.teams.hasFetched,
    editorsCanAdmin: config/* config.editorsCanAdmin */.vc.editorsCanAdmin,
    // this makes the feature toggle mockable/controllable from tests,
    signedInUser: context_srv/* contextSrv.user */.Vt.user // this makes the feature toggle mockable/controllable from tests,

  };
}

const mapDispatchToProps = {
  loadTeams: actions/* loadTeams */.jI,
  deleteTeam: actions/* deleteTeam */.fC,
  setSearchQuery: reducers/* setSearchQuery */.ql,
  setTeamsSearchPage: reducers/* setTeamsSearchPage */.ot
};
/* harmony default export */ const teams_TeamList = ((0,connectWithCleanUp/* connectWithCleanUp */.$)(mapStateToProps, mapDispatchToProps, state => state.teams)(TeamList));

/***/ }),

/***/ "./public/app/features/teams/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A_": () => (/* binding */ addTeamGroup),
/* harmony export */   "Lt": () => (/* binding */ addTeamMember),
/* harmony export */   "P5": () => (/* binding */ removeTeamGroup),
/* harmony export */   "QX": () => (/* binding */ loadTeam),
/* harmony export */   "ei": () => (/* binding */ loadTeamMembers),
/* harmony export */   "fC": () => (/* binding */ deleteTeam),
/* harmony export */   "fs": () => (/* binding */ updateTeam),
/* harmony export */   "jI": () => (/* binding */ loadTeams),
/* harmony export */   "j_": () => (/* binding */ loadTeamGroups),
/* harmony export */   "zT": () => (/* binding */ removeTeamMember),
/* harmony export */   "zZ": () => (/* binding */ updateTeamMember)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/teams/state/navModel.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/teams/state/reducers.ts");







function loadTeams() {
  return async dispatch => {
    // Early return if the user cannot list teams
    if (!app_core_core__WEBPACK_IMPORTED_MODULE_2__/* .contextSrv.hasPermission */ .Vt.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__/* .AccessControlAction.ActionTeamsRead */ .bW.ActionTeamsRead)) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__/* .teamsLoaded */ .PL)([]));
      return;
    }

    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/teams/search', (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_3__/* .accessControlQueryParam */ .y)({
      perpage: 1000,
      page: 1
    }));
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__/* .teamsLoaded */ .PL)(response.teams));
  };
}
function loadTeam(id) {
  return async dispatch => {
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${id}`, (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_3__/* .accessControlQueryParam */ .y)());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__/* .teamLoaded */ .y$)(response));
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__/* .updateNavIndex */ .RL)((0,_navModel__WEBPACK_IMPORTED_MODULE_5__/* .buildNavModel */ .B)(response)));
  };
}
function loadTeamMembers() {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${team.id}/members`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__/* .teamMembersLoaded */ .n2)(response));
  };
}
function addTeamMember(id) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/teams/${team.id}/members`, {
      userId: id
    });
    dispatch(loadTeamMembers());
  };
}
function removeTeamMember(id) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/teams/${team.id}/members/${id}`);
    dispatch(loadTeamMembers());
  };
}
function updateTeam(name, email) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/teams/${team.id}`, {
      name,
      email
    });
    dispatch(loadTeam(team.id));
  };
}
function loadTeamGroups() {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${team.id}/groups`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__/* .teamGroupsLoaded */ .iI)(response));
  };
}
function addTeamGroup(groupId) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/teams/${team.id}/groups`, {
      groupId: groupId
    });
    dispatch(loadTeamGroups());
  };
}
function removeTeamGroup(groupId) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/teams/${team.id}/groups/${encodeURIComponent(groupId)}`);
    dispatch(loadTeamGroups());
  };
}
function deleteTeam(id) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`/api/teams/${id}`); // Update users permissions in case they lost teams.read with the deletion

    await app_core_core__WEBPACK_IMPORTED_MODULE_2__/* .contextSrv.fetchUserPermissions */ .Vt.fetchUserPermissions();
    dispatch(loadTeams());
  };
}
function updateTeamMember(member) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/teams/${member.teamId}/members/${member.userId}`, {
      permission: member.permission
    });
    dispatch(loadTeamMembers());
  };
}

/***/ }),

/***/ "./public/app/features/teams/state/navModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ buildNavModel),
/* harmony export */   "o": () => (/* binding */ getTeamLoadingNav)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/Upgrade/ProBadge.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_features_admin_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/admin/utils.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");






const loadingTeam = {
  avatarUrl: 'public/img/user_profile.png',
  id: 1,
  name: 'Loading',
  email: 'loading',
  memberCount: 0,
  permission: app_types__WEBPACK_IMPORTED_MODULE_5__/* .TeamPermissionLevel.Member */ .hw.Member
};
function buildNavModel(team) {
  const navModel = {
    img: team.avatarUrl,
    id: 'team-' + team.id,
    subTitle: 'Manage members and settings',
    url: '',
    text: team.name,
    breadcrumbs: [{
      title: 'Teams',
      url: 'org/teams'
    }],
    children: [// With RBAC this tab will always be available (but not always editable)
    // With Legacy it will be hidden by hideTabsFromNonTeamAdmin should the user not be allowed to see it
    {
      active: false,
      icon: 'sliders-v-alt',
      id: `team-settings-${team.id}`,
      text: 'Settings',
      url: `org/teams/edit/${team.id}/settings`
    }]
  }; // While team is loading we leave the members tab
  // With RBAC the Members tab is available when user has ActionTeamsPermissionsRead for this team
  // With Legacy it will always be present

  if (team === loadingTeam || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__/* .contextSrv.hasPermissionInMetadata */ .Vt.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__/* .AccessControlAction.ActionTeamsPermissionsRead */ .bW.ActionTeamsPermissionsRead, team)) {
    navModel.children.unshift({
      active: false,
      icon: 'users-alt',
      id: `team-members-${team.id}`,
      text: 'Members',
      url: `org/teams/edit/${team.id}/members`
    });
  }

  const teamGroupSync = {
    active: false,
    icon: 'sync',
    id: `team-groupsync-${team.id}`,
    text: 'External group sync',
    url: `org/teams/edit/${team.id}/groupsync`
  };
  const isLoadingTeam = team === loadingTeam;

  if ((0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_4__/* .highlightTrial */ .d)()) {
    teamGroupSync.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_1__/* .ProBadge */ .Z)({
      experimentId: isLoadingTeam ? '' : 'feature-highlights-team-sync-badge',
      eventVariant: 'trial'
    });
  } // With both Legacy and RBAC the tab is protected being featureEnabled
  // While team is loading we leave the teamsync tab
  // With RBAC the External Group Sync tab is available when user has ActionTeamsPermissionsRead for this team


  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.featureEnabled)('teamsync')) {
    if (isLoadingTeam || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__/* .contextSrv.hasPermissionInMetadata */ .Vt.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__/* .AccessControlAction.ActionTeamsPermissionsRead */ .bW.ActionTeamsPermissionsRead, team)) {
      navModel.children.push(teamGroupSync);
    }
  } else if (app_core_config__WEBPACK_IMPORTED_MODULE_2__/* ["default"].featureToggles.featureHighlights */ .ZP.featureToggles.featureHighlights) {
    navModel.children.push(Object.assign({}, teamGroupSync, {
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_1__/* .ProBadge */ .Z)({
        experimentId: isLoadingTeam ? '' : 'feature-highlights-team-sync-badge'
      })
    }));
  }

  return navModel;
}
function getTeamLoadingNav(pageName) {
  const main = buildNavModel(loadingTeam);
  let node; // find active page

  for (const child of main.children) {
    if (child.id.indexOf(pageName) > 0) {
      child.active = true;
      node = child;
      break;
    }
  }

  return {
    main: main,
    node: node
  };
}

/***/ }),

/***/ "./public/app/features/teams/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JB": () => (/* binding */ getTeamGroups),
/* harmony export */   "LK": () => (/* binding */ getTeams),
/* harmony export */   "VP": () => (/* binding */ getTeam),
/* harmony export */   "YY": () => (/* binding */ getTeamMembers),
/* harmony export */   "_u": () => (/* binding */ getTeamsSearchPage),
/* harmony export */   "kC": () => (/* binding */ isPermissionTeamAdmin),
/* harmony export */   "uP": () => (/* binding */ getSearchQuery),
/* harmony export */   "v7": () => (/* binding */ getTeamsCount),
/* harmony export */   "vt": () => (/* binding */ isSignedInUserTeamAdmin),
/* harmony export */   "xc": () => (/* binding */ getSearchMemberQuery)
/* harmony export */ });
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/types/index.ts");

const getSearchQuery = state => state.searchQuery;
const getSearchMemberQuery = state => state.searchMemberQuery;
const getTeamGroups = state => state.groups;
const getTeamsCount = state => state.teams.length;
const getTeamsSearchPage = state => state.searchPage;
const getTeam = (state, currentTeamId) => {
  if (state.team.id === parseInt(currentTeamId, 10)) {
    return state.team;
  }

  return null;
};
const getTeams = state => {
  const regex = RegExp(state.searchQuery, 'i');
  return state.teams.filter(team => {
    return regex.test(team.name);
  });
};
const getTeamMembers = state => {
  const regex = RegExp(state.searchMemberQuery, 'i');
  return state.members.filter(member => {
    return regex.test(member.login) || regex.test(member.email) || regex.test(member.name);
  });
};
const isSignedInUserTeamAdmin = config => {
  const {
    members,
    signedInUser,
    editorsCanAdmin
  } = config;
  const userInMembers = members.find(m => m.userId === signedInUser.id);
  const permission = userInMembers ? userInMembers.permission : app_types__WEBPACK_IMPORTED_MODULE_0__/* .TeamPermissionLevel.Member */ .hw.Member;
  return isPermissionTeamAdmin({
    permission,
    signedInUser,
    editorsCanAdmin
  });
};
const isPermissionTeamAdmin = config => {
  const {
    permission,
    signedInUser,
    editorsCanAdmin
  } = config;
  const isAdmin = signedInUser.isGrafanaAdmin || signedInUser.orgRole === app_types__WEBPACK_IMPORTED_MODULE_0__/* .OrgRole.Admin */ .B5.Admin;
  const userIsTeamAdmin = permission === app_types__WEBPACK_IMPORTED_MODULE_0__/* .TeamPermissionLevel.Admin */ .hw.Admin;
  const isSignedInUserTeamAdmin = isAdmin || userIsTeamAdmin;
  return isSignedInUserTeamAdmin || !editorsCanAdmin;
};

/***/ })

}]);