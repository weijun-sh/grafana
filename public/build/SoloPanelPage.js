"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["SoloPanelPage"],{

/***/ "./public/app/features/dashboard/containers/SoloPanelPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SoloPanel": () => (/* binding */ SoloPanel),
/* harmony export */   "SoloPanelPage": () => (/* binding */ SoloPanelPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _dashgrid_DashboardPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/dashgrid/DashboardPanel.tsx");
/* harmony import */ var _state_initDashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const mapStateToProps = state => ({
  dashboard: state.dashboard.getModel()
});

const mapDispatchToProps = {
  initDashboard: _state_initDashboard__WEBPACK_IMPORTED_MODULE_4__.initDashboard
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class SoloPanelPage extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      panel: null,
      notFound: false
    });
  }

  componentDidMount() {
    const {
      match,
      route
    } = this.props;
    this.props.initDashboard({
      urlSlug: match.params.slug,
      urlUid: match.params.uid,
      urlType: match.params.type,
      routeName: route.routeName,
      fixUrl: false
    });
  }

  getPanelId() {
    var _this$props$queryPara;

    return parseInt((_this$props$queryPara = this.props.queryParams.panelId) !== null && _this$props$queryPara !== void 0 ? _this$props$queryPara : '0', 10);
  }

  componentDidUpdate(prevProps) {
    const {
      dashboard
    } = this.props;

    if (!dashboard) {
      return;
    } // we just got a new dashboard


    if (!prevProps.dashboard || prevProps.dashboard.uid !== dashboard.uid) {
      const panel = dashboard.getPanelByUrlId(this.props.queryParams.panelId);

      if (!panel) {
        this.setState({
          notFound: true
        });
        return;
      }

      this.setState({
        panel
      });
    }
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(SoloPanel, {
      dashboard: this.props.dashboard,
      notFound: this.state.notFound,
      panel: this.state.panel,
      panelId: this.getPanelId()
    });
  }

}
const SoloPanel = ({
  dashboard,
  notFound,
  panel,
  panelId
}) => {
  if (notFound) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "alert alert-error",
      children: ["Panel with id ", panelId, " not found"]
    });
  }

  if (!panel || !dashboard) {
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: "Loading & initializing dashboard"
    }));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "panel-solo",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: ({
        width,
        height
      }) => {
        if (width === 0) {
          return null;
        }

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_dashgrid_DashboardPanel__WEBPACK_IMPORTED_MODULE_3__.DashboardPanel, {
          stateKey: panel.key,
          width: width,
          height: height,
          dashboard: dashboard,
          panel: panel,
          isEditing: false,
          isViewing: false,
          lazy: false
        });
      }
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(SoloPanelPage));

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/DashboardPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPanel": () => (/* binding */ DashboardPanel),
/* harmony export */   "DashboardPanelUnconnected": () => (/* binding */ DashboardPanelUnconnected)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _panel_state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/panel/state/actions.ts");
/* harmony import */ var _panel_state_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/panel/state/reducers.ts");
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/dashgrid/LazyLoader.tsx");
/* harmony import */ var _PanelChrome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelChrome.tsx");
/* harmony import */ var _PanelChromeAngular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelChromeAngular.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const mapStateToProps = (state, props) => {
  const panelState = state.panels[props.stateKey];

  if (!panelState) {
    return {
      plugin: null
    };
  }

  return {
    plugin: panelState.plugin,
    instanceState: panelState.instanceState
  };
};

const mapDispatchToProps = {
  initPanelState: _panel_state_actions__WEBPACK_IMPORTED_MODULE_2__.initPanelState,
  setPanelInstanceState: _panel_state_reducers__WEBPACK_IMPORTED_MODULE_3__.setPanelInstanceState
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class DashboardPanelUnconnected extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onInstanceStateChange", value => {
      this.props.setPanelInstanceState({
        key: this.props.stateKey,
        value
      });
    });

    _defineProperty(this, "onVisibilityChange", v => {
      this.props.panel.isInView = v;
    });

    _defineProperty(this, "onPanelLoad", () => {
      if (!this.props.plugin) {
        this.props.initPanelState(this.props.panel);
      }
    });
  }

  componentDidMount() {
    this.props.panel.isInView = !this.props.lazy;

    if (!this.props.lazy) {
      this.onPanelLoad();
    }
  }

  render() {
    const {
      dashboard,
      panel,
      isViewing,
      isEditing,
      width,
      height,
      lazy,
      plugin
    } = this.props;

    const renderPanelChrome = isInView => plugin && (plugin.angularPanelCtrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PanelChromeAngular__WEBPACK_IMPORTED_MODULE_6__.PanelChromeAngular, {
      plugin: plugin,
      panel: panel,
      dashboard: dashboard,
      isViewing: isViewing,
      isEditing: isEditing,
      isInView: isInView,
      width: width,
      height: height
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_PanelChrome__WEBPACK_IMPORTED_MODULE_5__.PanelChrome, {
      plugin: plugin,
      panel: panel,
      dashboard: dashboard,
      isViewing: isViewing,
      isEditing: isEditing,
      isInView: isInView,
      width: width,
      height: height,
      onInstanceStateChange: this.onInstanceStateChange
    }));

    return lazy ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_LazyLoader__WEBPACK_IMPORTED_MODULE_4__.LazyLoader, {
      width: width,
      height: height,
      onChange: this.onVisibilityChange,
      onLoad: this.onPanelLoad,
      children: ({
        isInView
      }) => renderPanelChrome(isInView)
    }) : renderPanelChrome(true);
  }

}

_defineProperty(DashboardPanelUnconnected, "defaultProps", {
  lazy: true
});

const DashboardPanel = connector(DashboardPanelUnconnected);

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/LazyLoader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LazyLoader": () => (/* binding */ LazyLoader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");
/* harmony import */ var app_plugins_datasource_influxdb_components_useUniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function LazyLoader({
  children,
  width,
  height,
  onLoad,
  onChange
}) {
  const id = (0,app_plugins_datasource_influxdb_components_useUniqueId__WEBPACK_IMPORTED_MODULE_1__.useUniqueId)();
  const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isInView, setIsInView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    LazyLoader.addCallback(id, entry => {
      if (!loaded && entry.isIntersecting) {
        setLoaded(true);
        onLoad === null || onLoad === void 0 ? void 0 : onLoad();
      }

      setIsInView(entry.isIntersecting);
      onChange === null || onChange === void 0 ? void 0 : onChange(entry.isIntersecting);
    });
    const wrapperEl = wrapperRef.current;

    if (wrapperEl) {
      LazyLoader.observer.observe(wrapperEl);
    }

    return () => {
      delete LazyLoader.callbacks[id];
      wrapperEl && LazyLoader.observer.unobserve(wrapperEl);

      if (Object.keys(LazyLoader.callbacks).length === 0) {
        LazyLoader.observer.disconnect();
      }
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    id: id,
    ref: wrapperRef,
    style: {
      width,
      height
    },
    children: loaded && (typeof children === 'function' ? children({
      isInView
    }) : children)
  });
}
LazyLoader.callbacks = {};

LazyLoader.addCallback = (id, c) => LazyLoader.callbacks[id] = c;

LazyLoader.observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    LazyLoader.callbacks[entry.target.id](entry);
  }
}, {
  rootMargin: '100px'
});

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelChrome.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelChrome": () => (/* binding */ PanelChrome)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var app_core_profiler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/profiler.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
/* harmony import */ var app_plugins_panel_timeseries_overrides_colorSeriesConfigFactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/timeseries/overrides/colorSeriesConfigFactory.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _routes_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/routes/utils.ts");
/* harmony import */ var _annotations_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/annotations/api.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _utils_loadSnapshotData__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/utils/loadSnapshotData.ts");
/* harmony import */ var _PanelHeader_PanelHeader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeader.tsx");
/* harmony import */ var _SeriesVisibilityConfigFactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts");
/* harmony import */ var _liveTimer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/dashboard/dashgrid/liveTimer.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























const DEFAULT_PLUGIN_ERROR = 'Error in plugin';
class PanelChrome extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props); // Can this eventBus be on PanelModel?  when we have more complex event filtering, that may be a better option

    _defineProperty(this, "timeSrv", (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_16__.getTimeSrv)());

    _defineProperty(this, "subs", new rxjs__WEBPACK_IMPORTED_MODULE_22__.Subscription());

    _defineProperty(this, "eventFilter", {
      onlyLocal: true
    });

    _defineProperty(this, "canEditDashboard", () => Boolean(this.props.dashboard.meta.canEdit || this.props.dashboard.meta.canMakeEditable));

    _defineProperty(this, "canAddAnnotation", () => {
      let canAdd = true;

      if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__.contextSrv.accessControlEnabled()) {
        var _this$props$dashboard;

        canAdd = !!((_this$props$dashboard = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard !== void 0 && _this$props$dashboard.dashboard.canAdd);
      }

      return canAdd && this.canEditDashboard();
    });

    _defineProperty(this, "canEditAnnotation", dashboardId => {
      let canEdit = true;

      if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__.contextSrv.accessControlEnabled()) {
        if (dashboardId !== 0) {
          var _this$props$dashboard2;

          canEdit = !!((_this$props$dashboard2 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard2 !== void 0 && _this$props$dashboard2.dashboard.canEdit);
        } else {
          var _this$props$dashboard3;

          canEdit = !!((_this$props$dashboard3 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard3 !== void 0 && _this$props$dashboard3.organization.canEdit);
        }
      }

      return canEdit && this.canEditDashboard();
    });

    _defineProperty(this, "canDeleteAnnotation", dashboardId => {
      let canDelete = true;

      if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__.contextSrv.accessControlEnabled()) {
        if (dashboardId !== 0) {
          var _this$props$dashboard4;

          canDelete = !!((_this$props$dashboard4 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard4 !== void 0 && _this$props$dashboard4.dashboard.canDelete);
        } else {
          var _this$props$dashboard5;

          canDelete = !!((_this$props$dashboard5 = this.props.dashboard.meta.annotationsPermissions) !== null && _this$props$dashboard5 !== void 0 && _this$props$dashboard5.organization.canDelete);
        }
      }

      return canDelete && this.canEditDashboard();
    });

    _defineProperty(this, "getSync", () => this.props.isEditing ? _grafana_data__WEBPACK_IMPORTED_MODULE_2__.DashboardCursorSync.Off : this.props.dashboard.graphTooltip);

    _defineProperty(this, "onInstanceStateChange", value => {
      this.props.onInstanceStateChange(value);
      this.setState({
        context: Object.assign({}, this.state.context, {
          instanceState: value
        })
      });
    });

    _defineProperty(this, "onSeriesColorChange", (label, color) => {
      this.onFieldConfigChange((0,app_plugins_panel_timeseries_overrides_colorSeriesConfigFactory__WEBPACK_IMPORTED_MODULE_10__.changeSeriesColorConfigFactory)(label, color, this.props.panel.fieldConfig));
    });

    _defineProperty(this, "onSeriesVisibilityChange", (label, mode) => {
      this.onFieldConfigChange((0,_SeriesVisibilityConfigFactory__WEBPACK_IMPORTED_MODULE_19__.seriesVisibilityConfigFactory)(label, mode, this.props.panel.fieldConfig, this.state.data.series));
    });

    _defineProperty(this, "onToggleLegendSort", sortKey => {
      const legendOptions = this.props.panel.options.legend; // We don't want to do anything when legend options are not available

      if (!legendOptions) {
        return;
      }

      let sortDesc = legendOptions.sortDesc;
      let sortBy = legendOptions.sortBy;

      if (sortKey !== sortBy) {
        sortDesc = undefined;
      } // if already sort ascending, disable sorting


      if (sortDesc === false) {
        sortBy = undefined;
        sortDesc = undefined;
      } else {
        sortDesc = !sortDesc;
        sortBy = sortKey;
      }

      this.onOptionsChange(Object.assign({}, this.props.panel.options, {
        legend: Object.assign({}, legendOptions, {
          sortBy,
          sortDesc
        })
      }));
    });

    _defineProperty(this, "onRefresh", () => {
      const {
        panel,
        isInView,
        width
      } = this.props;

      if (!isInView) {
        this.setState({
          refreshWhenInView: true
        });
        return;
      }

      const timeData = (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_9__.applyPanelTimeOverrides)(panel, this.timeSrv.timeRange()); // Issue Query

      if (this.wantsQueryExecution) {
        if (width < 0) {
          return;
        }

        if (this.state.refreshWhenInView) {
          this.setState({
            refreshWhenInView: false
          });
        }

        panel.runAllPanelQueries(this.props.dashboard.id, this.props.dashboard.getTimezone(), timeData, width);
      } else {
        // The panel should render on refresh as well if it doesn't have a query, like clock panel
        this.setState({
          data: Object.assign({}, this.state.data, {
            timeRange: this.timeSrv.timeRange()
          }),
          renderCounter: this.state.renderCounter + 1,
          liveTime: undefined
        });
      }
    });

    _defineProperty(this, "onRender", () => {
      const stateUpdate = {
        renderCounter: this.state.renderCounter + 1
      };
      this.setState(stateUpdate);
    });

    _defineProperty(this, "onOptionsChange", options => {
      this.props.panel.updateOptions(options);
    });

    _defineProperty(this, "onFieldConfigChange", config => {
      this.props.panel.updateFieldConfig(config);
    });

    _defineProperty(this, "onPanelError", error => {
      const errorMessage = error.message || DEFAULT_PLUGIN_ERROR;

      if (this.state.errorMessage !== errorMessage) {
        this.setState({
          errorMessage
        });
      }
    });

    _defineProperty(this, "onPanelErrorRecover", () => {
      this.setState({
        errorMessage: undefined
      });
    });

    _defineProperty(this, "onAnnotationCreate", async event => {
      const isRegion = event.from !== event.to;
      const anno = {
        dashboardId: this.props.dashboard.id,
        panelId: this.props.panel.id,
        isRegion,
        time: event.from,
        timeEnd: isRegion ? event.to : 0,
        tags: event.tags,
        text: event.description
      };
      await (0,_annotations_api__WEBPACK_IMPORTED_MODULE_14__.saveAnnotation)(anno);
      (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_15__.getDashboardQueryRunner)().run({
        dashboard: this.props.dashboard,
        range: this.timeSrv.timeRange()
      });
      this.state.context.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AnnotationChangeEvent(anno));
    });

    _defineProperty(this, "onAnnotationDelete", async id => {
      await (0,_annotations_api__WEBPACK_IMPORTED_MODULE_14__.deleteAnnotation)({
        id
      });
      (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_15__.getDashboardQueryRunner)().run({
        dashboard: this.props.dashboard,
        range: this.timeSrv.timeRange()
      });
      this.state.context.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AnnotationChangeEvent({
        id
      }));
    });

    _defineProperty(this, "onAnnotationUpdate", async event => {
      const isRegion = event.from !== event.to;
      const anno = {
        id: event.id,
        dashboardId: this.props.dashboard.id,
        panelId: this.props.panel.id,
        isRegion,
        time: event.from,
        timeEnd: isRegion ? event.to : 0,
        tags: event.tags,
        text: event.description
      };
      await (0,_annotations_api__WEBPACK_IMPORTED_MODULE_14__.updateAnnotation)(anno);
      (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_15__.getDashboardQueryRunner)().run({
        dashboard: this.props.dashboard,
        range: this.timeSrv.timeRange()
      });
      this.state.context.eventBus.publish(new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.AnnotationChangeEvent(anno));
    });

    _defineProperty(this, "onChangeTimeRange", timeRange => {
      this.timeSrv.setTime({
        from: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toUtc)(timeRange.from),
        to: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toUtc)(timeRange.to)
      });
    });

    const eventBus = props.dashboard.events.newScopedBus(`panel:${props.panel.id}`, this.eventFilter);
    this.state = {
      isFirstLoad: true,
      renderCounter: 0,
      refreshWhenInView: false,
      context: {
        eventBus,
        app: this.getPanelContextApp(),
        sync: this.getSync,
        onSeriesColorChange: this.onSeriesColorChange,
        onToggleSeriesVisibility: this.onSeriesVisibilityChange,
        onAnnotationCreate: this.onAnnotationCreate,
        onAnnotationUpdate: this.onAnnotationUpdate,
        onAnnotationDelete: this.onAnnotationDelete,
        canAddAnnotations: this.canAddAnnotation,
        onInstanceStateChange: this.onInstanceStateChange,
        onToggleLegendSort: this.onToggleLegendSort,
        canEditAnnotations: this.canEditAnnotation,
        canDeleteAnnotations: this.canDeleteAnnotation
      },
      data: this.getInitialPanelDataState()
    };
  }

  getPanelContextApp() {
    if (this.props.isEditing) {
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.PanelEditor;
    }

    if (this.props.isViewing) {
      return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.PanelViewer;
    }

    return _grafana_data__WEBPACK_IMPORTED_MODULE_2__.CoreApp.Dashboard;
  }

  getInitialPanelDataState() {
    return {
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.NotStarted,
      series: [],
      timeRange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.getDefaultTimeRange)()
    };
  }

  componentDidMount() {
    const {
      panel,
      dashboard
    } = this.props; // Subscribe to panel events

    this.subs.add(panel.events.subscribe(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.RefreshEvent, this.onRefresh));
    this.subs.add(panel.events.subscribe(app_types_events__WEBPACK_IMPORTED_MODULE_11__.RenderEvent, this.onRender));
    dashboard.panelInitialized(this.props.panel); // Move snapshot data into the query response

    if (this.hasPanelSnapshot) {
      this.setState({
        data: (0,_utils_loadSnapshotData__WEBPACK_IMPORTED_MODULE_17__.loadSnapshotData)(panel, dashboard),
        isFirstLoad: false
      });
      return;
    }

    if (!this.wantsQueryExecution) {
      this.setState({
        isFirstLoad: false
      });
    }

    this.subs.add(panel.getQueryRunner().getData({
      withTransforms: true,
      withFieldConfig: true
    }).subscribe({
      next: data => this.onDataUpdate(data)
    })); // Listen for live timer events

    _liveTimer__WEBPACK_IMPORTED_MODULE_20__.liveTimer.listen(this);
  }

  componentWillUnmount() {
    this.subs.unsubscribe();
    _liveTimer__WEBPACK_IMPORTED_MODULE_20__.liveTimer.remove(this);
  }

  liveTimeChanged(liveTime) {
    const {
      data
    } = this.state;

    if (data.timeRange) {
      const delta = liveTime.to.valueOf() - data.timeRange.to.valueOf();

      if (delta < 100) {
        // 10hz
        console.log('Skip tick render', this.props.panel.title, delta);
        return;
      }
    }

    this.setState({
      liveTime
    });
  }

  componentDidUpdate(prevProps) {
    const {
      isInView,
      width
    } = this.props;
    const {
      context
    } = this.state;
    const app = this.getPanelContextApp();

    if (context.app !== app) {
      this.setState({
        context: Object.assign({}, context, {
          app
        })
      });
    } // View state has changed


    if (isInView !== prevProps.isInView) {
      if (isInView) {
        // Check if we need a delayed refresh
        if (this.state.refreshWhenInView) {
          this.onRefresh();
        }
      }
    } // The timer depends on panel width


    if (width !== prevProps.width) {
      _liveTimer__WEBPACK_IMPORTED_MODULE_20__.liveTimer.updateInterval(this);
    }
  } // Updates the response with information from the stream
  // The next is outside a react synthetic event so setState is not batched
  // So in this context we can only do a single call to setState


  onDataUpdate(data) {
    const {
      dashboard,
      panel,
      plugin
    } = this.props; // Ignore this data update if we are now a non data panel

    if (plugin.meta.skipDataQuery) {
      this.setState({
        data: this.getInitialPanelDataState()
      });
      return;
    }

    let {
      isFirstLoad
    } = this.state;
    let errorMessage;

    switch (data.state) {
      case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading:
        // Skip updating state data if it is already in loading state
        // This is to avoid rendering partial loading responses
        if (this.state.data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading) {
          return;
        }

        break;

      case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Error:
        const {
          error
        } = data;

        if (error) {
          if (errorMessage !== error.message) {
            errorMessage = error.message;
          }
        }

        break;

      case _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Done:
        // If we are doing a snapshot save data in panel model
        if (dashboard.snapshot) {
          panel.snapshotData = data.series.map(frame => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toDataFrameDTO)(frame));
        }

        if (isFirstLoad) {
          isFirstLoad = false;
        }

        break;
    }

    this.setState({
      isFirstLoad,
      errorMessage,
      data,
      liveTime: undefined
    });
  }

  get hasPanelSnapshot() {
    const {
      panel
    } = this.props;
    return panel.snapshotData && panel.snapshotData.length;
  }

  get wantsQueryExecution() {
    return !(this.props.plugin.meta.skipDataQuery || this.hasPanelSnapshot);
  }

  shouldSignalRenderingCompleted(loadingState, pluginMeta) {
    return loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Done || pluginMeta.skipDataQuery;
  }

  skipFirstRender(loadingState) {
    const {
      isFirstLoad
    } = this.state;
    return this.wantsQueryExecution && isFirstLoad && (loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading || loadingState === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.NotStarted);
  }

  renderPanel(width, height) {
    var _ref, _this$state$liveTime;

    const {
      panel,
      plugin,
      dashboard
    } = this.props;
    const {
      renderCounter,
      data
    } = this.state;
    const {
      theme
    } = app_core_config__WEBPACK_IMPORTED_MODULE_6__["default"];
    const {
      state: loadingState
    } = data; // do not render component until we have first data

    if (this.skipFirstRender(loadingState)) {
      return null;
    } // This is only done to increase a counter that is used by backend
    // image rendering to know when to capture image


    if (this.shouldSignalRenderingCompleted(loadingState, plugin.meta)) {
      app_core_profiler__WEBPACK_IMPORTED_MODULE_8__.profiler.renderingCompleted();
    }

    const PanelComponent = plugin.panel;
    const timeRange = (_ref = (_this$state$liveTime = this.state.liveTime) !== null && _this$state$liveTime !== void 0 ? _this$state$liveTime : data.timeRange) !== null && _ref !== void 0 ? _ref : this.timeSrv.timeRange();
    const headerHeight = this.hasOverlayHeader() ? 0 : theme.panelHeaderHeight;
    const chromePadding = plugin.noPadding ? 0 : theme.panelPadding;
    const panelWidth = width - chromePadding * 2 - app_core_constants__WEBPACK_IMPORTED_MODULE_7__.PANEL_BORDER;
    const innerPanelHeight = height - headerHeight - chromePadding * 2 - app_core_constants__WEBPACK_IMPORTED_MODULE_7__.PANEL_BORDER;
    const panelContentClassNames = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      'panel-content': true,
      'panel-content--no-padding': plugin.noPadding
    });
    const panelOptions = panel.getOptions(); // Update the event filter (dashboard settings may have changed)
    // Yes this is called ever render for a function that is triggered on every mouse move

    this.eventFilter.onlyLocal = dashboard.graphTooltip === 0;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: panelContentClassNames,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.PanelContextProvider, {
          value: this.state.context,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(PanelComponent, {
            id: panel.id,
            data: data,
            title: panel.title,
            timeRange: timeRange,
            timeZone: this.props.dashboard.getTimezone(),
            options: panelOptions,
            fieldConfig: panel.fieldConfig,
            transparent: panel.transparent,
            width: panelWidth,
            height: innerPanelHeight,
            renderCounter: renderCounter,
            replaceVariables: panel.replaceVariables,
            onOptionsChange: this.onOptionsChange,
            onFieldConfigChange: this.onFieldConfigChange,
            onChangeTimeRange: this.onChangeTimeRange,
            eventBus: dashboard.events
          })
        })
      })
    });
  }

  hasOverlayHeader() {
    const {
      panel
    } = this.props;
    const {
      data
    } = this.state; // always show normal header if we have time override

    if (data.request && data.request.timeInfo) {
      return false;
    }

    return !panel.hasTitle();
  }

  render() {
    var _data$alertState;

    const {
      dashboard,
      panel,
      isViewing,
      isEditing,
      width,
      height,
      plugin
    } = this.props;
    const {
      errorMessage,
      data
    } = this.state;
    const {
      transparent
    } = panel;
    const alertState = (_data$alertState = data.alertState) === null || _data$alertState === void 0 ? void 0 : _data$alertState.state;
    const containerClassNames = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      'panel-container': true,
      'panel-container--absolute': (0,_routes_utils__WEBPACK_IMPORTED_MODULE_13__.isSoloRoute)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.getLocation().pathname),
      'panel-container--transparent': transparent,
      'panel-container--no-title': this.hasOverlayHeader(),
      [`panel-alert-state--${alertState}`]: alertState !== undefined
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("section", {
      className: containerClassNames,
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.Panels.Panel.containerByTitle(panel.title),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_PanelHeader_PanelHeader__WEBPACK_IMPORTED_MODULE_18__.PanelHeader, {
        panel: panel,
        dashboard: dashboard,
        title: panel.title,
        description: panel.description,
        links: panel.links,
        error: errorMessage,
        isEditing: isEditing,
        isViewing: isViewing,
        alertState: alertState,
        data: data
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ErrorBoundary, {
        dependencies: [data, plugin, panel.getOptions()],
        onError: this.onPanelError,
        onRecover: this.onPanelErrorRecover,
        children: ({
          error
        }) => {
          if (error) {
            return null;
          }

          return this.renderPanel(width, height);
        }
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelChromeAngular.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelChromeAngular": () => (/* binding */ PanelChromeAngular),
/* harmony export */   "PanelChromeAngularUnconnected": () => (/* binding */ PanelChromeAngularUnconnected)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var app_features_panel_state_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/panel/state/reducers.ts");
/* harmony import */ var app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/panel/state/selectors.ts");
/* harmony import */ var _routes_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/routes/utils.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _PanelHeader_PanelHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeader.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class PanelChromeAngularUnconnected extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "element", null);

    _defineProperty(this, "timeSrv", (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_11__.getTimeSrv)());

    _defineProperty(this, "scopeProps", void 0);

    _defineProperty(this, "subs", new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription());

    this.state = {
      data: {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.NotStarted,
        series: [],
        timeRange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.getDefaultTimeRange)()
      }
    };
  }

  componentDidMount() {
    const {
      panel
    } = this.props;
    this.loadAngularPanel(); // subscribe to data events

    const queryRunner = panel.getQueryRunner(); // we are not displaying any of this data so no need for transforms or field config

    this.subs.add(queryRunner.getData({
      withTransforms: false,
      withFieldConfig: false
    }).subscribe({
      next: data => this.onPanelDataUpdate(data)
    }));
  }

  onPanelDataUpdate(data) {
    let errorMessage;

    if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_3__.LoadingState.Error) {
      const {
        error
      } = data;

      if (error) {
        if (errorMessage !== error.message) {
          errorMessage = error.message;
        }
      }
    }

    this.setState({
      data,
      errorMessage
    });
  }

  componentWillUnmount() {
    this.subs.unsubscribe();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      plugin,
      height,
      width,
      panel
    } = this.props;

    if (prevProps.plugin !== plugin) {
      this.loadAngularPanel();
    }

    if (prevProps.width !== width || prevProps.height !== height) {
      if (this.scopeProps) {
        this.scopeProps.size.height = this.getInnerPanelHeight();
        this.scopeProps.size.width = this.getInnerPanelWidth();
        panel.render();
      }
    }
  }

  getInnerPanelHeight() {
    const {
      plugin,
      height
    } = this.props;
    const {
      theme
    } = app_core_config__WEBPACK_IMPORTED_MODULE_6__["default"];
    const headerHeight = this.hasOverlayHeader() ? 0 : theme.panelHeaderHeight;
    const chromePadding = plugin.noPadding ? 0 : theme.panelPadding;
    return height - headerHeight - chromePadding * 2 - app_core_constants__WEBPACK_IMPORTED_MODULE_7__.PANEL_BORDER;
  }

  getInnerPanelWidth() {
    const {
      plugin,
      width
    } = this.props;
    const {
      theme
    } = app_core_config__WEBPACK_IMPORTED_MODULE_6__["default"];
    const chromePadding = plugin.noPadding ? 0 : theme.panelPadding;
    return width - chromePadding * 2 - app_core_constants__WEBPACK_IMPORTED_MODULE_7__.PANEL_BORDER;
  }

  loadAngularPanel() {
    const {
      panel,
      dashboard,
      setPanelAngularComponent
    } = this.props; // if we have no element or already have loaded the panel return

    if (!this.element) {
      return;
    }

    const loader = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getAngularLoader)();
    const template = '<plugin-component type="panel" class="panel-height-helper"></plugin-component>';
    this.scopeProps = {
      panel: panel,
      dashboard: dashboard,
      size: {
        width: this.getInnerPanelWidth(),
        height: this.getInnerPanelHeight()
      }
    };
    setPanelAngularComponent({
      key: panel.key,
      angularComponent: loader.load(this.element, this.scopeProps, template)
    });
  }

  hasOverlayHeader() {
    const {
      panel
    } = this.props;
    const {
      data
    } = this.state; // always show normal header if we have time override

    if (data.request && data.request.timeInfo) {
      return false;
    }

    return !panel.hasTitle();
  }

  render() {
    var _data$alertState;

    const {
      dashboard,
      panel,
      isViewing,
      isEditing,
      plugin
    } = this.props;
    const {
      errorMessage,
      data
    } = this.state;
    const {
      transparent
    } = panel;
    const alertState = (_data$alertState = data.alertState) === null || _data$alertState === void 0 ? void 0 : _data$alertState.state;
    const containerClassNames = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      'panel-container': true,
      'panel-container--absolute': (0,_routes_utils__WEBPACK_IMPORTED_MODULE_10__.isSoloRoute)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.locationService.getLocation().pathname),
      'panel-container--transparent': transparent,
      'panel-container--no-title': this.hasOverlayHeader(),
      'panel-has-alert': panel.alert !== undefined,
      [`panel-alert-state--${alertState}`]: alertState !== undefined
    });
    const panelContentClassNames = classnames__WEBPACK_IMPORTED_MODULE_0___default()({
      'panel-content': true,
      'panel-content--no-padding': plugin.noPadding
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: containerClassNames,
      "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.Panels.Panel.containerByTitle(panel.title),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_PanelHeader_PanelHeader__WEBPACK_IMPORTED_MODULE_12__.PanelHeader, {
        panel: panel,
        dashboard: dashboard,
        title: panel.title,
        description: panel.description,
        links: panel.links,
        error: errorMessage,
        isViewing: isViewing,
        isEditing: isEditing,
        data: data,
        alertState: alertState
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: panelContentClassNames,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          ref: element => this.element = element,
          className: "panel-height-helper"
        })
      })]
    });
  }

}

const mapStateToProps = (state, props) => {
  var _getPanelStateForMode;

  return {
    angularComponent: (_getPanelStateForMode = (0,app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_9__.getPanelStateForModel)(state, props.panel)) === null || _getPanelStateForMode === void 0 ? void 0 : _getPanelStateForMode.angularComponent
  };
};

const mapDispatchToProps = {
  setPanelAngularComponent: app_features_panel_state_reducers__WEBPACK_IMPORTED_MODULE_8__.setPanelAngularComponent
};
const PanelChromeAngular = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(PanelChromeAngularUnconnected);

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeader": () => (/* binding */ PanelHeader)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_panel_panellinks_linkSuppliers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/panel/panellinks/linkSuppliers.ts");
/* harmony import */ var _PanelHeaderCorner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderCorner.tsx");
/* harmony import */ var _PanelHeaderLoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderLoadingIndicator.tsx");
/* harmony import */ var _PanelHeaderMenuTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuTrigger.tsx");
/* harmony import */ var _PanelHeaderMenuWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuWrapper.tsx");
/* harmony import */ var _PanelHeaderNotices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderNotices.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _Icon2;














const PanelHeader = ({
  panel,
  error,
  isViewing,
  isEditing,
  data,
  alertState,
  dashboard
}) => {
  const onCancelQuery = () => panel.getQueryRunner().cancelQuery();

  const title = panel.getDisplayTitle();
  const className = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)('panel-header', !(isViewing || isEditing) ? 'grid-drag-handle' : '');
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(panelStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PanelHeaderLoadingIndicator__WEBPACK_IMPORTED_MODULE_6__.PanelHeaderLoadingIndicator, {
      state: data.state,
      onClick: onCancelQuery
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PanelHeaderCorner__WEBPACK_IMPORTED_MODULE_5__["default"], {
      panel: panel,
      title: panel.title,
      description: panel.description,
      scopedVars: panel.scopedVars,
      links: (0,app_features_panel_panellinks_linkSuppliers__WEBPACK_IMPORTED_MODULE_4__.getPanelLinksSupplier)(panel),
      error: error
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: className,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PanelHeaderMenuTrigger__WEBPACK_IMPORTED_MODULE_7__.PanelHeaderMenuTrigger, {
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.Panels.Panel.title(title),
        children: ({
          closeMenu,
          panelMenuOpen
        }) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "panel-title",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PanelHeaderNotices__WEBPACK_IMPORTED_MODULE_9__.PanelHeaderNotices, {
              frames: data.series,
              panelId: panel.id
            }), alertState ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
              name: alertState === 'alerting' ? 'heart-break' : 'heart',
              className: "icon-gf panel-alert-icon",
              style: {
                marginRight: '4px'
              },
              size: "sm"
            }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h2", {
              className: styles.titleText,
              children: title
            }), _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
              name: "angle-down",
              className: "panel-menu-toggle"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_PanelHeaderMenuWrapper__WEBPACK_IMPORTED_MODULE_8__.PanelHeaderMenuWrapper, {
              panel: panel,
              dashboard: dashboard,
              show: panelMenuOpen,
              onClose: closeMenu
            }), data.request && data.request.timeInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
              className: "panel-time-info",
              children: [_Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                name: "clock-nine",
                size: "sm"
              })), " ", data.request.timeInfo]
            })]
          });
        }
      })
    })]
  });
};

const panelStyles = theme => {
  return {
    titleText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: calc(100% - 38px);
      cursor: pointer;
      font-weight: ${theme.typography.fontWeightMedium};
      font-size: ${theme.typography.body.fontSize};
      margin: 0;

      &:hover {
        color: ${theme.colors.text.primary};
      }
      .panel-has-alert & {
        max-width: calc(100% - 54px);
      }
    `
  };
};

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderCorner.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderCorner": () => (/* binding */ PanelHeaderCorner),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_inspector_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/inspector/types.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _i, _span;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var InfoMode;

(function (InfoMode) {
  InfoMode["Error"] = "Error";
  InfoMode["Info"] = "Info";
  InfoMode["Links"] = "Links";
})(InfoMode || (InfoMode = {}));

class PanelHeaderCorner extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "timeSrv", (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_5__.getTimeSrv)());

    _defineProperty(this, "getInfoMode", () => {
      const {
        panel,
        error
      } = this.props;

      if (error) {
        return InfoMode.Error;
      }

      if (!!panel.description) {
        return InfoMode.Info;
      }

      if (panel.links && panel.links.length) {
        return InfoMode.Links;
      }

      return undefined;
    });

    _defineProperty(this, "getInfoContent", () => {
      const {
        panel
      } = this.props;
      const markdown = panel.description || '';
      const interpolatedMarkdown = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)().replace(markdown, panel.scopedVars);
      const markedInterpolatedMarkdown = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.renderMarkdown)(interpolatedMarkdown);
      const links = this.props.links && this.props.links.getLinks(panel.replaceVariables);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "panel-info-content markdown-html",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: markedInterpolatedMarkdown
          }
        }), links && links.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", {
          className: "panel-info-corner-links",
          children: links.map((link, idx) => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
                className: "panel-info-corner-links__item",
                href: link.href,
                target: link.target,
                children: link.title
              })
            }, idx);
          })
        })]
      });
    });

    _defineProperty(this, "onClickError", () => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.partial({
        inspect: this.props.panel.id,
        inspectTab: app_features_inspector_types__WEBPACK_IMPORTED_MODULE_6__.InspectTab.Error
      });
    });
  }

  renderCornerType(infoMode, content, onClick) {
    const theme = infoMode === InfoMode.Error ? 'error' : 'info';
    const className = `panel-info-corner panel-info-corner--${infoMode.toLowerCase()}`;
    const ariaLabel = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.Panels.Panel.headerCornerInfo(infoMode.toLowerCase());
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
      content: content,
      placement: "top-start",
      theme: theme,
      interactive: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("section", {
        className: className,
        onClick: onClick,
        "aria-label": ariaLabel,
        children: [_i || (_i = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("i", {
          "aria-hidden": true,
          className: "fa"
        })), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
          className: "panel-info-corner-inner"
        }))]
      })
    });
  }

  render() {
    const {
      error
    } = this.props;
    const infoMode = this.getInfoMode();

    if (!infoMode) {
      return null;
    }

    if (infoMode === InfoMode.Error && error) {
      return this.renderCornerType(infoMode, error, this.onClickError);
    }

    if (infoMode === InfoMode.Info || infoMode === InfoMode.Links) {
      return this.renderCornerType(infoMode, this.getInfoContent);
    }

    return null;
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PanelHeaderCorner);

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderLoadingIndicator.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderLoadingIndicator": () => (/* binding */ PanelHeaderLoadingIndicator)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Tooltip;






const PanelHeaderLoadingIndicator = ({
  state,
  onClick
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);

  if (state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "panel-loading",
      onClick: onClick,
      children: _Tooltip || (_Tooltip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
        content: "Cancel query",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
          className: "panel-loading__spinner spin-clockwise",
          name: "sync"
        })
      }))
    });
  }

  if (state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Streaming) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "panel-loading",
      onClick: onClick,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        title: "Streaming (click to stop)",
        className: styles.streamIndicator
      })
    });
  }

  return null;
};

function getStyles(theme) {
  return {
    streamIndicator: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 10px;
      height: 10px;
      background: ${theme.colors.textFaint};
      box-shadow: 0 0 2px ${theme.colors.textFaint};
      border-radius: 50%;
      position: relative;
      top: 6px;
      right: 1px;
    `
  };
}

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenu.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderMenu": () => (/* binding */ PanelHeaderMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _PanelHeaderMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuItem.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class PanelHeaderMenu extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "renderItems", (menu, isSubMenu = false) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
        className: "dropdown-menu dropdown-menu--menu panel-menu",
        role: isSubMenu ? '' : 'menu',
        children: menu.map((menuItem, idx) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_PanelHeaderMenuItem__WEBPACK_IMPORTED_MODULE_1__.PanelHeaderMenuItem, {
            type: menuItem.type,
            text: menuItem.text,
            iconClassName: menuItem.iconClassName,
            onClick: menuItem.onClick,
            shortcut: menuItem.shortcut,
            children: menuItem.subMenu && this.renderItems(menuItem.subMenu, true)
          }, `${menuItem.text}${idx}`);
        })
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "panel-menu-container dropdown open",
      children: this.renderItems(this.props.items)
    });
  }

}

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuProvider.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderMenuProvider": () => (/* binding */ PanelHeaderMenuProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/panel/state/selectors.ts");
/* harmony import */ var _utils_getPanelMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/utils/getPanelMenu.ts");




const PanelHeaderMenuProvider = ({
  panel,
  dashboard,
  children
}) => {
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const angularComponent = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => {
    var _getPanelStateForMode;

    return (_getPanelStateForMode = (0,app_features_panel_state_selectors__WEBPACK_IMPORTED_MODULE_2__.getPanelStateForModel)(state, panel)) === null || _getPanelStateForMode === void 0 ? void 0 : _getPanelStateForMode.angularComponent;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setItems((0,_utils_getPanelMenu__WEBPACK_IMPORTED_MODULE_3__.getPanelMenu)(dashboard, panel, angularComponent));
  }, [dashboard, panel, angularComponent, setItems]);
  return children({
    items
  });
};

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuTrigger.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderMenuTrigger": () => (/* binding */ PanelHeaderMenuTrigger)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["children"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const PanelHeaderMenuTrigger = _ref => {
  let {
    children
  } = _ref,
      divProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [clickCoordinates, setClickCoordinates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    x: 0,
    y: 0
  });
  const [panelMenuOpen, setPanelMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const onMenuToggle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    if (!isClick(clickCoordinates, eventToClickCoordinates(event))) {
      return;
    }

    event.stopPropagation();
    setPanelMenuOpen(!panelMenuOpen);
  }, [clickCoordinates, panelMenuOpen, setPanelMenuOpen]);
  const onMouseDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    setClickCoordinates(eventToClickCoordinates(event));
  }, [setClickCoordinates]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("header", Object.assign({}, divProps, {
    className: "panel-title-container",
    onClick: onMenuToggle,
    onMouseDown: onMouseDown,
    children: children({
      panelMenuOpen,
      closeMenu: () => setPanelMenuOpen(false)
    })
  }));
};

function isClick(current, clicked) {
  return clicked.x === current.x && clicked.y === current.y;
}

function eventToClickCoordinates(event) {
  return {
    x: Math.floor(event.clientX),
    y: Math.floor(event.clientY)
  };
}

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderMenuWrapper": () => (/* binding */ PanelHeaderMenuWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _PanelHeaderMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenu.tsx");
/* harmony import */ var _PanelHeaderMenuProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderMenuProvider.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const PanelHeaderMenuWrapper = ({
  show,
  onClose,
  panel,
  dashboard
}) => {
  if (!show) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.ClickOutsideWrapper, {
    onClick: onClose,
    parent: document,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PanelHeaderMenuProvider__WEBPACK_IMPORTED_MODULE_3__.PanelHeaderMenuProvider, {
      panel: panel,
      dashboard: dashboard,
      children: ({
        items
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_PanelHeaderMenu__WEBPACK_IMPORTED_MODULE_2__.PanelHeaderMenu, {
          items: items
        });
      }
    })
  });
};

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderNotice.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderNotice": () => (/* binding */ PanelHeaderNotice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const PanelHeaderNotice = ({
  notice,
  onClick
}) => {
  const iconName = notice.severity === 'error' || notice.severity === 'warning' ? 'exclamation-triangle' : 'info-circle';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    content: notice.text,
    children: notice.inspect ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "panel-info-notice pointer",
      onClick: e => onClick(e, notice.inspect),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        name: iconName,
        style: {
          marginRight: '8px'
        }
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
      className: "panel-info-notice",
      href: notice.link,
      target: "_blank",
      rel: "noreferrer",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        name: iconName,
        style: {
          marginRight: '8px'
        }
      })
    })
  }, notice.severity);
};

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderNotices.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderNotices": () => (/* binding */ PanelHeaderNotices)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _PanelHeaderNotice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderNotice.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const PanelHeaderNotices = ({
  frames,
  panelId
}) => {
  const openInspect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e, tab) => {
    e.stopPropagation();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial({
      inspect: panelId,
      inspectTab: tab
    });
  }, [panelId]); // dedupe on severity

  const notices = {};

  for (const frame of frames) {
    if (!frame.meta || !frame.meta.notices) {
      continue;
    }

    for (const notice of frame.meta.notices) {
      notices[notice.severity] = notice;
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: Object.values(notices).map(notice => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_PanelHeaderNotice__WEBPACK_IMPORTED_MODULE_2__.PanelHeaderNotice, {
      notice: notice,
      onClick: openInspect
    }, notice.severity))
  });
};

/***/ }),

/***/ "./public/app/features/dashboard/dashgrid/SeriesVisibilityConfigFactory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "seriesVisibilityConfigFactory": () => (/* binding */ seriesVisibilityConfigFactory)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");


const displayOverrideRef = 'hideSeriesFrom';
const isHideSeriesOverride = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.isSystemOverrideWithRef)(displayOverrideRef);
function seriesVisibilityConfigFactory(label, mode, fieldConfig, data) {
  const {
    overrides
  } = fieldConfig;
  const displayName = label;
  const currentIndex = overrides.findIndex(isHideSeriesOverride);

  if (currentIndex < 0) {
    if (mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SeriesVisibilityChangeMode.ToggleSelection) {
      const override = createOverride([displayName]);
      return Object.assign({}, fieldConfig, {
        overrides: [...fieldConfig.overrides, override]
      });
    }

    const displayNames = getDisplayNames(data, displayName);
    const override = createOverride(displayNames);
    return Object.assign({}, fieldConfig, {
      overrides: [...fieldConfig.overrides, override]
    });
  }

  const overridesCopy = Array.from(overrides);
  const [current] = overridesCopy.splice(currentIndex, 1);

  if (mode === _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.SeriesVisibilityChangeMode.ToggleSelection) {
    const existing = getExistingDisplayNames(current);

    if (existing[0] === displayName && existing.length === 1) {
      return Object.assign({}, fieldConfig, {
        overrides: overridesCopy
      });
    }

    const override = createOverride([displayName]);
    return Object.assign({}, fieldConfig, {
      overrides: [...overridesCopy, override]
    });
  }

  const override = createExtendedOverride(current, displayName);

  if (allFieldsAreExcluded(override, data)) {
    return Object.assign({}, fieldConfig, {
      overrides: overridesCopy
    });
  }

  return Object.assign({}, fieldConfig, {
    overrides: [...overridesCopy, override]
  });
}

function createOverride(names, mode = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude, property) {
  var _property;

  property = (_property = property) !== null && _property !== void 0 ? _property : {
    id: 'custom.hideFrom',
    value: {
      viz: true,
      legend: false,
      tooltip: false
    }
  };
  return {
    __systemRef: displayOverrideRef,
    matcher: {
      id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byNames,
      options: {
        mode: mode,
        names: names,
        prefix: mode === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude ? 'All except:' : undefined,
        readOnly: true
      }
    },
    properties: [Object.assign({}, property, {
      value: {
        viz: true,
        legend: false,
        tooltip: false
      }
    })]
  };
}

const createExtendedOverride = (current, displayName, mode = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ByNamesMatcherMode.exclude) => {
  const property = current.properties.find(p => p.id === 'custom.hideFrom');
  const existing = getExistingDisplayNames(current);
  const index = existing.findIndex(name => name === displayName);

  if (index < 0) {
    existing.push(displayName);
  } else {
    existing.splice(index, 1);
  }

  return createOverride(existing, mode, property);
};

const getExistingDisplayNames = rule => {
  var _rule$matcher$options;

  const names = (_rule$matcher$options = rule.matcher.options) === null || _rule$matcher$options === void 0 ? void 0 : _rule$matcher$options.names;

  if (!Array.isArray(names)) {
    return [];
  }

  return [...names];
};

const allFieldsAreExcluded = (override, data) => {
  return getExistingDisplayNames(override).length === getDisplayNames(data).length;
};

const getDisplayNames = (data, excludeName) => {
  const unique = new Set();

  for (const frame of data) {
    for (const field of frame.fields) {
      if (field.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number) {
        continue;
      }

      const name = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getFieldDisplayName)(field, frame, data);

      if (name === excludeName) {
        continue;
      }

      unique.add(name);
    }
  }

  return Array.from(unique);
};

/***/ }),

/***/ "./public/app/features/dashboard/state/analyticsProcessor.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emitDashboardViewEvent": () => (/* binding */ emitDashboardViewEvent)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

function emitDashboardViewEvent(dashboard) {
  const eventData = {
    dashboardId: dashboard.id,
    dashboardName: dashboard.title,
    dashboardUid: dashboard.uid,
    folderName: dashboard.meta.folderTitle,
    eventName: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.MetaAnalyticsEventName.DashboardView
  };
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportMetaAnalytics)(eventData);
}

/***/ }),

/***/ "./public/app/features/dashboard/state/initDashboard.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNewDashboardModelData": () => (/* binding */ getNewDashboardModelData),
/* harmony export */   "initDashboard": () => (/* binding */ initDashboard),
/* harmony export */   "removeDashboardToFetchFromLocalStorage": () => (/* binding */ removeDashboardToFetchFromLocalStorage),
/* harmony export */   "setDashboardToFetchFromLocalStorage": () => (/* binding */ setDashboardToFetchFromLocalStorage)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_services_keybindingSrv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/keybindingSrv.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/services/DashboardLoaderSrv.ts");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
/* harmony import */ var app_features_variables_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
/* harmony import */ var _variables_state_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/variables/state/actions.ts");
/* harmony import */ var _variables_state_selectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/variables/state/selectors.ts");
/* harmony import */ var _DashboardModel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");
/* harmony import */ var _analyticsProcessor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/dashboard/state/analyticsProcessor.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/dashboard/state/reducers.ts");




















async function fetchDashboard(args, dispatch, getState) {
  // When creating new or adding panels to a dashboard from explore we load it from local storage
  const model = app_core_store__WEBPACK_IMPORTED_MODULE_6__["default"].getObject(DASHBOARD_FROM_LS_KEY);

  if (model) {
    removeDashboardToFetchFromLocalStorage();
    return model;
  }

  try {
    switch (args.routeName) {
      case app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.Home:
        {
          // load home dash
          const dashDTO = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_4__.backendSrv.get('/api/dashboards/home'); // if user specified a custom home dashboard redirect to that

          if (dashDTO.redirectUri) {
            const newUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.locationUtil.stripBaseFromUrl(dashDTO.redirectUri);
            _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.replace(newUrl);
            return null;
          } // disable some actions on the default home dashboard


          dashDTO.meta.canSave = false;
          dashDTO.meta.canShare = false;
          dashDTO.meta.canStar = false;
          return dashDTO;
        }

      case app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.Normal:
        {
          const dashDTO = await app_features_dashboard_services_DashboardLoaderSrv__WEBPACK_IMPORTED_MODULE_7__.dashboardLoaderSrv.loadDashboard(args.urlType, args.urlSlug, args.urlUid);

          if (args.fixUrl && dashDTO.meta.url) {
            // check if the current url is correct (might be old slug)
            const dashboardUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.locationUtil.stripBaseFromUrl(dashDTO.meta.url);
            const currentPath = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation().pathname;

            if (dashboardUrl !== currentPath) {
              // Spread current location to persist search params used for navigation
              _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.replace(Object.assign({}, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation(), {
                pathname: dashboardUrl
              }));
              console.log('not correct url correcting', dashboardUrl, currentPath);
            }
          }

          return dashDTO;
        }

      case app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.New:
        {
          return getNewDashboardModelData(args.urlFolderId);
        }

      default:
        throw {
          message: 'Unknown route ' + args.routeName
        };
    }
  } catch (err) {
    // Ignore cancelled errors
    if (err.cancelled) {
      return null;
    }

    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitFailed)({
      message: 'Failed to fetch dashboard',
      error: err
    }));
    console.error(err);
    return null;
  }
}
/**
 * This action (or saga) does everything needed to bootstrap a dashboard & dashboard model.
 * First it handles the process of fetching the dashboard, correcting the url if required (causing redirects/url updates)
 *
 * This is used both for single dashboard & solo panel routes, home & new dashboard routes.
 *
 * Then it handles the initializing of the old angular services that the dashboard components & panels still depend on
 *
 */


function initDashboard(args) {
  return async (dispatch, getState) => {
    var _args$urlUid;

    // set fetching state
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitFetching)()); // fetch dashboard data

    const dashDTO = await fetchDashboard(args, dispatch, getState); // returns null if there was a redirect or error

    if (!dashDTO) {
      return;
    } // set initializing state


    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitServices)()); // create model

    let dashboard;

    try {
      dashboard = new _DashboardModel__WEBPACK_IMPORTED_MODULE_16__.DashboardModel(dashDTO.dashboard, dashDTO.meta);
    } catch (err) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitFailed)({
        message: 'Failed create dashboard model',
        error: err
      }));
      console.error(err);
      return;
    } // add missing orgId query param


    const storeState = getState();
    const queryParams = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getSearchObject();

    if (!queryParams.orgId) {
      // TODO this is currently not possible with the LocationService API
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial({
        orgId: storeState.user.orgId
      }, true);
    } // init services


    const timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_9__.getTimeSrv)();
    const dashboardSrv = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_8__.getDashboardSrv)(); // legacy srv state, we need this value updated for built-in annotations

    dashboardSrv.setCurrent(dashboard);
    timeSrv.init(dashboard);
    const dashboardUid = (0,app_features_variables_utils__WEBPACK_IMPORTED_MODULE_11__.toStateKey)((_args$urlUid = args.urlUid) !== null && _args$urlUid !== void 0 ? _args$urlUid : dashboard.uid); // template values service needs to initialize completely before the rest of the dashboard can load

    await dispatch((0,_variables_state_actions__WEBPACK_IMPORTED_MODULE_14__.initVariablesTransaction)(dashboardUid, dashboard)); // DashboardQueryRunner needs to run after all variables have been resolved so that any annotation query including a variable
    // will be correctly resolved

    const runner = (0,_query_state_DashboardQueryRunner_DashboardQueryRunner__WEBPACK_IMPORTED_MODULE_13__.createDashboardQueryRunner)({
      dashboard,
      timeSrv
    });
    runner.run({
      dashboard,
      range: timeSrv.timeRange()
    });

    if ((0,_variables_state_selectors__WEBPACK_IMPORTED_MODULE_15__.getIfExistsLastKey)(getState()) !== dashboardUid) {
      // if a previous dashboard has slow running variable queries the batch uid will be the new one
      // but the args.urlUid will be the same as before initVariablesTransaction was called so then we can't continue initializing
      // the previous dashboard.
      return;
    } // If dashboard is in a different init phase it means it cancelled during service init


    if (getState().dashboard.initPhase !== app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardInitPhase.Services) {
      return;
    }

    try {
      dashboard.processRepeats(); // handle auto fix experimental feature

      if (queryParams.autofitpanels) {
        dashboard.autoFitPanels(window.innerHeight, queryParams.kiosk);
      }

      app_core_services_keybindingSrv__WEBPACK_IMPORTED_MODULE_5__.keybindingSrv.setupDashboardBindings(dashboard);
    } catch (err) {
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createErrorNotification)('Dashboard init failed', err)));
      console.error(err);
    } // send open dashboard event


    if (args.routeName !== app_types__WEBPACK_IMPORTED_MODULE_12__.DashboardRoutes.New) {
      (0,_analyticsProcessor__WEBPACK_IMPORTED_MODULE_17__.emitDashboardViewEvent)(dashboard); // Listen for changes on the current dashboard

      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_10__.dashboardWatcher.watch(dashboard.uid);
    } else {
      app_features_live_dashboard_dashboardWatcher__WEBPACK_IMPORTED_MODULE_10__.dashboardWatcher.leave();
    } // set week start


    if (dashboard.weekStart !== '') {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.setWeekStart)(dashboard.weekStart);
    } else {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.setWeekStart)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.bootData.user.weekStart);
    } // yay we are done


    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_18__.dashboardInitCompleted)(dashboard));
  };
}
function getNewDashboardModelData(urlFolderId) {
  const data = {
    meta: {
      canStar: false,
      canShare: false,
      isNew: true,
      folderId: 0
    },
    dashboard: {
      title: 'New dashboard',
      panels: [{
        type: 'add-panel',
        gridPos: {
          x: 0,
          y: 0,
          w: 12,
          h: 9
        },
        title: 'Panel Title'
      }]
    }
  };

  if (urlFolderId) {
    data.meta.folderId = parseInt(urlFolderId, 10);
  }

  return data;
}
const DASHBOARD_FROM_LS_KEY = 'DASHBOARD_FROM_LS_KEY';
function setDashboardToFetchFromLocalStorage(model) {
  app_core_store__WEBPACK_IMPORTED_MODULE_6__["default"].setObject(DASHBOARD_FROM_LS_KEY, model);
}
function removeDashboardToFetchFromLocalStorage() {
  app_core_store__WEBPACK_IMPORTED_MODULE_6__["default"]["delete"](DASHBOARD_FROM_LS_KEY);
}

/***/ }),

/***/ "./public/app/features/dashboard/utils/getPanelMenu.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPanelMenu": () => (/* binding */ getPanelMenu)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
/* harmony import */ var app_features_library_panels_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/library-panels/guard.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _core_utils_explore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/utils/explore.ts");
/* harmony import */ var _explore_state_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/explore/state/main.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");









function getPanelMenu(dashboard, panel, angularComponent) {
  const onViewPanel = event => {
    event.preventDefault();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.partial({
      viewPanel: panel.id
    });
  };

  const onEditPanel = event => {
    event.preventDefault();
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.partial({
      editPanel: panel.id
    });
  };

  const onSharePanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.sharePanel)(dashboard, panel);
  };

  const onAddLibraryPanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.addLibraryPanel)(dashboard, panel);
  };

  const onUnlinkLibraryPanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.unlinkLibraryPanel)(panel);
  };

  const onInspectPanel = tab => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.partial({
      inspect: panel.id,
      inspectTab: tab
    });
  };

  const onMore = event => {
    event.preventDefault();
  };

  const onDuplicatePanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.duplicatePanel)(dashboard, panel);
  };

  const onCopyPanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.copyPanel)(panel);
  };

  const onRemovePanel = event => {
    event.preventDefault();
    (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_2__.removePanel)(dashboard, panel, true);
  };

  const onNavigateToExplore = event => {
    event.preventDefault();
    const openInNewWindow = event.ctrlKey || event.metaKey ? url => window.open(`${app_core_config__WEBPACK_IMPORTED_MODULE_1__["default"].appSubUrl}${url}`) : undefined;
    app_store_store__WEBPACK_IMPORTED_MODULE_4__.store.dispatch((0,_explore_state_main__WEBPACK_IMPORTED_MODULE_7__.navigateToExplore)(panel, {
      getDataSourceSrv: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getDataSourceSrv,
      getTimeSrv: _services_TimeSrv__WEBPACK_IMPORTED_MODULE_8__.getTimeSrv,
      getExploreUrl: _core_utils_explore__WEBPACK_IMPORTED_MODULE_6__.getExploreUrl,
      openInNewWindow
    }));
  };

  const menu = [];

  if (!panel.isEditing) {
    menu.push({
      text: 'View',
      iconClassName: 'eye',
      onClick: onViewPanel,
      shortcut: 'v'
    });
  }

  if (dashboard.canEditPanel(panel) && !panel.isEditing) {
    menu.push({
      text: 'Edit',
      iconClassName: 'edit',
      onClick: onEditPanel,
      shortcut: 'e'
    });
  }

  menu.push({
    text: 'Share',
    iconClassName: 'share-alt',
    onClick: onSharePanel,
    shortcut: 'p s'
  });

  if (_core_services_context_srv__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasAccessToExplore() && !(panel.plugin && panel.plugin.meta.skipDataQuery)) {
    menu.push({
      text: 'Explore',
      iconClassName: 'compass',
      shortcut: 'x',
      onClick: onNavigateToExplore
    });
  }

  const inspectMenu = []; // Only show these inspect actions for data plugins

  if (panel.plugin && !panel.plugin.meta.skipDataQuery) {
    inspectMenu.push({
      text: 'Data',
      onClick: e => onInspectPanel('data')
    });

    if (dashboard.meta.canEdit) {
      inspectMenu.push({
        text: 'Query',
        onClick: e => onInspectPanel('query')
      });
    }
  }

  inspectMenu.push({
    text: 'Panel JSON',
    onClick: e => onInspectPanel('json')
  });
  menu.push({
    type: 'submenu',
    text: 'Inspect',
    iconClassName: 'info-circle',
    onClick: e => onInspectPanel(),
    shortcut: 'i',
    subMenu: inspectMenu
  });
  const subMenu = [];

  if (dashboard.canEditPanel(panel) && !(panel.isViewing || panel.isEditing)) {
    subMenu.push({
      text: 'Duplicate',
      onClick: onDuplicatePanel,
      shortcut: 'p d'
    });
    subMenu.push({
      text: 'Copy',
      onClick: onCopyPanel
    });

    if ((0,app_features_library_panels_guard__WEBPACK_IMPORTED_MODULE_3__.isPanelModelLibraryPanel)(panel)) {
      subMenu.push({
        text: 'Unlink library panel',
        onClick: onUnlinkLibraryPanel
      });
    } else {
      subMenu.push({
        text: 'Create library panel',
        onClick: onAddLibraryPanel
      });
    }
  } // add old angular panel options


  if (angularComponent) {
    const scope = angularComponent.getScope();
    const panelCtrl = scope.$$childHead.ctrl;
    const angularMenuItems = panelCtrl.getExtendedMenu();

    for (const item of angularMenuItems) {
      const reactItem = {
        text: item.text,
        href: item.href,
        shortcut: item.shortcut
      };

      if (item.click) {
        reactItem.onClick = () => {
          scope.$eval(item.click, {
            ctrl: panelCtrl
          });
        };
      }

      subMenu.push(reactItem);
    }
  }

  if (!panel.isEditing && subMenu.length) {
    menu.push({
      type: 'submenu',
      text: 'More...',
      iconClassName: 'cube',
      subMenu,
      onClick: onMore
    });
  }

  if (dashboard.canEditPanel(panel) && !panel.isEditing && !panel.isViewing) {
    menu.push({
      type: 'divider',
      text: ''
    });
    menu.push({
      text: 'Remove',
      iconClassName: 'trash-alt',
      onClick: onRemovePanel,
      shortcut: 'p r'
    });
  }

  return menu;
}

/***/ }),

/***/ "./public/app/features/dashboard/utils/loadSnapshotData.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadSnapshotData": () => (/* binding */ loadSnapshotData)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _query_state_DashboardQueryRunner_SnapshotWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/SnapshotWorker.ts");
/* harmony import */ var _query_state_runRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/query/state/runRequest.ts");
/* harmony import */ var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");






function loadSnapshotData(panel, dashboard) {
  const data = (0,_query_state_runRequest__WEBPACK_IMPORTED_MODULE_3__.getProcessedDataFrames)(panel.snapshotData);
  const worker = new _query_state_DashboardQueryRunner_SnapshotWorker__WEBPACK_IMPORTED_MODULE_2__.SnapshotWorker();
  const options = {
    dashboard,
    range: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDefaultTimeRange)()
  };
  const annotationEvents = worker.canWork(options) ? worker.getAnnotationsInSnapshot(dashboard, panel.id) : [];
  const annotations = [new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayDataFrame(annotationEvents)];
  const timeData = (0,_panel__WEBPACK_IMPORTED_MODULE_5__.applyPanelTimeOverrides)(panel, (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__.getTimeSrv)().timeRange());
  return {
    timeRange: timeData.timeRange,
    state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
    series: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.applyFieldOverrides)({
      data,
      fieldConfig: {
        defaults: {},
        overrides: []
      },
      replaceVariables: panel.replaceVariables,
      fieldConfigRegistry: panel.plugin.fieldConfigRegistry,
      theme: app_core_config__WEBPACK_IMPORTED_MODULE_1__.config.theme2,
      timeZone: dashboard.getTimezone()
    }),
    annotations
  };
}

/***/ }),

/***/ "./public/app/features/inspector/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InspectTab": () => (/* binding */ InspectTab)
/* harmony export */ });
let InspectTab;

(function (InspectTab) {
  InspectTab["Data"] = "data";
  InspectTab["Meta"] = "meta";
  InspectTab["Error"] = "error";
  InspectTab["Stats"] = "stats";
  InspectTab["JSON"] = "json";
  InspectTab["Query"] = "query";
  InspectTab["Actions"] = "actions";
})(InspectTab || (InspectTab = {}));

/***/ }),

/***/ "./public/app/features/panel/panellinks/linkSuppliers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFieldLinksSupplier": () => (/* binding */ getFieldLinksSupplier),
/* harmony export */   "getPanelLinksSupplier": () => (/* binding */ getPanelLinksSupplier)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _link_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/panel/panellinks/link_srv.ts");



/**
 * Link suppliers creates link models based on a link origin
 */
const getFieldLinksSupplier = value => {
  const links = value.field.links;

  if (!links || links.length === 0) {
    return undefined;
  }

  return {
    getLinks: replaceVariables => {
      const scopedVars = {};

      if (value.view) {
        const {
          dataFrame
        } = value.view;
        scopedVars['__series'] = {
          value: {
            name: dataFrame.name,
            refId: dataFrame.refId
          },
          text: 'Series'
        };
        const field = value.colIndex !== undefined ? dataFrame.fields[value.colIndex] : undefined;

        if (field) {
          scopedVars['__field'] = {
            value: {
              name: field.name,
              labels: field.labels
            },
            text: 'Field'
          };

          if (value.rowIndex !== undefined && value.rowIndex >= 0) {
            const {
              timeField
            } = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getTimeField)(dataFrame);
            scopedVars['__value'] = {
              value: {
                raw: field.values.get(value.rowIndex),
                numeric: value.display.numeric,
                text: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.formattedValueToString)(value.display),
                time: timeField ? timeField.values.get(value.rowIndex) : undefined
              },
              text: 'Value'
            };
          } // Expose other values on the row


          if (value.view) {
            scopedVars['__data'] = {
              value: {
                name: dataFrame.name,
                refId: dataFrame.refId,
                fields: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getFieldDisplayValuesProxy)({
                  frame: dataFrame,
                  rowIndex: value.rowIndex
                })
              },
              text: 'Data'
            };
          }
        } else {
          // calculation
          scopedVars['__value'] = {
            value: {
              raw: value.display.numeric,
              numeric: value.display.numeric,
              text: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.formattedValueToString)(value.display),
              calc: value.name
            },
            text: 'Value'
          };
        }
      } else {
        console.log('VALUE', value);
      }

      const replace = (value, vars, fmt) => {
        const finalVars = Object.assign({}, scopedVars, vars);
        return replaceVariables(value, finalVars, fmt);
      };

      return links.map(link => {
        return (0,_link_srv__WEBPACK_IMPORTED_MODULE_1__.getLinkSrv)().getDataLinkUIModel(link, replace, value);
      });
    }
  };
};
const getPanelLinksSupplier = panel => {
  const links = panel.links;

  if (!links || links.length === 0) {
    return undefined;
  }

  return {
    getLinks: () => {
      return links.map(link => {
        return (0,_link_srv__WEBPACK_IMPORTED_MODULE_1__.getLinkSrv)().getDataLinkUIModel(link, panel.replaceVariables, panel);
      });
    }
  };
};

/***/ }),

/***/ "./public/app/features/panel/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPanelStateForModel": () => (/* binding */ getPanelStateForModel)
/* harmony export */ });
function getPanelStateForModel(state, model) {
  return state.panels[model.key];
}

/***/ }),

/***/ "./public/app/plugins/panel/timeseries/overrides/colorSeriesConfigFactory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeSeriesColorConfigFactory": () => (/* binding */ changeSeriesColorConfigFactory)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");

const changeSeriesColorConfigFactory = (label, color, fieldConfig) => {
  const {
    overrides
  } = fieldConfig;
  const currentIndex = fieldConfig.overrides.findIndex(override => {
    return override.matcher.id === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName && override.matcher.options === label;
  });

  if (currentIndex < 0) {
    return Object.assign({}, fieldConfig, {
      overrides: [...fieldConfig.overrides, createOverride(label, color)]
    });
  }

  const overridesCopy = Array.from(overrides);
  const existing = overridesCopy[currentIndex];
  const propertyIndex = existing.properties.findIndex(p => p.id === 'color');

  if (propertyIndex < 0) {
    overridesCopy[currentIndex] = Object.assign({}, existing, {
      properties: [...existing.properties, createProperty(color)]
    });
    return Object.assign({}, fieldConfig, {
      overrides: overridesCopy
    });
  }

  const propertiesCopy = Array.from(existing.properties);
  propertiesCopy[propertyIndex] = createProperty(color);
  overridesCopy[currentIndex] = Object.assign({}, existing, {
    properties: propertiesCopy
  });
  return Object.assign({}, fieldConfig, {
    overrides: overridesCopy
  });
};

const createOverride = (label, color) => {
  return {
    matcher: {
      id: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldMatcherID.byName,
      options: label
    },
    properties: [createProperty(color)]
  };
};

const createProperty = color => {
  return {
    id: 'color',
    value: {
      mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed,
      fixedColor: color
    }
  };
};

/***/ }),

/***/ "./public/app/routes/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSoloRoute": () => (/* binding */ isSoloRoute)
/* harmony export */ });
function isSoloRoute(path) {
  return /(d-solo|dashboard-solo)/.test(path === null || path === void 0 ? void 0 : path.toLowerCase());
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFRWMsSUFBQUEsVUFBVSxFQUFFcUw7QUFGZDtBQUtBLDJCQUNLNWQsV0FETDtBQUVFNlEsSUFBQUEsU0FBUyxFQUFFUztBQUZiO0FBSUQsQ0E3Q007O0FBK0NQLE1BQU1ILGNBQWMsR0FBRyxDQUFDdFIsS0FBRCxFQUFnQkMsS0FBaEIsS0FBc0Q7QUFDM0UsU0FBTztBQUNMcVMsSUFBQUEsT0FBTyxFQUFFO0FBQ1A3VyxNQUFBQSxFQUFFLEVBQUVnVixnRUFERztBQUVQaFEsTUFBQUEsT0FBTyxFQUFFVDtBQUZGLEtBREo7QUFLTDBTLElBQUFBLFVBQVUsRUFBRSxDQUFDb0wsY0FBYyxDQUFDN2QsS0FBRCxDQUFmO0FBTFAsR0FBUDtBQU9ELENBUkQ7O0FBVUEsTUFBTTZkLGNBQWMsR0FBSTdkLEtBQUQsSUFBdUM7QUFDNUQsU0FBTztBQUNMeEUsSUFBQUEsRUFBRSxFQUFFLE9BREM7QUFFTGxCLElBQUFBLEtBQUssRUFBRTtBQUNMNkYsTUFBQUEsSUFBSSxFQUFFdWQsaUVBREQ7QUFFTE0sTUFBQUEsVUFBVSxFQUFFaGU7QUFGUDtBQUZGLEdBQVA7QUFPRCxDQVJEOzs7Ozs7Ozs7OztBQ2pFTyxTQUFTNUIsV0FBVCxDQUFxQjZmLElBQXJCLEVBQTRDO0FBQ2pELFNBQU8sMEJBQTBCQyxJQUExQixDQUErQkQsSUFBL0IsYUFBK0JBLElBQS9CLHVCQUErQkEsSUFBSSxDQUFFblIsV0FBTixFQUEvQixDQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvY29udGFpbmVycy9Tb2xvUGFuZWxQYWdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGdyaWQvRGFzaGJvYXJkUGFuZWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9kYXNoZ3JpZC9MYXp5TG9hZGVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGdyaWQvUGFuZWxDaHJvbWUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9kYXNoZ3JpZC9QYW5lbENocm9tZUFuZ3VsYXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9kYXNoZ3JpZC9QYW5lbEhlYWRlci9QYW5lbEhlYWRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hncmlkL1BhbmVsSGVhZGVyL1BhbmVsSGVhZGVyQ29ybmVyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGdyaWQvUGFuZWxIZWFkZXIvUGFuZWxIZWFkZXJMb2FkaW5nSW5kaWNhdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGdyaWQvUGFuZWxIZWFkZXIvUGFuZWxIZWFkZXJNZW51LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGdyaWQvUGFuZWxIZWFkZXIvUGFuZWxIZWFkZXJNZW51UHJvdmlkZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9kYXNoZ3JpZC9QYW5lbEhlYWRlci9QYW5lbEhlYWRlck1lbnVUcmlnZ2VyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGdyaWQvUGFuZWxIZWFkZXIvUGFuZWxIZWFkZXJNZW51V3JhcHBlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hncmlkL1BhbmVsSGVhZGVyL1BhbmVsSGVhZGVyTm90aWNlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGdyaWQvUGFuZWxIZWFkZXIvUGFuZWxIZWFkZXJOb3RpY2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZGFzaGdyaWQvU2VyaWVzVmlzaWJpbGl0eUNvbmZpZ0ZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlL2FuYWx5dGljc1Byb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUvaW5pdERhc2hib2FyZC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvdXRpbHMvZ2V0UGFuZWxNZW51LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC91dGlscy9sb2FkU25hcHNob3REYXRhLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2luc3BlY3Rvci90eXBlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9wYW5lbC9wYW5lbGxpbmtzL2xpbmtTdXBwbGllcnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvcGFuZWwvc3RhdGUvc2VsZWN0b3JzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvcGFuZWwvdGltZXNlcmllcy9vdmVycmlkZXMvY29sb3JTZXJpZXNDb25maWdGYWN0b3J5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3JvdXRlcy91dGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQXV0b1NpemVyIGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkLWF1dG8tc2l6ZXInO1xuXG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwsIFBhbmVsTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRQYW5lbCB9IGZyb20gJy4uL2Rhc2hncmlkL0Rhc2hib2FyZFBhbmVsJztcbmltcG9ydCB7IGluaXREYXNoYm9hcmQgfSBmcm9tICcuLi9zdGF0ZS9pbml0RGFzaGJvYXJkJztcblxuZXhwb3J0IGludGVyZmFjZSBEYXNoYm9hcmRQYWdlUm91dGVQYXJhbXMge1xuICB1aWQ/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIHNsdWc/OiBzdHJpbmc7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gKHtcbiAgZGFzaGJvYXJkOiBzdGF0ZS5kYXNoYm9hcmQuZ2V0TW9kZWwoKSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGluaXREYXNoYm9hcmQsXG59O1xuXG5jb25zdCBjb25uZWN0b3IgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKTtcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczxEYXNoYm9hcmRQYWdlUm91dGVQYXJhbXMsIHsgcGFuZWxJZDogc3RyaW5nIH0+ICZcbiAgQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj47XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBwYW5lbDogUGFuZWxNb2RlbCB8IG51bGw7XG4gIG5vdEZvdW5kOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgU29sb1BhbmVsUGFnZSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIHBhbmVsOiBudWxsLFxuICAgIG5vdEZvdW5kOiBmYWxzZSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG1hdGNoLCByb3V0ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMucHJvcHMuaW5pdERhc2hib2FyZCh7XG4gICAgICB1cmxTbHVnOiBtYXRjaC5wYXJhbXMuc2x1ZyxcbiAgICAgIHVybFVpZDogbWF0Y2gucGFyYW1zLnVpZCxcbiAgICAgIHVybFR5cGU6IG1hdGNoLnBhcmFtcy50eXBlLFxuICAgICAgcm91dGVOYW1lOiByb3V0ZS5yb3V0ZU5hbWUsXG4gICAgICBmaXhVcmw6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UGFuZWxJZCgpOiBudW1iZXIge1xuICAgIHJldHVybiBwYXJzZUludCh0aGlzLnByb3BzLnF1ZXJ5UGFyYW1zLnBhbmVsSWQgPz8gJzAnLCAxMCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBQcm9wcykge1xuICAgIGNvbnN0IHsgZGFzaGJvYXJkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFkYXNoYm9hcmQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB3ZSBqdXN0IGdvdCBhIG5ldyBkYXNoYm9hcmRcbiAgICBpZiAoIXByZXZQcm9wcy5kYXNoYm9hcmQgfHwgcHJldlByb3BzLmRhc2hib2FyZC51aWQgIT09IGRhc2hib2FyZC51aWQpIHtcbiAgICAgIGNvbnN0IHBhbmVsID0gZGFzaGJvYXJkLmdldFBhbmVsQnlVcmxJZCh0aGlzLnByb3BzLnF1ZXJ5UGFyYW1zLnBhbmVsSWQpO1xuXG4gICAgICBpZiAoIXBhbmVsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBub3RGb3VuZDogdHJ1ZSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGFuZWwgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U29sb1BhbmVsXG4gICAgICAgIGRhc2hib2FyZD17dGhpcy5wcm9wcy5kYXNoYm9hcmR9XG4gICAgICAgIG5vdEZvdW5kPXt0aGlzLnN0YXRlLm5vdEZvdW5kfVxuICAgICAgICBwYW5lbD17dGhpcy5zdGF0ZS5wYW5lbH1cbiAgICAgICAgcGFuZWxJZD17dGhpcy5nZXRQYW5lbElkKCl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTb2xvUGFuZWxQcm9wcyBleHRlbmRzIFN0YXRlIHtcbiAgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbCB8IG51bGw7XG4gIHBhbmVsSWQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFNvbG9QYW5lbCA9ICh7IGRhc2hib2FyZCwgbm90Rm91bmQsIHBhbmVsLCBwYW5lbElkIH06IFNvbG9QYW5lbFByb3BzKSA9PiB7XG4gIGlmIChub3RGb3VuZCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWVycm9yXCI+UGFuZWwgd2l0aCBpZCB7cGFuZWxJZH0gbm90IGZvdW5kPC9kaXY+O1xuICB9XG5cbiAgaWYgKCFwYW5lbCB8fCAhZGFzaGJvYXJkKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZyAmIGluaXRpYWxpemluZyBkYXNoYm9hcmQ8L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtc29sb1wiPlxuICAgICAgPEF1dG9TaXplcj5cbiAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgICAgICAgIGlmICh3aWR0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RGFzaGJvYXJkUGFuZWxcbiAgICAgICAgICAgICAgc3RhdGVLZXk9e3BhbmVsLmtleX1cbiAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgZGFzaGJvYXJkPXtkYXNoYm9hcmR9XG4gICAgICAgICAgICAgIHBhbmVsPXtwYW5lbH1cbiAgICAgICAgICAgICAgaXNFZGl0aW5nPXtmYWxzZX1cbiAgICAgICAgICAgICAgaXNWaWV3aW5nPXtmYWxzZX1cbiAgICAgICAgICAgICAgbGF6eT17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH19XG4gICAgICA8L0F1dG9TaXplcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihTb2xvUGFuZWxQYWdlKTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBpbml0UGFuZWxTdGF0ZSB9IGZyb20gJy4uLy4uL3BhbmVsL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2V0UGFuZWxJbnN0YW5jZVN0YXRlIH0gZnJvbSAnLi4vLi4vcGFuZWwvc3RhdGUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwsIFBhbmVsTW9kZWwgfSBmcm9tICcuLi9zdGF0ZSc7XG5cbmltcG9ydCB7IExhenlMb2FkZXIgfSBmcm9tICcuL0xhenlMb2FkZXInO1xuaW1wb3J0IHsgUGFuZWxDaHJvbWUgfSBmcm9tICcuL1BhbmVsQ2hyb21lJztcbmltcG9ydCB7IFBhbmVsQ2hyb21lQW5ndWxhciB9IGZyb20gJy4vUGFuZWxDaHJvbWVBbmd1bGFyJztcblxuZXhwb3J0IGludGVyZmFjZSBPd25Qcm9wcyB7XG4gIHBhbmVsOiBQYW5lbE1vZGVsO1xuICBzdGF0ZUtleTogc3RyaW5nO1xuICBkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsO1xuICBpc0VkaXRpbmc6IGJvb2xlYW47XG4gIGlzVmlld2luZzogYm9vbGVhbjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxhenk/OiBib29sZWFuO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFN0b3JlU3RhdGUsIHByb3BzOiBPd25Qcm9wcykgPT4ge1xuICBjb25zdCBwYW5lbFN0YXRlID0gc3RhdGUucGFuZWxzW3Byb3BzLnN0YXRlS2V5XTtcbiAgaWYgKCFwYW5lbFN0YXRlKSB7XG4gICAgcmV0dXJuIHsgcGx1Z2luOiBudWxsIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsdWdpbjogcGFuZWxTdGF0ZS5wbHVnaW4sXG4gICAgaW5zdGFuY2VTdGF0ZTogcGFuZWxTdGF0ZS5pbnN0YW5jZVN0YXRlLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBpbml0UGFuZWxTdGF0ZSxcbiAgc2V0UGFuZWxJbnN0YW5jZVN0YXRlLFxufTtcblxuY29uc3QgY29ubmVjdG9yID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyk7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFBhbmVsVW5jb25uZWN0ZWQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFBhcnRpYWw8UHJvcHM+ID0ge1xuICAgIGxhenk6IHRydWUsXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5wYW5lbC5pc0luVmlldyA9ICF0aGlzLnByb3BzLmxhenk7XG4gICAgaWYgKCF0aGlzLnByb3BzLmxhenkpIHtcbiAgICAgIHRoaXMub25QYW5lbExvYWQoKTtcbiAgICB9XG4gIH1cblxuICBvbkluc3RhbmNlU3RhdGVDaGFuZ2UgPSAodmFsdWU6IGFueSkgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0UGFuZWxJbnN0YW5jZVN0YXRlKHsga2V5OiB0aGlzLnByb3BzLnN0YXRlS2V5LCB2YWx1ZSB9KTtcbiAgfTtcblxuICBvblZpc2liaWxpdHlDaGFuZ2UgPSAodjogYm9vbGVhbikgPT4ge1xuICAgIHRoaXMucHJvcHMucGFuZWwuaXNJblZpZXcgPSB2O1xuICB9O1xuXG4gIG9uUGFuZWxMb2FkID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5wbHVnaW4pIHtcbiAgICAgIHRoaXMucHJvcHMuaW5pdFBhbmVsU3RhdGUodGhpcy5wcm9wcy5wYW5lbCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhc2hib2FyZCwgcGFuZWwsIGlzVmlld2luZywgaXNFZGl0aW5nLCB3aWR0aCwgaGVpZ2h0LCBsYXp5LCBwbHVnaW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCByZW5kZXJQYW5lbENocm9tZSA9IChpc0luVmlldzogYm9vbGVhbikgPT5cbiAgICAgIHBsdWdpbiAmJlxuICAgICAgKHBsdWdpbi5hbmd1bGFyUGFuZWxDdHJsID8gKFxuICAgICAgICA8UGFuZWxDaHJvbWVBbmd1bGFyXG4gICAgICAgICAgcGx1Z2luPXtwbHVnaW59XG4gICAgICAgICAgcGFuZWw9e3BhbmVsfVxuICAgICAgICAgIGRhc2hib2FyZD17ZGFzaGJvYXJkfVxuICAgICAgICAgIGlzVmlld2luZz17aXNWaWV3aW5nfVxuICAgICAgICAgIGlzRWRpdGluZz17aXNFZGl0aW5nfVxuICAgICAgICAgIGlzSW5WaWV3PXtpc0luVmlld31cbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8UGFuZWxDaHJvbWVcbiAgICAgICAgICBwbHVnaW49e3BsdWdpbn1cbiAgICAgICAgICBwYW5lbD17cGFuZWx9XG4gICAgICAgICAgZGFzaGJvYXJkPXtkYXNoYm9hcmR9XG4gICAgICAgICAgaXNWaWV3aW5nPXtpc1ZpZXdpbmd9XG4gICAgICAgICAgaXNFZGl0aW5nPXtpc0VkaXRpbmd9XG4gICAgICAgICAgaXNJblZpZXc9e2lzSW5WaWV3fVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBvbkluc3RhbmNlU3RhdGVDaGFuZ2U9e3RoaXMub25JbnN0YW5jZVN0YXRlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgKSk7XG5cbiAgICByZXR1cm4gbGF6eSA/IChcbiAgICAgIDxMYXp5TG9hZGVyIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IG9uQ2hhbmdlPXt0aGlzLm9uVmlzaWJpbGl0eUNoYW5nZX0gb25Mb2FkPXt0aGlzLm9uUGFuZWxMb2FkfT5cbiAgICAgICAgeyh7IGlzSW5WaWV3IH0pID0+IHJlbmRlclBhbmVsQ2hyb21lKGlzSW5WaWV3KX1cbiAgICAgIDwvTGF6eUxvYWRlcj5cbiAgICApIDogKFxuICAgICAgcmVuZGVyUGFuZWxDaHJvbWUodHJ1ZSlcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEYXNoYm9hcmRQYW5lbCA9IGNvbm5lY3RvcihEYXNoYm9hcmRQYW5lbFVuY29ubmVjdGVkKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0T25jZSB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCB7IHVzZVVuaXF1ZUlkIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9pbmZsdXhkYi9jb21wb25lbnRzL3VzZVVuaXF1ZUlkJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfCAoKHsgaXNJblZpZXcgfTogeyBpc0luVmlldzogYm9vbGVhbiB9KSA9PiBSZWFjdC5SZWFjdE5vZGUpO1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xuICBvbkxvYWQ/OiAoKSA9PiB2b2lkO1xuICBvbkNoYW5nZT86IChpc0luVmlldzogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExhenlMb2FkZXIoeyBjaGlsZHJlbiwgd2lkdGgsIGhlaWdodCwgb25Mb2FkLCBvbkNoYW5nZSB9OiBQcm9wcykge1xuICBjb25zdCBpZCA9IHVzZVVuaXF1ZUlkKCk7XG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0luVmlldywgc2V0SXNJblZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB3cmFwcGVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICB1c2VFZmZlY3RPbmNlKCgpID0+IHtcbiAgICBMYXp5TG9hZGVyLmFkZENhbGxiYWNrKGlkLCAoZW50cnkpID0+IHtcbiAgICAgIGlmICghbG9hZGVkICYmIGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgICAgb25Mb2FkPy4oKTtcbiAgICAgIH1cblxuICAgICAgc2V0SXNJblZpZXcoZW50cnkuaXNJbnRlcnNlY3RpbmcpO1xuICAgICAgb25DaGFuZ2U/LihlbnRyeS5pc0ludGVyc2VjdGluZyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCB3cmFwcGVyRWwgPSB3cmFwcGVyUmVmLmN1cnJlbnQ7XG5cbiAgICBpZiAod3JhcHBlckVsKSB7XG4gICAgICBMYXp5TG9hZGVyLm9ic2VydmVyLm9ic2VydmUod3JhcHBlckVsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGVsZXRlIExhenlMb2FkZXIuY2FsbGJhY2tzW2lkXTtcbiAgICAgIHdyYXBwZXJFbCAmJiBMYXp5TG9hZGVyLm9ic2VydmVyLnVub2JzZXJ2ZSh3cmFwcGVyRWwpO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKExhenlMb2FkZXIuY2FsbGJhY2tzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgTGF6eUxvYWRlci5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPXtpZH0gcmVmPXt3cmFwcGVyUmVmfSBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19PlxuICAgICAge2xvYWRlZCAmJiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oeyBpc0luVmlldyB9KSA6IGNoaWxkcmVuKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuTGF6eUxvYWRlci5jYWxsYmFja3MgPSB7fSBhcyBSZWNvcmQ8c3RyaW5nLCAoZTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSkgPT4gdm9pZD47XG5MYXp5TG9hZGVyLmFkZENhbGxiYWNrID0gKGlkOiBzdHJpbmcsIGM6IChlOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KSA9PiB2b2lkKSA9PiAoTGF6eUxvYWRlci5jYWxsYmFja3NbaWRdID0gYyk7XG5MYXp5TG9hZGVyLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAoZW50cmllcykgPT4ge1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgTGF6eUxvYWRlci5jYWxsYmFja3NbZW50cnkudGFyZ2V0LmlkXShlbnRyeSk7XG4gICAgfVxuICB9LFxuICB7IHJvb3RNYXJnaW46ICcxMDBweCcgfVxuKTtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgQWJzb2x1dGVUaW1lUmFuZ2UsXG4gIEFubm90YXRpb25DaGFuZ2VFdmVudCxcbiAgQW5ub3RhdGlvbkV2ZW50VUlNb2RlbCxcbiAgQ29yZUFwcCxcbiAgRGFzaGJvYXJkQ3Vyc29yU3luYyxcbiAgRXZlbnRGaWx0ZXJPcHRpb25zLFxuICBGaWVsZENvbmZpZ1NvdXJjZSxcbiAgZ2V0RGVmYXVsdFRpbWVSYW5nZSxcbiAgTG9hZGluZ1N0YXRlLFxuICBQYW5lbERhdGEsXG4gIFBhbmVsUGx1Z2luLFxuICBQYW5lbFBsdWdpbk1ldGEsXG4gIFRpbWVSYW5nZSxcbiAgdG9EYXRhRnJhbWVEVE8sXG4gIHRvVXRjLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHNlbGVjdG9ycyB9IGZyb20gJ0BncmFmYW5hL2UyZS1zZWxlY3RvcnMnO1xuaW1wb3J0IHsgbG9jYXRpb25TZXJ2aWNlLCBSZWZyZXNoRXZlbnQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFZpekxlZ2VuZE9wdGlvbnMgfSBmcm9tICdAZ3JhZmFuYS9zY2hlbWEnO1xuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSwgUGFuZWxDb250ZXh0LCBQYW5lbENvbnRleHRQcm92aWRlciwgU2VyaWVzVmlzaWJpbGl0eUNoYW5nZU1vZGUgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBQQU5FTF9CT1JERVIgfSBmcm9tICdhcHAvY29yZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgcHJvZmlsZXIgfSBmcm9tICdhcHAvY29yZS9wcm9maWxlcic7XG5pbXBvcnQgeyBhcHBseVBhbmVsVGltZU92ZXJyaWRlcyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvdXRpbHMvcGFuZWwnO1xuaW1wb3J0IHsgY2hhbmdlU2VyaWVzQ29sb3JDb25maWdGYWN0b3J5IH0gZnJvbSAnYXBwL3BsdWdpbnMvcGFuZWwvdGltZXNlcmllcy9vdmVycmlkZXMvY29sb3JTZXJpZXNDb25maWdGYWN0b3J5JztcbmltcG9ydCB7IFJlbmRlckV2ZW50IH0gZnJvbSAnYXBwL3R5cGVzL2V2ZW50cyc7XG5cbmltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IGlzU29sb1JvdXRlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGVzL3V0aWxzJztcbmltcG9ydCB7IGRlbGV0ZUFubm90YXRpb24sIHNhdmVBbm5vdGF0aW9uLCB1cGRhdGVBbm5vdGF0aW9uIH0gZnJvbSAnLi4vLi4vYW5ub3RhdGlvbnMvYXBpJztcbmltcG9ydCB7IGdldERhc2hib2FyZFF1ZXJ5UnVubmVyIH0gZnJvbSAnLi4vLi4vcXVlcnkvc3RhdGUvRGFzaGJvYXJkUXVlcnlSdW5uZXIvRGFzaGJvYXJkUXVlcnlSdW5uZXInO1xuaW1wb3J0IHsgZ2V0VGltZVNydiwgVGltZVNydiB9IGZyb20gJy4uL3NlcnZpY2VzL1RpbWVTcnYnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwsIFBhbmVsTW9kZWwgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBsb2FkU25hcHNob3REYXRhIH0gZnJvbSAnLi4vdXRpbHMvbG9hZFNuYXBzaG90RGF0YSc7XG5cbmltcG9ydCB7IFBhbmVsSGVhZGVyIH0gZnJvbSAnLi9QYW5lbEhlYWRlci9QYW5lbEhlYWRlcic7XG5pbXBvcnQgeyBzZXJpZXNWaXNpYmlsaXR5Q29uZmlnRmFjdG9yeSB9IGZyb20gJy4vU2VyaWVzVmlzaWJpbGl0eUNvbmZpZ0ZhY3RvcnknO1xuaW1wb3J0IHsgbGl2ZVRpbWVyIH0gZnJvbSAnLi9saXZlVGltZXInO1xuXG5jb25zdCBERUZBVUxUX1BMVUdJTl9FUlJPUiA9ICdFcnJvciBpbiBwbHVnaW4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFuZWw6IFBhbmVsTW9kZWw7XG4gIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gIHBsdWdpbjogUGFuZWxQbHVnaW47XG4gIGlzVmlld2luZzogYm9vbGVhbjtcbiAgaXNFZGl0aW5nOiBib29sZWFuO1xuICBpc0luVmlldzogYm9vbGVhbjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIG9uSW5zdGFuY2VTdGF0ZUNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBpc0ZpcnN0TG9hZDogYm9vbGVhbjtcbiAgcmVuZGVyQ291bnRlcjogbnVtYmVyO1xuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XG4gIHJlZnJlc2hXaGVuSW5WaWV3OiBib29sZWFuO1xuICBjb250ZXh0OiBQYW5lbENvbnRleHQ7XG4gIGRhdGE6IFBhbmVsRGF0YTtcbiAgbGl2ZVRpbWU/OiBUaW1lUmFuZ2U7XG59XG5cbmV4cG9ydCBjbGFzcyBQYW5lbENocm9tZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgdGltZVNydjogVGltZVNydiA9IGdldFRpbWVTcnYoKTtcbiAgcHJpdmF0ZSBzdWJzID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBwcml2YXRlIGV2ZW50RmlsdGVyOiBFdmVudEZpbHRlck9wdGlvbnMgPSB7IG9ubHlMb2NhbDogdHJ1ZSB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIC8vIENhbiB0aGlzIGV2ZW50QnVzIGJlIG9uIFBhbmVsTW9kZWw/ICB3aGVuIHdlIGhhdmUgbW9yZSBjb21wbGV4IGV2ZW50IGZpbHRlcmluZywgdGhhdCBtYXkgYmUgYSBiZXR0ZXIgb3B0aW9uXG4gICAgY29uc3QgZXZlbnRCdXMgPSBwcm9wcy5kYXNoYm9hcmQuZXZlbnRzLm5ld1Njb3BlZEJ1cyhgcGFuZWw6JHtwcm9wcy5wYW5lbC5pZH1gLCB0aGlzLmV2ZW50RmlsdGVyKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0ZpcnN0TG9hZDogdHJ1ZSxcbiAgICAgIHJlbmRlckNvdW50ZXI6IDAsXG4gICAgICByZWZyZXNoV2hlbkluVmlldzogZmFsc2UsXG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIGV2ZW50QnVzLFxuICAgICAgICBhcHA6IHRoaXMuZ2V0UGFuZWxDb250ZXh0QXBwKCksXG4gICAgICAgIHN5bmM6IHRoaXMuZ2V0U3luYyxcbiAgICAgICAgb25TZXJpZXNDb2xvckNoYW5nZTogdGhpcy5vblNlcmllc0NvbG9yQ2hhbmdlLFxuICAgICAgICBvblRvZ2dsZVNlcmllc1Zpc2liaWxpdHk6IHRoaXMub25TZXJpZXNWaXNpYmlsaXR5Q2hhbmdlLFxuICAgICAgICBvbkFubm90YXRpb25DcmVhdGU6IHRoaXMub25Bbm5vdGF0aW9uQ3JlYXRlLFxuICAgICAgICBvbkFubm90YXRpb25VcGRhdGU6IHRoaXMub25Bbm5vdGF0aW9uVXBkYXRlLFxuICAgICAgICBvbkFubm90YXRpb25EZWxldGU6IHRoaXMub25Bbm5vdGF0aW9uRGVsZXRlLFxuICAgICAgICBjYW5BZGRBbm5vdGF0aW9uczogdGhpcy5jYW5BZGRBbm5vdGF0aW9uLFxuICAgICAgICBvbkluc3RhbmNlU3RhdGVDaGFuZ2U6IHRoaXMub25JbnN0YW5jZVN0YXRlQ2hhbmdlLFxuICAgICAgICBvblRvZ2dsZUxlZ2VuZFNvcnQ6IHRoaXMub25Ub2dnbGVMZWdlbmRTb3J0LFxuICAgICAgICBjYW5FZGl0QW5ub3RhdGlvbnM6IHRoaXMuY2FuRWRpdEFubm90YXRpb24sXG4gICAgICAgIGNhbkRlbGV0ZUFubm90YXRpb25zOiB0aGlzLmNhbkRlbGV0ZUFubm90YXRpb24sXG4gICAgICB9LFxuICAgICAgZGF0YTogdGhpcy5nZXRJbml0aWFsUGFuZWxEYXRhU3RhdGUoKSxcbiAgICB9O1xuICB9XG5cbiAgY2FuRWRpdERhc2hib2FyZCA9ICgpID0+IEJvb2xlYW4odGhpcy5wcm9wcy5kYXNoYm9hcmQubWV0YS5jYW5FZGl0IHx8IHRoaXMucHJvcHMuZGFzaGJvYXJkLm1ldGEuY2FuTWFrZUVkaXRhYmxlKTtcblxuICBjYW5BZGRBbm5vdGF0aW9uID0gKCkgPT4ge1xuICAgIGxldCBjYW5BZGQgPSB0cnVlO1xuXG4gICAgaWYgKGNvbnRleHRTcnYuYWNjZXNzQ29udHJvbEVuYWJsZWQoKSkge1xuICAgICAgY2FuQWRkID0gISF0aGlzLnByb3BzLmRhc2hib2FyZC5tZXRhLmFubm90YXRpb25zUGVybWlzc2lvbnM/LmRhc2hib2FyZC5jYW5BZGQ7XG4gICAgfVxuICAgIHJldHVybiBjYW5BZGQgJiYgdGhpcy5jYW5FZGl0RGFzaGJvYXJkKCk7XG4gIH07XG5cbiAgY2FuRWRpdEFubm90YXRpb24gPSAoZGFzaGJvYXJkSWQ6IG51bWJlcikgPT4ge1xuICAgIGxldCBjYW5FZGl0ID0gdHJ1ZTtcblxuICAgIGlmIChjb250ZXh0U3J2LmFjY2Vzc0NvbnRyb2xFbmFibGVkKCkpIHtcbiAgICAgIGlmIChkYXNoYm9hcmRJZCAhPT0gMCkge1xuICAgICAgICBjYW5FZGl0ID0gISF0aGlzLnByb3BzLmRhc2hib2FyZC5tZXRhLmFubm90YXRpb25zUGVybWlzc2lvbnM/LmRhc2hib2FyZC5jYW5FZGl0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuRWRpdCA9ICEhdGhpcy5wcm9wcy5kYXNoYm9hcmQubWV0YS5hbm5vdGF0aW9uc1Blcm1pc3Npb25zPy5vcmdhbml6YXRpb24uY2FuRWRpdDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNhbkVkaXQgJiYgdGhpcy5jYW5FZGl0RGFzaGJvYXJkKCk7XG4gIH07XG5cbiAgY2FuRGVsZXRlQW5ub3RhdGlvbiA9IChkYXNoYm9hcmRJZDogbnVtYmVyKSA9PiB7XG4gICAgbGV0IGNhbkRlbGV0ZSA9IHRydWU7XG5cbiAgICBpZiAoY29udGV4dFNydi5hY2Nlc3NDb250cm9sRW5hYmxlZCgpKSB7XG4gICAgICBpZiAoZGFzaGJvYXJkSWQgIT09IDApIHtcbiAgICAgICAgY2FuRGVsZXRlID0gISF0aGlzLnByb3BzLmRhc2hib2FyZC5tZXRhLmFubm90YXRpb25zUGVybWlzc2lvbnM/LmRhc2hib2FyZC5jYW5EZWxldGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5EZWxldGUgPSAhIXRoaXMucHJvcHMuZGFzaGJvYXJkLm1ldGEuYW5ub3RhdGlvbnNQZXJtaXNzaW9ucz8ub3JnYW5pemF0aW9uLmNhbkRlbGV0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNhbkRlbGV0ZSAmJiB0aGlzLmNhbkVkaXREYXNoYm9hcmQoKTtcbiAgfTtcblxuICAvLyBEdWUgdG8gYSBtdXRhYmxlIHBhbmVsIG1vZGVsIHdlIGdldCB0aGUgc3luYyBzZXR0aW5ncyB2aWEgZnVuY3Rpb24gdGhhdCBwcm9hY3RpdmVseSByZWFkcyBmcm9tIHRoZSBtb2RlbFxuICBnZXRTeW5jID0gKCkgPT4gKHRoaXMucHJvcHMuaXNFZGl0aW5nID8gRGFzaGJvYXJkQ3Vyc29yU3luYy5PZmYgOiB0aGlzLnByb3BzLmRhc2hib2FyZC5ncmFwaFRvb2x0aXApO1xuXG4gIG9uSW5zdGFuY2VTdGF0ZUNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkluc3RhbmNlU3RhdGVDaGFuZ2UodmFsdWUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIC4uLnRoaXMuc3RhdGUuY29udGV4dCxcbiAgICAgICAgaW5zdGFuY2VTdGF0ZTogdmFsdWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGdldFBhbmVsQ29udGV4dEFwcCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc0VkaXRpbmcpIHtcbiAgICAgIHJldHVybiBDb3JlQXBwLlBhbmVsRWRpdG9yO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5pc1ZpZXdpbmcpIHtcbiAgICAgIHJldHVybiBDb3JlQXBwLlBhbmVsVmlld2VyO1xuICAgIH1cblxuICAgIHJldHVybiBDb3JlQXBwLkRhc2hib2FyZDtcbiAgfVxuXG4gIG9uU2VyaWVzQ29sb3JDaGFuZ2UgPSAobGFiZWw6IHN0cmluZywgY29sb3I6IHN0cmluZykgPT4ge1xuICAgIHRoaXMub25GaWVsZENvbmZpZ0NoYW5nZShjaGFuZ2VTZXJpZXNDb2xvckNvbmZpZ0ZhY3RvcnkobGFiZWwsIGNvbG9yLCB0aGlzLnByb3BzLnBhbmVsLmZpZWxkQ29uZmlnKSk7XG4gIH07XG5cbiAgb25TZXJpZXNWaXNpYmlsaXR5Q2hhbmdlID0gKGxhYmVsOiBzdHJpbmcsIG1vZGU6IFNlcmllc1Zpc2liaWxpdHlDaGFuZ2VNb2RlKSA9PiB7XG4gICAgdGhpcy5vbkZpZWxkQ29uZmlnQ2hhbmdlKFxuICAgICAgc2VyaWVzVmlzaWJpbGl0eUNvbmZpZ0ZhY3RvcnkobGFiZWwsIG1vZGUsIHRoaXMucHJvcHMucGFuZWwuZmllbGRDb25maWcsIHRoaXMuc3RhdGUuZGF0YS5zZXJpZXMpXG4gICAgKTtcbiAgfTtcblxuICBvblRvZ2dsZUxlZ2VuZFNvcnQgPSAoc29ydEtleTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbGVnZW5kT3B0aW9uczogVml6TGVnZW5kT3B0aW9ucyA9IHRoaXMucHJvcHMucGFuZWwub3B0aW9ucy5sZWdlbmQ7XG5cbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIGRvIGFueXRoaW5nIHdoZW4gbGVnZW5kIG9wdGlvbnMgYXJlIG5vdCBhdmFpbGFibGVcbiAgICBpZiAoIWxlZ2VuZE9wdGlvbnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc29ydERlc2MgPSBsZWdlbmRPcHRpb25zLnNvcnREZXNjO1xuICAgIGxldCBzb3J0QnkgPSBsZWdlbmRPcHRpb25zLnNvcnRCeTtcbiAgICBpZiAoc29ydEtleSAhPT0gc29ydEJ5KSB7XG4gICAgICBzb3J0RGVzYyA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvLyBpZiBhbHJlYWR5IHNvcnQgYXNjZW5kaW5nLCBkaXNhYmxlIHNvcnRpbmdcbiAgICBpZiAoc29ydERlc2MgPT09IGZhbHNlKSB7XG4gICAgICBzb3J0QnkgPSB1bmRlZmluZWQ7XG4gICAgICBzb3J0RGVzYyA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgc29ydERlc2MgPSAhc29ydERlc2M7XG4gICAgICBzb3J0QnkgPSBzb3J0S2V5O1xuICAgIH1cblxuICAgIHRoaXMub25PcHRpb25zQ2hhbmdlKHtcbiAgICAgIC4uLnRoaXMucHJvcHMucGFuZWwub3B0aW9ucyxcbiAgICAgIGxlZ2VuZDogeyAuLi5sZWdlbmRPcHRpb25zLCBzb3J0QnksIHNvcnREZXNjIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgZ2V0SW5pdGlhbFBhbmVsRGF0YVN0YXRlKCk6IFBhbmVsRGF0YSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuTm90U3RhcnRlZCxcbiAgICAgIHNlcmllczogW10sXG4gICAgICB0aW1lUmFuZ2U6IGdldERlZmF1bHRUaW1lUmFuZ2UoKSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBwYW5lbCwgZGFzaGJvYXJkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gU3Vic2NyaWJlIHRvIHBhbmVsIGV2ZW50c1xuICAgIHRoaXMuc3Vicy5hZGQocGFuZWwuZXZlbnRzLnN1YnNjcmliZShSZWZyZXNoRXZlbnQsIHRoaXMub25SZWZyZXNoKSk7XG4gICAgdGhpcy5zdWJzLmFkZChwYW5lbC5ldmVudHMuc3Vic2NyaWJlKFJlbmRlckV2ZW50LCB0aGlzLm9uUmVuZGVyKSk7XG5cbiAgICBkYXNoYm9hcmQucGFuZWxJbml0aWFsaXplZCh0aGlzLnByb3BzLnBhbmVsKTtcblxuICAgIC8vIE1vdmUgc25hcHNob3QgZGF0YSBpbnRvIHRoZSBxdWVyeSByZXNwb25zZVxuICAgIGlmICh0aGlzLmhhc1BhbmVsU25hcHNob3QpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkYXRhOiBsb2FkU25hcHNob3REYXRhKHBhbmVsLCBkYXNoYm9hcmQpLFxuICAgICAgICBpc0ZpcnN0TG9hZDogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMud2FudHNRdWVyeUV4ZWN1dGlvbikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRmlyc3RMb2FkOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnN1YnMuYWRkKFxuICAgICAgcGFuZWxcbiAgICAgICAgLmdldFF1ZXJ5UnVubmVyKClcbiAgICAgICAgLmdldERhdGEoeyB3aXRoVHJhbnNmb3JtczogdHJ1ZSwgd2l0aEZpZWxkQ29uZmlnOiB0cnVlIH0pXG4gICAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6IChkYXRhKSA9PiB0aGlzLm9uRGF0YVVwZGF0ZShkYXRhKSxcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gTGlzdGVuIGZvciBsaXZlIHRpbWVyIGV2ZW50c1xuICAgIGxpdmVUaW1lci5saXN0ZW4odGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnN1YnMudW5zdWJzY3JpYmUoKTtcbiAgICBsaXZlVGltZXIucmVtb3ZlKHRoaXMpO1xuICB9XG5cbiAgbGl2ZVRpbWVDaGFuZ2VkKGxpdmVUaW1lOiBUaW1lUmFuZ2UpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGRhdGEudGltZVJhbmdlKSB7XG4gICAgICBjb25zdCBkZWx0YSA9IGxpdmVUaW1lLnRvLnZhbHVlT2YoKSAtIGRhdGEudGltZVJhbmdlLnRvLnZhbHVlT2YoKTtcbiAgICAgIGlmIChkZWx0YSA8IDEwMCkge1xuICAgICAgICAvLyAxMGh6XG4gICAgICAgIGNvbnNvbGUubG9nKCdTa2lwIHRpY2sgcmVuZGVyJywgdGhpcy5wcm9wcy5wYW5lbC50aXRsZSwgZGVsdGEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBsaXZlVGltZSB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzKSB7XG4gICAgY29uc3QgeyBpc0luVmlldywgd2lkdGggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjb250ZXh0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgYXBwID0gdGhpcy5nZXRQYW5lbENvbnRleHRBcHAoKTtcblxuICAgIGlmIChjb250ZXh0LmFwcCAhPT0gYXBwKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgIC4uLmNvbnRleHQsXG4gICAgICAgICAgYXBwLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVmlldyBzdGF0ZSBoYXMgY2hhbmdlZFxuICAgIGlmIChpc0luVmlldyAhPT0gcHJldlByb3BzLmlzSW5WaWV3KSB7XG4gICAgICBpZiAoaXNJblZpZXcpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCBhIGRlbGF5ZWQgcmVmcmVzaFxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5yZWZyZXNoV2hlbkluVmlldykge1xuICAgICAgICAgIHRoaXMub25SZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGUgdGltZXIgZGVwZW5kcyBvbiBwYW5lbCB3aWR0aFxuICAgIGlmICh3aWR0aCAhPT0gcHJldlByb3BzLndpZHRoKSB7XG4gICAgICBsaXZlVGltZXIudXBkYXRlSW50ZXJ2YWwodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlcyB0aGUgcmVzcG9uc2Ugd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBzdHJlYW1cbiAgLy8gVGhlIG5leHQgaXMgb3V0c2lkZSBhIHJlYWN0IHN5bnRoZXRpYyBldmVudCBzbyBzZXRTdGF0ZSBpcyBub3QgYmF0Y2hlZFxuICAvLyBTbyBpbiB0aGlzIGNvbnRleHQgd2UgY2FuIG9ubHkgZG8gYSBzaW5nbGUgY2FsbCB0byBzZXRTdGF0ZVxuICBvbkRhdGFVcGRhdGUoZGF0YTogUGFuZWxEYXRhKSB7XG4gICAgY29uc3QgeyBkYXNoYm9hcmQsIHBhbmVsLCBwbHVnaW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBJZ25vcmUgdGhpcyBkYXRhIHVwZGF0ZSBpZiB3ZSBhcmUgbm93IGEgbm9uIGRhdGEgcGFuZWxcbiAgICBpZiAocGx1Z2luLm1ldGEuc2tpcERhdGFRdWVyeSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHRoaXMuZ2V0SW5pdGlhbFBhbmVsRGF0YVN0YXRlKCkgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHsgaXNGaXJzdExvYWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGVycm9yTWVzc2FnZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgc3dpdGNoIChkYXRhLnN0YXRlKSB7XG4gICAgICBjYXNlIExvYWRpbmdTdGF0ZS5Mb2FkaW5nOlxuICAgICAgICAvLyBTa2lwIHVwZGF0aW5nIHN0YXRlIGRhdGEgaWYgaXQgaXMgYWxyZWFkeSBpbiBsb2FkaW5nIHN0YXRlXG4gICAgICAgIC8vIFRoaXMgaXMgdG8gYXZvaWQgcmVuZGVyaW5nIHBhcnRpYWwgbG9hZGluZyByZXNwb25zZXNcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YS5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkxvYWRpbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvYWRpbmdTdGF0ZS5FcnJvcjpcbiAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gZGF0YTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSAhPT0gZXJyb3IubWVzc2FnZSkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvYWRpbmdTdGF0ZS5Eb25lOlxuICAgICAgICAvLyBJZiB3ZSBhcmUgZG9pbmcgYSBzbmFwc2hvdCBzYXZlIGRhdGEgaW4gcGFuZWwgbW9kZWxcbiAgICAgICAgaWYgKGRhc2hib2FyZC5zbmFwc2hvdCkge1xuICAgICAgICAgIHBhbmVsLnNuYXBzaG90RGF0YSA9IGRhdGEuc2VyaWVzLm1hcCgoZnJhbWUpID0+IHRvRGF0YUZyYW1lRFRPKGZyYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRmlyc3RMb2FkKSB7XG4gICAgICAgICAgaXNGaXJzdExvYWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNGaXJzdExvYWQsIGVycm9yTWVzc2FnZSwgZGF0YSwgbGl2ZVRpbWU6IHVuZGVmaW5lZCB9KTtcbiAgfVxuXG4gIG9uUmVmcmVzaCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhbmVsLCBpc0luVmlldywgd2lkdGggfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWlzSW5WaWV3KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcmVmcmVzaFdoZW5JblZpZXc6IHRydWUgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGltZURhdGEgPSBhcHBseVBhbmVsVGltZU92ZXJyaWRlcyhwYW5lbCwgdGhpcy50aW1lU3J2LnRpbWVSYW5nZSgpKTtcblxuICAgIC8vIElzc3VlIFF1ZXJ5XG4gICAgaWYgKHRoaXMud2FudHNRdWVyeUV4ZWN1dGlvbikge1xuICAgICAgaWYgKHdpZHRoIDwgMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLnJlZnJlc2hXaGVuSW5WaWV3KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWZyZXNoV2hlbkluVmlldzogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgICBwYW5lbC5ydW5BbGxQYW5lbFF1ZXJpZXModGhpcy5wcm9wcy5kYXNoYm9hcmQuaWQsIHRoaXMucHJvcHMuZGFzaGJvYXJkLmdldFRpbWV6b25lKCksIHRpbWVEYXRhLCB3aWR0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBwYW5lbCBzaG91bGQgcmVuZGVyIG9uIHJlZnJlc2ggYXMgd2VsbCBpZiBpdCBkb2Vzbid0IGhhdmUgYSBxdWVyeSwgbGlrZSBjbG9jayBwYW5lbFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRhdGE6IHsgLi4udGhpcy5zdGF0ZS5kYXRhLCB0aW1lUmFuZ2U6IHRoaXMudGltZVNydi50aW1lUmFuZ2UoKSB9LFxuICAgICAgICByZW5kZXJDb3VudGVyOiB0aGlzLnN0YXRlLnJlbmRlckNvdW50ZXIgKyAxLFxuICAgICAgICBsaXZlVGltZTogdW5kZWZpbmVkLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uUmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlVXBkYXRlID0geyByZW5kZXJDb3VudGVyOiB0aGlzLnN0YXRlLnJlbmRlckNvdW50ZXIgKyAxIH07XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZVVwZGF0ZSk7XG4gIH07XG5cbiAgb25PcHRpb25zQ2hhbmdlID0gKG9wdGlvbnM6IGFueSkgPT4ge1xuICAgIHRoaXMucHJvcHMucGFuZWwudXBkYXRlT3B0aW9ucyhvcHRpb25zKTtcbiAgfTtcblxuICBvbkZpZWxkQ29uZmlnQ2hhbmdlID0gKGNvbmZpZzogRmllbGRDb25maWdTb3VyY2UpID0+IHtcbiAgICB0aGlzLnByb3BzLnBhbmVsLnVwZGF0ZUZpZWxkQ29uZmlnKGNvbmZpZyk7XG4gIH07XG5cbiAgb25QYW5lbEVycm9yID0gKGVycm9yOiBFcnJvcikgPT4ge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2UgfHwgREVGQVVMVF9QTFVHSU5fRVJST1I7XG4gICAgaWYgKHRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlICE9PSBlcnJvck1lc3NhZ2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uUGFuZWxFcnJvclJlY292ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogdW5kZWZpbmVkIH0pO1xuICB9O1xuXG4gIG9uQW5ub3RhdGlvbkNyZWF0ZSA9IGFzeW5jIChldmVudDogQW5ub3RhdGlvbkV2ZW50VUlNb2RlbCkgPT4ge1xuICAgIGNvbnN0IGlzUmVnaW9uID0gZXZlbnQuZnJvbSAhPT0gZXZlbnQudG87XG4gICAgY29uc3QgYW5ubyA9IHtcbiAgICAgIGRhc2hib2FyZElkOiB0aGlzLnByb3BzLmRhc2hib2FyZC5pZCxcbiAgICAgIHBhbmVsSWQ6IHRoaXMucHJvcHMucGFuZWwuaWQsXG4gICAgICBpc1JlZ2lvbixcbiAgICAgIHRpbWU6IGV2ZW50LmZyb20sXG4gICAgICB0aW1lRW5kOiBpc1JlZ2lvbiA/IGV2ZW50LnRvIDogMCxcbiAgICAgIHRhZ3M6IGV2ZW50LnRhZ3MsXG4gICAgICB0ZXh0OiBldmVudC5kZXNjcmlwdGlvbixcbiAgICB9O1xuICAgIGF3YWl0IHNhdmVBbm5vdGF0aW9uKGFubm8pO1xuICAgIGdldERhc2hib2FyZFF1ZXJ5UnVubmVyKCkucnVuKHsgZGFzaGJvYXJkOiB0aGlzLnByb3BzLmRhc2hib2FyZCwgcmFuZ2U6IHRoaXMudGltZVNydi50aW1lUmFuZ2UoKSB9KTtcbiAgICB0aGlzLnN0YXRlLmNvbnRleHQuZXZlbnRCdXMucHVibGlzaChuZXcgQW5ub3RhdGlvbkNoYW5nZUV2ZW50KGFubm8pKTtcbiAgfTtcblxuICBvbkFubm90YXRpb25EZWxldGUgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xuICAgIGF3YWl0IGRlbGV0ZUFubm90YXRpb24oeyBpZCB9KTtcbiAgICBnZXREYXNoYm9hcmRRdWVyeVJ1bm5lcigpLnJ1bih7IGRhc2hib2FyZDogdGhpcy5wcm9wcy5kYXNoYm9hcmQsIHJhbmdlOiB0aGlzLnRpbWVTcnYudGltZVJhbmdlKCkgfSk7XG4gICAgdGhpcy5zdGF0ZS5jb250ZXh0LmV2ZW50QnVzLnB1Ymxpc2gobmV3IEFubm90YXRpb25DaGFuZ2VFdmVudCh7IGlkIH0pKTtcbiAgfTtcblxuICBvbkFubm90YXRpb25VcGRhdGUgPSBhc3luYyAoZXZlbnQ6IEFubm90YXRpb25FdmVudFVJTW9kZWwpID0+IHtcbiAgICBjb25zdCBpc1JlZ2lvbiA9IGV2ZW50LmZyb20gIT09IGV2ZW50LnRvO1xuICAgIGNvbnN0IGFubm8gPSB7XG4gICAgICBpZDogZXZlbnQuaWQsXG4gICAgICBkYXNoYm9hcmRJZDogdGhpcy5wcm9wcy5kYXNoYm9hcmQuaWQsXG4gICAgICBwYW5lbElkOiB0aGlzLnByb3BzLnBhbmVsLmlkLFxuICAgICAgaXNSZWdpb24sXG4gICAgICB0aW1lOiBldmVudC5mcm9tLFxuICAgICAgdGltZUVuZDogaXNSZWdpb24gPyBldmVudC50byA6IDAsXG4gICAgICB0YWdzOiBldmVudC50YWdzLFxuICAgICAgdGV4dDogZXZlbnQuZGVzY3JpcHRpb24sXG4gICAgfTtcbiAgICBhd2FpdCB1cGRhdGVBbm5vdGF0aW9uKGFubm8pO1xuXG4gICAgZ2V0RGFzaGJvYXJkUXVlcnlSdW5uZXIoKS5ydW4oeyBkYXNoYm9hcmQ6IHRoaXMucHJvcHMuZGFzaGJvYXJkLCByYW5nZTogdGhpcy50aW1lU3J2LnRpbWVSYW5nZSgpIH0pO1xuICAgIHRoaXMuc3RhdGUuY29udGV4dC5ldmVudEJ1cy5wdWJsaXNoKG5ldyBBbm5vdGF0aW9uQ2hhbmdlRXZlbnQoYW5ubykpO1xuICB9O1xuXG4gIGdldCBoYXNQYW5lbFNuYXBzaG90KCkge1xuICAgIGNvbnN0IHsgcGFuZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIHBhbmVsLnNuYXBzaG90RGF0YSAmJiBwYW5lbC5zbmFwc2hvdERhdGEubGVuZ3RoO1xuICB9XG5cbiAgZ2V0IHdhbnRzUXVlcnlFeGVjdXRpb24oKSB7XG4gICAgcmV0dXJuICEodGhpcy5wcm9wcy5wbHVnaW4ubWV0YS5za2lwRGF0YVF1ZXJ5IHx8IHRoaXMuaGFzUGFuZWxTbmFwc2hvdCk7XG4gIH1cblxuICBvbkNoYW5nZVRpbWVSYW5nZSA9ICh0aW1lUmFuZ2U6IEFic29sdXRlVGltZVJhbmdlKSA9PiB7XG4gICAgdGhpcy50aW1lU3J2LnNldFRpbWUoe1xuICAgICAgZnJvbTogdG9VdGModGltZVJhbmdlLmZyb20pLFxuICAgICAgdG86IHRvVXRjKHRpbWVSYW5nZS50byksXG4gICAgfSk7XG4gIH07XG5cbiAgc2hvdWxkU2lnbmFsUmVuZGVyaW5nQ29tcGxldGVkKGxvYWRpbmdTdGF0ZTogTG9hZGluZ1N0YXRlLCBwbHVnaW5NZXRhOiBQYW5lbFBsdWdpbk1ldGEpIHtcbiAgICByZXR1cm4gbG9hZGluZ1N0YXRlID09PSBMb2FkaW5nU3RhdGUuRG9uZSB8fCBwbHVnaW5NZXRhLnNraXBEYXRhUXVlcnk7XG4gIH1cblxuICBza2lwRmlyc3RSZW5kZXIobG9hZGluZ1N0YXRlOiBMb2FkaW5nU3RhdGUpIHtcbiAgICBjb25zdCB7IGlzRmlyc3RMb2FkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLndhbnRzUXVlcnlFeGVjdXRpb24gJiZcbiAgICAgIGlzRmlyc3RMb2FkICYmXG4gICAgICAobG9hZGluZ1N0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZyB8fCBsb2FkaW5nU3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Ob3RTdGFydGVkKVxuICAgICk7XG4gIH1cblxuICByZW5kZXJQYW5lbCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgIGNvbnN0IHsgcGFuZWwsIHBsdWdpbiwgZGFzaGJvYXJkIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcmVuZGVyQ291bnRlciwgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSBjb25maWc7XG4gICAgY29uc3QgeyBzdGF0ZTogbG9hZGluZ1N0YXRlIH0gPSBkYXRhO1xuXG4gICAgLy8gZG8gbm90IHJlbmRlciBjb21wb25lbnQgdW50aWwgd2UgaGF2ZSBmaXJzdCBkYXRhXG4gICAgaWYgKHRoaXMuc2tpcEZpcnN0UmVuZGVyKGxvYWRpbmdTdGF0ZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIHRvIGluY3JlYXNlIGEgY291bnRlciB0aGF0IGlzIHVzZWQgYnkgYmFja2VuZFxuICAgIC8vIGltYWdlIHJlbmRlcmluZyB0byBrbm93IHdoZW4gdG8gY2FwdHVyZSBpbWFnZVxuICAgIGlmICh0aGlzLnNob3VsZFNpZ25hbFJlbmRlcmluZ0NvbXBsZXRlZChsb2FkaW5nU3RhdGUsIHBsdWdpbi5tZXRhKSkge1xuICAgICAgcHJvZmlsZXIucmVuZGVyaW5nQ29tcGxldGVkKCk7XG4gICAgfVxuXG4gICAgY29uc3QgUGFuZWxDb21wb25lbnQgPSBwbHVnaW4ucGFuZWwhO1xuICAgIGNvbnN0IHRpbWVSYW5nZSA9IHRoaXMuc3RhdGUubGl2ZVRpbWUgPz8gZGF0YS50aW1lUmFuZ2UgPz8gdGhpcy50aW1lU3J2LnRpbWVSYW5nZSgpO1xuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHRoaXMuaGFzT3ZlcmxheUhlYWRlcigpID8gMCA6IHRoZW1lLnBhbmVsSGVhZGVySGVpZ2h0O1xuICAgIGNvbnN0IGNocm9tZVBhZGRpbmcgPSBwbHVnaW4ubm9QYWRkaW5nID8gMCA6IHRoZW1lLnBhbmVsUGFkZGluZztcbiAgICBjb25zdCBwYW5lbFdpZHRoID0gd2lkdGggLSBjaHJvbWVQYWRkaW5nICogMiAtIFBBTkVMX0JPUkRFUjtcbiAgICBjb25zdCBpbm5lclBhbmVsSGVpZ2h0ID0gaGVpZ2h0IC0gaGVhZGVySGVpZ2h0IC0gY2hyb21lUGFkZGluZyAqIDIgLSBQQU5FTF9CT1JERVI7XG4gICAgY29uc3QgcGFuZWxDb250ZW50Q2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgJ3BhbmVsLWNvbnRlbnQnOiB0cnVlLFxuICAgICAgJ3BhbmVsLWNvbnRlbnQtLW5vLXBhZGRpbmcnOiBwbHVnaW4ubm9QYWRkaW5nLFxuICAgIH0pO1xuICAgIGNvbnN0IHBhbmVsT3B0aW9ucyA9IHBhbmVsLmdldE9wdGlvbnMoKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgZXZlbnQgZmlsdGVyIChkYXNoYm9hcmQgc2V0dGluZ3MgbWF5IGhhdmUgY2hhbmdlZClcbiAgICAvLyBZZXMgdGhpcyBpcyBjYWxsZWQgZXZlciByZW5kZXIgZm9yIGEgZnVuY3Rpb24gdGhhdCBpcyB0cmlnZ2VyZWQgb24gZXZlcnkgbW91c2UgbW92ZVxuICAgIHRoaXMuZXZlbnRGaWx0ZXIub25seUxvY2FsID0gZGFzaGJvYXJkLmdyYXBoVG9vbHRpcCA9PT0gMDtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGFuZWxDb250ZW50Q2xhc3NOYW1lc30+XG4gICAgICAgICAgPFBhbmVsQ29udGV4dFByb3ZpZGVyIHZhbHVlPXt0aGlzLnN0YXRlLmNvbnRleHR9PlxuICAgICAgICAgICAgPFBhbmVsQ29tcG9uZW50XG4gICAgICAgICAgICAgIGlkPXtwYW5lbC5pZH1cbiAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgdGl0bGU9e3BhbmVsLnRpdGxlfVxuICAgICAgICAgICAgICB0aW1lUmFuZ2U9e3RpbWVSYW5nZX1cbiAgICAgICAgICAgICAgdGltZVpvbmU9e3RoaXMucHJvcHMuZGFzaGJvYXJkLmdldFRpbWV6b25lKCl9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3BhbmVsT3B0aW9uc31cbiAgICAgICAgICAgICAgZmllbGRDb25maWc9e3BhbmVsLmZpZWxkQ29uZmlnfVxuICAgICAgICAgICAgICB0cmFuc3BhcmVudD17cGFuZWwudHJhbnNwYXJlbnR9XG4gICAgICAgICAgICAgIHdpZHRoPXtwYW5lbFdpZHRofVxuICAgICAgICAgICAgICBoZWlnaHQ9e2lubmVyUGFuZWxIZWlnaHR9XG4gICAgICAgICAgICAgIHJlbmRlckNvdW50ZXI9e3JlbmRlckNvdW50ZXJ9XG4gICAgICAgICAgICAgIHJlcGxhY2VWYXJpYWJsZXM9e3BhbmVsLnJlcGxhY2VWYXJpYWJsZXN9XG4gICAgICAgICAgICAgIG9uT3B0aW9uc0NoYW5nZT17dGhpcy5vbk9wdGlvbnNDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uRmllbGRDb25maWdDaGFuZ2U9e3RoaXMub25GaWVsZENvbmZpZ0NoYW5nZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2VUaW1lUmFuZ2U9e3RoaXMub25DaGFuZ2VUaW1lUmFuZ2V9XG4gICAgICAgICAgICAgIGV2ZW50QnVzPXtkYXNoYm9hcmQuZXZlbnRzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1BhbmVsQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBoYXNPdmVybGF5SGVhZGVyKCkge1xuICAgIGNvbnN0IHsgcGFuZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgLy8gYWx3YXlzIHNob3cgbm9ybWFsIGhlYWRlciBpZiB3ZSBoYXZlIHRpbWUgb3ZlcnJpZGVcbiAgICBpZiAoZGF0YS5yZXF1ZXN0ICYmIGRhdGEucmVxdWVzdC50aW1lSW5mbykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhcGFuZWwuaGFzVGl0bGUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhc2hib2FyZCwgcGFuZWwsIGlzVmlld2luZywgaXNFZGl0aW5nLCB3aWR0aCwgaGVpZ2h0LCBwbHVnaW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBlcnJvck1lc3NhZ2UsIGRhdGEgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB0cmFuc3BhcmVudCB9ID0gcGFuZWw7XG5cbiAgICBjb25zdCBhbGVydFN0YXRlID0gZGF0YS5hbGVydFN0YXRlPy5zdGF0ZTtcblxuICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzTmFtZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICdwYW5lbC1jb250YWluZXInOiB0cnVlLFxuICAgICAgJ3BhbmVsLWNvbnRhaW5lci0tYWJzb2x1dGUnOiBpc1NvbG9Sb3V0ZShsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5wYXRobmFtZSksXG4gICAgICAncGFuZWwtY29udGFpbmVyLS10cmFuc3BhcmVudCc6IHRyYW5zcGFyZW50LFxuICAgICAgJ3BhbmVsLWNvbnRhaW5lci0tbm8tdGl0bGUnOiB0aGlzLmhhc092ZXJsYXlIZWFkZXIoKSxcbiAgICAgIFtgcGFuZWwtYWxlcnQtc3RhdGUtLSR7YWxlcnRTdGF0ZX1gXTogYWxlcnRTdGF0ZSAhPT0gdW5kZWZpbmVkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3NOYW1lc31cbiAgICAgICAgYXJpYS1sYWJlbD17c2VsZWN0b3JzLmNvbXBvbmVudHMuUGFuZWxzLlBhbmVsLmNvbnRhaW5lckJ5VGl0bGUocGFuZWwudGl0bGUpfVxuICAgICAgPlxuICAgICAgICA8UGFuZWxIZWFkZXJcbiAgICAgICAgICBwYW5lbD17cGFuZWx9XG4gICAgICAgICAgZGFzaGJvYXJkPXtkYXNoYm9hcmR9XG4gICAgICAgICAgdGl0bGU9e3BhbmVsLnRpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtwYW5lbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBsaW5rcz17cGFuZWwubGlua3N9XG4gICAgICAgICAgZXJyb3I9e2Vycm9yTWVzc2FnZX1cbiAgICAgICAgICBpc0VkaXRpbmc9e2lzRWRpdGluZ31cbiAgICAgICAgICBpc1ZpZXdpbmc9e2lzVmlld2luZ31cbiAgICAgICAgICBhbGVydFN0YXRlPXthbGVydFN0YXRlfVxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIC8+XG4gICAgICAgIDxFcnJvckJvdW5kYXJ5XG4gICAgICAgICAgZGVwZW5kZW5jaWVzPXtbZGF0YSwgcGx1Z2luLCBwYW5lbC5nZXRPcHRpb25zKCldfVxuICAgICAgICAgIG9uRXJyb3I9e3RoaXMub25QYW5lbEVycm9yfVxuICAgICAgICAgIG9uUmVjb3Zlcj17dGhpcy5vblBhbmVsRXJyb3JSZWNvdmVyfVxuICAgICAgICA+XG4gICAgICAgICAgeyh7IGVycm9yIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclBhbmVsKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgIH19XG4gICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgTWFwRGlzcGF0Y2hUb1Byb3BzLCBNYXBTdGF0ZVRvUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZ2V0RGVmYXVsdFRpbWVSYW5nZSwgTG9hZGluZ1N0YXRlLCBQYW5lbERhdGEsIFBhbmVsUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IEFuZ3VsYXJDb21wb25lbnQsIGdldEFuZ3VsYXJMb2FkZXIsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgUEFORUxfQk9SREVSIH0gZnJvbSAnYXBwL2NvcmUvY29uc3RhbnRzJztcbmltcG9ydCB7IHNldFBhbmVsQW5ndWxhckNvbXBvbmVudCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wYW5lbC9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBnZXRQYW5lbFN0YXRlRm9yTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvcGFuZWwvc3RhdGUvc2VsZWN0b3JzJztcbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBpc1NvbG9Sb3V0ZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcy91dGlscyc7XG5pbXBvcnQgeyBnZXRUaW1lU3J2LCBUaW1lU3J2IH0gZnJvbSAnLi4vc2VydmljZXMvVGltZVNydic7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCwgUGFuZWxNb2RlbCB9IGZyb20gJy4uL3N0YXRlJztcblxuaW1wb3J0IHsgUGFuZWxIZWFkZXIgfSBmcm9tICcuL1BhbmVsSGVhZGVyL1BhbmVsSGVhZGVyJztcblxuaW50ZXJmYWNlIE93blByb3BzIHtcbiAgcGFuZWw6IFBhbmVsTW9kZWw7XG4gIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gIHBsdWdpbjogUGFuZWxQbHVnaW47XG4gIGlzVmlld2luZzogYm9vbGVhbjtcbiAgaXNFZGl0aW5nOiBib29sZWFuO1xuICBpc0luVmlldzogYm9vbGVhbjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDb25uZWN0ZWRQcm9wcyB7XG4gIGFuZ3VsYXJDb21wb25lbnQ/OiBBbmd1bGFyQ29tcG9uZW50O1xufVxuXG5pbnRlcmZhY2UgRGlzcGF0Y2hQcm9wcyB7XG4gIHNldFBhbmVsQW5ndWxhckNvbXBvbmVudDogdHlwZW9mIHNldFBhbmVsQW5ndWxhckNvbXBvbmVudDtcbn1cblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzICYgRGlzcGF0Y2hQcm9wcztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0ZSB7XG4gIGRhdGE6IFBhbmVsRGF0YTtcbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQW5ndWxhclNjb3BlUHJvcHMge1xuICBwYW5lbDogUGFuZWxNb2RlbDtcbiAgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbDtcbiAgc2l6ZToge1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBQYW5lbENocm9tZUFuZ3VsYXJVbmNvbm5lY3RlZCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHRpbWVTcnY6IFRpbWVTcnYgPSBnZXRUaW1lU3J2KCk7XG4gIHNjb3BlUHJvcHM/OiBBbmd1bGFyU2NvcGVQcm9wcztcbiAgc3VicyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Ob3RTdGFydGVkLFxuICAgICAgICBzZXJpZXM6IFtdLFxuICAgICAgICB0aW1lUmFuZ2U6IGdldERlZmF1bHRUaW1lUmFuZ2UoKSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcGFuZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5sb2FkQW5ndWxhclBhbmVsKCk7XG5cbiAgICAvLyBzdWJzY3JpYmUgdG8gZGF0YSBldmVudHNcbiAgICBjb25zdCBxdWVyeVJ1bm5lciA9IHBhbmVsLmdldFF1ZXJ5UnVubmVyKCk7XG5cbiAgICAvLyB3ZSBhcmUgbm90IGRpc3BsYXlpbmcgYW55IG9mIHRoaXMgZGF0YSBzbyBubyBuZWVkIGZvciB0cmFuc2Zvcm1zIG9yIGZpZWxkIGNvbmZpZ1xuICAgIHRoaXMuc3Vicy5hZGQoXG4gICAgICBxdWVyeVJ1bm5lci5nZXREYXRhKHsgd2l0aFRyYW5zZm9ybXM6IGZhbHNlLCB3aXRoRmllbGRDb25maWc6IGZhbHNlIH0pLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChkYXRhOiBQYW5lbERhdGEpID0+IHRoaXMub25QYW5lbERhdGFVcGRhdGUoZGF0YSksXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBvblBhbmVsRGF0YVVwZGF0ZShkYXRhOiBQYW5lbERhdGEpIHtcbiAgICBsZXQgZXJyb3JNZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZGF0YS5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkVycm9yKSB7XG4gICAgICBjb25zdCB7IGVycm9yIH0gPSBkYXRhO1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvck1lc3NhZ2UgIT09IGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEsIGVycm9yTWVzc2FnZSB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuc3Vicy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogUHJvcHMsIHByZXZTdGF0ZTogU3RhdGUpIHtcbiAgICBjb25zdCB7IHBsdWdpbiwgaGVpZ2h0LCB3aWR0aCwgcGFuZWwgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAocHJldlByb3BzLnBsdWdpbiAhPT0gcGx1Z2luKSB7XG4gICAgICB0aGlzLmxvYWRBbmd1bGFyUGFuZWwoKTtcbiAgICB9XG5cbiAgICBpZiAocHJldlByb3BzLndpZHRoICE9PSB3aWR0aCB8fCBwcmV2UHJvcHMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgIGlmICh0aGlzLnNjb3BlUHJvcHMpIHtcbiAgICAgICAgdGhpcy5zY29wZVByb3BzLnNpemUuaGVpZ2h0ID0gdGhpcy5nZXRJbm5lclBhbmVsSGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuc2NvcGVQcm9wcy5zaXplLndpZHRoID0gdGhpcy5nZXRJbm5lclBhbmVsV2lkdGgoKTtcbiAgICAgICAgcGFuZWwucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0SW5uZXJQYW5lbEhlaWdodCgpIHtcbiAgICBjb25zdCB7IHBsdWdpbiwgaGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IGNvbmZpZztcblxuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IHRoaXMuaGFzT3ZlcmxheUhlYWRlcigpID8gMCA6IHRoZW1lLnBhbmVsSGVhZGVySGVpZ2h0O1xuICAgIGNvbnN0IGNocm9tZVBhZGRpbmcgPSBwbHVnaW4ubm9QYWRkaW5nID8gMCA6IHRoZW1lLnBhbmVsUGFkZGluZztcbiAgICByZXR1cm4gaGVpZ2h0IC0gaGVhZGVySGVpZ2h0IC0gY2hyb21lUGFkZGluZyAqIDIgLSBQQU5FTF9CT1JERVI7XG4gIH1cblxuICBnZXRJbm5lclBhbmVsV2lkdGgoKSB7XG4gICAgY29uc3QgeyBwbHVnaW4sIHdpZHRoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IGNvbmZpZztcblxuICAgIGNvbnN0IGNocm9tZVBhZGRpbmcgPSBwbHVnaW4ubm9QYWRkaW5nID8gMCA6IHRoZW1lLnBhbmVsUGFkZGluZztcbiAgICByZXR1cm4gd2lkdGggLSBjaHJvbWVQYWRkaW5nICogMiAtIFBBTkVMX0JPUkRFUjtcbiAgfVxuXG4gIGxvYWRBbmd1bGFyUGFuZWwoKSB7XG4gICAgY29uc3QgeyBwYW5lbCwgZGFzaGJvYXJkLCBzZXRQYW5lbEFuZ3VsYXJDb21wb25lbnQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBpZiB3ZSBoYXZlIG5vIGVsZW1lbnQgb3IgYWxyZWFkeSBoYXZlIGxvYWRlZCB0aGUgcGFuZWwgcmV0dXJuXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkZXIgPSBnZXRBbmd1bGFyTG9hZGVyKCk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSAnPHBsdWdpbi1jb21wb25lbnQgdHlwZT1cInBhbmVsXCIgY2xhc3M9XCJwYW5lbC1oZWlnaHQtaGVscGVyXCI+PC9wbHVnaW4tY29tcG9uZW50Pic7XG5cbiAgICB0aGlzLnNjb3BlUHJvcHMgPSB7XG4gICAgICBwYW5lbDogcGFuZWwsXG4gICAgICBkYXNoYm9hcmQ6IGRhc2hib2FyZCxcbiAgICAgIHNpemU6IHsgd2lkdGg6IHRoaXMuZ2V0SW5uZXJQYW5lbFdpZHRoKCksIGhlaWdodDogdGhpcy5nZXRJbm5lclBhbmVsSGVpZ2h0KCkgfSxcbiAgICB9O1xuXG4gICAgc2V0UGFuZWxBbmd1bGFyQ29tcG9uZW50KHtcbiAgICAgIGtleTogcGFuZWwua2V5LFxuICAgICAgYW5ndWxhckNvbXBvbmVudDogbG9hZGVyLmxvYWQodGhpcy5lbGVtZW50LCB0aGlzLnNjb3BlUHJvcHMsIHRlbXBsYXRlKSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhc092ZXJsYXlIZWFkZXIoKSB7XG4gICAgY29uc3QgeyBwYW5lbCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAvLyBhbHdheXMgc2hvdyBub3JtYWwgaGVhZGVyIGlmIHdlIGhhdmUgdGltZSBvdmVycmlkZVxuICAgIGlmIChkYXRhLnJlcXVlc3QgJiYgZGF0YS5yZXF1ZXN0LnRpbWVJbmZvKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICFwYW5lbC5oYXNUaXRsZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGFzaGJvYXJkLCBwYW5lbCwgaXNWaWV3aW5nLCBpc0VkaXRpbmcsIHBsdWdpbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGVycm9yTWVzc2FnZSwgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHRyYW5zcGFyZW50IH0gPSBwYW5lbDtcblxuICAgIGNvbnN0IGFsZXJ0U3RhdGUgPSBkYXRhLmFsZXJ0U3RhdGU/LnN0YXRlO1xuXG4gICAgY29uc3QgY29udGFpbmVyQ2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgJ3BhbmVsLWNvbnRhaW5lcic6IHRydWUsXG4gICAgICAncGFuZWwtY29udGFpbmVyLS1hYnNvbHV0ZSc6IGlzU29sb1JvdXRlKGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLnBhdGhuYW1lKSxcbiAgICAgICdwYW5lbC1jb250YWluZXItLXRyYW5zcGFyZW50JzogdHJhbnNwYXJlbnQsXG4gICAgICAncGFuZWwtY29udGFpbmVyLS1uby10aXRsZSc6IHRoaXMuaGFzT3ZlcmxheUhlYWRlcigpLFxuICAgICAgJ3BhbmVsLWhhcy1hbGVydCc6IHBhbmVsLmFsZXJ0ICE9PSB1bmRlZmluZWQsXG4gICAgICBbYHBhbmVsLWFsZXJ0LXN0YXRlLS0ke2FsZXJ0U3RhdGV9YF06IGFsZXJ0U3RhdGUgIT09IHVuZGVmaW5lZCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHBhbmVsQ29udGVudENsYXNzTmFtZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICdwYW5lbC1jb250ZW50JzogdHJ1ZSxcbiAgICAgICdwYW5lbC1jb250ZW50LS1uby1wYWRkaW5nJzogcGx1Z2luLm5vUGFkZGluZyxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3NOYW1lc30gYXJpYS1sYWJlbD17c2VsZWN0b3JzLmNvbXBvbmVudHMuUGFuZWxzLlBhbmVsLmNvbnRhaW5lckJ5VGl0bGUocGFuZWwudGl0bGUpfT5cbiAgICAgICAgPFBhbmVsSGVhZGVyXG4gICAgICAgICAgcGFuZWw9e3BhbmVsfVxuICAgICAgICAgIGRhc2hib2FyZD17ZGFzaGJvYXJkfVxuICAgICAgICAgIHRpdGxlPXtwYW5lbC50aXRsZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17cGFuZWwuZGVzY3JpcHRpb259XG4gICAgICAgICAgbGlua3M9e3BhbmVsLmxpbmtzfVxuICAgICAgICAgIGVycm9yPXtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgaXNWaWV3aW5nPXtpc1ZpZXdpbmd9XG4gICAgICAgICAgaXNFZGl0aW5nPXtpc0VkaXRpbmd9XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICBhbGVydFN0YXRlPXthbGVydFN0YXRlfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGFuZWxDb250ZW50Q2xhc3NOYW1lc30+XG4gICAgICAgICAgPGRpdiByZWY9eyhlbGVtZW50KSA9PiAodGhpcy5lbGVtZW50ID0gZWxlbWVudCl9IGNsYXNzTmFtZT1cInBhbmVsLWhlaWdodC1oZWxwZXJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzOiBNYXBTdGF0ZVRvUHJvcHM8Q29ubmVjdGVkUHJvcHMsIE93blByb3BzLCBTdG9yZVN0YXRlPiA9IChzdGF0ZSwgcHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhbmd1bGFyQ29tcG9uZW50OiBnZXRQYW5lbFN0YXRlRm9yTW9kZWwoc3RhdGUsIHByb3BzLnBhbmVsKT8uYW5ndWxhckNvbXBvbmVudCxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wczogTWFwRGlzcGF0Y2hUb1Byb3BzPERpc3BhdGNoUHJvcHMsIE93blByb3BzPiA9IHsgc2V0UGFuZWxBbmd1bGFyQ29tcG9uZW50IH07XG5cbmV4cG9ydCBjb25zdCBQYW5lbENocm9tZUFuZ3VsYXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQYW5lbENocm9tZUFuZ3VsYXJVbmNvbm5lY3RlZCk7XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YUxpbmssIEdyYWZhbmFUaGVtZTIsIFBhbmVsRGF0YSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQGdyYWZhbmEvZTJlLXNlbGVjdG9ycyc7XG5pbXBvcnQgeyBJY29uLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlL0Rhc2hib2FyZE1vZGVsJztcbmltcG9ydCB7IFBhbmVsTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlL1BhbmVsTW9kZWwnO1xuaW1wb3J0IHsgZ2V0UGFuZWxMaW5rc1N1cHBsaWVyIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BhbmVsL3BhbmVsbGlua3MvbGlua1N1cHBsaWVycyc7XG5cbmltcG9ydCBQYW5lbEhlYWRlckNvcm5lciBmcm9tICcuL1BhbmVsSGVhZGVyQ29ybmVyJztcbmltcG9ydCB7IFBhbmVsSGVhZGVyTG9hZGluZ0luZGljYXRvciB9IGZyb20gJy4vUGFuZWxIZWFkZXJMb2FkaW5nSW5kaWNhdG9yJztcbmltcG9ydCB7IFBhbmVsSGVhZGVyTWVudVRyaWdnZXIgfSBmcm9tICcuL1BhbmVsSGVhZGVyTWVudVRyaWdnZXInO1xuaW1wb3J0IHsgUGFuZWxIZWFkZXJNZW51V3JhcHBlciB9IGZyb20gJy4vUGFuZWxIZWFkZXJNZW51V3JhcHBlcic7XG5pbXBvcnQgeyBQYW5lbEhlYWRlck5vdGljZXMgfSBmcm9tICcuL1BhbmVsSGVhZGVyTm90aWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBwYW5lbDogUGFuZWxNb2RlbDtcbiAgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbDtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBsaW5rcz86IERhdGFMaW5rW107XG4gIGVycm9yPzogc3RyaW5nO1xuICBhbGVydFN0YXRlPzogc3RyaW5nO1xuICBpc1ZpZXdpbmc6IGJvb2xlYW47XG4gIGlzRWRpdGluZzogYm9vbGVhbjtcbiAgZGF0YTogUGFuZWxEYXRhO1xufVxuXG5leHBvcnQgY29uc3QgUGFuZWxIZWFkZXI6IEZDPFByb3BzPiA9ICh7IHBhbmVsLCBlcnJvciwgaXNWaWV3aW5nLCBpc0VkaXRpbmcsIGRhdGEsIGFsZXJ0U3RhdGUsIGRhc2hib2FyZCB9KSA9PiB7XG4gIGNvbnN0IG9uQ2FuY2VsUXVlcnkgPSAoKSA9PiBwYW5lbC5nZXRRdWVyeVJ1bm5lcigpLmNhbmNlbFF1ZXJ5KCk7XG4gIGNvbnN0IHRpdGxlID0gcGFuZWwuZ2V0RGlzcGxheVRpdGxlKCk7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IGN4KCdwYW5lbC1oZWFkZXInLCAhKGlzVmlld2luZyB8fCBpc0VkaXRpbmcpID8gJ2dyaWQtZHJhZy1oYW5kbGUnIDogJycpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKHBhbmVsU3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UGFuZWxIZWFkZXJMb2FkaW5nSW5kaWNhdG9yIHN0YXRlPXtkYXRhLnN0YXRlfSBvbkNsaWNrPXtvbkNhbmNlbFF1ZXJ5fSAvPlxuICAgICAgPFBhbmVsSGVhZGVyQ29ybmVyXG4gICAgICAgIHBhbmVsPXtwYW5lbH1cbiAgICAgICAgdGl0bGU9e3BhbmVsLnRpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17cGFuZWwuZGVzY3JpcHRpb259XG4gICAgICAgIHNjb3BlZFZhcnM9e3BhbmVsLnNjb3BlZFZhcnN9XG4gICAgICAgIGxpbmtzPXtnZXRQYW5lbExpbmtzU3VwcGxpZXIocGFuZWwpfVxuICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxQYW5lbEhlYWRlck1lbnVUcmlnZ2VyIGRhdGEtdGVzdGlkPXtzZWxlY3RvcnMuY29tcG9uZW50cy5QYW5lbHMuUGFuZWwudGl0bGUodGl0bGUpfT5cbiAgICAgICAgICB7KHsgY2xvc2VNZW51LCBwYW5lbE1lbnVPcGVuIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8UGFuZWxIZWFkZXJOb3RpY2VzIGZyYW1lcz17ZGF0YS5zZXJpZXN9IHBhbmVsSWQ9e3BhbmVsLmlkfSAvPlxuICAgICAgICAgICAgICAgIHthbGVydFN0YXRlID8gKFxuICAgICAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17YWxlcnRTdGF0ZSA9PT0gJ2FsZXJ0aW5nJyA/ICdoZWFydC1icmVhaycgOiAnaGVhcnQnfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uLWdmIHBhbmVsLWFsZXJ0LWljb25cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzRweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlVGV4dH0+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImFuZ2xlLWRvd25cIiBjbGFzc05hbWU9XCJwYW5lbC1tZW51LXRvZ2dsZVwiIC8+XG4gICAgICAgICAgICAgICAgPFBhbmVsSGVhZGVyTWVudVdyYXBwZXIgcGFuZWw9e3BhbmVsfSBkYXNoYm9hcmQ9e2Rhc2hib2FyZH0gc2hvdz17cGFuZWxNZW51T3Blbn0gb25DbG9zZT17Y2xvc2VNZW51fSAvPlxuICAgICAgICAgICAgICAgIHtkYXRhLnJlcXVlc3QgJiYgZGF0YS5yZXF1ZXN0LnRpbWVJbmZvICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBhbmVsLXRpbWUtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiY2xvY2stbmluZVwiIHNpemU9XCJzbVwiIC8+IHtkYXRhLnJlcXVlc3QudGltZUluZm99XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH19XG4gICAgICAgIDwvUGFuZWxIZWFkZXJNZW51VHJpZ2dlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgcGFuZWxTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZVRleHQ6IGNzc2BcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDM4cHgpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LmJvZHkuZm9udFNpemV9O1xuICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQucHJpbWFyeX07XG4gICAgICB9XG4gICAgICAucGFuZWwtaGFzLWFsZXJ0ICYge1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDU0cHgpO1xuICAgICAgfVxuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgcmVuZGVyTWFya2Rvd24sIExpbmtNb2RlbFN1cHBsaWVyLCBTY29wZWRWYXJzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tICdAZ3JhZmFuYS9lMmUtc2VsZWN0b3JzJztcbmltcG9ydCB7IGxvY2F0aW9uU2VydmljZSwgZ2V0VGVtcGxhdGVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFRvb2x0aXAsIFBvcG92ZXJDb250ZW50IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgZ2V0VGltZVNydiwgVGltZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc2VydmljZXMvVGltZVNydic7XG5pbXBvcnQgeyBQYW5lbE1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9QYW5lbE1vZGVsJztcbmltcG9ydCB7IEluc3BlY3RUYWIgfSBmcm9tICdhcHAvZmVhdHVyZXMvaW5zcGVjdG9yL3R5cGVzJztcblxuZW51bSBJbmZvTW9kZSB7XG4gIEVycm9yID0gJ0Vycm9yJyxcbiAgSW5mbyA9ICdJbmZvJyxcbiAgTGlua3MgPSAnTGlua3MnLFxufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwYW5lbDogUGFuZWxNb2RlbDtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBzY29wZWRWYXJzPzogU2NvcGVkVmFycztcbiAgbGlua3M/OiBMaW5rTW9kZWxTdXBwbGllcjxQYW5lbE1vZGVsPjtcbiAgZXJyb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYW5lbEhlYWRlckNvcm5lciBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICB0aW1lU3J2OiBUaW1lU3J2ID0gZ2V0VGltZVNydigpO1xuXG4gIGdldEluZm9Nb2RlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFuZWwsIGVycm9yIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIEluZm9Nb2RlLkVycm9yO1xuICAgIH1cbiAgICBpZiAoISFwYW5lbC5kZXNjcmlwdGlvbikge1xuICAgICAgcmV0dXJuIEluZm9Nb2RlLkluZm87XG4gICAgfVxuICAgIGlmIChwYW5lbC5saW5rcyAmJiBwYW5lbC5saW5rcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBJbmZvTW9kZS5MaW5rcztcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9O1xuXG4gIGdldEluZm9Db250ZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgICBjb25zdCB7IHBhbmVsIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1hcmtkb3duID0gcGFuZWwuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgY29uc3QgaW50ZXJwb2xhdGVkTWFya2Rvd24gPSBnZXRUZW1wbGF0ZVNydigpLnJlcGxhY2UobWFya2Rvd24sIHBhbmVsLnNjb3BlZFZhcnMpO1xuICAgIGNvbnN0IG1hcmtlZEludGVycG9sYXRlZE1hcmtkb3duID0gcmVuZGVyTWFya2Rvd24oaW50ZXJwb2xhdGVkTWFya2Rvd24pO1xuICAgIGNvbnN0IGxpbmtzID0gdGhpcy5wcm9wcy5saW5rcyAmJiB0aGlzLnByb3BzLmxpbmtzLmdldExpbmtzKHBhbmVsLnJlcGxhY2VWYXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaW5mby1jb250ZW50IG1hcmtkb3duLWh0bWxcIj5cbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1hcmtlZEludGVycG9sYXRlZE1hcmtkb3duIH19IC8+XG5cbiAgICAgICAge2xpbmtzICYmIGxpbmtzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYW5lbC1pbmZvLWNvcm5lci1saW5rc1wiPlxuICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhbmVsLWluZm8tY29ybmVyLWxpbmtzX19pdGVtXCIgaHJlZj17bGluay5ocmVmfSB0YXJnZXQ9e2xpbmsudGFyZ2V0fT5cbiAgICAgICAgICAgICAgICAgICAge2xpbmsudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBQYW5lbCBJbnNwZWN0b3Igd2hlbiB3ZSBjbGljayBvbiBhbiBlcnJvclxuICAgKi9cbiAgb25DbGlja0Vycm9yID0gKCkgPT4ge1xuICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHtcbiAgICAgIGluc3BlY3Q6IHRoaXMucHJvcHMucGFuZWwuaWQsXG4gICAgICBpbnNwZWN0VGFiOiBJbnNwZWN0VGFiLkVycm9yLFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlckNvcm5lclR5cGUoaW5mb01vZGU6IEluZm9Nb2RlLCBjb250ZW50OiBQb3BvdmVyQ29udGVudCwgb25DbGljaz86ICgpID0+IHZvaWQpIHtcbiAgICBjb25zdCB0aGVtZSA9IGluZm9Nb2RlID09PSBJbmZvTW9kZS5FcnJvciA/ICdlcnJvcicgOiAnaW5mbyc7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gYHBhbmVsLWluZm8tY29ybmVyIHBhbmVsLWluZm8tY29ybmVyLS0ke2luZm9Nb2RlLnRvTG93ZXJDYXNlKCl9YDtcbiAgICBjb25zdCBhcmlhTGFiZWwgPSBzZWxlY3RvcnMuY29tcG9uZW50cy5QYW5lbHMuUGFuZWwuaGVhZGVyQ29ybmVySW5mbyhpbmZvTW9kZS50b0xvd2VyQ2FzZSgpKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VG9vbHRpcCBjb250ZW50PXtjb250ZW50fSBwbGFjZW1lbnQ9XCJ0b3Atc3RhcnRcIiB0aGVtZT17dGhlbWV9IGludGVyYWN0aXZlPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17b25DbGlja30gYXJpYS1sYWJlbD17YXJpYUxhYmVsfT5cbiAgICAgICAgICA8aSBhcmlhLWhpZGRlbiBjbGFzc05hbWU9XCJmYVwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFuZWwtaW5mby1jb3JuZXItaW5uZXJcIiAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVycm9yIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGluZm9Nb2RlOiBJbmZvTW9kZSB8IHVuZGVmaW5lZCA9IHRoaXMuZ2V0SW5mb01vZGUoKTtcblxuICAgIGlmICghaW5mb01vZGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChpbmZvTW9kZSA9PT0gSW5mb01vZGUuRXJyb3IgJiYgZXJyb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvcm5lclR5cGUoaW5mb01vZGUsIGVycm9yLCB0aGlzLm9uQ2xpY2tFcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGluZm9Nb2RlID09PSBJbmZvTW9kZS5JbmZvIHx8IGluZm9Nb2RlID09PSBJbmZvTW9kZS5MaW5rcykge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29ybmVyVHlwZShpbmZvTW9kZSwgdGhpcy5nZXRJbmZvQ29udGVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZWxIZWFkZXJDb3JuZXI7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUsIExvYWRpbmdTdGF0ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSWNvbiwgVG9vbHRpcCwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzdGF0ZTogTG9hZGluZ1N0YXRlO1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUGFuZWxIZWFkZXJMb2FkaW5nSW5kaWNhdG9yOiBGQzxQcm9wcz4gPSAoeyBzdGF0ZSwgb25DbGljayB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIGlmIChzdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkxvYWRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1sb2FkaW5nXCIgb25DbGljaz17b25DbGlja30+XG4gICAgICAgIDxUb29sdGlwIGNvbnRlbnQ9XCJDYW5jZWwgcXVlcnlcIj5cbiAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJwYW5lbC1sb2FkaW5nX19zcGlubmVyIHNwaW4tY2xvY2t3aXNlXCIgbmFtZT1cInN5bmNcIiAvPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaWYgKHN0YXRlID09PSBMb2FkaW5nU3RhdGUuU3RyZWFtaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtbG9hZGluZ1wiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICA8ZGl2IHRpdGxlPVwiU3RyZWFtaW5nIChjbGljayB0byBzdG9wKVwiIGNsYXNzTmFtZT17c3R5bGVzLnN0cmVhbUluZGljYXRvcn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgc3RyZWFtSW5kaWNhdG9yOiBjc3NgXG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzLnRleHRGYWludH07XG4gICAgICBib3gtc2hhZG93OiAwIDAgMnB4ICR7dGhlbWUuY29sb3JzLnRleHRGYWludH07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDZweDtcbiAgICAgIHJpZ2h0OiAxcHg7XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBQYW5lbE1lbnVJdGVtIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IFBhbmVsSGVhZGVyTWVudUl0ZW0gfSBmcm9tICcuL1BhbmVsSGVhZGVyTWVudUl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgaXRlbXM6IFBhbmVsTWVudUl0ZW1bXTtcbn1cblxuZXhwb3J0IGNsYXNzIFBhbmVsSGVhZGVyTWVudSBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVySXRlbXMgPSAobWVudTogUGFuZWxNZW51SXRlbVtdLCBpc1N1Yk1lbnUgPSBmYWxzZSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LS1tZW51IHBhbmVsLW1lbnVcIiByb2xlPXtpc1N1Yk1lbnUgPyAnJyA6ICdtZW51J30+XG4gICAgICAgIHttZW51Lm1hcCgobWVudUl0ZW0sIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYW5lbEhlYWRlck1lbnVJdGVtXG4gICAgICAgICAgICAgIGtleT17YCR7bWVudUl0ZW0udGV4dH0ke2lkeH1gfVxuICAgICAgICAgICAgICB0eXBlPXttZW51SXRlbS50eXBlfVxuICAgICAgICAgICAgICB0ZXh0PXttZW51SXRlbS50ZXh0fVxuICAgICAgICAgICAgICBpY29uQ2xhc3NOYW1lPXttZW51SXRlbS5pY29uQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICBvbkNsaWNrPXttZW51SXRlbS5vbkNsaWNrfVxuICAgICAgICAgICAgICBzaG9ydGN1dD17bWVudUl0ZW0uc2hvcnRjdXR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHttZW51SXRlbS5zdWJNZW51ICYmIHRoaXMucmVuZGVySXRlbXMobWVudUl0ZW0uc3ViTWVudSwgdHJ1ZSl9XG4gICAgICAgICAgICA8L1BhbmVsSGVhZGVyTWVudUl0ZW0+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLW1lbnUtY29udGFpbmVyIGRyb3Bkb3duIG9wZW5cIj57dGhpcy5yZW5kZXJJdGVtcyh0aGlzLnByb3BzLml0ZW1zKX08L2Rpdj47XG4gIH1cbn1cbiIsImltcG9ydCB7IEZDLCBSZWFjdEVsZW1lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgUGFuZWxNZW51SXRlbSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0UGFuZWxTdGF0ZUZvck1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BhbmVsL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmltcG9ydCB7IFN0b3JlU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCwgUGFuZWxNb2RlbCB9IGZyb20gJy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IGdldFBhbmVsTWVudSB9IGZyb20gJy4uLy4uL3V0aWxzL2dldFBhbmVsTWVudSc7XG5cbmludGVyZmFjZSBQYW5lbEhlYWRlck1lbnVQcm92aWRlckFwaSB7XG4gIGl0ZW1zOiBQYW5lbE1lbnVJdGVtW107XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhbmVsOiBQYW5lbE1vZGVsO1xuICBkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsO1xuICBjaGlsZHJlbjogKHByb3BzOiBQYW5lbEhlYWRlck1lbnVQcm92aWRlckFwaSkgPT4gUmVhY3RFbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgUGFuZWxIZWFkZXJNZW51UHJvdmlkZXI6IEZDPFByb3BzPiA9ICh7IHBhbmVsLCBkYXNoYm9hcmQsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZTxQYW5lbE1lbnVJdGVtW10+KFtdKTtcbiAgY29uc3QgYW5ndWxhckNvbXBvbmVudCA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gZ2V0UGFuZWxTdGF0ZUZvck1vZGVsKHN0YXRlLCBwYW5lbCk/LmFuZ3VsYXJDb21wb25lbnQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXRlbXMoZ2V0UGFuZWxNZW51KGRhc2hib2FyZCwgcGFuZWwsIGFuZ3VsYXJDb21wb25lbnQpKTtcbiAgfSwgW2Rhc2hib2FyZCwgcGFuZWwsIGFuZ3VsYXJDb21wb25lbnQsIHNldEl0ZW1zXSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuKHsgaXRlbXMgfSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCBIVE1MQXR0cmlidXRlcywgTW91c2VFdmVudCwgUmVhY3RFbGVtZW50LCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENhcnRlc2lhbkNvb3JkczJEIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmludGVyZmFjZSBQYW5lbEhlYWRlck1lbnVUcmlnZ2VyQXBpIHtcbiAgcGFuZWxNZW51T3BlbjogYm9vbGVhbjtcbiAgY2xvc2VNZW51OiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICBjaGlsZHJlbjogKHByb3BzOiBQYW5lbEhlYWRlck1lbnVUcmlnZ2VyQXBpKSA9PiBSZWFjdEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlck1lbnVUcmlnZ2VyOiBGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgLi4uZGl2UHJvcHMgfSkgPT4ge1xuICBjb25zdCBbY2xpY2tDb29yZGluYXRlcywgc2V0Q2xpY2tDb29yZGluYXRlc10gPSB1c2VTdGF0ZTxDYXJ0ZXNpYW5Db29yZHMyRD4oeyB4OiAwLCB5OiAwIH0pO1xuICBjb25zdCBbcGFuZWxNZW51T3Blbiwgc2V0UGFuZWxNZW51T3Blbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IG9uTWVudVRvZ2dsZSA9IHVzZUNhbGxiYWNrKFxuICAgIChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgIGlmICghaXNDbGljayhjbGlja0Nvb3JkaW5hdGVzLCBldmVudFRvQ2xpY2tDb29yZGluYXRlcyhldmVudCkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIHNldFBhbmVsTWVudU9wZW4oIXBhbmVsTWVudU9wZW4pO1xuICAgIH0sXG4gICAgW2NsaWNrQ29vcmRpbmF0ZXMsIHBhbmVsTWVudU9wZW4sIHNldFBhbmVsTWVudU9wZW5dXG4gICk7XG4gIGNvbnN0IG9uTW91c2VEb3duID0gdXNlQ2FsbGJhY2soXG4gICAgKGV2ZW50OiBNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgICAgc2V0Q2xpY2tDb29yZGluYXRlcyhldmVudFRvQ2xpY2tDb29yZGluYXRlcyhldmVudCkpO1xuICAgIH0sXG4gICAgW3NldENsaWNrQ29vcmRpbmF0ZXNdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIHsuLi5kaXZQcm9wc30gY2xhc3NOYW1lPVwicGFuZWwtdGl0bGUtY29udGFpbmVyXCIgb25DbGljaz17b25NZW51VG9nZ2xlfSBvbk1vdXNlRG93bj17b25Nb3VzZURvd259PlxuICAgICAge2NoaWxkcmVuKHsgcGFuZWxNZW51T3BlbiwgY2xvc2VNZW51OiAoKSA9PiBzZXRQYW5lbE1lbnVPcGVuKGZhbHNlKSB9KX1cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIGlzQ2xpY2soY3VycmVudDogQ2FydGVzaWFuQ29vcmRzMkQsIGNsaWNrZWQ6IENhcnRlc2lhbkNvb3JkczJEKTogYm9vbGVhbiB7XG4gIHJldHVybiBjbGlja2VkLnggPT09IGN1cnJlbnQueCAmJiBjbGlja2VkLnkgPT09IGN1cnJlbnQueTtcbn1cblxuZnVuY3Rpb24gZXZlbnRUb0NsaWNrQ29vcmRpbmF0ZXMoZXZlbnQ6IE1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KTogQ2FydGVzaWFuQ29vcmRzMkQge1xuICByZXR1cm4ge1xuICAgIHg6IE1hdGguZmxvb3IoZXZlbnQuY2xpZW50WCksXG4gICAgeTogTWF0aC5mbG9vcihldmVudC5jbGllbnRZKSxcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2xpY2tPdXRzaWRlV3JhcHBlciB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwsIFBhbmVsTW9kZWwgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5cbmltcG9ydCB7IFBhbmVsSGVhZGVyTWVudSB9IGZyb20gJy4vUGFuZWxIZWFkZXJNZW51JztcbmltcG9ydCB7IFBhbmVsSGVhZGVyTWVudVByb3ZpZGVyIH0gZnJvbSAnLi9QYW5lbEhlYWRlck1lbnVQcm92aWRlcic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhbmVsOiBQYW5lbE1vZGVsO1xuICBkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsO1xuICBzaG93OiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUGFuZWxIZWFkZXJNZW51V3JhcHBlcjogRkM8UHJvcHM+ID0gKHsgc2hvdywgb25DbG9zZSwgcGFuZWwsIGRhc2hib2FyZCB9KSA9PiB7XG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2xpY2tPdXRzaWRlV3JhcHBlciBvbkNsaWNrPXtvbkNsb3NlfSBwYXJlbnQ9e2RvY3VtZW50fT5cbiAgICAgIDxQYW5lbEhlYWRlck1lbnVQcm92aWRlciBwYW5lbD17cGFuZWx9IGRhc2hib2FyZD17ZGFzaGJvYXJkfT5cbiAgICAgICAgeyh7IGl0ZW1zIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gPFBhbmVsSGVhZGVyTWVudSBpdGVtcz17aXRlbXN9IC8+O1xuICAgICAgICB9fVxuICAgICAgPC9QYW5lbEhlYWRlck1lbnVQcm92aWRlcj5cbiAgICA8L0NsaWNrT3V0c2lkZVdyYXBwZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBRdWVyeVJlc3VsdE1ldGFOb3RpY2UgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEljb24sIFRvb2x0aXAgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG5vdGljZTogUXVlcnlSZXN1bHRNZXRhTm90aWNlO1xuICBvbkNsaWNrOiAoZTogUmVhY3QuU3ludGhldGljRXZlbnQsIHRhYjogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUGFuZWxIZWFkZXJOb3RpY2U6IEZDPFByb3BzPiA9ICh7IG5vdGljZSwgb25DbGljayB9KSA9PiB7XG4gIGNvbnN0IGljb25OYW1lID1cbiAgICBub3RpY2Uuc2V2ZXJpdHkgPT09ICdlcnJvcicgfHwgbm90aWNlLnNldmVyaXR5ID09PSAnd2FybmluZycgPyAnZXhjbGFtYXRpb24tdHJpYW5nbGUnIDogJ2luZm8tY2lyY2xlJztcblxuICByZXR1cm4gKFxuICAgIDxUb29sdGlwIGNvbnRlbnQ9e25vdGljZS50ZXh0fSBrZXk9e25vdGljZS5zZXZlcml0eX0+XG4gICAgICB7bm90aWNlLmluc3BlY3QgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaW5mby1ub3RpY2UgcG9pbnRlclwiIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrKGUsIG5vdGljZS5pbnNwZWN0ISl9PlxuICAgICAgICAgIDxJY29uIG5hbWU9e2ljb25OYW1lfSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8YSBjbGFzc05hbWU9XCJwYW5lbC1pbmZvLW5vdGljZVwiIGhyZWY9e25vdGljZS5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCI+XG4gICAgICAgICAgPEljb24gbmFtZT17aWNvbk5hbWV9IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnOHB4JyB9fSAvPlxuICAgICAgICA8L2E+XG4gICAgICApfVxuICAgIDwvVG9vbHRpcD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBEYXRhRnJhbWUsIFF1ZXJ5UmVzdWx0TWV0YU5vdGljZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCB7IFBhbmVsSGVhZGVyTm90aWNlIH0gZnJvbSAnLi9QYW5lbEhlYWRlck5vdGljZSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBhbmVsSWQ6IG51bWJlcjtcbiAgZnJhbWVzOiBEYXRhRnJhbWVbXTtcbn1cblxuZXhwb3J0IGNvbnN0IFBhbmVsSGVhZGVyTm90aWNlczogRkM8UHJvcHM+ID0gKHsgZnJhbWVzLCBwYW5lbElkIH0pID0+IHtcbiAgY29uc3Qgb3Blbkluc3BlY3QgPSB1c2VDYWxsYmFjayhcbiAgICAoZTogUmVhY3QuU3ludGhldGljRXZlbnQsIHRhYjogc3RyaW5nKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnBhcnRpYWwoeyBpbnNwZWN0OiBwYW5lbElkLCBpbnNwZWN0VGFiOiB0YWIgfSk7XG4gICAgfSxcbiAgICBbcGFuZWxJZF1cbiAgKTtcblxuICAvLyBkZWR1cGUgb24gc2V2ZXJpdHlcbiAgY29uc3Qgbm90aWNlczogUmVjb3JkPHN0cmluZywgUXVlcnlSZXN1bHRNZXRhTm90aWNlPiA9IHt9O1xuICBmb3IgKGNvbnN0IGZyYW1lIG9mIGZyYW1lcykge1xuICAgIGlmICghZnJhbWUubWV0YSB8fCAhZnJhbWUubWV0YS5ub3RpY2VzKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG5vdGljZSBvZiBmcmFtZS5tZXRhLm5vdGljZXMpIHtcbiAgICAgIG5vdGljZXNbbm90aWNlLnNldmVyaXR5XSA9IG5vdGljZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7T2JqZWN0LnZhbHVlcyhub3RpY2VzKS5tYXAoKG5vdGljZSkgPT4gKFxuICAgICAgICA8UGFuZWxIZWFkZXJOb3RpY2Ugbm90aWNlPXtub3RpY2V9IG9uQ2xpY2s9e29wZW5JbnNwZWN0fSBrZXk9e25vdGljZS5zZXZlcml0eX0gLz5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7XG4gIEJ5TmFtZXNNYXRjaGVyTW9kZSxcbiAgRGF0YUZyYW1lLFxuICBEeW5hbWljQ29uZmlnVmFsdWUsXG4gIEZpZWxkQ29uZmlnU291cmNlLFxuICBGaWVsZE1hdGNoZXJJRCxcbiAgRmllbGRUeXBlLFxuICBnZXRGaWVsZERpc3BsYXlOYW1lLFxuICBpc1N5c3RlbU92ZXJyaWRlV2l0aFJlZixcbiAgU3lzdGVtQ29uZmlnT3ZlcnJpZGVSdWxlLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlcmllc1Zpc2liaWxpdHlDaGFuZ2VNb2RlIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5jb25zdCBkaXNwbGF5T3ZlcnJpZGVSZWYgPSAnaGlkZVNlcmllc0Zyb20nO1xuY29uc3QgaXNIaWRlU2VyaWVzT3ZlcnJpZGUgPSBpc1N5c3RlbU92ZXJyaWRlV2l0aFJlZihkaXNwbGF5T3ZlcnJpZGVSZWYpO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWVzVmlzaWJpbGl0eUNvbmZpZ0ZhY3RvcnkoXG4gIGxhYmVsOiBzdHJpbmcsXG4gIG1vZGU6IFNlcmllc1Zpc2liaWxpdHlDaGFuZ2VNb2RlLFxuICBmaWVsZENvbmZpZzogRmllbGRDb25maWdTb3VyY2UsXG4gIGRhdGE6IERhdGFGcmFtZVtdXG4pIHtcbiAgY29uc3QgeyBvdmVycmlkZXMgfSA9IGZpZWxkQ29uZmlnO1xuXG4gIGNvbnN0IGRpc3BsYXlOYW1lID0gbGFiZWw7XG4gIGNvbnN0IGN1cnJlbnRJbmRleCA9IG92ZXJyaWRlcy5maW5kSW5kZXgoaXNIaWRlU2VyaWVzT3ZlcnJpZGUpO1xuXG4gIGlmIChjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgaWYgKG1vZGUgPT09IFNlcmllc1Zpc2liaWxpdHlDaGFuZ2VNb2RlLlRvZ2dsZVNlbGVjdGlvbikge1xuICAgICAgY29uc3Qgb3ZlcnJpZGUgPSBjcmVhdGVPdmVycmlkZShbZGlzcGxheU5hbWVdKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZmllbGRDb25maWcsXG4gICAgICAgIG92ZXJyaWRlczogWy4uLmZpZWxkQ29uZmlnLm92ZXJyaWRlcywgb3ZlcnJpZGVdLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5TmFtZXMgPSBnZXREaXNwbGF5TmFtZXMoZGF0YSwgZGlzcGxheU5hbWUpO1xuICAgIGNvbnN0IG92ZXJyaWRlID0gY3JlYXRlT3ZlcnJpZGUoZGlzcGxheU5hbWVzKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5maWVsZENvbmZpZyxcbiAgICAgIG92ZXJyaWRlczogWy4uLmZpZWxkQ29uZmlnLm92ZXJyaWRlcywgb3ZlcnJpZGVdLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBvdmVycmlkZXNDb3B5ID0gQXJyYXkuZnJvbShvdmVycmlkZXMpO1xuICBjb25zdCBbY3VycmVudF0gPSBvdmVycmlkZXNDb3B5LnNwbGljZShjdXJyZW50SW5kZXgsIDEpIGFzIFN5c3RlbUNvbmZpZ092ZXJyaWRlUnVsZVtdO1xuXG4gIGlmIChtb2RlID09PSBTZXJpZXNWaXNpYmlsaXR5Q2hhbmdlTW9kZS5Ub2dnbGVTZWxlY3Rpb24pIHtcbiAgICBjb25zdCBleGlzdGluZyA9IGdldEV4aXN0aW5nRGlzcGxheU5hbWVzKGN1cnJlbnQpO1xuXG4gICAgaWYgKGV4aXN0aW5nWzBdID09PSBkaXNwbGF5TmFtZSAmJiBleGlzdGluZy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmZpZWxkQ29uZmlnLFxuICAgICAgICBvdmVycmlkZXM6IG92ZXJyaWRlc0NvcHksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IG92ZXJyaWRlID0gY3JlYXRlT3ZlcnJpZGUoW2Rpc3BsYXlOYW1lXSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZmllbGRDb25maWcsXG4gICAgICBvdmVycmlkZXM6IFsuLi5vdmVycmlkZXNDb3B5LCBvdmVycmlkZV0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IG92ZXJyaWRlID0gY3JlYXRlRXh0ZW5kZWRPdmVycmlkZShjdXJyZW50LCBkaXNwbGF5TmFtZSk7XG5cbiAgaWYgKGFsbEZpZWxkc0FyZUV4Y2x1ZGVkKG92ZXJyaWRlLCBkYXRhKSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5maWVsZENvbmZpZyxcbiAgICAgIG92ZXJyaWRlczogb3ZlcnJpZGVzQ29weSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5maWVsZENvbmZpZyxcbiAgICBvdmVycmlkZXM6IFsuLi5vdmVycmlkZXNDb3B5LCBvdmVycmlkZV0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU92ZXJyaWRlKFxuICBuYW1lczogc3RyaW5nW10sXG4gIG1vZGUgPSBCeU5hbWVzTWF0Y2hlck1vZGUuZXhjbHVkZSxcbiAgcHJvcGVydHk/OiBEeW5hbWljQ29uZmlnVmFsdWVcbik6IFN5c3RlbUNvbmZpZ092ZXJyaWRlUnVsZSB7XG4gIHByb3BlcnR5ID0gcHJvcGVydHkgPz8ge1xuICAgIGlkOiAnY3VzdG9tLmhpZGVGcm9tJyxcbiAgICB2YWx1ZToge1xuICAgICAgdml6OiB0cnVlLFxuICAgICAgbGVnZW5kOiBmYWxzZSxcbiAgICAgIHRvb2x0aXA6IGZhbHNlLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBfX3N5c3RlbVJlZjogZGlzcGxheU92ZXJyaWRlUmVmLFxuICAgIG1hdGNoZXI6IHtcbiAgICAgIGlkOiBGaWVsZE1hdGNoZXJJRC5ieU5hbWVzLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBtb2RlOiBtb2RlLFxuICAgICAgICBuYW1lczogbmFtZXMsXG4gICAgICAgIHByZWZpeDogbW9kZSA9PT0gQnlOYW1lc01hdGNoZXJNb2RlLmV4Y2x1ZGUgPyAnQWxsIGV4Y2VwdDonIDogdW5kZWZpbmVkLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwcm9wZXJ0aWVzOiBbXG4gICAgICB7XG4gICAgICAgIC4uLnByb3BlcnR5LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIHZpejogdHJ1ZSxcbiAgICAgICAgICBsZWdlbmQ6IGZhbHNlLFxuICAgICAgICAgIHRvb2x0aXA6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xufVxuXG5jb25zdCBjcmVhdGVFeHRlbmRlZE92ZXJyaWRlID0gKFxuICBjdXJyZW50OiBTeXN0ZW1Db25maWdPdmVycmlkZVJ1bGUsXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmcsXG4gIG1vZGUgPSBCeU5hbWVzTWF0Y2hlck1vZGUuZXhjbHVkZVxuKTogU3lzdGVtQ29uZmlnT3ZlcnJpZGVSdWxlID0+IHtcbiAgY29uc3QgcHJvcGVydHkgPSBjdXJyZW50LnByb3BlcnRpZXMuZmluZCgocCkgPT4gcC5pZCA9PT0gJ2N1c3RvbS5oaWRlRnJvbScpO1xuICBjb25zdCBleGlzdGluZyA9IGdldEV4aXN0aW5nRGlzcGxheU5hbWVzKGN1cnJlbnQpO1xuICBjb25zdCBpbmRleCA9IGV4aXN0aW5nLmZpbmRJbmRleCgobmFtZSkgPT4gbmFtZSA9PT0gZGlzcGxheU5hbWUpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBleGlzdGluZy5wdXNoKGRpc3BsYXlOYW1lKTtcbiAgfSBlbHNlIHtcbiAgICBleGlzdGluZy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZU92ZXJyaWRlKGV4aXN0aW5nLCBtb2RlLCBwcm9wZXJ0eSk7XG59O1xuXG5jb25zdCBnZXRFeGlzdGluZ0Rpc3BsYXlOYW1lcyA9IChydWxlOiBTeXN0ZW1Db25maWdPdmVycmlkZVJ1bGUpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IG5hbWVzID0gcnVsZS5tYXRjaGVyLm9wdGlvbnM/Lm5hbWVzO1xuICBpZiAoIUFycmF5LmlzQXJyYXkobmFtZXMpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBbLi4ubmFtZXNdO1xufTtcblxuY29uc3QgYWxsRmllbGRzQXJlRXhjbHVkZWQgPSAob3ZlcnJpZGU6IFN5c3RlbUNvbmZpZ092ZXJyaWRlUnVsZSwgZGF0YTogRGF0YUZyYW1lW10pOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIGdldEV4aXN0aW5nRGlzcGxheU5hbWVzKG92ZXJyaWRlKS5sZW5ndGggPT09IGdldERpc3BsYXlOYW1lcyhkYXRhKS5sZW5ndGg7XG59O1xuXG5jb25zdCBnZXREaXNwbGF5TmFtZXMgPSAoZGF0YTogRGF0YUZyYW1lW10sIGV4Y2x1ZGVOYW1lPzogc3RyaW5nKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCB1bmlxdWUgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICBmb3IgKGNvbnN0IGZyYW1lIG9mIGRhdGEpIHtcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZyYW1lLmZpZWxkcykge1xuICAgICAgaWYgKGZpZWxkLnR5cGUgIT09IEZpZWxkVHlwZS5udW1iZXIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBnZXRGaWVsZERpc3BsYXlOYW1lKGZpZWxkLCBmcmFtZSwgZGF0YSk7XG5cbiAgICAgIGlmIChuYW1lID09PSBleGNsdWRlTmFtZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdW5pcXVlLmFkZChuYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gQXJyYXkuZnJvbSh1bmlxdWUpO1xufTtcbiIsImltcG9ydCB7IHJlcG9ydE1ldGFBbmFseXRpY3MsIE1ldGFBbmFseXRpY3NFdmVudE5hbWUsIERhc2hib2FyZFZpZXdFdmVudFBheWxvYWQgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwgfSBmcm9tICcuL0Rhc2hib2FyZE1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGVtaXREYXNoYm9hcmRWaWV3RXZlbnQoZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbCkge1xuICBjb25zdCBldmVudERhdGE6IERhc2hib2FyZFZpZXdFdmVudFBheWxvYWQgPSB7XG4gICAgZGFzaGJvYXJkSWQ6IGRhc2hib2FyZC5pZCxcbiAgICBkYXNoYm9hcmROYW1lOiBkYXNoYm9hcmQudGl0bGUsXG4gICAgZGFzaGJvYXJkVWlkOiBkYXNoYm9hcmQudWlkLFxuICAgIGZvbGRlck5hbWU6IGRhc2hib2FyZC5tZXRhLmZvbGRlclRpdGxlLFxuICAgIGV2ZW50TmFtZTogTWV0YUFuYWx5dGljc0V2ZW50TmFtZS5EYXNoYm9hcmRWaWV3LFxuICB9O1xuXG4gIHJlcG9ydE1ldGFBbmFseXRpY3MoZXZlbnREYXRhKTtcbn1cbiIsImltcG9ydCB7IGxvY2F0aW9uVXRpbCwgc2V0V2Vla1N0YXJ0IH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgbm90aWZ5QXBwIH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiB9IGZyb20gJ2FwcC9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IGJhY2tlbmRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9iYWNrZW5kX3Nydic7XG5pbXBvcnQgeyBrZXliaW5kaW5nU3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMva2V5YmluZGluZ1Nydic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnYXBwL2NvcmUvc3RvcmUnO1xuaW1wb3J0IHsgZGFzaGJvYXJkTG9hZGVyU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zZXJ2aWNlcy9EYXNoYm9hcmRMb2FkZXJTcnYnO1xuaW1wb3J0IHsgRGFzaGJvYXJkU3J2LCBnZXREYXNoYm9hcmRTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3NlcnZpY2VzL0Rhc2hib2FyZFNydic7XG5pbXBvcnQgeyBnZXRUaW1lU3J2LCBUaW1lU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zZXJ2aWNlcy9UaW1lU3J2JztcbmltcG9ydCB7IGRhc2hib2FyZFdhdGNoZXIgfSBmcm9tICdhcHAvZmVhdHVyZXMvbGl2ZS9kYXNoYm9hcmQvZGFzaGJvYXJkV2F0Y2hlcic7XG5pbXBvcnQgeyB0b1N0YXRlS2V5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3ZhcmlhYmxlcy91dGlscyc7XG5pbXBvcnQgeyBEYXNoYm9hcmREVE8sIERhc2hib2FyZEluaXRQaGFzZSwgRGFzaGJvYXJkUm91dGVzLCBTdG9yZVN0YXRlLCBUaHVua0Rpc3BhdGNoLCBUaHVua1Jlc3VsdCB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IGNyZWF0ZURhc2hib2FyZFF1ZXJ5UnVubmVyIH0gZnJvbSAnLi4vLi4vcXVlcnkvc3RhdGUvRGFzaGJvYXJkUXVlcnlSdW5uZXIvRGFzaGJvYXJkUXVlcnlSdW5uZXInO1xuaW1wb3J0IHsgaW5pdFZhcmlhYmxlc1RyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdmFyaWFibGVzL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgZ2V0SWZFeGlzdHNMYXN0S2V5IH0gZnJvbSAnLi4vLi4vdmFyaWFibGVzL3N0YXRlL3NlbGVjdG9ycyc7XG5cbmltcG9ydCB7IERhc2hib2FyZE1vZGVsIH0gZnJvbSAnLi9EYXNoYm9hcmRNb2RlbCc7XG5pbXBvcnQgeyBlbWl0RGFzaGJvYXJkVmlld0V2ZW50IH0gZnJvbSAnLi9hbmFseXRpY3NQcm9jZXNzb3InO1xuaW1wb3J0IHsgZGFzaGJvYXJkSW5pdENvbXBsZXRlZCwgZGFzaGJvYXJkSW5pdEZhaWxlZCwgZGFzaGJvYXJkSW5pdEZldGNoaW5nLCBkYXNoYm9hcmRJbml0U2VydmljZXMgfSBmcm9tICcuL3JlZHVjZXJzJztcblxuZXhwb3J0IGludGVyZmFjZSBJbml0RGFzaGJvYXJkQXJncyB7XG4gIHVybFVpZD86IHN0cmluZztcbiAgdXJsU2x1Zz86IHN0cmluZztcbiAgdXJsVHlwZT86IHN0cmluZztcbiAgdXJsRm9sZGVySWQ/OiBzdHJpbmcgfCBudWxsO1xuICByb3V0ZU5hbWU/OiBzdHJpbmc7XG4gIGZpeFVybDogYm9vbGVhbjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXNoYm9hcmQoXG4gIGFyZ3M6IEluaXREYXNoYm9hcmRBcmdzLFxuICBkaXNwYXRjaDogVGh1bmtEaXNwYXRjaCxcbiAgZ2V0U3RhdGU6ICgpID0+IFN0b3JlU3RhdGVcbik6IFByb21pc2U8RGFzaGJvYXJkRFRPIHwgbnVsbD4ge1xuICAvLyBXaGVuIGNyZWF0aW5nIG5ldyBvciBhZGRpbmcgcGFuZWxzIHRvIGEgZGFzaGJvYXJkIGZyb20gZXhwbG9yZSB3ZSBsb2FkIGl0IGZyb20gbG9jYWwgc3RvcmFnZVxuICBjb25zdCBtb2RlbCA9IHN0b3JlLmdldE9iamVjdDxEYXNoYm9hcmREVE8+KERBU0hCT0FSRF9GUk9NX0xTX0tFWSk7XG4gIGlmIChtb2RlbCkge1xuICAgIHJlbW92ZURhc2hib2FyZFRvRmV0Y2hGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBzd2l0Y2ggKGFyZ3Mucm91dGVOYW1lKSB7XG4gICAgICBjYXNlIERhc2hib2FyZFJvdXRlcy5Ib21lOiB7XG4gICAgICAgIC8vIGxvYWQgaG9tZSBkYXNoXG4gICAgICAgIGNvbnN0IGRhc2hEVE86IERhc2hib2FyZERUTyA9IGF3YWl0IGJhY2tlbmRTcnYuZ2V0KCcvYXBpL2Rhc2hib2FyZHMvaG9tZScpO1xuXG4gICAgICAgIC8vIGlmIHVzZXIgc3BlY2lmaWVkIGEgY3VzdG9tIGhvbWUgZGFzaGJvYXJkIHJlZGlyZWN0IHRvIHRoYXRcbiAgICAgICAgaWYgKGRhc2hEVE8ucmVkaXJlY3RVcmkpIHtcbiAgICAgICAgICBjb25zdCBuZXdVcmwgPSBsb2NhdGlvblV0aWwuc3RyaXBCYXNlRnJvbVVybChkYXNoRFRPLnJlZGlyZWN0VXJpKTtcbiAgICAgICAgICBsb2NhdGlvblNlcnZpY2UucmVwbGFjZShuZXdVcmwpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGlzYWJsZSBzb21lIGFjdGlvbnMgb24gdGhlIGRlZmF1bHQgaG9tZSBkYXNoYm9hcmRcbiAgICAgICAgZGFzaERUTy5tZXRhLmNhblNhdmUgPSBmYWxzZTtcbiAgICAgICAgZGFzaERUTy5tZXRhLmNhblNoYXJlID0gZmFsc2U7XG4gICAgICAgIGRhc2hEVE8ubWV0YS5jYW5TdGFyID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBkYXNoRFRPO1xuICAgICAgfVxuICAgICAgY2FzZSBEYXNoYm9hcmRSb3V0ZXMuTm9ybWFsOiB7XG4gICAgICAgIGNvbnN0IGRhc2hEVE86IERhc2hib2FyZERUTyA9IGF3YWl0IGRhc2hib2FyZExvYWRlclNydi5sb2FkRGFzaGJvYXJkKGFyZ3MudXJsVHlwZSwgYXJncy51cmxTbHVnLCBhcmdzLnVybFVpZCk7XG5cbiAgICAgICAgaWYgKGFyZ3MuZml4VXJsICYmIGRhc2hEVE8ubWV0YS51cmwpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgY3VycmVudCB1cmwgaXMgY29ycmVjdCAobWlnaHQgYmUgb2xkIHNsdWcpXG4gICAgICAgICAgY29uc3QgZGFzaGJvYXJkVXJsID0gbG9jYXRpb25VdGlsLnN0cmlwQmFzZUZyb21VcmwoZGFzaERUTy5tZXRhLnVybCk7XG4gICAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSBsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5wYXRobmFtZTtcblxuICAgICAgICAgIGlmIChkYXNoYm9hcmRVcmwgIT09IGN1cnJlbnRQYXRoKSB7XG4gICAgICAgICAgICAvLyBTcHJlYWQgY3VycmVudCBsb2NhdGlvbiB0byBwZXJzaXN0IHNlYXJjaCBwYXJhbXMgdXNlZCBmb3IgbmF2aWdhdGlvblxuICAgICAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnJlcGxhY2Uoe1xuICAgICAgICAgICAgICAuLi5sb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKSxcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IGRhc2hib2FyZFVybCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCBjb3JyZWN0IHVybCBjb3JyZWN0aW5nJywgZGFzaGJvYXJkVXJsLCBjdXJyZW50UGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXNoRFRPO1xuICAgICAgfVxuICAgICAgY2FzZSBEYXNoYm9hcmRSb3V0ZXMuTmV3OiB7XG4gICAgICAgIHJldHVybiBnZXROZXdEYXNoYm9hcmRNb2RlbERhdGEoYXJncy51cmxGb2xkZXJJZCk7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6ICdVbmtub3duIHJvdXRlICcgKyBhcmdzLnJvdXRlTmFtZSB9O1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gSWdub3JlIGNhbmNlbGxlZCBlcnJvcnNcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2goZGFzaGJvYXJkSW5pdEZhaWxlZCh7IG1lc3NhZ2U6ICdGYWlsZWQgdG8gZmV0Y2ggZGFzaGJvYXJkJywgZXJyb3I6IGVyciB9KSk7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogVGhpcyBhY3Rpb24gKG9yIHNhZ2EpIGRvZXMgZXZlcnl0aGluZyBuZWVkZWQgdG8gYm9vdHN0cmFwIGEgZGFzaGJvYXJkICYgZGFzaGJvYXJkIG1vZGVsLlxuICogRmlyc3QgaXQgaGFuZGxlcyB0aGUgcHJvY2VzcyBvZiBmZXRjaGluZyB0aGUgZGFzaGJvYXJkLCBjb3JyZWN0aW5nIHRoZSB1cmwgaWYgcmVxdWlyZWQgKGNhdXNpbmcgcmVkaXJlY3RzL3VybCB1cGRhdGVzKVxuICpcbiAqIFRoaXMgaXMgdXNlZCBib3RoIGZvciBzaW5nbGUgZGFzaGJvYXJkICYgc29sbyBwYW5lbCByb3V0ZXMsIGhvbWUgJiBuZXcgZGFzaGJvYXJkIHJvdXRlcy5cbiAqXG4gKiBUaGVuIGl0IGhhbmRsZXMgdGhlIGluaXRpYWxpemluZyBvZiB0aGUgb2xkIGFuZ3VsYXIgc2VydmljZXMgdGhhdCB0aGUgZGFzaGJvYXJkIGNvbXBvbmVudHMgJiBwYW5lbHMgc3RpbGwgZGVwZW5kIG9uXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdERhc2hib2FyZChhcmdzOiBJbml0RGFzaGJvYXJkQXJncyk6IFRodW5rUmVzdWx0PHZvaWQ+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAvLyBzZXQgZmV0Y2hpbmcgc3RhdGVcbiAgICBkaXNwYXRjaChkYXNoYm9hcmRJbml0RmV0Y2hpbmcoKSk7XG5cbiAgICAvLyBmZXRjaCBkYXNoYm9hcmQgZGF0YVxuICAgIGNvbnN0IGRhc2hEVE8gPSBhd2FpdCBmZXRjaERhc2hib2FyZChhcmdzLCBkaXNwYXRjaCwgZ2V0U3RhdGUpO1xuXG4gICAgLy8gcmV0dXJucyBudWxsIGlmIHRoZXJlIHdhcyBhIHJlZGlyZWN0IG9yIGVycm9yXG4gICAgaWYgKCFkYXNoRFRPKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc2V0IGluaXRpYWxpemluZyBzdGF0ZVxuICAgIGRpc3BhdGNoKGRhc2hib2FyZEluaXRTZXJ2aWNlcygpKTtcblxuICAgIC8vIGNyZWF0ZSBtb2RlbFxuICAgIGxldCBkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsO1xuICAgIHRyeSB7XG4gICAgICBkYXNoYm9hcmQgPSBuZXcgRGFzaGJvYXJkTW9kZWwoZGFzaERUTy5kYXNoYm9hcmQsIGRhc2hEVE8ubWV0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkaXNwYXRjaChkYXNoYm9hcmRJbml0RmFpbGVkKHsgbWVzc2FnZTogJ0ZhaWxlZCBjcmVhdGUgZGFzaGJvYXJkIG1vZGVsJywgZXJyb3I6IGVyciB9KSk7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWRkIG1pc3Npbmcgb3JnSWQgcXVlcnkgcGFyYW1cbiAgICBjb25zdCBzdG9yZVN0YXRlID0gZ2V0U3RhdGUoKTtcbiAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGxvY2F0aW9uU2VydmljZS5nZXRTZWFyY2hPYmplY3QoKTtcblxuICAgIGlmICghcXVlcnlQYXJhbXMub3JnSWQpIHtcbiAgICAgIC8vIFRPRE8gdGhpcyBpcyBjdXJyZW50bHkgbm90IHBvc3NpYmxlIHdpdGggdGhlIExvY2F0aW9uU2VydmljZSBBUElcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHsgb3JnSWQ6IHN0b3JlU3RhdGUudXNlci5vcmdJZCB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBpbml0IHNlcnZpY2VzXG4gICAgY29uc3QgdGltZVNydjogVGltZVNydiA9IGdldFRpbWVTcnYoKTtcbiAgICBjb25zdCBkYXNoYm9hcmRTcnY6IERhc2hib2FyZFNydiA9IGdldERhc2hib2FyZFNydigpO1xuXG4gICAgLy8gbGVnYWN5IHNydiBzdGF0ZSwgd2UgbmVlZCB0aGlzIHZhbHVlIHVwZGF0ZWQgZm9yIGJ1aWx0LWluIGFubm90YXRpb25zXG4gICAgZGFzaGJvYXJkU3J2LnNldEN1cnJlbnQoZGFzaGJvYXJkKTtcblxuICAgIHRpbWVTcnYuaW5pdChkYXNoYm9hcmQpO1xuXG4gICAgY29uc3QgZGFzaGJvYXJkVWlkID0gdG9TdGF0ZUtleShhcmdzLnVybFVpZCA/PyBkYXNoYm9hcmQudWlkKTtcbiAgICAvLyB0ZW1wbGF0ZSB2YWx1ZXMgc2VydmljZSBuZWVkcyB0byBpbml0aWFsaXplIGNvbXBsZXRlbHkgYmVmb3JlIHRoZSByZXN0IG9mIHRoZSBkYXNoYm9hcmQgY2FuIGxvYWRcbiAgICBhd2FpdCBkaXNwYXRjaChpbml0VmFyaWFibGVzVHJhbnNhY3Rpb24oZGFzaGJvYXJkVWlkLCBkYXNoYm9hcmQpKTtcblxuICAgIC8vIERhc2hib2FyZFF1ZXJ5UnVubmVyIG5lZWRzIHRvIHJ1biBhZnRlciBhbGwgdmFyaWFibGVzIGhhdmUgYmVlbiByZXNvbHZlZCBzbyB0aGF0IGFueSBhbm5vdGF0aW9uIHF1ZXJ5IGluY2x1ZGluZyBhIHZhcmlhYmxlXG4gICAgLy8gd2lsbCBiZSBjb3JyZWN0bHkgcmVzb2x2ZWRcbiAgICBjb25zdCBydW5uZXIgPSBjcmVhdGVEYXNoYm9hcmRRdWVyeVJ1bm5lcih7IGRhc2hib2FyZCwgdGltZVNydiB9KTtcbiAgICBydW5uZXIucnVuKHsgZGFzaGJvYXJkLCByYW5nZTogdGltZVNydi50aW1lUmFuZ2UoKSB9KTtcblxuICAgIGlmIChnZXRJZkV4aXN0c0xhc3RLZXkoZ2V0U3RhdGUoKSkgIT09IGRhc2hib2FyZFVpZCkge1xuICAgICAgLy8gaWYgYSBwcmV2aW91cyBkYXNoYm9hcmQgaGFzIHNsb3cgcnVubmluZyB2YXJpYWJsZSBxdWVyaWVzIHRoZSBiYXRjaCB1aWQgd2lsbCBiZSB0aGUgbmV3IG9uZVxuICAgICAgLy8gYnV0IHRoZSBhcmdzLnVybFVpZCB3aWxsIGJlIHRoZSBzYW1lIGFzIGJlZm9yZSBpbml0VmFyaWFibGVzVHJhbnNhY3Rpb24gd2FzIGNhbGxlZCBzbyB0aGVuIHdlIGNhbid0IGNvbnRpbnVlIGluaXRpYWxpemluZ1xuICAgICAgLy8gdGhlIHByZXZpb3VzIGRhc2hib2FyZC5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBkYXNoYm9hcmQgaXMgaW4gYSBkaWZmZXJlbnQgaW5pdCBwaGFzZSBpdCBtZWFucyBpdCBjYW5jZWxsZWQgZHVyaW5nIHNlcnZpY2UgaW5pdFxuICAgIGlmIChnZXRTdGF0ZSgpLmRhc2hib2FyZC5pbml0UGhhc2UgIT09IERhc2hib2FyZEluaXRQaGFzZS5TZXJ2aWNlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBkYXNoYm9hcmQucHJvY2Vzc1JlcGVhdHMoKTtcblxuICAgICAgLy8gaGFuZGxlIGF1dG8gZml4IGV4cGVyaW1lbnRhbCBmZWF0dXJlXG4gICAgICBpZiAocXVlcnlQYXJhbXMuYXV0b2ZpdHBhbmVscykge1xuICAgICAgICBkYXNoYm9hcmQuYXV0b0ZpdFBhbmVscyh3aW5kb3cuaW5uZXJIZWlnaHQsIHF1ZXJ5UGFyYW1zLmtpb3NrKTtcbiAgICAgIH1cblxuICAgICAga2V5YmluZGluZ1Nydi5zZXR1cERhc2hib2FyZEJpbmRpbmdzKGRhc2hib2FyZCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oJ0Rhc2hib2FyZCBpbml0IGZhaWxlZCcsIGVycikpKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG5cbiAgICAvLyBzZW5kIG9wZW4gZGFzaGJvYXJkIGV2ZW50XG4gICAgaWYgKGFyZ3Mucm91dGVOYW1lICE9PSBEYXNoYm9hcmRSb3V0ZXMuTmV3KSB7XG4gICAgICBlbWl0RGFzaGJvYXJkVmlld0V2ZW50KGRhc2hib2FyZCk7XG5cbiAgICAgIC8vIExpc3RlbiBmb3IgY2hhbmdlcyBvbiB0aGUgY3VycmVudCBkYXNoYm9hcmRcbiAgICAgIGRhc2hib2FyZFdhdGNoZXIud2F0Y2goZGFzaGJvYXJkLnVpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhc2hib2FyZFdhdGNoZXIubGVhdmUoKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgd2VlayBzdGFydFxuICAgIGlmIChkYXNoYm9hcmQud2Vla1N0YXJ0ICE9PSAnJykge1xuICAgICAgc2V0V2Vla1N0YXJ0KGRhc2hib2FyZC53ZWVrU3RhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRXZWVrU3RhcnQoY29uZmlnLmJvb3REYXRhLnVzZXIud2Vla1N0YXJ0KTtcbiAgICB9XG5cbiAgICAvLyB5YXkgd2UgYXJlIGRvbmVcbiAgICBkaXNwYXRjaChkYXNoYm9hcmRJbml0Q29tcGxldGVkKGRhc2hib2FyZCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3RGFzaGJvYXJkTW9kZWxEYXRhKHVybEZvbGRlcklkPzogc3RyaW5nIHwgbnVsbCk6IGFueSB7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgbWV0YToge1xuICAgICAgY2FuU3RhcjogZmFsc2UsXG4gICAgICBjYW5TaGFyZTogZmFsc2UsXG4gICAgICBpc05ldzogdHJ1ZSxcbiAgICAgIGZvbGRlcklkOiAwLFxuICAgIH0sXG4gICAgZGFzaGJvYXJkOiB7XG4gICAgICB0aXRsZTogJ05ldyBkYXNoYm9hcmQnLFxuICAgICAgcGFuZWxzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnYWRkLXBhbmVsJyxcbiAgICAgICAgICBncmlkUG9zOiB7IHg6IDAsIHk6IDAsIHc6IDEyLCBoOiA5IH0sXG4gICAgICAgICAgdGl0bGU6ICdQYW5lbCBUaXRsZScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH07XG5cbiAgaWYgKHVybEZvbGRlcklkKSB7XG4gICAgZGF0YS5tZXRhLmZvbGRlcklkID0gcGFyc2VJbnQodXJsRm9sZGVySWQsIDEwKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG5jb25zdCBEQVNIQk9BUkRfRlJPTV9MU19LRVkgPSAnREFTSEJPQVJEX0ZST01fTFNfS0VZJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldERhc2hib2FyZFRvRmV0Y2hGcm9tTG9jYWxTdG9yYWdlKG1vZGVsOiBEYXNoYm9hcmREVE8pIHtcbiAgc3RvcmUuc2V0T2JqZWN0KERBU0hCT0FSRF9GUk9NX0xTX0tFWSwgbW9kZWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRGFzaGJvYXJkVG9GZXRjaEZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gIHN0b3JlLmRlbGV0ZShEQVNIQk9BUkRfRlJPTV9MU19LRVkpO1xufVxuIiwiaW1wb3J0IHsgUGFuZWxNZW51SXRlbSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQW5ndWxhckNvbXBvbmVudCwgZ2V0RGF0YVNvdXJjZVNydiwgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBQYW5lbEN0cmwgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IERhc2hib2FyZE1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9EYXNoYm9hcmRNb2RlbCc7XG5pbXBvcnQgeyBQYW5lbE1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZS9QYW5lbE1vZGVsJztcbmltcG9ydCB7XG4gIGFkZExpYnJhcnlQYW5lbCxcbiAgY29weVBhbmVsLFxuICBkdXBsaWNhdGVQYW5lbCxcbiAgcmVtb3ZlUGFuZWwsXG4gIHNoYXJlUGFuZWwsXG4gIHVubGlua0xpYnJhcnlQYW5lbCxcbn0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC91dGlscy9wYW5lbCc7XG5pbXBvcnQgeyBpc1BhbmVsTW9kZWxMaWJyYXJ5UGFuZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvbGlicmFyeS1wYW5lbHMvZ3VhcmQnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdhcHAvc3RvcmUvc3RvcmUnO1xuXG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBnZXRFeHBsb3JlVXJsIH0gZnJvbSAnLi4vLi4vLi4vY29yZS91dGlscy9leHBsb3JlJztcbmltcG9ydCB7IG5hdmlnYXRlVG9FeHBsb3JlIH0gZnJvbSAnLi4vLi4vZXhwbG9yZS9zdGF0ZS9tYWluJztcbmltcG9ydCB7IGdldFRpbWVTcnYgfSBmcm9tICcuLi9zZXJ2aWNlcy9UaW1lU3J2JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhbmVsTWVudShcbiAgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbCxcbiAgcGFuZWw6IFBhbmVsTW9kZWwsXG4gIGFuZ3VsYXJDb21wb25lbnQ/OiBBbmd1bGFyQ29tcG9uZW50IHwgbnVsbFxuKTogUGFuZWxNZW51SXRlbVtdIHtcbiAgY29uc3Qgb25WaWV3UGFuZWwgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8YW55PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbG9jYXRpb25TZXJ2aWNlLnBhcnRpYWwoe1xuICAgICAgdmlld1BhbmVsOiBwYW5lbC5pZCxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvbkVkaXRQYW5lbCA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxhbnk+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbCh7XG4gICAgICBlZGl0UGFuZWw6IHBhbmVsLmlkLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uU2hhcmVQYW5lbCA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxhbnk+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzaGFyZVBhbmVsKGRhc2hib2FyZCwgcGFuZWwpO1xuICB9O1xuXG4gIGNvbnN0IG9uQWRkTGlicmFyeVBhbmVsID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZExpYnJhcnlQYW5lbChkYXNoYm9hcmQsIHBhbmVsKTtcbiAgfTtcblxuICBjb25zdCBvblVubGlua0xpYnJhcnlQYW5lbCA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxhbnk+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB1bmxpbmtMaWJyYXJ5UGFuZWwocGFuZWwpO1xuICB9O1xuXG4gIGNvbnN0IG9uSW5zcGVjdFBhbmVsID0gKHRhYj86IHN0cmluZykgPT4ge1xuICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHtcbiAgICAgIGluc3BlY3Q6IHBhbmVsLmlkLFxuICAgICAgaW5zcGVjdFRhYjogdGFiLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uTW9yZSA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxhbnk+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBjb25zdCBvbkR1cGxpY2F0ZVBhbmVsID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGR1cGxpY2F0ZVBhbmVsKGRhc2hib2FyZCwgcGFuZWwpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ29weVBhbmVsID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvcHlQYW5lbChwYW5lbCk7XG4gIH07XG5cbiAgY29uc3Qgb25SZW1vdmVQYW5lbCA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxhbnk+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZW1vdmVQYW5lbChkYXNoYm9hcmQsIHBhbmVsLCB0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvbk5hdmlnYXRlVG9FeHBsb3JlID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG9wZW5Jbk5ld1dpbmRvdyA9XG4gICAgICBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgPyAodXJsOiBzdHJpbmcpID0+IHdpbmRvdy5vcGVuKGAke2NvbmZpZy5hcHBTdWJVcmx9JHt1cmx9YCkgOiB1bmRlZmluZWQ7XG4gICAgc3RvcmUuZGlzcGF0Y2gobmF2aWdhdGVUb0V4cGxvcmUocGFuZWwsIHsgZ2V0RGF0YVNvdXJjZVNydiwgZ2V0VGltZVNydiwgZ2V0RXhwbG9yZVVybCwgb3BlbkluTmV3V2luZG93IH0pIGFzIGFueSk7XG4gIH07XG5cbiAgY29uc3QgbWVudTogUGFuZWxNZW51SXRlbVtdID0gW107XG5cbiAgaWYgKCFwYW5lbC5pc0VkaXRpbmcpIHtcbiAgICBtZW51LnB1c2goe1xuICAgICAgdGV4dDogJ1ZpZXcnLFxuICAgICAgaWNvbkNsYXNzTmFtZTogJ2V5ZScsXG4gICAgICBvbkNsaWNrOiBvblZpZXdQYW5lbCxcbiAgICAgIHNob3J0Y3V0OiAndicsXG4gICAgfSk7XG4gIH1cblxuICBpZiAoZGFzaGJvYXJkLmNhbkVkaXRQYW5lbChwYW5lbCkgJiYgIXBhbmVsLmlzRWRpdGluZykge1xuICAgIG1lbnUucHVzaCh7XG4gICAgICB0ZXh0OiAnRWRpdCcsXG4gICAgICBpY29uQ2xhc3NOYW1lOiAnZWRpdCcsXG4gICAgICBvbkNsaWNrOiBvbkVkaXRQYW5lbCxcbiAgICAgIHNob3J0Y3V0OiAnZScsXG4gICAgfSk7XG4gIH1cblxuICBtZW51LnB1c2goe1xuICAgIHRleHQ6ICdTaGFyZScsXG4gICAgaWNvbkNsYXNzTmFtZTogJ3NoYXJlLWFsdCcsXG4gICAgb25DbGljazogb25TaGFyZVBhbmVsLFxuICAgIHNob3J0Y3V0OiAncCBzJyxcbiAgfSk7XG5cbiAgaWYgKGNvbnRleHRTcnYuaGFzQWNjZXNzVG9FeHBsb3JlKCkgJiYgIShwYW5lbC5wbHVnaW4gJiYgcGFuZWwucGx1Z2luLm1ldGEuc2tpcERhdGFRdWVyeSkpIHtcbiAgICBtZW51LnB1c2goe1xuICAgICAgdGV4dDogJ0V4cGxvcmUnLFxuICAgICAgaWNvbkNsYXNzTmFtZTogJ2NvbXBhc3MnLFxuICAgICAgc2hvcnRjdXQ6ICd4JyxcbiAgICAgIG9uQ2xpY2s6IG9uTmF2aWdhdGVUb0V4cGxvcmUsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBpbnNwZWN0TWVudTogUGFuZWxNZW51SXRlbVtdID0gW107XG5cbiAgLy8gT25seSBzaG93IHRoZXNlIGluc3BlY3QgYWN0aW9ucyBmb3IgZGF0YSBwbHVnaW5zXG4gIGlmIChwYW5lbC5wbHVnaW4gJiYgIXBhbmVsLnBsdWdpbi5tZXRhLnNraXBEYXRhUXVlcnkpIHtcbiAgICBpbnNwZWN0TWVudS5wdXNoKHtcbiAgICAgIHRleHQ6ICdEYXRhJyxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IG9uSW5zcGVjdFBhbmVsKCdkYXRhJyksXG4gICAgfSk7XG5cbiAgICBpZiAoZGFzaGJvYXJkLm1ldGEuY2FuRWRpdCkge1xuICAgICAgaW5zcGVjdE1lbnUucHVzaCh7XG4gICAgICAgIHRleHQ6ICdRdWVyeScsXG4gICAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IG9uSW5zcGVjdFBhbmVsKCdxdWVyeScpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaW5zcGVjdE1lbnUucHVzaCh7XG4gICAgdGV4dDogJ1BhbmVsIEpTT04nLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IG9uSW5zcGVjdFBhbmVsKCdqc29uJyksXG4gIH0pO1xuXG4gIG1lbnUucHVzaCh7XG4gICAgdHlwZTogJ3N1Ym1lbnUnLFxuICAgIHRleHQ6ICdJbnNwZWN0JyxcbiAgICBpY29uQ2xhc3NOYW1lOiAnaW5mby1jaXJjbGUnLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IG9uSW5zcGVjdFBhbmVsKCksXG4gICAgc2hvcnRjdXQ6ICdpJyxcbiAgICBzdWJNZW51OiBpbnNwZWN0TWVudSxcbiAgfSk7XG5cbiAgY29uc3Qgc3ViTWVudTogUGFuZWxNZW51SXRlbVtdID0gW107XG5cbiAgaWYgKGRhc2hib2FyZC5jYW5FZGl0UGFuZWwocGFuZWwpICYmICEocGFuZWwuaXNWaWV3aW5nIHx8IHBhbmVsLmlzRWRpdGluZykpIHtcbiAgICBzdWJNZW51LnB1c2goe1xuICAgICAgdGV4dDogJ0R1cGxpY2F0ZScsXG4gICAgICBvbkNsaWNrOiBvbkR1cGxpY2F0ZVBhbmVsLFxuICAgICAgc2hvcnRjdXQ6ICdwIGQnLFxuICAgIH0pO1xuXG4gICAgc3ViTWVudS5wdXNoKHtcbiAgICAgIHRleHQ6ICdDb3B5JyxcbiAgICAgIG9uQ2xpY2s6IG9uQ29weVBhbmVsLFxuICAgIH0pO1xuXG4gICAgaWYgKGlzUGFuZWxNb2RlbExpYnJhcnlQYW5lbChwYW5lbCkpIHtcbiAgICAgIHN1Yk1lbnUucHVzaCh7XG4gICAgICAgIHRleHQ6ICdVbmxpbmsgbGlicmFyeSBwYW5lbCcsXG4gICAgICAgIG9uQ2xpY2s6IG9uVW5saW5rTGlicmFyeVBhbmVsLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Yk1lbnUucHVzaCh7XG4gICAgICAgIHRleHQ6ICdDcmVhdGUgbGlicmFyeSBwYW5lbCcsXG4gICAgICAgIG9uQ2xpY2s6IG9uQWRkTGlicmFyeVBhbmVsLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gYWRkIG9sZCBhbmd1bGFyIHBhbmVsIG9wdGlvbnNcbiAgaWYgKGFuZ3VsYXJDb21wb25lbnQpIHtcbiAgICBjb25zdCBzY29wZSA9IGFuZ3VsYXJDb21wb25lbnQuZ2V0U2NvcGUoKTtcbiAgICBjb25zdCBwYW5lbEN0cmw6IFBhbmVsQ3RybCA9IHNjb3BlLiQkY2hpbGRIZWFkLmN0cmw7XG4gICAgY29uc3QgYW5ndWxhck1lbnVJdGVtcyA9IHBhbmVsQ3RybC5nZXRFeHRlbmRlZE1lbnUoKTtcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhbmd1bGFyTWVudUl0ZW1zKSB7XG4gICAgICBjb25zdCByZWFjdEl0ZW06IFBhbmVsTWVudUl0ZW0gPSB7XG4gICAgICAgIHRleHQ6IGl0ZW0udGV4dCxcbiAgICAgICAgaHJlZjogaXRlbS5ocmVmLFxuICAgICAgICBzaG9ydGN1dDogaXRlbS5zaG9ydGN1dCxcbiAgICAgIH07XG5cbiAgICAgIGlmIChpdGVtLmNsaWNrKSB7XG4gICAgICAgIHJlYWN0SXRlbS5vbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgIHNjb3BlLiRldmFsKGl0ZW0uY2xpY2ssIHsgY3RybDogcGFuZWxDdHJsIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzdWJNZW51LnB1c2gocmVhY3RJdGVtKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIXBhbmVsLmlzRWRpdGluZyAmJiBzdWJNZW51Lmxlbmd0aCkge1xuICAgIG1lbnUucHVzaCh7XG4gICAgICB0eXBlOiAnc3VibWVudScsXG4gICAgICB0ZXh0OiAnTW9yZS4uLicsXG4gICAgICBpY29uQ2xhc3NOYW1lOiAnY3ViZScsXG4gICAgICBzdWJNZW51LFxuICAgICAgb25DbGljazogb25Nb3JlLFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGRhc2hib2FyZC5jYW5FZGl0UGFuZWwocGFuZWwpICYmICFwYW5lbC5pc0VkaXRpbmcgJiYgIXBhbmVsLmlzVmlld2luZykge1xuICAgIG1lbnUucHVzaCh7IHR5cGU6ICdkaXZpZGVyJywgdGV4dDogJycgfSk7XG5cbiAgICBtZW51LnB1c2goe1xuICAgICAgdGV4dDogJ1JlbW92ZScsXG4gICAgICBpY29uQ2xhc3NOYW1lOiAndHJhc2gtYWx0JyxcbiAgICAgIG9uQ2xpY2s6IG9uUmVtb3ZlUGFuZWwsXG4gICAgICBzaG9ydGN1dDogJ3AgcicsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbWVudTtcbn1cbiIsImltcG9ydCB7IGFwcGx5RmllbGRPdmVycmlkZXMsIEFycmF5RGF0YUZyYW1lLCBnZXREZWZhdWx0VGltZVJhbmdlLCBMb2FkaW5nU3RhdGUsIFBhbmVsRGF0YSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcblxuaW1wb3J0IHsgU25hcHNob3RXb3JrZXIgfSBmcm9tICcuLi8uLi9xdWVyeS9zdGF0ZS9EYXNoYm9hcmRRdWVyeVJ1bm5lci9TbmFwc2hvdFdvcmtlcic7XG5pbXBvcnQgeyBnZXRQcm9jZXNzZWREYXRhRnJhbWVzIH0gZnJvbSAnLi4vLi4vcXVlcnkvc3RhdGUvcnVuUmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRUaW1lU3J2IH0gZnJvbSAnLi4vc2VydmljZXMvVGltZVNydic7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCwgUGFuZWxNb2RlbCB9IGZyb20gJy4uL3N0YXRlJztcblxuaW1wb3J0IHsgYXBwbHlQYW5lbFRpbWVPdmVycmlkZXMgfSBmcm9tICcuL3BhbmVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTbmFwc2hvdERhdGEocGFuZWw6IFBhbmVsTW9kZWwsIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWwpOiBQYW5lbERhdGEge1xuICBjb25zdCBkYXRhID0gZ2V0UHJvY2Vzc2VkRGF0YUZyYW1lcyhwYW5lbC5zbmFwc2hvdERhdGEpO1xuICBjb25zdCB3b3JrZXIgPSBuZXcgU25hcHNob3RXb3JrZXIoKTtcbiAgY29uc3Qgb3B0aW9ucyA9IHsgZGFzaGJvYXJkLCByYW5nZTogZ2V0RGVmYXVsdFRpbWVSYW5nZSgpIH07XG4gIGNvbnN0IGFubm90YXRpb25FdmVudHMgPSB3b3JrZXIuY2FuV29yayhvcHRpb25zKSA/IHdvcmtlci5nZXRBbm5vdGF0aW9uc0luU25hcHNob3QoZGFzaGJvYXJkLCBwYW5lbC5pZCkgOiBbXTtcbiAgY29uc3QgYW5ub3RhdGlvbnMgPSBbbmV3IEFycmF5RGF0YUZyYW1lKGFubm90YXRpb25FdmVudHMpXTtcbiAgY29uc3QgdGltZURhdGEgPSBhcHBseVBhbmVsVGltZU92ZXJyaWRlcyhwYW5lbCwgZ2V0VGltZVNydigpLnRpbWVSYW5nZSgpKTtcblxuICByZXR1cm4ge1xuICAgIHRpbWVSYW5nZTogdGltZURhdGEudGltZVJhbmdlLFxuICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICBzZXJpZXM6IGFwcGx5RmllbGRPdmVycmlkZXMoe1xuICAgICAgZGF0YSxcbiAgICAgIGZpZWxkQ29uZmlnOiB7XG4gICAgICAgIGRlZmF1bHRzOiB7fSxcbiAgICAgICAgb3ZlcnJpZGVzOiBbXSxcbiAgICAgIH0sXG4gICAgICByZXBsYWNlVmFyaWFibGVzOiBwYW5lbC5yZXBsYWNlVmFyaWFibGVzLFxuICAgICAgZmllbGRDb25maWdSZWdpc3RyeTogcGFuZWwucGx1Z2luIS5maWVsZENvbmZpZ1JlZ2lzdHJ5LFxuICAgICAgdGhlbWU6IGNvbmZpZy50aGVtZTIsXG4gICAgICB0aW1lWm9uZTogZGFzaGJvYXJkLmdldFRpbWV6b25lKCksXG4gICAgfSksXG4gICAgYW5ub3RhdGlvbnMsXG4gIH07XG59XG4iLCJleHBvcnQgZW51bSBJbnNwZWN0VGFiIHtcbiAgRGF0YSA9ICdkYXRhJyxcbiAgTWV0YSA9ICdtZXRhJywgLy8gV2hlbiByZXN1bHQgbWV0YWRhdGEgZXhpc3RzXG4gIEVycm9yID0gJ2Vycm9yJyxcbiAgU3RhdHMgPSAnc3RhdHMnLFxuICBKU09OID0gJ2pzb24nLFxuICBRdWVyeSA9ICdxdWVyeScsXG4gIEFjdGlvbnMgPSAnYWN0aW9ucycsIC8vIEFMUEhBIVxufVxuIiwiaW1wb3J0IHtcbiAgRGF0YUxpbmssXG4gIERpc3BsYXlWYWx1ZSxcbiAgRmllbGREaXNwbGF5LFxuICBmb3JtYXR0ZWRWYWx1ZVRvU3RyaW5nLFxuICBnZXRGaWVsZERpc3BsYXlWYWx1ZXNQcm94eSxcbiAgZ2V0VGltZUZpZWxkLFxuICBJbnRlcnBvbGF0ZUZ1bmN0aW9uLFxuICBMYWJlbHMsXG4gIExpbmtNb2RlbFN1cHBsaWVyLFxuICBTY29wZWRWYXIsXG4gIFNjb3BlZFZhcnMsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUGFuZWxNb2RlbCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUvUGFuZWxNb2RlbCc7XG5cbmltcG9ydCB7IGdldExpbmtTcnYgfSBmcm9tICcuL2xpbmtfc3J2JztcblxuaW50ZXJmYWNlIFNlcmllc1ZhcnMge1xuICBuYW1lPzogc3RyaW5nO1xuICByZWZJZD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEZpZWxkVmFycyB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFiZWxzPzogTGFiZWxzO1xufVxuXG5pbnRlcmZhY2UgVmFsdWVWYXJzIHtcbiAgcmF3OiBhbnk7XG4gIG51bWVyaWM6IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xuICB0aW1lPzogbnVtYmVyO1xuICBjYWxjPzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgRGF0YVZpZXdWYXJzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgcmVmSWQ/OiBzdHJpbmc7XG4gIGZpZWxkcz86IFJlY29yZDxzdHJpbmcsIERpc3BsYXlWYWx1ZT47XG59XG5cbmludGVyZmFjZSBEYXRhTGlua1Njb3BlZFZhcnMgZXh0ZW5kcyBTY29wZWRWYXJzIHtcbiAgX19zZXJpZXM6IFNjb3BlZFZhcjxTZXJpZXNWYXJzPjtcbiAgX19maWVsZDogU2NvcGVkVmFyPEZpZWxkVmFycz47XG4gIF9fdmFsdWU6IFNjb3BlZFZhcjxWYWx1ZVZhcnM+O1xuICBfX2RhdGE6IFNjb3BlZFZhcjxEYXRhVmlld1ZhcnM+O1xufVxuXG4vKipcbiAqIExpbmsgc3VwcGxpZXJzIGNyZWF0ZXMgbGluayBtb2RlbHMgYmFzZWQgb24gYSBsaW5rIG9yaWdpblxuICovXG5leHBvcnQgY29uc3QgZ2V0RmllbGRMaW5rc1N1cHBsaWVyID0gKHZhbHVlOiBGaWVsZERpc3BsYXkpOiBMaW5rTW9kZWxTdXBwbGllcjxGaWVsZERpc3BsYXk+IHwgdW5kZWZpbmVkID0+IHtcbiAgY29uc3QgbGlua3MgPSB2YWx1ZS5maWVsZC5saW5rcztcbiAgaWYgKCFsaW5rcyB8fCBsaW5rcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMaW5rczogKHJlcGxhY2VWYXJpYWJsZXM6IEludGVycG9sYXRlRnVuY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHNjb3BlZFZhcnM6IFBhcnRpYWw8RGF0YUxpbmtTY29wZWRWYXJzPiA9IHt9O1xuXG4gICAgICBpZiAodmFsdWUudmlldykge1xuICAgICAgICBjb25zdCB7IGRhdGFGcmFtZSB9ID0gdmFsdWUudmlldztcblxuICAgICAgICBzY29wZWRWYXJzWydfX3NlcmllcyddID0ge1xuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhRnJhbWUubmFtZSxcbiAgICAgICAgICAgIHJlZklkOiBkYXRhRnJhbWUucmVmSWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0ZXh0OiAnU2VyaWVzJyxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBmaWVsZCA9IHZhbHVlLmNvbEluZGV4ICE9PSB1bmRlZmluZWQgPyBkYXRhRnJhbWUuZmllbGRzW3ZhbHVlLmNvbEluZGV4XSA6IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICBzY29wZWRWYXJzWydfX2ZpZWxkJ10gPSB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICBuYW1lOiBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICBsYWJlbHM6IGZpZWxkLmxhYmVscyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXh0OiAnRmllbGQnLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAodmFsdWUucm93SW5kZXggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5yb3dJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBjb25zdCB7IHRpbWVGaWVsZCB9ID0gZ2V0VGltZUZpZWxkKGRhdGFGcmFtZSk7XG4gICAgICAgICAgICBzY29wZWRWYXJzWydfX3ZhbHVlJ10gPSB7XG4gICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgcmF3OiBmaWVsZC52YWx1ZXMuZ2V0KHZhbHVlLnJvd0luZGV4KSxcbiAgICAgICAgICAgICAgICBudW1lcmljOiB2YWx1ZS5kaXNwbGF5Lm51bWVyaWMsXG4gICAgICAgICAgICAgICAgdGV4dDogZm9ybWF0dGVkVmFsdWVUb1N0cmluZyh2YWx1ZS5kaXNwbGF5KSxcbiAgICAgICAgICAgICAgICB0aW1lOiB0aW1lRmllbGQgPyB0aW1lRmllbGQudmFsdWVzLmdldCh2YWx1ZS5yb3dJbmRleCkgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRleHQ6ICdWYWx1ZScsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEV4cG9zZSBvdGhlciB2YWx1ZXMgb24gdGhlIHJvd1xuICAgICAgICAgIGlmICh2YWx1ZS52aWV3KSB7XG4gICAgICAgICAgICBzY29wZWRWYXJzWydfX2RhdGEnXSA9IHtcbiAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBkYXRhRnJhbWUubmFtZSxcbiAgICAgICAgICAgICAgICByZWZJZDogZGF0YUZyYW1lLnJlZklkLFxuICAgICAgICAgICAgICAgIGZpZWxkczogZ2V0RmllbGREaXNwbGF5VmFsdWVzUHJveHkoe1xuICAgICAgICAgICAgICAgICAgZnJhbWU6IGRhdGFGcmFtZSxcbiAgICAgICAgICAgICAgICAgIHJvd0luZGV4OiB2YWx1ZS5yb3dJbmRleCEsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRleHQ6ICdEYXRhJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNhbGN1bGF0aW9uXG4gICAgICAgICAgc2NvcGVkVmFyc1snX192YWx1ZSddID0ge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgcmF3OiB2YWx1ZS5kaXNwbGF5Lm51bWVyaWMsXG4gICAgICAgICAgICAgIG51bWVyaWM6IHZhbHVlLmRpc3BsYXkubnVtZXJpYyxcbiAgICAgICAgICAgICAgdGV4dDogZm9ybWF0dGVkVmFsdWVUb1N0cmluZyh2YWx1ZS5kaXNwbGF5KSxcbiAgICAgICAgICAgICAgY2FsYzogdmFsdWUubmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZXh0OiAnVmFsdWUnLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdWQUxVRScsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVwbGFjZTogSW50ZXJwb2xhdGVGdW5jdGlvbiA9ICh2YWx1ZTogc3RyaW5nLCB2YXJzOiBTY29wZWRWYXJzIHwgdW5kZWZpbmVkLCBmbXQ/OiBzdHJpbmcgfCBGdW5jdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBmaW5hbFZhcnM6IFNjb3BlZFZhcnMgPSB7XG4gICAgICAgICAgLi4uKHNjb3BlZFZhcnMgYXMgU2NvcGVkVmFycyksXG4gICAgICAgICAgLi4udmFycyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VWYXJpYWJsZXModmFsdWUsIGZpbmFsVmFycywgZm10KTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBsaW5rcy5tYXAoKGxpbms6IERhdGFMaW5rKSA9PiB7XG4gICAgICAgIHJldHVybiBnZXRMaW5rU3J2KCkuZ2V0RGF0YUxpbmtVSU1vZGVsKGxpbmssIHJlcGxhY2UsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGFuZWxMaW5rc1N1cHBsaWVyID0gKHBhbmVsOiBQYW5lbE1vZGVsKTogTGlua01vZGVsU3VwcGxpZXI8UGFuZWxNb2RlbD4gfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCBsaW5rcyA9IHBhbmVsLmxpbmtzO1xuXG4gIGlmICghbGlua3MgfHwgbGlua3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0TGlua3M6ICgpID0+IHtcbiAgICAgIHJldHVybiBsaW5rcy5tYXAoKGxpbmspID0+IHtcbiAgICAgICAgcmV0dXJuIGdldExpbmtTcnYoKS5nZXREYXRhTGlua1VJTW9kZWwobGluaywgcGFuZWwucmVwbGFjZVZhcmlhYmxlcywgcGFuZWwpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBQYW5lbE1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZSc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgUGFuZWxTdGF0ZSB9IGZyb20gJy4vcmVkdWNlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFuZWxTdGF0ZUZvck1vZGVsKHN0YXRlOiBTdG9yZVN0YXRlLCBtb2RlbDogUGFuZWxNb2RlbCk6IFBhbmVsU3RhdGUgfCB1bmRlZmluZWQge1xuICByZXR1cm4gc3RhdGUucGFuZWxzW21vZGVsLmtleV07XG59XG4iLCJpbXBvcnQge1xuICBDb25maWdPdmVycmlkZVJ1bGUsXG4gIER5bmFtaWNDb25maWdWYWx1ZSxcbiAgRmllbGRDb2xvck1vZGVJZCxcbiAgRmllbGRDb25maWdTb3VyY2UsXG4gIEZpZWxkTWF0Y2hlcklELFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVNlcmllc0NvbG9yQ29uZmlnRmFjdG9yeSA9IChcbiAgbGFiZWw6IHN0cmluZyxcbiAgY29sb3I6IHN0cmluZyxcbiAgZmllbGRDb25maWc6IEZpZWxkQ29uZmlnU291cmNlXG4pOiBGaWVsZENvbmZpZ1NvdXJjZSA9PiB7XG4gIGNvbnN0IHsgb3ZlcnJpZGVzIH0gPSBmaWVsZENvbmZpZztcbiAgY29uc3QgY3VycmVudEluZGV4ID0gZmllbGRDb25maWcub3ZlcnJpZGVzLmZpbmRJbmRleCgob3ZlcnJpZGUpID0+IHtcbiAgICByZXR1cm4gb3ZlcnJpZGUubWF0Y2hlci5pZCA9PT0gRmllbGRNYXRjaGVySUQuYnlOYW1lICYmIG92ZXJyaWRlLm1hdGNoZXIub3B0aW9ucyA9PT0gbGFiZWw7XG4gIH0pO1xuXG4gIGlmIChjdXJyZW50SW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmZpZWxkQ29uZmlnLFxuICAgICAgb3ZlcnJpZGVzOiBbLi4uZmllbGRDb25maWcub3ZlcnJpZGVzLCBjcmVhdGVPdmVycmlkZShsYWJlbCwgY29sb3IpXSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgb3ZlcnJpZGVzQ29weSA9IEFycmF5LmZyb20ob3ZlcnJpZGVzKTtcbiAgY29uc3QgZXhpc3RpbmcgPSBvdmVycmlkZXNDb3B5W2N1cnJlbnRJbmRleF07XG4gIGNvbnN0IHByb3BlcnR5SW5kZXggPSBleGlzdGluZy5wcm9wZXJ0aWVzLmZpbmRJbmRleCgocCkgPT4gcC5pZCA9PT0gJ2NvbG9yJyk7XG5cbiAgaWYgKHByb3BlcnR5SW5kZXggPCAwKSB7XG4gICAgb3ZlcnJpZGVzQ29weVtjdXJyZW50SW5kZXhdID0ge1xuICAgICAgLi4uZXhpc3RpbmcsXG4gICAgICBwcm9wZXJ0aWVzOiBbLi4uZXhpc3RpbmcucHJvcGVydGllcywgY3JlYXRlUHJvcGVydHkoY29sb3IpXSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmZpZWxkQ29uZmlnLFxuICAgICAgb3ZlcnJpZGVzOiBvdmVycmlkZXNDb3B5LFxuICAgIH07XG4gIH1cblxuICBjb25zdCBwcm9wZXJ0aWVzQ29weSA9IEFycmF5LmZyb20oZXhpc3RpbmcucHJvcGVydGllcyk7XG4gIHByb3BlcnRpZXNDb3B5W3Byb3BlcnR5SW5kZXhdID0gY3JlYXRlUHJvcGVydHkoY29sb3IpO1xuXG4gIG92ZXJyaWRlc0NvcHlbY3VycmVudEluZGV4XSA9IHtcbiAgICAuLi5leGlzdGluZyxcbiAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzQ29weSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLmZpZWxkQ29uZmlnLFxuICAgIG92ZXJyaWRlczogb3ZlcnJpZGVzQ29weSxcbiAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZU92ZXJyaWRlID0gKGxhYmVsOiBzdHJpbmcsIGNvbG9yOiBzdHJpbmcpOiBDb25maWdPdmVycmlkZVJ1bGUgPT4ge1xuICByZXR1cm4ge1xuICAgIG1hdGNoZXI6IHtcbiAgICAgIGlkOiBGaWVsZE1hdGNoZXJJRC5ieU5hbWUsXG4gICAgICBvcHRpb25zOiBsYWJlbCxcbiAgICB9LFxuICAgIHByb3BlcnRpZXM6IFtjcmVhdGVQcm9wZXJ0eShjb2xvcildLFxuICB9O1xufTtcblxuY29uc3QgY3JlYXRlUHJvcGVydHkgPSAoY29sb3I6IHN0cmluZyk6IER5bmFtaWNDb25maWdWYWx1ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQ6ICdjb2xvcicsXG4gICAgdmFsdWU6IHtcbiAgICAgIG1vZGU6IEZpZWxkQ29sb3JNb2RlSWQuRml4ZWQsXG4gICAgICBmaXhlZENvbG9yOiBjb2xvcixcbiAgICB9LFxuICB9O1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBpc1NvbG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIC8oZC1zb2xvfGRhc2hib2FyZC1zb2xvKS8udGVzdChwYXRoPy50b0xvd2VyQ2FzZSgpKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJBdXRvU2l6ZXIiLCJEYXNoYm9hcmRQYW5lbCIsImluaXREYXNoYm9hcmQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImRhc2hib2FyZCIsImdldE1vZGVsIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdG9yIiwiU29sb1BhbmVsUGFnZSIsInBhbmVsIiwibm90Rm91bmQiLCJjb21wb25lbnREaWRNb3VudCIsIm1hdGNoIiwicm91dGUiLCJwcm9wcyIsInVybFNsdWciLCJwYXJhbXMiLCJzbHVnIiwidXJsVWlkIiwidWlkIiwidXJsVHlwZSIsInR5cGUiLCJyb3V0ZU5hbWUiLCJmaXhVcmwiLCJnZXRQYW5lbElkIiwicGFyc2VJbnQiLCJxdWVyeVBhcmFtcyIsInBhbmVsSWQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJnZXRQYW5lbEJ5VXJsSWQiLCJzZXRTdGF0ZSIsInJlbmRlciIsIlNvbG9QYW5lbCIsIndpZHRoIiwiaGVpZ2h0Iiwia2V5IiwiUHVyZUNvbXBvbmVudCIsImluaXRQYW5lbFN0YXRlIiwic2V0UGFuZWxJbnN0YW5jZVN0YXRlIiwiTGF6eUxvYWRlciIsIlBhbmVsQ2hyb21lIiwiUGFuZWxDaHJvbWVBbmd1bGFyIiwicGFuZWxTdGF0ZSIsInBhbmVscyIsInN0YXRlS2V5IiwicGx1Z2luIiwiaW5zdGFuY2VTdGF0ZSIsIkRhc2hib2FyZFBhbmVsVW5jb25uZWN0ZWQiLCJ2YWx1ZSIsInYiLCJpc0luVmlldyIsImxhenkiLCJvblBhbmVsTG9hZCIsImlzVmlld2luZyIsImlzRWRpdGluZyIsInJlbmRlclBhbmVsQ2hyb21lIiwiYW5ndWxhclBhbmVsQ3RybCIsIm9uSW5zdGFuY2VTdGF0ZUNoYW5nZSIsIm9uVmlzaWJpbGl0eUNoYW5nZSIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0T25jZSIsInVzZVVuaXF1ZUlkIiwiY2hpbGRyZW4iLCJvbkxvYWQiLCJvbkNoYW5nZSIsImlkIiwibG9hZGVkIiwic2V0TG9hZGVkIiwic2V0SXNJblZpZXciLCJ3cmFwcGVyUmVmIiwiYWRkQ2FsbGJhY2siLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwid3JhcHBlckVsIiwiY3VycmVudCIsIm9ic2VydmVyIiwib2JzZXJ2ZSIsImNhbGxiYWNrcyIsInVub2JzZXJ2ZSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJkaXNjb25uZWN0IiwiYyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInRhcmdldCIsInJvb3RNYXJnaW4iLCJjbGFzc05hbWVzIiwiU3Vic2NyaXB0aW9uIiwiQW5ub3RhdGlvbkNoYW5nZUV2ZW50IiwiQ29yZUFwcCIsIkRhc2hib2FyZEN1cnNvclN5bmMiLCJnZXREZWZhdWx0VGltZVJhbmdlIiwiTG9hZGluZ1N0YXRlIiwidG9EYXRhRnJhbWVEVE8iLCJ0b1V0YyIsInNlbGVjdG9ycyIsImxvY2F0aW9uU2VydmljZSIsIlJlZnJlc2hFdmVudCIsIkVycm9yQm91bmRhcnkiLCJQYW5lbENvbnRleHRQcm92aWRlciIsImNvbmZpZyIsIlBBTkVMX0JPUkRFUiIsInByb2ZpbGVyIiwiYXBwbHlQYW5lbFRpbWVPdmVycmlkZXMiLCJjaGFuZ2VTZXJpZXNDb2xvckNvbmZpZ0ZhY3RvcnkiLCJSZW5kZXJFdmVudCIsImNvbnRleHRTcnYiLCJpc1NvbG9Sb3V0ZSIsImRlbGV0ZUFubm90YXRpb24iLCJzYXZlQW5ub3RhdGlvbiIsInVwZGF0ZUFubm90YXRpb24iLCJnZXREYXNoYm9hcmRRdWVyeVJ1bm5lciIsImdldFRpbWVTcnYiLCJsb2FkU25hcHNob3REYXRhIiwiUGFuZWxIZWFkZXIiLCJzZXJpZXNWaXNpYmlsaXR5Q29uZmlnRmFjdG9yeSIsImxpdmVUaW1lciIsIkRFRkFVTFRfUExVR0lOX0VSUk9SIiwiY29uc3RydWN0b3IiLCJvbmx5TG9jYWwiLCJCb29sZWFuIiwibWV0YSIsImNhbkVkaXQiLCJjYW5NYWtlRWRpdGFibGUiLCJjYW5BZGQiLCJhY2Nlc3NDb250cm9sRW5hYmxlZCIsImFubm90YXRpb25zUGVybWlzc2lvbnMiLCJjYW5FZGl0RGFzaGJvYXJkIiwiZGFzaGJvYXJkSWQiLCJvcmdhbml6YXRpb24iLCJjYW5EZWxldGUiLCJPZmYiLCJncmFwaFRvb2x0aXAiLCJjb250ZXh0IiwibGFiZWwiLCJjb2xvciIsIm9uRmllbGRDb25maWdDaGFuZ2UiLCJmaWVsZENvbmZpZyIsIm1vZGUiLCJkYXRhIiwic2VyaWVzIiwic29ydEtleSIsImxlZ2VuZE9wdGlvbnMiLCJvcHRpb25zIiwibGVnZW5kIiwic29ydERlc2MiLCJzb3J0QnkiLCJ1bmRlZmluZWQiLCJvbk9wdGlvbnNDaGFuZ2UiLCJyZWZyZXNoV2hlbkluVmlldyIsInRpbWVEYXRhIiwidGltZVNydiIsInRpbWVSYW5nZSIsIndhbnRzUXVlcnlFeGVjdXRpb24iLCJydW5BbGxQYW5lbFF1ZXJpZXMiLCJnZXRUaW1lem9uZSIsInJlbmRlckNvdW50ZXIiLCJsaXZlVGltZSIsInN0YXRlVXBkYXRlIiwidXBkYXRlT3B0aW9ucyIsInVwZGF0ZUZpZWxkQ29uZmlnIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiZXZlbnQiLCJpc1JlZ2lvbiIsImZyb20iLCJ0byIsImFubm8iLCJ0aW1lIiwidGltZUVuZCIsInRhZ3MiLCJ0ZXh0IiwiZGVzY3JpcHRpb24iLCJydW4iLCJyYW5nZSIsImV2ZW50QnVzIiwicHVibGlzaCIsInNldFRpbWUiLCJldmVudHMiLCJuZXdTY29wZWRCdXMiLCJldmVudEZpbHRlciIsImlzRmlyc3RMb2FkIiwiYXBwIiwiZ2V0UGFuZWxDb250ZXh0QXBwIiwic3luYyIsImdldFN5bmMiLCJvblNlcmllc0NvbG9yQ2hhbmdlIiwib25Ub2dnbGVTZXJpZXNWaXNpYmlsaXR5Iiwib25TZXJpZXNWaXNpYmlsaXR5Q2hhbmdlIiwib25Bbm5vdGF0aW9uQ3JlYXRlIiwib25Bbm5vdGF0aW9uVXBkYXRlIiwib25Bbm5vdGF0aW9uRGVsZXRlIiwiY2FuQWRkQW5ub3RhdGlvbnMiLCJjYW5BZGRBbm5vdGF0aW9uIiwib25Ub2dnbGVMZWdlbmRTb3J0IiwiY2FuRWRpdEFubm90YXRpb25zIiwiY2FuRWRpdEFubm90YXRpb24iLCJjYW5EZWxldGVBbm5vdGF0aW9ucyIsImNhbkRlbGV0ZUFubm90YXRpb24iLCJnZXRJbml0aWFsUGFuZWxEYXRhU3RhdGUiLCJQYW5lbEVkaXRvciIsIlBhbmVsVmlld2VyIiwiRGFzaGJvYXJkIiwiTm90U3RhcnRlZCIsInN1YnMiLCJhZGQiLCJzdWJzY3JpYmUiLCJvblJlZnJlc2giLCJvblJlbmRlciIsInBhbmVsSW5pdGlhbGl6ZWQiLCJoYXNQYW5lbFNuYXBzaG90IiwiZ2V0UXVlcnlSdW5uZXIiLCJnZXREYXRhIiwid2l0aFRyYW5zZm9ybXMiLCJ3aXRoRmllbGRDb25maWciLCJuZXh0Iiwib25EYXRhVXBkYXRlIiwibGlzdGVuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJ1bnN1YnNjcmliZSIsInJlbW92ZSIsImxpdmVUaW1lQ2hhbmdlZCIsImRlbHRhIiwidmFsdWVPZiIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsInVwZGF0ZUludGVydmFsIiwic2tpcERhdGFRdWVyeSIsIkxvYWRpbmciLCJFcnJvciIsIkRvbmUiLCJzbmFwc2hvdCIsInNuYXBzaG90RGF0YSIsIm1hcCIsImZyYW1lIiwic2hvdWxkU2lnbmFsUmVuZGVyaW5nQ29tcGxldGVkIiwibG9hZGluZ1N0YXRlIiwicGx1Z2luTWV0YSIsInNraXBGaXJzdFJlbmRlciIsInJlbmRlclBhbmVsIiwidGhlbWUiLCJyZW5kZXJpbmdDb21wbGV0ZWQiLCJQYW5lbENvbXBvbmVudCIsImhlYWRlckhlaWdodCIsImhhc092ZXJsYXlIZWFkZXIiLCJwYW5lbEhlYWRlckhlaWdodCIsImNocm9tZVBhZGRpbmciLCJub1BhZGRpbmciLCJwYW5lbFBhZGRpbmciLCJwYW5lbFdpZHRoIiwiaW5uZXJQYW5lbEhlaWdodCIsInBhbmVsQ29udGVudENsYXNzTmFtZXMiLCJwYW5lbE9wdGlvbnMiLCJnZXRPcHRpb25zIiwidHJhbnNwYXJlbnQiLCJyZXBsYWNlVmFyaWFibGVzIiwib25DaGFuZ2VUaW1lUmFuZ2UiLCJyZXF1ZXN0IiwidGltZUluZm8iLCJoYXNUaXRsZSIsImFsZXJ0U3RhdGUiLCJjb250YWluZXJDbGFzc05hbWVzIiwiZ2V0TG9jYXRpb24iLCJwYXRobmFtZSIsImNvbXBvbmVudHMiLCJQYW5lbHMiLCJQYW5lbCIsImNvbnRhaW5lckJ5VGl0bGUiLCJsaW5rcyIsIm9uUGFuZWxFcnJvciIsIm9uUGFuZWxFcnJvclJlY292ZXIiLCJnZXRBbmd1bGFyTG9hZGVyIiwic2V0UGFuZWxBbmd1bGFyQ29tcG9uZW50IiwiZ2V0UGFuZWxTdGF0ZUZvck1vZGVsIiwiUGFuZWxDaHJvbWVBbmd1bGFyVW5jb25uZWN0ZWQiLCJsb2FkQW5ndWxhclBhbmVsIiwicXVlcnlSdW5uZXIiLCJvblBhbmVsRGF0YVVwZGF0ZSIsInByZXZTdGF0ZSIsInNjb3BlUHJvcHMiLCJzaXplIiwiZ2V0SW5uZXJQYW5lbEhlaWdodCIsImdldElubmVyUGFuZWxXaWR0aCIsImVsZW1lbnQiLCJsb2FkZXIiLCJ0ZW1wbGF0ZSIsImFuZ3VsYXJDb21wb25lbnQiLCJsb2FkIiwiYWxlcnQiLCJjc3MiLCJjeCIsIkljb24iLCJ1c2VTdHlsZXMyIiwiZ2V0UGFuZWxMaW5rc1N1cHBsaWVyIiwiUGFuZWxIZWFkZXJDb3JuZXIiLCJQYW5lbEhlYWRlckxvYWRpbmdJbmRpY2F0b3IiLCJQYW5lbEhlYWRlck1lbnVUcmlnZ2VyIiwiUGFuZWxIZWFkZXJNZW51V3JhcHBlciIsIlBhbmVsSGVhZGVyTm90aWNlcyIsIm9uQ2FuY2VsUXVlcnkiLCJjYW5jZWxRdWVyeSIsImdldERpc3BsYXlUaXRsZSIsImNsYXNzTmFtZSIsInN0eWxlcyIsInBhbmVsU3R5bGVzIiwic2NvcGVkVmFycyIsImNsb3NlTWVudSIsInBhbmVsTWVudU9wZW4iLCJtYXJnaW5SaWdodCIsInRpdGxlVGV4dCIsInR5cG9ncmFwaHkiLCJmb250V2VpZ2h0TWVkaXVtIiwiYm9keSIsImZvbnRTaXplIiwiY29sb3JzIiwicHJpbWFyeSIsInJlbmRlck1hcmtkb3duIiwiZ2V0VGVtcGxhdGVTcnYiLCJUb29sdGlwIiwiSW5zcGVjdFRhYiIsIkluZm9Nb2RlIiwiSW5mbyIsIkxpbmtzIiwibWFya2Rvd24iLCJpbnRlcnBvbGF0ZWRNYXJrZG93biIsInJlcGxhY2UiLCJtYXJrZWRJbnRlcnBvbGF0ZWRNYXJrZG93biIsImdldExpbmtzIiwiX19odG1sIiwibGluayIsImlkeCIsImhyZWYiLCJwYXJ0aWFsIiwiaW5zcGVjdCIsImluc3BlY3RUYWIiLCJyZW5kZXJDb3JuZXJUeXBlIiwiaW5mb01vZGUiLCJjb250ZW50Iiwib25DbGljayIsInRvTG93ZXJDYXNlIiwiYXJpYUxhYmVsIiwiaGVhZGVyQ29ybmVySW5mbyIsImdldEluZm9Nb2RlIiwib25DbGlja0Vycm9yIiwiZ2V0SW5mb0NvbnRlbnQiLCJ1c2VTdHlsZXMiLCJnZXRTdHlsZXMiLCJTdHJlYW1pbmciLCJzdHJlYW1JbmRpY2F0b3IiLCJ0ZXh0RmFpbnQiLCJQYW5lbEhlYWRlck1lbnVJdGVtIiwiUGFuZWxIZWFkZXJNZW51IiwibWVudSIsImlzU3ViTWVudSIsIm1lbnVJdGVtIiwiaWNvbkNsYXNzTmFtZSIsInNob3J0Y3V0Iiwic3ViTWVudSIsInJlbmRlckl0ZW1zIiwiaXRlbXMiLCJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsImdldFBhbmVsTWVudSIsIlBhbmVsSGVhZGVyTWVudVByb3ZpZGVyIiwic2V0SXRlbXMiLCJ1c2VDYWxsYmFjayIsImRpdlByb3BzIiwiY2xpY2tDb29yZGluYXRlcyIsInNldENsaWNrQ29vcmRpbmF0ZXMiLCJ4IiwieSIsInNldFBhbmVsTWVudU9wZW4iLCJvbk1lbnVUb2dnbGUiLCJpc0NsaWNrIiwiZXZlbnRUb0NsaWNrQ29vcmRpbmF0ZXMiLCJzdG9wUHJvcGFnYXRpb24iLCJvbk1vdXNlRG93biIsImNsaWNrZWQiLCJNYXRoIiwiZmxvb3IiLCJjbGllbnRYIiwiY2xpZW50WSIsIkNsaWNrT3V0c2lkZVdyYXBwZXIiLCJzaG93Iiwib25DbG9zZSIsImRvY3VtZW50IiwiUGFuZWxIZWFkZXJOb3RpY2UiLCJub3RpY2UiLCJpY29uTmFtZSIsInNldmVyaXR5IiwiZSIsImZyYW1lcyIsIm9wZW5JbnNwZWN0IiwidGFiIiwibm90aWNlcyIsInZhbHVlcyIsIkJ5TmFtZXNNYXRjaGVyTW9kZSIsIkZpZWxkTWF0Y2hlcklEIiwiRmllbGRUeXBlIiwiZ2V0RmllbGREaXNwbGF5TmFtZSIsImlzU3lzdGVtT3ZlcnJpZGVXaXRoUmVmIiwiU2VyaWVzVmlzaWJpbGl0eUNoYW5nZU1vZGUiLCJkaXNwbGF5T3ZlcnJpZGVSZWYiLCJpc0hpZGVTZXJpZXNPdmVycmlkZSIsIm92ZXJyaWRlcyIsImRpc3BsYXlOYW1lIiwiY3VycmVudEluZGV4IiwiZmluZEluZGV4IiwiVG9nZ2xlU2VsZWN0aW9uIiwib3ZlcnJpZGUiLCJjcmVhdGVPdmVycmlkZSIsImRpc3BsYXlOYW1lcyIsImdldERpc3BsYXlOYW1lcyIsIm92ZXJyaWRlc0NvcHkiLCJBcnJheSIsInNwbGljZSIsImV4aXN0aW5nIiwiZ2V0RXhpc3RpbmdEaXNwbGF5TmFtZXMiLCJjcmVhdGVFeHRlbmRlZE92ZXJyaWRlIiwiYWxsRmllbGRzQXJlRXhjbHVkZWQiLCJuYW1lcyIsImV4Y2x1ZGUiLCJwcm9wZXJ0eSIsInZpeiIsInRvb2x0aXAiLCJfX3N5c3RlbVJlZiIsIm1hdGNoZXIiLCJieU5hbWVzIiwicHJlZml4IiwicmVhZE9ubHkiLCJwcm9wZXJ0aWVzIiwiZmluZCIsInAiLCJpbmRleCIsIm5hbWUiLCJwdXNoIiwicnVsZSIsImlzQXJyYXkiLCJleGNsdWRlTmFtZSIsInVuaXF1ZSIsIlNldCIsImZpZWxkIiwiZmllbGRzIiwibnVtYmVyIiwicmVwb3J0TWV0YUFuYWx5dGljcyIsIk1ldGFBbmFseXRpY3NFdmVudE5hbWUiLCJlbWl0RGFzaGJvYXJkVmlld0V2ZW50IiwiZXZlbnREYXRhIiwiZGFzaGJvYXJkTmFtZSIsImRhc2hib2FyZFVpZCIsImZvbGRlck5hbWUiLCJmb2xkZXJUaXRsZSIsImV2ZW50TmFtZSIsIkRhc2hib2FyZFZpZXciLCJsb2NhdGlvblV0aWwiLCJzZXRXZWVrU3RhcnQiLCJub3RpZnlBcHAiLCJjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiIsImJhY2tlbmRTcnYiLCJrZXliaW5kaW5nU3J2Iiwic3RvcmUiLCJkYXNoYm9hcmRMb2FkZXJTcnYiLCJnZXREYXNoYm9hcmRTcnYiLCJkYXNoYm9hcmRXYXRjaGVyIiwidG9TdGF0ZUtleSIsIkRhc2hib2FyZEluaXRQaGFzZSIsIkRhc2hib2FyZFJvdXRlcyIsImNyZWF0ZURhc2hib2FyZFF1ZXJ5UnVubmVyIiwiaW5pdFZhcmlhYmxlc1RyYW5zYWN0aW9uIiwiZ2V0SWZFeGlzdHNMYXN0S2V5IiwiRGFzaGJvYXJkTW9kZWwiLCJkYXNoYm9hcmRJbml0Q29tcGxldGVkIiwiZGFzaGJvYXJkSW5pdEZhaWxlZCIsImRhc2hib2FyZEluaXRGZXRjaGluZyIsImRhc2hib2FyZEluaXRTZXJ2aWNlcyIsImZldGNoRGFzaGJvYXJkIiwiYXJncyIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJtb2RlbCIsImdldE9iamVjdCIsIkRBU0hCT0FSRF9GUk9NX0xTX0tFWSIsInJlbW92ZURhc2hib2FyZFRvRmV0Y2hGcm9tTG9jYWxTdG9yYWdlIiwiSG9tZSIsImRhc2hEVE8iLCJnZXQiLCJyZWRpcmVjdFVyaSIsIm5ld1VybCIsInN0cmlwQmFzZUZyb21VcmwiLCJjYW5TYXZlIiwiY2FuU2hhcmUiLCJjYW5TdGFyIiwiTm9ybWFsIiwibG9hZERhc2hib2FyZCIsInVybCIsImRhc2hib2FyZFVybCIsImN1cnJlbnRQYXRoIiwiTmV3IiwiZ2V0TmV3RGFzaGJvYXJkTW9kZWxEYXRhIiwidXJsRm9sZGVySWQiLCJlcnIiLCJjYW5jZWxsZWQiLCJzdG9yZVN0YXRlIiwiZ2V0U2VhcmNoT2JqZWN0Iiwib3JnSWQiLCJ1c2VyIiwiZGFzaGJvYXJkU3J2Iiwic2V0Q3VycmVudCIsImluaXQiLCJydW5uZXIiLCJpbml0UGhhc2UiLCJTZXJ2aWNlcyIsInByb2Nlc3NSZXBlYXRzIiwiYXV0b2ZpdHBhbmVscyIsImF1dG9GaXRQYW5lbHMiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImtpb3NrIiwic2V0dXBEYXNoYm9hcmRCaW5kaW5ncyIsIndhdGNoIiwibGVhdmUiLCJ3ZWVrU3RhcnQiLCJib290RGF0YSIsImlzTmV3IiwiZm9sZGVySWQiLCJncmlkUG9zIiwidyIsImgiLCJzZXREYXNoYm9hcmRUb0ZldGNoRnJvbUxvY2FsU3RvcmFnZSIsInNldE9iamVjdCIsImRlbGV0ZSIsImdldERhdGFTb3VyY2VTcnYiLCJhZGRMaWJyYXJ5UGFuZWwiLCJjb3B5UGFuZWwiLCJkdXBsaWNhdGVQYW5lbCIsInJlbW92ZVBhbmVsIiwic2hhcmVQYW5lbCIsInVubGlua0xpYnJhcnlQYW5lbCIsImlzUGFuZWxNb2RlbExpYnJhcnlQYW5lbCIsImdldEV4cGxvcmVVcmwiLCJuYXZpZ2F0ZVRvRXhwbG9yZSIsIm9uVmlld1BhbmVsIiwicHJldmVudERlZmF1bHQiLCJ2aWV3UGFuZWwiLCJvbkVkaXRQYW5lbCIsImVkaXRQYW5lbCIsIm9uU2hhcmVQYW5lbCIsIm9uQWRkTGlicmFyeVBhbmVsIiwib25VbmxpbmtMaWJyYXJ5UGFuZWwiLCJvbkluc3BlY3RQYW5lbCIsIm9uTW9yZSIsIm9uRHVwbGljYXRlUGFuZWwiLCJvbkNvcHlQYW5lbCIsIm9uUmVtb3ZlUGFuZWwiLCJvbk5hdmlnYXRlVG9FeHBsb3JlIiwib3BlbkluTmV3V2luZG93IiwiY3RybEtleSIsIm1ldGFLZXkiLCJvcGVuIiwiYXBwU3ViVXJsIiwiY2FuRWRpdFBhbmVsIiwiaGFzQWNjZXNzVG9FeHBsb3JlIiwiaW5zcGVjdE1lbnUiLCJzY29wZSIsImdldFNjb3BlIiwicGFuZWxDdHJsIiwiJCRjaGlsZEhlYWQiLCJjdHJsIiwiYW5ndWxhck1lbnVJdGVtcyIsImdldEV4dGVuZGVkTWVudSIsIml0ZW0iLCJyZWFjdEl0ZW0iLCJjbGljayIsIiRldmFsIiwiYXBwbHlGaWVsZE92ZXJyaWRlcyIsIkFycmF5RGF0YUZyYW1lIiwiU25hcHNob3RXb3JrZXIiLCJnZXRQcm9jZXNzZWREYXRhRnJhbWVzIiwid29ya2VyIiwiYW5ub3RhdGlvbkV2ZW50cyIsImNhbldvcmsiLCJnZXRBbm5vdGF0aW9uc0luU25hcHNob3QiLCJhbm5vdGF0aW9ucyIsImRlZmF1bHRzIiwiZmllbGRDb25maWdSZWdpc3RyeSIsInRoZW1lMiIsInRpbWVab25lIiwiZm9ybWF0dGVkVmFsdWVUb1N0cmluZyIsImdldEZpZWxkRGlzcGxheVZhbHVlc1Byb3h5IiwiZ2V0VGltZUZpZWxkIiwiZ2V0TGlua1NydiIsImdldEZpZWxkTGlua3NTdXBwbGllciIsInZpZXciLCJkYXRhRnJhbWUiLCJyZWZJZCIsImNvbEluZGV4IiwibGFiZWxzIiwicm93SW5kZXgiLCJ0aW1lRmllbGQiLCJyYXciLCJudW1lcmljIiwiZGlzcGxheSIsImNhbGMiLCJ2YXJzIiwiZm10IiwiZmluYWxWYXJzIiwiZ2V0RGF0YUxpbmtVSU1vZGVsIiwiRmllbGRDb2xvck1vZGVJZCIsImJ5TmFtZSIsInByb3BlcnR5SW5kZXgiLCJjcmVhdGVQcm9wZXJ0eSIsInByb3BlcnRpZXNDb3B5IiwiRml4ZWQiLCJmaXhlZENvbG9yIiwicGF0aCIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9