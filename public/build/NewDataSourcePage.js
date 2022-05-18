"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NewDataSourcePage"],{

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

/***/ "./public/app/features/datasources/NewDataSourcePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getNavModel": () => (/* binding */ getNavModel)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _plugins_components_PluginsErrorsInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/plugins/components/PluginsErrorsInfo.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/datasources/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _div2, _LinkButton, _PluginsErrorsInfo;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function mapStateToProps(state) {
  return {
    navModel: getNavModel(),
    plugins: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_9__.getDataSourcePlugins)(state.dataSources),
    searchQuery: state.dataSources.dataSourceTypeSearchQuery,
    categories: state.dataSources.categories,
    isLoading: state.dataSources.isLoadingDataSources
  };
}

const mapDispatchToProps = {
  addDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_7__.addDataSource,
  loadDataSourcePlugins: _state_actions__WEBPACK_IMPORTED_MODULE_7__.loadDataSourcePlugins,
  setDataSourceTypeSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_8__.setDataSourceTypeSearchQuery
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);

class NewDataSourcePage extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onDataSourceTypeClicked", plugin => {
      this.props.addDataSource(plugin);
    });

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setDataSourceTypeSearchQuery(value);
    });

    _defineProperty(this, "onLearnMoreClick", evt => {
      evt.stopPropagation();
    });
  }

  componentDidMount() {
    this.props.loadDataSourcePlugins();
  }

  renderPlugins(plugins, id) {
    if (!plugins || !plugins.length) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.List, {
      items: plugins,
      className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
          > li {
            margin-bottom: 2px;
          }
        `,
      getItemKey: item => item.id.toString(),
      renderItem: item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(DataSourceTypeCard, {
        plugin: item,
        onClick: () => this.onDataSourceTypeClicked(item),
        onLearnMoreClick: this.onLearnMoreClick
      }),
      "aria-labelledby": id
    });
  }

  renderCategories() {
    const {
      categories
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
      children: [categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "add-data-source-category",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "add-data-source-category__header",
          id: category.id,
          children: category.title
        }), this.renderPlugins(category.plugins, category.id)]
      }, category.id)), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "add-data-source-more",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
          variant: "secondary",
          href: "https://grafana.com/plugins?type=datasource&utm_source=grafana_add_ds",
          target: "_blank",
          rel: "noopener",
          children: "Find more data source plugins on grafana.com"
        })
      }))]
    });
  }

  render() {
    const {
      navModel,
      isLoading,
      searchQuery,
      plugins
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
        isLoading: isLoading,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "page-action-bar",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.FilterInput, {
            value: searchQuery,
            onChange: this.onSearchQueryChange,
            placeholder: "Filter by name or type"
          }), _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "page-action-bar__spacer"
          })), _LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
            href: "datasources",
            fill: "outline",
            variant: "secondary",
            icon: "arrow-left",
            children: "Cancel"
          }))]
        }), !searchQuery && (_PluginsErrorsInfo || (_PluginsErrorsInfo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_plugins_components_PluginsErrorsInfo__WEBPACK_IMPORTED_MODULE_6__.PluginsErrorsInfo, {}))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [searchQuery && this.renderPlugins(plugins), !searchQuery && this.renderCategories()]
        })]
      })
    });
  }

}

const DataSourceTypeCard = props => {
  var _plugin$info, _plugin$info$links;

  const {
    plugin,
    onLearnMoreClick
  } = props;
  const isPhantom = plugin.module === 'phantom';
  const onClick = !isPhantom && !plugin.unlicensed ? props.onClick : () => {}; // find first plugin info link

  const learnMoreLink = ((_plugin$info = plugin.info) === null || _plugin$info === void 0 ? void 0 : (_plugin$info$links = _plugin$info.links) === null || _plugin$info$links === void 0 ? void 0 : _plugin$info$links.length) > 0 ? plugin.info.links[0] : null;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card, {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.card, 'card-parent'),
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Heading, {
      className: styles.heading,
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.AddDataSource.dataSourcePluginsV2(plugin.name),
      children: plugin.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Figure, {
      align: "center",
      className: styles.figure,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("img", {
        className: styles.logo,
        src: plugin.info.logos.small,
        alt: ""
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Description, {
      className: styles.description,
      children: plugin.info.description
    }), !isPhantom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Meta, {
      className: styles.meta,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.PluginSignatureBadge, {
        status: plugin.signature
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Card.Actions, {
      className: styles.actions,
      children: learnMoreLink && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
        variant: "secondary",
        href: `${learnMoreLink.url}?utm_source=grafana_add_ds`,
        target: "_blank",
        rel: "noopener",
        onClick: onLearnMoreClick,
        icon: "external-link-alt",
        "aria-label": `${plugin.name}, learn more.`,
        children: learnMoreLink.name
      })
    })]
  });
};

function getStyles(theme) {
  return {
    heading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      fontSize: theme.v1.typography.heading.h5,
      fontWeight: 'inherit'
    }),
    figure: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      width: 'inherit',
      marginRight: '0px',
      '> img': {
        width: theme.spacing(7)
      }
    }),
    meta: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginTop: '6px',
      position: 'relative'
    }),
    description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      margin: '0px',
      fontSize: theme.typography.size.sm
    }),
    actions: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      position: 'relative',
      alignSelf: 'center',
      marginTop: '0px',
      opacity: 0,
      '.card-parent:hover &, .card-parent:focus-within &': {
        opacity: 1
      }
    }),
    card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      gridTemplateAreas: `
      "Figure   Heading   Actions"
      "Figure Description Actions"
      "Figure    Meta     Actions"
      "Figure     -       Actions"`
    }),
    logo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      marginRight: theme.v1.spacing.lg,
      marginLeft: theme.v1.spacing.sm,
      width: theme.spacing(7),
      maxHeight: theme.spacing(7)
    })
  };
}

function getNavModel() {
  const main = {
    icon: 'database',
    id: 'datasource-new',
    text: 'Add data source',
    href: 'datasources/new',
    subTitle: 'Choose a data source type'
  };
  return {
    main: main,
    node: main
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(NewDataSourcePage));

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

/***/ "./public/app/features/plugins/components/PluginsErrorsInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginsErrorsInfo": () => (/* binding */ PluginsErrorsInfo)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _admin_state_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/plugins/admin/state/hooks.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;









function PluginsErrorsInfo() {
  const errors = (0,_admin_state_hooks__WEBPACK_IMPORTED_MODULE_5__.useGetErrors)();
  const {
    isLoading
  } = (0,_admin_state_hooks__WEBPACK_IMPORTED_MODULE_5__.useFetchStatus)();
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme)();

  if (isLoading || errors.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InfoBox, {
    "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.PluginsList.signatureErrorNotice,
    severity: "warning",
    urlTitle: "Read more about plugin signing",
    url: "https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        children: "Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins."
      })), "The following plugins are disabled and not shown in the list below:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.List, {
        items: errors,
        className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
            list-style-type: circle;
          `,
        renderItem: error => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
                margin-top: ${theme.spacing.sm};
              `,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.HorizontalGroup, {
            spacing: "sm",
            justify: "flex-start",
            align: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
              children: error.pluginId
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.PluginSignatureBadge, {
              status: mapPluginErrorCodeToSignatureStatus(error.errorCode),
              className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
                    margin-top: 0;
                  `
            })]
          })
        })
      })]
    })
  });
}

function mapPluginErrorCodeToSignatureStatus(code) {
  switch (code) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginErrorCode.invalidSignature:
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureStatus.invalid;

    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginErrorCode.missingSignature:
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureStatus.missing;

    case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginErrorCode.modifiedSignature:
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureStatus.modified;

    default:
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PluginSignatureStatus.missing;
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0Usd0RBQUMsd0RBQUQ7QUFBaUIsbUJBQU8sRUFBQyxJQUF6QjtBQUE4QixtQkFBTyxFQUFDLFlBQXRDO0FBQW1ELGlCQUFLLEVBQUMsUUFBekQ7QUFBQSxvQ0FDRTtBQUFBLHdCQUFTeU8sS0FBSyxDQUFDNkM7QUFBZixjQURGLGVBRUUsdURBQUMsNkRBQUQ7QUFDRSxvQkFBTSxFQUFFaUIsbUNBQW1DLENBQUM5RCxLQUFLLENBQUM4QyxTQUFQLENBRDdDO0FBRUUsdUJBQVMsRUFBRWhYLDZDQUFJO0FBQ2pDO0FBQ0E7QUFKZ0IsY0FGRjtBQUFBO0FBTEY7QUFOSixRQU5GO0FBQUE7QUFORixJQURGO0FBdUNEOztBQUVELFNBQVNnWSxtQ0FBVCxDQUE2Q0MsSUFBN0MsRUFBb0U7QUFDbEUsVUFBUUEsSUFBUjtBQUNFLFNBQUtULDJFQUFMO0FBQ0UsYUFBT0Msd0VBQVA7O0FBQ0YsU0FBS0QsMkVBQUw7QUFDRSxhQUFPQyx3RUFBUDs7QUFDRixTQUFLRCw0RUFBTDtBQUNFLGFBQU9DLHlFQUFQOztBQUNGO0FBQ0UsYUFBT0Esd0VBQVA7QUFSSjtBQVVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWRtaW4vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvTmV3RGF0YVNvdXJjZVBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvYnVpbGRDYXRlZ29yaWVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL25hdk1vZGVsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL3NlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2FkbWluL3N0YXRlL2hvb2tzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvYWRtaW4vc3RhdGUvc2VsZWN0b3JzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL3BsdWdpbnMvY29tcG9uZW50cy9QbHVnaW5zRXJyb3JzSW5mby50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmlhbCgpIHtcbiAgY29uc3QgZXhwaXJ5ID0gY29uZmlnLmxpY2Vuc2VJbmZvPy50cmlhbEV4cGlyeTtcbiAgcmV0dXJuICEhKGV4cGlyeSAmJiBleHBpcnkgPiAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZ2hsaWdodFRyaWFsID0gKCkgPT4gaXNUcmlhbCgpICYmIGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cztcbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBHcmFmYW5hVGhlbWUyLCBOYXZNb2RlbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBDYXJkLCBMaW5rQnV0dG9uLCBMaXN0LCBQbHVnaW5TaWduYXR1cmVCYWRnZSwgRmlsdGVySW5wdXQsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgUGx1Z2luc0Vycm9yc0luZm8gfSBmcm9tICcuLi9wbHVnaW5zL2NvbXBvbmVudHMvUGx1Z2luc0Vycm9yc0luZm8nO1xuXG5pbXBvcnQgeyBhZGREYXRhU291cmNlLCBsb2FkRGF0YVNvdXJjZVBsdWdpbnMgfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2V0RGF0YVNvdXJjZVR5cGVTZWFyY2hRdWVyeSB9IGZyb20gJy4vc3RhdGUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZVBsdWdpbnMgfSBmcm9tICcuL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG5hdk1vZGVsOiBnZXROYXZNb2RlbCgpLFxuICAgIHBsdWdpbnM6IGdldERhdGFTb3VyY2VQbHVnaW5zKHN0YXRlLmRhdGFTb3VyY2VzKSxcbiAgICBzZWFyY2hRdWVyeTogc3RhdGUuZGF0YVNvdXJjZXMuZGF0YVNvdXJjZVR5cGVTZWFyY2hRdWVyeSxcbiAgICBjYXRlZ29yaWVzOiBzdGF0ZS5kYXRhU291cmNlcy5jYXRlZ29yaWVzLFxuICAgIGlzTG9hZGluZzogc3RhdGUuZGF0YVNvdXJjZXMuaXNMb2FkaW5nRGF0YVNvdXJjZXMsXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgYWRkRGF0YVNvdXJjZSxcbiAgbG9hZERhdGFTb3VyY2VQbHVnaW5zLFxuICBzZXREYXRhU291cmNlVHlwZVNlYXJjaFF1ZXJ5LFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbnR5cGUgUHJvcHMgPSBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuY2xhc3MgTmV3RGF0YVNvdXJjZVBhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMubG9hZERhdGFTb3VyY2VQbHVnaW5zKCk7XG4gIH1cblxuICBvbkRhdGFTb3VyY2VUeXBlQ2xpY2tlZCA9IChwbHVnaW46IERhdGFTb3VyY2VQbHVnaW5NZXRhKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5hZGREYXRhU291cmNlKHBsdWdpbik7XG4gIH07XG5cbiAgb25TZWFyY2hRdWVyeUNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZXREYXRhU291cmNlVHlwZVNlYXJjaFF1ZXJ5KHZhbHVlKTtcbiAgfTtcblxuICByZW5kZXJQbHVnaW5zKHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW10sIGlkPzogc3RyaW5nKSB7XG4gICAgaWYgKCFwbHVnaW5zIHx8ICFwbHVnaW5zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0XG4gICAgICAgIGl0ZW1zPXtwbHVnaW5zfVxuICAgICAgICBjbGFzc05hbWU9e2Nzc2BcbiAgICAgICAgICA+IGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIGdldEl0ZW1LZXk9eyhpdGVtKSA9PiBpdGVtLmlkLnRvU3RyaW5nKCl9XG4gICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXG4gICAgICAgICAgPERhdGFTb3VyY2VUeXBlQ2FyZFxuICAgICAgICAgICAgcGx1Z2luPXtpdGVtfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkRhdGFTb3VyY2VUeXBlQ2xpY2tlZChpdGVtKX1cbiAgICAgICAgICAgIG9uTGVhcm5Nb3JlQ2xpY2s9e3RoaXMub25MZWFybk1vcmVDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e2lkfVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgb25MZWFybk1vcmVDbGljayA9IChldnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcblxuICByZW5kZXJDYXRlZ29yaWVzKCkge1xuICAgIGNvbnN0IHsgY2F0ZWdvcmllcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtZGF0YS1zb3VyY2UtY2F0ZWdvcnlcIiBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLWRhdGEtc291cmNlLWNhdGVnb3J5X19oZWFkZXJcIiBpZD17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICB7Y2F0ZWdvcnkudGl0bGV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclBsdWdpbnMoY2F0ZWdvcnkucGx1Z2lucywgY2F0ZWdvcnkuaWQpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtZGF0YS1zb3VyY2UtbW9yZVwiPlxuICAgICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dyYWZhbmEuY29tL3BsdWdpbnM/dHlwZT1kYXRhc291cmNlJnV0bV9zb3VyY2U9Z3JhZmFuYV9hZGRfZHNcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBGaW5kIG1vcmUgZGF0YSBzb3VyY2UgcGx1Z2lucyBvbiBncmFmYW5hLmNvbVxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmF2TW9kZWwsIGlzTG9hZGluZywgc2VhcmNoUXVlcnksIHBsdWdpbnMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgICAgICA8RmlsdGVySW5wdXQgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBvbkNoYW5nZT17dGhpcy5vblNlYXJjaFF1ZXJ5Q2hhbmdlfSBwbGFjZWhvbGRlcj1cIkZpbHRlciBieSBuYW1lIG9yIHR5cGVcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWFjdGlvbi1iYXJfX3NwYWNlclwiIC8+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBocmVmPVwiZGF0YXNvdXJjZXNcIiBmaWxsPVwib3V0bGluZVwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBpY29uPVwiYXJyb3ctbGVmdFwiPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7IXNlYXJjaFF1ZXJ5ICYmIDxQbHVnaW5zRXJyb3JzSW5mbyAvPn1cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3NlYXJjaFF1ZXJ5ICYmIHRoaXMucmVuZGVyUGx1Z2lucyhwbHVnaW5zKX1cbiAgICAgICAgICAgIHshc2VhcmNoUXVlcnkgJiYgdGhpcy5yZW5kZXJDYXRlZ29yaWVzKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmludGVyZmFjZSBEYXRhU291cmNlVHlwZUNhcmRQcm9wcyB7XG4gIHBsdWdpbjogRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG4gIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG4gIG9uTGVhcm5Nb3JlQ2xpY2s6IChldnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZDtcbn1cblxuY29uc3QgRGF0YVNvdXJjZVR5cGVDYXJkOiBGQzxEYXRhU291cmNlVHlwZUNhcmRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwbHVnaW4sIG9uTGVhcm5Nb3JlQ2xpY2sgfSA9IHByb3BzO1xuICBjb25zdCBpc1BoYW50b20gPSBwbHVnaW4ubW9kdWxlID09PSAncGhhbnRvbSc7XG4gIGNvbnN0IG9uQ2xpY2sgPSAhaXNQaGFudG9tICYmICFwbHVnaW4udW5saWNlbnNlZCA/IHByb3BzLm9uQ2xpY2sgOiAoKSA9PiB7fTtcbiAgLy8gZmluZCBmaXJzdCBwbHVnaW4gaW5mbyBsaW5rXG4gIGNvbnN0IGxlYXJuTW9yZUxpbmsgPSBwbHVnaW4uaW5mbz8ubGlua3M/Lmxlbmd0aCA+IDAgPyBwbHVnaW4uaW5mby5saW5rc1swXSA6IG51bGw7XG5cbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPXtjeChzdHlsZXMuY2FyZCwgJ2NhcmQtcGFyZW50Jyl9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgPENhcmQuSGVhZGluZ1xuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfVxuICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuQWRkRGF0YVNvdXJjZS5kYXRhU291cmNlUGx1Z2luc1YyKHBsdWdpbi5uYW1lKX1cbiAgICAgID5cbiAgICAgICAge3BsdWdpbi5uYW1lfVxuICAgICAgPC9DYXJkLkhlYWRpbmc+XG4gICAgICA8Q2FyZC5GaWd1cmUgYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9e3N0eWxlcy5maWd1cmV9PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz17cGx1Z2luLmluZm8ubG9nb3Muc21hbGx9IGFsdD1cIlwiIC8+XG4gICAgICA8L0NhcmQuRmlndXJlPlxuICAgICAgPENhcmQuRGVzY3JpcHRpb24gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntwbHVnaW4uaW5mby5kZXNjcmlwdGlvbn08L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgICB7IWlzUGhhbnRvbSAmJiAoXG4gICAgICAgIDxDYXJkLk1ldGEgY2xhc3NOYW1lPXtzdHlsZXMubWV0YX0+XG4gICAgICAgICAgPFBsdWdpblNpZ25hdHVyZUJhZGdlIHN0YXR1cz17cGx1Z2luLnNpZ25hdHVyZX0gLz5cbiAgICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICApfVxuICAgICAgPENhcmQuQWN0aW9ucyBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfT5cbiAgICAgICAge2xlYXJuTW9yZUxpbmsgJiYgKFxuICAgICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGhyZWY9e2Ake2xlYXJuTW9yZUxpbmsudXJsfT91dG1fc291cmNlPWdyYWZhbmFfYWRkX2RzYH1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lclwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkxlYXJuTW9yZUNsaWNrfVxuICAgICAgICAgICAgaWNvbj1cImV4dGVybmFsLWxpbmstYWx0XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9e2Ake3BsdWdpbi5uYW1lfSwgbGVhcm4gbW9yZS5gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsZWFybk1vcmVMaW5rLm5hbWV9XG4gICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9DYXJkLkFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSB7XG4gIHJldHVybiB7XG4gICAgaGVhZGluZzogY3NzKHtcbiAgICAgIGZvbnRTaXplOiB0aGVtZS52MS50eXBvZ3JhcGh5LmhlYWRpbmcuaDUsXG4gICAgICBmb250V2VpZ2h0OiAnaW5oZXJpdCcsXG4gICAgfSksXG4gICAgZmlndXJlOiBjc3Moe1xuICAgICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnMHB4JyxcbiAgICAgICc+IGltZyc6IHtcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgICB9LFxuICAgIH0pLFxuICAgIG1ldGE6IGNzcyh7XG4gICAgICBtYXJnaW5Ub3A6ICc2cHgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgfSksXG4gICAgZGVzY3JpcHRpb246IGNzcyh7XG4gICAgICBtYXJnaW46ICcwcHgnLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuc2l6ZS5zbSxcbiAgICB9KSxcbiAgICBhY3Rpb25zOiBjc3Moe1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiAnMHB4JyxcbiAgICAgIG9wYWNpdHk6IDAsXG5cbiAgICAgICcuY2FyZC1wYXJlbnQ6aG92ZXIgJiwgLmNhcmQtcGFyZW50OmZvY3VzLXdpdGhpbiAmJzoge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBjYXJkOiBjc3Moe1xuICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IGBcbiAgICAgIFwiRmlndXJlICAgSGVhZGluZyAgIEFjdGlvbnNcIlxuICAgICAgXCJGaWd1cmUgRGVzY3JpcHRpb24gQWN0aW9uc1wiXG4gICAgICBcIkZpZ3VyZSAgICBNZXRhICAgICBBY3Rpb25zXCJcbiAgICAgIFwiRmlndXJlICAgICAtICAgICAgIEFjdGlvbnNcImAsXG4gICAgfSksXG4gICAgbG9nbzogY3NzKHtcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS52MS5zcGFjaW5nLmxnLFxuICAgICAgbWFyZ2luTGVmdDogdGhlbWUudjEuc3BhY2luZy5zbSxcbiAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxuICAgICAgbWF4SGVpZ2h0OiB0aGVtZS5zcGFjaW5nKDcpLFxuICAgIH0pLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmF2TW9kZWwoKTogTmF2TW9kZWwge1xuICBjb25zdCBtYWluID0ge1xuICAgIGljb246ICdkYXRhYmFzZScsXG4gICAgaWQ6ICdkYXRhc291cmNlLW5ldycsXG4gICAgdGV4dDogJ0FkZCBkYXRhIHNvdXJjZScsXG4gICAgaHJlZjogJ2RhdGFzb3VyY2VzL25ldycsXG4gICAgc3ViVGl0bGU6ICdDaG9vc2UgYSBkYXRhIHNvdXJjZSB0eXBlJyxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG1haW46IG1haW4sXG4gICAgbm9kZTogbWFpbixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKE5ld0RhdGFTb3VyY2VQYWdlKTtcbiIsImltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIERhdGFTb3VyY2VTZXR0aW5ncywgbG9jYXRpb25VdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlV2l0aEJhY2tlbmQsIGdldERhdGFTb3VyY2VTcnYsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdXBkYXRlTmF2SW5kZXggfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldEJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSB9IGZyb20gJ2FwcC9jb3JlL3V0aWxzL2FjY2Vzc0NvbnRyb2wnO1xuaW1wb3J0IHsgZ2V0RGF0YXNvdXJjZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2RhdGFzb3VyY2Vfc3J2JztcbmltcG9ydCB7IGdldFBsdWdpblNldHRpbmdzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvcGx1Z2luU2V0dGluZ3MnO1xuaW1wb3J0IHsgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL3BsdWdpbl9sb2FkZXInO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5LCBUaHVua0Rpc3BhdGNoLCBUaHVua1Jlc3VsdCB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcblxuaW1wb3J0IHsgYnVpbGRDYXRlZ29yaWVzIH0gZnJvbSAnLi9idWlsZENhdGVnb3JpZXMnO1xuaW1wb3J0IHsgYnVpbGROYXZNb2RlbCB9IGZyb20gJy4vbmF2TW9kZWwnO1xuaW1wb3J0IHtcbiAgZGF0YVNvdXJjZUxvYWRlZCxcbiAgZGF0YVNvdXJjZU1ldGFMb2FkZWQsXG4gIGRhdGFTb3VyY2VQbHVnaW5zTG9hZCxcbiAgZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQsXG4gIGRhdGFTb3VyY2VzTG9hZGVkLFxuICBpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkLFxuICBpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkLFxuICB0ZXN0RGF0YVNvdXJjZUZhaWxlZCxcbiAgdGVzdERhdGFTb3VyY2VTdGFydGluZyxcbiAgdGVzdERhdGFTb3VyY2VTdWNjZWVkZWQsXG59IGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZSwgZ2V0RGF0YVNvdXJjZU1ldGEgfSBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVNvdXJjZVR5cGVzTG9hZGVkUGF5bG9hZCB7XG4gIHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW107XG4gIGNhdGVnb3JpZXM6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluaXREYXRhU291cmNlU2V0dGluZ0RlcGVuZGVuY2llcyB7XG4gIGxvYWREYXRhU291cmNlOiB0eXBlb2YgbG9hZERhdGFTb3VyY2U7XG4gIGxvYWREYXRhU291cmNlTWV0YTogdHlwZW9mIGxvYWREYXRhU291cmNlTWV0YTtcbiAgZ2V0RGF0YVNvdXJjZTogdHlwZW9mIGdldERhdGFTb3VyY2U7XG4gIGdldERhdGFTb3VyY2VNZXRhOiB0eXBlb2YgZ2V0RGF0YVNvdXJjZU1ldGE7XG4gIGltcG9ydERhdGFTb3VyY2VQbHVnaW46IHR5cGVvZiBpbXBvcnREYXRhU291cmNlUGx1Z2luO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlc3REYXRhU291cmNlRGVwZW5kZW5jaWVzIHtcbiAgZ2V0RGF0YXNvdXJjZVNydjogdHlwZW9mIGdldERhdGFTb3VyY2VTcnY7XG4gIGdldEJhY2tlbmRTcnY6IHR5cGVvZiBnZXRCYWNrZW5kU3J2O1xufVxuXG5leHBvcnQgY29uc3QgaW5pdERhdGFTb3VyY2VTZXR0aW5ncyA9IChcbiAgcGFnZUlkOiBzdHJpbmcsXG4gIGRlcGVuZGVuY2llczogSW5pdERhdGFTb3VyY2VTZXR0aW5nRGVwZW5kZW5jaWVzID0ge1xuICAgIGxvYWREYXRhU291cmNlLFxuICAgIGxvYWREYXRhU291cmNlTWV0YSxcbiAgICBnZXREYXRhU291cmNlLFxuICAgIGdldERhdGFTb3VyY2VNZXRhLFxuICAgIGltcG9ydERhdGFTb3VyY2VQbHVnaW4sXG4gIH1cbik6IFRodW5rUmVzdWx0PHZvaWQ+ID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBpZiAoIXBhZ2VJZCkge1xuICAgICAgZGlzcGF0Y2goaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZChuZXcgRXJyb3IoJ0ludmFsaWQgSUQnKSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2FkZWREYXRhU291cmNlID0gYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlKHBhZ2VJZCkpO1xuICAgICAgYXdhaXQgZGlzcGF0Y2goZGVwZW5kZW5jaWVzLmxvYWREYXRhU291cmNlTWV0YShsb2FkZWREYXRhU291cmNlKSk7XG5cbiAgICAgIC8vIGhhdmUgd2UgYWxyZWFkeSBsb2FkZWQgdGhlIHBsdWdpbiB0aGVuIHdlIGNhbiBza2lwIHRoZSBzdGVwcyBiZWxvdz9cbiAgICAgIGlmIChnZXRTdGF0ZSgpLmRhdGFTb3VyY2VTZXR0aW5ncy5wbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhU291cmNlID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2UoZ2V0U3RhdGUoKS5kYXRhU291cmNlcywgcGFnZUlkKTtcbiAgICAgIGNvbnN0IGRhdGFTb3VyY2VNZXRhID0gZGVwZW5kZW5jaWVzLmdldERhdGFTb3VyY2VNZXRhKGdldFN0YXRlKCkuZGF0YVNvdXJjZXMsIGRhdGFTb3VyY2UhLnR5cGUpO1xuICAgICAgY29uc3QgaW1wb3J0ZWRQbHVnaW4gPSBhd2FpdCBkZXBlbmRlbmNpZXMuaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihkYXRhU291cmNlTWV0YSk7XG5cbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQoaW1wb3J0ZWRQbHVnaW4pKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQoZXJyKSk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHRlc3REYXRhU291cmNlID0gKFxuICBkYXRhU291cmNlTmFtZTogc3RyaW5nLFxuICBkZXBlbmRlbmNpZXM6IFRlc3REYXRhU291cmNlRGVwZW5kZW5jaWVzID0ge1xuICAgIGdldERhdGFzb3VyY2VTcnYsXG4gICAgZ2V0QmFja2VuZFNydixcbiAgfVxuKTogVGh1bmtSZXN1bHQ8dm9pZD4gPT4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGRzQXBpID0gYXdhaXQgZGVwZW5kZW5jaWVzLmdldERhdGFzb3VyY2VTcnYoKS5nZXQoZGF0YVNvdXJjZU5hbWUpO1xuXG4gICAgaWYgKCFkc0FwaS50ZXN0RGF0YXNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlU3RhcnRpbmcoKSk7XG5cbiAgICBkZXBlbmRlbmNpZXMuZ2V0QmFja2VuZFNydigpLndpdGhOb0JhY2tlbmRDYWNoZShhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkc0FwaS50ZXN0RGF0YXNvdXJjZSgpO1xuXG4gICAgICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlU3VjY2VlZGVkKHJlc3VsdCkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnN0IHsgc3RhdHVzVGV4dCwgbWVzc2FnZTogZXJyTWVzc2FnZSwgZGV0YWlscywgZGF0YSB9ID0gZXJyO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJNZXNzYWdlIHx8IGRhdGE/Lm1lc3NhZ2UgfHwgJ0hUVFAgZXJyb3IgJyArIHN0YXR1c1RleHQ7XG5cbiAgICAgICAgZGlzcGF0Y2godGVzdERhdGFTb3VyY2VGYWlsZWQoeyBtZXNzYWdlLCBkZXRhaWxzIH0pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL2RhdGFzb3VyY2VzJyk7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZXNMb2FkZWQocmVzcG9uc2UpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlKHVpZDogc3RyaW5nKTogVGh1bmtSZXN1bHQ8UHJvbWlzZTxEYXRhU291cmNlU2V0dGluZ3M+PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gYXdhaXQgZ2V0RGF0YVNvdXJjZVVzaW5nVWlkT3JJZCh1aWQpO1xuXG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZUxvYWRlZChkYXRhU291cmNlKSk7XG4gICAgcmV0dXJuIGRhdGFTb3VyY2U7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZU1ldGEoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgcGx1Z2luSW5mbyA9IChhd2FpdCBnZXRQbHVnaW5TZXR0aW5ncyhkYXRhU291cmNlLnR5cGUpKSBhcyBEYXRhU291cmNlUGx1Z2luTWV0YTtcbiAgICBjb25zdCBwbHVnaW4gPSBhd2FpdCBpbXBvcnREYXRhU291cmNlUGx1Z2luKHBsdWdpbkluZm8pO1xuICAgIGNvbnN0IGlzQmFja2VuZCA9IHBsdWdpbi5EYXRhU291cmNlQ2xhc3MucHJvdG90eXBlIGluc3RhbmNlb2YgRGF0YVNvdXJjZVdpdGhCYWNrZW5kO1xuICAgIGNvbnN0IG1ldGEgPSB7XG4gICAgICAuLi5wbHVnaW5JbmZvLFxuICAgICAgaXNCYWNrZW5kOiBwbHVnaW5JbmZvLmJhY2tlbmQgfHwgaXNCYWNrZW5kLFxuICAgIH07XG5cbiAgICBkaXNwYXRjaChkYXRhU291cmNlTWV0YUxvYWRlZChtZXRhKSk7XG5cbiAgICBwbHVnaW4ubWV0YSA9IG1ldGE7XG4gICAgZGlzcGF0Y2godXBkYXRlTmF2SW5kZXgoYnVpbGROYXZNb2RlbChkYXRhU291cmNlLCBwbHVnaW4pKSk7XG4gIH07XG59XG5cbi8qKlxuICogR2V0IGRhdGEgc291cmNlIGJ5IHVpZCBvciBpZCwgaWYgb2xkIGlkIGRldGVjdGVkIGhhbmRsZXMgcmVkaXJlY3RcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQodWlkOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPERhdGFTb3VyY2VTZXR0aW5ncz4ge1xuICAvLyBUcnkgZmlyc3Qgd2l0aCB1aWQgYXBpXG4gIHRyeSB7XG4gICAgY29uc3QgYnlVaWQgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpLmZldGNoPERhdGFTb3VyY2VTZXR0aW5ncz4oe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6IGAvYXBpL2RhdGFzb3VyY2VzL3VpZC8ke3VpZH1gLFxuICAgICAgICBwYXJhbXM6IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCksXG4gICAgICAgIHNob3dFcnJvckFsZXJ0OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChieVVpZC5vaykge1xuICAgICAgcmV0dXJuIGJ5VWlkLmRhdGE7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGxvb2t1cCBkYXRhIHNvdXJjZSBieSB1aWQnLCBlcnIpO1xuICB9XG5cbiAgLy8gdHJ5IGxvb2t1cCBieSBvbGQgZGIgaWRcbiAgY29uc3QgaWQgPSB0eXBlb2YgdWlkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHVpZCwgMTApIDogdWlkO1xuICBpZiAoIU51bWJlci5pc05hTihpZCkpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KCkuZmV0Y2g8RGF0YVNvdXJjZVNldHRpbmdzPih7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHVybDogYC9hcGkvZGF0YXNvdXJjZXMvJHtpZH1gLFxuICAgICAgICBwYXJhbXM6IGFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtKCksXG4gICAgICAgIHNob3dFcnJvckFsZXJ0OiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIElmIHRoZSB1aWQgaXMgYSBudW1iZXIsIHRoZW4gdGhpcyBpcyBhIHJlZnJlc2ggb24gb25lIG9mIHRoZSBzZXR0aW5ncyB0YWJzXG4gICAgLy8gYW5kIHdlIGNhbiByZXR1cm4gdGhlIHJlc3BvbnNlIGRhdGFcbiAgICBpZiAocmVzcG9uc2Uub2sgJiYgdHlwZW9mIHVpZCA9PT0gJ251bWJlcicgJiYgcmVzcG9uc2UuZGF0YS5pZCA9PT0gdWlkKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICAvLyBOb3QgaWRlYWwgdG8gZG8gYSBmdWxsIHBhZ2UgcmVsb2FkIGhlcmUgYnV0IHNvIHRyaWNreSB0byBoYW5kbGUgdGhpc1xuICAgIC8vIG90aGVyd2lzZSBXZSBjYW4gdXBkYXRlIHRoZSBsb2NhdGlvbiB1c2luZyByZWFjdCByb3V0ZXIsIGJ1dCBuZWVkIHRvXG4gICAgLy8gZnVsbHkgcmVsb2FkIHRoZSByb3V0ZSBhcyB0aGUgbmF2IG1vZGVsIHBhZ2UgaW5kZXggaXMgbm90IG1hdGNoaW5nIHdpdGhcbiAgICAvLyB0aGUgdXJsIGluIHRoYXQgY2FzZS4gQW5kIHJlYWN0IHJvdXRlciBoYXMgbm8gd2F5IHRvIHVubW91bnQgcmVtb3VudCBhXG4gICAgLy8gcm91dGVcbiAgICBpZiAocmVzcG9uc2Uub2sgJiYgcmVzcG9uc2UuZGF0YS5pZC50b1N0cmluZygpID09PSB1aWQpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb25VdGlsLmFzc3VyZUJhc2VVcmwoYC9kYXRhc291cmNlcy9lZGl0LyR7cmVzcG9uc2UuZGF0YS51aWR9YCk7XG4gICAgICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVNldHRpbmdzOyAvLyBhdm9pZHMgZmxhc2hpbmcgYW4gZXJyb3JcbiAgICB9XG4gIH1cblxuICB0aHJvdyBFcnJvcignQ291bGQgbm90IGZpbmQgZGF0YSBzb3VyY2UnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERhdGFTb3VyY2UocGx1Z2luOiBEYXRhU291cmNlUGx1Z2luTWV0YSk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBhd2FpdCBkaXNwYXRjaChsb2FkRGF0YVNvdXJjZXMoKSk7XG5cbiAgICBjb25zdCBkYXRhU291cmNlcyA9IGdldFN0b3JlKCkuZGF0YVNvdXJjZXMuZGF0YVNvdXJjZXM7XG5cbiAgICBjb25zdCBuZXdJbnN0YW5jZSA9IHtcbiAgICAgIG5hbWU6IHBsdWdpbi5uYW1lLFxuICAgICAgdHlwZTogcGx1Z2luLmlkLFxuICAgICAgYWNjZXNzOiAncHJveHknLFxuICAgICAgaXNEZWZhdWx0OiBkYXRhU291cmNlcy5sZW5ndGggPT09IDAsXG4gICAgfTtcblxuICAgIGlmIChuYW1lRXhpdHMoZGF0YVNvdXJjZXMsIG5ld0luc3RhbmNlLm5hbWUpKSB7XG4gICAgICBuZXdJbnN0YW5jZS5uYW1lID0gZmluZE5ld05hbWUoZGF0YVNvdXJjZXMsIG5ld0luc3RhbmNlLm5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2RhdGFzb3VyY2VzJywgbmV3SW5zdGFuY2UpO1xuICAgIGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5yZWxvYWQoKTtcblxuICAgIGF3YWl0IGNvbnRleHRTcnYuZmV0Y2hVc2VyUGVybWlzc2lvbnMoKTtcblxuICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKGAvZGF0YXNvdXJjZXMvZWRpdC8ke3Jlc3VsdC5kYXRhc291cmNlLnVpZH1gKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWREYXRhU291cmNlUGx1Z2lucygpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChkYXRhU291cmNlUGx1Z2luc0xvYWQoKSk7XG4gICAgY29uc3QgcGx1Z2lucyA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5nZXQoJy9hcGkvcGx1Z2lucycsIHsgZW5hYmxlZDogMSwgdHlwZTogJ2RhdGFzb3VyY2UnIH0pO1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBidWlsZENhdGVnb3JpZXMocGx1Z2lucyk7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQoeyBwbHVnaW5zLCBjYXRlZ29yaWVzIH0pKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZURhdGFTb3VyY2UoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLnB1dChgL2FwaS9kYXRhc291cmNlcy8ke2RhdGFTb3VyY2UuaWR9YCwgZGF0YVNvdXJjZSk7IC8vIGJ5IFVJRCBub3QgeWV0IHN1cHBvcnRlZFxuICAgIGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5yZWxvYWQoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2gobG9hZERhdGFTb3VyY2UoZGF0YVNvdXJjZS51aWQpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZURhdGFTb3VyY2UoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdG9yZSkgPT4ge1xuICAgIGNvbnN0IGRhdGFTb3VyY2UgPSBnZXRTdG9yZSgpLmRhdGFTb3VyY2VzLmRhdGFTb3VyY2U7XG5cbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZGVsZXRlKGAvYXBpL2RhdGFzb3VyY2VzLyR7ZGF0YVNvdXJjZS5pZH1gKTtcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG5cbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnL2RhdGFzb3VyY2VzJyk7XG4gIH07XG59XG5cbmludGVyZmFjZSBJdGVtV2l0aE5hbWUge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYW1lRXhpdHMoZGF0YVNvdXJjZXM6IEl0ZW1XaXRoTmFtZVtdLCBuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIChcbiAgICBkYXRhU291cmNlcy5maWx0ZXIoKGRhdGFTb3VyY2UpID0+IHtcbiAgICAgIHJldHVybiBkYXRhU291cmNlLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pLmxlbmd0aCA+IDBcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmROZXdOYW1lKGRhdGFTb3VyY2VzOiBJdGVtV2l0aE5hbWVbXSwgbmFtZTogc3RyaW5nKSB7XG4gIC8vIE5lZWQgdG8gbG9vcCB0aHJvdWdoIGN1cnJlbnQgZGF0YSBzb3VyY2VzIHRvIG1ha2Ugc3VyZVxuICAvLyB0aGUgbmFtZSBkb2Vzbid0IGV4aXN0XG4gIHdoaWxlIChuYW1lRXhpdHMoZGF0YVNvdXJjZXMsIG5hbWUpKSB7XG4gICAgLy8gSWYgdGhlcmUncyBhIGR1cGxpY2F0ZSBuYW1lIHRoYXQgZG9lc24ndCBlbmQgd2l0aCAnLXgnXG4gICAgLy8gd2UgY2FuIGFkZCAtMSB0byB0aGUgbmFtZSBhbmQgYmUgZG9uZS5cbiAgICBpZiAoIW5hbWVIYXNTdWZmaXgobmFtZSkpIHtcbiAgICAgIG5hbWUgPSBgJHtuYW1lfS0xYDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgdGhlcmUncyBhIGR1cGxpY2F0ZSBuYW1lIHRoYXQgZW5kcyB3aXRoICcteCdcbiAgICAgIC8vIHdlIGNhbiB0cnkgdG8gaW5jcmVtZW50IHRoZSBsYXN0IGRpZ2l0IHVudGlsIHRoZSBuYW1lIGlzIHVuaXF1ZVxuXG4gICAgICAvLyByZW1vdmUgdGhlICd4JyBwYXJ0IGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIG5ldyBudW1iZXJcbiAgICAgIG5hbWUgPSBgJHtnZXROZXdOYW1lKG5hbWUpfSR7aW5jcmVtZW50TGFzdERpZ2l0KGdldExhc3REaWdpdChuYW1lKSl9YDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmFtZTtcbn1cblxuZnVuY3Rpb24gbmFtZUhhc1N1ZmZpeChuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUuZW5kc1dpdGgoJy0nLCBuYW1lLmxlbmd0aCAtIDEpO1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0RGlnaXQobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBwYXJzZUludChuYW1lLnNsaWNlKC0xKSwgMTApO1xufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRMYXN0RGlnaXQoZGlnaXQ6IG51bWJlcikge1xuICByZXR1cm4gaXNOYU4oZGlnaXQpID8gMSA6IGRpZ2l0ICsgMTtcbn1cblxuZnVuY3Rpb24gZ2V0TmV3TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgcmV0dXJuIG5hbWUuc2xpY2UoMCwgbmFtZS5sZW5ndGggLSAxKTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBQbHVnaW5UeXBlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnkgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDYXRlZ29yaWVzKHBsdWdpbnM6IERhdGFTb3VyY2VQbHVnaW5NZXRhW10pOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXSB7XG4gIGNvbnN0IGNhdGVnb3JpZXM6IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeVtdID0gW1xuICAgIHsgaWQ6ICd0c2RiJywgdGl0bGU6ICdUaW1lIHNlcmllcyBkYXRhYmFzZXMnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdsb2dnaW5nJywgdGl0bGU6ICdMb2dnaW5nICYgZG9jdW1lbnQgZGF0YWJhc2VzJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAndHJhY2luZycsIHRpdGxlOiAnRGlzdHJpYnV0ZWQgdHJhY2luZycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ3NxbCcsIHRpdGxlOiAnU1FMJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnY2xvdWQnLCB0aXRsZTogJ0Nsb3VkJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnZW50ZXJwcmlzZScsIHRpdGxlOiAnRW50ZXJwcmlzZSBwbHVnaW5zJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnaW90JywgdGl0bGU6ICdJbmR1c3RyaWFsICYgSW9UJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnb3RoZXInLCB0aXRsZTogJ090aGVycycsIHBsdWdpbnM6IFtdIH0sXG4gIF0uZmlsdGVyKChpdGVtKSA9PiBpdGVtKTtcblxuICBjb25zdCBjYXRlZ29yeUluZGV4OiBSZWNvcmQ8c3RyaW5nLCBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnk+ID0ge307XG4gIGNvbnN0IHBsdWdpbkluZGV4OiBSZWNvcmQ8c3RyaW5nLCBEYXRhU291cmNlUGx1Z2luTWV0YT4gPSB7fTtcbiAgY29uc3QgZW50ZXJwcmlzZVBsdWdpbnMgPSBnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMoKTtcblxuICAvLyBidWlsZCBpbmRpY2VzXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIGNhdGVnb3J5SW5kZXhbY2F0ZWdvcnkuaWRdID0gY2F0ZWdvcnk7XG4gIH1cblxuICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBwbHVnaW5zKSB7XG4gICAgY29uc3QgZW50ZXJwcmlzZVBsdWdpbiA9IGVudGVycHJpc2VQbHVnaW5zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBsdWdpbi5pZCk7XG4gICAgLy8gRm9yY2UgY2F0ZWdvcnkgZm9yIGVudGVycHJpc2UgcGx1Z2luc1xuICAgIGlmIChwbHVnaW4uZW50ZXJwcmlzZSB8fCBlbnRlcnByaXNlUGx1Z2luKSB7XG4gICAgICBwbHVnaW4uY2F0ZWdvcnkgPSAnZW50ZXJwcmlzZSc7XG4gICAgICBwbHVnaW4udW5saWNlbnNlZCA9ICFmZWF0dXJlRW5hYmxlZCgnZW50ZXJwcmlzZS5wbHVnaW5zJyk7XG4gICAgICBwbHVnaW4uaW5mby5saW5rcyA9IGVudGVycHJpc2VQbHVnaW4/LmluZm8/LmxpbmtzIHx8IHBsdWdpbi5pbmZvLmxpbmtzO1xuICAgIH1cblxuICAgIC8vIEZpeCBsaW5rIG5hbWVcbiAgICBpZiAocGx1Z2luLmluZm8ubGlua3MpIHtcbiAgICAgIGZvciAoY29uc3QgbGluayBvZiBwbHVnaW4uaW5mby5saW5rcykge1xuICAgICAgICBsaW5rLm5hbWUgPSAnTGVhcm4gbW9yZSc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBsdWdpbi5jYXRlZ29yeSkgfHwgY2F0ZWdvcnlJbmRleFsnb3RoZXInXTtcbiAgICBjYXRlZ29yeS5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAvLyBhZGQgdG8gcGx1Z2luIGluZGV4XG4gICAgcGx1Z2luSW5kZXhbcGx1Z2luLmlkXSA9IHBsdWdpbjtcbiAgfVxuXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIC8vIGFkZCBwaGFudG9tIHBsdWdpblxuICAgIGlmIChjYXRlZ29yeS5pZCA9PT0gJ2Nsb3VkJykge1xuICAgICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKGdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4oKSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIHBoYW50b20gcGx1Z2luc1xuICAgIGlmIChjYXRlZ29yeS5pZCA9PT0gJ2VudGVycHJpc2UnKSB7XG4gICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBlbnRlcnByaXNlUGx1Z2lucykge1xuICAgICAgICBpZiAoIXBsdWdpbkluZGV4W3BsdWdpbi5pZF0pIHtcbiAgICAgICAgICBjYXRlZ29yeS5wbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRQbHVnaW5zKGNhdGVnb3J5LnBsdWdpbnMpO1xuICB9XG5cbiAgLy8gT25seSBzaG93IGNhdGVnb3JpZXMgd2l0aCBwbHVnaW5zXG4gIHJldHVybiBjYXRlZ29yaWVzLmZpbHRlcigoYykgPT4gYy5wbHVnaW5zLmxlbmd0aCA+IDApO1xufVxuXG5mdW5jdGlvbiBzb3J0UGx1Z2lucyhwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdKSB7XG4gIGNvbnN0IHNvcnRpbmdSdWxlczogeyBbaWQ6IHN0cmluZ106IG51bWJlciB9ID0ge1xuICAgIHByb21ldGhldXM6IDEwMCxcbiAgICBncmFwaGl0ZTogOTUsXG4gICAgbG9raTogOTAsXG4gICAgbXlzcWw6IDgwLFxuICAgIGphZWdlcjogMTAwLFxuICAgIHBvc3RncmVzOiA3OSxcbiAgICBnY2xvdWQ6IC0xLFxuICB9O1xuXG4gIHBsdWdpbnMuc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGFTb3J0ID0gc29ydGluZ1J1bGVzW2EuaWRdIHx8IDA7XG4gICAgY29uc3QgYlNvcnQgPSBzb3J0aW5nUnVsZXNbYi5pZF0gfHwgMDtcbiAgICBpZiAoYVNvcnQgPiBiU29ydCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAoYVNvcnQgPCBiU29ydCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZSA/IC0xIDogMTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEVudGVycHJpc2VQaGFudG9tUGx1Z2lucygpOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdIHtcbiAgcmV0dXJuIFtcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zcGx1bmstZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU3BsdW5rJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIFNwbHVuayBsb2dzJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zcGx1bmtfbG9nb18xMjgucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1vcmFjbGUtZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnT3JhY2xlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIE9yYWNsZSBTUUwnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL29yYWNsZS5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWR5bmF0cmFjZS1kYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdEeW5hdHJhY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdWaXN1YWxpemUgYW5kIGV4cGxvcmUgRHluYXRyYWNlIGRhdGEnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2R5bmF0cmFjZS5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNlcnZpY2Vub3ctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NlcnZpY2VOb3cgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdTZXJ2aWNlTm93JyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zZXJ2aWNlbm93LnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtZGF0YWRvZy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGF0YURvZyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ0RhdGFEb2cnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2RhdGFkb2cucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1uZXdyZWxpYy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnTmV3IFJlbGljIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnTmV3IFJlbGljJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9uZXdyZWxpYy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLW1vbmdvZGItZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ01vbmdvREIgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdNb25nb0RCJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9tb25nb2RiLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc25vd2ZsYWtlLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTbm93Zmxha2UgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdTbm93Zmxha2UnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3Nub3dmbGFrZS5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXdhdmVmcm9udC1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2F2ZWZyb250IGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnV2F2ZWZyb250JyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy93YXZlZnJvbnQuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZGxvcGVzNy1hcHBkeW5hbWljcy1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQXBwRHluYW1pY3MgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdBcHBEeW5hbWljcycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvYXBwZHluYW1pY3Muc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zYXBoYW5hLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTQVAgSEFOQcKuIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU0FQIEhBTkHCricsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2FwX2hhbmEucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1ob25leWNvbWItZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0hvbmV5Y29tYiBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnSG9uZXljb21iJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9ob25leWNvbWIucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zYWxlc2ZvcmNlLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTYWxlc2ZvcmNlIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdTYWxlc2ZvcmNlJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zYWxlc2ZvcmNlLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtamlyYS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSmlyYSBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnSmlyYScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvamlyYV9sb2dvLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtZ2l0bGFiLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdHaXRMYWIgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0dpdExhYicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvZ2l0bGFiLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc3BsdW5rLW1vbml0b3JpbmctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NpZ25hbEZ4IGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdTcGx1bmsgSW5mcmFzdHJ1Y3R1cmUgTW9uaXRvcmluZycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2lnbmFsZngtbG9nby5zdmcnLFxuICAgIH0pLFxuICBdO1xufVxuXG5mdW5jdGlvbiBnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luKCk6IERhdGFTb3VyY2VQbHVnaW5NZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogJ2djbG91ZCcsXG4gICAgbmFtZTogJ0dyYWZhbmEgQ2xvdWQnLFxuICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICBtb2R1bGU6ICdwaGFudG9tJyxcbiAgICBiYXNlVXJsOiAnJyxcbiAgICBpbmZvOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ0hvc3RlZCBHcmFwaGl0ZSwgUHJvbWV0aGV1cywgYW5kIExva2knLFxuICAgICAgbG9nb3M6IHsgc21hbGw6ICdwdWJsaWMvaW1nL2dyYWZhbmFfaWNvbi5zdmcnLCBsYXJnZTogJ2FzZCcgfSxcbiAgICAgIGF1dGhvcjogeyBuYW1lOiAnR3JhZmFuYSBMYWJzJyB9LFxuICAgICAgbGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vZ3JhZmFuYS5jb20vcHJvZHVjdHMvY2xvdWQvJyxcbiAgICAgICAgICBuYW1lOiAnTGVhcm4gbW9yZScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgdXBkYXRlZDogJzIwMTktMDUtMTAnLFxuICAgICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICB9LFxuICB9O1xufVxuXG5pbnRlcmZhY2UgR2V0UGhhbnRvbVBsdWdpbk9wdGlvbnMge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltZ1VybDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRQaGFudG9tUGx1Z2luKG9wdGlvbnM6IEdldFBoYW50b21QbHVnaW5PcHRpb25zKTogRGF0YVNvdXJjZVBsdWdpbk1ldGEge1xuICByZXR1cm4ge1xuICAgIGlkOiBvcHRpb25zLmlkLFxuICAgIG5hbWU6IG9wdGlvbnMubmFtZSxcbiAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgbW9kdWxlOiAncGhhbnRvbScsXG4gICAgYmFzZVVybDogJycsXG4gICAgaW5mbzoge1xuICAgICAgZGVzY3JpcHRpb246IG9wdGlvbnMuZGVzY3JpcHRpb24sXG4gICAgICBsb2dvczogeyBzbWFsbDogb3B0aW9ucy5pbWdVcmwsIGxhcmdlOiBvcHRpb25zLmltZ1VybCB9LFxuICAgICAgYXV0aG9yOiB7IG5hbWU6ICdHcmFmYW5hIExhYnMnIH0sXG4gICAgICBsaW5rczogW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiBjb25maWcucGx1Z2luQ2F0YWxvZ1VSTCArIG9wdGlvbnMuaWQsXG4gICAgICAgICAgbmFtZTogJ0luc3RhbGwgbm93JyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzY3JlZW5zaG90czogW10sXG4gICAgICB1cGRhdGVkOiAnMjAxOS0wNS0xMCcsXG4gICAgICB2ZXJzaW9uOiAnMS4wLjAnLFxuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlU2V0dGluZ3MsIFBsdWdpblR5cGUsIFBsdWdpbkluY2x1ZGUsIE5hdk1vZGVsLCBOYXZNb2RlbEl0ZW0gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGZlYXR1cmVFbmFibGVkIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBQcm9CYWRnZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVXBncmFkZS9Qcm9CYWRnZSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgaGlnaGxpZ2h0VHJpYWwgfSBmcm9tICcuLi8uLi9hZG1pbi91dGlscyc7XG5pbXBvcnQgeyBHZW5lcmljRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJy4uL3NldHRpbmdzL1BsdWdpblNldHRpbmdzJztcblxuY29uc3QgbG9hZGluZ0RTVHlwZSA9ICdMb2FkaW5nJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTmF2TW9kZWwoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzLCBwbHVnaW46IEdlbmVyaWNEYXRhU291cmNlUGx1Z2luKTogTmF2TW9kZWxJdGVtIHtcbiAgY29uc3QgcGx1Z2luTWV0YSA9IHBsdWdpbi5tZXRhO1xuICBjb25zdCBoaWdobGlnaHRzRW5hYmxlZCA9IGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy5mZWF0dXJlSGlnaGxpZ2h0cztcbiAgY29uc3QgbmF2TW9kZWw6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBpbWc6IHBsdWdpbk1ldGEuaW5mby5sb2dvcy5sYXJnZSxcbiAgICBpZDogJ2RhdGFzb3VyY2UtJyArIGRhdGFTb3VyY2UudWlkLFxuICAgIHN1YlRpdGxlOiBgVHlwZTogJHtwbHVnaW5NZXRhLm5hbWV9YCxcbiAgICB1cmw6ICcnLFxuICAgIHRleHQ6IGRhdGFTb3VyY2UubmFtZSxcbiAgICBicmVhZGNydW1iczogW3sgdGl0bGU6ICdEYXRhIFNvdXJjZXMnLCB1cmw6ICdkYXRhc291cmNlcycgfV0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgaWNvbjogJ3NsaWRlcnMtdi1hbHQnLFxuICAgICAgICBpZDogYGRhdGFzb3VyY2Utc2V0dGluZ3MtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgICAgICB0ZXh0OiAnU2V0dGluZ3MnLFxuICAgICAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2AsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgaWYgKHBsdWdpbi5jb25maWdQYWdlcykge1xuICAgIGZvciAoY29uc3QgcGFnZSBvZiBwbHVnaW4uY29uZmlnUGFnZXMpIHtcbiAgICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgdGV4dDogcGFnZS50aXRsZSxcbiAgICAgICAgaWNvbjogcGFnZS5pY29uLFxuICAgICAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9Lz9wYWdlPSR7cGFnZS5pZH1gLFxuICAgICAgICBpZDogYGRhdGFzb3VyY2UtcGFnZS0ke3BhZ2UuaWR9YCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwbHVnaW5NZXRhLmluY2x1ZGVzICYmIGhhc0Rhc2hib2FyZHMocGx1Z2luTWV0YS5pbmNsdWRlcykgJiYgY29udGV4dFNydi5oYXNSb2xlKCdBZG1pbicpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGljb246ICdhcHBzJyxcbiAgICAgIGlkOiBgZGF0YXNvdXJjZS1kYXNoYm9hcmRzLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICAgIHRleHQ6ICdEYXNoYm9hcmRzJyxcbiAgICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vZGFzaGJvYXJkc2AsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBpc0xvYWRpbmdOYXYgPSBkYXRhU291cmNlLnR5cGUgPT09IGxvYWRpbmdEU1R5cGU7XG5cbiAgY29uc3QgcGVybWlzc2lvbnNFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLWRhdGEtc291cmNlLXBlcm1pc3Npb25zLWJhZGdlJztcbiAgY29uc3QgZHNQZXJtaXNzaW9uczogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2xvY2snLFxuICAgIGlkOiBgZGF0YXNvdXJjZS1wZXJtaXNzaW9ucy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgdGV4dDogJ1Blcm1pc3Npb25zJyxcbiAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L3Blcm1pc3Npb25zYCxcbiAgfTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgZHNQZXJtaXNzaW9ucy50YWJTdWZmaXggPSAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogcGVybWlzc2lvbnNFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnZHNwZXJtaXNzaW9ucycpKSB7XG4gICAgaWYgKGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzUGVybWlzc2lvbnNSZWFkKSkge1xuICAgICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goZHNQZXJtaXNzaW9ucyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5kc1Blcm1pc3Npb25zLFxuICAgICAgdXJsOiBkc1Blcm1pc3Npb25zLnVybCArICcvdXBncmFkZScsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBwZXJtaXNzaW9uc0V4cGVyaW1lbnRJZCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGFuYWx5dGljc0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtZGF0YS1zb3VyY2UtaW5zaWdodHMtYmFkZ2UnO1xuICBjb25zdCBhbmFseXRpY3M6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdpbmZvLWNpcmNsZScsXG4gICAgaWQ6IGBkYXRhc291cmNlLWluc2lnaHRzLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICB0ZXh0OiAnSW5zaWdodHMnLFxuICAgIHVybDogYGRhdGFzb3VyY2VzL2VkaXQvJHtkYXRhU291cmNlLnVpZH0vaW5zaWdodHNgLFxuICB9O1xuXG4gIGlmIChoaWdobGlnaHRUcmlhbCgpICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBhbmFseXRpY3MudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGFuYWx5dGljc0V4cGVyaW1lbnRJZCwgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdhbmFseXRpY3MnKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGFuYWx5dGljcyk7XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmFuYWx5dGljcyxcbiAgICAgIHVybDogYW5hbHl0aWNzLnVybCArICcvdXBncmFkZScsXG4gICAgICB0YWJTdWZmaXg6ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBhbmFseXRpY3NFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBjYWNoaW5nRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1xdWVyeS1jYWNoaW5nLWJhZGdlJztcblxuICBjb25zdCBjYWNoaW5nOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnZGF0YWJhc2UnLFxuICAgIGlkOiBgZGF0YXNvdXJjZS1jYWNoZS0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgdGV4dDogJ0NhY2hlJyxcbiAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2NhY2hlYCxcbiAgICBoaWRlRnJvbVRhYnM6ICFwbHVnaW5NZXRhLmlzQmFja2VuZCB8fCAhY29uZmlnLmNhY2hpbmcuZW5hYmxlZCxcbiAgfTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgY2FjaGluZy50YWJTdWZmaXggPSAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogY2FjaGluZ0V4cGVyaW1lbnRJZCwgZXZlbnRWYXJpYW50OiAndHJpYWwnIH0pO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVFbmFibGVkKCdjYWNoaW5nJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChjYWNoaW5nKTtcbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uY2FjaGluZyxcbiAgICAgIHVybDogY2FjaGluZy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogY2FjaGluZ0V4cGVyaW1lbnRJZCB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBuYXZNb2RlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFTb3VyY2VOYXYobWFpbjogTmF2TW9kZWxJdGVtLCBwYWdlTmFtZTogc3RyaW5nKTogTmF2TW9kZWwge1xuICBsZXQgbm9kZTogTmF2TW9kZWxJdGVtID0geyB0ZXh0OiAnJyB9O1xuXG4gIC8vIGZpbmQgYWN0aXZlIHBhZ2VcbiAgZm9yIChjb25zdCBjaGlsZCBvZiBtYWluLmNoaWxkcmVuISkge1xuICAgIGlmIChjaGlsZC5pZCEuaW5kZXhPZihwYWdlTmFtZSkgPiAwKSB7XG4gICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgbm9kZSA9IGNoaWxkO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBtYWluOiBtYWluLFxuICAgIG5vZGU6IG5vZGUhLFxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFTb3VyY2VMb2FkaW5nTmF2KHBhZ2VOYW1lOiBzdHJpbmcpOiBOYXZNb2RlbCB7XG4gIGNvbnN0IG1haW4gPSBidWlsZE5hdk1vZGVsKFxuICAgIHtcbiAgICAgIGFjY2VzczogJycsXG4gICAgICBiYXNpY0F1dGg6IGZhbHNlLFxuICAgICAgYmFzaWNBdXRoVXNlcjogJycsXG4gICAgICBiYXNpY0F1dGhQYXNzd29yZDogJycsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IGZhbHNlLFxuICAgICAgZGF0YWJhc2U6ICcnLFxuICAgICAgaWQ6IDEsXG4gICAgICB1aWQ6ICd4JyxcbiAgICAgIGlzRGVmYXVsdDogZmFsc2UsXG4gICAgICBqc29uRGF0YTogeyBhdXRoVHlwZTogJ2NyZWRlbnRpYWxzJywgZGVmYXVsdFJlZ2lvbjogJ2V1LXdlc3QtMicgfSxcbiAgICAgIG5hbWU6ICdMb2FkaW5nJyxcbiAgICAgIG9yZ0lkOiAxLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgcmVhZE9ubHk6IGZhbHNlLFxuICAgICAgdHlwZTogbG9hZGluZ0RTVHlwZSxcbiAgICAgIHR5cGVOYW1lOiBsb2FkaW5nRFNUeXBlLFxuICAgICAgdHlwZUxvZ29Vcmw6ICdwdWJsaWMvaW1nL2ljbi1kYXRhc291cmNlLnN2ZycsXG4gICAgICB1cmw6ICcnLFxuICAgICAgdXNlcjogJycsXG4gICAgICBzZWN1cmVKc29uRmllbGRzOiB7fSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgdHlwZTogUGx1Z2luVHlwZS5kYXRhc291cmNlLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgaW5mbzoge1xuICAgICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgIGxpbmtzOiBbeyBuYW1lOiAnJywgdXJsOiAnJyB9XSxcbiAgICAgICAgICBsb2dvczoge1xuICAgICAgICAgICAgbGFyZ2U6ICcnLFxuICAgICAgICAgICAgc21hbGw6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgICAgIHVwZGF0ZWQ6ICcnLFxuICAgICAgICAgIHZlcnNpb246ICcnLFxuICAgICAgICB9LFxuICAgICAgICBpbmNsdWRlczogW10sXG4gICAgICAgIG1vZHVsZTogJycsXG4gICAgICAgIGJhc2VVcmw6ICcnLFxuICAgICAgfSxcbiAgICB9IGFzIGFueVxuICApO1xuXG4gIHJldHVybiBnZXREYXRhU291cmNlTmF2KG1haW4sIHBhZ2VOYW1lKTtcbn1cblxuZnVuY3Rpb24gaGFzRGFzaGJvYXJkcyhpbmNsdWRlczogUGx1Z2luSW5jbHVkZVtdKTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgaW5jbHVkZXMuZmluZCgoaW5jbHVkZSkgPT4ge1xuICAgICAgcmV0dXJuIGluY2x1ZGUudHlwZSA9PT0gJ2Rhc2hib2FyZCc7XG4gICAgfSkgIT09IHVuZGVmaW5lZFxuICApO1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk1ldGEsIERhdGFTb3VyY2VTZXR0aW5ncywgVXJsUXVlcnlWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlc1N0YXRlIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZGF0YXNvdXJjZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXMgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLnNlYXJjaFF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS5kYXRhU291cmNlcy5maWx0ZXIoKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncykgPT4ge1xuICAgIHJldHVybiByZWdleC50ZXN0KGRhdGFTb3VyY2UubmFtZSkgfHwgcmVnZXgudGVzdChkYXRhU291cmNlLmRhdGFiYXNlKSB8fCByZWdleC50ZXN0KGRhdGFTb3VyY2UudHlwZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VQbHVnaW5zID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdGF0ZS5kYXRhU291cmNlVHlwZVNlYXJjaFF1ZXJ5LCAnaScpO1xuXG4gIHJldHVybiBzdGF0ZS5wbHVnaW5zLmZpbHRlcigodHlwZTogRGF0YVNvdXJjZVBsdWdpbk1ldGEpID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdCh0eXBlLm5hbWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlLCBkYXRhU291cmNlSWQ6IFVybFF1ZXJ5VmFsdWUpOiBEYXRhU291cmNlU2V0dGluZ3MgPT4ge1xuICBpZiAoc3RhdGUuZGF0YVNvdXJjZS51aWQgPT09IGRhdGFTb3VyY2VJZCkge1xuICAgIHJldHVybiBzdGF0ZS5kYXRhU291cmNlO1xuICB9XG4gIHJldHVybiB7fSBhcyBEYXRhU291cmNlU2V0dGluZ3M7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZU1ldGEgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUsIHR5cGU6IHN0cmluZyk6IERhdGFTb3VyY2VQbHVnaW5NZXRhID0+IHtcbiAgaWYgKHN0YXRlLmRhdGFTb3VyY2VNZXRhLmlkID09PSB0eXBlKSB7XG4gICAgcmV0dXJuIHN0YXRlLmRhdGFTb3VyY2VNZXRhO1xuICB9XG5cbiAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VQbHVnaW5NZXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzU2VhcmNoUXVlcnkgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLnNlYXJjaFF1ZXJ5O1xuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzTGF5b3V0TW9kZSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUubGF5b3V0TW9kZTtcbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlc0NvdW50ID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5kYXRhU291cmNlc0NvdW50O1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBQbHVnaW5FcnJvciB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBzb3J0UGx1Z2lucywgU29ydGVycyB9IGZyb20gJy4uL2hlbHBlcnMnO1xuaW1wb3J0IHsgQ2F0YWxvZ1BsdWdpbiwgUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUsIFBsdWdpbkxpc3REaXNwbGF5TW9kZSB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgZmV0Y2hBbGwsIGZldGNoRGV0YWlscywgZmV0Y2hSZW1vdGVQbHVnaW5zLCBpbnN0YWxsLCB1bmluc3RhbGwgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2V0RGlzcGxheU1vZGUgfSBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IHtcbiAgZmluZCxcbiAgc2VsZWN0QWxsLFxuICBzZWxlY3RCeUlkLFxuICBzZWxlY3RJc1JlcXVlc3RQZW5kaW5nLFxuICBzZWxlY3RSZXF1ZXN0RXJyb3IsXG4gIHNlbGVjdElzUmVxdWVzdE5vdEZldGNoZWQsXG4gIHNlbGVjdERpc3BsYXlNb2RlLFxuICBzZWxlY3RQbHVnaW5FcnJvcnMsXG59IGZyb20gJy4vc2VsZWN0b3JzJztcblxudHlwZSBGaWx0ZXJzID0ge1xuICBxdWVyeT86IHN0cmluZztcbiAgZmlsdGVyQnk/OiBzdHJpbmc7XG4gIGZpbHRlckJ5VHlwZT86IHN0cmluZztcbiAgc29ydEJ5PzogU29ydGVycztcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VHZXRBbGxXaXRoRmlsdGVycyA9ICh7XG4gIHF1ZXJ5ID0gJycsXG4gIGZpbHRlckJ5ID0gJ2luc3RhbGxlZCcsXG4gIGZpbHRlckJ5VHlwZSA9ICdhbGwnLFxuICBzb3J0QnkgPSBTb3J0ZXJzLm5hbWVBc2MsXG59OiBGaWx0ZXJzKSA9PiB7XG4gIHVzZUZldGNoQWxsKCk7XG5cbiAgY29uc3QgZmlsdGVyZWQgPSB1c2VTZWxlY3RvcihmaW5kKHF1ZXJ5LCBmaWx0ZXJCeSwgZmlsdGVyQnlUeXBlKSk7XG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBlcnJvciB9ID0gdXNlRmV0Y2hTdGF0dXMoKTtcbiAgY29uc3Qgc29ydGVkQW5kRmlsdGVyZWQgPSBzb3J0UGx1Z2lucyhmaWx0ZXJlZCwgc29ydEJ5KTtcblxuICByZXR1cm4ge1xuICAgIGlzTG9hZGluZyxcbiAgICBlcnJvcixcbiAgICBwbHVnaW5zOiBzb3J0ZWRBbmRGaWx0ZXJlZCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VHZXRBbGwgPSAoKTogQ2F0YWxvZ1BsdWdpbltdID0+IHtcbiAgdXNlRmV0Y2hBbGwoKTtcblxuICByZXR1cm4gdXNlU2VsZWN0b3Ioc2VsZWN0QWxsKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VHZXRTaW5nbGUgPSAoaWQ6IHN0cmluZyk6IENhdGFsb2dQbHVnaW4gfCB1bmRlZmluZWQgPT4ge1xuICB1c2VGZXRjaEFsbCgpO1xuICB1c2VGZXRjaERldGFpbHMoaWQpO1xuXG4gIHJldHVybiB1c2VTZWxlY3Rvcigoc3RhdGU6IFBsdWdpbkNhdGFsb2dTdG9yZVN0YXRlKSA9PiBzZWxlY3RCeUlkKHN0YXRlLCBpZCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUdldEVycm9ycyA9ICgpOiBQbHVnaW5FcnJvcltdID0+IHtcbiAgdXNlRmV0Y2hBbGwoKTtcblxuICByZXR1cm4gdXNlU2VsZWN0b3Ioc2VsZWN0UGx1Z2luRXJyb3JzKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VJbnN0YWxsID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIHJldHVybiAoaWQ6IHN0cmluZywgdmVyc2lvbj86IHN0cmluZywgaXNVcGRhdGluZz86IGJvb2xlYW4pID0+IGRpc3BhdGNoKGluc3RhbGwoeyBpZCwgdmVyc2lvbiwgaXNVcGRhdGluZyB9KSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVW5pbnN0YWxsID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgcmV0dXJuIChpZDogc3RyaW5nKSA9PiBkaXNwYXRjaCh1bmluc3RhbGwoaWQpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VJc1JlbW90ZVBsdWdpbnNBdmFpbGFibGUgPSAoKSA9PiB7XG4gIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdEVycm9yKGZldGNoUmVtb3RlUGx1Z2lucy50eXBlUHJlZml4KSk7XG4gIHJldHVybiBlcnJvciA9PT0gbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VGZXRjaFN0YXR1cyA9ICgpID0+IHtcbiAgY29uc3QgaXNMb2FkaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0UGVuZGluZyhmZXRjaEFsbC50eXBlUHJlZml4KSk7XG4gIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdEVycm9yKGZldGNoQWxsLnR5cGVQcmVmaXgpKTtcblxuICByZXR1cm4geyBpc0xvYWRpbmcsIGVycm9yIH07XG59O1xuXG5leHBvcnQgY29uc3QgdXNlRmV0Y2hEZXRhaWxzU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihzZWxlY3RJc1JlcXVlc3RQZW5kaW5nKGZldGNoRGV0YWlscy50eXBlUHJlZml4KSk7XG4gIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdEVycm9yKGZldGNoRGV0YWlscy50eXBlUHJlZml4KSk7XG5cbiAgcmV0dXJuIHsgaXNMb2FkaW5nLCBlcnJvciB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUluc3RhbGxTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IGlzSW5zdGFsbGluZyA9IHVzZVNlbGVjdG9yKHNlbGVjdElzUmVxdWVzdFBlbmRpbmcoaW5zdGFsbC50eXBlUHJlZml4KSk7XG4gIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdEVycm9yKGluc3RhbGwudHlwZVByZWZpeCkpO1xuXG4gIHJldHVybiB7IGlzSW5zdGFsbGluZywgZXJyb3IgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VVbmluc3RhbGxTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IGlzVW5pbnN0YWxsaW5nID0gdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0UGVuZGluZyh1bmluc3RhbGwudHlwZVByZWZpeCkpO1xuICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHNlbGVjdFJlcXVlc3RFcnJvcih1bmluc3RhbGwudHlwZVByZWZpeCkpO1xuXG4gIHJldHVybiB7IGlzVW5pbnN0YWxsaW5nLCBlcnJvciB9O1xufTtcblxuLy8gT25seSBmZXRjaGVzIGluIGNhc2UgdGhleSB3ZXJlIG5vdCBmZXRjaGVkIHlldFxuZXhwb3J0IGNvbnN0IHVzZUZldGNoQWxsID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGlzTm90RmV0Y2hlZCA9IHVzZVNlbGVjdG9yKHNlbGVjdElzUmVxdWVzdE5vdEZldGNoZWQoZmV0Y2hBbGwudHlwZVByZWZpeCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNOb3RGZXRjaGVkICYmIGRpc3BhdGNoKGZldGNoQWxsKCkpO1xuICB9LCBbXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VGZXRjaERldGFpbHMgPSAoaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHBsdWdpbiA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUpID0+IHNlbGVjdEJ5SWQoc3RhdGUsIGlkKSk7XG4gIGNvbnN0IGlzTm90RmV0Y2hpbmcgPSAhdXNlU2VsZWN0b3Ioc2VsZWN0SXNSZXF1ZXN0UGVuZGluZyhmZXRjaERldGFpbHMudHlwZVByZWZpeCkpO1xuICBjb25zdCBzaG91bGRGZXRjaCA9IGlzTm90RmV0Y2hpbmcgJiYgcGx1Z2luICYmICFwbHVnaW4uZGV0YWlscztcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNob3VsZEZldGNoICYmIGRpc3BhdGNoKGZldGNoRGV0YWlscyhpZCkpO1xuICB9LCBbcGx1Z2luXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VEaXNwbGF5TW9kZSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBkaXNwbGF5TW9kZSA9IHVzZVNlbGVjdG9yKHNlbGVjdERpc3BsYXlNb2RlKTtcblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlNb2RlLFxuICAgIHNldERpc3BsYXlNb2RlOiAodjogUGx1Z2luTGlzdERpc3BsYXlNb2RlKSA9PiBkaXNwYXRjaChzZXREaXNwbGF5TW9kZSh2KSksXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuaW1wb3J0IHsgUGx1Z2luRXJyb3IsIFBsdWdpbkVycm9yQ29kZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBSZXF1ZXN0U3RhdHVzLCBQbHVnaW5DYXRhbG9nU3RvcmVTdGF0ZSB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgcGx1Z2luc0FkYXB0ZXIgfSBmcm9tICcuL3JlZHVjZXInO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0Um9vdCA9IChzdGF0ZTogUGx1Z2luQ2F0YWxvZ1N0b3JlU3RhdGUpID0+IHN0YXRlLnBsdWdpbnM7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFJvb3QsICh7IGl0ZW1zIH0pID0+IGl0ZW1zKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdERpc3BsYXlNb2RlID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0Um9vdCwgKHsgc2V0dGluZ3MgfSkgPT4gc2V0dGluZ3MuZGlzcGxheU1vZGUpO1xuXG5leHBvcnQgY29uc3QgeyBzZWxlY3RBbGwsIHNlbGVjdEJ5SWQgfSA9IHBsdWdpbnNBZGFwdGVyLmdldFNlbGVjdG9ycyhzZWxlY3RJdGVtcyk7XG5cbmNvbnN0IHNlbGVjdEluc3RhbGxlZCA9IChmaWx0ZXJCeTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RBbGwsIChwbHVnaW5zKSA9PlxuICAgIHBsdWdpbnMuZmlsdGVyKChwbHVnaW4pID0+IChmaWx0ZXJCeSA9PT0gJ2luc3RhbGxlZCcgPyBwbHVnaW4uaXNJbnN0YWxsZWQgOiAhcGx1Z2luLmlzQ29yZSkpXG4gICk7XG5cbmNvbnN0IGZpbmRCeUluc3RhbGxBbmRUeXBlID0gKGZpbHRlckJ5OiBzdHJpbmcsIGZpbHRlckJ5VHlwZTogc3RyaW5nKSA9PlxuICBjcmVhdGVTZWxlY3RvcihzZWxlY3RJbnN0YWxsZWQoZmlsdGVyQnkpLCAocGx1Z2lucykgPT5cbiAgICBwbHVnaW5zLmZpbHRlcigocGx1Z2luKSA9PiBmaWx0ZXJCeVR5cGUgPT09ICdhbGwnIHx8IHBsdWdpbi50eXBlID09PSBmaWx0ZXJCeVR5cGUpXG4gICk7XG5cbmNvbnN0IGZpbmRCeUtleXdvcmQgPSAoc2VhcmNoQnk6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0QWxsLCAocGx1Z2lucykgPT4ge1xuICAgIGlmIChzZWFyY2hCeSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGx1Z2lucy5maWx0ZXIoKHBsdWdpbikgPT4ge1xuICAgICAgY29uc3QgZmllbGRzOiBTdHJpbmdbXSA9IFtdO1xuICAgICAgaWYgKHBsdWdpbi5uYW1lKSB7XG4gICAgICAgIGZpZWxkcy5wdXNoKHBsdWdpbi5uYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGx1Z2luLm9yZ05hbWUpIHtcbiAgICAgICAgZmllbGRzLnB1c2gocGx1Z2luLm9yZ05hbWUudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaWVsZHMuc29tZSgoZikgPT4gZi5pbmNsdWRlcyhzZWFyY2hCeS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgfSk7XG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmluZCA9IChzZWFyY2hCeTogc3RyaW5nLCBmaWx0ZXJCeTogc3RyaW5nLCBmaWx0ZXJCeVR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZmluZEJ5SW5zdGFsbEFuZFR5cGUoZmlsdGVyQnksIGZpbHRlckJ5VHlwZSksXG4gICAgZmluZEJ5S2V5d29yZChzZWFyY2hCeSksXG4gICAgKGZpbHRlcmVkUGx1Z2lucywgc2VhcmNoZWRQbHVnaW5zKSA9PiB7XG4gICAgICByZXR1cm4gc2VhcmNoQnkgPT09ICcnID8gZmlsdGVyZWRQbHVnaW5zIDogc2VhcmNoZWRQbHVnaW5zO1xuICAgIH1cbiAgKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFBsdWdpbkVycm9ycyA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdEFsbCwgKHBsdWdpbnMpID0+XG4gIHBsdWdpbnNcbiAgICA/IHBsdWdpbnNcbiAgICAgICAgLmZpbHRlcigocCkgPT4gQm9vbGVhbihwLmVycm9yKSlcbiAgICAgICAgLm1hcChcbiAgICAgICAgICAocCk6IFBsdWdpbkVycm9yID0+ICh7XG4gICAgICAgICAgICBwbHVnaW5JZDogcC5pZCxcbiAgICAgICAgICAgIGVycm9yQ29kZTogcCEuZXJyb3IgYXMgUGx1Z2luRXJyb3JDb2RlLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICA6IFtdXG4pO1xuXG4vLyBUaGUgZm9sbG93aW5nIHNlbGVjdG9ycyBhcmUgdXNlZCB0byBnZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG91dHN0YW5kaW5nIG9yIGNvbXBsZXRlZCBwbHVnaW5zLXJlbGF0ZWQgbmV0d29yayByZXF1ZXN0cy5cbmV4cG9ydCBjb25zdCBzZWxlY3RSZXF1ZXN0ID0gKGFjdGlvblR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0Um9vdCwgKHsgcmVxdWVzdHMgPSB7fSB9KSA9PiByZXF1ZXN0c1thY3Rpb25UeXBlXSk7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RJc1JlcXVlc3RQZW5kaW5nID0gKGFjdGlvblR5cGU6IHN0cmluZykgPT5cbiAgY3JlYXRlU2VsZWN0b3Ioc2VsZWN0UmVxdWVzdChhY3Rpb25UeXBlKSwgKHJlcXVlc3QpID0+IHJlcXVlc3Q/LnN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5QZW5kaW5nKTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFJlcXVlc3RFcnJvciA9IChhY3Rpb25UeXBlOiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFJlcXVlc3QoYWN0aW9uVHlwZSksIChyZXF1ZXN0KSA9PlxuICAgIHJlcXVlc3Q/LnN0YXR1cyA9PT0gUmVxdWVzdFN0YXR1cy5SZWplY3RlZCA/IHJlcXVlc3Q/LmVycm9yIDogbnVsbFxuICApO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0SXNSZXF1ZXN0Tm90RmV0Y2hlZCA9IChhY3Rpb25UeXBlOiBzdHJpbmcpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKHNlbGVjdFJlcXVlc3QoYWN0aW9uVHlwZSksIChyZXF1ZXN0KSA9PiByZXF1ZXN0ID09PSB1bmRlZmluZWQpO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFBsdWdpbkVycm9yQ29kZSwgUGx1Z2luU2lnbmF0dXJlU3RhdHVzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IEhvcml6b250YWxHcm91cCwgSW5mb0JveCwgTGlzdCwgUGx1Z2luU2lnbmF0dXJlQmFkZ2UsIHVzZVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyB1c2VHZXRFcnJvcnMsIHVzZUZldGNoU3RhdHVzIH0gZnJvbSAnLi4vYWRtaW4vc3RhdGUvaG9va3MnO1xuXG5leHBvcnQgZnVuY3Rpb24gUGx1Z2luc0Vycm9yc0luZm8oKTogUmVhY3QuUmVhY3RFbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUdldEVycm9ycygpO1xuICBjb25zdCB7IGlzTG9hZGluZyB9ID0gdXNlRmV0Y2hTdGF0dXMoKTtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIGlmIChpc0xvYWRpbmcgfHwgZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SW5mb0JveFxuICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLlBsdWdpbnNMaXN0LnNpZ25hdHVyZUVycm9yTm90aWNlfVxuICAgICAgc2V2ZXJpdHk9XCJ3YXJuaW5nXCJcbiAgICAgIHVybFRpdGxlPVwiUmVhZCBtb3JlIGFib3V0IHBsdWdpbiBzaWduaW5nXCJcbiAgICAgIHVybD1cImh0dHBzOi8vZ3JhZmFuYS5jb20vZG9jcy9ncmFmYW5hL2xhdGVzdC9wbHVnaW5zL3BsdWdpbi1zaWduYXR1cmVzL1wiXG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVW5zaWduZWQgcGx1Z2lucyB3ZXJlIGZvdW5kIGR1cmluZyBwbHVnaW4gaW5pdGlhbGl6YXRpb24uIEdyYWZhbmEgTGFicyBjYW5ub3QgZ3VhcmFudGVlIHRoZSBpbnRlZ3JpdHkgb2YgdGhlc2VcbiAgICAgICAgICBwbHVnaW5zLiBXZSByZWNvbW1lbmQgb25seSB1c2luZyBzaWduZWQgcGx1Z2lucy5cbiAgICAgICAgPC9wPlxuICAgICAgICBUaGUgZm9sbG93aW5nIHBsdWdpbnMgYXJlIGRpc2FibGVkIGFuZCBub3Qgc2hvd24gaW4gdGhlIGxpc3QgYmVsb3c6XG4gICAgICAgIDxMaXN0XG4gICAgICAgICAgaXRlbXM9e2Vycm9yc31cbiAgICAgICAgICBjbGFzc05hbWU9e2Nzc2BcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xuICAgICAgICAgIGB9XG4gICAgICAgICAgcmVuZGVySXRlbT17KGVycm9yKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzYFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZy5zbX07XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxIb3Jpem9udGFsR3JvdXAgc3BhY2luZz1cInNtXCIganVzdGlmeT1cImZsZXgtc3RhcnRcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e2Vycm9yLnBsdWdpbklkfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxQbHVnaW5TaWduYXR1cmVCYWRnZVxuICAgICAgICAgICAgICAgICAgc3RhdHVzPXttYXBQbHVnaW5FcnJvckNvZGVUb1NpZ25hdHVyZVN0YXR1cyhlcnJvci5lcnJvckNvZGUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvSW5mb0JveD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gbWFwUGx1Z2luRXJyb3JDb2RlVG9TaWduYXR1cmVTdGF0dXMoY29kZTogUGx1Z2luRXJyb3JDb2RlKSB7XG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgUGx1Z2luRXJyb3JDb2RlLmludmFsaWRTaWduYXR1cmU6XG4gICAgICByZXR1cm4gUGx1Z2luU2lnbmF0dXJlU3RhdHVzLmludmFsaWQ7XG4gICAgY2FzZSBQbHVnaW5FcnJvckNvZGUubWlzc2luZ1NpZ25hdHVyZTpcbiAgICAgIHJldHVybiBQbHVnaW5TaWduYXR1cmVTdGF0dXMubWlzc2luZztcbiAgICBjYXNlIFBsdWdpbkVycm9yQ29kZS5tb2RpZmllZFNpZ25hdHVyZTpcbiAgICAgIHJldHVybiBQbHVnaW5TaWduYXR1cmVTdGF0dXMubW9kaWZpZWQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBQbHVnaW5TaWduYXR1cmVTdGF0dXMubWlzc2luZztcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNvbmZpZyIsImlzVHJpYWwiLCJleHBpcnkiLCJsaWNlbnNlSW5mbyIsInRyaWFsRXhwaXJ5IiwiaGlnaGxpZ2h0VHJpYWwiLCJmZWF0dXJlVG9nZ2xlcyIsImZlYXR1cmVIaWdobGlnaHRzIiwiY3NzIiwiY3giLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJjb25uZWN0Iiwic2VsZWN0b3JzIiwiQ2FyZCIsIkxpbmtCdXR0b24iLCJMaXN0IiwiUGx1Z2luU2lnbmF0dXJlQmFkZ2UiLCJGaWx0ZXJJbnB1dCIsInVzZVN0eWxlczIiLCJQYWdlIiwiUGx1Z2luc0Vycm9yc0luZm8iLCJhZGREYXRhU291cmNlIiwibG9hZERhdGFTb3VyY2VQbHVnaW5zIiwic2V0RGF0YVNvdXJjZVR5cGVTZWFyY2hRdWVyeSIsImdldERhdGFTb3VyY2VQbHVnaW5zIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJuYXZNb2RlbCIsImdldE5hdk1vZGVsIiwicGx1Z2lucyIsImRhdGFTb3VyY2VzIiwic2VhcmNoUXVlcnkiLCJkYXRhU291cmNlVHlwZVNlYXJjaFF1ZXJ5IiwiY2F0ZWdvcmllcyIsImlzTG9hZGluZyIsImlzTG9hZGluZ0RhdGFTb3VyY2VzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiTmV3RGF0YVNvdXJjZVBhZ2UiLCJwbHVnaW4iLCJwcm9wcyIsInZhbHVlIiwiZXZ0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXJQbHVnaW5zIiwiaWQiLCJsZW5ndGgiLCJpdGVtIiwidG9TdHJpbmciLCJvbkRhdGFTb3VyY2VUeXBlQ2xpY2tlZCIsIm9uTGVhcm5Nb3JlQ2xpY2siLCJyZW5kZXJDYXRlZ29yaWVzIiwibWFwIiwiY2F0ZWdvcnkiLCJ0aXRsZSIsInJlbmRlciIsIm9uU2VhcmNoUXVlcnlDaGFuZ2UiLCJEYXRhU291cmNlVHlwZUNhcmQiLCJpc1BoYW50b20iLCJtb2R1bGUiLCJvbkNsaWNrIiwidW5saWNlbnNlZCIsImxlYXJuTW9yZUxpbmsiLCJpbmZvIiwibGlua3MiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJjYXJkIiwiaGVhZGluZyIsInBhZ2VzIiwiQWRkRGF0YVNvdXJjZSIsImRhdGFTb3VyY2VQbHVnaW5zVjIiLCJuYW1lIiwiZmlndXJlIiwibG9nbyIsImxvZ29zIiwic21hbGwiLCJkZXNjcmlwdGlvbiIsIm1ldGEiLCJzaWduYXR1cmUiLCJhY3Rpb25zIiwidXJsIiwidGhlbWUiLCJmb250U2l6ZSIsInYxIiwidHlwb2dyYXBoeSIsImg1IiwiZm9udFdlaWdodCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwicG9zaXRpb24iLCJtYXJnaW4iLCJzaXplIiwic20iLCJhbGlnblNlbGYiLCJvcGFjaXR5IiwiZ3JpZFRlbXBsYXRlQXJlYXMiLCJsZyIsIm1hcmdpbkxlZnQiLCJtYXhIZWlnaHQiLCJtYWluIiwiaWNvbiIsInRleHQiLCJocmVmIiwic3ViVGl0bGUiLCJub2RlIiwibGFzdFZhbHVlRnJvbSIsImxvY2F0aW9uVXRpbCIsIkRhdGFTb3VyY2VXaXRoQmFja2VuZCIsImxvY2F0aW9uU2VydmljZSIsInVwZGF0ZU5hdkluZGV4IiwiZ2V0QmFja2VuZFNydiIsImFjY2Vzc0NvbnRyb2xRdWVyeVBhcmFtIiwiZ2V0RGF0YXNvdXJjZVNydiIsImdldFBsdWdpblNldHRpbmdzIiwiaW1wb3J0RGF0YVNvdXJjZVBsdWdpbiIsImNvbnRleHRTcnYiLCJidWlsZENhdGVnb3JpZXMiLCJidWlsZE5hdk1vZGVsIiwiZGF0YVNvdXJjZUxvYWRlZCIsImRhdGFTb3VyY2VNZXRhTG9hZGVkIiwiZGF0YVNvdXJjZVBsdWdpbnNMb2FkIiwiZGF0YVNvdXJjZVBsdWdpbnNMb2FkZWQiLCJkYXRhU291cmNlc0xvYWRlZCIsImluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkIiwidGVzdERhdGFTb3VyY2VGYWlsZWQiLCJ0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nIiwidGVzdERhdGFTb3VyY2VTdWNjZWVkZWQiLCJnZXREYXRhU291cmNlIiwiZ2V0RGF0YVNvdXJjZU1ldGEiLCJpbml0RGF0YVNvdXJjZVNldHRpbmdzIiwicGFnZUlkIiwiZGVwZW5kZW5jaWVzIiwibG9hZERhdGFTb3VyY2UiLCJsb2FkRGF0YVNvdXJjZU1ldGEiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwiRXJyb3IiLCJsb2FkZWREYXRhU291cmNlIiwiZGF0YVNvdXJjZVNldHRpbmdzIiwiZGF0YVNvdXJjZSIsImRhdGFTb3VyY2VNZXRhIiwidHlwZSIsImltcG9ydGVkUGx1Z2luIiwiZXJyIiwidGVzdERhdGFTb3VyY2UiLCJkYXRhU291cmNlTmFtZSIsImRzQXBpIiwiZ2V0IiwidGVzdERhdGFzb3VyY2UiLCJ3aXRoTm9CYWNrZW5kQ2FjaGUiLCJyZXN1bHQiLCJzdGF0dXNUZXh0IiwibWVzc2FnZSIsImVyck1lc3NhZ2UiLCJkZXRhaWxzIiwiZGF0YSIsImxvYWREYXRhU291cmNlcyIsInJlc3BvbnNlIiwidWlkIiwiZ2V0RGF0YVNvdXJjZVVzaW5nVWlkT3JJZCIsInBsdWdpbkluZm8iLCJpc0JhY2tlbmQiLCJEYXRhU291cmNlQ2xhc3MiLCJwcm90b3R5cGUiLCJiYWNrZW5kIiwiYnlVaWQiLCJmZXRjaCIsIm1ldGhvZCIsInBhcmFtcyIsInNob3dFcnJvckFsZXJ0Iiwib2siLCJjb25zb2xlIiwibG9nIiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc05hTiIsIndpbmRvdyIsImxvY2F0aW9uIiwiYXNzdXJlQmFzZVVybCIsImdldFN0b3JlIiwibmV3SW5zdGFuY2UiLCJhY2Nlc3MiLCJpc0RlZmF1bHQiLCJuYW1lRXhpdHMiLCJmaW5kTmV3TmFtZSIsInBvc3QiLCJyZWxvYWQiLCJmZXRjaFVzZXJQZXJtaXNzaW9ucyIsInB1c2giLCJkYXRhc291cmNlIiwiZW5hYmxlZCIsInVwZGF0ZURhdGFTb3VyY2UiLCJwdXQiLCJkZWxldGVEYXRhU291cmNlIiwiZGVsZXRlIiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJuYW1lSGFzU3VmZml4IiwiZ2V0TmV3TmFtZSIsImluY3JlbWVudExhc3REaWdpdCIsImdldExhc3REaWdpdCIsImVuZHNXaXRoIiwic2xpY2UiLCJkaWdpdCIsIlBsdWdpblR5cGUiLCJmZWF0dXJlRW5hYmxlZCIsImNhdGVnb3J5SW5kZXgiLCJwbHVnaW5JbmRleCIsImVudGVycHJpc2VQbHVnaW5zIiwiZ2V0RW50ZXJwcmlzZVBoYW50b21QbHVnaW5zIiwiZW50ZXJwcmlzZVBsdWdpbiIsImZpbmQiLCJlbnRlcnByaXNlIiwibGluayIsImdldEdyYWZhbmFDbG91ZFBoYW50b21QbHVnaW4iLCJzb3J0UGx1Z2lucyIsImMiLCJzb3J0aW5nUnVsZXMiLCJwcm9tZXRoZXVzIiwiZ3JhcGhpdGUiLCJsb2tpIiwibXlzcWwiLCJqYWVnZXIiLCJwb3N0Z3JlcyIsImdjbG91ZCIsInNvcnQiLCJhIiwiYiIsImFTb3J0IiwiYlNvcnQiLCJnZXRQaGFudG9tUGx1Z2luIiwiaW1nVXJsIiwiYmFzZVVybCIsImxhcmdlIiwiYXV0aG9yIiwic2NyZWVuc2hvdHMiLCJ1cGRhdGVkIiwidmVyc2lvbiIsIm9wdGlvbnMiLCJwbHVnaW5DYXRhbG9nVVJMIiwiUHJvQmFkZ2UiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwibG9hZGluZ0RTVHlwZSIsInBsdWdpbk1ldGEiLCJoaWdobGlnaHRzRW5hYmxlZCIsImltZyIsImJyZWFkY3J1bWJzIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJjb25maWdQYWdlcyIsInBhZ2UiLCJpbmNsdWRlcyIsImhhc0Rhc2hib2FyZHMiLCJoYXNSb2xlIiwiaXNMb2FkaW5nTmF2IiwicGVybWlzc2lvbnNFeHBlcmltZW50SWQiLCJkc1Blcm1pc3Npb25zIiwidGFiU3VmZml4IiwiZXhwZXJpbWVudElkIiwiZXZlbnRWYXJpYW50IiwiaGFzUGVybWlzc2lvbiIsIkRhdGFTb3VyY2VzUGVybWlzc2lvbnNSZWFkIiwiYW5hbHl0aWNzRXhwZXJpbWVudElkIiwiYW5hbHl0aWNzIiwiY2FjaGluZ0V4cGVyaW1lbnRJZCIsImNhY2hpbmciLCJoaWRlRnJvbVRhYnMiLCJnZXREYXRhU291cmNlTmF2IiwicGFnZU5hbWUiLCJjaGlsZCIsImluZGV4T2YiLCJnZXREYXRhU291cmNlTG9hZGluZ05hdiIsImJhc2ljQXV0aCIsImJhc2ljQXV0aFVzZXIiLCJiYXNpY0F1dGhQYXNzd29yZCIsIndpdGhDcmVkZW50aWFscyIsImRhdGFiYXNlIiwianNvbkRhdGEiLCJhdXRoVHlwZSIsImRlZmF1bHRSZWdpb24iLCJvcmdJZCIsInBhc3N3b3JkIiwicmVhZE9ubHkiLCJ0eXBlTmFtZSIsInR5cGVMb2dvVXJsIiwidXNlciIsInNlY3VyZUpzb25GaWVsZHMiLCJpbmNsdWRlIiwidW5kZWZpbmVkIiwiZ2V0RGF0YVNvdXJjZXMiLCJyZWdleCIsIlJlZ0V4cCIsInRlc3QiLCJkYXRhU291cmNlSWQiLCJnZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5IiwiZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlIiwibGF5b3V0TW9kZSIsImdldERhdGFTb3VyY2VzQ291bnQiLCJkYXRhU291cmNlc0NvdW50IiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlNvcnRlcnMiLCJmZXRjaEFsbCIsImZldGNoRGV0YWlscyIsImZldGNoUmVtb3RlUGx1Z2lucyIsImluc3RhbGwiLCJ1bmluc3RhbGwiLCJzZXREaXNwbGF5TW9kZSIsInNlbGVjdEFsbCIsInNlbGVjdEJ5SWQiLCJzZWxlY3RJc1JlcXVlc3RQZW5kaW5nIiwic2VsZWN0UmVxdWVzdEVycm9yIiwic2VsZWN0SXNSZXF1ZXN0Tm90RmV0Y2hlZCIsInNlbGVjdERpc3BsYXlNb2RlIiwic2VsZWN0UGx1Z2luRXJyb3JzIiwidXNlR2V0QWxsV2l0aEZpbHRlcnMiLCJxdWVyeSIsImZpbHRlckJ5IiwiZmlsdGVyQnlUeXBlIiwic29ydEJ5IiwibmFtZUFzYyIsInVzZUZldGNoQWxsIiwiZmlsdGVyZWQiLCJlcnJvciIsInVzZUZldGNoU3RhdHVzIiwic29ydGVkQW5kRmlsdGVyZWQiLCJ1c2VHZXRBbGwiLCJ1c2VHZXRTaW5nbGUiLCJ1c2VGZXRjaERldGFpbHMiLCJ1c2VHZXRFcnJvcnMiLCJ1c2VJbnN0YWxsIiwiaXNVcGRhdGluZyIsInVzZVVuaW5zdGFsbCIsInVzZUlzUmVtb3RlUGx1Z2luc0F2YWlsYWJsZSIsInR5cGVQcmVmaXgiLCJ1c2VGZXRjaERldGFpbHNTdGF0dXMiLCJ1c2VJbnN0YWxsU3RhdHVzIiwiaXNJbnN0YWxsaW5nIiwidXNlVW5pbnN0YWxsU3RhdHVzIiwiaXNVbmluc3RhbGxpbmciLCJpc05vdEZldGNoZWQiLCJpc05vdEZldGNoaW5nIiwic2hvdWxkRmV0Y2giLCJ1c2VEaXNwbGF5TW9kZSIsImRpc3BsYXlNb2RlIiwidiIsImNyZWF0ZVNlbGVjdG9yIiwiUmVxdWVzdFN0YXR1cyIsInBsdWdpbnNBZGFwdGVyIiwic2VsZWN0Um9vdCIsInNlbGVjdEl0ZW1zIiwiaXRlbXMiLCJzZXR0aW5ncyIsImdldFNlbGVjdG9ycyIsInNlbGVjdEluc3RhbGxlZCIsImlzSW5zdGFsbGVkIiwiaXNDb3JlIiwiZmluZEJ5SW5zdGFsbEFuZFR5cGUiLCJmaW5kQnlLZXl3b3JkIiwic2VhcmNoQnkiLCJmaWVsZHMiLCJvcmdOYW1lIiwic29tZSIsImYiLCJmaWx0ZXJlZFBsdWdpbnMiLCJzZWFyY2hlZFBsdWdpbnMiLCJwIiwiQm9vbGVhbiIsInBsdWdpbklkIiwiZXJyb3JDb2RlIiwic2VsZWN0UmVxdWVzdCIsImFjdGlvblR5cGUiLCJyZXF1ZXN0cyIsInJlcXVlc3QiLCJzdGF0dXMiLCJQZW5kaW5nIiwiUmVqZWN0ZWQiLCJQbHVnaW5FcnJvckNvZGUiLCJQbHVnaW5TaWduYXR1cmVTdGF0dXMiLCJIb3Jpem9udGFsR3JvdXAiLCJJbmZvQm94IiwidXNlVGhlbWUiLCJlcnJvcnMiLCJQbHVnaW5zTGlzdCIsInNpZ25hdHVyZUVycm9yTm90aWNlIiwibWFwUGx1Z2luRXJyb3JDb2RlVG9TaWduYXR1cmVTdGF0dXMiLCJjb2RlIiwiaW52YWxpZFNpZ25hdHVyZSIsImludmFsaWQiLCJtaXNzaW5nU2lnbmF0dXJlIiwibWlzc2luZyIsIm1vZGlmaWVkU2lnbmF0dXJlIiwibW9kaWZpZWQiXSwic291cmNlUm9vdCI6IiJ9