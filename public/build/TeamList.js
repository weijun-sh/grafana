"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["TeamList"],{

/***/ "./public/app/core/components/RolePicker/TeamRolePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamRolePicker": () => (/* binding */ TeamRolePicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _RolePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/RolePicker/RolePicker.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const TeamRolePicker = ({
  teamId,
  orgId,
  roleOptions,
  disabled,
  builtinRolesDisabled
}) => {
  const [{
    loading,
    value: appliedRoles = []
  }, getTeamRoles] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(async () => {
    try {
      return await (0,_api__WEBPACK_IMPORTED_MODULE_2__.fetchTeamRoles)(teamId, orgId);
    } catch (e) {
      // TODO handle error
      console.error('Error loading options');
    }

    return [];
  }, [orgId, teamId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getTeamRoles();
  }, [orgId, teamId, getTeamRoles]);

  const onRolesChange = async roles => {
    await (0,_api__WEBPACK_IMPORTED_MODULE_2__.updateTeamRoles)(roles, teamId, orgId);
    await getTeamRoles();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_RolePicker__WEBPACK_IMPORTED_MODULE_1__.RolePicker, {
    onRolesChange: onRolesChange,
    roleOptions: roleOptions,
    appliedRoles: appliedRoles,
    isLoading: loading,
    disabled: disabled,
    builtinRolesDisabled: builtinRolesDisabled
  });
};

/***/ }),

/***/ "./public/app/core/components/connectWithCleanUp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectWithCleanUp": () => (/* binding */ connectWithCleanUp)
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
        dispatch((0,_actions_cleanUp__WEBPACK_IMPORTED_MODULE_3__.cleanUpAction)({
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlightTrial": () => (/* binding */ highlightTrial),
/* harmony export */   "isTrial": () => (/* binding */ isTrial)
/* harmony export */ });
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamList": () => (/* binding */ TeamList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_RolePicker_TeamRolePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/RolePicker/TeamRolePicker.tsx");
/* harmony import */ var app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _core_components_connectWithCleanUp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/connectWithCleanUp.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/teams/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/teams/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _th, _th2, _th3, _th4, _th5;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const pageLimit = 30;
class TeamList extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
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

    if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.licensedAccessControlEnabled() && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionRolesList)) {
      this.fetchRoleOptions();
    }
  }

  async fetchTeams() {
    await this.props.loadTeams();
  }

  async fetchRoleOptions() {
    const roleOptions = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_5__.fetchRoleOptions)();
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
    const isTeamAdmin = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.isPermissionTeamAdmin)({
      permission,
      editorsCanAdmin,
      signedInUser
    });
    const canDelete = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsDelete, team, isTeamAdmin);
    const canReadTeam = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsRead, team, isTeamAdmin);
    const canSeeTeamRoles = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsRolesList, team, false);
    const canUpdateTeamRoles = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsRolesAdd, false) || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsRolesRemove, false);
    const displayRolePicker = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.licensedAccessControlEnabled() && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsRolesList) && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionRolesList);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        className: "width-4 text-center link-td",
        children: canReadTeam ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
          href: teamUrl,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
            className: "filter-table__avatar",
            src: team.avatarUrl,
            alt: "Team avatar"
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
          className: "filter-table__avatar",
          src: team.avatarUrl,
          alt: "Team avatar"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        className: "link-td",
        children: canReadTeam ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
          href: teamUrl,
          children: team.name
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          style: {
            padding: '0px 8px'
          },
          children: team.name
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        className: "link-td",
        children: canReadTeam ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
          href: teamUrl,
          "aria-label": ((_team$email = team.email) === null || _team$email === void 0 ? void 0 : _team$email.length) > 0 ? undefined : 'Empty email cell',
          children: team.email
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          style: {
            padding: '0px 8px'
          },
          "aria-label": ((_team$email2 = team.email) === null || _team$email2 === void 0 ? void 0 : _team$email2.length) > 0 ? undefined : 'Empty email cell',
          children: team.email
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        className: "link-td",
        children: canReadTeam ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("a", {
          href: teamUrl,
          children: team.memberCount
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          style: {
            padding: '0px 8px'
          },
          children: team.memberCount
        })
      }), displayRolePicker && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        children: canSeeTeamRoles && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_RolePicker_TeamRolePicker__WEBPACK_IMPORTED_MODULE_4__.TeamRolePicker, {
          teamId: team.id,
          roleOptions: this.state.roleOptions,
          disabled: !canUpdateTeamRoles
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
        className: "text-right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.DeleteButton, {
          "aria-label": "Delete team",
          size: "sm",
          disabled: !canDelete,
          onConfirm: () => this.deleteTeam(team)
        })
      })]
    }, team.id);
  }

  renderEmptyList() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "You haven't created any teams yet.",
      buttonIcon: "users-alt",
      buttonLink: "org/teams/new",
      buttonTitle: " New team",
      buttonDisabled: !app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsCreate),
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
    const teamAdmin = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasRole('Admin') || editorsCanAdmin && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasRole('Editor');
    const canCreate = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsCreate, teamAdmin);
    const displayRolePicker = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.licensedAccessControlEnabled() && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionTeamsRolesList) && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.ActionRolesList);
    const newTeamHref = canCreate ? 'org/teams/new' : '#';
    const paginatedTeams = this.getPaginatedTeams(teams);
    const totalPages = Math.ceil(teams.length / pageLimit);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "page-action-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: "gf-form gf-form--grow",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FilterInput, {
            placeholder: "Search teams",
            value: searchQuery,
            onChange: this.onSearchQueryChange
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
          href: newTeamHref,
          disabled: !canCreate,
          children: "New Team"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "admin-list-table",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.VerticalGroup, {
          spacing: "md",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("table", {
            className: "filter-table filter-table--hover form-inline",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("tr", {
                children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Name"
                })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Email"
                })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Members"
                })), displayRolePicker && (_th5 || (_th5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Roles"
                }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  style: {
                    width: '1%'
                  }
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("tbody", {
              children: paginatedTeams.map(team => this.renderTeam(team))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
            justify: "flex-end",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
        isLoading: !hasFetched,
        children: this.renderList()
      })
    });
  }

}

function mapStateToProps(state) {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_7__.getNavModel)(state.navIndex, 'teams'),
    teams: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getTeams)(state.teams),
    searchQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getSearchQuery)(state.teams),
    searchPage: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getTeamsSearchPage)(state.teams),
    teamsCount: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getTeamsCount)(state.teams),
    hasFetched: state.teams.hasFetched,
    editorsCanAdmin: app_core_config__WEBPACK_IMPORTED_MODULE_6__.config.editorsCanAdmin,
    // this makes the feature toggle mockable/controllable from tests,
    signedInUser: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.user // this makes the feature toggle mockable/controllable from tests,

  };
}

const mapDispatchToProps = {
  loadTeams: _state_actions__WEBPACK_IMPORTED_MODULE_11__.loadTeams,
  deleteTeam: _state_actions__WEBPACK_IMPORTED_MODULE_11__.deleteTeam,
  setSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_12__.setSearchQuery,
  setTeamsSearchPage: _state_reducers__WEBPACK_IMPORTED_MODULE_12__.setTeamsSearchPage
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_core_components_connectWithCleanUp__WEBPACK_IMPORTED_MODULE_10__.connectWithCleanUp)(mapStateToProps, mapDispatchToProps, state => state.teams)(TeamList));

/***/ }),

/***/ "./public/app/features/teams/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTeamGroup": () => (/* binding */ addTeamGroup),
/* harmony export */   "addTeamMember": () => (/* binding */ addTeamMember),
/* harmony export */   "deleteTeam": () => (/* binding */ deleteTeam),
/* harmony export */   "loadTeam": () => (/* binding */ loadTeam),
/* harmony export */   "loadTeamGroups": () => (/* binding */ loadTeamGroups),
/* harmony export */   "loadTeamMembers": () => (/* binding */ loadTeamMembers),
/* harmony export */   "loadTeams": () => (/* binding */ loadTeams),
/* harmony export */   "removeTeamGroup": () => (/* binding */ removeTeamGroup),
/* harmony export */   "removeTeamMember": () => (/* binding */ removeTeamMember),
/* harmony export */   "updateTeam": () => (/* binding */ updateTeam),
/* harmony export */   "updateTeamMember": () => (/* binding */ updateTeamMember)
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
    if (!app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionTeamsRead)) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.teamsLoaded)([]));
      return;
    }

    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/teams/search', (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_3__.accessControlQueryParam)({
      perpage: 1000,
      page: 1
    }));
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.teamsLoaded)(response.teams));
  };
}
function loadTeam(id) {
  return async dispatch => {
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${id}`, (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_3__.accessControlQueryParam)());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.teamLoaded)(response));
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.updateNavIndex)((0,_navModel__WEBPACK_IMPORTED_MODULE_5__.buildNavModel)(response)));
  };
}
function loadTeamMembers() {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/teams/${team.id}/members`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.teamMembersLoaded)(response));
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
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.teamGroupsLoaded)(response));
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

    await app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.fetchUserPermissions();
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildNavModel": () => (/* binding */ buildNavModel),
/* harmony export */   "getTeamLoadingNav": () => (/* binding */ getTeamLoadingNav)
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
  permission: app_types__WEBPACK_IMPORTED_MODULE_5__.TeamPermissionLevel.Member
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

  if (team === loadingTeam || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
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

  if ((0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_4__.highlightTrial)()) {
    teamGroupSync.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_1__.ProBadge)({
      experimentId: isLoadingTeam ? '' : 'feature-highlights-team-sync-badge',
      eventVariant: 'trial'
    });
  } // With both Legacy and RBAC the tab is protected being featureEnabled
  // While team is loading we leave the teamsync tab
  // With RBAC the External Group Sync tab is available when user has ActionTeamsPermissionsRead for this team


  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.featureEnabled)('teamsync')) {
    if (isLoadingTeam || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
      navModel.children.push(teamGroupSync);
    }
  } else if (app_core_config__WEBPACK_IMPORTED_MODULE_2__["default"].featureToggles.featureHighlights) {
    navModel.children.push(Object.assign({}, teamGroupSync, {
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_1__.ProBadge)({
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSearchMemberQuery": () => (/* binding */ getSearchMemberQuery),
/* harmony export */   "getSearchQuery": () => (/* binding */ getSearchQuery),
/* harmony export */   "getTeam": () => (/* binding */ getTeam),
/* harmony export */   "getTeamGroups": () => (/* binding */ getTeamGroups),
/* harmony export */   "getTeamMembers": () => (/* binding */ getTeamMembers),
/* harmony export */   "getTeams": () => (/* binding */ getTeams),
/* harmony export */   "getTeamsCount": () => (/* binding */ getTeamsCount),
/* harmony export */   "getTeamsSearchPage": () => (/* binding */ getTeamsSearchPage),
/* harmony export */   "isPermissionTeamAdmin": () => (/* binding */ isPermissionTeamAdmin),
/* harmony export */   "isSignedInUserTeamAdmin": () => (/* binding */ isSignedInUserTeamAdmin)
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
  const permission = userInMembers ? userInMembers.permission : app_types__WEBPACK_IMPORTED_MODULE_0__.TeamPermissionLevel.Member;
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
  const isAdmin = signedInUser.isGrafanaAdmin || signedInUser.orgRole === app_types__WEBPACK_IMPORTED_MODULE_0__.OrgRole.Admin;
  const userIsTeamAdmin = permission === app_types__WEBPACK_IMPORTED_MODULE_0__.TeamPermissionLevel.Admin;
  const isSignedInUserTeamAdmin = isAdmin || userIsTeamAdmin;
  return isSignedInUserTeamAdmin || !editorsCanAdmin;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxPQUFPLEdBQUc1SCxZQUFZLENBQUM2SCxjQUFiLElBQStCN0gsWUFBWSxDQUFDOEgsT0FBYixLQUF5QnJCLG9EQUF4RTtBQUNBLFFBQU11QixlQUFlLEdBQUcvSCxVQUFVLEtBQUs2RSxnRUFBdkM7QUFDQSxRQUFNMEMsdUJBQXVCLEdBQUdJLE9BQU8sSUFBSUksZUFBM0M7QUFFQSxTQUFPUix1QkFBdUIsSUFBSSxDQUFDekgsZUFBbkM7QUFDRCxDQVBNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1JvbGVQaWNrZXIvVGVhbVJvbGVQaWNrZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9jb25uZWN0V2l0aENsZWFuVXAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL3V0aWxzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3RlYW1zL1RlYW1MaXN0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy90ZWFtcy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3RlYW1zL3N0YXRlL25hdk1vZGVsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3RlYW1zL3N0YXRlL3NlbGVjdG9ycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFzeW5jRm4gfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgUm9sZVBpY2tlciB9IGZyb20gJy4vUm9sZVBpY2tlcic7XG5pbXBvcnQgeyBmZXRjaFRlYW1Sb2xlcywgdXBkYXRlVGVhbVJvbGVzIH0gZnJvbSAnLi9hcGknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgdGVhbUlkOiBudW1iZXI7XG4gIG9yZ0lkPzogbnVtYmVyO1xuICByb2xlT3B0aW9uczogUm9sZVtdO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGJ1aWx0aW5Sb2xlc0Rpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFRlYW1Sb2xlUGlja2VyOiBGQzxQcm9wcz4gPSAoeyB0ZWFtSWQsIG9yZ0lkLCByb2xlT3B0aW9ucywgZGlzYWJsZWQsIGJ1aWx0aW5Sb2xlc0Rpc2FibGVkIH0pID0+IHtcbiAgY29uc3QgW3sgbG9hZGluZywgdmFsdWU6IGFwcGxpZWRSb2xlcyA9IFtdIH0sIGdldFRlYW1Sb2xlc10gPSB1c2VBc3luY0ZuKGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IGZldGNoVGVhbVJvbGVzKHRlYW1JZCwgb3JnSWQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFRPRE8gaGFuZGxlIGVycm9yXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIG9wdGlvbnMnKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9LCBbb3JnSWQsIHRlYW1JZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VGVhbVJvbGVzKCk7XG4gIH0sIFtvcmdJZCwgdGVhbUlkLCBnZXRUZWFtUm9sZXNdKTtcblxuICBjb25zdCBvblJvbGVzQ2hhbmdlID0gYXN5bmMgKHJvbGVzOiBzdHJpbmdbXSkgPT4ge1xuICAgIGF3YWl0IHVwZGF0ZVRlYW1Sb2xlcyhyb2xlcywgdGVhbUlkLCBvcmdJZCk7XG4gICAgYXdhaXQgZ2V0VGVhbVJvbGVzKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Um9sZVBpY2tlclxuICAgICAgb25Sb2xlc0NoYW5nZT17b25Sb2xlc0NoYW5nZX1cbiAgICAgIHJvbGVPcHRpb25zPXtyb2xlT3B0aW9uc31cbiAgICAgIGFwcGxpZWRSb2xlcz17YXBwbGllZFJvbGVzfVxuICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgYnVpbHRpblJvbGVzRGlzYWJsZWQ9e2J1aWx0aW5Sb2xlc0Rpc2FibGVkfVxuICAgIC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRUeXBlLCBGdW5jdGlvbkNvbXBvbmVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgTWFwRGlzcGF0Y2hUb1Byb3BzUGFyYW0sIE1hcFN0YXRlVG9Qcm9wc1BhcmFtLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgY2xlYW5VcEFjdGlvbiwgU3RhdGVTZWxlY3RvciB9IGZyb20gJy4uL2FjdGlvbnMvY2xlYW5VcCc7XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0V2l0aENsZWFuVXAgPVxuICA8XG4gICAgVFN0YXRlUHJvcHMgZXh0ZW5kcyB7fSA9IHt9LFxuICAgIFREaXNwYXRjaFByb3BzID0ge30sXG4gICAgVE93blByb3BzID0ge30sXG4gICAgU3RhdGUgPSB7fSxcbiAgICBUU2VsZWN0b3IgZXh0ZW5kcyBvYmplY3QgPSB7fSxcbiAgICBTdGF0aWNzID0ge31cbiAgPihcbiAgICBtYXBTdGF0ZVRvUHJvcHM6IE1hcFN0YXRlVG9Qcm9wc1BhcmFtPFRTdGF0ZVByb3BzLCBUT3duUHJvcHMsIFN0YXRlPixcbiAgICBtYXBEaXNwYXRjaFRvUHJvcHM6IE1hcERpc3BhdGNoVG9Qcm9wc1BhcmFtPFREaXNwYXRjaFByb3BzLCBUT3duUHJvcHM+LFxuICAgIHN0YXRlU2VsZWN0b3I6IFN0YXRlU2VsZWN0b3I8VFNlbGVjdG9yPlxuICApID0+XG4gIChDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8YW55PikgPT4ge1xuICAgIGNvbnN0IENvbm5lY3RlZENvbXBvbmVudCA9IGNvbm5lY3QoXG4gICAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgICBtYXBEaXNwYXRjaFRvUHJvcHNcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICApKENvbXBvbmVudCk7XG5cbiAgICBjb25zdCBDb25uZWN0ZWRDb21wb25lbnRXaXRoQ2xlYW5VcDogRnVuY3Rpb25Db21wb25lbnQgPSAocHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBjbGVhblVwKCkge1xuICAgICAgICAgIGRpc3BhdGNoKGNsZWFuVXBBY3Rpb24oeyBzdGF0ZVNlbGVjdG9yIH0pKTtcbiAgICAgICAgfTtcbiAgICAgIH0sIFtkaXNwYXRjaF0pO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmV0dXJuIDxDb25uZWN0ZWRDb21wb25lbnQgey4uLnByb3BzfSAvPjtcbiAgICB9O1xuXG4gICAgQ29ubmVjdGVkQ29tcG9uZW50V2l0aENsZWFuVXAuZGlzcGxheU5hbWUgPSBgQ29ubmVjdFdpdGhDbGVhblVwKCR7Q29ubmVjdGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lfSlgO1xuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKENvbm5lY3RlZENvbXBvbmVudFdpdGhDbGVhblVwLCBDb21wb25lbnQpO1xuICAgIHR5cGUgSG9pc3RlZCA9IHR5cGVvZiBDb25uZWN0ZWRDb21wb25lbnRXaXRoQ2xlYW5VcCAmIFN0YXRpY3M7XG5cbiAgICByZXR1cm4gQ29ubmVjdGVkQ29tcG9uZW50V2l0aENsZWFuVXAgYXMgSG9pc3RlZDtcbiAgfTtcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJpYWwoKSB7XG4gIGNvbnN0IGV4cGlyeSA9IGNvbmZpZy5saWNlbnNlSW5mbz8udHJpYWxFeHBpcnk7XG4gIHJldHVybiAhIShleHBpcnkgJiYgZXhwaXJ5ID4gMCk7XG59XG5cbmV4cG9ydCBjb25zdCBoaWdobGlnaHRUcmlhbCA9ICgpID0+IGlzVHJpYWwoKSAmJiBjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERlbGV0ZUJ1dHRvbiwgTGlua0J1dHRvbiwgRmlsdGVySW5wdXQsIFZlcnRpY2FsR3JvdXAsIEhvcml6b250YWxHcm91cCwgUGFnaW5hdGlvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBFbXB0eUxpc3RDVEEgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9FbXB0eUxpc3RDVEEvRW1wdHlMaXN0Q1RBJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IFRlYW1Sb2xlUGlja2VyIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9Sb2xlUGlja2VyL1RlYW1Sb2xlUGlja2VyJztcbmltcG9ydCB7IGZldGNoUm9sZU9wdGlvbnMgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1JvbGVQaWNrZXIvYXBpJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBjb250ZXh0U3J2LCBVc2VyIH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiwgUm9sZSwgU3RvcmVTdGF0ZSwgVGVhbSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGNvbm5lY3RXaXRoQ2xlYW5VcCB9IGZyb20gJy4uLy4uL2NvcmUvY29tcG9uZW50cy9jb25uZWN0V2l0aENsZWFuVXAnO1xuXG5pbXBvcnQgeyBkZWxldGVUZWFtLCBsb2FkVGVhbXMgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2V0U2VhcmNoUXVlcnksIHNldFRlYW1zU2VhcmNoUGFnZSB9IGZyb20gJy4vc3RhdGUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgZ2V0U2VhcmNoUXVlcnksIGdldFRlYW1zLCBnZXRUZWFtc0NvdW50LCBnZXRUZWFtc1NlYXJjaFBhZ2UsIGlzUGVybWlzc2lvblRlYW1BZG1pbiB9IGZyb20gJy4vc3RhdGUvc2VsZWN0b3JzJztcblxuY29uc3QgcGFnZUxpbWl0ID0gMzA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG4gIHRlYW1zOiBUZWFtW107XG4gIHNlYXJjaFF1ZXJ5OiBzdHJpbmc7XG4gIHNlYXJjaFBhZ2U6IG51bWJlcjtcbiAgdGVhbXNDb3VudDogbnVtYmVyO1xuICBoYXNGZXRjaGVkOiBib29sZWFuO1xuICBsb2FkVGVhbXM6IHR5cGVvZiBsb2FkVGVhbXM7XG4gIGRlbGV0ZVRlYW06IHR5cGVvZiBkZWxldGVUZWFtO1xuICBzZXRTZWFyY2hRdWVyeTogdHlwZW9mIHNldFNlYXJjaFF1ZXJ5O1xuICBzZXRUZWFtc1NlYXJjaFBhZ2U6IHR5cGVvZiBzZXRUZWFtc1NlYXJjaFBhZ2U7XG4gIGVkaXRvcnNDYW5BZG1pbjogYm9vbGVhbjtcbiAgc2lnbmVkSW5Vc2VyOiBVc2VyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgcm9sZU9wdGlvbnM6IFJvbGVbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFRlYW1MaXN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHJvbGVPcHRpb25zOiBbXSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaFRlYW1zKCk7XG4gICAgaWYgKGNvbnRleHRTcnYubGljZW5zZWRBY2Nlc3NDb250cm9sRW5hYmxlZCgpICYmIGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblJvbGVzTGlzdCkpIHtcbiAgICAgIHRoaXMuZmV0Y2hSb2xlT3B0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZldGNoVGVhbXMoKSB7XG4gICAgYXdhaXQgdGhpcy5wcm9wcy5sb2FkVGVhbXMoKTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoUm9sZU9wdGlvbnMoKSB7XG4gICAgY29uc3Qgcm9sZU9wdGlvbnMgPSBhd2FpdCBmZXRjaFJvbGVPcHRpb25zKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJvbGVPcHRpb25zIH0pO1xuICB9XG5cbiAgZGVsZXRlVGVhbSA9ICh0ZWFtOiBUZWFtKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5kZWxldGVUZWFtKHRlYW0uaWQpO1xuICB9O1xuXG4gIG9uU2VhcmNoUXVlcnlDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0U2VhcmNoUXVlcnkodmFsdWUpO1xuICB9O1xuXG4gIHJlbmRlclRlYW0odGVhbTogVGVhbSkge1xuICAgIGNvbnN0IHsgZWRpdG9yc0NhbkFkbWluLCBzaWduZWRJblVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcGVybWlzc2lvbiA9IHRlYW0ucGVybWlzc2lvbjtcbiAgICBjb25zdCB0ZWFtVXJsID0gYG9yZy90ZWFtcy9lZGl0LyR7dGVhbS5pZH1gO1xuICAgIGNvbnN0IGlzVGVhbUFkbWluID0gaXNQZXJtaXNzaW9uVGVhbUFkbWluKHsgcGVybWlzc2lvbiwgZWRpdG9yc0NhbkFkbWluLCBzaWduZWRJblVzZXIgfSk7XG4gICAgY29uc3QgY2FuRGVsZXRlID0gY29udGV4dFNydi5oYXNBY2Nlc3NJbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNEZWxldGUsIHRlYW0sIGlzVGVhbUFkbWluKTtcbiAgICBjb25zdCBjYW5SZWFkVGVhbSA9IGNvbnRleHRTcnYuaGFzQWNjZXNzSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUmVhZCwgdGVhbSwgaXNUZWFtQWRtaW4pO1xuICAgIGNvbnN0IGNhblNlZVRlYW1Sb2xlcyA9IGNvbnRleHRTcnYuaGFzQWNjZXNzSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUm9sZXNMaXN0LCB0ZWFtLCBmYWxzZSk7XG4gICAgY29uc3QgY2FuVXBkYXRlVGVhbVJvbGVzID1cbiAgICAgIGNvbnRleHRTcnYuaGFzQWNjZXNzKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNSb2xlc0FkZCwgZmFsc2UpIHx8XG4gICAgICBjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUm9sZXNSZW1vdmUsIGZhbHNlKTtcbiAgICBjb25zdCBkaXNwbGF5Um9sZVBpY2tlciA9XG4gICAgICBjb250ZXh0U3J2LmxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQoKSAmJlxuICAgICAgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNSb2xlc0xpc3QpICYmXG4gICAgICBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25Sb2xlc0xpc3QpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e3RlYW0uaWR9PlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2lkdGgtNCB0ZXh0LWNlbnRlciBsaW5rLXRkXCI+XG4gICAgICAgICAge2NhblJlYWRUZWFtID8gKFxuICAgICAgICAgICAgPGEgaHJlZj17dGVhbVVybH0+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlX19hdmF0YXJcIiBzcmM9e3RlYW0uYXZhdGFyVXJsfSBhbHQ9XCJUZWFtIGF2YXRhclwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlX19hdmF0YXJcIiBzcmM9e3RlYW0uYXZhdGFyVXJsfSBhbHQ9XCJUZWFtIGF2YXRhclwiIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGRcIj5cbiAgICAgICAgICB7Y2FuUmVhZFRlYW0gPyA8YSBocmVmPXt0ZWFtVXJsfT57dGVhbS5uYW1lfTwvYT4gOiA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggOHB4JyB9fT57dGVhbS5uYW1lfTwvZGl2Pn1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxpbmstdGRcIj5cbiAgICAgICAgICB7Y2FuUmVhZFRlYW0gPyAoXG4gICAgICAgICAgICA8YSBocmVmPXt0ZWFtVXJsfSBhcmlhLWxhYmVsPXt0ZWFtLmVtYWlsPy5sZW5ndGggPiAwID8gdW5kZWZpbmVkIDogJ0VtcHR5IGVtYWlsIGNlbGwnfT5cbiAgICAgICAgICAgICAge3RlYW0uZW1haWx9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzBweCA4cHgnIH19IGFyaWEtbGFiZWw9e3RlYW0uZW1haWw/Lmxlbmd0aCA+IDAgPyB1bmRlZmluZWQgOiAnRW1wdHkgZW1haWwgY2VsbCd9PlxuICAgICAgICAgICAgICB7dGVhbS5lbWFpbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsaW5rLXRkXCI+XG4gICAgICAgICAge2NhblJlYWRUZWFtID8gKFxuICAgICAgICAgICAgPGEgaHJlZj17dGVhbVVybH0+e3RlYW0ubWVtYmVyQ291bnR9PC9hPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcwcHggOHB4JyB9fT57dGVhbS5tZW1iZXJDb3VudH08L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L3RkPlxuICAgICAgICB7ZGlzcGxheVJvbGVQaWNrZXIgJiYgKFxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIHtjYW5TZWVUZWFtUm9sZXMgJiYgKFxuICAgICAgICAgICAgICA8VGVhbVJvbGVQaWNrZXIgdGVhbUlkPXt0ZWFtLmlkfSByb2xlT3B0aW9ucz17dGhpcy5zdGF0ZS5yb2xlT3B0aW9uc30gZGlzYWJsZWQ9eyFjYW5VcGRhdGVUZWFtUm9sZXN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICl9XG4gICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgPERlbGV0ZUJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkRlbGV0ZSB0ZWFtXCJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICBkaXNhYmxlZD17IWNhbkRlbGV0ZX1cbiAgICAgICAgICAgIG9uQ29uZmlybT17KCkgPT4gdGhpcy5kZWxldGVUZWFtKHRlYW0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJFbXB0eUxpc3QoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxFbXB0eUxpc3RDVEFcbiAgICAgICAgdGl0bGU9XCJZb3UgaGF2ZW4ndCBjcmVhdGVkIGFueSB0ZWFtcyB5ZXQuXCJcbiAgICAgICAgYnV0dG9uSWNvbj1cInVzZXJzLWFsdFwiXG4gICAgICAgIGJ1dHRvbkxpbms9XCJvcmcvdGVhbXMvbmV3XCJcbiAgICAgICAgYnV0dG9uVGl0bGU9XCIgTmV3IHRlYW1cIlxuICAgICAgICBidXR0b25EaXNhYmxlZD17IWNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zQ3JlYXRlKX1cbiAgICAgICAgcHJvVGlwPVwiQXNzaWduIGZvbGRlciBhbmQgZGFzaGJvYXJkIHBlcm1pc3Npb25zIHRvIHRlYW1zIGluc3RlYWQgb2YgdXNlcnMgdG8gZWFzZSBhZG1pbmlzdHJhdGlvbi5cIlxuICAgICAgICBwcm9UaXBMaW5rPVwiXCJcbiAgICAgICAgcHJvVGlwTGlua1RpdGxlPVwiXCJcbiAgICAgICAgcHJvVGlwVGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIGdldFBhZ2luYXRlZFRlYW1zID0gKHRlYW1zOiBUZWFtW10pID0+IHtcbiAgICBjb25zdCBvZmZzZXQgPSAodGhpcy5wcm9wcy5zZWFyY2hQYWdlIC0gMSkgKiBwYWdlTGltaXQ7XG4gICAgcmV0dXJuIHRlYW1zLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgcGFnZUxpbWl0KTtcbiAgfTtcblxuICByZW5kZXJUZWFtTGlzdCgpIHtcbiAgICBjb25zdCB7IHRlYW1zLCBzZWFyY2hRdWVyeSwgZWRpdG9yc0NhbkFkbWluLCBzZWFyY2hQYWdlLCBzZXRUZWFtc1NlYXJjaFBhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdGVhbUFkbWluID0gY29udGV4dFNydi5oYXNSb2xlKCdBZG1pbicpIHx8IChlZGl0b3JzQ2FuQWRtaW4gJiYgY29udGV4dFNydi5oYXNSb2xlKCdFZGl0b3InKSk7XG4gICAgY29uc3QgY2FuQ3JlYXRlID0gY29udGV4dFNydi5oYXNBY2Nlc3MoQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc0NyZWF0ZSwgdGVhbUFkbWluKTtcbiAgICBjb25zdCBkaXNwbGF5Um9sZVBpY2tlciA9XG4gICAgICBjb250ZXh0U3J2LmxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQoKSAmJlxuICAgICAgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNSb2xlc0xpc3QpICYmXG4gICAgICBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25Sb2xlc0xpc3QpO1xuICAgIGNvbnN0IG5ld1RlYW1IcmVmID0gY2FuQ3JlYXRlID8gJ29yZy90ZWFtcy9uZXcnIDogJyMnO1xuICAgIGNvbnN0IHBhZ2luYXRlZFRlYW1zID0gdGhpcy5nZXRQYWdpbmF0ZWRUZWFtcyh0ZWFtcyk7XG4gICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0ZWFtcy5sZW5ndGggLyBwYWdlTGltaXQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cbiAgICAgICAgICAgIDxGaWx0ZXJJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCB0ZWFtc1wiIHZhbHVlPXtzZWFyY2hRdWVyeX0gb25DaGFuZ2U9e3RoaXMub25TZWFyY2hRdWVyeUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxMaW5rQnV0dG9uIGhyZWY9e25ld1RlYW1IcmVmfSBkaXNhYmxlZD17IWNhbkNyZWF0ZX0+XG4gICAgICAgICAgICBOZXcgVGVhbVxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1saXN0LXRhYmxlXCI+XG4gICAgICAgICAgPFZlcnRpY2FsR3JvdXAgc3BhY2luZz1cIm1kXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlIGZpbHRlci10YWJsZS0taG92ZXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aCAvPlxuICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5NZW1iZXJzPC90aD5cbiAgICAgICAgICAgICAgICAgIHtkaXNwbGF5Um9sZVBpY2tlciAmJiA8dGg+Um9sZXM8L3RoPn1cbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzElJyB9fSAvPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgIDx0Ym9keT57cGFnaW5hdGVkVGVhbXMubWFwKCh0ZWFtKSA9PiB0aGlzLnJlbmRlclRlYW0odGVhbSkpfTwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPEhvcml6b250YWxHcm91cCBqdXN0aWZ5PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRlPXtzZXRUZWFtc1NlYXJjaFBhZ2V9XG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e3NlYXJjaFBhZ2V9XG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZQYWdlcz17dG90YWxQYWdlc31cbiAgICAgICAgICAgICAgICBoaWRlV2hlblNpbmdsZVBhZ2U9e3RydWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckxpc3QoKSB7XG4gICAgY29uc3QgeyB0ZWFtc0NvdW50LCBoYXNGZXRjaGVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFoYXNGZXRjaGVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGVhbXNDb3VudCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclRlYW1MaXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckVtcHR5TGlzdCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhhc0ZldGNoZWQsIG5hdk1vZGVsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17IWhhc0ZldGNoZWR9Pnt0aGlzLnJlbmRlckxpc3QoKX08L1BhZ2UuQ29udGVudHM+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFN0b3JlU3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICd0ZWFtcycpLFxuICAgIHRlYW1zOiBnZXRUZWFtcyhzdGF0ZS50ZWFtcyksXG4gICAgc2VhcmNoUXVlcnk6IGdldFNlYXJjaFF1ZXJ5KHN0YXRlLnRlYW1zKSxcbiAgICBzZWFyY2hQYWdlOiBnZXRUZWFtc1NlYXJjaFBhZ2Uoc3RhdGUudGVhbXMpLFxuICAgIHRlYW1zQ291bnQ6IGdldFRlYW1zQ291bnQoc3RhdGUudGVhbXMpLFxuICAgIGhhc0ZldGNoZWQ6IHN0YXRlLnRlYW1zLmhhc0ZldGNoZWQsXG4gICAgZWRpdG9yc0NhbkFkbWluOiBjb25maWcuZWRpdG9yc0NhbkFkbWluLCAvLyB0aGlzIG1ha2VzIHRoZSBmZWF0dXJlIHRvZ2dsZSBtb2NrYWJsZS9jb250cm9sbGFibGUgZnJvbSB0ZXN0cyxcbiAgICBzaWduZWRJblVzZXI6IGNvbnRleHRTcnYudXNlciwgLy8gdGhpcyBtYWtlcyB0aGUgZmVhdHVyZSB0b2dnbGUgbW9ja2FibGUvY29udHJvbGxhYmxlIGZyb20gdGVzdHMsXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgbG9hZFRlYW1zLFxuICBkZWxldGVUZWFtLFxuICBzZXRTZWFyY2hRdWVyeSxcbiAgc2V0VGVhbXNTZWFyY2hQYWdlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdFdpdGhDbGVhblVwKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCAoc3RhdGUpID0+IHN0YXRlLnRlYW1zKShUZWFtTGlzdCk7XG4iLCJpbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB1cGRhdGVOYXZJbmRleCB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0gfSBmcm9tICdhcHAvY29yZS91dGlscy9hY2Nlc3NDb250cm9sJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFRlYW1NZW1iZXIsIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgYnVpbGROYXZNb2RlbCB9IGZyb20gJy4vbmF2TW9kZWwnO1xuaW1wb3J0IHsgdGVhbUdyb3Vwc0xvYWRlZCwgdGVhbUxvYWRlZCwgdGVhbU1lbWJlcnNMb2FkZWQsIHRlYW1zTG9hZGVkIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGVhbXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgLy8gRWFybHkgcmV0dXJuIGlmIHRoZSB1c2VyIGNhbm5vdCBsaXN0IHRlYW1zXG4gICAgaWYgKCFjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1JlYWQpKSB7XG4gICAgICBkaXNwYXRjaCh0ZWFtc0xvYWRlZChbXSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChcbiAgICAgICcvYXBpL3RlYW1zL3NlYXJjaCcsXG4gICAgICBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSh7IHBlcnBhZ2U6IDEwMDAsIHBhZ2U6IDEgfSlcbiAgICApO1xuICAgIGRpc3BhdGNoKHRlYW1zTG9hZGVkKHJlc3BvbnNlLnRlYW1zKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGVhbShpZDogbnVtYmVyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL3RlYW1zLyR7aWR9YCwgYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0oKSk7XG4gICAgZGlzcGF0Y2godGVhbUxvYWRlZChyZXNwb25zZSkpO1xuICAgIGRpc3BhdGNoKHVwZGF0ZU5hdkluZGV4KGJ1aWxkTmF2TW9kZWwocmVzcG9uc2UpKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGVhbU1lbWJlcnMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IHRlYW0gPSBnZXRTdG9yZSgpLnRlYW0udGVhbTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvdGVhbXMvJHt0ZWFtLmlkfS9tZW1iZXJzYCk7XG4gICAgZGlzcGF0Y2godGVhbU1lbWJlcnNMb2FkZWQocmVzcG9uc2UpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRlYW1NZW1iZXIoaWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoYC9hcGkvdGVhbXMvJHt0ZWFtLmlkfS9tZW1iZXJzYCwgeyB1c2VySWQ6IGlkIH0pO1xuICAgIGRpc3BhdGNoKGxvYWRUZWFtTWVtYmVycygpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRlYW1NZW1iZXIoaWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS90ZWFtcy8ke3RlYW0uaWR9L21lbWJlcnMvJHtpZH1gKTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbU1lbWJlcnMoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUZWFtKG5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS90ZWFtcy8ke3RlYW0uaWR9YCwgeyBuYW1lLCBlbWFpbCB9KTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbSh0ZWFtLmlkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGVhbUdyb3VwcygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgdGVhbSA9IGdldFN0b3JlKCkudGVhbS50ZWFtO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChgL2FwaS90ZWFtcy8ke3RlYW0uaWR9L2dyb3Vwc2ApO1xuICAgIGRpc3BhdGNoKHRlYW1Hcm91cHNMb2FkZWQocmVzcG9uc2UpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRlYW1Hcm91cChncm91cElkOiBzdHJpbmcpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgdGVhbSA9IGdldFN0b3JlKCkudGVhbS50ZWFtO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KGAvYXBpL3RlYW1zLyR7dGVhbS5pZH0vZ3JvdXBzYCwgeyBncm91cElkOiBncm91cElkIH0pO1xuICAgIGRpc3BhdGNoKGxvYWRUZWFtR3JvdXBzKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGVhbUdyb3VwKGdyb3VwSWQ6IHN0cmluZyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS90ZWFtcy8ke3RlYW0uaWR9L2dyb3Vwcy8ke2VuY29kZVVSSUNvbXBvbmVudChncm91cElkKX1gKTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbUdyb3VwcygpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRlYW0oaWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoYC9hcGkvdGVhbXMvJHtpZH1gKTtcbiAgICAvLyBVcGRhdGUgdXNlcnMgcGVybWlzc2lvbnMgaW4gY2FzZSB0aGV5IGxvc3QgdGVhbXMucmVhZCB3aXRoIHRoZSBkZWxldGlvblxuICAgIGF3YWl0IGNvbnRleHRTcnYuZmV0Y2hVc2VyUGVybWlzc2lvbnMoKTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbXMoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUZWFtTWVtYmVyKG1lbWJlcjogVGVhbU1lbWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvdGVhbXMvJHttZW1iZXIudGVhbUlkfS9tZW1iZXJzLyR7bWVtYmVyLnVzZXJJZH1gLCB7XG4gICAgICBwZXJtaXNzaW9uOiBtZW1iZXIucGVybWlzc2lvbixcbiAgICB9KTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbU1lbWJlcnMoKSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBOYXZNb2RlbEl0ZW0sIE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUHJvQmFkZ2UgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1VwZ3JhZGUvUHJvQmFkZ2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IGhpZ2hsaWdodFRyaWFsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FkbWluL3V0aWxzJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFRlYW0sIFRlYW1QZXJtaXNzaW9uTGV2ZWwgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5jb25zdCBsb2FkaW5nVGVhbSA9IHtcbiAgYXZhdGFyVXJsOiAncHVibGljL2ltZy91c2VyX3Byb2ZpbGUucG5nJyxcbiAgaWQ6IDEsXG4gIG5hbWU6ICdMb2FkaW5nJyxcbiAgZW1haWw6ICdsb2FkaW5nJyxcbiAgbWVtYmVyQ291bnQ6IDAsXG4gIHBlcm1pc3Npb246IFRlYW1QZXJtaXNzaW9uTGV2ZWwuTWVtYmVyLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTmF2TW9kZWwodGVhbTogVGVhbSk6IE5hdk1vZGVsSXRlbSB7XG4gIGNvbnN0IG5hdk1vZGVsOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgaW1nOiB0ZWFtLmF2YXRhclVybCxcbiAgICBpZDogJ3RlYW0tJyArIHRlYW0uaWQsXG4gICAgc3ViVGl0bGU6ICdNYW5hZ2UgbWVtYmVycyBhbmQgc2V0dGluZ3MnLFxuICAgIHVybDogJycsXG4gICAgdGV4dDogdGVhbS5uYW1lLFxuICAgIGJyZWFkY3J1bWJzOiBbeyB0aXRsZTogJ1RlYW1zJywgdXJsOiAnb3JnL3RlYW1zJyB9XSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgLy8gV2l0aCBSQkFDIHRoaXMgdGFiIHdpbGwgYWx3YXlzIGJlIGF2YWlsYWJsZSAoYnV0IG5vdCBhbHdheXMgZWRpdGFibGUpXG4gICAgICAvLyBXaXRoIExlZ2FjeSBpdCB3aWxsIGJlIGhpZGRlbiBieSBoaWRlVGFic0Zyb21Ob25UZWFtQWRtaW4gc2hvdWxkIHRoZSB1c2VyIG5vdCBiZSBhbGxvd2VkIHRvIHNlZSBpdFxuICAgICAge1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBpY29uOiAnc2xpZGVycy12LWFsdCcsXG4gICAgICAgIGlkOiBgdGVhbS1zZXR0aW5ncy0ke3RlYW0uaWR9YCxcbiAgICAgICAgdGV4dDogJ1NldHRpbmdzJyxcbiAgICAgICAgdXJsOiBgb3JnL3RlYW1zL2VkaXQvJHt0ZWFtLmlkfS9zZXR0aW5nc2AsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgLy8gV2hpbGUgdGVhbSBpcyBsb2FkaW5nIHdlIGxlYXZlIHRoZSBtZW1iZXJzIHRhYlxuICAvLyBXaXRoIFJCQUMgdGhlIE1lbWJlcnMgdGFiIGlzIGF2YWlsYWJsZSB3aGVuIHVzZXIgaGFzIEFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkIGZvciB0aGlzIHRlYW1cbiAgLy8gV2l0aCBMZWdhY3kgaXQgd2lsbCBhbHdheXMgYmUgcHJlc2VudFxuICBpZiAoXG4gICAgdGVhbSA9PT0gbG9hZGluZ1RlYW0gfHxcbiAgICBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNQZXJtaXNzaW9uc1JlYWQsIHRlYW0pXG4gICkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS51bnNoaWZ0KHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBpY29uOiAndXNlcnMtYWx0JyxcbiAgICAgIGlkOiBgdGVhbS1tZW1iZXJzLSR7dGVhbS5pZH1gLFxuICAgICAgdGV4dDogJ01lbWJlcnMnLFxuICAgICAgdXJsOiBgb3JnL3RlYW1zL2VkaXQvJHt0ZWFtLmlkfS9tZW1iZXJzYCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHRlYW1Hcm91cFN5bmM6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdzeW5jJyxcbiAgICBpZDogYHRlYW0tZ3JvdXBzeW5jLSR7dGVhbS5pZH1gLFxuICAgIHRleHQ6ICdFeHRlcm5hbCBncm91cCBzeW5jJyxcbiAgICB1cmw6IGBvcmcvdGVhbXMvZWRpdC8ke3RlYW0uaWR9L2dyb3Vwc3luY2AsXG4gIH07XG5cbiAgY29uc3QgaXNMb2FkaW5nVGVhbSA9IHRlYW0gPT09IGxvYWRpbmdUZWFtO1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpKSB7XG4gICAgdGVhbUdyb3VwU3luYy50YWJTdWZmaXggPSAoKSA9PlxuICAgICAgUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGlzTG9hZGluZ1RlYW0gPyAnJyA6ICdmZWF0dXJlLWhpZ2hsaWdodHMtdGVhbS1zeW5jLWJhZGdlJywgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgLy8gV2l0aCBib3RoIExlZ2FjeSBhbmQgUkJBQyB0aGUgdGFiIGlzIHByb3RlY3RlZCBiZWluZyBmZWF0dXJlRW5hYmxlZFxuICAvLyBXaGlsZSB0ZWFtIGlzIGxvYWRpbmcgd2UgbGVhdmUgdGhlIHRlYW1zeW5jIHRhYlxuICAvLyBXaXRoIFJCQUMgdGhlIEV4dGVybmFsIEdyb3VwIFN5bmMgdGFiIGlzIGF2YWlsYWJsZSB3aGVuIHVzZXIgaGFzIEFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkIGZvciB0aGlzIHRlYW1cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCd0ZWFtc3luYycpKSB7XG4gICAgaWYgKGlzTG9hZGluZ1RlYW0gfHwgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkLCB0ZWFtKSkge1xuICAgICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2godGVhbUdyb3VwU3luYyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cykge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLnRlYW1Hcm91cFN5bmMsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBpc0xvYWRpbmdUZWFtID8gJycgOiAnZmVhdHVyZS1oaWdobGlnaHRzLXRlYW0tc3luYy1iYWRnZScgfSksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmF2TW9kZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZWFtTG9hZGluZ05hdihwYWdlTmFtZTogc3RyaW5nKTogTmF2TW9kZWwge1xuICBjb25zdCBtYWluID0gYnVpbGROYXZNb2RlbChsb2FkaW5nVGVhbSk7XG5cbiAgbGV0IG5vZGU6IE5hdk1vZGVsSXRlbTtcblxuICAvLyBmaW5kIGFjdGl2ZSBwYWdlXG4gIGZvciAoY29uc3QgY2hpbGQgb2YgbWFpbi5jaGlsZHJlbiEpIHtcbiAgICBpZiAoY2hpbGQuaWQhLmluZGV4T2YocGFnZU5hbWUpID4gMCkge1xuICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIG5vZGUgPSBjaGlsZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWFpbjogbWFpbixcbiAgICBub2RlOiBub2RlISxcbiAgfTtcbn1cbiIsImltcG9ydCB7IFVzZXIgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBUZWFtLCBUZWFtc1N0YXRlLCBUZWFtU3RhdGUsIFRlYW1NZW1iZXIsIE9yZ1JvbGUsIFRlYW1QZXJtaXNzaW9uTGV2ZWwgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VhcmNoUXVlcnkgPSAoc3RhdGU6IFRlYW1zU3RhdGUpID0+IHN0YXRlLnNlYXJjaFF1ZXJ5O1xuZXhwb3J0IGNvbnN0IGdldFNlYXJjaE1lbWJlclF1ZXJ5ID0gKHN0YXRlOiBUZWFtU3RhdGUpID0+IHN0YXRlLnNlYXJjaE1lbWJlclF1ZXJ5O1xuZXhwb3J0IGNvbnN0IGdldFRlYW1Hcm91cHMgPSAoc3RhdGU6IFRlYW1TdGF0ZSkgPT4gc3RhdGUuZ3JvdXBzO1xuZXhwb3J0IGNvbnN0IGdldFRlYW1zQ291bnQgPSAoc3RhdGU6IFRlYW1zU3RhdGUpID0+IHN0YXRlLnRlYW1zLmxlbmd0aDtcbmV4cG9ydCBjb25zdCBnZXRUZWFtc1NlYXJjaFBhZ2UgPSAoc3RhdGU6IFRlYW1zU3RhdGUpID0+IHN0YXRlLnNlYXJjaFBhZ2U7XG5cbmV4cG9ydCBjb25zdCBnZXRUZWFtID0gKHN0YXRlOiBUZWFtU3RhdGUsIGN1cnJlbnRUZWFtSWQ6IGFueSk6IFRlYW0gfCBudWxsID0+IHtcbiAgaWYgKHN0YXRlLnRlYW0uaWQgPT09IHBhcnNlSW50KGN1cnJlbnRUZWFtSWQsIDEwKSkge1xuICAgIHJldHVybiBzdGF0ZS50ZWFtO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VGVhbXMgPSAoc3RhdGU6IFRlYW1zU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBSZWdFeHAoc3RhdGUuc2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLnRlYW1zLmZpbHRlcigodGVhbSkgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KHRlYW0ubmFtZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRlYW1NZW1iZXJzID0gKHN0YXRlOiBUZWFtU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBSZWdFeHAoc3RhdGUuc2VhcmNoTWVtYmVyUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLm1lbWJlcnMuZmlsdGVyKChtZW1iZXIpID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdChtZW1iZXIubG9naW4pIHx8IHJlZ2V4LnRlc3QobWVtYmVyLmVtYWlsKSB8fCByZWdleC50ZXN0KG1lbWJlci5uYW1lKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XG4gIG1lbWJlcnM6IFRlYW1NZW1iZXJbXTtcbiAgZWRpdG9yc0NhbkFkbWluOiBib29sZWFuO1xuICBzaWduZWRJblVzZXI6IFVzZXI7XG59XG5cbmV4cG9ydCBjb25zdCBpc1NpZ25lZEluVXNlclRlYW1BZG1pbiA9IChjb25maWc6IENvbmZpZyk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCB7IG1lbWJlcnMsIHNpZ25lZEluVXNlciwgZWRpdG9yc0NhbkFkbWluIH0gPSBjb25maWc7XG4gIGNvbnN0IHVzZXJJbk1lbWJlcnMgPSBtZW1iZXJzLmZpbmQoKG0pID0+IG0udXNlcklkID09PSBzaWduZWRJblVzZXIuaWQpO1xuICBjb25zdCBwZXJtaXNzaW9uID0gdXNlckluTWVtYmVycyA/IHVzZXJJbk1lbWJlcnMucGVybWlzc2lvbiA6IFRlYW1QZXJtaXNzaW9uTGV2ZWwuTWVtYmVyO1xuXG4gIHJldHVybiBpc1Blcm1pc3Npb25UZWFtQWRtaW4oeyBwZXJtaXNzaW9uLCBzaWduZWRJblVzZXIsIGVkaXRvcnNDYW5BZG1pbiB9KTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkNvbmZpZyB7XG4gIHBlcm1pc3Npb246IFRlYW1QZXJtaXNzaW9uTGV2ZWw7XG4gIGVkaXRvcnNDYW5BZG1pbjogYm9vbGVhbjtcbiAgc2lnbmVkSW5Vc2VyOiBVc2VyO1xufVxuXG5leHBvcnQgY29uc3QgaXNQZXJtaXNzaW9uVGVhbUFkbWluID0gKGNvbmZpZzogUGVybWlzc2lvbkNvbmZpZyk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCB7IHBlcm1pc3Npb24sIHNpZ25lZEluVXNlciwgZWRpdG9yc0NhbkFkbWluIH0gPSBjb25maWc7XG4gIGNvbnN0IGlzQWRtaW4gPSBzaWduZWRJblVzZXIuaXNHcmFmYW5hQWRtaW4gfHwgc2lnbmVkSW5Vc2VyLm9yZ1JvbGUgPT09IE9yZ1JvbGUuQWRtaW47XG4gIGNvbnN0IHVzZXJJc1RlYW1BZG1pbiA9IHBlcm1pc3Npb24gPT09IFRlYW1QZXJtaXNzaW9uTGV2ZWwuQWRtaW47XG4gIGNvbnN0IGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluID0gaXNBZG1pbiB8fCB1c2VySXNUZWFtQWRtaW47XG5cbiAgcmV0dXJuIGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluIHx8ICFlZGl0b3JzQ2FuQWRtaW47XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlQXN5bmNGbiIsIlJvbGVQaWNrZXIiLCJmZXRjaFRlYW1Sb2xlcyIsInVwZGF0ZVRlYW1Sb2xlcyIsIlRlYW1Sb2xlUGlja2VyIiwidGVhbUlkIiwib3JnSWQiLCJyb2xlT3B0aW9ucyIsImRpc2FibGVkIiwiYnVpbHRpblJvbGVzRGlzYWJsZWQiLCJsb2FkaW5nIiwidmFsdWUiLCJhcHBsaWVkUm9sZXMiLCJnZXRUZWFtUm9sZXMiLCJlIiwiY29uc29sZSIsImVycm9yIiwib25Sb2xlc0NoYW5nZSIsInJvbGVzIiwiaG9pc3ROb25SZWFjdFN0YXRpY3MiLCJjb25uZWN0IiwidXNlRGlzcGF0Y2giLCJjbGVhblVwQWN0aW9uIiwiY29ubmVjdFdpdGhDbGVhblVwIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwic3RhdGVTZWxlY3RvciIsIkNvbXBvbmVudCIsIkNvbm5lY3RlZENvbXBvbmVudCIsIkNvbm5lY3RlZENvbXBvbmVudFdpdGhDbGVhblVwIiwicHJvcHMiLCJkaXNwYXRjaCIsImNsZWFuVXAiLCJkaXNwbGF5TmFtZSIsImNvbmZpZyIsImlzVHJpYWwiLCJleHBpcnkiLCJsaWNlbnNlSW5mbyIsInRyaWFsRXhwaXJ5IiwiaGlnaGxpZ2h0VHJpYWwiLCJmZWF0dXJlVG9nZ2xlcyIsImZlYXR1cmVIaWdobGlnaHRzIiwiUHVyZUNvbXBvbmVudCIsIkRlbGV0ZUJ1dHRvbiIsIkxpbmtCdXR0b24iLCJGaWx0ZXJJbnB1dCIsIlZlcnRpY2FsR3JvdXAiLCJIb3Jpem9udGFsR3JvdXAiLCJQYWdpbmF0aW9uIiwiRW1wdHlMaXN0Q1RBIiwiUGFnZSIsImZldGNoUm9sZU9wdGlvbnMiLCJnZXROYXZNb2RlbCIsImNvbnRleHRTcnYiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiZGVsZXRlVGVhbSIsImxvYWRUZWFtcyIsInNldFNlYXJjaFF1ZXJ5Iiwic2V0VGVhbXNTZWFyY2hQYWdlIiwiZ2V0U2VhcmNoUXVlcnkiLCJnZXRUZWFtcyIsImdldFRlYW1zQ291bnQiLCJnZXRUZWFtc1NlYXJjaFBhZ2UiLCJpc1Blcm1pc3Npb25UZWFtQWRtaW4iLCJwYWdlTGltaXQiLCJUZWFtTGlzdCIsImNvbnN0cnVjdG9yIiwidGVhbSIsImlkIiwidGVhbXMiLCJvZmZzZXQiLCJzZWFyY2hQYWdlIiwic2xpY2UiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiZmV0Y2hUZWFtcyIsImxpY2Vuc2VkQWNjZXNzQ29udHJvbEVuYWJsZWQiLCJoYXNQZXJtaXNzaW9uIiwiQWN0aW9uUm9sZXNMaXN0Iiwic2V0U3RhdGUiLCJyZW5kZXJUZWFtIiwiZWRpdG9yc0NhbkFkbWluIiwic2lnbmVkSW5Vc2VyIiwicGVybWlzc2lvbiIsInRlYW1VcmwiLCJpc1RlYW1BZG1pbiIsImNhbkRlbGV0ZSIsImhhc0FjY2Vzc0luTWV0YWRhdGEiLCJBY3Rpb25UZWFtc0RlbGV0ZSIsImNhblJlYWRUZWFtIiwiQWN0aW9uVGVhbXNSZWFkIiwiY2FuU2VlVGVhbVJvbGVzIiwiQWN0aW9uVGVhbXNSb2xlc0xpc3QiLCJjYW5VcGRhdGVUZWFtUm9sZXMiLCJoYXNBY2Nlc3MiLCJBY3Rpb25UZWFtc1JvbGVzQWRkIiwiQWN0aW9uVGVhbXNSb2xlc1JlbW92ZSIsImRpc3BsYXlSb2xlUGlja2VyIiwiYXZhdGFyVXJsIiwibmFtZSIsInBhZGRpbmciLCJlbWFpbCIsImxlbmd0aCIsInVuZGVmaW5lZCIsIm1lbWJlckNvdW50IiwicmVuZGVyRW1wdHlMaXN0IiwiQWN0aW9uVGVhbXNDcmVhdGUiLCJyZW5kZXJUZWFtTGlzdCIsInNlYXJjaFF1ZXJ5IiwidGVhbUFkbWluIiwiaGFzUm9sZSIsImNhbkNyZWF0ZSIsIm5ld1RlYW1IcmVmIiwicGFnaW5hdGVkVGVhbXMiLCJnZXRQYWdpbmF0ZWRUZWFtcyIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsIm9uU2VhcmNoUXVlcnlDaGFuZ2UiLCJ3aWR0aCIsIm1hcCIsInJlbmRlckxpc3QiLCJ0ZWFtc0NvdW50IiwiaGFzRmV0Y2hlZCIsInJlbmRlciIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJ1c2VyIiwiZ2V0QmFja2VuZFNydiIsInVwZGF0ZU5hdkluZGV4IiwiYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0iLCJidWlsZE5hdk1vZGVsIiwidGVhbUdyb3Vwc0xvYWRlZCIsInRlYW1Mb2FkZWQiLCJ0ZWFtTWVtYmVyc0xvYWRlZCIsInRlYW1zTG9hZGVkIiwicmVzcG9uc2UiLCJnZXQiLCJwZXJwYWdlIiwicGFnZSIsImxvYWRUZWFtIiwibG9hZFRlYW1NZW1iZXJzIiwiZ2V0U3RvcmUiLCJhZGRUZWFtTWVtYmVyIiwicG9zdCIsInVzZXJJZCIsInJlbW92ZVRlYW1NZW1iZXIiLCJkZWxldGUiLCJ1cGRhdGVUZWFtIiwicHV0IiwibG9hZFRlYW1Hcm91cHMiLCJhZGRUZWFtR3JvdXAiLCJncm91cElkIiwicmVtb3ZlVGVhbUdyb3VwIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZmV0Y2hVc2VyUGVybWlzc2lvbnMiLCJ1cGRhdGVUZWFtTWVtYmVyIiwibWVtYmVyIiwiZmVhdHVyZUVuYWJsZWQiLCJQcm9CYWRnZSIsIlRlYW1QZXJtaXNzaW9uTGV2ZWwiLCJsb2FkaW5nVGVhbSIsIk1lbWJlciIsImltZyIsInN1YlRpdGxlIiwidXJsIiwidGV4dCIsImJyZWFkY3J1bWJzIiwidGl0bGUiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImljb24iLCJoYXNQZXJtaXNzaW9uSW5NZXRhZGF0YSIsIkFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkIiwidW5zaGlmdCIsInRlYW1Hcm91cFN5bmMiLCJpc0xvYWRpbmdUZWFtIiwidGFiU3VmZml4IiwiZXhwZXJpbWVudElkIiwiZXZlbnRWYXJpYW50IiwicHVzaCIsImdldFRlYW1Mb2FkaW5nTmF2IiwicGFnZU5hbWUiLCJtYWluIiwibm9kZSIsImNoaWxkIiwiaW5kZXhPZiIsIk9yZ1JvbGUiLCJnZXRTZWFyY2hNZW1iZXJRdWVyeSIsInNlYXJjaE1lbWJlclF1ZXJ5IiwiZ2V0VGVhbUdyb3VwcyIsImdyb3VwcyIsImdldFRlYW0iLCJjdXJyZW50VGVhbUlkIiwicGFyc2VJbnQiLCJyZWdleCIsIlJlZ0V4cCIsImZpbHRlciIsInRlc3QiLCJnZXRUZWFtTWVtYmVycyIsIm1lbWJlcnMiLCJsb2dpbiIsImlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluIiwidXNlckluTWVtYmVycyIsImZpbmQiLCJtIiwiaXNBZG1pbiIsImlzR3JhZmFuYUFkbWluIiwib3JnUm9sZSIsIkFkbWluIiwidXNlcklzVGVhbUFkbWluIl0sInNvdXJjZVJvb3QiOiIifQ==