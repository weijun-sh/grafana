"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["postgresPlugin"],{

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

/***/ "./public/app/plugins/datasource/postgres/config_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostgresConfigCtrl": () => (/* binding */ PostgresConfigCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/datasources/utils/passwordHandlers.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class PostgresConfigCtrl {
  /** @ngInject */
  constructor($scope, datasourceSrv) {
    _defineProperty(this, "datasourceSrv", void 0);

    _defineProperty(this, "showTimescaleDBHelp", void 0);

    _defineProperty(this, "onPasswordReset", void 0);

    _defineProperty(this, "onPasswordChange", void 0);

    _defineProperty(this, "postgresVersions", [{
      name: '9.3',
      value: 903
    }, {
      name: '9.4',
      value: 904
    }, {
      name: '9.5',
      value: 905
    }, {
      name: '9.6',
      value: 906
    }, {
      name: '10',
      value: 1000
    }, {
      name: '11',
      value: 1100
    }, {
      name: '12+',
      value: 1200
    }]);

    this.current = $scope.ctrl.current;
    this.datasourceSrv = datasourceSrv;
    this.current.jsonData.sslmode = this.current.jsonData.sslmode || 'verify-full';
    this.current.jsonData.tlsConfigurationMethod = this.current.jsonData.tlsConfigurationMethod || 'file-path';
    this.current.jsonData.postgresVersion = this.current.jsonData.postgresVersion || 903;
    this.showTimescaleDBHelp = false;
    this.autoDetectFeatures();
    this.onPasswordReset = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.createResetHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.PasswordFieldEnum.Password);
    this.onPasswordChange = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.createChangeHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_1__.PasswordFieldEnum.Password);
    this.tlsModeMapping();
  }

  autoDetectFeatures() {
    if (!this.current.id) {
      return;
    }

    this.datasourceSrv.loadDatasource(this.current.name).then(ds => {
      return ds.getVersion().then(version => {
        version = Number(version[0].text); // timescaledb is only available for 9.6+

        if (version >= 906) {
          ds.getTimescaleDBVersion().then(version => {
            if (version.length === 1) {
              this.current.jsonData.timescaledb = true;
            }
          });
        }

        const major = Math.trunc(version / 100);
        const minor = version % 100;
        let name = String(major);

        if (version < 1000) {
          name = String(major) + '.' + String(minor);
        }

        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.postgresVersions, p => p.value === version)) {
          this.postgresVersions.push({
            name: name,
            value: version
          });
        }

        this.current.jsonData.postgresVersion = version;
      });
    });
  }

  toggleTimescaleDBHelp() {
    this.showTimescaleDBHelp = !this.showTimescaleDBHelp;
  }

  tlsModeMapping() {
    if (this.current.jsonData.sslmode === 'disable') {
      this.current.jsonData.tlsAuth = false;
      this.current.jsonData.tlsAuthWithCACert = false;
      this.current.jsonData.tlsSkipVerify = true;
    } else {
      this.current.jsonData.tlsAuth = true;
      this.current.jsonData.tlsAuthWithCACert = true;
      this.current.jsonData.tlsSkipVerify = false;
    }
  } // the value portion is derived from postgres server_version_num/100


}
PostgresConfigCtrl.$inject = ["$scope", "datasourceSrv"];

_defineProperty(PostgresConfigCtrl, "templateUrl", 'partials/config.html');

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostgresDatasource": () => (/* binding */ PostgresDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/utils/queryResponse.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var app_plugins_datasource_postgres_postgres_query_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/postgres/postgres_query_model.ts");
/* harmony import */ var _features_variables_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/variables/utils.ts");
/* harmony import */ var _response_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/postgres/response_parser.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class PostgresDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)()) {
    super(instanceSettings);
    this.templateSrv = templateSrv;

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "jsonData", void 0);

    _defineProperty(this, "responseParser", void 0);

    _defineProperty(this, "queryModel", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "interpolateVariable", (value, variable) => {
      if (typeof value === 'string') {
        if (variable.multi || variable.includeAll) {
          return this.queryModel.quoteLiteral(value);
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
    this.jsonData = instanceSettings.jsonData;
    this.responseParser = new _response_parser__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.queryModel = new app_plugins_datasource_postgres_postgres_query_model__WEBPACK_IMPORTED_MODULE_4__["default"]({});
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
    const queryModel = new app_plugins_datasource_postgres_postgres_query_model__WEBPACK_IMPORTED_MODULE_4__["default"](target, this.templateSrv, scopedVars);
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

  _metaRequest(rawSql) {
    const refId = 'meta';
    const query = {
      refId: refId,
      datasource: this.getRef(),
      rawSql,
      format: 'table'
    };
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        queries: [query]
      },
      requestId: refId
    });
  }

  getVersion() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)(this._metaRequest("SELECT current_setting('server_version_num')::int/100"));
  }

  getTimescaleDBVersion() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)(this._metaRequest("SELECT extversion FROM pg_extension WHERE extname = 'timescaledb'"));
  }

  testDatasource() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.lastValueFrom)(this._metaRequest('SELECT 1')).then(() => {
      return {
        status: 'success',
        message: 'Database Connection OK'
      };
    }).catch(err => {
      return (0,_grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_2__.toTestingStatus)(err);
    });
  }

  targetContainsTemplate(target) {
    let rawSql = '';

    if (target.rawQuery) {
      rawSql = target.rawSql;
    } else {
      const query = new app_plugins_datasource_postgres_postgres_query_model__WEBPACK_IMPORTED_MODULE_4__["default"](target);
      rawSql = query.buildQuery();
    }

    rawSql = rawSql.replace('$__', '');
    return this.templateSrv.containsTemplate(rawSql);
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/meta_query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostgresMetaQuery": () => (/* binding */ PostgresMetaQuery)
/* harmony export */ });
class PostgresMetaQuery {
  constructor(target, queryModel) {
    this.target = target;
    this.queryModel = queryModel;
    this.target = target;
    this.queryModel = queryModel;
  }

  getOperators(datatype) {
    switch (datatype) {
      case 'float4':
      case 'float8':
        {
          return ['=', '!=', '<', '<=', '>', '>='];
        }

      case 'text':
      case 'varchar':
      case 'char':
        {
          return ['=', '!=', '<', '<=', '>', '>=', 'IN', 'NOT IN', 'LIKE', 'NOT LIKE', '~', '~*', '!~', '!~*'];
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
    let query = `
SELECT
	quote_ident(table_name) as table_name,
	( SELECT
	    quote_ident(column_name) as column_name
	  FROM information_schema.columns c
    WHERE
      c.table_schema = t.table_schema AND
      c.table_name = t.table_name AND
      udt_name IN ('timestamptz','timestamp')
    ORDER BY ordinal_position LIMIT 1
  ) AS time_column,
  ( SELECT
      quote_ident(column_name) AS column_name
    FROM information_schema.columns c
    WHERE
      c.table_schema = t.table_schema AND
      c.table_name = t.table_name AND
      udt_name='float8'
    ORDER BY ordinal_position LIMIT 1
  ) AS value_column
FROM information_schema.tables t
WHERE `;
    query += this.buildSchemaConstraint();
    query += ` AND
  EXISTS
  ( SELECT 1
    FROM information_schema.columns c
    WHERE
      c.table_schema = t.table_schema AND
      c.table_name = t.table_name AND
      udt_name IN ('timestamptz','timestamp')
  ) AND
  EXISTS
  ( SELECT 1
    FROM information_schema.columns c
    WHERE
      c.table_schema = t.table_schema AND
      c.table_name = t.table_name AND
      udt_name='float8'
  )
LIMIT 1
;`;
    return query;
  }

  buildSchemaConstraint() {
    // quote_ident protects hyphenated schemes
    const query = `
quote_ident(table_schema) IN (
  SELECT
    CASE WHEN trim(s[i]) = '"$user"' THEN user ELSE trim(s[i]) END
  FROM
    generate_series(
      array_lower(string_to_array(current_setting('search_path'),','),1),
      array_upper(string_to_array(current_setting('search_path'),','),1)
    ) as i,
    string_to_array(current_setting('search_path'),',') s
)`;
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
      query = this.buildSchemaConstraint();
      query += ' AND table_name = ' + this.quoteIdentAsLiteral(table);
      return query;
    }
  }

  buildTableQuery() {
    let query = 'SELECT quote_ident(table_name) FROM information_schema.tables WHERE ';
    query += this.buildSchemaConstraint();
    query += ' ORDER BY table_name';
    return query;
  }

  buildColumnQuery(type) {
    let query = 'SELECT quote_ident(column_name) FROM information_schema.columns WHERE ';
    query += this.buildTableConstraint(this.target.table);

    switch (type) {
      case 'time':
        {
          query += " AND data_type IN ('timestamp without time zone','timestamp with time zone','bigint','integer','double precision','real')";
          break;
        }

      case 'metric':
        {
          query += " AND data_type IN ('text','character','character varying')";
          break;
        }

      case 'value':
        {
          query += " AND data_type IN ('bigint','integer','double precision','real','numeric')";
          query += ' AND column_name <> ' + this.quoteIdentAsLiteral(this.target.timeColumn);
          break;
        }

      case 'group':
        {
          query += " AND data_type IN ('text','character','character varying','uuid')";
          break;
        }
    }

    query += ' ORDER BY column_name';
    return query;
  }

  buildValueQuery(column) {
    let query = 'SELECT DISTINCT quote_literal(' + column + ')';
    query += ' FROM ' + this.target.table;
    query += ' WHERE $__timeFilter(' + this.target.timeColumn + ')';
    query += ' AND ' + column + ' IS NOT NULL';
    query += ' ORDER BY 1 LIMIT 100';
    return query;
  }

  buildDatatypeQuery(column) {
    let query = 'SELECT udt_name FROM information_schema.columns WHERE ';
    query += this.buildTableConstraint(this.target.table);
    query += ' AND column_name = ' + this.quoteIdentAsLiteral(column);
    return query;
  }

  buildAggregateQuery() {
    let query = 'SELECT DISTINCT proname FROM pg_aggregate ';
    query += 'INNER JOIN pg_proc ON pg_aggregate.aggfnoid = pg_proc.oid ';
    query += 'INNER JOIN pg_type ON pg_type.oid=pg_proc.prorettype ';
    query += "WHERE pronargs=1 AND typname IN ('float8') AND aggkind='n' ORDER BY 1";
    return query;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _config_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/postgres/config_ctrl.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/postgres/datasource.ts");
/* harmony import */ var _query_ctrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/postgres/query_ctrl.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const defaultQuery = `SELECT
  extract(epoch from time_column) AS time,
  text_column as text,
  tags_column as tags
FROM
  metric_table
WHERE
  $__timeFilter(time_column)
`;

class PostgresAnnotationsQueryCtrl {
  /** @ngInject */
  constructor($scope) {
    this.annotation = $scope.ctrl.annotation;
    this.annotation.rawQuery = this.annotation.rawQuery || defaultQuery;
  }

}

PostgresAnnotationsQueryCtrl.$inject = ["$scope"];

_defineProperty(PostgresAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_2__.PostgresDatasource).setQueryCtrl(_query_ctrl__WEBPACK_IMPORTED_MODULE_3__.PostgresQueryCtrl).setConfigCtrl(_config_ctrl__WEBPACK_IMPORTED_MODULE_1__.PostgresConfigCtrl).setAnnotationQueryCtrl(PostgresAnnotationsQueryCtrl);

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/postgres_query_model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostgresQueryModel)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class PostgresQueryModel {
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
    return '"' + String(value).replace(/"/g, '""') + '"';
  }

  quoteLiteral(value) {
    return "'" + String(value).replace(/'/g, "''") + "'";
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
    return ['int4', 'int8', 'float4', 'float8', 'numeric'].indexOf(this.target.timeColumnType) > -1;
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
    const aggregate = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(column, g => g.type === 'aggregate' || g.type === 'percentile');
    const windows = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(column, g => g.type === 'window' || g.type === 'moving_window');

    if (aggregate) {
      const func = aggregate.params[0];

      switch (aggregate.type) {
        case 'aggregate':
          if (func === 'first' || func === 'last') {
            query = func + '(' + query + ',' + this.target.timeColumn + ')';
          } else {
            query = func + '(' + query + ')';
          }

          break;

        case 'percentile':
          query = func + '(' + aggregate.params[1] + ') WITHIN GROUP (ORDER BY ' + query + ')';
          break;
      }
    }

    if (windows) {
      const overParts = [];

      if (this.hasMetricColumn()) {
        overParts.push('PARTITION BY ' + this.target.metricColumn);
      }

      overParts.push('ORDER BY ' + this.buildTimeColumn(false));
      const over = overParts.join(' ');
      let curr;
      let prev;

      switch (windows.type) {
        case 'window':
          switch (windows.params[0]) {
            case 'delta':
              curr = query;
              prev = 'lag(' + curr + ') OVER (' + over + ')';
              query = curr + ' - ' + prev;
              break;

            case 'increase':
              curr = query;
              prev = 'lag(' + curr + ') OVER (' + over + ')';
              query = '(CASE WHEN ' + curr + ' >= ' + prev + ' THEN ' + curr + ' - ' + prev;
              query += ' WHEN ' + prev + ' IS NULL THEN NULL ELSE ' + curr + ' END)';
              break;

            case 'rate':
              let timeColumn = this.target.timeColumn;

              if (aggregate) {
                timeColumn = 'min(' + timeColumn + ')';
              }

              curr = query;
              prev = 'lag(' + curr + ') OVER (' + over + ')';
              query = '(CASE WHEN ' + curr + ' >= ' + prev + ' THEN ' + curr + ' - ' + prev;
              query += ' WHEN ' + prev + ' IS NULL THEN NULL ELSE ' + curr + ' END)';
              query += '/extract(epoch from ' + timeColumn + ' - lag(' + timeColumn + ') OVER (' + over + '))';
              break;

            default:
              query = windows.params[0] + '(' + query + ') OVER (' + over + ')';
              break;
          }

          break;

        case 'moving_window':
          query = windows.params[0] + '(' + query + ') OVER (' + over + ' ROWS ' + windows.params[1] + ' PRECEDING)';
          break;
      }
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
    query += '\nORDER BY 1';

    if (this.hasMetricColumn()) {
      query += ',2';
    }

    return query;
  }

}
PostgresQueryModel.$inject = ["target", "templateSrv", "scopedVars"];

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostgresQueryCtrl": () => (/* binding */ PostgresQueryCtrl)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/sdk.ts");
/* harmony import */ var app_types_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _meta_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/postgres/meta_query.ts");
/* harmony import */ var _postgres_query_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/postgres/postgres_query_model.ts");
/* harmony import */ var _sql_part__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/postgres/sql_part.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const defaultQuery = `SELECT
  $__time(time_column),
  value1
FROM
  metric_table
WHERE
  $__timeFilter(time_column)
`;
class PostgresQueryCtrl extends app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__.QueryCtrl {
  /** @ngInject */
  constructor($scope, $injector, templateSrv, uiSegmentSrv) {
    super($scope, $injector);
    this.templateSrv = templateSrv;
    this.uiSegmentSrv = uiSegmentSrv;

    _defineProperty(this, "formats", void 0);

    _defineProperty(this, "queryModel", void 0);

    _defineProperty(this, "metaBuilder", void 0);

    _defineProperty(this, "lastQueryMeta", void 0);

    _defineProperty(this, "lastQueryError", void 0);

    _defineProperty(this, "showHelp", false);

    _defineProperty(this, "tableSegment", void 0);

    _defineProperty(this, "whereAdd", void 0);

    _defineProperty(this, "timeColumnSegment", void 0);

    _defineProperty(this, "metricColumnSegment", void 0);

    _defineProperty(this, "selectMenu", []);

    _defineProperty(this, "selectParts", [[]]);

    _defineProperty(this, "groupParts", []);

    _defineProperty(this, "whereParts", []);

    _defineProperty(this, "groupAdd", void 0);

    this.templateSrv = templateSrv;
    this.uiSegmentSrv = uiSegmentSrv;
    this.target = this.target;
    this.queryModel = new _postgres_query_model__WEBPACK_IMPORTED_MODULE_6__["default"](this.target, templateSrv, this.panel.scopedVars);
    this.metaBuilder = new _meta_query__WEBPACK_IMPORTED_MODULE_5__.PostgresMetaQuery(this.target, this.queryModel);
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

  timescaleAggCheck() {
    const aggIndex = this.findAggregateIndex(this.selectParts[0]); // add or remove TimescaleDB aggregate functions as needed

    if (aggIndex !== -1) {
      const baseOpts = this.selectParts[0][aggIndex].def.params[0].baseOptions;
      const timescaleOpts = baseOpts.concat(this.selectParts[0][aggIndex].def.params[0].timescaleOptions);

      if (this.datasource.jsonData.timescaledb === true) {
        this.selectParts[0][aggIndex].def.params[0].options = timescaleOpts;
      } else {
        this.selectParts[0][aggIndex].def.params[0].options = baseOpts;
      }
    }
  }

  updateProjection() {
    this.selectParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.select, parts => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(parts, _sql_part__WEBPACK_IMPORTED_MODULE_7__["default"].create).filter(n => n);
    });
    this.timescaleAggCheck();
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
    this.timescaleAggCheck();
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
    this.selectMenu = [];
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
    }; // first and last aggregate are timescaledb specific

    if (this.datasource.jsonData.timescaledb === true) {
      aggregates.submenu.push({
        text: 'First',
        value: 'first'
      });
      aggregates.submenu.push({
        text: 'Last',
        value: 'last'
      });
    }

    this.selectMenu.push(aggregates); // ordered set aggregates require postgres 9.4+

    if (this.datasource.jsonData.postgresVersion >= 904) {
      const aggregates2 = {
        text: 'Ordered-Set Aggregate Functions',
        value: 'percentile',
        submenu: [{
          text: 'Percentile (continuous)',
          value: 'percentile_cont'
        }, {
          text: 'Percentile (discrete)',
          value: 'percentile_disc'
        }]
      };
      this.selectMenu.push(aggregates2);
    }

    const windows = {
      text: 'Window Functions',
      value: 'window',
      submenu: [{
        text: 'Delta',
        value: 'delta'
      }, {
        text: 'Increase',
        value: 'increase'
      }, {
        text: 'Rate',
        value: 'rate'
      }, {
        text: 'Sum',
        value: 'sum'
      }, {
        text: 'Moving Average',
        value: 'avg',
        type: 'moving_window'
      }]
    };
    this.selectMenu.push(windows);
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
      app_core_app_events__WEBPACK_IMPORTED_MODULE_2__["default"].publish(new app_types_events__WEBPACK_IMPORTED_MODULE_4__.ShowConfirmModalEvent({
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
    button.type = plusButton.type;
    button.fake = plusButton.fake;
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
            case 'aggregate':
              return this.datasource.metricFindQuery(this.metaBuilder.buildAggregateQuery()).then(this.transformToSegments({})).catch(this.handleQueryError.bind(this));

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
              if (['int4', 'int8', 'float4', 'float8', 'timestamp', 'timestamptz'].indexOf(part.datatype) > -1) {
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
    this.addGroup(this.groupAdd.type, this.groupAdd.value);
    this.resetPlusButton(this.groupAdd);
    this.updateRawSqlAndRefresh();
  }

  handleQueryError(err) {
    this.error = err.message || 'Failed to issue metric query';
    return [];
  }

}
PostgresQueryCtrl.$inject = ["$scope", "$injector", "templateSrv", "uiSegmentSrv"];

_defineProperty(PostgresQueryCtrl, "templateUrl", 'partials/query.editor.html');

/***/ }),

/***/ "./public/app/plugins/datasource/postgres/response_parser.ts":
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
    const timeField = frame.fields.find(f => f.name === 'time');

    if (!timeField) {
      throw new Error('Missing mandatory time column (with time column alias) in annotation query');
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

/***/ "./public/app/plugins/datasource/postgres/sql_part.ts":
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
    options: [],
    baseOptions: ['avg', 'count', 'min', 'max', 'sum', 'stddev', 'variance'],
    timescaleOptions: ['first', 'last']
  }],
  defaultParams: ['avg']
});
register({
  type: 'percentile',
  label: 'Aggregate:',
  style: 'label',
  params: [{
    name: 'name',
    type: 'string',
    options: ['percentile_cont', 'percentile_disc']
  }, {
    name: 'fraction',
    type: 'number',
    options: ['0.5', '0.75', '0.9', '0.95', '0.99']
  }],
  defaultParams: ['percentile_cont', '0.95']
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
register({
  type: 'window',
  style: 'label',
  params: [{
    name: 'function',
    type: 'string',
    options: ['delta', 'increase', 'rate', 'sum']
  }],
  defaultParams: ['increase']
});
register({
  type: 'moving_window',
  style: 'label',
  label: 'Moving Window:',
  params: [{
    name: 'function',
    type: 'string',
    options: ['avg']
  }, {
    name: 'window_size',
    type: 'number',
    options: ['3', '5', '7', '10', '20']
  }],
  defaultParams: ['avg', '5']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUVtQyxJQUFBQSxJQUFJLEVBQUUsUUFGUjtBQUdFRCxJQUFBQSxPQUFPLEVBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEI7QUFIWCxHQU5NLENBSkQ7QUFnQlBVLEVBQUFBLGFBQWEsRUFBRSxDQUFDLEtBQUQsRUFBUSxHQUFSO0FBaEJSLENBQUQsQ0FBUjtBQW1CQSxpRUFBZTtBQUNidVYsRUFBQUEsTUFBTSxFQUFFMEY7QUFESyxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNamEsU0FBUyxHQUFHcWEscUVBQXNCLENBQUNHLG1FQUFELENBQXhDO0FBQ0EsTUFBTXRhLGdCQUFnQixHQUFHbWEscUVBQXNCLENBQUNFLGtGQUFELENBQS9DO0FBQ0EsTUFBTTFTLFNBQVMsR0FBR3dTLHFFQUFzQixDQUFDSSxtRUFBRCxDQUF4QyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvQW5ndWxhckxvY2F0aW9uV3JhcHBlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL2NvbXBvbmVudHMvc3FsX3BhcnQvc3FsX3BhcnQudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9wYW5lbC9tZXRyaWNzX3BhbmVsX2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvcGFuZWwvcXVlcnlfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9kYXRhc291cmNlcy91dGlscy9wYXNzd29yZEhhbmRsZXJzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wb3N0Z3Jlcy9jb25maWdfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcG9zdGdyZXMvZGF0YXNvdXJjZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcG9zdGdyZXMvbWV0YV9xdWVyeS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcG9zdGdyZXMvbW9kdWxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wb3N0Z3Jlcy9wb3N0Z3Jlc19xdWVyeV9tb2RlbC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcG9zdGdyZXMvcXVlcnlfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvcG9zdGdyZXMvcmVzcG9uc2VfcGFyc2VyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wb3N0Z3Jlcy9zcWxfcGFydC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3Nkay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXByZWNhdGlvbldhcm5pbmcsIHVybFV0aWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGxvY2F0aW9uU2VhcmNoVG9PYmplY3QsIGxvY2F0aW9uU2VydmljZSwgbmF2aWdhdGlvbkxvZ2dlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG4vLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi9hZThlOTAzZWRmODhhODNmZWRkMTE2YWUwMmMwNjI4YmY3MmIxNTBjL3NyYy9uZy9sb2NhdGlvbi5qcyNMNVxuY29uc3QgREVGQVVMVF9QT1JUUzogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHsgaHR0cDogODAsIGh0dHBzOiA0NDMsIGZ0cDogMjEgfTtcblxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJMb2NhdGlvbldyYXBwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFic1VybCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuYWJzVXJsKTtcbiAgICB0aGlzLmhhc2ggPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLmhhc2gpO1xuICAgIHRoaXMuaG9zdCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuaG9zdCk7XG4gICAgdGhpcy5wYXRoID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5wYXRoKTtcbiAgICB0aGlzLnBvcnQgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnBvcnQsICd3aW5kb3cubG9jYXRpb24nKTtcbiAgICB0aGlzLnByb3RvY29sID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5wcm90b2NvbCwgJ3dpbmRvdy5sb2NhdGlvbicpO1xuICAgIHRoaXMucmVwbGFjZSA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMucmVwbGFjZSk7XG4gICAgdGhpcy5zZWFyY2ggPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnNlYXJjaCk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuc3RhdGUpO1xuICAgIHRoaXMudXJsID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy51cmwpO1xuICB9XG5cbiAgd3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKGZuOiBGdW5jdGlvbiwgcmVwbGFjZW1lbnQ/OiBzdHJpbmcpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICAgIGRlcHJlY2F0aW9uV2FybmluZygnJGxvY2F0aW9uJywgZm4ubmFtZSwgcmVwbGFjZW1lbnQgfHwgJ2xvY2F0aW9uU2VydmljZScpO1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGFic1VybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7dGhpcy51cmwoKX1gO1xuICB9XG5cbiAgaGFzaChuZXdIYXNoPzogc3RyaW5nIHwgbnVsbCkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBoYXNoJyk7XG5cbiAgICBpZiAoIW5ld0hhc2gpIHtcbiAgICAgIHJldHVybiBsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5oYXNoLnNsaWNlKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXIgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gIH1cblxuICBob3N0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLmhvc3RuYW1lO1xuICB9XG5cbiAgcGF0aChwYXRobmFtZT86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBwYXRoJyk7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpO1xuXG4gICAgaWYgKHBhdGhuYW1lICE9PSB1bmRlZmluZWQgJiYgcGF0aG5hbWUgIT09IG51bGwpIHtcbiAgICAgIGxldCBwYXJzZWRQYXRoID0gU3RyaW5nKHBhdGhuYW1lKTtcbiAgICAgIHBhcnNlZFBhdGggPSBwYXJzZWRQYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhcnNlZFBhdGggOiBgLyR7cGFyc2VkUGF0aH1gO1xuICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7cGFyc2VkUGF0aH1gKTtcblxuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goe1xuICAgICAgICBwYXRobmFtZTogdXJsLnBhdGhuYW1lLFxuICAgICAgICBzZWFyY2g6IHVybC5zZWFyY2gubGVuZ3RoID4gMCA/IHVybC5zZWFyY2ggOiBsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgIGhhc2g6IHVybC5oYXNoLmxlbmd0aCA+IDAgPyB1cmwuaGFzaCA6IGxvY2F0aW9uLmhhc2gsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChwYXRobmFtZSA9PT0gbnVsbCkge1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy8nKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZTtcbiAgfVxuXG4gIHBvcnQoKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgcmV0dXJuIHBhcnNlSW50KHVybC5wb3J0LCAxMCkgfHwgREVGQVVMVF9QT1JUU1t1cmwucHJvdG9jb2xdIHx8IG51bGw7XG4gIH1cblxuICBwcm90b2NvbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5wcm90b2NvbC5zbGljZSgwLCAtMSk7XG4gIH1cblxuICByZXBsYWNlKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQW5ndWxhckxvY2F0aW9uV3JhcHBlciBtZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgc2VhcmNoKHNlYXJjaD86IGFueSwgcGFyYW1WYWx1ZT86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBzZWFyY2gnKTtcbiAgICBpZiAoIXNlYXJjaCkge1xuICAgICAgcmV0dXJuIGxvY2F0aW9uU2VydmljZS5nZXRTZWFyY2hPYmplY3QoKTtcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoICYmIGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbCh7XG4gICAgICAgIFtzZWFyY2hdOiBwYXJhbVZhbHVlLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgIGxldCBuZXdRdWVyeTtcblxuICAgICAgaWYgKHR5cGVvZiBzZWFyY2ggPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG5ld1F1ZXJ5ID0geyAuLi5zZWFyY2ggfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1F1ZXJ5ID0gbG9jYXRpb25TZWFyY2hUb09iamVjdChzZWFyY2gpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhuZXdRdWVyeSkpIHtcbiAgICAgICAgLy8gcmVtb3ZpbmcgcGFyYW1zIHdpdGggbnVsbCB8IHVuZGVmaW5lZFxuICAgICAgICBpZiAobmV3UXVlcnlba2V5XSA9PT0gbnVsbCB8fCBuZXdRdWVyeVtrZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkZWxldGUgbmV3UXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB1cGRhdGVkVXJsID0gdXJsVXRpbC5yZW5kZXJVcmwobG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCkucGF0aG5hbWUsIG5ld1F1ZXJ5KTtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHVwZGF0ZWRVcmwpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhdGUoc3RhdGU/OiBhbnkpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogc3RhdGUnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXIgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHVybChuZXdVcmw/OiBhbnkpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogdXJsJyk7XG5cbiAgICBpZiAobmV3VXJsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChuZXdVcmwuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHsgLi4ubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCksIGhhc2g6IG5ld1VybCB9KTtcbiAgICAgIH0gZWxzZSBpZiAobmV3VXJsLnN0YXJ0c1dpdGgoJz8nKSkge1xuICAgICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh7IC4uLmxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLCBzZWFyY2g6IG5ld1VybCB9KTtcbiAgICAgIH0gZWxzZSBpZiAobmV3VXJsLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy8nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKG5ld1VybCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsb2NhdGlvblNlcnZpY2U7XG4gICAgfVxuXG4gICAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKTtcbiAgICByZXR1cm4gYCR7bG9jYXRpb24ucGF0aG5hbWV9JHtsb2NhdGlvbi5zZWFyY2h9JHtsb2NhdGlvbi5oYXNofWA7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNsb25lIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNsYXNzIFNxbFBhcnREZWYge1xuICB0eXBlOiBzdHJpbmc7XG4gIHN0eWxlOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHBhcmFtczogYW55W107XG4gIGRlZmF1bHRQYXJhbXM6IGFueVtdO1xuICB3cmFwT3Blbjogc3RyaW5nO1xuICB3cmFwQ2xvc2U6IHN0cmluZztcbiAgc2VwYXJhdG9yOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogYW55KSB7XG4gICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlO1xuICAgIGlmIChvcHRpb25zLmxhYmVsKSB7XG4gICAgICB0aGlzLmxhYmVsID0gb3B0aW9ucy5sYWJlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYWJlbCA9IHRoaXMudHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdGhpcy50eXBlLnN1YnN0cmluZygxKSArICc6JztcbiAgICB9XG4gICAgdGhpcy5zdHlsZSA9IG9wdGlvbnMuc3R5bGU7XG4gICAgaWYgKHRoaXMuc3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMud3JhcE9wZW4gPSAnKCc7XG4gICAgICB0aGlzLndyYXBDbG9zZSA9ICcpJztcbiAgICAgIHRoaXMuc2VwYXJhdG9yID0gJywgJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53cmFwT3BlbiA9ICcgJztcbiAgICAgIHRoaXMud3JhcENsb3NlID0gJyAnO1xuICAgICAgdGhpcy5zZXBhcmF0b3IgPSAnICc7XG4gICAgfVxuICAgIHRoaXMucGFyYW1zID0gb3B0aW9ucy5wYXJhbXM7XG4gICAgdGhpcy5kZWZhdWx0UGFyYW1zID0gb3B0aW9ucy5kZWZhdWx0UGFyYW1zO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcWxQYXJ0IHtcbiAgcGFydDogYW55O1xuICBkZWY6IFNxbFBhcnREZWY7XG4gIHBhcmFtczogYW55W107XG4gIGxhYmVsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGF0YXR5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwYXJ0OiBhbnksIGRlZjogYW55KSB7XG4gICAgdGhpcy5wYXJ0ID0gcGFydDtcbiAgICB0aGlzLmRlZiA9IGRlZjtcbiAgICBpZiAoIXRoaXMuZGVmKSB7XG4gICAgICB0aHJvdyB7IG1lc3NhZ2U6ICdDb3VsZCBub3QgZmluZCBzcWwgcGFydCAnICsgcGFydC50eXBlIH07XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhdHlwZSA9IHBhcnQuZGF0YXR5cGU7XG5cbiAgICBpZiAocGFydC5uYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBwYXJ0Lm5hbWU7XG4gICAgICB0aGlzLmxhYmVsID0gZGVmLmxhYmVsICsgJyAnICsgcGFydC5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5hbWUgPSAnJztcbiAgICAgIHRoaXMubGFiZWwgPSBkZWYubGFiZWw7XG4gICAgfVxuXG4gICAgcGFydC5wYXJhbXMgPSBwYXJ0LnBhcmFtcyB8fCBjbG9uZSh0aGlzLmRlZi5kZWZhdWx0UGFyYW1zKTtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcnQucGFyYW1zO1xuICB9XG5cbiAgdXBkYXRlUGFyYW0oc3RyVmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgIC8vIGhhbmRsZSBvcHRpb25hbCBwYXJhbWV0ZXJzXG4gICAgaWYgKHN0clZhbHVlID09PSAnJyAmJiB0aGlzLmRlZi5wYXJhbXNbaW5kZXhdLm9wdGlvbmFsKSB7XG4gICAgICB0aGlzLnBhcmFtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhcmFtc1tpbmRleF0gPSBzdHJWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcnQucGFyYW1zID0gdGhpcy5wYXJhbXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgVW5zdWJzY3JpYmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgRGF0YUZyYW1lLFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgTGVnYWN5UmVzcG9uc2VEYXRhLFxuICBMb2FkaW5nU3RhdGUsXG4gIFBhbmVsRGF0YSxcbiAgUGFuZWxFdmVudHMsXG4gIFRpbWVSYW5nZSxcbiAgdG9EYXRhRnJhbWVEVE8sXG4gIHRvTGVnYWN5UmVzcG9uc2VEYXRhLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFBhbmVsQ3RybCB9IGZyb20gJ2FwcC9hbmd1bGFyL3BhbmVsL3BhbmVsX2N0cmwnO1xuaW1wb3J0IHsgQ29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IFBhbmVsTW9kZWwgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlJztcbmltcG9ydCB7IGFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC91dGlscy9wYW5lbCc7XG5cbmltcG9ydCB7IFBhbmVsUXVlcnlSdW5uZXIgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy9xdWVyeS9zdGF0ZS9QYW5lbFF1ZXJ5UnVubmVyJztcblxuY2xhc3MgTWV0cmljc1BhbmVsQ3RybCBleHRlbmRzIFBhbmVsQ3RybCB7XG4gIGRlY2xhcmUgZGF0YXNvdXJjZTogRGF0YVNvdXJjZUFwaTtcbiAgZGVjbGFyZSByYW5nZTogVGltZVJhbmdlO1xuXG4gIGNvbnRleHRTcnY6IENvbnRleHRTcnY7XG4gIGRhdGFzb3VyY2VTcnY6IGFueTtcbiAgdGltZVNydjogYW55O1xuICB0ZW1wbGF0ZVNydjogYW55O1xuICBpbnRlcnZhbDogYW55O1xuICBpbnRlcnZhbE1zOiBhbnk7XG4gIHJlc29sdXRpb246IGFueTtcbiAgdGltZUluZm8/OiBzdHJpbmc7XG4gIHNraXBEYXRhT25Jbml0ID0gZmFsc2U7XG4gIGRhdGFMaXN0OiBMZWdhY3lSZXNwb25zZURhdGFbXSA9IFtdO1xuICBxdWVyeVN1YnNjcmlwdGlvbj86IFVuc3Vic2NyaWJhYmxlIHwgbnVsbDtcbiAgdXNlRGF0YUZyYW1lcyA9IGZhbHNlO1xuICBwYW5lbERhdGE/OiBQYW5lbERhdGE7XG5cbiAgY29uc3RydWN0b3IoJHNjb3BlOiBhbnksICRpbmplY3RvcjogYW55KSB7XG4gICAgc3VwZXIoJHNjb3BlLCAkaW5qZWN0b3IpO1xuXG4gICAgdGhpcy5jb250ZXh0U3J2ID0gJGluamVjdG9yLmdldCgnY29udGV4dFNydicpO1xuICAgIHRoaXMuZGF0YXNvdXJjZVNydiA9ICRpbmplY3Rvci5nZXQoJ2RhdGFzb3VyY2VTcnYnKTtcbiAgICB0aGlzLnRpbWVTcnYgPSAkaW5qZWN0b3IuZ2V0KCd0aW1lU3J2Jyk7XG4gICAgdGhpcy50ZW1wbGF0ZVNydiA9ICRpbmplY3Rvci5nZXQoJ3RlbXBsYXRlU3J2Jyk7XG4gICAgdGhpcy5wYW5lbC5kYXRhc291cmNlID0gdGhpcy5wYW5lbC5kYXRhc291cmNlIHx8IG51bGw7XG5cbiAgICB0aGlzLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5yZWZyZXNoLCB0aGlzLm9uTWV0cmljc1BhbmVsUmVmcmVzaC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5wYW5lbFRlYXJkb3duLCB0aGlzLm9uUGFuZWxUZWFyRG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5jb21wb25lbnREaWRNb3VudCwgdGhpcy5vbk1ldHJpY3NQYW5lbE1vdW50ZWQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBwcml2YXRlIG9uTWV0cmljc1BhbmVsTW91bnRlZCgpIHtcbiAgICBjb25zdCBxdWVyeVJ1bm5lciA9IHRoaXMucGFuZWwuZ2V0UXVlcnlSdW5uZXIoKSBhcyBQYW5lbFF1ZXJ5UnVubmVyO1xuICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24gPSBxdWVyeVJ1bm5lclxuICAgICAgLmdldERhdGEoeyB3aXRoVHJhbnNmb3JtczogdHJ1ZSwgd2l0aEZpZWxkQ29uZmlnOiB0cnVlIH0pXG4gICAgICAuc3Vic2NyaWJlKHRoaXMucGFuZWxEYXRhT2JzZXJ2ZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblBhbmVsVGVhckRvd24oKSB7XG4gICAgaWYgKHRoaXMucXVlcnlTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMucXVlcnlTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25NZXRyaWNzUGFuZWxSZWZyZXNoKCkge1xuICAgIC8vIGlnbm9yZSBmZXRjaGluZyBkYXRhIGlmIGFub3RoZXIgcGFuZWwgaXMgaW4gZnVsbHNjcmVlblxuICAgIGlmICh0aGlzLm90aGVyUGFuZWxJbkZ1bGxzY3JlZW5Nb2RlKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSBoYXZlIHNuYXBzaG90IGRhdGEgdXNlIHRoYXRcbiAgICBpZiAodGhpcy5wYW5lbC5zbmFwc2hvdERhdGEpIHtcbiAgICAgIHRoaXMudXBkYXRlVGltZVJhbmdlKCk7XG4gICAgICBsZXQgZGF0YSA9IHRoaXMucGFuZWwuc25hcHNob3REYXRhO1xuICAgICAgLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgICAgaWYgKCFpc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBkYXRhLmRhdGE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucGFuZWxEYXRhID0ge1xuICAgICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkRvbmUsXG4gICAgICAgIHNlcmllczogZGF0YSxcbiAgICAgICAgdGltZVJhbmdlOiB0aGlzLnJhbmdlLFxuICAgICAgfTtcblxuICAgICAgLy8gRGVmZXIgcGFuZWwgcmVuZGVyaW5nIHRpbGwgdGhlIG5leHQgZGlnZXN0IGN5Y2xlLlxuICAgICAgLy8gRm9yIHNvbWUgcmVhc29uIHNuYXBzaG90IHBhbmVscyBkb24ndCBpbml0IGF0IHRoaXMgdGltZSwgc28gdGhpcyBoZWxwcyB0byBhdm9pZCByZW5kZXJpbmcgaXNzdWVzLlxuICAgICAgcmV0dXJuIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmRhdGFTbmFwc2hvdExvYWQsIGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgbG9hZGluZy9lcnJvciBzdGF0ZVxuICAgIGRlbGV0ZSB0aGlzLmVycm9yO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAvLyBsb2FkIGRhdGFzb3VyY2Ugc2VydmljZVxuICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VTcnZcbiAgICAgIC5nZXQodGhpcy5wYW5lbC5kYXRhc291cmNlLCB0aGlzLnBhbmVsLnNjb3BlZFZhcnMpXG4gICAgICAudGhlbih0aGlzLmlzc3VlUXVlcmllcy5iaW5kKHRoaXMpKVxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnByb2Nlc3NEYXRhRXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvY2Vzc0RhdGFFcnJvcihlcnI6IGFueSkge1xuICAgIC8vIGlmIGNhbmNlbGVkICBrZWVwIGxvYWRpbmcgc2V0IHRvIHRydWVcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgY29uc29sZS5sb2coJ1BhbmVsIHJlcXVlc3QgY2FuY2VsbGVkJywgZXJyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVycm9yID0gZXJyLm1lc3NhZ2UgfHwgJ1JlcXVlc3QgRXJyb3InO1xuXG4gICAgaWYgKGVyci5kYXRhKSB7XG4gICAgICBpZiAoZXJyLmRhdGEubWVzc2FnZSkge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyLmRhdGEubWVzc2FnZTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyLmRhdGEuZXJyb3IpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVyci5kYXRhLmVycm9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYW5ndWxhckRpcnR5Q2hlY2soKTtcbiAgfVxuXG4gIGFuZ3VsYXJEaXJ0eUNoZWNrKCkge1xuICAgIGlmICghdGhpcy4kc2NvcGUuJHJvb3QuJCRwaGFzZSkge1xuICAgICAgdGhpcy4kc2NvcGUuJGRpZ2VzdCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZXMgdGhlIHJlc3BvbnNlIHdpdGggaW5mb3JtYXRpb24gZnJvbSB0aGUgc3RyZWFtXG4gIHBhbmVsRGF0YU9ic2VydmVyID0ge1xuICAgIG5leHQ6IChkYXRhOiBQYW5lbERhdGEpID0+IHtcbiAgICAgIHRoaXMucGFuZWxEYXRhID0gZGF0YTtcblxuICAgICAgaWYgKGRhdGEuc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5FcnJvcikge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZ25vcmUgZGF0YSBpbiBsb2FkaW5nIHN0YXRlXG4gICAgICBpZiAoZGF0YS5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkxvYWRpbmcpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmd1bGFyRGlydHlDaGVjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgeyB0aW1lSW5mbyB9ID0gZGF0YS5yZXF1ZXN0O1xuICAgICAgICBpZiAodGltZUluZm8pIHtcbiAgICAgICAgICB0aGlzLnRpbWVJbmZvID0gdGltZUluZm87XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEudGltZVJhbmdlKSB7XG4gICAgICAgIHRoaXMucmFuZ2UgPSBkYXRhLnRpbWVSYW5nZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudXNlRGF0YUZyYW1lcykge1xuICAgICAgICB0aGlzLmhhbmRsZURhdGFGcmFtZXMoZGF0YS5zZXJpZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWFrZSB0aGUgcmVzdWx0cyBsb29rIGFzIGlmIHRoZXkgY2FtZSBkaXJlY3RseSBmcm9tIGEgPDYuMiBkYXRhc291cmNlIHJlcXVlc3RcbiAgICAgICAgY29uc3QgbGVnYWN5ID0gZGF0YS5zZXJpZXMubWFwKCh2KSA9PiB0b0xlZ2FjeVJlc3BvbnNlRGF0YSh2KSk7XG4gICAgICAgIHRoaXMuaGFuZGxlUXVlcnlSZXN1bHQoeyBkYXRhOiBsZWdhY3kgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYW5ndWxhckRpcnR5Q2hlY2soKTtcbiAgICB9LFxuICB9O1xuXG4gIHVwZGF0ZVRpbWVSYW5nZShkYXRhc291cmNlPzogRGF0YVNvdXJjZUFwaSkge1xuICAgIHRoaXMuZGF0YXNvdXJjZSA9IGRhdGFzb3VyY2UgfHwgdGhpcy5kYXRhc291cmNlO1xuICAgIHRoaXMucmFuZ2UgPSB0aGlzLnRpbWVTcnYudGltZVJhbmdlKCk7XG5cbiAgICBjb25zdCBuZXdUaW1lRGF0YSA9IGFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzKHRoaXMucGFuZWwsIHRoaXMucmFuZ2UpO1xuICAgIHRoaXMudGltZUluZm8gPSBuZXdUaW1lRGF0YS50aW1lSW5mbztcbiAgICB0aGlzLnJhbmdlID0gbmV3VGltZURhdGEudGltZVJhbmdlO1xuICB9XG5cbiAgaXNzdWVRdWVyaWVzKGRhdGFzb3VyY2U6IERhdGFTb3VyY2VBcGkpIHtcbiAgICB0aGlzLnVwZGF0ZVRpbWVSYW5nZShkYXRhc291cmNlKTtcblxuICAgIHRoaXMuZGF0YXNvdXJjZSA9IGRhdGFzb3VyY2U7XG5cbiAgICBjb25zdCBwYW5lbCA9IHRoaXMucGFuZWwgYXMgUGFuZWxNb2RlbDtcbiAgICBjb25zdCBxdWVyeVJ1bm5lciA9IHBhbmVsLmdldFF1ZXJ5UnVubmVyKCk7XG5cbiAgICByZXR1cm4gcXVlcnlSdW5uZXIucnVuKHtcbiAgICAgIGRhdGFzb3VyY2U6IHBhbmVsLmRhdGFzb3VyY2UsXG4gICAgICBxdWVyaWVzOiBwYW5lbC50YXJnZXRzLFxuICAgICAgcGFuZWxJZDogcGFuZWwuaWQsXG4gICAgICBkYXNoYm9hcmRJZDogdGhpcy5kYXNoYm9hcmQuaWQsXG4gICAgICB0aW1lem9uZTogdGhpcy5kYXNoYm9hcmQuZ2V0VGltZXpvbmUoKSxcbiAgICAgIHRpbWVJbmZvOiB0aGlzLnRpbWVJbmZvLFxuICAgICAgdGltZVJhbmdlOiB0aGlzLnJhbmdlLFxuICAgICAgbWF4RGF0YVBvaW50czogcGFuZWwubWF4RGF0YVBvaW50cyB8fCB0aGlzLndpZHRoLFxuICAgICAgbWluSW50ZXJ2YWw6IHBhbmVsLmludGVydmFsLFxuICAgICAgc2NvcGVkVmFyczogcGFuZWwuc2NvcGVkVmFycyxcbiAgICAgIGNhY2hlVGltZW91dDogcGFuZWwuY2FjaGVUaW1lb3V0LFxuICAgICAgdHJhbnNmb3JtYXRpb25zOiBwYW5lbC50cmFuc2Zvcm1hdGlvbnMsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEYXRhRnJhbWVzKGRhdGE6IERhdGFGcmFtZVtdKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5kYXNoYm9hcmQgJiYgdGhpcy5kYXNoYm9hcmQuc25hcHNob3QpIHtcbiAgICAgIHRoaXMucGFuZWwuc25hcHNob3REYXRhID0gZGF0YS5tYXAoKGZyYW1lKSA9PiB0b0RhdGFGcmFtZURUTyhmcmFtZSkpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmRhdGFGcmFtZXNSZWNlaXZlZCwgZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLnByb2Nlc3NEYXRhRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVRdWVyeVJlc3VsdChyZXN1bHQ6IERhdGFRdWVyeVJlc3BvbnNlKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5kYXNoYm9hcmQuc25hcHNob3QpIHtcbiAgICAgIHRoaXMucGFuZWwuc25hcHNob3REYXRhID0gcmVzdWx0LmRhdGE7XG4gICAgfVxuXG4gICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5kYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnRGF0YSBzb3VyY2UgcXVlcnkgcmVzdWx0IGludmFsaWQsIG1pc3NpbmcgZGF0YSBmaWVsZDonLCByZXN1bHQpO1xuICAgICAgcmVzdWx0ID0geyBkYXRhOiBbXSB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmRhdGFSZWNlaXZlZCwgcmVzdWx0LmRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGVycik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IE1ldHJpY3NQYW5lbEN0cmwgfTtcbiIsImltcG9ydCB7IGF1dG8gfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHtcbiAgQXBwRXZlbnQsXG4gIFBhbmVsRXZlbnRzLFxuICBQYW5lbFBsdWdpbk1ldGEsXG4gIEFuZ3VsYXJQYW5lbE1lbnVJdGVtLFxuICBFdmVudEJ1c0V4dGVuZGVkLFxuICBFdmVudEJ1c1Nydixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbmd1bGFyTG9jYXRpb25XcmFwcGVyIH0gZnJvbSAnYXBwL2FuZ3VsYXIvQW5ndWxhckxvY2F0aW9uV3JhcHBlcic7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBwcm9maWxlciB9IGZyb20gJ2FwcC9jb3JlL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRNb2RlbCB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZSc7XG5cbmV4cG9ydCBjbGFzcyBQYW5lbEN0cmwge1xuICBwYW5lbDogYW55O1xuICBlcnJvcjogYW55O1xuICBkZWNsYXJlIGRhc2hib2FyZDogRGFzaGJvYXJkTW9kZWw7XG4gIHBsdWdpbk5hbWUgPSAnJztcbiAgcGx1Z2luSWQgPSAnJztcbiAgZWRpdG9yVGFiczogYW55O1xuICAkc2NvcGU6IGFueTtcbiAgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2U7XG4gICR0aW1lb3V0OiBhbnk7XG4gIGVkaXRNb2RlSW5pdGlhdGVkID0gZmFsc2U7XG4gIGRlY2xhcmUgaGVpZ2h0OiBudW1iZXI7XG4gIGRlY2xhcmUgd2lkdGg6IG51bWJlcjtcbiAgY29udGFpbmVySGVpZ2h0OiBhbnk7XG4gIGV2ZW50czogRXZlbnRCdXNFeHRlbmRlZDtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICB0aW1pbmc6IGFueTtcbiAgJGxvY2F0aW9uOiBBbmd1bGFyTG9jYXRpb25XcmFwcGVyO1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55LCAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSkge1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsID8/ICRzY29wZS4kcGFyZW50LnBhbmVsO1xuICAgIHRoaXMuZGFzaGJvYXJkID0gdGhpcy5kYXNoYm9hcmQgPz8gJHNjb3BlLiRwYXJlbnQuZGFzaGJvYXJkO1xuICAgIHRoaXMuJGluamVjdG9yID0gJGluamVjdG9yO1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJHRpbWVvdXQgPSAkaW5qZWN0b3IuZ2V0KCckdGltZW91dCcpO1xuICAgIHRoaXMuZWRpdG9yVGFicyA9IFtdO1xuICAgIHRoaXMuJGxvY2F0aW9uID0gbmV3IEFuZ3VsYXJMb2NhdGlvbldyYXBwZXIoKTtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudEJ1c1NydigpO1xuICAgIHRoaXMudGltaW5nID0ge307IC8vIG5vdCB1c2VkIGJ1dCBoZXJlIHRvIG5vdCBicmVhayBwbHVnaW5zXG5cbiAgICBjb25zdCBwbHVnaW4gPSBjb25maWcucGFuZWxzW3RoaXMucGFuZWwudHlwZV07XG4gICAgaWYgKHBsdWdpbikge1xuICAgICAgdGhpcy5wbHVnaW5JZCA9IHBsdWdpbi5pZDtcbiAgICAgIHRoaXMucGx1Z2luTmFtZSA9IHBsdWdpbi5uYW1lO1xuICAgIH1cblxuICAgICRzY29wZS4kb24oUGFuZWxFdmVudHMuY29tcG9uZW50RGlkTW91bnQubmFtZSwgKCkgPT4gdGhpcy5wYW5lbERpZE1vdW50KCkpO1xuICB9XG5cbiAgcGFuZWxEaWRNb3VudCgpIHtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmNvbXBvbmVudERpZE1vdW50KTtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmluaXRpYWxpemVkKTtcbiAgICB0aGlzLmRhc2hib2FyZC5wYW5lbEluaXRpYWxpemVkKHRoaXMucGFuZWwpO1xuICB9XG5cbiAgcmVuZGVyaW5nQ29tcGxldGVkKCkge1xuICAgIHByb2ZpbGVyLnJlbmRlcmluZ0NvbXBsZXRlZCgpO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnBhbmVsLnJlZnJlc2goKTtcbiAgfVxuXG4gIHB1Ymxpc2hBcHBFdmVudDxUPihldmVudDogQXBwRXZlbnQ8VD4sIHBheWxvYWQ/OiBUKSB7XG4gICAgdGhpcy4kc2NvcGUuJHJvb3QuYXBwRXZlbnQoZXZlbnQsIHBheWxvYWQpO1xuICB9XG5cbiAgaW5pdEVkaXRNb2RlKCkge1xuICAgIGlmICghdGhpcy5lZGl0TW9kZUluaXRpYXRlZCkge1xuICAgICAgdGhpcy5lZGl0TW9kZUluaXRpYXRlZCA9IHRydWU7XG4gICAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmVkaXRNb2RlSW5pdGlhbGl6ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVkaXRvclRhYih0aXRsZTogc3RyaW5nLCBkaXJlY3RpdmVGbjogYW55LCBpbmRleD86IG51bWJlciwgaWNvbj86IGFueSkge1xuICAgIGNvbnN0IGVkaXRvclRhYiA9IHsgdGl0bGUsIGRpcmVjdGl2ZUZuLCBpY29uIH07XG5cbiAgICBpZiAoaXNTdHJpbmcoZGlyZWN0aXZlRm4pKSB7XG4gICAgICBlZGl0b3JUYWIuZGlyZWN0aXZlRm4gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHRlbXBsYXRlVXJsOiBkaXJlY3RpdmVGbiB9O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXgpIHtcbiAgICAgIHRoaXMuZWRpdG9yVGFicy5zcGxpY2UoaW5kZXgsIDAsIGVkaXRvclRhYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWRpdG9yVGFicy5wdXNoKGVkaXRvclRhYik7XG4gICAgfVxuICB9XG5cbiAgZ2V0RXh0ZW5kZWRNZW51KCkge1xuICAgIGNvbnN0IG1lbnU6IEFuZ3VsYXJQYW5lbE1lbnVJdGVtW10gPSBbXTtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLmluaXRQYW5lbEFjdGlvbnMsIG1lbnUpO1xuICAgIHJldHVybiBtZW51O1xuICB9XG5cbiAgLy8gT3ZlcnJpZGUgaW4gc3ViLWNsYXNzIHRvIGFkZCBpdGVtcyBiZWZvcmUgZXh0ZW5kZWQgbWVudVxuICBhc3luYyBnZXRBZGRpdGlvbmFsTWVudUl0ZW1zKCk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBvdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kYXNoYm9hcmQub3RoZXJQYW5lbEluRnVsbHNjcmVlbih0aGlzLnBhbmVsKTtcbiAgfVxuXG4gIHJlbmRlcihwYXlsb2FkPzogYW55KSB7XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5yZW5kZXIsIHBheWxvYWQpO1xuICB9XG5cbiAgLy8gb3ZlcnJpZGVuIGZyb20gcmVhY3RcbiAgb25QbHVnaW5UeXBlQ2hhbmdlID0gKHBsdWdpbjogUGFuZWxQbHVnaW5NZXRhKSA9PiB7fTtcbn1cbiIsImltcG9ydCB7IGF1dG8gfSBmcm9tICdhbmd1bGFyJztcbmltcG9ydCB7IGluZGV4T2YgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY2xhc3MgUXVlcnlDdHJsPFQgPSBhbnk+IHtcbiAgdGFyZ2V0ITogVDtcbiAgZGF0YXNvdXJjZSE6IGFueTtcbiAgcGFuZWxDdHJsITogYW55O1xuICBwYW5lbDogYW55O1xuICBoYXNSYXdNb2RlITogYm9vbGVhbjtcbiAgZXJyb3I/OiBzdHJpbmcgfCBudWxsO1xuICBpc0xhc3RRdWVyeTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgJHNjb3BlOiBhbnksIHB1YmxpYyAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZSkge1xuICAgIHRoaXMucGFuZWxDdHJsID0gdGhpcy5wYW5lbEN0cmwgPz8gJHNjb3BlLmN0cmwucGFuZWxDdHJsO1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy50YXJnZXQgPz8gJHNjb3BlLmN0cmwudGFyZ2V0O1xuICAgIHRoaXMuZGF0YXNvdXJjZSA9IHRoaXMuZGF0YXNvdXJjZSA/PyAkc2NvcGUuY3RybC5kYXRhc291cmNlO1xuICAgIHRoaXMucGFuZWwgPSB0aGlzLnBhbmVsQ3RybD8ucGFuZWwgPz8gJHNjb3BlLmN0cmwucGFuZWxDdHJsLnBhbmVsO1xuICAgIHRoaXMuaXNMYXN0UXVlcnkgPSBpbmRleE9mKHRoaXMucGFuZWwudGFyZ2V0cywgdGhpcy50YXJnZXQpID09PSB0aGlzLnBhbmVsLnRhcmdldHMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVmcmVzaCgpO1xuICB9XG59XG4iLCIvKipcbiAqIFNldCBvZiBoYW5kbGVycyBmb3Igc2VjdXJlIHBhc3N3b3JkIGZpZWxkIGluIEFuZ3VsYXIgY29tcG9uZW50cy4gVGhleSBoYW5kbGUgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoXG4gKiBwYXNzd29yZHMgc3RvcmVkIGluIHBsYWluIHRleHQgZmllbGRzLlxuICovXG5cbmltcG9ydCB7IFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZW51bSBQYXNzd29yZEZpZWxkRW51bSB7XG4gIFBhc3N3b3JkID0gJ3Bhc3N3b3JkJyxcbiAgQmFzaWNBdXRoUGFzc3dvcmQgPSAnYmFzaWNBdXRoUGFzc3dvcmQnLFxufVxuXG4vKipcbiAqIEJhc2ljIHNoYXBlIGZvciBzZXR0aW5ncyBjb250cm9sbGVycyBpbiBhdCB0aGUgbW9tZW50IG1vc3RseSBhbmd1bGFyIGRhdGEgc291cmNlIHBsdWdpbnMuXG4gKi9cbmV4cG9ydCB0eXBlIEN0cmwgPSB7XG4gIGN1cnJlbnQ6IHtcbiAgICBzZWN1cmVKc29uRmllbGRzOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBib29sZWFuO1xuICAgIH07XG4gICAgc2VjdXJlSnNvbkRhdGE/OiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgICBiYXNpY0F1dGhQYXNzd29yZD86IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXNldEhhbmRsZXIgPVxuICAoY3RybDogQ3RybCwgZmllbGQ6IFBhc3N3b3JkRmllbGRFbnVtKSA9PiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBSZXNldCBhbHNvIG5vcm1hbCBwbGFpbiB0ZXh0IHBhc3N3b3JkIHRvIHJlbW92ZSBpdCBhbmQgb25seSBzYXZlIGl0IGluIHNlY3VyZUpzb25EYXRhLlxuICAgIGN0cmwuY3VycmVudFtmaWVsZF0gPSB1bmRlZmluZWQ7XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25GaWVsZHNbZmllbGRdID0gZmFsc2U7XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhID0gY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhIHx8IHt9O1xuICAgIGN0cmwuY3VycmVudC5zZWN1cmVKc29uRGF0YVtmaWVsZF0gPSAnJztcbiAgfTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNoYW5nZUhhbmRsZXIgPVxuICAoY3RybDogYW55LCBmaWVsZDogUGFzc3dvcmRGaWVsZEVudW0pID0+IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGEgPSBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGEgfHwge307XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhW2ZpZWxkXSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gIH07XG4iLCJpbXBvcnQgeyBmaW5kIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgRGF0YXNvdXJjZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9wbHVnaW5zL2RhdGFzb3VyY2Vfc3J2JztcblxuaW1wb3J0IHtcbiAgY3JlYXRlQ2hhbmdlSGFuZGxlcixcbiAgY3JlYXRlUmVzZXRIYW5kbGVyLFxuICBQYXNzd29yZEZpZWxkRW51bSxcbn0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvZGF0YXNvdXJjZXMvdXRpbHMvcGFzc3dvcmRIYW5kbGVycyc7XG5cbmV4cG9ydCBjbGFzcyBQb3N0Z3Jlc0NvbmZpZ0N0cmwge1xuICBzdGF0aWMgdGVtcGxhdGVVcmwgPSAncGFydGlhbHMvY29uZmlnLmh0bWwnO1xuXG4gIC8vIFNldCB0aHJvdWdoIGFuZ3VsYXIgYmluZGluZ3NcbiAgZGVjbGFyZSBjdXJyZW50OiBhbnk7XG5cbiAgZGF0YXNvdXJjZVNydjogYW55O1xuICBzaG93VGltZXNjYWxlREJIZWxwOiBib29sZWFuO1xuICBvblBhc3N3b3JkUmVzZXQ6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZVJlc2V0SGFuZGxlcj47XG4gIG9uUGFzc3dvcmRDaGFuZ2U6IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZUNoYW5nZUhhbmRsZXI+O1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoJHNjb3BlOiBhbnksIGRhdGFzb3VyY2VTcnY6IERhdGFzb3VyY2VTcnYpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSAkc2NvcGUuY3RybC5jdXJyZW50O1xuICAgIHRoaXMuZGF0YXNvdXJjZVNydiA9IGRhdGFzb3VyY2VTcnY7XG4gICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLnNzbG1vZGUgPSB0aGlzLmN1cnJlbnQuanNvbkRhdGEuc3NsbW9kZSB8fCAndmVyaWZ5LWZ1bGwnO1xuICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS50bHNDb25maWd1cmF0aW9uTWV0aG9kID0gdGhpcy5jdXJyZW50Lmpzb25EYXRhLnRsc0NvbmZpZ3VyYXRpb25NZXRob2QgfHwgJ2ZpbGUtcGF0aCc7XG4gICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLnBvc3RncmVzVmVyc2lvbiA9IHRoaXMuY3VycmVudC5qc29uRGF0YS5wb3N0Z3Jlc1ZlcnNpb24gfHwgOTAzO1xuICAgIHRoaXMuc2hvd1RpbWVzY2FsZURCSGVscCA9IGZhbHNlO1xuICAgIHRoaXMuYXV0b0RldGVjdEZlYXR1cmVzKCk7XG4gICAgdGhpcy5vblBhc3N3b3JkUmVzZXQgPSBjcmVhdGVSZXNldEhhbmRsZXIodGhpcywgUGFzc3dvcmRGaWVsZEVudW0uUGFzc3dvcmQpO1xuICAgIHRoaXMub25QYXNzd29yZENoYW5nZSA9IGNyZWF0ZUNoYW5nZUhhbmRsZXIodGhpcywgUGFzc3dvcmRGaWVsZEVudW0uUGFzc3dvcmQpO1xuICAgIHRoaXMudGxzTW9kZU1hcHBpbmcoKTtcbiAgfVxuXG4gIGF1dG9EZXRlY3RGZWF0dXJlcygpIHtcbiAgICBpZiAoIXRoaXMuY3VycmVudC5pZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGF0YXNvdXJjZVNydi5sb2FkRGF0YXNvdXJjZSh0aGlzLmN1cnJlbnQubmFtZSkudGhlbigoZHM6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIGRzLmdldFZlcnNpb24oKS50aGVuKCh2ZXJzaW9uOiBhbnkpID0+IHtcbiAgICAgICAgdmVyc2lvbiA9IE51bWJlcih2ZXJzaW9uWzBdLnRleHQpO1xuXG4gICAgICAgIC8vIHRpbWVzY2FsZWRiIGlzIG9ubHkgYXZhaWxhYmxlIGZvciA5LjYrXG4gICAgICAgIGlmICh2ZXJzaW9uID49IDkwNikge1xuICAgICAgICAgIGRzLmdldFRpbWVzY2FsZURCVmVyc2lvbigpLnRoZW4oKHZlcnNpb246IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZlcnNpb24ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS50aW1lc2NhbGVkYiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtYWpvciA9IE1hdGgudHJ1bmModmVyc2lvbiAvIDEwMCk7XG4gICAgICAgIGNvbnN0IG1pbm9yID0gdmVyc2lvbiAlIDEwMDtcbiAgICAgICAgbGV0IG5hbWUgPSBTdHJpbmcobWFqb3IpO1xuICAgICAgICBpZiAodmVyc2lvbiA8IDEwMDApIHtcbiAgICAgICAgICBuYW1lID0gU3RyaW5nKG1ham9yKSArICcuJyArIFN0cmluZyhtaW5vcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmaW5kKHRoaXMucG9zdGdyZXNWZXJzaW9ucywgKHA6IGFueSkgPT4gcC52YWx1ZSA9PT0gdmVyc2lvbikpIHtcbiAgICAgICAgICB0aGlzLnBvc3RncmVzVmVyc2lvbnMucHVzaCh7IG5hbWU6IG5hbWUsIHZhbHVlOiB2ZXJzaW9uIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS5wb3N0Z3Jlc1ZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVUaW1lc2NhbGVEQkhlbHAoKSB7XG4gICAgdGhpcy5zaG93VGltZXNjYWxlREJIZWxwID0gIXRoaXMuc2hvd1RpbWVzY2FsZURCSGVscDtcbiAgfVxuXG4gIHRsc01vZGVNYXBwaW5nKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQuanNvbkRhdGEuc3NsbW9kZSA9PT0gJ2Rpc2FibGUnKSB7XG4gICAgICB0aGlzLmN1cnJlbnQuanNvbkRhdGEudGxzQXV0aCA9IGZhbHNlO1xuICAgICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLnRsc0F1dGhXaXRoQ0FDZXJ0ID0gZmFsc2U7XG4gICAgICB0aGlzLmN1cnJlbnQuanNvbkRhdGEudGxzU2tpcFZlcmlmeSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS50bHNBdXRoID0gdHJ1ZTtcbiAgICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS50bHNBdXRoV2l0aENBQ2VydCA9IHRydWU7XG4gICAgICB0aGlzLmN1cnJlbnQuanNvbkRhdGEudGxzU2tpcFZlcmlmeSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRoZSB2YWx1ZSBwb3J0aW9uIGlzIGRlcml2ZWQgZnJvbSBwb3N0Z3JlcyBzZXJ2ZXJfdmVyc2lvbl9udW0vMTAwXG4gIHBvc3RncmVzVmVyc2lvbnMgPSBbXG4gICAgeyBuYW1lOiAnOS4zJywgdmFsdWU6IDkwMyB9LFxuICAgIHsgbmFtZTogJzkuNCcsIHZhbHVlOiA5MDQgfSxcbiAgICB7IG5hbWU6ICc5LjUnLCB2YWx1ZTogOTA1IH0sXG4gICAgeyBuYW1lOiAnOS42JywgdmFsdWU6IDkwNiB9LFxuICAgIHsgbmFtZTogJzEwJywgdmFsdWU6IDEwMDAgfSxcbiAgICB7IG5hbWU6ICcxMScsIHZhbHVlOiAxMTAwIH0sXG4gICAgeyBuYW1lOiAnMTIrJywgdmFsdWU6IDEyMDAgfSxcbiAgXTtcbn1cbiIsImltcG9ydCB7IG1hcCBhcyBfbWFwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20sIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFubm90YXRpb25FdmVudCwgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsIE1ldHJpY0ZpbmRWYWx1ZSwgU2NvcGVkVmFycywgVGltZVJhbmdlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlLCBEYXRhU291cmNlV2l0aEJhY2tlbmQsIEZldGNoUmVzcG9uc2UsIGdldEJhY2tlbmRTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IHRvVGVzdGluZ1N0YXR1cyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUvc3JjL3V0aWxzL3F1ZXJ5UmVzcG9uc2UnO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVTcnYsIFRlbXBsYXRlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3RlbXBsYXRpbmcvdGVtcGxhdGVfc3J2JztcbmltcG9ydCBQb3N0Z3Jlc1F1ZXJ5TW9kZWwgZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wb3N0Z3Jlcy9wb3N0Z3Jlc19xdWVyeV9tb2RlbCc7XG5cbmltcG9ydCB7IGdldFNlYXJjaEZpbHRlclNjb3BlZFZhciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL3ZhcmlhYmxlcy91dGlscyc7XG5cbmltcG9ydCBSZXNwb25zZVBhcnNlciBmcm9tICcuL3Jlc3BvbnNlX3BhcnNlcic7XG5pbXBvcnQgeyBQb3N0Z3Jlc09wdGlvbnMsIFBvc3RncmVzUXVlcnksIFBvc3RncmVzUXVlcnlGb3JJbnRlcnBvbGF0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBQb3N0Z3Jlc0RhdGFzb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlV2l0aEJhY2tlbmQ8UG9zdGdyZXNRdWVyeSwgUG9zdGdyZXNPcHRpb25zPiB7XG4gIGlkOiBhbnk7XG4gIG5hbWU6IGFueTtcbiAganNvbkRhdGE6IGFueTtcbiAgcmVzcG9uc2VQYXJzZXI6IFJlc3BvbnNlUGFyc2VyO1xuICBxdWVyeU1vZGVsOiBQb3N0Z3Jlc1F1ZXJ5TW9kZWw7XG4gIGludGVydmFsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3M8UG9zdGdyZXNPcHRpb25zPixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlU3J2OiBUZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KClcbiAgKSB7XG4gICAgc3VwZXIoaW5zdGFuY2VTZXR0aW5ncyk7XG4gICAgdGhpcy5uYW1lID0gaW5zdGFuY2VTZXR0aW5ncy5uYW1lO1xuICAgIHRoaXMuaWQgPSBpbnN0YW5jZVNldHRpbmdzLmlkO1xuICAgIHRoaXMuanNvbkRhdGEgPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhO1xuICAgIHRoaXMucmVzcG9uc2VQYXJzZXIgPSBuZXcgUmVzcG9uc2VQYXJzZXIoKTtcbiAgICB0aGlzLnF1ZXJ5TW9kZWwgPSBuZXcgUG9zdGdyZXNRdWVyeU1vZGVsKHt9KTtcbiAgICBjb25zdCBzZXR0aW5nc0RhdGEgPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhIHx8ICh7fSBhcyBQb3N0Z3Jlc09wdGlvbnMpO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXR0aW5nc0RhdGEudGltZUludGVydmFsIHx8ICcxbSc7XG4gIH1cblxuICBpbnRlcnBvbGF0ZVZhcmlhYmxlID0gKHZhbHVlOiBzdHJpbmcgfCBzdHJpbmdbXSwgdmFyaWFibGU6IHsgbXVsdGk6IGFueTsgaW5jbHVkZUFsbDogYW55IH0pID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKHZhcmlhYmxlLm11bHRpIHx8IHZhcmlhYmxlLmluY2x1ZGVBbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlNb2RlbC5xdW90ZUxpdGVyYWwodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY29uc3QgcXVvdGVkVmFsdWVzID0gX21hcCh2YWx1ZSwgKHYpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TW9kZWwucXVvdGVMaXRlcmFsKHYpO1xuICAgIH0pO1xuICAgIHJldHVybiBxdW90ZWRWYWx1ZXMuam9pbignLCcpO1xuICB9O1xuXG4gIGludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzKFxuICAgIHF1ZXJpZXM6IFBvc3RncmVzUXVlcnlGb3JJbnRlcnBvbGF0aW9uW10sXG4gICAgc2NvcGVkVmFyczogU2NvcGVkVmFyc1xuICApOiBQb3N0Z3Jlc1F1ZXJ5Rm9ySW50ZXJwb2xhdGlvbltdIHtcbiAgICBsZXQgZXhwYW5kZWRRdWVyaWVzID0gcXVlcmllcztcbiAgICBpZiAocXVlcmllcyAmJiBxdWVyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGV4cGFuZGVkUXVlcmllcyA9IHF1ZXJpZXMubWFwKChxdWVyeSkgPT4ge1xuICAgICAgICBjb25zdCBleHBhbmRlZFF1ZXJ5ID0ge1xuICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICAgICAgcmF3U3FsOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkucmF3U3FsLCBzY29wZWRWYXJzLCB0aGlzLmludGVycG9sYXRlVmFyaWFibGUpLFxuICAgICAgICAgIHJhd1F1ZXJ5OiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZXhwYW5kZWRRdWVyeTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZXhwYW5kZWRRdWVyaWVzO1xuICB9XG5cbiAgZmlsdGVyUXVlcnkocXVlcnk6IFBvc3RncmVzUXVlcnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXF1ZXJ5LmhpZGU7XG4gIH1cblxuICBhcHBseVRlbXBsYXRlVmFyaWFibGVzKHRhcmdldDogUG9zdGdyZXNRdWVyeSwgc2NvcGVkVmFyczogU2NvcGVkVmFycyk6IFJlY29yZDxzdHJpbmcsIGFueT4ge1xuICAgIGNvbnN0IHF1ZXJ5TW9kZWwgPSBuZXcgUG9zdGdyZXNRdWVyeU1vZGVsKHRhcmdldCwgdGhpcy50ZW1wbGF0ZVNydiwgc2NvcGVkVmFycyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZklkOiB0YXJnZXQucmVmSWQsXG4gICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgcmF3U3FsOiBxdWVyeU1vZGVsLnJlbmRlcih0aGlzLmludGVycG9sYXRlVmFyaWFibGUgYXMgYW55KSxcbiAgICAgIGZvcm1hdDogdGFyZ2V0LmZvcm1hdCxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgYW5ub3RhdGlvblF1ZXJ5KG9wdGlvbnM6IGFueSk6IFByb21pc2U8QW5ub3RhdGlvbkV2ZW50W10+IHtcbiAgICBpZiAoIW9wdGlvbnMuYW5ub3RhdGlvbi5yYXdRdWVyeSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgbWVzc2FnZTogJ1F1ZXJ5IG1pc3NpbmcgaW4gYW5ub3RhdGlvbiBkZWZpbml0aW9uJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0ge1xuICAgICAgcmVmSWQ6IG9wdGlvbnMuYW5ub3RhdGlvbi5uYW1lLFxuICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgIHJhd1NxbDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKG9wdGlvbnMuYW5ub3RhdGlvbi5yYXdRdWVyeSwgb3B0aW9ucy5zY29wZWRWYXJzLCB0aGlzLmludGVycG9sYXRlVmFyaWFibGUpLFxuICAgICAgZm9ybWF0OiAndGFibGUnLFxuICAgIH07XG5cbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgICAuZmV0Y2g8QmFja2VuZERhdGFTb3VyY2VSZXNwb25zZT4oe1xuICAgICAgICAgIHVybDogJy9hcGkvZHMvcXVlcnknLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZyb206IG9wdGlvbnMucmFuZ2UuZnJvbS52YWx1ZU9mKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRvOiBvcHRpb25zLnJhbmdlLnRvLnZhbHVlT2YoKS50b1N0cmluZygpLFxuICAgICAgICAgICAgcXVlcmllczogW3F1ZXJ5XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcXVlc3RJZDogb3B0aW9ucy5hbm5vdGF0aW9uLm5hbWUsXG4gICAgICAgIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgIGFzeW5jIChyZXM6IEZldGNoUmVzcG9uc2U8QmFja2VuZERhdGFTb3VyY2VSZXNwb25zZT4pID0+XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucmVzcG9uc2VQYXJzZXIudHJhbnNmb3JtQW5ub3RhdGlvblJlc3BvbnNlKG9wdGlvbnMsIHJlcy5kYXRhKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICk7XG4gIH1cblxuICBtZXRyaWNGaW5kUXVlcnkocXVlcnk6IHN0cmluZywgb3B0aW9uYWxPcHRpb25zOiBhbnkpOiBQcm9taXNlPE1ldHJpY0ZpbmRWYWx1ZVtdPiB7XG4gICAgbGV0IHJlZklkID0gJ3RlbXB2YXInO1xuICAgIGlmIChvcHRpb25hbE9wdGlvbnMgJiYgb3B0aW9uYWxPcHRpb25zLnZhcmlhYmxlICYmIG9wdGlvbmFsT3B0aW9ucy52YXJpYWJsZS5uYW1lKSB7XG4gICAgICByZWZJZCA9IG9wdGlvbmFsT3B0aW9ucy52YXJpYWJsZS5uYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IHJhd1NxbCA9IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShcbiAgICAgIHF1ZXJ5LFxuICAgICAgZ2V0U2VhcmNoRmlsdGVyU2NvcGVkVmFyKHsgcXVlcnksIHdpbGRjYXJkQ2hhcjogJyUnLCBvcHRpb25zOiBvcHRpb25hbE9wdGlvbnMgfSksXG4gICAgICB0aGlzLmludGVycG9sYXRlVmFyaWFibGVcbiAgICApO1xuXG4gICAgY29uc3QgaW50ZXJwb2xhdGVkUXVlcnkgPSB7XG4gICAgICByZWZJZDogcmVmSWQsXG4gICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgcmF3U3FsLFxuICAgICAgZm9ybWF0OiAndGFibGUnLFxuICAgIH07XG5cbiAgICBjb25zdCByYW5nZSA9IG9wdGlvbmFsT3B0aW9ucz8ucmFuZ2UgYXMgVGltZVJhbmdlO1xuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgICAgLmZldGNoPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KHtcbiAgICAgICAgICB1cmw6ICcvYXBpL2RzL3F1ZXJ5JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBmcm9tOiByYW5nZT8uZnJvbT8udmFsdWVPZigpPy50b1N0cmluZygpLFxuICAgICAgICAgICAgdG86IHJhbmdlPy50bz8udmFsdWVPZigpPy50b1N0cmluZygpLFxuICAgICAgICAgICAgcXVlcmllczogW2ludGVycG9sYXRlZFF1ZXJ5XSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcXVlc3RJZDogcmVmSWQsXG4gICAgICAgIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgocnNwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNwb25zZVBhcnNlci50cmFuc2Zvcm1NZXRyaWNGaW5kUmVzcG9uc2UocnNwKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9tZXRhUmVxdWVzdChyYXdTcWw6IHN0cmluZykge1xuICAgIGNvbnN0IHJlZklkID0gJ21ldGEnO1xuICAgIGNvbnN0IHF1ZXJ5ID0ge1xuICAgICAgcmVmSWQ6IHJlZklkLFxuICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgIHJhd1NxbCxcbiAgICAgIGZvcm1hdDogJ3RhYmxlJyxcbiAgICB9O1xuICAgIHJldHVybiBnZXRCYWNrZW5kU3J2KCkuZmV0Y2g8QmFja2VuZERhdGFTb3VyY2VSZXNwb25zZT4oe1xuICAgICAgdXJsOiAnL2FwaS9kcy9xdWVyeScsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcXVlcmllczogW3F1ZXJ5XSxcbiAgICAgIH0sXG4gICAgICByZXF1ZXN0SWQ6IHJlZklkLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0VmVyc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKHRoaXMuX21ldGFSZXF1ZXN0KFwiU0VMRUNUIGN1cnJlbnRfc2V0dGluZygnc2VydmVyX3ZlcnNpb25fbnVtJyk6OmludC8xMDBcIikpO1xuICB9XG5cbiAgZ2V0VGltZXNjYWxlREJWZXJzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20odGhpcy5fbWV0YVJlcXVlc3QoXCJTRUxFQ1QgZXh0dmVyc2lvbiBGUk9NIHBnX2V4dGVuc2lvbiBXSEVSRSBleHRuYW1lID0gJ3RpbWVzY2FsZWRiJ1wiKSk7XG4gIH1cblxuICB0ZXN0RGF0YXNvdXJjZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKHRoaXMuX21ldGFSZXF1ZXN0KCdTRUxFQ1QgMScpKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4geyBzdGF0dXM6ICdzdWNjZXNzJywgbWVzc2FnZTogJ0RhdGFiYXNlIENvbm5lY3Rpb24gT0snIH07XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gdG9UZXN0aW5nU3RhdHVzKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHRhcmdldENvbnRhaW5zVGVtcGxhdGUodGFyZ2V0OiBhbnkpIHtcbiAgICBsZXQgcmF3U3FsID0gJyc7XG5cbiAgICBpZiAodGFyZ2V0LnJhd1F1ZXJ5KSB7XG4gICAgICByYXdTcWwgPSB0YXJnZXQucmF3U3FsO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBxdWVyeSA9IG5ldyBQb3N0Z3Jlc1F1ZXJ5TW9kZWwodGFyZ2V0KTtcbiAgICAgIHJhd1NxbCA9IHF1ZXJ5LmJ1aWxkUXVlcnkoKTtcbiAgICB9XG5cbiAgICByYXdTcWwgPSByYXdTcWwucmVwbGFjZSgnJF9fJywgJycpO1xuXG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVTcnYuY29udGFpbnNUZW1wbGF0ZShyYXdTcWwpO1xuICB9XG59XG4iLCJpbXBvcnQgUXVlcnlNb2RlbCBmcm9tICcuL3Bvc3RncmVzX3F1ZXJ5X21vZGVsJztcblxuZXhwb3J0IGNsYXNzIFBvc3RncmVzTWV0YVF1ZXJ5IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0YXJnZXQ6IHsgdGFibGU6IHN0cmluZzsgdGltZUNvbHVtbjogc3RyaW5nIH0sIHByaXZhdGUgcXVlcnlNb2RlbDogUXVlcnlNb2RlbCkge31cblxuICBnZXRPcGVyYXRvcnMoZGF0YXR5cGU6IHN0cmluZykge1xuICAgIHN3aXRjaCAoZGF0YXR5cGUpIHtcbiAgICAgIGNhc2UgJ2Zsb2F0NCc6XG4gICAgICBjYXNlICdmbG9hdDgnOiB7XG4gICAgICAgIHJldHVybiBbJz0nLCAnIT0nLCAnPCcsICc8PScsICc+JywgJz49J107XG4gICAgICB9XG4gICAgICBjYXNlICd0ZXh0JzpcbiAgICAgIGNhc2UgJ3ZhcmNoYXInOlxuICAgICAgY2FzZSAnY2hhcic6IHtcbiAgICAgICAgcmV0dXJuIFsnPScsICchPScsICc8JywgJzw9JywgJz4nLCAnPj0nLCAnSU4nLCAnTk9UIElOJywgJ0xJS0UnLCAnTk9UIExJS0UnLCAnficsICd+KicsICchficsICchfionXTtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIFsnPScsICchPScsICc8JywgJzw9JywgJz4nLCAnPj0nLCAnSU4nLCAnTk9UIElOJ107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gcXVvdGUgaWRlbnRpZmllciBhcyBsaXRlcmFsIHRvIHVzZSBpbiBtZXRhZGF0YSBxdWVyaWVzXG4gIHF1b3RlSWRlbnRBc0xpdGVyYWwodmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5TW9kZWwucXVvdGVMaXRlcmFsKHRoaXMucXVlcnlNb2RlbC51bnF1b3RlSWRlbnRpZmllcih2YWx1ZSkpO1xuICB9XG5cbiAgZmluZE1ldHJpY1RhYmxlKCkge1xuICAgIC8vIHF1ZXJ5IHRoYXQgcmV0dXJucyBmaXJzdCB0YWJsZSBmb3VuZCB0aGF0IGhhcyBhIHRpbWVzdGFtcCh0eikgY29sdW1uIGFuZCBhIGZsb2F0IGNvbHVtblxuICAgIGxldCBxdWVyeSA9IGBcblNFTEVDVFxuXHRxdW90ZV9pZGVudCh0YWJsZV9uYW1lKSBhcyB0YWJsZV9uYW1lLFxuXHQoIFNFTEVDVFxuXHQgICAgcXVvdGVfaWRlbnQoY29sdW1uX25hbWUpIGFzIGNvbHVtbl9uYW1lXG5cdCAgRlJPTSBpbmZvcm1hdGlvbl9zY2hlbWEuY29sdW1ucyBjXG4gICAgV0hFUkVcbiAgICAgIGMudGFibGVfc2NoZW1hID0gdC50YWJsZV9zY2hlbWEgQU5EXG4gICAgICBjLnRhYmxlX25hbWUgPSB0LnRhYmxlX25hbWUgQU5EXG4gICAgICB1ZHRfbmFtZSBJTiAoJ3RpbWVzdGFtcHR6JywndGltZXN0YW1wJylcbiAgICBPUkRFUiBCWSBvcmRpbmFsX3Bvc2l0aW9uIExJTUlUIDFcbiAgKSBBUyB0aW1lX2NvbHVtbixcbiAgKCBTRUxFQ1RcbiAgICAgIHF1b3RlX2lkZW50KGNvbHVtbl9uYW1lKSBBUyBjb2x1bW5fbmFtZVxuICAgIEZST00gaW5mb3JtYXRpb25fc2NoZW1hLmNvbHVtbnMgY1xuICAgIFdIRVJFXG4gICAgICBjLnRhYmxlX3NjaGVtYSA9IHQudGFibGVfc2NoZW1hIEFORFxuICAgICAgYy50YWJsZV9uYW1lID0gdC50YWJsZV9uYW1lIEFORFxuICAgICAgdWR0X25hbWU9J2Zsb2F0OCdcbiAgICBPUkRFUiBCWSBvcmRpbmFsX3Bvc2l0aW9uIExJTUlUIDFcbiAgKSBBUyB2YWx1ZV9jb2x1bW5cbkZST00gaW5mb3JtYXRpb25fc2NoZW1hLnRhYmxlcyB0XG5XSEVSRSBgO1xuICAgIHF1ZXJ5ICs9IHRoaXMuYnVpbGRTY2hlbWFDb25zdHJhaW50KCk7XG4gICAgcXVlcnkgKz0gYCBBTkRcbiAgRVhJU1RTXG4gICggU0VMRUNUIDFcbiAgICBGUk9NIGluZm9ybWF0aW9uX3NjaGVtYS5jb2x1bW5zIGNcbiAgICBXSEVSRVxuICAgICAgYy50YWJsZV9zY2hlbWEgPSB0LnRhYmxlX3NjaGVtYSBBTkRcbiAgICAgIGMudGFibGVfbmFtZSA9IHQudGFibGVfbmFtZSBBTkRcbiAgICAgIHVkdF9uYW1lIElOICgndGltZXN0YW1wdHonLCd0aW1lc3RhbXAnKVxuICApIEFORFxuICBFWElTVFNcbiAgKCBTRUxFQ1QgMVxuICAgIEZST00gaW5mb3JtYXRpb25fc2NoZW1hLmNvbHVtbnMgY1xuICAgIFdIRVJFXG4gICAgICBjLnRhYmxlX3NjaGVtYSA9IHQudGFibGVfc2NoZW1hIEFORFxuICAgICAgYy50YWJsZV9uYW1lID0gdC50YWJsZV9uYW1lIEFORFxuICAgICAgdWR0X25hbWU9J2Zsb2F0OCdcbiAgKVxuTElNSVQgMVxuO2A7XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRTY2hlbWFDb25zdHJhaW50KCkge1xuICAgIC8vIHF1b3RlX2lkZW50IHByb3RlY3RzIGh5cGhlbmF0ZWQgc2NoZW1lc1xuICAgIGNvbnN0IHF1ZXJ5ID0gYFxucXVvdGVfaWRlbnQodGFibGVfc2NoZW1hKSBJTiAoXG4gIFNFTEVDVFxuICAgIENBU0UgV0hFTiB0cmltKHNbaV0pID0gJ1wiJHVzZXJcIicgVEhFTiB1c2VyIEVMU0UgdHJpbShzW2ldKSBFTkRcbiAgRlJPTVxuICAgIGdlbmVyYXRlX3NlcmllcyhcbiAgICAgIGFycmF5X2xvd2VyKHN0cmluZ190b19hcnJheShjdXJyZW50X3NldHRpbmcoJ3NlYXJjaF9wYXRoJyksJywnKSwxKSxcbiAgICAgIGFycmF5X3VwcGVyKHN0cmluZ190b19hcnJheShjdXJyZW50X3NldHRpbmcoJ3NlYXJjaF9wYXRoJyksJywnKSwxKVxuICAgICkgYXMgaSxcbiAgICBzdHJpbmdfdG9fYXJyYXkoY3VycmVudF9zZXR0aW5nKCdzZWFyY2hfcGF0aCcpLCcsJykgc1xuKWA7XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRUYWJsZUNvbnN0cmFpbnQodGFibGU6IHN0cmluZykge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuXG4gICAgLy8gY2hlY2sgZm9yIHNjaGVtYSBxdWFsaWZpZWQgdGFibGVcbiAgICBpZiAodGFibGUuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgY29uc3QgcGFydHMgPSB0YWJsZS5zcGxpdCgnLicpO1xuICAgICAgcXVlcnkgPSAndGFibGVfc2NoZW1hID0gJyArIHRoaXMucXVvdGVJZGVudEFzTGl0ZXJhbChwYXJ0c1swXSk7XG4gICAgICBxdWVyeSArPSAnIEFORCB0YWJsZV9uYW1lID0gJyArIHRoaXMucXVvdGVJZGVudEFzTGl0ZXJhbChwYXJ0c1sxXSk7XG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5idWlsZFNjaGVtYUNvbnN0cmFpbnQoKTtcbiAgICAgIHF1ZXJ5ICs9ICcgQU5EIHRhYmxlX25hbWUgPSAnICsgdGhpcy5xdW90ZUlkZW50QXNMaXRlcmFsKHRhYmxlKTtcblxuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cbiAgfVxuXG4gIGJ1aWxkVGFibGVRdWVyeSgpIHtcbiAgICBsZXQgcXVlcnkgPSAnU0VMRUNUIHF1b3RlX2lkZW50KHRhYmxlX25hbWUpIEZST00gaW5mb3JtYXRpb25fc2NoZW1hLnRhYmxlcyBXSEVSRSAnO1xuICAgIHF1ZXJ5ICs9IHRoaXMuYnVpbGRTY2hlbWFDb25zdHJhaW50KCk7XG4gICAgcXVlcnkgKz0gJyBPUkRFUiBCWSB0YWJsZV9uYW1lJztcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZENvbHVtblF1ZXJ5KHR5cGU/OiBzdHJpbmcpIHtcbiAgICBsZXQgcXVlcnkgPSAnU0VMRUNUIHF1b3RlX2lkZW50KGNvbHVtbl9uYW1lKSBGUk9NIGluZm9ybWF0aW9uX3NjaGVtYS5jb2x1bW5zIFdIRVJFICc7XG4gICAgcXVlcnkgKz0gdGhpcy5idWlsZFRhYmxlQ29uc3RyYWludCh0aGlzLnRhcmdldC50YWJsZSk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3RpbWUnOiB7XG4gICAgICAgIHF1ZXJ5ICs9XG4gICAgICAgICAgXCIgQU5EIGRhdGFfdHlwZSBJTiAoJ3RpbWVzdGFtcCB3aXRob3V0IHRpbWUgem9uZScsJ3RpbWVzdGFtcCB3aXRoIHRpbWUgem9uZScsJ2JpZ2ludCcsJ2ludGVnZXInLCdkb3VibGUgcHJlY2lzaW9uJywncmVhbCcpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnbWV0cmljJzoge1xuICAgICAgICBxdWVyeSArPSBcIiBBTkQgZGF0YV90eXBlIElOICgndGV4dCcsJ2NoYXJhY3RlcicsJ2NoYXJhY3RlciB2YXJ5aW5nJylcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICd2YWx1ZSc6IHtcbiAgICAgICAgcXVlcnkgKz0gXCIgQU5EIGRhdGFfdHlwZSBJTiAoJ2JpZ2ludCcsJ2ludGVnZXInLCdkb3VibGUgcHJlY2lzaW9uJywncmVhbCcsJ251bWVyaWMnKVwiO1xuICAgICAgICBxdWVyeSArPSAnIEFORCBjb2x1bW5fbmFtZSA8PiAnICsgdGhpcy5xdW90ZUlkZW50QXNMaXRlcmFsKHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2dyb3VwJzoge1xuICAgICAgICBxdWVyeSArPSBcIiBBTkQgZGF0YV90eXBlIElOICgndGV4dCcsJ2NoYXJhY3RlcicsJ2NoYXJhY3RlciB2YXJ5aW5nJywndXVpZCcpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHF1ZXJ5ICs9ICcgT1JERVIgQlkgY29sdW1uX25hbWUnO1xuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRWYWx1ZVF1ZXJ5KGNvbHVtbjogc3RyaW5nKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJ1NFTEVDVCBESVNUSU5DVCBxdW90ZV9saXRlcmFsKCcgKyBjb2x1bW4gKyAnKSc7XG4gICAgcXVlcnkgKz0gJyBGUk9NICcgKyB0aGlzLnRhcmdldC50YWJsZTtcbiAgICBxdWVyeSArPSAnIFdIRVJFICRfX3RpbWVGaWx0ZXIoJyArIHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4gKyAnKSc7XG4gICAgcXVlcnkgKz0gJyBBTkQgJyArIGNvbHVtbiArICcgSVMgTk9UIE5VTEwnO1xuICAgIHF1ZXJ5ICs9ICcgT1JERVIgQlkgMSBMSU1JVCAxMDAnO1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkRGF0YXR5cGVRdWVyeShjb2x1bW46IHN0cmluZykge1xuICAgIGxldCBxdWVyeSA9ICdTRUxFQ1QgdWR0X25hbWUgRlJPTSBpbmZvcm1hdGlvbl9zY2hlbWEuY29sdW1ucyBXSEVSRSAnO1xuICAgIHF1ZXJ5ICs9IHRoaXMuYnVpbGRUYWJsZUNvbnN0cmFpbnQodGhpcy50YXJnZXQudGFibGUpO1xuICAgIHF1ZXJ5ICs9ICcgQU5EIGNvbHVtbl9uYW1lID0gJyArIHRoaXMucXVvdGVJZGVudEFzTGl0ZXJhbChjb2x1bW4pO1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkQWdncmVnYXRlUXVlcnkoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJ1NFTEVDVCBESVNUSU5DVCBwcm9uYW1lIEZST00gcGdfYWdncmVnYXRlICc7XG4gICAgcXVlcnkgKz0gJ0lOTkVSIEpPSU4gcGdfcHJvYyBPTiBwZ19hZ2dyZWdhdGUuYWdnZm5vaWQgPSBwZ19wcm9jLm9pZCAnO1xuICAgIHF1ZXJ5ICs9ICdJTk5FUiBKT0lOIHBnX3R5cGUgT04gcGdfdHlwZS5vaWQ9cGdfcHJvYy5wcm9yZXR0eXBlICc7XG4gICAgcXVlcnkgKz0gXCJXSEVSRSBwcm9uYXJncz0xIEFORCB0eXBuYW1lIElOICgnZmxvYXQ4JykgQU5EIGFnZ2tpbmQ9J24nIE9SREVSIEJZIDFcIjtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgUG9zdGdyZXNDb25maWdDdHJsIH0gZnJvbSAnLi9jb25maWdfY3RybCc7XG5pbXBvcnQgeyBQb3N0Z3Jlc0RhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgUG9zdGdyZXNRdWVyeUN0cmwgfSBmcm9tICcuL3F1ZXJ5X2N0cmwnO1xuaW1wb3J0IHsgUG9zdGdyZXNRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBkZWZhdWx0UXVlcnkgPSBgU0VMRUNUXG4gIGV4dHJhY3QoZXBvY2ggZnJvbSB0aW1lX2NvbHVtbikgQVMgdGltZSxcbiAgdGV4dF9jb2x1bW4gYXMgdGV4dCxcbiAgdGFnc19jb2x1bW4gYXMgdGFnc1xuRlJPTVxuICBtZXRyaWNfdGFibGVcbldIRVJFXG4gICRfX3RpbWVGaWx0ZXIodGltZV9jb2x1bW4pXG5gO1xuXG5jbGFzcyBQb3N0Z3Jlc0Fubm90YXRpb25zUXVlcnlDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL2Fubm90YXRpb25zLmVkaXRvci5odG1sJztcblxuICBkZWNsYXJlIGFubm90YXRpb246IGFueTtcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55KSB7XG4gICAgdGhpcy5hbm5vdGF0aW9uID0gJHNjb3BlLmN0cmwuYW5ub3RhdGlvbjtcbiAgICB0aGlzLmFubm90YXRpb24ucmF3UXVlcnkgPSB0aGlzLmFubm90YXRpb24ucmF3UXVlcnkgfHwgZGVmYXVsdFF1ZXJ5O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwbHVnaW4gPSBuZXcgRGF0YVNvdXJjZVBsdWdpbjxQb3N0Z3Jlc0RhdGFzb3VyY2UsIFBvc3RncmVzUXVlcnk+KFBvc3RncmVzRGF0YXNvdXJjZSlcbiAgLnNldFF1ZXJ5Q3RybChQb3N0Z3Jlc1F1ZXJ5Q3RybClcbiAgLnNldENvbmZpZ0N0cmwoUG9zdGdyZXNDb25maWdDdHJsKVxuICAuc2V0QW5ub3RhdGlvblF1ZXJ5Q3RybChQb3N0Z3Jlc0Fubm90YXRpb25zUXVlcnlDdHJsKTtcbiIsImltcG9ydCB7IGZpbmQsIG1hcCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFNjb3BlZFZhcnMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RncmVzUXVlcnlNb2RlbCB7XG4gIHRhcmdldDogYW55O1xuICB0ZW1wbGF0ZVNydjogYW55O1xuICBzY29wZWRWYXJzOiBhbnk7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IGFueSwgdGVtcGxhdGVTcnY/OiBUZW1wbGF0ZVNydiwgc2NvcGVkVmFycz86IFNjb3BlZFZhcnMpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLnRlbXBsYXRlU3J2ID0gdGVtcGxhdGVTcnY7XG4gICAgdGhpcy5zY29wZWRWYXJzID0gc2NvcGVkVmFycztcblxuICAgIHRhcmdldC5mb3JtYXQgPSB0YXJnZXQuZm9ybWF0IHx8ICd0aW1lX3Nlcmllcyc7XG4gICAgdGFyZ2V0LnRpbWVDb2x1bW4gPSB0YXJnZXQudGltZUNvbHVtbiB8fCAndGltZSc7XG4gICAgdGFyZ2V0Lm1ldHJpY0NvbHVtbiA9IHRhcmdldC5tZXRyaWNDb2x1bW4gfHwgJ25vbmUnO1xuXG4gICAgdGFyZ2V0Lmdyb3VwID0gdGFyZ2V0Lmdyb3VwIHx8IFtdO1xuICAgIHRhcmdldC53aGVyZSA9IHRhcmdldC53aGVyZSB8fCBbeyB0eXBlOiAnbWFjcm8nLCBuYW1lOiAnJF9fdGltZUZpbHRlcicsIHBhcmFtczogW10gfV07XG4gICAgdGFyZ2V0LnNlbGVjdCA9IHRhcmdldC5zZWxlY3QgfHwgW1t7IHR5cGU6ICdjb2x1bW4nLCBwYXJhbXM6IFsndmFsdWUnXSB9XV07XG5cbiAgICAvLyBoYW5kbGUgcHJlIHF1ZXJ5IGd1aSBwYW5lbHMgZ3JhY2VmdWxseVxuICAgIGlmICghKCdyYXdRdWVyeScgaW4gdGhpcy50YXJnZXQpKSB7XG4gICAgICBpZiAoJ3Jhd1NxbCcgaW4gdGFyZ2V0KSB7XG4gICAgICAgIC8vIHByZSBxdWVyeSBndWkgcGFuZWxcbiAgICAgICAgdGFyZ2V0LnJhd1F1ZXJ5ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5ldyBwYW5lbFxuICAgICAgICB0YXJnZXQucmF3UXVlcnkgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnaXZlIGludGVycG9sYXRlUXVlcnlTdHIgYWNjZXNzIHRvIHRoaXNcbiAgICB0aGlzLmludGVycG9sYXRlUXVlcnlTdHIgPSB0aGlzLmludGVycG9sYXRlUXVlcnlTdHIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIHJlbW92ZSBpZGVudGlmaWVyIHF1b3RpbmcgZnJvbSBpZGVudGlmaWVyIHRvIHVzZSBpbiBtZXRhZGF0YSBxdWVyaWVzXG4gIHVucXVvdGVJZGVudGlmaWVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWVbMF0gPT09ICdcIicgJiYgdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICdcIicpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMSwgdmFsdWUubGVuZ3RoIC0gMSkucmVwbGFjZSgvXCJcIi9nLCAnXCInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHF1b3RlSWRlbnRpZmllcih2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuICdcIicgKyBTdHJpbmcodmFsdWUpLnJlcGxhY2UoL1wiL2csICdcIlwiJykgKyAnXCInO1xuICB9XG5cbiAgcXVvdGVMaXRlcmFsKHZhbHVlOiBhbnkpIHtcbiAgICByZXR1cm4gXCInXCIgKyBTdHJpbmcodmFsdWUpLnJlcGxhY2UoLycvZywgXCInJ1wiKSArIFwiJ1wiO1xuICB9XG5cbiAgZXNjYXBlTGl0ZXJhbCh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvJy9nLCBcIicnXCIpO1xuICB9XG5cbiAgaGFzVGltZUdyb3VwKCkge1xuICAgIHJldHVybiBmaW5kKHRoaXMudGFyZ2V0Lmdyb3VwLCAoZzogYW55KSA9PiBnLnR5cGUgPT09ICd0aW1lJyk7XG4gIH1cblxuICBoYXNNZXRyaWNDb2x1bW4oKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0Lm1ldHJpY0NvbHVtbiAhPT0gJ25vbmUnO1xuICB9XG5cbiAgaW50ZXJwb2xhdGVRdWVyeVN0cih2YWx1ZTogYW55LCB2YXJpYWJsZTogeyBtdWx0aTogYW55OyBpbmNsdWRlQWxsOiBhbnkgfSwgZGVmYXVsdEZvcm1hdEZuOiBhbnkpIHtcbiAgICAvLyBpZiBubyBtdWx0aSBvciBpbmNsdWRlIGFsbCBkbyBub3QgcmVnZXhFc2NhcGVcbiAgICBpZiAoIXZhcmlhYmxlLm11bHRpICYmICF2YXJpYWJsZS5pbmNsdWRlQWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5lc2NhcGVMaXRlcmFsKHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMucXVvdGVMaXRlcmFsKHZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBlc2NhcGVkVmFsdWVzID0gbWFwKHZhbHVlLCB0aGlzLnF1b3RlTGl0ZXJhbCk7XG4gICAgcmV0dXJuIGVzY2FwZWRWYWx1ZXMuam9pbignLCcpO1xuICB9XG5cbiAgcmVuZGVyKGludGVycG9sYXRlPzogYW55KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG5cbiAgICAvLyBuZXcgcXVlcnkgd2l0aCBubyB0YWJsZSBzZXQgeWV0XG4gICAgaWYgKCF0aGlzLnRhcmdldC5yYXdRdWVyeSAmJiAhKCd0YWJsZScgaW4gdGhpcy50YXJnZXQpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXQucmF3UXVlcnkpIHtcbiAgICAgIHRhcmdldC5yYXdTcWwgPSB0aGlzLmJ1aWxkUXVlcnkoKTtcbiAgICB9XG5cbiAgICBpZiAoaW50ZXJwb2xhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodGFyZ2V0LnJhd1NxbCwgdGhpcy5zY29wZWRWYXJzLCB0aGlzLmludGVycG9sYXRlUXVlcnlTdHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGFyZ2V0LnJhd1NxbDtcbiAgICB9XG4gIH1cblxuICBoYXNVbml4RXBvY2hUaW1lY29sdW1uKCkge1xuICAgIHJldHVybiBbJ2ludDQnLCAnaW50OCcsICdmbG9hdDQnLCAnZmxvYXQ4JywgJ251bWVyaWMnXS5pbmRleE9mKHRoaXMudGFyZ2V0LnRpbWVDb2x1bW5UeXBlKSA+IC0xO1xuICB9XG5cbiAgYnVpbGRUaW1lQ29sdW1uKGFsaWFzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRpbWVHcm91cCA9IHRoaXMuaGFzVGltZUdyb3VwKCk7XG4gICAgbGV0IHF1ZXJ5O1xuICAgIGxldCBtYWNybyA9ICckX190aW1lR3JvdXAnO1xuXG4gICAgaWYgKHRpbWVHcm91cCkge1xuICAgICAgbGV0IGFyZ3M7XG4gICAgICBpZiAodGltZUdyb3VwLnBhcmFtcy5sZW5ndGggPiAxICYmIHRpbWVHcm91cC5wYXJhbXNbMV0gIT09ICdub25lJykge1xuICAgICAgICBhcmdzID0gdGltZUdyb3VwLnBhcmFtcy5qb2luKCcsJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcmdzID0gdGltZUdyb3VwLnBhcmFtc1swXTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhhc1VuaXhFcG9jaFRpbWVjb2x1bW4oKSkge1xuICAgICAgICBtYWNybyA9ICckX191bml4RXBvY2hHcm91cCc7XG4gICAgICB9XG4gICAgICBpZiAoYWxpYXMpIHtcbiAgICAgICAgbWFjcm8gKz0gJ0FsaWFzJztcbiAgICAgIH1cbiAgICAgIHF1ZXJ5ID0gbWFjcm8gKyAnKCcgKyB0aGlzLnRhcmdldC50aW1lQ29sdW1uICsgJywnICsgYXJncyArICcpJztcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnkgPSB0aGlzLnRhcmdldC50aW1lQ29sdW1uO1xuICAgICAgaWYgKGFsaWFzKSB7XG4gICAgICAgIHF1ZXJ5ICs9ICcgQVMgXCJ0aW1lXCInO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkTWV0cmljQ29sdW1uKCkge1xuICAgIGlmICh0aGlzLmhhc01ldHJpY0NvbHVtbigpKSB7XG4gICAgICByZXR1cm4gdGhpcy50YXJnZXQubWV0cmljQ29sdW1uICsgJyBBUyBtZXRyaWMnO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGJ1aWxkVmFsdWVDb2x1bW5zKCkge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuICAgIGZvciAoY29uc3QgY29sdW1uIG9mIHRoaXMudGFyZ2V0LnNlbGVjdCkge1xuICAgICAgcXVlcnkgKz0gJyxcXG4gICcgKyB0aGlzLmJ1aWxkVmFsdWVDb2x1bW4oY29sdW1uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZFZhbHVlQ29sdW1uKGNvbHVtbjogYW55KSB7XG4gICAgbGV0IHF1ZXJ5ID0gJyc7XG5cbiAgICBjb25zdCBjb2x1bW5OYW1lOiBhbnkgPSBmaW5kKGNvbHVtbiwgKGc6IGFueSkgPT4gZy50eXBlID09PSAnY29sdW1uJyk7XG4gICAgcXVlcnkgPSBjb2x1bW5OYW1lLnBhcmFtc1swXTtcblxuICAgIGNvbnN0IGFnZ3JlZ2F0ZTogYW55ID0gZmluZChjb2x1bW4sIChnOiBhbnkpID0+IGcudHlwZSA9PT0gJ2FnZ3JlZ2F0ZScgfHwgZy50eXBlID09PSAncGVyY2VudGlsZScpO1xuICAgIGNvbnN0IHdpbmRvd3M6IGFueSA9IGZpbmQoY29sdW1uLCAoZzogYW55KSA9PiBnLnR5cGUgPT09ICd3aW5kb3cnIHx8IGcudHlwZSA9PT0gJ21vdmluZ193aW5kb3cnKTtcblxuICAgIGlmIChhZ2dyZWdhdGUpIHtcbiAgICAgIGNvbnN0IGZ1bmMgPSBhZ2dyZWdhdGUucGFyYW1zWzBdO1xuICAgICAgc3dpdGNoIChhZ2dyZWdhdGUudHlwZSkge1xuICAgICAgICBjYXNlICdhZ2dyZWdhdGUnOlxuICAgICAgICAgIGlmIChmdW5jID09PSAnZmlyc3QnIHx8IGZ1bmMgPT09ICdsYXN0Jykge1xuICAgICAgICAgICAgcXVlcnkgPSBmdW5jICsgJygnICsgcXVlcnkgKyAnLCcgKyB0aGlzLnRhcmdldC50aW1lQ29sdW1uICsgJyknO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeSA9IGZ1bmMgKyAnKCcgKyBxdWVyeSArICcpJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BlcmNlbnRpbGUnOlxuICAgICAgICAgIHF1ZXJ5ID0gZnVuYyArICcoJyArIGFnZ3JlZ2F0ZS5wYXJhbXNbMV0gKyAnKSBXSVRISU4gR1JPVVAgKE9SREVSIEJZICcgKyBxdWVyeSArICcpJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAod2luZG93cykge1xuICAgICAgY29uc3Qgb3ZlclBhcnRzID0gW107XG4gICAgICBpZiAodGhpcy5oYXNNZXRyaWNDb2x1bW4oKSkge1xuICAgICAgICBvdmVyUGFydHMucHVzaCgnUEFSVElUSU9OIEJZICcgKyB0aGlzLnRhcmdldC5tZXRyaWNDb2x1bW4pO1xuICAgICAgfVxuICAgICAgb3ZlclBhcnRzLnB1c2goJ09SREVSIEJZICcgKyB0aGlzLmJ1aWxkVGltZUNvbHVtbihmYWxzZSkpO1xuXG4gICAgICBjb25zdCBvdmVyID0gb3ZlclBhcnRzLmpvaW4oJyAnKTtcbiAgICAgIGxldCBjdXJyOiBzdHJpbmc7XG4gICAgICBsZXQgcHJldjogc3RyaW5nO1xuICAgICAgc3dpdGNoICh3aW5kb3dzLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnd2luZG93JzpcbiAgICAgICAgICBzd2l0Y2ggKHdpbmRvd3MucGFyYW1zWzBdKSB7XG4gICAgICAgICAgICBjYXNlICdkZWx0YSc6XG4gICAgICAgICAgICAgIGN1cnIgPSBxdWVyeTtcbiAgICAgICAgICAgICAgcHJldiA9ICdsYWcoJyArIGN1cnIgKyAnKSBPVkVSICgnICsgb3ZlciArICcpJztcbiAgICAgICAgICAgICAgcXVlcnkgPSBjdXJyICsgJyAtICcgKyBwcmV2O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2luY3JlYXNlJzpcbiAgICAgICAgICAgICAgY3VyciA9IHF1ZXJ5O1xuICAgICAgICAgICAgICBwcmV2ID0gJ2xhZygnICsgY3VyciArICcpIE9WRVIgKCcgKyBvdmVyICsgJyknO1xuICAgICAgICAgICAgICBxdWVyeSA9ICcoQ0FTRSBXSEVOICcgKyBjdXJyICsgJyA+PSAnICsgcHJldiArICcgVEhFTiAnICsgY3VyciArICcgLSAnICsgcHJldjtcbiAgICAgICAgICAgICAgcXVlcnkgKz0gJyBXSEVOICcgKyBwcmV2ICsgJyBJUyBOVUxMIFRIRU4gTlVMTCBFTFNFICcgKyBjdXJyICsgJyBFTkQpJztcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyYXRlJzpcbiAgICAgICAgICAgICAgbGV0IHRpbWVDb2x1bW4gPSB0aGlzLnRhcmdldC50aW1lQ29sdW1uO1xuICAgICAgICAgICAgICBpZiAoYWdncmVnYXRlKSB7XG4gICAgICAgICAgICAgICAgdGltZUNvbHVtbiA9ICdtaW4oJyArIHRpbWVDb2x1bW4gKyAnKSc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjdXJyID0gcXVlcnk7XG4gICAgICAgICAgICAgIHByZXYgPSAnbGFnKCcgKyBjdXJyICsgJykgT1ZFUiAoJyArIG92ZXIgKyAnKSc7XG4gICAgICAgICAgICAgIHF1ZXJ5ID0gJyhDQVNFIFdIRU4gJyArIGN1cnIgKyAnID49ICcgKyBwcmV2ICsgJyBUSEVOICcgKyBjdXJyICsgJyAtICcgKyBwcmV2O1xuICAgICAgICAgICAgICBxdWVyeSArPSAnIFdIRU4gJyArIHByZXYgKyAnIElTIE5VTEwgVEhFTiBOVUxMIEVMU0UgJyArIGN1cnIgKyAnIEVORCknO1xuICAgICAgICAgICAgICBxdWVyeSArPSAnL2V4dHJhY3QoZXBvY2ggZnJvbSAnICsgdGltZUNvbHVtbiArICcgLSBsYWcoJyArIHRpbWVDb2x1bW4gKyAnKSBPVkVSICgnICsgb3ZlciArICcpKSc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcXVlcnkgPSB3aW5kb3dzLnBhcmFtc1swXSArICcoJyArIHF1ZXJ5ICsgJykgT1ZFUiAoJyArIG92ZXIgKyAnKSc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbW92aW5nX3dpbmRvdyc6XG4gICAgICAgICAgcXVlcnkgPSB3aW5kb3dzLnBhcmFtc1swXSArICcoJyArIHF1ZXJ5ICsgJykgT1ZFUiAoJyArIG92ZXIgKyAnIFJPV1MgJyArIHdpbmRvd3MucGFyYW1zWzFdICsgJyBQUkVDRURJTkcpJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhbGlhczogYW55ID0gZmluZChjb2x1bW4sIChnOiBhbnkpID0+IGcudHlwZSA9PT0gJ2FsaWFzJyk7XG4gICAgaWYgKGFsaWFzKSB7XG4gICAgICBxdWVyeSArPSAnIEFTICcgKyB0aGlzLnF1b3RlSWRlbnRpZmllcihhbGlhcy5wYXJhbXNbMF0pO1xuICAgIH1cblxuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIGJ1aWxkV2hlcmVDbGF1c2UoKSB7XG4gICAgbGV0IHF1ZXJ5ID0gJyc7XG4gICAgY29uc3QgY29uZGl0aW9ucyA9IG1hcCh0aGlzLnRhcmdldC53aGVyZSwgKHRhZywgaW5kZXgpID0+IHtcbiAgICAgIHN3aXRjaCAodGFnLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnbWFjcm8nOlxuICAgICAgICAgIHJldHVybiB0YWcubmFtZSArICcoJyArIHRoaXMudGFyZ2V0LnRpbWVDb2x1bW4gKyAnKSc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2V4cHJlc3Npb24nOlxuICAgICAgICAgIHJldHVybiB0YWcucGFyYW1zLmpvaW4oJyAnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb25kaXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHF1ZXJ5ID0gJ1xcbldIRVJFXFxuICAnICsgY29uZGl0aW9ucy5qb2luKCcgQU5EXFxuICAnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBidWlsZEdyb3VwQ2xhdXNlKCkge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuICAgIGxldCBncm91cFNlY3Rpb24gPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXJnZXQuZ3JvdXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcnQgPSB0aGlzLnRhcmdldC5ncm91cFtpXTtcbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICBncm91cFNlY3Rpb24gKz0gJywgJztcbiAgICAgIH1cbiAgICAgIGlmIChwYXJ0LnR5cGUgPT09ICd0aW1lJykge1xuICAgICAgICBncm91cFNlY3Rpb24gKz0gJzEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JvdXBTZWN0aW9uICs9IHBhcnQucGFyYW1zWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChncm91cFNlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBxdWVyeSA9ICdcXG5HUk9VUCBCWSAnICsgZ3JvdXBTZWN0aW9uO1xuICAgICAgaWYgKHRoaXMuaGFzTWV0cmljQ29sdW1uKCkpIHtcbiAgICAgICAgcXVlcnkgKz0gJywyJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgYnVpbGRRdWVyeSgpIHtcbiAgICBsZXQgcXVlcnkgPSAnU0VMRUNUJztcblxuICAgIHF1ZXJ5ICs9ICdcXG4gICcgKyB0aGlzLmJ1aWxkVGltZUNvbHVtbigpO1xuICAgIGlmICh0aGlzLmhhc01ldHJpY0NvbHVtbigpKSB7XG4gICAgICBxdWVyeSArPSAnLFxcbiAgJyArIHRoaXMuYnVpbGRNZXRyaWNDb2x1bW4oKTtcbiAgICB9XG4gICAgcXVlcnkgKz0gdGhpcy5idWlsZFZhbHVlQ29sdW1ucygpO1xuXG4gICAgcXVlcnkgKz0gJ1xcbkZST00gJyArIHRoaXMudGFyZ2V0LnRhYmxlO1xuXG4gICAgcXVlcnkgKz0gdGhpcy5idWlsZFdoZXJlQ2xhdXNlKCk7XG4gICAgcXVlcnkgKz0gdGhpcy5idWlsZEdyb3VwQ2xhdXNlKCk7XG5cbiAgICBxdWVyeSArPSAnXFxuT1JERVIgQlkgMSc7XG4gICAgaWYgKHRoaXMuaGFzTWV0cmljQ29sdW1uKCkpIHtcbiAgICAgIHF1ZXJ5ICs9ICcsMic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBhdXRvIH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBjbG9uZSwgZmlsdGVyLCBmaW5kLCBmaW5kSW5kZXgsIGluZGV4T2YsIG1hcCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFBhbmVsRXZlbnRzLCBRdWVyeVJlc3VsdE1ldGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBTcWxQYXJ0IH0gZnJvbSAnYXBwL2FuZ3VsYXIvY29tcG9uZW50cy9zcWxfcGFydC9zcWxfcGFydCc7XG5pbXBvcnQgYXBwRXZlbnRzIGZyb20gJ2FwcC9jb3JlL2FwcF9ldmVudHMnO1xuaW1wb3J0IHsgVmFyaWFibGVXaXRoTXVsdGlTdXBwb3J0IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3ZhcmlhYmxlcy90eXBlcyc7XG5pbXBvcnQgeyBRdWVyeUN0cmwgfSBmcm9tICdhcHAvcGx1Z2lucy9zZGsnO1xuaW1wb3J0IHsgU2hvd0NvbmZpcm1Nb2RhbEV2ZW50IH0gZnJvbSAnYXBwL3R5cGVzL2V2ZW50cyc7XG5cbmltcG9ydCB7IFBvc3RncmVzTWV0YVF1ZXJ5IH0gZnJvbSAnLi9tZXRhX3F1ZXJ5JztcbmltcG9ydCBQb3N0Z3Jlc1F1ZXJ5TW9kZWwgZnJvbSAnLi9wb3N0Z3Jlc19xdWVyeV9tb2RlbCc7XG5pbXBvcnQgc3FsUGFydCBmcm9tICcuL3NxbF9wYXJ0JztcblxuY29uc3QgZGVmYXVsdFF1ZXJ5ID0gYFNFTEVDVFxuICAkX190aW1lKHRpbWVfY29sdW1uKSxcbiAgdmFsdWUxXG5GUk9NXG4gIG1ldHJpY190YWJsZVxuV0hFUkVcbiAgJF9fdGltZUZpbHRlcih0aW1lX2NvbHVtbilcbmA7XG5cbmV4cG9ydCBjbGFzcyBQb3N0Z3Jlc1F1ZXJ5Q3RybCBleHRlbmRzIFF1ZXJ5Q3RybCB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdwYXJ0aWFscy9xdWVyeS5lZGl0b3IuaHRtbCc7XG5cbiAgZm9ybWF0czogYW55W107XG4gIHF1ZXJ5TW9kZWw6IFBvc3RncmVzUXVlcnlNb2RlbDtcbiAgbWV0YUJ1aWxkZXI6IFBvc3RncmVzTWV0YVF1ZXJ5O1xuICBsYXN0UXVlcnlNZXRhPzogUXVlcnlSZXN1bHRNZXRhO1xuICBsYXN0UXVlcnlFcnJvcj86IHN0cmluZztcbiAgc2hvd0hlbHAgPSBmYWxzZTtcbiAgdGFibGVTZWdtZW50OiBhbnk7XG4gIHdoZXJlQWRkOiBhbnk7XG4gIHRpbWVDb2x1bW5TZWdtZW50OiBhbnk7XG4gIG1ldHJpY0NvbHVtblNlZ21lbnQ6IGFueTtcbiAgc2VsZWN0TWVudTogYW55W10gPSBbXTtcbiAgc2VsZWN0UGFydHM6IFNxbFBhcnRbXVtdID0gW1tdXTtcbiAgZ3JvdXBQYXJ0czogU3FsUGFydFtdID0gW107XG4gIHdoZXJlUGFydHM6IFNxbFBhcnRbXSA9IFtdO1xuICBncm91cEFkZDogYW55O1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgJHNjb3BlOiBhbnksXG4gICAgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnYsXG4gICAgcHJpdmF0ZSB1aVNlZ21lbnRTcnY6IGFueVxuICApIHtcbiAgICBzdXBlcigkc2NvcGUsICRpbmplY3Rvcik7XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICB0aGlzLnF1ZXJ5TW9kZWwgPSBuZXcgUG9zdGdyZXNRdWVyeU1vZGVsKHRoaXMudGFyZ2V0LCB0ZW1wbGF0ZVNydiwgdGhpcy5wYW5lbC5zY29wZWRWYXJzKTtcbiAgICB0aGlzLm1ldGFCdWlsZGVyID0gbmV3IFBvc3RncmVzTWV0YVF1ZXJ5KHRoaXMudGFyZ2V0LCB0aGlzLnF1ZXJ5TW9kZWwpO1xuICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbigpO1xuXG4gICAgdGhpcy5mb3JtYXRzID0gW1xuICAgICAgeyB0ZXh0OiAnVGltZSBzZXJpZXMnLCB2YWx1ZTogJ3RpbWVfc2VyaWVzJyB9LFxuICAgICAgeyB0ZXh0OiAnVGFibGUnLCB2YWx1ZTogJ3RhYmxlJyB9LFxuICAgIF07XG5cbiAgICBpZiAoIXRoaXMudGFyZ2V0LnJhd1NxbCkge1xuICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyB3aGVuIGluIHRhYmxlIHBhbmVsXG4gICAgICBpZiAodGhpcy5wYW5lbEN0cmwucGFuZWwudHlwZSA9PT0gJ3RhYmxlJykge1xuICAgICAgICB0aGlzLnRhcmdldC5mb3JtYXQgPSAndGFibGUnO1xuICAgICAgICB0aGlzLnRhcmdldC5yYXdTcWwgPSAnU0VMRUNUIDEnO1xuICAgICAgICB0aGlzLnRhcmdldC5yYXdRdWVyeSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhcmdldC5yYXdTcWwgPSBkZWZhdWx0UXVlcnk7XG4gICAgICAgIHRoaXMuZGF0YXNvdXJjZS5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5maW5kTWV0cmljVGFibGUoKSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRhYmxlID0gcmVzdWx0WzBdLnRleHQ7XG4gICAgICAgICAgICBsZXQgc2VnbWVudCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodGhpcy50YXJnZXQudGFibGUpO1xuICAgICAgICAgICAgdGhpcy50YWJsZVNlZ21lbnQuaHRtbCA9IHNlZ21lbnQuaHRtbDtcbiAgICAgICAgICAgIHRoaXMudGFibGVTZWdtZW50LnZhbHVlID0gc2VnbWVudC52YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy50YXJnZXQudGltZUNvbHVtbiA9IHJlc3VsdFsxXS50ZXh0O1xuICAgICAgICAgICAgc2VnbWVudCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodGhpcy50YXJnZXQudGltZUNvbHVtbik7XG4gICAgICAgICAgICB0aGlzLnRpbWVDb2x1bW5TZWdtZW50Lmh0bWwgPSBzZWdtZW50Lmh0bWw7XG4gICAgICAgICAgICB0aGlzLnRpbWVDb2x1bW5TZWdtZW50LnZhbHVlID0gc2VnbWVudC52YWx1ZTtcblxuICAgICAgICAgICAgdGhpcy50YXJnZXQudGltZUNvbHVtblR5cGUgPSAndGltZXN0YW1wJztcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNlbGVjdCA9IFtbeyB0eXBlOiAnY29sdW1uJywgcGFyYW1zOiBbcmVzdWx0WzJdLnRleHRdIH1dXTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvamVjdGlvbigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMudGFyZ2V0LnRhYmxlKSB7XG4gICAgICB0aGlzLnRhYmxlU2VnbWVudCA9IHVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdmFsdWU6ICdzZWxlY3QgdGFibGUnLCBmYWtlOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhYmxlU2VnbWVudCA9IHVpU2VnbWVudFNydi5uZXdTZWdtZW50KHRoaXMudGFyZ2V0LnRhYmxlKTtcbiAgICB9XG5cbiAgICB0aGlzLnRpbWVDb2x1bW5TZWdtZW50ID0gdWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodGhpcy50YXJnZXQudGltZUNvbHVtbik7XG4gICAgdGhpcy5tZXRyaWNDb2x1bW5TZWdtZW50ID0gdWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQodGhpcy50YXJnZXQubWV0cmljQ29sdW1uKTtcblxuICAgIHRoaXMuYnVpbGRTZWxlY3RNZW51KCk7XG4gICAgdGhpcy53aGVyZUFkZCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1BsdXNCdXR0b24oKTtcbiAgICB0aGlzLmdyb3VwQWRkID0gdGhpcy51aVNlZ21lbnRTcnYubmV3UGx1c0J1dHRvbigpO1xuXG4gICAgdGhpcy5wYW5lbEN0cmwuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLmRhdGFSZWNlaXZlZCwgdGhpcy5vbkRhdGFSZWNlaXZlZC5iaW5kKHRoaXMpLCAkc2NvcGUpO1xuICAgIHRoaXMucGFuZWxDdHJsLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5kYXRhRXJyb3IsIHRoaXMub25EYXRhRXJyb3IuYmluZCh0aGlzKSwgJHNjb3BlKTtcbiAgfVxuXG4gIHVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKSB7XG4gICAgaWYgKCF0aGlzLnRhcmdldC5yYXdRdWVyeSkge1xuICAgICAgdGhpcy50YXJnZXQucmF3U3FsID0gdGhpcy5xdWVyeU1vZGVsLmJ1aWxkUXVlcnkoKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhbmVsQ3RybC5yZWZyZXNoKCk7XG4gIH1cblxuICB0aW1lc2NhbGVBZ2dDaGVjaygpIHtcbiAgICBjb25zdCBhZ2dJbmRleCA9IHRoaXMuZmluZEFnZ3JlZ2F0ZUluZGV4KHRoaXMuc2VsZWN0UGFydHNbMF0pO1xuXG4gICAgLy8gYWRkIG9yIHJlbW92ZSBUaW1lc2NhbGVEQiBhZ2dyZWdhdGUgZnVuY3Rpb25zIGFzIG5lZWRlZFxuICAgIGlmIChhZ2dJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IGJhc2VPcHRzID0gdGhpcy5zZWxlY3RQYXJ0c1swXVthZ2dJbmRleF0uZGVmLnBhcmFtc1swXS5iYXNlT3B0aW9ucztcbiAgICAgIGNvbnN0IHRpbWVzY2FsZU9wdHMgPSBiYXNlT3B0cy5jb25jYXQodGhpcy5zZWxlY3RQYXJ0c1swXVthZ2dJbmRleF0uZGVmLnBhcmFtc1swXS50aW1lc2NhbGVPcHRpb25zKTtcblxuICAgICAgaWYgKHRoaXMuZGF0YXNvdXJjZS5qc29uRGF0YS50aW1lc2NhbGVkYiA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnNlbGVjdFBhcnRzWzBdW2FnZ0luZGV4XS5kZWYucGFyYW1zWzBdLm9wdGlvbnMgPSB0aW1lc2NhbGVPcHRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RQYXJ0c1swXVthZ2dJbmRleF0uZGVmLnBhcmFtc1swXS5vcHRpb25zID0gYmFzZU9wdHM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUHJvamVjdGlvbigpIHtcbiAgICB0aGlzLnNlbGVjdFBhcnRzID0gbWFwKHRoaXMudGFyZ2V0LnNlbGVjdCwgKHBhcnRzOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBtYXAocGFydHMsIHNxbFBhcnQuY3JlYXRlKS5maWx0ZXIoKG4pID0+IG4pO1xuICAgIH0pO1xuICAgIHRoaXMudGltZXNjYWxlQWdnQ2hlY2soKTtcbiAgICB0aGlzLndoZXJlUGFydHMgPSBtYXAodGhpcy50YXJnZXQud2hlcmUsIHNxbFBhcnQuY3JlYXRlKS5maWx0ZXIoKG4pID0+IG4pO1xuICAgIHRoaXMuZ3JvdXBQYXJ0cyA9IG1hcCh0aGlzLnRhcmdldC5ncm91cCwgc3FsUGFydC5jcmVhdGUpLmZpbHRlcigobikgPT4gbik7XG4gIH1cblxuICB1cGRhdGVQZXJzaXN0ZWRQYXJ0cygpIHtcbiAgICB0aGlzLnRhcmdldC5zZWxlY3QgPSBtYXAodGhpcy5zZWxlY3RQYXJ0cywgKHNlbGVjdFBhcnRzKSA9PiB7XG4gICAgICByZXR1cm4gbWFwKHNlbGVjdFBhcnRzLCAocGFydDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiB7IHR5cGU6IHBhcnQuZGVmLnR5cGUsIGRhdGF0eXBlOiBwYXJ0LmRhdGF0eXBlLCBwYXJhbXM6IHBhcnQucGFyYW1zIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnRpbWVzY2FsZUFnZ0NoZWNrKCk7XG4gICAgdGhpcy50YXJnZXQud2hlcmUgPSBtYXAodGhpcy53aGVyZVBhcnRzLCAocGFydDogYW55KSA9PiB7XG4gICAgICByZXR1cm4geyB0eXBlOiBwYXJ0LmRlZi50eXBlLCBkYXRhdHlwZTogcGFydC5kYXRhdHlwZSwgbmFtZTogcGFydC5uYW1lLCBwYXJhbXM6IHBhcnQucGFyYW1zIH07XG4gICAgfSk7XG4gICAgdGhpcy50YXJnZXQuZ3JvdXAgPSBtYXAodGhpcy5ncm91cFBhcnRzLCAocGFydDogYW55KSA9PiB7XG4gICAgICByZXR1cm4geyB0eXBlOiBwYXJ0LmRlZi50eXBlLCBkYXRhdHlwZTogcGFydC5kYXRhdHlwZSwgcGFyYW1zOiBwYXJ0LnBhcmFtcyB9O1xuICAgIH0pO1xuICB9XG5cbiAgYnVpbGRTZWxlY3RNZW51KCkge1xuICAgIHRoaXMuc2VsZWN0TWVudSA9IFtdO1xuICAgIGNvbnN0IGFnZ3JlZ2F0ZXMgPSB7XG4gICAgICB0ZXh0OiAnQWdncmVnYXRlIEZ1bmN0aW9ucycsXG4gICAgICB2YWx1ZTogJ2FnZ3JlZ2F0ZScsXG4gICAgICBzdWJtZW51OiBbXG4gICAgICAgIHsgdGV4dDogJ0F2ZXJhZ2UnLCB2YWx1ZTogJ2F2ZycgfSxcbiAgICAgICAgeyB0ZXh0OiAnQ291bnQnLCB2YWx1ZTogJ2NvdW50JyB9LFxuICAgICAgICB7IHRleHQ6ICdNYXhpbXVtJywgdmFsdWU6ICdtYXgnIH0sXG4gICAgICAgIHsgdGV4dDogJ01pbmltdW0nLCB2YWx1ZTogJ21pbicgfSxcbiAgICAgICAgeyB0ZXh0OiAnU3VtJywgdmFsdWU6ICdzdW0nIH0sXG4gICAgICAgIHsgdGV4dDogJ1N0YW5kYXJkIGRldmlhdGlvbicsIHZhbHVlOiAnc3RkZGV2JyB9LFxuICAgICAgICB7IHRleHQ6ICdWYXJpYW5jZScsIHZhbHVlOiAndmFyaWFuY2UnIH0sXG4gICAgICBdLFxuICAgIH07XG5cbiAgICAvLyBmaXJzdCBhbmQgbGFzdCBhZ2dyZWdhdGUgYXJlIHRpbWVzY2FsZWRiIHNwZWNpZmljXG4gICAgaWYgKHRoaXMuZGF0YXNvdXJjZS5qc29uRGF0YS50aW1lc2NhbGVkYiA9PT0gdHJ1ZSkge1xuICAgICAgYWdncmVnYXRlcy5zdWJtZW51LnB1c2goeyB0ZXh0OiAnRmlyc3QnLCB2YWx1ZTogJ2ZpcnN0JyB9KTtcbiAgICAgIGFnZ3JlZ2F0ZXMuc3VibWVudS5wdXNoKHsgdGV4dDogJ0xhc3QnLCB2YWx1ZTogJ2xhc3QnIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0TWVudS5wdXNoKGFnZ3JlZ2F0ZXMpO1xuXG4gICAgLy8gb3JkZXJlZCBzZXQgYWdncmVnYXRlcyByZXF1aXJlIHBvc3RncmVzIDkuNCtcbiAgICBpZiAodGhpcy5kYXRhc291cmNlLmpzb25EYXRhLnBvc3RncmVzVmVyc2lvbiA+PSA5MDQpIHtcbiAgICAgIGNvbnN0IGFnZ3JlZ2F0ZXMyID0ge1xuICAgICAgICB0ZXh0OiAnT3JkZXJlZC1TZXQgQWdncmVnYXRlIEZ1bmN0aW9ucycsXG4gICAgICAgIHZhbHVlOiAncGVyY2VudGlsZScsXG4gICAgICAgIHN1Ym1lbnU6IFtcbiAgICAgICAgICB7IHRleHQ6ICdQZXJjZW50aWxlIChjb250aW51b3VzKScsIHZhbHVlOiAncGVyY2VudGlsZV9jb250JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1BlcmNlbnRpbGUgKGRpc2NyZXRlKScsIHZhbHVlOiAncGVyY2VudGlsZV9kaXNjJyB9LFxuICAgICAgICBdLFxuICAgICAgfTtcbiAgICAgIHRoaXMuc2VsZWN0TWVudS5wdXNoKGFnZ3JlZ2F0ZXMyKTtcbiAgICB9XG5cbiAgICBjb25zdCB3aW5kb3dzID0ge1xuICAgICAgdGV4dDogJ1dpbmRvdyBGdW5jdGlvbnMnLFxuICAgICAgdmFsdWU6ICd3aW5kb3cnLFxuICAgICAgc3VibWVudTogW1xuICAgICAgICB7IHRleHQ6ICdEZWx0YScsIHZhbHVlOiAnZGVsdGEnIH0sXG4gICAgICAgIHsgdGV4dDogJ0luY3JlYXNlJywgdmFsdWU6ICdpbmNyZWFzZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnUmF0ZScsIHZhbHVlOiAncmF0ZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnU3VtJywgdmFsdWU6ICdzdW0nIH0sXG4gICAgICAgIHsgdGV4dDogJ01vdmluZyBBdmVyYWdlJywgdmFsdWU6ICdhdmcnLCB0eXBlOiAnbW92aW5nX3dpbmRvdycgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgICB0aGlzLnNlbGVjdE1lbnUucHVzaCh3aW5kb3dzKTtcblxuICAgIHRoaXMuc2VsZWN0TWVudS5wdXNoKHsgdGV4dDogJ0FsaWFzJywgdmFsdWU6ICdhbGlhcycgfSk7XG4gICAgdGhpcy5zZWxlY3RNZW51LnB1c2goeyB0ZXh0OiAnQ29sdW1uJywgdmFsdWU6ICdjb2x1bW4nIH0pO1xuICB9XG5cbiAgdG9nZ2xlRWRpdG9yTW9kZSgpIHtcbiAgICBpZiAodGhpcy50YXJnZXQucmF3UXVlcnkpIHtcbiAgICAgIGFwcEV2ZW50cy5wdWJsaXNoKFxuICAgICAgICBuZXcgU2hvd0NvbmZpcm1Nb2RhbEV2ZW50KHtcbiAgICAgICAgICB0aXRsZTogJ1dhcm5pbmcnLFxuICAgICAgICAgIHRleHQyOiAnU3dpdGNoaW5nIHRvIHF1ZXJ5IGJ1aWxkZXIgbWF5IG92ZXJ3cml0ZSB5b3VyIHJhdyBTUUwuJyxcbiAgICAgICAgICBpY29uOiAnZXhjbGFtYXRpb24tdHJpYW5nbGUnLFxuICAgICAgICAgIHllc1RleHQ6ICdTd2l0Y2gnLFxuICAgICAgICAgIG9uQ29uZmlybTogKCkgPT4ge1xuICAgICAgICAgICAgLy8gVGhpcyBjb3VsZCBiZSBjYWxsZWQgZnJvbSBSZWFjdCwgc28gd3JhcCBpbiAkZXZhbEFzeW5jLlxuICAgICAgICAgICAgLy8gV2lsbCB0aGVuIGVpdGhlciBydW4gYXMgcGFydCBvZiB0aGUgY3VycmVudCBkaWdlc3QgY3ljbGUgb3IgdHJpZ2dlciBhIG5ldyBvbmUuXG4gICAgICAgICAgICB0aGlzLiRzY29wZS4kZXZhbEFzeW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy50YXJnZXQucmF3UXVlcnkgPSAhdGhpcy50YXJnZXQucmF3UXVlcnk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBjb3VsZCBiZSBjYWxsZWQgZnJvbSBSZWFjdCwgc28gd3JhcCBpbiAkZXZhbEFzeW5jLlxuICAgICAgLy8gV2lsbCB0aGVuIGVpdGhlciBydW4gYXMgcGFydCBvZiB0aGUgY3VycmVudCBkaWdlc3QgY3ljbGUgb3IgdHJpZ2dlciBhIG5ldyBvbmUuXG4gICAgICB0aGlzLiRzY29wZS4kZXZhbEFzeW5jKCgpID0+IHtcbiAgICAgICAgdGhpcy50YXJnZXQucmF3UXVlcnkgPSAhdGhpcy50YXJnZXQucmF3UXVlcnk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXNldFBsdXNCdXR0b24oYnV0dG9uOiB7IGh0bWw6IGFueTsgdmFsdWU6IGFueTsgdHlwZTogYW55OyBmYWtlOiBhbnkgfSkge1xuICAgIGNvbnN0IHBsdXNCdXR0b24gPSB0aGlzLnVpU2VnbWVudFNydi5uZXdQbHVzQnV0dG9uKCk7XG4gICAgYnV0dG9uLmh0bWwgPSBwbHVzQnV0dG9uLmh0bWw7XG4gICAgYnV0dG9uLnZhbHVlID0gcGx1c0J1dHRvbi52YWx1ZTtcbiAgICBidXR0b24udHlwZSA9IHBsdXNCdXR0b24udHlwZTtcbiAgICBidXR0b24uZmFrZSA9IHBsdXNCdXR0b24uZmFrZTtcbiAgfVxuXG4gIGdldFRhYmxlU2VnbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkVGFibGVRdWVyeSgpKVxuICAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHt9KSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gIH1cblxuICB0YWJsZUNoYW5nZWQoKSB7XG4gICAgdGhpcy50YXJnZXQudGFibGUgPSB0aGlzLnRhYmxlU2VnbWVudC52YWx1ZTtcbiAgICB0aGlzLnRhcmdldC53aGVyZSA9IFtdO1xuICAgIHRoaXMudGFyZ2V0Lmdyb3VwID0gW107XG4gICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uKCk7XG5cbiAgICBjb25zdCBzZWdtZW50ID0gdGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCgnbm9uZScpO1xuICAgIHRoaXMubWV0cmljQ29sdW1uU2VnbWVudC5odG1sID0gc2VnbWVudC5odG1sO1xuICAgIHRoaXMubWV0cmljQ29sdW1uU2VnbWVudC52YWx1ZSA9IHNlZ21lbnQudmFsdWU7XG4gICAgdGhpcy50YXJnZXQubWV0cmljQ29sdW1uID0gJ25vbmUnO1xuXG4gICAgY29uc3QgdGFzazEgPSB0aGlzLmRhdGFzb3VyY2UubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgndGltZScpKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgLy8gY2hlY2sgaWYgdGltZSBjb2x1bW4gaXMgc3RpbGwgdmFsaWRcbiAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCAmJiAhZmluZChyZXN1bHQsIChyOiBhbnkpID0+IHIudGV4dCA9PT0gdGhpcy50YXJnZXQudGltZUNvbHVtbikpIHtcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQocmVzdWx0WzBdLnRleHQpO1xuICAgICAgICB0aGlzLnRpbWVDb2x1bW5TZWdtZW50Lmh0bWwgPSBzZWdtZW50Lmh0bWw7XG4gICAgICAgIHRoaXMudGltZUNvbHVtblNlZ21lbnQudmFsdWUgPSBzZWdtZW50LnZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudGltZUNvbHVtbkNoYW5nZWQoZmFsc2UpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRhc2syID0gdGhpcy5kYXRhc291cmNlLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQ29sdW1uUXVlcnkoJ3ZhbHVlJykpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy50YXJnZXQuc2VsZWN0ID0gW1t7IHR5cGU6ICdjb2x1bW4nLCBwYXJhbXM6IFtyZXN1bHRbMF0udGV4dF0gfV1dO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb2plY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIFByb21pc2UuYWxsKFt0YXNrMSwgdGFzazJdKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VGltZUNvbHVtblNlZ21lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCd0aW1lJykpXG4gICAgICAudGhlbih0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoe30pKVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHRpbWVDb2x1bW5DaGFuZ2VkKHJlZnJlc2g/OiBib29sZWFuKSB7XG4gICAgdGhpcy50YXJnZXQudGltZUNvbHVtbiA9IHRoaXMudGltZUNvbHVtblNlZ21lbnQudmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkRGF0YXR5cGVRdWVyeSh0aGlzLnRhcmdldC50aW1lQ29sdW1uKSlcbiAgICAgIC50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGlmICh0aGlzLnRhcmdldC50aW1lQ29sdW1uVHlwZSAhPT0gcmVzdWx0WzBdLnRleHQpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnRpbWVDb2x1bW5UeXBlID0gcmVzdWx0WzBdLnRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBwYXJ0TW9kZWw7XG4gICAgICAgICAgaWYgKHRoaXMucXVlcnlNb2RlbC5oYXNVbml4RXBvY2hUaW1lY29sdW1uKCkpIHtcbiAgICAgICAgICAgIHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ21hY3JvJywgbmFtZTogJyRfX3VuaXhFcG9jaEZpbHRlcicsIHBhcmFtczogW10gfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ21hY3JvJywgbmFtZTogJyRfX3RpbWVGaWx0ZXInLCBwYXJhbXM6IFtdIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLndoZXJlUGFydHMubGVuZ3RoID49IDEgJiYgdGhpcy53aGVyZVBhcnRzWzBdLmRlZi50eXBlID09PSAnbWFjcm8nKSB7XG4gICAgICAgICAgICAvLyByZXBsYWNlIGN1cnJlbnQgbWFjcm9cbiAgICAgICAgICAgIHRoaXMud2hlcmVQYXJ0c1swXSA9IHBhcnRNb2RlbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53aGVyZVBhcnRzLnNwbGljZSgwLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgICAgICAgaWYgKHJlZnJlc2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgZ2V0TWV0cmljQ29sdW1uU2VnbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQ29sdW1uUXVlcnkoJ21ldHJpYycpKVxuICAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHsgYWRkTm9uZTogdHJ1ZSB9KSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gIH1cblxuICBtZXRyaWNDb2x1bW5DaGFuZ2VkKCkge1xuICAgIHRoaXMudGFyZ2V0Lm1ldHJpY0NvbHVtbiA9IHRoaXMubWV0cmljQ29sdW1uU2VnbWVudC52YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgfVxuXG4gIG9uRGF0YVJlY2VpdmVkKGRhdGFMaXN0OiBhbnkpIHtcbiAgICB0aGlzLmxhc3RRdWVyeUVycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFzdFF1ZXJ5TWV0YSA9IGRhdGFMaXN0WzBdPy5tZXRhO1xuICB9XG5cbiAgb25EYXRhRXJyb3IoZXJyOiBhbnkpIHtcbiAgICBpZiAoZXJyLmRhdGEgJiYgZXJyLmRhdGEucmVzdWx0cykge1xuICAgICAgY29uc3QgcXVlcnlSZXMgPSBlcnIuZGF0YS5yZXN1bHRzW3RoaXMudGFyZ2V0LnJlZklkXTtcbiAgICAgIGlmIChxdWVyeVJlcykge1xuICAgICAgICB0aGlzLmxhc3RRdWVyeUVycm9yID0gcXVlcnlSZXMuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHJhbnNmb3JtVG9TZWdtZW50cyhjb25maWc6IHsgYWRkTm9uZT86IGFueTsgYWRkVGVtcGxhdGVWYXJzPzogYW55OyB0ZW1wbGF0ZVF1b3Rlcj86IGFueSB9KSB7XG4gICAgcmV0dXJuIChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHNlZ21lbnRzID0gbWFwKHJlc3VsdHMsIChzZWdtZW50KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHtcbiAgICAgICAgICB2YWx1ZTogc2VnbWVudC50ZXh0LFxuICAgICAgICAgIGV4cGFuZGFibGU6IHNlZ21lbnQuZXhwYW5kYWJsZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvbmZpZy5hZGRUZW1wbGF0ZVZhcnMpIHtcbiAgICAgICAgZm9yIChjb25zdCB2YXJpYWJsZSBvZiB0aGlzLnRlbXBsYXRlU3J2LmdldFZhcmlhYmxlcygpKSB7XG4gICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgIHZhbHVlID0gJyQnICsgdmFyaWFibGUubmFtZTtcbiAgICAgICAgICBpZiAoY29uZmlnLnRlbXBsYXRlUXVvdGVyICYmICh2YXJpYWJsZSBhcyB1bmtub3duIGFzIFZhcmlhYmxlV2l0aE11bHRpU3VwcG9ydCkubXVsdGkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGNvbmZpZy50ZW1wbGF0ZVF1b3Rlcih2YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VnbWVudHMudW5zaGlmdChcbiAgICAgICAgICAgIHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoe1xuICAgICAgICAgICAgICB0eXBlOiAndGVtcGxhdGUnLFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5hZGROb25lKSB7XG4gICAgICAgIHNlZ21lbnRzLnVuc2hpZnQodGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHR5cGU6ICd0ZW1wbGF0ZScsIHZhbHVlOiAnbm9uZScsIGV4cGFuZGFibGU6IHRydWUgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VnbWVudHM7XG4gICAgfTtcbiAgfVxuXG4gIGZpbmRBZ2dyZWdhdGVJbmRleChzZWxlY3RQYXJ0czogYW55KSB7XG4gICAgcmV0dXJuIGZpbmRJbmRleChzZWxlY3RQYXJ0cywgKHA6IGFueSkgPT4gcC5kZWYudHlwZSA9PT0gJ2FnZ3JlZ2F0ZScgfHwgcC5kZWYudHlwZSA9PT0gJ3BlcmNlbnRpbGUnKTtcbiAgfVxuXG4gIGZpbmRXaW5kb3dJbmRleChzZWxlY3RQYXJ0czogYW55KSB7XG4gICAgcmV0dXJuIGZpbmRJbmRleChzZWxlY3RQYXJ0cywgKHA6IGFueSkgPT4gcC5kZWYudHlwZSA9PT0gJ3dpbmRvdycgfHwgcC5kZWYudHlwZSA9PT0gJ21vdmluZ193aW5kb3cnKTtcbiAgfVxuXG4gIGFkZFNlbGVjdFBhcnQoc2VsZWN0UGFydHM6IGFueVtdLCBpdGVtOiB7IHZhbHVlOiBhbnkgfSwgc3ViSXRlbTogeyB0eXBlOiBhbnk7IHZhbHVlOiBhbnkgfSkge1xuICAgIGxldCBwYXJ0VHlwZSA9IGl0ZW0udmFsdWU7XG4gICAgaWYgKHN1Ykl0ZW0gJiYgc3ViSXRlbS50eXBlKSB7XG4gICAgICBwYXJ0VHlwZSA9IHN1Ykl0ZW0udHlwZTtcbiAgICB9XG4gICAgbGV0IHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogcGFydFR5cGUgfSk7XG4gICAgaWYgKHN1Ykl0ZW0pIHtcbiAgICAgIHBhcnRNb2RlbC5wYXJhbXNbMF0gPSBzdWJJdGVtLnZhbHVlO1xuICAgIH1cbiAgICBsZXQgYWRkQWxpYXMgPSBmYWxzZTtcblxuICAgIHN3aXRjaCAocGFydFR5cGUpIHtcbiAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgIGNvbnN0IHBhcnRzID0gbWFwKHNlbGVjdFBhcnRzLCAocGFydDogYW55KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogcGFydC5kZWYudHlwZSwgcGFyYW1zOiBjbG9uZShwYXJ0LnBhcmFtcykgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNlbGVjdFBhcnRzLnB1c2gocGFydHMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BlcmNlbnRpbGUnOlxuICAgICAgY2FzZSAnYWdncmVnYXRlJzpcbiAgICAgICAgLy8gYWRkIGdyb3VwIGJ5IGlmIG5vIGdyb3VwIGJ5IHlldFxuICAgICAgICBpZiAodGhpcy50YXJnZXQuZ3JvdXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5hZGRHcm91cCgndGltZScsICckX19pbnRlcnZhbCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFnZ0luZGV4ID0gdGhpcy5maW5kQWdncmVnYXRlSW5kZXgoc2VsZWN0UGFydHMpO1xuICAgICAgICBpZiAoYWdnSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgLy8gcmVwbGFjZSBjdXJyZW50IGFnZ3JlZ2F0aW9uXG4gICAgICAgICAgc2VsZWN0UGFydHNbYWdnSW5kZXhdID0gcGFydE1vZGVsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdFBhcnRzLnNwbGljZSgxLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZmluZChzZWxlY3RQYXJ0cywgKHA6IGFueSkgPT4gcC5kZWYudHlwZSA9PT0gJ2FsaWFzJykpIHtcbiAgICAgICAgICBhZGRBbGlhcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdtb3Zpbmdfd2luZG93JzpcbiAgICAgIGNhc2UgJ3dpbmRvdyc6XG4gICAgICAgIGNvbnN0IHdpbmRvd0luZGV4ID0gdGhpcy5maW5kV2luZG93SW5kZXgoc2VsZWN0UGFydHMpO1xuICAgICAgICBpZiAod2luZG93SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgLy8gcmVwbGFjZSBjdXJyZW50IHdpbmRvdyBmdW5jdGlvblxuICAgICAgICAgIHNlbGVjdFBhcnRzW3dpbmRvd0luZGV4XSA9IHBhcnRNb2RlbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBhZ2dJbmRleCA9IHRoaXMuZmluZEFnZ3JlZ2F0ZUluZGV4KHNlbGVjdFBhcnRzKTtcbiAgICAgICAgICBpZiAoYWdnSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBzZWxlY3RQYXJ0cy5zcGxpY2UoYWdnSW5kZXggKyAxLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RQYXJ0cy5zcGxpY2UoMSwgMCwgcGFydE1vZGVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmaW5kKHNlbGVjdFBhcnRzLCAocDogYW55KSA9PiBwLmRlZi50eXBlID09PSAnYWxpYXMnKSkge1xuICAgICAgICAgIGFkZEFsaWFzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FsaWFzJzpcbiAgICAgICAgYWRkQWxpYXMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoYWRkQWxpYXMpIHtcbiAgICAgIC8vIHNldCBpbml0aWFsIGFsaWFzIG5hbWUgdG8gY29sdW1uIG5hbWVcbiAgICAgIHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ2FsaWFzJywgcGFyYW1zOiBbc2VsZWN0UGFydHNbMF0ucGFyYW1zWzBdLnJlcGxhY2UoL1wiL2csICcnKV0gfSk7XG4gICAgICBpZiAoc2VsZWN0UGFydHNbc2VsZWN0UGFydHMubGVuZ3RoIC0gMV0uZGVmLnR5cGUgPT09ICdhbGlhcycpIHtcbiAgICAgICAgc2VsZWN0UGFydHNbc2VsZWN0UGFydHMubGVuZ3RoIC0gMV0gPSBwYXJ0TW9kZWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RQYXJ0cy5wdXNoKHBhcnRNb2RlbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICB9XG5cbiAgcmVtb3ZlU2VsZWN0UGFydChzZWxlY3RQYXJ0czogYW55LCBwYXJ0OiB7IGRlZjogeyB0eXBlOiBzdHJpbmcgfSB9KSB7XG4gICAgaWYgKHBhcnQuZGVmLnR5cGUgPT09ICdjb2x1bW4nKSB7XG4gICAgICAvLyByZW1vdmUgYWxsIHBhcnRzIG9mIGNvbHVtbiB1bmxlc3MgaXRzIGxhc3QgY29sdW1uXG4gICAgICBpZiAodGhpcy5zZWxlY3RQYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsc0luZGV4ID0gaW5kZXhPZih0aGlzLnNlbGVjdFBhcnRzLCBzZWxlY3RQYXJ0cyk7XG4gICAgICAgIHRoaXMuc2VsZWN0UGFydHMuc3BsaWNlKG1vZGVsc0luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFydEluZGV4ID0gaW5kZXhPZihzZWxlY3RQYXJ0cywgcGFydCk7XG4gICAgICBzZWxlY3RQYXJ0cy5zcGxpY2UocGFydEluZGV4LCAxKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3RQYXJ0RXZlbnQoc2VsZWN0UGFydHM6IGFueSwgcGFydDogeyBkZWY6IGFueSB9LCBldnQ6IHsgbmFtZTogYW55IH0pIHtcbiAgICBzd2l0Y2ggKGV2dC5uYW1lKSB7XG4gICAgICBjYXNlICdnZXQtcGFyYW0tb3B0aW9ucyc6IHtcbiAgICAgICAgc3dpdGNoIChwYXJ0LmRlZi50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYWdncmVnYXRlJzpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgICAgICAgICAgLm1ldHJpY0ZpbmRRdWVyeSh0aGlzLm1ldGFCdWlsZGVyLmJ1aWxkQWdncmVnYXRlUXVlcnkoKSlcbiAgICAgICAgICAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHt9KSlcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgICAgICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgndmFsdWUnKSlcbiAgICAgICAgICAgICAgLnRoZW4odGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHt9KSlcbiAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSAncGFydC1wYXJhbS1jaGFuZ2VkJzoge1xuICAgICAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2FjdGlvbic6IHtcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RQYXJ0KHNlbGVjdFBhcnRzLCBwYXJ0KTtcbiAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZ2V0LXBhcnQtYWN0aW9ucyc6IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbeyB0ZXh0OiAnUmVtb3ZlJywgdmFsdWU6ICdyZW1vdmUtcGFydCcgfV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUdyb3VwUGFydEV2ZW50KHBhcnQ6IGFueSwgaW5kZXg6IGFueSwgZXZ0OiB7IG5hbWU6IGFueSB9KSB7XG4gICAgc3dpdGNoIChldnQubmFtZSkge1xuICAgICAgY2FzZSAnZ2V0LXBhcmFtLW9wdGlvbnMnOiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgpKVxuICAgICAgICAgIC50aGVuKHRoaXMudHJhbnNmb3JtVG9TZWdtZW50cyh7fSkpXG4gICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3BhcnQtcGFyYW0tY2hhbmdlZCc6IHtcbiAgICAgICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdhY3Rpb24nOiB7XG4gICAgICAgIHRoaXMucmVtb3ZlR3JvdXAocGFydCwgaW5kZXgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJhd1NxbEFuZFJlZnJlc2goKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdnZXQtcGFydC1hY3Rpb25zJzoge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFt7IHRleHQ6ICdSZW1vdmUnLCB2YWx1ZTogJ3JlbW92ZS1wYXJ0JyB9XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWRkR3JvdXAocGFydFR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGxldCBwYXJhbXMgPSBbdmFsdWVdO1xuICAgIGlmIChwYXJ0VHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICBwYXJhbXMgPSBbJyRfX2ludGVydmFsJywgJ25vbmUnXTtcbiAgICB9XG4gICAgY29uc3QgcGFydE1vZGVsID0gc3FsUGFydC5jcmVhdGUoeyB0eXBlOiBwYXJ0VHlwZSwgcGFyYW1zOiBwYXJhbXMgfSk7XG5cbiAgICBpZiAocGFydFR5cGUgPT09ICd0aW1lJykge1xuICAgICAgLy8gcHV0IHRpbWVHcm91cCBhdCBzdGFydFxuICAgICAgdGhpcy5ncm91cFBhcnRzLnNwbGljZSgwLCAwLCBwYXJ0TW9kZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyb3VwUGFydHMucHVzaChwYXJ0TW9kZWwpO1xuICAgIH1cblxuICAgIC8vIGFkZCBhZ2dyZWdhdGVzIHdoZW4gYWRkaW5nIGdyb3VwIGJ5XG4gICAgZm9yIChjb25zdCBzZWxlY3RQYXJ0cyBvZiB0aGlzLnNlbGVjdFBhcnRzKSB7XG4gICAgICBpZiAoIXNlbGVjdFBhcnRzLnNvbWUoKHBhcnQpID0+IHBhcnQuZGVmLnR5cGUgPT09ICdhZ2dyZWdhdGUnKSkge1xuICAgICAgICBjb25zdCBhZ2dyZWdhdGUgPSBzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6ICdhZ2dyZWdhdGUnLCBwYXJhbXM6IFsnYXZnJ10gfSk7XG4gICAgICAgIHNlbGVjdFBhcnRzLnNwbGljZSgxLCAwLCBhZ2dyZWdhdGUpO1xuICAgICAgICBpZiAoIXNlbGVjdFBhcnRzLnNvbWUoKHBhcnQpID0+IHBhcnQuZGVmLnR5cGUgPT09ICdhbGlhcycpKSB7XG4gICAgICAgICAgY29uc3QgYWxpYXMgPSBzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6ICdhbGlhcycsIHBhcmFtczogW3NlbGVjdFBhcnRzWzBdLnBhcnQucGFyYW1zWzBdXSB9KTtcbiAgICAgICAgICBzZWxlY3RQYXJ0cy5wdXNoKGFsaWFzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgfVxuXG4gIHJlbW92ZUdyb3VwKHBhcnQ6IHsgZGVmOiB7IHR5cGU6IHN0cmluZyB9IH0sIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAocGFydC5kZWYudHlwZSA9PT0gJ3RpbWUnKSB7XG4gICAgICAvLyByZW1vdmUgYWdncmVnYXRpb25zXG4gICAgICB0aGlzLnNlbGVjdFBhcnRzID0gbWFwKHRoaXMuc2VsZWN0UGFydHMsIChzOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcihzLCAocGFydDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHBhcnQuZGVmLnR5cGUgPT09ICdhZ2dyZWdhdGUnIHx8IHBhcnQuZGVmLnR5cGUgPT09ICdwZXJjZW50aWxlJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmdyb3VwUGFydHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gIH1cblxuICBoYW5kbGVXaGVyZVBhcnRFdmVudCh3aGVyZVBhcnRzOiBhbnksIHBhcnQ6IGFueSwgZXZ0OiBhbnksIGluZGV4OiBhbnkpIHtcbiAgICBzd2l0Y2ggKGV2dC5uYW1lKSB7XG4gICAgICBjYXNlICdnZXQtcGFyYW0tb3B0aW9ucyc6IHtcbiAgICAgICAgc3dpdGNoIChldnQucGFyYW0ubmFtZSkge1xuICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgICAgICAgICAubWV0cmljRmluZFF1ZXJ5KHRoaXMubWV0YUJ1aWxkZXIuYnVpbGRDb2x1bW5RdWVyeSgpKVxuICAgICAgICAgICAgICAudGhlbih0aGlzLnRyYW5zZm9ybVRvU2VnbWVudHMoe30pKVxuICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVRdWVyeUVycm9yLmJpbmQodGhpcykpO1xuICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgIGlmIChbJ2ludDQnLCAnaW50OCcsICdmbG9hdDQnLCAnZmxvYXQ4JywgJ3RpbWVzdGFtcCcsICd0aW1lc3RhbXB0eiddLmluZGV4T2YocGFydC5kYXRhdHlwZSkgPiAtMSkge1xuICAgICAgICAgICAgICAvLyBkb24ndCBkbyB2YWx1ZSBsb29rdXBzIGZvciBudW1lcmljYWwgZmllbGRzXG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVxuICAgICAgICAgICAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZFZhbHVlUXVlcnkocGFydC5wYXJhbXNbMF0pKVxuICAgICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1Ub1NlZ21lbnRzKHtcbiAgICAgICAgICAgICAgICAgICAgYWRkVGVtcGxhdGVWYXJzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVF1b3RlcjogKHY6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5TW9kZWwucXVvdGVMaXRlcmFsKHYpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlUXVlcnlFcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlICdvcCc6XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMudWlTZWdtZW50U3J2Lm5ld09wZXJhdG9ycyh0aGlzLm1ldGFCdWlsZGVyLmdldE9wZXJhdG9ycyhwYXJ0LmRhdGF0eXBlKSkpO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2FzZSAncGFydC1wYXJhbS1jaGFuZ2VkJzoge1xuICAgICAgICB0aGlzLnVwZGF0ZVBlcnNpc3RlZFBhcnRzKCk7XG4gICAgICAgIHRoaXMuZGF0YXNvdXJjZS5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZERhdGF0eXBlUXVlcnkocGFydC5wYXJhbXNbMF0pKS50aGVuKChkOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHBhcnQuZGF0YXR5cGUgPSBkWzBdLnRleHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnYWN0aW9uJzoge1xuICAgICAgICAvLyByZW1vdmUgZWxlbWVudFxuICAgICAgICB3aGVyZVBhcnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHRoaXMudXBkYXRlUGVyc2lzdGVkUGFydHMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZ2V0LXBhcnQtYWN0aW9ucyc6IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbeyB0ZXh0OiAnUmVtb3ZlJywgdmFsdWU6ICdyZW1vdmUtcGFydCcgfV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFdoZXJlT3B0aW9ucygpIHtcbiAgICBjb25zdCBvcHRpb25zID0gW107XG4gICAgaWYgKHRoaXMucXVlcnlNb2RlbC5oYXNVbml4RXBvY2hUaW1lY29sdW1uKCkpIHtcbiAgICAgIG9wdGlvbnMucHVzaCh0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdHlwZTogJ21hY3JvJywgdmFsdWU6ICckX191bml4RXBvY2hGaWx0ZXInIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB0eXBlOiAnbWFjcm8nLCB2YWx1ZTogJyRfX3RpbWVGaWx0ZXInIH0pKTtcbiAgICB9XG4gICAgb3B0aW9ucy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB0eXBlOiAnZXhwcmVzc2lvbicsIHZhbHVlOiAnRXhwcmVzc2lvbicgfSkpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUob3B0aW9ucyk7XG4gIH1cblxuICBhZGRXaGVyZUFjdGlvbihwYXJ0OiBhbnksIGluZGV4OiBhbnkpIHtcbiAgICBzd2l0Y2ggKHRoaXMud2hlcmVBZGQudHlwZSkge1xuICAgICAgY2FzZSAnbWFjcm8nOiB7XG4gICAgICAgIGNvbnN0IHBhcnRNb2RlbCA9IHNxbFBhcnQuY3JlYXRlKHsgdHlwZTogJ21hY3JvJywgbmFtZTogdGhpcy53aGVyZUFkZC52YWx1ZSwgcGFyYW1zOiBbXSB9KTtcbiAgICAgICAgaWYgKHRoaXMud2hlcmVQYXJ0cy5sZW5ndGggPj0gMSAmJiB0aGlzLndoZXJlUGFydHNbMF0uZGVmLnR5cGUgPT09ICdtYWNybycpIHtcbiAgICAgICAgICAvLyByZXBsYWNlIGN1cnJlbnQgbWFjcm9cbiAgICAgICAgICB0aGlzLndoZXJlUGFydHNbMF0gPSBwYXJ0TW9kZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy53aGVyZVBhcnRzLnNwbGljZSgwLCAwLCBwYXJ0TW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aGlzLndoZXJlUGFydHMucHVzaChzcWxQYXJ0LmNyZWF0ZSh7IHR5cGU6ICdleHByZXNzaW9uJywgcGFyYW1zOiBbJ3ZhbHVlJywgJz0nLCAndmFsdWUnXSB9KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVQZXJzaXN0ZWRQYXJ0cygpO1xuICAgIHRoaXMucmVzZXRQbHVzQnV0dG9uKHRoaXMud2hlcmVBZGQpO1xuICAgIHRoaXMudXBkYXRlUmF3U3FsQW5kUmVmcmVzaCgpO1xuICB9XG5cbiAgZ2V0R3JvdXBPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFzb3VyY2VcbiAgICAgIC5tZXRyaWNGaW5kUXVlcnkodGhpcy5tZXRhQnVpbGRlci5idWlsZENvbHVtblF1ZXJ5KCdncm91cCcpKVxuICAgICAgLnRoZW4oKHRhZ3M6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG4gICAgICAgIGlmICghdGhpcy5xdWVyeU1vZGVsLmhhc1RpbWVHcm91cCgpKSB7XG4gICAgICAgICAgb3B0aW9ucy5wdXNoKHRoaXMudWlTZWdtZW50U3J2Lm5ld1NlZ21lbnQoeyB0eXBlOiAndGltZScsIHZhbHVlOiAndGltZSgkX19pbnRlcnZhbCxub25lKScgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgdGFnIG9mIHRhZ3MpIHtcbiAgICAgICAgICBvcHRpb25zLnB1c2godGhpcy51aVNlZ21lbnRTcnYubmV3U2VnbWVudCh7IHR5cGU6ICdjb2x1bW4nLCB2YWx1ZTogdGFnLnRleHQgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZVF1ZXJ5RXJyb3IuYmluZCh0aGlzKSk7XG4gIH1cblxuICBhZGRHcm91cEFjdGlvbigpIHtcbiAgICB0aGlzLmFkZEdyb3VwKHRoaXMuZ3JvdXBBZGQudHlwZSwgdGhpcy5ncm91cEFkZC52YWx1ZSk7XG4gICAgdGhpcy5yZXNldFBsdXNCdXR0b24odGhpcy5ncm91cEFkZCk7XG4gICAgdGhpcy51cGRhdGVSYXdTcWxBbmRSZWZyZXNoKCk7XG4gIH1cblxuICBoYW5kbGVRdWVyeUVycm9yKGVycjogYW55KTogYW55W10ge1xuICAgIHRoaXMuZXJyb3IgPSBlcnIubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGlzc3VlIG1ldHJpYyBxdWVyeSc7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBbm5vdGF0aW9uRXZlbnQsIERhdGFGcmFtZSwgTWV0cmljRmluZFZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlLCBGZXRjaFJlc3BvbnNlLCB0b0RhdGFRdWVyeVJlc3BvbnNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNlUGFyc2VyIHtcbiAgdHJhbnNmb3JtTWV0cmljRmluZFJlc3BvbnNlKHJhdzogRmV0Y2hSZXNwb25zZTxCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlPik6IE1ldHJpY0ZpbmRWYWx1ZVtdIHtcbiAgICBjb25zdCBmcmFtZXMgPSB0b0RhdGFRdWVyeVJlc3BvbnNlKHJhdykuZGF0YSBhcyBEYXRhRnJhbWVbXTtcblxuICAgIGlmICghZnJhbWVzIHx8ICFmcmFtZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgZnJhbWUgPSBmcmFtZXNbMF07XG5cbiAgICBjb25zdCB2YWx1ZXM6IE1ldHJpY0ZpbmRWYWx1ZVtdID0gW107XG4gICAgY29uc3QgdGV4dEZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ19fdGV4dCcpO1xuICAgIGNvbnN0IHZhbHVlRmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAnX192YWx1ZScpO1xuXG4gICAgaWYgKHRleHRGaWVsZCAmJiB2YWx1ZUZpZWxkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRGaWVsZC52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWVzLnB1c2goeyB0ZXh0OiAnJyArIHRleHRGaWVsZC52YWx1ZXMuZ2V0KGkpLCB2YWx1ZTogJycgKyB2YWx1ZUZpZWxkLnZhbHVlcy5nZXQoaSkgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlcy5wdXNoKFxuICAgICAgICAuLi5mcmFtZS5maWVsZHNcbiAgICAgICAgICAuZmxhdE1hcCgoZikgPT4gZi52YWx1ZXMudG9BcnJheSgpKVxuICAgICAgICAgIC5tYXAoKHYpID0+ICh7XG4gICAgICAgICAgICB0ZXh0OiB2LFxuICAgICAgICAgIH0pKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHZhbHVlcy5tYXAoKHYpID0+IHYudGV4dCkpKS5tYXAoKHRleHQpID0+ICh7XG4gICAgICB0ZXh0LFxuICAgICAgdmFsdWU6IHZhbHVlcy5maW5kKCh2KSA9PiB2LnRleHQgPT09IHRleHQpPy52YWx1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBhc3luYyB0cmFuc2Zvcm1Bbm5vdGF0aW9uUmVzcG9uc2Uob3B0aW9uczogYW55LCBkYXRhOiBCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlKTogUHJvbWlzZTxBbm5vdGF0aW9uRXZlbnRbXT4ge1xuICAgIGNvbnN0IGZyYW1lcyA9IHRvRGF0YVF1ZXJ5UmVzcG9uc2UoeyBkYXRhOiBkYXRhIH0pLmRhdGEgYXMgRGF0YUZyYW1lW107XG4gICAgaWYgKCFmcmFtZXMgfHwgIWZyYW1lcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZnJhbWUgPSBmcmFtZXNbMF07XG4gICAgY29uc3QgdGltZUZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ3RpbWUnKTtcblxuICAgIGlmICghdGltZUZpZWxkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgbWFuZGF0b3J5IHRpbWUgY29sdW1uICh3aXRoIHRpbWUgY29sdW1uIGFsaWFzKSBpbiBhbm5vdGF0aW9uIHF1ZXJ5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgdGltZUVuZEZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ3RpbWVlbmQnKTtcbiAgICBjb25zdCB0ZXh0RmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAndGV4dCcpO1xuICAgIGNvbnN0IHRhZ3NGaWVsZCA9IGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICd0YWdzJyk7XG5cbiAgICBjb25zdCBsaXN0OiBBbm5vdGF0aW9uRXZlbnRbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJhbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRpbWVFbmQgPSB0aW1lRW5kRmllbGQgJiYgdGltZUVuZEZpZWxkLnZhbHVlcy5nZXQoaSkgPyBNYXRoLmZsb29yKHRpbWVFbmRGaWVsZC52YWx1ZXMuZ2V0KGkpKSA6IHVuZGVmaW5lZDtcbiAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgIGFubm90YXRpb246IG9wdGlvbnMuYW5ub3RhdGlvbixcbiAgICAgICAgdGltZTogTWF0aC5mbG9vcih0aW1lRmllbGQudmFsdWVzLmdldChpKSksXG4gICAgICAgIHRpbWVFbmQsXG4gICAgICAgIHRleHQ6IHRleHRGaWVsZCAmJiB0ZXh0RmllbGQudmFsdWVzLmdldChpKSA/IHRleHRGaWVsZC52YWx1ZXMuZ2V0KGkpIDogJycsXG4gICAgICAgIHRhZ3M6XG4gICAgICAgICAgdGFnc0ZpZWxkICYmIHRhZ3NGaWVsZC52YWx1ZXMuZ2V0KGkpXG4gICAgICAgICAgICA/IHRhZ3NGaWVsZC52YWx1ZXNcbiAgICAgICAgICAgICAgICAuZ2V0KGkpXG4gICAgICAgICAgICAgICAgLnRyaW0oKVxuICAgICAgICAgICAgICAgIC5zcGxpdCgvXFxzKixcXHMqLylcbiAgICAgICAgICAgIDogW10sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3FsUGFydERlZiwgU3FsUGFydCB9IGZyb20gJ2FwcC9hbmd1bGFyL2NvbXBvbmVudHMvc3FsX3BhcnQvc3FsX3BhcnQnO1xuXG5jb25zdCBpbmRleDogYW55W10gPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlUGFydChwYXJ0OiBhbnkpOiBhbnkge1xuICBjb25zdCBkZWYgPSBpbmRleFtwYXJ0LnR5cGVdO1xuICBpZiAoIWRlZikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTcWxQYXJ0KHBhcnQsIGRlZik7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyKG9wdGlvbnM6IGFueSkge1xuICBpbmRleFtvcHRpb25zLnR5cGVdID0gbmV3IFNxbFBhcnREZWYob3B0aW9ucyk7XG59XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2NvbHVtbicsXG4gIHN0eWxlOiAnbGFiZWwnLFxuICBwYXJhbXM6IFt7IHR5cGU6ICdjb2x1bW4nLCBkeW5hbWljTG9va3VwOiB0cnVlIH1dLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3ZhbHVlJ10sXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnZXhwcmVzc2lvbicsXG4gIHN0eWxlOiAnZXhwcmVzc2lvbicsXG4gIGxhYmVsOiAnRXhwcjonLFxuICBwYXJhbXM6IFtcbiAgICB7IG5hbWU6ICdsZWZ0JywgdHlwZTogJ3N0cmluZycsIGR5bmFtaWNMb29rdXA6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdvcCcsIHR5cGU6ICdzdHJpbmcnLCBkeW5hbWljTG9va3VwOiB0cnVlIH0sXG4gICAgeyBuYW1lOiAncmlnaHQnLCB0eXBlOiAnc3RyaW5nJywgZHluYW1pY0xvb2t1cDogdHJ1ZSB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3ZhbHVlJywgJz0nLCAndmFsdWUnXSxcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdtYWNybycsXG4gIHN0eWxlOiAnbGFiZWwnLFxuICBsYWJlbDogJ01hY3JvOicsXG4gIHBhcmFtczogW10sXG4gIGRlZmF1bHRQYXJhbXM6IFtdLFxufSk7XG5cbnJlZ2lzdGVyKHtcbiAgdHlwZTogJ2FnZ3JlZ2F0ZScsXG4gIHN0eWxlOiAnbGFiZWwnLFxuICBwYXJhbXM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnbmFtZScsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIG9wdGlvbnM6IFtdLFxuICAgICAgYmFzZU9wdGlvbnM6IFsnYXZnJywgJ2NvdW50JywgJ21pbicsICdtYXgnLCAnc3VtJywgJ3N0ZGRldicsICd2YXJpYW5jZSddLFxuICAgICAgdGltZXNjYWxlT3B0aW9uczogWydmaXJzdCcsICdsYXN0J10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWydhdmcnXSxcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICdwZXJjZW50aWxlJyxcbiAgbGFiZWw6ICdBZ2dyZWdhdGU6JyxcbiAgc3R5bGU6ICdsYWJlbCcsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICduYW1lJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uczogWydwZXJjZW50aWxlX2NvbnQnLCAncGVyY2VudGlsZV9kaXNjJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZnJhY3Rpb24nLFxuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBvcHRpb25zOiBbJzAuNScsICcwLjc1JywgJzAuOScsICcwLjk1JywgJzAuOTknXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ3BlcmNlbnRpbGVfY29udCcsICcwLjk1J10sXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnYWxpYXMnLFxuICBzdHlsZTogJ2xhYmVsJyxcbiAgcGFyYW1zOiBbeyBuYW1lOiAnbmFtZScsIHR5cGU6ICdzdHJpbmcnLCBxdW90ZTogJ2RvdWJsZScgfV0sXG4gIGRlZmF1bHRQYXJhbXM6IFsnYWxpYXMnXSxcbn0pO1xuXG5yZWdpc3Rlcih7XG4gIHR5cGU6ICd0aW1lJyxcbiAgc3R5bGU6ICdmdW5jdGlvbicsXG4gIGxhYmVsOiAndGltZScsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdpbnRlcnZhbCcsXG4gICAgICB0eXBlOiAnaW50ZXJ2YWwnLFxuICAgICAgb3B0aW9uczogWyckX19pbnRlcnZhbCcsICcxcycsICcxMHMnLCAnMW0nLCAnNW0nLCAnMTBtJywgJzE1bScsICcxaCddLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2ZpbGwnLFxuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBvcHRpb25zOiBbJ25vbmUnLCAnTlVMTCcsICdwcmV2aW91cycsICcwJ10sXG4gICAgfSxcbiAgXSxcbiAgZGVmYXVsdFBhcmFtczogWyckX19pbnRlcnZhbCcsICdub25lJ10sXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnd2luZG93JyxcbiAgc3R5bGU6ICdsYWJlbCcsXG4gIHBhcmFtczogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdmdW5jdGlvbicsXG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIG9wdGlvbnM6IFsnZGVsdGEnLCAnaW5jcmVhc2UnLCAncmF0ZScsICdzdW0nXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2luY3JlYXNlJ10sXG59KTtcblxucmVnaXN0ZXIoe1xuICB0eXBlOiAnbW92aW5nX3dpbmRvdycsXG4gIHN0eWxlOiAnbGFiZWwnLFxuICBsYWJlbDogJ01vdmluZyBXaW5kb3c6JyxcbiAgcGFyYW1zOiBbXG4gICAge1xuICAgICAgbmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgb3B0aW9uczogWydhdmcnXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICd3aW5kb3dfc2l6ZScsXG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIG9wdGlvbnM6IFsnMycsICc1JywgJzcnLCAnMTAnLCAnMjAnXSxcbiAgICB9LFxuICBdLFxuICBkZWZhdWx0UGFyYW1zOiBbJ2F2ZycsICc1J10sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGU6IGNyZWF0ZVBhcnQsXG59O1xuIiwiaW1wb3J0IHsgbWFrZUNsYXNzRVM1Q29tcGF0aWJsZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgbG9hZFBsdWdpbkNzcyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgTWV0cmljc1BhbmVsQ3RybCBhcyBNZXRyaWNzUGFuZWxDdHJsRVM2IH0gZnJvbSAnYXBwL2FuZ3VsYXIvcGFuZWwvbWV0cmljc19wYW5lbF9jdHJsJztcbmltcG9ydCB7IFBhbmVsQ3RybCBhcyBQYW5lbEN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsJztcbmltcG9ydCB7IFF1ZXJ5Q3RybCBhcyBRdWVyeUN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9xdWVyeV9jdHJsJztcblxuY29uc3QgUGFuZWxDdHJsID0gbWFrZUNsYXNzRVM1Q29tcGF0aWJsZShQYW5lbEN0cmxFUzYpO1xuY29uc3QgTWV0cmljc1BhbmVsQ3RybCA9IG1ha2VDbGFzc0VTNUNvbXBhdGlibGUoTWV0cmljc1BhbmVsQ3RybEVTNik7XG5jb25zdCBRdWVyeUN0cmwgPSBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlKFF1ZXJ5Q3RybEVTNik7XG5cbmV4cG9ydCB7IFBhbmVsQ3RybCwgTWV0cmljc1BhbmVsQ3RybCwgUXVlcnlDdHJsLCBsb2FkUGx1Z2luQ3NzIH07XG4iXSwibmFtZXMiOlsiZGVwcmVjYXRpb25XYXJuaW5nIiwidXJsVXRpbCIsImxvY2F0aW9uU2VhcmNoVG9PYmplY3QiLCJsb2NhdGlvblNlcnZpY2UiLCJuYXZpZ2F0aW9uTG9nZ2VyIiwiREVGQVVMVF9QT1JUUyIsImh0dHAiLCJodHRwcyIsImZ0cCIsIkFuZ3VsYXJMb2NhdGlvbldyYXBwZXIiLCJjb25zdHJ1Y3RvciIsImFic1VybCIsIndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyIsImhhc2giLCJob3N0IiwicGF0aCIsInBvcnQiLCJwcm90b2NvbCIsInJlcGxhY2UiLCJzZWFyY2giLCJzdGF0ZSIsInVybCIsImZuIiwicmVwbGFjZW1lbnQiLCJzZWxmIiwid3JhcHBlciIsIm5hbWUiLCJhcHBseSIsImFyZ3VtZW50cyIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwibmV3SGFzaCIsImdldExvY2F0aW9uIiwic2xpY2UiLCJFcnJvciIsIlVSTCIsImhyZWYiLCJob3N0bmFtZSIsInBhdGhuYW1lIiwidW5kZWZpbmVkIiwicGFyc2VkUGF0aCIsIlN0cmluZyIsInN0YXJ0c1dpdGgiLCJwdXNoIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJwYXJhbVZhbHVlIiwiZ2V0U2VhcmNoT2JqZWN0IiwicGFydGlhbCIsIm5ld1F1ZXJ5Iiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsInVwZGF0ZWRVcmwiLCJyZW5kZXJVcmwiLCJuZXdVcmwiLCJ0cmltIiwiY2xvbmUiLCJTcWxQYXJ0RGVmIiwib3B0aW9ucyIsInR5cGUiLCJsYWJlbCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwic3R5bGUiLCJ3cmFwT3BlbiIsIndyYXBDbG9zZSIsInNlcGFyYXRvciIsInBhcmFtcyIsImRlZmF1bHRQYXJhbXMiLCJTcWxQYXJ0IiwicGFydCIsImRlZiIsIm1lc3NhZ2UiLCJkYXRhdHlwZSIsInVwZGF0ZVBhcmFtIiwic3RyVmFsdWUiLCJpbmRleCIsIm9wdGlvbmFsIiwic3BsaWNlIiwiaXNBcnJheSIsIkxvYWRpbmdTdGF0ZSIsIlBhbmVsRXZlbnRzIiwidG9EYXRhRnJhbWVEVE8iLCJ0b0xlZ2FjeVJlc3BvbnNlRGF0YSIsIlBhbmVsQ3RybCIsImFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzIiwiTWV0cmljc1BhbmVsQ3RybCIsIiRzY29wZSIsIiRpbmplY3RvciIsIm5leHQiLCJkYXRhIiwicGFuZWxEYXRhIiwibG9hZGluZyIsInByb2Nlc3NEYXRhRXJyb3IiLCJlcnJvciIsIkxvYWRpbmciLCJhbmd1bGFyRGlydHlDaGVjayIsInJlcXVlc3QiLCJ0aW1lSW5mbyIsInRpbWVSYW5nZSIsInJhbmdlIiwidXNlRGF0YUZyYW1lcyIsImhhbmRsZURhdGFGcmFtZXMiLCJzZXJpZXMiLCJsZWdhY3kiLCJtYXAiLCJ2IiwiaGFuZGxlUXVlcnlSZXN1bHQiLCJjb250ZXh0U3J2IiwiZ2V0IiwiZGF0YXNvdXJjZVNydiIsInRpbWVTcnYiLCJ0ZW1wbGF0ZVNydiIsInBhbmVsIiwiZGF0YXNvdXJjZSIsImV2ZW50cyIsIm9uIiwicmVmcmVzaCIsIm9uTWV0cmljc1BhbmVsUmVmcmVzaCIsImJpbmQiLCJwYW5lbFRlYXJkb3duIiwib25QYW5lbFRlYXJEb3duIiwiY29tcG9uZW50RGlkTW91bnQiLCJvbk1ldHJpY3NQYW5lbE1vdW50ZWQiLCJxdWVyeVJ1bm5lciIsImdldFF1ZXJ5UnVubmVyIiwicXVlcnlTdWJzY3JpcHRpb24iLCJnZXREYXRhIiwid2l0aFRyYW5zZm9ybXMiLCJ3aXRoRmllbGRDb25maWciLCJzdWJzY3JpYmUiLCJwYW5lbERhdGFPYnNlcnZlciIsInVuc3Vic2NyaWJlIiwib3RoZXJQYW5lbEluRnVsbHNjcmVlbk1vZGUiLCJzbmFwc2hvdERhdGEiLCJ1cGRhdGVUaW1lUmFuZ2UiLCJEb25lIiwiJHRpbWVvdXQiLCJlbWl0IiwiZGF0YVNuYXBzaG90TG9hZCIsInNjb3BlZFZhcnMiLCJ0aGVuIiwiaXNzdWVRdWVyaWVzIiwiY2F0Y2giLCJlcnIiLCJjYW5jZWxsZWQiLCJjb25zb2xlIiwibG9nIiwiJHJvb3QiLCIkJHBoYXNlIiwiJGRpZ2VzdCIsIm5ld1RpbWVEYXRhIiwicnVuIiwicXVlcmllcyIsInRhcmdldHMiLCJwYW5lbElkIiwiaWQiLCJkYXNoYm9hcmRJZCIsImRhc2hib2FyZCIsInRpbWV6b25lIiwiZ2V0VGltZXpvbmUiLCJtYXhEYXRhUG9pbnRzIiwid2lkdGgiLCJtaW5JbnRlcnZhbCIsImludGVydmFsIiwiY2FjaGVUaW1lb3V0IiwidHJhbnNmb3JtYXRpb25zIiwic25hcHNob3QiLCJmcmFtZSIsImRhdGFGcmFtZXNSZWNlaXZlZCIsInJlc3VsdCIsImRhdGFSZWNlaXZlZCIsImlzU3RyaW5nIiwiRXZlbnRCdXNTcnYiLCJjb25maWciLCJwcm9maWxlciIsInBsdWdpbiIsIiRwYXJlbnQiLCJlZGl0b3JUYWJzIiwiJGxvY2F0aW9uIiwidGltaW5nIiwicGFuZWxzIiwicGx1Z2luSWQiLCJwbHVnaW5OYW1lIiwiJG9uIiwicGFuZWxEaWRNb3VudCIsImluaXRpYWxpemVkIiwicGFuZWxJbml0aWFsaXplZCIsInJlbmRlcmluZ0NvbXBsZXRlZCIsInB1Ymxpc2hBcHBFdmVudCIsImV2ZW50IiwicGF5bG9hZCIsImFwcEV2ZW50IiwiaW5pdEVkaXRNb2RlIiwiZWRpdE1vZGVJbml0aWF0ZWQiLCJlZGl0TW9kZUluaXRpYWxpemVkIiwiYWRkRWRpdG9yVGFiIiwidGl0bGUiLCJkaXJlY3RpdmVGbiIsImljb24iLCJlZGl0b3JUYWIiLCJ0ZW1wbGF0ZVVybCIsImdldEV4dGVuZGVkTWVudSIsIm1lbnUiLCJpbml0UGFuZWxBY3Rpb25zIiwiZ2V0QWRkaXRpb25hbE1lbnVJdGVtcyIsIm90aGVyUGFuZWxJbkZ1bGxzY3JlZW4iLCJyZW5kZXIiLCJpbmRleE9mIiwiUXVlcnlDdHJsIiwicGFuZWxDdHJsIiwiY3RybCIsInRhcmdldCIsImlzTGFzdFF1ZXJ5IiwiUGFzc3dvcmRGaWVsZEVudW0iLCJjcmVhdGVSZXNldEhhbmRsZXIiLCJmaWVsZCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNlY3VyZUpzb25GaWVsZHMiLCJzZWN1cmVKc29uRGF0YSIsImNyZWF0ZUNoYW5nZUhhbmRsZXIiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJmaW5kIiwiUG9zdGdyZXNDb25maWdDdHJsIiwianNvbkRhdGEiLCJzc2xtb2RlIiwidGxzQ29uZmlndXJhdGlvbk1ldGhvZCIsInBvc3RncmVzVmVyc2lvbiIsInNob3dUaW1lc2NhbGVEQkhlbHAiLCJhdXRvRGV0ZWN0RmVhdHVyZXMiLCJvblBhc3N3b3JkUmVzZXQiLCJQYXNzd29yZCIsIm9uUGFzc3dvcmRDaGFuZ2UiLCJ0bHNNb2RlTWFwcGluZyIsImxvYWREYXRhc291cmNlIiwiZHMiLCJnZXRWZXJzaW9uIiwidmVyc2lvbiIsIk51bWJlciIsInRleHQiLCJnZXRUaW1lc2NhbGVEQlZlcnNpb24iLCJ0aW1lc2NhbGVkYiIsIm1ham9yIiwiTWF0aCIsInRydW5jIiwibWlub3IiLCJwb3N0Z3Jlc1ZlcnNpb25zIiwicCIsInRvZ2dsZVRpbWVzY2FsZURCSGVscCIsInRsc0F1dGgiLCJ0bHNBdXRoV2l0aENBQ2VydCIsInRsc1NraXBWZXJpZnkiLCJfbWFwIiwibGFzdFZhbHVlRnJvbSIsIm9mIiwiY2F0Y2hFcnJvciIsIkRhdGFTb3VyY2VXaXRoQmFja2VuZCIsImdldEJhY2tlbmRTcnYiLCJ0b1Rlc3RpbmdTdGF0dXMiLCJnZXRUZW1wbGF0ZVNydiIsIlBvc3RncmVzUXVlcnlNb2RlbCIsImdldFNlYXJjaEZpbHRlclNjb3BlZFZhciIsIlJlc3BvbnNlUGFyc2VyIiwiUG9zdGdyZXNEYXRhc291cmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsInZhcmlhYmxlIiwibXVsdGkiLCJpbmNsdWRlQWxsIiwicXVlcnlNb2RlbCIsInF1b3RlTGl0ZXJhbCIsInF1b3RlZFZhbHVlcyIsImpvaW4iLCJyZXNwb25zZVBhcnNlciIsInNldHRpbmdzRGF0YSIsInRpbWVJbnRlcnZhbCIsImludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzIiwiZXhwYW5kZWRRdWVyaWVzIiwicXVlcnkiLCJleHBhbmRlZFF1ZXJ5IiwiZ2V0UmVmIiwicmF3U3FsIiwiaW50ZXJwb2xhdGVWYXJpYWJsZSIsInJhd1F1ZXJ5IiwiZmlsdGVyUXVlcnkiLCJoaWRlIiwiYXBwbHlUZW1wbGF0ZVZhcmlhYmxlcyIsInJlZklkIiwiZm9ybWF0IiwiYW5ub3RhdGlvblF1ZXJ5IiwiYW5ub3RhdGlvbiIsIlByb21pc2UiLCJyZWplY3QiLCJmZXRjaCIsIm1ldGhvZCIsImZyb20iLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJ0byIsInJlcXVlc3RJZCIsInBpcGUiLCJyZXMiLCJ0cmFuc2Zvcm1Bbm5vdGF0aW9uUmVzcG9uc2UiLCJtZXRyaWNGaW5kUXVlcnkiLCJvcHRpb25hbE9wdGlvbnMiLCJ3aWxkY2FyZENoYXIiLCJpbnRlcnBvbGF0ZWRRdWVyeSIsInJzcCIsInRyYW5zZm9ybU1ldHJpY0ZpbmRSZXNwb25zZSIsIl9tZXRhUmVxdWVzdCIsInRlc3REYXRhc291cmNlIiwic3RhdHVzIiwidGFyZ2V0Q29udGFpbnNUZW1wbGF0ZSIsImJ1aWxkUXVlcnkiLCJjb250YWluc1RlbXBsYXRlIiwiUG9zdGdyZXNNZXRhUXVlcnkiLCJnZXRPcGVyYXRvcnMiLCJxdW90ZUlkZW50QXNMaXRlcmFsIiwidW5xdW90ZUlkZW50aWZpZXIiLCJmaW5kTWV0cmljVGFibGUiLCJidWlsZFNjaGVtYUNvbnN0cmFpbnQiLCJidWlsZFRhYmxlQ29uc3RyYWludCIsInRhYmxlIiwiaW5jbHVkZXMiLCJwYXJ0cyIsInNwbGl0IiwiYnVpbGRUYWJsZVF1ZXJ5IiwiYnVpbGRDb2x1bW5RdWVyeSIsInRpbWVDb2x1bW4iLCJidWlsZFZhbHVlUXVlcnkiLCJjb2x1bW4iLCJidWlsZERhdGF0eXBlUXVlcnkiLCJidWlsZEFnZ3JlZ2F0ZVF1ZXJ5IiwiRGF0YVNvdXJjZVBsdWdpbiIsIlBvc3RncmVzUXVlcnlDdHJsIiwiZGVmYXVsdFF1ZXJ5IiwiUG9zdGdyZXNBbm5vdGF0aW9uc1F1ZXJ5Q3RybCIsInNldFF1ZXJ5Q3RybCIsInNldENvbmZpZ0N0cmwiLCJzZXRBbm5vdGF0aW9uUXVlcnlDdHJsIiwibWV0cmljQ29sdW1uIiwiZ3JvdXAiLCJ3aGVyZSIsInNlbGVjdCIsImludGVycG9sYXRlUXVlcnlTdHIiLCJxdW90ZUlkZW50aWZpZXIiLCJlc2NhcGVMaXRlcmFsIiwiaGFzVGltZUdyb3VwIiwiZyIsImhhc01ldHJpY0NvbHVtbiIsImRlZmF1bHRGb3JtYXRGbiIsImVzY2FwZWRWYWx1ZXMiLCJpbnRlcnBvbGF0ZSIsImhhc1VuaXhFcG9jaFRpbWVjb2x1bW4iLCJ0aW1lQ29sdW1uVHlwZSIsImJ1aWxkVGltZUNvbHVtbiIsImFsaWFzIiwidGltZUdyb3VwIiwibWFjcm8iLCJhcmdzIiwiYnVpbGRNZXRyaWNDb2x1bW4iLCJidWlsZFZhbHVlQ29sdW1ucyIsImJ1aWxkVmFsdWVDb2x1bW4iLCJjb2x1bW5OYW1lIiwiYWdncmVnYXRlIiwid2luZG93cyIsImZ1bmMiLCJvdmVyUGFydHMiLCJvdmVyIiwiY3VyciIsInByZXYiLCJidWlsZFdoZXJlQ2xhdXNlIiwiY29uZGl0aW9ucyIsInRhZyIsImJ1aWxkR3JvdXBDbGF1c2UiLCJncm91cFNlY3Rpb24iLCJpIiwiZmlsdGVyIiwiZmluZEluZGV4IiwiYXBwRXZlbnRzIiwiU2hvd0NvbmZpcm1Nb2RhbEV2ZW50Iiwic3FsUGFydCIsInVpU2VnbWVudFNydiIsIm1ldGFCdWlsZGVyIiwidXBkYXRlUHJvamVjdGlvbiIsImZvcm1hdHMiLCJzZWdtZW50IiwibmV3U2VnbWVudCIsInRhYmxlU2VnbWVudCIsImh0bWwiLCJ0aW1lQ29sdW1uU2VnbWVudCIsInVwZGF0ZVJhd1NxbEFuZFJlZnJlc2giLCJmYWtlIiwibWV0cmljQ29sdW1uU2VnbWVudCIsImJ1aWxkU2VsZWN0TWVudSIsIndoZXJlQWRkIiwibmV3UGx1c0J1dHRvbiIsImdyb3VwQWRkIiwib25EYXRhUmVjZWl2ZWQiLCJkYXRhRXJyb3IiLCJvbkRhdGFFcnJvciIsInRpbWVzY2FsZUFnZ0NoZWNrIiwiYWdnSW5kZXgiLCJmaW5kQWdncmVnYXRlSW5kZXgiLCJzZWxlY3RQYXJ0cyIsImJhc2VPcHRzIiwiYmFzZU9wdGlvbnMiLCJ0aW1lc2NhbGVPcHRzIiwiY29uY2F0IiwidGltZXNjYWxlT3B0aW9ucyIsImNyZWF0ZSIsIm4iLCJ3aGVyZVBhcnRzIiwiZ3JvdXBQYXJ0cyIsInVwZGF0ZVBlcnNpc3RlZFBhcnRzIiwic2VsZWN0TWVudSIsImFnZ3JlZ2F0ZXMiLCJzdWJtZW51IiwiYWdncmVnYXRlczIiLCJ0b2dnbGVFZGl0b3JNb2RlIiwicHVibGlzaCIsInRleHQyIiwieWVzVGV4dCIsIm9uQ29uZmlybSIsIiRldmFsQXN5bmMiLCJyZXNldFBsdXNCdXR0b24iLCJidXR0b24iLCJwbHVzQnV0dG9uIiwiZ2V0VGFibGVTZWdtZW50cyIsInRyYW5zZm9ybVRvU2VnbWVudHMiLCJoYW5kbGVRdWVyeUVycm9yIiwidGFibGVDaGFuZ2VkIiwidGFzazEiLCJyIiwidGltZUNvbHVtbkNoYW5nZWQiLCJ0YXNrMiIsImFsbCIsImdldFRpbWVDb2x1bW5TZWdtZW50cyIsInBhcnRNb2RlbCIsImdldE1ldHJpY0NvbHVtblNlZ21lbnRzIiwiYWRkTm9uZSIsIm1ldHJpY0NvbHVtbkNoYW5nZWQiLCJkYXRhTGlzdCIsImxhc3RRdWVyeUVycm9yIiwibGFzdFF1ZXJ5TWV0YSIsIm1ldGEiLCJyZXN1bHRzIiwicXVlcnlSZXMiLCJzZWdtZW50cyIsImV4cGFuZGFibGUiLCJhZGRUZW1wbGF0ZVZhcnMiLCJnZXRWYXJpYWJsZXMiLCJ0ZW1wbGF0ZVF1b3RlciIsInVuc2hpZnQiLCJmaW5kV2luZG93SW5kZXgiLCJhZGRTZWxlY3RQYXJ0IiwiaXRlbSIsInN1Ykl0ZW0iLCJwYXJ0VHlwZSIsImFkZEFsaWFzIiwiYWRkR3JvdXAiLCJ3aW5kb3dJbmRleCIsInJlbW92ZVNlbGVjdFBhcnQiLCJtb2RlbHNJbmRleCIsInBhcnRJbmRleCIsImhhbmRsZVNlbGVjdFBhcnRFdmVudCIsImV2dCIsInJlc29sdmUiLCJoYW5kbGVHcm91cFBhcnRFdmVudCIsInJlbW92ZUdyb3VwIiwic29tZSIsInMiLCJoYW5kbGVXaGVyZVBhcnRFdmVudCIsInBhcmFtIiwibmV3T3BlcmF0b3JzIiwiZCIsImdldFdoZXJlT3B0aW9ucyIsImFkZFdoZXJlQWN0aW9uIiwiZ2V0R3JvdXBPcHRpb25zIiwidGFncyIsImFkZEdyb3VwQWN0aW9uIiwidG9EYXRhUXVlcnlSZXNwb25zZSIsInJhdyIsImZyYW1lcyIsInZhbHVlcyIsInRleHRGaWVsZCIsImZpZWxkcyIsImYiLCJ2YWx1ZUZpZWxkIiwiZmxhdE1hcCIsInRvQXJyYXkiLCJBcnJheSIsIlNldCIsInRpbWVGaWVsZCIsInRpbWVFbmRGaWVsZCIsInRhZ3NGaWVsZCIsImxpc3QiLCJ0aW1lRW5kIiwiZmxvb3IiLCJ0aW1lIiwiY3JlYXRlUGFydCIsInJlZ2lzdGVyIiwiZHluYW1pY0xvb2t1cCIsInF1b3RlIiwibWFrZUNsYXNzRVM1Q29tcGF0aWJsZSIsImxvYWRQbHVnaW5Dc3MiLCJNZXRyaWNzUGFuZWxDdHJsRVM2IiwiUGFuZWxDdHJsRVM2IiwiUXVlcnlDdHJsRVM2Il0sInNvdXJjZVJvb3QiOiIifQ==