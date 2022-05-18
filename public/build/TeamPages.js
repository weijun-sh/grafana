"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["TeamPages"],{

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

/***/ "./public/app/core/components/Upgrade/UpgradeBox.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradeBox": () => (/* binding */ UpgradeBox),
/* harmony export */   "UpgradeContent": () => (/* binding */ UpgradeContent),
/* harmony export */   "UpgradeContentVertical": () => (/* binding */ UpgradeContentVertical)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
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

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(theme => getUpgradeBoxStyles(theme, size));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_grafana_runtime_src__WEBPACK_IMPORTED_MODULE_2__.reportExperimentView)(`feature-highlights-${featureId}`, 'test', eventVariant);
  }, [eventVariant, featureId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", Object.assign({
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.box, className)
  }, htmlProps, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
      name: 'rocket',
      className: styles.icon
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.inner,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        className: styles.text,
        children: ["You\u2019ve discovered a Pro feature! ", text || `Get the Grafana Pro plan to access ${featureName}.`]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
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
    box: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
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
    inner: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    `,
    text: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: 0;
    `,
    button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
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
    icon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(0.5, 1, 0.5, 0.5)};
    `
  };
};

const UpgradeContent = ({
  listItems,
  image,
  featureUrl,
  featureName,
  description,
  caption,
  action
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getUpgradeContentStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.content,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
        className: styles.title,
        children: ["Get started with ", featureName]
      }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
        className: styles.description,
        children: description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
        className: styles.list,
        children: listItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            name: 'check',
            size: 'xl',
            className: styles.icon
          }), " ", item]
        }, index))
      }), (action === null || action === void 0 ? void 0 : action.link) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
        variant: 'primary',
        href: action.link,
        children: action.text
      }), (action === null || action === void 0 ? void 0 : action.onClick) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        variant: 'primary',
        onClick: action.onClick,
        children: action.text
      }), featureUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
        fill: 'text',
        href: featureUrl,
        className: styles.link,
        target: "_blank",
        rel: "noreferrer noopener",
        children: "Learn more"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.media,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: getImgUrl(image),
        alt: 'Feature screenshot'
      }), caption && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: styles.caption,
        children: caption
      })]
    })]
  });
};

const getUpgradeContentStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      justify-content: space-between;
    `,
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 45%;
      margin-right: ${theme.spacing(4)};
    `,
    media: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 55%;

      img {
        width: 100%;
      }
    `,
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.maxContrast};
    `,
    description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.primary};
      font-weight: ${theme.typography.fontWeightLight};
    `,
    list: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      list-style: none;
      margin: ${theme.spacing(4, 0, 2, 0)};

      li {
        display: flex;
        align-items: flex-start;
        color: ${theme.colors.text.primary};
        padding: ${theme.spacing(1, 0)};
      }
    `,
    icon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.success.main};
      margin-right: ${theme.spacing(1)};
    `,
    link: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing(2)};
    `,
    caption: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-weight: ${theme.typography.fontWeightLight};
      margin: ${theme.spacing(1, 0, 0)};
    `
  };
};

const UpgradeContentVertical = ({
  featureName,
  description,
  featureUrl,
  image
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getContentVerticalStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h3", {
      className: styles.title,
      children: ["Get started with ", featureName]
    }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", {
      className: styles.description,
      children: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
      fill: 'text',
      href: featureUrl,
      target: "_blank",
      rel: "noreferrer noopener",
      children: "Learn more"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.media,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: getImgUrl(image),
        alt: 'Feature screenshot'
      })
    })]
  });
};

const getContentVerticalStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      overflow: auto;
      height: 100%;
    `,
    title: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.maxContrast};
    `,
    description: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.primary};
      font-weight: ${theme.typography.fontWeightLight};
    `,
    media: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
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

/***/ }),

/***/ "./public/app/core/components/WithFeatureToggle.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WithFeatureToggle": () => (/* binding */ WithFeatureToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const WithFeatureToggle = ({
  featureToggle,
  children
}) => {
  if (featureToggle === true) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: children
    });
  }

  return null;
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

/***/ "./public/app/features/teams/TeamGroupSync.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamGroupSync": () => (/* binding */ TeamGroupSync),
/* harmony export */   "TeamSyncUpgradeContent": () => (/* binding */ TeamSyncUpgradeContent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
/* harmony import */ var app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Upgrade/UpgradeBox.tsx");
/* harmony import */ var app_features_admin_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/admin/utils.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/teams/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _UpgradeBox, _h, _Tooltip, _div, _Icon2, _h2, _th;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const {
  Input
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LegacyForms;

function mapStateToProps(state) {
  return {
    groups: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_9__.getTeamGroups)(state.team)
  };
}

const mapDispatchToProps = {
  loadTeamGroups: _state_actions__WEBPACK_IMPORTED_MODULE_8__.loadTeamGroups,
  addTeamGroup: _state_actions__WEBPACK_IMPORTED_MODULE_8__.addTeamGroup,
  removeTeamGroup: _state_actions__WEBPACK_IMPORTED_MODULE_8__.removeTeamGroup
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const headerTooltip = `Sync LDAP or OAuth groups with your Grafana teams.`;
class TeamGroupSync extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
        children: group.groupId
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
        style: {
          width: '1%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          size: "sm",
          variant: "destructive",
          onClick: () => this.onRemoveGroup(group),
          disabled: isReadOnly,
          children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      children: [(0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_7__.highlightTrial)() && (_UpgradeBox || (_UpgradeBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_6__.UpgradeBox, {
        featureId: 'team-sync',
        eventVariant: 'trial',
        featureName: 'team sync',
        text: 'Add a group to enable team sync for free during your trial of Grafana Pro.'
      }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "page-action-bar",
        children: [(!(0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_7__.highlightTrial)() || groups.length > 0) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
            className: "page-sub-heading",
            children: "External group sync"
          })), _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
            placement: "auto",
            content: headerTooltip,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              className: "icon--has-hover page-sub-heading-icon",
              name: "question-circle"
            })
          }))]
        }), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "page-action-bar__spacer"
        })), groups.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "pull-right",
          onClick: this.onToggleAdding,
          disabled: isReadOnly,
          children: [_Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: "plus"
          })), " Add group"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_3__.SlideDown, {
        in: isAdding,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "cta-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_4__.CloseButton, {
            onClick: this.onToggleAdding
          }), _h2 || (_h2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h5", {
            children: "Add External Group"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
            className: "gf-form-inline",
            onSubmit: this.onAddGroup,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "gf-form",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Input, {
                type: "text",
                className: "gf-form-input width-30",
                value: newGroupId,
                onChange: this.onNewGroupIdChanged,
                placeholder: "cn=ops,ou=groups,dc=grafana,dc=org",
                disabled: isReadOnly
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: "gf-form",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                type: "submit",
                disabled: isReadOnly || !this.isNewGroupValid(),
                children: "Add group"
              })
            })]
          })]
        })
      }), groups.length === 0 && !isAdding && ((0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_7__.highlightTrial)() ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(TeamSyncUpgradeContent, {
        action: {
          onClick: this.onToggleAdding,
          text: 'Add group'
        }
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClick: this.onToggleAdding,
        buttonIcon: "users-alt",
        title: "There are no external groups to sync with",
        buttonTitle: "Add group",
        proTip: headerTooltip,
        proTipLinkTitle: "Learn more",
        proTipLink: "https://docs.grafana.org/auth/enhanced_ldap/",
        proTipTarget: "_blank",
        buttonDisabled: isReadOnly
      })), groups.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "admin-list-table",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("table", {
          className: "filter-table filter-table--hover form-inline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("tr", {
              children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                children: "External Group ID"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("th", {
                style: {
                  width: '1%'
                }
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("tbody", {
            children: groups.map(group => this.renderGroup(group))
          })]
        })
      })]
    });
  }

}
const TeamSyncUpgradeContent = ({
  action
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_6__.UpgradeContent, {
    action: action,
    listItems: ['Stop managing user access in two places - assign users to groups in SAML, LDAP or Oauth, and manage access at a Team level in Grafana', 'Update users’ permissions immediately when you add or remove them from an LDAP group, with no need for them to sign out and back in'],
    image: `team-sync-${theme.isLight ? 'light' : 'dark'}.png`,
    featureName: 'team sync',
    featureUrl: 'https://grafana.com/docs/grafana/latest/enterprise/team-sync',
    description: 'Team Sync makes it easier for you to manage users’ access in Grafana, by immediately updating each user’s Grafana teams and permissions based on their single sign-on group membership, instead of when users sign in.'
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(TeamGroupSync));

/***/ }),

/***/ "./public/app/features/teams/TeamMemberRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamMemberRow": () => (/* binding */ TeamMemberRow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
/* harmony import */ var app_core_components_WithFeatureToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/WithFeatureToggle.tsx");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const {
  Select
} = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LegacyForms;
const mapDispatchToProps = {
  removeTeamMember: _state_actions__WEBPACK_IMPORTED_MODULE_6__.removeTeamMember,
  updateTeamMember: _state_actions__WEBPACK_IMPORTED_MODULE_6__.updateTeamMember
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps);
class TeamMemberRow extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onPermissionChange", (item, member) => {
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
    const value = app_types__WEBPACK_IMPORTED_MODULE_5__.teamsPermissionLevels.find(dp => dp.value === member.permission);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_WithFeatureToggle__WEBPACK_IMPORTED_MODULE_4__.WithFeatureToggle, {
      featureToggle: editorsCanAdmin,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        className: "width-5 team-permissions",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "gf-form",
          children: [signedInUserIsTeamAdmin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Select, {
            isSearchable: false,
            options: app_types__WEBPACK_IMPORTED_MODULE_5__.teamsPermissionLevels,
            onChange: item => this.onPermissionChange(item, member),
            className: "gf-form-select-box__control--menu-right",
            value: value
          }), !signedInUserIsTeamAdmin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            children: value.label
          })]
        })
      })
    });
  }

  renderLabels(labels) {
    if (!labels) {
      return _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {}));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
      children: labels.map(label => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_3__.TagBadge, {
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        className: "width-4 text-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
          "aria-label": `Avatar for team member "${member.name}"`,
          className: "filter-table__avatar",
          src: member.avatarUrl
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        children: member.login
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        children: member.email
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        children: member.name
      }), this.renderPermissions(member), syncEnabled && this.renderLabels(member.labels), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("td", {
        className: "text-right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.DeleteButton, {
          "aria-label": "Remove team member",
          size: "sm",
          disabled: !signedInUserIsTeamAdmin,
          onConfirm: () => this.onRemoveMember(member)
        })
      })]
    }, member.userId);
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(TeamMemberRow));

/***/ }),

/***/ "./public/app/features/teams/TeamMembers.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamMembers": () => (/* binding */ TeamMembers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
/* harmony import */ var app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
/* harmony import */ var app_core_components_Select_UserPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Select/UserPicker.tsx");
/* harmony import */ var app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
/* harmony import */ var app_core_components_WithFeatureToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/WithFeatureToggle.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _TeamMemberRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/teams/TeamMemberRow.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/teams/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/teams/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td, _Label, _th, _th2, _th3, _th4, _th5, _th6;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function mapStateToProps(state) {
  return {
    searchMemberQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getSearchMemberQuery)(state.team),
    editorsCanAdmin: app_core_config__WEBPACK_IMPORTED_MODULE_8__.config.editorsCanAdmin,
    // this makes the feature toggle mockable/controllable from tests,
    signedInUser: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.user // this makes the feature toggle mockable/controllable from tests,

  };
}

const mapDispatchToProps = {
  addTeamMember: _state_actions__WEBPACK_IMPORTED_MODULE_11__.addTeamMember,
  setSearchMemberQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_12__.setSearchMemberQuery
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class TeamMembers extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setSearchMemberQuery(value);
    });

    _defineProperty(this, "onToggleAdding", () => {
      this.setState({
        isAdding: !this.state.isAdding
      });
    });

    _defineProperty(this, "onUserSelected", user => {
      this.setState({
        newTeamMember: user
      });
    });

    _defineProperty(this, "onAddUserToTeam", async () => {
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
      return _td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {}));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("td", {
      children: labels.map(label => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_6__.TagBadge, {
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
    const isTeamAdmin = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.isSignedInUserTeamAdmin)({
      members,
      editorsCanAdmin,
      signedInUser
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "page-action-bar",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: "gf-form gf-form--grow",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FilterInput, {
            placeholder: "Search members",
            value: searchMemberQuery,
            onChange: this.onSearchQueryChange
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "pull-right",
          onClick: this.onToggleAdding,
          disabled: isAdding || !isTeamAdmin,
          children: "Add member"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_3__.SlideDown, {
        in: isAdding,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "cta-form",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_4__.CloseButton, {
            "aria-label": "Close 'Add team member' dialogue",
            onClick: this.onToggleAdding
          }), _Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label, {
            htmlFor: "user-picker",
            children: "Add team member"
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: "gf-form-inline",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Select_UserPicker__WEBPACK_IMPORTED_MODULE_5__.UserPicker, {
              inputId: "user-picker",
              onSelected: this.onUserSelected,
              className: "min-width-30"
            }), this.state.newTeamMember && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
              type: "submit",
              onClick: this.onAddUserToTeam,
              children: "Add to team"
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "admin-list-table",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("table", {
          className: "filter-table filter-table--hover form-inline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("tr", {
              children: [_th || (_th = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {})), _th2 || (_th2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                children: "Login"
              })), _th3 || (_th3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                children: "Email"
              })), _th4 || (_th4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                children: "Name"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_WithFeatureToggle__WEBPACK_IMPORTED_MODULE_7__.WithFeatureToggle, {
                featureToggle: editorsCanAdmin,
                children: _th5 || (_th5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                  children: "Permission"
                }))
              }), syncEnabled && (_th6 || (_th6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {}))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("th", {
                style: {
                  width: '1%'
                }
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("tbody", {
            children: members && members.map(member => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_TeamMemberRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(TeamMembers));

/***/ }),

/***/ "./public/app/features/teams/TeamPages.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamPages": () => (/* binding */ TeamPages),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Upgrade/UpgradeBox.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _TeamGroupSync__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/teams/TeamGroupSync.tsx");
/* harmony import */ var _TeamMembers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/teams/TeamMembers.tsx");
/* harmony import */ var _TeamPermissions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/teams/TeamPermissions.tsx");
/* harmony import */ var _TeamSettings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/teams/TeamSettings.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/teams/state/navModel.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/teams/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _UpgradeBox, _TeamSyncUpgradeConte;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















var PageTypes;

(function (PageTypes) {
  PageTypes["Members"] = "members";
  PageTypes["Settings"] = "settings";
  PageTypes["GroupSync"] = "groupsync";
})(PageTypes || (PageTypes = {}));

function mapStateToProps(state, props) {
  var _props$match$params$p;

  const teamId = parseInt(props.match.params.id, 10);
  const team = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_17__.getTeam)(state.team, teamId);
  let defaultPage = 'members';

  if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.accessControlEnabled()) {
    // With RBAC the settings page will always be available
    if (!team || !app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
      defaultPage = 'settings';
    }
  }

  const pageName = (_props$match$params$p = props.match.params.page) !== null && _props$match$params$p !== void 0 ? _props$match$params$p : defaultPage;
  const teamLoadingNav = (0,_state_navModel__WEBPACK_IMPORTED_MODULE_16__.getTeamLoadingNav)(pageName);
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_8__.getNavModel)(state.navIndex, `team-${pageName}-${teamId}`, teamLoadingNav);
  const members = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_17__.getTeamMembers)(state.team);
  return {
    navModel,
    teamId: teamId,
    pageName: pageName,
    team,
    members,
    editorsCanAdmin: app_core_config__WEBPACK_IMPORTED_MODULE_7__["default"].editorsCanAdmin,
    // this makes the feature toggle mockable/controllable from tests,
    signedInUser: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.user // this makes the feature toggle mockable/controllable from tests,

  };
}

const mapDispatchToProps = {
  loadTeam: _state_actions__WEBPACK_IMPORTED_MODULE_15__.loadTeam,
  loadTeamMembers: _state_actions__WEBPACK_IMPORTED_MODULE_15__.loadTeamMembers
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
class TeamPages extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "textsAreEqual", (text1, text2) => {
      if (!text1 && !text2) {
        return true;
      }

      if (!text1 || !text2) {
        return false;
      }

      return text1.toLocaleLowerCase() === text2.toLocaleLowerCase();
    });

    _defineProperty(this, "hideTabsFromNonTeamAdmin", (navModel, isSignedInUserTeamAdmin) => {
      if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.accessControlEnabled()) {
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
      isSyncEnabled: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.featureEnabled)('teamsync')
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

    if (!app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.accessControlEnabled()) {
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
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(pages, currentPage) ? currentPage : pages[0];
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
    const canReadTeam = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ActionTeamsRead, team, isSignedInUserTeamAdmin);
    const canReadTeamPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ActionTeamsPermissionsRead, team, isSignedInUserTeamAdmin);
    const canWriteTeamPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasAccessInMetadata(app_types__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ActionTeamsPermissionsWrite, team, isSignedInUserTeamAdmin);

    switch (currentPage) {
      case PageTypes.Members:
        if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.accessControlEnabled()) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_TeamPermissions__WEBPACK_IMPORTED_MODULE_13__["default"], {
            team: team
          });
        } else {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_TeamMembers__WEBPACK_IMPORTED_MODULE_12__["default"], {
            syncEnabled: isSyncEnabled,
            members: members
          });
        }

      case PageTypes.Settings:
        return canReadTeam && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_TeamSettings__WEBPACK_IMPORTED_MODULE_14__["default"], {
          team: team
        });

      case PageTypes.GroupSync:
        if (isSyncEnabled) {
          if (canReadTeamPermissions) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_TeamGroupSync__WEBPACK_IMPORTED_MODULE_11__["default"], {
              isReadOnly: !canWriteTeamPermissions
            });
          }
        } else if (app_core_config__WEBPACK_IMPORTED_MODULE_7__["default"].featureToggles.featureHighlights) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
            children: [_UpgradeBox || (_UpgradeBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_6__.UpgradeBox, {
              featureName: 'team sync',
              featureId: 'team-sync'
            })), _TeamSyncUpgradeConte || (_TeamSyncUpgradeConte = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_TeamGroupSync__WEBPACK_IMPORTED_MODULE_11__.TeamSyncUpgradeContent, {}))]
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
    const isTeamAdmin = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_17__.isSignedInUserTeamAdmin)({
      members,
      editorsCanAdmin,
      signedInUser
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
      navModel: this.hideTabsFromNonTeamAdmin(navModel, isTeamAdmin),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
        isLoading: this.state.isLoading,
        children: team && Object.keys(team).length !== 0 && this.renderPage(isTeamAdmin)
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.withTheme2)(TeamPages)));

/***/ }),

/***/ "./public/app/features/teams/TeamPermissions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_components_AccessControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/AccessControl/index.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






// TeamPermissions component replaces TeamMembers component when the accesscontrol feature flag is set
const TeamPermissions = props => {
  const canSetPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermissionInMetadata(_types__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.ActionTeamsPermissionsWrite, props.team);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_AccessControl__WEBPACK_IMPORTED_MODULE_1__.Permissions, {
    title: "Members",
    addPermissionTitle: "Add member",
    buttonLabel: "Add member",
    resource: "teams",
    resourceId: props.team.id,
    canSetPermissions: canSetPermissions
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamPermissions);

/***/ }),

/***/ "./public/app/features/teams/TeamSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamSettings": () => (/* binding */ TeamSettings),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/SharedPreferences/SharedPreferences.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const mapDispatchToProps = {
  updateTeam: _state_actions__WEBPACK_IMPORTED_MODULE_6__.updateTeam
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, mapDispatchToProps);
const TeamSettings = ({
  team,
  updateTeam
}) => {
  const canWriteTeamSettings = app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionTeamsWrite, team);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.VerticalGroup, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FieldSet, {
      label: "Team settings",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
        defaultValues: Object.assign({}, team),
        onSubmit: formTeam => {
          updateTeam(formTeam.name, formTeam.email);
        },
        disabled: !canWriteTeamSettings,
        children: ({
          register
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Name",
            disabled: !canWriteTeamSettings,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('name', {
              required: true
            }), {
              id: "name-input"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Field, {
            label: "Email",
            description: "This is optional and is primarily used to set the team profile avatar (via gravatar service).",
            disabled: !canWriteTeamSettings,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, Object.assign({}, register('email'), {
              placeholder: "team@email.com",
              type: "email",
              id: "email-input"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "submit",
            disabled: !canWriteTeamSettings,
            children: "Update"
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_3__.SharedPreferences, {
      resourceUri: `teams/${team.id}`,
      disabled: !canWriteTeamSettings
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(TeamSettings));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUE1QixNQUFnRDFELE1BQXREO0FBQ0EsUUFBTXlNLE9BQU8sR0FBRzdILFlBQVksQ0FBQzhILGNBQWIsSUFBK0I5SCxZQUFZLENBQUMrSCxPQUFiLEtBQXlCaEIsb0RBQXhFO0FBQ0EsUUFBTWtCLGVBQWUsR0FBRzFKLFVBQVUsS0FBS3dILGdFQUF2QztBQUNBLFFBQU1qRyx1QkFBdUIsR0FBRytILE9BQU8sSUFBSUksZUFBM0M7QUFFQSxTQUFPbkksdUJBQXVCLElBQUksQ0FBQ2hCLGVBQW5DO0FBQ0QsQ0FQTSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9TaGFyZWRQcmVmZXJlbmNlcy9TaGFyZWRQcmVmZXJlbmNlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1VwZ3JhZGUvVXBncmFkZUJveC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1dpdGhGZWF0dXJlVG9nZ2xlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi91dGlscy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy90ZWFtcy9UZWFtR3JvdXBTeW5jLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy90ZWFtcy9UZWFtTWVtYmVyUm93LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy90ZWFtcy9UZWFtTWVtYmVycy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvVGVhbVBhZ2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy90ZWFtcy9UZWFtUGVybWlzc2lvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3RlYW1zL1RlYW1TZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvdGVhbXMvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy90ZWFtcy9zdGF0ZS9uYXZNb2RlbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy90ZWFtcy9zdGF0ZS9zZWxlY3RvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHQsIFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybyc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgRmllbGQsXG4gIEZpZWxkU2V0LFxuICBGb3JtLFxuICBJY29uLFxuICBMYWJlbCxcbiAgUmFkaW9CdXR0b25Hcm91cCxcbiAgU2VsZWN0LFxuICBzdHlsZXNGYWN0b3J5LFxuICBUaW1lWm9uZVBpY2tlcixcbiAgVG9vbHRpcCxcbiAgV2Vla1N0YXJ0UGlja2VyLFxufSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBQcmVmZXJlbmNlc1NlcnZpY2UgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9QcmVmZXJlbmNlc1NlcnZpY2UnO1xuaW1wb3J0IHsgYmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcbmltcG9ydCB7IERhc2hib2FyZFNlYXJjaEhpdCwgRGFzaGJvYXJkU2VhcmNoSXRlbVR5cGUgfSBmcm9tICdhcHAvZmVhdHVyZXMvc2VhcmNoL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlc291cmNlVXJpOiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIGhvbWVEYXNoYm9hcmRJZDogbnVtYmVyO1xuICB0aGVtZTogc3RyaW5nO1xuICB0aW1lem9uZTogc3RyaW5nO1xuICB3ZWVrU3RhcnQ6IHN0cmluZztcbiAgZGFzaGJvYXJkczogRGFzaGJvYXJkU2VhcmNoSGl0W107XG59XG5cbmNvbnN0IHRoZW1lczogU2VsZWN0YWJsZVZhbHVlW10gPSBbXG4gIHsgdmFsdWU6ICcnLCBsYWJlbDogdCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLnRoZW1lLmRlZmF1bHQtbGFiZWwnLCBtZXNzYWdlOiAnRGVmYXVsdCcgfSkgfSxcbiAgeyB2YWx1ZTogJ2RhcmsnLCBsYWJlbDogdCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLnRoZW1lLmRhcmstbGFiZWwnLCBtZXNzYWdlOiAnRGFyaycgfSkgfSxcbiAgeyB2YWx1ZTogJ2xpZ2h0JywgbGFiZWw6IHQoeyBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy50aGVtZS5saWdodC1sYWJlbCcsIG1lc3NhZ2U6ICdMaWdodCcgfSkgfSxcbl07XG5cbmV4cG9ydCBjbGFzcyBTaGFyZWRQcmVmZXJlbmNlcyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHNlcnZpY2U6IFByZWZlcmVuY2VzU2VydmljZTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNlcnZpY2UgPSBuZXcgUHJlZmVyZW5jZXNTZXJ2aWNlKHByb3BzLnJlc291cmNlVXJpKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaG9tZURhc2hib2FyZElkOiAwLFxuICAgICAgdGhlbWU6ICcnLFxuICAgICAgdGltZXpvbmU6ICcnLFxuICAgICAgd2Vla1N0YXJ0OiAnJyxcbiAgICAgIGRhc2hib2FyZHM6IFtdLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwcmVmcyA9IGF3YWl0IHRoaXMuc2VydmljZS5sb2FkKCk7XG4gICAgY29uc3QgZGFzaGJvYXJkcyA9IGF3YWl0IGJhY2tlbmRTcnYuc2VhcmNoKHsgc3RhcnJlZDogdHJ1ZSB9KTtcbiAgICBjb25zdCBkZWZhdWx0RGFzaGJvYXJkSGl0OiBEYXNoYm9hcmRTZWFyY2hIaXQgPSB7XG4gICAgICBpZDogMCxcbiAgICAgIHRpdGxlOiAnRGVmYXVsdCcsXG4gICAgICB0YWdzOiBbXSxcbiAgICAgIHR5cGU6ICcnIGFzIERhc2hib2FyZFNlYXJjaEl0ZW1UeXBlLFxuICAgICAgdWlkOiAnJyxcbiAgICAgIHVyaTogJycsXG4gICAgICB1cmw6ICcnLFxuICAgICAgZm9sZGVySWQ6IDAsXG4gICAgICBmb2xkZXJUaXRsZTogJycsXG4gICAgICBmb2xkZXJVaWQ6ICcnLFxuICAgICAgZm9sZGVyVXJsOiAnJyxcbiAgICAgIGlzU3RhcnJlZDogZmFsc2UsXG4gICAgICBzbHVnOiAnJyxcbiAgICAgIGl0ZW1zOiBbXSxcbiAgICB9O1xuXG4gICAgaWYgKHByZWZzLmhvbWVEYXNoYm9hcmRJZCA+IDAgJiYgIWRhc2hib2FyZHMuZmluZCgoZCkgPT4gZC5pZCA9PT0gcHJlZnMuaG9tZURhc2hib2FyZElkKSkge1xuICAgICAgY29uc3QgbWlzc2luZyA9IGF3YWl0IGJhY2tlbmRTcnYuc2VhcmNoKHsgZGFzaGJvYXJkSWRzOiBbcHJlZnMuaG9tZURhc2hib2FyZElkXSB9KTtcbiAgICAgIGlmIChtaXNzaW5nICYmIG1pc3NpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICBkYXNoYm9hcmRzLnB1c2gobWlzc2luZ1swXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBob21lRGFzaGJvYXJkSWQ6IHByZWZzLmhvbWVEYXNoYm9hcmRJZCxcbiAgICAgIHRoZW1lOiBwcmVmcy50aGVtZSxcbiAgICAgIHRpbWV6b25lOiBwcmVmcy50aW1lem9uZSxcbiAgICAgIHdlZWtTdGFydDogcHJlZnMud2Vla1N0YXJ0LFxuICAgICAgZGFzaGJvYXJkczogW2RlZmF1bHREYXNoYm9hcmRIaXQsIC4uLmRhc2hib2FyZHNdLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXRGb3JtID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgaG9tZURhc2hib2FyZElkLCB0aGVtZSwgdGltZXpvbmUsIHdlZWtTdGFydCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBhd2FpdCB0aGlzLnNlcnZpY2UudXBkYXRlKHsgaG9tZURhc2hib2FyZElkLCB0aGVtZSwgdGltZXpvbmUsIHdlZWtTdGFydCB9KTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH07XG5cbiAgb25UaGVtZUNoYW5nZWQgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0aGVtZTogdmFsdWUgfSk7XG4gIH07XG5cbiAgb25UaW1lWm9uZUNoYW5nZWQgPSAodGltZXpvbmU/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIXRpbWV6b25lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lem9uZTogdGltZXpvbmUgfSk7XG4gIH07XG5cbiAgb25XZWVrU3RhcnRDaGFuZ2VkID0gKHdlZWtTdGFydDogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdlZWtTdGFydDogd2Vla1N0YXJ0IH0pO1xuICB9O1xuXG4gIG9uSG9tZURhc2hib2FyZENoYW5nZWQgPSAoZGFzaGJvYXJkSWQ6IG51bWJlcikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBob21lRGFzaGJvYXJkSWQ6IGRhc2hib2FyZElkIH0pO1xuICB9O1xuXG4gIGdldEZ1bGxEYXNoTmFtZSA9IChkYXNoYm9hcmQ6IFNlbGVjdGFibGVWYWx1ZTxEYXNoYm9hcmRTZWFyY2hIaXQ+KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkYXNoYm9hcmQuZm9sZGVyVGl0bGUgPT09ICd1bmRlZmluZWQnIHx8IGRhc2hib2FyZC5mb2xkZXJUaXRsZSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBkYXNoYm9hcmQudGl0bGU7XG4gICAgfVxuICAgIHJldHVybiBkYXNoYm9hcmQuZm9sZGVyVGl0bGUgKyAnIC8gJyArIGRhc2hib2FyZC50aXRsZTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aGVtZSwgdGltZXpvbmUsIHdlZWtTdGFydCwgaG9tZURhc2hib2FyZElkLCBkYXNoYm9hcmRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVzKCk7XG5cbiAgICBjb25zdCBob21lRGFzaGJvYXJkVG9vbHRpcCA9IChcbiAgICAgIDxUb29sdGlwXG4gICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgIDxUcmFucyBpZD1cInNoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMuaG9tZS1kYXNoYm9hcmQtdG9vbHRpcFwiPlxuICAgICAgICAgICAgTm90IGZpbmRpbmcgdGhlIGRhc2hib2FyZCB5b3Ugd2FudD8gU3RhciBpdCBmaXJzdCwgdGhlbiBpdCBzaG91bGQgYXBwZWFyIGluIHRoaXMgc2VsZWN0IGJveC5cbiAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxJY29uIG5hbWU9XCJpbmZvLWNpcmNsZVwiIC8+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdEZvcm19PlxuICAgICAgICB7KCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmllbGRTZXQgbGFiZWw9ezxUcmFucyBpZD1cInNoYXJlZC1wcmVmZXJlbmNlcy50aXRsZVwiPlByZWZlcmVuY2VzPC9UcmFucz59IGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgICAgICAgIDxGaWVsZCBsYWJlbD17dCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy50aGVtZS1sYWJlbCcsIG1lc3NhZ2U6ICdVSSBUaGVtZScgfSl9PlxuICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGVtZXN9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhlbWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0udmFsdWUgPT09IHRoZW1lKT8udmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRoZW1lQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPXtcbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiaG9tZS1kYXNoYm9hcmQtc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsVGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy5ob21lLWRhc2hib2FyZC1sYWJlbFwiPkhvbWUgRGFzaGJvYXJkPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIHtob21lRGFzaGJvYXJkVG9vbHRpcH1cbiAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiVXNlciBwcmVmZXJlbmNlcyBob21lIGRhc2hib2FyZCBkcm9wIGRvd25cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rhc2hib2FyZHMuZmluZCgoZGFzaGJvYXJkKSA9PiBkYXNoYm9hcmQuaWQgPT09IGhvbWVEYXNoYm9hcmRJZCl9XG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KGkpID0+IGkuaWR9XG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17dGhpcy5nZXRGdWxsRGFzaE5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhc2hib2FyZDogU2VsZWN0YWJsZVZhbHVlPERhc2hib2FyZFNlYXJjaEhpdD4pID0+XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Ib21lRGFzaGJvYXJkQ2hhbmdlZChkYXNoYm9hcmQuaWQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkYXNoYm9hcmRzfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Qoe1xuICAgICAgICAgICAgICAgICAgICBpZDogJ3NoYXJlZC1wcmVmZXJlbmNlcy5maWVsZHMuaG9tZS1kYXNoYm9hcmQtcGxhY2Vob2xkZXInLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ2hvb3NlIGRlZmF1bHQgZGFzaGJvYXJkJyxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD1cImhvbWUtZGFzaGJvYXJkLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD17dCh7IGlkOiAnc2hhcmVkLWRhc2hib2FyZC5maWVsZHMudGltZXpvbmUtbGFiZWwnLCBtZXNzYWdlOiAnVGltZXpvbmUnIH0pfVxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5UaW1lWm9uZVBpY2tlci5jb250YWluZXJWMn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUaW1lWm9uZVBpY2tlclxuICAgICAgICAgICAgICAgICAgaW5jbHVkZUludGVybmFsPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpbWV6b25lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UaW1lWm9uZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICBpbnB1dElkPVwic2hhcmVkLXByZWZlcmVuY2VzLXRpbWV6b25lLXBpY2tlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD17dCh7IGlkOiAnc2hhcmVkLXByZWZlcmVuY2VzLmZpZWxkcy53ZWVrLXN0YXJ0LWxhYmVsJywgbWVzc2FnZTogJ1dlZWsgc3RhcnQnIH0pfVxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5XZWVrU3RhcnRQaWNrZXIuY29udGFpbmVyVjJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8V2Vla1N0YXJ0UGlja2VyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17d2Vla1N0YXJ0fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25XZWVrU3RhcnRDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgaW5wdXRJZD17J3NoYXJlZC1wcmVmZXJlbmNlcy13ZWVrLXN0YXJ0LXBpY2tlcid9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tYnV0dG9uLXJvd1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e3NlbGVjdG9ycy5jb21wb25lbnRzLlVzZXJQcm9maWxlLnByZWZlcmVuY2VzU2F2ZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJjb21tb24uc2F2ZVwiPlNhdmU8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRmllbGRTZXQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJlZFByZWZlcmVuY2VzO1xuXG5jb25zdCBnZXRTdHlsZXMgPSBzdHlsZXNGYWN0b3J5KCgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbFRleHQ6IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIGAsXG4gIH07XG59KTtcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEhUTUxBdHRyaWJ1dGVzLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHJlcG9ydEV4cGVyaW1lbnRWaWV3IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMnO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBMaW5rQnV0dG9uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG50eXBlIENvbXBvbmVudFNpemUgPSAnc20nIHwgJ21kJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxPclNWR0VsZW1lbnQ+IHtcbiAgZmVhdHVyZU5hbWU6IHN0cmluZztcbiAgc2l6ZT86IENvbXBvbmVudFNpemU7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGV2ZW50VmFyaWFudD86IHN0cmluZztcbiAgZmVhdHVyZUlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBVcGdyYWRlQm94ID0gKHtcbiAgZmVhdHVyZU5hbWUsXG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIHRleHQsXG4gIGZlYXR1cmVJZCxcbiAgZXZlbnRWYXJpYW50ID0gJycsXG4gIHNpemUgPSAnbWQnLFxuICAuLi5odG1sUHJvcHNcbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoKHRoZW1lKSA9PiBnZXRVcGdyYWRlQm94U3R5bGVzKHRoZW1lLCBzaXplKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXBvcnRFeHBlcmltZW50VmlldyhgZmVhdHVyZS1oaWdobGlnaHRzLSR7ZmVhdHVyZUlkfWAsICd0ZXN0JywgZXZlbnRWYXJpYW50KTtcbiAgfSwgW2V2ZW50VmFyaWFudCwgZmVhdHVyZUlkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmJveCwgY2xhc3NOYW1lKX0gey4uLmh0bWxQcm9wc30+XG4gICAgICA8SWNvbiBuYW1lPXsncm9ja2V0J30gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cbiAgICAgICAgICBZb3XigJl2ZSBkaXNjb3ZlcmVkIGEgUHJvIGZlYXR1cmUhIHt0ZXh0IHx8IGBHZXQgdGhlIEdyYWZhbmEgUHJvIHBsYW4gdG8gYWNjZXNzICR7ZmVhdHVyZU5hbWV9LmB9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9wcm9maWxlL29yZy9zdWJzY3JpcHRpb25cIlxuICAgICAgICAgIHRhcmdldD1cIl9fYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgVXBncmFkZVxuICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFVwZ3JhZGVCb3hTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIsIHNpemU6IENvbXBvbmVudFNpemUpID0+IHtcbiAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKDIpO1xuICBjb25zdCBmb250QmFzZSA9IHNpemUgPT09ICdtZCcgPyAnYm9keScgOiAnYm9keVNtYWxsJztcblxuICByZXR1cm4ge1xuICAgIGJveDogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAke2JvcmRlclJhZGl1c307XG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5zdWNjZXNzLnRyYW5zcGFyZW50fTtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuc3VjY2Vzcy50ZXh0fTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5W2ZvbnRCYXNlXS5mb250U2l6ZX07XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygwLCAnYXV0bycsIDMsICdhdXRvJyl9O1xuICAgICAgbWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy54eGx9cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICBgLFxuICAgIGlubmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGAsXG4gICAgdGV4dDogY3NzYFxuICAgICAgbWFyZ2luOiAwO1xuICAgIGAsXG4gICAgYnV0dG9uOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5zdWNjZXNzLm1haW59O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TGlnaHR9O1xuICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMuc3VjY2Vzcy5tYWlufTtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQucHJpbWFyeX07XG4gICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5Lm1haW59O1xuICAgICAgfVxuICAgIGAsXG4gICAgaWNvbjogY3NzYFxuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMC41LCAxLCAwLjUsIDAuNSl9O1xuICAgIGAsXG4gIH07XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFVwZ3JhZGVDb250ZW50UHJvcHMge1xuICBpbWFnZTogc3RyaW5nO1xuICBmZWF0dXJlVXJsPzogc3RyaW5nO1xuICBmZWF0dXJlTmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgbGlzdEl0ZW1zOiBzdHJpbmdbXTtcbiAgY2FwdGlvbj86IHN0cmluZztcbiAgYWN0aW9uPzoge1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBsaW5rPzogc3RyaW5nO1xuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgVXBncmFkZUNvbnRlbnQgPSAoe1xuICBsaXN0SXRlbXMsXG4gIGltYWdlLFxuICBmZWF0dXJlVXJsLFxuICBmZWF0dXJlTmFtZSxcbiAgZGVzY3JpcHRpb24sXG4gIGNhcHRpb24sXG4gIGFjdGlvbixcbn06IFVwZ3JhZGVDb250ZW50UHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRVcGdyYWRlQ29udGVudFN0eWxlcyk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5HZXQgc3RhcnRlZCB3aXRoIHtmZWF0dXJlTmFtZX08L2gzPlxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPGg2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57ZGVzY3JpcHRpb259PC9oNj59XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cbiAgICAgICAgICB7bGlzdEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT17J2NoZWNrJ30gc2l6ZT17J3hsJ30gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz4ge2l0ZW19XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7YWN0aW9uPy5saW5rICYmIChcbiAgICAgICAgICA8TGlua0J1dHRvbiB2YXJpYW50PXsncHJpbWFyeSd9IGhyZWY9e2FjdGlvbi5saW5rfT5cbiAgICAgICAgICAgIHthY3Rpb24udGV4dH1cbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHthY3Rpb24/Lm9uQ2xpY2sgJiYgKFxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD17J3ByaW1hcnknfSBvbkNsaWNrPXthY3Rpb24ub25DbGlja30+XG4gICAgICAgICAgICB7YWN0aW9uLnRleHR9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICAgIHtmZWF0dXJlVXJsICYmIChcbiAgICAgICAgICA8TGlua0J1dHRvbiBmaWxsPXsndGV4dCd9IGhyZWY9e2ZlYXR1cmVVcmx9IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIj5cbiAgICAgICAgICAgIExlYXJuIG1vcmVcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWF9PlxuICAgICAgICA8aW1nIHNyYz17Z2V0SW1nVXJsKGltYWdlKX0gYWx0PXsnRmVhdHVyZSBzY3JlZW5zaG90J30gLz5cbiAgICAgICAge2NhcHRpb24gJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY2FwdGlvbn0+e2NhcHRpb259PC9wPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0VXBncmFkZUNvbnRlbnRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluZXI6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYCxcbiAgICBjb250ZW50OiBjc3NgXG4gICAgICB3aWR0aDogNDUlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoNCl9O1xuICAgIGAsXG4gICAgbWVkaWE6IGNzc2BcbiAgICAgIHdpZHRoOiA1NSU7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGAsXG4gICAgdGl0bGU6IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0Lm1heENvbnRyYXN0fTtcbiAgICBgLFxuICAgIGRlc2NyaXB0aW9uOiBjc3NgXG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5wcmltYXJ5fTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodExpZ2h0fTtcbiAgICBgLFxuICAgIGxpc3Q6IGNzc2BcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZyg0LCAwLCAyLCAwKX07XG5cbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICAgICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSwgMCl9O1xuICAgICAgfVxuICAgIGAsXG4gICAgaWNvbjogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnN1Y2Nlc3MubWFpbn07XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgYCxcbiAgICBsaW5rOiBjc3NgXG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICBgLFxuICAgIGNhcHRpb246IGNzc2BcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodExpZ2h0fTtcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDEsIDAsIDApfTtcbiAgICBgLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFVwZ3JhZGVDb250ZW50VmVydGljYWwgPSAoe1xuICBmZWF0dXJlTmFtZSxcbiAgZGVzY3JpcHRpb24sXG4gIGZlYXR1cmVVcmwsXG4gIGltYWdlLFxufTogT21pdDxVcGdyYWRlQ29udGVudFByb3BzLCAnbGlzdEl0ZW1zJyB8ICdjYXB0aW9uJz4pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRDb250ZW50VmVydGljYWxTdHlsZXMpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+R2V0IHN0YXJ0ZWQgd2l0aCB7ZmVhdHVyZU5hbWV9PC9oMz5cbiAgICAgIHtkZXNjcmlwdGlvbiAmJiA8aDYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L2g2Pn1cbiAgICAgIDxMaW5rQnV0dG9uIGZpbGw9eyd0ZXh0J30gaHJlZj17ZmVhdHVyZVVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiPlxuICAgICAgICBMZWFybiBtb3JlXG4gICAgICA8L0xpbmtCdXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhfT5cbiAgICAgICAgPGltZyBzcmM9e2dldEltZ1VybChpbWFnZSl9IGFsdD17J0ZlYXR1cmUgc2NyZWVuc2hvdCd9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldENvbnRlbnRWZXJ0aWNhbFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYCxcbiAgICB0aXRsZTogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQubWF4Q29udHJhc3R9O1xuICAgIGAsXG4gICAgZGVzY3JpcHRpb246IGNzc2BcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TGlnaHR9O1xuICAgIGAsXG4gICAgbWVkaWE6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgYCxcbiAgfTtcbn07XG5cbmNvbnN0IGdldEltZ1VybCA9ICh1cmxPcklkOiBzdHJpbmcpID0+IHtcbiAgaWYgKHVybE9ySWQuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgcmV0dXJuIHVybE9ySWQ7XG4gIH1cblxuICByZXR1cm4gJy9wdWJsaWMvaW1nL2VudGVycHJpc2UvaGlnaGxpZ2h0cy8nICsgdXJsT3JJZDtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBmZWF0dXJlVG9nZ2xlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgV2l0aEZlYXR1cmVUb2dnbGU6IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7IGZlYXR1cmVUb2dnbGUsIGNoaWxkcmVuIH0pID0+IHtcbiAgaWYgKGZlYXR1cmVUb2dnbGUgPT09IHRydWUpIHtcbiAgICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuIiwiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmlhbCgpIHtcbiAgY29uc3QgZXhwaXJ5ID0gY29uZmlnLmxpY2Vuc2VJbmZvPy50cmlhbEV4cGlyeTtcbiAgcmV0dXJuICEhKGV4cGlyeSAmJiBleHBpcnkgPiAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZ2hsaWdodFRyaWFsID0gKCkgPT4gaXNUcmlhbCgpICYmIGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cztcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IExlZ2FjeUZvcm1zLCBUb29sdGlwLCBJY29uLCBCdXR0b24sIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFNsaWRlRG93biB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvQW5pbWF0aW9ucy9TbGlkZURvd24nO1xuaW1wb3J0IHsgQ2xvc2VCdXR0b24gfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0Nsb3NlQnV0dG9uL0Nsb3NlQnV0dG9uJztcbmltcG9ydCBFbXB0eUxpc3RDVEEgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9FbXB0eUxpc3RDVEEvRW1wdHlMaXN0Q1RBJztcbmltcG9ydCB7IFVwZ3JhZGVCb3gsIFVwZ3JhZGVDb250ZW50LCBVcGdyYWRlQ29udGVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9VcGdyYWRlL1VwZ3JhZGVCb3gnO1xuaW1wb3J0IHsgaGlnaGxpZ2h0VHJpYWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvYWRtaW4vdXRpbHMnO1xuXG5pbXBvcnQgeyBTdG9yZVN0YXRlLCBUZWFtR3JvdXAgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IGFkZFRlYW1Hcm91cCwgbG9hZFRlYW1Hcm91cHMsIHJlbW92ZVRlYW1Hcm91cCB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRUZWFtR3JvdXBzIH0gZnJvbSAnLi9zdGF0ZS9zZWxlY3RvcnMnO1xuXG5jb25zdCB7IElucHV0IH0gPSBMZWdhY3lGb3JtcztcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgZ3JvdXBzOiBnZXRUZWFtR3JvdXBzKHN0YXRlLnRlYW0pLFxuICB9O1xufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvYWRUZWFtR3JvdXBzLFxuICBhZGRUZWFtR3JvdXAsXG4gIHJlbW92ZVRlYW1Hcm91cCxcbn07XG5cbmludGVyZmFjZSBPd25Qcm9wcyB7XG4gIGlzUmVhZE9ubHk6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGlzQWRkaW5nOiBib29sZWFuO1xuICBuZXdHcm91cElkOiBzdHJpbmc7XG59XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuXG5jb25zdCBoZWFkZXJUb29sdGlwID0gYFN5bmMgTERBUCBvciBPQXV0aCBncm91cHMgd2l0aCB5b3VyIEdyYWZhbmEgdGVhbXMuYDtcblxuZXhwb3J0IGNsYXNzIFRlYW1Hcm91cFN5bmMgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNBZGRpbmc6IGZhbHNlLCBuZXdHcm91cElkOiAnJyB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaFRlYW1Hcm91cHMoKTtcbiAgfVxuXG4gIGFzeW5jIGZldGNoVGVhbUdyb3VwcygpIHtcbiAgICBhd2FpdCB0aGlzLnByb3BzLmxvYWRUZWFtR3JvdXBzKCk7XG4gIH1cblxuICBvblRvZ2dsZUFkZGluZyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNBZGRpbmc6ICF0aGlzLnN0YXRlLmlzQWRkaW5nIH0pO1xuICB9O1xuXG4gIG9uTmV3R3JvdXBJZENoYW5nZWQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuZXdHcm91cElkOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgb25BZGRHcm91cCA9IChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLmFkZFRlYW1Hcm91cCh0aGlzLnN0YXRlLm5ld0dyb3VwSWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0FkZGluZzogZmFsc2UsIG5ld0dyb3VwSWQ6ICcnIH0pO1xuICB9O1xuXG4gIG9uUmVtb3ZlR3JvdXAgPSAoZ3JvdXA6IFRlYW1Hcm91cCkgPT4ge1xuICAgIHRoaXMucHJvcHMucmVtb3ZlVGVhbUdyb3VwKGdyb3VwLmdyb3VwSWQpO1xuICB9O1xuXG4gIGlzTmV3R3JvdXBWYWxpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5uZXdHcm91cElkLmxlbmd0aCA+IDE7XG4gIH1cblxuICByZW5kZXJHcm91cChncm91cDogVGVhbUdyb3VwKSB7XG4gICAgY29uc3QgeyBpc1JlYWRPbmx5IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8dHIga2V5PXtncm91cC5ncm91cElkfT5cbiAgICAgICAgPHRkPntncm91cC5ncm91cElkfTwvdGQ+XG4gICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzElJyB9fT5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub25SZW1vdmVHcm91cChncm91cCl9IGRpc2FibGVkPXtpc1JlYWRPbmx5fT5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ0aW1lc1wiIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0FkZGluZywgbmV3R3JvdXBJZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGdyb3VwcywgaXNSZWFkT25seSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2hpZ2hsaWdodFRyaWFsKCkgJiYgKFxuICAgICAgICAgIDxVcGdyYWRlQm94XG4gICAgICAgICAgICBmZWF0dXJlSWQ9eyd0ZWFtLXN5bmMnfVxuICAgICAgICAgICAgZXZlbnRWYXJpYW50PXsndHJpYWwnfVxuICAgICAgICAgICAgZmVhdHVyZU5hbWU9eyd0ZWFtIHN5bmMnfVxuICAgICAgICAgICAgdGV4dD17J0FkZCBhIGdyb3VwIHRvIGVuYWJsZSB0ZWFtIHN5bmMgZm9yIGZyZWUgZHVyaW5nIHlvdXIgdHJpYWwgb2YgR3JhZmFuYSBQcm8uJ31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhclwiPlxuICAgICAgICAgIHsoIWhpZ2hsaWdodFRyaWFsKCkgfHwgZ3JvdXBzLmxlbmd0aCA+IDApICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLXN1Yi1oZWFkaW5nXCI+RXh0ZXJuYWwgZ3JvdXAgc3luYzwvaDM+XG4gICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cImF1dG9cIiBjb250ZW50PXtoZWFkZXJUb29sdGlwfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJpY29uLS1oYXMtaG92ZXIgcGFnZS1zdWItaGVhZGluZy1pY29uXCIgbmFtZT1cInF1ZXN0aW9uLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJfX3NwYWNlclwiIC8+XG4gICAgICAgICAge2dyb3Vwcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIG9uQ2xpY2s9e3RoaXMub25Ub2dnbGVBZGRpbmd9IGRpc2FibGVkPXtpc1JlYWRPbmx5fT5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT1cInBsdXNcIiAvPiBBZGQgZ3JvdXBcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxTbGlkZURvd24gaW49e2lzQWRkaW5nfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YS1mb3JtXCI+XG4gICAgICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17dGhpcy5vblRvZ2dsZUFkZGluZ30gLz5cbiAgICAgICAgICAgIDxoNT5BZGQgRXh0ZXJuYWwgR3JvdXA8L2g1PlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIiBvblN1Ym1pdD17dGhpcy5vbkFkZEdyb3VwfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZi1mb3JtLWlucHV0IHdpZHRoLTMwXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdHcm91cElkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25OZXdHcm91cElkQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY249b3BzLG91PWdyb3VwcyxkYz1ncmFmYW5hLGRjPW9yZ1wiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNSZWFkT25seX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17aXNSZWFkT25seSB8fCAhdGhpcy5pc05ld0dyb3VwVmFsaWQoKX0+XG4gICAgICAgICAgICAgICAgICBBZGQgZ3JvdXBcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU2xpZGVEb3duPlxuXG4gICAgICAgIHtncm91cHMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgIWlzQWRkaW5nICYmXG4gICAgICAgICAgKGhpZ2hsaWdodFRyaWFsKCkgPyAoXG4gICAgICAgICAgICA8VGVhbVN5bmNVcGdyYWRlQ29udGVudCBhY3Rpb249e3sgb25DbGljazogdGhpcy5vblRvZ2dsZUFkZGluZywgdGV4dDogJ0FkZCBncm91cCcgfX0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEVtcHR5TGlzdENUQVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uVG9nZ2xlQWRkaW5nfVxuICAgICAgICAgICAgICBidXR0b25JY29uPVwidXNlcnMtYWx0XCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJUaGVyZSBhcmUgbm8gZXh0ZXJuYWwgZ3JvdXBzIHRvIHN5bmMgd2l0aFwiXG4gICAgICAgICAgICAgIGJ1dHRvblRpdGxlPVwiQWRkIGdyb3VwXCJcbiAgICAgICAgICAgICAgcHJvVGlwPXtoZWFkZXJUb29sdGlwfVxuICAgICAgICAgICAgICBwcm9UaXBMaW5rVGl0bGU9XCJMZWFybiBtb3JlXCJcbiAgICAgICAgICAgICAgcHJvVGlwTGluaz1cImh0dHBzOi8vZG9jcy5ncmFmYW5hLm9yZy9hdXRoL2VuaGFuY2VkX2xkYXAvXCJcbiAgICAgICAgICAgICAgcHJvVGlwVGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgYnV0dG9uRGlzYWJsZWQ9e2lzUmVhZE9ubHl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuXG4gICAgICAgIHtncm91cHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1saXN0LXRhYmxlXCI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlIGZpbHRlci10YWJsZS0taG92ZXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aD5FeHRlcm5hbCBHcm91cCBJRDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxJScgfX0gLz5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+e2dyb3Vwcy5tYXAoKGdyb3VwKSA9PiB0aGlzLnJlbmRlckdyb3VwKGdyb3VwKSl9PC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBUZWFtU3luY1VwZ3JhZGVDb250ZW50ID0gKHsgYWN0aW9uIH06IHsgYWN0aW9uPzogVXBncmFkZUNvbnRlbnRQcm9wc1snYWN0aW9uJ10gfSkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lMigpO1xuICByZXR1cm4gKFxuICAgIDxVcGdyYWRlQ29udGVudFxuICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICBsaXN0SXRlbXM9e1tcbiAgICAgICAgJ1N0b3AgbWFuYWdpbmcgdXNlciBhY2Nlc3MgaW4gdHdvIHBsYWNlcyAtIGFzc2lnbiB1c2VycyB0byBncm91cHMgaW4gU0FNTCwgTERBUCBvciBPYXV0aCwgYW5kIG1hbmFnZSBhY2Nlc3MgYXQgYSBUZWFtIGxldmVsIGluIEdyYWZhbmEnLFxuICAgICAgICAnVXBkYXRlIHVzZXJz4oCZIHBlcm1pc3Npb25zIGltbWVkaWF0ZWx5IHdoZW4geW91IGFkZCBvciByZW1vdmUgdGhlbSBmcm9tIGFuIExEQVAgZ3JvdXAsIHdpdGggbm8gbmVlZCBmb3IgdGhlbSB0byBzaWduIG91dCBhbmQgYmFjayBpbicsXG4gICAgICBdfVxuICAgICAgaW1hZ2U9e2B0ZWFtLXN5bmMtJHt0aGVtZS5pc0xpZ2h0ID8gJ2xpZ2h0JyA6ICdkYXJrJ30ucG5nYH1cbiAgICAgIGZlYXR1cmVOYW1lPXsndGVhbSBzeW5jJ31cbiAgICAgIGZlYXR1cmVVcmw9eydodHRwczovL2dyYWZhbmEuY29tL2RvY3MvZ3JhZmFuYS9sYXRlc3QvZW50ZXJwcmlzZS90ZWFtLXN5bmMnfVxuICAgICAgZGVzY3JpcHRpb249e1xuICAgICAgICAnVGVhbSBTeW5jIG1ha2VzIGl0IGVhc2llciBmb3IgeW91IHRvIG1hbmFnZSB1c2Vyc+KAmSBhY2Nlc3MgaW4gR3JhZmFuYSwgYnkgaW1tZWRpYXRlbHkgdXBkYXRpbmcgZWFjaCB1c2Vy4oCZcyBHcmFmYW5hIHRlYW1zIGFuZCBwZXJtaXNzaW9ucyBiYXNlZCBvbiB0aGVpciBzaW5nbGUgc2lnbi1vbiBncm91cCBtZW1iZXJzaGlwLCBpbnN0ZWFkIG9mIHdoZW4gdXNlcnMgc2lnbiBpbi4nXG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShUZWFtR3JvdXBTeW5jKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgTGVnYWN5Rm9ybXMsIERlbGV0ZUJ1dHRvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFRhZ0JhZGdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9UYWdGaWx0ZXIvVGFnQmFkZ2UnO1xuaW1wb3J0IHsgV2l0aEZlYXR1cmVUb2dnbGUgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1dpdGhGZWF0dXJlVG9nZ2xlJztcbmltcG9ydCB7IFRlYW1NZW1iZXIsIHRlYW1zUGVybWlzc2lvbkxldmVscywgVGVhbVBlcm1pc3Npb25MZXZlbCB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IHVwZGF0ZVRlYW1NZW1iZXIsIHJlbW92ZVRlYW1NZW1iZXIgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuXG5jb25zdCB7IFNlbGVjdCB9ID0gTGVnYWN5Rm9ybXM7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgcmVtb3ZlVGVhbU1lbWJlcixcbiAgdXBkYXRlVGVhbU1lbWJlcixcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuaW50ZXJmYWNlIE93blByb3BzIHtcbiAgbWVtYmVyOiBUZWFtTWVtYmVyO1xuICBzeW5jRW5hYmxlZDogYm9vbGVhbjtcbiAgZWRpdG9yc0NhbkFkbWluOiBib29sZWFuO1xuICBzaWduZWRJblVzZXJJc1RlYW1BZG1pbjogYm9vbGVhbjtcbn1cbmV4cG9ydCB0eXBlIFByb3BzID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj4gJiBPd25Qcm9wcztcblxuZXhwb3J0IGNsYXNzIFRlYW1NZW1iZXJSb3cgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnJlbmRlckxhYmVscyA9IHRoaXMucmVuZGVyTGFiZWxzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW5kZXJQZXJtaXNzaW9ucyA9IHRoaXMucmVuZGVyUGVybWlzc2lvbnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uUmVtb3ZlTWVtYmVyKG1lbWJlcjogVGVhbU1lbWJlcikge1xuICAgIHRoaXMucHJvcHMucmVtb3ZlVGVhbU1lbWJlcihtZW1iZXIudXNlcklkKTtcbiAgfVxuXG4gIG9uUGVybWlzc2lvbkNoYW5nZSA9IChpdGVtOiBTZWxlY3RhYmxlVmFsdWU8VGVhbVBlcm1pc3Npb25MZXZlbD4sIG1lbWJlcjogVGVhbU1lbWJlcikgPT4ge1xuICAgIGNvbnN0IHBlcm1pc3Npb24gPSBpdGVtLnZhbHVlO1xuICAgIGNvbnN0IHVwZGF0ZWRUZWFtTWVtYmVyOiBUZWFtTWVtYmVyID0ge1xuICAgICAgLi4ubWVtYmVyLFxuICAgICAgcGVybWlzc2lvbjogcGVybWlzc2lvbiBhcyBudW1iZXIsXG4gICAgfTtcblxuICAgIHRoaXMucHJvcHMudXBkYXRlVGVhbU1lbWJlcih1cGRhdGVkVGVhbU1lbWJlcik7XG4gIH07XG5cbiAgcmVuZGVyUGVybWlzc2lvbnMobWVtYmVyOiBUZWFtTWVtYmVyKSB7XG4gICAgY29uc3QgeyBlZGl0b3JzQ2FuQWRtaW4sIHNpZ25lZEluVXNlcklzVGVhbUFkbWluIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbHVlID0gdGVhbXNQZXJtaXNzaW9uTGV2ZWxzLmZpbmQoKGRwKSA9PiBkcC52YWx1ZSA9PT0gbWVtYmVyLnBlcm1pc3Npb24pITtcblxuICAgIHJldHVybiAoXG4gICAgICA8V2l0aEZlYXR1cmVUb2dnbGUgZmVhdHVyZVRvZ2dsZT17ZWRpdG9yc0NhbkFkbWlufT5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndpZHRoLTUgdGVhbS1wZXJtaXNzaW9uc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAge3NpZ25lZEluVXNlcklzVGVhbUFkbWluICYmIChcbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGlzU2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17dGVhbXNQZXJtaXNzaW9uTGV2ZWxzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaXRlbSkgPT4gdGhpcy5vblBlcm1pc3Npb25DaGFuZ2UoaXRlbSwgbWVtYmVyKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZi1mb3JtLXNlbGVjdC1ib3hfX2NvbnRyb2wtLW1lbnUtcmlnaHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IXNpZ25lZEluVXNlcklzVGVhbUFkbWluICYmIDxzcGFuPnt2YWx1ZS5sYWJlbH08L3NwYW4+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgPC9XaXRoRmVhdHVyZVRvZ2dsZT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTGFiZWxzKGxhYmVsczogc3RyaW5nW10pIHtcbiAgICBpZiAoIWxhYmVscykge1xuICAgICAgcmV0dXJuIDx0ZCAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRkPlxuICAgICAgICB7bGFiZWxzLm1hcCgobGFiZWwpID0+IChcbiAgICAgICAgICA8VGFnQmFkZ2Uga2V5PXtsYWJlbH0gbGFiZWw9e2xhYmVsfSByZW1vdmVJY29uPXtmYWxzZX0gY291bnQ9ezB9IG9uQ2xpY2s9eygpID0+IHt9fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdGQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1lbWJlciwgc3luY0VuYWJsZWQsIHNpZ25lZEluVXNlcklzVGVhbUFkbWluIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8dHIga2V5PXttZW1iZXIudXNlcklkfT5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndpZHRoLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtgQXZhdGFyIGZvciB0ZWFtIG1lbWJlciBcIiR7bWVtYmVyLm5hbWV9XCJgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlX19hdmF0YXJcIlxuICAgICAgICAgICAgc3JjPXttZW1iZXIuYXZhdGFyVXJsfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD57bWVtYmVyLmxvZ2lufTwvdGQ+XG4gICAgICAgIDx0ZD57bWVtYmVyLmVtYWlsfTwvdGQ+XG4gICAgICAgIDx0ZD57bWVtYmVyLm5hbWV9PC90ZD5cbiAgICAgICAge3RoaXMucmVuZGVyUGVybWlzc2lvbnMobWVtYmVyKX1cbiAgICAgICAge3N5bmNFbmFibGVkICYmIHRoaXMucmVuZGVyTGFiZWxzKG1lbWJlci5sYWJlbHMpfVxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICAgIDxEZWxldGVCdXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSZW1vdmUgdGVhbSBtZW1iZXJcIlxuICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXshc2lnbmVkSW5Vc2VySXNUZWFtQWRtaW59XG4gICAgICAgICAgICBvbkNvbmZpcm09eygpID0+IHRoaXMub25SZW1vdmVNZW1iZXIobWVtYmVyKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihUZWFtTWVtYmVyUm93KTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWx0ZXJJbnB1dCwgTGFiZWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBTbGlkZURvd24gfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0FuaW1hdGlvbnMvU2xpZGVEb3duJztcbmltcG9ydCB7IENsb3NlQnV0dG9uIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9DbG9zZUJ1dHRvbi9DbG9zZUJ1dHRvbic7XG5pbXBvcnQgeyBVc2VyUGlja2VyIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9TZWxlY3QvVXNlclBpY2tlcic7XG5pbXBvcnQgeyBUYWdCYWRnZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVGFnRmlsdGVyL1RhZ0JhZGdlJztcbmltcG9ydCB7IFdpdGhGZWF0dXJlVG9nZ2xlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9XaXRoRmVhdHVyZVRvZ2dsZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IFRlYW1NZW1iZXIsIE9yZ1VzZXIgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgVGVhbU1lbWJlclJvdyBmcm9tICcuL1RlYW1NZW1iZXJSb3cnO1xuaW1wb3J0IHsgYWRkVGVhbU1lbWJlciB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBzZXRTZWFyY2hNZW1iZXJRdWVyeSB9IGZyb20gJy4vc3RhdGUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgZ2V0U2VhcmNoTWVtYmVyUXVlcnksIGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluIH0gZnJvbSAnLi9zdGF0ZS9zZWxlY3RvcnMnO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IGFueSkge1xuICByZXR1cm4ge1xuICAgIHNlYXJjaE1lbWJlclF1ZXJ5OiBnZXRTZWFyY2hNZW1iZXJRdWVyeShzdGF0ZS50ZWFtKSxcbiAgICBlZGl0b3JzQ2FuQWRtaW46IGNvbmZpZy5lZGl0b3JzQ2FuQWRtaW4sIC8vIHRoaXMgbWFrZXMgdGhlIGZlYXR1cmUgdG9nZ2xlIG1vY2thYmxlL2NvbnRyb2xsYWJsZSBmcm9tIHRlc3RzLFxuICAgIHNpZ25lZEluVXNlcjogY29udGV4dFNydi51c2VyLCAvLyB0aGlzIG1ha2VzIHRoZSBmZWF0dXJlIHRvZ2dsZSBtb2NrYWJsZS9jb250cm9sbGFibGUgZnJvbSB0ZXN0cyxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBhZGRUZWFtTWVtYmVyLFxuICBzZXRTZWFyY2hNZW1iZXJRdWVyeSxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMge1xuICBtZW1iZXJzOiBUZWFtTWVtYmVyW107XG4gIHN5bmNFbmFibGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+ICYgT3duUHJvcHM7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBpc0FkZGluZzogYm9vbGVhbjtcbiAgbmV3VGVhbU1lbWJlcj86IFNlbGVjdGFibGVWYWx1ZTxPcmdVc2VyWyd1c2VySWQnXT4gfCBudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgVGVhbU1lbWJlcnMgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaXNBZGRpbmc6IGZhbHNlLCBuZXdUZWFtTWVtYmVyOiBudWxsIH07XG4gIH1cblxuICBvblNlYXJjaFF1ZXJ5Q2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICB0aGlzLnByb3BzLnNldFNlYXJjaE1lbWJlclF1ZXJ5KHZhbHVlKTtcbiAgfTtcblxuICBvblRvZ2dsZUFkZGluZyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNBZGRpbmc6ICF0aGlzLnN0YXRlLmlzQWRkaW5nIH0pO1xuICB9O1xuXG4gIG9uVXNlclNlbGVjdGVkID0gKHVzZXI6IFNlbGVjdGFibGVWYWx1ZTxPcmdVc2VyWyd1c2VySWQnXT4pID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbmV3VGVhbU1lbWJlcjogdXNlciB9KTtcbiAgfTtcblxuICBvbkFkZFVzZXJUb1RlYW0gPSBhc3luYyAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5hZGRUZWFtTWVtYmVyKHRoaXMuc3RhdGUubmV3VGVhbU1lbWJlciEuaWQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuZXdUZWFtTWVtYmVyOiBudWxsIH0pO1xuICB9O1xuXG4gIHJlbmRlckxhYmVscyhsYWJlbHM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKCFsYWJlbHMpIHtcbiAgICAgIHJldHVybiA8dGQgLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ZD5cbiAgICAgICAge2xhYmVscy5tYXAoKGxhYmVsKSA9PiAoXG4gICAgICAgICAgPFRhZ0JhZGdlIGtleT17bGFiZWx9IGxhYmVsPXtsYWJlbH0gcmVtb3ZlSWNvbj17ZmFsc2V9IGNvdW50PXswfSBvbkNsaWNrPXsoKSA9PiB7fX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3RkPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0FkZGluZyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHNlYXJjaE1lbWJlclF1ZXJ5LCBtZW1iZXJzLCBzeW5jRW5hYmxlZCwgZWRpdG9yc0NhbkFkbWluLCBzaWduZWRJblVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNUZWFtQWRtaW4gPSBpc1NpZ25lZEluVXNlclRlYW1BZG1pbih7IG1lbWJlcnMsIGVkaXRvcnNDYW5BZG1pbiwgc2lnbmVkSW5Vc2VyIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cbiAgICAgICAgICAgIDxGaWx0ZXJJbnB1dCBwbGFjZWhvbGRlcj1cIlNlYXJjaCBtZW1iZXJzXCIgdmFsdWU9e3NlYXJjaE1lbWJlclF1ZXJ5fSBvbkNoYW5nZT17dGhpcy5vblNlYXJjaFF1ZXJ5Q2hhbmdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiIG9uQ2xpY2s9e3RoaXMub25Ub2dnbGVBZGRpbmd9IGRpc2FibGVkPXtpc0FkZGluZyB8fCAhaXNUZWFtQWRtaW59PlxuICAgICAgICAgICAgQWRkIG1lbWJlclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8U2xpZGVEb3duIGluPXtpc0FkZGluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGEtZm9ybVwiPlxuICAgICAgICAgICAgPENsb3NlQnV0dG9uIGFyaWEtbGFiZWw9XCJDbG9zZSAnQWRkIHRlYW0gbWVtYmVyJyBkaWFsb2d1ZVwiIG9uQ2xpY2s9e3RoaXMub25Ub2dnbGVBZGRpbmd9IC8+XG4gICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cInVzZXItcGlja2VyXCI+QWRkIHRlYW0gbWVtYmVyPC9MYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgPFVzZXJQaWNrZXIgaW5wdXRJZD1cInVzZXItcGlja2VyXCIgb25TZWxlY3RlZD17dGhpcy5vblVzZXJTZWxlY3RlZH0gY2xhc3NOYW1lPVwibWluLXdpZHRoLTMwXCIgLz5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUubmV3VGVhbU1lbWJlciAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5vbkFkZFVzZXJUb1RlYW19PlxuICAgICAgICAgICAgICAgICAgQWRkIHRvIHRlYW1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1NsaWRlRG93bj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWxpc3QtdGFibGVcIj5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlIGZpbHRlci10YWJsZS0taG92ZXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCAvPlxuICAgICAgICAgICAgICAgIDx0aD5Mb2dpbjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgPFdpdGhGZWF0dXJlVG9nZ2xlIGZlYXR1cmVUb2dnbGU9e2VkaXRvcnNDYW5BZG1pbn0+XG4gICAgICAgICAgICAgICAgICA8dGg+UGVybWlzc2lvbjwvdGg+XG4gICAgICAgICAgICAgICAgPC9XaXRoRmVhdHVyZVRvZ2dsZT5cbiAgICAgICAgICAgICAgICB7c3luY0VuYWJsZWQgJiYgPHRoIC8+fVxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB3aWR0aDogJzElJyB9fSAvPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge21lbWJlcnMgJiZcbiAgICAgICAgICAgICAgICBtZW1iZXJzLm1hcCgobWVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8VGVhbU1lbWJlclJvd1xuICAgICAgICAgICAgICAgICAgICBrZXk9e21lbWJlci51c2VySWR9XG4gICAgICAgICAgICAgICAgICAgIG1lbWJlcj17bWVtYmVyfVxuICAgICAgICAgICAgICAgICAgICBzeW5jRW5hYmxlZD17c3luY0VuYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgIGVkaXRvcnNDYW5BZG1pbj17ZWRpdG9yc0NhbkFkbWlufVxuICAgICAgICAgICAgICAgICAgICBzaWduZWRJblVzZXJJc1RlYW1BZG1pbj17aXNUZWFtQWRtaW59XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKFRlYW1NZW1iZXJzKTtcbiIsImltcG9ydCB7IGluY2x1ZGVzIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgVGhlbWVhYmxlMiwgd2l0aFRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IFVwZ3JhZGVCb3ggfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1VwZ3JhZGUvVXBncmFkZUJveCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TmF2TW9kZWwgfSBmcm9tICdhcHAvY29yZS9zZWxlY3RvcnMvbmF2TW9kZWwnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgVGVhbUdyb3VwU3luYywgeyBUZWFtU3luY1VwZ3JhZGVDb250ZW50IH0gZnJvbSAnLi9UZWFtR3JvdXBTeW5jJztcbmltcG9ydCBUZWFtTWVtYmVycyBmcm9tICcuL1RlYW1NZW1iZXJzJztcbmltcG9ydCBUZWFtUGVybWlzc2lvbnMgZnJvbSAnLi9UZWFtUGVybWlzc2lvbnMnO1xuaW1wb3J0IFRlYW1TZXR0aW5ncyBmcm9tICcuL1RlYW1TZXR0aW5ncyc7XG5pbXBvcnQgeyBsb2FkVGVhbSwgbG9hZFRlYW1NZW1iZXJzIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldFRlYW1Mb2FkaW5nTmF2IH0gZnJvbSAnLi9zdGF0ZS9uYXZNb2RlbCc7XG5pbXBvcnQgeyBnZXRUZWFtLCBnZXRUZWFtTWVtYmVycywgaXNTaWduZWRJblVzZXJUZWFtQWRtaW4gfSBmcm9tICcuL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmludGVyZmFjZSBUZWFtUGFnZVJvdXRlUGFyYW1zIHtcbiAgaWQ6IHN0cmluZztcbiAgcGFnZTogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPFRlYW1QYWdlUm91dGVQYXJhbXM+LCBUaGVtZWFibGUyIHt9XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGlzU3luY0VuYWJsZWQ6IGJvb2xlYW47XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbn1cblxuZW51bSBQYWdlVHlwZXMge1xuICBNZW1iZXJzID0gJ21lbWJlcnMnLFxuICBTZXR0aW5ncyA9ICdzZXR0aW5ncycsXG4gIEdyb3VwU3luYyA9ICdncm91cHN5bmMnLFxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFN0b3JlU3RhdGUsIHByb3BzOiBPd25Qcm9wcykge1xuICBjb25zdCB0ZWFtSWQgPSBwYXJzZUludChwcm9wcy5tYXRjaC5wYXJhbXMuaWQsIDEwKTtcbiAgY29uc3QgdGVhbSA9IGdldFRlYW0oc3RhdGUudGVhbSwgdGVhbUlkKTtcbiAgbGV0IGRlZmF1bHRQYWdlID0gJ21lbWJlcnMnO1xuICBpZiAoY29udGV4dFNydi5hY2Nlc3NDb250cm9sRW5hYmxlZCgpKSB7XG4gICAgLy8gV2l0aCBSQkFDIHRoZSBzZXR0aW5ncyBwYWdlIHdpbGwgYWx3YXlzIGJlIGF2YWlsYWJsZVxuICAgIGlmICghdGVhbSB8fCAhY29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkLCB0ZWFtKSkge1xuICAgICAgZGVmYXVsdFBhZ2UgPSAnc2V0dGluZ3MnO1xuICAgIH1cbiAgfVxuICBjb25zdCBwYWdlTmFtZSA9IHByb3BzLm1hdGNoLnBhcmFtcy5wYWdlID8/IGRlZmF1bHRQYWdlO1xuICBjb25zdCB0ZWFtTG9hZGluZ05hdiA9IGdldFRlYW1Mb2FkaW5nTmF2KHBhZ2VOYW1lIGFzIHN0cmluZyk7XG4gIGNvbnN0IG5hdk1vZGVsID0gZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsIGB0ZWFtLSR7cGFnZU5hbWV9LSR7dGVhbUlkfWAsIHRlYW1Mb2FkaW5nTmF2KTtcbiAgY29uc3QgbWVtYmVycyA9IGdldFRlYW1NZW1iZXJzKHN0YXRlLnRlYW0pO1xuXG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWwsXG4gICAgdGVhbUlkOiB0ZWFtSWQsXG4gICAgcGFnZU5hbWU6IHBhZ2VOYW1lLFxuICAgIHRlYW0sXG4gICAgbWVtYmVycyxcbiAgICBlZGl0b3JzQ2FuQWRtaW46IGNvbmZpZy5lZGl0b3JzQ2FuQWRtaW4sIC8vIHRoaXMgbWFrZXMgdGhlIGZlYXR1cmUgdG9nZ2xlIG1vY2thYmxlL2NvbnRyb2xsYWJsZSBmcm9tIHRlc3RzLFxuICAgIHNpZ25lZEluVXNlcjogY29udGV4dFNydi51c2VyLCAvLyB0aGlzIG1ha2VzIHRoZSBmZWF0dXJlIHRvZ2dsZSBtb2NrYWJsZS9jb250cm9sbGFibGUgZnJvbSB0ZXN0cyxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBsb2FkVGVhbSxcbiAgbG9hZFRlYW1NZW1iZXJzLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGNsYXNzIFRlYW1QYWdlcyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgICAgaXNTeW5jRW5hYmxlZDogZmVhdHVyZUVuYWJsZWQoJ3RlYW1zeW5jJyksXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF3YWl0IHRoaXMuZmV0Y2hUZWFtKCk7XG4gIH1cblxuICBhc3luYyBmZXRjaFRlYW0oKSB7XG4gICAgY29uc3QgeyBsb2FkVGVhbSwgdGVhbUlkIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IHRydWUgfSk7XG4gICAgY29uc3QgdGVhbSA9IGF3YWl0IGxvYWRUZWFtKHRlYW1JZCk7XG4gICAgLy8gV2l0aCBhY2Nlc3Njb250cm9sLCB0aGUgVGVhbVBlcm1pc3Npb25zIHdpbGwgZmV0Y2ggdGVhbSBtZW1iZXJzXG4gICAgaWYgKCFjb250ZXh0U3J2LmFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgIGF3YWl0IHRoaXMucHJvcHMubG9hZFRlYW1NZW1iZXJzKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0xvYWRpbmc6IGZhbHNlIH0pO1xuICAgIHJldHVybiB0ZWFtO1xuICB9XG5cbiAgZ2V0Q3VycmVudFBhZ2UoKSB7XG4gICAgY29uc3QgcGFnZXMgPSBbJ21lbWJlcnMnLCAnc2V0dGluZ3MnLCAnZ3JvdXBzeW5jJ107XG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSB0aGlzLnByb3BzLnBhZ2VOYW1lO1xuICAgIHJldHVybiBpbmNsdWRlcyhwYWdlcywgY3VycmVudFBhZ2UpID8gY3VycmVudFBhZ2UgOiBwYWdlc1swXTtcbiAgfVxuXG4gIHRleHRzQXJlRXF1YWwgPSAodGV4dDE6IHN0cmluZywgdGV4dDI6IHN0cmluZykgPT4ge1xuICAgIGlmICghdGV4dDEgJiYgIXRleHQyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIXRleHQxIHx8ICF0ZXh0Mikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0MS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSB0ZXh0Mi50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIGhpZGVUYWJzRnJvbU5vblRlYW1BZG1pbiA9IChuYXZNb2RlbDogTmF2TW9kZWwsIGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKGNvbnRleHRTcnYuYWNjZXNzQ29udHJvbEVuYWJsZWQoKSkge1xuICAgICAgcmV0dXJuIG5hdk1vZGVsO1xuICAgIH1cblxuICAgIGlmICghaXNTaWduZWRJblVzZXJUZWFtQWRtaW4gJiYgbmF2TW9kZWwubWFpbiAmJiBuYXZNb2RlbC5tYWluLmNoaWxkcmVuKSB7XG4gICAgICBuYXZNb2RlbC5tYWluLmNoaWxkcmVuXG4gICAgICAgIC5maWx0ZXIoKG5hdkl0ZW0pID0+ICF0aGlzLnRleHRzQXJlRXF1YWwobmF2SXRlbS50ZXh0LCBQYWdlVHlwZXMuTWVtYmVycykpXG4gICAgICAgIC5tYXAoKG5hdkl0ZW0pID0+IHtcbiAgICAgICAgICBuYXZJdGVtLmhpZGVGcm9tVGFicyA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuYXZNb2RlbDtcbiAgfTtcblxuICByZW5kZXJQYWdlKGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluOiBib29sZWFuKTogUmVhY3QuUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IGlzU3luY0VuYWJsZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBtZW1iZXJzLCB0ZWFtIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gdGhpcy5nZXRDdXJyZW50UGFnZSgpO1xuXG4gICAgY29uc3QgY2FuUmVhZFRlYW0gPSBjb250ZXh0U3J2Lmhhc0FjY2Vzc0luTWV0YWRhdGEoXG4gICAgICBBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUmVhZCxcbiAgICAgIHRlYW0hLFxuICAgICAgaXNTaWduZWRJblVzZXJUZWFtQWRtaW5cbiAgICApO1xuICAgIGNvbnN0IGNhblJlYWRUZWFtUGVybWlzc2lvbnMgPSBjb250ZXh0U3J2Lmhhc0FjY2Vzc0luTWV0YWRhdGEoXG4gICAgICBBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkLFxuICAgICAgdGVhbSEsXG4gICAgICBpc1NpZ25lZEluVXNlclRlYW1BZG1pblxuICAgICk7XG4gICAgY29uc3QgY2FuV3JpdGVUZWFtUGVybWlzc2lvbnMgPSBjb250ZXh0U3J2Lmhhc0FjY2Vzc0luTWV0YWRhdGEoXG4gICAgICBBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUGVybWlzc2lvbnNXcml0ZSxcbiAgICAgIHRlYW0hLFxuICAgICAgaXNTaWduZWRJblVzZXJUZWFtQWRtaW5cbiAgICApO1xuXG4gICAgc3dpdGNoIChjdXJyZW50UGFnZSkge1xuICAgICAgY2FzZSBQYWdlVHlwZXMuTWVtYmVyczpcbiAgICAgICAgaWYgKGNvbnRleHRTcnYuYWNjZXNzQ29udHJvbEVuYWJsZWQoKSkge1xuICAgICAgICAgIHJldHVybiA8VGVhbVBlcm1pc3Npb25zIHRlYW09e3RlYW0hfSAvPjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gPFRlYW1NZW1iZXJzIHN5bmNFbmFibGVkPXtpc1N5bmNFbmFibGVkfSBtZW1iZXJzPXttZW1iZXJzfSAvPjtcbiAgICAgICAgfVxuICAgICAgY2FzZSBQYWdlVHlwZXMuU2V0dGluZ3M6XG4gICAgICAgIHJldHVybiBjYW5SZWFkVGVhbSAmJiA8VGVhbVNldHRpbmdzIHRlYW09e3RlYW0hfSAvPjtcbiAgICAgIGNhc2UgUGFnZVR5cGVzLkdyb3VwU3luYzpcbiAgICAgICAgaWYgKGlzU3luY0VuYWJsZWQpIHtcbiAgICAgICAgICBpZiAoY2FuUmVhZFRlYW1QZXJtaXNzaW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIDxUZWFtR3JvdXBTeW5jIGlzUmVhZE9ubHk9eyFjYW5Xcml0ZVRlYW1QZXJtaXNzaW9uc30gLz47XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8VXBncmFkZUJveCBmZWF0dXJlTmFtZT17J3RlYW0gc3luYyd9IGZlYXR1cmVJZD17J3RlYW0tc3luYyd9IC8+XG4gICAgICAgICAgICAgIDxUZWFtU3luY1VwZ3JhZGVDb250ZW50IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0ZWFtLCBuYXZNb2RlbCwgbWVtYmVycywgZWRpdG9yc0NhbkFkbWluLCBzaWduZWRJblVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgaXNUZWFtQWRtaW4gPSBpc1NpZ25lZEluVXNlclRlYW1BZG1pbih7IG1lbWJlcnMsIGVkaXRvcnNDYW5BZG1pbiwgc2lnbmVkSW5Vc2VyIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXt0aGlzLmhpZGVUYWJzRnJvbU5vblRlYW1BZG1pbihuYXZNb2RlbCwgaXNUZWFtQWRtaW4pfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXt0aGlzLnN0YXRlLmlzTG9hZGluZ30+XG4gICAgICAgICAge3RlYW0gJiYgT2JqZWN0LmtleXModGVhbSkubGVuZ3RoICE9PSAwICYmIHRoaXMucmVuZGVyUGFnZShpc1RlYW1BZG1pbil9XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Rvcih3aXRoVGhlbWUyKFRlYW1QYWdlcykpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGVybWlzc2lvbnMgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL0FjY2Vzc0NvbnRyb2wnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcblxuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiwgVGVhbSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxudHlwZSBUZWFtUGVybWlzc2lvbnNQcm9wcyA9IHtcbiAgdGVhbTogVGVhbTtcbn07XG5cbi8vIFRlYW1QZXJtaXNzaW9ucyBjb21wb25lbnQgcmVwbGFjZXMgVGVhbU1lbWJlcnMgY29tcG9uZW50IHdoZW4gdGhlIGFjY2Vzc2NvbnRyb2wgZmVhdHVyZSBmbGFnIGlzIHNldFxuY29uc3QgVGVhbVBlcm1pc3Npb25zID0gKHByb3BzOiBUZWFtUGVybWlzc2lvbnNQcm9wcykgPT4ge1xuICBjb25zdCBjYW5TZXRQZXJtaXNzaW9ucyA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoXG4gICAgQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1Blcm1pc3Npb25zV3JpdGUsXG4gICAgcHJvcHMudGVhbVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBlcm1pc3Npb25zXG4gICAgICB0aXRsZT1cIk1lbWJlcnNcIlxuICAgICAgYWRkUGVybWlzc2lvblRpdGxlPVwiQWRkIG1lbWJlclwiXG4gICAgICBidXR0b25MYWJlbD1cIkFkZCBtZW1iZXJcIlxuICAgICAgcmVzb3VyY2U9XCJ0ZWFtc1wiXG4gICAgICByZXNvdXJjZUlkPXtwcm9wcy50ZWFtLmlkfVxuICAgICAgY2FuU2V0UGVybWlzc2lvbnM9e2NhblNldFBlcm1pc3Npb25zfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZWFtUGVybWlzc2lvbnM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgSW5wdXQsIEZpZWxkLCBGb3JtLCBCdXR0b24sIEZpZWxkU2V0LCBWZXJ0aWNhbEdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgU2hhcmVkUHJlZmVyZW5jZXMgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1NoYXJlZFByZWZlcmVuY2VzL1NoYXJlZFByZWZlcmVuY2VzJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFRlYW0gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyB1cGRhdGVUZWFtIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICB1cGRhdGVUZWFtLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMge1xuICB0ZWFtOiBUZWFtO1xufVxuZXhwb3J0IHR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPiAmIE93blByb3BzO1xuXG5leHBvcnQgY29uc3QgVGVhbVNldHRpbmdzOiBGQzxQcm9wcz4gPSAoeyB0ZWFtLCB1cGRhdGVUZWFtIH0pID0+IHtcbiAgY29uc3QgY2FuV3JpdGVUZWFtU2V0dGluZ3MgPSBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNXcml0ZSwgdGVhbSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VmVydGljYWxHcm91cD5cbiAgICAgIDxGaWVsZFNldCBsYWJlbD1cIlRlYW0gc2V0dGluZ3NcIj5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBkZWZhdWx0VmFsdWVzPXt7IC4uLnRlYW0gfX1cbiAgICAgICAgICBvblN1Ym1pdD17KGZvcm1UZWFtOiBUZWFtKSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVUZWFtKGZvcm1UZWFtLm5hbWUsIGZvcm1UZWFtLmVtYWlsKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGRpc2FibGVkPXshY2FuV3JpdGVUZWFtU2V0dGluZ3N9XG4gICAgICAgID5cbiAgICAgICAgICB7KHsgcmVnaXN0ZXIgfSkgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPVwiTmFtZVwiIGRpc2FibGVkPXshY2FuV3JpdGVUZWFtU2V0dGluZ3N9PlxuICAgICAgICAgICAgICAgIDxJbnB1dCB7Li4ucmVnaXN0ZXIoJ25hbWUnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfSBpZD1cIm5hbWUtaW5wdXRcIiAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuXG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyBvcHRpb25hbCBhbmQgaXMgcHJpbWFyaWx5IHVzZWQgdG8gc2V0IHRoZSB0ZWFtIHByb2ZpbGUgYXZhdGFyICh2aWEgZ3JhdmF0YXIgc2VydmljZSkuXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWNhbldyaXRlVGVhbVNldHRpbmdzfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0IHsuLi5yZWdpc3RlcignZW1haWwnKX0gcGxhY2Vob2xkZXI9XCJ0ZWFtQGVtYWlsLmNvbVwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWwtaW5wdXRcIiAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17IWNhbldyaXRlVGVhbVNldHRpbmdzfT5cbiAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0ZpZWxkU2V0PlxuICAgICAgPFNoYXJlZFByZWZlcmVuY2VzIHJlc291cmNlVXJpPXtgdGVhbXMvJHt0ZWFtLmlkfWB9IGRpc2FibGVkPXshY2FuV3JpdGVUZWFtU2V0dGluZ3N9IC8+XG4gICAgPC9WZXJ0aWNhbEdyb3VwPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKFRlYW1TZXR0aW5ncyk7XG4iLCJpbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB1cGRhdGVOYXZJbmRleCB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0gfSBmcm9tICdhcHAvY29yZS91dGlscy9hY2Nlc3NDb250cm9sJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFRlYW1NZW1iZXIsIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgYnVpbGROYXZNb2RlbCB9IGZyb20gJy4vbmF2TW9kZWwnO1xuaW1wb3J0IHsgdGVhbUdyb3Vwc0xvYWRlZCwgdGVhbUxvYWRlZCwgdGVhbU1lbWJlcnNMb2FkZWQsIHRlYW1zTG9hZGVkIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGVhbXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgLy8gRWFybHkgcmV0dXJuIGlmIHRoZSB1c2VyIGNhbm5vdCBsaXN0IHRlYW1zXG4gICAgaWYgKCFjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5BY3Rpb25UZWFtc1JlYWQpKSB7XG4gICAgICBkaXNwYXRjaCh0ZWFtc0xvYWRlZChbXSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChcbiAgICAgICcvYXBpL3RlYW1zL3NlYXJjaCcsXG4gICAgICBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSh7IHBlcnBhZ2U6IDEwMDAsIHBhZ2U6IDEgfSlcbiAgICApO1xuICAgIGRpc3BhdGNoKHRlYW1zTG9hZGVkKHJlc3BvbnNlLnRlYW1zKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGVhbShpZDogbnVtYmVyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL3RlYW1zLyR7aWR9YCwgYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0oKSk7XG4gICAgZGlzcGF0Y2godGVhbUxvYWRlZChyZXNwb25zZSkpO1xuICAgIGRpc3BhdGNoKHVwZGF0ZU5hdkluZGV4KGJ1aWxkTmF2TW9kZWwocmVzcG9uc2UpKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGVhbU1lbWJlcnMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IHRlYW0gPSBnZXRTdG9yZSgpLnRlYW0udGVhbTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoYC9hcGkvdGVhbXMvJHt0ZWFtLmlkfS9tZW1iZXJzYCk7XG4gICAgZGlzcGF0Y2godGVhbU1lbWJlcnNMb2FkZWQocmVzcG9uc2UpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRlYW1NZW1iZXIoaWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoYC9hcGkvdGVhbXMvJHt0ZWFtLmlkfS9tZW1iZXJzYCwgeyB1c2VySWQ6IGlkIH0pO1xuICAgIGRpc3BhdGNoKGxvYWRUZWFtTWVtYmVycygpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRlYW1NZW1iZXIoaWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS90ZWFtcy8ke3RlYW0uaWR9L21lbWJlcnMvJHtpZH1gKTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbU1lbWJlcnMoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUZWFtKG5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS90ZWFtcy8ke3RlYW0uaWR9YCwgeyBuYW1lLCBlbWFpbCB9KTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbSh0ZWFtLmlkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGVhbUdyb3VwcygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgdGVhbSA9IGdldFN0b3JlKCkudGVhbS50ZWFtO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldChgL2FwaS90ZWFtcy8ke3RlYW0uaWR9L2dyb3Vwc2ApO1xuICAgIGRpc3BhdGNoKHRlYW1Hcm91cHNMb2FkZWQocmVzcG9uc2UpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRlYW1Hcm91cChncm91cElkOiBzdHJpbmcpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgdGVhbSA9IGdldFN0b3JlKCkudGVhbS50ZWFtO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KGAvYXBpL3RlYW1zLyR7dGVhbS5pZH0vZ3JvdXBzYCwgeyBncm91cElkOiBncm91cElkIH0pO1xuICAgIGRpc3BhdGNoKGxvYWRUZWFtR3JvdXBzKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGVhbUdyb3VwKGdyb3VwSWQ6IHN0cmluZyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCB0ZWFtID0gZ2V0U3RvcmUoKS50ZWFtLnRlYW07XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS90ZWFtcy8ke3RlYW0uaWR9L2dyb3Vwcy8ke2VuY29kZVVSSUNvbXBvbmVudChncm91cElkKX1gKTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbUdyb3VwcygpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRlYW0oaWQ6IG51bWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoYC9hcGkvdGVhbXMvJHtpZH1gKTtcbiAgICAvLyBVcGRhdGUgdXNlcnMgcGVybWlzc2lvbnMgaW4gY2FzZSB0aGV5IGxvc3QgdGVhbXMucmVhZCB3aXRoIHRoZSBkZWxldGlvblxuICAgIGF3YWl0IGNvbnRleHRTcnYuZmV0Y2hVc2VyUGVybWlzc2lvbnMoKTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbXMoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUZWFtTWVtYmVyKG1lbWJlcjogVGVhbU1lbWJlcik6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvdGVhbXMvJHttZW1iZXIudGVhbUlkfS9tZW1iZXJzLyR7bWVtYmVyLnVzZXJJZH1gLCB7XG4gICAgICBwZXJtaXNzaW9uOiBtZW1iZXIucGVybWlzc2lvbixcbiAgICB9KTtcbiAgICBkaXNwYXRjaChsb2FkVGVhbU1lbWJlcnMoKSk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBOYXZNb2RlbEl0ZW0sIE5hdk1vZGVsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUHJvQmFkZ2UgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1VwZ3JhZGUvUHJvQmFkZ2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IGhpZ2hsaWdodFRyaWFsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FkbWluL3V0aWxzJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24sIFRlYW0sIFRlYW1QZXJtaXNzaW9uTGV2ZWwgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5jb25zdCBsb2FkaW5nVGVhbSA9IHtcbiAgYXZhdGFyVXJsOiAncHVibGljL2ltZy91c2VyX3Byb2ZpbGUucG5nJyxcbiAgaWQ6IDEsXG4gIG5hbWU6ICdMb2FkaW5nJyxcbiAgZW1haWw6ICdsb2FkaW5nJyxcbiAgbWVtYmVyQ291bnQ6IDAsXG4gIHBlcm1pc3Npb246IFRlYW1QZXJtaXNzaW9uTGV2ZWwuTWVtYmVyLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTmF2TW9kZWwodGVhbTogVGVhbSk6IE5hdk1vZGVsSXRlbSB7XG4gIGNvbnN0IG5hdk1vZGVsOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgaW1nOiB0ZWFtLmF2YXRhclVybCxcbiAgICBpZDogJ3RlYW0tJyArIHRlYW0uaWQsXG4gICAgc3ViVGl0bGU6ICdNYW5hZ2UgbWVtYmVycyBhbmQgc2V0dGluZ3MnLFxuICAgIHVybDogJycsXG4gICAgdGV4dDogdGVhbS5uYW1lLFxuICAgIGJyZWFkY3J1bWJzOiBbeyB0aXRsZTogJ1RlYW1zJywgdXJsOiAnb3JnL3RlYW1zJyB9XSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgLy8gV2l0aCBSQkFDIHRoaXMgdGFiIHdpbGwgYWx3YXlzIGJlIGF2YWlsYWJsZSAoYnV0IG5vdCBhbHdheXMgZWRpdGFibGUpXG4gICAgICAvLyBXaXRoIExlZ2FjeSBpdCB3aWxsIGJlIGhpZGRlbiBieSBoaWRlVGFic0Zyb21Ob25UZWFtQWRtaW4gc2hvdWxkIHRoZSB1c2VyIG5vdCBiZSBhbGxvd2VkIHRvIHNlZSBpdFxuICAgICAge1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBpY29uOiAnc2xpZGVycy12LWFsdCcsXG4gICAgICAgIGlkOiBgdGVhbS1zZXR0aW5ncy0ke3RlYW0uaWR9YCxcbiAgICAgICAgdGV4dDogJ1NldHRpbmdzJyxcbiAgICAgICAgdXJsOiBgb3JnL3RlYW1zL2VkaXQvJHt0ZWFtLmlkfS9zZXR0aW5nc2AsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgLy8gV2hpbGUgdGVhbSBpcyBsb2FkaW5nIHdlIGxlYXZlIHRoZSBtZW1iZXJzIHRhYlxuICAvLyBXaXRoIFJCQUMgdGhlIE1lbWJlcnMgdGFiIGlzIGF2YWlsYWJsZSB3aGVuIHVzZXIgaGFzIEFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkIGZvciB0aGlzIHRlYW1cbiAgLy8gV2l0aCBMZWdhY3kgaXQgd2lsbCBhbHdheXMgYmUgcHJlc2VudFxuICBpZiAoXG4gICAgdGVhbSA9PT0gbG9hZGluZ1RlYW0gfHxcbiAgICBjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhKEFjY2Vzc0NvbnRyb2xBY3Rpb24uQWN0aW9uVGVhbXNQZXJtaXNzaW9uc1JlYWQsIHRlYW0pXG4gICkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS51bnNoaWZ0KHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBpY29uOiAndXNlcnMtYWx0JyxcbiAgICAgIGlkOiBgdGVhbS1tZW1iZXJzLSR7dGVhbS5pZH1gLFxuICAgICAgdGV4dDogJ01lbWJlcnMnLFxuICAgICAgdXJsOiBgb3JnL3RlYW1zL2VkaXQvJHt0ZWFtLmlkfS9tZW1iZXJzYCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHRlYW1Hcm91cFN5bmM6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdzeW5jJyxcbiAgICBpZDogYHRlYW0tZ3JvdXBzeW5jLSR7dGVhbS5pZH1gLFxuICAgIHRleHQ6ICdFeHRlcm5hbCBncm91cCBzeW5jJyxcbiAgICB1cmw6IGBvcmcvdGVhbXMvZWRpdC8ke3RlYW0uaWR9L2dyb3Vwc3luY2AsXG4gIH07XG5cbiAgY29uc3QgaXNMb2FkaW5nVGVhbSA9IHRlYW0gPT09IGxvYWRpbmdUZWFtO1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpKSB7XG4gICAgdGVhbUdyb3VwU3luYy50YWJTdWZmaXggPSAoKSA9PlxuICAgICAgUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGlzTG9hZGluZ1RlYW0gPyAnJyA6ICdmZWF0dXJlLWhpZ2hsaWdodHMtdGVhbS1zeW5jLWJhZGdlJywgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgLy8gV2l0aCBib3RoIExlZ2FjeSBhbmQgUkJBQyB0aGUgdGFiIGlzIHByb3RlY3RlZCBiZWluZyBmZWF0dXJlRW5hYmxlZFxuICAvLyBXaGlsZSB0ZWFtIGlzIGxvYWRpbmcgd2UgbGVhdmUgdGhlIHRlYW1zeW5jIHRhYlxuICAvLyBXaXRoIFJCQUMgdGhlIEV4dGVybmFsIEdyb3VwIFN5bmMgdGFiIGlzIGF2YWlsYWJsZSB3aGVuIHVzZXIgaGFzIEFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkIGZvciB0aGlzIHRlYW1cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCd0ZWFtc3luYycpKSB7XG4gICAgaWYgKGlzTG9hZGluZ1RlYW0gfHwgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkFjdGlvblRlYW1zUGVybWlzc2lvbnNSZWFkLCB0ZWFtKSkge1xuICAgICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2godGVhbUdyb3VwU3luYyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cykge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLnRlYW1Hcm91cFN5bmMsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBpc0xvYWRpbmdUZWFtID8gJycgOiAnZmVhdHVyZS1oaWdobGlnaHRzLXRlYW0tc3luYy1iYWRnZScgfSksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmF2TW9kZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZWFtTG9hZGluZ05hdihwYWdlTmFtZTogc3RyaW5nKTogTmF2TW9kZWwge1xuICBjb25zdCBtYWluID0gYnVpbGROYXZNb2RlbChsb2FkaW5nVGVhbSk7XG5cbiAgbGV0IG5vZGU6IE5hdk1vZGVsSXRlbTtcblxuICAvLyBmaW5kIGFjdGl2ZSBwYWdlXG4gIGZvciAoY29uc3QgY2hpbGQgb2YgbWFpbi5jaGlsZHJlbiEpIHtcbiAgICBpZiAoY2hpbGQuaWQhLmluZGV4T2YocGFnZU5hbWUpID4gMCkge1xuICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIG5vZGUgPSBjaGlsZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWFpbjogbWFpbixcbiAgICBub2RlOiBub2RlISxcbiAgfTtcbn1cbiIsImltcG9ydCB7IFVzZXIgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBUZWFtLCBUZWFtc1N0YXRlLCBUZWFtU3RhdGUsIFRlYW1NZW1iZXIsIE9yZ1JvbGUsIFRlYW1QZXJtaXNzaW9uTGV2ZWwgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VhcmNoUXVlcnkgPSAoc3RhdGU6IFRlYW1zU3RhdGUpID0+IHN0YXRlLnNlYXJjaFF1ZXJ5O1xuZXhwb3J0IGNvbnN0IGdldFNlYXJjaE1lbWJlclF1ZXJ5ID0gKHN0YXRlOiBUZWFtU3RhdGUpID0+IHN0YXRlLnNlYXJjaE1lbWJlclF1ZXJ5O1xuZXhwb3J0IGNvbnN0IGdldFRlYW1Hcm91cHMgPSAoc3RhdGU6IFRlYW1TdGF0ZSkgPT4gc3RhdGUuZ3JvdXBzO1xuZXhwb3J0IGNvbnN0IGdldFRlYW1zQ291bnQgPSAoc3RhdGU6IFRlYW1zU3RhdGUpID0+IHN0YXRlLnRlYW1zLmxlbmd0aDtcbmV4cG9ydCBjb25zdCBnZXRUZWFtc1NlYXJjaFBhZ2UgPSAoc3RhdGU6IFRlYW1zU3RhdGUpID0+IHN0YXRlLnNlYXJjaFBhZ2U7XG5cbmV4cG9ydCBjb25zdCBnZXRUZWFtID0gKHN0YXRlOiBUZWFtU3RhdGUsIGN1cnJlbnRUZWFtSWQ6IGFueSk6IFRlYW0gfCBudWxsID0+IHtcbiAgaWYgKHN0YXRlLnRlYW0uaWQgPT09IHBhcnNlSW50KGN1cnJlbnRUZWFtSWQsIDEwKSkge1xuICAgIHJldHVybiBzdGF0ZS50ZWFtO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VGVhbXMgPSAoc3RhdGU6IFRlYW1zU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBSZWdFeHAoc3RhdGUuc2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLnRlYW1zLmZpbHRlcigodGVhbSkgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KHRlYW0ubmFtZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRlYW1NZW1iZXJzID0gKHN0YXRlOiBUZWFtU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBSZWdFeHAoc3RhdGUuc2VhcmNoTWVtYmVyUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLm1lbWJlcnMuZmlsdGVyKChtZW1iZXIpID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdChtZW1iZXIubG9naW4pIHx8IHJlZ2V4LnRlc3QobWVtYmVyLmVtYWlsKSB8fCByZWdleC50ZXN0KG1lbWJlci5uYW1lKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XG4gIG1lbWJlcnM6IFRlYW1NZW1iZXJbXTtcbiAgZWRpdG9yc0NhbkFkbWluOiBib29sZWFuO1xuICBzaWduZWRJblVzZXI6IFVzZXI7XG59XG5cbmV4cG9ydCBjb25zdCBpc1NpZ25lZEluVXNlclRlYW1BZG1pbiA9IChjb25maWc6IENvbmZpZyk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCB7IG1lbWJlcnMsIHNpZ25lZEluVXNlciwgZWRpdG9yc0NhbkFkbWluIH0gPSBjb25maWc7XG4gIGNvbnN0IHVzZXJJbk1lbWJlcnMgPSBtZW1iZXJzLmZpbmQoKG0pID0+IG0udXNlcklkID09PSBzaWduZWRJblVzZXIuaWQpO1xuICBjb25zdCBwZXJtaXNzaW9uID0gdXNlckluTWVtYmVycyA/IHVzZXJJbk1lbWJlcnMucGVybWlzc2lvbiA6IFRlYW1QZXJtaXNzaW9uTGV2ZWwuTWVtYmVyO1xuXG4gIHJldHVybiBpc1Blcm1pc3Npb25UZWFtQWRtaW4oeyBwZXJtaXNzaW9uLCBzaWduZWRJblVzZXIsIGVkaXRvcnNDYW5BZG1pbiB9KTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkNvbmZpZyB7XG4gIHBlcm1pc3Npb246IFRlYW1QZXJtaXNzaW9uTGV2ZWw7XG4gIGVkaXRvcnNDYW5BZG1pbjogYm9vbGVhbjtcbiAgc2lnbmVkSW5Vc2VyOiBVc2VyO1xufVxuXG5leHBvcnQgY29uc3QgaXNQZXJtaXNzaW9uVGVhbUFkbWluID0gKGNvbmZpZzogUGVybWlzc2lvbkNvbmZpZyk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCB7IHBlcm1pc3Npb24sIHNpZ25lZEluVXNlciwgZWRpdG9yc0NhbkFkbWluIH0gPSBjb25maWc7XG4gIGNvbnN0IGlzQWRtaW4gPSBzaWduZWRJblVzZXIuaXNHcmFmYW5hQWRtaW4gfHwgc2lnbmVkSW5Vc2VyLm9yZ1JvbGUgPT09IE9yZ1JvbGUuQWRtaW47XG4gIGNvbnN0IHVzZXJJc1RlYW1BZG1pbiA9IHBlcm1pc3Npb24gPT09IFRlYW1QZXJtaXNzaW9uTGV2ZWwuQWRtaW47XG4gIGNvbnN0IGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluID0gaXNBZG1pbiB8fCB1c2VySXNUZWFtQWRtaW47XG5cbiAgcmV0dXJuIGlzU2lnbmVkSW5Vc2VyVGVhbUFkbWluIHx8ICFlZGl0b3JzQ2FuQWRtaW47XG59O1xuIl0sIm5hbWVzIjpbImNzcyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsInNlbGVjdG9ycyIsIkJ1dHRvbiIsIkZpZWxkIiwiRmllbGRTZXQiLCJGb3JtIiwiSWNvbiIsIkxhYmVsIiwiUmFkaW9CdXR0b25Hcm91cCIsIlNlbGVjdCIsInN0eWxlc0ZhY3RvcnkiLCJUaW1lWm9uZVBpY2tlciIsIlRvb2x0aXAiLCJXZWVrU3RhcnRQaWNrZXIiLCJQcmVmZXJlbmNlc1NlcnZpY2UiLCJiYWNrZW5kU3J2IiwidGhlbWVzIiwidmFsdWUiLCJsYWJlbCIsImlkIiwiU2hhcmVkUHJlZmVyZW5jZXMiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaG9tZURhc2hib2FyZElkIiwidGhlbWUiLCJ0aW1lem9uZSIsIndlZWtTdGFydCIsInN0YXRlIiwic2VydmljZSIsInVwZGF0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwic2V0U3RhdGUiLCJkYXNoYm9hcmRJZCIsImRhc2hib2FyZCIsImZvbGRlclRpdGxlIiwidGl0bGUiLCJyZXNvdXJjZVVyaSIsImRhc2hib2FyZHMiLCJjb21wb25lbnREaWRNb3VudCIsInByZWZzIiwibG9hZCIsInNlYXJjaCIsInN0YXJyZWQiLCJkZWZhdWx0RGFzaGJvYXJkSGl0IiwidGFncyIsInR5cGUiLCJ1aWQiLCJ1cmkiLCJ1cmwiLCJmb2xkZXJJZCIsImZvbGRlclVpZCIsImZvbGRlclVybCIsImlzU3RhcnJlZCIsInNsdWciLCJpdGVtcyIsImZpbmQiLCJkIiwibWlzc2luZyIsImRhc2hib2FyZElkcyIsImxlbmd0aCIsInB1c2giLCJyZW5kZXIiLCJkaXNhYmxlZCIsInN0eWxlcyIsImdldFN0eWxlcyIsImhvbWVEYXNoYm9hcmRUb29sdGlwIiwib25TdWJtaXRGb3JtIiwiaXRlbSIsIm9uVGhlbWVDaGFuZ2VkIiwibGFiZWxUZXh0IiwiaSIsImdldEZ1bGxEYXNoTmFtZSIsIm9uSG9tZURhc2hib2FyZENoYW5nZWQiLCJjb21wb25lbnRzIiwiY29udGFpbmVyVjIiLCJvblRpbWVab25lQ2hhbmdlZCIsIm9uV2Vla1N0YXJ0Q2hhbmdlZCIsIlVzZXJQcm9maWxlIiwicHJlZmVyZW5jZXNTYXZlQnV0dG9uIiwiY3giLCJ1c2VFZmZlY3QiLCJyZXBvcnRFeHBlcmltZW50VmlldyIsIkxpbmtCdXR0b24iLCJ1c2VTdHlsZXMyIiwiVXBncmFkZUJveCIsImZlYXR1cmVOYW1lIiwiY2xhc3NOYW1lIiwidGV4dCIsImZlYXR1cmVJZCIsImV2ZW50VmFyaWFudCIsInNpemUiLCJodG1sUHJvcHMiLCJnZXRVcGdyYWRlQm94U3R5bGVzIiwiYm94IiwiaWNvbiIsImlubmVyIiwiYnV0dG9uIiwiYm9yZGVyUmFkaXVzIiwic2hhcGUiLCJmb250QmFzZSIsImNvbG9ycyIsInN1Y2Nlc3MiLCJ0cmFuc3BhcmVudCIsInNwYWNpbmciLCJ0eXBvZ3JhcGh5IiwiZm9udFNpemUiLCJicmVha3BvaW50cyIsInZhbHVlcyIsInh4bCIsIm1haW4iLCJmb250V2VpZ2h0TGlnaHQiLCJwcmltYXJ5IiwiVXBncmFkZUNvbnRlbnQiLCJsaXN0SXRlbXMiLCJpbWFnZSIsImZlYXR1cmVVcmwiLCJkZXNjcmlwdGlvbiIsImNhcHRpb24iLCJhY3Rpb24iLCJnZXRVcGdyYWRlQ29udGVudFN0eWxlcyIsImNvbnRhaW5lciIsImNvbnRlbnQiLCJsaXN0IiwibWFwIiwiaW5kZXgiLCJsaW5rIiwib25DbGljayIsIm1lZGlhIiwiZ2V0SW1nVXJsIiwibWF4Q29udHJhc3QiLCJVcGdyYWRlQ29udGVudFZlcnRpY2FsIiwiZ2V0Q29udGVudFZlcnRpY2FsU3R5bGVzIiwidXJsT3JJZCIsInN0YXJ0c1dpdGgiLCJXaXRoRmVhdHVyZVRvZ2dsZSIsImZlYXR1cmVUb2dnbGUiLCJjaGlsZHJlbiIsImNvbmZpZyIsImlzVHJpYWwiLCJleHBpcnkiLCJsaWNlbnNlSW5mbyIsInRyaWFsRXhwaXJ5IiwiaGlnaGxpZ2h0VHJpYWwiLCJmZWF0dXJlVG9nZ2xlcyIsImZlYXR1cmVIaWdobGlnaHRzIiwiY29ubmVjdCIsIkxlZ2FjeUZvcm1zIiwidXNlVGhlbWUyIiwiU2xpZGVEb3duIiwiQ2xvc2VCdXR0b24iLCJFbXB0eUxpc3RDVEEiLCJhZGRUZWFtR3JvdXAiLCJsb2FkVGVhbUdyb3VwcyIsInJlbW92ZVRlYW1Hcm91cCIsImdldFRlYW1Hcm91cHMiLCJJbnB1dCIsIm1hcFN0YXRlVG9Qcm9wcyIsImdyb3VwcyIsInRlYW0iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0b3IiLCJoZWFkZXJUb29sdGlwIiwiVGVhbUdyb3VwU3luYyIsImlzQWRkaW5nIiwiZXZlbnQiLCJuZXdHcm91cElkIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJncm91cCIsImdyb3VwSWQiLCJmZXRjaFRlYW1Hcm91cHMiLCJpc05ld0dyb3VwVmFsaWQiLCJyZW5kZXJHcm91cCIsImlzUmVhZE9ubHkiLCJ3aWR0aCIsIm9uUmVtb3ZlR3JvdXAiLCJvblRvZ2dsZUFkZGluZyIsIm9uQWRkR3JvdXAiLCJvbk5ld0dyb3VwSWRDaGFuZ2VkIiwiVGVhbVN5bmNVcGdyYWRlQ29udGVudCIsImlzTGlnaHQiLCJEZWxldGVCdXR0b24iLCJUYWdCYWRnZSIsInRlYW1zUGVybWlzc2lvbkxldmVscyIsInVwZGF0ZVRlYW1NZW1iZXIiLCJyZW1vdmVUZWFtTWVtYmVyIiwiVGVhbU1lbWJlclJvdyIsIm1lbWJlciIsInBlcm1pc3Npb24iLCJ1cGRhdGVkVGVhbU1lbWJlciIsInJlbmRlckxhYmVscyIsImJpbmQiLCJyZW5kZXJQZXJtaXNzaW9ucyIsIm9uUmVtb3ZlTWVtYmVyIiwidXNlcklkIiwiZWRpdG9yc0NhbkFkbWluIiwic2lnbmVkSW5Vc2VySXNUZWFtQWRtaW4iLCJkcCIsIm9uUGVybWlzc2lvbkNoYW5nZSIsImxhYmVscyIsInN5bmNFbmFibGVkIiwibmFtZSIsImF2YXRhclVybCIsImxvZ2luIiwiZW1haWwiLCJGaWx0ZXJJbnB1dCIsIlVzZXJQaWNrZXIiLCJjb250ZXh0U3J2IiwiYWRkVGVhbU1lbWJlciIsInNldFNlYXJjaE1lbWJlclF1ZXJ5IiwiZ2V0U2VhcmNoTWVtYmVyUXVlcnkiLCJpc1NpZ25lZEluVXNlclRlYW1BZG1pbiIsInNlYXJjaE1lbWJlclF1ZXJ5Iiwic2lnbmVkSW5Vc2VyIiwidXNlciIsIlRlYW1NZW1iZXJzIiwibmV3VGVhbU1lbWJlciIsIm1lbWJlcnMiLCJpc1RlYW1BZG1pbiIsIm9uU2VhcmNoUXVlcnlDaGFuZ2UiLCJvblVzZXJTZWxlY3RlZCIsIm9uQWRkVXNlclRvVGVhbSIsImluY2x1ZGVzIiwiZmVhdHVyZUVuYWJsZWQiLCJ3aXRoVGhlbWUyIiwiUGFnZSIsImdldE5hdk1vZGVsIiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsIlRlYW1QZXJtaXNzaW9ucyIsIlRlYW1TZXR0aW5ncyIsImxvYWRUZWFtIiwibG9hZFRlYW1NZW1iZXJzIiwiZ2V0VGVhbUxvYWRpbmdOYXYiLCJnZXRUZWFtIiwiZ2V0VGVhbU1lbWJlcnMiLCJQYWdlVHlwZXMiLCJ0ZWFtSWQiLCJwYXJzZUludCIsIm1hdGNoIiwicGFyYW1zIiwiZGVmYXVsdFBhZ2UiLCJhY2Nlc3NDb250cm9sRW5hYmxlZCIsImhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhIiwiQWN0aW9uVGVhbXNQZXJtaXNzaW9uc1JlYWQiLCJwYWdlTmFtZSIsInBhZ2UiLCJ0ZWFtTG9hZGluZ05hdiIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJUZWFtUGFnZXMiLCJ0ZXh0MSIsInRleHQyIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJmaWx0ZXIiLCJuYXZJdGVtIiwidGV4dHNBcmVFcXVhbCIsIk1lbWJlcnMiLCJoaWRlRnJvbVRhYnMiLCJpc0xvYWRpbmciLCJpc1N5bmNFbmFibGVkIiwiZmV0Y2hUZWFtIiwiZ2V0Q3VycmVudFBhZ2UiLCJwYWdlcyIsImN1cnJlbnRQYWdlIiwicmVuZGVyUGFnZSIsImNhblJlYWRUZWFtIiwiaGFzQWNjZXNzSW5NZXRhZGF0YSIsIkFjdGlvblRlYW1zUmVhZCIsImNhblJlYWRUZWFtUGVybWlzc2lvbnMiLCJjYW5Xcml0ZVRlYW1QZXJtaXNzaW9ucyIsIkFjdGlvblRlYW1zUGVybWlzc2lvbnNXcml0ZSIsIlNldHRpbmdzIiwiR3JvdXBTeW5jIiwiaGlkZVRhYnNGcm9tTm9uVGVhbUFkbWluIiwiT2JqZWN0Iiwia2V5cyIsIlBlcm1pc3Npb25zIiwiY2FuU2V0UGVybWlzc2lvbnMiLCJWZXJ0aWNhbEdyb3VwIiwidXBkYXRlVGVhbSIsImNhbldyaXRlVGVhbVNldHRpbmdzIiwiQWN0aW9uVGVhbXNXcml0ZSIsImZvcm1UZWFtIiwicmVnaXN0ZXIiLCJyZXF1aXJlZCIsImdldEJhY2tlbmRTcnYiLCJ1cGRhdGVOYXZJbmRleCIsImFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIiwiYnVpbGROYXZNb2RlbCIsInRlYW1Hcm91cHNMb2FkZWQiLCJ0ZWFtTG9hZGVkIiwidGVhbU1lbWJlcnNMb2FkZWQiLCJ0ZWFtc0xvYWRlZCIsImxvYWRUZWFtcyIsImRpc3BhdGNoIiwiaGFzUGVybWlzc2lvbiIsInJlc3BvbnNlIiwiZ2V0IiwicGVycGFnZSIsInRlYW1zIiwiZ2V0U3RvcmUiLCJwb3N0IiwiZGVsZXRlIiwicHV0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGVsZXRlVGVhbSIsImZldGNoVXNlclBlcm1pc3Npb25zIiwiUHJvQmFkZ2UiLCJUZWFtUGVybWlzc2lvbkxldmVsIiwibG9hZGluZ1RlYW0iLCJtZW1iZXJDb3VudCIsIk1lbWJlciIsImltZyIsInN1YlRpdGxlIiwiYnJlYWRjcnVtYnMiLCJhY3RpdmUiLCJ1bnNoaWZ0IiwidGVhbUdyb3VwU3luYyIsImlzTG9hZGluZ1RlYW0iLCJ0YWJTdWZmaXgiLCJleHBlcmltZW50SWQiLCJub2RlIiwiY2hpbGQiLCJpbmRleE9mIiwiT3JnUm9sZSIsImdldFNlYXJjaFF1ZXJ5Iiwic2VhcmNoUXVlcnkiLCJnZXRUZWFtc0NvdW50IiwiZ2V0VGVhbXNTZWFyY2hQYWdlIiwic2VhcmNoUGFnZSIsImN1cnJlbnRUZWFtSWQiLCJnZXRUZWFtcyIsInJlZ2V4IiwiUmVnRXhwIiwidGVzdCIsInVzZXJJbk1lbWJlcnMiLCJtIiwiaXNQZXJtaXNzaW9uVGVhbUFkbWluIiwiaXNBZG1pbiIsImlzR3JhZmFuYUFkbWluIiwib3JnUm9sZSIsIkFkbWluIiwidXNlcklzVGVhbUFkbWluIl0sInNvdXJjZVJvb3QiOiIifQ==