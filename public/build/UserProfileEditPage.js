"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UserProfileEditPage"],{

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

/***/ "./public/app/features/profile/UserOrganizations.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserOrganizations": () => (/* binding */ UserOrganizations),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@lingui-react-virtual-b84a28ec6c/0/cache/@lingui-react-npm-3.13.2-7672a50569-456e3bbb4b.zip/node_modules/@lingui/react/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _h, _thead, _Button, _Trans;







class UserOrganizations extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      isLoading,
      orgs,
      user
    } = this.props;

    if (isLoading) {
      return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
        text: "Loading organizations..."
      }));
    }

    if (orgs.length === 0) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
        className: "page-sub-heading",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
          id: "user-orgs.title",
          message: "Organizations"
        })
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "gf-form-group",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
          className: "filter-table form-inline",
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.UserProfile.orgsTable,
          children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                  id: "user-orgs.name-column",
                  message: "Name"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                  id: "user-orgs.role-column",
                  message: "Role"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {})]
            })
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
            children: orgs.map((org, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: org.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: org.role
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  className: "text-right",
                  children: org.orgId === (user === null || user === void 0 ? void 0 : user.orgId) ? _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "secondary",
                    size: "sm",
                    disabled: true,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                      id: "user-orgs.current-org-button",
                      message: "Current"
                    })
                  })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "secondary",
                    size: "sm",
                    onClick: () => {
                      this.props.setUserOrg(org);
                    },
                    children: _Trans || (_Trans = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                      id: "user-orgs.select-org-button",
                      message: "Select organisation"
                    }))
                  })
                })]
              }, index);
            })
          })]
        })
      })]
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserOrganizations);

/***/ }),

/***/ "./public/app/features/profile/UserProfileEditForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileEditForm": () => (/* binding */ UserProfileEditForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/@lingui-react-virtual-b84a28ec6c/0/cache/@lingui-react-npm-3.13.2-7672a50569-456e3bbb4b.zip/node_modules/@lingui/react/esm/index.js");
/* harmony import */ var _lingui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/@lingui-core-npm-3.13.2-d32cc8860c-16d7ee047c.zip/node_modules/@lingui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Trans, _Trans2, _InputSuffix, _Trans3, _InputSuffix2, _InputSuffix3, _Trans4, _Tooltip;









const {
  disableLoginForm
} = app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"];
const UserProfileEditForm = ({
  user,
  isSavingUser,
  updateProfile
}) => {
  const onSubmitProfileUpdate = data => {
    updateProfile(data);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
    onSubmit: onSubmitProfileUpdate,
    validateOn: "onBlur",
    children: ({
      register,
      errors
    }) => {
      var _user$name, _user$email, _user$login;

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
        label: _Trans || (_Trans = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.Trans, {
          id: "user-profile.title",
          message: "Edit profile"
        })),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
          /*i18n*/
          {
            id: 'user-profile.fields.name-label',
            message: 'Name'
          }),
          invalid: !!errors.name,
          error: _Trans2 || (_Trans2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.Trans, {
            id: "user-profile.fields.name-error",
            message: "Name is required"
          })),
          disabled: disableLoginForm,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('name', {
            required: true
          }), {
            id: "edit-user-profile-name",
            placeholder: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
            /*i18n*/
            {
              id: 'user-profile.fields.name-label',
              message: 'Name'
            }),
            defaultValue: (_user$name = user === null || user === void 0 ? void 0 : user.name) !== null && _user$name !== void 0 ? _user$name : '',
            suffix: _InputSuffix || (_InputSuffix = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InputSuffix, {}))
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
          /*i18n*/
          {
            id: 'user-profile.fields.email-label',
            message: 'Email'
          }),
          invalid: !!errors.email,
          error: _Trans3 || (_Trans3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.Trans, {
            id: "user-profile.fields.email-error",
            message: "Email is required"
          })),
          disabled: disableLoginForm,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('email', {
            required: true
          }), {
            id: "edit-user-profile-email",
            placeholder: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
            /*i18n*/
            {
              id: 'user-profile.fields.email-label',
              message: 'Email'
            }),
            defaultValue: (_user$email = user === null || user === void 0 ? void 0 : user.email) !== null && _user$email !== void 0 ? _user$email : '',
            suffix: _InputSuffix2 || (_InputSuffix2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InputSuffix, {}))
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
          label: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
          /*i18n*/
          {
            id: 'user-profile.fields.username-label',
            message: 'Username'
          }),
          disabled: disableLoginForm,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('login'), {
            id: "edit-user-profile-username",
            defaultValue: (_user$login = user === null || user === void 0 ? void 0 : user.login) !== null && _user$login !== void 0 ? _user$login : '',
            placeholder: _lingui_core__WEBPACK_IMPORTED_MODULE_6__.i18n._(
            /*i18n*/
            {
              id: 'user-profile.fields.username-label',
              message: 'Username'
            }),
            suffix: _InputSuffix3 || (_InputSuffix3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(InputSuffix, {}))
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "gf-form-button-row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            variant: "primary",
            disabled: isSavingUser,
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.UserProfile.profileSaveButton,
            type: "submit",
            children: _Trans4 || (_Trans4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_5__.Trans, {
              id: "common.save",
              message: "Save"
            }))
          })
        })]
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserProfileEditForm);

const InputSuffix = () => {
  return disableLoginForm ? _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    content: "Login details locked because they are managed in another system.",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      name: "lock"
    })
  })) : null;
};

/***/ }),

/***/ "./public/app/features/profile/UserProfileEditPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileEditPage": () => (/* binding */ UserProfileEditPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/SharedPreferences/SharedPreferences.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _UserOrganizations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/profile/UserOrganizations.tsx");
/* harmony import */ var _UserProfileEditForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/profile/UserProfileEditForm.tsx");
/* harmony import */ var _UserSessions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/profile/UserSessions.tsx");
/* harmony import */ var _UserTeams__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/profile/UserTeams.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/profile/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _SharedPreferences;
















function mapStateToProps(state) {
  const userState = state.user;
  const {
    user,
    teams,
    orgs,
    sessions,
    teamsAreLoading,
    orgsAreLoading,
    sessionsAreLoading,
    isUpdating
  } = userState;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'profile-settings'),
    orgsAreLoading,
    sessionsAreLoading,
    teamsAreLoading,
    orgs,
    sessions,
    teams,
    isUpdating,
    user
  };
}

const mapDispatchToProps = {
  initUserProfilePage: _state_actions__WEBPACK_IMPORTED_MODULE_10__.initUserProfilePage,
  revokeUserSession: _state_actions__WEBPACK_IMPORTED_MODULE_10__.revokeUserSession,
  changeUserOrg: _state_actions__WEBPACK_IMPORTED_MODULE_10__.changeUserOrg,
  updateUserProfile: _state_actions__WEBPACK_IMPORTED_MODULE_10__.updateUserProfile
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
function UserProfileEditPage({
  navModel,
  orgsAreLoading,
  sessionsAreLoading,
  teamsAreLoading,
  initUserProfilePage,
  orgs,
  sessions,
  teams,
  isUpdating,
  user,
  revokeUserSession,
  changeUserOrg,
  updateUserProfile
}) {
  (0,react_use__WEBPACK_IMPORTED_MODULE_12__["default"])(() => initUserProfilePage());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
      isLoading: !user,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
        spacing: "md",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UserProfileEditForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
          updateProfile: updateUserProfile,
          isSavingUser: isUpdating,
          user: user
        }), _SharedPreferences || (_SharedPreferences = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_4__["default"], {
          resourceUri: "user"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UserTeams__WEBPACK_IMPORTED_MODULE_9__.UserTeams, {
          isLoading: teamsAreLoading,
          teams: teams
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UserOrganizations__WEBPACK_IMPORTED_MODULE_6__["default"], {
          isLoading: orgsAreLoading,
          setUserOrg: changeUserOrg,
          orgs: orgs,
          user: user
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UserSessions__WEBPACK_IMPORTED_MODULE_8__["default"], {
          isLoading: sessionsAreLoading,
          revokeUserSession: revokeUserSession,
          sessions: sessions
        })]
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(UserProfileEditPage));

/***/ }),

/***/ "./public/app/features/profile/UserSessions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@lingui-react-virtual-b84a28ec6c/0/cache/@lingui-react-npm-3.13.2-7672a50569-456e3bbb4b.zip/node_modules/@lingui/react/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _h, _thead, _td, _Icon;










class UserSessions extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      isLoading,
      sessions,
      revokeUserSession,
      i18n
    } = this.props;

    if (isLoading) {
      return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
        text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
          id: "user-sessions.loading",
          message: "Loading sessions..."
        })
      }));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: sessions.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
          className: "page-sub-heading",
          children: "Sessions"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "gf-form-group",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
            className: "filter-table form-inline",
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.components.UserProfile.sessionsTable,
            children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                    id: "user-session.seen-at-column",
                    message: "Last seen"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                    id: "user-session.created-at-column",
                    message: "Logged on"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                    id: "user-session.ip-column",
                    message: "IP address"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_4__.Trans, {
                    id: "user-session.browser-column",
                    message: "Browser & OS"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {})]
              })
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
              children: sessions.map((session, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                children: [session.isActive ? _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: "Now"
                })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: session.seenAt
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: i18n.date(session.createdAt, {
                    dateStyle: 'long'
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: session.clientIp
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("td", {
                  children: [session.browser, " on ", session.os, " ", session.osVersion]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    size: "sm",
                    variant: "destructive",
                    onClick: () => revokeUserSession(session.id),
                    "aria-label": i18n._(
                    /*i18n*/
                    {
                      id: 'user-session.revoke',
                      message: 'Revoke user session'
                    }),
                    children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                      name: "power"
                    }))
                  })
                })]
              }, index))
            })]
          })
        })]
      })
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lingui_react__WEBPACK_IMPORTED_MODULE_4__.withI18n)()(UserSessions));

/***/ }),

/***/ "./public/app/features/profile/UserTeams.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTeams": () => (/* binding */ UserTeams),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _h, _thead;





class UserTeams extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      isLoading,
      teams
    } = this.props;

    if (isLoading) {
      return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
        text: "Loading teams..."
      }));
    }

    if (teams.length === 0) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
        className: "page-sub-heading",
        children: "Teams"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "gf-form-group",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("table", {
          className: "filter-table form-inline",
          "aria-label": "User teams table",
          children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                children: "Name"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
                children: "Members"
              })]
            })
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
            children: teams.map((team, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  className: "width-4 text-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                    className: "filter-table__avatar",
                    src: team.avatarUrl,
                    alt: ""
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  children: team.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  children: team.email
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
                  children: team.memberCount
                })]
              }, index);
            })
          })]
        })
      })]
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserTeams);

/***/ }),

/***/ "./public/app/features/profile/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changePassword": () => (/* binding */ changePassword),
/* harmony export */   "changeUserOrg": () => (/* binding */ changeUserOrg),
/* harmony export */   "initUserProfilePage": () => (/* binding */ initUserProfilePage),
/* harmony export */   "loadUser": () => (/* binding */ loadUser),
/* harmony export */   "revokeUserSession": () => (/* binding */ revokeUserSession),
/* harmony export */   "updateUserProfile": () => (/* binding */ updateUserProfile)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/profile/api.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/profile/state/reducers.ts");



function changePassword(payload) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__.api.changePassword(payload);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({
      updating: false
    }));
  };
}
function initUserProfilePage() {
  return async function (dispatch) {
    await dispatch(loadUser());
    dispatch(loadTeams());
    dispatch(loadOrgs());
    dispatch(loadSessions());
  };
}
function loadUser() {
  return async function (dispatch) {
    const user = await _api__WEBPACK_IMPORTED_MODULE_1__.api.loadUser();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.userLoaded)({
      user
    }));
  };
}

function loadTeams() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.initLoadTeams)());
    const teams = await _api__WEBPACK_IMPORTED_MODULE_1__.api.loadTeams();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.teamsLoaded)({
      teams
    }));
  };
}

function loadOrgs() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.initLoadOrgs)());
    const orgs = await _api__WEBPACK_IMPORTED_MODULE_1__.api.loadOrgs();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.orgsLoaded)({
      orgs
    }));
  };
}

function loadSessions() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.initLoadSessions)());
    const sessions = await _api__WEBPACK_IMPORTED_MODULE_1__.api.loadSessions();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.sessionsLoaded)({
      sessions
    }));
  };
}

function revokeUserSession(tokenId) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__.api.revokeUserSession(tokenId);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.userSessionRevoked)({
      tokenId
    }));
  };
}
function changeUserOrg(org) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__.api.setUserOrg(org);
    window.location.href = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.appSubUrl + '/profile';
  };
}
function updateUserProfile(payload) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__.api.updateUserProfile(payload);
    await dispatch(loadUser());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__.setUpdating)({
      updating: false
    }));
  };
}

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        fn();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMount);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1NoYXJlZFByZWZlcmVuY2VzL1NoYXJlZFByZWZlcmVuY2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wcm9maWxlL1VzZXJPcmdhbml6YXRpb25zLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wcm9maWxlL1VzZXJQcm9maWxlRWRpdEZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3Byb2ZpbGUvVXNlclByb2ZpbGVFZGl0UGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcHJvZmlsZS9Vc2VyU2Vzc2lvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3Byb2ZpbGUvVXNlclRlYW1zLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wcm9maWxlL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXVzZS12aXJ0dWFsLTAwMzI2ZTcwYmEvMC9jYWNoZS9yZWFjdC11c2UtbnBtLTE3LjMuMi1hMDMyY2JlYjAxLTczNzk0NjBmNTEuemlwL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZU1vdW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyB0LCBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIEZpZWxkLFxuICBGaWVsZFNldCxcbiAgRm9ybSxcbiAgSWNvbixcbiAgTGFiZWwsXG4gIFJhZGlvQnV0dG9uR3JvdXAsXG4gIFNlbGVjdCxcbiAgc3R5bGVzRmFjdG9yeSxcbiAgVGltZVpvbmVQaWNrZXIsXG4gIFRvb2x0aXAsXG4gIFdlZWtTdGFydFBpY2tlcixcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUHJlZmVyZW5jZXNTZXJ2aWNlIH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvUHJlZmVyZW5jZXNTZXJ2aWNlJztcbmltcG9ydCB7IGJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBEYXNoYm9hcmRTZWFyY2hIaXQsIERhc2hib2FyZFNlYXJjaEl0ZW1UeXBlIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3NlYXJjaC90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZXNvdXJjZVVyaTogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBob21lRGFzaGJvYXJkSWQ6IG51bWJlcjtcbiAgdGhlbWU6IHN0cmluZztcbiAgdGltZXpvbmU6IHN0cmluZztcbiAgd2Vla1N0YXJ0OiBzdHJpbmc7XG4gIGRhc2hib2FyZHM6IERhc2hib2FyZFNlYXJjaEhpdFtdO1xufVxuXG5jb25zdCB0aGVtZXM6IFNlbGVjdGFibGVWYWx1ZVtdID0gW1xuICB7IHZhbHVlOiAnJywgbGFiZWw6IHQoeyBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy50aGVtZS5kZWZhdWx0LWxhYmVsJywgbWVzc2FnZTogJ0RlZmF1bHQnIH0pIH0sXG4gIHsgdmFsdWU6ICdkYXJrJywgbGFiZWw6IHQoeyBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy50aGVtZS5kYXJrLWxhYmVsJywgbWVzc2FnZTogJ0RhcmsnIH0pIH0sXG4gIHsgdmFsdWU6ICdsaWdodCcsIGxhYmVsOiB0KHsgaWQ6ICdzaGFyZWQtcHJlZmVyZW5jZXMudGhlbWUubGlnaHQtbGFiZWwnLCBtZXNzYWdlOiAnTGlnaHQnIH0pIH0sXG5dO1xuXG5leHBvcnQgY2xhc3MgU2hhcmVkUHJlZmVyZW5jZXMgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBzZXJ2aWNlOiBQcmVmZXJlbmNlc1NlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zZXJ2aWNlID0gbmV3IFByZWZlcmVuY2VzU2VydmljZShwcm9wcy5yZXNvdXJjZVVyaSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvbWVEYXNoYm9hcmRJZDogMCxcbiAgICAgIHRoZW1lOiAnJyxcbiAgICAgIHRpbWV6b25lOiAnJyxcbiAgICAgIHdlZWtTdGFydDogJycsXG4gICAgICBkYXNoYm9hcmRzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgcHJlZnMgPSBhd2FpdCB0aGlzLnNlcnZpY2UubG9hZCgpO1xuICAgIGNvbnN0IGRhc2hib2FyZHMgPSBhd2FpdCBiYWNrZW5kU3J2LnNlYXJjaCh7IHN0YXJyZWQ6IHRydWUgfSk7XG4gICAgY29uc3QgZGVmYXVsdERhc2hib2FyZEhpdDogRGFzaGJvYXJkU2VhcmNoSGl0ID0ge1xuICAgICAgaWQ6IDAsXG4gICAgICB0aXRsZTogJ0RlZmF1bHQnLFxuICAgICAgdGFnczogW10sXG4gICAgICB0eXBlOiAnJyBhcyBEYXNoYm9hcmRTZWFyY2hJdGVtVHlwZSxcbiAgICAgIHVpZDogJycsXG4gICAgICB1cmk6ICcnLFxuICAgICAgdXJsOiAnJyxcbiAgICAgIGZvbGRlcklkOiAwLFxuICAgICAgZm9sZGVyVGl0bGU6ICcnLFxuICAgICAgZm9sZGVyVWlkOiAnJyxcbiAgICAgIGZvbGRlclVybDogJycsXG4gICAgICBpc1N0YXJyZWQ6IGZhbHNlLFxuICAgICAgc2x1ZzogJycsXG4gICAgICBpdGVtczogW10sXG4gICAgfTtcblxuICAgIGlmIChwcmVmcy5ob21lRGFzaGJvYXJkSWQgPiAwICYmICFkYXNoYm9hcmRzLmZpbmQoKGQpID0+IGQuaWQgPT09IHByZWZzLmhvbWVEYXNoYm9hcmRJZCkpIHtcbiAgICAgIGNvbnN0IG1pc3NpbmcgPSBhd2FpdCBiYWNrZW5kU3J2LnNlYXJjaCh7IGRhc2hib2FyZElkczogW3ByZWZzLmhvbWVEYXNoYm9hcmRJZF0gfSk7XG4gICAgICBpZiAobWlzc2luZyAmJiBtaXNzaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGFzaGJvYXJkcy5wdXNoKG1pc3NpbmdbMF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaG9tZURhc2hib2FyZElkOiBwcmVmcy5ob21lRGFzaGJvYXJkSWQsXG4gICAgICB0aGVtZTogcHJlZnMudGhlbWUsXG4gICAgICB0aW1lem9uZTogcHJlZnMudGltZXpvbmUsXG4gICAgICB3ZWVrU3RhcnQ6IHByZWZzLndlZWtTdGFydCxcbiAgICAgIGRhc2hib2FyZHM6IFtkZWZhdWx0RGFzaGJvYXJkSGl0LCAuLi5kYXNoYm9hcmRzXSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0Rm9ybSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGhvbWVEYXNoYm9hcmRJZCwgdGhlbWUsIHRpbWV6b25lLCB3ZWVrU3RhcnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgYXdhaXQgdGhpcy5zZXJ2aWNlLnVwZGF0ZSh7IGhvbWVEYXNoYm9hcmRJZCwgdGhlbWUsIHRpbWV6b25lLCB3ZWVrU3RhcnQgfSk7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9O1xuXG4gIG9uVGhlbWVDaGFuZ2VkID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdGhlbWU6IHZhbHVlIH0pO1xuICB9O1xuXG4gIG9uVGltZVpvbmVDaGFuZ2VkID0gKHRpbWV6b25lPzogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCF0aW1lem9uZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgdGltZXpvbmU6IHRpbWV6b25lIH0pO1xuICB9O1xuXG4gIG9uV2Vla1N0YXJ0Q2hhbmdlZCA9ICh3ZWVrU3RhcnQ6IHN0cmluZykgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWVrU3RhcnQ6IHdlZWtTdGFydCB9KTtcbiAgfTtcblxuICBvbkhvbWVEYXNoYm9hcmRDaGFuZ2VkID0gKGRhc2hib2FyZElkOiBudW1iZXIpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaG9tZURhc2hib2FyZElkOiBkYXNoYm9hcmRJZCB9KTtcbiAgfTtcblxuICBnZXRGdWxsRGFzaE5hbWUgPSAoZGFzaGJvYXJkOiBTZWxlY3RhYmxlVmFsdWU8RGFzaGJvYXJkU2VhcmNoSGl0PikgPT4ge1xuICAgIGlmICh0eXBlb2YgZGFzaGJvYXJkLmZvbGRlclRpdGxlID09PSAndW5kZWZpbmVkJyB8fCBkYXNoYm9hcmQuZm9sZGVyVGl0bGUgPT09ICcnKSB7XG4gICAgICByZXR1cm4gZGFzaGJvYXJkLnRpdGxlO1xuICAgIH1cbiAgICByZXR1cm4gZGFzaGJvYXJkLmZvbGRlclRpdGxlICsgJyAvICcgKyBkYXNoYm9hcmQudGl0bGU7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIHRpbWV6b25lLCB3ZWVrU3RhcnQsIGhvbWVEYXNoYm9hcmRJZCwgZGFzaGJvYXJkcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcygpO1xuXG4gICAgY29uc3QgaG9tZURhc2hib2FyZFRvb2x0aXAgPSAoXG4gICAgICA8VG9vbHRpcFxuICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICA8VHJhbnMgaWQ9XCJzaGFyZWQtcHJlZmVyZW5jZXMuZmllbGRzLmhvbWUtZGFzaGJvYXJkLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIE5vdCBmaW5kaW5nIHRoZSBkYXNoYm9hcmQgeW91IHdhbnQ/IFN0YXIgaXQgZmlyc3QsIHRoZW4gaXQgc2hvdWxkIGFwcGVhciBpbiB0aGlzIHNlbGVjdCBib3guXG4gICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8SWNvbiBuYW1lPVwiaW5mby1jaXJjbGVcIiAvPlxuICAgICAgPC9Ub29sdGlwPlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXRGb3JtfT5cbiAgICAgICAgeygpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZpZWxkU2V0IGxhYmVsPXs8VHJhbnMgaWQ9XCJzaGFyZWQtcHJlZmVyZW5jZXMudGl0bGVcIj5QcmVmZXJlbmNlczwvVHJhbnM+fSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgICAgICAgICA8RmllbGQgbGFiZWw9e3QoeyBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMudGhlbWUtbGFiZWwnLCBtZXNzYWdlOiAnVUkgVGhlbWUnIH0pfT5cbiAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cFxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dGhlbWVzfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoZW1lcy5maW5kKChpdGVtKSA9PiBpdGVtLnZhbHVlID09PSB0aGVtZSk/LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UaGVtZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD17XG4gICAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImhvbWUtZGFzaGJvYXJkLXNlbGVjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbFRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMuaG9tZS1kYXNoYm9hcmQtbGFiZWxcIj5Ib21lIERhc2hib2FyZDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICB7aG9tZURhc2hib2FyZFRvb2x0aXB9XG4gICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cIlVzZXIgcHJlZmVyZW5jZXMgaG9tZSBkYXNoYm9hcmQgZHJvcCBkb3duXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXNoYm9hcmRzLmZpbmQoKGRhc2hib2FyZCkgPT4gZGFzaGJvYXJkLmlkID09PSBob21lRGFzaGJvYXJkSWQpfVxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uVmFsdWU9eyhpKSA9PiBpLmlkfVxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9e3RoaXMuZ2V0RnVsbERhc2hOYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXNoYm9hcmQ6IFNlbGVjdGFibGVWYWx1ZTxEYXNoYm9hcmRTZWFyY2hIaXQ+KSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSG9tZURhc2hib2FyZENoYW5nZWQoZGFzaGJvYXJkLmlkKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZGFzaGJvYXJkc31cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdzaGFyZWQtcHJlZmVyZW5jZXMuZmllbGRzLmhvbWUtZGFzaGJvYXJkLXBsYWNlaG9sZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Nob29zZSBkZWZhdWx0IGRhc2hib2FyZCcsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9XCJob21lLWRhc2hib2FyZC1zZWxlY3RcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoeyBpZDogJ3NoYXJlZC1kYXNoYm9hcmQuZmllbGRzLnRpbWV6b25lLWxhYmVsJywgbWVzc2FnZTogJ1RpbWV6b25lJyB9KX1cbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17c2VsZWN0b3JzLmNvbXBvbmVudHMuVGltZVpvbmVQaWNrZXIuY29udGFpbmVyVjJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VGltZVpvbmVQaWNrZXJcbiAgICAgICAgICAgICAgICAgIGluY2x1ZGVJbnRlcm5hbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aW1lem9uZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGltZVpvbmVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD1cInNoYXJlZC1wcmVmZXJlbmNlcy10aW1lem9uZS1waWNrZXJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoeyBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMud2Vlay1zdGFydC1sYWJlbCcsIG1lc3NhZ2U6ICdXZWVrIHN0YXJ0JyB9KX1cbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17c2VsZWN0b3JzLmNvbXBvbmVudHMuV2Vla1N0YXJ0UGlja2VyLmNvbnRhaW5lclYyfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFdlZWtTdGFydFBpY2tlclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3dlZWtTdGFydH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uV2Vla1N0YXJ0Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgIGlucHV0SWQ9eydzaGFyZWQtcHJlZmVyZW5jZXMtd2Vlay1zdGFydC1waWNrZXInfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWJ1dHRvbi1yb3dcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5Vc2VyUHJvZmlsZS5wcmVmZXJlbmNlc1NhdmVCdXR0b259XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwiY29tbW9uLnNhdmVcIj5TYXZlPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0ZpZWxkU2V0PlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0Zvcm0+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFyZWRQcmVmZXJlbmNlcztcblxuY29uc3QgZ2V0U3R5bGVzID0gc3R5bGVzRmFjdG9yeSgoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbGFiZWxUZXh0OiBjc3NgXG4gICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICBgLFxuICB9O1xufSk7XG4iLCJpbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgQnV0dG9uLCBMb2FkaW5nUGxhY2Vob2xkZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBVc2VyRFRPLCBVc2VyT3JnIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXI6IFVzZXJEVE8gfCBudWxsO1xuICBvcmdzOiBVc2VyT3JnW107XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgc2V0VXNlck9yZzogKG9yZzogVXNlck9yZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFVzZXJPcmdhbml6YXRpb25zIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0xvYWRpbmcsIG9yZ3MsIHVzZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PVwiTG9hZGluZyBvcmdhbml6YXRpb25zLi4uXCIgLz47XG4gICAgfVxuXG4gICAgaWYgKG9yZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2Utc3ViLWhlYWRpbmdcIj5cbiAgICAgICAgICA8VHJhbnMgaWQ9XCJ1c2VyLW9yZ3MudGl0bGVcIj5Pcmdhbml6YXRpb25zPC9UcmFucz5cbiAgICAgICAgPC9oMz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlIGZvcm0taW5saW5lXCIgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLlVzZXJQcm9maWxlLm9yZ3NUYWJsZX0+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJ1c2VyLW9yZ3MubmFtZS1jb2x1bW5cIj5OYW1lPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInVzZXItb3Jncy5yb2xlLWNvbHVtblwiPlJvbGU8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIC8+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7b3Jncy5tYXAoKG9yZzogVXNlck9yZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e29yZy5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57b3JnLnJvbGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7b3JnLm9yZ0lkID09PSB1c2VyPy5vcmdJZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJzbVwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJ1c2VyLW9yZ3MuY3VycmVudC1vcmctYnV0dG9uXCI+Q3VycmVudDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0VXNlck9yZyhvcmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJ1c2VyLW9yZ3Muc2VsZWN0LW9yZy1idXR0b25cIj5TZWxlY3Qgb3JnYW5pc2F0aW9uPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlck9yZ2FuaXphdGlvbnM7XG4iLCJpbXBvcnQgeyBUcmFucywgdCB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IEJ1dHRvbiwgRmllbGQsIEZpZWxkU2V0LCBGb3JtLCBJY29uLCBJbnB1dCwgVG9vbHRpcCB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IFVzZXJEVE8gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBQcm9maWxlVXBkYXRlRmllbGRzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICB1c2VyOiBVc2VyRFRPIHwgbnVsbDtcbiAgaXNTYXZpbmdVc2VyOiBib29sZWFuO1xuICB1cGRhdGVQcm9maWxlOiAocGF5bG9hZDogUHJvZmlsZVVwZGF0ZUZpZWxkcykgPT4gdm9pZDtcbn1cblxuY29uc3QgeyBkaXNhYmxlTG9naW5Gb3JtIH0gPSBjb25maWc7XG5cbmV4cG9ydCBjb25zdCBVc2VyUHJvZmlsZUVkaXRGb3JtOiBGQzxQcm9wcz4gPSAoeyB1c2VyLCBpc1NhdmluZ1VzZXIsIHVwZGF0ZVByb2ZpbGUgfSkgPT4ge1xuICBjb25zdCBvblN1Ym1pdFByb2ZpbGVVcGRhdGUgPSAoZGF0YTogUHJvZmlsZVVwZGF0ZUZpZWxkcykgPT4ge1xuICAgIHVwZGF0ZVByb2ZpbGUoZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXRQcm9maWxlVXBkYXRlfSB2YWxpZGF0ZU9uPVwib25CbHVyXCI+XG4gICAgICB7KHsgcmVnaXN0ZXIsIGVycm9ycyB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEZpZWxkU2V0IGxhYmVsPXs8VHJhbnMgaWQ9XCJ1c2VyLXByb2ZpbGUudGl0bGVcIj5FZGl0IHByb2ZpbGU8L1RyYW5zPn0+XG4gICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9e3QoeyBpZDogJ3VzZXItcHJvZmlsZS5maWVsZHMubmFtZS1sYWJlbCcsIG1lc3NhZ2U6ICdOYW1lJyB9KX1cbiAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMubmFtZX1cbiAgICAgICAgICAgICAgZXJyb3I9ezxUcmFucyBpZD1cInVzZXItcHJvZmlsZS5maWVsZHMubmFtZS1lcnJvclwiPk5hbWUgaXMgcmVxdWlyZWQ8L1RyYW5zPn1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVMb2dpbkZvcm19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignbmFtZScsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAgICAgaWQ9XCJlZGl0LXVzZXItcHJvZmlsZS1uYW1lXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCh7IGlkOiAndXNlci1wcm9maWxlLmZpZWxkcy5uYW1lLWxhYmVsJywgbWVzc2FnZTogJ05hbWUnIH0pfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dXNlcj8ubmFtZSA/PyAnJ31cbiAgICAgICAgICAgICAgICBzdWZmaXg9ezxJbnB1dFN1ZmZpeCAvPn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD17dCh7IGlkOiAndXNlci1wcm9maWxlLmZpZWxkcy5lbWFpbC1sYWJlbCcsIG1lc3NhZ2U6ICdFbWFpbCcgfSl9XG4gICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgICBlcnJvcj17PFRyYW5zIGlkPVwidXNlci1wcm9maWxlLmZpZWxkcy5lbWFpbC1lcnJvclwiPkVtYWlsIGlzIHJlcXVpcmVkPC9UcmFucz59XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlTG9naW5Gb3JtfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2VtYWlsJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICBpZD1cImVkaXQtdXNlci1wcm9maWxlLWVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCh7IGlkOiAndXNlci1wcm9maWxlLmZpZWxkcy5lbWFpbC1sYWJlbCcsIG1lc3NhZ2U6ICdFbWFpbCcgfSl9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt1c2VyPy5lbWFpbCA/PyAnJ31cbiAgICAgICAgICAgICAgICBzdWZmaXg9ezxJbnB1dFN1ZmZpeCAvPn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG5cbiAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD17dCh7IGlkOiAndXNlci1wcm9maWxlLmZpZWxkcy51c2VybmFtZS1sYWJlbCcsIG1lc3NhZ2U6ICdVc2VybmFtZScgfSl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlTG9naW5Gb3JtfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2xvZ2luJyl9XG4gICAgICAgICAgICAgICAgaWQ9XCJlZGl0LXVzZXItcHJvZmlsZS11c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt1c2VyPy5sb2dpbiA/PyAnJ31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCh7IGlkOiAndXNlci1wcm9maWxlLmZpZWxkcy51c2VybmFtZS1sYWJlbCcsIG1lc3NhZ2U6ICdVc2VybmFtZScgfSl9XG4gICAgICAgICAgICAgICAgc3VmZml4PXs8SW5wdXRTdWZmaXggLz59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tYnV0dG9uLXJvd1wiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1NhdmluZ1VzZXJ9XG4gICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLlVzZXJQcm9maWxlLnByb2ZpbGVTYXZlQnV0dG9ufVxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwiY29tbW9uLnNhdmVcIj5TYXZlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0ZpZWxkU2V0PlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L0Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZUVkaXRGb3JtO1xuXG5jb25zdCBJbnB1dFN1ZmZpeDogRkMgPSAoKSA9PiB7XG4gIHJldHVybiBkaXNhYmxlTG9naW5Gb3JtID8gKFxuICAgIDxUb29sdGlwIGNvbnRlbnQ9XCJMb2dpbiBkZXRhaWxzIGxvY2tlZCBiZWNhdXNlIHRoZXkgYXJlIG1hbmFnZWQgaW4gYW5vdGhlciBzeXN0ZW0uXCI+XG4gICAgICA8SWNvbiBuYW1lPVwibG9ja1wiIC8+XG4gICAgPC9Ub29sdGlwPlxuICApIDogbnVsbDtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VNb3VudCB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IFNoYXJlZFByZWZlcmVuY2VzIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvU2hhcmVkUHJlZmVyZW5jZXMvU2hhcmVkUHJlZmVyZW5jZXMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCBVc2VyT3JnYW5pemF0aW9ucyBmcm9tICcuL1VzZXJPcmdhbml6YXRpb25zJztcbmltcG9ydCBVc2VyUHJvZmlsZUVkaXRGb3JtIGZyb20gJy4vVXNlclByb2ZpbGVFZGl0Rm9ybSc7XG5pbXBvcnQgVXNlclNlc3Npb25zIGZyb20gJy4vVXNlclNlc3Npb25zJztcbmltcG9ydCB7IFVzZXJUZWFtcyB9IGZyb20gJy4vVXNlclRlYW1zJztcbmltcG9ydCB7IGNoYW5nZVVzZXJPcmcsIGluaXRVc2VyUHJvZmlsZVBhZ2UsIHJldm9rZVVzZXJTZXNzaW9uLCB1cGRhdGVVc2VyUHJvZmlsZSB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3duUHJvcHMge1xuICBuYXZNb2RlbDogTmF2TW9kZWw7XG59XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICBjb25zdCB1c2VyU3RhdGUgPSBzdGF0ZS51c2VyO1xuICBjb25zdCB7IHVzZXIsIHRlYW1zLCBvcmdzLCBzZXNzaW9ucywgdGVhbXNBcmVMb2FkaW5nLCBvcmdzQXJlTG9hZGluZywgc2Vzc2lvbnNBcmVMb2FkaW5nLCBpc1VwZGF0aW5nIH0gPSB1c2VyU3RhdGU7XG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAncHJvZmlsZS1zZXR0aW5ncycpLFxuICAgIG9yZ3NBcmVMb2FkaW5nLFxuICAgIHNlc3Npb25zQXJlTG9hZGluZyxcbiAgICB0ZWFtc0FyZUxvYWRpbmcsXG4gICAgb3JncyxcbiAgICBzZXNzaW9ucyxcbiAgICB0ZWFtcyxcbiAgICBpc1VwZGF0aW5nLFxuICAgIHVzZXIsXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgaW5pdFVzZXJQcm9maWxlUGFnZSxcbiAgcmV2b2tlVXNlclNlc3Npb24sXG4gIGNoYW5nZVVzZXJPcmcsXG4gIHVwZGF0ZVVzZXJQcm9maWxlLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJQcm9maWxlRWRpdFBhZ2Uoe1xuICBuYXZNb2RlbCxcbiAgb3Jnc0FyZUxvYWRpbmcsXG4gIHNlc3Npb25zQXJlTG9hZGluZyxcbiAgdGVhbXNBcmVMb2FkaW5nLFxuICBpbml0VXNlclByb2ZpbGVQYWdlLFxuICBvcmdzLFxuICBzZXNzaW9ucyxcbiAgdGVhbXMsXG4gIGlzVXBkYXRpbmcsXG4gIHVzZXIsXG4gIHJldm9rZVVzZXJTZXNzaW9uLFxuICBjaGFuZ2VVc2VyT3JnLFxuICB1cGRhdGVVc2VyUHJvZmlsZSxcbn06IFByb3BzKSB7XG4gIHVzZU1vdW50KCgpID0+IGluaXRVc2VyUHJvZmlsZVBhZ2UoKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXshdXNlcn0+XG4gICAgICAgIDxWZXJ0aWNhbEdyb3VwIHNwYWNpbmc9XCJtZFwiPlxuICAgICAgICAgIDxVc2VyUHJvZmlsZUVkaXRGb3JtIHVwZGF0ZVByb2ZpbGU9e3VwZGF0ZVVzZXJQcm9maWxlfSBpc1NhdmluZ1VzZXI9e2lzVXBkYXRpbmd9IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgPFNoYXJlZFByZWZlcmVuY2VzIHJlc291cmNlVXJpPVwidXNlclwiIC8+XG4gICAgICAgICAgPFVzZXJUZWFtcyBpc0xvYWRpbmc9e3RlYW1zQXJlTG9hZGluZ30gdGVhbXM9e3RlYW1zfSAvPlxuICAgICAgICAgIDxVc2VyT3JnYW5pemF0aW9ucyBpc0xvYWRpbmc9e29yZ3NBcmVMb2FkaW5nfSBzZXRVc2VyT3JnPXtjaGFuZ2VVc2VyT3JnfSBvcmdzPXtvcmdzfSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgIDxVc2VyU2Vzc2lvbnMgaXNMb2FkaW5nPXtzZXNzaW9uc0FyZUxvYWRpbmd9IHJldm9rZVVzZXJTZXNzaW9uPXtyZXZva2VVc2VyU2Vzc2lvbn0gc2Vzc2lvbnM9e3Nlc3Npb25zfSAvPlxuICAgICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoVXNlclByb2ZpbGVFZGl0UGFnZSk7XG4iLCJpbXBvcnQgeyB0LCBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nO1xuaW1wb3J0IHsgd2l0aEkxOG4sIHdpdGhJMThuUHJvcHMgfSBmcm9tICdAbGluZ3VpL3JlYWN0JztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiwgTG9hZGluZ1BsYWNlaG9sZGVyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgVXNlclNlc3Npb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyB3aXRoSTE4blByb3BzIHtcbiAgc2Vzc2lvbnM6IFVzZXJTZXNzaW9uW107XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgcmV2b2tlVXNlclNlc3Npb246ICh0b2tlbklkOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmNsYXNzIFVzZXJTZXNzaW9ucyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBzZXNzaW9ucywgcmV2b2tlVXNlclNlc3Npb24sIGkxOG4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PXs8VHJhbnMgaWQ9XCJ1c2VyLXNlc3Npb25zLmxvYWRpbmdcIj5Mb2FkaW5nIHNlc3Npb25zLi4uPC9UcmFucz59IC8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7c2Vzc2lvbnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXN1Yi1oZWFkaW5nXCI+U2Vzc2lvbnM8L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaWx0ZXItdGFibGUgZm9ybS1pbmxpbmVcIiBkYXRhLXRlc3RpZD17c2VsZWN0b3JzLmNvbXBvbmVudHMuVXNlclByb2ZpbGUuc2Vzc2lvbnNUYWJsZX0+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwidXNlci1zZXNzaW9uLnNlZW4tYXQtY29sdW1uXCI+TGFzdCBzZWVuPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInVzZXItc2Vzc2lvbi5jcmVhdGVkLWF0LWNvbHVtblwiPkxvZ2dlZCBvbjwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJ1c2VyLXNlc3Npb24uaXAtY29sdW1uXCI+SVAgYWRkcmVzczwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJ1c2VyLXNlc3Npb24uYnJvd3Nlci1jb2x1bW5cIj5Ccm93c2VyICZhbXA7IE9TPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAge3Nlc3Npb25zLm1hcCgoc2Vzc2lvbjogVXNlclNlc3Npb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi5pc0FjdGl2ZSA/IDx0ZD5Ob3c8L3RkPiA6IDx0ZD57c2Vzc2lvbi5zZWVuQXR9PC90ZD59XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPntpMThuLmRhdGUoc2Vzc2lvbi5jcmVhdGVkQXQsIHsgZGF0ZVN0eWxlOiAnbG9uZycgfSl9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Nlc3Npb24uY2xpZW50SXB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi5icm93c2VyfSBvbiB7c2Vzc2lvbi5vc30ge3Nlc3Npb24ub3NWZXJzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZXZva2VVc2VyU2Vzc2lvbihzZXNzaW9uLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCh7IGlkOiAndXNlci1zZXNzaW9uLnJldm9rZScsIG1lc3NhZ2U6ICdSZXZva2UgdXNlciBzZXNzaW9uJyB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInBvd2VyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhJMThuKCkoVXNlclNlc3Npb25zKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBMb2FkaW5nUGxhY2Vob2xkZXIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBUZWFtIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHRlYW1zOiBUZWFtW107XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFVzZXJUZWFtcyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCB0ZWFtcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9XCJMb2FkaW5nIHRlYW1zLi4uXCIgLz47XG4gICAgfVxuXG4gICAgaWYgKHRlYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXN1Yi1oZWFkaW5nXCI+VGVhbXM8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlIGZvcm0taW5saW5lXCIgYXJpYS1sYWJlbD1cIlVzZXIgdGVhbXMgdGFibGVcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCAvPlxuICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5NZW1iZXJzPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHt0ZWFtcy5tYXAoKHRlYW06IFRlYW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndpZHRoLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZV9fYXZhdGFyXCIgc3JjPXt0ZWFtLmF2YXRhclVybH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0ZWFtLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPnt0ZWFtLmVtYWlsfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGVhbS5tZW1iZXJDb3VudH08L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJUZWFtcztcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5pbXBvcnQgeyBUaHVua1Jlc3VsdCwgVXNlck9yZyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL2FwaSc7XG5pbXBvcnQgeyBDaGFuZ2VQYXNzd29yZEZpZWxkcywgUHJvZmlsZVVwZGF0ZUZpZWxkcyB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHtcbiAgaW5pdExvYWRPcmdzLFxuICBpbml0TG9hZFNlc3Npb25zLFxuICBpbml0TG9hZFRlYW1zLFxuICBvcmdzTG9hZGVkLFxuICBzZXNzaW9uc0xvYWRlZCxcbiAgc2V0VXBkYXRpbmcsXG4gIHRlYW1zTG9hZGVkLFxuICB1c2VyTG9hZGVkLFxuICB1c2VyU2Vzc2lvblJldm9rZWQsXG59IGZyb20gJy4vcmVkdWNlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUGFzc3dvcmQocGF5bG9hZDogQ2hhbmdlUGFzc3dvcmRGaWVsZHMpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBkaXNwYXRjaChzZXRVcGRhdGluZyh7IHVwZGF0aW5nOiB0cnVlIH0pKTtcbiAgICBhd2FpdCBhcGkuY2hhbmdlUGFzc3dvcmQocGF5bG9hZCk7XG4gICAgZGlzcGF0Y2goc2V0VXBkYXRpbmcoeyB1cGRhdGluZzogZmFsc2UgfSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdFVzZXJQcm9maWxlUGFnZSgpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBhd2FpdCBkaXNwYXRjaChsb2FkVXNlcigpKTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbXMoKSk7XG4gICAgZGlzcGF0Y2gobG9hZE9yZ3MoKSk7XG4gICAgZGlzcGF0Y2gobG9hZFNlc3Npb25zKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFVzZXIoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGFwaS5sb2FkVXNlcigpO1xuICAgIGRpc3BhdGNoKHVzZXJMb2FkZWQoeyB1c2VyIH0pKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbG9hZFRlYW1zKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKGluaXRMb2FkVGVhbXMoKSk7XG4gICAgY29uc3QgdGVhbXMgPSBhd2FpdCBhcGkubG9hZFRlYW1zKCk7XG4gICAgZGlzcGF0Y2godGVhbXNMb2FkZWQoeyB0ZWFtcyB9KSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGxvYWRPcmdzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKGluaXRMb2FkT3JncygpKTtcbiAgICBjb25zdCBvcmdzID0gYXdhaXQgYXBpLmxvYWRPcmdzKCk7XG4gICAgZGlzcGF0Y2gob3Jnc0xvYWRlZCh7IG9yZ3MgfSkpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBsb2FkU2Vzc2lvbnMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZGlzcGF0Y2goaW5pdExvYWRTZXNzaW9ucygpKTtcbiAgICBjb25zdCBzZXNzaW9ucyA9IGF3YWl0IGFwaS5sb2FkU2Vzc2lvbnMoKTtcbiAgICBkaXNwYXRjaChzZXNzaW9uc0xvYWRlZCh7IHNlc3Npb25zIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldm9rZVVzZXJTZXNzaW9uKHRva2VuSWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKHNldFVwZGF0aW5nKHsgdXBkYXRpbmc6IHRydWUgfSkpO1xuICAgIGF3YWl0IGFwaS5yZXZva2VVc2VyU2Vzc2lvbih0b2tlbklkKTtcbiAgICBkaXNwYXRjaCh1c2VyU2Vzc2lvblJldm9rZWQoeyB0b2tlbklkIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVVzZXJPcmcob3JnOiBVc2VyT3JnKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZGlzcGF0Y2goc2V0VXBkYXRpbmcoeyB1cGRhdGluZzogdHJ1ZSB9KSk7XG4gICAgYXdhaXQgYXBpLnNldFVzZXJPcmcob3JnKTtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGNvbmZpZy5hcHBTdWJVcmwgKyAnL3Byb2ZpbGUnO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVXNlclByb2ZpbGUocGF5bG9hZDogUHJvZmlsZVVwZGF0ZUZpZWxkcyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGRpc3BhdGNoKHNldFVwZGF0aW5nKHsgdXBkYXRpbmc6IHRydWUgfSkpO1xuICAgIGF3YWl0IGFwaS51cGRhdGVVc2VyUHJvZmlsZShwYXlsb2FkKTtcbiAgICBhd2FpdCBkaXNwYXRjaChsb2FkVXNlcigpKTtcbiAgICBkaXNwYXRjaChzZXRVcGRhdGluZyh7IHVwZGF0aW5nOiBmYWxzZSB9KSk7XG4gIH07XG59XG4iLCJpbXBvcnQgdXNlRWZmZWN0T25jZSBmcm9tICcuL3VzZUVmZmVjdE9uY2UnO1xudmFyIHVzZU1vdW50ID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgdXNlRWZmZWN0T25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZuKCk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlTW91bnQ7XG4iXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Iiwic2VsZWN0b3JzIiwiQnV0dG9uIiwiRmllbGQiLCJGaWVsZFNldCIsIkZvcm0iLCJJY29uIiwiTGFiZWwiLCJSYWRpb0J1dHRvbkdyb3VwIiwiU2VsZWN0Iiwic3R5bGVzRmFjdG9yeSIsIlRpbWVab25lUGlja2VyIiwiVG9vbHRpcCIsIldlZWtTdGFydFBpY2tlciIsIlByZWZlcmVuY2VzU2VydmljZSIsImJhY2tlbmRTcnYiLCJ0aGVtZXMiLCJ2YWx1ZSIsImxhYmVsIiwiaWQiLCJTaGFyZWRQcmVmZXJlbmNlcyIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJob21lRGFzaGJvYXJkSWQiLCJ0aGVtZSIsInRpbWV6b25lIiwid2Vla1N0YXJ0Iiwic3RhdGUiLCJzZXJ2aWNlIiwidXBkYXRlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJzZXRTdGF0ZSIsImRhc2hib2FyZElkIiwiZGFzaGJvYXJkIiwiZm9sZGVyVGl0bGUiLCJ0aXRsZSIsInJlc291cmNlVXJpIiwiZGFzaGJvYXJkcyIsImNvbXBvbmVudERpZE1vdW50IiwicHJlZnMiLCJsb2FkIiwic2VhcmNoIiwic3RhcnJlZCIsImRlZmF1bHREYXNoYm9hcmRIaXQiLCJ0YWdzIiwidHlwZSIsInVpZCIsInVyaSIsInVybCIsImZvbGRlcklkIiwiZm9sZGVyVWlkIiwiZm9sZGVyVXJsIiwiaXNTdGFycmVkIiwic2x1ZyIsIml0ZW1zIiwiZmluZCIsImQiLCJtaXNzaW5nIiwiZGFzaGJvYXJkSWRzIiwibGVuZ3RoIiwicHVzaCIsInJlbmRlciIsImRpc2FibGVkIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiaG9tZURhc2hib2FyZFRvb2x0aXAiLCJvblN1Ym1pdEZvcm0iLCJpdGVtIiwib25UaGVtZUNoYW5nZWQiLCJsYWJlbFRleHQiLCJpIiwiZ2V0RnVsbERhc2hOYW1lIiwib25Ib21lRGFzaGJvYXJkQ2hhbmdlZCIsImNvbXBvbmVudHMiLCJjb250YWluZXJWMiIsIm9uVGltZVpvbmVDaGFuZ2VkIiwib25XZWVrU3RhcnRDaGFuZ2VkIiwiVXNlclByb2ZpbGUiLCJwcmVmZXJlbmNlc1NhdmVCdXR0b24iLCJMb2FkaW5nUGxhY2Vob2xkZXIiLCJVc2VyT3JnYW5pemF0aW9ucyIsImlzTG9hZGluZyIsIm9yZ3MiLCJ1c2VyIiwib3Jnc1RhYmxlIiwibWFwIiwib3JnIiwiaW5kZXgiLCJuYW1lIiwicm9sZSIsIm9yZ0lkIiwic2V0VXNlck9yZyIsIklucHV0IiwiY29uZmlnIiwiZGlzYWJsZUxvZ2luRm9ybSIsIlVzZXJQcm9maWxlRWRpdEZvcm0iLCJpc1NhdmluZ1VzZXIiLCJ1cGRhdGVQcm9maWxlIiwib25TdWJtaXRQcm9maWxlVXBkYXRlIiwiZGF0YSIsInJlZ2lzdGVyIiwiZXJyb3JzIiwicmVxdWlyZWQiLCJlbWFpbCIsImxvZ2luIiwicHJvZmlsZVNhdmVCdXR0b24iLCJJbnB1dFN1ZmZpeCIsImNvbm5lY3QiLCJ1c2VNb3VudCIsIlZlcnRpY2FsR3JvdXAiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJVc2VyU2Vzc2lvbnMiLCJVc2VyVGVhbXMiLCJjaGFuZ2VVc2VyT3JnIiwiaW5pdFVzZXJQcm9maWxlUGFnZSIsInJldm9rZVVzZXJTZXNzaW9uIiwidXBkYXRlVXNlclByb2ZpbGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJ1c2VyU3RhdGUiLCJ0ZWFtcyIsInNlc3Npb25zIiwidGVhbXNBcmVMb2FkaW5nIiwib3Jnc0FyZUxvYWRpbmciLCJzZXNzaW9uc0FyZUxvYWRpbmciLCJpc1VwZGF0aW5nIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIlVzZXJQcm9maWxlRWRpdFBhZ2UiLCJ3aXRoSTE4biIsImkxOG4iLCJzZXNzaW9uc1RhYmxlIiwic2Vzc2lvbiIsImlzQWN0aXZlIiwic2VlbkF0IiwiZGF0ZSIsImNyZWF0ZWRBdCIsImRhdGVTdHlsZSIsImNsaWVudElwIiwiYnJvd3NlciIsIm9zIiwib3NWZXJzaW9uIiwidGVhbSIsImF2YXRhclVybCIsIm1lbWJlckNvdW50IiwiYXBpIiwiaW5pdExvYWRPcmdzIiwiaW5pdExvYWRTZXNzaW9ucyIsImluaXRMb2FkVGVhbXMiLCJvcmdzTG9hZGVkIiwic2Vzc2lvbnNMb2FkZWQiLCJzZXRVcGRhdGluZyIsInRlYW1zTG9hZGVkIiwidXNlckxvYWRlZCIsInVzZXJTZXNzaW9uUmV2b2tlZCIsImNoYW5nZVBhc3N3b3JkIiwicGF5bG9hZCIsImRpc3BhdGNoIiwidXBkYXRpbmciLCJsb2FkVXNlciIsImxvYWRUZWFtcyIsImxvYWRPcmdzIiwibG9hZFNlc3Npb25zIiwidG9rZW5JZCIsImhyZWYiLCJhcHBTdWJVcmwiXSwic291cmNlUm9vdCI6IiJ9