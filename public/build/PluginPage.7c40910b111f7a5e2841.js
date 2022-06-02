"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[2417],{

 "./public/app/features/datasources/DashboardsTable.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td;






const DashboardsTable = _ref => {
  let {
    dashboards,
    onImport,
    onRemove
  } = _ref;

  function buttonText(dashboard) {
    return dashboard.revision !== dashboard.importedRevision ? 'Update' : 'Re-import';
  }

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("table", {
    className: "filter-table",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
      children: dashboards.map((dashboard, index) => {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [_td || (_td = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            className: "width-1",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              name: "apps"
            })
          })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: dashboard.imported ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: dashboard.importedUrl,
              children: dashboard.title
            }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: dashboard.title
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("td", {
            style: {
              textAlign: 'right'
            },
            children: [!dashboard.imported ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              size: "sm",
              onClick: () => onImport(dashboard, false),
              children: "Import"
            }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              size: "sm",
              onClick: () => onImport(dashboard, true),
              children: buttonText(dashboard)
            }), dashboard.imported && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              icon: "trash-alt",
              variant: "destructive",
              size: "sm",
              onClick: () => onRemove(dashboard)
            })]
          })]
        }, `${dashboard.dashboardId}-${index}`);
      })
    })
  });
};

 const __WEBPACK_DEFAULT_EXPORT__ = (DashboardsTable);

 }),

 "./public/app/features/plugins/admin/components/Badges/index.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "SX": () => ( PluginDisabledBadge),
  "IF": () => ( PluginEnterpriseBadge),
  "oZ": () => ( PluginInstalledBadge),
  "xh": () => ( PluginUpdateAvailableBadge)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;




function PluginDisabledBadge(_ref) {
  let {
    error
  } = _ref;
  const tooltip = errorCodeToTooltip(error);
  return (0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
    icon: "exclamation-triangle",
    text: "Disabled",
    color: "red",
    tooltip: tooltip
  });
}

function errorCodeToTooltip(error) {
  switch (error) {
    case src.PluginErrorCode.modifiedSignature:
      return 'Plugin disabled due to modified content';

    case src.PluginErrorCode.invalidSignature:
      return 'Plugin disabled due to invalid plugin signature';

    case src.PluginErrorCode.missingSignature:
      return 'Plugin disabled due to missing plugin signature';

    default:
      return `Plugin disabled due to unkown error: ${error}`;
  }
}
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
;

const getBadgeColor = theme => emotion_css_esm.css`
  background: ${theme.colors.background.primary};
  border-color: ${theme.colors.border.strong};
  color: ${theme.colors.text.secondary};
`;
;




function PluginInstalledBadge() {
  const customBadgeStyles = (0,grafana_ui_src.useStyles2)(getBadgeColor);
  return (0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
    text: "Installed",
    color: "orange",
    className: customBadgeStyles
  });
}
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
;
var _Badge;







function PluginEnterpriseBadge(_ref) {
  let {
    plugin
  } = _ref;
  const customBadgeStyles = (0,grafana_ui_src.useStyles2)(getBadgeColor);

  const onClick = ev => {
    ev.preventDefault();
    window.open(`https://grafana.com/grafana/plugins/${plugin.id}?utm_source=grafana_catalog_learn_more`, '_blank', 'noopener,noreferrer');
  };

  if ((0,grafana_runtime_src.featureEnabled)('enterprise.plugins')) {
    return _Badge || (_Badge = (0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
      text: "Enterprise",
      color: "blue"
    }));
  }

  return (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.PluginSignatureBadge, {
      status: plugin.signature
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
      icon: "lock",
      "aria-label": "lock icon",
      text: "Enterprise",
      color: "blue",
      className: customBadgeStyles
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      size: "sm",
      fill: "text",
      icon: "external-link-alt",
      onClick: onClick,
      children: "Learn more"
    })]
  });
}
;





function PluginUpdateAvailableBadge(_ref) {
  let {
    plugin
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles); 

  if (plugin.hasUpdate && !plugin.isCore && plugin.type !== src.PluginType.renderer) {
    return (0,jsx_runtime.jsx)("p", {
      className: styles.hasUpdate,
      children: "Update available!"
    });
  }

  return null;
}
const getStyles = theme => {
  return {
    hasUpdate: emotion_css_esm.css`
      color: ${theme.colors.text.secondary};
      font-size: ${theme.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `
  };
};
;





 }),

 "./public/app/features/plugins/admin/components/Loader.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "a": () => ( Loader)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const Loader = _ref => {
  let {
    text = 'Loading...'
  } = _ref;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "page-loader-wrapper",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
      text: text
    })
  });
};

 }),

 "./public/app/features/plugins/admin/components/PluginLogo.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "E": () => ( PluginLogo)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");


function PluginLogo(_ref) {
  let {
    alt,
    className,
    src,
    height
  } = _ref;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
    src: src,
    className: className,
    alt: alt,
    loading: "lazy",
    height: height
  });
}

 }),

 "./public/app/features/plugins/admin/pages/PluginDetails.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "default": () => ( PluginDetails),
  "getStyles": () => ( PluginDetails_getStyles)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var usePrevious = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js");
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var Layout = __webpack_require__("./packages/grafana-ui/src/components/Layout/Layout.tsx");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var types = __webpack_require__("./public/app/types/index.ts");
var Loader = __webpack_require__("./public/app/features/plugins/admin/components/Loader.tsx");
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
var helpers = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _p, _thead;








const VersionList = _ref => {
  let {
    versions = [],
    installedVersion
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  const latestCompatibleVersion = (0,helpers.RU)(versions);

  if (versions.length === 0) {
    return _p || (_p = (0,jsx_runtime.jsx)("p", {
      children: "No version history was found."
    }));
  }

  return (0,jsx_runtime.jsxs)("table", {
    className: styles.table,
    children: [_thead || (_thead = (0,jsx_runtime.jsx)("thead", {
      children: (0,jsx_runtime.jsxs)("tr", {
        children: [(0,jsx_runtime.jsx)("th", {
          children: "Version"
        }), (0,jsx_runtime.jsx)("th", {
          children: "Last updated"
        })]
      })
    })), (0,jsx_runtime.jsx)("tbody", {
      children: versions.map(version => {
        const isInstalledVersion = installedVersion === version.version;
        return (0,jsx_runtime.jsxs)("tr", {
          children: [isInstalledVersion ? (0,jsx_runtime.jsxs)("td", {
            className: styles.currentVersion,
            children: [version.version, " (installed version)"]
          }) : version.version === (latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version) ? (0,jsx_runtime.jsxs)("td", {
            children: [version.version, " (latest compatible version)"]
          }) : (0,jsx_runtime.jsx)("td", {
            children: version.version
          }), (0,jsx_runtime.jsx)("td", {
            className: isInstalledVersion ? styles.currentVersion : '',
            children: (0,grafana_data_src.dateTimeFormatTimeAgo)(version.createdAt)
          })]
        }, version.version);
      })
    })]
  });
};

const getStyles = theme => ({
  container: emotion_css_esm.css`
    padding: ${theme.spacing(2, 4, 3)};
  `,
  table: emotion_css_esm.css`
    table-layout: fixed;
    width: 100%;
    td,
    th {
      padding: ${theme.spacing()} 0;
    }
    th {
      font-size: ${theme.typography.h5.fontSize};
    }
  `,
  currentVersion: emotion_css_esm.css`
    font-weight: ${theme.typography.fontWeightBold};
  `
});
var useAsync = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
var importPanelPlugin = __webpack_require__("./public/app/features/plugins/importPanelPlugin.ts");
var pluginSettings = __webpack_require__("./public/app/features/plugins/pluginSettings.ts");
var plugin_loader = __webpack_require__("./public/app/features/plugins/plugin_loader.ts");
;




async function loadPlugin(pluginId) {
  const info = await (0,pluginSettings.a)(pluginId);
  let result;

  if (info.type === grafana_data_src.PluginType.app) {
    result = await (0,plugin_loader.Av)(info);
  }

  if (info.type === grafana_data_src.PluginType.datasource) {
    result = await (0,plugin_loader.nL)(info);
  }

  if (info.type === grafana_data_src.PluginType.panel) {
    const panelPlugin = await (0,importPanelPlugin._)(info);
    result = panelPlugin;
  }

  if (info.type === grafana_data_src.PluginType.renderer) {
    result = {
      meta: info
    };
  }

  if (!result) {
    throw new Error('Unknown Plugin type: ' + info.type);
  }

  return result;
}
;


const usePluginConfig = plugin => {
  return (0,useAsync.Z)(async () => {
    if (!plugin) {
      return null;
    }

    if (plugin.isInstalled && !plugin.isDisabled) {
      return loadPlugin(plugin.id);
    }

    return null;
  }, [plugin === null || plugin === void 0 ? void 0 : plugin.id, plugin === null || plugin === void 0 ? void 0 : plugin.isInstalled, plugin === null || plugin === void 0 ? void 0 : plugin.isDisabled]);
};
var admin_types = __webpack_require__("./public/app/features/plugins/admin/types.ts");
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
;
var _br, _br2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class AppConfigCtrlWrapper extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "element", null);

    _defineProperty(this, "model", void 0);

    _defineProperty(this, "preUpdateHook", () => Promise.resolve());

    _defineProperty(this, "postUpdateHook", () => Promise.resolve());

    _defineProperty(this, "update", () => {
      const pluginId = this.model.id;
      this.preUpdateHook().then(() => {
        const updateCmd = (0,lodash.extend)({
          enabled: this.model.enabled,
          pinned: this.model.pinned,
          jsonData: this.model.jsonData,
          secureJsonData: this.model.secureJsonData
        }, {});
        return (0,src.getBackendSrv)().post(`/api/plugins/${pluginId}/settings`, updateCmd);
      }).then(this.postUpdateHook).then(res => {
        window.location.href = window.location.href;
      });
    });

    _defineProperty(this, "setPreUpdateHook", callback => {
      this.preUpdateHook = callback;
    });

    _defineProperty(this, "setPostUpdateHook", callback => {
      this.postUpdateHook = callback;
    });

    _defineProperty(this, "importDashboards", () => {
      (0,grafana_data_src.deprecationWarning)('AppConfig', 'importDashboards()');
      return Promise.resolve();
    });

    _defineProperty(this, "enable", () => {
      this.model.enabled = true;
      this.model.pinned = true;
      this.update();
    });

    _defineProperty(this, "disable", () => {
      this.model.enabled = false;
      this.model.pinned = false;
      this.update();
    });

    this.state = {
      angularCtrl: null,
      refresh: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        refresh: this.state.refresh + 1
      });
    }, 5);
  }

  componentDidUpdate(prevProps) {
    if (!this.element || this.state.angularCtrl) {
      return;
    } 


    this.model = (0,lodash.cloneDeep)(this.props.app.meta);
    const loader = (0,src.getAngularLoader)();
    const template = '<plugin-component type="app-config-ctrl"></plugin-component>';
    const scopeProps = {
      ctrl: this,
      isAppConfigCtrl: true
    };
    const angularCtrl = loader.load(this.element, scopeProps, template);
    this.setState({
      angularCtrl
    });
  }

  render() {
    const model = this.model;
    const withRightMargin = (0,emotion_css_esm.css)({
      marginRight: '8px'
    });
    return (0,jsx_runtime.jsxs)("div", {
      children: [(0,jsx_runtime.jsx)("div", {
        ref: element => this.element = element
      }), _br || (_br = (0,jsx_runtime.jsx)("br", {})), _br2 || (_br2 = (0,jsx_runtime.jsx)("br", {})), model && (0,jsx_runtime.jsxs)("div", {
        className: "gf-form",
        children: [!model.enabled && (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "primary",
          onClick: this.enable,
          className: withRightMargin,
          children: "Enable"
        }), model.enabled && (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "primary",
          onClick: this.update,
          className: withRightMargin,
          children: "Update"
        }), model.enabled && (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "destructive",
          onClick: this.disable,
          className: withRightMargin,
          children: "Disable"
        })]
      })]
    });
  } 


}
var core = __webpack_require__("./public/app/core/core.ts");
var DashboardsTable = __webpack_require__("./public/app/features/datasources/DashboardsTable.tsx");
;
var _div, _div2;

function PluginDashboards_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class PluginDashboards extends react.PureComponent {
  constructor(props) {
    super(props);

    PluginDashboards_defineProperty(this, "importAll", () => {
      this.importNext(0);
    });

    PluginDashboards_defineProperty(this, "importNext", index => {
      const {
        dashboards
      } = this.state;
      return this.import(dashboards[index], true).then(() => {
        if (index + 1 < dashboards.length) {
          return new Promise(resolve => {
            setTimeout(() => {
              this.importNext(index + 1).then(() => {
                resolve();
              });
            }, 500);
          });
        } else {
          return Promise.resolve();
        }
      });
    });

    PluginDashboards_defineProperty(this, "import", (dash, overwrite) => {
      const {
        plugin,
        datasource
      } = this.props;
      const installCmd = {
        pluginId: plugin.id,
        path: dash.path,
        overwrite: overwrite,
        inputs: []
      };

      if (datasource) {
        installCmd.inputs.push({
          name: '*',
          type: 'datasource',
          pluginId: datasource.meta.id,
          value: datasource.name
        });
      }

      return (0,src.getBackendSrv)().post(`/api/dashboards/import`, installCmd).then(res => {
        core.h$.emit(grafana_data_src.AppEvents.alertSuccess, ['Dashboard Imported', dash.title]);
        (0,lodash.extend)(dash, res);
        this.setState({
          dashboards: [...this.state.dashboards]
        });
      });
    });

    PluginDashboards_defineProperty(this, "remove", dash => {
      (0,src.getBackendSrv)().delete('/api/dashboards/uid/' + dash.uid).then(() => {
        dash.imported = false;
        this.setState({
          dashboards: [...this.state.dashboards]
        });
      });
    });

    this.state = {
      loading: true,
      dashboards: []
    };
  }

  async componentDidMount() {
    const pluginId = this.props.plugin.id;
    (0,src.getBackendSrv)().get(`/api/plugins/${pluginId}/dashboards`).then(dashboards => {
      this.setState({
        dashboards,
        loading: false
      });
    });
  }

  render() {
    const {
      loading,
      dashboards
    } = this.state;

    if (loading) {
      return _div || (_div = (0,jsx_runtime.jsx)("div", {
        children: "loading..."
      }));
    }

    if (!dashboards || !dashboards.length) {
      return _div2 || (_div2 = (0,jsx_runtime.jsx)("div", {
        children: "No dashboards are included with this plugin"
      }));
    }

    return (0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: (0,jsx_runtime.jsx)(DashboardsTable.Z, {
        dashboards: dashboards,
        onImport: this.import,
        onRemove: this.remove
      })
    });
  }

}
;
var PluginDetailsBody_p;










function PluginDetailsBody(_ref) {
  let {
    plugin,
    queryParams,
    pageId
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(PluginDetailsBody_getStyles);
  const {
    value: pluginConfig
  } = usePluginConfig(plugin);

  if (pageId === admin_types.tu.OVERVIEW) {
    var _plugin$details$readm, _plugin$details;

    return (0,jsx_runtime.jsx)("div", {
      className: (0,emotion_css_esm.cx)(styles.readme, styles.container),
      dangerouslySetInnerHTML: {
        __html: (_plugin$details$readm = (_plugin$details = plugin.details) === null || _plugin$details === void 0 ? void 0 : _plugin$details.readme) !== null && _plugin$details$readm !== void 0 ? _plugin$details$readm : 'No plugin help or readme markdown file was found'
      }
    });
  }

  if (pageId === admin_types.tu.VERSIONS) {
    var _plugin$details2;

    return (0,jsx_runtime.jsx)("div", {
      className: styles.container,
      children: (0,jsx_runtime.jsx)(VersionList, {
        versions: (_plugin$details2 = plugin.details) === null || _plugin$details2 === void 0 ? void 0 : _plugin$details2.versions,
        installedVersion: plugin.installedVersion
      })
    });
  }

  if (pageId === admin_types.tu.CONFIG && pluginConfig !== null && pluginConfig !== void 0 && pluginConfig.angularConfigCtrl) {
    return (0,jsx_runtime.jsx)("div", {
      className: styles.container,
      children: (0,jsx_runtime.jsx)(AppConfigCtrlWrapper, {
        app: pluginConfig
      })
    });
  }

  if (pluginConfig !== null && pluginConfig !== void 0 && pluginConfig.configPages) {
    for (const configPage of pluginConfig.configPages) {
      var _configPage$body;

      if (pageId === configPage.id) {
        return (0,jsx_runtime.jsx)("div", {
          className: styles.container,
          children: _configPage$body || (_configPage$body = (0,jsx_runtime.jsx)(configPage.body, {
            plugin: pluginConfig,
            query: queryParams
          }))
        });
      }
    }
  }

  if (pageId === admin_types.tu.DASHBOARDS && pluginConfig) {
    return (0,jsx_runtime.jsx)("div", {
      className: styles.container,
      children: (0,jsx_runtime.jsx)(PluginDashboards, {
        plugin: pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.meta
      })
    });
  }

  return (0,jsx_runtime.jsx)("div", {
    className: styles.container,
    children: PluginDetailsBody_p || (PluginDetailsBody_p = (0,jsx_runtime.jsx)("p", {
      children: "Page not found."
    }))
  });
}
const PluginDetailsBody_getStyles = theme => ({
  container: emotion_css_esm.css`
    padding: ${theme.spacing(3, 4)};
  `,
  readme: emotion_css_esm.css`
    & img {
      max-width: 100%;
    }

    h1,
    h2,
    h3 {
      margin-top: ${theme.spacing(3)};
      margin-bottom: ${theme.spacing(2)};
    }

    *:first-child {
      margin-top: 0;
    }

    li {
      margin-left: ${theme.spacing(2)};
      & > p {
        margin: ${theme.spacing()} 0;
      }
    }

    a {
      color: ${theme.colors.text.link};

      &:hover {
        color: ${theme.colors.text.link};
        text-decoration: underline;
      }
    }
  `
});
var grafana_e2e_selectors_src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
;
var PluginDetailsDisabledError_p, _a, _p2, _p3, _p4, _p5;







function PluginDetailsDisabledError(_ref) {
  let {
    className,
    plugin
  } = _ref;

  if (!plugin.isDisabled) {
    return null;
  }

  return (0,jsx_runtime.jsxs)(grafana_ui_src.Alert, {
    severity: "error",
    title: "Plugin disabled",
    className: className,
    "aria-label": grafana_e2e_selectors_src.wl.pages.PluginPage.disabledInfo,
    children: [renderDescriptionFromError(plugin.error), PluginDetailsDisabledError_p || (PluginDetailsDisabledError_p = (0,jsx_runtime.jsx)("p", {
      children: "Please contact your server administrator to get this resolved."
    })), _a || (_a = (0,jsx_runtime.jsx)("a", {
      href: "https://grafana.com/docs/grafana/latest/administration/cli/#plugins-commands",
      className: "external-link",
      target: "_blank",
      rel: "noreferrer",
      children: "Read more about managing plugins"
    }))]
  });
}

function renderDescriptionFromError(error) {
  switch (error) {
    case grafana_data_src.PluginErrorCode.modifiedSignature:
      return _p2 || (_p2 = (0,jsx_runtime.jsx)("p", {
        children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that the content of this plugin does not match its signature. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."
      }));

    case grafana_data_src.PluginErrorCode.invalidSignature:
      return _p3 || (_p3 = (0,jsx_runtime.jsx)("p", {
        children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that it was invalid. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."
      }));

    case grafana_data_src.PluginErrorCode.missingSignature:
      return _p4 || (_p4 = (0,jsx_runtime.jsx)("p", {
        children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that there is no signature for this plugin. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."
      }));

    default:
      return _p5 || (_p5 = (0,jsx_runtime.jsx)("p", {
        children: "We failed to run this plugin due to an unkown reason and have therefor disabled it. We recommend you to reinstall the plugin to make sure you are running a working version of this plugin."
      }));
  }
}
var Badges = __webpack_require__("./public/app/features/plugins/admin/components/Badges/index.ts");
var api = __webpack_require__("./public/app/features/plugins/admin/api.ts");
;







function GetStartedWithApp(_ref) {
  let {
    plugin
  } = _ref;
  const {
    value: pluginConfig
  } = usePluginConfig(plugin);

  if (!pluginConfig) {
    return null;
  }

  const {
    enabled,
    jsonData
  } = pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.meta;

  const enable = () => updatePluginSettingsAndReload(plugin.id, {
    enabled: true,
    pinned: true,
    jsonData
  });

  const disable = () => {
    updatePluginSettingsAndReload(plugin.id, {
      enabled: false,
      pinned: false,
      jsonData
    });
  };

  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [!enabled && (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      variant: "primary",
      onClick: enable,
      children: "Enable"
    }), enabled && (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      variant: "destructive",
      onClick: disable,
      children: "Disable"
    })]
  });
}

const updatePluginSettingsAndReload = async (id, data) => {
  try {
    await (0,api.P6)(id, data); 

    window.location.reload();
  } catch (e) {
    console.error('Error while updating the plugin', e);
  }
};
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var actions = __webpack_require__("./public/app/features/datasources/state/actions.ts");
var permissions = __webpack_require__("./public/app/features/plugins/admin/permissions.ts");
;






function GetStartedWithDataSource(_ref) {
  let {
    plugin
  } = _ref;
  const dispatch = (0,es.useDispatch)();
  const onAddDataSource = (0,react.useCallback)(() => {
    const meta = {
      name: plugin.name,
      id: plugin.id
    };
    dispatch((0,actions.J_)(meta));
  }, [dispatch, plugin]);

  if (!(0,permissions.Gg)()) {
    return null;
  }

  return (0,jsx_runtime.jsxs)(grafana_ui_src.Button, {
    variant: "primary",
    onClick: onAddDataSource,
    children: ["Create a ", plugin.name, " data source"]
  });
}
;





function GetStartedWithPlugin(_ref) {
  let {
    plugin
  } = _ref;

  if (!plugin.isInstalled || plugin.isDisabled) {
    return null;
  }

  switch (plugin.type) {
    case grafana_data_src.PluginType.datasource:
      return (0,jsx_runtime.jsx)(GetStartedWithDataSource, {
        plugin: plugin
      });

    case grafana_data_src.PluginType.app:
      return (0,jsx_runtime.jsx)(GetStartedWithApp, {
        plugin: plugin
      });

    default:
      return null;
  }
}
;

var hooks = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
;






function ExternallyManagedButton(_ref) {
  let {
    pluginId,
    pluginStatus
  } = _ref;
  const externalManageLink = `${(0,helpers/* getExternalManageLink */.Uj)(pluginId)}/?tab=installation`;

  if (pluginStatus === admin_types.vF.UPDATE) {
    return (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      height: "auto",
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        href: externalManageLink,
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Update via grafana.com"
      }), (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        variant: "destructive",
        href: externalManageLink,
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Uninstall via grafana.com"
      })]
    });
  }

  if (pluginStatus === admin_types.vF.UNINSTALL) {
    return (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
      variant: "destructive",
      href: externalManageLink,
      target: "_blank",
      rel: "noopener noreferrer",
      children: "Uninstall via grafana.com"
    });
  }

  return (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
    href: externalManageLink,
    target: "_blank",
    rel: "noopener noreferrer",
    children: "Install via grafana.com"
  });
}
var app_events = __webpack_require__("./public/app/core/app_events.ts");
;









function InstallControlsButton(_ref) {
  var _Button;

  let {
    plugin,
    pluginStatus,
    latestCompatibleVersion
  } = _ref;
  const {
    isInstalling,
    error: errorInstalling
  } = (0,hooks.IS)();
  const {
    isUninstalling,
    error: errorUninstalling
  } = (0,hooks.wq)();
  const install = (0,hooks.x3)();
  const uninstall = (0,hooks.S1)();
  const [isConfirmModalVisible, setIsConfirmModalVisible] = (0,react.useState)(false);

  const showConfirmModal = () => setIsConfirmModalVisible(true);

  const hideConfirmModal = () => setIsConfirmModalVisible(false);

  const uninstallBtnText = isUninstalling ? 'Uninstalling' : 'Uninstall';

  const onInstall = async () => {
    await install(plugin.id, latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version);

    if (!errorInstalling) {
      app_events.Z.emit(grafana_data_src.AppEvents.alertSuccess, [`Installed ${plugin.name}`]);
    }
  };

  const onUninstall = async () => {
    hideConfirmModal();
    await uninstall(plugin.id);

    if (!errorUninstalling) {
      app_events.Z.emit(grafana_data_src.AppEvents.alertSuccess, [`Uninstalled ${plugin.name}`]);
    }
  };

  const onUpdate = async () => {
    await install(plugin.id, latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version, true);

    if (!errorInstalling) {
      app_events.Z.emit(grafana_data_src.AppEvents.alertSuccess, [`Updated ${plugin.name}`]);
    }
  };

  if (pluginStatus === admin_types.vF.UNINSTALL) {
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.ConfirmModal, {
        isOpen: isConfirmModalVisible,
        title: `Uninstall ${plugin.name}`,
        body: "Are you sure you want to uninstall this plugin?",
        confirmText: "Confirm",
        icon: "exclamation-triangle",
        onConfirm: onUninstall,
        onDismiss: hideConfirmModal
      }), (0,jsx_runtime.jsx)(grafana_ui_src.HorizontalGroup, {
        height: "auto",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "destructive",
          disabled: isUninstalling,
          onClick: showConfirmModal,
          children: uninstallBtnText
        })
      })]
    });
  }

  if (pluginStatus === admin_types.vF.UPDATE) {
    return (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      height: "auto",
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        disabled: isInstalling,
        onClick: onUpdate,
        children: isInstalling ? 'Updating' : 'Update'
      }), _Button || (_Button = (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "destructive",
        disabled: isUninstalling,
        onClick: onUninstall,
        children: uninstallBtnText
      }))]
    });
  }

  return (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
    disabled: isInstalling,
    onClick: onInstall,
    children: isInstalling ? 'Installing' : 'Install'
  });
}
;
var _Icon, InstallControls_a, _Icon2;














const InstallControls = _ref => {
  let {
    plugin,
    latestCompatibleVersion
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(InstallControls_getStyles);
  const isExternallyManaged = src.config.pluginAdminExternalManageEnabled;
  const hasPermission = (0,permissions.bO)();
  const isRemotePluginsAvailable = (0,hooks.y9)();
  const isCompatible = Boolean(latestCompatibleVersion);
  const isInstallControlsDisabled = plugin.isCore || plugin.isDisabled || !(0,helpers.fG)();
  const pluginStatus = plugin.isInstalled ? plugin.hasUpdate ? admin_types.vF.UPDATE : admin_types.vF.UNINSTALL : admin_types.vF.INSTALL;

  if (isInstallControlsDisabled) {
    return null;
  }

  if (plugin.type === grafana_data_src.PluginType.renderer) {
    return (0,jsx_runtime.jsx)("div", {
      className: styles.message,
      children: "Renderer plugins cannot be managed by the Plugin Catalog."
    });
  }

  if (plugin.isEnterprise && !(0,src.featureEnabled)('enterprise.plugins')) {
    return (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      height: "auto",
      align: "center",
      children: [(0,jsx_runtime.jsx)("span", {
        className: styles.message,
        children: "No valid Grafana Enterprise license detected."
      }), (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        href: `${(0,helpers/* getExternalManageLink */.Uj)(plugin.id)}?utm_source=grafana_catalog_learn_more`,
        target: "_blank",
        rel: "noopener noreferrer",
        size: "sm",
        fill: "text",
        icon: "external-link-alt",
        children: "Learn more"
      })]
    });
  }

  if (plugin.isDev) {
    return (0,jsx_runtime.jsx)("div", {
      className: styles.message,
      children: "This is a development build of the plugin and can't be uninstalled."
    });
  }

  if (!hasPermission && !isExternallyManaged) {
    const message = `You do not have permission to ${pluginStatus} this plugin.`;
    return (0,jsx_runtime.jsx)("div", {
      className: styles.message,
      children: message
    });
  }

  if (!plugin.isPublished) {
    return (0,jsx_runtime.jsxs)("div", {
      className: styles.message,
      children: [_Icon || (_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "exclamation-triangle"
      })), " This plugin is not published to", ' ', InstallControls_a || (InstallControls_a = (0,jsx_runtime.jsx)("a", {
        href: "https://www.grafana.com/plugins",
        target: "__blank",
        rel: "noreferrer",
        children: "grafana.com/plugins"
      })), ' ', "and can't be managed via the catalog."]
    });
  }

  if (!isCompatible) {
    return (0,jsx_runtime.jsxs)("div", {
      className: styles.message,
      children: [_Icon2 || (_Icon2 = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "exclamation-triangle"
      })), "\xA0This plugin doesn't support your version of Grafana."]
    });
  }

  if (isExternallyManaged) {
    return (0,jsx_runtime.jsx)(ExternallyManagedButton, {
      pluginId: plugin.id,
      pluginStatus: pluginStatus
    });
  }

  if (!isRemotePluginsAvailable) {
    return (0,jsx_runtime.jsx)("div", {
      className: styles.message,
      children: "The install controls have been disabled because the Grafana server cannot access grafana.com."
    });
  }

  return (0,jsx_runtime.jsx)(InstallControlsButton, {
    plugin: plugin,
    pluginStatus: pluginStatus,
    latestCompatibleVersion: latestCompatibleVersion
  });
};
const InstallControls_getStyles = theme => {
  return {
    message: emotion_css_esm.css`
      color: ${theme.colors.text.secondary};
    `
  };
};
;

;






function PluginDetailsHeaderDependencies(_ref) {
  var _plugin$details, _plugin$details2, _plugin$details3;

  let {
    plugin,
    latestCompatibleVersion,
    className
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(PluginDetailsHeaderDependencies_getStyles);
  const pluginDependencies = (_plugin$details = plugin.details) === null || _plugin$details === void 0 ? void 0 : _plugin$details.pluginDependencies;
  const grafanaDependency = plugin.isInstalled ? (_plugin$details2 = plugin.details) === null || _plugin$details2 === void 0 ? void 0 : _plugin$details2.grafanaDependency : (latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.grafanaDependency) || ((_plugin$details3 = plugin.details) === null || _plugin$details3 === void 0 ? void 0 : _plugin$details3.grafanaDependency);
  const hasNoDependencyInfo = !grafanaDependency && (!pluginDependencies || !pluginDependencies.length);

  if (hasNoDependencyInfo) {
    return null;
  }

  return (0,jsx_runtime.jsxs)("div", {
    className: className,
    children: [(0,jsx_runtime.jsx)("div", {
      className: styles.dependencyTitle,
      children: "Dependencies:"
    }), Boolean(grafanaDependency) && (0,jsx_runtime.jsxs)("div", {
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "grafana",
        className: styles.icon
      }), "Grafana ", grafanaDependency]
    }), pluginDependencies && pluginDependencies.length > 0 && (0,jsx_runtime.jsx)("div", {
      children: pluginDependencies.map(p => {
        return (0,jsx_runtime.jsxs)("span", {
          children: [(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            name: admin_types.Co[p.type],
            className: styles.icon
          }), p.name, " ", p.version]
        }, p.name);
      })
    })]
  });
}
const PluginDetailsHeaderDependencies_getStyles = theme => {
  return {
    dependencyTitle: emotion_css_esm.css`
      font-weight: ${theme.typography.fontWeightBold};
      margin-right: ${theme.spacing(0.5)};

      &::after {
        content: '';
        padding: 0;
      }
    `,
    icon: emotion_css_esm.css`
      color: ${theme.colors.text.secondary};
      margin-right: ${theme.spacing(0.5)};
    `
  };
};
;








const SIGNATURE_ICONS = {
  [grafana_data_src.PluginSignatureType.grafana]: 'grafana',
  [grafana_data_src.PluginSignatureType.commercial]: 'shield',
  [grafana_data_src.PluginSignatureType.community]: 'shield',
  DEFAULT: 'shield-exclamation'
};
function PluginSignatureDetailsBadge(_ref) {
  let {
    signatureType,
    signatureOrg = ''
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(PluginSignatureDetailsBadge_getStyles);

  if (!signatureType && !signatureOrg) {
    return null;
  }

  const signatureTypeText = signatureType === grafana_data_src.PluginSignatureType.grafana ? 'Grafana Labs' : (0,lodash.capitalize)(signatureType);
  const signatureIcon = SIGNATURE_ICONS[signatureType || ''] || SIGNATURE_ICONS.DEFAULT;
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(DetailsBadge, {
      children: [(0,jsx_runtime.jsx)("strong", {
        className: styles.strong,
        children: "Level:\xA0"
      }), (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        size: "xs",
        name: signatureIcon
      }), "\xA0", signatureTypeText]
    }), (0,jsx_runtime.jsxs)(DetailsBadge, {
      children: [(0,jsx_runtime.jsx)("strong", {
        className: styles.strong,
        children: "Signed by:"
      }), " ", signatureOrg]
    })]
  });
}
const DetailsBadge = _ref2 => {
  let {
    children
  } = _ref2;
  const styles = (0,grafana_ui_src.useStyles2)(PluginSignatureDetailsBadge_getStyles);
  return (0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
    color: "green",
    className: styles.badge,
    text: (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: children
    })
  });
};

const PluginSignatureDetailsBadge_getStyles = theme => ({
  badge: emotion_css_esm.css`
    background-color: ${theme.colors.background.canvas};
    border-color: ${theme.colors.border.strong};
    color: ${theme.colors.text.secondary};
    margin-left: ${theme.spacing()};
  `,
  strong: emotion_css_esm.css`
    color: ${theme.colors.text.primary};
  `,
  icon: emotion_css_esm.css`
    margin-right: ${theme.spacing(0.5)};
  `
});
;







function PluginDetailsHeaderSignature(_ref) {
  let {
    plugin
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(PluginDetailsHeaderSignature_getStyles);
  const isSignatureValid = plugin.signature === grafana_data_src.PluginSignatureStatus.valid;
  return (0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [(0,jsx_runtime.jsx)("a", {
      href: "https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",
      target: "_blank",
      rel: "noreferrer",
      className: styles.link,
      children: (0,jsx_runtime.jsx)(grafana_ui_src.PluginSignatureBadge, {
        status: plugin.signature
      })
    }), isSignatureValid && (0,jsx_runtime.jsx)(PluginSignatureDetailsBadge, {
      signatureType: plugin.signatureType,
      signatureOrg: plugin.signatureOrg
    })]
  });
}
const PluginDetailsHeaderSignature_getStyles = theme => {
  return {
    container: emotion_css_esm.css`
      display: flex;
    `,
    link: emotion_css_esm.css`
      display: inline-flex;
      align-items: center;
    `
  };
};
var PluginLogo = __webpack_require__("./public/app/features/plugins/admin/components/PluginLogo.tsx");
;
var PluginDetailsHeader_Icon;













function PluginDetailsHeader(_ref) {
  var _plugin$details, _plugin$details2;

  let {
    plugin,
    currentUrl,
    parentUrl
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(PluginDetailsHeader_getStyles);
  const latestCompatibleVersion = (0,helpers.RU)((_plugin$details = plugin.details) === null || _plugin$details === void 0 ? void 0 : _plugin$details.versions);
  const version = plugin.installedVersion || (latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version);
  return (0,jsx_runtime.jsx)("div", {
    children: (0,jsx_runtime.jsx)("div", {
      className: "page-container",
      children: (0,jsx_runtime.jsxs)("div", {
        className: styles.headerContainer,
        children: [(0,jsx_runtime.jsx)(PluginLogo.E, {
          alt: `${plugin.name} logo`,
          src: plugin.info.logos.small,
          className: emotion_css_esm.css`
              object-fit: contain;
              width: 100%;
              height: 68px;
              max-width: 68px;
            `
        }), (0,jsx_runtime.jsxs)("div", {
          className: styles.headerWrapper,
          children: [(0,jsx_runtime.jsx)("nav", {
            className: styles.breadcrumb,
            "aria-label": "Breadcrumb",
            children: (0,jsx_runtime.jsxs)("ol", {
              children: [(0,jsx_runtime.jsx)("li", {
                children: (0,jsx_runtime.jsx)("a", {
                  className: styles.textUnderline,
                  href: parentUrl,
                  children: "Plugins"
                })
              }), (0,jsx_runtime.jsx)("li", {
                children: (0,jsx_runtime.jsx)("a", {
                  href: currentUrl,
                  "aria-current": "page",
                  children: plugin.name
                })
              })]
            })
          }), (0,jsx_runtime.jsxs)("div", {
            className: styles.headerInformationRow,
            children: [(0,jsx_runtime.jsx)("span", {
              children: plugin.orgName
            }), (_plugin$details2 = plugin.details) === null || _plugin$details2 === void 0 ? void 0 : _plugin$details2.links.map(link => (0,jsx_runtime.jsx)("a", {
              href: link.url,
              children: link.name
            }, link.name)), plugin.downloads > 0 && (0,jsx_runtime.jsxs)("span", {
              children: [PluginDetailsHeader_Icon || (PluginDetailsHeader_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
                name: "cloud-download"
              })), ` ${new Intl.NumberFormat().format(plugin.downloads)}`, ' ']
            }), Boolean(version) && (0,jsx_runtime.jsx)("span", {
              children: version
            }), (0,jsx_runtime.jsx)(PluginDetailsHeaderSignature, {
              plugin: plugin
            }), plugin.isDisabled && (0,jsx_runtime.jsx)(Badges.SX, {
              error: plugin.error
            })]
          }), (0,jsx_runtime.jsx)(PluginDetailsHeaderDependencies, {
            plugin: plugin,
            latestCompatibleVersion: latestCompatibleVersion,
            className: (0,emotion_css_esm.cx)(styles.headerInformationRow, styles.headerInformationRowSecondary)
          }), (0,jsx_runtime.jsx)("p", {
            children: plugin.description
          }), (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
            height: "auto",
            children: [(0,jsx_runtime.jsx)(InstallControls, {
              plugin: plugin,
              latestCompatibleVersion: latestCompatibleVersion
            }), (0,jsx_runtime.jsx)(GetStartedWithPlugin, {
              plugin: plugin
            })]
          })]
        })]
      })
    })
  });
}
const PluginDetailsHeader_getStyles = theme => {
  return {
    headerContainer: emotion_css_esm.css`
      display: flex;
      margin-bottom: ${theme.spacing(3)};
      margin-top: ${theme.spacing(3)};
      min-height: 120px;
    `,
    headerWrapper: emotion_css_esm.css`
      margin-left: ${theme.spacing(3)};
    `,
    breadcrumb: emotion_css_esm.css`
      font-size: ${theme.typography.h2.fontSize};
      li {
        display: inline;
        list-style: none;
        &::after {
          content: '/';
          padding: 0 0.25ch;
        }
        &:last-child::after {
          content: '';
        }
      }
    `,
    headerInformationRow: emotion_css_esm.css`
      display: flex;
      align-items: center;
      margin-top: ${theme.spacing()};
      margin-bottom: ${theme.spacing()};
      flex-flow: wrap;
      & > * {
        &::after {
          content: '|';
          padding: 0 ${theme.spacing()};
        }
        &:last-child::after {
          content: '';
          padding-right: 0;
        }
      }
      font-size: ${theme.typography.h4.fontSize};

      a {
        &:hover {
          text-decoration: underline;
        }
      }
    `,
    headerInformationRowSecondary: emotion_css_esm.css`
      font-size: ${theme.typography.body.fontSize};
    `,
    headerOrgName: emotion_css_esm.css`
      font-size: ${theme.typography.h4.fontSize};
    `,
    signature: emotion_css_esm.css`
      margin: ${theme.spacing(3)};
      margin-bottom: 0;
    `,
    textUnderline: emotion_css_esm.css`
      text-decoration: underline;
    `
  };
};
;
var PluginDetailsSignature_p, PluginDetailsSignature_a;







function PluginDetailsSignature(_ref) {
  let {
    className,
    plugin
  } = _ref;
  const isSignatureValid = plugin.signature === grafana_data_src.PluginSignatureStatus.valid;
  const isCore = plugin.signature === grafana_data_src.PluginSignatureStatus.internal;
  const isDisabled = plugin.isDisabled && isDisabledDueTooSignatureError(plugin.error); 

  if (isSignatureValid || isCore || isDisabled) {
    return null;
  }

  return (0,jsx_runtime.jsxs)(grafana_ui_src.Alert, {
    severity: "warning",
    title: "Invalid plugin signature",
    "aria-label": grafana_e2e_selectors_src.wl.pages.PluginPage.signatureInfo,
    className: className,
    children: [PluginDetailsSignature_p || (PluginDetailsSignature_p = (0,jsx_runtime.jsx)("p", {
      children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. Plugin signature verification is part of our security measures to ensure plugins are safe and trustworthy. Grafana Labs can\u2019t guarantee the integrity of this unsigned plugin. Ask the plugin author to request it to be signed."
    })), PluginDetailsSignature_a || (PluginDetailsSignature_a = (0,jsx_runtime.jsx)("a", {
      href: "https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",
      className: "external-link",
      target: "_blank",
      rel: "noreferrer",
      children: "Read more about plugins signing."
    }))]
  });
}

function isDisabledDueTooSignatureError(error) {
  switch (error) {
    case grafana_data_src.PluginErrorCode.invalidSignature:
    case grafana_data_src.PluginErrorCode.missingSignature:
    case grafana_data_src.PluginErrorCode.modifiedSignature:
      return true;

    default:
      return false;
  }
}
var react_router = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
;






const usePluginDetailsTabs = function (plugin) {
  let defaultTabs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const {
    loading,
    error,
    value: pluginConfig
  } = usePluginConfig(plugin);
  const isPublished = Boolean(plugin === null || plugin === void 0 ? void 0 : plugin.isPublished);
  const {
    pathname
  } = (0,react_router.TH)();
  const [tabs, defaultTab] = (0,react.useMemo)(() => {
    const canConfigurePlugins = (0,permissions.RN)();
    const tabs = [...defaultTabs];
    let defaultTab;

    if (isPublished) {
      tabs.push({
        label: admin_types.xc.VERSIONS,
        icon: 'history',
        id: admin_types.tu.VERSIONS,
        href: `${pathname}?page=${admin_types/* PluginTabIds.VERSIONS */.tu.VERSIONS}`
      });
    } 


    if (!pluginConfig) {
      defaultTab = admin_types.tu.OVERVIEW;
      return [tabs, defaultTab];
    }

    if (canConfigurePlugins) {
      if (pluginConfig.meta.type === grafana_data_src.PluginType.app) {
        var _pluginConfig$meta$in;

        if (pluginConfig.angularConfigCtrl) {
          tabs.push({
            label: 'Config',
            icon: 'cog',
            id: admin_types.tu.CONFIG,
            href: `${pathname}?page=${admin_types/* PluginTabIds.CONFIG */.tu.CONFIG}`
          });
          defaultTab = admin_types.tu.CONFIG;
        }

        if (pluginConfig.configPages) {
          for (const page of pluginConfig.configPages) {
            tabs.push({
              label: page.title,
              icon: page.icon,
              id: page.id,
              href: `${pathname}?page=${page.id}`
            });

            if (!defaultTab) {
              defaultTab = page.id;
            }
          }
        }

        if ((_pluginConfig$meta$in = pluginConfig.meta.includes) !== null && _pluginConfig$meta$in !== void 0 && _pluginConfig$meta$in.find(include => include.type === grafana_data_src.PluginIncludeType.dashboard)) {
          tabs.push({
            label: 'Dashboards',
            icon: 'apps',
            id: admin_types.tu.DASHBOARDS,
            href: `${pathname}?page=${admin_types/* PluginTabIds.DASHBOARDS */.tu.DASHBOARDS}`
          });
        }
      }
    }

    if (!defaultTab) {
      defaultTab = admin_types.tu.OVERVIEW;
    }

    return [tabs, defaultTab];
  }, [pluginConfig, defaultTabs, pathname, isPublished]);
  return {
    error,
    loading,
    tabs,
    defaultTab
  };
};
;
var _Page, PluginDetails_br;



















function PluginDetails(_ref) {
  var _a;

  let {
    match,
    queryParams
  } = _ref;
  const {
    params: {
      pluginId = ''
    },
    url
  } = match;
  const parentUrl = url.substring(0, url.lastIndexOf('/'));
  const defaultTabs = [{
    label: admin_types.xc.OVERVIEW,
    icon: 'file-alt',
    id: admin_types.tu.OVERVIEW,
    href: `${url}?page=${admin_types/* PluginTabIds.OVERVIEW */.tu.OVERVIEW}`
  }];
  const plugin = (0,hooks.bJ)(pluginId); 

  const {
    tabs,
    defaultTab
  } = usePluginDetailsTabs(plugin, defaultTabs);
  const {
    isLoading: isFetchLoading
  } = (0,hooks.ZV)();
  const {
    isLoading: isFetchDetailsLoading
  } = (0,hooks.bt)();
  const styles = (0,grafana_ui_src.useStyles2)(PluginDetails_getStyles);
  const prevTabs = (0,usePrevious.Z)(tabs);
  const pageId = queryParams.page || defaultTab; 

  (0,react.useEffect)(() => {
    const hasUninstalledWithConfigPages = prevTabs && prevTabs.length > tabs.length;
    const isViewingAConfigPage = pageId !== admin_types.tu.OVERVIEW && pageId !== admin_types.tu.VERSIONS;

    if (hasUninstalledWithConfigPages && isViewingAConfigPage) {
      src.locationService.replace(`${url}?page=${admin_types/* PluginTabIds.OVERVIEW */.tu.OVERVIEW}`);
    }
  }, [pageId, url, tabs, prevTabs]);

  if (isFetchLoading || isFetchDetailsLoading) {
    return _Page || (_Page = (0,jsx_runtime.jsx)(Page.T, {
      children: (0,jsx_runtime.jsx)(Loader.a, {})
    }));
  }

  if (!plugin) {
    return (0,jsx_runtime.jsx)(Layout.Ar, {
      justify: "center",
      align: "center",
      children: (0,jsx_runtime.jsxs)(grafana_ui_src.Alert, {
        severity: types.F1.Warning,
        title: "Plugin not found",
        children: ["That plugin cannot be found. Please check the url is correct or ", PluginDetails_br || (PluginDetails_br = (0,jsx_runtime.jsx)("br", {})), "go to the ", _a || (_a = (0,jsx_runtime.jsx)("a", {
          href: parentUrl,
          children: "plugin catalog"
        })), "."]
      })
    });
  }

  return (0,jsx_runtime.jsxs)(Page.T, {
    children: [(0,jsx_runtime.jsx)(PluginDetailsHeader, {
      currentUrl: `${url}?page=${pageId}`,
      parentUrl: parentUrl,
      plugin: plugin
    }), (0,jsx_runtime.jsxs)(Page.T.Contents, {
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.TabsBar, {
        children: tabs.map(tab => {
          return (0,jsx_runtime.jsx)(grafana_ui_src.Tab, {
            label: tab.label,
            href: tab.href,
            icon: tab.icon,
            active: tab.id === pageId
          }, tab.label);
        })
      }), (0,jsx_runtime.jsxs)(grafana_ui_src.TabContent, {
        className: styles.tabContent,
        children: [(0,jsx_runtime.jsx)(PluginDetailsSignature, {
          plugin: plugin,
          className: styles.alert
        }), (0,jsx_runtime.jsx)(PluginDetailsDisabledError, {
          plugin: plugin,
          className: styles.alert
        }), (0,jsx_runtime.jsx)(PluginDetailsBody, {
          queryParams: queryParams,
          plugin: plugin,
          pageId: pageId
        })]
      })]
    })]
  });
}
const PluginDetails_getStyles = theme => {
  return {
    alert: emotion_css_esm.css`
      margin: ${theme.spacing(3)};
      margin-bottom: 0;
    `,
    tabContent: emotion_css_esm.css`
      overflow: auto;
    `
  };
};

 }),

 "./public/app/features/plugins/admin/state/hooks.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "iY": () => ( useDisplayMode),
  "bt": () => ( useFetchDetailsStatus),
  "ZV": () => ( useFetchStatus),
  "GE": () => ( useGetAllWithFilters),
  "UQ": () => ( useGetErrors),
  "bJ": () => ( useGetSingle),
  "x3": () => ( useInstall),
  "IS": () => ( useInstallStatus),
  "y9": () => ( useIsRemotePluginsAvailable),
  "S1": () => ( useUninstall),
  "wq": () => ( useUninstallStatus)
});


var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var helpers = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
var actions = __webpack_require__("./public/app/features/plugins/admin/state/actions.ts");
var reducer = __webpack_require__("./public/app/features/plugins/admin/state/reducer.ts");
var reselect_es = __webpack_require__("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js");
var types = __webpack_require__("./public/app/features/plugins/admin/types.ts");
;



const selectRoot = state => state.plugins;
const selectItems = (0,reselect_es.P1)(selectRoot, _ref => {
  let {
    items
  } = _ref;
  return items;
});
const selectDisplayMode = (0,reselect_es.P1)(selectRoot, _ref2 => {
  let {
    settings
  } = _ref2;
  return settings.displayMode;
});
const {
  selectAll: selectors_selectAll,
  selectById
} = reducer.CD.getSelectors(selectItems);

const selectInstalled = filterBy => (0,reselect_es.P1)(selectors_selectAll, plugins => plugins.filter(plugin => filterBy === 'installed' ? plugin.isInstalled : !plugin.isCore));

const findByInstallAndType = (filterBy, filterByType) => (0,reselect_es.P1)(selectInstalled(filterBy), plugins => plugins.filter(plugin => filterByType === 'all' || plugin.type === filterByType));

const findByKeyword = searchBy => (0,reselect_es.P1)(selectors_selectAll, plugins => {
  if (searchBy === '') {
    return [];
  }

  return plugins.filter(plugin => {
    const fields = [];

    if (plugin.name) {
      fields.push(plugin.name.toLowerCase());
    }

    if (plugin.orgName) {
      fields.push(plugin.orgName.toLowerCase());
    }

    return fields.some(f => f.includes(searchBy.toLowerCase()));
  });
});

const find = (searchBy, filterBy, filterByType) => (0,reselect_es.P1)(findByInstallAndType(filterBy, filterByType), findByKeyword(searchBy), (filteredPlugins, searchedPlugins) => {
  return searchBy === '' ? filteredPlugins : searchedPlugins;
});
const selectPluginErrors = (0,reselect_es.P1)(selectors_selectAll, plugins => plugins ? plugins.filter(p => Boolean(p.error)).map(p => ({
  pluginId: p.id,
  errorCode: p.error
})) : []); 

const selectRequest = actionType => (0,reselect_es.P1)(selectRoot, _ref3 => {
  let {
    requests = {}
  } = _ref3;
  return requests[actionType];
});
const selectIsRequestPending = actionType => (0,reselect_es.P1)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === types.eE.Pending);
const selectRequestError = actionType => (0,reselect_es.P1)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === types.eE.Rejected ? request === null || request === void 0 ? void 0 : request.error : null);
const selectIsRequestNotFetched = actionType => (0,reselect_es.P1)(selectRequest(actionType), request => request === undefined);
;






const useGetAllWithFilters = _ref => {
  let {
    query = '',
    filterBy = 'installed',
    filterByType = 'all',
    sortBy = helpers.Nh.nameAsc
  } = _ref;
  useFetchAll();
  const filtered = (0,es.useSelector)(find(query, filterBy, filterByType));
  const {
    isLoading,
    error
  } = useFetchStatus();
  const sortedAndFiltered = (0,helpers.AA)(filtered, sortBy);
  return {
    isLoading,
    error,
    plugins: sortedAndFiltered
  };
};
const useGetAll = () => {
  useFetchAll();
  return useSelector(selectAll);
};
const useGetSingle = id => {
  useFetchAll();
  useFetchDetails(id);
  return (0,es.useSelector)(state => selectById(state, id));
};
const useGetErrors = () => {
  useFetchAll();
  return (0,es.useSelector)(selectPluginErrors);
};
const useInstall = () => {
  const dispatch = (0,es.useDispatch)();
  return (id, version, isUpdating) => dispatch((0,actions.N9)({
    id,
    version,
    isUpdating
  }));
};
const useUninstall = () => {
  const dispatch = (0,es.useDispatch)();
  return id => dispatch((0,actions.Tz)(id));
};
const useIsRemotePluginsAvailable = () => {
  const error = (0,es.useSelector)(selectRequestError(actions.tQ.typePrefix));
  return error === null;
};
const useFetchStatus = () => {
  const isLoading = (0,es.useSelector)(selectIsRequestPending(actions.Qd.typePrefix));
  const error = (0,es.useSelector)(selectRequestError(actions.Qd.typePrefix));
  return {
    isLoading,
    error
  };
};
const useFetchDetailsStatus = () => {
  const isLoading = (0,es.useSelector)(selectIsRequestPending(actions.DD.typePrefix));
  const error = (0,es.useSelector)(selectRequestError(actions.DD.typePrefix));
  return {
    isLoading,
    error
  };
};
const useInstallStatus = () => {
  const isInstalling = (0,es.useSelector)(selectIsRequestPending(actions.N9.typePrefix));
  const error = (0,es.useSelector)(selectRequestError(actions.N9.typePrefix));
  return {
    isInstalling,
    error
  };
};
const useUninstallStatus = () => {
  const isUninstalling = (0,es.useSelector)(selectIsRequestPending(actions.Tz.typePrefix));
  const error = (0,es.useSelector)(selectRequestError(actions.Tz.typePrefix));
  return {
    isUninstalling,
    error
  };
}; 

const useFetchAll = () => {
  const dispatch = (0,es.useDispatch)();
  const isNotFetched = (0,es.useSelector)(selectIsRequestNotFetched(actions.Qd.typePrefix));
  (0,react.useEffect)(() => {
    isNotFetched && dispatch((0,actions.Qd)());
  }, []); 
};
const useFetchDetails = id => {
  const dispatch = (0,es.useDispatch)();
  const plugin = (0,es.useSelector)(state => selectById(state, id));
  const isNotFetching = !(0,es.useSelector)(selectIsRequestPending(actions.DD.typePrefix));
  const shouldFetch = isNotFetching && plugin && !plugin.details;
  (0,react.useEffect)(() => {
    shouldFetch && dispatch((0,actions.DD)(id));
  }, [plugin]); 
};
const useDisplayMode = () => {
  const dispatch = (0,es.useDispatch)();
  const displayMode = (0,es.useSelector)(selectDisplayMode);
  return {
    displayMode,
    setDisplayMode: v => dispatch((0,reducer.UC)(v))
  };
};

 }),

 "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Z": () => ( usePrevious)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function usePrevious(state) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        ref.current = state;
    });
    return ref.current;
}


 })

}]);