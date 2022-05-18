"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["OrgDetailsPage"],{

/***/ "./public/app/core/components/SharedPreferences/SharedPreferences.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedPreferences": () => (/* binding */ SharedPreferences),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/@lingui-react-virtual-b84a28ec6c/0/cache/@lingui-react-npm-3.13.2-7672a50569-456e3bbb4b.zip/node_modules/@lingui/react/esm/index.js");
/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/@lingui-core-npm-3.13.2-d32cc8860c-16d7ee047c.zip/node_modules/@lingui/core/esm/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_services_PreferencesService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/PreferencesService.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Tooltip, _Trans, _Trans2, _Trans3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const themes = [{
  value: '',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__.i18n._(
  /*i18n*/
  {
    id: 'shared-preferences.theme.default-label',
    message: 'Default'
  })
}, {
  value: 'dark',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__.i18n._(
  /*i18n*/
  {
    id: 'shared-preferences.theme.dark-label',
    message: 'Dark'
  })
}, {
  value: 'light',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__.i18n._(
  /*i18n*/
  {
    id: 'shared-preferences.theme.light-label',
    message: 'Light'
  })
}];
class SharedPreferences extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "service", void 0);

    _defineProperty(this, "onSubmitForm", async () => {
      const {
        homeDashboardId,
        theme,
        timezone,
        weekStart
      } = this.state;
      await this.service.update({
        homeDashboardId,
        theme,
        timezone,
        weekStart
      });
      window.location.reload();
    });

    _defineProperty(this, "onThemeChanged", value => {
      this.setState({
        theme: value
      });
    });

    _defineProperty(this, "onTimeZoneChanged", timezone => {
      if (!timezone) {
        return;
      }

      this.setState({
        timezone: timezone
      });
    });

    _defineProperty(this, "onWeekStartChanged", weekStart => {
      this.setState({
        weekStart: weekStart
      });
    });

    _defineProperty(this, "onHomeDashboardChanged", dashboardId => {
      this.setState({
        homeDashboardId: dashboardId
      });
    });

    _defineProperty(this, "getFullDashName", dashboard => {
      if (typeof dashboard.folderTitle === 'undefined' || dashboard.folderTitle === '') {
        return dashboard.title;
      }

      return dashboard.folderTitle + ' / ' + dashboard.title;
    });

    this.service = new app_core_services_PreferencesService__WEBPACK_IMPORTED_MODULE_4__.PreferencesService(props.resourceUri);
    this.state = {
      homeDashboardId: 0,
      theme: '',
      timezone: '',
      weekStart: '',
      dashboards: []
    };
  }

  async componentDidMount() {
    const prefs = await this.service.load();
    const dashboards = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_5__.backendSrv.search({
      starred: true
    });
    const defaultDashboardHit = {
      id: 0,
      title: 'Default',
      tags: [],
      type: '',
      uid: '',
      uri: '',
      url: '',
      folderId: 0,
      folderTitle: '',
      folderUid: '',
      folderUrl: '',
      isStarred: false,
      slug: '',
      items: []
    };

    if (prefs.homeDashboardId > 0 && !dashboards.find(d => d.id === prefs.homeDashboardId)) {
      const missing = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_5__.backendSrv.search({
        dashboardIds: [prefs.homeDashboardId]
      });

      if (missing && missing.length > 0) {
        dashboards.push(missing[0]);
      }
    }

    this.setState({
      homeDashboardId: prefs.homeDashboardId,
      theme: prefs.theme,
      timezone: prefs.timezone,
      weekStart: prefs.weekStart,
      dashboards: [defaultDashboardHit, ...dashboards]
    });
  }

  render() {
    const {
      theme,
      timezone,
      weekStart,
      homeDashboardId,
      dashboards
    } = this.state;
    const {
      disabled
    } = this.props;
    const styles = getStyles();

    const homeDashboardTooltip = _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__.Trans, {
        id: "shared-preferences.fields.home-dashboard-tooltip",
        message: "Not finding the dashboard you want? Star it first, then it should appear in this select box."
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: "info-circle"
      })
    }));

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
      onSubmit: this.onSubmitForm,
      children: () => {
        var _themes$find;

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldSet, {
          label: _Trans || (_Trans = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__.Trans, {
            id: "shared-preferences.title",
            message: "Preferences"
          })),
          disabled: disabled,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__.i18n._(
            /*i18n*/
            {
              id: 'shared-preferences.fields.theme-label',
              message: 'UI Theme'
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
              options: themes,
              value: (_themes$find = themes.find(item => item.value === theme)) === null || _themes$find === void 0 ? void 0 : _themes$find.value,
              onChange: this.onThemeChanged
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
              htmlFor: "home-dashboard-select",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: styles.labelText,
                children: _Trans2 || (_Trans2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__.Trans, {
                  id: "shared-preferences.fields.home-dashboard-label",
                  message: "Home Dashboard"
                }))
              }), homeDashboardTooltip]
            }),
            "data-testid": "User preferences home dashboard drop down",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
              value: dashboards.find(dashboard => dashboard.id === homeDashboardId),
              getOptionValue: i => i.id,
              getOptionLabel: this.getFullDashName,
              onChange: dashboard => this.onHomeDashboardChanged(dashboard.id),
              options: dashboards,
              placeholder: _lingui_core__WEBPACK_IMPORTED_MODULE_7__.i18n._(
              /*i18n*/
              {
                id: 'shared-preferences.fields.home-dashboard-placeholder',
                message: 'Choose default dashboard'
              }),
              inputId: "home-dashboard-select"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__.i18n._(
            /*i18n*/
            {
              id: 'shared-dashboard.fields.timezone-label',
              message: 'Timezone'
            }),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.TimeZonePicker.containerV2,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TimeZonePicker, {
              includeInternal: true,
              value: timezone,
              onChange: this.onTimeZoneChanged,
              inputId: "shared-preferences-timezone-picker"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__.i18n._(
            /*i18n*/
            {
              id: 'shared-preferences.fields.week-start-label',
              message: 'Week start'
            }),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.WeekStartPicker.containerV2,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.WeekStartPicker, {
              value: weekStart,
              onChange: this.onWeekStartChanged,
              inputId: 'shared-preferences-week-start-picker'
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form-button-row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              type: "submit",
              variant: "primary",
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.UserProfile.preferencesSaveButton,
              children: _Trans3 || (_Trans3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__.Trans, {
                id: "common.save",
                message: "Save"
              }))
            })
          })]
        });
      }
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SharedPreferences);
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.stylesFactory)(() => {
  return {
    labelText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: 6px;
    `
  };
});

/***/ }),

/***/ "./public/app/features/org/OrgDetailsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgDetailsPage": () => (/* binding */ OrgDetailsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/SharedPreferences/SharedPreferences.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _OrgProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/org/OrgProfile.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/org/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/org/state/reducers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class OrgDetailsPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onUpdateOrganization", orgName => {
      this.props.setOrganizationName(orgName);
      this.props.updateOrganization();
    });
  }

  async componentDidMount() {
    await this.props.loadOrganization();
  }

  render() {
    const {
      navModel,
      organization
    } = this.props;
    const isLoading = Object.keys(organization).length === 0;
    const canReadOrg = app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.OrgsRead);
    const canReadPreferences = app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.OrgsPreferencesRead);
    const canWritePreferences = app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.OrgsPreferencesWrite);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
        isLoading: isLoading,
        children: !isLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
          spacing: "lg",
          children: [canReadOrg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_OrgProfile__WEBPACK_IMPORTED_MODULE_8__["default"], {
            onSubmit: this.onUpdateOrganization,
            orgName: organization.name
          }), canReadPreferences && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_4__["default"], {
            resourceUri: "org",
            disabled: !canWritePreferences
          })]
        })
      })
    });
  }

}

function mapStateToProps(state) {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__.getNavModel)(state.navIndex, 'org-settings'),
    organization: state.organization.organization
  };
}

const mapDispatchToProps = {
  loadOrganization: _state_actions__WEBPACK_IMPORTED_MODULE_9__.loadOrganization,
  setOrganizationName: _state_reducers__WEBPACK_IMPORTED_MODULE_10__.setOrganizationName,
  updateOrganization: _state_actions__WEBPACK_IMPORTED_MODULE_9__.updateOrganization
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(OrgDetailsPage));

/***/ }),

/***/ "./public/app/features/org/OrgProfile.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Button;








const OrgProfile = ({
  onSubmit,
  orgName
}) => {
  const canWriteOrg = app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.OrgsWrite);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Form, {
    defaultValues: {
      orgName
    },
    onSubmit: ({
      orgName
    }) => onSubmit(orgName),
    children: ({
      register
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FieldSet, {
      label: "Organization profile",
      disabled: !canWriteOrg,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: "Organization name",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({
          id: "org-name-input",
          type: "text"
        }, register('orgName', {
          required: true
        })))
      }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        type: "submit",
        children: "Update organization name"
      }))]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrgProfile);

/***/ }),

/***/ "./public/app/features/org/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOrganization": () => (/* binding */ createOrganization),
/* harmony export */   "getUserOrganizations": () => (/* binding */ getUserOrganizations),
/* harmony export */   "loadOrganization": () => (/* binding */ loadOrganization),
/* harmony export */   "setUserOrganization": () => (/* binding */ setUserOrganization),
/* harmony export */   "updateOrganization": () => (/* binding */ updateOrganization)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/org/state/reducers.ts");



function loadOrganization(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().get('/api/org');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.organizationLoaded)(organizationResponse));
    return organizationResponse;
  };
}
function updateOrganization(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async (dispatch, getStore) => {
    const organization = getStore().organization.organization;
    await dependencies.getBackendSrv().put('/api/org', {
      name: organization.name
    });
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.updateConfigurationSubtitle)(organization.name));
    dispatch(loadOrganization(dependencies));
  };
}
function setUserOrganization(orgId, dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().post('/api/user/using/' + orgId);
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.updateConfigurationSubtitle)(organizationResponse.name));
  };
}
function createOrganization(newOrg, dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const result = await dependencies.getBackendSrv().post('/api/orgs/', newOrg);
    dispatch(setUserOrganization(result.orgId));
  };
}
function getUserOrganizations(dependencies = {
  getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
}) {
  return async dispatch => {
    const result = await dependencies.getBackendSrv().get('/api/user/orgs');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.userOrganizationsLoaded)(result));
    return result;
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFPLE1BQU9LLFFBQVAsSUFBb0I7QUFDekIsVUFBTUMsb0JBQW9CLEdBQUcsTUFBTUYsWUFBWSxDQUFDSixhQUFiLEdBQTZCWSxJQUE3QixDQUFrQyxxQkFBcUJELEtBQXZELENBQW5DO0FBRUFOLElBQUFBLFFBQVEsQ0FBQ0osNkVBQTJCLENBQUNLLG9CQUFvQixDQUFDaEIsSUFBdEIsQ0FBNUIsQ0FBUjtBQUNELEdBSkQ7QUFLRDtBQUVNLFNBQVN1QixrQkFBVCxDQUNMQyxNQURLLEVBRUxWLFlBQXNDLEdBQUc7QUFBRUosRUFBQUEsYUFBYSxFQUFFQSwyREFBYUE7QUFBOUIsQ0FGcEMsRUFHYTtBQUNsQixTQUFPLE1BQU9LLFFBQVAsSUFBb0I7QUFDekIsVUFBTVUsTUFBTSxHQUFHLE1BQU1YLFlBQVksQ0FBQ0osYUFBYixHQUE2QlksSUFBN0IsQ0FBa0MsWUFBbEMsRUFBZ0RFLE1BQWhELENBQXJCO0FBRUFULElBQUFBLFFBQVEsQ0FBQ0ssbUJBQW1CLENBQUNLLE1BQU0sQ0FBQ0osS0FBUixDQUFwQixDQUFSO0FBQ0QsR0FKRDtBQUtEO0FBRU0sU0FBU0ssb0JBQVQsQ0FDTFosWUFBc0MsR0FBRztBQUFFSixFQUFBQSxhQUFhLEVBQUVBLDJEQUFhQTtBQUE5QixDQURwQyxFQUVhO0FBQ2xCLFNBQU8sTUFBT0ssUUFBUCxJQUFvQjtBQUN6QixVQUFNVSxNQUFNLEdBQUcsTUFBTVgsWUFBWSxDQUFDSixhQUFiLEdBQTZCTyxHQUE3QixDQUFpQyxnQkFBakMsQ0FBckI7QUFDQUYsSUFBQUEsUUFBUSxDQUFDRixrRUFBdUIsQ0FBQ1ksTUFBRCxDQUF4QixDQUFSO0FBRUEsV0FBT0EsTUFBUDtBQUNELEdBTEQ7QUFNRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9TaGFyZWRQcmVmZXJlbmNlcy9TaGFyZWRQcmVmZXJlbmNlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvb3JnL09yZ0RldGFpbHNQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9vcmcvT3JnUHJvZmlsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvb3JnL3N0YXRlL2FjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHQsIFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybyc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRmllbGQsXG4gIEZpZWxkU2V0LFxuICBGb3JtLFxuICBJY29uLFxuICBMYWJlbCxcbiAgUmFkaW9CdXR0b25Hcm91cCxcbiAgU2VsZWN0LFxuICBzdHlsZXNGYWN0b3J5LFxuICBUaW1lWm9uZVBpY2tlcixcbiAgVG9vbHRpcCxcbiAgV2Vla1N0YXJ0UGlja2VyLFxufSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQcmVmZXJlbmNlc1NlcnZpY2UgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9QcmVmZXJlbmNlc1NlcnZpY2UnO1xuaW1wb3J0IHsgYmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcbmltcG9ydCB7IERhc2hib2FyZFNlYXJjaEhpdCwgRGFzaGJvYXJkU2VhcmNoSXRlbVR5cGUgfSBmcm9tICdhcHAvZmVhdHVyZXMvc2VhcmNoL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlc291cmNlVXJpOiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIGhvbWVEYXNoYm9hcmRJZDogbnVtYmVyO1xuICB0aGVtZTogc3RyaW5nO1xuICB0aW1lem9uZTogc3RyaW5nO1xuICB3ZWVrU3RhcnQ6IHN0cmluZztcbiAgZGFzaGJvYXJkczogRGFzaGJvYXJkU2VhcmNoSGl0W107XG59XG5cbmNvbnN0IHRoZW1lczogU2VsZWN0YWJsZVZhbHVlW10gPSBbXG4gIHsgdmFsdWU6ICcnLCBsYWJlbDogdCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLnRoZW1lLmRlZmF1bHQtbGFiZWwnLCBtZXNzYWdlOiAnRGVmYXVsdCcgfSkgfSxcbiAgeyB2YWx1ZTogJ2RhcmsnLCBsYWJlbDogdCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLnRoZW1lLmRhcmstbGFiZWwnLCBtZXNzYWdlOiAnRGFyaycgfSkgfSxcbiAgeyB2YWx1ZTogJ2xpZ2h0JywgbGFiZWw6IHQoeyBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy50aGVtZS5saWdodC1sYWJlbCcsIG1lc3NhZ2U6ICdMaWdodCcgfSkgfSxcbl07XG5cbmV4cG9ydCBjbGFzcyBTaGFyZWRQcmVmZXJlbmNlcyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHNlcnZpY2U6IFByZWZlcmVuY2VzU2VydmljZTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNlcnZpY2UgPSBuZXcgUHJlZmVyZW5jZXNTZXJ2aWNlKHByb3BzLnJlc291cmNlVXJpKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG9tZURhc2hib2FyZElkOiAwLFxuICAgICAgdGhlbWU6ICcnLFxuICAgICAgdGltZXpvbmU6ICcnLFxuICAgICAgd2Vla1N0YXJ0OiAnJyxcbiAgICAgIGRhc2hib2FyZHM6IFtdLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwcmVmcyA9IGF3YWl0IHRoaXMuc2VydmljZS5sb2FkKCk7XG4gICAgY29uc3QgZGFzaGJvYXJkcyA9IGF3YWl0IGJhY2tlbmRTcnYuc2VhcmNoKHsgc3RhcnJlZDogdHJ1ZSB9KTtcbiAgICBjb25zdCBkZWZhdWx0RGFzaGJvYXJkSGl0OiBEYXNoYm9hcmRTZWFyY2hIaXQgPSB7XG4gICAgICBpZDogMCxcbiAgICAgIHRpdGxlOiAnRGVmYXVsdCcsXG4gICAgICB0YWdzOiBbXSxcbiAgICAgIHR5cGU6ICcnIGFzIERhc2hib2FyZFNlYXJjaEl0ZW1UeXBlLFxuICAgICAgdWlkOiAnJyxcbiAgICAgIHVyaTogJycsXG4gICAgICB1cmw6ICcnLFxuICAgICAgZm9sZGVySWQ6IDAsXG4gICAgICBmb2xkZXJUaXRsZTogJycsXG4gICAgICBmb2xkZXJVaWQ6ICcnLFxuICAgICAgZm9sZGVyVXJsOiAnJyxcbiAgICAgIGlzU3RhcnJlZDogZmFsc2UsXG4gICAgICBzbHVnOiAnJyxcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICB9O1xuXG4gICAgaWYgKHByZWZzLmhvbWVEYXNoYm9hcmRJZCA+IDAgJiYgIWRhc2hib2FyZHMuZmluZCgoZCkgPT4gZC5pZCA9PT0gcHJlZnMuaG9tZURhc2hib2FyZElkKSkge1xuICAgICAgY29uc3QgbWlzc2luZyA9IGF3YWl0IGJhY2tlbmRTcnYuc2VhcmNoKHsgZGFzaGJvYXJkSWRzOiBbcHJlZnMuaG9tZURhc2hib2FyZElkXSB9KTtcbiAgICAgIGlmIChtaXNzaW5nICYmIG1pc3NpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICBkYXNoYm9hcmRzLnB1c2gobWlzc2luZ1swXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBob21lRGFzaGJvYXJkSWQ6IHByZWZzLmhvbWVEYXNoYm9hcmRJZCxcbiAgICAgIHRoZW1lOiBwcmVmcy50aGVtZSxcbiAgICAgIHRpbWV6b25lOiBwcmVmcy50aW1lem9uZSxcbiAgICAgIHdlZWtTdGFydDogcHJlZnMud2Vla1N0YXJ0LFxuICAgICAgZGFzaGJvYXJkczogW2RlZmF1bHREYXNoYm9hcmRIaXQsIC4uLmRhc2hib2FyZHNdLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXRGb3JtID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgaG9tZURhc2hib2FyZElkLCB0aGVtZSwgdGltZXpvbmUsIHdlZWtTdGFydCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlKHsgaG9tZURhc2hib2FyZElkLCB0aGVtZSwgdGltZXpvbmUsIHdlZWtTdGFydCB9KTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH07XG5cbiAgb25UaGVtZUNoYW5nZWQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0aGVtZTogdmFsdWUgfSk7XG4gIH07XG5cbiAgb25UaW1lWm9uZUNoYW5nZWQgPSAodGltZXpvbmU/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIXRpbWV6b25lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lem9uZTogdGltZXpvbmUgfSk7XG4gIH07XG5cbiAgb25XZWVrU3RhcnRDaGFuZ2VkID0gKHdlZWtTdGFydDogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdlZWtTdGFydDogd2Vla1N0YXJ0IH0pO1xuICB9O1xuXG4gIG9uSG9tZURhc2hib2FyZENoYW5nZWQgPSAoZGFzaGJvYXJkSWQ6IG51bWJlcikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob21lRGFzaGJvYXJkSWQ6IGRhc2hib2FyZElkIH0pO1xuICB9O1xuXG4gIGdldEZ1bGxEYXNoTmFtZSA9IChkYXNoYm9hcmQ6IFNlbGVjdGFibGVWYWx1ZTxEYXNoYm9hcmRTZWFyY2hIaXQ+KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkYXNoYm9hcmQuZm9sZGVyVGl0bGUgPT09ICd1bmRlZmluZWQnIHx8IGRhc2hib2FyZC5mb2xkZXJUaXRsZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBkYXNoYm9hcmQudGl0bGU7XG4gICAgfVxuICAgIHJldHVybiBkYXNoYm9hcmQuZm9sZGVyVGl0bGUgKyAnIC8gJyArIGRhc2hib2FyZC50aXRsZTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aGVtZSwgdGltZXpvbmUsIHdlZWtTdGFydCwgaG9tZURhc2hib2FyZElkLCBkYXNoYm9hcmRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKCk7XG5cbiAgICBjb25zdCBob21lRGFzaGJvYXJkVG9vbHRpcCA9IChcbiAgICAgIDxUb29sdGlwXG4gICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgIDxUcmFucyBpZD1cInNoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMuaG9tZS1kYXNoYm9hcmQtdG9vbHRpcFwiPlxuICAgICAgICAgICAgTm90IGZpbmRpbmcgdGhlIGRhc2hib2FyZCB5b3Ugd2FudD8gU3RhciBpdCBmaXJzdCwgdGhlbiBpdCBzaG91bGQgYXBwZWFyIGluIHRoaXMgc2VsZWN0IGJveC5cbiAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxJY29uIG5hbWU9XCJpbmZvLWNpcmNsZVwiIC8+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdEZvcm19PlxuICAgICAgICB7KCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmllbGRTZXQgbGFiZWw9ezxUcmFucyBpZD1cInNoYXJlZC1wcmVmZXJlbmNlcy50aXRsZVwiPlByZWZlcmVuY2VzPC9UcmFucz59IGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD17dCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy50aGVtZS1sYWJlbCcsIG1lc3NhZ2U6ICdVSSBUaGVtZScgfSl9PlxuICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGVtZXN9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhlbWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmFsdWUgPT09IHRoZW1lKT8udmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRoZW1lQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiaG9tZS1kYXNoYm9hcmQtc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy5ob21lLWRhc2hib2FyZC1sYWJlbFwiPkhvbWUgRGFzaGJvYXJkPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIHtob21lRGFzaGJvYXJkVG9vbHRpcH1cbiAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiVXNlciBwcmVmZXJlbmNlcyBob21lIGRhc2hib2FyZCBkcm9wIGRvd25cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rhc2hib2FyZHMuZmluZCgoZGFzaGJvYXJkKSA9PiBkYXNoYm9hcmQuaWQgPT09IGhvbWVEYXNoYm9hcmRJZCl9XG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KGkpID0+IGkuaWR9XG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17dGhpcy5nZXRGdWxsRGFzaE5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhc2hib2FyZDogU2VsZWN0YWJsZVZhbHVlPERhc2hib2FyZFNlYXJjaEhpdD4pID0+XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Ib21lRGFzaGJvYXJkQ2hhbmdlZChkYXNoYm9hcmQuaWQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkYXNoYm9hcmRzfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Qoe1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMuaG9tZS1kYXNoYm9hcmQtcGxhY2Vob2xkZXInLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ2hvb3NlIGRlZmF1bHQgZGFzaGJvYXJkJyxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD1cImhvbWUtZGFzaGJvYXJkLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD17dCh7IGlkOiAnc2hhcmVkLWRhc2hib2FyZC5maWVsZHMudGltZXpvbmUtbGFiZWwnLCBtZXNzYWdlOiAnVGltZXpvbmUnIH0pfVxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5UaW1lWm9uZVBpY2tlci5jb250YWluZXJWMn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUaW1lWm9uZVBpY2tlclxuICAgICAgICAgICAgICAgICAgaW5jbHVkZUludGVybmFsPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpbWV6b25lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UaW1lWm9uZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICBpbnB1dElkPVwic2hhcmVkLXByZWZlcmVuY2VzLXRpbWV6b25lLXBpY2tlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD17dCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy53ZWVrLXN0YXJ0LWxhYmVsJywgbWVzc2FnZTogJ1dlZWsgc3RhcnQnIH0pfVxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5XZWVrU3RhcnRQaWNrZXIuY29udGFpbmVyVjJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8V2Vla1N0YXJ0UGlja2VyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2Vla1N0YXJ0fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XZWVrU3RhcnRDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD17J3NoYXJlZC1wcmVmZXJlbmNlcy13ZWVrLXN0YXJ0LXBpY2tlcid9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tYnV0dG9uLXJvd1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLlVzZXJQcm9maWxlLnByZWZlcmVuY2VzU2F2ZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJjb21tb24uc2F2ZVwiPlNhdmU8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRmllbGRTZXQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJlZFByZWZlcmVuY2VzO1xuXG5jb25zdCBnZXRTdHlsZXMgPSBzdHlsZXNGYWN0b3J5KCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbFRleHQ6IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIGAsXG4gIH07XG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFZlcnRpY2FsR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgU2hhcmVkUHJlZmVyZW5jZXMgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9TaGFyZWRQcmVmZXJlbmNlcy9TaGFyZWRQcmVmZXJlbmNlcyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uLCBPcmdhbml6YXRpb24sIFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgT3JnUHJvZmlsZSBmcm9tICcuL09yZ1Byb2ZpbGUnO1xuaW1wb3J0IHsgbG9hZE9yZ2FuaXphdGlvbiwgdXBkYXRlT3JnYW5pemF0aW9uIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IHNldE9yZ2FuaXphdGlvbk5hbWUgfSBmcm9tICcuL3N0YXRlL3JlZHVjZXJzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIG5hdk1vZGVsOiBOYXZNb2RlbDtcbiAgb3JnYW5pemF0aW9uOiBPcmdhbml6YXRpb247XG4gIGxvYWRPcmdhbml6YXRpb246IHR5cGVvZiBsb2FkT3JnYW5pemF0aW9uO1xuICBzZXRPcmdhbml6YXRpb25OYW1lOiB0eXBlb2Ygc2V0T3JnYW5pemF0aW9uTmFtZTtcbiAgdXBkYXRlT3JnYW5pemF0aW9uOiB0eXBlb2YgdXBkYXRlT3JnYW5pemF0aW9uO1xufVxuXG5leHBvcnQgY2xhc3MgT3JnRGV0YWlsc1BhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF3YWl0IHRoaXMucHJvcHMubG9hZE9yZ2FuaXphdGlvbigpO1xuICB9XG5cbiAgb25VcGRhdGVPcmdhbml6YXRpb24gPSAob3JnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZXRPcmdhbml6YXRpb25OYW1lKG9yZ05hbWUpO1xuICAgIHRoaXMucHJvcHMudXBkYXRlT3JnYW5pemF0aW9uKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmF2TW9kZWwsIG9yZ2FuaXphdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpc0xvYWRpbmcgPSBPYmplY3Qua2V5cyhvcmdhbml6YXRpb24pLmxlbmd0aCA9PT0gMDtcbiAgICBjb25zdCBjYW5SZWFkT3JnID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uT3Jnc1JlYWQpO1xuICAgIGNvbnN0IGNhblJlYWRQcmVmZXJlbmNlcyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLk9yZ3NQcmVmZXJlbmNlc1JlYWQpO1xuICAgIGNvbnN0IGNhbldyaXRlUHJlZmVyZW5jZXMgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5PcmdzUHJlZmVyZW5jZXNXcml0ZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9PlxuICAgICAgICAgIHshaXNMb2FkaW5nICYmIChcbiAgICAgICAgICAgIDxWZXJ0aWNhbEdyb3VwIHNwYWNpbmc9XCJsZ1wiPlxuICAgICAgICAgICAgICB7Y2FuUmVhZE9yZyAmJiA8T3JnUHJvZmlsZSBvblN1Ym1pdD17dGhpcy5vblVwZGF0ZU9yZ2FuaXphdGlvbn0gb3JnTmFtZT17b3JnYW5pemF0aW9uLm5hbWV9IC8+fVxuICAgICAgICAgICAgICB7Y2FuUmVhZFByZWZlcmVuY2VzICYmIDxTaGFyZWRQcmVmZXJlbmNlcyByZXNvdXJjZVVyaT1cIm9yZ1wiIGRpc2FibGVkPXshY2FuV3JpdGVQcmVmZXJlbmNlc30gLz59XG4gICAgICAgICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAnb3JnLXNldHRpbmdzJyksXG4gICAgb3JnYW5pemF0aW9uOiBzdGF0ZS5vcmdhbml6YXRpb24ub3JnYW5pemF0aW9uLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWRPcmdhbml6YXRpb24sXG4gIHNldE9yZ2FuaXphdGlvbk5hbWUsXG4gIHVwZGF0ZU9yZ2FuaXphdGlvbixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE9yZ0RldGFpbHNQYWdlKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSW5wdXQsIEZpZWxkLCBGaWVsZFNldCwgQnV0dG9uLCBGb3JtIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBvcmdOYW1lOiBzdHJpbmc7XG4gIG9uU3VibWl0OiAob3JnTmFtZTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgRm9ybURUTyB7XG4gIG9yZ05hbWU6IHN0cmluZztcbn1cblxuY29uc3QgT3JnUHJvZmlsZTogRkM8UHJvcHM+ID0gKHsgb25TdWJtaXQsIG9yZ05hbWUgfSkgPT4ge1xuICBjb25zdCBjYW5Xcml0ZU9yZyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLk9yZ3NXcml0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBkZWZhdWx0VmFsdWVzPXt7IG9yZ05hbWUgfX0gb25TdWJtaXQ9eyh7IG9yZ05hbWUgfTogRm9ybURUTykgPT4gb25TdWJtaXQob3JnTmFtZSl9PlxuICAgICAgeyh7IHJlZ2lzdGVyIH0pID0+IChcbiAgICAgICAgPEZpZWxkU2V0IGxhYmVsPVwiT3JnYW5pemF0aW9uIHByb2ZpbGVcIiBkaXNhYmxlZD17IWNhbldyaXRlT3JnfT5cbiAgICAgICAgICA8RmllbGQgbGFiZWw9XCJPcmdhbml6YXRpb24gbmFtZVwiPlxuICAgICAgICAgICAgPElucHV0IGlkPVwib3JnLW5hbWUtaW5wdXRcIiB0eXBlPVwidGV4dFwiIHsuLi5yZWdpc3Rlcignb3JnTmFtZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9IC8+XG4gICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlVwZGF0ZSBvcmdhbml6YXRpb24gbmFtZTwvQnV0dG9uPlxuICAgICAgICA8L0ZpZWxkU2V0PlxuICAgICAgKX1cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBPcmdQcm9maWxlO1xuIiwiaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXBkYXRlQ29uZmlndXJhdGlvblN1YnRpdGxlIH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBUaHVua1Jlc3VsdCB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IG9yZ2FuaXphdGlvbkxvYWRlZCwgdXNlck9yZ2FuaXphdGlvbnNMb2FkZWQgfSBmcm9tICcuL3JlZHVjZXJzJztcblxudHlwZSBPcmdhbml6YXRpb25EZXBlbmRlbmNpZXMgPSB7IGdldEJhY2tlbmRTcnY6IHR5cGVvZiBnZXRCYWNrZW5kU3J2IH07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkT3JnYW5pemF0aW9uKFxuICBkZXBlbmRlbmNpZXM6IE9yZ2FuaXphdGlvbkRlcGVuZGVuY2llcyA9IHsgZ2V0QmFja2VuZFNydjogZ2V0QmFja2VuZFNydiB9XG4pOiBUaHVua1Jlc3VsdDxhbnk+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IG9yZ2FuaXphdGlvblJlc3BvbnNlID0gYXdhaXQgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvb3JnJyk7XG4gICAgZGlzcGF0Y2gob3JnYW5pemF0aW9uTG9hZGVkKG9yZ2FuaXphdGlvblJlc3BvbnNlKSk7XG5cbiAgICByZXR1cm4gb3JnYW5pemF0aW9uUmVzcG9uc2U7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVPcmdhbml6YXRpb24oXG4gIGRlcGVuZGVuY2llczogT3JnYW5pemF0aW9uRGVwZW5kZW5jaWVzID0geyBnZXRCYWNrZW5kU3J2OiBnZXRCYWNrZW5kU3J2IH1cbik6IFRodW5rUmVzdWx0PGFueT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IG9yZ2FuaXphdGlvbiA9IGdldFN0b3JlKCkub3JnYW5pemF0aW9uLm9yZ2FuaXphdGlvbjtcblxuICAgIGF3YWl0IGRlcGVuZGVuY2llcy5nZXRCYWNrZW5kU3J2KCkucHV0KCcvYXBpL29yZycsIHsgbmFtZTogb3JnYW5pemF0aW9uLm5hbWUgfSk7XG5cbiAgICBkaXNwYXRjaCh1cGRhdGVDb25maWd1cmF0aW9uU3VidGl0bGUob3JnYW5pemF0aW9uLm5hbWUpKTtcbiAgICBkaXNwYXRjaChsb2FkT3JnYW5pemF0aW9uKGRlcGVuZGVuY2llcykpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlck9yZ2FuaXphdGlvbihcbiAgb3JnSWQ6IG51bWJlcixcbiAgZGVwZW5kZW5jaWVzOiBPcmdhbml6YXRpb25EZXBlbmRlbmNpZXMgPSB7IGdldEJhY2tlbmRTcnY6IGdldEJhY2tlbmRTcnYgfVxuKTogVGh1bmtSZXN1bHQ8YW55PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBvcmdhbml6YXRpb25SZXNwb25zZSA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS91c2VyL3VzaW5nLycgKyBvcmdJZCk7XG5cbiAgICBkaXNwYXRjaCh1cGRhdGVDb25maWd1cmF0aW9uU3VidGl0bGUob3JnYW5pemF0aW9uUmVzcG9uc2UubmFtZSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT3JnYW5pemF0aW9uKFxuICBuZXdPcmc6IHsgbmFtZTogc3RyaW5nIH0sXG4gIGRlcGVuZGVuY2llczogT3JnYW5pemF0aW9uRGVwZW5kZW5jaWVzID0geyBnZXRCYWNrZW5kU3J2OiBnZXRCYWNrZW5kU3J2IH1cbik6IFRodW5rUmVzdWx0PGFueT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL29yZ3MvJywgbmV3T3JnKTtcblxuICAgIGRpc3BhdGNoKHNldFVzZXJPcmdhbml6YXRpb24ocmVzdWx0Lm9yZ0lkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyT3JnYW5pemF0aW9ucyhcbiAgZGVwZW5kZW5jaWVzOiBPcmdhbml6YXRpb25EZXBlbmRlbmNpZXMgPSB7IGdldEJhY2tlbmRTcnY6IGdldEJhY2tlbmRTcnYgfVxuKTogVGh1bmtSZXN1bHQ8YW55PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS91c2VyL29yZ3MnKTtcbiAgICBkaXNwYXRjaCh1c2VyT3JnYW5pemF0aW9uc0xvYWRlZChyZXN1bHQpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG4iXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Iiwic2VsZWN0b3JzIiwiQnV0dG9uIiwiRmllbGQiLCJGaWVsZFNldCIsIkZvcm0iLCJJY29uIiwiTGFiZWwiLCJSYWRpb0J1dHRvbkdyb3VwIiwiU2VsZWN0Iiwic3R5bGVzRmFjdG9yeSIsIlRpbWVab25lUGlja2VyIiwiVG9vbHRpcCIsIldlZWtTdGFydFBpY2tlciIsIlByZWZlcmVuY2VzU2VydmljZSIsImJhY2tlbmRTcnYiLCJ0aGVtZXMiLCJ2YWx1ZSIsImxhYmVsIiwiaWQiLCJTaGFyZWRQcmVmZXJlbmNlcyIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJob21lRGFzaGJvYXJkSWQiLCJ0aGVtZSIsInRpbWV6b25lIiwid2Vla1N0YXJ0Iiwic3RhdGUiLCJzZXJ2aWNlIiwidXBkYXRlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzZXRTdGF0ZSIsImRhc2hib2FyZElkIiwiZGFzaGJvYXJkIiwiZm9sZGVyVGl0bGUiLCJ0aXRsZSIsInJlc291cmNlVXJpIiwiZGFzaGJvYXJkcyIsImNvbXBvbmVudERpZE1vdW50IiwicHJlZnMiLCJsb2FkIiwic2VhcmNoIiwic3RhcnJlZCIsImRlZmF1bHREYXNoYm9hcmRIaXQiLCJ0YWdzIiwidHlwZSIsInVpZCIsInVyaSIsInVybCIsImZvbGRlcklkIiwiZm9sZGVyVWlkIiwiZm9sZGVyVXJsIiwiaXNTdGFycmVkIiwic2x1ZyIsIml0ZW1zIiwiZmluZCIsImQiLCJtaXNzaW5nIiwiZGFzaGJvYXJkSWRzIiwibGVuZ3RoIiwicHVzaCIsInJlbmRlciIsImRpc2FibGVkIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiaG9tZURhc2hib2FyZFRvb2x0aXAiLCJvblN1Ym1pdEZvcm0iLCJpdGVtIiwib25UaGVtZUNoYW5nZWQiLCJsYWJlbFRleHQiLCJpIiwiZ2V0RnVsbERhc2hOYW1lIiwib25Ib21lRGFzaGJvYXJkQ2hhbmdlZCIsImNvbXBvbmVudHMiLCJjb250YWluZXJWMiIsIm9uVGltZVpvbmVDaGFuZ2VkIiwib25XZWVrU3RhcnRDaGFuZ2VkIiwiVXNlclByb2ZpbGUiLCJwcmVmZXJlbmNlc1NhdmVCdXR0b24iLCJjb25uZWN0IiwiVmVydGljYWxHcm91cCIsIlBhZ2UiLCJjb250ZXh0U3J2IiwiZ2V0TmF2TW9kZWwiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiT3JnUHJvZmlsZSIsImxvYWRPcmdhbml6YXRpb24iLCJ1cGRhdGVPcmdhbml6YXRpb24iLCJzZXRPcmdhbml6YXRpb25OYW1lIiwiT3JnRGV0YWlsc1BhZ2UiLCJvcmdOYW1lIiwibmF2TW9kZWwiLCJvcmdhbml6YXRpb24iLCJpc0xvYWRpbmciLCJPYmplY3QiLCJrZXlzIiwiY2FuUmVhZE9yZyIsImhhc1Blcm1pc3Npb24iLCJPcmdzUmVhZCIsImNhblJlYWRQcmVmZXJlbmNlcyIsIk9yZ3NQcmVmZXJlbmNlc1JlYWQiLCJjYW5Xcml0ZVByZWZlcmVuY2VzIiwiT3Jnc1ByZWZlcmVuY2VzV3JpdGUiLCJvblVwZGF0ZU9yZ2FuaXphdGlvbiIsIm5hbWUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJuYXZJbmRleCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIklucHV0Iiwib25TdWJtaXQiLCJjYW5Xcml0ZU9yZyIsIk9yZ3NXcml0ZSIsInJlZ2lzdGVyIiwicmVxdWlyZWQiLCJnZXRCYWNrZW5kU3J2IiwidXBkYXRlQ29uZmlndXJhdGlvblN1YnRpdGxlIiwib3JnYW5pemF0aW9uTG9hZGVkIiwidXNlck9yZ2FuaXphdGlvbnNMb2FkZWQiLCJkZXBlbmRlbmNpZXMiLCJkaXNwYXRjaCIsIm9yZ2FuaXphdGlvblJlc3BvbnNlIiwiZ2V0IiwiZ2V0U3RvcmUiLCJwdXQiLCJzZXRVc2VyT3JnYW5pemF0aW9uIiwib3JnSWQiLCJwb3N0IiwiY3JlYXRlT3JnYW5pemF0aW9uIiwibmV3T3JnIiwicmVzdWx0IiwiZ2V0VXNlck9yZ2FuaXphdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9