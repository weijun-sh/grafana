"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DataSourcesListPage"],{

/***/ "./public/app/core/components/PageActionBar/PageActionBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageActionBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




class PageActionBar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    const {
      searchQuery,
      linkButton,
      setSearchQuery,
      target,
      placeholder = 'Search by name or type'
    } = this.props;
    const linkProps = {
      href: linkButton === null || linkButton === void 0 ? void 0 : linkButton.href,
      disabled: linkButton === null || linkButton === void 0 ? void 0 : linkButton.disabled
    };

    if (target) {
      linkProps.target = target;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "page-action-bar",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "gf-form gf-form--grow",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.FilterInput, {
          value: searchQuery,
          onChange: setSearchQuery,
          placeholder: placeholder
        })
      }), linkButton && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, Object.assign({}, linkProps, {
        children: linkButton.title
      }))]
    });
  }

}

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

/***/ "./public/app/features/datasources/DataSourcesList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSourcesList": () => (/* binding */ DataSourcesList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Tag;

// Libraries

 // Types




const DataSourcesList = ({
  dataSources,
  layoutMode
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul", {
    className: styles.list,
    children: dataSources.map(dataSource => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
          href: `datasources/edit/${dataSource.uid}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Heading, {
            children: dataSource.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Figure, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
              src: dataSource.typeLogoUrl,
              alt: "",
              height: "40px",
              width: "40px",
              className: styles.logo
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
            children: [dataSource.typeName, dataSource.url, dataSource.isDefault && (_Tag || (_Tag = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tag, {
              name: 'default',
              colorIndex: 1
            }, "default-tag")))]
          })]
        })
      }, dataSource.id);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataSourcesList);

const getStyles = () => {
  return {
    list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      listStyle: 'none',
      display: 'grid' // gap: '8px', Add back when legacy support for old Card interface is dropped

    }),
    logo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      objectFit: 'contain'
    })
  };
};

/***/ }),

/***/ "./public/app/features/datasources/DataSourcesListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSourcesListPage": () => (/* binding */ DataSourcesListPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PageActionBar_PageActionBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/PageActionBar/PageActionBar.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _DataSourcesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/datasources/DataSourcesList.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/datasources/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
















function mapStateToProps(state) {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__.getNavModel)(state.navIndex, 'datasources'),
    dataSources: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_11__.getDataSources)(state.dataSources),
    layoutMode: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_11__.getDataSourcesLayoutMode)(state.dataSources),
    dataSourcesCount: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_11__.getDataSourcesCount)(state.dataSources),
    searchQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_11__.getDataSourcesSearchQuery)(state.dataSources),
    hasFetched: state.dataSources.hasFetched
  };
}

const mapDispatchToProps = {
  loadDataSources: _state_actions__WEBPACK_IMPORTED_MODULE_9__.loadDataSources,
  setDataSourcesSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_10__.setDataSourcesSearchQuery,
  setDataSourcesLayoutMode: _state_reducers__WEBPACK_IMPORTED_MODULE_10__.setDataSourcesLayoutMode
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const emptyListModel = {
  title: 'No data sources defined',
  buttonIcon: 'database',
  buttonLink: 'datasources/new',
  buttonTitle: 'Add data source',
  proTip: 'You can also define data sources through configuration files.',
  proTipLink: 'http://docs.grafana.org/administration/provisioning/#datasources?utm_source=grafana_ds_list',
  proTipLinkTitle: 'Learn more',
  proTipTarget: '_blank'
};
class DataSourcesListPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  componentDidMount() {
    this.props.loadDataSources();
  }

  render() {
    const {
      dataSources,
      dataSourcesCount,
      navModel,
      layoutMode,
      searchQuery,
      setDataSourcesSearchQuery,
      hasFetched
    } = this.props;
    const canCreateDataSource = app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.DataSourcesCreate) && app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.DataSourcesWrite);
    const linkButton = {
      href: 'datasources/new',
      title: 'Add data source',
      disabled: !canCreateDataSource
    };
    const emptyList = Object.assign({}, emptyListModel, {
      buttonDisabled: !canCreateDataSource
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
        isLoading: !hasFetched,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
          children: [hasFetched && dataSourcesCount === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, emptyList)), hasFetched && dataSourcesCount > 0 && [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(app_core_components_PageActionBar_PageActionBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
            searchQuery: searchQuery,
            setSearchQuery: query => setDataSourcesSearchQuery(query),
            linkButton: linkButton
          }, "action-bar"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_DataSourcesList__WEBPACK_IMPORTED_MODULE_8__["default"], {
            dataSources: dataSources,
            layoutMode: layoutMode
          }, "list")]]
        })
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(DataSourcesListPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUssb0JBQW9CLEdBQUlqTyxLQUFELElBQTZCO0FBQy9ELFFBQU04TixLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXL04sS0FBSyxDQUFDa08seUJBQWpCLEVBQTRDLEdBQTVDLENBQWQ7QUFFQSxTQUFPbE8sS0FBSyxDQUFDK0csT0FBTixDQUFjTyxNQUFkLENBQXNCMUQsSUFBRCxJQUFnQztBQUMxRCxXQUFPa0ssS0FBSyxDQUFDRSxJQUFOLENBQVdwSyxJQUFJLENBQUNwRixJQUFoQixDQUFQO0FBQ0QsR0FGTSxDQUFQO0FBR0QsQ0FOTTtBQVFBLE1BQU1zRSxhQUFhLEdBQUcsQ0FBQzlDLEtBQUQsRUFBMEJtTyxZQUExQixLQUE4RTtBQUN6RyxNQUFJbk8sS0FBSyxDQUFDMUIsVUFBTixDQUFpQkMsR0FBakIsS0FBeUI0UCxZQUE3QixFQUEyQztBQUN6QyxXQUFPbk8sS0FBSyxDQUFDMUIsVUFBYjtBQUNEOztBQUNELFNBQU8sRUFBUDtBQUNELENBTE07QUFPQSxNQUFNeUUsaUJBQWlCLEdBQUcsQ0FBQy9DLEtBQUQsRUFBMEI0RCxJQUExQixLQUFpRTtBQUNoRyxNQUFJNUQsS0FBSyxDQUFDMkQsY0FBTixDQUFxQjdFLEVBQXJCLEtBQTRCOEUsSUFBaEMsRUFBc0M7QUFDcEMsV0FBTzVELEtBQUssQ0FBQzJELGNBQWI7QUFDRDs7QUFFRCxTQUFPLEVBQVA7QUFDRCxDQU5NO0FBUUEsTUFBTTdELHlCQUF5QixHQUFJRSxLQUFELElBQTZCQSxLQUFLLENBQUN2RCxXQUFyRTtBQUNBLE1BQU1vRCx3QkFBd0IsR0FBSUcsS0FBRCxJQUE2QkEsS0FBSyxDQUFDL0IsVUFBcEU7QUFDQSxNQUFNMkIsbUJBQW1CLEdBQUlJLEtBQUQsSUFBNkJBLEtBQUssQ0FBQ0csZ0JBQS9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1BhZ2VBY3Rpb25CYXIvUGFnZUFjdGlvbkJhci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvRGF0YVNvdXJjZXNMaXN0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9EYXRhU291cmNlc0xpc3RQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL2J1aWxkQ2F0ZWdvcmllcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9uYXZNb2RlbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zdGF0ZS9zZWxlY3RvcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExpbmtCdXR0b24sIEZpbHRlcklucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgc2VhcmNoUXVlcnk6IHN0cmluZztcbiAgc2V0U2VhcmNoUXVlcnk6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBsaW5rQnV0dG9uPzogeyBocmVmOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IGRpc2FibGVkPzogYm9vbGVhbiB9O1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlQWN0aW9uQmFyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWFyY2hRdWVyeSwgbGlua0J1dHRvbiwgc2V0U2VhcmNoUXVlcnksIHRhcmdldCwgcGxhY2Vob2xkZXIgPSAnU2VhcmNoIGJ5IG5hbWUgb3IgdHlwZScgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbGlua1Byb3BzOiB0eXBlb2YgTGlua0J1dHRvbi5kZWZhdWx0UHJvcHMgPSB7IGhyZWY6IGxpbmtCdXR0b24/LmhyZWYsIGRpc2FibGVkOiBsaW5rQnV0dG9uPy5kaXNhYmxlZCB9O1xuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgbGlua1Byb3BzLnRhcmdldCA9IHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtIGdmLWZvcm0tLWdyb3dcIj5cbiAgICAgICAgICA8RmlsdGVySW5wdXQgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17c2V0U2VhcmNoUXVlcnl9IHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtsaW5rQnV0dG9uICYmIDxMaW5rQnV0dG9uIHsuLi5saW5rUHJvcHN9PntsaW5rQnV0dG9uLnRpdGxlfTwvTGlua0J1dHRvbj59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lL3NyYyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RyaWFsKCkge1xuICBjb25zdCBleHBpcnkgPSBjb25maWcubGljZW5zZUluZm8/LnRyaWFsRXhwaXJ5O1xuICByZXR1cm4gISEoZXhwaXJ5ICYmIGV4cGlyeSA+IDApO1xufVxuXG5leHBvcnQgY29uc3QgaGlnaGxpZ2h0VHJpYWwgPSAoKSA9PiBpc1RyaWFsKCkgJiYgY29uZmlnLmZlYXR1cmVUb2dnbGVzLmZlYXR1cmVIaWdobGlnaHRzO1xuIiwiLy8gTGlicmFyaWVzXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG4vLyBUeXBlc1xuaW1wb3J0IHsgRGF0YVNvdXJjZVNldHRpbmdzLCBMYXlvdXRNb2RlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBDYXJkLCBUYWcsIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGRhdGFTb3VyY2VzOiBEYXRhU291cmNlU2V0dGluZ3NbXTtcbiAgbGF5b3V0TW9kZTogTGF5b3V0TW9kZTtcbn1cblxuZXhwb3J0IGNvbnN0IERhdGFTb3VyY2VzTGlzdDogRkM8UHJvcHM+ID0gKHsgZGF0YVNvdXJjZXMsIGxheW91dE1vZGUgfSkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cbiAgICAgIHtkYXRhU291cmNlcy5tYXAoKGRhdGFTb3VyY2UpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkga2V5PXtkYXRhU291cmNlLmlkfT5cbiAgICAgICAgICAgIDxDYXJkIGhyZWY9e2BkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9YH0+XG4gICAgICAgICAgICAgIDxDYXJkLkhlYWRpbmc+e2RhdGFTb3VyY2UubmFtZX08L0NhcmQuSGVhZGluZz5cbiAgICAgICAgICAgICAgPENhcmQuRmlndXJlPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhU291cmNlLnR5cGVMb2dvVXJsfSBhbHQ9XCJcIiBoZWlnaHQ9XCI0MHB4XCIgd2lkdGg9XCI0MHB4XCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gLz5cbiAgICAgICAgICAgICAgPC9DYXJkLkZpZ3VyZT5cbiAgICAgICAgICAgICAgPENhcmQuTWV0YT5cbiAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS50eXBlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2UudXJsLFxuICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZS5pc0RlZmF1bHQgJiYgPFRhZyBrZXk9XCJkZWZhdWx0LXRhZ1wiIG5hbWU9eydkZWZhdWx0J30gY29sb3JJbmRleD17MX0gLz4sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhU291cmNlc0xpc3Q7XG5cbmNvbnN0IGdldFN0eWxlcyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsaXN0OiBjc3Moe1xuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAvLyBnYXA6ICc4cHgnLCBBZGQgYmFjayB3aGVuIGxlZ2FjeSBzdXBwb3J0IGZvciBvbGQgQ2FyZCBpbnRlcmZhY2UgaXMgZHJvcHBlZFxuICAgIH0pLFxuICAgIGxvZ286IGNzcyh7XG4gICAgICBvYmplY3RGaXQ6ICdjb250YWluJyxcbiAgICB9KSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIENvbm5lY3RlZFByb3BzIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBJY29uTmFtZSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBFbXB0eUxpc3RDVEEgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9FbXB0eUxpc3RDVEEvRW1wdHlMaXN0Q1RBJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCBQYWdlQWN0aW9uQmFyIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZUFjdGlvbkJhci9QYWdlQWN0aW9uQmFyJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IFN0b3JlU3RhdGUsIEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgRGF0YVNvdXJjZXNMaXN0IGZyb20gJy4vRGF0YVNvdXJjZXNMaXN0JztcbmltcG9ydCB7IGxvYWREYXRhU291cmNlcyB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBzZXREYXRhU291cmNlc0xheW91dE1vZGUsIHNldERhdGFTb3VyY2VzU2VhcmNoUXVlcnkgfSBmcm9tICcuL3N0YXRlL3JlZHVjZXJzJztcbmltcG9ydCB7XG4gIGdldERhdGFTb3VyY2VzLFxuICBnZXREYXRhU291cmNlc0NvdW50LFxuICBnZXREYXRhU291cmNlc0xheW91dE1vZGUsXG4gIGdldERhdGFTb3VyY2VzU2VhcmNoUXVlcnksXG59IGZyb20gJy4vc3RhdGUvc2VsZWN0b3JzJztcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBTdG9yZVN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbmF2TW9kZWw6IGdldE5hdk1vZGVsKHN0YXRlLm5hdkluZGV4LCAnZGF0YXNvdXJjZXMnKSxcbiAgICBkYXRhU291cmNlczogZ2V0RGF0YVNvdXJjZXMoc3RhdGUuZGF0YVNvdXJjZXMpLFxuICAgIGxheW91dE1vZGU6IGdldERhdGFTb3VyY2VzTGF5b3V0TW9kZShzdGF0ZS5kYXRhU291cmNlcyksXG4gICAgZGF0YVNvdXJjZXNDb3VudDogZ2V0RGF0YVNvdXJjZXNDb3VudChzdGF0ZS5kYXRhU291cmNlcyksXG4gICAgc2VhcmNoUXVlcnk6IGdldERhdGFTb3VyY2VzU2VhcmNoUXVlcnkoc3RhdGUuZGF0YVNvdXJjZXMpLFxuICAgIGhhc0ZldGNoZWQ6IHN0YXRlLmRhdGFTb3VyY2VzLmhhc0ZldGNoZWQsXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgbG9hZERhdGFTb3VyY2VzLFxuICBzZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5LFxuICBzZXREYXRhU291cmNlc0xheW91dE1vZGUsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuY29uc3QgZW1wdHlMaXN0TW9kZWwgPSB7XG4gIHRpdGxlOiAnTm8gZGF0YSBzb3VyY2VzIGRlZmluZWQnLFxuICBidXR0b25JY29uOiAnZGF0YWJhc2UnIGFzIEljb25OYW1lLFxuICBidXR0b25MaW5rOiAnZGF0YXNvdXJjZXMvbmV3JyxcbiAgYnV0dG9uVGl0bGU6ICdBZGQgZGF0YSBzb3VyY2UnLFxuICBwcm9UaXA6ICdZb3UgY2FuIGFsc28gZGVmaW5lIGRhdGEgc291cmNlcyB0aHJvdWdoIGNvbmZpZ3VyYXRpb24gZmlsZXMuJyxcbiAgcHJvVGlwTGluazogJ2h0dHA6Ly9kb2NzLmdyYWZhbmEub3JnL2FkbWluaXN0cmF0aW9uL3Byb3Zpc2lvbmluZy8jZGF0YXNvdXJjZXM/dXRtX3NvdXJjZT1ncmFmYW5hX2RzX2xpc3QnLFxuICBwcm9UaXBMaW5rVGl0bGU6ICdMZWFybiBtb3JlJyxcbiAgcHJvVGlwVGFyZ2V0OiAnX2JsYW5rJyxcbn07XG5cbmV4cG9ydCBjbGFzcyBEYXRhU291cmNlc0xpc3RQYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmxvYWREYXRhU291cmNlcygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZXMsIGRhdGFTb3VyY2VzQ291bnQsIG5hdk1vZGVsLCBsYXlvdXRNb2RlLCBzZWFyY2hRdWVyeSwgc2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSwgaGFzRmV0Y2hlZCB9ID1cbiAgICAgIHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjYW5DcmVhdGVEYXRhU291cmNlID1cbiAgICAgIGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzQ3JlYXRlKSAmJlxuICAgICAgY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNXcml0ZSk7XG5cbiAgICBjb25zdCBsaW5rQnV0dG9uID0ge1xuICAgICAgaHJlZjogJ2RhdGFzb3VyY2VzL25ldycsXG4gICAgICB0aXRsZTogJ0FkZCBkYXRhIHNvdXJjZScsXG4gICAgICBkaXNhYmxlZDogIWNhbkNyZWF0ZURhdGFTb3VyY2UsXG4gICAgfTtcblxuICAgIGNvbnN0IGVtcHR5TGlzdCA9IHtcbiAgICAgIC4uLmVtcHR5TGlzdE1vZGVsLFxuICAgICAgYnV0dG9uRGlzYWJsZWQ6ICFjYW5DcmVhdGVEYXRhU291cmNlLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXshaGFzRmV0Y2hlZH0+XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtoYXNGZXRjaGVkICYmIGRhdGFTb3VyY2VzQ291bnQgPT09IDAgJiYgPEVtcHR5TGlzdENUQSB7Li4uZW1wdHlMaXN0fSAvPn1cbiAgICAgICAgICAgIHtoYXNGZXRjaGVkICYmXG4gICAgICAgICAgICAgIGRhdGFTb3VyY2VzQ291bnQgPiAwICYmIFtcbiAgICAgICAgICAgICAgICA8UGFnZUFjdGlvbkJhclxuICAgICAgICAgICAgICAgICAgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoUXVlcnk9eyhxdWVyeSkgPT4gc2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeShxdWVyeSl9XG4gICAgICAgICAgICAgICAgICBsaW5rQnV0dG9uPXtsaW5rQnV0dG9ufVxuICAgICAgICAgICAgICAgICAga2V5PVwiYWN0aW9uLWJhclwiXG4gICAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICAgICAgPERhdGFTb3VyY2VzTGlzdCBkYXRhU291cmNlcz17ZGF0YVNvdXJjZXN9IGxheW91dE1vZGU9e2xheW91dE1vZGV9IGtleT1cImxpc3RcIiAvPixcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKERhdGFTb3VyY2VzTGlzdFBhZ2UpO1xuIiwiaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgRGF0YVNvdXJjZVNldHRpbmdzLCBsb2NhdGlvblV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VXaXRoQmFja2VuZCwgZ2V0RGF0YVNvdXJjZVNydiwgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB1cGRhdGVOYXZJbmRleCB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0QmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcbmltcG9ydCB7IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIH0gZnJvbSAnYXBwL2NvcmUvdXRpbHMvYWNjZXNzQ29udHJvbCc7XG5pbXBvcnQgeyBnZXREYXRhc291cmNlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvZGF0YXNvdXJjZV9zcnYnO1xuaW1wb3J0IHsgZ2V0UGx1Z2luU2V0dGluZ3MgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9wbHVnaW5TZXR0aW5ncyc7XG5pbXBvcnQgeyBpbXBvcnREYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvcGx1Z2luX2xvYWRlcic7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnksIFRodW5rRGlzcGF0Y2gsIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuXG5pbXBvcnQgeyBidWlsZENhdGVnb3JpZXMgfSBmcm9tICcuL2J1aWxkQ2F0ZWdvcmllcyc7XG5pbXBvcnQgeyBidWlsZE5hdk1vZGVsIH0gZnJvbSAnLi9uYXZNb2RlbCc7XG5pbXBvcnQge1xuICBkYXRhU291cmNlTG9hZGVkLFxuICBkYXRhU291cmNlTWV0YUxvYWRlZCxcbiAgZGF0YVNvdXJjZVBsdWdpbnNMb2FkLFxuICBkYXRhU291cmNlUGx1Z2luc0xvYWRlZCxcbiAgZGF0YVNvdXJjZXNMb2FkZWQsXG4gIGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQsXG4gIGluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQsXG4gIHRlc3REYXRhU291cmNlRmFpbGVkLFxuICB0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nLFxuICB0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZCxcbn0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlLCBnZXREYXRhU291cmNlTWV0YSB9IGZyb20gJy4vc2VsZWN0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhU291cmNlVHlwZXNMb2FkZWRQYXlsb2FkIHtcbiAgcGx1Z2luczogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXTtcbiAgY2F0ZWdvcmllczogRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5pdERhdGFTb3VyY2VTZXR0aW5nRGVwZW5kZW5jaWVzIHtcbiAgbG9hZERhdGFTb3VyY2U6IHR5cGVvZiBsb2FkRGF0YVNvdXJjZTtcbiAgbG9hZERhdGFTb3VyY2VNZXRhOiB0eXBlb2YgbG9hZERhdGFTb3VyY2VNZXRhO1xuICBnZXREYXRhU291cmNlOiB0eXBlb2YgZ2V0RGF0YVNvdXJjZTtcbiAgZ2V0RGF0YVNvdXJjZU1ldGE6IHR5cGVvZiBnZXREYXRhU291cmNlTWV0YTtcbiAgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbjogdHlwZW9mIGltcG9ydERhdGFTb3VyY2VQbHVnaW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVzdERhdGFTb3VyY2VEZXBlbmRlbmNpZXMge1xuICBnZXREYXRhc291cmNlU3J2OiB0eXBlb2YgZ2V0RGF0YVNvdXJjZVNydjtcbiAgZ2V0QmFja2VuZFNydjogdHlwZW9mIGdldEJhY2tlbmRTcnY7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0RGF0YVNvdXJjZVNldHRpbmdzID0gKFxuICBwYWdlSWQ6IHN0cmluZyxcbiAgZGVwZW5kZW5jaWVzOiBJbml0RGF0YVNvdXJjZVNldHRpbmdEZXBlbmRlbmNpZXMgPSB7XG4gICAgbG9hZERhdGFTb3VyY2UsXG4gICAgbG9hZERhdGFTb3VyY2VNZXRhLFxuICAgIGdldERhdGFTb3VyY2UsXG4gICAgZ2V0RGF0YVNvdXJjZU1ldGEsXG4gICAgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbixcbiAgfVxuKTogVGh1bmtSZXN1bHQ8dm9pZD4gPT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGlmICghcGFnZUlkKSB7XG4gICAgICBkaXNwYXRjaChpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkKG5ldyBFcnJvcignSW52YWxpZCBJRCcpKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvYWRlZERhdGFTb3VyY2UgPSBhd2FpdCBkaXNwYXRjaChkZXBlbmRlbmNpZXMubG9hZERhdGFTb3VyY2UocGFnZUlkKSk7XG4gICAgICBhd2FpdCBkaXNwYXRjaChkZXBlbmRlbmNpZXMubG9hZERhdGFTb3VyY2VNZXRhKGxvYWRlZERhdGFTb3VyY2UpKTtcblxuICAgICAgLy8gaGF2ZSB3ZSBhbHJlYWR5IGxvYWRlZCB0aGUgcGx1Z2luIHRoZW4gd2UgY2FuIHNraXAgdGhlIHN0ZXBzIGJlbG93P1xuICAgICAgaWYgKGdldFN0YXRlKCkuZGF0YVNvdXJjZVNldHRpbmdzLnBsdWdpbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBkZXBlbmRlbmNpZXMuZ2V0RGF0YVNvdXJjZShnZXRTdGF0ZSgpLmRhdGFTb3VyY2VzLCBwYWdlSWQpO1xuICAgICAgY29uc3QgZGF0YVNvdXJjZU1ldGEgPSBkZXBlbmRlbmNpZXMuZ2V0RGF0YVNvdXJjZU1ldGEoZ2V0U3RhdGUoKS5kYXRhU291cmNlcywgZGF0YVNvdXJjZSEudHlwZSk7XG4gICAgICBjb25zdCBpbXBvcnRlZFBsdWdpbiA9IGF3YWl0IGRlcGVuZGVuY2llcy5pbXBvcnREYXRhU291cmNlUGx1Z2luKGRhdGFTb3VyY2VNZXRhKTtcblxuICAgICAgZGlzcGF0Y2goaW5pdERhdGFTb3VyY2VTZXR0aW5nc1N1Y2NlZWRlZChpbXBvcnRlZFBsdWdpbikpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGlzcGF0Y2goaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZChlcnIpKTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdERhdGFTb3VyY2UgPSAoXG4gIGRhdGFTb3VyY2VOYW1lOiBzdHJpbmcsXG4gIGRlcGVuZGVuY2llczogVGVzdERhdGFTb3VyY2VEZXBlbmRlbmNpZXMgPSB7XG4gICAgZ2V0RGF0YXNvdXJjZVNydixcbiAgICBnZXRCYWNrZW5kU3J2LFxuICB9XG4pOiBUaHVua1Jlc3VsdDx2b2lkPiA9PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2g6IFRodW5rRGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgY29uc3QgZHNBcGkgPSBhd2FpdCBkZXBlbmRlbmNpZXMuZ2V0RGF0YXNvdXJjZVNydigpLmdldChkYXRhU291cmNlTmFtZSk7XG5cbiAgICBpZiAoIWRzQXBpLnRlc3REYXRhc291cmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGlzcGF0Y2godGVzdERhdGFTb3VyY2VTdGFydGluZygpKTtcblxuICAgIGRlcGVuZGVuY2llcy5nZXRCYWNrZW5kU3J2KCkud2l0aE5vQmFja2VuZENhY2hlKGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRzQXBpLnRlc3REYXRhc291cmNlKCk7XG5cbiAgICAgICAgZGlzcGF0Y2godGVzdERhdGFTb3VyY2VTdWNjZWVkZWQocmVzdWx0KSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXNUZXh0LCBtZXNzYWdlOiBlcnJNZXNzYWdlLCBkZXRhaWxzLCBkYXRhIH0gPSBlcnI7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVyck1lc3NhZ2UgfHwgZGF0YT8ubWVzc2FnZSB8fCAnSFRUUCBlcnJvciAnICsgc3RhdHVzVGV4dDtcblxuICAgICAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZUZhaWxlZCh7IG1lc3NhZ2UsIGRldGFpbHMgfSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlcygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvZGF0YXNvdXJjZXMnKTtcbiAgICBkaXNwYXRjaChkYXRhU291cmNlc0xvYWRlZChyZXNwb25zZSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2UodWlkOiBzdHJpbmcpOiBUaHVua1Jlc3VsdDxQcm9taXNlPERhdGFTb3VyY2VTZXR0aW5ncz4+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBhd2FpdCBnZXREYXRhU291cmNlVXNpbmdVaWRPcklkKHVpZCk7XG5cbiAgICBkaXNwYXRjaChkYXRhU291cmNlTG9hZGVkKGRhdGFTb3VyY2UpKTtcbiAgICByZXR1cm4gZGF0YVNvdXJjZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlTWV0YShkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBwbHVnaW5JbmZvID0gKGF3YWl0IGdldFBsdWdpblNldHRpbmdzKGRhdGFTb3VyY2UudHlwZSkpIGFzIERhdGFTb3VyY2VQbHVnaW5NZXRhO1xuICAgIGNvbnN0IHBsdWdpbiA9IGF3YWl0IGltcG9ydERhdGFTb3VyY2VQbHVnaW4ocGx1Z2luSW5mbyk7XG4gICAgY29uc3QgaXNCYWNrZW5kID0gcGx1Z2luLkRhdGFTb3VyY2VDbGFzcy5wcm90b3R5cGUgaW5zdGFuY2VvZiBEYXRhU291cmNlV2l0aEJhY2tlbmQ7XG4gICAgY29uc3QgbWV0YSA9IHtcbiAgICAgIC4uLnBsdWdpbkluZm8sXG4gICAgICBpc0JhY2tlbmQ6IHBsdWdpbkluZm8uYmFja2VuZCB8fCBpc0JhY2tlbmQsXG4gICAgfTtcblxuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VNZXRhTG9hZGVkKG1ldGEpKTtcblxuICAgIHBsdWdpbi5tZXRhID0gbWV0YTtcbiAgICBkaXNwYXRjaCh1cGRhdGVOYXZJbmRleChidWlsZE5hdk1vZGVsKGRhdGFTb3VyY2UsIHBsdWdpbikpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXQgZGF0YSBzb3VyY2UgYnkgdWlkIG9yIGlkLCBpZiBvbGQgaWQgZGV0ZWN0ZWQgaGFuZGxlcyByZWRpcmVjdFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YVNvdXJjZVVzaW5nVWlkT3JJZCh1aWQ6IHN0cmluZyB8IG51bWJlcik6IFByb21pc2U8RGF0YVNvdXJjZVNldHRpbmdzPiB7XG4gIC8vIFRyeSBmaXJzdCB3aXRoIHVpZCBhcGlcbiAgdHJ5IHtcbiAgICBjb25zdCBieVVpZCA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KCkuZmV0Y2g8RGF0YVNvdXJjZVNldHRpbmdzPih7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHVybDogYC9hcGkvZGF0YXNvdXJjZXMvdWlkLyR7dWlkfWAsXG4gICAgICAgIHBhcmFtczogYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0oKSxcbiAgICAgICAgc2hvd0Vycm9yQWxlcnQ6IGZhbHNlLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgaWYgKGJ5VWlkLm9rKSB7XG4gICAgICByZXR1cm4gYnlVaWQuZGF0YTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gbG9va3VwIGRhdGEgc291cmNlIGJ5IHVpZCcsIGVycik7XG4gIH1cblxuICAvLyB0cnkgbG9va3VwIGJ5IG9sZCBkYiBpZFxuICBjb25zdCBpZCA9IHR5cGVvZiB1aWQgPT09ICdzdHJpbmcnID8gcGFyc2VJbnQodWlkLCAxMCkgOiB1aWQ7XG4gIGlmICghTnVtYmVyLmlzTmFOKGlkKSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKS5mZXRjaDxEYXRhU291cmNlU2V0dGluZ3M+KHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgdXJsOiBgL2FwaS9kYXRhc291cmNlcy8ke2lkfWAsXG4gICAgICAgIHBhcmFtczogYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0oKSxcbiAgICAgICAgc2hvd0Vycm9yQWxlcnQ6IGZhbHNlLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gSWYgdGhlIHVpZCBpcyBhIG51bWJlciwgdGhlbiB0aGlzIGlzIGEgcmVmcmVzaCBvbiBvbmUgb2YgdGhlIHNldHRpbmdzIHRhYnNcbiAgICAvLyBhbmQgd2UgY2FuIHJldHVybiB0aGUgcmVzcG9uc2UgZGF0YVxuICAgIGlmIChyZXNwb25zZS5vayAmJiB0eXBlb2YgdWlkID09PSAnbnVtYmVyJyAmJiByZXNwb25zZS5kYXRhLmlkID09PSB1aWQpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIC8vIE5vdCBpZGVhbCB0byBkbyBhIGZ1bGwgcGFnZSByZWxvYWQgaGVyZSBidXQgc28gdHJpY2t5IHRvIGhhbmRsZSB0aGlzXG4gICAgLy8gb3RoZXJ3aXNlIFdlIGNhbiB1cGRhdGUgdGhlIGxvY2F0aW9uIHVzaW5nIHJlYWN0IHJvdXRlciwgYnV0IG5lZWQgdG9cbiAgICAvLyBmdWxseSByZWxvYWQgdGhlIHJvdXRlIGFzIHRoZSBuYXYgbW9kZWwgcGFnZSBpbmRleCBpcyBub3QgbWF0Y2hpbmcgd2l0aFxuICAgIC8vIHRoZSB1cmwgaW4gdGhhdCBjYXNlLiBBbmQgcmVhY3Qgcm91dGVyIGhhcyBubyB3YXkgdG8gdW5tb3VudCByZW1vdW50IGFcbiAgICAvLyByb3V0ZVxuICAgIGlmIChyZXNwb25zZS5vayAmJiByZXNwb25zZS5kYXRhLmlkLnRvU3RyaW5nKCkgPT09IHVpZCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvblV0aWwuYXNzdXJlQmFzZVVybChgL2RhdGFzb3VyY2VzL2VkaXQvJHtyZXNwb25zZS5kYXRhLnVpZH1gKTtcbiAgICAgIHJldHVybiB7fSBhcyBEYXRhU291cmNlU2V0dGluZ3M7IC8vIGF2b2lkcyBmbGFzaGluZyBhbiBlcnJvclxuICAgIH1cbiAgfVxuXG4gIHRocm93IEVycm9yKCdDb3VsZCBub3QgZmluZCBkYXRhIHNvdXJjZScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF0YVNvdXJjZShwbHVnaW46IERhdGFTb3VyY2VQbHVnaW5NZXRhKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGF3YWl0IGRpc3BhdGNoKGxvYWREYXRhU291cmNlcygpKTtcblxuICAgIGNvbnN0IGRhdGFTb3VyY2VzID0gZ2V0U3RvcmUoKS5kYXRhU291cmNlcy5kYXRhU291cmNlcztcblxuICAgIGNvbnN0IG5ld0luc3RhbmNlID0ge1xuICAgICAgbmFtZTogcGx1Z2luLm5hbWUsXG4gICAgICB0eXBlOiBwbHVnaW4uaWQsXG4gICAgICBhY2Nlc3M6ICdwcm94eScsXG4gICAgICBpc0RlZmF1bHQ6IGRhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMCxcbiAgICB9O1xuXG4gICAgaWYgKG5hbWVFeGl0cyhkYXRhU291cmNlcywgbmV3SW5zdGFuY2UubmFtZSkpIHtcbiAgICAgIG5ld0luc3RhbmNlLm5hbWUgPSBmaW5kTmV3TmFtZShkYXRhU291cmNlcywgbmV3SW5zdGFuY2UubmFtZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLnBvc3QoJy9hcGkvZGF0YXNvdXJjZXMnLCBuZXdJbnN0YW5jZSk7XG4gICAgYXdhaXQgZ2V0RGF0YXNvdXJjZVNydigpLnJlbG9hZCgpO1xuXG4gICAgYXdhaXQgY29udGV4dFNydi5mZXRjaFVzZXJQZXJtaXNzaW9ucygpO1xuXG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goYC9kYXRhc291cmNlcy9lZGl0LyR7cmVzdWx0LmRhdGFzb3VyY2UudWlkfWApO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VQbHVnaW5zKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VQbHVnaW5zTG9hZCgpKTtcbiAgICBjb25zdCBwbHVnaW5zID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9wbHVnaW5zJywgeyBlbmFibGVkOiAxLCB0eXBlOiAnZGF0YXNvdXJjZScgfSk7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGJ1aWxkQ2F0ZWdvcmllcyhwbHVnaW5zKTtcbiAgICBkaXNwYXRjaChkYXRhU291cmNlUGx1Z2luc0xvYWRlZCh7IHBsdWdpbnMsIGNhdGVnb3JpZXMgfSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRGF0YVNvdXJjZShkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucHV0KGAvYXBpL2RhdGFzb3VyY2VzLyR7ZGF0YVNvdXJjZS5pZH1gLCBkYXRhU291cmNlKTsgLy8gYnkgVUlEIG5vdCB5ZXQgc3VwcG9ydGVkXG4gICAgYXdhaXQgZ2V0RGF0YXNvdXJjZVNydigpLnJlbG9hZCgpO1xuICAgIHJldHVybiBkaXNwYXRjaChsb2FkRGF0YVNvdXJjZShkYXRhU291cmNlLnVpZCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRGF0YVNvdXJjZSgpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IGdldFN0b3JlKCkuZGF0YVNvdXJjZXMuZGF0YVNvdXJjZTtcblxuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5kZWxldGUoYC9hcGkvZGF0YXNvdXJjZXMvJHtkYXRhU291cmNlLmlkfWApO1xuICAgIGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5yZWxvYWQoKTtcblxuICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKCcvZGF0YXNvdXJjZXMnKTtcbiAgfTtcbn1cblxuaW50ZXJmYWNlIEl0ZW1XaXRoTmFtZSB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hbWVFeGl0cyhkYXRhU291cmNlczogSXRlbVdpdGhOYW1lW10sIG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gKFxuICAgIGRhdGFTb3VyY2VzLmZpbHRlcigoZGF0YVNvdXJjZSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFTb3VyY2UubmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfSkubGVuZ3RoID4gMFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZE5ld05hbWUoZGF0YVNvdXJjZXM6IEl0ZW1XaXRoTmFtZVtdLCBuYW1lOiBzdHJpbmcpIHtcbiAgLy8gTmVlZCB0byBsb29wIHRocm91Z2ggY3VycmVudCBkYXRhIHNvdXJjZXMgdG8gbWFrZSBzdXJlXG4gIC8vIHRoZSBuYW1lIGRvZXNuJ3QgZXhpc3RcbiAgd2hpbGUgKG5hbWVFeGl0cyhkYXRhU291cmNlcywgbmFtZSkpIHtcbiAgICAvLyBJZiB0aGVyZSdzIGEgZHVwbGljYXRlIG5hbWUgdGhhdCBkb2Vzbid0IGVuZCB3aXRoICcteCdcbiAgICAvLyB3ZSBjYW4gYWRkIC0xIHRvIHRoZSBuYW1lIGFuZCBiZSBkb25lLlxuICAgIGlmICghbmFtZUhhc1N1ZmZpeChuYW1lKSkge1xuICAgICAgbmFtZSA9IGAke25hbWV9LTFgO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB0aGVyZSdzIGEgZHVwbGljYXRlIG5hbWUgdGhhdCBlbmRzIHdpdGggJy14J1xuICAgICAgLy8gd2UgY2FuIHRyeSB0byBpbmNyZW1lbnQgdGhlIGxhc3QgZGlnaXQgdW50aWwgdGhlIG5hbWUgaXMgdW5pcXVlXG5cbiAgICAgIC8vIHJlbW92ZSB0aGUgJ3gnIHBhcnQgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgbmV3IG51bWJlclxuICAgICAgbmFtZSA9IGAke2dldE5ld05hbWUobmFtZSl9JHtpbmNyZW1lbnRMYXN0RGlnaXQoZ2V0TGFzdERpZ2l0KG5hbWUpKX1gO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiBuYW1lSGFzU3VmZml4KG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gbmFtZS5lbmRzV2l0aCgnLScsIG5hbWUubGVuZ3RoIC0gMSk7XG59XG5cbmZ1bmN0aW9uIGdldExhc3REaWdpdChuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHBhcnNlSW50KG5hbWUuc2xpY2UoLTEpLCAxMCk7XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudExhc3REaWdpdChkaWdpdDogbnVtYmVyKSB7XG4gIHJldHVybiBpc05hTihkaWdpdCkgPyAxIDogZGlnaXQgKyAxO1xufVxuXG5mdW5jdGlvbiBnZXROZXdOYW1lKG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gbmFtZS5zbGljZSgwLCBuYW1lLmxlbmd0aCAtIDEpO1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIFBsdWdpblR5cGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZywgZmVhdHVyZUVuYWJsZWQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZENhdGVnb3JpZXMocGx1Z2luczogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSk6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdIHtcbiAgY29uc3QgY2F0ZWdvcmllczogRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5W10gPSBbXG4gICAgeyBpZDogJ3RzZGInLCB0aXRsZTogJ1RpbWUgc2VyaWVzIGRhdGFiYXNlcycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2xvZ2dpbmcnLCB0aXRsZTogJ0xvZ2dpbmcgJiBkb2N1bWVudCBkYXRhYmFzZXMnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICd0cmFjaW5nJywgdGl0bGU6ICdEaXN0cmlidXRlZCB0cmFjaW5nJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnc3FsJywgdGl0bGU6ICdTUUwnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdjbG91ZCcsIHRpdGxlOiAnQ2xvdWQnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdlbnRlcnByaXNlJywgdGl0bGU6ICdFbnRlcnByaXNlIHBsdWdpbnMnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdpb3QnLCB0aXRsZTogJ0luZHVzdHJpYWwgJiBJb1QnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdvdGhlcicsIHRpdGxlOiAnT3RoZXJzJywgcGx1Z2luczogW10gfSxcbiAgXS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0pO1xuXG4gIGNvbnN0IGNhdGVnb3J5SW5kZXg6IFJlY29yZDxzdHJpbmcsIERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeT4gPSB7fTtcbiAgY29uc3QgcGx1Z2luSW5kZXg6IFJlY29yZDxzdHJpbmcsIERhdGFTb3VyY2VQbHVnaW5NZXRhPiA9IHt9O1xuICBjb25zdCBlbnRlcnByaXNlUGx1Z2lucyA9IGdldEVudGVycHJpc2VQaGFudG9tUGx1Z2lucygpO1xuXG4gIC8vIGJ1aWxkIGluZGljZXNcbiAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG4gICAgY2F0ZWdvcnlJbmRleFtjYXRlZ29yeS5pZF0gPSBjYXRlZ29yeTtcbiAgfVxuXG4gIGZvciAoY29uc3QgcGx1Z2luIG9mIHBsdWdpbnMpIHtcbiAgICBjb25zdCBlbnRlcnByaXNlUGx1Z2luID0gZW50ZXJwcmlzZVBsdWdpbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGx1Z2luLmlkKTtcbiAgICAvLyBGb3JjZSBjYXRlZ29yeSBmb3IgZW50ZXJwcmlzZSBwbHVnaW5zXG4gICAgaWYgKHBsdWdpbi5lbnRlcnByaXNlIHx8IGVudGVycHJpc2VQbHVnaW4pIHtcbiAgICAgIHBsdWdpbi5jYXRlZ29yeSA9ICdlbnRlcnByaXNlJztcbiAgICAgIHBsdWdpbi51bmxpY2Vuc2VkID0gIWZlYXR1cmVFbmFibGVkKCdlbnRlcnByaXNlLnBsdWdpbnMnKTtcbiAgICAgIHBsdWdpbi5pbmZvLmxpbmtzID0gZW50ZXJwcmlzZVBsdWdpbj8uaW5mbz8ubGlua3MgfHwgcGx1Z2luLmluZm8ubGlua3M7XG4gICAgfVxuXG4gICAgLy8gRml4IGxpbmsgbmFtZVxuICAgIGlmIChwbHVnaW4uaW5mby5saW5rcykge1xuICAgICAgZm9yIChjb25zdCBsaW5rIG9mIHBsdWdpbi5pbmZvLmxpbmtzKSB7XG4gICAgICAgIGxpbmsubmFtZSA9ICdMZWFybiBtb3JlJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGx1Z2luLmNhdGVnb3J5KSB8fCBjYXRlZ29yeUluZGV4WydvdGhlciddO1xuICAgIGNhdGVnb3J5LnBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgIC8vIGFkZCB0byBwbHVnaW4gaW5kZXhcbiAgICBwbHVnaW5JbmRleFtwbHVnaW4uaWRdID0gcGx1Z2luO1xuICB9XG5cbiAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG4gICAgLy8gYWRkIHBoYW50b20gcGx1Z2luXG4gICAgaWYgKGNhdGVnb3J5LmlkID09PSAnY2xvdWQnKSB7XG4gICAgICBjYXRlZ29yeS5wbHVnaW5zLnB1c2goZ2V0R3JhZmFuYUNsb3VkUGhhbnRvbVBsdWdpbigpKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgcGhhbnRvbSBwbHVnaW5zXG4gICAgaWYgKGNhdGVnb3J5LmlkID09PSAnZW50ZXJwcmlzZScpIHtcbiAgICAgIGZvciAoY29uc3QgcGx1Z2luIG9mIGVudGVycHJpc2VQbHVnaW5zKSB7XG4gICAgICAgIGlmICghcGx1Z2luSW5kZXhbcGx1Z2luLmlkXSkge1xuICAgICAgICAgIGNhdGVnb3J5LnBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc29ydFBsdWdpbnMoY2F0ZWdvcnkucGx1Z2lucyk7XG4gIH1cblxuICAvLyBPbmx5IHNob3cgY2F0ZWdvcmllcyB3aXRoIHBsdWdpbnNcbiAgcmV0dXJuIGNhdGVnb3JpZXMuZmlsdGVyKChjKSA9PiBjLnBsdWdpbnMubGVuZ3RoID4gMCk7XG59XG5cbmZ1bmN0aW9uIHNvcnRQbHVnaW5zKHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW10pIHtcbiAgY29uc3Qgc29ydGluZ1J1bGVzOiB7IFtpZDogc3RyaW5nXTogbnVtYmVyIH0gPSB7XG4gICAgcHJvbWV0aGV1czogMTAwLFxuICAgIGdyYXBoaXRlOiA5NSxcbiAgICBsb2tpOiA5MCxcbiAgICBteXNxbDogODAsXG4gICAgamFlZ2VyOiAxMDAsXG4gICAgcG9zdGdyZXM6IDc5LFxuICAgIGdjbG91ZDogLTEsXG4gIH07XG5cbiAgcGx1Z2lucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgY29uc3QgYVNvcnQgPSBzb3J0aW5nUnVsZXNbYS5pZF0gfHwgMDtcbiAgICBjb25zdCBiU29ydCA9IHNvcnRpbmdSdWxlc1tiLmlkXSB8fCAwO1xuICAgIGlmIChhU29ydCA+IGJTb3J0KSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChhU29ydCA8IGJTb3J0KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gYS5uYW1lID4gYi5uYW1lID8gLTEgOiAxO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RW50ZXJwcmlzZVBoYW50b21QbHVnaW5zKCk6IERhdGFTb3VyY2VQbHVnaW5NZXRhW10ge1xuICByZXR1cm4gW1xuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNwbHVuay1kYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdTcGx1bmsnLFxuICAgICAgZGVzY3JpcHRpb246ICdWaXN1YWxpemUgYW5kIGV4cGxvcmUgU3BsdW5rIGxvZ3MnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NwbHVua19sb2dvXzEyOC5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLW9yYWNsZS1kYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdPcmFjbGUnLFxuICAgICAgZGVzY3JpcHRpb246ICdWaXN1YWxpemUgYW5kIGV4cGxvcmUgT3JhY2xlIFNRTCcsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvb3JhY2xlLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtZHluYXRyYWNlLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0R5bmF0cmFjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBEeW5hdHJhY2UgZGF0YScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvZHluYXRyYWNlLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2VydmljZW5vdy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2VydmljZU5vdyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NlcnZpY2VOb3cnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NlcnZpY2Vub3cuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1kYXRhZG9nLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdEYXRhRG9nIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnRGF0YURvZycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvZGF0YWRvZy5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLW5ld3JlbGljLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdOZXcgUmVsaWMgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdOZXcgUmVsaWMnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL25ld3JlbGljLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtbW9uZ29kYi1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTW9uZ29EQiBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ01vbmdvREInLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL21vbmdvZGIuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zbm93Zmxha2UtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Nub3dmbGFrZSBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1Nub3dmbGFrZScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc25vd2ZsYWtlLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtd2F2ZWZyb250LWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdXYXZlZnJvbnQgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdXYXZlZnJvbnQnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3dhdmVmcm9udC5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdkbG9wZXM3LWFwcGR5bmFtaWNzLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdBcHBEeW5hbWljcyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ0FwcER5bmFtaWNzJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9hcHBkeW5hbWljcy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNhcGhhbmEtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NBUCBIQU5Bwq4gaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdTQVAgSEFOQcKuJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zYXBfaGFuYS5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWhvbmV5Y29tYi1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSG9uZXljb21iIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdIb25leWNvbWInLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2hvbmV5Y29tYi5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNhbGVzZm9yY2UtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NhbGVzZm9yY2UgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NhbGVzZm9yY2UnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NhbGVzZm9yY2Uuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1qaXJhLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdKaXJhIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdKaXJhJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9qaXJhX2xvZ28ucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1naXRsYWItZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0dpdExhYiBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnR2l0TGFiJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9naXRsYWIuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zcGx1bmstbW9uaXRvcmluZy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2lnbmFsRnggaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NwbHVuayBJbmZyYXN0cnVjdHVyZSBNb25pdG9yaW5nJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zaWduYWxmeC1sb2dvLnN2ZycsXG4gICAgfSksXG4gIF07XG59XG5cbmZ1bmN0aW9uIGdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4oKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEge1xuICByZXR1cm4ge1xuICAgIGlkOiAnZ2Nsb3VkJyxcbiAgICBuYW1lOiAnR3JhZmFuYSBDbG91ZCcsXG4gICAgdHlwZTogUGx1Z2luVHlwZS5kYXRhc291cmNlLFxuICAgIG1vZHVsZTogJ3BoYW50b20nLFxuICAgIGJhc2VVcmw6ICcnLFxuICAgIGluZm86IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnSG9zdGVkIEdyYXBoaXRlLCBQcm9tZXRoZXVzLCBhbmQgTG9raScsXG4gICAgICBsb2dvczogeyBzbWFsbDogJ3B1YmxpYy9pbWcvZ3JhZmFuYV9pY29uLnN2ZycsIGxhcmdlOiAnYXNkJyB9LFxuICAgICAgYXV0aG9yOiB7IG5hbWU6ICdHcmFmYW5hIExhYnMnIH0sXG4gICAgICBsaW5rczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9ncmFmYW5hLmNvbS9wcm9kdWN0cy9jbG91ZC8nLFxuICAgICAgICAgIG5hbWU6ICdMZWFybiBtb3JlJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICB1cGRhdGVkOiAnMjAxOS0wNS0xMCcsXG4gICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgIH0sXG4gIH07XG59XG5cbmludGVyZmFjZSBHZXRQaGFudG9tUGx1Z2luT3B0aW9ucyB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1nVXJsOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFBoYW50b21QbHVnaW4ob3B0aW9uczogR2V0UGhhbnRvbVBsdWdpbk9wdGlvbnMpOiBEYXRhU291cmNlUGx1Z2luTWV0YSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IG9wdGlvbnMuaWQsXG4gICAgbmFtZTogb3B0aW9ucy5uYW1lLFxuICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICBtb2R1bGU6ICdwaGFudG9tJyxcbiAgICBiYXNlVXJsOiAnJyxcbiAgICBpbmZvOiB7XG4gICAgICBkZXNjcmlwdGlvbjogb3B0aW9ucy5kZXNjcmlwdGlvbixcbiAgICAgIGxvZ29zOiB7IHNtYWxsOiBvcHRpb25zLmltZ1VybCwgbGFyZ2U6IG9wdGlvbnMuaW1nVXJsIH0sXG4gICAgICBhdXRob3I6IHsgbmFtZTogJ0dyYWZhbmEgTGFicycgfSxcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB1cmw6IGNvbmZpZy5wbHVnaW5DYXRhbG9nVVJMICsgb3B0aW9ucy5pZCxcbiAgICAgICAgICBuYW1lOiAnSW5zdGFsbCBub3cnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgIHVwZGF0ZWQ6ICcyMDE5LTA1LTEwJyxcbiAgICAgIHZlcnNpb246ICcxLjAuMCcsXG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VTZXR0aW5ncywgUGx1Z2luVHlwZSwgUGx1Z2luSW5jbHVkZSwgTmF2TW9kZWwsIE5hdk1vZGVsSXRlbSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZmVhdHVyZUVuYWJsZWQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFByb0JhZGdlIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9VcGdyYWRlL1Byb0JhZGdlJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBoaWdobGlnaHRUcmlhbCB9IGZyb20gJy4uLy4uL2FkbWluL3V0aWxzJztcbmltcG9ydCB7IEdlbmVyaWNEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnLi4vc2V0dGluZ3MvUGx1Z2luU2V0dGluZ3MnO1xuXG5jb25zdCBsb2FkaW5nRFNUeXBlID0gJ0xvYWRpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGROYXZNb2RlbChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MsIHBsdWdpbjogR2VuZXJpY0RhdGFTb3VyY2VQbHVnaW4pOiBOYXZNb2RlbEl0ZW0ge1xuICBjb25zdCBwbHVnaW5NZXRhID0gcGx1Z2luLm1ldGE7XG4gIGNvbnN0IGhpZ2hsaWdodHNFbmFibGVkID0gY29uZmlnLmZlYXR1cmVUb2dnbGVzLmZlYXR1cmVIaWdobGlnaHRzO1xuICBjb25zdCBuYXZNb2RlbDogTmF2TW9kZWxJdGVtID0ge1xuICAgIGltZzogcGx1Z2luTWV0YS5pbmZvLmxvZ29zLmxhcmdlLFxuICAgIGlkOiAnZGF0YXNvdXJjZS0nICsgZGF0YVNvdXJjZS51aWQsXG4gICAgc3ViVGl0bGU6IGBUeXBlOiAke3BsdWdpbk1ldGEubmFtZX1gLFxuICAgIHVybDogJycsXG4gICAgdGV4dDogZGF0YVNvdXJjZS5uYW1lLFxuICAgIGJyZWFkY3J1bWJzOiBbeyB0aXRsZTogJ0RhdGEgU291cmNlcycsIHVybDogJ2RhdGFzb3VyY2VzJyB9XSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBpY29uOiAnc2xpZGVycy12LWFsdCcsXG4gICAgICAgIGlkOiBgZGF0YXNvdXJjZS1zZXR0aW5ncy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgICAgIHRleHQ6ICdTZXR0aW5ncycsXG4gICAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vYCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBpZiAocGx1Z2luLmNvbmZpZ1BhZ2VzKSB7XG4gICAgZm9yIChjb25zdCBwYWdlIG9mIHBsdWdpbi5jb25maWdQYWdlcykge1xuICAgICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICB0ZXh0OiBwYWdlLnRpdGxlLFxuICAgICAgICBpY29uOiBwYWdlLmljb24sXG4gICAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vP3BhZ2U9JHtwYWdlLmlkfWAsXG4gICAgICAgIGlkOiBgZGF0YXNvdXJjZS1wYWdlLSR7cGFnZS5pZH1gLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBsdWdpbk1ldGEuaW5jbHVkZXMgJiYgaGFzRGFzaGJvYXJkcyhwbHVnaW5NZXRhLmluY2x1ZGVzKSAmJiBjb250ZXh0U3J2Lmhhc1JvbGUoJ0FkbWluJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgaWNvbjogJ2FwcHMnLFxuICAgICAgaWQ6IGBkYXRhc291cmNlLWRhc2hib2FyZHMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgICAgdGV4dDogJ0Rhc2hib2FyZHMnLFxuICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9kYXNoYm9hcmRzYCxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGlzTG9hZGluZ05hdiA9IGRhdGFTb3VyY2UudHlwZSA9PT0gbG9hZGluZ0RTVHlwZTtcblxuICBjb25zdCBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtZGF0YS1zb3VyY2UtcGVybWlzc2lvbnMtYmFkZ2UnO1xuICBjb25zdCBkc1Blcm1pc3Npb25zOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnbG9jaycsXG4gICAgaWQ6IGBkYXRhc291cmNlLXBlcm1pc3Npb25zLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnUGVybWlzc2lvbnMnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vcGVybWlzc2lvbnNgLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBkc1Blcm1pc3Npb25zLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCwgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdkc3Blcm1pc3Npb25zJykpIHtcbiAgICBpZiAoY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNQZXJtaXNzaW9uc1JlYWQpKSB7XG4gICAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChkc1Blcm1pc3Npb25zKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmRzUGVybWlzc2lvbnMsXG4gICAgICB1cmw6IGRzUGVybWlzc2lvbnMudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IHBlcm1pc3Npb25zRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYW5hbHl0aWNzRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1kYXRhLXNvdXJjZS1pbnNpZ2h0cy1iYWRnZSc7XG4gIGNvbnN0IGFuYWx5dGljczogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2luZm8tY2lyY2xlJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtaW5zaWdodHMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdJbnNpZ2h0cycsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9pbnNpZ2h0c2AsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGFuYWx5dGljcy50YWJTdWZmaXggPSAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogYW5hbHl0aWNzRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2FuYWx5dGljcycpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goYW5hbHl0aWNzKTtcbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uYW5hbHl0aWNzLFxuICAgICAgdXJsOiBhbmFseXRpY3MudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGFuYWx5dGljc0V4cGVyaW1lbnRJZCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNhY2hpbmdFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLXF1ZXJ5LWNhY2hpbmctYmFkZ2UnO1xuXG4gIGNvbnN0IGNhY2hpbmc6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdkYXRhYmFzZScsXG4gICAgaWQ6IGBkYXRhc291cmNlLWNhY2hlLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnQ2FjaGUnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vY2FjaGVgLFxuICAgIGhpZGVGcm9tVGFiczogIXBsdWdpbk1ldGEuaXNCYWNrZW5kIHx8ICFjb25maWcuY2FjaGluZy5lbmFibGVkLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBjYWNoaW5nLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBjYWNoaW5nRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2NhY2hpbmcnKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGNhY2hpbmcpO1xuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5jYWNoaW5nLFxuICAgICAgdXJsOiBjYWNoaW5nLnVybCArICcvdXBncmFkZScsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBjYWNoaW5nRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5hdk1vZGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVNvdXJjZU5hdihtYWluOiBOYXZNb2RlbEl0ZW0sIHBhZ2VOYW1lOiBzdHJpbmcpOiBOYXZNb2RlbCB7XG4gIGxldCBub2RlOiBOYXZNb2RlbEl0ZW0gPSB7IHRleHQ6ICcnIH07XG5cbiAgLy8gZmluZCBhY3RpdmUgcGFnZVxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG1haW4uY2hpbGRyZW4hKSB7XG4gICAgaWYgKGNoaWxkLmlkIS5pbmRleE9mKHBhZ2VOYW1lKSA+IDApIHtcbiAgICAgIGNoaWxkLmFjdGl2ZSA9IHRydWU7XG4gICAgICBub2RlID0gY2hpbGQ7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1haW46IG1haW4sXG4gICAgbm9kZTogbm9kZSEsXG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YVNvdXJjZUxvYWRpbmdOYXYocGFnZU5hbWU6IHN0cmluZyk6IE5hdk1vZGVsIHtcbiAgY29uc3QgbWFpbiA9IGJ1aWxkTmF2TW9kZWwoXG4gICAge1xuICAgICAgYWNjZXNzOiAnJyxcbiAgICAgIGJhc2ljQXV0aDogZmFsc2UsXG4gICAgICBiYXNpY0F1dGhVc2VyOiAnJyxcbiAgICAgIGJhc2ljQXV0aFBhc3N3b3JkOiAnJyxcbiAgICAgIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG4gICAgICBkYXRhYmFzZTogJycsXG4gICAgICBpZDogMSxcbiAgICAgIHVpZDogJ3gnLFxuICAgICAgaXNEZWZhdWx0OiBmYWxzZSxcbiAgICAgIGpzb25EYXRhOiB7IGF1dGhUeXBlOiAnY3JlZGVudGlhbHMnLCBkZWZhdWx0UmVnaW9uOiAnZXUtd2VzdC0yJyB9LFxuICAgICAgbmFtZTogJ0xvYWRpbmcnLFxuICAgICAgb3JnSWQ6IDEsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICByZWFkT25seTogZmFsc2UsXG4gICAgICB0eXBlOiBsb2FkaW5nRFNUeXBlLFxuICAgICAgdHlwZU5hbWU6IGxvYWRpbmdEU1R5cGUsXG4gICAgICB0eXBlTG9nb1VybDogJ3B1YmxpYy9pbWcvaWNuLWRhdGFzb3VyY2Uuc3ZnJyxcbiAgICAgIHVybDogJycsXG4gICAgICB1c2VyOiAnJyxcbiAgICAgIHNlY3VyZUpzb25GaWVsZHM6IHt9LFxuICAgIH0sXG4gICAge1xuICAgICAgbWV0YToge1xuICAgICAgICBpZDogJzEnLFxuICAgICAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBpbmZvOiB7XG4gICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgbGlua3M6IFt7IG5hbWU6ICcnLCB1cmw6ICcnIH1dLFxuICAgICAgICAgIGxvZ29zOiB7XG4gICAgICAgICAgICBsYXJnZTogJycsXG4gICAgICAgICAgICBzbWFsbDogJycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICAgICAgdXBkYXRlZDogJycsXG4gICAgICAgICAgdmVyc2lvbjogJycsXG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGVzOiBbXSxcbiAgICAgICAgbW9kdWxlOiAnJyxcbiAgICAgICAgYmFzZVVybDogJycsXG4gICAgICB9LFxuICAgIH0gYXMgYW55XG4gICk7XG5cbiAgcmV0dXJuIGdldERhdGFTb3VyY2VOYXYobWFpbiwgcGFnZU5hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNEYXNoYm9hcmRzKGluY2x1ZGVzOiBQbHVnaW5JbmNsdWRlW10pOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBpbmNsdWRlcy5maW5kKChpbmNsdWRlKSA9PiB7XG4gICAgICByZXR1cm4gaW5jbHVkZS50eXBlID09PSAnZGFzaGJvYXJkJztcbiAgICB9KSAhPT0gdW5kZWZpbmVkXG4gICk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgRGF0YVNvdXJjZVNldHRpbmdzLCBVcmxRdWVyeVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VzU3RhdGUgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9kYXRhc291cmNlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlcyA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4ge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3RhdGUuc2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2VzLmZpbHRlcigoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS5uYW1lKSB8fCByZWdleC50ZXN0KGRhdGFTb3VyY2UuZGF0YWJhc2UpIHx8IHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS50eXBlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZVBsdWdpbnMgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLmRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLnBsdWdpbnMuZmlsdGVyKCh0eXBlOiBEYXRhU291cmNlUGx1Z2luTWV0YSkgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KHR5cGUubmFtZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2UgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUsIGRhdGFTb3VyY2VJZDogVXJsUXVlcnlWYWx1ZSk6IERhdGFTb3VyY2VTZXR0aW5ncyA9PiB7XG4gIGlmIChzdGF0ZS5kYXRhU291cmNlLnVpZCA9PT0gZGF0YVNvdXJjZUlkKSB7XG4gICAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2U7XG4gIH1cbiAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VTZXR0aW5ncztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlTWV0YSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSwgdHlwZTogc3RyaW5nKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEgPT4ge1xuICBpZiAoc3RhdGUuZGF0YVNvdXJjZU1ldGEuaWQgPT09IHR5cGUpIHtcbiAgICByZXR1cm4gc3RhdGUuZGF0YVNvdXJjZU1ldGE7XG4gIH1cblxuICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUXVlcnk7XG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5sYXlvdXRNb2RlO1xuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzQ291bnQgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzQ291bnQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiTGlua0J1dHRvbiIsIkZpbHRlcklucHV0IiwiUGFnZUFjdGlvbkJhciIsInJlbmRlciIsInNlYXJjaFF1ZXJ5IiwibGlua0J1dHRvbiIsInNldFNlYXJjaFF1ZXJ5IiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJwcm9wcyIsImxpbmtQcm9wcyIsImhyZWYiLCJkaXNhYmxlZCIsInRpdGxlIiwiY29uZmlnIiwiaXNUcmlhbCIsImV4cGlyeSIsImxpY2Vuc2VJbmZvIiwidHJpYWxFeHBpcnkiLCJoaWdobGlnaHRUcmlhbCIsImZlYXR1cmVUb2dnbGVzIiwiZmVhdHVyZUhpZ2hsaWdodHMiLCJjc3MiLCJDYXJkIiwiVGFnIiwidXNlU3R5bGVzIiwiRGF0YVNvdXJjZXNMaXN0IiwiZGF0YVNvdXJjZXMiLCJsYXlvdXRNb2RlIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwibGlzdCIsIm1hcCIsImRhdGFTb3VyY2UiLCJ1aWQiLCJuYW1lIiwidHlwZUxvZ29VcmwiLCJsb2dvIiwidHlwZU5hbWUiLCJ1cmwiLCJpc0RlZmF1bHQiLCJpZCIsImxpc3RTdHlsZSIsImRpc3BsYXkiLCJvYmplY3RGaXQiLCJjb25uZWN0IiwiRW1wdHlMaXN0Q1RBIiwiUGFnZSIsImNvbnRleHRTcnYiLCJnZXROYXZNb2RlbCIsIkFjY2Vzc0NvbnRyb2xBY3Rpb24iLCJsb2FkRGF0YVNvdXJjZXMiLCJzZXREYXRhU291cmNlc0xheW91dE1vZGUiLCJzZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5IiwiZ2V0RGF0YVNvdXJjZXMiLCJnZXREYXRhU291cmNlc0NvdW50IiwiZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlIiwiZ2V0RGF0YVNvdXJjZXNTZWFyY2hRdWVyeSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsImRhdGFTb3VyY2VzQ291bnQiLCJoYXNGZXRjaGVkIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiZW1wdHlMaXN0TW9kZWwiLCJidXR0b25JY29uIiwiYnV0dG9uTGluayIsImJ1dHRvblRpdGxlIiwicHJvVGlwIiwicHJvVGlwTGluayIsInByb1RpcExpbmtUaXRsZSIsInByb1RpcFRhcmdldCIsIkRhdGFTb3VyY2VzTGlzdFBhZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImNhbkNyZWF0ZURhdGFTb3VyY2UiLCJoYXNQZXJtaXNzaW9uIiwiRGF0YVNvdXJjZXNDcmVhdGUiLCJEYXRhU291cmNlc1dyaXRlIiwiZW1wdHlMaXN0IiwiYnV0dG9uRGlzYWJsZWQiLCJxdWVyeSIsImxhc3RWYWx1ZUZyb20iLCJsb2NhdGlvblV0aWwiLCJEYXRhU291cmNlV2l0aEJhY2tlbmQiLCJsb2NhdGlvblNlcnZpY2UiLCJ1cGRhdGVOYXZJbmRleCIsImdldEJhY2tlbmRTcnYiLCJhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSIsImdldERhdGFzb3VyY2VTcnYiLCJnZXRQbHVnaW5TZXR0aW5ncyIsImltcG9ydERhdGFTb3VyY2VQbHVnaW4iLCJidWlsZENhdGVnb3JpZXMiLCJidWlsZE5hdk1vZGVsIiwiZGF0YVNvdXJjZUxvYWRlZCIsImRhdGFTb3VyY2VNZXRhTG9hZGVkIiwiZGF0YVNvdXJjZVBsdWdpbnNMb2FkIiwiZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQiLCJkYXRhU291cmNlc0xvYWRlZCIsImluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkIiwidGVzdERhdGFTb3VyY2VGYWlsZWQiLCJ0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nIiwidGVzdERhdGFTb3VyY2VTdWNjZWVkZWQiLCJnZXREYXRhU291cmNlIiwiZ2V0RGF0YVNvdXJjZU1ldGEiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzIiwicGFnZUlkIiwiZGVwZW5kZW5jaWVzIiwibG9hZERhdGFTb3VyY2UiLCJsb2FkRGF0YVNvdXJjZU1ldGEiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwiRXJyb3IiLCJsb2FkZWREYXRhU291cmNlIiwiZGF0YVNvdXJjZVNldHRpbmdzIiwicGx1Z2luIiwiZGF0YVNvdXJjZU1ldGEiLCJ0eXBlIiwiaW1wb3J0ZWRQbHVnaW4iLCJlcnIiLCJ0ZXN0RGF0YVNvdXJjZSIsImRhdGFTb3VyY2VOYW1lIiwiZHNBcGkiLCJnZXQiLCJ0ZXN0RGF0YXNvdXJjZSIsIndpdGhOb0JhY2tlbmRDYWNoZSIsInJlc3VsdCIsInN0YXR1c1RleHQiLCJtZXNzYWdlIiwiZXJyTWVzc2FnZSIsImRldGFpbHMiLCJkYXRhIiwicmVzcG9uc2UiLCJnZXREYXRhU291cmNlVXNpbmdVaWRPcklkIiwicGx1Z2luSW5mbyIsImlzQmFja2VuZCIsIkRhdGFTb3VyY2VDbGFzcyIsInByb3RvdHlwZSIsIm1ldGEiLCJiYWNrZW5kIiwiYnlVaWQiLCJmZXRjaCIsIm1ldGhvZCIsInBhcmFtcyIsInNob3dFcnJvckFsZXJ0Iiwib2siLCJjb25zb2xlIiwibG9nIiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc05hTiIsInRvU3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJhc3N1cmVCYXNlVXJsIiwiYWRkRGF0YVNvdXJjZSIsImdldFN0b3JlIiwibmV3SW5zdGFuY2UiLCJhY2Nlc3MiLCJsZW5ndGgiLCJuYW1lRXhpdHMiLCJmaW5kTmV3TmFtZSIsInBvc3QiLCJyZWxvYWQiLCJmZXRjaFVzZXJQZXJtaXNzaW9ucyIsInB1c2giLCJkYXRhc291cmNlIiwibG9hZERhdGFTb3VyY2VQbHVnaW5zIiwicGx1Z2lucyIsImVuYWJsZWQiLCJjYXRlZ29yaWVzIiwidXBkYXRlRGF0YVNvdXJjZSIsInB1dCIsImRlbGV0ZURhdGFTb3VyY2UiLCJkZWxldGUiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsIm5hbWVIYXNTdWZmaXgiLCJnZXROZXdOYW1lIiwiaW5jcmVtZW50TGFzdERpZ2l0IiwiZ2V0TGFzdERpZ2l0IiwiZW5kc1dpdGgiLCJzbGljZSIsImRpZ2l0IiwiUGx1Z2luVHlwZSIsImZlYXR1cmVFbmFibGVkIiwiaXRlbSIsImNhdGVnb3J5SW5kZXgiLCJwbHVnaW5JbmRleCIsImVudGVycHJpc2VQbHVnaW5zIiwiZ2V0RW50ZXJwcmlzZVBoYW50b21QbHVnaW5zIiwiY2F0ZWdvcnkiLCJlbnRlcnByaXNlUGx1Z2luIiwiZmluZCIsImVudGVycHJpc2UiLCJ1bmxpY2Vuc2VkIiwiaW5mbyIsImxpbmtzIiwibGluayIsImdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4iLCJzb3J0UGx1Z2lucyIsImMiLCJzb3J0aW5nUnVsZXMiLCJwcm9tZXRoZXVzIiwiZ3JhcGhpdGUiLCJsb2tpIiwibXlzcWwiLCJqYWVnZXIiLCJwb3N0Z3JlcyIsImdjbG91ZCIsInNvcnQiLCJhIiwiYiIsImFTb3J0IiwiYlNvcnQiLCJnZXRQaGFudG9tUGx1Z2luIiwiZGVzY3JpcHRpb24iLCJpbWdVcmwiLCJtb2R1bGUiLCJiYXNlVXJsIiwibG9nb3MiLCJzbWFsbCIsImxhcmdlIiwiYXV0aG9yIiwic2NyZWVuc2hvdHMiLCJ1cGRhdGVkIiwidmVyc2lvbiIsIm9wdGlvbnMiLCJwbHVnaW5DYXRhbG9nVVJMIiwiUHJvQmFkZ2UiLCJsb2FkaW5nRFNUeXBlIiwicGx1Z2luTWV0YSIsImhpZ2hsaWdodHNFbmFibGVkIiwiaW1nIiwic3ViVGl0bGUiLCJ0ZXh0IiwiYnJlYWRjcnVtYnMiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImljb24iLCJjb25maWdQYWdlcyIsInBhZ2UiLCJpbmNsdWRlcyIsImhhc0Rhc2hib2FyZHMiLCJoYXNSb2xlIiwiaXNMb2FkaW5nTmF2IiwicGVybWlzc2lvbnNFeHBlcmltZW50SWQiLCJkc1Blcm1pc3Npb25zIiwidGFiU3VmZml4IiwiZXhwZXJpbWVudElkIiwiZXZlbnRWYXJpYW50IiwiRGF0YVNvdXJjZXNQZXJtaXNzaW9uc1JlYWQiLCJhbmFseXRpY3NFeHBlcmltZW50SWQiLCJhbmFseXRpY3MiLCJjYWNoaW5nRXhwZXJpbWVudElkIiwiY2FjaGluZyIsImhpZGVGcm9tVGFicyIsImdldERhdGFTb3VyY2VOYXYiLCJtYWluIiwicGFnZU5hbWUiLCJub2RlIiwiY2hpbGQiLCJpbmRleE9mIiwiZ2V0RGF0YVNvdXJjZUxvYWRpbmdOYXYiLCJiYXNpY0F1dGgiLCJiYXNpY0F1dGhVc2VyIiwiYmFzaWNBdXRoUGFzc3dvcmQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJkYXRhYmFzZSIsImpzb25EYXRhIiwiYXV0aFR5cGUiLCJkZWZhdWx0UmVnaW9uIiwib3JnSWQiLCJwYXNzd29yZCIsInJlYWRPbmx5IiwidXNlciIsInNlY3VyZUpzb25GaWVsZHMiLCJpbmNsdWRlIiwidW5kZWZpbmVkIiwicmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwiZ2V0RGF0YVNvdXJjZVBsdWdpbnMiLCJkYXRhU291cmNlVHlwZVNlYXJjaFF1ZXJ5IiwiZGF0YVNvdXJjZUlkIl0sInNvdXJjZVJvb3QiOiIifQ==