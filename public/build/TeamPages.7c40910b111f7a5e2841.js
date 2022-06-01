"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[8612],{

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

/***/ "./public/app/features/teams/TeamPages.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TeamPages": () => (/* binding */ TeamPages),
  "default": () => (/* binding */ teams_TeamPages)
});

// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/Page/Page.tsx + 1 modules
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/core/components/Upgrade/UpgradeBox.tsx
const _excluded = ["featureName", "className", "children", "text", "featureId", "eventVariant", "size"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const UpgradeBox = _ref => {
  let {
    featureName,
    className,
    text,
    featureId,
    eventVariant = '',
    size = 'md'
  } = _ref,
      htmlProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  const styles = (0,grafana_ui_src.useStyles2)(theme => getUpgradeBoxStyles(theme, size));
  (0,react.useEffect)(() => {
    (0,src.reportExperimentView)(`feature-highlights-${featureId}`, 'test', eventVariant);
  }, [eventVariant, featureId]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", Object.assign({
    className: (0,emotion_css_esm.cx)(styles.box, className)
  }, htmlProps, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
      name: 'rocket',
      className: styles.icon
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.inner,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        className: styles.text,
        children: ["You\u2019ve discovered a Pro feature! ", text || `Get the Grafana Pro plan to access ${featureName}.`]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        variant: "secondary",
        size: size,
        className: styles.button,
        href: "https://grafana.com/profile/org/subscription",
        target: "__blank",
        rel: "noopener noreferrer",
        children: "Upgrade"
      })]
    })]
  }));
};

const getUpgradeBoxStyles = (theme, size) => {
  const borderRadius = theme.shape.borderRadius(2);
  const fontBase = size === 'md' ? 'body' : 'bodySmall';
  return {
    box: emotion_css_esm.css`
      display: flex;
      align-items: center;
      position: relative;
      border-radius: ${borderRadius};
      background: ${theme.colors.success.transparent};
      padding: ${theme.spacing(2)};
      color: ${theme.colors.success.text};
      font-size: ${theme.typography[fontBase].fontSize};
      text-align: left;
      line-height: 16px;
      margin: ${theme.spacing(0, 'auto', 3, 'auto')};
      max-width: ${theme.breakpoints.values.xxl}px;
      width: 100%;
    `,
    inner: emotion_css_esm.css`
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    `,
    text: emotion_css_esm.css`
      margin: 0;
    `,
    button: emotion_css_esm.css`
      background-color: ${theme.colors.success.main};
      font-weight: ${theme.typography.fontWeightLight};
      color: white;

      &:hover {
        background-color: ${theme.colors.success.main};
      }

      &:focus-visible {
        box-shadow: none;
        color: ${theme.colors.text.primary};
        outline: 2px solid ${theme.colors.primary.main};
      }
    `,
    icon: emotion_css_esm.css`
      margin: ${theme.spacing(0.5, 1, 0.5, 0.5)};
    `
  };
};

const UpgradeContent = _ref2 => {
  let {
    listItems,
    image,
    featureUrl,
    featureName,
    description,
    caption,
    action
  } = _ref2;
  const styles = (0,grafana_ui_src.useStyles2)(getUpgradeContentStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.content,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("h3", {
        className: styles.title,
        children: ["Get started with ", featureName]
      }), description && /*#__PURE__*/(0,jsx_runtime.jsx)("h6", {
        className: styles.description,
        children: description
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
        className: styles.list,
        children: listItems.map((item, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            name: 'check',
            size: 'xl',
            className: styles.icon
          }), " ", item]
        }, index))
      }), (action === null || action === void 0 ? void 0 : action.link) && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        variant: 'primary',
        href: action.link,
        children: action.text
      }), (action === null || action === void 0 ? void 0 : action.onClick) && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: 'primary',
        onClick: action.onClick,
        children: action.text
      }), featureUrl && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        fill: 'text',
        href: featureUrl,
        className: styles.link,
        target: "_blank",
        rel: "noreferrer noopener",
        children: "Learn more"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.media,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
        src: getImgUrl(image),
        alt: 'Feature screenshot'
      }), caption && /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        className: styles.caption,
        children: caption
      })]
    })]
  });
};

const getUpgradeContentStyles = theme => {
  return {
    container: emotion_css_esm.css`
      display: flex;
      justify-content: space-between;
    `,
    content: emotion_css_esm.css`
      width: 45%;
      margin-right: ${theme.spacing(4)};
    `,
    media: emotion_css_esm.css`
      width: 55%;

      img {
        width: 100%;
      }
    `,
    title: emotion_css_esm.css`
      color: ${theme.colors.text.maxContrast};
    `,
    description: emotion_css_esm.css`
      color: ${theme.colors.text.primary};
      font-weight: ${theme.typography.fontWeightLight};
    `,
    list: emotion_css_esm.css`
      list-style: none;
      margin: ${theme.spacing(4, 0, 2, 0)};

      li {
        display: flex;
        align-items: flex-start;
        color: ${theme.colors.text.primary};
        padding: ${theme.spacing(1, 0)};
      }
    `,
    icon: emotion_css_esm.css`
      color: ${theme.colors.success.main};
      margin-right: ${theme.spacing(1)};
    `,
    link: emotion_css_esm.css`
      margin-left: ${theme.spacing(2)};
    `,
    caption: emotion_css_esm.css`
      font-weight: ${theme.typography.fontWeightLight};
      margin: ${theme.spacing(1, 0, 0)};
    `
  };
};

const UpgradeContentVertical = _ref3 => {
  let {
    featureName,
    description,
    featureUrl,
    image
  } = _ref3;
  const styles = useStyles2(getContentVerticalStyles);
  return /*#__PURE__*/_jsxs("div", {
    className: styles.container,
    children: [/*#__PURE__*/_jsxs("h3", {
      className: styles.title,
      children: ["Get started with ", featureName]
    }), description && /*#__PURE__*/_jsx("h6", {
      className: styles.description,
      children: description
    }), /*#__PURE__*/_jsx(LinkButton, {
      fill: 'text',
      href: featureUrl,
      target: "_blank",
      rel: "noreferrer noopener",
      children: "Learn more"
    }), /*#__PURE__*/_jsx("div", {
      className: styles.media,
      children: /*#__PURE__*/_jsx("img", {
        src: getImgUrl(image),
        alt: 'Feature screenshot'
      })
    })]
  });
};

const getContentVerticalStyles = theme => {
  return {
    container: css`
      overflow: auto;
      height: 100%;
    `,
    title: css`
      color: ${theme.colors.text.maxContrast};
    `,
    description: css`
      color: ${theme.colors.text.primary};
      font-weight: ${theme.typography.fontWeightLight};
    `,
    media: css`
      width: 100%;
      margin-top: ${theme.spacing(2)};

      img {
        width: 100%;
      }
    `
  };
};

const getImgUrl = urlOrId => {
  if (urlOrId.startsWith('http')) {
    return urlOrId;
  }

  return '/public/img/enterprise/highlights/' + urlOrId;
};
// EXTERNAL MODULE: ./public/app/core/config.ts
var config = __webpack_require__("./public/app/core/config.ts");
// EXTERNAL MODULE: ./public/app/core/selectors/navModel.ts
var selectors_navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
// EXTERNAL MODULE: ./public/app/core/services/context_srv.ts
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var types = __webpack_require__("./public/app/types/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/Animations/SlideDown.tsx
var SlideDown = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
// EXTERNAL MODULE: ./public/app/core/components/CloseButton/CloseButton.tsx
var CloseButton = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
// EXTERNAL MODULE: ./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
// EXTERNAL MODULE: ./public/app/features/admin/utils.ts
var utils = __webpack_require__("./public/app/features/admin/utils.ts");
// EXTERNAL MODULE: ./public/app/features/teams/state/actions.ts
var actions = __webpack_require__("./public/app/features/teams/state/actions.ts");
// EXTERNAL MODULE: ./public/app/features/teams/state/selectors.ts
var selectors = __webpack_require__("./public/app/features/teams/state/selectors.ts");
;// CONCATENATED MODULE: ./public/app/features/teams/TeamGroupSync.tsx
var _Icon, _UpgradeBox, _h, _Tooltip, _div, _Icon2, _h2, _th;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const {
  Input
} = grafana_ui_src.LegacyForms;

function mapStateToProps(state) {
  return {
    groups: (0,selectors/* getTeamGroups */.JB)(state.team)
  };
}

const mapDispatchToProps = {
  loadTeamGroups: actions/* loadTeamGroups */.j_,
  addTeamGroup: actions/* addTeamGroup */.A_,
  removeTeamGroup: actions/* removeTeamGroup */.P5
};
const connector = (0,es.connect)(mapStateToProps, mapDispatchToProps);
const headerTooltip = `Sync LDAP or OAuth groups with your Grafana teams.`;
class TeamGroupSync extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onToggleAdding", () => {
      this.setState({
        isAdding: !this.state.isAdding
      });
    });

    _defineProperty(this, "onNewGroupIdChanged", event => {
      this.setState({
        newGroupId: event.target.value
      });
    });

    _defineProperty(this, "onAddGroup", event => {
      event.preventDefault();
      this.props.addTeamGroup(this.state.newGroupId);
      this.setState({
        isAdding: false,
        newGroupId: ''
      });
    });

    _defineProperty(this, "onRemoveGroup", group => {
      this.props.removeTeamGroup(group.groupId);
    });

    this.state = {
      isAdding: false,
      newGroupId: ''
    };
  }

  componentDidMount() {
    this.fetchTeamGroups();
  }

  async fetchTeamGroups() {
    await this.props.loadTeamGroups();
  }

  isNewGroupValid() {
    return this.state.newGroupId.length > 1;
  }

  renderGroup(group) {
    const {
      isReadOnly
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        children: group.groupId
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        style: {
          width: '1%'
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          size: "sm",
          variant: "destructive",
          onClick: () => this.onRemoveGroup(group),
          disabled: isReadOnly,
          children: _Icon || (_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            name: "times"
          }))
        })
      })]
    }, group.groupId);
  }

  render() {
    const {
      isAdding,
      newGroupId
    } = this.state;
    const {
      groups,
      isReadOnly
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [(0,utils/* highlightTrial */.d)() && (_UpgradeBox || (_UpgradeBox = /*#__PURE__*/(0,jsx_runtime.jsx)(UpgradeBox, {
        featureId: 'team-sync',
        eventVariant: 'trial',
        featureName: 'team sync',
        text: 'Add a group to enable team sync for free during your trial of Grafana Pro.'
      }))), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "page-action-bar",
        children: [(!(0,utils/* highlightTrial */.d)() || groups.length > 0) && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
            className: "page-sub-heading",
            children: "External group sync"
          })), _Tooltip || (_Tooltip = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
            placement: "auto",
            content: headerTooltip,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
              className: "icon--has-hover page-sub-heading-icon",
              name: "question-circle"
            })
          }))]
        }), _div || (_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "page-action-bar__spacer"
        })), groups.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Button, {
          className: "pull-right",
          onClick: this.onToggleAdding,
          disabled: isReadOnly,
          children: [_Icon2 || (_Icon2 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            name: "plus"
          })), " Add group"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(SlideDown/* SlideDown */.s, {
        in: isAdding,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "cta-form",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CloseButton/* CloseButton */.P, {
            onClick: this.onToggleAdding
          }), _h2 || (_h2 = /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
            children: "Add External Group"
          })), /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
            className: "gf-form-inline",
            onSubmit: this.onAddGroup,
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "gf-form",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input, {
                type: "text",
                className: "gf-form-input width-30",
                value: newGroupId,
                onChange: this.onNewGroupIdChanged,
                placeholder: "cn=ops,ou=groups,dc=grafana,dc=org",
                disabled: isReadOnly
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "gf-form",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
                type: "submit",
                disabled: isReadOnly || !this.isNewGroupValid(),
                children: "Add group"
              })
            })]
          })]
        })
      }), groups.length === 0 && !isAdding && ((0,utils/* highlightTrial */.d)() ? /*#__PURE__*/(0,jsx_runtime.jsx)(TeamSyncUpgradeContent, {
        action: {
          onClick: this.onToggleAdding,
          text: 'Add group'
        }
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyListCTA/* default */.Z, {
        onClick: this.onToggleAdding,
        buttonIcon: "users-alt",
        title: "There are no external groups to sync with",
        buttonTitle: "Add group",
        proTip: headerTooltip,
        proTipLinkTitle: "Learn more",
        proTipLink: "https://docs.grafana.org/auth/enhanced_ldap/",
        proTipTarget: "_blank",
        buttonDisabled: isReadOnly
      })), groups.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "admin-list-table",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
          className: "filter-table filter-table--hover form-inline",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              children: [_th || (_th = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                children: "External Group ID"
              })), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                style: {
                  width: '1%'
                }
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
            children: groups.map(group => this.renderGroup(group))
          })]
        })
      })]
    });
  }

}
const TeamSyncUpgradeContent = _ref => {
  let {
    action
  } = _ref;
  const theme = (0,grafana_ui_src.useTheme2)();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(UpgradeContent, {
    action: action,
    listItems: ['Stop managing user access in two places - assign users to groups in SAML, LDAP or Oauth, and manage access at a Team level in Grafana', 'Update users’ permissions immediately when you add or remove them from an LDAP group, with no need for them to sign out and back in'],
    image: `team-sync-${theme.isLight ? 'light' : 'dark'}.png`,
    featureName: 'team sync',
    featureUrl: 'https://grafana.com/docs/grafana/latest/enterprise/team-sync',
    description: 'Team Sync makes it easier for you to manage users’ access in Grafana, by immediately updating each user’s Grafana teams and permissions based on their single sign-on group membership, instead of when users sign in.'
  });
};
/* harmony default export */ const teams_TeamGroupSync = ((0,es.connect)(mapStateToProps, mapDispatchToProps)(TeamGroupSync));
// EXTERNAL MODULE: ./public/app/core/components/Select/UserPicker.tsx
var UserPicker = __webpack_require__("./public/app/core/components/Select/UserPicker.tsx");
// EXTERNAL MODULE: ./public/app/core/components/TagFilter/TagBadge.tsx
var TagBadge = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
;// CONCATENATED MODULE: ./public/app/core/components/WithFeatureToggle.tsx



const WithFeatureToggle = _ref => {
  let {
    featureToggle,
    children
  } = _ref;

  if (featureToggle === true) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: children
    });
  }

  return null;
};
;// CONCATENATED MODULE: ./public/app/features/teams/TeamMemberRow.tsx
var _td;

function TeamMemberRow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const {
  Select
} = grafana_ui_src.LegacyForms;
const TeamMemberRow_mapDispatchToProps = {
  removeTeamMember: actions/* removeTeamMember */.zT,
  updateTeamMember: actions/* updateTeamMember */.zZ
};
const TeamMemberRow_connector = (0,es.connect)(null, TeamMemberRow_mapDispatchToProps);
class TeamMemberRow extends react.PureComponent {
  constructor(props) {
    super(props);

    TeamMemberRow_defineProperty(this, "onPermissionChange", (item, member) => {
      const permission = item.value;
      const updatedTeamMember = Object.assign({}, member, {
        permission: permission
      });
      this.props.updateTeamMember(updatedTeamMember);
    });

    this.renderLabels = this.renderLabels.bind(this);
    this.renderPermissions = this.renderPermissions.bind(this);
  }

  onRemoveMember(member) {
    this.props.removeTeamMember(member.userId);
  }

  renderPermissions(member) {
    const {
      editorsCanAdmin,
      signedInUserIsTeamAdmin
    } = this.props;
    const value = types/* teamsPermissionLevels.find */.eL.find(dp => dp.value === member.permission);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(WithFeatureToggle, {
      featureToggle: editorsCanAdmin,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        className: "width-5 team-permissions",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [signedInUserIsTeamAdmin && /*#__PURE__*/(0,jsx_runtime.jsx)(Select, {
            isSearchable: false,
            options: types/* teamsPermissionLevels */.eL,
            onChange: item => this.onPermissionChange(item, member),
            className: "gf-form-select-box__control--menu-right",
            value: value
          }), !signedInUserIsTeamAdmin && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: value.label
          })]
        })
      })
    });
  }

  renderLabels(labels) {
    if (!labels) {
      return _td || (_td = /*#__PURE__*/(0,jsx_runtime.jsx)("td", {}));
    }

    return /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
      children: labels.map(label => /*#__PURE__*/(0,jsx_runtime.jsx)(TagBadge/* TagBadge */.e, {
        label: label,
        removeIcon: false,
        count: 0,
        onClick: () => {}
      }, label))
    });
  }

  render() {
    const {
      member,
      syncEnabled,
      signedInUserIsTeamAdmin
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        className: "width-4 text-center",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          "aria-label": `Avatar for team member "${member.name}"`,
          className: "filter-table__avatar",
          src: member.avatarUrl
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        children: member.login
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        children: member.email
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        children: member.name
      }), this.renderPermissions(member), syncEnabled && this.renderLabels(member.labels), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        className: "text-right",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.DeleteButton, {
          "aria-label": "Remove team member",
          size: "sm",
          disabled: !signedInUserIsTeamAdmin,
          onConfirm: () => this.onRemoveMember(member)
        })
      })]
    }, member.userId);
  }

}
/* harmony default export */ const teams_TeamMemberRow = (TeamMemberRow_connector(TeamMemberRow));
// EXTERNAL MODULE: ./public/app/features/teams/state/reducers.ts
var reducers = __webpack_require__("./public/app/features/teams/state/reducers.ts");
;// CONCATENATED MODULE: ./public/app/features/teams/TeamMembers.tsx
var TeamMembers_td, _Label, TeamMembers_th, _th2, _th3, _th4, _th5, _th6;

function TeamMembers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function TeamMembers_mapStateToProps(state) {
  return {
    searchMemberQuery: (0,selectors/* getSearchMemberQuery */.xc)(state.team),
    editorsCanAdmin: config/* config.editorsCanAdmin */.vc.editorsCanAdmin,
    // this makes the feature toggle mockable/controllable from tests,
    signedInUser: context_srv/* contextSrv.user */.Vt.user // this makes the feature toggle mockable/controllable from tests,

  };
}

const TeamMembers_mapDispatchToProps = {
  addTeamMember: actions/* addTeamMember */.Lt,
  setSearchMemberQuery: reducers/* setSearchMemberQuery */.UD
};
const TeamMembers_connector = (0,es.connect)(TeamMembers_mapStateToProps, TeamMembers_mapDispatchToProps);
class TeamMembers extends react.PureComponent {
  constructor(props) {
    super(props);

    TeamMembers_defineProperty(this, "onSearchQueryChange", value => {
      this.props.setSearchMemberQuery(value);
    });

    TeamMembers_defineProperty(this, "onToggleAdding", () => {
      this.setState({
        isAdding: !this.state.isAdding
      });
    });

    TeamMembers_defineProperty(this, "onUserSelected", user => {
      this.setState({
        newTeamMember: user
      });
    });

    TeamMembers_defineProperty(this, "onAddUserToTeam", async () => {
      this.props.addTeamMember(this.state.newTeamMember.id);
      this.setState({
        newTeamMember: null
      });
    });

    this.state = {
      isAdding: false,
      newTeamMember: null
    };
  }

  renderLabels(labels) {
    if (!labels) {
      return TeamMembers_td || (TeamMembers_td = /*#__PURE__*/(0,jsx_runtime.jsx)("td", {}));
    }

    return /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
      children: labels.map(label => /*#__PURE__*/(0,jsx_runtime.jsx)(TagBadge/* TagBadge */.e, {
        label: label,
        removeIcon: false,
        count: 0,
        onClick: () => {}
      }, label))
    });
  }

  render() {
    const {
      isAdding
    } = this.state;
    const {
      searchMemberQuery,
      members,
      syncEnabled,
      editorsCanAdmin,
      signedInUser
    } = this.props;
    const isTeamAdmin = (0,selectors/* isSignedInUserTeamAdmin */.vt)({
      members,
      editorsCanAdmin,
      signedInUser
    });
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "page-action-bar",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form gf-form--grow",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
            placeholder: "Search members",
            value: searchMemberQuery,
            onChange: this.onSearchQueryChange
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          className: "pull-right",
          onClick: this.onToggleAdding,
          disabled: isAdding || !isTeamAdmin,
          children: "Add member"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(SlideDown/* SlideDown */.s, {
        in: isAdding,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "cta-form",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CloseButton/* CloseButton */.P, {
            "aria-label": "Close 'Add team member' dialogue",
            onClick: this.onToggleAdding
          }), _Label || (_Label = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Label, {
            htmlFor: "user-picker",
            children: "Add team member"
          })), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "gf-form-inline",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(UserPicker/* UserPicker */.f, {
              inputId: "user-picker",
              onSelected: this.onUserSelected,
              className: "min-width-30"
            }), this.state.newTeamMember && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
              type: "submit",
              onClick: this.onAddUserToTeam,
              children: "Add to team"
            })]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "admin-list-table",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
          className: "filter-table filter-table--hover form-inline",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              children: [TeamMembers_th || (TeamMembers_th = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                children: "Login"
              })), _th3 || (_th3 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                children: "Email"
              })), _th4 || (_th4 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                children: "Name"
              })), /*#__PURE__*/(0,jsx_runtime.jsx)(WithFeatureToggle, {
                featureToggle: editorsCanAdmin,
                children: _th5 || (_th5 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                  children: "Permission"
                }))
              }), syncEnabled && (_th6 || (_th6 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {}))), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
                style: {
                  width: '1%'
                }
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
            children: members && members.map(member => /*#__PURE__*/(0,jsx_runtime.jsx)(teams_TeamMemberRow, {
              member: member,
              syncEnabled: syncEnabled,
              editorsCanAdmin: editorsCanAdmin,
              signedInUserIsTeamAdmin: isTeamAdmin
            }, member.userId))
          })]
        })
      })]
    });
  }

}
/* harmony default export */ const teams_TeamMembers = (TeamMembers_connector(TeamMembers));
// EXTERNAL MODULE: ./public/app/core/components/AccessControl/index.ts + 5 modules
var AccessControl = __webpack_require__("./public/app/core/components/AccessControl/index.ts");
;// CONCATENATED MODULE: ./public/app/features/teams/TeamPermissions.tsx






// TeamPermissions component replaces TeamMembers component when the accesscontrol feature flag is set
const TeamPermissions = props => {
  const canSetPermissions = context_srv/* contextSrv.hasPermissionInMetadata */.Vt.hasPermissionInMetadata(types/* AccessControlAction.ActionTeamsPermissionsWrite */.bW.ActionTeamsPermissionsWrite, props.team);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(AccessControl/* Permissions */.P, {
    title: "Members",
    addPermissionTitle: "Add member",
    buttonLabel: "Add member",
    resource: "teams",
    resourceId: props.team.id,
    canSetPermissions: canSetPermissions
  });
};

/* harmony default export */ const teams_TeamPermissions = (TeamPermissions);
// EXTERNAL MODULE: ./public/app/core/components/SharedPreferences/SharedPreferences.tsx
var SharedPreferences = __webpack_require__("./public/app/core/components/SharedPreferences/SharedPreferences.tsx");
// EXTERNAL MODULE: ./public/app/core/core.ts
var core = __webpack_require__("./public/app/core/core.ts");
;// CONCATENATED MODULE: ./public/app/features/teams/TeamSettings.tsx










const TeamSettings_mapDispatchToProps = {
  updateTeam: actions/* updateTeam */.fs
};
const TeamSettings_connector = (0,es.connect)(null, TeamSettings_mapDispatchToProps);
const TeamSettings = _ref => {
  let {
    team,
    updateTeam
  } = _ref;
  const canWriteTeamSettings = core/* contextSrv.hasPermissionInMetadata */.Vt.hasPermissionInMetadata(types/* AccessControlAction.ActionTeamsWrite */.bW.ActionTeamsWrite, team);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.FieldSet, {
      label: "Team settings",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Form, {
        defaultValues: Object.assign({}, team),
        onSubmit: formTeam => {
          updateTeam(formTeam.name, formTeam.email);
        },
        disabled: !canWriteTeamSettings,
        children: _ref2 => {
          let {
            register
          } = _ref2;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
              label: "Name",
              disabled: !canWriteTeamSettings,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({}, register('name', {
                required: true
              }), {
                id: "name-input"
              }))
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
              label: "Email",
              description: "This is optional and is primarily used to set the team profile avatar (via gravatar service).",
              disabled: !canWriteTeamSettings,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({}, register('email'), {
                placeholder: "team@email.com",
                type: "email",
                id: "email-input"
              }))
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
              type: "submit",
              disabled: !canWriteTeamSettings,
              children: "Update"
            })]
          });
        }
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(SharedPreferences/* SharedPreferences */.v, {
      resourceUri: `teams/${team.id}`,
      disabled: !canWriteTeamSettings
    })]
  });
};
/* harmony default export */ const teams_TeamSettings = (TeamSettings_connector(TeamSettings));
// EXTERNAL MODULE: ./public/app/features/teams/state/navModel.ts
var state_navModel = __webpack_require__("./public/app/features/teams/state/navModel.ts");
;// CONCATENATED MODULE: ./public/app/features/teams/TeamPages.tsx
var TeamPages_UpgradeBox, _TeamSyncUpgradeConte;

function TeamPages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















var PageTypes;

(function (PageTypes) {
  PageTypes["Members"] = "members";
  PageTypes["Settings"] = "settings";
  PageTypes["GroupSync"] = "groupsync";
})(PageTypes || (PageTypes = {}));

function TeamPages_mapStateToProps(state, props) {
  var _props$match$params$p;

  const teamId = parseInt(props.match.params.id, 10);
  const team = (0,selectors/* getTeam */.VP)(state.team, teamId);
  let defaultPage = 'members';

  if (context_srv/* contextSrv.accessControlEnabled */.Vt.accessControlEnabled()) {
    // With RBAC the settings page will always be available
    if (!team || !context_srv/* contextSrv.hasPermissionInMetadata */.Vt.hasPermissionInMetadata(types/* AccessControlAction.ActionTeamsPermissionsRead */.bW.ActionTeamsPermissionsRead, team)) {
      defaultPage = 'settings';
    }
  }

  const pageName = (_props$match$params$p = props.match.params.page) !== null && _props$match$params$p !== void 0 ? _props$match$params$p : defaultPage;
  const teamLoadingNav = (0,state_navModel/* getTeamLoadingNav */.o)(pageName);
  const navModel = (0,selectors_navModel/* getNavModel */.h)(state.navIndex, `team-${pageName}-${teamId}`, teamLoadingNav);
  const members = (0,selectors/* getTeamMembers */.YY)(state.team);
  return {
    navModel,
    teamId: teamId,
    pageName: pageName,
    team,
    members,
    editorsCanAdmin: config/* default.editorsCanAdmin */.ZP.editorsCanAdmin,
    // this makes the feature toggle mockable/controllable from tests,
    signedInUser: context_srv/* contextSrv.user */.Vt.user // this makes the feature toggle mockable/controllable from tests,

  };
}

const TeamPages_mapDispatchToProps = {
  loadTeam: actions/* loadTeam */.QX,
  loadTeamMembers: actions/* loadTeamMembers */.ei
};
const TeamPages_connector = (0,es.connect)(TeamPages_mapStateToProps, TeamPages_mapDispatchToProps);
class TeamPages extends react.PureComponent {
  constructor(props) {
    super(props);

    TeamPages_defineProperty(this, "textsAreEqual", (text1, text2) => {
      if (!text1 && !text2) {
        return true;
      }

      if (!text1 || !text2) {
        return false;
      }

      return text1.toLocaleLowerCase() === text2.toLocaleLowerCase();
    });

    TeamPages_defineProperty(this, "hideTabsFromNonTeamAdmin", (navModel, isSignedInUserTeamAdmin) => {
      if (context_srv/* contextSrv.accessControlEnabled */.Vt.accessControlEnabled()) {
        return navModel;
      }

      if (!isSignedInUserTeamAdmin && navModel.main && navModel.main.children) {
        navModel.main.children.filter(navItem => !this.textsAreEqual(navItem.text, PageTypes.Members)).map(navItem => {
          navItem.hideFromTabs = true;
        });
      }

      return navModel;
    });

    this.state = {
      isLoading: false,
      isSyncEnabled: (0,src.featureEnabled)('teamsync')
    };
  }

  async componentDidMount() {
    await this.fetchTeam();
  }

  async fetchTeam() {
    const {
      loadTeam,
      teamId
    } = this.props;
    this.setState({
      isLoading: true
    });
    const team = await loadTeam(teamId); // With accesscontrol, the TeamPermissions will fetch team members

    if (!context_srv/* contextSrv.accessControlEnabled */.Vt.accessControlEnabled()) {
      await this.props.loadTeamMembers();
    }

    this.setState({
      isLoading: false
    });
    return team;
  }

  getCurrentPage() {
    const pages = ['members', 'settings', 'groupsync'];
    const currentPage = this.props.pageName;
    return (0,lodash.includes)(pages, currentPage) ? currentPage : pages[0];
  }

  renderPage(isSignedInUserTeamAdmin) {
    const {
      isSyncEnabled
    } = this.state;
    const {
      members,
      team
    } = this.props;
    const currentPage = this.getCurrentPage();
    const canReadTeam = context_srv/* contextSrv.hasAccessInMetadata */.Vt.hasAccessInMetadata(types/* AccessControlAction.ActionTeamsRead */.bW.ActionTeamsRead, team, isSignedInUserTeamAdmin);
    const canReadTeamPermissions = context_srv/* contextSrv.hasAccessInMetadata */.Vt.hasAccessInMetadata(types/* AccessControlAction.ActionTeamsPermissionsRead */.bW.ActionTeamsPermissionsRead, team, isSignedInUserTeamAdmin);
    const canWriteTeamPermissions = context_srv/* contextSrv.hasAccessInMetadata */.Vt.hasAccessInMetadata(types/* AccessControlAction.ActionTeamsPermissionsWrite */.bW.ActionTeamsPermissionsWrite, team, isSignedInUserTeamAdmin);

    switch (currentPage) {
      case PageTypes.Members:
        if (context_srv/* contextSrv.accessControlEnabled */.Vt.accessControlEnabled()) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(teams_TeamPermissions, {
            team: team
          });
        } else {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(teams_TeamMembers, {
            syncEnabled: isSyncEnabled,
            members: members
          });
        }

      case PageTypes.Settings:
        return canReadTeam && /*#__PURE__*/(0,jsx_runtime.jsx)(teams_TeamSettings, {
          team: team
        });

      case PageTypes.GroupSync:
        if (isSyncEnabled) {
          if (canReadTeamPermissions) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)(teams_TeamGroupSync, {
              isReadOnly: !canWriteTeamPermissions
            });
          }
        } else if (config/* default.featureToggles.featureHighlights */.ZP.featureToggles.featureHighlights) {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [TeamPages_UpgradeBox || (TeamPages_UpgradeBox = /*#__PURE__*/(0,jsx_runtime.jsx)(UpgradeBox, {
              featureName: 'team sync',
              featureId: 'team-sync'
            })), _TeamSyncUpgradeConte || (_TeamSyncUpgradeConte = /*#__PURE__*/(0,jsx_runtime.jsx)(TeamSyncUpgradeContent, {}))]
          });
        }

    }

    return null;
  }

  render() {
    const {
      team,
      navModel,
      members,
      editorsCanAdmin,
      signedInUser
    } = this.props;
    const isTeamAdmin = (0,selectors/* isSignedInUserTeamAdmin */.vt)({
      members,
      editorsCanAdmin,
      signedInUser
    });
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
      navModel: this.hideTabsFromNonTeamAdmin(navModel, isTeamAdmin),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default.Contents */.Z.Contents, {
        isLoading: this.state.isLoading,
        children: team && Object.keys(team).length !== 0 && this.renderPage(isTeamAdmin)
      })
    });
  }

}
/* harmony default export */ const teams_TeamPages = (TeamPages_connector((0,grafana_ui_src.withTheme2)(TeamPages)));

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