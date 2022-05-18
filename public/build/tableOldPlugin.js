"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["tableOldPlugin"],{

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

/***/ "./public/app/plugins/panel/table-old/column_options.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnOptionsCtrl": () => (/* binding */ ColumnOptionsCtrl),
/* harmony export */   "columnOptionsTab": () => (/* binding */ columnOptionsTab)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ColumnOptionsCtrl {
  /** @ngInject */
  constructor($scope) {
    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "panelCtrl", void 0);

    _defineProperty(this, "colorModes", void 0);

    _defineProperty(this, "columnStyles", void 0);

    _defineProperty(this, "columnTypes", void 0);

    _defineProperty(this, "fontSizes", void 0);

    _defineProperty(this, "dateFormats", void 0);

    _defineProperty(this, "addColumnSegment", void 0);

    _defineProperty(this, "unitFormats", void 0);

    _defineProperty(this, "getColumnNames", void 0);

    _defineProperty(this, "activeStyleIndex", void 0);

    _defineProperty(this, "mappingTypes", void 0);

    _defineProperty(this, "alignTypes", void 0);

    $scope.editor = this;
    this.activeStyleIndex = 0;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
    this.unitFormats = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getValueFormats)();
    this.colorModes = [{
      text: 'Disabled',
      value: null
    }, {
      text: 'Cell',
      value: 'cell'
    }, {
      text: 'Value',
      value: 'value'
    }, {
      text: 'Row',
      value: 'row'
    }];
    this.columnTypes = [{
      text: 'Number',
      value: 'number'
    }, {
      text: 'String',
      value: 'string'
    }, {
      text: 'Date',
      value: 'date'
    }, {
      text: 'Hidden',
      value: 'hidden'
    }];
    this.fontSizes = ['80%', '90%', '100%', '110%', '120%', '130%', '150%', '160%', '180%', '200%', '220%', '250%'];
    this.dateFormats = [{
      text: 'YYYY-MM-DD HH:mm:ss',
      value: 'YYYY-MM-DD HH:mm:ss'
    }, {
      text: 'YYYY-MM-DD HH:mm:ss.SSS',
      value: 'YYYY-MM-DD HH:mm:ss.SSS'
    }, {
      text: 'MM/DD/YY h:mm:ss a',
      value: 'MM/DD/YY h:mm:ss a'
    }, {
      text: 'MMMM D, YYYY LT',
      value: 'MMMM D, YYYY LT'
    }, {
      text: 'YYYY-MM-DD',
      value: 'YYYY-MM-DD'
    }];
    this.mappingTypes = [{
      text: 'Value to text',
      value: 1
    }, {
      text: 'Range to text',
      value: 2
    }];
    this.alignTypes = ColumnOptionsCtrl.alignTypesEnum;

    this.getColumnNames = () => {
      if (!this.panelCtrl.table) {
        return [];
      }

      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.panelCtrl.table.columns, col => {
        return col.text;
      });
    };

    this.onColorChange = this.onColorChange.bind(this);
  }

  render() {
    this.panelCtrl.render();
  }

  setUnitFormat(column) {
    return value => {
      column.unit = value;
      this.panelCtrl.render();
    };
  }

  addColumnStyle() {
    const newStyleRule = {
      unit: 'short',
      type: 'number',
      alias: '',
      decimals: 2,
      colors: ['rgba(245, 54, 54, 0.9)', 'rgba(237, 129, 40, 0.89)', 'rgba(50, 172, 45, 0.97)'],
      colorMode: null,
      pattern: '',
      dateFormat: 'YYYY-MM-DD HH:mm:ss',
      thresholds: [],
      mappingType: 1,
      align: 'auto'
    };
    const styles = this.panel.styles;
    const stylesCount = styles.length;
    let indexToInsert = stylesCount; // check if last is a catch all rule, then add it before that one

    if (stylesCount > 0) {
      const last = styles[stylesCount - 1];

      if (last.pattern === '/.*/') {
        indexToInsert = stylesCount - 1;
      }
    }

    styles.splice(indexToInsert, 0, newStyleRule);
    this.activeStyleIndex = indexToInsert;
  }

  removeColumnStyle(style) {
    this.panel.styles = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.without)(this.panel.styles, style);
  }

  invertColorOrder(index) {
    const ref = this.panel.styles[index].colors;
    const copy = ref[0];
    ref[0] = ref[2];
    ref[2] = copy;
    this.panelCtrl.render();
  }

  onColorChange(style, colorIndex) {
    return newColor => {
      style.colors[colorIndex] = newColor;
      this.render();
    };
  }

  addValueMap(style) {
    if (!style.valueMaps) {
      style.valueMaps = [];
    }

    style.valueMaps.push({
      value: '',
      text: ''
    });
    this.panelCtrl.render();
  }

  removeValueMap(style, index) {
    style.valueMaps.splice(index, 1);
    this.panelCtrl.render();
  }

  addRangeMap(style) {
    if (!style.rangeMaps) {
      style.rangeMaps = [];
    }

    style.rangeMaps.push({
      from: '',
      to: '',
      text: ''
    });
    this.panelCtrl.render();
  }

  removeRangeMap(style, index) {
    style.rangeMaps.splice(index, 1);
    this.panelCtrl.render();
  }

}
ColumnOptionsCtrl.$inject = ["$scope"];

_defineProperty(ColumnOptionsCtrl, "alignTypesEnum", [{
  text: 'auto',
  value: ''
}, {
  text: 'left',
  value: 'left'
}, {
  text: 'center',
  value: 'center'
}, {
  text: 'right',
  value: 'right'
}]);

function columnOptionsTab() {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'public/app/plugins/panel/table-old/column_options.html',
    controller: ColumnOptionsCtrl
  };
}

/***/ }),

/***/ "./public/app/plugins/panel/table-old/editor.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablePanelEditorCtrl": () => (/* binding */ TablePanelEditorCtrl),
/* harmony export */   "tablePanelEditor": () => (/* binding */ tablePanelEditor)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _transformers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/panel/table-old/transformers.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class TablePanelEditorCtrl {
  /** @ngInject */
  constructor($scope, uiSegmentSrv) {
    this.uiSegmentSrv = uiSegmentSrv;

    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "panelCtrl", void 0);

    _defineProperty(this, "transformers", void 0);

    _defineProperty(this, "fontSizes", void 0);

    _defineProperty(this, "addColumnSegment", void 0);

    _defineProperty(this, "getColumnNames", void 0);

    _defineProperty(this, "canSetColumns", false);

    _defineProperty(this, "columnsHelpMessage", '');

    this.uiSegmentSrv = uiSegmentSrv;
    $scope.editor = this;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
    this.transformers = _transformers__WEBPACK_IMPORTED_MODULE_1__.transformers;
    this.fontSizes = ['80%', '90%', '100%', '110%', '120%', '130%', '150%', '160%', '180%', '200%', '220%', '250%'];
    this.addColumnSegment = uiSegmentSrv.newPlusButton();
    this.updateTransformHints();
  }

  updateTransformHints() {
    this.canSetColumns = false;
    this.columnsHelpMessage = '';

    switch (this.panel.transform) {
      case 'timeseries_aggregations':
        {
          this.canSetColumns = true;
          break;
        }

      case 'json':
        {
          this.canSetColumns = true;
          break;
        }

      case 'table':
        {
          this.columnsHelpMessage = 'Columns and their order are determined by the data query';
        }
    }
  }

  getColumnOptions() {
    if (!this.panelCtrl.dataRaw) {
      return Promise.resolve([]);
    }

    const columns = this.transformers[this.panel.transform].getColumns(this.panelCtrl.dataRaw);
    const segments = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(columns, c => this.uiSegmentSrv.newSegment({
      value: c.text
    }));
    return Promise.resolve(segments);
  }

  addColumn() {
    const columns = _transformers__WEBPACK_IMPORTED_MODULE_1__.transformers[this.panel.transform].getColumns(this.panelCtrl.dataRaw);
    const column = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(columns, {
      text: this.addColumnSegment.value
    });

    if (column) {
      this.panel.columns.push(column);
      this.render();
    }

    const plusButton = this.uiSegmentSrv.newPlusButton();
    this.addColumnSegment.html = plusButton.html;
    this.addColumnSegment.value = plusButton.value;
  }

  transformChanged() {
    this.panel.columns = [];

    if (this.panel.transform === 'annotations') {
      this.panelCtrl.refresh();
    } else {
      if (this.panel.transform === 'timeseries_aggregations') {
        this.panel.columns.push({
          text: 'Avg',
          value: 'avg'
        });
      }

      this.updateTransformHints();
      this.render();
    }
  }

  render() {
    this.panelCtrl.render();
  }

  removeColumn(column) {
    this.panel.columns = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.without)(this.panel.columns, column);
    this.panelCtrl.render();
  }

}
TablePanelEditorCtrl.$inject = ["$scope", "uiSegmentSrv"];
function tablePanelEditor(uiSegmentSrv) {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'public/app/plugins/panel/table-old/editor.html',
    controller: TablePanelEditorCtrl
  };
}

/***/ }),

/***/ "./public/app/plugins/panel/table-old/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablePanelCtrl": () => (/* binding */ TablePanelCtrl),
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/jquery-npm-3.6.0-ca7872bdbb-8fd5fef4aa.zip/node_modules/jquery/dist/jquery.js?900e");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_features_variables_adhoc_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/variables/adhoc/actions.ts");
/* harmony import */ var app_plugins_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/sdk.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _column_options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/table-old/column_options.ts");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/panel/table-old/editor.ts");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/panel/table-old/renderer.ts");
/* harmony import */ var _transformers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/panel/table-old/transformers.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class TablePanelCtrl extends app_plugins_sdk__WEBPACK_IMPORTED_MODULE_5__.MetricsPanelCtrl {
  /** @ngInject */
  constructor($scope, $injector, annotationsSrv, $sanitize) {
    super($scope, $injector);
    this.annotationsSrv = annotationsSrv;
    this.$sanitize = $sanitize;

    _defineProperty(this, "pageIndex", void 0);

    _defineProperty(this, "dataRaw", void 0);

    _defineProperty(this, "table", void 0);

    _defineProperty(this, "renderer", void 0);

    _defineProperty(this, "panelHasRowColorMode", void 0);

    _defineProperty(this, "panelHasLinks", void 0);

    _defineProperty(this, "panelDefaults", {
      targets: [{}],
      transform: 'timeseries_to_columns',
      pageSize: null,
      showHeader: true,
      styles: [{
        type: 'date',
        pattern: 'Time',
        alias: 'Time',
        dateFormat: 'YYYY-MM-DD HH:mm:ss',
        align: 'auto'
      }, {
        unit: 'short',
        type: 'number',
        alias: '',
        decimals: 2,
        colors: ['rgba(245, 54, 54, 0.9)', 'rgba(237, 129, 40, 0.89)', 'rgba(50, 172, 45, 0.97)'],
        colorMode: null,
        pattern: '/.*/',
        thresholds: [],
        align: 'right'
      }],
      columns: [],
      fontSize: '100%',
      sort: {
        col: 0,
        desc: true
      }
    });

    this.annotationsSrv = annotationsSrv;
    this.$sanitize = $sanitize;
    this.pageIndex = 0;

    if (this.panel.styles === void 0) {
      this.panel.styles = this.panel.columns;
      this.panel.columns = this.panel.fields;
      delete this.panel.columns;
      delete this.panel.fields;
    }

    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.defaults)(this.panel, this.panelDefaults);
    this.panelHasRowColorMode = Boolean(this.panel.styles.find(style => style.colorMode === 'row'));
    this.panelHasLinks = Boolean(this.panel.styles.find(style => style.link));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.PanelEvents.dataReceived, this.onDataReceived.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.PanelEvents.dataSnapshotLoad, this.onDataReceived.bind(this));
    this.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.PanelEvents.editModeInitialized, this.onInitEditMode.bind(this));
  }

  onInitEditMode() {
    this.addEditorTab('Options', _editor__WEBPACK_IMPORTED_MODULE_8__.tablePanelEditor, 2);
    this.addEditorTab('Column Styles', _column_options__WEBPACK_IMPORTED_MODULE_7__.columnOptionsTab, 3);
  }

  migrateToPanel(type) {
    this.onPluginTypeChange(app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].panels[type]);
  }

  issueQueries(datasource) {
    this.pageIndex = 0;

    if (this.panel.transform === 'annotations') {
      return this.annotationsSrv.getAnnotations({
        dashboard: this.dashboard,
        panel: this.panel,
        range: this.range
      }).then(anno => {
        this.loading = false;
        this.dataRaw = anno;
        this.pageIndex = 0;
        this.render();
        return {
          data: this.dataRaw
        }; // Not used
      });
    }

    return super.issueQueries(datasource);
  }

  onDataReceived(dataList) {
    this.dataRaw = dataList;
    this.pageIndex = 0; // automatically correct transform mode based on data

    if (this.dataRaw && this.dataRaw.length) {
      if ((0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.isTableData)(this.dataRaw[0])) {
        this.panel.transform = 'table';
      } else {
        if (this.dataRaw[0].type === 'docs') {
          this.panel.transform = 'json';
        } else {
          if (this.panel.transform === 'table' || this.panel.transform === 'json') {
            this.panel.transform = 'timeseries_to_rows';
          }
        }
      }
    }

    this.render();
  }

  render() {
    this.table = (0,_transformers__WEBPACK_IMPORTED_MODULE_10__.transformDataToTable)(this.dataRaw, this.panel);
    this.table.sort(this.panel.sort);
    this.renderer = new _renderer__WEBPACK_IMPORTED_MODULE_9__.TableRenderer(this.panel, this.table, this.dashboard.getTimezone(), this.$sanitize, this.templateSrv, app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].theme);
    return super.render(this.table);
  }

  toggleColumnSort(col, colIndex) {
    // remove sort flag from current column
    if (this.table.columns[this.panel.sort.col]) {
      this.table.columns[this.panel.sort.col].sort = false;
    }

    if (this.panel.sort.col === colIndex) {
      if (this.panel.sort.desc) {
        this.panel.sort.desc = false;
      } else {
        this.panel.sort.col = null;
      }
    } else {
      this.panel.sort.col = colIndex;
      this.panel.sort.desc = true;
    }

    this.render();
  }

  link(scope, elem, attrs, ctrl) {
    let data;
    const panel = ctrl.panel;
    let pageCount = 0;

    function getTableHeight() {
      let panelHeight = ctrl.height;

      if (pageCount > 1) {
        panelHeight -= 26;
      }

      return panelHeight - 31 + 'px';
    }

    function appendTableRows(tbodyElem) {
      ctrl.renderer.setTable(data);
      tbodyElem.empty();
      tbodyElem.html(ctrl.renderer.render(ctrl.pageIndex));
    }

    function switchPage(e) {
      const el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
      ctrl.pageIndex = parseInt(el.text(), 10) - 1;
      renderPanel();
    }

    function appendPaginationControls(footerElem) {
      footerElem.empty();
      const pageSize = panel.pageSize || 100;
      pageCount = Math.ceil(data.rows.length / pageSize);

      if (pageCount === 1) {
        return;
      }

      const startPage = Math.max(ctrl.pageIndex - 3, 0);
      const endPage = Math.min(pageCount, startPage + 9);
      const paginationList = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul></ul>');

      for (let i = startPage; i < endPage; i++) {
        const activeClass = i === ctrl.pageIndex ? 'active' : '';
        const pageLinkElem = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li><a class="table-panel-page-link pointer ' + activeClass + '">' + (i + 1) + '</a></li>');
        paginationList.append(pageLinkElem);
      }

      footerElem.append(paginationList);
    }

    function renderPanel() {
      const panelElem = elem.parents('.panel-content');
      const rootElem = elem.find('.table-panel-scroll');
      const tbodyElem = elem.find('tbody');
      const footerElem = elem.find('.table-panel-footer');
      elem.css({
        'font-size': panel.fontSize
      });
      panelElem.addClass('table-panel-content');
      appendTableRows(tbodyElem);
      appendPaginationControls(footerElem);
      rootElem.css({
        'max-height': getTableHeight()
      });
    } // hook up link tooltips


    elem.tooltip({
      selector: '[data-link-tooltip]'
    });

    function addFilterClicked(e) {
      const filterData = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).data();
      const options = {
        datasource: panel.datasource,
        key: data.columns[filterData.column].text,
        value: data.rows[filterData.row][filterData.column],
        operator: filterData.operator
      };
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_6__.dispatch)((0,app_features_variables_adhoc_actions__WEBPACK_IMPORTED_MODULE_4__.applyFilterFromTable)(options));
    }

    elem.on('click', '.table-panel-page-link', switchPage);
    elem.on('click', '.table-panel-filter-link', addFilterClicked);
    const unbindDestroy = scope.$on('$destroy', () => {
      elem.off('click', '.table-panel-page-link');
      elem.off('click', '.table-panel-filter-link');
      unbindDestroy();
    });
    ctrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.PanelEvents.render, renderData => {
      data = renderData || data;

      if (data) {
        renderPanel();
      }

      ctrl.renderingCompleted();
    });
  }

}
TablePanelCtrl.$inject = ["$scope", "$injector", "annotationsSrv", "$sanitize"];

_defineProperty(TablePanelCtrl, "templateUrl", 'module.html');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.PanelPlugin(null);
plugin.angularPanelCtrl = TablePanelCtrl;
plugin.setNoPadding();

/***/ }),

/***/ "./public/app/plugins/panel/table-old/renderer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableRenderer": () => (/* binding */ TableRenderer)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _column_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/table-old/column_options.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class TableRenderer {
  constructor(panel, table, timeZone, sanitize, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)(), theme) {
    this.panel = panel;
    this.table = table;
    this.timeZone = timeZone;
    this.sanitize = sanitize;
    this.templateSrv = templateSrv;
    this.theme = theme;

    _defineProperty(this, "formatters", []);

    _defineProperty(this, "colorState", void 0);

    this.panel = panel;
    this.table = table;
    this.timeZone = timeZone;
    this.sanitize = sanitize;
    this.templateSrv = templateSrv;
    this.theme = theme;
    this.initColumns();
  }

  setTable(table) {
    this.table = table;
    this.initColumns();
  }

  initColumns() {
    this.formatters = [];
    this.colorState = {};

    for (let colIndex = 0; colIndex < this.table.columns.length; colIndex++) {
      const column = this.table.columns[colIndex];
      column.title = column.text;

      for (let i = 0; i < this.panel.styles.length; i++) {
        const style = this.panel.styles[i];
        const escapedPattern = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.stringStartsAsRegEx)(style.pattern) ? style.pattern : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.escapeStringForRegex)((0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.unEscapeStringFromRegex)(style.pattern));
        const regex = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.stringToJsRegex)(escapedPattern);

        if (column.text.match(regex)) {
          column.style = style;

          if (style.alias) {
            column.title = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.textUtil.escapeHtml(column.text.replace(regex, style.alias));
          }

          break;
        }
      }

      this.formatters[colIndex] = this.createColumnFormatter(column);
    }
  }

  getColorForValue(value, style) {
    if (!style.thresholds || !style.colors) {
      return null;
    }

    for (let i = style.thresholds.length; i > 0; i--) {
      if (value >= style.thresholds[i - 1]) {
        return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getColorForTheme)(style.colors[i], this.theme);
      }
    }

    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getColorForTheme)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.first)(style.colors), this.theme);
  }

  defaultCellFormatter(v, style) {
    if (v === null || v === void 0 || v === undefined) {
      return '';
    }

    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
      v = v.join(', ');
    }

    if (style && style.sanitize) {
      return this.sanitize(v);
    } else {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.escape)(v);
    }
  }

  createColumnFormatter(column) {
    if (!column.style) {
      return this.defaultCellFormatter;
    }

    if (column.style.type === 'hidden') {
      return v => undefined;
    }

    if (column.style.type === 'date') {
      return v => {
        if (v === undefined || v === null) {
          return '-';
        }

        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
          v = v[0];
        } // if is an epoch (numeric string and len > 12)


        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && !isNaN(v) && v.length > 12) {
          v = parseInt(v, 10);
        }

        if (!column.style.dateFormat) {
          return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTimeFormatISO)(v, {
            timeZone: this.timeZone
          });
        }

        return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateTimeFormat)(v, {
          format: column.style.dateFormat,
          timeZone: this.timeZone
        });
      };
    }

    if (column.style.type === 'string') {
      return v => {
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
          v = v.join(', ');
        }

        const mappingType = column.style.mappingType || 0;

        if (mappingType === 1 && column.style.valueMaps) {
          for (let i = 0; i < column.style.valueMaps.length; i++) {
            const map = column.style.valueMaps[i];

            if (v === null) {
              if (map.value === 'null') {
                return map.text;
              }

              continue;
            } // Allow both numeric and string values to be mapped


            if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(v) && Number(map.value) === Number(v) || map.value === v) {
              this.setColorState(v, column.style);
              return this.defaultCellFormatter(map.text, column.style);
            }
          }
        }

        if (mappingType === 2 && column.style.rangeMaps) {
          for (let i = 0; i < column.style.rangeMaps.length; i++) {
            const map = column.style.rangeMaps[i];

            if (v === null) {
              if (map.from === 'null' && map.to === 'null') {
                return map.text;
              }

              continue;
            }

            if (Number(map.from) <= Number(v) && Number(map.to) >= Number(v)) {
              this.setColorState(v, column.style);
              return this.defaultCellFormatter(map.text, column.style);
            }
          }
        }

        if (v === null || v === void 0) {
          return '-';
        }

        this.setColorState(v, column.style);
        return this.defaultCellFormatter(v, column.style);
      };
    }

    if (column.style.type === 'number') {
      const valueFormatter = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.getValueFormat)(column.unit || column.style.unit);
      return v => {
        if (v === null || v === void 0) {
          return '-';
        }

        if (isNaN(v) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(v)) {
          return this.defaultCellFormatter(v, column.style);
        }

        this.setColorState(v, column.style);
        return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.formattedValueToString)(valueFormatter(v, column.style.decimals, null));
      };
    }

    return value => {
      return this.defaultCellFormatter(value, column.style);
    };
  }

  setColorState(value, style) {
    if (!style.colorMode) {
      return;
    }

    if (value === null || value === void 0 || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(value)) {
      return;
    }

    const numericValue = Number(value);

    if (isNaN(numericValue)) {
      return;
    }

    this.colorState[style.colorMode] = this.getColorForValue(numericValue, style);
  }

  renderRowVariables(rowIndex) {
    const scopedVars = {};
    let cellVariable;
    const row = this.table.rows[rowIndex];

    for (let i = 0; i < row.length; i++) {
      cellVariable = `__cell_${i}`;
      scopedVars[cellVariable] = {
        value: row[i],
        text: row[i] ? row[i].toString() : ''
      };
    }

    return scopedVars;
  }

  formatColumnValue(colIndex, value) {
    const fmt = this.formatters[colIndex];

    if (fmt) {
      return fmt(value);
    }

    return value;
  }

  renderCell(columnIndex, rowIndex, value, addWidthHack = false) {
    value = this.formatColumnValue(columnIndex, value);
    const column = this.table.columns[columnIndex];
    const cellStyles = [];
    let cellStyle = '';
    const cellClasses = [];
    let cellClass = '';

    if (this.colorState.cell) {
      cellStyles.push('background-color:' + this.colorState.cell);
      cellClasses.push('table-panel-color-cell');
      this.colorState.cell = null;
    } else if (this.colorState.value) {
      cellStyles.push('color:' + this.colorState.value);
      this.colorState.value = null;
    } // because of the fixed table headers css only solution
    // there is an issue if header cell is wider the cell
    // this hack adds header content to cell (not visible)


    let columnHtml = '';

    if (addWidthHack) {
      columnHtml = '<div class="table-panel-width-hack">' + this.table.columns[columnIndex].title + '</div>';
    }

    if (value === undefined) {
      cellStyles.push('display:none');
      column.hidden = true;
    } else {
      column.hidden = false;
    }

    if (column.hidden === true) {
      return '';
    }

    if (column.style && column.style.preserveFormat) {
      cellClasses.push('table-panel-cell-pre');
    }

    if (column.style && column.style.align) {
      const textAlign = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(_column_options__WEBPACK_IMPORTED_MODULE_3__.ColumnOptionsCtrl.alignTypesEnum, ['text', column.style.align]);

      if (textAlign && textAlign['value']) {
        cellStyles.push(`text-align:${textAlign['value']}`);
      }
    }

    if (cellStyles.length) {
      cellStyle = ' style="' + cellStyles.join(';') + '"';
    }

    if (column.style && column.style.link) {
      // Render cell as link
      const scopedVars = this.renderRowVariables(rowIndex);
      scopedVars['__cell'] = {
        value: value,
        text: value ? value.toString() : ''
      };
      const cellLink = this.templateSrv.replace(column.style.linkUrl, scopedVars, encodeURIComponent);
      const sanitizedCellLink = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.textUtil.sanitizeUrl(cellLink);
      const cellLinkTooltip = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.textUtil.escapeHtml(this.templateSrv.replace(column.style.linkTooltip, scopedVars));
      const cellTarget = column.style.linkTargetBlank ? '_blank' : '';
      cellClasses.push('table-panel-cell-link');
      columnHtml += `<a href="${sanitizedCellLink}" target="${cellTarget}" data-link-tooltip data-original-title="${cellLinkTooltip}" data-placement="right"${cellStyle}>`;
      columnHtml += `${value}`;
      columnHtml += `</a>`;
    } else {
      columnHtml += value;
    }

    if (column.filterable) {
      cellClasses.push('table-panel-cell-filterable');
      columnHtml += `<a class="table-panel-filter-link" data-link-tooltip data-original-title="Filter out value" data-placement="bottom"
           data-row="${rowIndex}" data-column="${columnIndex}" data-operator="!=">`;
      columnHtml += `<i class="fa fa-search-minus"></i>`;
      columnHtml += `</a>`;
      columnHtml += `<a class="table-panel-filter-link" data-link-tooltip data-original-title="Filter for value" data-placement="bottom"
           data-row="${rowIndex}" data-column="${columnIndex}" data-operator="=">`;
      columnHtml += `<i class="fa fa-search-plus"></i>`;
      columnHtml += `</a>`;
    }

    if (cellClasses.length) {
      cellClass = ' class="' + cellClasses.join(' ') + '"';
    }

    columnHtml = '<td' + cellClass + cellStyle + '>' + columnHtml + '</td>';
    return columnHtml;
  }

  render(page) {
    const pageSize = this.panel.pageSize || 100;
    const startPos = page * pageSize;
    const endPos = Math.min(startPos + pageSize, this.table.rows.length);
    let html = '';

    for (let y = startPos; y < endPos; y++) {
      const row = this.table.rows[y];
      let cellHtml = '';
      let rowStyle = '';
      const rowClasses = [];
      let rowClass = '';

      for (let i = 0; i < this.table.columns.length; i++) {
        cellHtml += this.renderCell(i, y, row[i], y === startPos);
      }

      if (this.colorState.row) {
        rowStyle = ' style="background-color:' + this.colorState.row + '"';
        rowClasses.push('table-panel-color-row');
        this.colorState.row = null;
      }

      if (rowClasses.length) {
        rowClass = ' class="' + rowClasses.join(' ') + '"';
      }

      html += '<tr ' + rowClass + rowStyle + '>' + cellHtml + '</tr>';
    }

    return html;
  }

  render_values() {
    const rows = [];
    const visibleColumns = this.table.columns.filter(column => !column.hidden);

    for (let y = 0; y < this.table.rows.length; y++) {
      const row = this.table.rows[y];
      const newRow = [];

      for (let i = 0; i < this.table.columns.length; i++) {
        if (!this.table.columns[i].hidden) {
          newRow.push(this.formatColumnValue(i, row[i]));
        }
      }

      rows.push(newRow);
    }

    return {
      columns: visibleColumns,
      rows: rows
    };
  }

}

/***/ }),

/***/ "./public/app/plugins/panel/table-old/transformers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tableDataFormatFilterer": () => (/* binding */ tableDataFormatFilterer),
/* harmony export */   "timeSeriesFormatFilterer": () => (/* binding */ timeSeriesFormatFilterer),
/* harmony export */   "transformDataToTable": () => (/* binding */ transformDataToTable),
/* harmony export */   "transformers": () => (/* binding */ transformers)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_table_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/table_model.ts");
/* harmony import */ var app_core_time_series2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/time_series2.ts");
/* harmony import */ var app_core_utils_flatten__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/flatten.ts");




const transformers = {};
const timeSeriesFormatFilterer = data => {
  if (!Array.isArray(data)) {
    return data.datapoints ? [data] : [];
  }

  return data.reduce((acc, series) => {
    if (!series.datapoints) {
      return acc;
    }

    return acc.concat(series);
  }, []);
};
const tableDataFormatFilterer = data => {
  if (!Array.isArray(data)) {
    return data.columns ? [data] : [];
  }

  return data.reduce((acc, series) => {
    if (!series.columns) {
      return acc;
    }

    return acc.concat(series);
  }, []);
};
transformers['timeseries_to_rows'] = {
  description: 'Time series to rows',
  getColumns: () => {
    return [];
  },
  transform: (data, panel, model) => {
    model.columns = [{
      text: 'Time',
      type: 'date'
    }, {
      text: 'Metric'
    }, {
      text: 'Value'
    }];
    const filteredData = timeSeriesFormatFilterer(data);

    for (let i = 0; i < filteredData.length; i++) {
      const series = filteredData[i];

      for (let y = 0; y < series.datapoints.length; y++) {
        const dp = series.datapoints[y];
        model.rows.push([dp[1], series.target, dp[0]]);
      }
    }
  }
};
transformers['timeseries_to_columns'] = {
  description: 'Time series to columns',
  getColumns: () => {
    return [];
  },
  transform: (data, panel, model) => {
    model.columns.push({
      text: 'Time',
      type: 'date'
    }); // group by time

    const points = {};
    const filteredData = timeSeriesFormatFilterer(data);

    for (let i = 0; i < filteredData.length; i++) {
      const series = filteredData[i];
      model.columns.push({
        text: series.target
      });

      for (let y = 0; y < series.datapoints.length; y++) {
        const dp = series.datapoints[y];
        const timeKey = dp[1].toString();

        if (!points[timeKey]) {
          points[timeKey] = {
            time: dp[1]
          };
          points[timeKey][i] = dp[0];
        } else {
          points[timeKey][i] = dp[0];
        }
      }
    }

    for (const time in points) {
      const point = points[time];
      const values = [point.time];

      for (let i = 0; i < filteredData.length; i++) {
        const value = point[i];
        values.push(value);
      }

      model.rows.push(values);
    }
  }
};
transformers['timeseries_aggregations'] = {
  description: 'Time series aggregations',
  getColumns: () => {
    return [{
      text: 'Avg',
      value: 'avg'
    }, {
      text: 'Min',
      value: 'min'
    }, {
      text: 'Max',
      value: 'max'
    }, {
      text: 'Total',
      value: 'total'
    }, {
      text: 'Current',
      value: 'current'
    }, {
      text: 'Count',
      value: 'count'
    }];
  },
  transform: (data, panel, model) => {
    let i, y;
    model.columns.push({
      text: 'Metric'
    });

    for (i = 0; i < panel.columns.length; i++) {
      model.columns.push({
        text: panel.columns[i].text
      });
    }

    const filteredData = timeSeriesFormatFilterer(data);

    for (i = 0; i < filteredData.length; i++) {
      const series = new app_core_time_series2__WEBPACK_IMPORTED_MODULE_2__["default"]({
        datapoints: filteredData[i].datapoints,
        alias: filteredData[i].target
      });
      series.getFlotPairs('connected');
      const cells = [series.alias];

      for (y = 0; y < panel.columns.length; y++) {
        cells.push(series.stats[panel.columns[y].value]);
      }

      model.rows.push(cells);
    }
  }
};
transformers['annotations'] = {
  description: 'Annotations',
  getColumns: () => {
    return [];
  },
  transform: (data, panel, model) => {
    model.columns.push({
      text: 'Time',
      type: 'date'
    });
    model.columns.push({
      text: 'Title'
    });
    model.columns.push({
      text: 'Text'
    });
    model.columns.push({
      text: 'Tags'
    });

    if (!data || !data.annotations || data.annotations.length === 0) {
      return;
    }

    for (let i = 0; i < data.annotations.length; i++) {
      const evt = data.annotations[i];
      model.rows.push([evt.time, evt.title, evt.text, evt.tags]);
    }
  }
};
transformers['table'] = {
  description: 'Table',
  getColumns: data => {
    if (!data || data.length === 0) {
      return [];
    } // Single query returns data columns as is


    if (data.length === 1) {
      return [...data[0].columns];
    }

    const filteredData = tableDataFormatFilterer(data); // Track column indexes: name -> index

    const columnNames = {}; // Union of all columns

    const columns = filteredData.reduce((acc, series) => {
      series.columns.forEach(col => {
        const {
          text
        } = col;

        if (columnNames[text] === undefined) {
          columnNames[text] = acc.length;
          acc.push(col);
        }
      });
      return acc;
    }, []);
    return columns;
  },
  transform: (data, panel, model) => {
    if (!data || data.length === 0) {
      return;
    }

    const filteredData = tableDataFormatFilterer(data);
    const noTableIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex)(filteredData, d => 'columns' in d && 'rows' in d);

    if (noTableIndex < 0) {
      throw {
        message: `Result of query #${String.fromCharCode(65 + noTableIndex)} is not in table format, try using another transform.`
      };
    }

    (0,app_core_table_model__WEBPACK_IMPORTED_MODULE_1__.mergeTablesIntoModel)(model, ...filteredData);
  }
};
transformers['json'] = {
  description: 'JSON Data',
  getColumns: data => {
    if (!data || data.length === 0) {
      return [];
    }

    const names = {};

    for (let i = 0; i < data.length; i++) {
      const series = data[i];

      if (series.type !== 'docs') {
        continue;
      } // only look at 100 docs


      const maxDocs = Math.min(series.datapoints.length, 100);

      for (let y = 0; y < maxDocs; y++) {
        const doc = series.datapoints[y];
        const flattened = (0,app_core_utils_flatten__WEBPACK_IMPORTED_MODULE_3__["default"])(doc, {});

        for (const propName in flattened) {
          names[propName] = true;
        }
      }
    }

    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(names, (value, key) => {
      return {
        text: key,
        value: key
      };
    });
  },
  transform: (data, panel, model) => {
    let i, y, z;

    for (const column of panel.columns) {
      const tableCol = {
        text: column.text
      }; // if filterable data then set columns to filterable

      if (data.length > 0 && data[0].filterable) {
        tableCol.filterable = true;
      }

      model.columns.push(tableCol);
    }

    if (model.columns.length === 0) {
      model.columns.push({
        text: 'JSON'
      });
    }

    for (i = 0; i < data.length; i++) {
      const series = data[i];

      for (y = 0; y < series.datapoints.length; y++) {
        const dp = series.datapoints[y];
        const values = [];

        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isObject)(dp) && panel.columns.length > 0) {
          const flattened = (0,app_core_utils_flatten__WEBPACK_IMPORTED_MODULE_3__["default"])(dp);

          for (z = 0; z < panel.columns.length; z++) {
            values.push(flattened[panel.columns[z].value]);
          }
        } else {
          values.push(JSON.stringify(dp));
        }

        model.rows.push(values);
      }
    }
  }
};

function transformDataToTable(data, panel) {
  const model = new app_core_table_model__WEBPACK_IMPORTED_MODULE_1__["default"]();

  if (!data || data.length === 0) {
    return model;
  }

  const transformer = transformers[panel.transform];

  if (!transformer) {
    throw {
      message: 'Transformer ' + panel.transform + ' not found'
    };
  }

  transformer.transform(data, panel, model);
  return model;
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVPbGRQbHVnaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQSxNQUFNSyxhQUFxQyxHQUFHO0FBQUVDLEVBQUFBLElBQUksRUFBRSxFQUFSO0FBQVlDLEVBQUFBLEtBQUssRUFBRSxHQUFuQjtBQUF3QkMsRUFBQUEsR0FBRyxFQUFFO0FBQTdCLENBQTlDO0FBRU8sTUFBTUMsc0JBQU4sQ0FBNkI7QUFDbENDLEVBQUFBLFdBQVcsR0FBRztBQUNaLFNBQUtDLE1BQUwsR0FBYyxLQUFLQyx3QkFBTCxDQUE4QixLQUFLRCxNQUFuQyxDQUFkO0FBQ0EsU0FBS0UsSUFBTCxHQUFZLEtBQUtELHdCQUFMLENBQThCLEtBQUtDLElBQW5DLENBQVo7QUFDQSxTQUFLQyxJQUFMLEdBQVksS0FBS0Ysd0JBQUwsQ0FBOEIsS0FBS0UsSUFBbkMsQ0FBWjtBQUNBLFNBQUtDLElBQUwsR0FBWSxLQUFLSCx3QkFBTCxDQUE4QixLQUFLRyxJQUFuQyxDQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQUtKLHdCQUFMLENBQThCLEtBQUtJLElBQW5DLEVBQXlDLGlCQUF6QyxDQUFaO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLTCx3QkFBTCxDQUE4QixLQUFLSyxRQUFuQyxFQUE2QyxpQkFBN0MsQ0FBaEI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS04sd0JBQUwsQ0FBOEIsS0FBS00sT0FBbkMsQ0FBZjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLUCx3QkFBTCxDQUE4QixLQUFLTyxNQUFuQyxDQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEtBQUtSLHdCQUFMLENBQThCLEtBQUtRLEtBQW5DLENBQWI7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS1Qsd0JBQUwsQ0FBOEIsS0FBS1MsR0FBbkMsQ0FBWDtBQUNEOztBQUVEVCxFQUFBQSx3QkFBd0IsQ0FBQ1UsRUFBRCxFQUFlQyxXQUFmLEVBQXFDO0FBQzNELFFBQUlDLElBQUksR0FBRyxJQUFYO0FBRUEsV0FBTyxTQUFTQyxPQUFULEdBQW1CO0FBQ3hCekIsTUFBQUEsaUVBQWtCLENBQUMsV0FBRCxFQUFjc0IsRUFBRSxDQUFDSSxJQUFqQixFQUF1QkgsV0FBVyxJQUFJLGlCQUF0QyxDQUFsQjtBQUNBLGFBQU9ELEVBQUUsQ0FBQ0ssS0FBSCxDQUFTSCxJQUFULEVBQWVJLFNBQWYsQ0FBUDtBQUNELEtBSEQ7QUFJRDs7QUFFRGpCLEVBQUFBLE1BQU0sR0FBVztBQUNmLFdBQVEsR0FBRWtCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBTyxHQUFFLEtBQUtWLEdBQUwsRUFBVyxFQUE5QztBQUNEOztBQUVEUixFQUFBQSxJQUFJLENBQUNtQixPQUFELEVBQTBCO0FBQzVCNUIsSUFBQUEsa0VBQWdCLENBQUMsd0JBQUQsRUFBMkIsS0FBM0IsRUFBa0MsNEJBQWxDLENBQWhCOztBQUVBLFFBQUksQ0FBQzRCLE9BQUwsRUFBYztBQUNaLGFBQU83Qix5RUFBQSxHQUE4QlUsSUFBOUIsQ0FBbUNxQixLQUFuQyxDQUF5QyxDQUF6QyxDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsWUFBTSxJQUFJQyxLQUFKLENBQVUsZ0RBQVYsQ0FBTjtBQUNEO0FBQ0Y7O0FBRURyQixFQUFBQSxJQUFJLEdBQVc7QUFDYixXQUFPLElBQUlzQixHQUFKLENBQVFQLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQk8sSUFBeEIsRUFBOEJDLFFBQXJDO0FBQ0Q7O0FBRUR2QixFQUFBQSxJQUFJLENBQUN3QixRQUFELEVBQWlCO0FBQ25CbkMsSUFBQUEsa0VBQWdCLENBQUMsd0JBQUQsRUFBMkIsS0FBM0IsRUFBa0MsNEJBQWxDLENBQWhCO0FBRUEsVUFBTTBCLFFBQVEsR0FBRzNCLHlFQUFBLEVBQWpCOztBQUVBLFFBQUlvQyxRQUFRLEtBQUtDLFNBQWIsSUFBMEJELFFBQVEsS0FBSyxJQUEzQyxFQUFpRDtBQUMvQyxVQUFJRSxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0gsUUFBRCxDQUF2QjtBQUNBRSxNQUFBQSxVQUFVLEdBQUdBLFVBQVUsQ0FBQ0UsVUFBWCxDQUFzQixHQUF0QixJQUE2QkYsVUFBN0IsR0FBMkMsSUFBR0EsVUFBVyxFQUF0RTtBQUNBLFlBQU1wQixHQUFHLEdBQUcsSUFBSWUsR0FBSixDQUFTLEdBQUVQLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBTyxHQUFFVSxVQUFXLEVBQS9DLENBQVo7QUFFQXRDLE1BQUFBLGtFQUFBLENBQXFCO0FBQ25Cb0MsUUFBQUEsUUFBUSxFQUFFbEIsR0FBRyxDQUFDa0IsUUFESztBQUVuQnBCLFFBQUFBLE1BQU0sRUFBRUUsR0FBRyxDQUFDRixNQUFKLENBQVcwQixNQUFYLEdBQW9CLENBQXBCLEdBQXdCeEIsR0FBRyxDQUFDRixNQUE1QixHQUFxQ1csUUFBUSxDQUFDWCxNQUZuQztBQUduQk4sUUFBQUEsSUFBSSxFQUFFUSxHQUFHLENBQUNSLElBQUosQ0FBU2dDLE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0J4QixHQUFHLENBQUNSLElBQTFCLEdBQWlDaUIsUUFBUSxDQUFDakI7QUFIN0IsT0FBckI7QUFLQSxhQUFPLElBQVA7QUFDRDs7QUFFRCxRQUFJMEIsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCcEMsTUFBQUEsa0VBQUEsQ0FBcUIsR0FBckI7QUFDQSxhQUFPLElBQVA7QUFDRDs7QUFFRCxXQUFPMkIsUUFBUSxDQUFDUyxRQUFoQjtBQUNEOztBQUVEdkIsRUFBQUEsSUFBSSxHQUFrQjtBQUNwQixVQUFNSyxHQUFHLEdBQUcsSUFBSWUsR0FBSixDQUFRUCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JPLElBQXhCLENBQVo7QUFDQSxXQUFPUyxRQUFRLENBQUN6QixHQUFHLENBQUNMLElBQUwsRUFBVyxFQUFYLENBQVIsSUFBMEJYLGFBQWEsQ0FBQ2dCLEdBQUcsQ0FBQ0osUUFBTCxDQUF2QyxJQUF5RCxJQUFoRTtBQUNEOztBQUVEQSxFQUFBQSxRQUFRLEdBQVc7QUFDakIsV0FBTyxJQUFJbUIsR0FBSixDQUFRUCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JPLElBQXhCLEVBQThCcEIsUUFBOUIsQ0FBdUNpQixLQUF2QyxDQUE2QyxDQUE3QyxFQUFnRCxDQUFDLENBQWpELENBQVA7QUFDRDs7QUFFRGhCLEVBQUFBLE9BQU8sR0FBRztBQUNSLFVBQU0sSUFBSWlCLEtBQUosQ0FBVSxnREFBVixDQUFOO0FBQ0Q7O0FBRURoQixFQUFBQSxNQUFNLENBQUNBLE1BQUQsRUFBZTRCLFVBQWYsRUFBaUM7QUFDckMzQyxJQUFBQSxrRUFBZ0IsQ0FBQyx3QkFBRCxFQUEyQixLQUEzQixFQUFrQyw4QkFBbEMsQ0FBaEI7O0FBQ0EsUUFBSSxDQUFDZSxNQUFMLEVBQWE7QUFDWCxhQUFPaEIsNkVBQUEsRUFBUDtBQUNEOztBQUVELFFBQUlnQixNQUFNLElBQUlTLFNBQVMsQ0FBQ2lCLE1BQVYsR0FBbUIsQ0FBakMsRUFBb0M7QUFDbEMxQyxNQUFBQSxxRUFBQSxDQUF3QjtBQUN0QixTQUFDZ0IsTUFBRCxHQUFVNEI7QUFEWSxPQUF4QjtBQUlBLGFBQU8sSUFBUDtBQUNEOztBQUVELFFBQUk1QixNQUFKLEVBQVk7QUFDVixVQUFJK0IsUUFBSjs7QUFFQSxVQUFJLE9BQU8vQixNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzlCK0IsUUFBQUEsUUFBUSxxQkFBUS9CLE1BQVIsQ0FBUjtBQUNELE9BRkQsTUFFTztBQUNMK0IsUUFBQUEsUUFBUSxHQUFHaEQsd0VBQXNCLENBQUNpQixNQUFELENBQWpDO0FBQ0Q7O0FBRUQsV0FBSyxNQUFNZ0MsR0FBWCxJQUFrQkMsTUFBTSxDQUFDQyxJQUFQLENBQVlILFFBQVosQ0FBbEIsRUFBeUM7QUFDdkM7QUFDQSxZQUFJQSxRQUFRLENBQUNDLEdBQUQsQ0FBUixLQUFrQixJQUFsQixJQUEwQkQsUUFBUSxDQUFDQyxHQUFELENBQVIsS0FBa0JYLFNBQWhELEVBQTJEO0FBQ3pELGlCQUFPVSxRQUFRLENBQUNDLEdBQUQsQ0FBZjtBQUNEO0FBQ0Y7O0FBRUQsWUFBTUcsVUFBVSxHQUFHckQsNERBQUEsQ0FBa0JFLHlFQUFBLEdBQThCb0MsUUFBaEQsRUFBMERXLFFBQTFELENBQW5CO0FBQ0EvQyxNQUFBQSxrRUFBQSxDQUFxQm1ELFVBQXJCO0FBQ0Q7O0FBRUQsV0FBTyxJQUFQO0FBQ0Q7O0FBRURsQyxFQUFBQSxLQUFLLENBQUNBLEtBQUQsRUFBYztBQUNqQmhCLElBQUFBLGtFQUFnQixDQUFDLHdCQUFELEVBQTJCLEtBQTNCLEVBQWtDLDZCQUFsQyxDQUFoQjtBQUNBLFVBQU0sSUFBSStCLEtBQUosQ0FBVSxnREFBVixDQUFOO0FBQ0Q7O0FBRURkLEVBQUFBLEdBQUcsQ0FBQ21DLE1BQUQsRUFBZTtBQUNoQnBELElBQUFBLGtFQUFnQixDQUFDLHdCQUFELEVBQTJCLEtBQTNCLEVBQWtDLDJCQUFsQyxDQUFoQjs7QUFFQSxRQUFJb0QsTUFBTSxLQUFLaEIsU0FBZixFQUEwQjtBQUN4QixVQUFJZ0IsTUFBTSxDQUFDYixVQUFQLENBQWtCLEdBQWxCLENBQUosRUFBNEI7QUFDMUJ4QyxRQUFBQSxrRUFBQSxtQkFBMEJBLHlFQUFBLEVBQTFCO0FBQXlEVSxVQUFBQSxJQUFJLEVBQUUyQztBQUEvRDtBQUNELE9BRkQsTUFFTyxJQUFJQSxNQUFNLENBQUNiLFVBQVAsQ0FBa0IsR0FBbEIsQ0FBSixFQUE0QjtBQUNqQ3hDLFFBQUFBLGtFQUFBLG1CQUEwQkEseUVBQUEsRUFBMUI7QUFBeURnQixVQUFBQSxNQUFNLEVBQUVxQztBQUFqRTtBQUNELE9BRk0sTUFFQSxJQUFJQSxNQUFNLENBQUNDLElBQVAsR0FBY1osTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUNyQzFDLFFBQUFBLGtFQUFBLENBQXFCLEdBQXJCO0FBQ0QsT0FGTSxNQUVBO0FBQ0xBLFFBQUFBLGtFQUFBLENBQXFCcUQsTUFBckI7QUFDRDs7QUFFRCxhQUFPckQsNkRBQVA7QUFDRDs7QUFFRCxVQUFNMkIsUUFBUSxHQUFHM0IseUVBQUEsRUFBakI7QUFDQSxXQUFRLEdBQUUyQixRQUFRLENBQUNTLFFBQVMsR0FBRVQsUUFBUSxDQUFDWCxNQUFPLEdBQUVXLFFBQVEsQ0FBQ2pCLElBQUssRUFBOUQ7QUFDRDs7QUE3SWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcEM7QUFHQTtBQVlBO0FBR0E7O0FBSUEsTUFBTW9ELGdCQUFOLFNBQStCRixtRUFBL0IsQ0FBeUM7QUFrQnZDckQsRUFBQUEsV0FBVyxDQUFDd0QsTUFBRCxFQUFjQyxTQUFkLEVBQThCO0FBQ3ZDLFVBQU1ELE1BQU4sRUFBY0MsU0FBZDs7QUFEdUM7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsNENBTnhCLEtBTXdCOztBQUFBLHNDQUxSLEVBS1E7O0FBQUE7O0FBQUEsMkNBSHpCLEtBR3lCOztBQUFBOztBQUFBLCtDQWdHckI7QUFDbEJDLE1BQUFBLElBQUksRUFBR0MsSUFBRCxJQUFxQjtBQUN6QixhQUFLQyxTQUFMLEdBQWlCRCxJQUFqQjs7QUFFQSxZQUFJQSxJQUFJLENBQUNqRCxLQUFMLEtBQWV1Qyw2REFBbkIsRUFBdUM7QUFDckMsZUFBS1ksT0FBTCxHQUFlLEtBQWY7QUFDQSxlQUFLQyxnQkFBTCxDQUFzQkgsSUFBSSxDQUFDSSxLQUEzQjtBQUNELFNBTndCLENBUXpCOzs7QUFDQSxZQUFJSixJQUFJLENBQUNqRCxLQUFMLEtBQWV1QywrREFBbkIsRUFBeUM7QUFDdkMsZUFBS1ksT0FBTCxHQUFlLElBQWY7QUFDQSxlQUFLSSxpQkFBTDtBQUNBO0FBQ0Q7O0FBRUQsWUFBSU4sSUFBSSxDQUFDTyxPQUFULEVBQWtCO0FBQ2hCLGdCQUFNO0FBQUVDLFlBQUFBO0FBQUYsY0FBZVIsSUFBSSxDQUFDTyxPQUExQjs7QUFDQSxjQUFJQyxRQUFKLEVBQWM7QUFDWixpQkFBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDtBQUNGOztBQUVELFlBQUlSLElBQUksQ0FBQ1MsU0FBVCxFQUFvQjtBQUNsQixlQUFLQyxLQUFMLEdBQWFWLElBQUksQ0FBQ1MsU0FBbEI7QUFDRDs7QUFFRCxZQUFJLEtBQUtFLGFBQVQsRUFBd0I7QUFDdEIsZUFBS0MsZ0JBQUwsQ0FBc0JaLElBQUksQ0FBQ2EsTUFBM0I7QUFDRCxTQUZELE1BRU87QUFDTDtBQUNBLGdCQUFNQyxNQUFNLEdBQUdkLElBQUksQ0FBQ2EsTUFBTCxDQUFZRSxHQUFaLENBQWlCQyxDQUFELElBQU92QixtRUFBb0IsQ0FBQ3VCLENBQUQsQ0FBM0MsQ0FBZjtBQUNBLGVBQUtDLGlCQUFMLENBQXVCO0FBQUVqQixZQUFBQSxJQUFJLEVBQUVjO0FBQVIsV0FBdkI7QUFDRDs7QUFFRCxhQUFLUixpQkFBTDtBQUNEO0FBcENpQixLQWhHcUI7O0FBR3ZDLFNBQUtZLFVBQUwsR0FBa0JwQixTQUFTLENBQUNxQixHQUFWLENBQWMsWUFBZCxDQUFsQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJ0QixTQUFTLENBQUNxQixHQUFWLENBQWMsZUFBZCxDQUFyQjtBQUNBLFNBQUtFLE9BQUwsR0FBZXZCLFNBQVMsQ0FBQ3FCLEdBQVYsQ0FBYyxTQUFkLENBQWY7QUFDQSxTQUFLRyxXQUFMLEdBQW1CeEIsU0FBUyxDQUFDcUIsR0FBVixDQUFjLGFBQWQsQ0FBbkI7QUFDQSxTQUFLSSxLQUFMLENBQVdDLFVBQVgsR0FBd0IsS0FBS0QsS0FBTCxDQUFXQyxVQUFYLElBQXlCLElBQWpEO0FBRUEsU0FBS0MsTUFBTCxDQUFZQyxFQUFaLENBQWVuQyw4REFBZixFQUFvQyxLQUFLcUMscUJBQUwsQ0FBMkJDLElBQTNCLENBQWdDLElBQWhDLENBQXBDO0FBQ0EsU0FBS0osTUFBTCxDQUFZQyxFQUFaLENBQWVuQyxvRUFBZixFQUEwQyxLQUFLd0MsZUFBTCxDQUFxQkYsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBMUM7QUFDQSxTQUFLSixNQUFMLENBQVlDLEVBQVosQ0FBZW5DLHdFQUFmLEVBQThDLEtBQUswQyxxQkFBTCxDQUEyQkosSUFBM0IsQ0FBZ0MsSUFBaEMsQ0FBOUM7QUFDRDs7QUFFT0ksRUFBQUEscUJBQXFCLEdBQUc7QUFDOUIsVUFBTUMsV0FBVyxHQUFHLEtBQUtYLEtBQUwsQ0FBV1ksY0FBWCxFQUFwQjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCRixXQUFXLENBQ2pDRyxPQURzQixDQUNkO0FBQUVDLE1BQUFBLGNBQWMsRUFBRSxJQUFsQjtBQUF3QkMsTUFBQUEsZUFBZSxFQUFFO0FBQXpDLEtBRGMsRUFFdEJDLFNBRnNCLENBRVosS0FBS0MsaUJBRk8sQ0FBekI7QUFHRDs7QUFFT1YsRUFBQUEsZUFBZSxHQUFHO0FBQ3hCLFFBQUksS0FBS0ssaUJBQVQsRUFBNEI7QUFDMUIsV0FBS0EsaUJBQUwsQ0FBdUJNLFdBQXZCO0FBQ0EsV0FBS04saUJBQUwsR0FBeUIsSUFBekI7QUFDRDtBQUNGOztBQUVPUixFQUFBQSxxQkFBcUIsR0FBRztBQUM5QjtBQUNBLFFBQUksS0FBS2UsMEJBQUwsRUFBSixFQUF1QztBQUNyQztBQUNELEtBSjZCLENBTTlCOzs7QUFDQSxRQUFJLEtBQUtwQixLQUFMLENBQVdxQixZQUFmLEVBQTZCO0FBQzNCLFdBQUtDLGVBQUw7QUFDQSxVQUFJN0MsSUFBSSxHQUFHLEtBQUt1QixLQUFMLENBQVdxQixZQUF0QixDQUYyQixDQUczQjs7QUFDQSxVQUFJLENBQUN2RCwrQ0FBTyxDQUFDVyxJQUFELENBQVosRUFBb0I7QUFDbEJBLFFBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDQSxJQUFaO0FBQ0Q7O0FBRUQsV0FBS0MsU0FBTCxHQUFpQjtBQUNmbEQsUUFBQUEsS0FBSyxFQUFFdUMsNERBRFE7QUFFZnVCLFFBQUFBLE1BQU0sRUFBRWIsSUFGTztBQUdmUyxRQUFBQSxTQUFTLEVBQUUsS0FBS0M7QUFIRCxPQUFqQixDQVIyQixDQWMzQjtBQUNBOztBQUNBLGFBQU8sS0FBS3FDLFFBQUwsQ0FBYyxNQUFNO0FBQ3pCLGFBQUt0QixNQUFMLENBQVl1QixJQUFaLENBQWlCekQsdUVBQWpCLEVBQStDUyxJQUEvQztBQUNELE9BRk0sQ0FBUDtBQUdELEtBMUI2QixDQTRCOUI7OztBQUNBLFdBQU8sS0FBS0ksS0FBWjtBQUNBLFNBQUtGLE9BQUwsR0FBZSxJQUFmLENBOUI4QixDQWdDOUI7O0FBQ0EsV0FBTyxLQUFLa0IsYUFBTCxDQUNKRCxHQURJLENBQ0EsS0FBS0ksS0FBTCxDQUFXQyxVQURYLEVBQ3VCLEtBQUtELEtBQUwsQ0FBVzJCLFVBRGxDLEVBRUpDLElBRkksQ0FFQyxLQUFLQyxZQUFMLENBQWtCdkIsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FGRCxFQUdKd0IsS0FISSxDQUdHQyxHQUFELElBQWM7QUFDbkIsV0FBS25ELGdCQUFMLENBQXNCbUQsR0FBdEI7QUFDRCxLQUxJLENBQVA7QUFNRDs7QUFFRG5ELEVBQUFBLGdCQUFnQixDQUFDbUQsR0FBRCxFQUFXO0FBQ3pCO0FBQ0EsUUFBSUEsR0FBRyxDQUFDQyxTQUFSLEVBQW1CO0FBQ2pCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q0gsR0FBdkM7QUFDQTtBQUNEOztBQUVELFNBQUtsRCxLQUFMLEdBQWFrRCxHQUFHLENBQUNJLE9BQUosSUFBZSxlQUE1Qjs7QUFFQSxRQUFJSixHQUFHLENBQUN0RCxJQUFSLEVBQWM7QUFDWixVQUFJc0QsR0FBRyxDQUFDdEQsSUFBSixDQUFTMEQsT0FBYixFQUFzQjtBQUNwQixhQUFLdEQsS0FBTCxHQUFha0QsR0FBRyxDQUFDdEQsSUFBSixDQUFTMEQsT0FBdEI7QUFDRCxPQUZELE1BRU8sSUFBSUosR0FBRyxDQUFDdEQsSUFBSixDQUFTSSxLQUFiLEVBQW9CO0FBQ3pCLGFBQUtBLEtBQUwsR0FBYWtELEdBQUcsQ0FBQ3RELElBQUosQ0FBU0ksS0FBdEI7QUFDRDtBQUNGOztBQUVELFNBQUtFLGlCQUFMO0FBQ0Q7O0FBRURBLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCLFFBQUksQ0FBQyxLQUFLVCxNQUFMLENBQVk4RCxLQUFaLENBQWtCQyxPQUF2QixFQUFnQztBQUM5QixXQUFLL0QsTUFBTCxDQUFZZ0UsT0FBWjtBQUNEO0FBQ0YsR0EvR3NDLENBaUh2Qzs7O0FBd0NBaEIsRUFBQUEsZUFBZSxDQUFDckIsVUFBRCxFQUE2QjtBQUMxQyxTQUFLQSxVQUFMLEdBQWtCQSxVQUFVLElBQUksS0FBS0EsVUFBckM7QUFDQSxTQUFLZCxLQUFMLEdBQWEsS0FBS1csT0FBTCxDQUFhWixTQUFiLEVBQWI7QUFFQSxVQUFNcUQsV0FBVyxHQUFHbkUsMkZBQXVCLENBQUMsS0FBSzRCLEtBQU4sRUFBYSxLQUFLYixLQUFsQixDQUEzQztBQUNBLFNBQUtGLFFBQUwsR0FBZ0JzRCxXQUFXLENBQUN0RCxRQUE1QjtBQUNBLFNBQUtFLEtBQUwsR0FBYW9ELFdBQVcsQ0FBQ3JELFNBQXpCO0FBQ0Q7O0FBRUQyQyxFQUFBQSxZQUFZLENBQUM1QixVQUFELEVBQTRCO0FBQ3RDLFNBQUtxQixlQUFMLENBQXFCckIsVUFBckI7QUFFQSxTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUVBLFVBQU1ELEtBQUssR0FBRyxLQUFLQSxLQUFuQjtBQUNBLFVBQU1XLFdBQVcsR0FBR1gsS0FBSyxDQUFDWSxjQUFOLEVBQXBCO0FBRUEsV0FBT0QsV0FBVyxDQUFDNkIsR0FBWixDQUFnQjtBQUNyQnZDLE1BQUFBLFVBQVUsRUFBRUQsS0FBSyxDQUFDQyxVQURHO0FBRXJCd0MsTUFBQUEsT0FBTyxFQUFFekMsS0FBSyxDQUFDMEMsT0FGTTtBQUdyQkMsTUFBQUEsT0FBTyxFQUFFM0MsS0FBSyxDQUFDNEMsRUFITTtBQUlyQkMsTUFBQUEsV0FBVyxFQUFFLEtBQUtDLFNBQUwsQ0FBZUYsRUFKUDtBQUtyQkcsTUFBQUEsUUFBUSxFQUFFLEtBQUtELFNBQUwsQ0FBZUUsV0FBZixFQUxXO0FBTXJCL0QsTUFBQUEsUUFBUSxFQUFFLEtBQUtBLFFBTk07QUFPckJDLE1BQUFBLFNBQVMsRUFBRSxLQUFLQyxLQVBLO0FBUXJCOEQsTUFBQUEsYUFBYSxFQUFFakQsS0FBSyxDQUFDaUQsYUFBTixJQUF1QixLQUFLQyxLQVJ0QjtBQVNyQkMsTUFBQUEsV0FBVyxFQUFFbkQsS0FBSyxDQUFDb0QsUUFURTtBQVVyQnpCLE1BQUFBLFVBQVUsRUFBRTNCLEtBQUssQ0FBQzJCLFVBVkc7QUFXckIwQixNQUFBQSxZQUFZLEVBQUVyRCxLQUFLLENBQUNxRCxZQVhDO0FBWXJCQyxNQUFBQSxlQUFlLEVBQUV0RCxLQUFLLENBQUNzRDtBQVpGLEtBQWhCLENBQVA7QUFjRDs7QUFFRGpFLEVBQUFBLGdCQUFnQixDQUFDWixJQUFELEVBQW9CO0FBQ2xDLFNBQUtFLE9BQUwsR0FBZSxLQUFmOztBQUVBLFFBQUksS0FBS21FLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxDQUFlUyxRQUFyQyxFQUErQztBQUM3QyxXQUFLdkQsS0FBTCxDQUFXcUIsWUFBWCxHQUEwQjVDLElBQUksQ0FBQ2UsR0FBTCxDQUFVZ0UsS0FBRCxJQUFXdkYsNkRBQWMsQ0FBQ3VGLEtBQUQsQ0FBbEMsQ0FBMUI7QUFDRDs7QUFFRCxRQUFJO0FBQ0YsV0FBS3RELE1BQUwsQ0FBWXVCLElBQVosQ0FBaUJ6RCx5RUFBakIsRUFBaURTLElBQWpEO0FBQ0QsS0FGRCxDQUVFLE9BQU9zRCxHQUFQLEVBQVk7QUFDWixXQUFLbkQsZ0JBQUwsQ0FBc0JtRCxHQUF0QjtBQUNEO0FBQ0Y7O0FBRURyQyxFQUFBQSxpQkFBaUIsQ0FBQ2dFLE1BQUQsRUFBNEI7QUFDM0MsU0FBSy9FLE9BQUwsR0FBZSxLQUFmOztBQUVBLFFBQUksS0FBS21FLFNBQUwsQ0FBZVMsUUFBbkIsRUFBNkI7QUFDM0IsV0FBS3ZELEtBQUwsQ0FBV3FCLFlBQVgsR0FBMEJxQyxNQUFNLENBQUNqRixJQUFqQztBQUNEOztBQUVELFFBQUksQ0FBQ2lGLE1BQUQsSUFBVyxDQUFDQSxNQUFNLENBQUNqRixJQUF2QixFQUE2QjtBQUMzQndELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHVEQUFaLEVBQXFFd0IsTUFBckU7QUFDQUEsTUFBQUEsTUFBTSxHQUFHO0FBQUVqRixRQUFBQSxJQUFJLEVBQUU7QUFBUixPQUFUO0FBQ0Q7O0FBRUQsUUFBSTtBQUNGLFdBQUt5QixNQUFMLENBQVl1QixJQUFaLENBQWlCekQsbUVBQWpCLEVBQTJDMEYsTUFBTSxDQUFDakYsSUFBbEQ7QUFDRCxLQUZELENBRUUsT0FBT3NELEdBQVAsRUFBWTtBQUNaLFdBQUtuRCxnQkFBTCxDQUFzQm1ELEdBQXRCO0FBQ0Q7QUFDRjs7QUF6TnNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnpDO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFJTyxNQUFNNUQsU0FBTixDQUFnQjtBQW1CckJyRCxFQUFBQSxXQUFXLENBQUN3RCxNQUFELEVBQWNDLFNBQWQsRUFBZ0Q7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSx3Q0FmOUMsRUFlOEM7O0FBQUEsc0NBZGhELEVBY2dEOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLCtDQVR2QyxLQVN1Qzs7QUFBQTs7QUFBQTs7QUFBQSxxQ0FKakQsS0FJaUQ7O0FBQUE7O0FBQUE7O0FBQUEsZ0RBaUZyQ3lGLE1BQUQsSUFBNkIsQ0FBRSxDQWpGTzs7QUFDekQsU0FBS2hFLEtBQUwsa0JBQWEsS0FBS0EsS0FBbEIscURBQTJCMUIsTUFBTSxDQUFDMkYsT0FBUCxDQUFlakUsS0FBMUM7QUFDQSxTQUFLOEMsU0FBTCxzQkFBaUIsS0FBS0EsU0FBdEIsNkRBQW1DeEUsTUFBTSxDQUFDMkYsT0FBUCxDQUFlbkIsU0FBbEQ7QUFDQSxTQUFLdkUsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLa0QsUUFBTCxHQUFnQmpELFNBQVMsQ0FBQ3FCLEdBQVYsQ0FBYyxVQUFkLENBQWhCO0FBQ0EsU0FBS3NFLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUl0SixzRkFBSixFQUFqQjtBQUNBLFNBQUtxRixNQUFMLEdBQWMsSUFBSTJELHNEQUFKLEVBQWQ7QUFDQSxTQUFLTyxNQUFMLEdBQWMsRUFBZCxDQVR5RCxDQVN2Qzs7QUFFbEIsVUFBTUosTUFBTSxHQUFHRiw4REFBQSxDQUFjLEtBQUs5RCxLQUFMLENBQVdzRSxJQUF6QixDQUFmOztBQUNBLFFBQUlOLE1BQUosRUFBWTtBQUNWLFdBQUtPLFFBQUwsR0FBZ0JQLE1BQU0sQ0FBQ3BCLEVBQXZCO0FBQ0EsV0FBSzRCLFVBQUwsR0FBa0JSLE1BQU0sQ0FBQ2xJLElBQXpCO0FBQ0Q7O0FBRUR3QyxJQUFBQSxNQUFNLENBQUNtRyxHQUFQLENBQVd6Ryw2RUFBWCxFQUErQyxNQUFNLEtBQUswRyxhQUFMLEVBQXJEO0FBQ0Q7O0FBRURBLEVBQUFBLGFBQWEsR0FBRztBQUNkLFNBQUt4RSxNQUFMLENBQVl1QixJQUFaLENBQWlCekQsd0VBQWpCO0FBQ0EsU0FBS2tDLE1BQUwsQ0FBWXVCLElBQVosQ0FBaUJ6RCxrRUFBakI7QUFDQSxTQUFLOEUsU0FBTCxDQUFlOEIsZ0JBQWYsQ0FBZ0MsS0FBSzVFLEtBQXJDO0FBQ0Q7O0FBRUQ2RSxFQUFBQSxrQkFBa0IsR0FBRztBQUNuQmQsSUFBQUEsc0VBQUE7QUFDRDs7QUFFRDNELEVBQUFBLE9BQU8sR0FBRztBQUNSLFNBQUtKLEtBQUwsQ0FBV0ksT0FBWDtBQUNEOztBQUVEMEUsRUFBQUEsZUFBZSxDQUFJQyxLQUFKLEVBQXdCQyxPQUF4QixFQUFxQztBQUNsRCxTQUFLMUcsTUFBTCxDQUFZOEQsS0FBWixDQUFrQjZDLFFBQWxCLENBQTJCRixLQUEzQixFQUFrQ0MsT0FBbEM7QUFDRDs7QUFFREUsRUFBQUEsWUFBWSxHQUFHO0FBQ2IsUUFBSSxDQUFDLEtBQUtDLGlCQUFWLEVBQTZCO0FBQzNCLFdBQUtBLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsV0FBS2pGLE1BQUwsQ0FBWXVCLElBQVosQ0FBaUJ6RCwwRUFBakI7QUFDRDtBQUNGOztBQUVEcUgsRUFBQUEsWUFBWSxDQUFDQyxLQUFELEVBQWdCQyxXQUFoQixFQUFrQ0MsS0FBbEMsRUFBa0RDLElBQWxELEVBQThEO0FBQ3hFLFVBQU1DLFNBQVMsR0FBRztBQUFFSixNQUFBQSxLQUFGO0FBQVNDLE1BQUFBLFdBQVQ7QUFBc0JFLE1BQUFBO0FBQXRCLEtBQWxCOztBQUVBLFFBQUk3QixnREFBUSxDQUFDMkIsV0FBRCxDQUFaLEVBQTJCO0FBQ3pCRyxNQUFBQSxTQUFTLENBQUNILFdBQVYsR0FBd0IsTUFBTTtBQUM1QixlQUFPO0FBQUVJLFVBQUFBLFdBQVcsRUFBRUo7QUFBZixTQUFQO0FBQ0QsT0FGRDtBQUdEOztBQUVELFFBQUlDLEtBQUosRUFBVztBQUNULFdBQUt0QixVQUFMLENBQWdCMEIsTUFBaEIsQ0FBdUJKLEtBQXZCLEVBQThCLENBQTlCLEVBQWlDRSxTQUFqQztBQUNELEtBRkQsTUFFTztBQUNMLFdBQUt4QixVQUFMLENBQWdCbEgsSUFBaEIsQ0FBcUIwSSxTQUFyQjtBQUNEO0FBQ0Y7O0FBRURHLEVBQUFBLGVBQWUsR0FBRztBQUNoQixVQUFNQyxJQUE0QixHQUFHLEVBQXJDO0FBQ0EsU0FBSzVGLE1BQUwsQ0FBWXVCLElBQVosQ0FBaUJ6RCx1RUFBakIsRUFBK0M4SCxJQUEvQztBQUNBLFdBQU9BLElBQVA7QUFDRCxHQXBGb0IsQ0FzRnJCOzs7QUFDNEIsUUFBdEJFLHNCQUFzQixHQUFtQjtBQUM3QyxXQUFPLEVBQVA7QUFDRDs7QUFFRDVFLEVBQUFBLDBCQUEwQixHQUFHO0FBQzNCLFdBQU8sS0FBSzBCLFNBQUwsQ0FBZW1ELHNCQUFmLENBQXNDLEtBQUtqRyxLQUEzQyxDQUFQO0FBQ0Q7O0FBRURrRyxFQUFBQSxNQUFNLENBQUNsQixPQUFELEVBQWdCO0FBQ3BCLFNBQUs5RSxNQUFMLENBQVl1QixJQUFaLENBQWlCekQsNkRBQWpCLEVBQXFDZ0gsT0FBckM7QUFDRCxHQWpHb0IsQ0FtR3JCOzs7QUFuR3FCOzs7Ozs7Ozs7Ozs7Ozs7QUNoQnZCO0FBRU8sTUFBTW9CLFNBQU4sQ0FBeUI7QUFTOUJ0TCxFQUFBQSxXQUFXLENBQVF3RCxNQUFSLEVBQTRCQyxTQUE1QixFQUE4RDtBQUFBOztBQUFBLFNBQXRERCxNQUFzRCxHQUF0REEsTUFBc0Q7QUFBQSxTQUFsQ0MsU0FBa0MsR0FBbENBLFNBQWtDOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLFNBQXRERCxNQUFzRCxHQUF0REEsTUFBc0Q7QUFBQSxTQUFsQ0MsU0FBa0MsR0FBbENBLFNBQWtDO0FBQ3ZFLFNBQUs4SCxTQUFMLHNCQUFpQixLQUFLQSxTQUF0Qiw2REFBbUMvSCxNQUFNLENBQUNnSSxJQUFQLENBQVlELFNBQS9DO0FBQ0EsU0FBS0UsTUFBTCxtQkFBYyxLQUFLQSxNQUFuQix1REFBNkJqSSxNQUFNLENBQUNnSSxJQUFQLENBQVlDLE1BQXpDO0FBQ0EsU0FBS3RHLFVBQUwsdUJBQWtCLEtBQUtBLFVBQXZCLCtEQUFxQzNCLE1BQU0sQ0FBQ2dJLElBQVAsQ0FBWXJHLFVBQWpEO0FBQ0EsU0FBS0QsS0FBTCxnREFBYSxLQUFLcUcsU0FBbEIscURBQWEsaUJBQWdCckcsS0FBN0IseUVBQXNDMUIsTUFBTSxDQUFDZ0ksSUFBUCxDQUFZRCxTQUFaLENBQXNCckcsS0FBNUQ7QUFDQSxTQUFLd0csV0FBTCxHQUFtQkwsK0NBQU8sQ0FBQyxLQUFLbkcsS0FBTCxDQUFXMEMsT0FBWixFQUFxQixLQUFLNkQsTUFBMUIsQ0FBUCxLQUE2QyxLQUFLdkcsS0FBTCxDQUFXMEMsT0FBWCxDQUFtQnpGLE1BQW5CLEdBQTRCLENBQTVGO0FBQ0Q7O0FBRURtRCxFQUFBQSxPQUFPLEdBQUc7QUFDUixTQUFLaUcsU0FBTCxDQUFlakcsT0FBZjtBQUNEOztBQW5CNkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGhDO0FBRUE7QUFFTyxNQUFNdUcsaUJBQU4sQ0FBd0I7QUFzQjdCO0FBQ0E3TCxFQUFBQSxXQUFXLENBQUN3RCxNQUFELEVBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDdkJBLElBQUFBLE1BQU0sQ0FBQ3NJLE1BQVAsR0FBZ0IsSUFBaEI7QUFFQSxTQUFLQyxnQkFBTCxHQUF3QixDQUF4QjtBQUNBLFNBQUtSLFNBQUwsR0FBaUIvSCxNQUFNLENBQUNnSSxJQUF4QjtBQUNBLFNBQUt0RyxLQUFMLEdBQWEsS0FBS3FHLFNBQUwsQ0FBZXJHLEtBQTVCO0FBQ0EsU0FBSzhHLFdBQUwsR0FBbUJKLDhEQUFlLEVBQWxDO0FBQ0EsU0FBS0ssVUFBTCxHQUFrQixDQUNoQjtBQUFFQyxNQUFBQSxJQUFJLEVBQUUsVUFBUjtBQUFvQkMsTUFBQUEsS0FBSyxFQUFFO0FBQTNCLEtBRGdCLEVBRWhCO0FBQUVELE1BQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCQyxNQUFBQSxLQUFLLEVBQUU7QUFBdkIsS0FGZ0IsRUFHaEI7QUFBRUQsTUFBQUEsSUFBSSxFQUFFLE9BQVI7QUFBaUJDLE1BQUFBLEtBQUssRUFBRTtBQUF4QixLQUhnQixFQUloQjtBQUFFRCxNQUFBQSxJQUFJLEVBQUUsS0FBUjtBQUFlQyxNQUFBQSxLQUFLLEVBQUU7QUFBdEIsS0FKZ0IsQ0FBbEI7QUFNQSxTQUFLQyxXQUFMLEdBQW1CLENBQ2pCO0FBQUVGLE1BQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFBQSxLQUFLLEVBQUU7QUFBekIsS0FEaUIsRUFFakI7QUFBRUQsTUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLE1BQUFBLEtBQUssRUFBRTtBQUF6QixLQUZpQixFQUdqQjtBQUFFRCxNQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQkMsTUFBQUEsS0FBSyxFQUFFO0FBQXZCLEtBSGlCLEVBSWpCO0FBQUVELE1BQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFBQSxLQUFLLEVBQUU7QUFBekIsS0FKaUIsQ0FBbkI7QUFNQSxTQUFLRSxTQUFMLEdBQWlCLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLEVBQXVCLE1BQXZCLEVBQStCLE1BQS9CLEVBQXVDLE1BQXZDLEVBQStDLE1BQS9DLEVBQXVELE1BQXZELEVBQStELE1BQS9ELEVBQXVFLE1BQXZFLEVBQStFLE1BQS9FLEVBQXVGLE1BQXZGLENBQWpCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixDQUNqQjtBQUFFSixNQUFBQSxJQUFJLEVBQUUscUJBQVI7QUFBK0JDLE1BQUFBLEtBQUssRUFBRTtBQUF0QyxLQURpQixFQUVqQjtBQUFFRCxNQUFBQSxJQUFJLEVBQUUseUJBQVI7QUFBbUNDLE1BQUFBLEtBQUssRUFBRTtBQUExQyxLQUZpQixFQUdqQjtBQUFFRCxNQUFBQSxJQUFJLEVBQUUsb0JBQVI7QUFBOEJDLE1BQUFBLEtBQUssRUFBRTtBQUFyQyxLQUhpQixFQUlqQjtBQUFFRCxNQUFBQSxJQUFJLEVBQUUsaUJBQVI7QUFBMkJDLE1BQUFBLEtBQUssRUFBRTtBQUFsQyxLQUppQixFQUtqQjtBQUFFRCxNQUFBQSxJQUFJLEVBQUUsWUFBUjtBQUFzQkMsTUFBQUEsS0FBSyxFQUFFO0FBQTdCLEtBTGlCLENBQW5CO0FBT0EsU0FBS0ksWUFBTCxHQUFvQixDQUNsQjtBQUFFTCxNQUFBQSxJQUFJLEVBQUUsZUFBUjtBQUF5QkMsTUFBQUEsS0FBSyxFQUFFO0FBQWhDLEtBRGtCLEVBRWxCO0FBQUVELE1BQUFBLElBQUksRUFBRSxlQUFSO0FBQXlCQyxNQUFBQSxLQUFLLEVBQUU7QUFBaEMsS0FGa0IsQ0FBcEI7QUFJQSxTQUFLSyxVQUFMLEdBQWtCWCxpQkFBaUIsQ0FBQ1ksY0FBcEM7O0FBRUEsU0FBS0MsY0FBTCxHQUFzQixNQUFNO0FBQzFCLFVBQUksQ0FBQyxLQUFLbkIsU0FBTCxDQUFlb0IsS0FBcEIsRUFBMkI7QUFDekIsZUFBTyxFQUFQO0FBQ0Q7O0FBQ0QsYUFBT2pJLDJDQUFHLENBQUMsS0FBSzZHLFNBQUwsQ0FBZW9CLEtBQWYsQ0FBcUJDLE9BQXRCLEVBQWdDQyxHQUFELElBQWM7QUFDckQsZUFBT0EsR0FBRyxDQUFDWCxJQUFYO0FBQ0QsT0FGUyxDQUFWO0FBR0QsS0FQRDs7QUFTQSxTQUFLWSxhQUFMLEdBQXFCLEtBQUtBLGFBQUwsQ0FBbUJ0SCxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNEOztBQUVENEYsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsU0FBS0csU0FBTCxDQUFlSCxNQUFmO0FBQ0Q7O0FBRUQyQixFQUFBQSxhQUFhLENBQUNDLE1BQUQsRUFBYztBQUN6QixXQUFRYixLQUFELElBQWdCO0FBQ3JCYSxNQUFBQSxNQUFNLENBQUNDLElBQVAsR0FBY2QsS0FBZDtBQUNBLFdBQUtaLFNBQUwsQ0FBZUgsTUFBZjtBQUNELEtBSEQ7QUFJRDs7QUFFRDhCLEVBQUFBLGNBQWMsR0FBRztBQUNmLFVBQU1DLFlBQW9CLEdBQUc7QUFDM0JGLE1BQUFBLElBQUksRUFBRSxPQURxQjtBQUUzQnpELE1BQUFBLElBQUksRUFBRSxRQUZxQjtBQUczQjRELE1BQUFBLEtBQUssRUFBRSxFQUhvQjtBQUkzQkMsTUFBQUEsUUFBUSxFQUFFLENBSmlCO0FBSzNCQyxNQUFBQSxNQUFNLEVBQUUsQ0FBQyx3QkFBRCxFQUEyQiwwQkFBM0IsRUFBdUQseUJBQXZELENBTG1CO0FBTTNCQyxNQUFBQSxTQUFTLEVBQUUsSUFOZ0I7QUFPM0JDLE1BQUFBLE9BQU8sRUFBRSxFQVBrQjtBQVEzQkMsTUFBQUEsVUFBVSxFQUFFLHFCQVJlO0FBUzNCQyxNQUFBQSxVQUFVLEVBQUUsRUFUZTtBQVUzQkMsTUFBQUEsV0FBVyxFQUFFLENBVmM7QUFXM0JDLE1BQUFBLEtBQUssRUFBRTtBQVhvQixLQUE3QjtBQWNBLFVBQU1DLE1BQU0sR0FBRyxLQUFLM0ksS0FBTCxDQUFXMkksTUFBMUI7QUFDQSxVQUFNQyxXQUFXLEdBQUdELE1BQU0sQ0FBQzFMLE1BQTNCO0FBQ0EsUUFBSTRMLGFBQWEsR0FBR0QsV0FBcEIsQ0FqQmUsQ0FtQmY7O0FBQ0EsUUFBSUEsV0FBVyxHQUFHLENBQWxCLEVBQXFCO0FBQ25CLFlBQU1FLElBQUksR0FBR0gsTUFBTSxDQUFDQyxXQUFXLEdBQUcsQ0FBZixDQUFuQjs7QUFDQSxVQUFJRSxJQUFJLENBQUNSLE9BQUwsS0FBaUIsTUFBckIsRUFBNkI7QUFDM0JPLFFBQUFBLGFBQWEsR0FBR0QsV0FBVyxHQUFHLENBQTlCO0FBQ0Q7QUFDRjs7QUFFREQsSUFBQUEsTUFBTSxDQUFDL0MsTUFBUCxDQUFjaUQsYUFBZCxFQUE2QixDQUE3QixFQUFnQ1osWUFBaEM7QUFDQSxTQUFLcEIsZ0JBQUwsR0FBd0JnQyxhQUF4QjtBQUNEOztBQUVERSxFQUFBQSxpQkFBaUIsQ0FBQ0MsS0FBRCxFQUFhO0FBQzVCLFNBQUtoSixLQUFMLENBQVcySSxNQUFYLEdBQW9CbEMsK0NBQU8sQ0FBQyxLQUFLekcsS0FBTCxDQUFXMkksTUFBWixFQUFvQkssS0FBcEIsQ0FBM0I7QUFDRDs7QUFFREMsRUFBQUEsZ0JBQWdCLENBQUN6RCxLQUFELEVBQWdCO0FBQzlCLFVBQU0wRCxHQUFHLEdBQUcsS0FBS2xKLEtBQUwsQ0FBVzJJLE1BQVgsQ0FBa0JuRCxLQUFsQixFQUF5QjRDLE1BQXJDO0FBQ0EsVUFBTWUsSUFBSSxHQUFHRCxHQUFHLENBQUMsQ0FBRCxDQUFoQjtBQUNBQSxJQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNBLEdBQUcsQ0FBQyxDQUFELENBQVo7QUFDQUEsSUFBQUEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTQyxJQUFUO0FBQ0EsU0FBSzlDLFNBQUwsQ0FBZUgsTUFBZjtBQUNEOztBQUVEMEIsRUFBQUEsYUFBYSxDQUFDb0IsS0FBRCxFQUFhSSxVQUFiLEVBQWlDO0FBQzVDLFdBQVFDLFFBQUQsSUFBc0I7QUFDM0JMLE1BQUFBLEtBQUssQ0FBQ1osTUFBTixDQUFhZ0IsVUFBYixJQUEyQkMsUUFBM0I7QUFDQSxXQUFLbkQsTUFBTDtBQUNELEtBSEQ7QUFJRDs7QUFFRG9ELEVBQUFBLFdBQVcsQ0FBQ04sS0FBRCxFQUFhO0FBQ3RCLFFBQUksQ0FBQ0EsS0FBSyxDQUFDTyxTQUFYLEVBQXNCO0FBQ3BCUCxNQUFBQSxLQUFLLENBQUNPLFNBQU4sR0FBa0IsRUFBbEI7QUFDRDs7QUFDRFAsSUFBQUEsS0FBSyxDQUFDTyxTQUFOLENBQWdCdk0sSUFBaEIsQ0FBcUI7QUFBRWlLLE1BQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFELE1BQUFBLElBQUksRUFBRTtBQUFuQixLQUFyQjtBQUNBLFNBQUtYLFNBQUwsQ0FBZUgsTUFBZjtBQUNEOztBQUVEc0QsRUFBQUEsY0FBYyxDQUFDUixLQUFELEVBQWF4RCxLQUFiLEVBQTRCO0FBQ3hDd0QsSUFBQUEsS0FBSyxDQUFDTyxTQUFOLENBQWdCM0QsTUFBaEIsQ0FBdUJKLEtBQXZCLEVBQThCLENBQTlCO0FBQ0EsU0FBS2EsU0FBTCxDQUFlSCxNQUFmO0FBQ0Q7O0FBRUR1RCxFQUFBQSxXQUFXLENBQUNULEtBQUQsRUFBYTtBQUN0QixRQUFJLENBQUNBLEtBQUssQ0FBQ1UsU0FBWCxFQUFzQjtBQUNwQlYsTUFBQUEsS0FBSyxDQUFDVSxTQUFOLEdBQWtCLEVBQWxCO0FBQ0Q7O0FBQ0RWLElBQUFBLEtBQUssQ0FBQ1UsU0FBTixDQUFnQjFNLElBQWhCLENBQXFCO0FBQUUyTSxNQUFBQSxJQUFJLEVBQUUsRUFBUjtBQUFZQyxNQUFBQSxFQUFFLEVBQUUsRUFBaEI7QUFBb0I1QyxNQUFBQSxJQUFJLEVBQUU7QUFBMUIsS0FBckI7QUFDQSxTQUFLWCxTQUFMLENBQWVILE1BQWY7QUFDRDs7QUFFRDJELEVBQUFBLGNBQWMsQ0FBQ2IsS0FBRCxFQUFheEQsS0FBYixFQUE0QjtBQUN4Q3dELElBQUFBLEtBQUssQ0FBQ1UsU0FBTixDQUFnQjlELE1BQWhCLENBQXVCSixLQUF2QixFQUE4QixDQUE5QjtBQUNBLFNBQUthLFNBQUwsQ0FBZUgsTUFBZjtBQUNEOztBQXpKNEI7OztnQkFBbEJTLHFDQWVzQixDQUMvQjtBQUFFSyxFQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQkMsRUFBQUEsS0FBSyxFQUFFO0FBQXZCLENBRCtCLEVBRS9CO0FBQUVELEVBQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCQyxFQUFBQSxLQUFLLEVBQUU7QUFBdkIsQ0FGK0IsRUFHL0I7QUFBRUQsRUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLEVBQUFBLEtBQUssRUFBRTtBQUF6QixDQUgrQixFQUkvQjtBQUFFRCxFQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQkMsRUFBQUEsS0FBSyxFQUFFO0FBQXhCLENBSitCOztBQTZJNUIsU0FBUzZDLGdCQUFULEdBQTRCO0FBQ2pDOztBQUNBLFNBQU87QUFDTEMsSUFBQUEsUUFBUSxFQUFFLEdBREw7QUFFTEMsSUFBQUEsS0FBSyxFQUFFLElBRkY7QUFHTHJFLElBQUFBLFdBQVcsRUFBRSx3REFIUjtBQUlMc0UsSUFBQUEsVUFBVSxFQUFFdEQ7QUFKUCxHQUFQO0FBTUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEtEO0FBRUE7QUFHTyxNQUFNeUQsb0JBQU4sQ0FBMkI7QUFVaEM7QUFDQXRQLEVBQUFBLFdBQVcsQ0FBQ3dELE1BQUQsRUFBc0IrTCxZQUF0QixFQUF5QztBQUFBLFNBQW5CQSxZQUFtQixHQUFuQkEsWUFBbUI7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsMkNBSnBDLEtBSW9DOztBQUFBLGdEQUgvQixFQUcrQjs7QUFBQSxTQUFuQkEsWUFBbUIsR0FBbkJBLFlBQW1CO0FBQ2xEL0wsSUFBQUEsTUFBTSxDQUFDc0ksTUFBUCxHQUFnQixJQUFoQjtBQUNBLFNBQUtQLFNBQUwsR0FBaUIvSCxNQUFNLENBQUNnSSxJQUF4QjtBQUNBLFNBQUt0RyxLQUFMLEdBQWEsS0FBS3FHLFNBQUwsQ0FBZXJHLEtBQTVCO0FBQ0EsU0FBS21LLFlBQUwsR0FBb0JBLHVEQUFwQjtBQUNBLFNBQUtoRCxTQUFMLEdBQWlCLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxNQUFmLEVBQXVCLE1BQXZCLEVBQStCLE1BQS9CLEVBQXVDLE1BQXZDLEVBQStDLE1BQS9DLEVBQXVELE1BQXZELEVBQStELE1BQS9ELEVBQXVFLE1BQXZFLEVBQStFLE1BQS9FLEVBQXVGLE1BQXZGLENBQWpCO0FBQ0EsU0FBS21ELGdCQUFMLEdBQXdCRCxZQUFZLENBQUNFLGFBQWIsRUFBeEI7QUFDQSxTQUFLQyxvQkFBTDtBQUNEOztBQUVEQSxFQUFBQSxvQkFBb0IsR0FBRztBQUNyQixTQUFLQyxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEIsRUFBMUI7O0FBRUEsWUFBUSxLQUFLMUssS0FBTCxDQUFXMkssU0FBbkI7QUFDRSxXQUFLLHlCQUFMO0FBQWdDO0FBQzlCLGVBQUtGLGFBQUwsR0FBcUIsSUFBckI7QUFDQTtBQUNEOztBQUNELFdBQUssTUFBTDtBQUFhO0FBQ1gsZUFBS0EsYUFBTCxHQUFxQixJQUFyQjtBQUNBO0FBQ0Q7O0FBQ0QsV0FBSyxPQUFMO0FBQWM7QUFDWixlQUFLQyxrQkFBTCxHQUEwQiwwREFBMUI7QUFDRDtBQVhIO0FBYUQ7O0FBRURFLEVBQUFBLGdCQUFnQixHQUFHO0FBQ2pCLFFBQUksQ0FBQyxLQUFLdkUsU0FBTCxDQUFld0UsT0FBcEIsRUFBNkI7QUFDM0IsYUFBT0MsT0FBTyxDQUFDQyxPQUFSLENBQWdCLEVBQWhCLENBQVA7QUFDRDs7QUFDRCxVQUFNckQsT0FBTyxHQUFHLEtBQUt5QyxZQUFMLENBQWtCLEtBQUtuSyxLQUFMLENBQVcySyxTQUE3QixFQUF3Q0ssVUFBeEMsQ0FBbUQsS0FBSzNFLFNBQUwsQ0FBZXdFLE9BQWxFLENBQWhCO0FBQ0EsVUFBTUksUUFBUSxHQUFHekwsMkNBQUcsQ0FBQ2tJLE9BQUQsRUFBV3dELENBQUQsSUFBWSxLQUFLYixZQUFMLENBQWtCYyxVQUFsQixDQUE2QjtBQUFFbEUsTUFBQUEsS0FBSyxFQUFFaUUsQ0FBQyxDQUFDbEU7QUFBWCxLQUE3QixDQUF0QixDQUFwQjtBQUNBLFdBQU84RCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JFLFFBQWhCLENBQVA7QUFDRDs7QUFFREcsRUFBQUEsU0FBUyxHQUFHO0FBQ1YsVUFBTTFELE9BQU8sR0FBR3lDLHVEQUFZLENBQUMsS0FBS25LLEtBQUwsQ0FBVzJLLFNBQVosQ0FBWixDQUFtQ0ssVUFBbkMsQ0FBOEMsS0FBSzNFLFNBQUwsQ0FBZXdFLE9BQTdELENBQWhCO0FBQ0EsVUFBTS9DLE1BQVcsR0FBR29DLDRDQUFJLENBQUN4QyxPQUFELEVBQVU7QUFBRVYsTUFBQUEsSUFBSSxFQUFFLEtBQUtzRCxnQkFBTCxDQUFzQnJEO0FBQTlCLEtBQVYsQ0FBeEI7O0FBRUEsUUFBSWEsTUFBSixFQUFZO0FBQ1YsV0FBSzlILEtBQUwsQ0FBVzBILE9BQVgsQ0FBbUIxSyxJQUFuQixDQUF3QjhLLE1BQXhCO0FBQ0EsV0FBSzVCLE1BQUw7QUFDRDs7QUFFRCxVQUFNbUYsVUFBVSxHQUFHLEtBQUtoQixZQUFMLENBQWtCRSxhQUFsQixFQUFuQjtBQUNBLFNBQUtELGdCQUFMLENBQXNCZ0IsSUFBdEIsR0FBNkJELFVBQVUsQ0FBQ0MsSUFBeEM7QUFDQSxTQUFLaEIsZ0JBQUwsQ0FBc0JyRCxLQUF0QixHQUE4Qm9FLFVBQVUsQ0FBQ3BFLEtBQXpDO0FBQ0Q7O0FBRURzRSxFQUFBQSxnQkFBZ0IsR0FBRztBQUNqQixTQUFLdkwsS0FBTCxDQUFXMEgsT0FBWCxHQUFxQixFQUFyQjs7QUFDQSxRQUFJLEtBQUsxSCxLQUFMLENBQVcySyxTQUFYLEtBQXlCLGFBQTdCLEVBQTRDO0FBQzFDLFdBQUt0RSxTQUFMLENBQWVqRyxPQUFmO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBSSxLQUFLSixLQUFMLENBQVcySyxTQUFYLEtBQXlCLHlCQUE3QixFQUF3RDtBQUN0RCxhQUFLM0ssS0FBTCxDQUFXMEgsT0FBWCxDQUFtQjFLLElBQW5CLENBQXdCO0FBQUVnSyxVQUFBQSxJQUFJLEVBQUUsS0FBUjtBQUFlQyxVQUFBQSxLQUFLLEVBQUU7QUFBdEIsU0FBeEI7QUFDRDs7QUFFRCxXQUFLdUQsb0JBQUw7QUFDQSxXQUFLdEUsTUFBTDtBQUNEO0FBQ0Y7O0FBRURBLEVBQUFBLE1BQU0sR0FBRztBQUNQLFNBQUtHLFNBQUwsQ0FBZUgsTUFBZjtBQUNEOztBQUVEc0YsRUFBQUEsWUFBWSxDQUFDMUQsTUFBRCxFQUFzQjtBQUNoQyxTQUFLOUgsS0FBTCxDQUFXMEgsT0FBWCxHQUFxQmpCLCtDQUFPLENBQUMsS0FBS3pHLEtBQUwsQ0FBVzBILE9BQVosRUFBcUJJLE1BQXJCLENBQTVCO0FBQ0EsU0FBS3pCLFNBQUwsQ0FBZUgsTUFBZjtBQUNEOztBQXBGK0I7O0FBdUYzQixTQUFTdUYsZ0JBQVQsQ0FBMEJwQixZQUExQixFQUE2QztBQUNsRDs7QUFDQSxTQUFPO0FBQ0xOLElBQUFBLFFBQVEsRUFBRSxHQURMO0FBRUxDLElBQUFBLEtBQUssRUFBRSxJQUZGO0FBR0xyRSxJQUFBQSxXQUFXLEVBQUUsZ0RBSFI7QUFJTHNFLElBQUFBLFVBQVUsRUFBRUc7QUFKUCxHQUFQO0FBTUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHRDtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTThCLGNBQU4sU0FBNkI3Tiw2REFBN0IsQ0FBOEM7QUF5Q25EO0FBQ0F2RCxFQUFBQSxXQUFXLENBQUN3RCxNQUFELEVBQWNDLFNBQWQsRUFBc0M0TixjQUF0QyxFQUFtRUMsU0FBbkUsRUFBbUY7QUFDNUYsVUFBTTlOLE1BQU4sRUFBY0MsU0FBZDtBQUQ0RixTQUE3QzROLGNBQTZDLEdBQTdDQSxjQUE2QztBQUFBLFNBQWhCQyxTQUFnQixHQUFoQkEsU0FBZ0I7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsMkNBaEN6RTtBQUNuQjFKLE1BQUFBLE9BQU8sRUFBRSxDQUFDLEVBQUQsQ0FEVTtBQUVuQmlJLE1BQUFBLFNBQVMsRUFBRSx1QkFGUTtBQUduQjBCLE1BQUFBLFFBQVEsRUFBRSxJQUhTO0FBSW5CQyxNQUFBQSxVQUFVLEVBQUUsSUFKTztBQUtuQjNELE1BQUFBLE1BQU0sRUFBRSxDQUNOO0FBQ0VyRSxRQUFBQSxJQUFJLEVBQUUsTUFEUjtBQUVFZ0UsUUFBQUEsT0FBTyxFQUFFLE1BRlg7QUFHRUosUUFBQUEsS0FBSyxFQUFFLE1BSFQ7QUFJRUssUUFBQUEsVUFBVSxFQUFFLHFCQUpkO0FBS0VHLFFBQUFBLEtBQUssRUFBRTtBQUxULE9BRE0sRUFRTjtBQUNFWCxRQUFBQSxJQUFJLEVBQUUsT0FEUjtBQUVFekQsUUFBQUEsSUFBSSxFQUFFLFFBRlI7QUFHRTRELFFBQUFBLEtBQUssRUFBRSxFQUhUO0FBSUVDLFFBQUFBLFFBQVEsRUFBRSxDQUpaO0FBS0VDLFFBQUFBLE1BQU0sRUFBRSxDQUFDLHdCQUFELEVBQTJCLDBCQUEzQixFQUF1RCx5QkFBdkQsQ0FMVjtBQU1FQyxRQUFBQSxTQUFTLEVBQUUsSUFOYjtBQU9FQyxRQUFBQSxPQUFPLEVBQUUsTUFQWDtBQVFFRSxRQUFBQSxVQUFVLEVBQUUsRUFSZDtBQVNFRSxRQUFBQSxLQUFLLEVBQUU7QUFUVCxPQVJNLENBTFc7QUF5Qm5CaEIsTUFBQUEsT0FBTyxFQUFFLEVBekJVO0FBMkJuQjZFLE1BQUFBLFFBQVEsRUFBRSxNQTNCUztBQTRCbkJDLE1BQUFBLElBQUksRUFBRTtBQUFFN0UsUUFBQUEsR0FBRyxFQUFFLENBQVA7QUFBVThFLFFBQUFBLElBQUksRUFBRTtBQUFoQjtBQTVCYSxLQWdDeUU7O0FBQUEsU0FBN0NOLGNBQTZDLEdBQTdDQSxjQUE2QztBQUFBLFNBQWhCQyxTQUFnQixHQUFoQkEsU0FBZ0I7QUFHNUYsU0FBS00sU0FBTCxHQUFpQixDQUFqQjs7QUFFQSxRQUFJLEtBQUsxTSxLQUFMLENBQVcySSxNQUFYLEtBQXNCLEtBQUssQ0FBL0IsRUFBa0M7QUFDaEMsV0FBSzNJLEtBQUwsQ0FBVzJJLE1BQVgsR0FBb0IsS0FBSzNJLEtBQUwsQ0FBVzBILE9BQS9CO0FBQ0EsV0FBSzFILEtBQUwsQ0FBVzBILE9BQVgsR0FBcUIsS0FBSzFILEtBQUwsQ0FBVzJNLE1BQWhDO0FBQ0EsYUFBTyxLQUFLM00sS0FBTCxDQUFXMEgsT0FBbEI7QUFDQSxhQUFPLEtBQUsxSCxLQUFMLENBQVcyTSxNQUFsQjtBQUNEOztBQUVEaEIsSUFBQUEsZ0RBQVEsQ0FBQyxLQUFLM0wsS0FBTixFQUFhLEtBQUs0TSxhQUFsQixDQUFSO0FBRUEsU0FBS0Msb0JBQUwsR0FBNEJDLE9BQU8sQ0FBQyxLQUFLOU0sS0FBTCxDQUFXMkksTUFBWCxDQUFrQnVCLElBQWxCLENBQXdCbEIsS0FBRCxJQUFnQkEsS0FBSyxDQUFDWCxTQUFOLEtBQW9CLEtBQTNELENBQUQsQ0FBbkM7QUFDQSxTQUFLMEUsYUFBTCxHQUFxQkQsT0FBTyxDQUFDLEtBQUs5TSxLQUFMLENBQVcySSxNQUFYLENBQWtCdUIsSUFBbEIsQ0FBd0JsQixLQUFELElBQWdCQSxLQUFLLENBQUNnRSxJQUE3QyxDQUFELENBQTVCO0FBRUEsU0FBSzlNLE1BQUwsQ0FBWUMsRUFBWixDQUFlbkMsbUVBQWYsRUFBeUMsS0FBS2lQLGNBQUwsQ0FBb0IzTSxJQUFwQixDQUF5QixJQUF6QixDQUF6QztBQUNBLFNBQUtKLE1BQUwsQ0FBWUMsRUFBWixDQUFlbkMsdUVBQWYsRUFBNkMsS0FBS2lQLGNBQUwsQ0FBb0IzTSxJQUFwQixDQUF5QixJQUF6QixDQUE3QztBQUNBLFNBQUtKLE1BQUwsQ0FBWUMsRUFBWixDQUFlbkMsMEVBQWYsRUFBZ0QsS0FBS2tQLGNBQUwsQ0FBb0I1TSxJQUFwQixDQUF5QixJQUF6QixDQUFoRDtBQUNEOztBQUVENE0sRUFBQUEsY0FBYyxHQUFHO0FBQ2YsU0FBSzdILFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkJvRyxxREFBN0IsRUFBK0MsQ0FBL0M7QUFDQSxTQUFLcEcsWUFBTCxDQUFrQixlQUFsQixFQUFtQ3lFLDZEQUFuQyxFQUFxRCxDQUFyRDtBQUNEOztBQUVEcUQsRUFBQUEsY0FBYyxDQUFDN0ksSUFBRCxFQUFlO0FBQzNCLFNBQUs4SSxrQkFBTCxDQUF3QnRKLDhEQUFBLENBQWNRLElBQWQsQ0FBeEI7QUFDRDs7QUFFRHpDLEVBQUFBLFlBQVksQ0FBQzVCLFVBQUQsRUFBa0I7QUFDNUIsU0FBS3lNLFNBQUwsR0FBaUIsQ0FBakI7O0FBRUEsUUFBSSxLQUFLMU0sS0FBTCxDQUFXMkssU0FBWCxLQUF5QixhQUE3QixFQUE0QztBQUMxQyxhQUFPLEtBQUt3QixjQUFMLENBQ0prQixjQURJLENBQ1c7QUFDZHZLLFFBQUFBLFNBQVMsRUFBRSxLQUFLQSxTQURGO0FBRWQ5QyxRQUFBQSxLQUFLLEVBQUUsS0FBS0EsS0FGRTtBQUdkYixRQUFBQSxLQUFLLEVBQUUsS0FBS0E7QUFIRSxPQURYLEVBTUp5QyxJQU5JLENBTUUwTCxJQUFELElBQWU7QUFDbkIsYUFBSzNPLE9BQUwsR0FBZSxLQUFmO0FBQ0EsYUFBS2tNLE9BQUwsR0FBZXlDLElBQWY7QUFDQSxhQUFLWixTQUFMLEdBQWlCLENBQWpCO0FBQ0EsYUFBS3hHLE1BQUw7QUFDQSxlQUFPO0FBQUV6SCxVQUFBQSxJQUFJLEVBQUUsS0FBS29NO0FBQWIsU0FBUCxDQUxtQixDQUtZO0FBQ2hDLE9BWkksQ0FBUDtBQWFEOztBQUVELFdBQU8sTUFBTWhKLFlBQU4sQ0FBbUI1QixVQUFuQixDQUFQO0FBQ0Q7O0FBRURnTixFQUFBQSxjQUFjLENBQUNNLFFBQUQsRUFBZ0I7QUFDNUIsU0FBSzFDLE9BQUwsR0FBZTBDLFFBQWY7QUFDQSxTQUFLYixTQUFMLEdBQWlCLENBQWpCLENBRjRCLENBSTVCOztBQUNBLFFBQUksS0FBSzdCLE9BQUwsSUFBZ0IsS0FBS0EsT0FBTCxDQUFhNU4sTUFBakMsRUFBeUM7QUFDdkMsVUFBSTJPLDBEQUFXLENBQUMsS0FBS2YsT0FBTCxDQUFhLENBQWIsQ0FBRCxDQUFmLEVBQWtDO0FBQ2hDLGFBQUs3SyxLQUFMLENBQVcySyxTQUFYLEdBQXVCLE9BQXZCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSSxLQUFLRSxPQUFMLENBQWEsQ0FBYixFQUFnQnZHLElBQWhCLEtBQXlCLE1BQTdCLEVBQXFDO0FBQ25DLGVBQUt0RSxLQUFMLENBQVcySyxTQUFYLEdBQXVCLE1BQXZCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBSSxLQUFLM0ssS0FBTCxDQUFXMkssU0FBWCxLQUF5QixPQUF6QixJQUFvQyxLQUFLM0ssS0FBTCxDQUFXMkssU0FBWCxLQUF5QixNQUFqRSxFQUF5RTtBQUN2RSxpQkFBSzNLLEtBQUwsQ0FBVzJLLFNBQVgsR0FBdUIsb0JBQXZCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQsU0FBS3pFLE1BQUw7QUFDRDs7QUFFREEsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsU0FBS3VCLEtBQUwsR0FBYXdFLG9FQUFvQixDQUFDLEtBQUtwQixPQUFOLEVBQWUsS0FBSzdLLEtBQXBCLENBQWpDO0FBQ0EsU0FBS3lILEtBQUwsQ0FBVytFLElBQVgsQ0FBZ0IsS0FBS3hNLEtBQUwsQ0FBV3dNLElBQTNCO0FBRUEsU0FBS2dCLFFBQUwsR0FBZ0IsSUFBSXhCLG9EQUFKLENBQ2QsS0FBS2hNLEtBRFMsRUFFZCxLQUFLeUgsS0FGUyxFQUdkLEtBQUszRSxTQUFMLENBQWVFLFdBQWYsRUFIYyxFQUlkLEtBQUtvSixTQUpTLEVBS2QsS0FBS3JNLFdBTFMsRUFNZCtELDZEQU5jLENBQWhCO0FBU0EsV0FBTyxNQUFNb0MsTUFBTixDQUFhLEtBQUt1QixLQUFsQixDQUFQO0FBQ0Q7O0FBRURpRyxFQUFBQSxnQkFBZ0IsQ0FBQy9GLEdBQUQsRUFBV2dHLFFBQVgsRUFBMEI7QUFDeEM7QUFDQSxRQUFJLEtBQUtsRyxLQUFMLENBQVdDLE9BQVgsQ0FBbUIsS0FBSzFILEtBQUwsQ0FBV3dNLElBQVgsQ0FBZ0I3RSxHQUFuQyxDQUFKLEVBQTZDO0FBQzNDLFdBQUtGLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQixLQUFLMUgsS0FBTCxDQUFXd00sSUFBWCxDQUFnQjdFLEdBQW5DLEVBQXdDNkUsSUFBeEMsR0FBK0MsS0FBL0M7QUFDRDs7QUFFRCxRQUFJLEtBQUt4TSxLQUFMLENBQVd3TSxJQUFYLENBQWdCN0UsR0FBaEIsS0FBd0JnRyxRQUE1QixFQUFzQztBQUNwQyxVQUFJLEtBQUszTixLQUFMLENBQVd3TSxJQUFYLENBQWdCQyxJQUFwQixFQUEwQjtBQUN4QixhQUFLek0sS0FBTCxDQUFXd00sSUFBWCxDQUFnQkMsSUFBaEIsR0FBdUIsS0FBdkI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLek0sS0FBTCxDQUFXd00sSUFBWCxDQUFnQjdFLEdBQWhCLEdBQXNCLElBQXRCO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTCxXQUFLM0gsS0FBTCxDQUFXd00sSUFBWCxDQUFnQjdFLEdBQWhCLEdBQXNCZ0csUUFBdEI7QUFDQSxXQUFLM04sS0FBTCxDQUFXd00sSUFBWCxDQUFnQkMsSUFBaEIsR0FBdUIsSUFBdkI7QUFDRDs7QUFDRCxTQUFLdkcsTUFBTDtBQUNEOztBQUVEOEcsRUFBQUEsSUFBSSxDQUFDaEQsS0FBRCxFQUFhNEQsSUFBYixFQUEyQkMsS0FBM0IsRUFBdUN2SCxJQUF2QyxFQUE2RDtBQUMvRCxRQUFJN0gsSUFBSjtBQUNBLFVBQU11QixLQUFLLEdBQUdzRyxJQUFJLENBQUN0RyxLQUFuQjtBQUNBLFFBQUk4TixTQUFTLEdBQUcsQ0FBaEI7O0FBRUEsYUFBU0MsY0FBVCxHQUEwQjtBQUN4QixVQUFJQyxXQUFXLEdBQUcxSCxJQUFJLENBQUMySCxNQUF2Qjs7QUFFQSxVQUFJSCxTQUFTLEdBQUcsQ0FBaEIsRUFBbUI7QUFDakJFLFFBQUFBLFdBQVcsSUFBSSxFQUFmO0FBQ0Q7O0FBRUQsYUFBT0EsV0FBVyxHQUFHLEVBQWQsR0FBbUIsSUFBMUI7QUFDRDs7QUFFRCxhQUFTRSxlQUFULENBQXlCQyxTQUF6QixFQUE0QztBQUMxQzdILE1BQUFBLElBQUksQ0FBQ2tILFFBQUwsQ0FBY1ksUUFBZCxDQUF1QjNQLElBQXZCO0FBQ0EwUCxNQUFBQSxTQUFTLENBQUNFLEtBQVY7QUFDQUYsTUFBQUEsU0FBUyxDQUFDN0MsSUFBVixDQUFlaEYsSUFBSSxDQUFDa0gsUUFBTCxDQUFjdEgsTUFBZCxDQUFxQkksSUFBSSxDQUFDb0csU0FBMUIsQ0FBZjtBQUNEOztBQUVELGFBQVM0QixVQUFULENBQW9CQyxDQUFwQixFQUE0QjtBQUMxQixZQUFNQyxFQUFFLEdBQUc5Qyw2Q0FBQyxDQUFDNkMsQ0FBQyxDQUFDRSxhQUFILENBQVo7QUFDQW5JLE1BQUFBLElBQUksQ0FBQ29HLFNBQUwsR0FBaUJ4UCxRQUFRLENBQUNzUixFQUFFLENBQUN4SCxJQUFILEVBQUQsRUFBWSxFQUFaLENBQVIsR0FBMEIsQ0FBM0M7QUFDQTBILE1BQUFBLFdBQVc7QUFDWjs7QUFFRCxhQUFTQyx3QkFBVCxDQUFrQ0MsVUFBbEMsRUFBc0Q7QUFDcERBLE1BQUFBLFVBQVUsQ0FBQ1AsS0FBWDtBQUVBLFlBQU1oQyxRQUFRLEdBQUdyTSxLQUFLLENBQUNxTSxRQUFOLElBQWtCLEdBQW5DO0FBQ0F5QixNQUFBQSxTQUFTLEdBQUdlLElBQUksQ0FBQ0MsSUFBTCxDQUFVclEsSUFBSSxDQUFDc1EsSUFBTCxDQUFVOVIsTUFBVixHQUFtQm9QLFFBQTdCLENBQVo7O0FBQ0EsVUFBSXlCLFNBQVMsS0FBSyxDQUFsQixFQUFxQjtBQUNuQjtBQUNEOztBQUVELFlBQU1rQixTQUFTLEdBQUdILElBQUksQ0FBQ0ksR0FBTCxDQUFTM0ksSUFBSSxDQUFDb0csU0FBTCxHQUFpQixDQUExQixFQUE2QixDQUE3QixDQUFsQjtBQUNBLFlBQU13QyxPQUFPLEdBQUdMLElBQUksQ0FBQ00sR0FBTCxDQUFTckIsU0FBVCxFQUFvQmtCLFNBQVMsR0FBRyxDQUFoQyxDQUFoQjtBQUVBLFlBQU1JLGNBQWMsR0FBRzFELDZDQUFDLENBQUMsV0FBRCxDQUF4Qjs7QUFFQSxXQUFLLElBQUkyRCxDQUFDLEdBQUdMLFNBQWIsRUFBd0JLLENBQUMsR0FBR0gsT0FBNUIsRUFBcUNHLENBQUMsRUFBdEMsRUFBMEM7QUFDeEMsY0FBTUMsV0FBVyxHQUFHRCxDQUFDLEtBQUsvSSxJQUFJLENBQUNvRyxTQUFYLEdBQXVCLFFBQXZCLEdBQWtDLEVBQXREO0FBQ0EsY0FBTTZDLFlBQVksR0FBRzdELDZDQUFDLENBQ3BCLGlEQUFpRDRELFdBQWpELEdBQStELElBQS9ELElBQXVFRCxDQUFDLEdBQUcsQ0FBM0UsSUFBZ0YsV0FENUQsQ0FBdEI7QUFHQUQsUUFBQUEsY0FBYyxDQUFDSSxNQUFmLENBQXNCRCxZQUF0QjtBQUNEOztBQUVEWCxNQUFBQSxVQUFVLENBQUNZLE1BQVgsQ0FBa0JKLGNBQWxCO0FBQ0Q7O0FBRUQsYUFBU1YsV0FBVCxHQUF1QjtBQUNyQixZQUFNZSxTQUFTLEdBQUc3QixJQUFJLENBQUM4QixPQUFMLENBQWEsZ0JBQWIsQ0FBbEI7QUFDQSxZQUFNQyxRQUFRLEdBQUcvQixJQUFJLENBQUMxRCxJQUFMLENBQVUscUJBQVYsQ0FBakI7QUFDQSxZQUFNaUUsU0FBUyxHQUFHUCxJQUFJLENBQUMxRCxJQUFMLENBQVUsT0FBVixDQUFsQjtBQUNBLFlBQU0wRSxVQUFVLEdBQUdoQixJQUFJLENBQUMxRCxJQUFMLENBQVUscUJBQVYsQ0FBbkI7QUFFQTBELE1BQUFBLElBQUksQ0FBQ2dDLEdBQUwsQ0FBUztBQUFFLHFCQUFhNVAsS0FBSyxDQUFDdU07QUFBckIsT0FBVDtBQUNBa0QsTUFBQUEsU0FBUyxDQUFDSSxRQUFWLENBQW1CLHFCQUFuQjtBQUVBM0IsTUFBQUEsZUFBZSxDQUFDQyxTQUFELENBQWY7QUFDQVEsTUFBQUEsd0JBQXdCLENBQUNDLFVBQUQsQ0FBeEI7QUFFQWUsTUFBQUEsUUFBUSxDQUFDQyxHQUFULENBQWE7QUFBRSxzQkFBYzdCLGNBQWM7QUFBOUIsT0FBYjtBQUNELEtBakU4RCxDQW1FL0Q7OztBQUNBSCxJQUFBQSxJQUFJLENBQUNrQyxPQUFMLENBQWE7QUFDWEMsTUFBQUEsUUFBUSxFQUFFO0FBREMsS0FBYjs7QUFJQSxhQUFTQyxnQkFBVCxDQUEwQnpCLENBQTFCLEVBQWtDO0FBQ2hDLFlBQU0wQixVQUFVLEdBQUd2RSw2Q0FBQyxDQUFDNkMsQ0FBQyxDQUFDRSxhQUFILENBQUQsQ0FBbUJoUSxJQUFuQixFQUFuQjtBQUNBLFlBQU15UixPQUFPLEdBQUc7QUFDZGpRLFFBQUFBLFVBQVUsRUFBRUQsS0FBSyxDQUFDQyxVQURKO0FBRWQxQyxRQUFBQSxHQUFHLEVBQUVrQixJQUFJLENBQUNpSixPQUFMLENBQWF1SSxVQUFVLENBQUNuSSxNQUF4QixFQUFnQ2QsSUFGdkI7QUFHZEMsUUFBQUEsS0FBSyxFQUFFeEksSUFBSSxDQUFDc1EsSUFBTCxDQUFVa0IsVUFBVSxDQUFDRSxHQUFyQixFQUEwQkYsVUFBVSxDQUFDbkksTUFBckMsQ0FITztBQUlkc0ksUUFBQUEsUUFBUSxFQUFFSCxVQUFVLENBQUNHO0FBSlAsT0FBaEI7QUFPQXJFLE1BQUFBLHlEQUFRLENBQUNELDBGQUFvQixDQUFDb0UsT0FBRCxDQUFyQixDQUFSO0FBQ0Q7O0FBRUR0QyxJQUFBQSxJQUFJLENBQUN6TixFQUFMLENBQVEsT0FBUixFQUFpQix3QkFBakIsRUFBMkNtTyxVQUEzQztBQUNBVixJQUFBQSxJQUFJLENBQUN6TixFQUFMLENBQVEsT0FBUixFQUFpQiwwQkFBakIsRUFBNkM2UCxnQkFBN0M7QUFFQSxVQUFNSyxhQUFhLEdBQUdyRyxLQUFLLENBQUN2RixHQUFOLENBQVUsVUFBVixFQUFzQixNQUFNO0FBQ2hEbUosTUFBQUEsSUFBSSxDQUFDMEMsR0FBTCxDQUFTLE9BQVQsRUFBa0Isd0JBQWxCO0FBQ0ExQyxNQUFBQSxJQUFJLENBQUMwQyxHQUFMLENBQVMsT0FBVCxFQUFrQiwwQkFBbEI7QUFDQUQsTUFBQUEsYUFBYTtBQUNkLEtBSnFCLENBQXRCO0FBTUEvSixJQUFBQSxJQUFJLENBQUNwRyxNQUFMLENBQVlDLEVBQVosQ0FBZW5DLDZEQUFmLEVBQW9DdVMsVUFBRCxJQUFxQjtBQUN0RDlSLE1BQUFBLElBQUksR0FBRzhSLFVBQVUsSUFBSTlSLElBQXJCOztBQUNBLFVBQUlBLElBQUosRUFBVTtBQUNSaVEsUUFBQUEsV0FBVztBQUNaOztBQUNEcEksTUFBQUEsSUFBSSxDQUFDekIsa0JBQUw7QUFDRCxLQU5EO0FBT0Q7O0FBNVBrRDs7O2dCQUF4Q3FILCtCQUNVOztBQThQaEIsTUFBTWxJLE1BQU0sR0FBRyxJQUFJNkgsc0RBQUosQ0FBZ0IsSUFBaEIsQ0FBZjtBQUNQN0gsTUFBTSxDQUFDd00sZ0JBQVAsR0FBMEJ0RSxjQUExQjtBQUNBbEksTUFBTSxDQUFDeU0sWUFBUDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaFJBO0FBRUE7QUFlQTtBQUVBO0FBR08sTUFBTXpFLGFBQU4sQ0FBb0I7QUFJekJsUixFQUFBQSxXQUFXLENBQ0RrRixLQURDLEVBRUR5SCxLQUZDLEVBR0Q4SixRQUhDLEVBSURDLFFBSkMsRUFLRHpSLFdBQXdCLEdBQUd1UixnRUFBYyxFQUx4QyxFQU1EN0QsS0FOQyxFQU9UO0FBQUEsU0FOUXpOLEtBTVIsR0FOUUEsS0FNUjtBQUFBLFNBTFF5SCxLQUtSLEdBTFFBLEtBS1I7QUFBQSxTQUpROEosUUFJUixHQUpRQSxRQUlSO0FBQUEsU0FIUUMsUUFHUixHQUhRQSxRQUdSO0FBQUEsU0FGUXpSLFdBRVIsR0FGUUEsV0FFUjtBQUFBLFNBRFEwTixLQUNSLEdBRFFBLEtBQ1I7O0FBQUEsd0NBVmtCLEVBVWxCOztBQUFBOztBQUFBLFNBTlF6TixLQU1SLEdBTlFBLEtBTVI7QUFBQSxTQUxReUgsS0FLUixHQUxRQSxLQUtSO0FBQUEsU0FKUThKLFFBSVIsR0FKUUEsUUFJUjtBQUFBLFNBSFFDLFFBR1IsR0FIUUEsUUFHUjtBQUFBLFNBRlF6UixXQUVSLEdBRlFBLFdBRVI7QUFBQSxTQURRME4sS0FDUixHQURRQSxLQUNSO0FBQ0EsU0FBS2dFLFdBQUw7QUFDRDs7QUFFRHJELEVBQUFBLFFBQVEsQ0FBQzNHLEtBQUQsRUFBMEI7QUFDaEMsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBRUEsU0FBS2dLLFdBQUw7QUFDRDs7QUFFREEsRUFBQUEsV0FBVyxHQUFHO0FBQ1osU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7O0FBRUEsU0FBSyxJQUFJaEUsUUFBUSxHQUFHLENBQXBCLEVBQXVCQSxRQUFRLEdBQUcsS0FBS2xHLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQnpLLE1BQXJELEVBQTZEMFEsUUFBUSxFQUFyRSxFQUF5RTtBQUN2RSxZQUFNN0YsTUFBTSxHQUFHLEtBQUtMLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQmlHLFFBQW5CLENBQWY7QUFDQTdGLE1BQUFBLE1BQU0sQ0FBQ3hDLEtBQVAsR0FBZXdDLE1BQU0sQ0FBQ2QsSUFBdEI7O0FBRUEsV0FBSyxJQUFJcUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLclAsS0FBTCxDQUFXMkksTUFBWCxDQUFrQjFMLE1BQXRDLEVBQThDb1MsQ0FBQyxFQUEvQyxFQUFtRDtBQUNqRCxjQUFNckcsS0FBSyxHQUFHLEtBQUtoSixLQUFMLENBQVcySSxNQUFYLENBQWtCMEcsQ0FBbEIsQ0FBZDtBQUVBLGNBQU11QyxjQUFjLEdBQUdiLGtFQUFtQixDQUFDL0gsS0FBSyxDQUFDVixPQUFQLENBQW5CLEdBQ25CVSxLQUFLLENBQUNWLE9BRGEsR0FFbkJzSSxtRUFBb0IsQ0FBQ00sc0VBQXVCLENBQUNsSSxLQUFLLENBQUNWLE9BQVAsQ0FBeEIsQ0FGeEI7QUFHQSxjQUFNdUosS0FBSyxHQUFHYiw4REFBZSxDQUFDWSxjQUFELENBQTdCOztBQUNBLFlBQUk5SixNQUFNLENBQUNkLElBQVAsQ0FBWThLLEtBQVosQ0FBa0JELEtBQWxCLENBQUosRUFBOEI7QUFDNUIvSixVQUFBQSxNQUFNLENBQUNrQixLQUFQLEdBQWVBLEtBQWY7O0FBRUEsY0FBSUEsS0FBSyxDQUFDZCxLQUFWLEVBQWlCO0FBQ2ZKLFlBQUFBLE1BQU0sQ0FBQ3hDLEtBQVAsR0FBZTJMLDhEQUFBLENBQW9CbkosTUFBTSxDQUFDZCxJQUFQLENBQVkxTCxPQUFaLENBQW9CdVcsS0FBcEIsRUFBMkI3SSxLQUFLLENBQUNkLEtBQWpDLENBQXBCLENBQWY7QUFDRDs7QUFFRDtBQUNEO0FBQ0Y7O0FBRUQsV0FBS3dKLFVBQUwsQ0FBZ0IvRCxRQUFoQixJQUE0QixLQUFLcUUscUJBQUwsQ0FBMkJsSyxNQUEzQixDQUE1QjtBQUNEO0FBQ0Y7O0FBRURtSyxFQUFBQSxnQkFBZ0IsQ0FBQ2hMLEtBQUQsRUFBZ0IrQixLQUFoQixFQUFvQztBQUNsRCxRQUFJLENBQUNBLEtBQUssQ0FBQ1IsVUFBUCxJQUFxQixDQUFDUSxLQUFLLENBQUNaLE1BQWhDLEVBQXdDO0FBQ3RDLGFBQU8sSUFBUDtBQUNEOztBQUNELFNBQUssSUFBSWlILENBQUMsR0FBR3JHLEtBQUssQ0FBQ1IsVUFBTixDQUFpQnZMLE1BQTlCLEVBQXNDb1MsQ0FBQyxHQUFHLENBQTFDLEVBQTZDQSxDQUFDLEVBQTlDLEVBQWtEO0FBQ2hELFVBQUlwSSxLQUFLLElBQUkrQixLQUFLLENBQUNSLFVBQU4sQ0FBaUI2RyxDQUFDLEdBQUcsQ0FBckIsQ0FBYixFQUFzQztBQUNwQyxlQUFPZ0MsK0RBQWdCLENBQUNySSxLQUFLLENBQUNaLE1BQU4sQ0FBYWlILENBQWIsQ0FBRCxFQUFrQixLQUFLNUIsS0FBdkIsQ0FBdkI7QUFDRDtBQUNGOztBQUNELFdBQU80RCwrREFBZ0IsQ0FBQ1gsNkNBQUssQ0FBQzFILEtBQUssQ0FBQ1osTUFBUCxDQUFOLEVBQXNCLEtBQUtxRixLQUEzQixDQUF2QjtBQUNEOztBQUVEeUUsRUFBQUEsb0JBQW9CLENBQUN6UyxDQUFELEVBQVN1SixLQUFULEVBQTZCO0FBQy9DLFFBQUl2SixDQUFDLEtBQUssSUFBTixJQUFjQSxDQUFDLEtBQUssS0FBSyxDQUF6QixJQUE4QkEsQ0FBQyxLQUFLN0MsU0FBeEMsRUFBbUQ7QUFDakQsYUFBTyxFQUFQO0FBQ0Q7O0FBRUQsUUFBSWtCLCtDQUFPLENBQUMyQixDQUFELENBQVgsRUFBZ0I7QUFDZEEsTUFBQUEsQ0FBQyxHQUFHQSxDQUFDLENBQUMwUyxJQUFGLENBQU8sSUFBUCxDQUFKO0FBQ0Q7O0FBRUQsUUFBSW5KLEtBQUssSUFBSUEsS0FBSyxDQUFDd0ksUUFBbkIsRUFBNkI7QUFDM0IsYUFBTyxLQUFLQSxRQUFMLENBQWMvUixDQUFkLENBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPa1IsOENBQU0sQ0FBQ2xSLENBQUQsQ0FBYjtBQUNEO0FBQ0Y7O0FBRUR1UyxFQUFBQSxxQkFBcUIsQ0FBQ2xLLE1BQUQsRUFBdUI7QUFDMUMsUUFBSSxDQUFDQSxNQUFNLENBQUNrQixLQUFaLEVBQW1CO0FBQ2pCLGFBQU8sS0FBS2tKLG9CQUFaO0FBQ0Q7O0FBRUQsUUFBSXBLLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYTFFLElBQWIsS0FBc0IsUUFBMUIsRUFBb0M7QUFDbEMsYUFBUTdFLENBQUQsSUFBdUI3QyxTQUE5QjtBQUNEOztBQUVELFFBQUlrTCxNQUFNLENBQUNrQixLQUFQLENBQWExRSxJQUFiLEtBQXNCLE1BQTFCLEVBQWtDO0FBQ2hDLGFBQVE3RSxDQUFELElBQVk7QUFDakIsWUFBSUEsQ0FBQyxLQUFLN0MsU0FBTixJQUFtQjZDLENBQUMsS0FBSyxJQUE3QixFQUFtQztBQUNqQyxpQkFBTyxHQUFQO0FBQ0Q7O0FBRUQsWUFBSTNCLCtDQUFPLENBQUMyQixDQUFELENBQVgsRUFBZ0I7QUFDZEEsVUFBQUEsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBRCxDQUFMO0FBQ0QsU0FQZ0IsQ0FTakI7OztBQUNBLFlBQUltRSxnREFBUSxDQUFDbkUsQ0FBRCxDQUFSLElBQWUsQ0FBQzJTLEtBQUssQ0FBQzNTLENBQUQsQ0FBckIsSUFBbUNBLENBQUMsQ0FBQ3hDLE1BQUYsR0FBVyxFQUFsRCxFQUFzRDtBQUNwRHdDLFVBQUFBLENBQUMsR0FBR3ZDLFFBQVEsQ0FBQ3VDLENBQUQsRUFBSSxFQUFKLENBQVo7QUFDRDs7QUFFRCxZQUFJLENBQUNxSSxNQUFNLENBQUNrQixLQUFQLENBQWFULFVBQWxCLEVBQThCO0FBQzVCLGlCQUFPNEksZ0VBQWlCLENBQUMxUixDQUFELEVBQUk7QUFDMUI4UixZQUFBQSxRQUFRLEVBQUUsS0FBS0E7QUFEVyxXQUFKLENBQXhCO0FBR0Q7O0FBRUQsZUFBT0gsNkRBQWMsQ0FBQzNSLENBQUQsRUFBSTtBQUN2QjRTLFVBQUFBLE1BQU0sRUFBRXZLLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYVQsVUFERTtBQUV2QmdKLFVBQUFBLFFBQVEsRUFBRSxLQUFLQTtBQUZRLFNBQUosQ0FBckI7QUFJRCxPQXhCRDtBQXlCRDs7QUFFRCxRQUFJekosTUFBTSxDQUFDa0IsS0FBUCxDQUFhMUUsSUFBYixLQUFzQixRQUExQixFQUFvQztBQUNsQyxhQUFRN0UsQ0FBRCxJQUFpQjtBQUN0QixZQUFJM0IsK0NBQU8sQ0FBQzJCLENBQUQsQ0FBWCxFQUFnQjtBQUNkQSxVQUFBQSxDQUFDLEdBQUdBLENBQUMsQ0FBQzBTLElBQUYsQ0FBTyxJQUFQLENBQUo7QUFDRDs7QUFFRCxjQUFNMUosV0FBVyxHQUFHWCxNQUFNLENBQUNrQixLQUFQLENBQWFQLFdBQWIsSUFBNEIsQ0FBaEQ7O0FBRUEsWUFBSUEsV0FBVyxLQUFLLENBQWhCLElBQXFCWCxNQUFNLENBQUNrQixLQUFQLENBQWFPLFNBQXRDLEVBQWlEO0FBQy9DLGVBQUssSUFBSThGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd2SCxNQUFNLENBQUNrQixLQUFQLENBQWFPLFNBQWIsQ0FBdUJ0TSxNQUEzQyxFQUFtRG9TLENBQUMsRUFBcEQsRUFBd0Q7QUFDdEQsa0JBQU03UCxHQUFHLEdBQUdzSSxNQUFNLENBQUNrQixLQUFQLENBQWFPLFNBQWIsQ0FBdUI4RixDQUF2QixDQUFaOztBQUVBLGdCQUFJNVAsQ0FBQyxLQUFLLElBQVYsRUFBZ0I7QUFDZCxrQkFBSUQsR0FBRyxDQUFDeUgsS0FBSixLQUFjLE1BQWxCLEVBQTBCO0FBQ3hCLHVCQUFPekgsR0FBRyxDQUFDd0gsSUFBWDtBQUNEOztBQUNEO0FBQ0QsYUFScUQsQ0FVdEQ7OztBQUNBLGdCQUFLLENBQUNwRCxnREFBUSxDQUFDbkUsQ0FBRCxDQUFULElBQWdCNlMsTUFBTSxDQUFDOVMsR0FBRyxDQUFDeUgsS0FBTCxDQUFOLEtBQXNCcUwsTUFBTSxDQUFDN1MsQ0FBRCxDQUE3QyxJQUFxREQsR0FBRyxDQUFDeUgsS0FBSixLQUFjeEgsQ0FBdkUsRUFBMEU7QUFDeEUsbUJBQUs4UyxhQUFMLENBQW1COVMsQ0FBbkIsRUFBc0JxSSxNQUFNLENBQUNrQixLQUE3QjtBQUNBLHFCQUFPLEtBQUtrSixvQkFBTCxDQUEwQjFTLEdBQUcsQ0FBQ3dILElBQTlCLEVBQW9DYyxNQUFNLENBQUNrQixLQUEzQyxDQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFlBQUlQLFdBQVcsS0FBSyxDQUFoQixJQUFxQlgsTUFBTSxDQUFDa0IsS0FBUCxDQUFhVSxTQUF0QyxFQUFpRDtBQUMvQyxlQUFLLElBQUkyRixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdkgsTUFBTSxDQUFDa0IsS0FBUCxDQUFhVSxTQUFiLENBQXVCek0sTUFBM0MsRUFBbURvUyxDQUFDLEVBQXBELEVBQXdEO0FBQ3RELGtCQUFNN1AsR0FBRyxHQUFHc0ksTUFBTSxDQUFDa0IsS0FBUCxDQUFhVSxTQUFiLENBQXVCMkYsQ0FBdkIsQ0FBWjs7QUFFQSxnQkFBSTVQLENBQUMsS0FBSyxJQUFWLEVBQWdCO0FBQ2Qsa0JBQUlELEdBQUcsQ0FBQ21LLElBQUosS0FBYSxNQUFiLElBQXVCbkssR0FBRyxDQUFDb0ssRUFBSixLQUFXLE1BQXRDLEVBQThDO0FBQzVDLHVCQUFPcEssR0FBRyxDQUFDd0gsSUFBWDtBQUNEOztBQUNEO0FBQ0Q7O0FBRUQsZ0JBQUlzTCxNQUFNLENBQUM5UyxHQUFHLENBQUNtSyxJQUFMLENBQU4sSUFBb0IySSxNQUFNLENBQUM3UyxDQUFELENBQTFCLElBQWlDNlMsTUFBTSxDQUFDOVMsR0FBRyxDQUFDb0ssRUFBTCxDQUFOLElBQWtCMEksTUFBTSxDQUFDN1MsQ0FBRCxDQUE3RCxFQUFrRTtBQUNoRSxtQkFBSzhTLGFBQUwsQ0FBbUI5UyxDQUFuQixFQUFzQnFJLE1BQU0sQ0FBQ2tCLEtBQTdCO0FBQ0EscUJBQU8sS0FBS2tKLG9CQUFMLENBQTBCMVMsR0FBRyxDQUFDd0gsSUFBOUIsRUFBb0NjLE1BQU0sQ0FBQ2tCLEtBQTNDLENBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsWUFBSXZKLENBQUMsS0FBSyxJQUFOLElBQWNBLENBQUMsS0FBSyxLQUFLLENBQTdCLEVBQWdDO0FBQzlCLGlCQUFPLEdBQVA7QUFDRDs7QUFFRCxhQUFLOFMsYUFBTCxDQUFtQjlTLENBQW5CLEVBQXNCcUksTUFBTSxDQUFDa0IsS0FBN0I7QUFDQSxlQUFPLEtBQUtrSixvQkFBTCxDQUEwQnpTLENBQTFCLEVBQTZCcUksTUFBTSxDQUFDa0IsS0FBcEMsQ0FBUDtBQUNELE9BbEREO0FBbUREOztBQUVELFFBQUlsQixNQUFNLENBQUNrQixLQUFQLENBQWExRSxJQUFiLEtBQXNCLFFBQTFCLEVBQW9DO0FBQ2xDLFlBQU1rTyxjQUFjLEdBQUcxQiw2REFBYyxDQUFDaEosTUFBTSxDQUFDQyxJQUFQLElBQWVELE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYWpCLElBQTdCLENBQXJDO0FBRUEsYUFBUXRJLENBQUQsSUFBaUI7QUFDdEIsWUFBSUEsQ0FBQyxLQUFLLElBQU4sSUFBY0EsQ0FBQyxLQUFLLEtBQUssQ0FBN0IsRUFBZ0M7QUFDOUIsaUJBQU8sR0FBUDtBQUNEOztBQUVELFlBQUkyUyxLQUFLLENBQUMzUyxDQUFELENBQUwsSUFBWTNCLCtDQUFPLENBQUMyQixDQUFELENBQXZCLEVBQTRCO0FBQzFCLGlCQUFPLEtBQUt5UyxvQkFBTCxDQUEwQnpTLENBQTFCLEVBQTZCcUksTUFBTSxDQUFDa0IsS0FBcEMsQ0FBUDtBQUNEOztBQUVELGFBQUt1SixhQUFMLENBQW1COVMsQ0FBbkIsRUFBc0JxSSxNQUFNLENBQUNrQixLQUE3QjtBQUNBLGVBQU82SCxxRUFBc0IsQ0FBQzJCLGNBQWMsQ0FBQy9TLENBQUQsRUFBSXFJLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYWIsUUFBakIsRUFBMkIsSUFBM0IsQ0FBZixDQUE3QjtBQUNELE9BWEQ7QUFZRDs7QUFFRCxXQUFRbEIsS0FBRCxJQUFnQjtBQUNyQixhQUFPLEtBQUtpTCxvQkFBTCxDQUEwQmpMLEtBQTFCLEVBQWlDYSxNQUFNLENBQUNrQixLQUF4QyxDQUFQO0FBQ0QsS0FGRDtBQUdEOztBQUVEdUosRUFBQUEsYUFBYSxDQUFDdEwsS0FBRCxFQUFhK0IsS0FBYixFQUFpQztBQUM1QyxRQUFJLENBQUNBLEtBQUssQ0FBQ1gsU0FBWCxFQUFzQjtBQUNwQjtBQUNEOztBQUVELFFBQUlwQixLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxLQUFLLEtBQUssQ0FBakMsSUFBc0NuSiwrQ0FBTyxDQUFDbUosS0FBRCxDQUFqRCxFQUEwRDtBQUN4RDtBQUNEOztBQUVELFVBQU13TCxZQUFZLEdBQUdILE1BQU0sQ0FBQ3JMLEtBQUQsQ0FBM0I7O0FBQ0EsUUFBSW1MLEtBQUssQ0FBQ0ssWUFBRCxDQUFULEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRUQsU0FBS2QsVUFBTCxDQUFnQjNJLEtBQUssQ0FBQ1gsU0FBdEIsSUFBbUMsS0FBSzRKLGdCQUFMLENBQXNCUSxZQUF0QixFQUFvQ3pKLEtBQXBDLENBQW5DO0FBQ0Q7O0FBRUQwSixFQUFBQSxrQkFBa0IsQ0FBQ0MsUUFBRCxFQUFtQjtBQUNuQyxVQUFNaFIsVUFBc0IsR0FBRyxFQUEvQjtBQUNBLFFBQUlpUixZQUFKO0FBQ0EsVUFBTXpDLEdBQUcsR0FBRyxLQUFLMUksS0FBTCxDQUFXc0gsSUFBWCxDQUFnQjRELFFBQWhCLENBQVo7O0FBQ0EsU0FBSyxJQUFJdEQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2MsR0FBRyxDQUFDbFQsTUFBeEIsRUFBZ0NvUyxDQUFDLEVBQWpDLEVBQXFDO0FBQ25DdUQsTUFBQUEsWUFBWSxHQUFJLFVBQVN2RCxDQUFFLEVBQTNCO0FBQ0ExTixNQUFBQSxVQUFVLENBQUNpUixZQUFELENBQVYsR0FBMkI7QUFBRTNMLFFBQUFBLEtBQUssRUFBRWtKLEdBQUcsQ0FBQ2QsQ0FBRCxDQUFaO0FBQWlCckksUUFBQUEsSUFBSSxFQUFFbUosR0FBRyxDQUFDZCxDQUFELENBQUgsR0FBU2MsR0FBRyxDQUFDZCxDQUFELENBQUgsQ0FBT3dELFFBQVAsRUFBVCxHQUE2QjtBQUFwRCxPQUEzQjtBQUNEOztBQUNELFdBQU9sUixVQUFQO0FBQ0Q7O0FBRURtUixFQUFBQSxpQkFBaUIsQ0FBQ25GLFFBQUQsRUFBbUIxRyxLQUFuQixFQUErQjtBQUM5QyxVQUFNOEwsR0FBRyxHQUFHLEtBQUtyQixVQUFMLENBQWdCL0QsUUFBaEIsQ0FBWjs7QUFDQSxRQUFJb0YsR0FBSixFQUFTO0FBQ1AsYUFBT0EsR0FBRyxDQUFDOUwsS0FBRCxDQUFWO0FBQ0Q7O0FBQ0QsV0FBT0EsS0FBUDtBQUNEOztBQUVEK0wsRUFBQUEsVUFBVSxDQUFDQyxXQUFELEVBQXNCTixRQUF0QixFQUF3QzFMLEtBQXhDLEVBQW9EaU0sWUFBWSxHQUFHLEtBQW5FLEVBQTBFO0FBQ2xGak0sSUFBQUEsS0FBSyxHQUFHLEtBQUs2TCxpQkFBTCxDQUF1QkcsV0FBdkIsRUFBb0NoTSxLQUFwQyxDQUFSO0FBRUEsVUFBTWEsTUFBTSxHQUFHLEtBQUtMLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQnVMLFdBQW5CLENBQWY7QUFDQSxVQUFNRSxVQUFVLEdBQUcsRUFBbkI7QUFDQSxRQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxVQUFNQyxXQUFXLEdBQUcsRUFBcEI7QUFDQSxRQUFJQyxTQUFTLEdBQUcsRUFBaEI7O0FBRUEsUUFBSSxLQUFLM0IsVUFBTCxDQUFnQjRCLElBQXBCLEVBQTBCO0FBQ3hCSixNQUFBQSxVQUFVLENBQUNuVyxJQUFYLENBQWdCLHNCQUFzQixLQUFLMlUsVUFBTCxDQUFnQjRCLElBQXREO0FBQ0FGLE1BQUFBLFdBQVcsQ0FBQ3JXLElBQVosQ0FBaUIsd0JBQWpCO0FBQ0EsV0FBSzJVLFVBQUwsQ0FBZ0I0QixJQUFoQixHQUF1QixJQUF2QjtBQUNELEtBSkQsTUFJTyxJQUFJLEtBQUs1QixVQUFMLENBQWdCMUssS0FBcEIsRUFBMkI7QUFDaENrTSxNQUFBQSxVQUFVLENBQUNuVyxJQUFYLENBQWdCLFdBQVcsS0FBSzJVLFVBQUwsQ0FBZ0IxSyxLQUEzQztBQUNBLFdBQUswSyxVQUFMLENBQWdCMUssS0FBaEIsR0FBd0IsSUFBeEI7QUFDRCxLQWhCaUYsQ0FpQmxGO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSXVNLFVBQVUsR0FBRyxFQUFqQjs7QUFDQSxRQUFJTixZQUFKLEVBQWtCO0FBQ2hCTSxNQUFBQSxVQUFVLEdBQUcseUNBQXlDLEtBQUsvTCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJ1TCxXQUFuQixFQUFnQzNOLEtBQXpFLEdBQWlGLFFBQTlGO0FBQ0Q7O0FBRUQsUUFBSTJCLEtBQUssS0FBS3JLLFNBQWQsRUFBeUI7QUFDdkJ1VyxNQUFBQSxVQUFVLENBQUNuVyxJQUFYLENBQWdCLGNBQWhCO0FBQ0E4SyxNQUFBQSxNQUFNLENBQUMyTCxNQUFQLEdBQWdCLElBQWhCO0FBQ0QsS0FIRCxNQUdPO0FBQ0wzTCxNQUFBQSxNQUFNLENBQUMyTCxNQUFQLEdBQWdCLEtBQWhCO0FBQ0Q7O0FBRUQsUUFBSTNMLE1BQU0sQ0FBQzJMLE1BQVAsS0FBa0IsSUFBdEIsRUFBNEI7QUFDMUIsYUFBTyxFQUFQO0FBQ0Q7O0FBRUQsUUFBSTNMLE1BQU0sQ0FBQ2tCLEtBQVAsSUFBZ0JsQixNQUFNLENBQUNrQixLQUFQLENBQWEwSyxjQUFqQyxFQUFpRDtBQUMvQ0wsTUFBQUEsV0FBVyxDQUFDclcsSUFBWixDQUFpQixzQkFBakI7QUFDRDs7QUFFRCxRQUFJOEssTUFBTSxDQUFDa0IsS0FBUCxJQUFnQmxCLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYU4sS0FBakMsRUFBd0M7QUFDdEMsWUFBTWlMLFNBQVMsR0FBR3pKLDRDQUFJLENBQUN2RCw2RUFBRCxFQUFtQyxDQUFDLE1BQUQsRUFBU21CLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYU4sS0FBdEIsQ0FBbkMsQ0FBdEI7O0FBQ0EsVUFBSWlMLFNBQVMsSUFBSUEsU0FBUyxDQUFDLE9BQUQsQ0FBMUIsRUFBcUM7QUFDbkNSLFFBQUFBLFVBQVUsQ0FBQ25XLElBQVgsQ0FBaUIsY0FBYTJXLFNBQVMsQ0FBQyxPQUFELENBQVUsRUFBakQ7QUFDRDtBQUNGOztBQUVELFFBQUlSLFVBQVUsQ0FBQ2xXLE1BQWYsRUFBdUI7QUFDckJtVyxNQUFBQSxTQUFTLEdBQUcsYUFBYUQsVUFBVSxDQUFDaEIsSUFBWCxDQUFnQixHQUFoQixDQUFiLEdBQW9DLEdBQWhEO0FBQ0Q7O0FBRUQsUUFBSXJLLE1BQU0sQ0FBQ2tCLEtBQVAsSUFBZ0JsQixNQUFNLENBQUNrQixLQUFQLENBQWFnRSxJQUFqQyxFQUF1QztBQUNyQztBQUNBLFlBQU1yTCxVQUFVLEdBQUcsS0FBSytRLGtCQUFMLENBQXdCQyxRQUF4QixDQUFuQjtBQUNBaFIsTUFBQUEsVUFBVSxDQUFDLFFBQUQsQ0FBVixHQUF1QjtBQUFFc0YsUUFBQUEsS0FBSyxFQUFFQSxLQUFUO0FBQWdCRCxRQUFBQSxJQUFJLEVBQUVDLEtBQUssR0FBR0EsS0FBSyxDQUFDNEwsUUFBTixFQUFILEdBQXNCO0FBQWpELE9BQXZCO0FBRUEsWUFBTWUsUUFBUSxHQUFHLEtBQUs3VCxXQUFMLENBQWlCekUsT0FBakIsQ0FBeUJ3TSxNQUFNLENBQUNrQixLQUFQLENBQWE2SyxPQUF0QyxFQUErQ2xTLFVBQS9DLEVBQTJEbVMsa0JBQTNELENBQWpCO0FBQ0EsWUFBTUMsaUJBQWlCLEdBQUc5QywrREFBQSxDQUFxQjJDLFFBQXJCLENBQTFCO0FBRUEsWUFBTUssZUFBZSxHQUFHaEQsOERBQUEsQ0FBb0IsS0FBS2xSLFdBQUwsQ0FBaUJ6RSxPQUFqQixDQUF5QndNLE1BQU0sQ0FBQ2tCLEtBQVAsQ0FBYWtMLFdBQXRDLEVBQW1EdlMsVUFBbkQsQ0FBcEIsQ0FBeEI7QUFDQSxZQUFNd1MsVUFBVSxHQUFHck0sTUFBTSxDQUFDa0IsS0FBUCxDQUFhb0wsZUFBYixHQUErQixRQUEvQixHQUEwQyxFQUE3RDtBQUVBZixNQUFBQSxXQUFXLENBQUNyVyxJQUFaLENBQWlCLHVCQUFqQjtBQUVBd1csTUFBQUEsVUFBVSxJQUFLLFlBQVdPLGlCQUFrQixhQUFZSSxVQUFXLDRDQUEyQ0YsZUFBZ0IsMkJBQTBCYixTQUFVLEdBQWxLO0FBQ0FJLE1BQUFBLFVBQVUsSUFBSyxHQUFFdk0sS0FBTSxFQUF2QjtBQUNBdU0sTUFBQUEsVUFBVSxJQUFLLE1BQWY7QUFDRCxLQWhCRCxNQWdCTztBQUNMQSxNQUFBQSxVQUFVLElBQUl2TSxLQUFkO0FBQ0Q7O0FBRUQsUUFBSWEsTUFBTSxDQUFDdU0sVUFBWCxFQUF1QjtBQUNyQmhCLE1BQUFBLFdBQVcsQ0FBQ3JXLElBQVosQ0FBaUIsNkJBQWpCO0FBQ0F3VyxNQUFBQSxVQUFVLElBQUs7QUFDckIsdUJBQXVCYixRQUFTLGtCQUFpQk0sV0FBWSx1QkFEdkQ7QUFFQU8sTUFBQUEsVUFBVSxJQUFLLG9DQUFmO0FBQ0FBLE1BQUFBLFVBQVUsSUFBSyxNQUFmO0FBQ0FBLE1BQUFBLFVBQVUsSUFBSztBQUNyQix1QkFBdUJiLFFBQVMsa0JBQWlCTSxXQUFZLHNCQUR2RDtBQUVBTyxNQUFBQSxVQUFVLElBQUssbUNBQWY7QUFDQUEsTUFBQUEsVUFBVSxJQUFLLE1BQWY7QUFDRDs7QUFFRCxRQUFJSCxXQUFXLENBQUNwVyxNQUFoQixFQUF3QjtBQUN0QnFXLE1BQUFBLFNBQVMsR0FBRyxhQUFhRCxXQUFXLENBQUNsQixJQUFaLENBQWlCLEdBQWpCLENBQWIsR0FBcUMsR0FBakQ7QUFDRDs7QUFFRHFCLElBQUFBLFVBQVUsR0FBRyxRQUFRRixTQUFSLEdBQW9CRixTQUFwQixHQUFnQyxHQUFoQyxHQUFzQ0ksVUFBdEMsR0FBbUQsT0FBaEU7QUFDQSxXQUFPQSxVQUFQO0FBQ0Q7O0FBRUR0TixFQUFBQSxNQUFNLENBQUNvTyxJQUFELEVBQWU7QUFDbkIsVUFBTWpJLFFBQVEsR0FBRyxLQUFLck0sS0FBTCxDQUFXcU0sUUFBWCxJQUF1QixHQUF4QztBQUNBLFVBQU1rSSxRQUFRLEdBQUdELElBQUksR0FBR2pJLFFBQXhCO0FBQ0EsVUFBTW1JLE1BQU0sR0FBRzNGLElBQUksQ0FBQ00sR0FBTCxDQUFTb0YsUUFBUSxHQUFHbEksUUFBcEIsRUFBOEIsS0FBSzVFLEtBQUwsQ0FBV3NILElBQVgsQ0FBZ0I5UixNQUE5QyxDQUFmO0FBQ0EsUUFBSXFPLElBQUksR0FBRyxFQUFYOztBQUVBLFNBQUssSUFBSW1KLENBQUMsR0FBR0YsUUFBYixFQUF1QkUsQ0FBQyxHQUFHRCxNQUEzQixFQUFtQ0MsQ0FBQyxFQUFwQyxFQUF3QztBQUN0QyxZQUFNdEUsR0FBRyxHQUFHLEtBQUsxSSxLQUFMLENBQVdzSCxJQUFYLENBQWdCMEYsQ0FBaEIsQ0FBWjtBQUNBLFVBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsVUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxZQUFNQyxVQUFVLEdBQUcsRUFBbkI7QUFDQSxVQUFJQyxRQUFRLEdBQUcsRUFBZjs7QUFDQSxXQUFLLElBQUl4RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUs1SCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJ6SyxNQUF2QyxFQUErQ29TLENBQUMsRUFBaEQsRUFBb0Q7QUFDbERxRixRQUFBQSxRQUFRLElBQUksS0FBSzFCLFVBQUwsQ0FBZ0IzRCxDQUFoQixFQUFtQm9GLENBQW5CLEVBQXNCdEUsR0FBRyxDQUFDZCxDQUFELENBQXpCLEVBQThCb0YsQ0FBQyxLQUFLRixRQUFwQyxDQUFaO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLNUMsVUFBTCxDQUFnQnhCLEdBQXBCLEVBQXlCO0FBQ3ZCd0UsUUFBQUEsUUFBUSxHQUFHLDhCQUE4QixLQUFLaEQsVUFBTCxDQUFnQnhCLEdBQTlDLEdBQW9ELEdBQS9EO0FBQ0F5RSxRQUFBQSxVQUFVLENBQUM1WCxJQUFYLENBQWdCLHVCQUFoQjtBQUNBLGFBQUsyVSxVQUFMLENBQWdCeEIsR0FBaEIsR0FBc0IsSUFBdEI7QUFDRDs7QUFFRCxVQUFJeUUsVUFBVSxDQUFDM1gsTUFBZixFQUF1QjtBQUNyQjRYLFFBQUFBLFFBQVEsR0FBRyxhQUFhRCxVQUFVLENBQUN6QyxJQUFYLENBQWdCLEdBQWhCLENBQWIsR0FBb0MsR0FBL0M7QUFDRDs7QUFFRDdHLE1BQUFBLElBQUksSUFBSSxTQUFTdUosUUFBVCxHQUFvQkYsUUFBcEIsR0FBK0IsR0FBL0IsR0FBcUNELFFBQXJDLEdBQWdELE9BQXhEO0FBQ0Q7O0FBRUQsV0FBT3BKLElBQVA7QUFDRDs7QUFFRHdKLEVBQUFBLGFBQWEsR0FBRztBQUNkLFVBQU0vRixJQUFJLEdBQUcsRUFBYjtBQUNBLFVBQU1nRyxjQUFjLEdBQUcsS0FBS3ROLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQnNOLE1BQW5CLENBQTJCbE4sTUFBRCxJQUFZLENBQUNBLE1BQU0sQ0FBQzJMLE1BQTlDLENBQXZCOztBQUVBLFNBQUssSUFBSWdCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2hOLEtBQUwsQ0FBV3NILElBQVgsQ0FBZ0I5UixNQUFwQyxFQUE0Q3dYLENBQUMsRUFBN0MsRUFBaUQ7QUFDL0MsWUFBTXRFLEdBQUcsR0FBRyxLQUFLMUksS0FBTCxDQUFXc0gsSUFBWCxDQUFnQjBGLENBQWhCLENBQVo7QUFDQSxZQUFNUSxNQUFNLEdBQUcsRUFBZjs7QUFDQSxXQUFLLElBQUk1RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUs1SCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJ6SyxNQUF2QyxFQUErQ29TLENBQUMsRUFBaEQsRUFBb0Q7QUFDbEQsWUFBSSxDQUFDLEtBQUs1SCxLQUFMLENBQVdDLE9BQVgsQ0FBbUIySCxDQUFuQixFQUFzQm9FLE1BQTNCLEVBQW1DO0FBQ2pDd0IsVUFBQUEsTUFBTSxDQUFDalksSUFBUCxDQUFZLEtBQUs4VixpQkFBTCxDQUF1QnpELENBQXZCLEVBQTBCYyxHQUFHLENBQUNkLENBQUQsQ0FBN0IsQ0FBWjtBQUNEO0FBQ0Y7O0FBQ0ROLE1BQUFBLElBQUksQ0FBQy9SLElBQUwsQ0FBVWlZLE1BQVY7QUFDRDs7QUFDRCxXQUFPO0FBQ0x2TixNQUFBQSxPQUFPLEVBQUVxTixjQURKO0FBRUxoRyxNQUFBQSxJQUFJLEVBQUVBO0FBRkQsS0FBUDtBQUlEOztBQWpYd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjNCO0FBR0E7QUFDQTtBQUNBO0FBSUEsTUFBTTVFLFlBQStDLEdBQUcsRUFBeEQ7QUFDTyxNQUFNcUwsd0JBQXdCLEdBQUkvVyxJQUFELElBQXNCO0FBQzVELE1BQUksQ0FBQ2dYLEtBQUssQ0FBQzNYLE9BQU4sQ0FBY1csSUFBZCxDQUFMLEVBQTBCO0FBQ3hCLFdBQU9BLElBQUksQ0FBQ2lYLFVBQUwsR0FBa0IsQ0FBQ2pYLElBQUQsQ0FBbEIsR0FBMkIsRUFBbEM7QUFDRDs7QUFFRCxTQUFPQSxJQUFJLENBQUNrWCxNQUFMLENBQVksQ0FBQ0MsR0FBRCxFQUFNdFcsTUFBTixLQUFpQjtBQUNsQyxRQUFJLENBQUNBLE1BQU0sQ0FBQ29XLFVBQVosRUFBd0I7QUFDdEIsYUFBT0UsR0FBUDtBQUNEOztBQUVELFdBQU9BLEdBQUcsQ0FBQ0MsTUFBSixDQUFXdlcsTUFBWCxDQUFQO0FBQ0QsR0FOTSxFQU1KLEVBTkksQ0FBUDtBQU9ELENBWk07QUFjQSxNQUFNd1csdUJBQXVCLEdBQUlyWCxJQUFELElBQXNCO0FBQzNELE1BQUksQ0FBQ2dYLEtBQUssQ0FBQzNYLE9BQU4sQ0FBY1csSUFBZCxDQUFMLEVBQTBCO0FBQ3hCLFdBQU9BLElBQUksQ0FBQ2lKLE9BQUwsR0FBZSxDQUFDakosSUFBRCxDQUFmLEdBQXdCLEVBQS9CO0FBQ0Q7O0FBRUQsU0FBT0EsSUFBSSxDQUFDa1gsTUFBTCxDQUFZLENBQUNDLEdBQUQsRUFBTXRXLE1BQU4sS0FBaUI7QUFDbEMsUUFBSSxDQUFDQSxNQUFNLENBQUNvSSxPQUFaLEVBQXFCO0FBQ25CLGFBQU9rTyxHQUFQO0FBQ0Q7O0FBRUQsV0FBT0EsR0FBRyxDQUFDQyxNQUFKLENBQVd2VyxNQUFYLENBQVA7QUFDRCxHQU5NLEVBTUosRUFOSSxDQUFQO0FBT0QsQ0FaTTtBQWNQNkssWUFBWSxDQUFDLG9CQUFELENBQVosR0FBcUM7QUFDbkM0TCxFQUFBQSxXQUFXLEVBQUUscUJBRHNCO0FBRW5DL0ssRUFBQUEsVUFBVSxFQUFFLE1BQU07QUFDaEIsV0FBTyxFQUFQO0FBQ0QsR0FKa0M7QUFLbkNMLEVBQUFBLFNBQVMsRUFBRSxDQUFDbE0sSUFBRCxFQUFPdUIsS0FBUCxFQUFjZ1csS0FBZCxLQUF3QjtBQUNqQ0EsSUFBQUEsS0FBSyxDQUFDdE8sT0FBTixHQUFnQixDQUFDO0FBQUVWLE1BQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCMUMsTUFBQUEsSUFBSSxFQUFFO0FBQXRCLEtBQUQsRUFBaUM7QUFBRTBDLE1BQUFBLElBQUksRUFBRTtBQUFSLEtBQWpDLEVBQXFEO0FBQUVBLE1BQUFBLElBQUksRUFBRTtBQUFSLEtBQXJELENBQWhCO0FBQ0EsVUFBTWlQLFlBQVksR0FBR1Qsd0JBQXdCLENBQUMvVyxJQUFELENBQTdDOztBQUVBLFNBQUssSUFBSTRRLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0RyxZQUFZLENBQUNoWixNQUFqQyxFQUF5Q29TLENBQUMsRUFBMUMsRUFBOEM7QUFDNUMsWUFBTS9QLE1BQU0sR0FBRzJXLFlBQVksQ0FBQzVHLENBQUQsQ0FBM0I7O0FBQ0EsV0FBSyxJQUFJb0YsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR25WLE1BQU0sQ0FBQ29XLFVBQVAsQ0FBa0J6WSxNQUF0QyxFQUE4Q3dYLENBQUMsRUFBL0MsRUFBbUQ7QUFDakQsY0FBTXlCLEVBQUUsR0FBRzVXLE1BQU0sQ0FBQ29XLFVBQVAsQ0FBa0JqQixDQUFsQixDQUFYO0FBQ0F1QixRQUFBQSxLQUFLLENBQUNqSCxJQUFOLENBQVcvUixJQUFYLENBQWdCLENBQUNrWixFQUFFLENBQUMsQ0FBRCxDQUFILEVBQVE1VyxNQUFNLENBQUNpSCxNQUFmLEVBQXVCMlAsRUFBRSxDQUFDLENBQUQsQ0FBekIsQ0FBaEI7QUFDRDtBQUNGO0FBQ0Y7QUFoQmtDLENBQXJDO0FBbUJBL0wsWUFBWSxDQUFDLHVCQUFELENBQVosR0FBd0M7QUFDdEM0TCxFQUFBQSxXQUFXLEVBQUUsd0JBRHlCO0FBRXRDL0ssRUFBQUEsVUFBVSxFQUFFLE1BQU07QUFDaEIsV0FBTyxFQUFQO0FBQ0QsR0FKcUM7QUFLdENMLEVBQUFBLFNBQVMsRUFBRSxDQUFDbE0sSUFBRCxFQUFPdUIsS0FBUCxFQUFjZ1csS0FBZCxLQUF3QjtBQUNqQ0EsSUFBQUEsS0FBSyxDQUFDdE8sT0FBTixDQUFjMUssSUFBZCxDQUFtQjtBQUFFZ0ssTUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0IxQyxNQUFBQSxJQUFJLEVBQUU7QUFBdEIsS0FBbkIsRUFEaUMsQ0FHakM7O0FBQ0EsVUFBTTZSLE1BQVcsR0FBRyxFQUFwQjtBQUNBLFVBQU1GLFlBQVksR0FBR1Qsd0JBQXdCLENBQUMvVyxJQUFELENBQTdDOztBQUVBLFNBQUssSUFBSTRRLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc0RyxZQUFZLENBQUNoWixNQUFqQyxFQUF5Q29TLENBQUMsRUFBMUMsRUFBOEM7QUFDNUMsWUFBTS9QLE1BQU0sR0FBRzJXLFlBQVksQ0FBQzVHLENBQUQsQ0FBM0I7QUFDQTJHLE1BQUFBLEtBQUssQ0FBQ3RPLE9BQU4sQ0FBYzFLLElBQWQsQ0FBbUI7QUFBRWdLLFFBQUFBLElBQUksRUFBRTFILE1BQU0sQ0FBQ2lIO0FBQWYsT0FBbkI7O0FBRUEsV0FBSyxJQUFJa08sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR25WLE1BQU0sQ0FBQ29XLFVBQVAsQ0FBa0J6WSxNQUF0QyxFQUE4Q3dYLENBQUMsRUFBL0MsRUFBbUQ7QUFDakQsY0FBTXlCLEVBQUUsR0FBRzVXLE1BQU0sQ0FBQ29XLFVBQVAsQ0FBa0JqQixDQUFsQixDQUFYO0FBQ0EsY0FBTTJCLE9BQU8sR0FBR0YsRUFBRSxDQUFDLENBQUQsQ0FBRixDQUFNckQsUUFBTixFQUFoQjs7QUFFQSxZQUFJLENBQUNzRCxNQUFNLENBQUNDLE9BQUQsQ0FBWCxFQUFzQjtBQUNwQkQsVUFBQUEsTUFBTSxDQUFDQyxPQUFELENBQU4sR0FBa0I7QUFBRUMsWUFBQUEsSUFBSSxFQUFFSCxFQUFFLENBQUMsQ0FBRDtBQUFWLFdBQWxCO0FBQ0FDLFVBQUFBLE1BQU0sQ0FBQ0MsT0FBRCxDQUFOLENBQWdCL0csQ0FBaEIsSUFBcUI2RyxFQUFFLENBQUMsQ0FBRCxDQUF2QjtBQUNELFNBSEQsTUFHTztBQUNMQyxVQUFBQSxNQUFNLENBQUNDLE9BQUQsQ0FBTixDQUFnQi9HLENBQWhCLElBQXFCNkcsRUFBRSxDQUFDLENBQUQsQ0FBdkI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBSyxNQUFNRyxJQUFYLElBQW1CRixNQUFuQixFQUEyQjtBQUN6QixZQUFNRyxLQUFLLEdBQUdILE1BQU0sQ0FBQ0UsSUFBRCxDQUFwQjtBQUNBLFlBQU1FLE1BQU0sR0FBRyxDQUFDRCxLQUFLLENBQUNELElBQVAsQ0FBZjs7QUFFQSxXQUFLLElBQUloSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNEcsWUFBWSxDQUFDaFosTUFBakMsRUFBeUNvUyxDQUFDLEVBQTFDLEVBQThDO0FBQzVDLGNBQU1wSSxLQUFLLEdBQUdxUCxLQUFLLENBQUNqSCxDQUFELENBQW5CO0FBQ0FrSCxRQUFBQSxNQUFNLENBQUN2WixJQUFQLENBQVlpSyxLQUFaO0FBQ0Q7O0FBRUQrTyxNQUFBQSxLQUFLLENBQUNqSCxJQUFOLENBQVcvUixJQUFYLENBQWdCdVosTUFBaEI7QUFDRDtBQUNGO0FBeENxQyxDQUF4QztBQTJDQXBNLFlBQVksQ0FBQyx5QkFBRCxDQUFaLEdBQTBDO0FBQ3hDNEwsRUFBQUEsV0FBVyxFQUFFLDBCQUQyQjtBQUV4Qy9LLEVBQUFBLFVBQVUsRUFBRSxNQUFNO0FBQ2hCLFdBQU8sQ0FDTDtBQUFFaEUsTUFBQUEsSUFBSSxFQUFFLEtBQVI7QUFBZUMsTUFBQUEsS0FBSyxFQUFFO0FBQXRCLEtBREssRUFFTDtBQUFFRCxNQUFBQSxJQUFJLEVBQUUsS0FBUjtBQUFlQyxNQUFBQSxLQUFLLEVBQUU7QUFBdEIsS0FGSyxFQUdMO0FBQUVELE1BQUFBLElBQUksRUFBRSxLQUFSO0FBQWVDLE1BQUFBLEtBQUssRUFBRTtBQUF0QixLQUhLLEVBSUw7QUFBRUQsTUFBQUEsSUFBSSxFQUFFLE9BQVI7QUFBaUJDLE1BQUFBLEtBQUssRUFBRTtBQUF4QixLQUpLLEVBS0w7QUFBRUQsTUFBQUEsSUFBSSxFQUFFLFNBQVI7QUFBbUJDLE1BQUFBLEtBQUssRUFBRTtBQUExQixLQUxLLEVBTUw7QUFBRUQsTUFBQUEsSUFBSSxFQUFFLE9BQVI7QUFBaUJDLE1BQUFBLEtBQUssRUFBRTtBQUF4QixLQU5LLENBQVA7QUFRRCxHQVh1QztBQVl4QzBELEVBQUFBLFNBQVMsRUFBRSxDQUFDbE0sSUFBRCxFQUFPdUIsS0FBUCxFQUFjZ1csS0FBZCxLQUF3QjtBQUNqQyxRQUFJM0csQ0FBSixFQUFPb0YsQ0FBUDtBQUNBdUIsSUFBQUEsS0FBSyxDQUFDdE8sT0FBTixDQUFjMUssSUFBZCxDQUFtQjtBQUFFZ0ssTUFBQUEsSUFBSSxFQUFFO0FBQVIsS0FBbkI7O0FBRUEsU0FBS3FJLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3JQLEtBQUssQ0FBQzBILE9BQU4sQ0FBY3pLLE1BQTlCLEVBQXNDb1MsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QzJHLE1BQUFBLEtBQUssQ0FBQ3RPLE9BQU4sQ0FBYzFLLElBQWQsQ0FBbUI7QUFBRWdLLFFBQUFBLElBQUksRUFBRWhILEtBQUssQ0FBQzBILE9BQU4sQ0FBYzJILENBQWQsRUFBaUJySTtBQUF6QixPQUFuQjtBQUNEOztBQUVELFVBQU1pUCxZQUFZLEdBQUdULHdCQUF3QixDQUFDL1csSUFBRCxDQUE3Qzs7QUFFQSxTQUFLNFEsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHNEcsWUFBWSxDQUFDaFosTUFBN0IsRUFBcUNvUyxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFlBQU0vUCxNQUFNLEdBQUcsSUFBSWdXLDZEQUFKLENBQWU7QUFDNUJJLFFBQUFBLFVBQVUsRUFBRU8sWUFBWSxDQUFDNUcsQ0FBRCxDQUFaLENBQWdCcUcsVUFEQTtBQUU1QnhOLFFBQUFBLEtBQUssRUFBRStOLFlBQVksQ0FBQzVHLENBQUQsQ0FBWixDQUFnQjlJO0FBRkssT0FBZixDQUFmO0FBS0FqSCxNQUFBQSxNQUFNLENBQUNrWCxZQUFQLENBQW9CLFdBQXBCO0FBQ0EsWUFBTUMsS0FBSyxHQUFHLENBQUNuWCxNQUFNLENBQUM0SSxLQUFSLENBQWQ7O0FBRUEsV0FBS3VNLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3pVLEtBQUssQ0FBQzBILE9BQU4sQ0FBY3pLLE1BQTlCLEVBQXNDd1gsQ0FBQyxFQUF2QyxFQUEyQztBQUN6Q2dDLFFBQUFBLEtBQUssQ0FBQ3paLElBQU4sQ0FBV3NDLE1BQU0sQ0FBQ29YLEtBQVAsQ0FBYTFXLEtBQUssQ0FBQzBILE9BQU4sQ0FBYytNLENBQWQsRUFBaUJ4TixLQUE5QixDQUFYO0FBQ0Q7O0FBRUQrTyxNQUFBQSxLQUFLLENBQUNqSCxJQUFOLENBQVcvUixJQUFYLENBQWdCeVosS0FBaEI7QUFDRDtBQUNGO0FBckN1QyxDQUExQztBQXdDQXRNLFlBQVksQ0FBQyxhQUFELENBQVosR0FBOEI7QUFDNUI0TCxFQUFBQSxXQUFXLEVBQUUsYUFEZTtBQUU1Qi9LLEVBQUFBLFVBQVUsRUFBRSxNQUFNO0FBQ2hCLFdBQU8sRUFBUDtBQUNELEdBSjJCO0FBSzVCTCxFQUFBQSxTQUFTLEVBQUUsQ0FBQ2xNLElBQUQsRUFBT3VCLEtBQVAsRUFBY2dXLEtBQWQsS0FBd0I7QUFDakNBLElBQUFBLEtBQUssQ0FBQ3RPLE9BQU4sQ0FBYzFLLElBQWQsQ0FBbUI7QUFBRWdLLE1BQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCMUMsTUFBQUEsSUFBSSxFQUFFO0FBQXRCLEtBQW5CO0FBQ0EwUixJQUFBQSxLQUFLLENBQUN0TyxPQUFOLENBQWMxSyxJQUFkLENBQW1CO0FBQUVnSyxNQUFBQSxJQUFJLEVBQUU7QUFBUixLQUFuQjtBQUNBZ1AsSUFBQUEsS0FBSyxDQUFDdE8sT0FBTixDQUFjMUssSUFBZCxDQUFtQjtBQUFFZ0ssTUFBQUEsSUFBSSxFQUFFO0FBQVIsS0FBbkI7QUFDQWdQLElBQUFBLEtBQUssQ0FBQ3RPLE9BQU4sQ0FBYzFLLElBQWQsQ0FBbUI7QUFBRWdLLE1BQUFBLElBQUksRUFBRTtBQUFSLEtBQW5COztBQUVBLFFBQUksQ0FBQ3ZJLElBQUQsSUFBUyxDQUFDQSxJQUFJLENBQUNrWSxXQUFmLElBQThCbFksSUFBSSxDQUFDa1ksV0FBTCxDQUFpQjFaLE1BQWpCLEtBQTRCLENBQTlELEVBQWlFO0FBQy9EO0FBQ0Q7O0FBRUQsU0FBSyxJQUFJb1MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzVRLElBQUksQ0FBQ2tZLFdBQUwsQ0FBaUIxWixNQUFyQyxFQUE2Q29TLENBQUMsRUFBOUMsRUFBa0Q7QUFDaEQsWUFBTXVILEdBQUcsR0FBR25ZLElBQUksQ0FBQ2tZLFdBQUwsQ0FBaUJ0SCxDQUFqQixDQUFaO0FBQ0EyRyxNQUFBQSxLQUFLLENBQUNqSCxJQUFOLENBQVcvUixJQUFYLENBQWdCLENBQUM0WixHQUFHLENBQUNQLElBQUwsRUFBV08sR0FBRyxDQUFDdFIsS0FBZixFQUFzQnNSLEdBQUcsQ0FBQzVQLElBQTFCLEVBQWdDNFAsR0FBRyxDQUFDQyxJQUFwQyxDQUFoQjtBQUNEO0FBQ0Y7QUFuQjJCLENBQTlCO0FBc0JBMU0sWUFBWSxDQUFDLE9BQUQsQ0FBWixHQUF3QjtBQUN0QjRMLEVBQUFBLFdBQVcsRUFBRSxPQURTO0FBRXRCL0ssRUFBQUEsVUFBVSxFQUFHdk0sSUFBRCxJQUFVO0FBQ3BCLFFBQUksQ0FBQ0EsSUFBRCxJQUFTQSxJQUFJLENBQUN4QixNQUFMLEtBQWdCLENBQTdCLEVBQWdDO0FBQzlCLGFBQU8sRUFBUDtBQUNELEtBSG1CLENBS3BCOzs7QUFDQSxRQUFJd0IsSUFBSSxDQUFDeEIsTUFBTCxLQUFnQixDQUFwQixFQUF1QjtBQUNyQixhQUFPLENBQUMsR0FBR3dCLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUWlKLE9BQVosQ0FBUDtBQUNEOztBQUVELFVBQU11TyxZQUFZLEdBQUdILHVCQUF1QixDQUFDclgsSUFBRCxDQUE1QyxDQVZvQixDQVlwQjs7QUFDQSxVQUFNcVksV0FBZ0IsR0FBRyxFQUF6QixDQWJvQixDQWVwQjs7QUFDQSxVQUFNcFAsT0FBTyxHQUFHdU8sWUFBWSxDQUFDTixNQUFiLENBQW9CLENBQUNDLEdBQUQsRUFBZ0J0VyxNQUFoQixLQUFzQztBQUN4RUEsTUFBQUEsTUFBTSxDQUFDb0ksT0FBUCxDQUFlcVAsT0FBZixDQUF3QnBQLEdBQUQsSUFBUztBQUM5QixjQUFNO0FBQUVYLFVBQUFBO0FBQUYsWUFBV1csR0FBakI7O0FBQ0EsWUFBSW1QLFdBQVcsQ0FBQzlQLElBQUQsQ0FBWCxLQUFzQnBLLFNBQTFCLEVBQXFDO0FBQ25Da2EsVUFBQUEsV0FBVyxDQUFDOVAsSUFBRCxDQUFYLEdBQW9CNE8sR0FBRyxDQUFDM1ksTUFBeEI7QUFDQTJZLFVBQUFBLEdBQUcsQ0FBQzVZLElBQUosQ0FBUzJLLEdBQVQ7QUFDRDtBQUNGLE9BTkQ7QUFPQSxhQUFPaU8sR0FBUDtBQUNELEtBVGUsRUFTYixFQVRhLENBQWhCO0FBV0EsV0FBT2xPLE9BQVA7QUFDRCxHQTlCcUI7QUErQnRCaUQsRUFBQUEsU0FBUyxFQUFFLENBQUNsTSxJQUFELEVBQWN1QixLQUFkLEVBQXFCZ1csS0FBckIsS0FBK0I7QUFDeEMsUUFBSSxDQUFDdlgsSUFBRCxJQUFTQSxJQUFJLENBQUN4QixNQUFMLEtBQWdCLENBQTdCLEVBQWdDO0FBQzlCO0FBQ0Q7O0FBQ0QsVUFBTWdaLFlBQVksR0FBR0gsdUJBQXVCLENBQUNyWCxJQUFELENBQTVDO0FBQ0EsVUFBTXVZLFlBQVksR0FBRzlCLGlEQUFTLENBQUNlLFlBQUQsRUFBZ0JnQixDQUFELElBQU8sYUFBYUEsQ0FBYixJQUFrQixVQUFVQSxDQUFsRCxDQUE5Qjs7QUFDQSxRQUFJRCxZQUFZLEdBQUcsQ0FBbkIsRUFBc0I7QUFDcEIsWUFBTTtBQUNKN1UsUUFBQUEsT0FBTyxFQUFHLG9CQUFtQnJGLE1BQU0sQ0FBQ29hLFlBQVAsQ0FDM0IsS0FBS0YsWUFEc0IsQ0FFM0I7QUFIRSxPQUFOO0FBS0Q7O0FBRUQzQixJQUFBQSwwRUFBb0IsQ0FBQ1csS0FBRCxFQUFRLEdBQUdDLFlBQVgsQ0FBcEI7QUFDRDtBQTlDcUIsQ0FBeEI7QUFpREE5TCxZQUFZLENBQUMsTUFBRCxDQUFaLEdBQXVCO0FBQ3JCNEwsRUFBQUEsV0FBVyxFQUFFLFdBRFE7QUFFckIvSyxFQUFBQSxVQUFVLEVBQUd2TSxJQUFELElBQVU7QUFDcEIsUUFBSSxDQUFDQSxJQUFELElBQVNBLElBQUksQ0FBQ3hCLE1BQUwsS0FBZ0IsQ0FBN0IsRUFBZ0M7QUFDOUIsYUFBTyxFQUFQO0FBQ0Q7O0FBRUQsVUFBTWthLEtBQVUsR0FBRyxFQUFuQjs7QUFDQSxTQUFLLElBQUk5SCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNVEsSUFBSSxDQUFDeEIsTUFBekIsRUFBaUNvUyxDQUFDLEVBQWxDLEVBQXNDO0FBQ3BDLFlBQU0vUCxNQUFNLEdBQUdiLElBQUksQ0FBQzRRLENBQUQsQ0FBbkI7O0FBQ0EsVUFBSS9QLE1BQU0sQ0FBQ2dGLElBQVAsS0FBZ0IsTUFBcEIsRUFBNEI7QUFDMUI7QUFDRCxPQUptQyxDQU1wQzs7O0FBQ0EsWUFBTThTLE9BQU8sR0FBR3ZJLElBQUksQ0FBQ00sR0FBTCxDQUFTN1AsTUFBTSxDQUFDb1csVUFBUCxDQUFrQnpZLE1BQTNCLEVBQW1DLEdBQW5DLENBQWhCOztBQUNBLFdBQUssSUFBSXdYLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcyQyxPQUFwQixFQUE2QjNDLENBQUMsRUFBOUIsRUFBa0M7QUFDaEMsY0FBTTRDLEdBQUcsR0FBRy9YLE1BQU0sQ0FBQ29XLFVBQVAsQ0FBa0JqQixDQUFsQixDQUFaO0FBQ0EsY0FBTTZDLFNBQVMsR0FBRy9CLGtFQUFPLENBQUM4QixHQUFELEVBQU0sRUFBTixDQUF6Qjs7QUFDQSxhQUFLLE1BQU1FLFFBQVgsSUFBdUJELFNBQXZCLEVBQWtDO0FBQ2hDSCxVQUFBQSxLQUFLLENBQUNJLFFBQUQsQ0FBTCxHQUFrQixJQUFsQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxXQUFPL1gsMkNBQUcsQ0FBQzJYLEtBQUQsRUFBUSxDQUFDbFEsS0FBRCxFQUFRMUosR0FBUixLQUFnQjtBQUNoQyxhQUFPO0FBQUV5SixRQUFBQSxJQUFJLEVBQUV6SixHQUFSO0FBQWEwSixRQUFBQSxLQUFLLEVBQUUxSjtBQUFwQixPQUFQO0FBQ0QsS0FGUyxDQUFWO0FBR0QsR0E1Qm9CO0FBNkJyQm9OLEVBQUFBLFNBQVMsRUFBRSxDQUFDbE0sSUFBRCxFQUFPdUIsS0FBUCxFQUFjZ1csS0FBZCxLQUF3QjtBQUNqQyxRQUFJM0csQ0FBSixFQUFPb0YsQ0FBUCxFQUFVK0MsQ0FBVjs7QUFFQSxTQUFLLE1BQU0xUCxNQUFYLElBQXFCOUgsS0FBSyxDQUFDMEgsT0FBM0IsRUFBb0M7QUFDbEMsWUFBTStQLFFBQWEsR0FBRztBQUFFelEsUUFBQUEsSUFBSSxFQUFFYyxNQUFNLENBQUNkO0FBQWYsT0FBdEIsQ0FEa0MsQ0FHbEM7O0FBQ0EsVUFBSXZJLElBQUksQ0FBQ3hCLE1BQUwsR0FBYyxDQUFkLElBQW1Cd0IsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRNFYsVUFBL0IsRUFBMkM7QUFDekNvRCxRQUFBQSxRQUFRLENBQUNwRCxVQUFULEdBQXNCLElBQXRCO0FBQ0Q7O0FBRUQyQixNQUFBQSxLQUFLLENBQUN0TyxPQUFOLENBQWMxSyxJQUFkLENBQW1CeWEsUUFBbkI7QUFDRDs7QUFFRCxRQUFJekIsS0FBSyxDQUFDdE8sT0FBTixDQUFjekssTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUM5QitZLE1BQUFBLEtBQUssQ0FBQ3RPLE9BQU4sQ0FBYzFLLElBQWQsQ0FBbUI7QUFBRWdLLFFBQUFBLElBQUksRUFBRTtBQUFSLE9BQW5CO0FBQ0Q7O0FBRUQsU0FBS3FJLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBRzVRLElBQUksQ0FBQ3hCLE1BQXJCLEVBQTZCb1MsQ0FBQyxFQUE5QixFQUFrQztBQUNoQyxZQUFNL1AsTUFBTSxHQUFHYixJQUFJLENBQUM0USxDQUFELENBQW5COztBQUVBLFdBQUtvRixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUduVixNQUFNLENBQUNvVyxVQUFQLENBQWtCelksTUFBbEMsRUFBMEN3WCxDQUFDLEVBQTNDLEVBQStDO0FBQzdDLGNBQU15QixFQUFFLEdBQUc1VyxNQUFNLENBQUNvVyxVQUFQLENBQWtCakIsQ0FBbEIsQ0FBWDtBQUNBLGNBQU04QixNQUFNLEdBQUcsRUFBZjs7QUFFQSxZQUFJcEIsZ0RBQVEsQ0FBQ2UsRUFBRCxDQUFSLElBQWdCbFcsS0FBSyxDQUFDMEgsT0FBTixDQUFjekssTUFBZCxHQUF1QixDQUEzQyxFQUE4QztBQUM1QyxnQkFBTXFhLFNBQVMsR0FBRy9CLGtFQUFPLENBQUNXLEVBQUQsQ0FBekI7O0FBQ0EsZUFBS3NCLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR3hYLEtBQUssQ0FBQzBILE9BQU4sQ0FBY3pLLE1BQTlCLEVBQXNDdWEsQ0FBQyxFQUF2QyxFQUEyQztBQUN6Q2pCLFlBQUFBLE1BQU0sQ0FBQ3ZaLElBQVAsQ0FBWXNhLFNBQVMsQ0FBQ3RYLEtBQUssQ0FBQzBILE9BQU4sQ0FBYzhQLENBQWQsRUFBaUJ2USxLQUFsQixDQUFyQjtBQUNEO0FBQ0YsU0FMRCxNQUtPO0FBQ0xzUCxVQUFBQSxNQUFNLENBQUN2WixJQUFQLENBQVkwYSxJQUFJLENBQUNDLFNBQUwsQ0FBZXpCLEVBQWYsQ0FBWjtBQUNEOztBQUVERixRQUFBQSxLQUFLLENBQUNqSCxJQUFOLENBQVcvUixJQUFYLENBQWdCdVosTUFBaEI7QUFDRDtBQUNGO0FBQ0Y7QUFsRW9CLENBQXZCOztBQXFFQSxTQUFTdEssb0JBQVQsQ0FBOEJ4TixJQUE5QixFQUF5Q3VCLEtBQXpDLEVBQXFEO0FBQ25ELFFBQU1nVyxLQUFLLEdBQUcsSUFBSVosNERBQUosRUFBZDs7QUFFQSxNQUFJLENBQUMzVyxJQUFELElBQVNBLElBQUksQ0FBQ3hCLE1BQUwsS0FBZ0IsQ0FBN0IsRUFBZ0M7QUFDOUIsV0FBTytZLEtBQVA7QUFDRDs7QUFFRCxRQUFNNEIsV0FBVyxHQUFHek4sWUFBWSxDQUFDbkssS0FBSyxDQUFDMkssU0FBUCxDQUFoQzs7QUFDQSxNQUFJLENBQUNpTixXQUFMLEVBQWtCO0FBQ2hCLFVBQU07QUFBRXpWLE1BQUFBLE9BQU8sRUFBRSxpQkFBaUJuQyxLQUFLLENBQUMySyxTQUF2QixHQUFtQztBQUE5QyxLQUFOO0FBQ0Q7O0FBRURpTixFQUFBQSxXQUFXLENBQUNqTixTQUFaLENBQXNCbE0sSUFBdEIsRUFBNEJ1QixLQUE1QixFQUFtQ2dXLEtBQW5DO0FBQ0EsU0FBT0EsS0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0U0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU03WCxTQUFTLEdBQUcwWixxRUFBc0IsQ0FBQ0csbUVBQUQsQ0FBeEM7QUFDQSxNQUFNM1osZ0JBQWdCLEdBQUd3WixxRUFBc0IsQ0FBQ0Usa0ZBQUQsQ0FBL0M7QUFDQSxNQUFNM1IsU0FBUyxHQUFHeVIscUVBQXNCLENBQUNJLG1FQUFELENBQXhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9Bbmd1bGFyTG9jYXRpb25XcmFwcGVyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvcGFuZWwvbWV0cmljc19wYW5lbF9jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvcGFuZWwvcGFuZWxfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL3BhbmVsL3F1ZXJ5X2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC90YWJsZS1vbGQvY29sdW1uX29wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9wYW5lbC90YWJsZS1vbGQvZWRpdG9yLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvcGFuZWwvdGFibGUtb2xkL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL3RhYmxlLW9sZC9yZW5kZXJlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL3RhYmxlLW9sZC90cmFuc2Zvcm1lcnMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9zZGsudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVwcmVjYXRpb25XYXJuaW5nLCB1cmxVdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2NhdGlvblNlYXJjaFRvT2JqZWN0LCBsb2NhdGlvblNlcnZpY2UsIG5hdmlnYXRpb25Mb2dnZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvYWU4ZTkwM2VkZjg4YTgzZmVkZDExNmFlMDJjMDYyOGJmNzJiMTUwYy9zcmMvbmcvbG9jYXRpb24uanMjTDVcbmNvbnN0IERFRkFVTFRfUE9SVFM6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7IGh0dHA6IDgwLCBodHRwczogNDQzLCBmdHA6IDIxIH07XG5cbmV4cG9ydCBjbGFzcyBBbmd1bGFyTG9jYXRpb25XcmFwcGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hYnNVcmwgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLmFic1VybCk7XG4gICAgdGhpcy5oYXNoID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5oYXNoKTtcbiAgICB0aGlzLmhvc3QgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLmhvc3QpO1xuICAgIHRoaXMucGF0aCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMucGF0aCk7XG4gICAgdGhpcy5wb3J0ID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5wb3J0LCAnd2luZG93LmxvY2F0aW9uJyk7XG4gICAgdGhpcy5wcm90b2NvbCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMucHJvdG9jb2wsICd3aW5kb3cubG9jYXRpb24nKTtcbiAgICB0aGlzLnJlcGxhY2UgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnJlcGxhY2UpO1xuICAgIHRoaXMuc2VhcmNoID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5zZWFyY2gpO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnN0YXRlKTtcbiAgICB0aGlzLnVybCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMudXJsKTtcbiAgfVxuXG4gIHdyYXBJbkRlcHJlY2F0aW9uV2FybmluZyhmbjogRnVuY3Rpb24sIHJlcGxhY2VtZW50Pzogc3RyaW5nKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgICBkZXByZWNhdGlvbldhcm5pbmcoJyRsb2NhdGlvbicsIGZuLm5hbWUsIHJlcGxhY2VtZW50IHx8ICdsb2NhdGlvblNlcnZpY2UnKTtcbiAgICAgIHJldHVybiBmbi5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBhYnNVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3RoaXMudXJsKCl9YDtcbiAgfVxuXG4gIGhhc2gobmV3SGFzaD86IHN0cmluZyB8IG51bGwpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogaGFzaCcpO1xuXG4gICAgaWYgKCFuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gbG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCkuaGFzaC5zbGljZSgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICB9XG5cbiAgaG9zdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5ob3N0bmFtZTtcbiAgfVxuXG4gIHBhdGgocGF0aG5hbWU/OiBhbnkpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogcGF0aCcpO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKTtcblxuICAgIGlmIChwYXRobmFtZSAhPT0gdW5kZWZpbmVkICYmIHBhdGhuYW1lICE9PSBudWxsKSB7XG4gICAgICBsZXQgcGFyc2VkUGF0aCA9IFN0cmluZyhwYXRobmFtZSk7XG4gICAgICBwYXJzZWRQYXRoID0gcGFyc2VkUGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXJzZWRQYXRoIDogYC8ke3BhcnNlZFBhdGh9YDtcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3BhcnNlZFBhdGh9YCk7XG5cbiAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWU6IHVybC5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoOiB1cmwuc2VhcmNoLmxlbmd0aCA+IDAgPyB1cmwuc2VhcmNoIDogbG9jYXRpb24uc2VhcmNoLFxuICAgICAgICBoYXNoOiB1cmwuaGFzaC5sZW5ndGggPiAwID8gdXJsLmhhc2ggOiBsb2NhdGlvbi5oYXNoLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAocGF0aG5hbWUgPT09IG51bGwpIHtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKCcvJyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucGF0aG5hbWU7XG4gIH1cblxuICBwb3J0KCk6IG51bWJlciB8IG51bGwge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIHJldHVybiBwYXJzZUludCh1cmwucG9ydCwgMTApIHx8IERFRkFVTFRfUE9SVFNbdXJsLnByb3RvY29sXSB8fCBudWxsO1xuICB9XG5cbiAgcHJvdG9jb2woKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikucHJvdG9jb2wuc2xpY2UoMCwgLTEpO1xuICB9XG5cbiAgcmVwbGFjZSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXIgbWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuXG4gIHNlYXJjaChzZWFyY2g/OiBhbnksIHBhcmFtVmFsdWU/OiBhbnkpIHtcbiAgICBuYXZpZ2F0aW9uTG9nZ2VyKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyJywgZmFsc2UsICdBbmd1bGFyIGNvbXBhdCBsYXllcjogc2VhcmNoJyk7XG4gICAgaWYgKCFzZWFyY2gpIHtcbiAgICAgIHJldHVybiBsb2NhdGlvblNlcnZpY2UuZ2V0U2VhcmNoT2JqZWN0KCk7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaCAmJiBhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnBhcnRpYWwoe1xuICAgICAgICBbc2VhcmNoXTogcGFyYW1WYWx1ZSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoc2VhcmNoKSB7XG4gICAgICBsZXQgbmV3UXVlcnk7XG5cbiAgICAgIGlmICh0eXBlb2Ygc2VhcmNoID09PSAnb2JqZWN0Jykge1xuICAgICAgICBuZXdRdWVyeSA9IHsgLi4uc2VhcmNoIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdRdWVyeSA9IGxvY2F0aW9uU2VhcmNoVG9PYmplY3Qoc2VhcmNoKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMobmV3UXVlcnkpKSB7XG4gICAgICAgIC8vIHJlbW92aW5nIHBhcmFtcyB3aXRoIG51bGwgfCB1bmRlZmluZWRcbiAgICAgICAgaWYgKG5ld1F1ZXJ5W2tleV0gPT09IG51bGwgfHwgbmV3UXVlcnlba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZGVsZXRlIG5ld1F1ZXJ5W2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgdXBkYXRlZFVybCA9IHVybFV0aWwucmVuZGVyVXJsKGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLnBhdGhuYW1lLCBuZXdRdWVyeSk7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh1cGRhdGVkVXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0YXRlKHN0YXRlPzogYW55KSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IHN0YXRlJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICB1cmwobmV3VXJsPzogYW55KSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IHVybCcpO1xuXG4gICAgaWYgKG5ld1VybCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAobmV3VXJsLnN0YXJ0c1dpdGgoJyMnKSkge1xuICAgICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh7IC4uLmxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLCBoYXNoOiBuZXdVcmwgfSk7XG4gICAgICB9IGVsc2UgaWYgKG5ld1VybC5zdGFydHNXaXRoKCc/JykpIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goeyAuLi5sb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKSwgc2VhcmNoOiBuZXdVcmwgfSk7XG4gICAgICB9IGVsc2UgaWYgKG5ld1VybC50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKCcvJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhdGlvblNlcnZpY2UucHVzaChuZXdVcmwpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbG9jYXRpb25TZXJ2aWNlO1xuICAgIH1cblxuICAgIGNvbnN0IGxvY2F0aW9uID0gbG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCk7XG4gICAgcmV0dXJuIGAke2xvY2F0aW9uLnBhdGhuYW1lfSR7bG9jYXRpb24uc2VhcmNofSR7bG9jYXRpb24uaGFzaH1gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFVuc3Vic2NyaWJhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIERhdGFGcmFtZSxcbiAgRGF0YVF1ZXJ5UmVzcG9uc2UsXG4gIERhdGFTb3VyY2VBcGksXG4gIExlZ2FjeVJlc3BvbnNlRGF0YSxcbiAgTG9hZGluZ1N0YXRlLFxuICBQYW5lbERhdGEsXG4gIFBhbmVsRXZlbnRzLFxuICBUaW1lUmFuZ2UsXG4gIHRvRGF0YUZyYW1lRFRPLFxuICB0b0xlZ2FjeVJlc3BvbnNlRGF0YSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBQYW5lbEN0cmwgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsJztcbmltcG9ydCB7IENvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBQYW5lbE1vZGVsIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zdGF0ZSc7XG5pbXBvcnQgeyBhcHBseVBhbmVsVGltZU92ZXJyaWRlcyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvdXRpbHMvcGFuZWwnO1xuXG5pbXBvcnQgeyBQYW5lbFF1ZXJ5UnVubmVyIH0gZnJvbSAnLi4vLi4vZmVhdHVyZXMvcXVlcnkvc3RhdGUvUGFuZWxRdWVyeVJ1bm5lcic7XG5cbmNsYXNzIE1ldHJpY3NQYW5lbEN0cmwgZXh0ZW5kcyBQYW5lbEN0cmwge1xuICBkZWNsYXJlIGRhdGFzb3VyY2U6IERhdGFTb3VyY2VBcGk7XG4gIGRlY2xhcmUgcmFuZ2U6IFRpbWVSYW5nZTtcblxuICBjb250ZXh0U3J2OiBDb250ZXh0U3J2O1xuICBkYXRhc291cmNlU3J2OiBhbnk7XG4gIHRpbWVTcnY6IGFueTtcbiAgdGVtcGxhdGVTcnY6IGFueTtcbiAgaW50ZXJ2YWw6IGFueTtcbiAgaW50ZXJ2YWxNczogYW55O1xuICByZXNvbHV0aW9uOiBhbnk7XG4gIHRpbWVJbmZvPzogc3RyaW5nO1xuICBza2lwRGF0YU9uSW5pdCA9IGZhbHNlO1xuICBkYXRhTGlzdDogTGVnYWN5UmVzcG9uc2VEYXRhW10gPSBbXTtcbiAgcXVlcnlTdWJzY3JpcHRpb24/OiBVbnN1YnNjcmliYWJsZSB8IG51bGw7XG4gIHVzZURhdGFGcmFtZXMgPSBmYWxzZTtcbiAgcGFuZWxEYXRhPzogUGFuZWxEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55LCAkaW5qZWN0b3I6IGFueSkge1xuICAgIHN1cGVyKCRzY29wZSwgJGluamVjdG9yKTtcblxuICAgIHRoaXMuY29udGV4dFNydiA9ICRpbmplY3Rvci5nZXQoJ2NvbnRleHRTcnYnKTtcbiAgICB0aGlzLmRhdGFzb3VyY2VTcnYgPSAkaW5qZWN0b3IuZ2V0KCdkYXRhc291cmNlU3J2Jyk7XG4gICAgdGhpcy50aW1lU3J2ID0gJGluamVjdG9yLmdldCgndGltZVNydicpO1xuICAgIHRoaXMudGVtcGxhdGVTcnYgPSAkaW5qZWN0b3IuZ2V0KCd0ZW1wbGF0ZVNydicpO1xuICAgIHRoaXMucGFuZWwuZGF0YXNvdXJjZSA9IHRoaXMucGFuZWwuZGF0YXNvdXJjZSB8fCBudWxsO1xuXG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMucmVmcmVzaCwgdGhpcy5vbk1ldHJpY3NQYW5lbFJlZnJlc2guYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMucGFuZWxUZWFyZG93biwgdGhpcy5vblBhbmVsVGVhckRvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMuY29tcG9uZW50RGlkTW91bnQsIHRoaXMub25NZXRyaWNzUGFuZWxNb3VudGVkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk1ldHJpY3NQYW5lbE1vdW50ZWQoKSB7XG4gICAgY29uc3QgcXVlcnlSdW5uZXIgPSB0aGlzLnBhbmVsLmdldFF1ZXJ5UnVubmVyKCkgYXMgUGFuZWxRdWVyeVJ1bm5lcjtcbiAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uID0gcXVlcnlSdW5uZXJcbiAgICAgIC5nZXREYXRhKHsgd2l0aFRyYW5zZm9ybXM6IHRydWUsIHdpdGhGaWVsZENvbmZpZzogdHJ1ZSB9KVxuICAgICAgLnN1YnNjcmliZSh0aGlzLnBhbmVsRGF0YU9ic2VydmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgb25QYW5lbFRlYXJEb3duKCkge1xuICAgIGlmICh0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnF1ZXJ5U3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uTWV0cmljc1BhbmVsUmVmcmVzaCgpIHtcbiAgICAvLyBpZ25vcmUgZmV0Y2hpbmcgZGF0YSBpZiBhbm90aGVyIHBhbmVsIGlzIGluIGZ1bGxzY3JlZW5cbiAgICBpZiAodGhpcy5vdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgd2UgaGF2ZSBzbmFwc2hvdCBkYXRhIHVzZSB0aGF0XG4gICAgaWYgKHRoaXMucGFuZWwuc25hcHNob3REYXRhKSB7XG4gICAgICB0aGlzLnVwZGF0ZVRpbWVSYW5nZSgpO1xuICAgICAgbGV0IGRhdGEgPSB0aGlzLnBhbmVsLnNuYXBzaG90RGF0YTtcbiAgICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgIGlmICghaXNBcnJheShkYXRhKSkge1xuICAgICAgICBkYXRhID0gZGF0YS5kYXRhO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnBhbmVsRGF0YSA9IHtcbiAgICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lLFxuICAgICAgICBzZXJpZXM6IGRhdGEsXG4gICAgICAgIHRpbWVSYW5nZTogdGhpcy5yYW5nZSxcbiAgICAgIH07XG5cbiAgICAgIC8vIERlZmVyIHBhbmVsIHJlbmRlcmluZyB0aWxsIHRoZSBuZXh0IGRpZ2VzdCBjeWNsZS5cbiAgICAgIC8vIEZvciBzb21lIHJlYXNvbiBzbmFwc2hvdCBwYW5lbHMgZG9uJ3QgaW5pdCBhdCB0aGlzIHRpbWUsIHNvIHRoaXMgaGVscHMgdG8gYXZvaWQgcmVuZGVyaW5nIGlzc3Vlcy5cbiAgICAgIHJldHVybiB0aGlzLiR0aW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5kYXRhU25hcHNob3RMb2FkLCBkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNsZWFyIGxvYWRpbmcvZXJyb3Igc3RhdGVcbiAgICBkZWxldGUgdGhpcy5lcnJvcjtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgLy8gbG9hZCBkYXRhc291cmNlIHNlcnZpY2VcbiAgICByZXR1cm4gdGhpcy5kYXRhc291cmNlU3J2XG4gICAgICAuZ2V0KHRoaXMucGFuZWwuZGF0YXNvdXJjZSwgdGhpcy5wYW5lbC5zY29wZWRWYXJzKVxuICAgICAgLnRoZW4odGhpcy5pc3N1ZVF1ZXJpZXMuYmluZCh0aGlzKSlcbiAgICAgIC5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb2Nlc3NEYXRhRXJyb3IoZXJyOiBhbnkpIHtcbiAgICAvLyBpZiBjYW5jZWxlZCAga2VlcCBsb2FkaW5nIHNldCB0byB0cnVlXG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdQYW5lbCByZXF1ZXN0IGNhbmNlbGxlZCcsIGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lcnJvciA9IGVyci5tZXNzYWdlIHx8ICdSZXF1ZXN0IEVycm9yJztcblxuICAgIGlmIChlcnIuZGF0YSkge1xuICAgICAgaWYgKGVyci5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVyci5kYXRhLm1lc3NhZ2U7XG4gICAgICB9IGVsc2UgaWYgKGVyci5kYXRhLmVycm9yKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnIuZGF0YS5lcnJvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFuZ3VsYXJEaXJ0eUNoZWNrKCk7XG4gIH1cblxuICBhbmd1bGFyRGlydHlDaGVjaygpIHtcbiAgICBpZiAoIXRoaXMuJHNjb3BlLiRyb290LiQkcGhhc2UpIHtcbiAgICAgIHRoaXMuJHNjb3BlLiRkaWdlc3QoKTtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGVzIHRoZSByZXNwb25zZSB3aXRoIGluZm9ybWF0aW9uIGZyb20gdGhlIHN0cmVhbVxuICBwYW5lbERhdGFPYnNlcnZlciA9IHtcbiAgICBuZXh0OiAoZGF0YTogUGFuZWxEYXRhKSA9PiB7XG4gICAgICB0aGlzLnBhbmVsRGF0YSA9IGRhdGE7XG5cbiAgICAgIGlmIChkYXRhLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuRXJyb3IpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWdub3JlIGRhdGEgaW4gbG9hZGluZyBzdGF0ZVxuICAgICAgaWYgKGRhdGEuc3RhdGUgPT09IExvYWRpbmdTdGF0ZS5Mb2FkaW5nKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5ndWxhckRpcnR5Q2hlY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5yZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IHsgdGltZUluZm8gfSA9IGRhdGEucmVxdWVzdDtcbiAgICAgICAgaWYgKHRpbWVJbmZvKSB7XG4gICAgICAgICAgdGhpcy50aW1lSW5mbyA9IHRpbWVJbmZvO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLnRpbWVSYW5nZSkge1xuICAgICAgICB0aGlzLnJhbmdlID0gZGF0YS50aW1lUmFuZ2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnVzZURhdGFGcmFtZXMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVEYXRhRnJhbWVzKGRhdGEuc2VyaWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1ha2UgdGhlIHJlc3VsdHMgbG9vayBhcyBpZiB0aGV5IGNhbWUgZGlyZWN0bHkgZnJvbSBhIDw2LjIgZGF0YXNvdXJjZSByZXF1ZXN0XG4gICAgICAgIGNvbnN0IGxlZ2FjeSA9IGRhdGEuc2VyaWVzLm1hcCgodikgPT4gdG9MZWdhY3lSZXNwb25zZURhdGEodikpO1xuICAgICAgICB0aGlzLmhhbmRsZVF1ZXJ5UmVzdWx0KHsgZGF0YTogbGVnYWN5IH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFuZ3VsYXJEaXJ0eUNoZWNrKCk7XG4gICAgfSxcbiAgfTtcblxuICB1cGRhdGVUaW1lUmFuZ2UoZGF0YXNvdXJjZT86IERhdGFTb3VyY2VBcGkpIHtcbiAgICB0aGlzLmRhdGFzb3VyY2UgPSBkYXRhc291cmNlIHx8IHRoaXMuZGF0YXNvdXJjZTtcbiAgICB0aGlzLnJhbmdlID0gdGhpcy50aW1lU3J2LnRpbWVSYW5nZSgpO1xuXG4gICAgY29uc3QgbmV3VGltZURhdGEgPSBhcHBseVBhbmVsVGltZU92ZXJyaWRlcyh0aGlzLnBhbmVsLCB0aGlzLnJhbmdlKTtcbiAgICB0aGlzLnRpbWVJbmZvID0gbmV3VGltZURhdGEudGltZUluZm87XG4gICAgdGhpcy5yYW5nZSA9IG5ld1RpbWVEYXRhLnRpbWVSYW5nZTtcbiAgfVxuXG4gIGlzc3VlUXVlcmllcyhkYXRhc291cmNlOiBEYXRhU291cmNlQXBpKSB7XG4gICAgdGhpcy51cGRhdGVUaW1lUmFuZ2UoZGF0YXNvdXJjZSk7XG5cbiAgICB0aGlzLmRhdGFzb3VyY2UgPSBkYXRhc291cmNlO1xuXG4gICAgY29uc3QgcGFuZWwgPSB0aGlzLnBhbmVsIGFzIFBhbmVsTW9kZWw7XG4gICAgY29uc3QgcXVlcnlSdW5uZXIgPSBwYW5lbC5nZXRRdWVyeVJ1bm5lcigpO1xuXG4gICAgcmV0dXJuIHF1ZXJ5UnVubmVyLnJ1bih7XG4gICAgICBkYXRhc291cmNlOiBwYW5lbC5kYXRhc291cmNlLFxuICAgICAgcXVlcmllczogcGFuZWwudGFyZ2V0cyxcbiAgICAgIHBhbmVsSWQ6IHBhbmVsLmlkLFxuICAgICAgZGFzaGJvYXJkSWQ6IHRoaXMuZGFzaGJvYXJkLmlkLFxuICAgICAgdGltZXpvbmU6IHRoaXMuZGFzaGJvYXJkLmdldFRpbWV6b25lKCksXG4gICAgICB0aW1lSW5mbzogdGhpcy50aW1lSW5mbyxcbiAgICAgIHRpbWVSYW5nZTogdGhpcy5yYW5nZSxcbiAgICAgIG1heERhdGFQb2ludHM6IHBhbmVsLm1heERhdGFQb2ludHMgfHwgdGhpcy53aWR0aCxcbiAgICAgIG1pbkludGVydmFsOiBwYW5lbC5pbnRlcnZhbCxcbiAgICAgIHNjb3BlZFZhcnM6IHBhbmVsLnNjb3BlZFZhcnMsXG4gICAgICBjYWNoZVRpbWVvdXQ6IHBhbmVsLmNhY2hlVGltZW91dCxcbiAgICAgIHRyYW5zZm9ybWF0aW9uczogcGFuZWwudHJhbnNmb3JtYXRpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRGF0YUZyYW1lcyhkYXRhOiBEYXRhRnJhbWVbXSkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZGFzaGJvYXJkICYmIHRoaXMuZGFzaGJvYXJkLnNuYXBzaG90KSB7XG4gICAgICB0aGlzLnBhbmVsLnNuYXBzaG90RGF0YSA9IGRhdGEubWFwKChmcmFtZSkgPT4gdG9EYXRhRnJhbWVEVE8oZnJhbWUpKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5kYXRhRnJhbWVzUmVjZWl2ZWQsIGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5wcm9jZXNzRGF0YUVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUXVlcnlSZXN1bHQocmVzdWx0OiBEYXRhUXVlcnlSZXNwb25zZSkge1xuICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZGFzaGJvYXJkLnNuYXBzaG90KSB7XG4gICAgICB0aGlzLnBhbmVsLnNuYXBzaG90RGF0YSA9IHJlc3VsdC5kYXRhO1xuICAgIH1cblxuICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQuZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGEgc291cmNlIHF1ZXJ5IHJlc3VsdCBpbnZhbGlkLCBtaXNzaW5nIGRhdGEgZmllbGQ6JywgcmVzdWx0KTtcbiAgICAgIHJlc3VsdCA9IHsgZGF0YTogW10gfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5kYXRhUmVjZWl2ZWQsIHJlc3VsdC5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBNZXRyaWNzUGFuZWxDdHJsIH07XG4iLCJpbXBvcnQgeyBhdXRvIH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7XG4gIEFwcEV2ZW50LFxuICBQYW5lbEV2ZW50cyxcbiAgUGFuZWxQbHVnaW5NZXRhLFxuICBBbmd1bGFyUGFuZWxNZW51SXRlbSxcbiAgRXZlbnRCdXNFeHRlbmRlZCxcbiAgRXZlbnRCdXNTcnYsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQW5ndWxhckxvY2F0aW9uV3JhcHBlciB9IGZyb20gJ2FwcC9hbmd1bGFyL0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdhcHAvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgcHJvZmlsZXIgfSBmcm9tICdhcHAvY29yZS9jb3JlJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkTW9kZWwgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUnO1xuXG5leHBvcnQgY2xhc3MgUGFuZWxDdHJsIHtcbiAgcGFuZWw6IGFueTtcbiAgZXJyb3I6IGFueTtcbiAgZGVjbGFyZSBkYXNoYm9hcmQ6IERhc2hib2FyZE1vZGVsO1xuICBwbHVnaW5OYW1lID0gJyc7XG4gIHBsdWdpbklkID0gJyc7XG4gIGVkaXRvclRhYnM6IGFueTtcbiAgJHNjb3BlOiBhbnk7XG4gICRpbmplY3RvcjogYXV0by5JSW5qZWN0b3JTZXJ2aWNlO1xuICAkdGltZW91dDogYW55O1xuICBlZGl0TW9kZUluaXRpYXRlZCA9IGZhbHNlO1xuICBkZWNsYXJlIGhlaWdodDogbnVtYmVyO1xuICBkZWNsYXJlIHdpZHRoOiBudW1iZXI7XG4gIGNvbnRhaW5lckhlaWdodDogYW55O1xuICBldmVudHM6IEV2ZW50QnVzRXh0ZW5kZWQ7XG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgdGltaW5nOiBhbnk7XG4gICRsb2NhdGlvbjogQW5ndWxhckxvY2F0aW9uV3JhcHBlcjtcblxuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSwgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2UpIHtcbiAgICB0aGlzLnBhbmVsID0gdGhpcy5wYW5lbCA/PyAkc2NvcGUuJHBhcmVudC5wYW5lbDtcbiAgICB0aGlzLmRhc2hib2FyZCA9IHRoaXMuZGFzaGJvYXJkID8/ICRzY29wZS4kcGFyZW50LmRhc2hib2FyZDtcbiAgICB0aGlzLiRpbmplY3RvciA9ICRpbmplY3RvcjtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLiR0aW1lb3V0ID0gJGluamVjdG9yLmdldCgnJHRpbWVvdXQnKTtcbiAgICB0aGlzLmVkaXRvclRhYnMgPSBbXTtcbiAgICB0aGlzLiRsb2NhdGlvbiA9IG5ldyBBbmd1bGFyTG9jYXRpb25XcmFwcGVyKCk7XG4gICAgdGhpcy5ldmVudHMgPSBuZXcgRXZlbnRCdXNTcnYoKTtcbiAgICB0aGlzLnRpbWluZyA9IHt9OyAvLyBub3QgdXNlZCBidXQgaGVyZSB0byBub3QgYnJlYWsgcGx1Z2luc1xuXG4gICAgY29uc3QgcGx1Z2luID0gY29uZmlnLnBhbmVsc1t0aGlzLnBhbmVsLnR5cGVdO1xuICAgIGlmIChwbHVnaW4pIHtcbiAgICAgIHRoaXMucGx1Z2luSWQgPSBwbHVnaW4uaWQ7XG4gICAgICB0aGlzLnBsdWdpbk5hbWUgPSBwbHVnaW4ubmFtZTtcbiAgICB9XG5cbiAgICAkc2NvcGUuJG9uKFBhbmVsRXZlbnRzLmNvbXBvbmVudERpZE1vdW50Lm5hbWUsICgpID0+IHRoaXMucGFuZWxEaWRNb3VudCgpKTtcbiAgfVxuXG4gIHBhbmVsRGlkTW91bnQoKSB7XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5jb21wb25lbnREaWRNb3VudCk7XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5pbml0aWFsaXplZCk7XG4gICAgdGhpcy5kYXNoYm9hcmQucGFuZWxJbml0aWFsaXplZCh0aGlzLnBhbmVsKTtcbiAgfVxuXG4gIHJlbmRlcmluZ0NvbXBsZXRlZCgpIHtcbiAgICBwcm9maWxlci5yZW5kZXJpbmdDb21wbGV0ZWQoKTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5wYW5lbC5yZWZyZXNoKCk7XG4gIH1cblxuICBwdWJsaXNoQXBwRXZlbnQ8VD4oZXZlbnQ6IEFwcEV2ZW50PFQ+LCBwYXlsb2FkPzogVCkge1xuICAgIHRoaXMuJHNjb3BlLiRyb290LmFwcEV2ZW50KGV2ZW50LCBwYXlsb2FkKTtcbiAgfVxuXG4gIGluaXRFZGl0TW9kZSgpIHtcbiAgICBpZiAoIXRoaXMuZWRpdE1vZGVJbml0aWF0ZWQpIHtcbiAgICAgIHRoaXMuZWRpdE1vZGVJbml0aWF0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5lZGl0TW9kZUluaXRpYWxpemVkKTtcbiAgICB9XG4gIH1cblxuICBhZGRFZGl0b3JUYWIodGl0bGU6IHN0cmluZywgZGlyZWN0aXZlRm46IGFueSwgaW5kZXg/OiBudW1iZXIsIGljb24/OiBhbnkpIHtcbiAgICBjb25zdCBlZGl0b3JUYWIgPSB7IHRpdGxlLCBkaXJlY3RpdmVGbiwgaWNvbiB9O1xuXG4gICAgaWYgKGlzU3RyaW5nKGRpcmVjdGl2ZUZuKSkge1xuICAgICAgZWRpdG9yVGFiLmRpcmVjdGl2ZUZuID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB0ZW1wbGF0ZVVybDogZGlyZWN0aXZlRm4gfTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGluZGV4KSB7XG4gICAgICB0aGlzLmVkaXRvclRhYnMuc3BsaWNlKGluZGV4LCAwLCBlZGl0b3JUYWIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVkaXRvclRhYnMucHVzaChlZGl0b3JUYWIpO1xuICAgIH1cbiAgfVxuXG4gIGdldEV4dGVuZGVkTWVudSgpIHtcbiAgICBjb25zdCBtZW51OiBBbmd1bGFyUGFuZWxNZW51SXRlbVtdID0gW107XG4gICAgdGhpcy5ldmVudHMuZW1pdChQYW5lbEV2ZW50cy5pbml0UGFuZWxBY3Rpb25zLCBtZW51KTtcbiAgICByZXR1cm4gbWVudTtcbiAgfVxuXG4gIC8vIE92ZXJyaWRlIGluIHN1Yi1jbGFzcyB0byBhZGQgaXRlbXMgYmVmb3JlIGV4dGVuZGVkIG1lbnVcbiAgYXN5bmMgZ2V0QWRkaXRpb25hbE1lbnVJdGVtcygpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgb3RoZXJQYW5lbEluRnVsbHNjcmVlbk1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGFzaGJvYXJkLm90aGVyUGFuZWxJbkZ1bGxzY3JlZW4odGhpcy5wYW5lbCk7XG4gIH1cblxuICByZW5kZXIocGF5bG9hZD86IGFueSkge1xuICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMucmVuZGVyLCBwYXlsb2FkKTtcbiAgfVxuXG4gIC8vIG92ZXJyaWRlbiBmcm9tIHJlYWN0XG4gIG9uUGx1Z2luVHlwZUNoYW5nZSA9IChwbHVnaW46IFBhbmVsUGx1Z2luTWV0YSkgPT4ge307XG59XG4iLCJpbXBvcnQgeyBhdXRvIH0gZnJvbSAnYW5ndWxhcic7XG5pbXBvcnQgeyBpbmRleE9mIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNsYXNzIFF1ZXJ5Q3RybDxUID0gYW55PiB7XG4gIHRhcmdldCE6IFQ7XG4gIGRhdGFzb3VyY2UhOiBhbnk7XG4gIHBhbmVsQ3RybCE6IGFueTtcbiAgcGFuZWw6IGFueTtcbiAgaGFzUmF3TW9kZSE6IGJvb2xlYW47XG4gIGVycm9yPzogc3RyaW5nIHwgbnVsbDtcbiAgaXNMYXN0UXVlcnk6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHVibGljICRzY29wZTogYW55LCBwdWJsaWMgJGluamVjdG9yOiBhdXRvLklJbmplY3RvclNlcnZpY2UpIHtcbiAgICB0aGlzLnBhbmVsQ3RybCA9IHRoaXMucGFuZWxDdHJsID8/ICRzY29wZS5jdHJsLnBhbmVsQ3RybDtcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMudGFyZ2V0ID8/ICRzY29wZS5jdHJsLnRhcmdldDtcbiAgICB0aGlzLmRhdGFzb3VyY2UgPSB0aGlzLmRhdGFzb3VyY2UgPz8gJHNjb3BlLmN0cmwuZGF0YXNvdXJjZTtcbiAgICB0aGlzLnBhbmVsID0gdGhpcy5wYW5lbEN0cmw/LnBhbmVsID8/ICRzY29wZS5jdHJsLnBhbmVsQ3RybC5wYW5lbDtcbiAgICB0aGlzLmlzTGFzdFF1ZXJ5ID0gaW5kZXhPZih0aGlzLnBhbmVsLnRhcmdldHMsIHRoaXMudGFyZ2V0KSA9PT0gdGhpcy5wYW5lbC50YXJnZXRzLmxlbmd0aCAtIDE7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMucGFuZWxDdHJsLnJlZnJlc2goKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbWFwLCB3aXRob3V0IH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgZ2V0VmFsdWVGb3JtYXRzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5PcHRpb25zQ3RybCB7XG4gIHBhbmVsOiBhbnk7XG4gIHBhbmVsQ3RybDogYW55O1xuICBjb2xvck1vZGVzOiBhbnk7XG4gIGNvbHVtblN0eWxlczogYW55O1xuICBjb2x1bW5UeXBlczogYW55O1xuICBmb250U2l6ZXM6IGFueTtcbiAgZGF0ZUZvcm1hdHM6IGFueTtcbiAgYWRkQ29sdW1uU2VnbWVudDogYW55O1xuICB1bml0Rm9ybWF0czogYW55O1xuICBnZXRDb2x1bW5OYW1lczogYW55O1xuICBhY3RpdmVTdHlsZUluZGV4OiBudW1iZXI7XG4gIG1hcHBpbmdUeXBlczogYW55O1xuXG4gIGFsaWduVHlwZXM6IGFueTtcbiAgc3RhdGljIHJlYWRvbmx5IGFsaWduVHlwZXNFbnVtID0gW1xuICAgIHsgdGV4dDogJ2F1dG8nLCB2YWx1ZTogJycgfSxcbiAgICB7IHRleHQ6ICdsZWZ0JywgdmFsdWU6ICdsZWZ0JyB9LFxuICAgIHsgdGV4dDogJ2NlbnRlcicsIHZhbHVlOiAnY2VudGVyJyB9LFxuICAgIHsgdGV4dDogJ3JpZ2h0JywgdmFsdWU6ICdyaWdodCcgfSxcbiAgXTtcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55KSB7XG4gICAgJHNjb3BlLmVkaXRvciA9IHRoaXM7XG5cbiAgICB0aGlzLmFjdGl2ZVN0eWxlSW5kZXggPSAwO1xuICAgIHRoaXMucGFuZWxDdHJsID0gJHNjb3BlLmN0cmw7XG4gICAgdGhpcy5wYW5lbCA9IHRoaXMucGFuZWxDdHJsLnBhbmVsO1xuICAgIHRoaXMudW5pdEZvcm1hdHMgPSBnZXRWYWx1ZUZvcm1hdHMoKTtcbiAgICB0aGlzLmNvbG9yTW9kZXMgPSBbXG4gICAgICB7IHRleHQ6ICdEaXNhYmxlZCcsIHZhbHVlOiBudWxsIH0sXG4gICAgICB7IHRleHQ6ICdDZWxsJywgdmFsdWU6ICdjZWxsJyB9LFxuICAgICAgeyB0ZXh0OiAnVmFsdWUnLCB2YWx1ZTogJ3ZhbHVlJyB9LFxuICAgICAgeyB0ZXh0OiAnUm93JywgdmFsdWU6ICdyb3cnIH0sXG4gICAgXTtcbiAgICB0aGlzLmNvbHVtblR5cGVzID0gW1xuICAgICAgeyB0ZXh0OiAnTnVtYmVyJywgdmFsdWU6ICdudW1iZXInIH0sXG4gICAgICB7IHRleHQ6ICdTdHJpbmcnLCB2YWx1ZTogJ3N0cmluZycgfSxcbiAgICAgIHsgdGV4dDogJ0RhdGUnLCB2YWx1ZTogJ2RhdGUnIH0sXG4gICAgICB7IHRleHQ6ICdIaWRkZW4nLCB2YWx1ZTogJ2hpZGRlbicgfSxcbiAgICBdO1xuICAgIHRoaXMuZm9udFNpemVzID0gWyc4MCUnLCAnOTAlJywgJzEwMCUnLCAnMTEwJScsICcxMjAlJywgJzEzMCUnLCAnMTUwJScsICcxNjAlJywgJzE4MCUnLCAnMjAwJScsICcyMjAlJywgJzI1MCUnXTtcbiAgICB0aGlzLmRhdGVGb3JtYXRzID0gW1xuICAgICAgeyB0ZXh0OiAnWVlZWS1NTS1ERCBISDptbTpzcycsIHZhbHVlOiAnWVlZWS1NTS1ERCBISDptbTpzcycgfSxcbiAgICAgIHsgdGV4dDogJ1lZWVktTU0tREQgSEg6bW06c3MuU1NTJywgdmFsdWU6ICdZWVlZLU1NLUREIEhIOm1tOnNzLlNTUycgfSxcbiAgICAgIHsgdGV4dDogJ01NL0REL1lZIGg6bW06c3MgYScsIHZhbHVlOiAnTU0vREQvWVkgaDptbTpzcyBhJyB9LFxuICAgICAgeyB0ZXh0OiAnTU1NTSBELCBZWVlZIExUJywgdmFsdWU6ICdNTU1NIEQsIFlZWVkgTFQnIH0sXG4gICAgICB7IHRleHQ6ICdZWVlZLU1NLUREJywgdmFsdWU6ICdZWVlZLU1NLUREJyB9LFxuICAgIF07XG4gICAgdGhpcy5tYXBwaW5nVHlwZXMgPSBbXG4gICAgICB7IHRleHQ6ICdWYWx1ZSB0byB0ZXh0JywgdmFsdWU6IDEgfSxcbiAgICAgIHsgdGV4dDogJ1JhbmdlIHRvIHRleHQnLCB2YWx1ZTogMiB9LFxuICAgIF07XG4gICAgdGhpcy5hbGlnblR5cGVzID0gQ29sdW1uT3B0aW9uc0N0cmwuYWxpZ25UeXBlc0VudW07XG5cbiAgICB0aGlzLmdldENvbHVtbk5hbWVzID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBhbmVsQ3RybC50YWJsZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICByZXR1cm4gbWFwKHRoaXMucGFuZWxDdHJsLnRhYmxlLmNvbHVtbnMsIChjb2w6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gY29sLnRleHQ7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5vbkNvbG9yQ2hhbmdlID0gdGhpcy5vbkNvbG9yQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVuZGVyKCk7XG4gIH1cblxuICBzZXRVbml0Rm9ybWF0KGNvbHVtbjogYW55KSB7XG4gICAgcmV0dXJuICh2YWx1ZTogYW55KSA9PiB7XG4gICAgICBjb2x1bW4udW5pdCA9IHZhbHVlO1xuICAgICAgdGhpcy5wYW5lbEN0cmwucmVuZGVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIGFkZENvbHVtblN0eWxlKCkge1xuICAgIGNvbnN0IG5ld1N0eWxlUnVsZTogb2JqZWN0ID0ge1xuICAgICAgdW5pdDogJ3Nob3J0JyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgYWxpYXM6ICcnLFxuICAgICAgZGVjaW1hbHM6IDIsXG4gICAgICBjb2xvcnM6IFsncmdiYSgyNDUsIDU0LCA1NCwgMC45KScsICdyZ2JhKDIzNywgMTI5LCA0MCwgMC44OSknLCAncmdiYSg1MCwgMTcyLCA0NSwgMC45NyknXSxcbiAgICAgIGNvbG9yTW9kZTogbnVsbCxcbiAgICAgIHBhdHRlcm46ICcnLFxuICAgICAgZGF0ZUZvcm1hdDogJ1lZWVktTU0tREQgSEg6bW06c3MnLFxuICAgICAgdGhyZXNob2xkczogW10sXG4gICAgICBtYXBwaW5nVHlwZTogMSxcbiAgICAgIGFsaWduOiAnYXV0bycsXG4gICAgfTtcblxuICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMucGFuZWwuc3R5bGVzO1xuICAgIGNvbnN0IHN0eWxlc0NvdW50ID0gc3R5bGVzLmxlbmd0aDtcbiAgICBsZXQgaW5kZXhUb0luc2VydCA9IHN0eWxlc0NvdW50O1xuXG4gICAgLy8gY2hlY2sgaWYgbGFzdCBpcyBhIGNhdGNoIGFsbCBydWxlLCB0aGVuIGFkZCBpdCBiZWZvcmUgdGhhdCBvbmVcbiAgICBpZiAoc3R5bGVzQ291bnQgPiAwKSB7XG4gICAgICBjb25zdCBsYXN0ID0gc3R5bGVzW3N0eWxlc0NvdW50IC0gMV07XG4gICAgICBpZiAobGFzdC5wYXR0ZXJuID09PSAnLy4qLycpIHtcbiAgICAgICAgaW5kZXhUb0luc2VydCA9IHN0eWxlc0NvdW50IC0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdHlsZXMuc3BsaWNlKGluZGV4VG9JbnNlcnQsIDAsIG5ld1N0eWxlUnVsZSk7XG4gICAgdGhpcy5hY3RpdmVTdHlsZUluZGV4ID0gaW5kZXhUb0luc2VydDtcbiAgfVxuXG4gIHJlbW92ZUNvbHVtblN0eWxlKHN0eWxlOiBhbnkpIHtcbiAgICB0aGlzLnBhbmVsLnN0eWxlcyA9IHdpdGhvdXQodGhpcy5wYW5lbC5zdHlsZXMsIHN0eWxlKTtcbiAgfVxuXG4gIGludmVydENvbG9yT3JkZXIoaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHJlZiA9IHRoaXMucGFuZWwuc3R5bGVzW2luZGV4XS5jb2xvcnM7XG4gICAgY29uc3QgY29weSA9IHJlZlswXTtcbiAgICByZWZbMF0gPSByZWZbMl07XG4gICAgcmVmWzJdID0gY29weTtcbiAgICB0aGlzLnBhbmVsQ3RybC5yZW5kZXIoKTtcbiAgfVxuXG4gIG9uQ29sb3JDaGFuZ2Uoc3R5bGU6IGFueSwgY29sb3JJbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIChuZXdDb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgICBzdHlsZS5jb2xvcnNbY29sb3JJbmRleF0gPSBuZXdDb2xvcjtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIGFkZFZhbHVlTWFwKHN0eWxlOiBhbnkpIHtcbiAgICBpZiAoIXN0eWxlLnZhbHVlTWFwcykge1xuICAgICAgc3R5bGUudmFsdWVNYXBzID0gW107XG4gICAgfVxuICAgIHN0eWxlLnZhbHVlTWFwcy5wdXNoKHsgdmFsdWU6ICcnLCB0ZXh0OiAnJyB9KTtcbiAgICB0aGlzLnBhbmVsQ3RybC5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbW92ZVZhbHVlTWFwKHN0eWxlOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICBzdHlsZS52YWx1ZU1hcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnBhbmVsQ3RybC5yZW5kZXIoKTtcbiAgfVxuXG4gIGFkZFJhbmdlTWFwKHN0eWxlOiBhbnkpIHtcbiAgICBpZiAoIXN0eWxlLnJhbmdlTWFwcykge1xuICAgICAgc3R5bGUucmFuZ2VNYXBzID0gW107XG4gICAgfVxuICAgIHN0eWxlLnJhbmdlTWFwcy5wdXNoKHsgZnJvbTogJycsIHRvOiAnJywgdGV4dDogJycgfSk7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVuZGVyKCk7XG4gIH1cblxuICByZW1vdmVSYW5nZU1hcChzdHlsZTogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgc3R5bGUucmFuZ2VNYXBzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVuZGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtbk9wdGlvbnNUYWIoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHNjb3BlOiB0cnVlLFxuICAgIHRlbXBsYXRlVXJsOiAncHVibGljL2FwcC9wbHVnaW5zL3BhbmVsL3RhYmxlLW9sZC9jb2x1bW5fb3B0aW9ucy5odG1sJyxcbiAgICBjb250cm9sbGVyOiBDb2x1bW5PcHRpb25zQ3RybCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGZpbmQsIG1hcCwgd2l0aG91dCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IHRyYW5zZm9ybWVycyB9IGZyb20gJy4vdHJhbnNmb3JtZXJzJztcbmltcG9ydCB7IENvbHVtblN0eWxlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVBhbmVsRWRpdG9yQ3RybCB7XG4gIHBhbmVsOiBhbnk7XG4gIHBhbmVsQ3RybDogYW55O1xuICB0cmFuc2Zvcm1lcnM6IGFueTtcbiAgZm9udFNpemVzOiBhbnk7XG4gIGFkZENvbHVtblNlZ21lbnQ6IGFueTtcbiAgZ2V0Q29sdW1uTmFtZXM6IGFueTtcbiAgY2FuU2V0Q29sdW1ucyA9IGZhbHNlO1xuICBjb2x1bW5zSGVscE1lc3NhZ2UgPSAnJztcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55LCBwcml2YXRlIHVpU2VnbWVudFNydjogYW55KSB7XG4gICAgJHNjb3BlLmVkaXRvciA9IHRoaXM7XG4gICAgdGhpcy5wYW5lbEN0cmwgPSAkc2NvcGUuY3RybDtcbiAgICB0aGlzLnBhbmVsID0gdGhpcy5wYW5lbEN0cmwucGFuZWw7XG4gICAgdGhpcy50cmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnM7XG4gICAgdGhpcy5mb250U2l6ZXMgPSBbJzgwJScsICc5MCUnLCAnMTAwJScsICcxMTAlJywgJzEyMCUnLCAnMTMwJScsICcxNTAlJywgJzE2MCUnLCAnMTgwJScsICcyMDAlJywgJzIyMCUnLCAnMjUwJSddO1xuICAgIHRoaXMuYWRkQ29sdW1uU2VnbWVudCA9IHVpU2VnbWVudFNydi5uZXdQbHVzQnV0dG9uKCk7XG4gICAgdGhpcy51cGRhdGVUcmFuc2Zvcm1IaW50cygpO1xuICB9XG5cbiAgdXBkYXRlVHJhbnNmb3JtSGludHMoKSB7XG4gICAgdGhpcy5jYW5TZXRDb2x1bW5zID0gZmFsc2U7XG4gICAgdGhpcy5jb2x1bW5zSGVscE1lc3NhZ2UgPSAnJztcblxuICAgIHN3aXRjaCAodGhpcy5wYW5lbC50cmFuc2Zvcm0pIHtcbiAgICAgIGNhc2UgJ3RpbWVzZXJpZXNfYWdncmVnYXRpb25zJzoge1xuICAgICAgICB0aGlzLmNhblNldENvbHVtbnMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2pzb24nOiB7XG4gICAgICAgIHRoaXMuY2FuU2V0Q29sdW1ucyA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAndGFibGUnOiB7XG4gICAgICAgIHRoaXMuY29sdW1uc0hlbHBNZXNzYWdlID0gJ0NvbHVtbnMgYW5kIHRoZWlyIG9yZGVyIGFyZSBkZXRlcm1pbmVkIGJ5IHRoZSBkYXRhIHF1ZXJ5JztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRDb2x1bW5PcHRpb25zKCkge1xuICAgIGlmICghdGhpcy5wYW5lbEN0cmwuZGF0YVJhdykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgfVxuICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLnRyYW5zZm9ybWVyc1t0aGlzLnBhbmVsLnRyYW5zZm9ybV0uZ2V0Q29sdW1ucyh0aGlzLnBhbmVsQ3RybC5kYXRhUmF3KTtcbiAgICBjb25zdCBzZWdtZW50cyA9IG1hcChjb2x1bW5zLCAoYzogYW55KSA9PiB0aGlzLnVpU2VnbWVudFNydi5uZXdTZWdtZW50KHsgdmFsdWU6IGMudGV4dCB9KSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWdtZW50cyk7XG4gIH1cblxuICBhZGRDb2x1bW4oKSB7XG4gICAgY29uc3QgY29sdW1ucyA9IHRyYW5zZm9ybWVyc1t0aGlzLnBhbmVsLnRyYW5zZm9ybV0uZ2V0Q29sdW1ucyh0aGlzLnBhbmVsQ3RybC5kYXRhUmF3KTtcbiAgICBjb25zdCBjb2x1bW46IGFueSA9IGZpbmQoY29sdW1ucywgeyB0ZXh0OiB0aGlzLmFkZENvbHVtblNlZ21lbnQudmFsdWUgfSk7XG5cbiAgICBpZiAoY29sdW1uKSB7XG4gICAgICB0aGlzLnBhbmVsLmNvbHVtbnMucHVzaChjb2x1bW4pO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwbHVzQnV0dG9uID0gdGhpcy51aVNlZ21lbnRTcnYubmV3UGx1c0J1dHRvbigpO1xuICAgIHRoaXMuYWRkQ29sdW1uU2VnbWVudC5odG1sID0gcGx1c0J1dHRvbi5odG1sO1xuICAgIHRoaXMuYWRkQ29sdW1uU2VnbWVudC52YWx1ZSA9IHBsdXNCdXR0b24udmFsdWU7XG4gIH1cblxuICB0cmFuc2Zvcm1DaGFuZ2VkKCkge1xuICAgIHRoaXMucGFuZWwuY29sdW1ucyA9IFtdO1xuICAgIGlmICh0aGlzLnBhbmVsLnRyYW5zZm9ybSA9PT0gJ2Fubm90YXRpb25zJykge1xuICAgICAgdGhpcy5wYW5lbEN0cmwucmVmcmVzaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5wYW5lbC50cmFuc2Zvcm0gPT09ICd0aW1lc2VyaWVzX2FnZ3JlZ2F0aW9ucycpIHtcbiAgICAgICAgdGhpcy5wYW5lbC5jb2x1bW5zLnB1c2goeyB0ZXh0OiAnQXZnJywgdmFsdWU6ICdhdmcnIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZVRyYW5zZm9ybUhpbnRzKCk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnBhbmVsQ3RybC5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbW92ZUNvbHVtbihjb2x1bW46IENvbHVtblN0eWxlKSB7XG4gICAgdGhpcy5wYW5lbC5jb2x1bW5zID0gd2l0aG91dCh0aGlzLnBhbmVsLmNvbHVtbnMsIGNvbHVtbik7XG4gICAgdGhpcy5wYW5lbEN0cmwucmVuZGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhYmxlUGFuZWxFZGl0b3IodWlTZWdtZW50U3J2OiBhbnkpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgc2NvcGU6IHRydWUsXG4gICAgdGVtcGxhdGVVcmw6ICdwdWJsaWMvYXBwL3BsdWdpbnMvcGFuZWwvdGFibGUtb2xkL2VkaXRvci5odG1sJyxcbiAgICBjb250cm9sbGVyOiBUYWJsZVBhbmVsRWRpdG9yQ3RybCxcbiAgfTtcbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBkZWZhdWx0cyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBpc1RhYmxlRGF0YSwgUGFuZWxFdmVudHMsIFBhbmVsUGx1Z2luLCBQYW5lbFByb3BzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJ2FwcC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBhcHBseUZpbHRlckZyb21UYWJsZSB9IGZyb20gJ2FwcC9mZWF0dXJlcy92YXJpYWJsZXMvYWRob2MvYWN0aW9ucyc7XG5pbXBvcnQgeyBNZXRyaWNzUGFuZWxDdHJsIH0gZnJvbSAnYXBwL3BsdWdpbnMvc2RrJztcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSAnYXBwL3N0b3JlL3N0b3JlJztcblxuaW1wb3J0IHsgY29sdW1uT3B0aW9uc1RhYiB9IGZyb20gJy4vY29sdW1uX29wdGlvbnMnO1xuaW1wb3J0IHsgdGFibGVQYW5lbEVkaXRvciB9IGZyb20gJy4vZWRpdG9yJztcbmltcG9ydCB7IFRhYmxlUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IHRyYW5zZm9ybURhdGFUb1RhYmxlIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVQYW5lbEN0cmwgZXh0ZW5kcyBNZXRyaWNzUGFuZWxDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ21vZHVsZS5odG1sJztcblxuICBwYWdlSW5kZXg6IG51bWJlcjtcbiAgZGF0YVJhdzogYW55O1xuICB0YWJsZTogYW55O1xuICByZW5kZXJlcjogYW55O1xuICBwYW5lbEhhc1Jvd0NvbG9yTW9kZTogYm9vbGVhbjtcbiAgcGFuZWxIYXNMaW5rczogYm9vbGVhbjtcblxuICBwYW5lbERlZmF1bHRzOiBhbnkgPSB7XG4gICAgdGFyZ2V0czogW3t9XSxcbiAgICB0cmFuc2Zvcm06ICd0aW1lc2VyaWVzX3RvX2NvbHVtbnMnLFxuICAgIHBhZ2VTaXplOiBudWxsLFxuICAgIHNob3dIZWFkZXI6IHRydWUsXG4gICAgc3R5bGVzOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgcGF0dGVybjogJ1RpbWUnLFxuICAgICAgICBhbGlhczogJ1RpbWUnLFxuICAgICAgICBkYXRlRm9ybWF0OiAnWVlZWS1NTS1ERCBISDptbTpzcycsXG4gICAgICAgIGFsaWduOiAnYXV0bycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1bml0OiAnc2hvcnQnLFxuICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgYWxpYXM6ICcnLFxuICAgICAgICBkZWNpbWFsczogMixcbiAgICAgICAgY29sb3JzOiBbJ3JnYmEoMjQ1LCA1NCwgNTQsIDAuOSknLCAncmdiYSgyMzcsIDEyOSwgNDAsIDAuODkpJywgJ3JnYmEoNTAsIDE3MiwgNDUsIDAuOTcpJ10sXG4gICAgICAgIGNvbG9yTW9kZTogbnVsbCxcbiAgICAgICAgcGF0dGVybjogJy8uKi8nLFxuICAgICAgICB0aHJlc2hvbGRzOiBbXSxcbiAgICAgICAgYWxpZ246ICdyaWdodCcsXG4gICAgICB9LFxuICAgIF0sXG4gICAgY29sdW1uczogW10sXG5cbiAgICBmb250U2l6ZTogJzEwMCUnLFxuICAgIHNvcnQ6IHsgY29sOiAwLCBkZXNjOiB0cnVlIH0sXG4gIH07XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSwgJGluamVjdG9yOiBhbnksIHByaXZhdGUgYW5ub3RhdGlvbnNTcnY6IGFueSwgcHJpdmF0ZSAkc2FuaXRpemU6IGFueSkge1xuICAgIHN1cGVyKCRzY29wZSwgJGluamVjdG9yKTtcblxuICAgIHRoaXMucGFnZUluZGV4ID0gMDtcblxuICAgIGlmICh0aGlzLnBhbmVsLnN0eWxlcyA9PT0gdm9pZCAwKSB7XG4gICAgICB0aGlzLnBhbmVsLnN0eWxlcyA9IHRoaXMucGFuZWwuY29sdW1ucztcbiAgICAgIHRoaXMucGFuZWwuY29sdW1ucyA9IHRoaXMucGFuZWwuZmllbGRzO1xuICAgICAgZGVsZXRlIHRoaXMucGFuZWwuY29sdW1ucztcbiAgICAgIGRlbGV0ZSB0aGlzLnBhbmVsLmZpZWxkcztcbiAgICB9XG5cbiAgICBkZWZhdWx0cyh0aGlzLnBhbmVsLCB0aGlzLnBhbmVsRGVmYXVsdHMpO1xuXG4gICAgdGhpcy5wYW5lbEhhc1Jvd0NvbG9yTW9kZSA9IEJvb2xlYW4odGhpcy5wYW5lbC5zdHlsZXMuZmluZCgoc3R5bGU6IGFueSkgPT4gc3R5bGUuY29sb3JNb2RlID09PSAncm93JykpO1xuICAgIHRoaXMucGFuZWxIYXNMaW5rcyA9IEJvb2xlYW4odGhpcy5wYW5lbC5zdHlsZXMuZmluZCgoc3R5bGU6IGFueSkgPT4gc3R5bGUubGluaykpO1xuXG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMuZGF0YVJlY2VpdmVkLCB0aGlzLm9uRGF0YVJlY2VpdmVkLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLmRhdGFTbmFwc2hvdExvYWQsIHRoaXMub25EYXRhUmVjZWl2ZWQuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5ldmVudHMub24oUGFuZWxFdmVudHMuZWRpdE1vZGVJbml0aWFsaXplZCwgdGhpcy5vbkluaXRFZGl0TW9kZS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG9uSW5pdEVkaXRNb2RlKCkge1xuICAgIHRoaXMuYWRkRWRpdG9yVGFiKCdPcHRpb25zJywgdGFibGVQYW5lbEVkaXRvciwgMik7XG4gICAgdGhpcy5hZGRFZGl0b3JUYWIoJ0NvbHVtbiBTdHlsZXMnLCBjb2x1bW5PcHRpb25zVGFiLCAzKTtcbiAgfVxuXG4gIG1pZ3JhdGVUb1BhbmVsKHR5cGU6IHN0cmluZykge1xuICAgIHRoaXMub25QbHVnaW5UeXBlQ2hhbmdlKGNvbmZpZy5wYW5lbHNbdHlwZV0pO1xuICB9XG5cbiAgaXNzdWVRdWVyaWVzKGRhdGFzb3VyY2U6IGFueSkge1xuICAgIHRoaXMucGFnZUluZGV4ID0gMDtcblxuICAgIGlmICh0aGlzLnBhbmVsLnRyYW5zZm9ybSA9PT0gJ2Fubm90YXRpb25zJykge1xuICAgICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbnNTcnZcbiAgICAgICAgLmdldEFubm90YXRpb25zKHtcbiAgICAgICAgICBkYXNoYm9hcmQ6IHRoaXMuZGFzaGJvYXJkLFxuICAgICAgICAgIHBhbmVsOiB0aGlzLnBhbmVsLFxuICAgICAgICAgIHJhbmdlOiB0aGlzLnJhbmdlLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigoYW5ubzogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5kYXRhUmF3ID0gYW5ubztcbiAgICAgICAgICB0aGlzLnBhZ2VJbmRleCA9IDA7XG4gICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICByZXR1cm4geyBkYXRhOiB0aGlzLmRhdGFSYXcgfTsgLy8gTm90IHVzZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLmlzc3VlUXVlcmllcyhkYXRhc291cmNlKTtcbiAgfVxuXG4gIG9uRGF0YVJlY2VpdmVkKGRhdGFMaXN0OiBhbnkpIHtcbiAgICB0aGlzLmRhdGFSYXcgPSBkYXRhTGlzdDtcbiAgICB0aGlzLnBhZ2VJbmRleCA9IDA7XG5cbiAgICAvLyBhdXRvbWF0aWNhbGx5IGNvcnJlY3QgdHJhbnNmb3JtIG1vZGUgYmFzZWQgb24gZGF0YVxuICAgIGlmICh0aGlzLmRhdGFSYXcgJiYgdGhpcy5kYXRhUmF3Lmxlbmd0aCkge1xuICAgICAgaWYgKGlzVGFibGVEYXRhKHRoaXMuZGF0YVJhd1swXSkpIHtcbiAgICAgICAgdGhpcy5wYW5lbC50cmFuc2Zvcm0gPSAndGFibGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YVJhd1swXS50eXBlID09PSAnZG9jcycpIHtcbiAgICAgICAgICB0aGlzLnBhbmVsLnRyYW5zZm9ybSA9ICdqc29uJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5wYW5lbC50cmFuc2Zvcm0gPT09ICd0YWJsZScgfHwgdGhpcy5wYW5lbC50cmFuc2Zvcm0gPT09ICdqc29uJykge1xuICAgICAgICAgICAgdGhpcy5wYW5lbC50cmFuc2Zvcm0gPSAndGltZXNlcmllc190b19yb3dzJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMudGFibGUgPSB0cmFuc2Zvcm1EYXRhVG9UYWJsZSh0aGlzLmRhdGFSYXcsIHRoaXMucGFuZWwpO1xuICAgIHRoaXMudGFibGUuc29ydCh0aGlzLnBhbmVsLnNvcnQpO1xuXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUYWJsZVJlbmRlcmVyKFxuICAgICAgdGhpcy5wYW5lbCxcbiAgICAgIHRoaXMudGFibGUsXG4gICAgICB0aGlzLmRhc2hib2FyZC5nZXRUaW1lem9uZSgpLFxuICAgICAgdGhpcy4kc2FuaXRpemUsXG4gICAgICB0aGlzLnRlbXBsYXRlU3J2LFxuICAgICAgY29uZmlnLnRoZW1lXG4gICAgKTtcblxuICAgIHJldHVybiBzdXBlci5yZW5kZXIodGhpcy50YWJsZSk7XG4gIH1cblxuICB0b2dnbGVDb2x1bW5Tb3J0KGNvbDogYW55LCBjb2xJbmRleDogYW55KSB7XG4gICAgLy8gcmVtb3ZlIHNvcnQgZmxhZyBmcm9tIGN1cnJlbnQgY29sdW1uXG4gICAgaWYgKHRoaXMudGFibGUuY29sdW1uc1t0aGlzLnBhbmVsLnNvcnQuY29sXSkge1xuICAgICAgdGhpcy50YWJsZS5jb2x1bW5zW3RoaXMucGFuZWwuc29ydC5jb2xdLnNvcnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYW5lbC5zb3J0LmNvbCA9PT0gY29sSW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLnBhbmVsLnNvcnQuZGVzYykge1xuICAgICAgICB0aGlzLnBhbmVsLnNvcnQuZGVzYyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYW5lbC5zb3J0LmNvbCA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFuZWwuc29ydC5jb2wgPSBjb2xJbmRleDtcbiAgICAgIHRoaXMucGFuZWwuc29ydC5kZXNjID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGxpbmsoc2NvcGU6IGFueSwgZWxlbTogSlF1ZXJ5LCBhdHRyczogYW55LCBjdHJsOiBUYWJsZVBhbmVsQ3RybCkge1xuICAgIGxldCBkYXRhOiBhbnk7XG4gICAgY29uc3QgcGFuZWwgPSBjdHJsLnBhbmVsO1xuICAgIGxldCBwYWdlQ291bnQgPSAwO1xuXG4gICAgZnVuY3Rpb24gZ2V0VGFibGVIZWlnaHQoKSB7XG4gICAgICBsZXQgcGFuZWxIZWlnaHQgPSBjdHJsLmhlaWdodDtcblxuICAgICAgaWYgKHBhZ2VDb3VudCA+IDEpIHtcbiAgICAgICAgcGFuZWxIZWlnaHQgLT0gMjY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYW5lbEhlaWdodCAtIDMxICsgJ3B4JztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUYWJsZVJvd3ModGJvZHlFbGVtOiBKUXVlcnkpIHtcbiAgICAgIGN0cmwucmVuZGVyZXIuc2V0VGFibGUoZGF0YSk7XG4gICAgICB0Ym9keUVsZW0uZW1wdHkoKTtcbiAgICAgIHRib2R5RWxlbS5odG1sKGN0cmwucmVuZGVyZXIucmVuZGVyKGN0cmwucGFnZUluZGV4KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoUGFnZShlOiBhbnkpIHtcbiAgICAgIGNvbnN0IGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgY3RybC5wYWdlSW5kZXggPSBwYXJzZUludChlbC50ZXh0KCksIDEwKSAtIDE7XG4gICAgICByZW5kZXJQYW5lbCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFBhZ2luYXRpb25Db250cm9scyhmb290ZXJFbGVtOiBKUXVlcnkpIHtcbiAgICAgIGZvb3RlckVsZW0uZW1wdHkoKTtcblxuICAgICAgY29uc3QgcGFnZVNpemUgPSBwYW5lbC5wYWdlU2l6ZSB8fCAxMDA7XG4gICAgICBwYWdlQ291bnQgPSBNYXRoLmNlaWwoZGF0YS5yb3dzLmxlbmd0aCAvIHBhZ2VTaXplKTtcbiAgICAgIGlmIChwYWdlQ291bnQgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGFydFBhZ2UgPSBNYXRoLm1heChjdHJsLnBhZ2VJbmRleCAtIDMsIDApO1xuICAgICAgY29uc3QgZW5kUGFnZSA9IE1hdGgubWluKHBhZ2VDb3VudCwgc3RhcnRQYWdlICsgOSk7XG5cbiAgICAgIGNvbnN0IHBhZ2luYXRpb25MaXN0ID0gJCgnPHVsPjwvdWw+Jyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFBhZ2U7IGkgPCBlbmRQYWdlOyBpKyspIHtcbiAgICAgICAgY29uc3QgYWN0aXZlQ2xhc3MgPSBpID09PSBjdHJsLnBhZ2VJbmRleCA/ICdhY3RpdmUnIDogJyc7XG4gICAgICAgIGNvbnN0IHBhZ2VMaW5rRWxlbSA9ICQoXG4gICAgICAgICAgJzxsaT48YSBjbGFzcz1cInRhYmxlLXBhbmVsLXBhZ2UtbGluayBwb2ludGVyICcgKyBhY3RpdmVDbGFzcyArICdcIj4nICsgKGkgKyAxKSArICc8L2E+PC9saT4nXG4gICAgICAgICk7XG4gICAgICAgIHBhZ2luYXRpb25MaXN0LmFwcGVuZChwYWdlTGlua0VsZW0pO1xuICAgICAgfVxuXG4gICAgICBmb290ZXJFbGVtLmFwcGVuZChwYWdpbmF0aW9uTGlzdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUGFuZWwoKSB7XG4gICAgICBjb25zdCBwYW5lbEVsZW0gPSBlbGVtLnBhcmVudHMoJy5wYW5lbC1jb250ZW50Jyk7XG4gICAgICBjb25zdCByb290RWxlbSA9IGVsZW0uZmluZCgnLnRhYmxlLXBhbmVsLXNjcm9sbCcpO1xuICAgICAgY29uc3QgdGJvZHlFbGVtID0gZWxlbS5maW5kKCd0Ym9keScpO1xuICAgICAgY29uc3QgZm9vdGVyRWxlbSA9IGVsZW0uZmluZCgnLnRhYmxlLXBhbmVsLWZvb3RlcicpO1xuXG4gICAgICBlbGVtLmNzcyh7ICdmb250LXNpemUnOiBwYW5lbC5mb250U2l6ZSB9KTtcbiAgICAgIHBhbmVsRWxlbS5hZGRDbGFzcygndGFibGUtcGFuZWwtY29udGVudCcpO1xuXG4gICAgICBhcHBlbmRUYWJsZVJvd3ModGJvZHlFbGVtKTtcbiAgICAgIGFwcGVuZFBhZ2luYXRpb25Db250cm9scyhmb290ZXJFbGVtKTtcblxuICAgICAgcm9vdEVsZW0uY3NzKHsgJ21heC1oZWlnaHQnOiBnZXRUYWJsZUhlaWdodCgpIH0pO1xuICAgIH1cblxuICAgIC8vIGhvb2sgdXAgbGluayB0b29sdGlwc1xuICAgIGVsZW0udG9vbHRpcCh7XG4gICAgICBzZWxlY3RvcjogJ1tkYXRhLWxpbmstdG9vbHRpcF0nLFxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gYWRkRmlsdGVyQ2xpY2tlZChlOiBhbnkpIHtcbiAgICAgIGNvbnN0IGZpbHRlckRhdGEgPSAkKGUuY3VycmVudFRhcmdldCkuZGF0YSgpO1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZGF0YXNvdXJjZTogcGFuZWwuZGF0YXNvdXJjZSxcbiAgICAgICAga2V5OiBkYXRhLmNvbHVtbnNbZmlsdGVyRGF0YS5jb2x1bW5dLnRleHQsXG4gICAgICAgIHZhbHVlOiBkYXRhLnJvd3NbZmlsdGVyRGF0YS5yb3ddW2ZpbHRlckRhdGEuY29sdW1uXSxcbiAgICAgICAgb3BlcmF0b3I6IGZpbHRlckRhdGEub3BlcmF0b3IsXG4gICAgICB9O1xuXG4gICAgICBkaXNwYXRjaChhcHBseUZpbHRlckZyb21UYWJsZShvcHRpb25zKSk7XG4gICAgfVxuXG4gICAgZWxlbS5vbignY2xpY2snLCAnLnRhYmxlLXBhbmVsLXBhZ2UtbGluaycsIHN3aXRjaFBhZ2UpO1xuICAgIGVsZW0ub24oJ2NsaWNrJywgJy50YWJsZS1wYW5lbC1maWx0ZXItbGluaycsIGFkZEZpbHRlckNsaWNrZWQpO1xuXG4gICAgY29uc3QgdW5iaW5kRGVzdHJveSA9IHNjb3BlLiRvbignJGRlc3Ryb3knLCAoKSA9PiB7XG4gICAgICBlbGVtLm9mZignY2xpY2snLCAnLnRhYmxlLXBhbmVsLXBhZ2UtbGluaycpO1xuICAgICAgZWxlbS5vZmYoJ2NsaWNrJywgJy50YWJsZS1wYW5lbC1maWx0ZXItbGluaycpO1xuICAgICAgdW5iaW5kRGVzdHJveSgpO1xuICAgIH0pO1xuXG4gICAgY3RybC5ldmVudHMub24oUGFuZWxFdmVudHMucmVuZGVyLCAocmVuZGVyRGF0YTogYW55KSA9PiB7XG4gICAgICBkYXRhID0gcmVuZGVyRGF0YSB8fCBkYXRhO1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmVuZGVyUGFuZWwoKTtcbiAgICAgIH1cbiAgICAgIGN0cmwucmVuZGVyaW5nQ29tcGxldGVkKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBsdWdpbiA9IG5ldyBQYW5lbFBsdWdpbihudWxsIGFzIHVua25vd24gYXMgQ29tcG9uZW50VHlwZTxQYW5lbFByb3BzPGFueT4+KTtcbnBsdWdpbi5hbmd1bGFyUGFuZWxDdHJsID0gVGFibGVQYW5lbEN0cmw7XG5wbHVnaW4uc2V0Tm9QYWRkaW5nKCk7XG4iLCJpbXBvcnQgeyBmaW5kLCBmaXJzdCwgaXNBcnJheSwgaXNTdHJpbmcsIGVzY2FwZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7XG4gIGVzY2FwZVN0cmluZ0ZvclJlZ2V4LFxuICBmb3JtYXR0ZWRWYWx1ZVRvU3RyaW5nLFxuICBnZXRWYWx1ZUZvcm1hdCxcbiAgU2NvcGVkVmFycyxcbiAgc3RyaW5nU3RhcnRzQXNSZWdFeCxcbiAgc3RyaW5nVG9Kc1JlZ2V4LFxuICB0ZXh0VXRpbCxcbiAgdW5Fc2NhcGVTdHJpbmdGcm9tUmVnZXgsXG4gIFRpbWVab25lLFxuICBkYXRlVGltZUZvcm1hdElTTyxcbiAgZGF0ZVRpbWVGb3JtYXQsXG4gIGdldENvbG9yRm9yVGhlbWUsXG4gIEdyYWZhbmFUaGVtZSxcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXRUZW1wbGF0ZVNydiwgVGVtcGxhdGVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IHsgQ29sdW1uT3B0aW9uc0N0cmwgfSBmcm9tICcuL2NvbHVtbl9vcHRpb25zJztcbmltcG9ydCB7IENvbHVtblJlbmRlciwgVGFibGVSZW5kZXJNb2RlbCwgQ29sdW1uU3R5bGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIFRhYmxlUmVuZGVyZXIge1xuICBmb3JtYXR0ZXJzOiBhbnlbXSA9IFtdO1xuICBjb2xvclN0YXRlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwYW5lbDogeyBzdHlsZXM6IENvbHVtblN0eWxlW107IHBhZ2VTaXplOiBudW1iZXIgfSxcbiAgICBwcml2YXRlIHRhYmxlOiBUYWJsZVJlbmRlck1vZGVsLFxuICAgIHByaXZhdGUgdGltZVpvbmU6IFRpbWVab25lLFxuICAgIHByaXZhdGUgc2FuaXRpemU6ICh2OiBhbnkpID0+IGFueSxcbiAgICBwcml2YXRlIHRlbXBsYXRlU3J2OiBUZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KCksXG4gICAgcHJpdmF0ZSB0aGVtZTogR3JhZmFuYVRoZW1lXG4gICkge1xuICAgIHRoaXMuaW5pdENvbHVtbnMoKTtcbiAgfVxuXG4gIHNldFRhYmxlKHRhYmxlOiBUYWJsZVJlbmRlck1vZGVsKSB7XG4gICAgdGhpcy50YWJsZSA9IHRhYmxlO1xuXG4gICAgdGhpcy5pbml0Q29sdW1ucygpO1xuICB9XG5cbiAgaW5pdENvbHVtbnMoKSB7XG4gICAgdGhpcy5mb3JtYXR0ZXJzID0gW107XG4gICAgdGhpcy5jb2xvclN0YXRlID0ge307XG5cbiAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgdGhpcy50YWJsZS5jb2x1bW5zLmxlbmd0aDsgY29sSW5kZXgrKykge1xuICAgICAgY29uc3QgY29sdW1uID0gdGhpcy50YWJsZS5jb2x1bW5zW2NvbEluZGV4XTtcbiAgICAgIGNvbHVtbi50aXRsZSA9IGNvbHVtbi50ZXh0O1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFuZWwuc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gdGhpcy5wYW5lbC5zdHlsZXNbaV07XG5cbiAgICAgICAgY29uc3QgZXNjYXBlZFBhdHRlcm4gPSBzdHJpbmdTdGFydHNBc1JlZ0V4KHN0eWxlLnBhdHRlcm4pXG4gICAgICAgICAgPyBzdHlsZS5wYXR0ZXJuXG4gICAgICAgICAgOiBlc2NhcGVTdHJpbmdGb3JSZWdleCh1bkVzY2FwZVN0cmluZ0Zyb21SZWdleChzdHlsZS5wYXR0ZXJuKSk7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gc3RyaW5nVG9Kc1JlZ2V4KGVzY2FwZWRQYXR0ZXJuKTtcbiAgICAgICAgaWYgKGNvbHVtbi50ZXh0Lm1hdGNoKHJlZ2V4KSkge1xuICAgICAgICAgIGNvbHVtbi5zdHlsZSA9IHN0eWxlO1xuXG4gICAgICAgICAgaWYgKHN0eWxlLmFsaWFzKSB7XG4gICAgICAgICAgICBjb2x1bW4udGl0bGUgPSB0ZXh0VXRpbC5lc2NhcGVIdG1sKGNvbHVtbi50ZXh0LnJlcGxhY2UocmVnZXgsIHN0eWxlLmFsaWFzKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5mb3JtYXR0ZXJzW2NvbEluZGV4XSA9IHRoaXMuY3JlYXRlQ29sdW1uRm9ybWF0dGVyKGNvbHVtbik7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q29sb3JGb3JWYWx1ZSh2YWx1ZTogbnVtYmVyLCBzdHlsZTogQ29sdW1uU3R5bGUpIHtcbiAgICBpZiAoIXN0eWxlLnRocmVzaG9sZHMgfHwgIXN0eWxlLmNvbG9ycykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBzdHlsZS50aHJlc2hvbGRzLmxlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgICAgaWYgKHZhbHVlID49IHN0eWxlLnRocmVzaG9sZHNbaSAtIDFdKSB7XG4gICAgICAgIHJldHVybiBnZXRDb2xvckZvclRoZW1lKHN0eWxlLmNvbG9yc1tpXSwgdGhpcy50aGVtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBnZXRDb2xvckZvclRoZW1lKGZpcnN0KHN0eWxlLmNvbG9ycyksIHRoaXMudGhlbWUpO1xuICB9XG5cbiAgZGVmYXVsdENlbGxGb3JtYXR0ZXIodjogYW55LCBzdHlsZTogQ29sdW1uU3R5bGUpIHtcbiAgICBpZiAodiA9PT0gbnVsbCB8fCB2ID09PSB2b2lkIDAgfHwgdiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodikpIHtcbiAgICAgIHYgPSB2LmpvaW4oJywgJyk7XG4gICAgfVxuXG4gICAgaWYgKHN0eWxlICYmIHN0eWxlLnNhbml0aXplKSB7XG4gICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZSh2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVzY2FwZSh2KTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVDb2x1bW5Gb3JtYXR0ZXIoY29sdW1uOiBDb2x1bW5SZW5kZXIpIHtcbiAgICBpZiAoIWNvbHVtbi5zdHlsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdENlbGxGb3JtYXR0ZXI7XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5zdHlsZS50eXBlID09PSAnaGlkZGVuJykge1xuICAgICAgcmV0dXJuICh2OiBhbnkpOiB1bmRlZmluZWQgPT4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4uc3R5bGUudHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICByZXR1cm4gKHY6IGFueSkgPT4ge1xuICAgICAgICBpZiAodiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gJy0nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQXJyYXkodikpIHtcbiAgICAgICAgICB2ID0gdlswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGlzIGFuIGVwb2NoIChudW1lcmljIHN0cmluZyBhbmQgbGVuID4gMTIpXG4gICAgICAgIGlmIChpc1N0cmluZyh2KSAmJiAhaXNOYU4odiBhcyBhbnkpICYmIHYubGVuZ3RoID4gMTIpIHtcbiAgICAgICAgICB2ID0gcGFyc2VJbnQodiwgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb2x1bW4uc3R5bGUuZGF0ZUZvcm1hdCkge1xuICAgICAgICAgIHJldHVybiBkYXRlVGltZUZvcm1hdElTTyh2LCB7XG4gICAgICAgICAgICB0aW1lWm9uZTogdGhpcy50aW1lWm9uZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRlVGltZUZvcm1hdCh2LCB7XG4gICAgICAgICAgZm9ybWF0OiBjb2x1bW4uc3R5bGUuZGF0ZUZvcm1hdCxcbiAgICAgICAgICB0aW1lWm9uZTogdGhpcy50aW1lWm9uZSxcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4uc3R5bGUudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAodjogYW55KTogYW55ID0+IHtcbiAgICAgICAgaWYgKGlzQXJyYXkodikpIHtcbiAgICAgICAgICB2ID0gdi5qb2luKCcsICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFwcGluZ1R5cGUgPSBjb2x1bW4uc3R5bGUubWFwcGluZ1R5cGUgfHwgMDtcblxuICAgICAgICBpZiAobWFwcGluZ1R5cGUgPT09IDEgJiYgY29sdW1uLnN0eWxlLnZhbHVlTWFwcykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uLnN0eWxlLnZhbHVlTWFwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbWFwID0gY29sdW1uLnN0eWxlLnZhbHVlTWFwc1tpXTtcblxuICAgICAgICAgICAgaWYgKHYgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgaWYgKG1hcC52YWx1ZSA9PT0gJ251bGwnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hcC50ZXh0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBbGxvdyBib3RoIG51bWVyaWMgYW5kIHN0cmluZyB2YWx1ZXMgdG8gYmUgbWFwcGVkXG4gICAgICAgICAgICBpZiAoKCFpc1N0cmluZyh2KSAmJiBOdW1iZXIobWFwLnZhbHVlKSA9PT0gTnVtYmVyKHYpKSB8fCBtYXAudmFsdWUgPT09IHYpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRDb2xvclN0YXRlKHYsIGNvbHVtbi5zdHlsZSk7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRDZWxsRm9ybWF0dGVyKG1hcC50ZXh0LCBjb2x1bW4uc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXBwaW5nVHlwZSA9PT0gMiAmJiBjb2x1bW4uc3R5bGUucmFuZ2VNYXBzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW4uc3R5bGUucmFuZ2VNYXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBtYXAgPSBjb2x1bW4uc3R5bGUucmFuZ2VNYXBzW2ldO1xuXG4gICAgICAgICAgICBpZiAodiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBpZiAobWFwLmZyb20gPT09ICdudWxsJyAmJiBtYXAudG8gPT09ICdudWxsJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXAudGV4dDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE51bWJlcihtYXAuZnJvbSkgPD0gTnVtYmVyKHYpICYmIE51bWJlcihtYXAudG8pID49IE51bWJlcih2KSkge1xuICAgICAgICAgICAgICB0aGlzLnNldENvbG9yU3RhdGUodiwgY29sdW1uLnN0eWxlKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdENlbGxGb3JtYXR0ZXIobWFwLnRleHQsIGNvbHVtbi5zdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHYgPT09IG51bGwgfHwgdiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgcmV0dXJuICctJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0Q29sb3JTdGF0ZSh2LCBjb2x1bW4uc3R5bGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q2VsbEZvcm1hdHRlcih2LCBjb2x1bW4uc3R5bGUpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY29sdW1uLnN0eWxlLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICBjb25zdCB2YWx1ZUZvcm1hdHRlciA9IGdldFZhbHVlRm9ybWF0KGNvbHVtbi51bml0IHx8IGNvbHVtbi5zdHlsZS51bml0KTtcblxuICAgICAgcmV0dXJuICh2OiBhbnkpOiBhbnkgPT4ge1xuICAgICAgICBpZiAodiA9PT0gbnVsbCB8fCB2ID09PSB2b2lkIDApIHtcbiAgICAgICAgICByZXR1cm4gJy0nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTmFOKHYpIHx8IGlzQXJyYXkodikpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5kZWZhdWx0Q2VsbEZvcm1hdHRlcih2LCBjb2x1bW4uc3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRDb2xvclN0YXRlKHYsIGNvbHVtbi5zdHlsZSk7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRWYWx1ZVRvU3RyaW5nKHZhbHVlRm9ybWF0dGVyKHYsIGNvbHVtbi5zdHlsZS5kZWNpbWFscywgbnVsbCkpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRDZWxsRm9ybWF0dGVyKHZhbHVlLCBjb2x1bW4uc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICBzZXRDb2xvclN0YXRlKHZhbHVlOiBhbnksIHN0eWxlOiBDb2x1bW5TdHlsZSkge1xuICAgIGlmICghc3R5bGUuY29sb3JNb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDAgfHwgaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgIGlmIChpc05hTihudW1lcmljVmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb2xvclN0YXRlW3N0eWxlLmNvbG9yTW9kZV0gPSB0aGlzLmdldENvbG9yRm9yVmFsdWUobnVtZXJpY1ZhbHVlLCBzdHlsZSk7XG4gIH1cblxuICByZW5kZXJSb3dWYXJpYWJsZXMocm93SW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IHNjb3BlZFZhcnM6IFNjb3BlZFZhcnMgPSB7fTtcbiAgICBsZXQgY2VsbFZhcmlhYmxlO1xuICAgIGNvbnN0IHJvdyA9IHRoaXMudGFibGUucm93c1tyb3dJbmRleF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3cubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNlbGxWYXJpYWJsZSA9IGBfX2NlbGxfJHtpfWA7XG4gICAgICBzY29wZWRWYXJzW2NlbGxWYXJpYWJsZV0gPSB7IHZhbHVlOiByb3dbaV0sIHRleHQ6IHJvd1tpXSA/IHJvd1tpXS50b1N0cmluZygpIDogJycgfTtcbiAgICB9XG4gICAgcmV0dXJuIHNjb3BlZFZhcnM7XG4gIH1cblxuICBmb3JtYXRDb2x1bW5WYWx1ZShjb2xJbmRleDogbnVtYmVyLCB2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgZm10ID0gdGhpcy5mb3JtYXR0ZXJzW2NvbEluZGV4XTtcbiAgICBpZiAoZm10KSB7XG4gICAgICByZXR1cm4gZm10KHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVuZGVyQ2VsbChjb2x1bW5JbmRleDogbnVtYmVyLCByb3dJbmRleDogbnVtYmVyLCB2YWx1ZTogYW55LCBhZGRXaWR0aEhhY2sgPSBmYWxzZSkge1xuICAgIHZhbHVlID0gdGhpcy5mb3JtYXRDb2x1bW5WYWx1ZShjb2x1bW5JbmRleCwgdmFsdWUpO1xuXG4gICAgY29uc3QgY29sdW1uID0gdGhpcy50YWJsZS5jb2x1bW5zW2NvbHVtbkluZGV4XTtcbiAgICBjb25zdCBjZWxsU3R5bGVzID0gW107XG4gICAgbGV0IGNlbGxTdHlsZSA9ICcnO1xuICAgIGNvbnN0IGNlbGxDbGFzc2VzID0gW107XG4gICAgbGV0IGNlbGxDbGFzcyA9ICcnO1xuXG4gICAgaWYgKHRoaXMuY29sb3JTdGF0ZS5jZWxsKSB7XG4gICAgICBjZWxsU3R5bGVzLnB1c2goJ2JhY2tncm91bmQtY29sb3I6JyArIHRoaXMuY29sb3JTdGF0ZS5jZWxsKTtcbiAgICAgIGNlbGxDbGFzc2VzLnB1c2goJ3RhYmxlLXBhbmVsLWNvbG9yLWNlbGwnKTtcbiAgICAgIHRoaXMuY29sb3JTdGF0ZS5jZWxsID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sb3JTdGF0ZS52YWx1ZSkge1xuICAgICAgY2VsbFN0eWxlcy5wdXNoKCdjb2xvcjonICsgdGhpcy5jb2xvclN0YXRlLnZhbHVlKTtcbiAgICAgIHRoaXMuY29sb3JTdGF0ZS52YWx1ZSA9IG51bGw7XG4gICAgfVxuICAgIC8vIGJlY2F1c2Ugb2YgdGhlIGZpeGVkIHRhYmxlIGhlYWRlcnMgY3NzIG9ubHkgc29sdXRpb25cbiAgICAvLyB0aGVyZSBpcyBhbiBpc3N1ZSBpZiBoZWFkZXIgY2VsbCBpcyB3aWRlciB0aGUgY2VsbFxuICAgIC8vIHRoaXMgaGFjayBhZGRzIGhlYWRlciBjb250ZW50IHRvIGNlbGwgKG5vdCB2aXNpYmxlKVxuICAgIGxldCBjb2x1bW5IdG1sID0gJyc7XG4gICAgaWYgKGFkZFdpZHRoSGFjaykge1xuICAgICAgY29sdW1uSHRtbCA9ICc8ZGl2IGNsYXNzPVwidGFibGUtcGFuZWwtd2lkdGgtaGFja1wiPicgKyB0aGlzLnRhYmxlLmNvbHVtbnNbY29sdW1uSW5kZXhdLnRpdGxlICsgJzwvZGl2Pic7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNlbGxTdHlsZXMucHVzaCgnZGlzcGxheTpub25lJyk7XG4gICAgICBjb2x1bW4uaGlkZGVuID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29sdW1uLmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4uaGlkZGVuID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5zdHlsZSAmJiBjb2x1bW4uc3R5bGUucHJlc2VydmVGb3JtYXQpIHtcbiAgICAgIGNlbGxDbGFzc2VzLnB1c2goJ3RhYmxlLXBhbmVsLWNlbGwtcHJlJyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5zdHlsZSAmJiBjb2x1bW4uc3R5bGUuYWxpZ24pIHtcbiAgICAgIGNvbnN0IHRleHRBbGlnbiA9IGZpbmQoQ29sdW1uT3B0aW9uc0N0cmwuYWxpZ25UeXBlc0VudW0sIFsndGV4dCcsIGNvbHVtbi5zdHlsZS5hbGlnbl0pO1xuICAgICAgaWYgKHRleHRBbGlnbiAmJiB0ZXh0QWxpZ25bJ3ZhbHVlJ10pIHtcbiAgICAgICAgY2VsbFN0eWxlcy5wdXNoKGB0ZXh0LWFsaWduOiR7dGV4dEFsaWduWyd2YWx1ZSddfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjZWxsU3R5bGVzLmxlbmd0aCkge1xuICAgICAgY2VsbFN0eWxlID0gJyBzdHlsZT1cIicgKyBjZWxsU3R5bGVzLmpvaW4oJzsnKSArICdcIic7XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5zdHlsZSAmJiBjb2x1bW4uc3R5bGUubGluaykge1xuICAgICAgLy8gUmVuZGVyIGNlbGwgYXMgbGlua1xuICAgICAgY29uc3Qgc2NvcGVkVmFycyA9IHRoaXMucmVuZGVyUm93VmFyaWFibGVzKHJvd0luZGV4KTtcbiAgICAgIHNjb3BlZFZhcnNbJ19fY2VsbCddID0geyB2YWx1ZTogdmFsdWUsIHRleHQ6IHZhbHVlID8gdmFsdWUudG9TdHJpbmcoKSA6ICcnIH07XG5cbiAgICAgIGNvbnN0IGNlbGxMaW5rID0gdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKGNvbHVtbi5zdHlsZS5saW5rVXJsLCBzY29wZWRWYXJzLCBlbmNvZGVVUklDb21wb25lbnQpO1xuICAgICAgY29uc3Qgc2FuaXRpemVkQ2VsbExpbmsgPSB0ZXh0VXRpbC5zYW5pdGl6ZVVybChjZWxsTGluayk7XG5cbiAgICAgIGNvbnN0IGNlbGxMaW5rVG9vbHRpcCA9IHRleHRVdGlsLmVzY2FwZUh0bWwodGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKGNvbHVtbi5zdHlsZS5saW5rVG9vbHRpcCwgc2NvcGVkVmFycykpO1xuICAgICAgY29uc3QgY2VsbFRhcmdldCA9IGNvbHVtbi5zdHlsZS5saW5rVGFyZ2V0QmxhbmsgPyAnX2JsYW5rJyA6ICcnO1xuXG4gICAgICBjZWxsQ2xhc3Nlcy5wdXNoKCd0YWJsZS1wYW5lbC1jZWxsLWxpbmsnKTtcblxuICAgICAgY29sdW1uSHRtbCArPSBgPGEgaHJlZj1cIiR7c2FuaXRpemVkQ2VsbExpbmt9XCIgdGFyZ2V0PVwiJHtjZWxsVGFyZ2V0fVwiIGRhdGEtbGluay10b29sdGlwIGRhdGEtb3JpZ2luYWwtdGl0bGU9XCIke2NlbGxMaW5rVG9vbHRpcH1cIiBkYXRhLXBsYWNlbWVudD1cInJpZ2h0XCIke2NlbGxTdHlsZX0+YDtcbiAgICAgIGNvbHVtbkh0bWwgKz0gYCR7dmFsdWV9YDtcbiAgICAgIGNvbHVtbkh0bWwgKz0gYDwvYT5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2x1bW5IdG1sICs9IHZhbHVlO1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4uZmlsdGVyYWJsZSkge1xuICAgICAgY2VsbENsYXNzZXMucHVzaCgndGFibGUtcGFuZWwtY2VsbC1maWx0ZXJhYmxlJyk7XG4gICAgICBjb2x1bW5IdG1sICs9IGA8YSBjbGFzcz1cInRhYmxlLXBhbmVsLWZpbHRlci1saW5rXCIgZGF0YS1saW5rLXRvb2x0aXAgZGF0YS1vcmlnaW5hbC10aXRsZT1cIkZpbHRlciBvdXQgdmFsdWVcIiBkYXRhLXBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgIGRhdGEtcm93PVwiJHtyb3dJbmRleH1cIiBkYXRhLWNvbHVtbj1cIiR7Y29sdW1uSW5kZXh9XCIgZGF0YS1vcGVyYXRvcj1cIiE9XCI+YDtcbiAgICAgIGNvbHVtbkh0bWwgKz0gYDxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoLW1pbnVzXCI+PC9pPmA7XG4gICAgICBjb2x1bW5IdG1sICs9IGA8L2E+YDtcbiAgICAgIGNvbHVtbkh0bWwgKz0gYDxhIGNsYXNzPVwidGFibGUtcGFuZWwtZmlsdGVyLWxpbmtcIiBkYXRhLWxpbmstdG9vbHRpcCBkYXRhLW9yaWdpbmFsLXRpdGxlPVwiRmlsdGVyIGZvciB2YWx1ZVwiIGRhdGEtcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgZGF0YS1yb3c9XCIke3Jvd0luZGV4fVwiIGRhdGEtY29sdW1uPVwiJHtjb2x1bW5JbmRleH1cIiBkYXRhLW9wZXJhdG9yPVwiPVwiPmA7XG4gICAgICBjb2x1bW5IdG1sICs9IGA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaC1wbHVzXCI+PC9pPmA7XG4gICAgICBjb2x1bW5IdG1sICs9IGA8L2E+YDtcbiAgICB9XG5cbiAgICBpZiAoY2VsbENsYXNzZXMubGVuZ3RoKSB7XG4gICAgICBjZWxsQ2xhc3MgPSAnIGNsYXNzPVwiJyArIGNlbGxDbGFzc2VzLmpvaW4oJyAnKSArICdcIic7XG4gICAgfVxuXG4gICAgY29sdW1uSHRtbCA9ICc8dGQnICsgY2VsbENsYXNzICsgY2VsbFN0eWxlICsgJz4nICsgY29sdW1uSHRtbCArICc8L3RkPic7XG4gICAgcmV0dXJuIGNvbHVtbkh0bWw7XG4gIH1cblxuICByZW5kZXIocGFnZTogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFnZVNpemUgPSB0aGlzLnBhbmVsLnBhZ2VTaXplIHx8IDEwMDtcbiAgICBjb25zdCBzdGFydFBvcyA9IHBhZ2UgKiBwYWdlU2l6ZTtcbiAgICBjb25zdCBlbmRQb3MgPSBNYXRoLm1pbihzdGFydFBvcyArIHBhZ2VTaXplLCB0aGlzLnRhYmxlLnJvd3MubGVuZ3RoKTtcbiAgICBsZXQgaHRtbCA9ICcnO1xuXG4gICAgZm9yIChsZXQgeSA9IHN0YXJ0UG9zOyB5IDwgZW5kUG9zOyB5KyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IHRoaXMudGFibGUucm93c1t5XTtcbiAgICAgIGxldCBjZWxsSHRtbCA9ICcnO1xuICAgICAgbGV0IHJvd1N0eWxlID0gJyc7XG4gICAgICBjb25zdCByb3dDbGFzc2VzID0gW107XG4gICAgICBsZXQgcm93Q2xhc3MgPSAnJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNlbGxIdG1sICs9IHRoaXMucmVuZGVyQ2VsbChpLCB5LCByb3dbaV0sIHkgPT09IHN0YXJ0UG9zKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY29sb3JTdGF0ZS5yb3cpIHtcbiAgICAgICAgcm93U3R5bGUgPSAnIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonICsgdGhpcy5jb2xvclN0YXRlLnJvdyArICdcIic7XG4gICAgICAgIHJvd0NsYXNzZXMucHVzaCgndGFibGUtcGFuZWwtY29sb3Itcm93Jyk7XG4gICAgICAgIHRoaXMuY29sb3JTdGF0ZS5yb3cgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAocm93Q2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgICAgcm93Q2xhc3MgPSAnIGNsYXNzPVwiJyArIHJvd0NsYXNzZXMuam9pbignICcpICsgJ1wiJztcbiAgICAgIH1cblxuICAgICAgaHRtbCArPSAnPHRyICcgKyByb3dDbGFzcyArIHJvd1N0eWxlICsgJz4nICsgY2VsbEh0bWwgKyAnPC90cj4nO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgcmVuZGVyX3ZhbHVlcygpIHtcbiAgICBjb25zdCByb3dzID0gW107XG4gICAgY29uc3QgdmlzaWJsZUNvbHVtbnMgPSB0aGlzLnRhYmxlLmNvbHVtbnMuZmlsdGVyKChjb2x1bW4pID0+ICFjb2x1bW4uaGlkZGVuKTtcblxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy50YWJsZS5yb3dzLmxlbmd0aDsgeSsrKSB7XG4gICAgICBjb25zdCByb3cgPSB0aGlzLnRhYmxlLnJvd3NbeV07XG4gICAgICBjb25zdCBuZXdSb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJsZS5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghdGhpcy50YWJsZS5jb2x1bW5zW2ldLmhpZGRlbikge1xuICAgICAgICAgIG5ld1Jvdy5wdXNoKHRoaXMuZm9ybWF0Q29sdW1uVmFsdWUoaSwgcm93W2ldKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJvd3MucHVzaChuZXdSb3cpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY29sdW1uczogdmlzaWJsZUNvbHVtbnMsXG4gICAgICByb3dzOiByb3dzLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IGZpbmRJbmRleCwgaXNPYmplY3QsIG1hcCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IENvbHVtbiwgVGFibGVEYXRhIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgVGFibGVNb2RlbCwgeyBtZXJnZVRhYmxlc0ludG9Nb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3RhYmxlX21vZGVsJztcbmltcG9ydCBUaW1lU2VyaWVzIGZyb20gJ2FwcC9jb3JlL3RpbWVfc2VyaWVzMic7XG5pbXBvcnQgZmxhdHRlbiBmcm9tICdhcHAvY29yZS91dGlscy9mbGF0dGVuJztcblxuaW1wb3J0IHsgVGFibGVUcmFuc2Zvcm0gfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgdHJhbnNmb3JtZXJzOiB7IFtrZXk6IHN0cmluZ106IFRhYmxlVHJhbnNmb3JtIH0gPSB7fTtcbmV4cG9ydCBjb25zdCB0aW1lU2VyaWVzRm9ybWF0RmlsdGVyZXIgPSAoZGF0YTogYW55KTogYW55W10gPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICByZXR1cm4gZGF0YS5kYXRhcG9pbnRzID8gW2RhdGFdIDogW107XG4gIH1cblxuICByZXR1cm4gZGF0YS5yZWR1Y2UoKGFjYywgc2VyaWVzKSA9PiB7XG4gICAgaWYgKCFzZXJpZXMuZGF0YXBvaW50cykge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjLmNvbmNhdChzZXJpZXMpO1xuICB9LCBbXSk7XG59O1xuXG5leHBvcnQgY29uc3QgdGFibGVEYXRhRm9ybWF0RmlsdGVyZXIgPSAoZGF0YTogYW55KTogYW55W10gPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICByZXR1cm4gZGF0YS5jb2x1bW5zID8gW2RhdGFdIDogW107XG4gIH1cblxuICByZXR1cm4gZGF0YS5yZWR1Y2UoKGFjYywgc2VyaWVzKSA9PiB7XG4gICAgaWYgKCFzZXJpZXMuY29sdW1ucykge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjLmNvbmNhdChzZXJpZXMpO1xuICB9LCBbXSk7XG59O1xuXG50cmFuc2Zvcm1lcnNbJ3RpbWVzZXJpZXNfdG9fcm93cyddID0ge1xuICBkZXNjcmlwdGlvbjogJ1RpbWUgc2VyaWVzIHRvIHJvd3MnLFxuICBnZXRDb2x1bW5zOiAoKSA9PiB7XG4gICAgcmV0dXJuIFtdO1xuICB9LFxuICB0cmFuc2Zvcm06IChkYXRhLCBwYW5lbCwgbW9kZWwpID0+IHtcbiAgICBtb2RlbC5jb2x1bW5zID0gW3sgdGV4dDogJ1RpbWUnLCB0eXBlOiAnZGF0ZScgfSwgeyB0ZXh0OiAnTWV0cmljJyB9LCB7IHRleHQ6ICdWYWx1ZScgfV07XG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGltZVNlcmllc0Zvcm1hdEZpbHRlcmVyKGRhdGEpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJlZERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNlcmllcyA9IGZpbHRlcmVkRGF0YVtpXTtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2VyaWVzLmRhdGFwb2ludHMubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgY29uc3QgZHAgPSBzZXJpZXMuZGF0YXBvaW50c1t5XTtcbiAgICAgICAgbW9kZWwucm93cy5wdXNoKFtkcFsxXSwgc2VyaWVzLnRhcmdldCwgZHBbMF1dKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG59O1xuXG50cmFuc2Zvcm1lcnNbJ3RpbWVzZXJpZXNfdG9fY29sdW1ucyddID0ge1xuICBkZXNjcmlwdGlvbjogJ1RpbWUgc2VyaWVzIHRvIGNvbHVtbnMnLFxuICBnZXRDb2x1bW5zOiAoKSA9PiB7XG4gICAgcmV0dXJuIFtdO1xuICB9LFxuICB0cmFuc2Zvcm06IChkYXRhLCBwYW5lbCwgbW9kZWwpID0+IHtcbiAgICBtb2RlbC5jb2x1bW5zLnB1c2goeyB0ZXh0OiAnVGltZScsIHR5cGU6ICdkYXRlJyB9KTtcblxuICAgIC8vIGdyb3VwIGJ5IHRpbWVcbiAgICBjb25zdCBwb2ludHM6IGFueSA9IHt9O1xuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRpbWVTZXJpZXNGb3JtYXRGaWx0ZXJlcihkYXRhKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzZXJpZXMgPSBmaWx0ZXJlZERhdGFbaV07XG4gICAgICBtb2RlbC5jb2x1bW5zLnB1c2goeyB0ZXh0OiBzZXJpZXMudGFyZ2V0IH0pO1xuXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNlcmllcy5kYXRhcG9pbnRzLmxlbmd0aDsgeSsrKSB7XG4gICAgICAgIGNvbnN0IGRwID0gc2VyaWVzLmRhdGFwb2ludHNbeV07XG4gICAgICAgIGNvbnN0IHRpbWVLZXkgPSBkcFsxXS50b1N0cmluZygpO1xuXG4gICAgICAgIGlmICghcG9pbnRzW3RpbWVLZXldKSB7XG4gICAgICAgICAgcG9pbnRzW3RpbWVLZXldID0geyB0aW1lOiBkcFsxXSB9O1xuICAgICAgICAgIHBvaW50c1t0aW1lS2V5XVtpXSA9IGRwWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvaW50c1t0aW1lS2V5XVtpXSA9IGRwWzBdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB0aW1lIGluIHBvaW50cykge1xuICAgICAgY29uc3QgcG9pbnQgPSBwb2ludHNbdGltZV07XG4gICAgICBjb25zdCB2YWx1ZXMgPSBbcG9pbnQudGltZV07XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyZWREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcG9pbnRbaV07XG4gICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgbW9kZWwucm93cy5wdXNoKHZhbHVlcyk7XG4gICAgfVxuICB9LFxufTtcblxudHJhbnNmb3JtZXJzWyd0aW1lc2VyaWVzX2FnZ3JlZ2F0aW9ucyddID0ge1xuICBkZXNjcmlwdGlvbjogJ1RpbWUgc2VyaWVzIGFnZ3JlZ2F0aW9ucycsXG4gIGdldENvbHVtbnM6ICgpID0+IHtcbiAgICByZXR1cm4gW1xuICAgICAgeyB0ZXh0OiAnQXZnJywgdmFsdWU6ICdhdmcnIH0sXG4gICAgICB7IHRleHQ6ICdNaW4nLCB2YWx1ZTogJ21pbicgfSxcbiAgICAgIHsgdGV4dDogJ01heCcsIHZhbHVlOiAnbWF4JyB9LFxuICAgICAgeyB0ZXh0OiAnVG90YWwnLCB2YWx1ZTogJ3RvdGFsJyB9LFxuICAgICAgeyB0ZXh0OiAnQ3VycmVudCcsIHZhbHVlOiAnY3VycmVudCcgfSxcbiAgICAgIHsgdGV4dDogJ0NvdW50JywgdmFsdWU6ICdjb3VudCcgfSxcbiAgICBdO1xuICB9LFxuICB0cmFuc2Zvcm06IChkYXRhLCBwYW5lbCwgbW9kZWwpID0+IHtcbiAgICBsZXQgaSwgeTtcbiAgICBtb2RlbC5jb2x1bW5zLnB1c2goeyB0ZXh0OiAnTWV0cmljJyB9KTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBwYW5lbC5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBtb2RlbC5jb2x1bW5zLnB1c2goeyB0ZXh0OiBwYW5lbC5jb2x1bW5zW2ldLnRleHQgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGltZVNlcmllc0Zvcm1hdEZpbHRlcmVyKGRhdGEpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGZpbHRlcmVkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2VyaWVzID0gbmV3IFRpbWVTZXJpZXMoe1xuICAgICAgICBkYXRhcG9pbnRzOiBmaWx0ZXJlZERhdGFbaV0uZGF0YXBvaW50cyxcbiAgICAgICAgYWxpYXM6IGZpbHRlcmVkRGF0YVtpXS50YXJnZXQsXG4gICAgICB9KTtcblxuICAgICAgc2VyaWVzLmdldEZsb3RQYWlycygnY29ubmVjdGVkJyk7XG4gICAgICBjb25zdCBjZWxscyA9IFtzZXJpZXMuYWxpYXNdO1xuXG4gICAgICBmb3IgKHkgPSAwOyB5IDwgcGFuZWwuY29sdW1ucy5sZW5ndGg7IHkrKykge1xuICAgICAgICBjZWxscy5wdXNoKHNlcmllcy5zdGF0c1twYW5lbC5jb2x1bW5zW3ldLnZhbHVlXSk7XG4gICAgICB9XG5cbiAgICAgIG1vZGVsLnJvd3MucHVzaChjZWxscyk7XG4gICAgfVxuICB9LFxufTtcblxudHJhbnNmb3JtZXJzWydhbm5vdGF0aW9ucyddID0ge1xuICBkZXNjcmlwdGlvbjogJ0Fubm90YXRpb25zJyxcbiAgZ2V0Q29sdW1uczogKCkgPT4ge1xuICAgIHJldHVybiBbXTtcbiAgfSxcbiAgdHJhbnNmb3JtOiAoZGF0YSwgcGFuZWwsIG1vZGVsKSA9PiB7XG4gICAgbW9kZWwuY29sdW1ucy5wdXNoKHsgdGV4dDogJ1RpbWUnLCB0eXBlOiAnZGF0ZScgfSk7XG4gICAgbW9kZWwuY29sdW1ucy5wdXNoKHsgdGV4dDogJ1RpdGxlJyB9KTtcbiAgICBtb2RlbC5jb2x1bW5zLnB1c2goeyB0ZXh0OiAnVGV4dCcgfSk7XG4gICAgbW9kZWwuY29sdW1ucy5wdXNoKHsgdGV4dDogJ1RhZ3MnIH0pO1xuXG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLmFubm90YXRpb25zIHx8IGRhdGEuYW5ub3RhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmFubm90YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBldnQgPSBkYXRhLmFubm90YXRpb25zW2ldO1xuICAgICAgbW9kZWwucm93cy5wdXNoKFtldnQudGltZSwgZXZ0LnRpdGxlLCBldnQudGV4dCwgZXZ0LnRhZ3NdKTtcbiAgICB9XG4gIH0sXG59O1xuXG50cmFuc2Zvcm1lcnNbJ3RhYmxlJ10gPSB7XG4gIGRlc2NyaXB0aW9uOiAnVGFibGUnLFxuICBnZXRDb2x1bW5zOiAoZGF0YSkgPT4ge1xuICAgIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8vIFNpbmdsZSBxdWVyeSByZXR1cm5zIGRhdGEgY29sdW1ucyBhcyBpc1xuICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIFsuLi5kYXRhWzBdLmNvbHVtbnNdO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRhYmxlRGF0YUZvcm1hdEZpbHRlcmVyKGRhdGEpO1xuXG4gICAgLy8gVHJhY2sgY29sdW1uIGluZGV4ZXM6IG5hbWUgLT4gaW5kZXhcbiAgICBjb25zdCBjb2x1bW5OYW1lczogYW55ID0ge307XG5cbiAgICAvLyBVbmlvbiBvZiBhbGwgY29sdW1uc1xuICAgIGNvbnN0IGNvbHVtbnMgPSBmaWx0ZXJlZERhdGEucmVkdWNlKChhY2M6IENvbHVtbltdLCBzZXJpZXM6IFRhYmxlRGF0YSkgPT4ge1xuICAgICAgc2VyaWVzLmNvbHVtbnMuZm9yRWFjaCgoY29sKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdGV4dCB9ID0gY29sO1xuICAgICAgICBpZiAoY29sdW1uTmFtZXNbdGV4dF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNvbHVtbk5hbWVzW3RleHRdID0gYWNjLmxlbmd0aDtcbiAgICAgICAgICBhY2MucHVzaChjb2wpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH0sXG4gIHRyYW5zZm9ybTogKGRhdGE6IGFueVtdLCBwYW5lbCwgbW9kZWwpID0+IHtcbiAgICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGFibGVEYXRhRm9ybWF0RmlsdGVyZXIoZGF0YSk7XG4gICAgY29uc3Qgbm9UYWJsZUluZGV4ID0gZmluZEluZGV4KGZpbHRlcmVkRGF0YSwgKGQpID0+ICdjb2x1bW5zJyBpbiBkICYmICdyb3dzJyBpbiBkKTtcbiAgICBpZiAobm9UYWJsZUluZGV4IDwgMCkge1xuICAgICAgdGhyb3cge1xuICAgICAgICBtZXNzYWdlOiBgUmVzdWx0IG9mIHF1ZXJ5ICMke1N0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICAgNjUgKyBub1RhYmxlSW5kZXhcbiAgICAgICAgKX0gaXMgbm90IGluIHRhYmxlIGZvcm1hdCwgdHJ5IHVzaW5nIGFub3RoZXIgdHJhbnNmb3JtLmAsXG4gICAgICB9O1xuICAgIH1cblxuICAgIG1lcmdlVGFibGVzSW50b01vZGVsKG1vZGVsLCAuLi5maWx0ZXJlZERhdGEpO1xuICB9LFxufTtcblxudHJhbnNmb3JtZXJzWydqc29uJ10gPSB7XG4gIGRlc2NyaXB0aW9uOiAnSlNPTiBEYXRhJyxcbiAgZ2V0Q29sdW1uczogKGRhdGEpID0+IHtcbiAgICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lczogYW55ID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzZXJpZXMgPSBkYXRhW2ldO1xuICAgICAgaWYgKHNlcmllcy50eXBlICE9PSAnZG9jcycpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIC8vIG9ubHkgbG9vayBhdCAxMDAgZG9jc1xuICAgICAgY29uc3QgbWF4RG9jcyA9IE1hdGgubWluKHNlcmllcy5kYXRhcG9pbnRzLmxlbmd0aCwgMTAwKTtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbWF4RG9jczsgeSsrKSB7XG4gICAgICAgIGNvbnN0IGRvYyA9IHNlcmllcy5kYXRhcG9pbnRzW3ldO1xuICAgICAgICBjb25zdCBmbGF0dGVuZWQgPSBmbGF0dGVuKGRvYywge30pO1xuICAgICAgICBmb3IgKGNvbnN0IHByb3BOYW1lIGluIGZsYXR0ZW5lZCkge1xuICAgICAgICAgIG5hbWVzW3Byb3BOYW1lXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWFwKG5hbWVzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgcmV0dXJuIHsgdGV4dDoga2V5LCB2YWx1ZToga2V5IH07XG4gICAgfSk7XG4gIH0sXG4gIHRyYW5zZm9ybTogKGRhdGEsIHBhbmVsLCBtb2RlbCkgPT4ge1xuICAgIGxldCBpLCB5LCB6O1xuXG4gICAgZm9yIChjb25zdCBjb2x1bW4gb2YgcGFuZWwuY29sdW1ucykge1xuICAgICAgY29uc3QgdGFibGVDb2w6IGFueSA9IHsgdGV4dDogY29sdW1uLnRleHQgfTtcblxuICAgICAgLy8gaWYgZmlsdGVyYWJsZSBkYXRhIHRoZW4gc2V0IGNvbHVtbnMgdG8gZmlsdGVyYWJsZVxuICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCAmJiBkYXRhWzBdLmZpbHRlcmFibGUpIHtcbiAgICAgICAgdGFibGVDb2wuZmlsdGVyYWJsZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIG1vZGVsLmNvbHVtbnMucHVzaCh0YWJsZUNvbCk7XG4gICAgfVxuXG4gICAgaWYgKG1vZGVsLmNvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBtb2RlbC5jb2x1bW5zLnB1c2goeyB0ZXh0OiAnSlNPTicgfSk7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNlcmllcyA9IGRhdGFbaV07XG5cbiAgICAgIGZvciAoeSA9IDA7IHkgPCBzZXJpZXMuZGF0YXBvaW50cy5sZW5ndGg7IHkrKykge1xuICAgICAgICBjb25zdCBkcCA9IHNlcmllcy5kYXRhcG9pbnRzW3ldO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcblxuICAgICAgICBpZiAoaXNPYmplY3QoZHApICYmIHBhbmVsLmNvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGZsYXR0ZW5lZCA9IGZsYXR0ZW4oZHApO1xuICAgICAgICAgIGZvciAoeiA9IDA7IHogPCBwYW5lbC5jb2x1bW5zLmxlbmd0aDsgeisrKSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaChmbGF0dGVuZWRbcGFuZWwuY29sdW1uc1t6XS52YWx1ZV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZXMucHVzaChKU09OLnN0cmluZ2lmeShkcCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kZWwucm93cy5wdXNoKHZhbHVlcyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxufTtcblxuZnVuY3Rpb24gdHJhbnNmb3JtRGF0YVRvVGFibGUoZGF0YTogYW55LCBwYW5lbDogYW55KSB7XG4gIGNvbnN0IG1vZGVsID0gbmV3IFRhYmxlTW9kZWwoKTtcblxuICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxuICBjb25zdCB0cmFuc2Zvcm1lciA9IHRyYW5zZm9ybWVyc1twYW5lbC50cmFuc2Zvcm1dO1xuICBpZiAoIXRyYW5zZm9ybWVyKSB7XG4gICAgdGhyb3cgeyBtZXNzYWdlOiAnVHJhbnNmb3JtZXIgJyArIHBhbmVsLnRyYW5zZm9ybSArICcgbm90IGZvdW5kJyB9O1xuICB9XG5cbiAgdHJhbnNmb3JtZXIudHJhbnNmb3JtKGRhdGEsIHBhbmVsLCBtb2RlbCk7XG4gIHJldHVybiBtb2RlbDtcbn1cblxuZXhwb3J0IHsgdHJhbnNmb3JtZXJzLCB0cmFuc2Zvcm1EYXRhVG9UYWJsZSB9O1xuIiwiaW1wb3J0IHsgbWFrZUNsYXNzRVM1Q29tcGF0aWJsZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgbG9hZFBsdWdpbkNzcyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgTWV0cmljc1BhbmVsQ3RybCBhcyBNZXRyaWNzUGFuZWxDdHJsRVM2IH0gZnJvbSAnYXBwL2FuZ3VsYXIvcGFuZWwvbWV0cmljc19wYW5lbF9jdHJsJztcbmltcG9ydCB7IFBhbmVsQ3RybCBhcyBQYW5lbEN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9wYW5lbF9jdHJsJztcbmltcG9ydCB7IFF1ZXJ5Q3RybCBhcyBRdWVyeUN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9xdWVyeV9jdHJsJztcblxuY29uc3QgUGFuZWxDdHJsID0gbWFrZUNsYXNzRVM1Q29tcGF0aWJsZShQYW5lbEN0cmxFUzYpO1xuY29uc3QgTWV0cmljc1BhbmVsQ3RybCA9IG1ha2VDbGFzc0VTNUNvbXBhdGlibGUoTWV0cmljc1BhbmVsQ3RybEVTNik7XG5jb25zdCBRdWVyeUN0cmwgPSBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlKFF1ZXJ5Q3RybEVTNik7XG5cbmV4cG9ydCB7IFBhbmVsQ3RybCwgTWV0cmljc1BhbmVsQ3RybCwgUXVlcnlDdHJsLCBsb2FkUGx1Z2luQ3NzIH07XG4iXSwibmFtZXMiOlsiZGVwcmVjYXRpb25XYXJuaW5nIiwidXJsVXRpbCIsImxvY2F0aW9uU2VhcmNoVG9PYmplY3QiLCJsb2NhdGlvblNlcnZpY2UiLCJuYXZpZ2F0aW9uTG9nZ2VyIiwiREVGQVVMVF9QT1JUUyIsImh0dHAiLCJodHRwcyIsImZ0cCIsIkFuZ3VsYXJMb2NhdGlvbldyYXBwZXIiLCJjb25zdHJ1Y3RvciIsImFic1VybCIsIndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyIsImhhc2giLCJob3N0IiwicGF0aCIsInBvcnQiLCJwcm90b2NvbCIsInJlcGxhY2UiLCJzZWFyY2giLCJzdGF0ZSIsInVybCIsImZuIiwicmVwbGFjZW1lbnQiLCJzZWxmIiwid3JhcHBlciIsIm5hbWUiLCJhcHBseSIsImFyZ3VtZW50cyIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwibmV3SGFzaCIsImdldExvY2F0aW9uIiwic2xpY2UiLCJFcnJvciIsIlVSTCIsImhyZWYiLCJob3N0bmFtZSIsInBhdGhuYW1lIiwidW5kZWZpbmVkIiwicGFyc2VkUGF0aCIsIlN0cmluZyIsInN0YXJ0c1dpdGgiLCJwdXNoIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJwYXJhbVZhbHVlIiwiZ2V0U2VhcmNoT2JqZWN0IiwicGFydGlhbCIsIm5ld1F1ZXJ5Iiwia2V5IiwiT2JqZWN0Iiwia2V5cyIsInVwZGF0ZWRVcmwiLCJyZW5kZXJVcmwiLCJuZXdVcmwiLCJ0cmltIiwiaXNBcnJheSIsIkxvYWRpbmdTdGF0ZSIsIlBhbmVsRXZlbnRzIiwidG9EYXRhRnJhbWVEVE8iLCJ0b0xlZ2FjeVJlc3BvbnNlRGF0YSIsIlBhbmVsQ3RybCIsImFwcGx5UGFuZWxUaW1lT3ZlcnJpZGVzIiwiTWV0cmljc1BhbmVsQ3RybCIsIiRzY29wZSIsIiRpbmplY3RvciIsIm5leHQiLCJkYXRhIiwicGFuZWxEYXRhIiwibG9hZGluZyIsInByb2Nlc3NEYXRhRXJyb3IiLCJlcnJvciIsIkxvYWRpbmciLCJhbmd1bGFyRGlydHlDaGVjayIsInJlcXVlc3QiLCJ0aW1lSW5mbyIsInRpbWVSYW5nZSIsInJhbmdlIiwidXNlRGF0YUZyYW1lcyIsImhhbmRsZURhdGFGcmFtZXMiLCJzZXJpZXMiLCJsZWdhY3kiLCJtYXAiLCJ2IiwiaGFuZGxlUXVlcnlSZXN1bHQiLCJjb250ZXh0U3J2IiwiZ2V0IiwiZGF0YXNvdXJjZVNydiIsInRpbWVTcnYiLCJ0ZW1wbGF0ZVNydiIsInBhbmVsIiwiZGF0YXNvdXJjZSIsImV2ZW50cyIsIm9uIiwicmVmcmVzaCIsIm9uTWV0cmljc1BhbmVsUmVmcmVzaCIsImJpbmQiLCJwYW5lbFRlYXJkb3duIiwib25QYW5lbFRlYXJEb3duIiwiY29tcG9uZW50RGlkTW91bnQiLCJvbk1ldHJpY3NQYW5lbE1vdW50ZWQiLCJxdWVyeVJ1bm5lciIsImdldFF1ZXJ5UnVubmVyIiwicXVlcnlTdWJzY3JpcHRpb24iLCJnZXREYXRhIiwid2l0aFRyYW5zZm9ybXMiLCJ3aXRoRmllbGRDb25maWciLCJzdWJzY3JpYmUiLCJwYW5lbERhdGFPYnNlcnZlciIsInVuc3Vic2NyaWJlIiwib3RoZXJQYW5lbEluRnVsbHNjcmVlbk1vZGUiLCJzbmFwc2hvdERhdGEiLCJ1cGRhdGVUaW1lUmFuZ2UiLCJEb25lIiwiJHRpbWVvdXQiLCJlbWl0IiwiZGF0YVNuYXBzaG90TG9hZCIsInNjb3BlZFZhcnMiLCJ0aGVuIiwiaXNzdWVRdWVyaWVzIiwiY2F0Y2giLCJlcnIiLCJjYW5jZWxsZWQiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIiRyb290IiwiJCRwaGFzZSIsIiRkaWdlc3QiLCJuZXdUaW1lRGF0YSIsInJ1biIsInF1ZXJpZXMiLCJ0YXJnZXRzIiwicGFuZWxJZCIsImlkIiwiZGFzaGJvYXJkSWQiLCJkYXNoYm9hcmQiLCJ0aW1lem9uZSIsImdldFRpbWV6b25lIiwibWF4RGF0YVBvaW50cyIsIndpZHRoIiwibWluSW50ZXJ2YWwiLCJpbnRlcnZhbCIsImNhY2hlVGltZW91dCIsInRyYW5zZm9ybWF0aW9ucyIsInNuYXBzaG90IiwiZnJhbWUiLCJkYXRhRnJhbWVzUmVjZWl2ZWQiLCJyZXN1bHQiLCJkYXRhUmVjZWl2ZWQiLCJpc1N0cmluZyIsIkV2ZW50QnVzU3J2IiwiY29uZmlnIiwicHJvZmlsZXIiLCJwbHVnaW4iLCIkcGFyZW50IiwiZWRpdG9yVGFicyIsIiRsb2NhdGlvbiIsInRpbWluZyIsInBhbmVscyIsInR5cGUiLCJwbHVnaW5JZCIsInBsdWdpbk5hbWUiLCIkb24iLCJwYW5lbERpZE1vdW50IiwiaW5pdGlhbGl6ZWQiLCJwYW5lbEluaXRpYWxpemVkIiwicmVuZGVyaW5nQ29tcGxldGVkIiwicHVibGlzaEFwcEV2ZW50IiwiZXZlbnQiLCJwYXlsb2FkIiwiYXBwRXZlbnQiLCJpbml0RWRpdE1vZGUiLCJlZGl0TW9kZUluaXRpYXRlZCIsImVkaXRNb2RlSW5pdGlhbGl6ZWQiLCJhZGRFZGl0b3JUYWIiLCJ0aXRsZSIsImRpcmVjdGl2ZUZuIiwiaW5kZXgiLCJpY29uIiwiZWRpdG9yVGFiIiwidGVtcGxhdGVVcmwiLCJzcGxpY2UiLCJnZXRFeHRlbmRlZE1lbnUiLCJtZW51IiwiaW5pdFBhbmVsQWN0aW9ucyIsImdldEFkZGl0aW9uYWxNZW51SXRlbXMiLCJvdGhlclBhbmVsSW5GdWxsc2NyZWVuIiwicmVuZGVyIiwiaW5kZXhPZiIsIlF1ZXJ5Q3RybCIsInBhbmVsQ3RybCIsImN0cmwiLCJ0YXJnZXQiLCJpc0xhc3RRdWVyeSIsIndpdGhvdXQiLCJnZXRWYWx1ZUZvcm1hdHMiLCJDb2x1bW5PcHRpb25zQ3RybCIsImVkaXRvciIsImFjdGl2ZVN0eWxlSW5kZXgiLCJ1bml0Rm9ybWF0cyIsImNvbG9yTW9kZXMiLCJ0ZXh0IiwidmFsdWUiLCJjb2x1bW5UeXBlcyIsImZvbnRTaXplcyIsImRhdGVGb3JtYXRzIiwibWFwcGluZ1R5cGVzIiwiYWxpZ25UeXBlcyIsImFsaWduVHlwZXNFbnVtIiwiZ2V0Q29sdW1uTmFtZXMiLCJ0YWJsZSIsImNvbHVtbnMiLCJjb2wiLCJvbkNvbG9yQ2hhbmdlIiwic2V0VW5pdEZvcm1hdCIsImNvbHVtbiIsInVuaXQiLCJhZGRDb2x1bW5TdHlsZSIsIm5ld1N0eWxlUnVsZSIsImFsaWFzIiwiZGVjaW1hbHMiLCJjb2xvcnMiLCJjb2xvck1vZGUiLCJwYXR0ZXJuIiwiZGF0ZUZvcm1hdCIsInRocmVzaG9sZHMiLCJtYXBwaW5nVHlwZSIsImFsaWduIiwic3R5bGVzIiwic3R5bGVzQ291bnQiLCJpbmRleFRvSW5zZXJ0IiwibGFzdCIsInJlbW92ZUNvbHVtblN0eWxlIiwic3R5bGUiLCJpbnZlcnRDb2xvck9yZGVyIiwicmVmIiwiY29weSIsImNvbG9ySW5kZXgiLCJuZXdDb2xvciIsImFkZFZhbHVlTWFwIiwidmFsdWVNYXBzIiwicmVtb3ZlVmFsdWVNYXAiLCJhZGRSYW5nZU1hcCIsInJhbmdlTWFwcyIsImZyb20iLCJ0byIsInJlbW92ZVJhbmdlTWFwIiwiY29sdW1uT3B0aW9uc1RhYiIsInJlc3RyaWN0Iiwic2NvcGUiLCJjb250cm9sbGVyIiwiZmluZCIsInRyYW5zZm9ybWVycyIsIlRhYmxlUGFuZWxFZGl0b3JDdHJsIiwidWlTZWdtZW50U3J2IiwiYWRkQ29sdW1uU2VnbWVudCIsIm5ld1BsdXNCdXR0b24iLCJ1cGRhdGVUcmFuc2Zvcm1IaW50cyIsImNhblNldENvbHVtbnMiLCJjb2x1bW5zSGVscE1lc3NhZ2UiLCJ0cmFuc2Zvcm0iLCJnZXRDb2x1bW5PcHRpb25zIiwiZGF0YVJhdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiZ2V0Q29sdW1ucyIsInNlZ21lbnRzIiwiYyIsIm5ld1NlZ21lbnQiLCJhZGRDb2x1bW4iLCJwbHVzQnV0dG9uIiwiaHRtbCIsInRyYW5zZm9ybUNoYW5nZWQiLCJyZW1vdmVDb2x1bW4iLCJ0YWJsZVBhbmVsRWRpdG9yIiwiJCIsImRlZmF1bHRzIiwiaXNUYWJsZURhdGEiLCJQYW5lbFBsdWdpbiIsImFwcGx5RmlsdGVyRnJvbVRhYmxlIiwiZGlzcGF0Y2giLCJUYWJsZVJlbmRlcmVyIiwidHJhbnNmb3JtRGF0YVRvVGFibGUiLCJUYWJsZVBhbmVsQ3RybCIsImFubm90YXRpb25zU3J2IiwiJHNhbml0aXplIiwicGFnZVNpemUiLCJzaG93SGVhZGVyIiwiZm9udFNpemUiLCJzb3J0IiwiZGVzYyIsInBhZ2VJbmRleCIsImZpZWxkcyIsInBhbmVsRGVmYXVsdHMiLCJwYW5lbEhhc1Jvd0NvbG9yTW9kZSIsIkJvb2xlYW4iLCJwYW5lbEhhc0xpbmtzIiwibGluayIsIm9uRGF0YVJlY2VpdmVkIiwib25Jbml0RWRpdE1vZGUiLCJtaWdyYXRlVG9QYW5lbCIsIm9uUGx1Z2luVHlwZUNoYW5nZSIsImdldEFubm90YXRpb25zIiwiYW5ubyIsImRhdGFMaXN0IiwicmVuZGVyZXIiLCJ0aGVtZSIsInRvZ2dsZUNvbHVtblNvcnQiLCJjb2xJbmRleCIsImVsZW0iLCJhdHRycyIsInBhZ2VDb3VudCIsImdldFRhYmxlSGVpZ2h0IiwicGFuZWxIZWlnaHQiLCJoZWlnaHQiLCJhcHBlbmRUYWJsZVJvd3MiLCJ0Ym9keUVsZW0iLCJzZXRUYWJsZSIsImVtcHR5Iiwic3dpdGNoUGFnZSIsImUiLCJlbCIsImN1cnJlbnRUYXJnZXQiLCJyZW5kZXJQYW5lbCIsImFwcGVuZFBhZ2luYXRpb25Db250cm9scyIsImZvb3RlckVsZW0iLCJNYXRoIiwiY2VpbCIsInJvd3MiLCJzdGFydFBhZ2UiLCJtYXgiLCJlbmRQYWdlIiwibWluIiwicGFnaW5hdGlvbkxpc3QiLCJpIiwiYWN0aXZlQ2xhc3MiLCJwYWdlTGlua0VsZW0iLCJhcHBlbmQiLCJwYW5lbEVsZW0iLCJwYXJlbnRzIiwicm9vdEVsZW0iLCJjc3MiLCJhZGRDbGFzcyIsInRvb2x0aXAiLCJzZWxlY3RvciIsImFkZEZpbHRlckNsaWNrZWQiLCJmaWx0ZXJEYXRhIiwib3B0aW9ucyIsInJvdyIsIm9wZXJhdG9yIiwidW5iaW5kRGVzdHJveSIsIm9mZiIsInJlbmRlckRhdGEiLCJhbmd1bGFyUGFuZWxDdHJsIiwic2V0Tm9QYWRkaW5nIiwiZmlyc3QiLCJlc2NhcGUiLCJlc2NhcGVTdHJpbmdGb3JSZWdleCIsImZvcm1hdHRlZFZhbHVlVG9TdHJpbmciLCJnZXRWYWx1ZUZvcm1hdCIsInN0cmluZ1N0YXJ0c0FzUmVnRXgiLCJzdHJpbmdUb0pzUmVnZXgiLCJ0ZXh0VXRpbCIsInVuRXNjYXBlU3RyaW5nRnJvbVJlZ2V4IiwiZGF0ZVRpbWVGb3JtYXRJU08iLCJkYXRlVGltZUZvcm1hdCIsImdldENvbG9yRm9yVGhlbWUiLCJnZXRUZW1wbGF0ZVNydiIsInRpbWVab25lIiwic2FuaXRpemUiLCJpbml0Q29sdW1ucyIsImZvcm1hdHRlcnMiLCJjb2xvclN0YXRlIiwiZXNjYXBlZFBhdHRlcm4iLCJyZWdleCIsIm1hdGNoIiwiZXNjYXBlSHRtbCIsImNyZWF0ZUNvbHVtbkZvcm1hdHRlciIsImdldENvbG9yRm9yVmFsdWUiLCJkZWZhdWx0Q2VsbEZvcm1hdHRlciIsImpvaW4iLCJpc05hTiIsImZvcm1hdCIsIk51bWJlciIsInNldENvbG9yU3RhdGUiLCJ2YWx1ZUZvcm1hdHRlciIsIm51bWVyaWNWYWx1ZSIsInJlbmRlclJvd1ZhcmlhYmxlcyIsInJvd0luZGV4IiwiY2VsbFZhcmlhYmxlIiwidG9TdHJpbmciLCJmb3JtYXRDb2x1bW5WYWx1ZSIsImZtdCIsInJlbmRlckNlbGwiLCJjb2x1bW5JbmRleCIsImFkZFdpZHRoSGFjayIsImNlbGxTdHlsZXMiLCJjZWxsU3R5bGUiLCJjZWxsQ2xhc3NlcyIsImNlbGxDbGFzcyIsImNlbGwiLCJjb2x1bW5IdG1sIiwiaGlkZGVuIiwicHJlc2VydmVGb3JtYXQiLCJ0ZXh0QWxpZ24iLCJjZWxsTGluayIsImxpbmtVcmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzYW5pdGl6ZWRDZWxsTGluayIsInNhbml0aXplVXJsIiwiY2VsbExpbmtUb29sdGlwIiwibGlua1Rvb2x0aXAiLCJjZWxsVGFyZ2V0IiwibGlua1RhcmdldEJsYW5rIiwiZmlsdGVyYWJsZSIsInBhZ2UiLCJzdGFydFBvcyIsImVuZFBvcyIsInkiLCJjZWxsSHRtbCIsInJvd1N0eWxlIiwicm93Q2xhc3NlcyIsInJvd0NsYXNzIiwicmVuZGVyX3ZhbHVlcyIsInZpc2libGVDb2x1bW5zIiwiZmlsdGVyIiwibmV3Um93IiwiZmluZEluZGV4IiwiaXNPYmplY3QiLCJUYWJsZU1vZGVsIiwibWVyZ2VUYWJsZXNJbnRvTW9kZWwiLCJUaW1lU2VyaWVzIiwiZmxhdHRlbiIsInRpbWVTZXJpZXNGb3JtYXRGaWx0ZXJlciIsIkFycmF5IiwiZGF0YXBvaW50cyIsInJlZHVjZSIsImFjYyIsImNvbmNhdCIsInRhYmxlRGF0YUZvcm1hdEZpbHRlcmVyIiwiZGVzY3JpcHRpb24iLCJtb2RlbCIsImZpbHRlcmVkRGF0YSIsImRwIiwicG9pbnRzIiwidGltZUtleSIsInRpbWUiLCJwb2ludCIsInZhbHVlcyIsImdldEZsb3RQYWlycyIsImNlbGxzIiwic3RhdHMiLCJhbm5vdGF0aW9ucyIsImV2dCIsInRhZ3MiLCJjb2x1bW5OYW1lcyIsImZvckVhY2giLCJub1RhYmxlSW5kZXgiLCJkIiwiZnJvbUNoYXJDb2RlIiwibmFtZXMiLCJtYXhEb2NzIiwiZG9jIiwiZmxhdHRlbmVkIiwicHJvcE5hbWUiLCJ6IiwidGFibGVDb2wiLCJKU09OIiwic3RyaW5naWZ5IiwidHJhbnNmb3JtZXIiLCJtYWtlQ2xhc3NFUzVDb21wYXRpYmxlIiwibG9hZFBsdWdpbkNzcyIsIk1ldHJpY3NQYW5lbEN0cmxFUzYiLCJQYW5lbEN0cmxFUzYiLCJRdWVyeUN0cmxFUzYiXSwic291cmNlUm9vdCI6IiJ9