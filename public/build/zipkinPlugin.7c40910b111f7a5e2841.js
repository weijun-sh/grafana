"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[4023],{

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

 "./public/app/core/utils/tracing.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "et": () => ( getNonOverlappingDuration),
   "fy": () => ( getStats),
   "nO": () => ( makeSpanMap),
   "np": () => ( makeFrames)
 });
 var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");

function getNonOverlappingDuration(ranges) {
  ranges.sort((a, b) => a[0] - b[0]);
  const mergedRanges = ranges.reduce((acc, range) => {
    if (!acc.length) {
      return [range];
    }

    const tail = acc.slice(-1)[0];
    const [prevStart, prevEnd] = tail;
    const [start, end] = range;

    if (end < prevEnd) {
      return acc;
    }

    if (start > prevEnd) {
      return [...acc, range];
    } 


    return [...acc.slice(0, -1), [prevStart, end]];
  }, []);
  return mergedRanges.reduce((acc, range) => {
    return acc + (range[1] - range[0]);
  }, 0);
}

function makeSpanMap(getSpan) {
  const spanMap = {};
  let span;

  for (let index = 0; span = getSpan(index), !!span; index++) {
    if (!spanMap[span.id]) {
      spanMap[span.id] = {
        span: span.span,
        children: []
      };
    } else {
      spanMap[span.id].span = span.span;
    }

    for (const parentId of span.parentIds) {
      if (parentId) {
        if (!spanMap[parentId]) {
          spanMap[parentId] = {
            span: undefined,
            children: [span.id]
          };
        } else {
          spanMap[parentId].children.push(span.id);
        }
      }
    }
  }

  return spanMap;
}
function getStats(duration, traceDuration, selfDuration) {
  return {
    main: `${toFixedNoTrailingZeros(duration)}ms (${toFixedNoTrailingZeros(duration / traceDuration * 100)}%)`,
    secondary: `${toFixedNoTrailingZeros(selfDuration)}ms (${toFixedNoTrailingZeros(selfDuration / duration * 100)}%)`
  };
}

function toFixedNoTrailingZeros(n) {
  return parseFloat(n.toFixed(2));
}


function makeFrames() {
  const nodesFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayName: 'Total time (% of trace)'
      }
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayName: 'Self time (% of total)'
      }
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.color,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        color: {
          mode: 'continuous-GrYlRd'
        },
        displayName: 'Self time / Trace duration'
      }
    }],
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  const edgesFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source,
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }],
    meta: {
      preferredVisualisationType: 'nodeGraph'
    }
  });
  return [nodesFrame, edgesFrame];
}

 }),

 "./public/app/plugins/datasource/zipkin/module.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "plugin": () => ( module_plugin)
});

var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var NodeGraphSettings = __webpack_require__("./public/app/core/components/NodeGraphSettings.tsx");
var TraceToLogsSettings = __webpack_require__("./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx");
var TraceToMetricsSettings = __webpack_require__("./public/app/core/components/TraceToMetrics/TraceToMetricsSettings.tsx");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;









const ConfigEditor = _ref => {
  let {
    options,
    onOptionsChange
  } = _ref;
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.DataSourceHttpSettings, {
      defaultUrl: "http://localhost:9411",
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
    }) : null, (0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: (0,jsx_runtime.jsx)(NodeGraphSettings.n, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    })]
  });
};
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var useAsyncFn = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js");
var useMount = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js");
var useMountedState = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMountedState.js");
var actions = __webpack_require__("./public/app/core/actions/index.ts");
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
var store = __webpack_require__("./public/app/store/store.ts");
;
const apiPrefix = '/api/v2';
;













const getStyles = theme => {
  return {
    tracesCascader: (0,emotion_css_esm.css)({
      label: 'tracesCascader',
      marginRight: theme.spacing(1)
    })
  };
};

const ZipkinQueryField = _ref => {
  let {
    query,
    onChange,
    onRunQuery,
    datasource
  } = _ref;
  const serviceOptions = useServices(datasource);
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  const {
    onLoadOptions,
    allOptions
  } = useLoadOptions(datasource);
  const onSelectTrace = (0,react.useCallback)((values, selectedOptions) => {
    if (selectedOptions.length === 3) {
      const traceID = selectedOptions[2].value;
      onChange(Object.assign({}, query, {
        query: traceID
      }));
      onRunQuery();
    }
  }, [onChange, onRunQuery, query]);

  const onChangeQuery = value => {
    const nextQuery = Object.assign({}, query, {
      query: value
    });
    onChange(nextQuery);
  };

  let cascaderOptions = useMapToCascaderOptions(serviceOptions, allOptions);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Query type",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
          options: [{
            value: 'traceID',
            label: 'TraceID'
          }, {
            value: 'upload',
            label: 'JSON file'
          }],
          value: query.queryType || 'traceID',
          onChange: v => onChange(Object.assign({}, query, {
            queryType: v
          })),
          size: "md"
        })
      })
    }), query.queryType === 'upload' ? (0,jsx_runtime.jsx)("div", {
      className: (0,emotion_css_esm.css)({
        padding: theme.spacing(2)
      }),
      children: (0,jsx_runtime.jsx)(grafana_ui_src.FileDropzone, {
        options: {
          multiple: false
        },
        onLoad: result => {
          datasource.uploadedJson = result;
          onRunQuery();
        }
      })
    }) : (0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.ButtonCascader, {
        options: cascaderOptions,
        onChange: onSelectTrace,
        loadData: onLoadOptions,
        variant: "secondary",
        buttonProps: {
          className: styles.tracesCascader
        },
        children: "Traces"
      }), (0,jsx_runtime.jsx)("div", {
        className: "gf-form gf-form--grow flex-shrink-1 min-width-15",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.QueryField, {
          query: query.query,
          onChange: onChangeQuery,
          onRunQuery: onRunQuery,
          placeholder: 'Insert Trace ID (run with Shift+Enter)',
          portalOrigin: "zipkin"
        })
      })]
    })]
  });
}; 

function useServices(datasource) {
  const url = `${apiPrefix}/services`;
  const [servicesOptions, fetch] = (0,useAsyncFn.Z)(async () => {
    try {
      const services = await datasource.metadataRequest(url);

      if (services) {
        return services.sort().map(service => ({
          label: service,
          value: service,
          isLeaf: false
        }));
      }

      return [];
    } catch (error) {
      (0,store.WI)((0,actions.$l)((0,appNotification.t_)('Failed to load services from Zipkin', error)));
      throw error;
    }
  }, [datasource]);
  (0,useMount.Z)(() => {
    fetch();
  });
  return servicesOptions;
}
function useLoadOptions(datasource) {
  const isMounted = (0,useMountedState.Z)();
  const [allOptions, setAllOptions] = (0,react.useState)({});
  const [, fetchSpans] = (0,useAsyncFn.Z)(async function findSpans(service) {
    const url = `${apiPrefix}/spans`;

    try {
      const response = await datasource.metadataRequest(url, {
        serviceName: service
      });

      if (isMounted()) {
        setAllOptions(state => {
          const spanOptions = (0,lodash.fromPairs)(response.map(span => [span, undefined]));
          return Object.assign({}, state, {
            [service]: spanOptions
          });
        });
      }
    } catch (error) {
      (0,store.WI)((0,actions.$l)((0,appNotification.t_)('Failed to load spans from Zipkin', error)));
      throw error;
    }
  }, [datasource, allOptions]);
  const [, fetchTraces] = (0,useAsyncFn.Z)(async function findTraces(serviceName, spanName) {
    const url = `${apiPrefix}/traces`;
    const search = {
      serviceName,
      spanName 

    };

    try {
      const traces = await datasource.metadataRequest(url, search);

      if (isMounted()) {
        const newTraces = traces.length ? (0,lodash.fromPairs)(traces.map(trace => {
          const rootSpan = trace.find(span => !span.parentId);
          return [`${rootSpan.name} [${Math.floor(rootSpan.duration / 1000)} ms]`, rootSpan.traceId];
        })) : noTracesOptions;
        setAllOptions(state => {
          const spans = state[serviceName];
          return Object.assign({}, state, {
            [serviceName]: Object.assign({}, spans, {
              [spanName]: newTraces
            })
          });
        });
      }
    } catch (error) {
      (0,store.WI)((0,actions.$l)((0,appNotification.t_)('Failed to load spans from Zipkin', error)));
      throw error;
    }
  }, [datasource]);
  const onLoadOptions = (0,react.useCallback)(selectedOptions => {
    const service = selectedOptions[0].value;

    if (selectedOptions.length === 1) {
      fetchSpans(service);
    } else if (selectedOptions.length === 2) {
      const spanName = selectedOptions[1].value;
      fetchTraces(service, spanName);
    }
  }, [fetchSpans, fetchTraces]);
  return {
    onLoadOptions,
    allOptions
  };
}

function useMapToCascaderOptions(services, allOptions) {
  return (0,react.useMemo)(() => {
    let cascaderOptions = [];

    if (services.value && services.value.length) {
      cascaderOptions = services.value.map(services => {
        return Object.assign({}, services, {
          children: allOptions[services.value] && Object.keys(allOptions[services.value]).map(spanName => {
            return {
              label: spanName,
              value: spanName,
              isLeaf: false,
              children: allOptions[services.value][spanName] && Object.keys(allOptions[services.value][spanName]).map(traceName => {
                return {
                  label: traceName,
                  value: allOptions[services.value][spanName][traceName]
                };
              })
            };
          })
        });
      });
    } else if (services.value && !services.value.length) {
      cascaderOptions = noTracesFoundOptions;
    }

    return cascaderOptions;
  }, [services, allOptions]);
}

const NO_TRACES_KEY = '__NO_TRACES__';
const noTracesFoundOptions = [{
  label: 'No traces found',
  value: 'no_traces',
  isLeaf: true 

}];
const noTracesOptions = {
  '[No traces in time range]': NO_TRACES_KEY
};
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
var lastValueFrom = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
var fetch = __webpack_require__("./public/app/core/utils/fetch.ts");
var tracing = __webpack_require__("./public/app/core/utils/tracing.ts");
;


function createGraphFrames(data) {
  const {
    nodes,
    edges
  } = convertTraceToGraph(data);
  const [nodesFrame, edgesFrame] = (0,tracing.np)();

  for (const node of nodes) {
    nodesFrame.add(node);
  }

  for (const edge of edges) {
    edgesFrame.add(edge);
  }

  return [nodesFrame, edgesFrame];
}

function convertTraceToGraph(spans) {
  const nodes = [];
  const edges = [];
  const traceDuration = findTraceDuration(spans);
  const spanMap = (0,tracing.nO)(index => {
    if (index >= spans.length) {
      return undefined;
    }

    return {
      span: spans[index],
      id: spans[index].id,
      parentIds: spans[index].parentId ? [spans[index].parentId] : []
    };
  });

  for (const span of spans) {
    var _span$localEndpoint, _span$remoteEndpoint;

    const ranges = spanMap[span.id].children.map(c => {
      const span = spanMap[c].span;
      return [span.timestamp, span.timestamp + span.duration];
    });
    const childrenDuration = (0,tracing.et)(ranges);
    const selfDuration = span.duration - childrenDuration;
    const stats = (0,tracing.fy)(span.duration / 1000, traceDuration / 1000, selfDuration / 1000);
    nodes.push({
      [src.NodeGraphDataFrameFieldNames.id]: span.id,
      [src.NodeGraphDataFrameFieldNames.title]: ((_span$localEndpoint = span.localEndpoint) === null || _span$localEndpoint === void 0 ? void 0 : _span$localEndpoint.serviceName) || ((_span$remoteEndpoint = span.remoteEndpoint) === null || _span$remoteEndpoint === void 0 ? void 0 : _span$remoteEndpoint.serviceName) || 'unknown',
      [src.NodeGraphDataFrameFieldNames.subTitle]: span.name,
      [src.NodeGraphDataFrameFieldNames.mainStat]: stats.main,
      [src.NodeGraphDataFrameFieldNames.secondaryStat]: stats.secondary,
      [src.NodeGraphDataFrameFieldNames.color]: selfDuration / traceDuration
    });

    if (span.parentId && spanMap[span.parentId].span) {
      edges.push({
        [src.NodeGraphDataFrameFieldNames.id]: span.parentId + '--' + span.id,
        [src.NodeGraphDataFrameFieldNames.target]: span.id,
        [src.NodeGraphDataFrameFieldNames.source]: span.parentId
      });
    }
  }

  return {
    nodes,
    edges
  };
}


function findTraceDuration(spans) {
  let traceEndTime = 0;
  let traceStartTime = Infinity;

  for (const span of spans) {
    if (span.timestamp < traceStartTime) {
      traceStartTime = span.timestamp;
    }

    if (span.timestamp + span.duration > traceEndTime) {
      traceEndTime = span.timestamp + span.duration;
    }
  }

  return traceEndTime - traceStartTime;
}
var transforms = __webpack_require__("./public/app/plugins/datasource/zipkin/utils/transforms.ts");
;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class ZipkinDatasource extends src.DataSourceApi {
  constructor(instanceSettings) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;

    _defineProperty(this, "uploadedJson", null);

    _defineProperty(this, "nodeGraph", void 0);

    this.instanceSettings = instanceSettings;
    this.nodeGraph = instanceSettings.jsonData.nodeGraph;
  }

  query(options) {
    const target = options.targets[0];

    if (target.queryType === 'upload') {
      if (!this.uploadedJson) {
        return (0,of.of)({
          data: []
        });
      }

      try {
        var _this$nodeGraph;

        const traceData = JSON.parse(this.uploadedJson);
        return (0,of.of)(responseToDataQueryResponse({
          data: traceData
        }, (_this$nodeGraph = this.nodeGraph) === null || _this$nodeGraph === void 0 ? void 0 : _this$nodeGraph.enabled));
      } catch (error) {
        return (0,of.of)({
          error: {
            message: 'JSON is not valid Zipkin format'
          },
          data: []
        });
      }
    }

    if (target.query) {
      return this.request(`${apiPrefix}/trace/${encodeURIComponent(target.query)}`).pipe((0,map.U)(res => {
        var _this$nodeGraph2;

        return responseToDataQueryResponse(res, (_this$nodeGraph2 = this.nodeGraph) === null || _this$nodeGraph2 === void 0 ? void 0 : _this$nodeGraph2.enabled);
      }));
    }

    return (0,of.of)(emptyDataQueryResponse);
  }

  async metadataRequest(url, params) {
    const res = await (0,lastValueFrom.n)(this.request(url, params, {
      hideFromInspector: true
    }));
    return res.data;
  }

  async testDatasource() {
    await this.metadataRequest(`${apiPrefix}/services`);
    return {
      status: 'success',
      message: 'Data source is working'
    };
  }

  getQueryDisplayText(query) {
    return query.query;
  }

  request(apiUrl, data, options) {
    const params = data ? (0,fetch.tW)(data) : '';
    const url = `${this.instanceSettings.url}${apiUrl}${params.length ? `?${params}` : ''}`;
    const req = Object.assign({}, options, {
      url
    });
    return (0,grafana_runtime_src.getBackendSrv)().fetch(req);
  }

}

function responseToDataQueryResponse(response) {
  let nodeGraph = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let data = response !== null && response !== void 0 && response.data ? [(0,transforms.m)(response === null || response === void 0 ? void 0 : response.data)] : [];

  if (nodeGraph) {
    data.push(...createGraphFrames(response === null || response === void 0 ? void 0 : response.data));
  }

  return {
    data
  };
}

const emptyDataQueryResponse = {
  data: [new src.MutableDataFrame({
    fields: [{
      name: 'trace',
      type: src.FieldType.trace,
      values: []
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'zipkin'
      }
    }
  })]
};
;




const module_plugin = new src.DataSourcePlugin(ZipkinDatasource).setQueryEditor(ZipkinQueryField).setConfigEditor(ConfigEditor);

 }),

 "./public/app/plugins/datasource/zipkin/utils/transforms.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "H": () => ( transformToZipkin),
   "m": () => ( transformResponse)
 });
 var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
 var lodash__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");



function transformResponse(zSpans) {
  const spanRows = zSpans.map(transformSpan);
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'spanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'parentSpanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'operationName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'serviceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.string
    }, {
      name: 'serviceTags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.other
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.number
    }, {
      name: 'logs',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.other
    }, {
      name: 'tags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.other
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'zipkin'
      }
    }
  });

  for (const span of spanRows) {
    frame.add(span);
  }

  return frame;
}

function transformSpan(span) {
  var _span$localEndpoint, _span$remoteEndpoint, _span$annotations$map, _span$annotations;

  const row = {
    traceID: span.traceId,
    spanID: span.id,
    parentSpanID: span.parentId,
    operationName: span.name,
    serviceName: ((_span$localEndpoint = span.localEndpoint) === null || _span$localEndpoint === void 0 ? void 0 : _span$localEndpoint.serviceName) || ((_span$remoteEndpoint = span.remoteEndpoint) === null || _span$remoteEndpoint === void 0 ? void 0 : _span$remoteEndpoint.serviceName) || 'unknown',
    serviceTags: serviceTags(span),
    startTime: span.timestamp / 1000,
    duration: span.duration / 1000,
    logs: (_span$annotations$map = (_span$annotations = span.annotations) === null || _span$annotations === void 0 ? void 0 : _span$annotations.map(transformAnnotation)) !== null && _span$annotations$map !== void 0 ? _span$annotations$map : [],
    tags: Object.keys(span.tags || {}).reduce((acc, key) => {
      if (key === 'error') {
        acc.push({
          key: 'error',
          value: true
        });
        acc.push({
          key: 'errorValue',
          value: span.tags['error']
        });
        return acc;
      }

      acc.push({
        key,
        value: span.tags[key]
      });
      return acc;
    }, [])
  };

  if (span.kind) {
    var _row$tags;

    row.tags = [{
      key: 'kind',
      value: span.kind
    }, ...((_row$tags = row.tags) !== null && _row$tags !== void 0 ? _row$tags : [])];
  }

  if (span.shared) {
    var _row$tags2;

    row.tags = [{
      key: 'shared',
      value: span.shared
    }, ...((_row$tags2 = row.tags) !== null && _row$tags2 !== void 0 ? _row$tags2 : [])];
  }

  return row;
}


function transformAnnotation(annotation) {
  return {
    timestamp: annotation.timestamp,
    fields: [{
      key: 'annotation',
      value: annotation.value
    }]
  };
}

function serviceTags(span) {
  const endpoint = span.localEndpoint || span.remoteEndpoint;

  if (!endpoint) {
    return [];
  }

  return [valueToTag('ipv4', endpoint.ipv4), valueToTag('ipv6', endpoint.ipv6), valueToTag('port', endpoint.port), valueToTag('endpointType', span.localEndpoint ? 'local' : 'remote')].filter(lodash__WEBPACK_IMPORTED_MODULE_0__.identity);
}

function valueToTag(key, value) {
  if (!value) {
    return undefined;
  }

  return {
    key,
    value
  };
}


const transformToZipkin = data => {
  let response = [];

  for (let i = 0; i < data.length; i++) {
    var _span$tags$find, _span$tags$find2;

    const span = data.get(i);
    response.push(Object.assign({
      traceId: span.traceID,
      parentId: span.parentSpanID,
      name: span.operationName,
      id: span.spanID,
      timestamp: span.startTime * 1000,
      duration: span.duration * 1000
    }, getEndpoint(span), {
      annotations: span.logs.length ? span.logs.map(l => ({
        timestamp: l.timestamp,
        value: l.fields[0].value
      })) : undefined,
      tags: span.tags.length ? span.tags.filter(t => t.key !== 'kind' && t.key !== 'endpointType' && t.key !== 'shared').reduce((tags, t) => {
        if (t.key === 'error') {
          return Object.assign({}, tags, {
            [t.key]: span.tags.find(t => t.key === 'errorValue').value || ''
          });
        }

        return Object.assign({}, tags, {
          [t.key]: t.value
        });
      }, {}) : undefined,
      kind: (_span$tags$find = span.tags.find(t => t.key === 'kind')) === null || _span$tags$find === void 0 ? void 0 : _span$tags$find.value,
      shared: (_span$tags$find2 = span.tags.find(t => t.key === 'shared')) === null || _span$tags$find2 === void 0 ? void 0 : _span$tags$find2.value
    }));
  }

  return response;
}; 

const getEndpoint = span => {
  var _span$serviceTags$fin, _span$serviceTags$fin2, _span$serviceTags$fin3, _span$serviceTags$fin4;

  const key = ((_span$serviceTags$fin = span.serviceTags.find(t => t.key === 'endpointType')) === null || _span$serviceTags$fin === void 0 ? void 0 : _span$serviceTags$fin.value) === 'local' ? 'localEndpoint' : 'remoteEndpoint';
  return span.serviceName !== 'unknown' ? {
    [key]: {
      serviceName: span.serviceName,
      ipv4: (_span$serviceTags$fin2 = span.serviceTags.find(t => t.key === 'ipv4')) === null || _span$serviceTags$fin2 === void 0 ? void 0 : _span$serviceTags$fin2.value,
      ipv6: (_span$serviceTags$fin3 = span.serviceTags.find(t => t.key === 'ipv6')) === null || _span$serviceTags$fin3 === void 0 ? void 0 : _span$serviceTags$fin3.value,
      port: (_span$serviceTags$fin4 = span.serviceTags.find(t => t.key === 'port')) === null || _span$serviceTags$fin4 === void 0 ? void 0 : _span$serviceTags$fin4.value
    }
  } : undefined;
};

 }),

 "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ .Z)(function () {
        fn();
    });
};
 const __WEBPACK_DEFAULT_EXPORT__ = (useMount);


 })

}]);