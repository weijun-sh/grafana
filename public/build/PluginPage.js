"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PluginPage"],{

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

/***/ }),

/***/ "./public/app/features/plugins/admin/components/AppConfigWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfigCtrlWrapper": () => (/* binding */ AppConfigCtrlWrapper)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _br2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Libraries








class AppConfigCtrlWrapper extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  //@ts-ignore
  // Needed for angular scope
  constructor(props) {
    super(props);

    _defineProperty(this, "element", null);

    _defineProperty(this, "model", void 0);

    _defineProperty(this, "preUpdateHook", () => Promise.resolve());

    _defineProperty(this, "postUpdateHook", () => Promise.resolve());

    _defineProperty(this, "update", () => {
      const pluginId = this.model.id;
      this.preUpdateHook().then(() => {
        const updateCmd = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.extend)({
          enabled: this.model.enabled,
          pinned: this.model.pinned,
          jsonData: this.model.jsonData,
          secureJsonData: this.model.secureJsonData
        }, {});
        return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().post(`/api/plugins/${pluginId}/settings`, updateCmd);
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
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.deprecationWarning)('AppConfig', 'importDashboards()');
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
    // Force a reload after the first mount -- is there a better way to do this?
    setTimeout(() => {
      this.setState({
        refresh: this.state.refresh + 1
      });
    }, 5);
  }

  componentDidUpdate(prevProps) {
    if (!this.element || this.state.angularCtrl) {
      return;
    } // Set a copy of the meta


    this.model = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(this.props.app.meta);
    const loader = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getAngularLoader)();
    const template = '<plugin-component type="app-config-ctrl"></plugin-component>';
    const scopeProps = {
      ctrl: this,
      // used by angular injectorMonkeyPatch to detect this scenario
      isAppConfigCtrl: true
    };
    const angularCtrl = loader.load(this.element, scopeProps, template);
    this.setState({
      angularCtrl
    });
  }

  render() {
    const model = this.model;
    const withRightMargin = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginRight: '8px'
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        ref: element => this.element = element
      }), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})), _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {})), model && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "gf-form",
        children: [!model.enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "primary",
          onClick: this.enable,
          className: withRightMargin,
          children: "Enable"
        }), model.enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "primary",
          onClick: this.update,
          className: withRightMargin,
          children: "Update"
        }), model.enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
          variant: "destructive",
          onClick: this.disable,
          className: withRightMargin,
          children: "Disable"
        })]
      })]
    });
  } //-----------------------------------------------------------
  // Copied from plugin_edit_ctrl
  //-----------------------------------------------------------


}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginDisabledBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDisabledBadge": () => (/* binding */ PluginDisabledBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function PluginDisabledBadge({
  error
}) {
  const tooltip = errorCodeToTooltip(error);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
    icon: "exclamation-triangle",
    text: "Disabled",
    color: "red",
    tooltip: tooltip
  });
}

function errorCodeToTooltip(error) {
  switch (error) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.modifiedSignature:
      return 'Plugin disabled due to modified content';

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.invalidSignature:
      return 'Plugin disabled due to invalid plugin signature';

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.missingSignature:
      return 'Plugin disabled due to missing plugin signature';

    default:
      return `Plugin disabled due to unkown error: ${error}`;
  }
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginEnterpriseBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginEnterpriseBadge": () => (/* binding */ PluginEnterpriseBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/sharedStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Badge;







function PluginEnterpriseBadge({
  plugin
}) {
  const customBadgeStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(_sharedStyles__WEBPACK_IMPORTED_MODULE_3__.getBadgeColor);

  const onClick = ev => {
    ev.preventDefault();
    window.open(`https://grafana.com/grafana/plugins/${plugin.id}?utm_source=grafana_catalog_learn_more`, '_blank', 'noopener,noreferrer');
  };

  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)('enterprise.plugins')) {
    return _Badge || (_Badge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
      text: "Enterprise",
      color: "blue"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureBadge, {
      status: plugin.signature
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
      icon: "lock",
      "aria-label": "lock icon",
      text: "Enterprise",
      color: "blue",
      className: customBadgeStyles
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      size: "sm",
      fill: "text",
      icon: "external-link-alt",
      onClick: onClick,
      children: "Learn more"
    })]
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginInstallBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginInstalledBadge": () => (/* binding */ PluginInstalledBadge)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _sharedStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/sharedStyles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function PluginInstalledBadge() {
  const customBadgeStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(_sharedStyles__WEBPACK_IMPORTED_MODULE_2__.getBadgeColor);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Badge, {
    text: "Installed",
    color: "orange",
    className: customBadgeStyles
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/PluginUpdateAvailableBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginUpdateAvailableBadge": () => (/* binding */ PluginUpdateAvailableBadge),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function PluginUpdateAvailableBadge({
  plugin
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles); // Currently renderer plugins are not supported by the catalog due to complications related to installation / update / uninstall.

  if (plugin.hasUpdate && !plugin.isCore && plugin.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginType.renderer) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: styles.hasUpdate,
      children: "Update available!"
    });
  }

  return null;
}
const getStyles = theme => {
  return {
    hasUpdate: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.secondary};
      font-size: ${theme.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDisabledBadge": () => (/* reexport safe */ _PluginDisabledBadge__WEBPACK_IMPORTED_MODULE_0__.PluginDisabledBadge),
/* harmony export */   "PluginEnterpriseBadge": () => (/* reexport safe */ _PluginEnterpriseBadge__WEBPACK_IMPORTED_MODULE_2__.PluginEnterpriseBadge),
/* harmony export */   "PluginInstalledBadge": () => (/* reexport safe */ _PluginInstallBadge__WEBPACK_IMPORTED_MODULE_1__.PluginInstalledBadge),
/* harmony export */   "PluginUpdateAvailableBadge": () => (/* reexport safe */ _PluginUpdateAvailableBadge__WEBPACK_IMPORTED_MODULE_3__.PluginUpdateAvailableBadge)
/* harmony export */ });
/* harmony import */ var _PluginDisabledBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginDisabledBadge.tsx");
/* harmony import */ var _PluginInstallBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginInstallBadge.tsx");
/* harmony import */ var _PluginEnterpriseBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginEnterpriseBadge.tsx");
/* harmony import */ var _PluginUpdateAvailableBadge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/PluginUpdateAvailableBadge.tsx");





/***/ }),

/***/ "./public/app/features/plugins/admin/components/Badges/sharedStyles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBadgeColor": () => (/* binding */ getBadgeColor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getBadgeColor = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  background: ${theme.colors.background.primary};
  border-color: ${theme.colors.border.strong};
  color: ${theme.colors.text.secondary};
`;

/***/ }),

/***/ "./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithApp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedWithApp": () => (/* binding */ GetStartedWithApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/api.ts");
/* harmony import */ var _hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/hooks/usePluginConfig.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function GetStartedWithApp({
  plugin
}) {
  const {
    value: pluginConfig
  } = (0,_hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_3__.usePluginConfig)(plugin);

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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [!enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "primary",
      onClick: enable,
      children: "Enable"
    }), enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      variant: "destructive",
      onClick: disable,
      children: "Disable"
    })]
  });
}

const updatePluginSettingsAndReload = async (id, data) => {
  try {
    await (0,_api__WEBPACK_IMPORTED_MODULE_2__.updatePluginSettings)(id, data); // Reloading the page as the plugin meta changes made here wouldn't be propagated throughout the app.

    window.location.reload();
  } catch (e) {
    console.error('Error while updating the plugin', e);
  }
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithDataSource.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedWithDataSource": () => (/* binding */ GetStartedWithDataSource)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_datasources_state_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/permissions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function GetStartedWithDataSource({
  plugin
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const onAddDataSource = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    const meta = {
      name: plugin.name,
      id: plugin.id
    };
    dispatch((0,app_features_datasources_state_actions__WEBPACK_IMPORTED_MODULE_3__.addDataSource)(meta));
  }, [dispatch, plugin]);

  if (!(0,_permissions__WEBPACK_IMPORTED_MODULE_4__.isDataSourceEditor)()) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "primary",
    onClick: onAddDataSource,
    children: ["Create a ", plugin.name, " data source"]
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithPlugin.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedWithPlugin": () => (/* binding */ GetStartedWithPlugin)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _GetStartedWithApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithApp.tsx");
/* harmony import */ var _GetStartedWithDataSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithDataSource.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function GetStartedWithPlugin({
  plugin
}) {
  if (!plugin.isInstalled || plugin.isDisabled) {
    return null;
  }

  switch (plugin.type) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginType.datasource:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_GetStartedWithDataSource__WEBPACK_IMPORTED_MODULE_3__.GetStartedWithDataSource, {
        plugin: plugin
      });

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginType.app:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_GetStartedWithApp__WEBPACK_IMPORTED_MODULE_2__.GetStartedWithApp, {
        plugin: plugin
      });

    default:
      return null;
  }
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/GetStartedWithPlugin/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetStartedWithPlugin": () => (/* reexport safe */ _GetStartedWithPlugin__WEBPACK_IMPORTED_MODULE_0__.GetStartedWithPlugin)
/* harmony export */ });
/* harmony import */ var _GetStartedWithPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/components/GetStartedWithPlugin/GetStartedWithPlugin.tsx");


/***/ }),

/***/ "./public/app/features/plugins/admin/components/InstallControls/ExternallyManagedButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternallyManagedButton": () => (/* binding */ ExternallyManagedButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function ExternallyManagedButton({
  pluginId,
  pluginStatus
}) {
  const externalManageLink = `${(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getExternalManageLink)(pluginId)}/?tab=installation`;

  if (pluginStatus === _types__WEBPACK_IMPORTED_MODULE_3__.PluginStatus.UPDATE) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.HorizontalGroup, {
      height: "auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
        href: externalManageLink,
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Update via grafana.com"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
        variant: "destructive",
        href: externalManageLink,
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Uninstall via grafana.com"
      })]
    });
  }

  if (pluginStatus === _types__WEBPACK_IMPORTED_MODULE_3__.PluginStatus.UNINSTALL) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
      variant: "destructive",
      href: externalManageLink,
      target: "_blank",
      rel: "noopener noreferrer",
      children: "Uninstall via grafana.com"
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, {
    href: externalManageLink,
    target: "_blank",
    rel: "noopener noreferrer",
    children: "Install via grafana.com"
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/InstallControls/InstallControls.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallControls": () => (/* binding */ InstallControls),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/permissions.ts");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _ExternallyManagedButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/plugins/admin/components/InstallControls/ExternallyManagedButton.tsx");
/* harmony import */ var _InstallControlsButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/plugins/admin/components/InstallControls/InstallControlsButton.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _a, _Icon2;














const InstallControls = ({
  plugin,
  latestCompatibleVersion
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const isExternallyManaged = _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.config.pluginAdminExternalManageEnabled;
  const hasPermission = (0,_permissions__WEBPACK_IMPORTED_MODULE_6__.isGrafanaAdmin)();
  const isRemotePluginsAvailable = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_7__.useIsRemotePluginsAvailable)();
  const isCompatible = Boolean(latestCompatibleVersion);
  const isInstallControlsDisabled = plugin.isCore || plugin.isDisabled || !(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.isInstallControlsEnabled)();
  const pluginStatus = plugin.isInstalled ? plugin.hasUpdate ? _types__WEBPACK_IMPORTED_MODULE_8__.PluginStatus.UPDATE : _types__WEBPACK_IMPORTED_MODULE_8__.PluginStatus.UNINSTALL : _types__WEBPACK_IMPORTED_MODULE_8__.PluginStatus.INSTALL;

  if (isInstallControlsDisabled) {
    return null;
  }

  if (plugin.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginType.renderer) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: styles.message,
      children: "Renderer plugins cannot be managed by the Plugin Catalog."
    });
  }

  if (plugin.isEnterprise && !(0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.featureEnabled)('enterprise.plugins')) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.HorizontalGroup, {
      height: "auto",
      align: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
        className: styles.message,
        children: "No valid Grafana Enterprise license detected."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
        href: `${(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.getExternalManageLink)(plugin.id)}?utm_source=grafana_catalog_learn_more`,
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: styles.message,
      children: "This is a development build of the plugin and can't be uninstalled."
    });
  }

  if (!hasPermission && !isExternallyManaged) {
    const message = `You do not have permission to ${pluginStatus} this plugin.`;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: styles.message,
      children: message
    });
  }

  if (!plugin.isPublished) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.message,
      children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        name: "exclamation-triangle"
      })), " This plugin is not published to", ' ', _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
        href: "https://www.grafana.com/plugins",
        target: "__blank",
        rel: "noreferrer",
        children: "grafana.com/plugins"
      })), ' ', "and can't be managed via the catalog."]
    });
  }

  if (!isCompatible) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.message,
      children: [_Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        name: "exclamation-triangle"
      })), "\xA0This plugin doesn't support your version of Grafana."]
    });
  }

  if (isExternallyManaged) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ExternallyManagedButton__WEBPACK_IMPORTED_MODULE_9__.ExternallyManagedButton, {
      pluginId: plugin.id,
      pluginStatus: pluginStatus
    });
  }

  if (!isRemotePluginsAvailable) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: styles.message,
      children: "The install controls have been disabled because the Grafana server cannot access grafana.com."
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_InstallControlsButton__WEBPACK_IMPORTED_MODULE_10__.InstallControlsButton, {
    plugin: plugin,
    pluginStatus: pluginStatus,
    latestCompatibleVersion: latestCompatibleVersion
  });
};
const getStyles = theme => {
  return {
    message: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.secondary};
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/InstallControls/InstallControlsButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallControlsButton": () => (/* binding */ InstallControlsButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









function InstallControlsButton({
  plugin,
  pluginStatus,
  latestCompatibleVersion
}) {
  var _Button;

  const {
    isInstalling,
    error: errorInstalling
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useInstallStatus)();
  const {
    isUninstalling,
    error: errorUninstalling
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useUninstallStatus)();
  const install = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useInstall)();
  const uninstall = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_4__.useUninstall)();
  const [isConfirmModalVisible, setIsConfirmModalVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const showConfirmModal = () => setIsConfirmModalVisible(true);

  const hideConfirmModal = () => setIsConfirmModalVisible(false);

  const uninstallBtnText = isUninstalling ? 'Uninstalling' : 'Uninstall';

  const onInstall = async () => {
    await install(plugin.id, latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version);

    if (!errorInstalling) {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_3__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertSuccess, [`Installed ${plugin.name}`]);
    }
  };

  const onUninstall = async () => {
    hideConfirmModal();
    await uninstall(plugin.id);

    if (!errorUninstalling) {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_3__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertSuccess, [`Uninstalled ${plugin.name}`]);
    }
  };

  const onUpdate = async () => {
    await install(plugin.id, latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version, true);

    if (!errorInstalling) {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_3__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.AppEvents.alertSuccess, [`Updated ${plugin.name}`]);
    }
  };

  if (pluginStatus === _types__WEBPACK_IMPORTED_MODULE_5__.PluginStatus.UNINSTALL) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal, {
        isOpen: isConfirmModalVisible,
        title: `Uninstall ${plugin.name}`,
        body: "Are you sure you want to uninstall this plugin?",
        confirmText: "Confirm",
        icon: "exclamation-triangle",
        onConfirm: onUninstall,
        onDismiss: hideConfirmModal
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
        height: "auto",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          variant: "destructive",
          disabled: isUninstalling,
          onClick: showConfirmModal,
          children: uninstallBtnText
        })
      })]
    });
  }

  if (pluginStatus === _types__WEBPACK_IMPORTED_MODULE_5__.PluginStatus.UPDATE) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
      height: "auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        disabled: isInstalling,
        onClick: onUpdate,
        children: isInstalling ? 'Updating' : 'Update'
      }), _Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "destructive",
        disabled: isUninstalling,
        onClick: onUninstall,
        children: uninstallBtnText
      }))]
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
    disabled: isInstalling,
    onClick: onInstall,
    children: isInstalling ? 'Installing' : 'Install'
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/InstallControls/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InstallControls": () => (/* reexport safe */ _InstallControls__WEBPACK_IMPORTED_MODULE_0__.InstallControls),
/* harmony export */   "getStyles": () => (/* reexport safe */ _InstallControls__WEBPACK_IMPORTED_MODULE_0__.getStyles)
/* harmony export */ });
/* harmony import */ var _InstallControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/components/InstallControls/InstallControls.tsx");


/***/ }),

/***/ "./public/app/features/plugins/admin/components/Loader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const Loader = ({
  text = 'Loading...'
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "page-loader-wrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, {
      text: text
    })
  });
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDashboards.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDashboards": () => (/* binding */ PluginDashboards)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_features_datasources_DashboardsTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/datasources/DashboardsTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _div2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class PluginDashboards extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "importAll", () => {
      this.importNext(0);
    });

    _defineProperty(this, "importNext", index => {
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

    _defineProperty(this, "import", (dash, overwrite) => {
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

      return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().post(`/api/dashboards/import`, installCmd).then(res => {
        app_core_core__WEBPACK_IMPORTED_MODULE_4__.appEvents.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertSuccess, ['Dashboard Imported', dash.title]);
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.extend)(dash, res);
        this.setState({
          dashboards: [...this.state.dashboards]
        });
      });
    });

    _defineProperty(this, "remove", dash => {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().delete('/api/dashboards/uid/' + dash.uid).then(() => {
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
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getBackendSrv)().get(`/api/plugins/${pluginId}/dashboards`).then(dashboards => {
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
      return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: "loading..."
      }));
    }

    if (!dashboards || !dashboards.length) {
      return _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: "No dashboards are included with this plugin"
      }));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_features_datasources_DashboardsTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
        dashboards: dashboards,
        onImport: this.import,
        onRemove: this.remove
      })
    });
  }

}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsBody.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsBody": () => (/* binding */ PluginDetailsBody),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_VersionList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/components/VersionList.tsx");
/* harmony import */ var _hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/hooks/usePluginConfig.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _AppConfigWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/components/AppConfigWrapper.tsx");
/* harmony import */ var _PluginDashboards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDashboards.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;










function PluginDetailsBody({
  plugin,
  queryParams,
  pageId
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    value: pluginConfig
  } = (0,_hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_4__.usePluginConfig)(plugin);

  if (pageId === _types__WEBPACK_IMPORTED_MODULE_5__.PluginTabIds.OVERVIEW) {
    var _plugin$details$readm, _plugin$details;

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.readme, styles.container),
      dangerouslySetInnerHTML: {
        __html: (_plugin$details$readm = (_plugin$details = plugin.details) === null || _plugin$details === void 0 ? void 0 : _plugin$details.readme) !== null && _plugin$details$readm !== void 0 ? _plugin$details$readm : 'No plugin help or readme markdown file was found'
      }
    });
  }

  if (pageId === _types__WEBPACK_IMPORTED_MODULE_5__.PluginTabIds.VERSIONS) {
    var _plugin$details2;

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_VersionList__WEBPACK_IMPORTED_MODULE_3__.VersionList, {
        versions: (_plugin$details2 = plugin.details) === null || _plugin$details2 === void 0 ? void 0 : _plugin$details2.versions,
        installedVersion: plugin.installedVersion
      })
    });
  }

  if (pageId === _types__WEBPACK_IMPORTED_MODULE_5__.PluginTabIds.CONFIG && pluginConfig !== null && pluginConfig !== void 0 && pluginConfig.angularConfigCtrl) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_AppConfigWrapper__WEBPACK_IMPORTED_MODULE_6__.AppConfigCtrlWrapper, {
        app: pluginConfig
      })
    });
  }

  if (pluginConfig !== null && pluginConfig !== void 0 && pluginConfig.configPages) {
    for (const configPage of pluginConfig.configPages) {
      var _configPage$body;

      if (pageId === configPage.id) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: styles.container,
          children: _configPage$body || (_configPage$body = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(configPage.body, {
            plugin: pluginConfig,
            query: queryParams
          }))
        });
      }
    }
  }

  if (pageId === _types__WEBPACK_IMPORTED_MODULE_5__.PluginTabIds.DASHBOARDS && pluginConfig) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.container,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_PluginDashboards__WEBPACK_IMPORTED_MODULE_7__.PluginDashboards, {
        plugin: pluginConfig === null || pluginConfig === void 0 ? void 0 : pluginConfig.meta
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: styles.container,
    children: _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
      children: "Page not found."
    }))
  });
}
const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(3, 4)};
  `,
  readme: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
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

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsDisabledError.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsDisabledError": () => (/* binding */ PluginDetailsDisabledError)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _a, _p2, _p3, _p4, _p5;







function PluginDetailsDisabledError({
  className,
  plugin
}) {
  if (!plugin.isDisabled) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
    severity: "error",
    title: "Plugin disabled",
    className: className,
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PluginPage.disabledInfo,
    children: [renderDescriptionFromError(plugin.error), _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      children: "Please contact your server administrator to get this resolved."
    })), _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
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
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.modifiedSignature:
      return _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that the content of this plugin does not match its signature. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."
      }));

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.invalidSignature:
      return _p3 || (_p3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that it was invalid. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."
      }));

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.missingSignature:
      return _p4 || (_p4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that there is no signature for this plugin. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."
      }));

    default:
      return _p5 || (_p5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: "We failed to run this plugin due to an unkown reason and have therefor disabled it. We recommend you to reinstall the plugin to make sure you are running a working version of this plugin."
      }));
  }
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsHeader": () => (/* binding */ PluginDetailsHeader),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _Badges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/components/Badges/index.ts");
/* harmony import */ var _GetStartedWithPlugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/components/GetStartedWithPlugin/index.ts");
/* harmony import */ var _InstallControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/admin/components/InstallControls/index.tsx");
/* harmony import */ var _PluginDetailsHeaderDependencies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsHeaderDependencies.tsx");
/* harmony import */ var _PluginDetailsHeaderSignature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsHeaderSignature.tsx");
/* harmony import */ var _PluginLogo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginLogo.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;













function PluginDetailsHeader({
  plugin,
  currentUrl,
  parentUrl
}) {
  var _plugin$details, _plugin$details2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const latestCompatibleVersion = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.getLatestCompatibleVersion)((_plugin$details = plugin.details) === null || _plugin$details === void 0 ? void 0 : _plugin$details.versions);
  const version = plugin.installedVersion || (latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "page-container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: styles.headerContainer,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PluginLogo__WEBPACK_IMPORTED_MODULE_9__.PluginLogo, {
          alt: `${plugin.name} logo`,
          src: plugin.info.logos.small,
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
              object-fit: contain;
              width: 100%;
              height: 68px;
              max-width: 68px;
            `
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: styles.headerWrapper,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("nav", {
            className: styles.breadcrumb,
            "aria-label": "Breadcrumb",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("ol", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
                  className: styles.textUnderline,
                  href: parentUrl,
                  children: "Plugins"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("li", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
                  href: currentUrl,
                  "aria-current": "page",
                  children: plugin.name
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: styles.headerInformationRow,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
              children: plugin.orgName
            }), (_plugin$details2 = plugin.details) === null || _plugin$details2 === void 0 ? void 0 : _plugin$details2.links.map(link => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
              href: link.url,
              children: link.name
            }, link.name)), plugin.downloads > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
              children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                name: "cloud-download"
              })), ` ${new Intl.NumberFormat().format(plugin.downloads)}`, ' ']
            }), Boolean(version) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
              children: version
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PluginDetailsHeaderSignature__WEBPACK_IMPORTED_MODULE_8__.PluginDetailsHeaderSignature, {
              plugin: plugin
            }), plugin.isDisabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Badges__WEBPACK_IMPORTED_MODULE_4__.PluginDisabledBadge, {
              error: plugin.error
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PluginDetailsHeaderDependencies__WEBPACK_IMPORTED_MODULE_7__.PluginDetailsHeaderDependencies, {
            plugin: plugin,
            latestCompatibleVersion: latestCompatibleVersion,
            className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.headerInformationRow, styles.headerInformationRowSecondary)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            children: plugin.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
            height: "auto",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_InstallControls__WEBPACK_IMPORTED_MODULE_6__.InstallControls, {
              plugin: plugin,
              latestCompatibleVersion: latestCompatibleVersion
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_GetStartedWithPlugin__WEBPACK_IMPORTED_MODULE_5__.GetStartedWithPlugin, {
              plugin: plugin
            })]
          })]
        })]
      })
    })
  });
}
const getStyles = theme => {
  return {
    headerContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      margin-bottom: ${theme.spacing(3)};
      margin-top: ${theme.spacing(3)};
      min-height: 120px;
    `,
    headerWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing(3)};
    `,
    breadcrumb: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
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
    headerInformationRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
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
    headerInformationRowSecondary: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.body.fontSize};
    `,
    headerOrgName: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-size: ${theme.typography.h4.fontSize};
    `,
    signature: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(3)};
      margin-bottom: 0;
    `,
    textUnderline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      text-decoration: underline;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsHeaderDependencies.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsHeaderDependencies": () => (/* binding */ PluginDetailsHeaderDependencies),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function PluginDetailsHeaderDependencies({
  plugin,
  latestCompatibleVersion,
  className
}) {
  var _plugin$details, _plugin$details2, _plugin$details3;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const pluginDependencies = (_plugin$details = plugin.details) === null || _plugin$details === void 0 ? void 0 : _plugin$details.pluginDependencies;
  const grafanaDependency = plugin.isInstalled ? (_plugin$details2 = plugin.details) === null || _plugin$details2 === void 0 ? void 0 : _plugin$details2.grafanaDependency : (latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.grafanaDependency) || ((_plugin$details3 = plugin.details) === null || _plugin$details3 === void 0 ? void 0 : _plugin$details3.grafanaDependency);
  const hasNoDependencyInfo = !grafanaDependency && (!pluginDependencies || !pluginDependencies.length);

  if (hasNoDependencyInfo) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.dependencyTitle,
      children: "Dependencies:"
    }), Boolean(grafanaDependency) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "grafana",
        className: styles.icon
      }), "Grafana ", grafanaDependency]
    }), pluginDependencies && pluginDependencies.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: pluginDependencies.map(p => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            name: _types__WEBPACK_IMPORTED_MODULE_3__.PluginIconName[p.type],
            className: styles.icon
          }), p.name, " ", p.version]
        }, p.name);
      })
    })]
  });
}
const getStyles = theme => {
  return {
    dependencyTitle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-weight: ${theme.typography.fontWeightBold};
      margin-right: ${theme.spacing(0.5)};

      &::after {
        content: '';
        padding: 0;
      }
    `,
    icon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      color: ${theme.colors.text.secondary};
      margin-right: ${theme.spacing(0.5)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsHeaderSignature.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsHeaderSignature": () => (/* binding */ PluginDetailsHeaderSignature),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _PluginSignatureDetailsBadge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginSignatureDetailsBadge.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







// Designed to show plugin signature information in the header on the plugin's details page
function PluginDetailsHeaderSignature({
  plugin
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const isSignatureValid = plugin.signature === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureStatus.valid;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
      href: "https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",
      target: "_blank",
      rel: "noreferrer",
      className: styles.link,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.PluginSignatureBadge, {
        status: plugin.signature
      })
    }), isSignatureValid && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PluginSignatureDetailsBadge__WEBPACK_IMPORTED_MODULE_4__.PluginSignatureDetailsBadge, {
      signatureType: plugin.signatureType,
      signatureOrg: plugin.signatureOrg
    })]
  });
}
const getStyles = theme => {
  return {
    container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
    `,
    link: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: inline-flex;
      align-items: center;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginDetailsSignature.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginDetailsSignature": () => (/* binding */ PluginDetailsSignature)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _a;







// Designed to show signature information inside the active tab on the plugin's details page
function PluginDetailsSignature({
  className,
  plugin
}) {
  const isSignatureValid = plugin.signature === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginSignatureStatus.valid;
  const isCore = plugin.signature === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginSignatureStatus.internal;
  const isDisabled = plugin.isDisabled && isDisabledDueTooSignatureError(plugin.error); // The basic information is already available in the header

  if (isSignatureValid || isCore || isDisabled) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
    severity: "warning",
    title: "Invalid plugin signature",
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PluginPage.signatureInfo,
    className: className,
    children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      children: "Grafana Labs checks each plugin to verify that it has a valid digital signature. Plugin signature verification is part of our security measures to ensure plugins are safe and trustworthy. Grafana Labs can\u2019t guarantee the integrity of this unsigned plugin. Ask the plugin author to request it to be signed."
    })), _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
      href: "https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",
      className: "external-link",
      target: "_blank",
      rel: "noreferrer",
      children: "Read more about plugins signing."
    }))]
  });
}

function isDisabledDueTooSignatureError(error) {
  // If the plugin is disabled due to signature error we rely on the disabled
  // error message instad of the warning about the signature.
  switch (error) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.invalidSignature:
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.missingSignature:
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginErrorCode.modifiedSignature:
      return true;

    default:
      return false;
  }
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginLogo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginLogo": () => (/* binding */ PluginLogo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");


function PluginLogo({
  alt,
  className,
  src,
  height
}) {
  // @ts-ignore - react doesn't know about loading attr.
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
    src: src,
    className: className,
    alt: alt,
    loading: "lazy",
    height: height
  });
}

/***/ }),

/***/ "./public/app/features/plugins/admin/components/PluginSignatureDetailsBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsBadge": () => (/* binding */ DetailsBadge),
/* harmony export */   "PluginSignatureDetailsBadge": () => (/* binding */ PluginSignatureDetailsBadge)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const SIGNATURE_ICONS = {
  [_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PluginSignatureType.grafana]: 'grafana',
  [_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PluginSignatureType.commercial]: 'shield',
  [_grafana_data__WEBPACK_IMPORTED_MODULE_3__.PluginSignatureType.community]: 'shield',
  DEFAULT: 'shield-exclamation'
};
// Shows more information about a valid signature
function PluginSignatureDetailsBadge({
  signatureType,
  signatureOrg = ''
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);

  if (!signatureType && !signatureOrg) {
    return null;
  }

  const signatureTypeText = signatureType === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.PluginSignatureType.grafana ? 'Grafana Labs' : (0,lodash__WEBPACK_IMPORTED_MODULE_1__.capitalize)(signatureType);
  const signatureIcon = SIGNATURE_ICONS[signatureType || ''] || SIGNATURE_ICONS.DEFAULT;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(DetailsBadge, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
        className: styles.strong,
        children: "Level:\xA0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        size: "xs",
        name: signatureIcon
      }), "\xA0", signatureTypeText]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(DetailsBadge, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
        className: styles.strong,
        children: "Signed by:"
      }), " ", signatureOrg]
    })]
  });
}
const DetailsBadge = ({
  children
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Badge, {
    color: "green",
    className: styles.badge,
    text: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: children
    })
  });
};

const getStyles = theme => ({
  badge: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background-color: ${theme.colors.background.canvas};
    border-color: ${theme.colors.border.strong};
    color: ${theme.colors.text.secondary};
    margin-left: ${theme.spacing()};
  `,
  strong: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.text.primary};
  `,
  icon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(0.5)};
  `
});

/***/ }),

/***/ "./public/app/features/plugins/admin/components/VersionList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VersionList": () => (/* binding */ VersionList)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _thead;








const VersionList = ({
  versions = [],
  installedVersion
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const latestCompatibleVersion = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getLatestCompatibleVersion)(versions);

  if (versions.length === 0) {
    return _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      children: "No version history was found."
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("table", {
    className: styles.table,
    children: [_thead || (_thead = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("thead", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
          children: "Version"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("th", {
          children: "Last updated"
        })]
      })
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("tbody", {
      children: versions.map(version => {
        const isInstalledVersion = installedVersion === version.version;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("tr", {
          children: [isInstalledVersion ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
            className: styles.currentVersion,
            children: [version.version, " (installed version)"]
          }) : version.version === (latestCompatibleVersion === null || latestCompatibleVersion === void 0 ? void 0 : latestCompatibleVersion.version) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("td", {
            children: [version.version, " (latest compatible version)"]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
            children: version.version
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("td", {
            className: isInstalledVersion ? styles.currentVersion : '',
            children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormatTimeAgo)(version.createdAt)
          })]
        }, version.version);
      })
    })]
  });
};

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(2, 4, 3)};
  `,
  table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
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
  currentVersion: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-weight: ${theme.typography.fontWeightBold};
  `
});

/***/ }),

/***/ "./public/app/features/plugins/admin/hooks/usePluginConfig.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePluginConfig": () => (/* binding */ usePluginConfig)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/utils.ts");


const usePluginConfig = plugin => {
  return (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(async () => {
    if (!plugin) {
      return null;
    }

    if (plugin.isInstalled && !plugin.isDisabled) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.loadPlugin)(plugin.id);
    }

    return null;
  }, [plugin === null || plugin === void 0 ? void 0 : plugin.id, plugin === null || plugin === void 0 ? void 0 : plugin.isInstalled, plugin === null || plugin === void 0 ? void 0 : plugin.isDisabled]);
};

/***/ }),

/***/ "./public/app/features/plugins/admin/hooks/usePluginDetailsTabs.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePluginDetailsTabs": () => (/* binding */ usePluginDetailsTabs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/hooks/usePluginConfig.tsx");
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/permissions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");






const usePluginDetailsTabs = (plugin, defaultTabs = []) => {
  const {
    loading,
    error,
    value: pluginConfig
  } = (0,_hooks_usePluginConfig__WEBPACK_IMPORTED_MODULE_2__.usePluginConfig)(plugin);
  const isPublished = Boolean(plugin === null || plugin === void 0 ? void 0 : plugin.isPublished);
  const {
    pathname
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  const [tabs, defaultTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const canConfigurePlugins = (0,_permissions__WEBPACK_IMPORTED_MODULE_3__.isOrgAdmin)();
    const tabs = [...defaultTabs];
    let defaultTab;

    if (isPublished) {
      tabs.push({
        label: _types__WEBPACK_IMPORTED_MODULE_4__.PluginTabLabels.VERSIONS,
        icon: 'history',
        id: _types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.VERSIONS,
        href: `${pathname}?page=${_types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.VERSIONS}`
      });
    } // Not extending the tabs with the config pages if the plugin is not installed


    if (!pluginConfig) {
      defaultTab = _types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.OVERVIEW;
      return [tabs, defaultTab];
    }

    if (canConfigurePlugins) {
      if (pluginConfig.meta.type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginType.app) {
        var _pluginConfig$meta$in;

        if (pluginConfig.angularConfigCtrl) {
          tabs.push({
            label: 'Config',
            icon: 'cog',
            id: _types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.CONFIG,
            href: `${pathname}?page=${_types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.CONFIG}`
          });
          defaultTab = _types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.CONFIG;
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

        if ((_pluginConfig$meta$in = pluginConfig.meta.includes) !== null && _pluginConfig$meta$in !== void 0 && _pluginConfig$meta$in.find(include => include.type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginIncludeType.dashboard)) {
          tabs.push({
            label: 'Dashboards',
            icon: 'apps',
            id: _types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.DASHBOARDS,
            href: `${pathname}?page=${_types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.DASHBOARDS}`
          });
        }
      }
    }

    if (!defaultTab) {
      defaultTab = _types__WEBPACK_IMPORTED_MODULE_4__.PluginTabIds.OVERVIEW;
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

/***/ }),

/***/ "./public/app/features/plugins/admin/pages/PluginDetails.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginDetails),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_ui_src_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Layout.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/plugins/admin/components/Loader.tsx");
/* harmony import */ var _components_PluginDetailsBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsBody.tsx");
/* harmony import */ var _components_PluginDetailsDisabledError__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsDisabledError.tsx");
/* harmony import */ var _components_PluginDetailsHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsHeader.tsx");
/* harmony import */ var _components_PluginDetailsSignature__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/plugins/admin/components/PluginDetailsSignature.tsx");
/* harmony import */ var _hooks_usePluginDetailsTabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/plugins/admin/hooks/usePluginDetailsTabs.tsx");
/* harmony import */ var _state_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Page, _br;



















function PluginDetails({
  match,
  queryParams
}) {
  var _a;

  const {
    params: {
      pluginId = ''
    },
    url
  } = match;
  const parentUrl = url.substring(0, url.lastIndexOf('/'));
  const defaultTabs = [{
    label: _types__WEBPACK_IMPORTED_MODULE_14__.PluginTabLabels.OVERVIEW,
    icon: 'file-alt',
    id: _types__WEBPACK_IMPORTED_MODULE_14__.PluginTabIds.OVERVIEW,
    href: `${url}?page=${_types__WEBPACK_IMPORTED_MODULE_14__.PluginTabIds.OVERVIEW}`
  }];
  const plugin = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_13__.useGetSingle)(pluginId); // fetches the localplugin settings

  const {
    tabs,
    defaultTab
  } = (0,_hooks_usePluginDetailsTabs__WEBPACK_IMPORTED_MODULE_12__.usePluginDetailsTabs)(plugin, defaultTabs);
  const {
    isLoading: isFetchLoading
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_13__.useFetchStatus)();
  const {
    isLoading: isFetchDetailsLoading
  } = (0,_state_hooks__WEBPACK_IMPORTED_MODULE_13__.useFetchDetailsStatus)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const prevTabs = (0,react_use__WEBPACK_IMPORTED_MODULE_16__["default"])(tabs);
  const pageId = queryParams.page || defaultTab; // If an app plugin is uninstalled we need to reset the active tab when the config / dashboards tabs are removed.

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const hasUninstalledWithConfigPages = prevTabs && prevTabs.length > tabs.length;
    const isViewingAConfigPage = pageId !== _types__WEBPACK_IMPORTED_MODULE_14__.PluginTabIds.OVERVIEW && pageId !== _types__WEBPACK_IMPORTED_MODULE_14__.PluginTabIds.VERSIONS;

    if (hasUninstalledWithConfigPages && isViewingAConfigPage) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.replace(`${url}?page=${_types__WEBPACK_IMPORTED_MODULE_14__.PluginTabIds.OVERVIEW}`);
    }
  }, [pageId, url, tabs, prevTabs]);

  if (isFetchLoading || isFetchDetailsLoading) {
    return _Page || (_Page = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_Loader__WEBPACK_IMPORTED_MODULE_7__.Loader, {})
    }));
  }

  if (!plugin) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui_src_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__.Layout, {
      justify: "center",
      align: "center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
        severity: app_types__WEBPACK_IMPORTED_MODULE_6__.AppNotificationSeverity.Warning,
        title: "Plugin not found",
        children: ["That plugin cannot be found. Please check the url is correct or ", _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("br", {})), "go to the ", _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("a", {
          href: parentUrl,
          children: "plugin catalog"
        })), "."]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_PluginDetailsHeader__WEBPACK_IMPORTED_MODULE_10__.PluginDetailsHeader, {
      currentUrl: `${url}?page=${pageId}`,
      parentUrl: parentUrl,
      plugin: plugin
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page.Contents, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TabsBar, {
        children: tabs.map(tab => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tab, {
            label: tab.label,
            href: tab.href,
            icon: tab.icon,
            active: tab.id === pageId
          }, tab.label);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TabContent, {
        className: styles.tabContent,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_PluginDetailsSignature__WEBPACK_IMPORTED_MODULE_11__.PluginDetailsSignature, {
          plugin: plugin,
          className: styles.alert
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_PluginDetailsDisabledError__WEBPACK_IMPORTED_MODULE_9__.PluginDetailsDisabledError, {
          plugin: plugin,
          className: styles.alert
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_components_PluginDetailsBody__WEBPACK_IMPORTED_MODULE_8__.PluginDetailsBody, {
          queryParams: queryParams,
          plugin: plugin,
          pageId: pageId
        })]
      })]
    })]
  });
}
const getStyles = theme => {
  return {
    alert: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(3)};
      margin-bottom: 0;
    `,
    // Needed due to block formatting context
    tabContent: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      overflow: auto;
    `
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/state/hooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDisplayMode": () => (/* binding */ useDisplayMode),
/* harmony export */   "useFetchAll": () => (/* binding */ useFetchAll),
/* harmony export */   "useFetchDetails": () => (/* binding */ useFetchDetails),
/* harmony export */   "useFetchDetailsStatus": () => (/* binding */ useFetchDetailsStatus),
/* harmony export */   "useFetchStatus": () => (/* binding */ useFetchStatus),
/* harmony export */   "useGetAll": () => (/* binding */ useGetAll),
/* harmony export */   "useGetAllWithFilters": () => (/* binding */ useGetAllWithFilters),
/* harmony export */   "useGetErrors": () => (/* binding */ useGetErrors),
/* harmony export */   "useGetSingle": () => (/* binding */ useGetSingle),
/* harmony export */   "useInstall": () => (/* binding */ useInstall),
/* harmony export */   "useInstallStatus": () => (/* binding */ useInstallStatus),
/* harmony export */   "useIsRemotePluginsAvailable": () => (/* binding */ useIsRemotePluginsAvailable),
/* harmony export */   "useUninstall": () => (/* binding */ useUninstall),
/* harmony export */   "useUninstallStatus": () => (/* binding */ useUninstallStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/helpers.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/admin/state/actions.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/admin/state/reducer.ts");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/state/selectors.ts");






const useGetAllWithFilters = ({
  query = '',
  filterBy = 'installed',
  filterByType = 'all',
  sortBy = _helpers__WEBPACK_IMPORTED_MODULE_2__.Sorters.nameAsc
}) => {
  useFetchAll();
  const filtered = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.find)(query, filterBy, filterByType));
  const {
    isLoading,
    error
  } = useFetchStatus();
  const sortedAndFiltered = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.sortPlugins)(filtered, sortBy);
  return {
    isLoading,
    error,
    plugins: sortedAndFiltered
  };
};
const useGetAll = () => {
  useFetchAll();
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_5__.selectAll);
};
const useGetSingle = id => {
  useFetchAll();
  useFetchDetails(id);
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => (0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectById)(state, id));
};
const useGetErrors = () => {
  useFetchAll();
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_5__.selectPluginErrors);
};
const useInstall = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return (id, version, isUpdating) => dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.install)({
    id,
    version,
    isUpdating
  }));
};
const useUninstall = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return id => dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall)(id));
};
const useIsRemotePluginsAvailable = () => {
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchRemotePlugins.typePrefix));
  return error === null;
};
const useFetchStatus = () => {
  const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  return {
    isLoading,
    error
  };
};
const useFetchDetailsStatus = () => {
  const isLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  return {
    isLoading,
    error
  };
};
const useInstallStatus = () => {
  const isInstalling = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.install.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.install.typePrefix));
  return {
    isInstalling,
    error
  };
};
const useUninstallStatus = () => {
  const isUninstalling = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall.typePrefix));
  const error = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectRequestError)(_actions__WEBPACK_IMPORTED_MODULE_3__.uninstall.typePrefix));
  return {
    isUninstalling,
    error
  };
}; // Only fetches in case they were not fetched yet

const useFetchAll = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const isNotFetched = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestNotFetched)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll.typePrefix));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    isNotFetched && dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.fetchAll)());
  }, []); // eslint-disable-line
};
const useFetchDetails = id => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const plugin = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => (0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectById)(state, id));
  const isNotFetching = !(0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((0,_selectors__WEBPACK_IMPORTED_MODULE_5__.selectIsRequestPending)(_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails.typePrefix));
  const shouldFetch = isNotFetching && plugin && !plugin.details;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    shouldFetch && dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.fetchDetails)(id));
  }, [plugin]); // eslint-disable-line
};
const useDisplayMode = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const displayMode = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(_selectors__WEBPACK_IMPORTED_MODULE_5__.selectDisplayMode);
  return {
    displayMode,
    setDisplayMode: v => dispatch((0,_reducer__WEBPACK_IMPORTED_MODULE_4__.setDisplayMode)(v))
  };
};

/***/ }),

/***/ "./public/app/features/plugins/admin/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "selectAll": () => (/* binding */ selectAll),
/* harmony export */   "selectById": () => (/* binding */ selectById),
/* harmony export */   "selectDisplayMode": () => (/* binding */ selectDisplayMode),
/* harmony export */   "selectIsRequestNotFetched": () => (/* binding */ selectIsRequestNotFetched),
/* harmony export */   "selectIsRequestPending": () => (/* binding */ selectIsRequestPending),
/* harmony export */   "selectItems": () => (/* binding */ selectItems),
/* harmony export */   "selectPluginErrors": () => (/* binding */ selectPluginErrors),
/* harmony export */   "selectRequest": () => (/* binding */ selectRequest),
/* harmony export */   "selectRequestError": () => (/* binding */ selectRequestError),
/* harmony export */   "selectRoot": () => (/* binding */ selectRoot)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/plugins/admin/types.ts");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/plugins/admin/state/reducer.ts");



const selectRoot = state => state.plugins;
const selectItems = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRoot, ({
  items
}) => items);
const selectDisplayMode = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRoot, ({
  settings
}) => settings.displayMode);
const {
  selectAll,
  selectById
} = _reducer__WEBPACK_IMPORTED_MODULE_1__.pluginsAdapter.getSelectors(selectItems);

const selectInstalled = filterBy => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAll, plugins => plugins.filter(plugin => filterBy === 'installed' ? plugin.isInstalled : !plugin.isCore));

const findByInstallAndType = (filterBy, filterByType) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectInstalled(filterBy), plugins => plugins.filter(plugin => filterByType === 'all' || plugin.type === filterByType));

const findByKeyword = searchBy => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAll, plugins => {
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

const find = (searchBy, filterBy, filterByType) => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(findByInstallAndType(filterBy, filterByType), findByKeyword(searchBy), (filteredPlugins, searchedPlugins) => {
  return searchBy === '' ? filteredPlugins : searchedPlugins;
});
const selectPluginErrors = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAll, plugins => plugins ? plugins.filter(p => Boolean(p.error)).map(p => ({
  pluginId: p.id,
  errorCode: p.error
})) : []); // The following selectors are used to get information about the outstanding or completed plugins-related network requests.

const selectRequest = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRoot, ({
  requests = {}
}) => requests[actionType]);
const selectIsRequestPending = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === _types__WEBPACK_IMPORTED_MODULE_0__.RequestStatus.Pending);
const selectRequestError = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRequest(actionType), request => (request === null || request === void 0 ? void 0 : request.status) === _types__WEBPACK_IMPORTED_MODULE_0__.RequestStatus.Rejected ? request === null || request === void 0 ? void 0 : request.error : null);
const selectIsRequestNotFetched = actionType => (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectRequest(actionType), request => request === undefined);

/***/ }),

/***/ "./public/app/features/plugins/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPlugin": () => (/* binding */ loadPlugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _importPanelPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/plugins/importPanelPlugin.ts");
/* harmony import */ var _pluginSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/pluginSettings.ts");
/* harmony import */ var _plugin_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/plugins/plugin_loader.ts");




async function loadPlugin(pluginId) {
  const info = await (0,_pluginSettings__WEBPACK_IMPORTED_MODULE_2__.getPluginSettings)(pluginId);
  let result;

  if (info.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.app) {
    result = await (0,_plugin_loader__WEBPACK_IMPORTED_MODULE_3__.importAppPlugin)(info);
  }

  if (info.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.datasource) {
    result = await (0,_plugin_loader__WEBPACK_IMPORTED_MODULE_3__.importDataSourcePlugin)(info);
  }

  if (info.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.panel) {
    const panelPlugin = await (0,_importPanelPlugin__WEBPACK_IMPORTED_MODULE_1__.importPanelPluginFromMeta)(info);
    result = panelPlugin;
  }

  if (info.type === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PluginType.renderer) {
    result = {
      meta: info
    };
  }

  if (!result) {
    throw new Error('Unknown Plugin type: ' + info.type);
  }

  return result;
}

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function usePrevious(state) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        ref.current = state;
    });
    return ref.current;
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGx1Z2luUGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFDeEIsUUFBTUMsTUFBTSwwQkFBR0Ysb0VBQUgsd0RBQUcsb0JBQW9CSSxXQUFuQztBQUNBLFNBQU8sQ0FBQyxFQUFFRixNQUFNLElBQUlBLE1BQU0sR0FBRyxDQUFyQixDQUFSO0FBQ0Q7QUFFTSxNQUFNRyxjQUFjLEdBQUcsTUFBTUosT0FBTyxNQUFNRCx5RkFBMUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUDtBQUVBOzs7O0FBVUEsTUFBTVcsZUFBMEIsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLFVBQUY7QUFBY0MsRUFBQUEsUUFBZDtBQUF3QkMsRUFBQUE7QUFBeEIsQ0FBRCxLQUF3QztBQUN6RSxXQUFTQyxVQUFULENBQW9CQyxTQUFwQixFQUFnRDtBQUM5QyxXQUFPQSxTQUFTLENBQUNDLFFBQVYsS0FBdUJELFNBQVMsQ0FBQ0UsZ0JBQWpDLEdBQW9ELFFBQXBELEdBQStELFdBQXRFO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBTyxhQUFTLEVBQUMsY0FBakI7QUFBQSwyQkFDRTtBQUFBLGdCQUNHTixVQUFVLENBQUNPLEdBQVgsQ0FBZSxDQUFDSCxTQUFELEVBQVlJLEtBQVosS0FBc0I7QUFDcEMsNEJBQ0U7QUFBQSxnREFDRTtBQUFJLHFCQUFTLEVBQUMsU0FBZDtBQUFBLG1DQUNFLHVEQUFDLDZDQUFEO0FBQU0sa0JBQUksRUFBQztBQUFYO0FBREYsWUFERixnQkFJRTtBQUFBLHNCQUNHSixTQUFTLENBQUNLLFFBQVYsZ0JBQ0M7QUFBRyxrQkFBSSxFQUFFTCxTQUFTLENBQUNNLFdBQW5CO0FBQUEsd0JBQWlDTixTQUFTLENBQUNPO0FBQTNDLGNBREQsZ0JBR0M7QUFBQSx3QkFBT1AsU0FBUyxDQUFDTztBQUFqQjtBQUpKLFlBSkYsZUFXRTtBQUFJLGlCQUFLLEVBQUU7QUFBRUMsY0FBQUEsU0FBUyxFQUFFO0FBQWIsYUFBWDtBQUFBLHVCQUNHLENBQUNSLFNBQVMsQ0FBQ0ssUUFBWCxnQkFDQyx1REFBQywrQ0FBRDtBQUFRLHFCQUFPLEVBQUMsV0FBaEI7QUFBNEIsa0JBQUksRUFBQyxJQUFqQztBQUFzQyxxQkFBTyxFQUFFLE1BQU1SLFFBQVEsQ0FBQ0csU0FBRCxFQUFZLEtBQVosQ0FBN0Q7QUFBQTtBQUFBLGNBREQsZ0JBS0MsdURBQUMsK0NBQUQ7QUFBUSxxQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGtCQUFJLEVBQUMsSUFBakM7QUFBc0MscUJBQU8sRUFBRSxNQUFNSCxRQUFRLENBQUNHLFNBQUQsRUFBWSxJQUFaLENBQTdEO0FBQUEsd0JBQ0dELFVBQVUsQ0FBQ0MsU0FBRDtBQURiLGNBTkosRUFVR0EsU0FBUyxDQUFDSyxRQUFWLGlCQUNDLHVEQUFDLCtDQUFEO0FBQVEsa0JBQUksRUFBQyxXQUFiO0FBQXlCLHFCQUFPLEVBQUMsYUFBakM7QUFBK0Msa0JBQUksRUFBQyxJQUFwRDtBQUF5RCxxQkFBTyxFQUFFLE1BQU1QLFFBQVEsQ0FBQ0UsU0FBRDtBQUFoRixjQVhKO0FBQUEsWUFYRjtBQUFBLFdBQVUsR0FBRUEsU0FBUyxDQUFDUyxXQUFZLElBQUdMLEtBQU0sRUFBM0MsQ0FERjtBQTRCRCxPQTdCQTtBQURIO0FBREYsSUFERjtBQW9DRCxDQXpDRDs7QUEyQ0EsaUVBQWVULGVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQVlBO0FBb0JPLE1BQU13QyxzQkFBc0IsR0FBRyxDQUNwQ0MsTUFEb0MsRUFFcENDLFlBQStDLEdBQUc7QUFDaERDLEVBQUFBLGNBRGdEO0FBRWhEQyxFQUFBQSxrQkFGZ0Q7QUFHaEROLEVBQUFBLGFBSGdEO0FBSWhEQyxFQUFBQSxpQkFKZ0Q7QUFLaERmLEVBQUFBLHNCQUFzQkEsd0ZBQUFBO0FBTDBCLENBRmQsS0FTZDtBQUN0QixTQUFPLE9BQU9xQixRQUFQLEVBQWlCQyxRQUFqQixLQUE4QjtBQUNuQyxRQUFJLENBQUNMLE1BQUwsRUFBYTtBQUNYSSxNQUFBQSxRQUFRLENBQUNaLHdFQUE0QixDQUFDLElBQUljLEtBQUosQ0FBVSxZQUFWLENBQUQsQ0FBN0IsQ0FBUjtBQUNBO0FBQ0Q7O0FBRUQsUUFBSTtBQUNGLFlBQU1DLGdCQUFnQixHQUFHLE1BQU1ILFFBQVEsQ0FBQ0gsWUFBWSxDQUFDQyxjQUFiLENBQTRCRixNQUE1QixDQUFELENBQXZDO0FBQ0EsWUFBTUksUUFBUSxDQUFDSCxZQUFZLENBQUNFLGtCQUFiLENBQWdDSSxnQkFBaEMsQ0FBRCxDQUFkLENBRkUsQ0FJRjs7QUFDQSxVQUFJRixRQUFRLEdBQUdHLGtCQUFYLENBQThCQyxNQUFsQyxFQUEwQztBQUN4QztBQUNEOztBQUVELFlBQU1DLFVBQVUsR0FBR1QsWUFBWSxDQUFDSixhQUFiLENBQTJCUSxRQUFRLEdBQUdNLFdBQXRDLEVBQW1EWCxNQUFuRCxDQUFuQjtBQUNBLFlBQU1ZLGNBQWMsR0FBR1gsWUFBWSxDQUFDSCxpQkFBYixDQUErQk8sUUFBUSxHQUFHTSxXQUExQyxFQUF1REQsVUFBVSxDQUFFRyxJQUFuRSxDQUF2QjtBQUNBLFlBQU1DLGNBQWMsR0FBRyxNQUFNYixZQUFZLENBQUNsQixzQkFBYixDQUFvQzZCLGNBQXBDLENBQTdCO0FBRUFSLE1BQUFBLFFBQVEsQ0FBQ1gsMkVBQStCLENBQUNxQixjQUFELENBQWhDLENBQVI7QUFDRCxLQWRELENBY0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1pYLE1BQUFBLFFBQVEsQ0FBQ1osd0VBQTRCLENBQUN1QixHQUFELENBQTdCLENBQVI7QUFDRDtBQUNGLEdBdkJEO0FBd0JELENBbENNO0FBb0NBLE1BQU1DLGNBQWMsR0FBRyxDQUM1QkMsY0FENEIsRUFFNUJoQixZQUF3QyxHQUFHO0FBQ3pDcEIsRUFBQUEsZ0JBRHlDO0FBRXpDRixFQUFBQSxhQUFhQSwwRUFBQUE7QUFGNEIsQ0FGZixLQU1OO0FBQ3RCLFNBQU8sT0FBT3lCLFFBQVAsRUFBZ0NDLFFBQWhDLEtBQTZDO0FBQ2xELFVBQU1hLEtBQUssR0FBRyxNQUFNakIsWUFBWSxDQUFDcEIsZ0JBQWIsR0FBZ0NzQyxHQUFoQyxDQUFvQ0YsY0FBcEMsQ0FBcEI7O0FBRUEsUUFBSSxDQUFDQyxLQUFLLENBQUNFLGNBQVgsRUFBMkI7QUFDekI7QUFDRDs7QUFFRGhCLElBQUFBLFFBQVEsQ0FBQ1Qsa0VBQXNCLEVBQXZCLENBQVI7QUFFQU0sSUFBQUEsWUFBWSxDQUFDdEIsYUFBYixHQUE2QjBDLGtCQUE3QixDQUFnRCxZQUFZO0FBQzFELFVBQUk7QUFDRixjQUFNQyxNQUFNLEdBQUcsTUFBTUosS0FBSyxDQUFDRSxjQUFOLEVBQXJCO0FBRUFoQixRQUFBQSxRQUFRLENBQUNSLG1FQUF1QixDQUFDMEIsTUFBRCxDQUF4QixDQUFSO0FBQ0QsT0FKRCxDQUlFLE9BQU9QLEdBQVAsRUFBWTtBQUNaLGNBQU07QUFBRVEsVUFBQUEsVUFBRjtBQUFjQyxVQUFBQSxPQUFPLEVBQUVDLFVBQXZCO0FBQW1DQyxVQUFBQSxPQUFuQztBQUE0Q0MsVUFBQUE7QUFBNUMsWUFBcURaLEdBQTNEO0FBRUEsY0FBTVMsT0FBTyxHQUFHQyxVQUFVLEtBQUlFLElBQUosYUFBSUEsSUFBSix1QkFBSUEsSUFBSSxDQUFFSCxPQUFWLENBQVYsSUFBK0IsZ0JBQWdCRCxVQUEvRDtBQUVBbkIsUUFBQUEsUUFBUSxDQUFDVixnRUFBb0IsQ0FBQztBQUFFOEIsVUFBQUEsT0FBRjtBQUFXRSxVQUFBQTtBQUFYLFNBQUQsQ0FBckIsQ0FBUjtBQUNEO0FBQ0YsS0FaRDtBQWFELEdBdEJEO0FBdUJELENBOUJNO0FBZ0NBLFNBQVNFLGVBQVQsR0FBOEM7QUFDbkQsU0FBTyxNQUFPeEIsUUFBUCxJQUFvQjtBQUN6QixVQUFNeUIsUUFBUSxHQUFHLE1BQU1sRCw0RUFBYSxHQUFHd0MsR0FBaEIsQ0FBb0Isa0JBQXBCLENBQXZCO0FBQ0FmLElBQUFBLFFBQVEsQ0FBQ2IsNkRBQWlCLENBQUNzQyxRQUFELENBQWxCLENBQVI7QUFDRCxHQUhEO0FBSUQ7QUFFTSxTQUFTM0IsY0FBVCxDQUF3QjRCLEdBQXhCLEVBQStFO0FBQ3BGLFNBQU8sTUFBTzFCLFFBQVAsSUFBb0I7QUFDekIsVUFBTU0sVUFBVSxHQUFHLE1BQU1xQix5QkFBeUIsQ0FBQ0QsR0FBRCxDQUFsRDtBQUVBMUIsSUFBQUEsUUFBUSxDQUFDakIsNERBQWdCLENBQUN1QixVQUFELENBQWpCLENBQVI7QUFDQSxXQUFPQSxVQUFQO0FBQ0QsR0FMRDtBQU1EO0FBRU0sU0FBU1Asa0JBQVQsQ0FBNEJPLFVBQTVCLEVBQStFO0FBQ3BGLFNBQU8sTUFBT04sUUFBUCxJQUFvQjtBQUN6QixVQUFNNEIsVUFBVSxHQUFJLE1BQU1sRCxzRkFBaUIsQ0FBQzRCLFVBQVUsQ0FBQ0csSUFBWixDQUEzQztBQUNBLFVBQU1KLE1BQU0sR0FBRyxNQUFNMUIsMEZBQXNCLENBQUNpRCxVQUFELENBQTNDO0FBQ0EsVUFBTUMsU0FBUyxHQUFHeEIsTUFBTSxDQUFDeUIsZUFBUCxDQUF1QkMsU0FBdkIsWUFBNEMzRCxtRUFBOUQ7QUFDQSxVQUFNNEQsSUFBSSxxQkFDTEosVUFESztBQUVSQyxNQUFBQSxTQUFTLEVBQUVELFVBQVUsQ0FBQ0ssT0FBWCxJQUFzQko7QUFGekIsTUFBVjtBQUtBN0IsSUFBQUEsUUFBUSxDQUFDaEIsZ0VBQW9CLENBQUNnRCxJQUFELENBQXJCLENBQVI7QUFFQTNCLElBQUFBLE1BQU0sQ0FBQzJCLElBQVAsR0FBY0EsSUFBZDtBQUNBaEMsSUFBQUEsUUFBUSxDQUFDMUIsZ0VBQWMsQ0FBQ1EseURBQWEsQ0FBQ3dCLFVBQUQsRUFBYUQsTUFBYixDQUFkLENBQWYsQ0FBUjtBQUNELEdBYkQ7QUFjRDtBQUVEO0FBQ0E7QUFDQTs7QUFDTyxlQUFlc0IseUJBQWYsQ0FBeUNELEdBQXpDLEVBQTRGO0FBQ2pHO0FBQ0EsTUFBSTtBQUNGLFVBQU1RLEtBQUssR0FBRyxNQUFNaEUsb0RBQWEsQ0FDL0JLLDRFQUFhLEdBQUc0RCxLQUFoQixDQUEwQztBQUN4Q0MsTUFBQUEsTUFBTSxFQUFFLEtBRGdDO0FBRXhDQyxNQUFBQSxHQUFHLEVBQUcsd0JBQXVCWCxHQUFJLEVBRk87QUFHeENZLE1BQUFBLE1BQU0sRUFBRTlELHFGQUF1QixFQUhTO0FBSXhDK0QsTUFBQUEsY0FBYyxFQUFFO0FBSndCLEtBQTFDLENBRCtCLENBQWpDOztBQVNBLFFBQUlMLEtBQUssQ0FBQ00sRUFBVixFQUFjO0FBQ1osYUFBT04sS0FBSyxDQUFDWCxJQUFiO0FBQ0Q7QUFDRixHQWJELENBYUUsT0FBT1osR0FBUCxFQUFZO0FBQ1o4QixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQ0FBWixFQUFtRC9CLEdBQW5EO0FBQ0QsR0FqQmdHLENBbUJqRzs7O0FBQ0EsUUFBTWdDLEVBQUUsR0FBRyxPQUFPakIsR0FBUCxLQUFlLFFBQWYsR0FBMEJrQixRQUFRLENBQUNsQixHQUFELEVBQU0sRUFBTixDQUFsQyxHQUE4Q0EsR0FBekQ7O0FBQ0EsTUFBSSxDQUFDbUIsTUFBTSxDQUFDQyxLQUFQLENBQWFILEVBQWIsQ0FBTCxFQUF1QjtBQUNyQixVQUFNbEIsUUFBUSxHQUFHLE1BQU12RCxvREFBYSxDQUNsQ0ssNEVBQWEsR0FBRzRELEtBQWhCLENBQTBDO0FBQ3hDQyxNQUFBQSxNQUFNLEVBQUUsS0FEZ0M7QUFFeENDLE1BQUFBLEdBQUcsRUFBRyxvQkFBbUJNLEVBQUcsRUFGWTtBQUd4Q0wsTUFBQUEsTUFBTSxFQUFFOUQscUZBQXVCLEVBSFM7QUFJeEMrRCxNQUFBQSxjQUFjLEVBQUU7QUFKd0IsS0FBMUMsQ0FEa0MsQ0FBcEMsQ0FEcUIsQ0FVckI7QUFDQTs7QUFDQSxRQUFJZCxRQUFRLENBQUNlLEVBQVQsSUFBZSxPQUFPZCxHQUFQLEtBQWUsUUFBOUIsSUFBMENELFFBQVEsQ0FBQ0YsSUFBVCxDQUFjb0IsRUFBZCxLQUFxQmpCLEdBQW5FLEVBQXdFO0FBQ3RFLGFBQU9ELFFBQVEsQ0FBQ0YsSUFBaEI7QUFDRCxLQWRvQixDQWdCckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSUUsUUFBUSxDQUFDZSxFQUFULElBQWVmLFFBQVEsQ0FBQ0YsSUFBVCxDQUFjb0IsRUFBZCxDQUFpQkksUUFBakIsT0FBZ0NyQixHQUFuRCxFQUF3RDtBQUN0RHNCLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIvRSxxRUFBQSxDQUE0QixxQkFBb0JzRCxRQUFRLENBQUNGLElBQVQsQ0FBY0csR0FBSSxFQUFsRSxDQUF2QjtBQUNBLGFBQU8sRUFBUCxDQUZzRCxDQUVyQjtBQUNsQztBQUNGOztBQUVELFFBQU14QixLQUFLLENBQUMsNEJBQUQsQ0FBWDtBQUNEO0FBRU0sU0FBU2tELGFBQVQsQ0FBdUIvQyxNQUF2QixFQUF3RTtBQUM3RSxTQUFPLE9BQU9MLFFBQVAsRUFBaUJxRCxRQUFqQixLQUE4QjtBQUNuQyxVQUFNckQsUUFBUSxDQUFDd0IsZUFBZSxFQUFoQixDQUFkO0FBRUEsVUFBTWpCLFdBQVcsR0FBRzhDLFFBQVEsR0FBRzlDLFdBQVgsQ0FBdUJBLFdBQTNDO0FBRUEsVUFBTStDLFdBQVcsR0FBRztBQUNsQkMsTUFBQUEsSUFBSSxFQUFFbEQsTUFBTSxDQUFDa0QsSUFESztBQUVsQjlDLE1BQUFBLElBQUksRUFBRUosTUFBTSxDQUFDc0MsRUFGSztBQUdsQmEsTUFBQUEsTUFBTSxFQUFFLE9BSFU7QUFJbEJDLE1BQUFBLFNBQVMsRUFBRWxELFdBQVcsQ0FBQ21ELE1BQVosS0FBdUI7QUFKaEIsS0FBcEI7O0FBT0EsUUFBSUMsU0FBUyxDQUFDcEQsV0FBRCxFQUFjK0MsV0FBVyxDQUFDQyxJQUExQixDQUFiLEVBQThDO0FBQzVDRCxNQUFBQSxXQUFXLENBQUNDLElBQVosR0FBbUJLLFdBQVcsQ0FBQ3JELFdBQUQsRUFBYytDLFdBQVcsQ0FBQ0MsSUFBMUIsQ0FBOUI7QUFDRDs7QUFFRCxVQUFNckMsTUFBTSxHQUFHLE1BQU0zQyw0RUFBYSxHQUFHc0YsSUFBaEIsQ0FBcUIsa0JBQXJCLEVBQXlDUCxXQUF6QyxDQUFyQjtBQUNBLFVBQU03RSxxRkFBZ0IsR0FBR3FGLE1BQW5CLEVBQU47QUFFQSxVQUFNbEYsdUZBQUEsRUFBTjtBQUVBUCxJQUFBQSxrRUFBQSxDQUFzQixxQkFBb0I2QyxNQUFNLENBQUMrQyxVQUFQLENBQWtCdkMsR0FBSSxFQUFoRTtBQUNELEdBdEJEO0FBdUJEO0FBRU0sU0FBU3dDLHFCQUFULEdBQW9EO0FBQ3pELFNBQU8sTUFBT2xFLFFBQVAsSUFBb0I7QUFDekJBLElBQUFBLFFBQVEsQ0FBQ2YsaUVBQXFCLEVBQXRCLENBQVI7QUFDQSxVQUFNa0YsT0FBTyxHQUFHLE1BQU01Riw0RUFBYSxHQUFHd0MsR0FBaEIsQ0FBb0IsY0FBcEIsRUFBb0M7QUFBRXFELE1BQUFBLE9BQU8sRUFBRSxDQUFYO0FBQWMzRCxNQUFBQSxJQUFJLEVBQUU7QUFBcEIsS0FBcEMsQ0FBdEI7QUFDQSxVQUFNNEQsVUFBVSxHQUFHeEYsaUVBQWUsQ0FBQ3NGLE9BQUQsQ0FBbEM7QUFDQW5FLElBQUFBLFFBQVEsQ0FBQ2QsbUVBQXVCLENBQUM7QUFBRWlGLE1BQUFBLE9BQUY7QUFBV0UsTUFBQUE7QUFBWCxLQUFELENBQXhCLENBQVI7QUFDRCxHQUxEO0FBTUQ7QUFFTSxTQUFTQyxnQkFBVCxDQUEwQmhFLFVBQTFCLEVBQTZFO0FBQ2xGLFNBQU8sTUFBT04sUUFBUCxJQUFvQjtBQUN6QixVQUFNekIsNEVBQWEsR0FBR2dHLEdBQWhCLENBQXFCLG9CQUFtQmpFLFVBQVUsQ0FBQ3FDLEVBQUcsRUFBdEQsRUFBeURyQyxVQUF6RCxDQUFOLENBRHlCLENBQ21EOztBQUM1RSxVQUFNN0IscUZBQWdCLEdBQUdxRixNQUFuQixFQUFOO0FBQ0EsV0FBTzlELFFBQVEsQ0FBQ0YsY0FBYyxDQUFDUSxVQUFVLENBQUNvQixHQUFaLENBQWYsQ0FBZjtBQUNELEdBSkQ7QUFLRDtBQUVNLFNBQVM4QyxnQkFBVCxHQUErQztBQUNwRCxTQUFPLE9BQU94RSxRQUFQLEVBQWlCcUQsUUFBakIsS0FBOEI7QUFDbkMsVUFBTS9DLFVBQVUsR0FBRytDLFFBQVEsR0FBRzlDLFdBQVgsQ0FBdUJELFVBQTFDO0FBRUEsVUFBTS9CLDRFQUFhLEdBQUdrRyxNQUFoQixDQUF3QixvQkFBbUJuRSxVQUFVLENBQUNxQyxFQUFHLEVBQXpELENBQU47QUFDQSxVQUFNbEUscUZBQWdCLEdBQUdxRixNQUFuQixFQUFOO0FBRUF6RixJQUFBQSxrRUFBQSxDQUFxQixjQUFyQjtBQUNELEdBUEQ7QUFRRDtBQU1NLFNBQVNzRixTQUFULENBQW1CcEQsV0FBbkIsRUFBZ0RnRCxJQUFoRCxFQUE4RDtBQUNuRSxTQUNFaEQsV0FBVyxDQUFDbUUsTUFBWixDQUFvQnBFLFVBQUQsSUFBZ0I7QUFDakMsV0FBT0EsVUFBVSxDQUFDaUQsSUFBWCxDQUFnQm9CLFdBQWhCLE9BQWtDcEIsSUFBSSxDQUFDb0IsV0FBTCxFQUF6QztBQUNELEdBRkQsRUFFR2pCLE1BRkgsR0FFWSxDQUhkO0FBS0Q7QUFFTSxTQUFTRSxXQUFULENBQXFCckQsV0FBckIsRUFBa0RnRCxJQUFsRCxFQUFnRTtBQUNyRTtBQUNBO0FBQ0EsU0FBT0ksU0FBUyxDQUFDcEQsV0FBRCxFQUFjZ0QsSUFBZCxDQUFoQixFQUFxQztBQUNuQztBQUNBO0FBQ0EsUUFBSSxDQUFDcUIsYUFBYSxDQUFDckIsSUFBRCxDQUFsQixFQUEwQjtBQUN4QkEsTUFBQUEsSUFBSSxHQUFJLEdBQUVBLElBQUssSUFBZjtBQUNELEtBRkQsTUFFTztBQUNMO0FBQ0E7QUFFQTtBQUNBQSxNQUFBQSxJQUFJLEdBQUksR0FBRXNCLFVBQVUsQ0FBQ3RCLElBQUQsQ0FBTyxHQUFFdUIsa0JBQWtCLENBQUNDLFlBQVksQ0FBQ3hCLElBQUQsQ0FBYixDQUFxQixFQUFwRTtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0EsSUFBUDtBQUNEOztBQUVELFNBQVNxQixhQUFULENBQXVCckIsSUFBdkIsRUFBcUM7QUFDbkMsU0FBT0EsSUFBSSxDQUFDeUIsUUFBTCxDQUFjLEdBQWQsRUFBbUJ6QixJQUFJLENBQUNHLE1BQUwsR0FBYyxDQUFqQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBU3FCLFlBQVQsQ0FBc0J4QixJQUF0QixFQUFvQztBQUNsQyxTQUFPWCxRQUFRLENBQUNXLElBQUksQ0FBQzBCLEtBQUwsQ0FBVyxDQUFDLENBQVosQ0FBRCxFQUFpQixFQUFqQixDQUFmO0FBQ0Q7O0FBRUQsU0FBU0gsa0JBQVQsQ0FBNEJJLEtBQTVCLEVBQTJDO0FBQ3pDLFNBQU9wQyxLQUFLLENBQUNvQyxLQUFELENBQUwsR0FBZSxDQUFmLEdBQW1CQSxLQUFLLEdBQUcsQ0FBbEM7QUFDRDs7QUFFRCxTQUFTTCxVQUFULENBQW9CdEIsSUFBcEIsRUFBa0M7QUFDaEMsU0FBT0EsSUFBSSxDQUFDMEIsS0FBTCxDQUFXLENBQVgsRUFBYzFCLElBQUksQ0FBQ0csTUFBTCxHQUFjLENBQTVCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7OztBQy9TRDtBQUNBO0FBR08sU0FBUzdFLGVBQVQsQ0FBeUJzRixPQUF6QixFQUFzRjtBQUMzRixRQUFNRSxVQUFzQyxHQUFHLENBQzdDO0FBQUUxQixJQUFBQSxFQUFFLEVBQUUsTUFBTjtBQUFjNUUsSUFBQUEsS0FBSyxFQUFFLHVCQUFyQjtBQUE4Q29HLElBQUFBLE9BQU8sRUFBRTtBQUF2RCxHQUQ2QyxFQUU3QztBQUFFeEIsSUFBQUEsRUFBRSxFQUFFLFNBQU47QUFBaUI1RSxJQUFBQSxLQUFLLEVBQUUsOEJBQXhCO0FBQXdEb0csSUFBQUEsT0FBTyxFQUFFO0FBQWpFLEdBRjZDLEVBRzdDO0FBQUV4QixJQUFBQSxFQUFFLEVBQUUsU0FBTjtBQUFpQjVFLElBQUFBLEtBQUssRUFBRSxxQkFBeEI7QUFBK0NvRyxJQUFBQSxPQUFPLEVBQUU7QUFBeEQsR0FINkMsRUFJN0M7QUFBRXhCLElBQUFBLEVBQUUsRUFBRSxLQUFOO0FBQWE1RSxJQUFBQSxLQUFLLEVBQUUsS0FBcEI7QUFBMkJvRyxJQUFBQSxPQUFPLEVBQUU7QUFBcEMsR0FKNkMsRUFLN0M7QUFBRXhCLElBQUFBLEVBQUUsRUFBRSxPQUFOO0FBQWU1RSxJQUFBQSxLQUFLLEVBQUUsT0FBdEI7QUFBK0JvRyxJQUFBQSxPQUFPLEVBQUU7QUFBeEMsR0FMNkMsRUFNN0M7QUFBRXhCLElBQUFBLEVBQUUsRUFBRSxZQUFOO0FBQW9CNUUsSUFBQUEsS0FBSyxFQUFFLG9CQUEzQjtBQUFpRG9HLElBQUFBLE9BQU8sRUFBRTtBQUExRCxHQU42QyxFQU83QztBQUFFeEIsSUFBQUEsRUFBRSxFQUFFLEtBQU47QUFBYTVFLElBQUFBLEtBQUssRUFBRSxrQkFBcEI7QUFBd0NvRyxJQUFBQSxPQUFPLEVBQUU7QUFBakQsR0FQNkMsRUFRN0M7QUFBRXhCLElBQUFBLEVBQUUsRUFBRSxPQUFOO0FBQWU1RSxJQUFBQSxLQUFLLEVBQUUsUUFBdEI7QUFBZ0NvRyxJQUFBQSxPQUFPLEVBQUU7QUFBekMsR0FSNkMsRUFTN0NPLE1BVDZDLENBU3JDVyxJQUFELElBQVVBLElBVDRCLENBQS9DO0FBV0EsUUFBTUMsYUFBdUQsR0FBRyxFQUFoRTtBQUNBLFFBQU1DLFdBQWlELEdBQUcsRUFBMUQ7QUFDQSxRQUFNQyxpQkFBaUIsR0FBR0MsMkJBQTJCLEVBQXJELENBZDJGLENBZ0IzRjs7QUFDQSxPQUFLLE1BQU1DLFFBQVgsSUFBdUJyQixVQUF2QixFQUFtQztBQUNqQ2lCLElBQUFBLGFBQWEsQ0FBQ0ksUUFBUSxDQUFDL0MsRUFBVixDQUFiLEdBQTZCK0MsUUFBN0I7QUFDRDs7QUFFRCxPQUFLLE1BQU1yRixNQUFYLElBQXFCOEQsT0FBckIsRUFBOEI7QUFDNUIsVUFBTXdCLGdCQUFnQixHQUFHSCxpQkFBaUIsQ0FBQ0ksSUFBbEIsQ0FBd0JQLElBQUQsSUFBVUEsSUFBSSxDQUFDMUMsRUFBTCxLQUFZdEMsTUFBTSxDQUFDc0MsRUFBcEQsQ0FBekIsQ0FENEIsQ0FFNUI7O0FBQ0EsUUFBSXRDLE1BQU0sQ0FBQ3dGLFVBQVAsSUFBcUJGLGdCQUF6QixFQUEyQztBQUFBOztBQUN6Q3RGLE1BQUFBLE1BQU0sQ0FBQ3FGLFFBQVAsR0FBa0IsWUFBbEI7QUFDQXJGLE1BQUFBLE1BQU0sQ0FBQ3lGLFVBQVAsR0FBb0IsQ0FBQ1YsZ0VBQWMsQ0FBQyxvQkFBRCxDQUFuQztBQUNBL0UsTUFBQUEsTUFBTSxDQUFDMEYsSUFBUCxDQUFZQyxLQUFaLEdBQW9CLENBQUFMLGdCQUFnQixTQUFoQixJQUFBQSxnQkFBZ0IsV0FBaEIscUNBQUFBLGdCQUFnQixDQUFFSSxJQUFsQixnRkFBd0JDLEtBQXhCLEtBQWlDM0YsTUFBTSxDQUFDMEYsSUFBUCxDQUFZQyxLQUFqRTtBQUNELEtBUDJCLENBUzVCOzs7QUFDQSxRQUFJM0YsTUFBTSxDQUFDMEYsSUFBUCxDQUFZQyxLQUFoQixFQUF1QjtBQUNyQixXQUFLLE1BQU1DLElBQVgsSUFBbUI1RixNQUFNLENBQUMwRixJQUFQLENBQVlDLEtBQS9CLEVBQXNDO0FBQ3BDQyxRQUFBQSxJQUFJLENBQUMxQyxJQUFMLEdBQVksWUFBWjtBQUNEO0FBQ0Y7O0FBRUQsVUFBTW1DLFFBQVEsR0FBR3JCLFVBQVUsQ0FBQ3VCLElBQVgsQ0FBaUJQLElBQUQsSUFBVUEsSUFBSSxDQUFDMUMsRUFBTCxLQUFZdEMsTUFBTSxDQUFDcUYsUUFBN0MsS0FBMERKLGFBQWEsQ0FBQyxPQUFELENBQXhGO0FBQ0FJLElBQUFBLFFBQVEsQ0FBQ3ZCLE9BQVQsQ0FBaUJILElBQWpCLENBQXNCM0QsTUFBdEIsRUFqQjRCLENBa0I1Qjs7QUFDQWtGLElBQUFBLFdBQVcsQ0FBQ2xGLE1BQU0sQ0FBQ3NDLEVBQVIsQ0FBWCxHQUF5QnRDLE1BQXpCO0FBQ0Q7O0FBRUQsT0FBSyxNQUFNcUYsUUFBWCxJQUF1QnJCLFVBQXZCLEVBQW1DO0FBQ2pDO0FBQ0EsUUFBSXFCLFFBQVEsQ0FBQy9DLEVBQVQsS0FBZ0IsT0FBcEIsRUFBNkI7QUFDM0IrQyxNQUFBQSxRQUFRLENBQUN2QixPQUFULENBQWlCSCxJQUFqQixDQUFzQmtDLDRCQUE0QixFQUFsRDtBQUNELEtBSmdDLENBTWpDOzs7QUFDQSxRQUFJUixRQUFRLENBQUMvQyxFQUFULEtBQWdCLFlBQXBCLEVBQWtDO0FBQ2hDLFdBQUssTUFBTXRDLE1BQVgsSUFBcUJtRixpQkFBckIsRUFBd0M7QUFDdEMsWUFBSSxDQUFDRCxXQUFXLENBQUNsRixNQUFNLENBQUNzQyxFQUFSLENBQWhCLEVBQTZCO0FBQzNCK0MsVUFBQUEsUUFBUSxDQUFDdkIsT0FBVCxDQUFpQkgsSUFBakIsQ0FBc0IzRCxNQUF0QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDhGLElBQUFBLFdBQVcsQ0FBQ1QsUUFBUSxDQUFDdkIsT0FBVixDQUFYO0FBQ0QsR0EzRDBGLENBNkQzRjs7O0FBQ0EsU0FBT0UsVUFBVSxDQUFDSyxNQUFYLENBQW1CMEIsQ0FBRCxJQUFPQSxDQUFDLENBQUNqQyxPQUFGLENBQVVULE1BQVYsR0FBbUIsQ0FBNUMsQ0FBUDtBQUNEOztBQUVELFNBQVN5QyxXQUFULENBQXFCaEMsT0FBckIsRUFBc0Q7QUFDcEQsUUFBTWtDLFlBQXNDLEdBQUc7QUFDN0NDLElBQUFBLFVBQVUsRUFBRSxHQURpQztBQUU3Q0MsSUFBQUEsUUFBUSxFQUFFLEVBRm1DO0FBRzdDQyxJQUFBQSxJQUFJLEVBQUUsRUFIdUM7QUFJN0NDLElBQUFBLEtBQUssRUFBRSxFQUpzQztBQUs3Q0MsSUFBQUEsTUFBTSxFQUFFLEdBTHFDO0FBTTdDQyxJQUFBQSxRQUFRLEVBQUUsRUFObUM7QUFPN0NDLElBQUFBLE1BQU0sRUFBRSxDQUFDO0FBUG9DLEdBQS9DO0FBVUF6QyxFQUFBQSxPQUFPLENBQUMwQyxJQUFSLENBQWEsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVU7QUFDckIsVUFBTUMsS0FBSyxHQUFHWCxZQUFZLENBQUNTLENBQUMsQ0FBQ25FLEVBQUgsQ0FBWixJQUFzQixDQUFwQztBQUNBLFVBQU1zRSxLQUFLLEdBQUdaLFlBQVksQ0FBQ1UsQ0FBQyxDQUFDcEUsRUFBSCxDQUFaLElBQXNCLENBQXBDOztBQUNBLFFBQUlxRSxLQUFLLEdBQUdDLEtBQVosRUFBbUI7QUFDakIsYUFBTyxDQUFDLENBQVI7QUFDRDs7QUFDRCxRQUFJRCxLQUFLLEdBQUdDLEtBQVosRUFBbUI7QUFDakIsYUFBTyxDQUFQO0FBQ0Q7O0FBRUQsV0FBT0gsQ0FBQyxDQUFDdkQsSUFBRixHQUFTd0QsQ0FBQyxDQUFDeEQsSUFBWCxHQUFrQixDQUFDLENBQW5CLEdBQXVCLENBQTlCO0FBQ0QsR0FYRDtBQVlEOztBQUVELFNBQVNrQywyQkFBVCxHQUErRDtBQUM3RCxTQUFPLENBQ0x5QixnQkFBZ0IsQ0FBQztBQUNmdkUsSUFBQUEsRUFBRSxFQUFFLDJCQURXO0FBRWZZLElBQUFBLElBQUksRUFBRSxRQUZTO0FBR2Y0RCxJQUFBQSxXQUFXLEVBQUUsbUNBSEU7QUFJZkMsSUFBQUEsTUFBTSxFQUFFO0FBSk8sR0FBRCxDQURYLEVBT0xGLGdCQUFnQixDQUFDO0FBQ2Z2RSxJQUFBQSxFQUFFLEVBQUUsMkJBRFc7QUFFZlksSUFBQUEsSUFBSSxFQUFFLFFBRlM7QUFHZjRELElBQUFBLFdBQVcsRUFBRSxrQ0FIRTtBQUlmQyxJQUFBQSxNQUFNLEVBQUU7QUFKTyxHQUFELENBUFgsRUFhTEYsZ0JBQWdCLENBQUM7QUFDZnZFLElBQUFBLEVBQUUsRUFBRSw4QkFEVztBQUVmWSxJQUFBQSxJQUFJLEVBQUUsV0FGUztBQUdmNEQsSUFBQUEsV0FBVyxFQUFFLHNDQUhFO0FBSWZDLElBQUFBLE1BQU0sRUFBRTtBQUpPLEdBQUQsQ0FiWCxFQW1CTEYsZ0JBQWdCLENBQUM7QUFDZnZFLElBQUFBLEVBQUUsRUFBRSwrQkFEVztBQUVmd0UsSUFBQUEsV0FBVyxFQUFFLHdDQUZFO0FBR2Y1RCxJQUFBQSxJQUFJLEVBQUUsWUFIUztBQUlmNkQsSUFBQUEsTUFBTSxFQUFFO0FBSk8sR0FBRCxDQW5CWCxFQXlCTEYsZ0JBQWdCLENBQUM7QUFDZnZFLElBQUFBLEVBQUUsRUFBRSw0QkFEVztBQUVmd0UsSUFBQUEsV0FBVyxFQUFFLHFDQUZFO0FBR2Y1RCxJQUFBQSxJQUFJLEVBQUUsU0FIUztBQUlmNkQsSUFBQUEsTUFBTSxFQUFFO0FBSk8sR0FBRCxDQXpCWCxFQStCTEYsZ0JBQWdCLENBQUM7QUFDZnZFLElBQUFBLEVBQUUsRUFBRSw2QkFEVztBQUVmd0UsSUFBQUEsV0FBVyxFQUFFLHVDQUZFO0FBR2Y1RCxJQUFBQSxJQUFJLEVBQUUsV0FIUztBQUlmNkQsSUFBQUEsTUFBTSxFQUFFO0FBSk8sR0FBRCxDQS9CWCxFQXFDTEYsZ0JBQWdCLENBQUM7QUFDZnZFLElBQUFBLEVBQUUsRUFBRSw0QkFEVztBQUVmd0UsSUFBQUEsV0FBVyxFQUFFLHFDQUZFO0FBR2Y1RCxJQUFBQSxJQUFJLEVBQUUsU0FIUztBQUlmNkQsSUFBQUEsTUFBTSxFQUFFO0FBSk8sR0FBRCxDQXJDWCxFQTJDTEYsZ0JBQWdCLENBQUM7QUFDZnZFLElBQUFBLEVBQUUsRUFBRSw4QkFEVztBQUVmd0UsSUFBQUEsV0FBVyxFQUFFLHVDQUZFO0FBR2Y1RCxJQUFBQSxJQUFJLEVBQUUsV0FIUztBQUlmNkQsSUFBQUEsTUFBTSxFQUFFO0FBSk8sR0FBRCxDQTNDWCxFQWlETEYsZ0JBQWdCLENBQUM7QUFDZnZFLElBQUFBLEVBQUUsRUFBRSw4QkFEVztBQUVmd0UsSUFBQUEsV0FBVyxFQUFFLHVDQUZFO0FBR2Y1RCxJQUFBQSxJQUFJLEVBQUUsV0FIUztBQUlmNkQsSUFBQUEsTUFBTSxFQUFFO0FBSk8sR0FBRCxDQWpEWCxFQXVETEYsZ0JBQWdCLENBQUM7QUFDZnZFLElBQUFBLEVBQUUsRUFBRSxnQ0FEVztBQUVmd0UsSUFBQUEsV0FBVyxFQUFFLHlDQUZFO0FBR2Y1RCxJQUFBQSxJQUFJLEVBQUUsYUFIUztBQUlmNkQsSUFBQUEsTUFBTSxFQUFFO0FBSk8sR0FBRCxDQXZEWCxFQTZETEYsZ0JBQWdCLENBQUM7QUFDZnZFLElBQUFBLEVBQUUsRUFBRSw0QkFEVztBQUVmd0UsSUFBQUEsV0FBVyxFQUFFLHVDQUZFO0FBR2Y1RCxJQUFBQSxJQUFJLEVBQUUsV0FIUztBQUlmNkQsSUFBQUEsTUFBTSxFQUFFO0FBSk8sR0FBRCxDQTdEWCxFQW1FTEYsZ0JBQWdCLENBQUM7QUFDZnZFLElBQUFBLEVBQUUsRUFBRSw4QkFEVztBQUVmd0UsSUFBQUEsV0FBVyxFQUFFLHNDQUZFO0FBR2Y1RCxJQUFBQSxJQUFJLEVBQUUsV0FIUztBQUlmNkQsSUFBQUEsTUFBTSxFQUFFO0FBSk8sR0FBRCxDQW5FWCxFQXlFTEYsZ0JBQWdCLENBQUM7QUFDZnZFLElBQUFBLEVBQUUsRUFBRSwrQkFEVztBQUVmd0UsSUFBQUEsV0FBVyxFQUFFLHVDQUZFO0FBR2Y1RCxJQUFBQSxJQUFJLEVBQUUsWUFIUztBQUlmNkQsSUFBQUEsTUFBTSxFQUFFO0FBSk8sR0FBRCxDQXpFWCxFQStFTEYsZ0JBQWdCLENBQUM7QUFDZnZFLElBQUFBLEVBQUUsRUFBRSx5QkFEVztBQUVmd0UsSUFBQUEsV0FBVyxFQUFFLGlDQUZFO0FBR2Y1RCxJQUFBQSxJQUFJLEVBQUUsTUFIUztBQUlmNkQsSUFBQUEsTUFBTSxFQUFFO0FBSk8sR0FBRCxDQS9FWCxFQXFGTEYsZ0JBQWdCLENBQUM7QUFDZnZFLElBQUFBLEVBQUUsRUFBRSwyQkFEVztBQUVmd0UsSUFBQUEsV0FBVyxFQUFFLG1DQUZFO0FBR2Y1RCxJQUFBQSxJQUFJLEVBQUUsUUFIUztBQUlmNkQsSUFBQUEsTUFBTSxFQUFFO0FBSk8sR0FBRCxDQXJGWCxFQTJGTEYsZ0JBQWdCLENBQUM7QUFDZnZFLElBQUFBLEVBQUUsRUFBRSxzQ0FEVztBQUVmd0UsSUFBQUEsV0FBVyxFQUFFLHFDQUZFO0FBR2Y1RCxJQUFBQSxJQUFJLEVBQUUsa0NBSFM7QUFJZjZELElBQUFBLE1BQU0sRUFBRTtBQUpPLEdBQUQsQ0EzRlgsQ0FBUDtBQWtHRDs7QUFFRCxTQUFTbEIsNEJBQVQsR0FBOEQ7QUFDNUQsU0FBTztBQUNMdkQsSUFBQUEsRUFBRSxFQUFFLFFBREM7QUFFTFksSUFBQUEsSUFBSSxFQUFFLGVBRkQ7QUFHTDlDLElBQUFBLElBQUksRUFBRTBFLGdFQUhEO0FBSUxrQyxJQUFBQSxNQUFNLEVBQUUsU0FKSDtBQUtMQyxJQUFBQSxPQUFPLEVBQUUsRUFMSjtBQU1MdkIsSUFBQUEsSUFBSSxFQUFFO0FBQ0pvQixNQUFBQSxXQUFXLEVBQUUsdUNBRFQ7QUFFSkksTUFBQUEsS0FBSyxFQUFFO0FBQUVDLFFBQUFBLEtBQUssRUFBRSw2QkFBVDtBQUF3Q0MsUUFBQUEsS0FBSyxFQUFFO0FBQS9DLE9BRkg7QUFHSkMsTUFBQUEsTUFBTSxFQUFFO0FBQUVuRSxRQUFBQSxJQUFJLEVBQUU7QUFBUixPQUhKO0FBSUp5QyxNQUFBQSxLQUFLLEVBQUUsQ0FDTDtBQUNFM0QsUUFBQUEsR0FBRyxFQUFFLHFDQURQO0FBRUVrQixRQUFBQSxJQUFJLEVBQUU7QUFGUixPQURLLENBSkg7QUFVSm9FLE1BQUFBLFdBQVcsRUFBRSxFQVZUO0FBV0pDLE1BQUFBLE9BQU8sRUFBRSxZQVhMO0FBWUpDLE1BQUFBLE9BQU8sRUFBRTtBQVpMO0FBTkQsR0FBUDtBQXFCRDs7QUFTRCxTQUFTWCxnQkFBVCxDQUEwQlksT0FBMUIsRUFBa0Y7QUFDaEYsU0FBTztBQUNMbkYsSUFBQUEsRUFBRSxFQUFFbUYsT0FBTyxDQUFDbkYsRUFEUDtBQUVMWSxJQUFBQSxJQUFJLEVBQUV1RSxPQUFPLENBQUN2RSxJQUZUO0FBR0w5QyxJQUFBQSxJQUFJLEVBQUUwRSxnRUFIRDtBQUlMa0MsSUFBQUEsTUFBTSxFQUFFLFNBSkg7QUFLTEMsSUFBQUEsT0FBTyxFQUFFLEVBTEo7QUFNTHZCLElBQUFBLElBQUksRUFBRTtBQUNKb0IsTUFBQUEsV0FBVyxFQUFFVyxPQUFPLENBQUNYLFdBRGpCO0FBRUpJLE1BQUFBLEtBQUssRUFBRTtBQUFFQyxRQUFBQSxLQUFLLEVBQUVNLE9BQU8sQ0FBQ1YsTUFBakI7QUFBeUJLLFFBQUFBLEtBQUssRUFBRUssT0FBTyxDQUFDVjtBQUF4QyxPQUZIO0FBR0pNLE1BQUFBLE1BQU0sRUFBRTtBQUFFbkUsUUFBQUEsSUFBSSxFQUFFO0FBQVIsT0FISjtBQUlKeUMsTUFBQUEsS0FBSyxFQUFFLENBQ0w7QUFDRTNELFFBQUFBLEdBQUcsRUFBRTdGLHFFQUFBLEdBQTBCc0wsT0FBTyxDQUFDbkYsRUFEekM7QUFFRVksUUFBQUEsSUFBSSxFQUFFO0FBRlIsT0FESyxDQUpIO0FBVUpvRSxNQUFBQSxXQUFXLEVBQUUsRUFWVDtBQVdKQyxNQUFBQSxPQUFPLEVBQUUsWUFYTDtBQVlKQyxNQUFBQSxPQUFPLEVBQUU7QUFaTDtBQU5ELEdBQVA7QUFxQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0EsTUFBTUssYUFBYSxHQUFHLFNBQXRCO0FBRU8sU0FBU3BKLGFBQVQsQ0FBdUJ3QixVQUF2QixFQUF1REQsTUFBdkQsRUFBc0c7QUFDM0csUUFBTThILFVBQVUsR0FBRzlILE1BQU0sQ0FBQzJCLElBQTFCO0FBQ0EsUUFBTW9HLGlCQUFpQixHQUFHNUwsd0ZBQTFCO0FBQ0EsUUFBTTZMLFFBQXNCLEdBQUc7QUFDN0JDLElBQUFBLEdBQUcsRUFBRUgsVUFBVSxDQUFDcEMsSUFBWCxDQUFnQndCLEtBQWhCLENBQXNCRSxLQURFO0FBRTdCOUUsSUFBQUEsRUFBRSxFQUFFLGdCQUFnQnJDLFVBQVUsQ0FBQ29CLEdBRkY7QUFHN0I2RyxJQUFBQSxRQUFRLEVBQUcsU0FBUUosVUFBVSxDQUFDNUUsSUFBSyxFQUhOO0FBSTdCbEIsSUFBQUEsR0FBRyxFQUFFLEVBSndCO0FBSzdCbUcsSUFBQUEsSUFBSSxFQUFFbEksVUFBVSxDQUFDaUQsSUFMWTtBQU03QmtGLElBQUFBLFdBQVcsRUFBRSxDQUFDO0FBQUUxSyxNQUFBQSxLQUFLLEVBQUUsY0FBVDtBQUF5QnNFLE1BQUFBLEdBQUcsRUFBRTtBQUE5QixLQUFELENBTmdCO0FBTzdCcUcsSUFBQUEsUUFBUSxFQUFFLENBQ1I7QUFDRUMsTUFBQUEsTUFBTSxFQUFFLEtBRFY7QUFFRUMsTUFBQUEsSUFBSSxFQUFFLGVBRlI7QUFHRWpHLE1BQUFBLEVBQUUsRUFBRyx1QkFBc0JyQyxVQUFVLENBQUNvQixHQUFJLEVBSDVDO0FBSUU4RyxNQUFBQSxJQUFJLEVBQUUsVUFKUjtBQUtFbkcsTUFBQUEsR0FBRyxFQUFHLG9CQUFtQi9CLFVBQVUsQ0FBQ29CLEdBQUk7QUFMMUMsS0FEUTtBQVBtQixHQUEvQjs7QUFrQkEsTUFBSXJCLE1BQU0sQ0FBQ3dJLFdBQVgsRUFBd0I7QUFDdEIsU0FBSyxNQUFNQyxJQUFYLElBQW1CekksTUFBTSxDQUFDd0ksV0FBMUIsRUFBdUM7QUFDckNSLE1BQUFBLFFBQVEsQ0FBQ0ssUUFBVCxDQUFtQjFFLElBQW5CLENBQXdCO0FBQ3RCMkUsUUFBQUEsTUFBTSxFQUFFLEtBRGM7QUFFdEJILFFBQUFBLElBQUksRUFBRU0sSUFBSSxDQUFDL0ssS0FGVztBQUd0QjZLLFFBQUFBLElBQUksRUFBRUUsSUFBSSxDQUFDRixJQUhXO0FBSXRCdkcsUUFBQUEsR0FBRyxFQUFHLG9CQUFtQi9CLFVBQVUsQ0FBQ29CLEdBQUksVUFBU29ILElBQUksQ0FBQ25HLEVBQUcsRUFKbkM7QUFLdEJBLFFBQUFBLEVBQUUsRUFBRyxtQkFBa0JtRyxJQUFJLENBQUNuRyxFQUFHO0FBTFQsT0FBeEI7QUFPRDtBQUNGOztBQUVELE1BQUl3RixVQUFVLENBQUNZLFFBQVgsSUFBdUJDLGFBQWEsQ0FBQ2IsVUFBVSxDQUFDWSxRQUFaLENBQXBDLElBQTZEbkssNkRBQUEsQ0FBbUIsT0FBbkIsQ0FBakUsRUFBOEY7QUFDNUZ5SixJQUFBQSxRQUFRLENBQUNLLFFBQVQsQ0FBbUIxRSxJQUFuQixDQUF3QjtBQUN0QjJFLE1BQUFBLE1BQU0sRUFBRSxLQURjO0FBRXRCQyxNQUFBQSxJQUFJLEVBQUUsTUFGZ0I7QUFHdEJqRyxNQUFBQSxFQUFFLEVBQUcseUJBQXdCckMsVUFBVSxDQUFDb0IsR0FBSSxFQUh0QjtBQUl0QjhHLE1BQUFBLElBQUksRUFBRSxZQUpnQjtBQUt0Qm5HLE1BQUFBLEdBQUcsRUFBRyxvQkFBbUIvQixVQUFVLENBQUNvQixHQUFJO0FBTGxCLEtBQXhCO0FBT0Q7O0FBRUQsUUFBTXdILFlBQVksR0FBRzVJLFVBQVUsQ0FBQ0csSUFBWCxLQUFvQnlILGFBQXpDO0FBRUEsUUFBTWlCLHVCQUF1QixHQUFHLGtEQUFoQztBQUNBLFFBQU1DLGFBQTJCLEdBQUc7QUFDbENULElBQUFBLE1BQU0sRUFBRSxLQUQwQjtBQUVsQ0MsSUFBQUEsSUFBSSxFQUFFLE1BRjRCO0FBR2xDakcsSUFBQUEsRUFBRSxFQUFHLDBCQUF5QnJDLFVBQVUsQ0FBQ29CLEdBQUksRUFIWDtBQUlsQzhHLElBQUFBLElBQUksRUFBRSxhQUo0QjtBQUtsQ25HLElBQUFBLEdBQUcsRUFBRyxvQkFBbUIvQixVQUFVLENBQUNvQixHQUFJO0FBTE4sR0FBcEM7O0FBUUEsTUFBSTdFLDREQUFjLE1BQU0sQ0FBQ3FNLFlBQXpCLEVBQXVDO0FBQ3JDRSxJQUFBQSxhQUFhLENBQUNDLFNBQWQsR0FBMEIsTUFBTXJCLDhFQUFRLENBQUM7QUFBRXNCLE1BQUFBLFlBQVksRUFBRUgsdUJBQWhCO0FBQXlDSSxNQUFBQSxZQUFZLEVBQUU7QUFBdkQsS0FBRCxDQUF4QztBQUNEOztBQUVELE1BQUluRSxnRUFBYyxDQUFDLGVBQUQsQ0FBbEIsRUFBcUM7QUFDbkMsUUFBSXhHLG1FQUFBLENBQXlCcUoscUZBQXpCLENBQUosRUFBOEU7QUFDNUVJLE1BQUFBLFFBQVEsQ0FBQ0ssUUFBVCxDQUFtQjFFLElBQW5CLENBQXdCb0YsYUFBeEI7QUFDRDtBQUNGLEdBSkQsTUFJTyxJQUFJaEIsaUJBQWlCLElBQUksQ0FBQ2MsWUFBMUIsRUFBd0M7QUFDN0NiLElBQUFBLFFBQVEsQ0FBQ0ssUUFBVCxDQUFtQjFFLElBQW5CLG1CQUNLb0YsYUFETDtBQUVFL0csTUFBQUEsR0FBRyxFQUFFK0csYUFBYSxDQUFDL0csR0FBZCxHQUFvQixVQUYzQjtBQUdFZ0gsTUFBQUEsU0FBUyxFQUFFLE1BQU1yQiw4RUFBUSxDQUFDO0FBQUVzQixRQUFBQSxZQUFZLEVBQUVIO0FBQWhCLE9BQUQ7QUFIM0I7QUFLRDs7QUFFRCxRQUFNTyxxQkFBcUIsR0FBRywrQ0FBOUI7QUFDQSxRQUFNQyxTQUF1QixHQUFHO0FBQzlCaEIsSUFBQUEsTUFBTSxFQUFFLEtBRHNCO0FBRTlCQyxJQUFBQSxJQUFJLEVBQUUsYUFGd0I7QUFHOUJqRyxJQUFBQSxFQUFFLEVBQUcsdUJBQXNCckMsVUFBVSxDQUFDb0IsR0FBSSxFQUhaO0FBSTlCOEcsSUFBQUEsSUFBSSxFQUFFLFVBSndCO0FBSzlCbkcsSUFBQUEsR0FBRyxFQUFHLG9CQUFtQi9CLFVBQVUsQ0FBQ29CLEdBQUk7QUFMVixHQUFoQzs7QUFRQSxNQUFJN0UsNERBQWMsTUFBTSxDQUFDcU0sWUFBekIsRUFBdUM7QUFDckNTLElBQUFBLFNBQVMsQ0FBQ04sU0FBVixHQUFzQixNQUFNckIsOEVBQVEsQ0FBQztBQUFFc0IsTUFBQUEsWUFBWSxFQUFFSSxxQkFBaEI7QUFBdUNILE1BQUFBLFlBQVksRUFBRTtBQUFyRCxLQUFELENBQXBDO0FBQ0Q7O0FBRUQsTUFBSW5FLGdFQUFjLENBQUMsV0FBRCxDQUFsQixFQUFpQztBQUMvQmlELElBQUFBLFFBQVEsQ0FBQ0ssUUFBVCxDQUFtQjFFLElBQW5CLENBQXdCMkYsU0FBeEI7QUFDRCxHQUZELE1BRU8sSUFBSXZCLGlCQUFpQixJQUFJLENBQUNjLFlBQTFCLEVBQXdDO0FBQzdDYixJQUFBQSxRQUFRLENBQUNLLFFBQVQsQ0FBbUIxRSxJQUFuQixtQkFDSzJGLFNBREw7QUFFRXRILE1BQUFBLEdBQUcsRUFBRXNILFNBQVMsQ0FBQ3RILEdBQVYsR0FBZ0IsVUFGdkI7QUFHRWdILE1BQUFBLFNBQVMsRUFBRSxNQUFNckIsOEVBQVEsQ0FBQztBQUFFc0IsUUFBQUEsWUFBWSxFQUFFSTtBQUFoQixPQUFEO0FBSDNCO0FBS0Q7O0FBRUQsUUFBTUUsbUJBQW1CLEdBQUcsd0NBQTVCO0FBRUEsUUFBTUMsT0FBcUIsR0FBRztBQUM1QmxCLElBQUFBLE1BQU0sRUFBRSxLQURvQjtBQUU1QkMsSUFBQUEsSUFBSSxFQUFFLFVBRnNCO0FBRzVCakcsSUFBQUEsRUFBRSxFQUFHLG9CQUFtQnJDLFVBQVUsQ0FBQ29CLEdBQUksRUFIWDtBQUk1QjhHLElBQUFBLElBQUksRUFBRSxPQUpzQjtBQUs1Qm5HLElBQUFBLEdBQUcsRUFBRyxvQkFBbUIvQixVQUFVLENBQUNvQixHQUFJLFFBTFo7QUFNNUJvSSxJQUFBQSxZQUFZLEVBQUUsQ0FBQzNCLFVBQVUsQ0FBQ3RHLFNBQVosSUFBeUIsQ0FBQ3JGLHVFQUFzQjRIO0FBTmxDLEdBQTlCOztBQVNBLE1BQUl2SCw0REFBYyxNQUFNLENBQUNxTSxZQUF6QixFQUF1QztBQUNyQ1csSUFBQUEsT0FBTyxDQUFDUixTQUFSLEdBQW9CLE1BQU1yQiw4RUFBUSxDQUFDO0FBQUVzQixNQUFBQSxZQUFZLEVBQUVNLG1CQUFoQjtBQUFxQ0wsTUFBQUEsWUFBWSxFQUFFO0FBQW5ELEtBQUQsQ0FBbEM7QUFDRDs7QUFFRCxNQUFJbkUsZ0VBQWMsQ0FBQyxTQUFELENBQWxCLEVBQStCO0FBQzdCaUQsSUFBQUEsUUFBUSxDQUFDSyxRQUFULENBQW1CMUUsSUFBbkIsQ0FBd0I2RixPQUF4QjtBQUNELEdBRkQsTUFFTyxJQUFJekIsaUJBQWlCLElBQUksQ0FBQ2MsWUFBMUIsRUFBd0M7QUFDN0NiLElBQUFBLFFBQVEsQ0FBQ0ssUUFBVCxDQUFtQjFFLElBQW5CLG1CQUNLNkYsT0FETDtBQUVFeEgsTUFBQUEsR0FBRyxFQUFFd0gsT0FBTyxDQUFDeEgsR0FBUixHQUFjLFVBRnJCO0FBR0VnSCxNQUFBQSxTQUFTLEVBQUUsTUFBTXJCLDhFQUFRLENBQUM7QUFBRXNCLFFBQUFBLFlBQVksRUFBRU07QUFBaEIsT0FBRDtBQUgzQjtBQUtEOztBQUVELFNBQU92QixRQUFQO0FBQ0Q7QUFFTSxTQUFTMEIsZ0JBQVQsQ0FBMEJDLElBQTFCLEVBQThDQyxRQUE5QyxFQUEwRTtBQUMvRSxNQUFJQyxJQUFrQixHQUFHO0FBQUUxQixJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUF6QixDQUQrRSxDQUcvRTs7QUFDQSxPQUFLLE1BQU0yQixLQUFYLElBQW9CSCxJQUFJLENBQUN0QixRQUF6QixFQUFvQztBQUNsQyxRQUFJeUIsS0FBSyxDQUFDeEgsRUFBTixDQUFVeUgsT0FBVixDQUFrQkgsUUFBbEIsSUFBOEIsQ0FBbEMsRUFBcUM7QUFDbkNFLE1BQUFBLEtBQUssQ0FBQ3hCLE1BQU4sR0FBZSxJQUFmO0FBQ0F1QixNQUFBQSxJQUFJLEdBQUdDLEtBQVA7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsU0FBTztBQUNMSCxJQUFBQSxJQUFJLEVBQUVBLElBREQ7QUFFTEUsSUFBQUEsSUFBSSxFQUFFQTtBQUZELEdBQVA7QUFJRDtBQUNNLFNBQVNHLHVCQUFULENBQWlDSixRQUFqQyxFQUE2RDtBQUNsRSxRQUFNRCxJQUFJLEdBQUdsTCxhQUFhLENBQ3hCO0FBQ0UwRSxJQUFBQSxNQUFNLEVBQUUsRUFEVjtBQUVFOEcsSUFBQUEsU0FBUyxFQUFFLEtBRmI7QUFHRUMsSUFBQUEsYUFBYSxFQUFFLEVBSGpCO0FBSUVDLElBQUFBLGlCQUFpQixFQUFFLEVBSnJCO0FBS0VDLElBQUFBLGVBQWUsRUFBRSxLQUxuQjtBQU1FQyxJQUFBQSxRQUFRLEVBQUUsRUFOWjtBQU9FL0gsSUFBQUEsRUFBRSxFQUFFLENBUE47QUFRRWpCLElBQUFBLEdBQUcsRUFBRSxHQVJQO0FBU0UrQixJQUFBQSxTQUFTLEVBQUUsS0FUYjtBQVVFa0gsSUFBQUEsUUFBUSxFQUFFO0FBQUVDLE1BQUFBLFFBQVEsRUFBRSxhQUFaO0FBQTJCQyxNQUFBQSxhQUFhLEVBQUU7QUFBMUMsS0FWWjtBQVdFdEgsSUFBQUEsSUFBSSxFQUFFLFNBWFI7QUFZRXVILElBQUFBLEtBQUssRUFBRSxDQVpUO0FBYUVDLElBQUFBLFFBQVEsRUFBRSxFQWJaO0FBY0VDLElBQUFBLFFBQVEsRUFBRSxLQWRaO0FBZUV2SyxJQUFBQSxJQUFJLEVBQUV5SCxhQWZSO0FBZ0JFK0MsSUFBQUEsUUFBUSxFQUFFL0MsYUFoQlo7QUFpQkVnRCxJQUFBQSxXQUFXLEVBQUUsK0JBakJmO0FBa0JFN0ksSUFBQUEsR0FBRyxFQUFFLEVBbEJQO0FBbUJFOEksSUFBQUEsSUFBSSxFQUFFLEVBbkJSO0FBb0JFQyxJQUFBQSxnQkFBZ0IsRUFBRTtBQXBCcEIsR0FEd0IsRUF1QnhCO0FBQ0VwSixJQUFBQSxJQUFJLEVBQUU7QUFDSlcsTUFBQUEsRUFBRSxFQUFFLEdBREE7QUFFSmxDLE1BQUFBLElBQUksRUFBRTBFLGdFQUZGO0FBR0o1QixNQUFBQSxJQUFJLEVBQUUsRUFIRjtBQUlKd0MsTUFBQUEsSUFBSSxFQUFFO0FBQ0oyQixRQUFBQSxNQUFNLEVBQUU7QUFDTm5FLFVBQUFBLElBQUksRUFBRSxFQURBO0FBRU5sQixVQUFBQSxHQUFHLEVBQUU7QUFGQyxTQURKO0FBS0o4RSxRQUFBQSxXQUFXLEVBQUUsRUFMVDtBQU1KbkIsUUFBQUEsS0FBSyxFQUFFLENBQUM7QUFBRXpDLFVBQUFBLElBQUksRUFBRSxFQUFSO0FBQVlsQixVQUFBQSxHQUFHLEVBQUU7QUFBakIsU0FBRCxDQU5IO0FBT0prRixRQUFBQSxLQUFLLEVBQUU7QUFDTEUsVUFBQUEsS0FBSyxFQUFFLEVBREY7QUFFTEQsVUFBQUEsS0FBSyxFQUFFO0FBRkYsU0FQSDtBQVdKRyxRQUFBQSxXQUFXLEVBQUUsRUFYVDtBQVlKQyxRQUFBQSxPQUFPLEVBQUUsRUFaTDtBQWFKQyxRQUFBQSxPQUFPLEVBQUU7QUFiTCxPQUpGO0FBbUJKa0IsTUFBQUEsUUFBUSxFQUFFLEVBbkJOO0FBb0JKMUIsTUFBQUEsTUFBTSxFQUFFLEVBcEJKO0FBcUJKQyxNQUFBQSxPQUFPLEVBQUU7QUFyQkw7QUFEUixHQXZCd0IsQ0FBMUI7QUFrREEsU0FBT3lDLGdCQUFnQixDQUFDQyxJQUFELEVBQU9DLFFBQVAsQ0FBdkI7QUFDRDs7QUFFRCxTQUFTakIsYUFBVCxDQUF1QkQsUUFBdkIsRUFBMkQ7QUFDekQsU0FDRUEsUUFBUSxDQUFDbkQsSUFBVCxDQUFleUYsT0FBRCxJQUFhO0FBQ3pCLFdBQU9BLE9BQU8sQ0FBQzVLLElBQVIsS0FBaUIsV0FBeEI7QUFDRCxHQUZELE1BRU82SyxTQUhUO0FBS0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOU1NLE1BQU1DLGNBQWMsR0FBSUMsS0FBRCxJQUE2QjtBQUN6RCxRQUFNQyxLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXRixLQUFLLENBQUNHLFdBQWpCLEVBQThCLEdBQTlCLENBQWQ7QUFFQSxTQUFPSCxLQUFLLENBQUNqTCxXQUFOLENBQWtCbUUsTUFBbEIsQ0FBMEJwRSxVQUFELElBQW9DO0FBQ2xFLFdBQU9tTCxLQUFLLENBQUNHLElBQU4sQ0FBV3RMLFVBQVUsQ0FBQ2lELElBQXRCLEtBQStCa0ksS0FBSyxDQUFDRyxJQUFOLENBQVd0TCxVQUFVLENBQUNvSyxRQUF0QixDQUEvQixJQUFrRWUsS0FBSyxDQUFDRyxJQUFOLENBQVd0TCxVQUFVLENBQUNHLElBQXRCLENBQXpFO0FBQ0QsR0FGTSxDQUFQO0FBR0QsQ0FOTTtBQVFBLE1BQU1vTCxvQkFBb0IsR0FBSUwsS0FBRCxJQUE2QjtBQUMvRCxRQUFNQyxLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXRixLQUFLLENBQUNNLHlCQUFqQixFQUE0QyxHQUE1QyxDQUFkO0FBRUEsU0FBT04sS0FBSyxDQUFDckgsT0FBTixDQUFjTyxNQUFkLENBQXNCakUsSUFBRCxJQUFnQztBQUMxRCxXQUFPZ0wsS0FBSyxDQUFDRyxJQUFOLENBQVduTCxJQUFJLENBQUM4QyxJQUFoQixDQUFQO0FBQ0QsR0FGTSxDQUFQO0FBR0QsQ0FOTTtBQVFBLE1BQU05RCxhQUFhLEdBQUcsQ0FBQytMLEtBQUQsRUFBMEJPLFlBQTFCLEtBQThFO0FBQ3pHLE1BQUlQLEtBQUssQ0FBQ2xMLFVBQU4sQ0FBaUJvQixHQUFqQixLQUF5QnFLLFlBQTdCLEVBQTJDO0FBQ3pDLFdBQU9QLEtBQUssQ0FBQ2xMLFVBQWI7QUFDRDs7QUFDRCxTQUFPLEVBQVA7QUFDRCxDQUxNO0FBT0EsTUFBTVosaUJBQWlCLEdBQUcsQ0FBQzhMLEtBQUQsRUFBMEIvSyxJQUExQixLQUFpRTtBQUNoRyxNQUFJK0ssS0FBSyxDQUFDaEwsY0FBTixDQUFxQm1DLEVBQXJCLEtBQTRCbEMsSUFBaEMsRUFBc0M7QUFDcEMsV0FBTytLLEtBQUssQ0FBQ2hMLGNBQWI7QUFDRDs7QUFFRCxTQUFPLEVBQVA7QUFDRCxDQU5NO0FBUUEsTUFBTXdMLHlCQUF5QixHQUFJUixLQUFELElBQTZCQSxLQUFLLENBQUNHLFdBQXJFO0FBQ0EsTUFBTU0sd0JBQXdCLEdBQUlULEtBQUQsSUFBNkJBLEtBQUssQ0FBQ1UsVUFBcEU7QUFDQSxNQUFNQyxtQkFBbUIsR0FBSVgsS0FBRCxJQUE2QkEsS0FBSyxDQUFDWSxnQkFBL0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNQO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFXTyxNQUFNTyxvQkFBTixTQUFtQ0gsZ0RBQW5DLENBQStEO0FBRXBFO0FBR0E7QUFJQUksRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQWU7QUFDeEIsVUFBTUEsS0FBTjs7QUFEd0IscUNBUkksSUFRSjs7QUFBQTs7QUFBQSwyQ0FIVixNQUFNQyxPQUFPLENBQUNDLE9BQVIsRUFHSTs7QUFBQSw0Q0FGVCxNQUFNRCxPQUFPLENBQUNDLE9BQVIsRUFFRzs7QUFBQSxvQ0F3RWpCLE1BQU07QUFDYixZQUFNQyxRQUFRLEdBQUcsS0FBS0MsS0FBTCxDQUFXdEssRUFBNUI7QUFFQSxXQUFLdUssYUFBTCxHQUNHQyxJQURILENBQ1EsTUFBTTtBQUNWLGNBQU1DLFNBQVMsR0FBR2IsOENBQU0sQ0FDdEI7QUFDRW5JLFVBQUFBLE9BQU8sRUFBRSxLQUFLNkksS0FBTCxDQUFXN0ksT0FEdEI7QUFFRWlKLFVBQUFBLE1BQU0sRUFBRSxLQUFLSixLQUFMLENBQVdJLE1BRnJCO0FBR0UxQyxVQUFBQSxRQUFRLEVBQUUsS0FBS3NDLEtBQUwsQ0FBV3RDLFFBSHZCO0FBSUUyQyxVQUFBQSxjQUFjLEVBQUUsS0FBS0wsS0FBTCxDQUFXSztBQUo3QixTQURzQixFQU90QixFQVBzQixDQUF4QjtBQVNBLGVBQU8vTywrREFBYSxHQUFHc0YsSUFBaEIsQ0FBc0IsZ0JBQWVtSixRQUFTLFdBQTlDLEVBQTBESSxTQUExRCxDQUFQO0FBQ0QsT0FaSCxFQWFHRCxJQWJILENBYVEsS0FBS0ksY0FiYixFQWNHSixJQWRILENBY1NLLEdBQUQsSUFBUztBQUNieEssUUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QkYsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUF2QztBQUNELE9BaEJIO0FBaUJELEtBNUZ5Qjs7QUFBQSw4Q0E4Rk51SyxRQUFELElBQXlCO0FBQzFDLFdBQUtQLGFBQUwsR0FBcUJPLFFBQXJCO0FBQ0QsS0FoR3lCOztBQUFBLCtDQWtHTEEsUUFBRCxJQUF5QjtBQUMzQyxXQUFLRixjQUFMLEdBQXNCRSxRQUF0QjtBQUNELEtBcEd5Qjs7QUFBQSw4Q0F1R1AsTUFBcUI7QUFDdENoQixNQUFBQSxpRUFBa0IsQ0FBQyxXQUFELEVBQWMsb0JBQWQsQ0FBbEI7QUFDQSxhQUFPSyxPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNELEtBMUd5Qjs7QUFBQSxvQ0E0R2pCLE1BQU07QUFDYixXQUFLRSxLQUFMLENBQVc3SSxPQUFYLEdBQXFCLElBQXJCO0FBQ0EsV0FBSzZJLEtBQUwsQ0FBV0ksTUFBWCxHQUFvQixJQUFwQjtBQUNBLFdBQUtLLE1BQUw7QUFDRCxLQWhIeUI7O0FBQUEscUNBa0hoQixNQUFNO0FBQ2QsV0FBS1QsS0FBTCxDQUFXN0ksT0FBWCxHQUFxQixLQUFyQjtBQUNBLFdBQUs2SSxLQUFMLENBQVdJLE1BQVgsR0FBb0IsS0FBcEI7QUFDQSxXQUFLSyxNQUFMO0FBQ0QsS0F0SHlCOztBQUV4QixTQUFLbEMsS0FBTCxHQUFhO0FBQ1htQyxNQUFBQSxXQUFXLEVBQUUsSUFERjtBQUVYQyxNQUFBQSxPQUFPLEVBQUU7QUFGRSxLQUFiO0FBSUQ7O0FBRURDLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCO0FBQ0FDLElBQUFBLFVBQVUsQ0FBQyxNQUFNO0FBQ2YsV0FBS0MsUUFBTCxDQUFjO0FBQUVILFFBQUFBLE9BQU8sRUFBRSxLQUFLcEMsS0FBTCxDQUFXb0MsT0FBWCxHQUFxQjtBQUFoQyxPQUFkO0FBQ0QsS0FGUyxFQUVQLENBRk8sQ0FBVjtBQUdEOztBQUVESSxFQUFBQSxrQkFBa0IsQ0FBQ0MsU0FBRCxFQUFtQjtBQUNuQyxRQUFJLENBQUMsS0FBS0MsT0FBTixJQUFpQixLQUFLMUMsS0FBTCxDQUFXbUMsV0FBaEMsRUFBNkM7QUFDM0M7QUFDRCxLQUhrQyxDQUtuQzs7O0FBQ0EsU0FBS1YsS0FBTCxHQUFhWCxpREFBUyxDQUFDLEtBQUtPLEtBQUwsQ0FBV3NCLEdBQVgsQ0FBZW5NLElBQWhCLENBQXRCO0FBRUEsVUFBTW9NLE1BQU0sR0FBRzFCLGtFQUFnQixFQUEvQjtBQUNBLFVBQU0yQixRQUFRLEdBQUcsOERBQWpCO0FBQ0EsVUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxNQUFBQSxJQUFJLEVBQUUsSUFEVztBQUVqQjtBQUNBQyxNQUFBQSxlQUFlLEVBQUU7QUFIQSxLQUFuQjtBQUtBLFVBQU1iLFdBQVcsR0FBR1MsTUFBTSxDQUFDSyxJQUFQLENBQVksS0FBS1AsT0FBakIsRUFBMEJJLFVBQTFCLEVBQXNDRCxRQUF0QyxDQUFwQjtBQUVBLFNBQUtOLFFBQUwsQ0FBYztBQUFFSixNQUFBQTtBQUFGLEtBQWQ7QUFDRDs7QUFFRGUsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTXpCLEtBQUssR0FBRyxLQUFLQSxLQUFuQjtBQUVBLFVBQU0wQixlQUFlLEdBQUd0QyxpREFBRyxDQUFDO0FBQUV1QyxNQUFBQSxXQUFXLEVBQUU7QUFBZixLQUFELENBQTNCO0FBRUEsd0JBQ0U7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBR1YsT0FBRCxJQUFjLEtBQUtBLE9BQUwsR0FBZUE7QUFBdkMsUUFERiw2QkFFRSxnRUFGRixnQ0FHRSxnRUFIRixHQUlHakIsS0FBSyxpQkFDSjtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLG1CQUNHLENBQUNBLEtBQUssQ0FBQzdJLE9BQVAsaUJBQ0MsdURBQUMsK0NBQUQ7QUFBUSxpQkFBTyxFQUFDLFNBQWhCO0FBQTBCLGlCQUFPLEVBQUUsS0FBS3lLLE1BQXhDO0FBQWdELG1CQUFTLEVBQUVGLGVBQTNEO0FBQUE7QUFBQSxVQUZKLEVBTUcxQixLQUFLLENBQUM3SSxPQUFOLGlCQUNDLHVEQUFDLCtDQUFEO0FBQVEsaUJBQU8sRUFBQyxTQUFoQjtBQUEwQixpQkFBTyxFQUFFLEtBQUtzSixNQUF4QztBQUFnRCxtQkFBUyxFQUFFaUIsZUFBM0Q7QUFBQTtBQUFBLFVBUEosRUFXRzFCLEtBQUssQ0FBQzdJLE9BQU4saUJBQ0MsdURBQUMsK0NBQUQ7QUFBUSxpQkFBTyxFQUFDLGFBQWhCO0FBQThCLGlCQUFPLEVBQUUsS0FBSzBLLE9BQTVDO0FBQXFELG1CQUFTLEVBQUVILGVBQWhFO0FBQUE7QUFBQSxVQVpKO0FBQUEsUUFMSjtBQUFBLE1BREY7QUEwQkQsR0EzRW1FLENBNkVwRTtBQUNBO0FBQ0E7OztBQS9Fb0U7Ozs7Ozs7Ozs7Ozs7OztBQ2xCdEU7QUFFQTtBQUNBOztBQUlPLFNBQVNNLG1CQUFULENBQTZCO0FBQUVDLEVBQUFBO0FBQUYsQ0FBN0IsRUFBbUU7QUFDeEUsUUFBTUMsT0FBTyxHQUFHQyxrQkFBa0IsQ0FBQ0YsS0FBRCxDQUFsQztBQUNBLHNCQUFPLHVEQUFDLDhDQUFEO0FBQU8sUUFBSSxFQUFDLHNCQUFaO0FBQW1DLFFBQUksRUFBQyxVQUF4QztBQUFtRCxTQUFLLEVBQUMsS0FBekQ7QUFBK0QsV0FBTyxFQUFFQztBQUF4RSxJQUFQO0FBQ0Q7O0FBRUQsU0FBU0Msa0JBQVQsQ0FBNEJGLEtBQTVCLEVBQXlFO0FBQ3ZFLFVBQVFBLEtBQVI7QUFDRSxTQUFLSCw0RUFBTDtBQUNFLGFBQU8seUNBQVA7O0FBQ0YsU0FBS0EsMkVBQUw7QUFDRSxhQUFPLGlEQUFQOztBQUNGLFNBQUtBLDJFQUFMO0FBQ0UsYUFBTyxpREFBUDs7QUFDRjtBQUNFLGFBQVEsd0NBQXVDRyxLQUFNLEVBQXJEO0FBUko7QUFVRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJEO0FBRUE7QUFDQTtBQUlBOzs7QUFJTyxTQUFTVSxxQkFBVCxDQUErQjtBQUFFdlAsRUFBQUE7QUFBRixDQUEvQixFQUFzRTtBQUMzRSxRQUFNd1AsaUJBQWlCLEdBQUdILHVEQUFVLENBQUNDLHdEQUFELENBQXBDOztBQUNBLFFBQU1HLE9BQU8sR0FBSUMsRUFBRCxJQUF5RDtBQUN2RUEsSUFBQUEsRUFBRSxDQUFDQyxjQUFIO0FBQ0FoTixJQUFBQSxNQUFNLENBQUNpTixJQUFQLENBQ0csdUNBQXNDNVAsTUFBTSxDQUFDc0MsRUFBRyx3Q0FEbkQsRUFFRSxRQUZGLEVBR0UscUJBSEY7QUFLRCxHQVBEOztBQVNBLE1BQUl5QyxnRUFBYyxDQUFDLG9CQUFELENBQWxCLEVBQTBDO0FBQ3hDLDRDQUFPLHVEQUFDLDhDQUFEO0FBQU8sVUFBSSxFQUFDLFlBQVo7QUFBeUIsV0FBSyxFQUFDO0FBQS9CLE1BQVA7QUFDRDs7QUFFRCxzQkFDRSx3REFBQyx3REFBRDtBQUFBLDRCQUNFLHVEQUFDLDZEQUFEO0FBQXNCLFlBQU0sRUFBRS9FLE1BQU0sQ0FBQzZQO0FBQXJDLE1BREYsZUFFRSx1REFBQyw4Q0FBRDtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQW1CLG9CQUFXLFdBQTlCO0FBQTBDLFVBQUksRUFBQyxZQUEvQztBQUE0RCxXQUFLLEVBQUMsTUFBbEU7QUFBeUUsZUFBUyxFQUFFTDtBQUFwRixNQUZGLGVBR0UsdURBQUMsK0NBQUQ7QUFBUSxVQUFJLEVBQUMsSUFBYjtBQUFrQixVQUFJLEVBQUMsTUFBdkI7QUFBOEIsVUFBSSxFQUFDLG1CQUFuQztBQUF1RCxhQUFPLEVBQUVDLE9BQWhFO0FBQUE7QUFBQSxNQUhGO0FBQUEsSUFERjtBQVNEOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0Q7QUFFQTtBQUVBOztBQUVPLFNBQVNLLG9CQUFULEdBQW9EO0FBQ3pELFFBQU1OLGlCQUFpQixHQUFHSCx1REFBVSxDQUFDQyx3REFBRCxDQUFwQztBQUNBLHNCQUFPLHVEQUFDLDhDQUFEO0FBQU8sUUFBSSxFQUFDLFdBQVo7QUFBd0IsU0FBSyxFQUFDLFFBQTlCO0FBQXVDLGFBQVMsRUFBRUU7QUFBbEQsSUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1REO0FBQ0E7QUFFQTtBQUNBOztBQVFPLFNBQVNPLDBCQUFULENBQW9DO0FBQUUvUCxFQUFBQTtBQUFGLENBQXBDLEVBQWtGO0FBQ3ZGLFFBQU1nUSxNQUFNLEdBQUdYLHVEQUFVLENBQUNZLFNBQUQsQ0FBekIsQ0FEdUYsQ0FHdkY7O0FBQ0EsTUFBSWpRLE1BQU0sQ0FBQ2tRLFNBQVAsSUFBb0IsQ0FBQ2xRLE1BQU0sQ0FBQ21RLE1BQTVCLElBQXNDblEsTUFBTSxDQUFDSSxJQUFQLEtBQWdCMEUsOERBQTFELEVBQStFO0FBQzdFLHdCQUFPO0FBQUcsZUFBUyxFQUFFa0wsTUFBTSxDQUFDRSxTQUFyQjtBQUFBO0FBQUEsTUFBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNEO0FBRU0sTUFBTUQsU0FBUyxHQUFJSSxLQUFELElBQTBCO0FBQ2pELFNBQU87QUFDTEgsSUFBQUEsU0FBUyxFQUFFbEUsNkNBQUk7QUFDbkIsZUFBZXFFLEtBQUssQ0FBQ0MsTUFBTixDQUFhbkksSUFBYixDQUFrQm9JLFNBQVU7QUFDM0MsbUJBQW1CRixLQUFLLENBQUNHLFVBQU4sQ0FBaUJDLFNBQWpCLENBQTJCQyxRQUFTO0FBQ3ZEO0FBQ0E7QUFMUyxHQUFQO0FBT0QsQ0FSTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBSU8sTUFBTXBCLGFBQWEsR0FBSWUsS0FBRCxJQUEwQnJFLDZDQUFJO0FBQzNELGdCQUFnQnFFLEtBQUssQ0FBQ0MsTUFBTixDQUFhSyxVQUFiLENBQXdCQyxPQUFRO0FBQ2hELGtCQUFrQlAsS0FBSyxDQUFDQyxNQUFOLENBQWFPLE1BQWIsQ0FBb0JDLE1BQU87QUFDN0MsV0FBV1QsS0FBSyxDQUFDQyxNQUFOLENBQWFuSSxJQUFiLENBQWtCb0ksU0FBVTtBQUN2QyxDQUpPOzs7Ozs7Ozs7Ozs7Ozs7O0FDSlA7QUFHQTtBQUVBO0FBQ0E7Ozs7QUFPTyxTQUFTVSxpQkFBVCxDQUEyQjtBQUFFalIsRUFBQUE7QUFBRixDQUEzQixFQUF5RTtBQUM5RSxRQUFNO0FBQUVrUixJQUFBQSxLQUFLLEVBQUVDO0FBQVQsTUFBMEJILHVFQUFlLENBQUNoUixNQUFELENBQS9DOztBQUVBLE1BQUksQ0FBQ21SLFlBQUwsRUFBbUI7QUFDakIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsUUFBTTtBQUFFcE4sSUFBQUEsT0FBRjtBQUFXdUcsSUFBQUE7QUFBWCxNQUF3QjZHLFlBQXhCLGFBQXdCQSxZQUF4Qix1QkFBd0JBLFlBQVksQ0FBRXhQLElBQTVDOztBQUVBLFFBQU02TSxNQUFNLEdBQUcsTUFDYjRDLDZCQUE2QixDQUFDcFIsTUFBTSxDQUFDc0MsRUFBUixFQUFZO0FBQ3ZDeUIsSUFBQUEsT0FBTyxFQUFFLElBRDhCO0FBRXZDaUosSUFBQUEsTUFBTSxFQUFFLElBRitCO0FBR3ZDMUMsSUFBQUE7QUFIdUMsR0FBWixDQUQvQjs7QUFPQSxRQUFNbUUsT0FBTyxHQUFHLE1BQU07QUFDcEIyQyxJQUFBQSw2QkFBNkIsQ0FBQ3BSLE1BQU0sQ0FBQ3NDLEVBQVIsRUFBWTtBQUN2Q3lCLE1BQUFBLE9BQU8sRUFBRSxLQUQ4QjtBQUV2Q2lKLE1BQUFBLE1BQU0sRUFBRSxLQUYrQjtBQUd2QzFDLE1BQUFBO0FBSHVDLEtBQVosQ0FBN0I7QUFLRCxHQU5EOztBQVFBLHNCQUNFO0FBQUEsZUFDRyxDQUFDdkcsT0FBRCxpQkFDQyx1REFBQywrQ0FBRDtBQUFRLGFBQU8sRUFBQyxTQUFoQjtBQUEwQixhQUFPLEVBQUV5SyxNQUFuQztBQUFBO0FBQUEsTUFGSixFQU9HekssT0FBTyxpQkFDTix1REFBQywrQ0FBRDtBQUFRLGFBQU8sRUFBQyxhQUFoQjtBQUE4QixhQUFPLEVBQUUwSyxPQUF2QztBQUFBO0FBQUEsTUFSSjtBQUFBLElBREY7QUFlRDs7QUFFRCxNQUFNMkMsNkJBQTZCLEdBQUcsT0FBTzlPLEVBQVAsRUFBbUJwQixJQUFuQixLQUFpRDtBQUNyRixNQUFJO0FBQ0YsVUFBTTZQLDBEQUFvQixDQUFDek8sRUFBRCxFQUFLcEIsSUFBTCxDQUExQixDQURFLENBR0Y7O0FBQ0F5QixJQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JhLE1BQWhCO0FBQ0QsR0FMRCxDQUtFLE9BQU80TixDQUFQLEVBQVU7QUFDVmpQLElBQUFBLE9BQU8sQ0FBQ3lNLEtBQVIsQ0FBYyxpQ0FBZCxFQUFpRHdDLENBQWpEO0FBQ0Q7QUFDRixDQVREOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBR0E7QUFDQTtBQUVBOztBQU9PLFNBQVNJLHdCQUFULENBQWtDO0FBQUV6UixFQUFBQTtBQUFGLENBQWxDLEVBQWdGO0FBQ3JGLFFBQU1MLFFBQVEsR0FBRzRSLHdEQUFXLEVBQTVCO0FBQ0EsUUFBTUcsZUFBZSxHQUFHSixrREFBVyxDQUFDLE1BQU07QUFDeEMsVUFBTTNQLElBQUksR0FBRztBQUNYdUIsTUFBQUEsSUFBSSxFQUFFbEQsTUFBTSxDQUFDa0QsSUFERjtBQUVYWixNQUFBQSxFQUFFLEVBQUV0QyxNQUFNLENBQUNzQztBQUZBLEtBQWI7QUFLQTNDLElBQUFBLFFBQVEsQ0FBQ29ELHFGQUFhLENBQUNwQixJQUFELENBQWQsQ0FBUjtBQUNELEdBUGtDLEVBT2hDLENBQUNoQyxRQUFELEVBQVdLLE1BQVgsQ0FQZ0MsQ0FBbkM7O0FBU0EsTUFBSSxDQUFDd1IsZ0VBQWtCLEVBQXZCLEVBQTJCO0FBQ3pCLFdBQU8sSUFBUDtBQUNEOztBQUVELHNCQUNFLHdEQUFDLCtDQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQTBCLFdBQU8sRUFBRUUsZUFBbkM7QUFBQSw0QkFDWTFSLE1BQU0sQ0FBQ2tELElBRG5CO0FBQUEsSUFERjtBQUtEOzs7Ozs7Ozs7Ozs7Ozs7O0FDbENEO0FBRUE7QUFJQTtBQUNBOztBQU1PLFNBQVN5TyxvQkFBVCxDQUE4QjtBQUFFM1IsRUFBQUE7QUFBRixDQUE5QixFQUFzRTtBQUMzRSxNQUFJLENBQUNBLE1BQU0sQ0FBQzRSLFdBQVIsSUFBdUI1UixNQUFNLENBQUM2UixVQUFsQyxFQUE4QztBQUM1QyxXQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFRN1IsTUFBTSxDQUFDSSxJQUFmO0FBQ0UsU0FBSzBFLGdFQUFMO0FBQ0UsMEJBQU8sdURBQUMsK0VBQUQ7QUFBMEIsY0FBTSxFQUFFOUU7QUFBbEMsUUFBUDs7QUFDRixTQUFLOEUseURBQUw7QUFDRSwwQkFBTyx1REFBQyxpRUFBRDtBQUFtQixjQUFNLEVBQUU5RTtBQUEzQixRQUFQOztBQUNGO0FBQ0UsYUFBTyxJQUFQO0FBTko7QUFRRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRTFCRDtBQUVBO0FBRUE7QUFDQTs7O0FBT08sU0FBU2lTLHVCQUFULENBQWlDO0FBQUV0RixFQUFBQSxRQUFGO0FBQVl1RixFQUFBQTtBQUFaLENBQWpDLEVBQTJGO0FBQ2hHLFFBQU1DLGtCQUFrQixHQUFJLEdBQUVKLCtEQUFxQixDQUFDcEYsUUFBRCxDQUFXLG9CQUE5RDs7QUFFQSxNQUFJdUYsWUFBWSxLQUFLRix1REFBckIsRUFBMEM7QUFDeEMsd0JBQ0Usd0RBQUMsd0RBQUQ7QUFBaUIsWUFBTSxFQUFDLE1BQXhCO0FBQUEsOEJBQ0UsdURBQUMsbURBQUQ7QUFBWSxZQUFJLEVBQUVHLGtCQUFsQjtBQUFzQyxjQUFNLEVBQUMsUUFBN0M7QUFBc0QsV0FBRyxFQUFDLHFCQUExRDtBQUFBO0FBQUEsUUFERixlQUlFLHVEQUFDLG1EQUFEO0FBQVksZUFBTyxFQUFDLGFBQXBCO0FBQWtDLFlBQUksRUFBRUEsa0JBQXhDO0FBQTRELGNBQU0sRUFBQyxRQUFuRTtBQUE0RSxXQUFHLEVBQUMscUJBQWhGO0FBQUE7QUFBQSxRQUpGO0FBQUEsTUFERjtBQVVEOztBQUVELE1BQUlELFlBQVksS0FBS0YsMERBQXJCLEVBQTZDO0FBQzNDLHdCQUNFLHVEQUFDLG1EQUFEO0FBQVksYUFBTyxFQUFDLGFBQXBCO0FBQWtDLFVBQUksRUFBRUcsa0JBQXhDO0FBQTRELFlBQU0sRUFBQyxRQUFuRTtBQUE0RSxTQUFHLEVBQUMscUJBQWhGO0FBQUE7QUFBQSxNQURGO0FBS0Q7O0FBRUQsc0JBQ0UsdURBQUMsbURBQUQ7QUFBWSxRQUFJLEVBQUVBLGtCQUFsQjtBQUFzQyxVQUFNLEVBQUMsUUFBN0M7QUFBc0QsT0FBRyxFQUFDLHFCQUExRDtBQUFBO0FBQUEsSUFERjtBQUtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFPTyxNQUFNTyxlQUFlLEdBQUcsQ0FBQztBQUFFMVMsRUFBQUEsTUFBRjtBQUFVMlMsRUFBQUE7QUFBVixDQUFELEtBQWdEO0FBQzdFLFFBQU0zQyxNQUFNLEdBQUdYLHVEQUFVLENBQUNZLFNBQUQsQ0FBekI7QUFDQSxRQUFNMkMsbUJBQW1CLEdBQUd6VyxxRkFBNUI7QUFDQSxRQUFNZ04sYUFBYSxHQUFHb0osNERBQWMsRUFBcEM7QUFDQSxRQUFNTyx3QkFBd0IsR0FBR04seUVBQTJCLEVBQTVEO0FBQ0EsUUFBTU8sWUFBWSxHQUFHQyxPQUFPLENBQUNMLHVCQUFELENBQTVCO0FBQ0EsUUFBTU0seUJBQXlCLEdBQUdqVCxNQUFNLENBQUNtUSxNQUFQLElBQWlCblEsTUFBTSxDQUFDNlIsVUFBeEIsSUFBc0MsQ0FBQ1Msa0VBQXdCLEVBQWpHO0FBRUEsUUFBTUosWUFBWSxHQUFHbFMsTUFBTSxDQUFDNFIsV0FBUCxHQUNqQjVSLE1BQU0sQ0FBQ2tRLFNBQVAsR0FDRThCLHVEQURGLEdBRUVBLDBEQUhlLEdBSWpCQSx3REFKSjs7QUFNQSxNQUFJaUIseUJBQUosRUFBK0I7QUFDN0IsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBSWpULE1BQU0sQ0FBQ0ksSUFBUCxLQUFnQjBFLDhEQUFwQixFQUF5QztBQUN2Qyx3QkFBTztBQUFLLGVBQVMsRUFBRWtMLE1BQU0sQ0FBQ2pQLE9BQXZCO0FBQUE7QUFBQSxNQUFQO0FBQ0Q7O0FBRUQsTUFBSWYsTUFBTSxDQUFDbVQsWUFBUCxJQUF1QixDQUFDcE8sZ0VBQWMsQ0FBQyxvQkFBRCxDQUExQyxFQUFrRTtBQUNoRSx3QkFDRSx5REFBQyx3REFBRDtBQUFpQixZQUFNLEVBQUMsTUFBeEI7QUFBK0IsV0FBSyxFQUFDLFFBQXJDO0FBQUEsOEJBQ0U7QUFBTSxpQkFBUyxFQUFFaUwsTUFBTSxDQUFDalAsT0FBeEI7QUFBQTtBQUFBLFFBREYsZUFFRSx3REFBQyxtREFBRDtBQUNFLFlBQUksRUFBRyxHQUFFZ1IsK0RBQXFCLENBQUMvUixNQUFNLENBQUNzQyxFQUFSLENBQVksd0NBRDVDO0FBRUUsY0FBTSxFQUFDLFFBRlQ7QUFHRSxXQUFHLEVBQUMscUJBSE47QUFJRSxZQUFJLEVBQUMsSUFKUDtBQUtFLFlBQUksRUFBQyxNQUxQO0FBTUUsWUFBSSxFQUFDLG1CQU5QO0FBQUE7QUFBQSxRQUZGO0FBQUEsTUFERjtBQWVEOztBQUVELE1BQUl0QyxNQUFNLENBQUNvVCxLQUFYLEVBQWtCO0FBQ2hCLHdCQUNFO0FBQUssZUFBUyxFQUFFcEQsTUFBTSxDQUFDalAsT0FBdkI7QUFBQTtBQUFBLE1BREY7QUFHRDs7QUFFRCxNQUFJLENBQUNvSSxhQUFELElBQWtCLENBQUN5SixtQkFBdkIsRUFBNEM7QUFDMUMsVUFBTTdSLE9BQU8sR0FBSSxpQ0FBZ0NtUixZQUFhLGVBQTlEO0FBQ0Esd0JBQU87QUFBSyxlQUFTLEVBQUVsQyxNQUFNLENBQUNqUCxPQUF2QjtBQUFBLGdCQUFpQ0E7QUFBakMsTUFBUDtBQUNEOztBQUVELE1BQUksQ0FBQ2YsTUFBTSxDQUFDcVQsV0FBWixFQUF5QjtBQUN2Qix3QkFDRTtBQUFLLGVBQVMsRUFBRXJELE1BQU0sQ0FBQ2pQLE9BQXZCO0FBQUEsZ0RBQ0Usd0RBQUMsNkNBQUQ7QUFBTSxZQUFJLEVBQUM7QUFBWCxRQURGLHVDQUN1RSxHQUR2RSwyQkFFRTtBQUFHLFlBQUksRUFBQyxpQ0FBUjtBQUEwQyxjQUFNLEVBQUMsU0FBakQ7QUFBMkQsV0FBRyxFQUFDLFlBQS9EO0FBQUE7QUFBQSxRQUZGLEdBSU8sR0FKUDtBQUFBLE1BREY7QUFTRDs7QUFFRCxNQUFJLENBQUNnUyxZQUFMLEVBQW1CO0FBQ2pCLHdCQUNFO0FBQUssZUFBUyxFQUFFL0MsTUFBTSxDQUFDalAsT0FBdkI7QUFBQSxrREFDRSx3REFBQyw2Q0FBRDtBQUFNLFlBQUksRUFBQztBQUFYLFFBREY7QUFBQSxNQURGO0FBTUQ7O0FBRUQsTUFBSTZSLG1CQUFKLEVBQXlCO0FBQ3ZCLHdCQUFPLHdEQUFDLDZFQUFEO0FBQXlCLGNBQVEsRUFBRTVTLE1BQU0sQ0FBQ3NDLEVBQTFDO0FBQThDLGtCQUFZLEVBQUU0UDtBQUE1RCxNQUFQO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDWSx3QkFBTCxFQUErQjtBQUM3Qix3QkFDRTtBQUFLLGVBQVMsRUFBRTlDLE1BQU0sQ0FBQ2pQLE9BQXZCO0FBQUE7QUFBQSxNQURGO0FBS0Q7O0FBRUQsc0JBQ0Usd0RBQUMsMEVBQUQ7QUFDRSxVQUFNLEVBQUVmLE1BRFY7QUFFRSxnQkFBWSxFQUFFa1MsWUFGaEI7QUFHRSwyQkFBdUIsRUFBRVM7QUFIM0IsSUFERjtBQU9ELENBM0ZNO0FBNkZBLE1BQU0xQyxTQUFTLEdBQUlJLEtBQUQsSUFBMEI7QUFDakQsU0FBTztBQUNMdFAsSUFBQUEsT0FBTyxFQUFFaUwsNkNBQUk7QUFDakIsZUFBZXFFLEtBQUssQ0FBQ0MsTUFBTixDQUFhbkksSUFBYixDQUFrQm9JLFNBQVU7QUFDM0M7QUFIUyxHQUFQO0FBS0QsQ0FOTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakhQO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQVFPLFNBQVNrQyxxQkFBVCxDQUErQjtBQUFFelMsRUFBQUEsTUFBRjtBQUFVa1MsRUFBQUEsWUFBVjtBQUF3QlMsRUFBQUE7QUFBeEIsQ0FBL0IsRUFBOEc7QUFBQTs7QUFDbkgsUUFBTTtBQUFFbUIsSUFBQUEsWUFBRjtBQUFnQmpGLElBQUFBLEtBQUssRUFBRWtGO0FBQXZCLE1BQTJDTCw4REFBZ0IsRUFBakU7QUFDQSxRQUFNO0FBQUVNLElBQUFBLGNBQUY7QUFBa0JuRixJQUFBQSxLQUFLLEVBQUVvRjtBQUF6QixNQUErQ04sZ0VBQWtCLEVBQXZFO0FBQ0EsUUFBTU8sT0FBTyxHQUFHTix3REFBVSxFQUExQjtBQUNBLFFBQU1PLFNBQVMsR0FBR04sMERBQVksRUFBOUI7QUFDQSxRQUFNLENBQUNPLHFCQUFELEVBQXdCQyx3QkFBeEIsSUFBb0RmLCtDQUFRLENBQUMsS0FBRCxDQUFsRTs7QUFDQSxRQUFNZ0IsZ0JBQWdCLEdBQUcsTUFBTUQsd0JBQXdCLENBQUMsSUFBRCxDQUF2RDs7QUFDQSxRQUFNRSxnQkFBZ0IsR0FBRyxNQUFNRix3QkFBd0IsQ0FBQyxLQUFELENBQXZEOztBQUNBLFFBQU1HLGdCQUFnQixHQUFHUixjQUFjLEdBQUcsY0FBSCxHQUFvQixXQUEzRDs7QUFFQSxRQUFNUyxTQUFTLEdBQUcsWUFBWTtBQUM1QixVQUFNUCxPQUFPLENBQUNsVSxNQUFNLENBQUNzQyxFQUFSLEVBQVlxUSx1QkFBWixhQUFZQSx1QkFBWix1QkFBWUEsdUJBQXVCLENBQUVuTCxPQUFyQyxDQUFiOztBQUNBLFFBQUksQ0FBQ3VNLGVBQUwsRUFBc0I7QUFDcEJOLE1BQUFBLGdFQUFBLENBQWVGLGlFQUFmLEVBQXVDLENBQUUsYUFBWXZULE1BQU0sQ0FBQ2tELElBQUssRUFBMUIsQ0FBdkM7QUFDRDtBQUNGLEdBTEQ7O0FBT0EsUUFBTTBSLFdBQVcsR0FBRyxZQUFZO0FBQzlCTCxJQUFBQSxnQkFBZ0I7QUFDaEIsVUFBTUosU0FBUyxDQUFDblUsTUFBTSxDQUFDc0MsRUFBUixDQUFmOztBQUNBLFFBQUksQ0FBQzJSLGlCQUFMLEVBQXdCO0FBQ3RCUixNQUFBQSxnRUFBQSxDQUFlRixpRUFBZixFQUF1QyxDQUFFLGVBQWN2VCxNQUFNLENBQUNrRCxJQUFLLEVBQTVCLENBQXZDO0FBQ0Q7QUFDRixHQU5EOztBQVFBLFFBQU0yUixRQUFRLEdBQUcsWUFBWTtBQUMzQixVQUFNWCxPQUFPLENBQUNsVSxNQUFNLENBQUNzQyxFQUFSLEVBQVlxUSx1QkFBWixhQUFZQSx1QkFBWix1QkFBWUEsdUJBQXVCLENBQUVuTCxPQUFyQyxFQUE4QyxJQUE5QyxDQUFiOztBQUNBLFFBQUksQ0FBQ3VNLGVBQUwsRUFBc0I7QUFDcEJOLE1BQUFBLGdFQUFBLENBQWVGLGlFQUFmLEVBQXVDLENBQUUsV0FBVXZULE1BQU0sQ0FBQ2tELElBQUssRUFBeEIsQ0FBdkM7QUFDRDtBQUNGLEdBTEQ7O0FBT0EsTUFBSWdQLFlBQVksS0FBS0YsMERBQXJCLEVBQTZDO0FBQzNDLHdCQUNFO0FBQUEsOEJBQ0UsdURBQUMscURBQUQ7QUFDRSxjQUFNLEVBQUVvQyxxQkFEVjtBQUVFLGFBQUssRUFBRyxhQUFZcFUsTUFBTSxDQUFDa0QsSUFBSyxFQUZsQztBQUdFLFlBQUksRUFBQyxpREFIUDtBQUlFLG1CQUFXLEVBQUMsU0FKZDtBQUtFLFlBQUksRUFBQyxzQkFMUDtBQU1FLGlCQUFTLEVBQUUwUixXQU5iO0FBT0UsaUJBQVMsRUFBRUw7QUFQYixRQURGLGVBVUUsdURBQUMsd0RBQUQ7QUFBaUIsY0FBTSxFQUFDLE1BQXhCO0FBQUEsK0JBQ0UsdURBQUMsK0NBQUQ7QUFBUSxpQkFBTyxFQUFDLGFBQWhCO0FBQThCLGtCQUFRLEVBQUVQLGNBQXhDO0FBQXdELGlCQUFPLEVBQUVNLGdCQUFqRTtBQUFBLG9CQUNHRTtBQURIO0FBREYsUUFWRjtBQUFBLE1BREY7QUFrQkQ7O0FBRUQsTUFBSXRDLFlBQVksS0FBS0YsdURBQXJCLEVBQTBDO0FBQ3hDLHdCQUNFLHdEQUFDLHdEQUFEO0FBQWlCLFlBQU0sRUFBQyxNQUF4QjtBQUFBLDhCQUNFLHVEQUFDLCtDQUFEO0FBQVEsZ0JBQVEsRUFBRThCLFlBQWxCO0FBQWdDLGVBQU8sRUFBRWUsUUFBekM7QUFBQSxrQkFDR2YsWUFBWSxHQUFHLFVBQUgsR0FBZ0I7QUFEL0IsUUFERixxQ0FJRSx1REFBQywrQ0FBRDtBQUFRLGVBQU8sRUFBQyxhQUFoQjtBQUE4QixnQkFBUSxFQUFFRSxjQUF4QztBQUF3RCxlQUFPLEVBQUVZLFdBQWpFO0FBQUEsa0JBQ0dKO0FBREgsUUFKRjtBQUFBLE1BREY7QUFVRDs7QUFFRCxzQkFDRSx1REFBQywrQ0FBRDtBQUFRLFlBQVEsRUFBRVYsWUFBbEI7QUFBZ0MsV0FBTyxFQUFFVyxTQUF6QztBQUFBLGNBQ0dYLFlBQVksR0FBRyxZQUFILEdBQWtCO0FBRGpDLElBREY7QUFLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFdEZEO0FBRUE7O0FBTU8sTUFBTWlCLE1BQU0sR0FBRyxDQUFDO0FBQUU1TSxFQUFBQSxJQUFJLEdBQUc7QUFBVCxDQUFELEtBQW9DO0FBQ3hELHNCQUNFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUEsMkJBQ0UsdURBQUMsMkRBQUQ7QUFBb0IsVUFBSSxFQUFFQTtBQUExQjtBQURGLElBREY7QUFLRCxDQU5NOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JQO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFhTyxNQUFNNk0sZ0JBQU4sU0FBK0I3SSxnREFBL0IsQ0FBMkQ7QUFDaEVJLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFlO0FBQ3hCLFVBQU1BLEtBQU47O0FBRHdCLHVDQWlCZCxNQUFNO0FBQ2hCLFdBQUt5SSxVQUFMLENBQWdCLENBQWhCO0FBQ0QsS0FuQnlCOztBQUFBLHdDQXFCSjFYLEtBQUQsSUFBbUI7QUFDdEMsWUFBTTtBQUFFUixRQUFBQTtBQUFGLFVBQWlCLEtBQUtvTyxLQUE1QjtBQUNBLGFBQU8sS0FBSytKLE1BQUwsQ0FBWW5ZLFVBQVUsQ0FBQ1EsS0FBRCxDQUF0QixFQUErQixJQUEvQixFQUFxQ3VQLElBQXJDLENBQTBDLE1BQU07QUFDckQsWUFBSXZQLEtBQUssR0FBRyxDQUFSLEdBQVlSLFVBQVUsQ0FBQ3NHLE1BQTNCLEVBQW1DO0FBQ2pDLGlCQUFPLElBQUlvSixPQUFKLENBQW1CQyxPQUFELElBQWE7QUFDcENlLFlBQUFBLFVBQVUsQ0FBQyxNQUFNO0FBQ2YsbUJBQUt3SCxVQUFMLENBQWdCMVgsS0FBSyxHQUFHLENBQXhCLEVBQTJCdVAsSUFBM0IsQ0FBZ0MsTUFBTTtBQUNwQ0osZ0JBQUFBLE9BQU87QUFDUixlQUZEO0FBR0QsYUFKUyxFQUlQLEdBSk8sQ0FBVjtBQUtELFdBTk0sQ0FBUDtBQU9ELFNBUkQsTUFRTztBQUNMLGlCQUFPRCxPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNEO0FBQ0YsT0FaTSxDQUFQO0FBYUQsS0FwQ3lCOztBQUFBLG9DQXNDakIsQ0FBQ3lJLElBQUQsRUFBd0JDLFNBQXhCLEtBQStDO0FBQ3RELFlBQU07QUFBRXBWLFFBQUFBLE1BQUY7QUFBVTRELFFBQUFBO0FBQVYsVUFBeUIsS0FBSzRJLEtBQXBDO0FBRUEsWUFBTTZJLFVBQWUsR0FBRztBQUN0QjFJLFFBQUFBLFFBQVEsRUFBRTNNLE1BQU0sQ0FBQ3NDLEVBREs7QUFFdEJnVCxRQUFBQSxJQUFJLEVBQUVILElBQUksQ0FBQ0csSUFGVztBQUd0QkYsUUFBQUEsU0FBUyxFQUFFQSxTQUhXO0FBSXRCRyxRQUFBQSxNQUFNLEVBQUU7QUFKYyxPQUF4Qjs7QUFPQSxVQUFJM1IsVUFBSixFQUFnQjtBQUNkeVIsUUFBQUEsVUFBVSxDQUFDRSxNQUFYLENBQWtCNVIsSUFBbEIsQ0FBdUI7QUFDckJULFVBQUFBLElBQUksRUFBRSxHQURlO0FBRXJCOUMsVUFBQUEsSUFBSSxFQUFFLFlBRmU7QUFHckJ1TSxVQUFBQSxRQUFRLEVBQUUvSSxVQUFVLENBQUNqQyxJQUFYLENBQWdCVyxFQUhMO0FBSXJCNE8sVUFBQUEsS0FBSyxFQUFFdE4sVUFBVSxDQUFDVjtBQUpHLFNBQXZCO0FBTUQ7O0FBRUQsYUFBT2hGLCtEQUFhLEdBQ2pCc0YsSUFESSxDQUNFLHdCQURGLEVBQzJCNlIsVUFEM0IsRUFFSnZJLElBRkksQ0FFRUssR0FBRCxJQUEwQjtBQUM5QnNHLFFBQUFBLHlEQUFBLENBQWVGLGlFQUFmLEVBQXVDLENBQUMsb0JBQUQsRUFBdUI0QixJQUFJLENBQUN6WCxLQUE1QixDQUF2QztBQUNBd08sUUFBQUEsOENBQU0sQ0FBQ2lKLElBQUQsRUFBT2hJLEdBQVAsQ0FBTjtBQUNBLGFBQUtPLFFBQUwsQ0FBYztBQUFFM1EsVUFBQUEsVUFBVSxFQUFFLENBQUMsR0FBRyxLQUFLb08sS0FBTCxDQUFXcE8sVUFBZjtBQUFkLFNBQWQ7QUFDRCxPQU5JLENBQVA7QUFPRCxLQWhFeUI7O0FBQUEsb0NBa0VoQm9ZLElBQUQsSUFBMkI7QUFDbENqWCxNQUFBQSwrREFBYSxHQUNWa0csTUFESCxDQUNVLHlCQUF5QitRLElBQUksQ0FBQzlULEdBRHhDLEVBRUd5TCxJQUZILENBRVEsTUFBTTtBQUNWcUksUUFBQUEsSUFBSSxDQUFDM1gsUUFBTCxHQUFnQixLQUFoQjtBQUNBLGFBQUtrUSxRQUFMLENBQWM7QUFBRTNRLFVBQUFBLFVBQVUsRUFBRSxDQUFDLEdBQUcsS0FBS29PLEtBQUwsQ0FBV3BPLFVBQWY7QUFBZCxTQUFkO0FBQ0QsT0FMSDtBQU1ELEtBekV5Qjs7QUFFeEIsU0FBS29PLEtBQUwsR0FBYTtBQUNYcUssTUFBQUEsT0FBTyxFQUFFLElBREU7QUFFWHpZLE1BQUFBLFVBQVUsRUFBRTtBQUZELEtBQWI7QUFJRDs7QUFFc0IsUUFBakJ5USxpQkFBaUIsR0FBRztBQUN4QixVQUFNYixRQUFRLEdBQUcsS0FBS0gsS0FBTCxDQUFXeE0sTUFBWCxDQUFrQnNDLEVBQW5DO0FBQ0FwRSxJQUFBQSwrREFBYSxHQUNWd0MsR0FESCxDQUNRLGdCQUFlaU0sUUFBUyxhQURoQyxFQUVHRyxJQUZILENBRVMvUCxVQUFELElBQXFCO0FBQ3pCLFdBQUsyUSxRQUFMLENBQWM7QUFBRTNRLFFBQUFBLFVBQUY7QUFBY3lZLFFBQUFBLE9BQU8sRUFBRTtBQUF2QixPQUFkO0FBQ0QsS0FKSDtBQUtEOztBQTRERG5ILEVBQUFBLE1BQU0sR0FBRztBQUNQLFVBQU07QUFBRW1ILE1BQUFBLE9BQUY7QUFBV3pZLE1BQUFBO0FBQVgsUUFBMEIsS0FBS29PLEtBQXJDOztBQUNBLFFBQUlxSyxPQUFKLEVBQWE7QUFDWCwwQ0FBTztBQUFBO0FBQUEsUUFBUDtBQUNEOztBQUNELFFBQUksQ0FBQ3pZLFVBQUQsSUFBZSxDQUFDQSxVQUFVLENBQUNzRyxNQUEvQixFQUF1QztBQUNyQyw0Q0FBTztBQUFBO0FBQUEsUUFBUDtBQUNEOztBQUVELHdCQUNFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQSw2QkFDRSx1REFBQyxnRkFBRDtBQUFpQixrQkFBVSxFQUFFdEcsVUFBN0I7QUFBeUMsZ0JBQVEsRUFBRSxLQUFLbVksTUFBeEQ7QUFBZ0UsZ0JBQVEsRUFBRSxLQUFLTztBQUEvRTtBQURGLE1BREY7QUFLRDs7QUExRitEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CbEU7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFRTyxTQUFTSSxpQkFBVCxDQUEyQjtBQUFFN1YsRUFBQUEsTUFBRjtBQUFVOFYsRUFBQUEsV0FBVjtBQUF1QnZXLEVBQUFBO0FBQXZCLENBQTNCLEVBQWdGO0FBQ3JGLFFBQU15USxNQUFNLEdBQUdYLHVEQUFVLENBQUNZLFNBQUQsQ0FBekI7QUFDQSxRQUFNO0FBQUVpQixJQUFBQSxLQUFLLEVBQUVDO0FBQVQsTUFBMEJILHVFQUFlLENBQUNoUixNQUFELENBQS9DOztBQUVBLE1BQUlULE1BQU0sS0FBS3FXLHlEQUFmLEVBQXNDO0FBQUE7O0FBQ3BDLHdCQUNFO0FBQ0UsZUFBUyxFQUFFRixnREFBRSxDQUFDMUYsTUFBTSxDQUFDZ0csTUFBUixFQUFnQmhHLE1BQU0sQ0FBQ2lHLFNBQXZCLENBRGY7QUFFRSw2QkFBdUIsRUFBRTtBQUN2QkMsUUFBQUEsTUFBTSw4Q0FBRWxXLE1BQU0sQ0FBQ2lCLE9BQVQsb0RBQUUsZ0JBQWdCK1UsTUFBbEIseUVBQTRCO0FBRFg7QUFGM0IsTUFERjtBQVFEOztBQUVELE1BQUl6VyxNQUFNLEtBQUtxVyx5REFBZixFQUFzQztBQUFBOztBQUNwQyx3QkFDRTtBQUFLLGVBQVMsRUFBRTVGLE1BQU0sQ0FBQ2lHLFNBQXZCO0FBQUEsNkJBQ0UsdURBQUMsZ0VBQUQ7QUFBYSxnQkFBUSxzQkFBRWpXLE1BQU0sQ0FBQ2lCLE9BQVQscURBQUUsaUJBQWdCbVYsUUFBdkM7QUFBaUQsd0JBQWdCLEVBQUVwVyxNQUFNLENBQUNxVztBQUExRTtBQURGLE1BREY7QUFLRDs7QUFFRCxNQUFJOVcsTUFBTSxLQUFLcVcsdURBQVgsSUFBa0N6RSxZQUFsQyxhQUFrQ0EsWUFBbEMsZUFBa0NBLFlBQVksQ0FBRW9GLGlCQUFwRCxFQUF1RTtBQUNyRSx3QkFDRTtBQUFLLGVBQVMsRUFBRXZHLE1BQU0sQ0FBQ2lHLFNBQXZCO0FBQUEsNkJBQ0UsdURBQUMsbUVBQUQ7QUFBc0IsV0FBRyxFQUFFOUU7QUFBM0I7QUFERixNQURGO0FBS0Q7O0FBRUQsTUFBSUEsWUFBSixhQUFJQSxZQUFKLGVBQUlBLFlBQVksQ0FBRTNJLFdBQWxCLEVBQStCO0FBQzdCLFNBQUssTUFBTWdPLFVBQVgsSUFBeUJyRixZQUFZLENBQUMzSSxXQUF0QyxFQUFtRDtBQUFBOztBQUNqRCxVQUFJakosTUFBTSxLQUFLaVgsVUFBVSxDQUFDbFUsRUFBMUIsRUFBOEI7QUFDNUIsNEJBQ0U7QUFBSyxtQkFBUyxFQUFFME4sTUFBTSxDQUFDaUcsU0FBdkI7QUFBQSx5RUFDRSx1REFBQyxVQUFELENBQVksSUFBWjtBQUFpQixrQkFBTSxFQUFFOUUsWUFBekI7QUFBdUMsaUJBQUssRUFBRTJFO0FBQTlDLFlBREY7QUFBQSxVQURGO0FBS0Q7QUFDRjtBQUNGOztBQUVELE1BQUl2VyxNQUFNLEtBQUtxVywyREFBWCxJQUFzQ3pFLFlBQTFDLEVBQXdEO0FBQ3RELHdCQUNFO0FBQUssZUFBUyxFQUFFbkIsTUFBTSxDQUFDaUcsU0FBdkI7QUFBQSw2QkFDRSx1REFBQywrREFBRDtBQUFrQixjQUFNLEVBQUU5RSxZQUFGLGFBQUVBLFlBQUYsdUJBQUVBLFlBQVksQ0FBRXhQO0FBQXhDO0FBREYsTUFERjtBQUtEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFFcU8sTUFBTSxDQUFDaUcsU0FBdkI7QUFBQSx1Q0FDRTtBQUFBO0FBQUEsTUFERjtBQUFBLElBREY7QUFLRDtBQUVNLE1BQU1oRyxTQUFTLEdBQUlJLEtBQUQsS0FBMkI7QUFDbEQ0RixFQUFBQSxTQUFTLEVBQUVqSyw2Q0FBSTtBQUNqQixlQUFlcUUsS0FBSyxDQUFDcUcsT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FBb0I7QUFDbkMsR0FIb0Q7QUFJbERWLEVBQUFBLE1BQU0sRUFBRWhLLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0JxRSxLQUFLLENBQUNxRyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNyQyx1QkFBdUJyRyxLQUFLLENBQUNxRyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQnJHLEtBQUssQ0FBQ3FHLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3RDO0FBQ0Esa0JBQWtCckcsS0FBSyxDQUFDcUcsT0FBTixFQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWVyRyxLQUFLLENBQUNDLE1BQU4sQ0FBYW5JLElBQWIsQ0FBa0J2QyxJQUFLO0FBQ3RDO0FBQ0E7QUFDQSxpQkFBaUJ5SyxLQUFLLENBQUNDLE1BQU4sQ0FBYW5JLElBQWIsQ0FBa0J2QyxJQUFLO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBbkNvRCxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VQO0FBRUE7QUFDQTtBQUNBOzs7QUFTTyxTQUFTaVIsMEJBQVQsQ0FBb0M7QUFBRUMsRUFBQUEsU0FBRjtBQUFhOVcsRUFBQUE7QUFBYixDQUFwQyxFQUF1RjtBQUM1RixNQUFJLENBQUNBLE1BQU0sQ0FBQzZSLFVBQVosRUFBd0I7QUFDdEIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsc0JBQ0Usd0RBQUMsOENBQUQ7QUFDRSxZQUFRLEVBQUMsT0FEWDtBQUVFLFNBQUssRUFBQyxpQkFGUjtBQUdFLGFBQVMsRUFBRWlGLFNBSGI7QUFJRSxrQkFBWUgsMkZBSmQ7QUFBQSxlQU1HTywwQkFBMEIsQ0FBQ2xYLE1BQU0sQ0FBQzZPLEtBQVIsQ0FON0IsMkJBT0U7QUFBQTtBQUFBLE1BUEYsNEJBUUU7QUFDRSxVQUFJLEVBQUMsOEVBRFA7QUFFRSxlQUFTLEVBQUMsZUFGWjtBQUdFLFlBQU0sRUFBQyxRQUhUO0FBSUUsU0FBRyxFQUFDLFlBSk47QUFBQTtBQUFBLE1BUkY7QUFBQSxJQURGO0FBbUJEOztBQUVELFNBQVNxSSwwQkFBVCxDQUFvQ3JJLEtBQXBDLEVBQTJFO0FBQ3pFLFVBQVFBLEtBQVI7QUFDRSxTQUFLSCw0RUFBTDtBQUNFLHdDQUNFO0FBQUE7QUFBQSxRQURGOztBQVFGLFNBQUtBLDJFQUFMO0FBQ0Usd0NBQ0U7QUFBQTtBQUFBLFFBREY7O0FBUUYsU0FBS0EsMkVBQUw7QUFDRSx3Q0FDRTtBQUFBO0FBQUEsUUFERjs7QUFRRjtBQUNFLHdDQUNFO0FBQUE7QUFBQSxRQURGO0FBN0JKO0FBb0NEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVEO0FBQ0E7QUFHQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFRTyxTQUFTNkksbUJBQVQsQ0FBNkI7QUFBRXZYLEVBQUFBLE1BQUY7QUFBVXdYLEVBQUFBLFVBQVY7QUFBc0JDLEVBQUFBO0FBQXRCLENBQTdCLEVBQTJGO0FBQUE7O0FBQ2hHLFFBQU16SCxNQUFNLEdBQUdYLHVEQUFVLENBQUNZLFNBQUQsQ0FBekI7QUFDQSxRQUFNMEMsdUJBQXVCLEdBQUd3RSxvRUFBMEIsb0JBQUNuWCxNQUFNLENBQUNpQixPQUFSLG9EQUFDLGdCQUFnQm1WLFFBQWpCLENBQTFEO0FBQ0EsUUFBTTVPLE9BQU8sR0FBR3hILE1BQU0sQ0FBQ3FXLGdCQUFQLEtBQTJCMUQsdUJBQTNCLGFBQTJCQSx1QkFBM0IsdUJBQTJCQSx1QkFBdUIsQ0FBRW5MLE9BQXBELENBQWhCO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRXdJLE1BQU0sQ0FBQzBILGVBQXZCO0FBQUEsZ0NBQ0Usd0RBQUMsbURBQUQ7QUFDRSxhQUFHLEVBQUcsR0FBRTFYLE1BQU0sQ0FBQ2tELElBQUssT0FEdEI7QUFFRSxhQUFHLEVBQUVsRCxNQUFNLENBQUMwRixJQUFQLENBQVl3QixLQUFaLENBQWtCQyxLQUZ6QjtBQUdFLG1CQUFTLEVBQUU2RSw2Q0FBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUlUsVUFERixlQVlFO0FBQUssbUJBQVMsRUFBRWdFLE1BQU0sQ0FBQzJILGFBQXZCO0FBQUEsa0NBRUU7QUFBSyxxQkFBUyxFQUFFM0gsTUFBTSxDQUFDNEgsVUFBdkI7QUFBbUMsMEJBQVcsWUFBOUM7QUFBQSxtQ0FDRTtBQUFBLHNDQUNFO0FBQUEsdUNBQ0U7QUFBRywyQkFBUyxFQUFFNUgsTUFBTSxDQUFDNkgsYUFBckI7QUFBb0Msc0JBQUksRUFBRUosU0FBMUM7QUFBQTtBQUFBO0FBREYsZ0JBREYsZUFNRTtBQUFBLHVDQUNFO0FBQUcsc0JBQUksRUFBRUQsVUFBVDtBQUFxQixrQ0FBYSxNQUFsQztBQUFBLDRCQUNHeFgsTUFBTSxDQUFDa0Q7QUFEVjtBQURGLGdCQU5GO0FBQUE7QUFERixZQUZGLGVBaUJFO0FBQUsscUJBQVMsRUFBRThNLE1BQU0sQ0FBQzhILG9CQUF2QjtBQUFBLG9DQUVFO0FBQUEsd0JBQU85WCxNQUFNLENBQUMrWDtBQUFkLGNBRkYsc0JBS0cvWCxNQUFNLENBQUNpQixPQUxWLHFEQUtHLGlCQUFnQjBFLEtBQWhCLENBQXNCckksR0FBdEIsQ0FBMkJzSSxJQUFELGlCQUN6QjtBQUFtQixrQkFBSSxFQUFFQSxJQUFJLENBQUM1RCxHQUE5QjtBQUFBLHdCQUNHNEQsSUFBSSxDQUFDMUM7QUFEUixlQUFRMEMsSUFBSSxDQUFDMUMsSUFBYixDQURELENBTEgsRUFZR2xELE1BQU0sQ0FBQ2dZLFNBQVAsR0FBbUIsQ0FBbkIsaUJBQ0M7QUFBQSx3REFDRSx3REFBQyw2Q0FBRDtBQUFNLG9CQUFJLEVBQUM7QUFBWCxnQkFERixHQUVJLElBQUcsSUFBSUMsSUFBSSxDQUFDQyxZQUFULEdBQXdCQyxNQUF4QixDQUErQm5ZLE1BQU0sQ0FBQ2dZLFNBQXRDLENBQWlELEVBRnhELEVBRTJELEdBRjNEO0FBQUEsY0FiSixFQW9CR2hGLE9BQU8sQ0FBQ3hMLE9BQUQsQ0FBUCxpQkFBb0I7QUFBQSx3QkFBT0E7QUFBUCxjQXBCdkIsZUF1QkUsd0RBQUMsdUZBQUQ7QUFBOEIsb0JBQU0sRUFBRXhIO0FBQXRDLGNBdkJGLEVBeUJHQSxNQUFNLENBQUM2UixVQUFQLGlCQUFxQix3REFBQyx3REFBRDtBQUFxQixtQkFBSyxFQUFFN1IsTUFBTSxDQUFDNk87QUFBbkMsY0F6QnhCO0FBQUEsWUFqQkYsZUE2Q0Usd0RBQUMsNkZBQUQ7QUFDRSxrQkFBTSxFQUFFN08sTUFEVjtBQUVFLG1DQUF1QixFQUFFMlMsdUJBRjNCO0FBR0UscUJBQVMsRUFBRStDLGdEQUFFLENBQUMxRixNQUFNLENBQUM4SCxvQkFBUixFQUE4QjlILE1BQU0sQ0FBQ29JLDZCQUFyQztBQUhmLFlBN0NGLGVBbURFO0FBQUEsc0JBQUlwWSxNQUFNLENBQUM4RztBQUFYLFlBbkRGLGVBcURFLHlEQUFDLHdEQUFEO0FBQWlCLGtCQUFNLEVBQUMsTUFBeEI7QUFBQSxvQ0FDRSx3REFBQyw2REFBRDtBQUFpQixvQkFBTSxFQUFFOUcsTUFBekI7QUFBaUMscUNBQXVCLEVBQUUyUztBQUExRCxjQURGLGVBRUUsd0RBQUMsdUVBQUQ7QUFBc0Isb0JBQU0sRUFBRTNTO0FBQTlCLGNBRkY7QUFBQSxZQXJERjtBQUFBLFVBWkY7QUFBQTtBQURGO0FBREYsSUFERjtBQTZFRDtBQUVNLE1BQU1pUSxTQUFTLEdBQUlJLEtBQUQsSUFBMEI7QUFDakQsU0FBTztBQUNMcUgsSUFBQUEsZUFBZSxFQUFFMUwsNkNBQUk7QUFDekI7QUFDQSx1QkFBdUJxRSxLQUFLLENBQUNxRyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUN4QyxvQkFBb0JyRyxLQUFLLENBQUNxRyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNyQztBQUNBLEtBTlM7QUFPTGlCLElBQUFBLGFBQWEsRUFBRTNMLDZDQUFJO0FBQ3ZCLHFCQUFxQnFFLEtBQUssQ0FBQ3FHLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBQ3RDLEtBVFM7QUFVTGtCLElBQUFBLFVBQVUsRUFBRTVMLDZDQUFJO0FBQ3BCLG1CQUFtQnFFLEtBQUssQ0FBQ0csVUFBTixDQUFpQjZILEVBQWpCLENBQW9CM0gsUUFBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F2QlM7QUF3QkxvSCxJQUFBQSxvQkFBb0IsRUFBRTlMLDZDQUFJO0FBQzlCO0FBQ0E7QUFDQSxvQkFBb0JxRSxLQUFLLENBQUNxRyxPQUFOLEVBQWdCO0FBQ3BDLHVCQUF1QnJHLEtBQUssQ0FBQ3FHLE9BQU4sRUFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUJyRyxLQUFLLENBQUNxRyxPQUFOLEVBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQnJHLEtBQUssQ0FBQ0csVUFBTixDQUFpQjhILEVBQWpCLENBQW9CNUgsUUFBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQS9DUztBQWdETDBILElBQUFBLDZCQUE2QixFQUFFcE0sNkNBQUk7QUFDdkMsbUJBQW1CcUUsS0FBSyxDQUFDRyxVQUFOLENBQWlCK0gsSUFBakIsQ0FBc0I3SCxRQUFTO0FBQ2xELEtBbERTO0FBbURMOEgsSUFBQUEsYUFBYSxFQUFFeE0sNkNBQUk7QUFDdkIsbUJBQW1CcUUsS0FBSyxDQUFDRyxVQUFOLENBQWlCOEgsRUFBakIsQ0FBb0I1SCxRQUFTO0FBQ2hELEtBckRTO0FBc0RMYixJQUFBQSxTQUFTLEVBQUU3RCw2Q0FBSTtBQUNuQixnQkFBZ0JxRSxLQUFLLENBQUNxRyxPQUFOLENBQWMsQ0FBZCxDQUFpQjtBQUNqQztBQUNBLEtBekRTO0FBMERMbUIsSUFBQUEsYUFBYSxFQUFFN0wsNkNBQUk7QUFDdkI7QUFDQTtBQTVEUyxHQUFQO0FBOERELENBL0RNOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFHUDtBQUNBO0FBR0E7QUFFQTs7O0FBUU8sU0FBU29MLCtCQUFULENBQXlDO0FBQzlDcFgsRUFBQUEsTUFEOEM7QUFFOUMyUyxFQUFBQSx1QkFGOEM7QUFHOUNtRSxFQUFBQTtBQUg4QyxDQUF6QyxFQUk4QjtBQUFBOztBQUNuQyxRQUFNOUcsTUFBTSxHQUFHWCx1REFBVSxDQUFDWSxTQUFELENBQXpCO0FBQ0EsUUFBTXlJLGtCQUFrQixzQkFBRzFZLE1BQU0sQ0FBQ2lCLE9BQVYsb0RBQUcsZ0JBQWdCeVgsa0JBQTNDO0FBQ0EsUUFBTUMsaUJBQWlCLEdBQUczWSxNQUFNLENBQUM0UixXQUFQLHVCQUN0QjVSLE1BQU0sQ0FBQ2lCLE9BRGUscURBQ3RCLGlCQUFnQjBYLGlCQURNLEdBRXRCLENBQUFoRyx1QkFBdUIsU0FBdkIsSUFBQUEsdUJBQXVCLFdBQXZCLFlBQUFBLHVCQUF1QixDQUFFZ0csaUJBQXpCLDBCQUE4QzNZLE1BQU0sQ0FBQ2lCLE9BQXJELHFEQUE4QyxpQkFBZ0IwWCxpQkFBOUQsQ0FGSjtBQUdBLFFBQU1DLG1CQUFtQixHQUFHLENBQUNELGlCQUFELEtBQXVCLENBQUNELGtCQUFELElBQXVCLENBQUNBLGtCQUFrQixDQUFDclYsTUFBbEUsQ0FBNUI7O0FBRUEsTUFBSXVWLG1CQUFKLEVBQXlCO0FBQ3ZCLFdBQU8sSUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFFOUIsU0FBaEI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRTlHLE1BQU0sQ0FBQzZJLGVBQXZCO0FBQUE7QUFBQSxNQURGLEVBSUc3RixPQUFPLENBQUMyRixpQkFBRCxDQUFQLGlCQUNDO0FBQUEsOEJBQ0UsdURBQUMsNkNBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFxQixpQkFBUyxFQUFFM0ksTUFBTSxDQUFDekg7QUFBdkMsUUFERixjQUVXb1EsaUJBRlg7QUFBQSxNQUxKLEVBWUdELGtCQUFrQixJQUFJQSxrQkFBa0IsQ0FBQ3JWLE1BQW5CLEdBQTRCLENBQWxELGlCQUNDO0FBQUEsZ0JBQ0dxVixrQkFBa0IsQ0FBQ3BiLEdBQW5CLENBQXdCd2IsQ0FBRCxJQUFPO0FBQzdCLDRCQUNFO0FBQUEsa0NBQ0UsdURBQUMsNkNBQUQ7QUFBTSxnQkFBSSxFQUFFTCxrREFBYyxDQUFDSyxDQUFDLENBQUMxWSxJQUFILENBQTFCO0FBQW9DLHFCQUFTLEVBQUU0UCxNQUFNLENBQUN6SDtBQUF0RCxZQURGLEVBRUd1USxDQUFDLENBQUM1VixJQUZMLE9BRVk0VixDQUFDLENBQUN0UixPQUZkO0FBQUEsV0FBV3NSLENBQUMsQ0FBQzVWLElBQWIsQ0FERjtBQU1ELE9BUEE7QUFESCxNQWJKO0FBQUEsSUFERjtBQTJCRDtBQUVNLE1BQU0rTSxTQUFTLEdBQUlJLEtBQUQsSUFBMEI7QUFDakQsU0FBTztBQUNMd0ksSUFBQUEsZUFBZSxFQUFFN00sNkNBQUk7QUFDekIscUJBQXFCcUUsS0FBSyxDQUFDRyxVQUFOLENBQWlCdUksY0FBZTtBQUNyRCxzQkFBc0IxSSxLQUFLLENBQUNxRyxPQUFOLENBQWMsR0FBZCxDQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FUUztBQVVMbk8sSUFBQUEsSUFBSSxFQUFFeUQsNkNBQUk7QUFDZCxlQUFlcUUsS0FBSyxDQUFDQyxNQUFOLENBQWFuSSxJQUFiLENBQWtCb0ksU0FBVTtBQUMzQyxzQkFBc0JGLEtBQUssQ0FBQ3FHLE9BQU4sQ0FBYyxHQUFkLENBQW1CO0FBQ3pDO0FBYlMsR0FBUDtBQWVELENBaEJNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRFA7QUFDQTtBQUVBO0FBQ0E7QUFJQTs7O0FBTUE7QUFDTyxTQUFTVyw0QkFBVCxDQUFzQztBQUFFclgsRUFBQUE7QUFBRixDQUF0QyxFQUE2RTtBQUNsRixRQUFNZ1EsTUFBTSxHQUFHWCx1REFBVSxDQUFDWSxTQUFELENBQXpCO0FBQ0EsUUFBTWlKLGdCQUFnQixHQUFHbFosTUFBTSxDQUFDNlAsU0FBUCxLQUFxQm1KLHNFQUE5QztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFaEosTUFBTSxDQUFDaUcsU0FBdkI7QUFBQSw0QkFDRTtBQUNFLFVBQUksRUFBQyxvRUFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBR0UsU0FBRyxFQUFDLFlBSE47QUFJRSxlQUFTLEVBQUVqRyxNQUFNLENBQUNwSyxJQUpwQjtBQUFBLDZCQU1FLHVEQUFDLDZEQUFEO0FBQXNCLGNBQU0sRUFBRTVGLE1BQU0sQ0FBQzZQO0FBQXJDO0FBTkYsTUFERixFQVVHcUosZ0JBQWdCLGlCQUNmLHVEQUFDLHFGQUFEO0FBQTZCLG1CQUFhLEVBQUVsWixNQUFNLENBQUNvWixhQUFuRDtBQUFrRSxrQkFBWSxFQUFFcFosTUFBTSxDQUFDcVo7QUFBdkYsTUFYSjtBQUFBLElBREY7QUFnQkQ7QUFFTSxNQUFNcEosU0FBUyxHQUFJSSxLQUFELElBQTBCO0FBQ2pELFNBQU87QUFDTDRGLElBQUFBLFNBQVMsRUFBRWpLLDZDQUFJO0FBQ25CO0FBQ0EsS0FIUztBQUlMcEcsSUFBQUEsSUFBSSxFQUFFb0csNkNBQUk7QUFDZDtBQUNBO0FBQ0E7QUFQUyxHQUFQO0FBU0QsQ0FWTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNQO0FBRUE7QUFDQTtBQUNBOzs7QUFTQTtBQUNPLFNBQVNzTixzQkFBVCxDQUFnQztBQUFFeEMsRUFBQUEsU0FBRjtBQUFhOVcsRUFBQUE7QUFBYixDQUFoQyxFQUF5RjtBQUM5RixRQUFNa1osZ0JBQWdCLEdBQUdsWixNQUFNLENBQUM2UCxTQUFQLEtBQXFCbUosc0VBQTlDO0FBQ0EsUUFBTTdJLE1BQU0sR0FBR25RLE1BQU0sQ0FBQzZQLFNBQVAsS0FBcUJtSix5RUFBcEM7QUFDQSxRQUFNbkgsVUFBVSxHQUFHN1IsTUFBTSxDQUFDNlIsVUFBUCxJQUFxQjJILDhCQUE4QixDQUFDeFosTUFBTSxDQUFDNk8sS0FBUixDQUF0RSxDQUg4RixDQUs5Rjs7QUFDQSxNQUFJcUssZ0JBQWdCLElBQUkvSSxNQUFwQixJQUE4QjBCLFVBQWxDLEVBQThDO0FBQzVDLFdBQU8sSUFBUDtBQUNEOztBQUVELHNCQUNFLHdEQUFDLDhDQUFEO0FBQ0UsWUFBUSxFQUFDLFNBRFg7QUFFRSxTQUFLLEVBQUMsMEJBRlI7QUFHRSxrQkFBWThFLDRGQUhkO0FBSUUsYUFBUyxFQUFFRyxTQUpiO0FBQUEsd0NBTUU7QUFBQTtBQUFBLE1BTkYsNEJBWUU7QUFDRSxVQUFJLEVBQUMsb0VBRFA7QUFFRSxlQUFTLEVBQUMsZUFGWjtBQUdFLFlBQU0sRUFBQyxRQUhUO0FBSUUsU0FBRyxFQUFDLFlBSk47QUFBQTtBQUFBLE1BWkY7QUFBQSxJQURGO0FBdUJEOztBQUVELFNBQVMwQyw4QkFBVCxDQUF3QzNLLEtBQXhDLEVBQTRFO0FBQzFFO0FBQ0E7QUFFQSxVQUFRQSxLQUFSO0FBQ0UsU0FBS0gsMkVBQUw7QUFDQSxTQUFLQSwyRUFBTDtBQUNBLFNBQUtBLDRFQUFMO0FBQ0UsYUFBTyxJQUFQOztBQUVGO0FBQ0UsYUFBTyxLQUFQO0FBUEo7QUFTRDs7Ozs7Ozs7Ozs7OztBQzlERDs7QUFTTyxTQUFTNEksVUFBVCxDQUFvQjtBQUFFb0MsRUFBQUEsR0FBRjtBQUFPNUMsRUFBQUEsU0FBUDtBQUFrQjZDLEVBQUFBLEdBQWxCO0FBQXVCQyxFQUFBQTtBQUF2QixDQUFwQixFQUEwRjtBQUMvRjtBQUNBLHNCQUFPO0FBQUssT0FBRyxFQUFFRCxHQUFWO0FBQWUsYUFBUyxFQUFFN0MsU0FBMUI7QUFBcUMsT0FBRyxFQUFFNEMsR0FBMUM7QUFBK0MsV0FBTyxFQUFDLE1BQXZEO0FBQThELFVBQU0sRUFBRUU7QUFBdEUsSUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUVBLE1BQU1HLGVBQXlDLEdBQUc7QUFDaEQsR0FBQ0Qsc0VBQUQsR0FBK0IsU0FEaUI7QUFFaEQsR0FBQ0EseUVBQUQsR0FBa0MsUUFGYztBQUdoRCxHQUFDQSx3RUFBRCxHQUFpQyxRQUhlO0FBSWhESyxFQUFBQSxPQUFPLEVBQUU7QUFKdUMsQ0FBbEQ7QUFZQTtBQUNPLFNBQVNsQiwyQkFBVCxDQUFxQztBQUFFRyxFQUFBQSxhQUFGO0FBQWlCQyxFQUFBQSxZQUFZLEdBQUc7QUFBaEMsQ0FBckMsRUFBNkc7QUFDbEgsUUFBTXJKLE1BQU0sR0FBR1gsdURBQVUsQ0FBQ1ksU0FBRCxDQUF6Qjs7QUFFQSxNQUFJLENBQUNtSixhQUFELElBQWtCLENBQUNDLFlBQXZCLEVBQXFDO0FBQ25DLFdBQU8sSUFBUDtBQUNEOztBQUVELFFBQU1lLGlCQUFpQixHQUFHaEIsYUFBYSxLQUFLVSxzRUFBbEIsR0FBZ0QsY0FBaEQsR0FBaUVELGtEQUFVLENBQUNULGFBQUQsQ0FBckc7QUFDQSxRQUFNaUIsYUFBYSxHQUFHTixlQUFlLENBQUNYLGFBQWEsSUFBSSxFQUFsQixDQUFmLElBQXdDVyxlQUFlLENBQUNJLE9BQTlFO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSx3REFBQyxZQUFEO0FBQUEsOEJBQ0U7QUFBUSxpQkFBUyxFQUFFbkssTUFBTSxDQUFDYyxNQUExQjtBQUFBO0FBQUEsUUFERixlQUVFLHVEQUFDLDZDQUFEO0FBQU0sWUFBSSxFQUFDLElBQVg7QUFBZ0IsWUFBSSxFQUFFdUo7QUFBdEIsUUFGRixVQUlHRCxpQkFKSDtBQUFBLE1BREYsZUFRRSx3REFBQyxZQUFEO0FBQUEsOEJBQ0U7QUFBUSxpQkFBUyxFQUFFcEssTUFBTSxDQUFDYyxNQUExQjtBQUFBO0FBQUEsUUFERixPQUN5RHVJLFlBRHpEO0FBQUEsTUFSRjtBQUFBLElBREY7QUFjRDtBQUVNLE1BQU1pQixZQUFzQixHQUFHLENBQUM7QUFBRWpTLEVBQUFBO0FBQUYsQ0FBRCxLQUFrQjtBQUN0RCxRQUFNMkgsTUFBTSxHQUFHWCx1REFBVSxDQUFDWSxTQUFELENBQXpCO0FBRUEsc0JBQU8sdURBQUMsOENBQUQ7QUFBTyxTQUFLLEVBQUMsT0FBYjtBQUFxQixhQUFTLEVBQUVELE1BQU0sQ0FBQ3VLLEtBQXZDO0FBQThDLFFBQUksZUFBRTtBQUFBLGdCQUFHbFM7QUFBSDtBQUFwRCxJQUFQO0FBQ0QsQ0FKTTs7QUFNUCxNQUFNNEgsU0FBUyxHQUFJSSxLQUFELEtBQTJCO0FBQzNDa0ssRUFBQUEsS0FBSyxFQUFFdk8sNkNBQUk7QUFDYix3QkFBd0JxRSxLQUFLLENBQUNDLE1BQU4sQ0FBYUssVUFBYixDQUF3QjZKLE1BQU87QUFDdkQsb0JBQW9CbkssS0FBSyxDQUFDQyxNQUFOLENBQWFPLE1BQWIsQ0FBb0JDLE1BQU87QUFDL0MsYUFBYVQsS0FBSyxDQUFDQyxNQUFOLENBQWFuSSxJQUFiLENBQWtCb0ksU0FBVTtBQUN6QyxtQkFBbUJGLEtBQUssQ0FBQ3FHLE9BQU4sRUFBZ0I7QUFDbkMsR0FONkM7QUFPM0M1RixFQUFBQSxNQUFNLEVBQUU5RSw2Q0FBSTtBQUNkLGFBQWFxRSxLQUFLLENBQUNDLE1BQU4sQ0FBYW5JLElBQWIsQ0FBa0J5SSxPQUFRO0FBQ3ZDLEdBVDZDO0FBVTNDckksRUFBQUEsSUFBSSxFQUFFeUQsNkNBQUk7QUFDWixvQkFBb0JxRSxLQUFLLENBQUNxRyxPQUFOLENBQWMsR0FBZCxDQUFtQjtBQUN2QztBQVo2QyxDQUEzQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFRTyxNQUFNZixXQUFXLEdBQUcsQ0FBQztBQUFFUyxFQUFBQSxRQUFRLEdBQUcsRUFBYjtBQUFpQkMsRUFBQUE7QUFBakIsQ0FBRCxLQUFnRDtBQUN6RSxRQUFNckcsTUFBTSxHQUFHWCx1REFBVSxDQUFDWSxTQUFELENBQXpCO0FBQ0EsUUFBTTBDLHVCQUF1QixHQUFHd0Usb0VBQTBCLENBQUNmLFFBQUQsQ0FBMUQ7O0FBRUEsTUFBSUEsUUFBUSxDQUFDL1MsTUFBVCxLQUFvQixDQUF4QixFQUEyQjtBQUN6QixvQ0FBTztBQUFBO0FBQUEsTUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQU8sYUFBUyxFQUFFMk0sTUFBTSxDQUFDMEssS0FBekI7QUFBQSxnREFDRTtBQUFBLDZCQUNFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBLFVBREYsZUFFRTtBQUFBO0FBQUEsVUFGRjtBQUFBO0FBREYsTUFERixnQkFPRTtBQUFBLGdCQUNHdEUsUUFBUSxDQUFDOVksR0FBVCxDQUFja0ssT0FBRCxJQUFhO0FBQ3pCLGNBQU1tVCxrQkFBa0IsR0FBR3RFLGdCQUFnQixLQUFLN08sT0FBTyxDQUFDQSxPQUF4RDtBQUNBLDRCQUNFO0FBQUEscUJBRUdtVCxrQkFBa0IsZ0JBQ2pCO0FBQUkscUJBQVMsRUFBRTNLLE1BQU0sQ0FBQzRLLGNBQXRCO0FBQUEsdUJBQXVDcFQsT0FBTyxDQUFDQSxPQUEvQztBQUFBLFlBRGlCLEdBRWZBLE9BQU8sQ0FBQ0EsT0FBUixNQUFvQm1MLHVCQUFwQixhQUFvQkEsdUJBQXBCLHVCQUFvQkEsdUJBQXVCLENBQUVuTCxPQUE3QyxpQkFDRjtBQUFBLHVCQUFLQSxPQUFPLENBQUNBLE9BQWI7QUFBQSxZQURFLGdCQUdGO0FBQUEsc0JBQUtBLE9BQU8sQ0FBQ0E7QUFBYixZQVBKLGVBV0U7QUFBSSxxQkFBUyxFQUFFbVQsa0JBQWtCLEdBQUczSyxNQUFNLENBQUM0SyxjQUFWLEdBQTJCLEVBQTVEO0FBQUEsc0JBQ0dILG9FQUFxQixDQUFDalQsT0FBTyxDQUFDcVQsU0FBVDtBQUR4QixZQVhGO0FBQUEsV0FBU3JULE9BQU8sQ0FBQ0EsT0FBakIsQ0FERjtBQWlCRCxPQW5CQTtBQURILE1BUEY7QUFBQSxJQURGO0FBZ0NELENBeENNOztBQTBDUCxNQUFNeUksU0FBUyxHQUFJSSxLQUFELEtBQTJCO0FBQzNDNEYsRUFBQUEsU0FBUyxFQUFFakssNkNBQUk7QUFDakIsZUFBZXFFLEtBQUssQ0FBQ3FHLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQXVCO0FBQ3RDLEdBSDZDO0FBSTNDZ0UsRUFBQUEsS0FBSyxFQUFFMU8sNkNBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQnFFLEtBQUssQ0FBQ3FHLE9BQU4sRUFBZ0I7QUFDakM7QUFDQTtBQUNBLG1CQUFtQnJHLEtBQUssQ0FBQ0csVUFBTixDQUFpQnNLLEVBQWpCLENBQW9CcEssUUFBUztBQUNoRDtBQUNBLEdBZDZDO0FBZTNDa0ssRUFBQUEsY0FBYyxFQUFFNU8sNkNBQUk7QUFDdEIsbUJBQW1CcUUsS0FBSyxDQUFDRyxVQUFOLENBQWlCdUksY0FBZTtBQUNuRDtBQWpCNkMsQ0FBM0IsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFFQTtBQUdPLE1BQU0vSCxlQUFlLEdBQUloUixNQUFELElBQTRCO0FBQ3pELFNBQU8rYSxxREFBUSxDQUFDLFlBQVk7QUFDMUIsUUFBSSxDQUFDL2EsTUFBTCxFQUFhO0FBQ1gsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsUUFBSUEsTUFBTSxDQUFDNFIsV0FBUCxJQUFzQixDQUFDNVIsTUFBTSxDQUFDNlIsVUFBbEMsRUFBOEM7QUFDNUMsYUFBT21KLGtEQUFVLENBQUNoYixNQUFNLENBQUNzQyxFQUFSLENBQWpCO0FBQ0Q7O0FBQ0QsV0FBTyxJQUFQO0FBQ0QsR0FUYyxFQVNaLENBQUN0QyxNQUFELGFBQUNBLE1BQUQsdUJBQUNBLE1BQU0sQ0FBRXNDLEVBQVQsRUFBYXRDLE1BQWIsYUFBYUEsTUFBYix1QkFBYUEsTUFBTSxDQUFFNFIsV0FBckIsRUFBa0M1UixNQUFsQyxhQUFrQ0EsTUFBbEMsdUJBQWtDQSxNQUFNLENBQUU2UixVQUExQyxDQVRZLENBQWY7QUFVRCxDQVhNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQVNPLE1BQU15SixvQkFBb0IsR0FBRyxDQUFDdGIsTUFBRCxFQUF5QnViLFdBQStCLEdBQUcsRUFBM0QsS0FBOEU7QUFDaEgsUUFBTTtBQUFFL0YsSUFBQUEsT0FBRjtBQUFXM0csSUFBQUEsS0FBWDtBQUFrQnFDLElBQUFBLEtBQUssRUFBRUM7QUFBekIsTUFBMENILHVFQUFlLENBQUNoUixNQUFELENBQS9EO0FBQ0EsUUFBTXFULFdBQVcsR0FBR0wsT0FBTyxDQUFDaFQsTUFBRCxhQUFDQSxNQUFELHVCQUFDQSxNQUFNLENBQUVxVCxXQUFULENBQTNCO0FBQ0EsUUFBTTtBQUFFbUksSUFBQUE7QUFBRixNQUFlTiw2REFBVyxFQUFoQztBQUVBLFFBQU0sQ0FBQ08sSUFBRCxFQUFPQyxVQUFQLElBQXFCVCw4Q0FBTyxDQUFDLE1BQU07QUFDdkMsVUFBTVUsbUJBQW1CLEdBQUdQLHdEQUFVLEVBQXRDO0FBQ0EsVUFBTUssSUFBd0IsR0FBRyxDQUFDLEdBQUdGLFdBQUosQ0FBakM7QUFDQSxRQUFJRyxVQUFKOztBQUVBLFFBQUlySSxXQUFKLEVBQWlCO0FBQ2ZvSSxNQUFBQSxJQUFJLENBQUM5WCxJQUFMLENBQVU7QUFDUmlZLFFBQUFBLEtBQUssRUFBRVAsNERBREM7QUFFUjlTLFFBQUFBLElBQUksRUFBRSxTQUZFO0FBR1JqRyxRQUFBQSxFQUFFLEVBQUVzVCx5REFISTtBQUlSL1MsUUFBQUEsSUFBSSxFQUFHLEdBQUUyWSxRQUFTLFNBQVE1Rix5REFBc0I7QUFKeEMsT0FBVjtBQU1ELEtBWnNDLENBY3ZDOzs7QUFDQSxRQUFJLENBQUN6RSxZQUFMLEVBQW1CO0FBQ2pCdUssTUFBQUEsVUFBVSxHQUFHOUYseURBQWI7QUFDQSxhQUFPLENBQUM2RixJQUFELEVBQU9DLFVBQVAsQ0FBUDtBQUNEOztBQUVELFFBQUlDLG1CQUFKLEVBQXlCO0FBQ3ZCLFVBQUl4SyxZQUFZLENBQUN4UCxJQUFiLENBQWtCdkIsSUFBbEIsS0FBMkIwRSx5REFBL0IsRUFBK0M7QUFBQTs7QUFDN0MsWUFBSXFNLFlBQVksQ0FBQ29GLGlCQUFqQixFQUFvQztBQUNsQ2tGLFVBQUFBLElBQUksQ0FBQzlYLElBQUwsQ0FBVTtBQUNSaVksWUFBQUEsS0FBSyxFQUFFLFFBREM7QUFFUnJULFlBQUFBLElBQUksRUFBRSxLQUZFO0FBR1JqRyxZQUFBQSxFQUFFLEVBQUVzVCx1REFISTtBQUlSL1MsWUFBQUEsSUFBSSxFQUFHLEdBQUUyWSxRQUFTLFNBQVE1Rix1REFBb0I7QUFKdEMsV0FBVjtBQU1BOEYsVUFBQUEsVUFBVSxHQUFHOUYsdURBQWI7QUFDRDs7QUFFRCxZQUFJekUsWUFBWSxDQUFDM0ksV0FBakIsRUFBOEI7QUFDNUIsZUFBSyxNQUFNQyxJQUFYLElBQW1CMEksWUFBWSxDQUFDM0ksV0FBaEMsRUFBNkM7QUFDM0NpVCxZQUFBQSxJQUFJLENBQUM5WCxJQUFMLENBQVU7QUFDUmlZLGNBQUFBLEtBQUssRUFBRW5ULElBQUksQ0FBQy9LLEtBREo7QUFFUjZLLGNBQUFBLElBQUksRUFBRUUsSUFBSSxDQUFDRixJQUZIO0FBR1JqRyxjQUFBQSxFQUFFLEVBQUVtRyxJQUFJLENBQUNuRyxFQUhEO0FBSVJPLGNBQUFBLElBQUksRUFBRyxHQUFFMlksUUFBUyxTQUFRL1MsSUFBSSxDQUFDbkcsRUFBRztBQUoxQixhQUFWOztBQU1BLGdCQUFJLENBQUNvWixVQUFMLEVBQWlCO0FBQ2ZBLGNBQUFBLFVBQVUsR0FBR2pULElBQUksQ0FBQ25HLEVBQWxCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELHFDQUFJNk8sWUFBWSxDQUFDeFAsSUFBYixDQUFrQitHLFFBQXRCLGtEQUFJLHNCQUE0Qm5ELElBQTVCLENBQWtDeUYsT0FBRCxJQUFhQSxPQUFPLENBQUM1SyxJQUFSLEtBQWlCK2Esc0VBQS9ELENBQUosRUFBaUc7QUFDL0ZNLFVBQUFBLElBQUksQ0FBQzlYLElBQUwsQ0FBVTtBQUNSaVksWUFBQUEsS0FBSyxFQUFFLFlBREM7QUFFUnJULFlBQUFBLElBQUksRUFBRSxNQUZFO0FBR1JqRyxZQUFBQSxFQUFFLEVBQUVzVCwyREFISTtBQUlSL1MsWUFBQUEsSUFBSSxFQUFHLEdBQUUyWSxRQUFTLFNBQVE1RiwyREFBd0I7QUFKMUMsV0FBVjtBQU1EO0FBQ0Y7QUFDRjs7QUFFRCxRQUFJLENBQUM4RixVQUFMLEVBQWlCO0FBQ2ZBLE1BQUFBLFVBQVUsR0FBRzlGLHlEQUFiO0FBQ0Q7O0FBRUQsV0FBTyxDQUFDNkYsSUFBRCxFQUFPQyxVQUFQLENBQVA7QUFDRCxHQTlEaUMsRUE4RC9CLENBQUN2SyxZQUFELEVBQWVvSyxXQUFmLEVBQTRCQyxRQUE1QixFQUFzQ25JLFdBQXRDLENBOUQrQixDQUFsQztBQWdFQSxTQUFPO0FBQ0x4RSxJQUFBQSxLQURLO0FBRUwyRyxJQUFBQSxPQUZLO0FBR0xpRyxJQUFBQSxJQUhLO0FBSUxDLElBQUFBO0FBSkssR0FBUDtBQU1ELENBM0VNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJQO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJZSxTQUFTYyxhQUFULENBQXVCO0FBQUVDLEVBQUFBLEtBQUY7QUFBUzNHLEVBQUFBO0FBQVQsQ0FBdkIsRUFBMEU7QUFBQTs7QUFDdkYsUUFBTTtBQUNKN1QsSUFBQUEsTUFBTSxFQUFFO0FBQUUwSyxNQUFBQSxRQUFRLEdBQUc7QUFBYixLQURKO0FBRUozSyxJQUFBQTtBQUZJLE1BR0Z5YSxLQUhKO0FBSUEsUUFBTWhGLFNBQVMsR0FBR3pWLEdBQUcsQ0FBQzBhLFNBQUosQ0FBYyxDQUFkLEVBQWlCMWEsR0FBRyxDQUFDMmEsV0FBSixDQUFnQixHQUFoQixDQUFqQixDQUFsQjtBQUNBLFFBQU1wQixXQUErQixHQUFHLENBQ3RDO0FBQ0VLLElBQUFBLEtBQUssRUFBRVAsNkRBRFQ7QUFFRTlTLElBQUFBLElBQUksRUFBRSxVQUZSO0FBR0VqRyxJQUFBQSxFQUFFLEVBQUVzVCwwREFITjtBQUlFL1MsSUFBQUEsSUFBSSxFQUFHLEdBQUViLEdBQUksU0FBUTRULDBEQUFzQjtBQUo3QyxHQURzQyxDQUF4QztBQVFBLFFBQU01VixNQUFNLEdBQUdxYywyREFBWSxDQUFDMVAsUUFBRCxDQUEzQixDQWR1RixDQWNoRDs7QUFDdkMsUUFBTTtBQUFFOE8sSUFBQUEsSUFBRjtBQUFRQyxJQUFBQTtBQUFSLE1BQXVCSixrRkFBb0IsQ0FBQ3RiLE1BQUQsRUFBU3ViLFdBQVQsQ0FBakQ7QUFDQSxRQUFNO0FBQUVxQixJQUFBQSxTQUFTLEVBQUVDO0FBQWIsTUFBZ0NQLDZEQUFjLEVBQXBEO0FBQ0EsUUFBTTtBQUFFTSxJQUFBQSxTQUFTLEVBQUVFO0FBQWIsTUFBdUNQLG9FQUFxQixFQUFsRTtBQUNBLFFBQU12TSxNQUFNLEdBQUdYLHVEQUFVLENBQUNZLFNBQUQsQ0FBekI7QUFDQSxRQUFNOE0sUUFBUSxHQUFHakIsc0RBQVcsQ0FBQ0wsSUFBRCxDQUE1QjtBQUNBLFFBQU1sYyxNQUFNLEdBQUl1VyxXQUFXLENBQUNyTixJQUFiLElBQXNDaVQsVUFBckQsQ0FwQnVGLENBc0J2Rjs7QUFDQUcsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTW1CLDZCQUE2QixHQUFHRCxRQUFRLElBQUlBLFFBQVEsQ0FBQzFaLE1BQVQsR0FBa0JvWSxJQUFJLENBQUNwWSxNQUF6RTtBQUNBLFVBQU00WixvQkFBb0IsR0FBRzFkLE1BQU0sS0FBS3FXLDBEQUFYLElBQW9DclcsTUFBTSxLQUFLcVcsMERBQTVFOztBQUVBLFFBQUlvSCw2QkFBNkIsSUFBSUMsb0JBQXJDLEVBQTJEO0FBQ3pEamYsTUFBQUEscUVBQUEsQ0FBeUIsR0FBRWdFLEdBQUksU0FBUTRULDBEQUFzQixFQUE3RDtBQUNEO0FBQ0YsR0FQUSxFQU9OLENBQUNyVyxNQUFELEVBQVN5QyxHQUFULEVBQWN5WixJQUFkLEVBQW9Cc0IsUUFBcEIsQ0FQTSxDQUFUOztBQVNBLE1BQUlGLGNBQWMsSUFBSUMscUJBQXRCLEVBQTZDO0FBQzNDLDBDQUNFLHdEQUFDLCtEQUFEO0FBQUEsNkJBQ0Usd0RBQUMsc0RBQUQ7QUFERixNQURGO0FBS0Q7O0FBRUQsTUFBSSxDQUFDOWMsTUFBTCxFQUFhO0FBQ1gsd0JBQ0Usd0RBQUMsNEVBQUQ7QUFBUSxhQUFPLEVBQUMsUUFBaEI7QUFBeUIsV0FBSyxFQUFDLFFBQS9CO0FBQUEsNkJBQ0UseURBQUMsOENBQUQ7QUFBTyxnQkFBUSxFQUFFb2Msc0VBQWpCO0FBQWtELGFBQUssRUFBQyxrQkFBeEQ7QUFBQSxrSEFDa0UsaUVBRGxFLDBDQUVZO0FBQUcsY0FBSSxFQUFFM0UsU0FBVDtBQUFBO0FBQUEsVUFGWjtBQUFBO0FBREYsTUFERjtBQVFEOztBQUVELHNCQUNFLHlEQUFDLCtEQUFEO0FBQUEsNEJBQ0Usd0RBQUMsaUZBQUQ7QUFBcUIsZ0JBQVUsRUFBRyxHQUFFelYsR0FBSSxTQUFRekMsTUFBTyxFQUF2RDtBQUEwRCxlQUFTLEVBQUVrWSxTQUFyRTtBQUFnRixZQUFNLEVBQUV6WDtBQUF4RixNQURGLGVBRUUseURBQUMsd0VBQUQ7QUFBQSw4QkFFRSx3REFBQyxnREFBRDtBQUFBLGtCQUNHeWIsSUFBSSxDQUFDbmUsR0FBTCxDQUFVOGYsR0FBRCxJQUEyQjtBQUNuQyw4QkFDRSx3REFBQyw0Q0FBRDtBQUVFLGlCQUFLLEVBQUVBLEdBQUcsQ0FBQ3hCLEtBRmI7QUFHRSxnQkFBSSxFQUFFd0IsR0FBRyxDQUFDdmEsSUFIWjtBQUlFLGdCQUFJLEVBQUV1YSxHQUFHLENBQUM3VSxJQUpaO0FBS0Usa0JBQU0sRUFBRTZVLEdBQUcsQ0FBQzlhLEVBQUosS0FBVy9DO0FBTHJCLGFBQ082ZCxHQUFHLENBQUN4QixLQURYLENBREY7QUFTRCxTQVZBO0FBREgsUUFGRixlQWlCRSx5REFBQyxtREFBRDtBQUFZLGlCQUFTLEVBQUU1TCxNQUFNLENBQUNxTixVQUE5QjtBQUFBLGdDQUNFLHdEQUFDLHVGQUFEO0FBQXdCLGdCQUFNLEVBQUVyZCxNQUFoQztBQUF3QyxtQkFBUyxFQUFFZ1EsTUFBTSxDQUFDc047QUFBMUQsVUFERixlQUVFLHdEQUFDLDhGQUFEO0FBQTRCLGdCQUFNLEVBQUV0ZCxNQUFwQztBQUE0QyxtQkFBUyxFQUFFZ1EsTUFBTSxDQUFDc047QUFBOUQsVUFGRixlQUdFLHdEQUFDLDRFQUFEO0FBQW1CLHFCQUFXLEVBQUV4SCxXQUFoQztBQUE2QyxnQkFBTSxFQUFFOVYsTUFBckQ7QUFBNkQsZ0JBQU0sRUFBRVQ7QUFBckUsVUFIRjtBQUFBLFFBakJGO0FBQUEsTUFGRjtBQUFBLElBREY7QUE0QkQ7QUFFTSxNQUFNMFEsU0FBUyxHQUFJSSxLQUFELElBQTBCO0FBQ2pELFNBQU87QUFDTGlOLElBQUFBLEtBQUssRUFBRXRSLDZDQUFJO0FBQ2YsZ0JBQWdCcUUsS0FBSyxDQUFDcUcsT0FBTixDQUFjLENBQWQsQ0FBaUI7QUFDakM7QUFDQSxLQUpTO0FBS0w7QUFDQTJHLElBQUFBLFVBQVUsRUFBRXJSLDZDQUFJO0FBQ3BCO0FBQ0E7QUFSUyxHQUFQO0FBVUQsQ0FYTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdQO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQWtCTyxNQUFNb1Msb0JBQW9CLEdBQUcsQ0FBQztBQUNuQ0MsRUFBQUEsS0FBSyxHQUFHLEVBRDJCO0FBRW5DQyxFQUFBQSxRQUFRLEdBQUcsV0FGd0I7QUFHbkNDLEVBQUFBLFlBQVksR0FBRyxLQUhvQjtBQUluQ0MsRUFBQUEsTUFBTSxHQUFHaEIscURBQWVpQjtBQUpXLENBQUQsS0FLckI7QUFDYkMsRUFBQUEsV0FBVztBQUVYLFFBQU1DLFFBQVEsR0FBR3BCLHdEQUFXLENBQUNoWSxnREFBSSxDQUFDOFksS0FBRCxFQUFRQyxRQUFSLEVBQWtCQyxZQUFsQixDQUFMLENBQTVCO0FBQ0EsUUFBTTtBQUFFM0IsSUFBQUEsU0FBRjtBQUFhL04sSUFBQUE7QUFBYixNQUF1QnlOLGNBQWMsRUFBM0M7QUFDQSxRQUFNc0MsaUJBQWlCLEdBQUc5WSxxREFBVyxDQUFDNlksUUFBRCxFQUFXSCxNQUFYLENBQXJDO0FBRUEsU0FBTztBQUNMNUIsSUFBQUEsU0FESztBQUVML04sSUFBQUEsS0FGSztBQUdML0ssSUFBQUEsT0FBTyxFQUFFOGE7QUFISixHQUFQO0FBS0QsQ0FqQk07QUFtQkEsTUFBTUMsU0FBUyxHQUFHLE1BQXVCO0FBQzlDSCxFQUFBQSxXQUFXO0FBRVgsU0FBT25CLHdEQUFXLENBQUNNLGlEQUFELENBQWxCO0FBQ0QsQ0FKTTtBQU1BLE1BQU14QixZQUFZLEdBQUkvWixFQUFELElBQTJDO0FBQ3JFb2MsRUFBQUEsV0FBVztBQUNYSSxFQUFBQSxlQUFlLENBQUN4YyxFQUFELENBQWY7QUFFQSxTQUFPaWIsd0RBQVcsQ0FBRXBTLEtBQUQsSUFBb0MyUyxzREFBVSxDQUFDM1MsS0FBRCxFQUFRN0ksRUFBUixDQUEvQyxDQUFsQjtBQUNELENBTE07QUFPQSxNQUFNeWMsWUFBWSxHQUFHLE1BQXFCO0FBQy9DTCxFQUFBQSxXQUFXO0FBRVgsU0FBT25CLHdEQUFXLENBQUNZLDBEQUFELENBQWxCO0FBQ0QsQ0FKTTtBQU1BLE1BQU12SyxVQUFVLEdBQUcsTUFBTTtBQUM5QixRQUFNalUsUUFBUSxHQUFHNFIsd0RBQVcsRUFBNUI7QUFDQSxTQUFPLENBQUNqUCxFQUFELEVBQWFrRixPQUFiLEVBQStCd1gsVUFBL0IsS0FBd0RyZixRQUFRLENBQUN1VSxpREFBTyxDQUFDO0FBQUU1UixJQUFBQSxFQUFGO0FBQU1rRixJQUFBQSxPQUFOO0FBQWV3WCxJQUFBQTtBQUFmLEdBQUQsQ0FBUixDQUF2RTtBQUNELENBSE07QUFLQSxNQUFNbkwsWUFBWSxHQUFHLE1BQU07QUFDaEMsUUFBTWxVLFFBQVEsR0FBRzRSLHdEQUFXLEVBQTVCO0FBRUEsU0FBUWpQLEVBQUQsSUFBZ0IzQyxRQUFRLENBQUN3VSxtREFBUyxDQUFDN1IsRUFBRCxDQUFWLENBQS9CO0FBQ0QsQ0FKTTtBQU1BLE1BQU1rUSwyQkFBMkIsR0FBRyxNQUFNO0FBQy9DLFFBQU0zRCxLQUFLLEdBQUcwTyx3REFBVyxDQUFDUyw4REFBa0IsQ0FBQ0wsbUVBQUQsQ0FBbkIsQ0FBekI7QUFDQSxTQUFPOU8sS0FBSyxLQUFLLElBQWpCO0FBQ0QsQ0FITTtBQUtBLE1BQU15TixjQUFjLEdBQUcsTUFBTTtBQUNsQyxRQUFNTSxTQUFTLEdBQUdXLHdEQUFXLENBQUNRLGtFQUFzQixDQUFDTix5REFBRCxDQUF2QixDQUE3QjtBQUNBLFFBQU01TyxLQUFLLEdBQUcwTyx3REFBVyxDQUFDUyw4REFBa0IsQ0FBQ1AseURBQUQsQ0FBbkIsQ0FBekI7QUFFQSxTQUFPO0FBQUViLElBQUFBLFNBQUY7QUFBYS9OLElBQUFBO0FBQWIsR0FBUDtBQUNELENBTE07QUFPQSxNQUFNME4scUJBQXFCLEdBQUcsTUFBTTtBQUN6QyxRQUFNSyxTQUFTLEdBQUdXLHdEQUFXLENBQUNRLGtFQUFzQixDQUFDTCw2REFBRCxDQUF2QixDQUE3QjtBQUNBLFFBQU03TyxLQUFLLEdBQUcwTyx3REFBVyxDQUFDUyw4REFBa0IsQ0FBQ04sNkRBQUQsQ0FBbkIsQ0FBekI7QUFFQSxTQUFPO0FBQUVkLElBQUFBLFNBQUY7QUFBYS9OLElBQUFBO0FBQWIsR0FBUDtBQUNELENBTE07QUFPQSxNQUFNNkUsZ0JBQWdCLEdBQUcsTUFBTTtBQUNwQyxRQUFNSSxZQUFZLEdBQUd5Six3REFBVyxDQUFDUSxrRUFBc0IsQ0FBQzdKLHdEQUFELENBQXZCLENBQWhDO0FBQ0EsUUFBTXJGLEtBQUssR0FBRzBPLHdEQUFXLENBQUNTLDhEQUFrQixDQUFDOUosd0RBQUQsQ0FBbkIsQ0FBekI7QUFFQSxTQUFPO0FBQUVKLElBQUFBLFlBQUY7QUFBZ0JqRixJQUFBQTtBQUFoQixHQUFQO0FBQ0QsQ0FMTTtBQU9BLE1BQU04RSxrQkFBa0IsR0FBRyxNQUFNO0FBQ3RDLFFBQU1LLGNBQWMsR0FBR3VKLHdEQUFXLENBQUNRLGtFQUFzQixDQUFDNUosMERBQUQsQ0FBdkIsQ0FBbEM7QUFDQSxRQUFNdEYsS0FBSyxHQUFHME8sd0RBQVcsQ0FBQ1MsOERBQWtCLENBQUM3SiwwREFBRCxDQUFuQixDQUF6QjtBQUVBLFNBQU87QUFBRUgsSUFBQUEsY0FBRjtBQUFrQm5GLElBQUFBO0FBQWxCLEdBQVA7QUFDRCxDQUxNLEVBT1A7O0FBQ08sTUFBTTZQLFdBQVcsR0FBRyxNQUFNO0FBQy9CLFFBQU0vZSxRQUFRLEdBQUc0Uix3REFBVyxFQUE1QjtBQUNBLFFBQU0yTixZQUFZLEdBQUczQix3REFBVyxDQUFDVSxxRUFBeUIsQ0FBQ1IseURBQUQsQ0FBMUIsQ0FBaEM7QUFFQTVCLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkcUQsSUFBQUEsWUFBWSxJQUFJdmYsUUFBUSxDQUFDOGQsa0RBQVEsRUFBVCxDQUF4QjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQsQ0FKK0IsQ0FNdkI7QUFDVCxDQVBNO0FBU0EsTUFBTXFCLGVBQWUsR0FBSXhjLEVBQUQsSUFBZ0I7QUFDN0MsUUFBTTNDLFFBQVEsR0FBRzRSLHdEQUFXLEVBQTVCO0FBQ0EsUUFBTXZSLE1BQU0sR0FBR3VkLHdEQUFXLENBQUVwUyxLQUFELElBQW9DMlMsc0RBQVUsQ0FBQzNTLEtBQUQsRUFBUTdJLEVBQVIsQ0FBL0MsQ0FBMUI7QUFDQSxRQUFNNmMsYUFBYSxHQUFHLENBQUM1Qix3REFBVyxDQUFDUSxrRUFBc0IsQ0FBQ0wsNkRBQUQsQ0FBdkIsQ0FBbEM7QUFDQSxRQUFNMEIsV0FBVyxHQUFHRCxhQUFhLElBQUluZixNQUFqQixJQUEyQixDQUFDQSxNQUFNLENBQUNpQixPQUF2RDtBQUVBNGEsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2R1RCxJQUFBQSxXQUFXLElBQUl6ZixRQUFRLENBQUMrZCxzREFBWSxDQUFDcGIsRUFBRCxDQUFiLENBQXZCO0FBQ0QsR0FGUSxFQUVOLENBQUN0QyxNQUFELENBRk0sQ0FBVCxDQU42QyxDQVEvQjtBQUNmLENBVE07QUFXQSxNQUFNcWYsY0FBYyxHQUFHLE1BQU07QUFDbEMsUUFBTTFmLFFBQVEsR0FBRzRSLHdEQUFXLEVBQTVCO0FBQ0EsUUFBTStOLFdBQVcsR0FBRy9CLHdEQUFXLENBQUNXLHlEQUFELENBQS9CO0FBRUEsU0FBTztBQUNMb0IsSUFBQUEsV0FESztBQUVMMUIsSUFBQUEsY0FBYyxFQUFHMkIsQ0FBRCxJQUE4QjVmLFFBQVEsQ0FBQ2llLHdEQUFjLENBQUMyQixDQUFELENBQWY7QUFGakQsR0FBUDtBQUlELENBUk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JUDtBQUlBO0FBRUE7QUFFTyxNQUFNSSxVQUFVLEdBQUl4VSxLQUFELElBQW9DQSxLQUFLLENBQUNySCxPQUE3RDtBQUVBLE1BQU04YixXQUFXLEdBQUdKLGdFQUFjLENBQUNHLFVBQUQsRUFBYSxDQUFDO0FBQUVFLEVBQUFBO0FBQUYsQ0FBRCxLQUFlQSxLQUE1QixDQUFsQztBQUVBLE1BQU0zQixpQkFBaUIsR0FBR3NCLGdFQUFjLENBQUNHLFVBQUQsRUFBYSxDQUFDO0FBQUVHLEVBQUFBO0FBQUYsQ0FBRCxLQUFrQkEsUUFBUSxDQUFDUixXQUF4QyxDQUF4QztBQUVBLE1BQU07QUFBRXpCLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixJQUE0QjRCLGlFQUFBLENBQTRCRSxXQUE1QixDQUFsQzs7QUFFUCxNQUFNSSxlQUFlLEdBQUkxQixRQUFELElBQ3RCa0IsZ0VBQWMsQ0FBQzNCLFNBQUQsRUFBYS9aLE9BQUQsSUFDeEJBLE9BQU8sQ0FBQ08sTUFBUixDQUFnQnJFLE1BQUQsSUFBYXNlLFFBQVEsS0FBSyxXQUFiLEdBQTJCdGUsTUFBTSxDQUFDNFIsV0FBbEMsR0FBZ0QsQ0FBQzVSLE1BQU0sQ0FBQ21RLE1BQXBGLENBRFksQ0FEaEI7O0FBS0EsTUFBTThQLG9CQUFvQixHQUFHLENBQUMzQixRQUFELEVBQW1CQyxZQUFuQixLQUMzQmlCLGdFQUFjLENBQUNRLGVBQWUsQ0FBQzFCLFFBQUQsQ0FBaEIsRUFBNkJ4YSxPQUFELElBQ3hDQSxPQUFPLENBQUNPLE1BQVIsQ0FBZ0JyRSxNQUFELElBQVl1ZSxZQUFZLEtBQUssS0FBakIsSUFBMEJ2ZSxNQUFNLENBQUNJLElBQVAsS0FBZ0JtZSxZQUFyRSxDQURZLENBRGhCOztBQUtBLE1BQU0yQixhQUFhLEdBQUlDLFFBQUQsSUFDcEJYLGdFQUFjLENBQUMzQixTQUFELEVBQWEvWixPQUFELElBQWE7QUFDckMsTUFBSXFjLFFBQVEsS0FBSyxFQUFqQixFQUFxQjtBQUNuQixXQUFPLEVBQVA7QUFDRDs7QUFFRCxTQUFPcmMsT0FBTyxDQUFDTyxNQUFSLENBQWdCckUsTUFBRCxJQUFZO0FBQ2hDLFVBQU1vZ0IsTUFBZ0IsR0FBRyxFQUF6Qjs7QUFDQSxRQUFJcGdCLE1BQU0sQ0FBQ2tELElBQVgsRUFBaUI7QUFDZmtkLE1BQUFBLE1BQU0sQ0FBQ3pjLElBQVAsQ0FBWTNELE1BQU0sQ0FBQ2tELElBQVAsQ0FBWW9CLFdBQVosRUFBWjtBQUNEOztBQUVELFFBQUl0RSxNQUFNLENBQUMrWCxPQUFYLEVBQW9CO0FBQ2xCcUksTUFBQUEsTUFBTSxDQUFDemMsSUFBUCxDQUFZM0QsTUFBTSxDQUFDK1gsT0FBUCxDQUFlelQsV0FBZixFQUFaO0FBQ0Q7O0FBRUQsV0FBTzhiLE1BQU0sQ0FBQ0MsSUFBUCxDQUFhQyxDQUFELElBQU9BLENBQUMsQ0FBQzVYLFFBQUYsQ0FBV3lYLFFBQVEsQ0FBQzdiLFdBQVQsRUFBWCxDQUFuQixDQUFQO0FBQ0QsR0FYTSxDQUFQO0FBWUQsQ0FqQmEsQ0FEaEI7O0FBb0JPLE1BQU1pQixJQUFJLEdBQUcsQ0FBQzRhLFFBQUQsRUFBbUI3QixRQUFuQixFQUFxQ0MsWUFBckMsS0FDbEJpQixnRUFBYyxDQUNaUyxvQkFBb0IsQ0FBQzNCLFFBQUQsRUFBV0MsWUFBWCxDQURSLEVBRVoyQixhQUFhLENBQUNDLFFBQUQsQ0FGRCxFQUdaLENBQUNJLGVBQUQsRUFBa0JDLGVBQWxCLEtBQXNDO0FBQ3BDLFNBQU9MLFFBQVEsS0FBSyxFQUFiLEdBQWtCSSxlQUFsQixHQUFvQ0MsZUFBM0M7QUFDRCxDQUxXLENBRFQ7QUFTQSxNQUFNckMsa0JBQWtCLEdBQUdxQixnRUFBYyxDQUFDM0IsU0FBRCxFQUFhL1osT0FBRCxJQUMxREEsT0FBTyxHQUNIQSxPQUFPLENBQ0pPLE1BREgsQ0FDV3lVLENBQUQsSUFBTzlGLE9BQU8sQ0FBQzhGLENBQUMsQ0FBQ2pLLEtBQUgsQ0FEeEIsRUFFR3ZSLEdBRkgsQ0FHS3diLENBQUQsS0FBcUI7QUFDbkJuTSxFQUFBQSxRQUFRLEVBQUVtTSxDQUFDLENBQUN4VyxFQURPO0FBRW5CbWUsRUFBQUEsU0FBUyxFQUFFM0gsQ0FBQyxDQUFFaks7QUFGSyxDQUFyQixDQUhKLENBREcsR0FTSCxFQVYwQyxDQUF6QyxFQWFQOztBQUNPLE1BQU02UixhQUFhLEdBQUlDLFVBQUQsSUFDM0JuQixnRUFBYyxDQUFDRyxVQUFELEVBQWEsQ0FBQztBQUFFaUIsRUFBQUEsUUFBUSxHQUFHO0FBQWIsQ0FBRCxLQUF1QkEsUUFBUSxDQUFDRCxVQUFELENBQTVDLENBRFQ7QUFHQSxNQUFNNUMsc0JBQXNCLEdBQUk0QyxVQUFELElBQ3BDbkIsZ0VBQWMsQ0FBQ2tCLGFBQWEsQ0FBQ0MsVUFBRCxDQUFkLEVBQTZCRSxPQUFELElBQWEsQ0FBQUEsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVDLE1BQVQsTUFBb0JyQix5REFBN0QsQ0FEVDtBQUdBLE1BQU16QixrQkFBa0IsR0FBSTJDLFVBQUQsSUFDaENuQixnRUFBYyxDQUFDa0IsYUFBYSxDQUFDQyxVQUFELENBQWQsRUFBNkJFLE9BQUQsSUFDeEMsQ0FBQUEsT0FBTyxTQUFQLElBQUFBLE9BQU8sV0FBUCxZQUFBQSxPQUFPLENBQUVDLE1BQVQsTUFBb0JyQiwwREFBcEIsR0FBNkNvQixPQUE3QyxhQUE2Q0EsT0FBN0MsdUJBQTZDQSxPQUFPLENBQUVoUyxLQUF0RCxHQUE4RCxJQURsRCxDQURUO0FBS0EsTUFBTW9QLHlCQUF5QixHQUFJMEMsVUFBRCxJQUN2Q25CLGdFQUFjLENBQUNrQixhQUFhLENBQUNDLFVBQUQsQ0FBZCxFQUE2QkUsT0FBRCxJQUFhQSxPQUFPLEtBQUs1VixTQUFyRCxDQURUOzs7Ozs7Ozs7Ozs7Ozs7QUNoRlA7QUFFQTtBQUNBO0FBQ0E7QUFFTyxlQUFlK1AsVUFBZixDQUEwQnJPLFFBQTFCLEVBQW9FO0FBQ3pFLFFBQU1qSCxJQUFJLEdBQUcsTUFBTXJILGtFQUFpQixDQUFDc08sUUFBRCxDQUFwQztBQUNBLE1BQUk5TCxNQUFKOztBQUVBLE1BQUk2RSxJQUFJLENBQUN0RixJQUFMLEtBQWMwRSx5REFBbEIsRUFBa0M7QUFDaENqRSxJQUFBQSxNQUFNLEdBQUcsTUFBTXFnQiwrREFBZSxDQUFDeGIsSUFBRCxDQUE5QjtBQUNEOztBQUNELE1BQUlBLElBQUksQ0FBQ3RGLElBQUwsS0FBYzBFLGdFQUFsQixFQUF5QztBQUN2Q2pFLElBQUFBLE1BQU0sR0FBRyxNQUFNdkMsc0VBQXNCLENBQUNvSCxJQUFELENBQXJDO0FBQ0Q7O0FBQ0QsTUFBSUEsSUFBSSxDQUFDdEYsSUFBTCxLQUFjMEUsMkRBQWxCLEVBQW9DO0FBQ2xDLFVBQU1zYyxXQUFXLEdBQUcsTUFBTUgsNkVBQXlCLENBQUN2YixJQUFELENBQW5EO0FBQ0E3RSxJQUFBQSxNQUFNLEdBQUd1Z0IsV0FBVDtBQUNEOztBQUNELE1BQUkxYixJQUFJLENBQUN0RixJQUFMLEtBQWMwRSw4REFBbEIsRUFBdUM7QUFDckNqRSxJQUFBQSxNQUFNLEdBQUc7QUFBRWMsTUFBQUEsSUFBSSxFQUFFK0Q7QUFBUixLQUFUO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDN0UsTUFBTCxFQUFhO0FBQ1gsVUFBTSxJQUFJaEIsS0FBSixDQUFVLDBCQUEwQjZGLElBQUksQ0FBQ3RGLElBQXpDLENBQU47QUFDRDs7QUFFRCxTQUFPUyxNQUFQO0FBQ0Q7Ozs7Ozs7Ozs7OztBQzdCeUM7QUFDM0I7QUFDZixjQUFjLDZDQUFNO0FBQ3BCLElBQUksZ0RBQVM7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvRGFzaGJvYXJkc1RhYmxlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL2J1aWxkQ2F0ZWdvcmllcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9uYXZNb2RlbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9zZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0FwcENvbmZpZ1dyYXBwZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9CYWRnZXMvUGx1Z2luRGlzYWJsZWRCYWRnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0JhZGdlcy9QbHVnaW5FbnRlcnByaXNlQmFkZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9CYWRnZXMvUGx1Z2luSW5zdGFsbEJhZGdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvQmFkZ2VzL1BsdWdpblVwZGF0ZUF2YWlsYWJsZUJhZGdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvQmFkZ2VzL2luZGV4LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9CYWRnZXMvc2hhcmVkU3R5bGVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9HZXRTdGFydGVkV2l0aFBsdWdpbi9HZXRTdGFydGVkV2l0aEFwcC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0dldFN0YXJ0ZWRXaXRoUGx1Z2luL0dldFN0YXJ0ZWRXaXRoRGF0YVNvdXJjZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0dldFN0YXJ0ZWRXaXRoUGx1Z2luL0dldFN0YXJ0ZWRXaXRoUGx1Z2luLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvR2V0U3RhcnRlZFdpdGhQbHVnaW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0luc3RhbGxDb250cm9scy9FeHRlcm5hbGx5TWFuYWdlZEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL0luc3RhbGxDb250cm9scy9JbnN0YWxsQ29udHJvbHMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9JbnN0YWxsQ29udHJvbHMvSW5zdGFsbENvbnRyb2xzQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvSW5zdGFsbENvbnRyb2xzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvTG9hZGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGx1Z2luRGFzaGJvYXJkcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL1BsdWdpbkRldGFpbHNCb2R5LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGx1Z2luRGV0YWlsc0Rpc2FibGVkRXJyb3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9QbHVnaW5EZXRhaWxzSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGx1Z2luRGV0YWlsc0hlYWRlckRlcGVuZGVuY2llcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL1BsdWdpbkRldGFpbHNIZWFkZXJTaWduYXR1cmUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vY29tcG9uZW50cy9QbHVnaW5EZXRhaWxzU2lnbmF0dXJlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2NvbXBvbmVudHMvUGx1Z2luTG9nby50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL1BsdWdpblNpZ25hdHVyZURldGFpbHNCYWRnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9jb21wb25lbnRzL1ZlcnNpb25MaXN0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL2hvb2tzL3VzZVBsdWdpbkNvbmZpZy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9ob29rcy91c2VQbHVnaW5EZXRhaWxzVGFicy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGx1Z2lucy9hZG1pbi9wYWdlcy9QbHVnaW5EZXRhaWxzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL3N0YXRlL2hvb2tzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vc3RhdGUvc2VsZWN0b3JzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL19fdmlydHVhbF9fL3JlYWN0LXVzZS12aXJ0dWFsLTAwMzI2ZTcwYmEvMC9jYWNoZS9yZWFjdC11c2UtbnBtLTE3LjMuMi1hMDMyY2JlYjAxLTczNzk0NjBmNTEuemlwL25vZGVfbW9kdWxlcy9yZWFjdC11c2UvZXNtL3VzZVByZXZpb3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJpYWwoKSB7XG4gIGNvbnN0IGV4cGlyeSA9IGNvbmZpZy5saWNlbnNlSW5mbz8udHJpYWxFeHBpcnk7XG4gIHJldHVybiAhIShleHBpcnkgJiYgZXhwaXJ5ID4gMCk7XG59XG5cbmV4cG9ydCBjb25zdCBoaWdobGlnaHRUcmlhbCA9ICgpID0+IGlzVHJpYWwoKSAmJiBjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgUGx1Z2luRGFzaGJvYXJkIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgZGFzaGJvYXJkczogUGx1Z2luRGFzaGJvYXJkW107XG4gIG9uSW1wb3J0OiAoZGFzaGJvYXJkOiBQbHVnaW5EYXNoYm9hcmQsIG92ZXJ3cml0ZTogYm9vbGVhbikgPT4gdm9pZDtcbiAgb25SZW1vdmU6IChkYXNoYm9hcmQ6IFBsdWdpbkRhc2hib2FyZCkgPT4gdm9pZDtcbn1cblxuY29uc3QgRGFzaGJvYXJkc1RhYmxlOiBGQzxQcm9wcz4gPSAoeyBkYXNoYm9hcmRzLCBvbkltcG9ydCwgb25SZW1vdmUgfSkgPT4ge1xuICBmdW5jdGlvbiBidXR0b25UZXh0KGRhc2hib2FyZDogUGx1Z2luRGFzaGJvYXJkKSB7XG4gICAgcmV0dXJuIGRhc2hib2FyZC5yZXZpc2lvbiAhPT0gZGFzaGJvYXJkLmltcG9ydGVkUmV2aXNpb24gPyAnVXBkYXRlJyA6ICdSZS1pbXBvcnQnO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlsdGVyLXRhYmxlXCI+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtkYXNoYm9hcmRzLm1hcCgoZGFzaGJvYXJkLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dHIga2V5PXtgJHtkYXNoYm9hcmQuZGFzaGJvYXJkSWR9LSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aWR0aC0xXCI+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImFwcHNcIiAvPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAge2Rhc2hib2FyZC5pbXBvcnRlZCA/IChcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Rhc2hib2FyZC5pbXBvcnRlZFVybH0+e2Rhc2hib2FyZC50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuPntkYXNoYm9hcmQudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICAgICAgeyFkYXNoYm9hcmQuaW1wb3J0ZWQgPyAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBvbkltcG9ydChkYXNoYm9hcmQsIGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgIEltcG9ydFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IG9uSW1wb3J0KGRhc2hib2FyZCwgdHJ1ZSl9PlxuICAgICAgICAgICAgICAgICAgICB7YnV0dG9uVGV4dChkYXNoYm9hcmQpfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7ZGFzaGJvYXJkLmltcG9ydGVkICYmIChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInRyYXNoLWFsdFwiIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlKGRhc2hib2FyZCl9IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRzVGFibGU7XG4iLCJpbXBvcnQgeyBsYXN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBEYXRhU291cmNlU2V0dGluZ3MsIGxvY2F0aW9uVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVdpdGhCYWNrZW5kLCBnZXREYXRhU291cmNlU3J2LCBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHVwZGF0ZU5hdkluZGV4IH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuaW1wb3J0IHsgYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0gfSBmcm9tICdhcHAvY29yZS91dGlscy9hY2Nlc3NDb250cm9sJztcbmltcG9ydCB7IGdldERhdGFzb3VyY2VTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9kYXRhc291cmNlX3Nydic7XG5pbXBvcnQgeyBnZXRQbHVnaW5TZXR0aW5ncyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL3BsdWdpblNldHRpbmdzJztcbmltcG9ydCB7IGltcG9ydERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9wbHVnaW5fbG9hZGVyJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeSwgVGh1bmtEaXNwYXRjaCwgVGh1bmtSZXN1bHQgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5cbmltcG9ydCB7IGJ1aWxkQ2F0ZWdvcmllcyB9IGZyb20gJy4vYnVpbGRDYXRlZ29yaWVzJztcbmltcG9ydCB7IGJ1aWxkTmF2TW9kZWwgfSBmcm9tICcuL25hdk1vZGVsJztcbmltcG9ydCB7XG4gIGRhdGFTb3VyY2VMb2FkZWQsXG4gIGRhdGFTb3VyY2VNZXRhTG9hZGVkLFxuICBkYXRhU291cmNlUGx1Z2luc0xvYWQsXG4gIGRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkLFxuICBkYXRhU291cmNlc0xvYWRlZCxcbiAgaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZCxcbiAgaW5pdERhdGFTb3VyY2VTZXR0aW5nc1N1Y2NlZWRlZCxcbiAgdGVzdERhdGFTb3VyY2VGYWlsZWQsXG4gIHRlc3REYXRhU291cmNlU3RhcnRpbmcsXG4gIHRlc3REYXRhU291cmNlU3VjY2VlZGVkLFxufSBmcm9tICcuL3JlZHVjZXJzJztcbmltcG9ydCB7IGdldERhdGFTb3VyY2UsIGdldERhdGFTb3VyY2VNZXRhIH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFTb3VyY2VUeXBlc0xvYWRlZFBheWxvYWQge1xuICBwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdO1xuICBjYXRlZ29yaWVzOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbml0RGF0YVNvdXJjZVNldHRpbmdEZXBlbmRlbmNpZXMge1xuICBsb2FkRGF0YVNvdXJjZTogdHlwZW9mIGxvYWREYXRhU291cmNlO1xuICBsb2FkRGF0YVNvdXJjZU1ldGE6IHR5cGVvZiBsb2FkRGF0YVNvdXJjZU1ldGE7XG4gIGdldERhdGFTb3VyY2U6IHR5cGVvZiBnZXREYXRhU291cmNlO1xuICBnZXREYXRhU291cmNlTWV0YTogdHlwZW9mIGdldERhdGFTb3VyY2VNZXRhO1xuICBpbXBvcnREYXRhU291cmNlUGx1Z2luOiB0eXBlb2YgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXN0RGF0YVNvdXJjZURlcGVuZGVuY2llcyB7XG4gIGdldERhdGFzb3VyY2VTcnY6IHR5cGVvZiBnZXREYXRhU291cmNlU3J2O1xuICBnZXRCYWNrZW5kU3J2OiB0eXBlb2YgZ2V0QmFja2VuZFNydjtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXREYXRhU291cmNlU2V0dGluZ3MgPSAoXG4gIHBhZ2VJZDogc3RyaW5nLFxuICBkZXBlbmRlbmNpZXM6IEluaXREYXRhU291cmNlU2V0dGluZ0RlcGVuZGVuY2llcyA9IHtcbiAgICBsb2FkRGF0YVNvdXJjZSxcbiAgICBsb2FkRGF0YVNvdXJjZU1ldGEsXG4gICAgZ2V0RGF0YVNvdXJjZSxcbiAgICBnZXREYXRhU291cmNlTWV0YSxcbiAgICBpbXBvcnREYXRhU291cmNlUGx1Z2luLFxuICB9XG4pOiBUaHVua1Jlc3VsdDx2b2lkPiA9PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgaWYgKCFwYWdlSWQpIHtcbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQobmV3IEVycm9yKCdJbnZhbGlkIElEJykpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbG9hZGVkRGF0YVNvdXJjZSA9IGF3YWl0IGRpc3BhdGNoKGRlcGVuZGVuY2llcy5sb2FkRGF0YVNvdXJjZShwYWdlSWQpKTtcbiAgICAgIGF3YWl0IGRpc3BhdGNoKGRlcGVuZGVuY2llcy5sb2FkRGF0YVNvdXJjZU1ldGEobG9hZGVkRGF0YVNvdXJjZSkpO1xuXG4gICAgICAvLyBoYXZlIHdlIGFscmVhZHkgbG9hZGVkIHRoZSBwbHVnaW4gdGhlbiB3ZSBjYW4gc2tpcCB0aGUgc3RlcHMgYmVsb3c/XG4gICAgICBpZiAoZ2V0U3RhdGUoKS5kYXRhU291cmNlU2V0dGluZ3MucGx1Z2luKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGRlcGVuZGVuY2llcy5nZXREYXRhU291cmNlKGdldFN0YXRlKCkuZGF0YVNvdXJjZXMsIHBhZ2VJZCk7XG4gICAgICBjb25zdCBkYXRhU291cmNlTWV0YSA9IGRlcGVuZGVuY2llcy5nZXREYXRhU291cmNlTWV0YShnZXRTdGF0ZSgpLmRhdGFTb3VyY2VzLCBkYXRhU291cmNlIS50eXBlKTtcbiAgICAgIGNvbnN0IGltcG9ydGVkUGx1Z2luID0gYXdhaXQgZGVwZW5kZW5jaWVzLmltcG9ydERhdGFTb3VyY2VQbHVnaW4oZGF0YVNvdXJjZU1ldGEpO1xuXG4gICAgICBkaXNwYXRjaChpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkKGltcG9ydGVkUGx1Z2luKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkaXNwYXRjaChpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkKGVycikpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0RGF0YVNvdXJjZSA9IChcbiAgZGF0YVNvdXJjZU5hbWU6IHN0cmluZyxcbiAgZGVwZW5kZW5jaWVzOiBUZXN0RGF0YVNvdXJjZURlcGVuZGVuY2llcyA9IHtcbiAgICBnZXREYXRhc291cmNlU3J2LFxuICAgIGdldEJhY2tlbmRTcnYsXG4gIH1cbik6IFRodW5rUmVzdWx0PHZvaWQ+ID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDogVGh1bmtEaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCBkc0FwaSA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXREYXRhc291cmNlU3J2KCkuZ2V0KGRhdGFTb3VyY2VOYW1lKTtcblxuICAgIGlmICghZHNBcGkudGVzdERhdGFzb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nKCkpO1xuXG4gICAgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS53aXRoTm9CYWNrZW5kQ2FjaGUoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHNBcGkudGVzdERhdGFzb3VyY2UoKTtcblxuICAgICAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZChyZXN1bHQpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCB7IHN0YXR1c1RleHQsIG1lc3NhZ2U6IGVyck1lc3NhZ2UsIGRldGFpbHMsIGRhdGEgfSA9IGVycjtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyTWVzc2FnZSB8fCBkYXRhPy5tZXNzYWdlIHx8ICdIVFRQIGVycm9yICcgKyBzdGF0dXNUZXh0O1xuXG4gICAgICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlRmFpbGVkKHsgbWVzc2FnZSwgZGV0YWlscyB9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9kYXRhc291cmNlcycpO1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VzTG9hZGVkKHJlc3BvbnNlKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZSh1aWQ6IHN0cmluZyk6IFRodW5rUmVzdWx0PFByb21pc2U8RGF0YVNvdXJjZVNldHRpbmdzPj4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IGF3YWl0IGdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQodWlkKTtcblxuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VMb2FkZWQoZGF0YVNvdXJjZSkpO1xuICAgIHJldHVybiBkYXRhU291cmNlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VNZXRhKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHBsdWdpbkluZm8gPSAoYXdhaXQgZ2V0UGx1Z2luU2V0dGluZ3MoZGF0YVNvdXJjZS50eXBlKSkgYXMgRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG4gICAgY29uc3QgcGx1Z2luID0gYXdhaXQgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihwbHVnaW5JbmZvKTtcbiAgICBjb25zdCBpc0JhY2tlbmQgPSBwbHVnaW4uRGF0YVNvdXJjZUNsYXNzLnByb3RvdHlwZSBpbnN0YW5jZW9mIERhdGFTb3VyY2VXaXRoQmFja2VuZDtcbiAgICBjb25zdCBtZXRhID0ge1xuICAgICAgLi4ucGx1Z2luSW5mbyxcbiAgICAgIGlzQmFja2VuZDogcGx1Z2luSW5mby5iYWNrZW5kIHx8IGlzQmFja2VuZCxcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZU1ldGFMb2FkZWQobWV0YSkpO1xuXG4gICAgcGx1Z2luLm1ldGEgPSBtZXRhO1xuICAgIGRpc3BhdGNoKHVwZGF0ZU5hdkluZGV4KGJ1aWxkTmF2TW9kZWwoZGF0YVNvdXJjZSwgcGx1Z2luKSkpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldCBkYXRhIHNvdXJjZSBieSB1aWQgb3IgaWQsIGlmIG9sZCBpZCBkZXRlY3RlZCBoYW5kbGVzIHJlZGlyZWN0XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhU291cmNlVXNpbmdVaWRPcklkKHVpZDogc3RyaW5nIHwgbnVtYmVyKTogUHJvbWlzZTxEYXRhU291cmNlU2V0dGluZ3M+IHtcbiAgLy8gVHJ5IGZpcnN0IHdpdGggdWlkIGFwaVxuICB0cnkge1xuICAgIGNvbnN0IGJ5VWlkID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKS5mZXRjaDxEYXRhU291cmNlU2V0dGluZ3M+KHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgdXJsOiBgL2FwaS9kYXRhc291cmNlcy91aWQvJHt1aWR9YCxcbiAgICAgICAgcGFyYW1zOiBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpLFxuICAgICAgICBzaG93RXJyb3JBbGVydDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAoYnlVaWQub2spIHtcbiAgICAgIHJldHVybiBieVVpZC5kYXRhO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBsb29rdXAgZGF0YSBzb3VyY2UgYnkgdWlkJywgZXJyKTtcbiAgfVxuXG4gIC8vIHRyeSBsb29rdXAgYnkgb2xkIGRiIGlkXG4gIGNvbnN0IGlkID0gdHlwZW9mIHVpZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludCh1aWQsIDEwKSA6IHVpZDtcbiAgaWYgKCFOdW1iZXIuaXNOYU4oaWQpKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpLmZldGNoPERhdGFTb3VyY2VTZXR0aW5ncz4oe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6IGAvYXBpL2RhdGFzb3VyY2VzLyR7aWR9YCxcbiAgICAgICAgcGFyYW1zOiBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpLFxuICAgICAgICBzaG93RXJyb3JBbGVydDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBJZiB0aGUgdWlkIGlzIGEgbnVtYmVyLCB0aGVuIHRoaXMgaXMgYSByZWZyZXNoIG9uIG9uZSBvZiB0aGUgc2V0dGluZ3MgdGFic1xuICAgIC8vIGFuZCB3ZSBjYW4gcmV0dXJuIHRoZSByZXNwb25zZSBkYXRhXG4gICAgaWYgKHJlc3BvbnNlLm9rICYmIHR5cGVvZiB1aWQgPT09ICdudW1iZXInICYmIHJlc3BvbnNlLmRhdGEuaWQgPT09IHVpZCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgLy8gTm90IGlkZWFsIHRvIGRvIGEgZnVsbCBwYWdlIHJlbG9hZCBoZXJlIGJ1dCBzbyB0cmlja3kgdG8gaGFuZGxlIHRoaXNcbiAgICAvLyBvdGhlcndpc2UgV2UgY2FuIHVwZGF0ZSB0aGUgbG9jYXRpb24gdXNpbmcgcmVhY3Qgcm91dGVyLCBidXQgbmVlZCB0b1xuICAgIC8vIGZ1bGx5IHJlbG9hZCB0aGUgcm91dGUgYXMgdGhlIG5hdiBtb2RlbCBwYWdlIGluZGV4IGlzIG5vdCBtYXRjaGluZyB3aXRoXG4gICAgLy8gdGhlIHVybCBpbiB0aGF0IGNhc2UuIEFuZCByZWFjdCByb3V0ZXIgaGFzIG5vIHdheSB0byB1bm1vdW50IHJlbW91bnQgYVxuICAgIC8vIHJvdXRlXG4gICAgaWYgKHJlc3BvbnNlLm9rICYmIHJlc3BvbnNlLmRhdGEuaWQudG9TdHJpbmcoKSA9PT0gdWlkKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uVXRpbC5hc3N1cmVCYXNlVXJsKGAvZGF0YXNvdXJjZXMvZWRpdC8ke3Jlc3BvbnNlLmRhdGEudWlkfWApO1xuICAgICAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VTZXR0aW5nczsgLy8gYXZvaWRzIGZsYXNoaW5nIGFuIGVycm9yXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGRhdGEgc291cmNlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXRhU291cmNlKHBsdWdpbjogRGF0YVNvdXJjZVBsdWdpbk1ldGEpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZERhdGFTb3VyY2VzKCkpO1xuXG4gICAgY29uc3QgZGF0YVNvdXJjZXMgPSBnZXRTdG9yZSgpLmRhdGFTb3VyY2VzLmRhdGFTb3VyY2VzO1xuXG4gICAgY29uc3QgbmV3SW5zdGFuY2UgPSB7XG4gICAgICBuYW1lOiBwbHVnaW4ubmFtZSxcbiAgICAgIHR5cGU6IHBsdWdpbi5pZCxcbiAgICAgIGFjY2VzczogJ3Byb3h5JyxcbiAgICAgIGlzRGVmYXVsdDogZGF0YVNvdXJjZXMubGVuZ3RoID09PSAwLFxuICAgIH07XG5cbiAgICBpZiAobmFtZUV4aXRzKGRhdGFTb3VyY2VzLCBuZXdJbnN0YW5jZS5uYW1lKSkge1xuICAgICAgbmV3SW5zdGFuY2UubmFtZSA9IGZpbmROZXdOYW1lKGRhdGFTb3VyY2VzLCBuZXdJbnN0YW5jZS5uYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9kYXRhc291cmNlcycsIG5ld0luc3RhbmNlKTtcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG5cbiAgICBhd2FpdCBjb250ZXh0U3J2LmZldGNoVXNlclBlcm1pc3Npb25zKCk7XG5cbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaChgL2RhdGFzb3VyY2VzL2VkaXQvJHtyZXN1bHQuZGF0YXNvdXJjZS51aWR9YCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZVBsdWdpbnMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZVBsdWdpbnNMb2FkKCkpO1xuICAgIGNvbnN0IHBsdWdpbnMgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL3BsdWdpbnMnLCB7IGVuYWJsZWQ6IDEsIHR5cGU6ICdkYXRhc291cmNlJyB9KTtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYnVpbGRDYXRlZ29yaWVzKHBsdWdpbnMpO1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkKHsgcGx1Z2lucywgY2F0ZWdvcmllcyB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEYXRhU291cmNlKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvZGF0YXNvdXJjZXMvJHtkYXRhU291cmNlLmlkfWAsIGRhdGFTb3VyY2UpOyAvLyBieSBVSUQgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGxvYWREYXRhU291cmNlKGRhdGFTb3VyY2UudWlkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVEYXRhU291cmNlKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gZ2V0U3RvcmUoKS5kYXRhU291cmNlcy5kYXRhU291cmNlO1xuXG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS9kYXRhc291cmNlcy8ke2RhdGFTb3VyY2UuaWR9YCk7XG4gICAgYXdhaXQgZ2V0RGF0YXNvdXJjZVNydigpLnJlbG9hZCgpO1xuXG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9kYXRhc291cmNlcycpO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgSXRlbVdpdGhOYW1lIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUV4aXRzKGRhdGFTb3VyY2VzOiBJdGVtV2l0aE5hbWVbXSwgbmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiAoXG4gICAgZGF0YVNvdXJjZXMuZmlsdGVyKChkYXRhU291cmNlKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YVNvdXJjZS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9KS5sZW5ndGggPiAwXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTmV3TmFtZShkYXRhU291cmNlczogSXRlbVdpdGhOYW1lW10sIG5hbWU6IHN0cmluZykge1xuICAvLyBOZWVkIHRvIGxvb3AgdGhyb3VnaCBjdXJyZW50IGRhdGEgc291cmNlcyB0byBtYWtlIHN1cmVcbiAgLy8gdGhlIG5hbWUgZG9lc24ndCBleGlzdFxuICB3aGlsZSAobmFtZUV4aXRzKGRhdGFTb3VyY2VzLCBuYW1lKSkge1xuICAgIC8vIElmIHRoZXJlJ3MgYSBkdXBsaWNhdGUgbmFtZSB0aGF0IGRvZXNuJ3QgZW5kIHdpdGggJy14J1xuICAgIC8vIHdlIGNhbiBhZGQgLTEgdG8gdGhlIG5hbWUgYW5kIGJlIGRvbmUuXG4gICAgaWYgKCFuYW1lSGFzU3VmZml4KG5hbWUpKSB7XG4gICAgICBuYW1lID0gYCR7bmFtZX0tMWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIHRoZXJlJ3MgYSBkdXBsaWNhdGUgbmFtZSB0aGF0IGVuZHMgd2l0aCAnLXgnXG4gICAgICAvLyB3ZSBjYW4gdHJ5IHRvIGluY3JlbWVudCB0aGUgbGFzdCBkaWdpdCB1bnRpbCB0aGUgbmFtZSBpcyB1bmlxdWVcblxuICAgICAgLy8gcmVtb3ZlIHRoZSAneCcgcGFydCBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgbnVtYmVyXG4gICAgICBuYW1lID0gYCR7Z2V0TmV3TmFtZShuYW1lKX0ke2luY3JlbWVudExhc3REaWdpdChnZXRMYXN0RGlnaXQobmFtZSkpfWA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIG5hbWVIYXNTdWZmaXgobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLmVuZHNXaXRoKCctJywgbmFtZS5sZW5ndGggLSAxKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdERpZ2l0KG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gcGFyc2VJbnQobmFtZS5zbGljZSgtMSksIDEwKTtcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50TGFzdERpZ2l0KGRpZ2l0OiBudW1iZXIpIHtcbiAgcmV0dXJuIGlzTmFOKGRpZ2l0KSA/IDEgOiBkaWdpdCArIDE7XG59XG5cbmZ1bmN0aW9uIGdldE5ld05hbWUobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLnNsaWNlKDAsIG5hbWUubGVuZ3RoIC0gMSk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgUGx1Z2luVHlwZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnLCBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ2F0ZWdvcmllcyhwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdKTogRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5W10ge1xuICBjb25zdCBjYXRlZ29yaWVzOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXSA9IFtcbiAgICB7IGlkOiAndHNkYicsIHRpdGxlOiAnVGltZSBzZXJpZXMgZGF0YWJhc2VzJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnbG9nZ2luZycsIHRpdGxlOiAnTG9nZ2luZyAmIGRvY3VtZW50IGRhdGFiYXNlcycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ3RyYWNpbmcnLCB0aXRsZTogJ0Rpc3RyaWJ1dGVkIHRyYWNpbmcnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdzcWwnLCB0aXRsZTogJ1NRTCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2Nsb3VkJywgdGl0bGU6ICdDbG91ZCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2VudGVycHJpc2UnLCB0aXRsZTogJ0VudGVycHJpc2UgcGx1Z2lucycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2lvdCcsIHRpdGxlOiAnSW5kdXN0cmlhbCAmIElvVCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ290aGVyJywgdGl0bGU6ICdPdGhlcnMnLCBwbHVnaW5zOiBbXSB9LFxuICBdLmZpbHRlcigoaXRlbSkgPT4gaXRlbSk7XG5cbiAgY29uc3QgY2F0ZWdvcnlJbmRleDogUmVjb3JkPHN0cmluZywgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5PiA9IHt9O1xuICBjb25zdCBwbHVnaW5JbmRleDogUmVjb3JkPHN0cmluZywgRGF0YVNvdXJjZVBsdWdpbk1ldGE+ID0ge307XG4gIGNvbnN0IGVudGVycHJpc2VQbHVnaW5zID0gZ2V0RW50ZXJwcmlzZVBoYW50b21QbHVnaW5zKCk7XG5cbiAgLy8gYnVpbGQgaW5kaWNlc1xuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBjYXRlZ29yeUluZGV4W2NhdGVnb3J5LmlkXSA9IGNhdGVnb3J5O1xuICB9XG5cbiAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgIGNvbnN0IGVudGVycHJpc2VQbHVnaW4gPSBlbnRlcnByaXNlUGx1Z2lucy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwbHVnaW4uaWQpO1xuICAgIC8vIEZvcmNlIGNhdGVnb3J5IGZvciBlbnRlcnByaXNlIHBsdWdpbnNcbiAgICBpZiAocGx1Z2luLmVudGVycHJpc2UgfHwgZW50ZXJwcmlzZVBsdWdpbikge1xuICAgICAgcGx1Z2luLmNhdGVnb3J5ID0gJ2VudGVycHJpc2UnO1xuICAgICAgcGx1Z2luLnVubGljZW5zZWQgPSAhZmVhdHVyZUVuYWJsZWQoJ2VudGVycHJpc2UucGx1Z2lucycpO1xuICAgICAgcGx1Z2luLmluZm8ubGlua3MgPSBlbnRlcnByaXNlUGx1Z2luPy5pbmZvPy5saW5rcyB8fCBwbHVnaW4uaW5mby5saW5rcztcbiAgICB9XG5cbiAgICAvLyBGaXggbGluayBuYW1lXG4gICAgaWYgKHBsdWdpbi5pbmZvLmxpbmtzKSB7XG4gICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgcGx1Z2luLmluZm8ubGlua3MpIHtcbiAgICAgICAgbGluay5uYW1lID0gJ0xlYXJuIG1vcmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwbHVnaW4uY2F0ZWdvcnkpIHx8IGNhdGVnb3J5SW5kZXhbJ290aGVyJ107XG4gICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgLy8gYWRkIHRvIHBsdWdpbiBpbmRleFxuICAgIHBsdWdpbkluZGV4W3BsdWdpbi5pZF0gPSBwbHVnaW47XG4gIH1cblxuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAvLyBhZGQgcGhhbnRvbSBwbHVnaW5cbiAgICBpZiAoY2F0ZWdvcnkuaWQgPT09ICdjbG91ZCcpIHtcbiAgICAgIGNhdGVnb3J5LnBsdWdpbnMucHVzaChnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luKCkpO1xuICAgIH1cblxuICAgIC8vIGFkZCBwaGFudG9tIHBsdWdpbnNcbiAgICBpZiAoY2F0ZWdvcnkuaWQgPT09ICdlbnRlcnByaXNlJykge1xuICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgZW50ZXJwcmlzZVBsdWdpbnMpIHtcbiAgICAgICAgaWYgKCFwbHVnaW5JbmRleFtwbHVnaW4uaWRdKSB7XG4gICAgICAgICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0UGx1Z2lucyhjYXRlZ29yeS5wbHVnaW5zKTtcbiAgfVxuXG4gIC8vIE9ubHkgc2hvdyBjYXRlZ29yaWVzIHdpdGggcGx1Z2luc1xuICByZXR1cm4gY2F0ZWdvcmllcy5maWx0ZXIoKGMpID0+IGMucGx1Z2lucy5sZW5ndGggPiAwKTtcbn1cblxuZnVuY3Rpb24gc29ydFBsdWdpbnMocGx1Z2luczogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSkge1xuICBjb25zdCBzb3J0aW5nUnVsZXM6IHsgW2lkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICBwcm9tZXRoZXVzOiAxMDAsXG4gICAgZ3JhcGhpdGU6IDk1LFxuICAgIGxva2k6IDkwLFxuICAgIG15c3FsOiA4MCxcbiAgICBqYWVnZXI6IDEwMCxcbiAgICBwb3N0Z3JlczogNzksXG4gICAgZ2Nsb3VkOiAtMSxcbiAgfTtcblxuICBwbHVnaW5zLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBhU29ydCA9IHNvcnRpbmdSdWxlc1thLmlkXSB8fCAwO1xuICAgIGNvbnN0IGJTb3J0ID0gc29ydGluZ1J1bGVzW2IuaWRdIHx8IDA7XG4gICAgaWYgKGFTb3J0ID4gYlNvcnQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGFTb3J0IDwgYlNvcnQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiBhLm5hbWUgPiBiLm5hbWUgPyAtMSA6IDE7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMoKTogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSB7XG4gIHJldHVybiBbXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc3BsdW5rLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NwbHVuaycsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBTcGx1bmsgbG9ncycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc3BsdW5rX2xvZ29fMTI4LnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtb3JhY2xlLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ09yYWNsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBPcmFjbGUgU1FMJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9vcmFjbGUucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1keW5hdHJhY2UtZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnRHluYXRyYWNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIER5bmF0cmFjZSBkYXRhJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9keW5hdHJhY2UucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zZXJ2aWNlbm93LWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXJ2aWNlTm93IGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU2VydmljZU5vdycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2VydmljZW5vdy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWRhdGFkb2ctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0RhdGFEb2cgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdEYXRhRG9nJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9kYXRhZG9nLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtbmV3cmVsaWMtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ05ldyBSZWxpYyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ05ldyBSZWxpYycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvbmV3cmVsaWMuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1tb25nb2RiLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdNb25nb0RCIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnTW9uZ29EQicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvbW9uZ29kYi5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNub3dmbGFrZS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU25vd2ZsYWtlIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU25vd2ZsYWtlJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zbm93Zmxha2Uuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS13YXZlZnJvbnQtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1dhdmVmcm9udCBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1dhdmVmcm9udCcsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvd2F2ZWZyb250LnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2Rsb3BlczctYXBwZHluYW1pY3MtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcER5bmFtaWNzIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnQXBwRHluYW1pY3MnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2FwcGR5bmFtaWNzLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2FwaGFuYS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU0FQIEhBTkHCriBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NBUCBIQU5Bwq4nLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NhcF9oYW5hLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtaG9uZXljb21iLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdIb25leWNvbWIgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0hvbmV5Y29tYicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvaG9uZXljb21iLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2FsZXNmb3JjZS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2FsZXNmb3JjZSBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU2FsZXNmb3JjZScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2FsZXNmb3JjZS5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWppcmEtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ppcmEgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0ppcmEnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2ppcmFfbG9nby5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWdpdGxhYi1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnR2l0TGFiIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdHaXRMYWInLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2dpdGxhYi5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNwbHVuay1tb25pdG9yaW5nLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTaWduYWxGeCBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU3BsdW5rIEluZnJhc3RydWN0dXJlIE1vbml0b3JpbmcnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NpZ25hbGZ4LWxvZ28uc3ZnJyxcbiAgICB9KSxcbiAgXTtcbn1cblxuZnVuY3Rpb24gZ2V0R3JhZmFuYUNsb3VkUGhhbnRvbVBsdWdpbigpOiBEYXRhU291cmNlUGx1Z2luTWV0YSB7XG4gIHJldHVybiB7XG4gICAgaWQ6ICdnY2xvdWQnLFxuICAgIG5hbWU6ICdHcmFmYW5hIENsb3VkJyxcbiAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgbW9kdWxlOiAncGhhbnRvbScsXG4gICAgYmFzZVVybDogJycsXG4gICAgaW5mbzoge1xuICAgICAgZGVzY3JpcHRpb246ICdIb3N0ZWQgR3JhcGhpdGUsIFByb21ldGhldXMsIGFuZCBMb2tpJyxcbiAgICAgIGxvZ29zOiB7IHNtYWxsOiAncHVibGljL2ltZy9ncmFmYW5hX2ljb24uc3ZnJywgbGFyZ2U6ICdhc2QnIH0sXG4gICAgICBhdXRob3I6IHsgbmFtZTogJ0dyYWZhbmEgTGFicycgfSxcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL2dyYWZhbmEuY29tL3Byb2R1Y3RzL2Nsb3VkLycsXG4gICAgICAgICAgbmFtZTogJ0xlYXJuIG1vcmUnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgIHVwZGF0ZWQ6ICcyMDE5LTA1LTEwJyxcbiAgICAgIHZlcnNpb246ICcxLjAuMCcsXG4gICAgfSxcbiAgfTtcbn1cblxuaW50ZXJmYWNlIEdldFBoYW50b21QbHVnaW5PcHRpb25zIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWdVcmw6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0UGhhbnRvbVBsdWdpbihvcHRpb25zOiBHZXRQaGFudG9tUGx1Z2luT3B0aW9ucyk6IERhdGFTb3VyY2VQbHVnaW5NZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogb3B0aW9ucy5pZCxcbiAgICBuYW1lOiBvcHRpb25zLm5hbWUsXG4gICAgdHlwZTogUGx1Z2luVHlwZS5kYXRhc291cmNlLFxuICAgIG1vZHVsZTogJ3BoYW50b20nLFxuICAgIGJhc2VVcmw6ICcnLFxuICAgIGluZm86IHtcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgICAgbG9nb3M6IHsgc21hbGw6IG9wdGlvbnMuaW1nVXJsLCBsYXJnZTogb3B0aW9ucy5pbWdVcmwgfSxcbiAgICAgIGF1dGhvcjogeyBuYW1lOiAnR3JhZmFuYSBMYWJzJyB9LFxuICAgICAgbGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogY29uZmlnLnBsdWdpbkNhdGFsb2dVUkwgKyBvcHRpb25zLmlkLFxuICAgICAgICAgIG5hbWU6ICdJbnN0YWxsIG5vdycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgdXBkYXRlZDogJzIwMTktMDUtMTAnLFxuICAgICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVNldHRpbmdzLCBQbHVnaW5UeXBlLCBQbHVnaW5JbmNsdWRlLCBOYXZNb2RlbCwgTmF2TW9kZWxJdGVtIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUHJvQmFkZ2UgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1VwZ3JhZGUvUHJvQmFkZ2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGhpZ2hsaWdodFRyaWFsIH0gZnJvbSAnLi4vLi4vYWRtaW4vdXRpbHMnO1xuaW1wb3J0IHsgR2VuZXJpY0RhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICcuLi9zZXR0aW5ncy9QbHVnaW5TZXR0aW5ncyc7XG5cbmNvbnN0IGxvYWRpbmdEU1R5cGUgPSAnTG9hZGluZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE5hdk1vZGVsKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncywgcGx1Z2luOiBHZW5lcmljRGF0YVNvdXJjZVBsdWdpbik6IE5hdk1vZGVsSXRlbSB7XG4gIGNvbnN0IHBsdWdpbk1ldGEgPSBwbHVnaW4ubWV0YTtcbiAgY29uc3QgaGlnaGxpZ2h0c0VuYWJsZWQgPSBjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHM7XG4gIGNvbnN0IG5hdk1vZGVsOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgaW1nOiBwbHVnaW5NZXRhLmluZm8ubG9nb3MubGFyZ2UsXG4gICAgaWQ6ICdkYXRhc291cmNlLScgKyBkYXRhU291cmNlLnVpZCxcbiAgICBzdWJUaXRsZTogYFR5cGU6ICR7cGx1Z2luTWV0YS5uYW1lfWAsXG4gICAgdXJsOiAnJyxcbiAgICB0ZXh0OiBkYXRhU291cmNlLm5hbWUsXG4gICAgYnJlYWRjcnVtYnM6IFt7IHRpdGxlOiAnRGF0YSBTb3VyY2VzJywgdXJsOiAnZGF0YXNvdXJjZXMnIH1dLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGljb246ICdzbGlkZXJzLXYtYWx0JyxcbiAgICAgICAgaWQ6IGBkYXRhc291cmNlLXNldHRpbmdzLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICAgICAgdGV4dDogJ1NldHRpbmdzJyxcbiAgICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9gLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGlmIChwbHVnaW4uY29uZmlnUGFnZXMpIHtcbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcGx1Z2luLmNvbmZpZ1BhZ2VzKSB7XG4gICAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIHRleHQ6IHBhZ2UudGl0bGUsXG4gICAgICAgIGljb246IHBhZ2UuaWNvbixcbiAgICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS8/cGFnZT0ke3BhZ2UuaWR9YCxcbiAgICAgICAgaWQ6IGBkYXRhc291cmNlLXBhZ2UtJHtwYWdlLmlkfWAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAocGx1Z2luTWV0YS5pbmNsdWRlcyAmJiBoYXNEYXNoYm9hcmRzKHBsdWdpbk1ldGEuaW5jbHVkZXMpICYmIGNvbnRleHRTcnYuaGFzUm9sZSgnQWRtaW4nKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBpY29uOiAnYXBwcycsXG4gICAgICBpZDogYGRhdGFzb3VyY2UtZGFzaGJvYXJkcy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgICB0ZXh0OiAnRGFzaGJvYXJkcycsXG4gICAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2Rhc2hib2FyZHNgLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaXNMb2FkaW5nTmF2ID0gZGF0YVNvdXJjZS50eXBlID09PSBsb2FkaW5nRFNUeXBlO1xuXG4gIGNvbnN0IHBlcm1pc3Npb25zRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1kYXRhLXNvdXJjZS1wZXJtaXNzaW9ucy1iYWRnZSc7XG4gIGNvbnN0IGRzUGVybWlzc2lvbnM6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdsb2NrJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtcGVybWlzc2lvbnMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdQZXJtaXNzaW9ucycsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9wZXJtaXNzaW9uc2AsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGRzUGVybWlzc2lvbnMudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IHBlcm1pc3Npb25zRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2RzcGVybWlzc2lvbnMnKSkge1xuICAgIGlmIChjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc1Blcm1pc3Npb25zUmVhZCkpIHtcbiAgICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGRzUGVybWlzc2lvbnMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uZHNQZXJtaXNzaW9ucyxcbiAgICAgIHVybDogZHNQZXJtaXNzaW9ucy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogcGVybWlzc2lvbnNFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBhbmFseXRpY3NFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLWRhdGEtc291cmNlLWluc2lnaHRzLWJhZGdlJztcbiAgY29uc3QgYW5hbHl0aWNzOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnaW5mby1jaXJjbGUnLFxuICAgIGlkOiBgZGF0YXNvdXJjZS1pbnNpZ2h0cy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgdGV4dDogJ0luc2lnaHRzJyxcbiAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2luc2lnaHRzYCxcbiAgfTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgYW5hbHl0aWNzLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBhbmFseXRpY3NFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnYW5hbHl0aWNzJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChhbmFseXRpY3MpO1xuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5hbmFseXRpY3MsXG4gICAgICB1cmw6IGFuYWx5dGljcy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogYW5hbHl0aWNzRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY2FjaGluZ0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtcXVlcnktY2FjaGluZy1iYWRnZSc7XG5cbiAgY29uc3QgY2FjaGluZzogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2RhdGFiYXNlJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtY2FjaGUtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdDYWNoZScsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9jYWNoZWAsXG4gICAgaGlkZUZyb21UYWJzOiAhcGx1Z2luTWV0YS5pc0JhY2tlbmQgfHwgIWNvbmZpZy5jYWNoaW5nLmVuYWJsZWQsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGNhY2hpbmcudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGNhY2hpbmdFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnY2FjaGluZycpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goY2FjaGluZyk7XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmNhY2hpbmcsXG4gICAgICB1cmw6IGNhY2hpbmcudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGNhY2hpbmdFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmF2TW9kZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhU291cmNlTmF2KG1haW46IE5hdk1vZGVsSXRlbSwgcGFnZU5hbWU6IHN0cmluZyk6IE5hdk1vZGVsIHtcbiAgbGV0IG5vZGU6IE5hdk1vZGVsSXRlbSA9IHsgdGV4dDogJycgfTtcblxuICAvLyBmaW5kIGFjdGl2ZSBwYWdlXG4gIGZvciAoY29uc3QgY2hpbGQgb2YgbWFpbi5jaGlsZHJlbiEpIHtcbiAgICBpZiAoY2hpbGQuaWQhLmluZGV4T2YocGFnZU5hbWUpID4gMCkge1xuICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIG5vZGUgPSBjaGlsZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWFpbjogbWFpbixcbiAgICBub2RlOiBub2RlISxcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhU291cmNlTG9hZGluZ05hdihwYWdlTmFtZTogc3RyaW5nKTogTmF2TW9kZWwge1xuICBjb25zdCBtYWluID0gYnVpbGROYXZNb2RlbChcbiAgICB7XG4gICAgICBhY2Nlc3M6ICcnLFxuICAgICAgYmFzaWNBdXRoOiBmYWxzZSxcbiAgICAgIGJhc2ljQXV0aFVzZXI6ICcnLFxuICAgICAgYmFzaWNBdXRoUGFzc3dvcmQ6ICcnLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAgIGRhdGFiYXNlOiAnJyxcbiAgICAgIGlkOiAxLFxuICAgICAgdWlkOiAneCcsXG4gICAgICBpc0RlZmF1bHQ6IGZhbHNlLFxuICAgICAganNvbkRhdGE6IHsgYXV0aFR5cGU6ICdjcmVkZW50aWFscycsIGRlZmF1bHRSZWdpb246ICdldS13ZXN0LTInIH0sXG4gICAgICBuYW1lOiAnTG9hZGluZycsXG4gICAgICBvcmdJZDogMSxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgIHR5cGU6IGxvYWRpbmdEU1R5cGUsXG4gICAgICB0eXBlTmFtZTogbG9hZGluZ0RTVHlwZSxcbiAgICAgIHR5cGVMb2dvVXJsOiAncHVibGljL2ltZy9pY24tZGF0YXNvdXJjZS5zdmcnLFxuICAgICAgdXJsOiAnJyxcbiAgICAgIHVzZXI6ICcnLFxuICAgICAgc2VjdXJlSnNvbkZpZWxkczoge30sXG4gICAgfSxcbiAgICB7XG4gICAgICBtZXRhOiB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICBsaW5rczogW3sgbmFtZTogJycsIHVybDogJycgfV0sXG4gICAgICAgICAgbG9nb3M6IHtcbiAgICAgICAgICAgIGxhcmdlOiAnJyxcbiAgICAgICAgICAgIHNtYWxsOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgICAgICB1cGRhdGVkOiAnJyxcbiAgICAgICAgICB2ZXJzaW9uOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW5jbHVkZXM6IFtdLFxuICAgICAgICBtb2R1bGU6ICcnLFxuICAgICAgICBiYXNlVXJsOiAnJyxcbiAgICAgIH0sXG4gICAgfSBhcyBhbnlcbiAgKTtcblxuICByZXR1cm4gZ2V0RGF0YVNvdXJjZU5hdihtYWluLCBwYWdlTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0Rhc2hib2FyZHMoaW5jbHVkZXM6IFBsdWdpbkluY2x1ZGVbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGluY2x1ZGVzLmZpbmQoKGluY2x1ZGUpID0+IHtcbiAgICAgIHJldHVybiBpbmNsdWRlLnR5cGUgPT09ICdkYXNoYm9hcmQnO1xuICAgIH0pICE9PSB1bmRlZmluZWRcbiAgKTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBEYXRhU291cmNlU2V0dGluZ3MsIFVybFF1ZXJ5VmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZXNTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2RhdGFzb3VyY2VzJztcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdGF0ZS5zZWFyY2hRdWVyeSwgJ2knKTtcblxuICByZXR1cm4gc3RhdGUuZGF0YVNvdXJjZXMuZmlsdGVyKChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdChkYXRhU291cmNlLm5hbWUpIHx8IHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS5kYXRhYmFzZSkgfHwgcmVnZXgudGVzdChkYXRhU291cmNlLnR5cGUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlUGx1Z2lucyA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4ge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3RhdGUuZGF0YVNvdXJjZVR5cGVTZWFyY2hRdWVyeSwgJ2knKTtcblxuICByZXR1cm4gc3RhdGUucGx1Z2lucy5maWx0ZXIoKHR5cGU6IERhdGFTb3VyY2VQbHVnaW5NZXRhKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QodHlwZS5uYW1lKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSwgZGF0YVNvdXJjZUlkOiBVcmxRdWVyeVZhbHVlKTogRGF0YVNvdXJjZVNldHRpbmdzID0+IHtcbiAgaWYgKHN0YXRlLmRhdGFTb3VyY2UudWlkID09PSBkYXRhU291cmNlSWQpIHtcbiAgICByZXR1cm4gc3RhdGUuZGF0YVNvdXJjZTtcbiAgfVxuICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVNldHRpbmdzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VNZXRhID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlLCB0eXBlOiBzdHJpbmcpOiBEYXRhU291cmNlUGx1Z2luTWV0YSA9PiB7XG4gIGlmIChzdGF0ZS5kYXRhU291cmNlTWV0YS5pZCA9PT0gdHlwZSkge1xuICAgIHJldHVybiBzdGF0ZS5kYXRhU291cmNlTWV0YTtcbiAgfVxuXG4gIHJldHVybiB7fSBhcyBEYXRhU291cmNlUGx1Z2luTWV0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5ID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5zZWFyY2hRdWVyeTtcbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlc0xheW91dE1vZGUgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLmxheW91dE1vZGU7XG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNDb3VudCA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUuZGF0YVNvdXJjZXNDb3VudDtcbiIsIi8vIExpYnJhcmllc1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IGNsb25lRGVlcCwgZXh0ZW5kIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQbHVnaW5NZXRhLCBBcHBQbHVnaW4sIGRlcHJlY2F0aW9uV2FybmluZyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQW5ndWxhckNvbXBvbmVudCwgZ2V0QW5ndWxhckxvYWRlciwgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBhcHA6IEFwcFBsdWdpbjtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgYW5ndWxhckN0cmw6IEFuZ3VsYXJDb21wb25lbnQgfCBudWxsO1xuICByZWZyZXNoOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBDb25maWdDdHJsV3JhcHBlciBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIC8vQHRzLWlnbm9yZVxuICBtb2RlbDogUGx1Z2luTWV0YTtcblxuICAvLyBOZWVkZWQgZm9yIGFuZ3VsYXIgc2NvcGVcbiAgcHJlVXBkYXRlSG9vayA9ICgpID0+IFByb21pc2UucmVzb2x2ZSgpO1xuICBwb3N0VXBkYXRlSG9vayA9ICgpID0+IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYW5ndWxhckN0cmw6IG51bGwsXG4gICAgICByZWZyZXNoOiAwLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBGb3JjZSBhIHJlbG9hZCBhZnRlciB0aGUgZmlyc3QgbW91bnQgLS0gaXMgdGhlcmUgYSBiZXR0ZXIgd2F5IHRvIGRvIHRoaXM/XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcmVmcmVzaDogdGhpcy5zdGF0ZS5yZWZyZXNoICsgMSB9KTtcbiAgICB9LCA1KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQgfHwgdGhpcy5zdGF0ZS5hbmd1bGFyQ3RybCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFNldCBhIGNvcHkgb2YgdGhlIG1ldGFcbiAgICB0aGlzLm1vZGVsID0gY2xvbmVEZWVwKHRoaXMucHJvcHMuYXBwLm1ldGEpO1xuXG4gICAgY29uc3QgbG9hZGVyID0gZ2V0QW5ndWxhckxvYWRlcigpO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gJzxwbHVnaW4tY29tcG9uZW50IHR5cGU9XCJhcHAtY29uZmlnLWN0cmxcIj48L3BsdWdpbi1jb21wb25lbnQ+JztcbiAgICBjb25zdCBzY29wZVByb3BzID0ge1xuICAgICAgY3RybDogdGhpcyxcbiAgICAgIC8vIHVzZWQgYnkgYW5ndWxhciBpbmplY3Rvck1vbmtleVBhdGNoIHRvIGRldGVjdCB0aGlzIHNjZW5hcmlvXG4gICAgICBpc0FwcENvbmZpZ0N0cmw6IHRydWUsXG4gICAgfTtcbiAgICBjb25zdCBhbmd1bGFyQ3RybCA9IGxvYWRlci5sb2FkKHRoaXMuZWxlbWVudCwgc2NvcGVQcm9wcywgdGVtcGxhdGUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFuZ3VsYXJDdHJsIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1vZGVsID0gdGhpcy5tb2RlbDtcblxuICAgIGNvbnN0IHdpdGhSaWdodE1hcmdpbiA9IGNzcyh7IG1hcmdpblJpZ2h0OiAnOHB4JyB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHJlZj17KGVsZW1lbnQpID0+ICh0aGlzLmVsZW1lbnQgPSBlbGVtZW50KX0gLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7bW9kZWwgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgeyFtb2RlbC5lbmFibGVkICYmIChcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuZW5hYmxlfSBjbGFzc05hbWU9e3dpdGhSaWdodE1hcmdpbn0+XG4gICAgICAgICAgICAgICAgRW5hYmxlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHttb2RlbC5lbmFibGVkICYmIChcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMudXBkYXRlfSBjbGFzc05hbWU9e3dpdGhSaWdodE1hcmdpbn0+XG4gICAgICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHttb2RlbC5lbmFibGVkICYmIChcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBvbkNsaWNrPXt0aGlzLmRpc2FibGV9IGNsYXNzTmFtZT17d2l0aFJpZ2h0TWFyZ2lufT5cbiAgICAgICAgICAgICAgICBEaXNhYmxlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIENvcGllZCBmcm9tIHBsdWdpbl9lZGl0X2N0cmxcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHVwZGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBwbHVnaW5JZCA9IHRoaXMubW9kZWwuaWQ7XG5cbiAgICB0aGlzLnByZVVwZGF0ZUhvb2soKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVDbWQgPSBleHRlbmQoXG4gICAgICAgICAge1xuICAgICAgICAgICAgZW5hYmxlZDogdGhpcy5tb2RlbC5lbmFibGVkLFxuICAgICAgICAgICAgcGlubmVkOiB0aGlzLm1vZGVsLnBpbm5lZCxcbiAgICAgICAgICAgIGpzb25EYXRhOiB0aGlzLm1vZGVsLmpzb25EYXRhLFxuICAgICAgICAgICAgc2VjdXJlSnNvbkRhdGE6IHRoaXMubW9kZWwuc2VjdXJlSnNvbkRhdGEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7fVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZ2V0QmFja2VuZFNydigpLnBvc3QoYC9hcGkvcGx1Z2lucy8ke3BsdWdpbklkfS9zZXR0aW5nc2AsIHVwZGF0ZUNtZCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4odGhpcy5wb3N0VXBkYXRlSG9vaylcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHNldFByZVVwZGF0ZUhvb2sgPSAoY2FsbGJhY2s6ICgpID0+IGFueSkgPT4ge1xuICAgIHRoaXMucHJlVXBkYXRlSG9vayA9IGNhbGxiYWNrO1xuICB9O1xuXG4gIHNldFBvc3RVcGRhdGVIb29rID0gKGNhbGxiYWNrOiAoKSA9PiBhbnkpID0+IHtcbiAgICB0aGlzLnBvc3RVcGRhdGVIb29rID0gY2FsbGJhY2s7XG4gIH07XG5cbiAgLy8gU3R1YiB0byBhdm9pZCB1bmtub3duIGZ1bmN0aW9uIGluIGxlZ2FjeSBjb2RlXG4gIGltcG9ydERhc2hib2FyZHMgPSAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgZGVwcmVjYXRpb25XYXJuaW5nKCdBcHBDb25maWcnLCAnaW1wb3J0RGFzaGJvYXJkcygpJyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuXG4gIGVuYWJsZSA9ICgpID0+IHtcbiAgICB0aGlzLm1vZGVsLmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMubW9kZWwucGlubmVkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9O1xuXG4gIGRpc2FibGUgPSAoKSA9PiB7XG4gICAgdGhpcy5tb2RlbC5lbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5tb2RlbC5waW5uZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGx1Z2luRXJyb3JDb2RlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxudHlwZSBQcm9wcyA9IHsgZXJyb3I/OiBQbHVnaW5FcnJvckNvZGUgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbkRpc2FibGVkQmFkZ2UoeyBlcnJvciB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHRvb2x0aXAgPSBlcnJvckNvZGVUb1Rvb2x0aXAoZXJyb3IpO1xuICByZXR1cm4gPEJhZGdlIGljb249XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiIHRleHQ9XCJEaXNhYmxlZFwiIGNvbG9yPVwicmVkXCIgdG9vbHRpcD17dG9vbHRpcH0gLz47XG59XG5cbmZ1bmN0aW9uIGVycm9yQ29kZVRvVG9vbHRpcChlcnJvcj86IFBsdWdpbkVycm9yQ29kZSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIHN3aXRjaCAoZXJyb3IpIHtcbiAgICBjYXNlIFBsdWdpbkVycm9yQ29kZS5tb2RpZmllZFNpZ25hdHVyZTpcbiAgICAgIHJldHVybiAnUGx1Z2luIGRpc2FibGVkIGR1ZSB0byBtb2RpZmllZCBjb250ZW50JztcbiAgICBjYXNlIFBsdWdpbkVycm9yQ29kZS5pbnZhbGlkU2lnbmF0dXJlOlxuICAgICAgcmV0dXJuICdQbHVnaW4gZGlzYWJsZWQgZHVlIHRvIGludmFsaWQgcGx1Z2luIHNpZ25hdHVyZSc7XG4gICAgY2FzZSBQbHVnaW5FcnJvckNvZGUubWlzc2luZ1NpZ25hdHVyZTpcbiAgICAgIHJldHVybiAnUGx1Z2luIGRpc2FibGVkIGR1ZSB0byBtaXNzaW5nIHBsdWdpbiBzaWduYXR1cmUnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYFBsdWdpbiBkaXNhYmxlZCBkdWUgdG8gdW5rb3duIGVycm9yOiAke2Vycm9yfWA7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCYWRnZSwgQnV0dG9uLCBIb3Jpem9udGFsR3JvdXAsIFBsdWdpblNpZ25hdHVyZUJhZGdlLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBnZXRCYWRnZUNvbG9yIH0gZnJvbSAnLi9zaGFyZWRTdHlsZXMnO1xuXG50eXBlIFByb3BzID0geyBwbHVnaW46IENhdGFsb2dQbHVnaW4gfTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbkVudGVycHJpc2VCYWRnZSh7IHBsdWdpbiB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IGN1c3RvbUJhZGdlU3R5bGVzID0gdXNlU3R5bGVzMihnZXRCYWRnZUNvbG9yKTtcbiAgY29uc3Qgb25DbGljayA9IChldjogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHdpbmRvdy5vcGVuKFxuICAgICAgYGh0dHBzOi8vZ3JhZmFuYS5jb20vZ3JhZmFuYS9wbHVnaW5zLyR7cGx1Z2luLmlkfT91dG1fc291cmNlPWdyYWZhbmFfY2F0YWxvZ19sZWFybl9tb3JlYCxcbiAgICAgICdfYmxhbmsnLFxuICAgICAgJ25vb3BlbmVyLG5vcmVmZXJyZXInXG4gICAgKTtcbiAgfTtcblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2VudGVycHJpc2UucGx1Z2lucycpKSB7XG4gICAgcmV0dXJuIDxCYWRnZSB0ZXh0PVwiRW50ZXJwcmlzZVwiIGNvbG9yPVwiYmx1ZVwiIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgPFBsdWdpblNpZ25hdHVyZUJhZGdlIHN0YXR1cz17cGx1Z2luLnNpZ25hdHVyZX0gLz5cbiAgICAgIDxCYWRnZSBpY29uPVwibG9ja1wiIGFyaWEtbGFiZWw9XCJsb2NrIGljb25cIiB0ZXh0PVwiRW50ZXJwcmlzZVwiIGNvbG9yPVwiYmx1ZVwiIGNsYXNzTmFtZT17Y3VzdG9tQmFkZ2VTdHlsZXN9IC8+XG4gICAgICA8QnV0dG9uIHNpemU9XCJzbVwiIGZpbGw9XCJ0ZXh0XCIgaWNvbj1cImV4dGVybmFsLWxpbmstYWx0XCIgb25DbGljaz17b25DbGlja30+XG4gICAgICAgIExlYXJuIG1vcmVcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQmFkZ2UsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IGdldEJhZGdlQ29sb3IgfSBmcm9tICcuL3NoYXJlZFN0eWxlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5JbnN0YWxsZWRCYWRnZSgpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBjdXN0b21CYWRnZVN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0QmFkZ2VDb2xvcik7XG4gIHJldHVybiA8QmFkZ2UgdGV4dD1cIkluc3RhbGxlZFwiIGNvbG9yPVwib3JhbmdlXCIgY2xhc3NOYW1lPXtjdXN0b21CYWRnZVN0eWxlc30gLz47XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgUGx1Z2luVHlwZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpblVwZGF0ZUF2YWlsYWJsZUJhZGdlKHsgcGx1Z2luIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICAvLyBDdXJyZW50bHkgcmVuZGVyZXIgcGx1Z2lucyBhcmUgbm90IHN1cHBvcnRlZCBieSB0aGUgY2F0YWxvZyBkdWUgdG8gY29tcGxpY2F0aW9ucyByZWxhdGVkIHRvIGluc3RhbGxhdGlvbiAvIHVwZGF0ZSAvIHVuaW5zdGFsbC5cbiAgaWYgKHBsdWdpbi5oYXNVcGRhdGUgJiYgIXBsdWdpbi5pc0NvcmUgJiYgcGx1Z2luLnR5cGUgIT09IFBsdWdpblR5cGUucmVuZGVyZXIpIHtcbiAgICByZXR1cm4gPHAgY2xhc3NOYW1lPXtzdHlsZXMuaGFzVXBkYXRlfT5VcGRhdGUgYXZhaWxhYmxlITwvcD47XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGhhc1VwZGF0ZTogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHlTbWFsbC5mb250U2l6ZX07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGAsXG4gIH07XG59O1xuIiwiZXhwb3J0IHsgUGx1Z2luRGlzYWJsZWRCYWRnZSB9IGZyb20gJy4vUGx1Z2luRGlzYWJsZWRCYWRnZSc7XG5leHBvcnQgeyBQbHVnaW5JbnN0YWxsZWRCYWRnZSB9IGZyb20gJy4vUGx1Z2luSW5zdGFsbEJhZGdlJztcbmV4cG9ydCB7IFBsdWdpbkVudGVycHJpc2VCYWRnZSB9IGZyb20gJy4vUGx1Z2luRW50ZXJwcmlzZUJhZGdlJztcbmV4cG9ydCB7IFBsdWdpblVwZGF0ZUF2YWlsYWJsZUJhZGdlIH0gZnJvbSAnLi9QbHVnaW5VcGRhdGVBdmFpbGFibGVCYWRnZSc7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBnZXRCYWRnZUNvbG9yID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiBjc3NgXG4gIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQucHJpbWFyeX07XG4gIGJvcmRlci1jb2xvcjogJHt0aGVtZS5jb2xvcnMuYm9yZGVyLnN0cm9uZ307XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGx1Z2luTWV0YSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyB1cGRhdGVQbHVnaW5TZXR0aW5ncyB9IGZyb20gJy4uLy4uL2FwaSc7XG5pbXBvcnQgeyB1c2VQbHVnaW5Db25maWcgfSBmcm9tICcuLi8uLi9ob29rcy91c2VQbHVnaW5Db25maWcnO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEdldFN0YXJ0ZWRXaXRoQXBwKHsgcGx1Z2luIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgdmFsdWU6IHBsdWdpbkNvbmZpZyB9ID0gdXNlUGx1Z2luQ29uZmlnKHBsdWdpbik7XG5cbiAgaWYgKCFwbHVnaW5Db25maWcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHsgZW5hYmxlZCwganNvbkRhdGEgfSA9IHBsdWdpbkNvbmZpZz8ubWV0YTtcblxuICBjb25zdCBlbmFibGUgPSAoKSA9PlxuICAgIHVwZGF0ZVBsdWdpblNldHRpbmdzQW5kUmVsb2FkKHBsdWdpbi5pZCwge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHBpbm5lZDogdHJ1ZSxcbiAgICAgIGpzb25EYXRhLFxuICAgIH0pO1xuXG4gIGNvbnN0IGRpc2FibGUgPSAoKSA9PiB7XG4gICAgdXBkYXRlUGx1Z2luU2V0dGluZ3NBbmRSZWxvYWQocGx1Z2luLmlkLCB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIHBpbm5lZDogZmFsc2UsXG4gICAgICBqc29uRGF0YSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWVuYWJsZWQgJiYgKFxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17ZW5hYmxlfT5cbiAgICAgICAgICBFbmFibGVcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuXG4gICAgICB7ZW5hYmxlZCAmJiAoXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlc3RydWN0aXZlXCIgb25DbGljaz17ZGlzYWJsZX0+XG4gICAgICAgICAgRGlzYWJsZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmNvbnN0IHVwZGF0ZVBsdWdpblNldHRpbmdzQW5kUmVsb2FkID0gYXN5bmMgKGlkOiBzdHJpbmcsIGRhdGE6IFBhcnRpYWw8UGx1Z2luTWV0YT4pID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB1cGRhdGVQbHVnaW5TZXR0aW5ncyhpZCwgZGF0YSk7XG5cbiAgICAvLyBSZWxvYWRpbmcgdGhlIHBhZ2UgYXMgdGhlIHBsdWdpbiBtZXRhIGNoYW5nZXMgbWFkZSBoZXJlIHdvdWxkbid0IGJlIHByb3BhZ2F0ZWQgdGhyb3VnaG91dCB0aGUgYXBwLlxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdoaWxlIHVwZGF0aW5nIHRoZSBwbHVnaW4nLCBlKTtcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgYWRkRGF0YVNvdXJjZSB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9hY3Rpb25zJztcblxuaW1wb3J0IHsgaXNEYXRhU291cmNlRWRpdG9yIH0gZnJvbSAnLi4vLi4vcGVybWlzc2lvbnMnO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEdldFN0YXJ0ZWRXaXRoRGF0YVNvdXJjZSh7IHBsdWdpbiB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB8IG51bGwge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG9uQWRkRGF0YVNvdXJjZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBtZXRhID0ge1xuICAgICAgbmFtZTogcGx1Z2luLm5hbWUsXG4gICAgICBpZDogcGx1Z2luLmlkLFxuICAgIH0gYXMgRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG5cbiAgICBkaXNwYXRjaChhZGREYXRhU291cmNlKG1ldGEpKTtcbiAgfSwgW2Rpc3BhdGNoLCBwbHVnaW5dKTtcblxuICBpZiAoIWlzRGF0YVNvdXJjZUVkaXRvcigpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtvbkFkZERhdGFTb3VyY2V9PlxuICAgICAgQ3JlYXRlIGEge3BsdWdpbi5uYW1lfSBkYXRhIHNvdXJjZVxuICAgIDwvQnV0dG9uPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGx1Z2luVHlwZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBHZXRTdGFydGVkV2l0aEFwcCB9IGZyb20gJy4vR2V0U3RhcnRlZFdpdGhBcHAnO1xuaW1wb3J0IHsgR2V0U3RhcnRlZFdpdGhEYXRhU291cmNlIH0gZnJvbSAnLi9HZXRTdGFydGVkV2l0aERhdGFTb3VyY2UnO1xuXG50eXBlIFByb3BzID0ge1xuICBwbHVnaW46IENhdGFsb2dQbHVnaW47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gR2V0U3RhcnRlZFdpdGhQbHVnaW4oeyBwbHVnaW4gfTogUHJvcHMpOiBSZWFjdEVsZW1lbnQgfCBudWxsIHtcbiAgaWYgKCFwbHVnaW4uaXNJbnN0YWxsZWQgfHwgcGx1Z2luLmlzRGlzYWJsZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN3aXRjaCAocGx1Z2luLnR5cGUpIHtcbiAgICBjYXNlIFBsdWdpblR5cGUuZGF0YXNvdXJjZTpcbiAgICAgIHJldHVybiA8R2V0U3RhcnRlZFdpdGhEYXRhU291cmNlIHBsdWdpbj17cGx1Z2lufSAvPjtcbiAgICBjYXNlIFBsdWdpblR5cGUuYXBwOlxuICAgICAgcmV0dXJuIDxHZXRTdGFydGVkV2l0aEFwcCBwbHVnaW49e3BsdWdpbn0gLz47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iLCJleHBvcnQgeyBHZXRTdGFydGVkV2l0aFBsdWdpbiB9IGZyb20gJy4vR2V0U3RhcnRlZFdpdGhQbHVnaW4nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwLCBMaW5rQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBnZXRFeHRlcm5hbE1hbmFnZUxpbmsgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IFBsdWdpblN0YXR1cyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxudHlwZSBFeHRlcm5hbGx5TWFuYWdlZEJ1dHRvblByb3BzID0ge1xuICBwbHVnaW5JZDogc3RyaW5nO1xuICBwbHVnaW5TdGF0dXM6IFBsdWdpblN0YXR1cztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBFeHRlcm5hbGx5TWFuYWdlZEJ1dHRvbih7IHBsdWdpbklkLCBwbHVnaW5TdGF0dXMgfTogRXh0ZXJuYWxseU1hbmFnZWRCdXR0b25Qcm9wcykge1xuICBjb25zdCBleHRlcm5hbE1hbmFnZUxpbmsgPSBgJHtnZXRFeHRlcm5hbE1hbmFnZUxpbmsocGx1Z2luSWQpfS8/dGFiPWluc3RhbGxhdGlvbmA7XG5cbiAgaWYgKHBsdWdpblN0YXR1cyA9PT0gUGx1Z2luU3RhdHVzLlVQREFURSkge1xuICAgIHJldHVybiAoXG4gICAgICA8SG9yaXpvbnRhbEdyb3VwIGhlaWdodD1cImF1dG9cIj5cbiAgICAgICAgPExpbmtCdXR0b24gaHJlZj17ZXh0ZXJuYWxNYW5hZ2VMaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgVXBkYXRlIHZpYSBncmFmYW5hLmNvbVxuICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgIDxMaW5rQnV0dG9uIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIGhyZWY9e2V4dGVybmFsTWFuYWdlTGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgIFVuaW5zdGFsbCB2aWEgZ3JhZmFuYS5jb21cbiAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChwbHVnaW5TdGF0dXMgPT09IFBsdWdpblN0YXR1cy5VTklOU1RBTEwpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmtCdXR0b24gdmFyaWFudD1cImRlc3RydWN0aXZlXCIgaHJlZj17ZXh0ZXJuYWxNYW5hZ2VMaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgIFVuaW5zdGFsbCB2aWEgZ3JhZmFuYS5jb21cbiAgICAgIDwvTGlua0J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGlua0J1dHRvbiBocmVmPXtleHRlcm5hbE1hbmFnZUxpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgIEluc3RhbGwgdmlhIGdyYWZhbmEuY29tXG4gICAgPC9MaW5rQnV0dG9uPlxuICApO1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFBsdWdpblR5cGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZywgZmVhdHVyZUVuYWJsZWQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEhvcml6b250YWxHcm91cCwgSWNvbiwgTGlua0J1dHRvbiwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgZ2V0RXh0ZXJuYWxNYW5hZ2VMaW5rLCBpc0luc3RhbGxDb250cm9sc0VuYWJsZWQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcbmltcG9ydCB7IGlzR3JhZmFuYUFkbWluIH0gZnJvbSAnLi4vLi4vcGVybWlzc2lvbnMnO1xuaW1wb3J0IHsgdXNlSXNSZW1vdGVQbHVnaW5zQXZhaWxhYmxlIH0gZnJvbSAnLi4vLi4vc3RhdGUvaG9va3MnO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiwgUGx1Z2luU3RhdHVzLCBWZXJzaW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBFeHRlcm5hbGx5TWFuYWdlZEJ1dHRvbiB9IGZyb20gJy4vRXh0ZXJuYWxseU1hbmFnZWRCdXR0b24nO1xuaW1wb3J0IHsgSW5zdGFsbENvbnRyb2xzQnV0dG9uIH0gZnJvbSAnLi9JbnN0YWxsQ29udHJvbHNCdXR0b24nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwbHVnaW46IENhdGFsb2dQbHVnaW47XG4gIGxhdGVzdENvbXBhdGlibGVWZXJzaW9uPzogVmVyc2lvbjtcbn1cblxuZXhwb3J0IGNvbnN0IEluc3RhbGxDb250cm9scyA9ICh7IHBsdWdpbiwgbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24gfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBpc0V4dGVybmFsbHlNYW5hZ2VkID0gY29uZmlnLnBsdWdpbkFkbWluRXh0ZXJuYWxNYW5hZ2VFbmFibGVkO1xuICBjb25zdCBoYXNQZXJtaXNzaW9uID0gaXNHcmFmYW5hQWRtaW4oKTtcbiAgY29uc3QgaXNSZW1vdGVQbHVnaW5zQXZhaWxhYmxlID0gdXNlSXNSZW1vdGVQbHVnaW5zQXZhaWxhYmxlKCk7XG4gIGNvbnN0IGlzQ29tcGF0aWJsZSA9IEJvb2xlYW4obGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24pO1xuICBjb25zdCBpc0luc3RhbGxDb250cm9sc0Rpc2FibGVkID0gcGx1Z2luLmlzQ29yZSB8fCBwbHVnaW4uaXNEaXNhYmxlZCB8fCAhaXNJbnN0YWxsQ29udHJvbHNFbmFibGVkKCk7XG5cbiAgY29uc3QgcGx1Z2luU3RhdHVzID0gcGx1Z2luLmlzSW5zdGFsbGVkXG4gICAgPyBwbHVnaW4uaGFzVXBkYXRlXG4gICAgICA/IFBsdWdpblN0YXR1cy5VUERBVEVcbiAgICAgIDogUGx1Z2luU3RhdHVzLlVOSU5TVEFMTFxuICAgIDogUGx1Z2luU3RhdHVzLklOU1RBTEw7XG5cbiAgaWYgKGlzSW5zdGFsbENvbnRyb2xzRGlzYWJsZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChwbHVnaW4udHlwZSA9PT0gUGx1Z2luVHlwZS5yZW5kZXJlcikge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PlJlbmRlcmVyIHBsdWdpbnMgY2Fubm90IGJlIG1hbmFnZWQgYnkgdGhlIFBsdWdpbiBDYXRhbG9nLjwvZGl2PjtcbiAgfVxuXG4gIGlmIChwbHVnaW4uaXNFbnRlcnByaXNlICYmICFmZWF0dXJlRW5hYmxlZCgnZW50ZXJwcmlzZS5wbHVnaW5zJykpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvcml6b250YWxHcm91cCBoZWlnaHQ9XCJhdXRvXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+Tm8gdmFsaWQgR3JhZmFuYSBFbnRlcnByaXNlIGxpY2Vuc2UgZGV0ZWN0ZWQuPC9zcGFuPlxuICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgIGhyZWY9e2Ake2dldEV4dGVybmFsTWFuYWdlTGluayhwbHVnaW4uaWQpfT91dG1fc291cmNlPWdyYWZhbmFfY2F0YWxvZ19sZWFybl9tb3JlYH1cbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgZmlsbD1cInRleHRcIlxuICAgICAgICAgIGljb249XCJleHRlcm5hbC1saW5rLWFsdFwiXG4gICAgICAgID5cbiAgICAgICAgICBMZWFybiBtb3JlXG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICk7XG4gIH1cblxuICBpZiAocGx1Z2luLmlzRGV2KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0+VGhpcyBpcyBhIGRldmVsb3BtZW50IGJ1aWxkIG9mIHRoZSBwbHVnaW4gYW5kIGNhbiYjMzk7dCBiZSB1bmluc3RhbGxlZC48L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaWYgKCFoYXNQZXJtaXNzaW9uICYmICFpc0V4dGVybmFsbHlNYW5hZ2VkKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byAke3BsdWdpblN0YXR1c30gdGhpcyBwbHVnaW4uYDtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfT57bWVzc2FnZX08L2Rpdj47XG4gIH1cblxuICBpZiAoIXBsdWdpbi5pc1B1Ymxpc2hlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2V9PlxuICAgICAgICA8SWNvbiBuYW1lPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIiAvPiBUaGlzIHBsdWdpbiBpcyBub3QgcHVibGlzaGVkIHRveycgJ31cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmdyYWZhbmEuY29tL3BsdWdpbnNcIiB0YXJnZXQ9XCJfX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxuICAgICAgICAgIGdyYWZhbmEuY29tL3BsdWdpbnNcbiAgICAgICAgPC9hPnsnICd9XG4gICAgICAgIGFuZCBjYW4mIzM5O3QgYmUgbWFuYWdlZCB2aWEgdGhlIGNhdGFsb2cuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaWYgKCFpc0NvbXBhdGlibGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfT5cbiAgICAgICAgPEljb24gbmFtZT1cImV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIgLz5cbiAgICAgICAgJm5ic3A7VGhpcyBwbHVnaW4gZG9lc24mIzM5O3Qgc3VwcG9ydCB5b3VyIHZlcnNpb24gb2YgR3JhZmFuYS5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAoaXNFeHRlcm5hbGx5TWFuYWdlZCkge1xuICAgIHJldHVybiA8RXh0ZXJuYWxseU1hbmFnZWRCdXR0b24gcGx1Z2luSWQ9e3BsdWdpbi5pZH0gcGx1Z2luU3RhdHVzPXtwbHVnaW5TdGF0dXN9IC8+O1xuICB9XG5cbiAgaWYgKCFpc1JlbW90ZVBsdWdpbnNBdmFpbGFibGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlfT5cbiAgICAgICAgVGhlIGluc3RhbGwgY29udHJvbHMgaGF2ZSBiZWVuIGRpc2FibGVkIGJlY2F1c2UgdGhlIEdyYWZhbmEgc2VydmVyIGNhbm5vdCBhY2Nlc3MgZ3JhZmFuYS5jb20uXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SW5zdGFsbENvbnRyb2xzQnV0dG9uXG4gICAgICBwbHVnaW49e3BsdWdpbn1cbiAgICAgIHBsdWdpblN0YXR1cz17cGx1Z2luU3RhdHVzfVxuICAgICAgbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb249e2xhdGVzdENvbXBhdGlibGVWZXJzaW9ufVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZTogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQXBwRXZlbnRzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIEhvcml6b250YWxHcm91cCwgQ29uZmlybU1vZGFsIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IGFwcEV2ZW50cyBmcm9tICdhcHAvY29yZS9hcHBfZXZlbnRzJztcblxuaW1wb3J0IHsgdXNlSW5zdGFsbFN0YXR1cywgdXNlVW5pbnN0YWxsU3RhdHVzLCB1c2VJbnN0YWxsLCB1c2VVbmluc3RhbGwgfSBmcm9tICcuLi8uLi9zdGF0ZS9ob29rcyc7XG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luLCBQbHVnaW5TdGF0dXMsIFZlcnNpb24gfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbnR5cGUgSW5zdGFsbENvbnRyb2xzQnV0dG9uUHJvcHMgPSB7XG4gIHBsdWdpbjogQ2F0YWxvZ1BsdWdpbjtcbiAgcGx1Z2luU3RhdHVzOiBQbHVnaW5TdGF0dXM7XG4gIGxhdGVzdENvbXBhdGlibGVWZXJzaW9uPzogVmVyc2lvbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBJbnN0YWxsQ29udHJvbHNCdXR0b24oeyBwbHVnaW4sIHBsdWdpblN0YXR1cywgbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24gfTogSW5zdGFsbENvbnRyb2xzQnV0dG9uUHJvcHMpIHtcbiAgY29uc3QgeyBpc0luc3RhbGxpbmcsIGVycm9yOiBlcnJvckluc3RhbGxpbmcgfSA9IHVzZUluc3RhbGxTdGF0dXMoKTtcbiAgY29uc3QgeyBpc1VuaW5zdGFsbGluZywgZXJyb3I6IGVycm9yVW5pbnN0YWxsaW5nIH0gPSB1c2VVbmluc3RhbGxTdGF0dXMoKTtcbiAgY29uc3QgaW5zdGFsbCA9IHVzZUluc3RhbGwoKTtcbiAgY29uc3QgdW5pbnN0YWxsID0gdXNlVW5pbnN0YWxsKCk7XG4gIGNvbnN0IFtpc0NvbmZpcm1Nb2RhbFZpc2libGUsIHNldElzQ29uZmlybU1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNob3dDb25maXJtTW9kYWwgPSAoKSA9PiBzZXRJc0NvbmZpcm1Nb2RhbFZpc2libGUodHJ1ZSk7XG4gIGNvbnN0IGhpZGVDb25maXJtTW9kYWwgPSAoKSA9PiBzZXRJc0NvbmZpcm1Nb2RhbFZpc2libGUoZmFsc2UpO1xuICBjb25zdCB1bmluc3RhbGxCdG5UZXh0ID0gaXNVbmluc3RhbGxpbmcgPyAnVW5pbnN0YWxsaW5nJyA6ICdVbmluc3RhbGwnO1xuXG4gIGNvbnN0IG9uSW5zdGFsbCA9IGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBpbnN0YWxsKHBsdWdpbi5pZCwgbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24/LnZlcnNpb24pO1xuICAgIGlmICghZXJyb3JJbnN0YWxsaW5nKSB7XG4gICAgICBhcHBFdmVudHMuZW1pdChBcHBFdmVudHMuYWxlcnRTdWNjZXNzLCBbYEluc3RhbGxlZCAke3BsdWdpbi5uYW1lfWBdKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25Vbmluc3RhbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgaGlkZUNvbmZpcm1Nb2RhbCgpO1xuICAgIGF3YWl0IHVuaW5zdGFsbChwbHVnaW4uaWQpO1xuICAgIGlmICghZXJyb3JVbmluc3RhbGxpbmcpIHtcbiAgICAgIGFwcEV2ZW50cy5lbWl0KEFwcEV2ZW50cy5hbGVydFN1Y2Nlc3MsIFtgVW5pbnN0YWxsZWQgJHtwbHVnaW4ubmFtZX1gXSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGluc3RhbGwocGx1Z2luLmlkLCBsYXRlc3RDb21wYXRpYmxlVmVyc2lvbj8udmVyc2lvbiwgdHJ1ZSk7XG4gICAgaWYgKCFlcnJvckluc3RhbGxpbmcpIHtcbiAgICAgIGFwcEV2ZW50cy5lbWl0KEFwcEV2ZW50cy5hbGVydFN1Y2Nlc3MsIFtgVXBkYXRlZCAke3BsdWdpbi5uYW1lfWBdKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHBsdWdpblN0YXR1cyA9PT0gUGx1Z2luU3RhdHVzLlVOSU5TVEFMTCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Q29uZmlybU1vZGFsXG4gICAgICAgICAgaXNPcGVuPXtpc0NvbmZpcm1Nb2RhbFZpc2libGV9XG4gICAgICAgICAgdGl0bGU9e2BVbmluc3RhbGwgJHtwbHVnaW4ubmFtZX1gfVxuICAgICAgICAgIGJvZHk9XCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdW5pbnN0YWxsIHRoaXMgcGx1Z2luP1wiXG4gICAgICAgICAgY29uZmlybVRleHQ9XCJDb25maXJtXCJcbiAgICAgICAgICBpY29uPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIlxuICAgICAgICAgIG9uQ29uZmlybT17b25Vbmluc3RhbGx9XG4gICAgICAgICAgb25EaXNtaXNzPXtoaWRlQ29uZmlybU1vZGFsfVxuICAgICAgICAvPlxuICAgICAgICA8SG9yaXpvbnRhbEdyb3VwIGhlaWdodD1cImF1dG9cIj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIGRpc2FibGVkPXtpc1VuaW5zdGFsbGluZ30gb25DbGljaz17c2hvd0NvbmZpcm1Nb2RhbH0+XG4gICAgICAgICAgICB7dW5pbnN0YWxsQnRuVGV4dH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgaWYgKHBsdWdpblN0YXR1cyA9PT0gUGx1Z2luU3RhdHVzLlVQREFURSkge1xuICAgIHJldHVybiAoXG4gICAgICA8SG9yaXpvbnRhbEdyb3VwIGhlaWdodD1cImF1dG9cIj5cbiAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNJbnN0YWxsaW5nfSBvbkNsaWNrPXtvblVwZGF0ZX0+XG4gICAgICAgICAge2lzSW5zdGFsbGluZyA/ICdVcGRhdGluZycgOiAnVXBkYXRlJ31cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cImRlc3RydWN0aXZlXCIgZGlzYWJsZWQ9e2lzVW5pbnN0YWxsaW5nfSBvbkNsaWNrPXtvblVuaW5zdGFsbH0+XG4gICAgICAgICAge3VuaW5zdGFsbEJ0blRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNJbnN0YWxsaW5nfSBvbkNsaWNrPXtvbkluc3RhbGx9PlxuICAgICAge2lzSW5zdGFsbGluZyA/ICdJbnN0YWxsaW5nJyA6ICdJbnN0YWxsJ31cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vSW5zdGFsbENvbnRyb2xzJztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExvYWRpbmdQbGFjZWhvbGRlciB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBMb2FkZXIgPSAoeyB0ZXh0ID0gJ0xvYWRpbmcuLi4nIH06IFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWxvYWRlci13cmFwcGVyXCI+XG4gICAgICA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9e3RleHR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBcHBFdmVudHMsIFBsdWdpbk1ldGEsIERhdGFTb3VyY2VBcGkgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IGFwcEV2ZW50cyB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IERhc2hib2FyZHNUYWJsZSBmcm9tICdhcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvRGFzaGJvYXJkc1RhYmxlJztcbmltcG9ydCB7IFBsdWdpbkRhc2hib2FyZCB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBsdWdpbjogUGx1Z2luTWV0YTtcbiAgZGF0YXNvdXJjZT86IERhdGFTb3VyY2VBcGk7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGRhc2hib2FyZHM6IFBsdWdpbkRhc2hib2FyZFtdO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgUGx1Z2luRGFzaGJvYXJkcyBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGRhc2hib2FyZHM6IFtdLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwbHVnaW5JZCA9IHRoaXMucHJvcHMucGx1Z2luLmlkO1xuICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgLmdldChgL2FwaS9wbHVnaW5zLyR7cGx1Z2luSWR9L2Rhc2hib2FyZHNgKVxuICAgICAgLnRoZW4oKGRhc2hib2FyZHM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGFzaGJvYXJkcywgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGltcG9ydEFsbCA9ICgpID0+IHtcbiAgICB0aGlzLmltcG9ydE5leHQoMCk7XG4gIH07XG5cbiAgcHJpdmF0ZSBpbXBvcnROZXh0ID0gKGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7IGRhc2hib2FyZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIHRoaXMuaW1wb3J0KGRhc2hib2FyZHNbaW5kZXhdLCB0cnVlKS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChpbmRleCArIDEgPCBkYXNoYm9hcmRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW1wb3J0TmV4dChpbmRleCArIDEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBpbXBvcnQgPSAoZGFzaDogUGx1Z2luRGFzaGJvYXJkLCBvdmVyd3JpdGU6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCB7IHBsdWdpbiwgZGF0YXNvdXJjZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGluc3RhbGxDbWQ6IGFueSA9IHtcbiAgICAgIHBsdWdpbklkOiBwbHVnaW4uaWQsXG4gICAgICBwYXRoOiBkYXNoLnBhdGgsXG4gICAgICBvdmVyd3JpdGU6IG92ZXJ3cml0ZSxcbiAgICAgIGlucHV0czogW10sXG4gICAgfTtcblxuICAgIGlmIChkYXRhc291cmNlKSB7XG4gICAgICBpbnN0YWxsQ21kLmlucHV0cy5wdXNoKHtcbiAgICAgICAgbmFtZTogJyonLFxuICAgICAgICB0eXBlOiAnZGF0YXNvdXJjZScsXG4gICAgICAgIHBsdWdpbklkOiBkYXRhc291cmNlLm1ldGEuaWQsXG4gICAgICAgIHZhbHVlOiBkYXRhc291cmNlLm5hbWUsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0QmFja2VuZFNydigpXG4gICAgICAucG9zdChgL2FwaS9kYXNoYm9hcmRzL2ltcG9ydGAsIGluc3RhbGxDbWQpXG4gICAgICAudGhlbigocmVzOiBQbHVnaW5EYXNoYm9hcmQpID0+IHtcbiAgICAgICAgYXBwRXZlbnRzLmVtaXQoQXBwRXZlbnRzLmFsZXJ0U3VjY2VzcywgWydEYXNoYm9hcmQgSW1wb3J0ZWQnLCBkYXNoLnRpdGxlXSk7XG4gICAgICAgIGV4dGVuZChkYXNoLCByZXMpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGFzaGJvYXJkczogWy4uLnRoaXMuc3RhdGUuZGFzaGJvYXJkc10gfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW1vdmUgPSAoZGFzaDogUGx1Z2luRGFzaGJvYXJkKSA9PiB7XG4gICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAuZGVsZXRlKCcvYXBpL2Rhc2hib2FyZHMvdWlkLycgKyBkYXNoLnVpZClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZGFzaC5pbXBvcnRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGFzaGJvYXJkczogWy4uLnRoaXMuc3RhdGUuZGFzaGJvYXJkc10gfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBkYXNoYm9hcmRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+O1xuICAgIH1cbiAgICBpZiAoIWRhc2hib2FyZHMgfHwgIWRhc2hib2FyZHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gPGRpdj5ObyBkYXNoYm9hcmRzIGFyZSBpbmNsdWRlZCB3aXRoIHRoaXMgcGx1Z2luPC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPERhc2hib2FyZHNUYWJsZSBkYXNoYm9hcmRzPXtkYXNoYm9hcmRzfSBvbkltcG9ydD17dGhpcy5pbXBvcnR9IG9uUmVtb3ZlPXt0aGlzLnJlbW92ZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQXBwUGx1Z2luLCBHcmFmYW5hVGhlbWUyLCBVcmxRdWVyeU1hcCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgVmVyc2lvbkxpc3QgfSBmcm9tICcuLi9jb21wb25lbnRzL1ZlcnNpb25MaXN0JztcbmltcG9ydCB7IHVzZVBsdWdpbkNvbmZpZyB9IGZyb20gJy4uL2hvb2tzL3VzZVBsdWdpbkNvbmZpZyc7XG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luLCBQbHVnaW5UYWJJZHMgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IEFwcENvbmZpZ0N0cmxXcmFwcGVyIH0gZnJvbSAnLi9BcHBDb25maWdXcmFwcGVyJztcbmltcG9ydCB7IFBsdWdpbkRhc2hib2FyZHMgfSBmcm9tICcuL1BsdWdpbkRhc2hib2FyZHMnO1xuXG50eXBlIFByb3BzID0ge1xuICBwbHVnaW46IENhdGFsb2dQbHVnaW47XG4gIHF1ZXJ5UGFyYW1zOiBVcmxRdWVyeU1hcDtcbiAgcGFnZUlkOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luRGV0YWlsc0JvZHkoeyBwbHVnaW4sIHF1ZXJ5UGFyYW1zLCBwYWdlSWQgfTogUHJvcHMpOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgeyB2YWx1ZTogcGx1Z2luQ29uZmlnIH0gPSB1c2VQbHVnaW5Db25maWcocGx1Z2luKTtcblxuICBpZiAocGFnZUlkID09PSBQbHVnaW5UYWJJZHMuT1ZFUlZJRVcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2N4KHN0eWxlcy5yZWFkbWUsIHN0eWxlcy5jb250YWluZXIpfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogcGx1Z2luLmRldGFpbHM/LnJlYWRtZSA/PyAnTm8gcGx1Z2luIGhlbHAgb3IgcmVhZG1lIG1hcmtkb3duIGZpbGUgd2FzIGZvdW5kJyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChwYWdlSWQgPT09IFBsdWdpblRhYklkcy5WRVJTSU9OUykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxWZXJzaW9uTGlzdCB2ZXJzaW9ucz17cGx1Z2luLmRldGFpbHM/LnZlcnNpb25zfSBpbnN0YWxsZWRWZXJzaW9uPXtwbHVnaW4uaW5zdGFsbGVkVmVyc2lvbn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpZiAocGFnZUlkID09PSBQbHVnaW5UYWJJZHMuQ09ORklHICYmIHBsdWdpbkNvbmZpZz8uYW5ndWxhckNvbmZpZ0N0cmwpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8QXBwQ29uZmlnQ3RybFdyYXBwZXIgYXBwPXtwbHVnaW5Db25maWcgYXMgQXBwUGx1Z2lufSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChwbHVnaW5Db25maWc/LmNvbmZpZ1BhZ2VzKSB7XG4gICAgZm9yIChjb25zdCBjb25maWdQYWdlIG9mIHBsdWdpbkNvbmZpZy5jb25maWdQYWdlcykge1xuICAgICAgaWYgKHBhZ2VJZCA9PT0gY29uZmlnUGFnZS5pZCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxjb25maWdQYWdlLmJvZHkgcGx1Z2luPXtwbHVnaW5Db25maWd9IHF1ZXJ5PXtxdWVyeVBhcmFtc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocGFnZUlkID09PSBQbHVnaW5UYWJJZHMuREFTSEJPQVJEUyAmJiBwbHVnaW5Db25maWcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8UGx1Z2luRGFzaGJvYXJkcyBwbHVnaW49e3BsdWdpbkNvbmZpZz8ubWV0YX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxwPlBhZ2Ugbm90IGZvdW5kLjwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgY29udGFpbmVyOiBjc3NgXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDMsIDQpfTtcbiAgYCxcbiAgcmVhZG1lOiBjc3NgXG4gICAgJiBpbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGgxLFxuICAgIGgyLFxuICAgIGgzIHtcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygzKX07XG4gICAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIH1cblxuICAgICo6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG5cbiAgICBsaSB7XG4gICAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICAgICYgPiBwIHtcbiAgICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoKX0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0Lmxpbmt9O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQubGlua307XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuICAgIH1cbiAgYCxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGx1Z2luRXJyb3JDb2RlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHBsdWdpbjogQ2F0YWxvZ1BsdWdpbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQbHVnaW5EZXRhaWxzRGlzYWJsZWRFcnJvcih7IGNsYXNzTmFtZSwgcGx1Z2luIH06IFByb3BzKTogUmVhY3RFbGVtZW50IHwgbnVsbCB7XG4gIGlmICghcGx1Z2luLmlzRGlzYWJsZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFsZXJ0XG4gICAgICBzZXZlcml0eT1cImVycm9yXCJcbiAgICAgIHRpdGxlPVwiUGx1Z2luIGRpc2FibGVkXCJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsdWdpblBhZ2UuZGlzYWJsZWRJbmZvfVxuICAgID5cbiAgICAgIHtyZW5kZXJEZXNjcmlwdGlvbkZyb21FcnJvcihwbHVnaW4uZXJyb3IpfVxuICAgICAgPHA+UGxlYXNlIGNvbnRhY3QgeW91ciBzZXJ2ZXIgYWRtaW5pc3RyYXRvciB0byBnZXQgdGhpcyByZXNvbHZlZC48L3A+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9kb2NzL2dyYWZhbmEvbGF0ZXN0L2FkbWluaXN0cmF0aW9uL2NsaS8jcGx1Z2lucy1jb21tYW5kc1wiXG4gICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmtcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgID5cbiAgICAgICAgUmVhZCBtb3JlIGFib3V0IG1hbmFnaW5nIHBsdWdpbnNcbiAgICAgIDwvYT5cbiAgICA8L0FsZXJ0PlxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJEZXNjcmlwdGlvbkZyb21FcnJvcihlcnJvcj86IFBsdWdpbkVycm9yQ29kZSk6IFJlYWN0RWxlbWVudCB7XG4gIHN3aXRjaCAoZXJyb3IpIHtcbiAgICBjYXNlIFBsdWdpbkVycm9yQ29kZS5tb2RpZmllZFNpZ25hdHVyZTpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIEdyYWZhbmEgTGFicyBjaGVja3MgZWFjaCBwbHVnaW4gdG8gdmVyaWZ5IHRoYXQgaXQgaGFzIGEgdmFsaWQgZGlnaXRhbCBzaWduYXR1cmUuIFdoaWxlIGRvaW5nIHRoaXMsIHdlXG4gICAgICAgICAgZGlzY292ZXJlZCB0aGF0IHRoZSBjb250ZW50IG9mIHRoaXMgcGx1Z2luIGRvZXMgbm90IG1hdGNoIGl0cyBzaWduYXR1cmUuIFdlIGNhbiBub3QgZ3VhcmFudGVlIHRoZSB0cnVzdHdvcnRoeVxuICAgICAgICAgIG9mIHRoaXMgcGx1Z2luIGFuZCBoYXZlIHRoZXJlZm9yZSBkaXNhYmxlZCBpdC4gV2UgcmVjb21tZW5kIHlvdSB0byByZWluc3RhbGwgdGhlIHBsdWdpbiB0byBtYWtlIHN1cmUgeW91IGFyZVxuICAgICAgICAgIHJ1bm5pbmcgYSB2ZXJpZmllZCB2ZXJzaW9uIG9mIHRoaXMgcGx1Z2luLlxuICAgICAgICA8L3A+XG4gICAgICApO1xuICAgIGNhc2UgUGx1Z2luRXJyb3JDb2RlLmludmFsaWRTaWduYXR1cmU6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBHcmFmYW5hIExhYnMgY2hlY2tzIGVhY2ggcGx1Z2luIHRvIHZlcmlmeSB0aGF0IGl0IGhhcyBhIHZhbGlkIGRpZ2l0YWwgc2lnbmF0dXJlLiBXaGlsZSBkb2luZyB0aGlzLCB3ZVxuICAgICAgICAgIGRpc2NvdmVyZWQgdGhhdCBpdCB3YXMgaW52YWxpZC4gV2UgY2FuIG5vdCBndWFyYW50ZWUgdGhlIHRydXN0d29ydGh5IG9mIHRoaXMgcGx1Z2luIGFuZCBoYXZlIHRoZXJlZm9yZVxuICAgICAgICAgIGRpc2FibGVkIGl0LiBXZSByZWNvbW1lbmQgeW91IHRvIHJlaW5zdGFsbCB0aGUgcGx1Z2luIHRvIG1ha2Ugc3VyZSB5b3UgYXJlIHJ1bm5pbmcgYSB2ZXJpZmllZCB2ZXJzaW9uIG9mIHRoaXNcbiAgICAgICAgICBwbHVnaW4uXG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgY2FzZSBQbHVnaW5FcnJvckNvZGUubWlzc2luZ1NpZ25hdHVyZTpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIEdyYWZhbmEgTGFicyBjaGVja3MgZWFjaCBwbHVnaW4gdG8gdmVyaWZ5IHRoYXQgaXQgaGFzIGEgdmFsaWQgZGlnaXRhbCBzaWduYXR1cmUuIFdoaWxlIGRvaW5nIHRoaXMsIHdlXG4gICAgICAgICAgZGlzY292ZXJlZCB0aGF0IHRoZXJlIGlzIG5vIHNpZ25hdHVyZSBmb3IgdGhpcyBwbHVnaW4uIFdlIGNhbiBub3QgZ3VhcmFudGVlIHRoZSB0cnVzdHdvcnRoeSBvZiB0aGlzIHBsdWdpbiBhbmRcbiAgICAgICAgICBoYXZlIHRoZXJlZm9yZSBkaXNhYmxlZCBpdC4gV2UgcmVjb21tZW5kIHlvdSB0byByZWluc3RhbGwgdGhlIHBsdWdpbiB0byBtYWtlIHN1cmUgeW91IGFyZSBydW5uaW5nIGEgdmVyaWZpZWRcbiAgICAgICAgICB2ZXJzaW9uIG9mIHRoaXMgcGx1Z2luLlxuICAgICAgICA8L3A+XG4gICAgICApO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBmYWlsZWQgdG8gcnVuIHRoaXMgcGx1Z2luIGR1ZSB0byBhbiB1bmtvd24gcmVhc29uIGFuZCBoYXZlIHRoZXJlZm9yIGRpc2FibGVkIGl0LiBXZSByZWNvbW1lbmQgeW91IHRvXG4gICAgICAgICAgcmVpbnN0YWxsIHRoZSBwbHVnaW4gdG8gbWFrZSBzdXJlIHlvdSBhcmUgcnVubmluZyBhIHdvcmtpbmcgdmVyc2lvbiBvZiB0aGlzIHBsdWdpbi5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyLCBJY29uLCBIb3Jpem9udGFsR3JvdXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IGdldExhdGVzdENvbXBhdGlibGVWZXJzaW9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBQbHVnaW5EaXNhYmxlZEJhZGdlIH0gZnJvbSAnLi9CYWRnZXMnO1xuaW1wb3J0IHsgR2V0U3RhcnRlZFdpdGhQbHVnaW4gfSBmcm9tICcuL0dldFN0YXJ0ZWRXaXRoUGx1Z2luJztcbmltcG9ydCB7IEluc3RhbGxDb250cm9scyB9IGZyb20gJy4vSW5zdGFsbENvbnRyb2xzJztcbmltcG9ydCB7IFBsdWdpbkRldGFpbHNIZWFkZXJEZXBlbmRlbmNpZXMgfSBmcm9tICcuL1BsdWdpbkRldGFpbHNIZWFkZXJEZXBlbmRlbmNpZXMnO1xuaW1wb3J0IHsgUGx1Z2luRGV0YWlsc0hlYWRlclNpZ25hdHVyZSB9IGZyb20gJy4vUGx1Z2luRGV0YWlsc0hlYWRlclNpZ25hdHVyZSc7XG5pbXBvcnQgeyBQbHVnaW5Mb2dvIH0gZnJvbSAnLi9QbHVnaW5Mb2dvJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY3VycmVudFVybDogc3RyaW5nO1xuICBwYXJlbnRVcmw6IHN0cmluZztcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbkRldGFpbHNIZWFkZXIoeyBwbHVnaW4sIGN1cnJlbnRVcmwsIHBhcmVudFVybCB9OiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24gPSBnZXRMYXRlc3RDb21wYXRpYmxlVmVyc2lvbihwbHVnaW4uZGV0YWlscz8udmVyc2lvbnMpO1xuICBjb25zdCB2ZXJzaW9uID0gcGx1Z2luLmluc3RhbGxlZFZlcnNpb24gfHwgbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24/LnZlcnNpb247XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlckNvbnRhaW5lcn0+XG4gICAgICAgICAgPFBsdWdpbkxvZ29cbiAgICAgICAgICAgIGFsdD17YCR7cGx1Z2luLm5hbWV9IGxvZ29gfVxuICAgICAgICAgICAgc3JjPXtwbHVnaW4uaW5mby5sb2dvcy5zbWFsbH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzYFxuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2OHB4O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDY4cHg7XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcldyYXBwZXJ9PlxuICAgICAgICAgICAgey8qIFRpdGxlICYgbmF2aWdhdGlvbiAqL31cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMuYnJlYWRjcnVtYn0gYXJpYS1sYWJlbD1cIkJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRleHRVbmRlcmxpbmV9IGhyZWY9e3BhcmVudFVybH0+XG4gICAgICAgICAgICAgICAgICAgIFBsdWdpbnNcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2N1cnJlbnRVcmx9IGFyaWEtY3VycmVudD1cInBhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAge3BsdWdpbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJJbmZvcm1hdGlvblJvd30+XG4gICAgICAgICAgICAgIHsvKiBPcmcgbmFtZSAqL31cbiAgICAgICAgICAgICAgPHNwYW4+e3BsdWdpbi5vcmdOYW1lfTwvc3Bhbj5cblxuICAgICAgICAgICAgICB7LyogTGlua3MgKi99XG4gICAgICAgICAgICAgIHtwbHVnaW4uZGV0YWlscz8ubGlua3MubWFwKChsaW5rOiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICA8YSBrZXk9e2xpbmsubmFtZX0gaHJlZj17bGluay51cmx9PlxuICAgICAgICAgICAgICAgICAge2xpbmsubmFtZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICAgIHsvKiBEb3dubG9hZHMgKi99XG4gICAgICAgICAgICAgIHtwbHVnaW4uZG93bmxvYWRzID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2xvdWQtZG93bmxvYWRcIiAvPlxuICAgICAgICAgICAgICAgICAge2AgJHtuZXcgSW50bC5OdW1iZXJGb3JtYXQoKS5mb3JtYXQocGx1Z2luLmRvd25sb2Fkcyl9YH17JyAnfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7LyogVmVyc2lvbiAqL31cbiAgICAgICAgICAgICAge0Jvb2xlYW4odmVyc2lvbikgJiYgPHNwYW4+e3ZlcnNpb259PC9zcGFuPn1cblxuICAgICAgICAgICAgICB7LyogU2lnbmF0dXJlIGluZm9ybWF0aW9uICovfVxuICAgICAgICAgICAgICA8UGx1Z2luRGV0YWlsc0hlYWRlclNpZ25hdHVyZSBwbHVnaW49e3BsdWdpbn0gLz5cblxuICAgICAgICAgICAgICB7cGx1Z2luLmlzRGlzYWJsZWQgJiYgPFBsdWdpbkRpc2FibGVkQmFkZ2UgZXJyb3I9e3BsdWdpbi5lcnJvciF9IC8+fVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxQbHVnaW5EZXRhaWxzSGVhZGVyRGVwZW5kZW5jaWVzXG4gICAgICAgICAgICAgIHBsdWdpbj17cGx1Z2lufVxuICAgICAgICAgICAgICBsYXRlc3RDb21wYXRpYmxlVmVyc2lvbj17bGF0ZXN0Q29tcGF0aWJsZVZlcnNpb259XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goc3R5bGVzLmhlYWRlckluZm9ybWF0aW9uUm93LCBzdHlsZXMuaGVhZGVySW5mb3JtYXRpb25Sb3dTZWNvbmRhcnkpfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPHA+e3BsdWdpbi5kZXNjcmlwdGlvbn08L3A+XG5cbiAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAgaGVpZ2h0PVwiYXV0b1wiPlxuICAgICAgICAgICAgICA8SW5zdGFsbENvbnRyb2xzIHBsdWdpbj17cGx1Z2lufSBsYXRlc3RDb21wYXRpYmxlVmVyc2lvbj17bGF0ZXN0Q29tcGF0aWJsZVZlcnNpb259IC8+XG4gICAgICAgICAgICAgIDxHZXRTdGFydGVkV2l0aFBsdWdpbiBwbHVnaW49e3BsdWdpbn0gLz5cbiAgICAgICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaGVhZGVyQ29udGFpbmVyOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDMpfTtcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygzKX07XG4gICAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICBgLFxuICAgIGhlYWRlcldyYXBwZXI6IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMyl9O1xuICAgIGAsXG4gICAgYnJlYWRjcnVtYjogY3NzYFxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuaDIuZm9udFNpemV9O1xuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnLyc7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjI1Y2g7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIGhlYWRlckluZm9ybWF0aW9uUm93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygpfTtcbiAgICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygpfTtcbiAgICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgICAgICYgPiAqIHtcbiAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICd8JztcbiAgICAgICAgICBwYWRkaW5nOiAwICR7dGhlbWUuc3BhY2luZygpfTtcbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGQ6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5oNC5mb250U2l6ZX07XG5cbiAgICAgIGEge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICAgaGVhZGVySW5mb3JtYXRpb25Sb3dTZWNvbmRhcnk6IGNzc2BcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHkuZm9udFNpemV9O1xuICAgIGAsXG4gICAgaGVhZGVyT3JnTmFtZTogY3NzYFxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkuaDQuZm9udFNpemV9O1xuICAgIGAsXG4gICAgc2lnbmF0dXJlOiBjc3NgXG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygzKX07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGAsXG4gICAgdGV4dFVuZGVybGluZTogY3NzYFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgYCxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiwgSWNvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgVmVyc2lvbiwgQ2F0YWxvZ1BsdWdpbiwgUGx1Z2luSWNvbk5hbWUgfSBmcm9tICcuLi90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBsdWdpbjogQ2F0YWxvZ1BsdWdpbjtcbiAgbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24/OiBWZXJzaW9uO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luRGV0YWlsc0hlYWRlckRlcGVuZGVuY2llcyh7XG4gIHBsdWdpbixcbiAgbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24sXG4gIGNsYXNzTmFtZSxcbn06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgcGx1Z2luRGVwZW5kZW5jaWVzID0gcGx1Z2luLmRldGFpbHM/LnBsdWdpbkRlcGVuZGVuY2llcztcbiAgY29uc3QgZ3JhZmFuYURlcGVuZGVuY3kgPSBwbHVnaW4uaXNJbnN0YWxsZWRcbiAgICA/IHBsdWdpbi5kZXRhaWxzPy5ncmFmYW5hRGVwZW5kZW5jeVxuICAgIDogbGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24/LmdyYWZhbmFEZXBlbmRlbmN5IHx8IHBsdWdpbi5kZXRhaWxzPy5ncmFmYW5hRGVwZW5kZW5jeTtcbiAgY29uc3QgaGFzTm9EZXBlbmRlbmN5SW5mbyA9ICFncmFmYW5hRGVwZW5kZW5jeSAmJiAoIXBsdWdpbkRlcGVuZGVuY2llcyB8fCAhcGx1Z2luRGVwZW5kZW5jaWVzLmxlbmd0aCk7XG5cbiAgaWYgKGhhc05vRGVwZW5kZW5jeUluZm8pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlcGVuZGVuY3lUaXRsZX0+RGVwZW5kZW5jaWVzOjwvZGl2PlxuXG4gICAgICB7LyogR3JhZmFuYSBkZXBlbmRlbmN5ICovfVxuICAgICAge0Jvb2xlYW4oZ3JhZmFuYURlcGVuZGVuY3kpICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwiZ3JhZmFuYVwiIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgR3JhZmFuYSB7Z3JhZmFuYURlcGVuZGVuY3l9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIFBsdWdpbiBkZXBlbmRlbmNpZXMgKi99XG4gICAgICB7cGx1Z2luRGVwZW5kZW5jaWVzICYmIHBsdWdpbkRlcGVuZGVuY2llcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7cGx1Z2luRGVwZW5kZW5jaWVzLm1hcCgocCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHNwYW4ga2V5PXtwLm5hbWV9PlxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9e1BsdWdpbkljb25OYW1lW3AudHlwZV19IGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICAgICAge3AubmFtZX0ge3AudmVyc2lvbn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZGVwZW5kZW5jeVRpdGxlOiBjc3NgXG4gICAgICBmb250LXdlaWdodDogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkfTtcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIGAsXG4gICAgaWNvbjogY3NzYFxuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFBsdWdpblNpZ25hdHVyZVN0YXR1cyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUGx1Z2luU2lnbmF0dXJlQmFkZ2UsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IENhdGFsb2dQbHVnaW4gfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IFBsdWdpblNpZ25hdHVyZURldGFpbHNCYWRnZSB9IGZyb20gJy4vUGx1Z2luU2lnbmF0dXJlRGV0YWlsc0JhZGdlJztcblxudHlwZSBQcm9wcyA9IHtcbiAgcGx1Z2luOiBDYXRhbG9nUGx1Z2luO1xufTtcblxuLy8gRGVzaWduZWQgdG8gc2hvdyBwbHVnaW4gc2lnbmF0dXJlIGluZm9ybWF0aW9uIGluIHRoZSBoZWFkZXIgb24gdGhlIHBsdWdpbidzIGRldGFpbHMgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbkRldGFpbHNIZWFkZXJTaWduYXR1cmUoeyBwbHVnaW4gfTogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGlzU2lnbmF0dXJlVmFsaWQgPSBwbHVnaW4uc2lnbmF0dXJlID09PSBQbHVnaW5TaWduYXR1cmVTdGF0dXMudmFsaWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9kb2NzL2dyYWZhbmEvbGF0ZXN0L3BsdWdpbnMvcGx1Z2luLXNpZ25hdHVyZXMvXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9XG4gICAgICA+XG4gICAgICAgIDxQbHVnaW5TaWduYXR1cmVCYWRnZSBzdGF0dXM9e3BsdWdpbi5zaWduYXR1cmV9IC8+XG4gICAgICA8L2E+XG5cbiAgICAgIHtpc1NpZ25hdHVyZVZhbGlkICYmIChcbiAgICAgICAgPFBsdWdpblNpZ25hdHVyZURldGFpbHNCYWRnZSBzaWduYXR1cmVUeXBlPXtwbHVnaW4uc2lnbmF0dXJlVHlwZX0gc2lnbmF0dXJlT3JnPXtwbHVnaW4uc2lnbmF0dXJlT3JnfSAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY3NzYFxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICBgLFxuICAgIGxpbms6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBsdWdpbkVycm9yQ29kZSwgUGx1Z2luU2lnbmF0dXJlU3RhdHVzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHBsdWdpbjogQ2F0YWxvZ1BsdWdpbjtcbn07XG5cbi8vIERlc2lnbmVkIHRvIHNob3cgc2lnbmF0dXJlIGluZm9ybWF0aW9uIGluc2lkZSB0aGUgYWN0aXZlIHRhYiBvbiB0aGUgcGx1Z2luJ3MgZGV0YWlscyBwYWdlXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luRGV0YWlsc1NpZ25hdHVyZSh7IGNsYXNzTmFtZSwgcGx1Z2luIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IGlzU2lnbmF0dXJlVmFsaWQgPSBwbHVnaW4uc2lnbmF0dXJlID09PSBQbHVnaW5TaWduYXR1cmVTdGF0dXMudmFsaWQ7XG4gIGNvbnN0IGlzQ29yZSA9IHBsdWdpbi5zaWduYXR1cmUgPT09IFBsdWdpblNpZ25hdHVyZVN0YXR1cy5pbnRlcm5hbDtcbiAgY29uc3QgaXNEaXNhYmxlZCA9IHBsdWdpbi5pc0Rpc2FibGVkICYmIGlzRGlzYWJsZWREdWVUb29TaWduYXR1cmVFcnJvcihwbHVnaW4uZXJyb3IpO1xuXG4gIC8vIFRoZSBiYXNpYyBpbmZvcm1hdGlvbiBpcyBhbHJlYWR5IGF2YWlsYWJsZSBpbiB0aGUgaGVhZGVyXG4gIGlmIChpc1NpZ25hdHVyZVZhbGlkIHx8IGlzQ29yZSB8fCBpc0Rpc2FibGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBbGVydFxuICAgICAgc2V2ZXJpdHk9XCJ3YXJuaW5nXCJcbiAgICAgIHRpdGxlPVwiSW52YWxpZCBwbHVnaW4gc2lnbmF0dXJlXCJcbiAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5QbHVnaW5QYWdlLnNpZ25hdHVyZUluZm99XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICA+XG4gICAgICA8cD5cbiAgICAgICAgR3JhZmFuYSBMYWJzIGNoZWNrcyBlYWNoIHBsdWdpbiB0byB2ZXJpZnkgdGhhdCBpdCBoYXMgYSB2YWxpZCBkaWdpdGFsIHNpZ25hdHVyZS4gUGx1Z2luIHNpZ25hdHVyZSB2ZXJpZmljYXRpb25cbiAgICAgICAgaXMgcGFydCBvZiBvdXIgc2VjdXJpdHkgbWVhc3VyZXMgdG8gZW5zdXJlIHBsdWdpbnMgYXJlIHNhZmUgYW5kIHRydXN0d29ydGh5LiBHcmFmYW5hIExhYnMgY2Fu4oCZdCBndWFyYW50ZWUgdGhlXG4gICAgICAgIGludGVncml0eSBvZiB0aGlzIHVuc2lnbmVkIHBsdWdpbi4gQXNrIHRoZSBwbHVnaW4gYXV0aG9yIHRvIHJlcXVlc3QgaXQgdG8gYmUgc2lnbmVkLlxuICAgICAgPC9wPlxuXG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9kb2NzL2dyYWZhbmEvbGF0ZXN0L3BsdWdpbnMvcGx1Z2luLXNpZ25hdHVyZXMvXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiZXh0ZXJuYWwtbGlua1wiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgPlxuICAgICAgICBSZWFkIG1vcmUgYWJvdXQgcGx1Z2lucyBzaWduaW5nLlxuICAgICAgPC9hPlxuICAgIDwvQWxlcnQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzRGlzYWJsZWREdWVUb29TaWduYXR1cmVFcnJvcihlcnJvcjogUGx1Z2luRXJyb3JDb2RlIHwgdW5kZWZpbmVkKSB7XG4gIC8vIElmIHRoZSBwbHVnaW4gaXMgZGlzYWJsZWQgZHVlIHRvIHNpZ25hdHVyZSBlcnJvciB3ZSByZWx5IG9uIHRoZSBkaXNhYmxlZFxuICAvLyBlcnJvciBtZXNzYWdlIGluc3RhZCBvZiB0aGUgd2FybmluZyBhYm91dCB0aGUgc2lnbmF0dXJlLlxuXG4gIHN3aXRjaCAoZXJyb3IpIHtcbiAgICBjYXNlIFBsdWdpbkVycm9yQ29kZS5pbnZhbGlkU2lnbmF0dXJlOlxuICAgIGNhc2UgUGx1Z2luRXJyb3JDb2RlLm1pc3NpbmdTaWduYXR1cmU6XG4gICAgY2FzZSBQbHVnaW5FcnJvckNvZGUubW9kaWZpZWRTaWduYXR1cmU6XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUGx1Z2luTG9nb1Byb3BzID0ge1xuICBhbHQ6IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBzcmM6IHN0cmluZztcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpbkxvZ28oeyBhbHQsIGNsYXNzTmFtZSwgc3JjLCBoZWlnaHQgfTogUGx1Z2luTG9nb1Byb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgLy8gQHRzLWlnbm9yZSAtIHJlYWN0IGRvZXNuJ3Qga25vdyBhYm91dCBsb2FkaW5nIGF0dHIuXG4gIHJldHVybiA8aW1nIHNyYz17c3JjfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gYWx0PXthbHR9IGxvYWRpbmc9XCJsYXp5XCIgaGVpZ2h0PXtoZWlnaHR9IC8+O1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgUGx1Z2luU2lnbmF0dXJlVHlwZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiwgSWNvbiwgQmFkZ2UsIEljb25OYW1lIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5jb25zdCBTSUdOQVRVUkVfSUNPTlM6IFJlY29yZDxzdHJpbmcsIEljb25OYW1lPiA9IHtcbiAgW1BsdWdpblNpZ25hdHVyZVR5cGUuZ3JhZmFuYV06ICdncmFmYW5hJyxcbiAgW1BsdWdpblNpZ25hdHVyZVR5cGUuY29tbWVyY2lhbF06ICdzaGllbGQnLFxuICBbUGx1Z2luU2lnbmF0dXJlVHlwZS5jb21tdW5pdHldOiAnc2hpZWxkJyxcbiAgREVGQVVMVDogJ3NoaWVsZC1leGNsYW1hdGlvbicsXG59O1xuXG50eXBlIFByb3BzID0ge1xuICBzaWduYXR1cmVUeXBlPzogUGx1Z2luU2lnbmF0dXJlVHlwZTtcbiAgc2lnbmF0dXJlT3JnPzogc3RyaW5nO1xufTtcblxuLy8gU2hvd3MgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBhIHZhbGlkIHNpZ25hdHVyZVxuZXhwb3J0IGZ1bmN0aW9uIFBsdWdpblNpZ25hdHVyZURldGFpbHNCYWRnZSh7IHNpZ25hdHVyZVR5cGUsIHNpZ25hdHVyZU9yZyA9ICcnIH06IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBpZiAoIXNpZ25hdHVyZVR5cGUgJiYgIXNpZ25hdHVyZU9yZykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgc2lnbmF0dXJlVHlwZVRleHQgPSBzaWduYXR1cmVUeXBlID09PSBQbHVnaW5TaWduYXR1cmVUeXBlLmdyYWZhbmEgPyAnR3JhZmFuYSBMYWJzJyA6IGNhcGl0YWxpemUoc2lnbmF0dXJlVHlwZSk7XG4gIGNvbnN0IHNpZ25hdHVyZUljb24gPSBTSUdOQVRVUkVfSUNPTlNbc2lnbmF0dXJlVHlwZSB8fCAnJ10gfHwgU0lHTkFUVVJFX0lDT05TLkRFRkFVTFQ7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPERldGFpbHNCYWRnZT5cbiAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e3N0eWxlcy5zdHJvbmd9PkxldmVsOiZuYnNwOzwvc3Ryb25nPlxuICAgICAgICA8SWNvbiBzaXplPVwieHNcIiBuYW1lPXtzaWduYXR1cmVJY29ufSAvPlxuICAgICAgICAmbmJzcDtcbiAgICAgICAge3NpZ25hdHVyZVR5cGVUZXh0fVxuICAgICAgPC9EZXRhaWxzQmFkZ2U+XG5cbiAgICAgIDxEZXRhaWxzQmFkZ2U+XG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMuc3Ryb25nfT5TaWduZWQgYnk6PC9zdHJvbmc+IHtzaWduYXR1cmVPcmd9XG4gICAgICA8L0RldGFpbHNCYWRnZT5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IERldGFpbHNCYWRnZTogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gPEJhZGdlIGNvbG9yPVwiZ3JlZW5cIiBjbGFzc05hbWU9e3N0eWxlcy5iYWRnZX0gdGV4dD17PD57Y2hpbGRyZW59PC8+fSAvPjtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgYmFkZ2U6IGNzc2BcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLmNhbnZhc307XG4gICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5ib3JkZXIuc3Ryb25nfTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoKX07XG4gIGAsXG4gIHN0cm9uZzogY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnByaW1hcnl9O1xuICBgLFxuICBpY29uOiBjc3NgXG4gICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBkYXRlVGltZUZvcm1hdFRpbWVBZ28sIEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IGdldExhdGVzdENvbXBhdGlibGVWZXJzaW9uIH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBWZXJzaW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB2ZXJzaW9ucz86IFZlcnNpb25bXTtcbiAgaW5zdGFsbGVkVmVyc2lvbj86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFZlcnNpb25MaXN0ID0gKHsgdmVyc2lvbnMgPSBbXSwgaW5zdGFsbGVkVmVyc2lvbiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGxhdGVzdENvbXBhdGlibGVWZXJzaW9uID0gZ2V0TGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24odmVyc2lvbnMpO1xuXG4gIGlmICh2ZXJzaW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPHA+Tm8gdmVyc2lvbiBoaXN0b3J5IHdhcyBmb3VuZC48L3A+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMudGFibGV9PlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPlZlcnNpb248L3RoPlxuICAgICAgICAgIDx0aD5MYXN0IHVwZGF0ZWQ8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge3ZlcnNpb25zLm1hcCgodmVyc2lvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzSW5zdGFsbGVkVmVyc2lvbiA9IGluc3RhbGxlZFZlcnNpb24gPT09IHZlcnNpb24udmVyc2lvbjtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHRyIGtleT17dmVyc2lvbi52ZXJzaW9ufT5cbiAgICAgICAgICAgICAgey8qIFZlcnNpb24gbnVtYmVyICovfVxuICAgICAgICAgICAgICB7aXNJbnN0YWxsZWRWZXJzaW9uID8gKFxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50VmVyc2lvbn0+e3ZlcnNpb24udmVyc2lvbn0gKGluc3RhbGxlZCB2ZXJzaW9uKTwvdGQ+XG4gICAgICAgICAgICAgICkgOiB2ZXJzaW9uLnZlcnNpb24gPT09IGxhdGVzdENvbXBhdGlibGVWZXJzaW9uPy52ZXJzaW9uID8gKFxuICAgICAgICAgICAgICAgIDx0ZD57dmVyc2lvbi52ZXJzaW9ufSAobGF0ZXN0IGNvbXBhdGlibGUgdmVyc2lvbik8L3RkPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDx0ZD57dmVyc2lvbi52ZXJzaW9ufTwvdGQ+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgey8qIExhc3QgdXBkYXRlZCAqL31cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT17aXNJbnN0YWxsZWRWZXJzaW9uID8gc3R5bGVzLmN1cnJlbnRWZXJzaW9uIDogJyd9PlxuICAgICAgICAgICAgICAgIHtkYXRlVGltZUZvcm1hdFRpbWVBZ28odmVyc2lvbi5jcmVhdGVkQXQpfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgY29udGFpbmVyOiBjc3NgXG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIsIDQsIDMpfTtcbiAgYCxcbiAgdGFibGU6IGNzc2BcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRkLFxuICAgIHRoIHtcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygpfSAwO1xuICAgIH1cbiAgICB0aCB7XG4gICAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5oNS5mb250U2l6ZX07XG4gICAgfVxuICBgLFxuICBjdXJyZW50VmVyc2lvbjogY3NzYFxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGR9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IGxvYWRQbHVnaW4gfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDYXRhbG9nUGx1Z2luIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgdXNlUGx1Z2luQ29uZmlnID0gKHBsdWdpbj86IENhdGFsb2dQbHVnaW4pID0+IHtcbiAgcmV0dXJuIHVzZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXBsdWdpbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHBsdWdpbi5pc0luc3RhbGxlZCAmJiAhcGx1Z2luLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiBsb2FkUGx1Z2luKHBsdWdpbi5pZCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LCBbcGx1Z2luPy5pZCwgcGx1Z2luPy5pc0luc3RhbGxlZCwgcGx1Z2luPy5pc0Rpc2FibGVkXSk7XG59O1xuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IFBsdWdpbkluY2x1ZGVUeXBlLCBQbHVnaW5UeXBlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IHVzZVBsdWdpbkNvbmZpZyB9IGZyb20gJy4uL2hvb2tzL3VzZVBsdWdpbkNvbmZpZyc7XG5pbXBvcnQgeyBpc09yZ0FkbWluIH0gZnJvbSAnLi4vcGVybWlzc2lvbnMnO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiwgUGx1Z2luRGV0YWlsc1RhYiwgUGx1Z2luVGFiSWRzLCBQbHVnaW5UYWJMYWJlbHMgfSBmcm9tICcuLi90eXBlcyc7XG5cbnR5cGUgUmV0dXJuVHlwZSA9IHtcbiAgZXJyb3I6IEVycm9yIHwgdW5kZWZpbmVkO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICB0YWJzOiBQbHVnaW5EZXRhaWxzVGFiW107XG4gIGRlZmF1bHRUYWI6IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VQbHVnaW5EZXRhaWxzVGFicyA9IChwbHVnaW4/OiBDYXRhbG9nUGx1Z2luLCBkZWZhdWx0VGFiczogUGx1Z2luRGV0YWlsc1RhYltdID0gW10pOiBSZXR1cm5UeXBlID0+IHtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgdmFsdWU6IHBsdWdpbkNvbmZpZyB9ID0gdXNlUGx1Z2luQ29uZmlnKHBsdWdpbik7XG4gIGNvbnN0IGlzUHVibGlzaGVkID0gQm9vbGVhbihwbHVnaW4/LmlzUHVibGlzaGVkKTtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKTtcblxuICBjb25zdCBbdGFicywgZGVmYXVsdFRhYl0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjYW5Db25maWd1cmVQbHVnaW5zID0gaXNPcmdBZG1pbigpO1xuICAgIGNvbnN0IHRhYnM6IFBsdWdpbkRldGFpbHNUYWJbXSA9IFsuLi5kZWZhdWx0VGFic107XG4gICAgbGV0IGRlZmF1bHRUYWI7XG5cbiAgICBpZiAoaXNQdWJsaXNoZWQpIHtcbiAgICAgIHRhYnMucHVzaCh7XG4gICAgICAgIGxhYmVsOiBQbHVnaW5UYWJMYWJlbHMuVkVSU0lPTlMsXG4gICAgICAgIGljb246ICdoaXN0b3J5JyxcbiAgICAgICAgaWQ6IFBsdWdpblRhYklkcy5WRVJTSU9OUyxcbiAgICAgICAgaHJlZjogYCR7cGF0aG5hbWV9P3BhZ2U9JHtQbHVnaW5UYWJJZHMuVkVSU0lPTlN9YCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE5vdCBleHRlbmRpbmcgdGhlIHRhYnMgd2l0aCB0aGUgY29uZmlnIHBhZ2VzIGlmIHRoZSBwbHVnaW4gaXMgbm90IGluc3RhbGxlZFxuICAgIGlmICghcGx1Z2luQ29uZmlnKSB7XG4gICAgICBkZWZhdWx0VGFiID0gUGx1Z2luVGFiSWRzLk9WRVJWSUVXO1xuICAgICAgcmV0dXJuIFt0YWJzLCBkZWZhdWx0VGFiXTtcbiAgICB9XG5cbiAgICBpZiAoY2FuQ29uZmlndXJlUGx1Z2lucykge1xuICAgICAgaWYgKHBsdWdpbkNvbmZpZy5tZXRhLnR5cGUgPT09IFBsdWdpblR5cGUuYXBwKSB7XG4gICAgICAgIGlmIChwbHVnaW5Db25maWcuYW5ndWxhckNvbmZpZ0N0cmwpIHtcbiAgICAgICAgICB0YWJzLnB1c2goe1xuICAgICAgICAgICAgbGFiZWw6ICdDb25maWcnLFxuICAgICAgICAgICAgaWNvbjogJ2NvZycsXG4gICAgICAgICAgICBpZDogUGx1Z2luVGFiSWRzLkNPTkZJRyxcbiAgICAgICAgICAgIGhyZWY6IGAke3BhdGhuYW1lfT9wYWdlPSR7UGx1Z2luVGFiSWRzLkNPTkZJR31gLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRlZmF1bHRUYWIgPSBQbHVnaW5UYWJJZHMuQ09ORklHO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBsdWdpbkNvbmZpZy5jb25maWdQYWdlcykge1xuICAgICAgICAgIGZvciAoY29uc3QgcGFnZSBvZiBwbHVnaW5Db25maWcuY29uZmlnUGFnZXMpIHtcbiAgICAgICAgICAgIHRhYnMucHVzaCh7XG4gICAgICAgICAgICAgIGxhYmVsOiBwYWdlLnRpdGxlLFxuICAgICAgICAgICAgICBpY29uOiBwYWdlLmljb24sXG4gICAgICAgICAgICAgIGlkOiBwYWdlLmlkLFxuICAgICAgICAgICAgICBocmVmOiBgJHtwYXRobmFtZX0/cGFnZT0ke3BhZ2UuaWR9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFkZWZhdWx0VGFiKSB7XG4gICAgICAgICAgICAgIGRlZmF1bHRUYWIgPSBwYWdlLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbHVnaW5Db25maWcubWV0YS5pbmNsdWRlcz8uZmluZCgoaW5jbHVkZSkgPT4gaW5jbHVkZS50eXBlID09PSBQbHVnaW5JbmNsdWRlVHlwZS5kYXNoYm9hcmQpKSB7XG4gICAgICAgICAgdGFicy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiAnRGFzaGJvYXJkcycsXG4gICAgICAgICAgICBpY29uOiAnYXBwcycsXG4gICAgICAgICAgICBpZDogUGx1Z2luVGFiSWRzLkRBU0hCT0FSRFMsXG4gICAgICAgICAgICBocmVmOiBgJHtwYXRobmFtZX0/cGFnZT0ke1BsdWdpblRhYklkcy5EQVNIQk9BUkRTfWAsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWRlZmF1bHRUYWIpIHtcbiAgICAgIGRlZmF1bHRUYWIgPSBQbHVnaW5UYWJJZHMuT1ZFUlZJRVc7XG4gICAgfVxuXG4gICAgcmV0dXJuIFt0YWJzLCBkZWZhdWx0VGFiXTtcbiAgfSwgW3BsdWdpbkNvbmZpZywgZGVmYXVsdFRhYnMsIHBhdGhuYW1lLCBpc1B1Ymxpc2hlZF0pO1xuXG4gIHJldHVybiB7XG4gICAgZXJyb3IsXG4gICAgbG9hZGluZyxcbiAgICB0YWJzLFxuICAgIGRlZmF1bHRUYWIsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VQcmV2aW91cyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXNlU3R5bGVzMiwgVGFic0JhciwgVGFiQ29udGVudCwgVGFiLCBBbGVydCwgSWNvbk5hbWUgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICdAZ3JhZmFuYS91aS9zcmMvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgQXBwTm90aWZpY2F0aW9uU2V2ZXJpdHkgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRlcic7XG5pbXBvcnQgeyBQbHVnaW5EZXRhaWxzQm9keSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGx1Z2luRGV0YWlsc0JvZHknO1xuaW1wb3J0IHsgUGx1Z2luRGV0YWlsc0Rpc2FibGVkRXJyb3IgfSBmcm9tICcuLi9jb21wb25lbnRzL1BsdWdpbkRldGFpbHNEaXNhYmxlZEVycm9yJztcbmltcG9ydCB7IFBsdWdpbkRldGFpbHNIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1BsdWdpbkRldGFpbHNIZWFkZXInO1xuaW1wb3J0IHsgUGx1Z2luRGV0YWlsc1NpZ25hdHVyZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGx1Z2luRGV0YWlsc1NpZ25hdHVyZSc7XG5pbXBvcnQgeyB1c2VQbHVnaW5EZXRhaWxzVGFicyB9IGZyb20gJy4uL2hvb2tzL3VzZVBsdWdpbkRldGFpbHNUYWJzJztcbmltcG9ydCB7IHVzZUdldFNpbmdsZSwgdXNlRmV0Y2hTdGF0dXMsIHVzZUZldGNoRGV0YWlsc1N0YXR1cyB9IGZyb20gJy4uL3N0YXRlL2hvb2tzJztcbmltcG9ydCB7IFBsdWdpblRhYkxhYmVscywgUGx1Z2luVGFiSWRzLCBQbHVnaW5EZXRhaWxzVGFiIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG50eXBlIFByb3BzID0gR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8eyBwbHVnaW5JZD86IHN0cmluZyB9PjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGx1Z2luRGV0YWlscyh7IG1hdGNoLCBxdWVyeVBhcmFtcyB9OiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHtcbiAgICBwYXJhbXM6IHsgcGx1Z2luSWQgPSAnJyB9LFxuICAgIHVybCxcbiAgfSA9IG1hdGNoO1xuICBjb25zdCBwYXJlbnRVcmwgPSB1cmwuc3Vic3RyaW5nKDAsIHVybC5sYXN0SW5kZXhPZignLycpKTtcbiAgY29uc3QgZGVmYXVsdFRhYnM6IFBsdWdpbkRldGFpbHNUYWJbXSA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogUGx1Z2luVGFiTGFiZWxzLk9WRVJWSUVXLFxuICAgICAgaWNvbjogJ2ZpbGUtYWx0JyxcbiAgICAgIGlkOiBQbHVnaW5UYWJJZHMuT1ZFUlZJRVcsXG4gICAgICBocmVmOiBgJHt1cmx9P3BhZ2U9JHtQbHVnaW5UYWJJZHMuT1ZFUlZJRVd9YCxcbiAgICB9LFxuICBdO1xuICBjb25zdCBwbHVnaW4gPSB1c2VHZXRTaW5nbGUocGx1Z2luSWQpOyAvLyBmZXRjaGVzIHRoZSBsb2NhbHBsdWdpbiBzZXR0aW5nc1xuICBjb25zdCB7IHRhYnMsIGRlZmF1bHRUYWIgfSA9IHVzZVBsdWdpbkRldGFpbHNUYWJzKHBsdWdpbiwgZGVmYXVsdFRhYnMpO1xuICBjb25zdCB7IGlzTG9hZGluZzogaXNGZXRjaExvYWRpbmcgfSA9IHVzZUZldGNoU3RhdHVzKCk7XG4gIGNvbnN0IHsgaXNMb2FkaW5nOiBpc0ZldGNoRGV0YWlsc0xvYWRpbmcgfSA9IHVzZUZldGNoRGV0YWlsc1N0YXR1cygpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHByZXZUYWJzID0gdXNlUHJldmlvdXModGFicyk7XG4gIGNvbnN0IHBhZ2VJZCA9IChxdWVyeVBhcmFtcy5wYWdlIGFzIFBsdWdpblRhYklkcykgfHwgZGVmYXVsdFRhYjtcblxuICAvLyBJZiBhbiBhcHAgcGx1Z2luIGlzIHVuaW5zdGFsbGVkIHdlIG5lZWQgdG8gcmVzZXQgdGhlIGFjdGl2ZSB0YWIgd2hlbiB0aGUgY29uZmlnIC8gZGFzaGJvYXJkcyB0YWJzIGFyZSByZW1vdmVkLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhc1VuaW5zdGFsbGVkV2l0aENvbmZpZ1BhZ2VzID0gcHJldlRhYnMgJiYgcHJldlRhYnMubGVuZ3RoID4gdGFicy5sZW5ndGg7XG4gICAgY29uc3QgaXNWaWV3aW5nQUNvbmZpZ1BhZ2UgPSBwYWdlSWQgIT09IFBsdWdpblRhYklkcy5PVkVSVklFVyAmJiBwYWdlSWQgIT09IFBsdWdpblRhYklkcy5WRVJTSU9OUztcblxuICAgIGlmIChoYXNVbmluc3RhbGxlZFdpdGhDb25maWdQYWdlcyAmJiBpc1ZpZXdpbmdBQ29uZmlnUGFnZSkge1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnJlcGxhY2UoYCR7dXJsfT9wYWdlPSR7UGx1Z2luVGFiSWRzLk9WRVJWSUVXfWApO1xuICAgIH1cbiAgfSwgW3BhZ2VJZCwgdXJsLCB0YWJzLCBwcmV2VGFic10pO1xuXG4gIGlmIChpc0ZldGNoTG9hZGluZyB8fCBpc0ZldGNoRGV0YWlsc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxMb2FkZXIgLz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG5cbiAgaWYgKCFwbHVnaW4pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPEFsZXJ0IHNldmVyaXR5PXtBcHBOb3RpZmljYXRpb25TZXZlcml0eS5XYXJuaW5nfSB0aXRsZT1cIlBsdWdpbiBub3QgZm91bmRcIj5cbiAgICAgICAgICBUaGF0IHBsdWdpbiBjYW5ub3QgYmUgZm91bmQuIFBsZWFzZSBjaGVjayB0aGUgdXJsIGlzIGNvcnJlY3Qgb3IgPGJyIC8+XG4gICAgICAgICAgZ28gdG8gdGhlIDxhIGhyZWY9e3BhcmVudFVybH0+cGx1Z2luIGNhdGFsb2c8L2E+LlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8UGx1Z2luRGV0YWlsc0hlYWRlciBjdXJyZW50VXJsPXtgJHt1cmx9P3BhZ2U9JHtwYWdlSWR9YH0gcGFyZW50VXJsPXtwYXJlbnRVcmx9IHBsdWdpbj17cGx1Z2lufSAvPlxuICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgIHsvKiBUYWIgbmF2aWdhdGlvbiAqL31cbiAgICAgICAgPFRhYnNCYXI+XG4gICAgICAgICAge3RhYnMubWFwKCh0YWI6IFBsdWdpbkRldGFpbHNUYWIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICBrZXk9e3RhYi5sYWJlbH1cbiAgICAgICAgICAgICAgICBsYWJlbD17dGFiLmxhYmVsfVxuICAgICAgICAgICAgICAgIGhyZWY9e3RhYi5ocmVmfVxuICAgICAgICAgICAgICAgIGljb249e3RhYi5pY29uIGFzIEljb25OYW1lfVxuICAgICAgICAgICAgICAgIGFjdGl2ZT17dGFiLmlkID09PSBwYWdlSWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RhYnNCYXI+XG5cbiAgICAgICAgey8qIEFjdGl2ZSB0YWIgKi99XG4gICAgICAgIDxUYWJDb250ZW50IGNsYXNzTmFtZT17c3R5bGVzLnRhYkNvbnRlbnR9PlxuICAgICAgICAgIDxQbHVnaW5EZXRhaWxzU2lnbmF0dXJlIHBsdWdpbj17cGx1Z2lufSBjbGFzc05hbWU9e3N0eWxlcy5hbGVydH0gLz5cbiAgICAgICAgICA8UGx1Z2luRGV0YWlsc0Rpc2FibGVkRXJyb3IgcGx1Z2luPXtwbHVnaW59IGNsYXNzTmFtZT17c3R5bGVzLmFsZXJ0fSAvPlxuICAgICAgICAgIDxQbHVnaW5EZXRhaWxzQm9keSBxdWVyeVBhcmFtcz17cXVlcnlQYXJhbXN9IHBsdWdpbj17cGx1Z2lufSBwYWdlSWQ9e3BhZ2VJZH0gLz5cbiAgICAgICAgPC9UYWJDb250ZW50PlxuICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGFsZXJ0OiBjc3NgXG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygzKX07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGAsXG4gICAgLy8gTmVlZGVkIGR1ZSB0byBibG9jayBmb3JtYXR0aW5nIGNvbnRleHRcbiAgICB0YWJDb250ZW50OiBjc3NgXG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgUGx1Z2luRXJyb3IgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgc29ydFBsdWdpbnMsIFNvcnRlcnMgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IENhdGFsb2dQbHVnaW4sIFBsdWdpbkNhdGFsb2dTdG9yZVN0YXRlLCBQbHVnaW5MaXN0RGlzcGxheU1vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IGZldGNoQWxsLCBmZXRjaERldGFpbHMsIGZldGNoUmVtb3RlUGx1Z2lucywgaW5zdGFsbCwgdW5pbnN0YWxsIH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IHNldERpc3BsYXlNb2RlIH0gZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCB7XG4gIGZpbmQsXG4gIHNlbGVjdEFsbCxcbiAgc2VsZWN0QnlJZCxcbiAgc2VsZWN0SXNSZXF1ZXN0UGVuZGluZyxcbiAgc2VsZWN0UmVxdWVzdEVycm9yLFxuICBzZWxlY3RJc1JlcXVlc3ROb3RGZXRjaGVkLFxuICBzZWxlY3REaXNwbGF5TW9kZSxcbiAgc2VsZWN0UGx1Z2luRXJyb3JzLFxufSBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbnR5cGUgRmlsdGVycyA9IHtcbiAgcXVlcnk/OiBzdHJpbmc7XG4gIGZpbHRlckJ5Pzogc3RyaW5nO1xuICBmaWx0ZXJCeVR5cGU/OiBzdHJpbmc7XG4gIHNvcnRCeT86IFNvcnRlcnM7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2V0QWxsV2l0aEZpbHRlcnMgPSAoe1xuICBxdWVyeSA9ICcnLFxuICBmaWx0ZXJCeSA9ICdpbnN0YWxsZWQnLFxuICBmaWx0ZXJCeVR5cGUgPSAnYWxsJyxcbiAgc29ydEJ5ID0gU29ydGVycy5uYW1lQXNjLFxufTogRmlsdGVycykgPT4ge1xuICB1c2VGZXRjaEFsbCgpO1xuXG4gIGNvbnN0IGZpbHRlcmVkID0gdXNlU2VsZWN0b3IoZmluZChxdWVyeSwgZmlsdGVyQnksIGZpbHRlckJ5VHlwZSkpO1xuICBjb25zdCB7IGlzTG9hZGluZywgZXJyb3IgfSA9IHVzZUZldGNoU3RhdHVzKCk7XG4gIGNvbnN0IHNvcnRlZEFuZEZpbHRlcmVkID0gc29ydFBsdWdpbnMoZmlsdGVyZWQsIHNvcnRCeSk7XG5cbiAgcmV0dXJuIHtcbiAgICBpc0xvYWRpbmcsXG4gICAgZXJyb3IsXG4gICAgcGx1Z2luczogc29ydGVkQW5kRmlsdGVyZWQsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2V0QWxsID0gKCk6IENhdGFsb2dQbHVnaW5bXSA9PiB7XG4gIHVzZUZldGNoQWxsKCk7XG5cbiAgcmV0dXJuIHVzZVNlbGVjdG9yKHNlbGVjdEFsbCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2V0U2luZ2xlID0gKGlkOiBzdHJpbmcpOiBDYXRhbG9nUGx1Z2luIHwgdW5kZWZpbmVkID0+IHtcbiAgdXNlRmV0Y2hBbGwoKTtcbiAgdXNlRmV0Y2hEZXRhaWxzKGlkKTtcblxuICByZXR1cm4gdXNlU2VsZWN0b3IoKHN0YXRlOiBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSkgPT4gc2VsZWN0QnlJZChzdGF0ZSwgaWQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VHZXRFcnJvcnMgPSAoKTogUGx1Z2luRXJyb3JbXSA9PiB7XG4gIHVzZUZldGNoQWxsKCk7XG5cbiAgcmV0dXJuIHVzZVNlbGVjdG9yKHNlbGVjdFBsdWdpbkVycm9ycyk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlSW5zdGFsbCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICByZXR1cm4gKGlkOiBzdHJpbmcsIHZlcnNpb24/OiBzdHJpbmcsIGlzVXBkYXRpbmc/OiBib29sZWFuKSA9PiBkaXNwYXRjaChpbnN0YWxsKHsgaWQsIHZlcnNpb24sIGlzVXBkYXRpbmcgfSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVVuaW5zdGFsbCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIHJldHVybiAoaWQ6IHN0cmluZykgPT4gZGlzcGF0Y2godW5pbnN0YWxsKGlkKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlSXNSZW1vdGVQbHVnaW5zQXZhaWxhYmxlID0gKCkgPT4ge1xuICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHNlbGVjdFJlcXVlc3RFcnJvcihmZXRjaFJlbW90ZVBsdWdpbnMudHlwZVByZWZpeCkpO1xuICByZXR1cm4gZXJyb3IgPT09IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlRmV0Y2hTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdElzUmVxdWVzdFBlbmRpbmcoZmV0Y2hBbGwudHlwZVByZWZpeCkpO1xuICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHNlbGVjdFJlcXVlc3RFcnJvcihmZXRjaEFsbC50eXBlUHJlZml4KSk7XG5cbiAgcmV0dXJuIHsgaXNMb2FkaW5nLCBlcnJvciB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUZldGNoRGV0YWlsc1N0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0UGVuZGluZyhmZXRjaERldGFpbHMudHlwZVByZWZpeCkpO1xuICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHNlbGVjdFJlcXVlc3RFcnJvcihmZXRjaERldGFpbHMudHlwZVByZWZpeCkpO1xuXG4gIHJldHVybiB7IGlzTG9hZGluZywgZXJyb3IgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VJbnN0YWxsU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBpc0luc3RhbGxpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKGluc3RhbGwudHlwZVByZWZpeCkpO1xuICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHNlbGVjdFJlcXVlc3RFcnJvcihpbnN0YWxsLnR5cGVQcmVmaXgpKTtcblxuICByZXR1cm4geyBpc0luc3RhbGxpbmcsIGVycm9yIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVW5pbnN0YWxsU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBpc1VuaW5zdGFsbGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdElzUmVxdWVzdFBlbmRpbmcodW5pbnN0YWxsLnR5cGVQcmVmaXgpKTtcbiAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzZWxlY3RSZXF1ZXN0RXJyb3IodW5pbnN0YWxsLnR5cGVQcmVmaXgpKTtcblxuICByZXR1cm4geyBpc1VuaW5zdGFsbGluZywgZXJyb3IgfTtcbn07XG5cbi8vIE9ubHkgZmV0Y2hlcyBpbiBjYXNlIHRoZXkgd2VyZSBub3QgZmV0Y2hlZCB5ZXRcbmV4cG9ydCBjb25zdCB1c2VGZXRjaEFsbCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBpc05vdEZldGNoZWQgPSB1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3ROb3RGZXRjaGVkKGZldGNoQWxsLnR5cGVQcmVmaXgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzTm90RmV0Y2hlZCAmJiBkaXNwYXRjaChmZXRjaEFsbCgpKTtcbiAgfSwgW10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59O1xuXG5leHBvcnQgY29uc3QgdXNlRmV0Y2hEZXRhaWxzID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBwbHVnaW4gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFBsdWdpbkNhdGFsb2dTdG9yZVN0YXRlKSA9PiBzZWxlY3RCeUlkKHN0YXRlLCBpZCkpO1xuICBjb25zdCBpc05vdEZldGNoaW5nID0gIXVzZVNlbGVjdG9yKHNlbGVjdElzUmVxdWVzdFBlbmRpbmcoZmV0Y2hEZXRhaWxzLnR5cGVQcmVmaXgpKTtcbiAgY29uc3Qgc2hvdWxkRmV0Y2ggPSBpc05vdEZldGNoaW5nICYmIHBsdWdpbiAmJiAhcGx1Z2luLmRldGFpbHM7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzaG91bGRGZXRjaCAmJiBkaXNwYXRjaChmZXRjaERldGFpbHMoaWQpKTtcbiAgfSwgW3BsdWdpbl0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59O1xuXG5leHBvcnQgY29uc3QgdXNlRGlzcGxheU1vZGUgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgZGlzcGxheU1vZGUgPSB1c2VTZWxlY3RvcihzZWxlY3REaXNwbGF5TW9kZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBkaXNwbGF5TW9kZSxcbiAgICBzZXREaXNwbGF5TW9kZTogKHY6IFBsdWdpbkxpc3REaXNwbGF5TW9kZSkgPT4gZGlzcGF0Y2goc2V0RGlzcGxheU1vZGUodikpLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmltcG9ydCB7IFBsdWdpbkVycm9yLCBQbHVnaW5FcnJvckNvZGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgUmVxdWVzdFN0YXR1cywgUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IHBsdWdpbnNBZGFwdGVyIH0gZnJvbSAnLi9yZWR1Y2VyJztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFJvb3QgPSAoc3RhdGU6IFBsdWdpbkNhdGFsb2dTdG9yZVN0YXRlKSA9PiBzdGF0ZS5wbHVnaW5zO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0SXRlbXMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RSb290LCAoeyBpdGVtcyB9KSA9PiBpdGVtcyk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3REaXNwbGF5TW9kZSA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFJvb3QsICh7IHNldHRpbmdzIH0pID0+IHNldHRpbmdzLmRpc3BsYXlNb2RlKTtcblxuZXhwb3J0IGNvbnN0IHsgc2VsZWN0QWxsLCBzZWxlY3RCeUlkIH0gPSBwbHVnaW5zQWRhcHRlci5nZXRTZWxlY3RvcnMoc2VsZWN0SXRlbXMpO1xuXG5jb25zdCBzZWxlY3RJbnN0YWxsZWQgPSAoZmlsdGVyQnk6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QWxsLCAocGx1Z2lucykgPT5cbiAgICBwbHVnaW5zLmZpbHRlcigocGx1Z2luKSA9PiAoZmlsdGVyQnkgPT09ICdpbnN0YWxsZWQnID8gcGx1Z2luLmlzSW5zdGFsbGVkIDogIXBsdWdpbi5pc0NvcmUpKVxuICApO1xuXG5jb25zdCBmaW5kQnlJbnN0YWxsQW5kVHlwZSA9IChmaWx0ZXJCeTogc3RyaW5nLCBmaWx0ZXJCeVR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0SW5zdGFsbGVkKGZpbHRlckJ5KSwgKHBsdWdpbnMpID0+XG4gICAgcGx1Z2lucy5maWx0ZXIoKHBsdWdpbikgPT4gZmlsdGVyQnlUeXBlID09PSAnYWxsJyB8fCBwbHVnaW4udHlwZSA9PT0gZmlsdGVyQnlUeXBlKVxuICApO1xuXG5jb25zdCBmaW5kQnlLZXl3b3JkID0gKHNlYXJjaEJ5OiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEFsbCwgKHBsdWdpbnMpID0+IHtcbiAgICBpZiAoc2VhcmNoQnkgPT09ICcnKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHBsdWdpbnMuZmlsdGVyKChwbHVnaW4pID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkczogU3RyaW5nW10gPSBbXTtcbiAgICAgIGlmIChwbHVnaW4ubmFtZSkge1xuICAgICAgICBmaWVsZHMucHVzaChwbHVnaW4ubmFtZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBsdWdpbi5vcmdOYW1lKSB7XG4gICAgICAgIGZpZWxkcy5wdXNoKHBsdWdpbi5vcmdOYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmllbGRzLnNvbWUoKGYpID0+IGYuaW5jbHVkZXMoc2VhcmNoQnkudG9Mb3dlckNhc2UoKSkpO1xuICAgIH0pO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSAoc2VhcmNoQnk6IHN0cmluZywgZmlsdGVyQnk6IHN0cmluZywgZmlsdGVyQnlUeXBlOiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGZpbmRCeUluc3RhbGxBbmRUeXBlKGZpbHRlckJ5LCBmaWx0ZXJCeVR5cGUpLFxuICAgIGZpbmRCeUtleXdvcmQoc2VhcmNoQnkpLFxuICAgIChmaWx0ZXJlZFBsdWdpbnMsIHNlYXJjaGVkUGx1Z2lucykgPT4ge1xuICAgICAgcmV0dXJuIHNlYXJjaEJ5ID09PSAnJyA/IGZpbHRlcmVkUGx1Z2lucyA6IHNlYXJjaGVkUGx1Z2lucztcbiAgICB9XG4gICk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RQbHVnaW5FcnJvcnMgPSBjcmVhdGVTZWxlY3RvcihzZWxlY3RBbGwsIChwbHVnaW5zKSA9PlxuICBwbHVnaW5zXG4gICAgPyBwbHVnaW5zXG4gICAgICAgIC5maWx0ZXIoKHApID0+IEJvb2xlYW4ocC5lcnJvcikpXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgKHApOiBQbHVnaW5FcnJvciA9PiAoe1xuICAgICAgICAgICAgcGx1Z2luSWQ6IHAuaWQsXG4gICAgICAgICAgICBlcnJvckNvZGU6IHAhLmVycm9yIGFzIFBsdWdpbkVycm9yQ29kZSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgOiBbXVxuKTtcblxuLy8gVGhlIGZvbGxvd2luZyBzZWxlY3RvcnMgYXJlIHVzZWQgdG8gZ2V0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBvdXRzdGFuZGluZyBvciBjb21wbGV0ZWQgcGx1Z2lucy1yZWxhdGVkIG5ldHdvcmsgcmVxdWVzdHMuXG5leHBvcnQgY29uc3Qgc2VsZWN0UmVxdWVzdCA9IChhY3Rpb25UeXBlOiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFJvb3QsICh7IHJlcXVlc3RzID0ge30gfSkgPT4gcmVxdWVzdHNbYWN0aW9uVHlwZV0pO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0SXNSZXF1ZXN0UGVuZGluZyA9IChhY3Rpb25UeXBlOiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFJlcXVlc3QoYWN0aW9uVHlwZSksIChyZXF1ZXN0KSA9PiByZXF1ZXN0Py5zdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuUGVuZGluZyk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RSZXF1ZXN0RXJyb3IgPSAoYWN0aW9uVHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RSZXF1ZXN0KGFjdGlvblR5cGUpLCAocmVxdWVzdCkgPT5cbiAgICByZXF1ZXN0Py5zdGF0dXMgPT09IFJlcXVlc3RTdGF0dXMuUmVqZWN0ZWQgPyByZXF1ZXN0Py5lcnJvciA6IG51bGxcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdElzUmVxdWVzdE5vdEZldGNoZWQgPSAoYWN0aW9uVHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RSZXF1ZXN0KGFjdGlvblR5cGUpLCAocmVxdWVzdCkgPT4gcmVxdWVzdCA9PT0gdW5kZWZpbmVkKTtcbiIsImltcG9ydCB7IEdyYWZhbmFQbHVnaW4sIFBhbmVsUGx1Z2luTWV0YSwgUGx1Z2luVHlwZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBpbXBvcnRQYW5lbFBsdWdpbkZyb21NZXRhIH0gZnJvbSAnLi9pbXBvcnRQYW5lbFBsdWdpbic7XG5pbXBvcnQgeyBnZXRQbHVnaW5TZXR0aW5ncyB9IGZyb20gJy4vcGx1Z2luU2V0dGluZ3MnO1xuaW1wb3J0IHsgaW1wb3J0QXBwUGx1Z2luLCBpbXBvcnREYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnLi9wbHVnaW5fbG9hZGVyJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRQbHVnaW4ocGx1Z2luSWQ6IHN0cmluZyk6IFByb21pc2U8R3JhZmFuYVBsdWdpbj4ge1xuICBjb25zdCBpbmZvID0gYXdhaXQgZ2V0UGx1Z2luU2V0dGluZ3MocGx1Z2luSWQpO1xuICBsZXQgcmVzdWx0OiBHcmFmYW5hUGx1Z2luIHwgdW5kZWZpbmVkO1xuXG4gIGlmIChpbmZvLnR5cGUgPT09IFBsdWdpblR5cGUuYXBwKSB7XG4gICAgcmVzdWx0ID0gYXdhaXQgaW1wb3J0QXBwUGx1Z2luKGluZm8pO1xuICB9XG4gIGlmIChpbmZvLnR5cGUgPT09IFBsdWdpblR5cGUuZGF0YXNvdXJjZSkge1xuICAgIHJlc3VsdCA9IGF3YWl0IGltcG9ydERhdGFTb3VyY2VQbHVnaW4oaW5mbyk7XG4gIH1cbiAgaWYgKGluZm8udHlwZSA9PT0gUGx1Z2luVHlwZS5wYW5lbCkge1xuICAgIGNvbnN0IHBhbmVsUGx1Z2luID0gYXdhaXQgaW1wb3J0UGFuZWxQbHVnaW5Gcm9tTWV0YShpbmZvIGFzIFBhbmVsUGx1Z2luTWV0YSk7XG4gICAgcmVzdWx0ID0gcGFuZWxQbHVnaW4gYXMgdW5rbm93biBhcyBHcmFmYW5hUGx1Z2luO1xuICB9XG4gIGlmIChpbmZvLnR5cGUgPT09IFBsdWdpblR5cGUucmVuZGVyZXIpIHtcbiAgICByZXN1bHQgPSB7IG1ldGE6IGluZm8gfSBhcyBHcmFmYW5hUGx1Z2luO1xuICB9XG5cbiAgaWYgKCFyZXN1bHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gUGx1Z2luIHR5cGU6ICcgKyBpbmZvLnR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUHJldmlvdXMoc3RhdGUpIHtcbiAgICB2YXIgcmVmID0gdXNlUmVmKCk7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBzdGF0ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59XG4iXSwibmFtZXMiOlsiY29uZmlnIiwiaXNUcmlhbCIsImV4cGlyeSIsImxpY2Vuc2VJbmZvIiwidHJpYWxFeHBpcnkiLCJoaWdobGlnaHRUcmlhbCIsImZlYXR1cmVUb2dnbGVzIiwiZmVhdHVyZUhpZ2hsaWdodHMiLCJSZWFjdCIsIkJ1dHRvbiIsIkljb24iLCJEYXNoYm9hcmRzVGFibGUiLCJkYXNoYm9hcmRzIiwib25JbXBvcnQiLCJvblJlbW92ZSIsImJ1dHRvblRleHQiLCJkYXNoYm9hcmQiLCJyZXZpc2lvbiIsImltcG9ydGVkUmV2aXNpb24iLCJtYXAiLCJpbmRleCIsImltcG9ydGVkIiwiaW1wb3J0ZWRVcmwiLCJ0aXRsZSIsInRleHRBbGlnbiIsImRhc2hib2FyZElkIiwibGFzdFZhbHVlRnJvbSIsImxvY2F0aW9uVXRpbCIsIkRhdGFTb3VyY2VXaXRoQmFja2VuZCIsImxvY2F0aW9uU2VydmljZSIsInVwZGF0ZU5hdkluZGV4IiwiZ2V0QmFja2VuZFNydiIsImFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIiwiZ2V0RGF0YXNvdXJjZVNydiIsImdldFBsdWdpblNldHRpbmdzIiwiaW1wb3J0RGF0YVNvdXJjZVBsdWdpbiIsImNvbnRleHRTcnYiLCJidWlsZENhdGVnb3JpZXMiLCJidWlsZE5hdk1vZGVsIiwiZGF0YVNvdXJjZUxvYWRlZCIsImRhdGFTb3VyY2VNZXRhTG9hZGVkIiwiZGF0YVNvdXJjZVBsdWdpbnNMb2FkIiwiZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQiLCJkYXRhU291cmNlc0xvYWRlZCIsImluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkIiwidGVzdERhdGFTb3VyY2VGYWlsZWQiLCJ0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nIiwidGVzdERhdGFTb3VyY2VTdWNjZWVkZWQiLCJnZXREYXRhU291cmNlIiwiZ2V0RGF0YVNvdXJjZU1ldGEiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzIiwicGFnZUlkIiwiZGVwZW5kZW5jaWVzIiwibG9hZERhdGFTb3VyY2UiLCJsb2FkRGF0YVNvdXJjZU1ldGEiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwiRXJyb3IiLCJsb2FkZWREYXRhU291cmNlIiwiZGF0YVNvdXJjZVNldHRpbmdzIiwicGx1Z2luIiwiZGF0YVNvdXJjZSIsImRhdGFTb3VyY2VzIiwiZGF0YVNvdXJjZU1ldGEiLCJ0eXBlIiwiaW1wb3J0ZWRQbHVnaW4iLCJlcnIiLCJ0ZXN0RGF0YVNvdXJjZSIsImRhdGFTb3VyY2VOYW1lIiwiZHNBcGkiLCJnZXQiLCJ0ZXN0RGF0YXNvdXJjZSIsIndpdGhOb0JhY2tlbmRDYWNoZSIsInJlc3VsdCIsInN0YXR1c1RleHQiLCJtZXNzYWdlIiwiZXJyTWVzc2FnZSIsImRldGFpbHMiLCJkYXRhIiwibG9hZERhdGFTb3VyY2VzIiwicmVzcG9uc2UiLCJ1aWQiLCJnZXREYXRhU291cmNlVXNpbmdVaWRPcklkIiwicGx1Z2luSW5mbyIsImlzQmFja2VuZCIsIkRhdGFTb3VyY2VDbGFzcyIsInByb3RvdHlwZSIsIm1ldGEiLCJiYWNrZW5kIiwiYnlVaWQiLCJmZXRjaCIsIm1ldGhvZCIsInVybCIsInBhcmFtcyIsInNob3dFcnJvckFsZXJ0Iiwib2siLCJjb25zb2xlIiwibG9nIiwiaWQiLCJwYXJzZUludCIsIk51bWJlciIsImlzTmFOIiwidG9TdHJpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJhc3N1cmVCYXNlVXJsIiwiYWRkRGF0YVNvdXJjZSIsImdldFN0b3JlIiwibmV3SW5zdGFuY2UiLCJuYW1lIiwiYWNjZXNzIiwiaXNEZWZhdWx0IiwibGVuZ3RoIiwibmFtZUV4aXRzIiwiZmluZE5ld05hbWUiLCJwb3N0IiwicmVsb2FkIiwiZmV0Y2hVc2VyUGVybWlzc2lvbnMiLCJwdXNoIiwiZGF0YXNvdXJjZSIsImxvYWREYXRhU291cmNlUGx1Z2lucyIsInBsdWdpbnMiLCJlbmFibGVkIiwiY2F0ZWdvcmllcyIsInVwZGF0ZURhdGFTb3VyY2UiLCJwdXQiLCJkZWxldGVEYXRhU291cmNlIiwiZGVsZXRlIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJuYW1lSGFzU3VmZml4IiwiZ2V0TmV3TmFtZSIsImluY3JlbWVudExhc3REaWdpdCIsImdldExhc3REaWdpdCIsImVuZHNXaXRoIiwic2xpY2UiLCJkaWdpdCIsIlBsdWdpblR5cGUiLCJmZWF0dXJlRW5hYmxlZCIsIml0ZW0iLCJjYXRlZ29yeUluZGV4IiwicGx1Z2luSW5kZXgiLCJlbnRlcnByaXNlUGx1Z2lucyIsImdldEVudGVycHJpc2VQaGFudG9tUGx1Z2lucyIsImNhdGVnb3J5IiwiZW50ZXJwcmlzZVBsdWdpbiIsImZpbmQiLCJlbnRlcnByaXNlIiwidW5saWNlbnNlZCIsImluZm8iLCJsaW5rcyIsImxpbmsiLCJnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luIiwic29ydFBsdWdpbnMiLCJjIiwic29ydGluZ1J1bGVzIiwicHJvbWV0aGV1cyIsImdyYXBoaXRlIiwibG9raSIsIm15c3FsIiwiamFlZ2VyIiwicG9zdGdyZXMiLCJnY2xvdWQiLCJzb3J0IiwiYSIsImIiLCJhU29ydCIsImJTb3J0IiwiZ2V0UGhhbnRvbVBsdWdpbiIsImRlc2NyaXB0aW9uIiwiaW1nVXJsIiwibW9kdWxlIiwiYmFzZVVybCIsImxvZ29zIiwic21hbGwiLCJsYXJnZSIsImF1dGhvciIsInNjcmVlbnNob3RzIiwidXBkYXRlZCIsInZlcnNpb24iLCJvcHRpb25zIiwicGx1Z2luQ2F0YWxvZ1VSTCIsIlByb0JhZGdlIiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsImxvYWRpbmdEU1R5cGUiLCJwbHVnaW5NZXRhIiwiaGlnaGxpZ2h0c0VuYWJsZWQiLCJuYXZNb2RlbCIsImltZyIsInN1YlRpdGxlIiwidGV4dCIsImJyZWFkY3J1bWJzIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpY29uIiwiY29uZmlnUGFnZXMiLCJwYWdlIiwiaW5jbHVkZXMiLCJoYXNEYXNoYm9hcmRzIiwiaGFzUm9sZSIsImlzTG9hZGluZ05hdiIsInBlcm1pc3Npb25zRXhwZXJpbWVudElkIiwiZHNQZXJtaXNzaW9ucyIsInRhYlN1ZmZpeCIsImV4cGVyaW1lbnRJZCIsImV2ZW50VmFyaWFudCIsImhhc1Blcm1pc3Npb24iLCJEYXRhU291cmNlc1Blcm1pc3Npb25zUmVhZCIsImFuYWx5dGljc0V4cGVyaW1lbnRJZCIsImFuYWx5dGljcyIsImNhY2hpbmdFeHBlcmltZW50SWQiLCJjYWNoaW5nIiwiaGlkZUZyb21UYWJzIiwiZ2V0RGF0YVNvdXJjZU5hdiIsIm1haW4iLCJwYWdlTmFtZSIsIm5vZGUiLCJjaGlsZCIsImluZGV4T2YiLCJnZXREYXRhU291cmNlTG9hZGluZ05hdiIsImJhc2ljQXV0aCIsImJhc2ljQXV0aFVzZXIiLCJiYXNpY0F1dGhQYXNzd29yZCIsIndpdGhDcmVkZW50aWFscyIsImRhdGFiYXNlIiwianNvbkRhdGEiLCJhdXRoVHlwZSIsImRlZmF1bHRSZWdpb24iLCJvcmdJZCIsInBhc3N3b3JkIiwicmVhZE9ubHkiLCJ0eXBlTmFtZSIsInR5cGVMb2dvVXJsIiwidXNlciIsInNlY3VyZUpzb25GaWVsZHMiLCJpbmNsdWRlIiwidW5kZWZpbmVkIiwiZ2V0RGF0YVNvdXJjZXMiLCJzdGF0ZSIsInJlZ2V4IiwiUmVnRXhwIiwic2VhcmNoUXVlcnkiLCJ0ZXN0IiwiZ2V0RGF0YVNvdXJjZVBsdWdpbnMiLCJkYXRhU291cmNlVHlwZVNlYXJjaFF1ZXJ5IiwiZGF0YVNvdXJjZUlkIiwiZ2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSIsImdldERhdGFTb3VyY2VzTGF5b3V0TW9kZSIsImxheW91dE1vZGUiLCJnZXREYXRhU291cmNlc0NvdW50IiwiZGF0YVNvdXJjZXNDb3VudCIsImNzcyIsImNsb25lRGVlcCIsImV4dGVuZCIsIlB1cmVDb21wb25lbnQiLCJkZXByZWNhdGlvbldhcm5pbmciLCJnZXRBbmd1bGFyTG9hZGVyIiwiQXBwQ29uZmlnQ3RybFdyYXBwZXIiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJwbHVnaW5JZCIsIm1vZGVsIiwicHJlVXBkYXRlSG9vayIsInRoZW4iLCJ1cGRhdGVDbWQiLCJwaW5uZWQiLCJzZWN1cmVKc29uRGF0YSIsInBvc3RVcGRhdGVIb29rIiwicmVzIiwiY2FsbGJhY2siLCJ1cGRhdGUiLCJhbmd1bGFyQ3RybCIsInJlZnJlc2giLCJjb21wb25lbnREaWRNb3VudCIsInNldFRpbWVvdXQiLCJzZXRTdGF0ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsImVsZW1lbnQiLCJhcHAiLCJsb2FkZXIiLCJ0ZW1wbGF0ZSIsInNjb3BlUHJvcHMiLCJjdHJsIiwiaXNBcHBDb25maWdDdHJsIiwibG9hZCIsInJlbmRlciIsIndpdGhSaWdodE1hcmdpbiIsIm1hcmdpblJpZ2h0IiwiZW5hYmxlIiwiZGlzYWJsZSIsIlBsdWdpbkVycm9yQ29kZSIsIkJhZGdlIiwiUGx1Z2luRGlzYWJsZWRCYWRnZSIsImVycm9yIiwidG9vbHRpcCIsImVycm9yQ29kZVRvVG9vbHRpcCIsIm1vZGlmaWVkU2lnbmF0dXJlIiwiaW52YWxpZFNpZ25hdHVyZSIsIm1pc3NpbmdTaWduYXR1cmUiLCJIb3Jpem9udGFsR3JvdXAiLCJQbHVnaW5TaWduYXR1cmVCYWRnZSIsInVzZVN0eWxlczIiLCJnZXRCYWRnZUNvbG9yIiwiUGx1Z2luRW50ZXJwcmlzZUJhZGdlIiwiY3VzdG9tQmFkZ2VTdHlsZXMiLCJvbkNsaWNrIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW4iLCJzaWduYXR1cmUiLCJQbHVnaW5JbnN0YWxsZWRCYWRnZSIsIlBsdWdpblVwZGF0ZUF2YWlsYWJsZUJhZGdlIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiaGFzVXBkYXRlIiwiaXNDb3JlIiwicmVuZGVyZXIiLCJ0aGVtZSIsImNvbG9ycyIsInNlY29uZGFyeSIsInR5cG9ncmFwaHkiLCJib2R5U21hbGwiLCJmb250U2l6ZSIsImJhY2tncm91bmQiLCJwcmltYXJ5IiwiYm9yZGVyIiwic3Ryb25nIiwidXBkYXRlUGx1Z2luU2V0dGluZ3MiLCJ1c2VQbHVnaW5Db25maWciLCJHZXRTdGFydGVkV2l0aEFwcCIsInZhbHVlIiwicGx1Z2luQ29uZmlnIiwidXBkYXRlUGx1Z2luU2V0dGluZ3NBbmRSZWxvYWQiLCJlIiwidXNlQ2FsbGJhY2siLCJ1c2VEaXNwYXRjaCIsImlzRGF0YVNvdXJjZUVkaXRvciIsIkdldFN0YXJ0ZWRXaXRoRGF0YVNvdXJjZSIsIm9uQWRkRGF0YVNvdXJjZSIsIkdldFN0YXJ0ZWRXaXRoUGx1Z2luIiwiaXNJbnN0YWxsZWQiLCJpc0Rpc2FibGVkIiwiTGlua0J1dHRvbiIsImdldEV4dGVybmFsTWFuYWdlTGluayIsIlBsdWdpblN0YXR1cyIsIkV4dGVybmFsbHlNYW5hZ2VkQnV0dG9uIiwicGx1Z2luU3RhdHVzIiwiZXh0ZXJuYWxNYW5hZ2VMaW5rIiwiVVBEQVRFIiwiVU5JTlNUQUxMIiwiaXNJbnN0YWxsQ29udHJvbHNFbmFibGVkIiwiaXNHcmFmYW5hQWRtaW4iLCJ1c2VJc1JlbW90ZVBsdWdpbnNBdmFpbGFibGUiLCJJbnN0YWxsQ29udHJvbHNCdXR0b24iLCJJbnN0YWxsQ29udHJvbHMiLCJsYXRlc3RDb21wYXRpYmxlVmVyc2lvbiIsImlzRXh0ZXJuYWxseU1hbmFnZWQiLCJwbHVnaW5BZG1pbkV4dGVybmFsTWFuYWdlRW5hYmxlZCIsImlzUmVtb3RlUGx1Z2luc0F2YWlsYWJsZSIsImlzQ29tcGF0aWJsZSIsIkJvb2xlYW4iLCJpc0luc3RhbGxDb250cm9sc0Rpc2FibGVkIiwiSU5TVEFMTCIsImlzRW50ZXJwcmlzZSIsImlzRGV2IiwiaXNQdWJsaXNoZWQiLCJ1c2VTdGF0ZSIsIkFwcEV2ZW50cyIsIkNvbmZpcm1Nb2RhbCIsImFwcEV2ZW50cyIsInVzZUluc3RhbGxTdGF0dXMiLCJ1c2VVbmluc3RhbGxTdGF0dXMiLCJ1c2VJbnN0YWxsIiwidXNlVW5pbnN0YWxsIiwiaXNJbnN0YWxsaW5nIiwiZXJyb3JJbnN0YWxsaW5nIiwiaXNVbmluc3RhbGxpbmciLCJlcnJvclVuaW5zdGFsbGluZyIsImluc3RhbGwiLCJ1bmluc3RhbGwiLCJpc0NvbmZpcm1Nb2RhbFZpc2libGUiLCJzZXRJc0NvbmZpcm1Nb2RhbFZpc2libGUiLCJzaG93Q29uZmlybU1vZGFsIiwiaGlkZUNvbmZpcm1Nb2RhbCIsInVuaW5zdGFsbEJ0blRleHQiLCJvbkluc3RhbGwiLCJlbWl0IiwiYWxlcnRTdWNjZXNzIiwib25Vbmluc3RhbGwiLCJvblVwZGF0ZSIsIkxvYWRpbmdQbGFjZWhvbGRlciIsIkxvYWRlciIsIlBsdWdpbkRhc2hib2FyZHMiLCJpbXBvcnROZXh0IiwiaW1wb3J0IiwiZGFzaCIsIm92ZXJ3cml0ZSIsImluc3RhbGxDbWQiLCJwYXRoIiwiaW5wdXRzIiwibG9hZGluZyIsInJlbW92ZSIsImN4IiwiVmVyc2lvbkxpc3QiLCJQbHVnaW5UYWJJZHMiLCJQbHVnaW5EZXRhaWxzQm9keSIsInF1ZXJ5UGFyYW1zIiwiT1ZFUlZJRVciLCJyZWFkbWUiLCJjb250YWluZXIiLCJfX2h0bWwiLCJWRVJTSU9OUyIsInZlcnNpb25zIiwiaW5zdGFsbGVkVmVyc2lvbiIsIkNPTkZJRyIsImFuZ3VsYXJDb25maWdDdHJsIiwiY29uZmlnUGFnZSIsIkRBU0hCT0FSRFMiLCJzcGFjaW5nIiwic2VsZWN0b3JzIiwiQWxlcnQiLCJQbHVnaW5EZXRhaWxzRGlzYWJsZWRFcnJvciIsImNsYXNzTmFtZSIsInBhZ2VzIiwiUGx1Z2luUGFnZSIsImRpc2FibGVkSW5mbyIsInJlbmRlckRlc2NyaXB0aW9uRnJvbUVycm9yIiwiZ2V0TGF0ZXN0Q29tcGF0aWJsZVZlcnNpb24iLCJQbHVnaW5EZXRhaWxzSGVhZGVyRGVwZW5kZW5jaWVzIiwiUGx1Z2luRGV0YWlsc0hlYWRlclNpZ25hdHVyZSIsIlBsdWdpbkxvZ28iLCJQbHVnaW5EZXRhaWxzSGVhZGVyIiwiY3VycmVudFVybCIsInBhcmVudFVybCIsImhlYWRlckNvbnRhaW5lciIsImhlYWRlcldyYXBwZXIiLCJicmVhZGNydW1iIiwidGV4dFVuZGVybGluZSIsImhlYWRlckluZm9ybWF0aW9uUm93Iiwib3JnTmFtZSIsImRvd25sb2FkcyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJoZWFkZXJJbmZvcm1hdGlvblJvd1NlY29uZGFyeSIsImgyIiwiaDQiLCJib2R5IiwiaGVhZGVyT3JnTmFtZSIsIlBsdWdpbkljb25OYW1lIiwicGx1Z2luRGVwZW5kZW5jaWVzIiwiZ3JhZmFuYURlcGVuZGVuY3kiLCJoYXNOb0RlcGVuZGVuY3lJbmZvIiwiZGVwZW5kZW5jeVRpdGxlIiwicCIsImZvbnRXZWlnaHRCb2xkIiwiUGx1Z2luU2lnbmF0dXJlU3RhdHVzIiwiUGx1Z2luU2lnbmF0dXJlRGV0YWlsc0JhZGdlIiwiaXNTaWduYXR1cmVWYWxpZCIsInZhbGlkIiwic2lnbmF0dXJlVHlwZSIsInNpZ25hdHVyZU9yZyIsIlBsdWdpbkRldGFpbHNTaWduYXR1cmUiLCJpbnRlcm5hbCIsImlzRGlzYWJsZWREdWVUb29TaWduYXR1cmVFcnJvciIsInNpZ25hdHVyZUluZm8iLCJhbHQiLCJzcmMiLCJoZWlnaHQiLCJjYXBpdGFsaXplIiwiUGx1Z2luU2lnbmF0dXJlVHlwZSIsIlNJR05BVFVSRV9JQ09OUyIsImdyYWZhbmEiLCJjb21tZXJjaWFsIiwiY29tbXVuaXR5IiwiREVGQVVMVCIsInNpZ25hdHVyZVR5cGVUZXh0Iiwic2lnbmF0dXJlSWNvbiIsIkRldGFpbHNCYWRnZSIsImJhZGdlIiwiY2FudmFzIiwiZGF0ZVRpbWVGb3JtYXRUaW1lQWdvIiwidGFibGUiLCJpc0luc3RhbGxlZFZlcnNpb24iLCJjdXJyZW50VmVyc2lvbiIsImNyZWF0ZWRBdCIsImg1IiwidXNlQXN5bmMiLCJsb2FkUGx1Z2luIiwidXNlTWVtbyIsInVzZUxvY2F0aW9uIiwiUGx1Z2luSW5jbHVkZVR5cGUiLCJpc09yZ0FkbWluIiwiUGx1Z2luVGFiTGFiZWxzIiwidXNlUGx1Z2luRGV0YWlsc1RhYnMiLCJkZWZhdWx0VGFicyIsInBhdGhuYW1lIiwidGFicyIsImRlZmF1bHRUYWIiLCJjYW5Db25maWd1cmVQbHVnaW5zIiwibGFiZWwiLCJ1c2VFZmZlY3QiLCJ1c2VQcmV2aW91cyIsIlRhYnNCYXIiLCJUYWJDb250ZW50IiwiVGFiIiwiTGF5b3V0IiwiUGFnZSIsIkFwcE5vdGlmaWNhdGlvblNldmVyaXR5IiwidXNlR2V0U2luZ2xlIiwidXNlRmV0Y2hTdGF0dXMiLCJ1c2VGZXRjaERldGFpbHNTdGF0dXMiLCJQbHVnaW5EZXRhaWxzIiwibWF0Y2giLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImlzTG9hZGluZyIsImlzRmV0Y2hMb2FkaW5nIiwiaXNGZXRjaERldGFpbHNMb2FkaW5nIiwicHJldlRhYnMiLCJoYXNVbmluc3RhbGxlZFdpdGhDb25maWdQYWdlcyIsImlzVmlld2luZ0FDb25maWdQYWdlIiwicmVwbGFjZSIsIldhcm5pbmciLCJ0YWIiLCJ0YWJDb250ZW50IiwiYWxlcnQiLCJ1c2VTZWxlY3RvciIsIlNvcnRlcnMiLCJmZXRjaEFsbCIsImZldGNoRGV0YWlscyIsImZldGNoUmVtb3RlUGx1Z2lucyIsInNldERpc3BsYXlNb2RlIiwic2VsZWN0QWxsIiwic2VsZWN0QnlJZCIsInNlbGVjdElzUmVxdWVzdFBlbmRpbmciLCJzZWxlY3RSZXF1ZXN0RXJyb3IiLCJzZWxlY3RJc1JlcXVlc3ROb3RGZXRjaGVkIiwic2VsZWN0RGlzcGxheU1vZGUiLCJzZWxlY3RQbHVnaW5FcnJvcnMiLCJ1c2VHZXRBbGxXaXRoRmlsdGVycyIsInF1ZXJ5IiwiZmlsdGVyQnkiLCJmaWx0ZXJCeVR5cGUiLCJzb3J0QnkiLCJuYW1lQXNjIiwidXNlRmV0Y2hBbGwiLCJmaWx0ZXJlZCIsInNvcnRlZEFuZEZpbHRlcmVkIiwidXNlR2V0QWxsIiwidXNlRmV0Y2hEZXRhaWxzIiwidXNlR2V0RXJyb3JzIiwiaXNVcGRhdGluZyIsInR5cGVQcmVmaXgiLCJpc05vdEZldGNoZWQiLCJpc05vdEZldGNoaW5nIiwic2hvdWxkRmV0Y2giLCJ1c2VEaXNwbGF5TW9kZSIsImRpc3BsYXlNb2RlIiwidiIsImNyZWF0ZVNlbGVjdG9yIiwiUmVxdWVzdFN0YXR1cyIsInBsdWdpbnNBZGFwdGVyIiwic2VsZWN0Um9vdCIsInNlbGVjdEl0ZW1zIiwiaXRlbXMiLCJzZXR0aW5ncyIsImdldFNlbGVjdG9ycyIsInNlbGVjdEluc3RhbGxlZCIsImZpbmRCeUluc3RhbGxBbmRUeXBlIiwiZmluZEJ5S2V5d29yZCIsInNlYXJjaEJ5IiwiZmllbGRzIiwic29tZSIsImYiLCJmaWx0ZXJlZFBsdWdpbnMiLCJzZWFyY2hlZFBsdWdpbnMiLCJlcnJvckNvZGUiLCJzZWxlY3RSZXF1ZXN0IiwiYWN0aW9uVHlwZSIsInJlcXVlc3RzIiwicmVxdWVzdCIsInN0YXR1cyIsIlBlbmRpbmciLCJSZWplY3RlZCIsImltcG9ydFBhbmVsUGx1Z2luRnJvbU1ldGEiLCJpbXBvcnRBcHBQbHVnaW4iLCJwYW5lbCIsInBhbmVsUGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==