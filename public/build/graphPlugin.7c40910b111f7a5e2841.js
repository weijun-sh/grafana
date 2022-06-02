"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[1260],{

 "./public/app/features/alerting/state/ThresholdMapper.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "X": () => ( ThresholdMapper)
 });
 var app_core_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/config.ts");

const hiddenReducerTypes = ['percent_diff', 'percent_diff_abs'];
class ThresholdMapper {
  static alertToGraphThresholds(panel) {
    if (!panel.alert || app_core_config__WEBPACK_IMPORTED_MODULE_0__ .vc.unifiedAlertingEnabled) {
      return false; 
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

 }),

 "./public/app/features/dashboard/utils/loadSnapshotData.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "y": () => ( loadSnapshotData)
 });
 var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var app_core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/config.ts");
 var _query_state_DashboardQueryRunner_SnapshotWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/SnapshotWorker.ts");
 var _query_state_runRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/query/state/runRequest.ts");
 var _services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
 var _panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");






function loadSnapshotData(panel, dashboard) {
  const data = (0,_query_state_runRequest__WEBPACK_IMPORTED_MODULE_3__ .F9)(panel.snapshotData);
  const worker = new _query_state_DashboardQueryRunner_SnapshotWorker__WEBPACK_IMPORTED_MODULE_2__ .g();
  const options = {
    dashboard,
    range: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDefaultTimeRange)()
  };
  const annotationEvents = worker.canWork(options) ? worker.getAnnotationsInSnapshot(dashboard, panel.id) : [];
  const annotations = [new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.ArrayDataFrame(annotationEvents)];
  const timeData = (0,_panel__WEBPACK_IMPORTED_MODULE_5__ .W1)(panel, (0,_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__ .$t)().timeRange());
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
      theme: app_core_config__WEBPACK_IMPORTED_MODULE_1__ .vc.theme2,
      timeZone: dashboard.getTimezone()
    }),
    annotations
  };
}

 }),

 "./public/app/features/panel/panellinks/linkSuppliers.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "H": () => ( getPanelLinksSupplier),
   "n": () => ( getFieldLinksSupplier)
 });
 var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _link_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/panel/panellinks/link_srv.ts");



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
          } 


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
        return (0,_link_srv__WEBPACK_IMPORTED_MODULE_1__ .Bq)().getDataLinkUIModel(link, replace, value);
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
        return (0,_link_srv__WEBPACK_IMPORTED_MODULE_1__ .Bq)().getDataLinkUIModel(link, panel.replaceVariables, panel);
      });
    }
  };
};

 }),

 "./public/app/plugins/panel/graph/module.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "GraphCtrl": () => ( GraphCtrl),
  "plugin": () => ( module_plugin)
});

var jquery_flot = __webpack_require__("./public/vendor/flot/jquery.flot.js");
var jquery_flot_selection = __webpack_require__("./public/vendor/flot/jquery.flot.selection.js");
var jquery_flot_time = __webpack_require__("./public/vendor/flot/jquery.flot.time.js");
var jquery_flot_stack = __webpack_require__("./public/vendor/flot/jquery.flot.stack.js");
var jquery_flot_stackpercent = __webpack_require__("./public/vendor/flot/jquery.flot.stackpercent.js");
var jquery_flot_fillbelow = __webpack_require__("./public/vendor/flot/jquery.flot.fillbelow.js");
var jquery_flot_crosshair = __webpack_require__("./public/vendor/flot/jquery.flot.crosshair.js");
var jquery_flot_dashes = __webpack_require__("./public/vendor/flot/jquery.flot.dashes.js");
var jquery_exposed = __webpack_require__("./.yarn/cache/jquery-npm-3.6.0-ca7872bdbb-8fd5fef4aa.zip/node_modules/jquery/dist/jquery-exposed.js");
var jquery_exposed_default = __webpack_require__.n(jquery_exposed);
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var js_drop = __webpack_require__("./.yarn/cache/tether-drop-https-3382d2649f-a10a7337d5.zip/node_modules/tether-drop/dist/js/drop.js");
var drop_default = __webpack_require__.n(js_drop);
var src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
;
init.$inject = ["plot"];

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const createAnnotationToolip = (element, event, plot) => {
  const injector = (0,src.getLegacyAngularInjector)();
  const content = document.createElement('div');
  content.innerHTML = '<annotation-tooltip event="event" on-edit="onEdit()"></annotation-tooltip>';
  injector.invoke(['$compile', '$rootScope', ($compile, $rootScope) => {
    const eventManager = plot.getOptions().events.manager;
    const tmpScope = $rootScope.$new(true);
    tmpScope.event = event;

    tmpScope.onEdit = () => {
      eventManager.editEvent(event);
    };

    $compile(content)(tmpScope);
    tmpScope.$digest();
    tmpScope.$destroy();
    const drop = new (drop_default())({
      target: element[0],
      content: content,
      position: 'bottom center',
      classes: 'drop-popover drop-popover--annotation',
      openOn: 'hover',
      hoverCloseDelay: 200,
      tetherOptions: {
        constraints: [{
          to: 'window',
          pin: true,
          attachment: 'both'
        }]
      }
    });
    drop.open();
    drop.on('close', () => {
      setTimeout(() => {
        drop.destroy();
      });
    });
  }]);
};

createAnnotationToolip.$inject = ["element", "event", "plot"];
let markerElementToAttachTo = null;

const createEditPopover = (element, event, plot) => {
  const eventManager = plot.getOptions().events.manager;

  if (eventManager.editorOpen) {
    markerElementToAttachTo = element;
    return;
  } 


  eventManager.editorOpened(); 

  markerElementToAttachTo = element; 

  setTimeout(() => {
    const injector = (0,src.getLegacyAngularInjector)();
    const content = document.createElement('div');
    content.innerHTML = '<event-editor panel-ctrl="panelCtrl" event="event" close="close()"></event-editor>';
    injector.invoke(['$compile', '$rootScope', ($compile, $rootScope) => {
      const scope = $rootScope.$new(true);
      let drop;
      scope.event = event;
      scope.panelCtrl = eventManager.panelCtrl;

      scope.close = () => {
        drop.close();
      };

      $compile(content)(scope);
      scope.$digest();
      drop = new (drop_default())({
        target: markerElementToAttachTo[0],
        content: content,
        position: 'bottom center',
        classes: 'drop-popover drop-popover--form',
        openOn: 'click',
        tetherOptions: {
          constraints: [{
            to: 'window',
            pin: true,
            attachment: 'both'
          }]
        }
      });
      drop.open();
      eventManager.editorOpened();
      drop.on('close', () => {
        setTimeout(() => {
          eventManager.editorClosed();
          scope.$destroy();
          drop.destroy();
        });
      });
    }]);
  }, 100);
};

createEditPopover.$inject = ["element", "event", "plot"];



class DrawableEvent {
  constructor(object, drawFunc, clearFunc, moveFunc, left, top, width, height) {
    _defineProperty(this, "_object", void 0);

    _defineProperty(this, "_drawFunc", void 0);

    _defineProperty(this, "_clearFunc", void 0);

    _defineProperty(this, "_moveFunc", void 0);

    _defineProperty(this, "_position", void 0);

    _defineProperty(this, "_width", void 0);

    _defineProperty(this, "_height", void 0);

    this._object = object;
    this._drawFunc = drawFunc;
    this._clearFunc = clearFunc;
    this._moveFunc = moveFunc;
    this._position = {
      left,
      top
    };
    this._width = width;
    this._height = height;
  }

  width() {
    return this._width;
  }

  height() {
    return this._height;
  }

  position() {
    return this._position;
  }

  draw() {
    this._drawFunc(this._object);
  }

  clear() {
    this._clearFunc(this._object);
  }

  getObject() {
    return this._object;
  }

  moveTo(position) {
    this._position = position;

    this._moveFunc(this._object, this._position);
  }

}
DrawableEvent.$inject = ["object", "drawFunc", "clearFunc", "moveFunc", "left", "top", "width", "height"];

class VisualEvent {
  constructor(options, drawableEvent) {
    _defineProperty(this, "_parent", void 0);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_drawableEvent", void 0);

    _defineProperty(this, "_hidden", void 0);

    this._options = options;
    this._drawableEvent = drawableEvent;
    this._hidden = false;
  }

  visual() {
    return this._drawableEvent;
  }

  getOptions() {
    return this._options;
  }

  getParent() {
    return this._parent;
  }

  isHidden() {
    return this._hidden;
  }

  hide() {
    this._hidden = true;
  }

  unhide() {
    this._hidden = false;
  }

}
VisualEvent.$inject = ["options", "drawableEvent"];

class EventMarkers {
  constructor(plot) {
    _defineProperty(this, "_events", void 0);

    _defineProperty(this, "_types", void 0);

    _defineProperty(this, "_plot", void 0);

    _defineProperty(this, "eventsEnabled", void 0);

    this._events = [];
    this._types = [];
    this._plot = plot;
    this.eventsEnabled = false;
  }

  getEvents() {
    return this._events;
  }

  setTypes(types) {
    return this._types = types;
  }


  setupEvents(events) {
    const parts = (0,lodash.partition)(events, 'isRegion');
    const regions = parts[0];
    events = parts[1];
    jquery_exposed_default().each(events, (index, event) => {
      const ve = new VisualEvent(event, this._buildDiv(event));

      this._events.push(ve);
    });
    jquery_exposed_default().each(regions, (index, event) => {
      const vre = new VisualEvent(event, this._buildRegDiv(event));

      this._events.push(vre);
    });

    this._events.sort((a, b) => {
      const ao = a.getOptions(),
            bo = b.getOptions();

      if (ao.min > bo.min) {
        return 1;
      }

      if (ao.min < bo.min) {
        return -1;
      }

      return 0;
    });
  }


  drawEvents() {
    jquery_exposed_default().each(this._events, (index, event) => {
      const options = event.getOptions();

      const insidePlot = this._insidePlot(options.min) || this._insidePlot(options.timeEnd);

      const overlapPlot = this._overlapPlot(options.min, options.timeEnd); 


      if ((insidePlot || overlapPlot) && !event.isHidden()) {
        event.visual().draw();
      } else {
        event.visual().getObject().hide();
      }
    });
  }


  updateEvents() {
    const o = this._plot.getPlotOffset();

    let left;
    let top;

    const xaxis = this._plot.getXAxes()[this._plot.getOptions().events.xaxis - 1];

    jquery_exposed_default().each(this._events, (index, event) => {
      top = o.top + this._plot.height() - event.visual().height();
      left = xaxis.p2c(event.getOptions().min) + o.left - event.visual().width() / 2;
      event.visual().moveTo({
        top: top,
        left: left
      });
    });
  }


  _clearEvents() {
    jquery_exposed_default().each(this._events, (index, val) => {
      val.visual().clear();
    });
    this._events = [];
  }


  _buildDiv(event) {
    var _line$width, _line$height;

    const that = this;

    const container = this._plot.getPlaceholder();

    const o = this._plot.getPlotOffset();

    const xaxis = this._plot.getXAxes()[this._plot.getOptions().events.xaxis - 1];

    let top, left, color, markerSize, markerShow, lineStyle, lineWidth;
    let markerTooltip; 

    const eventTypeId = event.eventType;

    if (this._types === null || !this._types[eventTypeId] || !this._types[eventTypeId].color) {
      color = '#666';
    } else {
      color = this._types[eventTypeId].color;
    }

    if (this._types === null || !this._types[eventTypeId] || !this._types[eventTypeId].markerSize) {
      markerSize = 8; 
    } else {
      markerSize = this._types[eventTypeId].markerSize;
    }

    if (this._types === null || !this._types[eventTypeId] || this._types[eventTypeId].markerShow === undefined) {
      markerShow = true;
    } else {
      markerShow = this._types[eventTypeId].markerShow;
    }

    if (this._types === null || !this._types[eventTypeId] || this._types[eventTypeId].markerTooltip === undefined) {
      markerTooltip = true;
    } else {
      markerTooltip = this._types[eventTypeId].markerTooltip;
    }

    if (this._types == null || !this._types[eventTypeId] || !this._types[eventTypeId].lineStyle) {
      lineStyle = 'dashed'; 
    } else {
      lineStyle = this._types[eventTypeId].lineStyle.toLowerCase();
    }

    if (this._types == null || !this._types[eventTypeId] || this._types[eventTypeId].lineWidth === undefined) {
      lineWidth = 1; 
    } else {
      lineWidth = this._types[eventTypeId].lineWidth;
    }

    let topOffset = xaxis.options.eventSectionHeight || 0;
    topOffset = topOffset / 3;
    top = o.top + this._plot.height() + topOffset;
    left = xaxis.p2c(event.min) + o.left;
    const line = jquery_exposed_default()('<div class="events_line flot-temp-elem"></div>').css({
      position: 'absolute',
      opacity: 0.8,
      left: left + 'px',
      top: 8,
      width: lineWidth + 'px',
      height: this._plot.height() + topOffset * 0.8,
      'border-left-width': lineWidth + 'px',
      'border-left-style': lineStyle,
      'border-left-color': color,
      color: color
    }).appendTo(container);

    if (markerShow) {
      const marker = jquery_exposed_default()('<div class="events_marker"></div>').css({
        position: 'absolute',
        left: -markerSize - Math.round(lineWidth / 2) + 'px',
        'font-size': 0,
        'line-height': 0,
        width: 0,
        height: 0,
        'border-left': markerSize + 'px solid transparent',
        'border-right': markerSize + 'px solid transparent'
      });
      marker.appendTo(line);

      if (this._types[eventTypeId] && this._types[eventTypeId].position && this._types[eventTypeId].position.toUpperCase() === 'BOTTOM') {
        marker.css({
          top: top - markerSize - 8 + 'px',
          'border-top': 'none',
          'border-bottom': markerSize + 'px solid ' + color
        });
      } else {
        marker.css({
          top: '0px',
          'border-top': markerSize + 'px solid ' + color,
          'border-bottom': 'none'
        });
      }

      marker.data({
        event: event
      });

      const mouseenter = function () {
        createAnnotationToolip(marker, jquery_exposed_default()(this).data('event'), that._plot);
      };

      if (event.editModel) {
        createEditPopover(marker, event.editModel, that._plot);
      }

      const mouseleave = () => {
        that._plot.clearSelection();
      };

      if (markerTooltip) {
        marker.css({
          cursor: 'help'
        });
        marker.hover(mouseenter, mouseleave);
      }
    }

    const drawableEvent = new DrawableEvent(line, function drawFunc(obj) {
      obj.show();
    }, obj => {
      obj.remove();
    }, (obj, position) => {
      obj.css({
        top: position.top,
        left: position.left
      });
    }, left, top, (_line$width = line.width()) !== null && _line$width !== void 0 ? _line$width : 1, (_line$height = line.height()) !== null && _line$height !== void 0 ? _line$height : 1);
    return drawableEvent;
  }


  _buildRegDiv(event) {
    var _region$width, _region$height;

    const that = this;

    const container = this._plot.getPlaceholder();

    const o = this._plot.getPlotOffset();

    const xaxis = this._plot.getXAxes()[this._plot.getOptions().events.xaxis - 1];

    let top, left, lineWidth, regionWidth, lineStyle, color, markerTooltip; 

    const eventTypeId = event.eventType;

    if (this._types === null || !this._types[eventTypeId] || !this._types[eventTypeId].color) {
      color = '#666';
    } else {
      color = this._types[eventTypeId].color;
    }

    if (this._types === null || !this._types[eventTypeId] || this._types[eventTypeId].markerTooltip === undefined) {
      markerTooltip = true;
    } else {
      markerTooltip = this._types[eventTypeId].markerTooltip;
    }

    if (this._types == null || !this._types[eventTypeId] || this._types[eventTypeId].lineWidth === undefined) {
      lineWidth = 1; 
    } else {
      lineWidth = this._types[eventTypeId].lineWidth;
    }

    if (this._types == null || !this._types[eventTypeId] || !this._types[eventTypeId].lineStyle) {
      lineStyle = 'dashed'; 
    } else {
      lineStyle = this._types[eventTypeId].lineStyle.toLowerCase();
    }

    const topOffset = 2;
    top = o.top + this._plot.height() + topOffset;
    const timeFrom = Math.min(event.min, event.timeEnd);
    const timeTo = Math.max(event.min, event.timeEnd);
    left = xaxis.p2c(timeFrom) + o.left;
    const right = xaxis.p2c(timeTo) + o.left;
    const [xmin, xmax] = [o.left, o.left + this._plot.width()];
    const regionStart = Math.max(left, xmin);
    const regionEnd = Math.min(right, xmax);
    const regionOffset = right > xmax ? 0 : lineWidth; 

    regionWidth = regionEnd - regionStart + regionOffset;
    (0,lodash.each)([left, right], position => {
      if (xmin <= position && position < xmax) {
        const line = jquery_exposed_default()('<div class="events_line flot-temp-elem"></div>').css({
          position: 'absolute',
          opacity: 0.8,
          left: position + 'px',
          top: 8,
          width: lineWidth + 'px',
          height: this._plot.height() + topOffset,
          'border-left-width': lineWidth + 'px',
          'border-left-style': lineStyle,
          'border-left-color': color,
          color: color
        });
        line.appendTo(container);
      }
    });
    const region = jquery_exposed_default()('<div class="events_marker region_marker flot-temp-elem"></div>').css({
      position: 'absolute',
      opacity: 0.5,
      left: regionStart + 'px',
      top: top,
      width: regionWidth + 'px',
      height: '0.5rem',
      'border-left-color': color,
      color: color,
      'background-color': color
    });
    region.appendTo(container);
    region.data({
      event: event
    });

    const mouseenter = function () {
      createAnnotationToolip(region, jquery_exposed_default()(this).data('event'), that._plot);
    };

    if (event.editModel) {
      createEditPopover(region, event.editModel, that._plot);
    }

    const mouseleave = () => {
      that._plot.clearSelection();
    };

    if (markerTooltip) {
      region.css({
        cursor: 'help'
      });
      region.hover(mouseenter, mouseleave);
    }

    const drawableEvent = new DrawableEvent(region, function drawFunc(obj) {
      obj.show();
    }, obj => {
      obj.remove();
    }, (obj, position) => {
      obj.css({
        top: position.top,
        left: position.left
      });
    }, left, top, (_region$width = region.width()) !== null && _region$width !== void 0 ? _region$width : 1, (_region$height = region.height()) !== null && _region$height !== void 0 ? _region$height : 1);
    return drawableEvent;
  }


  _insidePlot(x) {
    const xaxis = this._plot.getXAxes()[this._plot.getOptions().events.xaxis - 1];

    const xc = xaxis.p2c(x);
    return xc > 0 && xc < xaxis.p2c(xaxis.max);
  }


  _overlapPlot(point0, point1) {
    const xaxis = this._plot.getXAxes()[this._plot.getOptions().events.xaxis - 1];

    const [coord0, coord1] = [xaxis.p2c(point0), xaxis.p2c(point1)];
    const [coordMin, coordMax] = [0, xaxis.p2c(xaxis.max)];
    return coordMin < coord0 && coord1 < coordMax;
  }

}
EventMarkers.$inject = ["plot"];


function init(plot) {
  const that = this;
  const eventMarkers = new EventMarkers(plot);

  plot.getEvents = () => {
    return eventMarkers._events;
  };

  plot.hideEvents = () => {
    jquery_exposed_default().each(eventMarkers._events, (index, event) => {
      event.visual().getObject().hide();
    });
  };

  plot.showEvents = () => {
    plot.hideEvents();
    jquery_exposed_default().each(eventMarkers._events, (index, event) => {
      event.hide();
    });
    that.eventMarkers.drawEvents();
  }; 


  plot.setEvents = events => {
    if (eventMarkers.eventsEnabled) {
      eventMarkers.setupEvents(events);
    }
  };

  plot.hooks.processOptions.push((plot, options) => {
    if (options.events.data != null) {
      eventMarkers.eventsEnabled = true;
    }
  });
  plot.hooks.draw.push(plot => {
    const options = plot.getOptions();

    if (eventMarkers.eventsEnabled) {
      if (eventMarkers.getEvents().length < 1) {
        eventMarkers.setTypes(options.events.types);
        eventMarkers.setupEvents(options.events.data);
      } else {
        eventMarkers.updateEvents();
      }
    }

    eventMarkers.drawEvents();
  });
}
const defaultOptions = {
  events: {
    data: null,
    types: null,
    xaxis: 1,
    position: 'BOTTOM'
  }
};
jquery_exposed_default().plot.plugins.push({
  init: init,
  options: defaultOptions,
  name: 'events',
  version: '0.2.5'
});
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var react_dom = __webpack_require__("./.yarn/__virtual__/react-dom-virtual-93e2c4839c/0/cache/react-dom-npm-17.0.2-f551215af1-1c1eaa3bca.zip/node_modules/react-dom/index.js");
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var core_module = __webpack_require__("./public/app/angular/core_module.ts");
var config = __webpack_require__("./public/app/core/config.ts");
var core = __webpack_require__("./public/app/core/core.ts");
var ConfigProvider = __webpack_require__("./public/app/core/utils/ConfigProvider.tsx");
var utils_ticks = __webpack_require__("./public/app/core/utils/ticks.ts");
var linkSuppliers = __webpack_require__("./public/app/features/panel/panellinks/linkSuppliers.ts");
var classnames = __webpack_require__("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js");
var classnames_default = __webpack_require__.n(classnames);
var grafana_e2e_selectors_src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
function LegendSeriesItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const LEGEND_STATS = ['min', 'max', 'avg', 'current', 'total'];
class LegendItem extends react.PureComponent {
  constructor(props) {
    super(props);

    LegendSeriesItem_defineProperty(this, "onLabelClick", e => this.props.onLabelClick(this.props.series, e));

    LegendSeriesItem_defineProperty(this, "onToggleAxis", () => {
      const yaxis = this.state.yaxis === 2 ? 1 : 2;
      const info = {
        alias: this.props.series.alias,
        yaxis: yaxis
      };
      this.setState({
        yaxis: yaxis
      });
      this.props.onToggleAxis(info);
    });

    LegendSeriesItem_defineProperty(this, "onColorChange", color => {
      this.props.onColorChange(this.props.series, color); 

      this.forceUpdate();
    });

    this.state = {
      yaxis: this.props.series.yaxis
    };
  }

  renderLegendValues() {
    const {
      series,
      asTable
    } = this.props;
    const legendValueItems = [];

    for (const valueName of LEGEND_STATS) {
      if (this.props[valueName]) {
        const valueFormatted = series.formatValue(series.stats[valueName]);
        legendValueItems.push( (0,jsx_runtime.jsx)(LegendValue, {
          valueName: valueName,
          value: valueFormatted,
          asTable: asTable,
          onValueClick: this.onLabelClick
        }, valueName));
      }
    }

    return legendValueItems;
  }

  render() {
    var _td;

    const {
      series,
      values,
      asTable,
      hidden
    } = this.props;
    const seriesOptionClasses = classnames_default()({
      'graph-legend-series-hidden': hidden,
      'graph-legend-series--right-y': series.yaxis === 2
    });
    const valueItems = values ? this.renderLegendValues() : [];

    const seriesLabel = (0,jsx_runtime.jsx)(LegendSeriesLabel, {
      label: series.alias,
      color: series.color,
      yaxis: this.state.yaxis,
      onLabelClick: this.onLabelClick,
      onColorChange: this.onColorChange,
      onToggleAxis: this.onToggleAxis
    });

    if (asTable) {
      return (0,jsx_runtime.jsxs)("tr", {
        className: `graph-legend-series ${seriesOptionClasses}`,
        children: [_td || (_td = (0,jsx_runtime.jsx)("td", {
          children: (0,jsx_runtime.jsx)("div", {
            className: "graph-legend-series__table-name",
            children: seriesLabel
          })
        })), valueItems]
      });
    } else {
      return (0,jsx_runtime.jsxs)("div", {
        className: `graph-legend-series ${seriesOptionClasses}`,
        children: [seriesLabel, valueItems]
      });
    }
  }

}

LegendSeriesItem_defineProperty(LegendItem, "defaultProps", {
  asTable: false,
  hidden: false,
  onLabelClick: () => {},
  onColorChange: () => {},
  onToggleAxis: () => {}
});

class LegendSeriesLabel extends react.PureComponent {
  render() {
    const {
      label,
      color,
      yaxis
    } = this.props;
    const {
      onColorChange,
      onToggleAxis
    } = this.props;
    const onLabelClick = this.props.onLabelClick ? this.props.onLabelClick : () => {};
    return [(0,jsx_runtime.jsx)(LegendSeriesIcon, {
      color: color,
      yaxis: yaxis,
      onColorChange: onColorChange,
      onToggleAxis: onToggleAxis
    }, "icon"), (0,jsx_runtime.jsx)("a", {
      className: "graph-legend-alias pointer",
      title: label,
      onClick: onLabelClick,
      "aria-label": grafana_e2e_selectors_src.wl.components.Panels.Visualization.Graph.Legend.legendItemAlias(label),
      children: label
    }, "label")];
  }

}

LegendSeriesItem_defineProperty(LegendSeriesLabel, "defaultProps", {
  yaxis: undefined,
  onLabelClick: () => {}
});

class LegendSeriesIcon extends react.PureComponent {
  constructor() {
    super(...arguments);

    LegendSeriesItem_defineProperty(this, "onColorChange", color => {
      const {
        onColorChange
      } = this.props;

      if (onColorChange) {
        onColorChange(color);
      }
    });
  }

  render() {
    return (0,jsx_runtime.jsx)(grafana_ui_src.SeriesColorPicker, {
      yaxis: this.props.yaxis,
      color: this.props.color,
      onChange: this.onColorChange,
      onToggleAxis: this.props.onToggleAxis,
      enableNamedColors: true,
      children: _ref => {
        let {
          ref,
          showColorPicker,
          hideColorPicker
        } = _ref;
        return (0,jsx_runtime.jsx)(grafana_ui_src.SeriesIcon, {
          color: this.props.color,
          ref: ref,
          onClick: showColorPicker,
          onMouseLeave: hideColorPicker,
          className: "graph-legend-icon"
        });
      }
    });
  }

}

LegendSeriesItem_defineProperty(LegendSeriesIcon, "defaultProps", {
  yaxis: undefined,
  onColorChange: () => {},
  onToggleAxis: () => {}
});

function LegendValue(_ref2) {
  let {
    value,
    valueName,
    asTable,
    onValueClick
  } = _ref2;

  if (asTable) {
    return (0,jsx_runtime.jsx)("td", {
      className: `graph-legend-value ${valueName}`,
      onClick: onValueClick,
      children: value
    });
  }

  return (0,jsx_runtime.jsx)("div", {
    className: `graph-legend-value ${valueName}`,
    onClick: onValueClick,
    children: value
  });
}
;
function Legend_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class GraphLegend extends react.PureComponent {
  constructor(props) {
    super(props);

    Legend_defineProperty(this, "onToggleSeries", (series, event) => {
      if (!this.props.onToggleSeries) {
        return;
      }

      let hiddenSeries = Object.assign({}, this.state.hiddenSeries);

      if (event.ctrlKey || event.metaKey || event.shiftKey) {
        if (hiddenSeries[series.alias]) {
          delete hiddenSeries[series.alias];
        } else {
          hiddenSeries[series.alias] = true;
        }
      } else {
        hiddenSeries = this.toggleSeriesExclusiveMode(series);
      }

      this.setState({
        hiddenSeries: hiddenSeries
      });
      this.props.onToggleSeries(hiddenSeries);
    });

    this.state = {
      hiddenSeries: this.props.hiddenSeries
    };
  }

  sortLegend() {
    let seriesList = [...this.props.seriesList] || [];
    const sortBy = this.props.sort;

    if (sortBy && this.props[sortBy] && this.props.alignAsTable) {
      seriesList = (0,lodash.sortBy)(seriesList, series => {
        let sort = series.stats[sortBy];

        if (sort === null) {
          sort = -Infinity;
        }

        return sort;
      });

      if (this.props.sortDesc) {
        seriesList = seriesList.reverse();
      }
    }

    return seriesList;
  }

  toggleSeriesExclusiveMode(series) {
    const hiddenSeries = Object.assign({}, this.state.hiddenSeries);

    if (hiddenSeries[series.alias]) {
      delete hiddenSeries[series.alias];
    } 


    const alreadyExclusive = this.props.seriesList.every(value => {
      if (value.alias === series.alias) {
        return true;
      }

      return hiddenSeries[value.alias];
    });

    if (alreadyExclusive) {
      this.props.seriesList.forEach(value => {
        delete hiddenSeries[value.alias];
      });
    } else {
      this.props.seriesList.forEach(value => {
        if (value.alias === series.alias) {
          return;
        }

        hiddenSeries[value.alias] = true;
      });
    }

    return hiddenSeries;
  }

  render() {
    const {
      optionalClass,
      rightSide,
      sideWidth,
      sort,
      sortDesc,
      hideEmpty,
      hideZero,
      values,
      min,
      max,
      avg,
      current,
      total
    } = this.props;
    const seriesValuesProps = {
      values,
      min,
      max,
      avg,
      current,
      total
    };
    const hiddenSeries = this.state.hiddenSeries;
    const seriesHideProps = {
      hideEmpty,
      hideZero
    };
    const sortProps = {
      sort,
      sortDesc
    };
    const seriesList = this.sortLegend().filter(series => !series.hideFromLegend(seriesHideProps));
    const legendClass = `${this.props.alignAsTable ? 'graph-legend-table' : ''} ${optionalClass}`; 

    const width = rightSide && sideWidth ? sideWidth : undefined;
    const ieWidth = rightSide && sideWidth ? sideWidth - 1 : undefined;
    const legendStyle = {
      minWidth: width,
      width: ieWidth
    };
    const legendProps = Object.assign({
      seriesList: seriesList,
      hiddenSeries: hiddenSeries,
      onToggleSeries: this.onToggleSeries,
      onToggleAxis: this.props.onToggleAxis,
      onToggleSort: this.props.onToggleSort,
      onColorChange: this.props.onColorChange
    }, seriesValuesProps, sortProps);
    return (0,jsx_runtime.jsx)("div", {
      className: `graph-legend-content ${legendClass}`,
      style: legendStyle,
      children: this.props.alignAsTable ? (0,jsx_runtime.jsx)(LegendTable, Object.assign({}, legendProps)) : (0,jsx_runtime.jsx)(LegendSeriesList, Object.assign({}, legendProps))
    });
  }

}

Legend_defineProperty(GraphLegend, "defaultProps", {
  values: false,
  min: false,
  max: false,
  avg: false,
  current: false,
  total: false,
  alignAsTable: false,
  rightSide: false,
  sort: undefined,
  sortDesc: false,
  optionalClass: '',
  onToggleSeries: () => {},
  onToggleSort: () => {},
  onToggleAxis: () => {},
  onColorChange: () => {}
});

class LegendSeriesList extends react.PureComponent {
  render() {
    const {
      seriesList,
      hiddenSeries,
      values,
      min,
      max,
      avg,
      current,
      total
    } = this.props;
    const seriesValuesProps = {
      values,
      min,
      max,
      avg,
      current,
      total
    };
    return seriesList.map((series, i) => (0,jsx_runtime.jsx)(LegendItem 
    , Object.assign({
      series: series,
      hidden: hiddenSeries[series.alias]
    }, seriesValuesProps, {
      onLabelClick: this.props.onToggleSeries,
      onColorChange: this.props.onColorChange,
      onToggleAxis: this.props.onToggleAxis
    }), `${series.id}-${i}`));
  }

}

class LegendTable extends react.PureComponent {
  constructor() {
    super(...arguments);

    Legend_defineProperty(this, "onToggleSort", stat => {
      if (!this.props.onToggleSort) {
        return;
      }

      let sortDesc = this.props.sortDesc;
      let sortBy = this.props.sort;

      if (stat !== sortBy) {
        sortDesc = undefined;
      } 


      if (sortDesc === false) {
        sortBy = undefined;
        sortDesc = undefined;
      } else {
        sortDesc = !sortDesc;
        sortBy = stat;
      }

      this.props.onToggleSort(sortBy, sortDesc);
    });
  }

  render() {
    const seriesList = this.props.seriesList;
    const {
      values,
      min,
      max,
      avg,
      current,
      total,
      sort,
      sortDesc,
      hiddenSeries
    } = this.props;
    const seriesValuesProps = {
      values,
      min,
      max,
      avg,
      current,
      total
    };

    if (!seriesList) {
      return null;
    }

    return (0,jsx_runtime.jsxs)("table", {
      children: [(0,jsx_runtime.jsx)("colgroup", {
        children: (0,jsx_runtime.jsx)("col", {
          style: {
            width: '100%'
          }
        })
      }), (0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {
            style: {
              textAlign: 'left'
            }
          }), LEGEND_STATS.map(statName => seriesValuesProps[statName] && (0,jsx_runtime.jsx)(LegendTableHeaderItem, {
            statName: statName,
            sort: sort,
            sortDesc: sortDesc,
            onClick: this.onToggleSort
          }, statName))]
        })
      }), (0,jsx_runtime.jsx)("tbody", {
        children: seriesList && seriesList.map((series, i) => (0,jsx_runtime.jsx)(LegendItem, Object.assign({
          asTable: true,
          series: series,
          hidden: hiddenSeries[series.alias],
          onLabelClick: this.props.onToggleSeries,
          onColorChange: this.props.onColorChange,
          onToggleAxis: this.props.onToggleAxis
        }, seriesValuesProps), `${series.id}-${i}`))
      })]
    });
  }

}

class LegendTableHeaderItem extends react.PureComponent {
  constructor() {
    super(...arguments);

    Legend_defineProperty(this, "onClick", () => {
      if (this.props.onClick) {
        this.props.onClick(this.props.statName);
      }
    });
  }

  render() {
    const {
      statName,
      sort,
      sortDesc
    } = this.props;
    return (0,jsx_runtime.jsxs)("th", {
      className: "pointer",
      onClick: this.onClick,
      children: [statName, sort === statName && (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: sortDesc ? 'angle-down' : 'angle-up'
      })]
    });
  }

}

class Legend extends react.PureComponent {
  render() {
    return (0,jsx_runtime.jsx)(grafana_ui_src.CustomScrollbar, {
      hideHorizontalTrack: true,
      children: (0,jsx_runtime.jsx)(GraphLegend, Object.assign({}, this.props))
    });
  }

}
 const Legend_Legend = (( null && (Legend)));
;
function alignYLevel(yAxes, level) {
  if (isNaN(level) || !checkCorrectAxis(yAxes)) {
    return;
  }

  const [yLeft, yRight] = yAxes;
  moveLevelToZero(yLeft, yRight, level);
  expandStuckValues(yLeft, yRight); 

  const zero = yLeft.min === 0 || yRight.min === 0 || yLeft.max === 0 || yRight.max === 0;
  const oneSide = checkOneSide(yLeft, yRight);

  if (zero && oneSide) {
    yLeft.min = yLeft.max > 0 ? 0 : yLeft.min;
    yLeft.max = yLeft.max > 0 ? yLeft.max : 0;
    yRight.min = yRight.max > 0 ? 0 : yRight.min;
    yRight.max = yRight.max > 0 ? yRight.max : 0;
  } else {
    if (checkOppositeSides(yLeft, yRight)) {
      if (yLeft.min >= 0) {
        yLeft.min = -yLeft.max;
        yRight.max = -yRight.min;
      } else {
        yLeft.max = -yLeft.min;
        yRight.min = -yRight.max;
      }
    } else {
      const rate = getRate(yLeft, yRight);

      if (oneSide) {
        if (yLeft.min > 0) {
          yLeft.min = yLeft.max / rate;
          yRight.min = yRight.max / rate;
        } else {
          yLeft.max = yLeft.min / rate;
          yRight.max = yRight.min / rate;
        }
      } else {
        if (checkTwoCross(yLeft, yRight)) {
          yLeft.min = yRight.min ? yRight.min * rate : yLeft.min;
          yRight.min = yLeft.min ? yLeft.min / rate : yRight.min;
          yLeft.max = yRight.max ? yRight.max * rate : yLeft.max;
          yRight.max = yLeft.max ? yLeft.max / rate : yRight.max;
        } else {
          yLeft.min = yLeft.min > 0 ? yRight.min * rate : yLeft.min;
          yRight.min = yRight.min > 0 ? yLeft.min / rate : yRight.min;
          yLeft.max = yLeft.max < 0 ? yRight.max * rate : yLeft.max;
          yRight.max = yRight.max < 0 ? yLeft.max / rate : yRight.max;
        }
      }
    }
  }

  restoreLevelFromZero(yLeft, yRight, level);
}

function expandStuckValues(yLeft, yRight) {
  const wideFactor = 0.25;

  if (yLeft.max === yLeft.min) {
    yLeft.min -= wideFactor;
    yLeft.max += wideFactor;
  }

  if (yRight.max === yRight.min) {
    yRight.min -= wideFactor;
    yRight.max += wideFactor;
  }
}

function moveLevelToZero(yLeft, yRight, level) {
  if (level !== 0) {
    yLeft.min -= level;
    yLeft.max -= level;
    yRight.min -= level;
    yRight.max -= level;
  }
}

function restoreLevelFromZero(yLeft, yRight, level) {
  if (level !== 0) {
    yLeft.min += level;
    yLeft.max += level;
    yRight.min += level;
    yRight.max += level;
  }
}

function checkCorrectAxis(axis) {
  return axis.length === 2 && checkCorrectAxes(axis[0]) && checkCorrectAxes(axis[1]);
}

function checkCorrectAxes(axes) {
  return 'min' in axes && 'max' in axes;
}

function checkOneSide(yLeft, yRight) {
  return yLeft.min >= 0 && yRight.min >= 0 || yLeft.max <= 0 && yRight.max <= 0;
}

function checkTwoCross(yLeft, yRight) {
  return yLeft.min <= 0 && yLeft.max >= 0 && yRight.min <= 0 && yRight.max >= 0;
}

function checkOppositeSides(yLeft, yRight) {
  return yLeft.min >= 0 && yRight.max <= 0 || yLeft.max <= 0 && yRight.min >= 0;
}

function getRate(yLeft, yRight) {
  if (checkTwoCross(yLeft, yRight)) {
    const rateLeft = yRight.min ? yLeft.min / yRight.min : 0;
    const rateRight = yRight.max ? yLeft.max / yRight.max : 0;
    return rateLeft > rateRight ? rateLeft : rateRight;
  }

  if (checkOneSide(yLeft, yRight)) {
    const absLeftMin = Math.abs(yLeft.min);
    const absLeftMax = Math.abs(yLeft.max);
    const absRightMin = Math.abs(yRight.min);
    const absRightMax = Math.abs(yRight.max);
    const upLeft = Math.max(absLeftMin, absLeftMax);
    const downLeft = Math.min(absLeftMin, absLeftMax);
    const upRight = Math.max(absRightMin, absRightMax);
    const downRight = Math.min(absRightMin, absRightMax);
    const rateLeft = downLeft !== 0 ? upLeft / downLeft : upLeft;
    const rateRight = downRight !== 0 ? upRight / downRight : upRight;
    return rateLeft > rateRight ? rateLeft : rateRight;
  }

  if (yLeft.min > 0 || yRight.min > 0) {
    return yLeft.max / yRight.max;
  } else {
    return yLeft.min / yRight.min;
  }
}
var tinycolor = __webpack_require__("./.yarn/cache/tinycolor2-npm-1.4.2-462ba30c26-57ed262e08.zip/node_modules/tinycolor2/tinycolor.js");
var tinycolor_default = __webpack_require__.n(tinycolor);
;
function event_manager_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class EventManager {
  constructor(panelCtrl) {
    this.panelCtrl = panelCtrl;

    event_manager_defineProperty(this, "event", null);

    event_manager_defineProperty(this, "editorOpen", false);

    this.panelCtrl = panelCtrl;
  }

  editorClosed() {
    this.event = null;
    this.editorOpen = false;
    this.panelCtrl.render();
  }

  editorOpened() {
    this.editorOpen = true;
  }

  updateTime(range) {
    if (!this.event) {
      this.event = {};
      this.event.dashboardId = this.panelCtrl.dashboard.id;
      this.event.panelId = this.panelCtrl.panel.id;
    } 


    this.event.time = range.from;
    this.event.isRegion = false;

    if (range.to) {
      this.event.timeEnd = range.to;
      this.event.isRegion = true;
    }

    this.panelCtrl.render();
  }

  editEvent(event, elem) {
    this.event = event;
    this.panelCtrl.render();
  }

  addFlotEvents(annotations, flotOptions) {
    if (!this.event && annotations.length === 0) {
      return;
    }

    const types = {
      $__alerting: {
        color: grafana_ui_src.ALERTING_COLOR,
        position: 'BOTTOM',
        markerSize: 5
      },
      $__ok: {
        color: grafana_ui_src.OK_COLOR,
        position: 'BOTTOM',
        markerSize: 5
      },
      $__no_data: {
        color: grafana_ui_src.NO_DATA_COLOR,
        position: 'BOTTOM',
        markerSize: 5
      },
      $__pending: {
        color: grafana_ui_src.PENDING_COLOR,
        position: 'BOTTOM',
        markerSize: 5
      },
      $__editing: {
        color: grafana_ui_src.DEFAULT_ANNOTATION_COLOR,
        position: 'BOTTOM',
        markerSize: 5
      }
    };

    if (this.event) {
      if (this.event.isRegion) {
        annotations = [{
          isRegion: true,
          min: this.event.time,
          timeEnd: this.event.timeEnd,
          text: this.event.text,
          eventType: '$__editing',
          editModel: this.event
        }];
      } else {
        annotations = [{
          min: this.event.time,
          text: this.event.text,
          editModel: this.event,
          eventType: '$__editing'
        }];
      }
    } else {
      for (let i = 0; i < annotations.length; i++) {
        const item = annotations[i]; 

        item.min = item.time;
        item.max = item.time;
        item.eventType = item.type;

        if (item.newState) {
          item.eventType = '$__' + item.newState;
          continue;
        }

        if (!types[item.type]) {
          types[item.type] = {
            color: item.color,
            position: 'BOTTOM',
            markerSize: 5
          };
        }
      }
    }

    const regions = getRegions(annotations);
    addRegionMarking(regions, flotOptions);
    const eventSectionHeight = 20;
    const eventSectionMargin = 7;
    flotOptions.grid.eventSectionHeight = eventSectionMargin;
    flotOptions.xaxis.eventSectionHeight = eventSectionHeight;
    flotOptions.events = {
      levels: (0,lodash.keys)(types).length + 1,
      data: annotations,
      types: types,
      manager: this
    };
  }

}

function getRegions(events) {
  return (0,lodash.filter)(events, 'isRegion');
}

function addRegionMarking(regions, flotOptions) {
  const markings = flotOptions.grid.markings;
  const defaultColor = grafana_ui_src.DEFAULT_ANNOTATION_COLOR;
  let fillColor;
  (0,lodash.each)(regions, region => {
    if (region.source) {
      fillColor = region.color || defaultColor;
    } else {
      fillColor = defaultColor;
    }

    fillColor = addAlphaToRGB(fillColor, grafana_ui_src.REGION_FILL_ALPHA);
    markings.push({
      xaxis: {
        from: region.min,
        to: region.timeEnd
      },
      color: fillColor
    });
  });
}

function addAlphaToRGB(colorString, alpha) {
  const color = tinycolor_default()(colorString);

  if (color.isValid()) {
    color.setAlpha(alpha);
    return color.toRgbString();
  } else {
    return colorString;
  }
}
var types = __webpack_require__("./public/app/types/index.ts");
;




function GraphTooltip(elem, dashboard, scope, getSeriesFn) {
  const self = this;
  const ctrl = scope.ctrl;
  const panel = ctrl.panel;
  const hoverEvent = new grafana_data_src.LegacyGraphHoverEvent({
    pos: {},
    point: {},
    panel: this.panel
  });
  const $tooltip = jquery_exposed_default()('<div class="graph-tooltip">');

  this.destroy = () => {
    $tooltip.remove();
  };

  this.findHoverIndexFromDataPoints = (posX, series, last) => {
    const ps = series.datapoints.pointsize;
    const initial = last * ps;
    const len = series.datapoints.points.length;
    let j;

    for (j = initial; j < len; j += ps) {
      if (!series.lines.steps && series.datapoints.points[initial] != null && series.datapoints.points[j] == null || 
      series.datapoints.points[j] > posX) {
        return Math.max(j - ps, 0) / ps;
      }
    }

    return j / ps - 1;
  };

  this.findHoverIndexFromData = (posX, series) => {
    let lower = 0;
    let upper = series.data.length - 1;
    let middle;

    while (true) {
      if (lower > upper) {
        return Math.max(upper, 0);
      }

      middle = Math.floor((lower + upper) / 2);

      if (series.data[middle][0] === posX) {
        return middle;
      } else if (series.data[middle][0] < posX) {
        lower = middle + 1;
      } else {
        upper = middle - 1;
      }
    }
  };

  this.renderAndShow = (absoluteTime, innerHtml, pos, xMode) => {
    if (xMode === 'time') {
      innerHtml = '<div class="graph-tooltip-time">' + absoluteTime + '</div>' + innerHtml;
    }

    $tooltip.html(innerHtml).place_tt(pos.pageX, pos.pageY, {
      offset: 10
    });
  };

  this.getMultiSeriesPlotHoverInfo = function (seriesList, pos) {
    let value, i, series, hoverIndex, hoverDistance, pointTime, yaxis; 

    let results = [[], [], []]; 

    let lastValue = 0; 

    let minDistance, minTime;

    for (i = 0; i < seriesList.length; i++) {
      series = seriesList[i];

      if (!series.data.length || panel.legend.hideEmpty && series.allIsNull) {
        results[0].push({
          hidden: true,
          value: 0
        });
        continue;
      }

      if (!series.data.length || panel.legend.hideZero && series.allIsZero) {
        results[0].push({
          hidden: true,
          value: 0
        });
        continue;
      }

      if (series.hideTooltip) {
        results[0].push({
          hidden: true,
          value: 0
        });
        continue;
      }

      hoverIndex = this.findHoverIndexFromData(pos.x, series);
      hoverDistance = pos.x - series.data[hoverIndex][0];
      pointTime = series.data[hoverIndex][0]; 

      if (!minDistance || hoverDistance >= 0 && (hoverDistance < minDistance || minDistance < 0) || hoverDistance < 0 && hoverDistance > minDistance) {
        minDistance = hoverDistance;
        minTime = pointTime;
      }

      value = series.data[hoverIndex][1];

      if (series.stack && value !== null && panel.tooltip.value_type !== 'individual') {
        lastValue += value;
        value = lastValue;
      } 


      if (series.lines.steps || series.stack) {
        hoverIndex = this.findHoverIndexFromDataPoints(pos.x, series, hoverIndex);
      } 


      yaxis = 0;

      if (series.yaxis) {
        yaxis = series.yaxis.n;
      }

      results[yaxis].push({
        value: value,
        hoverIndex: hoverIndex,
        color: series.color,
        label: series.aliasEscaped,
        time: pointTime,
        distance: hoverDistance,
        index: i
      });
    } 


    results = results[0].concat(results[1], results[2]); 

    results.time = minTime;
    return results;
  };

  elem.mouseleave(() => {
    var _panel$tooltip;

    if ((_panel$tooltip = panel.tooltip) !== null && _panel$tooltip !== void 0 && _panel$tooltip.shared) {
      const plot = elem.data().plot;

      if (plot) {
        $tooltip.detach();
        plot.unhighlight();
      }
    }

    dashboard.events.publish(new grafana_data_src.LegacyGraphHoverClearEvent());
    dashboard.events.publish(new grafana_data_src.DataHoverClearEvent());
  });
  elem.bind('plothover', (event, pos, item) => {
    self.show(pos, item); 

    if (!dashboard.panelInEdit) {
      pos.panelRelY = (pos.pageY - elem.offset().top) / elem.height();
      hoverEvent.payload.pos = pos;
      hoverEvent.payload.panel = panel;
      hoverEvent.payload.point['time'] = pos.x;
      dashboard.events.publish(hoverEvent);
    }
  });
  elem.bind('plotclick', (event, pos, item) => {
    core.h$.emit(types.RW.xt, {
      pos: pos,
      panel: panel,
      item: item
    });
  });
  elem.bind('plotleave', () => {
    if (!panel.tooltip.shared) {
      return;
    }

    const plot = elem.data().plot;

    if (plot) {
      $tooltip.detach();
      plot.unhighlight();
    }
  });

  this.clear = plot => {
    $tooltip.detach();
    plot.clearCrosshair();
    plot.unhighlight();
  };

  this.show = (pos, item) => {
    const plot = elem.data().plot;
    const plotData = plot.getData();
    const xAxes = plot.getXAxes();
    const xMode = xAxes[0].options.mode;
    const seriesList = getSeriesFn();
    let allSeriesMode = panel.tooltip.shared;
    let group, value, absoluteTime, hoverInfo, i, series, seriesHtml, tooltipFormat; 

    if (pos.panelRelY) {
      var _$$scrollTop;

      const pointOffset = plot.pointOffset({
        x: pos.x
      });

      if (Number.isNaN(pointOffset.left) || pointOffset.left < 0 || pointOffset.left > elem.width()) {
        self.clear(plot);
        return;
      }

      pos.pageX = elem.offset().left + pointOffset.left;
      pos.pageY = elem.offset().top + elem.height() * pos.panelRelY;
      const scrollTop = (_$$scrollTop = jquery_exposed_default()(window).scrollTop()) !== null && _$$scrollTop !== void 0 ? _$$scrollTop : 0;
      const isVisible = pos.pageY >= scrollTop && pos.pageY <= jquery_exposed_default()(window).innerHeight() + scrollTop;

      if (!isVisible) {
        self.clear(plot);
        return;
      }

      plot.setCrosshair(pos);
      allSeriesMode = true;

      if (dashboard.sharedCrosshairModeOnly()) {
        return;
      }
    }

    if (seriesList.length === 0) {
      return;
    }

    if (seriesList[0].hasMsResolution) {
      tooltipFormat = grafana_data_src.systemDateFormats.fullDateMS;
    } else {
      tooltipFormat = grafana_data_src.systemDateFormats.fullDate;
    }

    if (allSeriesMode) {
      plot.unhighlight();
      const seriesHoverInfo = self.getMultiSeriesPlotHoverInfo(plotData, pos);
      seriesHtml = '';
      absoluteTime = dashboard.formatDate(seriesHoverInfo.time, tooltipFormat); 

      if (panel.tooltip.sort === 2) {
        seriesHoverInfo.sort((a, b) => {
          return b.value - a.value;
        });
      } else if (panel.tooltip.sort === 1) {
        seriesHoverInfo.sort((a, b) => {
          return a.value - b.value;
        });
      }

      for (i = 0; i < seriesHoverInfo.length; i++) {
        hoverInfo = seriesHoverInfo[i];

        if (hoverInfo.hidden) {
          continue;
        }

        let highlightClass = '';

        if (item && hoverInfo.index === item.seriesIndex) {
          highlightClass = 'graph-tooltip-list-item--highlight';
        }

        series = seriesList[hoverInfo.index];
        value = grafana_data_src.textUtil.sanitize(series.formatValue(hoverInfo.value));
        const color = grafana_data_src.textUtil.sanitize(hoverInfo.color);
        const label = grafana_data_src.textUtil.sanitize(hoverInfo.label);
        seriesHtml += '<div class="graph-tooltip-list-item ' + highlightClass + '"><div class="graph-tooltip-series-name">';
        seriesHtml += '<i class="fa fa-minus" style="color:' + color + ';"></i> ' + label + ':</div>';
        seriesHtml += '<div class="graph-tooltip-value">' + value + '</div></div>';
        plot.highlight(hoverInfo.index, hoverInfo.hoverIndex);
      }

      self.renderAndShow(absoluteTime, seriesHtml, pos, xMode);
    } else if (item) {
      const color = grafana_data_src.textUtil.sanitize(item.series.color);
      series = seriesList[item.seriesIndex];
      group = '<div class="graph-tooltip-list-item"><div class="graph-tooltip-series-name">';
      group += '<i class="fa fa-minus" style="color:' + color + ';"></i> ' + series.aliasEscaped + ':</div>';

      if (panel.stack && panel.tooltip.value_type === 'individual') {
        value = item.datapoint[1] - item.datapoint[2];
      } else {
        value = item.datapoint[1];
      }

      value = grafana_data_src.textUtil.sanitize(series.formatValue(value));
      absoluteTime = dashboard.formatDate(item.datapoint[0], tooltipFormat);
      group += '<div class="graph-tooltip-value">' + value + '</div>';
      self.renderAndShow(absoluteTime, group, pos, xMode);
    } else {
      $tooltip.detach();
    }
  };
}
var d3 = __webpack_require__("./.yarn/cache/d3-npm-5.15.0-0c7696026f-7342d82e55.zip/node_modules/d3/index.js");
;


function getSeriesValues(dataList) {
  const VALUE_INDEX = 0;
  const values = []; 

  for (let i = 0; i < dataList.length; i++) {
    const series = dataList[i];
    const datapoints = series.datapoints;

    for (let j = 0; j < datapoints.length; j++) {
      if (datapoints[j][VALUE_INDEX] !== null) {
        values.push(datapoints[j][VALUE_INDEX]);
      }
    }
  }

  return values;
}

function convertValuesToHistogram(values, bucketSize, min, max) {
  const minBound = getBucketBound(min, bucketSize);
  const maxBound = getBucketBound(max, bucketSize);
  const histGenerator = (0,d3.histogram)().domain([minBound, maxBound]).thresholds(Math.round(max - min) / bucketSize);
  return histGenerator(values).map(bin => {
    return [bin.x0, bin.length];
  });
}

function convertToHistogramData(data, bucketSize, hiddenSeries, min, max) {
  return data.map(series => {
    const values = getSeriesValues([series]);
    series.histogram = true;

    if (!hiddenSeries[series.alias]) {
      const histogram = convertValuesToHistogram(values, bucketSize, min, max);
      series.data = histogram;
    } else {
      series.data = [];
    }

    return series;
  });
}

function getBucketBound(value, bucketSize) {
  return Math.floor(value / bucketSize) * bucketSize;
}
;
function threshold_manager_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ThresholdManager {
  constructor(panelCtrl) {
    this.panelCtrl = panelCtrl;

    threshold_manager_defineProperty(this, "plot", void 0);

    threshold_manager_defineProperty(this, "placeholder", void 0);

    threshold_manager_defineProperty(this, "height", void 0);

    threshold_manager_defineProperty(this, "thresholds", void 0);

    threshold_manager_defineProperty(this, "needsCleanup", false);

    threshold_manager_defineProperty(this, "hasSecondYAxis", void 0);

    this.panelCtrl = panelCtrl;
  }

  getHandleHtml(handleIndex, model, valueStr) {
    let stateClass = model.colorMode;

    if (model.colorMode === 'custom') {
      stateClass = 'critical';
    }

    return `
    <div class="alert-handle-wrapper alert-handle-wrapper--T${handleIndex}">
      <div class="alert-handle-line alert-handle-line--${stateClass}">
      </div>
      <div class="alert-handle" data-handle-index="${handleIndex}">
        <i class="icon-gf icon-gf-${stateClass} alert-state-${stateClass}"></i>
        <span class="alert-handle-value">${valueStr}<i class="alert-handle-grip"></i></span>
      </div>
    </div>`;
  }

  initDragging(evt) {
    const handleElem = jquery_exposed_default()(evt.currentTarget).parents('.alert-handle-wrapper');
    const handleIndex = jquery_exposed_default()(evt.currentTarget).data('handleIndex');
    let lastY = null;
    let posTop;
    const plot = this.plot;
    const panelCtrl = this.panelCtrl;
    const model = this.thresholds[handleIndex];

    function dragging(evt) {
      if (lastY === null) {
        lastY = evt.clientY;
      } else {
        const diff = evt.clientY - lastY;
        posTop = posTop + diff;
        lastY = evt.clientY;
        handleElem.css({
          top: posTop + diff
        });
      }
    }

    function stopped() {
      let graphValue = plot.c2p({
        left: 0,
        top: posTop
      }).y;
      graphValue = parseInt(graphValue.toFixed(0), 10);
      model.value = graphValue;
      handleElem.off('mousemove', dragging);
      document.removeEventListener('mouseup', stopped); 

      panelCtrl.$scope.$apply(() => {
        panelCtrl.render();
        panelCtrl.events.emit(types.RW.GL, {
          threshold: model,
          handleIndex: handleIndex
        });
      });
    }

    lastY = null;
    posTop = handleElem.position().top;
    handleElem.on('mousemove', dragging);
    document.addEventListener('mouseup', stopped);
  }

  cleanUp() {
    this.placeholder.find('.alert-handle-wrapper').remove();
    this.needsCleanup = false;
  }

  renderHandle(handleIndex, defaultHandleTopPos) {
    const model = this.thresholds[handleIndex]; 

    if (!model.visible && this.panelCtrl.alert) {
      return;
    }

    const value = model.value;
    let valueStr = value;
    let handleTopPos = 0; 

    if (!(0,lodash.isNumber)(value)) {
      valueStr = '';
      handleTopPos = defaultHandleTopPos;
    } else {
      const valueCanvasPos = this.plot.p2c({
        x: 0,
        y: value
      });
      handleTopPos = Math.round(Math.min(Math.max(valueCanvasPos.top, 0), this.height) - 6);
    }

    const handleElem = jquery_exposed_default()(this.getHandleHtml(handleIndex, model, valueStr));
    this.placeholder.append(handleElem);
    handleElem.toggleClass('alert-handle-wrapper--no-value', valueStr === '');
    handleElem.css({
      top: handleTopPos
    });
  }

  shouldDrawHandles() {
    return !this.hasSecondYAxis && this.panelCtrl.editingThresholds && this.panelCtrl.panel.thresholds.length > 0;
  }

  prepare(elem, data) {
    this.hasSecondYAxis = false;

    for (let i = 0; i < data.length; i++) {
      if (data[i].yaxis > 1) {
        this.hasSecondYAxis = true;
        break;
      }
    }

    if (this.shouldDrawHandles()) {
      const thresholdMargin = this.panelCtrl.panel.thresholds.length > 1 ? '220px' : '110px';
      elem.css('margin-right', thresholdMargin);
    } else if (this.needsCleanup) {
      elem.css('margin-right', '0');
    }
  }

  draw(plot) {
    this.thresholds = this.panelCtrl.panel.thresholds;
    this.plot = plot;
    this.placeholder = plot.getPlaceholder();

    if (this.needsCleanup) {
      this.cleanUp();
    }

    if (!this.shouldDrawHandles()) {
      return;
    }

    this.height = plot.height();

    if (this.thresholds.length > 0) {
      this.renderHandle(0, 10);
    }

    if (this.thresholds.length > 1) {
      this.renderHandle(1, this.height - 30);
    }

    this.placeholder.off('mousedown', '.alert-handle');
    this.placeholder.on('mousedown', '.alert-handle', this.initDragging.bind(this));
    this.needsCleanup = true;
  }

  addFlotOptions(options, panel) {
    if (!panel.thresholds || panel.thresholds.length === 0) {
      return;
    }

    let gtLimit = Infinity;
    let ltLimit = -Infinity;
    let i, threshold, other;

    for (i = 0; i < panel.thresholds.length; i++) {
      threshold = panel.thresholds[i];

      if (!(0,lodash.isNumber)(threshold.value)) {
        continue;
      }

      let limit;

      switch (threshold.op) {
        case 'gt':
          {
            limit = gtLimit; 

            if (panel.thresholds.length > i + 1) {
              other = panel.thresholds[i + 1];

              if (other.value > threshold.value) {
                limit = other.value;
                ltLimit = limit;
              }
            }

            break;
          }

        case 'lt':
          {
            limit = ltLimit; 

            if (panel.thresholds.length > i + 1) {
              other = panel.thresholds[i + 1];

              if (other.value < threshold.value) {
                limit = other.value;
                gtLimit = limit;
              }
            }

            break;
          }
      }

      let fillColor, lineColor;

      switch (threshold.colorMode) {
        case 'critical':
          {
            fillColor = 'rgba(234, 112, 112, 0.12)';
            lineColor = 'rgba(237, 46, 24, 0.60)';
            break;
          }

        case 'warning':
          {
            fillColor = 'rgba(235, 138, 14, 0.12)';
            lineColor = 'rgba(247, 149, 32, 0.60)';
            break;
          }

        case 'ok':
          {
            fillColor = 'rgba(11, 237, 50, 0.090)';
            lineColor = 'rgba(6,163,69, 0.60)';
            break;
          }

        case 'custom':
          {
            fillColor = threshold.fillColor;
            lineColor = threshold.lineColor;
            break;
          }
      } 


      if (threshold.fill) {
        if (threshold.yaxis === 'right' && this.hasSecondYAxis) {
          options.grid.markings.push({
            y2axis: {
              from: threshold.value,
              to: limit
            },
            color: (0,grafana_data_src.getColorForTheme)(fillColor, config.vc.theme)
          });
        } else {
          options.grid.markings.push({
            yaxis: {
              from: threshold.value,
              to: limit
            },
            color: (0,grafana_data_src.getColorForTheme)(fillColor, config.vc.theme)
          });
        }
      }

      if (threshold.line) {
        if (threshold.yaxis === 'right' && this.hasSecondYAxis) {
          options.grid.markings.push({
            y2axis: {
              from: threshold.value,
              to: threshold.value
            },
            color: (0,grafana_data_src.getColorForTheme)(lineColor, config.vc.theme)
          });
        } else {
          options.grid.markings.push({
            yaxis: {
              from: threshold.value,
              to: threshold.value
            },
            color: (0,grafana_data_src.getColorForTheme)(lineColor, config.vc.theme)
          });
        }
      }
    }
  }

}
;
function time_region_manager_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const colorModes = {
  gray: {
    themeDependent: true,
    title: 'Gray',
    darkColor: {
      fill: 'rgba(255, 255, 255, 0.09)',
      line: 'rgba(255, 255, 255, 0.2)'
    },
    lightColor: {
      fill: 'rgba(0, 0, 0, 0.09)',
      line: 'rgba(0, 0, 0, 0.2)'
    }
  },
  red: {
    title: 'Red',
    color: {
      fill: 'rgba(234, 112, 112, 0.12)',
      line: 'rgba(237, 46, 24, 0.60)'
    }
  },
  green: {
    title: 'Green',
    color: {
      fill: 'rgba(11, 237, 50, 0.090)',
      line: 'rgba(6,163,69, 0.60)'
    }
  },
  blue: {
    title: 'Blue',
    color: {
      fill: 'rgba(11, 125, 238, 0.12)',
      line: 'rgba(11, 125, 238, 0.60)'
    }
  },
  yellow: {
    title: 'Yellow',
    color: {
      fill: 'rgba(235, 138, 14, 0.12)',
      line: 'rgba(247, 149, 32, 0.60)'
    }
  },
  custom: {
    title: 'Custom'
  }
};
function getColorModes() {
  return (0,lodash.map)(Object.keys(colorModes), key => {
    return {
      key,
      value: colorModes[key].title
    };
  });
}

function getColor(timeRegion, theme) {
  if (Object.keys(colorModes).indexOf(timeRegion.colorMode) === -1) {
    timeRegion.colorMode = 'red';
  }

  if (timeRegion.colorMode === 'custom') {
    return {
      fill: timeRegion.fill && timeRegion.fillColor ? (0,grafana_data_src.getColorForTheme)(timeRegion.fillColor, theme) : null,
      line: timeRegion.line && timeRegion.lineColor ? (0,grafana_data_src.getColorForTheme)(timeRegion.lineColor, theme) : null
    };
  }

  const colorMode = colorModes[timeRegion.colorMode];

  if (colorMode.themeDependent === true) {
    return theme.isLight ? colorMode.lightColor : colorMode.darkColor;
  }

  return {
    fill: timeRegion.fill ? (0,grafana_data_src.getColorForTheme)(colorMode.color.fill, theme) : null,
    line: timeRegion.fill ? (0,grafana_data_src.getColorForTheme)(colorMode.color.line, theme) : null
  };
}

class TimeRegionManager {
  constructor(panelCtrl) {
    this.panelCtrl = panelCtrl;

    time_region_manager_defineProperty(this, "plot", void 0);

    time_region_manager_defineProperty(this, "timeRegions", void 0);

    this.panelCtrl = panelCtrl;
  }

  draw(plot) {
    this.timeRegions = this.panelCtrl.panel.timeRegions;
    this.plot = plot;
  }

  addFlotOptions(options, panel) {
    if (!panel.timeRegions || panel.timeRegions.length === 0) {
      return;
    }

    const tRange = {
      from: (0,grafana_data_src.dateTime)(this.panelCtrl.range.from).utc(),
      to: (0,grafana_data_src.dateTime)(this.panelCtrl.range.to).utc()
    };
    let i, hRange, timeRegion, regions, fromStart, fromEnd, timeRegionColor;
    const timeRegionsCopy = panel.timeRegions.map(a => Object.assign({}, a));

    for (i = 0; i < timeRegionsCopy.length; i++) {
      timeRegion = timeRegionsCopy[i];

      if (!(timeRegion.fromDayOfWeek || timeRegion.from) && !(timeRegion.toDayOfWeek || timeRegion.to)) {
        continue;
      }

      if (timeRegion.from && !timeRegion.to) {
        timeRegion.to = timeRegion.from;
      }

      if (!timeRegion.from && timeRegion.to) {
        timeRegion.from = timeRegion.to;
      }

      hRange = {
        from: this.parseTimeRange(timeRegion.from),
        to: this.parseTimeRange(timeRegion.to)
      };

      if (!timeRegion.fromDayOfWeek && timeRegion.toDayOfWeek) {
        timeRegion.fromDayOfWeek = timeRegion.toDayOfWeek;
      }

      if (!timeRegion.toDayOfWeek && timeRegion.fromDayOfWeek) {
        timeRegion.toDayOfWeek = timeRegion.fromDayOfWeek;
      }

      if (timeRegion.fromDayOfWeek) {
        hRange.from.dayOfWeek = Number(timeRegion.fromDayOfWeek);
      }

      if (timeRegion.toDayOfWeek) {
        hRange.to.dayOfWeek = Number(timeRegion.toDayOfWeek);
      }

      if (hRange.from.dayOfWeek && hRange.from.h === null && hRange.from.m === null) {
        hRange.from.h = 0;
        hRange.from.m = 0;
        hRange.from.s = 0;
      }

      if (hRange.to.dayOfWeek && hRange.to.h === null && hRange.to.m === null) {
        hRange.to.h = 23;
        hRange.to.m = 59;
        hRange.to.s = 59;
      }

      if (!hRange.from || !hRange.to) {
        continue;
      }

      regions = [];
      fromStart = (0,grafana_data_src.dateTime)(tRange.from);
      fromStart.set('hour', 0);
      fromStart.set('minute', 0);
      fromStart.set('second', 0);
      fromStart.add(hRange.from.h, 'hours');
      fromStart.add(hRange.from.m, 'minutes');
      fromStart.add(hRange.from.s, 'seconds');

      while (fromStart.unix() <= tRange.to.unix()) {
        while (hRange.from.dayOfWeek && hRange.from.dayOfWeek !== fromStart.isoWeekday()) {
          fromStart.add(24, 'hours');
        }

        if (fromStart.unix() > tRange.to.unix()) {
          break;
        }

        fromEnd = (0,grafana_data_src.dateTime)(fromStart);

        if (fromEnd.hour) {
          if (hRange.from.h <= hRange.to.h) {
            fromEnd.add(hRange.to.h - hRange.from.h, 'hours');
          } else if (hRange.from.h > hRange.to.h) {
            while (fromEnd.hour() !== hRange.to.h) {
              fromEnd.add(1, 'hours');
            }
          } else {
            fromEnd.add(24 - hRange.from.h, 'hours');

            while (fromEnd.hour() !== hRange.to.h) {
              fromEnd.add(1, 'hours');
            }
          }
        }

        fromEnd.set('minute', hRange.to.m);
        fromEnd.set('second', hRange.to.s);

        while (hRange.to.dayOfWeek && hRange.to.dayOfWeek !== fromEnd.isoWeekday()) {
          fromEnd.add(24, 'hours');
        }

        const outsideRange = fromStart.unix() < tRange.from.unix() && fromEnd.unix() < tRange.from.unix() || fromStart.unix() > tRange.to.unix() && fromEnd.unix() > tRange.to.unix();

        if (!outsideRange) {
          regions.push({
            from: fromStart.valueOf(),
            to: fromEnd.valueOf()
          });
        }

        fromStart.add(24, 'hours');
      }

      timeRegionColor = getColor(timeRegion, config.vc.theme);

      for (let j = 0; j < regions.length; j++) {
        const r = regions[j];

        if (timeRegion.fill) {
          options.grid.markings.push({
            xaxis: {
              from: r.from,
              to: r.to
            },
            color: timeRegionColor.fill
          });
        }

        if (timeRegion.line) {
          options.grid.markings.push({
            xaxis: {
              from: r.from,
              to: r.from
            },
            color: timeRegionColor.line
          });
          options.grid.markings.push({
            xaxis: {
              from: r.to,
              to: r.to
            },
            color: timeRegionColor.line
          });
        }
      }
    }
  }

  parseTimeRange(str) {
    const timeRegex = /^([\d]+):?(\d{2})?/;
    const result = {
      h: null,
      m: null
    };
    const match = timeRegex.exec(str);

    if (!match) {
      return result;
    }

    if (match.length > 1) {
      result.h = Number(match[1]);
      result.m = 0;

      if (match.length > 2 && match[2] !== undefined) {
        result.m = Number(match[2]);
      }

      if (result.h > 23) {
        result.h = 23;
      }

      if (result.m > 59) {
        result.m = 59;
      }
    }

    return result;
  }

}
;


function getDataTimeRange(frames) {
  const range = {
    from: Number.MAX_SAFE_INTEGER,
    to: Number.MIN_SAFE_INTEGER
  };
  let found = false;
  const reducers = [grafana_data_src.ReducerID.min, grafana_data_src.ReducerID.max];

  for (const frame of frames) {
    for (const field of frame.fields) {
      if (field.type === grafana_data_src.FieldType.time) {
        const calcs = (0,grafana_data_src.reduceField)({
          field,
          reducers
        });
        range.from = Math.min(range.from, calcs[grafana_data_src.ReducerID.min]);
        range.to = Math.max(range.to, calcs[grafana_data_src.ReducerID.max]);
        found = true;
      }
    }
  }

  return found ? range : undefined;
} 

function isLegacyGraphHoverEvent(event) {
  return event.hasOwnProperty('pos');
}
;
graphDirective.$inject = ["timeSrv", "popoverSrv", "contextSrv"];

function graph_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






























const LegendWithThemeProvider = (0,ConfigProvider.ER)(Legend);

class GraphElement {
  constructor(scope, elem, timeSrv) {
    this.scope = scope;
    this.elem = elem;
    this.timeSrv = timeSrv;

    graph_defineProperty(this, "ctrl", void 0);

    graph_defineProperty(this, "contextMenu", void 0);

    graph_defineProperty(this, "tooltip", void 0);

    graph_defineProperty(this, "dashboard", void 0);

    graph_defineProperty(this, "annotations", void 0);

    graph_defineProperty(this, "panel", void 0);

    graph_defineProperty(this, "plot", void 0);

    graph_defineProperty(this, "sortedSeries", void 0);

    graph_defineProperty(this, "data", []);

    graph_defineProperty(this, "panelWidth", void 0);

    graph_defineProperty(this, "eventManager", void 0);

    graph_defineProperty(this, "thresholdManager", void 0);

    graph_defineProperty(this, "timeRegionManager", void 0);

    graph_defineProperty(this, "getContextMenuItemsSupplier", (flotPosition, linksSupplier) => {
      return () => {
        const items = this.dashboard.canAddAnnotations() ? [{
          items: [{
            label: 'Add annotation',
            ariaLabel: 'Add annotation',
            icon: 'comment-alt',
            onClick: () => this.eventManager.updateTime({
              from: flotPosition.x,
              to: null
            })
          }]
        }] : [];

        if (!linksSupplier) {
          return items;
        }

        const dataLinks = [{
          items: linksSupplier.getLinks(this.panel.replaceVariables).map(link => {
            return {
              label: link.title,
              ariaLabel: link.title,
              url: link.href,
              target: link.target,
              icon: `${link.target === '_self' ? 'link' : 'external-link-alt'}`,
              onClick: link.onClick
            };
          })
        }];
        return [...items, ...dataLinks];
      };
    });

    this.scope = scope;
    this.elem = elem;
    this.timeSrv = timeSrv;
    this.ctrl = scope.ctrl;
    this.contextMenu = scope.ctrl.contextMenuCtrl;
    this.dashboard = this.ctrl.dashboard;
    this.panel = this.ctrl.panel;
    this.annotations = [];
    this.panelWidth = 0;
    this.eventManager = new EventManager(this.ctrl);
    this.thresholdManager = new ThresholdManager(this.ctrl);
    this.timeRegionManager = new TimeRegionManager(this.ctrl); 

    this.tooltip = new GraphTooltip(this.elem, this.ctrl.dashboard, this.scope, () => {
      return this.sortedSeries;
    }); 

    this.ctrl.events.on(grafana_data_src.PanelEvents.panelTeardown, this.onPanelTeardown.bind(this));
    this.ctrl.events.on(grafana_data_src.PanelEvents.render, this.onRender.bind(this)); 

    this.ctrl.dashboard.events.on(grafana_data_src.LegacyGraphHoverEvent.type, this.onGraphHover.bind(this), this.scope);
    this.ctrl.dashboard.events.on(grafana_data_src.LegacyGraphHoverClearEvent.type, this.onGraphHoverClear.bind(this), this.scope);
    this.ctrl.dashboard.events.on(grafana_data_src.DataHoverEvent.type, this.onGraphHover.bind(this), this.scope);
    this.ctrl.dashboard.events.on(grafana_data_src.DataHoverClearEvent.type, this.onGraphHoverClear.bind(this), this.scope); 

    this.elem.bind('plotselected', this.onPlotSelected.bind(this));
    this.elem.bind('plotclick', this.onPlotClick.bind(this)); 

    if (this.elem && this.elem.parent) {
      this.legendElem = this.elem.parent().find('.graph-legend')[0];
    }
  }

  onRender(renderData) {
    this.data = renderData || this.data;

    if (!this.data) {
      return;
    }

    this.annotations = this.ctrl.annotations || [];
    this.buildFlotPairs(this.data);
    const graphHeight = this.ctrl.height;
    (0,core.Wz)(this.data, this.panel, graphHeight);

    if (!this.panel.legend.show) {
      if (this.legendElem.hasChildNodes()) {
        react_dom.unmountComponentAtNode(this.legendElem);
      }

      this.renderPanel();
      return;
    }

    const {
      values,
      min,
      max,
      avg,
      current,
      total
    } = this.panel.legend;
    const {
      alignAsTable,
      rightSide,
      sideWidth,
      sort,
      sortDesc,
      hideEmpty,
      hideZero
    } = this.panel.legend;
    const legendOptions = {
      alignAsTable,
      rightSide,
      sideWidth,
      sort,
      sortDesc,
      hideEmpty,
      hideZero
    };
    const valueOptions = {
      values,
      min,
      max,
      avg,
      current,
      total
    };
    const legendProps = Object.assign({
      seriesList: this.data,
      hiddenSeries: this.ctrl.hiddenSeries
    }, legendOptions, valueOptions, {
      onToggleSeries: this.ctrl.onToggleSeries,
      onToggleSort: this.ctrl.onToggleSort,
      onColorChange: this.ctrl.onColorChange,
      onToggleAxis: this.ctrl.onToggleAxis
    });
    const legendReactElem = react.createElement(LegendWithThemeProvider, legendProps);
    react_dom.render(legendReactElem, this.legendElem, () => this.renderPanel());
  }

  onGraphHover(evt) {
    var _evt$point, _evt$point$panelRelY;

    if (!this.dashboard.sharedTooltipModeEnabled()) {
      return;
    }

    if (isLegacyGraphHoverEvent(evt)) {
      var _evt$panel;

      if (!this.plot || ((_evt$panel = evt.panel) === null || _evt$panel === void 0 ? void 0 : _evt$panel.id) === this.panel.id || this.ctrl.otherPanelInFullscreenMode()) {
        return;
      }

      this.tooltip.show(evt.pos);
    } 


    if (!((_evt$point = evt.point) !== null && _evt$point !== void 0 && _evt$point.time)) {
      return;
    }

    this.tooltip.show({
      x: evt.point.time,
      panelRelY: (_evt$point$panelRelY = evt.point.panelRelY) !== null && _evt$point$panelRelY !== void 0 ? _evt$point$panelRelY : 1
    });
  }

  onPanelTeardown() {
    if (this.plot) {
      this.plot.destroy();
      this.plot = null;
    }

    this.tooltip.destroy();
    this.elem.off();
    this.elem.remove();
    react_dom.unmountComponentAtNode(this.legendElem);
  }

  onGraphHoverClear(handler) {
    if (this.plot) {
      this.tooltip.clear(this.plot);
    }
  }

  onPlotSelected(event, ranges) {
    if (this.panel.xaxis.mode !== 'time') {
      this.plot.clearSelection();
      return;
    }

    if ((ranges.ctrlKey || ranges.metaKey) && this.dashboard.canAddAnnotations()) {
      setTimeout(() => {
        this.eventManager.updateTime(ranges.xaxis);
      }, 100);
    } else {
      this.scope.$apply(() => {
        this.timeSrv.setTime({
          from: (0,grafana_data_src.toUtc)(ranges.xaxis.from),
          to: (0,grafana_data_src.toUtc)(ranges.xaxis.to)
        });
      });
    }
  }

  onPlotClick(event, pos, item) {
    const scrollContextElement = this.elem.closest('.view') ? this.elem.closest('.view').get()[0] : null;
    const contextMenuSourceItem = item;

    if (this.panel.xaxis.mode !== 'time') {
      return;
    }

    if (pos.ctrlKey || pos.metaKey) {
      if (pos.x !== pos.x1) {
        return;
      } 


      if (!this.dashboard.id || !this.dashboard.canAddAnnotations()) {
        return;
      }

      setTimeout(() => {
        this.eventManager.updateTime({
          from: pos.x,
          to: null
        });
      }, 100);
      return;
    } else {
      this.tooltip.clear(this.plot);
      let linksSupplier;

      if (item) {
        const yAxisConfig = this.panel.yaxes[item.series.yaxis.n === 2 ? 1 : 0];
        const dataFrame = this.ctrl.dataList[item.series.dataFrameIndex];
        const field = dataFrame.fields[item.series.fieldIndex];
        const dataIndex = this.getDataIndexWithNullValuesCorrection(item, dataFrame);
        let links = this.panel.options.dataLinks || [];
        const hasLinksValue = (0,grafana_data_src.hasLinks)(field);

        if (hasLinksValue) {
          links = [...links, ...field.config.links];
        }

        const fieldConfig = {
          decimals: yAxisConfig.decimals,
          links
        };
        const fieldDisplay = (0,grafana_data_src.getDisplayProcessor)({
          field: {
            config: fieldConfig,
            type: grafana_data_src.FieldType.number
          },
          theme: config.ZP.theme2,
          timeZone: this.dashboard.getTimezone()
        })(field.values.get(dataIndex));
        linksSupplier = links.length ? (0,linkSuppliers.n)({
          display: fieldDisplay,
          name: field.name,
          view: new grafana_data_src.DataFrameView(dataFrame),
          rowIndex: dataIndex,
          colIndex: item.series.fieldIndex,
          field: fieldConfig,
          hasLinks: hasLinksValue
        }) : undefined;
      }

      this.scope.$apply(() => {
        this.contextMenu.setScrollContextElement(scrollContextElement);
        this.contextMenu.setSource(contextMenuSourceItem);
        this.contextMenu.setMenuItemsSupplier(this.getContextMenuItemsSupplier(pos, linksSupplier));
        this.contextMenu.toggleMenu(pos);
      });
    }
  }

  getDataIndexWithNullValuesCorrection(item, dataFrame) {
    const {
      datapoint,
      dataIndex
    } = item;

    if (!Array.isArray(datapoint) || datapoint.length === 0) {
      return dataIndex;
    }

    const ts = datapoint[0];
    const {
      timeField
    } = (0,grafana_data_src.getTimeField)(dataFrame);

    if (!timeField || !timeField.values) {
      return dataIndex;
    }

    const field = timeField.values.get(dataIndex);

    if (field === ts) {
      return dataIndex;
    }

    const correctIndex = timeField.values.toArray().findIndex(value => value === ts);
    return correctIndex > -1 ? correctIndex : dataIndex;
  }

  shouldAbortRender() {
    if (!this.data) {
      return true;
    }

    if (this.panelWidth === 0) {
      return true;
    }

    return false;
  }

  drawHook(plot) {
    if (this.panel.yaxes[0].label && this.panel.yaxes[0].show) {
      jquery_exposed_default()("<div class='axisLabel left-yaxis-label flot-temp-elem'></div>").text(this.panel.yaxes[0].label).appendTo(this.elem);
    } 


    if (this.panel.yaxes[1].label && this.panel.yaxes[1].show) {
      jquery_exposed_default()("<div class='axisLabel right-yaxis-label flot-temp-elem'></div>").text(this.panel.yaxes[1].label).appendTo(this.elem);
    }

    const {
      dataWarning
    } = this.ctrl;

    if (dataWarning) {
      const msg = jquery_exposed_default()(`<div class="datapoints-warning flot-temp-elem">${dataWarning.title}</div>`);

      if (dataWarning.action) {
        jquery_exposed_default()(`<button class="btn btn-secondary">${dataWarning.actionText}</button>`).click(dataWarning.action).appendTo(msg);
      }

      msg.appendTo(this.elem);
    }

    this.thresholdManager.draw(plot);
    this.timeRegionManager.draw(plot);
  }

  processOffsetHook(plot, gridMargin) {
    const left = this.panel.yaxes[0];
    const right = this.panel.yaxes[1];

    if (left.show && left.label) {
      gridMargin.left = 20;
    }

    if (right.show && right.label) {
      gridMargin.right = 20;
    } 


    const yaxis = plot.getYAxes();

    for (let i = 0; i < yaxis.length; i++) {
      const axis = yaxis[i];
      const panelOptions = this.panel.yaxes[i];
      axis.options.max = axis.options.max !== null ? axis.options.max : panelOptions.max;
      axis.options.min = axis.options.min !== null ? axis.options.min : panelOptions.min;
    }
  }

  processRangeHook(plot) {
    const yAxes = plot.getYAxes();
    const align = this.panel.yaxis.align || false;

    if (yAxes.length > 1 && align === true) {
      const level = this.panel.yaxis.alignLevel || 0;
      alignYLevel(yAxes, parseFloat(level));
    }
  } 


  getMinTimeStepOfSeries(data) {
    let min = Number.MAX_VALUE;

    for (let i = 0; i < data.length; i++) {
      if (!data[i].stats.timeStep) {
        continue;
      }

      if (this.panel.bars) {
        if (data[i].bars && data[i].bars.show === false) {
          continue;
        }
      } else {
        if (typeof data[i].bars === 'undefined' || typeof data[i].bars.show === 'undefined' || !data[i].bars.show) {
          continue;
        }
      }

      if (data[i].stats.timeStep < min) {
        min = data[i].stats.timeStep;
      }
    }

    return min;
  } 


  renderPanel() {
    var _this$elem$width;

    this.panelWidth = (_this$elem$width = this.elem.width()) !== null && _this$elem$width !== void 0 ? _this$elem$width : 0;

    if (this.shouldAbortRender()) {
      return;
    } 


    this.thresholdManager.prepare(this.elem, this.data); 

    this.panel.dashes = this.panel.lines ? this.panel.dashes : false; 

    const options = this.buildFlotOptions(this.panel);
    this.prepareXAxis(options, this.panel);
    this.configureYAxisOptions(this.data, options);
    this.thresholdManager.addFlotOptions(options, this.panel);
    this.timeRegionManager.addFlotOptions(options, this.panel);
    this.eventManager.addFlotEvents(this.annotations, options);
    this.sortedSeries = this.sortSeries(this.data, this.panel);
    this.callPlot(options, true);
  }

  buildFlotPairs(data) {
    for (let i = 0; i < data.length; i++) {
      const series = data[i];
      series.data = series.getFlotPairs(series.nullPointMode || this.panel.nullPointMode);

      if (series.transform === 'constant') {
        series.data = (0,grafana_data_src.getFlotPairsConstant)(series.data, this.ctrl.range);
      } 


      if (this.ctrl.hiddenSeries[series.alias]) {
        series.data = [];
        series.stack = false;
      }
    }
  }

  prepareXAxis(options, panel) {
    switch (panel.xaxis.mode) {
      case 'series':
        {
          options.series.bars.barWidth = 0.7;
          options.series.bars.align = 'center';

          for (let i = 0; i < this.data.length; i++) {
            const series = this.data[i];
            series.data = [[i + 1, series.stats[panel.xaxis.values[0]]]];
          }

          this.addXSeriesAxis(options);
          break;
        }

      case 'histogram':
        {
          let bucketSize;

          if (this.data.length) {
            let histMin = (0,lodash.min)((0,lodash.map)(this.data, s => s.stats.min));

            let histMax = (0,lodash.max)((0,lodash.map)(this.data, s => s.stats.max));

            const ticks = panel.xaxis.buckets || this.panelWidth / 50;

            if (panel.xaxis.min != null) {
              const isInvalidXaxisMin = (0,utils_ticks.tickStep)(panel.xaxis.min, histMax, ticks) <= 0;
              histMin = isInvalidXaxisMin ? histMin : panel.xaxis.min;
            }

            if (panel.xaxis.max != null) {
              const isInvalidXaxisMax = (0,utils_ticks.tickStep)(histMin, panel.xaxis.max, ticks) <= 0;
              histMax = isInvalidXaxisMax ? histMax : panel.xaxis.max;
            }

            bucketSize = (0,utils_ticks.tickStep)(histMin, histMax, ticks);
            options.series.bars.barWidth = bucketSize * 0.8;
            this.data = convertToHistogramData(this.data, bucketSize, this.ctrl.hiddenSeries, histMin, histMax);
          } else {
            bucketSize = 0;
          }

          this.addXHistogramAxis(options, bucketSize);
          break;
        }

      case 'table':
        {
          options.series.bars.barWidth = 0.7;
          options.series.bars.align = 'center';
          this.addXTableAxis(options);
          break;
        }

      default:
        {
          options.series.bars.barWidth = this.getMinTimeStepOfSeries(this.data) / 1.5;
          this.addTimeAxis(options);
          break;
        }
    }
  }

  callPlot(options, incrementRenderCounter) {
    try {
      this.plot = jquery_exposed_default().plot(this.elem, this.sortedSeries, options);

      if (this.ctrl.renderError) {
        delete this.ctrl.error;
      }
    } catch (e) {
      console.error('flotcharts error', e);
      this.ctrl.error = e.message || 'Render Error';
      this.ctrl.renderError = true;
    }

    if (incrementRenderCounter) {
      this.ctrl.renderingCompleted();
    }
  }

  buildFlotOptions(panel) {
    let gridColor = '#c8c8c8';

    if (config.ZP.bootData.user.lightTheme === true) {
      gridColor = '#a1a1a1';
    }

    const stack = panel.stack ? true : null;
    const options = {
      hooks: {
        draw: [this.drawHook.bind(this)],
        processOffset: [this.processOffsetHook.bind(this)],
        processRange: [this.processRangeHook.bind(this)]
      },
      legend: {
        show: false
      },
      series: {
        stackpercent: panel.stack ? panel.percentage : false,
        stack: panel.percentage ? null : stack,
        lines: {
          show: panel.lines,
          zero: false,
          fill: this.translateFillOption(panel.fill),
          fillColor: this.getFillGradient(panel.fillGradient),
          lineWidth: panel.dashes ? 0 : panel.linewidth,
          steps: panel.steppedLine
        },
        dashes: {
          show: panel.dashes,
          lineWidth: panel.linewidth,
          dashLength: [panel.dashLength, panel.spaceLength]
        },
        bars: {
          show: panel.bars,
          fill: 1,
          barWidth: 1,
          zero: false,
          lineWidth: 0
        },
        points: {
          show: panel.points,
          fill: 1,
          fillColor: false,
          radius: panel.points ? panel.pointradius : 2
        },
        shadowSize: 0
      },
      yaxes: [],
      xaxis: {},
      grid: {
        minBorderMargin: 0,
        markings: [],
        backgroundColor: null,
        borderWidth: 0,
        hoverable: true,
        clickable: true,
        color: gridColor,
        margin: {
          left: 0,
          right: 0
        },
        labelMarginX: 0,
        mouseActiveRadius: 30
      },
      selection: {
        mode: 'x',
        color: '#666'
      },
      crosshair: {
        mode: 'x'
      }
    };
    return options;
  }

  sortSeries(series, panel) {
    const sortBy = panel.legend.sort;
    const sortOrder = panel.legend.sortDesc;
    const haveSortBy = sortBy !== null && sortBy !== undefined && panel.legend[sortBy];
    const haveSortOrder = sortOrder !== null && sortOrder !== undefined;
    const shouldSortBy = panel.stack && haveSortBy && haveSortOrder && panel.legend.alignAsTable;
    const sortDesc = panel.legend.sortDesc === true ? -1 : 1;

    if (shouldSortBy) {
      return (0,lodash.sortBy)(series, s => s.stats[sortBy] * sortDesc);
    } else {
      return (0,lodash.sortBy)(series, s => s.zindex);
    }
  }

  getFillGradient(amount) {
    if (!amount) {
      return null;
    }

    return {
      colors: [{
        opacity: 0.0
      }, {
        opacity: amount / 10
      }]
    };
  }

  translateFillOption(fill) {
    if (this.panel.percentage && this.panel.stack) {
      return fill === 0 ? 0.001 : fill / 10;
    } else {
      return fill / 10;
    }
  }

  addTimeAxis(options) {
    const ticks = this.panelWidth / 100;
    const min = (0,lodash.isUndefined)(this.ctrl.range.from) ? null : this.ctrl.range.from.valueOf();
    const max = (0,lodash.isUndefined)(this.ctrl.range.to) ? null : this.ctrl.range.to.valueOf();
    options.xaxis = {
      timezone: this.dashboard.getTimezone(),
      show: this.panel.xaxis.show,
      mode: 'time',
      min: min,
      max: max,
      label: 'Datetime',
      ticks: ticks,
      timeformat: (0,grafana_ui_src.graphTimeFormat)(ticks, min, max),
      tickFormatter: grafana_ui_src.graphTickFormatter
    };
  }

  addXSeriesAxis(options) {
    const ticks = (0,lodash.map)(this.data, (series, index) => {
      return [index + 1, series.alias];
    });
    options.xaxis = {
      timezone: this.dashboard.getTimezone(),
      show: this.panel.xaxis.show,
      mode: null,
      min: 0,
      max: ticks.length + 1,
      label: 'Datetime',
      ticks: ticks
    };
  }

  addXHistogramAxis(options, bucketSize) {
    let ticks;
    let min;
    let max;
    const defaultTicks = this.panelWidth / 50;

    if (this.data.length && bucketSize) {
      const tickValues = [];

      for (const d of this.data) {
        for (const point of d.data) {
          tickValues[point[0]] = true;
        }
      }

      ticks = Object.keys(tickValues).map(v => Number(v));
      min = (0,lodash.min)(ticks);
      max = (0,lodash.max)(ticks); 

      let tickStep = bucketSize;
      let ticksNum = Math.floor((max - min) / tickStep);

      while (ticksNum > defaultTicks) {
        tickStep = tickStep * 2;
        ticksNum = Math.ceil((max - min) / tickStep);
      } 


      min = Math.floor(min / tickStep) * tickStep; 

      max = Math.ceil(max * 1.01 / tickStep) * tickStep;
      ticks = [];

      for (let i = min; i <= max; i += tickStep) {
        ticks.push(i);
      }
    } else {
      ticks = defaultTicks / 2;
      min = 0;
      max = 1;
    }

    options.xaxis = {
      timezone: this.dashboard.getTimezone(),
      show: this.panel.xaxis.show,
      mode: null,
      min: min,
      max: max,
      label: 'Histogram',
      ticks: ticks
    }; 

    this.configureAxisMode(options.xaxis, 'short', null);
  }

  addXTableAxis(options) {
    let ticks = (0,lodash.map)(this.data, (series, seriesIndex) => {
      return (0,lodash.map)(series.datapoints, (point, pointIndex) => {
        const tickIndex = seriesIndex * series.datapoints.length + pointIndex;
        return [tickIndex + 1, point[1]];
      });
    }); 

    ticks = (0,lodash.flatten)(ticks, true);
    options.xaxis = {
      timezone: this.dashboard.getTimezone(),
      show: this.panel.xaxis.show,
      mode: null,
      min: 0,
      max: ticks.length + 1,
      label: 'Datetime',
      ticks: ticks
    };
  }

  configureYAxisOptions(data, options) {
    const defaults = {
      position: 'left',
      show: this.panel.yaxes[0].show,
      index: 1,
      logBase: this.panel.yaxes[0].logBase || 1,
      min: this.parseNumber(this.panel.yaxes[0].min),
      max: this.parseNumber(this.panel.yaxes[0].max),
      tickDecimals: this.panel.yaxes[0].decimals
    };
    options.yaxes.push(defaults);

    if ((0,lodash.find)(data, {
      yaxis: 2
    })) {
      const secondY = (0,lodash.clone)(defaults);
      secondY.index = 2;
      secondY.show = this.panel.yaxes[1].show;
      secondY.logBase = this.panel.yaxes[1].logBase || 1;
      secondY.position = 'right';
      secondY.min = this.parseNumber(this.panel.yaxes[1].min);
      secondY.max = this.parseNumber(this.panel.yaxes[1].max);
      secondY.tickDecimals = this.panel.yaxes[1].decimals;
      options.yaxes.push(secondY);
      this.applyLogScale(options.yaxes[1], data);
      this.configureAxisMode(options.yaxes[1], this.panel.percentage && this.panel.stack ? 'percent' : this.panel.yaxes[1].format, this.panel.yaxes[1].decimals);
    }

    this.applyLogScale(options.yaxes[0], data);
    this.configureAxisMode(options.yaxes[0], this.panel.percentage && this.panel.stack ? 'percent' : this.panel.yaxes[0].format, this.panel.yaxes[0].decimals);
  }

  parseNumber(value) {
    if (value === null || typeof value === 'undefined') {
      return null;
    }

    return (0,lodash.toNumber)(value);
  }

  applyLogScale(axis, data) {
    if (axis.logBase === 1) {
      return;
    }

    const minSetToZero = axis.min === 0;

    if (axis.min < Number.MIN_VALUE) {
      axis.min = null;
    }

    if (axis.max < Number.MIN_VALUE) {
      axis.max = null;
    }

    let series, i;
    let max = axis.max,
        min = axis.min;

    for (i = 0; i < data.length; i++) {
      series = data[i];

      if (series.yaxis === axis.index) {
        if (!max || max < series.stats.max) {
          max = series.stats.max;
        }

        if (!min || min > series.stats.logmin) {
          min = series.stats.logmin;
        }
      }
    }

    axis.transform = v => {
      return v < Number.MIN_VALUE ? null : Math.log(v) / Math.log(axis.logBase);
    };

    axis.inverseTransform = v => {
      return Math.pow(axis.logBase, v);
    };

    if (!max && !min) {
      max = axis.inverseTransform(+2);
      min = axis.inverseTransform(-2);
    } else if (!max) {
      max = min * axis.inverseTransform(+4);
    } else if (!min) {
      min = max * axis.inverseTransform(-4);
    }

    if (axis.min) {
      min = axis.inverseTransform(Math.ceil(axis.transform(axis.min)));
    } else {
      min = axis.min = axis.inverseTransform(Math.floor(axis.transform(min)));
    }

    if (axis.max) {
      max = axis.inverseTransform(Math.floor(axis.transform(axis.max)));
    } else {
      max = axis.max = axis.inverseTransform(Math.ceil(axis.transform(max)));
    }

    if (!min || min < Number.MIN_VALUE || !max || max < Number.MIN_VALUE) {
      return;
    }

    if (Number.isFinite(min) && Number.isFinite(max)) {
      if (minSetToZero) {
        axis.min = 0.1;
        min = 1;
      }

      axis.ticks = this.generateTicksForLogScaleYAxis(min, max, axis.logBase);

      if (minSetToZero) {
        axis.ticks.unshift(0.1);
      }

      if (axis.ticks[axis.ticks.length - 1] > axis.max) {
        axis.max = axis.ticks[axis.ticks.length - 1];
      }
    } else {
      axis.ticks = [1, 2];
      delete axis.min;
      delete axis.max;
    }
  }

  generateTicksForLogScaleYAxis(min, max, logBase) {
    let ticks = [];
    let nextTick;

    for (nextTick = min; nextTick <= max; nextTick *= logBase) {
      ticks.push(nextTick);
    }

    const maxNumTicks = Math.ceil(this.ctrl.height / 25);
    const numTicks = ticks.length;

    if (numTicks > maxNumTicks) {
      const factor = Math.ceil(numTicks / maxNumTicks) * logBase;
      ticks = [];

      for (nextTick = min; nextTick <= max * factor; nextTick *= factor) {
        ticks.push(nextTick);
      }
    }

    return ticks;
  }

  configureAxisMode(axis, format, decimals) {
    axis.tickFormatter = (val, axis) => {
      const formatter = (0,grafana_data_src.getValueFormat)(format);

      if (!formatter) {
        throw new Error(`Unit '${format}' is not supported`);
      }

      return (0,grafana_data_src.formattedValueToString)(formatter(val, decimals));
    };
  }

}


function graphDirective(timeSrv, popoverSrv, contextSrv) {
  return {
    restrict: 'A',
    template: '',
    link: (scope, elem) => {
      return new GraphElement(scope, elem, timeSrv);
    }
  };
}

core_module.hF.directive('grafanaGraph', graphDirective);

;
SeriesOverridesCtrl.$inject = ["$scope", "$element", "popoverSrv"];




function SeriesOverridesCtrl($scope, $element, popoverSrv) {
  $scope.overrideMenu = [];
  $scope.currentOverrides = [];
  $scope.override = $scope.override || {};
  $scope.colorPickerModel = {};

  $scope.addOverrideOption = (name, propertyName, values) => {
    const option = {
      text: name,
      propertyName: propertyName,
      index: $scope.overrideMenu.length,
      values,
      submenu: (0,lodash.map)(values, value => {
        return {
          text: String(value),
          value: value
        };
      })
    };
    $scope.overrideMenu.push(option);
  };

  $scope.setOverride = (item, subItem) => {
    if (item.propertyName === 'color') {
      $scope.openColorSelector($scope.override['color']);
      return;
    }

    $scope.override[item.propertyName] = subItem.value; 

    if (item.propertyName === 'fillBelowTo') {
      $scope.override['lines'] = false;
      $scope.ctrl.addSeriesOverride({
        alias: subItem.value,
        lines: false
      });
    }

    $scope.updateCurrentOverrides();
    $scope.ctrl.render();
  };

  $scope.colorSelected = color => {
    $scope.override['color'] = color;
    $scope.updateCurrentOverrides();
    $scope.ctrl.render(); 

    $scope.colorPickerModel.series.color = color;
  };

  $scope.openColorSelector = color => {
    $scope.colorPickerModel = {
      autoClose: true,
      colorSelected: $scope.colorSelected,
      series: {
        color
      }
    };
    popoverSrv.show({
      element: $element.find('.dropdown')[0],
      position: 'top center',
      openOn: 'click',
      template: '<series-color-picker-popover color="series.color" onColorChange="colorSelected" />',
      classNames: 'drop-popover drop-popover--transparent',
      model: $scope.colorPickerModel,
      onClose: () => {
        $scope.ctrl.render();
      }
    });
  };

  $scope.removeOverride = option => {
    delete $scope.override[option.propertyName];
    $scope.updateCurrentOverrides();
    $scope.ctrl.refresh();
  };

  $scope.getSeriesNames = () => {
    return (0,lodash.map)($scope.ctrl.seriesList, series => {
      return grafana_data_src.textUtil.escapeHtml(series.alias);
    });
  };

  $scope.updateCurrentOverrides = () => {
    $scope.currentOverrides = [];
    (0,lodash.each)($scope.overrideMenu, option => {
      const value = $scope.override[option.propertyName];

      if ((0,lodash.isUndefined)(value)) {
        return;
      }

      $scope.currentOverrides.push({
        name: option.text,
        propertyName: option.propertyName,
        value: String(value)
      });
    });
  };

  $scope.addOverrideOption('Bars', 'bars', [true, false]);
  $scope.addOverrideOption('Lines', 'lines', [true, false]);
  $scope.addOverrideOption('Line fill', 'fill', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  $scope.addOverrideOption('Fill gradient', 'fillGradient', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  $scope.addOverrideOption('Line width', 'linewidth', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  $scope.addOverrideOption('Null point mode', 'nullPointMode', ['connected', 'null', 'null as zero']);
  $scope.addOverrideOption('Fill below to', 'fillBelowTo', $scope.getSeriesNames());
  $scope.addOverrideOption('Staircase line', 'steppedLine', [true, false]);
  $scope.addOverrideOption('Dashes', 'dashes', [true, false]);
  $scope.addOverrideOption('Hidden Series', 'hiddenSeries', [true, false]);
  $scope.addOverrideOption('Dash Length', 'dashLength', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  $scope.addOverrideOption('Dash Space', 'spaceLength', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  $scope.addOverrideOption('Points', 'points', [true, false]);
  $scope.addOverrideOption('Points Radius', 'pointradius', [1, 2, 3, 4, 5]);
  $scope.addOverrideOption('Stack', 'stack', [true, false, 'A', 'B', 'C', 'D']);
  $scope.addOverrideOption('Color', 'color', ['change']);
  $scope.addOverrideOption('Y-axis', 'yaxis', [1, 2]);
  $scope.addOverrideOption('Z-index', 'zindex', [-3, -2, -1, 0, 1, 2, 3]);
  $scope.addOverrideOption('Transform', 'transform', ['constant', 'negative-Y']);
  $scope.addOverrideOption('Legend', 'legend', [true, false]);
  $scope.addOverrideOption('Hide in tooltip', 'hideTooltip', [true, false]);
  $scope.updateCurrentOverrides();
}
core_module.ZP.controller('SeriesOverridesCtrl', SeriesOverridesCtrl);
;
function thresholds_form_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ThresholdFormCtrl {
  constructor($scope) {
    this.$scope = $scope;

    thresholds_form_defineProperty(this, "panelCtrl", void 0);

    thresholds_form_defineProperty(this, "panel", void 0);

    thresholds_form_defineProperty(this, "disabled", false);

    this.$scope = $scope;
  }

  $onInit() {
    this.panel = this.panelCtrl.panel;

    if (this.panel.alert && !config.ZP.unifiedAlertingEnabled) {
      this.disabled = true;
    }

    const unbindDestroy = this.$scope.$on('$destroy', () => {
      this.panelCtrl.editingThresholds = false;
      this.panelCtrl.render();
      unbindDestroy();
    });
    this.panelCtrl.editingThresholds = true;
  }

  addThreshold() {
    this.panel.thresholds.push({
      value: undefined,
      colorMode: 'critical',
      op: 'gt',
      fill: true,
      line: true,
      yaxis: 'left'
    });
    this.panelCtrl.render();
  }

  removeThreshold(index) {
    this.panel.thresholds.splice(index, 1);
    this.panelCtrl.render();
  }

  render() {
    this.panelCtrl.render();
  }

  onFillColorChange(index) {
    return newColor => {
      this.panel.thresholds[index].fillColor = newColor;
      this.render();
    };
  }

  onLineColorChange(index) {
    return newColor => {
      this.panel.thresholds[index].lineColor = newColor;
      this.render();
    };
  }

  onThresholdTypeChange(index) {
    if (this.panel.thresholds[index].colorMode === 'custom') {
      this.panel.thresholds[index].fillColor = tinycolor_default()(config.ZP.theme.palette.blue85).setAlpha(0.2).toRgbString();
      this.panel.thresholds[index].lineColor = tinycolor_default()(config.ZP.theme.palette.blue77).setAlpha(0.6).toRgbString();
    }

    this.panelCtrl.render();
  }

}
ThresholdFormCtrl.$inject = ["$scope"];
core_module.ZP.directive('graphThresholdForm', () => {
  return {
    restrict: 'E',
    templateUrl: 'public/app/plugins/panel/graph/thresholds_form.html',
    controller: ThresholdFormCtrl,
    bindToController: true,
    controllerAs: 'ctrl',
    scope: {
      panelCtrl: '='
    }
  };
});
;
function time_regions_form_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class TimeRegionFormCtrl {
  constructor($scope) {
    this.$scope = $scope;

    time_regions_form_defineProperty(this, "panelCtrl", void 0);

    time_regions_form_defineProperty(this, "panel", void 0);

    time_regions_form_defineProperty(this, "disabled", false);

    time_regions_form_defineProperty(this, "colorModes", void 0);

    this.$scope = $scope;
  }

  $onInit() {
    this.panel = this.panelCtrl.panel;
    const unbindDestroy = this.$scope.$on('$destroy', () => {
      this.panelCtrl.editingTimeRegions = false;
      this.panelCtrl.render();
      unbindDestroy();
    });
    this.colorModes = getColorModes();
    this.panelCtrl.editingTimeRegions = true;
  }

  render() {
    this.panelCtrl.render();
  }

  addTimeRegion() {
    this.panel.timeRegions.push({
      op: 'time',
      fromDayOfWeek: undefined,
      from: undefined,
      toDayOfWeek: undefined,
      to: undefined,
      colorMode: 'background6',
      fill: true,
      line: false,
      fillColor: 'rgba(234, 112, 112, 0.12)',
      lineColor: 'rgba(237, 46, 24, 0.60)'
    });
    this.panelCtrl.render();
  }

  removeTimeRegion(index) {
    this.panel.timeRegions.splice(index, 1);
    this.panelCtrl.render();
  }

  onFillColorChange(index) {
    return newColor => {
      this.panel.timeRegions[index].fillColor = newColor;
      this.render();
    };
  }

  onLineColorChange(index) {
    return newColor => {
      this.panel.timeRegions[index].lineColor = newColor;
      this.render();
    };
  }

}
TimeRegionFormCtrl.$inject = ["$scope"];
core_module.ZP.directive('graphTimeRegionForm', () => {
  return {
    restrict: 'E',
    templateUrl: 'public/app/plugins/panel/graph/time_regions_form.html',
    controller: TimeRegionFormCtrl,
    bindToController: true,
    controllerAs: 'ctrl',
    scope: {
      panelCtrl: '='
    }
  };
});
var alertDef = __webpack_require__("./public/app/features/alerting/state/alertDef.ts");
;
annotationTooltipDirective.$inject = ["$sanitize", "dashboardSrv", "contextSrv", "$compile"];





function annotationTooltipDirective($sanitize, dashboardSrv, contextSrv, $compile) {
  function sanitizeString(str) {
    try {
      return $sanitize(str);
    } catch (err) {
      console.log('Could not sanitize annotation string, html escaping instead');
      return (0,lodash.escape)(str);
    }
  }

  return {
    restrict: 'E',
    scope: {
      event: '=',
      onEdit: '&'
    },
    link: (scope, element) => {
      const event = scope.event;
      let title = event.title;
      let text = event.text;
      const dashboard = dashboardSrv.getCurrent();
      let tooltip = '<div class="graph-annotation">';
      let titleStateClass = '';

      if (event.alertId !== undefined && event.newState) {
        const stateModel = alertDef.Z.getStateDisplayModel(event.newState);
        titleStateClass = stateModel.stateClass;
        title = `<i class="${stateModel.iconClass}"></i> ${stateModel.text}`;
        text = alertDef.Z.getAlertAnnotationInfo(event);

        if (event.text) {
          text = text + '<br />' + event.text;
        }
      } else if (title) {
        text = title + '<br />' + ((0,lodash.isString)(text) ? text : '');
        title = '';
      }

      let header = `<div class="graph-annotation__header">`;

      if (event.login && event.avatarUrl) {
        header += `<div class="graph-annotation__user" bs-tooltip="'Created by ${event.login}'"><img src="${event.avatarUrl}" /></div>`;
      }

      header += `
          <span class="graph-annotation__title ${titleStateClass}">${sanitizeString(title)}</span>
          <span class="graph-annotation__time">${dashboard === null || dashboard === void 0 ? void 0 : dashboard.formatDate(event.min)}</span>
      `; 

      if (event.id && dashboard !== null && dashboard !== void 0 && dashboard.canEditAnnotations(event.dashboardId)) {
        header += `
          <span class="pointer graph-annotation__edit-icon" ng-click="onEdit()">
            <i class="fa fa-pencil-square"></i>
          </span>
        `;
      }

      header += `</div>`;
      tooltip += header;
      tooltip += '<div class="graph-annotation__body">';

      if (text) {
        tooltip += '<div ng-non-bindable>' + sanitizeString(text.replace(/\n/g, '<br>')) + '</div>';
      }

      const tags = event.tags;

      if (tags && tags.length) {
        scope.tags = tags;
        tooltip += '<span class="label label-tag small" ng-repeat="tag in tags" tag-color-from-name="tag">{{tag}}</span><br/>';
      }

      tooltip += '</div>';
      tooltip += '</div>';
      const $tooltip = jquery_exposed_default()(tooltip);
      $tooltip.appendTo(element);
      $compile(element.contents())(scope);
    }
  };
}
core_module.ZP.directive('annotationTooltip', annotationTooltipDirective);
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
var api = __webpack_require__("./public/app/features/annotations/api.ts");
var DashboardQueryRunner = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
;
function event_editor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class EventEditorCtrl {

  constructor() {
    event_editor_defineProperty(this, "panelCtrl", void 0);

    event_editor_defineProperty(this, "event", void 0);

    event_editor_defineProperty(this, "timeRange", void 0);

    event_editor_defineProperty(this, "form", void 0);

    event_editor_defineProperty(this, "close", void 0);

    event_editor_defineProperty(this, "timeFormated", void 0);
  }

  $onInit() {
    this.event.panelId = this.panelCtrl.panel.id; 

    this.event.dashboardId = this.panelCtrl.dashboard.id; 

    this.event.time = tryEpochToMoment(this.event.time);

    if (this.event.isRegion) {
      this.event.timeEnd = tryEpochToMoment(this.event.timeEnd);
    }

    this.timeFormated = this.panelCtrl.dashboard.formatDate(this.event.time);
  }

  canDelete() {
    if (context_srv.Vt.accessControlEnabled()) {
      var _this$panelCtrl$dashb2;

      if (this.event.source.type === 'dashboard') {
        var _this$panelCtrl$dashb;

        return !!((_this$panelCtrl$dashb = this.panelCtrl.dashboard.meta.annotationsPermissions) !== null && _this$panelCtrl$dashb !== void 0 && _this$panelCtrl$dashb.dashboard.canDelete);
      }

      return !!((_this$panelCtrl$dashb2 = this.panelCtrl.dashboard.meta.annotationsPermissions) !== null && _this$panelCtrl$dashb2 !== void 0 && _this$panelCtrl$dashb2.organization.canDelete);
    }

    return true;
  }

  async save() {
    if (!this.form.$valid) {
      return;
    }

    const saveModel = (0,lodash.cloneDeep)(this.event);
    saveModel.time = saveModel.time.valueOf();
    saveModel.timeEnd = 0;

    if (saveModel.isRegion) {
      saveModel.timeEnd = this.event.timeEnd.valueOf();

      if (saveModel.timeEnd < saveModel.time) {
        console.log('invalid time');
        return;
      }
    }

    let crudFunction = api.xD;

    if (saveModel.id) {
      crudFunction = api._E;
    }

    try {
      await crudFunction(saveModel);
    } catch (err) {
      console.log(err);
    } finally {
      this.close();
      (0,DashboardQueryRunner.kt)().run({
        dashboard: this.panelCtrl.dashboard,
        range: this.panelCtrl.range
      });
    }
  }

  async delete() {
    try {
      await (0,api.Dl)(this.event);
    } catch (err) {
      console.log(err);
    } finally {
      this.close();
      (0,DashboardQueryRunner.kt)().run({
        dashboard: this.panelCtrl.dashboard,
        range: this.panelCtrl.range
      });
    }
  }

}
EventEditorCtrl.$inject = [];

function tryEpochToMoment(timestamp) {
  if (timestamp && (0,lodash.isNumber)(timestamp)) {
    const epoch = Number(timestamp);
    return (0,grafana_data_src.dateTime)(epoch);
  } else {
    return timestamp;
  }
}

function eventEditor() {
  return {
    restrict: 'E',
    controller: EventEditorCtrl,
    bindToController: true,
    controllerAs: 'ctrl',
    templateUrl: 'public/app/features/annotations/partials/event_editor.html',
    scope: {
      panelCtrl: '=',
      event: '=',
      close: '&'
    }
  };
}
core_module.hF.directive('eventEditor', eventEditor);
var metrics_panel_ctrl = __webpack_require__("./public/app/angular/panel/metrics_panel_ctrl.ts");
var ThresholdMapper = __webpack_require__("./public/app/features/alerting/state/ThresholdMapper.ts");
var actions = __webpack_require__("./public/app/features/panel/state/actions.ts");
var store = __webpack_require__("./public/app/store/store.ts");
var loadSnapshotData = __webpack_require__("./public/app/features/dashboard/utils/loadSnapshotData.ts");
var utils = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/utils.ts");
var events = __webpack_require__("./public/app/types/events.ts");
;
function GraphContextMenuCtrl_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class GraphContextMenuCtrl {
  constructor($scope) {
    GraphContextMenuCtrl_defineProperty(this, "source", void 0);

    GraphContextMenuCtrl_defineProperty(this, "scope", void 0);

    GraphContextMenuCtrl_defineProperty(this, "menuItemsSupplier", void 0);

    GraphContextMenuCtrl_defineProperty(this, "scrollContextElement", null);

    GraphContextMenuCtrl_defineProperty(this, "position", {
      x: 0,
      y: 0
    });

    GraphContextMenuCtrl_defineProperty(this, "isVisible", void 0);

    GraphContextMenuCtrl_defineProperty(this, "onClose", () => {
      if (this.scrollContextElement) {
        this.scrollContextElement.removeEventListener('scroll', this.onClose);
      }

      this.scope.$apply(() => {
        this.isVisible = false;
      });
    });

    GraphContextMenuCtrl_defineProperty(this, "toggleMenu", event => {
      this.isVisible = !this.isVisible;

      if (this.isVisible && this.scrollContextElement) {
        this.scrollContextElement.addEventListener('scroll', this.onClose);
      }

      if (this.source) {
        this.position = {
          x: this.source.pageX,
          y: this.source.pageY
        };
      } else {
        this.position = {
          x: event ? event.pageX : 0,
          y: event ? event.pageY : 0
        };
      }
    });

    GraphContextMenuCtrl_defineProperty(this, "setScrollContextElement", el => {
      this.scrollContextElement = el;
    });

    GraphContextMenuCtrl_defineProperty(this, "setSource", source => {
      this.source = source;
    });

    GraphContextMenuCtrl_defineProperty(this, "getSource", () => {
      return this.source;
    });

    GraphContextMenuCtrl_defineProperty(this, "setMenuItemsSupplier", menuItemsSupplier => {
      this.menuItemsSupplier = menuItemsSupplier;
    });

    this.isVisible = false;
    this.scope = $scope;
  }

}
;
const graphPanelMigrationHandler = panel => {
  var _panel$fieldConfig;

  const fieldConfig = (_panel$fieldConfig = panel.fieldConfig) !== null && _panel$fieldConfig !== void 0 ? _panel$fieldConfig : {
    defaults: {},
    overrides: []
  };
  const options = panel.options || {}; 

  if (options.dataLinks) {
    fieldConfig.defaults.links = options.dataLinks;
    delete options.dataLinks;
  } 


  panel.options = options;
  panel.fieldConfig = fieldConfig;
  return options;
};
;
function axes_editor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class AxesEditorCtrl {
  constructor($scope) {
    this.$scope = $scope;

    axes_editor_defineProperty(this, "panel", void 0);

    axes_editor_defineProperty(this, "panelCtrl", void 0);

    axes_editor_defineProperty(this, "logScales", void 0);

    axes_editor_defineProperty(this, "xAxisModes", void 0);

    axes_editor_defineProperty(this, "xAxisStatOptions", void 0);

    axes_editor_defineProperty(this, "xNameSegment", void 0);

    axes_editor_defineProperty(this, "selectors", void 0);

    this.$scope = $scope;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
    this.$scope.ctrl = this;
    this.logScales = {
      linear: 1,
      'log (base 2)': 2,
      'log (base 10)': 10,
      'log (base 32)': 32,
      'log (base 1024)': 1024
    };
    this.xAxisModes = {
      Time: 'time',
      Series: 'series',
      Histogram: 'histogram' 

    };
    this.xAxisStatOptions = [{
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
      text: 'Count',
      value: 'count'
    }, {
      text: 'Current',
      value: 'current'
    }];

    if (this.panel.xaxis.mode === 'custom') {
      if (!this.panel.xaxis.name) {
        this.panel.xaxis.name = 'specify field';
      }
    }

    this.selectors = grafana_e2e_selectors_src.wl.components.Panels.Visualization.Graph.VisualizationTab;
  }

  setUnitFormat(axis) {
    return unit => {
      axis.format = unit; 

      if (this.panel.fieldConfig.defaults.unit) {
        this.panel.fieldConfig.defaults.unit = undefined;
        this.panelCtrl.refresh();
      } else {
        this.panelCtrl.render();
      }
    };
  }

  render() {
    this.panelCtrl.render();
  }

  xAxisModeChanged() {
    this.panelCtrl.processor.setPanelDefaultsForNewXAxisMode();
    this.panelCtrl.onDataFramesReceived(this.panelCtrl.dataList);
  }

  xAxisValueChanged() {
    this.panelCtrl.onDataFramesReceived(this.panelCtrl.dataList);
  }

}
AxesEditorCtrl.$inject = ["$scope"];

function axesEditorComponent() {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'public/app/plugins/panel/graph/axes_editor.html',
    controller: AxesEditorCtrl
  };
}
var data_processor = __webpack_require__("./public/app/plugins/panel/graph/data_processor.ts");
;
const template = `
<div class="graph-panel" ng-class="{'graph-panel--legend-right': ctrl.panel.legend.rightSide}">
  <div class="graph-panel__chart" grafana-graph ng-dblclick="ctrl.zoomOut()">
  </div>

  <div class="graph-legend">
    <div class="graph-legend-content" graph-legend></div>
  </div>
  <div ng-if="ctrl.contextMenuCtrl.isVisible">
    <graph-context-menu
      itemsGroup="ctrl.contextMenuCtrl.menuItemsSupplier()"
      on-close="ctrl.onContextMenuClose"
      getContextMenuSource="ctrl.contextMenuCtrl.getSource"
      timeZone="ctrl.getTimeZone()"
      x="ctrl.contextMenuCtrl.position.x"
      y="ctrl.contextMenuCtrl.position.y"
    ></graph-context-menu>
  </div>
</div>
`;
 const graph_template = (template);
;
function module_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























class GraphCtrl extends metrics_panel_ctrl.k {
  constructor($scope, $injector) {
    super($scope, $injector);

    module_defineProperty(this, "renderError", false);

    module_defineProperty(this, "hiddenSeries", {});

    module_defineProperty(this, "hiddenSeriesTainted", false);

    module_defineProperty(this, "seriesList", []);

    module_defineProperty(this, "dataList", []);

    module_defineProperty(this, "annotations", []);

    module_defineProperty(this, "alertState", void 0);

    module_defineProperty(this, "dataWarning", void 0);

    module_defineProperty(this, "colors", []);

    module_defineProperty(this, "subTabIndex", 0);

    module_defineProperty(this, "processor", void 0);

    module_defineProperty(this, "contextMenuCtrl", void 0);

    module_defineProperty(this, "panelDefaults", {
      datasource: null,
      renderer: 'flot',
      yaxes: [{
        label: null,
        show: true,
        logBase: 1,
        min: null,
        max: null,
        format: 'short'
      }, {
        label: null,
        show: true,
        logBase: 1,
        min: null,
        max: null,
        format: 'short'
      }],
      xaxis: {
        show: true,
        mode: 'time',
        name: null,
        values: [],
        buckets: null
      },
      yaxis: {
        align: false,
        alignLevel: null
      },
      lines: true,
      fill: 1,
      fillGradient: 0,
      linewidth: 1,
      dashes: false,
      hiddenSeries: false,
      dashLength: 10,
      spaceLength: 10,
      points: false,
      pointradius: 2,
      bars: false,
      stack: false,
      percentage: false,
      legend: {
        show: true,
        values: false,
        min: false,
        max: false,
        current: false,
        total: false,
        avg: false
      },
      nullPointMode: 'null',
      steppedLine: false,
      tooltip: {
        value_type: 'individual',
        shared: true,
        sort: 0
      },
      timeFrom: null,
      timeShift: null,
      targets: [{}],
      aliasColors: {},
      seriesOverrides: [],
      thresholds: [],
      timeRegions: [],
      options: {
        alertThreshold: true
      }
    });

    module_defineProperty(this, "onColorChange", (series, color) => {
      series.setColor((0,grafana_data_src.getColorForTheme)(color, config.ZP.theme));
      this.panel.aliasColors[series.alias] = color;
      this.render();
    });

    module_defineProperty(this, "onToggleSeries", hiddenSeries => {
      this.hiddenSeriesTainted = true;
      this.hiddenSeries = hiddenSeries;
      this.render();
    });

    module_defineProperty(this, "onToggleSort", (sortBy, sortDesc) => {
      this.panel.legend.sort = sortBy;
      this.panel.legend.sortDesc = sortDesc;
      this.render();
    });

    module_defineProperty(this, "onToggleAxis", info => {
      let override = (0,lodash.find)(this.panel.seriesOverrides, {
        alias: info.alias
      });

      if (!override) {
        override = {
          alias: info.alias
        };
        this.panel.seriesOverrides.push(override);
      }

      override.yaxis = info.yaxis;
      this.render();
    });

    module_defineProperty(this, "onContextMenuClose", () => {
      this.contextMenuCtrl.toggleMenu();
    });

    module_defineProperty(this, "getTimeZone", () => this.dashboard.getTimezone());

    module_defineProperty(this, "getDataFrameByRefId", refId => {
      return this.dataList.filter(dataFrame => dataFrame.refId === refId)[0];
    });

    (0,lodash.defaults)(this.panel, this.panelDefaults);
    (0,lodash.defaults)(this.panel.tooltip, this.panelDefaults.tooltip);
    (0,lodash.defaults)(this.panel.legend, this.panelDefaults.legend);
    (0,lodash.defaults)(this.panel.xaxis, this.panelDefaults.xaxis);
    (0,lodash.defaults)(this.panel.options, this.panelDefaults.options);
    this.useDataFrames = true;
    this.processor = new data_processor.$(this.panel);
    this.contextMenuCtrl = new GraphContextMenuCtrl($scope);
    this.events.on(grafana_data_src.PanelEvents.render, this.onRender.bind(this));
    this.events.on(grafana_data_src.PanelEvents.dataFramesReceived, this.onDataFramesReceived.bind(this));
    this.events.on(grafana_data_src.PanelEvents.dataSnapshotLoad, this.onDataSnapshotLoad.bind(this));
    this.events.on(grafana_data_src.PanelEvents.editModeInitialized, this.onInitEditMode.bind(this));
    this.events.on(grafana_data_src.PanelEvents.initPanelActions, this.onInitPanelActions.bind(this)); 

    const fieldConfigUnit = this.panel.fieldConfig.defaults.unit;

    if (fieldConfigUnit) {
      this.panel.yaxes[0].format = fieldConfigUnit;
    }
  }

  onInitEditMode() {
    this.addEditorTab('Display', 'public/app/plugins/panel/graph/tab_display.html');
    this.addEditorTab('Series overrides', 'public/app/plugins/panel/graph/tab_series_overrides.html');
    this.addEditorTab('Axes', axesEditorComponent);
    this.addEditorTab('Legend', 'public/app/plugins/panel/graph/tab_legend.html');
    this.addEditorTab('Thresholds', 'public/app/plugins/panel/graph/tab_thresholds.html');
    this.addEditorTab('Time regions', 'public/app/plugins/panel/graph/tab_time_regions.html');
    this.subTabIndex = 0;
    this.hiddenSeriesTainted = false;
  }

  onInitPanelActions(actions) {
    actions.push({
      text: 'Toggle legend',
      click: 'ctrl.toggleLegend()',
      shortcut: 'p l'
    });
  }

  zoomOut(evt) {
    core.h$.publish(new events.p8({
      scale: 2
    }));
  }

  onDataSnapshotLoad(snapshotData) {
    const {
      series,
      annotations
    } = (0,loadSnapshotData.y)(this.panel, this.dashboard);
    this.panelData.annotations = annotations;
    this.onDataFramesReceived(series);
  }

  onDataFramesReceived(data) {
    var _annotations;

    this.dataList = data;
    this.seriesList = this.processor.getSeriesList({
      dataList: this.dataList,
      range: this.range
    });
    this.dataWarning = this.getDataWarning();
    this.alertState = undefined;
    this.seriesList.alertState = undefined;

    if (this.panelData.alertState) {
      this.alertState = this.panelData.alertState;
      this.seriesList.alertState = this.alertState.state;
    }

    this.annotations = [];

    if ((_annotations = this.panelData.annotations) !== null && _annotations !== void 0 && _annotations.length) {
      this.annotations = (0,utils.em)(this.panelData.annotations);
    }

    this.loading = false;
    this.render(this.seriesList);
  }

  getDataWarning() {
    const datapointsCount = this.seriesList.reduce((prev, series) => {
      return prev + series.datapoints.length;
    }, 0);

    if (datapointsCount === 0) {
      if (this.dataList) {
        for (const frame of this.dataList) {
          var _frame$fields;

          if (frame.length && (_frame$fields = frame.fields) !== null && _frame$fields !== void 0 && _frame$fields.length) {
            return {
              title: 'Unable to graph data',
              tip: 'Data exists, but is not timeseries',
              actionText: 'Switch to table view',
              action: () => {
                (0,store.WI)((0,actions.Kc)({
                  panel: this.panel,
                  pluginId: 'table'
                }));
              }
            };
          }
        }
      }

      return {
        title: 'No data',
        tip: 'No data returned from query'
      };
    } 


    for (const series of this.seriesList) {
      if (!series.isOutsideRange) {
        return undefined;
      }
    } 


    const dataWarning = {
      title: 'Data outside time range',
      tip: 'Can be caused by timezone mismatch or missing time filter in query'
    };
    const range = getDataTimeRange(this.dataList);

    if (range) {
      dataWarning.actionText = 'Zoom to data';

      dataWarning.action = () => {
        src.locationService.partial({
          from: range.from,
          to: range.to
        });
      };
    }

    return dataWarning;
  }

  onRender() {
    if (!this.seriesList) {
      return;
    }

    ThresholdMapper.X.alertToGraphThresholds(this.panel);

    for (const series of this.seriesList) {
      series.applySeriesOverrides(this.panel.seriesOverrides); 

      if (series.unit) {
        this.panel.yaxes[series.yaxis - 1].format = series.unit;
      }

      if (this.hiddenSeriesTainted === false && series.hiddenSeries === true) {
        this.hiddenSeries[series.alias] = true;
      }
    }
  }

  addSeriesOverride(override) {
    this.panel.seriesOverrides.push(override || {});
  }

  removeSeriesOverride(override) {
    this.panel.seriesOverrides = (0,lodash.without)(this.panel.seriesOverrides, override);
    this.render();
  }

  toggleLegend() {
    this.panel.legend.show = !this.panel.legend.show;
    this.render();
  }

  legendValuesOptionChanged() {
    const legend = this.panel.legend;
    legend.values = legend.min || legend.max || legend.avg || legend.current || legend.total;
    this.render();
  }

  migrateToReact() {
    this.onPluginTypeChange(config.ZP.panels.timeseries);
  }

}
GraphCtrl.$inject = ["$scope", "$injector"];

module_defineProperty(GraphCtrl, "template", graph_template);

const module_plugin = new grafana_data_src.PanelPlugin(null).useFieldConfig({
  disableStandardOptions: [grafana_data_src.FieldConfigProperty.NoValue, grafana_data_src.FieldConfigProperty.Thresholds, grafana_data_src.FieldConfigProperty.Max, grafana_data_src.FieldConfigProperty.Min, grafana_data_src.FieldConfigProperty.Decimals, grafana_data_src.FieldConfigProperty.Color, grafana_data_src.FieldConfigProperty.Mappings]
}).setDataSupport({
  annotations: true,
  alertStates: true
}).setMigrationHandler(graphPanelMigrationHandler); 

module_plugin.angularPanelCtrl = GraphCtrl;

 })

}]);