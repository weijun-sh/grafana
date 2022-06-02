"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[3168],{

 "./public/app/angular/AngularLocationWrapper.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "O": () => ( AngularLocationWrapper)
 });
 var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");


const DEFAULT_PORTS = {
  http: 80,
  https: 443,
  ftp: 21
};
class AngularLocationWrapper {
  constructor() {
    this.absUrl = this.wrapInDeprecationWarning(this.absUrl);
    this.hash = this.wrapInDeprecationWarning(this.hash);
    this.host = this.wrapInDeprecationWarning(this.host);
    this.path = this.wrapInDeprecationWarning(this.path);
    this.port = this.wrapInDeprecationWarning(this.port, 'window.location');
    this.protocol = this.wrapInDeprecationWarning(this.protocol, 'window.location');
    this.replace = this.wrapInDeprecationWarning(this.replace);
    this.search = this.wrapInDeprecationWarning(this.search);
    this.state = this.wrapInDeprecationWarning(this.state);
    this.url = this.wrapInDeprecationWarning(this.url);
  }

  wrapInDeprecationWarning(fn, replacement) {
    let self = this;
    return function wrapper() {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.deprecationWarning)('$location', fn.name, replacement || 'locationService');
      return fn.apply(self, arguments);
    };
  }

  absUrl() {
    return `${window.location.origin}${this.url()}`;
  }

  hash(newHash) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: hash');

    if (!newHash) {
      return _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation().hash.slice(1);
    } else {
      throw new Error('AngularLocationWrapper method not implemented.');
    }
  }

  host() {
    return new URL(window.location.href).hostname;
  }

  path(pathname) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: path');
    const location = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation();

    if (pathname !== undefined && pathname !== null) {
      let parsedPath = String(pathname);
      parsedPath = parsedPath.startsWith('/') ? parsedPath : `/${parsedPath}`;
      const url = new URL(`${window.location.origin}${parsedPath}`);
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push({
        pathname: url.pathname,
        search: url.search.length > 0 ? url.search : location.search,
        hash: url.hash.length > 0 ? url.hash : location.hash
      });
      return this;
    }

    if (pathname === null) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push('/');
      return this;
    }

    return location.pathname;
  }

  port() {
    const url = new URL(window.location.href);
    return parseInt(url.port, 10) || DEFAULT_PORTS[url.protocol] || null;
  }

  protocol() {
    return new URL(window.location.href).protocol.slice(0, -1);
  }

  replace() {
    throw new Error('AngularLocationWrapper method not implemented.');
  }

  search(search, paramValue) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: search');

    if (!search) {
      return _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getSearchObject();
    }

    if (search && arguments.length > 1) {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial({
        [search]: paramValue
      });
      return this;
    }

    if (search) {
      let newQuery;

      if (typeof search === 'object') {
        newQuery = Object.assign({}, search);
      } else {
        newQuery = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationSearchToObject)(search);
      }

      for (const key of Object.keys(newQuery)) {
        if (newQuery[key] === null || newQuery[key] === undefined) {
          delete newQuery[key];
        }
      }

      const updatedUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.urlUtil.renderUrl(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation().pathname, newQuery);
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(updatedUrl);
    }

    return this;
  }

  state(state) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: state');
    throw new Error('AngularLocationWrapper method not implemented.');
  }

  url(newUrl) {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.navigationLogger)('AngularLocationWrapper', false, 'Angular compat layer: url');

    if (newUrl !== undefined) {
      if (newUrl.startsWith('#')) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(Object.assign({}, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation(), {
          hash: newUrl
        }));
      } else if (newUrl.startsWith('?')) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(Object.assign({}, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation(), {
          search: newUrl
        }));
      } else if (newUrl.trim().length === 0) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push('/');
      } else {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push(newUrl);
      }

      return _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService;
    }

    const location = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getLocation();
    return `${location.pathname}${location.search}${location.hash}`;
  }

}

 }),

 "./public/app/angular/panel/metrics_panel_ctrl.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "k": () => ( MetricsPanelCtrl)
 });
 var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/panel/panel_ctrl.ts");
 var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MetricsPanelCtrl extends app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__ .q {
  constructor($scope, $injector) {
    super($scope, $injector);

    _defineProperty(this, "contextSrv", void 0);

    _defineProperty(this, "datasourceSrv", void 0);

    _defineProperty(this, "timeSrv", void 0);

    _defineProperty(this, "templateSrv", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "intervalMs", void 0);

    _defineProperty(this, "resolution", void 0);

    _defineProperty(this, "timeInfo", void 0);

    _defineProperty(this, "skipDataOnInit", false);

    _defineProperty(this, "dataList", []);

    _defineProperty(this, "querySubscription", void 0);

    _defineProperty(this, "useDataFrames", false);

    _defineProperty(this, "panelData", void 0);

    _defineProperty(this, "panelDataObserver", {
      next: data => {
        this.panelData = data;

        if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Error) {
          this.loading = false;
          this.processDataError(data.error);
        } 


        if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Loading) {
          this.loading = true;
          this.angularDirtyCheck();
          return;
        }

        if (data.request) {
          const {
            timeInfo
          } = data.request;

          if (timeInfo) {
            this.timeInfo = timeInfo;
          }
        }

        if (data.timeRange) {
          this.range = data.timeRange;
        }

        if (this.useDataFrames) {
          this.handleDataFrames(data.series);
        } else {
          const legacy = data.series.map(v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toLegacyResponseData)(v));
          this.handleQueryResult({
            data: legacy
          });
        }

        this.angularDirtyCheck();
      }
    });

    this.contextSrv = $injector.get('contextSrv');
    this.datasourceSrv = $injector.get('datasourceSrv');
    this.timeSrv = $injector.get('timeSrv');
    this.templateSrv = $injector.get('templateSrv');
    this.panel.datasource = this.panel.datasource || null;
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.refresh, this.onMetricsPanelRefresh.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.panelTeardown, this.onPanelTearDown.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.componentDidMount, this.onMetricsPanelMounted.bind(this));
  }

  onMetricsPanelMounted() {
    const queryRunner = this.panel.getQueryRunner();
    this.querySubscription = queryRunner.getData({
      withTransforms: true,
      withFieldConfig: true
    }).subscribe(this.panelDataObserver);
  }

  onPanelTearDown() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
      this.querySubscription = null;
    }
  }

  onMetricsPanelRefresh() {
    if (this.otherPanelInFullscreenMode()) {
      return;
    } 


    if (this.panel.snapshotData) {
      this.updateTimeRange();
      let data = this.panel.snapshotData; 

      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(data)) {
        data = data.data;
      }

      this.panelData = {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done,
        series: data,
        timeRange: this.range
      }; 

      return this.$timeout(() => {
        this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataSnapshotLoad, data);
      });
    } 


    delete this.error;
    this.loading = true; 

    return this.datasourceSrv.get(this.panel.datasource, this.panel.scopedVars).then(this.issueQueries.bind(this)).catch(err => {
      this.processDataError(err);
    });
  }

  processDataError(err) {
    if (err.cancelled) {
      console.log('Panel request cancelled', err);
      return;
    }

    this.error = err.message || 'Request Error';

    if (err.data) {
      if (err.data.message) {
        this.error = err.data.message;
      } else if (err.data.error) {
        this.error = err.data.error;
      }
    }

    this.angularDirtyCheck();
  }

  angularDirtyCheck() {
    if (!this.$scope.$root.$$phase) {
      this.$scope.$digest();
    }
  } 


  updateTimeRange(datasource) {
    this.datasource = datasource || this.datasource;
    this.range = this.timeSrv.timeRange();
    const newTimeData = (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_3__ .W1)(this.panel, this.range);
    this.timeInfo = newTimeData.timeInfo;
    this.range = newTimeData.timeRange;
  }

  issueQueries(datasource) {
    this.updateTimeRange(datasource);
    this.datasource = datasource;
    const panel = this.panel;
    const queryRunner = panel.getQueryRunner();
    return queryRunner.run({
      datasource: panel.datasource,
      queries: panel.targets,
      panelId: panel.id,
      dashboardId: this.dashboard.id,
      timezone: this.dashboard.getTimezone(),
      timeInfo: this.timeInfo,
      timeRange: this.range,
      maxDataPoints: panel.maxDataPoints || this.width,
      minInterval: panel.interval,
      scopedVars: panel.scopedVars,
      cacheTimeout: panel.cacheTimeout,
      transformations: panel.transformations
    });
  }

  handleDataFrames(data) {
    this.loading = false;

    if (this.dashboard && this.dashboard.snapshot) {
      this.panel.snapshotData = data.map(frame => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.toDataFrameDTO)(frame));
    }

    try {
      this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataFramesReceived, data);
    } catch (err) {
      this.processDataError(err);
    }
  }

  handleQueryResult(result) {
    this.loading = false;

    if (this.dashboard.snapshot) {
      this.panel.snapshotData = result.data;
    }

    if (!result || !result.data) {
      console.log('Data source query result invalid, missing data field:', result);
      result = {
        data: []
      };
    }

    try {
      this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataReceived, result.data);
    } catch (err) {
      this.processDataError(err);
    }
  }

}



 }),

 "./public/app/angular/panel/panel_ctrl.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "q": () => ( PanelCtrl)
 });
 var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var app_angular_AngularLocationWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/AngularLocationWrapper.ts");
 var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
 var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class PanelCtrl {
  constructor($scope, $injector) {
    var _this$panel, _this$dashboard;

    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "error", void 0);

    _defineProperty(this, "pluginName", '');

    _defineProperty(this, "pluginId", '');

    _defineProperty(this, "editorTabs", void 0);

    _defineProperty(this, "$scope", void 0);

    _defineProperty(this, "$injector", void 0);

    _defineProperty(this, "$timeout", void 0);

    _defineProperty(this, "editModeInitiated", false);

    _defineProperty(this, "containerHeight", void 0);

    _defineProperty(this, "events", void 0);

    _defineProperty(this, "loading", false);

    _defineProperty(this, "timing", void 0);

    _defineProperty(this, "$location", void 0);

    _defineProperty(this, "onPluginTypeChange", plugin => {});

    this.panel = (_this$panel = this.panel) !== null && _this$panel !== void 0 ? _this$panel : $scope.$parent.panel;
    this.dashboard = (_this$dashboard = this.dashboard) !== null && _this$dashboard !== void 0 ? _this$dashboard : $scope.$parent.dashboard;
    this.$injector = $injector;
    this.$scope = $scope;
    this.$timeout = $injector.get('$timeout');
    this.editorTabs = [];
    this.$location = new app_angular_AngularLocationWrapper__WEBPACK_IMPORTED_MODULE_2__ .O();
    this.events = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.EventBusSrv();
    this.timing = {}; 

    const plugin = app_core_config__WEBPACK_IMPORTED_MODULE_3__ .ZP.panels[this.panel.type];

    if (plugin) {
      this.pluginId = plugin.id;
      this.pluginName = plugin.name;
    }

    $scope.$on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.componentDidMount.name, () => this.panelDidMount());
  }

  panelDidMount() {
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.componentDidMount);
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.initialized);
    this.dashboard.panelInitialized(this.panel);
  }

  renderingCompleted() {
    app_core_core__WEBPACK_IMPORTED_MODULE_4__ .rv.renderingCompleted();
  }

  refresh() {
    this.panel.refresh();
  }

  publishAppEvent(event, payload) {
    this.$scope.$root.appEvent(event, payload);
  }

  initEditMode() {
    if (!this.editModeInitiated) {
      this.editModeInitiated = true;
      this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.editModeInitialized);
    }
  }

  addEditorTab(title, directiveFn, index, icon) {
    const editorTab = {
      title,
      directiveFn,
      icon
    };

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(directiveFn)) {
      editorTab.directiveFn = () => {
        return {
          templateUrl: directiveFn
        };
      };
    }

    if (index) {
      this.editorTabs.splice(index, 0, editorTab);
    } else {
      this.editorTabs.push(editorTab);
    }
  }

  getExtendedMenu() {
    const menu = [];
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.initPanelActions, menu);
    return menu;
  } 


  async getAdditionalMenuItems() {
    return [];
  }

  otherPanelInFullscreenMode() {
    return this.dashboard.otherPanelInFullscreen(this.panel);
  }

  render(payload) {
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.render, payload);
  } 


}

 }),

 "./public/app/angular/panel/query_ctrl.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "G": () => ( QueryCtrl)
 });
 var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class QueryCtrl {
  constructor($scope, $injector) {
    var _this$panelCtrl, _this$target, _this$datasource, _this$panelCtrl$panel, _this$panelCtrl2;

    this.$scope = $scope;
    this.$injector = $injector;

    _defineProperty(this, "target", void 0);

    _defineProperty(this, "datasource", void 0);

    _defineProperty(this, "panelCtrl", void 0);

    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "hasRawMode", void 0);

    _defineProperty(this, "error", void 0);

    _defineProperty(this, "isLastQuery", void 0);

    this.$scope = $scope;
    this.$injector = $injector;
    this.panelCtrl = (_this$panelCtrl = this.panelCtrl) !== null && _this$panelCtrl !== void 0 ? _this$panelCtrl : $scope.ctrl.panelCtrl;
    this.target = (_this$target = this.target) !== null && _this$target !== void 0 ? _this$target : $scope.ctrl.target;
    this.datasource = (_this$datasource = this.datasource) !== null && _this$datasource !== void 0 ? _this$datasource : $scope.ctrl.datasource;
    this.panel = (_this$panelCtrl$panel = (_this$panelCtrl2 = this.panelCtrl) === null || _this$panelCtrl2 === void 0 ? void 0 : _this$panelCtrl2.panel) !== null && _this$panelCtrl$panel !== void 0 ? _this$panelCtrl$panel : $scope.ctrl.panelCtrl.panel;
    this.isLastQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(this.panel.targets, this.target) === this.panel.targets.length - 1;
  }

  refresh() {
    this.panelCtrl.refresh();
  }

}

 }),

 "./public/app/plugins/datasource/opentsdb/module.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "plugin": () => ( module_plugin)
});

var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var useUniqueId = __webpack_require__("./public/app/plugins/datasource/influxdb/components/useUniqueId.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _h;







const {
  Select,
  Input
} = grafana_ui_src.LegacyForms;
const tsdbVersions = [{
  label: '<=2.1',
  value: 1
}, {
  label: '==2.2',
  value: 2
}, {
  label: '==2.3',
  value: 3
}];
const tsdbResolutions = [{
  label: 'second',
  value: 1
}, {
  label: 'millisecond',
  value: 2
}];
const OpenTsdbDetails = props => {
  var _tsdbVersions$find, _tsdbResolutions$find, _value$jsonData$looku;

  const {
    onChange,
    value
  } = props;
  const idSuffix = (0,useUniqueId.L)();
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [_h || (_h = (0,jsx_runtime.jsx)("h5", {
      children: "OpenTSDB settings"
    })), (0,jsx_runtime.jsxs)("div", {
      className: "gf-form",
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
        width: 7,
        htmlFor: `select-version-${idSuffix}`,
        children: "Version"
      }), (0,jsx_runtime.jsx)(Select, {
        inputId: `select-version-${idSuffix}`,
        options: tsdbVersions,
        value: (_tsdbVersions$find = tsdbVersions.find(version => version.value === value.jsonData.tsdbVersion)) !== null && _tsdbVersions$find !== void 0 ? _tsdbVersions$find : tsdbVersions[0],
        onChange: onSelectChangeHandler('tsdbVersion', value, onChange)
      })]
    }), (0,jsx_runtime.jsxs)("div", {
      className: "gf-form",
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
        width: 7,
        htmlFor: `select-resolution-${idSuffix}`,
        children: "Resolution"
      }), (0,jsx_runtime.jsx)(Select, {
        inputId: `select-resolution-${idSuffix}`,
        options: tsdbResolutions,
        value: (_tsdbResolutions$find = tsdbResolutions.find(resolution => resolution.value === value.jsonData.tsdbResolution)) !== null && _tsdbResolutions$find !== void 0 ? _tsdbResolutions$find : tsdbResolutions[0],
        onChange: onSelectChangeHandler('tsdbResolution', value, onChange)
      })]
    }), (0,jsx_runtime.jsxs)("div", {
      className: "gf-form",
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
        width: 7,
        htmlFor: `lookup-input-${idSuffix}`,
        children: "Lookup limit"
      }), (0,jsx_runtime.jsx)(Input, {
        id: `lookup-input-${idSuffix}`,
        type: "number",
        value: (_value$jsonData$looku = value.jsonData.lookupLimit) !== null && _value$jsonData$looku !== void 0 ? _value$jsonData$looku : 1000,
        onChange: onInputChangeHandler('lookupLimit', value, onChange)
      })]
    })]
  });
};

const onSelectChangeHandler = (key, value, onChange) => newValue => {
  onChange(Object.assign({}, value, {
    jsonData: Object.assign({}, value.jsonData, {
      [key]: newValue.value
    })
  }));
};

const onInputChangeHandler = (key, value, onChange) => event => {
  onChange(Object.assign({}, value, {
    jsonData: Object.assign({}, value.jsonData, {
      [key]: event.currentTarget.value
    })
  }));
};
;






const ConfigEditor = props => {
  const {
    options,
    onOptionsChange
  } = props;
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.DataSourceHttpSettings, {
      defaultUrl: "http://localhost:4242",
      dataSourceConfig: options,
      onChange: onOptionsChange
    }), (0,jsx_runtime.jsx)(OpenTsdbDetails, {
      value: options,
      onChange: onOptionsChange
    })]
  });
};
var angular = __webpack_require__("./.yarn/cache/angular-npm-1.8.2-307000482b-35ea81a23b.zip/node_modules/angular/index.js");
var angular_default = __webpack_require__.n(angular);
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
var lastValueFrom = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
var catchError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var template_srv = __webpack_require__("./public/app/features/templating/template_srv.ts");
;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class OpenTsDatasource extends src.DataSourceApi {
  constructor(instanceSettings) {
    let templateSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,template_srv.J)();
    super(instanceSettings);
    this.templateSrv = templateSrv;

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "url", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "withCredentials", void 0);

    _defineProperty(this, "basicAuth", void 0);

    _defineProperty(this, "tsdbVersion", void 0);

    _defineProperty(this, "tsdbResolution", void 0);

    _defineProperty(this, "lookupLimit", void 0);

    _defineProperty(this, "tagKeys", void 0);

    _defineProperty(this, "aggregatorsPromise", void 0);

    _defineProperty(this, "filterTypesPromise", void 0);

    this.templateSrv = templateSrv;
    this.type = 'opentsdb';
    this.url = instanceSettings.url;
    this.name = instanceSettings.name;
    this.withCredentials = instanceSettings.withCredentials;
    this.basicAuth = instanceSettings.basicAuth;
    instanceSettings.jsonData = instanceSettings.jsonData || {};
    this.tsdbVersion = instanceSettings.jsonData.tsdbVersion || 1;
    this.tsdbResolution = instanceSettings.jsonData.tsdbResolution || 1;
    this.lookupLimit = instanceSettings.jsonData.lookupLimit || 1000;
    this.tagKeys = {};
    this.aggregatorsPromise = null;
    this.filterTypesPromise = null;
  } 


  query(options) {
    const start = this.convertToTSDBTime(options.range.raw.from, false, options.timezone);
    const end = this.convertToTSDBTime(options.range.raw.to, true, options.timezone);
    const qs = [];
    (0,lodash.each)(options.targets, target => {
      if (!target.metric) {
        return;
      }

      qs.push(this.convertTargetToQuery(target, options, this.tsdbVersion));
    });
    const queries = (0,lodash.compact)(qs); 

    if ((0,lodash.isEmpty)(queries)) {
      return (0,of.of)({
        data: []
      });
    }

    const groupByTags = {};
    (0,lodash.each)(queries, query => {
      if (query.filters && query.filters.length > 0) {
        (0,lodash.each)(query.filters, val => {
          groupByTags[val.tagk] = true;
        });
      } else {
        (0,lodash.each)(query.tags, (val, key) => {
          groupByTags[key] = true;
        });
      }
    });
    options.targets = (0,lodash.filter)(options.targets, query => {
      return query.hide !== true;
    });
    return this.performTimeSeriesQuery(queries, start, end).pipe((0,catchError.K)(err => {
      var _err$data, _err$data$error;

      throw (err === null || err === void 0 ? void 0 : (_err$data = err.data) === null || _err$data === void 0 ? void 0 : (_err$data$error = _err$data.error) === null || _err$data$error === void 0 ? void 0 : _err$data$error.message) || 'Error performing time series query.';
    }), (0,map.U)(response => {
      const metricToTargetMapping = this.mapMetricsToTargets(response.data, options, this.tsdbVersion);

      const result = (0,lodash.map)(response.data, (metricData, index) => {
        index = metricToTargetMapping[index];

        if (index === -1) {
          index = 0;
        }

        this._saveTagKeys(metricData);

        return this.transformMetricData(metricData, groupByTags, options.targets[index], options, this.tsdbResolution);
      });

      return {
        data: result
      };
    }));
  }

  annotationQuery(options) {
    const start = this.convertToTSDBTime(options.rangeRaw.from, false, options.timezone);
    const end = this.convertToTSDBTime(options.rangeRaw.to, true, options.timezone);
    const qs = [];
    const eventList = [];
    qs.push({
      aggregator: 'sum',
      metric: options.annotation.target
    });
    const queries = (0,lodash.compact)(qs);
    return (0,lastValueFrom.n)(this.performTimeSeriesQuery(queries, start, end).pipe((0,map.U)(results => {
      if (results.data[0]) {
        let annotationObject = results.data[0].annotations;

        if (options.annotation.isGlobal) {
          annotationObject = results.data[0].globalAnnotations;
        }

        if (annotationObject) {
          (0,lodash.each)(annotationObject, annotation => {
            const event = {
              text: annotation.description,
              time: Math.floor(annotation.startTime) * 1000,
              annotation: options.annotation
            };
            eventList.push(event);
          });
        }
      }

      return eventList;
    })));
  }

  targetContainsTemplate(target) {
    if (target.filters && target.filters.length > 0) {
      for (let i = 0; i < target.filters.length; i++) {
        if (this.templateSrv.containsTemplate(target.filters[i].filter)) {
          return true;
        }
      }
    }

    if (target.tags && Object.keys(target.tags).length > 0) {
      for (const tagKey in target.tags) {
        if (this.templateSrv.containsTemplate(target.tags[tagKey])) {
          return true;
        }
      }
    }

    return false;
  }

  performTimeSeriesQuery(queries, start, end) {
    let msResolution = false;

    if (this.tsdbResolution === 2) {
      msResolution = true;
    }

    const reqBody = {
      start: start,
      queries: queries,
      msResolution: msResolution,
      globalAnnotations: true
    };

    if (this.tsdbVersion === 3) {
      reqBody.showQuery = true;
    } 


    if (end) {
      reqBody.end = end;
    }

    const options = {
      method: 'POST',
      url: this.url + '/api/query',
      data: reqBody
    };

    this._addCredentialOptions(options);

    return (0,grafana_runtime_src.getBackendSrv)().fetch(options);
  }

  suggestTagKeys(metric) {
    return Promise.resolve(this.tagKeys[metric] || []);
  }

  _saveTagKeys(metricData) {
    const tagKeys = Object.keys(metricData.tags);
    (0,lodash.each)(metricData.aggregateTags, tag => {
      tagKeys.push(tag);
    });
    this.tagKeys[metricData.metric] = tagKeys;
  }

  _performSuggestQuery(query, type) {
    return this._get('/api/suggest', {
      type,
      q: query,
      max: this.lookupLimit
    }).pipe((0,map.U)(result => {
      return result.data;
    }));
  }

  _performMetricKeyValueLookup(metric, keys) {
    if (!metric || !keys) {
      return (0,of.of)([]);
    }

    const keysArray = keys.split(',').map(key => {
      return key.trim();
    });
    const key = keysArray[0];
    let keysQuery = key + '=*';

    if (keysArray.length > 1) {
      keysQuery += ',' + keysArray.splice(1).join(',');
    }

    const m = metric + '{' + keysQuery + '}';
    return this._get('/api/search/lookup', {
      m: m,
      limit: this.lookupLimit
    }).pipe((0,map.U)(result => {
      result = result.data.results;
      const tagvs = [];
      (0,lodash.each)(result, r => {
        if (tagvs.indexOf(r.tags[key]) === -1) {
          tagvs.push(r.tags[key]);
        }
      });
      return tagvs;
    }));
  }

  _performMetricKeyLookup(metric) {
    if (!metric) {
      return (0,of.of)([]);
    }

    return this._get('/api/search/lookup', {
      m: metric,
      limit: 1000
    }).pipe((0,map.U)(result => {
      result = result.data.results;
      const tagks = [];
      (0,lodash.each)(result, r => {
        (0,lodash.each)(r.tags, (tagv, tagk) => {
          if (tagks.indexOf(tagk) === -1) {
            tagks.push(tagk);
          }
        });
      });
      return tagks;
    }));
  }

  _get(relativeUrl, params) {
    const options = {
      method: 'GET',
      url: this.url + relativeUrl,
      params: params
    };

    this._addCredentialOptions(options);

    return (0,grafana_runtime_src.getBackendSrv)().fetch(options);
  }

  _addCredentialOptions(options) {
    if (this.basicAuth || this.withCredentials) {
      options.withCredentials = true;
    }

    if (this.basicAuth) {
      options.headers = {
        Authorization: this.basicAuth
      };
    }
  }

  metricFindQuery(query) {
    if (!query) {
      return Promise.resolve([]);
    }

    let interpolated;

    try {
      interpolated = this.templateSrv.replace(query, {}, 'distributed');
    } catch (err) {
      return Promise.reject(err);
    }

    const responseTransform = result => {
      return (0,lodash.map)(result, value => {
        return {
          text: value
        };
      });
    };

    const metricsRegex = /metrics\((.*)\)/;
    const tagNamesRegex = /tag_names\((.*)\)/;
    const tagValuesRegex = /tag_values\((.*?),\s?(.*)\)/;
    const tagNamesSuggestRegex = /suggest_tagk\((.*)\)/;
    const tagValuesSuggestRegex = /suggest_tagv\((.*)\)/;
    const metricsQuery = interpolated.match(metricsRegex);

    if (metricsQuery) {
      return (0,lastValueFrom.n)(this._performSuggestQuery(metricsQuery[1], 'metrics').pipe((0,map.U)(responseTransform)));
    }

    const tagNamesQuery = interpolated.match(tagNamesRegex);

    if (tagNamesQuery) {
      return (0,lastValueFrom.n)(this._performMetricKeyLookup(tagNamesQuery[1]).pipe((0,map.U)(responseTransform)));
    }

    const tagValuesQuery = interpolated.match(tagValuesRegex);

    if (tagValuesQuery) {
      return (0,lastValueFrom.n)(this._performMetricKeyValueLookup(tagValuesQuery[1], tagValuesQuery[2]).pipe((0,map.U)(responseTransform)));
    }

    const tagNamesSuggestQuery = interpolated.match(tagNamesSuggestRegex);

    if (tagNamesSuggestQuery) {
      return (0,lastValueFrom.n)(this._performSuggestQuery(tagNamesSuggestQuery[1], 'tagk').pipe((0,map.U)(responseTransform)));
    }

    const tagValuesSuggestQuery = interpolated.match(tagValuesSuggestRegex);

    if (tagValuesSuggestQuery) {
      return (0,lastValueFrom.n)(this._performSuggestQuery(tagValuesSuggestQuery[1], 'tagv').pipe((0,map.U)(responseTransform)));
    }

    return Promise.resolve([]);
  }

  testDatasource() {
    return (0,lastValueFrom.n)(this._performSuggestQuery('cpu', 'metrics').pipe((0,map.U)(() => {
      return {
        status: 'success',
        message: 'Data source is working'
      };
    })));
  }

  getAggregators() {
    if (this.aggregatorsPromise) {
      return this.aggregatorsPromise;
    }

    this.aggregatorsPromise = (0,lastValueFrom.n)(this._get('/api/aggregators').pipe((0,map.U)(result => {
      if (result.data && (0,lodash.isArray)(result.data)) {
        return result.data.sort();
      }

      return [];
    })));
    return this.aggregatorsPromise;
  }

  getFilterTypes() {
    if (this.filterTypesPromise) {
      return this.filterTypesPromise;
    }

    this.filterTypesPromise = (0,lastValueFrom.n)(this._get('/api/config/filters').pipe((0,map.U)(result => {
      if (result.data) {
        return Object.keys(result.data).sort();
      }

      return [];
    })));
    return this.filterTypesPromise;
  }

  transformMetricData(md, groupByTags, target, options, tsdbResolution) {
    const metricLabel = this.createMetricLabel(md, target, groupByTags, options);
    const dps = []; 

    (0,lodash.each)(md.dps, (v, k) => {
      if (tsdbResolution === 2) {
        dps.push([v, k * 1]);
      } else {
        dps.push([v, k * 1000]);
      }
    });
    return {
      target: metricLabel,
      datapoints: dps
    };
  }

  createMetricLabel(md, target, groupByTags, options) {
    if (target.alias) {
      const scopedVars = (0,lodash.clone)(options.scopedVars || {});
      (0,lodash.each)(md.tags, (value, key) => {
        scopedVars['tag_' + key] = {
          value: value
        };
      });
      return this.templateSrv.replace(target.alias, scopedVars);
    }

    let label = md.metric;
    const tagData = [];

    if (!(0,lodash.isEmpty)(md.tags)) {
      (0,lodash.each)((0,lodash.toPairs)(md.tags), tag => {
        if ((0,lodash.has)(groupByTags, tag[0])) {
          tagData.push(tag[0] + '=' + tag[1]);
        }
      });
    }

    if (!(0,lodash.isEmpty)(tagData)) {
      label += '{' + tagData.join(', ') + '}';
    }

    return label;
  }

  convertTargetToQuery(target, options, tsdbVersion) {
    if (!target.metric || target.hide) {
      return null;
    }

    const query = {
      metric: this.templateSrv.replace(target.metric, options.scopedVars, 'pipe'),
      aggregator: 'avg'
    };

    if (target.aggregator) {
      query.aggregator = this.templateSrv.replace(target.aggregator);
    }

    if (target.shouldComputeRate) {
      query.rate = true;
      query.rateOptions = {
        counter: !!target.isCounter
      };

      if (target.counterMax && target.counterMax.length) {
        query.rateOptions.counterMax = parseInt(target.counterMax, 10);
      }

      if (target.counterResetValue && target.counterResetValue.length) {
        query.rateOptions.resetValue = parseInt(target.counterResetValue, 10);
      }

      if (tsdbVersion >= 2) {
        query.rateOptions.dropResets = !query.rateOptions.counterMax && (!query.rateOptions.ResetValue || query.rateOptions.ResetValue === 0);
      }
    }

    if (!target.disableDownsampling) {
      let interval = this.templateSrv.replace(target.downsampleInterval || options.interval);

      if (interval.match(/\.[0-9]+s/)) {
        interval = parseFloat(interval) * 1000 + 'ms';
      }

      query.downsample = interval + '-' + target.downsampleAggregator;

      if (target.downsampleFillPolicy && target.downsampleFillPolicy !== 'none') {
        query.downsample += '-' + target.downsampleFillPolicy;
      }
    }

    if (target.filters && target.filters.length > 0) {
      query.filters = angular_default().copy(target.filters);

      if (query.filters) {
        for (const filterKey in query.filters) {
          query.filters[filterKey].filter = this.templateSrv.replace(query.filters[filterKey].filter, options.scopedVars, 'pipe');
        }
      }
    } else {
      query.tags = angular_default().copy(target.tags);

      if (query.tags) {
        for (const tagKey in query.tags) {
          query.tags[tagKey] = this.templateSrv.replace(query.tags[tagKey], options.scopedVars, 'pipe');
        }
      }
    }

    if (target.explicitTags) {
      query.explicitTags = true;
    }

    return query;
  }

  mapMetricsToTargets(metrics, options, tsdbVersion) {
    let interpolatedTagValue, arrTagV;
    return (0,lodash.map)(metrics, metricData => {
      if (tsdbVersion === 3) {
        return metricData.query.index;
      } else {
        return (0,lodash.findIndex)(options.targets, target => {
          if (target.filters && target.filters.length > 0) {
            return target.metric === metricData.metric;
          } else {
            return target.metric === metricData.metric && (0,lodash.every)(target.tags, (tagV, tagK) => {
              interpolatedTagValue = this.templateSrv.replace(tagV, options.scopedVars, 'pipe');
              arrTagV = interpolatedTagValue.split('|');
              return (0,lodash.includes)(arrTagV, metricData.tags[tagK]) || interpolatedTagValue === '*';
            });
          }
        });
      }
    });
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    if (!queries.length) {
      return queries;
    }

    return queries.map(query => Object.assign({}, query, {
      metric: this.templateSrv.replace(query.metric, scopedVars)
    }));
  }

  convertToTSDBTime(date, roundUp, timezone) {
    if (date === 'now') {
      return null;
    }

    date = src.dateMath.parse(date, roundUp, timezone);
    return date.valueOf();
  }

}
var sdk = __webpack_require__("./public/app/plugins/sdk.ts");
;
function query_ctrl_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class OpenTsQueryCtrl extends sdk.QueryCtrl {
  constructor($scope, $injector) {
    super($scope, $injector);

    query_ctrl_defineProperty(this, "aggregators", void 0);

    query_ctrl_defineProperty(this, "fillPolicies", void 0);

    query_ctrl_defineProperty(this, "filterTypes", void 0);

    query_ctrl_defineProperty(this, "tsdbVersion", void 0);

    query_ctrl_defineProperty(this, "aggregator", void 0);

    query_ctrl_defineProperty(this, "downsampleInterval", void 0);

    query_ctrl_defineProperty(this, "downsampleAggregator", void 0);

    query_ctrl_defineProperty(this, "downsampleFillPolicy", void 0);

    query_ctrl_defineProperty(this, "errors", void 0);

    query_ctrl_defineProperty(this, "suggestMetrics", void 0);

    query_ctrl_defineProperty(this, "suggestTagKeys", void 0);

    query_ctrl_defineProperty(this, "suggestTagValues", void 0);

    query_ctrl_defineProperty(this, "addTagMode", false);

    query_ctrl_defineProperty(this, "addFilterMode", false);

    this.errors = this.validateTarget();
    this.aggregators = ['avg', 'sum', 'min', 'max', 'dev', 'zimsum', 'mimmin', 'mimmax'];
    this.fillPolicies = ['none', 'nan', 'null', 'zero'];
    this.filterTypes = ['wildcard', 'iliteral_or', 'not_iliteral_or', 'not_literal_or', 'iwildcard', 'literal_or', 'regexp'];
    this.tsdbVersion = this.datasource.tsdbVersion;

    if (!this.target.aggregator) {
      this.target.aggregator = 'sum';
    }

    if (!this.target.downsampleAggregator) {
      this.target.downsampleAggregator = 'avg';
    }

    if (!this.target.downsampleFillPolicy) {
      this.target.downsampleFillPolicy = 'none';
    }

    this.datasource.getAggregators().then(aggs => {
      if (aggs.length !== 0) {
        this.aggregators = aggs;
      }
    });
    this.datasource.getFilterTypes().then(filterTypes => {
      if (filterTypes.length !== 0) {
        this.filterTypes = filterTypes;
      }
    }); 

    this.suggestMetrics = (query, callback) => {
      this.datasource.metricFindQuery('metrics(' + query + ')').then(this.getTextValues).then(callback);
    };

    this.suggestTagKeys = (query, callback) => {
      this.datasource.suggestTagKeys(this.target.metric).then(callback);
    };

    this.suggestTagValues = (query, callback) => {
      this.datasource.metricFindQuery('suggest_tagv(' + query + ')').then(this.getTextValues).then(callback);
    };
  }

  targetBlur() {
    this.errors = this.validateTarget();
    this.refresh();
  }

  getTextValues(metricFindResult) {
    return (0,lodash.map)(metricFindResult, value => {
      return src.textUtil.escapeHtml(value.text);
    });
  }

  addTag() {
    if (this.target.filters && this.target.filters.length > 0) {
      this.errors.tags = 'Please remove filters to use tags, tags and filters are mutually exclusive.';
    }

    if (!this.addTagMode) {
      this.addTagMode = true;
      return;
    }

    if (!this.target.tags) {
      this.target.tags = {};
    }

    this.errors = this.validateTarget();

    if (!this.errors.tags) {
      this.target.tags[this.target.currentTagKey] = this.target.currentTagValue;
      this.target.currentTagKey = '';
      this.target.currentTagValue = '';
      this.targetBlur();
    }

    this.addTagMode = false;
  }

  removeTag(key) {
    delete this.target.tags[key];
    this.targetBlur();
  }

  editTag(key, value) {
    this.removeTag(key);
    this.target.currentTagKey = key;
    this.target.currentTagValue = value;
    this.addTag();
  }

  closeAddTagMode() {
    this.addTagMode = false;
    return;
  }

  addFilter() {
    if (this.target.tags && (0,lodash.size)(this.target.tags) > 0) {
      this.errors.filters = 'Please remove tags to use filters, tags and filters are mutually exclusive.';
    }

    if (!this.addFilterMode) {
      this.addFilterMode = true;
      return;
    }

    if (!this.target.filters) {
      this.target.filters = [];
    }

    if (!this.target.currentFilterType) {
      this.target.currentFilterType = 'iliteral_or';
    }

    if (!this.target.currentFilterGroupBy) {
      this.target.currentFilterGroupBy = false;
    }

    this.errors = this.validateTarget();

    if (!this.errors.filters) {
      const currentFilter = {
        type: this.target.currentFilterType,
        tagk: this.target.currentFilterKey,
        filter: this.target.currentFilterValue,
        groupBy: this.target.currentFilterGroupBy
      };
      this.target.filters.push(currentFilter);
      this.target.currentFilterType = 'literal_or';
      this.target.currentFilterKey = '';
      this.target.currentFilterValue = '';
      this.target.currentFilterGroupBy = false;
      this.targetBlur();
    }

    this.addFilterMode = false;
  }

  removeFilter(index) {
    this.target.filters.splice(index, 1);
    this.targetBlur();
  }

  editFilter(fil, index) {
    this.removeFilter(index);
    this.target.currentFilterKey = fil.tagk;
    this.target.currentFilterValue = fil.filter;
    this.target.currentFilterType = fil.type;
    this.target.currentFilterGroupBy = fil.groupBy;
    this.addFilter();
  }

  closeAddFilterMode() {
    this.addFilterMode = false;
    return;
  }

  validateTarget() {
    const errs = {};

    if (this.target.shouldDownsample) {
      try {
        if (this.target.downsampleInterval) {
          src.rangeUtil.describeInterval(this.target.downsampleInterval);
        } else {
          errs.downsampleInterval = "You must supply a downsample interval (e.g. '1m' or '1h').";
        }
      } catch (err) {
        errs.downsampleInterval = err.message;
      }
    }

    if (this.target.tags && (0,lodash.has)(this.target.tags, this.target.currentTagKey)) {
      errs.tags = "Duplicate tag key '" + this.target.currentTagKey + "'.";
    }

    return errs;
  }

}
OpenTsQueryCtrl.$inject = ["$scope", "$injector"];

query_ctrl_defineProperty(OpenTsQueryCtrl, "templateUrl", 'partials/query.editor.html');
;
function module_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class AnnotationsQueryCtrl {}

module_defineProperty(AnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const module_plugin = new src.DataSourcePlugin(OpenTsDatasource).setQueryCtrl(OpenTsQueryCtrl).setConfigEditor(ConfigEditor).setAnnotationQueryCtrl(AnnotationsQueryCtrl);

 }),

 "./public/app/plugins/sdk.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "MetricsPanelCtrl": () => ( MetricsPanelCtrl),
   "PanelCtrl": () => ( PanelCtrl),
   "QueryCtrl": () => ( QueryCtrl),
   "loadPluginCss": () => ( _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.loadPluginCss)
 });
 var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var app_angular_panel_metrics_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/panel/metrics_panel_ctrl.ts");
 var app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/angular/panel/panel_ctrl.ts");
 var app_angular_panel_query_ctrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/angular/panel/query_ctrl.ts");





const PanelCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_3__ .q);
const MetricsPanelCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_metrics_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__ .k);
const QueryCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_query_ctrl__WEBPACK_IMPORTED_MODULE_4__ .G);


 })

}]);