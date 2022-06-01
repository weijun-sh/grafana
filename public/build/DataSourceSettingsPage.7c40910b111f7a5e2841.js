"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[3959],{

/***/ "./public/app/features/datasources/settings/DataSourceSettingsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DataSourceSettingsPage": () => (/* binding */ DataSourceSettingsPage),
  "default": () => (/* binding */ settings_DataSourceSettingsPage)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-e2e-selectors/src/index.ts + 3 modules
var grafana_e2e_selectors_src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/actions/cleanUp.ts
var cleanUp = __webpack_require__("./public/app/core/actions/cleanUp.ts");
// EXTERNAL MODULE: ./public/app/core/app_events.ts
var app_events = __webpack_require__("./public/app/core/app_events.ts");
// EXTERNAL MODULE: ./public/app/core/components/Page/Page.tsx + 1 modules
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
// EXTERNAL MODULE: ./public/app/core/core.ts
var core = __webpack_require__("./public/app/core/core.ts");
// EXTERNAL MODULE: ./public/app/core/selectors/navModel.ts
var selectors_navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
// EXTERNAL MODULE: ./public/app/features/plugins/components/PluginStateInfo.tsx
var PluginStateInfo = __webpack_require__("./public/app/features/plugins/components/PluginStateInfo.tsx");
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var types = __webpack_require__("./public/app/types/index.ts");
// EXTERNAL MODULE: ./public/app/types/events.ts
var events = __webpack_require__("./public/app/types/events.ts");
// EXTERNAL MODULE: ./public/app/features/datasources/state/actions.ts + 1 modules
var actions = __webpack_require__("./public/app/features/datasources/state/actions.ts");
// EXTERNAL MODULE: ./public/app/features/datasources/state/navModel.ts
var state_navModel = __webpack_require__("./public/app/features/datasources/state/navModel.ts");
// EXTERNAL MODULE: ./public/app/features/datasources/state/reducers.ts
var reducers = __webpack_require__("./public/app/features/datasources/state/reducers.ts");
// EXTERNAL MODULE: ./public/app/features/datasources/state/selectors.ts
var selectors = __webpack_require__("./public/app/features/datasources/state/selectors.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/datasources/settings/BasicSettings.tsx






const BasicSettings = _ref => {
  let {
    dataSourceName,
    isDefault,
    onDefaultChange,
    onNameChange
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "gf-form-group",
    "aria-label": "Datasource settings page basic settings",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "gf-form-inline",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form max-width-30",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Name",
          tooltip: "The name is used when you select the data source in panels. The default data source is 'preselected in new panels.",
          grow: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
            id: "basic-settings-name",
            type: "text",
            value: dataSourceName,
            placeholder: "Name",
            onChange: event => onNameChange(event.currentTarget.value),
            required: true,
            "aria-label": grafana_e2e_selectors_src/* selectors.pages.DataSource.name */.wl.pages.DataSource.name
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Default",
        labelWidth: 8,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
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

/* harmony default export */ const settings_BasicSettings = (BasicSettings);
;// CONCATENATED MODULE: ./public/app/features/datasources/settings/ButtonRow.tsx








const ButtonRow = _ref => {
  let {
    canSave,
    canDelete,
    onDelete,
    onSubmit,
    onTest,
    exploreUrl
  } = _ref;
  const canExploreDataSources = core/* contextSrv.hasPermission */.Vt.hasPermission(types/* AccessControlAction.DataSourcesExplore */.bW.DataSourcesExplore);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "gf-form-button-row",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      variant: "secondary",
      fill: "solid",
      type: "button",
      onClick: () => history.back(),
      children: "Back"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
      variant: "secondary",
      fill: "solid",
      href: exploreUrl,
      disabled: !canExploreDataSources,
      children: "Explore"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      type: "button",
      variant: "destructive",
      disabled: !canDelete,
      onClick: onDelete,
      "aria-label": grafana_e2e_selectors_src/* selectors.pages.DataSource.delete */.wl.pages.DataSource["delete"],
      children: "Delete"
    }), canSave && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      type: "submit",
      variant: "primary",
      disabled: !canSave,
      onClick: event => onSubmit(event),
      "aria-label": grafana_e2e_selectors_src/* selectors.pages.DataSource.saveAndTest */.wl.pages.DataSource.saveAndTest,
      children: "Save & test"
    }), !canSave && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      type: "submit",
      variant: "primary",
      onClick: onTest,
      children: "Test"
    })]
  });
};

/* harmony default export */ const settings_ButtonRow = (ButtonRow);
// EXTERNAL MODULE: ./packages/grafana-data/src/types/config.ts
var config = __webpack_require__("./packages/grafana-data/src/types/config.ts");
// EXTERNAL MODULE: ./public/app/core/components/LocalStorageValueProvider/index.tsx + 1 modules
var LocalStorageValueProvider = __webpack_require__("./public/app/core/components/LocalStorageValueProvider/index.tsx");
// EXTERNAL MODULE: ./public/app/core/config.ts
var core_config = __webpack_require__("./public/app/core/config.ts");
;// CONCATENATED MODULE: ./public/app/features/datasources/settings/CloudInfoBox.tsx







const LOCAL_STORAGE_KEY = 'datasources.settings.cloudInfoBox.isDismissed';
const CloudInfoBox = _ref => {
  var _dataSource$version;

  let {
    dataSource
  } = _ref;
  let mainDS = '';
  let extraDS = ''; // don't show for already configured data sources or provisioned data sources

  if (dataSource.readOnly || ((_dataSource$version = dataSource.version) !== null && _dataSource$version !== void 0 ? _dataSource$version : 0) > 2) {
    return null;
  } // Skip showing this info box in some editions


  if (core_config/* config.buildInfo.edition */.vc.buildInfo.edition !== config/* GrafanaEdition.OpenSource */.e.OpenSource) {
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

  return /*#__PURE__*/(0,jsx_runtime.jsx)(LocalStorageValueProvider/* LocalStorageValueProvider */.G, {
    storageKey: LOCAL_STORAGE_KEY,
    defaultValue: false,
    children: (isDismissed, onDismiss) => {
      if (isDismissed) {
        return null;
      }

      return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Alert, {
        title: `Configure your ${mainDS} data source below`,
        severity: "info",
        bottomSpacing: 4,
        onRemove: () => {
          onDismiss(true);
        },
        children: ["Or skip the effort and get ", mainDS, " (and ", extraDS, ") as fully-managed, scalable, and hosted data sources from Grafana Labs with the", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
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
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
;// CONCATENATED MODULE: ./public/app/features/datasources/settings/PluginSettings.tsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class PluginSettings extends react.PureComponent {
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
        current: (0,lodash.cloneDeep)(props.dataSource)
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
      const loader = (0,grafana_runtime_src.getAngularLoader)();
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

      this.scopeProps.ctrl.current = (0,lodash.cloneDeep)(this.props.dataSource);
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

    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: element => this.element = element,
      children: plugin.components.ConfigEditor && /*#__PURE__*/react.createElement(plugin.components.ConfigEditor, {
        options: dataSource,
        onOptionsChange: this.onModelChanged
      })
    });
  }

}
/* harmony default export */ const settings_PluginSettings = ((/* unused pure expression or super */ null && (PluginSettings)));
;// CONCATENATED MODULE: ./public/app/features/datasources/settings/DataSourceSettingsPage.tsx
var _Alert, _label;

function DataSourceSettingsPage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























function mapStateToProps(state, props) {
  const dataSourceId = props.match.params.uid;
  const params = new URLSearchParams(props.location.search);
  const dataSource = (0,selectors/* getDataSource */.f6)(state.dataSources, dataSourceId);
  const {
    plugin,
    loadError,
    loading,
    testingStatus
  } = state.dataSourceSettings;
  const page = params.get('page');
  const nav = plugin ? (0,state_navModel/* getDataSourceNav */.nI)((0,state_navModel/* buildNavModel */.B1)(dataSource, plugin), page || 'settings') : (0,state_navModel/* getDataSourceLoadingNav */.xG)('settings');
  const navModel = (0,selectors_navModel/* getNavModel */.h)(state.navIndex, page ? `datasource-page-${page}` : `datasource-settings-${dataSourceId}`, nav);
  return {
    dataSource: (0,selectors/* getDataSource */.f6)(state.dataSources, dataSourceId),
    dataSourceMeta: (0,selectors/* getDataSourceMeta */.G4)(state.dataSources, dataSource.type),
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
  deleteDataSource: actions/* deleteDataSource */.xU,
  loadDataSource: actions/* loadDataSource */.gv,
  setDataSourceName: reducers/* setDataSourceName */.BX,
  updateDataSource: actions/* updateDataSource */.oe,
  setIsDefault: reducers/* setIsDefault */.yr,
  dataSourceLoaded: reducers/* dataSourceLoaded */.rl,
  initDataSourceSettings: actions/* initDataSourceSettings */.M9,
  testDataSource: actions/* testDataSource */.kY,
  cleanUpAction: cleanUp/* cleanUpAction */.e
};
const connector = (0,es.connect)(mapStateToProps, mapDispatchToProps);
class DataSourceSettingsPage extends react.PureComponent {
  constructor() {
    super(...arguments);

    DataSourceSettingsPage_defineProperty(this, "onSubmit", async evt => {
      evt.preventDefault();
      await this.props.updateDataSource(Object.assign({}, this.props.dataSource));
      this.testDataSource();
    });

    DataSourceSettingsPage_defineProperty(this, "onTest", async evt => {
      evt.preventDefault();
      this.testDataSource();
    });

    DataSourceSettingsPage_defineProperty(this, "onDelete", () => {
      app_events/* default.publish */.Z.publish(new events/* ShowConfirmModalEvent */.VJ({
        title: 'Delete',
        text: `Are you sure you want to delete the "${this.props.dataSource.name}" data source?`,
        yesText: 'Delete',
        icon: 'trash-alt',
        onConfirm: () => {
          this.confirmDelete();
        }
      }));
    });

    DataSourceSettingsPage_defineProperty(this, "confirmDelete", () => {
      this.props.deleteDataSource();
    });

    DataSourceSettingsPage_defineProperty(this, "onModelChange", dataSource => {
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
    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      "aria-label": grafana_e2e_selectors_src/* selectors.pages.DataSource.readOnly */.wl.pages.DataSource.readOnly,
      severity: "info",
      title: "Provisioned data source",
      children: "This data source was added by config and cannot be modified using the UI. Please contact your server admin to update this data source."
    });
  }

  renderMissingEditRightsMessage() {
    return _Alert || (_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
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
    const url = src.urlUtil.renderUrl('/explore', {
      left: exploreState
    });
    return url;
  }

  renderLoadError() {
    const {
      loadError,
      dataSource
    } = this.props;
    const canDeleteDataSource = !this.isReadOnly() && core/* contextSrv.hasPermissionInMetadata */.Vt.hasPermissionInMetadata(types/* AccessControlAction.DataSourcesDelete */.bW.DataSourcesDelete, dataSource);
    const node = {
      text: loadError,
      subTitle: 'Data Source Error',
      icon: 'exclamation-triangle'
    };
    const nav = {
      node: node,
      main: node
    };
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
      navModel: nav,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Page/* default.Contents */.Z.Contents, {
        isLoading: this.props.loading,
        children: [this.isReadOnly() && this.renderIsReadOnlyMessage(), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form-button-row",
          children: [canDeleteDataSource && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            type: "submit",
            variant: "destructive",
            onClick: this.onDelete,
            children: "Delete"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
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
        return /*#__PURE__*/(0,jsx_runtime.jsx)(p.body, {
          plugin: plugin,
          query: {}
        });
      }
    }

    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: ["Page not found: ", page]
    });
  }

  renderAlertDetails() {
    var _testingStatus$detail, _testingStatus$detail2, _testingStatus$detail3;

    const {
      testingStatus
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [testingStatus === null || testingStatus === void 0 ? void 0 : (_testingStatus$detail = testingStatus.details) === null || _testingStatus$detail === void 0 ? void 0 : _testingStatus$detail.message, testingStatus !== null && testingStatus !== void 0 && (_testingStatus$detail2 = testingStatus.details) !== null && _testingStatus$detail2 !== void 0 && _testingStatus$detail2.verboseMessage ? /*#__PURE__*/(0,jsx_runtime.jsx)("details", {
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
    const canWriteDataSource = core/* contextSrv.hasPermissionInMetadata */.Vt.hasPermissionInMetadata(types/* AccessControlAction.DataSourcesWrite */.bW.DataSourcesWrite, dataSource);
    const canDeleteDataSource = core/* contextSrv.hasPermissionInMetadata */.Vt.hasPermissionInMetadata(types/* AccessControlAction.DataSourcesDelete */.bW.DataSourcesDelete, dataSource);
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      onSubmit: this.onSubmit,
      children: [!canWriteDataSource && this.renderMissingEditRightsMessage(), this.isReadOnly() && this.renderIsReadOnlyMessage(), dataSourceMeta.state && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "gf-form",
        children: [_label || (_label = /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
          className: "gf-form-label width-10",
          children: "Plugin state"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
          className: "gf-form-label gf-form-label--transparent",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(PluginStateInfo/* PluginStateInfo */.u, {
            state: dataSourceMeta.state
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(CloudInfoBox, {
        dataSource: dataSource
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(settings_BasicSettings, {
        dataSourceName: dataSource.name,
        isDefault: dataSource.isDefault,
        onDefaultChange: state => setIsDefault(state),
        onNameChange: name => setDataSourceName(name)
      }), plugin && /*#__PURE__*/(0,jsx_runtime.jsx)(PluginSettings, {
        plugin: plugin,
        dataSource: dataSource,
        dataSourceMeta: dataSourceMeta,
        onModelChange: this.onModelChange
      }), (testingStatus === null || testingStatus === void 0 ? void 0 : testingStatus.message) && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-group p-t-2",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
          severity: testingStatus.status === 'error' ? 'error' : 'success',
          title: testingStatus.message,
          "aria-label": grafana_e2e_selectors_src/* selectors.pages.DataSource.alert */.wl.pages.DataSource.alert,
          children: testingStatus.details && this.renderAlertDetails()
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(settings_ButtonRow, {
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

    return /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default */.Z, {
      navModel: navModel,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Page/* default.Contents */.Z.Contents, {
        isLoading: loading,
        children: this.hasDataSource ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: page ? this.renderConfigPageBody(page) : this.renderSettings()
        }) : null
      })
    });
  }

}
/* harmony default export */ const settings_DataSourceSettingsPage = (connector(DataSourceSettingsPage));

/***/ }),

/***/ "./public/app/features/plugins/components/PluginStateInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ PluginStateInfo)
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