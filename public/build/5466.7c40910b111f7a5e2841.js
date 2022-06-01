(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[5466],{

/***/ "./public/app/core/components/NodeGraphSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ NodeGraphSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;







function NodeGraphSettings(_ref) {
  var _options$jsonData$nod;

  let {
    options,
    onOptionsChange
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.container,
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
      className: "page-heading",
      children: "Node Graph"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      className: styles.row,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        tooltip: "Enables the Node Graph visualization in the trace viewer.",
        label: "Enable Node Graph",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineSwitch, {
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

/***/ }),

/***/ "./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TraceToLogsSettings)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/core/components/TraceToLogs/KeyValueInput.tsx
var _Icon, _Icon2, _Icon3;






const EQ_WIDTH = 3; // = 24px in inline label

const KeyValueInput = _ref => {
  let {
    values,
    onChange,
    id,
    keyPlaceholder = 'Key',
    valuePlaceholder = 'Value (optional)'
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(getStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.wrapper,
    children: values.length ? values.map((value, idx) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.pair,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.SegmentInput, {
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
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineLabel, {
        "aria-label": "equals",
        className: styles.operator,
        width: EQ_WIDTH,
        children: "="
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.SegmentInput, {
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
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        onClick: () => onChange([...values.slice(0, idx), ...values.slice(idx + 1)]),
        className: "gf-form-label query-part",
        "aria-label": "Remove tag",
        children: _Icon || (_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: "times"
        }))
      }), idx === values.length - 1 ? /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
        onClick: () => onChange([...values, {
          key: '',
          value: ''
        }]),
        className: "gf-form-label query-part",
        "aria-label": "Add tag",
        children: _Icon2 || (_Icon2 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: "plus"
        }))
      }) : null]
    }, idx)) : /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
      onClick: () => onChange([...values, {
        key: '',
        value: ''
      }]),
      className: "gf-form-label query-part",
      "aria-label": "Add tag",
      children: _Icon3 || (_Icon3 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "plus"
      }))
    })
  });
};

/* harmony default export */ const TraceToLogs_KeyValueInput = (KeyValueInput);

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
;// CONCATENATED MODULE: ./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx
var _h;









function TraceToLogsSettings(_ref) {
  var _options$jsonData$tra, _options$jsonData$tra3, _ref2, _options$jsonData$tra4, _options$jsonData$tra5, _options$jsonData$tra6, _options$jsonData$tra7, _options$jsonData$tra8, _options$jsonData$tra9, _options$jsonData$tra10, _options$jsonData$tra11, _options$jsonData$tra12, _options$jsonData$tra13, _options$jsonData$tra14;

  let {
    options,
    onOptionsChange
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(TraceToLogsSettings_getStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (0,emotion_css_esm.css)({
      width: '100%'
    }),
    children: [_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
      className: "page-heading",
      children: "Trace to logs"
    })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.infoText,
      children: "Trace to logs lets you navigate from a trace span to the selected data source's logs."
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        tooltip: "The data source the trace is going to navigate to",
        label: "Data source",
        labelWidth: 26,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_runtime_src.DataSourcePicker, {
          inputId: "trace-to-logs-data-source-picker",
          filter: ds => {
            // Trace to logs only supports loki and splunk at the moment
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
    }), (_options$jsonData$tra3 = options.jsonData.tracesToLogs) !== null && _options$jsonData$tra3 !== void 0 && _options$jsonData$tra3.mapTagNamesEnabled ? /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        tooltip: "Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'",
        label: "Tags",
        labelWidth: 26,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(TraceToLogs_KeyValueInput, {
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
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        tooltip: "Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'",
        label: "Tags",
        labelWidth: 26,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.TagsInput, {
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
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Map tag names",
        labelWidth: 26,
        grow: true,
        tooltip: "Map trace tag names to log label names. Ex: k8s.pod.name -> pod",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
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
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Span start time shift",
        labelWidth: 26,
        grow: true,
        tooltip: "Shifts the start time of the span. Default 0 (Time units can be used here, for example: 5s, 1m, 3h)",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
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
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Span end time shift",
        labelWidth: 26,
        grow: true,
        tooltip: "Shifts the end time of the span. Default 0 Time units can be used here, for example: 5s, 1m, 3h",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
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
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Filter by Trace ID",
        labelWidth: 26,
        grow: true,
        tooltip: "Filters logs by Trace ID. Appends '|=<trace id>' to the query.",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
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
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Filter by Span ID",
        labelWidth: 26,
        grow: true,
        tooltip: "Filters logs by Span ID. Appends '|=<span id>' to the query.",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
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

/***/ }),

/***/ "./public/app/core/components/TraceToMetrics/TraceToMetricsSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ TraceToMetricsSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;








function TraceToMetricsSettings(_ref) {
  var _options$jsonData$tra, _options$jsonData$tra2, _options$jsonData$tra3;

  let {
    options,
    onOptionsChange
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      width: '100%'
    }),
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
      className: "page-heading",
      children: "Trace to metrics"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.infoText,
      children: "Trace to metrics lets you navigate from a trace span to the selected data source."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      className: styles.row,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        tooltip: "The data source the trace is going to navigate to",
        label: "Data source",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.DataSourcePicker, {
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
      }), (_options$jsonData$tra2 = options.jsonData.tracesToMetrics) !== null && _options$jsonData$tra2 !== void 0 && _options$jsonData$tra2.datasourceUid ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Query",
        labelWidth: 26,
        tooltip: "The Prometheus query that will run when navigating from a trace to metrics",
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
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

/***/ }),

/***/ "./public/app/core/utils/tracing.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "et": () => (/* binding */ getNonOverlappingDuration),
/* harmony export */   "fy": () => (/* binding */ getStats),
/* harmony export */   "nO": () => (/* binding */ makeSpanMap),
/* harmony export */   "np": () => (/* binding */ makeFrames)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/**
 * Get non overlapping duration of the ranges as they can overlap or have gaps.
 */

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
      // In this case the range is completely inside the prev range so we can just ignore it.
      return acc;
    }

    if (start > prevEnd) {
      // There is no overlap so we can just add it to stack
      return [...acc, range];
    } // We know there is overlap and current range ends later than previous so we can just extend the range


    return [...acc.slice(0, -1), [prevStart, end]];
  }, []);
  return mergedRanges.reduce((acc, range) => {
    return acc + (range[1] - range[0]);
  }, 0);
}
/**
 * Returns a map of the spans with children array for easier processing. It will also contain empty spans in case
 * span is missing but other spans are it's children. This is more generic because it needs to allow iterating over
 * both arrays and dataframe views.
 */

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
/**
 * Create default frames used when returning data for node graph.
 */


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

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "plugin": () => (/* binding */ module_plugin)
});

// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/NodeGraphSettings.tsx
var NodeGraphSettings = __webpack_require__("./public/app/core/components/NodeGraphSettings.tsx");
// EXTERNAL MODULE: ./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx + 1 modules
var TraceToLogsSettings = __webpack_require__("./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx");
// EXTERNAL MODULE: ./public/app/core/components/TraceToMetrics/TraceToMetricsSettings.tsx
var TraceToMetricsSettings = __webpack_require__("./public/app/core/components/TraceToMetrics/TraceToMetricsSettings.tsx");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/jaeger/components/ConfigEditor.tsx









const ConfigEditor = _ref => {
  let {
    options,
    onOptionsChange
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.DataSourceHttpSettings, {
      defaultUrl: "http://localhost:16686",
      dataSourceConfig: options,
      showAccessOptions: false,
      onChange: onOptionsChange
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TraceToLogsSettings/* TraceToLogsSettings */.Z, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), grafana_runtime_src.config.featureToggles.traceToMetrics ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(TraceToMetricsSettings/* TraceToMetricsSettings */.F, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(NodeGraphSettings/* NodeGraphSettings */.n, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    })]
  });
};
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./public/app/core/actions/index.ts
var actions = __webpack_require__("./public/app/core/actions/index.ts");
// EXTERNAL MODULE: ./public/app/core/copy/appNotification.ts
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
// EXTERNAL MODULE: ./public/app/store/store.ts
var store = __webpack_require__("./public/app/store/store.ts");
// EXTERNAL MODULE: ./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/logfmt.js
var logfmt = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/logfmt.js");
var logfmt_default = /*#__PURE__*/__webpack_require__.n(logfmt);
;// CONCATENATED MODULE: ./public/app/plugins/datasource/jaeger/util.ts

function convertTagsLogfmt(tags) {
  if (!tags) {
    return '';
  }

  const data = logfmt_default().parse(tags);
  Object.keys(data).forEach(key => {
    const value = data[key];

    if (typeof value !== 'string') {
      data[key] = String(value);
    }
  });
  return JSON.stringify(data);
}
function transformToLogfmt(tags) {
  if (!tags) {
    return '';
  }

  try {
    return logfmt_default().stringify(JSON.parse(tags));
  } catch {
    return tags;
  }
}
// EXTERNAL MODULE: ./.yarn/__virtual__/react-transition-group-virtual-8df824fae8/0/cache/react-transition-group-npm-4.4.2-5052c30656-b67bf5b3e8.zip/node_modules/react-transition-group/esm/CSSTransition.js + 3 modules
var CSSTransition = __webpack_require__("./.yarn/__virtual__/react-transition-group-virtual-8df824fae8/0/cache/react-transition-group-npm-4.4.2-5052c30656-b67bf5b3e8.zip/node_modules/react-transition-group/esm/CSSTransition.js");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/jaeger/components/AdvancedOptions.tsx






const durationPlaceholder = 'e.g. 1.2s, 100ms, 500us';
function AdvancedOptions(_ref) {
  let {
    query,
    onChange
  } = _ref;
  const [showAdvancedOptions, setShowAdvancedOptions] = (0,react.useState)(false);
  const styles = (0,grafana_ui_src.useStyles)(getStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.advancedOptionsContainer,
        onClick: () => setShowAdvancedOptions(!showAdvancedOptions),
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineLabel, {
          as: "div",
          children: ["Advanced options", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            className: showAdvancedOptions ? styles.angleUp : styles.angleDown,
            name: "angle-down"
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(CSSTransition/* default */.Z, {
      in: showAdvancedOptions,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: 300,
      classNames: styles,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
            label: "Min Duration",
            labelWidth: 21,
            grow: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
              id: "minDuration",
              name: "minDuration",
              value: query.minDuration || '',
              placeholder: durationPlaceholder,
              onChange: v => onChange(Object.assign({}, query, {
                minDuration: v.currentTarget.value
              }))
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
            label: "Max Duration",
            labelWidth: 21,
            grow: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
              id: "maxDuration",
              name: "maxDuration",
              value: query.maxDuration || '',
              placeholder: durationPlaceholder,
              onChange: v => onChange(Object.assign({}, query, {
                maxDuration: v.currentTarget.value
              }))
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
            label: "Limit",
            labelWidth: 21,
            grow: true,
            tooltip: "Maximum numbers of returned results",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
              id: "limit",
              name: "limit",
              value: query.limit || '',
              type: "number",
              onChange: v => onChange(Object.assign({}, query, {
                limit: v.currentTarget.value ? parseInt(v.currentTarget.value, 10) : undefined
              }))
            })
          })
        })]
      })
    })]
  });
}

function getStyles(theme) {
  return {
    advancedOptionsContainer: emotion_css_esm.css`
      margin: 0 ${theme.spacing.xs} ${theme.spacing.xs} 0;
      width: 100%;
      cursor: pointer;
    `,
    enter: emotion_css_esm.css`
      label: enter;
      height: 0;
      opacity: 0;
    `,
    enterActive: emotion_css_esm.css`
      label: enterActive;
      height: 108px;
      opacity: 1;
      transition: height 300ms ease, opacity 300ms ease;
    `,
    exit: emotion_css_esm.css`
      label: exit;
      height: 108px;
      opacity: 1;
    `,
    exitActive: emotion_css_esm.css`
      label: exitActive;
      height: 0;
      opacity: 0;
      transition: height 300ms ease, opacity 300ms ease;
    `,
    angleUp: emotion_css_esm.css`
      transform: rotate(-180deg);
      transition: transform 300ms;
    `,
    angleDown: emotion_css_esm.css`
      transform: rotate(0deg);
      transition: transform 300ms;
    `
  };
}
;// CONCATENATED MODULE: ./public/app/plugins/datasource/jaeger/components/SearchForm.tsx











const ALL_OPERATIONS_KEY = 'All';
const allOperationsOption = {
  label: ALL_OPERATIONS_KEY,
  value: undefined
};
function SearchForm(_ref) {
  let {
    datasource,
    query,
    onChange
  } = _ref;
  const [serviceOptions, setServiceOptions] = (0,react.useState)();
  const [operationOptions, setOperationOptions] = (0,react.useState)();
  const [isLoading, setIsLoading] = (0,react.useState)({
    services: false,
    operations: false
  });
  const loadServices = (0,react.useCallback)(async function (url, loaderOfType) {
    let query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    setIsLoading(prevValue => Object.assign({}, prevValue, {
      [loaderOfType]: true
    }));

    try {
      const values = await datasource.metadataRequest(url);

      if (!values) {
        return [{
          label: `No ${loaderOfType} found`,
          value: `No ${loaderOfType} found`
        }];
      }

      const serviceOptions = values.sort().map(service => ({
        label: service,
        value: service
      }));
      const filteredOptions = serviceOptions.filter(item => item.value ? (0,grafana_ui_src.fuzzyMatch)(item.value, query).found : false);
      return filteredOptions;
    } catch (error) {
      (0,store/* dispatch */.WI)((0,actions/* notifyApp */.$l)((0,appNotification/* createErrorNotification */.t_)('Error', error)));
      return [];
    } finally {
      setIsLoading(prevValue => Object.assign({}, prevValue, {
        [loaderOfType]: false
      }));
    }
  }, [datasource]);

  const getServiceOptions = userQuery => {
    return loadServices('/api/services', 'services', userQuery);
  };

  const getOperationOptions = userQuery => {
    return loadServices(`/api/services/${encodeURIComponent(query.service)}/operations`, 'operations', userQuery);
  };

  const serviceSearch = (0,lodash.debounce)(getServiceOptions, 500, {
    leading: true,
    trailing: true
  });
  const operationSearch = (0,lodash.debounce)(getOperationOptions, 500, {
    leading: true,
    trailing: true
  });
  (0,react.useEffect)(() => {
    const getServices = async () => {
      const services = await loadServices('/api/services', 'services');
      setServiceOptions(services);
    };

    getServices();
  }, [datasource, loadServices]);
  (0,react.useEffect)(() => {
    const getOperations = async () => {
      const operations = await loadServices(`/api/services/${encodeURIComponent(query.service)}/operations`, 'operations');
      setOperationOptions([allOperationsOption, ...operations]);
    };

    if (query.service) {
      getOperations();
    }
  }, [datasource, query.service, loadServices]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (0,emotion_css_esm.css)({
      maxWidth: '500px'
    }),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Service",
        labelWidth: 14,
        grow: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.AsyncSelect, {
          inputId: "service",
          cacheOptions: false,
          loadOptions: serviceSearch,
          onOpenMenu: () => loadServices('/api/services', 'services'),
          isLoading: isLoading.services,
          value: (serviceOptions === null || serviceOptions === void 0 ? void 0 : serviceOptions.find(v => (v === null || v === void 0 ? void 0 : v.value) === query.service)) || undefined,
          onChange: v => onChange(Object.assign({}, query, {
            service: v === null || v === void 0 ? void 0 : v.value,
            operation: query.service !== (v === null || v === void 0 ? void 0 : v.value) ? undefined : query.operation
          })),
          menuPlacement: "bottom",
          isClearable: true,
          defaultOptions: true,
          "aria-label": 'select-service-name'
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Operation",
        labelWidth: 14,
        grow: true,
        disabled: !query.service,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.AsyncSelect, {
          inputId: "operation",
          cacheOptions: false,
          loadOptions: operationSearch,
          onOpenMenu: () => loadServices(`/api/services/${encodeURIComponent(query.service)}/operations`, 'operations'),
          isLoading: isLoading.operations,
          value: (operationOptions === null || operationOptions === void 0 ? void 0 : operationOptions.find(v => v.value === query.operation)) || null,
          onChange: v => onChange(Object.assign({}, query, {
            operation: (v === null || v === void 0 ? void 0 : v.value) || undefined
          })),
          menuPlacement: "bottom",
          isClearable: true,
          defaultOptions: true,
          "aria-label": 'select-operation-name'
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: "Tags",
        labelWidth: 14,
        grow: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: "tags",
          value: transformToLogfmt(query.tags),
          placeholder: "http.status_code=200 error=true",
          onChange: v => onChange(Object.assign({}, query, {
            tags: v.currentTarget.value
          }))
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(AdvancedOptions, {
      query: query,
      onChange: onChange
    })]
  });
}
/* harmony default export */ const components_SearchForm = ((/* unused pure expression or super */ null && (SearchForm)));
;// CONCATENATED MODULE: ./public/app/plugins/datasource/jaeger/components/QueryEditor.tsx







function QueryEditor(_ref) {
  var _SearchForm;

  let {
    datasource,
    query,
    onChange,
    onRunQuery
  } = _ref;
  const theme = (0,grafana_ui_src.useTheme2)();

  const onChangeQuery = value => {
    const nextQuery = Object.assign({}, query, {
      query: value
    });
    onChange(nextQuery);
  };

  const renderEditorBody = () => {
    switch (query.queryType) {
      case 'search':
        return _SearchForm || (_SearchForm = /*#__PURE__*/(0,jsx_runtime.jsx)(SearchForm, {
          datasource: datasource,
          query: query,
          onChange: onChange
        }));

      case 'upload':
        return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: (0,emotion_css_esm.css)({
            padding: theme.spacing(2)
          }),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.FileDropzone, {
            options: {
              multiple: false
            },
            onLoad: result => {
              datasource.uploadedJson = result;
              onRunQuery();
            }
          })
        });

      default:
        return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
            label: "Trace ID",
            labelWidth: 14,
            grow: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.QueryField, {
              query: query.query,
              onChange: onChangeQuery,
              onRunQuery: onRunQuery,
              onBlur: () => {},
              placeholder: 'Enter a Trace ID (run with Shift+Enter)',
              portalOrigin: "jaeger"
            })
          })
        });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (0,emotion_css_esm.css)({
        width: '100%'
      }),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFieldRow, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Query type",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
            options: [{
              value: 'search',
              label: 'Search'
            }, {
              value: undefined,
              label: 'TraceID'
            }, {
              value: 'upload',
              label: 'JSON file'
            }],
            value: query.queryType,
            onChange: v => onChange(Object.assign({}, query, {
              queryType: v
            })),
            size: "md"
          })
        })
      }), renderEditorBody()]
    })
  });
}
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js
var lastValueFrom = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js
var catchError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
// EXTERNAL MODULE: ./public/app/core/utils/fetch.ts
var fetch = __webpack_require__("./public/app/core/utils/fetch.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/services/TimeSrv.ts + 1 modules
var TimeSrv = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
// EXTERNAL MODULE: ./public/app/core/utils/tracing.ts
var tracing = __webpack_require__("./public/app/core/utils/tracing.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/jaeger/graphTransform.ts


function createGraphFrames(data) {
  const {
    nodes,
    edges
  } = convertTraceToGraph(data);
  const [nodesFrame, edgesFrame] = (0,tracing/* makeFrames */.np)();

  for (const node of nodes) {
    nodesFrame.add(node);
  }

  for (const edge of edges) {
    edgesFrame.add(edge);
  }

  return [nodesFrame, edgesFrame];
}

function convertTraceToGraph(data) {
  const nodes = [];
  const edges = [];
  const traceDuration = findTraceDuration(data.spans);
  const spanMap = (0,tracing/* makeSpanMap */.nO)(index => {
    var _span$references;

    if (index >= data.spans.length) {
      return undefined;
    }

    const span = data.spans[index];
    return {
      span,
      id: span.spanID,
      parentIds: ((_span$references = span.references) === null || _span$references === void 0 ? void 0 : _span$references.filter(r => r.refType === 'CHILD_OF').map(r => r.spanID)) || []
    };
  });

  for (const span of data.spans) {
    var _process$serviceName, _span$references2, _span$references2$fin;

    const process = data.processes[span.processID];
    const ranges = spanMap[span.spanID].children.map(c => {
      const span = spanMap[c].span;
      return [span.startTime, span.startTime + span.duration];
    });
    const childrenDuration = (0,tracing/* getNonOverlappingDuration */.et)(ranges);
    const selfDuration = span.duration - childrenDuration;
    const stats = (0,tracing/* getStats */.fy)(span.duration / 1000, traceDuration / 1000, selfDuration / 1000);
    nodes.push({
      [src.NodeGraphDataFrameFieldNames.id]: span.spanID,
      [src.NodeGraphDataFrameFieldNames.title]: (_process$serviceName = process === null || process === void 0 ? void 0 : process.serviceName) !== null && _process$serviceName !== void 0 ? _process$serviceName : '',
      [src.NodeGraphDataFrameFieldNames.subTitle]: span.operationName,
      [src.NodeGraphDataFrameFieldNames.mainStat]: stats.main,
      [src.NodeGraphDataFrameFieldNames.secondaryStat]: stats.secondary,
      [src.NodeGraphDataFrameFieldNames.color]: selfDuration / traceDuration
    });
    const parentSpanID = (_span$references2 = span.references) === null || _span$references2 === void 0 ? void 0 : (_span$references2$fin = _span$references2.find(r => r.refType === 'CHILD_OF')) === null || _span$references2$fin === void 0 ? void 0 : _span$references2$fin.spanID; // Sometimes some span can be missing. Don't add edges for those.

    if (parentSpanID && spanMap[parentSpanID].span) {
      edges.push({
        [src.NodeGraphDataFrameFieldNames.id]: parentSpanID + '--' + span.spanID,
        [src.NodeGraphDataFrameFieldNames.target]: span.spanID,
        [src.NodeGraphDataFrameFieldNames.source]: parentSpanID
      });
    }
  }

  return {
    nodes,
    edges
  };
}
/**
 * Get the duration of the whole trace as it isn't a part of the response data.
 * Note: Seems like this should be the same as just longest span, but this is probably safer.
 */


function findTraceDuration(spans) {
  let traceEndTime = 0;
  let traceStartTime = Infinity;

  for (const span of spans) {
    if (span.startTime < traceStartTime) {
      traceStartTime = span.startTime;
    }

    if (span.startTime + span.duration > traceEndTime) {
      traceEndTime = span.startTime + span.duration;
    }
  }

  return traceEndTime - traceStartTime;
}
// EXTERNAL MODULE: ./public/app/plugins/datasource/jaeger/responseTransform.ts
var responseTransform = __webpack_require__("./public/app/plugins/datasource/jaeger/responseTransform.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/jaeger/datasource.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class JaegerDatasource extends src.DataSourceApi {
  constructor(instanceSettings) {
    let timeSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,TimeSrv/* getTimeSrv */.$t)();
    super(instanceSettings);
    this.instanceSettings = instanceSettings;
    this.timeSrv = timeSrv;

    _defineProperty(this, "uploadedJson", null);

    _defineProperty(this, "nodeGraph", void 0);

    this.instanceSettings = instanceSettings;
    this.timeSrv = timeSrv;
    this.nodeGraph = instanceSettings.jsonData.nodeGraph;
  }

  async metadataRequest(url, params) {
    const res = await (0,lastValueFrom/* lastValueFrom */.n)(this._request(url, params, {
      hideFromInspector: true
    }));
    return res.data.data;
  }

  query(options) {
    // At this moment we expect only one target. In case we somehow change the UI to be able to show multiple
    // traces at one we need to change this.
    const target = options.targets[0];

    if (!target) {
      return (0,of.of)({
        data: [emptyTraceDataFrame]
      });
    }

    if (target.queryType !== 'search' && target.query) {
      return this._request(`/api/traces/${encodeURIComponent((0,grafana_runtime_src.getTemplateSrv)().replace(target.query, options.scopedVars))}`).pipe((0,map/* map */.U)(response => {
        var _response$data, _response$data$data, _this$nodeGraph;

        const traceData = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$data = _response$data.data) === null || _response$data$data === void 0 ? void 0 : _response$data$data[0];

        if (!traceData) {
          return {
            data: [emptyTraceDataFrame]
          };
        }

        let data = [(0,responseTransform/* createTraceFrame */.xM)(traceData)];

        if ((_this$nodeGraph = this.nodeGraph) !== null && _this$nodeGraph !== void 0 && _this$nodeGraph.enabled) {
          data.push(...createGraphFrames(traceData));
        }

        return {
          data
        };
      }));
    }

    if (target.queryType === 'upload') {
      if (!this.uploadedJson) {
        return (0,of.of)({
          data: []
        });
      }

      try {
        var _this$nodeGraph2;

        const traceData = JSON.parse(this.uploadedJson).data[0];
        let data = [(0,responseTransform/* createTraceFrame */.xM)(traceData)];

        if ((_this$nodeGraph2 = this.nodeGraph) !== null && _this$nodeGraph2 !== void 0 && _this$nodeGraph2.enabled) {
          data.push(...createGraphFrames(traceData));
        }

        return (0,of.of)({
          data
        });
      } catch (error) {
        return (0,of.of)({
          error: {
            message: 'JSON is not valid Jaeger format'
          },
          data: []
        });
      }
    }

    let jaegerQuery = (0,lodash.pick)(target, ['operation', 'service', 'tags', 'minDuration', 'maxDuration', 'limit']); // remove empty properties

    jaegerQuery = (0,lodash.pickBy)(jaegerQuery, lodash.identity);

    if (jaegerQuery.tags) {
      jaegerQuery = Object.assign({}, jaegerQuery, {
        tags: convertTagsLogfmt((0,grafana_runtime_src.getTemplateSrv)().replace(jaegerQuery.tags, options.scopedVars))
      });
    }

    if (jaegerQuery.operation === ALL_OPERATIONS_KEY) {
      jaegerQuery = (0,lodash.omit)(jaegerQuery, 'operation');
    } // TODO: this api is internal, used in jaeger ui. Officially they have gRPC api that should be used.


    return this._request(`/api/traces`, Object.assign({}, jaegerQuery, this.getTimeRange(), {
      lookback: 'custom'
    })).pipe((0,map/* map */.U)(response => {
      return {
        data: [(0,responseTransform/* createTableFrame */.Wp)(response.data.data, this.instanceSettings)]
      };
    }));
  }

  async testDatasource() {
    return (0,lastValueFrom/* lastValueFrom */.n)(this._request('/api/services').pipe((0,map/* map */.U)(res => {
      var _res$data;

      const values = (res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data) || [];
      const testResult = values.length > 0 ? {
        status: 'success',
        message: 'Data source connected and services found.'
      } : {
        status: 'error',
        message: 'Data source connected, but no services received. Verify that Jaeger is configured properly.'
      };
      return testResult;
    }), (0,catchError/* catchError */.K)(err => {
      let message = 'Jaeger: ';

      if (err.statusText) {
        message += err.statusText;
      } else {
        message += 'Cannot connect to Jaeger';
      }

      if (err.status) {
        message += `. ${err.status}`;
      }

      if (err.data && err.data.message) {
        message += `. ${err.data.message}`;
      } else if (err.data) {
        message += `. ${JSON.stringify(err.data)}`;
      }

      return (0,of.of)({
        status: 'error',
        message: message
      });
    })));
  }

  getTimeRange() {
    const range = this.timeSrv.timeRange();
    return {
      start: getTime(range.from, false),
      end: getTime(range.to, true)
    };
  }

  getQueryDisplayText(query) {
    return query.query || '';
  }

  _request(apiUrl, data, options) {
    const params = data ? (0,fetch/* serializeParams */.tW)(data) : '';
    const url = `${this.instanceSettings.url}${apiUrl}${params.length ? `?${params}` : ''}`;
    const req = Object.assign({}, options, {
      url
    });
    return (0,grafana_runtime_src.getBackendSrv)().fetch(req);
  }

}

function getTime(date, roundUp) {
  if (typeof date === 'string') {
    date = src.dateMath.parse(date, roundUp);
  }

  return date.valueOf() * 1000;
}

const emptyTraceDataFrame = new src.MutableDataFrame({
  fields: [{
    name: 'trace',
    type: src.FieldType.trace,
    values: []
  }],
  meta: {
    preferredVisualisationType: 'trace',
    custom: {
      traceFormat: 'jaeger'
    }
  }
});
;// CONCATENATED MODULE: ./public/app/plugins/datasource/jaeger/module.ts




const module_plugin = new src.DataSourcePlugin(JaegerDatasource).setConfigEditor(ConfigEditor).setQueryEditor(QueryEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/responseTransform.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wp": () => (/* binding */ createTableFrame),
/* harmony export */   "c6": () => (/* binding */ transformToJaeger),
/* harmony export */   "xM": () => (/* binding */ createTraceFrame)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _jaegertracing_jaeger_ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/jaeger-ui-components/src/index.ts");


function createTraceFrame(data) {
  const spans = data.spans.map(s => toSpanRow(s, data.processes));
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'spanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'parentSpanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'operationName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'serviceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string
    }, {
      name: 'serviceTags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number
    }, {
      name: 'logs',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }, {
      name: 'tags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }, {
      name: 'warnings',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }, {
      name: 'stackTraces',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.other
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'jaeger'
      }
    }
  });

  for (const span of spans) {
    frame.add(span);
  }

  return frame;
}

function toSpanRow(span, processes) {
  var _span$references, _span$references$find, _span$warnings;

  return {
    spanID: span.spanID,
    traceID: span.traceID,
    parentSpanID: (_span$references = span.references) === null || _span$references === void 0 ? void 0 : (_span$references$find = _span$references.find(r => r.refType === 'CHILD_OF')) === null || _span$references$find === void 0 ? void 0 : _span$references$find.spanID,
    operationName: span.operationName,
    // from micro to millis
    startTime: span.startTime / 1000,
    duration: span.duration / 1000,
    logs: span.logs.map(l => Object.assign({}, l, {
      timestamp: l.timestamp / 1000
    })),
    tags: span.tags,
    warnings: (_span$warnings = span.warnings) !== null && _span$warnings !== void 0 ? _span$warnings : undefined,
    stackTraces: span.stackTraces,
    serviceName: processes[span.processID].serviceName,
    serviceTags: processes[span.processID].tags
  };
}

function createTableFrame(data, instanceSettings) {
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        unit: 'string',
        displayNameFromDS: 'Trace ID',
        links: [{
          title: 'Trace: ${__value.raw}',
          url: '',
          internal: {
            datasourceUid: instanceSettings.uid,
            datasourceName: instanceSettings.name,
            query: {
              query: '${__value.raw}'
            }
          }
        }]
      }
    }, {
      name: 'traceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.string,
      config: {
        displayNameFromDS: 'Trace name'
      }
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.time,
      config: {
        displayNameFromDS: 'Start time'
      }
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.number,
      config: {
        displayNameFromDS: 'Duration',
        unit: 'µs'
      }
    }],
    meta: {
      preferredVisualisationType: 'table'
    }
  }); // Show the most recent traces

  const traceData = data.map(transformToTraceData).sort((a, b) => (b === null || b === void 0 ? void 0 : b.startTime) - (a === null || a === void 0 ? void 0 : a.startTime));

  for (const trace of traceData) {
    frame.add(trace);
  }

  return frame;
}

function transformToTraceData(data) {
  const traceData = (0,_jaegertracing_jaeger_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .transformTraceData */ .R1)(data);

  if (!traceData) {
    return;
  }

  return {
    traceID: traceData.traceID,
    startTime: traceData.startTime / 1000,
    duration: traceData.duration,
    traceName: traceData.traceName
  };
}

function transformToJaeger(data) {
  let traceResponse = {
    traceID: '',
    spans: [],
    processes: {},
    warnings: null
  };
  let processes = [];

  for (let i = 0; i < data.length; i++) {
    const span = data.get(i); // Set traceID

    if (!traceResponse.traceID) {
      traceResponse.traceID = span.traceID;
    } // Create process if doesn't exist


    if (!processes.find(p => p === span.serviceName)) {
      processes.push(span.serviceName);
      traceResponse.processes[`p${processes.length}`] = {
        serviceName: span.serviceName,
        tags: span.serviceTags
      };
    } // Create span


    traceResponse.spans.push({
      traceID: span.traceID,
      spanID: span.spanID,
      duration: span.duration * 1000,
      references: span.parentSpanID ? [{
        refType: 'CHILD_OF',
        spanID: span.parentSpanID,
        traceID: span.traceID
      }] : [],
      flags: 0,
      logs: span.logs.map(l => Object.assign({}, l, {
        timestamp: l.timestamp * 1000
      })),
      operationName: span.operationName,
      processID: Object.keys(traceResponse.processes).find(key => traceResponse.processes[key].serviceName === span.serviceName) || '',
      startTime: span.startTime * 1000,
      tags: span.tags,
      warnings: span.warnings ? span.warnings : null
    });
  }

  return {
    data: [traceResponse],
    total: 0,
    limit: 0,
    offset: 0,
    errors: null
  };
}

/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/body_parser.js":
/***/ ((module, exports) => {


/*
Module dependencies.
*/

/*
JSON:

Parse logplex request bodies, providing the
parsed object as `req.body`.

Options: none

@param content_type {String} use when Content-Type matches this string
@param parser {Function} parsing function takes String body and returns new body
@return {Function}
@api public
*/

exports = module.exports = function(options) {
  var limit;
  if (options == null) options = {};

  return function(req, res, next) {
    if (req._body) return next();
    var is_mime = req.header('content-type') === options.contentType;
    if (!is_mime) return next();
    req._body = true;
    req.body = req.body || {};
    var buf;
    buf = "";
    req.setEncoding("utf8");
    req.on("data", function(chunk) {
      return buf += chunk;
    });
    req.on("end", function() {
      try {
        var lines = []
        buf.trim().split("\n").forEach(function(line){
          lines.push(options.parser(line))
        })
        req.body = lines;
      } catch (err) {
        err.body = buf;
        err.status = 400;
        return next(err);
      }
      return next();
    });
  };
};


/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/body_parser_stream.js":
/***/ ((module, exports, __webpack_require__) => {

var split = __webpack_require__("./.yarn/cache/split-npm-0.2.10-a950dc8c82-9eb1195608.zip/node_modules/split/index.js");
var through = __webpack_require__("./.yarn/cache/through-npm-2.3.8-df5f72a16e-a38c3e0598.zip/node_modules/through/index.js");
var Readable = (__webpack_require__("?7db0").Readable);
var PassThrough = (__webpack_require__("?7db0").PassThrough);
var logfmt   = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/logfmt.js");

exports = module.exports = function(options){
  if(options == null) options = {};
  var mime = options.contentType || "application/logplex-1";

  return function(req, res, next) {

    //honor already parsed bodies
    if (req._body) return next();

    //mime-type check
    var is_mime = req.header('content-type') === mime;
    if (!is_mime) return next();
    req._body = true;
    req.body = new PassThrough({objectMode: true});
    req.pipe(logfmt.streamParser()).pipe(req.body);

    return next();
  }
}



/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/logfmt_parser.js":
/***/ ((__unused_webpack_module, exports) => {

exports.debug = false;

exports.parse = function(line) {
  var key = '';
  var value = '';
  var is_number = true;
  var in_key    = false;
  var in_value  = false;
  var in_quote  = false;
  var had_quote = false;
  var object    = {};
  var debug     = exports.debug;

  if(line[line.length - 1] == '\n'){
    line = line.slice(0,line.length - 1)
  }

  for(var i=0; i <= line.length; i++){

    if((line[i] == ' ' && !in_quote) || i == line.length){
      if(in_key && key.length > 0){
        object[key] = true;
      }else if(in_value){
        if(value == 'true') value = true;
        else if(value == 'false') value = false;
        else if(value === '' && !had_quote) value = null;
        object[key] = value;
        value = '';
      }

      if(i == line.length) break;
      else {
        in_key   = false;
        in_value = false;
        in_quote = false;
        had_quote = false;
      }
    }

    if(line[i] == '=' && !in_quote){
      if(debug) console.log('split')
      //split
      in_key = false;
      in_value = true;
    }
    else if(line[i] == '\\'){
      i ++ ;
      value += line[i];
      if(debug) console.log('escape: ' + line[i])
    }
    else if(line[i] == '"'){
      had_quote = true;
      in_quote = !in_quote;
      if(debug) console.log('in quote: ' + in_quote)
    }
    else if(line[i] != ' ' && !in_value && !in_key){
      if(debug) console.log('start key with: ' + line[i])
      in_key = true;
      key = line[i];
    }
    else if(in_key){
      if(debug) console.log('add to key: ' + line[i])
      key += line[i]
    }
    else if(in_value){
      if(debug) console.log('add to value: ' + line[i])
      value += line[i];
    }
  }

  return object;
}


/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/logger.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.log = function(data, stream) {
  this.stream = this.stream || process.stdout;
  if(stream == undefined) stream = this.stream;

  var logData = Object.assign({}, this.defaultData, data);

  if(this.timers){
    for(var key in this.timers){
      var now = (new Date()).getTime()
      logData[key] = (now - this.timers[key]).toString() + 'ms' ;
    }
  }

  stream.write(this.stringify(logData) + "\n");
}

exports.time = function(label) {
  var logfmt = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/logfmt.js");
  var startTime = (new Date()).getTime();
  var label  = label || 'elapsed';
  var timer  = new logfmt();
  timer.stream = this.stream;
  timer.defaultData = this.defaultData;
  timer.timers = Object.assign({}, this.timers)
  timer.timers[label] = startTime;
  return timer;
}

exports.namespace = function(object) {
  var logfmt = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/logfmt.js");
  var namespaced = new logfmt()
  var namespace  = Object.assign({}, this.defaultData, object);
  namespaced.stream = this.stream;
  namespaced.defaultData = namespace
  namespaced.timers = this.timers;
  return namespaced;
}

exports.error = function(err, id) {
  this.maxErrorLines = this.maxErrorLines || 10;
  if (id === undefined) {
    id = Math.random().toString().slice(2, 12);
  }
  var errorLogger = this.namespace({
    error: true,
    id:id,
    now: (new Date()).toISOString()
  })
  errorLogger.log({ message:err.message });
  if (err.stack) {
    var stack = err.stack.split('\n');
    for (var line in stack) {
      if (line >= this.maxErrorLines) break;
      errorLogger.log({ line:line, trace:stack[line] });
    }
  }
}


/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/request_logger.js":
/***/ ((__unused_webpack_module, exports) => {

var commonFormatter = function(req, res){
  if((typeof req.path) == 'function'){
    //in restify path is a function
    var path = req.path();
  }
  else{
    //in express it is an attribute
    var path = req.originalUrl || req.path || req.url;
  }

  var httpHeader = req.header && req.header('x-forwarded-for')
  var requestID  = req.header && req.header('x-request-id')

  var ip = req.ip || httpHeader
                  || req.connection.remoteAddress;

  var requestData =  {
    ip: ip,
    time: (new Date()).toISOString(),
    method: req.method,
    path: path,
    "status": res.statusCode,
  }

  if (requestID) {
    requestData.request_id = requestID;
  }

  if(res.get){
    requestData.content_length = res.get('content-length');
    requestData.content_type = res.get('content-type');
  }
  return requestData;
}

var immediateLogger = function(logger, options, formatter){
  return function(req, res, next){
    var data = formatter(req, res);
    logger.log(data);
    next();
  }
}

var timingLogger = function(logger, options, formatter){
  return function(req, res, next){
    var elapsed = options.elapsed || 'elapsed';
    var timer   = logger.time(elapsed);
    var end = res.end;
    res.end = function(chunk, encoding) {
      var data = formatter(req, res);
      res.end = end;
      res.end(chunk, encoding);
      timer.log(data);
    };
    next();
  }
}

exports.init = function(logger, options, formatter) {
  this.logger = logger;

  if(!formatter && !options){
    formatter = commonFormatter;
    options = {};
  }
  else if(!formatter){
    if(typeof options == 'function'){
      formatter = options;
      options = {};
    }else{
      formatter = commonFormatter;
    }
  }
  options = options || {};

  if(options.immediate){
    return immediateLogger(logger, options, formatter);
  }else{
    return timingLogger(logger, options, formatter);
  }
}

exports.commonFormatter = commonFormatter;


/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/streaming.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var split       = __webpack_require__("./.yarn/cache/split-npm-0.2.10-a950dc8c82-9eb1195608.zip/node_modules/split/index.js")
var through     = __webpack_require__("./.yarn/cache/through-npm-2.3.8-df5f72a16e-a38c3e0598.zip/node_modules/through/index.js");
var PassThrough = (__webpack_require__("?7db0").PassThrough);

//returns a stream that splits and parses logfmt into objects
exports.streamParser = function(options){
  var options = options || {};

  var streamParser = new PassThrough();
  var self = this;

  var logfmtStream = through(function(line){
    if(line !== '') this.queue(self.parse(line))
  })

  // When a source stream is piped to us, undo that pipe, and save
  // off the source stream piped into our internally managed streams.
  streamParser.on('pipe', function(source) {
    if(source.unpipe) source.unpipe(this);
    this.transformStream = source.pipe(split()).pipe(logfmtStream);
  });

  // When we're piped to another stream, instead pipe our internal
  // transform stream to that destination.
  streamParser.pipe = function(destination, options) {
    return this.transformStream.pipe(destination, options);
  };

  return streamParser;
}

// returns a stream that stringifies objects
exports.streamStringify = function(options){
  var self = this;
  var options = options || {};
  if(options.hasOwnProperty('delimiter')){
    var delim = options.delimiter;
  }else{
    var delim = "\n";
  }

  return through(function(data){
    this.queue(self.stringify(data) + delim)
  }, function(){
    this.queue(null)
  })
}


/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/stringify.js":
/***/ ((__unused_webpack_module, exports) => {

exports.stringify = function(data){
  var line = '';

  for(var key in data) {
    var value = data[key];
    var is_null = false;
    if(value == null) {
      is_null = true;
      value = '';
    }
    else value = value.toString();

    var needs_quoting  = value.indexOf(' ') > -1 || value.indexOf('=') > -1;
    var needs_escaping = value.indexOf('"') > -1 || value.indexOf("\\") > -1;

    if(needs_escaping) value = value.replace(/["\\]/g, '\\$&');
    if(needs_quoting) value = '"' + value + '"';
    if(value === '' && !is_null) value = '""';

    line += key + '=' + value + ' ';
  }

  //trim traling space
  return line.substring(0,line.length-1);
}



/***/ }),

/***/ "./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/logfmt.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//constructor
function logfmt() {
}
module.exports = logfmt;

var streaming        = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/streaming.js");
var bodyParser       = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/body_parser.js");
var bodyParserStream = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/body_parser_stream.js");
var logfmtParser     = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/logfmt_parser.js");
var logger           = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/logger.js");
var requestLogger    = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/request_logger.js");
var serializer       = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/lib/stringify.js");

//Build up logfmt prototype
Object.assign(logfmt.prototype, logger);
Object.assign(logfmt.prototype, streaming);

logfmt.prototype.stringify = serializer.stringify;
logfmt.prototype.parse = logfmtParser.parse;

// Synchronous body parser
logfmt.prototype.bodyParser = function(options) {
  options || (options = {});
  var mime = options.contentType || "application/logplex-1";
  return bodyParser({ contentType: mime, parser: this.parse });
};

// Stream parser
logfmt.prototype.bodyParserStream = function(options) {
  options || (options = {});
  var mime = options.contentType || "application/logplex-1";
  return bodyParserStream({ contentType: mime });
};

logfmt.prototype.requestLogger = function(options, formatter) {
  return requestLogger.init(this, options, formatter);
};

logfmt.prototype.requestLogger.commonFormatter = requestLogger.commonFormatter;

Object.assign(logfmt, logfmt.prototype);


/***/ }),

/***/ "./.yarn/cache/split-npm-0.2.10-a950dc8c82-9eb1195608.zip/node_modules/split/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//filter will reemit the data if cb(err,pass) pass is truthy

// reduce is more tricky
// maybe we want to group the reductions or emit progress updates occasionally
// the most basic reduce just emits one 'data' event after it has recieved 'end'


var through = __webpack_require__("./.yarn/cache/through-npm-2.3.8-df5f72a16e-a38c3e0598.zip/node_modules/through/index.js")
var Decoder = (__webpack_require__("?1a5c").StringDecoder)

module.exports = split

//TODO pass in a function to map across the lines.

function split (matcher, mapper) {
  var decoder = new Decoder()
  var soFar = ''
  if('function' === typeof matcher)
    mapper = matcher, matcher = null
  if (!matcher)
    matcher = /\r?\n/

  function emit(stream, piece) {
    if(mapper) {
      try {
        piece = mapper(piece)
      }
      catch (err) {
        return stream.emit('error', err)
      }
      if('undefined' !== typeof piece)
        stream.queue(piece)
    }
    else
      stream.queue(piece)
  }

  function next (stream, buffer) { 
    var pieces = (soFar + buffer).split(matcher)
    soFar = pieces.pop()

    for (var i = 0; i < pieces.length; i++) {
      var piece = pieces[i]
      emit(stream, piece)
    }
  }

  return through(function (b) {
    next(this, decoder.write(b))
  },
  function () {
    if(decoder.end) 
      next(this, decoder.end())
    if(soFar != null)
      emit(this, soFar)
    this.queue(null)
  })
}



/***/ }),

/***/ "./.yarn/cache/through-npm-2.3.8-df5f72a16e-a38c3e0598.zip/node_modules/through/index.js":
/***/ ((module, exports, __webpack_require__) => {

var Stream = __webpack_require__("?dcf2")

// through
//
// a stream that does nothing but re-emit the input.
// useful for aggregating a series of changing but not ending streams into one stream)

exports = module.exports = through
through.through = through

//create a readable writable stream.

function through (write, end, opts) {
  write = write || function (data) { this.queue(data) }
  end = end || function () { this.queue(null) }

  var ended = false, destroyed = false, buffer = [], _ended = false
  var stream = new Stream()
  stream.readable = stream.writable = true
  stream.paused = false

//  stream.autoPause   = !(opts && opts.autoPause   === false)
  stream.autoDestroy = !(opts && opts.autoDestroy === false)

  stream.write = function (data) {
    write.call(this, data)
    return !stream.paused
  }

  function drain() {
    while(buffer.length && !stream.paused) {
      var data = buffer.shift()
      if(null === data)
        return stream.emit('end')
      else
        stream.emit('data', data)
    }
  }

  stream.queue = stream.push = function (data) {
//    console.error(ended)
    if(_ended) return stream
    if(data === null) _ended = true
    buffer.push(data)
    drain()
    return stream
  }

  //this will be registered as the first 'end' listener
  //must call destroy next tick, to make sure we're after any
  //stream piped from here.
  //this is only a problem if end is not emitted synchronously.
  //a nicer way to do this is to make sure this is the last listener for 'end'

  stream.on('end', function () {
    stream.readable = false
    if(!stream.writable && stream.autoDestroy)
      process.nextTick(function () {
        stream.destroy()
      })
  })

  function _end () {
    stream.writable = false
    end.call(stream)
    if(!stream.readable && stream.autoDestroy)
      stream.destroy()
  }

  stream.end = function (data) {
    if(ended) return
    ended = true
    if(arguments.length) stream.write(data)
    _end() // will emit or queue
    return stream
  }

  stream.destroy = function () {
    if(destroyed) return
    destroyed = true
    ended = true
    buffer.length = 0
    stream.writable = stream.readable = false
    stream.emit('close')
    return stream
  }

  stream.pause = function () {
    if(stream.paused) return
    stream.paused = true
    return stream
  }

  stream.resume = function () {
    if(stream.paused) {
      stream.paused = false
      stream.emit('resume')
    }
    drain()
    //may have become paused again,
    //as drain emits 'data'.
    if(!stream.paused)
      stream.emit('drain')
    return stream
  }
  return stream
}



/***/ })

}]);