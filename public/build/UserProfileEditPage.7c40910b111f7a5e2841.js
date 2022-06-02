"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[7323],{

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

 "./public/app/features/profile/UserProfileEditPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "UserProfileEditPage": () => ( UserProfileEditPage),
  "default": () => ( profile_UserProfileEditPage)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var useMount = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var SharedPreferences = __webpack_require__("./public/app/core/components/SharedPreferences/SharedPreferences.tsx");
var navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var esm = __webpack_require__("./.yarn/__virtual__/@lingui-react-virtual-b84a28ec6c/0/cache/@lingui-react-npm-3.13.2-7672a50569-456e3bbb4b.zip/node_modules/@lingui/react/esm/index.js");
var grafana_e2e_selectors_src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _LoadingPlaceholder, _h, _thead, _Button, _Trans;







class UserOrganizations extends react.PureComponent {
  render() {
    const {
      isLoading,
      orgs,
      user
    } = this.props;

    if (isLoading) {
      return _LoadingPlaceholder || (_LoadingPlaceholder = (0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
        text: "Loading organizations..."
      }));
    }

    if (orgs.length === 0) {
      return null;
    }

    return (0,jsx_runtime.jsxs)("div", {
      children: [_h || (_h = (0,jsx_runtime.jsx)("h3", {
        className: "page-sub-heading",
        children: (0,jsx_runtime.jsx)(esm.cC, {
          id: "user-orgs.title"
        })
      })), (0,jsx_runtime.jsx)("div", {
        className: "gf-form-group",
        children: (0,jsx_runtime.jsxs)("table", {
          className: "filter-table form-inline",
          "data-testid": grafana_e2e_selectors_src.wl.components.UserProfile.orgsTable,
          children: [_thead || (_thead = (0,jsx_runtime.jsx)("thead", {
            children: (0,jsx_runtime.jsxs)("tr", {
              children: [(0,jsx_runtime.jsx)("th", {
                children: (0,jsx_runtime.jsx)(esm.cC, {
                  id: "user-orgs.name-column"
                })
              }), (0,jsx_runtime.jsx)("th", {
                children: (0,jsx_runtime.jsx)(esm.cC, {
                  id: "user-orgs.role-column"
                })
              }), (0,jsx_runtime.jsx)("th", {})]
            })
          })), (0,jsx_runtime.jsx)("tbody", {
            children: orgs.map((org, index) => {
              return (0,jsx_runtime.jsxs)("tr", {
                children: [(0,jsx_runtime.jsx)("td", {
                  children: org.name
                }), (0,jsx_runtime.jsx)("td", {
                  children: org.role
                }), (0,jsx_runtime.jsx)("td", {
                  className: "text-right",
                  children: org.orgId === (user === null || user === void 0 ? void 0 : user.orgId) ? _Button || (_Button = (0,jsx_runtime.jsx)(src.Button, {
                    variant: "secondary",
                    size: "sm",
                    disabled: true,
                    children: (0,jsx_runtime.jsx)(esm.cC, {
                      id: "user-orgs.current-org-button"
                    })
                  })) : (0,jsx_runtime.jsx)(src.Button, {
                    variant: "secondary",
                    size: "sm",
                    onClick: () => {
                      this.props.setUserOrg(org);
                    },
                    children: _Trans || (_Trans = (0,jsx_runtime.jsx)(esm.cC, {
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
 const profile_UserOrganizations = (UserOrganizations);
var core_esm = __webpack_require__("./.yarn/cache/@lingui-core-npm-3.13.2-d32cc8860c-16d7ee047c.zip/node_modules/@lingui/core/esm/index.js");
var config = __webpack_require__("./public/app/core/config.ts");
;
var UserProfileEditForm_Trans, _Trans2, _InputSuffix, _Trans3, _InputSuffix2, _InputSuffix3, _Trans4, _Tooltip;









const {
  disableLoginForm
} = config.ZP;
const UserProfileEditForm = _ref => {
  let {
    user,
    isSavingUser,
    updateProfile
  } = _ref;

  const onSubmitProfileUpdate = data => {
    updateProfile(data);
  };

  return (0,jsx_runtime.jsx)(src.Form, {
    onSubmit: onSubmitProfileUpdate,
    validateOn: "onBlur",
    children: _ref2 => {
      var _user$name, _user$email, _user$login;

      let {
        register,
        errors
      } = _ref2;
      return (0,jsx_runtime.jsxs)(src.FieldSet, {
        label: UserProfileEditForm_Trans || (UserProfileEditForm_Trans = (0,jsx_runtime.jsx)(esm.cC, {
          id: "user-profile.title"
        })),
        children: [(0,jsx_runtime.jsx)(src.Field, {
          label: core_esm.ag._(
          {
            id: 'user-profile.fields.name-label',
            message: 'Name'
          }),
          invalid: !!errors.name,
          error: _Trans2 || (_Trans2 = (0,jsx_runtime.jsx)(esm.cC, {
            id: "user-profile.fields.name-error"
          })),
          disabled: disableLoginForm,
          children: (0,jsx_runtime.jsx)(src.Input, Object.assign({}, register('name', {
            required: true
          }), {
            id: "edit-user-profile-name",
            placeholder: core_esm.ag._(
            {
              id: 'user-profile.fields.name-label',
              message: 'Name'
            }),
            defaultValue: (_user$name = user === null || user === void 0 ? void 0 : user.name) !== null && _user$name !== void 0 ? _user$name : '',
            suffix: _InputSuffix || (_InputSuffix = (0,jsx_runtime.jsx)(InputSuffix, {}))
          }))
        }), (0,jsx_runtime.jsx)(src.Field, {
          label: core_esm.ag._(
          {
            id: 'user-profile.fields.email-label',
            message: 'Email'
          }),
          invalid: !!errors.email,
          error: _Trans3 || (_Trans3 = (0,jsx_runtime.jsx)(esm.cC, {
            id: "user-profile.fields.email-error"
          })),
          disabled: disableLoginForm,
          children: (0,jsx_runtime.jsx)(src.Input, Object.assign({}, register('email', {
            required: true
          }), {
            id: "edit-user-profile-email",
            placeholder: core_esm.ag._(
            {
              id: 'user-profile.fields.email-label',
              message: 'Email'
            }),
            defaultValue: (_user$email = user === null || user === void 0 ? void 0 : user.email) !== null && _user$email !== void 0 ? _user$email : '',
            suffix: _InputSuffix2 || (_InputSuffix2 = (0,jsx_runtime.jsx)(InputSuffix, {}))
          }))
        }), (0,jsx_runtime.jsx)(src.Field, {
          label: core_esm.ag._(
          {
            id: 'user-profile.fields.username-label',
            message: 'Username'
          }),
          disabled: disableLoginForm,
          children: (0,jsx_runtime.jsx)(src.Input, Object.assign({}, register('login'), {
            id: "edit-user-profile-username",
            defaultValue: (_user$login = user === null || user === void 0 ? void 0 : user.login) !== null && _user$login !== void 0 ? _user$login : '',
            placeholder: core_esm.ag._(
            {
              id: 'user-profile.fields.username-label',
              message: 'Username'
            }),
            suffix: _InputSuffix3 || (_InputSuffix3 = (0,jsx_runtime.jsx)(InputSuffix, {}))
          }))
        }), (0,jsx_runtime.jsx)("div", {
          className: "gf-form-button-row",
          children: (0,jsx_runtime.jsx)(src.Button, {
            variant: "primary",
            disabled: isSavingUser,
            "data-testid": grafana_e2e_selectors_src.wl.components.UserProfile.profileSaveButton,
            type: "submit",
            children: _Trans4 || (_Trans4 = (0,jsx_runtime.jsx)(esm.cC, {
              id: "common.save"
            }))
          })
        })]
      });
    }
  });
};
 const profile_UserProfileEditForm = (UserProfileEditForm);

const InputSuffix = () => {
  return disableLoginForm ? _Tooltip || (_Tooltip = (0,jsx_runtime.jsx)(src.Tooltip, {
    content: "Login details locked because they are managed in another system.",
    children: (0,jsx_runtime.jsx)(src.Icon, {
      name: "lock"
    })
  })) : null;
};
;
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
      return UserSessions_LoadingPlaceholder || (UserSessions_LoadingPlaceholder = (0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
        text: (0,jsx_runtime.jsx)(esm.cC, {
          id: "user-sessions.loading"
        })
      }));
    }

    return (0,jsx_runtime.jsx)("div", {
      children: sessions.length > 0 && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [UserSessions_h || (UserSessions_h = (0,jsx_runtime.jsx)("h3", {
          className: "page-sub-heading",
          children: "Sessions"
        })), (0,jsx_runtime.jsx)("div", {
          className: "gf-form-group",
          children: (0,jsx_runtime.jsxs)("table", {
            className: "filter-table form-inline",
            "data-testid": grafana_e2e_selectors_src.wl.components.UserProfile.sessionsTable,
            children: [UserSessions_thead || (UserSessions_thead = (0,jsx_runtime.jsx)("thead", {
              children: (0,jsx_runtime.jsxs)("tr", {
                children: [(0,jsx_runtime.jsx)("th", {
                  children: (0,jsx_runtime.jsx)(esm.cC, {
                    id: "user-session.seen-at-column"
                  })
                }), (0,jsx_runtime.jsx)("th", {
                  children: (0,jsx_runtime.jsx)(esm.cC, {
                    id: "user-session.created-at-column"
                  })
                }), (0,jsx_runtime.jsx)("th", {
                  children: (0,jsx_runtime.jsx)(esm.cC, {
                    id: "user-session.ip-column"
                  })
                }), (0,jsx_runtime.jsx)("th", {
                  children: (0,jsx_runtime.jsx)(esm.cC, {
                    id: "user-session.browser-column"
                  })
                }), (0,jsx_runtime.jsx)("th", {})]
              })
            })), (0,jsx_runtime.jsx)("tbody", {
              children: sessions.map((session, index) => (0,jsx_runtime.jsxs)("tr", {
                children: [session.isActive ? _td || (_td = (0,jsx_runtime.jsx)("td", {
                  children: "Now"
                })) : (0,jsx_runtime.jsx)("td", {
                  children: session.seenAt
                }), (0,jsx_runtime.jsx)("td", {
                  children: i18n.date(session.createdAt, {
                    dateStyle: 'long'
                  })
                }), (0,jsx_runtime.jsx)("td", {
                  children: session.clientIp
                }), (0,jsx_runtime.jsxs)("td", {
                  children: [session.browser, " on ", session.os, " ", session.osVersion]
                }), (0,jsx_runtime.jsx)("td", {
                  children: (0,jsx_runtime.jsx)(src.Button, {
                    size: "sm",
                    variant: "destructive",
                    onClick: () => revokeUserSession(session.id),
                    "aria-label": i18n._(
                    {
                      id: 'user-session.revoke',
                      message: 'Revoke user session'
                    }),
                    children: _Icon || (_Icon = (0,jsx_runtime.jsx)(src.Icon, {
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

 const profile_UserSessions = ((0,esm.GV)()(UserSessions));
;
var UserTeams_LoadingPlaceholder, UserTeams_h, UserTeams_thead;





class UserTeams extends react.PureComponent {
  render() {
    const {
      isLoading,
      teams
    } = this.props;

    if (isLoading) {
      return UserTeams_LoadingPlaceholder || (UserTeams_LoadingPlaceholder = (0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
        text: "Loading teams..."
      }));
    }

    if (teams.length === 0) {
      return null;
    }

    return (0,jsx_runtime.jsxs)("div", {
      children: [UserTeams_h || (UserTeams_h = (0,jsx_runtime.jsx)("h3", {
        className: "page-sub-heading",
        children: "Teams"
      })), (0,jsx_runtime.jsx)("div", {
        className: "gf-form-group",
        children: (0,jsx_runtime.jsxs)("table", {
          className: "filter-table form-inline",
          "aria-label": "User teams table",
          children: [UserTeams_thead || (UserTeams_thead = (0,jsx_runtime.jsx)("thead", {
            children: (0,jsx_runtime.jsxs)("tr", {
              children: [(0,jsx_runtime.jsx)("th", {}), (0,jsx_runtime.jsx)("th", {
                children: "Name"
              }), (0,jsx_runtime.jsx)("th", {
                children: "Email"
              }), (0,jsx_runtime.jsx)("th", {
                children: "Members"
              })]
            })
          })), (0,jsx_runtime.jsx)("tbody", {
            children: teams.map((team, index) => {
              return (0,jsx_runtime.jsxs)("tr", {
                children: [(0,jsx_runtime.jsx)("td", {
                  className: "width-4 text-center",
                  children: (0,jsx_runtime.jsx)("img", {
                    className: "filter-table__avatar",
                    src: team.avatarUrl,
                    alt: ""
                  })
                }), (0,jsx_runtime.jsx)("td", {
                  children: team.name
                }), (0,jsx_runtime.jsx)("td", {
                  children: team.email
                }), (0,jsx_runtime.jsx)("td", {
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
 const profile_UserTeams = (( null && (UserTeams)));
var actions = __webpack_require__("./public/app/features/profile/state/actions.ts");
;
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
    navModel: (0,navModel.h)(state.navIndex, 'profile-settings'),
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
  initUserProfilePage: actions.PA,
  revokeUserSession: actions.cc,
  changeUserOrg: actions.hz,
  updateUserProfile: actions.Lj
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
  (0,useMount.Z)(() => initUserProfilePage());
  return (0,jsx_runtime.jsx)(Page.Z, {
    navModel: navModel,
    children: (0,jsx_runtime.jsx)(Page.Z.Contents, {
      isLoading: !user,
      children: (0,jsx_runtime.jsxs)(src.VerticalGroup, {
        spacing: "md",
        children: [(0,jsx_runtime.jsx)(profile_UserProfileEditForm, {
          updateProfile: updateUserProfile,
          isSavingUser: isUpdating,
          user: user
        }), _SharedPreferences || (_SharedPreferences = (0,jsx_runtime.jsx)(SharedPreferences.Z, {
          resourceUri: "user"
        })), (0,jsx_runtime.jsx)(UserTeams, {
          isLoading: teamsAreLoading,
          teams: teams
        }), (0,jsx_runtime.jsx)(profile_UserOrganizations, {
          isLoading: orgsAreLoading,
          setUserOrg: changeUserOrg,
          orgs: orgs,
          user: user
        }), (0,jsx_runtime.jsx)(profile_UserSessions, {
          isLoading: sessionsAreLoading,
          revokeUserSession: revokeUserSession,
          sessions: sessions
        })]
      })
    })
  });
}
 const profile_UserProfileEditPage = (connector(UserProfileEditPage));

 }),

 "./public/app/features/profile/state/actions.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Cp": () => ( changePassword),
   "II": () => ( loadUser),
   "Lj": () => ( updateUserProfile),
   "PA": () => ( initUserProfilePage),
   "cc": () => ( revokeUserSession),
   "hz": () => ( changeUserOrg)
 });
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/profile/api.ts");
 var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/profile/state/reducers.ts");



function changePassword(payload) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .zc)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__ .h.changePassword(payload);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .zc)({
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
    const user = await _api__WEBPACK_IMPORTED_MODULE_1__ .h.loadUser();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .aw)({
      user
    }));
  };
}

function loadTeams() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .qD)());
    const teams = await _api__WEBPACK_IMPORTED_MODULE_1__ .h.loadTeams();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .PL)({
      teams
    }));
  };
}

function loadOrgs() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .$S)());
    const orgs = await _api__WEBPACK_IMPORTED_MODULE_1__ .h.loadOrgs();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .Ns)({
      orgs
    }));
  };
}

function loadSessions() {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .Uk)());
    const sessions = await _api__WEBPACK_IMPORTED_MODULE_1__ .h.loadSessions();
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .z0)({
      sessions
    }));
  };
}

function revokeUserSession(tokenId) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .zc)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__ .h.revokeUserSession(tokenId);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .p$)({
      tokenId
    }));
  };
}
function changeUserOrg(org) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .zc)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__ .h.setUserOrg(org);
    window.location.href = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.appSubUrl + '/profile';
  };
}
function updateUserProfile(payload) {
  return async function (dispatch) {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .zc)({
      updating: true
    }));
    await _api__WEBPACK_IMPORTED_MODULE_1__ .h.updateUserProfile(payload);
    await dispatch(loadUser());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_2__ .zc)({
      updating: false
    }));
  };
}

 }),

 "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ .Z)(function () {
        fn();
    });
};
 const __WEBPACK_DEFAULT_EXPORT__ = (useMount);


 })

}]);