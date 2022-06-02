"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[9101],{

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

 "./public/app/plugins/panel/heatmap/module.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "PanelCtrl": () => ( HeatmapCtrl)
});

var d3 = __webpack_require__("./.yarn/cache/d3-npm-5.15.0-0c7696026f-7342d82e55.zip/node_modules/d3/index.js");
var jquery_exposed = __webpack_require__("./.yarn/cache/jquery-npm-3.6.0-ca7872bdbb-8fd5fef4aa.zip/node_modules/jquery/dist/jquery-exposed.js");
var jquery_exposed_default = __webpack_require__.n(jquery_exposed);
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var core_module = __webpack_require__("./public/app/angular/core_module.ts");
var config = __webpack_require__("./public/app/core/config.ts");
var core = __webpack_require__("./public/app/core/core.ts");
var utils_ticks = __webpack_require__("./public/app/core/utils/ticks.ts");
var d3_scale_chromatic_src = __webpack_require__("./.yarn/cache/d3-scale-chromatic-npm-1.5.0-4dfce2812a-3bff7717f6.zip/node_modules/d3-scale-chromatic/src/index.js");
;


function getColorScale(colorScheme, lightTheme, maxValue) {
  let minValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  const colorInterpolator = d3_scale_chromatic_src[colorScheme.value];
  const colorScaleInverted = colorScheme.invert === 'always' || colorScheme.invert === (lightTheme ? 'light' : 'dark');
  const start = colorScaleInverted ? maxValue : minValue;
  const end = colorScaleInverted ? minValue : maxValue;
  return d3.scaleSequential(colorInterpolator).domain([start, end]);
}
function getOpacityScale(options, maxValue) {
  let minValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  let legendOpacityScale;

  if (options.colorScale === 'linear') {
    legendOpacityScale = d3.scaleLinear().domain([minValue, maxValue]).range([0, 1]);
  } else if (options.colorScale === 'sqrt') {
    legendOpacityScale = d3.scalePow().exponent(options.exponent).domain([minValue, maxValue]).range([0, 1]);
  }

  return legendOpacityScale;
}
;









const LEGEND_HEIGHT_PX = 6;
const LEGEND_WIDTH_PX = 100;
const LEGEND_TICK_SIZE = 0;
const LEGEND_VALUE_MARGIN = 0;
const LEGEND_PADDING_LEFT = 10;
const LEGEND_SEGMENT_WIDTH = 10;

core_module.ZP.directive('colorLegend', () => {
  return {
    restrict: 'E',
    template: '<div class="heatmap-color-legend"><svg width="16.5rem" height="24px"></svg></div>',
    link: (scope, elem, attrs) => {
      const ctrl = scope.ctrl;
      const panel = scope.ctrl.panel;
      render();
      ctrl.events.on(src.PanelEvents.render, () => {
        render();
      });

      function render() {
        var _legendElem$outerWidt;

        const legendElem = jquery_exposed_default()(elem).find('svg');
        const legendWidth = Math.floor((_legendElem$outerWidt = legendElem.outerWidth()) !== null && _legendElem$outerWidt !== void 0 ? _legendElem$outerWidt : 10);

        if (panel.color.mode === 'spectrum') {
          const colorScheme = (0,lodash.find)(ctrl.colorSchemes, {
            value: panel.color.colorScheme
          });
          const colorScale = getColorScale(colorScheme, core.Vt.user.lightTheme, legendWidth);
          drawSimpleColorLegend(elem, colorScale);
        } else if (panel.color.mode === 'opacity') {
          const colorOptions = panel.color;
          drawSimpleOpacityLegend(elem, colorOptions);
        }
      }
    }
  };
});

core_module.ZP.directive('heatmapLegend', () => {
  return {
    restrict: 'E',
    template: `<div class="heatmap-color-legend"><svg width="${LEGEND_WIDTH_PX}px" height="${LEGEND_HEIGHT_PX}px"></svg></div>`,
    link: (scope, elem, attrs) => {
      const ctrl = scope.ctrl;
      const panel = scope.ctrl.panel;
      render();
      ctrl.events.on(src.PanelEvents.render, () => {
        render();
      });

      function render() {
        clearLegend(elem);

        if (!(0,lodash.isEmpty)(ctrl.data) && !(0,lodash.isEmpty)(ctrl.data.cards)) {
          const cardStats = ctrl.data.cardStats;
          const rangeFrom = (0,lodash.isNil)(panel.color.min) ? Math.max(cardStats.min, 0) : panel.color.min;
          const rangeTo = (0,lodash.isNil)(panel.color.max) ? cardStats.max : panel.color.max;
          const maxValue = cardStats.max;
          const minValue = cardStats.min;

          if (panel.color.mode === 'spectrum') {
            const colorScheme = (0,lodash.find)(ctrl.colorSchemes, {
              value: panel.color.colorScheme
            });
            drawColorLegend(elem, colorScheme, rangeFrom, rangeTo, maxValue, minValue);
          } else if (panel.color.mode === 'opacity') {
            const colorOptions = panel.color;
            drawOpacityLegend(elem, colorOptions, rangeFrom, rangeTo, maxValue, minValue);
          }
        }
      }
    }
  };
});

function drawColorLegend(elem, colorScheme, rangeFrom, rangeTo, maxValue, minValue) {
  const legendElem = jquery_exposed_default()(elem).find('svg');
  const legendDomElement = legendElem.get(0);

  if (legendDomElement) {
    var _legendElem$outerWidt2;

    const legend = d3.select(legendDomElement);
    clearLegend(elem);
    const legendWidth = Math.floor((_legendElem$outerWidt2 = legendElem.outerWidth()) !== null && _legendElem$outerWidt2 !== void 0 ? _legendElem$outerWidt2 : 10) - 30;
    const legendHeight = legendElem.attr('height');
    const rangeStep = (rangeTo - rangeFrom) / legendWidth * LEGEND_SEGMENT_WIDTH;
    const widthFactor = legendWidth / (rangeTo - rangeFrom);
    const valuesRange = d3.range(rangeFrom, rangeTo, rangeStep);
    const colorScale = getColorScale(colorScheme, core.Vt.user.lightTheme, rangeTo, rangeFrom);
    legend.append('g').attr('class', 'legend-color-bar').attr('transform', 'translate(' + LEGEND_PADDING_LEFT + ',0)').selectAll('.heatmap-color-legend-rect').data(valuesRange).enter().append('rect').attr('x', d => Math.round((d - rangeFrom) * widthFactor)).attr('y', 0).attr('width', Math.round(rangeStep * widthFactor + 1)) 
    .attr('height', legendHeight).attr('stroke-width', 0).attr('fill', d => colorScale(d));
    drawLegendValues(elem, rangeFrom, rangeTo, maxValue, minValue, legendWidth, valuesRange);
  }
}

function drawOpacityLegend(elem, options, rangeFrom, rangeTo, maxValue, minValue) {
  const legendElem = jquery_exposed_default()(elem).find('svg');
  const legendDomElement = legendElem.get(0);

  if (legendDomElement) {
    var _legendElem$outerWidt3;

    const legend = d3.select(legendDomElement);
    clearLegend(elem);
    const legendWidth = Math.floor((_legendElem$outerWidt3 = legendElem.outerWidth()) !== null && _legendElem$outerWidt3 !== void 0 ? _legendElem$outerWidt3 : 30) - 30;
    const legendHeight = legendElem.attr('height');
    const rangeStep = (rangeTo - rangeFrom) / legendWidth * LEGEND_SEGMENT_WIDTH;
    const widthFactor = legendWidth / (rangeTo - rangeFrom);
    const valuesRange = d3.range(rangeFrom, rangeTo, rangeStep);
    const opacityScale = getOpacityScale(options, rangeTo, rangeFrom);
    legend.append('g').attr('class', 'legend-color-bar').attr('transform', 'translate(' + LEGEND_PADDING_LEFT + ',0)').selectAll('.heatmap-opacity-legend-rect').data(valuesRange).enter().append('rect').attr('x', d => Math.round((d - rangeFrom) * widthFactor)).attr('y', 0).attr('width', Math.round(rangeStep * widthFactor)).attr('height', legendHeight).attr('stroke-width', 0).attr('fill', options.cardColor).style('opacity', d => opacityScale(d));
    drawLegendValues(elem, rangeFrom, rangeTo, maxValue, minValue, legendWidth, valuesRange);
  }
}

function drawLegendValues(elem, rangeFrom, rangeTo, maxValue, minValue, legendWidth, valuesRange) {
  const legendElem = jquery_exposed_default()(elem).find('svg');
  const legendDomElement = legendElem.get(0);

  if (legendDomElement) {
    const legend = d3.select(legendDomElement);

    if (legendWidth <= 0 || legendDomElement.childNodes.length === 0) {
      return;
    }

    const legendValueScale = d3.scaleLinear().domain([rangeFrom, rangeTo]).range([0, legendWidth]);
    const ticks = buildLegendTicks(rangeFrom, rangeTo, maxValue, minValue);
    const xAxis = d3.axisBottom(legendValueScale).tickValues(ticks).tickSize(LEGEND_TICK_SIZE);
    const colorRect = legendElem.find(':first-child');
    const posY = getSvgElemHeight(legendElem) + LEGEND_VALUE_MARGIN;
    const posX = getSvgElemX(colorRect) + LEGEND_PADDING_LEFT;
    d3.select(legendDomElement).append('g').attr('class', 'axis').attr('transform', 'translate(' + posX + ',' + posY + ')').call(xAxis);
    legend.select('.axis').select('.domain').remove();
  }
}

function drawSimpleColorLegend(elem, colorScale) {
  var _legendElem$outerWidt4;

  const legendElem = jquery_exposed_default()(elem).find('svg');
  clearLegend(elem);
  const legendWidth = Math.floor((_legendElem$outerWidt4 = legendElem.outerWidth()) !== null && _legendElem$outerWidt4 !== void 0 ? _legendElem$outerWidt4 : 30);
  const legendHeight = legendElem.attr('height');

  if (legendWidth) {
    const valuesNumber = Math.floor(legendWidth / 2);
    const rangeStep = Math.floor(legendWidth / valuesNumber);
    const valuesRange = d3.range(0, legendWidth, rangeStep);
    const legendDomElement = legendElem.get(0);

    if (legendDomElement) {
      const legend = d3.select(legendDomElement);
      const legendRects = legend.selectAll('.heatmap-color-legend-rect').data(valuesRange);
      legendRects.enter().append('rect').attr('x', d => d).attr('y', 0).attr('width', rangeStep + 1) 
      .attr('height', legendHeight).attr('stroke-width', 0).attr('fill', d => colorScale(d));
    }
  }
}

function drawSimpleOpacityLegend(elem, options) {
  const legendElem = jquery_exposed_default()(elem).find('svg');
  const legendDomElement = legendElem.get(0);

  if (legendDomElement) {
    var _legendElem$outerWidt5;

    clearLegend(elem);
    const legend = d3.select(legendDomElement);
    const legendWidth = Math.floor((_legendElem$outerWidt5 = legendElem.outerWidth()) !== null && _legendElem$outerWidt5 !== void 0 ? _legendElem$outerWidt5 : 30);
    const legendHeight = legendElem.attr('height');

    if (legendWidth) {
      let legendOpacityScale;

      if (options.colorScale === 'linear') {
        legendOpacityScale = d3.scaleLinear().domain([0, legendWidth]).range([0, 1]);
      } else if (options.colorScale === 'sqrt') {
        legendOpacityScale = d3.scalePow().exponent(options.exponent).domain([0, legendWidth]).range([0, 1]);
      }

      const rangeStep = 10;
      const valuesRange = d3.range(0, legendWidth, rangeStep);
      const legendRects = legend.selectAll('.heatmap-opacity-legend-rect').data(valuesRange);
      legendRects.enter().append('rect').attr('x', d => d).attr('y', 0).attr('width', rangeStep).attr('height', legendHeight).attr('stroke-width', 0).attr('fill', (0,src.getColorForTheme)(options.cardColor, config.vc.theme)).style('opacity', d => legendOpacityScale(d));
    }
  }
}

function clearLegend(elem) {
  const legendElem = jquery_exposed_default()(elem).find('svg');
  legendElem.empty();
}

function getSvgElemX(elem) {
  const svgElem = elem.get(0);

  if (svgElem && svgElem.x && svgElem.x.baseVal) {
    return svgElem.x.baseVal.value;
  } else {
    return 0;
  }
}

function getSvgElemHeight(elem) {
  const svgElem = elem.get(0);

  if (svgElem && svgElem.height && svgElem.height.baseVal) {
    return svgElem.height.baseVal.value;
  } else {
    return 0;
  }
}

function buildLegendTicks(rangeFrom, rangeTo, maxValue, minValue) {
  const range = rangeTo - rangeFrom;
  const tickStepSize = (0,utils_ticks.tickStep)(rangeFrom, rangeTo, 3);
  const ticksNum = Math.ceil(range / tickStepSize);
  const firstTick = getFirstCloseTick(rangeFrom, tickStepSize);
  let ticks = [];

  for (let i = 0; i < ticksNum; i++) {
    const current = firstTick + tickStepSize * i; 

    if (isValueCloseTo(minValue, current, tickStepSize)) {
      ticks.push(minValue);
      continue;
    } else if (minValue < current) {
      ticks.push(minValue);
    }

    if (isValueCloseTo(maxValue, current, tickStepSize)) {
      ticks.push(maxValue);
      continue;
    } else if (maxValue < current) {
      ticks.push(maxValue);
    }

    ticks.push(current);
  }

  if (!isValueCloseTo(maxValue, rangeTo, tickStepSize)) {
    ticks.push(maxValue);
  }

  ticks.push(rangeTo);
  ticks = (0,lodash.sortBy)((0,lodash.uniq)(ticks));
  return ticks;
}

function isValueCloseTo(val, valueTo, step) {
  const diff = Math.abs(val - valueTo);
  return diff < step * 0.3;
}

function getFirstCloseTick(minValue, step) {
  if (minValue < 0) {
    return Math.floor(minValue / step) * step;
  }

  return 0;
}
var app_events = __webpack_require__("./public/app/core/app_events.ts");
var kbn = __webpack_require__("./public/app/core/utils/kbn.ts");
var runRequest = __webpack_require__("./public/app/features/query/state/runRequest.ts");
var sdk = __webpack_require__("./public/app/plugins/sdk.ts");
var events = __webpack_require__("./public/app/types/events.ts");
var data_processor = __webpack_require__("./public/app/plugins/panel/graph/data_processor.ts");
;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AxesEditorCtrl {
  constructor($scope, uiSegmentSrv) {
    _defineProperty(this, "panel", void 0);

    _defineProperty(this, "panelCtrl", void 0);

    _defineProperty(this, "logScales", void 0);

    _defineProperty(this, "dataFormats", void 0);

    _defineProperty(this, "yBucketBoundModes", void 0);

    _defineProperty(this, "setUnitFormat", unit => {
      this.panel.yAxis.format = unit;
      this.panelCtrl.render();
    });

    $scope.editor = this;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
    this.logScales = {
      linear: 1,
      'log (base 2)': 2,
      'log (base 10)': 10,
      'log (base 32)': 32,
      'log (base 1024)': 1024
    };
    this.dataFormats = {
      'Time series': 'timeseries',
      'Time series buckets': 'tsbuckets'
    };
    this.yBucketBoundModes = {
      Auto: 'auto',
      Upper: 'upper',
      Lower: 'lower',
      Middle: 'middle'
    };
  }

}
AxesEditorCtrl.$inject = ["$scope", "uiSegmentSrv"];

function axesEditor() {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'public/app/plugins/panel/heatmap/partials/axes_editor.html',
    controller: AxesEditorCtrl
  };
}
;
function display_editor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class HeatmapDisplayEditorCtrl {
  constructor($scope) {
    display_editor_defineProperty(this, "panel", void 0);

    display_editor_defineProperty(this, "panelCtrl", void 0);

    $scope.editor = this;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
  }

}
HeatmapDisplayEditorCtrl.$inject = ["$scope"];

function heatmapDisplayEditor() {
  'use strict';

  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'public/app/plugins/panel/heatmap/partials/display_editor.html',
    controller: HeatmapDisplayEditorCtrl
  };
}
;

const VALUE_INDEX = 0;
const TIME_INDEX = 1;

function histogramToHeatmap(seriesList) {
  const heatmap = {};

  for (let i = 0; i < seriesList.length; i++) {
    const series = seriesList[i];
    const bound = i;

    if (isNaN(bound)) {
      return heatmap;
    }

    for (const point of series.datapoints) {
      const count = point[VALUE_INDEX];
      const time = point[TIME_INDEX];

      if (!(0,lodash.isNumber)(count)) {
        continue;
      }

      let bucket = heatmap[time];

      if (!bucket) {
        bucket = heatmap[time] = {
          x: time,
          buckets: {}
        };
      }

      bucket.buckets[bound] = {
        y: bound,
        count: count,
        bounds: {
          top: null,
          bottom: bound
        },
        values: [],
        points: []
      };
    }
  }

  return heatmap;
}


function sortSeriesByLabel(s1, s2) {
  let label1, label2;

  try {
    label1 = parseHistogramLabel(s1.label);
    label2 = parseHistogramLabel(s2.label);
  } catch (err) {
    console.error(err.message || err);
    return 0;
  }

  if (label1 > label2) {
    return 1;
  }

  if (label1 < label2) {
    return -1;
  }

  return 0;
}

function parseHistogramLabel(label) {
  if (label === '+Inf' || label === 'inf') {
    return +Infinity;
  }

  const value = Number(label);

  if (isNaN(value)) {
    throw new Error(`Error parsing histogram label: ${label} is not a number`);
  }

  return value;
}


function convertToCards(buckets) {
  let hideZero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let min = 0,
      max = 0;
  const cards = [];
  (0,lodash.forEach)(buckets, xBucket => {
    (0,lodash.forEach)(xBucket.buckets, yBucket => {
      const card = {
        x: xBucket.x,
        y: yBucket.y,
        yBounds: yBucket.bounds,
        values: yBucket.values,
        count: yBucket.count
      };

      if (!hideZero || card.count !== 0) {
        cards.push(card);
      }

      if (cards.length === 1) {
        min = yBucket.count;
        max = yBucket.count;
      }

      min = yBucket.count < min ? yBucket.count : min;
      max = yBucket.count > max ? yBucket.count : max;
    });
  });
  const cardStats = {
    min,
    max
  };
  return {
    cards,
    cardStats
  };
}


function mergeZeroBuckets(buckets, minValue) {
  (0,lodash.forEach)(buckets, xBucket => {
    const yBuckets = xBucket.buckets;
    const emptyBucket = {
      bounds: {
        bottom: 0,
        top: 0
      },
      values: [],
      points: [],
      count: 0
    };
    const nullBucket = yBuckets[0] || emptyBucket;
    const minBucket = yBuckets[minValue] || emptyBucket;
    const newBucket = {
      y: 0,
      bounds: {
        bottom: minValue,
        top: minBucket.bounds.top || minValue
      },
      values: [],
      points: [],
      count: 0
    };
    newBucket.points = nullBucket.points.concat(minBucket.points);
    newBucket.values = nullBucket.values.concat(minBucket.values);
    newBucket.count = newBucket.values.length;

    if (newBucket.count === 0) {
      return;
    }

    delete yBuckets[minValue];
    yBuckets[0] = newBucket;
  });
  return buckets;
}


function convertToHeatMap(seriesList, yBucketSize, xBucketSize) {
  let logBase = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  const heatmap = {};

  for (const series of seriesList) {
    const datapoints = series.datapoints;
    const seriesName = series.label; 

    (0,lodash.forEach)(datapoints, point => {
      const bucketBound = getBucketBound(point[TIME_INDEX], xBucketSize);
      pushToXBuckets(heatmap, point, bucketBound, seriesName);
    });
  } 


  (0,lodash.forEach)(heatmap, xBucket => {
    if (logBase !== 1) {
      xBucket.buckets = convertToLogScaleValueBuckets(xBucket, yBucketSize, logBase);
    } else {
      xBucket.buckets = convertToValueBuckets(xBucket, yBucketSize);
    }
  });
  return heatmap;
}

function pushToXBuckets(buckets, point, bucketNum, seriesName) {
  const value = point[VALUE_INDEX];

  if (value === null || value === undefined || isNaN(value)) {
    return;
  } 


  const pointExt = (0,lodash.concat)(point, seriesName);

  if (buckets[bucketNum] && buckets[bucketNum].values) {
    buckets[bucketNum].values.push(value);
    buckets[bucketNum].points.push(pointExt);
  } else {
    buckets[bucketNum] = {
      x: bucketNum,
      values: [value],
      points: [pointExt]
    };
  }
}

function pushToYBuckets(buckets, bucketNum, value, point, bounds) {
  let count = 1; 

  if (point.length > 3) {
    count = parseInt(point[2], 10);
  }

  if (buckets[bucketNum]) {
    var _buckets$bucketNum$po;

    buckets[bucketNum].values.push(value);
    (_buckets$bucketNum$po = buckets[bucketNum].points) === null || _buckets$bucketNum$po === void 0 ? void 0 : _buckets$bucketNum$po.push(point);
    buckets[bucketNum].count += count;
  } else {
    buckets[bucketNum] = {
      y: bucketNum,
      bounds: bounds,
      values: [value],
      points: [point],
      count: count
    };
  }
}

function getValueBucketBound(value, yBucketSize, logBase) {
  if (logBase === 1) {
    return getBucketBound(value, yBucketSize);
  } else {
    return getLogScaleBucketBound(value, yBucketSize, logBase);
  }
}


function getBucketBounds(value, bucketSize) {
  let bottom, top;
  bottom = Math.floor(value / bucketSize) * bucketSize;
  top = (Math.floor(value / bucketSize) + 1) * bucketSize;
  return {
    bottom,
    top
  };
}

function getBucketBound(value, bucketSize) {
  const bounds = getBucketBounds(value, bucketSize);
  return bounds.bottom;
}

function convertToValueBuckets(xBucket, bucketSize) {
  const values = xBucket.values;
  const points = xBucket.points;
  const buckets = {};
  (0,lodash.forEach)(values, (val, index) => {
    const bounds = getBucketBounds(val, bucketSize);
    const bucketNum = bounds.bottom;
    pushToYBuckets(buckets, bucketNum, val, points[index], bounds);
  });
  return buckets;
}


function getLogScaleBucketBounds(value, yBucketSplitFactor, logBase) {
  let top, bottom;

  if (value === 0) {
    return {
      bottom: 0,
      top: 0
    };
  }

  const valueLog = logp(value, logBase);
  let pow, powTop;

  if (yBucketSplitFactor === 1 || !yBucketSplitFactor) {
    pow = Math.floor(valueLog);
    powTop = pow + 1;
  } else {
    const additionalBucketSize = 1 / yBucketSplitFactor;
    let additionalLog = valueLog - Math.floor(valueLog);
    additionalLog = Math.floor(additionalLog / additionalBucketSize) * additionalBucketSize;
    pow = Math.floor(valueLog) + additionalLog;
    powTop = pow + additionalBucketSize;
  }

  bottom = Math.pow(logBase, pow);
  top = Math.pow(logBase, powTop);
  return {
    bottom,
    top
  };
}

function getLogScaleBucketBound(value, yBucketSplitFactor, logBase) {
  const bounds = getLogScaleBucketBounds(value, yBucketSplitFactor, logBase);
  return bounds.bottom;
}

function convertToLogScaleValueBuckets(xBucket, yBucketSplitFactor, logBase) {
  const values = xBucket.values;
  const points = xBucket.points;
  const buckets = {};
  (0,lodash.forEach)(values, (val, index) => {
    const bounds = getLogScaleBucketBounds(val, yBucketSplitFactor, logBase);
    const bucketNum = bounds.bottom;
    pushToYBuckets(buckets, bucketNum, val, points[index], bounds);
  });
  return buckets;
}


function logp(value, base) {
  return Math.log(value) / Math.log(base);
}


function calculateBucketSize(bounds) {
  let logBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  let bucketSize = Infinity;

  if (bounds.length === 0) {
    return 0;
  } else if (bounds.length === 1) {
    return bounds[0];
  } else {
    bounds = (0,lodash.sortBy)(bounds);

    for (let i = 1; i < bounds.length; i++) {
      const distance = getDistance(bounds[i], bounds[i - 1], logBase);
      bucketSize = distance < bucketSize ? distance : bucketSize;
    }
  }

  return bucketSize;
}


function getDistance(a, b) {
  let logBase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (logBase === 1) {
    return Math.abs(b - a);
  } else {
    const ratio = Math.max(a, b) / Math.min(a, b);
    return logp(ratio, logBase);
  }
}


function isHeatmapDataEqual(objA, objB) {
  let isEql = !emptyXOR(objA, objB);
  forEach(objA, (xBucket, x) => {
    if (objB[x]) {
      if (emptyXOR(xBucket.buckets, objB[x].buckets)) {
        isEql = false;
        return false;
      }

      forEach(xBucket.buckets, (yBucket, y) => {
        if (objB[x].buckets && objB[x].buckets[y]) {
          if (objB[x].buckets[y].values) {
            isEql = isEqual(sortBy(yBucket.values), sortBy(objB[x].buckets[y].values));

            if (!isEql) {
              return false;
            } else {
              return true;
            }
          } else {
            isEql = false;
            return false;
          }
        } else {
          isEql = false;
          return false;
        }
      });

      if (!isEql) {
        return false;
      } else {
        return true;
      }
    } else {
      isEql = false;
      return false;
    }
  });
  return isEql;
}

function emptyXOR(foo, bar) {
  return (isEmpty(foo) || isEmpty(bar)) && !(isEmpty(foo) && isEmpty(bar));
}


var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
;
function heatmap_tooltip_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const TOOLTIP_PADDING_X = 30;
const TOOLTIP_PADDING_Y = 5;
const HISTOGRAM_WIDTH = 160;
const HISTOGRAM_HEIGHT = 40;
class HeatmapTooltip {
  constructor(elem, scope) {
    heatmap_tooltip_defineProperty(this, "tooltip", void 0);

    heatmap_tooltip_defineProperty(this, "scope", void 0);

    heatmap_tooltip_defineProperty(this, "dashboard", void 0);

    heatmap_tooltip_defineProperty(this, "panelCtrl", void 0);

    heatmap_tooltip_defineProperty(this, "panel", void 0);

    heatmap_tooltip_defineProperty(this, "heatmapPanel", void 0);

    heatmap_tooltip_defineProperty(this, "mouseOverBucket", void 0);

    heatmap_tooltip_defineProperty(this, "originalFillColor", void 0);

    this.scope = scope;
    this.dashboard = scope.ctrl.dashboard;
    this.panelCtrl = scope.ctrl;
    this.panel = scope.ctrl.panel;
    this.heatmapPanel = elem;
    this.mouseOverBucket = false;
    this.originalFillColor = null;
    elem.on('mouseleave', this.onMouseLeave.bind(this));
  }

  onMouseLeave() {
    this.destroy();
  }

  onMouseMove(e) {
    if (!this.panel.tooltip.show) {
      return;
    }

    this.move(e);
  }

  add() {
    this.tooltip = d3.select('body').append('div').attr('class', 'heatmap-tooltip graph-tooltip grafana-tooltip');
  }

  destroy() {
    if (this.tooltip) {
      this.tooltip.remove();
    }

    this.tooltip = null;
  }

  show(pos, data) {
    if (!this.panel.tooltip.show || !data) {
      return;
    } 


    if (pos.panelRelY) {
      return;
    }

    const {
      xBucketIndex,
      yBucketIndex
    } = this.getBucketIndexes(pos, data);

    if (!data.buckets[xBucketIndex]) {
      this.destroy();
      return;
    }

    if (!this.tooltip) {
      this.add();
    }

    let boundBottom, boundTop, valuesNumber;
    const xData = data.buckets[xBucketIndex]; 

    const yData = (0,lodash.find)(xData.buckets, (bucket, bucketIndex) => {
      return bucket.bounds.bottom === yBucketIndex || bucketIndex === yBucketIndex.toString();
    });
    const tooltipTimeFormat = 'YYYY-MM-DD HH:mm:ss';
    const time = this.dashboard.formatDate(xData.x, tooltipTimeFormat); 

    let countValueFormatter, bucketBoundFormatter;

    if ((0,lodash.isNumber)(this.panel.tooltipDecimals)) {
      countValueFormatter = this.countValueFormatter(this.panel.tooltipDecimals, null);
      bucketBoundFormatter = this.panelCtrl.tickValueFormatter(this.panelCtrl.decimals, null);
    } else {
      const decimals = (this.panelCtrl.decimals || -1) + 1;
      countValueFormatter = this.countValueFormatter(decimals, this.panelCtrl.scaledDecimals + 2);
      bucketBoundFormatter = this.panelCtrl.tickValueFormatter(decimals, this.panelCtrl.scaledDecimals + 2);
    }

    let tooltipHtml = `<div class="graph-tooltip-time">${time}</div>
      <div class="heatmap-histogram"></div>`;

    if (yData) {
      if (yData.bounds) {
        if (data.tsBuckets) {
          const tickFormatter = valIndex => {
            return data.tsBucketsFormatted ? data.tsBucketsFormatted[valIndex] : data.tsBuckets[valIndex];
          };

          boundBottom = tickFormatter(yBucketIndex);

          if (this.panel.yBucketBound !== 'middle') {
            boundTop = yBucketIndex < data.tsBuckets.length - 1 ? tickFormatter(yBucketIndex + 1) : '';
          }
        } else {
          const bottom = yData.y ? yData.bounds.bottom : 0;
          boundBottom = bucketBoundFormatter(bottom);
          boundTop = bucketBoundFormatter(yData.bounds.top);
        }

        valuesNumber = countValueFormatter(yData.count);
        const boundStr = boundTop && boundBottom ? `${boundBottom} - ${boundTop}` : boundBottom || boundTop;
        tooltipHtml += `<div>
          bucket: <b>${boundStr}</b> <br>
          count: <b>${valuesNumber}</b> <br>
        </div>`;
      } else {
        tooltipHtml += `<div>count: <b>${yData.count}</b><br></div>`;
      }
    } else {
      if (!this.panel.tooltip.showHistogram) {
        this.destroy();
        return;
      }

      boundBottom = yBucketIndex;
      boundTop = '';
      valuesNumber = 0;
    }

    this.tooltip.html(tooltipHtml);

    if (this.panel.tooltip.showHistogram) {
      this.addHistogram(xData);
    }

    this.move(pos);
  }

  getBucketIndexes(pos, data) {
    const xBucketIndex = this.getXBucketIndex(pos.x, data);
    const yBucketIndex = this.getYBucketIndex(pos.y, data);
    return {
      xBucketIndex,
      yBucketIndex
    };
  }

  getXBucketIndex(x, data) {
    const xBucket = (0,lodash.find)(data.buckets, bucket => {
      return x > bucket.x && x - bucket.x <= data.xBucketSize;
    });
    return xBucket ? xBucket.x : getValueBucketBound(x, data.xBucketSize, 1);
  }

  getYBucketIndex(y, data) {
    if (data.tsBuckets) {
      return Math.floor(y);
    }

    const yBucketIndex = getValueBucketBound(y, data.yBucketSize, this.panel.yAxis.logBase);
    return yBucketIndex;
  }

  getSharedTooltipPos(pos) {
    pos.pageX = this.heatmapPanel.offset().left + this.scope.xScale(pos.x);
    pos.pageY = this.heatmapPanel.offset().top + this.scope.chartHeight * pos.panelRelY;
    return pos;
  }

  addHistogram(data) {
    const xBucket = this.scope.ctrl.data.buckets[data.x];
    const yBucketSize = this.scope.ctrl.data.yBucketSize;
    let min, max, ticks;

    if (this.scope.ctrl.data.tsBuckets) {
      min = 0;
      max = this.scope.ctrl.data.tsBuckets.length - 1;
      ticks = this.scope.ctrl.data.tsBuckets.length;
    } else {
      min = this.scope.ctrl.data.yAxis.min;
      max = this.scope.ctrl.data.yAxis.max;
      ticks = this.scope.ctrl.data.yAxis.ticks;
    }

    let histogramData = (0,lodash.map)(xBucket.buckets, bucket => {
      const count = bucket.count !== undefined ? bucket.count : bucket.values.length;
      return [bucket.bounds.bottom, count];
    });
    histogramData = (0,lodash.filter)(histogramData, d => {
      return d[0] >= min && d[0] <= max;
    });
    const scale = this.scope.yScale.copy();
    const histXScale = scale.domain([min, max]).range([0, HISTOGRAM_WIDTH]);
    let barWidth;

    if (this.panel.yAxis.logBase === 1) {
      barWidth = Math.floor(HISTOGRAM_WIDTH / (max - min) * yBucketSize * 0.9);
    } else {
      const barNumberFactor = yBucketSize ? yBucketSize : 1;
      barWidth = Math.floor(HISTOGRAM_WIDTH / ticks / barNumberFactor * 0.9);
    }

    barWidth = Math.max(barWidth, 1); 

    const histogramDomain = (0,lodash.reduce)((0,lodash.map)(histogramData, d => d[1]), (sum, val) => sum + val, 0);
    const histYScale = d3.scaleLinear().domain([0, histogramDomain]).range([0, HISTOGRAM_HEIGHT]);
    const histogram = this.tooltip.select('.heatmap-histogram').append('svg').attr('width', HISTOGRAM_WIDTH).attr('height', HISTOGRAM_HEIGHT);
    histogram.selectAll('.bar').data(histogramData).enter().append('rect').attr('x', d => {
      return histXScale(d[0]);
    }).attr('width', barWidth).attr('y', d => {
      return HISTOGRAM_HEIGHT - histYScale(d[1]);
    }).attr('height', d => {
      return histYScale(d[1]);
    });
  }

  move(pos) {
    if (!this.tooltip) {
      return;
    }

    const elem = jquery_exposed_default()(this.tooltip.node())[0];
    const tooltipWidth = elem.clientWidth;
    const tooltipHeight = elem.clientHeight;
    let left = pos.pageX + TOOLTIP_PADDING_X;
    let top = pos.pageY + TOOLTIP_PADDING_Y;

    if (pos.pageX + tooltipWidth + 40 > window.innerWidth) {
      left = pos.pageX - tooltipWidth - TOOLTIP_PADDING_X;
    }

    if (pos.pageY - window.pageYOffset + tooltipHeight + 20 > window.innerHeight) {
      top = pos.pageY - tooltipHeight - TOOLTIP_PADDING_Y;
    }

    return this.tooltip.style('left', left + 'px').style('top', top + 'px');
  }

  countValueFormatter(decimals) {
    let scaledDecimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const fmt = (0,src.getValueFormat)('short');
    return value => {
      return (0,src.formattedValueToString)(fmt(value, decimals, scaledDecimals));
    };
  }

}
;
function rendering_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const MIN_CARD_SIZE = 1,
      CARD_PADDING = 1,
      CARD_ROUND = 0,
      DATA_RANGE_WIDING_FACTOR = 1.2,
      DEFAULT_X_TICK_SIZE_PX = 100,
      DEFAULT_Y_TICK_SIZE_PX = 22.5,
      X_AXIS_TICK_PADDING = 10,
      Y_AXIS_TICK_PADDING = 5,
      MIN_SELECTION_WIDTH = 2;
function rendering(scope, elem, attrs, ctrl) {
  return new HeatmapRenderer(scope, elem, attrs, ctrl);
}
class HeatmapRenderer {
  constructor(scope, elem, attrs, ctrl) {
    this.scope = scope;
    this.elem = elem;
    this.ctrl = ctrl;

    rendering_defineProperty(this, "width", 200);

    rendering_defineProperty(this, "height", 200);

    rendering_defineProperty(this, "yScale", void 0);

    rendering_defineProperty(this, "xScale", void 0);

    rendering_defineProperty(this, "chartWidth", 0);

    rendering_defineProperty(this, "chartHeight", 0);

    rendering_defineProperty(this, "chartTop", 0);

    rendering_defineProperty(this, "chartBottom", 0);

    rendering_defineProperty(this, "yAxisWidth", 0);

    rendering_defineProperty(this, "xAxisHeight", 0);

    rendering_defineProperty(this, "cardPadding", 0);

    rendering_defineProperty(this, "cardRound", 0);

    rendering_defineProperty(this, "cardWidth", 0);

    rendering_defineProperty(this, "cardHeight", 0);

    rendering_defineProperty(this, "colorScale", void 0);

    rendering_defineProperty(this, "opacityScale", void 0);

    rendering_defineProperty(this, "mouseUpHandler", void 0);

    rendering_defineProperty(this, "data", void 0);

    rendering_defineProperty(this, "panel", void 0);

    rendering_defineProperty(this, "$heatmap", void 0);

    rendering_defineProperty(this, "tooltip", void 0);

    rendering_defineProperty(this, "heatmap", void 0);

    rendering_defineProperty(this, "timeRange", void 0);

    rendering_defineProperty(this, "selection", void 0);

    rendering_defineProperty(this, "padding", void 0);

    rendering_defineProperty(this, "margin", void 0);

    rendering_defineProperty(this, "dataRangeWidingFactor", void 0);

    rendering_defineProperty(this, "hoverEvent", void 0);

    this.scope = scope;
    this.elem = elem;
    this.ctrl = ctrl;
    this.$heatmap = this.elem.find('.heatmap-panel');
    this.tooltip = new HeatmapTooltip(this.$heatmap, this.scope);
    this.selection = {
      active: false,
      x1: -1,
      x2: -1
    };
    this.padding = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    this.margin = {
      left: 25,
      right: 15,
      top: 10,
      bottom: 20
    };
    this.dataRangeWidingFactor = DATA_RANGE_WIDING_FACTOR;
    this.ctrl.events.on(src.PanelEvents.render, this.onRender.bind(this));
    this.ctrl.tickValueFormatter = this.tickValueFormatter.bind(this); 

    this.ctrl.dashboard.events.on(src.LegacyGraphHoverEvent.type, this.onGraphHover.bind(this), this.scope);
    this.ctrl.dashboard.events.on(src.LegacyGraphHoverClearEvent.type, this.onGraphHoverClear.bind(this), this.scope); 

    this.$heatmap.on('mousedown', this.onMouseDown.bind(this));
    this.$heatmap.on('mousemove', this.onMouseMove.bind(this));
    this.$heatmap.on('mouseleave', this.onMouseLeave.bind(this));
    this.hoverEvent = new src.LegacyGraphHoverEvent({
      pos: {},
      point: {},
      panel: this.panel
    });
  }

  onGraphHoverClear() {
    this.clearCrosshair();
  }

  onGraphHover(event) {
    this.drawSharedCrosshair(event.pos);
  }

  onRender() {
    this.render();
    this.ctrl.renderingCompleted();
  }

  setElementHeight() {
    try {
      let height = this.ctrl.height || this.panel.height || this.ctrl.row.height;

      if ((0,lodash.isString)(height)) {
        height = parseInt(height.replace('px', ''), 10);
      }

      height -= this.panel.legend.show ? 28 : 11; 

      this.$heatmap.css('height', height + 'px');
      return true;
    } catch (e) {
      return false;
    }
  }

  getYAxisWidth(elem) {
    const panelYAxisWidth = this.getPanelYAxisWidth();

    if (panelYAxisWidth !== null) {
      return panelYAxisWidth + Y_AXIS_TICK_PADDING;
    }

    const axisText = elem.selectAll('.axis-y text').nodes();
    const maxTextWidth = (0,lodash.max)((0,lodash.map)(axisText, text => {
      return text.getBBox().width;
    }));
    return maxTextWidth;
  }

  getXAxisHeight(elem) {
    const axisLine = elem.select('.axis-x line');

    if (!axisLine.empty()) {
      const axisLinePosition = parseFloat(elem.select('.axis-x line').attr('y2'));
      const canvasWidth = parseFloat(elem.attr('height'));
      return canvasWidth - axisLinePosition;
    } else {
      return 30;
    }
  }

  addXAxis() {
    this.scope.xScale = this.xScale = d3.scaleTime().domain([this.timeRange.from, this.timeRange.to]).range([0, this.chartWidth]);
    const ticks = this.chartWidth / DEFAULT_X_TICK_SIZE_PX;
    const format = (0,grafana_ui_src.graphTimeFormat)(ticks, this.timeRange.from.valueOf(), this.timeRange.to.valueOf());
    const timeZone = this.ctrl.dashboard.getTimezone();

    const formatter = date => (0,src.dateTimeFormat)(date.valueOf(), {
      format: format,
      timeZone: timeZone
    });

    const xAxis = d3.axisBottom(this.xScale).ticks(ticks).tickFormat(formatter).tickPadding(X_AXIS_TICK_PADDING).tickSize(this.chartHeight);
    const posY = this.margin.top;
    const posX = this.yAxisWidth;
    this.heatmap.append('g').attr('class', 'axis axis-x').attr('transform', 'translate(' + posX + ',' + posY + ')').call(xAxis); 

    this.heatmap.select('.axis-x').select('.domain').remove();
  }

  addYAxis() {
    let ticks = Math.ceil(this.chartHeight / DEFAULT_Y_TICK_SIZE_PX);
    let tickInterval = utils_ticks.tickStep(this.data.heatmapStats.min, this.data.heatmapStats.max, ticks);
    let {
      yMin,
      yMax
    } = this.wideYAxisRange(this.data.heatmapStats.min, this.data.heatmapStats.max, tickInterval); 

    yMin = this.panel.yAxis.min !== null ? this.panel.yAxis.min : yMin;
    yMax = this.panel.yAxis.max !== null ? this.panel.yAxis.max : yMax; 

    tickInterval = utils_ticks.tickStep(yMin, yMax, ticks);
    ticks = Math.ceil((yMax - yMin) / tickInterval);
    const decimalsAuto = utils_ticks.getPrecision(tickInterval);
    let decimals = this.panel.yAxis.decimals === null ? decimalsAuto : this.panel.yAxis.decimals; 

    const flotTickSize = utils_ticks.getFlotTickSize(yMin, yMax, ticks, decimalsAuto);
    const scaledDecimals = utils_ticks.getScaledDecimals(decimals, flotTickSize);
    this.ctrl.decimals = decimals;
    this.ctrl.scaledDecimals = scaledDecimals; 

    if ((0,lodash.isEmpty)(this.data.buckets)) {
      yMax = 1;
      yMin = -1;
      ticks = 3;
      decimals = 1;
    }

    this.data.yAxis = {
      min: yMin,
      max: yMax,
      ticks: ticks
    };
    this.scope.yScale = this.yScale = d3.scaleLinear().domain([yMin, yMax]).range([this.chartHeight, 0]);
    const yAxis = d3.axisLeft(this.yScale).ticks(ticks).tickFormat(this.tickValueFormatter(decimals, scaledDecimals)).tickSizeInner(0 - this.width).tickSizeOuter(0).tickPadding(Y_AXIS_TICK_PADDING);
    this.heatmap.append('g').attr('class', 'axis axis-y').call(yAxis); 

    const posY = this.margin.top;
    const posX = this.getYAxisWidth(this.heatmap) + Y_AXIS_TICK_PADDING;
    this.heatmap.select('.axis-y').attr('transform', 'translate(' + posX + ',' + posY + ')'); 

    this.heatmap.select('.axis-y').select('.domain').remove();
  } 


  wideYAxisRange(min, max, tickInterval) {
    const yWiding = (max * (this.dataRangeWidingFactor - 1) - min * (this.dataRangeWidingFactor - 1)) / 2;
    let yMin, yMax;

    if (tickInterval === 0) {
      yMax = max * this.dataRangeWidingFactor;
      yMin = min - min * (this.dataRangeWidingFactor - 1);
    } else {
      yMax = Math.ceil((max + yWiding) / tickInterval) * tickInterval;
      yMin = Math.floor((min - yWiding) / tickInterval) * tickInterval;
    } 


    if (min >= 0 && yMin < 0) {
      yMin = 0;
    }

    return {
      yMin,
      yMax
    };
  }

  addLogYAxis() {
    const logBase = this.panel.yAxis.logBase;
    let {
      yMin,
      yMax
    } = this.adjustLogRange(this.data.heatmapStats.minLog, this.data.heatmapStats.max, logBase);
    yMin = this.panel.yAxis.min && this.panel.yAxis.min !== '0' ? this.adjustLogMin(this.panel.yAxis.min, logBase) : yMin;
    yMax = this.panel.yAxis.max !== null ? this.adjustLogMax(this.panel.yAxis.max, logBase) : yMax; 

    if ((0,lodash.isEmpty)(this.data.buckets)) {
      yMax = Math.pow(logBase, 2);
      yMin = 1;
    }

    this.scope.yScale = this.yScale = d3.scaleLog().base(this.panel.yAxis.logBase).domain([yMin, yMax]).range([this.chartHeight, 0]);
    const domain = this.yScale.domain();
    const tickValues = this.logScaleTickValues(domain, logBase);
    const decimalsAuto = utils_ticks.getPrecision(yMin);
    const decimals = this.panel.yAxis.decimals || decimalsAuto; 

    const flotTickSize = utils_ticks.getFlotTickSize(yMin, yMax, tickValues.length, decimalsAuto);
    const scaledDecimals = utils_ticks.getScaledDecimals(decimals, flotTickSize);
    this.ctrl.decimals = decimals;
    this.ctrl.scaledDecimals = scaledDecimals;
    this.data.yAxis = {
      min: yMin,
      max: yMax,
      ticks: tickValues.length
    };
    const yAxis = d3.axisLeft(this.yScale).tickValues(tickValues).tickFormat(this.tickValueFormatter(decimals, scaledDecimals)).tickSizeInner(0 - this.width).tickSizeOuter(0).tickPadding(Y_AXIS_TICK_PADDING);
    this.heatmap.append('g').attr('class', 'axis axis-y').call(yAxis); 

    const posY = this.margin.top;
    const posX = this.getYAxisWidth(this.heatmap) + Y_AXIS_TICK_PADDING;
    this.heatmap.select('.axis-y').attr('transform', 'translate(' + posX + ',' + posY + ')'); 

    if (yMin < 1) {
      this.heatmap.select('.axis-y').select('.tick text').text('0');
    } 


    this.heatmap.select('.axis-y').select('.domain').remove();
  }

  addYAxisFromBuckets() {
    const tsBuckets = this.data.tsBuckets;
    let ticks = Math.ceil(this.chartHeight / DEFAULT_Y_TICK_SIZE_PX);
    this.scope.yScale = this.yScale = d3.scaleLinear().domain([0, tsBuckets.length - 1]).range([this.chartHeight, 0]);
    const tickValues = (0,lodash.map)(tsBuckets, (b, i) => i);
    const decimalsAuto = (0,lodash.max)((0,lodash.map)(tsBuckets, utils_ticks.getStringPrecision));
    const decimals = this.panel.yAxis.decimals === null ? decimalsAuto : this.panel.yAxis.decimals;
    this.ctrl.decimals = decimals;
    const tickValueFormatter = this.tickValueFormatter.bind(this);

    function tickFormatter(yAxisWidth) {
      return function (valIndex) {
        let valueFormatted = tsBuckets[valIndex.valueOf()];

        if (!(0,lodash.isNaN)((0,lodash.toNumber)(valueFormatted)) && valueFormatted !== '') {
          valueFormatted = tickValueFormatter(decimals)((0,lodash.toNumber)(valueFormatted));
        } else if (valueFormatted && typeof valueFormatted === 'string' && valueFormatted !== '') {
          if (yAxisWidth) {
            const scale = 0.15; 

            const trimmed = valueFormatted.substring(0, Math.floor(yAxisWidth * scale));
            const postfix = trimmed.length < valueFormatted.length ? '...' : '';
            valueFormatted = `${trimmed}${postfix}`;
          }
        }

        return valueFormatted;
      };
    }

    const tsBucketsFormatted = (0,lodash.map)(tsBuckets, (v, i) => tickFormatter(null)(i));
    this.data.tsBucketsFormatted = tsBucketsFormatted;
    const yAxis = d3.axisLeft(this.yScale).tickFormat(tickFormatter(this.getPanelYAxisWidth())).tickSizeInner(0 - this.width).tickSizeOuter(0).tickPadding(Y_AXIS_TICK_PADDING);

    if (tickValues && tickValues.length <= ticks) {
      yAxis.tickValues(tickValues);
    } else {
      yAxis.ticks(ticks);
    }

    this.heatmap.append('g').attr('class', 'axis axis-y').call(yAxis); 

    const posY = this.margin.top;
    const posX = this.getYAxisWidth(this.heatmap) + Y_AXIS_TICK_PADDING;
    this.heatmap.select('.axis-y').attr('transform', 'translate(' + posX + ',' + posY + ')');

    if (this.panel.yBucketBound === 'middle' && tickValues && tickValues.length) {
      const tickShift = 0 - this.chartHeight / (tickValues.length - 1) / 2;
      this.heatmap.selectAll('.axis-y text').attr('transform', 'translate(' + 0 + ',' + tickShift + ')');
    } 


    this.heatmap.select('.axis-y').select('.domain').remove();
  } 


  adjustLogRange(min, max, logBase) {
    let yMin = this.data.heatmapStats.minLog;

    if (this.data.heatmapStats.minLog > 1 || !this.data.heatmapStats.minLog) {
      yMin = 1;
    } else {
      yMin = this.adjustLogMin(this.data.heatmapStats.minLog, logBase);
    } 


    const yMax = this.adjustLogMax(this.data.heatmapStats.max, logBase);
    return {
      yMin,
      yMax
    };
  }

  adjustLogMax(max, base) {
    return Math.pow(base, Math.ceil(utils_ticks.logp(max, base)));
  }

  adjustLogMin(min, base) {
    return Math.pow(base, Math.floor(utils_ticks.logp(min, base)));
  }

  logScaleTickValues(domain, base) {
    const domainMin = domain[0];
    const domainMax = domain[1];
    const tickValues = [];

    if (domainMin < 1) {
      const underOneTicks = Math.floor(utils_ticks.logp(domainMin, base));

      for (let i = underOneTicks; i < 0; i++) {
        const tickValue = Math.pow(base, i);
        tickValues.push(tickValue);
      }
    }

    const ticks = Math.ceil(utils_ticks.logp(domainMax, base));

    for (let i = 0; i <= ticks; i++) {
      const tickValue = Math.pow(base, i);
      tickValues.push(tickValue);
    }

    return tickValues;
  }

  tickValueFormatter(decimals) {
    let scaledDecimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const format = this.panel.yAxis.format;
    return value => {
      try {
        if (format !== 'none') {
          const v = (0,src.getValueFormat)(format)(value, decimals, scaledDecimals);
          return (0,src.formattedValueToString)(v);
        }
      } catch (err) {
        console.error(err.message || err);
      }

      return value;
    };
  }

  fixYAxisTickSize() {
    this.heatmap.select('.axis-y').selectAll('.tick line').attr('x2', this.chartWidth);
  }

  addAxes() {
    this.chartHeight = this.height - this.margin.top - this.margin.bottom;
    this.chartTop = this.margin.top;
    this.chartBottom = this.chartTop + this.chartHeight;

    if (this.panel.dataFormat === 'tsbuckets') {
      this.addYAxisFromBuckets();
    } else {
      if (this.panel.yAxis.logBase === 1) {
        this.addYAxis();
      } else {
        this.addLogYAxis();
      }
    }

    this.yAxisWidth = this.getYAxisWidth(this.heatmap) + Y_AXIS_TICK_PADDING;
    this.chartWidth = this.width - this.yAxisWidth - this.margin.right;
    this.fixYAxisTickSize();
    this.addXAxis();
    this.xAxisHeight = this.getXAxisHeight(this.heatmap);

    if (!this.panel.yAxis.show) {
      this.heatmap.select('.axis-y').selectAll('line').style('opacity', 0);
    }

    if (!this.panel.xAxis.show) {
      this.heatmap.select('.axis-x').selectAll('line').style('opacity', 0);
    }
  }

  addHeatmapCanvas() {
    const heatmapElem = this.$heatmap[0];
    this.width = Math.floor(this.$heatmap.width()) - this.padding.right;
    this.height = Math.floor(this.$heatmap.height()) - this.padding.bottom;
    this.cardPadding = this.panel.cards.cardPadding !== null ? this.panel.cards.cardPadding : CARD_PADDING;
    this.cardRound = this.panel.cards.cardRound !== null ? this.panel.cards.cardRound : CARD_ROUND;

    if (this.heatmap) {
      this.heatmap.remove();
    }

    this.heatmap = d3.select(heatmapElem).append('svg').attr('width', this.width).attr('height', this.height);
  }

  addHeatmap() {
    this.addHeatmapCanvas();
    this.addAxes();

    if (this.panel.yAxis.logBase !== 1 && this.panel.dataFormat !== 'tsbuckets') {
      const logBase = this.panel.yAxis.logBase;
      const domain = this.yScale.domain();
      const tickValues = this.logScaleTickValues(domain, logBase);
      this.data.buckets = mergeZeroBuckets(this.data.buckets, (0,lodash.min)(tickValues));
    }

    const cardsData = this.data.cards;
    const cardStats = this.data.cardStats;
    const maxValueAuto = cardStats.max;
    const minValueAuto = Math.max(cardStats.min, 0);
    const maxValue = (0,lodash.isNil)(this.panel.color.max) ? maxValueAuto : this.panel.color.max;
    const minValue = (0,lodash.isNil)(this.panel.color.min) ? minValueAuto : this.panel.color.min;
    const colorScheme = (0,lodash.find)(this.ctrl.colorSchemes, {
      value: this.panel.color.colorScheme
    });
    this.colorScale = getColorScale(colorScheme, core.Vt.user.lightTheme, maxValue, minValue);
    this.opacityScale = getOpacityScale(this.panel.color, maxValue, minValue);
    this.setCardSize();
    let cards = this.heatmap.selectAll('.heatmap-card').data(cardsData);
    cards.append('title');
    cards = cards.enter().append('rect').attr('x', this.getCardX.bind(this)).attr('width', this.getCardWidth.bind(this)).attr('y', this.getCardY.bind(this)).attr('height', this.getCardHeight.bind(this)).attr('rx', this.cardRound).attr('ry', this.cardRound).attr('class', 'bordered heatmap-card').style('fill', this.getCardColor.bind(this)).style('stroke', this.getCardColor.bind(this)).style('stroke-width', 0).style('opacity', this.getCardOpacity.bind(this));
    const $cards = this.$heatmap.find('.heatmap-card');
    $cards.on('mouseenter', event => {
      this.tooltip.mouseOverBucket = true;
      this.highlightCard(event);
    }).on('mouseleave', event => {
      this.tooltip.mouseOverBucket = false;
      this.resetCardHighLight(event);
    });
  }

  highlightCard(event) {
    const color = d3.select(event.target).style('fill');
    const highlightColor = d3.color(color).darker(2);
    const strokeColor = d3.color(color).brighter(4);
    const currentCard = d3.select(event.target);
    this.tooltip.originalFillColor = color;
    currentCard.style('fill', highlightColor.toString()).style('stroke', strokeColor.toString()).style('stroke-width', 1);
  }

  resetCardHighLight(event) {
    d3.select(event.target).style('fill', this.tooltip.originalFillColor).style('stroke', this.tooltip.originalFillColor).style('stroke-width', 0);
  }

  setCardSize() {
    const xGridSize = Math.floor(this.xScale(this.data.xBucketSize) - this.xScale(0));
    let yGridSize = Math.floor(this.yScale(this.yScale.invert(0) - this.data.yBucketSize));

    if (this.panel.yAxis.logBase !== 1) {
      const base = this.panel.yAxis.logBase;
      const splitFactor = this.data.yBucketSize || 1;
      yGridSize = Math.floor((this.yScale(1) - this.yScale(base)) / splitFactor);
    }

    const cardWidth = xGridSize - this.cardPadding * 2;
    this.cardWidth = Math.max(cardWidth, MIN_CARD_SIZE);
    this.cardHeight = yGridSize ? yGridSize - this.cardPadding * 2 : 0;
  }

  getCardX(d) {
    let x;

    if (this.xScale(d.x) < 0) {
      x = this.yAxisWidth + this.cardPadding;
    } else {
      x = this.xScale(d.x) + this.yAxisWidth + this.cardPadding;
    }

    return x;
  }

  getCardWidth(d) {
    let w = this.cardWidth;

    if (this.xScale(d.x) < 0) {
      w = this.xScale(d.x) + this.cardWidth;
    } else if (this.xScale(d.x) + this.cardWidth > this.chartWidth) {
      w = this.chartWidth - this.xScale(d.x) - this.cardPadding;
    } 


    w = w > 0 ? Math.max(w, MIN_CARD_SIZE) : 0;
    return w;
  }

  getCardY(d) {
    let y = this.yScale(d.y) + this.chartTop - this.cardHeight - this.cardPadding;

    if (this.panel.yAxis.logBase !== 1 && d.y === 0) {
      y = this.chartBottom - this.cardHeight - this.cardPadding;
    } else {
      if (y < this.chartTop) {
        y = this.chartTop;
      }
    }

    return y;
  }

  getCardHeight(d) {
    const y = this.yScale(d.y) + this.chartTop - this.cardHeight - this.cardPadding;
    let h = this.cardHeight;

    if (this.panel.yAxis.logBase !== 1 && d.y === 0) {
      return this.cardHeight;
    } 


    if (y < this.chartTop) {
      h = this.yScale(d.y) - this.cardPadding;
    } else if (this.yScale(d.y) > this.chartBottom) {
      h = this.chartBottom - y;
    } else if (y + this.cardHeight > this.chartBottom) {
      h = this.chartBottom - y;
    } 


    h = Math.min(h, this.chartHeight); 

    h = Math.max(h, MIN_CARD_SIZE);
    return h;
  }

  getCardColor(d) {
    if (this.panel.color.mode === 'opacity') {
      return (0,src.getColorForTheme)(this.panel.color.cardColor, config.vc.theme);
    } else {
      return this.colorScale(d.count);
    }
  }

  getCardOpacity(d) {
    if (this.panel.color.mode === 'opacity') {
      return this.opacityScale(d.count);
    } else {
      return 1;
    }
  }

  getEventOffset(event) {
    const elemOffset = this.$heatmap.offset();
    const x = Math.floor(event.clientX - elemOffset.left);
    const y = Math.floor(event.clientY - elemOffset.top);
    return {
      x,
      y
    };
  }

  onMouseDown(event) {
    const offset = this.getEventOffset(event);
    this.selection.active = true;
    this.selection.x1 = offset.x;

    this.mouseUpHandler = () => {
      this.onMouseUp();
    };

    jquery_exposed_default()(document).one('mouseup', this.mouseUpHandler.bind(this));
  }

  onMouseUp() {
    jquery_exposed_default()(document).unbind('mouseup', this.mouseUpHandler.bind(this));
    this.mouseUpHandler = null;
    this.selection.active = false;
    const selectionRange = Math.abs(this.selection.x2 - this.selection.x1);

    if (this.selection.x2 >= 0 && selectionRange > MIN_SELECTION_WIDTH) {
      const timeFrom = this.xScale.invert(Math.min(this.selection.x1, this.selection.x2) - this.yAxisWidth);
      const timeTo = this.xScale.invert(Math.max(this.selection.x1, this.selection.x2) - this.yAxisWidth);
      this.ctrl.timeSrv.setTime({
        from: (0,src.toUtc)(timeFrom),
        to: (0,src.toUtc)(timeTo)
      });
    }

    this.clearSelection();
  }

  onMouseLeave() {
    this.ctrl.dashboard.events.publish(new src.LegacyGraphHoverClearEvent());
    this.clearCrosshair();
  }

  onMouseMove(event) {
    if (!this.heatmap) {
      return;
    }

    const offset = this.getEventOffset(event);

    if (this.selection.active) {
      this.clearCrosshair();
      this.tooltip.destroy();
      this.selection.x2 = this.limitSelection(offset.x);
      this.drawSelection(this.selection.x1, this.selection.x2);
    } else {
      const pos = this.getEventPos(event, offset);
      this.drawCrosshair(offset.x);
      this.tooltip.show(pos, this.data);
      this.emitGraphHoverEvent(pos);
    }
  }

  getEventPos(event, offset) {
    const x = this.xScale.invert(offset.x - this.yAxisWidth).valueOf();
    const y = this.yScale.invert(offset.y - this.chartTop);
    const pos = {
      pageX: event.pageX,
      pageY: event.pageY,
      x: x,
      x1: x,
      y: y,
      y1: y,
      panelRelY: null,
      offset
    };
    return pos;
  }

  emitGraphHoverEvent(pos) {
    pos.panelRelY = Math.max(pos.offset.y / this.height, 0.001); 

    this.hoverEvent.payload.pos = pos;
    this.hoverEvent.payload.panel = this.panel;
    this.hoverEvent.payload.point['time'] = pos.x;
    this.ctrl.dashboard.events.publish(this.hoverEvent);
  }

  limitSelection(x2) {
    x2 = Math.max(x2, this.yAxisWidth);
    x2 = Math.min(x2, this.chartWidth + this.yAxisWidth);
    return x2;
  }

  drawSelection(posX1, posX2) {
    if (this.heatmap) {
      this.heatmap.selectAll('.heatmap-selection').remove();
      const selectionX = Math.min(posX1, posX2);
      const selectionWidth = Math.abs(posX1 - posX2);

      if (selectionWidth > MIN_SELECTION_WIDTH) {
        this.heatmap.append('rect').attr('class', 'heatmap-selection').attr('x', selectionX).attr('width', selectionWidth).attr('y', this.chartTop).attr('height', this.chartHeight);
      }
    }
  }

  clearSelection() {
    this.selection.x1 = -1;
    this.selection.x2 = -1;

    if (this.heatmap) {
      this.heatmap.selectAll('.heatmap-selection').remove();
    }
  }

  drawCrosshair(position) {
    if (this.heatmap) {
      this.heatmap.selectAll('.heatmap-crosshair').remove();
      let posX = position;
      posX = Math.max(posX, this.yAxisWidth);
      posX = Math.min(posX, this.chartWidth + this.yAxisWidth);
      this.heatmap.append('g').attr('class', 'heatmap-crosshair').attr('transform', 'translate(' + posX + ',0)').append('line').attr('x1', 1).attr('y1', this.chartTop).attr('x2', 1).attr('y2', this.chartBottom).attr('stroke-width', 1);
    }
  }

  drawSharedCrosshair(pos) {
    if (this.heatmap && this.ctrl.dashboard.graphTooltip !== 0) {
      const posX = this.xScale(pos.x) + this.yAxisWidth;
      this.drawCrosshair(posX);
    }
  }

  clearCrosshair() {
    if (this.heatmap) {
      this.heatmap.selectAll('.heatmap-crosshair').remove();
    }
  }

  render() {
    this.data = this.ctrl.data;
    this.panel = this.ctrl.panel;
    this.timeRange = this.ctrl.range;

    if (!this.setElementHeight() || !this.data) {
      return;
    } 


    if ((0,lodash.isEmpty)(this.data.buckets)) {
      this.addHeatmapCanvas();
      this.addAxes();
      return;
    }

    this.addHeatmap();
    this.scope.yAxisWidth = this.yAxisWidth;
    this.scope.xAxisHeight = this.xAxisHeight;
    this.scope.chartHeight = this.chartHeight;
    this.scope.chartWidth = this.chartWidth;
    this.scope.chartTop = this.chartTop;
  }

  getPanelYAxisWidth() {
    if (!this.panel.yAxis.width) {
      return null;
    }

    return (0,lodash.isNaN)(this.panel.yAxis.width) ? null : parseInt(this.panel.yAxis.width, 10);
  }

}
;
function heatmap_ctrl_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const X_BUCKET_NUMBER_DEFAULT = 30;
const Y_BUCKET_NUMBER_DEFAULT = 10;
const panelDefaults = {
  heatmap: {},
  cards: {
    cardPadding: null,
    cardRound: null
  },
  color: {
    mode: 'spectrum',
    cardColor: '#b4ff00',
    colorScale: 'sqrt',
    exponent: 0.5,
    colorScheme: 'interpolateOranges'
  },
  legend: {
    show: false
  },
  dataFormat: 'timeseries',
  yBucketBound: 'auto',
  reverseYBuckets: false,
  xAxis: {
    show: true
  },
  yAxis: {
    show: true,
    format: 'short',
    decimals: null,
    logBase: 1,
    splitFactor: null,
    min: null,
    max: null
  },
  xBucketSize: null,
  xBucketNumber: null,
  yBucketSize: null,
  yBucketNumber: null,
  tooltip: {
    show: true,
    showHistogram: false
  },
  highlightCards: true,
  hideZeroBuckets: false
};
const colorModes = ['opacity', 'spectrum'];
const opacityScales = ['linear', 'sqrt']; 

const colorSchemes = [
{
  name: 'Spectral',
  value: 'interpolateSpectral',
  invert: 'always'
}, {
  name: 'RdYlGn',
  value: 'interpolateRdYlGn',
  invert: 'always'
}, 
{
  name: 'Blues',
  value: 'interpolateBlues',
  invert: 'dark'
}, {
  name: 'Greens',
  value: 'interpolateGreens',
  invert: 'dark'
}, {
  name: 'Greys',
  value: 'interpolateGreys',
  invert: 'dark'
}, {
  name: 'Oranges',
  value: 'interpolateOranges',
  invert: 'dark'
}, {
  name: 'Purples',
  value: 'interpolatePurples',
  invert: 'dark'
}, {
  name: 'Reds',
  value: 'interpolateReds',
  invert: 'dark'
}, 
{
  name: 'Turbo',
  value: 'interpolateTurbo',
  invert: 'light'
}, {
  name: 'Cividis',
  value: 'interpolateCividis',
  invert: 'light'
}, {
  name: 'Viridis',
  value: 'interpolateViridis',
  invert: 'light'
}, {
  name: 'Magma',
  value: 'interpolateMagma',
  invert: 'light'
}, {
  name: 'Inferno',
  value: 'interpolateInferno',
  invert: 'light'
}, {
  name: 'Plasma',
  value: 'interpolatePlasma',
  invert: 'light'
}, {
  name: 'Warm',
  value: 'interpolateWarm',
  invert: 'light'
}, {
  name: 'Cool',
  value: 'interpolateCool',
  invert: 'light'
}, {
  name: 'Cubehelix',
  value: 'interpolateCubehelixDefault',
  invert: 'light'
}, {
  name: 'BuGn',
  value: 'interpolateBuGn',
  invert: 'dark'
}, {
  name: 'BuPu',
  value: 'interpolateBuPu',
  invert: 'dark'
}, {
  name: 'GnBu',
  value: 'interpolateGnBu',
  invert: 'dark'
}, {
  name: 'OrRd',
  value: 'interpolateOrRd',
  invert: 'dark'
}, {
  name: 'PuBuGn',
  value: 'interpolatePuBuGn',
  invert: 'dark'
}, {
  name: 'PuBu',
  value: 'interpolatePuBu',
  invert: 'dark'
}, {
  name: 'PuRd',
  value: 'interpolatePuRd',
  invert: 'dark'
}, {
  name: 'RdPu',
  value: 'interpolateRdPu',
  invert: 'dark'
}, {
  name: 'YlGnBu',
  value: 'interpolateYlGnBu',
  invert: 'dark'
}, {
  name: 'YlGn',
  value: 'interpolateYlGn',
  invert: 'dark'
}, {
  name: 'YlOrBr',
  value: 'interpolateYlOrBr',
  invert: 'dark'
}, {
  name: 'YlOrRd',
  value: 'interpolateYlOrRd',
  invert: 'dark'
}];
const dsSupportHistogramSort = ['elasticsearch'];
class HeatmapCtrl extends sdk.MetricsPanelCtrl {

  constructor($scope, $injector, templateSrv, timeSrv) {
    super($scope, $injector);

    heatmap_ctrl_defineProperty(this, "opacityScales", []);

    heatmap_ctrl_defineProperty(this, "colorModes", []);

    heatmap_ctrl_defineProperty(this, "colorSchemes", []);

    heatmap_ctrl_defineProperty(this, "selectionActivated", void 0);

    heatmap_ctrl_defineProperty(this, "unitFormats", void 0);

    heatmap_ctrl_defineProperty(this, "data", void 0);

    heatmap_ctrl_defineProperty(this, "series", []);

    heatmap_ctrl_defineProperty(this, "dataWarning", void 0);

    heatmap_ctrl_defineProperty(this, "decimals", 0);

    heatmap_ctrl_defineProperty(this, "scaledDecimals", 0);

    heatmap_ctrl_defineProperty(this, "processor", void 0);

    this.selectionActivated = false;
    (0,lodash.defaultsDeep)(this.panel, panelDefaults);
    this.opacityScales = opacityScales;
    this.colorModes = colorModes;
    this.colorSchemes = colorSchemes; 

    this.useDataFrames = true;
    this.processor = new data_processor.$({
      xaxis: {
        mode: 'custom'
      },
      aliasColors: {} 

    }); 

    this.events.on(src.PanelEvents.render, this.onRender.bind(this));
    this.events.on(src.PanelEvents.dataFramesReceived, this.onDataFramesReceived.bind(this));
    this.events.on(src.PanelEvents.dataSnapshotLoad, this.onSnapshotLoad.bind(this));
    this.events.on(src.PanelEvents.editModeInitialized, this.onInitEditMode.bind(this));
    this.onCardColorChange = this.onCardColorChange.bind(this);
  }

  onInitEditMode() {
    this.addEditorTab('Axes', axesEditor, 2);
    this.addEditorTab('Display', heatmapDisplayEditor, 3);
    this.unitFormats = kbn.Z.getUnitFormats();
  }

  zoomOut(evt) {
    app_events.Z.publish(new events.p8({
      scale: 2
    }));
  }

  onRender() {
    if (this.panel.dataFormat === 'tsbuckets') {
      this.convertHistogramToHeatmapData();
    } else {
      this.convertTimeSeriesToHeatmapData();
    }
  }

  convertTimeSeriesToHeatmapData() {
    if (!this.range || !this.series) {
      return;
    }

    let xBucketSize, yBucketSize, bucketsData, heatmapStats;
    const logBase = this.panel.yAxis.logBase;
    const xBucketNumber = this.panel.xBucketNumber || X_BUCKET_NUMBER_DEFAULT;
    const xBucketSizeByNumber = Math.floor((this.range.to.valueOf() - this.range.from.valueOf()) / xBucketNumber); 

    const isIntervalString = kbn.Z.intervalRegex.test(this.panel.xBucketSize);

    if (isIntervalString) {
      xBucketSize = src.rangeUtil.intervalToMs(this.panel.xBucketSize);
    } else if (isNaN(Number(this.panel.xBucketSize)) || this.panel.xBucketSize === '' || this.panel.xBucketSize === null) {
      xBucketSize = xBucketSizeByNumber;
    } else {
      xBucketSize = Number(this.panel.xBucketSize);
    } 


    heatmapStats = this.parseSeries(this.series);
    const yBucketNumber = this.panel.yBucketNumber || Y_BUCKET_NUMBER_DEFAULT;

    if (logBase !== 1) {
      yBucketSize = this.panel.yAxis.splitFactor;
    } else {
      if (heatmapStats.max === heatmapStats.min) {
        if (heatmapStats.max) {
          yBucketSize = heatmapStats.max / Y_BUCKET_NUMBER_DEFAULT;
        } else {
          yBucketSize = 1;
        }
      } else {
        yBucketSize = (heatmapStats.max - heatmapStats.min) / yBucketNumber;
      }

      yBucketSize = this.panel.yBucketSize || yBucketSize;
    }

    bucketsData = convertToHeatMap(this.series, yBucketSize, xBucketSize, logBase); 

    if (!heatmapStats.min && !heatmapStats.max) {
      heatmapStats = {
        min: -1,
        max: 1,
        minLog: 1
      };
      yBucketSize = 1;
    }

    const {
      cards,
      cardStats
    } = convertToCards(bucketsData, this.panel.hideZeroBuckets);
    this.data = {
      buckets: bucketsData,
      heatmapStats: heatmapStats,
      xBucketSize: xBucketSize,
      yBucketSize: yBucketSize,
      cards: cards,
      cardStats: cardStats
    };
  }

  convertHistogramToHeatmapData() {
    if (!this.range || !this.series) {
      return;
    }

    const panelDatasource = this.getPanelDataSourceType();
    let xBucketSize, yBucketSize, bucketsData, tsBuckets; 

    if (!(0,lodash.includes)(dsSupportHistogramSort, panelDatasource)) {
      this.series.sort(sortSeriesByLabel);
    }

    if (this.panel.reverseYBuckets) {
      this.series.reverse();
    } 


    bucketsData = histogramToHeatmap(this.series);
    tsBuckets = (0,lodash.map)(this.series, 'label');
    const yBucketBound = this.panel.yBucketBound;

    if (panelDatasource === 'prometheus' && yBucketBound !== 'lower' && yBucketBound !== 'middle' || yBucketBound === 'upper') {
      tsBuckets = [''].concat(tsBuckets);
    } else {
      tsBuckets.push('');
    } 


    const xBucketBoundSet = (0,lodash.map)((0,lodash.keys)(bucketsData), key => Number(key));
    xBucketSize = calculateBucketSize(xBucketBoundSet); 

    yBucketSize = 1;
    const {
      cards,
      cardStats
    } = convertToCards(bucketsData, this.panel.hideZeroBuckets);
    this.data = {
      buckets: bucketsData,
      xBucketSize: xBucketSize,
      yBucketSize: yBucketSize,
      tsBuckets: tsBuckets,
      cards: cards,
      cardStats: cardStats
    };
  }

  getPanelDataSourceType() {
    if (this.datasource && this.datasource.meta && this.datasource.meta.id) {
      return this.datasource.meta.id;
    } else {
      return 'unknown';
    }
  } 


  onSnapshotLoad(dataList) {
    this.onDataFramesReceived((0,runRequest.F9)(dataList));
  } 


  onDataFramesReceived(data) {
    this.series = this.processor.getSeriesList({
      dataList: data,
      range: this.range
    }).map(ts => {
      ts.color = undefined; 

      ts.flotpairs = ts.getFlotPairs(this.panel.nullPointMode);
      return ts;
    });
    this.dataWarning = null;
    const datapointsCount = (0,lodash.reduce)(this.series, (sum, series) => {
      return sum + series.datapoints.length;
    }, 0);

    if (datapointsCount === 0) {
      this.dataWarning = {
        title: 'No data points',
        tip: 'No datapoints returned from data query'
      };
    } else {
      for (const series of this.series) {
        if (series.isOutsideRange) {
          this.dataWarning = {
            title: 'Data points outside time range',
            tip: 'Can be caused by timezone mismatch or missing time filter in query'
          };
          break;
        }
      }
    }

    this.render();
  }

  onDataError() {
    this.series = [];
    this.render();
  }

  onCardColorChange(newColor) {
    this.panel.color.cardColor = newColor;
    this.render();
  }

  parseSeries(series) {
    const min = (0,lodash.min)((0,lodash.map)(series, s => s.stats.min));

    const minLog = (0,lodash.min)((0,lodash.map)(series, s => s.stats.logmin));

    const max = (0,lodash.max)((0,lodash.map)(series, s => s.stats.max));

    return {
      max,
      min,
      minLog
    };
  }

  parseHistogramSeries(series) {
    const bounds = (0,lodash.map)(series, s => Number(s.alias));

    const min = (0,lodash.min)(bounds);

    const minLog = (0,lodash.min)(bounds);

    const max = (0,lodash.max)(bounds);

    return {
      max: max,
      min: min,
      minLog: minLog
    };
  }

  link(scope, elem, attrs, ctrl) {
    rendering(scope, elem, attrs, ctrl);
  }

}
HeatmapCtrl.$inject = ["$scope", "$injector", "templateSrv", "timeSrv"];

heatmap_ctrl_defineProperty(HeatmapCtrl, "templateUrl", 'module.html');
;




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