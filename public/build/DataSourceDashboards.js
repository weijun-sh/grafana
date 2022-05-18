"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DataSourceDashboards"],{

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

/***/ "./public/app/features/datasources/DashboardsTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _td;






const DashboardsTable = ({
  dashboards,
  onImport,
  onRemove
}) => {
  function buttonText(dashboard) {
    return dashboard.revision !== dashboard.importedRevision ? 'Update' : 'Re-import';
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("table", {
    className: "filter-table",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody", {
      children: dashboards.map((dashboard, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
          children: [_td || (_td = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            className: "width-1",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              name: "apps"
            })
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
            children: dashboard.imported ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
              href: dashboard.importedUrl,
              children: dashboard.title
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
              children: dashboard.title
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("td", {
            style: {
              textAlign: 'right'
            },
            children: [!dashboard.imported ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              size: "sm",
              onClick: () => onImport(dashboard, false),
              children: "Import"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              variant: "secondary",
              size: "sm",
              onClick: () => onImport(dashboard, true),
              children: buttonText(dashboard)
            }), dashboard.imported && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardsTable);

/***/ }),

/***/ "./public/app/features/datasources/DataSourceDashboards.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSourceDashboards": () => (/* binding */ DataSourceDashboards),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _dashboard_state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/state/actions.ts");
/* harmony import */ var _plugins_admin_state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/state/actions.ts");
/* harmony import */ var _DashboardsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/datasources/DashboardsTable.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function mapStateToProps(state, props) {
  const dataSourceId = props.match.params.uid;
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)(state.navIndex, `datasource-dashboards-${dataSourceId}`),
    dashboards: state.plugins.dashboards,
    dataSource: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_8__.getDataSource)(state.dataSources, dataSourceId),
    isLoading: state.plugins.isLoadingPluginDashboards,
    dataSourceId
  };
}

const mapDispatchToProps = {
  importDashboard: _dashboard_state_actions__WEBPACK_IMPORTED_MODULE_4__.importDashboard,
  loadDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_7__.loadDataSource,
  loadPluginDashboards: _plugins_admin_state_actions__WEBPACK_IMPORTED_MODULE_5__.loadPluginDashboards,
  removeDashboard: _dashboard_state_actions__WEBPACK_IMPORTED_MODULE_4__.removeDashboard
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class DataSourceDashboards extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onImport", (dashboard, overwrite) => {
      const {
        dataSource,
        importDashboard
      } = this.props;
      const data = {
        pluginId: dashboard.pluginId,
        path: dashboard.path,
        overwrite,
        inputs: []
      };

      if (dataSource) {
        data.inputs.push({
          name: '*',
          type: 'datasource',
          pluginId: dataSource.type,
          value: dataSource.name
        });
      }

      importDashboard(data, dashboard.title);
    });

    _defineProperty(this, "onRemove", dashboard => {
      this.props.removeDashboard(dashboard.uid);
    });
  }

  async componentDidMount() {
    const {
      loadDataSource,
      dataSourceId
    } = this.props;
    await loadDataSource(dataSourceId);
    this.props.loadPluginDashboards();
  }

  render() {
    const {
      dashboards,
      navModel,
      isLoading
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
        isLoading: isLoading,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_DashboardsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
          dashboards: dashboards,
          onImport: (dashboard, overwrite) => this.onImport(dashboard, overwrite),
          onRemove: dashboard => this.onRemove(dashboard)
        })
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(DataSourceDashboards));

/***/ }),

/***/ "./public/app/features/datasources/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDataSource": () => (/* binding */ addDataSource),
/* harmony export */   "deleteDataSource": () => (/* binding */ deleteDataSource),
/* harmony export */   "findNewName": () => (/* binding */ findNewName),
/* harmony export */   "getDataSourceUsingUidOrId": () => (/* binding */ getDataSourceUsingUidOrId),
/* harmony export */   "initDataSourceSettings": () => (/* binding */ initDataSourceSettings),
/* harmony export */   "loadDataSource": () => (/* binding */ loadDataSource),
/* harmony export */   "loadDataSourceMeta": () => (/* binding */ loadDataSourceMeta),
/* harmony export */   "loadDataSourcePlugins": () => (/* binding */ loadDataSourcePlugins),
/* harmony export */   "loadDataSources": () => (/* binding */ loadDataSources),
/* harmony export */   "nameExits": () => (/* binding */ nameExits),
/* harmony export */   "testDataSource": () => (/* binding */ testDataSource),
/* harmony export */   "updateDataSource": () => (/* binding */ updateDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var app_features_plugins_pluginSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/pluginSettings.ts");
/* harmony import */ var app_features_plugins_plugin_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/plugin_loader.ts");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _buildCategories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/datasources/state/buildCategories.ts");
/* harmony import */ var _navModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/datasources/state/navModel.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/datasources/state/reducers.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");














const initDataSourceSettings = (pageId, dependencies = {
  loadDataSource,
  loadDataSourceMeta,
  getDataSource: _selectors__WEBPACK_IMPORTED_MODULE_12__.getDataSource,
  getDataSourceMeta: _selectors__WEBPACK_IMPORTED_MODULE_12__.getDataSourceMeta,
  importDataSourcePlugin: app_features_plugins_plugin_loader__WEBPACK_IMPORTED_MODULE_7__.importDataSourcePlugin
}) => {
  return async (dispatch, getState) => {
    if (!pageId) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.initDataSourceSettingsFailed)(new Error('Invalid ID')));
      return;
    }

    try {
      const loadedDataSource = await dispatch(dependencies.loadDataSource(pageId));
      await dispatch(dependencies.loadDataSourceMeta(loadedDataSource)); // have we already loaded the plugin then we can skip the steps below?

      if (getState().dataSourceSettings.plugin) {
        return;
      }

      const dataSource = dependencies.getDataSource(getState().dataSources, pageId);
      const dataSourceMeta = dependencies.getDataSourceMeta(getState().dataSources, dataSource.type);
      const importedPlugin = await dependencies.importDataSourcePlugin(dataSourceMeta);
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.initDataSourceSettingsSucceeded)(importedPlugin));
    } catch (err) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.initDataSourceSettingsFailed)(err));
    }
  };
};
const testDataSource = (dataSourceName, dependencies = {
  getDatasourceSrv: app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__.getDatasourceSrv,
  getBackendSrv: app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv
}) => {
  return async (dispatch, getState) => {
    const dsApi = await dependencies.getDatasourceSrv().get(dataSourceName);

    if (!dsApi.testDatasource) {
      return;
    }

    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.testDataSourceStarting)());
    dependencies.getBackendSrv().withNoBackendCache(async () => {
      try {
        const result = await dsApi.testDatasource();
        dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.testDataSourceSucceeded)(result));
      } catch (err) {
        const {
          statusText,
          message: errMessage,
          details,
          data
        } = err;
        const message = errMessage || (data === null || data === void 0 ? void 0 : data.message) || 'HTTP error ' + statusText;
        dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.testDataSourceFailed)({
          message,
          details
        }));
      }
    });
  };
};
function loadDataSources() {
  return async dispatch => {
    const response = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().get('/api/datasources');
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.dataSourcesLoaded)(response));
  };
}
function loadDataSource(uid) {
  return async dispatch => {
    const dataSource = await getDataSourceUsingUidOrId(uid);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.dataSourceLoaded)(dataSource));
    return dataSource;
  };
}
function loadDataSourceMeta(dataSource) {
  return async dispatch => {
    const pluginInfo = await (0,app_features_plugins_pluginSettings__WEBPACK_IMPORTED_MODULE_6__.getPluginSettings)(dataSource.type);
    const plugin = await (0,app_features_plugins_plugin_loader__WEBPACK_IMPORTED_MODULE_7__.importDataSourcePlugin)(pluginInfo);
    const isBackend = plugin.DataSourceClass.prototype instanceof _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend;
    const meta = Object.assign({}, pluginInfo, {
      isBackend: pluginInfo.backend || isBackend
    });
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.dataSourceMetaLoaded)(meta));
    plugin.meta = meta;
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.updateNavIndex)((0,_navModel__WEBPACK_IMPORTED_MODULE_10__.buildNavModel)(dataSource, plugin)));
  };
}
/**
 * Get data source by uid or id, if old id detected handles redirect
 */

async function getDataSourceUsingUidOrId(uid) {
  // Try first with uid api
  try {
    const byUid = await (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.lastValueFrom)((0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().fetch({
      method: 'GET',
      url: `/api/datasources/uid/${uid}`,
      params: (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_4__.accessControlQueryParam)(),
      showErrorAlert: false
    }));

    if (byUid.ok) {
      return byUid.data;
    }
  } catch (err) {
    console.log('Failed to lookup data source by uid', err);
  } // try lookup by old db id


  const id = typeof uid === 'string' ? parseInt(uid, 10) : uid;

  if (!Number.isNaN(id)) {
    const response = await (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.lastValueFrom)((0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().fetch({
      method: 'GET',
      url: `/api/datasources/${id}`,
      params: (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_4__.accessControlQueryParam)(),
      showErrorAlert: false
    })); // If the uid is a number, then this is a refresh on one of the settings tabs
    // and we can return the response data

    if (response.ok && typeof uid === 'number' && response.data.id === uid) {
      return response.data;
    } // Not ideal to do a full page reload here but so tricky to handle this
    // otherwise We can update the location using react router, but need to
    // fully reload the route as the nav model page index is not matching with
    // the url in that case. And react router has no way to unmount remount a
    // route


    if (response.ok && response.data.id.toString() === uid) {
      window.location.href = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.locationUtil.assureBaseUrl(`/datasources/edit/${response.data.uid}`);
      return {}; // avoids flashing an error
    }
  }

  throw Error('Could not find data source');
}
function addDataSource(plugin) {
  return async (dispatch, getStore) => {
    await dispatch(loadDataSources());
    const dataSources = getStore().dataSources.dataSources;
    const newInstance = {
      name: plugin.name,
      type: plugin.id,
      access: 'proxy',
      isDefault: dataSources.length === 0
    };

    if (nameExits(dataSources, newInstance.name)) {
      newInstance.name = findNewName(dataSources, newInstance.name);
    }

    const result = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post('/api/datasources', newInstance);
    await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__.getDatasourceSrv)().reload();
    await _core_services_context_srv__WEBPACK_IMPORTED_MODULE_8__.contextSrv.fetchUserPermissions();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(`/datasources/edit/${result.datasource.uid}`);
  };
}
function loadDataSourcePlugins() {
  return async dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.dataSourcePluginsLoad)());
    const plugins = await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().get('/api/plugins', {
      enabled: 1,
      type: 'datasource'
    });
    const categories = (0,_buildCategories__WEBPACK_IMPORTED_MODULE_9__.buildCategories)(plugins);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_11__.dataSourcePluginsLoaded)({
      plugins,
      categories
    }));
  };
}
function updateDataSource(dataSource) {
  return async dispatch => {
    await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().put(`/api/datasources/${dataSource.id}`, dataSource); // by UID not yet supported

    await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__.getDatasourceSrv)().reload();
    return dispatch(loadDataSource(dataSource.uid));
  };
}
function deleteDataSource() {
  return async (dispatch, getStore) => {
    const dataSource = getStore().dataSources.dataSource;
    await (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().delete(`/api/datasources/${dataSource.id}`);
    await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_5__.getDatasourceSrv)().reload();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push('/datasources');
  };
}
function nameExits(dataSources, name) {
  return dataSources.filter(dataSource => {
    return dataSource.name.toLowerCase() === name.toLowerCase();
  }).length > 0;
}
function findNewName(dataSources, name) {
  // Need to loop through current data sources to make sure
  // the name doesn't exist
  while (nameExits(dataSources, name)) {
    // If there's a duplicate name that doesn't end with '-x'
    // we can add -1 to the name and be done.
    if (!nameHasSuffix(name)) {
      name = `${name}-1`;
    } else {
      // if there's a duplicate name that ends with '-x'
      // we can try to increment the last digit until the name is unique
      // remove the 'x' part and replace it with the new number
      name = `${getNewName(name)}${incrementLastDigit(getLastDigit(name))}`;
    }
  }

  return name;
}

function nameHasSuffix(name) {
  return name.endsWith('-', name.length - 1);
}

function getLastDigit(name) {
  return parseInt(name.slice(-1), 10);
}

function incrementLastDigit(digit) {
  return isNaN(digit) ? 1 : digit + 1;
}

function getNewName(name) {
  return name.slice(0, name.length - 1);
}

/***/ }),

/***/ "./public/app/features/datasources/state/buildCategories.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildCategories": () => (/* binding */ buildCategories)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");


function buildCategories(plugins) {
  const categories = [{
    id: 'tsdb',
    title: 'Time series databases',
    plugins: []
  }, {
    id: 'logging',
    title: 'Logging & document databases',
    plugins: []
  }, {
    id: 'tracing',
    title: 'Distributed tracing',
    plugins: []
  }, {
    id: 'sql',
    title: 'SQL',
    plugins: []
  }, {
    id: 'cloud',
    title: 'Cloud',
    plugins: []
  }, {
    id: 'enterprise',
    title: 'Enterprise plugins',
    plugins: []
  }, {
    id: 'iot',
    title: 'Industrial & IoT',
    plugins: []
  }, {
    id: 'other',
    title: 'Others',
    plugins: []
  }].filter(item => item);
  const categoryIndex = {};
  const pluginIndex = {};
  const enterprisePlugins = getEnterprisePhantomPlugins(); // build indices

  for (const category of categories) {
    categoryIndex[category.id] = category;
  }

  for (const plugin of plugins) {
    const enterprisePlugin = enterprisePlugins.find(item => item.id === plugin.id); // Force category for enterprise plugins

    if (plugin.enterprise || enterprisePlugin) {
      var _enterprisePlugin$inf;

      plugin.category = 'enterprise';
      plugin.unlicensed = !(0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('enterprise.plugins');
      plugin.info.links = (enterprisePlugin === null || enterprisePlugin === void 0 ? void 0 : (_enterprisePlugin$inf = enterprisePlugin.info) === null || _enterprisePlugin$inf === void 0 ? void 0 : _enterprisePlugin$inf.links) || plugin.info.links;
    } // Fix link name


    if (plugin.info.links) {
      for (const link of plugin.info.links) {
        link.name = 'Learn more';
      }
    }

    const category = categories.find(item => item.id === plugin.category) || categoryIndex['other'];
    category.plugins.push(plugin); // add to plugin index

    pluginIndex[plugin.id] = plugin;
  }

  for (const category of categories) {
    // add phantom plugin
    if (category.id === 'cloud') {
      category.plugins.push(getGrafanaCloudPhantomPlugin());
    } // add phantom plugins


    if (category.id === 'enterprise') {
      for (const plugin of enterprisePlugins) {
        if (!pluginIndex[plugin.id]) {
          category.plugins.push(plugin);
        }
      }
    }

    sortPlugins(category.plugins);
  } // Only show categories with plugins


  return categories.filter(c => c.plugins.length > 0);
}

function sortPlugins(plugins) {
  const sortingRules = {
    prometheus: 100,
    graphite: 95,
    loki: 90,
    mysql: 80,
    jaeger: 100,
    postgres: 79,
    gcloud: -1
  };
  plugins.sort((a, b) => {
    const aSort = sortingRules[a.id] || 0;
    const bSort = sortingRules[b.id] || 0;

    if (aSort > bSort) {
      return -1;
    }

    if (aSort < bSort) {
      return 1;
    }

    return a.name > b.name ? -1 : 1;
  });
}

function getEnterprisePhantomPlugins() {
  return [getPhantomPlugin({
    id: 'grafana-splunk-datasource',
    name: 'Splunk',
    description: 'Visualize and explore Splunk logs',
    imgUrl: 'public/img/plugins/splunk_logo_128.png'
  }), getPhantomPlugin({
    id: 'grafana-oracle-datasource',
    name: 'Oracle',
    description: 'Visualize and explore Oracle SQL',
    imgUrl: 'public/img/plugins/oracle.png'
  }), getPhantomPlugin({
    id: 'grafana-dynatrace-datasource',
    name: 'Dynatrace',
    description: 'Visualize and explore Dynatrace data',
    imgUrl: 'public/img/plugins/dynatrace.png'
  }), getPhantomPlugin({
    id: 'grafana-servicenow-datasource',
    description: 'ServiceNow integration and data source',
    name: 'ServiceNow',
    imgUrl: 'public/img/plugins/servicenow.svg'
  }), getPhantomPlugin({
    id: 'grafana-datadog-datasource',
    description: 'DataDog integration and data source',
    name: 'DataDog',
    imgUrl: 'public/img/plugins/datadog.png'
  }), getPhantomPlugin({
    id: 'grafana-newrelic-datasource',
    description: 'New Relic integration and data source',
    name: 'New Relic',
    imgUrl: 'public/img/plugins/newrelic.svg'
  }), getPhantomPlugin({
    id: 'grafana-mongodb-datasource',
    description: 'MongoDB integration and data source',
    name: 'MongoDB',
    imgUrl: 'public/img/plugins/mongodb.svg'
  }), getPhantomPlugin({
    id: 'grafana-snowflake-datasource',
    description: 'Snowflake integration and data source',
    name: 'Snowflake',
    imgUrl: 'public/img/plugins/snowflake.svg'
  }), getPhantomPlugin({
    id: 'grafana-wavefront-datasource',
    description: 'Wavefront integration and data source',
    name: 'Wavefront',
    imgUrl: 'public/img/plugins/wavefront.svg'
  }), getPhantomPlugin({
    id: 'dlopes7-appdynamics-datasource',
    description: 'AppDynamics integration and data source',
    name: 'AppDynamics',
    imgUrl: 'public/img/plugins/appdynamics.svg'
  }), getPhantomPlugin({
    id: 'grafana-saphana-datasource',
    description: 'SAP HANA® integration and data source',
    name: 'SAP HANA®',
    imgUrl: 'public/img/plugins/sap_hana.png'
  }), getPhantomPlugin({
    id: 'grafana-honeycomb-datasource',
    description: 'Honeycomb integration and datasource',
    name: 'Honeycomb',
    imgUrl: 'public/img/plugins/honeycomb.png'
  }), getPhantomPlugin({
    id: 'grafana-salesforce-datasource',
    description: 'Salesforce integration and datasource',
    name: 'Salesforce',
    imgUrl: 'public/img/plugins/salesforce.svg'
  }), getPhantomPlugin({
    id: 'grafana-jira-datasource',
    description: 'Jira integration and datasource',
    name: 'Jira',
    imgUrl: 'public/img/plugins/jira_logo.png'
  }), getPhantomPlugin({
    id: 'grafana-gitlab-datasource',
    description: 'GitLab integration and datasource',
    name: 'GitLab',
    imgUrl: 'public/img/plugins/gitlab.svg'
  }), getPhantomPlugin({
    id: 'grafana-splunk-monitoring-datasource',
    description: 'SignalFx integration and datasource',
    name: 'Splunk Infrastructure Monitoring',
    imgUrl: 'public/img/plugins/signalfx-logo.svg'
  })];
}

function getGrafanaCloudPhantomPlugin() {
  return {
    id: 'gcloud',
    name: 'Grafana Cloud',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.datasource,
    module: 'phantom',
    baseUrl: '',
    info: {
      description: 'Hosted Graphite, Prometheus, and Loki',
      logos: {
        small: 'public/img/grafana_icon.svg',
        large: 'asd'
      },
      author: {
        name: 'Grafana Labs'
      },
      links: [{
        url: 'https://grafana.com/products/cloud/',
        name: 'Learn more'
      }],
      screenshots: [],
      updated: '2019-05-10',
      version: '1.0.0'
    }
  };
}

function getPhantomPlugin(options) {
  return {
    id: options.id,
    name: options.name,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.datasource,
    module: 'phantom',
    baseUrl: '',
    info: {
      description: options.description,
      logos: {
        small: options.imgUrl,
        large: options.imgUrl
      },
      author: {
        name: 'Grafana Labs'
      },
      links: [{
        url: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.pluginCatalogURL + options.id,
        name: 'Install now'
      }],
      screenshots: [],
      updated: '2019-05-10',
      version: '1.0.0'
    }
  };
}

/***/ }),

/***/ "./public/app/features/datasources/state/navModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildNavModel": () => (/* binding */ buildNavModel),
/* harmony export */   "getDataSourceLoadingNav": () => (/* binding */ getDataSourceLoadingNav),
/* harmony export */   "getDataSourceNav": () => (/* binding */ getDataSourceNav)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Upgrade/ProBadge.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _admin_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/admin/utils.ts");







const loadingDSType = 'Loading';
function buildNavModel(dataSource, plugin) {
  const pluginMeta = plugin.meta;
  const highlightsEnabled = app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].featureToggles.featureHighlights;
  const navModel = {
    img: pluginMeta.info.logos.large,
    id: 'datasource-' + dataSource.uid,
    subTitle: `Type: ${pluginMeta.name}`,
    url: '',
    text: dataSource.name,
    breadcrumbs: [{
      title: 'Data Sources',
      url: 'datasources'
    }],
    children: [{
      active: false,
      icon: 'sliders-v-alt',
      id: `datasource-settings-${dataSource.uid}`,
      text: 'Settings',
      url: `datasources/edit/${dataSource.uid}/`
    }]
  };

  if (plugin.configPages) {
    for (const page of plugin.configPages) {
      navModel.children.push({
        active: false,
        text: page.title,
        icon: page.icon,
        url: `datasources/edit/${dataSource.uid}/?page=${page.id}`,
        id: `datasource-page-${page.id}`
      });
    }
  }

  if (pluginMeta.includes && hasDashboards(pluginMeta.includes) && app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasRole('Admin')) {
    navModel.children.push({
      active: false,
      icon: 'apps',
      id: `datasource-dashboards-${dataSource.uid}`,
      text: 'Dashboards',
      url: `datasources/edit/${dataSource.uid}/dashboards`
    });
  }

  const isLoadingNav = dataSource.type === loadingDSType;
  const permissionsExperimentId = 'feature-highlights-data-source-permissions-badge';
  const dsPermissions = {
    active: false,
    icon: 'lock',
    id: `datasource-permissions-${dataSource.uid}`,
    text: 'Permissions',
    url: `datasources/edit/${dataSource.uid}/permissions`
  };

  if ((0,_admin_utils__WEBPACK_IMPORTED_MODULE_6__.highlightTrial)() && !isLoadingNav) {
    dsPermissions.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__.ProBadge)({
      experimentId: permissionsExperimentId,
      eventVariant: 'trial'
    });
  }

  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('dspermissions')) {
    if (app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.DataSourcesPermissionsRead)) {
      navModel.children.push(dsPermissions);
    }
  } else if (highlightsEnabled && !isLoadingNav) {
    navModel.children.push(Object.assign({}, dsPermissions, {
      url: dsPermissions.url + '/upgrade',
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__.ProBadge)({
        experimentId: permissionsExperimentId
      })
    }));
  }

  const analyticsExperimentId = 'feature-highlights-data-source-insights-badge';
  const analytics = {
    active: false,
    icon: 'info-circle',
    id: `datasource-insights-${dataSource.uid}`,
    text: 'Insights',
    url: `datasources/edit/${dataSource.uid}/insights`
  };

  if ((0,_admin_utils__WEBPACK_IMPORTED_MODULE_6__.highlightTrial)() && !isLoadingNav) {
    analytics.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__.ProBadge)({
      experimentId: analyticsExperimentId,
      eventVariant: 'trial'
    });
  }

  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('analytics')) {
    navModel.children.push(analytics);
  } else if (highlightsEnabled && !isLoadingNav) {
    navModel.children.push(Object.assign({}, analytics, {
      url: analytics.url + '/upgrade',
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__.ProBadge)({
        experimentId: analyticsExperimentId
      })
    }));
  }

  const cachingExperimentId = 'feature-highlights-query-caching-badge';
  const caching = {
    active: false,
    icon: 'database',
    id: `datasource-cache-${dataSource.uid}`,
    text: 'Cache',
    url: `datasources/edit/${dataSource.uid}/cache`,
    hideFromTabs: !pluginMeta.isBackend || !app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].caching.enabled
  };

  if ((0,_admin_utils__WEBPACK_IMPORTED_MODULE_6__.highlightTrial)() && !isLoadingNav) {
    caching.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__.ProBadge)({
      experimentId: cachingExperimentId,
      eventVariant: 'trial'
    });
  }

  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('caching')) {
    navModel.children.push(caching);
  } else if (highlightsEnabled && !isLoadingNav) {
    navModel.children.push(Object.assign({}, caching, {
      url: caching.url + '/upgrade',
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__.ProBadge)({
        experimentId: cachingExperimentId
      })
    }));
  }

  return navModel;
}
function getDataSourceNav(main, pageName) {
  let node = {
    text: ''
  }; // find active page

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
function getDataSourceLoadingNav(pageName) {
  const main = buildNavModel({
    access: '',
    basicAuth: false,
    basicAuthUser: '',
    basicAuthPassword: '',
    withCredentials: false,
    database: '',
    id: 1,
    uid: 'x',
    isDefault: false,
    jsonData: {
      authType: 'credentials',
      defaultRegion: 'eu-west-2'
    },
    name: 'Loading',
    orgId: 1,
    password: '',
    readOnly: false,
    type: loadingDSType,
    typeName: loadingDSType,
    typeLogoUrl: 'public/img/icn-datasource.svg',
    url: '',
    user: '',
    secureJsonFields: {}
  }, {
    meta: {
      id: '1',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.datasource,
      name: '',
      info: {
        author: {
          name: '',
          url: ''
        },
        description: '',
        links: [{
          name: '',
          url: ''
        }],
        logos: {
          large: '',
          small: ''
        },
        screenshots: [],
        updated: '',
        version: ''
      },
      includes: [],
      module: '',
      baseUrl: ''
    }
  });
  return getDataSourceNav(main, pageName);
}

function hasDashboards(includes) {
  return includes.find(include => {
    return include.type === 'dashboard';
  }) !== undefined;
}

/***/ }),

/***/ "./public/app/features/datasources/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDataSource": () => (/* binding */ getDataSource),
/* harmony export */   "getDataSourceMeta": () => (/* binding */ getDataSourceMeta),
/* harmony export */   "getDataSourcePlugins": () => (/* binding */ getDataSourcePlugins),
/* harmony export */   "getDataSources": () => (/* binding */ getDataSources),
/* harmony export */   "getDataSourcesCount": () => (/* binding */ getDataSourcesCount),
/* harmony export */   "getDataSourcesLayoutMode": () => (/* binding */ getDataSourcesLayoutMode),
/* harmony export */   "getDataSourcesSearchQuery": () => (/* binding */ getDataSourcesSearchQuery)
/* harmony export */ });
const getDataSources = state => {
  const regex = new RegExp(state.searchQuery, 'i');
  return state.dataSources.filter(dataSource => {
    return regex.test(dataSource.name) || regex.test(dataSource.database) || regex.test(dataSource.type);
  });
};
const getDataSourcePlugins = state => {
  const regex = new RegExp(state.dataSourceTypeSearchQuery, 'i');
  return state.plugins.filter(type => {
    return regex.test(type.name);
  });
};
const getDataSource = (state, dataSourceId) => {
  if (state.dataSource.uid === dataSourceId) {
    return state.dataSource;
  }

  return {};
};
const getDataSourceMeta = (state, type) => {
  if (state.dataSourceMeta.id === type) {
    return state.dataSourceMeta;
  }

  return {};
};
const getDataSourcesSearchQuery = state => state.searchQuery;
const getDataSourcesLayoutMode = state => state.layoutMode;
const getDataSourcesCount = state => state.dataSourcesCount;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUNwQyxXQUFPdkIsS0FBSyxDQUFDNkQsY0FBYjtBQUNEOztBQUVELFNBQU8sRUFBUDtBQUNELENBTk07QUFRQSxNQUFNOEsseUJBQXlCLEdBQUkzTyxLQUFELElBQTZCQSxLQUFLLENBQUN1TyxXQUFyRTtBQUNBLE1BQU1LLHdCQUF3QixHQUFJNU8sS0FBRCxJQUE2QkEsS0FBSyxDQUFDNk8sVUFBcEU7QUFDQSxNQUFNQyxtQkFBbUIsR0FBSTlPLEtBQUQsSUFBNkJBLEtBQUssQ0FBQytPLGdCQUEvRCIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FkbWluL3V0aWxzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL0Rhc2hib2FyZHNUYWJsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvRGF0YVNvdXJjZURhc2hib2FyZHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvYnVpbGRDYXRlZ29yaWVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL25hdk1vZGVsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL3NlbGVjdG9ycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lL3NyYyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RyaWFsKCkge1xuICBjb25zdCBleHBpcnkgPSBjb25maWcubGljZW5zZUluZm8/LnRyaWFsRXhwaXJ5O1xuICByZXR1cm4gISEoZXhwaXJ5ICYmIGV4cGlyeSA+IDApO1xufVxuXG5leHBvcnQgY29uc3QgaGlnaGxpZ2h0VHJpYWwgPSAoKSA9PiBpc1RyaWFsKCkgJiYgY29uZmlnLmZlYXR1cmVUb2dnbGVzLmZlYXR1cmVIaWdobGlnaHRzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCdXR0b24sIEljb24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFBsdWdpbkRhc2hib2FyZCB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGRhc2hib2FyZHM6IFBsdWdpbkRhc2hib2FyZFtdO1xuICBvbkltcG9ydDogKGRhc2hib2FyZDogUGx1Z2luRGFzaGJvYXJkLCBvdmVyd3JpdGU6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIG9uUmVtb3ZlOiAoZGFzaGJvYXJkOiBQbHVnaW5EYXNoYm9hcmQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IERhc2hib2FyZHNUYWJsZTogRkM8UHJvcHM+ID0gKHsgZGFzaGJvYXJkcywgb25JbXBvcnQsIG9uUmVtb3ZlIH0pID0+IHtcbiAgZnVuY3Rpb24gYnV0dG9uVGV4dChkYXNoYm9hcmQ6IFBsdWdpbkRhc2hib2FyZCkge1xuICAgIHJldHVybiBkYXNoYm9hcmQucmV2aXNpb24gIT09IGRhc2hib2FyZC5pbXBvcnRlZFJldmlzaW9uID8gJ1VwZGF0ZScgOiAnUmUtaW1wb3J0JztcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cImZpbHRlci10YWJsZVwiPlxuICAgICAgPHRib2R5PlxuICAgICAgICB7ZGFzaGJvYXJkcy5tYXAoKGRhc2hib2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGtleT17YCR7ZGFzaGJvYXJkLmRhc2hib2FyZElkfS0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2lkdGgtMVwiPlxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJhcHBzXCIgLz5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIHtkYXNoYm9hcmQuaW1wb3J0ZWQgPyAoXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtkYXNoYm9hcmQuaW1wb3J0ZWRVcmx9PntkYXNoYm9hcmQudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57ZGFzaGJvYXJkLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PlxuICAgICAgICAgICAgICAgIHshZGFzaGJvYXJkLmltcG9ydGVkID8gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gb25JbXBvcnQoZGFzaGJvYXJkLCBmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICBJbXBvcnRcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBvbkltcG9ydChkYXNoYm9hcmQsIHRydWUpfT5cbiAgICAgICAgICAgICAgICAgICAge2J1dHRvblRleHQoZGFzaGJvYXJkKX1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2Rhc2hib2FyZC5pbXBvcnRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGljb249XCJ0cmFzaC1hbHRcIiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZShkYXNoYm9hcmQpfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkc1RhYmxlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IFBsdWdpbkRhc2hib2FyZCwgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGltcG9ydERhc2hib2FyZCwgcmVtb3ZlRGFzaGJvYXJkIH0gZnJvbSAnLi4vZGFzaGJvYXJkL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgbG9hZFBsdWdpbkRhc2hib2FyZHMgfSBmcm9tICcuLi9wbHVnaW5zL2FkbWluL3N0YXRlL2FjdGlvbnMnO1xuXG5pbXBvcnQgRGFzaGJvYXJkVGFibGUgZnJvbSAnLi9EYXNoYm9hcmRzVGFibGUnO1xuaW1wb3J0IHsgbG9hZERhdGFTb3VyY2UgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZSB9IGZyb20gJy4vc3RhdGUvc2VsZWN0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgdWlkOiBzdHJpbmcgfT4ge31cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlLCBwcm9wczogT3duUHJvcHMpIHtcbiAgY29uc3QgZGF0YVNvdXJjZUlkID0gcHJvcHMubWF0Y2gucGFyYW1zLnVpZDtcblxuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbChzdGF0ZS5uYXZJbmRleCwgYGRhdGFzb3VyY2UtZGFzaGJvYXJkcy0ke2RhdGFTb3VyY2VJZH1gKSxcbiAgICBkYXNoYm9hcmRzOiBzdGF0ZS5wbHVnaW5zLmRhc2hib2FyZHMsXG4gICAgZGF0YVNvdXJjZTogZ2V0RGF0YVNvdXJjZShzdGF0ZS5kYXRhU291cmNlcywgZGF0YVNvdXJjZUlkKSxcbiAgICBpc0xvYWRpbmc6IHN0YXRlLnBsdWdpbnMuaXNMb2FkaW5nUGx1Z2luRGFzaGJvYXJkcyxcbiAgICBkYXRhU291cmNlSWQsXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgaW1wb3J0RGFzaGJvYXJkLFxuICBsb2FkRGF0YVNvdXJjZSxcbiAgbG9hZFBsdWdpbkRhc2hib2FyZHMsXG4gIHJlbW92ZURhc2hib2FyZCxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IE93blByb3BzICYgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmV4cG9ydCBjbGFzcyBEYXRhU291cmNlRGFzaGJvYXJkcyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBsb2FkRGF0YVNvdXJjZSwgZGF0YVNvdXJjZUlkIH0gPSB0aGlzLnByb3BzO1xuICAgIGF3YWl0IGxvYWREYXRhU291cmNlKGRhdGFTb3VyY2VJZCk7XG4gICAgdGhpcy5wcm9wcy5sb2FkUGx1Z2luRGFzaGJvYXJkcygpO1xuICB9XG5cbiAgb25JbXBvcnQgPSAoZGFzaGJvYXJkOiBQbHVnaW5EYXNoYm9hcmQsIG92ZXJ3cml0ZTogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSwgaW1wb3J0RGFzaGJvYXJkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHtcbiAgICAgIHBsdWdpbklkOiBkYXNoYm9hcmQucGx1Z2luSWQsXG4gICAgICBwYXRoOiBkYXNoYm9hcmQucGF0aCxcbiAgICAgIG92ZXJ3cml0ZSxcbiAgICAgIGlucHV0czogW10sXG4gICAgfTtcblxuICAgIGlmIChkYXRhU291cmNlKSB7XG4gICAgICBkYXRhLmlucHV0cy5wdXNoKHtcbiAgICAgICAgbmFtZTogJyonLFxuICAgICAgICB0eXBlOiAnZGF0YXNvdXJjZScsXG4gICAgICAgIHBsdWdpbklkOiBkYXRhU291cmNlLnR5cGUsXG4gICAgICAgIHZhbHVlOiBkYXRhU291cmNlLm5hbWUsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpbXBvcnREYXNoYm9hcmQoZGF0YSwgZGFzaGJvYXJkLnRpdGxlKTtcbiAgfTtcblxuICBvblJlbW92ZSA9IChkYXNoYm9hcmQ6IFBsdWdpbkRhc2hib2FyZCkgPT4ge1xuICAgIHRoaXMucHJvcHMucmVtb3ZlRGFzaGJvYXJkKGRhc2hib2FyZC51aWQpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhc2hib2FyZHMsIG5hdk1vZGVsLCBpc0xvYWRpbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIG5hdk1vZGVsPXtuYXZNb2RlbH0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17aXNMb2FkaW5nfT5cbiAgICAgICAgICA8RGFzaGJvYXJkVGFibGVcbiAgICAgICAgICAgIGRhc2hib2FyZHM9e2Rhc2hib2FyZHN9XG4gICAgICAgICAgICBvbkltcG9ydD17KGRhc2hib2FyZCwgb3ZlcndyaXRlKSA9PiB0aGlzLm9uSW1wb3J0KGRhc2hib2FyZCwgb3ZlcndyaXRlKX1cbiAgICAgICAgICAgIG9uUmVtb3ZlPXsoZGFzaGJvYXJkKSA9PiB0aGlzLm9uUmVtb3ZlKGRhc2hib2FyZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKERhdGFTb3VyY2VEYXNoYm9hcmRzKTtcbiIsImltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIERhdGFTb3VyY2VTZXR0aW5ncywgbG9jYXRpb25VdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlV2l0aEJhY2tlbmQsIGdldERhdGFTb3VyY2VTcnYsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXBkYXRlTmF2SW5kZXggfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL2FjY2Vzc0NvbnRyb2wnO1xuaW1wb3J0IHsgZ2V0RGF0YXNvdXJjZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2RhdGFzb3VyY2Vfc3J2JztcbmltcG9ydCB7IGdldFBsdWdpblNldHRpbmdzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvcGx1Z2luU2V0dGluZ3MnO1xuaW1wb3J0IHsgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL3BsdWdpbl9sb2FkZXInO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5LCBUaHVua0Rpc3BhdGNoLCBUaHVua1Jlc3VsdCB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcblxuaW1wb3J0IHsgYnVpbGRDYXRlZ29yaWVzIH0gZnJvbSAnLi9idWlsZENhdGVnb3JpZXMnO1xuaW1wb3J0IHsgYnVpbGROYXZNb2RlbCB9IGZyb20gJy4vbmF2TW9kZWwnO1xuaW1wb3J0IHtcbiAgZGF0YVNvdXJjZUxvYWRlZCxcbiAgZGF0YVNvdXJjZU1ldGFMb2FkZWQsXG4gIGRhdGFTb3VyY2VQbHVnaW5zTG9hZCxcbiAgZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQsXG4gIGRhdGFTb3VyY2VzTG9hZGVkLFxuICBpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkLFxuICBpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkLFxuICB0ZXN0RGF0YVNvdXJjZUZhaWxlZCxcbiAgdGVzdERhdGFTb3VyY2VTdGFydGluZyxcbiAgdGVzdERhdGFTb3VyY2VTdWNjZWVkZWQsXG59IGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZSwgZ2V0RGF0YVNvdXJjZU1ldGEgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVNvdXJjZVR5cGVzTG9hZGVkUGF5bG9hZCB7XG4gIHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW107XG4gIGNhdGVnb3JpZXM6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluaXREYXRhU291cmNlU2V0dGluZ0RlcGVuZGVuY2llcyB7XG4gIGxvYWREYXRhU291cmNlOiB0eXBlb2YgbG9hZERhdGFTb3VyY2U7XG4gIGxvYWREYXRhU291cmNlTWV0YTogdHlwZW9mIGxvYWREYXRhU291cmNlTWV0YTtcbiAgZ2V0RGF0YVNvdXJjZTogdHlwZW9mIGdldERhdGFTb3VyY2U7XG4gIGdldERhdGFTb3VyY2VNZXRhOiB0eXBlb2YgZ2V0RGF0YVNvdXJjZU1ldGE7XG4gIGltcG9ydERhdGFTb3VyY2VQbHVnaW46IHR5cGVvZiBpbXBvcnREYXRhU291cmNlUGx1Z2luO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlc3REYXRhU291cmNlRGVwZW5kZW5jaWVzIHtcbiAgZ2V0RGF0YXNvdXJjZVNydjogdHlwZW9mIGdldERhdGFTb3VyY2VTcnY7XG4gIGdldEJhY2tlbmRTcnY6IHR5cGVvZiBnZXRCYWNrZW5kU3J2O1xufVxuXG5leHBvcnQgY29uc3QgaW5pdERhdGFTb3VyY2VTZXR0aW5ncyA9IChcbiAgcGFnZUlkOiBzdHJpbmcsXG4gIGRlcGVuZGVuY2llczogSW5pdERhdGFTb3VyY2VTZXR0aW5nRGVwZW5kZW5jaWVzID0ge1xuICAgIGxvYWREYXRhU291cmNlLFxuICAgIGxvYWREYXRhU291cmNlTWV0YSxcbiAgICBnZXREYXRhU291cmNlLFxuICAgIGdldERhdGFTb3VyY2VNZXRhLFxuICAgIGltcG9ydERhdGFTb3VyY2VQbHVnaW4sXG4gIH1cbik6IFRodW5rUmVzdWx0PHZvaWQ+ID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBpZiAoIXBhZ2VJZCkge1xuICAgICAgZGlzcGF0Y2goaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZChuZXcgRXJyb3IoJ0ludmFsaWQgSUQnKSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2FkZWREYXRhU291cmNlID0gYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlKHBhZ2VJZCkpO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlTWV0YShsb2FkZWREYXRhU291cmNlKSk7XG5cbiAgICAgIC8vIGhhdmUgd2UgYWxyZWFkeSBsb2FkZWQgdGhlIHBsdWdpbiB0aGVuIHdlIGNhbiBza2lwIHRoZSBzdGVwcyBiZWxvdz9cbiAgICAgIGlmIChnZXRTdGF0ZSgpLmRhdGFTb3VyY2VTZXR0aW5ncy5wbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhU291cmNlID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2UoZ2V0U3RhdGUoKS5kYXRhU291cmNlcywgcGFnZUlkKTtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VNZXRhID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2VNZXRhKGdldFN0YXRlKCkuZGF0YVNvdXJjZXMsIGRhdGFTb3VyY2UhLnR5cGUpO1xuICAgICAgY29uc3QgaW1wb3J0ZWRQbHVnaW4gPSBhd2FpdCBkZXBlbmRlbmNpZXMuaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihkYXRhU291cmNlTWV0YSk7XG5cbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQoaW1wb3J0ZWRQbHVnaW4pKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQoZXJyKSk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHRlc3REYXRhU291cmNlID0gKFxuICBkYXRhU291cmNlTmFtZTogc3RyaW5nLFxuICBkZXBlbmRlbmNpZXM6IFRlc3REYXRhU291cmNlRGVwZW5kZW5jaWVzID0ge1xuICAgIGdldERhdGFzb3VyY2VTcnYsXG4gICAgZ2V0QmFja2VuZFNydixcbiAgfVxuKTogVGh1bmtSZXN1bHQ8dm9pZD4gPT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRzQXBpID0gYXdhaXQgZGVwZW5kZW5jaWVzLmdldERhdGFzb3VyY2VTcnYoKS5nZXQoZGF0YVNvdXJjZU5hbWUpO1xuXG4gICAgaWYgKCFkc0FwaS50ZXN0RGF0YXNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlU3RhcnRpbmcoKSk7XG5cbiAgICBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLndpdGhOb0JhY2tlbmRDYWNoZShhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkc0FwaS50ZXN0RGF0YXNvdXJjZSgpO1xuXG4gICAgICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlU3VjY2VlZGVkKHJlc3VsdCkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzVGV4dCwgbWVzc2FnZTogZXJyTWVzc2FnZSwgZGV0YWlscywgZGF0YSB9ID0gZXJyO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJNZXNzYWdlIHx8IGRhdGE/Lm1lc3NhZ2UgfHwgJ0hUVFAgZXJyb3IgJyArIHN0YXR1c1RleHQ7XG5cbiAgICAgICAgZGlzcGF0Y2godGVzdERhdGFTb3VyY2VGYWlsZWQoeyBtZXNzYWdlLCBkZXRhaWxzIH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL2RhdGFzb3VyY2VzJyk7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZXNMb2FkZWQocmVzcG9uc2UpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlKHVpZDogc3RyaW5nKTogVGh1bmtSZXN1bHQ8UHJvbWlzZTxEYXRhU291cmNlU2V0dGluZ3M+PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gYXdhaXQgZ2V0RGF0YVNvdXJjZVVzaW5nVWlkT3JJZCh1aWQpO1xuXG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZUxvYWRlZChkYXRhU291cmNlKSk7XG4gICAgcmV0dXJuIGRhdGFTb3VyY2U7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZU1ldGEoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcGx1Z2luSW5mbyA9IChhd2FpdCBnZXRQbHVnaW5TZXR0aW5ncyhkYXRhU291cmNlLnR5cGUpKSBhcyBEYXRhU291cmNlUGx1Z2luTWV0YTtcbiAgICBjb25zdCBwbHVnaW4gPSBhd2FpdCBpbXBvcnREYXRhU291cmNlUGx1Z2luKHBsdWdpbkluZm8pO1xuICAgIGNvbnN0IGlzQmFja2VuZCA9IHBsdWdpbi5EYXRhU291cmNlQ2xhc3MucHJvdG90eXBlIGluc3RhbmNlb2YgRGF0YVNvdXJjZVdpdGhCYWNrZW5kO1xuICAgIGNvbnN0IG1ldGEgPSB7XG4gICAgICAuLi5wbHVnaW5JbmZvLFxuICAgICAgaXNCYWNrZW5kOiBwbHVnaW5JbmZvLmJhY2tlbmQgfHwgaXNCYWNrZW5kLFxuICAgIH07XG5cbiAgICBkaXNwYXRjaChkYXRhU291cmNlTWV0YUxvYWRlZChtZXRhKSk7XG5cbiAgICBwbHVnaW4ubWV0YSA9IG1ldGE7XG4gICAgZGlzcGF0Y2godXBkYXRlTmF2SW5kZXgoYnVpbGROYXZNb2RlbChkYXRhU291cmNlLCBwbHVnaW4pKSk7XG4gIH07XG59XG5cbi8qKlxuICogR2V0IGRhdGEgc291cmNlIGJ5IHVpZCBvciBpZCwgaWYgb2xkIGlkIGRldGVjdGVkIGhhbmRsZXMgcmVkaXJlY3RcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQodWlkOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPERhdGFTb3VyY2VTZXR0aW5ncz4ge1xuICAvLyBUcnkgZmlyc3Qgd2l0aCB1aWQgYXBpXG4gIHRyeSB7XG4gICAgY29uc3QgYnlVaWQgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpLmZldGNoPERhdGFTb3VyY2VTZXR0aW5ncz4oe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6IGAvYXBpL2RhdGFzb3VyY2VzL3VpZC8ke3VpZH1gLFxuICAgICAgICBwYXJhbXM6IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCksXG4gICAgICAgIHNob3dFcnJvckFsZXJ0OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChieVVpZC5vaykge1xuICAgICAgcmV0dXJuIGJ5VWlkLmRhdGE7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGxvb2t1cCBkYXRhIHNvdXJjZSBieSB1aWQnLCBlcnIpO1xuICB9XG5cbiAgLy8gdHJ5IGxvb2t1cCBieSBvbGQgZGIgaWRcbiAgY29uc3QgaWQgPSB0eXBlb2YgdWlkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHVpZCwgMTApIDogdWlkO1xuICBpZiAoIU51bWJlci5pc05hTihpZCkpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KCkuZmV0Y2g8RGF0YVNvdXJjZVNldHRpbmdzPih7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHVybDogYC9hcGkvZGF0YXNvdXJjZXMvJHtpZH1gLFxuICAgICAgICBwYXJhbXM6IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCksXG4gICAgICAgIHNob3dFcnJvckFsZXJ0OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIElmIHRoZSB1aWQgaXMgYSBudW1iZXIsIHRoZW4gdGhpcyBpcyBhIHJlZnJlc2ggb24gb25lIG9mIHRoZSBzZXR0aW5ncyB0YWJzXG4gICAgLy8gYW5kIHdlIGNhbiByZXR1cm4gdGhlIHJlc3BvbnNlIGRhdGFcbiAgICBpZiAocmVzcG9uc2Uub2sgJiYgdHlwZW9mIHVpZCA9PT0gJ251bWJlcicgJiYgcmVzcG9uc2UuZGF0YS5pZCA9PT0gdWlkKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICAvLyBOb3QgaWRlYWwgdG8gZG8gYSBmdWxsIHBhZ2UgcmVsb2FkIGhlcmUgYnV0IHNvIHRyaWNreSB0byBoYW5kbGUgdGhpc1xuICAgIC8vIG90aGVyd2lzZSBXZSBjYW4gdXBkYXRlIHRoZSBsb2NhdGlvbiB1c2luZyByZWFjdCByb3V0ZXIsIGJ1dCBuZWVkIHRvXG4gICAgLy8gZnVsbHkgcmVsb2FkIHRoZSByb3V0ZSBhcyB0aGUgbmF2IG1vZGVsIHBhZ2UgaW5kZXggaXMgbm90IG1hdGNoaW5nIHdpdGhcbiAgICAvLyB0aGUgdXJsIGluIHRoYXQgY2FzZS4gQW5kIHJlYWN0IHJvdXRlciBoYXMgbm8gd2F5IHRvIHVubW91bnQgcmVtb3VudCBhXG4gICAgLy8gcm91dGVcbiAgICBpZiAocmVzcG9uc2Uub2sgJiYgcmVzcG9uc2UuZGF0YS5pZC50b1N0cmluZygpID09PSB1aWQpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb25VdGlsLmFzc3VyZUJhc2VVcmwoYC9kYXRhc291cmNlcy9lZGl0LyR7cmVzcG9uc2UuZGF0YS51aWR9YCk7XG4gICAgICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVNldHRpbmdzOyAvLyBhdm9pZHMgZmxhc2hpbmcgYW4gZXJyb3JcbiAgICB9XG4gIH1cblxuICB0aHJvdyBFcnJvcignQ291bGQgbm90IGZpbmQgZGF0YSBzb3VyY2UnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERhdGFTb3VyY2UocGx1Z2luOiBEYXRhU291cmNlUGx1Z2luTWV0YSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBhd2FpdCBkaXNwYXRjaChsb2FkRGF0YVNvdXJjZXMoKSk7XG5cbiAgICBjb25zdCBkYXRhU291cmNlcyA9IGdldFN0b3JlKCkuZGF0YVNvdXJjZXMuZGF0YVNvdXJjZXM7XG5cbiAgICBjb25zdCBuZXdJbnN0YW5jZSA9IHtcbiAgICAgIG5hbWU6IHBsdWdpbi5uYW1lLFxuICAgICAgdHlwZTogcGx1Z2luLmlkLFxuICAgICAgYWNjZXNzOiAncHJveHknLFxuICAgICAgaXNEZWZhdWx0OiBkYXRhU291cmNlcy5sZW5ndGggPT09IDAsXG4gICAgfTtcblxuICAgIGlmIChuYW1lRXhpdHMoZGF0YVNvdXJjZXMsIG5ld0luc3RhbmNlLm5hbWUpKSB7XG4gICAgICBuZXdJbnN0YW5jZS5uYW1lID0gZmluZE5ld05hbWUoZGF0YVNvdXJjZXMsIG5ld0luc3RhbmNlLm5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2RhdGFzb3VyY2VzJywgbmV3SW5zdGFuY2UpO1xuICAgIGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5yZWxvYWQoKTtcblxuICAgIGF3YWl0IGNvbnRleHRTcnYuZmV0Y2hVc2VyUGVybWlzc2lvbnMoKTtcblxuICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKGAvZGF0YXNvdXJjZXMvZWRpdC8ke3Jlc3VsdC5kYXRhc291cmNlLnVpZH1gKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlUGx1Z2lucygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChkYXRhU291cmNlUGx1Z2luc0xvYWQoKSk7XG4gICAgY29uc3QgcGx1Z2lucyA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvcGx1Z2lucycsIHsgZW5hYmxlZDogMSwgdHlwZTogJ2RhdGFzb3VyY2UnIH0pO1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBidWlsZENhdGVnb3JpZXMocGx1Z2lucyk7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQoeyBwbHVnaW5zLCBjYXRlZ29yaWVzIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURhdGFTb3VyY2UoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS9kYXRhc291cmNlcy8ke2RhdGFTb3VyY2UuaWR9YCwgZGF0YVNvdXJjZSk7IC8vIGJ5IFVJRCBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5yZWxvYWQoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2gobG9hZERhdGFTb3VyY2UoZGF0YVNvdXJjZS51aWQpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZURhdGFTb3VyY2UoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBnZXRTdG9yZSgpLmRhdGFTb3VyY2VzLmRhdGFTb3VyY2U7XG5cbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL2RhdGFzb3VyY2VzLyR7ZGF0YVNvdXJjZS5pZH1gKTtcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG5cbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnL2RhdGFzb3VyY2VzJyk7XG4gIH07XG59XG5cbmludGVyZmFjZSBJdGVtV2l0aE5hbWUge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRXhpdHMoZGF0YVNvdXJjZXM6IEl0ZW1XaXRoTmFtZVtdLCBuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIChcbiAgICBkYXRhU291cmNlcy5maWx0ZXIoKGRhdGFTb3VyY2UpID0+IHtcbiAgICAgIHJldHVybiBkYXRhU291cmNlLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pLmxlbmd0aCA+IDBcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROZXdOYW1lKGRhdGFTb3VyY2VzOiBJdGVtV2l0aE5hbWVbXSwgbmFtZTogc3RyaW5nKSB7XG4gIC8vIE5lZWQgdG8gbG9vcCB0aHJvdWdoIGN1cnJlbnQgZGF0YSBzb3VyY2VzIHRvIG1ha2Ugc3VyZVxuICAvLyB0aGUgbmFtZSBkb2Vzbid0IGV4aXN0XG4gIHdoaWxlIChuYW1lRXhpdHMoZGF0YVNvdXJjZXMsIG5hbWUpKSB7XG4gICAgLy8gSWYgdGhlcmUncyBhIGR1cGxpY2F0ZSBuYW1lIHRoYXQgZG9lc24ndCBlbmQgd2l0aCAnLXgnXG4gICAgLy8gd2UgY2FuIGFkZCAtMSB0byB0aGUgbmFtZSBhbmQgYmUgZG9uZS5cbiAgICBpZiAoIW5hbWVIYXNTdWZmaXgobmFtZSkpIHtcbiAgICAgIG5hbWUgPSBgJHtuYW1lfS0xYDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlcmUncyBhIGR1cGxpY2F0ZSBuYW1lIHRoYXQgZW5kcyB3aXRoICcteCdcbiAgICAgIC8vIHdlIGNhbiB0cnkgdG8gaW5jcmVtZW50IHRoZSBsYXN0IGRpZ2l0IHVudGlsIHRoZSBuYW1lIGlzIHVuaXF1ZVxuXG4gICAgICAvLyByZW1vdmUgdGhlICd4JyBwYXJ0IGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIG5ldyBudW1iZXJcbiAgICAgIG5hbWUgPSBgJHtnZXROZXdOYW1lKG5hbWUpfSR7aW5jcmVtZW50TGFzdERpZ2l0KGdldExhc3REaWdpdChuYW1lKSl9YDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gbmFtZUhhc1N1ZmZpeChuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUuZW5kc1dpdGgoJy0nLCBuYW1lLmxlbmd0aCAtIDEpO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0RGlnaXQobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBwYXJzZUludChuYW1lLnNsaWNlKC0xKSwgMTApO1xufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRMYXN0RGlnaXQoZGlnaXQ6IG51bWJlcikge1xuICByZXR1cm4gaXNOYU4oZGlnaXQpID8gMSA6IGRpZ2l0ICsgMTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUuc2xpY2UoMCwgbmFtZS5sZW5ndGggLSAxKTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBQbHVnaW5UeXBlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnkgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDYXRlZ29yaWVzKHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW10pOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXSB7XG4gIGNvbnN0IGNhdGVnb3JpZXM6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdID0gW1xuICAgIHsgaWQ6ICd0c2RiJywgdGl0bGU6ICdUaW1lIHNlcmllcyBkYXRhYmFzZXMnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdsb2dnaW5nJywgdGl0bGU6ICdMb2dnaW5nICYgZG9jdW1lbnQgZGF0YWJhc2VzJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAndHJhY2luZycsIHRpdGxlOiAnRGlzdHJpYnV0ZWQgdHJhY2luZycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ3NxbCcsIHRpdGxlOiAnU1FMJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnY2xvdWQnLCB0aXRsZTogJ0Nsb3VkJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnZW50ZXJwcmlzZScsIHRpdGxlOiAnRW50ZXJwcmlzZSBwbHVnaW5zJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnaW90JywgdGl0bGU6ICdJbmR1c3RyaWFsICYgSW9UJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnb3RoZXInLCB0aXRsZTogJ090aGVycycsIHBsdWdpbnM6IFtdIH0sXG4gIF0uZmlsdGVyKChpdGVtKSA9PiBpdGVtKTtcblxuICBjb25zdCBjYXRlZ29yeUluZGV4OiBSZWNvcmQ8c3RyaW5nLCBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnk+ID0ge307XG4gIGNvbnN0IHBsdWdpbkluZGV4OiBSZWNvcmQ8c3RyaW5nLCBEYXRhU291cmNlUGx1Z2luTWV0YT4gPSB7fTtcbiAgY29uc3QgZW50ZXJwcmlzZVBsdWdpbnMgPSBnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMoKTtcblxuICAvLyBidWlsZCBpbmRpY2VzXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIGNhdGVnb3J5SW5kZXhbY2F0ZWdvcnkuaWRdID0gY2F0ZWdvcnk7XG4gIH1cblxuICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBwbHVnaW5zKSB7XG4gICAgY29uc3QgZW50ZXJwcmlzZVBsdWdpbiA9IGVudGVycHJpc2VQbHVnaW5zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBsdWdpbi5pZCk7XG4gICAgLy8gRm9yY2UgY2F0ZWdvcnkgZm9yIGVudGVycHJpc2UgcGx1Z2luc1xuICAgIGlmIChwbHVnaW4uZW50ZXJwcmlzZSB8fCBlbnRlcnByaXNlUGx1Z2luKSB7XG4gICAgICBwbHVnaW4uY2F0ZWdvcnkgPSAnZW50ZXJwcmlzZSc7XG4gICAgICBwbHVnaW4udW5saWNlbnNlZCA9ICFmZWF0dXJlRW5hYmxlZCgnZW50ZXJwcmlzZS5wbHVnaW5zJyk7XG4gICAgICBwbHVnaW4uaW5mby5saW5rcyA9IGVudGVycHJpc2VQbHVnaW4/LmluZm8/LmxpbmtzIHx8IHBsdWdpbi5pbmZvLmxpbmtzO1xuICAgIH1cblxuICAgIC8vIEZpeCBsaW5rIG5hbWVcbiAgICBpZiAocGx1Z2luLmluZm8ubGlua3MpIHtcbiAgICAgIGZvciAoY29uc3QgbGluayBvZiBwbHVnaW4uaW5mby5saW5rcykge1xuICAgICAgICBsaW5rLm5hbWUgPSAnTGVhcm4gbW9yZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBsdWdpbi5jYXRlZ29yeSkgfHwgY2F0ZWdvcnlJbmRleFsnb3RoZXInXTtcbiAgICBjYXRlZ29yeS5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAvLyBhZGQgdG8gcGx1Z2luIGluZGV4XG4gICAgcGx1Z2luSW5kZXhbcGx1Z2luLmlkXSA9IHBsdWdpbjtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIC8vIGFkZCBwaGFudG9tIHBsdWdpblxuICAgIGlmIChjYXRlZ29yeS5pZCA9PT0gJ2Nsb3VkJykge1xuICAgICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKGdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4oKSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHBoYW50b20gcGx1Z2luc1xuICAgIGlmIChjYXRlZ29yeS5pZCA9PT0gJ2VudGVycHJpc2UnKSB7XG4gICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBlbnRlcnByaXNlUGx1Z2lucykge1xuICAgICAgICBpZiAoIXBsdWdpbkluZGV4W3BsdWdpbi5pZF0pIHtcbiAgICAgICAgICBjYXRlZ29yeS5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRQbHVnaW5zKGNhdGVnb3J5LnBsdWdpbnMpO1xuICB9XG5cbiAgLy8gT25seSBzaG93IGNhdGVnb3JpZXMgd2l0aCBwbHVnaW5zXG4gIHJldHVybiBjYXRlZ29yaWVzLmZpbHRlcigoYykgPT4gYy5wbHVnaW5zLmxlbmd0aCA+IDApO1xufVxuXG5mdW5jdGlvbiBzb3J0UGx1Z2lucyhwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdKSB7XG4gIGNvbnN0IHNvcnRpbmdSdWxlczogeyBbaWQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIHByb21ldGhldXM6IDEwMCxcbiAgICBncmFwaGl0ZTogOTUsXG4gICAgbG9raTogOTAsXG4gICAgbXlzcWw6IDgwLFxuICAgIGphZWdlcjogMTAwLFxuICAgIHBvc3RncmVzOiA3OSxcbiAgICBnY2xvdWQ6IC0xLFxuICB9O1xuXG4gIHBsdWdpbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFTb3J0ID0gc29ydGluZ1J1bGVzW2EuaWRdIHx8IDA7XG4gICAgY29uc3QgYlNvcnQgPSBzb3J0aW5nUnVsZXNbYi5pZF0gfHwgMDtcbiAgICBpZiAoYVNvcnQgPiBiU29ydCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAoYVNvcnQgPCBiU29ydCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZSA/IC0xIDogMTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEVudGVycHJpc2VQaGFudG9tUGx1Z2lucygpOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdIHtcbiAgcmV0dXJuIFtcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zcGx1bmstZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU3BsdW5rJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIFNwbHVuayBsb2dzJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zcGx1bmtfbG9nb18xMjgucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1vcmFjbGUtZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnT3JhY2xlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIE9yYWNsZSBTUUwnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL29yYWNsZS5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWR5bmF0cmFjZS1kYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdEeW5hdHJhY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdWaXN1YWxpemUgYW5kIGV4cGxvcmUgRHluYXRyYWNlIGRhdGEnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2R5bmF0cmFjZS5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNlcnZpY2Vub3ctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NlcnZpY2VOb3cgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdTZXJ2aWNlTm93JyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zZXJ2aWNlbm93LnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtZGF0YWRvZy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGF0YURvZyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ0RhdGFEb2cnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2RhdGFkb2cucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1uZXdyZWxpYy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTmV3IFJlbGljIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnTmV3IFJlbGljJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9uZXdyZWxpYy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLW1vbmdvZGItZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ01vbmdvREIgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdNb25nb0RCJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9tb25nb2RiLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc25vd2ZsYWtlLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTbm93Zmxha2UgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdTbm93Zmxha2UnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3Nub3dmbGFrZS5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXdhdmVmcm9udC1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2F2ZWZyb250IGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnV2F2ZWZyb250JyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy93YXZlZnJvbnQuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZGxvcGVzNy1hcHBkeW5hbWljcy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwRHluYW1pY3MgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdBcHBEeW5hbWljcycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvYXBwZHluYW1pY3Muc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zYXBoYW5hLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTQVAgSEFOQcKuIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU0FQIEhBTkHCricsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2FwX2hhbmEucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1ob25leWNvbWItZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0hvbmV5Y29tYiBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnSG9uZXljb21iJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9ob25leWNvbWIucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zYWxlc2ZvcmNlLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTYWxlc2ZvcmNlIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdTYWxlc2ZvcmNlJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zYWxlc2ZvcmNlLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtamlyYS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSmlyYSBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnSmlyYScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvamlyYV9sb2dvLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtZ2l0bGFiLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdHaXRMYWIgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0dpdExhYicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvZ2l0bGFiLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc3BsdW5rLW1vbml0b3JpbmctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NpZ25hbEZ4IGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdTcGx1bmsgSW5mcmFzdHJ1Y3R1cmUgTW9uaXRvcmluZycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2lnbmFsZngtbG9nby5zdmcnLFxuICAgIH0pLFxuICBdO1xufVxuXG5mdW5jdGlvbiBnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luKCk6IERhdGFTb3VyY2VQbHVnaW5NZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogJ2djbG91ZCcsXG4gICAgbmFtZTogJ0dyYWZhbmEgQ2xvdWQnLFxuICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICBtb2R1bGU6ICdwaGFudG9tJyxcbiAgICBiYXNlVXJsOiAnJyxcbiAgICBpbmZvOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0hvc3RlZCBHcmFwaGl0ZSwgUHJvbWV0aGV1cywgYW5kIExva2knLFxuICAgICAgbG9nb3M6IHsgc21hbGw6ICdwdWJsaWMvaW1nL2dyYWZhbmFfaWNvbi5zdmcnLCBsYXJnZTogJ2FzZCcgfSxcbiAgICAgIGF1dGhvcjogeyBuYW1lOiAnR3JhZmFuYSBMYWJzJyB9LFxuICAgICAgbGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ3JhZmFuYS5jb20vcHJvZHVjdHMvY2xvdWQvJyxcbiAgICAgICAgICBuYW1lOiAnTGVhcm4gbW9yZScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgdXBkYXRlZDogJzIwMTktMDUtMTAnLFxuICAgICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICB9LFxuICB9O1xufVxuXG5pbnRlcmZhY2UgR2V0UGhhbnRvbVBsdWdpbk9wdGlvbnMge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltZ1VybDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRQaGFudG9tUGx1Z2luKG9wdGlvbnM6IEdldFBoYW50b21QbHVnaW5PcHRpb25zKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEge1xuICByZXR1cm4ge1xuICAgIGlkOiBvcHRpb25zLmlkLFxuICAgIG5hbWU6IG9wdGlvbnMubmFtZSxcbiAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgbW9kdWxlOiAncGhhbnRvbScsXG4gICAgYmFzZVVybDogJycsXG4gICAgaW5mbzoge1xuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnMuZGVzY3JpcHRpb24sXG4gICAgICBsb2dvczogeyBzbWFsbDogb3B0aW9ucy5pbWdVcmwsIGxhcmdlOiBvcHRpb25zLmltZ1VybCB9LFxuICAgICAgYXV0aG9yOiB7IG5hbWU6ICdHcmFmYW5hIExhYnMnIH0sXG4gICAgICBsaW5rczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiBjb25maWcucGx1Z2luQ2F0YWxvZ1VSTCArIG9wdGlvbnMuaWQsXG4gICAgICAgICAgbmFtZTogJ0luc3RhbGwgbm93JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICB1cGRhdGVkOiAnMjAxOS0wNS0xMCcsXG4gICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlU2V0dGluZ3MsIFBsdWdpblR5cGUsIFBsdWdpbkluY2x1ZGUsIE5hdk1vZGVsLCBOYXZNb2RlbEl0ZW0gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBQcm9CYWRnZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVXBncmFkZS9Qcm9CYWRnZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgaGlnaGxpZ2h0VHJpYWwgfSBmcm9tICcuLi8uLi9hZG1pbi91dGlscyc7XG5pbXBvcnQgeyBHZW5lcmljRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJy4uL3NldHRpbmdzL1BsdWdpblNldHRpbmdzJztcblxuY29uc3QgbG9hZGluZ0RTVHlwZSA9ICdMb2FkaW5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTmF2TW9kZWwoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzLCBwbHVnaW46IEdlbmVyaWNEYXRhU291cmNlUGx1Z2luKTogTmF2TW9kZWxJdGVtIHtcbiAgY29uc3QgcGx1Z2luTWV0YSA9IHBsdWdpbi5tZXRhO1xuICBjb25zdCBoaWdobGlnaHRzRW5hYmxlZCA9IGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cztcbiAgY29uc3QgbmF2TW9kZWw6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBpbWc6IHBsdWdpbk1ldGEuaW5mby5sb2dvcy5sYXJnZSxcbiAgICBpZDogJ2RhdGFzb3VyY2UtJyArIGRhdGFTb3VyY2UudWlkLFxuICAgIHN1YlRpdGxlOiBgVHlwZTogJHtwbHVnaW5NZXRhLm5hbWV9YCxcbiAgICB1cmw6ICcnLFxuICAgIHRleHQ6IGRhdGFTb3VyY2UubmFtZSxcbiAgICBicmVhZGNydW1iczogW3sgdGl0bGU6ICdEYXRhIFNvdXJjZXMnLCB1cmw6ICdkYXRhc291cmNlcycgfV0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgaWNvbjogJ3NsaWRlcnMtdi1hbHQnLFxuICAgICAgICBpZDogYGRhdGFzb3VyY2Utc2V0dGluZ3MtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgICAgICB0ZXh0OiAnU2V0dGluZ3MnLFxuICAgICAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2AsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgaWYgKHBsdWdpbi5jb25maWdQYWdlcykge1xuICAgIGZvciAoY29uc3QgcGFnZSBvZiBwbHVnaW4uY29uZmlnUGFnZXMpIHtcbiAgICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgdGV4dDogcGFnZS50aXRsZSxcbiAgICAgICAgaWNvbjogcGFnZS5pY29uLFxuICAgICAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9Lz9wYWdlPSR7cGFnZS5pZH1gLFxuICAgICAgICBpZDogYGRhdGFzb3VyY2UtcGFnZS0ke3BhZ2UuaWR9YCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwbHVnaW5NZXRhLmluY2x1ZGVzICYmIGhhc0Rhc2hib2FyZHMocGx1Z2luTWV0YS5pbmNsdWRlcykgJiYgY29udGV4dFNydi5oYXNSb2xlKCdBZG1pbicpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGljb246ICdhcHBzJyxcbiAgICAgIGlkOiBgZGF0YXNvdXJjZS1kYXNoYm9hcmRzLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICAgIHRleHQ6ICdEYXNoYm9hcmRzJyxcbiAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vZGFzaGJvYXJkc2AsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBpc0xvYWRpbmdOYXYgPSBkYXRhU291cmNlLnR5cGUgPT09IGxvYWRpbmdEU1R5cGU7XG5cbiAgY29uc3QgcGVybWlzc2lvbnNFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLWRhdGEtc291cmNlLXBlcm1pc3Npb25zLWJhZGdlJztcbiAgY29uc3QgZHNQZXJtaXNzaW9uczogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2xvY2snLFxuICAgIGlkOiBgZGF0YXNvdXJjZS1wZXJtaXNzaW9ucy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgdGV4dDogJ1Blcm1pc3Npb25zJyxcbiAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L3Blcm1pc3Npb25zYCxcbiAgfTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgZHNQZXJtaXNzaW9ucy50YWJTdWZmaXggPSAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogcGVybWlzc2lvbnNFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnZHNwZXJtaXNzaW9ucycpKSB7XG4gICAgaWYgKGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzUGVybWlzc2lvbnNSZWFkKSkge1xuICAgICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goZHNQZXJtaXNzaW9ucyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5kc1Blcm1pc3Npb25zLFxuICAgICAgdXJsOiBkc1Blcm1pc3Npb25zLnVybCArICcvdXBncmFkZScsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFuYWx5dGljc0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtZGF0YS1zb3VyY2UtaW5zaWdodHMtYmFkZ2UnO1xuICBjb25zdCBhbmFseXRpY3M6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdpbmZvLWNpcmNsZScsXG4gICAgaWQ6IGBkYXRhc291cmNlLWluc2lnaHRzLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnSW5zaWdodHMnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vaW5zaWdodHNgLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBhbmFseXRpY3MudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGFuYWx5dGljc0V4cGVyaW1lbnRJZCwgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdhbmFseXRpY3MnKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGFuYWx5dGljcyk7XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmFuYWx5dGljcyxcbiAgICAgIHVybDogYW5hbHl0aWNzLnVybCArICcvdXBncmFkZScsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBhbmFseXRpY3NFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBjYWNoaW5nRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1xdWVyeS1jYWNoaW5nLWJhZGdlJztcblxuICBjb25zdCBjYWNoaW5nOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnZGF0YWJhc2UnLFxuICAgIGlkOiBgZGF0YXNvdXJjZS1jYWNoZS0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgdGV4dDogJ0NhY2hlJyxcbiAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2NhY2hlYCxcbiAgICBoaWRlRnJvbVRhYnM6ICFwbHVnaW5NZXRhLmlzQmFja2VuZCB8fCAhY29uZmlnLmNhY2hpbmcuZW5hYmxlZCxcbiAgfTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgY2FjaGluZy50YWJTdWZmaXggPSAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogY2FjaGluZ0V4cGVyaW1lbnRJZCwgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdjYWNoaW5nJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChjYWNoaW5nKTtcbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uY2FjaGluZyxcbiAgICAgIHVybDogY2FjaGluZy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogY2FjaGluZ0V4cGVyaW1lbnRJZCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBuYXZNb2RlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFTb3VyY2VOYXYobWFpbjogTmF2TW9kZWxJdGVtLCBwYWdlTmFtZTogc3RyaW5nKTogTmF2TW9kZWwge1xuICBsZXQgbm9kZTogTmF2TW9kZWxJdGVtID0geyB0ZXh0OiAnJyB9O1xuXG4gIC8vIGZpbmQgYWN0aXZlIHBhZ2VcbiAgZm9yIChjb25zdCBjaGlsZCBvZiBtYWluLmNoaWxkcmVuISkge1xuICAgIGlmIChjaGlsZC5pZCEuaW5kZXhPZihwYWdlTmFtZSkgPiAwKSB7XG4gICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgbm9kZSA9IGNoaWxkO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtYWluOiBtYWluLFxuICAgIG5vZGU6IG5vZGUhLFxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFTb3VyY2VMb2FkaW5nTmF2KHBhZ2VOYW1lOiBzdHJpbmcpOiBOYXZNb2RlbCB7XG4gIGNvbnN0IG1haW4gPSBidWlsZE5hdk1vZGVsKFxuICAgIHtcbiAgICAgIGFjY2VzczogJycsXG4gICAgICBiYXNpY0F1dGg6IGZhbHNlLFxuICAgICAgYmFzaWNBdXRoVXNlcjogJycsXG4gICAgICBiYXNpY0F1dGhQYXNzd29yZDogJycsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgICAgZGF0YWJhc2U6ICcnLFxuICAgICAgaWQ6IDEsXG4gICAgICB1aWQ6ICd4JyxcbiAgICAgIGlzRGVmYXVsdDogZmFsc2UsXG4gICAgICBqc29uRGF0YTogeyBhdXRoVHlwZTogJ2NyZWRlbnRpYWxzJywgZGVmYXVsdFJlZ2lvbjogJ2V1LXdlc3QtMicgfSxcbiAgICAgIG5hbWU6ICdMb2FkaW5nJyxcbiAgICAgIG9yZ0lkOiAxLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgdHlwZTogbG9hZGluZ0RTVHlwZSxcbiAgICAgIHR5cGVOYW1lOiBsb2FkaW5nRFNUeXBlLFxuICAgICAgdHlwZUxvZ29Vcmw6ICdwdWJsaWMvaW1nL2ljbi1kYXRhc291cmNlLnN2ZycsXG4gICAgICB1cmw6ICcnLFxuICAgICAgdXNlcjogJycsXG4gICAgICBzZWN1cmVKc29uRmllbGRzOiB7fSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgdHlwZTogUGx1Z2luVHlwZS5kYXRhc291cmNlLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgaW5mbzoge1xuICAgICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgIGxpbmtzOiBbeyBuYW1lOiAnJywgdXJsOiAnJyB9XSxcbiAgICAgICAgICBsb2dvczoge1xuICAgICAgICAgICAgbGFyZ2U6ICcnLFxuICAgICAgICAgICAgc21hbGw6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgICAgIHVwZGF0ZWQ6ICcnLFxuICAgICAgICAgIHZlcnNpb246ICcnLFxuICAgICAgICB9LFxuICAgICAgICBpbmNsdWRlczogW10sXG4gICAgICAgIG1vZHVsZTogJycsXG4gICAgICAgIGJhc2VVcmw6ICcnLFxuICAgICAgfSxcbiAgICB9IGFzIGFueVxuICApO1xuXG4gIHJldHVybiBnZXREYXRhU291cmNlTmF2KG1haW4sIHBhZ2VOYW1lKTtcbn1cblxuZnVuY3Rpb24gaGFzRGFzaGJvYXJkcyhpbmNsdWRlczogUGx1Z2luSW5jbHVkZVtdKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgaW5jbHVkZXMuZmluZCgoaW5jbHVkZSkgPT4ge1xuICAgICAgcmV0dXJuIGluY2x1ZGUudHlwZSA9PT0gJ2Rhc2hib2FyZCc7XG4gICAgfSkgIT09IHVuZGVmaW5lZFxuICApO1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIERhdGFTb3VyY2VTZXR0aW5ncywgVXJsUXVlcnlWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlc1N0YXRlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZGF0YXNvdXJjZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXMgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLnNlYXJjaFF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS5kYXRhU291cmNlcy5maWx0ZXIoKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncykgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KGRhdGFTb3VyY2UubmFtZSkgfHwgcmVnZXgudGVzdChkYXRhU291cmNlLmRhdGFiYXNlKSB8fCByZWdleC50ZXN0KGRhdGFTb3VyY2UudHlwZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VQbHVnaW5zID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdGF0ZS5kYXRhU291cmNlVHlwZVNlYXJjaFF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS5wbHVnaW5zLmZpbHRlcigodHlwZTogRGF0YVNvdXJjZVBsdWdpbk1ldGEpID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh0eXBlLm5hbWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlLCBkYXRhU291cmNlSWQ6IFVybFF1ZXJ5VmFsdWUpOiBEYXRhU291cmNlU2V0dGluZ3MgPT4ge1xuICBpZiAoc3RhdGUuZGF0YVNvdXJjZS51aWQgPT09IGRhdGFTb3VyY2VJZCkge1xuICAgIHJldHVybiBzdGF0ZS5kYXRhU291cmNlO1xuICB9XG4gIHJldHVybiB7fSBhcyBEYXRhU291cmNlU2V0dGluZ3M7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZU1ldGEgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUsIHR5cGU6IHN0cmluZyk6IERhdGFTb3VyY2VQbHVnaW5NZXRhID0+IHtcbiAgaWYgKHN0YXRlLmRhdGFTb3VyY2VNZXRhLmlkID09PSB0eXBlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2VNZXRhO1xuICB9XG5cbiAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VQbHVnaW5NZXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzU2VhcmNoUXVlcnkgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLnNlYXJjaFF1ZXJ5O1xuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzTGF5b3V0TW9kZSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUubGF5b3V0TW9kZTtcbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlc0NvdW50ID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5kYXRhU291cmNlc0NvdW50O1xuIl0sIm5hbWVzIjpbImNvbmZpZyIsImlzVHJpYWwiLCJleHBpcnkiLCJsaWNlbnNlSW5mbyIsInRyaWFsRXhwaXJ5IiwiaGlnaGxpZ2h0VHJpYWwiLCJmZWF0dXJlVG9nZ2xlcyIsImZlYXR1cmVIaWdobGlnaHRzIiwiUmVhY3QiLCJCdXR0b24iLCJJY29uIiwiRGFzaGJvYXJkc1RhYmxlIiwiZGFzaGJvYXJkcyIsIm9uSW1wb3J0Iiwib25SZW1vdmUiLCJidXR0b25UZXh0IiwiZGFzaGJvYXJkIiwicmV2aXNpb24iLCJpbXBvcnRlZFJldmlzaW9uIiwibWFwIiwiaW5kZXgiLCJpbXBvcnRlZCIsImltcG9ydGVkVXJsIiwidGl0bGUiLCJ0ZXh0QWxpZ24iLCJkYXNoYm9hcmRJZCIsIlB1cmVDb21wb25lbnQiLCJjb25uZWN0IiwiUGFnZSIsImdldE5hdk1vZGVsIiwiaW1wb3J0RGFzaGJvYXJkIiwicmVtb3ZlRGFzaGJvYXJkIiwibG9hZFBsdWdpbkRhc2hib2FyZHMiLCJEYXNoYm9hcmRUYWJsZSIsImxvYWREYXRhU291cmNlIiwiZ2V0RGF0YVNvdXJjZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicHJvcHMiLCJkYXRhU291cmNlSWQiLCJtYXRjaCIsInBhcmFtcyIsInVpZCIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJwbHVnaW5zIiwiZGF0YVNvdXJjZSIsImRhdGFTb3VyY2VzIiwiaXNMb2FkaW5nIiwiaXNMb2FkaW5nUGx1Z2luRGFzaGJvYXJkcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIkRhdGFTb3VyY2VEYXNoYm9hcmRzIiwib3ZlcndyaXRlIiwiZGF0YSIsInBsdWdpbklkIiwicGF0aCIsImlucHV0cyIsInB1c2giLCJuYW1lIiwidHlwZSIsInZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXIiLCJsYXN0VmFsdWVGcm9tIiwibG9jYXRpb25VdGlsIiwiRGF0YVNvdXJjZVdpdGhCYWNrZW5kIiwibG9jYXRpb25TZXJ2aWNlIiwidXBkYXRlTmF2SW5kZXgiLCJnZXRCYWNrZW5kU3J2IiwiYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0iLCJnZXREYXRhc291cmNlU3J2IiwiZ2V0UGx1Z2luU2V0dGluZ3MiLCJpbXBvcnREYXRhU291cmNlUGx1Z2luIiwiY29udGV4dFNydiIsImJ1aWxkQ2F0ZWdvcmllcyIsImJ1aWxkTmF2TW9kZWwiLCJkYXRhU291cmNlTG9hZGVkIiwiZGF0YVNvdXJjZU1ldGFMb2FkZWQiLCJkYXRhU291cmNlUGx1Z2luc0xvYWQiLCJkYXRhU291cmNlUGx1Z2luc0xvYWRlZCIsImRhdGFTb3VyY2VzTG9hZGVkIiwiaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZCIsImluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQiLCJ0ZXN0RGF0YVNvdXJjZUZhaWxlZCIsInRlc3REYXRhU291cmNlU3RhcnRpbmciLCJ0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZCIsImdldERhdGFTb3VyY2VNZXRhIiwiaW5pdERhdGFTb3VyY2VTZXR0aW5ncyIsInBhZ2VJZCIsImRlcGVuZGVuY2llcyIsImxvYWREYXRhU291cmNlTWV0YSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJFcnJvciIsImxvYWRlZERhdGFTb3VyY2UiLCJkYXRhU291cmNlU2V0dGluZ3MiLCJwbHVnaW4iLCJkYXRhU291cmNlTWV0YSIsImltcG9ydGVkUGx1Z2luIiwiZXJyIiwidGVzdERhdGFTb3VyY2UiLCJkYXRhU291cmNlTmFtZSIsImRzQXBpIiwiZ2V0IiwidGVzdERhdGFzb3VyY2UiLCJ3aXRoTm9CYWNrZW5kQ2FjaGUiLCJyZXN1bHQiLCJzdGF0dXNUZXh0IiwibWVzc2FnZSIsImVyck1lc3NhZ2UiLCJkZXRhaWxzIiwibG9hZERhdGFTb3VyY2VzIiwicmVzcG9uc2UiLCJnZXREYXRhU291cmNlVXNpbmdVaWRPcklkIiwicGx1Z2luSW5mbyIsImlzQmFja2VuZCIsIkRhdGFTb3VyY2VDbGFzcyIsInByb3RvdHlwZSIsIm1ldGEiLCJiYWNrZW5kIiwiYnlVaWQiLCJmZXRjaCIsIm1ldGhvZCIsInVybCIsInNob3dFcnJvckFsZXJ0Iiwib2siLCJjb25zb2xlIiwibG9nIiwiaWQiLCJwYXJzZUludCIsIk51bWJlciIsImlzTmFOIiwidG9TdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJhc3N1cmVCYXNlVXJsIiwiYWRkRGF0YVNvdXJjZSIsImdldFN0b3JlIiwibmV3SW5zdGFuY2UiLCJhY2Nlc3MiLCJpc0RlZmF1bHQiLCJsZW5ndGgiLCJuYW1lRXhpdHMiLCJmaW5kTmV3TmFtZSIsInBvc3QiLCJyZWxvYWQiLCJmZXRjaFVzZXJQZXJtaXNzaW9ucyIsImRhdGFzb3VyY2UiLCJsb2FkRGF0YVNvdXJjZVBsdWdpbnMiLCJlbmFibGVkIiwiY2F0ZWdvcmllcyIsInVwZGF0ZURhdGFTb3VyY2UiLCJwdXQiLCJkZWxldGVEYXRhU291cmNlIiwiZGVsZXRlIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJuYW1lSGFzU3VmZml4IiwiZ2V0TmV3TmFtZSIsImluY3JlbWVudExhc3REaWdpdCIsImdldExhc3REaWdpdCIsImVuZHNXaXRoIiwic2xpY2UiLCJkaWdpdCIsIlBsdWdpblR5cGUiLCJmZWF0dXJlRW5hYmxlZCIsIml0ZW0iLCJjYXRlZ29yeUluZGV4IiwicGx1Z2luSW5kZXgiLCJlbnRlcnByaXNlUGx1Z2lucyIsImdldEVudGVycHJpc2VQaGFudG9tUGx1Z2lucyIsImNhdGVnb3J5IiwiZW50ZXJwcmlzZVBsdWdpbiIsImZpbmQiLCJlbnRlcnByaXNlIiwidW5saWNlbnNlZCIsImluZm8iLCJsaW5rcyIsImxpbmsiLCJnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luIiwic29ydFBsdWdpbnMiLCJjIiwic29ydGluZ1J1bGVzIiwicHJvbWV0aGV1cyIsImdyYXBoaXRlIiwibG9raSIsIm15c3FsIiwiamFlZ2VyIiwicG9zdGdyZXMiLCJnY2xvdWQiLCJzb3J0IiwiYSIsImIiLCJhU29ydCIsImJTb3J0IiwiZ2V0UGhhbnRvbVBsdWdpbiIsImRlc2NyaXB0aW9uIiwiaW1nVXJsIiwibW9kdWxlIiwiYmFzZVVybCIsImxvZ29zIiwic21hbGwiLCJsYXJnZSIsImF1dGhvciIsInNjcmVlbnNob3RzIiwidXBkYXRlZCIsInZlcnNpb24iLCJvcHRpb25zIiwicGx1Z2luQ2F0YWxvZ1VSTCIsIlByb0JhZGdlIiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsImxvYWRpbmdEU1R5cGUiLCJwbHVnaW5NZXRhIiwiaGlnaGxpZ2h0c0VuYWJsZWQiLCJpbWciLCJzdWJUaXRsZSIsInRleHQiLCJicmVhZGNydW1icyIsImNoaWxkcmVuIiwiYWN0aXZlIiwiaWNvbiIsImNvbmZpZ1BhZ2VzIiwicGFnZSIsImluY2x1ZGVzIiwiaGFzRGFzaGJvYXJkcyIsImhhc1JvbGUiLCJpc0xvYWRpbmdOYXYiLCJwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCIsImRzUGVybWlzc2lvbnMiLCJ0YWJTdWZmaXgiLCJleHBlcmltZW50SWQiLCJldmVudFZhcmlhbnQiLCJoYXNQZXJtaXNzaW9uIiwiRGF0YVNvdXJjZXNQZXJtaXNzaW9uc1JlYWQiLCJhbmFseXRpY3NFeHBlcmltZW50SWQiLCJhbmFseXRpY3MiLCJjYWNoaW5nRXhwZXJpbWVudElkIiwiY2FjaGluZyIsImhpZGVGcm9tVGFicyIsImdldERhdGFTb3VyY2VOYXYiLCJtYWluIiwicGFnZU5hbWUiLCJub2RlIiwiY2hpbGQiLCJpbmRleE9mIiwiZ2V0RGF0YVNvdXJjZUxvYWRpbmdOYXYiLCJiYXNpY0F1dGgiLCJiYXNpY0F1dGhVc2VyIiwiYmFzaWNBdXRoUGFzc3dvcmQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJkYXRhYmFzZSIsImpzb25EYXRhIiwiYXV0aFR5cGUiLCJkZWZhdWx0UmVnaW9uIiwib3JnSWQiLCJwYXNzd29yZCIsInJlYWRPbmx5IiwidHlwZU5hbWUiLCJ0eXBlTG9nb1VybCIsInVzZXIiLCJzZWN1cmVKc29uRmllbGRzIiwiaW5jbHVkZSIsInVuZGVmaW5lZCIsImdldERhdGFTb3VyY2VzIiwicmVnZXgiLCJSZWdFeHAiLCJzZWFyY2hRdWVyeSIsInRlc3QiLCJnZXREYXRhU291cmNlUGx1Z2lucyIsImRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnkiLCJnZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5IiwiZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlIiwibGF5b3V0TW9kZSIsImdldERhdGFTb3VyY2VzQ291bnQiLCJkYXRhU291cmNlc0NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==