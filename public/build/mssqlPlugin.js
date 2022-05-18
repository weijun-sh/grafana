"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["mssqlPlugin"],{

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

/***/ "./public/app/plugins/datasource/mssql/config_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MssqlConfigCtrl": () => (/* binding */ MssqlConfigCtrl)
/* harmony export */ });
/* harmony import */ var _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/datasources/utils/passwordHandlers.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class MssqlConfigCtrl {
  /** @ngInject */
  constructor($scope) {
    _defineProperty(this, "onPasswordReset", void 0);

    _defineProperty(this, "onPasswordChange", void 0);

    _defineProperty(this, "showUserCredentials", false);

    _defineProperty(this, "showTlsConfig", false);

    _defineProperty(this, "showCertificateConfig", false);

    this.current = $scope.ctrl.current;
    this.current.jsonData.encrypt = this.current.jsonData.encrypt || 'false';
    this.current.jsonData.sslRootCertFile = this.current.jsonData.sslRootCertFile || '';
    this.current.jsonData.tlsSkipVerify = this.current.jsonData.tlsSkipVerify || false;
    this.current.jsonData.serverName = this.current.jsonData.serverName || '';
    this.current.jsonData.authenticationType = this.current.jsonData.authenticationType || 'SQL Server Authentication';
    this.onPasswordReset = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_0__.createResetHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_0__.PasswordFieldEnum.Password);
    this.onPasswordChange = (0,_features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_0__.createChangeHandler)(this, _features_datasources_utils_passwordHandlers__WEBPACK_IMPORTED_MODULE_0__.PasswordFieldEnum.Password);
    this.onAuthenticationTypeChange();
    this.onEncryptChange();
  }

  onAuthenticationTypeChange() {
    // This is using the fallback in https://github.com/denisenkom/go-mssqldb to use Windows Auth if login/user id is empty.
    if (this.current.jsonData.authenticationType === 'Windows Authentication') {
      this.current.user = '';
      this.current.password = '';
    }

    this.showUserCredentials = this.current.jsonData.authenticationType !== 'Windows Authentication';
  }

  onEncryptChange() {
    this.showTlsConfig = this.current.jsonData.encrypt === 'true';
    this.showCertificateConfig = this.showTlsConfig && this.current.jsonData.tlsSkipVerify === false;
  }

}
MssqlConfigCtrl.$inject = ["$scope"];

_defineProperty(MssqlConfigCtrl, "templateUrl", 'partials/config.html');

/***/ }),

/***/ "./public/app/plugins/datasource/mssql/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MssqlDatasource": () => (/* binding */ MssqlDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mapTo.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/utils/queryResponse.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _response_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/mssql/response_parser.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class MssqlDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)()) {
    super(instanceSettings);
    this.templateSrv = templateSrv;

    _defineProperty(this, "id", void 0);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "responseParser", void 0);

    _defineProperty(this, "interval", void 0);

    this.templateSrv = templateSrv;
    this.name = instanceSettings.name;
    this.id = instanceSettings.id;
    this.responseParser = new _response_parser__WEBPACK_IMPORTED_MODULE_4__["default"]();
    const settingsData = instanceSettings.jsonData || {};
    this.interval = settingsData.timeInterval || '1m';
  }

  interpolateVariable(value, variable) {
    if (typeof value === 'string') {
      if (variable.multi || variable.includeAll) {
        return "'" + value.replace(/'/g, `''`) + "'";
      } else {
        return value;
      }
    }

    if (typeof value === 'number') {
      return value;
    }

    const quotedValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(value, val => {
      if (typeof value === 'number') {
        return value;
      }

      return "'" + val.replace(/'/g, `''`) + "'";
    });

    return quotedValues.join(',');
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

  applyTemplateVariables(target, scopedVars) {
    return {
      refId: target.refId,
      datasource: this.getRef(),
      rawSql: this.templateSrv.replace(target.rawSql, scopedVars, this.interpolateVariable),
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
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: options.range.from.valueOf().toString(),
        to: options.range.to.valueOf().toString(),
        queries: [query]
      },
      requestId: options.annotation.name
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(async res => await this.responseParser.transformAnnotationResponse(options, res.data))));
  }

  filterQuery(query) {
    return !query.hide;
  }

  metricFindQuery(query, optionalOptions) {
    var _range$from, _range$from$valueOf, _range$to, _range$to$valueOf;

    let refId = 'tempvar';

    if (optionalOptions && optionalOptions.variable && optionalOptions.variable.name) {
      refId = optionalOptions.variable.name;
    }

    const range = optionalOptions === null || optionalOptions === void 0 ? void 0 : optionalOptions.range;
    const interpolatedQuery = {
      refId: refId,
      datasource: this.getRef(),
      rawSql: this.templateSrv.replace(query, {}, this.interpolateVariable),
      format: 'table'
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: range === null || range === void 0 ? void 0 : (_range$from = range.from) === null || _range$from === void 0 ? void 0 : (_range$from$valueOf = _range$from.valueOf()) === null || _range$from$valueOf === void 0 ? void 0 : _range$from$valueOf.toString(),
        to: range === null || range === void 0 ? void 0 : (_range$to = range.to) === null || _range$to === void 0 ? void 0 : (_range$to$valueOf = _range$to.valueOf()) === null || _range$to$valueOf === void 0 ? void 0 : _range$to$valueOf.toString(),
        queries: [interpolatedQuery]
      },
      requestId: refId
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(rsp => {
      return this.responseParser.transformMetricFindResponse(rsp);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
    })));
  }

  testDatasource() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
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
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mapTo)({
      status: 'success',
      message: 'Database Connection OK'
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)((0,_grafana_runtime_src_utils_queryResponse__WEBPACK_IMPORTED_MODULE_2__.toTestingStatus)(err));
    })));
  }

  targetContainsTemplate(query) {
    const rawSql = query.rawSql.replace('$__', '');
    return this.templateSrv.containsTemplate(rawSql);
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/mssql/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _config_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/mssql/config_ctrl.ts");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/mssql/datasource.ts");
/* harmony import */ var _query_ctrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/mssql/query_ctrl.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const defaultQuery = `SELECT
    <time_column> as time,
    <text_column> as text,
    <tags_column> as tags
  FROM
    <table name>
  WHERE
    $__timeFilter(time_column)
  ORDER BY
    <time_column> ASC`;

class MssqlAnnotationsQueryCtrl {
  /** @ngInject */
  constructor($scope) {
    this.annotation = $scope.ctrl.annotation;
    this.annotation.rawQuery = this.annotation.rawQuery || defaultQuery;
  }

}

MssqlAnnotationsQueryCtrl.$inject = ["$scope"];

_defineProperty(MssqlAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_2__.MssqlDatasource).setQueryCtrl(_query_ctrl__WEBPACK_IMPORTED_MODULE_3__.MssqlQueryCtrl).setConfigCtrl(_config_ctrl__WEBPACK_IMPORTED_MODULE_1__.MssqlConfigCtrl).setAnnotationQueryCtrl(MssqlAnnotationsQueryCtrl);

/***/ }),

/***/ "./public/app/plugins/datasource/mssql/query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MssqlQueryCtrl": () => (/* binding */ MssqlQueryCtrl)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/sdk.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const defaultQuery = `SELECT
  $__timeEpoch(<time_column>),
  <value column> as value,
  <series name column> as metric
FROM
  <table name>
WHERE
  $__timeFilter(time_column)
ORDER BY
  <time_column> ASC`;
class MssqlQueryCtrl extends app_plugins_sdk__WEBPACK_IMPORTED_MODULE_1__.QueryCtrl {
  /** @ngInject */
  constructor($scope, $injector) {
    super($scope, $injector);

    _defineProperty(this, "formats", void 0);

    _defineProperty(this, "lastQueryMeta", void 0);

    _defineProperty(this, "lastQueryError", void 0);

    _defineProperty(this, "showHelp", false);

    this.target.format = this.target.format || 'time_series';
    this.target.alias = '';
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
      } else {
        this.target.rawSql = defaultQuery;
      }
    }

    this.panelCtrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelEvents.dataReceived, this.onDataReceived.bind(this), $scope);
    this.panelCtrl.events.on(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelEvents.dataError, this.onDataError.bind(this), $scope);
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

}
MssqlQueryCtrl.$inject = ["$scope", "$injector"];

_defineProperty(MssqlQueryCtrl, "templateUrl", 'partials/query.editor.html');

/***/ }),

/***/ "./public/app/plugins/datasource/mssql/response_parser.ts":
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
      return Promise.reject({
        message: 'Missing mandatory time column (with time column alias) in annotation query.'
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCLEdBQUdxUSxxRUFBc0IsQ0FBQ0Usa0ZBQUQsQ0FBL0M7QUFDQSxNQUFNeEksU0FBUyxHQUFHc0kscUVBQXNCLENBQUNJLG1FQUFELENBQXhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvYW5ndWxhci9Bbmd1bGFyTG9jYXRpb25XcmFwcGVyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvcGFuZWwvbWV0cmljc19wYW5lbF9jdHJsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2FuZ3VsYXIvcGFuZWwvcGFuZWxfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9hbmd1bGFyL3BhbmVsL3F1ZXJ5X2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvZGF0YXNvdXJjZXMvdXRpbHMvcGFzc3dvcmRIYW5kbGVycy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbXNzcWwvY29uZmlnX2N0cmwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL21zc3FsL2RhdGFzb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL21zc3FsL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbXNzcWwvcXVlcnlfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbXNzcWwvcmVzcG9uc2VfcGFyc2VyLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvc2RrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlcHJlY2F0aW9uV2FybmluZywgdXJsVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgbG9jYXRpb25TZWFyY2hUb09iamVjdCwgbG9jYXRpb25TZXJ2aWNlLCBuYXZpZ2F0aW9uTG9nZ2VyIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbi8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iL2FlOGU5MDNlZGY4OGE4M2ZlZGQxMTZhZTAyYzA2MjhiZjcyYjE1MGMvc3JjL25nL2xvY2F0aW9uLmpzI0w1XG5jb25zdCBERUZBVUxUX1BPUlRTOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0geyBodHRwOiA4MCwgaHR0cHM6IDQ0MywgZnRwOiAyMSB9O1xuXG5leHBvcnQgY2xhc3MgQW5ndWxhckxvY2F0aW9uV3JhcHBlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWJzVXJsID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5hYnNVcmwpO1xuICAgIHRoaXMuaGFzaCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuaGFzaCk7XG4gICAgdGhpcy5ob3N0ID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5ob3N0KTtcbiAgICB0aGlzLnBhdGggPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnBhdGgpO1xuICAgIHRoaXMucG9ydCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMucG9ydCwgJ3dpbmRvdy5sb2NhdGlvbicpO1xuICAgIHRoaXMucHJvdG9jb2wgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnByb3RvY29sLCAnd2luZG93LmxvY2F0aW9uJyk7XG4gICAgdGhpcy5yZXBsYWNlID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5yZXBsYWNlKTtcbiAgICB0aGlzLnNlYXJjaCA9IHRoaXMud3JhcEluRGVwcmVjYXRpb25XYXJuaW5nKHRoaXMuc2VhcmNoKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy53cmFwSW5EZXByZWNhdGlvbldhcm5pbmcodGhpcy5zdGF0ZSk7XG4gICAgdGhpcy51cmwgPSB0aGlzLndyYXBJbkRlcHJlY2F0aW9uV2FybmluZyh0aGlzLnVybCk7XG4gIH1cblxuICB3cmFwSW5EZXByZWNhdGlvbldhcm5pbmcoZm46IEZ1bmN0aW9uLCByZXBsYWNlbWVudD86IHN0cmluZykge1xuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgICAgZGVwcmVjYXRpb25XYXJuaW5nKCckbG9jYXRpb24nLCBmbi5uYW1lLCByZXBsYWNlbWVudCB8fCAnbG9jYXRpb25TZXJ2aWNlJyk7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgYWJzVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHt0aGlzLnVybCgpfWA7XG4gIH1cblxuICBoYXNoKG5ld0hhc2g/OiBzdHJpbmcgfCBudWxsKSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IGhhc2gnKTtcblxuICAgIGlmICghbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpLmhhc2guc2xpY2UoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQW5ndWxhckxvY2F0aW9uV3JhcHBlciBtZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICAgIH1cbiAgfVxuXG4gIGhvc3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuaG9zdG5hbWU7XG4gIH1cblxuICBwYXRoKHBhdGhuYW1lPzogYW55KSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IHBhdGgnKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uID0gbG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCk7XG5cbiAgICBpZiAocGF0aG5hbWUgIT09IHVuZGVmaW5lZCAmJiBwYXRobmFtZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHBhcnNlZFBhdGggPSBTdHJpbmcocGF0aG5hbWUpO1xuICAgICAgcGFyc2VkUGF0aCA9IHBhcnNlZFBhdGguc3RhcnRzV2l0aCgnLycpID8gcGFyc2VkUGF0aCA6IGAvJHtwYXJzZWRQYXRofWA7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHtwYXJzZWRQYXRofWApO1xuXG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaDogdXJsLnNlYXJjaC5sZW5ndGggPiAwID8gdXJsLnNlYXJjaCA6IGxvY2F0aW9uLnNlYXJjaCxcbiAgICAgICAgaGFzaDogdXJsLmhhc2gubGVuZ3RoID4gMCA/IHVybC5oYXNoIDogbG9jYXRpb24uaGFzaCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHBhdGhuYW1lID09PSBudWxsKSB7XG4gICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnLycpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lO1xuICB9XG5cbiAgcG9ydCgpOiBudW1iZXIgfCBudWxsIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICByZXR1cm4gcGFyc2VJbnQodXJsLnBvcnQsIDEwKSB8fCBERUZBVUxUX1BPUlRTW3VybC5wcm90b2NvbF0gfHwgbnVsbDtcbiAgfVxuXG4gIHByb3RvY29sKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpLnByb3RvY29sLnNsaWNlKDAsIC0xKTtcbiAgfVxuXG4gIHJlcGxhY2UoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBbmd1bGFyTG9jYXRpb25XcmFwcGVyIG1ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBzZWFyY2goc2VhcmNoPzogYW55LCBwYXJhbVZhbHVlPzogYW55KSB7XG4gICAgbmF2aWdhdGlvbkxvZ2dlcignQW5ndWxhckxvY2F0aW9uV3JhcHBlcicsIGZhbHNlLCAnQW5ndWxhciBjb21wYXQgbGF5ZXI6IHNlYXJjaCcpO1xuICAgIGlmICghc2VhcmNoKSB7XG4gICAgICByZXR1cm4gbG9jYXRpb25TZXJ2aWNlLmdldFNlYXJjaE9iamVjdCgpO1xuICAgIH1cblxuICAgIGlmIChzZWFyY2ggJiYgYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxvY2F0aW9uU2VydmljZS5wYXJ0aWFsKHtcbiAgICAgICAgW3NlYXJjaF06IHBhcmFtVmFsdWUsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHNlYXJjaCkge1xuICAgICAgbGV0IG5ld1F1ZXJ5O1xuXG4gICAgICBpZiAodHlwZW9mIHNlYXJjaCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbmV3UXVlcnkgPSB7IC4uLnNlYXJjaCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3UXVlcnkgPSBsb2NhdGlvblNlYXJjaFRvT2JqZWN0KHNlYXJjaCk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG5ld1F1ZXJ5KSkge1xuICAgICAgICAvLyByZW1vdmluZyBwYXJhbXMgd2l0aCBudWxsIHwgdW5kZWZpbmVkXG4gICAgICAgIGlmIChuZXdRdWVyeVtrZXldID09PSBudWxsIHx8IG5ld1F1ZXJ5W2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRlbGV0ZSBuZXdRdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVwZGF0ZWRVcmwgPSB1cmxVdGlsLnJlbmRlclVybChsb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5wYXRobmFtZSwgbmV3UXVlcnkpO1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2godXBkYXRlZFVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0ZShzdGF0ZT86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiBzdGF0ZScpO1xuICAgIHRocm93IG5ldyBFcnJvcignQW5ndWxhckxvY2F0aW9uV3JhcHBlciBtZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xuICB9XG5cbiAgdXJsKG5ld1VybD86IGFueSkge1xuICAgIG5hdmlnYXRpb25Mb2dnZXIoJ0FuZ3VsYXJMb2NhdGlvbldyYXBwZXInLCBmYWxzZSwgJ0FuZ3VsYXIgY29tcGF0IGxheWVyOiB1cmwnKTtcblxuICAgIGlmIChuZXdVcmwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKG5ld1VybC5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goeyAuLi5sb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKSwgaGFzaDogbmV3VXJsIH0pO1xuICAgICAgfSBlbHNlIGlmIChuZXdVcmwuc3RhcnRzV2l0aCgnPycpKSB7XG4gICAgICAgIGxvY2F0aW9uU2VydmljZS5wdXNoKHsgLi4ubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCksIHNlYXJjaDogbmV3VXJsIH0pO1xuICAgICAgfSBlbHNlIGlmIChuZXdVcmwudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsb2NhdGlvblNlcnZpY2UucHVzaCgnLycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2gobmV3VXJsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvY2F0aW9uU2VydmljZTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpO1xuICAgIHJldHVybiBgJHtsb2NhdGlvbi5wYXRobmFtZX0ke2xvY2F0aW9uLnNlYXJjaH0ke2xvY2F0aW9uLmhhc2h9YDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBVbnN1YnNjcmliYWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBEYXRhRnJhbWUsXG4gIERhdGFRdWVyeVJlc3BvbnNlLFxuICBEYXRhU291cmNlQXBpLFxuICBMZWdhY3lSZXNwb25zZURhdGEsXG4gIExvYWRpbmdTdGF0ZSxcbiAgUGFuZWxEYXRhLFxuICBQYW5lbEV2ZW50cyxcbiAgVGltZVJhbmdlLFxuICB0b0RhdGFGcmFtZURUTyxcbiAgdG9MZWdhY3lSZXNwb25zZURhdGEsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUGFuZWxDdHJsIH0gZnJvbSAnYXBwL2FuZ3VsYXIvcGFuZWwvcGFuZWxfY3RybCc7XG5pbXBvcnQgeyBDb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgUGFuZWxNb2RlbCB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc3RhdGUnO1xuaW1wb3J0IHsgYXBwbHlQYW5lbFRpbWVPdmVycmlkZXMgfSBmcm9tICdhcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3V0aWxzL3BhbmVsJztcblxuaW1wb3J0IHsgUGFuZWxRdWVyeVJ1bm5lciB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzL3F1ZXJ5L3N0YXRlL1BhbmVsUXVlcnlSdW5uZXInO1xuXG5jbGFzcyBNZXRyaWNzUGFuZWxDdHJsIGV4dGVuZHMgUGFuZWxDdHJsIHtcbiAgZGVjbGFyZSBkYXRhc291cmNlOiBEYXRhU291cmNlQXBpO1xuICBkZWNsYXJlIHJhbmdlOiBUaW1lUmFuZ2U7XG5cbiAgY29udGV4dFNydjogQ29udGV4dFNydjtcbiAgZGF0YXNvdXJjZVNydjogYW55O1xuICB0aW1lU3J2OiBhbnk7XG4gIHRlbXBsYXRlU3J2OiBhbnk7XG4gIGludGVydmFsOiBhbnk7XG4gIGludGVydmFsTXM6IGFueTtcbiAgcmVzb2x1dGlvbjogYW55O1xuICB0aW1lSW5mbz86IHN0cmluZztcbiAgc2tpcERhdGFPbkluaXQgPSBmYWxzZTtcbiAgZGF0YUxpc3Q6IExlZ2FjeVJlc3BvbnNlRGF0YVtdID0gW107XG4gIHF1ZXJ5U3Vic2NyaXB0aW9uPzogVW5zdWJzY3JpYmFibGUgfCBudWxsO1xuICB1c2VEYXRhRnJhbWVzID0gZmFsc2U7XG4gIHBhbmVsRGF0YT86IFBhbmVsRGF0YTtcblxuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSwgJGluamVjdG9yOiBhbnkpIHtcbiAgICBzdXBlcigkc2NvcGUsICRpbmplY3Rvcik7XG5cbiAgICB0aGlzLmNvbnRleHRTcnYgPSAkaW5qZWN0b3IuZ2V0KCdjb250ZXh0U3J2Jyk7XG4gICAgdGhpcy5kYXRhc291cmNlU3J2ID0gJGluamVjdG9yLmdldCgnZGF0YXNvdXJjZVNydicpO1xuICAgIHRoaXMudGltZVNydiA9ICRpbmplY3Rvci5nZXQoJ3RpbWVTcnYnKTtcbiAgICB0aGlzLnRlbXBsYXRlU3J2ID0gJGluamVjdG9yLmdldCgndGVtcGxhdGVTcnYnKTtcbiAgICB0aGlzLnBhbmVsLmRhdGFzb3VyY2UgPSB0aGlzLnBhbmVsLmRhdGFzb3VyY2UgfHwgbnVsbDtcblxuICAgIHRoaXMuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLnJlZnJlc2gsIHRoaXMub25NZXRyaWNzUGFuZWxSZWZyZXNoLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLnBhbmVsVGVhcmRvd24sIHRoaXMub25QYW5lbFRlYXJEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLmNvbXBvbmVudERpZE1vdW50LCB0aGlzLm9uTWV0cmljc1BhbmVsTW91bnRlZC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHByaXZhdGUgb25NZXRyaWNzUGFuZWxNb3VudGVkKCkge1xuICAgIGNvbnN0IHF1ZXJ5UnVubmVyID0gdGhpcy5wYW5lbC5nZXRRdWVyeVJ1bm5lcigpIGFzIFBhbmVsUXVlcnlSdW5uZXI7XG4gICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbiA9IHF1ZXJ5UnVubmVyXG4gICAgICAuZ2V0RGF0YSh7IHdpdGhUcmFuc2Zvcm1zOiB0cnVlLCB3aXRoRmllbGRDb25maWc6IHRydWUgfSlcbiAgICAgIC5zdWJzY3JpYmUodGhpcy5wYW5lbERhdGFPYnNlcnZlcik7XG4gIH1cblxuICBwcml2YXRlIG9uUGFuZWxUZWFyRG93bigpIHtcbiAgICBpZiAodGhpcy5xdWVyeVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5xdWVyeVN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbk1ldHJpY3NQYW5lbFJlZnJlc2goKSB7XG4gICAgLy8gaWdub3JlIGZldGNoaW5nIGRhdGEgaWYgYW5vdGhlciBwYW5lbCBpcyBpbiBmdWxsc2NyZWVuXG4gICAgaWYgKHRoaXMub3RoZXJQYW5lbEluRnVsbHNjcmVlbk1vZGUoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHdlIGhhdmUgc25hcHNob3QgZGF0YSB1c2UgdGhhdFxuICAgIGlmICh0aGlzLnBhbmVsLnNuYXBzaG90RGF0YSkge1xuICAgICAgdGhpcy51cGRhdGVUaW1lUmFuZ2UoKTtcbiAgICAgIGxldCBkYXRhID0gdGhpcy5wYW5lbC5zbmFwc2hvdERhdGE7XG4gICAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICBpZiAoIWlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IGRhdGEuZGF0YTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wYW5lbERhdGEgPSB7XG4gICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgICAgc2VyaWVzOiBkYXRhLFxuICAgICAgICB0aW1lUmFuZ2U6IHRoaXMucmFuZ2UsXG4gICAgICB9O1xuXG4gICAgICAvLyBEZWZlciBwYW5lbCByZW5kZXJpbmcgdGlsbCB0aGUgbmV4dCBkaWdlc3QgY3ljbGUuXG4gICAgICAvLyBGb3Igc29tZSByZWFzb24gc25hcHNob3QgcGFuZWxzIGRvbid0IGluaXQgYXQgdGhpcyB0aW1lLCBzbyB0aGlzIGhlbHBzIHRvIGF2b2lkIHJlbmRlcmluZyBpc3N1ZXMuXG4gICAgICByZXR1cm4gdGhpcy4kdGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuZGF0YVNuYXBzaG90TG9hZCwgZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjbGVhciBsb2FkaW5nL2Vycm9yIHN0YXRlXG4gICAgZGVsZXRlIHRoaXMuZXJyb3I7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgIC8vIGxvYWQgZGF0YXNvdXJjZSBzZXJ2aWNlXG4gICAgcmV0dXJuIHRoaXMuZGF0YXNvdXJjZVNydlxuICAgICAgLmdldCh0aGlzLnBhbmVsLmRhdGFzb3VyY2UsIHRoaXMucGFuZWwuc2NvcGVkVmFycylcbiAgICAgIC50aGVuKHRoaXMuaXNzdWVRdWVyaWVzLmJpbmQodGhpcykpXG4gICAgICAuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm9jZXNzRGF0YUVycm9yKGVycjogYW55KSB7XG4gICAgLy8gaWYgY2FuY2VsZWQgIGtlZXAgbG9hZGluZyBzZXQgdG8gdHJ1ZVxuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICBjb25zb2xlLmxvZygnUGFuZWwgcmVxdWVzdCBjYW5jZWxsZWQnLCBlcnIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZXJyb3IgPSBlcnIubWVzc2FnZSB8fCAnUmVxdWVzdCBFcnJvcic7XG5cbiAgICBpZiAoZXJyLmRhdGEpIHtcbiAgICAgIGlmIChlcnIuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnIuZGF0YS5tZXNzYWdlO1xuICAgICAgfSBlbHNlIGlmIChlcnIuZGF0YS5lcnJvcikge1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyLmRhdGEuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hbmd1bGFyRGlydHlDaGVjaygpO1xuICB9XG5cbiAgYW5ndWxhckRpcnR5Q2hlY2soKSB7XG4gICAgaWYgKCF0aGlzLiRzY29wZS4kcm9vdC4kJHBoYXNlKSB7XG4gICAgICB0aGlzLiRzY29wZS4kZGlnZXN0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlcyB0aGUgcmVzcG9uc2Ugd2l0aCBpbmZvcm1hdGlvbiBmcm9tIHRoZSBzdHJlYW1cbiAgcGFuZWxEYXRhT2JzZXJ2ZXIgPSB7XG4gICAgbmV4dDogKGRhdGE6IFBhbmVsRGF0YSkgPT4ge1xuICAgICAgdGhpcy5wYW5lbERhdGEgPSBkYXRhO1xuXG4gICAgICBpZiAoZGF0YS5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkVycm9yKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2Nlc3NEYXRhRXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICB9XG5cbiAgICAgIC8vIElnbm9yZSBkYXRhIGluIGxvYWRpbmcgc3RhdGVcbiAgICAgIGlmIChkYXRhLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZykge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFuZ3VsYXJEaXJ0eUNoZWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEucmVxdWVzdCkge1xuICAgICAgICBjb25zdCB7IHRpbWVJbmZvIH0gPSBkYXRhLnJlcXVlc3Q7XG4gICAgICAgIGlmICh0aW1lSW5mbykge1xuICAgICAgICAgIHRoaXMudGltZUluZm8gPSB0aW1lSW5mbztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS50aW1lUmFuZ2UpIHtcbiAgICAgICAgdGhpcy5yYW5nZSA9IGRhdGEudGltZVJhbmdlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy51c2VEYXRhRnJhbWVzKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlRGF0YUZyYW1lcyhkYXRhLnNlcmllcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNYWtlIHRoZSByZXN1bHRzIGxvb2sgYXMgaWYgdGhleSBjYW1lIGRpcmVjdGx5IGZyb20gYSA8Ni4yIGRhdGFzb3VyY2UgcmVxdWVzdFxuICAgICAgICBjb25zdCBsZWdhY3kgPSBkYXRhLnNlcmllcy5tYXAoKHYpID0+IHRvTGVnYWN5UmVzcG9uc2VEYXRhKHYpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVRdWVyeVJlc3VsdCh7IGRhdGE6IGxlZ2FjeSB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmd1bGFyRGlydHlDaGVjaygpO1xuICAgIH0sXG4gIH07XG5cbiAgdXBkYXRlVGltZVJhbmdlKGRhdGFzb3VyY2U/OiBEYXRhU291cmNlQXBpKSB7XG4gICAgdGhpcy5kYXRhc291cmNlID0gZGF0YXNvdXJjZSB8fCB0aGlzLmRhdGFzb3VyY2U7XG4gICAgdGhpcy5yYW5nZSA9IHRoaXMudGltZVNydi50aW1lUmFuZ2UoKTtcblxuICAgIGNvbnN0IG5ld1RpbWVEYXRhID0gYXBwbHlQYW5lbFRpbWVPdmVycmlkZXModGhpcy5wYW5lbCwgdGhpcy5yYW5nZSk7XG4gICAgdGhpcy50aW1lSW5mbyA9IG5ld1RpbWVEYXRhLnRpbWVJbmZvO1xuICAgIHRoaXMucmFuZ2UgPSBuZXdUaW1lRGF0YS50aW1lUmFuZ2U7XG4gIH1cblxuICBpc3N1ZVF1ZXJpZXMoZGF0YXNvdXJjZTogRGF0YVNvdXJjZUFwaSkge1xuICAgIHRoaXMudXBkYXRlVGltZVJhbmdlKGRhdGFzb3VyY2UpO1xuXG4gICAgdGhpcy5kYXRhc291cmNlID0gZGF0YXNvdXJjZTtcblxuICAgIGNvbnN0IHBhbmVsID0gdGhpcy5wYW5lbCBhcyBQYW5lbE1vZGVsO1xuICAgIGNvbnN0IHF1ZXJ5UnVubmVyID0gcGFuZWwuZ2V0UXVlcnlSdW5uZXIoKTtcblxuICAgIHJldHVybiBxdWVyeVJ1bm5lci5ydW4oe1xuICAgICAgZGF0YXNvdXJjZTogcGFuZWwuZGF0YXNvdXJjZSxcbiAgICAgIHF1ZXJpZXM6IHBhbmVsLnRhcmdldHMsXG4gICAgICBwYW5lbElkOiBwYW5lbC5pZCxcbiAgICAgIGRhc2hib2FyZElkOiB0aGlzLmRhc2hib2FyZC5pZCxcbiAgICAgIHRpbWV6b25lOiB0aGlzLmRhc2hib2FyZC5nZXRUaW1lem9uZSgpLFxuICAgICAgdGltZUluZm86IHRoaXMudGltZUluZm8sXG4gICAgICB0aW1lUmFuZ2U6IHRoaXMucmFuZ2UsXG4gICAgICBtYXhEYXRhUG9pbnRzOiBwYW5lbC5tYXhEYXRhUG9pbnRzIHx8IHRoaXMud2lkdGgsXG4gICAgICBtaW5JbnRlcnZhbDogcGFuZWwuaW50ZXJ2YWwsXG4gICAgICBzY29wZWRWYXJzOiBwYW5lbC5zY29wZWRWYXJzLFxuICAgICAgY2FjaGVUaW1lb3V0OiBwYW5lbC5jYWNoZVRpbWVvdXQsXG4gICAgICB0cmFuc2Zvcm1hdGlvbnM6IHBhbmVsLnRyYW5zZm9ybWF0aW9ucyxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURhdGFGcmFtZXMoZGF0YTogRGF0YUZyYW1lW10pIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmRhc2hib2FyZCAmJiB0aGlzLmRhc2hib2FyZC5zbmFwc2hvdCkge1xuICAgICAgdGhpcy5wYW5lbC5zbmFwc2hvdERhdGEgPSBkYXRhLm1hcCgoZnJhbWUpID0+IHRvRGF0YUZyYW1lRFRPKGZyYW1lKSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuZGF0YUZyYW1lc1JlY2VpdmVkLCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMucHJvY2Vzc0RhdGFFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVF1ZXJ5UmVzdWx0KHJlc3VsdDogRGF0YVF1ZXJ5UmVzcG9uc2UpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmRhc2hib2FyZC5zbmFwc2hvdCkge1xuICAgICAgdGhpcy5wYW5lbC5zbmFwc2hvdERhdGEgPSByZXN1bHQuZGF0YTtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LmRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEYXRhIHNvdXJjZSBxdWVyeSByZXN1bHQgaW52YWxpZCwgbWlzc2luZyBkYXRhIGZpZWxkOicsIHJlc3VsdCk7XG4gICAgICByZXN1bHQgPSB7IGRhdGE6IFtdIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuZGF0YVJlY2VpdmVkLCByZXN1bHQuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLnByb2Nlc3NEYXRhRXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgTWV0cmljc1BhbmVsQ3RybCB9O1xuIiwiaW1wb3J0IHsgYXV0byB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQge1xuICBBcHBFdmVudCxcbiAgUGFuZWxFdmVudHMsXG4gIFBhbmVsUGx1Z2luTWV0YSxcbiAgQW5ndWxhclBhbmVsTWVudUl0ZW0sXG4gIEV2ZW50QnVzRXh0ZW5kZWQsXG4gIEV2ZW50QnVzU3J2LFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFuZ3VsYXJMb2NhdGlvbldyYXBwZXIgfSBmcm9tICdhcHAvYW5ndWxhci9Bbmd1bGFyTG9jYXRpb25XcmFwcGVyJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IHByb2ZpbGVyIH0gZnJvbSAnYXBwL2NvcmUvY29yZSc7XG5cbmltcG9ydCB7IERhc2hib2FyZE1vZGVsIH0gZnJvbSAnLi4vLi4vZmVhdHVyZXMvZGFzaGJvYXJkL3N0YXRlJztcblxuZXhwb3J0IGNsYXNzIFBhbmVsQ3RybCB7XG4gIHBhbmVsOiBhbnk7XG4gIGVycm9yOiBhbnk7XG4gIGRlY2xhcmUgZGFzaGJvYXJkOiBEYXNoYm9hcmRNb2RlbDtcbiAgcGx1Z2luTmFtZSA9ICcnO1xuICBwbHVnaW5JZCA9ICcnO1xuICBlZGl0b3JUYWJzOiBhbnk7XG4gICRzY29wZTogYW55O1xuICAkaW5qZWN0b3I6IGF1dG8uSUluamVjdG9yU2VydmljZTtcbiAgJHRpbWVvdXQ6IGFueTtcbiAgZWRpdE1vZGVJbml0aWF0ZWQgPSBmYWxzZTtcbiAgZGVjbGFyZSBoZWlnaHQ6IG51bWJlcjtcbiAgZGVjbGFyZSB3aWR0aDogbnVtYmVyO1xuICBjb250YWluZXJIZWlnaHQ6IGFueTtcbiAgZXZlbnRzOiBFdmVudEJ1c0V4dGVuZGVkO1xuICBsb2FkaW5nID0gZmFsc2U7XG4gIHRpbWluZzogYW55O1xuICAkbG9jYXRpb246IEFuZ3VsYXJMb2NhdGlvbldyYXBwZXI7XG5cbiAgY29uc3RydWN0b3IoJHNjb3BlOiBhbnksICRpbmplY3RvcjogYXV0by5JSW5qZWN0b3JTZXJ2aWNlKSB7XG4gICAgdGhpcy5wYW5lbCA9IHRoaXMucGFuZWwgPz8gJHNjb3BlLiRwYXJlbnQucGFuZWw7XG4gICAgdGhpcy5kYXNoYm9hcmQgPSB0aGlzLmRhc2hib2FyZCA/PyAkc2NvcGUuJHBhcmVudC5kYXNoYm9hcmQ7XG4gICAgdGhpcy4kaW5qZWN0b3IgPSAkaW5qZWN0b3I7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy4kdGltZW91dCA9ICRpbmplY3Rvci5nZXQoJyR0aW1lb3V0Jyk7XG4gICAgdGhpcy5lZGl0b3JUYWJzID0gW107XG4gICAgdGhpcy4kbG9jYXRpb24gPSBuZXcgQW5ndWxhckxvY2F0aW9uV3JhcHBlcigpO1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50QnVzU3J2KCk7XG4gICAgdGhpcy50aW1pbmcgPSB7fTsgLy8gbm90IHVzZWQgYnV0IGhlcmUgdG8gbm90IGJyZWFrIHBsdWdpbnNcblxuICAgIGNvbnN0IHBsdWdpbiA9IGNvbmZpZy5wYW5lbHNbdGhpcy5wYW5lbC50eXBlXTtcbiAgICBpZiAocGx1Z2luKSB7XG4gICAgICB0aGlzLnBsdWdpbklkID0gcGx1Z2luLmlkO1xuICAgICAgdGhpcy5wbHVnaW5OYW1lID0gcGx1Z2luLm5hbWU7XG4gICAgfVxuXG4gICAgJHNjb3BlLiRvbihQYW5lbEV2ZW50cy5jb21wb25lbnREaWRNb3VudC5uYW1lLCAoKSA9PiB0aGlzLnBhbmVsRGlkTW91bnQoKSk7XG4gIH1cblxuICBwYW5lbERpZE1vdW50KCkge1xuICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuY29tcG9uZW50RGlkTW91bnQpO1xuICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuaW5pdGlhbGl6ZWQpO1xuICAgIHRoaXMuZGFzaGJvYXJkLnBhbmVsSW5pdGlhbGl6ZWQodGhpcy5wYW5lbCk7XG4gIH1cblxuICByZW5kZXJpbmdDb21wbGV0ZWQoKSB7XG4gICAgcHJvZmlsZXIucmVuZGVyaW5nQ29tcGxldGVkKCk7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMucGFuZWwucmVmcmVzaCgpO1xuICB9XG5cbiAgcHVibGlzaEFwcEV2ZW50PFQ+KGV2ZW50OiBBcHBFdmVudDxUPiwgcGF5bG9hZD86IFQpIHtcbiAgICB0aGlzLiRzY29wZS4kcm9vdC5hcHBFdmVudChldmVudCwgcGF5bG9hZCk7XG4gIH1cblxuICBpbml0RWRpdE1vZGUoKSB7XG4gICAgaWYgKCF0aGlzLmVkaXRNb2RlSW5pdGlhdGVkKSB7XG4gICAgICB0aGlzLmVkaXRNb2RlSW5pdGlhdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuZWRpdE1vZGVJbml0aWFsaXplZCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRWRpdG9yVGFiKHRpdGxlOiBzdHJpbmcsIGRpcmVjdGl2ZUZuOiBhbnksIGluZGV4PzogbnVtYmVyLCBpY29uPzogYW55KSB7XG4gICAgY29uc3QgZWRpdG9yVGFiID0geyB0aXRsZSwgZGlyZWN0aXZlRm4sIGljb24gfTtcblxuICAgIGlmIChpc1N0cmluZyhkaXJlY3RpdmVGbikpIHtcbiAgICAgIGVkaXRvclRhYi5kaXJlY3RpdmVGbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgdGVtcGxhdGVVcmw6IGRpcmVjdGl2ZUZuIH07XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpbmRleCkge1xuICAgICAgdGhpcy5lZGl0b3JUYWJzLnNwbGljZShpbmRleCwgMCwgZWRpdG9yVGFiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lZGl0b3JUYWJzLnB1c2goZWRpdG9yVGFiKTtcbiAgICB9XG4gIH1cblxuICBnZXRFeHRlbmRlZE1lbnUoKSB7XG4gICAgY29uc3QgbWVudTogQW5ndWxhclBhbmVsTWVudUl0ZW1bXSA9IFtdO1xuICAgIHRoaXMuZXZlbnRzLmVtaXQoUGFuZWxFdmVudHMuaW5pdFBhbmVsQWN0aW9ucywgbWVudSk7XG4gICAgcmV0dXJuIG1lbnU7XG4gIH1cblxuICAvLyBPdmVycmlkZSBpbiBzdWItY2xhc3MgdG8gYWRkIGl0ZW1zIGJlZm9yZSBleHRlbmRlZCBtZW51XG4gIGFzeW5jIGdldEFkZGl0aW9uYWxNZW51SXRlbXMoKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIG90aGVyUGFuZWxJbkZ1bGxzY3JlZW5Nb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmRhc2hib2FyZC5vdGhlclBhbmVsSW5GdWxsc2NyZWVuKHRoaXMucGFuZWwpO1xuICB9XG5cbiAgcmVuZGVyKHBheWxvYWQ/OiBhbnkpIHtcbiAgICB0aGlzLmV2ZW50cy5lbWl0KFBhbmVsRXZlbnRzLnJlbmRlciwgcGF5bG9hZCk7XG4gIH1cblxuICAvLyBvdmVycmlkZW4gZnJvbSByZWFjdFxuICBvblBsdWdpblR5cGVDaGFuZ2UgPSAocGx1Z2luOiBQYW5lbFBsdWdpbk1ldGEpID0+IHt9O1xufVxuIiwiaW1wb3J0IHsgYXV0byB9IGZyb20gJ2FuZ3VsYXInO1xuaW1wb3J0IHsgaW5kZXhPZiB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjbGFzcyBRdWVyeUN0cmw8VCA9IGFueT4ge1xuICB0YXJnZXQhOiBUO1xuICBkYXRhc291cmNlITogYW55O1xuICBwYW5lbEN0cmwhOiBhbnk7XG4gIHBhbmVsOiBhbnk7XG4gIGhhc1Jhd01vZGUhOiBib29sZWFuO1xuICBlcnJvcj86IHN0cmluZyB8IG51bGw7XG4gIGlzTGFzdFF1ZXJ5OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyAkc2NvcGU6IGFueSwgcHVibGljICRpbmplY3RvcjogYXV0by5JSW5qZWN0b3JTZXJ2aWNlKSB7XG4gICAgdGhpcy5wYW5lbEN0cmwgPSB0aGlzLnBhbmVsQ3RybCA/PyAkc2NvcGUuY3RybC5wYW5lbEN0cmw7XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLnRhcmdldCA/PyAkc2NvcGUuY3RybC50YXJnZXQ7XG4gICAgdGhpcy5kYXRhc291cmNlID0gdGhpcy5kYXRhc291cmNlID8/ICRzY29wZS5jdHJsLmRhdGFzb3VyY2U7XG4gICAgdGhpcy5wYW5lbCA9IHRoaXMucGFuZWxDdHJsPy5wYW5lbCA/PyAkc2NvcGUuY3RybC5wYW5lbEN0cmwucGFuZWw7XG4gICAgdGhpcy5pc0xhc3RRdWVyeSA9IGluZGV4T2YodGhpcy5wYW5lbC50YXJnZXRzLCB0aGlzLnRhcmdldCkgPT09IHRoaXMucGFuZWwudGFyZ2V0cy5sZW5ndGggLSAxO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnBhbmVsQ3RybC5yZWZyZXNoKCk7XG4gIH1cbn1cbiIsIi8qKlxuICogU2V0IG9mIGhhbmRsZXJzIGZvciBzZWN1cmUgcGFzc3dvcmQgZmllbGQgaW4gQW5ndWxhciBjb21wb25lbnRzLiBUaGV5IGhhbmRsZSBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGhcbiAqIHBhc3N3b3JkcyBzdG9yZWQgaW4gcGxhaW4gdGV4dCBmaWVsZHMuXG4gKi9cblxuaW1wb3J0IHsgU3ludGhldGljRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBlbnVtIFBhc3N3b3JkRmllbGRFbnVtIHtcbiAgUGFzc3dvcmQgPSAncGFzc3dvcmQnLFxuICBCYXNpY0F1dGhQYXNzd29yZCA9ICdiYXNpY0F1dGhQYXNzd29yZCcsXG59XG5cbi8qKlxuICogQmFzaWMgc2hhcGUgZm9yIHNldHRpbmdzIGNvbnRyb2xsZXJzIGluIGF0IHRoZSBtb21lbnQgbW9zdGx5IGFuZ3VsYXIgZGF0YSBzb3VyY2UgcGx1Z2lucy5cbiAqL1xuZXhwb3J0IHR5cGUgQ3RybCA9IHtcbiAgY3VycmVudDoge1xuICAgIHNlY3VyZUpzb25GaWVsZHM6IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IGJvb2xlYW47XG4gICAgfTtcbiAgICBzZWN1cmVKc29uRGF0YT86IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgICB9O1xuICAgIHBhc3N3b3JkPzogc3RyaW5nO1xuICAgIGJhc2ljQXV0aFBhc3N3b3JkPzogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlc2V0SGFuZGxlciA9XG4gIChjdHJsOiBDdHJsLCBmaWVsZDogUGFzc3dvcmRGaWVsZEVudW0pID0+IChldmVudDogU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIFJlc2V0IGFsc28gbm9ybWFsIHBsYWluIHRleHQgcGFzc3dvcmQgdG8gcmVtb3ZlIGl0IGFuZCBvbmx5IHNhdmUgaXQgaW4gc2VjdXJlSnNvbkRhdGEuXG4gICAgY3RybC5jdXJyZW50W2ZpZWxkXSA9IHVuZGVmaW5lZDtcbiAgICBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkZpZWxkc1tmaWVsZF0gPSBmYWxzZTtcbiAgICBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGEgPSBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGEgfHwge307XG4gICAgY3RybC5jdXJyZW50LnNlY3VyZUpzb25EYXRhW2ZpZWxkXSA9ICcnO1xuICB9O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2hhbmdlSGFuZGxlciA9XG4gIChjdHJsOiBhbnksIGZpZWxkOiBQYXNzd29yZEZpZWxkRW51bSkgPT4gKGV2ZW50OiBTeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGN0cmwuY3VycmVudC5zZWN1cmVKc29uRGF0YSA9IGN0cmwuY3VycmVudC5zZWN1cmVKc29uRGF0YSB8fCB7fTtcbiAgICBjdHJsLmN1cnJlbnQuc2VjdXJlSnNvbkRhdGFbZmllbGRdID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgfTtcbiIsImltcG9ydCB7XG4gIGNyZWF0ZUNoYW5nZUhhbmRsZXIsXG4gIGNyZWF0ZVJlc2V0SGFuZGxlcixcbiAgUGFzc3dvcmRGaWVsZEVudW0sXG59IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2RhdGFzb3VyY2VzL3V0aWxzL3Bhc3N3b3JkSGFuZGxlcnMnO1xuXG5leHBvcnQgY2xhc3MgTXNzcWxDb25maWdDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL2NvbmZpZy5odG1sJztcblxuICAvLyBTZXQgdGhyb3VnaCBhbmd1bGFyIGJpbmRpbmdzXG4gIGRlY2xhcmUgY3VycmVudDogYW55O1xuXG4gIG9uUGFzc3dvcmRSZXNldDogUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlUmVzZXRIYW5kbGVyPjtcbiAgb25QYXNzd29yZENoYW5nZTogUmV0dXJuVHlwZTx0eXBlb2YgY3JlYXRlQ2hhbmdlSGFuZGxlcj47XG4gIHNob3dVc2VyQ3JlZGVudGlhbHMgPSBmYWxzZTtcbiAgc2hvd1Rsc0NvbmZpZyA9IGZhbHNlO1xuICBzaG93Q2VydGlmaWNhdGVDb25maWcgPSBmYWxzZTtcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gJHNjb3BlLmN0cmwuY3VycmVudDtcbiAgICB0aGlzLmN1cnJlbnQuanNvbkRhdGEuZW5jcnlwdCA9IHRoaXMuY3VycmVudC5qc29uRGF0YS5lbmNyeXB0IHx8ICdmYWxzZSc7XG4gICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLnNzbFJvb3RDZXJ0RmlsZSA9IHRoaXMuY3VycmVudC5qc29uRGF0YS5zc2xSb290Q2VydEZpbGUgfHwgJyc7XG4gICAgdGhpcy5jdXJyZW50Lmpzb25EYXRhLnRsc1NraXBWZXJpZnkgPSB0aGlzLmN1cnJlbnQuanNvbkRhdGEudGxzU2tpcFZlcmlmeSB8fCBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnQuanNvbkRhdGEuc2VydmVyTmFtZSA9IHRoaXMuY3VycmVudC5qc29uRGF0YS5zZXJ2ZXJOYW1lIHx8ICcnO1xuICAgIHRoaXMuY3VycmVudC5qc29uRGF0YS5hdXRoZW50aWNhdGlvblR5cGUgPSB0aGlzLmN1cnJlbnQuanNvbkRhdGEuYXV0aGVudGljYXRpb25UeXBlIHx8ICdTUUwgU2VydmVyIEF1dGhlbnRpY2F0aW9uJztcbiAgICB0aGlzLm9uUGFzc3dvcmRSZXNldCA9IGNyZWF0ZVJlc2V0SGFuZGxlcih0aGlzLCBQYXNzd29yZEZpZWxkRW51bS5QYXNzd29yZCk7XG4gICAgdGhpcy5vblBhc3N3b3JkQ2hhbmdlID0gY3JlYXRlQ2hhbmdlSGFuZGxlcih0aGlzLCBQYXNzd29yZEZpZWxkRW51bS5QYXNzd29yZCk7XG4gICAgdGhpcy5vbkF1dGhlbnRpY2F0aW9uVHlwZUNoYW5nZSgpO1xuICAgIHRoaXMub25FbmNyeXB0Q2hhbmdlKCk7XG4gIH1cblxuICBvbkF1dGhlbnRpY2F0aW9uVHlwZUNoYW5nZSgpIHtcbiAgICAvLyBUaGlzIGlzIHVzaW5nIHRoZSBmYWxsYmFjayBpbiBodHRwczovL2dpdGh1Yi5jb20vZGVuaXNlbmtvbS9nby1tc3NxbGRiIHRvIHVzZSBXaW5kb3dzIEF1dGggaWYgbG9naW4vdXNlciBpZCBpcyBlbXB0eS5cbiAgICBpZiAodGhpcy5jdXJyZW50Lmpzb25EYXRhLmF1dGhlbnRpY2F0aW9uVHlwZSA9PT0gJ1dpbmRvd3MgQXV0aGVudGljYXRpb24nKSB7XG4gICAgICB0aGlzLmN1cnJlbnQudXNlciA9ICcnO1xuICAgICAgdGhpcy5jdXJyZW50LnBhc3N3b3JkID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93VXNlckNyZWRlbnRpYWxzID0gdGhpcy5jdXJyZW50Lmpzb25EYXRhLmF1dGhlbnRpY2F0aW9uVHlwZSAhPT0gJ1dpbmRvd3MgQXV0aGVudGljYXRpb24nO1xuICB9XG5cbiAgb25FbmNyeXB0Q2hhbmdlKCkge1xuICAgIHRoaXMuc2hvd1Rsc0NvbmZpZyA9IHRoaXMuY3VycmVudC5qc29uRGF0YS5lbmNyeXB0ID09PSAndHJ1ZSc7XG4gICAgdGhpcy5zaG93Q2VydGlmaWNhdGVDb25maWcgPSB0aGlzLnNob3dUbHNDb25maWcgJiYgdGhpcy5jdXJyZW50Lmpzb25EYXRhLnRsc1NraXBWZXJpZnkgPT09IGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBtYXAgYXMgX21hcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBsYXN0VmFsdWVGcm9tLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQW5ub3RhdGlvbkV2ZW50LCBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgTWV0cmljRmluZFZhbHVlLCBTY29wZWRWYXJzLCBUaW1lUmFuZ2UgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2UsIERhdGFTb3VyY2VXaXRoQmFja2VuZCwgRmV0Y2hSZXNwb25zZSwgZ2V0QmFja2VuZFNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgdG9UZXN0aW5nU3RhdHVzIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZS9zcmMvdXRpbHMvcXVlcnlSZXNwb25zZSc7XG5pbXBvcnQgeyBnZXRUZW1wbGF0ZVNydiwgVGVtcGxhdGVTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvdGVtcGxhdGluZy90ZW1wbGF0ZV9zcnYnO1xuXG5pbXBvcnQgUmVzcG9uc2VQYXJzZXIgZnJvbSAnLi9yZXNwb25zZV9wYXJzZXInO1xuaW1wb3J0IHsgTXNzcWxPcHRpb25zLCBNc3NxbFF1ZXJ5LCBNc3NxbFF1ZXJ5Rm9ySW50ZXJwb2xhdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgTXNzcWxEYXRhc291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZVdpdGhCYWNrZW5kPE1zc3FsUXVlcnksIE1zc3FsT3B0aW9ucz4ge1xuICBpZDogYW55O1xuICBuYW1lOiBhbnk7XG4gIHJlc3BvbnNlUGFyc2VyOiBSZXNwb25zZVBhcnNlcjtcbiAgaW50ZXJ2YWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBpbnN0YW5jZVNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5nczxNc3NxbE9wdGlvbnM+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVTcnY6IFRlbXBsYXRlU3J2ID0gZ2V0VGVtcGxhdGVTcnYoKVxuICApIHtcbiAgICBzdXBlcihpbnN0YW5jZVNldHRpbmdzKTtcbiAgICB0aGlzLm5hbWUgPSBpbnN0YW5jZVNldHRpbmdzLm5hbWU7XG4gICAgdGhpcy5pZCA9IGluc3RhbmNlU2V0dGluZ3MuaWQ7XG4gICAgdGhpcy5yZXNwb25zZVBhcnNlciA9IG5ldyBSZXNwb25zZVBhcnNlcigpO1xuICAgIGNvbnN0IHNldHRpbmdzRGF0YSA9IGluc3RhbmNlU2V0dGluZ3MuanNvbkRhdGEgfHwgKHt9IGFzIE1zc3FsT3B0aW9ucyk7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldHRpbmdzRGF0YS50aW1lSW50ZXJ2YWwgfHwgJzFtJztcbiAgfVxuXG4gIGludGVycG9sYXRlVmFyaWFibGUodmFsdWU6IGFueSwgdmFyaWFibGU6IGFueSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodmFyaWFibGUubXVsdGkgfHwgdmFyaWFibGUuaW5jbHVkZUFsbCkge1xuICAgICAgICByZXR1cm4gXCInXCIgKyB2YWx1ZS5yZXBsYWNlKC8nL2csIGAnJ2ApICsgXCInXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBxdW90ZWRWYWx1ZXMgPSBfbWFwKHZhbHVlLCAodmFsKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcIidcIiArIHZhbC5yZXBsYWNlKC8nL2csIGAnJ2ApICsgXCInXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIHF1b3RlZFZhbHVlcy5qb2luKCcsJyk7XG4gIH1cblxuICBpbnRlcnBvbGF0ZVZhcmlhYmxlc0luUXVlcmllcyhcbiAgICBxdWVyaWVzOiBNc3NxbFF1ZXJ5Rm9ySW50ZXJwb2xhdGlvbltdLFxuICAgIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnNcbiAgKTogTXNzcWxRdWVyeUZvckludGVycG9sYXRpb25bXSB7XG4gICAgbGV0IGV4cGFuZGVkUXVlcmllcyA9IHF1ZXJpZXM7XG4gICAgaWYgKHF1ZXJpZXMgJiYgcXVlcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBleHBhbmRlZFF1ZXJpZXMgPSBxdWVyaWVzLm1hcCgocXVlcnkpID0+IHtcbiAgICAgICAgY29uc3QgZXhwYW5kZWRRdWVyeSA9IHtcbiAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgICAgIHJhd1NxbDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnJhd1NxbCwgc2NvcGVkVmFycywgdGhpcy5pbnRlcnBvbGF0ZVZhcmlhYmxlKSxcbiAgICAgICAgICByYXdRdWVyeTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGV4cGFuZGVkUXVlcnk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cGFuZGVkUXVlcmllcztcbiAgfVxuXG4gIGFwcGx5VGVtcGxhdGVWYXJpYWJsZXModGFyZ2V0OiBNc3NxbFF1ZXJ5LCBzY29wZWRWYXJzOiBTY29wZWRWYXJzKTogUmVjb3JkPHN0cmluZywgYW55PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZklkOiB0YXJnZXQucmVmSWQsXG4gICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgcmF3U3FsOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodGFyZ2V0LnJhd1NxbCwgc2NvcGVkVmFycywgdGhpcy5pbnRlcnBvbGF0ZVZhcmlhYmxlKSxcbiAgICAgIGZvcm1hdDogdGFyZ2V0LmZvcm1hdCxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgYW5ub3RhdGlvblF1ZXJ5KG9wdGlvbnM6IGFueSk6IFByb21pc2U8QW5ub3RhdGlvbkV2ZW50W10+IHtcbiAgICBpZiAoIW9wdGlvbnMuYW5ub3RhdGlvbi5yYXdRdWVyeSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHsgbWVzc2FnZTogJ1F1ZXJ5IG1pc3NpbmcgaW4gYW5ub3RhdGlvbiBkZWZpbml0aW9uJyB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgIHJlZklkOiBvcHRpb25zLmFubm90YXRpb24ubmFtZSxcbiAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICByYXdTcWw6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShvcHRpb25zLmFubm90YXRpb24ucmF3UXVlcnksIG9wdGlvbnMuc2NvcGVkVmFycywgdGhpcy5pbnRlcnBvbGF0ZVZhcmlhYmxlKSxcbiAgICAgIGZvcm1hdDogJ3RhYmxlJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICBnZXRCYWNrZW5kU3J2KClcbiAgICAgICAgLmZldGNoPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KHtcbiAgICAgICAgICB1cmw6ICcvYXBpL2RzL3F1ZXJ5JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBmcm9tOiBvcHRpb25zLnJhbmdlLmZyb20udmFsdWVPZigpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB0bzogb3B0aW9ucy5yYW5nZS50by52YWx1ZU9mKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHF1ZXJpZXM6IFtxdWVyeV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1ZXN0SWQ6IG9wdGlvbnMuYW5ub3RhdGlvbi5uYW1lLFxuICAgICAgICB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICBhc3luYyAocmVzOiBGZXRjaFJlc3BvbnNlPEJhY2tlbmREYXRhU291cmNlUmVzcG9uc2U+KSA9PlxuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJlc3BvbnNlUGFyc2VyLnRyYW5zZm9ybUFubm90YXRpb25SZXNwb25zZShvcHRpb25zLCByZXMuZGF0YSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZmlsdGVyUXVlcnkocXVlcnk6IE1zc3FsUXVlcnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXF1ZXJ5LmhpZGU7XG4gIH1cblxuICBtZXRyaWNGaW5kUXVlcnkocXVlcnk6IHN0cmluZywgb3B0aW9uYWxPcHRpb25zOiBhbnkpOiBQcm9taXNlPE1ldHJpY0ZpbmRWYWx1ZVtdPiB7XG4gICAgbGV0IHJlZklkID0gJ3RlbXB2YXInO1xuICAgIGlmIChvcHRpb25hbE9wdGlvbnMgJiYgb3B0aW9uYWxPcHRpb25zLnZhcmlhYmxlICYmIG9wdGlvbmFsT3B0aW9ucy52YXJpYWJsZS5uYW1lKSB7XG4gICAgICByZWZJZCA9IG9wdGlvbmFsT3B0aW9ucy52YXJpYWJsZS5uYW1lO1xuICAgIH1cblxuICAgIGNvbnN0IHJhbmdlID0gb3B0aW9uYWxPcHRpb25zPy5yYW5nZSBhcyBUaW1lUmFuZ2U7XG5cbiAgICBjb25zdCBpbnRlcnBvbGF0ZWRRdWVyeSA9IHtcbiAgICAgIHJlZklkOiByZWZJZCxcbiAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICByYXdTcWw6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeSwge30sIHRoaXMuaW50ZXJwb2xhdGVWYXJpYWJsZSksXG4gICAgICBmb3JtYXQ6ICd0YWJsZScsXG4gICAgfTtcblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAgIC5mZXRjaDxCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlPih7XG4gICAgICAgICAgdXJsOiAnL2FwaS9kcy9xdWVyeScsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZnJvbTogcmFuZ2U/LmZyb20/LnZhbHVlT2YoKT8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHRvOiByYW5nZT8udG8/LnZhbHVlT2YoKT8udG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHF1ZXJpZXM6IFtpbnRlcnBvbGF0ZWRRdWVyeV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1ZXN0SWQ6IHJlZklkLFxuICAgICAgICB9KVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKHJzcCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2VQYXJzZXIudHJhbnNmb3JtTWV0cmljRmluZFJlc3BvbnNlKHJzcCk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICApO1xuICB9XG5cbiAgdGVzdERhdGFzb3VyY2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbShcbiAgICAgIGdldEJhY2tlbmRTcnYoKVxuICAgICAgICAuZmV0Y2goe1xuICAgICAgICAgIHVybDogJy9hcGkvZHMvcXVlcnknLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGZyb206ICc1bScsXG4gICAgICAgICAgICB0bzogJ25vdycsXG4gICAgICAgICAgICBxdWVyaWVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZWZJZDogJ0EnLFxuICAgICAgICAgICAgICAgIGludGVydmFsTXM6IDEsXG4gICAgICAgICAgICAgICAgbWF4RGF0YVBvaW50czogMSxcbiAgICAgICAgICAgICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgICAgICAgICAgIHJhd1NxbDogJ1NFTEVDVCAxJyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICd0YWJsZScsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcFRvKHsgc3RhdHVzOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICdEYXRhYmFzZSBDb25uZWN0aW9uIE9LJyB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvZih0b1Rlc3RpbmdTdGF0dXMoZXJyKSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICk7XG4gIH1cblxuICB0YXJnZXRDb250YWluc1RlbXBsYXRlKHF1ZXJ5OiBNc3NxbFF1ZXJ5KTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmF3U3FsID0gcXVlcnkucmF3U3FsLnJlcGxhY2UoJyRfXycsICcnKTtcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVNydi5jb250YWluc1RlbXBsYXRlKHJhd1NxbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFTb3VyY2VQbHVnaW4gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgTXNzcWxDb25maWdDdHJsIH0gZnJvbSAnLi9jb25maWdfY3RybCc7XG5pbXBvcnQgeyBNc3NxbERhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgTXNzcWxRdWVyeUN0cmwgfSBmcm9tICcuL3F1ZXJ5X2N0cmwnO1xuaW1wb3J0IHsgTXNzcWxRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBkZWZhdWx0UXVlcnkgPSBgU0VMRUNUXG4gICAgPHRpbWVfY29sdW1uPiBhcyB0aW1lLFxuICAgIDx0ZXh0X2NvbHVtbj4gYXMgdGV4dCxcbiAgICA8dGFnc19jb2x1bW4+IGFzIHRhZ3NcbiAgRlJPTVxuICAgIDx0YWJsZSBuYW1lPlxuICBXSEVSRVxuICAgICRfX3RpbWVGaWx0ZXIodGltZV9jb2x1bW4pXG4gIE9SREVSIEJZXG4gICAgPHRpbWVfY29sdW1uPiBBU0NgO1xuXG5jbGFzcyBNc3NxbEFubm90YXRpb25zUXVlcnlDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL2Fubm90YXRpb25zLmVkaXRvci5odG1sJztcblxuICBkZWNsYXJlIGFubm90YXRpb246IGFueTtcblxuICAvKiogQG5nSW5qZWN0ICovXG4gIGNvbnN0cnVjdG9yKCRzY29wZTogYW55KSB7XG4gICAgdGhpcy5hbm5vdGF0aW9uID0gJHNjb3BlLmN0cmwuYW5ub3RhdGlvbjtcbiAgICB0aGlzLmFubm90YXRpb24ucmF3UXVlcnkgPSB0aGlzLmFubm90YXRpb24ucmF3UXVlcnkgfHwgZGVmYXVsdFF1ZXJ5O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwbHVnaW4gPSBuZXcgRGF0YVNvdXJjZVBsdWdpbjxNc3NxbERhdGFzb3VyY2UsIE1zc3FsUXVlcnk+KE1zc3FsRGF0YXNvdXJjZSlcbiAgLnNldFF1ZXJ5Q3RybChNc3NxbFF1ZXJ5Q3RybClcbiAgLnNldENvbmZpZ0N0cmwoTXNzcWxDb25maWdDdHJsKVxuICAuc2V0QW5ub3RhdGlvblF1ZXJ5Q3RybChNc3NxbEFubm90YXRpb25zUXVlcnlDdHJsKTtcbiIsImltcG9ydCB7IGF1dG8gfSBmcm9tICdhbmd1bGFyJztcblxuaW1wb3J0IHsgUGFuZWxFdmVudHMsIFF1ZXJ5UmVzdWx0TWV0YSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUXVlcnlDdHJsIH0gZnJvbSAnYXBwL3BsdWdpbnMvc2RrJztcblxuaW1wb3J0IHsgTXNzcWxRdWVyeSB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBkZWZhdWx0UXVlcnkgPSBgU0VMRUNUXG4gICRfX3RpbWVFcG9jaCg8dGltZV9jb2x1bW4+KSxcbiAgPHZhbHVlIGNvbHVtbj4gYXMgdmFsdWUsXG4gIDxzZXJpZXMgbmFtZSBjb2x1bW4+IGFzIG1ldHJpY1xuRlJPTVxuICA8dGFibGUgbmFtZT5cbldIRVJFXG4gICRfX3RpbWVGaWx0ZXIodGltZV9jb2x1bW4pXG5PUkRFUiBCWVxuICA8dGltZV9jb2x1bW4+IEFTQ2A7XG5cbmV4cG9ydCBjbGFzcyBNc3NxbFF1ZXJ5Q3RybCBleHRlbmRzIFF1ZXJ5Q3RybDxNc3NxbFF1ZXJ5PiB7XG4gIHN0YXRpYyB0ZW1wbGF0ZVVybCA9ICdwYXJ0aWFscy9xdWVyeS5lZGl0b3IuaHRtbCc7XG5cbiAgZm9ybWF0czogYW55W107XG4gIGxhc3RRdWVyeU1ldGE/OiBRdWVyeVJlc3VsdE1ldGE7XG4gIGxhc3RRdWVyeUVycm9yPzogc3RyaW5nO1xuICBzaG93SGVscCA9IGZhbHNlO1xuXG4gIC8qKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoJHNjb3BlOiBhbnksICRpbmplY3RvcjogYXV0by5JSW5qZWN0b3JTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJHNjb3BlLCAkaW5qZWN0b3IpO1xuXG4gICAgdGhpcy50YXJnZXQuZm9ybWF0ID0gdGhpcy50YXJnZXQuZm9ybWF0IHx8ICd0aW1lX3Nlcmllcyc7XG4gICAgdGhpcy50YXJnZXQuYWxpYXMgPSAnJztcbiAgICB0aGlzLmZvcm1hdHMgPSBbXG4gICAgICB7IHRleHQ6ICdUaW1lIHNlcmllcycsIHZhbHVlOiAndGltZV9zZXJpZXMnIH0sXG4gICAgICB7IHRleHQ6ICdUYWJsZScsIHZhbHVlOiAndGFibGUnIH0sXG4gICAgXTtcblxuICAgIGlmICghdGhpcy50YXJnZXQucmF3U3FsKSB7XG4gICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIHdoZW4gaW4gdGFibGUgcGFuZWxcbiAgICAgIGlmICh0aGlzLnBhbmVsQ3RybC5wYW5lbC50eXBlID09PSAndGFibGUnKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LmZvcm1hdCA9ICd0YWJsZSc7XG4gICAgICAgIHRoaXMudGFyZ2V0LnJhd1NxbCA9ICdTRUxFQ1QgMSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhcmdldC5yYXdTcWwgPSBkZWZhdWx0UXVlcnk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wYW5lbEN0cmwuZXZlbnRzLm9uKFBhbmVsRXZlbnRzLmRhdGFSZWNlaXZlZCwgdGhpcy5vbkRhdGFSZWNlaXZlZC5iaW5kKHRoaXMpLCAkc2NvcGUpO1xuICAgIHRoaXMucGFuZWxDdHJsLmV2ZW50cy5vbihQYW5lbEV2ZW50cy5kYXRhRXJyb3IsIHRoaXMub25EYXRhRXJyb3IuYmluZCh0aGlzKSwgJHNjb3BlKTtcbiAgfVxuXG4gIG9uRGF0YVJlY2VpdmVkKGRhdGFMaXN0OiBhbnkpIHtcbiAgICB0aGlzLmxhc3RRdWVyeUVycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubGFzdFF1ZXJ5TWV0YSA9IGRhdGFMaXN0WzBdPy5tZXRhO1xuICB9XG5cbiAgb25EYXRhRXJyb3IoZXJyOiBhbnkpIHtcbiAgICBpZiAoZXJyLmRhdGEgJiYgZXJyLmRhdGEucmVzdWx0cykge1xuICAgICAgY29uc3QgcXVlcnlSZXMgPSBlcnIuZGF0YS5yZXN1bHRzW3RoaXMudGFyZ2V0LnJlZklkXTtcbiAgICAgIGlmIChxdWVyeVJlcykge1xuICAgICAgICB0aGlzLmxhc3RRdWVyeUVycm9yID0gcXVlcnlSZXMuZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBBbm5vdGF0aW9uRXZlbnQsIERhdGFGcmFtZSwgTWV0cmljRmluZFZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlLCB0b0RhdGFRdWVyeVJlc3BvbnNlLCBGZXRjaFJlc3BvbnNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNlUGFyc2VyIHtcbiAgdHJhbnNmb3JtTWV0cmljRmluZFJlc3BvbnNlKHJhdzogRmV0Y2hSZXNwb25zZTxCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlPik6IE1ldHJpY0ZpbmRWYWx1ZVtdIHtcbiAgICBjb25zdCBmcmFtZXMgPSB0b0RhdGFRdWVyeVJlc3BvbnNlKHJhdykuZGF0YSBhcyBEYXRhRnJhbWVbXTtcblxuICAgIGlmICghZnJhbWVzIHx8ICFmcmFtZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgZnJhbWUgPSBmcmFtZXNbMF07XG5cbiAgICBjb25zdCB2YWx1ZXM6IE1ldHJpY0ZpbmRWYWx1ZVtdID0gW107XG4gICAgY29uc3QgdGV4dEZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ19fdGV4dCcpO1xuICAgIGNvbnN0IHZhbHVlRmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAnX192YWx1ZScpO1xuXG4gICAgaWYgKHRleHRGaWVsZCAmJiB2YWx1ZUZpZWxkKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRGaWVsZC52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWVzLnB1c2goeyB0ZXh0OiAnJyArIHRleHRGaWVsZC52YWx1ZXMuZ2V0KGkpLCB2YWx1ZTogJycgKyB2YWx1ZUZpZWxkLnZhbHVlcy5nZXQoaSkgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlcy5wdXNoKFxuICAgICAgICAuLi5mcmFtZS5maWVsZHNcbiAgICAgICAgICAuZmxhdE1hcCgoZikgPT4gZi52YWx1ZXMudG9BcnJheSgpKVxuICAgICAgICAgIC5tYXAoKHYpID0+ICh7XG4gICAgICAgICAgICB0ZXh0OiB2LFxuICAgICAgICAgIH0pKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KHZhbHVlcy5tYXAoKHYpID0+IHYudGV4dCkpKS5tYXAoKHRleHQpID0+ICh7XG4gICAgICB0ZXh0LFxuICAgICAgdmFsdWU6IHZhbHVlcy5maW5kKCh2KSA9PiB2LnRleHQgPT09IHRleHQpPy52YWx1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBhc3luYyB0cmFuc2Zvcm1Bbm5vdGF0aW9uUmVzcG9uc2Uob3B0aW9uczogYW55LCBkYXRhOiBCYWNrZW5kRGF0YVNvdXJjZVJlc3BvbnNlKTogUHJvbWlzZTxBbm5vdGF0aW9uRXZlbnRbXT4ge1xuICAgIGNvbnN0IGZyYW1lcyA9IHRvRGF0YVF1ZXJ5UmVzcG9uc2UoeyBkYXRhOiBkYXRhIH0pLmRhdGEgYXMgRGF0YUZyYW1lW107XG4gICAgaWYgKCFmcmFtZXMgfHwgIWZyYW1lcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgZnJhbWUgPSBmcmFtZXNbMF07XG4gICAgY29uc3QgdGltZUZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ3RpbWUnKTtcblxuICAgIGlmICghdGltZUZpZWxkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoeyBtZXNzYWdlOiAnTWlzc2luZyBtYW5kYXRvcnkgdGltZSBjb2x1bW4gKHdpdGggdGltZSBjb2x1bW4gYWxpYXMpIGluIGFubm90YXRpb24gcXVlcnkuJyB9KTtcbiAgICB9XG5cbiAgICBjb25zdCB0aW1lRW5kRmllbGQgPSBmcmFtZS5maWVsZHMuZmluZCgoZikgPT4gZi5uYW1lID09PSAndGltZWVuZCcpO1xuICAgIGNvbnN0IHRleHRGaWVsZCA9IGZyYW1lLmZpZWxkcy5maW5kKChmKSA9PiBmLm5hbWUgPT09ICd0ZXh0Jyk7XG4gICAgY29uc3QgdGFnc0ZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gJ3RhZ3MnKTtcblxuICAgIGNvbnN0IGxpc3Q6IEFubm90YXRpb25FdmVudFtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmFtZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGltZUVuZCA9IHRpbWVFbmRGaWVsZCAmJiB0aW1lRW5kRmllbGQudmFsdWVzLmdldChpKSA/IE1hdGguZmxvb3IodGltZUVuZEZpZWxkLnZhbHVlcy5nZXQoaSkpIDogdW5kZWZpbmVkO1xuICAgICAgbGlzdC5wdXNoKHtcbiAgICAgICAgYW5ub3RhdGlvbjogb3B0aW9ucy5hbm5vdGF0aW9uLFxuICAgICAgICB0aW1lOiBNYXRoLmZsb29yKHRpbWVGaWVsZC52YWx1ZXMuZ2V0KGkpKSxcbiAgICAgICAgdGltZUVuZCxcbiAgICAgICAgdGV4dDogdGV4dEZpZWxkICYmIHRleHRGaWVsZC52YWx1ZXMuZ2V0KGkpID8gdGV4dEZpZWxkLnZhbHVlcy5nZXQoaSkgOiAnJyxcbiAgICAgICAgdGFnczpcbiAgICAgICAgICB0YWdzRmllbGQgJiYgdGFnc0ZpZWxkLnZhbHVlcy5nZXQoaSlcbiAgICAgICAgICAgID8gdGFnc0ZpZWxkLnZhbHVlc1xuICAgICAgICAgICAgICAgIC5nZXQoaSlcbiAgICAgICAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgICAgICAgLnNwbGl0KC9cXHMqLFxccyovKVxuICAgICAgICAgICAgOiBbXSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2FkUGx1Z2luQ3NzIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBNZXRyaWNzUGFuZWxDdHJsIGFzIE1ldHJpY3NQYW5lbEN0cmxFUzYgfSBmcm9tICdhcHAvYW5ndWxhci9wYW5lbC9tZXRyaWNzX3BhbmVsX2N0cmwnO1xuaW1wb3J0IHsgUGFuZWxDdHJsIGFzIFBhbmVsQ3RybEVTNiB9IGZyb20gJ2FwcC9hbmd1bGFyL3BhbmVsL3BhbmVsX2N0cmwnO1xuaW1wb3J0IHsgUXVlcnlDdHJsIGFzIFF1ZXJ5Q3RybEVTNiB9IGZyb20gJ2FwcC9hbmd1bGFyL3BhbmVsL3F1ZXJ5X2N0cmwnO1xuXG5jb25zdCBQYW5lbEN0cmwgPSBtYWtlQ2xhc3NFUzVDb21wYXRpYmxlKFBhbmVsQ3RybEVTNik7XG5jb25zdCBNZXRyaWNzUGFuZWxDdHJsID0gbWFrZUNsYXNzRVM1Q29tcGF0aWJsZShNZXRyaWNzUGFuZWxDdHJsRVM2KTtcbmNvbnN0IFF1ZXJ5Q3RybCA9IG1ha2VDbGFzc0VTNUNvbXBhdGlibGUoUXVlcnlDdHJsRVM2KTtcblxuZXhwb3J0IHsgUGFuZWxDdHJsLCBNZXRyaWNzUGFuZWxDdHJsLCBRdWVyeUN0cmwsIGxvYWRQbHVnaW5Dc3MgfTtcbiJdLCJuYW1lcyI6WyJkZXByZWNhdGlvbldhcm5pbmciLCJ1cmxVdGlsIiwibG9jYXRpb25TZWFyY2hUb09iamVjdCIsImxvY2F0aW9uU2VydmljZSIsIm5hdmlnYXRpb25Mb2dnZXIiLCJERUZBVUxUX1BPUlRTIiwiaHR0cCIsImh0dHBzIiwiZnRwIiwiQW5ndWxhckxvY2F0aW9uV3JhcHBlciIsImNvbnN0cnVjdG9yIiwiYWJzVXJsIiwid3JhcEluRGVwcmVjYXRpb25XYXJuaW5nIiwiaGFzaCIsImhvc3QiLCJwYXRoIiwicG9ydCIsInByb3RvY29sIiwicmVwbGFjZSIsInNlYXJjaCIsInN0YXRlIiwidXJsIiwiZm4iLCJyZXBsYWNlbWVudCIsInNlbGYiLCJ3cmFwcGVyIiwibmFtZSIsImFwcGx5IiwiYXJndW1lbnRzIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJuZXdIYXNoIiwiZ2V0TG9jYXRpb24iLCJzbGljZSIsIkVycm9yIiwiVVJMIiwiaHJlZiIsImhvc3RuYW1lIiwicGF0aG5hbWUiLCJ1bmRlZmluZWQiLCJwYXJzZWRQYXRoIiwiU3RyaW5nIiwic3RhcnRzV2l0aCIsInB1c2giLCJsZW5ndGgiLCJwYXJzZUludCIsInBhcmFtVmFsdWUiLCJnZXRTZWFyY2hPYmplY3QiLCJwYXJ0aWFsIiwibmV3UXVlcnkiLCJrZXkiLCJPYmplY3QiLCJrZXlzIiwidXBkYXRlZFVybCIsInJlbmRlclVybCIsIm5ld1VybCIsInRyaW0iLCJpc0FycmF5IiwiTG9hZGluZ1N0YXRlIiwiUGFuZWxFdmVudHMiLCJ0b0RhdGFGcmFtZURUTyIsInRvTGVnYWN5UmVzcG9uc2VEYXRhIiwiUGFuZWxDdHJsIiwiYXBwbHlQYW5lbFRpbWVPdmVycmlkZXMiLCJNZXRyaWNzUGFuZWxDdHJsIiwiJHNjb3BlIiwiJGluamVjdG9yIiwibmV4dCIsImRhdGEiLCJwYW5lbERhdGEiLCJsb2FkaW5nIiwicHJvY2Vzc0RhdGFFcnJvciIsImVycm9yIiwiTG9hZGluZyIsImFuZ3VsYXJEaXJ0eUNoZWNrIiwicmVxdWVzdCIsInRpbWVJbmZvIiwidGltZVJhbmdlIiwicmFuZ2UiLCJ1c2VEYXRhRnJhbWVzIiwiaGFuZGxlRGF0YUZyYW1lcyIsInNlcmllcyIsImxlZ2FjeSIsIm1hcCIsInYiLCJoYW5kbGVRdWVyeVJlc3VsdCIsImNvbnRleHRTcnYiLCJnZXQiLCJkYXRhc291cmNlU3J2IiwidGltZVNydiIsInRlbXBsYXRlU3J2IiwicGFuZWwiLCJkYXRhc291cmNlIiwiZXZlbnRzIiwib24iLCJyZWZyZXNoIiwib25NZXRyaWNzUGFuZWxSZWZyZXNoIiwiYmluZCIsInBhbmVsVGVhcmRvd24iLCJvblBhbmVsVGVhckRvd24iLCJjb21wb25lbnREaWRNb3VudCIsIm9uTWV0cmljc1BhbmVsTW91bnRlZCIsInF1ZXJ5UnVubmVyIiwiZ2V0UXVlcnlSdW5uZXIiLCJxdWVyeVN1YnNjcmlwdGlvbiIsImdldERhdGEiLCJ3aXRoVHJhbnNmb3JtcyIsIndpdGhGaWVsZENvbmZpZyIsInN1YnNjcmliZSIsInBhbmVsRGF0YU9ic2VydmVyIiwidW5zdWJzY3JpYmUiLCJvdGhlclBhbmVsSW5GdWxsc2NyZWVuTW9kZSIsInNuYXBzaG90RGF0YSIsInVwZGF0ZVRpbWVSYW5nZSIsIkRvbmUiLCIkdGltZW91dCIsImVtaXQiLCJkYXRhU25hcHNob3RMb2FkIiwic2NvcGVkVmFycyIsInRoZW4iLCJpc3N1ZVF1ZXJpZXMiLCJjYXRjaCIsImVyciIsImNhbmNlbGxlZCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiJHJvb3QiLCIkJHBoYXNlIiwiJGRpZ2VzdCIsIm5ld1RpbWVEYXRhIiwicnVuIiwicXVlcmllcyIsInRhcmdldHMiLCJwYW5lbElkIiwiaWQiLCJkYXNoYm9hcmRJZCIsImRhc2hib2FyZCIsInRpbWV6b25lIiwiZ2V0VGltZXpvbmUiLCJtYXhEYXRhUG9pbnRzIiwid2lkdGgiLCJtaW5JbnRlcnZhbCIsImludGVydmFsIiwiY2FjaGVUaW1lb3V0IiwidHJhbnNmb3JtYXRpb25zIiwic25hcHNob3QiLCJmcmFtZSIsImRhdGFGcmFtZXNSZWNlaXZlZCIsInJlc3VsdCIsImRhdGFSZWNlaXZlZCIsImlzU3RyaW5nIiwiRXZlbnRCdXNTcnYiLCJjb25maWciLCJwcm9maWxlciIsInBsdWdpbiIsIiRwYXJlbnQiLCJlZGl0b3JUYWJzIiwiJGxvY2F0aW9uIiwidGltaW5nIiwicGFuZWxzIiwidHlwZSIsInBsdWdpbklkIiwicGx1Z2luTmFtZSIsIiRvbiIsInBhbmVsRGlkTW91bnQiLCJpbml0aWFsaXplZCIsInBhbmVsSW5pdGlhbGl6ZWQiLCJyZW5kZXJpbmdDb21wbGV0ZWQiLCJwdWJsaXNoQXBwRXZlbnQiLCJldmVudCIsInBheWxvYWQiLCJhcHBFdmVudCIsImluaXRFZGl0TW9kZSIsImVkaXRNb2RlSW5pdGlhdGVkIiwiZWRpdE1vZGVJbml0aWFsaXplZCIsImFkZEVkaXRvclRhYiIsInRpdGxlIiwiZGlyZWN0aXZlRm4iLCJpbmRleCIsImljb24iLCJlZGl0b3JUYWIiLCJ0ZW1wbGF0ZVVybCIsInNwbGljZSIsImdldEV4dGVuZGVkTWVudSIsIm1lbnUiLCJpbml0UGFuZWxBY3Rpb25zIiwiZ2V0QWRkaXRpb25hbE1lbnVJdGVtcyIsIm90aGVyUGFuZWxJbkZ1bGxzY3JlZW4iLCJyZW5kZXIiLCJpbmRleE9mIiwiUXVlcnlDdHJsIiwicGFuZWxDdHJsIiwiY3RybCIsInRhcmdldCIsImlzTGFzdFF1ZXJ5IiwiUGFzc3dvcmRGaWVsZEVudW0iLCJjcmVhdGVSZXNldEhhbmRsZXIiLCJmaWVsZCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNlY3VyZUpzb25GaWVsZHMiLCJzZWN1cmVKc29uRGF0YSIsImNyZWF0ZUNoYW5nZUhhbmRsZXIiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJNc3NxbENvbmZpZ0N0cmwiLCJqc29uRGF0YSIsImVuY3J5cHQiLCJzc2xSb290Q2VydEZpbGUiLCJ0bHNTa2lwVmVyaWZ5Iiwic2VydmVyTmFtZSIsImF1dGhlbnRpY2F0aW9uVHlwZSIsIm9uUGFzc3dvcmRSZXNldCIsIlBhc3N3b3JkIiwib25QYXNzd29yZENoYW5nZSIsIm9uQXV0aGVudGljYXRpb25UeXBlQ2hhbmdlIiwib25FbmNyeXB0Q2hhbmdlIiwidXNlciIsInBhc3N3b3JkIiwic2hvd1VzZXJDcmVkZW50aWFscyIsInNob3dUbHNDb25maWciLCJzaG93Q2VydGlmaWNhdGVDb25maWciLCJfbWFwIiwibGFzdFZhbHVlRnJvbSIsIm9mIiwiY2F0Y2hFcnJvciIsIm1hcFRvIiwiRGF0YVNvdXJjZVdpdGhCYWNrZW5kIiwiZ2V0QmFja2VuZFNydiIsInRvVGVzdGluZ1N0YXR1cyIsImdldFRlbXBsYXRlU3J2IiwiUmVzcG9uc2VQYXJzZXIiLCJNc3NxbERhdGFzb3VyY2UiLCJpbnN0YW5jZVNldHRpbmdzIiwicmVzcG9uc2VQYXJzZXIiLCJzZXR0aW5nc0RhdGEiLCJ0aW1lSW50ZXJ2YWwiLCJpbnRlcnBvbGF0ZVZhcmlhYmxlIiwidmFyaWFibGUiLCJtdWx0aSIsImluY2x1ZGVBbGwiLCJxdW90ZWRWYWx1ZXMiLCJ2YWwiLCJqb2luIiwiaW50ZXJwb2xhdGVWYXJpYWJsZXNJblF1ZXJpZXMiLCJleHBhbmRlZFF1ZXJpZXMiLCJxdWVyeSIsImV4cGFuZGVkUXVlcnkiLCJnZXRSZWYiLCJyYXdTcWwiLCJyYXdRdWVyeSIsImFwcGx5VGVtcGxhdGVWYXJpYWJsZXMiLCJyZWZJZCIsImZvcm1hdCIsImFubm90YXRpb25RdWVyeSIsIm9wdGlvbnMiLCJhbm5vdGF0aW9uIiwiUHJvbWlzZSIsInJlamVjdCIsImZldGNoIiwibWV0aG9kIiwiZnJvbSIsInZhbHVlT2YiLCJ0b1N0cmluZyIsInRvIiwicmVxdWVzdElkIiwicGlwZSIsInJlcyIsInRyYW5zZm9ybUFubm90YXRpb25SZXNwb25zZSIsImZpbHRlclF1ZXJ5IiwiaGlkZSIsIm1ldHJpY0ZpbmRRdWVyeSIsIm9wdGlvbmFsT3B0aW9ucyIsImludGVycG9sYXRlZFF1ZXJ5IiwicnNwIiwidHJhbnNmb3JtTWV0cmljRmluZFJlc3BvbnNlIiwidGVzdERhdGFzb3VyY2UiLCJpbnRlcnZhbE1zIiwic3RhdHVzIiwidGFyZ2V0Q29udGFpbnNUZW1wbGF0ZSIsImNvbnRhaW5zVGVtcGxhdGUiLCJEYXRhU291cmNlUGx1Z2luIiwiTXNzcWxRdWVyeUN0cmwiLCJkZWZhdWx0UXVlcnkiLCJNc3NxbEFubm90YXRpb25zUXVlcnlDdHJsIiwic2V0UXVlcnlDdHJsIiwic2V0Q29uZmlnQ3RybCIsInNldEFubm90YXRpb25RdWVyeUN0cmwiLCJhbGlhcyIsImZvcm1hdHMiLCJ0ZXh0Iiwib25EYXRhUmVjZWl2ZWQiLCJkYXRhRXJyb3IiLCJvbkRhdGFFcnJvciIsImRhdGFMaXN0IiwibGFzdFF1ZXJ5RXJyb3IiLCJsYXN0UXVlcnlNZXRhIiwibWV0YSIsInJlc3VsdHMiLCJxdWVyeVJlcyIsInRvRGF0YVF1ZXJ5UmVzcG9uc2UiLCJyYXciLCJmcmFtZXMiLCJ2YWx1ZXMiLCJ0ZXh0RmllbGQiLCJmaWVsZHMiLCJmaW5kIiwiZiIsInZhbHVlRmllbGQiLCJpIiwiZmxhdE1hcCIsInRvQXJyYXkiLCJBcnJheSIsIlNldCIsInRpbWVGaWVsZCIsInRpbWVFbmRGaWVsZCIsInRhZ3NGaWVsZCIsImxpc3QiLCJ0aW1lRW5kIiwiTWF0aCIsImZsb29yIiwidGltZSIsInRhZ3MiLCJzcGxpdCIsIm1ha2VDbGFzc0VTNUNvbXBhdGlibGUiLCJsb2FkUGx1Z2luQ3NzIiwiTWV0cmljc1BhbmVsQ3RybEVTNiIsIlBhbmVsQ3RybEVTNiIsIlF1ZXJ5Q3RybEVTNiJdLCJzb3VyY2VSb290IjoiIn0=