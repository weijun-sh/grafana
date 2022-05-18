(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["cloudMonitoringPlugin"],{

/***/ "./public/app/plugins/datasource/cloud-monitoring/CloudMonitoringMetricFindQuery.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudMonitoringMetricFindQuery)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");




class CloudMonitoringMetricFindQuery {
  constructor(datasource) {
    this.datasource = datasource;
    this.datasource = datasource;
  }

  async execute(query) {
    try {
      if (!query.projectName) {
        query.projectName = this.datasource.getDefaultProject();
      }

      switch (query.selectedQueryType) {
        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Projects:
          return this.handleProjectsQuery();

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Services:
          return this.handleServiceQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.MetricTypes:
          return this.handleMetricTypesQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelKeys:
          return this.handleLabelKeysQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelValues:
          return this.handleLabelValuesQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.ResourceTypes:
          return this.handleResourceTypeQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Aligners:
          return this.handleAlignersQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.AlignmentPeriods:
          return this.handleAlignmentPeriodQuery();

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Aggregations:
          return this.handleAggregationQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.SLOServices:
          return this.handleSLOServicesQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.SLO:
          return this.handleSLOQuery(query);

        case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Selectors:
          return this.handleSelectorQuery();

        default:
          return [];
      }
    } catch (error) {
      console.error(`Could not run CloudMonitoringMetricFindQuery ${query}`, error);
      return [];
    }
  }

  async handleProjectsQuery() {
    const projects = await this.datasource.getProjects();
    return projects.map(s => ({
      text: s.label,
      value: s.value,
      expandable: true
    }));
  }

  async handleServiceQuery({
    projectName
  }) {
    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    const services = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.extractServicesFromMetricDescriptors)(metricDescriptors);
    return services.map(s => ({
      text: s.serviceShortName,
      value: s.service,
      expandable: true
    }));
  }

  async handleMetricTypesQuery({
    selectedService,
    projectName
  }) {
    if (!selectedService) {
      return [];
    }

    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    return (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getMetricTypesByService)(metricDescriptors, this.datasource.templateSrv.replace(selectedService)).map(s => ({
      text: s.displayName,
      value: s.type,
      expandable: true
    }));
  }

  async handleLabelKeysQuery({
    selectedMetricType,
    projectName
  }) {
    if (!selectedMetricType) {
      return [];
    }

    const labelKeys = await (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getLabelKeys)(this.datasource, selectedMetricType, projectName);
    return labelKeys.map(this.toFindQueryResult);
  }

  async handleLabelValuesQuery({
    selectedMetricType,
    labelKey,
    projectName
  }) {
    if (!selectedMetricType) {
      return [];
    }

    const refId = 'handleLabelValuesQuery'; // REDUCE_MEAN is needed so the groupBy is not ignored

    const labels = await this.datasource.getLabels(selectedMetricType, refId, projectName, {
      groupBys: [labelKey],
      crossSeriesReducer: 'REDUCE_MEAN'
    });
    const interpolatedKey = this.datasource.templateSrv.replace(labelKey);
    const values = labels.hasOwnProperty(interpolatedKey) ? labels[interpolatedKey] : [];
    return values.map(this.toFindQueryResult);
  }

  async handleResourceTypeQuery({
    selectedMetricType,
    projectName
  }) {
    var _labels$resourceType, _labels$resourceType2;

    if (!selectedMetricType) {
      return [];
    }

    const refId = 'handleResourceTypeQueryQueryType';
    const labels = await this.datasource.getLabels(selectedMetricType, refId, projectName);
    return (_labels$resourceType = (_labels$resourceType2 = labels['resource.type']) === null || _labels$resourceType2 === void 0 ? void 0 : _labels$resourceType2.map(this.toFindQueryResult)) !== null && _labels$resourceType !== void 0 ? _labels$resourceType : [];
  }

  async handleAlignersQuery({
    selectedMetricType,
    projectName
  }) {
    if (!selectedMetricType) {
      return [];
    }

    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    const descriptor = metricDescriptors.find(m => m.type === this.datasource.templateSrv.replace(selectedMetricType));

    if (!descriptor) {
      return [];
    }

    return (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getAlignmentOptionsByMetric)(descriptor.valueType, descriptor.metricKind).map(this.toFindQueryResult);
  }

  async handleAggregationQuery({
    selectedMetricType,
    projectName
  }) {
    if (!selectedMetricType) {
      return [];
    }

    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    const descriptor = metricDescriptors.find(m => m.type === this.datasource.templateSrv.replace(selectedMetricType));

    if (!descriptor) {
      return [];
    }

    return (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getAggregationOptionsByMetric)(descriptor.valueType, descriptor.metricKind).map(this.toFindQueryResult);
  }

  async handleSLOServicesQuery({
    projectName
  }) {
    const services = await this.datasource.getSLOServices(projectName);
    return services.map(this.toFindQueryResult);
  }

  async handleSLOQuery({
    selectedSLOService,
    projectName
  }) {
    const slos = await this.datasource.getServiceLevelObjectives(projectName, selectedSLOService);
    return slos.map(this.toFindQueryResult);
  }

  async handleSelectorQuery() {
    return _constants__WEBPACK_IMPORTED_MODULE_1__.SELECTORS.map(this.toFindQueryResult);
  }

  handleAlignmentPeriodQuery() {
    return _constants__WEBPACK_IMPORTED_MODULE_1__.ALIGNMENT_PERIODS.map(this.toFindQueryResult);
  }

  toFindQueryResult(x) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(x) ? {
      text: x,
      expandable: true
    } : Object.assign({}, x, {
      expandable: true
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/annotations_query_ctrl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudMonitoringAnnotationsQueryCtrl": () => (/* binding */ CloudMonitoringAnnotationsQueryCtrl)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CloudMonitoringAnnotationsQueryCtrl {
  /** @ngInject */
  constructor($scope) {
    this.annotation = $scope.ctrl.annotation || {};
    this.annotation.target = $scope.ctrl.annotation.target || {};
    this.onQueryChange = this.onQueryChange.bind(this);
  }

  onQueryChange(target) {
    Object.assign(this.annotation.target, target);
  }

}
CloudMonitoringAnnotationsQueryCtrl.$inject = ["$scope"];

_defineProperty(CloudMonitoringAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Aggregation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aggregation": () => (/* binding */ Aggregation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Aggregation = props => {
  const aggOptions = useAggregationOptionsByMetric(props);
  const selected = useSelectedFromOptions(aggOptions, props);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.QueryEditorField, {
    labelWidth: 18,
    label: "Group by function",
    "data-testid": "cloud-monitoring-aggregation",
    htmlFor: `${props.refId}-group-by-function`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      width: 16,
      onChange: ({
        value
      }) => props.onChange(value),
      value: selected,
      options: [{
        label: 'Template Variables',
        options: props.templateVariableOptions
      }, {
        label: 'Aggregations',
        expanded: true,
        options: aggOptions
      }],
      placeholder: "Select Reducer",
      inputId: `${props.refId}-group-by-function`
    })
  });
};

const useAggregationOptionsByMetric = ({
  metricDescriptor
}) => {
  const valueType = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.valueType;
  const metricKind = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.metricKind;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!valueType || !metricKind) {
      return [];
    }

    return (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getAggregationOptionsByMetric)(valueType, metricKind).map(a => Object.assign({}, a, {
      label: a.text
    }));
  }, [valueType, metricKind]);
};

const useSelectedFromOptions = (aggOptions, props) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const allOptions = [...aggOptions, ...props.templateVariableOptions];
    return allOptions.find(s => s.value === props.crossSeriesReducer);
  }, [aggOptions, props.crossSeriesReducer, props.templateVariableOptions]);
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/AliasBy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AliasBy": () => (/* binding */ AliasBy)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const AliasBy = ({
  refId,
  value = '',
  onChange
}) => {
  const [alias, setAlias] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value !== null && value !== void 0 ? value : '');
  const propagateOnChange = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(onChange, 1000);

  onChange = e => {
    setAlias(e.target.value);
    propagateOnChange(e.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.QueryEditorRow, {
    label: "Alias by",
    htmlFor: `${refId}-alias-by`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
      id: `${refId}-alias-by`,
      width: _constants__WEBPACK_IMPORTED_MODULE_3__.INPUT_WIDTH,
      value: alias,
      onChange: onChange
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Alignment.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alignment": () => (/* binding */ Alignment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Alignment = ({
  refId,
  templateVariableOptions,
  onChange,
  query,
  customMetaData,
  datasource
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
    label: "Alignment function",
    tooltip: "The process of alignment consists of collecting all data points received in a fixed length of time, applying a function to combine those data points, and assigning a timestamp to the result.",
    fillComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.AlignmentPeriodLabel, {
      datasource: datasource,
      customMetaData: customMetaData
    }),
    htmlFor: `${refId}-alignment-function`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.AlignmentFunction, {
      inputId: `${refId}-alignment-function`,
      templateVariableOptions: templateVariableOptions,
      query: query,
      onChange: onChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorField, {
      label: "Alignment period",
      htmlFor: `${refId}-alignment-period`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.PeriodSelect, {
        inputId: `${refId}-alignment-period`,
        selectWidth: _constants__WEBPACK_IMPORTED_MODULE_1__.SELECT_WIDTH,
        templateVariableOptions: templateVariableOptions,
        current: query.alignmentPeriod,
        onChange: period => onChange(Object.assign({}, query, {
          alignmentPeriod: period
        })),
        aligmentPeriods: _constants__WEBPACK_IMPORTED_MODULE_1__.ALIGNMENT_PERIODS
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/AlignmentFunction.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentFunction": () => (/* binding */ AlignmentFunction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AlignmentFunction = ({
  inputId,
  query,
  templateVariableOptions,
  onChange
}) => {
  const {
    valueType,
    metricKind,
    perSeriesAligner: psa,
    preprocessor
  } = query;
  const {
    perSeriesAligner,
    alignOptions
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_functions__WEBPACK_IMPORTED_MODULE_3__.getAlignmentPickerData)(valueType, metricKind, psa, preprocessor), [valueType, metricKind, psa, preprocessor]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
    width: _constants__WEBPACK_IMPORTED_MODULE_2__.SELECT_WIDTH,
    onChange: ({
      value
    }) => onChange(Object.assign({}, query, {
      perSeriesAligner: value
    })),
    value: [...alignOptions, ...templateVariableOptions].find(s => s.value === perSeriesAligner),
    options: [{
      label: 'Template Variables',
      options: templateVariableOptions
    }, {
      label: 'Alignment options',
      expanded: true,
      options: alignOptions
    }],
    placeholder: "Select Alignment",
    inputId: inputId
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/AlignmentPeriodLabel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentPeriodLabel": () => (/* binding */ AlignmentPeriodLabel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const AlignmentPeriodLabel = ({
  customMetaData,
  datasource
}) => {
  const {
    perSeriesAligner,
    alignmentPeriod
  } = customMetaData;
  const formatAlignmentText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _alignment$text;

    if (!alignmentPeriod || !perSeriesAligner) {
      return '';
    }

    const alignment = _constants__WEBPACK_IMPORTED_MODULE_2__.ALIGNMENTS.find(ap => ap.value === datasource.templateSrv.replace(perSeriesAligner));
    const seconds = parseInt(alignmentPeriod !== null && alignmentPeriod !== void 0 ? alignmentPeriod : ''.replace(/[^0-9]/g, ''), 10);
    const hms = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.rangeUtil.secondsToHms(seconds);
    return `${hms} interval (${(_alignment$text = alignment === null || alignment === void 0 ? void 0 : alignment.text) !== null && _alignment$text !== void 0 ? _alignment$text : ''})`;
  }, [datasource, perSeriesAligner, alignmentPeriod]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
    children: formatAlignmentText
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/AnnotationsHelp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnotationsHelp": () => (/* binding */ AnnotationsHelp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;




const AnnotationsHelp = () => {
  return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "gf-form grafana-info-box alert-info",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5", {
        children: "Annotation Query Format"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: ["An annotation is an event that is overlaid on top of graphs. Annotation rendering is expensive so it is important to limit the number of rows returned.", ' ']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        children: "The Title and Text fields support templating and can use data returned from the query. For example, the Title field could have the following text:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("code", {
        children: [`${'{{metric.type}}'}`, " has value: ", `${'{{metric.value}}'}`]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: ["Example Result: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: "monitoring.googleapis.com/uptime_check/http_status has this value: 502"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
        children: "Patterns:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{metric.value}}'}`
        }), " = value of the metric/point"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{metric.type}}'}`
        }), " = metric type e.g. compute.googleapis.com/instance/cpu/usage_time"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{metric.name}}'}`
        }), " = name part of metric e.g. instance/cpu/usage_time"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{metric.service}}'}`
        }), " = service part of metric e.g. compute"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{metric.label.label_name}}'}`
        }), " = Metric label metadata e.g. metric.label.instance_name"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          children: `${'{{resource.label.label_name}}'}`
        }), " = Resource label metadata e.g. resource.label.zone"]
      })]
    })
  }));
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/CloudMonitoringCheatSheet.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudMonitoringCheatSheet)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _p, _code, _br, _code2, _br2, _br3, _label, _br4, _li, _li2, _li3, _li4, _li5, _li6, _li7, _li8, _li9, _li10, _li11, _li12;





class CloudMonitoringCheatSheet extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
        children: "Cloud Monitoring alias patterns"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: "Format the legend keys any way you want by using alias patterns. Format the legend keys any way you want by using alias patterns."
        })), "Example:", _code || (_code = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
          children: `${'{{metric.name}} - {{metric.label.instance_name}}'}`
        })), _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})), "Result: \xA0\xA0", _code2 || (_code2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
          children: "cpu/usage_time - server1-europe-west-1"
        })), _br2 || (_br2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})), _br3 || (_br3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})), _label || (_label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
          children: "Patterns"
        })), _br4 || (_br4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
              list-style: none;
            `,
          children: [_li || (_li = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metric.type}}'}`
            }), " = metric type e.g. compute.googleapis.com/instance/cpu/usage_time"]
          })), _li2 || (_li2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metric.name}}'}`
            }), " = name part of metric e.g. instance/cpu/usage_time"]
          })), _li3 || (_li3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metric.service}}'}`
            }), " = service part of metric e.g. compute"]
          })), _li4 || (_li4 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metric.label.label_name}}'}`
            }), " = Metric label metadata e.g. metric.label.instance_name"]
          })), _li5 || (_li5 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{resource.label.label_name}}'}`
            }), " = Resource label metadata e.g. resource.label.zone"]
          })), _li6 || (_li6 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metadata.system_labels.name}}'}`
            }), " = Meta data system labels e.g. metadata.system_labels.name. For this to work, the needs to be included in the group by"]
          })), _li7 || (_li7 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{metadata.user_labels.name}}'}`
            }), " = Meta data user labels e.g. metadata.user_labels.name. For this to work, the needs to be included in the group by"]
          })), _li8 || (_li8 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{bucket}}'}`
            }), " = bucket boundary for distribution metrics when using a heatmap in Grafana"]
          })), _li9 || (_li9 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{project}}'}`
            }), " = The project name that was specified in the query editor"]
          })), _li10 || (_li10 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{service}}'}`
            }), " = The service id that was specified in the SLO query editor"]
          })), _li11 || (_li11 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{slo}}'}`
            }), " = The SLO id that was specified in the SLO query editor"]
          })), _li12 || (_li12 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
              children: `${'{{selector}}'}`
            }), " = The Selector function that was specified in the SLO query editor"]
          }))]
        })]
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/ConfigEditor/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




class ConfigEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_google_sdk__WEBPACK_IMPORTED_MODULE_1__.ConnectionConfig, Object.assign({}, this.props))
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Fields.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditorField": () => (/* binding */ QueryEditorField),
/* harmony export */   "QueryEditorRow": () => (/* binding */ QueryEditorRow),
/* harmony export */   "VariableQueryField": () => (/* binding */ VariableQueryField)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["children", "label", "tooltip", "fillComponent", "noFillEnd", "labelWidth", "htmlFor"],
      _excluded2 = ["children", "label", "tooltip", "labelWidth"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const VariableQueryField = ({
  label,
  onChange,
  value,
  options,
  allowCustomValue = false
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
    label: label,
    labelWidth: 20,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select, {
      width: 25,
      allowCustomValue: allowCustomValue,
      value: value,
      onChange: ({
        value
      }) => onChange(value),
      options: options
    })
  });
};
const QueryEditorRow = _ref => {
  let {
    children,
    label,
    tooltip,
    fillComponent,
    noFillEnd = false,
    labelWidth = _constants__WEBPACK_IMPORTED_MODULE_3__.LABEL_WIDTH,
    htmlFor
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", Object.assign({
    className: "gf-form"
  }, rest, {
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, {
      width: labelWidth,
      tooltip: tooltip,
      htmlFor: htmlFor,
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
          margin-right: 4px;
        `,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
        spacing: "xs",
        width: "auto",
        children: children
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: 'gf-form--grow',
      children: noFillEnd || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: 'gf-form-label gf-form-label--grow',
        children: fillComponent
      })
    })]
  }));
};
const QueryEditorField = _ref2 => {
  let {
    children,
    label,
    tooltip,
    labelWidth = _constants__WEBPACK_IMPORTED_MODULE_3__.INNER_LABEL_WIDTH
  } = _ref2,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, Object.assign({
      width: labelWidth,
      tooltip: tooltip
    }, rest, {
      children: label
    })), children]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/GraphPeriod.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphPeriod": () => (/* binding */ GraphPeriod)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _code;








const GraphPeriod = ({
  refId,
  onChange,
  graphPeriod,
  variableOptionGroup
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(___WEBPACK_IMPORTED_MODULE_3__.QueryEditorRow, {
      label: "Graph period",
      htmlFor: `${refId}-graph-period`,
      tooltip: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: ["Set ", _code || (_code = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
          children: "graph_period"
        })), " which forces a preferred period between points. Automatically set to the current interval if left blank."]
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, {
        "data-testid": `${refId}-switch-graph-period`,
        value: graphPeriod !== 'disabled',
        onChange: e => onChange(e.currentTarget.checked ? '' : 'disabled')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.PeriodSelect, {
        inputId: `${refId}-graph-period`,
        templateVariableOptions: variableOptionGroup.options,
        current: graphPeriod,
        onChange: onChange,
        selectWidth: _constants__WEBPACK_IMPORTED_MODULE_2__.SELECT_WIDTH,
        disabled: graphPeriod === 'disabled',
        aligmentPeriods: _constants__WEBPACK_IMPORTED_MODULE_2__.GRAPH_PERIODS
      })]
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/GroupBy.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupBy": () => (/* binding */ GroupBy)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const GroupBy = ({
  refId,
  labels: groupBys = [],
  query,
  onChange,
  variableOptionGroup,
  metricDescriptor
}) => {
  var _query$groupBys, _query$groupBys2;

  const options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [variableOptionGroup, ...(0,_functions__WEBPACK_IMPORTED_MODULE_3__.labelsToGroupedOptions)([...groupBys, ..._constants__WEBPACK_IMPORTED_MODULE_2__.SYSTEM_LABELS])], [groupBys, variableOptionGroup]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(___WEBPACK_IMPORTED_MODULE_4__.QueryEditorRow, {
    label: "Group by",
    tooltip: "You can reduce the amount of data returned for a metric by combining different time series. To combine multiple time series, you can specify a grouping and a function. Grouping is done on the basis of labels. The grouping function is used to combine the time series in the group into a single time series.",
    htmlFor: `${refId}-group-by`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.MultiSelect, {
      inputId: `${refId}-group-by`,
      width: _constants__WEBPACK_IMPORTED_MODULE_2__.INPUT_WIDTH,
      placeholder: "Choose label",
      options: options,
      value: (_query$groupBys = query.groupBys) !== null && _query$groupBys !== void 0 ? _query$groupBys : [],
      onChange: options => {
        onChange(Object.assign({}, query, {
          groupBys: options.map(o => o.value)
        }));
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Aggregation, {
      metricDescriptor: metricDescriptor,
      templateVariableOptions: variableOptionGroup.options,
      crossSeriesReducer: query.crossSeriesReducer,
      groupBys: (_query$groupBys2 = query.groupBys) !== null && _query$groupBys2 !== void 0 ? _query$groupBys2 : [],
      onChange: crossSeriesReducer => onChange(Object.assign({}, query, {
        crossSeriesReducer
      })),
      refId: refId
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/LabelFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelFilter": () => (/* binding */ LabelFilter)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["value", "isOpen", "invalid"],
      _excluded2 = ["value"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const operators = ['=', '!=', '=~', '!=~'];
const FilterButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((_ref, ref) => {
  let rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, Object.assign({}, rest, {
    ref: ref,
    variant: "secondary",
    icon: "plus",
    "aria-label": "Add filter"
  }));
});
FilterButton.displayName = 'FilterButton';
const OperatorButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((_ref2, ref) => {
  let {
    value
  } = _ref2,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, Object.assign({}, rest, {
    ref: ref,
    variant: "secondary",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
      className: "query-segment-operator",
      children: value === null || value === void 0 ? void 0 : value.label
    })
  }));
});
OperatorButton.displayName = 'OperatorButton';
const LabelFilter = ({
  labels = {},
  filters: filterArray,
  onChange,
  variableOptionGroup
}) => {
  var _AddFilter;

  const filters = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_functions__WEBPACK_IMPORTED_MODULE_5__.stringArrayToFilters)(filterArray), [filterArray]);
  const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [variableOptionGroup, ...(0,_functions__WEBPACK_IMPORTED_MODULE_5__.labelsToGroupedOptions)(Object.keys(labels))], [labels, variableOptionGroup]);
  const filtersToStringArray = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(filters => {
    const strArr = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(filters.map(({
      key,
      operator,
      value,
      condition
    }) => [key, operator, value, condition]));
    return strArr.slice(0, strArr.length - 1);
  }, []);

  const AddFilter = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
      allowCustomValue: true,
      options: [variableOptionGroup, ...(0,_functions__WEBPACK_IMPORTED_MODULE_5__.labelsToGroupedOptions)(Object.keys(labels))],
      onChange: ({
        value: key = ''
      }) => onChange(filtersToStringArray([...filters, {
        key,
        operator: '=',
        condition: 'AND',
        value: ''
      }])),
      menuPlacement: "bottom",
      renderControl: FilterButton
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.QueryEditorRow, {
    label: "Filter",
    tooltip: 'To reduce the amount of data charted, apply a filter. A filter has three components: a label, a comparison, and a value. The comparison can be an equality, inequality, or regular expression.',
    noFillEnd: filters.length > 1,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.VerticalGroup, {
      spacing: "xs",
      width: "auto",
      children: [filters.map(({
        key,
        operator,
        value,
        condition
      }, index) => {
        // Add the current key and value as options if they are manually entered
        const keyPresent = options.some(op => {
          if (op.options) {
            return options.some(opp => opp.label === key);
          }

          return op.label === key;
        });

        if (!keyPresent) {
          options.push({
            label: key,
            value: key
          });
        }

        const valueOptions = labels.hasOwnProperty(key) ? [variableOptionGroup, ...labels[key].map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)] : [variableOptionGroup];
        const valuePresent = valueOptions.some(op => {
          return op.label === value;
        });

        if (!valuePresent) {
          valueOptions.push({
            label: value,
            value
          });
        }

        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
          spacing: "xs",
          width: "auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            "aria-label": "Filter label key",
            width: _constants__WEBPACK_IMPORTED_MODULE_4__.SELECT_WIDTH,
            allowCustomValue: true,
            formatCreateLabel: v => `Use label key: ${v}`,
            value: key,
            options: options,
            onChange: ({
              value: key = ''
            }) => {
              onChange(filtersToStringArray(filters.map((f, i) => i === index ? {
                key,
                operator,
                condition,
                value: ''
              } : f)));
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            value: operator,
            options: operators.map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption),
            onChange: ({
              value: operator = '='
            }) => onChange(filtersToStringArray(filters.map((f, i) => i === index ? Object.assign({}, f, {
              operator
            }) : f))),
            menuPlacement: "bottom",
            renderControl: OperatorButton
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
            "aria-label": "Filter label value",
            width: _constants__WEBPACK_IMPORTED_MODULE_4__.SELECT_WIDTH,
            formatCreateLabel: v => `Use label value: ${v}`,
            allowCustomValue: true,
            value: value,
            placeholder: "add filter value",
            options: valueOptions,
            onChange: ({
              value = ''
            }) => onChange(filtersToStringArray(filters.map((f, i) => i === index ? Object.assign({}, f, {
              value
            }) : f)))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: "secondary",
            size: "md",
            icon: "trash-alt",
            "aria-label": "Remove",
            onClick: () => onChange(filtersToStringArray(filters.filter((_, i) => i !== index)))
          }), index + 1 === filters.length && Object.values(filters).every(({
            value
          }) => value) && (_AddFilter || (_AddFilter = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(AddFilter, {})))]
        }, index);
      }), !filters.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(AddFilter, {})]
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/MQLQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MQLQueryEditor": () => (/* binding */ MQLQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function MQLQueryEditor({
  query,
  onChange,
  onRunQuery
}) {
  const onKeyDown = event => {
    if (event.key === 'Enter' && (event.shiftKey || event.ctrlKey)) {
      event.preventDefault();
      onRunQuery();
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, {
      name: "Query",
      className: "slate-query-field",
      value: query,
      rows: 10,
      placeholder: "Enter a Cloud Monitoring MQL query (Run with Shift+Enter)",
      onBlur: onRunQuery,
      onChange: e => onChange(e.currentTarget.value),
      onKeyDown: onKeyDown
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/MetricQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetricQueryEditor": () => (/* binding */ MetricQueryEditor),
/* harmony export */   "defaultQuery": () => (/* binding */ defaultQuery),
/* harmony export */   "defaultState": () => (/* binding */ defaultState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var _GraphPeriod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/GraphPeriod.tsx");
/* harmony import */ var _MQLQueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MQLQueryEditor.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const defaultState = {
  labels: {}
};
const defaultQuery = dataSource => ({
  editorMode: _types__WEBPACK_IMPORTED_MODULE_2__.EditorMode.Visual,
  projectName: dataSource.getDefaultProject(),
  metricType: '',
  metricKind: _types__WEBPACK_IMPORTED_MODULE_2__.MetricKind.GAUGE,
  valueType: '',
  crossSeriesReducer: 'REDUCE_MEAN',
  alignmentPeriod: 'cloud-monitoring-auto',
  perSeriesAligner: _types__WEBPACK_IMPORTED_MODULE_2__.AlignmentTypes.ALIGN_MEAN,
  groupBys: [],
  filters: [],
  aliasBy: '',
  query: '',
  preprocessor: _types__WEBPACK_IMPORTED_MODULE_2__.PreprocessorType.None
});

function Editor({
  refId,
  query,
  datasource,
  onChange: onQueryChange,
  onRunQuery,
  customMetaData,
  variableOptionGroup
}) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultState);
  const {
    projectName,
    metricType,
    groupBys,
    editorMode,
    crossSeriesReducer
  } = query;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (projectName && metricType) {
      datasource.getLabels(metricType, refId, projectName).then(labels => setState(prevState => Object.assign({}, prevState, {
        labels
      })));
    }
  }, [datasource, groupBys, metricType, projectName, refId, crossSeriesReducer]);
  const onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(metricQuery => {
    onQueryChange(Object.assign({}, query, metricQuery));
    onRunQuery();
  }, [onQueryChange, onRunQuery, query]);
  const onMetricTypeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({
    valueType,
    metricKind,
    type
  }) => {
    const preprocessor = metricKind === _types__WEBPACK_IMPORTED_MODULE_2__.MetricKind.GAUGE || valueType === _types__WEBPACK_IMPORTED_MODULE_2__.ValueTypes.DISTRIBUTION ? _types__WEBPACK_IMPORTED_MODULE_2__.PreprocessorType.None : _types__WEBPACK_IMPORTED_MODULE_2__.PreprocessorType.Rate;
    const {
      perSeriesAligner
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getAlignmentPickerData)(valueType, metricKind, state.perSeriesAligner, preprocessor);
    onChange(Object.assign({}, query, {
      perSeriesAligner,
      metricType: type,
      valueType,
      metricKind,
      preprocessor
    }));
  }, [onChange, query, state]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.Project, {
      refId: refId,
      templateVariableOptions: variableOptionGroup.options,
      projectName: projectName,
      datasource: datasource,
      onChange: projectName => {
        onChange(Object.assign({}, query, {
          projectName
        }));
      }
    }), editorMode === _types__WEBPACK_IMPORTED_MODULE_2__.EditorMode.Visual && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.VisualMetricQueryEditor, {
      refId: refId,
      labels: state.labels,
      variableOptionGroup: variableOptionGroup,
      customMetaData: customMetaData,
      onMetricTypeChange: onMetricTypeChange,
      onChange: onChange,
      datasource: datasource,
      query: query
    }), editorMode === _types__WEBPACK_IMPORTED_MODULE_2__.EditorMode.MQL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MQLQueryEditor__WEBPACK_IMPORTED_MODULE_4__.MQLQueryEditor, {
        onChange: q => onQueryChange(Object.assign({}, query, {
          query: q
        })),
        onRunQuery: onRunQuery,
        query: query.query
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_GraphPeriod__WEBPACK_IMPORTED_MODULE_3__.GraphPeriod, {
        onChange: graphPeriod => onQueryChange(Object.assign({}, query, {
          graphPeriod
        })),
        graphPeriod: query.graphPeriod,
        refId: refId,
        variableOptionGroup: variableOptionGroup
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.AliasBy, {
      refId: refId,
      value: query.aliasBy,
      onChange: aliasBy => {
        onChange(Object.assign({}, query, {
          aliasBy
        }));
      }
    })]
  });
}

const MetricQueryEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Editor);

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Metrics.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Metrics": () => (/* binding */ Metrics)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









function Metrics(props) {
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    metricDescriptors: [],
    metrics: [],
    services: [],
    service: '',
    metric: '',
    projectName: null
  });
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const selectStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.getSelectStyles)(theme);
  const customStyle = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const {
    services,
    service,
    metrics,
    metricDescriptors
  } = state;
  const {
    metricType,
    templateVariableOptions,
    projectName,
    templateSrv,
    datasource,
    onChange,
    children
  } = props;
  const getSelectedMetricDescriptor = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((metricDescriptors, metricType) => {
    return metricDescriptors.find(md => md.type === templateSrv.replace(metricType));
  }, [templateSrv]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const getMetricsList = metricDescriptors => {
      const selectedMetricDescriptor = getSelectedMetricDescriptor(metricDescriptors, metricType);

      if (!selectedMetricDescriptor) {
        return [];
      }

      const metricsByService = metricDescriptors.filter(m => m.service === selectedMetricDescriptor.service).map(m => ({
        service: m.service,
        value: m.type,
        label: m.displayName,
        component: function optionComponent() {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: customStyle,
              children: m.type
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: selectStyles.optionDescription,
              children: m.description
            })]
          });
        }
      }));
      return metricsByService;
    };

    const loadMetricDescriptors = async () => {
      if (projectName) {
        const metricDescriptors = await datasource.getMetricTypes(projectName);
        const services = getServicesList(metricDescriptors);
        const metrics = getMetricsList(metricDescriptors);
        const service = metrics.length > 0 ? metrics[0].service : '';
        const metricDescriptor = getSelectedMetricDescriptor(metricDescriptors, metricType);
        setState(prevState => Object.assign({}, prevState, {
          metricDescriptors,
          services,
          metrics,
          service: service,
          metricDescriptor
        }));
      }
    };

    loadMetricDescriptors();
  }, [datasource, getSelectedMetricDescriptor, metricType, projectName, customStyle, selectStyles.optionDescription]);

  const onServiceChange = ({
    value: service
  }) => {
    const metrics = metricDescriptors.filter(m => m.service === templateSrv.replace(service)).map(m => ({
      service: m.service,
      value: m.type,
      label: m.displayName,
      description: m.description
    }));

    if (metrics.length > 0 && !metrics.some(m => m.value === templateSrv.replace(metricType))) {
      onMetricTypeChange(metrics[0], {
        service,
        metrics
      });
    } else {
      setState(Object.assign({}, state, {
        service,
        metrics
      }));
    }
  };

  const onMetricTypeChange = ({
    value
  }, extra = {}) => {
    const metricDescriptor = getSelectedMetricDescriptor(state.metricDescriptors, value);
    setState(Object.assign({}, state, {
      metricDescriptor
    }, extra));
    onChange(Object.assign({}, metricDescriptor, {
      type: value
    }));
  };

  const getServicesList = metricDescriptors => {
    const services = metricDescriptors.map(m => ({
      value: m.service,
      label: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.startCase)(m.serviceShortName)
    }));
    return services.length > 0 ? (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqBy)(services, s => s.value) : [];
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(___WEBPACK_IMPORTED_MODULE_5__.QueryEditorRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.QueryEditorField, {
        labelWidth: _constants__WEBPACK_IMPORTED_MODULE_4__.LABEL_WIDTH,
        label: "Service",
        htmlFor: `${props.refId}-service`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
          width: _constants__WEBPACK_IMPORTED_MODULE_4__.SELECT_WIDTH,
          onChange: onServiceChange,
          value: [...services, ...templateVariableOptions].find(s => s.value === service),
          options: [{
            label: 'Template Variables',
            options: templateVariableOptions
          }, ...services],
          placeholder: "Select Services",
          inputId: `${props.refId}-service`
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(___WEBPACK_IMPORTED_MODULE_5__.QueryEditorField, {
        label: "Metric name",
        labelWidth: _constants__WEBPACK_IMPORTED_MODULE_4__.INNER_LABEL_WIDTH,
        htmlFor: `${props.refId}-select-metric`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
          width: _constants__WEBPACK_IMPORTED_MODULE_4__.SELECT_WIDTH,
          onChange: onMetricTypeChange,
          value: [...metrics, ...templateVariableOptions].find(s => s.value === metricType),
          options: [{
            label: 'Template Variables',
            options: templateVariableOptions
          }, ...metrics],
          placeholder: "Select Metric",
          inputId: `${props.refId}-select-metric`
        })
      })]
    }), children(state.metricDescriptor)]
  });
}

const getStyles = theme => _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  label: grafana-select-option-description;
  font-weight: normal;
  font-style: italic;
  color: ${theme.colors.text.secondary};
`;

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/PeriodSelect.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodSelect": () => (/* binding */ PeriodSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



function PeriodSelect({
  inputId,
  templateVariableOptions,
  onChange,
  current,
  selectWidth,
  disabled,
  aligmentPeriods
}) {
  const options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => aligmentPeriods.map(ap => Object.assign({}, ap, {
    label: ap.text
  })), [aligmentPeriods]);
  const visibleOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => options.filter(ap => !ap.hidden), [options]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
    width: selectWidth,
    onChange: ({
      value
    }) => onChange(value),
    value: [...options, ...templateVariableOptions].find(s => s.value === current),
    options: [{
      label: 'Template Variables',
      options: templateVariableOptions
    }, {
      label: 'Aggregations',
      expanded: true,
      options: visibleOptions
    }],
    placeholder: "Select Period",
    inputId: inputId,
    disabled: disabled,
    allowCustomValue: true
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Preprocessor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Preprocessor": () => (/* binding */ Preprocessor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const NONE_OPTION = {
  label: 'None',
  value: _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.None
};
const Preprocessor = ({
  query,
  metricDescriptor,
  onChange
}) => {
  var _query$preprocessor;

  const options = useOptions(metricDescriptor);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.QueryEditorRow, {
    label: "Pre-processing",
    tooltip: "Preprocessing options are displayed when the selected metric has a metric kind of delta or cumulative. The specific options available are determined by the metic's value type. If you select 'Rate', data points are aligned and converted to a rate per time series. If you select 'Delta', data points are aligned by their delta (difference) per time series",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, {
      onChange: value => {
        const {
          valueType,
          metricKind,
          perSeriesAligner: psa
        } = query;
        const {
          perSeriesAligner
        } = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getAlignmentPickerData)(valueType, metricKind, psa, value);
        onChange(Object.assign({}, query, {
          preprocessor: value,
          perSeriesAligner
        }));
      },
      value: (_query$preprocessor = query.preprocessor) !== null && _query$preprocessor !== void 0 ? _query$preprocessor : _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.None,
      options: options
    })
  });
};

const useOptions = metricDescriptor => {
  const metricKind = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.metricKind;
  const valueType = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.valueType;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!metricKind || metricKind === _types__WEBPACK_IMPORTED_MODULE_3__.MetricKind.GAUGE || valueType === _types__WEBPACK_IMPORTED_MODULE_3__.ValueTypes.DISTRIBUTION) {
      return [NONE_OPTION];
    }

    const options = [NONE_OPTION, {
      label: 'Rate',
      value: _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.Rate,
      description: 'Data points are aligned and converted to a rate per time series'
    }];
    return metricKind === _types__WEBPACK_IMPORTED_MODULE_3__.MetricKind.CUMULATIVE ? [...options, {
      label: 'Delta',
      value: _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.Delta,
      description: 'Data points are aligned by their delta (difference) per time series'
    }] : options;
  }, [metricKind, valueType]);
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/Project.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function Project({
  refId,
  projectName,
  datasource,
  onChange,
  templateVariableOptions
}) {
  const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    datasource.getProjects().then(projects => setProjects(projects));
  }, [datasource]);
  const projectsWithTemplateVariables = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [projects, {
    label: 'Template Variables',
    options: templateVariableOptions
  }, ...projects], [projects, templateVariableOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_3__.QueryEditorRow, {
    label: "Project",
    htmlFor: `${refId}-project`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      width: _constants__WEBPACK_IMPORTED_MODULE_2__.SELECT_WIDTH,
      allowCustomValue: true,
      formatCreateLabel: v => `Use project: ${v}`,
      onChange: ({
        value
      }) => onChange(value),
      options: projectsWithTemplateVariables,
      value: {
        value: projectName,
        label: projectName
      },
      placeholder: "Select Project",
      inputId: `${refId}-project`
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var _MetricQueryEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MetricQueryEditor.tsx");
/* harmony import */ var _SLO_SLOQueryEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLOQueryEditor.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["hide", "refId", "datasource", "key", "queryType", "maxLines", "metric"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













class QueryEditor extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  async UNSAFE_componentWillMount() {
    const {
      datasource,
      query
    } = this.props; // Unfortunately, migrations like this need to go UNSAFE_componentWillMount. As soon as there's
    // migration hook for this module.ts, we can do the migrations there instead.

    if (!this.props.query.hasOwnProperty('metricQuery')) {
      const _ref = this.props.query,
            metricQuery = _objectWithoutPropertiesLoose(_ref, _excluded);

      this.props.query.metricQuery = metricQuery;
    }

    if (!this.props.query.hasOwnProperty('queryType')) {
      this.props.query.queryType = _types__WEBPACK_IMPORTED_MODULE_5__.QueryType.METRICS;
    }

    await datasource.ensureGCEDefaultProject();

    if (!query.metricQuery.projectName) {
      this.props.query.metricQuery.projectName = datasource.getDefaultProject();
    }
  }

  onQueryChange(prop, value) {
    this.props.onChange(Object.assign({}, this.props.query, {
      [prop]: value
    }));
    this.props.onRunQuery();
  }

  render() {
    var _this$props$data, _this$props$data2, _meta$custom;

    const {
      datasource,
      query,
      onRunQuery,
      onChange
    } = this.props;
    const metricQuery = Object.assign({}, (0,_MetricQueryEditor__WEBPACK_IMPORTED_MODULE_6__.defaultQuery)(datasource), query.metricQuery);
    const sloQuery = Object.assign({}, (0,_SLO_SLOQueryEditor__WEBPACK_IMPORTED_MODULE_7__.defaultQuery)(datasource), query.sloQuery);
    const queryType = query.queryType || _types__WEBPACK_IMPORTED_MODULE_5__.QueryType.METRICS;
    const meta = (_this$props$data = this.props.data) !== null && _this$props$data !== void 0 && _this$props$data.series.length ? (_this$props$data2 = this.props.data) === null || _this$props$data2 === void 0 ? void 0 : _this$props$data2.series[0].meta : {};
    const customMetaData = (_meta$custom = meta === null || meta === void 0 ? void 0 : meta.custom) !== null && _meta$custom !== void 0 ? _meta$custom : {};
    const variableOptionGroup = {
      label: 'Template Variables',
      expanded: false,
      options: datasource.getVariables().map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_8__.QueryEditorRow, {
        label: "Query type",
        fillComponent: query.queryType !== _types__WEBPACK_IMPORTED_MODULE_5__.QueryType.SLO && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
                  margin-left: auto;
                `,
          icon: "edit",
          onClick: () => this.onQueryChange('metricQuery', Object.assign({}, metricQuery, {
            editorMode: metricQuery.editorMode === _types__WEBPACK_IMPORTED_MODULE_5__.EditorMode.MQL ? _types__WEBPACK_IMPORTED_MODULE_5__.EditorMode.Visual : _types__WEBPACK_IMPORTED_MODULE_5__.EditorMode.MQL
          })),
          children: metricQuery.editorMode === _types__WEBPACK_IMPORTED_MODULE_5__.EditorMode.MQL ? 'Switch to builder' : 'Edit MQL'
        }),
        htmlFor: `${query.refId}-query-type`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
          width: _constants__WEBPACK_IMPORTED_MODULE_4__.SELECT_WIDTH,
          value: queryType,
          options: _constants__WEBPACK_IMPORTED_MODULE_4__.QUERY_TYPES,
          onChange: ({
            value
          }) => {
            onChange(Object.assign({}, query, {
              sloQuery,
              queryType: value
            }));
            onRunQuery();
          },
          inputId: `${query.refId}-query-type`
        })
      }), queryType === _types__WEBPACK_IMPORTED_MODULE_5__.QueryType.METRICS && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_8__.MetricQueryEditor, {
        refId: query.refId,
        variableOptionGroup: variableOptionGroup,
        customMetaData: customMetaData,
        onChange: metricQuery => {
          this.props.onChange(Object.assign({}, this.props.query, {
            metricQuery
          }));
        },
        onRunQuery: onRunQuery,
        datasource: datasource,
        query: metricQuery
      }), queryType === _types__WEBPACK_IMPORTED_MODULE_5__.QueryType.SLO && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_8__.SLOQueryEditor, {
        refId: query.refId,
        variableOptionGroup: variableOptionGroup,
        customMetaData: customMetaData,
        onChange: query => this.onQueryChange('sloQuery', query),
        onRunQuery: onRunQuery,
        datasource: datasource,
        query: sloQuery
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLO.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SLO": () => (/* binding */ SLO)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const SLO = ({
  refId,
  query,
  templateVariableOptions,
  onChange,
  datasource
}) => {
  const [slos, setSLOs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    projectName,
    serviceId
  } = query;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!projectName || !serviceId) {
      return;
    }

    datasource.getServiceLevelObjectives(projectName, serviceId).then(sloIds => {
      setSLOs([{
        label: 'Template Variables',
        options: templateVariableOptions
      }, ...sloIds]);
    });
  }, [datasource, projectName, serviceId, templateVariableOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
    label: "SLO",
    htmlFor: `${refId}-slo`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      inputId: `${refId}-slo`,
      width: _constants__WEBPACK_IMPORTED_MODULE_3__.SELECT_WIDTH,
      allowCustomValue: true,
      value: (query === null || query === void 0 ? void 0 : query.sloId) && {
        value: query === null || query === void 0 ? void 0 : query.sloId,
        label: (query === null || query === void 0 ? void 0 : query.sloName) || (query === null || query === void 0 ? void 0 : query.sloId)
      },
      placeholder: "Select SLO",
      options: slos,
      onChange: async ({
        value: sloId = '',
        label: sloName = ''
      }) => {
        const slos = await datasource.getServiceLevelObjectives(projectName, serviceId);
        const slo = slos.find(({
          value
        }) => value === datasource.templateSrv.replace(sloId));
        onChange(Object.assign({}, query, {
          sloId,
          sloName,
          goal: slo === null || slo === void 0 ? void 0 : slo.goal
        }));
      }
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLOQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SLOQueryEditor": () => (/* binding */ SLOQueryEditor),
/* harmony export */   "defaultQuery": () => (/* binding */ defaultQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");








const defaultQuery = dataSource => ({
  projectName: dataSource.getDefaultProject(),
  alignmentPeriod: 'cloud-monitoring-auto',
  perSeriesAligner: _types__WEBPACK_IMPORTED_MODULE_3__.AlignmentTypes.ALIGN_MEAN,
  aliasBy: '',
  selectorName: 'select_slo_health',
  serviceId: '',
  serviceName: '',
  sloId: '',
  sloName: ''
});
function SLOQueryEditor({
  refId,
  query,
  datasource,
  onChange,
  variableOptionGroup,
  customMetaData
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Project, {
      refId: refId,
      templateVariableOptions: variableOptionGroup.options,
      projectName: query.projectName,
      datasource: datasource,
      onChange: projectName => onChange(Object.assign({}, query, {
        projectName
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Service, {
      refId: refId,
      datasource: datasource,
      templateVariableOptions: variableOptionGroup.options,
      query: query,
      onChange: onChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.SLO, {
      refId: refId,
      datasource: datasource,
      templateVariableOptions: variableOptionGroup.options,
      query: query,
      onChange: onChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.Selector, {
      refId: refId,
      datasource: datasource,
      templateVariableOptions: variableOptionGroup.options,
      query: query,
      onChange: onChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.QueryEditorRow, {
      label: "Alignment period",
      htmlFor: `${refId}-alignment-period`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.PeriodSelect, {
        inputId: `${refId}-alignment-period`,
        templateVariableOptions: variableOptionGroup.options,
        selectWidth: _constants__WEBPACK_IMPORTED_MODULE_2__.SELECT_WIDTH,
        current: query.alignmentPeriod,
        onChange: period => onChange(Object.assign({}, query, {
          alignmentPeriod: period
        })),
        aligmentPeriods: _constants__WEBPACK_IMPORTED_MODULE_2__.ALIGNMENT_PERIODS
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.AlignmentPeriodLabel, {
        datasource: datasource,
        customMetaData: customMetaData
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.AliasBy, {
      refId: refId,
      value: query.aliasBy,
      onChange: aliasBy => onChange(Object.assign({}, query, {
        aliasBy
      }))
    })]
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/SLO/Selector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Selector": () => (/* binding */ Selector)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Selector = ({
  refId,
  query,
  templateVariableOptions,
  onChange,
  datasource
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
    label: "Selector",
    htmlFor: `${refId}-slo-selector`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      inputId: `${refId}-slo-selector`,
      width: _constants__WEBPACK_IMPORTED_MODULE_3__.SELECT_WIDTH,
      allowCustomValue: true,
      value: [..._constants__WEBPACK_IMPORTED_MODULE_3__.SELECTORS, ...templateVariableOptions].find(s => {
        var _ref;

        return (_ref = s.value === (query === null || query === void 0 ? void 0 : query.selectorName)) !== null && _ref !== void 0 ? _ref : '';
      }),
      options: [{
        label: 'Template Variables',
        options: templateVariableOptions
      }, ..._constants__WEBPACK_IMPORTED_MODULE_3__.SELECTORS],
      onChange: ({
        value: selectorName
      }) => onChange(Object.assign({}, query, {
        selectorName: selectorName !== null && selectorName !== void 0 ? selectorName : ''
      }))
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/SLO/Service.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Service": () => (/* binding */ Service)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Service = ({
  refId,
  query,
  templateVariableOptions,
  onChange,
  datasource
}) => {
  const [services, setServices] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    projectName
  } = query;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!projectName) {
      return;
    }

    datasource.getSLOServices(projectName).then(services => {
      setServices([{
        label: 'Template Variables',
        options: templateVariableOptions
      }, ...services]);
    });
  }, [datasource, projectName, templateVariableOptions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.QueryEditorRow, {
    label: "Service",
    htmlFor: `${refId}-slo-service`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      inputId: `${refId}-slo-service`,
      width: _constants__WEBPACK_IMPORTED_MODULE_3__.SELECT_WIDTH,
      allowCustomValue: true,
      value: (query === null || query === void 0 ? void 0 : query.serviceId) && {
        value: query === null || query === void 0 ? void 0 : query.serviceId,
        label: (query === null || query === void 0 ? void 0 : query.serviceName) || (query === null || query === void 0 ? void 0 : query.serviceId)
      },
      placeholder: "Select service",
      options: services,
      onChange: ({
        value: serviceId = '',
        label: serviceName = ''
      }) => onChange(Object.assign({}, query, {
        serviceId,
        serviceName,
        sloId: ''
      }))
    })
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/SLO/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SLO": () => (/* reexport safe */ _SLO__WEBPACK_IMPORTED_MODULE_1__.SLO),
/* harmony export */   "Selector": () => (/* reexport safe */ _Selector__WEBPACK_IMPORTED_MODULE_2__.Selector),
/* harmony export */   "Service": () => (/* reexport safe */ _Service__WEBPACK_IMPORTED_MODULE_0__.Service)
/* harmony export */ });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/Service.tsx");
/* harmony import */ var _SLO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLO.tsx");
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/Selector.tsx");




/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/VariableQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudMonitoringVariableQueryEditor": () => (/* binding */ CloudMonitoringVariableQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;

const _excluded = ["metricDescriptors", "labels", "metricTypes", "services"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class CloudMonitoringVariableQueryEditor extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "queryTypes", [{
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Projects,
      label: 'Projects'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Services,
      label: 'Services'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.MetricTypes,
      label: 'Metric Types'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelKeys,
      label: 'Label Keys'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelValues,
      label: 'Label Values'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.ResourceTypes,
      label: 'Resource Types'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Aggregations,
      label: 'Aggregations'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Aligners,
      label: 'Aligners'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.AlignmentPeriods,
      label: 'Alignment Periods'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Selectors,
      label: 'Selectors'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.SLOServices,
      label: 'SLO Services'
    }, {
      value: _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.SLO,
      label: 'Service Level Objectives (SLO)'
    }]);

    _defineProperty(this, "defaults", {
      selectedQueryType: this.queryTypes[0].value,
      metricDescriptors: [],
      selectedService: '',
      selectedMetricType: '',
      labels: [],
      labelKey: '',
      metricTypes: [],
      services: [],
      sloServices: [],
      selectedSLOService: '',
      projects: [],
      projectName: '',
      loading: true
    });

    _defineProperty(this, "onPropsChange", () => {
      const _this$state = this.state,
            queryModel = _objectWithoutPropertiesLoose(_this$state, _excluded);

      this.props.onChange(Object.assign({}, queryModel, {
        refId: 'CloudMonitoringVariableQueryEditor-VariableQuery'
      }));
    });

    this.state = Object.assign(this.defaults, {
      projectName: this.props.datasource.getDefaultProject()
    }, this.props.query);
  }

  async componentDidMount() {
    const projects = await this.props.datasource.getProjects();
    const metricDescriptors = await this.props.datasource.getMetricTypes(this.props.query.projectName || this.props.datasource.getDefaultProject());
    const services = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.extractServicesFromMetricDescriptors)(metricDescriptors).map(m => ({
      value: m.service,
      label: m.serviceShortName
    }));
    let selectedService = '';

    if (services.some(s => s.value === (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.selectedService))) {
      selectedService = this.state.selectedService;
    } else if (services && services.length > 0) {
      selectedService = services[0].value;
    }

    const {
      metricTypes,
      selectedMetricType
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getMetricTypes)(metricDescriptors, this.state.selectedMetricType, (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.selectedMetricType), (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(selectedService));
    const sloServices = await this.props.datasource.getSLOServices(this.state.projectName);
    const state = Object.assign({
      services,
      selectedService,
      metricTypes,
      selectedMetricType,
      metricDescriptors,
      projects
    }, await this.getLabels(selectedMetricType, this.state.projectName), {
      sloServices,
      loading: false
    });
    this.setState(state, () => this.onPropsChange());
  }

  async onQueryTypeChange(queryType) {
    const state = Object.assign({
      selectedQueryType: queryType
    }, await this.getLabels(this.state.selectedMetricType, this.state.projectName, queryType));
    this.setState(state);
  }

  async onProjectChange(projectName) {
    const metricDescriptors = await this.props.datasource.getMetricTypes(projectName);
    const labels = await this.getLabels(this.state.selectedMetricType, projectName);
    const {
      metricTypes,
      selectedMetricType
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getMetricTypes)(metricDescriptors, this.state.selectedMetricType, (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.selectedMetricType), (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.selectedService));
    const sloServices = await this.props.datasource.getSLOServices(projectName);
    this.setState(Object.assign({}, labels, {
      metricTypes,
      selectedMetricType,
      metricDescriptors,
      projectName,
      sloServices
    }), () => this.onPropsChange());
  }

  async onServiceChange(service) {
    const {
      metricTypes,
      selectedMetricType
    } = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getMetricTypes)(this.state.metricDescriptors, this.state.selectedMetricType, (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.selectedMetricType), (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(service));
    const state = Object.assign({
      selectedService: service,
      metricTypes,
      selectedMetricType
    }, await this.getLabels(selectedMetricType, this.state.projectName));
    this.setState(state, () => this.onPropsChange());
  }

  async onMetricTypeChange(metricType) {
    const state = Object.assign({
      selectedMetricType: metricType
    }, await this.getLabels(metricType, this.state.projectName));
    this.setState(state, () => this.onPropsChange());
  }

  onLabelKeyChange(labelKey) {
    this.setState({
      labelKey
    }, () => this.onPropsChange());
  }

  componentDidUpdate(prevProps, prevState) {
    const selecQueryTypeChanged = prevState.selectedQueryType !== this.state.selectedQueryType;
    const selectSLOServiceChanged = this.state.selectedSLOService !== prevState.selectedSLOService;

    if (selecQueryTypeChanged || selectSLOServiceChanged) {
      this.onPropsChange();
    }
  }

  async getLabels(selectedMetricType, projectName, selectedQueryType = this.state.selectedQueryType) {
    let result = {
      labels: this.state.labels,
      labelKey: this.state.labelKey
    };

    if (selectedMetricType && selectedQueryType === _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelValues) {
      const labels = await (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getLabelKeys)(this.props.datasource, selectedMetricType, projectName);
      const labelKey = labels.some(l => l === (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().replace(this.state.labelKey)) ? this.state.labelKey : labels[0];
      result = {
        labels,
        labelKey
      };
    }

    return result;
  }

  renderQueryTypeSwitch(queryType) {
    const variableOptionGroup = {
      label: 'Template Variables',
      expanded: false,
      options: (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)().getVariables().map(v => ({
        value: `$${v.name}`,
        label: `$${v.name}`
      }))
    };

    switch (queryType) {
      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.MetricTypes:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            value: this.state.selectedService,
            options: [variableOptionGroup, ...this.state.services],
            onChange: value => this.onServiceChange(value),
            label: "Service"
          })]
        });

      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelKeys:
      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelValues:
      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.ResourceTypes:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            value: this.state.selectedService,
            options: [variableOptionGroup, ...this.state.services],
            onChange: value => this.onServiceChange(value),
            label: "Service"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            value: this.state.selectedMetricType,
            options: [variableOptionGroup, ...this.state.metricTypes.map(({
              value,
              name
            }) => ({
              value,
              label: name
            }))],
            onChange: value => this.onMetricTypeChange(value),
            label: "Metric Type"
          }), queryType === _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.LabelValues && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            value: this.state.labelKey,
            options: [variableOptionGroup, ...this.state.labels.map(l => ({
              value: l,
              label: l
            }))],
            onChange: value => this.onLabelKeyChange(value),
            label: "Label Key"
          })]
        });

      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Aligners:
      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.Aggregations:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            value: this.state.selectedService,
            options: [variableOptionGroup, ...this.state.services],
            onChange: value => this.onServiceChange(value),
            label: "Service"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            value: this.state.selectedMetricType,
            options: [variableOptionGroup, ...this.state.metricTypes.map(({
              value,
              name
            }) => ({
              value,
              label: name
            }))],
            onChange: value => this.onMetricTypeChange(value),
            label: "Metric Type"
          })]
        });

      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.SLOServices:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          })
        });

      case _types__WEBPACK_IMPORTED_MODULE_3__.MetricFindQueryTypes.SLO:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
            value: this.state.selectedSLOService,
            options: [variableOptionGroup, ...this.state.sloServices],
            onChange: value => {
              this.setState(Object.assign({}, this.state, {
                selectedSLOService: value
              }));
            },
            label: "SLO Service"
          })]
        });

      default:
        return '';
    }
  }

  render() {
    if (this.state.loading) {
      return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "gf-form max-width-21",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
          className: "gf-form-label width-10 query-keyword",
          children: "Query Type"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "gf-form-select-wrapper max-width-12",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
            className: "gf-form-input",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
              children: "Loading..."
            })
          })
        })]
      }));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.VariableQueryField, {
        value: this.state.selectedQueryType,
        options: this.queryTypes,
        onChange: value => this.onQueryTypeChange(value),
        label: "Query Type"
      }), this.renderQueryTypeSwitch(this.state.selectedQueryType)]
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/VisualMetricQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisualMetricQueryEditor": () => (/* binding */ VisualMetricQueryEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function Editor({
  refId,
  query,
  labels,
  datasource,
  onChange,
  onMetricTypeChange,
  customMetaData,
  variableOptionGroup
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Metrics, {
    refId: refId,
    templateSrv: datasource.templateSrv,
    projectName: query.projectName,
    metricType: query.metricType,
    templateVariableOptions: variableOptionGroup.options,
    datasource: datasource,
    onChange: onMetricTypeChange,
    children: metric => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.LabelFilter, {
        labels: labels,
        filters: query.filters,
        onChange: filters => onChange(Object.assign({}, query, {
          filters
        })),
        variableOptionGroup: variableOptionGroup
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Preprocessor, {
        metricDescriptor: metric,
        query: query,
        onChange: onChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.GroupBy, {
        refId: refId,
        labels: Object.keys(labels),
        query: query,
        onChange: onChange,
        variableOptionGroup: variableOptionGroup,
        metricDescriptor: metric
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Alignment, {
        refId: refId,
        datasource: datasource,
        templateVariableOptions: variableOptionGroup.options,
        query: query,
        customMetaData: customMetaData,
        onChange: onChange
      })]
    })
  });
}

const VisualMetricQueryEditor = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(Editor);

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/components/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aggregation": () => (/* reexport safe */ _Aggregation__WEBPACK_IMPORTED_MODULE_9__.Aggregation),
/* harmony export */   "AliasBy": () => (/* reexport safe */ _AliasBy__WEBPACK_IMPORTED_MODULE_8__.AliasBy),
/* harmony export */   "Alignment": () => (/* reexport safe */ _Alignment__WEBPACK_IMPORTED_MODULE_3__.Alignment),
/* harmony export */   "AlignmentFunction": () => (/* reexport safe */ _AlignmentFunction__WEBPACK_IMPORTED_MODULE_6__.AlignmentFunction),
/* harmony export */   "AlignmentPeriodLabel": () => (/* reexport safe */ _AlignmentPeriodLabel__WEBPACK_IMPORTED_MODULE_7__.AlignmentPeriodLabel),
/* harmony export */   "AnnotationsHelp": () => (/* reexport safe */ _AnnotationsHelp__WEBPACK_IMPORTED_MODULE_5__.AnnotationsHelp),
/* harmony export */   "GroupBy": () => (/* reexport safe */ _GroupBy__WEBPACK_IMPORTED_MODULE_2__.GroupBy),
/* harmony export */   "LabelFilter": () => (/* reexport safe */ _LabelFilter__WEBPACK_IMPORTED_MODULE_4__.LabelFilter),
/* harmony export */   "MQLQueryEditor": () => (/* reexport safe */ _MQLQueryEditor__WEBPACK_IMPORTED_MODULE_12__.MQLQueryEditor),
/* harmony export */   "MetricQueryEditor": () => (/* reexport safe */ _MetricQueryEditor__WEBPACK_IMPORTED_MODULE_10__.MetricQueryEditor),
/* harmony export */   "Metrics": () => (/* reexport safe */ _Metrics__WEBPACK_IMPORTED_MODULE_1__.Metrics),
/* harmony export */   "PeriodSelect": () => (/* reexport safe */ _PeriodSelect__WEBPACK_IMPORTED_MODULE_15__.PeriodSelect),
/* harmony export */   "Preprocessor": () => (/* reexport safe */ _Preprocessor__WEBPACK_IMPORTED_MODULE_16__.Preprocessor),
/* harmony export */   "Project": () => (/* reexport safe */ _Project__WEBPACK_IMPORTED_MODULE_0__.Project),
/* harmony export */   "QueryEditorField": () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_13__.QueryEditorField),
/* harmony export */   "QueryEditorRow": () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_13__.QueryEditorRow),
/* harmony export */   "SLOQueryEditor": () => (/* reexport safe */ _SLO_SLOQueryEditor__WEBPACK_IMPORTED_MODULE_11__.SLOQueryEditor),
/* harmony export */   "VariableQueryField": () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_13__.VariableQueryField),
/* harmony export */   "VisualMetricQueryEditor": () => (/* reexport safe */ _VisualMetricQueryEditor__WEBPACK_IMPORTED_MODULE_14__.VisualMetricQueryEditor)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Project.tsx");
/* harmony import */ var _Metrics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Metrics.tsx");
/* harmony import */ var _GroupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/GroupBy.tsx");
/* harmony import */ var _Alignment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Alignment.tsx");
/* harmony import */ var _LabelFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/LabelFilter.tsx");
/* harmony import */ var _AnnotationsHelp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/AnnotationsHelp.tsx");
/* harmony import */ var _AlignmentFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/AlignmentFunction.tsx");
/* harmony import */ var _AlignmentPeriodLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/AlignmentPeriodLabel.tsx");
/* harmony import */ var _AliasBy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/AliasBy.tsx");
/* harmony import */ var _Aggregation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Aggregation.tsx");
/* harmony import */ var _MetricQueryEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MetricQueryEditor.tsx");
/* harmony import */ var _SLO_SLOQueryEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLOQueryEditor.tsx");
/* harmony import */ var _MQLQueryEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MQLQueryEditor.tsx");
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Fields.tsx");
/* harmony import */ var _VisualMetricQueryEditor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/VisualMetricQueryEditor.tsx");
/* harmony import */ var _PeriodSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/PeriodSelect.tsx");
/* harmony import */ var _Preprocessor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/Preprocessor.tsx");


















/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AGGREGATIONS": () => (/* binding */ AGGREGATIONS),
/* harmony export */   "ALIGNMENTS": () => (/* binding */ ALIGNMENTS),
/* harmony export */   "ALIGNMENT_PERIODS": () => (/* binding */ ALIGNMENT_PERIODS),
/* harmony export */   "AUTH_TYPES": () => (/* binding */ AUTH_TYPES),
/* harmony export */   "GRAPH_PERIODS": () => (/* binding */ GRAPH_PERIODS),
/* harmony export */   "INNER_LABEL_WIDTH": () => (/* binding */ INNER_LABEL_WIDTH),
/* harmony export */   "INPUT_WIDTH": () => (/* binding */ INPUT_WIDTH),
/* harmony export */   "LABEL_WIDTH": () => (/* binding */ LABEL_WIDTH),
/* harmony export */   "QUERY_TYPES": () => (/* binding */ QUERY_TYPES),
/* harmony export */   "SELECTORS": () => (/* binding */ SELECTORS),
/* harmony export */   "SELECT_WIDTH": () => (/* binding */ SELECT_WIDTH),
/* harmony export */   "SYSTEM_LABELS": () => (/* binding */ SYSTEM_LABELS)
/* harmony export */ });
/* harmony import */ var _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");

 // not super excited about using uneven numbers, but this makes it align perfectly with rows that has two fields

const INPUT_WIDTH = 71;
const LABEL_WIDTH = 19;
const INNER_LABEL_WIDTH = 14;
const SELECT_WIDTH = 28;
const AUTH_TYPES = [{
  value: 'Google JWT File',
  key: _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthType.JWT
}, {
  value: 'GCE Default Service Account',
  key: _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthType.GCE
}];
const ALIGNMENTS = [{
  text: 'delta',
  value: 'ALIGN_DELTA',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'rate',
  value: 'ALIGN_RATE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'interpolate',
  value: 'ALIGN_INTERPOLATE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE]
}, {
  text: 'next older',
  value: 'ALIGN_NEXT_OLDER',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.STRING, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.VALUE_TYPE_UNSPECIFIED, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE]
}, {
  text: 'min',
  value: 'ALIGN_MIN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'max',
  value: 'ALIGN_MAX',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'mean',
  value: 'ALIGN_MEAN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'count',
  value: 'ALIGN_COUNT',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'sum',
  value: 'ALIGN_SUM',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'stddev',
  value: 'ALIGN_STDDEV',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'count true',
  value: 'ALIGN_COUNT_TRUE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE]
}, {
  text: 'count false',
  value: 'ALIGN_COUNT_FALSE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE]
}, {
  text: 'fraction true',
  value: 'ALIGN_FRACTION_TRUE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE]
}, {
  text: 'percentile 99',
  value: 'ALIGN_PERCENTILE_99',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'percentile 95',
  value: 'ALIGN_PERCENTILE_95',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'percentile 50',
  value: 'ALIGN_PERCENTILE_50',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'percentile 05',
  value: 'ALIGN_PERCENTILE_05',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'percent change',
  value: 'ALIGN_PERCENT_CHANGE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}];
const AGGREGATIONS = [{
  text: 'none',
  value: 'REDUCE_NONE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.STRING],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'mean',
  value: 'REDUCE_MEAN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE]
}, {
  text: 'min',
  value: 'REDUCE_MIN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'max',
  value: 'REDUCE_MAX',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'sum',
  value: 'REDUCE_SUM',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'std. dev.',
  value: 'REDUCE_STDDEV',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'count',
  value: 'REDUCE_COUNT',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.STRING],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE]
}, {
  text: 'count true',
  value: 'REDUCE_COUNT_TRUE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: 'count false',
  value: 'REDUCE_COUNT_FALSE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA]
}, {
  text: '99th percentile',
  value: 'REDUCE_PERCENTILE_99',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE]
}, {
  text: '95th percentile',
  value: 'REDUCE_PERCENTILE_95',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE]
}, {
  text: '50th percentile',
  value: 'REDUCE_PERCENTILE_50',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE]
}, {
  text: '5th percentile',
  value: 'REDUCE_PERCENTILE_05',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.INT64, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__.ValueTypes.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__.MetricKind.CUMULATIVE]
}];
const ALIGNMENT_PERIODS = [{
  text: 'grafana auto',
  value: 'grafana-auto'
}, {
  text: 'stackdriver auto',
  value: 'stackdriver-auto',
  hidden: true
}, {
  text: 'cloud monitoring auto',
  value: 'cloud-monitoring-auto'
}, {
  text: '1m',
  value: '+60s'
}, {
  text: '2m',
  value: '+120s'
}, {
  text: '5m',
  value: '+300s'
}, {
  text: '10m',
  value: '+600s'
}, {
  text: '30m',
  value: '+1800s'
}, {
  text: '1h',
  value: '+3600s'
}, {
  text: '3h',
  value: '+7200s'
}, {
  text: '6h',
  value: '+21600s'
}, {
  text: '1d',
  value: '+86400s'
}, {
  text: '3d',
  value: '+259200s'
}, {
  text: '1w',
  value: '+604800s'
}];
const GRAPH_PERIODS = [{
  text: 'auto',
  value: 'auto'
}, {
  text: '1m',
  value: '1m'
}, {
  text: '2m',
  value: '2m'
}, {
  text: '5m',
  value: '5m'
}, {
  text: '10m',
  value: '10m'
}, {
  text: '30m',
  value: '30m'
}, {
  text: '1h',
  value: '1h'
}, {
  text: '3h',
  value: '3h'
}, {
  text: '6h',
  value: '6h'
}, {
  text: '1d',
  value: '1d'
}, {
  text: '3d',
  value: '3d'
}, {
  text: '1w',
  value: '1w'
}];
const SYSTEM_LABELS = ['metadata.system_labels.cloud_account', 'metadata.system_labels.name', 'metadata.system_labels.region', 'metadata.system_labels.state', 'metadata.system_labels.instance_group', 'metadata.system_labels.node_name', 'metadata.system_labels.service_name', 'metadata.system_labels.top_level_controller_type', 'metadata.system_labels.top_level_controller_name', 'metadata.system_labels.container_image'];
const SELECTORS = [{
  label: 'SLI Value',
  value: 'select_slo_health'
}, {
  label: 'SLO Compliance',
  value: 'select_slo_compliance'
}, {
  label: 'SLO Error Budget Remaining',
  value: 'select_slo_budget_fraction'
}];
const QUERY_TYPES = [{
  label: 'Metrics',
  value: _types__WEBPACK_IMPORTED_MODULE_1__.QueryType.METRICS
}, {
  label: 'Service Level Objectives (SLO)',
  value: _types__WEBPACK_IMPORTED_MODULE_1__.QueryType.SLO
}];

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudMonitoringDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/templating/template_srv.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/variables.ts");
const _excluded = ["hide", "refId", "datasource", "key", "queryType", "maxLines", "metric", "intervalMs", "type"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class CloudMonitoringDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,app_features_templating_template_srv__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)(), timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_2__.getTimeSrv)()) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;
    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;

    _defineProperty(this, "authenticationType", void 0);

    _defineProperty(this, "intervalMs", void 0);

    this.instanceSettings = instanceSettings;
    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;
    this.authenticationType = instanceSettings.jsonData.authenticationType || 'jwt';
    this.variables = new _variables__WEBPACK_IMPORTED_MODULE_5__.CloudMonitoringVariableSupport(this);
    this.intervalMs = 0;
  }

  getVariables() {
    return this.templateSrv.getVariables().map(v => `$${v.name}`);
  }

  query(request) {
    request.targets = request.targets.map(t => Object.assign({}, this.migrateQuery(t), {
      intervalMs: request.intervalMs
    }));
    return super.query(request);
  }

  async annotationQuery(options) {
    await this.ensureGCEDefaultProject();
    const annotation = options.annotation;
    const queries = [{
      refId: 'annotationQuery',
      type: 'annotationQuery',
      datasource: this.getRef(),
      view: 'FULL',
      crossSeriesReducer: 'REDUCE_NONE',
      perSeriesAligner: 'ALIGN_NONE',
      metricType: this.templateSrv.replace(annotation.target.metricType, options.scopedVars || {}),
      title: this.templateSrv.replace(annotation.target.title, options.scopedVars || {}),
      text: this.templateSrv.replace(annotation.target.text, options.scopedVars || {}),
      projectName: this.templateSrv.replace(annotation.target.projectName ? annotation.target.projectName : this.getDefaultProject(), options.scopedVars || {}),
      filters: this.interpolateFilters(annotation.target.filters || [], options.scopedVars)
    }];
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.lastValueFrom)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: options.range.from.valueOf().toString(),
        to: options.range.to.valueOf().toString(),
        queries
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
      data
    }) => {
      const dataQueryResponse = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.toDataQueryResponse)({
        data: data
      });
      const df = [];

      if (dataQueryResponse.data.length !== 0) {
        for (let i = 0; i < dataQueryResponse.data.length; i++) {
          for (let j = 0; j < dataQueryResponse.data[i].fields[0].values.length; j++) {
            df.push({
              annotation: annotation,
              time: Date.parse(dataQueryResponse.data[i].fields[0].values.get(j)),
              title: dataQueryResponse.data[i].fields[1].values.get(j),
              tags: [],
              text: dataQueryResponse.data[i].fields[3].values.get(j)
            });
          }
        }
      }

      return df;
    })));
  }

  applyTemplateVariables({
    metricQuery,
    refId,
    queryType,
    sloQuery
  }, scopedVars) {
    return {
      datasource: this.getRef(),
      refId,
      intervalMs: this.intervalMs,
      type: 'timeSeriesQuery',
      queryType,
      metricQuery: Object.assign({}, this.interpolateProps(metricQuery, scopedVars), {
        projectName: this.templateSrv.replace(metricQuery.projectName ? metricQuery.projectName : this.getDefaultProject(), scopedVars),
        filters: this.interpolateFilters(metricQuery.filters || [], scopedVars),
        groupBys: this.interpolateGroupBys(metricQuery.groupBys || [], scopedVars),
        view: metricQuery.view || 'FULL',
        editorMode: metricQuery.editorMode
      }),
      sloQuery: sloQuery && this.interpolateProps(sloQuery, scopedVars)
    };
  }

  async getLabels(metricType, refId, projectName, aggregation) {
    var _aggregation$crossSer;

    const options = {
      targets: [{
        refId,
        datasource: this.getRef(),
        queryType: _types__WEBPACK_IMPORTED_MODULE_4__.QueryType.METRICS,
        metricQuery: {
          projectName: this.templateSrv.replace(projectName),
          metricType: this.templateSrv.replace(metricType),
          groupBys: this.interpolateGroupBys((aggregation === null || aggregation === void 0 ? void 0 : aggregation.groupBys) || [], {}),
          crossSeriesReducer: (_aggregation$crossSer = aggregation === null || aggregation === void 0 ? void 0 : aggregation.crossSeriesReducer) !== null && _aggregation$crossSer !== void 0 ? _aggregation$crossSer : 'REDUCE_NONE',
          view: 'HEADERS'
        }
      }],
      range: this.timeSrv.timeRange()
    };
    const queries = options.targets;

    if (!queries.length) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.lastValueFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({
        results: []
      }));
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.lastValueFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.from)(this.ensureGCEDefaultProject()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.mergeMap)(() => {
      return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
          from: options.range.from.valueOf().toString(),
          to: options.range.to.valueOf().toString(),
          queries
        }
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(({
      data
    }) => {
      const dataQueryResponse = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.toDataQueryResponse)({
        data: data
      });
      const labels = dataQueryResponse === null || dataQueryResponse === void 0 ? void 0 : dataQueryResponse.data.map(f => {
        var _f$meta, _f$meta$custom;

        return (_f$meta = f.meta) === null || _f$meta === void 0 ? void 0 : (_f$meta$custom = _f$meta.custom) === null || _f$meta$custom === void 0 ? void 0 : _f$meta$custom.labels;
      }).filter(p => !!p).reduce((acc, labels) => {
        for (let key in labels) {
          if (!acc[key]) {
            acc[key] = new Set();
          }

          if (labels[key]) {
            acc[key].add(labels[key]);
          }
        }

        return acc;
      }, {});
      return Object.fromEntries(Object.entries(labels).map(l => {
        l[1] = Array.from(l[1]);
        return l;
      }));
    })));
  }

  async getGCEDefaultProject() {
    return this.getResource(`gceDefaultProject`);
  }

  getDefaultProject() {
    const {
      defaultProject,
      authenticationType,
      gceDefaultProject
    } = this.instanceSettings.jsonData;

    if (authenticationType === 'gce') {
      return gceDefaultProject || '';
    }

    return defaultProject || '';
  }

  async ensureGCEDefaultProject() {
    const {
      authenticationType,
      gceDefaultProject
    } = this.instanceSettings.jsonData;

    if (authenticationType === 'gce' && !gceDefaultProject) {
      this.instanceSettings.jsonData.gceDefaultProject = await this.getGCEDefaultProject();
    }
  }

  async getMetricTypes(projectName) {
    if (!projectName) {
      return [];
    }

    return this.getResource(`metricDescriptors/v3/projects/${this.templateSrv.replace(projectName)}/metricDescriptors`);
  }

  async getSLOServices(projectName) {
    return this.getResource(`services/v3/projects/${this.templateSrv.replace(projectName)}/services?pageSize=1000`);
  }

  async getServiceLevelObjectives(projectName, serviceId) {
    if (!serviceId) {
      return Promise.resolve([]);
    }

    let {
      projectName: p,
      serviceId: s
    } = this.interpolateProps({
      projectName,
      serviceId
    });
    return this.getResource(`slo-services/v3/projects/${p}/services/${s}/serviceLevelObjectives`);
  }

  getProjects() {
    return this.getResource(`projects`);
  }

  migrateQuery(query) {
    if (!query.hasOwnProperty('metricQuery')) {
      const _ref = query,
            {
        hide,
        refId,
        intervalMs,
        type
      } = _ref,
            rest = _objectWithoutPropertiesLoose(_ref, _excluded);

      return {
        refId,
        intervalMs,
        type,
        hide,
        queryType: _types__WEBPACK_IMPORTED_MODULE_4__.QueryType.METRICS,
        metricQuery: Object.assign({}, rest, {
          view: rest.view || 'FULL'
        })
      };
    }

    return query;
  }

  interpolateProps(object, scopedVars = {}) {
    return Object.entries(object).reduce((acc, [key, value]) => {
      return Object.assign({}, acc, {
        [key]: value && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(value) ? this.templateSrv.replace(value, scopedVars) : value
      });
    }, {});
  }

  filterQuery(query) {
    if (query.hide) {
      return false;
    }

    if (query.queryType && query.queryType === _types__WEBPACK_IMPORTED_MODULE_4__.QueryType.SLO && query.sloQuery) {
      const {
        selectorName,
        serviceId,
        sloId,
        projectName
      } = query.sloQuery;
      return !!selectorName && !!serviceId && !!sloId && !!projectName;
    }

    if (query.queryType && query.queryType === _types__WEBPACK_IMPORTED_MODULE_4__.QueryType.METRICS && query.metricQuery.editorMode === _types__WEBPACK_IMPORTED_MODULE_4__.EditorMode.MQL) {
      return !!query.metricQuery.projectName && !!query.metricQuery.query;
    }

    const {
      metricType
    } = query.metricQuery;
    return !!metricType;
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    return queries.map(query => this.applyTemplateVariables(this.migrateQuery(query), scopedVars));
  }

  interpolateFilters(filters, scopedVars) {
    const completeFilter = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.chunk)(filters, 4).map(([key, operator, value, condition]) => Object.assign({
      key,
      operator,
      value
    }, condition && {
      condition
    })).filter(item => item.value);
    const filterArray = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(completeFilter.map(({
      key,
      operator,
      value,
      condition
    }) => [this.templateSrv.replace(key, scopedVars || {}), operator, this.templateSrv.replace(value, scopedVars || {}, value => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(value) && value.length ? `(${value.join('|')})` : value;
    }), ...(condition ? [condition] : [])]));
    return filterArray || [];
  }

  interpolateGroupBys(groupBys, scopedVars) {
    let interpolatedGroupBys = [];
    (groupBys || []).forEach(gb => {
      const interpolated = this.templateSrv.replace(gb, scopedVars || {}, 'csv').split(',');

      if (Array.isArray(interpolated)) {
        interpolatedGroupBys = interpolatedGroupBys.concat(interpolated);
      } else {
        interpolatedGroupBys.push(interpolated);
      }
    });
    return interpolatedGroupBys;
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/functions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractServicesFromMetricDescriptors": () => (/* binding */ extractServicesFromMetricDescriptors),
/* harmony export */   "getAggregationOptionsByMetric": () => (/* binding */ getAggregationOptionsByMetric),
/* harmony export */   "getAlignmentOptionsByMetric": () => (/* binding */ getAlignmentOptionsByMetric),
/* harmony export */   "getAlignmentPickerData": () => (/* binding */ getAlignmentPickerData),
/* harmony export */   "getLabelKeys": () => (/* binding */ getLabelKeys),
/* harmony export */   "getMetricTypes": () => (/* binding */ getMetricTypes),
/* harmony export */   "getMetricTypesByService": () => (/* binding */ getMetricTypesByService),
/* harmony export */   "labelsToGroupedOptions": () => (/* binding */ labelsToGroupedOptions),
/* harmony export */   "stringArrayToFilters": () => (/* binding */ stringArrayToFilters)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");




const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getTemplateSrv)();
const extractServicesFromMetricDescriptors = metricDescriptors => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqBy)(metricDescriptors, 'service');
const getMetricTypesByService = (metricDescriptors, service) => metricDescriptors.filter(m => m.service === service);
const getMetricTypes = (metricDescriptors, metricType, interpolatedMetricType, selectedService) => {
  const metricTypes = getMetricTypesByService(metricDescriptors, selectedService).map(m => ({
    value: m.type,
    name: m.displayName
  }));
  const metricTypeExistInArray = metricTypes.some(m => m.value === interpolatedMetricType);
  const metricTypeByService = metricTypes.length ? metricTypes[0].value : '';
  const selectedMetricType = metricTypeExistInArray ? metricType : metricTypeByService;
  return {
    metricTypes,
    selectedMetricType
  };
};
const getAlignmentOptionsByMetric = (metricValueType, metricKind, preprocessor) => {
  if (preprocessor && preprocessor === _types__WEBPACK_IMPORTED_MODULE_3__.PreprocessorType.Rate) {
    metricKind = _types__WEBPACK_IMPORTED_MODULE_3__.MetricKind.GAUGE;
  }

  return !metricValueType ? [] : _constants__WEBPACK_IMPORTED_MODULE_2__.ALIGNMENTS.filter(i => {
    return i.valueTypes.indexOf(metricValueType) !== -1 && i.metricKinds.indexOf(metricKind) !== -1;
  });
};
const getAggregationOptionsByMetric = (valueType, metricKind) => {
  return !metricKind ? [] : _constants__WEBPACK_IMPORTED_MODULE_2__.AGGREGATIONS.filter(i => {
    return i.valueTypes.indexOf(valueType) !== -1 && i.metricKinds.indexOf(metricKind) !== -1;
  });
};
const getLabelKeys = async (datasource, selectedMetricType, projectName) => {
  const refId = 'handleLabelKeysQuery';
  const labels = await datasource.getLabels(selectedMetricType, refId, projectName);
  return [...Object.keys(labels), ..._constants__WEBPACK_IMPORTED_MODULE_2__.SYSTEM_LABELS];
};
const getAlignmentPickerData = (valueType = _types__WEBPACK_IMPORTED_MODULE_3__.ValueTypes.DOUBLE, metricKind = _types__WEBPACK_IMPORTED_MODULE_3__.MetricKind.GAUGE, perSeriesAligner = _types__WEBPACK_IMPORTED_MODULE_3__.AlignmentTypes.ALIGN_MEAN, preprocessor) => {
  const alignOptions = getAlignmentOptionsByMetric(valueType, metricKind, preprocessor).map(option => Object.assign({}, option, {
    label: option.text
  }));

  if (!alignOptions.some(o => o.value === templateSrv.replace(perSeriesAligner))) {
    perSeriesAligner = alignOptions.length > 0 ? alignOptions[0].value : _types__WEBPACK_IMPORTED_MODULE_3__.AlignmentTypes.ALIGN_MEAN;
  }

  return {
    alignOptions,
    perSeriesAligner
  };
};
const labelsToGroupedOptions = groupBys => {
  const groups = groupBys.reduce((acc, curr) => {
    const arr = curr.split('.').map(lodash__WEBPACK_IMPORTED_MODULE_0__.startCase);
    const group = (arr.length === 2 ? arr : (0,lodash__WEBPACK_IMPORTED_MODULE_0__.initial)(arr)).join(' ');
    const option = {
      value: curr,
      label: curr
    };

    if (acc[group]) {
      acc[group] = [...acc[group], option];
    } else {
      acc[group] = [option];
    }

    return acc;
  }, {});
  return Object.entries(groups).map(([label, options]) => ({
    label,
    options,
    expanded: true
  }), []);
};
const stringArrayToFilters = filterArray => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.chunk)(filterArray, 4).map(([key, operator, value, condition = 'AND']) => ({
  key,
  operator,
  value,
  condition
}));

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _annotations_query_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/annotations_query_ctrl.ts");
/* harmony import */ var _components_CloudMonitoringCheatSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/CloudMonitoringCheatSheet.tsx");
/* harmony import */ var _components_ConfigEditor_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/ConfigEditor/ConfigEditor.tsx");
/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/QueryEditor.tsx");
/* harmony import */ var _components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/VariableQueryEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/datasource.ts");







const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_6__["default"]).setQueryEditorHelp(_components_CloudMonitoringCheatSheet__WEBPACK_IMPORTED_MODULE_2__["default"]).setQueryEditor(_components_QueryEditor__WEBPACK_IMPORTED_MODULE_4__.QueryEditor).setConfigEditor(_components_ConfigEditor_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__.ConfigEditor).setAnnotationQueryCtrl(_annotations_query_ctrl__WEBPACK_IMPORTED_MODULE_1__.CloudMonitoringAnnotationsQueryCtrl).setVariableQueryEditor(_components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_5__.CloudMonitoringVariableQueryEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlignmentTypes": () => (/* binding */ AlignmentTypes),
/* harmony export */   "EditorMode": () => (/* binding */ EditorMode),
/* harmony export */   "MetricFindQueryTypes": () => (/* binding */ MetricFindQueryTypes),
/* harmony export */   "MetricKind": () => (/* binding */ MetricKind),
/* harmony export */   "PreprocessorType": () => (/* binding */ PreprocessorType),
/* harmony export */   "QueryType": () => (/* binding */ QueryType),
/* harmony export */   "ValueTypes": () => (/* binding */ ValueTypes),
/* harmony export */   "authTypes": () => (/* binding */ authTypes)
/* harmony export */ });
/* harmony import */ var _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js");

const authTypes = [{
  label: 'Google JWT File',
  value: _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthType.JWT
}, {
  label: 'GCE Default Service Account',
  value: _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthType.GCE
}];
let MetricFindQueryTypes;

(function (MetricFindQueryTypes) {
  MetricFindQueryTypes["Projects"] = "projects";
  MetricFindQueryTypes["Services"] = "services";
  MetricFindQueryTypes["DefaultProject"] = "defaultProject";
  MetricFindQueryTypes["MetricTypes"] = "metricTypes";
  MetricFindQueryTypes["LabelKeys"] = "labelKeys";
  MetricFindQueryTypes["LabelValues"] = "labelValues";
  MetricFindQueryTypes["ResourceTypes"] = "resourceTypes";
  MetricFindQueryTypes["Aggregations"] = "aggregations";
  MetricFindQueryTypes["Aligners"] = "aligners";
  MetricFindQueryTypes["AlignmentPeriods"] = "alignmentPeriods";
  MetricFindQueryTypes["Selectors"] = "selectors";
  MetricFindQueryTypes["SLOServices"] = "sloServices";
  MetricFindQueryTypes["SLO"] = "slo";
})(MetricFindQueryTypes || (MetricFindQueryTypes = {}));

let QueryType;

(function (QueryType) {
  QueryType["METRICS"] = "metrics";
  QueryType["SLO"] = "slo";
})(QueryType || (QueryType = {}));

let EditorMode;

(function (EditorMode) {
  EditorMode["Visual"] = "visual";
  EditorMode["MQL"] = "mql";
})(EditorMode || (EditorMode = {}));

let PreprocessorType;

(function (PreprocessorType) {
  PreprocessorType["None"] = "none";
  PreprocessorType["Rate"] = "rate";
  PreprocessorType["Delta"] = "delta";
})(PreprocessorType || (PreprocessorType = {}));

let MetricKind;

(function (MetricKind) {
  MetricKind["METRIC_KIND_UNSPECIFIED"] = "METRIC_KIND_UNSPECIFIED";
  MetricKind["GAUGE"] = "GAUGE";
  MetricKind["DELTA"] = "DELTA";
  MetricKind["CUMULATIVE"] = "CUMULATIVE";
})(MetricKind || (MetricKind = {}));

let ValueTypes;

(function (ValueTypes) {
  ValueTypes["VALUE_TYPE_UNSPECIFIED"] = "VALUE_TYPE_UNSPECIFIED";
  ValueTypes["BOOL"] = "BOOL";
  ValueTypes["INT64"] = "INT64";
  ValueTypes["DOUBLE"] = "DOUBLE";
  ValueTypes["STRING"] = "STRING";
  ValueTypes["DISTRIBUTION"] = "DISTRIBUTION";
  ValueTypes["MONEY"] = "MONEY";
})(ValueTypes || (ValueTypes = {}));

let AlignmentTypes;

(function (AlignmentTypes) {
  AlignmentTypes["ALIGN_DELTA"] = "ALIGN_DELTA";
  AlignmentTypes["ALIGN_RATE"] = "ALIGN_RATE";
  AlignmentTypes["ALIGN_INTERPOLATE"] = "ALIGN_INTERPOLATE";
  AlignmentTypes["ALIGN_NEXT_OLDER"] = "ALIGN_NEXT_OLDER";
  AlignmentTypes["ALIGN_MIN"] = "ALIGN_MIN";
  AlignmentTypes["ALIGN_MAX"] = "ALIGN_MAX";
  AlignmentTypes["ALIGN_MEAN"] = "ALIGN_MEAN";
  AlignmentTypes["ALIGN_COUNT"] = "ALIGN_COUNT";
  AlignmentTypes["ALIGN_SUM"] = "ALIGN_SUM";
  AlignmentTypes["ALIGN_STDDEV"] = "ALIGN_STDDEV";
  AlignmentTypes["ALIGN_COUNT_TRUE"] = "ALIGN_COUNT_TRUE";
  AlignmentTypes["ALIGN_COUNT_FALSE"] = "ALIGN_COUNT_FALSE";
  AlignmentTypes["ALIGN_FRACTION_TRUE"] = "ALIGN_FRACTION_TRUE";
  AlignmentTypes["ALIGN_PERCENTILE_99"] = "ALIGN_PERCENTILE_99";
  AlignmentTypes["ALIGN_PERCENTILE_95"] = "ALIGN_PERCENTILE_95";
  AlignmentTypes["ALIGN_PERCENTILE_50"] = "ALIGN_PERCENTILE_50";
  AlignmentTypes["ALIGN_PERCENTILE_05"] = "ALIGN_PERCENTILE_05";
  AlignmentTypes["ALIGN_PERCENT_CHANGE"] = "ALIGN_PERCENT_CHANGE";
})(AlignmentTypes || (AlignmentTypes = {}));

/***/ }),

/***/ "./public/app/plugins/datasource/cloud-monitoring/variables.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloudMonitoringVariableSupport": () => (/* binding */ CloudMonitoringVariableSupport)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _CloudMonitoringMetricFindQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/CloudMonitoringMetricFindQuery.ts");
/* harmony import */ var _components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/VariableQueryEditor.tsx");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class CloudMonitoringVariableSupport extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.CustomVariableSupport {
  constructor(datasource) {
    super();
    this.datasource = datasource;

    _defineProperty(this, "metricFindQuery", void 0);

    _defineProperty(this, "editor", _components_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_2__.CloudMonitoringVariableQueryEditor);

    this.datasource = datasource;
    this.metricFindQuery = new _CloudMonitoringMetricFindQuery__WEBPACK_IMPORTED_MODULE_1__["default"](datasource);
    this.query = this.query.bind(this);
  }

  query(request) {
    const executeObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.metricFindQuery.execute(request.targets[0]));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.datasource.ensureGCEDefaultProject()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => executeObservable), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => ({
      data
    })));
  }

}

/***/ }),

/***/ "./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/dist/index.development.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({ value: true }));

var data = __webpack_require__("./packages/grafana-data/src/index.ts");
var ui = __webpack_require__("./packages/grafana-ui/src/index.ts");
var React = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

var TEST_IDS = {
    helpBox: 'Configuration help box',
    dropZone: 'Configuration drop zone',
    pasteArea: 'Configuration text area',
    pasteJwtButton: 'Paste JWT button',
    resetJwtButton: 'Reset JWT button',
    jwtForm: 'JWT form',
    authTypeButtonJWT: 'JWT button',
    authTypeButtonGCE: 'GCE button',
};

var configKeys = ['private_key', 'token_uri', 'client_email', 'project_id'];
var INVALID_JWT_TOKEN_ERROR = 'Invalid JWT token';
var JWTConfigEditor = function (_a) {
    var onChange = _a.onChange;
    var _b = __read(React.useState(), 2), error = _b[0], setError = _b[1];
    var _c = __read(React.useState(null), 2), isPasting = _c[0], setIsPasting = _c[1];
    var theme = ui.useTheme2();
    var onPasteClick = React.useCallback(function (e) {
        setError(null);
        setIsPasting(true);
    }, [setIsPasting]);
    var onUploadClick = React.useCallback(function (e) {
        setIsPasting(null);
        setError(null);
    }, [setIsPasting]);
    var readAndValidateJWT = React.useCallback(function (value) {
        if (value.trim() !== '') {
            var jwt = void 0;
            try {
                jwt = JSON.parse(value);
            }
            catch (e) {
                setError(INVALID_JWT_TOKEN_ERROR);
            }
            var validation = validateJWT(jwt);
            if (validation.isValid) {
                onChange({
                    privateKey: jwt.private_key,
                    tokenUri: jwt.token_uri,
                    clientEmail: jwt.client_email,
                    projectId: jwt.project_id,
                });
            }
            else {
                setError(validation.error);
            }
        }
    }, [setError, onChange]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(ui.Field, { label: "JWT token", invalid: Boolean(error), description: isPasting ? 'Paste JWT token below' : 'Upload or paste Google JWT token', error: error },
            React__default["default"].createElement(React__default["default"].Fragment, null,
                isPasting !== true && (React__default["default"].createElement("div", { "data-testid": TEST_IDS.dropZone },
                    React__default["default"].createElement(ui.FileDropzone, { options: { multiple: false, accept: 'application/json' }, readAs: "readAsText", onLoad: function (result) {
                            readAndValidateJWT(result);
                            setIsPasting(false);
                        } },
                        React__default["default"].createElement("p", { style: { margin: 0, fontSize: "" + theme.typography.h4.fontSize, textAlign: 'center' } },
                            "Drop the Google JWT file here",
                            React__default["default"].createElement("br", null),
                            React__default["default"].createElement("br", null),
                            React__default["default"].createElement(ui.LinkButton, { fill: "outline" }, "Click to browse files"))))),
                isPasting && (
                // @ts-ignore
                React__default["default"].createElement(ui.TextArea, { "data-testid": TEST_IDS.pasteArea, autoFocus: true, invalid: Boolean(error), placeholder: "Paste Google JWT token here", onBlur: function (e) { return readAndValidateJWT(e.currentTarget.value); }, rows: 12 })))),
        !isPasting && (React__default["default"].createElement(ui.Field, null,
            React__default["default"].createElement(ui.Button, { "data-testid": TEST_IDS.pasteJwtButton, type: "button", fill: "outline", style: { color: "" + theme.colors.primary.text }, onClick: onPasteClick }, "Paste JWT Token"))),
        isPasting && error && (React__default["default"].createElement(ui.Field, null,
            React__default["default"].createElement(ui.Button, { type: "button", fill: "outline", style: { color: "" + theme.colors.primary.text }, onClick: onUploadClick }, "Upload JWT Token")))));
};
var validateJWT = function (json) {
    if (!lodash.isObject(json)) {
        return { isValid: false, error: 'Invalid JWT token' };
    }
    var missingKeys = configKeys.filter(function (key) { return !json[key]; });
    if (missingKeys.length > 0) {
        return { isValid: false, error: "Missing keys: " + missingKeys.join(', ') };
    }
    return { isValid: true };
};

var JWTForm = function (_a) {
    var options = _a.options, onReset = _a.onReset, onChange = _a.onChange;
    var onResetPress = function () { return onReset(null); };
    return (React__default["default"].createElement("div", { "data-testid": TEST_IDS.jwtForm },
        React__default["default"].createElement(ui.Field, { label: "Project ID" },
            React__default["default"].createElement(ui.Input, { id: "defaultProject", width: 60, value: options.defaultProject || '', onChange: onChange('defaultProject') })),
        React__default["default"].createElement(ui.Field, { label: "Client email" },
            React__default["default"].createElement(ui.Input, { width: 60, id: "clientEmail", value: options.clientEmail || '', onChange: onChange('clientEmail') })),
        React__default["default"].createElement(ui.Field, { label: "Token URI" },
            React__default["default"].createElement(ui.Input, { width: 60, id: "tokenUri", value: options.tokenUri || '', onChange: onChange('tokenUri') })),
        React__default["default"].createElement(ui.Field, { label: "Private key", disabled: true },
            React__default["default"].createElement(ui.Input, { width: 60, id: "privateKey", readOnly: true, placeholder: "Private key configured", addonAfter: React__default["default"].createElement(ui.Tooltip, { content: "Click to clear the uploaded JWT token and upload a new one" },
                    React__default["default"].createElement(ui.Button, { "data-testid": TEST_IDS.resetJwtButton, icon: "sync", size: "xs", onClick: onResetPress, fill: "outline" }, "Reset token")) }))));
};

exports.GoogleAuthType = void 0;
(function (GoogleAuthType) {
    GoogleAuthType["JWT"] = "jwt";
    GoogleAuthType["GCE"] = "gce";
})(exports.GoogleAuthType || (exports.GoogleAuthType = {}));

var GOOGLE_AUTH_TYPE_OPTIONS = [
    { label: 'Google JWT File', value: exports.GoogleAuthType.JWT, ariaLabel: TEST_IDS.authTypeButtonJWT },
    { label: 'GCE Default Service Account', value: exports.GoogleAuthType.GCE, ariaLabel: TEST_IDS.authTypeButtonGCE },
];

var ConnectionConfig = function (props) {
    var options = props.options, onOptionsChange = props.onOptionsChange;
    var jsonData = options.jsonData, secureJsonFields = options.secureJsonFields, secureJsonData = options.secureJsonData;
    if (!jsonData.authenticationType) {
        jsonData.authenticationType = exports.GoogleAuthType.JWT;
    }
    var isJWT = jsonData.authenticationType === exports.GoogleAuthType.JWT || jsonData.authenticationType === undefined;
    var onAuthTypeChange = function (authenticationType) {
        onOptionsChange(__assign(__assign({}, options), { jsonData: __assign(__assign({}, options.jsonData), { authenticationType: authenticationType }) }));
    };
    var hasJWTConfigured = Boolean(secureJsonFields &&
        secureJsonFields.privateKey &&
        jsonData.clientEmail &&
        jsonData.defaultProject &&
        jsonData.tokenUri);
    var onResetApiKey = function (jsonData) {
        var nextSecureJsonData = __assign({}, secureJsonData);
        var nextJsonData = !jsonData ? __assign({}, options.jsonData) : __assign(__assign({}, options.jsonData), jsonData);
        delete nextJsonData.clientEmail;
        delete nextJsonData.defaultProject;
        delete nextJsonData.tokenUri;
        delete nextSecureJsonData.privateKey;
        onOptionsChange(__assign(__assign({}, options), { secureJsonData: nextSecureJsonData, jsonData: nextJsonData }));
    };
    var onJWTFormChange = function (key) { return data.onUpdateDatasourceJsonDataOption(props, key); };
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(ui.FieldSet, { label: "Authentication" },
            React__default["default"].createElement(ui.Field, { label: "Authentication type" },
                React__default["default"].createElement(ui.RadioButtonGroup, { options: GOOGLE_AUTH_TYPE_OPTIONS, value: jsonData.authenticationType || exports.GoogleAuthType.JWT, onChange: onAuthTypeChange }))),
        isJWT && (React__default["default"].createElement(ui.FieldSet, { label: "JWT Key Details" },
            hasJWTConfigured ? (React__default["default"].createElement(JWTForm, { options: options.jsonData, onReset: onResetApiKey, onChange: onJWTFormChange })) : (React__default["default"].createElement(JWTConfigEditor, { onChange: function (jwt) {
                    onOptionsChange(__assign(__assign({}, options), { secureJsonFields: __assign(__assign({}, secureJsonFields), { privateKey: true }), secureJsonData: __assign(__assign({}, secureJsonData), { privateKey: jwt.privateKey }), jsonData: __assign(__assign({}, jsonData), { clientEmail: jwt.clientEmail, defaultProject: jwt.projectId, tokenUri: jwt.tokenUri }) }));
                } })),
            ' ')),
        React__default["default"].createElement("div", { className: "grafana-info-box", style: { marginTop: '16px' }, "data-testid": TEST_IDS.helpBox },
            React__default["default"].createElement("p", null,
                "Don\u2019t know how to get a service account key file or create a service account? Read more",
                ' ',
                React__default["default"].createElement("a", { className: "external-link", target: "_blank", rel: "noopener noreferrer", href: "https://grafana.com/docs/grafana/latest/datasources/google-cloud-monitoring/google-authentication/" }, "in the documentation."))),
        !isJWT && (React__default["default"].createElement(ui.Alert, { title: "", severity: "info" }, "Verify GCE default service account by clicking Save & Test"))));
};

exports.ConnectionConfig = ConnectionConfig;
//# sourceMappingURL=index.development.js.map


/***/ }),

/***/ "./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/dist/index.development.js");
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTRDLGNBQWMsOEJBQThCLHVCQUF1Qix3Q0FBd0MsR0FBRztBQUMxSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QyxrREFBa0QsMENBQTBDO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLGNBQWMsNERBQTREO0FBQ3RIO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0EsK0RBQStELHlCQUF5QjtBQUN4RixnRUFBZ0UsOEJBQThCO0FBQzlGLCtFQUErRSxpSUFBaUk7QUFDaE4seUVBQXlFLDBCQUEwQjtBQUNuRyxtRkFBbUYsOEVBQThFLGlFQUFpRTtBQUNsTyx3REFBd0QsY0FBYyxzQ0FBc0MsdUJBQXVCLGtCQUFrQix1Q0FBdUMscUJBQXFCLDRCQUE0QixpQ0FBaUMsZUFBZSxxRkFBcUYsR0FBRztBQUNyWCxtQkFBbUI7QUFDbkI7QUFDQSx5REFBeUQsd0NBQXdDLG1CQUFtQixtQ0FBbUM7QUFDdko7QUFDQTtBQUNBO0FBQ0EsK0RBQStELHNMQUFzTDtBQUNyUCx1RUFBdUUsNkJBQTZCO0FBQ3BHOztBQUVBLHdCQUF3QjtBQUN4Qjs7Ozs7Ozs7O0FDNU1hOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQyxDQUFDO0FBQ0YsRUFBRSx3S0FBdUQ7QUFDekQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9DbG91ZE1vbml0b3JpbmdNZXRyaWNGaW5kUXVlcnkudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvYW5ub3RhdGlvbnNfcXVlcnlfY3RybC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0FnZ3JlZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0FsaWFzQnkudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvQWxpZ25tZW50LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0FsaWdubWVudEZ1bmN0aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0FsaWdubWVudFBlcmlvZExhYmVsLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0Fubm90YXRpb25zSGVscC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9DbG91ZE1vbml0b3JpbmdDaGVhdFNoZWV0LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0NvbmZpZ0VkaXRvci9Db25maWdFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvRmllbGRzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0dyYXBoUGVyaW9kLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL0dyb3VwQnkudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvTGFiZWxGaWx0ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvTVFMUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvTWV0cmljUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvTWV0cmljcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9QZXJpb2RTZWxlY3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvUHJlcHJvY2Vzc29yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL1Byb2plY3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvU0xPL1NMTy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29tcG9uZW50cy9TTE8vU0xPUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvU0xPL1NlbGVjdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL1NMTy9TZXJ2aWNlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL1NMTy9pbmRleC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy9jb21wb25lbnRzL1ZhcmlhYmxlUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvVmlzdWFsTWV0cmljUXVlcnlFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL2RhdGFzb3VyY2UudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2Nsb3VkLW1vbml0b3JpbmcvZnVuY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9jbG91ZC1tb25pdG9yaW5nL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy90eXBlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvY2xvdWQtbW9uaXRvcmluZy92YXJpYWJsZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BncmFmYW5hLWdvb2dsZS1zZGstbnBtLTAuMC4zLWM5MTY2MzQzM2YtOWViNWUwNDNlMC56aXAvbm9kZV9tb2R1bGVzL0BncmFmYW5hL2dvb2dsZS1zZGsvZGlzdC9pbmRleC5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQGdyYWZhbmEtZ29vZ2xlLXNkay1ucG0tMC4wLjMtYzkxNjYzNDMzZi05ZWI1ZTA0M2UwLnppcC9ub2RlX21vZHVsZXMvQGdyYWZhbmEvZ29vZ2xlLXNkay9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBBTElHTk1FTlRfUEVSSU9EUywgU0VMRUNUT1JTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7XG4gIGV4dHJhY3RTZXJ2aWNlc0Zyb21NZXRyaWNEZXNjcmlwdG9ycyxcbiAgZ2V0QWdncmVnYXRpb25PcHRpb25zQnlNZXRyaWMsXG4gIGdldEFsaWdubWVudE9wdGlvbnNCeU1ldHJpYyxcbiAgZ2V0TGFiZWxLZXlzLFxuICBnZXRNZXRyaWNUeXBlc0J5U2VydmljZSxcbn0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeSwgTWV0cmljRGVzY3JpcHRvciwgTWV0cmljRmluZFF1ZXJ5VHlwZXMsIE1ldHJpY0tpbmQsIFZhbHVlVHlwZXMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWRNb25pdG9yaW5nTWV0cmljRmluZFF1ZXJ5IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlKSB7fVxuXG4gIGFzeW5jIGV4ZWN1dGUocXVlcnk6IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnkpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFxdWVyeS5wcm9qZWN0TmFtZSkge1xuICAgICAgICBxdWVyeS5wcm9qZWN0TmFtZSA9IHRoaXMuZGF0YXNvdXJjZS5nZXREZWZhdWx0UHJvamVjdCgpO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHF1ZXJ5LnNlbGVjdGVkUXVlcnlUeXBlKSB7XG4gICAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuUHJvamVjdHM6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUHJvamVjdHNRdWVyeSgpO1xuICAgICAgICBjYXNlIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLlNlcnZpY2VzOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVNlcnZpY2VRdWVyeShxdWVyeSk7XG4gICAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuTWV0cmljVHlwZXM6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTWV0cmljVHlwZXNRdWVyeShxdWVyeSk7XG4gICAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuTGFiZWxLZXlzOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUxhYmVsS2V5c1F1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5MYWJlbFZhbHVlczpcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVMYWJlbFZhbHVlc1F1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5SZXNvdXJjZVR5cGVzOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlc291cmNlVHlwZVF1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5BbGlnbmVyczpcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBbGlnbmVyc1F1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5BbGlnbm1lbnRQZXJpb2RzOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFsaWdubWVudFBlcmlvZFF1ZXJ5KCk7XG4gICAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuQWdncmVnYXRpb25zOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFnZ3JlZ2F0aW9uUXVlcnkocXVlcnkpO1xuICAgICAgICBjYXNlIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLlNMT1NlcnZpY2VzOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVNMT1NlcnZpY2VzUXVlcnkocXVlcnkpO1xuICAgICAgICBjYXNlIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLlNMTzpcbiAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTTE9RdWVyeShxdWVyeSk7XG4gICAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuU2VsZWN0b3JzOlxuICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVNlbGVjdG9yUXVlcnkoKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENvdWxkIG5vdCBydW4gQ2xvdWRNb25pdG9yaW5nTWV0cmljRmluZFF1ZXJ5ICR7cXVlcnl9YCwgZXJyb3IpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVByb2plY3RzUXVlcnkoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0UHJvamVjdHMoKTtcbiAgICByZXR1cm4gKHByb2plY3RzIGFzIFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KS5tYXAoKHM6IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IHN0cmluZyB9KSA9PiAoe1xuICAgICAgdGV4dDogcy5sYWJlbCxcbiAgICAgIHZhbHVlOiBzLnZhbHVlLFxuICAgICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVTZXJ2aWNlUXVlcnkoeyBwcm9qZWN0TmFtZSB9OiBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5KSB7XG4gICAgY29uc3QgbWV0cmljRGVzY3JpcHRvcnMgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0TWV0cmljVHlwZXMocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IHNlcnZpY2VzOiBNZXRyaWNEZXNjcmlwdG9yW10gPSBleHRyYWN0U2VydmljZXNGcm9tTWV0cmljRGVzY3JpcHRvcnMobWV0cmljRGVzY3JpcHRvcnMpO1xuICAgIHJldHVybiBzZXJ2aWNlcy5tYXAoKHMpID0+ICh7XG4gICAgICB0ZXh0OiBzLnNlcnZpY2VTaG9ydE5hbWUsXG4gICAgICB2YWx1ZTogcy5zZXJ2aWNlLFxuICAgICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVNZXRyaWNUeXBlc1F1ZXJ5KHsgc2VsZWN0ZWRTZXJ2aWNlLCBwcm9qZWN0TmFtZSB9OiBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5KSB7XG4gICAgaWYgKCFzZWxlY3RlZFNlcnZpY2UpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgbWV0cmljRGVzY3JpcHRvcnMgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0TWV0cmljVHlwZXMocHJvamVjdE5hbWUpO1xuICAgIHJldHVybiBnZXRNZXRyaWNUeXBlc0J5U2VydmljZShtZXRyaWNEZXNjcmlwdG9ycywgdGhpcy5kYXRhc291cmNlLnRlbXBsYXRlU3J2LnJlcGxhY2Uoc2VsZWN0ZWRTZXJ2aWNlKSkubWFwKFxuICAgICAgKHMpID0+ICh7XG4gICAgICAgIHRleHQ6IHMuZGlzcGxheU5hbWUsXG4gICAgICAgIHZhbHVlOiBzLnR5cGUsXG4gICAgICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVMYWJlbEtleXNRdWVyeSh7IHNlbGVjdGVkTWV0cmljVHlwZSwgcHJvamVjdE5hbWUgfTogQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeSkge1xuICAgIGlmICghc2VsZWN0ZWRNZXRyaWNUeXBlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IGxhYmVsS2V5cyA9IGF3YWl0IGdldExhYmVsS2V5cyh0aGlzLmRhdGFzb3VyY2UsIHNlbGVjdGVkTWV0cmljVHlwZSwgcHJvamVjdE5hbWUpO1xuICAgIHJldHVybiBsYWJlbEtleXMubWFwKHRoaXMudG9GaW5kUXVlcnlSZXN1bHQpO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlTGFiZWxWYWx1ZXNRdWVyeSh7IHNlbGVjdGVkTWV0cmljVHlwZSwgbGFiZWxLZXksIHByb2plY3ROYW1lIH06IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnkpIHtcbiAgICBpZiAoIXNlbGVjdGVkTWV0cmljVHlwZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCByZWZJZCA9ICdoYW5kbGVMYWJlbFZhbHVlc1F1ZXJ5JztcbiAgICAvLyBSRURVQ0VfTUVBTiBpcyBuZWVkZWQgc28gdGhlIGdyb3VwQnkgaXMgbm90IGlnbm9yZWRcbiAgICBjb25zdCBsYWJlbHMgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0TGFiZWxzKHNlbGVjdGVkTWV0cmljVHlwZSwgcmVmSWQsIHByb2plY3ROYW1lLCB7XG4gICAgICBncm91cEJ5czogW2xhYmVsS2V5XSxcbiAgICAgIGNyb3NzU2VyaWVzUmVkdWNlcjogJ1JFRFVDRV9NRUFOJyxcbiAgICB9KTtcbiAgICBjb25zdCBpbnRlcnBvbGF0ZWRLZXkgPSB0aGlzLmRhdGFzb3VyY2UudGVtcGxhdGVTcnYucmVwbGFjZShsYWJlbEtleSk7XG4gICAgY29uc3QgdmFsdWVzID0gbGFiZWxzLmhhc093blByb3BlcnR5KGludGVycG9sYXRlZEtleSkgPyBsYWJlbHNbaW50ZXJwb2xhdGVkS2V5XSA6IFtdO1xuICAgIHJldHVybiB2YWx1ZXMubWFwKHRoaXMudG9GaW5kUXVlcnlSZXN1bHQpO1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlUmVzb3VyY2VUeXBlUXVlcnkoeyBzZWxlY3RlZE1ldHJpY1R5cGUsIHByb2plY3ROYW1lIH06IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnkpIHtcbiAgICBpZiAoIXNlbGVjdGVkTWV0cmljVHlwZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBjb25zdCByZWZJZCA9ICdoYW5kbGVSZXNvdXJjZVR5cGVRdWVyeVF1ZXJ5VHlwZSc7XG4gICAgY29uc3QgbGFiZWxzID0gYXdhaXQgdGhpcy5kYXRhc291cmNlLmdldExhYmVscyhzZWxlY3RlZE1ldHJpY1R5cGUsIHJlZklkLCBwcm9qZWN0TmFtZSk7XG4gICAgcmV0dXJuIGxhYmVsc1sncmVzb3VyY2UudHlwZSddPy5tYXAodGhpcy50b0ZpbmRRdWVyeVJlc3VsdCkgPz8gW107XG4gIH1cblxuICBhc3luYyBoYW5kbGVBbGlnbmVyc1F1ZXJ5KHsgc2VsZWN0ZWRNZXRyaWNUeXBlLCBwcm9qZWN0TmFtZSB9OiBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5KSB7XG4gICAgaWYgKCFzZWxlY3RlZE1ldHJpY1R5cGUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgbWV0cmljRGVzY3JpcHRvcnMgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0TWV0cmljVHlwZXMocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBtZXRyaWNEZXNjcmlwdG9ycy5maW5kKFxuICAgICAgKG0pID0+IG0udHlwZSA9PT0gdGhpcy5kYXRhc291cmNlLnRlbXBsYXRlU3J2LnJlcGxhY2Uoc2VsZWN0ZWRNZXRyaWNUeXBlKVxuICAgICk7XG5cbiAgICBpZiAoIWRlc2NyaXB0b3IpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0QWxpZ25tZW50T3B0aW9uc0J5TWV0cmljKGRlc2NyaXB0b3IudmFsdWVUeXBlLCBkZXNjcmlwdG9yLm1ldHJpY0tpbmQpLm1hcCh0aGlzLnRvRmluZFF1ZXJ5UmVzdWx0KTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZUFnZ3JlZ2F0aW9uUXVlcnkoeyBzZWxlY3RlZE1ldHJpY1R5cGUsIHByb2plY3ROYW1lIH06IENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnkpIHtcbiAgICBpZiAoIXNlbGVjdGVkTWV0cmljVHlwZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG1ldHJpY0Rlc2NyaXB0b3JzID0gYXdhaXQgdGhpcy5kYXRhc291cmNlLmdldE1ldHJpY1R5cGVzKHByb2plY3ROYW1lKTtcbiAgICBjb25zdCBkZXNjcmlwdG9yID0gbWV0cmljRGVzY3JpcHRvcnMuZmluZChcbiAgICAgIChtKSA9PiBtLnR5cGUgPT09IHRoaXMuZGF0YXNvdXJjZS50ZW1wbGF0ZVNydi5yZXBsYWNlKHNlbGVjdGVkTWV0cmljVHlwZSlcbiAgICApO1xuXG4gICAgaWYgKCFkZXNjcmlwdG9yKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldEFnZ3JlZ2F0aW9uT3B0aW9uc0J5TWV0cmljKGRlc2NyaXB0b3IudmFsdWVUeXBlIGFzIFZhbHVlVHlwZXMsIGRlc2NyaXB0b3IubWV0cmljS2luZCBhcyBNZXRyaWNLaW5kKS5tYXAoXG4gICAgICB0aGlzLnRvRmluZFF1ZXJ5UmVzdWx0XG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVNMT1NlcnZpY2VzUXVlcnkoeyBwcm9qZWN0TmFtZSB9OiBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5KSB7XG4gICAgY29uc3Qgc2VydmljZXMgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0U0xPU2VydmljZXMocHJvamVjdE5hbWUpO1xuICAgIHJldHVybiBzZXJ2aWNlcy5tYXAodGhpcy50b0ZpbmRRdWVyeVJlc3VsdCk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVTTE9RdWVyeSh7IHNlbGVjdGVkU0xPU2VydmljZSwgcHJvamVjdE5hbWUgfTogQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeSkge1xuICAgIGNvbnN0IHNsb3MgPSBhd2FpdCB0aGlzLmRhdGFzb3VyY2UuZ2V0U2VydmljZUxldmVsT2JqZWN0aXZlcyhwcm9qZWN0TmFtZSwgc2VsZWN0ZWRTTE9TZXJ2aWNlKTtcbiAgICByZXR1cm4gc2xvcy5tYXAodGhpcy50b0ZpbmRRdWVyeVJlc3VsdCk7XG4gIH1cblxuICBhc3luYyBoYW5kbGVTZWxlY3RvclF1ZXJ5KCkge1xuICAgIHJldHVybiBTRUxFQ1RPUlMubWFwKHRoaXMudG9GaW5kUXVlcnlSZXN1bHQpO1xuICB9XG5cbiAgaGFuZGxlQWxpZ25tZW50UGVyaW9kUXVlcnkoKSB7XG4gICAgcmV0dXJuIEFMSUdOTUVOVF9QRVJJT0RTLm1hcCh0aGlzLnRvRmluZFF1ZXJ5UmVzdWx0KTtcbiAgfVxuXG4gIHRvRmluZFF1ZXJ5UmVzdWx0KHg6IGFueSkge1xuICAgIHJldHVybiBpc1N0cmluZyh4KSA/IHsgdGV4dDogeCwgZXhwYW5kYWJsZTogdHJ1ZSB9IDogeyAuLi54LCBleHBhbmRhYmxlOiB0cnVlIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IEFubm90YXRpb25UYXJnZXQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNsYXNzIENsb3VkTW9uaXRvcmluZ0Fubm90YXRpb25zUXVlcnlDdHJsIHtcbiAgc3RhdGljIHRlbXBsYXRlVXJsID0gJ3BhcnRpYWxzL2Fubm90YXRpb25zLmVkaXRvci5odG1sJztcbiAgZGVjbGFyZSBhbm5vdGF0aW9uOiBhbnk7XG5cbiAgLyoqIEBuZ0luamVjdCAqL1xuICBjb25zdHJ1Y3Rvcigkc2NvcGU6IGFueSkge1xuICAgIHRoaXMuYW5ub3RhdGlvbiA9ICRzY29wZS5jdHJsLmFubm90YXRpb24gfHwge307XG4gICAgdGhpcy5hbm5vdGF0aW9uLnRhcmdldCA9ICRzY29wZS5jdHJsLmFubm90YXRpb24udGFyZ2V0IHx8IHt9O1xuXG4gICAgdGhpcy5vblF1ZXJ5Q2hhbmdlID0gdGhpcy5vblF1ZXJ5Q2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBvblF1ZXJ5Q2hhbmdlKHRhcmdldDogQW5ub3RhdGlvblRhcmdldCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5hbm5vdGF0aW9uLnRhcmdldCwgdGFyZ2V0KTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgZ2V0QWdncmVnYXRpb25PcHRpb25zQnlNZXRyaWMgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgTWV0cmljRGVzY3JpcHRvciwgTWV0cmljS2luZCwgVmFsdWVUeXBlcyB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JGaWVsZCB9IGZyb20gJy4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVmSWQ6IHN0cmluZztcbiAgb25DaGFuZ2U6IChtZXRyaWNEZXNjcmlwdG9yOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG1ldHJpY0Rlc2NyaXB0b3I/OiBNZXRyaWNEZXNjcmlwdG9yO1xuICBjcm9zc1Nlcmllc1JlZHVjZXI6IHN0cmluZztcbiAgZ3JvdXBCeXM6IHN0cmluZ1tdO1xuICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xufVxuXG5leHBvcnQgY29uc3QgQWdncmVnYXRpb246IEZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBhZ2dPcHRpb25zID0gdXNlQWdncmVnYXRpb25PcHRpb25zQnlNZXRyaWMocHJvcHMpO1xuICBjb25zdCBzZWxlY3RlZCA9IHVzZVNlbGVjdGVkRnJvbU9wdGlvbnMoYWdnT3B0aW9ucywgcHJvcHMpO1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yRmllbGRcbiAgICAgIGxhYmVsV2lkdGg9ezE4fVxuICAgICAgbGFiZWw9XCJHcm91cCBieSBmdW5jdGlvblwiXG4gICAgICBkYXRhLXRlc3RpZD1cImNsb3VkLW1vbml0b3JpbmctYWdncmVnYXRpb25cIlxuICAgICAgaHRtbEZvcj17YCR7cHJvcHMucmVmSWR9LWdyb3VwLWJ5LWZ1bmN0aW9uYH1cbiAgICA+XG4gICAgICA8U2VsZWN0XG4gICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IHByb3BzLm9uQ2hhbmdlKHZhbHVlISl9XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZH1cbiAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVGVtcGxhdGUgVmFyaWFibGVzJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHByb3BzLnRlbXBsYXRlVmFyaWFibGVPcHRpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdBZ2dyZWdhdGlvbnMnLFxuICAgICAgICAgICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgICAgICAgICBvcHRpb25zOiBhZ2dPcHRpb25zLFxuICAgICAgICAgIH0sXG4gICAgICAgIF19XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFJlZHVjZXJcIlxuICAgICAgICBpbnB1dElkPXtgJHtwcm9wcy5yZWZJZH0tZ3JvdXAtYnktZnVuY3Rpb25gfVxuICAgICAgLz5cbiAgICA8L1F1ZXJ5RWRpdG9yRmllbGQ+XG4gICk7XG59O1xuXG5jb25zdCB1c2VBZ2dyZWdhdGlvbk9wdGlvbnNCeU1ldHJpYyA9ICh7IG1ldHJpY0Rlc2NyaXB0b3IgfTogUHJvcHMpOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPT4ge1xuICBjb25zdCB2YWx1ZVR5cGUgPSBtZXRyaWNEZXNjcmlwdG9yPy52YWx1ZVR5cGU7XG4gIGNvbnN0IG1ldHJpY0tpbmQgPSBtZXRyaWNEZXNjcmlwdG9yPy5tZXRyaWNLaW5kO1xuXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXZhbHVlVHlwZSB8fCAhbWV0cmljS2luZCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRBZ2dyZWdhdGlvbk9wdGlvbnNCeU1ldHJpYyh2YWx1ZVR5cGUgYXMgVmFsdWVUeXBlcywgbWV0cmljS2luZCBhcyBNZXRyaWNLaW5kKS5tYXAoKGEpID0+ICh7XG4gICAgICAuLi5hLFxuICAgICAgbGFiZWw6IGEudGV4dCxcbiAgICB9KSk7XG4gIH0sIFt2YWx1ZVR5cGUsIG1ldHJpY0tpbmRdKTtcbn07XG5cbmNvbnN0IHVzZVNlbGVjdGVkRnJvbU9wdGlvbnMgPSAoYWdnT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+LCBwcm9wczogUHJvcHMpID0+IHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGFsbE9wdGlvbnMgPSBbLi4uYWdnT3B0aW9ucywgLi4ucHJvcHMudGVtcGxhdGVWYXJpYWJsZU9wdGlvbnNdO1xuICAgIHJldHVybiBhbGxPcHRpb25zLmZpbmQoKHMpID0+IHMudmFsdWUgPT09IHByb3BzLmNyb3NzU2VyaWVzUmVkdWNlcik7XG4gIH0sIFthZ2dPcHRpb25zLCBwcm9wcy5jcm9zc1Nlcmllc1JlZHVjZXIsIHByb3BzLnRlbXBsYXRlVmFyaWFibGVPcHRpb25zXSk7XG59O1xuIiwiaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IElOUFVUX1dJRFRIIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAoYWxpYXM6IGFueSkgPT4gdm9pZDtcbiAgdmFsdWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBbGlhc0J5OiBGdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoeyByZWZJZCwgdmFsdWUgPSAnJywgb25DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCBbYWxpYXMsIHNldEFsaWFzXSA9IHVzZVN0YXRlKHZhbHVlID8/ICcnKTtcblxuICBjb25zdCBwcm9wYWdhdGVPbkNoYW5nZSA9IGRlYm91bmNlKG9uQ2hhbmdlLCAxMDAwKTtcblxuICBvbkNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBzZXRBbGlhcyhlLnRhcmdldC52YWx1ZSk7XG4gICAgcHJvcGFnYXRlT25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93IGxhYmVsPVwiQWxpYXMgYnlcIiBodG1sRm9yPXtgJHtyZWZJZH0tYWxpYXMtYnlgfT5cbiAgICAgIDxJbnB1dCBpZD17YCR7cmVmSWR9LWFsaWFzLWJ5YH0gd2lkdGg9e0lOUFVUX1dJRFRIfSB2YWx1ZT17YWxpYXN9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IEFMSUdOTUVOVF9QRVJJT0RTLCBTRUxFQ1RfV0lEVEggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBDdXN0b21NZXRhRGF0YSwgTWV0cmljUXVlcnksIFNMT1F1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBBbGlnbm1lbnRGdW5jdGlvbiwgUGVyaW9kU2VsZWN0LCBBbGlnbm1lbnRQZXJpb2RMYWJlbCwgUXVlcnlFZGl0b3JGaWVsZCwgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAocXVlcnk6IE1ldHJpY1F1ZXJ5IHwgU0xPUXVlcnkpID0+IHZvaWQ7XG4gIHF1ZXJ5OiBNZXRyaWNRdWVyeTtcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgY3VzdG9tTWV0YURhdGE6IEN1c3RvbU1ldGFEYXRhO1xuICBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlO1xufVxuXG5leHBvcnQgY29uc3QgQWxpZ25tZW50OiBGQzxQcm9wcz4gPSAoe1xuICByZWZJZCxcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gIG9uQ2hhbmdlLFxuICBxdWVyeSxcbiAgY3VzdG9tTWV0YURhdGEsXG4gIGRhdGFzb3VyY2UsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93XG4gICAgICBsYWJlbD1cIkFsaWdubWVudCBmdW5jdGlvblwiXG4gICAgICB0b29sdGlwPVwiVGhlIHByb2Nlc3Mgb2YgYWxpZ25tZW50IGNvbnNpc3RzIG9mIGNvbGxlY3RpbmcgYWxsIGRhdGEgcG9pbnRzIHJlY2VpdmVkIGluIGEgZml4ZWQgbGVuZ3RoIG9mIHRpbWUsIGFwcGx5aW5nIGEgZnVuY3Rpb24gdG8gY29tYmluZSB0aG9zZSBkYXRhIHBvaW50cywgYW5kIGFzc2lnbmluZyBhIHRpbWVzdGFtcCB0byB0aGUgcmVzdWx0LlwiXG4gICAgICBmaWxsQ29tcG9uZW50PXs8QWxpZ25tZW50UGVyaW9kTGFiZWwgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX0gY3VzdG9tTWV0YURhdGE9e2N1c3RvbU1ldGFEYXRhfSAvPn1cbiAgICAgIGh0bWxGb3I9e2Ake3JlZklkfS1hbGlnbm1lbnQtZnVuY3Rpb25gfVxuICAgID5cbiAgICAgIDxBbGlnbm1lbnRGdW5jdGlvblxuICAgICAgICBpbnB1dElkPXtgJHtyZWZJZH0tYWxpZ25tZW50LWZ1bmN0aW9uYH1cbiAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3RlbXBsYXRlVmFyaWFibGVPcHRpb25zfVxuICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgIC8+XG4gICAgICA8UXVlcnlFZGl0b3JGaWVsZCBsYWJlbD1cIkFsaWdubWVudCBwZXJpb2RcIiBodG1sRm9yPXtgJHtyZWZJZH0tYWxpZ25tZW50LXBlcmlvZGB9PlxuICAgICAgICA8UGVyaW9kU2VsZWN0XG4gICAgICAgICAgaW5wdXRJZD17YCR7cmVmSWR9LWFsaWdubWVudC1wZXJpb2RgfVxuICAgICAgICAgIHNlbGVjdFdpZHRoPXtTRUxFQ1RfV0lEVEh9XG4gICAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3RlbXBsYXRlVmFyaWFibGVPcHRpb25zfVxuICAgICAgICAgIGN1cnJlbnQ9e3F1ZXJ5LmFsaWdubWVudFBlcmlvZH1cbiAgICAgICAgICBvbkNoYW5nZT17KHBlcmlvZCkgPT4gb25DaGFuZ2UoeyAuLi5xdWVyeSwgYWxpZ25tZW50UGVyaW9kOiBwZXJpb2QgfSl9XG4gICAgICAgICAgYWxpZ21lbnRQZXJpb2RzPXtBTElHTk1FTlRfUEVSSU9EU31cbiAgICAgICAgLz5cbiAgICAgIDwvUXVlcnlFZGl0b3JGaWVsZD5cbiAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFNFTEVDVF9XSURUSCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRBbGlnbm1lbnRQaWNrZXJEYXRhIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcbmltcG9ydCB7IE1ldHJpY1F1ZXJ5IH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgaW5wdXRJZDogc3RyaW5nO1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBNZXRyaWNRdWVyeSkgPT4gdm9pZDtcbiAgcXVlcnk6IE1ldHJpY1F1ZXJ5O1xuICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uczogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+O1xufVxuXG5leHBvcnQgY29uc3QgQWxpZ25tZW50RnVuY3Rpb246IEZDPFByb3BzPiA9ICh7IGlucHV0SWQsIHF1ZXJ5LCB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucywgb25DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCB7IHZhbHVlVHlwZSwgbWV0cmljS2luZCwgcGVyU2VyaWVzQWxpZ25lcjogcHNhLCBwcmVwcm9jZXNzb3IgfSA9IHF1ZXJ5O1xuICBjb25zdCB7IHBlclNlcmllc0FsaWduZXIsIGFsaWduT3B0aW9ucyB9ID0gdXNlTWVtbyhcbiAgICAoKSA9PiBnZXRBbGlnbm1lbnRQaWNrZXJEYXRhKHZhbHVlVHlwZSwgbWV0cmljS2luZCwgcHNhLCBwcmVwcm9jZXNzb3IpLFxuICAgIFt2YWx1ZVR5cGUsIG1ldHJpY0tpbmQsIHBzYSwgcHJlcHJvY2Vzc29yXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdFxuICAgICAgd2lkdGg9e1NFTEVDVF9XSURUSH1cbiAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZSB9KSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBwZXJTZXJpZXNBbGlnbmVyOiB2YWx1ZSEgfSl9XG4gICAgICB2YWx1ZT17Wy4uLmFsaWduT3B0aW9ucywgLi4udGVtcGxhdGVWYXJpYWJsZU9wdGlvbnNdLmZpbmQoKHMpID0+IHMudmFsdWUgPT09IHBlclNlcmllc0FsaWduZXIpfVxuICAgICAgb3B0aW9ucz17W1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdUZW1wbGF0ZSBWYXJpYWJsZXMnLFxuICAgICAgICAgIG9wdGlvbnM6IHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdBbGlnbm1lbnQgb3B0aW9ucycsXG4gICAgICAgICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgICAgICAgb3B0aW9uczogYWxpZ25PcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgXX1cbiAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IEFsaWdubWVudFwiXG4gICAgICBpbnB1dElkPXtpbnB1dElkfVxuICAgID48L1NlbGVjdD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHJhbmdlVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBBTElHTk1FTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQ3VzdG9tTWV0YURhdGEgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjdXN0b21NZXRhRGF0YTogQ3VzdG9tTWV0YURhdGE7XG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2U7XG59XG5cbmV4cG9ydCBjb25zdCBBbGlnbm1lbnRQZXJpb2RMYWJlbDogRkM8UHJvcHM+ID0gKHsgY3VzdG9tTWV0YURhdGEsIGRhdGFzb3VyY2UgfSkgPT4ge1xuICBjb25zdCB7IHBlclNlcmllc0FsaWduZXIsIGFsaWdubWVudFBlcmlvZCB9ID0gY3VzdG9tTWV0YURhdGE7XG4gIGNvbnN0IGZvcm1hdEFsaWdubWVudFRleHQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIWFsaWdubWVudFBlcmlvZCB8fCAhcGVyU2VyaWVzQWxpZ25lcikge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGFsaWdubWVudCA9IEFMSUdOTUVOVFMuZmluZCgoYXApID0+IGFwLnZhbHVlID09PSBkYXRhc291cmNlLnRlbXBsYXRlU3J2LnJlcGxhY2UocGVyU2VyaWVzQWxpZ25lcikpO1xuICAgIGNvbnN0IHNlY29uZHMgPSBwYXJzZUludChhbGlnbm1lbnRQZXJpb2QgPz8gJycucmVwbGFjZSgvW14wLTldL2csICcnKSwgMTApO1xuICAgIGNvbnN0IGhtcyA9IHJhbmdlVXRpbC5zZWNvbmRzVG9IbXMoc2Vjb25kcyk7XG4gICAgcmV0dXJuIGAke2htc30gaW50ZXJ2YWwgKCR7YWxpZ25tZW50Py50ZXh0ID8/ICcnfSlgO1xuICB9LCBbZGF0YXNvdXJjZSwgcGVyU2VyaWVzQWxpZ25lciwgYWxpZ25tZW50UGVyaW9kXSk7XG5cbiAgcmV0dXJuIDxsYWJlbD57Zm9ybWF0QWxpZ25tZW50VGV4dH08L2xhYmVsPjtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBBbm5vdGF0aW9uc0hlbHA6IEZDID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBncmFmYW5hLWluZm8tYm94IGFsZXJ0LWluZm9cIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoNT5Bbm5vdGF0aW9uIFF1ZXJ5IEZvcm1hdDwvaDU+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFuIGFubm90YXRpb24gaXMgYW4gZXZlbnQgdGhhdCBpcyBvdmVybGFpZCBvbiB0b3Agb2YgZ3JhcGhzLiBBbm5vdGF0aW9uIHJlbmRlcmluZyBpcyBleHBlbnNpdmUgc28gaXQgaXNcbiAgICAgICAgICBpbXBvcnRhbnQgdG8gbGltaXQgdGhlIG51bWJlciBvZiByb3dzIHJldHVybmVkLnsnICd9XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIFRpdGxlIGFuZCBUZXh0IGZpZWxkcyBzdXBwb3J0IHRlbXBsYXRpbmcgYW5kIGNhbiB1c2UgZGF0YSByZXR1cm5lZCBmcm9tIHRoZSBxdWVyeS4gRm9yIGV4YW1wbGUsIHRoZSBUaXRsZVxuICAgICAgICAgIGZpZWxkIGNvdWxkIGhhdmUgdGhlIGZvbGxvd2luZyB0ZXh0OlxuICAgICAgICA8L3A+XG4gICAgICAgIDxjb2RlPlxuICAgICAgICAgIHtgJHsne3ttZXRyaWMudHlwZX19J31gfSBoYXMgdmFsdWU6IHtgJHsne3ttZXRyaWMudmFsdWV9fSd9YH1cbiAgICAgICAgPC9jb2RlPlxuICAgICAgICA8cD5cbiAgICAgICAgICBFeGFtcGxlIFJlc3VsdDogPGNvZGU+bW9uaXRvcmluZy5nb29nbGVhcGlzLmNvbS91cHRpbWVfY2hlY2svaHR0cF9zdGF0dXMgaGFzIHRoaXMgdmFsdWU6IDUwMjwvY29kZT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8bGFiZWw+UGF0dGVybnM6PC9sYWJlbD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGNvZGU+e2Akeyd7e21ldHJpYy52YWx1ZX19J31gfTwvY29kZT4gPSB2YWx1ZSBvZiB0aGUgbWV0cmljL3BvaW50XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGNvZGU+e2Akeyd7e21ldHJpYy50eXBlfX0nfWB9PC9jb2RlPiA9IG1ldHJpYyB0eXBlIGUuZy4gY29tcHV0ZS5nb29nbGVhcGlzLmNvbS9pbnN0YW5jZS9jcHUvdXNhZ2VfdGltZVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxjb2RlPntgJHsne3ttZXRyaWMubmFtZX19J31gfTwvY29kZT4gPSBuYW1lIHBhcnQgb2YgbWV0cmljIGUuZy4gaW5zdGFuY2UvY3B1L3VzYWdlX3RpbWVcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8Y29kZT57YCR7J3t7bWV0cmljLnNlcnZpY2V9fSd9YH08L2NvZGU+ID0gc2VydmljZSBwYXJ0IG9mIG1ldHJpYyBlLmcuIGNvbXB1dGVcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8Y29kZT57YCR7J3t7bWV0cmljLmxhYmVsLmxhYmVsX25hbWV9fSd9YH08L2NvZGU+ID0gTWV0cmljIGxhYmVsIG1ldGFkYXRhIGUuZy4gbWV0cmljLmxhYmVsLmluc3RhbmNlX25hbWVcbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8Y29kZT57YCR7J3t7cmVzb3VyY2UubGFiZWwubGFiZWxfbmFtZX19J31gfTwvY29kZT4gPSBSZXNvdXJjZSBsYWJlbCBtZXRhZGF0YSBlLmcuIHJlc291cmNlLmxhYmVsLnpvbmVcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBRdWVyeUVkaXRvckhlbHBQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBDbG91ZE1vbml0b3JpbmdRdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvdWRNb25pdG9yaW5nQ2hlYXRTaGVldCBleHRlbmRzIFB1cmVDb21wb25lbnQ8XG4gIFF1ZXJ5RWRpdG9ySGVscFByb3BzPENsb3VkTW9uaXRvcmluZ1F1ZXJ5PixcbiAgeyB1c2VyRXhhbXBsZXM6IHN0cmluZ1tdIH1cbj4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5DbG91ZCBNb25pdG9yaW5nIGFsaWFzIHBhdHRlcm5zPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEZvcm1hdCB0aGUgbGVnZW5kIGtleXMgYW55IHdheSB5b3Ugd2FudCBieSB1c2luZyBhbGlhcyBwYXR0ZXJucy4gRm9ybWF0IHRoZSBsZWdlbmQga2V5cyBhbnkgd2F5IHlvdSB3YW50IGJ5XG4gICAgICAgICAgICB1c2luZyBhbGlhcyBwYXR0ZXJucy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgRXhhbXBsZTpcbiAgICAgICAgICA8Y29kZT57YCR7J3t7bWV0cmljLm5hbWV9fSAtIHt7bWV0cmljLmxhYmVsLmluc3RhbmNlX25hbWV9fSd9YH08L2NvZGU+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgUmVzdWx0OiAmbmJzcDsmbmJzcDs8Y29kZT5jcHUvdXNhZ2VfdGltZSAtIHNlcnZlcjEtZXVyb3BlLXdlc3QtMTwvY29kZT5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8bGFiZWw+UGF0dGVybnM8L2xhYmVsPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDx1bFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NgXG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGNvZGU+e2Akeyd7e21ldHJpYy50eXBlfX0nfWB9PC9jb2RlPiA9IG1ldHJpYyB0eXBlIGUuZy4gY29tcHV0ZS5nb29nbGVhcGlzLmNvbS9pbnN0YW5jZS9jcHUvdXNhZ2VfdGltZVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGNvZGU+e2Akeyd7e21ldHJpYy5uYW1lfX0nfWB9PC9jb2RlPiA9IG5hbWUgcGFydCBvZiBtZXRyaWMgZS5nLiBpbnN0YW5jZS9jcHUvdXNhZ2VfdGltZVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGNvZGU+e2Akeyd7e21ldHJpYy5zZXJ2aWNlfX0nfWB9PC9jb2RlPiA9IHNlcnZpY2UgcGFydCBvZiBtZXRyaWMgZS5nLiBjb21wdXRlXG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Y29kZT57YCR7J3t7bWV0cmljLmxhYmVsLmxhYmVsX25hbWV9fSd9YH08L2NvZGU+ID0gTWV0cmljIGxhYmVsIG1ldGFkYXRhIGUuZy4gbWV0cmljLmxhYmVsLmluc3RhbmNlX25hbWVcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxjb2RlPntgJHsne3tyZXNvdXJjZS5sYWJlbC5sYWJlbF9uYW1lfX0nfWB9PC9jb2RlPiA9IFJlc291cmNlIGxhYmVsIG1ldGFkYXRhIGUuZy4gcmVzb3VyY2UubGFiZWwuem9uZVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGNvZGU+e2Akeyd7e21ldGFkYXRhLnN5c3RlbV9sYWJlbHMubmFtZX19J31gfTwvY29kZT4gPSBNZXRhIGRhdGEgc3lzdGVtIGxhYmVscyBlLmcuXG4gICAgICAgICAgICAgIG1ldGFkYXRhLnN5c3RlbV9sYWJlbHMubmFtZS4gRm9yIHRoaXMgdG8gd29yaywgdGhlIG5lZWRzIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBncm91cCBieVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGNvZGU+e2Akeyd7e21ldGFkYXRhLnVzZXJfbGFiZWxzLm5hbWV9fSd9YH08L2NvZGU+ID0gTWV0YSBkYXRhIHVzZXIgbGFiZWxzIGUuZy5cbiAgICAgICAgICAgICAgbWV0YWRhdGEudXNlcl9sYWJlbHMubmFtZS4gRm9yIHRoaXMgdG8gd29yaywgdGhlIG5lZWRzIHRvIGJlIGluY2x1ZGVkIGluIHRoZSBncm91cCBieVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGNvZGU+e2Akeyd7e2J1Y2tldH19J31gfTwvY29kZT4gPSBidWNrZXQgYm91bmRhcnkgZm9yIGRpc3RyaWJ1dGlvbiBtZXRyaWNzIHdoZW4gdXNpbmcgYSBoZWF0bWFwIGluXG4gICAgICAgICAgICAgIEdyYWZhbmFcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxjb2RlPntgJHsne3twcm9qZWN0fX0nfWB9PC9jb2RlPiA9IFRoZSBwcm9qZWN0IG5hbWUgdGhhdCB3YXMgc3BlY2lmaWVkIGluIHRoZSBxdWVyeSBlZGl0b3JcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxjb2RlPntgJHsne3tzZXJ2aWNlfX0nfWB9PC9jb2RlPiA9IFRoZSBzZXJ2aWNlIGlkIHRoYXQgd2FzIHNwZWNpZmllZCBpbiB0aGUgU0xPIHF1ZXJ5IGVkaXRvclxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGNvZGU+e2Akeyd7e3Nsb319J31gfTwvY29kZT4gPSBUaGUgU0xPIGlkIHRoYXQgd2FzIHNwZWNpZmllZCBpbiB0aGUgU0xPIHF1ZXJ5IGVkaXRvclxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGNvZGU+e2Akeyd7e3NlbGVjdG9yfX0nfWB9PC9jb2RlPiA9IFRoZSBTZWxlY3RvciBmdW5jdGlvbiB0aGF0IHdhcyBzcGVjaWZpZWQgaW4gdGhlIFNMTyBxdWVyeSBlZGl0b3JcbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQ29ubmVjdGlvbkNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL2dvb2dsZS1zZGsnO1xuXG5pbXBvcnQgeyBDbG91ZE1vbml0b3JpbmdPcHRpb25zLCBDbG91ZE1vbml0b3JpbmdTZWN1cmVKc29uRGF0YSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzPENsb3VkTW9uaXRvcmluZ09wdGlvbnMsIENsb3VkTW9uaXRvcmluZ1NlY3VyZUpzb25EYXRhPjtcblxuZXhwb3J0IGNsYXNzIENvbmZpZ0VkaXRvciBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8Q29ubmVjdGlvbkNvbmZpZyB7Li4udGhpcy5wcm9wc30+PC9Db25uZWN0aW9uQ29uZmlnPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBIb3Jpem9udGFsR3JvdXAsIElubGluZUZpZWxkLCBJbmxpbmVMYWJlbCwgUG9wb3ZlckNvbnRlbnQsIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgSU5ORVJfTEFCRUxfV0lEVEgsIExBQkVMX1dJRFRIIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuaW50ZXJmYWNlIFZhcmlhYmxlUXVlcnlGaWVsZFByb3BzIHtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICBvcHRpb25zOiBTZWxlY3RhYmxlVmFsdWVbXTtcbiAgdmFsdWU6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgYWxsb3dDdXN0b21WYWx1ZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBWYXJpYWJsZVF1ZXJ5RmllbGQ6IEZDPFZhcmlhYmxlUXVlcnlGaWVsZFByb3BzPiA9ICh7XG4gIGxhYmVsLFxuICBvbkNoYW5nZSxcbiAgdmFsdWUsXG4gIG9wdGlvbnMsXG4gIGFsbG93Q3VzdG9tVmFsdWUgPSBmYWxzZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SW5saW5lRmllbGQgbGFiZWw9e2xhYmVsfSBsYWJlbFdpZHRoPXsyMH0+XG4gICAgICA8U2VsZWN0XG4gICAgICAgIHdpZHRoPXsyNX1cbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17YWxsb3dDdXN0b21WYWx1ZX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KHsgdmFsdWUgfSkgPT4gb25DaGFuZ2UodmFsdWUhKX1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgIC8+XG4gICAgPC9JbmxpbmVGaWVsZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB0b29sdGlwPzogUG9wb3ZlckNvbnRlbnQ7XG4gIGxhYmVsPzogUmVhY3QuUmVhY3ROb2RlO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIG5vRmlsbEVuZD86IGJvb2xlYW47XG4gIGxhYmVsV2lkdGg/OiBudW1iZXI7XG4gIGZpbGxDb21wb25lbnQ/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGh0bWxGb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBRdWVyeUVkaXRvclJvdzogRkM8UHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGxhYmVsLFxuICB0b29sdGlwLFxuICBmaWxsQ29tcG9uZW50LFxuICBub0ZpbGxFbmQgPSBmYWxzZSxcbiAgbGFiZWxXaWR0aCA9IExBQkVMX1dJRFRILFxuICBodG1sRm9yLFxuICAuLi5yZXN0XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCIgey4uLnJlc3R9PlxuICAgICAge2xhYmVsICYmIChcbiAgICAgICAgPElubGluZUxhYmVsIHdpZHRoPXtsYWJlbFdpZHRofSB0b29sdGlwPXt0b29sdGlwfSBodG1sRm9yPXtodG1sRm9yfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvSW5saW5lTGFiZWw+XG4gICAgICApfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Nzc2BcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgYH1cbiAgICAgID5cbiAgICAgICAgPEhvcml6b250YWxHcm91cCBzcGFjaW5nPVwieHNcIiB3aWR0aD1cImF1dG9cIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2dmLWZvcm0tLWdyb3cnfT5cbiAgICAgICAge25vRmlsbEVuZCB8fCA8ZGl2IGNsYXNzTmFtZT17J2dmLWZvcm0tbGFiZWwgZ2YtZm9ybS1sYWJlbC0tZ3Jvdyd9PntmaWxsQ29tcG9uZW50fTwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFF1ZXJ5RWRpdG9yRmllbGQ6IEZDPFByb3BzPiA9ICh7IGNoaWxkcmVuLCBsYWJlbCwgdG9vbHRpcCwgbGFiZWxXaWR0aCA9IElOTkVSX0xBQkVMX1dJRFRILCAuLi5yZXN0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xhYmVsICYmIChcbiAgICAgICAgPElubGluZUxhYmVsIHdpZHRoPXtsYWJlbFdpZHRofSB0b29sdGlwPXt0b29sdGlwfSB7Li4ucmVzdH0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L0lubGluZUxhYmVsPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBHUkFQSF9QRVJJT0RTLCBTRUxFQ1RfV0lEVEggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgeyBQZXJpb2RTZWxlY3QsIFF1ZXJ5RWRpdG9yUm93IH0gZnJvbSAnLic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZWZJZDogc3RyaW5nO1xuICBvbkNoYW5nZTogKHBlcmlvZDogc3RyaW5nKSA9PiB2b2lkO1xuICB2YXJpYWJsZU9wdGlvbkdyb3VwOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPjtcbiAgZ3JhcGhQZXJpb2Q/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBHcmFwaFBlcmlvZDogRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHsgcmVmSWQsIG9uQ2hhbmdlLCBncmFwaFBlcmlvZCwgdmFyaWFibGVPcHRpb25Hcm91cCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxRdWVyeUVkaXRvclJvd1xuICAgICAgICBsYWJlbD1cIkdyYXBoIHBlcmlvZFwiXG4gICAgICAgIGh0bWxGb3I9e2Ake3JlZklkfS1ncmFwaC1wZXJpb2RgfVxuICAgICAgICB0b29sdGlwPXtcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgU2V0IDxjb2RlPmdyYXBoX3BlcmlvZDwvY29kZT4gd2hpY2ggZm9yY2VzIGEgcHJlZmVycmVkIHBlcmlvZCBiZXR3ZWVuIHBvaW50cy4gQXV0b21hdGljYWxseSBzZXQgdG8gdGhlXG4gICAgICAgICAgICBjdXJyZW50IGludGVydmFsIGlmIGxlZnQgYmxhbmsuXG4gICAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgPFN3aXRjaFxuICAgICAgICAgIGRhdGEtdGVzdGlkPXtgJHtyZWZJZH0tc3dpdGNoLWdyYXBoLXBlcmlvZGB9XG4gICAgICAgICAgdmFsdWU9e2dyYXBoUGVyaW9kICE9PSAnZGlzYWJsZWQnfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQgPyAnJyA6ICdkaXNhYmxlZCcpfVxuICAgICAgICAvPlxuICAgICAgICA8UGVyaW9kU2VsZWN0XG4gICAgICAgICAgaW5wdXRJZD17YCR7cmVmSWR9LWdyYXBoLXBlcmlvZGB9XG4gICAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3ZhcmlhYmxlT3B0aW9uR3JvdXAub3B0aW9uc31cbiAgICAgICAgICBjdXJyZW50PXtncmFwaFBlcmlvZH1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgc2VsZWN0V2lkdGg9e1NFTEVDVF9XSURUSH1cbiAgICAgICAgICBkaXNhYmxlZD17Z3JhcGhQZXJpb2QgPT09ICdkaXNhYmxlZCd9XG4gICAgICAgICAgYWxpZ21lbnRQZXJpb2RzPXtHUkFQSF9QRVJJT0RTfVxuICAgICAgICAvPlxuICAgICAgPC9RdWVyeUVkaXRvclJvdz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgTXVsdGlTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IElOUFVUX1dJRFRILCBTWVNURU1fTEFCRUxTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGxhYmVsc1RvR3JvdXBlZE9wdGlvbnMgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHsgTWV0cmljRGVzY3JpcHRvciwgTWV0cmljUXVlcnkgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0aW9uLCBRdWVyeUVkaXRvclJvdyB9IGZyb20gJy4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVmSWQ6IHN0cmluZztcbiAgdmFyaWFibGVPcHRpb25Hcm91cDogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz47XG4gIGxhYmVsczogc3RyaW5nW107XG4gIG1ldHJpY0Rlc2NyaXB0b3I/OiBNZXRyaWNEZXNjcmlwdG9yO1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBNZXRyaWNRdWVyeSkgPT4gdm9pZDtcbiAgcXVlcnk6IE1ldHJpY1F1ZXJ5O1xufVxuXG5leHBvcnQgY29uc3QgR3JvdXBCeTogRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHtcbiAgcmVmSWQsXG4gIGxhYmVsczogZ3JvdXBCeXMgPSBbXSxcbiAgcXVlcnksXG4gIG9uQ2hhbmdlLFxuICB2YXJpYWJsZU9wdGlvbkdyb3VwLFxuICBtZXRyaWNEZXNjcmlwdG9yLFxufSkgPT4ge1xuICBjb25zdCBvcHRpb25zID0gdXNlTWVtbyhcbiAgICAoKSA9PiBbdmFyaWFibGVPcHRpb25Hcm91cCwgLi4ubGFiZWxzVG9Hcm91cGVkT3B0aW9ucyhbLi4uZ3JvdXBCeXMsIC4uLlNZU1RFTV9MQUJFTFNdKV0sXG4gICAgW2dyb3VwQnlzLCB2YXJpYWJsZU9wdGlvbkdyb3VwXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93XG4gICAgICBsYWJlbD1cIkdyb3VwIGJ5XCJcbiAgICAgIHRvb2x0aXA9XCJZb3UgY2FuIHJlZHVjZSB0aGUgYW1vdW50IG9mIGRhdGEgcmV0dXJuZWQgZm9yIGEgbWV0cmljIGJ5IGNvbWJpbmluZyBkaWZmZXJlbnQgdGltZSBzZXJpZXMuIFRvIGNvbWJpbmUgbXVsdGlwbGUgdGltZSBzZXJpZXMsIHlvdSBjYW4gc3BlY2lmeSBhIGdyb3VwaW5nIGFuZCBhIGZ1bmN0aW9uLiBHcm91cGluZyBpcyBkb25lIG9uIHRoZSBiYXNpcyBvZiBsYWJlbHMuIFRoZSBncm91cGluZyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNvbWJpbmUgdGhlIHRpbWUgc2VyaWVzIGluIHRoZSBncm91cCBpbnRvIGEgc2luZ2xlIHRpbWUgc2VyaWVzLlwiXG4gICAgICBodG1sRm9yPXtgJHtyZWZJZH0tZ3JvdXAtYnlgfVxuICAgID5cbiAgICAgIDxNdWx0aVNlbGVjdFxuICAgICAgICBpbnB1dElkPXtgJHtyZWZJZH0tZ3JvdXAtYnlgfVxuICAgICAgICB3aWR0aD17SU5QVVRfV0lEVEh9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGxhYmVsXCJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgdmFsdWU9e3F1ZXJ5Lmdyb3VwQnlzID8/IFtdfVxuICAgICAgICBvbkNoYW5nZT17KG9wdGlvbnMpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBncm91cEJ5czogb3B0aW9ucy5tYXAoKG8pID0+IG8udmFsdWUhKSB9KTtcbiAgICAgICAgfX1cbiAgICAgID48L011bHRpU2VsZWN0PlxuICAgICAgPEFnZ3JlZ2F0aW9uXG4gICAgICAgIG1ldHJpY0Rlc2NyaXB0b3I9e21ldHJpY0Rlc2NyaXB0b3J9XG4gICAgICAgIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zPXt2YXJpYWJsZU9wdGlvbkdyb3VwLm9wdGlvbnN9XG4gICAgICAgIGNyb3NzU2VyaWVzUmVkdWNlcj17cXVlcnkuY3Jvc3NTZXJpZXNSZWR1Y2VyfVxuICAgICAgICBncm91cEJ5cz17cXVlcnkuZ3JvdXBCeXMgPz8gW119XG4gICAgICAgIG9uQ2hhbmdlPXsoY3Jvc3NTZXJpZXNSZWR1Y2VyKSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBjcm9zc1Nlcmllc1JlZHVjZXIgfSl9XG4gICAgICAgIHJlZklkPXtyZWZJZH1cbiAgICAgID48L0FnZ3JlZ2F0aW9uPlxuICAgIDwvUXVlcnlFZGl0b3JSb3c+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUsIHRvT3B0aW9uIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIEhvcml6b250YWxHcm91cCwgU2VsZWN0LCBWZXJ0aWNhbEdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQ3VzdG9tQ29udHJvbFByb3BzIH0gZnJvbSAnQGdyYWZhbmEvdWkvc3JjL2NvbXBvbmVudHMvU2VsZWN0L3R5cGVzJztcblxuaW1wb3J0IHsgU0VMRUNUX1dJRFRIIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGxhYmVsc1RvR3JvdXBlZE9wdGlvbnMsIHN0cmluZ0FycmF5VG9GaWx0ZXJzIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIGxhYmVsczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB9O1xuICBmaWx0ZXJzOiBzdHJpbmdbXTtcbiAgb25DaGFuZ2U6IChmaWx0ZXJzOiBzdHJpbmdbXSkgPT4gdm9pZDtcbiAgdmFyaWFibGVPcHRpb25Hcm91cDogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz47XG59XG5cbmNvbnN0IG9wZXJhdG9ycyA9IFsnPScsICchPScsICc9ficsICchPX4nXTtcblxuY29uc3QgRmlsdGVyQnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MQnV0dG9uRWxlbWVudCwgQ3VzdG9tQ29udHJvbFByb3BzPHN0cmluZz4+KFxuICAoeyB2YWx1ZSwgaXNPcGVuLCBpbnZhbGlkLCAuLi5yZXN0IH0sIHJlZikgPT4ge1xuICAgIHJldHVybiA8QnV0dG9uIHsuLi5yZXN0fSByZWY9e3JlZn0gdmFyaWFudD1cInNlY29uZGFyeVwiIGljb249XCJwbHVzXCIgYXJpYS1sYWJlbD1cIkFkZCBmaWx0ZXJcIj48L0J1dHRvbj47XG4gIH1cbik7XG5GaWx0ZXJCdXR0b24uZGlzcGxheU5hbWUgPSAnRmlsdGVyQnV0dG9uJztcblxuY29uc3QgT3BlcmF0b3JCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxCdXR0b25FbGVtZW50LCBDdXN0b21Db250cm9sUHJvcHM8c3RyaW5nPj4oKHsgdmFsdWUsIC4uLnJlc3QgfSwgcmVmKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbiB7Li4ucmVzdH0gcmVmPXtyZWZ9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInF1ZXJ5LXNlZ21lbnQtb3BlcmF0b3JcIj57dmFsdWU/LmxhYmVsfTwvc3Bhbj5cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn0pO1xuT3BlcmF0b3JCdXR0b24uZGlzcGxheU5hbWUgPSAnT3BlcmF0b3JCdXR0b24nO1xuXG5leHBvcnQgY29uc3QgTGFiZWxGaWx0ZXI6IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7XG4gIGxhYmVscyA9IHt9LFxuICBmaWx0ZXJzOiBmaWx0ZXJBcnJheSxcbiAgb25DaGFuZ2UsXG4gIHZhcmlhYmxlT3B0aW9uR3JvdXAsXG59KSA9PiB7XG4gIGNvbnN0IGZpbHRlcnMgPSB1c2VNZW1vKCgpID0+IHN0cmluZ0FycmF5VG9GaWx0ZXJzKGZpbHRlckFycmF5KSwgW2ZpbHRlckFycmF5XSk7XG4gIGNvbnN0IG9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+IFt2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi5sYWJlbHNUb0dyb3VwZWRPcHRpb25zKE9iamVjdC5rZXlzKGxhYmVscykpXSxcbiAgICBbbGFiZWxzLCB2YXJpYWJsZU9wdGlvbkdyb3VwXVxuICApO1xuXG4gIGNvbnN0IGZpbHRlcnNUb1N0cmluZ0FycmF5ID0gdXNlQ2FsbGJhY2soKGZpbHRlcnM6IEZpbHRlcltdKSA9PiB7XG4gICAgY29uc3Qgc3RyQXJyID0gZmxhdHRlbihmaWx0ZXJzLm1hcCgoeyBrZXksIG9wZXJhdG9yLCB2YWx1ZSwgY29uZGl0aW9uIH0pID0+IFtrZXksIG9wZXJhdG9yLCB2YWx1ZSwgY29uZGl0aW9uIV0pKTtcbiAgICByZXR1cm4gc3RyQXJyLnNsaWNlKDAsIHN0ckFyci5sZW5ndGggLSAxKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IEFkZEZpbHRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNlbGVjdFxuICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgIG9wdGlvbnM9e1t2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi5sYWJlbHNUb0dyb3VwZWRPcHRpb25zKE9iamVjdC5rZXlzKGxhYmVscykpXX1cbiAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlOiBrZXkgPSAnJyB9KSA9PlxuICAgICAgICAgIG9uQ2hhbmdlKGZpbHRlcnNUb1N0cmluZ0FycmF5KFsuLi5maWx0ZXJzLCB7IGtleSwgb3BlcmF0b3I6ICc9JywgY29uZGl0aW9uOiAnQU5EJywgdmFsdWU6ICcnIH1dKSlcbiAgICAgICAgfVxuICAgICAgICBtZW51UGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgcmVuZGVyQ29udHJvbD17RmlsdGVyQnV0dG9ufVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93XG4gICAgICBsYWJlbD1cIkZpbHRlclwiXG4gICAgICB0b29sdGlwPXtcbiAgICAgICAgJ1RvIHJlZHVjZSB0aGUgYW1vdW50IG9mIGRhdGEgY2hhcnRlZCwgYXBwbHkgYSBmaWx0ZXIuIEEgZmlsdGVyIGhhcyB0aHJlZSBjb21wb25lbnRzOiBhIGxhYmVsLCBhIGNvbXBhcmlzb24sIGFuZCBhIHZhbHVlLiBUaGUgY29tcGFyaXNvbiBjYW4gYmUgYW4gZXF1YWxpdHksIGluZXF1YWxpdHksIG9yIHJlZ3VsYXIgZXhwcmVzc2lvbi4nXG4gICAgICB9XG4gICAgICBub0ZpbGxFbmQ9e2ZpbHRlcnMubGVuZ3RoID4gMX1cbiAgICA+XG4gICAgICA8VmVydGljYWxHcm91cCBzcGFjaW5nPVwieHNcIiB3aWR0aD1cImF1dG9cIj5cbiAgICAgICAge2ZpbHRlcnMubWFwKCh7IGtleSwgb3BlcmF0b3IsIHZhbHVlLCBjb25kaXRpb24gfSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAvLyBBZGQgdGhlIGN1cnJlbnQga2V5IGFuZCB2YWx1ZSBhcyBvcHRpb25zIGlmIHRoZXkgYXJlIG1hbnVhbGx5IGVudGVyZWRcbiAgICAgICAgICBjb25zdCBrZXlQcmVzZW50ID0gb3B0aW9ucy5zb21lKChvcCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9wLm9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuc29tZSgob3BwKSA9PiBvcHAubGFiZWwgPT09IGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3AubGFiZWwgPT09IGtleTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoIWtleVByZXNlbnQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMucHVzaCh7IGxhYmVsOiBrZXksIHZhbHVlOiBrZXkgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdmFsdWVPcHRpb25zID0gbGFiZWxzLmhhc093blByb3BlcnR5KGtleSlcbiAgICAgICAgICAgID8gW3ZhcmlhYmxlT3B0aW9uR3JvdXAsIC4uLmxhYmVsc1trZXldLm1hcCh0b09wdGlvbildXG4gICAgICAgICAgICA6IFt2YXJpYWJsZU9wdGlvbkdyb3VwXTtcbiAgICAgICAgICBjb25zdCB2YWx1ZVByZXNlbnQgPSB2YWx1ZU9wdGlvbnMuc29tZSgob3ApID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvcC5sYWJlbCA9PT0gdmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKCF2YWx1ZVByZXNlbnQpIHtcbiAgICAgICAgICAgIHZhbHVlT3B0aW9ucy5wdXNoKHsgbGFiZWw6IHZhbHVlLCB2YWx1ZSB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEhvcml6b250YWxHcm91cCBrZXk9e2luZGV4fSBzcGFjaW5nPVwieHNcIiB3aWR0aD1cImF1dG9cIj5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJGaWx0ZXIgbGFiZWwga2V5XCJcbiAgICAgICAgICAgICAgICB3aWR0aD17U0VMRUNUX1dJRFRIfVxuICAgICAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgICAgICAgICBmb3JtYXRDcmVhdGVMYWJlbD17KHYpID0+IGBVc2UgbGFiZWwga2V5OiAke3Z9YH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlOiBrZXkgPSAnJyB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyc1RvU3RyaW5nQXJyYXkoXG4gICAgICAgICAgICAgICAgICAgICAgZmlsdGVycy5tYXAoKGYsIGkpID0+IChpID09PSBpbmRleCA/IHsga2V5LCBvcGVyYXRvciwgY29uZGl0aW9uLCB2YWx1ZTogJycgfSA6IGYpKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3BlcmF0b3J9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17b3BlcmF0b3JzLm1hcCh0b09wdGlvbil9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlOiBvcGVyYXRvciA9ICc9JyB9KSA9PlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoZmlsdGVyc1RvU3RyaW5nQXJyYXkoZmlsdGVycy5tYXAoKGYsIGkpID0+IChpID09PSBpbmRleCA/IHsgLi4uZiwgb3BlcmF0b3IgfSA6IGYpKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1lbnVQbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgICAgIHJlbmRlckNvbnRyb2w9e09wZXJhdG9yQnV0dG9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkZpbHRlciBsYWJlbCB2YWx1ZVwiXG4gICAgICAgICAgICAgICAgd2lkdGg9e1NFTEVDVF9XSURUSH1cbiAgICAgICAgICAgICAgICBmb3JtYXRDcmVhdGVMYWJlbD17KHYpID0+IGBVc2UgbGFiZWwgdmFsdWU6ICR7dn1gfVxuICAgICAgICAgICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJhZGQgZmlsdGVyIHZhbHVlXCJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt2YWx1ZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlID0gJycgfSkgPT5cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGZpbHRlcnNUb1N0cmluZ0FycmF5KGZpbHRlcnMubWFwKChmLCBpKSA9PiAoaSA9PT0gaW5kZXggPyB7IC4uLmYsIHZhbHVlIH0gOiBmKSkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlbW92ZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoZmlsdGVyc1RvU3RyaW5nQXJyYXkoZmlsdGVycy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KSkpfVxuICAgICAgICAgICAgICA+PC9CdXR0b24+XG4gICAgICAgICAgICAgIHtpbmRleCArIDEgPT09IGZpbHRlcnMubGVuZ3RoICYmIE9iamVjdC52YWx1ZXMoZmlsdGVycykuZXZlcnkoKHsgdmFsdWUgfSkgPT4gdmFsdWUpICYmIDxBZGRGaWx0ZXIgLz59XG4gICAgICAgICAgICA8L0hvcml6b250YWxHcm91cD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgeyFmaWx0ZXJzLmxlbmd0aCAmJiA8QWRkRmlsdGVyIC8+fVxuICAgICAgPC9WZXJ0aWNhbEdyb3VwPlxuICAgIDwvUXVlcnlFZGl0b3JSb3c+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uUnVuUXVlcnk6ICgpID0+IHZvaWQ7XG4gIHF1ZXJ5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBNUUxRdWVyeUVkaXRvcih7IHF1ZXJ5LCBvbkNoYW5nZSwgb25SdW5RdWVyeSB9OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxQcm9wcz4pIHtcbiAgY29uc3Qgb25LZXlEb3duID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIChldmVudC5zaGlmdEtleSB8fCBldmVudC5jdHJsS2V5KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG9uUnVuUXVlcnkoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRleHRBcmVhXG4gICAgICAgIG5hbWU9XCJRdWVyeVwiXG4gICAgICAgIGNsYXNzTmFtZT1cInNsYXRlLXF1ZXJ5LWZpZWxkXCJcbiAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICByb3dzPXsxMH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIENsb3VkIE1vbml0b3JpbmcgTVFMIHF1ZXJ5IChSdW4gd2l0aCBTaGlmdCtFbnRlcilcIlxuICAgICAgICBvbkJsdXI9e29uUnVuUXVlcnl9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgb25LZXlEb3duPXtvbktleURvd259XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBnZXRBbGlnbm1lbnRQaWNrZXJEYXRhIH0gZnJvbSAnLi4vZnVuY3Rpb25zJztcbmltcG9ydCB7XG4gIEFsaWdubWVudFR5cGVzLFxuICBDdXN0b21NZXRhRGF0YSxcbiAgRWRpdG9yTW9kZSxcbiAgTWV0cmljRGVzY3JpcHRvcixcbiAgTWV0cmljS2luZCxcbiAgTWV0cmljUXVlcnksXG4gIFByZXByb2Nlc3NvclR5cGUsXG4gIFNMT1F1ZXJ5LFxuICBWYWx1ZVR5cGVzLFxufSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IEdyYXBoUGVyaW9kIH0gZnJvbSAnLi9HcmFwaFBlcmlvZCc7XG5pbXBvcnQgeyBNUUxRdWVyeUVkaXRvciB9IGZyb20gJy4vTVFMUXVlcnlFZGl0b3InO1xuXG5pbXBvcnQgeyBBbGlhc0J5LCBQcm9qZWN0LCBWaXN1YWxNZXRyaWNRdWVyeUVkaXRvciB9IGZyb20gJy4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVmSWQ6IHN0cmluZztcbiAgY3VzdG9tTWV0YURhdGE6IEN1c3RvbU1ldGFEYXRhO1xuICB2YXJpYWJsZU9wdGlvbkdyb3VwOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPjtcbiAgb25DaGFuZ2U6IChxdWVyeTogTWV0cmljUXVlcnkpID0+IHZvaWQ7XG4gIG9uUnVuUXVlcnk6ICgpID0+IHZvaWQ7XG4gIHF1ZXJ5OiBNZXRyaWNRdWVyeTtcbiAgZGF0YXNvdXJjZTogQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZTtcbn1cblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgbGFiZWxzOiBhbnk7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdGF0ZTogU3RhdGUgPSB7XG4gIGxhYmVsczoge30sXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFF1ZXJ5OiAoZGF0YVNvdXJjZTogQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSkgPT4gTWV0cmljUXVlcnkgPSAoZGF0YVNvdXJjZSkgPT4gKHtcbiAgZWRpdG9yTW9kZTogRWRpdG9yTW9kZS5WaXN1YWwsXG4gIHByb2plY3ROYW1lOiBkYXRhU291cmNlLmdldERlZmF1bHRQcm9qZWN0KCksXG4gIG1ldHJpY1R5cGU6ICcnLFxuICBtZXRyaWNLaW5kOiBNZXRyaWNLaW5kLkdBVUdFLFxuICB2YWx1ZVR5cGU6ICcnLFxuICBjcm9zc1Nlcmllc1JlZHVjZXI6ICdSRURVQ0VfTUVBTicsXG4gIGFsaWdubWVudFBlcmlvZDogJ2Nsb3VkLW1vbml0b3JpbmctYXV0bycsXG4gIHBlclNlcmllc0FsaWduZXI6IEFsaWdubWVudFR5cGVzLkFMSUdOX01FQU4sXG4gIGdyb3VwQnlzOiBbXSxcbiAgZmlsdGVyczogW10sXG4gIGFsaWFzQnk6ICcnLFxuICBxdWVyeTogJycsXG4gIHByZXByb2Nlc3NvcjogUHJlcHJvY2Vzc29yVHlwZS5Ob25lLFxufSk7XG5cbmZ1bmN0aW9uIEVkaXRvcih7XG4gIHJlZklkLFxuICBxdWVyeSxcbiAgZGF0YXNvdXJjZSxcbiAgb25DaGFuZ2U6IG9uUXVlcnlDaGFuZ2UsXG4gIG9uUnVuUXVlcnksXG4gIGN1c3RvbU1ldGFEYXRhLFxuICB2YXJpYWJsZU9wdGlvbkdyb3VwLFxufTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHM+KSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8U3RhdGU+KGRlZmF1bHRTdGF0ZSk7XG4gIGNvbnN0IHsgcHJvamVjdE5hbWUsIG1ldHJpY1R5cGUsIGdyb3VwQnlzLCBlZGl0b3JNb2RlLCBjcm9zc1Nlcmllc1JlZHVjZXIgfSA9IHF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb2plY3ROYW1lICYmIG1ldHJpY1R5cGUpIHtcbiAgICAgIGRhdGFzb3VyY2VcbiAgICAgICAgLmdldExhYmVscyhtZXRyaWNUeXBlLCByZWZJZCwgcHJvamVjdE5hbWUpXG4gICAgICAgIC50aGVuKChsYWJlbHMpID0+IHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgbGFiZWxzIH0pKSk7XG4gICAgfVxuICB9LCBbZGF0YXNvdXJjZSwgZ3JvdXBCeXMsIG1ldHJpY1R5cGUsIHByb2plY3ROYW1lLCByZWZJZCwgY3Jvc3NTZXJpZXNSZWR1Y2VyXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAobWV0cmljUXVlcnk6IE1ldHJpY1F1ZXJ5IHwgU0xPUXVlcnkpID0+IHtcbiAgICAgIG9uUXVlcnlDaGFuZ2UoeyAuLi5xdWVyeSwgLi4ubWV0cmljUXVlcnkgfSk7XG4gICAgICBvblJ1blF1ZXJ5KCk7XG4gICAgfSxcbiAgICBbb25RdWVyeUNoYW5nZSwgb25SdW5RdWVyeSwgcXVlcnldXG4gICk7XG5cbiAgY29uc3Qgb25NZXRyaWNUeXBlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKHsgdmFsdWVUeXBlLCBtZXRyaWNLaW5kLCB0eXBlIH06IE1ldHJpY0Rlc2NyaXB0b3IpID0+IHtcbiAgICAgIGNvbnN0IHByZXByb2Nlc3NvciA9XG4gICAgICAgIG1ldHJpY0tpbmQgPT09IE1ldHJpY0tpbmQuR0FVR0UgfHwgdmFsdWVUeXBlID09PSBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTlxuICAgICAgICAgID8gUHJlcHJvY2Vzc29yVHlwZS5Ob25lXG4gICAgICAgICAgOiBQcmVwcm9jZXNzb3JUeXBlLlJhdGU7XG4gICAgICBjb25zdCB7IHBlclNlcmllc0FsaWduZXIgfSA9IGdldEFsaWdubWVudFBpY2tlckRhdGEodmFsdWVUeXBlLCBtZXRyaWNLaW5kLCBzdGF0ZS5wZXJTZXJpZXNBbGlnbmVyLCBwcmVwcm9jZXNzb3IpO1xuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgcGVyU2VyaWVzQWxpZ25lcixcbiAgICAgICAgbWV0cmljVHlwZTogdHlwZSxcbiAgICAgICAgdmFsdWVUeXBlLFxuICAgICAgICBtZXRyaWNLaW5kLFxuICAgICAgICBwcmVwcm9jZXNzb3IsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIFtvbkNoYW5nZSwgcXVlcnksIHN0YXRlXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxQcm9qZWN0XG4gICAgICAgIHJlZklkPXtyZWZJZH1cbiAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3ZhcmlhYmxlT3B0aW9uR3JvdXAub3B0aW9uc31cbiAgICAgICAgcHJvamVjdE5hbWU9e3Byb2plY3ROYW1lfVxuICAgICAgICBkYXRhc291cmNlPXtkYXRhc291cmNlfVxuICAgICAgICBvbkNoYW5nZT17KHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgcHJvamVjdE5hbWUgfSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICB7ZWRpdG9yTW9kZSA9PT0gRWRpdG9yTW9kZS5WaXN1YWwgJiYgKFxuICAgICAgICA8VmlzdWFsTWV0cmljUXVlcnlFZGl0b3JcbiAgICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICAgICAgbGFiZWxzPXtzdGF0ZS5sYWJlbHN9XG4gICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cD17dmFyaWFibGVPcHRpb25Hcm91cH1cbiAgICAgICAgICBjdXN0b21NZXRhRGF0YT17Y3VzdG9tTWV0YURhdGF9XG4gICAgICAgICAgb25NZXRyaWNUeXBlQ2hhbmdlPXtvbk1ldHJpY1R5cGVDaGFuZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9XG4gICAgICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgICAvPlxuICAgICAgKX1cblxuICAgICAge2VkaXRvck1vZGUgPT09IEVkaXRvck1vZGUuTVFMICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TVFMUXVlcnlFZGl0b3JcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsocTogc3RyaW5nKSA9PiBvblF1ZXJ5Q2hhbmdlKHsgLi4ucXVlcnksIHF1ZXJ5OiBxIH0pfVxuICAgICAgICAgICAgb25SdW5RdWVyeT17b25SdW5RdWVyeX1cbiAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeS5xdWVyeX1cbiAgICAgICAgICA+PC9NUUxRdWVyeUVkaXRvcj5cbiAgICAgICAgICA8R3JhcGhQZXJpb2RcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZ3JhcGhQZXJpb2Q6IHN0cmluZykgPT4gb25RdWVyeUNoYW5nZSh7IC4uLnF1ZXJ5LCBncmFwaFBlcmlvZCB9KX1cbiAgICAgICAgICAgIGdyYXBoUGVyaW9kPXtxdWVyeS5ncmFwaFBlcmlvZH1cbiAgICAgICAgICAgIHJlZklkPXtyZWZJZH1cbiAgICAgICAgICAgIHZhcmlhYmxlT3B0aW9uR3JvdXA9e3ZhcmlhYmxlT3B0aW9uR3JvdXB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICA8QWxpYXNCeVxuICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICAgIHZhbHVlPXtxdWVyeS5hbGlhc0J5fVxuICAgICAgICBvbkNoYW5nZT17KGFsaWFzQnkpID0+IHtcbiAgICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBhbGlhc0J5IH0pO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IE1ldHJpY1F1ZXJ5RWRpdG9yID0gUmVhY3QubWVtbyhFZGl0b3IpO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHN0YXJ0Q2FzZSwgdW5pcUJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgZ2V0U2VsZWN0U3R5bGVzLCBTZWxlY3QsIHVzZVN0eWxlczIsIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgSU5ORVJfTEFCRUxfV0lEVEgsIExBQkVMX1dJRFRILCBTRUxFQ1RfV0lEVEggfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBNZXRyaWNEZXNjcmlwdG9yIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBRdWVyeUVkaXRvckZpZWxkLCBRdWVyeUVkaXRvclJvdyB9IGZyb20gJy4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVmSWQ6IHN0cmluZztcbiAgb25DaGFuZ2U6IChtZXRyaWNEZXNjcmlwdG9yOiBNZXRyaWNEZXNjcmlwdG9yKSA9PiB2b2lkO1xuICB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnY7XG4gIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2U7XG4gIHByb2plY3ROYW1lOiBzdHJpbmc7XG4gIG1ldHJpY1R5cGU6IHN0cmluZztcbiAgY2hpbGRyZW46IChtZXRyaWNEZXNjcmlwdG9yPzogTWV0cmljRGVzY3JpcHRvcikgPT4gSlNYLkVsZW1lbnQ7XG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIG1ldHJpY0Rlc2NyaXB0b3JzOiBNZXRyaWNEZXNjcmlwdG9yW107XG4gIG1ldHJpY3M6IGFueVtdO1xuICBzZXJ2aWNlczogYW55W107XG4gIHNlcnZpY2U6IHN0cmluZztcbiAgbWV0cmljOiBzdHJpbmc7XG4gIG1ldHJpY0Rlc2NyaXB0b3I/OiBNZXRyaWNEZXNjcmlwdG9yO1xuICBwcm9qZWN0TmFtZTogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE1ldHJpY3MocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8U3RhdGU+KHtcbiAgICBtZXRyaWNEZXNjcmlwdG9yczogW10sXG4gICAgbWV0cmljczogW10sXG4gICAgc2VydmljZXM6IFtdLFxuICAgIHNlcnZpY2U6ICcnLFxuICAgIG1ldHJpYzogJycsXG4gICAgcHJvamVjdE5hbWU6IG51bGwsXG4gIH0pO1xuXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG4gIGNvbnN0IHNlbGVjdFN0eWxlcyA9IGdldFNlbGVjdFN0eWxlcyh0aGVtZSk7XG5cbiAgY29uc3QgY3VzdG9tU3R5bGUgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgeyBzZXJ2aWNlcywgc2VydmljZSwgbWV0cmljcywgbWV0cmljRGVzY3JpcHRvcnMgfSA9IHN0YXRlO1xuICBjb25zdCB7IG1ldHJpY1R5cGUsIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLCBwcm9qZWN0TmFtZSwgdGVtcGxhdGVTcnYsIGRhdGFzb3VyY2UsIG9uQ2hhbmdlLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZ2V0U2VsZWN0ZWRNZXRyaWNEZXNjcmlwdG9yID0gdXNlQ2FsbGJhY2soXG4gICAgKG1ldHJpY0Rlc2NyaXB0b3JzOiBNZXRyaWNEZXNjcmlwdG9yW10sIG1ldHJpY1R5cGU6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIG1ldHJpY0Rlc2NyaXB0b3JzLmZpbmQoKG1kKSA9PiBtZC50eXBlID09PSB0ZW1wbGF0ZVNydi5yZXBsYWNlKG1ldHJpY1R5cGUpKSE7XG4gICAgfSxcbiAgICBbdGVtcGxhdGVTcnZdXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRNZXRyaWNzTGlzdCA9IChtZXRyaWNEZXNjcmlwdG9yczogTWV0cmljRGVzY3JpcHRvcltdKSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3IgPSBnZXRTZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3IobWV0cmljRGVzY3JpcHRvcnMsIG1ldHJpY1R5cGUpO1xuICAgICAgaWYgKCFzZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3IpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXRyaWNzQnlTZXJ2aWNlID0gbWV0cmljRGVzY3JpcHRvcnNcbiAgICAgICAgLmZpbHRlcigobSkgPT4gbS5zZXJ2aWNlID09PSBzZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3Iuc2VydmljZSlcbiAgICAgICAgLm1hcCgobSkgPT4gKHtcbiAgICAgICAgICBzZXJ2aWNlOiBtLnNlcnZpY2UsXG4gICAgICAgICAgdmFsdWU6IG0udHlwZSxcbiAgICAgICAgICBsYWJlbDogbS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIG9wdGlvbkNvbXBvbmVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N1c3RvbVN0eWxlfT57bS50eXBlfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzZWxlY3RTdHlsZXMub3B0aW9uRGVzY3JpcHRpb259PnttLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgICAgcmV0dXJuIG1ldHJpY3NCeVNlcnZpY2U7XG4gICAgfTtcblxuICAgIGNvbnN0IGxvYWRNZXRyaWNEZXNjcmlwdG9ycyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCBtZXRyaWNEZXNjcmlwdG9ycyA9IGF3YWl0IGRhdGFzb3VyY2UuZ2V0TWV0cmljVHlwZXMocHJvamVjdE5hbWUpO1xuICAgICAgICBjb25zdCBzZXJ2aWNlcyA9IGdldFNlcnZpY2VzTGlzdChtZXRyaWNEZXNjcmlwdG9ycyk7XG4gICAgICAgIGNvbnN0IG1ldHJpY3MgPSBnZXRNZXRyaWNzTGlzdChtZXRyaWNEZXNjcmlwdG9ycyk7XG4gICAgICAgIGNvbnN0IHNlcnZpY2UgPSBtZXRyaWNzLmxlbmd0aCA+IDAgPyBtZXRyaWNzWzBdLnNlcnZpY2UgOiAnJztcbiAgICAgICAgY29uc3QgbWV0cmljRGVzY3JpcHRvciA9IGdldFNlbGVjdGVkTWV0cmljRGVzY3JpcHRvcihtZXRyaWNEZXNjcmlwdG9ycywgbWV0cmljVHlwZSk7XG4gICAgICAgIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgIG1ldHJpY0Rlc2NyaXB0b3JzLFxuICAgICAgICAgIHNlcnZpY2VzLFxuICAgICAgICAgIG1ldHJpY3MsXG4gICAgICAgICAgc2VydmljZTogc2VydmljZSxcbiAgICAgICAgICBtZXRyaWNEZXNjcmlwdG9yLFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBsb2FkTWV0cmljRGVzY3JpcHRvcnMoKTtcbiAgfSwgW2RhdGFzb3VyY2UsIGdldFNlbGVjdGVkTWV0cmljRGVzY3JpcHRvciwgbWV0cmljVHlwZSwgcHJvamVjdE5hbWUsIGN1c3RvbVN0eWxlLCBzZWxlY3RTdHlsZXMub3B0aW9uRGVzY3JpcHRpb25dKTtcblxuICBjb25zdCBvblNlcnZpY2VDaGFuZ2UgPSAoeyB2YWx1ZTogc2VydmljZSB9OiBhbnkpID0+IHtcbiAgICBjb25zdCBtZXRyaWNzID0gbWV0cmljRGVzY3JpcHRvcnNcbiAgICAgIC5maWx0ZXIoKG06IE1ldHJpY0Rlc2NyaXB0b3IpID0+IG0uc2VydmljZSA9PT0gdGVtcGxhdGVTcnYucmVwbGFjZShzZXJ2aWNlKSlcbiAgICAgIC5tYXAoKG06IE1ldHJpY0Rlc2NyaXB0b3IpID0+ICh7XG4gICAgICAgIHNlcnZpY2U6IG0uc2VydmljZSxcbiAgICAgICAgdmFsdWU6IG0udHlwZSxcbiAgICAgICAgbGFiZWw6IG0uZGlzcGxheU5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBtLmRlc2NyaXB0aW9uLFxuICAgICAgfSkpO1xuXG4gICAgaWYgKG1ldHJpY3MubGVuZ3RoID4gMCAmJiAhbWV0cmljcy5zb21lKChtKSA9PiBtLnZhbHVlID09PSB0ZW1wbGF0ZVNydi5yZXBsYWNlKG1ldHJpY1R5cGUpKSkge1xuICAgICAgb25NZXRyaWNUeXBlQ2hhbmdlKG1ldHJpY3NbMF0sIHsgc2VydmljZSwgbWV0cmljcyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgc2VydmljZSwgbWV0cmljcyB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25NZXRyaWNUeXBlQ2hhbmdlID0gKHsgdmFsdWUgfTogU2VsZWN0YWJsZVZhbHVlPHN0cmluZz4sIGV4dHJhOiBhbnkgPSB7fSkgPT4ge1xuICAgIGNvbnN0IG1ldHJpY0Rlc2NyaXB0b3IgPSBnZXRTZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3Ioc3RhdGUubWV0cmljRGVzY3JpcHRvcnMsIHZhbHVlISk7XG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgbWV0cmljRGVzY3JpcHRvciwgLi4uZXh0cmEgfSk7XG4gICAgb25DaGFuZ2UoeyAuLi5tZXRyaWNEZXNjcmlwdG9yLCB0eXBlOiB2YWx1ZSEgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2VydmljZXNMaXN0ID0gKG1ldHJpY0Rlc2NyaXB0b3JzOiBNZXRyaWNEZXNjcmlwdG9yW10pID0+IHtcbiAgICBjb25zdCBzZXJ2aWNlcyA9IG1ldHJpY0Rlc2NyaXB0b3JzLm1hcCgobSkgPT4gKHtcbiAgICAgIHZhbHVlOiBtLnNlcnZpY2UsXG4gICAgICBsYWJlbDogc3RhcnRDYXNlKG0uc2VydmljZVNob3J0TmFtZSksXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHNlcnZpY2VzLmxlbmd0aCA+IDAgPyB1bmlxQnkoc2VydmljZXMsIChzKSA9PiBzLnZhbHVlKSA6IFtdO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxRdWVyeUVkaXRvclJvdz5cbiAgICAgICAgPFF1ZXJ5RWRpdG9yRmllbGQgbGFiZWxXaWR0aD17TEFCRUxfV0lEVEh9IGxhYmVsPVwiU2VydmljZVwiIGh0bWxGb3I9e2Ake3Byb3BzLnJlZklkfS1zZXJ2aWNlYH0+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgd2lkdGg9e1NFTEVDVF9XSURUSH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlcnZpY2VDaGFuZ2V9XG4gICAgICAgICAgICB2YWx1ZT17Wy4uLnNlcnZpY2VzLCAuLi50ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc10uZmluZCgocykgPT4gcy52YWx1ZSA9PT0gc2VydmljZSl9XG4gICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1RlbXBsYXRlIFZhcmlhYmxlcycsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC4uLnNlcnZpY2VzLFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFNlcnZpY2VzXCJcbiAgICAgICAgICAgIGlucHV0SWQ9e2Ake3Byb3BzLnJlZklkfS1zZXJ2aWNlYH1cbiAgICAgICAgICA+PC9TZWxlY3Q+XG4gICAgICAgIDwvUXVlcnlFZGl0b3JGaWVsZD5cbiAgICAgICAgPFF1ZXJ5RWRpdG9yRmllbGQgbGFiZWw9XCJNZXRyaWMgbmFtZVwiIGxhYmVsV2lkdGg9e0lOTkVSX0xBQkVMX1dJRFRIfSBodG1sRm9yPXtgJHtwcm9wcy5yZWZJZH0tc2VsZWN0LW1ldHJpY2B9PlxuICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgIHdpZHRoPXtTRUxFQ1RfV0lEVEh9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25NZXRyaWNUeXBlQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e1suLi5tZXRyaWNzLCAuLi50ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc10uZmluZCgocykgPT4gcy52YWx1ZSA9PT0gbWV0cmljVHlwZSl9XG4gICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1RlbXBsYXRlIFZhcmlhYmxlcycsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC4uLm1ldHJpY3MsXG4gICAgICAgICAgICBdfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgTWV0cmljXCJcbiAgICAgICAgICAgIGlucHV0SWQ9e2Ake3Byb3BzLnJlZklkfS1zZWxlY3QtbWV0cmljYH1cbiAgICAgICAgICA+PC9TZWxlY3Q+XG4gICAgICAgIDwvUXVlcnlFZGl0b3JGaWVsZD5cbiAgICAgIDwvUXVlcnlFZGl0b3JSb3c+XG5cbiAgICAgIHtjaGlsZHJlbihzdGF0ZS5tZXRyaWNEZXNjcmlwdG9yKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiBjc3NgXG4gIGxhYmVsOiBncmFmYW5hLXNlbGVjdC1vcHRpb24tZGVzY3JpcHRpb247XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbmA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IHBlcmlvZE9wdGlvbiB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBpbnB1dElkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAocGVyaW9kOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIGFsaWdtZW50UGVyaW9kczogcGVyaW9kT3B0aW9uW107XG4gIHNlbGVjdFdpZHRoPzogbnVtYmVyO1xuICBjYXRlZ29yeT86IHN0cmluZztcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjdXJyZW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUGVyaW9kU2VsZWN0KHtcbiAgaW5wdXRJZCxcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gIG9uQ2hhbmdlLFxuICBjdXJyZW50LFxuICBzZWxlY3RXaWR0aCxcbiAgZGlzYWJsZWQsXG4gIGFsaWdtZW50UGVyaW9kcyxcbn06IFByb3BzKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICBhbGlnbWVudFBlcmlvZHMubWFwKChhcCkgPT4gKHtcbiAgICAgICAgLi4uYXAsXG4gICAgICAgIGxhYmVsOiBhcC50ZXh0LFxuICAgICAgfSkpLFxuICAgIFthbGlnbWVudFBlcmlvZHNdXG4gICk7XG4gIGNvbnN0IHZpc2libGVPcHRpb25zID0gdXNlTWVtbygoKSA9PiBvcHRpb25zLmZpbHRlcigoYXApID0+ICFhcC5oaWRkZW4pLCBbb3B0aW9uc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdFxuICAgICAgd2lkdGg9e3NlbGVjdFdpZHRofVxuICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IG9uQ2hhbmdlKHZhbHVlISl9XG4gICAgICB2YWx1ZT17Wy4uLm9wdGlvbnMsIC4uLnRlbXBsYXRlVmFyaWFibGVPcHRpb25zXS5maW5kKChzKSA9PiBzLnZhbHVlID09PSBjdXJyZW50KX1cbiAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnVGVtcGxhdGUgVmFyaWFibGVzJyxcbiAgICAgICAgICBvcHRpb25zOiB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnQWdncmVnYXRpb25zJyxcbiAgICAgICAgICBleHBhbmRlZDogdHJ1ZSxcbiAgICAgICAgICBvcHRpb25zOiB2aXNpYmxlT3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgIF19XG4gICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBQZXJpb2RcIlxuICAgICAgaW5wdXRJZD17aW5wdXRJZH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICA+PC9TZWxlY3Q+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgUmFkaW9CdXR0b25Hcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgZ2V0QWxpZ25tZW50UGlja2VyRGF0YSB9IGZyb20gJy4uL2Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBNZXRyaWNEZXNjcmlwdG9yLCBNZXRyaWNLaW5kLCBNZXRyaWNRdWVyeSwgUHJlcHJvY2Vzc29yVHlwZSwgVmFsdWVUeXBlcyB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuJztcblxuY29uc3QgTk9ORV9PUFRJT04gPSB7IGxhYmVsOiAnTm9uZScsIHZhbHVlOiBQcmVwcm9jZXNzb3JUeXBlLk5vbmUgfTtcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIG1ldHJpY0Rlc2NyaXB0b3I/OiBNZXRyaWNEZXNjcmlwdG9yO1xuICBvbkNoYW5nZTogKHF1ZXJ5OiBNZXRyaWNRdWVyeSkgPT4gdm9pZDtcbiAgcXVlcnk6IE1ldHJpY1F1ZXJ5O1xufVxuXG5leHBvcnQgY29uc3QgUHJlcHJvY2Vzc29yOiBGdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoeyBxdWVyeSwgbWV0cmljRGVzY3JpcHRvciwgb25DaGFuZ2UgfSkgPT4ge1xuICBjb25zdCBvcHRpb25zID0gdXNlT3B0aW9ucyhtZXRyaWNEZXNjcmlwdG9yKTtcbiAgcmV0dXJuIChcbiAgICA8UXVlcnlFZGl0b3JSb3dcbiAgICAgIGxhYmVsPVwiUHJlLXByb2Nlc3NpbmdcIlxuICAgICAgdG9vbHRpcD1cIlByZXByb2Nlc3Npbmcgb3B0aW9ucyBhcmUgZGlzcGxheWVkIHdoZW4gdGhlIHNlbGVjdGVkIG1ldHJpYyBoYXMgYSBtZXRyaWMga2luZCBvZiBkZWx0YSBvciBjdW11bGF0aXZlLiBUaGUgc3BlY2lmaWMgb3B0aW9ucyBhdmFpbGFibGUgYXJlIGRldGVybWluZWQgYnkgdGhlIG1ldGljJ3MgdmFsdWUgdHlwZS4gSWYgeW91IHNlbGVjdCAnUmF0ZScsIGRhdGEgcG9pbnRzIGFyZSBhbGlnbmVkIGFuZCBjb252ZXJ0ZWQgdG8gYSByYXRlIHBlciB0aW1lIHNlcmllcy4gSWYgeW91IHNlbGVjdCAnRGVsdGEnLCBkYXRhIHBvaW50cyBhcmUgYWxpZ25lZCBieSB0aGVpciBkZWx0YSAoZGlmZmVyZW5jZSkgcGVyIHRpbWUgc2VyaWVzXCJcbiAgICA+XG4gICAgICA8UmFkaW9CdXR0b25Hcm91cFxuICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBQcmVwcm9jZXNzb3JUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB2YWx1ZVR5cGUsIG1ldHJpY0tpbmQsIHBlclNlcmllc0FsaWduZXI6IHBzYSB9ID0gcXVlcnk7XG4gICAgICAgICAgY29uc3QgeyBwZXJTZXJpZXNBbGlnbmVyIH0gPSBnZXRBbGlnbm1lbnRQaWNrZXJEYXRhKHZhbHVlVHlwZSwgbWV0cmljS2luZCwgcHNhLCB2YWx1ZSk7XG4gICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgcHJlcHJvY2Vzc29yOiB2YWx1ZSwgcGVyU2VyaWVzQWxpZ25lciB9KTtcbiAgICAgICAgfX1cbiAgICAgICAgdmFsdWU9e3F1ZXJ5LnByZXByb2Nlc3NvciA/PyBQcmVwcm9jZXNzb3JUeXBlLk5vbmV9XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICA+PC9SYWRpb0J1dHRvbkdyb3VwPlxuICAgIDwvUXVlcnlFZGl0b3JSb3c+XG4gICk7XG59O1xuXG5jb25zdCB1c2VPcHRpb25zID0gKG1ldHJpY0Rlc2NyaXB0b3I/OiBNZXRyaWNEZXNjcmlwdG9yKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPFByZXByb2Nlc3NvclR5cGU+PiA9PiB7XG4gIGNvbnN0IG1ldHJpY0tpbmQgPSBtZXRyaWNEZXNjcmlwdG9yPy5tZXRyaWNLaW5kO1xuICBjb25zdCB2YWx1ZVR5cGUgPSBtZXRyaWNEZXNjcmlwdG9yPy52YWx1ZVR5cGU7XG5cbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghbWV0cmljS2luZCB8fCBtZXRyaWNLaW5kID09PSBNZXRyaWNLaW5kLkdBVUdFIHx8IHZhbHVlVHlwZSA9PT0gVmFsdWVUeXBlcy5ESVNUUklCVVRJT04pIHtcbiAgICAgIHJldHVybiBbTk9ORV9PUFRJT05dO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICBOT05FX09QVElPTixcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdSYXRlJyxcbiAgICAgICAgdmFsdWU6IFByZXByb2Nlc3NvclR5cGUuUmF0ZSxcbiAgICAgICAgZGVzY3JpcHRpb246ICdEYXRhIHBvaW50cyBhcmUgYWxpZ25lZCBhbmQgY29udmVydGVkIHRvIGEgcmF0ZSBwZXIgdGltZSBzZXJpZXMnLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIG1ldHJpY0tpbmQgPT09IE1ldHJpY0tpbmQuQ1VNVUxBVElWRVxuICAgICAgPyBbXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0RlbHRhJyxcbiAgICAgICAgICAgIHZhbHVlOiBQcmVwcm9jZXNzb3JUeXBlLkRlbHRhLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdEYXRhIHBvaW50cyBhcmUgYWxpZ25lZCBieSB0aGVpciBkZWx0YSAoZGlmZmVyZW5jZSkgcGVyIHRpbWUgc2VyaWVzJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICA6IG9wdGlvbnM7XG4gIH0sIFttZXRyaWNLaW5kLCB2YWx1ZVR5cGVdKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFNFTEVDVF9XSURUSCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSBmcm9tICcuLi9kYXRhc291cmNlJztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2U7XG4gIG9uQ2hhbmdlOiAocHJvamVjdE5hbWU6IHN0cmluZykgPT4gdm9pZDtcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgcHJvamVjdE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3QoeyByZWZJZCwgcHJvamVjdE5hbWUsIGRhdGFzb3VyY2UsIG9uQ2hhbmdlLCB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyB9OiBQcm9wcykge1xuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pj4oW10pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRhdGFzb3VyY2UuZ2V0UHJvamVjdHMoKS50aGVuKChwcm9qZWN0cykgPT4gc2V0UHJvamVjdHMocHJvamVjdHMpKTtcbiAgfSwgW2RhdGFzb3VyY2VdKTtcblxuICBjb25zdCBwcm9qZWN0c1dpdGhUZW1wbGF0ZVZhcmlhYmxlcyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAgcHJvamVjdHMsXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnVGVtcGxhdGUgVmFyaWFibGVzJyxcbiAgICAgICAgb3B0aW9uczogdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gICAgICB9LFxuICAgICAgLi4ucHJvamVjdHMsXG4gICAgXSxcbiAgICBbcHJvamVjdHMsIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93IGxhYmVsPVwiUHJvamVjdFwiIGh0bWxGb3I9e2Ake3JlZklkfS1wcm9qZWN0YH0+XG4gICAgICA8U2VsZWN0XG4gICAgICAgIHdpZHRoPXtTRUxFQ1RfV0lEVEh9XG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgZm9ybWF0Q3JlYXRlTGFiZWw9eyh2KSA9PiBgVXNlIHByb2plY3Q6ICR7dn1gfVxuICAgICAgICBvbkNoYW5nZT17KHsgdmFsdWUgfSkgPT4gb25DaGFuZ2UodmFsdWUhKX1cbiAgICAgICAgb3B0aW9ucz17cHJvamVjdHNXaXRoVGVtcGxhdGVWYXJpYWJsZXN9XG4gICAgICAgIHZhbHVlPXt7IHZhbHVlOiBwcm9qZWN0TmFtZSwgbGFiZWw6IHByb2plY3ROYW1lIH19XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IFByb2plY3RcIlxuICAgICAgICBpbnB1dElkPXtgJHtyZWZJZH0tcHJvamVjdGB9XG4gICAgICAvPlxuICAgIDwvUXVlcnlFZGl0b3JSb3c+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUHJvcHMsIHRvT3B0aW9uIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgUVVFUllfVFlQRVMsIFNFTEVDVF9XSURUSCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSBmcm9tICcuLi9kYXRhc291cmNlJztcbmltcG9ydCB7IENsb3VkTW9uaXRvcmluZ1F1ZXJ5LCBFZGl0b3JNb2RlLCBNZXRyaWNRdWVyeSwgUXVlcnlUeXBlLCBTTE9RdWVyeSwgQ2xvdWRNb25pdG9yaW5nT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgZGVmYXVsdFF1ZXJ5IH0gZnJvbSAnLi9NZXRyaWNRdWVyeUVkaXRvcic7XG5pbXBvcnQgeyBkZWZhdWx0UXVlcnkgYXMgZGVmYXVsdFNMT1F1ZXJ5IH0gZnJvbSAnLi9TTE8vU0xPUXVlcnlFZGl0b3InO1xuXG5pbXBvcnQgeyBNZXRyaWNRdWVyeUVkaXRvciwgUXVlcnlFZGl0b3JSb3csIFNMT1F1ZXJ5RWRpdG9yIH0gZnJvbSAnLi8nO1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IFF1ZXJ5RWRpdG9yUHJvcHM8Q2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSwgQ2xvdWRNb25pdG9yaW5nUXVlcnksIENsb3VkTW9uaXRvcmluZ09wdGlvbnM+O1xuXG5leHBvcnQgY2xhc3MgUXVlcnlFZGl0b3IgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIGFzeW5jIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgeyBkYXRhc291cmNlLCBxdWVyeSB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIFVuZm9ydHVuYXRlbHksIG1pZ3JhdGlvbnMgbGlrZSB0aGlzIG5lZWQgdG8gZ28gVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudC4gQXMgc29vbiBhcyB0aGVyZSdzXG4gICAgLy8gbWlncmF0aW9uIGhvb2sgZm9yIHRoaXMgbW9kdWxlLnRzLCB3ZSBjYW4gZG8gdGhlIG1pZ3JhdGlvbnMgdGhlcmUgaW5zdGVhZC5cbiAgICBpZiAoIXRoaXMucHJvcHMucXVlcnkuaGFzT3duUHJvcGVydHkoJ21ldHJpY1F1ZXJ5JykpIHtcbiAgICAgIGNvbnN0IHsgaGlkZSwgcmVmSWQsIGRhdGFzb3VyY2UsIGtleSwgcXVlcnlUeXBlLCBtYXhMaW5lcywgbWV0cmljLCAuLi5tZXRyaWNRdWVyeSB9ID0gdGhpcy5wcm9wcy5xdWVyeSBhcyBhbnk7XG4gICAgICB0aGlzLnByb3BzLnF1ZXJ5Lm1ldHJpY1F1ZXJ5ID0gbWV0cmljUXVlcnk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnByb3BzLnF1ZXJ5Lmhhc093blByb3BlcnR5KCdxdWVyeVR5cGUnKSkge1xuICAgICAgdGhpcy5wcm9wcy5xdWVyeS5xdWVyeVR5cGUgPSBRdWVyeVR5cGUuTUVUUklDUztcbiAgICB9XG5cbiAgICBhd2FpdCBkYXRhc291cmNlLmVuc3VyZUdDRURlZmF1bHRQcm9qZWN0KCk7XG4gICAgaWYgKCFxdWVyeS5tZXRyaWNRdWVyeS5wcm9qZWN0TmFtZSkge1xuICAgICAgdGhpcy5wcm9wcy5xdWVyeS5tZXRyaWNRdWVyeS5wcm9qZWN0TmFtZSA9IGRhdGFzb3VyY2UuZ2V0RGVmYXVsdFByb2plY3QoKTtcbiAgICB9XG4gIH1cblxuICBvblF1ZXJ5Q2hhbmdlKHByb3A6IHN0cmluZywgdmFsdWU6IE1ldHJpY1F1ZXJ5IHwgU0xPUXVlcnkpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgLi4udGhpcy5wcm9wcy5xdWVyeSwgW3Byb3BdOiB2YWx1ZSB9KTtcbiAgICB0aGlzLnByb3BzLm9uUnVuUXVlcnkoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGFzb3VyY2UsIHF1ZXJ5LCBvblJ1blF1ZXJ5LCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtZXRyaWNRdWVyeSA9IHsgLi4uZGVmYXVsdFF1ZXJ5KGRhdGFzb3VyY2UpLCAuLi5xdWVyeS5tZXRyaWNRdWVyeSB9O1xuICAgIGNvbnN0IHNsb1F1ZXJ5ID0geyAuLi5kZWZhdWx0U0xPUXVlcnkoZGF0YXNvdXJjZSksIC4uLnF1ZXJ5LnNsb1F1ZXJ5IH07XG4gICAgY29uc3QgcXVlcnlUeXBlID0gcXVlcnkucXVlcnlUeXBlIHx8IFF1ZXJ5VHlwZS5NRVRSSUNTO1xuICAgIGNvbnN0IG1ldGEgPSB0aGlzLnByb3BzLmRhdGE/LnNlcmllcy5sZW5ndGggPyB0aGlzLnByb3BzLmRhdGE/LnNlcmllc1swXS5tZXRhIDoge307XG4gICAgY29uc3QgY3VzdG9tTWV0YURhdGEgPSBtZXRhPy5jdXN0b20gPz8ge307XG4gICAgY29uc3QgdmFyaWFibGVPcHRpb25Hcm91cCA9IHtcbiAgICAgIGxhYmVsOiAnVGVtcGxhdGUgVmFyaWFibGVzJyxcbiAgICAgIGV4cGFuZGVkOiBmYWxzZSxcbiAgICAgIG9wdGlvbnM6IGRhdGFzb3VyY2UuZ2V0VmFyaWFibGVzKCkubWFwKHRvT3B0aW9uKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxRdWVyeUVkaXRvclJvd1xuICAgICAgICAgIGxhYmVsPVwiUXVlcnkgdHlwZVwiXG4gICAgICAgICAgZmlsbENvbXBvbmVudD17XG4gICAgICAgICAgICBxdWVyeS5xdWVyeVR5cGUgIT09IFF1ZXJ5VHlwZS5TTE8gJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NgXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIGljb249XCJlZGl0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgdGhpcy5vblF1ZXJ5Q2hhbmdlKCdtZXRyaWNRdWVyeScsIHtcbiAgICAgICAgICAgICAgICAgICAgLi4ubWV0cmljUXVlcnksXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvck1vZGU6IG1ldHJpY1F1ZXJ5LmVkaXRvck1vZGUgPT09IEVkaXRvck1vZGUuTVFMID8gRWRpdG9yTW9kZS5WaXN1YWwgOiBFZGl0b3JNb2RlLk1RTCxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21ldHJpY1F1ZXJ5LmVkaXRvck1vZGUgPT09IEVkaXRvck1vZGUuTVFMID8gJ1N3aXRjaCB0byBidWlsZGVyJyA6ICdFZGl0IE1RTCd9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICBodG1sRm9yPXtgJHtxdWVyeS5yZWZJZH0tcXVlcnktdHlwZWB9XG4gICAgICAgID5cbiAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICB3aWR0aD17U0VMRUNUX1dJRFRIfVxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5VHlwZX1cbiAgICAgICAgICAgIG9wdGlvbnM9e1FVRVJZX1RZUEVTfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHZhbHVlIH0pID0+IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgc2xvUXVlcnksIHF1ZXJ5VHlwZTogdmFsdWUhIH0pO1xuICAgICAgICAgICAgICBvblJ1blF1ZXJ5KCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaW5wdXRJZD17YCR7cXVlcnkucmVmSWR9LXF1ZXJ5LXR5cGVgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUXVlcnlFZGl0b3JSb3c+XG5cbiAgICAgICAge3F1ZXJ5VHlwZSA9PT0gUXVlcnlUeXBlLk1FVFJJQ1MgJiYgKFxuICAgICAgICAgIDxNZXRyaWNRdWVyeUVkaXRvclxuICAgICAgICAgICAgcmVmSWQ9e3F1ZXJ5LnJlZklkfVxuICAgICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cD17dmFyaWFibGVPcHRpb25Hcm91cH1cbiAgICAgICAgICAgIGN1c3RvbU1ldGFEYXRhPXtjdXN0b21NZXRhRGF0YX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsobWV0cmljUXVlcnk6IE1ldHJpY1F1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyAuLi50aGlzLnByb3BzLnF1ZXJ5LCBtZXRyaWNRdWVyeSB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvblJ1blF1ZXJ5PXtvblJ1blF1ZXJ5fVxuICAgICAgICAgICAgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX1cbiAgICAgICAgICAgIHF1ZXJ5PXttZXRyaWNRdWVyeX1cbiAgICAgICAgICA+PC9NZXRyaWNRdWVyeUVkaXRvcj5cbiAgICAgICAgKX1cblxuICAgICAgICB7cXVlcnlUeXBlID09PSBRdWVyeVR5cGUuU0xPICYmIChcbiAgICAgICAgICA8U0xPUXVlcnlFZGl0b3JcbiAgICAgICAgICAgIHJlZklkPXtxdWVyeS5yZWZJZH1cbiAgICAgICAgICAgIHZhcmlhYmxlT3B0aW9uR3JvdXA9e3ZhcmlhYmxlT3B0aW9uR3JvdXB9XG4gICAgICAgICAgICBjdXN0b21NZXRhRGF0YT17Y3VzdG9tTWV0YURhdGF9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHF1ZXJ5OiBTTE9RdWVyeSkgPT4gdGhpcy5vblF1ZXJ5Q2hhbmdlKCdzbG9RdWVyeScsIHF1ZXJ5KX1cbiAgICAgICAgICAgIG9uUnVuUXVlcnk9e29uUnVuUXVlcnl9XG4gICAgICAgICAgICBkYXRhc291cmNlPXtkYXRhc291cmNlfVxuICAgICAgICAgICAgcXVlcnk9e3Nsb1F1ZXJ5fVxuICAgICAgICAgID48L1NMT1F1ZXJ5RWRpdG9yPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBRdWVyeUVkaXRvclJvdyB9IGZyb20gJy4uJztcbmltcG9ydCB7IFNFTEVDVF9XSURUSCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSBmcm9tICcuLi8uLi9kYXRhc291cmNlJztcbmltcG9ydCB7IFNMT1F1ZXJ5IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVmSWQ6IHN0cmluZztcbiAgb25DaGFuZ2U6IChxdWVyeTogU0xPUXVlcnkpID0+IHZvaWQ7XG4gIHF1ZXJ5OiBTTE9RdWVyeTtcbiAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PjtcbiAgZGF0YXNvdXJjZTogQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZTtcbn1cblxuZXhwb3J0IGNvbnN0IFNMTzogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcmVmSWQsIHF1ZXJ5LCB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucywgb25DaGFuZ2UsIGRhdGFzb3VyY2UgfSkgPT4ge1xuICBjb25zdCBbc2xvcywgc2V0U0xPc10gPSB1c2VTdGF0ZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+KFtdKTtcbiAgY29uc3QgeyBwcm9qZWN0TmFtZSwgc2VydmljZUlkIH0gPSBxdWVyeTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcHJvamVjdE5hbWUgfHwgIXNlcnZpY2VJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRhdGFzb3VyY2UuZ2V0U2VydmljZUxldmVsT2JqZWN0aXZlcyhwcm9qZWN0TmFtZSwgc2VydmljZUlkKS50aGVuKChzbG9JZHM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PikgPT4ge1xuICAgICAgc2V0U0xPcyhbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1RlbXBsYXRlIFZhcmlhYmxlcycsXG4gICAgICAgICAgb3B0aW9uczogdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLnNsb0lkcyxcbiAgICAgIF0pO1xuICAgIH0pO1xuICB9LCBbZGF0YXNvdXJjZSwgcHJvamVjdE5hbWUsIHNlcnZpY2VJZCwgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxRdWVyeUVkaXRvclJvdyBsYWJlbD1cIlNMT1wiIGh0bWxGb3I9e2Ake3JlZklkfS1zbG9gfT5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgaW5wdXRJZD17YCR7cmVmSWR9LXNsb2B9XG4gICAgICAgIHdpZHRoPXtTRUxFQ1RfV0lEVEh9XG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWVcbiAgICAgICAgdmFsdWU9e3F1ZXJ5Py5zbG9JZCAmJiB7IHZhbHVlOiBxdWVyeT8uc2xvSWQsIGxhYmVsOiBxdWVyeT8uc2xvTmFtZSB8fCBxdWVyeT8uc2xvSWQgfX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgU0xPXCJcbiAgICAgICAgb3B0aW9ucz17c2xvc31cbiAgICAgICAgb25DaGFuZ2U9e2FzeW5jICh7IHZhbHVlOiBzbG9JZCA9ICcnLCBsYWJlbDogc2xvTmFtZSA9ICcnIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBzbG9zID0gYXdhaXQgZGF0YXNvdXJjZS5nZXRTZXJ2aWNlTGV2ZWxPYmplY3RpdmVzKHByb2plY3ROYW1lLCBzZXJ2aWNlSWQpO1xuICAgICAgICAgIGNvbnN0IHNsbyA9IHNsb3MuZmluZCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YXNvdXJjZS50ZW1wbGF0ZVNydi5yZXBsYWNlKHNsb0lkKSk7XG4gICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgc2xvSWQsIHNsb05hbWUsIGdvYWw6IHNsbz8uZ29hbCB9KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9RdWVyeUVkaXRvclJvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuaW1wb3J0IHsgQWxpYXNCeSwgUGVyaW9kU2VsZWN0LCBBbGlnbm1lbnRQZXJpb2RMYWJlbCwgUHJvamVjdCwgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBBTElHTk1FTlRfUEVSSU9EUywgU0VMRUNUX1dJRFRIIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uLy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQWxpZ25tZW50VHlwZXMsIEN1c3RvbU1ldGFEYXRhLCBTTE9RdWVyeSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgU2VsZWN0b3IsIFNlcnZpY2UsIFNMTyB9IGZyb20gJy4nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVmSWQ6IHN0cmluZztcbiAgY3VzdG9tTWV0YURhdGE6IEN1c3RvbU1ldGFEYXRhO1xuICB2YXJpYWJsZU9wdGlvbkdyb3VwOiBTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPjtcbiAgb25DaGFuZ2U6IChxdWVyeTogU0xPUXVlcnkpID0+IHZvaWQ7XG4gIG9uUnVuUXVlcnk6ICgpID0+IHZvaWQ7XG4gIHF1ZXJ5OiBTTE9RdWVyeTtcbiAgZGF0YXNvdXJjZTogQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRRdWVyeTogKGRhdGFTb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UpID0+IFNMT1F1ZXJ5ID0gKGRhdGFTb3VyY2UpID0+ICh7XG4gIHByb2plY3ROYW1lOiBkYXRhU291cmNlLmdldERlZmF1bHRQcm9qZWN0KCksXG4gIGFsaWdubWVudFBlcmlvZDogJ2Nsb3VkLW1vbml0b3JpbmctYXV0bycsXG4gIHBlclNlcmllc0FsaWduZXI6IEFsaWdubWVudFR5cGVzLkFMSUdOX01FQU4sXG4gIGFsaWFzQnk6ICcnLFxuICBzZWxlY3Rvck5hbWU6ICdzZWxlY3Rfc2xvX2hlYWx0aCcsXG4gIHNlcnZpY2VJZDogJycsXG4gIHNlcnZpY2VOYW1lOiAnJyxcbiAgc2xvSWQ6ICcnLFxuICBzbG9OYW1lOiAnJyxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gU0xPUXVlcnlFZGl0b3Ioe1xuICByZWZJZCxcbiAgcXVlcnksXG4gIGRhdGFzb3VyY2UsXG4gIG9uQ2hhbmdlLFxuICB2YXJpYWJsZU9wdGlvbkdyb3VwLFxuICBjdXN0b21NZXRhRGF0YSxcbn06IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPFByb3BzPikge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UHJvamVjdFxuICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICAgIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zPXt2YXJpYWJsZU9wdGlvbkdyb3VwLm9wdGlvbnN9XG4gICAgICAgIHByb2plY3ROYW1lPXtxdWVyeS5wcm9qZWN0TmFtZX1cbiAgICAgICAgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX1cbiAgICAgICAgb25DaGFuZ2U9eyhwcm9qZWN0TmFtZSkgPT4gb25DaGFuZ2UoeyAuLi5xdWVyeSwgcHJvamVjdE5hbWUgfSl9XG4gICAgICAvPlxuICAgICAgPFNlcnZpY2VcbiAgICAgICAgcmVmSWQ9e3JlZklkfVxuICAgICAgICBkYXRhc291cmNlPXtkYXRhc291cmNlfVxuICAgICAgICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucz17dmFyaWFibGVPcHRpb25Hcm91cC5vcHRpb25zfVxuICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgID48L1NlcnZpY2U+XG4gICAgICA8U0xPXG4gICAgICAgIHJlZklkPXtyZWZJZH1cbiAgICAgICAgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX1cbiAgICAgICAgdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnM9e3ZhcmlhYmxlT3B0aW9uR3JvdXAub3B0aW9uc31cbiAgICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICA+PC9TTE8+XG4gICAgICA8U2VsZWN0b3JcbiAgICAgICAgcmVmSWQ9e3JlZklkfVxuICAgICAgICBkYXRhc291cmNlPXtkYXRhc291cmNlfVxuICAgICAgICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucz17dmFyaWFibGVPcHRpb25Hcm91cC5vcHRpb25zfVxuICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgID48L1NlbGVjdG9yPlxuXG4gICAgICA8UXVlcnlFZGl0b3JSb3cgbGFiZWw9XCJBbGlnbm1lbnQgcGVyaW9kXCIgaHRtbEZvcj17YCR7cmVmSWR9LWFsaWdubWVudC1wZXJpb2RgfT5cbiAgICAgICAgPFBlcmlvZFNlbGVjdFxuICAgICAgICAgIGlucHV0SWQ9e2Ake3JlZklkfS1hbGlnbm1lbnQtcGVyaW9kYH1cbiAgICAgICAgICB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucz17dmFyaWFibGVPcHRpb25Hcm91cC5vcHRpb25zfVxuICAgICAgICAgIHNlbGVjdFdpZHRoPXtTRUxFQ1RfV0lEVEh9XG4gICAgICAgICAgY3VycmVudD17cXVlcnkuYWxpZ25tZW50UGVyaW9kfVxuICAgICAgICAgIG9uQ2hhbmdlPXsocGVyaW9kKSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBhbGlnbm1lbnRQZXJpb2Q6IHBlcmlvZCB9KX1cbiAgICAgICAgICBhbGlnbWVudFBlcmlvZHM9e0FMSUdOTUVOVF9QRVJJT0RTfVxuICAgICAgICAvPlxuICAgICAgICA8QWxpZ25tZW50UGVyaW9kTGFiZWwgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX0gY3VzdG9tTWV0YURhdGE9e2N1c3RvbU1ldGFEYXRhfSAvPlxuICAgICAgPC9RdWVyeUVkaXRvclJvdz5cblxuICAgICAgPEFsaWFzQnkgcmVmSWQ9e3JlZklkfSB2YWx1ZT17cXVlcnkuYWxpYXNCeX0gb25DaGFuZ2U9eyhhbGlhc0J5KSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBhbGlhc0J5IH0pfSAvPlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUm93IH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgU0VMRUNUX1dJRFRILCBTRUxFQ1RPUlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBTTE9RdWVyeSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAocXVlcnk6IFNMT1F1ZXJ5KSA9PiB2b2lkO1xuICBxdWVyeTogU0xPUXVlcnk7XG4gIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2U7XG59XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RvcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcmVmSWQsIHF1ZXJ5LCB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucywgb25DaGFuZ2UsIGRhdGFzb3VyY2UgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeUVkaXRvclJvdyBsYWJlbD1cIlNlbGVjdG9yXCIgaHRtbEZvcj17YCR7cmVmSWR9LXNsby1zZWxlY3RvcmB9PlxuICAgICAgPFNlbGVjdFxuICAgICAgICBpbnB1dElkPXtgJHtyZWZJZH0tc2xvLXNlbGVjdG9yYH1cbiAgICAgICAgd2lkdGg9e1NFTEVDVF9XSURUSH1cbiAgICAgICAgYWxsb3dDdXN0b21WYWx1ZVxuICAgICAgICB2YWx1ZT17Wy4uLlNFTEVDVE9SUywgLi4udGVtcGxhdGVWYXJpYWJsZU9wdGlvbnNdLmZpbmQoKHMpID0+IHMudmFsdWUgPT09IHF1ZXJ5Py5zZWxlY3Rvck5hbWUgPz8gJycpfVxuICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdUZW1wbGF0ZSBWYXJpYWJsZXMnLFxuICAgICAgICAgICAgb3B0aW9uczogdGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi5TRUxFQ1RPUlMsXG4gICAgICAgIF19XG4gICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZTogc2VsZWN0b3JOYW1lIH0pID0+IG9uQ2hhbmdlKHsgLi4ucXVlcnksIHNlbGVjdG9yTmFtZTogc2VsZWN0b3JOYW1lID8/ICcnIH0pfVxuICAgICAgLz5cbiAgICA8L1F1ZXJ5RWRpdG9yUm93PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JSb3cgfSBmcm9tICcuLic7XG5pbXBvcnQgeyBTRUxFQ1RfV0lEVEggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBTTE9RdWVyeSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJlZklkOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAocXVlcnk6IFNMT1F1ZXJ5KSA9PiB2b2lkO1xuICBxdWVyeTogU0xPUXVlcnk7XG4gIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2U7XG59XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyByZWZJZCwgcXVlcnksIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zLCBvbkNoYW5nZSwgZGF0YXNvdXJjZSB9KSA9PiB7XG4gIGNvbnN0IFtzZXJ2aWNlcywgc2V0U2VydmljZXNdID0gdXNlU3RhdGU8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+PihbXSk7XG4gIGNvbnN0IHsgcHJvamVjdE5hbWUgfSA9IHF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwcm9qZWN0TmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRhdGFzb3VyY2UuZ2V0U0xPU2VydmljZXMocHJvamVjdE5hbWUpLnRoZW4oKHNlcnZpY2VzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4pID0+IHtcbiAgICAgIHNldFNlcnZpY2VzKFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnVGVtcGxhdGUgVmFyaWFibGVzJyxcbiAgICAgICAgICBvcHRpb25zOiB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLi4uc2VydmljZXMsXG4gICAgICBdKTtcbiAgICB9KTtcbiAgfSwgW2RhdGFzb3VyY2UsIHByb2plY3ROYW1lLCB0ZW1wbGF0ZVZhcmlhYmxlT3B0aW9uc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5RWRpdG9yUm93IGxhYmVsPVwiU2VydmljZVwiIGh0bWxGb3I9e2Ake3JlZklkfS1zbG8tc2VydmljZWB9PlxuICAgICAgPFNlbGVjdFxuICAgICAgICBpbnB1dElkPXtgJHtyZWZJZH0tc2xvLXNlcnZpY2VgfVxuICAgICAgICB3aWR0aD17U0VMRUNUX1dJRFRIfVxuICAgICAgICBhbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgIHZhbHVlPXtxdWVyeT8uc2VydmljZUlkICYmIHsgdmFsdWU6IHF1ZXJ5Py5zZXJ2aWNlSWQsIGxhYmVsOiBxdWVyeT8uc2VydmljZU5hbWUgfHwgcXVlcnk/LnNlcnZpY2VJZCB9fVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBzZXJ2aWNlXCJcbiAgICAgICAgb3B0aW9ucz17c2VydmljZXN9XG4gICAgICAgIG9uQ2hhbmdlPXsoeyB2YWx1ZTogc2VydmljZUlkID0gJycsIGxhYmVsOiBzZXJ2aWNlTmFtZSA9ICcnIH0pID0+XG4gICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgc2VydmljZUlkLCBzZXJ2aWNlTmFtZSwgc2xvSWQ6ICcnIH0pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9RdWVyeUVkaXRvclJvdz5cbiAgKTtcbn07XG4iLCJleHBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi9TZXJ2aWNlJztcbmV4cG9ydCB7IFNMTyB9IGZyb20gJy4vU0xPJztcbmV4cG9ydCB7IFNlbGVjdG9yIH0gZnJvbSAnLi9TZWxlY3Rvcic7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0VGVtcGxhdGVTcnYgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcblxuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBleHRyYWN0U2VydmljZXNGcm9tTWV0cmljRGVzY3JpcHRvcnMsIGdldExhYmVsS2V5cywgZ2V0TWV0cmljVHlwZXMgfSBmcm9tICcuLi9mdW5jdGlvbnMnO1xuaW1wb3J0IHtcbiAgQ2xvdWRNb25pdG9yaW5nT3B0aW9ucyxcbiAgQ2xvdWRNb25pdG9yaW5nUXVlcnksXG4gIENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnksXG4gIE1ldHJpY0Rlc2NyaXB0b3IsXG4gIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLFxuICBWYXJpYWJsZVF1ZXJ5RGF0YSxcbn0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBWYXJpYWJsZVF1ZXJ5RmllbGQgfSBmcm9tICcuLyc7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gUXVlcnlFZGl0b3JQcm9wczxcbiAgQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSxcbiAgQ2xvdWRNb25pdG9yaW5nUXVlcnksXG4gIENsb3VkTW9uaXRvcmluZ09wdGlvbnMsXG4gIENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnlcbj47XG5cbmV4cG9ydCBjbGFzcyBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5RWRpdG9yIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgVmFyaWFibGVRdWVyeURhdGE+IHtcbiAgcXVlcnlUeXBlczogQXJyYXk8eyB2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+ID0gW1xuICAgIHsgdmFsdWU6IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLlByb2plY3RzLCBsYWJlbDogJ1Byb2plY3RzJyB9LFxuICAgIHsgdmFsdWU6IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLlNlcnZpY2VzLCBsYWJlbDogJ1NlcnZpY2VzJyB9LFxuICAgIHsgdmFsdWU6IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLk1ldHJpY1R5cGVzLCBsYWJlbDogJ01ldHJpYyBUeXBlcycgfSxcbiAgICB7IHZhbHVlOiBNZXRyaWNGaW5kUXVlcnlUeXBlcy5MYWJlbEtleXMsIGxhYmVsOiAnTGFiZWwgS2V5cycgfSxcbiAgICB7IHZhbHVlOiBNZXRyaWNGaW5kUXVlcnlUeXBlcy5MYWJlbFZhbHVlcywgbGFiZWw6ICdMYWJlbCBWYWx1ZXMnIH0sXG4gICAgeyB2YWx1ZTogTWV0cmljRmluZFF1ZXJ5VHlwZXMuUmVzb3VyY2VUeXBlcywgbGFiZWw6ICdSZXNvdXJjZSBUeXBlcycgfSxcbiAgICB7IHZhbHVlOiBNZXRyaWNGaW5kUXVlcnlUeXBlcy5BZ2dyZWdhdGlvbnMsIGxhYmVsOiAnQWdncmVnYXRpb25zJyB9LFxuICAgIHsgdmFsdWU6IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkFsaWduZXJzLCBsYWJlbDogJ0FsaWduZXJzJyB9LFxuICAgIHsgdmFsdWU6IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkFsaWdubWVudFBlcmlvZHMsIGxhYmVsOiAnQWxpZ25tZW50IFBlcmlvZHMnIH0sXG4gICAgeyB2YWx1ZTogTWV0cmljRmluZFF1ZXJ5VHlwZXMuU2VsZWN0b3JzLCBsYWJlbDogJ1NlbGVjdG9ycycgfSxcbiAgICB7IHZhbHVlOiBNZXRyaWNGaW5kUXVlcnlUeXBlcy5TTE9TZXJ2aWNlcywgbGFiZWw6ICdTTE8gU2VydmljZXMnIH0sXG4gICAgeyB2YWx1ZTogTWV0cmljRmluZFF1ZXJ5VHlwZXMuU0xPLCBsYWJlbDogJ1NlcnZpY2UgTGV2ZWwgT2JqZWN0aXZlcyAoU0xPKScgfSxcbiAgXTtcblxuICBkZWZhdWx0czogVmFyaWFibGVRdWVyeURhdGEgPSB7XG4gICAgc2VsZWN0ZWRRdWVyeVR5cGU6IHRoaXMucXVlcnlUeXBlc1swXS52YWx1ZSxcbiAgICBtZXRyaWNEZXNjcmlwdG9yczogW10sXG4gICAgc2VsZWN0ZWRTZXJ2aWNlOiAnJyxcbiAgICBzZWxlY3RlZE1ldHJpY1R5cGU6ICcnLFxuICAgIGxhYmVsczogW10sXG4gICAgbGFiZWxLZXk6ICcnLFxuICAgIG1ldHJpY1R5cGVzOiBbXSxcbiAgICBzZXJ2aWNlczogW10sXG4gICAgc2xvU2VydmljZXM6IFtdLFxuICAgIHNlbGVjdGVkU0xPU2VydmljZTogJycsXG4gICAgcHJvamVjdHM6IFtdLFxuICAgIHByb2plY3ROYW1lOiAnJyxcbiAgICBsb2FkaW5nOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHRoaXMuZGVmYXVsdHMsXG4gICAgICB7IHByb2plY3ROYW1lOiB0aGlzLnByb3BzLmRhdGFzb3VyY2UuZ2V0RGVmYXVsdFByb2plY3QoKSB9LFxuICAgICAgdGhpcy5wcm9wcy5xdWVyeVxuICAgICk7XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IChhd2FpdCB0aGlzLnByb3BzLmRhdGFzb3VyY2UuZ2V0UHJvamVjdHMoKSkgYXMgTWV0cmljRGVzY3JpcHRvcltdO1xuICAgIGNvbnN0IG1ldHJpY0Rlc2NyaXB0b3JzID0gYXdhaXQgdGhpcy5wcm9wcy5kYXRhc291cmNlLmdldE1ldHJpY1R5cGVzKFxuICAgICAgdGhpcy5wcm9wcy5xdWVyeS5wcm9qZWN0TmFtZSB8fCB0aGlzLnByb3BzLmRhdGFzb3VyY2UuZ2V0RGVmYXVsdFByb2plY3QoKVxuICAgICk7XG4gICAgY29uc3Qgc2VydmljZXMgPSBleHRyYWN0U2VydmljZXNGcm9tTWV0cmljRGVzY3JpcHRvcnMobWV0cmljRGVzY3JpcHRvcnMpLm1hcCgobTogYW55KSA9PiAoe1xuICAgICAgdmFsdWU6IG0uc2VydmljZSxcbiAgICAgIGxhYmVsOiBtLnNlcnZpY2VTaG9ydE5hbWUsXG4gICAgfSkpO1xuXG4gICAgbGV0IHNlbGVjdGVkU2VydmljZSA9ICcnO1xuICAgIGlmIChzZXJ2aWNlcy5zb21lKChzKSA9PiBzLnZhbHVlID09PSBnZXRUZW1wbGF0ZVNydigpLnJlcGxhY2UodGhpcy5zdGF0ZS5zZWxlY3RlZFNlcnZpY2UpKSkge1xuICAgICAgc2VsZWN0ZWRTZXJ2aWNlID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFNlcnZpY2U7XG4gICAgfSBlbHNlIGlmIChzZXJ2aWNlcyAmJiBzZXJ2aWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICBzZWxlY3RlZFNlcnZpY2UgPSBzZXJ2aWNlc1swXS52YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB7IG1ldHJpY1R5cGVzLCBzZWxlY3RlZE1ldHJpY1R5cGUgfSA9IGdldE1ldHJpY1R5cGVzKFxuICAgICAgbWV0cmljRGVzY3JpcHRvcnMsXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkTWV0cmljVHlwZSxcbiAgICAgIGdldFRlbXBsYXRlU3J2KCkucmVwbGFjZSh0aGlzLnN0YXRlLnNlbGVjdGVkTWV0cmljVHlwZSksXG4gICAgICBnZXRUZW1wbGF0ZVNydigpLnJlcGxhY2Uoc2VsZWN0ZWRTZXJ2aWNlKVxuICAgICk7XG5cbiAgICBjb25zdCBzbG9TZXJ2aWNlcyA9IGF3YWl0IHRoaXMucHJvcHMuZGF0YXNvdXJjZS5nZXRTTE9TZXJ2aWNlcyh0aGlzLnN0YXRlLnByb2plY3ROYW1lKTtcblxuICAgIGNvbnN0IHN0YXRlOiBhbnkgPSB7XG4gICAgICBzZXJ2aWNlcyxcbiAgICAgIHNlbGVjdGVkU2VydmljZSxcbiAgICAgIG1ldHJpY1R5cGVzLFxuICAgICAgc2VsZWN0ZWRNZXRyaWNUeXBlLFxuICAgICAgbWV0cmljRGVzY3JpcHRvcnMsXG4gICAgICBwcm9qZWN0cyxcbiAgICAgIC4uLihhd2FpdCB0aGlzLmdldExhYmVscyhzZWxlY3RlZE1ldHJpY1R5cGUsIHRoaXMuc3RhdGUucHJvamVjdE5hbWUpKSxcbiAgICAgIHNsb1NlcnZpY2VzLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlLCAoKSA9PiB0aGlzLm9uUHJvcHNDaGFuZ2UoKSk7XG4gIH1cblxuICBvblByb3BzQ2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbWV0cmljRGVzY3JpcHRvcnMsIGxhYmVscywgbWV0cmljVHlwZXMsIHNlcnZpY2VzLCAuLi5xdWVyeU1vZGVsIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyAuLi5xdWVyeU1vZGVsLCByZWZJZDogJ0Nsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnlFZGl0b3ItVmFyaWFibGVRdWVyeScgfSk7XG4gIH07XG5cbiAgYXN5bmMgb25RdWVyeVR5cGVDaGFuZ2UocXVlcnlUeXBlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdGF0ZTogYW55ID0ge1xuICAgICAgc2VsZWN0ZWRRdWVyeVR5cGU6IHF1ZXJ5VHlwZSxcbiAgICAgIC4uLihhd2FpdCB0aGlzLmdldExhYmVscyh0aGlzLnN0YXRlLnNlbGVjdGVkTWV0cmljVHlwZSwgdGhpcy5zdGF0ZS5wcm9qZWN0TmFtZSwgcXVlcnlUeXBlKSksXG4gICAgfTtcblxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgYXN5bmMgb25Qcm9qZWN0Q2hhbmdlKHByb2plY3ROYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtZXRyaWNEZXNjcmlwdG9ycyA9IGF3YWl0IHRoaXMucHJvcHMuZGF0YXNvdXJjZS5nZXRNZXRyaWNUeXBlcyhwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgbGFiZWxzID0gYXdhaXQgdGhpcy5nZXRMYWJlbHModGhpcy5zdGF0ZS5zZWxlY3RlZE1ldHJpY1R5cGUsIHByb2plY3ROYW1lKTtcbiAgICBjb25zdCB7IG1ldHJpY1R5cGVzLCBzZWxlY3RlZE1ldHJpY1R5cGUgfSA9IGdldE1ldHJpY1R5cGVzKFxuICAgICAgbWV0cmljRGVzY3JpcHRvcnMsXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkTWV0cmljVHlwZSxcbiAgICAgIGdldFRlbXBsYXRlU3J2KCkucmVwbGFjZSh0aGlzLnN0YXRlLnNlbGVjdGVkTWV0cmljVHlwZSksXG4gICAgICBnZXRUZW1wbGF0ZVNydigpLnJlcGxhY2UodGhpcy5zdGF0ZS5zZWxlY3RlZFNlcnZpY2UpXG4gICAgKTtcblxuICAgIGNvbnN0IHNsb1NlcnZpY2VzID0gYXdhaXQgdGhpcy5wcm9wcy5kYXRhc291cmNlLmdldFNMT1NlcnZpY2VzKHByb2plY3ROYW1lKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7XG4gICAgICAgIC4uLmxhYmVscyxcbiAgICAgICAgbWV0cmljVHlwZXMsXG4gICAgICAgIHNlbGVjdGVkTWV0cmljVHlwZSxcbiAgICAgICAgbWV0cmljRGVzY3JpcHRvcnMsXG4gICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICBzbG9TZXJ2aWNlcyxcbiAgICAgIH0sXG4gICAgICAoKSA9PiB0aGlzLm9uUHJvcHNDaGFuZ2UoKVxuICAgICk7XG4gIH1cblxuICBhc3luYyBvblNlcnZpY2VDaGFuZ2Uoc2VydmljZTogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBtZXRyaWNUeXBlcywgc2VsZWN0ZWRNZXRyaWNUeXBlIH0gPSBnZXRNZXRyaWNUeXBlcyhcbiAgICAgIHRoaXMuc3RhdGUubWV0cmljRGVzY3JpcHRvcnMsXG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkTWV0cmljVHlwZSxcbiAgICAgIGdldFRlbXBsYXRlU3J2KCkucmVwbGFjZSh0aGlzLnN0YXRlLnNlbGVjdGVkTWV0cmljVHlwZSksXG4gICAgICBnZXRUZW1wbGF0ZVNydigpLnJlcGxhY2Uoc2VydmljZSlcbiAgICApO1xuICAgIGNvbnN0IHN0YXRlOiBhbnkgPSB7XG4gICAgICBzZWxlY3RlZFNlcnZpY2U6IHNlcnZpY2UsXG4gICAgICBtZXRyaWNUeXBlcyxcbiAgICAgIHNlbGVjdGVkTWV0cmljVHlwZSxcbiAgICAgIC4uLihhd2FpdCB0aGlzLmdldExhYmVscyhzZWxlY3RlZE1ldHJpY1R5cGUsIHRoaXMuc3RhdGUucHJvamVjdE5hbWUpKSxcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUsICgpID0+IHRoaXMub25Qcm9wc0NoYW5nZSgpKTtcbiAgfVxuXG4gIGFzeW5jIG9uTWV0cmljVHlwZUNoYW5nZShtZXRyaWNUeXBlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzdGF0ZTogYW55ID0ge1xuICAgICAgc2VsZWN0ZWRNZXRyaWNUeXBlOiBtZXRyaWNUeXBlLFxuICAgICAgLi4uKGF3YWl0IHRoaXMuZ2V0TGFiZWxzKG1ldHJpY1R5cGUsIHRoaXMuc3RhdGUucHJvamVjdE5hbWUpKSxcbiAgICB9O1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUsICgpID0+IHRoaXMub25Qcm9wc0NoYW5nZSgpKTtcbiAgfVxuXG4gIG9uTGFiZWxLZXlDaGFuZ2UobGFiZWxLZXk6IHN0cmluZykge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsYWJlbEtleSB9LCAoKSA9PiB0aGlzLm9uUHJvcHNDaGFuZ2UoKSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBSZWFkb25seTxQcm9wcz4sIHByZXZTdGF0ZTogUmVhZG9ubHk8VmFyaWFibGVRdWVyeURhdGE+KSB7XG4gICAgY29uc3Qgc2VsZWNRdWVyeVR5cGVDaGFuZ2VkID0gcHJldlN0YXRlLnNlbGVjdGVkUXVlcnlUeXBlICE9PSB0aGlzLnN0YXRlLnNlbGVjdGVkUXVlcnlUeXBlO1xuICAgIGNvbnN0IHNlbGVjdFNMT1NlcnZpY2VDaGFuZ2VkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFNMT1NlcnZpY2UgIT09IHByZXZTdGF0ZS5zZWxlY3RlZFNMT1NlcnZpY2U7XG4gICAgaWYgKHNlbGVjUXVlcnlUeXBlQ2hhbmdlZCB8fCBzZWxlY3RTTE9TZXJ2aWNlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5vblByb3BzQ2hhbmdlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0TGFiZWxzKHNlbGVjdGVkTWV0cmljVHlwZTogc3RyaW5nLCBwcm9qZWN0TmFtZTogc3RyaW5nLCBzZWxlY3RlZFF1ZXJ5VHlwZSA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRRdWVyeVR5cGUpIHtcbiAgICBsZXQgcmVzdWx0ID0geyBsYWJlbHM6IHRoaXMuc3RhdGUubGFiZWxzLCBsYWJlbEtleTogdGhpcy5zdGF0ZS5sYWJlbEtleSB9O1xuICAgIGlmIChzZWxlY3RlZE1ldHJpY1R5cGUgJiYgc2VsZWN0ZWRRdWVyeVR5cGUgPT09IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkxhYmVsVmFsdWVzKSB7XG4gICAgICBjb25zdCBsYWJlbHMgPSBhd2FpdCBnZXRMYWJlbEtleXModGhpcy5wcm9wcy5kYXRhc291cmNlLCBzZWxlY3RlZE1ldHJpY1R5cGUsIHByb2plY3ROYW1lKTtcbiAgICAgIGNvbnN0IGxhYmVsS2V5ID0gbGFiZWxzLnNvbWUoKGwpID0+IGwgPT09IGdldFRlbXBsYXRlU3J2KCkucmVwbGFjZSh0aGlzLnN0YXRlLmxhYmVsS2V5KSlcbiAgICAgICAgPyB0aGlzLnN0YXRlLmxhYmVsS2V5XG4gICAgICAgIDogbGFiZWxzWzBdO1xuICAgICAgcmVzdWx0ID0geyBsYWJlbHMsIGxhYmVsS2V5IH07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZW5kZXJRdWVyeVR5cGVTd2l0Y2gocXVlcnlUeXBlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB2YXJpYWJsZU9wdGlvbkdyb3VwID0ge1xuICAgICAgbGFiZWw6ICdUZW1wbGF0ZSBWYXJpYWJsZXMnLFxuICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgb3B0aW9uczogZ2V0VGVtcGxhdGVTcnYoKVxuICAgICAgICAuZ2V0VmFyaWFibGVzKClcbiAgICAgICAgLm1hcCgodjogYW55KSA9PiAoe1xuICAgICAgICAgIHZhbHVlOiBgJCR7di5uYW1lfWAsXG4gICAgICAgICAgbGFiZWw6IGAkJHt2Lm5hbWV9YCxcbiAgICAgICAgfSkpLFxuICAgIH07XG5cbiAgICBzd2l0Y2ggKHF1ZXJ5VHlwZSkge1xuICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5NZXRyaWNUeXBlczpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICBhbGxvd0N1c3RvbVZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9qZWN0TmFtZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17W3ZhcmlhYmxlT3B0aW9uR3JvdXAsIC4uLnRoaXMuc3RhdGUucHJvamVjdHNdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLm9uUHJvamVjdENoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIGxhYmVsPVwiUHJvamVjdFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFNlcnZpY2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1t2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi50aGlzLnN0YXRlLnNlcnZpY2VzXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5vblNlcnZpY2VDaGFuZ2UodmFsdWUpfVxuICAgICAgICAgICAgICBsYWJlbD1cIlNlcnZpY2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuTGFiZWxLZXlzOlxuICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5MYWJlbFZhbHVlczpcbiAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuUmVzb3VyY2VUeXBlczpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICBhbGxvd0N1c3RvbVZhbHVlPXt0cnVlfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9qZWN0TmFtZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17W3ZhcmlhYmxlT3B0aW9uR3JvdXAsIC4uLnRoaXMuc3RhdGUucHJvamVjdHNdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLm9uUHJvamVjdENoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIGxhYmVsPVwiUHJvamVjdFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFNlcnZpY2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1t2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi50aGlzLnN0YXRlLnNlcnZpY2VzXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5vblNlcnZpY2VDaGFuZ2UodmFsdWUpfVxuICAgICAgICAgICAgICBsYWJlbD1cIlNlcnZpY2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWYXJpYWJsZVF1ZXJ5RmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNZXRyaWNUeXBlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cCxcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLm1ldHJpY1R5cGVzLm1hcCgoeyB2YWx1ZSwgbmFtZSB9KSA9PiAoeyB2YWx1ZSwgbGFiZWw6IG5hbWUgfSkpLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLm9uTWV0cmljVHlwZUNoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIGxhYmVsPVwiTWV0cmljIFR5cGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtxdWVyeVR5cGUgPT09IE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkxhYmVsVmFsdWVzICYmIChcbiAgICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhYmVsS2V5fVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e1t2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi50aGlzLnN0YXRlLmxhYmVscy5tYXAoKGwpID0+ICh7IHZhbHVlOiBsLCBsYWJlbDogbCB9KSldfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHRoaXMub25MYWJlbEtleUNoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMYWJlbCBLZXlcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuQWxpZ25lcnM6XG4gICAgICBjYXNlIE1ldHJpY0ZpbmRRdWVyeVR5cGVzLkFnZ3JlZ2F0aW9uczpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFZhcmlhYmxlUXVlcnlGaWVsZFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFNlcnZpY2V9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1t2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi50aGlzLnN0YXRlLnNlcnZpY2VzXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5vblNlcnZpY2VDaGFuZ2UodmFsdWUpfVxuICAgICAgICAgICAgICBsYWJlbD1cIlNlcnZpY2VcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWYXJpYWJsZVF1ZXJ5RmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRNZXRyaWNUeXBlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgdmFyaWFibGVPcHRpb25Hcm91cCxcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLm1ldHJpY1R5cGVzLm1hcCgoeyB2YWx1ZSwgbmFtZSB9KSA9PiAoeyB2YWx1ZSwgbGFiZWw6IG5hbWUgfSkpLFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB0aGlzLm9uTWV0cmljVHlwZUNoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgICAgIGxhYmVsPVwiTWV0cmljIFR5cGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgTWV0cmljRmluZFF1ZXJ5VHlwZXMuU0xPU2VydmljZXM6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxWYXJpYWJsZVF1ZXJ5RmllbGRcbiAgICAgICAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJvamVjdE5hbWV9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1t2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi50aGlzLnN0YXRlLnByb2plY3RzXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5vblByb2plY3RDaGFuZ2UodmFsdWUpfVxuICAgICAgICAgICAgICBsYWJlbD1cIlByb2plY3RcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcblxuICAgICAgY2FzZSBNZXRyaWNGaW5kUXVlcnlUeXBlcy5TTE86XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxWYXJpYWJsZVF1ZXJ5RmllbGRcbiAgICAgICAgICAgICAgYWxsb3dDdXN0b21WYWx1ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucHJvamVjdE5hbWV9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e1t2YXJpYWJsZU9wdGlvbkdyb3VwLCAuLi50aGlzLnN0YXRlLnByb2plY3RzXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5vblByb2plY3RDaGFuZ2UodmFsdWUpfVxuICAgICAgICAgICAgICBsYWJlbD1cIlByb2plY3RcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWYXJpYWJsZVF1ZXJ5RmllbGRcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTTE9TZXJ2aWNlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtbdmFyaWFibGVPcHRpb25Hcm91cCwgLi4udGhpcy5zdGF0ZS5zbG9TZXJ2aWNlc119XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFNMT1NlcnZpY2U6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBsYWJlbD1cIlNMTyBTZXJ2aWNlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybSBtYXgtd2lkdGgtMjFcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHdpZHRoLTEwIHF1ZXJ5LWtleXdvcmRcIj5RdWVyeSBUeXBlPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1zZWxlY3Qtd3JhcHBlciBtYXgtd2lkdGgtMTJcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbnB1dFwiPlxuICAgICAgICAgICAgICA8b3B0aW9uPkxvYWRpbmcuLi48L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxWYXJpYWJsZVF1ZXJ5RmllbGRcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFF1ZXJ5VHlwZX1cbiAgICAgICAgICBvcHRpb25zPXt0aGlzLnF1ZXJ5VHlwZXN9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5vblF1ZXJ5VHlwZUNoYW5nZSh2YWx1ZSl9XG4gICAgICAgICAgbGFiZWw9XCJRdWVyeSBUeXBlXCJcbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMucmVuZGVyUXVlcnlUeXBlU3dpdGNoKHRoaXMuc3RhdGUuc2VsZWN0ZWRRdWVyeVR5cGUpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQ3VzdG9tTWV0YURhdGEsIE1ldHJpY0Rlc2NyaXB0b3IsIE1ldHJpY1F1ZXJ5LCBTTE9RdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgQWxpZ25tZW50LCBHcm91cEJ5LCBMYWJlbEZpbHRlciwgTWV0cmljcywgUHJlcHJvY2Vzc29yIH0gZnJvbSAnLic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICByZWZJZDogc3RyaW5nO1xuICBjdXN0b21NZXRhRGF0YTogQ3VzdG9tTWV0YURhdGE7XG4gIHZhcmlhYmxlT3B0aW9uR3JvdXA6IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+O1xuICBvbk1ldHJpY1R5cGVDaGFuZ2U6IChxdWVyeTogTWV0cmljRGVzY3JpcHRvcikgPT4gdm9pZDtcbiAgb25DaGFuZ2U6IChxdWVyeTogTWV0cmljUXVlcnkgfCBTTE9RdWVyeSkgPT4gdm9pZDtcbiAgcXVlcnk6IE1ldHJpY1F1ZXJ5O1xuICBkYXRhc291cmNlOiBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlO1xuICBsYWJlbHM6IGFueTtcbn1cblxuZnVuY3Rpb24gRWRpdG9yKHtcbiAgcmVmSWQsXG4gIHF1ZXJ5LFxuICBsYWJlbHMsXG4gIGRhdGFzb3VyY2UsXG4gIG9uQ2hhbmdlLFxuICBvbk1ldHJpY1R5cGVDaGFuZ2UsXG4gIGN1c3RvbU1ldGFEYXRhLFxuICB2YXJpYWJsZU9wdGlvbkdyb3VwLFxufTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHM+KSB7XG4gIHJldHVybiAoXG4gICAgPE1ldHJpY3NcbiAgICAgIHJlZklkPXtyZWZJZH1cbiAgICAgIHRlbXBsYXRlU3J2PXtkYXRhc291cmNlLnRlbXBsYXRlU3J2fVxuICAgICAgcHJvamVjdE5hbWU9e3F1ZXJ5LnByb2plY3ROYW1lfVxuICAgICAgbWV0cmljVHlwZT17cXVlcnkubWV0cmljVHlwZX1cbiAgICAgIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zPXt2YXJpYWJsZU9wdGlvbkdyb3VwLm9wdGlvbnN9XG4gICAgICBkYXRhc291cmNlPXtkYXRhc291cmNlfVxuICAgICAgb25DaGFuZ2U9e29uTWV0cmljVHlwZUNoYW5nZX1cbiAgICA+XG4gICAgICB7KG1ldHJpYykgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMYWJlbEZpbHRlclxuICAgICAgICAgICAgbGFiZWxzPXtsYWJlbHN9XG4gICAgICAgICAgICBmaWx0ZXJzPXtxdWVyeS5maWx0ZXJzIX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZmlsdGVyczogc3RyaW5nW10pID0+IG9uQ2hhbmdlKHsgLi4ucXVlcnksIGZpbHRlcnMgfSl9XG4gICAgICAgICAgICB2YXJpYWJsZU9wdGlvbkdyb3VwPXt2YXJpYWJsZU9wdGlvbkdyb3VwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFByZXByb2Nlc3NvciBtZXRyaWNEZXNjcmlwdG9yPXttZXRyaWN9IHF1ZXJ5PXtxdWVyeX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICAgIDxHcm91cEJ5XG4gICAgICAgICAgICByZWZJZD17cmVmSWR9XG4gICAgICAgICAgICBsYWJlbHM9e09iamVjdC5rZXlzKGxhYmVscyl9XG4gICAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICB2YXJpYWJsZU9wdGlvbkdyb3VwPXt2YXJpYWJsZU9wdGlvbkdyb3VwfVxuICAgICAgICAgICAgbWV0cmljRGVzY3JpcHRvcj17bWV0cmljfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEFsaWdubWVudFxuICAgICAgICAgICAgcmVmSWQ9e3JlZklkfVxuICAgICAgICAgICAgZGF0YXNvdXJjZT17ZGF0YXNvdXJjZX1cbiAgICAgICAgICAgIHRlbXBsYXRlVmFyaWFibGVPcHRpb25zPXt2YXJpYWJsZU9wdGlvbkdyb3VwLm9wdGlvbnN9XG4gICAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgICBjdXN0b21NZXRhRGF0YT17Y3VzdG9tTWV0YURhdGF9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvTWV0cmljcz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IFZpc3VhbE1ldHJpY1F1ZXJ5RWRpdG9yID0gUmVhY3QubWVtbyhFZGl0b3IpO1xuIiwiZXhwb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vUHJvamVjdCc7XG5leHBvcnQgeyBNZXRyaWNzIH0gZnJvbSAnLi9NZXRyaWNzJztcbmV4cG9ydCB7IEdyb3VwQnkgfSBmcm9tICcuL0dyb3VwQnknO1xuZXhwb3J0IHsgQWxpZ25tZW50IH0gZnJvbSAnLi9BbGlnbm1lbnQnO1xuZXhwb3J0IHsgTGFiZWxGaWx0ZXIgfSBmcm9tICcuL0xhYmVsRmlsdGVyJztcbmV4cG9ydCB7IEFubm90YXRpb25zSGVscCB9IGZyb20gJy4vQW5ub3RhdGlvbnNIZWxwJztcbmV4cG9ydCB7IEFsaWdubWVudEZ1bmN0aW9uIH0gZnJvbSAnLi9BbGlnbm1lbnRGdW5jdGlvbic7XG5leHBvcnQgeyBBbGlnbm1lbnRQZXJpb2RMYWJlbCB9IGZyb20gJy4vQWxpZ25tZW50UGVyaW9kTGFiZWwnO1xuZXhwb3J0IHsgQWxpYXNCeSB9IGZyb20gJy4vQWxpYXNCeSc7XG5leHBvcnQgeyBBZ2dyZWdhdGlvbiB9IGZyb20gJy4vQWdncmVnYXRpb24nO1xuZXhwb3J0IHsgTWV0cmljUXVlcnlFZGl0b3IgfSBmcm9tICcuL01ldHJpY1F1ZXJ5RWRpdG9yJztcbmV4cG9ydCB7IFNMT1F1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9TTE8vU0xPUXVlcnlFZGl0b3InO1xuZXhwb3J0IHsgTVFMUXVlcnlFZGl0b3IgfSBmcm9tICcuL01RTFF1ZXJ5RWRpdG9yJztcbmV4cG9ydCB7IFZhcmlhYmxlUXVlcnlGaWVsZCwgUXVlcnlFZGl0b3JSb3csIFF1ZXJ5RWRpdG9yRmllbGQgfSBmcm9tICcuL0ZpZWxkcyc7XG5leHBvcnQgeyBWaXN1YWxNZXRyaWNRdWVyeUVkaXRvciB9IGZyb20gJy4vVmlzdWFsTWV0cmljUXVlcnlFZGl0b3InO1xuZXhwb3J0IHsgUGVyaW9kU2VsZWN0IH0gZnJvbSAnLi9QZXJpb2RTZWxlY3QnO1xuZXhwb3J0IHsgUHJlcHJvY2Vzc29yIH0gZnJvbSAnLi9QcmVwcm9jZXNzb3InO1xuIiwiaW1wb3J0IHsgR29vZ2xlQXV0aFR5cGUgfSBmcm9tICdAZ3JhZmFuYS9nb29nbGUtc2RrJztcblxuaW1wb3J0IHsgTWV0cmljS2luZCwgUXVlcnlUeXBlLCBWYWx1ZVR5cGVzIH0gZnJvbSAnLi90eXBlcyc7XG5cbi8vIG5vdCBzdXBlciBleGNpdGVkIGFib3V0IHVzaW5nIHVuZXZlbiBudW1iZXJzLCBidXQgdGhpcyBtYWtlcyBpdCBhbGlnbiBwZXJmZWN0bHkgd2l0aCByb3dzIHRoYXQgaGFzIHR3byBmaWVsZHNcbmV4cG9ydCBjb25zdCBJTlBVVF9XSURUSCA9IDcxO1xuZXhwb3J0IGNvbnN0IExBQkVMX1dJRFRIID0gMTk7XG5leHBvcnQgY29uc3QgSU5ORVJfTEFCRUxfV0lEVEggPSAxNDtcbmV4cG9ydCBjb25zdCBTRUxFQ1RfV0lEVEggPSAyODtcbmV4cG9ydCBjb25zdCBBVVRIX1RZUEVTID0gW1xuICB7IHZhbHVlOiAnR29vZ2xlIEpXVCBGaWxlJywga2V5OiBHb29nbGVBdXRoVHlwZS5KV1QgfSxcbiAgeyB2YWx1ZTogJ0dDRSBEZWZhdWx0IFNlcnZpY2UgQWNjb3VudCcsIGtleTogR29vZ2xlQXV0aFR5cGUuR0NFIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgQUxJR05NRU5UUyA9IFtcbiAge1xuICAgIHRleHQ6ICdkZWx0YScsXG4gICAgdmFsdWU6ICdBTElHTl9ERUxUQScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZLCBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTl0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkNVTVVMQVRJVkUsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3JhdGUnLFxuICAgIHZhbHVlOiAnQUxJR05fUkFURScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuQ1VNVUxBVElWRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnaW50ZXJwb2xhdGUnLFxuICAgIHZhbHVlOiAnQUxJR05fSU5URVJQT0xBVEUnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWV0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICduZXh0IG9sZGVyJyxcbiAgICB2YWx1ZTogJ0FMSUdOX05FWFRfT0xERVInLFxuICAgIHZhbHVlVHlwZXM6IFtcbiAgICAgIFZhbHVlVHlwZXMuSU5UNjQsXG4gICAgICBWYWx1ZVR5cGVzLkRPVUJMRSxcbiAgICAgIFZhbHVlVHlwZXMuTU9ORVksXG4gICAgICBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTixcbiAgICAgIFZhbHVlVHlwZXMuU1RSSU5HLFxuICAgICAgVmFsdWVUeXBlcy5WQUxVRV9UWVBFX1VOU1BFQ0lGSUVELFxuICAgICAgVmFsdWVUeXBlcy5CT09MLFxuICAgIF0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdtaW4nLFxuICAgIHZhbHVlOiAnQUxJR05fTUlOJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVldLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnbWF4JyxcbiAgICB2YWx1ZTogJ0FMSUdOX01BWCcsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ21lYW4nLFxuICAgIHZhbHVlOiAnQUxJR05fTUVBTicsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ2NvdW50JyxcbiAgICB2YWx1ZTogJ0FMSUdOX0NPVU5UJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVksIFZhbHVlVHlwZXMuQk9PTF0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdzdW0nLFxuICAgIHZhbHVlOiAnQUxJR05fU1VNJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVksIFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3N0ZGRldicsXG4gICAgdmFsdWU6ICdBTElHTl9TVERERVYnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWV0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdjb3VudCB0cnVlJyxcbiAgICB2YWx1ZTogJ0FMSUdOX0NPVU5UX1RSVUUnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLkJPT0xdLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnY291bnQgZmFsc2UnLFxuICAgIHZhbHVlOiAnQUxJR05fQ09VTlRfRkFMU0UnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLkJPT0xdLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnZnJhY3Rpb24gdHJ1ZScsXG4gICAgdmFsdWU6ICdBTElHTl9GUkFDVElPTl9UUlVFJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5CT09MXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0VdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3BlcmNlbnRpbGUgOTknLFxuICAgIHZhbHVlOiAnQUxJR05fUEVSQ0VOVElMRV85OScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3BlcmNlbnRpbGUgOTUnLFxuICAgIHZhbHVlOiAnQUxJR05fUEVSQ0VOVElMRV85NScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3BlcmNlbnRpbGUgNTAnLFxuICAgIHZhbHVlOiAnQUxJR05fUEVSQ0VOVElMRV81MCcsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3BlcmNlbnRpbGUgMDUnLFxuICAgIHZhbHVlOiAnQUxJR05fUEVSQ0VOVElMRV8wNScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3BlcmNlbnQgY2hhbmdlJyxcbiAgICB2YWx1ZTogJ0FMSUdOX1BFUkNFTlRfQ0hBTkdFJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVldLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgQUdHUkVHQVRJT05TID0gW1xuICB7XG4gICAgdGV4dDogJ25vbmUnLFxuICAgIHZhbHVlOiAnUkVEVUNFX05PTkUnLFxuICAgIHZhbHVlVHlwZXM6IFtcbiAgICAgIFZhbHVlVHlwZXMuSU5UNjQsXG4gICAgICBWYWx1ZVR5cGVzLkRPVUJMRSxcbiAgICAgIFZhbHVlVHlwZXMuTU9ORVksXG4gICAgICBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTixcbiAgICAgIFZhbHVlVHlwZXMuQk9PTCxcbiAgICAgIFZhbHVlVHlwZXMuU1RSSU5HLFxuICAgIF0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBLCBNZXRyaWNLaW5kLkNVTVVMQVRJVkUsIE1ldHJpY0tpbmQuTUVUUklDX0tJTkRfVU5TUEVDSUZJRURdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ21lYW4nLFxuICAgIHZhbHVlOiAnUkVEVUNFX01FQU4nLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWSwgVmFsdWVUeXBlcy5ESVNUUklCVVRJT05dLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQSwgTWV0cmljS2luZC5DVU1VTEFUSVZFXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdtaW4nLFxuICAgIHZhbHVlOiAnUkVEVUNFX01JTicsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEEsIE1ldHJpY0tpbmQuQ1VNVUxBVElWRSwgTWV0cmljS2luZC5NRVRSSUNfS0lORF9VTlNQRUNJRklFRF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnbWF4JyxcbiAgICB2YWx1ZTogJ1JFRFVDRV9NQVgnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWV0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBLCBNZXRyaWNLaW5kLkNVTVVMQVRJVkUsIE1ldHJpY0tpbmQuTUVUUklDX0tJTkRfVU5TUEVDSUZJRURdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ3N1bScsXG4gICAgdmFsdWU6ICdSRURVQ0VfU1VNJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVksIFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEEsIE1ldHJpY0tpbmQuQ1VNVUxBVElWRSwgTWV0cmljS2luZC5NRVRSSUNfS0lORF9VTlNQRUNJRklFRF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnc3RkLiBkZXYuJyxcbiAgICB2YWx1ZTogJ1JFRFVDRV9TVERERVYnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLklOVDY0LCBWYWx1ZVR5cGVzLkRPVUJMRSwgVmFsdWVUeXBlcy5NT05FWSwgVmFsdWVUeXBlcy5ESVNUUklCVVRJT05dLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQSwgTWV0cmljS2luZC5DVU1VTEFUSVZFLCBNZXRyaWNLaW5kLk1FVFJJQ19LSU5EX1VOU1BFQ0lGSUVEXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6ICdjb3VudCcsXG4gICAgdmFsdWU6ICdSRURVQ0VfQ09VTlQnLFxuICAgIHZhbHVlVHlwZXM6IFtcbiAgICAgIFZhbHVlVHlwZXMuSU5UNjQsXG4gICAgICBWYWx1ZVR5cGVzLkRPVUJMRSxcbiAgICAgIFZhbHVlVHlwZXMuTU9ORVksXG4gICAgICBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTixcbiAgICAgIFZhbHVlVHlwZXMuQk9PTCxcbiAgICAgIFZhbHVlVHlwZXMuU1RSSU5HLFxuICAgIF0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBLCBNZXRyaWNLaW5kLkNVTVVMQVRJVkVdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJ2NvdW50IHRydWUnLFxuICAgIHZhbHVlOiAnUkVEVUNFX0NPVU5UX1RSVUUnLFxuICAgIHZhbHVlVHlwZXM6IFtWYWx1ZVR5cGVzLkJPT0xdLFxuICAgIG1ldHJpY0tpbmRzOiBbTWV0cmljS2luZC5HQVVHRSwgTWV0cmljS2luZC5ERUxUQV0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiAnY291bnQgZmFsc2UnLFxuICAgIHZhbHVlOiAnUkVEVUNFX0NPVU5UX0ZBTFNFJyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5CT09MXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEFdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJzk5dGggcGVyY2VudGlsZScsXG4gICAgdmFsdWU6ICdSRURVQ0VfUEVSQ0VOVElMRV85OScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZLCBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTl0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBLCBNZXRyaWNLaW5kLkNVTVVMQVRJVkVdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJzk1dGggcGVyY2VudGlsZScsXG4gICAgdmFsdWU6ICdSRURVQ0VfUEVSQ0VOVElMRV85NScsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZLCBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTl0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBLCBNZXRyaWNLaW5kLkNVTVVMQVRJVkVdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJzUwdGggcGVyY2VudGlsZScsXG4gICAgdmFsdWU6ICdSRURVQ0VfUEVSQ0VOVElMRV81MCcsXG4gICAgdmFsdWVUeXBlczogW1ZhbHVlVHlwZXMuSU5UNjQsIFZhbHVlVHlwZXMuRE9VQkxFLCBWYWx1ZVR5cGVzLk1PTkVZLCBWYWx1ZVR5cGVzLkRJU1RSSUJVVElPTl0sXG4gICAgbWV0cmljS2luZHM6IFtNZXRyaWNLaW5kLkdBVUdFLCBNZXRyaWNLaW5kLkRFTFRBLCBNZXRyaWNLaW5kLkNVTVVMQVRJVkVdLFxuICB9LFxuICB7XG4gICAgdGV4dDogJzV0aCBwZXJjZW50aWxlJyxcbiAgICB2YWx1ZTogJ1JFRFVDRV9QRVJDRU5USUxFXzA1JyxcbiAgICB2YWx1ZVR5cGVzOiBbVmFsdWVUeXBlcy5JTlQ2NCwgVmFsdWVUeXBlcy5ET1VCTEUsIFZhbHVlVHlwZXMuTU9ORVksIFZhbHVlVHlwZXMuRElTVFJJQlVUSU9OXSxcbiAgICBtZXRyaWNLaW5kczogW01ldHJpY0tpbmQuR0FVR0UsIE1ldHJpY0tpbmQuREVMVEEsIE1ldHJpY0tpbmQuQ1VNVUxBVElWRV0sXG4gIH0sXG5dO1xuXG5leHBvcnQgdHlwZSBwZXJpb2RPcHRpb24gPSB7XG4gIHRleHQ6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgaGlkZGVuPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBBTElHTk1FTlRfUEVSSU9EUzogcGVyaW9kT3B0aW9uW10gPSBbXG4gIHsgdGV4dDogJ2dyYWZhbmEgYXV0bycsIHZhbHVlOiAnZ3JhZmFuYS1hdXRvJyB9LFxuICB7IHRleHQ6ICdzdGFja2RyaXZlciBhdXRvJywgdmFsdWU6ICdzdGFja2RyaXZlci1hdXRvJywgaGlkZGVuOiB0cnVlIH0sXG4gIHsgdGV4dDogJ2Nsb3VkIG1vbml0b3JpbmcgYXV0bycsIHZhbHVlOiAnY2xvdWQtbW9uaXRvcmluZy1hdXRvJyB9LFxuICB7IHRleHQ6ICcxbScsIHZhbHVlOiAnKzYwcycgfSxcbiAgeyB0ZXh0OiAnMm0nLCB2YWx1ZTogJysxMjBzJyB9LFxuICB7IHRleHQ6ICc1bScsIHZhbHVlOiAnKzMwMHMnIH0sXG4gIHsgdGV4dDogJzEwbScsIHZhbHVlOiAnKzYwMHMnIH0sXG4gIHsgdGV4dDogJzMwbScsIHZhbHVlOiAnKzE4MDBzJyB9LFxuICB7IHRleHQ6ICcxaCcsIHZhbHVlOiAnKzM2MDBzJyB9LFxuICB7IHRleHQ6ICczaCcsIHZhbHVlOiAnKzcyMDBzJyB9LFxuICB7IHRleHQ6ICc2aCcsIHZhbHVlOiAnKzIxNjAwcycgfSxcbiAgeyB0ZXh0OiAnMWQnLCB2YWx1ZTogJys4NjQwMHMnIH0sXG4gIHsgdGV4dDogJzNkJywgdmFsdWU6ICcrMjU5MjAwcycgfSxcbiAgeyB0ZXh0OiAnMXcnLCB2YWx1ZTogJys2MDQ4MDBzJyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEdSQVBIX1BFUklPRFM6IHBlcmlvZE9wdGlvbltdID0gW1xuICB7IHRleHQ6ICdhdXRvJywgdmFsdWU6ICdhdXRvJyB9LFxuICB7IHRleHQ6ICcxbScsIHZhbHVlOiAnMW0nIH0sXG4gIHsgdGV4dDogJzJtJywgdmFsdWU6ICcybScgfSxcbiAgeyB0ZXh0OiAnNW0nLCB2YWx1ZTogJzVtJyB9LFxuICB7IHRleHQ6ICcxMG0nLCB2YWx1ZTogJzEwbScgfSxcbiAgeyB0ZXh0OiAnMzBtJywgdmFsdWU6ICczMG0nIH0sXG4gIHsgdGV4dDogJzFoJywgdmFsdWU6ICcxaCcgfSxcbiAgeyB0ZXh0OiAnM2gnLCB2YWx1ZTogJzNoJyB9LFxuICB7IHRleHQ6ICc2aCcsIHZhbHVlOiAnNmgnIH0sXG4gIHsgdGV4dDogJzFkJywgdmFsdWU6ICcxZCcgfSxcbiAgeyB0ZXh0OiAnM2QnLCB2YWx1ZTogJzNkJyB9LFxuICB7IHRleHQ6ICcxdycsIHZhbHVlOiAnMXcnIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgU1lTVEVNX0xBQkVMUyA9IFtcbiAgJ21ldGFkYXRhLnN5c3RlbV9sYWJlbHMuY2xvdWRfYWNjb3VudCcsXG4gICdtZXRhZGF0YS5zeXN0ZW1fbGFiZWxzLm5hbWUnLFxuICAnbWV0YWRhdGEuc3lzdGVtX2xhYmVscy5yZWdpb24nLFxuICAnbWV0YWRhdGEuc3lzdGVtX2xhYmVscy5zdGF0ZScsXG4gICdtZXRhZGF0YS5zeXN0ZW1fbGFiZWxzLmluc3RhbmNlX2dyb3VwJyxcbiAgJ21ldGFkYXRhLnN5c3RlbV9sYWJlbHMubm9kZV9uYW1lJyxcbiAgJ21ldGFkYXRhLnN5c3RlbV9sYWJlbHMuc2VydmljZV9uYW1lJyxcbiAgJ21ldGFkYXRhLnN5c3RlbV9sYWJlbHMudG9wX2xldmVsX2NvbnRyb2xsZXJfdHlwZScsXG4gICdtZXRhZGF0YS5zeXN0ZW1fbGFiZWxzLnRvcF9sZXZlbF9jb250cm9sbGVyX25hbWUnLFxuICAnbWV0YWRhdGEuc3lzdGVtX2xhYmVscy5jb250YWluZXJfaW1hZ2UnLFxuXTtcblxuZXhwb3J0IGNvbnN0IFNFTEVDVE9SUyA9IFtcbiAgeyBsYWJlbDogJ1NMSSBWYWx1ZScsIHZhbHVlOiAnc2VsZWN0X3Nsb19oZWFsdGgnIH0sXG4gIHsgbGFiZWw6ICdTTE8gQ29tcGxpYW5jZScsIHZhbHVlOiAnc2VsZWN0X3Nsb19jb21wbGlhbmNlJyB9LFxuICB7IGxhYmVsOiAnU0xPIEVycm9yIEJ1ZGdldCBSZW1haW5pbmcnLCB2YWx1ZTogJ3NlbGVjdF9zbG9fYnVkZ2V0X2ZyYWN0aW9uJyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFFVRVJZX1RZUEVTID0gW1xuICB7IGxhYmVsOiAnTWV0cmljcycsIHZhbHVlOiBRdWVyeVR5cGUuTUVUUklDUyB9LFxuICB7IGxhYmVsOiAnU2VydmljZSBMZXZlbCBPYmplY3RpdmVzIChTTE8pJywgdmFsdWU6IFF1ZXJ5VHlwZS5TTE8gfSxcbl07XG4iLCJpbXBvcnQgeyBjaHVuaywgZmxhdHRlbiwgaXNTdHJpbmcsIGlzQXJyYXkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgZnJvbSwgbGFzdFZhbHVlRnJvbSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIERhdGFRdWVyeVJlcXVlc3QsXG4gIERhdGFRdWVyeVJlc3BvbnNlLFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgU2NvcGVkVmFycyxcbiAgU2VsZWN0YWJsZVZhbHVlLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VXaXRoQmFja2VuZCwgZ2V0QmFja2VuZFNydiwgdG9EYXRhUXVlcnlSZXNwb25zZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgZ2V0VGltZVNydiwgVGltZVNydiB9IGZyb20gJ2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvc2VydmljZXMvVGltZVNydic7XG5pbXBvcnQgeyBnZXRUZW1wbGF0ZVNydiwgVGVtcGxhdGVTcnYgfSBmcm9tICdhcHAvZmVhdHVyZXMvdGVtcGxhdGluZy90ZW1wbGF0ZV9zcnYnO1xuXG5pbXBvcnQge1xuICBDbG91ZE1vbml0b3JpbmdPcHRpb25zLFxuICBDbG91ZE1vbml0b3JpbmdRdWVyeSxcbiAgRWRpdG9yTW9kZSxcbiAgRmlsdGVyLFxuICBNZXRyaWNEZXNjcmlwdG9yLFxuICBRdWVyeVR5cGUsXG4gIFBvc3RSZXNwb25zZSxcbiAgQWdncmVnYXRpb24sXG59IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVTdXBwb3J0IH0gZnJvbSAnLi92YXJpYWJsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZVdpdGhCYWNrZW5kPFxuICBDbG91ZE1vbml0b3JpbmdRdWVyeSxcbiAgQ2xvdWRNb25pdG9yaW5nT3B0aW9uc1xuPiB7XG4gIGF1dGhlbnRpY2F0aW9uVHlwZTogc3RyaW5nO1xuICBpbnRlcnZhbE1zOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbnN0YW5jZVNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5nczxDbG91ZE1vbml0b3JpbmdPcHRpb25zPixcbiAgICBwdWJsaWMgdGVtcGxhdGVTcnY6IFRlbXBsYXRlU3J2ID0gZ2V0VGVtcGxhdGVTcnYoKSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRpbWVTcnY6IFRpbWVTcnYgPSBnZXRUaW1lU3J2KClcbiAgKSB7XG4gICAgc3VwZXIoaW5zdGFuY2VTZXR0aW5ncyk7XG4gICAgdGhpcy5hdXRoZW50aWNhdGlvblR5cGUgPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLmF1dGhlbnRpY2F0aW9uVHlwZSB8fCAnand0JztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IG5ldyBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVN1cHBvcnQodGhpcyk7XG4gICAgdGhpcy5pbnRlcnZhbE1zID0gMDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZVNydi5nZXRWYXJpYWJsZXMoKS5tYXAoKHYpID0+IGAkJHt2Lm5hbWV9YCk7XG4gIH1cblxuICBxdWVyeShyZXF1ZXN0OiBEYXRhUXVlcnlSZXF1ZXN0PENsb3VkTW9uaXRvcmluZ1F1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICByZXF1ZXN0LnRhcmdldHMgPSByZXF1ZXN0LnRhcmdldHMubWFwKCh0KSA9PiAoe1xuICAgICAgLi4udGhpcy5taWdyYXRlUXVlcnkodCksXG4gICAgICBpbnRlcnZhbE1zOiByZXF1ZXN0LmludGVydmFsTXMsXG4gICAgfSkpO1xuICAgIHJldHVybiBzdXBlci5xdWVyeShyZXF1ZXN0KTtcbiAgfVxuXG4gIGFzeW5jIGFubm90YXRpb25RdWVyeShvcHRpb25zOiBhbnkpIHtcbiAgICBhd2FpdCB0aGlzLmVuc3VyZUdDRURlZmF1bHRQcm9qZWN0KCk7XG4gICAgY29uc3QgYW5ub3RhdGlvbiA9IG9wdGlvbnMuYW5ub3RhdGlvbjtcbiAgICBjb25zdCBxdWVyaWVzID0gW1xuICAgICAge1xuICAgICAgICByZWZJZDogJ2Fubm90YXRpb25RdWVyeScsXG4gICAgICAgIHR5cGU6ICdhbm5vdGF0aW9uUXVlcnknLFxuICAgICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgICB2aWV3OiAnRlVMTCcsXG4gICAgICAgIGNyb3NzU2VyaWVzUmVkdWNlcjogJ1JFRFVDRV9OT05FJyxcbiAgICAgICAgcGVyU2VyaWVzQWxpZ25lcjogJ0FMSUdOX05PTkUnLFxuICAgICAgICBtZXRyaWNUeXBlOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoYW5ub3RhdGlvbi50YXJnZXQubWV0cmljVHlwZSwgb3B0aW9ucy5zY29wZWRWYXJzIHx8IHt9KSxcbiAgICAgICAgdGl0bGU6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShhbm5vdGF0aW9uLnRhcmdldC50aXRsZSwgb3B0aW9ucy5zY29wZWRWYXJzIHx8IHt9KSxcbiAgICAgICAgdGV4dDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKGFubm90YXRpb24udGFyZ2V0LnRleHQsIG9wdGlvbnMuc2NvcGVkVmFycyB8fCB7fSksXG4gICAgICAgIHByb2plY3ROYW1lOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoXG4gICAgICAgICAgYW5ub3RhdGlvbi50YXJnZXQucHJvamVjdE5hbWUgPyBhbm5vdGF0aW9uLnRhcmdldC5wcm9qZWN0TmFtZSA6IHRoaXMuZ2V0RGVmYXVsdFByb2plY3QoKSxcbiAgICAgICAgICBvcHRpb25zLnNjb3BlZFZhcnMgfHwge31cbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyczogdGhpcy5pbnRlcnBvbGF0ZUZpbHRlcnMoYW5ub3RhdGlvbi50YXJnZXQuZmlsdGVycyB8fCBbXSwgb3B0aW9ucy5zY29wZWRWYXJzKSxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgZ2V0QmFja2VuZFNydigpXG4gICAgICAgIC5mZXRjaDxQb3N0UmVzcG9uc2U+KHtcbiAgICAgICAgICB1cmw6ICcvYXBpL2RzL3F1ZXJ5JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBmcm9tOiBvcHRpb25zLnJhbmdlLmZyb20udmFsdWVPZigpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB0bzogb3B0aW9ucy5yYW5nZS50by52YWx1ZU9mKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHF1ZXJpZXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YVF1ZXJ5UmVzcG9uc2UgPSB0b0RhdGFRdWVyeVJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGY6IGFueSA9IFtdO1xuICAgICAgICAgICAgaWYgKGRhdGFRdWVyeVJlc3BvbnNlLmRhdGEubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVF1ZXJ5UmVzcG9uc2UuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YVF1ZXJ5UmVzcG9uc2UuZGF0YVtpXS5maWVsZHNbMF0udmFsdWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICBkZi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbjogYW5ub3RhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdGltZTogRGF0ZS5wYXJzZShkYXRhUXVlcnlSZXNwb25zZS5kYXRhW2ldLmZpZWxkc1swXS52YWx1ZXMuZ2V0KGopKSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRhdGFRdWVyeVJlc3BvbnNlLmRhdGFbaV0uZmllbGRzWzFdLnZhbHVlcy5nZXQoaiksXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M6IFtdLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBkYXRhUXVlcnlSZXNwb25zZS5kYXRhW2ldLmZpZWxkc1szXS52YWx1ZXMuZ2V0KGopLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGY7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICk7XG4gIH1cblxuICBhcHBseVRlbXBsYXRlVmFyaWFibGVzKFxuICAgIHsgbWV0cmljUXVlcnksIHJlZklkLCBxdWVyeVR5cGUsIHNsb1F1ZXJ5IH06IENsb3VkTW9uaXRvcmluZ1F1ZXJ5LFxuICAgIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnNcbiAgKTogUmVjb3JkPHN0cmluZywgYW55PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGFzb3VyY2U6IHRoaXMuZ2V0UmVmKCksXG4gICAgICByZWZJZCxcbiAgICAgIGludGVydmFsTXM6IHRoaXMuaW50ZXJ2YWxNcyxcbiAgICAgIHR5cGU6ICd0aW1lU2VyaWVzUXVlcnknLFxuICAgICAgcXVlcnlUeXBlLFxuICAgICAgbWV0cmljUXVlcnk6IHtcbiAgICAgICAgLi4udGhpcy5pbnRlcnBvbGF0ZVByb3BzKG1ldHJpY1F1ZXJ5LCBzY29wZWRWYXJzKSxcbiAgICAgICAgcHJvamVjdE5hbWU6IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZShcbiAgICAgICAgICBtZXRyaWNRdWVyeS5wcm9qZWN0TmFtZSA/IG1ldHJpY1F1ZXJ5LnByb2plY3ROYW1lIDogdGhpcy5nZXREZWZhdWx0UHJvamVjdCgpLFxuICAgICAgICAgIHNjb3BlZFZhcnNcbiAgICAgICAgKSxcbiAgICAgICAgZmlsdGVyczogdGhpcy5pbnRlcnBvbGF0ZUZpbHRlcnMobWV0cmljUXVlcnkuZmlsdGVycyB8fCBbXSwgc2NvcGVkVmFycyksXG4gICAgICAgIGdyb3VwQnlzOiB0aGlzLmludGVycG9sYXRlR3JvdXBCeXMobWV0cmljUXVlcnkuZ3JvdXBCeXMgfHwgW10sIHNjb3BlZFZhcnMpLFxuICAgICAgICB2aWV3OiBtZXRyaWNRdWVyeS52aWV3IHx8ICdGVUxMJyxcbiAgICAgICAgZWRpdG9yTW9kZTogbWV0cmljUXVlcnkuZWRpdG9yTW9kZSxcbiAgICAgIH0sXG4gICAgICBzbG9RdWVyeTogc2xvUXVlcnkgJiYgdGhpcy5pbnRlcnBvbGF0ZVByb3BzKHNsb1F1ZXJ5LCBzY29wZWRWYXJzKSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgZ2V0TGFiZWxzKG1ldHJpY1R5cGU6IHN0cmluZywgcmVmSWQ6IHN0cmluZywgcHJvamVjdE5hbWU6IHN0cmluZywgYWdncmVnYXRpb24/OiBBZ2dyZWdhdGlvbikge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB0YXJnZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICByZWZJZCxcbiAgICAgICAgICBkYXRhc291cmNlOiB0aGlzLmdldFJlZigpLFxuICAgICAgICAgIHF1ZXJ5VHlwZTogUXVlcnlUeXBlLk1FVFJJQ1MsXG4gICAgICAgICAgbWV0cmljUXVlcnk6IHtcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocHJvamVjdE5hbWUpLFxuICAgICAgICAgICAgbWV0cmljVHlwZTogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKG1ldHJpY1R5cGUpLFxuICAgICAgICAgICAgZ3JvdXBCeXM6IHRoaXMuaW50ZXJwb2xhdGVHcm91cEJ5cyhhZ2dyZWdhdGlvbj8uZ3JvdXBCeXMgfHwgW10sIHt9KSxcbiAgICAgICAgICAgIGNyb3NzU2VyaWVzUmVkdWNlcjogYWdncmVnYXRpb24/LmNyb3NzU2VyaWVzUmVkdWNlciA/PyAnUkVEVUNFX05PTkUnLFxuICAgICAgICAgICAgdmlldzogJ0hFQURFUlMnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcmFuZ2U6IHRoaXMudGltZVNydi50aW1lUmFuZ2UoKSxcbiAgICB9IGFzIERhdGFRdWVyeVJlcXVlc3Q8Q2xvdWRNb25pdG9yaW5nUXVlcnk+O1xuXG4gICAgY29uc3QgcXVlcmllcyA9IG9wdGlvbnMudGFyZ2V0cztcblxuICAgIGlmICghcXVlcmllcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKG9mKHsgcmVzdWx0czogW10gfSkpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKFxuICAgICAgZnJvbSh0aGlzLmVuc3VyZUdDRURlZmF1bHRQcm9qZWN0KCkpLnBpcGUoXG4gICAgICAgIG1lcmdlTWFwKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gZ2V0QmFja2VuZFNydigpLmZldGNoPFBvc3RSZXNwb25zZT4oe1xuICAgICAgICAgICAgdXJsOiAnL2FwaS9kcy9xdWVyeScsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgZnJvbTogb3B0aW9ucy5yYW5nZS5mcm9tLnZhbHVlT2YoKS50b1N0cmluZygpLFxuICAgICAgICAgICAgICB0bzogb3B0aW9ucy5yYW5nZS50by52YWx1ZU9mKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgcXVlcmllcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICBtYXAoKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YVF1ZXJ5UmVzcG9uc2UgPSB0b0RhdGFRdWVyeVJlc3BvbnNlKHtcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgbGFiZWxzID0gZGF0YVF1ZXJ5UmVzcG9uc2U/LmRhdGFcbiAgICAgICAgICAgIC5tYXAoKGYpID0+IGYubWV0YT8uY3VzdG9tPy5sYWJlbHMpXG4gICAgICAgICAgICAuZmlsdGVyKChwKSA9PiAhIXApXG4gICAgICAgICAgICAucmVkdWNlKChhY2MsIGxhYmVscykgPT4ge1xuICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gbGFiZWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY2Nba2V5XSkge1xuICAgICAgICAgICAgICAgICAgYWNjW2tleV0gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGxhYmVsc1trZXldKSB7XG4gICAgICAgICAgICAgICAgICBhY2Nba2V5XS5hZGQobGFiZWxzW2tleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhsYWJlbHMpLm1hcCgobDogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGxbMV0gPSBBcnJheS5mcm9tKGxbMV0pO1xuICAgICAgICAgICAgICByZXR1cm4gbDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgZ2V0R0NFRGVmYXVsdFByb2plY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVzb3VyY2UoYGdjZURlZmF1bHRQcm9qZWN0YCk7XG4gIH1cblxuICBnZXREZWZhdWx0UHJvamVjdCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgZGVmYXVsdFByb2plY3QsIGF1dGhlbnRpY2F0aW9uVHlwZSwgZ2NlRGVmYXVsdFByb2plY3QgfSA9IHRoaXMuaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YTtcbiAgICBpZiAoYXV0aGVudGljYXRpb25UeXBlID09PSAnZ2NlJykge1xuICAgICAgcmV0dXJuIGdjZURlZmF1bHRQcm9qZWN0IHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0UHJvamVjdCB8fCAnJztcbiAgfVxuXG4gIGFzeW5jIGVuc3VyZUdDRURlZmF1bHRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHsgYXV0aGVudGljYXRpb25UeXBlLCBnY2VEZWZhdWx0UHJvamVjdCB9ID0gdGhpcy5pbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhO1xuICAgIGlmIChhdXRoZW50aWNhdGlvblR5cGUgPT09ICdnY2UnICYmICFnY2VEZWZhdWx0UHJvamVjdCkge1xuICAgICAgdGhpcy5pbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLmdjZURlZmF1bHRQcm9qZWN0ID0gYXdhaXQgdGhpcy5nZXRHQ0VEZWZhdWx0UHJvamVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldE1ldHJpY1R5cGVzKHByb2plY3ROYW1lOiBzdHJpbmcpOiBQcm9taXNlPE1ldHJpY0Rlc2NyaXB0b3JbXT4ge1xuICAgIGlmICghcHJvamVjdE5hbWUpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZShcbiAgICAgIGBtZXRyaWNEZXNjcmlwdG9ycy92My9wcm9qZWN0cy8ke3RoaXMudGVtcGxhdGVTcnYucmVwbGFjZShwcm9qZWN0TmFtZSl9L21ldHJpY0Rlc2NyaXB0b3JzYFxuICAgICkgYXMgUHJvbWlzZTxNZXRyaWNEZXNjcmlwdG9yW10+O1xuICB9XG5cbiAgYXN5bmMgZ2V0U0xPU2VydmljZXMocHJvamVjdE5hbWU6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVzb3VyY2UoYHNlcnZpY2VzL3YzL3Byb2plY3RzLyR7dGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHByb2plY3ROYW1lKX0vc2VydmljZXM/cGFnZVNpemU9MTAwMGApO1xuICB9XG5cbiAgYXN5bmMgZ2V0U2VydmljZUxldmVsT2JqZWN0aXZlcyhwcm9qZWN0TmFtZTogc3RyaW5nLCBzZXJ2aWNlSWQ6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+PiB7XG4gICAgaWYgKCFzZXJ2aWNlSWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgIH1cbiAgICBsZXQgeyBwcm9qZWN0TmFtZTogcCwgc2VydmljZUlkOiBzIH0gPSB0aGlzLmludGVycG9sYXRlUHJvcHMoeyBwcm9qZWN0TmFtZSwgc2VydmljZUlkIH0pO1xuICAgIHJldHVybiB0aGlzLmdldFJlc291cmNlKGBzbG8tc2VydmljZXMvdjMvcHJvamVjdHMvJHtwfS9zZXJ2aWNlcy8ke3N9L3NlcnZpY2VMZXZlbE9iamVjdGl2ZXNgKTtcbiAgfVxuXG4gIGdldFByb2plY3RzKCk6IFByb21pc2U8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UmVzb3VyY2UoYHByb2plY3RzYCk7XG4gIH1cblxuICBtaWdyYXRlUXVlcnkocXVlcnk6IENsb3VkTW9uaXRvcmluZ1F1ZXJ5KTogQ2xvdWRNb25pdG9yaW5nUXVlcnkge1xuICAgIGlmICghcXVlcnkuaGFzT3duUHJvcGVydHkoJ21ldHJpY1F1ZXJ5JykpIHtcbiAgICAgIGNvbnN0IHsgaGlkZSwgcmVmSWQsIGRhdGFzb3VyY2UsIGtleSwgcXVlcnlUeXBlLCBtYXhMaW5lcywgbWV0cmljLCBpbnRlcnZhbE1zLCB0eXBlLCAuLi5yZXN0IH0gPSBxdWVyeSBhcyBhbnk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZWZJZCxcbiAgICAgICAgaW50ZXJ2YWxNcyxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgaGlkZSxcbiAgICAgICAgcXVlcnlUeXBlOiBRdWVyeVR5cGUuTUVUUklDUyxcbiAgICAgICAgbWV0cmljUXVlcnk6IHtcbiAgICAgICAgICAuLi5yZXN0LFxuICAgICAgICAgIHZpZXc6IHJlc3QudmlldyB8fCAnRlVMTCcsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBpbnRlcnBvbGF0ZVByb3BzPFQgZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCBhbnk+PihvYmplY3Q6IFQsIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnMgPSB7fSk6IFQge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhvYmplY3QpLnJlZHVjZSgoYWNjLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgW2tleV06IHZhbHVlICYmIGlzU3RyaW5nKHZhbHVlKSA/IHRoaXMudGVtcGxhdGVTcnYucmVwbGFjZSh2YWx1ZSwgc2NvcGVkVmFycykgOiB2YWx1ZSxcbiAgICAgIH07XG4gICAgfSwge30gYXMgVCk7XG4gIH1cblxuICBmaWx0ZXJRdWVyeShxdWVyeTogQ2xvdWRNb25pdG9yaW5nUXVlcnkpOiBib29sZWFuIHtcbiAgICBpZiAocXVlcnkuaGlkZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChxdWVyeS5xdWVyeVR5cGUgJiYgcXVlcnkucXVlcnlUeXBlID09PSBRdWVyeVR5cGUuU0xPICYmIHF1ZXJ5LnNsb1F1ZXJ5KSB7XG4gICAgICBjb25zdCB7IHNlbGVjdG9yTmFtZSwgc2VydmljZUlkLCBzbG9JZCwgcHJvamVjdE5hbWUgfSA9IHF1ZXJ5LnNsb1F1ZXJ5O1xuICAgICAgcmV0dXJuICEhc2VsZWN0b3JOYW1lICYmICEhc2VydmljZUlkICYmICEhc2xvSWQgJiYgISFwcm9qZWN0TmFtZTtcbiAgICB9XG5cbiAgICBpZiAocXVlcnkucXVlcnlUeXBlICYmIHF1ZXJ5LnF1ZXJ5VHlwZSA9PT0gUXVlcnlUeXBlLk1FVFJJQ1MgJiYgcXVlcnkubWV0cmljUXVlcnkuZWRpdG9yTW9kZSA9PT0gRWRpdG9yTW9kZS5NUUwpIHtcbiAgICAgIHJldHVybiAhIXF1ZXJ5Lm1ldHJpY1F1ZXJ5LnByb2plY3ROYW1lICYmICEhcXVlcnkubWV0cmljUXVlcnkucXVlcnk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBtZXRyaWNUeXBlIH0gPSBxdWVyeS5tZXRyaWNRdWVyeTtcblxuICAgIHJldHVybiAhIW1ldHJpY1R5cGU7XG4gIH1cblxuICBpbnRlcnBvbGF0ZVZhcmlhYmxlc0luUXVlcmllcyhxdWVyaWVzOiBDbG91ZE1vbml0b3JpbmdRdWVyeVtdLCBzY29wZWRWYXJzOiBTY29wZWRWYXJzKTogQ2xvdWRNb25pdG9yaW5nUXVlcnlbXSB7XG4gICAgcmV0dXJuIHF1ZXJpZXMubWFwKFxuICAgICAgKHF1ZXJ5KSA9PiB0aGlzLmFwcGx5VGVtcGxhdGVWYXJpYWJsZXModGhpcy5taWdyYXRlUXVlcnkocXVlcnkpLCBzY29wZWRWYXJzKSBhcyBDbG91ZE1vbml0b3JpbmdRdWVyeVxuICAgICk7XG4gIH1cblxuICBpbnRlcnBvbGF0ZUZpbHRlcnMoZmlsdGVyczogc3RyaW5nW10sIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnMpIHtcbiAgICBjb25zdCBjb21wbGV0ZUZpbHRlcjogRmlsdGVyW10gPSBjaHVuayhmaWx0ZXJzLCA0KVxuICAgICAgLm1hcCgoW2tleSwgb3BlcmF0b3IsIHZhbHVlLCBjb25kaXRpb25dKSA9PiAoe1xuICAgICAgICBrZXksXG4gICAgICAgIG9wZXJhdG9yLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgLi4uKGNvbmRpdGlvbiAmJiB7IGNvbmRpdGlvbiB9KSxcbiAgICAgIH0pKVxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS52YWx1ZSk7XG5cbiAgICBjb25zdCBmaWx0ZXJBcnJheSA9IGZsYXR0ZW4oXG4gICAgICBjb21wbGV0ZUZpbHRlci5tYXAoKHsga2V5LCBvcGVyYXRvciwgdmFsdWUsIGNvbmRpdGlvbiB9OiBGaWx0ZXIpID0+IFtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKGtleSwgc2NvcGVkVmFycyB8fCB7fSksXG4gICAgICAgIG9wZXJhdG9yLFxuICAgICAgICB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodmFsdWUsIHNjb3BlZFZhcnMgfHwge30sICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcbiAgICAgICAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID8gYCgke3ZhbHVlLmpvaW4oJ3wnKX0pYCA6IHZhbHVlO1xuICAgICAgICB9KSxcbiAgICAgICAgLi4uKGNvbmRpdGlvbiA/IFtjb25kaXRpb25dIDogW10pLFxuICAgICAgXSlcbiAgICApO1xuXG4gICAgcmV0dXJuIGZpbHRlckFycmF5IHx8IFtdO1xuICB9XG5cbiAgaW50ZXJwb2xhdGVHcm91cEJ5cyhncm91cEJ5czogc3RyaW5nW10sIHNjb3BlZFZhcnM6IHt9KTogc3RyaW5nW10ge1xuICAgIGxldCBpbnRlcnBvbGF0ZWRHcm91cEJ5czogc3RyaW5nW10gPSBbXTtcbiAgICAoZ3JvdXBCeXMgfHwgW10pLmZvckVhY2goKGdiKSA9PiB7XG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWQgPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UoZ2IsIHNjb3BlZFZhcnMgfHwge30sICdjc3YnKS5zcGxpdCgnLCcpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW50ZXJwb2xhdGVkKSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRHcm91cEJ5cyA9IGludGVycG9sYXRlZEdyb3VwQnlzLmNvbmNhdChpbnRlcnBvbGF0ZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkR3JvdXBCeXMucHVzaChpbnRlcnBvbGF0ZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpbnRlcnBvbGF0ZWRHcm91cEJ5cztcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2h1bmssIGluaXRpYWwsIHN0YXJ0Q2FzZSwgdW5pcUJ5IH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgZ2V0VGVtcGxhdGVTcnYsIFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmltcG9ydCB7IEFHR1JFR0FUSU9OUywgQUxJR05NRU5UUywgU1lTVEVNX0xBQkVMUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBBbGlnbm1lbnRUeXBlcywgTWV0cmljRGVzY3JpcHRvciwgTWV0cmljS2luZCwgUHJlcHJvY2Vzc29yVHlwZSwgVmFsdWVUeXBlcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnYgPSBnZXRUZW1wbGF0ZVNydigpO1xuXG5leHBvcnQgY29uc3QgZXh0cmFjdFNlcnZpY2VzRnJvbU1ldHJpY0Rlc2NyaXB0b3JzID0gKG1ldHJpY0Rlc2NyaXB0b3JzOiBNZXRyaWNEZXNjcmlwdG9yW10pID0+XG4gIHVuaXFCeShtZXRyaWNEZXNjcmlwdG9ycywgJ3NlcnZpY2UnKTtcblxuZXhwb3J0IGNvbnN0IGdldE1ldHJpY1R5cGVzQnlTZXJ2aWNlID0gKG1ldHJpY0Rlc2NyaXB0b3JzOiBNZXRyaWNEZXNjcmlwdG9yW10sIHNlcnZpY2U6IHN0cmluZykgPT5cbiAgbWV0cmljRGVzY3JpcHRvcnMuZmlsdGVyKChtOiBNZXRyaWNEZXNjcmlwdG9yKSA9PiBtLnNlcnZpY2UgPT09IHNlcnZpY2UpO1xuXG5leHBvcnQgY29uc3QgZ2V0TWV0cmljVHlwZXMgPSAoXG4gIG1ldHJpY0Rlc2NyaXB0b3JzOiBNZXRyaWNEZXNjcmlwdG9yW10sXG4gIG1ldHJpY1R5cGU6IHN0cmluZyxcbiAgaW50ZXJwb2xhdGVkTWV0cmljVHlwZTogc3RyaW5nLFxuICBzZWxlY3RlZFNlcnZpY2U6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IG1ldHJpY1R5cGVzID0gZ2V0TWV0cmljVHlwZXNCeVNlcnZpY2UobWV0cmljRGVzY3JpcHRvcnMsIHNlbGVjdGVkU2VydmljZSkubWFwKChtKSA9PiAoe1xuICAgIHZhbHVlOiBtLnR5cGUsXG4gICAgbmFtZTogbS5kaXNwbGF5TmFtZSxcbiAgfSkpO1xuICBjb25zdCBtZXRyaWNUeXBlRXhpc3RJbkFycmF5ID0gbWV0cmljVHlwZXMuc29tZShcbiAgICAobTogeyB2YWx1ZTogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfSkgPT4gbS52YWx1ZSA9PT0gaW50ZXJwb2xhdGVkTWV0cmljVHlwZVxuICApO1xuICBjb25zdCBtZXRyaWNUeXBlQnlTZXJ2aWNlID0gbWV0cmljVHlwZXMubGVuZ3RoID8gbWV0cmljVHlwZXNbMF0udmFsdWUgOiAnJztcbiAgY29uc3Qgc2VsZWN0ZWRNZXRyaWNUeXBlID0gbWV0cmljVHlwZUV4aXN0SW5BcnJheSA/IG1ldHJpY1R5cGUgOiBtZXRyaWNUeXBlQnlTZXJ2aWNlO1xuICByZXR1cm4ge1xuICAgIG1ldHJpY1R5cGVzLFxuICAgIHNlbGVjdGVkTWV0cmljVHlwZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBbGlnbm1lbnRPcHRpb25zQnlNZXRyaWMgPSAoXG4gIG1ldHJpY1ZhbHVlVHlwZTogc3RyaW5nLFxuICBtZXRyaWNLaW5kOiBzdHJpbmcsXG4gIHByZXByb2Nlc3Nvcj86IFByZXByb2Nlc3NvclR5cGVcbikgPT4ge1xuICBpZiAocHJlcHJvY2Vzc29yICYmIHByZXByb2Nlc3NvciA9PT0gUHJlcHJvY2Vzc29yVHlwZS5SYXRlKSB7XG4gICAgbWV0cmljS2luZCA9IE1ldHJpY0tpbmQuR0FVR0U7XG4gIH1cblxuICByZXR1cm4gIW1ldHJpY1ZhbHVlVHlwZVxuICAgID8gW11cbiAgICA6IEFMSUdOTUVOVFMuZmlsdGVyKChpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgaS52YWx1ZVR5cGVzLmluZGV4T2YobWV0cmljVmFsdWVUeXBlIGFzIFZhbHVlVHlwZXMpICE9PSAtMSAmJlxuICAgICAgICAgIGkubWV0cmljS2luZHMuaW5kZXhPZihtZXRyaWNLaW5kIGFzIE1ldHJpY0tpbmQpICE9PSAtMVxuICAgICAgICApO1xuICAgICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWdncmVnYXRpb25PcHRpb25zQnlNZXRyaWMgPSAodmFsdWVUeXBlOiBWYWx1ZVR5cGVzLCBtZXRyaWNLaW5kOiBNZXRyaWNLaW5kKSA9PiB7XG4gIHJldHVybiAhbWV0cmljS2luZFxuICAgID8gW11cbiAgICA6IEFHR1JFR0FUSU9OUy5maWx0ZXIoKGkpID0+IHtcbiAgICAgICAgcmV0dXJuIGkudmFsdWVUeXBlcy5pbmRleE9mKHZhbHVlVHlwZSkgIT09IC0xICYmIGkubWV0cmljS2luZHMuaW5kZXhPZihtZXRyaWNLaW5kKSAhPT0gLTE7XG4gICAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMYWJlbEtleXMgPSBhc3luYyAoXG4gIGRhdGFzb3VyY2U6IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UsXG4gIHNlbGVjdGVkTWV0cmljVHlwZTogc3RyaW5nLFxuICBwcm9qZWN0TmFtZTogc3RyaW5nXG4pID0+IHtcbiAgY29uc3QgcmVmSWQgPSAnaGFuZGxlTGFiZWxLZXlzUXVlcnknO1xuICBjb25zdCBsYWJlbHMgPSBhd2FpdCBkYXRhc291cmNlLmdldExhYmVscyhzZWxlY3RlZE1ldHJpY1R5cGUsIHJlZklkLCBwcm9qZWN0TmFtZSk7XG4gIHJldHVybiBbLi4uT2JqZWN0LmtleXMobGFiZWxzKSwgLi4uU1lTVEVNX0xBQkVMU107XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QWxpZ25tZW50UGlja2VyRGF0YSA9IChcbiAgdmFsdWVUeXBlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBWYWx1ZVR5cGVzLkRPVUJMRSxcbiAgbWV0cmljS2luZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gTWV0cmljS2luZC5HQVVHRSxcbiAgcGVyU2VyaWVzQWxpZ25lcjogc3RyaW5nIHwgdW5kZWZpbmVkID0gQWxpZ25tZW50VHlwZXMuQUxJR05fTUVBTixcbiAgcHJlcHJvY2Vzc29yPzogUHJlcHJvY2Vzc29yVHlwZVxuKSA9PiB7XG4gIGNvbnN0IGFsaWduT3B0aW9ucyA9IGdldEFsaWdubWVudE9wdGlvbnNCeU1ldHJpYyh2YWx1ZVR5cGUhLCBtZXRyaWNLaW5kISwgcHJlcHJvY2Vzc29yISkubWFwKChvcHRpb24pID0+ICh7XG4gICAgLi4ub3B0aW9uLFxuICAgIGxhYmVsOiBvcHRpb24udGV4dCxcbiAgfSkpO1xuICBpZiAoIWFsaWduT3B0aW9ucy5zb21lKChvOiB7IHZhbHVlOiBzdHJpbmcgfSkgPT4gby52YWx1ZSA9PT0gdGVtcGxhdGVTcnYucmVwbGFjZShwZXJTZXJpZXNBbGlnbmVyKSkpIHtcbiAgICBwZXJTZXJpZXNBbGlnbmVyID0gYWxpZ25PcHRpb25zLmxlbmd0aCA+IDAgPyBhbGlnbk9wdGlvbnNbMF0udmFsdWUgOiBBbGlnbm1lbnRUeXBlcy5BTElHTl9NRUFOO1xuICB9XG4gIHJldHVybiB7IGFsaWduT3B0aW9ucywgcGVyU2VyaWVzQWxpZ25lciB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxhYmVsc1RvR3JvdXBlZE9wdGlvbnMgPSAoZ3JvdXBCeXM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IGdyb3VwcyA9IGdyb3VwQnlzLnJlZHVjZSgoYWNjOiBhbnksIGN1cnI6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGFyciA9IGN1cnIuc3BsaXQoJy4nKS5tYXAoc3RhcnRDYXNlKTtcbiAgICBjb25zdCBncm91cCA9IChhcnIubGVuZ3RoID09PSAyID8gYXJyIDogaW5pdGlhbChhcnIpKS5qb2luKCcgJyk7XG4gICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgdmFsdWU6IGN1cnIsXG4gICAgICBsYWJlbDogY3VycixcbiAgICB9O1xuICAgIGlmIChhY2NbZ3JvdXBdKSB7XG4gICAgICBhY2NbZ3JvdXBdID0gWy4uLmFjY1tncm91cF0sIG9wdGlvbl07XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjY1tncm91cF0gPSBbb3B0aW9uXTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoZ3JvdXBzKS5tYXAoKFtsYWJlbCwgb3B0aW9uc10pID0+ICh7IGxhYmVsLCBvcHRpb25zLCBleHBhbmRlZDogdHJ1ZSB9KSwgW10pO1xufTtcblxuZXhwb3J0IGNvbnN0IHN0cmluZ0FycmF5VG9GaWx0ZXJzID0gKGZpbHRlckFycmF5OiBzdHJpbmdbXSkgPT5cbiAgY2h1bmsoZmlsdGVyQXJyYXksIDQpLm1hcCgoW2tleSwgb3BlcmF0b3IsIHZhbHVlLCBjb25kaXRpb24gPSAnQU5EJ10pID0+ICh7XG4gICAga2V5LFxuICAgIG9wZXJhdG9yLFxuICAgIHZhbHVlLFxuICAgIGNvbmRpdGlvbixcbiAgfSkpO1xuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBDbG91ZE1vbml0b3JpbmdBbm5vdGF0aW9uc1F1ZXJ5Q3RybCB9IGZyb20gJy4vYW5ub3RhdGlvbnNfcXVlcnlfY3RybCc7XG5pbXBvcnQgQ2xvdWRNb25pdG9yaW5nQ2hlYXRTaGVldCBmcm9tICcuL2NvbXBvbmVudHMvQ2xvdWRNb25pdG9yaW5nQ2hlYXRTaGVldCc7XG5pbXBvcnQgeyBDb25maWdFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvQ29uZmlnRWRpdG9yL0NvbmZpZ0VkaXRvcic7XG5pbXBvcnQgeyBRdWVyeUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9RdWVyeUVkaXRvcic7XG5pbXBvcnQgeyBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL1ZhcmlhYmxlUXVlcnlFZGl0b3InO1xuaW1wb3J0IENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbmltcG9ydCB7IENsb3VkTW9uaXRvcmluZ1F1ZXJ5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBwbHVnaW4gPSBuZXcgRGF0YVNvdXJjZVBsdWdpbjxDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlLCBDbG91ZE1vbml0b3JpbmdRdWVyeT4oQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSlcbiAgLnNldFF1ZXJ5RWRpdG9ySGVscChDbG91ZE1vbml0b3JpbmdDaGVhdFNoZWV0KVxuICAuc2V0UXVlcnlFZGl0b3IoUXVlcnlFZGl0b3IpXG4gIC5zZXRDb25maWdFZGl0b3IoQ29uZmlnRWRpdG9yKVxuICAuc2V0QW5ub3RhdGlvblF1ZXJ5Q3RybChDbG91ZE1vbml0b3JpbmdBbm5vdGF0aW9uc1F1ZXJ5Q3RybClcbiAgLnNldFZhcmlhYmxlUXVlcnlFZGl0b3IoQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeUVkaXRvcik7XG4iLCJpbXBvcnQgeyBEYXRhUXVlcnksIERhdGFTb3VyY2VKc29uRGF0YSwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBHb29nbGVBdXRoVHlwZSB9IGZyb20gJ0BncmFmYW5hL2dvb2dsZS1zZGsnO1xuXG5leHBvcnQgY29uc3QgYXV0aFR5cGVzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPSBbXG4gIHsgbGFiZWw6ICdHb29nbGUgSldUIEZpbGUnLCB2YWx1ZTogR29vZ2xlQXV0aFR5cGUuSldUIH0sXG4gIHsgbGFiZWw6ICdHQ0UgRGVmYXVsdCBTZXJ2aWNlIEFjY291bnQnLCB2YWx1ZTogR29vZ2xlQXV0aFR5cGUuR0NFIH0sXG5dO1xuXG5leHBvcnQgZW51bSBNZXRyaWNGaW5kUXVlcnlUeXBlcyB7XG4gIFByb2plY3RzID0gJ3Byb2plY3RzJyxcbiAgU2VydmljZXMgPSAnc2VydmljZXMnLFxuICBEZWZhdWx0UHJvamVjdCA9ICdkZWZhdWx0UHJvamVjdCcsXG4gIE1ldHJpY1R5cGVzID0gJ21ldHJpY1R5cGVzJyxcbiAgTGFiZWxLZXlzID0gJ2xhYmVsS2V5cycsXG4gIExhYmVsVmFsdWVzID0gJ2xhYmVsVmFsdWVzJyxcbiAgUmVzb3VyY2VUeXBlcyA9ICdyZXNvdXJjZVR5cGVzJyxcbiAgQWdncmVnYXRpb25zID0gJ2FnZ3JlZ2F0aW9ucycsXG4gIEFsaWduZXJzID0gJ2FsaWduZXJzJyxcbiAgQWxpZ25tZW50UGVyaW9kcyA9ICdhbGlnbm1lbnRQZXJpb2RzJyxcbiAgU2VsZWN0b3JzID0gJ3NlbGVjdG9ycycsXG4gIFNMT1NlcnZpY2VzID0gJ3Nsb1NlcnZpY2VzJyxcbiAgU0xPID0gJ3NsbycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeSBleHRlbmRzIERhdGFRdWVyeSB7XG4gIHNlbGVjdGVkUXVlcnlUeXBlOiBzdHJpbmc7XG4gIHNlbGVjdGVkU2VydmljZTogc3RyaW5nO1xuICBzZWxlY3RlZE1ldHJpY1R5cGU6IHN0cmluZztcbiAgc2VsZWN0ZWRTTE9TZXJ2aWNlOiBzdHJpbmc7XG4gIGxhYmVsS2V5OiBzdHJpbmc7XG4gIHByb2plY3RzOiBTZWxlY3RhYmxlVmFsdWVbXTtcbiAgc2xvU2VydmljZXM6IFNlbGVjdGFibGVWYWx1ZVtdO1xuICBwcm9qZWN0TmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFZhcmlhYmxlUXVlcnlEYXRhIHtcbiAgc2VsZWN0ZWRRdWVyeVR5cGU6IHN0cmluZztcbiAgbWV0cmljRGVzY3JpcHRvcnM6IE1ldHJpY0Rlc2NyaXB0b3JbXTtcbiAgc2VsZWN0ZWRTZXJ2aWNlOiBzdHJpbmc7XG4gIHNlbGVjdGVkTWV0cmljVHlwZTogc3RyaW5nO1xuICBzZWxlY3RlZFNMT1NlcnZpY2U6IHN0cmluZztcbiAgbGFiZWxzOiBzdHJpbmdbXTtcbiAgbGFiZWxLZXk6IHN0cmluZztcbiAgbWV0cmljVHlwZXM6IEFycmF5PHsgdmFsdWU6IHN0cmluZzsgbmFtZTogc3RyaW5nIH0+O1xuICBzZXJ2aWNlczogU2VsZWN0YWJsZVZhbHVlW107XG4gIHByb2plY3RzOiBTZWxlY3RhYmxlVmFsdWVbXTtcbiAgc2xvU2VydmljZXM6IFNlbGVjdGFibGVWYWx1ZVtdO1xuICBwcm9qZWN0TmFtZTogc3RyaW5nO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFnZ3JlZ2F0aW9uIHtcbiAgY3Jvc3NTZXJpZXNSZWR1Y2VyPzogc3RyaW5nO1xuICBncm91cEJ5cz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZW51bSBRdWVyeVR5cGUge1xuICBNRVRSSUNTID0gJ21ldHJpY3MnLFxuICBTTE8gPSAnc2xvJyxcbn1cblxuZXhwb3J0IGVudW0gRWRpdG9yTW9kZSB7XG4gIFZpc3VhbCA9ICd2aXN1YWwnLFxuICBNUUwgPSAnbXFsJyxcbn1cblxuZXhwb3J0IGVudW0gUHJlcHJvY2Vzc29yVHlwZSB7XG4gIE5vbmUgPSAnbm9uZScsXG4gIFJhdGUgPSAncmF0ZScsXG4gIERlbHRhID0gJ2RlbHRhJyxcbn1cblxuZXhwb3J0IGVudW0gTWV0cmljS2luZCB7XG4gIE1FVFJJQ19LSU5EX1VOU1BFQ0lGSUVEID0gJ01FVFJJQ19LSU5EX1VOU1BFQ0lGSUVEJyxcbiAgR0FVR0UgPSAnR0FVR0UnLFxuICBERUxUQSA9ICdERUxUQScsXG4gIENVTVVMQVRJVkUgPSAnQ1VNVUxBVElWRScsXG59XG5cbmV4cG9ydCBlbnVtIFZhbHVlVHlwZXMge1xuICBWQUxVRV9UWVBFX1VOU1BFQ0lGSUVEID0gJ1ZBTFVFX1RZUEVfVU5TUEVDSUZJRUQnLFxuICBCT09MID0gJ0JPT0wnLFxuICBJTlQ2NCA9ICdJTlQ2NCcsXG4gIERPVUJMRSA9ICdET1VCTEUnLFxuICBTVFJJTkcgPSAnU1RSSU5HJyxcbiAgRElTVFJJQlVUSU9OID0gJ0RJU1RSSUJVVElPTicsXG4gIE1PTkVZID0gJ01PTkVZJyxcbn1cblxuZXhwb3J0IGVudW0gQWxpZ25tZW50VHlwZXMge1xuICBBTElHTl9ERUxUQSA9ICdBTElHTl9ERUxUQScsXG4gIEFMSUdOX1JBVEUgPSAnQUxJR05fUkFURScsXG4gIEFMSUdOX0lOVEVSUE9MQVRFID0gJ0FMSUdOX0lOVEVSUE9MQVRFJyxcbiAgQUxJR05fTkVYVF9PTERFUiA9ICdBTElHTl9ORVhUX09MREVSJyxcbiAgQUxJR05fTUlOID0gJ0FMSUdOX01JTicsXG4gIEFMSUdOX01BWCA9ICdBTElHTl9NQVgnLFxuICBBTElHTl9NRUFOID0gJ0FMSUdOX01FQU4nLFxuICBBTElHTl9DT1VOVCA9ICdBTElHTl9DT1VOVCcsXG4gIEFMSUdOX1NVTSA9ICdBTElHTl9TVU0nLFxuICBBTElHTl9TVERERVYgPSAnQUxJR05fU1REREVWJyxcbiAgQUxJR05fQ09VTlRfVFJVRSA9ICdBTElHTl9DT1VOVF9UUlVFJyxcbiAgQUxJR05fQ09VTlRfRkFMU0UgPSAnQUxJR05fQ09VTlRfRkFMU0UnLFxuICBBTElHTl9GUkFDVElPTl9UUlVFID0gJ0FMSUdOX0ZSQUNUSU9OX1RSVUUnLFxuICBBTElHTl9QRVJDRU5USUxFXzk5ID0gJ0FMSUdOX1BFUkNFTlRJTEVfOTknLFxuICBBTElHTl9QRVJDRU5USUxFXzk1ID0gJ0FMSUdOX1BFUkNFTlRJTEVfOTUnLFxuICBBTElHTl9QRVJDRU5USUxFXzUwID0gJ0FMSUdOX1BFUkNFTlRJTEVfNTAnLFxuICBBTElHTl9QRVJDRU5USUxFXzA1ID0gJ0FMSUdOX1BFUkNFTlRJTEVfMDUnLFxuICBBTElHTl9QRVJDRU5UX0NIQU5HRSA9ICdBTElHTl9QRVJDRU5UX0NIQU5HRScsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVF1ZXJ5IHtcbiAgcHJvamVjdE5hbWU6IHN0cmluZztcbiAgcGVyU2VyaWVzQWxpZ25lcj86IHN0cmluZztcbiAgYWxpZ25tZW50UGVyaW9kPzogc3RyaW5nO1xuICBhbGlhc0J5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldHJpY1F1ZXJ5IGV4dGVuZHMgQmFzZVF1ZXJ5IHtcbiAgZWRpdG9yTW9kZTogRWRpdG9yTW9kZTtcbiAgbWV0cmljVHlwZTogc3RyaW5nO1xuICBjcm9zc1Nlcmllc1JlZHVjZXI6IHN0cmluZztcbiAgZ3JvdXBCeXM/OiBzdHJpbmdbXTtcbiAgZmlsdGVycz86IHN0cmluZ1tdO1xuICBtZXRyaWNLaW5kPzogTWV0cmljS2luZDtcbiAgdmFsdWVUeXBlPzogc3RyaW5nO1xuICB2aWV3Pzogc3RyaW5nO1xuICBxdWVyeTogc3RyaW5nO1xuICBwcmVwcm9jZXNzb3I/OiBQcmVwcm9jZXNzb3JUeXBlO1xuICAvLyBUbyBkaXNhYmxlIHRoZSBncmFwaFBlcmlvZCwgaXQgc2hvdWxkIGV4cGxpY3RseSBiZSBzZXQgdG8gJ2Rpc2FibGVkJ1xuICBncmFwaFBlcmlvZD86ICdkaXNhYmxlZCcgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU0xPUXVlcnkgZXh0ZW5kcyBCYXNlUXVlcnkge1xuICBzZWxlY3Rvck5hbWU6IHN0cmluZztcbiAgc2VydmljZUlkOiBzdHJpbmc7XG4gIHNlcnZpY2VOYW1lOiBzdHJpbmc7XG4gIHNsb0lkOiBzdHJpbmc7XG4gIHNsb05hbWU6IHN0cmluZztcbiAgZ29hbD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZE1vbml0b3JpbmdRdWVyeSBleHRlbmRzIERhdGFRdWVyeSB7XG4gIGRhdGFzb3VyY2VJZD86IG51bWJlcjsgLy8gU2hvdWxkIG5vdCBiZSBuZWNlc3NhcnkgYW55bW9yZVxuICBxdWVyeVR5cGU6IFF1ZXJ5VHlwZTtcbiAgbWV0cmljUXVlcnk6IE1ldHJpY1F1ZXJ5O1xuICBzbG9RdWVyeT86IFNMT1F1ZXJ5O1xuICBpbnRlcnZhbE1zOiBudW1iZXI7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZE1vbml0b3JpbmdPcHRpb25zIGV4dGVuZHMgRGF0YVNvdXJjZUpzb25EYXRhIHtcbiAgZGVmYXVsdFByb2plY3Q/OiBzdHJpbmc7XG4gIGdjZURlZmF1bHRQcm9qZWN0Pzogc3RyaW5nO1xuICBhdXRoZW50aWNhdGlvblR5cGU6IEdvb2dsZUF1dGhUeXBlO1xuICBjbGllbnRFbWFpbD86IHN0cmluZztcbiAgdG9rZW5Vcmk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRNb25pdG9yaW5nU2VjdXJlSnNvbkRhdGEge1xuICBwcml2YXRlS2V5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFubm90YXRpb25UYXJnZXQge1xuICBwcm9qZWN0TmFtZTogc3RyaW5nO1xuICBtZXRyaWNUeXBlOiBzdHJpbmc7XG4gIHJlZklkOiBzdHJpbmc7XG4gIGZpbHRlcnM6IHN0cmluZ1tdO1xuICBtZXRyaWNLaW5kOiBNZXRyaWNLaW5kO1xuICB2YWx1ZVR5cGU6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5TWV0YSB7XG4gIGFsaWdubWVudFBlcmlvZDogc3RyaW5nO1xuICByYXdRdWVyeTogc3RyaW5nO1xuICByYXdRdWVyeVN0cmluZzogc3RyaW5nO1xuICBtZXRyaWNMYWJlbHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfTtcbiAgcmVzb3VyY2VMYWJlbHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfTtcbiAgcmVzb3VyY2VUeXBlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0cmljRGVzY3JpcHRvciB7XG4gIHZhbHVlVHlwZTogc3RyaW5nO1xuICBtZXRyaWNLaW5kOiBNZXRyaWNLaW5kO1xuICB0eXBlOiBzdHJpbmc7XG4gIHVuaXQ6IHN0cmluZztcbiAgc2VydmljZTogc3RyaW5nO1xuICBzZXJ2aWNlU2hvcnROYW1lOiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VnbWVudCB7XG4gIHR5cGU6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXIge1xuICBrZXk6IHN0cmluZztcbiAgb3BlcmF0b3I6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgY29uZGl0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvbU1ldGFEYXRhIHtcbiAgcGVyU2VyaWVzQWxpZ25lcj86IHN0cmluZztcbiAgYWxpZ25tZW50UGVyaW9kPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RSZXNwb25zZSB7XG4gIHJlc3VsdHM6IFJlY29yZDxzdHJpbmcsIGFueT47XG59XG4iLCJpbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDdXN0b21WYXJpYWJsZVN1cHBvcnQsIERhdGFRdWVyeVJlcXVlc3QsIERhdGFRdWVyeVJlc3BvbnNlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCBDbG91ZE1vbml0b3JpbmdNZXRyaWNGaW5kUXVlcnkgZnJvbSAnLi9DbG91ZE1vbml0b3JpbmdNZXRyaWNGaW5kUXVlcnknO1xuaW1wb3J0IHsgQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeUVkaXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9WYXJpYWJsZVF1ZXJ5RWRpdG9yJztcbmltcG9ydCBDbG91ZE1vbml0b3JpbmdEYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVN1cHBvcnQgZXh0ZW5kcyBDdXN0b21WYXJpYWJsZVN1cHBvcnQ8XG4gIENsb3VkTW9uaXRvcmluZ0RhdGFzb3VyY2UsXG4gIENsb3VkTW9uaXRvcmluZ1ZhcmlhYmxlUXVlcnlcbj4ge1xuICBwcml2YXRlIHJlYWRvbmx5IG1ldHJpY0ZpbmRRdWVyeTogQ2xvdWRNb25pdG9yaW5nTWV0cmljRmluZFF1ZXJ5O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZGF0YXNvdXJjZTogQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5tZXRyaWNGaW5kUXVlcnkgPSBuZXcgQ2xvdWRNb25pdG9yaW5nTWV0cmljRmluZFF1ZXJ5KGRhdGFzb3VyY2UpO1xuICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LmJpbmQodGhpcyk7XG4gIH1cblxuICBlZGl0b3IgPSBDbG91ZE1vbml0b3JpbmdWYXJpYWJsZVF1ZXJ5RWRpdG9yO1xuXG4gIHF1ZXJ5KHJlcXVlc3Q6IERhdGFRdWVyeVJlcXVlc3Q8Q2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeT4pOiBPYnNlcnZhYmxlPERhdGFRdWVyeVJlc3BvbnNlPiB7XG4gICAgY29uc3QgZXhlY3V0ZU9ic2VydmFibGUgPSBmcm9tKHRoaXMubWV0cmljRmluZFF1ZXJ5LmV4ZWN1dGUocmVxdWVzdC50YXJnZXRzWzBdKSk7XG4gICAgcmV0dXJuIGZyb20odGhpcy5kYXRhc291cmNlLmVuc3VyZUdDRURlZmF1bHRQcm9qZWN0KCkpLnBpcGUoXG4gICAgICBtZXJnZU1hcCgoKSA9PiBleGVjdXRlT2JzZXJ2YWJsZSksXG4gICAgICBtYXAoKGRhdGEpID0+ICh7IGRhdGEgfSkpXG4gICAgKTtcbiAgfVxufVxuIiwiT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGRhdGEgPSByZXF1aXJlKCdAZ3JhZmFuYS9kYXRhJyk7XG52YXIgdWkgPSByZXF1aXJlKCdAZ3JhZmFuYS91aScpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBsb2Rhc2ggPSByZXF1aXJlKCdsb2Rhc2gnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0TGVnYWN5IChlKSB7IHJldHVybiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBSZWFjdF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRMZWdhY3koUmVhY3QpO1xuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxudmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cblxudmFyIFRFU1RfSURTID0ge1xyXG4gICAgaGVscEJveDogJ0NvbmZpZ3VyYXRpb24gaGVscCBib3gnLFxyXG4gICAgZHJvcFpvbmU6ICdDb25maWd1cmF0aW9uIGRyb3Agem9uZScsXHJcbiAgICBwYXN0ZUFyZWE6ICdDb25maWd1cmF0aW9uIHRleHQgYXJlYScsXHJcbiAgICBwYXN0ZUp3dEJ1dHRvbjogJ1Bhc3RlIEpXVCBidXR0b24nLFxyXG4gICAgcmVzZXRKd3RCdXR0b246ICdSZXNldCBKV1QgYnV0dG9uJyxcclxuICAgIGp3dEZvcm06ICdKV1QgZm9ybScsXHJcbiAgICBhdXRoVHlwZUJ1dHRvbkpXVDogJ0pXVCBidXR0b24nLFxyXG4gICAgYXV0aFR5cGVCdXR0b25HQ0U6ICdHQ0UgYnV0dG9uJyxcclxufTtcblxudmFyIGNvbmZpZ0tleXMgPSBbJ3ByaXZhdGVfa2V5JywgJ3Rva2VuX3VyaScsICdjbGllbnRfZW1haWwnLCAncHJvamVjdF9pZCddO1xyXG52YXIgSU5WQUxJRF9KV1RfVE9LRU5fRVJST1IgPSAnSW52YWxpZCBKV1QgdG9rZW4nO1xyXG52YXIgSldUQ29uZmlnRWRpdG9yID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgb25DaGFuZ2UgPSBfYS5vbkNoYW5nZTtcclxuICAgIHZhciBfYiA9IF9fcmVhZChSZWFjdC51c2VTdGF0ZSgpLCAyKSwgZXJyb3IgPSBfYlswXSwgc2V0RXJyb3IgPSBfYlsxXTtcclxuICAgIHZhciBfYyA9IF9fcmVhZChSZWFjdC51c2VTdGF0ZShudWxsKSwgMiksIGlzUGFzdGluZyA9IF9jWzBdLCBzZXRJc1Bhc3RpbmcgPSBfY1sxXTtcclxuICAgIHZhciB0aGVtZSA9IHVpLnVzZVRoZW1lMigpO1xyXG4gICAgdmFyIG9uUGFzdGVDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgc2V0RXJyb3IobnVsbCk7XHJcbiAgICAgICAgc2V0SXNQYXN0aW5nKHRydWUpO1xyXG4gICAgfSwgW3NldElzUGFzdGluZ10pO1xyXG4gICAgdmFyIG9uVXBsb2FkQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHNldElzUGFzdGluZyhudWxsKTtcclxuICAgICAgICBzZXRFcnJvcihudWxsKTtcclxuICAgIH0sIFtzZXRJc1Bhc3RpbmddKTtcclxuICAgIHZhciByZWFkQW5kVmFsaWRhdGVKV1QgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgICAgICB2YXIgand0ID0gdm9pZCAwO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgand0ID0gSlNPTi5wYXJzZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKElOVkFMSURfSldUX1RPS0VOX0VSUk9SKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IHZhbGlkYXRlSldUKGp3dCk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICBwcml2YXRlS2V5OiBqd3QucHJpdmF0ZV9rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5Vcmk6IGp3dC50b2tlbl91cmksXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50RW1haWw6IGp3dC5jbGllbnRfZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkOiBqd3QucHJvamVjdF9pZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IodmFsaWRhdGlvbi5lcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbc2V0RXJyb3IsIG9uQ2hhbmdlXSk7XHJcbiAgICByZXR1cm4gKFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5GcmFnbWVudCwgbnVsbCxcclxuICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5GaWVsZCwgeyBsYWJlbDogXCJKV1QgdG9rZW5cIiwgaW52YWxpZDogQm9vbGVhbihlcnJvciksIGRlc2NyaXB0aW9uOiBpc1Bhc3RpbmcgPyAnUGFzdGUgSldUIHRva2VuIGJlbG93JyA6ICdVcGxvYWQgb3IgcGFzdGUgR29vZ2xlIEpXVCB0b2tlbicsIGVycm9yOiBlcnJvciB9LFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgICAgICAgICBpc1Bhc3RpbmcgIT09IHRydWUgJiYgKFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgXCJkYXRhLXRlc3RpZFwiOiBURVNUX0lEUy5kcm9wWm9uZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkZpbGVEcm9wem9uZSwgeyBvcHRpb25zOiB7IG11bHRpcGxlOiBmYWxzZSwgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicgfSwgcmVhZEFzOiBcInJlYWRBc1RleHRcIiwgb25Mb2FkOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkQW5kVmFsaWRhdGVKV1QocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElzUGFzdGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHsgbWFyZ2luOiAwLCBmb250U2l6ZTogXCJcIiArIHRoZW1lLnR5cG9ncmFwaHkuaDQuZm9udFNpemUsIHRleHRBbGlnbjogJ2NlbnRlcicgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEcm9wIHRoZSBHb29nbGUgSldUIGZpbGUgaGVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5MaW5rQnV0dG9uLCB7IGZpbGw6IFwib3V0bGluZVwiIH0sIFwiQ2xpY2sgdG8gYnJvd3NlIGZpbGVzXCIpKSkpKSxcclxuICAgICAgICAgICAgICAgIGlzUGFzdGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5UZXh0QXJlYSwgeyBcImRhdGEtdGVzdGlkXCI6IFRFU1RfSURTLnBhc3RlQXJlYSwgYXV0b0ZvY3VzOiB0cnVlLCBpbnZhbGlkOiBCb29sZWFuKGVycm9yKSwgcGxhY2Vob2xkZXI6IFwiUGFzdGUgR29vZ2xlIEpXVCB0b2tlbiBoZXJlXCIsIG9uQmx1cjogZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHJlYWRBbmRWYWxpZGF0ZUpXVChlLmN1cnJlbnRUYXJnZXQudmFsdWUpOyB9LCByb3dzOiAxMiB9KSkpKSxcclxuICAgICAgICAhaXNQYXN0aW5nICYmIChSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5GaWVsZCwgbnVsbCxcclxuICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuQnV0dG9uLCB7IFwiZGF0YS10ZXN0aWRcIjogVEVTVF9JRFMucGFzdGVKd3RCdXR0b24sIHR5cGU6IFwiYnV0dG9uXCIsIGZpbGw6IFwib3V0bGluZVwiLCBzdHlsZTogeyBjb2xvcjogXCJcIiArIHRoZW1lLmNvbG9ycy5wcmltYXJ5LnRleHQgfSwgb25DbGljazogb25QYXN0ZUNsaWNrIH0sIFwiUGFzdGUgSldUIFRva2VuXCIpKSksXHJcbiAgICAgICAgaXNQYXN0aW5nICYmIGVycm9yICYmIChSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5GaWVsZCwgbnVsbCxcclxuICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuQnV0dG9uLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGZpbGw6IFwib3V0bGluZVwiLCBzdHlsZTogeyBjb2xvcjogXCJcIiArIHRoZW1lLmNvbG9ycy5wcmltYXJ5LnRleHQgfSwgb25DbGljazogb25VcGxvYWRDbGljayB9LCBcIlVwbG9hZCBKV1QgVG9rZW5cIikpKSkpO1xyXG59O1xyXG52YXIgdmFsaWRhdGVKV1QgPSBmdW5jdGlvbiAoanNvbikge1xyXG4gICAgaWYgKCFsb2Rhc2guaXNPYmplY3QoanNvbikpIHtcclxuICAgICAgICByZXR1cm4geyBpc1ZhbGlkOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIEpXVCB0b2tlbicgfTtcclxuICAgIH1cclxuICAgIHZhciBtaXNzaW5nS2V5cyA9IGNvbmZpZ0tleXMuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuICFqc29uW2tleV07IH0pO1xyXG4gICAgaWYgKG1pc3NpbmdLZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICByZXR1cm4geyBpc1ZhbGlkOiBmYWxzZSwgZXJyb3I6IFwiTWlzc2luZyBrZXlzOiBcIiArIG1pc3NpbmdLZXlzLmpvaW4oJywgJykgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IGlzVmFsaWQ6IHRydWUgfTtcclxufTtcblxudmFyIEpXVEZvcm0gPSBmdW5jdGlvbiAoX2EpIHtcclxuICAgIHZhciBvcHRpb25zID0gX2Eub3B0aW9ucywgb25SZXNldCA9IF9hLm9uUmVzZXQsIG9uQ2hhbmdlID0gX2Eub25DaGFuZ2U7XHJcbiAgICB2YXIgb25SZXNldFByZXNzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb25SZXNldChudWxsKTsgfTtcclxuICAgIHJldHVybiAoUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBcImRhdGEtdGVzdGlkXCI6IFRFU1RfSURTLmp3dEZvcm0gfSxcclxuICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5GaWVsZCwgeyBsYWJlbDogXCJQcm9qZWN0IElEXCIgfSxcclxuICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuSW5wdXQsIHsgaWQ6IFwiZGVmYXVsdFByb2plY3RcIiwgd2lkdGg6IDYwLCB2YWx1ZTogb3B0aW9ucy5kZWZhdWx0UHJvamVjdCB8fCAnJywgb25DaGFuZ2U6IG9uQ2hhbmdlKCdkZWZhdWx0UHJvamVjdCcpIH0pKSxcclxuICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5GaWVsZCwgeyBsYWJlbDogXCJDbGllbnQgZW1haWxcIiB9LFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5JbnB1dCwgeyB3aWR0aDogNjAsIGlkOiBcImNsaWVudEVtYWlsXCIsIHZhbHVlOiBvcHRpb25zLmNsaWVudEVtYWlsIHx8ICcnLCBvbkNoYW5nZTogb25DaGFuZ2UoJ2NsaWVudEVtYWlsJykgfSkpLFxyXG4gICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLkZpZWxkLCB7IGxhYmVsOiBcIlRva2VuIFVSSVwiIH0sXHJcbiAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLklucHV0LCB7IHdpZHRoOiA2MCwgaWQ6IFwidG9rZW5VcmlcIiwgdmFsdWU6IG9wdGlvbnMudG9rZW5VcmkgfHwgJycsIG9uQ2hhbmdlOiBvbkNoYW5nZSgndG9rZW5VcmknKSB9KSksXHJcbiAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuRmllbGQsIHsgbGFiZWw6IFwiUHJpdmF0ZSBrZXlcIiwgZGlzYWJsZWQ6IHRydWUgfSxcclxuICAgICAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuSW5wdXQsIHsgd2lkdGg6IDYwLCBpZDogXCJwcml2YXRlS2V5XCIsIHJlYWRPbmx5OiB0cnVlLCBwbGFjZWhvbGRlcjogXCJQcml2YXRlIGtleSBjb25maWd1cmVkXCIsIGFkZG9uQWZ0ZXI6IFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLlRvb2x0aXAsIHsgY29udGVudDogXCJDbGljayB0byBjbGVhciB0aGUgdXBsb2FkZWQgSldUIHRva2VuIGFuZCB1cGxvYWQgYSBuZXcgb25lXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5CdXR0b24sIHsgXCJkYXRhLXRlc3RpZFwiOiBURVNUX0lEUy5yZXNldEp3dEJ1dHRvbiwgaWNvbjogXCJzeW5jXCIsIHNpemU6IFwieHNcIiwgb25DbGljazogb25SZXNldFByZXNzLCBmaWxsOiBcIm91dGxpbmVcIiB9LCBcIlJlc2V0IHRva2VuXCIpKSB9KSkpKTtcclxufTtcblxuZXhwb3J0cy5Hb29nbGVBdXRoVHlwZSA9IHZvaWQgMDtcclxuKGZ1bmN0aW9uIChHb29nbGVBdXRoVHlwZSkge1xyXG4gICAgR29vZ2xlQXV0aFR5cGVbXCJKV1RcIl0gPSBcImp3dFwiO1xyXG4gICAgR29vZ2xlQXV0aFR5cGVbXCJHQ0VcIl0gPSBcImdjZVwiO1xyXG59KShleHBvcnRzLkdvb2dsZUF1dGhUeXBlIHx8IChleHBvcnRzLkdvb2dsZUF1dGhUeXBlID0ge30pKTtcblxudmFyIEdPT0dMRV9BVVRIX1RZUEVfT1BUSU9OUyA9IFtcclxuICAgIHsgbGFiZWw6ICdHb29nbGUgSldUIEZpbGUnLCB2YWx1ZTogZXhwb3J0cy5Hb29nbGVBdXRoVHlwZS5KV1QsIGFyaWFMYWJlbDogVEVTVF9JRFMuYXV0aFR5cGVCdXR0b25KV1QgfSxcclxuICAgIHsgbGFiZWw6ICdHQ0UgRGVmYXVsdCBTZXJ2aWNlIEFjY291bnQnLCB2YWx1ZTogZXhwb3J0cy5Hb29nbGVBdXRoVHlwZS5HQ0UsIGFyaWFMYWJlbDogVEVTVF9JRFMuYXV0aFR5cGVCdXR0b25HQ0UgfSxcclxuXTtcblxudmFyIENvbm5lY3Rpb25Db25maWcgPSBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHZhciBvcHRpb25zID0gcHJvcHMub3B0aW9ucywgb25PcHRpb25zQ2hhbmdlID0gcHJvcHMub25PcHRpb25zQ2hhbmdlO1xyXG4gICAgdmFyIGpzb25EYXRhID0gb3B0aW9ucy5qc29uRGF0YSwgc2VjdXJlSnNvbkZpZWxkcyA9IG9wdGlvbnMuc2VjdXJlSnNvbkZpZWxkcywgc2VjdXJlSnNvbkRhdGEgPSBvcHRpb25zLnNlY3VyZUpzb25EYXRhO1xyXG4gICAgaWYgKCFqc29uRGF0YS5hdXRoZW50aWNhdGlvblR5cGUpIHtcclxuICAgICAgICBqc29uRGF0YS5hdXRoZW50aWNhdGlvblR5cGUgPSBleHBvcnRzLkdvb2dsZUF1dGhUeXBlLkpXVDtcclxuICAgIH1cclxuICAgIHZhciBpc0pXVCA9IGpzb25EYXRhLmF1dGhlbnRpY2F0aW9uVHlwZSA9PT0gZXhwb3J0cy5Hb29nbGVBdXRoVHlwZS5KV1QgfHwganNvbkRhdGEuYXV0aGVudGljYXRpb25UeXBlID09PSB1bmRlZmluZWQ7XHJcbiAgICB2YXIgb25BdXRoVHlwZUNoYW5nZSA9IGZ1bmN0aW9uIChhdXRoZW50aWNhdGlvblR5cGUpIHtcclxuICAgICAgICBvbk9wdGlvbnNDaGFuZ2UoX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IGpzb25EYXRhOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucy5qc29uRGF0YSksIHsgYXV0aGVudGljYXRpb25UeXBlOiBhdXRoZW50aWNhdGlvblR5cGUgfSkgfSkpO1xyXG4gICAgfTtcclxuICAgIHZhciBoYXNKV1RDb25maWd1cmVkID0gQm9vbGVhbihzZWN1cmVKc29uRmllbGRzICYmXHJcbiAgICAgICAgc2VjdXJlSnNvbkZpZWxkcy5wcml2YXRlS2V5ICYmXHJcbiAgICAgICAganNvbkRhdGEuY2xpZW50RW1haWwgJiZcclxuICAgICAgICBqc29uRGF0YS5kZWZhdWx0UHJvamVjdCAmJlxyXG4gICAgICAgIGpzb25EYXRhLnRva2VuVXJpKTtcclxuICAgIHZhciBvblJlc2V0QXBpS2V5ID0gZnVuY3Rpb24gKGpzb25EYXRhKSB7XHJcbiAgICAgICAgdmFyIG5leHRTZWN1cmVKc29uRGF0YSA9IF9fYXNzaWduKHt9LCBzZWN1cmVKc29uRGF0YSk7XHJcbiAgICAgICAgdmFyIG5leHRKc29uRGF0YSA9ICFqc29uRGF0YSA/IF9fYXNzaWduKHt9LCBvcHRpb25zLmpzb25EYXRhKSA6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zLmpzb25EYXRhKSwganNvbkRhdGEpO1xyXG4gICAgICAgIGRlbGV0ZSBuZXh0SnNvbkRhdGEuY2xpZW50RW1haWw7XHJcbiAgICAgICAgZGVsZXRlIG5leHRKc29uRGF0YS5kZWZhdWx0UHJvamVjdDtcclxuICAgICAgICBkZWxldGUgbmV4dEpzb25EYXRhLnRva2VuVXJpO1xyXG4gICAgICAgIGRlbGV0ZSBuZXh0U2VjdXJlSnNvbkRhdGEucHJpdmF0ZUtleTtcclxuICAgICAgICBvbk9wdGlvbnNDaGFuZ2UoX19hc3NpZ24oX19hc3NpZ24oe30sIG9wdGlvbnMpLCB7IHNlY3VyZUpzb25EYXRhOiBuZXh0U2VjdXJlSnNvbkRhdGEsIGpzb25EYXRhOiBuZXh0SnNvbkRhdGEgfSkpO1xyXG4gICAgfTtcclxuICAgIHZhciBvbkpXVEZvcm1DaGFuZ2UgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBkYXRhLm9uVXBkYXRlRGF0YXNvdXJjZUpzb25EYXRhT3B0aW9uKHByb3BzLCBrZXkpOyB9O1xyXG4gICAgcmV0dXJuIChSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uRnJhZ21lbnQsIG51bGwsXHJcbiAgICAgICAgUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuRmllbGRTZXQsIHsgbGFiZWw6IFwiQXV0aGVudGljYXRpb25cIiB9LFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5GaWVsZCwgeyBsYWJlbDogXCJBdXRoZW50aWNhdGlvbiB0eXBlXCIgfSxcclxuICAgICAgICAgICAgICAgIFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHVpLlJhZGlvQnV0dG9uR3JvdXAsIHsgb3B0aW9uczogR09PR0xFX0FVVEhfVFlQRV9PUFRJT05TLCB2YWx1ZToganNvbkRhdGEuYXV0aGVudGljYXRpb25UeXBlIHx8IGV4cG9ydHMuR29vZ2xlQXV0aFR5cGUuSldULCBvbkNoYW5nZTogb25BdXRoVHlwZUNoYW5nZSB9KSkpLFxyXG4gICAgICAgIGlzSldUICYmIChSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh1aS5GaWVsZFNldCwgeyBsYWJlbDogXCJKV1QgS2V5IERldGFpbHNcIiB9LFxyXG4gICAgICAgICAgICBoYXNKV1RDb25maWd1cmVkID8gKFJlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KEpXVEZvcm0sIHsgb3B0aW9uczogb3B0aW9ucy5qc29uRGF0YSwgb25SZXNldDogb25SZXNldEFwaUtleSwgb25DaGFuZ2U6IG9uSldURm9ybUNoYW5nZSB9KSkgOiAoUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoSldUQ29uZmlnRWRpdG9yLCB7IG9uQ2hhbmdlOiBmdW5jdGlvbiAoand0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25PcHRpb25zQ2hhbmdlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBzZWN1cmVKc29uRmllbGRzOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc2VjdXJlSnNvbkZpZWxkcyksIHsgcHJpdmF0ZUtleTogdHJ1ZSB9KSwgc2VjdXJlSnNvbkRhdGE6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBzZWN1cmVKc29uRGF0YSksIHsgcHJpdmF0ZUtleTogand0LnByaXZhdGVLZXkgfSksIGpzb25EYXRhOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwganNvbkRhdGEpLCB7IGNsaWVudEVtYWlsOiBqd3QuY2xpZW50RW1haWwsIGRlZmF1bHRQcm9qZWN0OiBqd3QucHJvamVjdElkLCB0b2tlblVyaTogand0LnRva2VuVXJpIH0pIH0pKTtcclxuICAgICAgICAgICAgICAgIH0gfSkpLFxyXG4gICAgICAgICAgICAnICcpKSxcclxuICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJncmFmYW5hLWluZm8tYm94XCIsIHN0eWxlOiB7IG1hcmdpblRvcDogJzE2cHgnIH0sIFwiZGF0YS10ZXN0aWRcIjogVEVTVF9JRFMuaGVscEJveCB9LFxyXG4gICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcclxuICAgICAgICAgICAgICAgIFwiRG9uXFx1MjAxOXQga25vdyBob3cgdG8gZ2V0IGEgc2VydmljZSBhY2NvdW50IGtleSBmaWxlIG9yIGNyZWF0ZSBhIHNlcnZpY2UgYWNjb3VudD8gUmVhZCBtb3JlXCIsXHJcbiAgICAgICAgICAgICAgICAnICcsXHJcbiAgICAgICAgICAgICAgICBSZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImFcIiwgeyBjbGFzc05hbWU6IFwiZXh0ZXJuYWwtbGlua1wiLCB0YXJnZXQ6IFwiX2JsYW5rXCIsIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIsIGhyZWY6IFwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9kb2NzL2dyYWZhbmEvbGF0ZXN0L2RhdGFzb3VyY2VzL2dvb2dsZS1jbG91ZC1tb25pdG9yaW5nL2dvb2dsZS1hdXRoZW50aWNhdGlvbi9cIiB9LCBcImluIHRoZSBkb2N1bWVudGF0aW9uLlwiKSkpLFxyXG4gICAgICAgICFpc0pXVCAmJiAoUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQodWkuQWxlcnQsIHsgdGl0bGU6IFwiXCIsIHNldmVyaXR5OiBcImluZm9cIiB9LCBcIlZlcmlmeSBHQ0UgZGVmYXVsdCBzZXJ2aWNlIGFjY291bnQgYnkgY2xpY2tpbmcgU2F2ZSAmIFRlc3RcIikpKSk7XHJcbn07XG5cbmV4cG9ydHMuQ29ubmVjdGlvbkNvbmZpZyA9IENvbm5lY3Rpb25Db25maWc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5kZXZlbG9wbWVudC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvaW5kZXgucHJvZHVjdGlvbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvaW5kZXguZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJuYW1lcyI6WyJpc1N0cmluZyIsIkFMSUdOTUVOVF9QRVJJT0RTIiwiU0VMRUNUT1JTIiwiZXh0cmFjdFNlcnZpY2VzRnJvbU1ldHJpY0Rlc2NyaXB0b3JzIiwiZ2V0QWdncmVnYXRpb25PcHRpb25zQnlNZXRyaWMiLCJnZXRBbGlnbm1lbnRPcHRpb25zQnlNZXRyaWMiLCJnZXRMYWJlbEtleXMiLCJnZXRNZXRyaWNUeXBlc0J5U2VydmljZSIsIk1ldHJpY0ZpbmRRdWVyeVR5cGVzIiwiQ2xvdWRNb25pdG9yaW5nTWV0cmljRmluZFF1ZXJ5IiwiY29uc3RydWN0b3IiLCJkYXRhc291cmNlIiwiZXhlY3V0ZSIsInF1ZXJ5IiwicHJvamVjdE5hbWUiLCJnZXREZWZhdWx0UHJvamVjdCIsInNlbGVjdGVkUXVlcnlUeXBlIiwiUHJvamVjdHMiLCJoYW5kbGVQcm9qZWN0c1F1ZXJ5IiwiU2VydmljZXMiLCJoYW5kbGVTZXJ2aWNlUXVlcnkiLCJNZXRyaWNUeXBlcyIsImhhbmRsZU1ldHJpY1R5cGVzUXVlcnkiLCJMYWJlbEtleXMiLCJoYW5kbGVMYWJlbEtleXNRdWVyeSIsIkxhYmVsVmFsdWVzIiwiaGFuZGxlTGFiZWxWYWx1ZXNRdWVyeSIsIlJlc291cmNlVHlwZXMiLCJoYW5kbGVSZXNvdXJjZVR5cGVRdWVyeSIsIkFsaWduZXJzIiwiaGFuZGxlQWxpZ25lcnNRdWVyeSIsIkFsaWdubWVudFBlcmlvZHMiLCJoYW5kbGVBbGlnbm1lbnRQZXJpb2RRdWVyeSIsIkFnZ3JlZ2F0aW9ucyIsImhhbmRsZUFnZ3JlZ2F0aW9uUXVlcnkiLCJTTE9TZXJ2aWNlcyIsImhhbmRsZVNMT1NlcnZpY2VzUXVlcnkiLCJTTE8iLCJoYW5kbGVTTE9RdWVyeSIsIlNlbGVjdG9ycyIsImhhbmRsZVNlbGVjdG9yUXVlcnkiLCJlcnJvciIsImNvbnNvbGUiLCJwcm9qZWN0cyIsImdldFByb2plY3RzIiwibWFwIiwicyIsInRleHQiLCJsYWJlbCIsInZhbHVlIiwiZXhwYW5kYWJsZSIsIm1ldHJpY0Rlc2NyaXB0b3JzIiwiZ2V0TWV0cmljVHlwZXMiLCJzZXJ2aWNlcyIsInNlcnZpY2VTaG9ydE5hbWUiLCJzZXJ2aWNlIiwic2VsZWN0ZWRTZXJ2aWNlIiwidGVtcGxhdGVTcnYiLCJyZXBsYWNlIiwiZGlzcGxheU5hbWUiLCJ0eXBlIiwic2VsZWN0ZWRNZXRyaWNUeXBlIiwibGFiZWxLZXlzIiwidG9GaW5kUXVlcnlSZXN1bHQiLCJsYWJlbEtleSIsInJlZklkIiwibGFiZWxzIiwiZ2V0TGFiZWxzIiwiZ3JvdXBCeXMiLCJjcm9zc1Nlcmllc1JlZHVjZXIiLCJpbnRlcnBvbGF0ZWRLZXkiLCJ2YWx1ZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImRlc2NyaXB0b3IiLCJmaW5kIiwibSIsInZhbHVlVHlwZSIsIm1ldHJpY0tpbmQiLCJnZXRTTE9TZXJ2aWNlcyIsInNlbGVjdGVkU0xPU2VydmljZSIsInNsb3MiLCJnZXRTZXJ2aWNlTGV2ZWxPYmplY3RpdmVzIiwieCIsIkNsb3VkTW9uaXRvcmluZ0Fubm90YXRpb25zUXVlcnlDdHJsIiwiJHNjb3BlIiwiYW5ub3RhdGlvbiIsImN0cmwiLCJ0YXJnZXQiLCJvblF1ZXJ5Q2hhbmdlIiwiYmluZCIsIk9iamVjdCIsImFzc2lnbiIsIlJlYWN0IiwidXNlTWVtbyIsIlNlbGVjdCIsIlF1ZXJ5RWRpdG9yRmllbGQiLCJBZ2dyZWdhdGlvbiIsInByb3BzIiwiYWdnT3B0aW9ucyIsInVzZUFnZ3JlZ2F0aW9uT3B0aW9uc0J5TWV0cmljIiwic2VsZWN0ZWQiLCJ1c2VTZWxlY3RlZEZyb21PcHRpb25zIiwib25DaGFuZ2UiLCJvcHRpb25zIiwidGVtcGxhdGVWYXJpYWJsZU9wdGlvbnMiLCJleHBhbmRlZCIsIm1ldHJpY0Rlc2NyaXB0b3IiLCJhIiwiYWxsT3B0aW9ucyIsImRlYm91bmNlIiwidXNlU3RhdGUiLCJJbnB1dCIsIklOUFVUX1dJRFRIIiwiUXVlcnlFZGl0b3JSb3ciLCJBbGlhc0J5IiwiYWxpYXMiLCJzZXRBbGlhcyIsInByb3BhZ2F0ZU9uQ2hhbmdlIiwiZSIsIlNFTEVDVF9XSURUSCIsIkFsaWdubWVudEZ1bmN0aW9uIiwiUGVyaW9kU2VsZWN0IiwiQWxpZ25tZW50UGVyaW9kTGFiZWwiLCJBbGlnbm1lbnQiLCJjdXN0b21NZXRhRGF0YSIsImFsaWdubWVudFBlcmlvZCIsInBlcmlvZCIsImdldEFsaWdubWVudFBpY2tlckRhdGEiLCJpbnB1dElkIiwicGVyU2VyaWVzQWxpZ25lciIsInBzYSIsInByZXByb2Nlc3NvciIsImFsaWduT3B0aW9ucyIsInJhbmdlVXRpbCIsIkFMSUdOTUVOVFMiLCJmb3JtYXRBbGlnbm1lbnRUZXh0IiwiYWxpZ25tZW50IiwiYXAiLCJzZWNvbmRzIiwicGFyc2VJbnQiLCJobXMiLCJzZWNvbmRzVG9IbXMiLCJBbm5vdGF0aW9uc0hlbHAiLCJjc3MiLCJQdXJlQ29tcG9uZW50IiwiQ2xvdWRNb25pdG9yaW5nQ2hlYXRTaGVldCIsInJlbmRlciIsIkNvbm5lY3Rpb25Db25maWciLCJDb25maWdFZGl0b3IiLCJIb3Jpem9udGFsR3JvdXAiLCJJbmxpbmVGaWVsZCIsIklubGluZUxhYmVsIiwiSU5ORVJfTEFCRUxfV0lEVEgiLCJMQUJFTF9XSURUSCIsIlZhcmlhYmxlUXVlcnlGaWVsZCIsImFsbG93Q3VzdG9tVmFsdWUiLCJjaGlsZHJlbiIsInRvb2x0aXAiLCJmaWxsQ29tcG9uZW50Iiwibm9GaWxsRW5kIiwibGFiZWxXaWR0aCIsImh0bWxGb3IiLCJyZXN0IiwiU3dpdGNoIiwiR1JBUEhfUEVSSU9EUyIsIkdyYXBoUGVyaW9kIiwiZ3JhcGhQZXJpb2QiLCJ2YXJpYWJsZU9wdGlvbkdyb3VwIiwiY3VycmVudFRhcmdldCIsImNoZWNrZWQiLCJNdWx0aVNlbGVjdCIsIlNZU1RFTV9MQUJFTFMiLCJsYWJlbHNUb0dyb3VwZWRPcHRpb25zIiwiR3JvdXBCeSIsIm8iLCJmbGF0dGVuIiwidXNlQ2FsbGJhY2siLCJ0b09wdGlvbiIsIkJ1dHRvbiIsIlZlcnRpY2FsR3JvdXAiLCJzdHJpbmdBcnJheVRvRmlsdGVycyIsIm9wZXJhdG9ycyIsIkZpbHRlckJ1dHRvbiIsImZvcndhcmRSZWYiLCJyZWYiLCJPcGVyYXRvckJ1dHRvbiIsIkxhYmVsRmlsdGVyIiwiZmlsdGVycyIsImZpbHRlckFycmF5Iiwia2V5cyIsImZpbHRlcnNUb1N0cmluZ0FycmF5Iiwic3RyQXJyIiwia2V5Iiwib3BlcmF0b3IiLCJjb25kaXRpb24iLCJzbGljZSIsImxlbmd0aCIsIkFkZEZpbHRlciIsImluZGV4Iiwia2V5UHJlc2VudCIsInNvbWUiLCJvcCIsIm9wcCIsInB1c2giLCJ2YWx1ZU9wdGlvbnMiLCJ2YWx1ZVByZXNlbnQiLCJ2IiwiZiIsImkiLCJmaWx0ZXIiLCJfIiwiZXZlcnkiLCJUZXh0QXJlYSIsIk1RTFF1ZXJ5RWRpdG9yIiwib25SdW5RdWVyeSIsIm9uS2V5RG93biIsImV2ZW50Iiwic2hpZnRLZXkiLCJjdHJsS2V5IiwicHJldmVudERlZmF1bHQiLCJ1c2VFZmZlY3QiLCJBbGlnbm1lbnRUeXBlcyIsIkVkaXRvck1vZGUiLCJNZXRyaWNLaW5kIiwiUHJlcHJvY2Vzc29yVHlwZSIsIlZhbHVlVHlwZXMiLCJQcm9qZWN0IiwiVmlzdWFsTWV0cmljUXVlcnlFZGl0b3IiLCJkZWZhdWx0U3RhdGUiLCJkZWZhdWx0UXVlcnkiLCJkYXRhU291cmNlIiwiZWRpdG9yTW9kZSIsIlZpc3VhbCIsIm1ldHJpY1R5cGUiLCJHQVVHRSIsIkFMSUdOX01FQU4iLCJhbGlhc0J5IiwiTm9uZSIsIkVkaXRvciIsInN0YXRlIiwic2V0U3RhdGUiLCJ0aGVuIiwicHJldlN0YXRlIiwibWV0cmljUXVlcnkiLCJvbk1ldHJpY1R5cGVDaGFuZ2UiLCJESVNUUklCVVRJT04iLCJSYXRlIiwiTVFMIiwicSIsIk1ldHJpY1F1ZXJ5RWRpdG9yIiwibWVtbyIsInN0YXJ0Q2FzZSIsInVuaXFCeSIsImdldFNlbGVjdFN0eWxlcyIsInVzZVN0eWxlczIiLCJ1c2VUaGVtZTIiLCJNZXRyaWNzIiwibWV0cmljcyIsIm1ldHJpYyIsInRoZW1lIiwic2VsZWN0U3R5bGVzIiwiY3VzdG9tU3R5bGUiLCJnZXRTdHlsZXMiLCJnZXRTZWxlY3RlZE1ldHJpY0Rlc2NyaXB0b3IiLCJtZCIsImdldE1ldHJpY3NMaXN0Iiwic2VsZWN0ZWRNZXRyaWNEZXNjcmlwdG9yIiwibWV0cmljc0J5U2VydmljZSIsImNvbXBvbmVudCIsIm9wdGlvbkNvbXBvbmVudCIsIm9wdGlvbkRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24iLCJsb2FkTWV0cmljRGVzY3JpcHRvcnMiLCJnZXRTZXJ2aWNlc0xpc3QiLCJvblNlcnZpY2VDaGFuZ2UiLCJleHRyYSIsImNvbG9ycyIsInNlY29uZGFyeSIsImN1cnJlbnQiLCJzZWxlY3RXaWR0aCIsImRpc2FibGVkIiwiYWxpZ21lbnRQZXJpb2RzIiwidmlzaWJsZU9wdGlvbnMiLCJoaWRkZW4iLCJSYWRpb0J1dHRvbkdyb3VwIiwiTk9ORV9PUFRJT04iLCJQcmVwcm9jZXNzb3IiLCJ1c2VPcHRpb25zIiwiQ1VNVUxBVElWRSIsIkRlbHRhIiwic2V0UHJvamVjdHMiLCJwcm9qZWN0c1dpdGhUZW1wbGF0ZVZhcmlhYmxlcyIsIlFVRVJZX1RZUEVTIiwiUXVlcnlUeXBlIiwiZGVmYXVsdFNMT1F1ZXJ5IiwiU0xPUXVlcnlFZGl0b3IiLCJRdWVyeUVkaXRvciIsIlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQiLCJxdWVyeVR5cGUiLCJNRVRSSUNTIiwiZW5zdXJlR0NFRGVmYXVsdFByb2plY3QiLCJwcm9wIiwic2xvUXVlcnkiLCJtZXRhIiwiZGF0YSIsInNlcmllcyIsImN1c3RvbSIsImdldFZhcmlhYmxlcyIsInNldFNMT3MiLCJzZXJ2aWNlSWQiLCJzbG9JZHMiLCJzbG9JZCIsInNsb05hbWUiLCJzbG8iLCJnb2FsIiwiU2VsZWN0b3IiLCJTZXJ2aWNlIiwic2VsZWN0b3JOYW1lIiwic2VydmljZU5hbWUiLCJzZXRTZXJ2aWNlcyIsImdldFRlbXBsYXRlU3J2IiwiQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVRdWVyeUVkaXRvciIsInF1ZXJ5VHlwZXMiLCJtZXRyaWNUeXBlcyIsInNsb1NlcnZpY2VzIiwibG9hZGluZyIsInF1ZXJ5TW9kZWwiLCJkZWZhdWx0cyIsImNvbXBvbmVudERpZE1vdW50Iiwib25Qcm9wc0NoYW5nZSIsIm9uUXVlcnlUeXBlQ2hhbmdlIiwib25Qcm9qZWN0Q2hhbmdlIiwib25MYWJlbEtleUNoYW5nZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInNlbGVjUXVlcnlUeXBlQ2hhbmdlZCIsInNlbGVjdFNMT1NlcnZpY2VDaGFuZ2VkIiwicmVzdWx0IiwibCIsInJlbmRlclF1ZXJ5VHlwZVN3aXRjaCIsIm5hbWUiLCJHb29nbGVBdXRoVHlwZSIsIkFVVEhfVFlQRVMiLCJKV1QiLCJHQ0UiLCJ2YWx1ZVR5cGVzIiwiSU5UNjQiLCJET1VCTEUiLCJNT05FWSIsIm1ldHJpY0tpbmRzIiwiREVMVEEiLCJTVFJJTkciLCJWQUxVRV9UWVBFX1VOU1BFQ0lGSUVEIiwiQk9PTCIsIkFHR1JFR0FUSU9OUyIsIk1FVFJJQ19LSU5EX1VOU1BFQ0lGSUVEIiwiY2h1bmsiLCJpc0FycmF5IiwiZnJvbSIsImxhc3RWYWx1ZUZyb20iLCJvZiIsIm1lcmdlTWFwIiwiRGF0YVNvdXJjZVdpdGhCYWNrZW5kIiwiZ2V0QmFja2VuZFNydiIsInRvRGF0YVF1ZXJ5UmVzcG9uc2UiLCJnZXRUaW1lU3J2IiwiQ2xvdWRNb25pdG9yaW5nVmFyaWFibGVTdXBwb3J0IiwiQ2xvdWRNb25pdG9yaW5nRGF0YXNvdXJjZSIsImluc3RhbmNlU2V0dGluZ3MiLCJ0aW1lU3J2IiwiYXV0aGVudGljYXRpb25UeXBlIiwianNvbkRhdGEiLCJ2YXJpYWJsZXMiLCJpbnRlcnZhbE1zIiwicmVxdWVzdCIsInRhcmdldHMiLCJ0IiwibWlncmF0ZVF1ZXJ5IiwiYW5ub3RhdGlvblF1ZXJ5IiwicXVlcmllcyIsImdldFJlZiIsInZpZXciLCJzY29wZWRWYXJzIiwidGl0bGUiLCJpbnRlcnBvbGF0ZUZpbHRlcnMiLCJmZXRjaCIsInVybCIsIm1ldGhvZCIsInJhbmdlIiwidmFsdWVPZiIsInRvU3RyaW5nIiwidG8iLCJwaXBlIiwiZGF0YVF1ZXJ5UmVzcG9uc2UiLCJkZiIsImoiLCJmaWVsZHMiLCJ0aW1lIiwiRGF0ZSIsInBhcnNlIiwiZ2V0IiwidGFncyIsImFwcGx5VGVtcGxhdGVWYXJpYWJsZXMiLCJpbnRlcnBvbGF0ZVByb3BzIiwiaW50ZXJwb2xhdGVHcm91cEJ5cyIsImFnZ3JlZ2F0aW9uIiwidGltZVJhbmdlIiwicmVzdWx0cyIsInAiLCJyZWR1Y2UiLCJhY2MiLCJTZXQiLCJhZGQiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJBcnJheSIsImdldEdDRURlZmF1bHRQcm9qZWN0IiwiZ2V0UmVzb3VyY2UiLCJkZWZhdWx0UHJvamVjdCIsImdjZURlZmF1bHRQcm9qZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJoaWRlIiwib2JqZWN0IiwiZmlsdGVyUXVlcnkiLCJpbnRlcnBvbGF0ZVZhcmlhYmxlc0luUXVlcmllcyIsImNvbXBsZXRlRmlsdGVyIiwiaXRlbSIsImpvaW4iLCJpbnRlcnBvbGF0ZWRHcm91cEJ5cyIsImZvckVhY2giLCJnYiIsImludGVycG9sYXRlZCIsInNwbGl0IiwiY29uY2F0IiwiaW5pdGlhbCIsImludGVycG9sYXRlZE1ldHJpY1R5cGUiLCJtZXRyaWNUeXBlRXhpc3RJbkFycmF5IiwibWV0cmljVHlwZUJ5U2VydmljZSIsIm1ldHJpY1ZhbHVlVHlwZSIsImluZGV4T2YiLCJvcHRpb24iLCJncm91cHMiLCJjdXJyIiwiYXJyIiwiZ3JvdXAiLCJEYXRhU291cmNlUGx1Z2luIiwicGx1Z2luIiwic2V0UXVlcnlFZGl0b3JIZWxwIiwic2V0UXVlcnlFZGl0b3IiLCJzZXRDb25maWdFZGl0b3IiLCJzZXRBbm5vdGF0aW9uUXVlcnlDdHJsIiwic2V0VmFyaWFibGVRdWVyeUVkaXRvciIsImF1dGhUeXBlcyIsIkN1c3RvbVZhcmlhYmxlU3VwcG9ydCIsIm1ldHJpY0ZpbmRRdWVyeSIsImV4ZWN1dGVPYnNlcnZhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==