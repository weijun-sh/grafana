"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DataSourceSettingsPage"],{

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

/***/ "./public/app/features/datasources/settings/BasicSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const BasicSettings = ({
  dataSourceName,
  isDefault,
  onDefaultChange,
  onNameChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "gf-form-group",
    "aria-label": "Datasource settings page basic settings",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "gf-form-inline",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "gf-form max-width-30",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
          label: "Name",
          tooltip: "The name is used when you select the data source in panels. The default data source is 'preselected in new panels.",
          grow: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
            id: "basic-settings-name",
            type: "text",
            value: dataSourceName,
            placeholder: "Name",
            onChange: event => onNameChange(event.currentTarget.value),
            required: true,
            "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.DataSource.name
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Default",
        labelWidth: 8,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineSwitch, {
          id: "basic-settings-default",
          value: isDefault,
          onChange: event => {
            onDefaultChange(event.currentTarget.checked);
          }
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BasicSettings);

/***/ }),

/***/ "./public/app/features/datasources/settings/ButtonRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const ButtonRow = ({
  canSave,
  canDelete,
  onDelete,
  onSubmit,
  onTest,
  exploreUrl
}) => {
  const canExploreDataSources = app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types___WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.DataSourcesExplore);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "gf-form-button-row",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "secondary",
      fill: "solid",
      type: "button",
      onClick: () => history.back(),
      children: "Back"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
      variant: "secondary",
      fill: "solid",
      href: exploreUrl,
      disabled: !canExploreDataSources,
      children: "Explore"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      type: "button",
      variant: "destructive",
      disabled: !canDelete,
      onClick: onDelete,
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.DataSource["delete"],
      children: "Delete"
    }), canSave && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      type: "submit",
      variant: "primary",
      disabled: !canSave,
      onClick: event => onSubmit(event),
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.DataSource.saveAndTest,
      children: "Save & test"
    }), !canSave && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
      type: "submit",
      variant: "primary",
      onClick: onTest,
      children: "Test"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonRow);

/***/ }),

/***/ "./public/app/features/datasources/settings/CloudInfoBox.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudInfoBox": () => (/* binding */ CloudInfoBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data_src_types_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_LocalStorageValueProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/LocalStorageValueProvider/index.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const LOCAL_STORAGE_KEY = 'datasources.settings.cloudInfoBox.isDismissed';
const CloudInfoBox = ({
  dataSource
}) => {
  var _dataSource$version;

  let mainDS = '';
  let extraDS = ''; // don't show for already configured data sources or provisioned data sources

  if (dataSource.readOnly || ((_dataSource$version = dataSource.version) !== null && _dataSource$version !== void 0 ? _dataSource$version : 0) > 2) {
    return null;
  } // Skip showing this info box in some editions


  if (app_core_config__WEBPACK_IMPORTED_MODULE_4__.config.buildInfo.edition !== _grafana_data_src_types_config__WEBPACK_IMPORTED_MODULE_1__.GrafanaEdition.OpenSource) {
    return null;
  }

  switch (dataSource.type) {
    case 'prometheus':
      mainDS = 'Prometheus';
      extraDS = 'Loki';
      break;

    case 'loki':
      mainDS = 'Loki';
      extraDS = 'Prometheus';
      break;

    default:
      return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(app_core_components_LocalStorageValueProvider__WEBPACK_IMPORTED_MODULE_3__.LocalStorageValueProvider, {
    storageKey: LOCAL_STORAGE_KEY,
    defaultValue: false,
    children: (isDismissed, onDismiss) => {
      if (isDismissed) {
        return null;
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        title: `Configure your ${mainDS} data source below`,
        severity: "info",
        bottomSpacing: 4,
        onRemove: () => {
          onDismiss(true);
        },
        children: ["Or skip the effort and get ", mainDS, " (and ", extraDS, ") as fully-managed, scalable, and hosted data sources from Grafana Labs with the", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
          className: "external-link",
          href: `https://grafana.com/signup/cloud/connect-account?src=grafana-oss&cnt=${dataSource.type}-settings`,
          target: "_blank",
          rel: "noreferrer",
          title: "The free plan includes 10k active metrics and 50gb storage.",
          children: "free-forever Grafana Cloud plan"
        }), "."]
      });
    }
  });
};

/***/ }),

/***/ "./public/app/features/datasources/settings/DataSourceSettingsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataSourceSettingsPage": () => (/* binding */ DataSourceSettingsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_actions_cleanUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_features_plugins_components_PluginStateInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/plugins/components/PluginStateInfo.tsx");
/* harmony import */ var app_types___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/datasources/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/datasources/state/navModel.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/datasources/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
/* harmony import */ var _BasicSettings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/datasources/settings/BasicSettings.tsx");
/* harmony import */ var _ButtonRow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/datasources/settings/ButtonRow.tsx");
/* harmony import */ var _CloudInfoBox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/datasources/settings/CloudInfoBox.tsx");
/* harmony import */ var _PluginSettings__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/datasources/settings/PluginSettings.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _label;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























function mapStateToProps(state, props) {
  const dataSourceId = props.match.params.uid;
  const params = new URLSearchParams(props.location.search);
  const dataSource = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_16__.getDataSource)(state.dataSources, dataSourceId);
  const {
    plugin,
    loadError,
    loading,
    testingStatus
  } = state.dataSourceSettings;
  const page = params.get('page');
  const nav = plugin ? (0,_state_navModel__WEBPACK_IMPORTED_MODULE_14__.getDataSourceNav)((0,_state_navModel__WEBPACK_IMPORTED_MODULE_14__.buildNavModel)(dataSource, plugin), page || 'settings') : (0,_state_navModel__WEBPACK_IMPORTED_MODULE_14__.getDataSourceLoadingNav)('settings');
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__.getNavModel)(state.navIndex, page ? `datasource-page-${page}` : `datasource-settings-${dataSourceId}`, nav);
  return {
    dataSource: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_16__.getDataSource)(state.dataSources, dataSourceId),
    dataSourceMeta: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_16__.getDataSourceMeta)(state.dataSources, dataSource.type),
    dataSourceId: dataSourceId,
    page,
    plugin,
    loadError,
    loading,
    testingStatus,
    navModel
  };
}

const mapDispatchToProps = {
  deleteDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_13__.deleteDataSource,
  loadDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_13__.loadDataSource,
  setDataSourceName: _state_reducers__WEBPACK_IMPORTED_MODULE_15__.setDataSourceName,
  updateDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_13__.updateDataSource,
  setIsDefault: _state_reducers__WEBPACK_IMPORTED_MODULE_15__.setIsDefault,
  dataSourceLoaded: _state_reducers__WEBPACK_IMPORTED_MODULE_15__.dataSourceLoaded,
  initDataSourceSettings: _state_actions__WEBPACK_IMPORTED_MODULE_13__.initDataSourceSettings,
  testDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_13__.testDataSource,
  cleanUpAction: app_core_actions_cleanUp__WEBPACK_IMPORTED_MODULE_5__.cleanUpAction
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class DataSourceSettingsPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onSubmit", async evt => {
      evt.preventDefault();
      await this.props.updateDataSource(Object.assign({}, this.props.dataSource));
      this.testDataSource();
    });

    _defineProperty(this, "onTest", async evt => {
      evt.preventDefault();
      this.testDataSource();
    });

    _defineProperty(this, "onDelete", () => {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_6__["default"].publish(new _types_events__WEBPACK_IMPORTED_MODULE_12__.ShowConfirmModalEvent({
        title: 'Delete',
        text: `Are you sure you want to delete the "${this.props.dataSource.name}" data source?`,
        yesText: 'Delete',
        icon: 'trash-alt',
        onConfirm: () => {
          this.confirmDelete();
        }
      }));
    });

    _defineProperty(this, "confirmDelete", () => {
      this.props.deleteDataSource();
    });

    _defineProperty(this, "onModelChange", dataSource => {
      this.props.dataSourceLoaded(dataSource);
    });
  }

  componentDidMount() {
    const {
      initDataSourceSettings,
      dataSourceId
    } = this.props;
    initDataSourceSettings(dataSourceId);
  }

  componentWillUnmount() {
    this.props.cleanUpAction({
      stateSelector: state => state.dataSourceSettings
    });
  }

  isReadOnly() {
    return this.props.dataSource.readOnly === true;
  }

  renderIsReadOnlyMessage() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.DataSource.readOnly,
      severity: "info",
      title: "Provisioned data source",
      children: "This data source was added by config and cannot be modified using the UI. Please contact your server admin to update this data source."
    });
  }

  renderMissingEditRightsMessage() {
    return _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      severity: "info",
      title: "Missing rights",
      children: "You are not allowed to modify this data source. Please contact your server admin to update this data source."
    }));
  }

  testDataSource() {
    const {
      dataSource,
      testDataSource
    } = this.props;
    testDataSource(dataSource.name);
  }

  get hasDataSource() {
    return this.props.dataSource.id > 0;
  }

  onNavigateToExplore() {
    const {
      dataSource
    } = this.props;
    const exploreState = JSON.stringify({
      datasource: dataSource.name,
      context: 'explore'
    });
    const url = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.urlUtil.renderUrl('/explore', {
      left: exploreState
    });
    return url;
  }

  renderLoadError() {
    const {
      loadError,
      dataSource
    } = this.props;
    const canDeleteDataSource = !this.isReadOnly() && app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermissionInMetadata(app_types___WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.DataSourcesDelete, dataSource);
    const node = {
      text: loadError,
      subTitle: 'Data Source Error',
      icon: 'exclamation-triangle'
    };
    const nav = {
      node: node,
      main: node
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__["default"], {
      navModel: nav,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__["default"].Contents, {
        isLoading: this.props.loading,
        children: [this.isReadOnly() && this.renderIsReadOnlyMessage(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: "gf-form-button-row",
          children: [canDeleteDataSource && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            type: "submit",
            variant: "destructive",
            onClick: this.onDelete,
            children: "Delete"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            variant: "secondary",
            fill: "outline",
            type: "button",
            onClick: () => history.back(),
            children: "Back"
          })]
        })]
      })
    });
  }

  renderConfigPageBody(page) {
    const {
      plugin
    } = this.props;

    if (!plugin || !plugin.configPages) {
      return null; // still loading
    }

    for (const p of plugin.configPages) {
      if (p.id === page) {
        // Investigate is any plugins using this? We should change this interface
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(p.body, {
          plugin: plugin,
          query: {}
        });
      }
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
      children: ["Page not found: ", page]
    });
  }

  renderAlertDetails() {
    var _testingStatus$detail, _testingStatus$detail2, _testingStatus$detail3;

    const {
      testingStatus
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
      children: [testingStatus === null || testingStatus === void 0 ? void 0 : (_testingStatus$detail = testingStatus.details) === null || _testingStatus$detail === void 0 ? void 0 : _testingStatus$detail.message, testingStatus !== null && testingStatus !== void 0 && (_testingStatus$detail2 = testingStatus.details) !== null && _testingStatus$detail2 !== void 0 && _testingStatus$detail2.verboseMessage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("details", {
        style: {
          whiteSpace: 'pre-wrap'
        },
        children: testingStatus === null || testingStatus === void 0 ? void 0 : (_testingStatus$detail3 = testingStatus.details) === null || _testingStatus$detail3 === void 0 ? void 0 : _testingStatus$detail3.verboseMessage
      }) : null]
    });
  }

  renderSettings() {
    const {
      dataSourceMeta,
      setDataSourceName,
      setIsDefault,
      dataSource,
      plugin,
      testingStatus
    } = this.props;
    const canWriteDataSource = app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermissionInMetadata(app_types___WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.DataSourcesWrite, dataSource);
    const canDeleteDataSource = app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermissionInMetadata(app_types___WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.DataSourcesDelete, dataSource);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("form", {
      onSubmit: this.onSubmit,
      children: [!canWriteDataSource && this.renderMissingEditRightsMessage(), this.isReadOnly() && this.renderIsReadOnlyMessage(), dataSourceMeta.state && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        className: "gf-form",
        children: [_label || (_label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("label", {
          className: "gf-form-label width-10",
          children: "Plugin state"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("label", {
          className: "gf-form-label gf-form-label--transparent",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_features_plugins_components_PluginStateInfo__WEBPACK_IMPORTED_MODULE_10__.PluginStateInfo, {
            state: dataSourceMeta.state
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_CloudInfoBox__WEBPACK_IMPORTED_MODULE_19__.CloudInfoBox, {
        dataSource: dataSource
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_BasicSettings__WEBPACK_IMPORTED_MODULE_17__["default"], {
        dataSourceName: dataSource.name,
        isDefault: dataSource.isDefault,
        onDefaultChange: state => setIsDefault(state),
        onNameChange: name => setDataSourceName(name)
      }), plugin && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_PluginSettings__WEBPACK_IMPORTED_MODULE_20__.PluginSettings, {
        plugin: plugin,
        dataSource: dataSource,
        dataSourceMeta: dataSourceMeta,
        onModelChange: this.onModelChange
      }), (testingStatus === null || testingStatus === void 0 ? void 0 : testingStatus.message) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "gf-form-group p-t-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
          severity: testingStatus.status === 'error' ? 'error' : 'success',
          title: testingStatus.message,
          "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.DataSource.alert,
          children: testingStatus.details && this.renderAlertDetails()
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ButtonRow__WEBPACK_IMPORTED_MODULE_18__["default"], {
        onSubmit: event => this.onSubmit(event),
        canSave: !this.isReadOnly() && canWriteDataSource,
        canDelete: !this.isReadOnly() && canDeleteDataSource,
        onDelete: this.onDelete,
        onTest: event => this.onTest(event),
        exploreUrl: this.onNavigateToExplore()
      })]
    });
  }

  render() {
    const {
      navModel,
      page,
      loadError,
      loading
    } = this.props;

    if (loadError) {
      return this.renderLoadError();
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__["default"].Contents, {
        isLoading: loading,
        children: this.hasDataSource ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
          children: page ? this.renderConfigPageBody(page) : this.renderSettings()
        }) : null
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(DataSourceSettingsPage));

/***/ }),

/***/ "./public/app/features/datasources/settings/PluginSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginSettings": () => (/* binding */ PluginSettings),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class PluginSettings extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "element", null);

    _defineProperty(this, "component", void 0);

    _defineProperty(this, "scopeProps", void 0);

    _defineProperty(this, "onModelChanged", dataSource => {
      this.props.onModelChange(dataSource);
    });

    this.scopeProps = {
      ctrl: {
        datasourceMeta: props.dataSourceMeta,
        current: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(props.dataSource)
      },
      onModelChanged: this.onModelChanged
    };
    this.onModelChanged = this.onModelChanged.bind(this);
  }

  componentDidMount() {
    const {
      plugin
    } = this.props;

    if (!this.element) {
      return;
    }

    if (!plugin.components.ConfigEditor) {
      // React editor is not specified, let's render angular editor
      // How to approach this better? Introduce ReactDataSourcePlugin interface and typeguard it here?
      const loader = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getAngularLoader)();
      const template = '<plugin-component type="datasource-config-ctrl" />';
      this.component = loader.load(this.element, this.scopeProps, template);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      plugin
    } = this.props;

    if (!plugin.components.ConfigEditor && this.props.dataSource !== prevProps.dataSource) {
      var _this$component;

      this.scopeProps.ctrl.current = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(this.props.dataSource);
      (_this$component = this.component) === null || _this$component === void 0 ? void 0 : _this$component.digest();
    }
  }

  componentWillUnmount() {
    if (this.component) {
      this.component.destroy();
    }
  }

  render() {
    const {
      plugin,
      dataSource
    } = this.props;

    if (!plugin) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      ref: element => this.element = element,
      children: plugin.components.ConfigEditor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(plugin.components.ConfigEditor, {
        options: dataSource,
        onOptionsChange: this.onModelChanged
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PluginSettings);

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

/***/ "./public/app/features/plugins/components/PluginStateInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginStateInfo": () => (/* binding */ PluginStateInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const PluginStateInfo = props => {
  const display = getFeatureStateInfo(props.state);

  if (!display) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Badge, {
    color: display.color,
    title: display.tooltip,
    text: display.text,
    icon: display.icon
  });
};

function getFeatureStateInfo(state) {
  switch (state) {
    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginState.deprecated:
      return {
        text: 'Deprecated',
        color: 'red',
        tooltip: `This feature is deprecated and will be removed in a future release`
      };

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginState.alpha:
      return {
        text: 'Alpha',
        color: 'blue',
        tooltip: `This feature is experimental and future updates might not be backward compatible`
      };

    case _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PluginState.beta:
      return {
        text: 'Beta',
        color: 'blue',
        tooltip: `This feature is close to complete but not fully tested`
      };

    default:
      return null;
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUwsRUFBYztBQUNaLFdBQU8sSUFBUDtBQUNEOztBQUVELHNCQUFPLHVEQUFDLDhDQUFEO0FBQU8sU0FBSyxFQUFFQSxPQUFPLENBQUNFLEtBQXRCO0FBQTZCLFNBQUssRUFBRUYsT0FBTyxDQUFDRyxPQUE1QztBQUFxRCxRQUFJLEVBQUVILE9BQU8sQ0FBQzFQLElBQW5FO0FBQXlFLFFBQUksRUFBRTBQLE9BQU8sQ0FBQ3hQO0FBQXZGLElBQVA7QUFDRCxDQVJNOztBQVVQLFNBQVN5UCxtQkFBVCxDQUE2QnZSLEtBQTdCLEVBQXFFO0FBQ25FLFVBQVFBLEtBQVI7QUFDRSxTQUFLb1IsaUVBQUw7QUFDRSxhQUFPO0FBQ0x4UCxRQUFBQSxJQUFJLEVBQUUsWUFERDtBQUVMNFAsUUFBQUEsS0FBSyxFQUFFLEtBRkY7QUFHTEMsUUFBQUEsT0FBTyxFQUFHO0FBSEwsT0FBUDs7QUFLRixTQUFLTCw0REFBTDtBQUNFLGFBQU87QUFDTHhQLFFBQUFBLElBQUksRUFBRSxPQUREO0FBRUw0UCxRQUFBQSxLQUFLLEVBQUUsTUFGRjtBQUdMQyxRQUFBQSxPQUFPLEVBQUc7QUFITCxPQUFQOztBQUtGLFNBQUtMLDJEQUFMO0FBQ0UsYUFBTztBQUNMeFAsUUFBQUEsSUFBSSxFQUFFLE1BREQ7QUFFTDRQLFFBQUFBLEtBQUssRUFBRSxNQUZGO0FBR0xDLFFBQUFBLE9BQU8sRUFBRztBQUhMLE9BQVA7O0FBS0Y7QUFDRSxhQUFPLElBQVA7QUFwQko7QUFzQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hZG1pbi91dGlscy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zZXR0aW5ncy9CYXNpY1NldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy9zZXR0aW5ncy9CdXR0b25Sb3cudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3NldHRpbmdzL0Nsb3VkSW5mb0JveC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc2V0dGluZ3MvRGF0YVNvdXJjZVNldHRpbmdzUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc2V0dGluZ3MvUGx1Z2luU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvc3RhdGUvYnVpbGRDYXRlZ29yaWVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL25hdk1vZGVsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3N0YXRlL3NlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wbHVnaW5zL2NvbXBvbmVudHMvUGx1Z2luU3RhdGVJbmZvLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lL3NyYyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RyaWFsKCkge1xuICBjb25zdCBleHBpcnkgPSBjb25maWcubGljZW5zZUluZm8/LnRyaWFsRXhwaXJ5O1xuICByZXR1cm4gISEoZXhwaXJ5ICYmIGV4cGlyeSA+IDApO1xufVxuXG5leHBvcnQgY29uc3QgaGlnaGxpZ2h0VHJpYWwgPSAoKSA9PiBpc1RyaWFsKCkgJiYgY29uZmlnLmZlYXR1cmVUb2dnbGVzLmZlYXR1cmVIaWdobGlnaHRzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVTd2l0Y2gsIElucHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgZGF0YVNvdXJjZU5hbWU6IHN0cmluZztcbiAgaXNEZWZhdWx0OiBib29sZWFuO1xuICBvbk5hbWVDaGFuZ2U6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uRGVmYXVsdENoYW5nZTogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5jb25zdCBCYXNpY1NldHRpbmdzOiBGQzxQcm9wcz4gPSAoeyBkYXRhU291cmNlTmFtZSwgaXNEZWZhdWx0LCBvbkRlZmF1bHRDaGFuZ2UsIG9uTmFtZUNoYW5nZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCIgYXJpYS1sYWJlbD1cIkRhdGFzb3VyY2Ugc2V0dGluZ3MgcGFnZSBiYXNpYyBzZXR0aW5nc1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWlubGluZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0gbWF4LXdpZHRoLTMwXCI+XG4gICAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgdG9vbHRpcD1cIlRoZSBuYW1lIGlzIHVzZWQgd2hlbiB5b3Ugc2VsZWN0IHRoZSBkYXRhIHNvdXJjZSBpbiBwYW5lbHMuIFRoZSBkZWZhdWx0IGRhdGEgc291cmNlIGlzXG4gICAgICAgICAgICAgICdwcmVzZWxlY3RlZCBpbiBuZXcgcGFuZWxzLlwiXG4gICAgICAgICAgICBncm93XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGlkPVwiYmFzaWMtc2V0dGluZ3MtbmFtZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e2RhdGFTb3VyY2VOYW1lfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbk5hbWVDaGFuZ2UoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5EYXRhU291cmNlLm5hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIkRlZmF1bHRcIiBsYWJlbFdpZHRoPXs4fT5cbiAgICAgICAgICA8SW5saW5lU3dpdGNoXG4gICAgICAgICAgICBpZD1cImJhc2ljLXNldHRpbmdzLWRlZmF1bHRcIlxuICAgICAgICAgICAgdmFsdWU9e2lzRGVmYXVsdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICBvbkRlZmF1bHRDaGFuZ2UoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzaWNTZXR0aW5ncztcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBCdXR0b24sIExpbmtCdXR0b24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5pbXBvcnQgeyBBY2Nlc3NDb250cm9sQWN0aW9uIH0gZnJvbSAnYXBwL3R5cGVzLyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBleHBsb3JlVXJsOiBzdHJpbmc7XG4gIGNhblNhdmU6IGJvb2xlYW47XG4gIGNhbkRlbGV0ZTogYm9vbGVhbjtcbiAgb25EZWxldGU6ICgpID0+IHZvaWQ7XG4gIG9uU3VibWl0OiAoZXZlbnQ6IGFueSkgPT4gdm9pZDtcbiAgb25UZXN0OiAoZXZlbnQ6IGFueSkgPT4gdm9pZDtcbn1cblxuY29uc3QgQnV0dG9uUm93OiBGQzxQcm9wcz4gPSAoeyBjYW5TYXZlLCBjYW5EZWxldGUsIG9uRGVsZXRlLCBvblN1Ym1pdCwgb25UZXN0LCBleHBsb3JlVXJsIH0pID0+IHtcbiAgY29uc3QgY2FuRXhwbG9yZURhdGFTb3VyY2VzID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uKEFjY2Vzc0NvbnRyb2xBY3Rpb24uRGF0YVNvdXJjZXNFeHBsb3JlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1idXR0b24tcm93XCI+XG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBmaWxsPVwic29saWRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGlzdG9yeS5iYWNrKCl9PlxuICAgICAgICBCYWNrXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxMaW5rQnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBmaWxsPVwic29saWRcIiBocmVmPXtleHBsb3JlVXJsfSBkaXNhYmxlZD17IWNhbkV4cGxvcmVEYXRhU291cmNlc30+XG4gICAgICAgIEV4cGxvcmVcbiAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgIGRpc2FibGVkPXshY2FuRGVsZXRlfVxuICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZX1cbiAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLnBhZ2VzLkRhdGFTb3VyY2UuZGVsZXRlfVxuICAgICAgPlxuICAgICAgICBEZWxldGVcbiAgICAgIDwvQnV0dG9uPlxuICAgICAge2NhblNhdmUgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgIGRpc2FibGVkPXshY2FuU2F2ZX1cbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IG9uU3VibWl0KGV2ZW50KX1cbiAgICAgICAgICBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuRGF0YVNvdXJjZS5zYXZlQW5kVGVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIFNhdmUgJmFtcDsgdGVzdFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgICB7IWNhblNhdmUgJiYgKFxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e29uVGVzdH0+XG4gICAgICAgICAgVGVzdFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Sb3c7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXR0aW5ncyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgR3JhZmFuYUVkaXRpb24gfSBmcm9tICdAZ3JhZmFuYS9kYXRhL3NyYy90eXBlcy9jb25maWcnO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9Mb2NhbFN0b3JhZ2VWYWx1ZVByb3ZpZGVyJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5cbmNvbnN0IExPQ0FMX1NUT1JBR0VfS0VZID0gJ2RhdGFzb3VyY2VzLnNldHRpbmdzLmNsb3VkSW5mb0JveC5pc0Rpc21pc3NlZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3M7XG59XG5cbmV4cG9ydCBjb25zdCBDbG91ZEluZm9Cb3g6IEZDPFByb3BzPiA9ICh7IGRhdGFTb3VyY2UgfSkgPT4ge1xuICBsZXQgbWFpbkRTID0gJyc7XG4gIGxldCBleHRyYURTID0gJyc7XG5cbiAgLy8gZG9uJ3Qgc2hvdyBmb3IgYWxyZWFkeSBjb25maWd1cmVkIGRhdGEgc291cmNlcyBvciBwcm92aXNpb25lZCBkYXRhIHNvdXJjZXNcbiAgaWYgKGRhdGFTb3VyY2UucmVhZE9ubHkgfHwgKGRhdGFTb3VyY2UudmVyc2lvbiA/PyAwKSA+IDIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIFNraXAgc2hvd2luZyB0aGlzIGluZm8gYm94IGluIHNvbWUgZWRpdGlvbnNcbiAgaWYgKGNvbmZpZy5idWlsZEluZm8uZWRpdGlvbiAhPT0gR3JhZmFuYUVkaXRpb24uT3BlblNvdXJjZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3dpdGNoIChkYXRhU291cmNlLnR5cGUpIHtcbiAgICBjYXNlICdwcm9tZXRoZXVzJzpcbiAgICAgIG1haW5EUyA9ICdQcm9tZXRoZXVzJztcbiAgICAgIGV4dHJhRFMgPSAnTG9raSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdsb2tpJzpcbiAgICAgIG1haW5EUyA9ICdMb2tpJztcbiAgICAgIGV4dHJhRFMgPSAnUHJvbWV0aGV1cyc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMb2NhbFN0b3JhZ2VWYWx1ZVByb3ZpZGVyPGJvb2xlYW4+IHN0b3JhZ2VLZXk9e0xPQ0FMX1NUT1JBR0VfS0VZfSBkZWZhdWx0VmFsdWU9e2ZhbHNlfT5cbiAgICAgIHsoaXNEaXNtaXNzZWQsIG9uRGlzbWlzcykgPT4ge1xuICAgICAgICBpZiAoaXNEaXNtaXNzZWQpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgdGl0bGU9e2BDb25maWd1cmUgeW91ciAke21haW5EU30gZGF0YSBzb3VyY2UgYmVsb3dgfVxuICAgICAgICAgICAgc2V2ZXJpdHk9XCJpbmZvXCJcbiAgICAgICAgICAgIGJvdHRvbVNwYWNpbmc9ezR9XG4gICAgICAgICAgICBvblJlbW92ZT17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkRpc21pc3ModHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE9yIHNraXAgdGhlIGVmZm9ydCBhbmQgZ2V0IHttYWluRFN9IChhbmQge2V4dHJhRFN9KSBhcyBmdWxseS1tYW5hZ2VkLCBzY2FsYWJsZSwgYW5kIGhvc3RlZCBkYXRhIHNvdXJjZXMgZnJvbVxuICAgICAgICAgICAgR3JhZmFuYSBMYWJzIHdpdGggdGhleycgJ31cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4dGVybmFsLWxpbmtcIlxuICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9ncmFmYW5hLmNvbS9zaWdudXAvY2xvdWQvY29ubmVjdC1hY2NvdW50P3NyYz1ncmFmYW5hLW9zcyZjbnQ9JHtkYXRhU291cmNlLnR5cGV9LXNldHRpbmdzYH1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiVGhlIGZyZWUgcGxhbiBpbmNsdWRlcyAxMGsgYWN0aXZlIG1ldHJpY3MgYW5kIDUwZ2Igc3RvcmFnZS5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBmcmVlLWZvcmV2ZXIgR3JhZmFuYSBDbG91ZCBwbGFuXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAuXG4gICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9Mb2NhbFN0b3JhZ2VWYWx1ZVByb3ZpZGVyPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VTZXR0aW5ncywgdXJsVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgY2xlYW5VcEFjdGlvbiB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMvY2xlYW5VcCc7XG5pbXBvcnQgYXBwRXZlbnRzIGZyb20gJ2FwcC9jb3JlL2FwcF9ldmVudHMnO1xuaW1wb3J0IFBhZ2UgZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9QYWdlL1BhZ2UnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcbmltcG9ydCB7IFBsdWdpblN0YXRlSW5mbyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2NvbXBvbmVudHMvUGx1Z2luU3RhdGVJbmZvJztcbmltcG9ydCB7IFN0b3JlU3RhdGUsIEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMvJztcblxuaW1wb3J0IHsgU2hvd0NvbmZpcm1Nb2RhbEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZXZlbnRzJztcbmltcG9ydCB7XG4gIGRlbGV0ZURhdGFTb3VyY2UsXG4gIGluaXREYXRhU291cmNlU2V0dGluZ3MsXG4gIGxvYWREYXRhU291cmNlLFxuICB0ZXN0RGF0YVNvdXJjZSxcbiAgdXBkYXRlRGF0YVNvdXJjZSxcbn0gZnJvbSAnLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlTG9hZGluZ05hdiwgYnVpbGROYXZNb2RlbCwgZ2V0RGF0YVNvdXJjZU5hdiB9IGZyb20gJy4uL3N0YXRlL25hdk1vZGVsJztcbmltcG9ydCB7IGRhdGFTb3VyY2VMb2FkZWQsIHNldERhdGFTb3VyY2VOYW1lLCBzZXRJc0RlZmF1bHQgfSBmcm9tICcuLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlLCBnZXREYXRhU291cmNlTWV0YSB9IGZyb20gJy4uL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmltcG9ydCBCYXNpY1NldHRpbmdzIGZyb20gJy4vQmFzaWNTZXR0aW5ncyc7XG5pbXBvcnQgQnV0dG9uUm93IGZyb20gJy4vQnV0dG9uUm93JztcbmltcG9ydCB7IENsb3VkSW5mb0JveCB9IGZyb20gJy4vQ2xvdWRJbmZvQm94JztcbmltcG9ydCB7IFBsdWdpblNldHRpbmdzIH0gZnJvbSAnLi9QbHVnaW5TZXR0aW5ncyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3duUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7IHVpZDogc3RyaW5nIH0+IHt9XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZTogU3RvcmVTdGF0ZSwgcHJvcHM6IE93blByb3BzKSB7XG4gIGNvbnN0IGRhdGFTb3VyY2VJZCA9IHByb3BzLm1hdGNoLnBhcmFtcy51aWQ7XG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocHJvcHMubG9jYXRpb24uc2VhcmNoKTtcbiAgY29uc3QgZGF0YVNvdXJjZSA9IGdldERhdGFTb3VyY2Uoc3RhdGUuZGF0YVNvdXJjZXMsIGRhdGFTb3VyY2VJZCk7XG4gIGNvbnN0IHsgcGx1Z2luLCBsb2FkRXJyb3IsIGxvYWRpbmcsIHRlc3RpbmdTdGF0dXMgfSA9IHN0YXRlLmRhdGFTb3VyY2VTZXR0aW5ncztcbiAgY29uc3QgcGFnZSA9IHBhcmFtcy5nZXQoJ3BhZ2UnKTtcblxuICBjb25zdCBuYXYgPSBwbHVnaW5cbiAgICA/IGdldERhdGFTb3VyY2VOYXYoYnVpbGROYXZNb2RlbChkYXRhU291cmNlLCBwbHVnaW4pLCBwYWdlIHx8ICdzZXR0aW5ncycpXG4gICAgOiBnZXREYXRhU291cmNlTG9hZGluZ05hdignc2V0dGluZ3MnKTtcblxuICBjb25zdCBuYXZNb2RlbCA9IGdldE5hdk1vZGVsKFxuICAgIHN0YXRlLm5hdkluZGV4LFxuICAgIHBhZ2UgPyBgZGF0YXNvdXJjZS1wYWdlLSR7cGFnZX1gIDogYGRhdGFzb3VyY2Utc2V0dGluZ3MtJHtkYXRhU291cmNlSWR9YCxcbiAgICBuYXZcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGRhdGFTb3VyY2U6IGdldERhdGFTb3VyY2Uoc3RhdGUuZGF0YVNvdXJjZXMsIGRhdGFTb3VyY2VJZCksXG4gICAgZGF0YVNvdXJjZU1ldGE6IGdldERhdGFTb3VyY2VNZXRhKHN0YXRlLmRhdGFTb3VyY2VzLCBkYXRhU291cmNlLnR5cGUpLFxuICAgIGRhdGFTb3VyY2VJZDogZGF0YVNvdXJjZUlkLFxuICAgIHBhZ2UsXG4gICAgcGx1Z2luLFxuICAgIGxvYWRFcnJvcixcbiAgICBsb2FkaW5nLFxuICAgIHRlc3RpbmdTdGF0dXMsXG4gICAgbmF2TW9kZWwsXG4gIH07XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgZGVsZXRlRGF0YVNvdXJjZSxcbiAgbG9hZERhdGFTb3VyY2UsXG4gIHNldERhdGFTb3VyY2VOYW1lLFxuICB1cGRhdGVEYXRhU291cmNlLFxuICBzZXRJc0RlZmF1bHQsXG4gIGRhdGFTb3VyY2VMb2FkZWQsXG4gIGluaXREYXRhU291cmNlU2V0dGluZ3MsXG4gIHRlc3REYXRhU291cmNlLFxuICBjbGVhblVwQWN0aW9uLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGNsYXNzIERhdGFTb3VyY2VTZXR0aW5nc1BhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgaW5pdERhdGFTb3VyY2VTZXR0aW5ncywgZGF0YVNvdXJjZUlkIH0gPSB0aGlzLnByb3BzO1xuICAgIGluaXREYXRhU291cmNlU2V0dGluZ3MoZGF0YVNvdXJjZUlkKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuY2xlYW5VcEFjdGlvbih7XG4gICAgICBzdGF0ZVNlbGVjdG9yOiAoc3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VTZXR0aW5ncyxcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2dDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGF3YWl0IHRoaXMucHJvcHMudXBkYXRlRGF0YVNvdXJjZSh7IC4uLnRoaXMucHJvcHMuZGF0YVNvdXJjZSB9KTtcblxuICAgIHRoaXMudGVzdERhdGFTb3VyY2UoKTtcbiAgfTtcblxuICBvblRlc3QgPSBhc3luYyAoZXZ0OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy50ZXN0RGF0YVNvdXJjZSgpO1xuICB9O1xuXG4gIG9uRGVsZXRlID0gKCkgPT4ge1xuICAgIGFwcEV2ZW50cy5wdWJsaXNoKFxuICAgICAgbmV3IFNob3dDb25maXJtTW9kYWxFdmVudCh7XG4gICAgICAgIHRpdGxlOiAnRGVsZXRlJyxcbiAgICAgICAgdGV4dDogYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIFwiJHt0aGlzLnByb3BzLmRhdGFTb3VyY2UubmFtZX1cIiBkYXRhIHNvdXJjZT9gLFxuICAgICAgICB5ZXNUZXh0OiAnRGVsZXRlJyxcbiAgICAgICAgaWNvbjogJ3RyYXNoLWFsdCcsXG4gICAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29uZmlybURlbGV0ZSgpO1xuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbmZpcm1EZWxldGUgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5kZWxldGVEYXRhU291cmNlKCk7XG4gIH07XG5cbiAgb25Nb2RlbENoYW5nZSA9IChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpID0+IHtcbiAgICB0aGlzLnByb3BzLmRhdGFTb3VyY2VMb2FkZWQoZGF0YVNvdXJjZSk7XG4gIH07XG5cbiAgaXNSZWFkT25seSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhU291cmNlLnJlYWRPbmx5ID09PSB0cnVlO1xuICB9XG5cbiAgcmVuZGVySXNSZWFkT25seU1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydCBhcmlhLWxhYmVsPXtzZWxlY3RvcnMucGFnZXMuRGF0YVNvdXJjZS5yZWFkT25seX0gc2V2ZXJpdHk9XCJpbmZvXCIgdGl0bGU9XCJQcm92aXNpb25lZCBkYXRhIHNvdXJjZVwiPlxuICAgICAgICBUaGlzIGRhdGEgc291cmNlIHdhcyBhZGRlZCBieSBjb25maWcgYW5kIGNhbm5vdCBiZSBtb2RpZmllZCB1c2luZyB0aGUgVUkuIFBsZWFzZSBjb250YWN0IHlvdXIgc2VydmVyIGFkbWluIHRvXG4gICAgICAgIHVwZGF0ZSB0aGlzIGRhdGEgc291cmNlLlxuICAgICAgPC9BbGVydD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyTWlzc2luZ0VkaXRSaWdodHNNZXNzYWdlKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJpbmZvXCIgdGl0bGU9XCJNaXNzaW5nIHJpZ2h0c1wiPlxuICAgICAgICBZb3UgYXJlIG5vdCBhbGxvd2VkIHRvIG1vZGlmeSB0aGlzIGRhdGEgc291cmNlLiBQbGVhc2UgY29udGFjdCB5b3VyIHNlcnZlciBhZG1pbiB0byB1cGRhdGUgdGhpcyBkYXRhIHNvdXJjZS5cbiAgICAgIDwvQWxlcnQ+XG4gICAgKTtcbiAgfVxuXG4gIHRlc3REYXRhU291cmNlKCkge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSwgdGVzdERhdGFTb3VyY2UgfSA9IHRoaXMucHJvcHM7XG4gICAgdGVzdERhdGFTb3VyY2UoZGF0YVNvdXJjZS5uYW1lKTtcbiAgfVxuXG4gIGdldCBoYXNEYXRhU291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGFTb3VyY2UuaWQgPiAwO1xuICB9XG5cbiAgb25OYXZpZ2F0ZVRvRXhwbG9yZSgpIHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZXhwbG9yZVN0YXRlID0gSlNPTi5zdHJpbmdpZnkoeyBkYXRhc291cmNlOiBkYXRhU291cmNlLm5hbWUsIGNvbnRleHQ6ICdleHBsb3JlJyB9KTtcbiAgICBjb25zdCB1cmwgPSB1cmxVdGlsLnJlbmRlclVybCgnL2V4cGxvcmUnLCB7IGxlZnQ6IGV4cGxvcmVTdGF0ZSB9KTtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgcmVuZGVyTG9hZEVycm9yKCkge1xuICAgIGNvbnN0IHsgbG9hZEVycm9yLCBkYXRhU291cmNlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNhbkRlbGV0ZURhdGFTb3VyY2UgPVxuICAgICAgIXRoaXMuaXNSZWFkT25seSgpICYmIGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc0RlbGV0ZSwgZGF0YVNvdXJjZSk7XG5cbiAgICBjb25zdCBub2RlID0ge1xuICAgICAgdGV4dDogbG9hZEVycm9yISxcbiAgICAgIHN1YlRpdGxlOiAnRGF0YSBTb3VyY2UgRXJyb3InLFxuICAgICAgaWNvbjogJ2V4Y2xhbWF0aW9uLXRyaWFuZ2xlJyxcbiAgICB9O1xuICAgIGNvbnN0IG5hdiA9IHtcbiAgICAgIG5vZGU6IG5vZGUsXG4gICAgICBtYWluOiBub2RlLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgbmF2TW9kZWw9e25hdn0+XG4gICAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17dGhpcy5wcm9wcy5sb2FkaW5nfT5cbiAgICAgICAgICB7dGhpcy5pc1JlYWRPbmx5KCkgJiYgdGhpcy5yZW5kZXJJc1JlYWRPbmx5TWVzc2FnZSgpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1idXR0b24tcm93XCI+XG4gICAgICAgICAgICB7Y2FuRGVsZXRlRGF0YVNvdXJjZSAmJiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiIG9uQ2xpY2s9e3RoaXMub25EZWxldGV9PlxuICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBmaWxsPVwib3V0bGluZVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LmJhY2soKX0+XG4gICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckNvbmZpZ1BhZ2VCb2R5KHBhZ2U6IHN0cmluZykge1xuICAgIGNvbnN0IHsgcGx1Z2luIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghcGx1Z2luIHx8ICFwbHVnaW4uY29uZmlnUGFnZXMpIHtcbiAgICAgIHJldHVybiBudWxsOyAvLyBzdGlsbCBsb2FkaW5nXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBsdWdpbi5jb25maWdQYWdlcykge1xuICAgICAgaWYgKHAuaWQgPT09IHBhZ2UpIHtcbiAgICAgICAgLy8gSW52ZXN0aWdhdGUgaXMgYW55IHBsdWdpbnMgdXNpbmcgdGhpcz8gV2Ugc2hvdWxkIGNoYW5nZSB0aGlzIGludGVyZmFjZVxuICAgICAgICByZXR1cm4gPHAuYm9keSBwbHVnaW49e3BsdWdpbn0gcXVlcnk9e3t9fSAvPjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gPGRpdj5QYWdlIG5vdCBmb3VuZDoge3BhZ2V9PC9kaXY+O1xuICB9XG5cbiAgcmVuZGVyQWxlcnREZXRhaWxzKCkge1xuICAgIGNvbnN0IHsgdGVzdGluZ1N0YXR1cyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7dGVzdGluZ1N0YXR1cz8uZGV0YWlscz8ubWVzc2FnZX1cbiAgICAgICAge3Rlc3RpbmdTdGF0dXM/LmRldGFpbHM/LnZlcmJvc2VNZXNzYWdlID8gKFxuICAgICAgICAgIDxkZXRhaWxzIHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcgfX0+e3Rlc3RpbmdTdGF0dXM/LmRldGFpbHM/LnZlcmJvc2VNZXNzYWdlfTwvZGV0YWlscz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2V0dGluZ3MoKSB7XG4gICAgY29uc3QgeyBkYXRhU291cmNlTWV0YSwgc2V0RGF0YVNvdXJjZU5hbWUsIHNldElzRGVmYXVsdCwgZGF0YVNvdXJjZSwgcGx1Z2luLCB0ZXN0aW5nU3RhdHVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNhbldyaXRlRGF0YVNvdXJjZSA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbkluTWV0YWRhdGEoQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc1dyaXRlLCBkYXRhU291cmNlKTtcbiAgICBjb25zdCBjYW5EZWxldGVEYXRhU291cmNlID0gY29udGV4dFNydi5oYXNQZXJtaXNzaW9uSW5NZXRhZGF0YShBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzRGVsZXRlLCBkYXRhU291cmNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgIHshY2FuV3JpdGVEYXRhU291cmNlICYmIHRoaXMucmVuZGVyTWlzc2luZ0VkaXRSaWdodHNNZXNzYWdlKCl9XG4gICAgICAgIHt0aGlzLmlzUmVhZE9ubHkoKSAmJiB0aGlzLnJlbmRlcklzUmVhZE9ubHlNZXNzYWdlKCl9XG4gICAgICAgIHtkYXRhU291cmNlTWV0YS5zdGF0ZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbCB3aWR0aC0xMFwiPlBsdWdpbiBzdGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbCBnZi1mb3JtLWxhYmVsLS10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICA8UGx1Z2luU3RhdGVJbmZvIHN0YXRlPXtkYXRhU291cmNlTWV0YS5zdGF0ZX0gLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPENsb3VkSW5mb0JveCBkYXRhU291cmNlPXtkYXRhU291cmNlfSAvPlxuXG4gICAgICAgIDxCYXNpY1NldHRpbmdzXG4gICAgICAgICAgZGF0YVNvdXJjZU5hbWU9e2RhdGFTb3VyY2UubmFtZX1cbiAgICAgICAgICBpc0RlZmF1bHQ9e2RhdGFTb3VyY2UuaXNEZWZhdWx0fVxuICAgICAgICAgIG9uRGVmYXVsdENoYW5nZT17KHN0YXRlKSA9PiBzZXRJc0RlZmF1bHQoc3RhdGUpfVxuICAgICAgICAgIG9uTmFtZUNoYW5nZT17KG5hbWUpID0+IHNldERhdGFTb3VyY2VOYW1lKG5hbWUpfVxuICAgICAgICAvPlxuXG4gICAgICAgIHtwbHVnaW4gJiYgKFxuICAgICAgICAgIDxQbHVnaW5TZXR0aW5nc1xuICAgICAgICAgICAgcGx1Z2luPXtwbHVnaW59XG4gICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxuICAgICAgICAgICAgZGF0YVNvdXJjZU1ldGE9e2RhdGFTb3VyY2VNZXRhfVxuICAgICAgICAgICAgb25Nb2RlbENoYW5nZT17dGhpcy5vbk1vZGVsQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAge3Rlc3RpbmdTdGF0dXM/Lm1lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cCBwLXQtMlwiPlxuICAgICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICAgIHNldmVyaXR5PXt0ZXN0aW5nU3RhdHVzLnN0YXR1cyA9PT0gJ2Vycm9yJyA/ICdlcnJvcicgOiAnc3VjY2Vzcyd9XG4gICAgICAgICAgICAgIHRpdGxlPXt0ZXN0aW5nU3RhdHVzLm1lc3NhZ2V9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9e3NlbGVjdG9ycy5wYWdlcy5EYXRhU291cmNlLmFsZXJ0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGVzdGluZ1N0YXR1cy5kZXRhaWxzICYmIHRoaXMucmVuZGVyQWxlcnREZXRhaWxzKCl9XG4gICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxCdXR0b25Sb3dcbiAgICAgICAgICBvblN1Ym1pdD17KGV2ZW50KSA9PiB0aGlzLm9uU3VibWl0KGV2ZW50KX1cbiAgICAgICAgICBjYW5TYXZlPXshdGhpcy5pc1JlYWRPbmx5KCkgJiYgY2FuV3JpdGVEYXRhU291cmNlfVxuICAgICAgICAgIGNhbkRlbGV0ZT17IXRoaXMuaXNSZWFkT25seSgpICYmIGNhbkRlbGV0ZURhdGFTb3VyY2V9XG4gICAgICAgICAgb25EZWxldGU9e3RoaXMub25EZWxldGV9XG4gICAgICAgICAgb25UZXN0PXsoZXZlbnQpID0+IHRoaXMub25UZXN0KGV2ZW50KX1cbiAgICAgICAgICBleHBsb3JlVXJsPXt0aGlzLm9uTmF2aWdhdGVUb0V4cGxvcmUoKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmF2TW9kZWwsIHBhZ2UsIGxvYWRFcnJvciwgbG9hZGluZyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChsb2FkRXJyb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckxvYWRFcnJvcigpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cyBpc0xvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICAgIHt0aGlzLmhhc0RhdGFTb3VyY2UgPyA8ZGl2PntwYWdlID8gdGhpcy5yZW5kZXJDb25maWdQYWdlQm9keShwYWdlKSA6IHRoaXMucmVuZGVyU2V0dGluZ3MoKX08L2Rpdj4gOiBudWxsfVxuICAgICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0b3IoRGF0YVNvdXJjZVNldHRpbmdzUGFnZSk7XG4iLCJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIERhdGFRdWVyeSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgRGF0YVNvdXJjZUpzb25EYXRhLFxuICBEYXRhU291cmNlUGx1Z2luLFxuICBEYXRhU291cmNlUGx1Z2luTWV0YSxcbiAgRGF0YVNvdXJjZVNldHRpbmdzLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFuZ3VsYXJDb21wb25lbnQsIGdldEFuZ3VsYXJMb2FkZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IHR5cGUgR2VuZXJpY0RhdGFTb3VyY2VQbHVnaW4gPSBEYXRhU291cmNlUGx1Z2luPERhdGFTb3VyY2VBcGk8RGF0YVF1ZXJ5LCBEYXRhU291cmNlSnNvbkRhdGE+PjtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHBsdWdpbjogR2VuZXJpY0RhdGFTb3VyY2VQbHVnaW47XG4gIGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncztcbiAgZGF0YVNvdXJjZU1ldGE6IERhdGFTb3VyY2VQbHVnaW5NZXRhO1xuICBvbk1vZGVsQ2hhbmdlOiAoZGF0YVNvdXJjZTogRGF0YVNvdXJjZVNldHRpbmdzKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgUGx1Z2luU2V0dGluZ3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIGNvbXBvbmVudD86IEFuZ3VsYXJDb21wb25lbnQ7XG4gIHNjb3BlUHJvcHM6IHtcbiAgICBjdHJsOiB7IGRhdGFzb3VyY2VNZXRhOiBEYXRhU291cmNlUGx1Z2luTWV0YTsgY3VycmVudDogRGF0YVNvdXJjZVNldHRpbmdzIH07XG4gICAgb25Nb2RlbENoYW5nZWQ6IChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpID0+IHZvaWQ7XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zY29wZVByb3BzID0ge1xuICAgICAgY3RybDogeyBkYXRhc291cmNlTWV0YTogcHJvcHMuZGF0YVNvdXJjZU1ldGEsIGN1cnJlbnQ6IGNsb25lRGVlcChwcm9wcy5kYXRhU291cmNlKSB9LFxuICAgICAgb25Nb2RlbENoYW5nZWQ6IHRoaXMub25Nb2RlbENoYW5nZWQsXG4gICAgfTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2VkID0gdGhpcy5vbk1vZGVsQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBwbHVnaW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghcGx1Z2luLmNvbXBvbmVudHMuQ29uZmlnRWRpdG9yKSB7XG4gICAgICAvLyBSZWFjdCBlZGl0b3IgaXMgbm90IHNwZWNpZmllZCwgbGV0J3MgcmVuZGVyIGFuZ3VsYXIgZWRpdG9yXG4gICAgICAvLyBIb3cgdG8gYXBwcm9hY2ggdGhpcyBiZXR0ZXI/IEludHJvZHVjZSBSZWFjdERhdGFTb3VyY2VQbHVnaW4gaW50ZXJmYWNlIGFuZCB0eXBlZ3VhcmQgaXQgaGVyZT9cbiAgICAgIGNvbnN0IGxvYWRlciA9IGdldEFuZ3VsYXJMb2FkZXIoKTtcbiAgICAgIGNvbnN0IHRlbXBsYXRlID0gJzxwbHVnaW4tY29tcG9uZW50IHR5cGU9XCJkYXRhc291cmNlLWNvbmZpZy1jdHJsXCIgLz4nO1xuXG4gICAgICB0aGlzLmNvbXBvbmVudCA9IGxvYWRlci5sb2FkKHRoaXMuZWxlbWVudCwgdGhpcy5zY29wZVByb3BzLCB0ZW1wbGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUHJvcHMpIHtcbiAgICBjb25zdCB7IHBsdWdpbiB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXBsdWdpbi5jb21wb25lbnRzLkNvbmZpZ0VkaXRvciAmJiB0aGlzLnByb3BzLmRhdGFTb3VyY2UgIT09IHByZXZQcm9wcy5kYXRhU291cmNlKSB7XG4gICAgICB0aGlzLnNjb3BlUHJvcHMuY3RybC5jdXJyZW50ID0gY2xvbmVEZWVwKHRoaXMucHJvcHMuZGF0YVNvdXJjZSk7XG5cbiAgICAgIHRoaXMuY29tcG9uZW50Py5kaWdlc3QoKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBvbk1vZGVsQ2hhbmdlZCA9IChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uTW9kZWxDaGFuZ2UoZGF0YVNvdXJjZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGx1Z2luLCBkYXRhU291cmNlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFwbHVnaW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17KGVsZW1lbnQpID0+ICh0aGlzLmVsZW1lbnQgPSBlbGVtZW50KX0+XG4gICAgICAgIHtwbHVnaW4uY29tcG9uZW50cy5Db25maWdFZGl0b3IgJiZcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KHBsdWdpbi5jb21wb25lbnRzLkNvbmZpZ0VkaXRvciwge1xuICAgICAgICAgICAgb3B0aW9uczogZGF0YVNvdXJjZSxcbiAgICAgICAgICAgIG9uT3B0aW9uc0NoYW5nZTogdGhpcy5vbk1vZGVsQ2hhbmdlZCxcbiAgICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGx1Z2luU2V0dGluZ3M7XG4iLCJpbXBvcnQgeyBsYXN0VmFsdWVGcm9tIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBEYXRhU291cmNlU2V0dGluZ3MsIGxvY2F0aW9uVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVdpdGhCYWNrZW5kLCBnZXREYXRhU291cmNlU3J2LCBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHVwZGF0ZU5hdkluZGV4IH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvYmFja2VuZF9zcnYnO1xuaW1wb3J0IHsgYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0gfSBmcm9tICdhcHAvY29yZS91dGlscy9hY2Nlc3NDb250cm9sJztcbmltcG9ydCB7IGdldERhdGFzb3VyY2VTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9kYXRhc291cmNlX3Nydic7XG5pbXBvcnQgeyBnZXRQbHVnaW5TZXR0aW5ncyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL3BsdWdpblNldHRpbmdzJztcbmltcG9ydCB7IGltcG9ydERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdhcHAvZmVhdHVyZXMvcGx1Z2lucy9wbHVnaW5fbG9hZGVyJztcbmltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5DYXRlZ29yeSwgVGh1bmtEaXNwYXRjaCwgVGh1bmtSZXN1bHQgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5cbmltcG9ydCB7IGJ1aWxkQ2F0ZWdvcmllcyB9IGZyb20gJy4vYnVpbGRDYXRlZ29yaWVzJztcbmltcG9ydCB7IGJ1aWxkTmF2TW9kZWwgfSBmcm9tICcuL25hdk1vZGVsJztcbmltcG9ydCB7XG4gIGRhdGFTb3VyY2VMb2FkZWQsXG4gIGRhdGFTb3VyY2VNZXRhTG9hZGVkLFxuICBkYXRhU291cmNlUGx1Z2luc0xvYWQsXG4gIGRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkLFxuICBkYXRhU291cmNlc0xvYWRlZCxcbiAgaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZCxcbiAgaW5pdERhdGFTb3VyY2VTZXR0aW5nc1N1Y2NlZWRlZCxcbiAgdGVzdERhdGFTb3VyY2VGYWlsZWQsXG4gIHRlc3REYXRhU291cmNlU3RhcnRpbmcsXG4gIHRlc3REYXRhU291cmNlU3VjY2VlZGVkLFxufSBmcm9tICcuL3JlZHVjZXJzJztcbmltcG9ydCB7IGdldERhdGFTb3VyY2UsIGdldERhdGFTb3VyY2VNZXRhIH0gZnJvbSAnLi9zZWxlY3RvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFTb3VyY2VUeXBlc0xvYWRlZFBheWxvYWQge1xuICBwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdO1xuICBjYXRlZ29yaWVzOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbml0RGF0YVNvdXJjZVNldHRpbmdEZXBlbmRlbmNpZXMge1xuICBsb2FkRGF0YVNvdXJjZTogdHlwZW9mIGxvYWREYXRhU291cmNlO1xuICBsb2FkRGF0YVNvdXJjZU1ldGE6IHR5cGVvZiBsb2FkRGF0YVNvdXJjZU1ldGE7XG4gIGdldERhdGFTb3VyY2U6IHR5cGVvZiBnZXREYXRhU291cmNlO1xuICBnZXREYXRhU291cmNlTWV0YTogdHlwZW9mIGdldERhdGFTb3VyY2VNZXRhO1xuICBpbXBvcnREYXRhU291cmNlUGx1Z2luOiB0eXBlb2YgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXN0RGF0YVNvdXJjZURlcGVuZGVuY2llcyB7XG4gIGdldERhdGFzb3VyY2VTcnY6IHR5cGVvZiBnZXREYXRhU291cmNlU3J2O1xuICBnZXRCYWNrZW5kU3J2OiB0eXBlb2YgZ2V0QmFja2VuZFNydjtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXREYXRhU291cmNlU2V0dGluZ3MgPSAoXG4gIHBhZ2VJZDogc3RyaW5nLFxuICBkZXBlbmRlbmNpZXM6IEluaXREYXRhU291cmNlU2V0dGluZ0RlcGVuZGVuY2llcyA9IHtcbiAgICBsb2FkRGF0YVNvdXJjZSxcbiAgICBsb2FkRGF0YVNvdXJjZU1ldGEsXG4gICAgZ2V0RGF0YVNvdXJjZSxcbiAgICBnZXREYXRhU291cmNlTWV0YSxcbiAgICBpbXBvcnREYXRhU291cmNlUGx1Z2luLFxuICB9XG4pOiBUaHVua1Jlc3VsdDx2b2lkPiA9PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgaWYgKCFwYWdlSWQpIHtcbiAgICAgIGRpc3BhdGNoKGluaXREYXRhU291cmNlU2V0dGluZ3NGYWlsZWQobmV3IEVycm9yKCdJbnZhbGlkIElEJykpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbG9hZGVkRGF0YVNvdXJjZSA9IGF3YWl0IGRpc3BhdGNoKGRlcGVuZGVuY2llcy5sb2FkRGF0YVNvdXJjZShwYWdlSWQpKTtcbiAgICAgIGF3YWl0IGRpc3BhdGNoKGRlcGVuZGVuY2llcy5sb2FkRGF0YVNvdXJjZU1ldGEobG9hZGVkRGF0YVNvdXJjZSkpO1xuXG4gICAgICAvLyBoYXZlIHdlIGFscmVhZHkgbG9hZGVkIHRoZSBwbHVnaW4gdGhlbiB3ZSBjYW4gc2tpcCB0aGUgc3RlcHMgYmVsb3c/XG4gICAgICBpZiAoZ2V0U3RhdGUoKS5kYXRhU291cmNlU2V0dGluZ3MucGx1Z2luKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YVNvdXJjZSA9IGRlcGVuZGVuY2llcy5nZXREYXRhU291cmNlKGdldFN0YXRlKCkuZGF0YVNvdXJjZXMsIHBhZ2VJZCk7XG4gICAgICBjb25zdCBkYXRhU291cmNlTWV0YSA9IGRlcGVuZGVuY2llcy5nZXREYXRhU291cmNlTWV0YShnZXRTdGF0ZSgpLmRhdGFTb3VyY2VzLCBkYXRhU291cmNlIS50eXBlKTtcbiAgICAgIGNvbnN0IGltcG9ydGVkUGx1Z2luID0gYXdhaXQgZGVwZW5kZW5jaWVzLmltcG9ydERhdGFTb3VyY2VQbHVnaW4oZGF0YVNvdXJjZU1ldGEpO1xuXG4gICAgICBkaXNwYXRjaChpbml0RGF0YVNvdXJjZVNldHRpbmdzU3VjY2VlZGVkKGltcG9ydGVkUGx1Z2luKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkaXNwYXRjaChpbml0RGF0YVNvdXJjZVNldHRpbmdzRmFpbGVkKGVycikpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0RGF0YVNvdXJjZSA9IChcbiAgZGF0YVNvdXJjZU5hbWU6IHN0cmluZyxcbiAgZGVwZW5kZW5jaWVzOiBUZXN0RGF0YVNvdXJjZURlcGVuZGVuY2llcyA9IHtcbiAgICBnZXREYXRhc291cmNlU3J2LFxuICAgIGdldEJhY2tlbmRTcnYsXG4gIH1cbik6IFRodW5rUmVzdWx0PHZvaWQ+ID0+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaDogVGh1bmtEaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCBkc0FwaSA9IGF3YWl0IGRlcGVuZGVuY2llcy5nZXREYXRhc291cmNlU3J2KCkuZ2V0KGRhdGFTb3VyY2VOYW1lKTtcblxuICAgIGlmICghZHNBcGkudGVzdERhdGFzb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZVN0YXJ0aW5nKCkpO1xuXG4gICAgZGVwZW5kZW5jaWVzLmdldEJhY2tlbmRTcnYoKS53aXRoTm9CYWNrZW5kQ2FjaGUoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZHNBcGkudGVzdERhdGFzb3VyY2UoKTtcblxuICAgICAgICBkaXNwYXRjaCh0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZChyZXN1bHQpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zdCB7IHN0YXR1c1RleHQsIG1lc3NhZ2U6IGVyck1lc3NhZ2UsIGRldGFpbHMsIGRhdGEgfSA9IGVycjtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXJyTWVzc2FnZSB8fCBkYXRhPy5tZXNzYWdlIHx8ICdIVFRQIGVycm9yICcgKyBzdGF0dXNUZXh0O1xuXG4gICAgICAgIGRpc3BhdGNoKHRlc3REYXRhU291cmNlRmFpbGVkKHsgbWVzc2FnZSwgZGV0YWlscyB9KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VzKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QmFja2VuZFNydigpLmdldCgnL2FwaS9kYXRhc291cmNlcycpO1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VzTG9hZGVkKHJlc3BvbnNlKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZSh1aWQ6IHN0cmluZyk6IFRodW5rUmVzdWx0PFByb21pc2U8RGF0YVNvdXJjZVNldHRpbmdzPj4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IGF3YWl0IGdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQodWlkKTtcblxuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VMb2FkZWQoZGF0YVNvdXJjZSkpO1xuICAgIHJldHVybiBkYXRhU291cmNlO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZERhdGFTb3VyY2VNZXRhKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGNvbnN0IHBsdWdpbkluZm8gPSAoYXdhaXQgZ2V0UGx1Z2luU2V0dGluZ3MoZGF0YVNvdXJjZS50eXBlKSkgYXMgRGF0YVNvdXJjZVBsdWdpbk1ldGE7XG4gICAgY29uc3QgcGx1Z2luID0gYXdhaXQgaW1wb3J0RGF0YVNvdXJjZVBsdWdpbihwbHVnaW5JbmZvKTtcbiAgICBjb25zdCBpc0JhY2tlbmQgPSBwbHVnaW4uRGF0YVNvdXJjZUNsYXNzLnByb3RvdHlwZSBpbnN0YW5jZW9mIERhdGFTb3VyY2VXaXRoQmFja2VuZDtcbiAgICBjb25zdCBtZXRhID0ge1xuICAgICAgLi4ucGx1Z2luSW5mbyxcbiAgICAgIGlzQmFja2VuZDogcGx1Z2luSW5mby5iYWNrZW5kIHx8IGlzQmFja2VuZCxcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZU1ldGFMb2FkZWQobWV0YSkpO1xuXG4gICAgcGx1Z2luLm1ldGEgPSBtZXRhO1xuICAgIGRpc3BhdGNoKHVwZGF0ZU5hdkluZGV4KGJ1aWxkTmF2TW9kZWwoZGF0YVNvdXJjZSwgcGx1Z2luKSkpO1xuICB9O1xufVxuXG4vKipcbiAqIEdldCBkYXRhIHNvdXJjZSBieSB1aWQgb3IgaWQsIGlmIG9sZCBpZCBkZXRlY3RlZCBoYW5kbGVzIHJlZGlyZWN0XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREYXRhU291cmNlVXNpbmdVaWRPcklkKHVpZDogc3RyaW5nIHwgbnVtYmVyKTogUHJvbWlzZTxEYXRhU291cmNlU2V0dGluZ3M+IHtcbiAgLy8gVHJ5IGZpcnN0IHdpdGggdWlkIGFwaVxuICB0cnkge1xuICAgIGNvbnN0IGJ5VWlkID0gYXdhaXQgbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKS5mZXRjaDxEYXRhU291cmNlU2V0dGluZ3M+KHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgdXJsOiBgL2FwaS9kYXRhc291cmNlcy91aWQvJHt1aWR9YCxcbiAgICAgICAgcGFyYW1zOiBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpLFxuICAgICAgICBzaG93RXJyb3JBbGVydDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAoYnlVaWQub2spIHtcbiAgICAgIHJldHVybiBieVVpZC5kYXRhO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBsb29rdXAgZGF0YSBzb3VyY2UgYnkgdWlkJywgZXJyKTtcbiAgfVxuXG4gIC8vIHRyeSBsb29rdXAgYnkgb2xkIGRiIGlkXG4gIGNvbnN0IGlkID0gdHlwZW9mIHVpZCA9PT0gJ3N0cmluZycgPyBwYXJzZUludCh1aWQsIDEwKSA6IHVpZDtcbiAgaWYgKCFOdW1iZXIuaXNOYU4oaWQpKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpLmZldGNoPERhdGFTb3VyY2VTZXR0aW5ncz4oe1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB1cmw6IGAvYXBpL2RhdGFzb3VyY2VzLyR7aWR9YCxcbiAgICAgICAgcGFyYW1zOiBhY2Nlc3NDb250cm9sUXVlcnlQYXJhbSgpLFxuICAgICAgICBzaG93RXJyb3JBbGVydDogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBJZiB0aGUgdWlkIGlzIGEgbnVtYmVyLCB0aGVuIHRoaXMgaXMgYSByZWZyZXNoIG9uIG9uZSBvZiB0aGUgc2V0dGluZ3MgdGFic1xuICAgIC8vIGFuZCB3ZSBjYW4gcmV0dXJuIHRoZSByZXNwb25zZSBkYXRhXG4gICAgaWYgKHJlc3BvbnNlLm9rICYmIHR5cGVvZiB1aWQgPT09ICdudW1iZXInICYmIHJlc3BvbnNlLmRhdGEuaWQgPT09IHVpZCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgLy8gTm90IGlkZWFsIHRvIGRvIGEgZnVsbCBwYWdlIHJlbG9hZCBoZXJlIGJ1dCBzbyB0cmlja3kgdG8gaGFuZGxlIHRoaXNcbiAgICAvLyBvdGhlcndpc2UgV2UgY2FuIHVwZGF0ZSB0aGUgbG9jYXRpb24gdXNpbmcgcmVhY3Qgcm91dGVyLCBidXQgbmVlZCB0b1xuICAgIC8vIGZ1bGx5IHJlbG9hZCB0aGUgcm91dGUgYXMgdGhlIG5hdiBtb2RlbCBwYWdlIGluZGV4IGlzIG5vdCBtYXRjaGluZyB3aXRoXG4gICAgLy8gdGhlIHVybCBpbiB0aGF0IGNhc2UuIEFuZCByZWFjdCByb3V0ZXIgaGFzIG5vIHdheSB0byB1bm1vdW50IHJlbW91bnQgYVxuICAgIC8vIHJvdXRlXG4gICAgaWYgKHJlc3BvbnNlLm9rICYmIHJlc3BvbnNlLmRhdGEuaWQudG9TdHJpbmcoKSA9PT0gdWlkKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uVXRpbC5hc3N1cmVCYXNlVXJsKGAvZGF0YXNvdXJjZXMvZWRpdC8ke3Jlc3BvbnNlLmRhdGEudWlkfWApO1xuICAgICAgcmV0dXJuIHt9IGFzIERhdGFTb3VyY2VTZXR0aW5nczsgLy8gYXZvaWRzIGZsYXNoaW5nIGFuIGVycm9yXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGRhdGEgc291cmNlJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXRhU291cmNlKHBsdWdpbjogRGF0YVNvdXJjZVBsdWdpbk1ldGEpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0b3JlKSA9PiB7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZERhdGFTb3VyY2VzKCkpO1xuXG4gICAgY29uc3QgZGF0YVNvdXJjZXMgPSBnZXRTdG9yZSgpLmRhdGFTb3VyY2VzLmRhdGFTb3VyY2VzO1xuXG4gICAgY29uc3QgbmV3SW5zdGFuY2UgPSB7XG4gICAgICBuYW1lOiBwbHVnaW4ubmFtZSxcbiAgICAgIHR5cGU6IHBsdWdpbi5pZCxcbiAgICAgIGFjY2VzczogJ3Byb3h5JyxcbiAgICAgIGlzRGVmYXVsdDogZGF0YVNvdXJjZXMubGVuZ3RoID09PSAwLFxuICAgIH07XG5cbiAgICBpZiAobmFtZUV4aXRzKGRhdGFTb3VyY2VzLCBuZXdJbnN0YW5jZS5uYW1lKSkge1xuICAgICAgbmV3SW5zdGFuY2UubmFtZSA9IGZpbmROZXdOYW1lKGRhdGFTb3VyY2VzLCBuZXdJbnN0YW5jZS5uYW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdCgnL2FwaS9kYXRhc291cmNlcycsIG5ld0luc3RhbmNlKTtcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG5cbiAgICBhd2FpdCBjb250ZXh0U3J2LmZldGNoVXNlclBlcm1pc3Npb25zKCk7XG5cbiAgICBsb2NhdGlvblNlcnZpY2UucHVzaChgL2RhdGFzb3VyY2VzL2VkaXQvJHtyZXN1bHQuZGF0YXNvdXJjZS51aWR9YCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YVNvdXJjZVBsdWdpbnMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goZGF0YVNvdXJjZVBsdWdpbnNMb2FkKCkpO1xuICAgIGNvbnN0IHBsdWdpbnMgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL3BsdWdpbnMnLCB7IGVuYWJsZWQ6IDEsIHR5cGU6ICdkYXRhc291cmNlJyB9KTtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gYnVpbGRDYXRlZ29yaWVzKHBsdWdpbnMpO1xuICAgIGRpc3BhdGNoKGRhdGFTb3VyY2VQbHVnaW5zTG9hZGVkKHsgcGx1Z2lucywgY2F0ZWdvcmllcyB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVEYXRhU291cmNlKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvZGF0YXNvdXJjZXMvJHtkYXRhU291cmNlLmlkfWAsIGRhdGFTb3VyY2UpOyAvLyBieSBVSUQgbm90IHlldCBzdXBwb3J0ZWRcbiAgICBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkucmVsb2FkKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGxvYWREYXRhU291cmNlKGRhdGFTb3VyY2UudWlkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVEYXRhU291cmNlKCk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RvcmUpID0+IHtcbiAgICBjb25zdCBkYXRhU291cmNlID0gZ2V0U3RvcmUoKS5kYXRhU291cmNlcy5kYXRhU291cmNlO1xuXG4gICAgYXdhaXQgZ2V0QmFja2VuZFNydigpLmRlbGV0ZShgL2FwaS9kYXRhc291cmNlcy8ke2RhdGFTb3VyY2UuaWR9YCk7XG4gICAgYXdhaXQgZ2V0RGF0YXNvdXJjZVNydigpLnJlbG9hZCgpO1xuXG4gICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9kYXRhc291cmNlcycpO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgSXRlbVdpdGhOYW1lIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmFtZUV4aXRzKGRhdGFTb3VyY2VzOiBJdGVtV2l0aE5hbWVbXSwgbmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiAoXG4gICAgZGF0YVNvdXJjZXMuZmlsdGVyKChkYXRhU291cmNlKSA9PiB7XG4gICAgICByZXR1cm4gZGF0YVNvdXJjZS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9KS5sZW5ndGggPiAwXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTmV3TmFtZShkYXRhU291cmNlczogSXRlbVdpdGhOYW1lW10sIG5hbWU6IHN0cmluZykge1xuICAvLyBOZWVkIHRvIGxvb3AgdGhyb3VnaCBjdXJyZW50IGRhdGEgc291cmNlcyB0byBtYWtlIHN1cmVcbiAgLy8gdGhlIG5hbWUgZG9lc24ndCBleGlzdFxuICB3aGlsZSAobmFtZUV4aXRzKGRhdGFTb3VyY2VzLCBuYW1lKSkge1xuICAgIC8vIElmIHRoZXJlJ3MgYSBkdXBsaWNhdGUgbmFtZSB0aGF0IGRvZXNuJ3QgZW5kIHdpdGggJy14J1xuICAgIC8vIHdlIGNhbiBhZGQgLTEgdG8gdGhlIG5hbWUgYW5kIGJlIGRvbmUuXG4gICAgaWYgKCFuYW1lSGFzU3VmZml4KG5hbWUpKSB7XG4gICAgICBuYW1lID0gYCR7bmFtZX0tMWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIHRoZXJlJ3MgYSBkdXBsaWNhdGUgbmFtZSB0aGF0IGVuZHMgd2l0aCAnLXgnXG4gICAgICAvLyB3ZSBjYW4gdHJ5IHRvIGluY3JlbWVudCB0aGUgbGFzdCBkaWdpdCB1bnRpbCB0aGUgbmFtZSBpcyB1bmlxdWVcblxuICAgICAgLy8gcmVtb3ZlIHRoZSAneCcgcGFydCBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBuZXcgbnVtYmVyXG4gICAgICBuYW1lID0gYCR7Z2V0TmV3TmFtZShuYW1lKX0ke2luY3JlbWVudExhc3REaWdpdChnZXRMYXN0RGlnaXQobmFtZSkpfWA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIG5hbWVIYXNTdWZmaXgobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLmVuZHNXaXRoKCctJywgbmFtZS5sZW5ndGggLSAxKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdERpZ2l0KG5hbWU6IHN0cmluZykge1xuICByZXR1cm4gcGFyc2VJbnQobmFtZS5zbGljZSgtMSksIDEwKTtcbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50TGFzdERpZ2l0KGRpZ2l0OiBudW1iZXIpIHtcbiAgcmV0dXJuIGlzTmFOKGRpZ2l0KSA/IDEgOiBkaWdpdCArIDE7XG59XG5cbmZ1bmN0aW9uIGdldE5ld05hbWUobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBuYW1lLnNsaWNlKDAsIG5hbWUubGVuZ3RoIC0gMSk7XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luTWV0YSwgUGx1Z2luVHlwZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnLCBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ2F0ZWdvcmllcyhwbHVnaW5zOiBEYXRhU291cmNlUGx1Z2luTWV0YVtdKTogRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5W10ge1xuICBjb25zdCBjYXRlZ29yaWVzOiBEYXRhU291cmNlUGx1Z2luQ2F0ZWdvcnlbXSA9IFtcbiAgICB7IGlkOiAndHNkYicsIHRpdGxlOiAnVGltZSBzZXJpZXMgZGF0YWJhc2VzJywgcGx1Z2luczogW10gfSxcbiAgICB7IGlkOiAnbG9nZ2luZycsIHRpdGxlOiAnTG9nZ2luZyAmIGRvY3VtZW50IGRhdGFiYXNlcycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ3RyYWNpbmcnLCB0aXRsZTogJ0Rpc3RyaWJ1dGVkIHRyYWNpbmcnLCBwbHVnaW5zOiBbXSB9LFxuICAgIHsgaWQ6ICdzcWwnLCB0aXRsZTogJ1NRTCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2Nsb3VkJywgdGl0bGU6ICdDbG91ZCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2VudGVycHJpc2UnLCB0aXRsZTogJ0VudGVycHJpc2UgcGx1Z2lucycsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ2lvdCcsIHRpdGxlOiAnSW5kdXN0cmlhbCAmIElvVCcsIHBsdWdpbnM6IFtdIH0sXG4gICAgeyBpZDogJ290aGVyJywgdGl0bGU6ICdPdGhlcnMnLCBwbHVnaW5zOiBbXSB9LFxuICBdLmZpbHRlcigoaXRlbSkgPT4gaXRlbSk7XG5cbiAgY29uc3QgY2F0ZWdvcnlJbmRleDogUmVjb3JkPHN0cmluZywgRGF0YVNvdXJjZVBsdWdpbkNhdGVnb3J5PiA9IHt9O1xuICBjb25zdCBwbHVnaW5JbmRleDogUmVjb3JkPHN0cmluZywgRGF0YVNvdXJjZVBsdWdpbk1ldGE+ID0ge307XG4gIGNvbnN0IGVudGVycHJpc2VQbHVnaW5zID0gZ2V0RW50ZXJwcmlzZVBoYW50b21QbHVnaW5zKCk7XG5cbiAgLy8gYnVpbGQgaW5kaWNlc1xuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBjYXRlZ29yeUluZGV4W2NhdGVnb3J5LmlkXSA9IGNhdGVnb3J5O1xuICB9XG5cbiAgZm9yIChjb25zdCBwbHVnaW4gb2YgcGx1Z2lucykge1xuICAgIGNvbnN0IGVudGVycHJpc2VQbHVnaW4gPSBlbnRlcnByaXNlUGx1Z2lucy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwbHVnaW4uaWQpO1xuICAgIC8vIEZvcmNlIGNhdGVnb3J5IGZvciBlbnRlcnByaXNlIHBsdWdpbnNcbiAgICBpZiAocGx1Z2luLmVudGVycHJpc2UgfHwgZW50ZXJwcmlzZVBsdWdpbikge1xuICAgICAgcGx1Z2luLmNhdGVnb3J5ID0gJ2VudGVycHJpc2UnO1xuICAgICAgcGx1Z2luLnVubGljZW5zZWQgPSAhZmVhdHVyZUVuYWJsZWQoJ2VudGVycHJpc2UucGx1Z2lucycpO1xuICAgICAgcGx1Z2luLmluZm8ubGlua3MgPSBlbnRlcnByaXNlUGx1Z2luPy5pbmZvPy5saW5rcyB8fCBwbHVnaW4uaW5mby5saW5rcztcbiAgICB9XG5cbiAgICAvLyBGaXggbGluayBuYW1lXG4gICAgaWYgKHBsdWdpbi5pbmZvLmxpbmtzKSB7XG4gICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgcGx1Z2luLmluZm8ubGlua3MpIHtcbiAgICAgICAgbGluay5uYW1lID0gJ0xlYXJuIG1vcmUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwbHVnaW4uY2F0ZWdvcnkpIHx8IGNhdGVnb3J5SW5kZXhbJ290aGVyJ107XG4gICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgLy8gYWRkIHRvIHBsdWdpbiBpbmRleFxuICAgIHBsdWdpbkluZGV4W3BsdWdpbi5pZF0gPSBwbHVnaW47XG4gIH1cblxuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAvLyBhZGQgcGhhbnRvbSBwbHVnaW5cbiAgICBpZiAoY2F0ZWdvcnkuaWQgPT09ICdjbG91ZCcpIHtcbiAgICAgIGNhdGVnb3J5LnBsdWdpbnMucHVzaChnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luKCkpO1xuICAgIH1cblxuICAgIC8vIGFkZCBwaGFudG9tIHBsdWdpbnNcbiAgICBpZiAoY2F0ZWdvcnkuaWQgPT09ICdlbnRlcnByaXNlJykge1xuICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgZW50ZXJwcmlzZVBsdWdpbnMpIHtcbiAgICAgICAgaWYgKCFwbHVnaW5JbmRleFtwbHVnaW4uaWRdKSB7XG4gICAgICAgICAgY2F0ZWdvcnkucGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0UGx1Z2lucyhjYXRlZ29yeS5wbHVnaW5zKTtcbiAgfVxuXG4gIC8vIE9ubHkgc2hvdyBjYXRlZ29yaWVzIHdpdGggcGx1Z2luc1xuICByZXR1cm4gY2F0ZWdvcmllcy5maWx0ZXIoKGMpID0+IGMucGx1Z2lucy5sZW5ndGggPiAwKTtcbn1cblxuZnVuY3Rpb24gc29ydFBsdWdpbnMocGx1Z2luczogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSkge1xuICBjb25zdCBzb3J0aW5nUnVsZXM6IHsgW2lkOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICBwcm9tZXRoZXVzOiAxMDAsXG4gICAgZ3JhcGhpdGU6IDk1LFxuICAgIGxva2k6IDkwLFxuICAgIG15c3FsOiA4MCxcbiAgICBqYWVnZXI6IDEwMCxcbiAgICBwb3N0Z3JlczogNzksXG4gICAgZ2Nsb3VkOiAtMSxcbiAgfTtcblxuICBwbHVnaW5zLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBhU29ydCA9IHNvcnRpbmdSdWxlc1thLmlkXSB8fCAwO1xuICAgIGNvbnN0IGJTb3J0ID0gc29ydGluZ1J1bGVzW2IuaWRdIHx8IDA7XG4gICAgaWYgKGFTb3J0ID4gYlNvcnQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKGFTb3J0IDwgYlNvcnQpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiBhLm5hbWUgPiBiLm5hbWUgPyAtMSA6IDE7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRFbnRlcnByaXNlUGhhbnRvbVBsdWdpbnMoKTogRGF0YVNvdXJjZVBsdWdpbk1ldGFbXSB7XG4gIHJldHVybiBbXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc3BsdW5rLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NwbHVuaycsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBTcGx1bmsgbG9ncycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc3BsdW5rX2xvZ29fMTI4LnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtb3JhY2xlLWRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ09yYWNsZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Zpc3VhbGl6ZSBhbmQgZXhwbG9yZSBPcmFjbGUgU1FMJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9vcmFjbGUucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1keW5hdHJhY2UtZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnRHluYXRyYWNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVmlzdWFsaXplIGFuZCBleHBsb3JlIER5bmF0cmFjZSBkYXRhJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9keW5hdHJhY2UucG5nJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1zZXJ2aWNlbm93LWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTZXJ2aWNlTm93IGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU2VydmljZU5vdycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2VydmljZW5vdy5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWRhdGFkb2ctZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0RhdGFEb2cgaW50ZWdyYXRpb24gYW5kIGRhdGEgc291cmNlJyxcbiAgICAgIG5hbWU6ICdEYXRhRG9nJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9kYXRhZG9nLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtbmV3cmVsaWMtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ05ldyBSZWxpYyBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ05ldyBSZWxpYycsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvbmV3cmVsaWMuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS1tb25nb2RiLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdNb25nb0RCIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnTW9uZ29EQicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvbW9uZ29kYi5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNub3dmbGFrZS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU25vd2ZsYWtlIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnU25vd2ZsYWtlJyxcbiAgICAgIGltZ1VybDogJ3B1YmxpYy9pbWcvcGx1Z2lucy9zbm93Zmxha2Uuc3ZnJyxcbiAgICB9KSxcbiAgICBnZXRQaGFudG9tUGx1Z2luKHtcbiAgICAgIGlkOiAnZ3JhZmFuYS13YXZlZnJvbnQtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1dhdmVmcm9udCBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1dhdmVmcm9udCcsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvd2F2ZWZyb250LnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2Rsb3BlczctYXBwZHluYW1pY3MtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FwcER5bmFtaWNzIGludGVncmF0aW9uIGFuZCBkYXRhIHNvdXJjZScsXG4gICAgICBuYW1lOiAnQXBwRHluYW1pY3MnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2FwcGR5bmFtaWNzLnN2ZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2FwaGFuYS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU0FQIEhBTkHCriBpbnRlZ3JhdGlvbiBhbmQgZGF0YSBzb3VyY2UnLFxuICAgICAgbmFtZTogJ1NBUCBIQU5Bwq4nLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NhcF9oYW5hLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtaG9uZXljb21iLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdIb25leWNvbWIgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0hvbmV5Y29tYicsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvaG9uZXljb21iLnBuZycsXG4gICAgfSksXG4gICAgZ2V0UGhhbnRvbVBsdWdpbih7XG4gICAgICBpZDogJ2dyYWZhbmEtc2FsZXNmb3JjZS1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2FsZXNmb3JjZSBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU2FsZXNmb3JjZScsXG4gICAgICBpbWdVcmw6ICdwdWJsaWMvaW1nL3BsdWdpbnMvc2FsZXNmb3JjZS5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWppcmEtZGF0YXNvdXJjZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ppcmEgaW50ZWdyYXRpb24gYW5kIGRhdGFzb3VyY2UnLFxuICAgICAgbmFtZTogJ0ppcmEnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2ppcmFfbG9nby5wbmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLWdpdGxhYi1kYXRhc291cmNlJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnR2l0TGFiIGludGVncmF0aW9uIGFuZCBkYXRhc291cmNlJyxcbiAgICAgIG5hbWU6ICdHaXRMYWInLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL2dpdGxhYi5zdmcnLFxuICAgIH0pLFxuICAgIGdldFBoYW50b21QbHVnaW4oe1xuICAgICAgaWQ6ICdncmFmYW5hLXNwbHVuay1tb25pdG9yaW5nLWRhdGFzb3VyY2UnLFxuICAgICAgZGVzY3JpcHRpb246ICdTaWduYWxGeCBpbnRlZ3JhdGlvbiBhbmQgZGF0YXNvdXJjZScsXG4gICAgICBuYW1lOiAnU3BsdW5rIEluZnJhc3RydWN0dXJlIE1vbml0b3JpbmcnLFxuICAgICAgaW1nVXJsOiAncHVibGljL2ltZy9wbHVnaW5zL3NpZ25hbGZ4LWxvZ28uc3ZnJyxcbiAgICB9KSxcbiAgXTtcbn1cblxuZnVuY3Rpb24gZ2V0R3JhZmFuYUNsb3VkUGhhbnRvbVBsdWdpbigpOiBEYXRhU291cmNlUGx1Z2luTWV0YSB7XG4gIHJldHVybiB7XG4gICAgaWQ6ICdnY2xvdWQnLFxuICAgIG5hbWU6ICdHcmFmYW5hIENsb3VkJyxcbiAgICB0eXBlOiBQbHVnaW5UeXBlLmRhdGFzb3VyY2UsXG4gICAgbW9kdWxlOiAncGhhbnRvbScsXG4gICAgYmFzZVVybDogJycsXG4gICAgaW5mbzoge1xuICAgICAgZGVzY3JpcHRpb246ICdIb3N0ZWQgR3JhcGhpdGUsIFByb21ldGhldXMsIGFuZCBMb2tpJyxcbiAgICAgIGxvZ29zOiB7IHNtYWxsOiAncHVibGljL2ltZy9ncmFmYW5hX2ljb24uc3ZnJywgbGFyZ2U6ICdhc2QnIH0sXG4gICAgICBhdXRob3I6IHsgbmFtZTogJ0dyYWZhbmEgTGFicycgfSxcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB1cmw6ICdodHRwczovL2dyYWZhbmEuY29tL3Byb2R1Y3RzL2Nsb3VkLycsXG4gICAgICAgICAgbmFtZTogJ0xlYXJuIG1vcmUnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgIHVwZGF0ZWQ6ICcyMDE5LTA1LTEwJyxcbiAgICAgIHZlcnNpb246ICcxLjAuMCcsXG4gICAgfSxcbiAgfTtcbn1cblxuaW50ZXJmYWNlIEdldFBoYW50b21QbHVnaW5PcHRpb25zIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpbWdVcmw6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0UGhhbnRvbVBsdWdpbihvcHRpb25zOiBHZXRQaGFudG9tUGx1Z2luT3B0aW9ucyk6IERhdGFTb3VyY2VQbHVnaW5NZXRhIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogb3B0aW9ucy5pZCxcbiAgICBuYW1lOiBvcHRpb25zLm5hbWUsXG4gICAgdHlwZTogUGx1Z2luVHlwZS5kYXRhc291cmNlLFxuICAgIG1vZHVsZTogJ3BoYW50b20nLFxuICAgIGJhc2VVcmw6ICcnLFxuICAgIGluZm86IHtcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uLFxuICAgICAgbG9nb3M6IHsgc21hbGw6IG9wdGlvbnMuaW1nVXJsLCBsYXJnZTogb3B0aW9ucy5pbWdVcmwgfSxcbiAgICAgIGF1dGhvcjogeyBuYW1lOiAnR3JhZmFuYSBMYWJzJyB9LFxuICAgICAgbGlua3M6IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogY29uZmlnLnBsdWdpbkNhdGFsb2dVUkwgKyBvcHRpb25zLmlkLFxuICAgICAgICAgIG5hbWU6ICdJbnN0YWxsIG5vdycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc2NyZWVuc2hvdHM6IFtdLFxuICAgICAgdXBkYXRlZDogJzIwMTktMDUtMTAnLFxuICAgICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICB9LFxuICB9O1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVNldHRpbmdzLCBQbHVnaW5UeXBlLCBQbHVnaW5JbmNsdWRlLCBOYXZNb2RlbCwgTmF2TW9kZWxJdGVtIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBmZWF0dXJlRW5hYmxlZCB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUHJvQmFkZ2UgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1VwZ3JhZGUvUHJvQmFkZ2UnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGhpZ2hsaWdodFRyaWFsIH0gZnJvbSAnLi4vLi4vYWRtaW4vdXRpbHMnO1xuaW1wb3J0IHsgR2VuZXJpY0RhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICcuLi9zZXR0aW5ncy9QbHVnaW5TZXR0aW5ncyc7XG5cbmNvbnN0IGxvYWRpbmdEU1R5cGUgPSAnTG9hZGluZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE5hdk1vZGVsKGRhdGFTb3VyY2U6IERhdGFTb3VyY2VTZXR0aW5ncywgcGx1Z2luOiBHZW5lcmljRGF0YVNvdXJjZVBsdWdpbik6IE5hdk1vZGVsSXRlbSB7XG4gIGNvbnN0IHBsdWdpbk1ldGEgPSBwbHVnaW4ubWV0YTtcbiAgY29uc3QgaGlnaGxpZ2h0c0VuYWJsZWQgPSBjb25maWcuZmVhdHVyZVRvZ2dsZXMuZmVhdHVyZUhpZ2hsaWdodHM7XG4gIGNvbnN0IG5hdk1vZGVsOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgaW1nOiBwbHVnaW5NZXRhLmluZm8ubG9nb3MubGFyZ2UsXG4gICAgaWQ6ICdkYXRhc291cmNlLScgKyBkYXRhU291cmNlLnVpZCxcbiAgICBzdWJUaXRsZTogYFR5cGU6ICR7cGx1Z2luTWV0YS5uYW1lfWAsXG4gICAgdXJsOiAnJyxcbiAgICB0ZXh0OiBkYXRhU291cmNlLm5hbWUsXG4gICAgYnJlYWRjcnVtYnM6IFt7IHRpdGxlOiAnRGF0YSBTb3VyY2VzJywgdXJsOiAnZGF0YXNvdXJjZXMnIH1dLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGljb246ICdzbGlkZXJzLXYtYWx0JyxcbiAgICAgICAgaWQ6IGBkYXRhc291cmNlLXNldHRpbmdzLSR7ZGF0YVNvdXJjZS51aWR9YCxcbiAgICAgICAgdGV4dDogJ1NldHRpbmdzJyxcbiAgICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9gLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGlmIChwbHVnaW4uY29uZmlnUGFnZXMpIHtcbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcGx1Z2luLmNvbmZpZ1BhZ2VzKSB7XG4gICAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIHRleHQ6IHBhZ2UudGl0bGUsXG4gICAgICAgIGljb246IHBhZ2UuaWNvbixcbiAgICAgICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS8/cGFnZT0ke3BhZ2UuaWR9YCxcbiAgICAgICAgaWQ6IGBkYXRhc291cmNlLXBhZ2UtJHtwYWdlLmlkfWAsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAocGx1Z2luTWV0YS5pbmNsdWRlcyAmJiBoYXNEYXNoYm9hcmRzKHBsdWdpbk1ldGEuaW5jbHVkZXMpICYmIGNvbnRleHRTcnYuaGFzUm9sZSgnQWRtaW4nKSkge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBpY29uOiAnYXBwcycsXG4gICAgICBpZDogYGRhdGFzb3VyY2UtZGFzaGJvYXJkcy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgICB0ZXh0OiAnRGFzaGJvYXJkcycsXG4gICAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2Rhc2hib2FyZHNgLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgaXNMb2FkaW5nTmF2ID0gZGF0YVNvdXJjZS50eXBlID09PSBsb2FkaW5nRFNUeXBlO1xuXG4gIGNvbnN0IHBlcm1pc3Npb25zRXhwZXJpbWVudElkID0gJ2ZlYXR1cmUtaGlnaGxpZ2h0cy1kYXRhLXNvdXJjZS1wZXJtaXNzaW9ucy1iYWRnZSc7XG4gIGNvbnN0IGRzUGVybWlzc2lvbnM6IE5hdk1vZGVsSXRlbSA9IHtcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIGljb246ICdsb2NrJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtcGVybWlzc2lvbnMtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdQZXJtaXNzaW9ucycsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9wZXJtaXNzaW9uc2AsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGRzUGVybWlzc2lvbnMudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IHBlcm1pc3Npb25zRXhwZXJpbWVudElkLCBldmVudFZhcmlhbnQ6ICd0cmlhbCcgfSk7XG4gIH1cblxuICBpZiAoZmVhdHVyZUVuYWJsZWQoJ2RzcGVybWlzc2lvbnMnKSkge1xuICAgIGlmIChjb250ZXh0U3J2Lmhhc1Blcm1pc3Npb24oQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc1Blcm1pc3Npb25zUmVhZCkpIHtcbiAgICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKGRzUGVybWlzc2lvbnMpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChoaWdobGlnaHRzRW5hYmxlZCAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goe1xuICAgICAgLi4uZHNQZXJtaXNzaW9ucyxcbiAgICAgIHVybDogZHNQZXJtaXNzaW9ucy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogcGVybWlzc2lvbnNFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBhbmFseXRpY3NFeHBlcmltZW50SWQgPSAnZmVhdHVyZS1oaWdobGlnaHRzLWRhdGEtc291cmNlLWluc2lnaHRzLWJhZGdlJztcbiAgY29uc3QgYW5hbHl0aWNzOiBOYXZNb2RlbEl0ZW0gPSB7XG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnaW5mby1jaXJjbGUnLFxuICAgIGlkOiBgZGF0YXNvdXJjZS1pbnNpZ2h0cy0ke2RhdGFTb3VyY2UudWlkfWAsXG4gICAgdGV4dDogJ0luc2lnaHRzJyxcbiAgICB1cmw6IGBkYXRhc291cmNlcy9lZGl0LyR7ZGF0YVNvdXJjZS51aWR9L2luc2lnaHRzYCxcbiAgfTtcblxuICBpZiAoaGlnaGxpZ2h0VHJpYWwoKSAmJiAhaXNMb2FkaW5nTmF2KSB7XG4gICAgYW5hbHl0aWNzLnRhYlN1ZmZpeCA9ICgpID0+IFByb0JhZGdlKHsgZXhwZXJpbWVudElkOiBhbmFseXRpY3NFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnYW5hbHl0aWNzJykpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaChhbmFseXRpY3MpO1xuICB9IGVsc2UgaWYgKGhpZ2hsaWdodHNFbmFibGVkICYmICFpc0xvYWRpbmdOYXYpIHtcbiAgICBuYXZNb2RlbC5jaGlsZHJlbiEucHVzaCh7XG4gICAgICAuLi5hbmFseXRpY3MsXG4gICAgICB1cmw6IGFuYWx5dGljcy51cmwgKyAnL3VwZ3JhZGUnLFxuICAgICAgdGFiU3VmZml4OiAoKSA9PiBQcm9CYWRnZSh7IGV4cGVyaW1lbnRJZDogYW5hbHl0aWNzRXhwZXJpbWVudElkIH0pLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY2FjaGluZ0V4cGVyaW1lbnRJZCA9ICdmZWF0dXJlLWhpZ2hsaWdodHMtcXVlcnktY2FjaGluZy1iYWRnZSc7XG5cbiAgY29uc3QgY2FjaGluZzogTmF2TW9kZWxJdGVtID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgaWNvbjogJ2RhdGFiYXNlJyxcbiAgICBpZDogYGRhdGFzb3VyY2UtY2FjaGUtJHtkYXRhU291cmNlLnVpZH1gLFxuICAgIHRleHQ6ICdDYWNoZScsXG4gICAgdXJsOiBgZGF0YXNvdXJjZXMvZWRpdC8ke2RhdGFTb3VyY2UudWlkfS9jYWNoZWAsXG4gICAgaGlkZUZyb21UYWJzOiAhcGx1Z2luTWV0YS5pc0JhY2tlbmQgfHwgIWNvbmZpZy5jYWNoaW5nLmVuYWJsZWQsXG4gIH07XG5cbiAgaWYgKGhpZ2hsaWdodFRyaWFsKCkgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIGNhY2hpbmcudGFiU3VmZml4ID0gKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGNhY2hpbmdFeHBlcmltZW50SWQsIGV2ZW50VmFyaWFudDogJ3RyaWFsJyB9KTtcbiAgfVxuXG4gIGlmIChmZWF0dXJlRW5hYmxlZCgnY2FjaGluZycpKSB7XG4gICAgbmF2TW9kZWwuY2hpbGRyZW4hLnB1c2goY2FjaGluZyk7XG4gIH0gZWxzZSBpZiAoaGlnaGxpZ2h0c0VuYWJsZWQgJiYgIWlzTG9hZGluZ05hdikge1xuICAgIG5hdk1vZGVsLmNoaWxkcmVuIS5wdXNoKHtcbiAgICAgIC4uLmNhY2hpbmcsXG4gICAgICB1cmw6IGNhY2hpbmcudXJsICsgJy91cGdyYWRlJyxcbiAgICAgIHRhYlN1ZmZpeDogKCkgPT4gUHJvQmFkZ2UoeyBleHBlcmltZW50SWQ6IGNhY2hpbmdFeHBlcmltZW50SWQgfSksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmF2TW9kZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhU291cmNlTmF2KG1haW46IE5hdk1vZGVsSXRlbSwgcGFnZU5hbWU6IHN0cmluZyk6IE5hdk1vZGVsIHtcbiAgbGV0IG5vZGU6IE5hdk1vZGVsSXRlbSA9IHsgdGV4dDogJycgfTtcblxuICAvLyBmaW5kIGFjdGl2ZSBwYWdlXG4gIGZvciAoY29uc3QgY2hpbGQgb2YgbWFpbi5jaGlsZHJlbiEpIHtcbiAgICBpZiAoY2hpbGQuaWQhLmluZGV4T2YocGFnZU5hbWUpID4gMCkge1xuICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIG5vZGUgPSBjaGlsZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWFpbjogbWFpbixcbiAgICBub2RlOiBub2RlISxcbiAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhU291cmNlTG9hZGluZ05hdihwYWdlTmFtZTogc3RyaW5nKTogTmF2TW9kZWwge1xuICBjb25zdCBtYWluID0gYnVpbGROYXZNb2RlbChcbiAgICB7XG4gICAgICBhY2Nlc3M6ICcnLFxuICAgICAgYmFzaWNBdXRoOiBmYWxzZSxcbiAgICAgIGJhc2ljQXV0aFVzZXI6ICcnLFxuICAgICAgYmFzaWNBdXRoUGFzc3dvcmQ6ICcnLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSxcbiAgICAgIGRhdGFiYXNlOiAnJyxcbiAgICAgIGlkOiAxLFxuICAgICAgdWlkOiAneCcsXG4gICAgICBpc0RlZmF1bHQ6IGZhbHNlLFxuICAgICAganNvbkRhdGE6IHsgYXV0aFR5cGU6ICdjcmVkZW50aWFscycsIGRlZmF1bHRSZWdpb246ICdldS13ZXN0LTInIH0sXG4gICAgICBuYW1lOiAnTG9hZGluZycsXG4gICAgICBvcmdJZDogMSxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAgICAgIHR5cGU6IGxvYWRpbmdEU1R5cGUsXG4gICAgICB0eXBlTmFtZTogbG9hZGluZ0RTVHlwZSxcbiAgICAgIHR5cGVMb2dvVXJsOiAncHVibGljL2ltZy9pY24tZGF0YXNvdXJjZS5zdmcnLFxuICAgICAgdXJsOiAnJyxcbiAgICAgIHVzZXI6ICcnLFxuICAgICAgc2VjdXJlSnNvbkZpZWxkczoge30sXG4gICAgfSxcbiAgICB7XG4gICAgICBtZXRhOiB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIHR5cGU6IFBsdWdpblR5cGUuZGF0YXNvdXJjZSxcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGluZm86IHtcbiAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICBsaW5rczogW3sgbmFtZTogJycsIHVybDogJycgfV0sXG4gICAgICAgICAgbG9nb3M6IHtcbiAgICAgICAgICAgIGxhcmdlOiAnJyxcbiAgICAgICAgICAgIHNtYWxsOiAnJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjcmVlbnNob3RzOiBbXSxcbiAgICAgICAgICB1cGRhdGVkOiAnJyxcbiAgICAgICAgICB2ZXJzaW9uOiAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW5jbHVkZXM6IFtdLFxuICAgICAgICBtb2R1bGU6ICcnLFxuICAgICAgICBiYXNlVXJsOiAnJyxcbiAgICAgIH0sXG4gICAgfSBhcyBhbnlcbiAgKTtcblxuICByZXR1cm4gZ2V0RGF0YVNvdXJjZU5hdihtYWluLCBwYWdlTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0Rhc2hib2FyZHMoaW5jbHVkZXM6IFBsdWdpbkluY2x1ZGVbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGluY2x1ZGVzLmZpbmQoKGluY2x1ZGUpID0+IHtcbiAgICAgIHJldHVybiBpbmNsdWRlLnR5cGUgPT09ICdkYXNoYm9hcmQnO1xuICAgIH0pICE9PSB1bmRlZmluZWRcbiAgKTtcbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW5NZXRhLCBEYXRhU291cmNlU2V0dGluZ3MsIFVybFF1ZXJ5VmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZXNTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL2RhdGFzb3VyY2VzJztcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VzID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiB7XG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChzdGF0ZS5zZWFyY2hRdWVyeSwgJ2knKTtcblxuICByZXR1cm4gc3RhdGUuZGF0YVNvdXJjZXMuZmlsdGVyKChkYXRhU291cmNlOiBEYXRhU291cmNlU2V0dGluZ3MpID0+IHtcbiAgICByZXR1cm4gcmVnZXgudGVzdChkYXRhU291cmNlLm5hbWUpIHx8IHJlZ2V4LnRlc3QoZGF0YVNvdXJjZS5kYXRhYmFzZSkgfHwgcmVnZXgudGVzdChkYXRhU291cmNlLnR5cGUpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlUGx1Z2lucyA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4ge1xuICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3RhdGUuZGF0YVNvdXJjZVR5cGVTZWFyY2hRdWVyeSwgJ2knKTtcblxuICByZXR1cm4gc3RhdGUucGx1Z2lucy5maWx0ZXIoKHR5cGU6IERhdGFTb3VyY2VQbHVnaW5NZXRhKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QodHlwZS5uYW1lKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZSA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSwgZGF0YVNvdXJjZUlkOiBVcmxRdWVyeVZhbHVlKTogRGF0YVNvdXJjZVNldHRpbmdzID0+IHtcbiAgaWYgKHN0YXRlLmRhdGFTb3VyY2UudWlkID09PSBkYXRhU291cmNlSWQpIHtcbiAgICByZXR1cm4gc3RhdGUuZGF0YVNvdXJjZTtcbiAgfVxuICByZXR1cm4ge30gYXMgRGF0YVNvdXJjZVNldHRpbmdzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGFTb3VyY2VNZXRhID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlLCB0eXBlOiBzdHJpbmcpOiBEYXRhU291cmNlUGx1Z2luTWV0YSA9PiB7XG4gIGlmIChzdGF0ZS5kYXRhU291cmNlTWV0YS5pZCA9PT0gdHlwZSkge1xuICAgIHJldHVybiBzdGF0ZS5kYXRhU291cmNlTWV0YTtcbiAgfVxuXG4gIHJldHVybiB7fSBhcyBEYXRhU291cmNlUGx1Z2luTWV0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5ID0gKHN0YXRlOiBEYXRhU291cmNlc1N0YXRlKSA9PiBzdGF0ZS5zZWFyY2hRdWVyeTtcbmV4cG9ydCBjb25zdCBnZXREYXRhU291cmNlc0xheW91dE1vZGUgPSAoc3RhdGU6IERhdGFTb3VyY2VzU3RhdGUpID0+IHN0YXRlLmxheW91dE1vZGU7XG5leHBvcnQgY29uc3QgZ2V0RGF0YVNvdXJjZXNDb3VudCA9IChzdGF0ZTogRGF0YVNvdXJjZXNTdGF0ZSkgPT4gc3RhdGUuZGF0YVNvdXJjZXNDb3VudDtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUGx1Z2luU3RhdGUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJhZGdlLCBCYWRnZVByb3BzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzdGF0ZT86IFBsdWdpblN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgUGx1Z2luU3RhdGVJbmZvOiBGQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGdldEZlYXR1cmVTdGF0ZUluZm8ocHJvcHMuc3RhdGUpO1xuXG4gIGlmICghZGlzcGxheSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIDxCYWRnZSBjb2xvcj17ZGlzcGxheS5jb2xvcn0gdGl0bGU9e2Rpc3BsYXkudG9vbHRpcH0gdGV4dD17ZGlzcGxheS50ZXh0fSBpY29uPXtkaXNwbGF5Lmljb259IC8+O1xufTtcblxuZnVuY3Rpb24gZ2V0RmVhdHVyZVN0YXRlSW5mbyhzdGF0ZT86IFBsdWdpblN0YXRlKTogQmFkZ2VQcm9wcyB8IG51bGwge1xuICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5kZXByZWNhdGVkOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0RlcHJlY2F0ZWQnLFxuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICAgIHRvb2x0aXA6IGBUaGlzIGZlYXR1cmUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2VgLFxuICAgICAgfTtcbiAgICBjYXNlIFBsdWdpblN0YXRlLmFscGhhOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0FscGhhJyxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgdG9vbHRpcDogYFRoaXMgZmVhdHVyZSBpcyBleHBlcmltZW50YWwgYW5kIGZ1dHVyZSB1cGRhdGVzIG1pZ2h0IG5vdCBiZSBiYWNrd2FyZCBjb21wYXRpYmxlYCxcbiAgICAgIH07XG4gICAgY2FzZSBQbHVnaW5TdGF0ZS5iZXRhOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGV4dDogJ0JldGEnLFxuICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgICB0b29sdGlwOiBgVGhpcyBmZWF0dXJlIGlzIGNsb3NlIHRvIGNvbXBsZXRlIGJ1dCBub3QgZnVsbHkgdGVzdGVkYCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY29uZmlnIiwiaXNUcmlhbCIsImV4cGlyeSIsImxpY2Vuc2VJbmZvIiwidHJpYWxFeHBpcnkiLCJoaWdobGlnaHRUcmlhbCIsImZlYXR1cmVUb2dnbGVzIiwiZmVhdHVyZUhpZ2hsaWdodHMiLCJSZWFjdCIsInNlbGVjdG9ycyIsIklubGluZUZpZWxkIiwiSW5saW5lU3dpdGNoIiwiSW5wdXQiLCJCYXNpY1NldHRpbmdzIiwiZGF0YVNvdXJjZU5hbWUiLCJpc0RlZmF1bHQiLCJvbkRlZmF1bHRDaGFuZ2UiLCJvbk5hbWVDaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInBhZ2VzIiwiRGF0YVNvdXJjZSIsIm5hbWUiLCJjaGVja2VkIiwiQnV0dG9uIiwiTGlua0J1dHRvbiIsImNvbnRleHRTcnYiLCJBY2Nlc3NDb250cm9sQWN0aW9uIiwiQnV0dG9uUm93IiwiY2FuU2F2ZSIsImNhbkRlbGV0ZSIsIm9uRGVsZXRlIiwib25TdWJtaXQiLCJvblRlc3QiLCJleHBsb3JlVXJsIiwiY2FuRXhwbG9yZURhdGFTb3VyY2VzIiwiaGFzUGVybWlzc2lvbiIsIkRhdGFTb3VyY2VzRXhwbG9yZSIsImhpc3RvcnkiLCJiYWNrIiwiZGVsZXRlIiwic2F2ZUFuZFRlc3QiLCJHcmFmYW5hRWRpdGlvbiIsIkFsZXJ0IiwiTG9jYWxTdG9yYWdlVmFsdWVQcm92aWRlciIsIkxPQ0FMX1NUT1JBR0VfS0VZIiwiQ2xvdWRJbmZvQm94IiwiZGF0YVNvdXJjZSIsIm1haW5EUyIsImV4dHJhRFMiLCJyZWFkT25seSIsInZlcnNpb24iLCJidWlsZEluZm8iLCJlZGl0aW9uIiwiT3BlblNvdXJjZSIsInR5cGUiLCJpc0Rpc21pc3NlZCIsIm9uRGlzbWlzcyIsIlB1cmVDb21wb25lbnQiLCJjb25uZWN0IiwidXJsVXRpbCIsImNsZWFuVXBBY3Rpb24iLCJhcHBFdmVudHMiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJQbHVnaW5TdGF0ZUluZm8iLCJTaG93Q29uZmlybU1vZGFsRXZlbnQiLCJkZWxldGVEYXRhU291cmNlIiwiaW5pdERhdGFTb3VyY2VTZXR0aW5ncyIsImxvYWREYXRhU291cmNlIiwidGVzdERhdGFTb3VyY2UiLCJ1cGRhdGVEYXRhU291cmNlIiwiZ2V0RGF0YVNvdXJjZUxvYWRpbmdOYXYiLCJidWlsZE5hdk1vZGVsIiwiZ2V0RGF0YVNvdXJjZU5hdiIsImRhdGFTb3VyY2VMb2FkZWQiLCJzZXREYXRhU291cmNlTmFtZSIsInNldElzRGVmYXVsdCIsImdldERhdGFTb3VyY2UiLCJnZXREYXRhU291cmNlTWV0YSIsIlBsdWdpblNldHRpbmdzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJwcm9wcyIsImRhdGFTb3VyY2VJZCIsIm1hdGNoIiwicGFyYW1zIiwidWlkIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJkYXRhU291cmNlcyIsInBsdWdpbiIsImxvYWRFcnJvciIsImxvYWRpbmciLCJ0ZXN0aW5nU3RhdHVzIiwiZGF0YVNvdXJjZVNldHRpbmdzIiwicGFnZSIsImdldCIsIm5hdiIsIm5hdk1vZGVsIiwibmF2SW5kZXgiLCJkYXRhU291cmNlTWV0YSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIkRhdGFTb3VyY2VTZXR0aW5nc1BhZ2UiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsInB1Ymxpc2giLCJ0aXRsZSIsInRleHQiLCJ5ZXNUZXh0IiwiaWNvbiIsIm9uQ29uZmlybSIsImNvbmZpcm1EZWxldGUiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwic3RhdGVTZWxlY3RvciIsImlzUmVhZE9ubHkiLCJyZW5kZXJJc1JlYWRPbmx5TWVzc2FnZSIsInJlbmRlck1pc3NpbmdFZGl0UmlnaHRzTWVzc2FnZSIsImhhc0RhdGFTb3VyY2UiLCJpZCIsIm9uTmF2aWdhdGVUb0V4cGxvcmUiLCJleHBsb3JlU3RhdGUiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YXNvdXJjZSIsImNvbnRleHQiLCJ1cmwiLCJyZW5kZXJVcmwiLCJsZWZ0IiwicmVuZGVyTG9hZEVycm9yIiwiY2FuRGVsZXRlRGF0YVNvdXJjZSIsImhhc1Blcm1pc3Npb25Jbk1ldGFkYXRhIiwiRGF0YVNvdXJjZXNEZWxldGUiLCJub2RlIiwic3ViVGl0bGUiLCJtYWluIiwicmVuZGVyQ29uZmlnUGFnZUJvZHkiLCJjb25maWdQYWdlcyIsInAiLCJyZW5kZXJBbGVydERldGFpbHMiLCJkZXRhaWxzIiwibWVzc2FnZSIsInZlcmJvc2VNZXNzYWdlIiwid2hpdGVTcGFjZSIsInJlbmRlclNldHRpbmdzIiwiY2FuV3JpdGVEYXRhU291cmNlIiwiRGF0YVNvdXJjZXNXcml0ZSIsIm9uTW9kZWxDaGFuZ2UiLCJzdGF0dXMiLCJhbGVydCIsInJlbmRlciIsImNsb25lRGVlcCIsImdldEFuZ3VsYXJMb2FkZXIiLCJjb25zdHJ1Y3RvciIsInNjb3BlUHJvcHMiLCJjdHJsIiwiZGF0YXNvdXJjZU1ldGEiLCJjdXJyZW50Iiwib25Nb2RlbENoYW5nZWQiLCJiaW5kIiwiZWxlbWVudCIsImNvbXBvbmVudHMiLCJDb25maWdFZGl0b3IiLCJsb2FkZXIiLCJ0ZW1wbGF0ZSIsImNvbXBvbmVudCIsImxvYWQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJkaWdlc3QiLCJkZXN0cm95IiwiY3JlYXRlRWxlbWVudCIsIm9wdGlvbnMiLCJvbk9wdGlvbnNDaGFuZ2UiLCJsYXN0VmFsdWVGcm9tIiwibG9jYXRpb25VdGlsIiwiRGF0YVNvdXJjZVdpdGhCYWNrZW5kIiwibG9jYXRpb25TZXJ2aWNlIiwidXBkYXRlTmF2SW5kZXgiLCJnZXRCYWNrZW5kU3J2IiwiYWNjZXNzQ29udHJvbFF1ZXJ5UGFyYW0iLCJnZXREYXRhc291cmNlU3J2IiwiZ2V0UGx1Z2luU2V0dGluZ3MiLCJpbXBvcnREYXRhU291cmNlUGx1Z2luIiwiYnVpbGRDYXRlZ29yaWVzIiwiZGF0YVNvdXJjZU1ldGFMb2FkZWQiLCJkYXRhU291cmNlUGx1Z2luc0xvYWQiLCJkYXRhU291cmNlUGx1Z2luc0xvYWRlZCIsImRhdGFTb3VyY2VzTG9hZGVkIiwiaW5pdERhdGFTb3VyY2VTZXR0aW5nc0ZhaWxlZCIsImluaXREYXRhU291cmNlU2V0dGluZ3NTdWNjZWVkZWQiLCJ0ZXN0RGF0YVNvdXJjZUZhaWxlZCIsInRlc3REYXRhU291cmNlU3RhcnRpbmciLCJ0ZXN0RGF0YVNvdXJjZVN1Y2NlZWRlZCIsInBhZ2VJZCIsImRlcGVuZGVuY2llcyIsImxvYWREYXRhU291cmNlTWV0YSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJFcnJvciIsImxvYWRlZERhdGFTb3VyY2UiLCJpbXBvcnRlZFBsdWdpbiIsImVyciIsImRzQXBpIiwidGVzdERhdGFzb3VyY2UiLCJ3aXRoTm9CYWNrZW5kQ2FjaGUiLCJyZXN1bHQiLCJzdGF0dXNUZXh0IiwiZXJyTWVzc2FnZSIsImRhdGEiLCJsb2FkRGF0YVNvdXJjZXMiLCJyZXNwb25zZSIsImdldERhdGFTb3VyY2VVc2luZ1VpZE9ySWQiLCJwbHVnaW5JbmZvIiwiaXNCYWNrZW5kIiwiRGF0YVNvdXJjZUNsYXNzIiwicHJvdG90eXBlIiwibWV0YSIsImJhY2tlbmQiLCJieVVpZCIsImZldGNoIiwibWV0aG9kIiwic2hvd0Vycm9yQWxlcnQiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZUludCIsIk51bWJlciIsImlzTmFOIiwidG9TdHJpbmciLCJ3aW5kb3ciLCJocmVmIiwiYXNzdXJlQmFzZVVybCIsImFkZERhdGFTb3VyY2UiLCJnZXRTdG9yZSIsIm5ld0luc3RhbmNlIiwiYWNjZXNzIiwibGVuZ3RoIiwibmFtZUV4aXRzIiwiZmluZE5ld05hbWUiLCJwb3N0IiwicmVsb2FkIiwiZmV0Y2hVc2VyUGVybWlzc2lvbnMiLCJwdXNoIiwibG9hZERhdGFTb3VyY2VQbHVnaW5zIiwicGx1Z2lucyIsImVuYWJsZWQiLCJjYXRlZ29yaWVzIiwicHV0IiwiZmlsdGVyIiwidG9Mb3dlckNhc2UiLCJuYW1lSGFzU3VmZml4IiwiZ2V0TmV3TmFtZSIsImluY3JlbWVudExhc3REaWdpdCIsImdldExhc3REaWdpdCIsImVuZHNXaXRoIiwic2xpY2UiLCJkaWdpdCIsIlBsdWdpblR5cGUiLCJmZWF0dXJlRW5hYmxlZCIsIml0ZW0iLCJjYXRlZ29yeUluZGV4IiwicGx1Z2luSW5kZXgiLCJlbnRlcnByaXNlUGx1Z2lucyIsImdldEVudGVycHJpc2VQaGFudG9tUGx1Z2lucyIsImNhdGVnb3J5IiwiZW50ZXJwcmlzZVBsdWdpbiIsImZpbmQiLCJlbnRlcnByaXNlIiwidW5saWNlbnNlZCIsImluZm8iLCJsaW5rcyIsImxpbmsiLCJnZXRHcmFmYW5hQ2xvdWRQaGFudG9tUGx1Z2luIiwic29ydFBsdWdpbnMiLCJjIiwic29ydGluZ1J1bGVzIiwicHJvbWV0aGV1cyIsImdyYXBoaXRlIiwibG9raSIsIm15c3FsIiwiamFlZ2VyIiwicG9zdGdyZXMiLCJnY2xvdWQiLCJzb3J0IiwiYSIsImIiLCJhU29ydCIsImJTb3J0IiwiZ2V0UGhhbnRvbVBsdWdpbiIsImRlc2NyaXB0aW9uIiwiaW1nVXJsIiwibW9kdWxlIiwiYmFzZVVybCIsImxvZ29zIiwic21hbGwiLCJsYXJnZSIsImF1dGhvciIsInNjcmVlbnNob3RzIiwidXBkYXRlZCIsInBsdWdpbkNhdGFsb2dVUkwiLCJQcm9CYWRnZSIsImxvYWRpbmdEU1R5cGUiLCJwbHVnaW5NZXRhIiwiaGlnaGxpZ2h0c0VuYWJsZWQiLCJpbWciLCJicmVhZGNydW1icyIsImNoaWxkcmVuIiwiYWN0aXZlIiwiaW5jbHVkZXMiLCJoYXNEYXNoYm9hcmRzIiwiaGFzUm9sZSIsImlzTG9hZGluZ05hdiIsInBlcm1pc3Npb25zRXhwZXJpbWVudElkIiwiZHNQZXJtaXNzaW9ucyIsInRhYlN1ZmZpeCIsImV4cGVyaW1lbnRJZCIsImV2ZW50VmFyaWFudCIsIkRhdGFTb3VyY2VzUGVybWlzc2lvbnNSZWFkIiwiYW5hbHl0aWNzRXhwZXJpbWVudElkIiwiYW5hbHl0aWNzIiwiY2FjaGluZ0V4cGVyaW1lbnRJZCIsImNhY2hpbmciLCJoaWRlRnJvbVRhYnMiLCJwYWdlTmFtZSIsImNoaWxkIiwiaW5kZXhPZiIsImJhc2ljQXV0aCIsImJhc2ljQXV0aFVzZXIiLCJiYXNpY0F1dGhQYXNzd29yZCIsIndpdGhDcmVkZW50aWFscyIsImRhdGFiYXNlIiwianNvbkRhdGEiLCJhdXRoVHlwZSIsImRlZmF1bHRSZWdpb24iLCJvcmdJZCIsInBhc3N3b3JkIiwidHlwZU5hbWUiLCJ0eXBlTG9nb1VybCIsInVzZXIiLCJzZWN1cmVKc29uRmllbGRzIiwiaW5jbHVkZSIsInVuZGVmaW5lZCIsImdldERhdGFTb3VyY2VzIiwicmVnZXgiLCJSZWdFeHAiLCJzZWFyY2hRdWVyeSIsInRlc3QiLCJnZXREYXRhU291cmNlUGx1Z2lucyIsImRhdGFTb3VyY2VUeXBlU2VhcmNoUXVlcnkiLCJnZXREYXRhU291cmNlc1NlYXJjaFF1ZXJ5IiwiZ2V0RGF0YVNvdXJjZXNMYXlvdXRNb2RlIiwibGF5b3V0TW9kZSIsImdldERhdGFTb3VyY2VzQ291bnQiLCJkYXRhU291cmNlc0NvdW50IiwiUGx1Z2luU3RhdGUiLCJCYWRnZSIsImRpc3BsYXkiLCJnZXRGZWF0dXJlU3RhdGVJbmZvIiwiY29sb3IiLCJ0b29sdGlwIiwiZGVwcmVjYXRlZCIsImFscGhhIiwiYmV0YSJdLCJzb3VyY2VSb290IjoiIn0=