(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[8440],{

 "./public/app/plugins/datasource/cloud-monitoring/components/MQLQueryEditor.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "a": () => ( MQLQueryEditor)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




function MQLQueryEditor(_ref) {
  let {
    query,
    onChange,
    onRunQuery
  } = _ref;

  const onKeyDown = event => {
    if (event.key === 'Enter' && (event.shiftKey || event.ctrlKey)) {
      event.preventDefault();
      onRunQuery();
    }
  };

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, {
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

 }),

 "./public/app/plugins/datasource/cloud-monitoring/components/MetricQueryEditor.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

__webpack_require__.d(__webpack_exports__, {
  "a1": () => ( MetricQueryEditor),
  "wi": () => ( defaultQuery)
});


var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var functions = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
var types = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var constants = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
var components = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _code;








const GraphPeriod = _ref => {
  let {
    refId,
    onChange,
    graphPeriod,
    variableOptionGroup
  } = _ref;
  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: (0,jsx_runtime.jsxs)(components.x5, {
      label: "Graph period",
      htmlFor: `${refId}-graph-period`,
      tooltip: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: ["Set ", _code || (_code = (0,jsx_runtime.jsx)("code", {
          children: "graph_period"
        })), " which forces a preferred period between points. Automatically set to the current interval if left blank."]
      }),
      children: [(0,jsx_runtime.jsx)(src.Switch, {
        "data-testid": `${refId}-switch-graph-period`,
        value: graphPeriod !== 'disabled',
        onChange: e => onChange(e.currentTarget.checked ? '' : 'disabled')
      }), (0,jsx_runtime.jsx)(components.$d, {
        inputId: `${refId}-graph-period`,
        templateVariableOptions: variableOptionGroup.options,
        current: graphPeriod,
        onChange: onChange,
        selectWidth: constants.Lh,
        disabled: graphPeriod === 'disabled',
        aligmentPeriods: constants.Ry
      })]
    })
  });
};
var MQLQueryEditor = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MQLQueryEditor.tsx");
;









const defaultState = {
  labels: {}
};
const defaultQuery = dataSource => ({
  editorMode: types.je.Visual,
  projectName: dataSource.getDefaultProject(),
  metricType: '',
  metricKind: types.lH.GAUGE,
  valueType: '',
  crossSeriesReducer: 'REDUCE_MEAN',
  alignmentPeriod: 'cloud-monitoring-auto',
  perSeriesAligner: types.CS.ALIGN_MEAN,
  groupBys: [],
  filters: [],
  aliasBy: '',
  query: '',
  preprocessor: types.mG.None
});

function Editor(_ref) {
  let {
    refId,
    query,
    datasource,
    onChange: onQueryChange,
    onRunQuery,
    customMetaData,
    variableOptionGroup
  } = _ref;
  const [state, setState] = (0,react.useState)(defaultState);
  const {
    projectName,
    metricType,
    groupBys,
    editorMode,
    crossSeriesReducer
  } = query;
  (0,react.useEffect)(() => {
    if (projectName && metricType) {
      datasource.getLabels(metricType, refId, projectName).then(labels => setState(prevState => Object.assign({}, prevState, {
        labels
      })));
    }
  }, [datasource, groupBys, metricType, projectName, refId, crossSeriesReducer]);
  const onChange = (0,react.useCallback)(metricQuery => {
    onQueryChange(Object.assign({}, query, metricQuery));
    onRunQuery();
  }, [onQueryChange, onRunQuery, query]);
  const onMetricTypeChange = (0,react.useCallback)(_ref2 => {
    let {
      valueType,
      metricKind,
      type
    } = _ref2;
    const preprocessor = metricKind === types.lH.GAUGE || valueType === types.$h.DISTRIBUTION ? types.mG.None : types.mG.Rate;
    const {
      perSeriesAligner
    } = (0,functions.ID)(valueType, metricKind, state.perSeriesAligner, preprocessor);
    onChange(Object.assign({}, query, {
      perSeriesAligner,
      metricType: type,
      valueType,
      metricKind,
      preprocessor
    }));
  }, [onChange, query, state]);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(components.IK, {
      refId: refId,
      templateVariableOptions: variableOptionGroup.options,
      projectName: projectName,
      datasource: datasource,
      onChange: projectName => {
        onChange(Object.assign({}, query, {
          projectName
        }));
      }
    }), editorMode === types.je.Visual && (0,jsx_runtime.jsx)(components.sL, {
      refId: refId,
      labels: state.labels,
      variableOptionGroup: variableOptionGroup,
      customMetaData: customMetaData,
      onMetricTypeChange: onMetricTypeChange,
      onChange: onChange,
      datasource: datasource,
      query: query
    }), editorMode === types.je.MQL && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(MQLQueryEditor.a, {
        onChange: q => onQueryChange(Object.assign({}, query, {
          query: q
        })),
        onRunQuery: onRunQuery,
        query: query.query
      }), (0,jsx_runtime.jsx)(GraphPeriod, {
        onChange: graphPeriod => onQueryChange(Object.assign({}, query, {
          graphPeriod
        })),
        graphPeriod: query.graphPeriod,
        refId: refId,
        variableOptionGroup: variableOptionGroup
      })]
    }), (0,jsx_runtime.jsx)(components.BQ, {
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

const MetricQueryEditor = react.memo(Editor);

 }),

 "./public/app/plugins/datasource/cloud-monitoring/components/QueryEditor.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "W": () => ( QueryEditor)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
 var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
 var _MetricQueryEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MetricQueryEditor.tsx");
 var _SLO_SLOQueryEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLOQueryEditor.tsx");
 var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["hide", "refId", "datasource", "key", "queryType", "maxLines", "metric"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }













class QueryEditor extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  async UNSAFE_componentWillMount() {
    const {
      datasource,
      query
    } = this.props; 

    if (!this.props.query.hasOwnProperty('metricQuery')) {
      const _ref = this.props.query,
            metricQuery = _objectWithoutPropertiesLoose(_ref, _excluded);

      this.props.query.metricQuery = metricQuery;
    }

    if (!this.props.query.hasOwnProperty('queryType')) {
      this.props.query.queryType = _types__WEBPACK_IMPORTED_MODULE_5__ .xL.METRICS;
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
    const metricQuery = Object.assign({}, (0,_MetricQueryEditor__WEBPACK_IMPORTED_MODULE_6__ .wi)(datasource), query.metricQuery);
    const sloQuery = Object.assign({}, (0,_SLO_SLOQueryEditor__WEBPACK_IMPORTED_MODULE_7__ .w)(datasource), query.sloQuery);
    const queryType = query.queryType || _types__WEBPACK_IMPORTED_MODULE_5__ .xL.METRICS;
    const meta = (_this$props$data = this.props.data) !== null && _this$props$data !== void 0 && _this$props$data.series.length ? (_this$props$data2 = this.props.data) === null || _this$props$data2 === void 0 ? void 0 : _this$props$data2.series[0].meta : {};
    const customMetaData = (_meta$custom = meta === null || meta === void 0 ? void 0 : meta.custom) !== null && _meta$custom !== void 0 ? _meta$custom : {};
    const variableOptionGroup = {
      label: 'Template Variables',
      expanded: false,
      options: datasource.getVariables().map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)
    };
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_8__ .x5, {
        label: "Query type",
        fillComponent: query.queryType !== _types__WEBPACK_IMPORTED_MODULE_5__ .xL.SLO && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          variant: "secondary",
          className: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
                  margin-left: auto;
                `,
          icon: "edit",
          onClick: () => this.onQueryChange('metricQuery', Object.assign({}, metricQuery, {
            editorMode: metricQuery.editorMode === _types__WEBPACK_IMPORTED_MODULE_5__ .je.MQL ? _types__WEBPACK_IMPORTED_MODULE_5__ .je.Visual : _types__WEBPACK_IMPORTED_MODULE_5__ .je.MQL
          })),
          children: metricQuery.editorMode === _types__WEBPACK_IMPORTED_MODULE_5__ .je.MQL ? 'Switch to builder' : 'Edit MQL'
        }),
        htmlFor: `${query.refId}-query-type`,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
          width: _constants__WEBPACK_IMPORTED_MODULE_4__ .Lh,
          value: queryType,
          options: _constants__WEBPACK_IMPORTED_MODULE_4__ .XI,
          onChange: _ref2 => {
            let {
              value
            } = _ref2;
            onChange(Object.assign({}, query, {
              sloQuery,
              queryType: value
            }));
            onRunQuery();
          },
          inputId: `${query.refId}-query-type`
        })
      }), queryType === _types__WEBPACK_IMPORTED_MODULE_5__ .xL.METRICS && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_8__ .a1, {
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
      }), queryType === _types__WEBPACK_IMPORTED_MODULE_5__ .xL.SLO && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(___WEBPACK_IMPORTED_MODULE_8__ .D6, {
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

 }),

 "./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLOQueryEditor.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

__webpack_require__.d(__webpack_exports__, {
  "D": () => ( SLOQueryEditor),
  "w": () => ( defaultQuery)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var components = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/index.ts");
var constants = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
var types = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;





const Service = _ref => {
  let {
    refId,
    query,
    templateVariableOptions,
    onChange,
    datasource
  } = _ref;
  const [services, setServices] = (0,react.useState)([]);
  const {
    projectName
  } = query;
  (0,react.useEffect)(() => {
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
  return (0,jsx_runtime.jsx)(components.x5, {
    label: "Service",
    htmlFor: `${refId}-slo-service`,
    children: (0,jsx_runtime.jsx)(src.Select, {
      inputId: `${refId}-slo-service`,
      width: constants.Lh,
      allowCustomValue: true,
      value: (query === null || query === void 0 ? void 0 : query.serviceId) && {
        value: query === null || query === void 0 ? void 0 : query.serviceId,
        label: (query === null || query === void 0 ? void 0 : query.serviceName) || (query === null || query === void 0 ? void 0 : query.serviceId)
      },
      placeholder: "Select service",
      options: services,
      onChange: _ref2 => {
        let {
          value: serviceId = '',
          label: serviceName = ''
        } = _ref2;
        return onChange(Object.assign({}, query, {
          serviceId,
          serviceName,
          sloId: ''
        }));
      }
    })
  });
};
;





const SLO = _ref => {
  let {
    refId,
    query,
    templateVariableOptions,
    onChange,
    datasource
  } = _ref;
  const [slos, setSLOs] = (0,react.useState)([]);
  const {
    projectName,
    serviceId
  } = query;
  (0,react.useEffect)(() => {
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
  return (0,jsx_runtime.jsx)(components.x5, {
    label: "SLO",
    htmlFor: `${refId}-slo`,
    children: (0,jsx_runtime.jsx)(src.Select, {
      inputId: `${refId}-slo`,
      width: constants.Lh,
      allowCustomValue: true,
      value: (query === null || query === void 0 ? void 0 : query.sloId) && {
        value: query === null || query === void 0 ? void 0 : query.sloId,
        label: (query === null || query === void 0 ? void 0 : query.sloName) || (query === null || query === void 0 ? void 0 : query.sloId)
      },
      placeholder: "Select SLO",
      options: slos,
      onChange: async _ref2 => {
        let {
          value: sloId = '',
          label: sloName = ''
        } = _ref2;
        const slos = await datasource.getServiceLevelObjectives(projectName, serviceId);
        const slo = slos.find(_ref3 => {
          let {
            value
          } = _ref3;
          return value === datasource.templateSrv.replace(sloId);
        });
        onChange(Object.assign({}, query, {
          sloId,
          sloName,
          goal: slo === null || slo === void 0 ? void 0 : slo.goal
        }));
      }
    })
  });
};
;





const Selector = _ref => {
  let {
    refId,
    query,
    templateVariableOptions,
    onChange,
    datasource
  } = _ref;
  return (0,jsx_runtime.jsx)(components.x5, {
    label: "Selector",
    htmlFor: `${refId}-slo-selector`,
    children: (0,jsx_runtime.jsx)(src.Select, {
      inputId: `${refId}-slo-selector`,
      width: constants.Lh,
      allowCustomValue: true,
      value: [...constants.IR, ...templateVariableOptions].find(s => {
        var _ref2;

        return (_ref2 = s.value === (query === null || query === void 0 ? void 0 : query.selectorName)) !== null && _ref2 !== void 0 ? _ref2 : '';
      }),
      options: [{
        label: 'Template Variables',
        options: templateVariableOptions
      }, ...constants.IR],
      onChange: _ref3 => {
        let {
          value: selectorName
        } = _ref3;
        return onChange(Object.assign({}, query, {
          selectorName: selectorName !== null && selectorName !== void 0 ? selectorName : ''
        }));
      }
    })
  });
};
;



;








const defaultQuery = dataSource => ({
  projectName: dataSource.getDefaultProject(),
  alignmentPeriod: 'cloud-monitoring-auto',
  perSeriesAligner: types.CS.ALIGN_MEAN,
  aliasBy: '',
  selectorName: 'select_slo_health',
  serviceId: '',
  serviceName: '',
  sloId: '',
  sloName: ''
});
function SLOQueryEditor(_ref) {
  let {
    refId,
    query,
    datasource,
    onChange,
    variableOptionGroup,
    customMetaData
  } = _ref;
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(components.IK, {
      refId: refId,
      templateVariableOptions: variableOptionGroup.options,
      projectName: query.projectName,
      datasource: datasource,
      onChange: projectName => onChange(Object.assign({}, query, {
        projectName
      }))
    }), (0,jsx_runtime.jsx)(Service, {
      refId: refId,
      datasource: datasource,
      templateVariableOptions: variableOptionGroup.options,
      query: query,
      onChange: onChange
    }), (0,jsx_runtime.jsx)(SLO, {
      refId: refId,
      datasource: datasource,
      templateVariableOptions: variableOptionGroup.options,
      query: query,
      onChange: onChange
    }), (0,jsx_runtime.jsx)(Selector, {
      refId: refId,
      datasource: datasource,
      templateVariableOptions: variableOptionGroup.options,
      query: query,
      onChange: onChange
    }), (0,jsx_runtime.jsxs)(components.x5, {
      label: "Alignment period",
      htmlFor: `${refId}-alignment-period`,
      children: [(0,jsx_runtime.jsx)(components.$d, {
        inputId: `${refId}-alignment-period`,
        templateVariableOptions: variableOptionGroup.options,
        selectWidth: constants.Lh,
        current: query.alignmentPeriod,
        onChange: period => onChange(Object.assign({}, query, {
          alignmentPeriod: period
        })),
        aligmentPeriods: constants.dD
      }), (0,jsx_runtime.jsx)(components.nS, {
        datasource: datasource,
        customMetaData: customMetaData
      })]
    }), (0,jsx_runtime.jsx)(components.BQ, {
      refId: refId,
      value: query.aliasBy,
      onChange: aliasBy => onChange(Object.assign({}, query, {
        aliasBy
      }))
    })]
  });
}

 }),

 "./public/app/plugins/datasource/cloud-monitoring/components/index.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

__webpack_require__.d(__webpack_exports__, {
  "Pe": () => ( Aggregation),
  "BQ": () => ( AliasBy),
  "v2": () => ( Alignment),
  "XY": () => ( AlignmentFunction),
  "nS": () => ( AlignmentPeriodLabel),
  "zI": () => ( AnnotationsHelp),
  "X9": () => ( GroupBy),
  "pj": () => ( LabelFilter),
  "a1": () => ( MetricQueryEditor.a1),
  "C3": () => ( Metrics),
  "$d": () => ( PeriodSelect),
  "Av": () => ( Preprocessor),
  "IK": () => ( Project),
  "EC": () => ( QueryEditorField),
  "x5": () => ( QueryEditorRow),
  "D6": () => ( SLOQueryEditor.D),
  "Th": () => ( VariableQueryField),
  "sL": () => ( VisualMetricQueryEditor)
});


var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var constants = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;





function Project(_ref) {
  let {
    refId,
    projectName,
    datasource,
    onChange,
    templateVariableOptions
  } = _ref;
  const [projects, setProjects] = (0,react.useState)([]);
  (0,react.useEffect)(() => {
    datasource.getProjects().then(projects => setProjects(projects));
  }, [datasource]);
  const projectsWithTemplateVariables = (0,react.useMemo)(() => [projects, {
    label: 'Template Variables',
    options: templateVariableOptions
  }, ...projects], [projects, templateVariableOptions]);
  return (0,jsx_runtime.jsx)(QueryEditorRow, {
    label: "Project",
    htmlFor: `${refId}-project`,
    children: (0,jsx_runtime.jsx)(src.Select, {
      width: constants.Lh,
      allowCustomValue: true,
      formatCreateLabel: v => `Use project: ${v}`,
      onChange: _ref2 => {
        let {
          value
        } = _ref2;
        return onChange(value);
      },
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
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
;









function Metrics(props) {
  const [state, setState] = (0,react.useState)({
    metricDescriptors: [],
    metrics: [],
    services: [],
    service: '',
    metric: '',
    projectName: null
  });
  const theme = (0,src.useTheme2)();
  const selectStyles = (0,src.getSelectStyles)(theme);
  const customStyle = (0,src.useStyles2)(getStyles);
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
  const getSelectedMetricDescriptor = (0,react.useCallback)((metricDescriptors, metricType) => {
    return metricDescriptors.find(md => md.type === templateSrv.replace(metricType));
  }, [templateSrv]);
  (0,react.useEffect)(() => {
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
          return (0,jsx_runtime.jsxs)("div", {
            children: [(0,jsx_runtime.jsx)("div", {
              className: customStyle,
              children: m.type
            }), (0,jsx_runtime.jsx)("div", {
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

  const onServiceChange = _ref => {
    let {
      value: service
    } = _ref;
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

  const onMetricTypeChange = function (_ref2) {
    let {
      value
    } = _ref2;
    let extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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
      label: (0,lodash.startCase)(m.serviceShortName)
    }));
    return services.length > 0 ? (0,lodash.uniqBy)(services, s => s.value) : [];
  };

  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(QueryEditorRow, {
      children: [(0,jsx_runtime.jsx)(QueryEditorField, {
        labelWidth: constants.XC,
        label: "Service",
        htmlFor: `${props.refId}-service`,
        children: (0,jsx_runtime.jsx)(src.Select, {
          width: constants.Lh,
          onChange: onServiceChange,
          value: [...services, ...templateVariableOptions].find(s => s.value === service),
          options: [{
            label: 'Template Variables',
            options: templateVariableOptions
          }, ...services],
          placeholder: "Select Services",
          inputId: `${props.refId}-service`
        })
      }), (0,jsx_runtime.jsx)(QueryEditorField, {
        label: "Metric name",
        labelWidth: constants.qN,
        htmlFor: `${props.refId}-select-metric`,
        children: (0,jsx_runtime.jsx)(src.Select, {
          width: constants.Lh,
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

const getStyles = theme => emotion_css_esm.css`
  label: grafana-select-option-description;
  font-weight: normal;
  font-style: italic;
  color: ${theme.colors.text.secondary};
`;
var functions = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/functions.ts");
;







const GroupBy = _ref => {
  var _query$groupBys, _query$groupBys2;

  let {
    refId,
    labels: groupBys = [],
    query,
    onChange,
    variableOptionGroup,
    metricDescriptor
  } = _ref;
  const options = (0,react.useMemo)(() => [variableOptionGroup, ...(0,functions.gY)([...groupBys, ...constants.$e])], [groupBys, variableOptionGroup]);
  return (0,jsx_runtime.jsxs)(QueryEditorRow, {
    label: "Group by",
    tooltip: "You can reduce the amount of data returned for a metric by combining different time series. To combine multiple time series, you can specify a grouping and a function. Grouping is done on the basis of labels. The grouping function is used to combine the time series in the group into a single time series.",
    htmlFor: `${refId}-group-by`,
    children: [(0,jsx_runtime.jsx)(src.MultiSelect, {
      inputId: `${refId}-group-by`,
      width: constants.d7,
      placeholder: "Choose label",
      options: options,
      value: (_query$groupBys = query.groupBys) !== null && _query$groupBys !== void 0 ? _query$groupBys : [],
      onChange: options => {
        onChange(Object.assign({}, query, {
          groupBys: options.map(o => o.value)
        }));
      }
    }), (0,jsx_runtime.jsx)(Aggregation, {
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
;





const Alignment = _ref => {
  let {
    refId,
    templateVariableOptions,
    onChange,
    query,
    customMetaData,
    datasource
  } = _ref;
  return (0,jsx_runtime.jsxs)(QueryEditorRow, {
    label: "Alignment function",
    tooltip: "The process of alignment consists of collecting all data points received in a fixed length of time, applying a function to combine those data points, and assigning a timestamp to the result.",
    fillComponent: (0,jsx_runtime.jsx)(AlignmentPeriodLabel, {
      datasource: datasource,
      customMetaData: customMetaData
    }),
    htmlFor: `${refId}-alignment-function`,
    children: [(0,jsx_runtime.jsx)(AlignmentFunction, {
      inputId: `${refId}-alignment-function`,
      templateVariableOptions: templateVariableOptions,
      query: query,
      onChange: onChange
    }), (0,jsx_runtime.jsx)(QueryEditorField, {
      label: "Alignment period",
      htmlFor: `${refId}-alignment-period`,
      children: (0,jsx_runtime.jsx)(PeriodSelect, {
        inputId: `${refId}-alignment-period`,
        selectWidth: constants.Lh,
        templateVariableOptions: templateVariableOptions,
        current: query.alignmentPeriod,
        onChange: period => onChange(Object.assign({}, query, {
          alignmentPeriod: period
        })),
        aligmentPeriods: constants.dD
      })
    })]
  });
};
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
;
const _excluded = ["value", "isOpen", "invalid"],
      _excluded2 = ["value"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const operators = ['=', '!=', '=~', '!=~'];
const FilterButton = react.forwardRef((_ref, ref) => {
  let rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  return (0,jsx_runtime.jsx)(src.Button, Object.assign({}, rest, {
    ref: ref,
    variant: "secondary",
    icon: "plus",
    "aria-label": "Add filter"
  }));
});
FilterButton.displayName = 'FilterButton';
const OperatorButton = react.forwardRef((_ref2, ref) => {
  let {
    value
  } = _ref2,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return (0,jsx_runtime.jsx)(src.Button, Object.assign({}, rest, {
    ref: ref,
    variant: "secondary",
    children: (0,jsx_runtime.jsx)("span", {
      className: "query-segment-operator",
      children: value === null || value === void 0 ? void 0 : value.label
    })
  }));
});
OperatorButton.displayName = 'OperatorButton';
const LabelFilter = _ref3 => {
  var _AddFilter;

  let {
    labels = {},
    filters: filterArray,
    onChange,
    variableOptionGroup
  } = _ref3;
  const filters = (0,react.useMemo)(() => (0,functions.mi)(filterArray), [filterArray]);
  const options = (0,react.useMemo)(() => [variableOptionGroup, ...(0,functions.gY)(Object.keys(labels))], [labels, variableOptionGroup]);
  const filtersToStringArray = (0,react.useCallback)(filters => {
    const strArr = (0,lodash.flatten)(filters.map(_ref4 => {
      let {
        key,
        operator,
        value,
        condition
      } = _ref4;
      return [key, operator, value, condition];
    }));
    return strArr.slice(0, strArr.length - 1);
  }, []);

  const AddFilter = () => {
    return (0,jsx_runtime.jsx)(src.Select, {
      allowCustomValue: true,
      options: [variableOptionGroup, ...(0,functions.gY)(Object.keys(labels))],
      onChange: _ref5 => {
        let {
          value: key = ''
        } = _ref5;
        return onChange(filtersToStringArray([...filters, {
          key,
          operator: '=',
          condition: 'AND',
          value: ''
        }]));
      },
      menuPlacement: "bottom",
      renderControl: FilterButton
    });
  };

  return (0,jsx_runtime.jsx)(QueryEditorRow, {
    label: "Filter",
    tooltip: 'To reduce the amount of data charted, apply a filter. A filter has three components: a label, a comparison, and a value. The comparison can be an equality, inequality, or regular expression.',
    noFillEnd: filters.length > 1,
    children: (0,jsx_runtime.jsxs)(src.VerticalGroup, {
      spacing: "xs",
      width: "auto",
      children: [filters.map((_ref6, index) => {
        let {
          key,
          operator,
          value,
          condition
        } = _ref6;
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

        const valueOptions = labels.hasOwnProperty(key) ? [variableOptionGroup, ...labels[key].map(grafana_data_src.toOption)] : [variableOptionGroup];
        const valuePresent = valueOptions.some(op => {
          return op.label === value;
        });

        if (!valuePresent) {
          valueOptions.push({
            label: value,
            value
          });
        }

        return (0,jsx_runtime.jsxs)(src.HorizontalGroup, {
          spacing: "xs",
          width: "auto",
          children: [(0,jsx_runtime.jsx)(src.Select, {
            "aria-label": "Filter label key",
            width: constants.Lh,
            allowCustomValue: true,
            formatCreateLabel: v => `Use label key: ${v}`,
            value: key,
            options: options,
            onChange: _ref7 => {
              let {
                value: key = ''
              } = _ref7;
              onChange(filtersToStringArray(filters.map((f, i) => i === index ? {
                key,
                operator,
                condition,
                value: ''
              } : f)));
            }
          }), (0,jsx_runtime.jsx)(src.Select, {
            value: operator,
            options: operators.map(grafana_data_src.toOption),
            onChange: _ref8 => {
              let {
                value: operator = '='
              } = _ref8;
              return onChange(filtersToStringArray(filters.map((f, i) => i === index ? Object.assign({}, f, {
                operator
              }) : f)));
            },
            menuPlacement: "bottom",
            renderControl: OperatorButton
          }), (0,jsx_runtime.jsx)(src.Select, {
            "aria-label": "Filter label value",
            width: constants.Lh,
            formatCreateLabel: v => `Use label value: ${v}`,
            allowCustomValue: true,
            value: value,
            placeholder: "add filter value",
            options: valueOptions,
            onChange: _ref9 => {
              let {
                value = ''
              } = _ref9;
              return onChange(filtersToStringArray(filters.map((f, i) => i === index ? Object.assign({}, f, {
                value
              }) : f)));
            }
          }), (0,jsx_runtime.jsx)(src.Button, {
            variant: "secondary",
            size: "md",
            icon: "trash-alt",
            "aria-label": "Remove",
            onClick: () => onChange(filtersToStringArray(filters.filter((_, i) => i !== index)))
          }), index + 1 === filters.length && Object.values(filters).every(_ref10 => {
            let {
              value
            } = _ref10;
            return value;
          }) && (_AddFilter || (_AddFilter = (0,jsx_runtime.jsx)(AddFilter, {})))]
        }, index);
      }), !filters.length && (0,jsx_runtime.jsx)(AddFilter, {})]
    })
  });
};
;
var _div;




const AnnotationsHelp = () => {
  return _div || (_div = (0,jsx_runtime.jsx)("div", {
    className: "gf-form grafana-info-box alert-info",
    children: (0,jsx_runtime.jsxs)("div", {
      children: [(0,jsx_runtime.jsx)("h5", {
        children: "Annotation Query Format"
      }), (0,jsx_runtime.jsxs)("p", {
        children: ["An annotation is an event that is overlaid on top of graphs. Annotation rendering is expensive so it is important to limit the number of rows returned.", ' ']
      }), (0,jsx_runtime.jsx)("p", {
        children: "The Title and Text fields support templating and can use data returned from the query. For example, the Title field could have the following text:"
      }), (0,jsx_runtime.jsxs)("code", {
        children: [`${'{{metric.type}}'}`, " has value: ", `${'{{metric.value}}'}`]
      }), (0,jsx_runtime.jsxs)("p", {
        children: ["Example Result: ", (0,jsx_runtime.jsx)("code", {
          children: "monitoring.googleapis.com/uptime_check/http_status has this value: 502"
        })]
      }), (0,jsx_runtime.jsx)("label", {
        children: "Patterns:"
      }), (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)("code", {
          children: `${'{{metric.value}}'}`
        }), " = value of the metric/point"]
      }), (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)("code", {
          children: `${'{{metric.type}}'}`
        }), " = metric type e.g. compute.googleapis.com/instance/cpu/usage_time"]
      }), (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)("code", {
          children: `${'{{metric.name}}'}`
        }), " = name part of metric e.g. instance/cpu/usage_time"]
      }), (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)("code", {
          children: `${'{{metric.service}}'}`
        }), " = service part of metric e.g. compute"]
      }), (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)("code", {
          children: `${'{{metric.label.label_name}}'}`
        }), " = Metric label metadata e.g. metric.label.instance_name"]
      }), (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)("code", {
          children: `${'{{resource.label.label_name}}'}`
        }), " = Resource label metadata e.g. resource.label.zone"]
      })]
    })
  }));
};
;





const AlignmentFunction = _ref => {
  let {
    inputId,
    query,
    templateVariableOptions,
    onChange
  } = _ref;
  const {
    valueType,
    metricKind,
    perSeriesAligner: psa,
    preprocessor
  } = query;
  const {
    perSeriesAligner,
    alignOptions
  } = (0,react.useMemo)(() => (0,functions.ID)(valueType, metricKind, psa, preprocessor), [valueType, metricKind, psa, preprocessor]);
  return (0,jsx_runtime.jsx)(src.Select, {
    width: constants.Lh,
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return onChange(Object.assign({}, query, {
        perSeriesAligner: value
      }));
    },
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
;




const AlignmentPeriodLabel = _ref => {
  let {
    customMetaData,
    datasource
  } = _ref;
  const {
    perSeriesAligner,
    alignmentPeriod
  } = customMetaData;
  const formatAlignmentText = (0,react.useMemo)(() => {
    var _alignment$text;

    if (!alignmentPeriod || !perSeriesAligner) {
      return '';
    }

    const alignment = constants.Eu.find(ap => ap.value === datasource.templateSrv.replace(perSeriesAligner));
    const seconds = parseInt(alignmentPeriod !== null && alignmentPeriod !== void 0 ? alignmentPeriod : ''.replace(/[^0-9]/g, ''), 10);
    const hms = grafana_data_src.rangeUtil.secondsToHms(seconds);
    return `${hms} interval (${(_alignment$text = alignment === null || alignment === void 0 ? void 0 : alignment.text) !== null && _alignment$text !== void 0 ? _alignment$text : ''})`;
  }, [datasource, perSeriesAligner, alignmentPeriod]);
  return (0,jsx_runtime.jsx)("label", {
    children: formatAlignmentText
  });
};
;






const AliasBy = _ref => {
  let {
    refId,
    value = '',
    onChange
  } = _ref;
  const [alias, setAlias] = (0,react.useState)(value !== null && value !== void 0 ? value : '');
  const propagateOnChange = (0,lodash.debounce)(onChange, 1000);

  onChange = e => {
    setAlias(e.target.value);
    propagateOnChange(e.target.value);
  };

  return (0,jsx_runtime.jsx)(QueryEditorRow, {
    label: "Alias by",
    htmlFor: `${refId}-alias-by`,
    children: (0,jsx_runtime.jsx)(src.Input, {
      id: `${refId}-alias-by`,
      width: constants.d7,
      value: alias,
      onChange: onChange
    })
  });
};
;





const Aggregation = props => {
  const aggOptions = useAggregationOptionsByMetric(props);
  const selected = useSelectedFromOptions(aggOptions, props);
  return (0,jsx_runtime.jsx)(QueryEditorField, {
    labelWidth: 18,
    label: "Group by function",
    "data-testid": "cloud-monitoring-aggregation",
    htmlFor: `${props.refId}-group-by-function`,
    children: (0,jsx_runtime.jsx)(src.Select, {
      width: 16,
      onChange: _ref => {
        let {
          value
        } = _ref;
        return props.onChange(value);
      },
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

const useAggregationOptionsByMetric = _ref2 => {
  let {
    metricDescriptor
  } = _ref2;
  const valueType = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.valueType;
  const metricKind = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.metricKind;
  return (0,react.useMemo)(() => {
    if (!valueType || !metricKind) {
      return [];
    }

    return (0,functions.A_)(valueType, metricKind).map(a => Object.assign({}, a, {
      label: a.text
    }));
  }, [valueType, metricKind]);
};

const useSelectedFromOptions = (aggOptions, props) => {
  return (0,react.useMemo)(() => {
    const allOptions = [...aggOptions, ...props.templateVariableOptions];
    return allOptions.find(s => s.value === props.crossSeriesReducer);
  }, [aggOptions, props.crossSeriesReducer, props.templateVariableOptions]);
};
var MetricQueryEditor = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MetricQueryEditor.tsx");
var SLOQueryEditor = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/SLO/SLOQueryEditor.tsx");
var MQLQueryEditor = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/components/MQLQueryEditor.tsx");
;
const Fields_excluded = ["children", "label", "tooltip", "fillComponent", "noFillEnd", "labelWidth", "htmlFor"],
      Fields_excluded2 = ["children", "label", "tooltip", "labelWidth"];

function Fields_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const VariableQueryField = _ref => {
  let {
    label,
    onChange,
    value,
    options,
    allowCustomValue = false
  } = _ref;
  return (0,jsx_runtime.jsx)(src.InlineField, {
    label: label,
    labelWidth: 20,
    children: (0,jsx_runtime.jsx)(src.Select, {
      width: 25,
      allowCustomValue: allowCustomValue,
      value: value,
      onChange: _ref2 => {
        let {
          value
        } = _ref2;
        return onChange(value);
      },
      options: options
    })
  });
};
const QueryEditorRow = _ref3 => {
  let {
    children,
    label,
    tooltip,
    fillComponent,
    noFillEnd = false,
    labelWidth = constants.XC,
    htmlFor
  } = _ref3,
      rest = Fields_objectWithoutPropertiesLoose(_ref3, Fields_excluded);

  return (0,jsx_runtime.jsxs)("div", Object.assign({
    className: "gf-form"
  }, rest, {
    children: [label && (0,jsx_runtime.jsx)(src.InlineLabel, {
      width: labelWidth,
      tooltip: tooltip,
      htmlFor: htmlFor,
      children: label
    }), (0,jsx_runtime.jsx)("div", {
      className: emotion_css_esm.css`
          margin-right: 4px;
        `,
      children: (0,jsx_runtime.jsx)(src.HorizontalGroup, {
        spacing: "xs",
        width: "auto",
        children: children
      })
    }), (0,jsx_runtime.jsx)("div", {
      className: 'gf-form--grow',
      children: noFillEnd || (0,jsx_runtime.jsx)("div", {
        className: 'gf-form-label gf-form-label--grow',
        children: fillComponent
      })
    })]
  }));
};
const QueryEditorField = _ref4 => {
  let {
    children,
    label,
    tooltip,
    labelWidth = constants.qN
  } = _ref4,
      rest = Fields_objectWithoutPropertiesLoose(_ref4, Fields_excluded2);

  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [label && (0,jsx_runtime.jsx)(src.InlineLabel, Object.assign({
      width: labelWidth,
      tooltip: tooltip
    }, rest, {
      children: label
    })), children]
  });
};
;






function Editor(_ref) {
  let {
    refId,
    query,
    labels,
    datasource,
    onChange,
    onMetricTypeChange,
    customMetaData,
    variableOptionGroup
  } = _ref;
  return (0,jsx_runtime.jsx)(Metrics, {
    refId: refId,
    templateSrv: datasource.templateSrv,
    projectName: query.projectName,
    metricType: query.metricType,
    templateVariableOptions: variableOptionGroup.options,
    datasource: datasource,
    onChange: onMetricTypeChange,
    children: metric => (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(LabelFilter, {
        labels: labels,
        filters: query.filters,
        onChange: filters => onChange(Object.assign({}, query, {
          filters
        })),
        variableOptionGroup: variableOptionGroup
      }), (0,jsx_runtime.jsx)(Preprocessor, {
        metricDescriptor: metric,
        query: query,
        onChange: onChange
      }), (0,jsx_runtime.jsx)(GroupBy, {
        refId: refId,
        labels: Object.keys(labels),
        query: query,
        onChange: onChange,
        variableOptionGroup: variableOptionGroup,
        metricDescriptor: metric
      }), (0,jsx_runtime.jsx)(Alignment, {
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

const VisualMetricQueryEditor = react.memo(Editor);
;



function PeriodSelect(_ref) {
  let {
    inputId,
    templateVariableOptions,
    onChange,
    current,
    selectWidth,
    disabled,
    aligmentPeriods
  } = _ref;
  const options = (0,react.useMemo)(() => aligmentPeriods.map(ap => Object.assign({}, ap, {
    label: ap.text
  })), [aligmentPeriods]);
  const visibleOptions = (0,react.useMemo)(() => options.filter(ap => !ap.hidden), [options]);
  return (0,jsx_runtime.jsx)(src.Select, {
    width: selectWidth,
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return onChange(value);
    },
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
var types = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");
;






const NONE_OPTION = {
  label: 'None',
  value: types.mG.None
};
const Preprocessor = _ref => {
  var _query$preprocessor;

  let {
    query,
    metricDescriptor,
    onChange
  } = _ref;
  const options = useOptions(metricDescriptor);
  return (0,jsx_runtime.jsx)(QueryEditorRow, {
    label: "Pre-processing",
    tooltip: "Preprocessing options are displayed when the selected metric has a metric kind of delta or cumulative. The specific options available are determined by the metic's value type. If you select 'Rate', data points are aligned and converted to a rate per time series. If you select 'Delta', data points are aligned by their delta (difference) per time series",
    children: (0,jsx_runtime.jsx)(src.RadioButtonGroup, {
      onChange: value => {
        const {
          valueType,
          metricKind,
          perSeriesAligner: psa
        } = query;
        const {
          perSeriesAligner
        } = (0,functions.ID)(valueType, metricKind, psa, value);
        onChange(Object.assign({}, query, {
          preprocessor: value,
          perSeriesAligner
        }));
      },
      value: (_query$preprocessor = query.preprocessor) !== null && _query$preprocessor !== void 0 ? _query$preprocessor : types.mG.None,
      options: options
    })
  });
};

const useOptions = metricDescriptor => {
  const metricKind = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.metricKind;
  const valueType = metricDescriptor === null || metricDescriptor === void 0 ? void 0 : metricDescriptor.valueType;
  return (0,react.useMemo)(() => {
    if (!metricKind || metricKind === types.lH.GAUGE || valueType === types.$h.DISTRIBUTION) {
      return [NONE_OPTION];
    }

    const options = [NONE_OPTION, {
      label: 'Rate',
      value: types.mG.Rate,
      description: 'Data points are aligned and converted to a rate per time series'
    }];
    return metricKind === types.lH.CUMULATIVE ? [...options, {
      label: 'Delta',
      value: types.mG.Delta,
      description: 'Data points are aligned by their delta (difference) per time series'
    }] : options;
  }, [metricKind, valueType]);
};
;


















 }),

 "./public/app/plugins/datasource/cloud-monitoring/constants.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "$e": () => ( SYSTEM_LABELS),
   "Eu": () => ( ALIGNMENTS),
   "IR": () => ( SELECTORS),
   "Lh": () => ( SELECT_WIDTH),
   "Ry": () => ( GRAPH_PERIODS),
   "XC": () => ( LABEL_WIDTH),
   "XI": () => ( QUERY_TYPES),
   "d7": () => ( INPUT_WIDTH),
   "dD": () => ( ALIGNMENT_PERIODS),
   "lx": () => ( AGGREGATIONS),
   "qN": () => ( INNER_LABEL_WIDTH)
 });
 var _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js");
 var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");


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
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA]
}, {
  text: 'rate',
  value: 'ALIGN_RATE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA]
}, {
  text: 'interpolate',
  value: 'ALIGN_INTERPOLATE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE]
}, {
  text: 'next older',
  value: 'ALIGN_NEXT_OLDER',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.STRING, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.VALUE_TYPE_UNSPECIFIED, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE]
}, {
  text: 'min',
  value: 'ALIGN_MIN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA]
}, {
  text: 'max',
  value: 'ALIGN_MAX',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA]
}, {
  text: 'mean',
  value: 'ALIGN_MEAN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA]
}, {
  text: 'count',
  value: 'ALIGN_COUNT',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA]
}, {
  text: 'sum',
  value: 'ALIGN_SUM',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA]
}, {
  text: 'stddev',
  value: 'ALIGN_STDDEV',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA]
}, {
  text: 'count true',
  value: 'ALIGN_COUNT_TRUE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE]
}, {
  text: 'count false',
  value: 'ALIGN_COUNT_FALSE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE]
}, {
  text: 'fraction true',
  value: 'ALIGN_FRACTION_TRUE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE]
}, {
  text: 'percentile 99',
  value: 'ALIGN_PERCENTILE_99',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA]
}, {
  text: 'percentile 95',
  value: 'ALIGN_PERCENTILE_95',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA]
}, {
  text: 'percentile 50',
  value: 'ALIGN_PERCENTILE_50',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA]
}, {
  text: 'percentile 05',
  value: 'ALIGN_PERCENTILE_05',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA]
}, {
  text: 'percent change',
  value: 'ALIGN_PERCENT_CHANGE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA]
}];
const AGGREGATIONS = [{
  text: 'none',
  value: 'REDUCE_NONE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.BOOL, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.STRING],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'mean',
  value: 'REDUCE_MEAN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.CUMULATIVE]
}, {
  text: 'min',
  value: 'REDUCE_MIN',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'max',
  value: 'REDUCE_MAX',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'sum',
  value: 'REDUCE_SUM',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'std. dev.',
  value: 'REDUCE_STDDEV',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.CUMULATIVE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.METRIC_KIND_UNSPECIFIED]
}, {
  text: 'count',
  value: 'REDUCE_COUNT',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.BOOL, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.STRING],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.CUMULATIVE]
}, {
  text: 'count true',
  value: 'REDUCE_COUNT_TRUE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA]
}, {
  text: 'count false',
  value: 'REDUCE_COUNT_FALSE',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.BOOL],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA]
}, {
  text: '99th percentile',
  value: 'REDUCE_PERCENTILE_99',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.CUMULATIVE]
}, {
  text: '95th percentile',
  value: 'REDUCE_PERCENTILE_95',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.CUMULATIVE]
}, {
  text: '50th percentile',
  value: 'REDUCE_PERCENTILE_50',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.CUMULATIVE]
}, {
  text: '5th percentile',
  value: 'REDUCE_PERCENTILE_05',
  valueTypes: [_types__WEBPACK_IMPORTED_MODULE_1__ .$h.INT64, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DOUBLE, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.MONEY, _types__WEBPACK_IMPORTED_MODULE_1__ .$h.DISTRIBUTION],
  metricKinds: [_types__WEBPACK_IMPORTED_MODULE_1__ .lH.GAUGE, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.DELTA, _types__WEBPACK_IMPORTED_MODULE_1__ .lH.CUMULATIVE]
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
  value: _types__WEBPACK_IMPORTED_MODULE_1__ .xL.METRICS
}, {
  label: 'Service Level Objectives (SLO)',
  value: _types__WEBPACK_IMPORTED_MODULE_1__ .xL.SLO
}];

 }),

 "./public/app/plugins/datasource/cloud-monitoring/functions.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "A_": () => ( getAggregationOptionsByMetric),
   "FL": () => ( getMetricTypes),
   "ID": () => ( getAlignmentPickerData),
   "Qd": () => ( getLabelKeys),
   "Qf": () => ( getMetricTypesByService),
   "gY": () => ( labelsToGroupedOptions),
   "mi": () => ( stringArrayToFilters),
   "oU": () => ( getAlignmentOptionsByMetric),
   "qA": () => ( extractServicesFromMetricDescriptors)
 });
 var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/constants.ts");
 var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/cloud-monitoring/types.ts");




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
  if (preprocessor && preprocessor === _types__WEBPACK_IMPORTED_MODULE_3__ .mG.Rate) {
    metricKind = _types__WEBPACK_IMPORTED_MODULE_3__ .lH.GAUGE;
  }

  return !metricValueType ? [] : _constants__WEBPACK_IMPORTED_MODULE_2__ .Eu.filter(i => {
    return i.valueTypes.indexOf(metricValueType) !== -1 && i.metricKinds.indexOf(metricKind) !== -1;
  });
};
const getAggregationOptionsByMetric = (valueType, metricKind) => {
  return !metricKind ? [] : _constants__WEBPACK_IMPORTED_MODULE_2__ .lx.filter(i => {
    return i.valueTypes.indexOf(valueType) !== -1 && i.metricKinds.indexOf(metricKind) !== -1;
  });
};
const getLabelKeys = async (datasource, selectedMetricType, projectName) => {
  const refId = 'handleLabelKeysQuery';
  const labels = await datasource.getLabels(selectedMetricType, refId, projectName);
  return [...Object.keys(labels), ..._constants__WEBPACK_IMPORTED_MODULE_2__ .$e];
};
const getAlignmentPickerData = function () {
  let valueType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _types__WEBPACK_IMPORTED_MODULE_3__ .$h.DOUBLE;
  let metricKind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _types__WEBPACK_IMPORTED_MODULE_3__ .lH.GAUGE;
  let perSeriesAligner = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _types__WEBPACK_IMPORTED_MODULE_3__ .CS.ALIGN_MEAN;
  let preprocessor = arguments.length > 3 ? arguments[3] : undefined;
  const alignOptions = getAlignmentOptionsByMetric(valueType, metricKind, preprocessor).map(option => Object.assign({}, option, {
    label: option.text
  }));

  if (!alignOptions.some(o => o.value === templateSrv.replace(perSeriesAligner))) {
    perSeriesAligner = alignOptions.length > 0 ? alignOptions[0].value : _types__WEBPACK_IMPORTED_MODULE_3__ .CS.ALIGN_MEAN;
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
  return Object.entries(groups).map(_ref => {
    let [label, options] = _ref;
    return {
      label,
      options,
      expanded: true
    };
  }, []);
};
const stringArrayToFilters = filterArray => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.chunk)(filterArray, 4).map(_ref2 => {
  let [key, operator, value, condition = 'AND'] = _ref2;
  return {
    key,
    operator,
    value,
    condition
  };
});

 }),

 "./public/app/plugins/datasource/cloud-monitoring/types.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "$h": () => ( ValueTypes),
   "Bp": () => ( MetricFindQueryTypes),
   "CS": () => ( AlignmentTypes),
   "je": () => ( EditorMode),
   "lH": () => ( MetricKind),
   "mG": () => ( PreprocessorType),
   "xL": () => ( QueryType)
 });
 var _grafana_google_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js");

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

 }),

 "./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/dist/index.production.js":
 ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0});var e=__webpack_require__("./packages/grafana-data/src/index.ts"),t=__webpack_require__("./packages/grafana-ui/src/index.ts"),a=__webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),n=__webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=l(a),r=function(){return r=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},r.apply(this,arguments)};
function i(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,l,o=a.call(e),r=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)r.push(n.value)}catch(e){l={error:e}}finally{try{n&&!n.done&&(a=o.return)&&a.call(o)}finally{if(l)throw l.error}}return r}var u,c="Configuration help box",d="Configuration drop zone",f="Configuration text area",s="Paste JWT button",p="Reset JWT button",m="JWT form",y="JWT button",h="GCE button",v=["private_key","token_uri","client_email","project_id"],g=function(e){var n=e.onChange,l=i(a.useState(),2),r=l[0],u=l[1],c=i(a.useState(null),2),p=c[0],m=c[1],y=t.useTheme2(),h=a.useCallback((function(e){u(null),m(!0)}),[m]),v=a.useCallback((function(e){m(null),u(null)}),[m]),g=a.useCallback((function(e){if(""!==e.trim()){var t=void 0;try{t=JSON.parse(e)}catch(e){u("Invalid JWT token")}var a=E(t);a.isValid?n({privateKey:t.private_key,tokenUri:t.token_uri,clientEmail:t.client_email,projectId:t.project_id}):u(a.error)}}),[u,n]);return o.default.createElement(o.default.Fragment,null,o.default.createElement(t.Field,{label:"JWT token",invalid:Boolean(r),description:p?"Paste JWT token below":"Upload or paste Google JWT token",error:r},o.default.createElement(o.default.Fragment,null,!0!==p&&o.default.createElement("div",{"data-testid":d},o.default.createElement(t.FileDropzone,{options:{multiple:!1,accept:"application/json"},readAs:"readAsText",onLoad:function(e){g(e),m(!1)}},o.default.createElement("p",{style:{margin:0,fontSize:""+y.typography.h4.fontSize,textAlign:"center"}},"Drop the Google JWT file here",o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(t.LinkButton,{fill:"outline"},"Click to browse files")))),p&&o.default.createElement(t.TextArea,{"data-testid":f,autoFocus:!0,invalid:Boolean(r),placeholder:"Paste Google JWT token here",onBlur:function(e){return g(e.currentTarget.value)},rows:12}))),!p&&o.default.createElement(t.Field,null,o.default.createElement(t.Button,{"data-testid":s,type:"button",fill:"outline",style:{color:""+y.colors.primary.text},onClick:h},"Paste JWT Token")),p&&r&&o.default.createElement(t.Field,null,o.default.createElement(t.Button,{type:"button",fill:"outline",style:{color:""+y.colors.primary.text},onClick:v},"Upload JWT Token")))},E=function(e){if(!n.isObject(e))return{isValid:!1,error:"Invalid JWT token"};var t=v.filter((function(t){return!e[t]}));return t.length>0?{isValid:!1,error:"Missing keys: "+t.join(", ")}:{isValid:!0}},T=function(e){var a=e.options,n=e.onReset,l=e.onChange;return o.default.createElement("div",{"data-testid":m},o.default.createElement(t.Field,{label:"Project ID"},o.default.createElement(t.Input,{id:"defaultProject",width:60,value:a.defaultProject||"",onChange:l("defaultProject")})),o.default.createElement(t.Field,{label:"Client email"},o.default.createElement(t.Input,{width:60,id:"clientEmail",value:a.clientEmail||"",onChange:l("clientEmail")})),o.default.createElement(t.Field,{label:"Token URI"},o.default.createElement(t.Input,{width:60,id:"tokenUri",value:a.tokenUri||"",onChange:l("tokenUri")})),o.default.createElement(t.Field,{label:"Private key",disabled:!0},o.default.createElement(t.Input,{width:60,id:"privateKey",readOnly:!0,placeholder:"Private key configured",addonAfter:o.default.createElement(t.Tooltip,{content:"Click to clear the uploaded JWT token and upload a new one"},o.default.createElement(t.Button,{"data-testid":p,icon:"sync",size:"xs",onClick:function(){return n(null)},fill:"outline"},"Reset token"))})))};exports.GoogleAuthType=void 0,(u=exports.GoogleAuthType||(exports.GoogleAuthType={})).JWT="jwt",u.GCE="gce";var k=[{label:"Google JWT File",value:exports.GoogleAuthType.JWT,ariaLabel:y},{label:"GCE Default Service Account",value:exports.GoogleAuthType.GCE,ariaLabel:h}];exports.ConnectionConfig=function(a){var n=a.options,l=a.onOptionsChange,i=n.jsonData,u=n.secureJsonFields,d=n.secureJsonData;i.authenticationType||(i.authenticationType=exports.GoogleAuthType.JWT);var f=i.authenticationType===exports.GoogleAuthType.JWT||void 0===i.authenticationType,s=Boolean(u&&u.privateKey&&i.clientEmail&&i.defaultProject&&i.tokenUri);return o.default.createElement(o.default.Fragment,null,o.default.createElement(t.FieldSet,{label:"Authentication"},o.default.createElement(t.Field,{label:"Authentication type"},o.default.createElement(t.RadioButtonGroup,{options:k,value:i.authenticationType||exports.GoogleAuthType.JWT,onChange:function(e){l(r(r({},n),{jsonData:r(r({},n.jsonData),{authenticationType:e})}))}}))),f&&o.default.createElement(t.FieldSet,{label:"JWT Key Details"},s?o.default.createElement(T,{options:n.jsonData,onReset:function(e){var t=r({},d),a=e?r(r({},n.jsonData),e):r({},n.jsonData);delete a.clientEmail,delete a.defaultProject,delete a.tokenUri,delete t.privateKey,l(r(r({},n),{secureJsonData:t,jsonData:a}))},onChange:function(t){return e.onUpdateDatasourceJsonDataOption(a,t)}}):o.default.createElement(g,{onChange:function(e){l(r(r({},n),{secureJsonFields:r(r({},u),{privateKey:!0}),secureJsonData:r(r({},d),{privateKey:e.privateKey}),jsonData:r(r({},i),{clientEmail:e.clientEmail,defaultProject:e.projectId,tokenUri:e.tokenUri})}))}})," "),o.default.createElement("div",{className:"grafana-info-box",style:{marginTop:"16px"},"data-testid":c},o.default.createElement("p",null,"Don’t know how to get a service account key file or create a service account? Read more"," ",o.default.createElement("a",{className:"external-link",target:"_blank",rel:"noopener noreferrer",href:"https://grafana.com/docs/grafana/latest/datasources/google-cloud-monitoring/google-authentication/"},"in the documentation."))),!f&&o.default.createElement(t.Alert,{title:"",severity:"info"},"Verify GCE default service account by clicking Save & Test"))};


 }),

 "./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/index.js":
 ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("./.yarn/cache/@grafana-google-sdk-npm-0.0.3-c91663433f-9eb5e043e0.zip/node_modules/@grafana/google-sdk/dist/index.production.js");
} else {}


 })

}]);