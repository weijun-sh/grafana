"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[4156],{

 "./public/app/core/components/NodeGraphSettings.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "n": () => ( NodeGraphSettings)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;







function NodeGraphSettings(_ref) {
  var _options$jsonData$nod;

  let {
    options,
    onOptionsChange
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.container,
    children: [_h || (_h = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
      className: "page-heading",
      children: "Node Graph"
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      className: styles.row,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        tooltip: "Enables the Node Graph visualization in the trace viewer.",
        label: "Enable Node Graph",
        labelWidth: 26,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineSwitch, {
          id: "enableNodeGraph",
          value: (_options$jsonData$nod = options.jsonData.nodeGraph) === null || _options$jsonData$nod === void 0 ? void 0 : _options$jsonData$nod.enabled,
          onChange: event => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'nodeGraph', Object.assign({}, options.jsonData.nodeGraph, {
            enabled: event.currentTarget.checked
          }))
        })
      })
    })]
  });
}

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: container;
    width: 100%;
  `,
  row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: row;
    align-items: baseline;
  `
});

 }),

 "./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "Z": () => ( TraceToLogsSettings)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _Icon, _Icon2, _Icon3;






const EQ_WIDTH = 3; 

const KeyValueInput = _ref => {
  let {
    values,
    onChange,
    id,
    keyPlaceholder = 'Key',
    valuePlaceholder = 'Value (optional)'
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(getStyles);
  return (0,jsx_runtime.jsx)("div", {
    className: styles.wrapper,
    children: values.length ? values.map((value, idx) => (0,jsx_runtime.jsxs)("div", {
      className: styles.pair,
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.SegmentInput, {
        id: `${id}-key-${idx}`,
        placeholder: keyPlaceholder,
        value: value.key,
        onChange: e => {
          onChange(values.map((v, i) => {
            if (i === idx) {
              v.key = String(e);
            }

            return v;
          }));
        }
      }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineLabel, {
        "aria-label": "equals",
        className: styles.operator,
        width: EQ_WIDTH,
        children: "="
      }), (0,jsx_runtime.jsx)(grafana_ui_src.SegmentInput, {
        id: `${id}-value-${idx}`,
        placeholder: valuePlaceholder,
        value: value.value,
        onChange: e => {
          onChange(values.map((v, i) => {
            if (i === idx) {
              v.value = String(e);
            }

            return v;
          }));
        }
      }), (0,jsx_runtime.jsx)("button", {
        onClick: () => onChange([...values.slice(0, idx), ...values.slice(idx + 1)]),
        className: "gf-form-label query-part",
        "aria-label": "Remove tag",
        children: _Icon || (_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: "times"
        }))
      }), idx === values.length - 1 ? (0,jsx_runtime.jsx)("button", {
        onClick: () => onChange([...values, {
          key: '',
          value: ''
        }]),
        className: "gf-form-label query-part",
        "aria-label": "Add tag",
        children: _Icon2 || (_Icon2 = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: "plus"
        }))
      }) : null]
    }, idx)) : (0,jsx_runtime.jsx)("button", {
      onClick: () => onChange([...values, {
        key: '',
        value: ''
      }]),
      className: "gf-form-label query-part",
      "aria-label": "Add tag",
      children: _Icon3 || (_Icon3 = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "plus"
      }))
    })
  });
};

 const TraceToLogs_KeyValueInput = (KeyValueInput);

const getStyles = theme => ({
  wrapper: emotion_css_esm.css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs} 0;
  `,
  pair: emotion_css_esm.css`
    display: flex;
    justify-content: start;
    align-items: center;
  `,
  operator: emotion_css_esm.css`
    color: ${theme.palette.orange};
  `
});
;
var _h;









function TraceToLogsSettings(_ref) {
  var _options$jsonData$tra, _options$jsonData$tra3, _ref2, _options$jsonData$tra4, _options$jsonData$tra5, _options$jsonData$tra6, _options$jsonData$tra7, _options$jsonData$tra8, _options$jsonData$tra9, _options$jsonData$tra10, _options$jsonData$tra11, _options$jsonData$tra12, _options$jsonData$tra13, _options$jsonData$tra14;

  let {
    options,
    onOptionsChange
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(TraceToLogsSettings_getStyles);
  return (0,jsx_runtime.jsxs)("div", {
    className: (0,emotion_css_esm.css)({
      width: '100%'
    }),
    children: [_h || (_h = (0,jsx_runtime.jsx)("h3", {
      className: "page-heading",
      children: "Trace to logs"
    })), (0,jsx_runtime.jsx)("div", {
      className: styles.infoText,
      children: "Trace to logs lets you navigate from a trace span to the selected data source's logs."
    }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        tooltip: "The data source the trace is going to navigate to",
        label: "Data source",
        labelWidth: 26,
        children: (0,jsx_runtime.jsx)(grafana_runtime_src.DataSourcePicker, {
          inputId: "trace-to-logs-data-source-picker",
          filter: ds => {
            return ds.type === 'loki' || ds.type === 'grafana-splunk-datasource';
          },
          current: (_options$jsonData$tra = options.jsonData.tracesToLogs) === null || _options$jsonData$tra === void 0 ? void 0 : _options$jsonData$tra.datasourceUid,
          noDefault: true,
          width: 40,
          onChange: ds => {
            var _options$jsonData$tra2;

            return (0,src.updateDatasourcePluginJsonDataOption)({
              onOptionsChange,
              options
            }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
              datasourceUid: ds.uid,
              tags: (_options$jsonData$tra2 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra2 === void 0 ? void 0 : _options$jsonData$tra2.tags
            }));
          }
        })
      })
    }), (_options$jsonData$tra3 = options.jsonData.tracesToLogs) !== null && _options$jsonData$tra3 !== void 0 && _options$jsonData$tra3.mapTagNamesEnabled ? (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        tooltip: "Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'",
        label: "Tags",
        labelWidth: 26,
        children: (0,jsx_runtime.jsx)(TraceToLogs_KeyValueInput, {
          keyPlaceholder: "Tag",
          values: (_ref2 = (_options$jsonData$tra4 = (_options$jsonData$tra5 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra5 === void 0 ? void 0 : _options$jsonData$tra5.mappedTags) !== null && _options$jsonData$tra4 !== void 0 ? _options$jsonData$tra4 : (_options$jsonData$tra6 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra6 === void 0 ? void 0 : (_options$jsonData$tra7 = _options$jsonData$tra6.tags) === null || _options$jsonData$tra7 === void 0 ? void 0 : _options$jsonData$tra7.map(tag => ({
            key: tag
          }))) !== null && _ref2 !== void 0 ? _ref2 : [],
          onChange: v => (0,src.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            mappedTags: v
          }))
        })
      })
    }) : (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        tooltip: "Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'",
        label: "Tags",
        labelWidth: 26,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.TagsInput, {
          tags: (_options$jsonData$tra8 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra8 === void 0 ? void 0 : _options$jsonData$tra8.tags,
          width: 40,
          onChange: tags => (0,src.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            tags: tags
          }))
        })
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Map tag names",
        labelWidth: 26,
        grow: true,
        tooltip: "Map trace tag names to log label names. Ex: k8s.pod.name -> pod",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
          id: "mapTagNames",
          value: (_options$jsonData$tra9 = (_options$jsonData$tra10 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra10 === void 0 ? void 0 : _options$jsonData$tra10.mapTagNamesEnabled) !== null && _options$jsonData$tra9 !== void 0 ? _options$jsonData$tra9 : false,
          onChange: event => (0,src.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            mapTagNamesEnabled: event.currentTarget.checked
          }))
        })
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Span start time shift",
        labelWidth: 26,
        grow: true,
        tooltip: "Shifts the start time of the span. Default 0 (Time units can be used here, for example: 5s, 1m, 3h)",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          type: "text",
          placeholder: "1h",
          width: 40,
          onChange: v => (0,src.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            spanStartTimeShift: v.currentTarget.value
          })),
          value: ((_options$jsonData$tra11 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra11 === void 0 ? void 0 : _options$jsonData$tra11.spanStartTimeShift) || ''
        })
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Span end time shift",
        labelWidth: 26,
        grow: true,
        tooltip: "Shifts the end time of the span. Default 0 Time units can be used here, for example: 5s, 1m, 3h",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          type: "text",
          placeholder: "1h",
          width: 40,
          onChange: v => (0,src.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            spanEndTimeShift: v.currentTarget.value
          })),
          value: ((_options$jsonData$tra12 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra12 === void 0 ? void 0 : _options$jsonData$tra12.spanEndTimeShift) || ''
        })
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Filter by Trace ID",
        labelWidth: 26,
        grow: true,
        tooltip: "Filters logs by Trace ID. Appends '|=<trace id>' to the query.",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
          id: "filterByTraceID",
          value: (_options$jsonData$tra13 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra13 === void 0 ? void 0 : _options$jsonData$tra13.filterByTraceID,
          onChange: event => (0,src.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            filterByTraceID: event.currentTarget.checked
          }))
        })
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Filter by Span ID",
        labelWidth: 26,
        grow: true,
        tooltip: "Filters logs by Span ID. Appends '|=<span id>' to the query.",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
          id: "filterBySpanID",
          value: (_options$jsonData$tra14 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra14 === void 0 ? void 0 : _options$jsonData$tra14.filterBySpanID,
          onChange: event => (0,src.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            filterBySpanID: event.currentTarget.checked
          }))
        })
      })
    })]
  });
}

const TraceToLogsSettings_getStyles = theme => ({
  infoText: emotion_css_esm.css`
    padding-bottom: ${theme.spacing.md};
    color: ${theme.colors.textSemiWeak};
  `
});

 }),

 "./public/app/core/components/TraceToMetrics/TraceToMetricsSettings.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "F": () => ( TraceToMetricsSettings)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;








function TraceToMetricsSettings(_ref) {
  var _options$jsonData$tra, _options$jsonData$tra2, _options$jsonData$tra3;

  let {
    options,
    onOptionsChange
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles)(getStyles);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      width: '100%'
    }),
    children: [_h || (_h = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
      className: "page-heading",
      children: "Trace to metrics"
    })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.infoText,
      children: "Trace to metrics lets you navigate from a trace span to the selected data source."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      className: styles.row,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        tooltip: "The data source the trace is going to navigate to",
        label: "Data source",
        labelWidth: 26,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.DataSourcePicker, {
          inputId: "trace-to-metrics-data-source-picker",
          pluginId: "prometheus",
          current: (_options$jsonData$tra = options.jsonData.tracesToMetrics) === null || _options$jsonData$tra === void 0 ? void 0 : _options$jsonData$tra.datasourceUid,
          noDefault: true,
          width: 40,
          onChange: ds => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToMetrics', Object.assign({}, options.jsonData.tracesToMetrics, {
            datasourceUid: ds.uid
          }))
        })
      }), (_options$jsonData$tra2 = options.jsonData.tracesToMetrics) !== null && _options$jsonData$tra2 !== void 0 && _options$jsonData$tra2.datasourceUid ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        type: "button",
        variant: "secondary",
        size: "sm",
        fill: "text",
        onClick: () => {
          (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToMetrics', Object.assign({}, options.jsonData.tracesToMetrics, {
            datasourceUid: undefined
          }));
        },
        children: "Clear"
      }) : null]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Query",
        labelWidth: 26,
        tooltip: "The Prometheus query that will run when navigating from a trace to metrics",
        grow: true,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          label: "Query",
          type: "text",
          allowFullScreen: true,
          value: (_options$jsonData$tra3 = options.jsonData.tracesToMetrics) === null || _options$jsonData$tra3 === void 0 ? void 0 : _options$jsonData$tra3.query,
          onChange: e => {
            (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
              onOptionsChange,
              options
            }, 'tracesToMetrics', Object.assign({}, options.jsonData.tracesToMetrics, {
              query: e.currentTarget.value
            }));
          }
        })
      })
    })]
  });
}

const getStyles = theme => ({
  infoText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding-bottom: ${theme.spacing.md};
    color: ${theme.colors.textSemiWeak};
  `,
  row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: row;
    align-items: baseline;
  `
});

 }),

 "./public/app/plugins/datasource/tempo/module.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "plugin": () => ( module_plugin)
});

var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _div;




function CheatSheet() {
  return _div || (_div = (0,jsx_runtime.jsxs)("div", {
    children: [(0,jsx_runtime.jsx)("h2", {
      id: "tempo-cheat-sheet",
      children: "Tempo Cheat Sheet"
    }), (0,jsx_runtime.jsx)("p", {
      children: "Tempo is a trace id lookup store. Enter a trace id in the above field and hit \u201CRun Query\u201D to retrieve your trace. Tempo is generally paired with other datasources such as Loki or Prometheus to find traces."
    }), (0,jsx_runtime.jsxs)("p", {
      children: ["Here are some", ' ', (0,jsx_runtime.jsx)("a", {
        href: "https://grafana.com/docs/tempo/latest/guides/instrumentation/",
        target: "blank",
        children: "instrumentation examples"
      }), ' ', "to get you started with trace discovery through logs and metrics (exemplars)."]
    })]
  }));
}
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var useAsync = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/lib/useAsync.js");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var LokiQueryField = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiQueryField.tsx");
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var prism = __webpack_require__("./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js");
var prism_default = __webpack_require__.n(prism);
var actions = __webpack_require__("./public/app/core/actions/index.ts");
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
var store = __webpack_require__("./public/app/store/store.ts");
;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class TempoLanguageProvider extends src.LanguageProvider {
  constructor(datasource, initialValues) {
    var _this;

    super();
    _this = this;

    _defineProperty(this, "datasource", void 0);

    _defineProperty(this, "tags", void 0);

    _defineProperty(this, "request", async function (url) {
      let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const res = await _this.datasource.metadataRequest(url, params);
      return res === null || res === void 0 ? void 0 : res.data;
    });

    _defineProperty(this, "start", async () => {
      await this.fetchTags();
      return [];
    });

    _defineProperty(this, "provideCompletionItems", async function (_ref) {
      let {
        prefix,
        text,
        value,
        labelKey,
        wrapperClasses
      } = _ref;
      let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        history: []
      };
      const emptyResult = {
        suggestions: []
      };

      if (!value) {
        return emptyResult;
      }

      const query = value.endText.getText();
      const isValue = query[query.indexOf(text) - 1] === '=';

      if (isValue || text === '=') {
        return _this.getTagValueCompletionItems(value);
      }

      return _this.getTagsCompletionItems();
    });

    _defineProperty(this, "getTagsCompletionItems", () => {
      const {
        tags
      } = this;
      const suggestions = [];

      if (tags !== null && tags !== void 0 && tags.length) {
        suggestions.push({
          label: `Tag`,
          items: tags.map(tag => ({
            label: tag
          }))
        });
      }

      return {
        suggestions
      };
    });

    this.datasource = datasource;
    Object.assign(this, initialValues);
  }

  async fetchTags() {
    const response = await this.request('/api/search/tags', []);
    this.tags = response.tagNames;
  }

  async getTagValueCompletionItems(value) {
    var _tags;

    const tags = value.endText.getText().split(' ');
    let tagName = (_tags = tags[tags.length - 1]) !== null && _tags !== void 0 ? _tags : '';
    tagName = tagName.split('=')[0];
    const response = await this.request(`/api/search/tag/${tagName}/values`, []);
    const suggestions = [];

    if (response && response.tagValues) {
      suggestions.push({
        label: `Tag Values`,
        items: response.tagValues.map(tagValue => ({
          label: tagValue
        }))
      });
    }

    return {
      suggestions
    };
  }

  async getOptions(tag) {
    const response = await this.request(`/api/search/tag/${tag}/values`);
    let options = [];

    if (response && response.tagValues) {
      options = response.tagValues.map(v => ({
        value: v,
        label: v
      }));
    }

    return options;
  }

}
;
const tokenizer = {
  key: {
    pattern: /[^\s]+(?==)/,
    alias: 'attr-name'
  },
  operator: /[=]/,
  value: [{
    pattern: /"(.+)"/
  }, {
    pattern: /[^\s]+/
  }]
};
;















const PRISM_LANGUAGE = 'tempo';
const durationPlaceholder = 'e.g. 1.2s, 100ms';
const plugins = [(0,grafana_ui_src.BracesPlugin)(), (0,grafana_ui_src.SlatePrism)({
  onlyIn: node => node.object === 'block' && node.type === 'code_block',
  getSyntax: () => PRISM_LANGUAGE
})];
(prism_default()).languages[PRISM_LANGUAGE] = tokenizer;

const NativeSearch = _ref => {
  let {
    datasource,
    query,
    onChange,
    onBlur,
    onRunQuery
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  const languageProvider = (0,react.useMemo)(() => new TempoLanguageProvider(datasource), [datasource]);
  const [hasSyntaxLoaded, setHasSyntaxLoaded] = (0,react.useState)(false);
  const [asyncServiceNameValue, setAsyncServiceNameValue] = (0,react.useState)({
    value: ''
  });
  const [asyncSpanNameValue, setAsyncSpanNameValue] = (0,react.useState)({
    value: ''
  });
  const [error, setError] = (0,react.useState)(null);
  const [inputErrors, setInputErrors] = (0,react.useState)({});
  const [isLoading, setIsLoading] = (0,react.useState)({
    serviceName: false,
    spanName: false
  });

  async function fetchOptionsCallback(name, lp) {
    let query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    try {
      setIsLoading(prevValue => Object.assign({}, prevValue, {
        [name]: false
      }));
      const options = await lp.getOptions(name);
      const filteredOptions = options.filter(item => item.value ? (0,grafana_ui_src.fuzzyMatch)(item.value, query).found : false);
      return filteredOptions;
    } catch (error) {
      if ((error === null || error === void 0 ? void 0 : error.status) === 404) {
        setIsLoading(prevValue => Object.assign({}, prevValue, {
          [name]: false
        }));
      } else {
        (0,store.WI)((0,actions.$l)((0,appNotification.t_)('Error', error)));
        setIsLoading(prevValue => Object.assign({}, prevValue, {
          [name]: false
        }));
      }

      setError(error);
      return [];
    }
  }

  const loadOptionsOfType = (0,react.useCallback)(name => {
    setIsLoading(prevValue => Object.assign({}, prevValue, {
      [name]: true
    }));
    return fetchOptionsCallback(name, languageProvider);
  }, [languageProvider]);
  const fetchOptionsOfType = (0,react.useCallback)(name => (0,lodash.debounce)(() => loadOptionsOfType(name), 500, {
    leading: true,
    trailing: true
  }), [loadOptionsOfType]);

  const getNameOptions = (query, name) => {
    setIsLoading(prevValue => Object.assign({}, prevValue, {
      [name]: true
    }));
    return fetchOptionsCallback(name, languageProvider, query);
  };

  const getServiceNameOptions = query => {
    return getNameOptions(query, 'service.name');
  };

  const getSpanNameOptions = query => {
    return getNameOptions(query, 'name');
  };

  const serviceNameSearch = (0,lodash.debounce)(getServiceNameOptions, 500, {
    leading: true,
    trailing: true
  });
  const spanNameSearch = (0,lodash.debounce)(getSpanNameOptions, 500, {
    leading: true,
    trailing: true
  });
  (0,react.useEffect)(() => {
    const fetchOptions = async () => {
      try {
        await languageProvider.start();
        fetchOptionsCallback('service.name', languageProvider);
        fetchOptionsCallback('name', languageProvider);
        setHasSyntaxLoaded(true);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.status) === 404) {
          setError(error);
        } else {
          (0,store.WI)((0,actions.$l)((0,appNotification.t_)('Error', error)));
        }

        setHasSyntaxLoaded(true);
      }
    };

    fetchOptions();
  }, [languageProvider, fetchOptionsOfType]);

  const onTypeahead = async typeahead => {
    return await languageProvider.provideCompletionItems(typeahead);
  };

  const cleanText = text => {
    const splittedText = text.split(/\s+(?=([^"]*"[^"]*")*[^"]*$)/g);

    if (splittedText.length > 1) {
      return splittedText[splittedText.length - 1];
    }

    return text;
  };

  const onKeyDown = keyEvent => {
    if (keyEvent.key === 'Enter' && (keyEvent.shiftKey || keyEvent.ctrlKey)) {
      onRunQuery();
    }
  };

  const templateSrv = (0,grafana_runtime_src.getTemplateSrv)();
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)("div", {
      className: styles.container,
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Service Name",
          labelWidth: 14,
          grow: true,
          children: (0,jsx_runtime.jsx)(grafana_ui_src.AsyncSelect, {
            inputId: "service",
            cacheOptions: false,
            loadOptions: serviceNameSearch,
            onOpenMenu: fetchOptionsOfType('service.name'),
            isLoading: isLoading.serviceName,
            value: asyncServiceNameValue.value,
            onChange: v => {
              setAsyncServiceNameValue({
                value: v
              });
              onChange(Object.assign({}, query, {
                serviceName: (v === null || v === void 0 ? void 0 : v.value) || undefined
              }));
            },
            placeholder: "Select a service",
            isClearable: true,
            defaultOptions: true,
            onKeyDown: onKeyDown,
            "aria-label": 'select-service-name'
          })
        })
      }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Span Name",
          labelWidth: 14,
          grow: true,
          children: (0,jsx_runtime.jsx)(grafana_ui_src.AsyncSelect, {
            inputId: "spanName",
            cacheOptions: false,
            loadOptions: spanNameSearch,
            onOpenMenu: fetchOptionsOfType('name'),
            isLoading: isLoading.spanName,
            value: asyncSpanNameValue.value,
            onChange: v => {
              setAsyncSpanNameValue({
                value: v
              });
              onChange(Object.assign({}, query, {
                spanName: (v === null || v === void 0 ? void 0 : v.value) || undefined
              }));
            },
            placeholder: "Select a span",
            isClearable: true,
            defaultOptions: true,
            onKeyDown: onKeyDown,
            "aria-label": 'select-span-name'
          })
        })
      }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Tags",
          labelWidth: 14,
          grow: true,
          tooltip: "Values should be in the logfmt format.",
          children: (0,jsx_runtime.jsx)(grafana_ui_src.QueryField, {
            additionalPlugins: plugins,
            query: query.search,
            onTypeahead: onTypeahead,
            onBlur: onBlur,
            onChange: value => {
              onChange(Object.assign({}, query, {
                search: value
              }));
            },
            placeholder: "http.status_code=200 error=true",
            cleanText: cleanText,
            onRunQuery: onRunQuery,
            syntaxLoaded: hasSyntaxLoaded,
            portalOrigin: "tempo"
          })
        })
      }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Min Duration",
          invalid: !!inputErrors.minDuration,
          labelWidth: 14,
          grow: true,
          children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
            id: "minDuration",
            value: query.minDuration || '',
            placeholder: durationPlaceholder,
            onBlur: () => {
              var _query$minDuration;

              const templatedMinDuration = templateSrv.replace((_query$minDuration = query.minDuration) !== null && _query$minDuration !== void 0 ? _query$minDuration : '');

              if (query.minDuration && !(0,src.isValidGoDuration)(templatedMinDuration)) {
                setInputErrors(Object.assign({}, inputErrors, {
                  minDuration: true
                }));
              } else {
                setInputErrors(Object.assign({}, inputErrors, {
                  minDuration: false
                }));
              }
            },
            onChange: v => onChange(Object.assign({}, query, {
              minDuration: v.currentTarget.value
            })),
            onKeyDown: onKeyDown
          })
        })
      }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Max Duration",
          invalid: !!inputErrors.maxDuration,
          labelWidth: 14,
          grow: true,
          children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
            id: "maxDuration",
            value: query.maxDuration || '',
            placeholder: durationPlaceholder,
            onBlur: () => {
              var _query$maxDuration;

              const templatedMaxDuration = templateSrv.replace((_query$maxDuration = query.maxDuration) !== null && _query$maxDuration !== void 0 ? _query$maxDuration : '');

              if (query.maxDuration && !(0,src.isValidGoDuration)(templatedMaxDuration)) {
                setInputErrors(Object.assign({}, inputErrors, {
                  maxDuration: true
                }));
              } else {
                setInputErrors(Object.assign({}, inputErrors, {
                  maxDuration: false
                }));
              }
            },
            onChange: v => onChange(Object.assign({}, query, {
              maxDuration: v.currentTarget.value
            })),
            onKeyDown: onKeyDown
          })
        })
      }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Limit",
          invalid: !!inputErrors.limit,
          labelWidth: 14,
          grow: true,
          tooltip: "Maximum numbers of returned results",
          children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
            id: "limit",
            value: query.limit || '',
            type: "number",
            onChange: v => {
              let limit = v.currentTarget.value ? parseInt(v.currentTarget.value, 10) : undefined;

              if (limit && (!Number.isInteger(limit) || limit <= 0)) {
                setInputErrors(Object.assign({}, inputErrors, {
                  limit: true
                }));
              } else {
                setInputErrors(Object.assign({}, inputErrors, {
                  limit: false
                }));
              }

              onChange(Object.assign({}, query, {
                limit: v.currentTarget.value ? parseInt(v.currentTarget.value, 10) : undefined
              }));
            },
            onKeyDown: onKeyDown
          })
        })
      })]
    }), error ? (0,jsx_runtime.jsxs)(grafana_ui_src.Alert, {
      title: "Unable to connect to Tempo search",
      severity: "info",
      className: styles.alert,
      children: ["Please ensure that Tempo is configured with search enabled. If you would like to hide this tab, you can configure it in the ", (0,jsx_runtime.jsx)("a", {
        href: `/datasources/edit/${datasource.uid}`,
        children: "datasource settings"
      }), "."]
    }) : null]
  });
};

 const QueryEditor_NativeSearch = (NativeSearch);

const getStyles = theme => ({
  container: emotion_css_esm.css`
    max-width: 500px;
  `,
  alert: emotion_css_esm.css`
    max-width: 75ch;
    margin-top: ${theme.spacing(2)};
  `
});
var AdHocFilter = __webpack_require__("./public/app/features/variables/adhoc/picker/AdHocFilter.tsx");
;

async function getDS(uid) {
  if (!uid) {
    return undefined;
  }

  const dsSrv = (0,grafana_runtime_src.getDataSourceSrv)();

  try {
    return await dsSrv.get(uid);
  } catch (error) {
    console.error('Failed to load data source', error);
    return undefined;
  }
}
;
var ServiceGraphSection_div, _div2, _a;









function ServiceGraphSection(_ref) {
  let {
    graphDatasourceUid,
    query,
    onChange
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(ServiceGraphSection_getStyles);
  const dsState = (0,useAsync.Z)(() => getDS(graphDatasourceUid), [graphDatasourceUid]); 

  const [hasKeys, setHasKeys] = (0,react.useState)(undefined);
  (0,react.useEffect)(() => {
    async function fn(ds) {
      const keys = await ds.getTagKeys({
        series: ['traces_service_graph_request_server_seconds_sum', 'traces_service_graph_request_total', 'traces_service_graph_request_failed_total']
      });
      setHasKeys(Boolean(keys.length));
    }

    if (!dsState.loading && dsState.value) {
      fn(dsState.value);
    }
  }, [dsState]);

  if (dsState.loading) {
    return null;
  }

  const ds = dsState.value;

  if (!graphDatasourceUid) {
    return ServiceGraphSection_div || (ServiceGraphSection_div = (0,jsx_runtime.jsx)("div", {
      className: "text-warning",
      children: "Please set up a service graph datasource in the datasource settings."
    }));
  }

  if (graphDatasourceUid && !ds) {
    return _div2 || (_div2 = (0,jsx_runtime.jsx)("div", {
      className: "text-warning",
      children: "Service graph datasource is configured but the data source no longer exists. Please configure existing data source to use the service graph functionality."
    }));
  }

  const filters = queryToFilter(query.serviceMapQuery || '');
  return (0,jsx_runtime.jsxs)("div", {
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Filter",
        labelWidth: 14,
        grow: true,
        children: (0,jsx_runtime.jsx)(AdHocFilter.F, {
          datasource: {
            uid: graphDatasourceUid
          },
          filters: filters,
          getTagKeysOptions: {
            series: ['traces_service_graph_request_server_seconds_sum', 'traces_service_graph_request_total', 'traces_service_graph_request_failed_total']
          },
          addFilter: filter => {
            onChange(Object.assign({}, query, {
              serviceMapQuery: filtersToQuery([...filters, filter])
            }));
          },
          removeFilter: index => {
            const newFilters = [...filters];
            newFilters.splice(index, 1);
            onChange(Object.assign({}, query, {
              serviceMapQuery: filtersToQuery(newFilters)
            }));
          },
          changeFilter: (index, filter) => {
            const newFilters = [...filters];
            newFilters.splice(index, 1, filter);
            onChange(Object.assign({}, query, {
              serviceMapQuery: filtersToQuery(newFilters)
            }));
          }
        })
      })
    }), hasKeys === false ? (0,jsx_runtime.jsxs)(grafana_ui_src.Alert, {
      title: "No service graph data found",
      severity: "info",
      className: styles.alert,
      children: ["Please ensure that service graph metrics are set up correctly according to the", ' ', _a || (_a = (0,jsx_runtime.jsx)("a", {
        target: "_blank",
        rel: "noreferrer noopener",
        href: "https://grafana.com/docs/tempo/next/grafana-agent/service-graphs/",
        children: "Tempo documentation"
      })), "."]
    }) : null]
  });
}

function queryToFilter(query) {
  let match;
  let filters = [];
  const re = /([\w_]+)(=|!=|<|>|=~|!~)"(.*?)"/g;

  while ((match = re.exec(query)) !== null) {
    filters.push({
      key: match[1],
      operator: match[2],
      value: match[3],
      condition: ''
    });
  }

  return filters;
}

function filtersToQuery(filters) {
  return `{${filters.map(f => `${f.key}${f.operator}"${f.value}"`).join(',')}}`;
}

const ServiceGraphSection_getStyles = theme => ({
  alert: emotion_css_esm.css`
    max-width: 75ch;
    margin-top: ${theme.spacing(2)};
  `
});
;
var _Badge, QueryField_div, QueryField_div2;

function QueryField_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const DEFAULT_QUERY_TYPE = 'traceId';

class TempoQueryFieldComponent extends react.PureComponent {
  constructor(props) {
    super(props);

    QueryField_defineProperty(this, "onChangeLinkedQuery", value => {
      const {
        query,
        onChange
      } = this.props;
      onChange(Object.assign({}, query, {
        linkedQuery: Object.assign({}, value, {
          refId: 'linked'
        })
      }));
    });

    QueryField_defineProperty(this, "onRunLinkedQuery", () => {
      this.props.onRunQuery();
    });

    QueryField_defineProperty(this, "onClearResults", () => {
      const {
        onChange,
        query,
        onRunQuery
      } = this.props;
      onChange(Object.assign({}, query, {
        queryType: 'clear'
      }));
      onRunQuery();
    });
  }

  async componentDidMount() {
    if (!this.props.query.queryType) {
      this.props.onChange(Object.assign({}, this.props.query, {
        queryType: DEFAULT_QUERY_TYPE
      }));
    }
  }

  render() {
    var _datasource$serviceMa, _datasource$search;

    const {
      query,
      onChange,
      datasource
    } = this.props;
    const logsDatasourceUid = datasource.getLokiSearchDS();
    const graphDatasourceUid = (_datasource$serviceMa = datasource.serviceMap) === null || _datasource$serviceMa === void 0 ? void 0 : _datasource$serviceMa.datasourceUid;
    const queryTypeOptions = [{
      value: 'traceId',
      label: 'TraceID'
    }, {
      value: 'upload',
      label: 'JSON file'
    }];

    if (grafana_runtime_src.config.featureToggles.tempoServiceGraph) {
      queryTypeOptions.push({
        value: 'serviceMap',
        label: 'Service Graph'
      });
    }

    if (grafana_runtime_src.config.featureToggles.tempoSearch && !(datasource !== null && datasource !== void 0 && (_datasource$search = datasource.search) !== null && _datasource$search !== void 0 && _datasource$search.hide)) {
      queryTypeOptions.unshift({
        value: 'nativeSearch',
        label: 'Search - Beta'
      });
    }

    if (logsDatasourceUid) {
      if (!grafana_runtime_src.config.featureToggles.tempoSearch) {
        queryTypeOptions.unshift({
          value: 'search',
          label: 'Search'
        });
      } else {
        queryTypeOptions.push({
          value: 'search',
          label: 'Loki Search'
        });
      }
    }

    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Query type",
          children: (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
            options: queryTypeOptions,
            value: query.queryType,
            onChange: v => {
              this.onClearResults();
              onChange(Object.assign({}, query, {
                queryType: v
              }));
            },
            size: "md"
          })
        })
      }), query.queryType === 'nativeSearch' && (0,jsx_runtime.jsxs)("div", {
        style: {
          maxWidth: '65ch'
        },
        children: [_Badge || (_Badge = (0,jsx_runtime.jsx)(grafana_ui_src.Badge, {
          icon: "rocket",
          text: "Beta",
          color: "blue"
        })), grafana_runtime_src.config.featureToggles.tempoBackendSearch ? (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: "\xA0Tempo search is currently in beta."
        }) : (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: "\xA0Tempo search is currently in beta and is designed to return recent traces only. It ignores the time range picker. We are actively working on full backend search. Look for improvements in the near future!"
        })]
      }), query.queryType === 'search' && (0,jsx_runtime.jsx)(SearchSection, {
        logsDatasourceUid: logsDatasourceUid,
        query: query,
        onRunQuery: this.onRunLinkedQuery,
        onChange: this.onChangeLinkedQuery
      }), query.queryType === 'nativeSearch' && (0,jsx_runtime.jsx)(QueryEditor_NativeSearch, {
        datasource: this.props.datasource,
        query: query,
        onChange: onChange,
        onBlur: this.props.onBlur,
        onRunQuery: this.props.onRunQuery
      }), query.queryType === 'upload' && (0,jsx_runtime.jsx)("div", {
        className: (0,emotion_css_esm.css)({
          padding: this.props.theme.spacing(2)
        }),
        children: (0,jsx_runtime.jsx)(grafana_ui_src.FileDropzone, {
          options: {
            multiple: false
          },
          onLoad: result => {
            this.props.datasource.uploadedJson = result;
            this.props.onRunQuery();
          }
        })
      }), query.queryType === 'traceId' && (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Trace ID",
          labelWidth: 14,
          grow: true,
          children: (0,jsx_runtime.jsx)(grafana_ui_src.QueryField, {
            query: query.query,
            onChange: val => {
              onChange(Object.assign({}, query, {
                query: val,
                queryType: 'traceId',
                linkedQuery: undefined
              }));
            },
            onBlur: this.props.onBlur,
            onRunQuery: this.props.onRunQuery,
            placeholder: 'Enter a Trace ID (run with Shift+Enter)',
            portalOrigin: "tempo"
          })
        })
      }), query.queryType === 'serviceMap' && (0,jsx_runtime.jsx)(ServiceGraphSection, {
        graphDatasourceUid: graphDatasourceUid,
        query: query,
        onChange: onChange
      })]
    });
  }

}

function SearchSection(_ref) {
  let {
    logsDatasourceUid,
    onChange,
    onRunQuery,
    query
  } = _ref;
  const dsState = (0,useAsync.Z)(() => getDS(logsDatasourceUid), [logsDatasourceUid]);

  if (dsState.loading) {
    return null;
  }

  const ds = dsState.value;

  if (ds) {
    var _query$linkedQuery;

    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsxs)(grafana_ui_src.InlineLabel, {
        children: ["Tempo uses ", ds.name, " to find traces."]
      }), (0,jsx_runtime.jsx)(LokiQueryField.n, {
        datasource: ds,
        onChange: onChange,
        onRunQuery: onRunQuery,
        query: (_query$linkedQuery = query.linkedQuery) !== null && _query$linkedQuery !== void 0 ? _query$linkedQuery : {
          refId: 'linked'
        },
        history: []
      })]
    });
  }

  if (!logsDatasourceUid) {
    return QueryField_div || (QueryField_div = (0,jsx_runtime.jsx)("div", {
      className: "text-warning",
      children: "Please set up a Loki search datasource in the datasource settings."
    }));
  }

  if (logsDatasourceUid && !ds) {
    return QueryField_div2 || (QueryField_div2 = (0,jsx_runtime.jsx)("div", {
      className: "text-warning",
      children: "Loki search datasource is configured but the data source no longer exists. Please configure existing data source to use the search."
    }));
  }

  return null;
}

const TempoQueryField = (0,grafana_ui_src.withTheme2)(TempoQueryFieldComponent);
var NodeGraphSettings = __webpack_require__("./public/app/core/components/NodeGraphSettings.tsx");
var TraceToLogsSettings = __webpack_require__("./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx");
var TraceToMetricsSettings = __webpack_require__("./public/app/core/components/TraceToMetrics/TraceToMetricsSettings.tsx");
;
var _h;








function LokiSearchSettings(_ref) {
  var _options$jsonData$tra, _options$jsonData$tra2, _options$jsonData$lok, _options$jsonData$lok2;

  let {
    options,
    onOptionsChange
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(LokiSearchSettings_getStyles); 

  const legacyDatasource = ((_options$jsonData$tra = options.jsonData.tracesToLogs) === null || _options$jsonData$tra === void 0 ? void 0 : _options$jsonData$tra.lokiSearch) !== false ? (_options$jsonData$tra2 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra2 === void 0 ? void 0 : _options$jsonData$tra2.datasourceUid : undefined;

  if (legacyDatasource && options.jsonData.lokiSearch === undefined) {
    (0,src.updateDatasourcePluginJsonDataOption)({
      onOptionsChange,
      options
    }, 'lokiSearch', {
      datasourceUid: legacyDatasource
    });
  }

  return (0,jsx_runtime.jsxs)("div", {
    className: (0,emotion_css_esm.css)({
      width: '100%'
    }),
    children: [_h || (_h = (0,jsx_runtime.jsx)("h3", {
      className: "page-heading",
      children: "Loki Search"
    })), (0,jsx_runtime.jsx)("div", {
      className: styles.infoText,
      children: "Select a Loki datasource to search for traces. Derived fields must be configured in the Loki data source."
    }), (0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      className: styles.row,
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        tooltip: "The Loki data source with the service graph data",
        label: "Data source",
        labelWidth: 26,
        children: (0,jsx_runtime.jsx)(grafana_runtime_src.DataSourcePicker, {
          inputId: "loki-search-data-source-picker",
          pluginId: "loki",
          current: (_options$jsonData$lok = options.jsonData.lokiSearch) === null || _options$jsonData$lok === void 0 ? void 0 : _options$jsonData$lok.datasourceUid,
          noDefault: true,
          width: 40,
          onChange: ds => (0,src.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'lokiSearch', {
            datasourceUid: ds.uid
          })
        })
      }), (_options$jsonData$lok2 = options.jsonData.lokiSearch) !== null && _options$jsonData$lok2 !== void 0 && _options$jsonData$lok2.datasourceUid ? (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        type: 'button',
        variant: 'secondary',
        size: 'sm',
        fill: 'text',
        onClick: () => {
          (0,src.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'lokiSearch', {
            datasourceUid: undefined
          });
        },
        children: "Clear"
      }) : null]
    })]
  });
}

const LokiSearchSettings_getStyles = theme => ({
  infoText: emotion_css_esm.css`
    label: infoText;
    padding-bottom: ${theme.spacing.md};
    color: ${theme.colors.textSemiWeak};
  `,
  row: emotion_css_esm.css`
    label: row;
    align-items: baseline;
  `
});
;
var SearchSettings_h;







function SearchSettings(_ref) {
  var _options$jsonData$sea;

  let {
    options,
    onOptionsChange
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(SearchSettings_getStyles);
  return (0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [SearchSettings_h || (SearchSettings_h = (0,jsx_runtime.jsx)("h3", {
      className: "page-heading",
      children: "Search"
    })), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      className: styles.row,
      children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        tooltip: "Removes the Search tab from the Tempo query editor.",
        label: "Hide search",
        labelWidth: 26,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
          id: "hideSearch",
          value: (_options$jsonData$sea = options.jsonData.search) === null || _options$jsonData$sea === void 0 ? void 0 : _options$jsonData$sea.hide,
          onChange: event => (0,src.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'search', Object.assign({}, options.jsonData.search, {
            hide: event.currentTarget.checked
          }))
        })
      })
    })]
  });
}

const SearchSettings_getStyles = theme => ({
  container: emotion_css_esm.css`
    label: container;
    width: 100%;
  `,
  row: emotion_css_esm.css`
    label: row;
    align-items: baseline;
  `
});
;
var ServiceGraphSettings_h;








function ServiceGraphSettings(_ref) {
  var _options$jsonData$ser, _options$jsonData$ser2;

  let {
    options,
    onOptionsChange
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(ServiceGraphSettings_getStyles);
  return (0,jsx_runtime.jsxs)("div", {
    className: (0,emotion_css_esm.css)({
      width: '100%'
    }),
    children: [ServiceGraphSettings_h || (ServiceGraphSettings_h = (0,jsx_runtime.jsx)("h3", {
      className: "page-heading",
      children: "Service Graph"
    })), (0,jsx_runtime.jsx)("div", {
      className: styles.infoText,
      children: "To allow querying service graph data you have to select a Prometheus instance where the data is stored."
    }), (0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      className: styles.row,
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        tooltip: "The Prometheus data source with the service graph data",
        label: "Data source",
        labelWidth: 26,
        children: (0,jsx_runtime.jsx)(grafana_runtime_src.DataSourcePicker, {
          inputId: "service-graph-data-source-picker",
          pluginId: "prometheus",
          current: (_options$jsonData$ser = options.jsonData.serviceMap) === null || _options$jsonData$ser === void 0 ? void 0 : _options$jsonData$ser.datasourceUid,
          noDefault: true,
          width: 40,
          onChange: ds => (0,src.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'serviceMap', {
            datasourceUid: ds.uid
          })
        })
      }), (_options$jsonData$ser2 = options.jsonData.serviceMap) !== null && _options$jsonData$ser2 !== void 0 && _options$jsonData$ser2.datasourceUid ? (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        type: 'button',
        variant: 'secondary',
        size: 'sm',
        fill: 'text',
        onClick: () => {
          (0,src.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'serviceMap', {
            datasourceUid: undefined
          });
        },
        children: "Clear"
      }) : null]
    })]
  });
}

const ServiceGraphSettings_getStyles = theme => ({
  infoText: emotion_css_esm.css`
    label: infoText;
    padding-bottom: ${theme.spacing.md};
    color: ${theme.colors.textSemiWeak};
  `,
  row: emotion_css_esm.css`
    label: row;
    align-items: baseline;
  `
});
;












const ConfigEditor = _ref => {
  let {
    options,
    onOptionsChange
  } = _ref;
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.DataSourceHttpSettings, {
      defaultUrl: "http://tempo",
      dataSourceConfig: options,
      showAccessOptions: false,
      onChange: onOptionsChange
    }), (0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: (0,jsx_runtime.jsx)(TraceToLogsSettings.Z, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), grafana_runtime_src.config.featureToggles.traceToMetrics ? (0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: (0,jsx_runtime.jsx)(TraceToMetricsSettings.F, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }) : null, grafana_runtime_src.config.featureToggles.tempoServiceGraph && (0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: (0,jsx_runtime.jsx)(ServiceGraphSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), grafana_runtime_src.config.featureToggles.tempoSearch && (0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: (0,jsx_runtime.jsx)(SearchSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), (0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: (0,jsx_runtime.jsx)(NodeGraphSettings.n, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), (0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: (0,jsx_runtime.jsx)(LokiSearchSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    })]
  });
};
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
var from = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
var throwError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
var merge = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
var empty = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/empty.js");
var mergeMap = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
var catchError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
var toArray = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/toArray.js");
var fetch = __webpack_require__("./public/app/core/utils/fetch.ts");
var datasource_srv = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
var graphTransform = __webpack_require__("./public/app/plugins/datasource/tempo/graphTransform.ts");
var resultTransformer = __webpack_require__("./public/app/plugins/datasource/tempo/resultTransformer.ts");
;
function datasource_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const DEFAULT_LIMIT = 20;
class TempoDatasource extends grafana_runtime_src.DataSourceWithBackend {
  constructor(instanceSettings) {
    let templateSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,grafana_runtime_src.getTemplateSrv)();
    super(instanceSettings);
    this.instanceSettings = instanceSettings;
    this.templateSrv = templateSrv;

    datasource_defineProperty(this, "tracesToLogs", void 0);

    datasource_defineProperty(this, "serviceMap", void 0);

    datasource_defineProperty(this, "search", void 0);

    datasource_defineProperty(this, "nodeGraph", void 0);

    datasource_defineProperty(this, "lokiSearch", void 0);

    datasource_defineProperty(this, "uploadedJson", null);

    datasource_defineProperty(this, "getLokiSearchDS", () => {
      var _this$tracesToLogs, _this$tracesToLogs2, _this$lokiSearch$data, _this$lokiSearch;

      const legacyLogsDatasourceUid = ((_this$tracesToLogs = this.tracesToLogs) === null || _this$tracesToLogs === void 0 ? void 0 : _this$tracesToLogs.lokiSearch) !== false && this.lokiSearch === undefined ? (_this$tracesToLogs2 = this.tracesToLogs) === null || _this$tracesToLogs2 === void 0 ? void 0 : _this$tracesToLogs2.datasourceUid : undefined;
      return (_this$lokiSearch$data = (_this$lokiSearch = this.lokiSearch) === null || _this$lokiSearch === void 0 ? void 0 : _this$lokiSearch.datasourceUid) !== null && _this$lokiSearch$data !== void 0 ? _this$lokiSearch$data : legacyLogsDatasourceUid;
    });

    this.instanceSettings = instanceSettings;
    this.templateSrv = templateSrv;
    this.tracesToLogs = instanceSettings.jsonData.tracesToLogs;
    this.serviceMap = instanceSettings.jsonData.serviceMap;
    this.search = instanceSettings.jsonData.search;
    this.nodeGraph = instanceSettings.jsonData.nodeGraph;
    this.lokiSearch = instanceSettings.jsonData.lokiSearch;
  }

  query(options) {
    var _targets$search, _targets$nativeSearch, _targets$upload, _this$serviceMap, _targets$serviceMap, _targets$traceId;

    const subQueries = [];
    const filteredTargets = options.targets.filter(target => !target.hide);
    const targets = (0,lodash.groupBy)(filteredTargets, t => t.queryType || 'traceId');

    if (targets.clear) {
      return (0,of.of)({
        data: [],
        state: src.LoadingState.Done
      });
    }

    const logsDatasourceUid = this.getLokiSearchDS(); 

    if (logsDatasourceUid && ((_targets$search = targets.search) === null || _targets$search === void 0 ? void 0 : _targets$search.length) > 0) {
      const dsSrv = (0,datasource_srv.ak)();
      subQueries.push((0,from.D)(dsSrv.get(logsDatasourceUid)).pipe((0,mergeMap.z)(linkedDatasource => {
        var _settings$jsonData$de;

        const linkedRequest = Object.assign({}, options, {
          targets: targets.search.map(t => t.linkedQuery)
        }); 

        const settings = linkedDatasource.instanceSettings;
        const traceLinkMatcher = ((_settings$jsonData$de = settings.jsonData.derivedFields) === null || _settings$jsonData$de === void 0 ? void 0 : _settings$jsonData$de.filter(field => field.datasourceUid === this.uid && field.matcherRegex).map(field => field.matcherRegex)) || [];

        if (!traceLinkMatcher || traceLinkMatcher.length === 0) {
          return (0,throwError._)(() => new Error('No Loki datasource configured for search. Set up Derived Fields for traces in a Loki datasource settings and link it to this Tempo datasource.'));
        } else {
          return linkedDatasource.query(linkedRequest).pipe((0,map.U)(response => response.error ? response : (0,resultTransformer.RY)(response, this.uid, this.name, traceLinkMatcher)));
        }
      })));
    }

    if ((_targets$nativeSearch = targets.nativeSearch) !== null && _targets$nativeSearch !== void 0 && _targets$nativeSearch.length) {
      try {
        const timeRange = grafana_runtime_src.config.featureToggles.tempoBackendSearch ? {
          startTime: options.range.from.unix(),
          endTime: options.range.to.unix()
        } : undefined;
        const query = this.applyVariables(targets.nativeSearch[0], options.scopedVars);
        const searchQuery = this.buildSearchQuery(query, timeRange);
        subQueries.push(this._request('/api/search', searchQuery).pipe((0,map.U)(response => {
          return {
            data: [(0,resultTransformer.n4)(response.data.traces, this.instanceSettings)]
          };
        }), (0,catchError.K)(error => {
          return (0,of.of)({
            error: {
              message: error.data.message
            },
            data: []
          });
        })));
      } catch (error) {
        return (0,of.of)({
          error: {
            message: error.message
          },
          data: []
        });
      }
    }

    if ((_targets$upload = targets.upload) !== null && _targets$upload !== void 0 && _targets$upload.length) {
      if (this.uploadedJson) {
        const otelTraceData = JSON.parse(this.uploadedJson);

        if (!otelTraceData.batches) {
          subQueries.push((0,of.of)({
            error: {
              message: 'JSON is not valid OpenTelemetry format'
            },
            data: []
          }));
        } else {
          var _this$nodeGraph;

          subQueries.push((0,of.of)((0,resultTransformer.IM)(otelTraceData.batches, (_this$nodeGraph = this.nodeGraph) === null || _this$nodeGraph === void 0 ? void 0 : _this$nodeGraph.enabled)));
        }
      } else {
        subQueries.push((0,of.of)({
          data: [],
          state: src.LoadingState.Done
        }));
      }
    }

    if ((_this$serviceMap = this.serviceMap) !== null && _this$serviceMap !== void 0 && _this$serviceMap.datasourceUid && ((_targets$serviceMap = targets.serviceMap) === null || _targets$serviceMap === void 0 ? void 0 : _targets$serviceMap.length) > 0) {
      subQueries.push(serviceMapQuery(options, this.serviceMap.datasourceUid));
    }

    if (((_targets$traceId = targets.traceId) === null || _targets$traceId === void 0 ? void 0 : _targets$traceId.length) > 0) {
      subQueries.push(this.handleTraceIdQuery(options, targets.traceId));
    }

    return (0,merge.T)(...subQueries);
  }

  applyTemplateVariables(query, scopedVars) {
    return this.applyVariables(query, scopedVars);
  }

  interpolateVariablesInQueries(queries, scopedVars) {
    if (!queries || queries.length === 0) {
      return [];
    }

    return queries.map(query => {
      return Object.assign({}, query, {
        datasource: this.getRef()
      }, this.applyVariables(query, scopedVars));
    });
  }

  applyVariables(query, scopedVars) {
    var _query$query, _query$search, _query$minDuration, _query$maxDuration;

    const expandedQuery = Object.assign({}, query);

    if (query.linkedQuery) {
      var _query$linkedQuery$ex, _query$linkedQuery;

      expandedQuery.linkedQuery = Object.assign({}, query.linkedQuery, {
        expr: this.templateSrv.replace((_query$linkedQuery$ex = (_query$linkedQuery = query.linkedQuery) === null || _query$linkedQuery === void 0 ? void 0 : _query$linkedQuery.expr) !== null && _query$linkedQuery$ex !== void 0 ? _query$linkedQuery$ex : '', scopedVars)
      });
    }

    return Object.assign({}, expandedQuery, {
      query: this.templateSrv.replace((_query$query = query.query) !== null && _query$query !== void 0 ? _query$query : '', scopedVars),
      search: this.templateSrv.replace((_query$search = query.search) !== null && _query$search !== void 0 ? _query$search : '', scopedVars),
      minDuration: this.templateSrv.replace((_query$minDuration = query.minDuration) !== null && _query$minDuration !== void 0 ? _query$minDuration : '', scopedVars),
      maxDuration: this.templateSrv.replace((_query$maxDuration = query.maxDuration) !== null && _query$maxDuration !== void 0 ? _query$maxDuration : '', scopedVars)
    });
  }


  handleTraceIdQuery(options, targets) {
    const validTargets = targets.filter(t => t.query);

    if (!validTargets.length) {
      return empty.E;
    }

    const traceRequest = Object.assign({}, options, {
      targets: validTargets
    });
    return super.query(traceRequest).pipe((0,map.U)(response => {
      var _this$nodeGraph2;

      if (response.error) {
        return response;
      }

      return (0,resultTransformer.Jk)(response, (_this$nodeGraph2 = this.nodeGraph) === null || _this$nodeGraph2 === void 0 ? void 0 : _this$nodeGraph2.enabled);
    }));
  }

  async metadataRequest(url) {
    let params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return await this._request(url, params, {
      method: 'GET',
      hideFromInspector: true
    }).toPromise();
  }

  _request(apiUrl, data, options) {
    const params = data ? (0,fetch.tW)(data) : '';
    const url = `${this.instanceSettings.url}${apiUrl}${params.length ? `?${params}` : ''}`;
    const req = Object.assign({}, options, {
      url
    });
    return (0,grafana_runtime_src.getBackendSrv)().fetch(req);
  }

  async testDatasource() {
    const options = {
      headers: {},
      method: 'GET',
      url: `${this.instanceSettings.url}/api/echo`
    };
    const response = await (0,grafana_runtime_src.getBackendSrv)().fetch(options).toPromise();

    if (response !== null && response !== void 0 && response.ok) {
      return {
        status: 'success',
        message: 'Data source is working'
      };
    }
  }

  getQueryDisplayText(query) {
    if (query.queryType === 'nativeSearch') {
      let result = [];

      for (const key of ['serviceName', 'spanName', 'search', 'minDuration', 'maxDuration', 'limit']) {
        if (query.hasOwnProperty(key) && query[key]) {
          result.push(`${(0,lodash.startCase)(key)}: ${query[key]}`);
        }
      }

      return result.join(', ');
    }

    return query.query;
  }

  buildSearchQuery(query, timeRange) {
    var _query$search2;

    let tags = (_query$search2 = query.search) !== null && _query$search2 !== void 0 ? _query$search2 : '';
    let tempoQuery = (0,lodash.pick)(query, ['minDuration', 'maxDuration', 'limit']); 

    tempoQuery = (0,lodash.pickBy)(tempoQuery, lodash.identity);

    if (query.serviceName) {
      tags += ` service.name="${query.serviceName}"`;
    }

    if (query.spanName) {
      tags += ` name="${query.spanName}"`;
    } 


    if (!tempoQuery.limit) {
      tempoQuery.limit = DEFAULT_LIMIT;
    } 


    if (tempoQuery.minDuration) {
      var _tempoQuery$minDurati;

      tempoQuery.minDuration = this.templateSrv.replace((_tempoQuery$minDurati = tempoQuery.minDuration) !== null && _tempoQuery$minDurati !== void 0 ? _tempoQuery$minDurati : '');

      if (!(0,src.isValidGoDuration)(tempoQuery.minDuration)) {
        throw new Error('Please enter a valid min duration.');
      }

      tempoQuery.minDuration = tempoQuery.minDuration.replace(/\s/g, '');
    }

    if (tempoQuery.maxDuration) {
      var _tempoQuery$maxDurati;

      tempoQuery.maxDuration = this.templateSrv.replace((_tempoQuery$maxDurati = tempoQuery.maxDuration) !== null && _tempoQuery$maxDurati !== void 0 ? _tempoQuery$maxDurati : '');

      if (!(0,src.isValidGoDuration)(tempoQuery.maxDuration)) {
        throw new Error('Please enter a valid max duration.');
      }

      tempoQuery.maxDuration = tempoQuery.maxDuration.replace(/\s/g, '');
    }

    if (!Number.isInteger(tempoQuery.limit) || tempoQuery.limit <= 0) {
      throw new Error('Please enter a valid limit.');
    }

    let searchQuery = Object.assign({
      tags
    }, tempoQuery);

    if (timeRange) {
      searchQuery.start = timeRange.startTime;
      searchQuery.end = timeRange.endTime;
    }

    return searchQuery;
  }

  async getServiceGraphLabels() {
    const ds = await (0,datasource_srv.ak)().get(this.serviceMap.datasourceUid);
    return ds.getTagKeys();
  }

  async getServiceGraphLabelValues(key) {
    const ds = await (0,datasource_srv.ak)().get(this.serviceMap.datasourceUid);
    return ds.getTagValues({
      key
    });
  } 


}

function queryServiceMapPrometheus(request, datasourceUid) {
  return (0,from.D)((0,datasource_srv.ak)().get(datasourceUid)).pipe((0,mergeMap.z)(ds => {
    return ds.query(request);
  }));
}

function serviceMapQuery(request, datasourceUid) {
  return queryServiceMapPrometheus(makePromServiceMapRequest(request), datasourceUid).pipe( 
  (0,toArray.q)(), (0,map.U)(responses => {
    const errorRes = responses.find(res => !!res.error);

    if (errorRes) {
      throw new Error(errorRes.error.message);
    }

    const {
      nodes,
      edges
    } = (0,graphTransform.BC)(responses, request.range);
    nodes.fields[0].config = {
      links: [makePromLink('Request rate', `rate(${graphTransform/* totalsMetric */.Yt}{server="\${__data.fields.id}"}[$__rate_interval])`, datasourceUid), makePromLink('Request histogram', `histogram_quantile(0.9, sum(rate(${graphTransform/* histogramMetric */.NZ}{server="\${__data.fields.id}"}[$__rate_interval])) by (le, client, server))`, datasourceUid), makePromLink('Failed request rate', `rate(${graphTransform/* failedMetric */.yf}{server="\${__data.fields.id}"}[$__rate_interval])`, datasourceUid)]
    };
    return {
      data: [nodes, edges],
      state: src.LoadingState.Done
    };
  }));
}

function makePromLink(title, metric, datasourceUid) {
  return {
    url: '',
    title,
    internal: {
      query: {
        expr: metric
      },
      datasourceUid,
      datasourceName: 'Prometheus'
    }
  };
}

function makePromServiceMapRequest(options) {
  return Object.assign({}, options, {
    targets: graphTransform.t3.map(metric => {
      return {
        refId: metric,
        expr: `delta(${metric}${options.targets[0].serviceMapQuery || ''}[$__range])`,
        instant: true
      };
    })
  });
}
;





const module_plugin = new src.DataSourcePlugin(TempoDatasource).setQueryEditor(TempoQueryField).setConfigEditor(ConfigEditor).setQueryEditorHelp(CheatSheet);

 })

}]);