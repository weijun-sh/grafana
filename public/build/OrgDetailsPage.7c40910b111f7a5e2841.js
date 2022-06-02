"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[529],{

 "./public/app/core/components/SharedPreferences/SharedPreferences.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
   "v": () => ( SharedPreferences)
 });
 var _lingui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/@lingui-react-virtual-b84a28ec6c/0/cache/@lingui-react-npm-3.13.2-7672a50569-456e3bbb4b.zip/node_modules/@lingui/react/esm/index.js");
 var _lingui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/@lingui-core-npm-3.13.2-d32cc8860c-16d7ee047c.zip/node_modules/@lingui/core/esm/index.js");
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_core_services_PreferencesService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/PreferencesService.ts");
 var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Tooltip, _Trans, _Trans2, _Trans3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const themes = [{
  value: '',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__ .ag._(
  {
    id: 'shared-preferences.theme.default-label',
    message: 'Default'
  })
}, {
  value: 'dark',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__ .ag._(
  {
    id: 'shared-preferences.theme.dark-label',
    message: 'Dark'
  })
}, {
  value: 'light',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__ .ag._(
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

    this.service = new app_core_services_PreferencesService__WEBPACK_IMPORTED_MODULE_4__ .y(props.resourceUri);
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
    const dashboards = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_5__ .ae.search({
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
      const missing = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_5__ .ae.search({
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

    const homeDashboardTooltip = _Tooltip || (_Tooltip = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      content: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__ .cC, {
        id: "shared-preferences.fields.home-dashboard-tooltip"
      }),
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        name: "info-circle"
      })
    }));

    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
      onSubmit: this.onSubmitForm,
      children: () => {
        var _themes$find;

        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldSet, {
          label: _Trans || (_Trans = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__ .cC, {
            id: "shared-preferences.title"
          })),
          disabled: disabled,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__ .ag._(
            {
              id: 'shared-preferences.fields.theme-label',
              message: 'UI Theme'
            }),
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
              options: themes,
              value: (_themes$find = themes.find(item => item.value === theme)) === null || _themes$find === void 0 ? void 0 : _themes$find.value,
              onChange: this.onThemeChanged
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
              htmlFor: "home-dashboard-select",
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: styles.labelText,
                children: _Trans2 || (_Trans2 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__ .cC, {
                  id: "shared-preferences.fields.home-dashboard-label"
                }))
              }), homeDashboardTooltip]
            }),
            "data-testid": "User preferences home dashboard drop down",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
              value: dashboards.find(dashboard => dashboard.id === homeDashboardId),
              getOptionValue: i => i.id,
              getOptionLabel: this.getFullDashName,
              onChange: dashboard => this.onHomeDashboardChanged(dashboard.id),
              options: dashboards,
              placeholder: _lingui_core__WEBPACK_IMPORTED_MODULE_7__ .ag._(
              {
                id: 'shared-preferences.fields.home-dashboard-placeholder',
                message: 'Choose default dashboard'
              }),
              inputId: "home-dashboard-select"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__ .ag._(
            {
              id: 'shared-dashboard.fields.timezone-label',
              message: 'Timezone'
            }),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ .wl.components.TimeZonePicker.containerV2,
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TimeZonePicker, {
              includeInternal: true,
              value: timezone,
              onChange: this.onTimeZoneChanged,
              inputId: "shared-preferences-timezone-picker"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__ .ag._(
            {
              id: 'shared-preferences.fields.week-start-label',
              message: 'Week start'
            }),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ .wl.components.WeekStartPicker.containerV2,
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.WeekStartPicker, {
              value: weekStart,
              onChange: this.onWeekStartChanged,
              inputId: 'shared-preferences-week-start-picker'
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form-button-row",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
              type: "submit",
              variant: "primary",
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ .wl.components.UserProfile.preferencesSaveButton,
              children: _Trans3 || (_Trans3 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__ .cC, {
                id: "common.save"
              }))
            })
          })]
        });
      }
    });
  }

}
 const __WEBPACK_DEFAULT_EXPORT__ = (SharedPreferences);
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.stylesFactory)(() => {
  return {
    labelText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: 6px;
    `
  };
});

 }),

 "./public/app/features/org/OrgDetailsPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "OrgDetailsPage": () => ( OrgDetailsPage),
  "default": () => ( org_OrgDetailsPage)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var SharedPreferences = __webpack_require__("./public/app/core/components/SharedPreferences/SharedPreferences.tsx");
var core = __webpack_require__("./public/app/core/core.ts");
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var types = __webpack_require__("./public/app/types/index.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _Button;








const OrgProfile = _ref => {
  let {
    onSubmit,
    orgName
  } = _ref;
  const canWriteOrg = core.Vt.hasPermission(types.bW.OrgsWrite);
  return (0,jsx_runtime.jsx)(src.Form, {
    defaultValues: {
      orgName
    },
    onSubmit: _ref2 => {
      let {
        orgName
      } = _ref2;
      return onSubmit(orgName);
    },
    children: _ref3 => {
      let {
        register
      } = _ref3;
      return (0,jsx_runtime.jsxs)(src.FieldSet, {
        label: "Organization profile",
        disabled: !canWriteOrg,
        children: [(0,jsx_runtime.jsx)(src.Field, {
          label: "Organization name",
          children: (0,jsx_runtime.jsx)(src.Input, Object.assign({
            id: "org-name-input",
            type: "text"
          }, register('orgName', {
            required: true
          })))
        }), _Button || (_Button = (0,jsx_runtime.jsx)(src.Button, {
          type: "submit",
          children: "Update organization name"
        }))]
      });
    }
  });
};

 const org_OrgProfile = (OrgProfile);
var actions = __webpack_require__("./public/app/features/org/state/actions.ts");
var reducers = __webpack_require__("./public/app/features/org/state/reducers.ts");
;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class OrgDetailsPage extends react.PureComponent {
  constructor() {
    super(...arguments);

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
    const canReadOrg = core.Vt.hasPermission(types.bW.OrgsRead);
    const canReadPreferences = core.Vt.hasPermission(types.bW.OrgsPreferencesRead);
    const canWritePreferences = core.Vt.hasPermission(types.bW.OrgsPreferencesWrite);
    return (0,jsx_runtime.jsx)(Page.Z, {
      navModel: navModel,
      children: (0,jsx_runtime.jsx)(Page.Z.Contents, {
        isLoading: isLoading,
        children: !isLoading && (0,jsx_runtime.jsxs)(src.VerticalGroup, {
          spacing: "lg",
          children: [canReadOrg && (0,jsx_runtime.jsx)(org_OrgProfile, {
            onSubmit: this.onUpdateOrganization,
            orgName: organization.name
          }), canReadPreferences && (0,jsx_runtime.jsx)(SharedPreferences.Z, {
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
    navModel: (0,navModel.h)(state.navIndex, 'org-settings'),
    organization: state.organization.organization
  };
}

const mapDispatchToProps = {
  loadOrganization: actions.RF,
  setOrganizationName: reducers.xR,
  updateOrganization: actions.FV
};
 const org_OrgDetailsPage = ((0,es.connect)(mapStateToProps, mapDispatchToProps)(OrgDetailsPage));

 }),

 "./public/app/features/org/state/actions.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "FV": () => ( updateOrganization),
   "JE": () => ( getUserOrganizations),
   "Q$": () => ( setUserOrganization),
   "RF": () => ( loadOrganization),
   "Yi": () => ( createOrganization)
 });
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
 var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/org/state/reducers.ts");



function loadOrganization() {
  let dependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
  };
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().get('/api/org');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .jR)(organizationResponse));
    return organizationResponse;
  };
}
function updateOrganization() {
  let dependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
  };
  return async (dispatch, getStore) => {
    const organization = getStore().organization.organization;
    await dependencies.getBackendSrv().put('/api/org', {
      name: organization.name
    });
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__ .H7)(organization.name));
    dispatch(loadOrganization(dependencies));
  };
}
function setUserOrganization(orgId) {
  let dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
  };
  return async dispatch => {
    const organizationResponse = await dependencies.getBackendSrv().post('/api/user/using/' + orgId);
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__ .H7)(organizationResponse.name));
  };
}
function createOrganization(newOrg) {
  let dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
  };
  return async dispatch => {
    const result = await dependencies.getBackendSrv().post('/api/orgs/', newOrg);
    dispatch(setUserOrganization(result.orgId));
  };
}
function getUserOrganizations() {
  let dependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    getBackendSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv
  };
  return async dispatch => {
    const result = await dependencies.getBackendSrv().get('/api/user/orgs');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .IM)(result));
    return result;
  };
}

 })

}]);