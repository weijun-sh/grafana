"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[7323],{

/***/ "./public/app/core/components/SharedPreferences/SharedPreferences.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "v": () => (/* binding */ SharedPreferences)
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
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__/* .i18n._ */ .ag._(
  /*i18n*/
  {
    id: 'shared-preferences.theme.default-label',
    message: 'Default'
  })
}, {
  value: 'dark',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__/* .i18n._ */ .ag._(
  /*i18n*/
  {
    id: 'shared-preferences.theme.dark-label',
    message: 'Dark'
  })
}, {
  value: 'light',
  label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__/* .i18n._ */ .ag._(
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

    this.service = new app_core_services_PreferencesService__WEBPACK_IMPORTED_MODULE_4__/* .PreferencesService */ .y(props.resourceUri);
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
    const dashboards = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_5__/* .backendSrv.search */ .ae.search({
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
      const missing = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_5__/* .backendSrv.search */ .ae.search({
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
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__/* .Trans */ .cC, {
        id: "shared-preferences.fields.home-dashboard-tooltip"
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
          label: _Trans || (_Trans = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__/* .Trans */ .cC, {
            id: "shared-preferences.title"
          })),
          disabled: disabled,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__/* .i18n._ */ .ag._(
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
                children: _Trans2 || (_Trans2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__/* .Trans */ .cC, {
                  id: "shared-preferences.fields.home-dashboard-label"
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
              placeholder: _lingui_core__WEBPACK_IMPORTED_MODULE_7__/* .i18n._ */ .ag._(
              /*i18n*/
              {
                id: 'shared-preferences.fields.home-dashboard-placeholder',
                message: 'Choose default dashboard'
              }),
              inputId: "home-dashboard-select"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__/* .i18n._ */ .ag._(
            /*i18n*/
            {
              id: 'shared-dashboard.fields.timezone-label',
              message: 'Timezone'
            }),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__/* .selectors.components.TimeZonePicker.containerV2 */ .wl.components.TimeZonePicker.containerV2,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TimeZonePicker, {
              includeInternal: true,
              value: timezone,
              onChange: this.onTimeZoneChanged,
              inputId: "shared-preferences-timezone-picker"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: _lingui_core__WEBPACK_IMPORTED_MODULE_7__/* .i18n._ */ .ag._(
            /*i18n*/
            {
              id: 'shared-preferences.fields.week-start-label',
              message: 'Week start'
            }),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__/* .selectors.components.WeekStartPicker.containerV2 */ .wl.components.WeekStartPicker.containerV2,
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
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__/* .selectors.components.UserProfile.preferencesSaveButton */ .wl.components.UserProfile.preferencesSaveButton,
              children: _Trans3 || (_Trans3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_lingui_react__WEBPACK_IMPORTED_MODULE_8__/* .Trans */ .cC, {
                id: "common.save"
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

/***/ "./public/app/features/profile/UserProfileEditPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "UserProfileEditPage": () => (/* binding */ UserProfileEditPage),
  "default": () => (/* binding */ profile_UserProfileEditPage)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js
var useMount = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/Page/Page.tsx + 1 modules
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
// EXTERNAL MODULE: ./public/app/core/components/SharedPreferences/SharedPreferences.tsx
var SharedPreferences = __webpack_require__("./public/app/core/components/SharedPreferences/SharedPreferences.tsx");
// EXTERNAL MODULE: ./public/app/core/selectors/navModel.ts
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
// EXTERNAL MODULE: ./.yarn/__virtual__/@lingui-react-virtual-b84a28ec6c/0/cache/@lingui-react-npm-3.13.2-7672a50569-456e3bbb4b.zip/node_modules/@lingui/react/esm/index.js + 1 modules
var esm = __webpack_require__("./.yarn/__virtual__/@lingui-react-virtual-b84a28ec6c/0/cache/@lingui-react-npm-3.13.2-7672a50569-456e3bbb4b.zip/node_modules/@lingui/react/esm/index.js");
// EXTERNAL MODULE: ./packages/grafana-e2e-selectors/src/index.ts + 3 modules
var grafana_e2e_selectors_src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/profile/UserOrganizations.tsx
var _LoadingPlaceholder, _h, _thead, _Button, _Trans;







class UserOrganizations extends react.PureComponent {
  render() {
    const {
      isLoading,
      orgs,
      user
    } = this.props;

    if (isLoading) {
      return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
        text: "Loading organizations..."
      }));
    }

    if (orgs.length === 0) {
      return null;
    }

    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        className: "page-sub-heading",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Trans */.cC, {
          id: "user-orgs.title"
        })
      })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-group",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
          className: "filter-table form-inline",
          "data-testid": grafana_e2e_selectors_src/* selectors.components.UserProfile.orgsTable */.wl.components.UserProfile.orgsTable,
          children: [_thead || (_thead = /*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Trans */.cC, {
                  id: "user-orgs.name-column"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Trans */.cC, {
                  id: "user-orgs.role-column"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {})]
            })
          })), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
            children: orgs.map((org, index) => {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: org.name
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: org.role
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: org.orgId === (user === null || user === void 0 ? void 0 : user.orgId) ? _Button || (_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
                    variant: "secondary",
                    size: "sm",
                    disabled: true,
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Trans */.cC, {
                      id: "user-orgs.current-org-button"
                    })
                  })) : /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
                    variant: "secondary",
                    size: "sm",
                    onClick: () => {
                      this.props.setUserOrg(org);
                    },
                    children: _Trans || (_Trans = /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Trans */.cC, {
                      id: "user-orgs.select-org-button"
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
/* harmony default export */ const profile_UserOrganizations = (UserOrganizations);
// EXTERNAL MODULE: ./.yarn/cache/@lingui-core-npm-3.13.2-d32cc8860c-16d7ee047c.zip/node_modules/@lingui/core/esm/index.js + 1 modules
var core_esm = __webpack_require__("./.yarn/cache/@lingui-core-npm-3.13.2-d32cc8860c-16d7ee047c.zip/node_modules/@lingui/core/esm/index.js");
// EXTERNAL MODULE: ./public/app/core/config.ts
var config = __webpack_require__("./public/app/core/config.ts");
;// CONCATENATED MODULE: ./public/app/features/profile/UserProfileEditForm.tsx
var UserProfileEditForm_Trans, _Trans2, _InputSuffix, _Trans3, _InputSuffix2, _InputSuffix3, _Trans4, _Tooltip;









const {
  disableLoginForm
} = config/* default */.ZP;
const UserProfileEditForm = _ref => {
  let {
    user,
    isSavingUser,
    updateProfile
  } = _ref;

  const onSubmitProfileUpdate = data => {
    updateProfile(data);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Form, {
    onSubmit: onSubmitProfileUpdate,
    validateOn: "onBlur",
    children: _ref2 => {
      var _user$name, _user$email, _user$login;

      let {
        register,
        errors
      } = _ref2;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(src.FieldSet, {
        label: UserProfileEditForm_Trans || (UserProfileEditForm_Trans = /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Trans */.cC, {
          id: "user-profile.title"
        })),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
          label: core_esm/* i18n._ */.ag._(
          /*i18n*/
          {
            id: 'user-profile.fields.name-label',
            message: 'Name'
          }),
          invalid: !!errors.name,
          error: _Trans2 || (_Trans2 = /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Trans */.cC, {
            id: "user-profile.fields.name-error"
          })),
          disabled: disableLoginForm,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, register('name', {
            required: true
          }), {
            id: "edit-user-profile-name",
            placeholder: core_esm/* i18n._ */.ag._(
            /*i18n*/
            {
              id: 'user-profile.fields.name-label',
              message: 'Name'
            }),
            defaultValue: (_user$name = user === null || user === void 0 ? void 0 : user.name) !== null && _user$name !== void 0 ? _user$name : '',
            suffix: _InputSuffix || (_InputSuffix = /*#__PURE__*/(0,jsx_runtime.jsx)(InputSuffix, {}))
          }))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
          label: core_esm/* i18n._ */.ag._(
          /*i18n*/
          {
            id: 'user-profile.fields.email-label',
            message: 'Email'
          }),
          invalid: !!errors.email,
          error: _Trans3 || (_Trans3 = /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Trans */.cC, {
            id: "user-profile.fields.email-error"
          })),
          disabled: disableLoginForm,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, register('email', {
            required: true
          }), {
            id: "edit-user-profile-email",
            placeholder: core_esm/* i18n._ */.ag._(
            /*i18n*/
            {
              id: 'user-profile.fields.email-label',
              message: 'Email'
            }),
            defaultValue: (_user$email = user === null || user === void 0 ? void 0 : user.email) !== null && _user$email !== void 0 ? _user$email : '',
            suffix: _InputSuffix2 || (_InputSuffix2 = /*#__PURE__*/(0,jsx_runtime.jsx)(InputSuffix, {}))
          }))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
          label: core_esm/* i18n._ */.ag._(
          /*i18n*/
          {
            id: 'user-profile.fields.username-label',
            message: 'Username'
          }),
          disabled: disableLoginForm,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, register('login'), {
            id: "edit-user-profile-username",
            defaultValue: (_user$login = user === null || user === void 0 ? void 0 : user.login) !== null && _user$login !== void 0 ? _user$login : '',
            placeholder: core_esm/* i18n._ */.ag._(
            /*i18n*/
            {
              id: 'user-profile.fields.username-label',
              message: 'Username'
            }),
            suffix: _InputSuffix3 || (_InputSuffix3 = /*#__PURE__*/(0,jsx_runtime.jsx)(InputSuffix, {}))
          }))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form-button-row",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            variant: "primary",
            disabled: isSavingUser,
            "data-testid": grafana_e2e_selectors_src/* selectors.components.UserProfile.profileSaveButton */.wl.components.UserProfile.profileSaveButton,
            type: "submit",
            children: _Trans4 || (_Trans4 = /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Trans */.cC, {
              id: "common.save"
            }))
          })
        })]
      });
    }
  });
};
/* harmony default export */ const profile_UserProfileEditForm = (UserProfileEditForm);

const InputSuffix = () => {
  return disableLoginForm ? _Tooltip || (_Tooltip = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Tooltip, {
    content: "Login details locked because they are managed in another system.",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
      name: "lock"
    })
  })) : null;
};
;// CONCATENATED MODULE: ./public/app/features/profile/UserSessions.tsx
var UserSessions_LoadingPlaceholder, UserSessions_h, UserSessions_thead, _td, _Icon;










class UserSessions extends react.PureComponent {
  render() {
    const {
      isLoading,
      sessions,
      revokeUserSession,
      i18n
    } = this.props;

    if (isLoading) {
      return UserSessions_LoadingPlaceholder || (UserSessions_LoadingPlaceholder = /*#__PURE__*/(0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
        text: /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Trans */.cC, {
          id: "user-sessions.loading"
        })
      }));
    }

    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: sessions.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [UserSessions_h || (UserSessions_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
          className: "page-sub-heading",
          children: "Sessions"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form-group",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
            className: "filter-table form-inline",
            "data-testid": grafana_e2e_selectors_src/* selectors.components.UserProfile.sessionsTable */.wl.components.UserProfile.sessionsTable,
            children: [UserSessions_thead || (UserSessions_thead = /*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Trans */.cC, {
                    id: "user-session.seen-at-column"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Trans */.cC, {
                    id: "user-session.created-at-column"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Trans */.cC, {
                    id: "user-session.ip-column"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(esm/* Trans */.cC, {
                    id: "user-session.browser-column"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {})]
              })
            })), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
              children: sessions.map((session, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [session.isActive ? _td || (_td = /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: "Now"
                })) : /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: session.seenAt
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: i18n.date(session.createdAt, {
                    dateStyle: 'long'
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: session.clientIp
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                  children: [session.browser, " on ", session.os, " ", session.osVersion]
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
                    size: "sm",
                    variant: "destructive",
                    onClick: () => revokeUserSession(session.id),
                    "aria-label": i18n._(
                    /*i18n*/
                    {
                      id: 'user-session.revoke',
                      message: 'Revoke user session'
                    }),
                    children: _Icon || (_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
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

/* harmony default export */ const profile_UserSessions = ((0,esm/* withI18n */.GV)()(UserSessions));
;// CONCATENATED MODULE: ./public/app/features/profile/UserTeams.tsx
var UserTeams_LoadingPlaceholder, UserTeams_h, UserTeams_thead;





class UserTeams extends react.PureComponent {
  render() {
    const {
      isLoading,
      teams
    } = this.props;

    if (isLoading) {
      return UserTeams_LoadingPlaceholder || (UserTeams_LoadingPlaceholder = /*#__PURE__*/(0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
        text: "Loading teams..."
      }));
    }

    if (teams.length === 0) {
      return null;
    }

    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [UserTeams_h || (UserTeams_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        className: "page-sub-heading",
        children: "Teams"
      })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-group",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
          className: "filter-table form-inline",
          "aria-label": "User teams table",
          children: [UserTeams_thead || (UserTeams_thead = /*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                children: "Name"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                children: "Email"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                children: "Members"
              })]
            })
          })), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
            children: teams.map((team, index) => {
              return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  className: "width-4 text-center",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
                    className: "filter-table__avatar",
                    src: team.avatarUrl,
                    alt: ""
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: team.name
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                  children: team.email
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
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
/* harmony default export */ const profile_UserTeams = ((/* unused pure expression or super */ null && (UserTeams)));
// EXTERNAL MODULE: ./public/app/features/profile/state/actions.ts
var actions = __webpack_require__("./public/app/features/profile/state/actions.ts");
;// CONCATENATED MODULE: ./public/app/features/profile/UserProfileEditPage.tsx
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
    navModel: (0,navModel/* getNavModel */.h)(state.navIndex, 'profile-settings'),
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
  initUserProfilePage: actions/* initUserProfilePage */.PA,
  revokeUserSession: actions/* revokeUserSession */.cc,
  changeUserOrg: actions/* changeUserOrg */.hz,
  updateUserProfile: actions/* updateUserProfile */.Lj
};
const connector = (0,es.connect)(mapStateToProps, mapDispatchToProps);
function UserProfileEditPage(_ref) {
  let {
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
  } = _ref;
  (0,useMount/* default */.Z)(() => initUserProfilePage());
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
    navModel: navModel,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default.Contents */.Z.Contents, {
      isLoading: !user,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(src.VerticalGroup, {
        spacing: "md",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(profile_UserProfileEditForm, {
          updateProfile: updateUserProfile,
          isSavingUser: isUpdating,
          user: user
        }), _SharedPreferences || (_SharedPreferences = /*#__PURE__*/(0,jsx_runtime.jsx)(SharedPreferences/* default */.Z, {
          resourceUri: "user"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(UserTeams, {
          isLoading: teamsAreLoading,
          teams: teams
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(profile_UserOrganizations, {
          isLoading: orgsAreLoading,
          setUserOrg: changeUserOrg,
          orgs: orgs,
          user: user
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(profile_UserSessions, {
          isLoading: sessionsAreLoading,
          revokeUserSession: revokeUserSession,
          sessions: sessions
        })]
      })
    })
  });
}
/* harmony default export */ const profile_UserProfileEditPage = (connector(UserProfileEditPage));

/***/ }),

/***/ "./public/app/features/profile/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cp": () => (/* binding */ changePassword),
/* harmony export */   "II": () => (/* binding */ loadUser),
/* harmony export */   "Lj": () => (/* binding */ updateUserProfile),
/* harmony export */   "PA": () => (/* binding */ initUserProfilePage),
/* harmony export */   "cc": () => (/* binding */ revokeUserSession),
/* harmony export */   "hz": () => (/* binding */ changeUserOrg)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/profile/api.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/profile/state/reducers.ts");



function changePassword(payload) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .setUpdating */ .zc)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.changePassword */ .h.changePassword(payload);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .setUpdating */ .zc)({
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
    const user = await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.loadUser */ .h.loadUser();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .userLoaded */ .aw)({
      user
    }));
  };
}

function loadTeams() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .initLoadTeams */ .qD)());
    const teams = await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.loadTeams */ .h.loadTeams();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .teamsLoaded */ .PL)({
      teams
    }));
  };
}

function loadOrgs() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .initLoadOrgs */ .$S)());
    const orgs = await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.loadOrgs */ .h.loadOrgs();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .orgsLoaded */ .Ns)({
      orgs
    }));
  };
}

function loadSessions() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .initLoadSessions */ .Uk)());
    const sessions = await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.loadSessions */ .h.loadSessions();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .sessionsLoaded */ .z0)({
      sessions
    }));
  };
}

function revokeUserSession(tokenId) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .setUpdating */ .zc)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.revokeUserSession */ .h.revokeUserSession(tokenId);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .userSessionRevoked */ .p$)({
      tokenId
    }));
  };
}
function changeUserOrg(org) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .setUpdating */ .zc)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.setUserOrg */ .h.setUserOrg(org);
    window.location.href = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.appSubUrl + '/profile';
  };
}
function updateUserProfile(payload) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .setUpdating */ .zc)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__/* .api.updateUserProfile */ .h.updateUserProfile(payload);
    await dispatch(loadUser());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__/* .setUpdating */ .zc)({
      updating: false
    }));
  };
}

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(function () {
        fn();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMount);


/***/ })

}]);