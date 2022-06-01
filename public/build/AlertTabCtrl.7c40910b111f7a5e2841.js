"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[5718],{

/***/ "./public/app/angular/core_module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "hF": () => (/* binding */ coreModule),
/* harmony export */   "rb": () => (/* binding */ angularModules)
/* harmony export */ });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/angular-npm-1.8.2-307000482b-35ea81a23b.zip/node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);

const coreModule = angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.core', ['ngRoute']); // legacy modules

const angularModules = [coreModule, angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.controllers', []), angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.directives', []), angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.factories', []), angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.services', []), angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.filters', []), angular__WEBPACK_IMPORTED_MODULE_0___default().module('grafana.routes', [])];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (coreModule);

/***/ }),

/***/ "./public/app/angular/promiseToDigest.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ promiseToDigest)
/* harmony export */ });
const promiseToDigest = $scope => promise => promise.finally($scope.$evalAsync);

/***/ }),

/***/ "./public/app/features/alerting/AlertTabCtrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertTabCtrl": () => (/* binding */ AlertTabCtrl),
/* harmony export */   "alertTab": () => (/* binding */ alertTab)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_angular_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/angular/core_module.ts");
/* harmony import */ var app_angular_promiseToDigest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/angular/promiseToDigest.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/state/query_part.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _getAlertingValidationMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/getAlertingValidationMessage.ts");
/* harmony import */ var _state_ThresholdMapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/state/ThresholdMapper.ts");
/* harmony import */ var _state_alertDef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/state/alertDef.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class AlertTabCtrl {
  /** @ngInject */
  constructor($scope, dashboardSrv, uiSegmentSrv, datasourceSrv) {
    this.$scope = $scope;
    this.dashboardSrv = dashboardSrv;
    this.uiSegmentSrv = uiSegmentSrv;
    this.datasourceSrv = datasourceSrv;

    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "panelCtrl", void 0);

    _defineProperty(this, "subTabIndex", void 0);

    _defineProperty(this, "conditionTypes", void 0);

    _defineProperty(this, "alert", void 0);

    _defineProperty(this, "conditionModels", void 0);

    _defineProperty(this, "evalFunctions", void 0);

    _defineProperty(this, "evalOperators", void 0);

    _defineProperty(this, "noDataModes", void 0);

    _defineProperty(this, "executionErrorModes", void 0);

    _defineProperty(this, "addNotificationSegment", void 0);

    _defineProperty(this, "notifications", void 0);

    _defineProperty(this, "alertNotifications", void 0);

    _defineProperty(this, "error", void 0);

    _defineProperty(this, "appSubUrl", void 0);

    _defineProperty(this, "alertHistory", void 0);

    _defineProperty(this, "newAlertRuleTag", void 0);

    _defineProperty(this, "alertingMinIntervalSecs", void 0);

    _defineProperty(this, "alertingMinInterval", void 0);

    _defineProperty(this, "frequencyWarning", void 0);

    _defineProperty(this, "enable", () => {
      this.panel.alert = {};
      this.initModel();
      this.panel.alert.for = '5m'; //default value for new alerts. for existing alerts we use 0m to avoid breaking changes
    });

    this.$scope = $scope;
    this.dashboardSrv = dashboardSrv;
    this.uiSegmentSrv = uiSegmentSrv;
    this.datasourceSrv = datasourceSrv;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
    this.$scope.ctrl = this;
    this.subTabIndex = 0;
    this.evalFunctions = _state_alertDef__WEBPACK_IMPORTED_MODULE_10__/* ["default"].evalFunctions */ .Z.evalFunctions;
    this.evalOperators = _state_alertDef__WEBPACK_IMPORTED_MODULE_10__/* ["default"].evalOperators */ .Z.evalOperators;
    this.conditionTypes = _state_alertDef__WEBPACK_IMPORTED_MODULE_10__/* ["default"].conditionTypes */ .Z.conditionTypes;
    this.noDataModes = _state_alertDef__WEBPACK_IMPORTED_MODULE_10__/* ["default"].noDataModes */ .Z.noDataModes;
    this.executionErrorModes = _state_alertDef__WEBPACK_IMPORTED_MODULE_10__/* ["default"].executionErrorModes */ .Z.executionErrorModes;
    this.appSubUrl = app_core_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].appSubUrl */ .ZP.appSubUrl;
    this.panelCtrl._enableAlert = this.enable;
    this.alertingMinIntervalSecs = app_core_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].alertingMinInterval */ .ZP.alertingMinInterval;
    this.alertingMinInterval = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.rangeUtil.secondsToHms(app_core_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].alertingMinInterval */ .ZP.alertingMinInterval);
  }

  $onInit() {
    this.addNotificationSegment = this.uiSegmentSrv.newPlusButton(); // subscribe to graph threshold handle changes

    const thresholdChangedEventHandler = this.graphThresholdChanged.bind(this);
    this.panelCtrl.events.on(app_types__WEBPACK_IMPORTED_MODULE_7__/* .CoreEvents.thresholdChanged */ .RW.GL, thresholdChangedEventHandler); // set panel alert edit mode

    this.$scope.$on('$destroy', () => {
      this.panelCtrl.events.off(app_types__WEBPACK_IMPORTED_MODULE_7__/* .CoreEvents.thresholdChanged */ .RW.GL, thresholdChangedEventHandler);
      this.panelCtrl.editingThresholds = false;
      this.panelCtrl.render();
    }); // build notification model

    this.notifications = [];
    this.alertNotifications = [];
    this.alertHistory = [];
    return (0,app_angular_promiseToDigest__WEBPACK_IMPORTED_MODULE_11__/* .promiseToDigest */ .E)(this.$scope)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().get('/api/alert-notifications/lookup').then(res => {
      this.notifications = res;
      this.initModel();
      this.validateModel();
    }));
  }

  getAlertHistory() {
    (0,app_angular_promiseToDigest__WEBPACK_IMPORTED_MODULE_11__/* .promiseToDigest */ .E)(this.$scope)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().get(`/api/annotations?dashboardId=${this.panelCtrl.dashboard.id}&panelId=${this.panel.id}&limit=50&type=alert`).then(res => {
      this.alertHistory = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(res, ah => {
        var _this$dashboardSrv$ge;

        ah.time = (_this$dashboardSrv$ge = this.dashboardSrv.getCurrent()) === null || _this$dashboardSrv$ge === void 0 ? void 0 : _this$dashboardSrv$ge.formatDate(ah.time, 'MMM D, YYYY HH:mm:ss');
        ah.stateModel = _state_alertDef__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getStateDisplayModel */ .Z.getStateDisplayModel(ah.newState);
        ah.info = _state_alertDef__WEBPACK_IMPORTED_MODULE_10__/* ["default"].getAlertAnnotationInfo */ .Z.getAlertAnnotationInfo(ah);
        return ah;
      });
    }));
  }

  getNotificationIcon(type) {
    switch (type) {
      case 'email':
        return 'envelope';

      case 'slack':
        return 'slack';

      case 'victorops':
        return 'fa fa-pagelines';

      case 'webhook':
        return 'cube';

      case 'pagerduty':
        return 'fa fa-bullhorn';

      case 'opsgenie':
        return 'bell';

      case 'hipchat':
        return 'fa fa-mail-forward';

      case 'pushover':
        return 'mobile-android';

      case 'kafka':
        return 'arrow-random';

      case 'teams':
        return 'fa fa-windows';
    }

    return 'bell';
  }

  getNotifications() {
    return Promise.resolve(this.notifications.map(item => {
      return this.uiSegmentSrv.newSegment(item.name);
    }));
  }

  notificationAdded() {
    const model = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.notifications, {
      name: this.addNotificationSegment.value
    });

    if (!model) {
      return;
    }

    this.alertNotifications.push({
      name: model.name,
      iconClass: this.getNotificationIcon(model.type),
      isDefault: false,
      uid: model.uid
    }); // avoid duplicates using both id and uid to be backwards compatible.

    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.alert.notifications, n => n.id === model.id || n.uid === model.uid)) {
      this.alert.notifications.push({
        uid: model.uid
      });
    } // reset plus button


    this.addNotificationSegment.value = this.uiSegmentSrv.newPlusButton().value;
    this.addNotificationSegment.html = this.uiSegmentSrv.newPlusButton().html;
    this.addNotificationSegment.fake = true;
  }

  removeNotification(an) {
    // remove notifiers referred to by id and uid to support notifiers added
    // before and after we added support for uid
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(this.alert.notifications, n => n.uid === an.uid || n.id === an.id);
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(this.alertNotifications, n => n.uid === an.uid || n.id === an.id);
  }

  addAlertRuleTag() {
    if (this.newAlertRuleTag.name) {
      this.alert.alertRuleTags[this.newAlertRuleTag.name] = this.newAlertRuleTag.value;
    }

    this.newAlertRuleTag.name = '';
    this.newAlertRuleTag.value = '';
  }

  removeAlertRuleTag(tagName) {
    delete this.alert.alertRuleTags[tagName];
  }

  initModel() {
    const alert = this.alert = this.panel.alert;

    if (!alert) {
      return;
    }

    this.checkFrequency();
    alert.conditions = alert.conditions || [];

    if (alert.conditions.length === 0) {
      alert.conditions.push((0,_getAlertingValidationMessage__WEBPACK_IMPORTED_MODULE_12__/* .getDefaultCondition */ .z)());
    }

    alert.noDataState = alert.noDataState || app_core_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].alertingNoDataOrNullValues */ .ZP.alertingNoDataOrNullValues;
    alert.executionErrorState = alert.executionErrorState || app_core_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"].alertingErrorOrTimeout */ .ZP.alertingErrorOrTimeout;
    alert.frequency = alert.frequency || '1m';
    alert.handler = alert.handler || 1;
    alert.notifications = alert.notifications || [];
    alert.for = alert.for || '0m';
    alert.alertRuleTags = alert.alertRuleTags || {};
    const defaultName = this.panel.title + ' alert';
    alert.name = alert.name || defaultName;
    this.conditionModels = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(alert.conditions, (memo, value) => {
      memo.push(this.buildConditionModel(value));
      return memo;
    }, []);
    _state_ThresholdMapper__WEBPACK_IMPORTED_MODULE_9__/* .ThresholdMapper.alertToGraphThresholds */ .X.alertToGraphThresholds(this.panel);

    for (const addedNotification of alert.notifications) {
      let identifier = addedNotification.uid; // lookup notifier type by uid

      let model = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.notifications, {
        uid: identifier
      }); // fallback using id if uid is missing

      if (!model && addedNotification.id) {
        identifier = addedNotification.id;
        model = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.notifications, {
          id: identifier
        });
      }

      if (!model) {
        app_core_app_events__WEBPACK_IMPORTED_MODULE_4__/* ["default"].publish */ .Z.publish(new _types_events__WEBPACK_IMPORTED_MODULE_8__/* .ShowConfirmModalEvent */ .VJ({
          title: 'Notifier with invalid identifier is detected',
          text: `Do you want to delete notifier with invalid identifier: ${identifier} from the dashboard JSON?`,
          text2: 'After successful deletion, make sure to save the dashboard for storing the update JSON.',
          icon: 'trash-alt',
          confirmText: 'Delete',
          yesText: 'Delete',
          onConfirm: async () => {
            this.removeNotification(addedNotification);
          }
        }));
      }

      if (model && model.isDefault === false) {
        model.iconClass = this.getNotificationIcon(model.type);
        this.alertNotifications.push(model);
      }
    }

    for (const notification of this.notifications) {
      if (notification.isDefault) {
        notification.iconClass = this.getNotificationIcon(notification.type);
        this.alertNotifications.push(notification);
      }
    }

    this.panelCtrl.editingThresholds = true;
    this.panelCtrl.render();
  }

  checkFrequency() {
    this.frequencyWarning = '';

    if (!this.alert.frequency) {
      return;
    }

    if (!this.alert.frequency.match(/^\d+([dhms])$/)) {
      this.frequencyWarning = 'Invalid frequency, has to be numeric followed by one of the following units: "d, h, m, s"';
      return;
    }

    try {
      const frequencySecs = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.rangeUtil.intervalToSeconds(this.alert.frequency);

      if (frequencySecs < this.alertingMinIntervalSecs) {
        this.frequencyWarning = 'A minimum evaluation interval of ' + this.alertingMinInterval + ' have been configured in Grafana and will be used for this alert rule. ' + 'Please contact the administrator to configure a lower interval.';
      }
    } catch (err) {
      this.frequencyWarning = err;
    }
  }

  graphThresholdChanged(evt) {
    for (const condition of this.alert.conditions) {
      if (condition.type === 'query') {
        condition.evaluator.params[evt.handleIndex] = evt.threshold.value;
        this.evaluatorParamsChanged();
        break;
      }
    }
  }

  validateModel() {
    if (!this.alert) {
      return;
    }

    let firstTarget;
    let foundTarget = null;
    const promises = [];

    for (const condition of this.alert.conditions) {
      if (condition.type !== 'query') {
        continue;
      }

      for (const target of this.panel.targets) {
        if (!firstTarget) {
          firstTarget = target;
        }

        if (condition.query.params[0] === target.refId) {
          foundTarget = target;
          break;
        }
      }

      if (!foundTarget) {
        if (firstTarget) {
          condition.query.params[0] = firstTarget.refId;
          foundTarget = firstTarget;
        } else {
          this.error = 'Could not find any metric queries';
          return;
        }
      }

      const datasourceName = foundTarget.datasource || this.panel.datasource;
      promises.push(this.datasourceSrv.get(datasourceName).then((foundTarget => ds => {
        if (!ds.meta.alerting) {
          return Promise.reject('The datasource does not support alerting queries');
        } else if (ds.targetContainsTemplate && ds.targetContainsTemplate(foundTarget)) {
          return Promise.reject('Template variables are not supported in alert queries');
        }

        return Promise.resolve();
      })(foundTarget)));
    }

    Promise.all(promises).then(() => {
      this.error = '';
      this.$scope.$apply();
    }, e => {
      this.error = e;
      this.$scope.$apply();
    });
  }

  buildConditionModel(source) {
    const cm = {
      source: source,
      type: source.type
    };
    cm.queryPart = new app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_6__/* .QueryPart */ .XN(source.query, _state_alertDef__WEBPACK_IMPORTED_MODULE_10__/* ["default"].alertQueryDef */ .Z.alertQueryDef);
    cm.reducerPart = _state_alertDef__WEBPACK_IMPORTED_MODULE_10__/* ["default"].createReducerPart */ .Z.createReducerPart(source.reducer);
    cm.evaluator = source.evaluator;
    cm.operator = source.operator;
    return cm;
  }

  handleQueryPartEvent(conditionModel, evt) {
    switch (evt.name) {
      case 'action-remove-part':
        {
          break;
        }

      case 'get-part-actions':
        {
          return Promise.resolve([]);
        }

      case 'part-param-changed':
        {
          this.validateModel();
        }

      case 'get-param-options':
        {
          const result = this.panel.targets.map(target => {
            return this.uiSegmentSrv.newSegment({
              value: target.refId
            });
          });
          return Promise.resolve(result);
        }

      default:
        {
          return Promise.resolve();
        }
    }

    return Promise.resolve();
  }

  handleReducerPartEvent(conditionModel, evt) {
    switch (evt.name) {
      case 'action':
        {
          conditionModel.source.reducer.type = evt.action.value;
          conditionModel.reducerPart = _state_alertDef__WEBPACK_IMPORTED_MODULE_10__/* ["default"].createReducerPart */ .Z.createReducerPart(conditionModel.source.reducer);
          this.evaluatorParamsChanged();
          break;
        }

      case 'get-part-actions':
        {
          const result = [];

          for (const type of _state_alertDef__WEBPACK_IMPORTED_MODULE_10__/* ["default"].reducerTypes */ .Z.reducerTypes) {
            if (type.value !== conditionModel.source.reducer.type) {
              result.push(type);
            }
          }

          return Promise.resolve(result);
        }
    }

    return Promise.resolve();
  }

  addCondition(type) {
    const condition = (0,_getAlertingValidationMessage__WEBPACK_IMPORTED_MODULE_12__/* .getDefaultCondition */ .z)(); // add to persited model

    this.alert.conditions.push(condition); // add to view model

    this.conditionModels.push(this.buildConditionModel(condition));
  }

  removeCondition(index) {
    this.alert.conditions.splice(index, 1);
    this.conditionModels.splice(index, 1);
  }

  delete() {
    app_core_app_events__WEBPACK_IMPORTED_MODULE_4__/* ["default"].publish */ .Z.publish(new _types_events__WEBPACK_IMPORTED_MODULE_8__/* .ShowConfirmModalEvent */ .VJ({
      title: 'Delete Alert',
      text: 'Are you sure you want to delete this alert rule?',
      text2: 'You need to save dashboard for the delete to take effect',
      icon: 'trash-alt',
      yesText: 'Delete',
      onConfirm: () => {
        delete this.panel.alert;
        this.alert = null;
        this.panel.thresholds = [];
        this.conditionModels = [];
        this.panelCtrl.alertState = null;
        this.panelCtrl.render();
      }
    }));
  }

  evaluatorParamsChanged() {
    _state_ThresholdMapper__WEBPACK_IMPORTED_MODULE_9__/* .ThresholdMapper.alertToGraphThresholds */ .X.alertToGraphThresholds(this.panel);
    this.panelCtrl.render();
  }

  evaluatorTypeChanged(evaluator) {
    // ensure params array is correct length
    switch (evaluator.type) {
      case 'lt':
      case 'gt':
        {
          evaluator.params = [evaluator.params[0]];
          break;
        }

      case 'within_range':
      case 'outside_range':
        {
          evaluator.params = [evaluator.params[0], evaluator.params[1]];
          break;
        }

      case 'no_value':
        {
          evaluator.params = [];
        }
    }

    this.evaluatorParamsChanged();
  }

  clearHistory() {
    app_core_app_events__WEBPACK_IMPORTED_MODULE_4__/* ["default"].publish */ .Z.publish(new _types_events__WEBPACK_IMPORTED_MODULE_8__/* .ShowConfirmModalEvent */ .VJ({
      title: 'Delete Alert History',
      text: 'Are you sure you want to remove all history & annotations for this alert?',
      icon: 'trash-alt',
      yesText: 'Yes',
      onConfirm: () => {
        (0,app_angular_promiseToDigest__WEBPACK_IMPORTED_MODULE_11__/* .promiseToDigest */ .E)(this.$scope)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().post('/api/annotations/mass-delete', {
          dashboardId: this.panelCtrl.dashboard.id,
          panelId: this.panel.id
        }).then(() => {
          this.alertHistory = [];
          this.panelCtrl.refresh();
        }));
      }
    }));
  }

}
AlertTabCtrl.$inject = ["$scope", "dashboardSrv", "uiSegmentSrv", "datasourceSrv"];

/** @ngInject */
function alertTab() {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'public/app/features/alerting/partials/alert_tab.html',
    controller: AlertTabCtrl
  };
}
app_angular_core_module__WEBPACK_IMPORTED_MODULE_3__/* ["default"].directive */ .ZP.directive('alertTab', alertTab);

/***/ }),

/***/ "./public/app/features/alerting/state/ThresholdMapper.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ ThresholdMapper)
/* harmony export */ });
/* unused harmony export hiddenReducerTypes */
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/config.ts");

const hiddenReducerTypes = ['percent_diff', 'percent_diff_abs'];
class ThresholdMapper {
  static alertToGraphThresholds(panel) {
    if (!panel.alert || app_core_config__WEBPACK_IMPORTED_MODULE_0__/* .config.unifiedAlertingEnabled */ .vc.unifiedAlertingEnabled) {
      return false; // no update when no alerts
    }

    for (let i = 0; i < panel.alert.conditions.length; i++) {
      var _condition$reducer;

      const condition = panel.alert.conditions[i];

      if (condition.type !== 'query') {
        continue;
      }

      const evaluator = condition.evaluator;
      const thresholds = panel.thresholds = [];
      const visible = hiddenReducerTypes.indexOf((_condition$reducer = condition.reducer) === null || _condition$reducer === void 0 ? void 0 : _condition$reducer.type) === -1;

      switch (evaluator.type) {
        case 'gt':
          {
            const value = evaluator.params[0];
            thresholds.push({
              value: value,
              op: 'gt',
              visible
            });
            break;
          }

        case 'lt':
          {
            const value = evaluator.params[0];
            thresholds.push({
              value: value,
              op: 'lt',
              visible
            });
            break;
          }

        case 'outside_range':
          {
            const value1 = evaluator.params[0];
            const value2 = evaluator.params[1];

            if (value1 > value2) {
              thresholds.push({
                value: value1,
                op: 'gt',
                visible
              });
              thresholds.push({
                value: value2,
                op: 'lt',
                visible
              });
            } else {
              thresholds.push({
                value: value1,
                op: 'lt',
                visible
              });
              thresholds.push({
                value: value2,
                op: 'gt',
                visible
              });
            }

            break;
          }

        case 'within_range':
          {
            const value1 = evaluator.params[0];
            const value2 = evaluator.params[1];

            if (value1 > value2) {
              thresholds.push({
                value: value1,
                op: 'lt',
                visible
              });
              thresholds.push({
                value: value2,
                op: 'gt',
                visible
              });
            } else {
              thresholds.push({
                value: value1,
                op: 'gt',
                visible
              });
              thresholds.push({
                value: value2,
                op: 'lt',
                visible
              });
            }

            break;
          }
      }

      break;
    }

    for (const t of panel.thresholds) {
      t.fill = panel.options.alertThreshold;
      t.line = panel.options.alertThreshold;
      t.colorMode = 'critical';
    }

    const updated = true;
    return updated;
  }

}

/***/ })

}]);