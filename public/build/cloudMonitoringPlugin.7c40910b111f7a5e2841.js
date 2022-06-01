"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[3549],{

/***/ "./public/app/plugins/datasource/cloud-monitoring/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "plugin": () => (/* binding */ module_plugin)
});

// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloud-monitoring/annotations_query_ctrl.ts
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
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloud-monitoring/components/CloudMonitoringCheatSheet.tsx
var _h, _p, _code, _br, _code2, _br2, _br3, _label, _br4, _li, _li2, _li3, _li4, _li5, _li6, _li7, _li8, _li9, _li10, _li11, _li12;





class CloudMonitoringCheatSheet extends react.PureComponent {
  render() {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        children: "Cloud Monitoring alias patterns"
      })), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [_p || (_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "Format the legend keys any way you want by using alias patterns. Format the legend keys any way you want by using alias patterns."
        })), "Example:", _code || (_code = /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
          children: `${'{{metric.name}} - {{metric.label.instance_name}}'}`
        })), _br || (_br = /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})), "Result: \xA0\xA0", _code2 || (_code2 = /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
          children: "cpu/usage_time - server1-europe-west-1"
        })), _br2 || (_br2 = /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})), _br3 || (_br3 = /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})), _label || (_label = /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
          children: "Patterns"
        })), _br4 || (_br4 = /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})), /*#__PURE__*/(0,jsx_runtime.jsxs)("ul", {
          className: emotion_css_esm.css`
              list-style: none;
            `,
          children: [_li || (_li = /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("code", {
              children: `${'{{metric.type}}'}`
            }), " = metric type e.g. compute.googleapis.com/instance/cpu/usage_time"]
          })), _li2 || (_li2 = /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("code", {
              children: `${'{{metric.name}}'}`
            }), " = name part of metric e.g. instance/cpu/usage_time"]
          })), _li3 || (_li3 = /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("code", {
              children: `${'{{metric.service}}'}`
            }), " = service part of metric e.g. compute"]
          })), _li4 || (_li4 = /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("code", {
              children: `${'{{metric.label.label_name}}'}`
            }), " = Metric label metadata e.g. metric.label.instance_name"]
          })), _li5 || (_li5 = /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("code", {
              children: `${'{{resource.label.label_name}}'}`
            }), " = Resource label metadata e.g. resource.label.zone"]
          })), _li6 || (_li6 = /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("code", {
              children: `${'{{metadata.system_labels.name}}'}`
            }), " = Meta data system labels e.g. metadata.system_labels.name. For this to work, the needs to be included in the group by"]
          })), _li7 || (_li7 = /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("code", {
              children: `${'{{metadata.user_labels.name}}'}`
            }), " = Meta data user labels e.g. metadata.user_labels.name. For this to work, the needs to be included in the group by"]
          })), _li8 || (_li8 = /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("code", {
              children: `${'{{bucket}}'}`
            }), " = bucket boundary for distribution metrics when using a heatmap in Grafana"]
          })), _li9 || (_li9 = /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("code", {
              children: `${'{{project}}'}`
            }), " = The project name that was specified in the query editor"]
          })), _li10 || (_li10 = /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("code", {
              children: `${'{{service}}'}`
            }), " = The service id that was specified in the SLO query editor"]
          })), _li11 || (_li11 = /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("code", {
              children: `${'{{slo}}'}`
            }), " = The SLO id that was specified in the SLO query editor"]
          })), _li12 || (_li12 = /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("code", {
              children: `${'{{selector}}'}`
            }), " = The Selector function that was specified in the SLO query editor"]
          }))]
        })]
      })]
    });
  }

}
// EXTERNAL MODULE: ./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js
var google_sdk = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloud-monitoring/components/ConfigEditor/ConfigEditor.tsx




class ConfigEditor extends react.PureComponent {
  render() {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(google_sdk.ConnectionConfig, Object.assign({}, this.props))
    });
  }

}
// EXTERNAL MODULE: ./public/app/plugins/datasource/cloud-monitoring/components/QueryEditor.tsx
var QueryEditor = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/QueryEditor.tsx");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/cloud-monitoring/functions.ts
var functions = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/cloud-monitoring/types.ts
var types = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/cloud-monitoring/components/index.ts + 14 modules
var components = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloud-monitoring/components/VariableQueryEditor.tsx
var _div;

const _excluded = ["metricDescriptors", "labels", "metricTypes", "services"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function VariableQueryEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class CloudMonitoringVariableQueryEditor extends react.PureComponent {
  constructor(props) {
    super(props);

    VariableQueryEditor_defineProperty(this, "queryTypes", [{
      value: types/* MetricFindQueryTypes.Projects */.Bp.Projects,
      label: 'Projects'
    }, {
      value: types/* MetricFindQueryTypes.Services */.Bp.Services,
      label: 'Services'
    }, {
      value: types/* MetricFindQueryTypes.MetricTypes */.Bp.MetricTypes,
      label: 'Metric Types'
    }, {
      value: types/* MetricFindQueryTypes.LabelKeys */.Bp.LabelKeys,
      label: 'Label Keys'
    }, {
      value: types/* MetricFindQueryTypes.LabelValues */.Bp.LabelValues,
      label: 'Label Values'
    }, {
      value: types/* MetricFindQueryTypes.ResourceTypes */.Bp.ResourceTypes,
      label: 'Resource Types'
    }, {
      value: types/* MetricFindQueryTypes.Aggregations */.Bp.Aggregations,
      label: 'Aggregations'
    }, {
      value: types/* MetricFindQueryTypes.Aligners */.Bp.Aligners,
      label: 'Aligners'
    }, {
      value: types/* MetricFindQueryTypes.AlignmentPeriods */.Bp.AlignmentPeriods,
      label: 'Alignment Periods'
    }, {
      value: types/* MetricFindQueryTypes.Selectors */.Bp.Selectors,
      label: 'Selectors'
    }, {
      value: types/* MetricFindQueryTypes.SLOServices */.Bp.SLOServices,
      label: 'SLO Services'
    }, {
      value: types/* MetricFindQueryTypes.SLO */.Bp.SLO,
      label: 'Service Level Objectives (SLO)'
    }]);

    VariableQueryEditor_defineProperty(this, "defaults", {
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

    VariableQueryEditor_defineProperty(this, "onPropsChange", () => {
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
    const services = (0,functions/* extractServicesFromMetricDescriptors */.qA)(metricDescriptors).map(m => ({
      value: m.service,
      label: m.serviceShortName
    }));
    let selectedService = '';

    if (services.some(s => s.value === (0,grafana_runtime_src.getTemplateSrv)().replace(this.state.selectedService))) {
      selectedService = this.state.selectedService;
    } else if (services && services.length > 0) {
      selectedService = services[0].value;
    }

    const {
      metricTypes,
      selectedMetricType
    } = (0,functions/* getMetricTypes */.FL)(metricDescriptors, this.state.selectedMetricType, (0,grafana_runtime_src.getTemplateSrv)().replace(this.state.selectedMetricType), (0,grafana_runtime_src.getTemplateSrv)().replace(selectedService));
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
    } = (0,functions/* getMetricTypes */.FL)(metricDescriptors, this.state.selectedMetricType, (0,grafana_runtime_src.getTemplateSrv)().replace(this.state.selectedMetricType), (0,grafana_runtime_src.getTemplateSrv)().replace(this.state.selectedService));
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
    } = (0,functions/* getMetricTypes */.FL)(this.state.metricDescriptors, this.state.selectedMetricType, (0,grafana_runtime_src.getTemplateSrv)().replace(this.state.selectedMetricType), (0,grafana_runtime_src.getTemplateSrv)().replace(service));
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

  async getLabels(selectedMetricType, projectName) {
    let selectedQueryType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.state.selectedQueryType;
    let result = {
      labels: this.state.labels,
      labelKey: this.state.labelKey
    };

    if (selectedMetricType && selectedQueryType === types/* MetricFindQueryTypes.LabelValues */.Bp.LabelValues) {
      const labels = await (0,functions/* getLabelKeys */.Qd)(this.props.datasource, selectedMetricType, projectName);
      const labelKey = labels.some(l => l === (0,grafana_runtime_src.getTemplateSrv)().replace(this.state.labelKey)) ? this.state.labelKey : labels[0];
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
      options: (0,grafana_runtime_src.getTemplateSrv)().getVariables().map(v => ({
        value: `$${v.name}`,
        label: `$${v.name}`
      }))
    };

    switch (queryType) {
      case types/* MetricFindQueryTypes.MetricTypes */.Bp.MetricTypes:
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components/* VariableQueryField */.Th, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* VariableQueryField */.Th, {
            value: this.state.selectedService,
            options: [variableOptionGroup, ...this.state.services],
            onChange: value => this.onServiceChange(value),
            label: "Service"
          })]
        });

      case types/* MetricFindQueryTypes.LabelKeys */.Bp.LabelKeys:
      case types/* MetricFindQueryTypes.LabelValues */.Bp.LabelValues:
      case types/* MetricFindQueryTypes.ResourceTypes */.Bp.ResourceTypes:
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components/* VariableQueryField */.Th, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* VariableQueryField */.Th, {
            value: this.state.selectedService,
            options: [variableOptionGroup, ...this.state.services],
            onChange: value => this.onServiceChange(value),
            label: "Service"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* VariableQueryField */.Th, {
            value: this.state.selectedMetricType,
            options: [variableOptionGroup, ...this.state.metricTypes.map(_ref => {
              let {
                value,
                name
              } = _ref;
              return {
                value,
                label: name
              };
            })],
            onChange: value => this.onMetricTypeChange(value),
            label: "Metric Type"
          }), queryType === types/* MetricFindQueryTypes.LabelValues */.Bp.LabelValues && /*#__PURE__*/(0,jsx_runtime.jsx)(components/* VariableQueryField */.Th, {
            value: this.state.labelKey,
            options: [variableOptionGroup, ...this.state.labels.map(l => ({
              value: l,
              label: l
            }))],
            onChange: value => this.onLabelKeyChange(value),
            label: "Label Key"
          })]
        });

      case types/* MetricFindQueryTypes.Aligners */.Bp.Aligners:
      case types/* MetricFindQueryTypes.Aggregations */.Bp.Aggregations:
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components/* VariableQueryField */.Th, {
            value: this.state.selectedService,
            options: [variableOptionGroup, ...this.state.services],
            onChange: value => this.onServiceChange(value),
            label: "Service"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* VariableQueryField */.Th, {
            value: this.state.selectedMetricType,
            options: [variableOptionGroup, ...this.state.metricTypes.map(_ref2 => {
              let {
                value,
                name
              } = _ref2;
              return {
                value,
                label: name
              };
            })],
            onChange: value => this.onMetricTypeChange(value),
            label: "Metric Type"
          })]
        });

      case types/* MetricFindQueryTypes.SLOServices */.Bp.SLOServices:
        return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components/* VariableQueryField */.Th, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          })
        });

      case types/* MetricFindQueryTypes.SLO */.Bp.SLO:
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components/* VariableQueryField */.Th, {
            allowCustomValue: true,
            value: this.state.projectName,
            options: [variableOptionGroup, ...this.state.projects],
            onChange: value => this.onProjectChange(value),
            label: "Project"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(components/* VariableQueryField */.Th, {
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
      return _div || (_div = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "gf-form max-width-21",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "gf-form-label width-10 query-keyword",
          children: "Query Type"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "gf-form-select-wrapper max-width-12",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("select", {
            className: "gf-form-input",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
              children: "Loading..."
            })
          })
        })]
      }));
    }

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components/* VariableQueryField */.Th, {
        value: this.state.selectedQueryType,
        options: this.queryTypes,
        onChange: value => this.onQueryTypeChange(value),
        label: "Query Type"
      }), this.renderQueryTypeSwitch(this.state.selectedQueryType)]
    });
  }

}
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js
var lastValueFrom = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js
var from = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
var mergeMap = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
// EXTERNAL MODULE: ./public/app/features/dashboard/services/TimeSrv.ts + 1 modules
var TimeSrv = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
// EXTERNAL MODULE: ./public/app/features/templating/template_srv.ts + 1 modules
var template_srv = __webpack_require__("./public/app/features/templating/template_srv.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/cloud-monitoring/constants.ts
var constants = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloud-monitoring/CloudMonitoringMetricFindQuery.ts




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
        case types/* MetricFindQueryTypes.Projects */.Bp.Projects:
          return this.handleProjectsQuery();

        case types/* MetricFindQueryTypes.Services */.Bp.Services:
          return this.handleServiceQuery(query);

        case types/* MetricFindQueryTypes.MetricTypes */.Bp.MetricTypes:
          return this.handleMetricTypesQuery(query);

        case types/* MetricFindQueryTypes.LabelKeys */.Bp.LabelKeys:
          return this.handleLabelKeysQuery(query);

        case types/* MetricFindQueryTypes.LabelValues */.Bp.LabelValues:
          return this.handleLabelValuesQuery(query);

        case types/* MetricFindQueryTypes.ResourceTypes */.Bp.ResourceTypes:
          return this.handleResourceTypeQuery(query);

        case types/* MetricFindQueryTypes.Aligners */.Bp.Aligners:
          return this.handleAlignersQuery(query);

        case types/* MetricFindQueryTypes.AlignmentPeriods */.Bp.AlignmentPeriods:
          return this.handleAlignmentPeriodQuery();

        case types/* MetricFindQueryTypes.Aggregations */.Bp.Aggregations:
          return this.handleAggregationQuery(query);

        case types/* MetricFindQueryTypes.SLOServices */.Bp.SLOServices:
          return this.handleSLOServicesQuery(query);

        case types/* MetricFindQueryTypes.SLO */.Bp.SLO:
          return this.handleSLOQuery(query);

        case types/* MetricFindQueryTypes.Selectors */.Bp.Selectors:
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

  async handleServiceQuery(_ref) {
    let {
      projectName
    } = _ref;
    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    const services = (0,functions/* extractServicesFromMetricDescriptors */.qA)(metricDescriptors);
    return services.map(s => ({
      text: s.serviceShortName,
      value: s.service,
      expandable: true
    }));
  }

  async handleMetricTypesQuery(_ref2) {
    let {
      selectedService,
      projectName
    } = _ref2;

    if (!selectedService) {
      return [];
    }

    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    return (0,functions/* getMetricTypesByService */.Qf)(metricDescriptors, this.datasource.templateSrv.replace(selectedService)).map(s => ({
      text: s.displayName,
      value: s.type,
      expandable: true
    }));
  }

  async handleLabelKeysQuery(_ref3) {
    let {
      selectedMetricType,
      projectName
    } = _ref3;

    if (!selectedMetricType) {
      return [];
    }

    const labelKeys = await (0,functions/* getLabelKeys */.Qd)(this.datasource, selectedMetricType, projectName);
    return labelKeys.map(this.toFindQueryResult);
  }

  async handleLabelValuesQuery(_ref4) {
    let {
      selectedMetricType,
      labelKey,
      projectName
    } = _ref4;

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

  async handleResourceTypeQuery(_ref5) {
    var _labels$resourceType, _labels$resourceType2;

    let {
      selectedMetricType,
      projectName
    } = _ref5;

    if (!selectedMetricType) {
      return [];
    }

    const refId = 'handleResourceTypeQueryQueryType';
    const labels = await this.datasource.getLabels(selectedMetricType, refId, projectName);
    return (_labels$resourceType = (_labels$resourceType2 = labels['resource.type']) === null || _labels$resourceType2 === void 0 ? void 0 : _labels$resourceType2.map(this.toFindQueryResult)) !== null && _labels$resourceType !== void 0 ? _labels$resourceType : [];
  }

  async handleAlignersQuery(_ref6) {
    let {
      selectedMetricType,
      projectName
    } = _ref6;

    if (!selectedMetricType) {
      return [];
    }

    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    const descriptor = metricDescriptors.find(m => m.type === this.datasource.templateSrv.replace(selectedMetricType));

    if (!descriptor) {
      return [];
    }

    return (0,functions/* getAlignmentOptionsByMetric */.oU)(descriptor.valueType, descriptor.metricKind).map(this.toFindQueryResult);
  }

  async handleAggregationQuery(_ref7) {
    let {
      selectedMetricType,
      projectName
    } = _ref7;

    if (!selectedMetricType) {
      return [];
    }

    const metricDescriptors = await this.datasource.getMetricTypes(projectName);
    const descriptor = metricDescriptors.find(m => m.type === this.datasource.templateSrv.replace(selectedMetricType));

    if (!descriptor) {
      return [];
    }

    return (0,functions/* getAggregationOptionsByMetric */.A_)(descriptor.valueType, descriptor.metricKind).map(this.toFindQueryResult);
  }

  async handleSLOServicesQuery(_ref8) {
    let {
      projectName
    } = _ref8;
    const services = await this.datasource.getSLOServices(projectName);
    return services.map(this.toFindQueryResult);
  }

  async handleSLOQuery(_ref9) {
    let {
      selectedSLOService,
      projectName
    } = _ref9;
    const slos = await this.datasource.getServiceLevelObjectives(projectName, selectedSLOService);
    return slos.map(this.toFindQueryResult);
  }

  async handleSelectorQuery() {
    return constants/* SELECTORS.map */.IR.map(this.toFindQueryResult);
  }

  handleAlignmentPeriodQuery() {
    return constants/* ALIGNMENT_PERIODS.map */.dD.map(this.toFindQueryResult);
  }

  toFindQueryResult(x) {
    return (0,lodash.isString)(x) ? {
      text: x,
      expandable: true
    } : Object.assign({}, x, {
      expandable: true
    });
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloud-monitoring/variables.ts
function variables_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class CloudMonitoringVariableSupport extends src.CustomVariableSupport {
  constructor(datasource) {
    super();
    this.datasource = datasource;

    variables_defineProperty(this, "metricFindQuery", void 0);

    variables_defineProperty(this, "editor", CloudMonitoringVariableQueryEditor);

    this.datasource = datasource;
    this.metricFindQuery = new CloudMonitoringMetricFindQuery(datasource);
    this.query = this.query.bind(this);
  }

  query(request) {
    const executeObservable = (0,from/* from */.D)(this.metricFindQuery.execute(request.targets[0]));
    return (0,from/* from */.D)(this.datasource.ensureGCEDefaultProject()).pipe((0,mergeMap/* mergeMap */.z)(() => executeObservable), (0,map/* map */.U)(data => ({
      data
    })));
  }

}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloud-monitoring/datasource.ts
const datasource_excluded = ["hide", "refId", "datasource", "key", "queryType", "maxLines", "metric", "intervalMs", "type"];

function datasource_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function datasource_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class CloudMonitoringDatasource extends grafana_runtime_src.DataSourceWithBackend {
  constructor(instanceSettings) {
    let templateSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,template_srv/* getTemplateSrv */.J)();
    let timeSrv = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0,TimeSrv/* getTimeSrv */.$t)();
    super(instanceSettings);
    this.instanceSettings = instanceSettings;
    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;

    datasource_defineProperty(this, "authenticationType", void 0);

    datasource_defineProperty(this, "intervalMs", void 0);

    this.instanceSettings = instanceSettings;
    this.templateSrv = templateSrv;
    this.timeSrv = timeSrv;
    this.authenticationType = instanceSettings.jsonData.authenticationType || 'jwt';
    this.variables = new CloudMonitoringVariableSupport(this);
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
    return (0,lastValueFrom/* lastValueFrom */.n)((0,grafana_runtime_src.getBackendSrv)().fetch({
      url: '/api/ds/query',
      method: 'POST',
      data: {
        from: options.range.from.valueOf().toString(),
        to: options.range.to.valueOf().toString(),
        queries
      }
    }).pipe((0,map/* map */.U)(_ref => {
      let {
        data
      } = _ref;
      const dataQueryResponse = (0,grafana_runtime_src.toDataQueryResponse)({
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

  applyTemplateVariables(_ref2, scopedVars) {
    let {
      metricQuery,
      refId,
      queryType,
      sloQuery
    } = _ref2;
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
        queryType: types/* QueryType.METRICS */.xL.METRICS,
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
      return (0,lastValueFrom/* lastValueFrom */.n)((0,of.of)({
        results: []
      }));
    }

    return (0,lastValueFrom/* lastValueFrom */.n)((0,from/* from */.D)(this.ensureGCEDefaultProject()).pipe((0,mergeMap/* mergeMap */.z)(() => {
      return (0,grafana_runtime_src.getBackendSrv)().fetch({
        url: '/api/ds/query',
        method: 'POST',
        data: {
          from: options.range.from.valueOf().toString(),
          to: options.range.to.valueOf().toString(),
          queries
        }
      });
    }), (0,map/* map */.U)(_ref3 => {
      let {
        data
      } = _ref3;
      const dataQueryResponse = (0,grafana_runtime_src.toDataQueryResponse)({
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
      const _ref4 = query,
            {
        hide,
        refId,
        intervalMs,
        type
      } = _ref4,
            rest = datasource_objectWithoutPropertiesLoose(_ref4, datasource_excluded);

      return {
        refId,
        intervalMs,
        type,
        hide,
        queryType: types/* QueryType.METRICS */.xL.METRICS,
        metricQuery: Object.assign({}, rest, {
          view: rest.view || 'FULL'
        })
      };
    }

    return query;
  }

  interpolateProps(object) {
    let scopedVars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Object.entries(object).reduce((acc, _ref5) => {
      let [key, value] = _ref5;
      return Object.assign({}, acc, {
        [key]: value && (0,lodash.isString)(value) ? this.templateSrv.replace(value, scopedVars) : value
      });
    }, {});
  }

  filterQuery(query) {
    if (query.hide) {
      return false;
    }

    if (query.queryType && query.queryType === types/* QueryType.SLO */.xL.SLO && query.sloQuery) {
      const {
        selectorName,
        serviceId,
        sloId,
        projectName
      } = query.sloQuery;
      return !!selectorName && !!serviceId && !!sloId && !!projectName;
    }

    if (query.queryType && query.queryType === types/* QueryType.METRICS */.xL.METRICS && query.metricQuery.editorMode === types/* EditorMode.MQL */.je.MQL) {
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
    const completeFilter = (0,lodash.chunk)(filters, 4).map(_ref6 => {
      let [key, operator, value, condition] = _ref6;
      return Object.assign({
        key,
        operator,
        value
      }, condition && {
        condition
      });
    }).filter(item => item.value);
    const filterArray = (0,lodash.flatten)(completeFilter.map(_ref7 => {
      let {
        key,
        operator,
        value,
        condition
      } = _ref7;
      return [this.templateSrv.replace(key, scopedVars || {}), operator, this.templateSrv.replace(value, scopedVars || {}, value => {
        return (0,lodash.isArray)(value) && value.length ? `(${value.join('|')})` : value;
      }), ...(condition ? [condition] : [])];
    }));
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
;// CONCATENATED MODULE: ./public/app/plugins/datasource/cloud-monitoring/module.ts







const module_plugin = new src.DataSourcePlugin(CloudMonitoringDatasource).setQueryEditorHelp(CloudMonitoringCheatSheet).setQueryEditor(QueryEditor/* QueryEditor */.W).setConfigEditor(ConfigEditor).setAnnotationQueryCtrl(CloudMonitoringAnnotationsQueryCtrl).setVariableQueryEditor(CloudMonitoringVariableQueryEditor);

/***/ })

}]);