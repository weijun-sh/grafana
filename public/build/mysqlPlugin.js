"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["mysqlPlugin"],{

/***/ "./public/app/angular/AngularLocationWrapper.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularLocationWrapper": () => (/* binding */ AngularLocationWrapper)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

 // Ref: https://github.com/angular/angular.js/blob/ae8e903edf88a83fedd116ae02c0628bf72b150c/src/ng/location.js#L5

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
        // removing params with null | undefined
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

/***/ }),

/***/ "./public/app/angular/components/sql_part/sql_part.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SqlPart": () => (/* binding */ SqlPart),
/* harmony export */   "SqlPartDef": () => (/* binding */ SqlPartDef)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class SqlPartDef {
  constructor(options) {
    _defineProperty(this, "type", void 0);

    _defineProperty(this, "style", void 0);

    _defineProperty(this, "label", void 0);

    _defineProperty(this, "params", void 0);

    _defineProperty(this, "defaultParams", void 0);

    _defineProperty(this, "wrapOpen", void 0);

    _defineProperty(this, "wrapClose", void 0);

    _defineProperty(this, "separator", void 0);

    this.type = options.type;

    if (options.label) {
      this.label = options.label;
    } else {
      this.label = this.type[0].toUpperCase() + this.type.substring(1) + ':';
    }

    this.style = options.style;

    if (this.style === 'function') {
      this.wrapOpen = '(';
      this.wrapClose = ')';
      this.separator = ', ';
    } else {
      this.wrapOpen = ' ';
      this.wrapClose = ' ';
      this.separator = ' ';
    }

    this.params = options.params;
    this.defaultParams = options.defaultParams;
  }

}
class SqlPart {
  constructor(part, def) {
    _defineProperty(this, "part", void 0);

    _defineProperty(this, "def", void 0);

    _defineProperty(this, "params", void 0);

    _defineProperty(this, "label", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "datatype", void 0);

    this.part = part;
    this.def = def;

    if (!this.def) {
      throw {
        message: 'Could not find sql part ' + part.type
      };
    }

    this.datatype = part.datatype;

    if (part.name) {
      this.name = part.name;
      this.label = def.label + ' ' + part.name;
    } else {
      this.name = '';
      this.label = def.label;
    }

    part.params = part.params || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(this.def.defaultParams);
    this.params = part.params;
  }

  updateParam(strValue, index) {
    // handle optional parameters
    if (strValue === '' && this.def.params[index].optional) {
      this.params.splice(index, 1);
    } else {
      this.params[index] = strValue;
    }

    this.part.params = this.params;
  }

}

/***/ }),

/***/ "./public/app/angular/panel/metrics_panel_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricsPanelCtrl": () => (/* binding */ MetricsPanelCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/panel/panel_ctrl.ts");
/* harmony import */ var app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MetricsPanelCtrl extends app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__.PanelCtrl {
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
        } // Ignore data in loading state


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
          // Make the results look as if they came directly from a <6.2 datasource request
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
    // ignore fetching data if another panel is in fullscreen
    if (this.otherPanelInFullscreenMode()) {
      return;
    } // if we have snapshot data use that


    if (this.panel.snapshotData) {
      this.updateTimeRange();
      let data = this.panel.snapshotData; // backward compatibility

      if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(data)) {
        data = data.data;
      }

      this.panelData = {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done,
        series: data,
        timeRange: this.range
      }; // Defer panel rendering till the next digest cycle.
      // For some reason snapshot panels don't init at this time, so this helps to avoid rendering issues.

      return this.$timeout(() => {
        this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataSnapshotLoad, data);
      });
    } // clear loading/error state


    delete this.error;
    this.loading = true; // load datasource service

    return this.datasourceSrv.get(this.panel.datasource, this.panel.scopedVars).then(this.issueQueries.bind(this)).catch(err => {
      this.processDataError(err);
    });
  }

  processDataError(err) {
    // if canceled  keep loading set to true
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
  } // Updates the response with information from the stream


  updateTimeRange(datasource) {
    this.datasource = datasource || this.datasource;
    this.range = this.timeSrv.timeRange();
    const newTimeData = (0,app_features_dashboard_utils_panel__WEBPACK_IMPORTED_MODULE_3__.applyPanelTimeOverrides)(this.panel, this.range);
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



/***/ }),

/***/ "./public/app/angular/panel/panel_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelCtrl": () => (/* binding */ PanelCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_angular_AngularLocationWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/AngularLocationWrapper.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
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
    this.$location = new app_angular_AngularLocationWrapper__WEBPACK_IMPORTED_MODULE_2__.AngularLocationWrapper();
    this.events = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.EventBusSrv();
    this.timing = {}; // not used but here to not break plugins

    const plugin = app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].panels[this.panel.type];

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
    app_core_core__WEBPACK_IMPORTED_MODULE_4__.profiler.renderingCompleted();
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
  } // Override in sub-class to add items before extended menu


  async getAdditionalMenuItems() {
    return [];
  }

  otherPanelInFullscreenMode() {
    return this.dashboard.otherPanelInFullscreen(this.panel);
  }

  render(payload) {
    this.events.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.render, payload);
  } // overriden from react


}

/***/ }),

/***/ "./public/app/angular/panel/query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryCtrl": () => (/* binding */ QueryCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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

/***/ }),

/***/ "./public/app/features/datasources/utils/passwordHandlers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordFieldEnum": () => (/* binding */ PasswordFieldEnum),
/* harmony export */   "createChangeHandler": () => (/* binding */ createChangeHandler),
/* harmony export */   "createResetHandler": () => (/* binding */ createResetHandler)
/* harmony export */ });
/**
 * Set of handlers for secure password field in Angular components. They handle backward compatibility with
 * passwords stored in plain text fields.
 */
let PasswordFieldEnum;
/**
 * Basic shape for settings controllers in at the moment mostly angular data source plugins.
 */

(function (PasswordFieldEnum) {
  PasswordFieldEnum["Password"] = "password";
  PasswordFieldEnum["BasicAuthPassword"] = "basicAuthPassword";
})(PasswordFieldEnum || (PasswordFieldEnum = {}));

const createResetHandler = (ctrl, field) => event => {
  event.preventDefault(); // Reset also normal plain text password to remove it and only save it in secureJsonData.

  ctrl.current[field] = undefined;
  ctrl.current.secureJsonFields[field] = false;
  ctrl.current.secureJsonData = ctrl.current.secureJsonData || {};
  ctrl.current.secureJsonData[field] = '';
};
const createChangeHandler = (ctrl, field) => event => {
  ctrl.current.secureJsonData = ctrl.current.secureJsonData || {};
  ctrl.current.secureJsonData[field] = event.currentTarget.value;
};

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MysqlDatasource": () => (/* binding */ MysqlDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/utils/queryResponse.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var app_plugins_datasource_mysql_mysql_query_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/mysql/mysql_query_model.ts");
/* harmony import */ var _features_variables_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _response_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/mysql/response_parser.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class MysqlDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)()) {
    super(instanceSettings);
    this.templateSrv = templateSrv;

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "responseParser", void 0);

    _defineProperty(this, "queryModel", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "interpolateVariable", (value, variable) => {
      if (typeof value === 'string') {
        if (variable.multi || variable.includeAll) {
          const result = this.queryModel.quoteLiteral(value);
          return result;
        } else {
          return value;
        }
      }

      if (typeof value === 'number') {
        return value;
      }

      const quotedValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(value, v => {
        return this.queryModel.quoteLiteral(v);
      });

      return quotedValues.join(',');
    });

    this.templateSrv = templateSrv;
    this.name = instanceSettings.name;
    this.id = instanceSettings.id;
    this.responseParser = new _response_parser__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.queryModel = new app_plugins_datasource_mysql_mysql_query_model__WEBPACK_IMPORTED_MODULE_4__["default"]({});
    const settingsData = instanceSettings.jsonData || {};
    this.interval = settingsData.timeInterval || '1m';
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    let expandedQueries = queries;

    if (queries && queries.length > 0) {
      expandedQueries = queries.map(query => {
        const expandedQuery = Object.assign({}, query, {
          datasource: this.getRef(),
          rawSql: this.templateSrv.replace(query.rawSql, scopedVars, this.interpolateVariable),
          rawQuery: true
        });
        return expandedQuery;
      });
    }

    return expandedQueries;
  }

  filterQuery(query) {
    return !query.hide;
  }

  applyTemplateVariables(target, scopedVars) {
    const queryModel = new app_plugins_datasource_mysql_mysql_query_model__WEBPACK_IMPORTED_MODULE_4__["default"](target, this.templateSrv, scopedVars);
    return {
      refId: target.refId,
      datasource: this.getRef(),
      rawSql: queryModel.render(this.interpolateVariable),
      format: target.format
    };
  }

  async annotationQuery(options) {
    if (!options.annotation.rawQuery) {
      return Promise.reject({
        message: 'Query missing in annotation definition'
      });
    }

    const query = {
      refId: options.annotation.name,
      datasource: this.getRef(),
      rawSql: this.templateSrv.replace(options.annotation.rawQuery, options.scopedVars, this.interpolateVariable),
      format: 'table'
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: options.range.from.valueOf().toString(),
        to: options.range.to.valueOf().toString(),
        queries: [query]
      },
      requestId: options.annotation.name
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(async res => await this.responseParser.transformAnnotationResponse(options, res.data))));
  }

  metricFindQuery(query, optionalOptions) {
    var _range$from, _range$from$valueOf, _range$to, _range$to$valueOf;

    let refId = 'tempvar';

    if (optionalOptions && optionalOptions.variable && optionalOptions.variable.name) {
      refId = optionalOptions.variable.name;
    }

    const rawSql = this.templateSrv.replace(query, (0,_features_variables_utils__WEBPACK_IMPORTED_MODULE_5__.getSearchFilterScopedVar)({
      query,
      wildcardChar: '%',
      options: optionalOptions
    }), this.interpolateVariable);
    const interpolatedQuery = {
      refId: refId,
      datasource: this.getRef(),
      rawSql,
      format: 'table'
    };
    const range = optionalOptions === null || optionalOptions === void 0 ? void 0 : optionalOptions.range;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: range === null || range === void 0 ? void 0 : (_range$from = range.from) === null || _range$from === void 0 ? void 0 : (_range$from$valueOf = _range$from.valueOf()) === null || _range$from$valueOf === void 0 ? void 0 : _range$from$valueOf.toString(),
        to: range === null || range === void 0 ? void 0 : (_range$to = range.to) === null || _range$to === void 0 ? void 0 : (_range$to$valueOf = _range$to.valueOf()) === null || _range$to$valueOf === void 0 ? void 0 : _range$to$valueOf.toString(),
        queries: [interpolatedQuery]
      },
      requestId: refId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(rsp => {
      return this.responseParser.transformMetricFindResponse(rsp);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]);
    })));
  }

  testDatasource() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: '5m',
        to: 'now',
        queries: [{
          refId: 'A',
          intervalMs: 1,
          maxDataPoints: 1,
          datasource: this.getRef(),
          rawSql: 'SELECT 1',
          format: 'table'
        }]
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mapTo)({
      status: 'success',
      message: 'Database Connection OK'
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)((0,_grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_2__.toTestingStatus)(err));
    })));
  }

  targetContainsTemplate(target) {
    let rawSql = '';

    if (target.rawQuery) {
      rawSql = target.rawSql;
    } else {
      const query = new app_plugins_datasource_mysql_mysql_query_model__WEBPACK_IMPORTED_MODULE_4__["default"](target);
      rawSql = query.buildQuery();
    }

    rawSql = rawSql.replace('$__', '');
    return this.templateSrv.containsTemplate(rawSql);
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/meta_query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MysqlMetaQuery": () => (/* binding */ MysqlMetaQuery)
/* harmony export */ });
class MysqlMetaQuery {
  constructor(target, queryModel) {
    this.target = target;
    this.queryModel = queryModel;
    this.target = target;
    this.queryModel = queryModel;
  }

  getOperators(datatype) {
    switch (datatype) {
      case 'double':
      case 'float':
        {
          return ['=', '!=', '<', '<=', '>', '>='];
        }

      case 'text':
      case 'tinytext':
      case 'mediumtext':
      case 'longtext':
      case 'varchar':
      case 'char':
        {
          return ['=', '!=', '<', '<=', '>', '>=', 'IN', 'NOT IN', 'LIKE', 'NOT LIKE'];
        }

      default:
        {
          return ['=', '!=', '<', '<=', '>', '>=', 'IN', 'NOT IN'];
        }
    }
  } // quote identifier as literal to use in metadata queries


  quoteIdentAsLiteral(value) {
    return this.queryModel.quoteLiteral(this.queryModel.unquoteIdentifier(value));
  }

  findMetricTable() {
    // query that returns first table found that has a timestamp(tz) column and a float column
    const query = `
  SELECT
    table_name as table_name,
    ( SELECT
        column_name as column_name
      FROM information_schema.columns c
      WHERE
        c.table_schema = t.table_schema AND
        c.table_name = t.table_name AND
        c.data_type IN ('timestamp', 'datetime')
      ORDER BY ordinal_position LIMIT 1
    ) AS time_column,
    ( SELECT
        column_name AS column_name
      FROM information_schema.columns c
      WHERE
        c.table_schema = t.table_schema AND
        c.table_name = t.table_name AND
        c.data_type IN('float', 'int', 'bigint')
      ORDER BY ordinal_position LIMIT 1
    ) AS value_column
  FROM information_schema.tables t
  WHERE
    t.table_schema = database() AND
    EXISTS
    ( SELECT 1
      FROM information_schema.columns c
      WHERE
        c.table_schema = t.table_schema AND
        c.table_name = t.table_name AND
        c.data_type IN ('timestamp', 'datetime')
    ) AND
    EXISTS
    ( SELECT 1
      FROM information_schema.columns c
      WHERE
        c.table_schema = t.table_schema AND
        c.table_name = t.table_name AND
        c.data_type IN('float', 'int', 'bigint')
    )
  LIMIT 1
;`;
    return query;
  }

  buildTableConstraint(table) {
    let query = ''; // check for schema qualified table

    if (table.includes('.')) {
      const parts = table.split('.');
      query = 'table_schema = ' + this.quoteIdentAsLiteral(parts[0]);
      query += ' AND table_name = ' + this.quoteIdentAsLiteral(parts[1]);
      return query;
    } else {
      query = 'table_schema = database() AND table_name = ' + this.quoteIdentAsLiteral(table);
      return query;
    }
  }

  buildTableQuery() {
    return 'SELECT table_name FROM information_schema.tables WHERE table_schema = database() ORDER BY table_name';
  }

  buildColumnQuery(type) {
    let query = 'SELECT column_name FROM information_schema.columns WHERE ';
    query += this.buildTableConstraint(this.target.table);

    switch (type) {
      case 'time':
        {
          query += " AND data_type IN ('timestamp','datetime','bigint','int','double','float')";
          break;
        }

      case 'metric':
        {
          query += " AND data_type IN ('text','tinytext','mediumtext','longtext','varchar','char')";
          break;
        }

      case 'value':
        {
          query += " AND data_type IN ('bigint','int','smallint','mediumint','tinyint','double','decimal','float')";
          query += ' AND column_name <> ' + this.quoteIdentAsLiteral(this.target.timeColumn);
          break;
        }

      case 'group':
        {
          query += " AND data_type IN ('text','tinytext','mediumtext','longtext','varchar','char')";
          break;
        }
    }

    query += ' ORDER BY column_name';
    return query;
  }

  buildValueQuery(column) {
    let query = 'SELECT DISTINCT QUOTE(' + column + ')';
    query += ' FROM ' + this.target.table;
    query += ' WHERE $__timeFilter(' + this.target.timeColumn + ')';
    query += ' ORDER BY 1 LIMIT 100';
    return query;
  }

  buildDatatypeQuery(column) {
    let query = `
SELECT data_type
FROM information_schema.columns
WHERE `;
    query += ' table_name = ' + this.quoteIdentAsLiteral(this.target.table);
    query += ' AND column_name = ' + this.quoteIdentAsLiteral(column);
    return query;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationsQueryCtrl": () => (/* binding */ MysqlAnnotationsQueryCtrl),
/* harmony export */   "ConfigCtrl": () => (/* binding */ MysqlConfigCtrl),
/* harmony export */   "Datasource": () => (/* reexport safe */ _datasource__WEBPACK_IMPORTED_MODULE_2__.MysqlDatasource),
/* harmony export */   "MysqlDatasource": () => (/* reexport safe */ _datasource__WEBPACK_IMPORTED_MODULE_2__.MysqlDatasource),
/* harmony export */   "QueryCtrl": () => (/* reexport safe */ _query_ctrl__WEBPACK_IMPORTED_MODULE_3__.MysqlQueryCtrl),
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/datasources/utils/passwordHandlers.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/mysql/datasource.ts");
/* harmony import */ var _query_ctrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/mysql/query_ctrl.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MysqlConfigCtrl {
  constructor() {
    _defineProperty(this, "current", void 0);

    _defineProperty(this, "onPasswordReset", void 0);

    _defineProperty(this, "onPasswordChange", void 0);

    this.onPasswordReset = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.createResetHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.PasswordFieldEnum.Password);
    this.onPasswordChange = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.createChangeHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.PasswordFieldEnum.Password);
  }

}

_defineProperty(MysqlConfigCtrl, "templateUrl", 'partials/config.html');

const defaultQuery = `SELECT
    UNIX_TIMESTAMP(<time_column>) as time_sec,
    <text_column> as text,
    <tags_column> as tags
  FROM <table name>
  WHERE $__timeFilter(time_column)
  ORDER BY <time_column> ASC
  LIMIT 100
  `;

class MysqlAnnotationsQueryCtrl {
  /** @ngInject */
  constructor($scope) {
    this.annotation = $scope.ctrl.annotation;
    this.annotation.rawQuery = this.annotation.rawQuery || defaultQuery;
  }

}

MysqlAnnotationsQueryCtrl.$inject = ["$scope"];

_defineProperty(MysqlAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');


const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_2__.MysqlDatasource).setQueryCtrl(_query_ctrl__WEBPACK_IMPORTED_MODULE_3__.MysqlQueryCtrl).setConfigCtrl(MysqlConfigCtrl).setAnnotationQueryCtrl(MysqlAnnotationsQueryCtrl);

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/mysql_query_model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MySQLQueryModel)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class MySQLQueryModel {
  /** @ngInject */
  constructor(target, templateSrv, scopedVars) {
    _defineProperty(this, "target", void 0);

    _defineProperty(this, "templateSrv", void 0);

    _defineProperty(this, "scopedVars", void 0);

    this.target = target;
    this.templateSrv = templateSrv;
    this.scopedVars = scopedVars;
    target.format = target.format || 'time_series';
    target.timeColumn = target.timeColumn || 'time';
    target.metricColumn = target.metricColumn || 'none';
    target.group = target.group || [];
    target.where = target.where || [{
      type: 'macro',
      name: '$__timeFilter',
      params: []
    }];
    target.select = target.select || [[{
      type: 'column',
      params: ['value']
    }]]; // handle pre query gui panels gracefully

    if (!('rawQuery' in this.target)) {
      if ('rawSql' in target) {
        // pre query gui panel
        target.rawQuery = true;
      } else {
        // new panel
        target.rawQuery = false;
      }
    } // give interpolateQueryStr access to this


    this.interpolateQueryStr = this.interpolateQueryStr.bind(this);
  } // remove identifier quoting from identifier to use in metadata queries


  unquoteIdentifier(value) {
    if (value[0] === '"' && value[value.length - 1] === '"') {
      return value.substring(1, value.length - 1).replace(/""/g, '"');
    } else {
      return value;
    }
  }

  quoteIdentifier(value) {
    return '"' + value.replace(/"/g, '""') + '"';
  }

  quoteLiteral(value) {
    return "'" + value.replace(/'/g, "''") + "'";
  }

  escapeLiteral(value) {
    return String(value).replace(/'/g, "''");
  }

  hasTimeGroup() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.target.group, g => g.type === 'time');
  }

  hasMetricColumn() {
    return this.target.metricColumn !== 'none';
  }

  interpolateQueryStr(value, variable, defaultFormatFn) {
    // if no multi or include all do not regexEscape
    if (!variable.multi && !variable.includeAll) {
      return this.escapeLiteral(value);
    }

    if (typeof value === 'string') {
      return this.quoteLiteral(value);
    }

    const escapedValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(value, this.quoteLiteral);
    return escapedValues.join(',');
  }

  render(interpolate) {
    const target = this.target; // new query with no table set yet

    if (!this.target.rawQuery && !('table' in this.target)) {
      return '';
    }

    if (!target.rawQuery) {
      target.rawSql = this.buildQuery();
    }

    if (interpolate) {
      return this.templateSrv.replace(target.rawSql, this.scopedVars, this.interpolateQueryStr);
    } else {
      return target.rawSql;
    }
  }

  hasUnixEpochTimecolumn() {
    return ['int', 'bigint', 'double'].indexOf(this.target.timeColumnType) > -1;
  }

  buildTimeColumn(alias = true) {
    const timeGroup = this.hasTimeGroup();
    let query;
    let macro = '$__timeGroup';

    if (timeGroup) {
      let args;

      if (timeGroup.params.length > 1 && timeGroup.params[1] !== 'none') {
        args = timeGroup.params.join(',');
      } else {
        args = timeGroup.params[0];
      }

      if (this.hasUnixEpochTimecolumn()) {
        macro = '$__unixEpochGroup';
      }

      if (alias) {
        macro += 'Alias';
      }

      query = macro + '(' + this.target.timeColumn + ',' + args + ')';
    } else {
      query = this.target.timeColumn;

      if (alias) {
        query += ' AS "time"';
      }
    }

    return query;
  }

  buildMetricColumn() {
    if (this.hasMetricColumn()) {
      return this.target.metricColumn + ' AS metric';
    }

    return '';
  }

  buildValueColumns() {
    let query = '';

    for (const column of this.target.select) {
      query += ',\n  ' + this.buildValueColumn(column);
    }

    return query;
  }

  buildValueColumn(column) {
    let query = '';
    const columnName = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(column, g => g.type === 'column');
    query = columnName.params[0];
    const aggregate = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(column, g => g.type === 'aggregate');

    if (aggregate) {
      const func = aggregate.params[0];
      query = func + '(' + query + ')';
    }

    const alias = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(column, g => g.type === 'alias');

    if (alias) {
      query += ' AS ' + this.quoteIdentifier(alias.params[0]);
    }

    return query;
  }

  buildWhereClause() {
    let query = '';
    const conditions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.where, (tag, index) => {
      switch (tag.type) {
        case 'macro':
          return tag.name + '(' + this.target.timeColumn + ')';
          break;

        case 'expression':
          return tag.params.join(' ');
          break;
      }
    });

    if (conditions.length > 0) {
      query = '\nWHERE\n  ' + conditions.join(' AND\n  ');
    }

    return query;
  }

  buildGroupClause() {
    let query = '';
    let groupSection = '';

    for (let i = 0; i < this.target.group.length; i++) {
      const part = this.target.group[i];

      if (i > 0) {
        groupSection += ', ';
      }

      if (part.type === 'time') {
        groupSection += '1';
      } else {
        groupSection += part.params[0];
      }
    }

    if (groupSection.length) {
      query = '\nGROUP BY ' + groupSection;

      if (this.hasMetricColumn()) {
        query += ',2';
      }
    }

    return query;
  }

  buildQuery() {
    let query = 'SELECT';
    query += '\n  ' + this.buildTimeColumn();

    if (this.hasMetricColumn()) {
      query += ',\n  ' + this.buildMetricColumn();
    }

    query += this.buildValueColumns();
    query += '\nFROM ' + this.target.table;
    query += this.buildWhereClause();
    query += this.buildGroupClause();
    query += '\nORDER BY ' + this.buildTimeColumn(false);
    return query;
  }

}
MySQLQueryModel.$inject = ["target", "templateSrv", "scopedVars"];

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MysqlQueryCtrl": () => (/* binding */ MysqlQueryCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/sdk.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _meta_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/mysql/meta_query.ts");
/* harmony import */ var _mysql_query_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/mysql/mysql_query_model.ts");
/* harmony import */ var _sql_part__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/mysql/sql_part.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const defaultQuery = `SELECT
  UNIX_TIMESTAMP(<time_column>) as time_sec,
  <value column> as value,
  <series name column> as metric
FROM <table name>
WHERE $__timeFilter(time_column)
ORDER BY <time_column> ASC
`;
class MysqlQueryCtrl extends app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__.QueryCtrl {
  /** @ngInject */
  constructor($scope, $injector, templateSrv, uiSegmentSrv) {
    super($scope, $injector);
    this.templateSrv = templateSrv;
    this.uiSegmentSrv = uiSegmentSrv;

    _defineProperty(this, "formats", void 0);

    _defineProperty(this, "lastQueryError", void 0);

    _defineProperty(this, "showHelp", void 0);

    _defineProperty(this, "queryModel", void 0);

    _defineProperty(this, "metaBuilder", void 0);

    _defineProperty(this, "lastQueryMeta", void 0);

    _defineProperty(this, "tableSegment", void 0);

    _defineProperty(this, "whereAdd", void 0);

    _defineProperty(this, "timeColumnSegment", void 0);

    _defineProperty(this, "metricColumnSegment", void 0);

    _defineProperty(this, "selectMenu", []);

    _defineProperty(this, "selectParts", []);

    _defineProperty(this, "groupParts", []);

    _defineProperty(this, "whereParts", []);

    _defineProperty(this, "groupAdd", void 0);

    this.templateSrv = templateSrv;
    this.uiSegmentSrv = uiSegmentSrv;
    this.target = this.target;
    this.queryModel = new _mysql_query_model__WEBPACK_IMPORTED_MODULE_6__["default"](this.target, templateSrv, this.panel.scopedVars);
    this.metaBuilder = new _meta_query__WEBPACK_IMPORTED_MODULE_5__.MysqlMetaQuery(this.target, this.queryModel);
    this.updateProjection();
    this.formats = [{
      text: 'Time series',
      value: 'time_series'
    }, {
      text: 'Table',
      value: 'table'
    }];

    if (!this.target.rawSql) {
      // special handling when in table panel
      if (this.panelCtrl.panel.type === 'table') {
        this.target.format = 'table';
        this.target.rawSql = 'SELECT 1';
        this.target.rawQuery = true;
      } else {
        this.target.rawSql = defaultQuery;
        this.datasource.metricFindQuery(this.metaBuilder.findMetricTable()).then(result => {
          if (result.length > 0) {
            this.target.table = result[0].text;
            let segment = this.uiSegmentSrv.newSegment(this.target.table);
            this.tableSegment.html = segment.html;
            this.tableSegment.value = segment.value;
            this.target.timeColumn = result[1].text;
            segment = this.uiSegmentSrv.newSegment(this.target.timeColumn);
            this.timeColumnSegment.html = segment.html;
            this.timeColumnSegment.value = segment.value;
            this.target.timeColumnType = 'timestamp';
            this.target.select = [[{
              type: 'column',
              params: [result[2].text]
            }]];
            this.updateProjection();
            this.updateRawSqlAndRefresh();
          }
        });
      }
    }

    if (!this.target.table) {
      this.tableSegment = uiSegmentSrv.newSegment({
        value: 'select table',
        fake: true
      });
    } else {
      this.tableSegment = uiSegmentSrv.newSegment(this.target.table);
    }

    this.timeColumnSegment = uiSegmentSrv.newSegment(this.target.timeColumn);
    this.metricColumnSegment = uiSegmentSrv.newSegment(this.target.metricColumn);
    this.buildSelectMenu();
    this.whereAdd = this.uiSegmentSrv.newPlusButton();
    this.groupAdd = this.uiSegmentSrv.newPlusButton();
    this.panelCtrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataReceived, this.onDataReceived.bind(this), $scope);
    this.panelCtrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelEvents.dataError, this.onDataError.bind(this), $scope);
  }

  updateRawSqlAndRefresh() {
    if (!this.target.rawQuery) {
      this.target.rawSql = this.queryModel.buildQuery();
    }

    this.panelCtrl.refresh();
  }

  updateProjection() {
    this.selectParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.select, parts => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(parts, _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create).filter(n => n);
    });
    this.whereParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.where, _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create).filter(n => n);
    this.groupParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.group, _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create).filter(n => n);
  }

  updatePersistedParts() {
    this.target.select = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.selectParts, selectParts => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(selectParts, part => {
        return {
          type: part.def.type,
          datatype: part.datatype,
          params: part.params
        };
      });
    });
    this.target.where = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.whereParts, part => {
      return {
        type: part.def.type,
        datatype: part.datatype,
        name: part.name,
        params: part.params
      };
    });
    this.target.group = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.groupParts, part => {
      return {
        type: part.def.type,
        datatype: part.datatype,
        params: part.params
      };
    });
  }

  buildSelectMenu() {
    const aggregates = {
      text: 'Aggregate Functions',
      value: 'aggregate',
      submenu: [{
        text: 'Average',
        value: 'avg'
      }, {
        text: 'Count',
        value: 'count'
      }, {
        text: 'Maximum',
        value: 'max'
      }, {
        text: 'Minimum',
        value: 'min'
      }, {
        text: 'Sum',
        value: 'sum'
      }, {
        text: 'Standard deviation',
        value: 'stddev'
      }, {
        text: 'Variance',
        value: 'variance'
      }]
    };
    this.selectMenu.push(aggregates);
    this.selectMenu.push({
      text: 'Alias',
      value: 'alias'
    });
    this.selectMenu.push({
      text: 'Column',
      value: 'column'
    });
  }

  toggleEditorMode() {
    if (this.target.rawQuery) {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_2__["default"].publish(new _types_events__WEBPACK_IMPORTED_MODULE_4__.ShowConfirmModalEvent({
        title: 'Warning',
        text2: 'Switching to query builder may overwrite your raw SQL.',
        icon: 'exclamation-triangle',
        yesText: 'Switch',
        onConfirm: () => {
          // This could be called from React, so wrap in $evalAsync.
          // Will then either run as part of the current digest cycle or trigger a new one.
          this.$scope.$evalAsync(() => {
            this.target.rawQuery = !this.target.rawQuery;
          });
        }
      }));
    } else {
      // This could be called from React, so wrap in $evalAsync.
      // Will then either run as part of the current digest cycle or trigger a new one.
      this.$scope.$evalAsync(() => {
        this.target.rawQuery = !this.target.rawQuery;
      });
    }
  }

  resetPlusButton(button) {
    const plusButton = this.uiSegmentSrv.newPlusButton();
    button.html = plusButton.html;
    button.value = plusButton.value;
  }

  getTableSegments() {
    return this.datasource.metricFindQuery(this.metaBuilder.buildTableQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));
  }

  tableChanged() {
    this.target.table = this.tableSegment.value;
    this.target.where = [];
    this.target.group = [];
    this.updateProjection();
    const segment = this.uiSegmentSrv.newSegment('none');
    this.metricColumnSegment.html = segment.html;
    this.metricColumnSegment.value = segment.value;
    this.target.metricColumn = 'none';
    const task1 = this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('time')).then(result => {
      // check if time column is still valid
      if (result.length > 0 && !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(result, r => r.text === this.target.timeColumn)) {
        const segment = this.uiSegmentSrv.newSegment(result[0].text);
        this.timeColumnSegment.html = segment.html;
        this.timeColumnSegment.value = segment.value;
      }

      return this.timeColumnChanged(false);
    });
    const task2 = this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('value')).then(result => {
      if (result.length > 0) {
        this.target.select = [[{
          type: 'column',
          params: [result[0].text]
        }]];
        this.updateProjection();
      }
    });
    Promise.all([task1, task2]).then(() => {
      this.updateRawSqlAndRefresh();
    });
  }

  getTimeColumnSegments() {
    return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('time')).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));
  }

  timeColumnChanged(refresh) {
    this.target.timeColumn = this.timeColumnSegment.value;
    return this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(this.target.timeColumn)).then(result => {
      if (result.length === 1) {
        if (this.target.timeColumnType !== result[0].text) {
          this.target.timeColumnType = result[0].text;
        }

        let partModel;

        if (this.queryModel.hasUnixEpochTimecolumn()) {
          partModel = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
            type: 'macro',
            name: '$__unixEpochFilter',
            params: []
          });
        } else {
          partModel = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
            type: 'macro',
            name: '$__timeFilter',
            params: []
          });
        }

        if (this.whereParts.length >= 1 && this.whereParts[0].def.type === 'macro') {
          // replace current macro
          this.whereParts[0] = partModel;
        } else {
          this.whereParts.splice(0, 0, partModel);
        }
      }

      this.updatePersistedParts();

      if (refresh !== false) {
        this.updateRawSqlAndRefresh();
      }
    });
  }

  getMetricColumnSegments() {
    return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('metric')).then(this.transformToSegments({
      addNone: true
    })).catch(this.handleQueryError.bind(this));
  }

  metricColumnChanged() {
    this.target.metricColumn = this.metricColumnSegment.value;
    this.updateRawSqlAndRefresh();
  }

  onDataReceived(dataList) {
    var _dataList$;

    this.lastQueryError = undefined;
    this.lastQueryMeta = (_dataList$ = dataList[0]) === null || _dataList$ === void 0 ? void 0 : _dataList$.meta;
  }

  onDataError(err) {
    if (err.data && err.data.results) {
      const queryRes = err.data.results[this.target.refId];

      if (queryRes) {
        this.lastQueryError = queryRes.error;
      }
    }
  }

  transformToSegments(config) {
    return results => {
      const segments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(results, segment => {
        return this.uiSegmentSrv.newSegment({
          value: segment.text,
          expandable: segment.expandable
        });
      });

      if (config.addTemplateVars) {
        for (const variable of this.templateSrv.getVariables()) {
          let value;
          value = '$' + variable.name;

          if (config.templateQuoter && variable.multi === false) {
            value = config.templateQuoter(value);
          }

          segments.unshift(this.uiSegmentSrv.newSegment({
            type: 'template',
            value: value,
            expandable: true
          }));
        }
      }

      if (config.addNone) {
        segments.unshift(this.uiSegmentSrv.newSegment({
          type: 'template',
          value: 'none',
          expandable: true
        }));
      }

      return segments;
    };
  }

  findAggregateIndex(selectParts) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(selectParts, p => p.def.type === 'aggregate' || p.def.type === 'percentile');
  }

  findWindowIndex(selectParts) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(selectParts, p => p.def.type === 'window' || p.def.type === 'moving_window');
  }

  addSelectPart(selectParts, item, subItem) {
    let partType = item.value;

    if (subItem && subItem.type) {
      partType = subItem.type;
    }

    let partModel = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
      type: partType
    });

    if (subItem) {
      partModel.params[0] = subItem.value;
    }

    let addAlias = false;

    switch (partType) {
      case 'column':
        const parts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(selectParts, part => {
          return _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
            type: part.def.type,
            params: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(part.params)
          });
        });
        this.selectParts.push(parts);
        break;

      case 'percentile':
      case 'aggregate':
        // add group by if no group by yet
        if (this.target.group.length === 0) {
          this.addGroup('time', '$__interval');
        }

        const aggIndex = this.findAggregateIndex(selectParts);

        if (aggIndex !== -1) {
          // replace current aggregation
          selectParts[aggIndex] = partModel;
        } else {
          selectParts.splice(1, 0, partModel);
        }

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(selectParts, p => p.def.type === 'alias')) {
          addAlias = true;
        }

        break;

      case 'moving_window':
      case 'window':
        const windowIndex = this.findWindowIndex(selectParts);

        if (windowIndex !== -1) {
          // replace current window function
          selectParts[windowIndex] = partModel;
        } else {
          const aggIndex = this.findAggregateIndex(selectParts);

          if (aggIndex !== -1) {
            selectParts.splice(aggIndex + 1, 0, partModel);
          } else {
            selectParts.splice(1, 0, partModel);
          }
        }

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(selectParts, p => p.def.type === 'alias')) {
          addAlias = true;
        }

        break;

      case 'alias':
        addAlias = true;
        break;
    }

    if (addAlias) {
      // set initial alias name to column name
      partModel = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
        type: 'alias',
        params: [selectParts[0].params[0].replace(/"/g, '')]
      });

      if (selectParts[selectParts.length - 1].def.type === 'alias') {
        selectParts[selectParts.length - 1] = partModel;
      } else {
        selectParts.push(partModel);
      }
    }

    this.updatePersistedParts();
    this.updateRawSqlAndRefresh();
  }

  removeSelectPart(selectParts, part) {
    if (part.def.type === 'column') {
      // remove all parts of column unless its last column
      if (this.selectParts.length > 1) {
        const modelsIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(this.selectParts, selectParts);
        this.selectParts.splice(modelsIndex, 1);
      }
    } else {
      const partIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(selectParts, part);
      selectParts.splice(partIndex, 1);
    }

    this.updatePersistedParts();
  }

  handleSelectPartEvent(selectParts, part, evt) {
    switch (evt.name) {
      case 'get-param-options':
        {
          switch (part.def.type) {
            // case 'aggregate':
            //   return this.datasource
            //     .metricFindQuery(this.metaBuilder.buildAggregateQuery())
            //     .then(this.transformToSegments({}))
            //     .catch(this.handleQueryError.bind(this));
            case 'column':
              return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('value')).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));
          }
        }

      case 'part-param-changed':
        {
          this.updatePersistedParts();
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'action':
        {
          this.removeSelectPart(selectParts, part);
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'get-part-actions':
        {
          return Promise.resolve([{
            text: 'Remove',
            value: 'remove-part'
          }]);
        }
    }
  }

  handleGroupPartEvent(part, index, evt) {
    switch (evt.name) {
      case 'get-param-options':
        {
          return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));
        }

      case 'part-param-changed':
        {
          this.updatePersistedParts();
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'action':
        {
          this.removeGroup(part, index);
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'get-part-actions':
        {
          return Promise.resolve([{
            text: 'Remove',
            value: 'remove-part'
          }]);
        }
    }
  }

  addGroup(partType, value) {
    let params = [value];

    if (partType === 'time') {
      params = ['$__interval', 'none'];
    }

    const partModel = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
      type: partType,
      params: params
    });

    if (partType === 'time') {
      // put timeGroup at start
      this.groupParts.splice(0, 0, partModel);
    } else {
      this.groupParts.push(partModel);
    } // add aggregates when adding group by


    for (const selectParts of this.selectParts) {
      if (!selectParts.some(part => part.def.type === 'aggregate')) {
        const aggregate = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
          type: 'aggregate',
          params: ['avg']
        });
        selectParts.splice(1, 0, aggregate);

        if (!selectParts.some(part => part.def.type === 'alias')) {
          const alias = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
            type: 'alias',
            params: [selectParts[0].part.params[0]]
          });
          selectParts.push(alias);
        }
      }
    }

    this.updatePersistedParts();
  }

  removeGroup(part, index) {
    if (part.def.type === 'time') {
      // remove aggregations
      this.selectParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.selectParts, s => {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(s, part => {
          if (part.def.type === 'aggregate' || part.def.type === 'percentile') {
            return false;
          }

          return true;
        });
      });
    }

    this.groupParts.splice(index, 1);
    this.updatePersistedParts();
  }

  handleWherePartEvent(whereParts, part, evt, index) {
    switch (evt.name) {
      case 'get-param-options':
        {
          switch (evt.param.name) {
            case 'left':
              return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));

            case 'right':
              if (['int', 'bigint', 'double', 'datetime'].indexOf(part.datatype) > -1) {
                // don't do value lookups for numerical fields
                return Promise.resolve([]);
              } else {
                return this.datasource.metricFindQuery(this.metaBuilder.buildValueQuery(part.params[0])).then(this.transformToSegments({
                  addTemplateVars: true,
                  templateQuoter: v => {
                    return this.queryModel.quoteLiteral(v);
                  }
                })).catch(this.handleQueryError.bind(this));
              }

            case 'op':
              return Promise.resolve(this.uiSegmentSrv.newOperators(this.metaBuilder.getOperators(part.datatype)));

            default:
              return Promise.resolve([]);
          }
        }

      case 'part-param-changed':
        {
          this.updatePersistedParts();
          this.datasource.metricFindQuery(this.metaBuilder.buildDatatypeQuery(part.params[0])).then(d => {
            if (d.length === 1) {
              part.datatype = d[0].text;
            }
          });
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'action':
        {
          // remove element
          whereParts.splice(index, 1);
          this.updatePersistedParts();
          this.updateRawSqlAndRefresh();
          break;
        }

      case 'get-part-actions':
        {
          return Promise.resolve([{
            text: 'Remove',
            value: 'remove-part'
          }]);
        }
    }
  }

  getWhereOptions() {
    const options = [];

    if (this.queryModel.hasUnixEpochTimecolumn()) {
      options.push(this.uiSegmentSrv.newSegment({
        type: 'macro',
        value: '$__unixEpochFilter'
      }));
    } else {
      options.push(this.uiSegmentSrv.newSegment({
        type: 'macro',
        value: '$__timeFilter'
      }));
    }

    options.push(this.uiSegmentSrv.newSegment({
      type: 'expression',
      value: 'Expression'
    }));
    return Promise.resolve(options);
  }

  addWhereAction(part, index) {
    switch (this.whereAdd.type) {
      case 'macro':
        {
          const partModel = _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
            type: 'macro',
            name: this.whereAdd.value,
            params: []
          });

          if (this.whereParts.length >= 1 && this.whereParts[0].def.type === 'macro') {
            // replace current macro
            this.whereParts[0] = partModel;
          } else {
            this.whereParts.splice(0, 0, partModel);
          }

          break;
        }

      default:
        {
          this.whereParts.push(_sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create({
            type: 'expression',
            params: ['value', '=', 'value']
          }));
        }
    }

    this.updatePersistedParts();
    this.resetPlusButton(this.whereAdd);
    this.updateRawSqlAndRefresh();
  }

  getGroupOptions() {
    return this.datasource.metricFindQuery(this.metaBuilder.buildColumnQuery('group')).then(tags => {
      const options = [];

      if (!this.queryModel.hasTimeGroup()) {
        options.push(this.uiSegmentSrv.newSegment({
          type: 'time',
          value: 'time($__interval,none)'
        }));
      }

      for (const tag of tags) {
        options.push(this.uiSegmentSrv.newSegment({
          type: 'column',
          value: tag.text
        }));
      }

      return options;
    }).catch(this.handleQueryError.bind(this));
  }

  addGroupAction() {
    switch (this.groupAdd.value) {
      default:
        {
          this.addGroup(this.groupAdd.type, this.groupAdd.value);
        }
    }

    this.resetPlusButton(this.groupAdd);
    this.updateRawSqlAndRefresh();
  }

  handleQueryError(err) {
    this.error = err.message || 'Failed to issue metric query';
    return [];
  }

}
MysqlQueryCtrl.$inject = ["$scope", "$injector", "templateSrv", "uiSegmentSrv"];

_defineProperty(MysqlQueryCtrl, "templateUrl", 'partials/query.editor.html');

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/response_parser.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResponseParser)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

class ResponseParser {
  transformMetricFindResponse(raw) {
    const frames = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.toDataQueryResponse)(raw).data;

    if (!frames || !frames.length) {
      return [];
    }

    const frame = frames[0];
    const values = [];
    const textField = frame.fields.find(f => f.name === '__text');
    const valueField = frame.fields.find(f => f.name === '__value');

    if (textField && valueField) {
      for (let i = 0; i < textField.values.length; i++) {
        values.push({
          text: '' + textField.values.get(i),
          value: '' + valueField.values.get(i)
        });
      }
    } else {
      values.push(...frame.fields.flatMap(f => f.values.toArray()).map(v => ({
        text: v
      })));
    }

    return Array.from(new Set(values.map(v => v.text))).map(text => {
      var _values$find;

      return {
        text,
        value: (_values$find = values.find(v => v.text === text)) === null || _values$find === void 0 ? void 0 : _values$find.value
      };
    });
  }

  async transformAnnotationResponse(options, data) {
    const frames = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.toDataQueryResponse)({
      data: data
    }).data;

    if (!frames || !frames.length) {
      return [];
    }

    const frame = frames[0];
    const timeField = frame.fields.find(f => f.name === 'time' || f.name === 'time_sec');

    if (!timeField) {
      throw new Error('Missing mandatory time column (with time column alias) in annotation query');
    }

    if (frame.fields.find(f => f.name === 'title')) {
      throw new Error('The title column for annotations is deprecated, now only a column named text is returned');
    }

    const timeEndField = frame.fields.find(f => f.name === 'timeend');
    const textField = frame.fields.find(f => f.name === 'text');
    const tagsField = frame.fields.find(f => f.name === 'tags');
    const list = [];

    for (let i = 0; i < frame.length; i++) {
      const timeEnd = timeEndField && timeEndField.values.get(i) ? Math.floor(timeEndField.values.get(i)) : undefined;
      list.push({
        annotation: options.annotation,
        time: Math.floor(timeField.values.get(i)),
        timeEnd,
        text: textField && textField.values.get(i) ? textField.values.get(i) : '',
        tags: tagsField && tagsField.values.get(i) ? tagsField.values.get(i).trim().split(/\s*,\s*/) : []
      });
    }

    return list;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/mysql/sql_part.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_angular_components_sql_part_sql_part__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/angular/components/sql_part/sql_part.ts");

const index = [];

function createPart(part) {
  const def = index[part.type];

  if (!def) {
    return null;
  }

  return new app_angular_components_sql_part_sql_part__WEBPACK_IMPORTED_MODULE_0__.SqlPart(part, def);
}

function register(options) {
  index[options.type] = new app_angular_components_sql_part_sql_part__WEBPACK_IMPORTED_MODULE_0__.SqlPartDef(options);
}

register({
  type: 'column',
  style: 'label',
  params: [{
    type: 'column',
    dynamicLookup: true
  }],
  defaultParams: ['value']
});
register({
  type: 'expression',
  style: 'expression',
  label: 'Expr:',
  params: [{
    name: 'left',
    type: 'string',
    dynamicLookup: true
  }, {
    name: 'op',
    type: 'string',
    dynamicLookup: true
  }, {
    name: 'right',
    type: 'string',
    dynamicLookup: true
  }],
  defaultParams: ['value', '=', 'value']
});
register({
  type: 'macro',
  style: 'label',
  label: 'Macro:',
  params: [],
  defaultParams: []
});
register({
  type: 'aggregate',
  style: 'label',
  params: [{
    name: 'name',
    type: 'string',
    options: ['avg', 'count', 'min', 'max', 'sum', 'stddev', 'variance']
  }],
  defaultParams: ['avg']
});
register({
  type: 'alias',
  style: 'label',
  params: [{
    name: 'name',
    type: 'string',
    quote: 'double'
  }],
  defaultParams: ['alias']
});
register({
  type: 'time',
  style: 'function',
  label: 'time',
  params: [{
    name: 'interval',
    type: 'interval',
    options: ['$__interval', '1s', '10s', '1m', '5m', '10m', '15m', '1h']
  }, {
    name: 'fill',
    type: 'string',
    options: ['none', 'NULL', 'previous', '0']
  }],
  defaultParams: ['$__interval', 'none']
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create: createPart
});

/***/ }),

/***/ "./public/app/plugins/sdk.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricsPanelCtrl": () => (/* binding */ MetricsPanelCtrl),
/* harmony export */   "PanelCtrl": () => (/* binding */ PanelCtrl),
/* harmony export */   "QueryCtrl": () => (/* binding */ QueryCtrl),
/* harmony export */   "loadPluginCss": () => (/* reexport safe */ _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.loadPluginCss)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_angular_panel_metrics_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/angular/panel/metrics_panel_ctrl.ts");
/* harmony import */ var app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/angular/panel/panel_ctrl.ts");
/* harmony import */ var app_angular_panel_query_ctrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/angular/panel/query_ctrl.ts");





const PanelCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_panel_ctrl__WEBPACK_IMPORTED_MODULE_3__.PanelCtrl);
const MetricsPanelCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_metrics_panel_ctrl__WEBPACK_IMPORTED_MODULE_2__.MetricsPanelCtrl);
const QueryCtrl = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.makeClassES5Compatible)(app_angular_panel_query_ctrl__WEBPACK_IMPORTED_MODULE_4__.QueryCtrl);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBLGlFQUFlO0FBQ2JxVCxFQUFBQSxNQUFNLEVBQUU2RjtBQURLLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1sWSxTQUFTLEdBQUdzWSxxRUFBc0IsQ0FBQ0csbUVBQUQsQ0FBeEM7QUFDQSxNQUFNdlksZ0JBQWdCLEdBQUdvWSxxRUFBc0IsQ0FBQ0Usa0ZBQUQsQ0FBL0M7QUFDQSxNQUFNM1EsU0FBUyxHQUFHeVEscUVBQXNCLENBQUNJLG1FQUFELENBQXhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9Bbmd1bGFyTG9jYXRpb25XcmFwcGVyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvY29tcG9uZW50cy9zcWxfcGFydC9zcWxfcGFydC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL3BhbmVsL21ldHJpY3NfcGFuZWxfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL3BhbmVsL3BhbmVsX2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9wYW5lbC9xdWVyeV9jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3V0aWxzL3Bhc3N3b3JkSGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL215c3FsL2RhdGFzb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL215c3FsL21ldGFfcXVlcnkudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL215c3FsL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbXlzcWwvbXlzcWxfcXVlcnlfbW9kZWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL215c3FsL3F1ZXJ5X2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL215c3FsL3Jlc3BvbnNlX3BhcnNlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbXlzcWwvc3FsX3BhcnQudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9zZGsudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVwcmVjYXRpb25XYXJuaW5nLCB1cmxVdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2NhdGlvblNlYXJjaFRvT2JqZWN0LCBsb2NhdGlvblNlcnZpY2UsIG5hdmlnYXRpb25Mb2dnZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvYWU4ZTkwM2VkZjg4YTgzZmVkZDExNmFlMDJjMDYyOGJmNzJiMTUwYy9zcmMvbmcvbG9jYXRpb24uanMjTDVcbmNvbnN0IERFRkFVTFRfUE9SVFM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7IGh0dHA6IDgwLCBodHRwczogNDQzLCBmdHA6IDIxIH07XG5cbmV4cG9ydCBjbGFzcyBBbmd1bGFyTG9jYXRpb25XcmFwcGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hYnNVcmwgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLmFic1VybCk7XG4gICAgdGhpcy5oYXNoID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5oYXNoKTtcbiAgICB0aGlzLmhvc3QgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLmhvc3QpO1xuICAgIHRoaXMucGF0aCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMucGF0aCk7XG4gICAgdGhpcy5wb3J0ID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5wb3J0LCAnd2luZG93LmxvY2F0aW9uJyk7XG4gICAgdGhpcy5wcm90b2NvbCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMucHJvdG9jb2wsICd3aW5kb3cubG9jYXRpb24nKTtcbiAgICB0aGlzLnJlcGxhY2UgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnJlcGxhY2UpO1xuICAgIHRoaXMuc2VhcmNoID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5zZWFyY2gpO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnVybCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMudXJsKTtcbiAgfVxuXG4gIHdyYXBJbkRlcHJlY2F0aW9uV2FybmluZyhmbjogRnVuY3Rpb24sIHJlcGxhY2VtZW50Pzogc3RyaW5nKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgICBkZXByZWNhdGlvbldhcm5pbmcoJyRsb2NhdGlvbicsIGZuLm5hbWUsIHJlcGxhY2VtZW50IHx8ICdsb2NhdGlvblNlcnZpY2UnKTtcbiAgICAgIHJldHVybiBmbi5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBhYnNVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3RoaXMudXJsKCl9YDtcbiAgfVxuXG4gIGhhc2gobmV3SGFzaD86IHN0cmluZyB8IG51bGwpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogaGFzaCcpO1xuXG4gICAgaWYgKCFuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gbG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCkuaGFzaC5zbGljZSgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICB9XG5cbiAgaG9zdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5ob3N0bmFtZTtcbiAgfVxuXG4gIHBhdGgocGF0aG5hbWU/OiBhbnkpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogcGF0aCcpO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKTtcblxuICAgIGlmIChwYXRobmFtZSAhPT0gdW5kZWZpbmVkICYmIHBhdGhuYW1lICE9PSBudWxsKSB7XG4gICAgICBsZXQgcGFyc2VkUGF0aCA9IFN0cmluZyhwYXRobmFtZSk7XG4gICAgICBwYXJzZWRQYXRoID0gcGFyc2VkUGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXJzZWRQYXRoIDogYC8ke3BhcnNlZFBhdGh9YDtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3BhcnNlZFBhdGh9YCk7XG5cbiAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6IHVybC5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoOiB1cmwuc2VhcmNoLmxlbmd0aCA+IDAgPyB1cmwuc2VhcmNoIDogbG9jYXRpb24uc2VhcmNoLFxuICAgICAgICBoYXNoOiB1cmwuaGFzaC5sZW5ndGggPiAwID8gdXJsLmhhc2ggOiBsb2NhdGlvbi5oYXNoLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT09IG51bGwpIHtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKCcvJyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucGF0aG5hbWU7XG4gIH1cblxuICBwb3J0KCk6IG51bWJlciB8IG51bGwge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIHJldHVybiBwYXJzZUludCh1cmwucG9ydCwgMTApIHx8IERFRkFVTFRfUE9SVFNbdXJsLnByb3RvY29sXSB8fCBudWxsO1xuICB9XG5cbiAgcHJvdG9jb2woKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikucHJvdG9jb2wuc2xpY2UoMCwgLTEpO1xuICB9XG5cbiAgcmVwbGFjZSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXIgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHNlYXJjaChzZWFyY2g/OiBhbnksIHBhcmFtVmFsdWU/OiBhbnkpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogc2VhcmNoJyk7XG4gICAgaWYgKCFzZWFyY2gpIHtcbiAgICAgIHJldHVybiBsb2NhdGlvblNlcnZpY2UuZ2V0U2VhcmNoT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaCAmJiBhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnBhcnRpYWwoe1xuICAgICAgICBbc2VhcmNoXTogcGFyYW1WYWx1ZSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoKSB7XG4gICAgICBsZXQgbmV3UXVlcnk7XG5cbiAgICAgIGlmICh0eXBlb2Ygc2VhcmNoID09PSAnb2JqZWN0Jykge1xuICAgICAgICBuZXdRdWVyeSA9IHsgLi4uc2VhcmNoIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdRdWVyeSA9IGxvY2F0aW9uU2VhcmNoVG9PYmplY3Qoc2VhcmNoKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobmV3UXVlcnkpKSB7XG4gICAgICAgIC8vIHJlbW92aW5nIHBhcmFtcyB3aXRoIG51bGwgfCB1bmRlZmluZWRcbiAgICAgICAgaWYgKG5ld1F1ZXJ5W2tleV0gPT09IG51bGwgfHwgbmV3UXVlcnlba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGVsZXRlIG5ld1F1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgdXBkYXRlZFVybCA9IHVybFV0aWwucmVuZGVyVXJsKGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLnBhdGhuYW1lLCBuZXdRdWVyeSk7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh1cGRhdGVkVXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0YXRlKHN0YXRlPzogYW55KSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IHN0YXRlJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICB1cmwobmV3VXJsPzogYW55KSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IHVybCcpO1xuXG4gICAgaWYgKG5ld1VybCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAobmV3VXJsLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh7IC4uLmxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLCBoYXNoOiBuZXdVcmwgfSk7XG4gICAgICB9IGVsc2UgaWYgKG5ld1VybC5zdGFydHNXaXRoKCc/JykpIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goeyAuLi5sb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKSwgc2VhcmNoOiBuZXdVcmwgfSk7XG4gICAgICB9IGVsc2UgaWYgKG5ld1VybC50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKCcvJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhdGlvblNlcnZpY2UucHVzaChuZXdVcmwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbG9jYXRpb25TZXJ2aWNlO1xuICAgIH1cblxuICAgIGNvbnN0IGxvY2F0aW9uID0gbG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCk7XG4gICAgcmV0dXJuIGAke2xvY2F0aW9uLnBhdGhuYW1lfSR7bG9jYXRpb24uc2VhcmNofSR7bG9jYXRpb24uaGFzaH1gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjbG9uZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBTcWxQYXJ0RGVmIHtcbiAgdHlwZTogc3RyaW5nO1xuICBzdHlsZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBwYXJhbXM6IGFueVtdO1xuICBkZWZhdWx0UGFyYW1zOiBhbnlbXTtcbiAgd3JhcE9wZW46IHN0cmluZztcbiAgd3JhcENsb3NlOiBzdHJpbmc7XG4gIHNlcGFyYXRvcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICBpZiAob3B0aW9ucy5sYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbCA9IG9wdGlvbnMubGFiZWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGFiZWwgPSB0aGlzLnR5cGVbMF0udG9VcHBlckNhc2UoKSArIHRoaXMudHlwZS5zdWJzdHJpbmcoMSkgKyAnOic7XG4gICAgfVxuICAgIHRoaXMuc3R5bGUgPSBvcHRpb25zLnN0eWxlO1xuICAgIGlmICh0aGlzLnN0eWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLndyYXBPcGVuID0gJygnO1xuICAgICAgdGhpcy53cmFwQ2xvc2UgPSAnKSc7XG4gICAgICB0aGlzLnNlcGFyYXRvciA9ICcsICc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud3JhcE9wZW4gPSAnICc7XG4gICAgICB0aGlzLndyYXBDbG9zZSA9ICcgJztcbiAgICAgIHRoaXMuc2VwYXJhdG9yID0gJyAnO1xuICAgIH1cbiAgICB0aGlzLnBhcmFtcyA9IG9wdGlvbnMucGFyYW1zO1xuICAgIHRoaXMuZGVmYXVsdFBhcmFtcyA9IG9wdGlvbnMuZGVmYXVsdFBhcmFtcztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3FsUGFydCB7XG4gIHBhcnQ6IGFueTtcbiAgZGVmOiBTcWxQYXJ0RGVmO1xuICBwYXJhbXM6IGFueVtdO1xuICBsYWJlbDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRhdGF0eXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocGFydDogYW55LCBkZWY6IGFueSkge1xuICAgIHRoaXMucGFydCA9IHBhcnQ7XG4gICAgdGhpcy5kZWYgPSBkZWY7XG4gICAgaWYgKCF0aGlzLmRlZikge1xuICAgICAgdGhyb3cgeyBtZXNzYWdlOiAnQ291bGQgbm90IGZpbmQgc3FsIHBhcnQgJyArIHBhcnQudHlwZSB9O1xuICAgIH1cblxuICAgIHRoaXMuZGF0YXR5cGUgPSBwYXJ0LmRhdGF0eXBlO1xuXG4gICAgaWYgKHBhcnQubmFtZSkge1xuICAgICAgdGhpcy5uYW1lID0gcGFydC5uYW1lO1xuICAgICAgdGhpcy5sYWJlbCA9IGRlZi5sYWJlbCArICcgJyArIHBhcnQubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uYW1lID0gJyc7XG4gICAgICB0aGlzLmxhYmVsID0gZGVmLmxhYmVsO1xuICAgIH1cblxuICAgIHBhcnQucGFyYW1zID0gcGFydC5wYXJhbXMgfHwgY2xvbmUodGhpcy5kZWYuZGVmYXVsdFBhcmFtcyk7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJ0LnBhcmFtcztcbiAgfVxuXG4gIHVwZGF0ZVBhcmFtKHN0clZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAvLyBoYW5kbGUgb3B0aW9uYWwgcGFyYW1ldGVyc1xuICAgIGlmIChzdHJWYWx1ZSA9PT0gJycgJiYgdGhpcy5kZWYucGFyYW1zW2luZGV4XS5vcHRpb25hbCkge1xuICAgICAgdGhpcy5wYXJhbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXJhbXNbaW5kZXhdID0gc3RyVmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJ0LnBhcmFtcyA9IHRoaXMucGFyYW1zO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIERhdGFGcmFtZSxcbiAgRGF0YVF1ZXJ5UmVzcG9uc2UsXG4gIERhdGFTb3VyY2VBcGksXG4gIExlZ2FjeVJlc3BvbnNlRGF0YSxcbiAgTG9hZGluZ1N0YXRlLFxuICBQYW5lbERhdGEsXG4gIFBhbmVsRXZlbnRzLFxuICBUaW1lUmFuZ2UsXG4gIHRvRGF0YUZyYW1lRFRPLFxuICB0b0xlZ2FjeVJlc3BvbnNlRGF0YSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBQYW5lbEN0cmwgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsJztcbmltcG9ydCB7IENvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBQYW5lbE1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZSc7XG5pbXBvcnQgeyBhcHBseVBhbmVsVGltZU92ZXJyaWRlcyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvdXRpbHMvcGFuZWwnO1xuXG5pbXBvcnQgeyBQYW5lbFF1ZXJ5UnVubmVyIH0gZnJvbSAnLi4vLi4vZmVhdHVyZXMvcXVlcnkvc3RhdGUvUGFuZWxRdWVyeVJ1bm5lcic7XG5cbmNsYXNzIE1ldHJpY3NQYW5lbEN0cmwgZXh0ZW5kcyBQYW5lbEN0cmwge1xuICBkZWNsYXJlIGRhdGFzb3VyY2U6IERhdGFTb3VyY2VBcGk7XG4gIGRlY2xhcmUgcmFuZ2U6IFRpbWVSYW5nZTtcblxuICBjb250ZXh0U3J2OiBDb250ZXh0U3J2O1xuICBkYXRhc291cmNlU3J2OiBhbnk7XG4gIHRpbWVTcnY6IGFueTtcbiAgdGVtcGxhdGVTcnY6IGFueTtcbiAgaW50ZXJ2YWw6IGFueTtcbiAgaW50ZXJ2YWxNczogYW55O1xuICByZXNvbHV0aW9uOiBhbnk7XG4gIHRpbWVJbmZvPzogc3RyaW5nO1xuICBza2lwRGF0YU9uSW5pdCA9IGZhbHNlO1xuICBkYXRhTGlzdDogTGVnYWN5UmVzcG9uc2VEYXRhW10gPSBbXTtcbiAgcXVlcnlTdWJzY3JpcHRpb24/OiBVbnN1YnNjcmliYWJsZSB8IG51bGw7XG4gIHVzZURhdGFGcmFtZXMgPSBmYWxzZTtcbiAgcGFuZWxEYXRhPzogUGFuZWxEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55LCAkaW5qZWN0b3I6IGFueSkge1xuICAgIHN1cGVyKCRzY29wZSwgJGluamVjdG9yKTtcblxuICAgIHRoaXMuY29udGV4dFNydiA9ICRpbmplY3Rvci5nZXQoJ2NvbnRleHRTcnYnKTtcbiAgICB0aGlzLmRhdGFzb3VyY2VTcnYgPSAkaW5qZWN0b3IuZ2V0KCdkYXRhc291cmNlU3J2Jyk7XG4gICAgdGhpcy50aW1lU3J2ID0gJGluamVjdG9yLmdldCgndGltZVNydicpO1xuICAgIHRoaXMudGVtcGxhdGVTcnYgPSAkaW5qZWN0b3IuZ2V0KCd0ZW1wbGF0ZVNydicpO1xuICAgIHRoaXMucGFuZWwuZGF0YXNvdXJjZSA9IHRoaXMucGFuZWwuZGF0YXNvdXJjZSB8fCBudWxsO1xuXG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMucmVmcmVzaCwgdGhpcy5vbk1ldHJpY3NQYW5lbFJlZnJlc2guYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMucGFuZWxUZWFyZG93biwgdGhpcy5vblBhbmVsVGVhckRvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMuY29tcG9uZW50RGlkTW91bnQsIHRoaXMub25NZXRyaWNzUGFuZWxNb3VudGVkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1ldHJpY3NQYW5lbE1vdW50ZWQoKSB7XG4gICAgY29uc3QgcXVlcnlSdW5uZXIgPSB0aGlzLnBhbmVsLmdldFF1ZXJ5UnVubmVyKCkgYXMgUGFuZWxRdWVyeVJ1bm5lcjtcbiAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uID0gcXVlcnlSdW5uZXJcbiAgICAgIC5nZXREYXRhKHsgd2l0aFRyYW5zZm9ybXM6IHRydWUsIHdpdGhGaWVsZENvbmZpZzogdHJ1ZSB9KVxuICAgICAgLnN1YnNjcmliZSh0aGlzLnBhbmVsRGF0YU9ic2VydmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgb25QYW5lbFRlYXJEb3duKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uTWV0cmljc1BhbmVsUmVmcmVzaCgpIHtcbiAgICAvLyBpZ25vcmUgZmV0Y2hpbmcgZGF0YSBpZiBhbm90aGVyIHBhbmVsIGlzIGluIGZ1bGxzY3JlZW5cbiAgICBpZiAodGhpcy5vdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgd2UgaGF2ZSBzbmFwc2hvdCBkYXRhIHVzZSB0aGF0XG4gICAgaWYgKHRoaXMucGFuZWwuc25hcHNob3REYXRhKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWVSYW5nZSgpO1xuICAgICAgbGV0IGRhdGEgPSB0aGlzLnBhbmVsLnNuYXBzaG90RGF0YTtcbiAgICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgIGlmICghaXNBcnJheShkYXRhKSkge1xuICAgICAgICBkYXRhID0gZGF0YS5kYXRhO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBhbmVsRGF0YSA9IHtcbiAgICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgICAgICBzZXJpZXM6IGRhdGEsXG4gICAgICAgIHRpbWVSYW5nZTogdGhpcy5yYW5nZSxcbiAgICAgIH07XG5cbiAgICAgIC8vIERlZmVyIHBhbmVsIHJlbmRlcmluZyB0aWxsIHRoZSBuZXh0IGRpZ2VzdCBjeWNsZS5cbiAgICAgIC8vIEZvciBzb21lIHJlYXNvbiBzbmFwc2hvdCBwYW5lbHMgZG9uJ3QgaW5pdCBhdCB0aGlzIHRpbWUsIHNvIHRoaXMgaGVscHMgdG8gYXZvaWQgcmVuZGVyaW5nIGlzc3Vlcy5cbiAgICAgIHJldHVybiB0aGlzLiR0aW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5kYXRhU25hcHNob3RMb2FkLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNsZWFyIGxvYWRpbmcvZXJyb3Igc3RhdGVcbiAgICBkZWxldGUgdGhpcy5lcnJvcjtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgLy8gbG9hZCBkYXRhc291cmNlIHNlcnZpY2VcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlU3J2XG4gICAgICAuZ2V0KHRoaXMucGFuZWwuZGF0YXNvdXJjZSwgdGhpcy5wYW5lbC5zY29wZWRWYXJzKVxuICAgICAgLnRoZW4odGhpcy5pc3N1ZVF1ZXJpZXMuYmluZCh0aGlzKSlcbiAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb2Nlc3NEYXRhRXJyb3IoZXJyOiBhbnkpIHtcbiAgICAvLyBpZiBjYW5jZWxlZCAga2VlcCBsb2FkaW5nIHNldCB0byB0cnVlXG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQYW5lbCByZXF1ZXN0IGNhbmNlbGxlZCcsIGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvciA9IGVyci5tZXNzYWdlIHx8ICdSZXF1ZXN0IEVycm9yJztcblxuICAgIGlmIChlcnIuZGF0YSkge1xuICAgICAgaWYgKGVyci5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVyci5kYXRhLm1lc3NhZ2U7XG4gICAgICB9IGVsc2UgaWYgKGVyci5kYXRhLmVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnIuZGF0YS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFuZ3VsYXJEaXJ0eUNoZWNrKCk7XG4gIH1cblxuICBhbmd1bGFyRGlydHlDaGVjaygpIHtcbiAgICBpZiAoIXRoaXMuJHNjb3BlLiRyb290LiQkcGhhc2UpIHtcbiAgICAgIHRoaXMuJHNjb3BlLiRkaWdlc3QoKTtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGVzIHRoZSByZXNwb25zZSB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIHN0cmVhbVxuICBwYW5lbERhdGFPYnNlcnZlciA9IHtcbiAgICBuZXh0OiAoZGF0YTogUGFuZWxEYXRhKSA9PiB7XG4gICAgICB0aGlzLnBhbmVsRGF0YSA9IGRhdGE7XG5cbiAgICAgIGlmIChkYXRhLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuRXJyb3IpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWdub3JlIGRhdGEgaW4gbG9hZGluZyBzdGF0ZVxuICAgICAgaWYgKGRhdGEuc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Mb2FkaW5nKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5ndWxhckRpcnR5Q2hlY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5yZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IHsgdGltZUluZm8gfSA9IGRhdGEucmVxdWVzdDtcbiAgICAgICAgaWYgKHRpbWVJbmZvKSB7XG4gICAgICAgICAgdGhpcy50aW1lSW5mbyA9IHRpbWVJbmZvO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnRpbWVSYW5nZSkge1xuICAgICAgICB0aGlzLnJhbmdlID0gZGF0YS50aW1lUmFuZ2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnVzZURhdGFGcmFtZXMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVEYXRhRnJhbWVzKGRhdGEuc2VyaWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1ha2UgdGhlIHJlc3VsdHMgbG9vayBhcyBpZiB0aGV5IGNhbWUgZGlyZWN0bHkgZnJvbSBhIDw2LjIgZGF0YXNvdXJjZSByZXF1ZXN0XG4gICAgICAgIGNvbnN0IGxlZ2FjeSA9IGRhdGEuc2VyaWVzLm1hcCgodikgPT4gdG9MZWdhY3lSZXNwb25zZURhdGEodikpO1xuICAgICAgICB0aGlzLmhhbmRsZVF1ZXJ5UmVzdWx0KHsgZGF0YTogbGVnYWN5IH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFuZ3VsYXJEaXJ0eUNoZWNrKCk7XG4gICAgfSxcbiAgfTtcblxuICB1cGRhdGVUaW1lUmFuZ2UoZGF0YXNvdXJjZT86IERhdGFTb3VyY2VBcGkpIHtcbiAgICB0aGlzLmRhdGFzb3VyY2UgPSBkYXRhc291cmNlIHx8IHRoaXMuZGF0YXNvdXJjZTtcbiAgICB0aGlzLnJhbmdlID0gdGhpcy50aW1lU3J2LnRpbWVSYW5nZSgpO1xuXG4gICAgY29uc3QgbmV3VGltZURhdGEgPSBhcHBseVBhbmVsVGltZU92ZXJyaWRlcyh0aGlzLnBhbmVsLCB0aGlzLnJhbmdlKTtcbiAgICB0aGlzLnRpbWVJbmZvID0gbmV3VGltZURhdGEudGltZUluZm87XG4gICAgdGhpcy5yYW5nZSA9IG5ld1RpbWVEYXRhLnRpbWVSYW5nZTtcbiAgfVxuXG4gIGlzc3VlUXVlcmllcyhkYXRhc291cmNlOiBEYXRhU291cmNlQXBpKSB7XG4gICAgdGhpcy51cGRhdGVUaW1lUmFuZ2UoZGF0YXNvdXJjZSk7XG5cbiAgICB0aGlzLmRhdGFzb3VyY2UgPSBkYXRhc291cmNlO1xuXG4gICAgY29uc3QgcGFuZWwgPSB0aGlzLnBhbmVsIGFzIFBhbmVsTW9kZWw7XG4gICAgY29uc3QgcXVlcnlSdW5uZXIgPSBwYW5lbC5nZXRRdWVyeVJ1bm5lcigpO1xuXG4gICAgcmV0dXJuIHF1ZXJ5UnVubmVyLnJ1bih7XG4gICAgICBkYXRhc291cmNlOiBwYW5lbC5kYXRhc291cmNlLFxuICAgICAgcXVlcmllczogcGFuZWwudGFyZ2V0cyxcbiAgICAgIHBhbmVsSWQ6IHBhbmVsLmlkLFxuICAgICAgZGFzaGJvYXJkSWQ6IHRoaXMuZGFzaGJvYXJkLmlkLFxuICAgICAgdGltZXpvbmU6IHRoaXMuZGFzaGJvYXJkLmdldFRpbWV6b25lKCksXG4gICAgICB0aW1lSW5mbzogdGhpcy50aW1lSW5mbyxcbiAgICAgIHRpbWVSYW5nZTogdGhpcy5yYW5nZSxcbiAgICAgIG1heERhdGFQb2ludHM6IHBhbmVsLm1heERhdGFQb2ludHMgfHwgdGhpcy53aWR0aCxcbiAgICAgIG1pbkludGVydmFsOiBwYW5lbC5pbnRlcnZhbCxcbiAgICAgIHNjb3BlZFZhcnM6IHBhbmVsLnNjb3BlZFZhcnMsXG4gICAgICBjYWNoZVRpbWVvdXQ6IHBhbmVsLmNhY2hlVGltZW91dCxcbiAgICAgIHRyYW5zZm9ybWF0aW9uczogcGFuZWwudHJhbnNmb3JtYXRpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRGF0YUZyYW1lcyhkYXRhOiBEYXRhRnJhbWVbXSkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZGFzaGJvYXJkICYmIHRoaXMuZGFzaGJvYXJkLnNuYXBzaG90KSB7XG4gICAgICB0aGlzLnBhbmVsLnNuYXBzaG90RGF0YSA9IGRhdGEubWFwKChmcmFtZSkgPT4gdG9EYXRhRnJhbWVEVE8oZnJhbWUpKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5kYXRhRnJhbWVzUmVjZWl2ZWQsIGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUXVlcnlSZXN1bHQocmVzdWx0OiBEYXRhUXVlcnlSZXNwb25zZSkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZGFzaGJvYXJkLnNuYXBzaG90KSB7XG4gICAgICB0aGlzLnBhbmVsLnNuYXBzaG90RGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgIH1cblxuICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGEgc291cmNlIHF1ZXJ5IHJlc3VsdCBpbnZhbGlkLCBtaXNzaW5nIGRhdGEgZmllbGQ6JywgcmVzdWx0KTtcbiAgICAgIHJlc3VsdCA9IHsgZGF0YTogW10gfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5kYXRhUmVjZWl2ZWQsIHJlc3VsdC5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBNZXRyaWNzUGFuZWxDdHJsIH07XG4iLCJpbXBvcnQgeyBhdXRvIH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7XG4gIEFwcEV2ZW50LFxuICBQYW5lbEV2ZW50cyxcbiAgUGFuZWxQbHVnaW5NZXRhLFxuICBBbmd1bGFyUGFuZWxNZW51SXRlbSxcbiAgRXZlbnRCdXNFeHRlbmRlZCxcbiAgRXZlbnRCdXNTcnYsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQW5ndWxhckxvY2F0aW9uV3JhcHBlciB9IGZyb20gJ2FwcC9hbmd1bGFyL0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgcHJvZmlsZXIgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgUGFuZWxDdHJsIHtcbiAgcGFuZWw6IGFueTtcbiAgZXJyb3I6IGFueTtcbiAgZGVjbGFyZSBkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsO1xuICBwbHVnaW5OYW1lID0gJyc7XG4gIHBsdWdpbklkID0gJyc7XG4gIGVkaXRvclRhYnM6IGFueTtcbiAgJHNjb3BlOiBhbnk7XG4gICRpbmplY3RvcjogYXV0by5JSW5qZWN0b3JTZXJ2aWNlO1xuICAkdGltZW91dDogYW55O1xuICBlZGl0TW9kZUluaXRpYXRlZCA9IGZhbHNlO1xuICBkZWNsYXJlIGhlaWdodDogbnVtYmVyO1xuICBkZWNsYXJlIHdpZHRoOiBudW1iZXI7XG4gIGNvbnRhaW5lckhlaWdodDogYW55O1xuICBldmVudHM6IEV2ZW50QnVzRXh0ZW5kZWQ7XG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgdGltaW5nOiBhbnk7XG4gICRsb2NhdGlvbjogQW5ndWxhckxvY2F0aW9uV3JhcHBlcjtcblxuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSwgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2UpIHtcbiAgICB0aGlzLnBhbmVsID0gdGhpcy5wYW5lbCA/PyAkc2NvcGUuJHBhcmVudC5wYW5lbDtcbiAgICB0aGlzLmRhc2hib2FyZCA9IHRoaXMuZGFzaGJvYXJkID8/ICRzY29wZS4kcGFyZW50LmRhc2hib2FyZDtcbiAgICB0aGlzLiRpbmplY3RvciA9ICRpbmplY3RvcjtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLiR0aW1lb3V0ID0gJGluamVjdG9yLmdldCgnJHRpbWVvdXQnKTtcbiAgICB0aGlzLmVkaXRvclRhYnMgPSBbXTtcbiAgICB0aGlzLiRsb2NhdGlvbiA9IG5ldyBBbmd1bGFyTG9jYXRpb25XcmFwcGVyKCk7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnRCdXNTcnYoKTtcbiAgICB0aGlzLnRpbWluZyA9IHt9OyAvLyBub3QgdXNlZCBidXQgaGVyZSB0byBub3QgYnJlYWsgcGx1Z2luc1xuXG4gICAgY29uc3QgcGx1Z2luID0gY29uZmlnLnBhbmVsc1t0aGlzLnBhbmVsLnR5cGVdO1xuICAgIGlmIChwbHVnaW4pIHtcbiAgICAgIHRoaXMucGx1Z2luSWQgPSBwbHVnaW4uaWQ7XG4gICAgICB0aGlzLnBsdWdpbk5hbWUgPSBwbHVnaW4ubmFtZTtcbiAgICB9XG5cbiAgICAkc2NvcGUuJG9uKFBhbmVsRXZlbnRzLmNvbXBvbmVudERpZE1vdW50Lm5hbWUsICgpID0+IHRoaXMucGFuZWxEaWRNb3VudCgpKTtcbiAgfVxuXG4gIHBhbmVsRGlkTW91bnQoKSB7XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5jb21wb25lbnREaWRNb3VudCk7XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5pbml0aWFsaXplZCk7XG4gICAgdGhpcy5kYXNoYm9hcmQucGFuZWxJbml0aWFsaXplZCh0aGlzLnBhbmVsKTtcbiAgfVxuXG4gIHJlbmRlcmluZ0NvbXBsZXRlZCgpIHtcbiAgICBwcm9maWxlci5yZW5kZXJpbmdDb21wbGV0ZWQoKTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5wYW5lbC5yZWZyZXNoKCk7XG4gIH1cblxuICBwdWJsaXNoQXBwRXZlbnQ8VD4oZXZlbnQ6IEFwcEV2ZW50PFQ+LCBwYXlsb2FkPzogVCkge1xuICAgIHRoaXMuJHNjb3BlLiRyb290LmFwcEV2ZW50KGV2ZW50LCBwYXlsb2FkKTtcbiAgfVxuXG4gIGluaXRFZGl0TW9kZSgpIHtcbiAgICBpZiAoIXRoaXMuZWRpdE1vZGVJbml0aWF0ZWQpIHtcbiAgICAgIHRoaXMuZWRpdE1vZGVJbml0aWF0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5lZGl0TW9kZUluaXRpYWxpemVkKTtcbiAgICB9XG4gIH1cblxuICBhZGRFZGl0b3JUYWIodGl0bGU6IHN0cmluZywgZGlyZWN0aXZlRm46IGFueSwgaW5kZXg/OiBudW1iZXIsIGljb24/OiBhbnkpIHtcbiAgICBjb25zdCBlZGl0b3JUYWIgPSB7IHRpdGxlLCBkaXJlY3RpdmVGbiwgaWNvbiB9O1xuXG4gICAgaWYgKGlzU3RyaW5nKGRpcmVjdGl2ZUZuKSkge1xuICAgICAgZWRpdG9yVGFiLmRpcmVjdGl2ZUZuID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB0ZW1wbGF0ZVVybDogZGlyZWN0aXZlRm4gfTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGluZGV4KSB7XG4gICAgICB0aGlzLmVkaXRvclRhYnMuc3BsaWNlKGluZGV4LCAwLCBlZGl0b3JUYWIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVkaXRvclRhYnMucHVzaChlZGl0b3JUYWIpO1xuICAgIH1cbiAgfVxuXG4gIGdldEV4dGVuZGVkTWVudSgpIHtcbiAgICBjb25zdCBtZW51OiBBbmd1bGFyUGFuZWxNZW51SXRlbVtdID0gW107XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5pbml0UGFuZWxBY3Rpb25zLCBtZW51KTtcbiAgICByZXR1cm4gbWVudTtcbiAgfVxuXG4gIC8vIE92ZXJyaWRlIGluIHN1Yi1jbGFzcyB0byBhZGQgaXRlbXMgYmVmb3JlIGV4dGVuZGVkIG1lbnVcbiAgYXN5bmMgZ2V0QWRkaXRpb25hbE1lbnVJdGVtcygpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgb3RoZXJQYW5lbEluRnVsbHNjcmVlbk1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGFzaGJvYXJkLm90aGVyUGFuZWxJbkZ1bGxzY3JlZW4odGhpcy5wYW5lbCk7XG4gIH1cblxuICByZW5kZXIocGF5bG9hZD86IGFueSkge1xuICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMucmVuZGVyLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8vIG92ZXJyaWRlbiBmcm9tIHJlYWN0XG4gIG9uUGx1Z2luVHlwZUNoYW5nZSA9IChwbHVnaW46IFBhbmVsUGx1Z2luTWV0YSkgPT4ge307XG59XG4iLCJpbXBvcnQgeyBhdXRvIH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBpbmRleE9mIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNsYXNzIFF1ZXJ5Q3RybDxUID0gYW55PiB7XG4gIHRhcmdldCE6IFQ7XG4gIGRhdGFzb3VyY2UhOiBhbnk7XG4gIHBhbmVsQ3RybCE6IGFueTtcbiAgcGFuZWw6IGFueTtcbiAgaGFzUmF3TW9kZSE6IGJvb2xlYW47XG4gIGVycm9yPzogc3RyaW5nIHwgbnVsbDtcbiAgaXNMYXN0UXVlcnk6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljICRzY29wZTogYW55LCBwdWJsaWMgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2UpIHtcbiAgICB0aGlzLnBhbmVsQ3RybCA9IHRoaXMucGFuZWxDdHJsID8/ICRzY29wZS5jdHJsLnBhbmVsQ3RybDtcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMudGFyZ2V0ID8/ICRzY29wZS5jdHJsLnRhcmdldDtcbiAgICB0aGlzLmRhdGFzb3VyY2UgPSB0aGlzLmRhdGFzb3VyY2UgPz8gJHNjb3BlLmN0cmwuZGF0YXNvdXJjZTtcbiAgICB0aGlzLnBhbmVsID0gdGhpcy5wYW5lbEN0cmw/LnBhbmVsID8/ICRzY29wZS5jdHJsLnBhbmVsQ3RybC5wYW5lbDtcbiAgICB0aGlzLmlzTGFzdFF1ZXJ5ID0gaW5kZXhPZih0aGlzLnBhbmVsLnRhcmdldHMsIHRoaXMudGFyZ2V0KSA9PT0gdGhpcy5wYW5lbC50YXJnZXRzLmxlbmd0aCAtIDE7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMucGFuZWxDdHJsLnJlZnJlc2goKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBTZXQgb2YgaGFuZGxlcnMgZm9yIHNlY3VyZSBwYXNzd29yZCBmaWVsZCBpbiBBbmd1bGFyIGNvbXBvbmVudHMuIFRoZXkgaGFuZGxlIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aFxuICogcGFzc3dvcmRzIHN0b3JlZCBpbiBwbGFpbiB0ZXh0IGZpZWxkcy5cbiAqL1xuXG5pbXBvcnQgeyBTeW50aGV0aWNFdmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGVudW0gUGFzc3dvcmRGaWVsZEVudW0ge1xuICBQYXNzd29yZCA9ICdwYXNzd29yZCcsXG4gIEJhc2ljQXV0aFBhc3N3b3JkID0gJ2Jhc2ljQXV0aFBhc3N3b3JkJyxcbn1cblxuLyoqXG4gKiBCYXNpYyBzaGFwZSBmb3Igc2V0dGluZ3MgY29udHJvbGxlcnMgaW4gYXQgdGhlIG1vbWVudCBtb3N0bHkgYW5ndWxhciBkYXRhIHNvdXJjZSBwbHVnaW5zLlxuICovXG5leHBvcnQgdHlwZSBDdHJsID0ge1xuICBjdXJyZW50OiB7XG4gICAgc2VjdXJlSnNvbkZpZWxkczoge1xuICAgICAgW2tleTogc3RyaW5nXTogYm9vbGVhbjtcbiAgICB9O1xuICAgIHNlY3VyZUpzb25EYXRhPzoge1xuICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH07XG4gICAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gICAgYmFzaWNBdXRoUGFzc3dvcmQ/OiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVzZXRIYW5kbGVyID1cbiAgKGN0cmw6IEN0cmwsIGZpZWxkOiBQYXNzd29yZEZpZWxkRW51bSkgPT4gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gUmVzZXQgYWxzbyBub3JtYWwgcGxhaW4gdGV4dCBwYXNzd29yZCB0byByZW1vdmUgaXQgYW5kIG9ubHkgc2F2ZSBpdCBpbiBzZWN1cmVKc29uRGF0YS5cbiAgICBjdHJsLmN1cnJlbnRbZmllbGRdID0gdW5kZWZpbmVkO1xuICAgIGN0cmwuY3VycmVudC5zZWN1cmVKc29uRmllbGRzW2ZpZWxkXSA9IGZhbHNlO1xuICAgIGN0cmwuY3VycmVudC5zZWN1cmVKc29uRGF0YSA9IGN0cmwuY3VycmVudC5zZWN1cmVKc29uRGF0YSB8fCB7fTtcbiAgICBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGFbZmllbGRdID0gJyc7XG4gIH07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDaGFuZ2VIYW5kbGVyID1cbiAgKGN0cmw6IGFueSwgZmllbGQ6IFBhc3N3b3JkRmllbGRFbnVtKSA9PiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhID0gY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhIHx8IHt9O1xuICAgIGN0cmwuY3VycmVudC5zZWN1cmVKc29uRGF0YVtmaWVsZF0gPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICB9O1xuIiwiaW1wb3J0IHsgbWFwIGFzIF9tYXAgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFubm90YXRpb25FdmVudCwgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsIE1ldHJpY0ZpbmRWYWx1ZSwgU2NvcGVkVmFycyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQmFja2VuZERhdGFTb3VyY2VSZXNwb25zZSwgRGF0YVNvdXJjZVdpdGhCYWNrZW5kLCBGZXRjaFJlc3BvbnNlLCBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB0b1Rlc3RpbmdTdGF0dXMgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lL3NyYy91dGlscy9xdWVyeVJlc3BvbnNlJztcbmltcG9ydCB7IGdldFRlbXBsYXRlU3J2LCBUZW1wbGF0ZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy90ZW1wbGF0aW5nL3RlbXBsYXRlX3Nydic7XG5pbXBvcnQgTXlTUUxRdWVyeU1vZGVsIGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbXlzcWwvbXlzcWxfcXVlcnlfbW9kZWwnO1xuXG5pbXBvcnQgeyBnZXRTZWFyY2hGaWx0ZXJTY29wZWRWYXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy92YXJpYWJsZXMvdXRpbHMnO1xuXG5pbXBvcnQgUmVzcG9uc2VQYXJzZXIgZnJvbSAnLi9yZXNwb25zZV9wYXJzZXInO1xuaW1wb3J0IHsgTXlTUUxPcHRpb25zLCBNeVNRTFF1ZXJ5LCBNeXNxbFF1ZXJ5Rm9ySW50ZXJwb2xhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgTXlzcWxEYXRhc291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZVdpdGhCYWNrZW5kPE15U1FMUXVlcnksIE15U1FMT3B0aW9ucz4ge1xuICBpZDogYW55O1xuICBuYW1lOiBhbnk7XG4gIHJlc3BvbnNlUGFyc2VyOiBSZXNwb25zZVBhcnNlcjtcbiAgcXVlcnlNb2RlbDogTXlTUUxRdWVyeU1vZGVsO1xuICBpbnRlcnZhbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGluc3RhbmNlU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzPE15U1FMT3B0aW9ucz4sXG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnYgPSBnZXRUZW1wbGF0ZVNydigpXG4gICkge1xuICAgIHN1cGVyKGluc3RhbmNlU2V0dGluZ3MpO1xuICAgIHRoaXMubmFtZSA9IGluc3RhbmNlU2V0dGluZ3MubmFtZTtcbiAgICB0aGlzLmlkID0gaW5zdGFuY2VTZXR0aW5ncy5pZDtcbiAgICB0aGlzLnJlc3BvbnNlUGFyc2VyID0gbmV3IFJlc3BvbnNlUGFyc2VyKCk7XG4gICAgdGhpcy5xdWVyeU1vZGVsID0gbmV3IE15U1FMUXVlcnlNb2RlbCh7fSk7XG4gICAgY29uc3Qgc2V0dGluZ3NEYXRhID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YSB8fCAoe30gYXMgTXlTUUxPcHRpb25zKTtcbiAgICB0aGlzLmludGVydmFsID0gc2V0dGluZ3NEYXRhLnRpbWVJbnRlcnZhbCB8fCAnMW0nO1xuICB9XG5cbiAgaW50ZXJwb2xhdGVWYXJpYWJsZSA9ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10gfCBudW1iZXIsIHZhcmlhYmxlOiBhbnkpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHZhcmlhYmxlLm11bHRpIHx8IHZhcmlhYmxlLmluY2x1ZGVBbGwpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5xdWVyeU1vZGVsLnF1b3RlTGl0ZXJhbCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBxdW90ZWRWYWx1ZXMgPSBfbWFwKHZhbHVlLCAodjogYW55KSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5xdWVyeU1vZGVsLnF1b3RlTGl0ZXJhbCh2KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcXVvdGVkVmFsdWVzLmpvaW4oJywnKTtcbiAgfTtcblxuICBpbnRlcnBvbGF0ZVZhcmlhYmxlc0luUXVlcmllcyhcbiAgICBxdWVyaWVzOiBNeXNxbFF1ZXJ5Rm9ySW50ZXJwb2xhdGlvbltdLFxuICAgIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnNcbiAgKTogTXlzcWxRdWVyeUZvckludGVycG9sYXRpb25bXSB7XG4gICAgbGV0IGV4cGFuZGVkUXVlcmllcyA9IHF1ZXJpZXM7XG4gICAgaWYgKHF1ZXJpZXMgJiYgcXVlcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBleHBhbmRlZFF1ZXJpZXMgPSBxdWVyaWVzLm1hcCgocXVlcnkpID0+IHtcbiAgICAgICAgY29uc3QgZXhwYW5kZWRRdWVyeSA9IHtcbiAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgICAgIHJhd1NxbDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnJhd1NxbCwgc2NvcGVkVmFycywgdGhpcy5pbnRlcnBvbGF0ZVZhcmlhYmxlKSxcbiAgICAgICAgICByYXdRdWVyeTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGV4cGFuZGVkUXVlcnk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cGFuZGVkUXVlcmllcztcbiAgfVxuXG4gIGZpbHRlclF1ZXJ5KHF1ZXJ5OiBNeVNRTFF1ZXJ5KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFxdWVyeS5oaWRlO1xuICB9XG5cbiAgYXBwbHlUZW1wbGF0ZVZhcmlhYmxlcyh0YXJnZXQ6IE15U1FMUXVlcnksIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnMpOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcbiAgICBjb25zdCBxdWVyeU1vZGVsID0gbmV3IE15U1FMUXVlcnlNb2RlbCh0YXJnZXQsIHRoaXMudGVtcGxhdGVTcnYsIHNjb3BlZFZhcnMpO1xuICAgIHJldHVybiB7XG4gICAgICByZWZJZDogdGFyZ2V0LnJlZklkLFxuICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgIHJhd1NxbDogcXVlcnlNb2RlbC5yZW5kZXIodGhpcy5pbnRlcnBvbGF0ZVZhcmlhYmxlIGFzIGFueSksXG4gICAgICBmb3JtYXQ6IHRhcmdldC5mb3JtYXQsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGFubm90YXRpb25RdWVyeShvcHRpb25zOiBhbnkpOiBQcm9taXNlPEFubm90YXRpb25FdmVudFtdPiB7XG4gICAgaWYgKCFvcHRpb25zLmFubm90YXRpb24ucmF3UXVlcnkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgIG1lc3NhZ2U6ICdRdWVyeSBtaXNzaW5nIGluIGFubm90YXRpb24gZGVmaW5pdGlvbicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgIHJlZklkOiBvcHRpb25zLmFubm90YXRpb24ubmFtZSxcbiAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICByYXdTcWw6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShvcHRpb25zLmFubm90YXRpb24ucmF3UXVlcnksIG9wdGlvbnMuc2NvcGVkVmFycywgdGhpcy5pbnRlcnBvbGF0ZVZhcmlhYmxlKSxcbiAgICAgIGZvcm1hdDogJ3RhYmxlJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgICAgLmZldGNoPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KHtcbiAgICAgICAgICB1cmw6ICcvYXBpL2RzL3F1ZXJ5JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBmcm9tOiBvcHRpb25zLnJhbmdlLmZyb20udmFsdWVPZigpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB0bzogb3B0aW9ucy5yYW5nZS50by52YWx1ZU9mKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHF1ZXJpZXM6IFtxdWVyeV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1ZXN0SWQ6IG9wdGlvbnMuYW5ub3RhdGlvbi5uYW1lLFxuICAgICAgICB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICBhc3luYyAocmVzOiBGZXRjaFJlc3BvbnNlPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KSA9PlxuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlc3BvbnNlUGFyc2VyLnRyYW5zZm9ybUFubm90YXRpb25SZXNwb25zZShvcHRpb25zLCByZXMuZGF0YSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgbWV0cmljRmluZFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcsIG9wdGlvbmFsT3B0aW9uczogYW55KTogUHJvbWlzZTxNZXRyaWNGaW5kVmFsdWVbXT4ge1xuICAgIGxldCByZWZJZCA9ICd0ZW1wdmFyJztcbiAgICBpZiAob3B0aW9uYWxPcHRpb25zICYmIG9wdGlvbmFsT3B0aW9ucy52YXJpYWJsZSAmJiBvcHRpb25hbE9wdGlvbnMudmFyaWFibGUubmFtZSkge1xuICAgICAgcmVmSWQgPSBvcHRpb25hbE9wdGlvbnMudmFyaWFibGUubmFtZTtcbiAgICB9XG5cbiAgICBjb25zdCByYXdTcWwgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoXG4gICAgICBxdWVyeSxcbiAgICAgIGdldFNlYXJjaEZpbHRlclNjb3BlZFZhcih7IHF1ZXJ5LCB3aWxkY2FyZENoYXI6ICclJywgb3B0aW9uczogb3B0aW9uYWxPcHRpb25zIH0pLFxuICAgICAgdGhpcy5pbnRlcnBvbGF0ZVZhcmlhYmxlXG4gICAgKTtcblxuICAgIGNvbnN0IGludGVycG9sYXRlZFF1ZXJ5ID0ge1xuICAgICAgcmVmSWQ6IHJlZklkLFxuICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgIHJhd1NxbCxcbiAgICAgIGZvcm1hdDogJ3RhYmxlJyxcbiAgICB9O1xuXG4gICAgY29uc3QgcmFuZ2UgPSBvcHRpb25hbE9wdGlvbnM/LnJhbmdlO1xuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgICAgLmZldGNoPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KHtcbiAgICAgICAgICB1cmw6ICcvYXBpL2RzL3F1ZXJ5JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBmcm9tOiByYW5nZT8uZnJvbT8udmFsdWVPZigpPy50b1N0cmluZygpLFxuICAgICAgICAgICAgdG86IHJhbmdlPy50bz8udmFsdWVPZigpPy50b1N0cmluZygpLFxuICAgICAgICAgICAgcXVlcmllczogW2ludGVycG9sYXRlZFF1ZXJ5XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcXVlc3RJZDogcmVmSWQsXG4gICAgICAgIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocnNwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZVBhcnNlci50cmFuc2Zvcm1NZXRyaWNGaW5kUmVzcG9uc2UocnNwKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICk7XG4gIH1cblxuICB0ZXN0RGF0YXNvdXJjZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAgIC5mZXRjaCh7XG4gICAgICAgICAgdXJsOiAnL2FwaS9kcy9xdWVyeScsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZnJvbTogJzVtJyxcbiAgICAgICAgICAgIHRvOiAnbm93JyxcbiAgICAgICAgICAgIHF1ZXJpZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlZklkOiAnQScsXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxNczogMSxcbiAgICAgICAgICAgICAgICBtYXhEYXRhUG9pbnRzOiAxLFxuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICAgICAgICAgICAgcmF3U3FsOiAnU0VMRUNUIDEnLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwVG8oeyBzdGF0dXM6ICdzdWNjZXNzJywgbWVzc2FnZTogJ0RhdGFiYXNlIENvbm5lY3Rpb24gT0snIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG9mKHRvVGVzdGluZ1N0YXR1cyhlcnIpKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHRhcmdldENvbnRhaW5zVGVtcGxhdGUodGFyZ2V0OiBhbnkpIHtcbiAgICBsZXQgcmF3U3FsID0gJyc7XG5cbiAgICBpZiAodGFyZ2V0LnJhd1F1ZXJ5KSB7XG4gICAgICByYXdTcWwgPSB0YXJnZXQucmF3U3FsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBxdWVyeSA9IG5ldyBNeVNRTFF1ZXJ5TW9kZWwodGFyZ2V0KTtcbiAgICAgIHJhd1NxbCA9IHF1ZXJ5LmJ1aWxkUXVlcnkoKTtcbiAgICB9XG5cbiAgICByYXdTcWwgPSByYXdTcWwucmVwbGFjZSgnJF9fJywgJycpO1xuXG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTcnYuY29udGFpbnNUZW1wbGF0ZShyYXdTcWwpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTXlzcWxNZXRhUXVlcnkge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRhcmdldDogYW55LCBwcml2YXRlIHF1ZXJ5TW9kZWw6IGFueSkge31cblxuICBnZXRPcGVyYXRvcnMoZGF0YXR5cGU6IHN0cmluZykge1xuICAgIHN3aXRjaCAoZGF0YXR5cGUpIHtcbiAgICAgIGNhc2UgJ2RvdWJsZSc6XG4gICAgICBjYXNlICdmbG9hdCc6IHtcbiAgICAgICAgcmV0dXJuIFsnPScsICchPScsICc8JywgJzw9JywgJz4nLCAnPj0nXTtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgY2FzZSAndGlueXRleHQnOlxuICAgICAgY2FzZSAnbWVkaXVtdGV4dCc6XG4gICAgICBjYXNlICdsb25ndGV4dCc6XG4gICAgICBjYXNlICd2YXJjaGFyJzpcbiAgICAgIGNhc2UgJ2NoYXInOiB7XG4gICAgICAgIHJldHVybiBbJz0nLCAnIT0nLCAnPCcsICc8PScsICc+JywgJz49JywgJ0lOJywgJ05PVCBJTicsICdMSUtFJywgJ05PVCBMSUtFJ107XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJldHVybiBbJz0nLCAnIT0nLCAnPCcsICc8PScsICc+JywgJz49JywgJ0lOJywgJ05PVCBJTiddO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIHF1b3RlIGlkZW50aWZpZXIgYXMgbGl0ZXJhbCB0byB1c2UgaW4gbWV0YWRhdGEgcXVlcmllc1xuICBxdW90ZUlkZW50QXNMaXRlcmFsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeU1vZGVsLnF1b3RlTGl0ZXJhbCh0aGlzLnF1ZXJ5TW9kZWwudW5xdW90ZUlkZW50aWZpZXIodmFsdWUpKTtcbiAgfVxuXG4gIGZpbmRNZXRyaWNUYWJsZSgpIHtcbiAgICAvLyBxdWVyeSB0aGF0IHJldHVybnMgZmlyc3QgdGFibGUgZm91bmQgdGhhdCBoYXMgYSB0aW1lc3RhbXAodHopIGNvbHVtbiBhbmQgYSBmbG9hdCBjb2x1bW5cbiAgICBjb25zdCBxdWVyeSA9IGBcbiAgU0VMRUNUXG4gICAgdGFibGVfbmFtZSBhcyB0YWJsZV9uYW1lLFxuICAgICggU0VMRUNUXG4gICAgICAgIGNvbHVtbl9uYW1lIGFzIGNvbHVtbl9uYW1lXG4gICAgICBGUk9NIGluZm9ybWF0aW9uX3NjaGVtYS5jb2x1bW5zIGNcbiAgICAgIFdIRVJFXG4gICAgICAgIGMudGFibGVfc2NoZW1hID0gdC50YWJsZV9zY2hlbWEgQU5EXG4gICAgICAgIGMudGFibGVfbmFtZSA9IHQudGFibGVfbmFtZSBBTkRcbiAgICAgICAgYy5kYXRhX3R5cGUgSU4gKCd0aW1lc3RhbXAnLCAnZGF0ZXRpbWUnKVxuICAgICAgT1JERVIgQlkgb3JkaW5hbF9wb3NpdGlvbiBMSU1JVCAxXG4gICAgKSBBUyB0aW1lX2NvbHVtbixcbiAgICAoIFNFTEVDVFxuICAgICAgICBjb2x1bW5fbmFtZSBBUyBjb2x1bW5fbmFtZVxuICAgICAgRlJPTSBpbmZvcm1hdGlvbl9zY2hlbWEuY29sdW1ucyBjXG4gICAgICBXSEVSRVxuICAgICAgICBjLnRhYmxlX3NjaGVtYSA9IHQudGFibGVfc2NoZW1hIEFORFxuICAgICAgICBjLnRhYmxlX25hbWUgPSB0LnRhYmxlX25hbWUgQU5EXG4gICAgICAgIGMuZGF0YV90eXBlIElOKCdmbG9hdCcsICdpbnQnLCAnYmlnaW50JylcbiAgICAgIE9SREVSIEJZIG9yZGluYWxfcG9zaXRpb24gTElNSVQgMVxuICAgICkgQVMgdmFsdWVfY29sdW1uXG4gIEZST00gaW5mb3JtYXRpb25fc2NoZW1hLnRhYmxlcyB0XG4gIFdIRVJFXG4gICAgdC50YWJsZV9zY2hlbWEgPSBkYXRhYmFzZSgpIEFORFxuICAgIEVYSVNUU1xuICAgICggU0VMRUNUIDFcbiAgICAgIEZST00gaW5mb3JtYXRpb25fc2NoZW1hLmNvbHVtbnMgY1xuICAgICAgV0hFUkVcbiAgICAgICAgYy50YWJsZV9zY2hlbWEgPSB0LnRhYmxlX3NjaGVtYSBBTkRcbiAgICAgICAgYy50YWJsZV9uYW1lID0gdC50YWJsZV9uYW1lIEFORFxuICAgICAgICBjLmRhdGFfdHlwZSBJTiAoJ3RpbWVzdGFtcCcsICdkYXRldGltZScpXG4gICAgKSBBTkRcbiAgICBFWElTVFNcbiAgICAoIFNFTEVDVCAxXG4gICAgICBGUk9NIGluZm9ybWF0aW9uX3NjaGVtYS5jb2x1bW5zIGNcbiAgICAgIFdIRVJFXG4gICAgICAgIGMudGFibGVfc2NoZW1hID0gdC50YWJsZV9zY2hlbWEgQU5EXG4gICAgICAgIGMudGFibGVfbmFtZSA9IHQudGFibGVfbmFtZSBBTkRcbiAgICAgICAgYy5kYXRhX3R5cGUgSU4oJ2Zsb2F0JywgJ2ludCcsICdiaWdpbnQnKVxuICAgIClcbiAgTElNSVQgMVxuO2A7XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRUYWJsZUNvbnN0cmFpbnQodGFibGU6IHN0cmluZykge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuXG4gICAgLy8gY2hlY2sgZm9yIHNjaGVtYSBxdWFsaWZpZWQgdGFibGVcbiAgICBpZiAodGFibGUuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgY29uc3QgcGFydHMgPSB0YWJsZS5zcGxpdCgnLicpO1xuICAgICAgcXVlcnkgPSAndGFibGVfc2NoZW1hID0gJyArIHRoaXMucXVvdGVJZGVudEFzTGl0ZXJhbChwYXJ0c1swXSk7XG4gICAgICBxdWVyeSArPSAnIEFORCB0YWJsZV9uYW1lID0gJyArIHRoaXMucXVvdGVJZGVudEFzTGl0ZXJhbChwYXJ0c1sxXSk7XG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5ID0gJ3RhYmxlX3NjaGVtYSA9IGRhdGFiYXNlKCkgQU5EIHRhYmxlX25hbWUgPSAnICsgdGhpcy5xdW90ZUlkZW50QXNMaXRlcmFsKHRhYmxlKTtcblxuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkVGFibGVRdWVyeSgpIHtcbiAgICByZXR1cm4gJ1NFTEVDVCB0YWJsZV9uYW1lIEZST00gaW5mb3JtYXRpb25fc2NoZW1hLnRhYmxlcyBXSEVSRSB0YWJsZV9zY2hlbWEgPSBkYXRhYmFzZSgpIE9SREVSIEJZIHRhYmxlX25hbWUnO1xuICB9XG5cbiAgYnVpbGRDb2x1bW5RdWVyeSh0eXBlPzogc3RyaW5nKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJ1NFTEVDVCBjb2x1bW5fbmFtZSBGUk9NIGluZm9ybWF0aW9uX3NjaGVtYS5jb2x1bW5zIFdIRVJFICc7XG4gICAgcXVlcnkgKz0gdGhpcy5idWlsZFRhYmxlQ29uc3RyYWludCh0aGlzLnRhcmdldC50YWJsZSk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3RpbWUnOiB7XG4gICAgICAgIHF1ZXJ5ICs9IFwiIEFORCBkYXRhX3R5cGUgSU4gKCd0aW1lc3RhbXAnLCdkYXRldGltZScsJ2JpZ2ludCcsJ2ludCcsJ2RvdWJsZScsJ2Zsb2F0JylcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdtZXRyaWMnOiB7XG4gICAgICAgIHF1ZXJ5ICs9IFwiIEFORCBkYXRhX3R5cGUgSU4gKCd0ZXh0JywndGlueXRleHQnLCdtZWRpdW10ZXh0JywnbG9uZ3RleHQnLCd2YXJjaGFyJywnY2hhcicpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAndmFsdWUnOiB7XG4gICAgICAgIHF1ZXJ5ICs9IFwiIEFORCBkYXRhX3R5cGUgSU4gKCdiaWdpbnQnLCdpbnQnLCdzbWFsbGludCcsJ21lZGl1bWludCcsJ3RpbnlpbnQnLCdkb3VibGUnLCdkZWNpbWFsJywnZmxvYXQnKVwiO1xuICAgICAgICBxdWVyeSArPSAnIEFORCBjb2x1bW5fbmFtZSA8PiAnICsgdGhpcy5xdW90ZUlkZW50QXNMaXRlcmFsKHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2dyb3VwJzoge1xuICAgICAgICBxdWVyeSArPSBcIiBBTkQgZGF0YV90eXBlIElOICgndGV4dCcsJ3Rpbnl0ZXh0JywnbWVkaXVtdGV4dCcsJ2xvbmd0ZXh0JywndmFyY2hhcicsJ2NoYXInKVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBxdWVyeSArPSAnIE9SREVSIEJZIGNvbHVtbl9uYW1lJztcblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkVmFsdWVRdWVyeShjb2x1bW46IHN0cmluZykge1xuICAgIGxldCBxdWVyeSA9ICdTRUxFQ1QgRElTVElOQ1QgUVVPVEUoJyArIGNvbHVtbiArICcpJztcbiAgICBxdWVyeSArPSAnIEZST00gJyArIHRoaXMudGFyZ2V0LnRhYmxlO1xuICAgIHF1ZXJ5ICs9ICcgV0hFUkUgJF9fdGltZUZpbHRlcignICsgdGhpcy50YXJnZXQudGltZUNvbHVtbiArICcpJztcbiAgICBxdWVyeSArPSAnIE9SREVSIEJZIDEgTElNSVQgMTAwJztcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZERhdGF0eXBlUXVlcnkoY29sdW1uOiBzdHJpbmcpIHtcbiAgICBsZXQgcXVlcnkgPSBgXG5TRUxFQ1QgZGF0YV90eXBlXG5GUk9NIGluZm9ybWF0aW9uX3NjaGVtYS5jb2x1bW5zXG5XSEVSRSBgO1xuICAgIHF1ZXJ5ICs9ICcgdGFibGVfbmFtZSA9ICcgKyB0aGlzLnF1b3RlSWRlbnRBc0xpdGVyYWwodGhpcy50YXJnZXQudGFibGUpO1xuICAgIHF1ZXJ5ICs9ICcgQU5EIGNvbHVtbl9uYW1lID0gJyArIHRoaXMucXVvdGVJZGVudEFzTGl0ZXJhbChjb2x1bW4pO1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQge1xuICBjcmVhdGVDaGFuZ2VIYW5kbGVyLFxuICBjcmVhdGVSZXNldEhhbmRsZXIsXG4gIFBhc3N3b3JkRmllbGRFbnVtLFxufSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9kYXRhc291cmNlcy91dGlscy9wYXNzd29yZEhhbmRsZXJzJztcblxuaW1wb3J0IHsgTXlzcWxEYXRhc291cmNlIH0gZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7IE15c3FsUXVlcnlDdHJsIH0gZnJvbSAnLi9xdWVyeV9jdHJsJztcbmltcG9ydCB7IE15U1FMUXVlcnkgfSBmcm9tICcuL3R5cGVzJztcblxuY2xhc3MgTXlzcWxDb25maWdDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL2NvbmZpZy5odG1sJztcbiAgY3VycmVudDogYW55O1xuICBvblBhc3N3b3JkUmVzZXQ6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZVJlc2V0SGFuZGxlcj47XG4gIG9uUGFzc3dvcmRDaGFuZ2U6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZUNoYW5nZUhhbmRsZXI+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMub25QYXNzd29yZFJlc2V0ID0gY3JlYXRlUmVzZXRIYW5kbGVyKHRoaXMsIFBhc3N3b3JkRmllbGRFbnVtLlBhc3N3b3JkKTtcbiAgICB0aGlzLm9uUGFzc3dvcmRDaGFuZ2UgPSBjcmVhdGVDaGFuZ2VIYW5kbGVyKHRoaXMsIFBhc3N3b3JkRmllbGRFbnVtLlBhc3N3b3JkKTtcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0UXVlcnkgPSBgU0VMRUNUXG4gICAgVU5JWF9USU1FU1RBTVAoPHRpbWVfY29sdW1uPikgYXMgdGltZV9zZWMsXG4gICAgPHRleHRfY29sdW1uPiBhcyB0ZXh0LFxuICAgIDx0YWdzX2NvbHVtbj4gYXMgdGFnc1xuICBGUk9NIDx0YWJsZSBuYW1lPlxuICBXSEVSRSAkX190aW1lRmlsdGVyKHRpbWVfY29sdW1uKVxuICBPUkRFUiBCWSA8dGltZV9jb2x1bW4+IEFTQ1xuICBMSU1JVCAxMDBcbiAgYDtcblxuY2xhc3MgTXlzcWxBbm5vdGF0aW9uc1F1ZXJ5Q3RybCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdwYXJ0aWFscy9hbm5vdGF0aW9ucy5lZGl0b3IuaHRtbCc7XG5cbiAgZGVjbGFyZSBhbm5vdGF0aW9uOiBhbnk7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSkge1xuICAgIHRoaXMuYW5ub3RhdGlvbiA9ICRzY29wZS5jdHJsLmFubm90YXRpb247XG4gICAgdGhpcy5hbm5vdGF0aW9uLnJhd1F1ZXJ5ID0gdGhpcy5hbm5vdGF0aW9uLnJhd1F1ZXJ5IHx8IGRlZmF1bHRRdWVyeTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBNeXNxbERhdGFzb3VyY2UsXG4gIE15c3FsRGF0YXNvdXJjZSBhcyBEYXRhc291cmNlLFxuICBNeXNxbFF1ZXJ5Q3RybCBhcyBRdWVyeUN0cmwsXG4gIE15c3FsQ29uZmlnQ3RybCBhcyBDb25maWdDdHJsLFxuICBNeXNxbEFubm90YXRpb25zUXVlcnlDdHJsIGFzIEFubm90YXRpb25zUXVlcnlDdHJsLFxufTtcblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBEYXRhU291cmNlUGx1Z2luPE15c3FsRGF0YXNvdXJjZSwgTXlTUUxRdWVyeT4oTXlzcWxEYXRhc291cmNlKVxuICAuc2V0UXVlcnlDdHJsKE15c3FsUXVlcnlDdHJsKVxuICAuc2V0Q29uZmlnQ3RybChNeXNxbENvbmZpZ0N0cmwpXG4gIC5zZXRBbm5vdGF0aW9uUXVlcnlDdHJsKE15c3FsQW5ub3RhdGlvbnNRdWVyeUN0cmwpO1xuIiwiaW1wb3J0IHsgZmluZCwgbWFwIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgU2NvcGVkVmFycyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgVGVtcGxhdGVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlTUUxRdWVyeU1vZGVsIHtcbiAgdGFyZ2V0OiBhbnk7XG4gIHRlbXBsYXRlU3J2OiBhbnk7XG4gIHNjb3BlZFZhcnM6IGFueTtcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKHRhcmdldDogYW55LCB0ZW1wbGF0ZVNydj86IFRlbXBsYXRlU3J2LCBzY29wZWRWYXJzPzogU2NvcGVkVmFycykge1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMudGVtcGxhdGVTcnYgPSB0ZW1wbGF0ZVNydjtcbiAgICB0aGlzLnNjb3BlZFZhcnMgPSBzY29wZWRWYXJzO1xuXG4gICAgdGFyZ2V0LmZvcm1hdCA9IHRhcmdldC5mb3JtYXQgfHwgJ3RpbWVfc2VyaWVzJztcbiAgICB0YXJnZXQudGltZUNvbHVtbiA9IHRhcmdldC50aW1lQ29sdW1uIHx8ICd0aW1lJztcbiAgICB0YXJnZXQubWV0cmljQ29sdW1uID0gdGFyZ2V0Lm1ldHJpY0NvbHVtbiB8fCAnbm9uZSc7XG5cbiAgICB0YXJnZXQuZ3JvdXAgPSB0YXJnZXQuZ3JvdXAgfHwgW107XG4gICAgdGFyZ2V0LndoZXJlID0gdGFyZ2V0LndoZXJlIHx8IFt7IHR5cGU6ICdtYWNybycsIG5hbWU6ICckX190aW1lRmlsdGVyJywgcGFyYW1zOiBbXSB9XTtcbiAgICB0YXJnZXQuc2VsZWN0ID0gdGFyZ2V0LnNlbGVjdCB8fCBbW3sgdHlwZTogJ2NvbHVtbicsIHBhcmFtczogWyd2YWx1ZSddIH1dXTtcblxuICAgIC8vIGhhbmRsZSBwcmUgcXVlcnkgZ3VpIHBhbmVscyBncmFjZWZ1bGx5XG4gICAgaWYgKCEoJ3Jhd1F1ZXJ5JyBpbiB0aGlzLnRhcmdldCkpIHtcbiAgICAgIGlmICgncmF3U3FsJyBpbiB0YXJnZXQpIHtcbiAgICAgICAgLy8gcHJlIHF1ZXJ5IGd1aSBwYW5lbFxuICAgICAgICB0YXJnZXQucmF3UXVlcnkgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbmV3IHBhbmVsXG4gICAgICAgIHRhcmdldC5yYXdRdWVyeSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdpdmUgaW50ZXJwb2xhdGVRdWVyeVN0ciBhY2Nlc3MgdG8gdGhpc1xuICAgIHRoaXMuaW50ZXJwb2xhdGVRdWVyeVN0ciA9IHRoaXMuaW50ZXJwb2xhdGVRdWVyeVN0ci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gcmVtb3ZlIGlkZW50aWZpZXIgcXVvdGluZyBmcm9tIGlkZW50aWZpZXIgdG8gdXNlIGluIG1ldGFkYXRhIHF1ZXJpZXNcbiAgdW5xdW90ZUlkZW50aWZpZXIodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZVswXSA9PT0gJ1wiJyAmJiB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXSA9PT0gJ1wiJykge1xuICAgICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZygxLCB2YWx1ZS5sZW5ndGggLSAxKS5yZXBsYWNlKC9cIlwiL2csICdcIicpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcXVvdGVJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gJ1wiJyArIHZhbHVlLnJlcGxhY2UoL1wiL2csICdcIlwiJykgKyAnXCInO1xuICB9XG5cbiAgcXVvdGVMaXRlcmFsKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gXCInXCIgKyB2YWx1ZS5yZXBsYWNlKC8nL2csIFwiJydcIikgKyBcIidcIjtcbiAgfVxuXG4gIGVzY2FwZUxpdGVyYWwodmFsdWU6IGFueSkge1xuICAgIHJldHVybiBTdHJpbmcodmFsdWUpLnJlcGxhY2UoLycvZywgXCInJ1wiKTtcbiAgfVxuXG4gIGhhc1RpbWVHcm91cCgpIHtcbiAgICByZXR1cm4gZmluZCh0aGlzLnRhcmdldC5ncm91cCwgKGc6IGFueSkgPT4gZy50eXBlID09PSAndGltZScpO1xuICB9XG5cbiAgaGFzTWV0cmljQ29sdW1uKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldC5tZXRyaWNDb2x1bW4gIT09ICdub25lJztcbiAgfVxuXG4gIGludGVycG9sYXRlUXVlcnlTdHIodmFsdWU6IHN0cmluZywgdmFyaWFibGU6IHsgbXVsdGk6IGFueTsgaW5jbHVkZUFsbDogYW55IH0sIGRlZmF1bHRGb3JtYXRGbjogYW55KSB7XG4gICAgLy8gaWYgbm8gbXVsdGkgb3IgaW5jbHVkZSBhbGwgZG8gbm90IHJlZ2V4RXNjYXBlXG4gICAgaWYgKCF2YXJpYWJsZS5tdWx0aSAmJiAhdmFyaWFibGUuaW5jbHVkZUFsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXNjYXBlTGl0ZXJhbCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLnF1b3RlTGl0ZXJhbCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZXNjYXBlZFZhbHVlcyA9IG1hcCh2YWx1ZSwgdGhpcy5xdW90ZUxpdGVyYWwpO1xuICAgIHJldHVybiBlc2NhcGVkVmFsdWVzLmpvaW4oJywnKTtcbiAgfVxuXG4gIHJlbmRlcihpbnRlcnBvbGF0ZT86IGJvb2xlYW4pIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcblxuICAgIC8vIG5ldyBxdWVyeSB3aXRoIG5vIHRhYmxlIHNldCB5ZXRcbiAgICBpZiAoIXRoaXMudGFyZ2V0LnJhd1F1ZXJ5ICYmICEoJ3RhYmxlJyBpbiB0aGlzLnRhcmdldCkpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAoIXRhcmdldC5yYXdRdWVyeSkge1xuICAgICAgdGFyZ2V0LnJhd1NxbCA9IHRoaXMuYnVpbGRRdWVyeSgpO1xuICAgIH1cblxuICAgIGlmIChpbnRlcnBvbGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZSh0YXJnZXQucmF3U3FsLCB0aGlzLnNjb3BlZFZhcnMsIHRoaXMuaW50ZXJwb2xhdGVRdWVyeVN0cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0YXJnZXQucmF3U3FsO1xuICAgIH1cbiAgfVxuXG4gIGhhc1VuaXhFcG9jaFRpbWVjb2x1bW4oKSB7XG4gICAgcmV0dXJuIFsnaW50JywgJ2JpZ2ludCcsICdkb3VibGUnXS5pbmRleE9mKHRoaXMudGFyZ2V0LnRpbWVDb2x1bW5UeXBlKSA+IC0xO1xuICB9XG5cbiAgYnVpbGRUaW1lQ29sdW1uKGFsaWFzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRpbWVHcm91cCA9IHRoaXMuaGFzVGltZUdyb3VwKCk7XG4gICAgbGV0IHF1ZXJ5O1xuICAgIGxldCBtYWNybyA9ICckX190aW1lR3JvdXAnO1xuXG4gICAgaWYgKHRpbWVHcm91cCkge1xuICAgICAgbGV0IGFyZ3M7XG4gICAgICBpZiAodGltZUdyb3VwLnBhcmFtcy5sZW5ndGggPiAxICYmIHRpbWVHcm91cC5wYXJhbXNbMV0gIT09ICdub25lJykge1xuICAgICAgICBhcmdzID0gdGltZUdyb3VwLnBhcmFtcy5qb2luKCcsJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcmdzID0gdGltZUdyb3VwLnBhcmFtc1swXTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhhc1VuaXhFcG9jaFRpbWVjb2x1bW4oKSkge1xuICAgICAgICBtYWNybyA9ICckX191bml4RXBvY2hHcm91cCc7XG4gICAgICB9XG4gICAgICBpZiAoYWxpYXMpIHtcbiAgICAgICAgbWFjcm8gKz0gJ0FsaWFzJztcbiAgICAgIH1cbiAgICAgIHF1ZXJ5ID0gbWFjcm8gKyAnKCcgKyB0aGlzLnRhcmdldC50aW1lQ29sdW1uICsgJywnICsgYXJncyArICcpJztcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnkgPSB0aGlzLnRhcmdldC50aW1lQ29sdW1uO1xuICAgICAgaWYgKGFsaWFzKSB7XG4gICAgICAgIHF1ZXJ5ICs9ICcgQVMgXCJ0aW1lXCInO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkTWV0cmljQ29sdW1uKCkge1xuICAgIGlmICh0aGlzLmhhc01ldHJpY0NvbHVtbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXJnZXQubWV0cmljQ29sdW1uICsgJyBBUyBtZXRyaWMnO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGJ1aWxkVmFsdWVDb2x1bW5zKCkge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuICAgIGZvciAoY29uc3QgY29sdW1uIG9mIHRoaXMudGFyZ2V0LnNlbGVjdCkge1xuICAgICAgcXVlcnkgKz0gJyxcXG4gICcgKyB0aGlzLmJ1aWxkVmFsdWVDb2x1bW4oY29sdW1uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZFZhbHVlQ29sdW1uKGNvbHVtbjogYW55KSB7XG4gICAgbGV0IHF1ZXJ5ID0gJyc7XG5cbiAgICBjb25zdCBjb2x1bW5OYW1lOiBhbnkgPSBmaW5kKGNvbHVtbiwgKGc6IGFueSkgPT4gZy50eXBlID09PSAnY29sdW1uJyk7XG4gICAgcXVlcnkgPSBjb2x1bW5OYW1lLnBhcmFtc1swXTtcblxuICAgIGNvbnN0IGFnZ3JlZ2F0ZTogYW55ID0gZmluZChjb2x1bW4sIChnOiBhbnkpID0+IGcudHlwZSA9PT0gJ2FnZ3JlZ2F0ZScpO1xuXG4gICAgaWYgKGFnZ3JlZ2F0ZSkge1xuICAgICAgY29uc3QgZnVuYyA9IGFnZ3JlZ2F0ZS5wYXJhbXNbMF07XG4gICAgICBxdWVyeSA9IGZ1bmMgKyAnKCcgKyBxdWVyeSArICcpJztcbiAgICB9XG5cbiAgICBjb25zdCBhbGlhczogYW55ID0gZmluZChjb2x1bW4sIChnOiBhbnkpID0+IGcudHlwZSA9PT0gJ2FsaWFzJyk7XG4gICAgaWYgKGFsaWFzKSB7XG4gICAgICBxdWVyeSArPSAnIEFTICcgKyB0aGlzLnF1b3RlSWRlbnRpZmllcihhbGlhcy5wYXJhbXNbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkV2hlcmVDbGF1c2UoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJyc7XG4gICAgY29uc3QgY29uZGl0aW9ucyA9IG1hcCh0aGlzLnRhcmdldC53aGVyZSwgKHRhZywgaW5kZXgpID0+IHtcbiAgICAgIHN3aXRjaCAodGFnLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnbWFjcm8nOlxuICAgICAgICAgIHJldHVybiB0YWcubmFtZSArICcoJyArIHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4gKyAnKSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2V4cHJlc3Npb24nOlxuICAgICAgICAgIHJldHVybiB0YWcucGFyYW1zLmpvaW4oJyAnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb25kaXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHF1ZXJ5ID0gJ1xcbldIRVJFXFxuICAnICsgY29uZGl0aW9ucy5qb2luKCcgQU5EXFxuICAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZEdyb3VwQ2xhdXNlKCkge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuICAgIGxldCBncm91cFNlY3Rpb24gPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXJnZXQuZ3JvdXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnRhcmdldC5ncm91cFtpXTtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICBncm91cFNlY3Rpb24gKz0gJywgJztcbiAgICAgIH1cbiAgICAgIGlmIChwYXJ0LnR5cGUgPT09ICd0aW1lJykge1xuICAgICAgICBncm91cFNlY3Rpb24gKz0gJzEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JvdXBTZWN0aW9uICs9IHBhcnQucGFyYW1zWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChncm91cFNlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBxdWVyeSA9ICdcXG5HUk9VUCBCWSAnICsgZ3JvdXBTZWN0aW9uO1xuICAgICAgaWYgKHRoaXMuaGFzTWV0cmljQ29sdW1uKCkpIHtcbiAgICAgICAgcXVlcnkgKz0gJywyJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRRdWVyeSgpIHtcbiAgICBsZXQgcXVlcnkgPSAnU0VMRUNUJztcblxuICAgIHF1ZXJ5ICs9ICdcXG4gICcgKyB0aGlzLmJ1aWxkVGltZUNvbHVtbigpO1xuICAgIGlmICh0aGlzLmhhc01ldHJpY0NvbHVtbigpKSB7XG4gICAgICBxdWVyeSArPSAnLFxcbiAgJyArIHRoaXMuYnVpbGRNZXRyaWNDb2x1bW4oKTtcbiAgICB9XG4gICAgcXVlcnkgKz0gdGhpcy5idWlsZFZhbHVlQ29sdW1ucygpO1xuXG4gICAgcXVlcnkgKz0gJ1xcbkZST00gJyArIHRoaXMudGFyZ2V0LnRhYmxlO1xuXG4gICAgcXVlcnkgKz0gdGhpcy5idWlsZFdoZXJlQ2xhdXNlKCk7XG4gICAgcXVlcnkgKz0gdGhpcy5idWlsZEdyb3VwQ2xhdXNlKCk7XG5cbiAgICBxdWVyeSArPSAnXFxuT1JERVIgQlkgJyArIHRoaXMuYnVpbGRUaW1lQ29sdW1uKGZhbHNlKTtcblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgYXV0byB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgY2xvbmUsIGZpbHRlciwgZmluZCwgZmluZEluZGV4LCBpbmRleE9mLCBtYXAgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBQYW5lbEV2ZW50cywgUXVlcnlSZXN1bHRNZXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgU3FsUGFydCB9IGZyb20gJ2FwcC9hbmd1bGFyL2NvbXBvbmVudHMvc3FsX3BhcnQvc3FsX3BhcnQnO1xuaW1wb3J0IGFwcEV2ZW50cyBmcm9tICdhcHAvY29yZS9hcHBfZXZlbnRzJztcbmltcG9ydCB7IFZhcmlhYmxlV2l0aE11bHRpU3VwcG9ydCB9IGZyb20gJ2FwcC9mZWF0dXJlcy92YXJpYWJsZXMvdHlwZXMnO1xuaW1wb3J0IHsgUXVlcnlDdHJsIH0gZnJvbSAnYXBwL3BsdWdpbnMvc2RrJztcblxuaW1wb3J0IHsgU2hvd0NvbmZpcm1Nb2RhbEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMvZXZlbnRzJztcblxuaW1wb3J0IHsgTXlzcWxNZXRhUXVlcnkgfSBmcm9tICcuL21ldGFfcXVlcnknO1xuaW1wb3J0IE15U1FMUXVlcnlNb2RlbCBmcm9tICcuL215c3FsX3F1ZXJ5X21vZGVsJztcbmltcG9ydCBzcWxQYXJ0IGZyb20gJy4vc3FsX3BhcnQnO1xuXG5jb25zdCBkZWZhdWx0UXVlcnkgPSBgU0VMRUNUXG4gIFVOSVhfVElNRVNUQU1QKDx0aW1lX2NvbHVtbj4pIGFzIHRpbWVfc2VjLFxuICA8dmFsdWUgY29sdW1uPiBhcyB2YWx1ZSxcbiAgPHNlcmllcyBuYW1lIGNvbHVtbj4gYXMgbWV0cmljXG5GUk9NIDx0YWJsZSBuYW1lPlxuV0hFUkUgJF9fdGltZUZpbHRlcih0aW1lX2NvbHVtbilcbk9SREVSIEJZIDx0aW1lX2NvbHVtbj4gQVNDXG5gO1xuXG5leHBvcnQgY2xhc3MgTXlzcWxRdWVyeUN0cmwgZXh0ZW5kcyBRdWVyeUN0cmwge1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAncGFydGlhbHMvcXVlcnkuZWRpdG9yLmh0bWwnO1xuXG4gIGZvcm1hdHM6IGFueVtdO1xuICBsYXN0UXVlcnlFcnJvcj86IHN0cmluZztcbiAgc2hvd0hlbHAhOiBib29sZWFuO1xuXG4gIHF1ZXJ5TW9kZWw6IE15U1FMUXVlcnlNb2RlbDtcbiAgbWV0YUJ1aWxkZXI6IE15c3FsTWV0YVF1ZXJ5O1xuICBsYXN0UXVlcnlNZXRhPzogUXVlcnlSZXN1bHRNZXRhO1xuICB0YWJsZVNlZ21lbnQ6IGFueTtcbiAgd2hlcmVBZGQ6IGFueTtcbiAgdGltZUNvbHVtblNlZ21lbnQ6IGFueTtcbiAgbWV0cmljQ29sdW1uU2VnbWVudDogYW55O1xuICBzZWxlY3RNZW51OiBhbnlbXSA9IFtdO1xuICBzZWxlY3RQYXJ0czogU3FsUGFydFtdW10gPSBbXTtcbiAgZ3JvdXBQYXJ0czogU3FsUGFydFtdID0gW107XG4gIHdoZXJlUGFydHM6IFNxbFBhcnRbXSA9IFtdO1xuICBncm91cEFkZDogYW55O1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgJHNjb3BlOiBhbnksXG4gICAgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnYsXG4gICAgcHJpdmF0ZSB1aVNlZ21lbnRTcnY6IGFueVxuICApIHtcbiAgICBzdXBlcigkc2NvcGUsICRpbmplY3Rvcik7XG5cbiAgICB0aGlzLnRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgIHRoaXMucXVlcnlNb2RlbCA9IG5ldyBNeVNRTFF1ZXJ5TW9kZWwodGhpcy50YXJnZXQsIHRlbXBsYXRlU3J2LCB0aGlzLnBhbmVsLnNjb3BlZFZhcnMpO1xuICAgIHRoaXMubWV0YUJ1aWxkZXIgPSBuZXcgTXlzcWxNZXRhUXVlcnkodGhpcy50YXJnZXQsIHRoaXMucXVlcnlNb2RlbCk7XG4gICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uKCk7XG5cbiAgICB0aGlzLmZvcm1hdHMgPSBbXG4gICAgICB7IHRleHQ6ICdUaW1lIHNlcmllcycsIHZhbHVlOiAndGltZV9zZXJpZXMnIH0sXG4gICAgICB7IHRleHQ6ICdUYWJsZScsIHZhbHVlOiAndGFibGUnIH0sXG4gICAgXTtcblxuICAgIGlmICghdGhpcy50YXJnZXQucmF3U3FsKSB7XG4gICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIHdoZW4gaW4gdGFibGUgcGFuZWxcbiAgICAgIGlmICh0aGlzLnBhbmVsQ3RybC5wYW5lbC50eXBlID09PSAndGFibGUnKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LmZvcm1hdCA9ICd0YWJsZSc7XG4gICAgICAgIHRoaXMudGFyZ2V0LnJhd1NxbCA9ICdTRUxFQ1QgMSc7XG4gICAgICAgIHRoaXMudGFyZ2V0LnJhd1F1ZXJ5ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LnJhd1NxbCA9IGRlZmF1bHRRdWVyeTtcbiAgICAgICAgdGhpcy5kYXRhc291cmNlLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmZpbmRNZXRyaWNUYWJsZSgpKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudGFibGUgPSByZXN1bHRbMF0udGV4dDtcbiAgICAgICAgICAgIGxldCBzZWdtZW50ID0gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh0aGlzLnRhcmdldC50YWJsZSk7XG4gICAgICAgICAgICB0aGlzLnRhYmxlU2VnbWVudC5odG1sID0gc2VnbWVudC5odG1sO1xuICAgICAgICAgICAgdGhpcy50YWJsZVNlZ21lbnQudmFsdWUgPSBzZWdtZW50LnZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLnRhcmdldC50aW1lQ29sdW1uID0gcmVzdWx0WzFdLnRleHQ7XG4gICAgICAgICAgICBzZWdtZW50ID0gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh0aGlzLnRhcmdldC50aW1lQ29sdW1uKTtcbiAgICAgICAgICAgIHRoaXMudGltZUNvbHVtblNlZ21lbnQuaHRtbCA9IHNlZ21lbnQuaHRtbDtcbiAgICAgICAgICAgIHRoaXMudGltZUNvbHVtblNlZ21lbnQudmFsdWUgPSBzZWdtZW50LnZhbHVlO1xuXG4gICAgICAgICAgICB0aGlzLnRhcmdldC50aW1lQ29sdW1uVHlwZSA9ICd0aW1lc3RhbXAnO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuc2VsZWN0ID0gW1t7IHR5cGU6ICdjb2x1bW4nLCBwYXJhbXM6IFtyZXN1bHRbMl0udGV4dF0gfV1dO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy50YXJnZXQudGFibGUpIHtcbiAgICAgIHRoaXMudGFibGVTZWdtZW50ID0gdWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB2YWx1ZTogJ3NlbGVjdCB0YWJsZScsIGZha2U6IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFibGVTZWdtZW50ID0gdWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodGhpcy50YXJnZXQudGFibGUpO1xuICAgIH1cblxuICAgIHRoaXMudGltZUNvbHVtblNlZ21lbnQgPSB1aVNlZ21lbnRTcnYubmV3U2VnbWVudCh0aGlzLnRhcmdldC50aW1lQ29sdW1uKTtcbiAgICB0aGlzLm1ldHJpY0NvbHVtblNlZ21lbnQgPSB1aVNlZ21lbnRTcnYubmV3U2VnbWVudCh0aGlzLnRhcmdldC5tZXRyaWNDb2x1bW4pO1xuXG4gICAgdGhpcy5idWlsZFNlbGVjdE1lbnUoKTtcbiAgICB0aGlzLndoZXJlQWRkID0gdGhpcy51aVNlZ21lbnRTcnYubmV3UGx1c0J1dHRvbigpO1xuICAgIHRoaXMuZ3JvdXBBZGQgPSB0aGlzLnVpU2VnbWVudFNydi5uZXdQbHVzQnV0dG9uKCk7XG5cbiAgICB0aGlzLnBhbmVsQ3RybC5ldmVudHMub24oUGFuZWxFdmVudHMuZGF0YVJlY2VpdmVkLCB0aGlzLm9uRGF0YVJlY2VpdmVkLmJpbmQodGhpcyksICRzY29wZSk7XG4gICAgdGhpcy5wYW5lbEN0cmwuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLmRhdGFFcnJvciwgdGhpcy5vbkRhdGFFcnJvci5iaW5kKHRoaXMpLCAkc2NvcGUpO1xuICB9XG5cbiAgdXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpIHtcbiAgICBpZiAoIXRoaXMudGFyZ2V0LnJhd1F1ZXJ5KSB7XG4gICAgICB0aGlzLnRhcmdldC5yYXdTcWwgPSB0aGlzLnF1ZXJ5TW9kZWwuYnVpbGRRdWVyeSgpO1xuICAgIH1cblxuICAgIHRoaXMucGFuZWxDdHJsLnJlZnJlc2goKTtcbiAgfVxuXG4gIHVwZGF0ZVByb2plY3Rpb24oKSB7XG4gICAgdGhpcy5zZWxlY3RQYXJ0cyA9IG1hcCh0aGlzLnRhcmdldC5zZWxlY3QsIChwYXJ0czogYW55KSA9PiB7XG4gICAgICByZXR1cm4gbWFwKHBhcnRzLCBzcWxQYXJ0LmNyZWF0ZSkuZmlsdGVyKChuKSA9PiBuKTtcbiAgICB9KTtcbiAgICB0aGlzLndoZXJlUGFydHMgPSBtYXAodGhpcy50YXJnZXQud2hlcmUsIHNxbFBhcnQuY3JlYXRlKS5maWx0ZXIoKG4pID0+IG4pO1xuICAgIHRoaXMuZ3JvdXBQYXJ0cyA9IG1hcCh0aGlzLnRhcmdldC5ncm91cCwgc3FsUGFydC5jcmVhdGUpLmZpbHRlcigobikgPT4gbik7XG4gIH1cblxuICB1cGRhdGVQZXJzaXN0ZWRQYXJ0cygpIHtcbiAgICB0aGlzLnRhcmdldC5zZWxlY3QgPSBtYXAodGhpcy5zZWxlY3RQYXJ0cywgKHNlbGVjdFBhcnRzKSA9PiB7XG4gICAgICByZXR1cm4gbWFwKHNlbGVjdFBhcnRzLCAocGFydDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB7IHR5cGU6IHBhcnQuZGVmLnR5cGUsIGRhdGF0eXBlOiBwYXJ0LmRhdGF0eXBlLCBwYXJhbXM6IHBhcnQucGFyYW1zIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnRhcmdldC53aGVyZSA9IG1hcCh0aGlzLndoZXJlUGFydHMsIChwYXJ0OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IHBhcnQuZGVmLnR5cGUsIGRhdGF0eXBlOiBwYXJ0LmRhdGF0eXBlLCBuYW1lOiBwYXJ0Lm5hbWUsIHBhcmFtczogcGFydC5wYXJhbXMgfTtcbiAgICB9KTtcbiAgICB0aGlzLnRhcmdldC5ncm91cCA9IG1hcCh0aGlzLmdyb3VwUGFydHMsIChwYXJ0OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IHBhcnQuZGVmLnR5cGUsIGRhdGF0eXBlOiBwYXJ0LmRhdGF0eXBlLCBwYXJhbXM6IHBhcnQucGFyYW1zIH07XG4gICAgfSk7XG4gIH1cblxuICBidWlsZFNlbGVjdE1lbnUoKSB7XG4gICAgY29uc3QgYWdncmVnYXRlcyA9IHtcbiAgICAgIHRleHQ6ICdBZ2dyZWdhdGUgRnVuY3Rpb25zJyxcbiAgICAgIHZhbHVlOiAnYWdncmVnYXRlJyxcbiAgICAgIHN1Ym1lbnU6IFtcbiAgICAgICAgeyB0ZXh0OiAnQXZlcmFnZScsIHZhbHVlOiAnYXZnJyB9LFxuICAgICAgICB7IHRleHQ6ICdDb3VudCcsIHZhbHVlOiAnY291bnQnIH0sXG4gICAgICAgIHsgdGV4dDogJ01heGltdW0nLCB2YWx1ZTogJ21heCcgfSxcbiAgICAgICAgeyB0ZXh0OiAnTWluaW11bScsIHZhbHVlOiAnbWluJyB9LFxuICAgICAgICB7IHRleHQ6ICdTdW0nLCB2YWx1ZTogJ3N1bScgfSxcbiAgICAgICAgeyB0ZXh0OiAnU3RhbmRhcmQgZGV2aWF0aW9uJywgdmFsdWU6ICdzdGRkZXYnIH0sXG4gICAgICAgIHsgdGV4dDogJ1ZhcmlhbmNlJywgdmFsdWU6ICd2YXJpYW5jZScgfSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIHRoaXMuc2VsZWN0TWVudS5wdXNoKGFnZ3JlZ2F0ZXMpO1xuICAgIHRoaXMuc2VsZWN0TWVudS5wdXNoKHsgdGV4dDogJ0FsaWFzJywgdmFsdWU6ICdhbGlhcycgfSk7XG4gICAgdGhpcy5zZWxlY3RNZW51LnB1c2goeyB0ZXh0OiAnQ29sdW1uJywgdmFsdWU6ICdjb2x1bW4nIH0pO1xuICB9XG5cbiAgdG9nZ2xlRWRpdG9yTW9kZSgpIHtcbiAgICBpZiAodGhpcy50YXJnZXQucmF3UXVlcnkpIHtcbiAgICAgIGFwcEV2ZW50cy5wdWJsaXNoKFxuICAgICAgICBuZXcgU2hvd0NvbmZpcm1Nb2RhbEV2ZW50KHtcbiAgICAgICAgICB0aXRsZTogJ1dhcm5pbmcnLFxuICAgICAgICAgIHRleHQyOiAnU3dpdGNoaW5nIHRvIHF1ZXJ5IGJ1aWxkZXIgbWF5IG92ZXJ3cml0ZSB5b3VyIHJhdyBTUUwuJyxcbiAgICAgICAgICBpY29uOiAnZXhjbGFtYXRpb24tdHJpYW5nbGUnLFxuICAgICAgICAgIHllc1RleHQ6ICdTd2l0Y2gnLFxuICAgICAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICAgICAgLy8gVGhpcyBjb3VsZCBiZSBjYWxsZWQgZnJvbSBSZWFjdCwgc28gd3JhcCBpbiAkZXZhbEFzeW5jLlxuICAgICAgICAgICAgLy8gV2lsbCB0aGVuIGVpdGhlciBydW4gYXMgcGFydCBvZiB0aGUgY3VycmVudCBkaWdlc3QgY3ljbGUgb3IgdHJpZ2dlciBhIG5ldyBvbmUuXG4gICAgICAgICAgICB0aGlzLiRzY29wZS4kZXZhbEFzeW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy50YXJnZXQucmF3UXVlcnkgPSAhdGhpcy50YXJnZXQucmF3UXVlcnk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBjb3VsZCBiZSBjYWxsZWQgZnJvbSBSZWFjdCwgc28gd3JhcCBpbiAkZXZhbEFzeW5jLlxuICAgICAgLy8gV2lsbCB0aGVuIGVpdGhlciBydW4gYXMgcGFydCBvZiB0aGUgY3VycmVudCBkaWdlc3QgY3ljbGUgb3IgdHJpZ2dlciBhIG5ldyBvbmUuXG4gICAgICB0aGlzLiRzY29wZS4kZXZhbEFzeW5jKCgpID0+IHtcbiAgICAgICAgdGhpcy50YXJnZXQucmF3UXVlcnkgPSAhdGhpcy50YXJnZXQucmF3UXVlcnk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXNldFBsdXNCdXR0b24oYnV0dG9uOiB7IGh0bWw6IGFueTsgdmFsdWU6IGFueSB9KSB7XG4gICAgY29uc3QgcGx1c0J1dHRvbiA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKTtcbiAgICBidXR0b24uaHRtbCA9IHBsdXNCdXR0b24uaHRtbDtcbiAgICBidXR0b24udmFsdWUgPSBwbHVzQnV0dG9uLnZhbHVlO1xuICB9XG5cbiAgZ2V0VGFibGVTZWdtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRUYWJsZVF1ZXJ5KCkpXG4gICAgICAudGhlbih0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoe30pKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHRhYmxlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnRhcmdldC50YWJsZSA9IHRoaXMudGFibGVTZWdtZW50LnZhbHVlO1xuICAgIHRoaXMudGFyZ2V0LndoZXJlID0gW107XG4gICAgdGhpcy50YXJnZXQuZ3JvdXAgPSBbXTtcbiAgICB0aGlzLnVwZGF0ZVByb2plY3Rpb24oKTtcblxuICAgIGNvbnN0IHNlZ21lbnQgPSB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KCdub25lJyk7XG4gICAgdGhpcy5tZXRyaWNDb2x1bW5TZWdtZW50Lmh0bWwgPSBzZWdtZW50Lmh0bWw7XG4gICAgdGhpcy5tZXRyaWNDb2x1bW5TZWdtZW50LnZhbHVlID0gc2VnbWVudC52YWx1ZTtcbiAgICB0aGlzLnRhcmdldC5tZXRyaWNDb2x1bW4gPSAnbm9uZSc7XG5cbiAgICBjb25zdCB0YXNrMSA9IHRoaXMuZGF0YXNvdXJjZS5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCd0aW1lJykpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAvLyBjaGVjayBpZiB0aW1lIGNvbHVtbiBpcyBzdGlsbCB2YWxpZFxuICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwICYmICFmaW5kKHJlc3VsdCwgKHI6IGFueSkgPT4gci50ZXh0ID09PSB0aGlzLnRhcmdldC50aW1lQ29sdW1uKSkge1xuICAgICAgICBjb25zdCBzZWdtZW50ID0gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudChyZXN1bHRbMF0udGV4dCk7XG4gICAgICAgIHRoaXMudGltZUNvbHVtblNlZ21lbnQuaHRtbCA9IHNlZ21lbnQuaHRtbDtcbiAgICAgICAgdGhpcy50aW1lQ29sdW1uU2VnbWVudC52YWx1ZSA9IHNlZ21lbnQudmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy50aW1lQ29sdW1uQ2hhbmdlZChmYWxzZSk7XG4gICAgfSk7XG4gICAgY29uc3QgdGFzazIgPSB0aGlzLmRhdGFzb3VyY2UubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgndmFsdWUnKSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnRhcmdldC5zZWxlY3QgPSBbW3sgdHlwZTogJ2NvbHVtbicsIHBhcmFtczogW3Jlc3VsdFswXS50ZXh0XSB9XV07XG4gICAgICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbigpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgUHJvbWlzZS5hbGwoW3Rhc2sxLCB0YXNrMl0pLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRUaW1lQ29sdW1uU2VnbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQ29sdW1uUXVlcnkoJ3RpbWUnKSlcbiAgICAgIC50aGVuKHRoaXMudHJhbnNmb3JtVG9TZWdtZW50cyh7fSkpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICB9XG5cbiAgdGltZUNvbHVtbkNoYW5nZWQocmVmcmVzaD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLnRhcmdldC50aW1lQ29sdW1uID0gdGhpcy50aW1lQ29sdW1uU2VnbWVudC52YWx1ZTtcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGREYXRhdHlwZVF1ZXJ5KHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4pKVxuICAgICAgLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgaWYgKHRoaXMudGFyZ2V0LnRpbWVDb2x1bW5UeXBlICE9PSByZXN1bHRbMF0udGV4dCkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudGltZUNvbHVtblR5cGUgPSByZXN1bHRbMF0udGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IHBhcnRNb2RlbDtcbiAgICAgICAgICBpZiAodGhpcy5xdWVyeU1vZGVsLmhhc1VuaXhFcG9jaFRpbWVjb2x1bW4oKSkge1xuICAgICAgICAgICAgcGFydE1vZGVsID0gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiAnbWFjcm8nLCBuYW1lOiAnJF9fdW5peEVwb2NoRmlsdGVyJywgcGFyYW1zOiBbXSB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFydE1vZGVsID0gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiAnbWFjcm8nLCBuYW1lOiAnJF9fdGltZUZpbHRlcicsIHBhcmFtczogW10gfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMud2hlcmVQYXJ0cy5sZW5ndGggPj0gMSAmJiB0aGlzLndoZXJlUGFydHNbMF0uZGVmLnR5cGUgPT09ICdtYWNybycpIHtcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgY3VycmVudCBtYWNyb1xuICAgICAgICAgICAgdGhpcy53aGVyZVBhcnRzWzBdID0gcGFydE1vZGVsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLndoZXJlUGFydHMuc3BsaWNlKDAsIDAsIHBhcnRNb2RlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICAgICAgICBpZiAocmVmcmVzaCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBnZXRNZXRyaWNDb2x1bW5TZWdtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgnbWV0cmljJykpXG4gICAgICAudGhlbih0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoeyBhZGROb25lOiB0cnVlIH0pKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG1ldHJpY0NvbHVtbkNoYW5nZWQoKSB7XG4gICAgdGhpcy50YXJnZXQubWV0cmljQ29sdW1uID0gdGhpcy5tZXRyaWNDb2x1bW5TZWdtZW50LnZhbHVlO1xuICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICB9XG5cbiAgb25EYXRhUmVjZWl2ZWQoZGF0YUxpc3Q6IGFueSkge1xuICAgIHRoaXMubGFzdFF1ZXJ5RXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5sYXN0UXVlcnlNZXRhID0gZGF0YUxpc3RbMF0/Lm1ldGE7XG4gIH1cblxuICBvbkRhdGFFcnJvcihlcnI6IGFueSkge1xuICAgIGlmIChlcnIuZGF0YSAmJiBlcnIuZGF0YS5yZXN1bHRzKSB7XG4gICAgICBjb25zdCBxdWVyeVJlcyA9IGVyci5kYXRhLnJlc3VsdHNbdGhpcy50YXJnZXQucmVmSWRdO1xuICAgICAgaWYgKHF1ZXJ5UmVzKSB7XG4gICAgICAgIHRoaXMubGFzdFF1ZXJ5RXJyb3IgPSBxdWVyeVJlcy5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0cmFuc2Zvcm1Ub1NlZ21lbnRzKGNvbmZpZzogYW55KSB7XG4gICAgcmV0dXJuIChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHNlZ21lbnRzID0gbWFwKHJlc3VsdHMsIChzZWdtZW50KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHtcbiAgICAgICAgICB2YWx1ZTogc2VnbWVudC50ZXh0LFxuICAgICAgICAgIGV4cGFuZGFibGU6IHNlZ21lbnQuZXhwYW5kYWJsZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvbmZpZy5hZGRUZW1wbGF0ZVZhcnMpIHtcbiAgICAgICAgZm9yIChjb25zdCB2YXJpYWJsZSBvZiB0aGlzLnRlbXBsYXRlU3J2LmdldFZhcmlhYmxlcygpKSB7XG4gICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgIHZhbHVlID0gJyQnICsgdmFyaWFibGUubmFtZTtcbiAgICAgICAgICBpZiAoY29uZmlnLnRlbXBsYXRlUXVvdGVyICYmICh2YXJpYWJsZSBhcyB1bmtub3duIGFzIFZhcmlhYmxlV2l0aE11bHRpU3VwcG9ydCkubXVsdGkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGNvbmZpZy50ZW1wbGF0ZVF1b3Rlcih2YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VnbWVudHMudW5zaGlmdChcbiAgICAgICAgICAgIHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoe1xuICAgICAgICAgICAgICB0eXBlOiAndGVtcGxhdGUnLFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5hZGROb25lKSB7XG4gICAgICAgIHNlZ21lbnRzLnVuc2hpZnQodGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHR5cGU6ICd0ZW1wbGF0ZScsIHZhbHVlOiAnbm9uZScsIGV4cGFuZGFibGU6IHRydWUgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VnbWVudHM7XG4gICAgfTtcbiAgfVxuXG4gIGZpbmRBZ2dyZWdhdGVJbmRleChzZWxlY3RQYXJ0czogYW55KSB7XG4gICAgcmV0dXJuIGZpbmRJbmRleChzZWxlY3RQYXJ0cywgKHA6IGFueSkgPT4gcC5kZWYudHlwZSA9PT0gJ2FnZ3JlZ2F0ZScgfHwgcC5kZWYudHlwZSA9PT0gJ3BlcmNlbnRpbGUnKTtcbiAgfVxuXG4gIGZpbmRXaW5kb3dJbmRleChzZWxlY3RQYXJ0czogYW55KSB7XG4gICAgcmV0dXJuIGZpbmRJbmRleChzZWxlY3RQYXJ0cywgKHA6IGFueSkgPT4gcC5kZWYudHlwZSA9PT0gJ3dpbmRvdycgfHwgcC5kZWYudHlwZSA9PT0gJ21vdmluZ193aW5kb3cnKTtcbiAgfVxuXG4gIGFkZFNlbGVjdFBhcnQoc2VsZWN0UGFydHM6IGFueVtdLCBpdGVtOiB7IHZhbHVlOiBhbnkgfSwgc3ViSXRlbTogeyB0eXBlOiBhbnk7IHZhbHVlOiBhbnkgfSkge1xuICAgIGxldCBwYXJ0VHlwZSA9IGl0ZW0udmFsdWU7XG4gICAgaWYgKHN1Ykl0ZW0gJiYgc3ViSXRlbS50eXBlKSB7XG4gICAgICBwYXJ0VHlwZSA9IHN1Ykl0ZW0udHlwZTtcbiAgICB9XG4gICAgbGV0IHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogcGFydFR5cGUgfSk7XG4gICAgaWYgKHN1Ykl0ZW0pIHtcbiAgICAgIHBhcnRNb2RlbC5wYXJhbXNbMF0gPSBzdWJJdGVtLnZhbHVlO1xuICAgIH1cbiAgICBsZXQgYWRkQWxpYXMgPSBmYWxzZTtcblxuICAgIHN3aXRjaCAocGFydFR5cGUpIHtcbiAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgIGNvbnN0IHBhcnRzID0gbWFwKHNlbGVjdFBhcnRzLCAocGFydDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogcGFydC5kZWYudHlwZSwgcGFyYW1zOiBjbG9uZShwYXJ0LnBhcmFtcykgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlbGVjdFBhcnRzLnB1c2gocGFydHMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BlcmNlbnRpbGUnOlxuICAgICAgY2FzZSAnYWdncmVnYXRlJzpcbiAgICAgICAgLy8gYWRkIGdyb3VwIGJ5IGlmIG5vIGdyb3VwIGJ5IHlldFxuICAgICAgICBpZiAodGhpcy50YXJnZXQuZ3JvdXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5hZGRHcm91cCgndGltZScsICckX19pbnRlcnZhbCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFnZ0luZGV4ID0gdGhpcy5maW5kQWdncmVnYXRlSW5kZXgoc2VsZWN0UGFydHMpO1xuICAgICAgICBpZiAoYWdnSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgLy8gcmVwbGFjZSBjdXJyZW50IGFnZ3JlZ2F0aW9uXG4gICAgICAgICAgc2VsZWN0UGFydHNbYWdnSW5kZXhdID0gcGFydE1vZGVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdFBhcnRzLnNwbGljZSgxLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZmluZChzZWxlY3RQYXJ0cywgKHA6IGFueSkgPT4gcC5kZWYudHlwZSA9PT0gJ2FsaWFzJykpIHtcbiAgICAgICAgICBhZGRBbGlhcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb3Zpbmdfd2luZG93JzpcbiAgICAgIGNhc2UgJ3dpbmRvdyc6XG4gICAgICAgIGNvbnN0IHdpbmRvd0luZGV4ID0gdGhpcy5maW5kV2luZG93SW5kZXgoc2VsZWN0UGFydHMpO1xuICAgICAgICBpZiAod2luZG93SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgLy8gcmVwbGFjZSBjdXJyZW50IHdpbmRvdyBmdW5jdGlvblxuICAgICAgICAgIHNlbGVjdFBhcnRzW3dpbmRvd0luZGV4XSA9IHBhcnRNb2RlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBhZ2dJbmRleCA9IHRoaXMuZmluZEFnZ3JlZ2F0ZUluZGV4KHNlbGVjdFBhcnRzKTtcbiAgICAgICAgICBpZiAoYWdnSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBzZWxlY3RQYXJ0cy5zcGxpY2UoYWdnSW5kZXggKyAxLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RQYXJ0cy5zcGxpY2UoMSwgMCwgcGFydE1vZGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmaW5kKHNlbGVjdFBhcnRzLCAocDogYW55KSA9PiBwLmRlZi50eXBlID09PSAnYWxpYXMnKSkge1xuICAgICAgICAgIGFkZEFsaWFzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FsaWFzJzpcbiAgICAgICAgYWRkQWxpYXMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoYWRkQWxpYXMpIHtcbiAgICAgIC8vIHNldCBpbml0aWFsIGFsaWFzIG5hbWUgdG8gY29sdW1uIG5hbWVcbiAgICAgIHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ2FsaWFzJywgcGFyYW1zOiBbc2VsZWN0UGFydHNbMF0ucGFyYW1zWzBdLnJlcGxhY2UoL1wiL2csICcnKV0gfSk7XG4gICAgICBpZiAoc2VsZWN0UGFydHNbc2VsZWN0UGFydHMubGVuZ3RoIC0gMV0uZGVmLnR5cGUgPT09ICdhbGlhcycpIHtcbiAgICAgICAgc2VsZWN0UGFydHNbc2VsZWN0UGFydHMubGVuZ3RoIC0gMV0gPSBwYXJ0TW9kZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RQYXJ0cy5wdXNoKHBhcnRNb2RlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICB9XG5cbiAgcmVtb3ZlU2VsZWN0UGFydChzZWxlY3RQYXJ0czogYW55LCBwYXJ0OiB7IGRlZjogeyB0eXBlOiBzdHJpbmcgfSB9KSB7XG4gICAgaWYgKHBhcnQuZGVmLnR5cGUgPT09ICdjb2x1bW4nKSB7XG4gICAgICAvLyByZW1vdmUgYWxsIHBhcnRzIG9mIGNvbHVtbiB1bmxlc3MgaXRzIGxhc3QgY29sdW1uXG4gICAgICBpZiAodGhpcy5zZWxlY3RQYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsc0luZGV4ID0gaW5kZXhPZih0aGlzLnNlbGVjdFBhcnRzLCBzZWxlY3RQYXJ0cyk7XG4gICAgICAgIHRoaXMuc2VsZWN0UGFydHMuc3BsaWNlKG1vZGVsc0luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFydEluZGV4ID0gaW5kZXhPZihzZWxlY3RQYXJ0cywgcGFydCk7XG4gICAgICBzZWxlY3RQYXJ0cy5zcGxpY2UocGFydEluZGV4LCAxKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3RQYXJ0RXZlbnQoc2VsZWN0UGFydHM6IGFueSwgcGFydDogeyBkZWY6IGFueSB9LCBldnQ6IHsgbmFtZTogYW55IH0pIHtcbiAgICBzd2l0Y2ggKGV2dC5uYW1lKSB7XG4gICAgICBjYXNlICdnZXQtcGFyYW0tb3B0aW9ucyc6IHtcbiAgICAgICAgc3dpdGNoIChwYXJ0LmRlZi50eXBlKSB7XG4gICAgICAgICAgLy8gY2FzZSAnYWdncmVnYXRlJzpcbiAgICAgICAgICAvLyAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgICAgICAvLyAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQWdncmVnYXRlUXVlcnkoKSlcbiAgICAgICAgICAvLyAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHt9KSlcbiAgICAgICAgICAvLyAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgICAgICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHt9KSlcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSAncGFydC1wYXJhbS1jaGFuZ2VkJzoge1xuICAgICAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2FjdGlvbic6IHtcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RQYXJ0KHNlbGVjdFBhcnRzLCBwYXJ0KTtcbiAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZ2V0LXBhcnQtYWN0aW9ucyc6IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbeyB0ZXh0OiAnUmVtb3ZlJywgdmFsdWU6ICdyZW1vdmUtcGFydCcgfV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUdyb3VwUGFydEV2ZW50KHBhcnQ6IGFueSwgaW5kZXg6IGFueSwgZXZ0OiB7IG5hbWU6IGFueSB9KSB7XG4gICAgc3dpdGNoIChldnQubmFtZSkge1xuICAgICAgY2FzZSAnZ2V0LXBhcmFtLW9wdGlvbnMnOiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgpKVxuICAgICAgICAgIC50aGVuKHRoaXMudHJhbnNmb3JtVG9TZWdtZW50cyh7fSkpXG4gICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3BhcnQtcGFyYW0tY2hhbmdlZCc6IHtcbiAgICAgICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdhY3Rpb24nOiB7XG4gICAgICAgIHRoaXMucmVtb3ZlR3JvdXAocGFydCwgaW5kZXgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdnZXQtcGFydC1hY3Rpb25zJzoge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFt7IHRleHQ6ICdSZW1vdmUnLCB2YWx1ZTogJ3JlbW92ZS1wYXJ0JyB9XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkR3JvdXAocGFydFR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGxldCBwYXJhbXMgPSBbdmFsdWVdO1xuICAgIGlmIChwYXJ0VHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICBwYXJhbXMgPSBbJyRfX2ludGVydmFsJywgJ25vbmUnXTtcbiAgICB9XG4gICAgY29uc3QgcGFydE1vZGVsID0gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiBwYXJ0VHlwZSwgcGFyYW1zOiBwYXJhbXMgfSk7XG5cbiAgICBpZiAocGFydFR5cGUgPT09ICd0aW1lJykge1xuICAgICAgLy8gcHV0IHRpbWVHcm91cCBhdCBzdGFydFxuICAgICAgdGhpcy5ncm91cFBhcnRzLnNwbGljZSgwLCAwLCBwYXJ0TW9kZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyb3VwUGFydHMucHVzaChwYXJ0TW9kZWwpO1xuICAgIH1cblxuICAgIC8vIGFkZCBhZ2dyZWdhdGVzIHdoZW4gYWRkaW5nIGdyb3VwIGJ5XG4gICAgZm9yIChjb25zdCBzZWxlY3RQYXJ0cyBvZiB0aGlzLnNlbGVjdFBhcnRzKSB7XG4gICAgICBpZiAoIXNlbGVjdFBhcnRzLnNvbWUoKHBhcnQpID0+IHBhcnQuZGVmLnR5cGUgPT09ICdhZ2dyZWdhdGUnKSkge1xuICAgICAgICBjb25zdCBhZ2dyZWdhdGUgPSBzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6ICdhZ2dyZWdhdGUnLCBwYXJhbXM6IFsnYXZnJ10gfSk7XG4gICAgICAgIHNlbGVjdFBhcnRzLnNwbGljZSgxLCAwLCBhZ2dyZWdhdGUpO1xuICAgICAgICBpZiAoIXNlbGVjdFBhcnRzLnNvbWUoKHBhcnQpID0+IHBhcnQuZGVmLnR5cGUgPT09ICdhbGlhcycpKSB7XG4gICAgICAgICAgY29uc3QgYWxpYXMgPSBzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6ICdhbGlhcycsIHBhcmFtczogW3NlbGVjdFBhcnRzWzBdLnBhcnQucGFyYW1zWzBdXSB9KTtcbiAgICAgICAgICBzZWxlY3RQYXJ0cy5wdXNoKGFsaWFzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgfVxuXG4gIHJlbW92ZUdyb3VwKHBhcnQ6IHsgZGVmOiB7IHR5cGU6IHN0cmluZyB9IH0sIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAocGFydC5kZWYudHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICAvLyByZW1vdmUgYWdncmVnYXRpb25zXG4gICAgICB0aGlzLnNlbGVjdFBhcnRzID0gbWFwKHRoaXMuc2VsZWN0UGFydHMsIChzOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcihzLCAocGFydDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHBhcnQuZGVmLnR5cGUgPT09ICdhZ2dyZWdhdGUnIHx8IHBhcnQuZGVmLnR5cGUgPT09ICdwZXJjZW50aWxlJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmdyb3VwUGFydHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gIH1cblxuICBoYW5kbGVXaGVyZVBhcnRFdmVudCh3aGVyZVBhcnRzOiBhbnksIHBhcnQ6IGFueSwgZXZ0OiBhbnksIGluZGV4OiBhbnkpIHtcbiAgICBzd2l0Y2ggKGV2dC5uYW1lKSB7XG4gICAgICBjYXNlICdnZXQtcGFyYW0tb3B0aW9ucyc6IHtcbiAgICAgICAgc3dpdGNoIChldnQucGFyYW0ubmFtZSkge1xuICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgICAgICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgpKVxuICAgICAgICAgICAgICAudGhlbih0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoe30pKVxuICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIGlmIChbJ2ludCcsICdiaWdpbnQnLCAnZG91YmxlJywgJ2RhdGV0aW1lJ10uaW5kZXhPZihwYXJ0LmRhdGF0eXBlKSA+IC0xKSB7XG4gICAgICAgICAgICAgIC8vIGRvbid0IGRvIHZhbHVlIGxvb2t1cHMgZm9yIG51bWVyaWNhbCBmaWVsZHNcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlXG4gICAgICAgICAgICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkVmFsdWVRdWVyeShwYXJ0LnBhcmFtc1swXSkpXG4gICAgICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoe1xuICAgICAgICAgICAgICAgICAgICBhZGRUZW1wbGF0ZVZhcnM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlUXVvdGVyOiAodjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNb2RlbC5xdW90ZUxpdGVyYWwodik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ29wJzpcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy51aVNlZ21lbnRTcnYubmV3T3BlcmF0b3JzKHRoaXMubWV0YUJ1aWxkZXIuZ2V0T3BlcmF0b3JzKHBhcnQuZGF0YXR5cGUpKSk7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXNlICdwYXJ0LXBhcmFtLWNoYW5nZWQnOiB7XG4gICAgICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgICAgICAgdGhpcy5kYXRhc291cmNlLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkRGF0YXR5cGVRdWVyeShwYXJ0LnBhcmFtc1swXSkpLnRoZW4oKGQ6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcGFydC5kYXRhdHlwZSA9IGRbMF0udGV4dDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdhY3Rpb24nOiB7XG4gICAgICAgIC8vIHJlbW92ZSBlbGVtZW50XG4gICAgICAgIHdoZXJlUGFydHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdnZXQtcGFydC1hY3Rpb25zJzoge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFt7IHRleHQ6ICdSZW1vdmUnLCB2YWx1ZTogJ3JlbW92ZS1wYXJ0JyB9XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0V2hlcmVPcHRpb25zKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcbiAgICBpZiAodGhpcy5xdWVyeU1vZGVsLmhhc1VuaXhFcG9jaFRpbWVjb2x1bW4oKSkge1xuICAgICAgb3B0aW9ucy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB0eXBlOiAnbWFjcm8nLCB2YWx1ZTogJyRfX3VuaXhFcG9jaEZpbHRlcicgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLnB1c2godGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHR5cGU6ICdtYWNybycsIHZhbHVlOiAnJF9fdGltZUZpbHRlcicgfSkpO1xuICAgIH1cbiAgICBvcHRpb25zLnB1c2godGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHR5cGU6ICdleHByZXNzaW9uJywgdmFsdWU6ICdFeHByZXNzaW9uJyB9KSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShvcHRpb25zKTtcbiAgfVxuXG4gIGFkZFdoZXJlQWN0aW9uKHBhcnQ6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgIHN3aXRjaCAodGhpcy53aGVyZUFkZC50eXBlKSB7XG4gICAgICBjYXNlICdtYWNybyc6IHtcbiAgICAgICAgY29uc3QgcGFydE1vZGVsID0gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiAnbWFjcm8nLCBuYW1lOiB0aGlzLndoZXJlQWRkLnZhbHVlLCBwYXJhbXM6IFtdIH0pO1xuICAgICAgICBpZiAodGhpcy53aGVyZVBhcnRzLmxlbmd0aCA+PSAxICYmIHRoaXMud2hlcmVQYXJ0c1swXS5kZWYudHlwZSA9PT0gJ21hY3JvJykge1xuICAgICAgICAgIC8vIHJlcGxhY2UgY3VycmVudCBtYWNyb1xuICAgICAgICAgIHRoaXMud2hlcmVQYXJ0c1swXSA9IHBhcnRNb2RlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLndoZXJlUGFydHMuc3BsaWNlKDAsIDAsIHBhcnRNb2RlbCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRoaXMud2hlcmVQYXJ0cy5wdXNoKHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ2V4cHJlc3Npb24nLCBwYXJhbXM6IFsndmFsdWUnLCAnPScsICd2YWx1ZSddIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gICAgdGhpcy5yZXNldFBsdXNCdXR0b24odGhpcy53aGVyZUFkZCk7XG4gICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gIH1cblxuICBnZXRHcm91cE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQ29sdW1uUXVlcnkoJ2dyb3VwJykpXG4gICAgICAudGhlbigodGFnczogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcbiAgICAgICAgaWYgKCF0aGlzLnF1ZXJ5TW9kZWwuaGFzVGltZUdyb3VwKCkpIHtcbiAgICAgICAgICBvcHRpb25zLnB1c2godGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHR5cGU6ICd0aW1lJywgdmFsdWU6ICd0aW1lKCRfX2ludGVydmFsLG5vbmUpJyB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCB0YWcgb2YgdGFncykge1xuICAgICAgICAgIG9wdGlvbnMucHVzaCh0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdHlwZTogJ2NvbHVtbicsIHZhbHVlOiB0YWcudGV4dCB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFkZEdyb3VwQWN0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5ncm91cEFkZC52YWx1ZSkge1xuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aGlzLmFkZEdyb3VwKHRoaXMuZ3JvdXBBZGQudHlwZSwgdGhpcy5ncm91cEFkZC52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5yZXNldFBsdXNCdXR0b24odGhpcy5ncm91cEFkZCk7XG4gICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gIH1cblxuICBoYW5kbGVRdWVyeUVycm9yKGVycjogYW55KTogYW55W10ge1xuICAgIHRoaXMuZXJyb3IgPSBlcnIubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGlzc3VlIG1ldHJpYyBxdWVyeSc7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBbm5vdGF0aW9uRXZlbnQsIERhdGFGcmFtZSwgTWV0cmljRmluZFZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlLCBGZXRjaFJlc3BvbnNlLCB0b0RhdGFRdWVyeVJlc3BvbnNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNlUGFyc2VyIHtcbiAgdHJhbnNmb3JtTWV0cmljRmluZFJlc3BvbnNlKHJhdzogRmV0Y2hSZXNwb25zZTxCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlPik6IE1ldHJpY0ZpbmRWYWx1ZVtdIHtcbiAgICBjb25zdCBmcmFtZXMgPSB0b0RhdGFRdWVyeVJlc3BvbnNlKHJhdykuZGF0YSBhcyBEYXRhRnJhbWVbXTtcblxuICAgIGlmICghZnJhbWVzIHx8ICFmcmFtZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgZnJhbWUgPSBmcmFtZXNbMF07XG5cbiAgICBjb25zdCB2YWx1ZXM6IE1ldHJpY0ZpbmRWYWx1ZVtdID0gW107XG4gICAgY29uc3QgdGV4dEZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ19fdGV4dCcpO1xuICAgIGNvbnN0IHZhbHVlRmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAnX192YWx1ZScpO1xuXG4gICAgaWYgKHRleHRGaWVsZCAmJiB2YWx1ZUZpZWxkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRGaWVsZC52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWVzLnB1c2goeyB0ZXh0OiAnJyArIHRleHRGaWVsZC52YWx1ZXMuZ2V0KGkpLCB2YWx1ZTogJycgKyB2YWx1ZUZpZWxkLnZhbHVlcy5nZXQoaSkgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlcy5wdXNoKFxuICAgICAgICAuLi5mcmFtZS5maWVsZHNcbiAgICAgICAgICAuZmxhdE1hcCgoZikgPT4gZi52YWx1ZXMudG9BcnJheSgpKVxuICAgICAgICAgIC5tYXAoKHYpID0+ICh7XG4gICAgICAgICAgICB0ZXh0OiB2LFxuICAgICAgICAgIH0pKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHZhbHVlcy5tYXAoKHYpID0+IHYudGV4dCkpKS5tYXAoKHRleHQpID0+ICh7XG4gICAgICB0ZXh0LFxuICAgICAgdmFsdWU6IHZhbHVlcy5maW5kKCh2KSA9PiB2LnRleHQgPT09IHRleHQpPy52YWx1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBhc3luYyB0cmFuc2Zvcm1Bbm5vdGF0aW9uUmVzcG9uc2Uob3B0aW9uczogYW55LCBkYXRhOiBCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlKTogUHJvbWlzZTxBbm5vdGF0aW9uRXZlbnRbXT4ge1xuICAgIGNvbnN0IGZyYW1lcyA9IHRvRGF0YVF1ZXJ5UmVzcG9uc2UoeyBkYXRhOiBkYXRhIH0pLmRhdGEgYXMgRGF0YUZyYW1lW107XG4gICAgaWYgKCFmcmFtZXMgfHwgIWZyYW1lcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZnJhbWUgPSBmcmFtZXNbMF07XG4gICAgY29uc3QgdGltZUZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ3RpbWUnIHx8IGYubmFtZSA9PT0gJ3RpbWVfc2VjJyk7XG5cbiAgICBpZiAoIXRpbWVGaWVsZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIG1hbmRhdG9yeSB0aW1lIGNvbHVtbiAod2l0aCB0aW1lIGNvbHVtbiBhbGlhcykgaW4gYW5ub3RhdGlvbiBxdWVyeScpO1xuICAgIH1cblxuICAgIGlmIChmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAndGl0bGUnKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdGl0bGUgY29sdW1uIGZvciBhbm5vdGF0aW9ucyBpcyBkZXByZWNhdGVkLCBub3cgb25seSBhIGNvbHVtbiBuYW1lZCB0ZXh0IGlzIHJldHVybmVkJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdGltZUVuZEZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ3RpbWVlbmQnKTtcbiAgICBjb25zdCB0ZXh0RmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAndGV4dCcpO1xuICAgIGNvbnN0IHRhZ3NGaWVsZCA9IGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICd0YWdzJyk7XG5cbiAgICBjb25zdCBsaXN0OiBBbm5vdGF0aW9uRXZlbnRbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRpbWVFbmQgPSB0aW1lRW5kRmllbGQgJiYgdGltZUVuZEZpZWxkLnZhbHVlcy5nZXQoaSkgPyBNYXRoLmZsb29yKHRpbWVFbmRGaWVsZC52YWx1ZXMuZ2V0KGkpKSA6IHVuZGVmaW5lZDtcbiAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgIGFubm90YXRpb246IG9wdGlvbnMuYW5ub3RhdGlvbixcbiAgICAgICAgdGltZTogTWF0aC5mbG9vcih0aW1lRmllbGQudmFsdWVzLmdldChpKSksXG4gICAgICAgIHRpbWVFbmQsXG4gICAgICAgIHRleHQ6IHRleHRGaWVsZCAmJiB0ZXh0RmllbGQudmFsdWVzLmdldChpKSA/IHRleHRGaWVsZC52YWx1ZXMuZ2V0KGkpIDogJycsXG4gICAgICAgIHRhZ3M6XG4gICAgICAgICAgdGFnc0ZpZWxkICYmIHRhZ3NGaWVsZC52YWx1ZXMuZ2V0KGkpXG4gICAgICAgICAgICA/IHRhZ3NGaWVsZC52YWx1ZXNcbiAgICAgICAgICAgICAgICAuZ2V0KGkpXG4gICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgIC5zcGxpdCgvXFxzKixcXHMqLylcbiAgICAgICAgICAgIDogW10sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3FsUGFydERlZiwgU3FsUGFydCB9IGZyb20gJ2FwcC9hbmd1bGFyL2NvbXBvbmVudHMvc3FsX3BhcnQvc3FsX3BhcnQnO1xuXG5jb25zdCBpbmRleDogYW55W10gPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlUGFydChwYXJ0OiBhbnkpOiBhbnkge1xuICBjb25zdCBkZWYgPSBpbmRleFtwYXJ0LnR5cGVdO1xuICBpZiAoIWRlZikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTcWxQYXJ0KHBhcnQsIGRlZik7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyKG9wdGlvbnM6IGFueSkge1xuICBpbmRleFtvcHRpb25zLnR5cGVdID0gbmV3IFNxbFBhcnREZWYob3B0aW9ucyk7XG59XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2NvbHVtbicsXG4gIHN0eWxlOiAnbGFiZWwnLFxuICBwYXJhbXM6IFt7IHR5cGU6ICdjb2x1bW4nLCBkeW5hbWljTG9va3VwOiB0cnVlIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3ZhbHVlJ10sXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnZXhwcmVzc2lvbicsXG4gIHN0eWxlOiAnZXhwcmVzc2lvbicsXG4gIGxhYmVsOiAnRXhwcjonLFxuICBwYXJhbXM6IFtcbiAgICB7IG5hbWU6ICdsZWZ0JywgdHlwZTogJ3N0cmluZycsIGR5bmFtaWNMb29rdXA6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdvcCcsIHR5cGU6ICdzdHJpbmcnLCBkeW5hbWljTG9va3VwOiB0cnVlIH0sXG4gICAgeyBuYW1lOiAncmlnaHQnLCB0eXBlOiAnc3RyaW5nJywgZHluYW1pY0xvb2t1cDogdHJ1ZSB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3ZhbHVlJywgJz0nLCAndmFsdWUnXSxcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdtYWNybycsXG4gIHN0eWxlOiAnbGFiZWwnLFxuICBsYWJlbDogJ01hY3JvOicsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2FnZ3JlZ2F0ZScsXG4gIHN0eWxlOiAnbGFiZWwnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnbmFtZScsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIG9wdGlvbnM6IFsnYXZnJywgJ2NvdW50JywgJ21pbicsICdtYXgnLCAnc3VtJywgJ3N0ZGRldicsICd2YXJpYW5jZSddLFxuICAgIH0sXG4gIF0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnYXZnJ10sXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnYWxpYXMnLFxuICBzdHlsZTogJ2xhYmVsJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbmFtZScsIHR5cGU6ICdzdHJpbmcnLCBxdW90ZTogJ2RvdWJsZScgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnYWxpYXMnXSxcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICd0aW1lJyxcbiAgc3R5bGU6ICdmdW5jdGlvbicsXG4gIGxhYmVsOiAndGltZScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdpbnRlcnZhbCcsXG4gICAgICB0eXBlOiAnaW50ZXJ2YWwnLFxuICAgICAgb3B0aW9uczogWyckX19pbnRlcnZhbCcsICcxcycsICcxMHMnLCAnMW0nLCAnNW0nLCAnMTBtJywgJzE1bScsICcxaCddLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2ZpbGwnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBvcHRpb25zOiBbJ25vbmUnLCAnTlVMTCcsICdwcmV2aW91cycsICcwJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWyckX19pbnRlcnZhbCcsICdub25lJ10sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGU6IGNyZWF0ZVBhcnQsXG59O1xuIiwiaW1wb3J0IHsgbWFrZUNsYXNzRVM1Q29tcGF0aWJsZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgbG9hZFBsdWdpbkNzcyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgTWV0cmljc1BhbmVsQ3RybCBhcyBNZXRyaWNzUGFuZWxDdHJsRVM2IH0gZnJvbSAnYXBwL2FuZ3VsYXIvcGFuZWwvbWV0cmljc19wYW5lbF9jdHJsJztcbmltcG9ydCB7IFBhbmVsQ3RybCBhcyBQYW5lbEN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsJztcbmltcG9ydCB7IFF1ZXJ5Q3RybCBhcyBRdWVyeUN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9xdWVyeV9jdHJsJztcblxuY29uc3QgUGFuZWxDdHJsID0gbWFrZUNsYXNzRVM1Q29tcGF0aWJsZShQYW5lbEN0cmxFUzYpO1xuY29uc3QgTWV0cmljc1BhbmVsQ3RybCA9IG1ha2VDbGFzc0VTNUNvbXBhdGlibGUoTWV0cmljc1BhbmVsQ3RybEVTNik7XG5jb25zdCBRdWVyeUN0cmwgPSBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlKFF1ZXJ5Q3RybEVTNik7XG5cbmV4cG9ydCB7IFBhbmVsQ3RybCwgTWV0cmljc1BhbmVsQ3RybCwgUXVlcnlDdHJsLCBsb2FkUGx1Z2luQ3NzIH07XG4iXSwibmFtZXMiOlsiZGVwcmVjYXRpb25XYXJuaW5nIiwidXJsVXRpbCIsImxvY2F0aW9uU2VhcmNoVG9PYmplY3QiLCJsb2NhdGlvblNlcnZpY2UiLCJuYXZpZ2F0aW9uTG9nZ2VyIiwiREVGQVVMVF9QT1JUUyIsImh0dHAiLCJodHRwcyIsImZ0cCIsIkFuZ3VsYXJMb2NhdGlvbldyYXBwZXIiLCJjb25zdHJ1Y3RvciIsImFic1VybCIsIndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyIsImhhc2giLCJob3N0IiwicGF0aCIsInBvcnQiLCJwcm90b2NvbCIsInJlcGxhY2UiLCJzZWFyY2giLCJzdGF0ZSIsInVybCIsImZuIiwicmVwbGFjZW1lbnQiLCJzZWxmIiwid3JhcHBlciIsIm5hbWUiLCJhcHBseSIsImFyZ3VtZW50cyIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwibmV3SGFzaCIsImdldExvY2F0aW9uIiwic2xpY2UiLCJFcnJvciIsIlVSTCIsImhyZWYiLCJob3N0bmFtZSIsInBhdGhuYW1lIiwidW5kZWZpbmVkIiwicGFyc2VkUGF0aCIsIlN0cmluZyIsInN0YXJ0c1dpdGgiLCJwdXNoIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJwYXJhbVZhbHVlIiwiZ2V0U2VhcmNoT2JqZWN0IiwicGFydGlhbCIsIm5ld1F1ZXJ5Iiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsInVwZGF0ZWRVcmwiLCJyZW5kZXJVcmwiLCJuZXdVcmwiLCJ0cmltIiwiY2xvbmUiLCJTcWxQYXJ0RGVmIiwib3B0aW9ucyIsInR5cGUiLCJsYWJlbCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwic3R5bGUiLCJ3cmFwT3BlbiIsIndyYXBDbG9zZSIsInNlcGFyYXRvciIsInBhcmFtcyIsImRlZmF1bHRQYXJhbXMiLCJTcWxQYXJ0IiwicGFydCIsImRlZiIsIm1lc3NhZ2UiLCJkYXRhdHlwZSIsInVwZGF0ZVBhcmFtIiwic3RyVmFsdWUiLCJpbmRleCIsIm9wdGlvbmFsIiwic3BsaWNlIiwiaXNBcnJheSIsIkxvYWRpbmdTdGF0ZSIsIlBhbmVsRXZlbnRzIiwidG9EYXRhRnJhbWVEVE8iLCJ0b0xlZ2FjeVJlc3BvbnNlRGF0YSIsIlBhbmVsQ3RybCIsImFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzIiwiTWV0cmljc1BhbmVsQ3RybCIsIiRzY29wZSIsIiRpbmplY3RvciIsIm5leHQiLCJkYXRhIiwicGFuZWxEYXRhIiwibG9hZGluZyIsInByb2Nlc3NEYXRhRXJyb3IiLCJlcnJvciIsIkxvYWRpbmciLCJhbmd1bGFyRGlydHlDaGVjayIsInJlcXVlc3QiLCJ0aW1lSW5mbyIsInRpbWVSYW5nZSIsInJhbmdlIiwidXNlRGF0YUZyYW1lcyIsImhhbmRsZURhdGFGcmFtZXMiLCJzZXJpZXMiLCJsZWdhY3kiLCJtYXAiLCJ2IiwiaGFuZGxlUXVlcnlSZXN1bHQiLCJjb250ZXh0U3J2IiwiZ2V0IiwiZGF0YXNvdXJjZVNydiIsInRpbWVTcnYiLCJ0ZW1wbGF0ZVNydiIsInBhbmVsIiwiZGF0YXNvdXJjZSIsImV2ZW50cyIsIm9uIiwicmVmcmVzaCIsIm9uTWV0cmljc1BhbmVsUmVmcmVzaCIsImJpbmQiLCJwYW5lbFRlYXJkb3duIiwib25QYW5lbFRlYXJEb3duIiwiY29tcG9uZW50RGlkTW91bnQiLCJvbk1ldHJpY3NQYW5lbE1vdW50ZWQiLCJxdWVyeVJ1bm5lciIsImdldFF1ZXJ5UnVubmVyIiwicXVlcnlTdWJzY3JpcHRpb24iLCJnZXREYXRhIiwid2l0aFRyYW5zZm9ybXMiLCJ3aXRoRmllbGRDb25maWciLCJzdWJzY3JpYmUiLCJwYW5lbERhdGFPYnNlcnZlciIsInVuc3Vic2NyaWJlIiwib3RoZXJQYW5lbEluRnVsbHNjcmVlbk1vZGUiLCJzbmFwc2hvdERhdGEiLCJ1cGRhdGVUaW1lUmFuZ2UiLCJEb25lIiwiJHRpbWVvdXQiLCJlbWl0IiwiZGF0YVNuYXBzaG90TG9hZCIsInNjb3BlZFZhcnMiLCJ0aGVuIiwiaXNzdWVRdWVyaWVzIiwiY2F0Y2giLCJlcnIiLCJjYW5jZWxsZWQiLCJjb25zb2xlIiwibG9nIiwiJHJvb3QiLCIkJHBoYXNlIiwiJGRpZ2VzdCIsIm5ld1RpbWVEYXRhIiwicnVuIiwicXVlcmllcyIsInRhcmdldHMiLCJwYW5lbElkIiwiaWQiLCJkYXNoYm9hcmRJZCIsImRhc2hib2FyZCIsInRpbWV6b25lIiwiZ2V0VGltZXpvbmUiLCJtYXhEYXRhUG9pbnRzIiwid2lkdGgiLCJtaW5JbnRlcnZhbCIsImludGVydmFsIiwiY2FjaGVUaW1lb3V0IiwidHJhbnNmb3JtYXRpb25zIiwic25hcHNob3QiLCJmcmFtZSIsImRhdGFGcmFtZXNSZWNlaXZlZCIsInJlc3VsdCIsImRhdGFSZWNlaXZlZCIsImlzU3RyaW5nIiwiRXZlbnRCdXNTcnYiLCJjb25maWciLCJwcm9maWxlciIsInBsdWdpbiIsIiRwYXJlbnQiLCJlZGl0b3JUYWJzIiwiJGxvY2F0aW9uIiwidGltaW5nIiwicGFuZWxzIiwicGx1Z2luSWQiLCJwbHVnaW5OYW1lIiwiJG9uIiwicGFuZWxEaWRNb3VudCIsImluaXRpYWxpemVkIiwicGFuZWxJbml0aWFsaXplZCIsInJlbmRlcmluZ0NvbXBsZXRlZCIsInB1Ymxpc2hBcHBFdmVudCIsImV2ZW50IiwicGF5bG9hZCIsImFwcEV2ZW50IiwiaW5pdEVkaXRNb2RlIiwiZWRpdE1vZGVJbml0aWF0ZWQiLCJlZGl0TW9kZUluaXRpYWxpemVkIiwiYWRkRWRpdG9yVGFiIiwidGl0bGUiLCJkaXJlY3RpdmVGbiIsImljb24iLCJlZGl0b3JUYWIiLCJ0ZW1wbGF0ZVVybCIsImdldEV4dGVuZGVkTWVudSIsIm1lbnUiLCJpbml0UGFuZWxBY3Rpb25zIiwiZ2V0QWRkaXRpb25hbE1lbnVJdGVtcyIsIm90aGVyUGFuZWxJbkZ1bGxzY3JlZW4iLCJyZW5kZXIiLCJpbmRleE9mIiwiUXVlcnlDdHJsIiwicGFuZWxDdHJsIiwiY3RybCIsInRhcmdldCIsImlzTGFzdFF1ZXJ5IiwiUGFzc3dvcmRGaWVsZEVudW0iLCJjcmVhdGVSZXNldEhhbmRsZXIiLCJmaWVsZCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNlY3VyZUpzb25GaWVsZHMiLCJzZWN1cmVKc29uRGF0YSIsImNyZWF0ZUNoYW5nZUhhbmRsZXIiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJfbWFwIiwibGFzdFZhbHVlRnJvbSIsIm9mIiwiY2F0Y2hFcnJvciIsIm1hcFRvIiwiRGF0YVNvdXJjZVdpdGhCYWNrZW5kIiwiZ2V0QmFja2VuZFNydiIsInRvVGVzdGluZ1N0YXR1cyIsImdldFRlbXBsYXRlU3J2IiwiTXlTUUxRdWVyeU1vZGVsIiwiZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyIiwiUmVzcG9uc2VQYXJzZXIiLCJNeXNxbERhdGFzb3VyY2UiLCJpbnN0YW5jZVNldHRpbmdzIiwidmFyaWFibGUiLCJtdWx0aSIsImluY2x1ZGVBbGwiLCJxdWVyeU1vZGVsIiwicXVvdGVMaXRlcmFsIiwicXVvdGVkVmFsdWVzIiwiam9pbiIsInJlc3BvbnNlUGFyc2VyIiwic2V0dGluZ3NEYXRhIiwianNvbkRhdGEiLCJ0aW1lSW50ZXJ2YWwiLCJpbnRlcnBvbGF0ZVZhcmlhYmxlc0luUXVlcmllcyIsImV4cGFuZGVkUXVlcmllcyIsInF1ZXJ5IiwiZXhwYW5kZWRRdWVyeSIsImdldFJlZiIsInJhd1NxbCIsImludGVycG9sYXRlVmFyaWFibGUiLCJyYXdRdWVyeSIsImZpbHRlclF1ZXJ5IiwiaGlkZSIsImFwcGx5VGVtcGxhdGVWYXJpYWJsZXMiLCJyZWZJZCIsImZvcm1hdCIsImFubm90YXRpb25RdWVyeSIsImFubm90YXRpb24iLCJQcm9taXNlIiwicmVqZWN0IiwiZmV0Y2giLCJtZXRob2QiLCJmcm9tIiwidmFsdWVPZiIsInRvU3RyaW5nIiwidG8iLCJyZXF1ZXN0SWQiLCJwaXBlIiwicmVzIiwidHJhbnNmb3JtQW5ub3RhdGlvblJlc3BvbnNlIiwibWV0cmljRmluZFF1ZXJ5Iiwib3B0aW9uYWxPcHRpb25zIiwid2lsZGNhcmRDaGFyIiwiaW50ZXJwb2xhdGVkUXVlcnkiLCJyc3AiLCJ0cmFuc2Zvcm1NZXRyaWNGaW5kUmVzcG9uc2UiLCJ0ZXN0RGF0YXNvdXJjZSIsImludGVydmFsTXMiLCJzdGF0dXMiLCJ0YXJnZXRDb250YWluc1RlbXBsYXRlIiwiYnVpbGRRdWVyeSIsImNvbnRhaW5zVGVtcGxhdGUiLCJNeXNxbE1ldGFRdWVyeSIsImdldE9wZXJhdG9ycyIsInF1b3RlSWRlbnRBc0xpdGVyYWwiLCJ1bnF1b3RlSWRlbnRpZmllciIsImZpbmRNZXRyaWNUYWJsZSIsImJ1aWxkVGFibGVDb25zdHJhaW50IiwidGFibGUiLCJpbmNsdWRlcyIsInBhcnRzIiwic3BsaXQiLCJidWlsZFRhYmxlUXVlcnkiLCJidWlsZENvbHVtblF1ZXJ5IiwidGltZUNvbHVtbiIsImJ1aWxkVmFsdWVRdWVyeSIsImNvbHVtbiIsImJ1aWxkRGF0YXR5cGVRdWVyeSIsIkRhdGFTb3VyY2VQbHVnaW4iLCJNeXNxbFF1ZXJ5Q3RybCIsIk15c3FsQ29uZmlnQ3RybCIsIm9uUGFzc3dvcmRSZXNldCIsIlBhc3N3b3JkIiwib25QYXNzd29yZENoYW5nZSIsImRlZmF1bHRRdWVyeSIsIk15c3FsQW5ub3RhdGlvbnNRdWVyeUN0cmwiLCJEYXRhc291cmNlIiwiQ29uZmlnQ3RybCIsIkFubm90YXRpb25zUXVlcnlDdHJsIiwic2V0UXVlcnlDdHJsIiwic2V0Q29uZmlnQ3RybCIsInNldEFubm90YXRpb25RdWVyeUN0cmwiLCJmaW5kIiwibWV0cmljQ29sdW1uIiwiZ3JvdXAiLCJ3aGVyZSIsInNlbGVjdCIsImludGVycG9sYXRlUXVlcnlTdHIiLCJxdW90ZUlkZW50aWZpZXIiLCJlc2NhcGVMaXRlcmFsIiwiaGFzVGltZUdyb3VwIiwiZyIsImhhc01ldHJpY0NvbHVtbiIsImRlZmF1bHRGb3JtYXRGbiIsImVzY2FwZWRWYWx1ZXMiLCJpbnRlcnBvbGF0ZSIsImhhc1VuaXhFcG9jaFRpbWVjb2x1bW4iLCJ0aW1lQ29sdW1uVHlwZSIsImJ1aWxkVGltZUNvbHVtbiIsImFsaWFzIiwidGltZUdyb3VwIiwibWFjcm8iLCJhcmdzIiwiYnVpbGRNZXRyaWNDb2x1bW4iLCJidWlsZFZhbHVlQ29sdW1ucyIsImJ1aWxkVmFsdWVDb2x1bW4iLCJjb2x1bW5OYW1lIiwiYWdncmVnYXRlIiwiZnVuYyIsImJ1aWxkV2hlcmVDbGF1c2UiLCJjb25kaXRpb25zIiwidGFnIiwiYnVpbGRHcm91cENsYXVzZSIsImdyb3VwU2VjdGlvbiIsImkiLCJmaWx0ZXIiLCJmaW5kSW5kZXgiLCJhcHBFdmVudHMiLCJTaG93Q29uZmlybU1vZGFsRXZlbnQiLCJzcWxQYXJ0IiwidWlTZWdtZW50U3J2IiwibWV0YUJ1aWxkZXIiLCJ1cGRhdGVQcm9qZWN0aW9uIiwiZm9ybWF0cyIsInRleHQiLCJzZWdtZW50IiwibmV3U2VnbWVudCIsInRhYmxlU2VnbWVudCIsImh0bWwiLCJ0aW1lQ29sdW1uU2VnbWVudCIsInVwZGF0ZVJhd1NxbEFuZFJlZnJlc2giLCJmYWtlIiwibWV0cmljQ29sdW1uU2VnbWVudCIsImJ1aWxkU2VsZWN0TWVudSIsIndoZXJlQWRkIiwibmV3UGx1c0J1dHRvbiIsImdyb3VwQWRkIiwib25EYXRhUmVjZWl2ZWQiLCJkYXRhRXJyb3IiLCJvbkRhdGFFcnJvciIsInNlbGVjdFBhcnRzIiwiY3JlYXRlIiwibiIsIndoZXJlUGFydHMiLCJncm91cFBhcnRzIiwidXBkYXRlUGVyc2lzdGVkUGFydHMiLCJhZ2dyZWdhdGVzIiwic3VibWVudSIsInNlbGVjdE1lbnUiLCJ0b2dnbGVFZGl0b3JNb2RlIiwicHVibGlzaCIsInRleHQyIiwieWVzVGV4dCIsIm9uQ29uZmlybSIsIiRldmFsQXN5bmMiLCJyZXNldFBsdXNCdXR0b24iLCJidXR0b24iLCJwbHVzQnV0dG9uIiwiZ2V0VGFibGVTZWdtZW50cyIsInRyYW5zZm9ybVRvU2VnbWVudHMiLCJoYW5kbGVRdWVyeUVycm9yIiwidGFibGVDaGFuZ2VkIiwidGFzazEiLCJyIiwidGltZUNvbHVtbkNoYW5nZWQiLCJ0YXNrMiIsImFsbCIsImdldFRpbWVDb2x1bW5TZWdtZW50cyIsInBhcnRNb2RlbCIsImdldE1ldHJpY0NvbHVtblNlZ21lbnRzIiwiYWRkTm9uZSIsIm1ldHJpY0NvbHVtbkNoYW5nZWQiLCJkYXRhTGlzdCIsImxhc3RRdWVyeUVycm9yIiwibGFzdFF1ZXJ5TWV0YSIsIm1ldGEiLCJyZXN1bHRzIiwicXVlcnlSZXMiLCJzZWdtZW50cyIsImV4cGFuZGFibGUiLCJhZGRUZW1wbGF0ZVZhcnMiLCJnZXRWYXJpYWJsZXMiLCJ0ZW1wbGF0ZVF1b3RlciIsInVuc2hpZnQiLCJmaW5kQWdncmVnYXRlSW5kZXgiLCJwIiwiZmluZFdpbmRvd0luZGV4IiwiYWRkU2VsZWN0UGFydCIsIml0ZW0iLCJzdWJJdGVtIiwicGFydFR5cGUiLCJhZGRBbGlhcyIsImFkZEdyb3VwIiwiYWdnSW5kZXgiLCJ3aW5kb3dJbmRleCIsInJlbW92ZVNlbGVjdFBhcnQiLCJtb2RlbHNJbmRleCIsInBhcnRJbmRleCIsImhhbmRsZVNlbGVjdFBhcnRFdmVudCIsImV2dCIsInJlc29sdmUiLCJoYW5kbGVHcm91cFBhcnRFdmVudCIsInJlbW92ZUdyb3VwIiwic29tZSIsInMiLCJoYW5kbGVXaGVyZVBhcnRFdmVudCIsInBhcmFtIiwibmV3T3BlcmF0b3JzIiwiZCIsImdldFdoZXJlT3B0aW9ucyIsImFkZFdoZXJlQWN0aW9uIiwiZ2V0R3JvdXBPcHRpb25zIiwidGFncyIsImFkZEdyb3VwQWN0aW9uIiwidG9EYXRhUXVlcnlSZXNwb25zZSIsInJhdyIsImZyYW1lcyIsInZhbHVlcyIsInRleHRGaWVsZCIsImZpZWxkcyIsImYiLCJ2YWx1ZUZpZWxkIiwiZmxhdE1hcCIsInRvQXJyYXkiLCJBcnJheSIsIlNldCIsInRpbWVGaWVsZCIsInRpbWVFbmRGaWVsZCIsInRhZ3NGaWVsZCIsImxpc3QiLCJ0aW1lRW5kIiwiTWF0aCIsImZsb29yIiwidGltZSIsImNyZWF0ZVBhcnQiLCJyZWdpc3RlciIsImR5bmFtaWNMb29rdXAiLCJxdW90ZSIsIm1ha2VDbGFzc0VTNUNvbXBhdGlibGUiLCJsb2FkUGx1Z2luQ3NzIiwiTWV0cmljc1BhbmVsQ3RybEVTNiIsIlBhbmVsQ3RybEVTNiIsIlF1ZXJ5Q3RybEVTNiJdLCJzb3VyY2VSb290IjoiIn0=