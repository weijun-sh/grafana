(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["jaegerPlugin"],{

/***/ "./public/app/core/components/NodeGraphSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NodeGraphSettings": () => (/* binding */ NodeGraphSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;







function NodeGraphSettings({
  options,
  onOptionsChange
}) {
  var _options$jsonData$nod;

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

/***/ "./public/app/core/components/TraceToLogs/KeyValueInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _Icon2, _Icon3;






const EQ_WIDTH = 3; // = 24px in inline label

const KeyValueInput = ({
  values,
  onChange,
  id,
  keyPlaceholder = 'Key',
  valuePlaceholder = 'Value (optional)'
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: styles.wrapper,
    children: values.length ? values.map((value, idx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: styles.pair,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SegmentInput, {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, {
        "aria-label": "equals",
        className: styles.operator,
        width: EQ_WIDTH,
        children: "="
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SegmentInput, {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        onClick: () => onChange([...values.slice(0, idx), ...values.slice(idx + 1)]),
        className: "gf-form-label query-part",
        "aria-label": "Remove tag",
        children: _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "times"
        }))
      }), idx === values.length - 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
        onClick: () => onChange([...values, {
          key: '',
          value: ''
        }]),
        className: "gf-form-label query-part",
        "aria-label": "Add tag",
        children: _Icon2 || (_Icon2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "plus"
        }))
      }) : null]
    }, idx)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      onClick: () => onChange([...values, {
        key: '',
        value: ''
      }]),
      className: "gf-form-label query-part",
      "aria-label": "Add tag",
      children: _Icon3 || (_Icon3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        name: "plus"
      }))
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyValueInput);

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs} 0;
  `,
  pair: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    justify-content: start;
    align-items: center;
  `,
  operator: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.palette.orange};
  `
});

/***/ }),

/***/ "./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceToLogsSettings": () => (/* binding */ TraceToLogsSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _KeyValueInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/TraceToLogs/KeyValueInput.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;









function TraceToLogsSettings({
  options,
  onOptionsChange
}) {
  var _options$jsonData$tra, _options$jsonData$tra3, _ref, _options$jsonData$tra4, _options$jsonData$tra5, _options$jsonData$tra6, _options$jsonData$tra7, _options$jsonData$tra8, _options$jsonData$tra9, _options$jsonData$tra10, _options$jsonData$tra11, _options$jsonData$tra12, _options$jsonData$tra13, _options$jsonData$tra14;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      width: '100%'
    }),
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
      className: "page-heading",
      children: "Trace to logs"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: styles.infoText,
      children: "Trace to logs lets you navigate from a trace span to the selected data source's logs."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        tooltip: "The data source the trace is going to navigate to",
        label: "Data source",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.DataSourcePicker, {
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

            return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
              onOptionsChange,
              options
            }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
              datasourceUid: ds.uid,
              tags: (_options$jsonData$tra2 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra2 === void 0 ? void 0 : _options$jsonData$tra2.tags
            }));
          }
        })
      })
    }), (_options$jsonData$tra3 = options.jsonData.tracesToLogs) !== null && _options$jsonData$tra3 !== void 0 && _options$jsonData$tra3.mapTagNamesEnabled ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        tooltip: "Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'",
        label: "Tags",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_KeyValueInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          keyPlaceholder: "Tag",
          values: (_ref = (_options$jsonData$tra4 = (_options$jsonData$tra5 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra5 === void 0 ? void 0 : _options$jsonData$tra5.mappedTags) !== null && _options$jsonData$tra4 !== void 0 ? _options$jsonData$tra4 : (_options$jsonData$tra6 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra6 === void 0 ? void 0 : (_options$jsonData$tra7 = _options$jsonData$tra6.tags) === null || _options$jsonData$tra7 === void 0 ? void 0 : _options$jsonData$tra7.map(tag => ({
            key: tag
          }))) !== null && _ref !== void 0 ? _ref : [],
          onChange: v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            mappedTags: v
          }))
        })
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        tooltip: "Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'",
        label: "Tags",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TagsInput, {
          tags: (_options$jsonData$tra8 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra8 === void 0 ? void 0 : _options$jsonData$tra8.tags,
          width: 40,
          onChange: tags => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            tags: tags
          }))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Map tag names",
        labelWidth: 26,
        grow: true,
        tooltip: "Map trace tag names to log label names. Ex: k8s.pod.name -> pod",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineSwitch, {
          id: "mapTagNames",
          value: (_options$jsonData$tra9 = (_options$jsonData$tra10 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra10 === void 0 ? void 0 : _options$jsonData$tra10.mapTagNamesEnabled) !== null && _options$jsonData$tra9 !== void 0 ? _options$jsonData$tra9 : false,
          onChange: event => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            mapTagNamesEnabled: event.currentTarget.checked
          }))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Span start time shift",
        labelWidth: 26,
        grow: true,
        tooltip: "Shifts the start time of the span. Default 0 (Time units can be used here, for example: 5s, 1m, 3h)",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          type: "text",
          placeholder: "1h",
          width: 40,
          onChange: v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            spanStartTimeShift: v.currentTarget.value
          })),
          value: ((_options$jsonData$tra11 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra11 === void 0 ? void 0 : _options$jsonData$tra11.spanStartTimeShift) || ''
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Span end time shift",
        labelWidth: 26,
        grow: true,
        tooltip: "Shifts the end time of the span. Default 0 Time units can be used here, for example: 5s, 1m, 3h",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          type: "text",
          placeholder: "1h",
          width: 40,
          onChange: v => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            spanEndTimeShift: v.currentTarget.value
          })),
          value: ((_options$jsonData$tra12 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra12 === void 0 ? void 0 : _options$jsonData$tra12.spanEndTimeShift) || ''
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Filter by Trace ID",
        labelWidth: 26,
        grow: true,
        tooltip: "Filters logs by Trace ID. Appends '|=<trace id>' to the query.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineSwitch, {
          id: "filterByTraceID",
          value: (_options$jsonData$tra13 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra13 === void 0 ? void 0 : _options$jsonData$tra13.filterByTraceID,
          onChange: event => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'tracesToLogs', Object.assign({}, options.jsonData.tracesToLogs, {
            filterByTraceID: event.currentTarget.checked
          }))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        label: "Filter by Span ID",
        labelWidth: 26,
        grow: true,
        tooltip: "Filters logs by Span ID. Appends '|=<span id>' to the query.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineSwitch, {
          id: "filterBySpanID",
          value: (_options$jsonData$tra14 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra14 === void 0 ? void 0 : _options$jsonData$tra14.filterBySpanID,
          onChange: event => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
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

const getStyles = theme => ({
  infoText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding-bottom: ${theme.spacing.md};
    color: ${theme.colors.textSemiWeak};
  `
});

/***/ }),

/***/ "./public/app/core/components/TraceToMetrics/TraceToMetricsSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceToMetricsSettings": () => (/* binding */ TraceToMetricsSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;








function TraceToMetricsSettings({
  options,
  onOptionsChange
}) {
  var _options$jsonData$tra, _options$jsonData$tra2, _options$jsonData$tra3;

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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNonOverlappingDuration": () => (/* binding */ getNonOverlappingDuration),
/* harmony export */   "getStats": () => (/* binding */ getStats),
/* harmony export */   "makeFrames": () => (/* binding */ makeFrames),
/* harmony export */   "makeSpanMap": () => (/* binding */ makeSpanMap)
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

/***/ "./public/app/plugins/datasource/jaeger/components/AdvancedOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvancedOptions": () => (/* binding */ AdvancedOptions)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-transition-group-virtual-8df824fae8/0/cache/react-transition-group-npm-4.4.2-5052c30656-b67bf5b3e8.zip/node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






const durationPlaceholder = 'e.g. 1.2s, 100ms, 500us';
function AdvancedOptions({
  query,
  onChange
}) {
  const [showAdvancedOptions, setShowAdvancedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: styles.advancedOptionsContainer,
        onClick: () => setShowAdvancedOptions(!showAdvancedOptions),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineLabel, {
          as: "div",
          children: ["Advanced options", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
            className: showAdvancedOptions ? styles.angleUp : styles.angleDown,
            name: "angle-down"
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_transition_group__WEBPACK_IMPORTED_MODULE_4__["default"], {
      in: showAdvancedOptions,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: 300,
      classNames: styles,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
            label: "Min Duration",
            labelWidth: 21,
            grow: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
              id: "minDuration",
              name: "minDuration",
              value: query.minDuration || '',
              placeholder: durationPlaceholder,
              onChange: v => onChange(Object.assign({}, query, {
                minDuration: v.currentTarget.value
              }))
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
            label: "Max Duration",
            labelWidth: 21,
            grow: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
              id: "maxDuration",
              name: "maxDuration",
              value: query.maxDuration || '',
              placeholder: durationPlaceholder,
              onChange: v => onChange(Object.assign({}, query, {
                maxDuration: v.currentTarget.value
              }))
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
            label: "Limit",
            labelWidth: 21,
            grow: true,
            tooltip: "Maximum numbers of returned results",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {
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
    advancedOptionsContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: 0 ${theme.spacing.xs} ${theme.spacing.xs} 0;
      width: 100%;
      cursor: pointer;
    `,
    enter: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: enter;
      height: 0;
      opacity: 0;
    `,
    enterActive: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: enterActive;
      height: 108px;
      opacity: 1;
      transition: height 300ms ease, opacity 300ms ease;
    `,
    exit: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: exit;
      height: 108px;
      opacity: 1;
    `,
    exitActive: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      label: exitActive;
      height: 0;
      opacity: 0;
      transition: height 300ms ease, opacity 300ms ease;
    `,
    angleUp: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      transform: rotate(-180deg);
      transition: transform 300ms;
    `,
    angleDown: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      transform: rotate(0deg);
      transition: transform 300ms;
    `
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/components/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigEditor": () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_NodeGraphSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/NodeGraphSettings.tsx");
/* harmony import */ var app_core_components_TraceToLogs_TraceToLogsSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/TraceToLogs/TraceToLogsSettings.tsx");
/* harmony import */ var app_core_components_TraceToMetrics_TraceToMetricsSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/TraceToMetrics/TraceToMetricsSettings.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");









const ConfigEditor = ({
  options,
  onOptionsChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.DataSourceHttpSettings, {
      defaultUrl: "http://localhost:16686",
      dataSourceConfig: options,
      showAccessOptions: false,
      onChange: onOptionsChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_TraceToLogs_TraceToLogsSettings__WEBPACK_IMPORTED_MODULE_4__.TraceToLogsSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.featureToggles.traceToMetrics ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_TraceToMetrics_TraceToMetricsSettings__WEBPACK_IMPORTED_MODULE_5__.TraceToMetricsSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_NodeGraphSettings__WEBPACK_IMPORTED_MODULE_3__.NodeGraphSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/components/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryEditor": () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/jaeger/components/SearchForm.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function QueryEditor({
  datasource,
  query,
  onChange,
  onRunQuery
}) {
  var _SearchForm;

  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme2)();

  const onChangeQuery = value => {
    const nextQuery = Object.assign({}, query, {
      query: value
    });
    onChange(nextQuery);
  };

  const renderEditorBody = () => {
    switch (query.queryType) {
      case 'search':
        return _SearchForm || (_SearchForm = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SearchForm__WEBPACK_IMPORTED_MODULE_3__.SearchForm, {
          datasource: datasource,
          query: query,
          onChange: onChange
        }));

      case 'upload':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
            padding: theme.spacing(2)
          }),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.FileDropzone, {
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
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
            label: "Trace ID",
            labelWidth: 14,
            grow: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.QueryField, {
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
        width: '100%'
      }),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
          label: "Query type",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
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

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/components/SearchForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_OPERATIONS_KEY": () => (/* binding */ ALL_OPERATIONS_KEY),
/* harmony export */   "SearchForm": () => (/* binding */ SearchForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/jaeger/util.ts");
/* harmony import */ var _AdvancedOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/jaeger/components/AdvancedOptions.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











const ALL_OPERATIONS_KEY = 'All';
const allOperationsOption = {
  label: ALL_OPERATIONS_KEY,
  value: undefined
};
function SearchForm({
  datasource,
  query,
  onChange
}) {
  const [serviceOptions, setServiceOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [operationOptions, setOperationOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    services: false,
    operations: false
  });
  const loadServices = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (url, loaderOfType, query = '') => {
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
      const filteredOptions = serviceOptions.filter(item => item.value ? (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.fuzzyMatch)(item.value, query).found : false);
      return filteredOptions;
    } catch (error) {
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_6__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_4__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.createErrorNotification)('Error', error)));
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

  const serviceSearch = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(getServiceOptions, 500, {
    leading: true,
    trailing: true
  });
  const operationSearch = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(getOperationOptions, 500, {
    leading: true,
    trailing: true
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const getServices = async () => {
      const services = await loadServices('/api/services', 'services');
      setServiceOptions(services);
    };

    getServices();
  }, [datasource, loadServices]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const getOperations = async () => {
      const operations = await loadServices(`/api/services/${encodeURIComponent(query.service)}/operations`, 'operations');
      setOperationOptions([allOperationsOption, ...operations]);
    };

    if (query.service) {
      getOperations();
    }
  }, [datasource, query.service, loadServices]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      maxWidth: '500px'
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: "Service",
        labelWidth: 14,
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.AsyncSelect, {
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: "Operation",
        labelWidth: 14,
        grow: true,
        disabled: !query.service,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.AsyncSelect, {
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: "Tags",
        labelWidth: 14,
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
          id: "tags",
          value: (0,_util__WEBPACK_IMPORTED_MODULE_7__.transformToLogfmt)(query.tags),
          placeholder: "http.status_code=200 error=true",
          onChange: v => onChange(Object.assign({}, query, {
            tags: v.currentTarget.value
          }))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_AdvancedOptions__WEBPACK_IMPORTED_MODULE_8__.AdvancedOptions, {
      query: query,
      onChange: onChange
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchForm);

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JaegerDatasource": () => (/* binding */ JaegerDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_utils_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/fetch.ts");
/* harmony import */ var app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/jaeger/components/SearchForm.tsx");
/* harmony import */ var _graphTransform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/jaeger/graphTransform.ts");
/* harmony import */ var _responseTransform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/jaeger/responseTransform.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/jaeger/util.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class JaegerDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataSourceApi {
  constructor(instanceSettings, timeSrv = (0,app_features_dashboard_services_TimeSrv__WEBPACK_IMPORTED_MODULE_4__.getTimeSrv)()) {
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
    const res = await (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.lastValueFrom)(this._request(url, params, {
      hideFromInspector: true
    }));
    return res.data.data;
  }

  query(options) {
    // At this moment we expect only one target. In case we somehow change the UI to be able to show multiple
    // traces at one we need to change this.
    const target = options.targets[0];

    if (!target) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
        data: [emptyTraceDataFrame]
      });
    }

    if (target.queryType !== 'search' && target.query) {
      return this._request(`/api/traces/${encodeURIComponent((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)().replace(target.query, options.scopedVars))}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => {
        var _response$data, _response$data$data, _this$nodeGraph;

        const traceData = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : (_response$data$data = _response$data.data) === null || _response$data$data === void 0 ? void 0 : _response$data$data[0];

        if (!traceData) {
          return {
            data: [emptyTraceDataFrame]
          };
        }

        let data = [(0,_responseTransform__WEBPACK_IMPORTED_MODULE_7__.createTraceFrame)(traceData)];

        if ((_this$nodeGraph = this.nodeGraph) !== null && _this$nodeGraph !== void 0 && _this$nodeGraph.enabled) {
          data.push(...(0,_graphTransform__WEBPACK_IMPORTED_MODULE_6__.createGraphFrames)(traceData));
        }

        return {
          data
        };
      }));
    }

    if (target.queryType === 'upload') {
      if (!this.uploadedJson) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
          data: []
        });
      }

      try {
        var _this$nodeGraph2;

        const traceData = JSON.parse(this.uploadedJson).data[0];
        let data = [(0,_responseTransform__WEBPACK_IMPORTED_MODULE_7__.createTraceFrame)(traceData)];

        if ((_this$nodeGraph2 = this.nodeGraph) !== null && _this$nodeGraph2 !== void 0 && _this$nodeGraph2.enabled) {
          data.push(...(0,_graphTransform__WEBPACK_IMPORTED_MODULE_6__.createGraphFrames)(traceData));
        }

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
          data
        });
      } catch (error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
          error: {
            message: 'JSON is not valid Jaeger format'
          },
          data: []
        });
      }
    }

    let jaegerQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(target, ['operation', 'service', 'tags', 'minDuration', 'maxDuration', 'limit']); // remove empty properties

    jaegerQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pickBy)(jaegerQuery, lodash__WEBPACK_IMPORTED_MODULE_0__.identity);

    if (jaegerQuery.tags) {
      jaegerQuery = Object.assign({}, jaegerQuery, {
        tags: (0,_util__WEBPACK_IMPORTED_MODULE_8__.convertTagsLogfmt)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)().replace(jaegerQuery.tags, options.scopedVars))
      });
    }

    if (jaegerQuery.operation === _components_SearchForm__WEBPACK_IMPORTED_MODULE_5__.ALL_OPERATIONS_KEY) {
      jaegerQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(jaegerQuery, 'operation');
    } // TODO: this api is internal, used in jaeger ui. Officially they have gRPC api that should be used.


    return this._request(`/api/traces`, Object.assign({}, jaegerQuery, this.getTimeRange(), {
      lookback: 'custom'
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => {
      return {
        data: [(0,_responseTransform__WEBPACK_IMPORTED_MODULE_7__.createTableFrame)(response.data.data, this.instanceSettings)]
      };
    }));
  }

  async testDatasource() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.lastValueFrom)(this._request('/api/services').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(res => {
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
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(err => {
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

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({
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
    const params = data ? (0,app_core_utils_fetch__WEBPACK_IMPORTED_MODULE_3__.serializeParams)(data) : '';
    const url = `${this.instanceSettings.url}${apiUrl}${params.length ? `?${params}` : ''}`;
    const req = Object.assign({}, options, {
      url
    });
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch(req);
  }

}

function getTime(date, roundUp) {
  if (typeof date === 'string') {
    date = _grafana_data__WEBPACK_IMPORTED_MODULE_1__.dateMath.parse(date, roundUp);
  }

  return date.valueOf() * 1000;
}

const emptyTraceDataFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.MutableDataFrame({
  fields: [{
    name: 'trace',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.trace,
    values: []
  }],
  meta: {
    preferredVisualisationType: 'trace',
    custom: {
      traceFormat: 'jaeger'
    }
  }
});

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/graphTransform.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGraphFrames": () => (/* binding */ createGraphFrames)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/tracing.ts");


function createGraphFrames(data) {
  const {
    nodes,
    edges
  } = convertTraceToGraph(data);
  const [nodesFrame, edgesFrame] = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.makeFrames)();

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
  const spanMap = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.makeSpanMap)(index => {
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
    const childrenDuration = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getNonOverlappingDuration)(ranges);
    const selfDuration = span.duration - childrenDuration;
    const stats = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getStats)(span.duration / 1000, traceDuration / 1000, selfDuration / 1000);
    nodes.push({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: span.spanID,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: (_process$serviceName = process === null || process === void 0 ? void 0 : process.serviceName) !== null && _process$serviceName !== void 0 ? _process$serviceName : '',
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle]: span.operationName,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: stats.main,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: stats.secondary,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.color]: selfDuration / traceDuration
    });
    const parentSpanID = (_span$references2 = span.references) === null || _span$references2 === void 0 ? void 0 : (_span$references2$fin = _span$references2.find(r => r.refType === 'CHILD_OF')) === null || _span$references2$fin === void 0 ? void 0 : _span$references2$fin.spanID; // Sometimes some span can be missing. Don't add edges for those.

    if (parentSpanID && spanMap[parentSpanID].span) {
      edges.push({
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: parentSpanID + '--' + span.spanID,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: span.spanID,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: parentSpanID
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

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/jaeger/components/ConfigEditor.tsx");
/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/jaeger/components/QueryEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/jaeger/datasource.ts");




const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_3__.JaegerDatasource).setConfigEditor(_components_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__.ConfigEditor).setQueryEditor(_components_QueryEditor__WEBPACK_IMPORTED_MODULE_2__.QueryEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/responseTransform.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTableFrame": () => (/* binding */ createTableFrame),
/* harmony export */   "createTraceFrame": () => (/* binding */ createTraceFrame),
/* harmony export */   "transformToJaeger": () => (/* binding */ transformToJaeger)
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
  const traceData = (0,_jaegertracing_jaeger_ui_components__WEBPACK_IMPORTED_MODULE_1__.transformTraceData)(data);

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

/***/ "./public/app/plugins/datasource/jaeger/util.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertTagsLogfmt": () => (/* binding */ convertTagsLogfmt),
/* harmony export */   "transformToLogfmt": () => (/* binding */ transformToLogfmt)
/* harmony export */ });
/* harmony import */ var logfmt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/logfmt-npm-1.3.2-37fabee436-639d327c1e.zip/node_modules/logfmt/logfmt.js");
/* harmony import */ var logfmt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(logfmt__WEBPACK_IMPORTED_MODULE_0__);

function convertTagsLogfmt(tags) {
  if (!tags) {
    return '';
  }

  const data = logfmt__WEBPACK_IMPORTED_MODULE_0___default().parse(tags);
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
    return logfmt__WEBPACK_IMPORTED_MODULE_0___default().stringify(JSON.parse(tags));
  } catch {
    return tags;
  }
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



/***/ }),

/***/ "?7db0":
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?1a5c":
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?dcf2":
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamFlZ2VyUGx1Z2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBTUE7OztBQVlPLFNBQVNPLGlCQUFULENBQTJCO0FBQUVDLEVBQUFBLE9BQUY7QUFBV0MsRUFBQUE7QUFBWCxDQUEzQixFQUFnRTtBQUFBOztBQUNyRSxRQUFNQyxNQUFNLEdBQUdKLHNEQUFTLENBQUNLLFNBQUQsQ0FBeEI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUQsTUFBTSxDQUFDRSxTQUF2QjtBQUFBLHdDQUNFO0FBQUksZUFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBLE1BREYsZ0JBRUUsdURBQUMsdURBQUQ7QUFBZ0IsZUFBUyxFQUFFRixNQUFNLENBQUNHLEdBQWxDO0FBQUEsNkJBQ0UsdURBQUMsb0RBQUQ7QUFDRSxlQUFPLEVBQUMsMkRBRFY7QUFFRSxhQUFLLEVBQUMsbUJBRlI7QUFHRSxrQkFBVSxFQUFFLEVBSGQ7QUFBQSwrQkFLRSx1REFBQyxxREFBRDtBQUNFLFlBQUUsRUFBQyxpQkFETDtBQUVFLGVBQUssMkJBQUVMLE9BQU8sQ0FBQ00sUUFBUixDQUFpQkMsU0FBbkIsMERBQUUsc0JBQTRCQyxPQUZyQztBQUdFLGtCQUFRLEVBQUdDLEtBQUQsSUFDUmYsbUZBQW9DLENBQUM7QUFBRU8sWUFBQUEsZUFBRjtBQUFtQkQsWUFBQUE7QUFBbkIsV0FBRCxFQUErQixXQUEvQixvQkFDL0JBLE9BQU8sQ0FBQ00sUUFBUixDQUFpQkMsU0FEYztBQUVsQ0MsWUFBQUEsT0FBTyxFQUFFQyxLQUFLLENBQUNDLGFBQU4sQ0FBb0JDO0FBRks7QUFKeEM7QUFMRjtBQURGLE1BRkY7QUFBQSxJQURGO0FBdUJEOztBQUVELE1BQU1SLFNBQVMsR0FBSVMsS0FBRCxLQUEwQjtBQUMxQ1IsRUFBQUEsU0FBUyxFQUFFWiw2Q0FBSTtBQUNqQjtBQUNBO0FBQ0EsR0FKNEM7QUFLMUNhLEVBQUFBLEdBQUcsRUFBRWIsNkNBQUk7QUFDWDtBQUNBO0FBQ0E7QUFSNEMsQ0FBMUIsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBR0E7OztBQUVBLE1BQU13QixRQUFRLEdBQUcsQ0FBakIsRUFBb0I7O0FBVXBCLE1BQU1DLGFBQWEsR0FBRyxDQUFDO0FBQ3JCQyxFQUFBQSxNQURxQjtBQUVyQkMsRUFBQUEsUUFGcUI7QUFHckJDLEVBQUFBLEVBSHFCO0FBSXJCQyxFQUFBQSxjQUFjLEdBQUcsS0FKSTtBQUtyQkMsRUFBQUEsZ0JBQWdCLEdBQUc7QUFMRSxDQUFELEtBTVQ7QUFDWCxRQUFNcEIsTUFBTSxHQUFHSixzREFBUyxDQUFDSyxTQUFELENBQXhCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVELE1BQU0sQ0FBQ3FCLE9BQXZCO0FBQUEsY0FDR0wsTUFBTSxDQUFDTSxNQUFQLEdBQ0NOLE1BQU0sQ0FBQ08sR0FBUCxDQUFXLENBQUNDLEtBQUQsRUFBUUMsR0FBUixrQkFDVDtBQUFLLGVBQVMsRUFBRXpCLE1BQU0sQ0FBQzBCLElBQXZCO0FBQUEsOEJBQ0UsdURBQUMscURBQUQ7QUFDRSxVQUFFLEVBQUcsR0FBRVIsRUFBRyxRQUFPTyxHQUFJLEVBRHZCO0FBRUUsbUJBQVcsRUFBRU4sY0FGZjtBQUdFLGFBQUssRUFBRUssS0FBSyxDQUFDRyxHQUhmO0FBSUUsZ0JBQVEsRUFBR0MsQ0FBRCxJQUFPO0FBQ2ZYLFVBQUFBLFFBQVEsQ0FDTkQsTUFBTSxDQUFDTyxHQUFQLENBQVcsQ0FBQ00sQ0FBRCxFQUFJQyxDQUFKLEtBQVU7QUFDbkIsZ0JBQUlBLENBQUMsS0FBS0wsR0FBVixFQUFlO0FBQ2JJLGNBQUFBLENBQUMsQ0FBQ0YsR0FBRixHQUFRSSxNQUFNLENBQUNILENBQUQsQ0FBZDtBQUNEOztBQUNELG1CQUFPQyxDQUFQO0FBQ0QsV0FMRCxDQURNLENBQVI7QUFRRDtBQWJILFFBREYsZUFnQkUsdURBQUMsb0RBQUQ7QUFBYSxzQkFBVyxRQUF4QjtBQUFpQyxpQkFBUyxFQUFFN0IsTUFBTSxDQUFDZ0MsUUFBbkQ7QUFBNkQsYUFBSyxFQUFFbEIsUUFBcEU7QUFBQTtBQUFBLFFBaEJGLGVBbUJFLHVEQUFDLHFEQUFEO0FBQ0UsVUFBRSxFQUFHLEdBQUVJLEVBQUcsVUFBU08sR0FBSSxFQUR6QjtBQUVFLG1CQUFXLEVBQUVMLGdCQUZmO0FBR0UsYUFBSyxFQUFFSSxLQUFLLENBQUNBLEtBSGY7QUFJRSxnQkFBUSxFQUFHSSxDQUFELElBQU87QUFDZlgsVUFBQUEsUUFBUSxDQUNORCxNQUFNLENBQUNPLEdBQVAsQ0FBVyxDQUFDTSxDQUFELEVBQUlDLENBQUosS0FBVTtBQUNuQixnQkFBSUEsQ0FBQyxLQUFLTCxHQUFWLEVBQWU7QUFDYkksY0FBQUEsQ0FBQyxDQUFDTCxLQUFGLEdBQVVPLE1BQU0sQ0FBQ0gsQ0FBRCxDQUFoQjtBQUNEOztBQUNELG1CQUFPQyxDQUFQO0FBQ0QsV0FMRCxDQURNLENBQVI7QUFRRDtBQWJILFFBbkJGLGVBa0NFO0FBQ0UsZUFBTyxFQUFFLE1BQU1aLFFBQVEsQ0FBQyxDQUFDLEdBQUdELE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYSxDQUFiLEVBQWdCUixHQUFoQixDQUFKLEVBQTBCLEdBQUdULE1BQU0sQ0FBQ2lCLEtBQVAsQ0FBYVIsR0FBRyxHQUFHLENBQW5CLENBQTdCLENBQUQsQ0FEekI7QUFFRSxpQkFBUyxFQUFDLDBCQUZaO0FBR0Usc0JBQVcsWUFIYjtBQUFBLGlEQUtFLHVEQUFDLDZDQUFEO0FBQU0sY0FBSSxFQUFDO0FBQVgsVUFMRjtBQUFBLFFBbENGLEVBeUNHQSxHQUFHLEtBQUtULE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixDQUF4QixnQkFDQztBQUNFLGVBQU8sRUFBRSxNQUFNTCxRQUFRLENBQUMsQ0FBQyxHQUFHRCxNQUFKLEVBQVk7QUFBRVcsVUFBQUEsR0FBRyxFQUFFLEVBQVA7QUFBV0gsVUFBQUEsS0FBSyxFQUFFO0FBQWxCLFNBQVosQ0FBRCxDQUR6QjtBQUVFLGlCQUFTLEVBQUMsMEJBRlo7QUFHRSxzQkFBVyxTQUhiO0FBQUEsbURBS0UsdURBQUMsNkNBQUQ7QUFBTSxjQUFJLEVBQUM7QUFBWCxVQUxGO0FBQUEsUUFERCxHQVFHLElBakROO0FBQUEsT0FBa0NDLEdBQWxDLENBREYsQ0FERCxnQkF1REM7QUFDRSxhQUFPLEVBQUUsTUFBTVIsUUFBUSxDQUFDLENBQUMsR0FBR0QsTUFBSixFQUFZO0FBQUVXLFFBQUFBLEdBQUcsRUFBRSxFQUFQO0FBQVdILFFBQUFBLEtBQUssRUFBRTtBQUFsQixPQUFaLENBQUQsQ0FEekI7QUFFRSxlQUFTLEVBQUMsMEJBRlo7QUFHRSxvQkFBVyxTQUhiO0FBQUEsaURBS0UsdURBQUMsNkNBQUQ7QUFBTSxZQUFJLEVBQUM7QUFBWCxRQUxGO0FBQUE7QUF4REosSUFERjtBQW1FRCxDQTVFRDs7QUE4RUEsaUVBQWVULGFBQWY7O0FBRUEsTUFBTWQsU0FBUyxHQUFJUyxLQUFELEtBQTBCO0FBQzFDVyxFQUFBQSxPQUFPLEVBQUUvQiw2Q0FBSTtBQUNmO0FBQ0E7QUFDQSxXQUFXb0IsS0FBSyxDQUFDd0IsT0FBTixDQUFjQyxFQUFHO0FBQzVCLEdBTDRDO0FBTTFDVCxFQUFBQSxJQUFJLEVBQUVwQyw2Q0FBSTtBQUNaO0FBQ0E7QUFDQTtBQUNBLEdBVjRDO0FBVzFDMEMsRUFBQUEsUUFBUSxFQUFFMUMsNkNBQUk7QUFDaEIsYUFBYW9CLEtBQUssQ0FBQzBCLE9BQU4sQ0FBY0MsTUFBTztBQUNsQztBQWI0QyxDQUExQixDQUFsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFFQTs7O0FBb0JPLFNBQVNJLG1CQUFULENBQTZCO0FBQUUzQyxFQUFBQSxPQUFGO0FBQVdDLEVBQUFBO0FBQVgsQ0FBN0IsRUFBa0U7QUFBQTs7QUFDdkUsUUFBTUMsTUFBTSxHQUFHSixzREFBUyxDQUFDSyxTQUFELENBQXhCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVYLGlEQUFHLENBQUM7QUFBRW9ELE1BQUFBLEtBQUssRUFBRTtBQUFULEtBQUQsQ0FBbkI7QUFBQSx3Q0FDRTtBQUFJLGVBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQSxNQURGLGdCQUdFO0FBQUssZUFBUyxFQUFFMUMsTUFBTSxDQUFDMkMsUUFBdkI7QUFBQTtBQUFBLE1BSEYsZUFPRSx1REFBQyx1REFBRDtBQUFBLDZCQUNFLHVEQUFDLG9EQUFEO0FBQWEsZUFBTyxFQUFDLG1EQUFyQjtBQUF5RSxhQUFLLEVBQUMsYUFBL0U7QUFBNkYsa0JBQVUsRUFBRSxFQUF6RztBQUFBLCtCQUNFLHVEQUFDLDhEQUFEO0FBQ0UsaUJBQU8sRUFBQyxrQ0FEVjtBQUVFLGdCQUFNLEVBQUdDLEVBQUQsSUFBUTtBQUNkO0FBQ0EsbUJBQU9BLEVBQUUsQ0FBQ0MsSUFBSCxLQUFZLE1BQVosSUFBc0JELEVBQUUsQ0FBQ0MsSUFBSCxLQUFZLDJCQUF6QztBQUNELFdBTEg7QUFNRSxpQkFBTywyQkFBRS9DLE9BQU8sQ0FBQ00sUUFBUixDQUFpQjBDLFlBQW5CLDBEQUFFLHNCQUErQkMsYUFOMUM7QUFPRSxtQkFBUyxFQUFFLElBUGI7QUFRRSxlQUFLLEVBQUUsRUFSVDtBQVNFLGtCQUFRLEVBQUdILEVBQUQ7QUFBQTs7QUFBQSxtQkFDUnBELG1GQUFvQyxDQUFDO0FBQUVPLGNBQUFBLGVBQUY7QUFBbUJELGNBQUFBO0FBQW5CLGFBQUQsRUFBK0IsY0FBL0Isb0JBQy9CQSxPQUFPLENBQUNNLFFBQVIsQ0FBaUIwQyxZQURjO0FBRWxDQyxjQUFBQSxhQUFhLEVBQUVILEVBQUUsQ0FBQ0ksR0FGZ0I7QUFHbENDLGNBQUFBLElBQUksNEJBQUVuRCxPQUFPLENBQUNNLFFBQVIsQ0FBaUIwQyxZQUFuQiwyREFBRSx1QkFBK0JHO0FBSEgsZUFENUI7QUFBQTtBQVRaO0FBREY7QUFERixNQVBGLEVBNkJHLDBCQUFBbkQsT0FBTyxDQUFDTSxRQUFSLENBQWlCMEMsWUFBakIsMEVBQStCSSxrQkFBL0IsZ0JBQ0MsdURBQUMsdURBQUQ7QUFBQSw2QkFDRSx1REFBQyxvREFBRDtBQUNFLGVBQU8sRUFBQyxtR0FEVjtBQUVFLGFBQUssRUFBQyxNQUZSO0FBR0Usa0JBQVUsRUFBRSxFQUhkO0FBQUEsK0JBS0UsdURBQUMsc0RBQUQ7QUFDRSx3QkFBYyxFQUFDLEtBRGpCO0FBRUUsZ0JBQU0sOERBQ0pwRCxPQUFPLENBQUNNLFFBQVIsQ0FBaUIwQyxZQURiLDJEQUNKLHVCQUErQkssVUFEM0IscUdBRUpyRCxPQUFPLENBQUNNLFFBQVIsQ0FBaUIwQyxZQUZiLHFGQUVKLHVCQUErQkcsSUFGM0IsMkRBRUosdUJBQXFDMUIsR0FBckMsQ0FBMEM2QixHQUFELEtBQVU7QUFBRXpCLFlBQUFBLEdBQUcsRUFBRXlCO0FBQVAsV0FBVixDQUF6QyxDQUZJLHVDQUdKLEVBTEo7QUFPRSxrQkFBUSxFQUFHdkIsQ0FBRCxJQUNSckMsbUZBQW9DLENBQUM7QUFBRU8sWUFBQUEsZUFBRjtBQUFtQkQsWUFBQUE7QUFBbkIsV0FBRCxFQUErQixjQUEvQixvQkFDL0JBLE9BQU8sQ0FBQ00sUUFBUixDQUFpQjBDLFlBRGM7QUFFbENLLFlBQUFBLFVBQVUsRUFBRXRCO0FBRnNCO0FBUnhDO0FBTEY7QUFERixNQURELGdCQXdCQyx1REFBQyx1REFBRDtBQUFBLDZCQUNFLHVEQUFDLG9EQUFEO0FBQ0UsZUFBTyxFQUFDLG1HQURWO0FBRUUsYUFBSyxFQUFDLE1BRlI7QUFHRSxrQkFBVSxFQUFFLEVBSGQ7QUFBQSwrQkFLRSx1REFBQyxrREFBRDtBQUNFLGNBQUksNEJBQUUvQixPQUFPLENBQUNNLFFBQVIsQ0FBaUIwQyxZQUFuQiwyREFBRSx1QkFBK0JHLElBRHZDO0FBRUUsZUFBSyxFQUFFLEVBRlQ7QUFHRSxrQkFBUSxFQUFHQSxJQUFELElBQ1J6RCxtRkFBb0MsQ0FBQztBQUFFTyxZQUFBQSxlQUFGO0FBQW1CRCxZQUFBQTtBQUFuQixXQUFELEVBQStCLGNBQS9CLG9CQUMvQkEsT0FBTyxDQUFDTSxRQUFSLENBQWlCMEMsWUFEYztBQUVsQ0csWUFBQUEsSUFBSSxFQUFFQTtBQUY0QjtBQUp4QztBQUxGO0FBREYsTUFyREosZUF5RUUsdURBQUMsdURBQUQ7QUFBQSw2QkFDRSx1REFBQyxvREFBRDtBQUNFLGFBQUssRUFBQyxlQURSO0FBRUUsa0JBQVUsRUFBRSxFQUZkO0FBR0UsWUFBSSxNQUhOO0FBSUUsZUFBTyxFQUFDLGlFQUpWO0FBQUEsK0JBTUUsdURBQUMscURBQUQ7QUFDRSxZQUFFLEVBQUMsYUFETDtBQUVFLGVBQUssdURBQUVuRCxPQUFPLENBQUNNLFFBQVIsQ0FBaUIwQyxZQUFuQiw0REFBRSx3QkFBK0JJLGtCQUFqQywyRUFBdUQsS0FGOUQ7QUFHRSxrQkFBUSxFQUFHM0MsS0FBRCxJQUNSZixtRkFBb0MsQ0FBQztBQUFFTyxZQUFBQSxlQUFGO0FBQW1CRCxZQUFBQTtBQUFuQixXQUFELEVBQStCLGNBQS9CLG9CQUMvQkEsT0FBTyxDQUFDTSxRQUFSLENBQWlCMEMsWUFEYztBQUVsQ0ksWUFBQUEsa0JBQWtCLEVBQUUzQyxLQUFLLENBQUNDLGFBQU4sQ0FBb0JDO0FBRk47QUFKeEM7QUFORjtBQURGLE1BekVGLGVBNkZFLHVEQUFDLHVEQUFEO0FBQUEsNkJBQ0UsdURBQUMsb0RBQUQ7QUFDRSxhQUFLLEVBQUMsdUJBRFI7QUFFRSxrQkFBVSxFQUFFLEVBRmQ7QUFHRSxZQUFJLE1BSE47QUFJRSxlQUFPLEVBQUMscUdBSlY7QUFBQSwrQkFNRSx1REFBQyw4Q0FBRDtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUscUJBQVcsRUFBQyxJQUZkO0FBR0UsZUFBSyxFQUFFLEVBSFQ7QUFJRSxrQkFBUSxFQUFHb0IsQ0FBRCxJQUNSckMsbUZBQW9DLENBQUM7QUFBRU8sWUFBQUEsZUFBRjtBQUFtQkQsWUFBQUE7QUFBbkIsV0FBRCxFQUErQixjQUEvQixvQkFDL0JBLE9BQU8sQ0FBQ00sUUFBUixDQUFpQjBDLFlBRGM7QUFFbENPLFlBQUFBLGtCQUFrQixFQUFFeEIsQ0FBQyxDQUFDckIsYUFBRixDQUFnQmdCO0FBRkYsYUFMeEM7QUFVRSxlQUFLLEVBQUUsNEJBQUExQixPQUFPLENBQUNNLFFBQVIsQ0FBaUIwQyxZQUFqQixvRkFBK0JPLGtCQUEvQixLQUFxRDtBQVY5RDtBQU5GO0FBREYsTUE3RkYsZUFtSEUsdURBQUMsdURBQUQ7QUFBQSw2QkFDRSx1REFBQyxvREFBRDtBQUNFLGFBQUssRUFBQyxxQkFEUjtBQUVFLGtCQUFVLEVBQUUsRUFGZDtBQUdFLFlBQUksTUFITjtBQUlFLGVBQU8sRUFBQyxpR0FKVjtBQUFBLCtCQU1FLHVEQUFDLDhDQUFEO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxxQkFBVyxFQUFDLElBRmQ7QUFHRSxlQUFLLEVBQUUsRUFIVDtBQUlFLGtCQUFRLEVBQUd4QixDQUFELElBQ1JyQyxtRkFBb0MsQ0FBQztBQUFFTyxZQUFBQSxlQUFGO0FBQW1CRCxZQUFBQTtBQUFuQixXQUFELEVBQStCLGNBQS9CLG9CQUMvQkEsT0FBTyxDQUFDTSxRQUFSLENBQWlCMEMsWUFEYztBQUVsQ1EsWUFBQUEsZ0JBQWdCLEVBQUV6QixDQUFDLENBQUNyQixhQUFGLENBQWdCZ0I7QUFGQSxhQUx4QztBQVVFLGVBQUssRUFBRSw0QkFBQTFCLE9BQU8sQ0FBQ00sUUFBUixDQUFpQjBDLFlBQWpCLG9GQUErQlEsZ0JBQS9CLEtBQW1EO0FBVjVEO0FBTkY7QUFERixNQW5IRixlQXlJRSx1REFBQyx1REFBRDtBQUFBLDZCQUNFLHVEQUFDLG9EQUFEO0FBQ0UsYUFBSyxFQUFDLG9CQURSO0FBRUUsa0JBQVUsRUFBRSxFQUZkO0FBR0UsWUFBSSxNQUhOO0FBSUUsZUFBTyxFQUFDLGdFQUpWO0FBQUEsK0JBTUUsdURBQUMscURBQUQ7QUFDRSxZQUFFLEVBQUMsaUJBREw7QUFFRSxlQUFLLDZCQUFFeEQsT0FBTyxDQUFDTSxRQUFSLENBQWlCMEMsWUFBbkIsNERBQUUsd0JBQStCUyxlQUZ4QztBQUdFLGtCQUFRLEVBQUdoRCxLQUFELElBQ1JmLG1GQUFvQyxDQUFDO0FBQUVPLFlBQUFBLGVBQUY7QUFBbUJELFlBQUFBO0FBQW5CLFdBQUQsRUFBK0IsY0FBL0Isb0JBQy9CQSxPQUFPLENBQUNNLFFBQVIsQ0FBaUIwQyxZQURjO0FBRWxDUyxZQUFBQSxlQUFlLEVBQUVoRCxLQUFLLENBQUNDLGFBQU4sQ0FBb0JDO0FBRkg7QUFKeEM7QUFORjtBQURGLE1BeklGLGVBNkpFLHVEQUFDLHVEQUFEO0FBQUEsNkJBQ0UsdURBQUMsb0RBQUQ7QUFDRSxhQUFLLEVBQUMsbUJBRFI7QUFFRSxrQkFBVSxFQUFFLEVBRmQ7QUFHRSxZQUFJLE1BSE47QUFJRSxlQUFPLEVBQUMsOERBSlY7QUFBQSwrQkFNRSx1REFBQyxxREFBRDtBQUNFLFlBQUUsRUFBQyxnQkFETDtBQUVFLGVBQUssNkJBQUVYLE9BQU8sQ0FBQ00sUUFBUixDQUFpQjBDLFlBQW5CLDREQUFFLHdCQUErQlUsY0FGeEM7QUFHRSxrQkFBUSxFQUFHakQsS0FBRCxJQUNSZixtRkFBb0MsQ0FBQztBQUFFTyxZQUFBQSxlQUFGO0FBQW1CRCxZQUFBQTtBQUFuQixXQUFELEVBQStCLGNBQS9CLG9CQUMvQkEsT0FBTyxDQUFDTSxRQUFSLENBQWlCMEMsWUFEYztBQUVsQ1UsWUFBQUEsY0FBYyxFQUFFakQsS0FBSyxDQUFDQyxhQUFOLENBQW9CQztBQUZGO0FBSnhDO0FBTkY7QUFERixNQTdKRjtBQUFBLElBREY7QUFtTEQ7O0FBRUQsTUFBTVIsU0FBUyxHQUFJUyxLQUFELEtBQTBCO0FBQzFDaUMsRUFBQUEsUUFBUSxFQUFFckQsNkNBQUk7QUFDaEIsc0JBQXNCb0IsS0FBSyxDQUFDd0IsT0FBTixDQUFjdUIsRUFBRztBQUN2QyxhQUFhL0MsS0FBSyxDQUFDZ0QsTUFBTixDQUFhQyxZQUFhO0FBQ3ZDO0FBSjRDLENBQTFCLENBQWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFOQTtBQUNBO0FBRUE7QUFNQTtBQUNBOzs7QUFhTyxTQUFTRSxzQkFBVCxDQUFnQztBQUFFL0QsRUFBQUEsT0FBRjtBQUFXQyxFQUFBQTtBQUFYLENBQWhDLEVBQXFFO0FBQUE7O0FBQzFFLFFBQU1DLE1BQU0sR0FBR0osc0RBQVMsQ0FBQ0ssU0FBRCxDQUF4QjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFWCxpREFBRyxDQUFDO0FBQUVvRCxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUFELENBQW5CO0FBQUEsd0NBQ0U7QUFBSSxlQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUEsTUFERixnQkFHRTtBQUFLLGVBQVMsRUFBRTFDLE1BQU0sQ0FBQzJDLFFBQXZCO0FBQUE7QUFBQSxNQUhGLGVBT0Usd0RBQUMsdURBQUQ7QUFBZ0IsZUFBUyxFQUFFM0MsTUFBTSxDQUFDRyxHQUFsQztBQUFBLDhCQUNFLHVEQUFDLG9EQUFEO0FBQWEsZUFBTyxFQUFDLG1EQUFyQjtBQUF5RSxhQUFLLEVBQUMsYUFBL0U7QUFBNkYsa0JBQVUsRUFBRSxFQUF6RztBQUFBLCtCQUNFLHVEQUFDLDhEQUFEO0FBQ0UsaUJBQU8sRUFBQyxxQ0FEVjtBQUVFLGtCQUFRLEVBQUMsWUFGWDtBQUdFLGlCQUFPLDJCQUFFTCxPQUFPLENBQUNNLFFBQVIsQ0FBaUIwRCxlQUFuQiwwREFBRSxzQkFBa0NmLGFBSDdDO0FBSUUsbUJBQVMsRUFBRSxJQUpiO0FBS0UsZUFBSyxFQUFFLEVBTFQ7QUFNRSxrQkFBUSxFQUFHSCxFQUFELElBQ1JwRCxtRkFBb0MsQ0FBQztBQUFFTyxZQUFBQSxlQUFGO0FBQW1CRCxZQUFBQTtBQUFuQixXQUFELEVBQStCLGlCQUEvQixvQkFDL0JBLE9BQU8sQ0FBQ00sUUFBUixDQUFpQjBELGVBRGM7QUFFbENmLFlBQUFBLGFBQWEsRUFBRUgsRUFBRSxDQUFDSTtBQUZnQjtBQVB4QztBQURGLFFBREYsRUFnQkcsMEJBQUFsRCxPQUFPLENBQUNNLFFBQVIsQ0FBaUIwRCxlQUFqQiwwRUFBa0NmLGFBQWxDLGdCQUNDLHVEQUFDLCtDQUFEO0FBQ0UsWUFBSSxFQUFDLFFBRFA7QUFFRSxlQUFPLEVBQUMsV0FGVjtBQUdFLFlBQUksRUFBQyxJQUhQO0FBSUUsWUFBSSxFQUFDLE1BSlA7QUFLRSxlQUFPLEVBQUUsTUFBTTtBQUNidkQsVUFBQUEsbUZBQW9DLENBQUM7QUFBRU8sWUFBQUEsZUFBRjtBQUFtQkQsWUFBQUE7QUFBbkIsV0FBRCxFQUErQixpQkFBL0Isb0JBQy9CQSxPQUFPLENBQUNNLFFBQVIsQ0FBaUIwRCxlQURjO0FBRWxDZixZQUFBQSxhQUFhLEVBQUVnQjtBQUZtQixhQUFwQztBQUlELFNBVkg7QUFBQTtBQUFBLFFBREQsR0FlRyxJQS9CTjtBQUFBLE1BUEYsZUF5Q0UsdURBQUMsdURBQUQ7QUFBQSw2QkFDRSx1REFBQyxvREFBRDtBQUNFLGFBQUssRUFBQyxPQURSO0FBRUUsa0JBQVUsRUFBRSxFQUZkO0FBR0UsZUFBTyxFQUFDLDRFQUhWO0FBSUUsWUFBSSxNQUpOO0FBQUEsK0JBTUUsdURBQUMsOENBQUQ7QUFDRSxlQUFLLEVBQUMsT0FEUjtBQUVFLGNBQUksRUFBQyxNQUZQO0FBR0UseUJBQWUsTUFIakI7QUFJRSxlQUFLLDRCQUFFakUsT0FBTyxDQUFDTSxRQUFSLENBQWlCMEQsZUFBbkIsMkRBQUUsdUJBQWtDRSxLQUozQztBQUtFLGtCQUFRLEVBQUdwQyxDQUFELElBQU87QUFDZnBDLFlBQUFBLG1GQUFvQyxDQUFDO0FBQUVPLGNBQUFBLGVBQUY7QUFBbUJELGNBQUFBO0FBQW5CLGFBQUQsRUFBK0IsaUJBQS9CLG9CQUMvQkEsT0FBTyxDQUFDTSxRQUFSLENBQWlCMEQsZUFEYztBQUVsQ0UsY0FBQUEsS0FBSyxFQUFFcEMsQ0FBQyxDQUFDcEIsYUFBRixDQUFnQmdCO0FBRlcsZUFBcEM7QUFJRDtBQVZIO0FBTkY7QUFERixNQXpDRjtBQUFBLElBREY7QUFpRUQ7O0FBRUQsTUFBTXZCLFNBQVMsR0FBSVMsS0FBRCxLQUEwQjtBQUMxQ2lDLEVBQUFBLFFBQVEsRUFBRXJELDZDQUFJO0FBQ2hCLHNCQUFzQm9CLEtBQUssQ0FBQ3dCLE9BQU4sQ0FBY3VCLEVBQUc7QUFDdkMsYUFBYS9DLEtBQUssQ0FBQ2dELE1BQU4sQ0FBYUMsWUFBYTtBQUN2QyxHQUo0QztBQUsxQ3hELEVBQUFBLEdBQUcsRUFBRWIsNkNBQUk7QUFDWDtBQUNBO0FBQ0E7QUFSNEMsQ0FBMUIsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTK0UseUJBQVQsQ0FBbUNDLE1BQW5DLEVBQTRFO0FBQ2pGQSxFQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVUQsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPQyxDQUFDLENBQUMsQ0FBRCxDQUE5QjtBQUNBLFFBQU1DLFlBQVksR0FBR0osTUFBTSxDQUFDSyxNQUFQLENBQWMsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEtBQWdCO0FBQ2pELFFBQUksQ0FBQ0QsR0FBRyxDQUFDdEQsTUFBVCxFQUFpQjtBQUNmLGFBQU8sQ0FBQ3VELEtBQUQsQ0FBUDtBQUNEOztBQUNELFVBQU1DLElBQUksR0FBR0YsR0FBRyxDQUFDM0MsS0FBSixDQUFVLENBQUMsQ0FBWCxFQUFjLENBQWQsQ0FBYjtBQUNBLFVBQU0sQ0FBQzhDLFNBQUQsRUFBWUMsT0FBWixJQUF1QkYsSUFBN0I7QUFDQSxVQUFNLENBQUNHLEtBQUQsRUFBUUMsR0FBUixJQUFlTCxLQUFyQjs7QUFDQSxRQUFJSyxHQUFHLEdBQUdGLE9BQVYsRUFBbUI7QUFDakI7QUFDQSxhQUFPSixHQUFQO0FBQ0Q7O0FBRUQsUUFBSUssS0FBSyxHQUFHRCxPQUFaLEVBQXFCO0FBQ25CO0FBQ0EsYUFBTyxDQUFDLEdBQUdKLEdBQUosRUFBU0MsS0FBVCxDQUFQO0FBQ0QsS0FmZ0QsQ0FpQmpEOzs7QUFDQSxXQUFPLENBQUMsR0FBR0QsR0FBRyxDQUFDM0MsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFDLENBQWQsQ0FBSixFQUFzQixDQUFDOEMsU0FBRCxFQUFZRyxHQUFaLENBQXRCLENBQVA7QUFDRCxHQW5Cb0IsRUFtQmxCLEVBbkJrQixDQUFyQjtBQXFCQSxTQUFPUixZQUFZLENBQUNDLE1BQWIsQ0FBb0IsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEtBQWdCO0FBQ3pDLFdBQU9ELEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUFwQixDQUFWO0FBQ0QsR0FGTSxFQUVKLENBRkksQ0FBUDtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTTSxXQUFULENBQXdCQyxPQUF4QixFQUVMO0FBQ0EsUUFBTUMsT0FBMkQsR0FBRyxFQUFwRTtBQUVBLE1BQUlDLElBQUo7O0FBQ0EsT0FBSyxJQUFJQyxLQUFLLEdBQUcsQ0FBakIsRUFBcUJELElBQUksR0FBR0YsT0FBTyxDQUFDRyxLQUFELENBQWYsRUFBeUIsQ0FBQyxDQUFDRCxJQUEvQyxFQUFxREMsS0FBSyxFQUExRCxFQUE4RDtBQUM1RCxRQUFJLENBQUNGLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDcEUsRUFBTixDQUFaLEVBQXVCO0FBQ3JCbUUsTUFBQUEsT0FBTyxDQUFDQyxJQUFJLENBQUNwRSxFQUFOLENBQVAsR0FBbUI7QUFDakJvRSxRQUFBQSxJQUFJLEVBQUVBLElBQUksQ0FBQ0EsSUFETTtBQUVqQkUsUUFBQUEsUUFBUSxFQUFFO0FBRk8sT0FBbkI7QUFJRCxLQUxELE1BS087QUFDTEgsTUFBQUEsT0FBTyxDQUFDQyxJQUFJLENBQUNwRSxFQUFOLENBQVAsQ0FBaUJvRSxJQUFqQixHQUF3QkEsSUFBSSxDQUFDQSxJQUE3QjtBQUNEOztBQUVELFNBQUssTUFBTUcsUUFBWCxJQUF1QkgsSUFBSSxDQUFDSSxTQUE1QixFQUF1QztBQUNyQyxVQUFJRCxRQUFKLEVBQWM7QUFDWixZQUFJLENBQUNKLE9BQU8sQ0FBQ0ksUUFBRCxDQUFaLEVBQXdCO0FBQ3RCSixVQUFBQSxPQUFPLENBQUNJLFFBQUQsQ0FBUCxHQUFvQjtBQUNsQkgsWUFBQUEsSUFBSSxFQUFFdkIsU0FEWTtBQUVsQnlCLFlBQUFBLFFBQVEsRUFBRSxDQUFDRixJQUFJLENBQUNwRSxFQUFOO0FBRlEsV0FBcEI7QUFJRCxTQUxELE1BS087QUFDTG1FLFVBQUFBLE9BQU8sQ0FBQ0ksUUFBRCxDQUFQLENBQWtCRCxRQUFsQixDQUEyQkcsSUFBM0IsQ0FBZ0NMLElBQUksQ0FBQ3BFLEVBQXJDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7O0FBQ0QsU0FBT21FLE9BQVA7QUFDRDtBQUVNLFNBQVNPLFFBQVQsQ0FBa0JDLFFBQWxCLEVBQW9DQyxhQUFwQyxFQUEyREMsWUFBM0QsRUFBaUY7QUFDdEYsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUcsR0FBRUMsc0JBQXNCLENBQUNKLFFBQUQsQ0FBVyxPQUFNSSxzQkFBc0IsQ0FBRUosUUFBUSxHQUFHQyxhQUFaLEdBQTZCLEdBQTlCLENBQW1DLElBRHBHO0FBRUxJLElBQUFBLFNBQVMsRUFBRyxHQUFFRCxzQkFBc0IsQ0FBQ0YsWUFBRCxDQUFlLE9BQU1FLHNCQUFzQixDQUM1RUYsWUFBWSxHQUFHRixRQUFoQixHQUE0QixHQURpRCxDQUU3RTtBQUpHLEdBQVA7QUFNRDs7QUFFRCxTQUFTSSxzQkFBVCxDQUFnQ0UsQ0FBaEMsRUFBMkM7QUFDekMsU0FBT0MsVUFBVSxDQUFDRCxDQUFDLENBQUNFLE9BQUYsQ0FBVSxDQUFWLENBQUQsQ0FBakI7QUFDRDtBQUVEO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0MsVUFBVCxHQUFzQjtBQUMzQixRQUFNQyxVQUFVLEdBQUcsSUFBSXJDLDJEQUFKLENBQXFCO0FBQ3RDc0MsSUFBQUEsTUFBTSxFQUFFLENBQ047QUFBRUMsTUFBQUEsSUFBSSxFQUFFckMsMEVBQVI7QUFBbUJ2QixNQUFBQSxJQUFJLEVBQUVvQiwyREFBZ0J5QztBQUF6QyxLQURNLEVBRU47QUFBRUQsTUFBQUEsSUFBSSxFQUFFckMsNkVBQVI7QUFBc0J2QixNQUFBQSxJQUFJLEVBQUVvQiwyREFBZ0J5QztBQUE1QyxLQUZNLEVBR047QUFBRUQsTUFBQUEsSUFBSSxFQUFFckMsZ0ZBQVI7QUFBeUJ2QixNQUFBQSxJQUFJLEVBQUVvQiwyREFBZ0J5QztBQUEvQyxLQUhNLEVBSU47QUFBRUQsTUFBQUEsSUFBSSxFQUFFckMsZ0ZBQVI7QUFBeUJ2QixNQUFBQSxJQUFJLEVBQUVvQiwyREFBL0I7QUFBaUQ2QyxNQUFBQSxNQUFNLEVBQUU7QUFBRUMsUUFBQUEsV0FBVyxFQUFFO0FBQWY7QUFBekQsS0FKTSxFQUtOO0FBQUVOLE1BQUFBLElBQUksRUFBRXJDLHFGQUFSO0FBQThCdkIsTUFBQUEsSUFBSSxFQUFFb0IsMkRBQXBDO0FBQXNENkMsTUFBQUEsTUFBTSxFQUFFO0FBQUVDLFFBQUFBLFdBQVcsRUFBRTtBQUFmO0FBQTlELEtBTE0sRUFNTjtBQUNFTixNQUFBQSxJQUFJLEVBQUVyQyw2RUFEUjtBQUVFdkIsTUFBQUEsSUFBSSxFQUFFb0IsMkRBRlI7QUFHRTZDLE1BQUFBLE1BQU0sRUFBRTtBQUFFRyxRQUFBQSxLQUFLLEVBQUU7QUFBRUUsVUFBQUEsSUFBSSxFQUFFO0FBQVIsU0FBVDtBQUF3Q0osUUFBQUEsV0FBVyxFQUFFO0FBQXJEO0FBSFYsS0FOTSxDQUQ4QjtBQWF0Q0ssSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLDBCQUEwQixFQUFFO0FBRHhCO0FBYmdDLEdBQXJCLENBQW5CO0FBa0JBLFFBQU1DLFVBQVUsR0FBRyxJQUFJcEQsMkRBQUosQ0FBcUI7QUFDdENzQyxJQUFBQSxNQUFNLEVBQUUsQ0FDTjtBQUFFQyxNQUFBQSxJQUFJLEVBQUVyQywwRUFBUjtBQUFtQnZCLE1BQUFBLElBQUksRUFBRW9CLDJEQUFnQnlDO0FBQXpDLEtBRE0sRUFFTjtBQUFFRCxNQUFBQSxJQUFJLEVBQUVyQyw4RUFBUjtBQUF1QnZCLE1BQUFBLElBQUksRUFBRW9CLDJEQUFnQnlDO0FBQTdDLEtBRk0sRUFHTjtBQUFFRCxNQUFBQSxJQUFJLEVBQUVyQyw4RUFBUjtBQUF1QnZCLE1BQUFBLElBQUksRUFBRW9CLDJEQUFnQnlDO0FBQTdDLEtBSE0sQ0FEOEI7QUFNdENVLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSwwQkFBMEIsRUFBRTtBQUR4QjtBQU5nQyxHQUFyQixDQUFuQjtBQVdBLFNBQU8sQ0FBQ2QsVUFBRCxFQUFhZSxVQUFiLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySEQ7QUFDQTtBQUNBO0FBR0E7OztBQUlBLE1BQU1LLG1CQUFtQixHQUFHLHlCQUE1QjtBQU9PLFNBQVNDLGVBQVQsQ0FBeUI7QUFBRTVELEVBQUFBLEtBQUY7QUFBUy9DLEVBQUFBO0FBQVQsQ0FBekIsRUFBcUQ7QUFDMUQsUUFBTSxDQUFDNEcsbUJBQUQsRUFBc0JDLHNCQUF0QixJQUFnREwsK0NBQVEsQ0FBQyxLQUFELENBQTlEO0FBQ0EsUUFBTXpILE1BQU0sR0FBR0osc0RBQVMsQ0FBQ0ssU0FBRCxDQUF4QjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0UsdURBQUMsdURBQUQ7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVELE1BQU0sQ0FBQytILHdCQUF2QjtBQUFpRCxlQUFPLEVBQUUsTUFBTUQsc0JBQXNCLENBQUMsQ0FBQ0QsbUJBQUYsQ0FBdEY7QUFBQSwrQkFDRSx3REFBQyxvREFBRDtBQUFhLFlBQUUsRUFBQyxLQUFoQjtBQUFBLHlDQUNtQixHQURuQixlQUVFLHVEQUFDLDZDQUFEO0FBQU0scUJBQVMsRUFBRUEsbUJBQW1CLEdBQUc3SCxNQUFNLENBQUNnSSxPQUFWLEdBQW9CaEksTUFBTSxDQUFDaUksU0FBL0Q7QUFBMEUsZ0JBQUksRUFBQztBQUEvRSxZQUZGO0FBQUE7QUFERjtBQURGLE1BREYsZUFTRSx1REFBQyw4REFBRDtBQUNFLFFBQUUsRUFBRUosbUJBRE47QUFFRSxrQkFBWSxFQUFFLElBRmhCO0FBR0UsbUJBQWEsRUFBRSxJQUhqQjtBQUlFLGFBQU8sRUFBRSxHQUpYO0FBS0UsZ0JBQVUsRUFBRTdILE1BTGQ7QUFBQSw2QkFPRTtBQUFBLGdDQUNFLHVEQUFDLHVEQUFEO0FBQUEsaUNBQ0UsdURBQUMsb0RBQUQ7QUFBYSxpQkFBSyxFQUFDLGNBQW5CO0FBQWtDLHNCQUFVLEVBQUUsRUFBOUM7QUFBa0QsZ0JBQUksTUFBdEQ7QUFBQSxtQ0FDRSx1REFBQyw4Q0FBRDtBQUNFLGdCQUFFLEVBQUMsYUFETDtBQUVFLGtCQUFJLEVBQUMsYUFGUDtBQUdFLG1CQUFLLEVBQUVnRSxLQUFLLENBQUNrRSxXQUFOLElBQXFCLEVBSDlCO0FBSUUseUJBQVcsRUFBRVAsbUJBSmY7QUFLRSxzQkFBUSxFQUFHOUYsQ0FBRCxJQUNSWixRQUFRLG1CQUNIK0MsS0FERztBQUVOa0UsZ0JBQUFBLFdBQVcsRUFBRXJHLENBQUMsQ0FBQ3JCLGFBQUYsQ0FBZ0JnQjtBQUZ2QjtBQU5aO0FBREY7QUFERixVQURGLGVBaUJFLHVEQUFDLHVEQUFEO0FBQUEsaUNBQ0UsdURBQUMsb0RBQUQ7QUFBYSxpQkFBSyxFQUFDLGNBQW5CO0FBQWtDLHNCQUFVLEVBQUUsRUFBOUM7QUFBa0QsZ0JBQUksTUFBdEQ7QUFBQSxtQ0FDRSx1REFBQyw4Q0FBRDtBQUNFLGdCQUFFLEVBQUMsYUFETDtBQUVFLGtCQUFJLEVBQUMsYUFGUDtBQUdFLG1CQUFLLEVBQUV3QyxLQUFLLENBQUNtRSxXQUFOLElBQXFCLEVBSDlCO0FBSUUseUJBQVcsRUFBRVIsbUJBSmY7QUFLRSxzQkFBUSxFQUFHOUYsQ0FBRCxJQUNSWixRQUFRLG1CQUNIK0MsS0FERztBQUVObUUsZ0JBQUFBLFdBQVcsRUFBRXRHLENBQUMsQ0FBQ3JCLGFBQUYsQ0FBZ0JnQjtBQUZ2QjtBQU5aO0FBREY7QUFERixVQWpCRixlQWlDRSx1REFBQyx1REFBRDtBQUFBLGlDQUNFLHVEQUFDLG9EQUFEO0FBQWEsaUJBQUssRUFBQyxPQUFuQjtBQUEyQixzQkFBVSxFQUFFLEVBQXZDO0FBQTJDLGdCQUFJLE1BQS9DO0FBQWdELG1CQUFPLEVBQUMscUNBQXhEO0FBQUEsbUNBQ0UsdURBQUMsOENBQUQ7QUFDRSxnQkFBRSxFQUFDLE9BREw7QUFFRSxrQkFBSSxFQUFDLE9BRlA7QUFHRSxtQkFBSyxFQUFFd0MsS0FBSyxDQUFDb0UsS0FBTixJQUFlLEVBSHhCO0FBSUUsa0JBQUksRUFBQyxRQUpQO0FBS0Usc0JBQVEsRUFBR3ZHLENBQUQsSUFDUlosUUFBUSxtQkFDSCtDLEtBREc7QUFFTm9FLGdCQUFBQSxLQUFLLEVBQUV2RyxDQUFDLENBQUNyQixhQUFGLENBQWdCZ0IsS0FBaEIsR0FBd0I2RyxRQUFRLENBQUN4RyxDQUFDLENBQUNyQixhQUFGLENBQWdCZ0IsS0FBakIsRUFBd0IsRUFBeEIsQ0FBaEMsR0FBOER1QztBQUYvRDtBQU5aO0FBREY7QUFERixVQWpDRjtBQUFBO0FBUEYsTUFURjtBQUFBLElBREY7QUFzRUQ7O0FBRUQsU0FBUzlELFNBQVQsQ0FBbUJTLEtBQW5CLEVBQXdDO0FBQ3RDLFNBQU87QUFDTHFILElBQUFBLHdCQUF3QixFQUFFekksNkNBQUk7QUFDbEMsa0JBQWtCb0IsS0FBSyxDQUFDd0IsT0FBTixDQUFjQyxFQUFHLElBQUd6QixLQUFLLENBQUN3QixPQUFOLENBQWNDLEVBQUc7QUFDdkQ7QUFDQTtBQUNBLEtBTFM7QUFNTG1HLElBQUFBLEtBQUssRUFBRWhKLDZDQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsS0FWUztBQVdMaUosSUFBQUEsV0FBVyxFQUFFakosNkNBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhCUztBQWlCTGtKLElBQUFBLElBQUksRUFBRWxKLDZDQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsS0FyQlM7QUFzQkxtSixJQUFBQSxVQUFVLEVBQUVuSiw2Q0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBM0JTO0FBNEJMMEksSUFBQUEsT0FBTyxFQUFFMUksNkNBQUk7QUFDakI7QUFDQTtBQUNBLEtBL0JTO0FBZ0NMMkksSUFBQUEsU0FBUyxFQUFFM0ksNkNBQUk7QUFDbkI7QUFDQTtBQUNBO0FBbkNTLEdBQVA7QUFxQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSUQ7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSU8sTUFBTXFKLFlBQTZCLEdBQUcsQ0FBQztBQUFFN0ksRUFBQUEsT0FBRjtBQUFXQyxFQUFBQTtBQUFYLENBQUQsS0FBa0M7QUFDN0Usc0JBQ0U7QUFBQSw0QkFDRSx1REFBQywrREFBRDtBQUNFLGdCQUFVLEVBQUMsd0JBRGI7QUFFRSxzQkFBZ0IsRUFBRUQsT0FGcEI7QUFHRSx1QkFBaUIsRUFBRSxLQUhyQjtBQUlFLGNBQVEsRUFBRUM7QUFKWixNQURGLGVBUUU7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDZCQUNFLHVEQUFDLG9HQUFEO0FBQXFCLGVBQU8sRUFBRUQsT0FBOUI7QUFBdUMsdUJBQWUsRUFBRUM7QUFBeEQ7QUFERixNQVJGLEVBWUcrRyxrRkFBQSxnQkFDQztBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsNkJBQ0UsdURBQUMsNkdBQUQ7QUFBd0IsZUFBTyxFQUFFaEgsT0FBakM7QUFBMEMsdUJBQWUsRUFBRUM7QUFBM0Q7QUFERixNQURELEdBSUcsSUFoQk4sZUFrQkU7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLDZCQUNFLHVEQUFDLG9GQUFEO0FBQW1CLGVBQU8sRUFBRUQsT0FBNUI7QUFBcUMsdUJBQWUsRUFBRUM7QUFBdEQ7QUFERixNQWxCRjtBQUFBLElBREY7QUF3QkQsQ0F6Qk07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWFA7QUFDQTtBQUdBO0FBS0E7Ozs7QUFJTyxTQUFTb0osV0FBVCxDQUFxQjtBQUFFQyxFQUFBQSxVQUFGO0FBQWNwRixFQUFBQSxLQUFkO0FBQXFCL0MsRUFBQUEsUUFBckI7QUFBK0JvSSxFQUFBQTtBQUEvQixDQUFyQixFQUF5RTtBQUFBOztBQUM5RSxRQUFNM0ksS0FBSyxHQUFHdUksc0RBQVMsRUFBdkI7O0FBRUEsUUFBTUssYUFBYSxHQUFJOUgsS0FBRCxJQUFtQjtBQUN2QyxVQUFNK0gsU0FBc0IscUJBQVF2RixLQUFSO0FBQWVBLE1BQUFBLEtBQUssRUFBRXhDO0FBQXRCLE1BQTVCO0FBQ0FQLElBQUFBLFFBQVEsQ0FBQ3NJLFNBQUQsQ0FBUjtBQUNELEdBSEQ7O0FBS0EsUUFBTUMsZ0JBQWdCLEdBQUcsTUFBTTtBQUM3QixZQUFReEYsS0FBSyxDQUFDeUYsU0FBZDtBQUNFLFdBQUssUUFBTDtBQUNFLDBEQUFPLHVEQUFDLG1EQUFEO0FBQVksb0JBQVUsRUFBRUwsVUFBeEI7QUFBb0MsZUFBSyxFQUFFcEYsS0FBM0M7QUFBa0Qsa0JBQVEsRUFBRS9DO0FBQTVELFVBQVA7O0FBQ0YsV0FBSyxRQUFMO0FBQ0UsNEJBQ0U7QUFBSyxtQkFBUyxFQUFFM0IsaURBQUcsQ0FBQztBQUFFb0ssWUFBQUEsT0FBTyxFQUFFaEosS0FBSyxDQUFDd0IsT0FBTixDQUFjLENBQWQ7QUFBWCxXQUFELENBQW5CO0FBQUEsaUNBQ0UsdURBQUMscURBQUQ7QUFDRSxtQkFBTyxFQUFFO0FBQUV5SCxjQUFBQSxRQUFRLEVBQUU7QUFBWixhQURYO0FBRUUsa0JBQU0sRUFBR0MsTUFBRCxJQUFZO0FBQ2xCUixjQUFBQSxVQUFVLENBQUNTLFlBQVgsR0FBMEJELE1BQTFCO0FBQ0FQLGNBQUFBLFVBQVU7QUFDWDtBQUxIO0FBREYsVUFERjs7QUFXRjtBQUNFLDRCQUNFLHVEQUFDLHVEQUFEO0FBQUEsaUNBQ0UsdURBQUMsb0RBQUQ7QUFBYSxpQkFBSyxFQUFDLFVBQW5CO0FBQThCLHNCQUFVLEVBQUUsRUFBMUM7QUFBOEMsZ0JBQUksTUFBbEQ7QUFBQSxtQ0FDRSx1REFBQyxtREFBRDtBQUNFLG1CQUFLLEVBQUVyRixLQUFLLENBQUNBLEtBRGY7QUFFRSxzQkFBUSxFQUFFc0YsYUFGWjtBQUdFLHdCQUFVLEVBQUVELFVBSGQ7QUFJRSxvQkFBTSxFQUFFLE1BQU0sQ0FBRSxDQUpsQjtBQUtFLHlCQUFXLEVBQUUseUNBTGY7QUFNRSwwQkFBWSxFQUFDO0FBTmY7QUFERjtBQURGLFVBREY7QUFoQko7QUErQkQsR0FoQ0Q7O0FBa0NBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUUvSixpREFBRyxDQUFDO0FBQUVvRCxRQUFBQSxLQUFLLEVBQUU7QUFBVCxPQUFELENBQW5CO0FBQUEsOEJBQ0UsdURBQUMsdURBQUQ7QUFBQSwrQkFDRSx1REFBQyxvREFBRDtBQUFhLGVBQUssRUFBQyxZQUFuQjtBQUFBLGlDQUNFLHVEQUFDLHlEQUFEO0FBQ0UsbUJBQU8sRUFBRSxDQUNQO0FBQUVsQixjQUFBQSxLQUFLLEVBQUUsUUFBVDtBQUFtQnNJLGNBQUFBLEtBQUssRUFBRTtBQUExQixhQURPLEVBRVA7QUFBRXRJLGNBQUFBLEtBQUssRUFBRXVDLFNBQVQ7QUFBb0IrRixjQUFBQSxLQUFLLEVBQUU7QUFBM0IsYUFGTyxFQUdQO0FBQUV0SSxjQUFBQSxLQUFLLEVBQUUsUUFBVDtBQUFtQnNJLGNBQUFBLEtBQUssRUFBRTtBQUExQixhQUhPLENBRFg7QUFNRSxpQkFBSyxFQUFFOUYsS0FBSyxDQUFDeUYsU0FOZjtBQU9FLG9CQUFRLEVBQUc1SCxDQUFELElBQ1JaLFFBQVEsbUJBQ0grQyxLQURHO0FBRU55RixjQUFBQSxTQUFTLEVBQUU1SDtBQUZMLGVBUlo7QUFhRSxnQkFBSSxFQUFDO0FBYlA7QUFERjtBQURGLFFBREYsRUFvQkcySCxnQkFBZ0IsRUFwQm5CO0FBQUE7QUFERixJQURGO0FBMEJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZEO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTs7O0FBUU8sTUFBTWdCLGtCQUFrQixHQUFHLEtBQTNCO0FBQ1AsTUFBTUMsbUJBQTRDLEdBQUc7QUFDbkRYLEVBQUFBLEtBQUssRUFBRVUsa0JBRDRDO0FBRW5EaEosRUFBQUEsS0FBSyxFQUFFdUM7QUFGNEMsQ0FBckQ7QUFLTyxTQUFTbUYsVUFBVCxDQUFvQjtBQUFFRSxFQUFBQSxVQUFGO0FBQWNwRixFQUFBQSxLQUFkO0FBQXFCL0MsRUFBQUE7QUFBckIsQ0FBcEIsRUFBNEQ7QUFDakUsUUFBTSxDQUFDeUosY0FBRCxFQUFpQkMsaUJBQWpCLElBQXNDbEQsK0NBQVEsRUFBcEQ7QUFDQSxRQUFNLENBQUNtRCxnQkFBRCxFQUFtQkMsbUJBQW5CLElBQTBDcEQsK0NBQVEsRUFBeEQ7QUFDQSxRQUFNLENBQUNxRCxTQUFELEVBQVlDLFlBQVosSUFBNEJ0RCwrQ0FBUSxDQUd2QztBQUNEdUQsSUFBQUEsUUFBUSxFQUFFLEtBRFQ7QUFFREMsSUFBQUEsVUFBVSxFQUFFO0FBRlgsR0FIdUMsQ0FBMUM7QUFRQSxRQUFNQyxZQUFZLEdBQUdsQixrREFBVyxDQUM5QixPQUFPbUIsR0FBUCxFQUFvQkMsWUFBcEIsRUFBMENwSCxLQUFLLEdBQUcsRUFBbEQsS0FBa0c7QUFDaEcrRyxJQUFBQSxZQUFZLENBQUVNLFNBQUQsc0JBQXFCQSxTQUFyQjtBQUFnQyxPQUFDRCxZQUFELEdBQWdCO0FBQWhELE1BQUQsQ0FBWjs7QUFFQSxRQUFJO0FBQ0YsWUFBTXBLLE1BQXVCLEdBQUcsTUFBTW9JLFVBQVUsQ0FBQ2tDLGVBQVgsQ0FBMkJILEdBQTNCLENBQXRDOztBQUNBLFVBQUksQ0FBQ25LLE1BQUwsRUFBYTtBQUNYLGVBQU8sQ0FBQztBQUFFOEksVUFBQUEsS0FBSyxFQUFHLE1BQUtzQixZQUFhLFFBQTVCO0FBQXFDNUosVUFBQUEsS0FBSyxFQUFHLE1BQUs0SixZQUFhO0FBQS9ELFNBQUQsQ0FBUDtBQUNEOztBQUVELFlBQU1WLGNBQWlDLEdBQUcxSixNQUFNLENBQUN1RCxJQUFQLEdBQWNoRCxHQUFkLENBQW1CZ0ssT0FBRCxLQUFjO0FBQ3hFekIsUUFBQUEsS0FBSyxFQUFFeUIsT0FEaUU7QUFFeEUvSixRQUFBQSxLQUFLLEVBQUUrSjtBQUZpRSxPQUFkLENBQWxCLENBQTFDO0FBS0EsWUFBTUMsZUFBZSxHQUFHZCxjQUFjLENBQUNlLE1BQWYsQ0FBdUJDLElBQUQsSUFDNUNBLElBQUksQ0FBQ2xLLEtBQUwsR0FBYTJJLHVEQUFVLENBQUN1QixJQUFJLENBQUNsSyxLQUFOLEVBQWF3QyxLQUFiLENBQVYsQ0FBOEIySCxLQUEzQyxHQUFtRCxLQUQ3QixDQUF4QjtBQUdBLGFBQU9ILGVBQVA7QUFDRCxLQWZELENBZUUsT0FBT0ksS0FBUCxFQUFjO0FBQ2R0QixNQUFBQSx5REFBUSxDQUFDRiwyREFBUyxDQUFDQyxzRkFBdUIsQ0FBQyxPQUFELEVBQVV1QixLQUFWLENBQXhCLENBQVYsQ0FBUjtBQUNBLGFBQU8sRUFBUDtBQUNELEtBbEJELFNBa0JVO0FBQ1JiLE1BQUFBLFlBQVksQ0FBRU0sU0FBRCxzQkFBcUJBLFNBQXJCO0FBQWdDLFNBQUNELFlBQUQsR0FBZ0I7QUFBaEQsUUFBRCxDQUFaO0FBQ0Q7QUFDRixHQXpCNkIsRUEwQjlCLENBQUNoQyxVQUFELENBMUI4QixDQUFoQzs7QUE2QkEsUUFBTXlDLGlCQUFpQixHQUFJQyxTQUFELElBQXVCO0FBQy9DLFdBQU9aLFlBQVksQ0FBQyxlQUFELEVBQWtCLFVBQWxCLEVBQThCWSxTQUE5QixDQUFuQjtBQUNELEdBRkQ7O0FBSUEsUUFBTUMsbUJBQW1CLEdBQUlELFNBQUQsSUFBdUI7QUFDakQsV0FBT1osWUFBWSxDQUFFLGlCQUFnQmMsa0JBQWtCLENBQUNoSSxLQUFLLENBQUN1SCxPQUFQLENBQWlCLGFBQXJELEVBQW1FLFlBQW5FLEVBQWlGTyxTQUFqRixDQUFuQjtBQUNELEdBRkQ7O0FBSUEsUUFBTUcsYUFBYSxHQUFHbEMsZ0RBQVEsQ0FBQzhCLGlCQUFELEVBQW9CLEdBQXBCLEVBQXlCO0FBQUVLLElBQUFBLE9BQU8sRUFBRSxJQUFYO0FBQWlCQyxJQUFBQSxRQUFRLEVBQUU7QUFBM0IsR0FBekIsQ0FBOUI7QUFDQSxRQUFNQyxlQUFlLEdBQUdyQyxnREFBUSxDQUFDZ0MsbUJBQUQsRUFBc0IsR0FBdEIsRUFBMkI7QUFBRUcsSUFBQUEsT0FBTyxFQUFFLElBQVg7QUFBaUJDLElBQUFBLFFBQVEsRUFBRTtBQUEzQixHQUEzQixDQUFoQztBQUVBbEMsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTW9DLFdBQVcsR0FBRyxZQUFZO0FBQzlCLFlBQU1yQixRQUFRLEdBQUcsTUFBTUUsWUFBWSxDQUFDLGVBQUQsRUFBa0IsVUFBbEIsQ0FBbkM7QUFDQVAsTUFBQUEsaUJBQWlCLENBQUNLLFFBQUQsQ0FBakI7QUFDRCxLQUhEOztBQUlBcUIsSUFBQUEsV0FBVztBQUNaLEdBTlEsRUFNTixDQUFDakQsVUFBRCxFQUFhOEIsWUFBYixDQU5NLENBQVQ7QUFRQWpCLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1xQyxhQUFhLEdBQUcsWUFBWTtBQUNoQyxZQUFNckIsVUFBVSxHQUFHLE1BQU1DLFlBQVksQ0FDbEMsaUJBQWdCYyxrQkFBa0IsQ0FBQ2hJLEtBQUssQ0FBQ3VILE9BQVAsQ0FBaUIsYUFEakIsRUFFbkMsWUFGbUMsQ0FBckM7QUFJQVYsTUFBQUEsbUJBQW1CLENBQUMsQ0FBQ0osbUJBQUQsRUFBc0IsR0FBR1EsVUFBekIsQ0FBRCxDQUFuQjtBQUNELEtBTkQ7O0FBT0EsUUFBSWpILEtBQUssQ0FBQ3VILE9BQVYsRUFBbUI7QUFDakJlLE1BQUFBLGFBQWE7QUFDZDtBQUNGLEdBWFEsRUFXTixDQUFDbEQsVUFBRCxFQUFhcEYsS0FBSyxDQUFDdUgsT0FBbkIsRUFBNEJMLFlBQTVCLENBWE0sQ0FBVDtBQWFBLHNCQUNFO0FBQUssYUFBUyxFQUFFNUwsaURBQUcsQ0FBQztBQUFFaU4sTUFBQUEsUUFBUSxFQUFFO0FBQVosS0FBRCxDQUFuQjtBQUFBLDRCQUNFLHVEQUFDLHVEQUFEO0FBQUEsNkJBQ0UsdURBQUMsb0RBQUQ7QUFBYSxhQUFLLEVBQUMsU0FBbkI7QUFBNkIsa0JBQVUsRUFBRSxFQUF6QztBQUE2QyxZQUFJLE1BQWpEO0FBQUEsK0JBQ0UsdURBQUMsb0RBQUQ7QUFDRSxpQkFBTyxFQUFDLFNBRFY7QUFFRSxzQkFBWSxFQUFFLEtBRmhCO0FBR0UscUJBQVcsRUFBRU4sYUFIZjtBQUlFLG9CQUFVLEVBQUUsTUFBTWYsWUFBWSxDQUFDLGVBQUQsRUFBa0IsVUFBbEIsQ0FKaEM7QUFLRSxtQkFBUyxFQUFFSixTQUFTLENBQUNFLFFBTHZCO0FBTUUsZUFBSyxFQUFFLENBQUFOLGNBQWMsU0FBZCxJQUFBQSxjQUFjLFdBQWQsWUFBQUEsY0FBYyxDQUFFOEIsSUFBaEIsQ0FBc0IzSyxDQUFELElBQU8sQ0FBQUEsQ0FBQyxTQUFELElBQUFBLENBQUMsV0FBRCxZQUFBQSxDQUFDLENBQUVMLEtBQUgsTUFBYXdDLEtBQUssQ0FBQ3VILE9BQS9DLE1BQTJEeEgsU0FOcEU7QUFPRSxrQkFBUSxFQUFHbEMsQ0FBRCxJQUNSWixRQUFRLG1CQUNIK0MsS0FERztBQUVOdUgsWUFBQUEsT0FBTyxFQUFFMUosQ0FBRixhQUFFQSxDQUFGLHVCQUFFQSxDQUFDLENBQUVMLEtBRk47QUFHTmlMLFlBQUFBLFNBQVMsRUFBRXpJLEtBQUssQ0FBQ3VILE9BQU4sTUFBa0IxSixDQUFsQixhQUFrQkEsQ0FBbEIsdUJBQWtCQSxDQUFDLENBQUVMLEtBQXJCLElBQTZCdUMsU0FBN0IsR0FBeUNDLEtBQUssQ0FBQ3lJO0FBSHBELGFBUlo7QUFjRSx1QkFBYSxFQUFDLFFBZGhCO0FBZUUscUJBQVcsTUFmYjtBQWdCRSx3QkFBYyxNQWhCaEI7QUFpQkUsd0JBQVk7QUFqQmQ7QUFERjtBQURGLE1BREYsZUF3QkUsdURBQUMsdURBQUQ7QUFBQSw2QkFDRSx1REFBQyxvREFBRDtBQUFhLGFBQUssRUFBQyxXQUFuQjtBQUErQixrQkFBVSxFQUFFLEVBQTNDO0FBQStDLFlBQUksTUFBbkQ7QUFBb0QsZ0JBQVEsRUFBRSxDQUFDekksS0FBSyxDQUFDdUgsT0FBckU7QUFBQSwrQkFDRSx1REFBQyxvREFBRDtBQUNFLGlCQUFPLEVBQUMsV0FEVjtBQUVFLHNCQUFZLEVBQUUsS0FGaEI7QUFHRSxxQkFBVyxFQUFFYSxlQUhmO0FBSUUsb0JBQVUsRUFBRSxNQUNWbEIsWUFBWSxDQUFFLGlCQUFnQmMsa0JBQWtCLENBQUNoSSxLQUFLLENBQUN1SCxPQUFQLENBQWlCLGFBQXJELEVBQW1FLFlBQW5FLENBTGhCO0FBT0UsbUJBQVMsRUFBRVQsU0FBUyxDQUFDRyxVQVB2QjtBQVFFLGVBQUssRUFBRSxDQUFBTCxnQkFBZ0IsU0FBaEIsSUFBQUEsZ0JBQWdCLFdBQWhCLFlBQUFBLGdCQUFnQixDQUFFNEIsSUFBbEIsQ0FBd0IzSyxDQUFELElBQU9BLENBQUMsQ0FBQ0wsS0FBRixLQUFZd0MsS0FBSyxDQUFDeUksU0FBaEQsTUFBOEQsSUFSdkU7QUFTRSxrQkFBUSxFQUFHNUssQ0FBRCxJQUNSWixRQUFRLG1CQUNIK0MsS0FERztBQUVOeUksWUFBQUEsU0FBUyxFQUFFLENBQUE1SyxDQUFDLFNBQUQsSUFBQUEsQ0FBQyxXQUFELFlBQUFBLENBQUMsQ0FBRUwsS0FBSCxLQUFhdUM7QUFGbEIsYUFWWjtBQWVFLHVCQUFhLEVBQUMsUUFmaEI7QUFnQkUscUJBQVcsTUFoQmI7QUFpQkUsd0JBQWMsTUFqQmhCO0FBa0JFLHdCQUFZO0FBbEJkO0FBREY7QUFERixNQXhCRixlQWdERSx1REFBQyx1REFBRDtBQUFBLDZCQUNFLHVEQUFDLG9EQUFEO0FBQWEsYUFBSyxFQUFDLE1BQW5CO0FBQTBCLGtCQUFVLEVBQUUsRUFBdEM7QUFBMEMsWUFBSSxNQUE5QztBQUFBLCtCQUNFLHVEQUFDLDhDQUFEO0FBQ0UsWUFBRSxFQUFDLE1BREw7QUFFRSxlQUFLLEVBQUV3Ryx3REFBaUIsQ0FBQ3ZHLEtBQUssQ0FBQ2YsSUFBUCxDQUYxQjtBQUdFLHFCQUFXLEVBQUMsaUNBSGQ7QUFJRSxrQkFBUSxFQUFHcEIsQ0FBRCxJQUNSWixRQUFRLG1CQUNIK0MsS0FERztBQUVOZixZQUFBQSxJQUFJLEVBQUVwQixDQUFDLENBQUNyQixhQUFGLENBQWdCZ0I7QUFGaEI7QUFMWjtBQURGO0FBREYsTUFoREYsZUErREUsdURBQUMsNkRBQUQ7QUFBaUIsV0FBSyxFQUFFd0MsS0FBeEI7QUFBK0IsY0FBUSxFQUFFL0M7QUFBekMsTUEvREY7QUFBQSxJQURGO0FBbUVEO0FBRUQsaUVBQWVpSSxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDektBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFNTyxNQUFNeUUsZ0JBQU4sU0FBK0JWLHdEQUEvQixDQUEwRTtBQUcvRVcsRUFBQUEsV0FBVyxDQUNEQyxnQkFEQyxFQUVRQyxPQUFnQixHQUFHUixtRkFBVSxFQUZyQyxFQUdUO0FBQ0EsVUFBTU8sZ0JBQU47QUFEQSxTQUZRQSxnQkFFUixHQUZRQSxnQkFFUjtBQUFBLFNBRGlCQyxPQUNqQixHQURpQkEsT0FDakI7O0FBQUEsMENBTDBDLElBSzFDOztBQUFBOztBQUFBLFNBRlFELGdCQUVSLEdBRlFBLGdCQUVSO0FBQUEsU0FEaUJDLE9BQ2pCLEdBRGlCQSxPQUNqQjtBQUVBLFNBQUt6TixTQUFMLEdBQWlCd04sZ0JBQWdCLENBQUN6TixRQUFqQixDQUEwQkMsU0FBM0M7QUFDRDs7QUFFb0IsUUFBZmlMLGVBQWUsQ0FBQ0gsR0FBRCxFQUFjNEMsTUFBZCxFQUEwRDtBQUM3RSxVQUFNQyxHQUFHLEdBQUcsTUFBTWxCLG1EQUFhLENBQUMsS0FBS21CLFFBQUwsQ0FBYzlDLEdBQWQsRUFBbUI0QyxNQUFuQixFQUEyQjtBQUFFRyxNQUFBQSxpQkFBaUIsRUFBRTtBQUFyQixLQUEzQixDQUFELENBQS9CO0FBQ0EsV0FBT0YsR0FBRyxDQUFDRyxJQUFKLENBQVNBLElBQWhCO0FBQ0Q7O0FBRURuSyxFQUFBQSxLQUFLLENBQUNsRSxPQUFELEVBQXdFO0FBQzNFO0FBQ0E7QUFDQSxVQUFNeUgsTUFBbUIsR0FBR3pILE9BQU8sQ0FBQ3NPLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FBNUI7O0FBQ0EsUUFBSSxDQUFDN0csTUFBTCxFQUFhO0FBQ1gsYUFBT3dGLHlDQUFFLENBQUM7QUFBRW9CLFFBQUFBLElBQUksRUFBRSxDQUFDRSxtQkFBRDtBQUFSLE9BQUQsQ0FBVDtBQUNEOztBQUVELFFBQUk5RyxNQUFNLENBQUNrQyxTQUFQLEtBQXFCLFFBQXJCLElBQWlDbEMsTUFBTSxDQUFDdkQsS0FBNUMsRUFBbUQ7QUFDakQsYUFBTyxLQUFLaUssUUFBTCxDQUNKLGVBQWNqQyxrQkFBa0IsQ0FBQ29CLGdFQUFjLEdBQUdrQixPQUFqQixDQUF5Qi9HLE1BQU0sQ0FBQ3ZELEtBQWhDLEVBQXVDbEUsT0FBTyxDQUFDeU8sVUFBL0MsQ0FBRCxDQUE2RCxFQUR6RixFQUVMQyxJQUZLLENBR0xqTixvREFBRyxDQUFFa04sUUFBRCxJQUFjO0FBQUE7O0FBQ2hCLGNBQU1DLFNBQVMsR0FBR0QsUUFBSCxhQUFHQSxRQUFILHlDQUFHQSxRQUFRLENBQUVOLElBQWIsMEVBQUcsZUFBZ0JBLElBQW5CLHdEQUFHLG9CQUF1QixDQUF2QixDQUFsQjs7QUFDQSxZQUFJLENBQUNPLFNBQUwsRUFBZ0I7QUFDZCxpQkFBTztBQUFFUCxZQUFBQSxJQUFJLEVBQUUsQ0FBQ0UsbUJBQUQ7QUFBUixXQUFQO0FBQ0Q7O0FBQ0QsWUFBSUYsSUFBSSxHQUFHLENBQUNWLG9FQUFnQixDQUFDaUIsU0FBRCxDQUFqQixDQUFYOztBQUNBLCtCQUFJLEtBQUtyTyxTQUFULDRDQUFJLGdCQUFnQkMsT0FBcEIsRUFBNkI7QUFDM0I2TixVQUFBQSxJQUFJLENBQUN4SSxJQUFMLENBQVUsR0FBRzRILGtFQUFpQixDQUFDbUIsU0FBRCxDQUE5QjtBQUNEOztBQUNELGVBQU87QUFDTFAsVUFBQUE7QUFESyxTQUFQO0FBR0QsT0FaRSxDQUhFLENBQVA7QUFpQkQ7O0FBRUQsUUFBSTVHLE1BQU0sQ0FBQ2tDLFNBQVAsS0FBcUIsUUFBekIsRUFBbUM7QUFDakMsVUFBSSxDQUFDLEtBQUtJLFlBQVYsRUFBd0I7QUFDdEIsZUFBT2tELHlDQUFFLENBQUM7QUFBRW9CLFVBQUFBLElBQUksRUFBRTtBQUFSLFNBQUQsQ0FBVDtBQUNEOztBQUVELFVBQUk7QUFBQTs7QUFDRixjQUFNTyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUsvRSxZQUFoQixFQUF3Q3NFLElBQXhDLENBQTZDLENBQTdDLENBQWxCO0FBQ0EsWUFBSUEsSUFBSSxHQUFHLENBQUNWLG9FQUFnQixDQUFDaUIsU0FBRCxDQUFqQixDQUFYOztBQUNBLGdDQUFJLEtBQUtyTyxTQUFULDZDQUFJLGlCQUFnQkMsT0FBcEIsRUFBNkI7QUFDM0I2TixVQUFBQSxJQUFJLENBQUN4SSxJQUFMLENBQVUsR0FBRzRILGtFQUFpQixDQUFDbUIsU0FBRCxDQUE5QjtBQUNEOztBQUNELGVBQU8zQix5Q0FBRSxDQUFDO0FBQUVvQixVQUFBQTtBQUFGLFNBQUQsQ0FBVDtBQUNELE9BUEQsQ0FPRSxPQUFPdkMsS0FBUCxFQUFjO0FBQ2QsZUFBT21CLHlDQUFFLENBQUM7QUFBRW5CLFVBQUFBLEtBQUssRUFBRTtBQUFFaUQsWUFBQUEsT0FBTyxFQUFFO0FBQVgsV0FBVDtBQUF5RFYsVUFBQUEsSUFBSSxFQUFFO0FBQS9ELFNBQUQsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsUUFBSVcsV0FBVyxHQUFHbEMsNENBQUksQ0FBQ3JGLE1BQUQsRUFBUyxDQUFDLFdBQUQsRUFBYyxTQUFkLEVBQXlCLE1BQXpCLEVBQWlDLGFBQWpDLEVBQWdELGFBQWhELEVBQStELE9BQS9ELENBQVQsQ0FBdEIsQ0E3QzJFLENBOEMzRTs7QUFDQXVILElBQUFBLFdBQVcsR0FBR2pDLDhDQUFNLENBQUNpQyxXQUFELEVBQWNwQyw0Q0FBZCxDQUFwQjs7QUFDQSxRQUFJb0MsV0FBVyxDQUFDN0wsSUFBaEIsRUFBc0I7QUFDcEI2TCxNQUFBQSxXQUFXLHFCQUNOQSxXQURNO0FBRVQ3TCxRQUFBQSxJQUFJLEVBQUV5Syx3REFBaUIsQ0FBQ04sZ0VBQWMsR0FBR2tCLE9BQWpCLENBQXlCUSxXQUFXLENBQUM3TCxJQUFyQyxFQUEyQ25ELE9BQU8sQ0FBQ3lPLFVBQW5ELENBQUQ7QUFGZCxRQUFYO0FBSUQ7O0FBRUQsUUFBSU8sV0FBVyxDQUFDckMsU0FBWixLQUEwQmpDLHNFQUE5QixFQUFrRDtBQUNoRHNFLE1BQUFBLFdBQVcsR0FBR25DLDRDQUFJLENBQUNtQyxXQUFELEVBQWMsV0FBZCxDQUFsQjtBQUNELEtBekQwRSxDQTJEM0U7OztBQUNBLFdBQU8sS0FBS2IsUUFBTCxDQUFlLGFBQWYsb0JBQ0ZhLFdBREUsRUFFRixLQUFLQyxZQUFMLEVBRkU7QUFHTEMsTUFBQUEsUUFBUSxFQUFFO0FBSEwsUUFJSlIsSUFKSSxDQUtMak4sb0RBQUcsQ0FBRWtOLFFBQUQsSUFBYztBQUNoQixhQUFPO0FBQ0xOLFFBQUFBLElBQUksRUFBRSxDQUFDWCxvRUFBZ0IsQ0FBQ2lCLFFBQVEsQ0FBQ04sSUFBVCxDQUFjQSxJQUFmLEVBQXFCLEtBQUtOLGdCQUExQixDQUFqQjtBQURELE9BQVA7QUFHRCxLQUpFLENBTEUsQ0FBUDtBQVdEOztBQUVtQixRQUFkb0IsY0FBYyxHQUFpQjtBQUNuQyxXQUFPbkMsbURBQWEsQ0FDbEIsS0FBS21CLFFBQUwsQ0FBYyxlQUFkLEVBQStCTyxJQUEvQixDQUNFak4sb0RBQUcsQ0FBRXlNLEdBQUQsSUFBUztBQUFBOztBQUNYLFlBQU1oTixNQUFhLEdBQUcsQ0FBQWdOLEdBQUcsU0FBSCxJQUFBQSxHQUFHLFdBQUgseUJBQUFBLEdBQUcsQ0FBRUcsSUFBTCx3REFBV0EsSUFBWCxLQUFtQixFQUF6QztBQUNBLFlBQU1lLFVBQVUsR0FDZGxPLE1BQU0sQ0FBQ00sTUFBUCxHQUFnQixDQUFoQixHQUNJO0FBQUU2TixRQUFBQSxNQUFNLEVBQUUsU0FBVjtBQUFxQk4sUUFBQUEsT0FBTyxFQUFFO0FBQTlCLE9BREosR0FFSTtBQUNFTSxRQUFBQSxNQUFNLEVBQUUsT0FEVjtBQUVFTixRQUFBQSxPQUFPLEVBQ0w7QUFISixPQUhOO0FBUUEsYUFBT0ssVUFBUDtBQUNELEtBWEUsQ0FETCxFQWFFbEMsMkRBQVUsQ0FBRW9DLEdBQUQsSUFBYztBQUN2QixVQUFJUCxPQUFPLEdBQUcsVUFBZDs7QUFDQSxVQUFJTyxHQUFHLENBQUNDLFVBQVIsRUFBb0I7QUFDbEJSLFFBQUFBLE9BQU8sSUFBSU8sR0FBRyxDQUFDQyxVQUFmO0FBQ0QsT0FGRCxNQUVPO0FBQ0xSLFFBQUFBLE9BQU8sSUFBSSwwQkFBWDtBQUNEOztBQUVELFVBQUlPLEdBQUcsQ0FBQ0QsTUFBUixFQUFnQjtBQUNkTixRQUFBQSxPQUFPLElBQUssS0FBSU8sR0FBRyxDQUFDRCxNQUFPLEVBQTNCO0FBQ0Q7O0FBRUQsVUFBSUMsR0FBRyxDQUFDakIsSUFBSixJQUFZaUIsR0FBRyxDQUFDakIsSUFBSixDQUFTVSxPQUF6QixFQUFrQztBQUNoQ0EsUUFBQUEsT0FBTyxJQUFLLEtBQUlPLEdBQUcsQ0FBQ2pCLElBQUosQ0FBU1UsT0FBUSxFQUFqQztBQUNELE9BRkQsTUFFTyxJQUFJTyxHQUFHLENBQUNqQixJQUFSLEVBQWM7QUFDbkJVLFFBQUFBLE9BQU8sSUFBSyxLQUFJRixJQUFJLENBQUNXLFNBQUwsQ0FBZUYsR0FBRyxDQUFDakIsSUFBbkIsQ0FBeUIsRUFBekM7QUFDRDs7QUFDRCxhQUFPcEIseUNBQUUsQ0FBQztBQUFFb0MsUUFBQUEsTUFBTSxFQUFFLE9BQVY7QUFBbUJOLFFBQUFBLE9BQU8sRUFBRUE7QUFBNUIsT0FBRCxDQUFUO0FBQ0QsS0FsQlMsQ0FiWixDQURrQixDQUFwQjtBQW1DRDs7QUFFREUsRUFBQUEsWUFBWSxHQUFtQztBQUM3QyxVQUFNbEssS0FBSyxHQUFHLEtBQUtpSixPQUFMLENBQWF5QixTQUFiLEVBQWQ7QUFDQSxXQUFPO0FBQ0x0SyxNQUFBQSxLQUFLLEVBQUV1SyxPQUFPLENBQUMzSyxLQUFLLENBQUM0SyxJQUFQLEVBQWEsS0FBYixDQURUO0FBRUx2SyxNQUFBQSxHQUFHLEVBQUVzSyxPQUFPLENBQUMzSyxLQUFLLENBQUM2SyxFQUFQLEVBQVcsSUFBWDtBQUZQLEtBQVA7QUFJRDs7QUFFREMsRUFBQUEsbUJBQW1CLENBQUMzTCxLQUFELEVBQXFCO0FBQ3RDLFdBQU9BLEtBQUssQ0FBQ0EsS0FBTixJQUFlLEVBQXRCO0FBQ0Q7O0FBRU9pSyxFQUFBQSxRQUFRLENBQUMyQixNQUFELEVBQWlCekIsSUFBakIsRUFBNkJyTyxPQUE3QixFQUFvRztBQUNsSCxVQUFNaU8sTUFBTSxHQUFHSSxJQUFJLEdBQUdkLHFFQUFlLENBQUNjLElBQUQsQ0FBbEIsR0FBMkIsRUFBOUM7QUFDQSxVQUFNaEQsR0FBRyxHQUFJLEdBQUUsS0FBSzBDLGdCQUFMLENBQXNCMUMsR0FBSSxHQUFFeUUsTUFBTyxHQUFFN0IsTUFBTSxDQUFDek0sTUFBUCxHQUFpQixJQUFHeU0sTUFBTyxFQUEzQixHQUErQixFQUFHLEVBQXRGO0FBQ0EsVUFBTThCLEdBQUcscUJBQ0ovUCxPQURJO0FBRVBxTCxNQUFBQTtBQUZPLE1BQVQ7QUFLQSxXQUFPZ0MsK0RBQWEsR0FBRzJDLEtBQWhCLENBQXNCRCxHQUF0QixDQUFQO0FBQ0Q7O0FBcEo4RTs7QUF1SmpGLFNBQVNMLE9BQVQsQ0FBaUJPLElBQWpCLEVBQTBDQyxPQUExQyxFQUE0RDtBQUMxRCxNQUFJLE9BQU9ELElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUJBLElBQUFBLElBQUksR0FBRzdDLHlEQUFBLENBQWU2QyxJQUFmLEVBQXFCQyxPQUFyQixDQUFQO0FBQ0Q7O0FBQ0QsU0FBT0QsSUFBSSxDQUFDRSxPQUFMLEtBQWlCLElBQXhCO0FBQ0Q7O0FBRUQsTUFBTTVCLG1CQUFtQixHQUFHLElBQUluSywyREFBSixDQUFxQjtBQUMvQ3NDLEVBQUFBLE1BQU0sRUFBRSxDQUNOO0FBQ0VDLElBQUFBLElBQUksRUFBRSxPQURSO0FBRUU1RCxJQUFBQSxJQUFJLEVBQUVvQiwwREFGUjtBQUdFakQsSUFBQUEsTUFBTSxFQUFFO0FBSFYsR0FETSxDQUR1QztBQVEvQ29HLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSwwQkFBMEIsRUFBRSxPQUR4QjtBQUVKOEksSUFBQUEsTUFBTSxFQUFFO0FBQ05DLE1BQUFBLFdBQVcsRUFBRTtBQURQO0FBRko7QUFSeUMsQ0FBckIsQ0FBNUI7Ozs7Ozs7Ozs7Ozs7O0FDNUxBO0FBRUE7QUFtQk8sU0FBUzdDLGlCQUFULENBQTJCWSxJQUEzQixFQUE2RDtBQUNsRSxRQUFNO0FBQUVrQyxJQUFBQSxLQUFGO0FBQVNDLElBQUFBO0FBQVQsTUFBbUJDLG1CQUFtQixDQUFDcEMsSUFBRCxDQUE1QztBQUNBLFFBQU0sQ0FBQzVILFVBQUQsRUFBYWUsVUFBYixJQUEyQmhCLCtEQUFVLEVBQTNDOztBQUVBLE9BQUssTUFBTWtLLElBQVgsSUFBbUJILEtBQW5CLEVBQTBCO0FBQ3hCOUosSUFBQUEsVUFBVSxDQUFDa0ssR0FBWCxDQUFlRCxJQUFmO0FBQ0Q7O0FBRUQsT0FBSyxNQUFNRSxJQUFYLElBQW1CSixLQUFuQixFQUEwQjtBQUN4QmhKLElBQUFBLFVBQVUsQ0FBQ21KLEdBQVgsQ0FBZUMsSUFBZjtBQUNEOztBQUVELFNBQU8sQ0FBQ25LLFVBQUQsRUFBYWUsVUFBYixDQUFQO0FBQ0Q7O0FBRUQsU0FBU2lKLG1CQUFULENBQTZCcEMsSUFBN0IsRUFBb0Y7QUFDbEYsUUFBTWtDLEtBQWEsR0FBRyxFQUF0QjtBQUNBLFFBQU1DLEtBQWEsR0FBRyxFQUF0QjtBQUVBLFFBQU14SyxhQUFhLEdBQUc2SyxpQkFBaUIsQ0FBQ3hDLElBQUksQ0FBQ3lDLEtBQU4sQ0FBdkM7QUFFQSxRQUFNdkwsT0FBTyxHQUFHRixnRUFBVyxDQUFFSSxLQUFELElBQVc7QUFBQTs7QUFDckMsUUFBSUEsS0FBSyxJQUFJNEksSUFBSSxDQUFDeUMsS0FBTCxDQUFXdFAsTUFBeEIsRUFBZ0M7QUFDOUIsYUFBT3lDLFNBQVA7QUFDRDs7QUFDRCxVQUFNdUIsSUFBSSxHQUFHNkksSUFBSSxDQUFDeUMsS0FBTCxDQUFXckwsS0FBWCxDQUFiO0FBQ0EsV0FBTztBQUNMRCxNQUFBQSxJQURLO0FBRUxwRSxNQUFBQSxFQUFFLEVBQUVvRSxJQUFJLENBQUN1TCxNQUZKO0FBR0xuTCxNQUFBQSxTQUFTLEVBQUUscUJBQUFKLElBQUksQ0FBQ3dMLFVBQUwsc0VBQWlCckYsTUFBakIsQ0FBeUJzRixDQUFELElBQU9BLENBQUMsQ0FBQ0MsT0FBRixLQUFjLFVBQTdDLEVBQXlEelAsR0FBekQsQ0FBOER3UCxDQUFELElBQU9BLENBQUMsQ0FBQ0YsTUFBdEUsTUFBaUY7QUFIdkYsS0FBUDtBQUtELEdBVjBCLENBQTNCOztBQVlBLE9BQUssTUFBTXZMLElBQVgsSUFBbUI2SSxJQUFJLENBQUN5QyxLQUF4QixFQUErQjtBQUFBOztBQUM3QixVQUFNSyxPQUFPLEdBQUc5QyxJQUFJLENBQUMrQyxTQUFMLENBQWU1TCxJQUFJLENBQUM2TCxTQUFwQixDQUFoQjtBQUVBLFVBQU03TSxNQUErQixHQUFHZSxPQUFPLENBQUNDLElBQUksQ0FBQ3VMLE1BQU4sQ0FBUCxDQUFxQnJMLFFBQXJCLENBQThCakUsR0FBOUIsQ0FBbUM2UCxDQUFELElBQU87QUFDL0UsWUFBTTlMLElBQUksR0FBR0QsT0FBTyxDQUFDK0wsQ0FBRCxDQUFQLENBQVc5TCxJQUF4QjtBQUNBLGFBQU8sQ0FBQ0EsSUFBSSxDQUFDK0wsU0FBTixFQUFpQi9MLElBQUksQ0FBQytMLFNBQUwsR0FBaUIvTCxJQUFJLENBQUNPLFFBQXZDLENBQVA7QUFDRCxLQUh1QyxDQUF4QztBQUlBLFVBQU15TCxnQkFBZ0IsR0FBR2pOLDhFQUF5QixDQUFDQyxNQUFELENBQWxEO0FBQ0EsVUFBTXlCLFlBQVksR0FBR1QsSUFBSSxDQUFDTyxRQUFMLEdBQWdCeUwsZ0JBQXJDO0FBQ0EsVUFBTUMsS0FBSyxHQUFHM0wsNkRBQVEsQ0FBQ04sSUFBSSxDQUFDTyxRQUFMLEdBQWdCLElBQWpCLEVBQXVCQyxhQUFhLEdBQUcsSUFBdkMsRUFBNkNDLFlBQVksR0FBRyxJQUE1RCxDQUF0QjtBQUVBc0ssSUFBQUEsS0FBSyxDQUFDMUssSUFBTixDQUFXO0FBQ1QsT0FBQ3ZCLDBFQUFELEdBQWFrQixJQUFJLENBQUN1TCxNQURUO0FBRVQsT0FBQ3pNLDZFQUFELDJCQUFnQjZNLE9BQWhCLGFBQWdCQSxPQUFoQix1QkFBZ0JBLE9BQU8sQ0FBRU8sV0FBekIsdUVBQXdDLEVBRi9CO0FBR1QsT0FBQ3BOLGdGQUFELEdBQW1Ca0IsSUFBSSxDQUFDbU0sYUFIZjtBQUlULE9BQUNyTixnRkFBRCxHQUFtQm1OLEtBQUssQ0FBQ3ZMLElBSmhCO0FBS1QsT0FBQzVCLHFGQUFELEdBQXdCbU4sS0FBSyxDQUFDckwsU0FMckI7QUFNVCxPQUFDOUIsNkVBQUQsR0FBZ0IyQixZQUFZLEdBQUdEO0FBTnRCLEtBQVg7QUFTQSxVQUFNNEwsWUFBWSx3QkFBR3BNLElBQUksQ0FBQ3dMLFVBQVIsK0VBQUcsa0JBQWlCdEUsSUFBakIsQ0FBdUJ1RSxDQUFELElBQU9BLENBQUMsQ0FBQ0MsT0FBRixLQUFjLFVBQTNDLENBQUgsMERBQUcsc0JBQXdESCxNQUE3RSxDQXBCNkIsQ0FxQjdCOztBQUNBLFFBQUlhLFlBQVksSUFBSXJNLE9BQU8sQ0FBQ3FNLFlBQUQsQ0FBUCxDQUFzQnBNLElBQTFDLEVBQWdEO0FBQzlDZ0wsTUFBQUEsS0FBSyxDQUFDM0ssSUFBTixDQUFXO0FBQ1QsU0FBQ3ZCLDBFQUFELEdBQWFzTixZQUFZLEdBQUcsSUFBZixHQUFzQnBNLElBQUksQ0FBQ3VMLE1BRC9CO0FBRVQsU0FBQ3pNLDhFQUFELEdBQWlCa0IsSUFBSSxDQUFDdUwsTUFGYjtBQUdULFNBQUN6TSw4RUFBRCxHQUFpQnNOO0FBSFIsT0FBWDtBQUtEO0FBQ0Y7O0FBRUQsU0FBTztBQUFFckIsSUFBQUEsS0FBRjtBQUFTQyxJQUFBQTtBQUFULEdBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTSyxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0Q7QUFDaEQsTUFBSWUsWUFBWSxHQUFHLENBQW5CO0FBQ0EsTUFBSUMsY0FBYyxHQUFHQyxRQUFyQjs7QUFFQSxPQUFLLE1BQU12TSxJQUFYLElBQW1Cc0wsS0FBbkIsRUFBMEI7QUFDeEIsUUFBSXRMLElBQUksQ0FBQytMLFNBQUwsR0FBaUJPLGNBQXJCLEVBQXFDO0FBQ25DQSxNQUFBQSxjQUFjLEdBQUd0TSxJQUFJLENBQUMrTCxTQUF0QjtBQUNEOztBQUVELFFBQUkvTCxJQUFJLENBQUMrTCxTQUFMLEdBQWlCL0wsSUFBSSxDQUFDTyxRQUF0QixHQUFpQzhMLFlBQXJDLEVBQW1EO0FBQ2pEQSxNQUFBQSxZQUFZLEdBQUdyTSxJQUFJLENBQUMrTCxTQUFMLEdBQWlCL0wsSUFBSSxDQUFDTyxRQUFyQztBQUNEO0FBQ0Y7O0FBRUQsU0FBTzhMLFlBQVksR0FBR0MsY0FBdEI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQzNHRDtBQUVBO0FBQ0E7QUFDQTtBQUVPLE1BQU1HLE1BQU0sR0FBRyxJQUFJRCwyREFBSixDQUFxQm5FLHlEQUFyQixFQUF1Q3FFLGVBQXZDLENBQXVEckosa0VBQXZELEVBQXFFc0osY0FBckUsQ0FBb0Y5SSxnRUFBcEYsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7OztBQ05QO0FBUUE7QUFJTyxTQUFTc0UsZ0JBQVQsQ0FBMEJVLElBQTFCLEVBQTBEO0FBQy9ELFFBQU15QyxLQUFLLEdBQUd6QyxJQUFJLENBQUN5QyxLQUFMLENBQVdyUCxHQUFYLENBQWdCNFEsQ0FBRCxJQUFPQyxTQUFTLENBQUNELENBQUQsRUFBSWhFLElBQUksQ0FBQytDLFNBQVQsQ0FBL0IsQ0FBZDtBQUVBLFFBQU1tQixLQUFLLEdBQUcsSUFBSW5PLDJEQUFKLENBQXFCO0FBQ2pDc0MsSUFBQUEsTUFBTSxFQUFFLENBQ047QUFBRUMsTUFBQUEsSUFBSSxFQUFFLFNBQVI7QUFBbUI1RCxNQUFBQSxJQUFJLEVBQUVvQiwyREFBZ0J5QztBQUF6QyxLQURNLEVBRU47QUFBRUQsTUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0I1RCxNQUFBQSxJQUFJLEVBQUVvQiwyREFBZ0J5QztBQUF4QyxLQUZNLEVBR047QUFBRUQsTUFBQUEsSUFBSSxFQUFFLGNBQVI7QUFBd0I1RCxNQUFBQSxJQUFJLEVBQUVvQiwyREFBZ0J5QztBQUE5QyxLQUhNLEVBSU47QUFBRUQsTUFBQUEsSUFBSSxFQUFFLGVBQVI7QUFBeUI1RCxNQUFBQSxJQUFJLEVBQUVvQiwyREFBZ0J5QztBQUEvQyxLQUpNLEVBS047QUFBRUQsTUFBQUEsSUFBSSxFQUFFLGFBQVI7QUFBdUI1RCxNQUFBQSxJQUFJLEVBQUVvQiwyREFBZ0J5QztBQUE3QyxLQUxNLEVBTU47QUFBRUQsTUFBQUEsSUFBSSxFQUFFLGFBQVI7QUFBdUI1RCxNQUFBQSxJQUFJLEVBQUVvQiwwREFBZXFPO0FBQTVDLEtBTk0sRUFPTjtBQUFFN0wsTUFBQUEsSUFBSSxFQUFFLFdBQVI7QUFBcUI1RCxNQUFBQSxJQUFJLEVBQUVvQiwyREFBZ0JpRDtBQUEzQyxLQVBNLEVBUU47QUFBRVQsTUFBQUEsSUFBSSxFQUFFLFVBQVI7QUFBb0I1RCxNQUFBQSxJQUFJLEVBQUVvQiwyREFBZ0JpRDtBQUExQyxLQVJNLEVBU047QUFBRVQsTUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0I1RCxNQUFBQSxJQUFJLEVBQUVvQiwwREFBZXFPO0FBQXJDLEtBVE0sRUFVTjtBQUFFN0wsTUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0I1RCxNQUFBQSxJQUFJLEVBQUVvQiwwREFBZXFPO0FBQXJDLEtBVk0sRUFXTjtBQUFFN0wsTUFBQUEsSUFBSSxFQUFFLFVBQVI7QUFBb0I1RCxNQUFBQSxJQUFJLEVBQUVvQiwwREFBZXFPO0FBQXpDLEtBWE0sRUFZTjtBQUFFN0wsTUFBQUEsSUFBSSxFQUFFLGFBQVI7QUFBdUI1RCxNQUFBQSxJQUFJLEVBQUVvQiwwREFBZXFPO0FBQTVDLEtBWk0sQ0FEeUI7QUFlakNsTCxJQUFBQSxJQUFJLEVBQUU7QUFDSkMsTUFBQUEsMEJBQTBCLEVBQUUsT0FEeEI7QUFFSjhJLE1BQUFBLE1BQU0sRUFBRTtBQUNOQyxRQUFBQSxXQUFXLEVBQUU7QUFEUDtBQUZKO0FBZjJCLEdBQXJCLENBQWQ7O0FBdUJBLE9BQUssTUFBTTlLLElBQVgsSUFBbUJzTCxLQUFuQixFQUEwQjtBQUN4QnlCLElBQUFBLEtBQUssQ0FBQzVCLEdBQU4sQ0FBVW5MLElBQVY7QUFDRDs7QUFFRCxTQUFPK00sS0FBUDtBQUNEOztBQUVELFNBQVNELFNBQVQsQ0FBbUI5TSxJQUFuQixFQUErQjRMLFNBQS9CLEVBQXNGO0FBQUE7O0FBQ3BGLFNBQU87QUFDTEwsSUFBQUEsTUFBTSxFQUFFdkwsSUFBSSxDQUFDdUwsTUFEUjtBQUVMMEIsSUFBQUEsT0FBTyxFQUFFak4sSUFBSSxDQUFDaU4sT0FGVDtBQUdMYixJQUFBQSxZQUFZLHNCQUFFcE0sSUFBSSxDQUFDd0wsVUFBUCw4RUFBRSxpQkFBaUJ0RSxJQUFqQixDQUF1QnVFLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxPQUFGLEtBQWMsVUFBM0MsQ0FBRiwwREFBRSxzQkFBd0RILE1BSGpFO0FBSUxZLElBQUFBLGFBQWEsRUFBRW5NLElBQUksQ0FBQ21NLGFBSmY7QUFLTDtBQUNBSixJQUFBQSxTQUFTLEVBQUUvTCxJQUFJLENBQUMrTCxTQUFMLEdBQWlCLElBTnZCO0FBT0x4TCxJQUFBQSxRQUFRLEVBQUVQLElBQUksQ0FBQ08sUUFBTCxHQUFnQixJQVByQjtBQVFMMk0sSUFBQUEsSUFBSSxFQUFFbE4sSUFBSSxDQUFDa04sSUFBTCxDQUFValIsR0FBVixDQUFla1IsQ0FBRCxzQkFDZkEsQ0FEZTtBQUVsQkMsTUFBQUEsU0FBUyxFQUFFRCxDQUFDLENBQUNDLFNBQUYsR0FBYztBQUZQLE1BQWQsQ0FSRDtBQVlMelAsSUFBQUEsSUFBSSxFQUFFcUMsSUFBSSxDQUFDckMsSUFaTjtBQWFMMFAsSUFBQUEsUUFBUSxvQkFBRXJOLElBQUksQ0FBQ3FOLFFBQVAsMkRBQW1CNU8sU0FidEI7QUFjTDZPLElBQUFBLFdBQVcsRUFBRXROLElBQUksQ0FBQ3NOLFdBZGI7QUFlTHBCLElBQUFBLFdBQVcsRUFBRU4sU0FBUyxDQUFDNUwsSUFBSSxDQUFDNkwsU0FBTixDQUFULENBQTBCSyxXQWZsQztBQWdCTHFCLElBQUFBLFdBQVcsRUFBRTNCLFNBQVMsQ0FBQzVMLElBQUksQ0FBQzZMLFNBQU4sQ0FBVCxDQUEwQmxPO0FBaEJsQyxHQUFQO0FBa0JEOztBQUVNLFNBQVN1SyxnQkFBVCxDQUEwQlcsSUFBMUIsRUFBaUROLGdCQUFqRCxFQUEwRztBQUMvRyxRQUFNd0UsS0FBSyxHQUFHLElBQUluTywyREFBSixDQUFxQjtBQUNqQ3NDLElBQUFBLE1BQU0sRUFBRSxDQUNOO0FBQ0VDLE1BQUFBLElBQUksRUFBRSxTQURSO0FBRUU1RCxNQUFBQSxJQUFJLEVBQUVvQiwyREFGUjtBQUdFNkMsTUFBQUEsTUFBTSxFQUFFO0FBQ05nTSxRQUFBQSxJQUFJLEVBQUUsUUFEQTtBQUVOQyxRQUFBQSxpQkFBaUIsRUFBRSxVQUZiO0FBR05DLFFBQUFBLEtBQUssRUFBRSxDQUNMO0FBQ0VyTSxVQUFBQSxLQUFLLEVBQUUsdUJBRFQ7QUFFRXdFLFVBQUFBLEdBQUcsRUFBRSxFQUZQO0FBR0U4SCxVQUFBQSxRQUFRLEVBQUU7QUFDUmxRLFlBQUFBLGFBQWEsRUFBRThLLGdCQUFnQixDQUFDN0ssR0FEeEI7QUFFUmtRLFlBQUFBLGNBQWMsRUFBRXJGLGdCQUFnQixDQUFDcEgsSUFGekI7QUFHUnpDLFlBQUFBLEtBQUssRUFBRTtBQUNMQSxjQUFBQSxLQUFLLEVBQUU7QUFERjtBQUhDO0FBSFosU0FESztBQUhEO0FBSFYsS0FETSxFQXNCTjtBQUFFeUMsTUFBQUEsSUFBSSxFQUFFLFdBQVI7QUFBcUI1RCxNQUFBQSxJQUFJLEVBQUVvQiwyREFBM0I7QUFBNkM2QyxNQUFBQSxNQUFNLEVBQUU7QUFBRWlNLFFBQUFBLGlCQUFpQixFQUFFO0FBQXJCO0FBQXJELEtBdEJNLEVBdUJOO0FBQUV0TSxNQUFBQSxJQUFJLEVBQUUsV0FBUjtBQUFxQjVELE1BQUFBLElBQUksRUFBRW9CLHlEQUEzQjtBQUEyQzZDLE1BQUFBLE1BQU0sRUFBRTtBQUFFaU0sUUFBQUEsaUJBQWlCLEVBQUU7QUFBckI7QUFBbkQsS0F2Qk0sRUF3Qk47QUFBRXRNLE1BQUFBLElBQUksRUFBRSxVQUFSO0FBQW9CNUQsTUFBQUEsSUFBSSxFQUFFb0IsMkRBQTFCO0FBQTRDNkMsTUFBQUEsTUFBTSxFQUFFO0FBQUVpTSxRQUFBQSxpQkFBaUIsRUFBRSxVQUFyQjtBQUFpQ0QsUUFBQUEsSUFBSSxFQUFFO0FBQXZDO0FBQXBELEtBeEJNLENBRHlCO0FBMkJqQzFMLElBQUFBLElBQUksRUFBRTtBQUNKQyxNQUFBQSwwQkFBMEIsRUFBRTtBQUR4QjtBQTNCMkIsR0FBckIsQ0FBZCxDQUQrRyxDQWdDL0c7O0FBQ0EsUUFBTXFILFNBQVMsR0FBR1AsSUFBSSxDQUFDNU0sR0FBTCxDQUFTNlIsb0JBQVQsRUFBK0I3TyxJQUEvQixDQUFvQyxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVSxDQUFBQSxDQUFDLFNBQUQsSUFBQUEsQ0FBQyxXQUFELFlBQUFBLENBQUMsQ0FBRTRNLFNBQUgsS0FBZ0I3TSxDQUFoQixhQUFnQkEsQ0FBaEIsdUJBQWdCQSxDQUFDLENBQUU2TSxTQUFuQixDQUE5QyxDQUFsQjs7QUFFQSxPQUFLLE1BQU1uQixLQUFYLElBQW9CeEIsU0FBcEIsRUFBK0I7QUFDN0IyRCxJQUFBQSxLQUFLLENBQUM1QixHQUFOLENBQVVQLEtBQVY7QUFDRDs7QUFFRCxTQUFPbUMsS0FBUDtBQUNEOztBQUVELFNBQVNlLG9CQUFULENBQThCakYsSUFBOUIsRUFBbUQ7QUFDakQsUUFBTU8sU0FBUyxHQUFHd0QsdUZBQWtCLENBQUMvRCxJQUFELENBQXBDOztBQUNBLE1BQUksQ0FBQ08sU0FBTCxFQUFnQjtBQUNkO0FBQ0Q7O0FBRUQsU0FBTztBQUNMNkQsSUFBQUEsT0FBTyxFQUFFN0QsU0FBUyxDQUFDNkQsT0FEZDtBQUVMbEIsSUFBQUEsU0FBUyxFQUFFM0MsU0FBUyxDQUFDMkMsU0FBVixHQUFzQixJQUY1QjtBQUdMeEwsSUFBQUEsUUFBUSxFQUFFNkksU0FBUyxDQUFDN0ksUUFIZjtBQUlMd04sSUFBQUEsU0FBUyxFQUFFM0UsU0FBUyxDQUFDMkU7QUFKaEIsR0FBUDtBQU1EOztBQUVNLFNBQVNDLGlCQUFULENBQTJCbkYsSUFBM0IsRUFBbUU7QUFDeEUsTUFBSW9GLGFBQTRCLEdBQUc7QUFDakNoQixJQUFBQSxPQUFPLEVBQUUsRUFEd0I7QUFFakMzQixJQUFBQSxLQUFLLEVBQUUsRUFGMEI7QUFHakNNLElBQUFBLFNBQVMsRUFBRSxFQUhzQjtBQUlqQ3lCLElBQUFBLFFBQVEsRUFBRTtBQUp1QixHQUFuQztBQU1BLE1BQUl6QixTQUFtQixHQUFHLEVBQTFCOztBQUVBLE9BQUssSUFBSXBQLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdxTSxJQUFJLENBQUM3TSxNQUF6QixFQUFpQ1EsQ0FBQyxFQUFsQyxFQUFzQztBQUNwQyxVQUFNd0QsSUFBSSxHQUFHNkksSUFBSSxDQUFDcUYsR0FBTCxDQUFTMVIsQ0FBVCxDQUFiLENBRG9DLENBR3BDOztBQUNBLFFBQUksQ0FBQ3lSLGFBQWEsQ0FBQ2hCLE9BQW5CLEVBQTRCO0FBQzFCZ0IsTUFBQUEsYUFBYSxDQUFDaEIsT0FBZCxHQUF3QmpOLElBQUksQ0FBQ2lOLE9BQTdCO0FBQ0QsS0FObUMsQ0FRcEM7OztBQUNBLFFBQUksQ0FBQ3JCLFNBQVMsQ0FBQzFFLElBQVYsQ0FBZ0JpSCxDQUFELElBQU9BLENBQUMsS0FBS25PLElBQUksQ0FBQ2tNLFdBQWpDLENBQUwsRUFBb0Q7QUFDbEROLE1BQUFBLFNBQVMsQ0FBQ3ZMLElBQVYsQ0FBZUwsSUFBSSxDQUFDa00sV0FBcEI7QUFDQStCLE1BQUFBLGFBQWEsQ0FBQ3JDLFNBQWQsQ0FBeUIsSUFBR0EsU0FBUyxDQUFDNVAsTUFBTyxFQUE3QyxJQUFrRDtBQUNoRGtRLFFBQUFBLFdBQVcsRUFBRWxNLElBQUksQ0FBQ2tNLFdBRDhCO0FBRWhEdk8sUUFBQUEsSUFBSSxFQUFFcUMsSUFBSSxDQUFDdU47QUFGcUMsT0FBbEQ7QUFJRCxLQWZtQyxDQWlCcEM7OztBQUNBVSxJQUFBQSxhQUFhLENBQUMzQyxLQUFkLENBQW9CakwsSUFBcEIsQ0FBeUI7QUFDdkI0TSxNQUFBQSxPQUFPLEVBQUVqTixJQUFJLENBQUNpTixPQURTO0FBRXZCMUIsTUFBQUEsTUFBTSxFQUFFdkwsSUFBSSxDQUFDdUwsTUFGVTtBQUd2QmhMLE1BQUFBLFFBQVEsRUFBRVAsSUFBSSxDQUFDTyxRQUFMLEdBQWdCLElBSEg7QUFJdkJpTCxNQUFBQSxVQUFVLEVBQUV4TCxJQUFJLENBQUNvTSxZQUFMLEdBQ1IsQ0FDRTtBQUNFVixRQUFBQSxPQUFPLEVBQUUsVUFEWDtBQUVFSCxRQUFBQSxNQUFNLEVBQUV2TCxJQUFJLENBQUNvTSxZQUZmO0FBR0VhLFFBQUFBLE9BQU8sRUFBRWpOLElBQUksQ0FBQ2lOO0FBSGhCLE9BREYsQ0FEUSxHQVFSLEVBWm1CO0FBYXZCbUIsTUFBQUEsS0FBSyxFQUFFLENBYmdCO0FBY3ZCbEIsTUFBQUEsSUFBSSxFQUFFbE4sSUFBSSxDQUFDa04sSUFBTCxDQUFValIsR0FBVixDQUFla1IsQ0FBRCxzQkFDZkEsQ0FEZTtBQUVsQkMsUUFBQUEsU0FBUyxFQUFFRCxDQUFDLENBQUNDLFNBQUYsR0FBYztBQUZQLFFBQWQsQ0FkaUI7QUFrQnZCakIsTUFBQUEsYUFBYSxFQUFFbk0sSUFBSSxDQUFDbU0sYUFsQkc7QUFtQnZCTixNQUFBQSxTQUFTLEVBQ1B3QyxNQUFNLENBQUNDLElBQVAsQ0FBWUwsYUFBYSxDQUFDckMsU0FBMUIsRUFBcUMxRSxJQUFyQyxDQUNHN0ssR0FBRCxJQUFTNFIsYUFBYSxDQUFDckMsU0FBZCxDQUF3QnZQLEdBQXhCLEVBQTZCNlAsV0FBN0IsS0FBNkNsTSxJQUFJLENBQUNrTSxXQUQ3RCxLQUVLLEVBdEJnQjtBQXVCdkJILE1BQUFBLFNBQVMsRUFBRS9MLElBQUksQ0FBQytMLFNBQUwsR0FBaUIsSUF2Qkw7QUF3QnZCcE8sTUFBQUEsSUFBSSxFQUFFcUMsSUFBSSxDQUFDckMsSUF4Qlk7QUF5QnZCMFAsTUFBQUEsUUFBUSxFQUFFck4sSUFBSSxDQUFDcU4sUUFBTCxHQUFnQnJOLElBQUksQ0FBQ3FOLFFBQXJCLEdBQWdDO0FBekJuQixLQUF6QjtBQTJCRDs7QUFFRCxTQUFPO0FBQUV4RSxJQUFBQSxJQUFJLEVBQUUsQ0FBQ29GLGFBQUQsQ0FBUjtBQUF5Qk0sSUFBQUEsS0FBSyxFQUFFLENBQWhDO0FBQW1DekwsSUFBQUEsS0FBSyxFQUFFLENBQTFDO0FBQTZDMEwsSUFBQUEsTUFBTSxFQUFFLENBQXJEO0FBQXdEQyxJQUFBQSxNQUFNLEVBQUU7QUFBaEUsR0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUNuTEQ7QUFFTyxTQUFTckcsaUJBQVQsQ0FBMkJ6SyxJQUEzQixFQUFxRDtBQUMxRCxNQUFJLENBQUNBLElBQUwsRUFBVztBQUNULFdBQU8sRUFBUDtBQUNEOztBQUNELFFBQU1rTCxJQUFTLEdBQUc2RixtREFBQSxDQUFhL1EsSUFBYixDQUFsQjtBQUNBMFEsRUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVl6RixJQUFaLEVBQWtCOEYsT0FBbEIsQ0FBMkJ0UyxHQUFELElBQVM7QUFDakMsVUFBTUgsS0FBSyxHQUFHMk0sSUFBSSxDQUFDeE0sR0FBRCxDQUFsQjs7QUFDQSxRQUFJLE9BQU9ILEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0IyTSxNQUFBQSxJQUFJLENBQUN4TSxHQUFELENBQUosR0FBWUksTUFBTSxDQUFDUCxLQUFELENBQWxCO0FBQ0Q7QUFDRixHQUxEO0FBTUEsU0FBT21OLElBQUksQ0FBQ1csU0FBTCxDQUFlbkIsSUFBZixDQUFQO0FBQ0Q7QUFFTSxTQUFTNUQsaUJBQVQsQ0FBMkJ0SCxJQUEzQixFQUFxRDtBQUMxRCxNQUFJLENBQUNBLElBQUwsRUFBVztBQUNULFdBQU8sRUFBUDtBQUNEOztBQUNELE1BQUk7QUFDRixXQUFPK1EsdURBQUEsQ0FBaUJyRixJQUFJLENBQUNDLEtBQUwsQ0FBVzNMLElBQVgsQ0FBakIsQ0FBUDtBQUNELEdBRkQsQ0FFRSxNQUFNO0FBQ04sV0FBT0EsSUFBUDtBQUNEO0FBQ0Y7Ozs7Ozs7O0FDeEJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLFFBQVE7QUFDN0IsZUFBZSxVQUFVO0FBQ3pCLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7OztBQ2xEQSxZQUFZLG1CQUFPLENBQUMsc0ZBQU87QUFDM0IsY0FBYyxtQkFBTyxDQUFDLHlGQUFTO0FBQy9CLGVBQWUsdUNBQTBCO0FBQ3pDLGtCQUFrQiwwQ0FBNkI7QUFDL0MsZUFBZSxtQkFBTyxDQUFDLHdGQUFXOztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQ7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN4QkEsYUFBYTs7QUFFYixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGtCQUFrQjs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3ZFQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVk7QUFDWixlQUFlLG1CQUFPLENBQUMsd0ZBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCLGVBQWUsbUJBQU8sQ0FBQyx3RkFBVztBQUNsQztBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOEJBQThCO0FBQ3REO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCOzs7Ozs7OztBQ2xGdkIsa0JBQWtCLG1CQUFPLENBQUMsc0ZBQU87QUFDakMsa0JBQWtCLG1CQUFPLENBQUMseUZBQVM7QUFDbkMsa0JBQWtCLDBDQUE2Qjs7QUFFL0M7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOzs7Ozs7OztBQzlDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixtQkFBTyxDQUFDLCtGQUFpQjtBQUNoRCx1QkFBdUIsbUJBQU8sQ0FBQyxpR0FBbUI7QUFDbEQsdUJBQXVCLG1CQUFPLENBQUMsd0dBQTBCO0FBQ3pELHVCQUF1QixtQkFBTyxDQUFDLG1HQUFxQjtBQUNwRCx1QkFBdUIsbUJBQU8sQ0FBQyw0RkFBYztBQUM3Qyx1QkFBdUIsbUJBQU8sQ0FBQyxvR0FBc0I7QUFDckQsdUJBQXVCLG1CQUFPLENBQUMsK0ZBQWlCOztBQUVoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0Esc0JBQXNCLHVDQUF1QztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7O0FDeENBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsY0FBYyxtQkFBTyxDQUFDLHlGQUFTO0FBQy9CLGNBQWMsNENBQXVDOztBQUVyRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7QUN6REEsYUFBYSxtQkFBTyxDQUFDLE9BQVE7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckMsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMxR0E7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL05vZGVHcmFwaFNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvVHJhY2VUb0xvZ3MvS2V5VmFsdWVJbnB1dC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1RyYWNlVG9Mb2dzL1RyYWNlVG9Mb2dzU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9UcmFjZVRvTWV0cmljcy9UcmFjZVRvTWV0cmljc1NldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL3V0aWxzL3RyYWNpbmcudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2phZWdlci9jb21wb25lbnRzL0FkdmFuY2VkT3B0aW9ucy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2phZWdlci9jb21wb25lbnRzL0NvbmZpZ0VkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2phZWdlci9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvamFlZ2VyL2NvbXBvbmVudHMvU2VhcmNoRm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2phZWdlci9kYXRhc291cmNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9qYWVnZXIvZ3JhcGhUcmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2phZWdlci9tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2phZWdlci9yZXNwb25zZVRyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvamFlZ2VyL3V0aWwudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL2xvZ2ZtdC1ucG0tMS4zLjItMzdmYWJlZTQzNi02MzlkMzI3YzFlLnppcC9ub2RlX21vZHVsZXMvbG9nZm10L2xpYi9ib2R5X3BhcnNlci5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvbG9nZm10LW5wbS0xLjMuMi0zN2ZhYmVlNDM2LTYzOWQzMjdjMWUuemlwL25vZGVfbW9kdWxlcy9sb2dmbXQvbGliL2JvZHlfcGFyc2VyX3N0cmVhbS5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvbG9nZm10LW5wbS0xLjMuMi0zN2ZhYmVlNDM2LTYzOWQzMjdjMWUuemlwL25vZGVfbW9kdWxlcy9sb2dmbXQvbGliL2xvZ2ZtdF9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL2xvZ2ZtdC1ucG0tMS4zLjItMzdmYWJlZTQzNi02MzlkMzI3YzFlLnppcC9ub2RlX21vZHVsZXMvbG9nZm10L2xpYi9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL2xvZ2ZtdC1ucG0tMS4zLjItMzdmYWJlZTQzNi02MzlkMzI3YzFlLnppcC9ub2RlX21vZHVsZXMvbG9nZm10L2xpYi9yZXF1ZXN0X2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvbG9nZm10LW5wbS0xLjMuMi0zN2ZhYmVlNDM2LTYzOWQzMjdjMWUuemlwL25vZGVfbW9kdWxlcy9sb2dmbXQvbGliL3N0cmVhbWluZy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvbG9nZm10LW5wbS0xLjMuMi0zN2ZhYmVlNDM2LTYzOWQzMjdjMWUuemlwL25vZGVfbW9kdWxlcy9sb2dmbXQvbGliL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvbG9nZm10LW5wbS0xLjMuMi0zN2ZhYmVlNDM2LTYzOWQzMjdjMWUuemlwL25vZGVfbW9kdWxlcy9sb2dmbXQvbG9nZm10LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9zcGxpdC1ucG0tMC4yLjEwLWE5NTBkYzhjODItOWViMTE5NTYwOC56aXAvbm9kZV9tb2R1bGVzL3NwbGl0L2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS90aHJvdWdoLW5wbS0yLjMuOC1kZjVmNzJhMTZlLWEzOGMzZTA1OTguemlwL25vZGVfbW9kdWxlcy90aHJvdWdoL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvaWdub3JlZHwvb3B0L2dvcGF0aC9zcmMvZ3JhZmFuYS8ueWFybi9jYWNoZS9sb2dmbXQtbnBtLTEuMy4yLTM3ZmFiZWU0MzYtNjM5ZDMyN2MxZS56aXAvbm9kZV9tb2R1bGVzL2xvZ2ZtdC9saWJ8c3RyZWFtIiwid2VicGFjazovL2dyYWZhbmEvaWdub3JlZHwvb3B0L2dvcGF0aC9zcmMvZ3JhZmFuYS8ueWFybi9jYWNoZS9zcGxpdC1ucG0tMC4yLjEwLWE5NTBkYzhjODItOWViMTE5NTYwOC56aXAvbm9kZV9tb2R1bGVzL3NwbGl0fHN0cmluZ19kZWNvZGVyIiwid2VicGFjazovL2dyYWZhbmEvaWdub3JlZHwvb3B0L2dvcGF0aC9zcmMvZ3JhZmFuYS8ueWFybi9jYWNoZS90aHJvdWdoLW5wbS0yLjMuOC1kZjVmNzJhMTZlLWEzOGMzZTA1OTguemlwL25vZGVfbW9kdWxlcy90aHJvdWdofHN0cmVhbSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgRGF0YVNvdXJjZUpzb25EYXRhLFxuICBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzLFxuICBHcmFmYW5hVGhlbWUsXG4gIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElubGluZVN3aXRjaCwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVHcmFwaE9wdGlvbnMge1xuICBlbmFibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb2RlR3JhcGhEYXRhIGV4dGVuZHMgRGF0YVNvdXJjZUpzb25EYXRhIHtcbiAgbm9kZUdyYXBoPzogTm9kZUdyYXBoT3B0aW9ucztcbn1cblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wczxOb2RlR3JhcGhEYXRhPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gTm9kZUdyYXBoU2V0dGluZ3MoeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+Tm9kZSBHcmFwaDwvaDM+XG4gICAgICA8SW5saW5lRmllbGRSb3cgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgdG9vbHRpcD1cIkVuYWJsZXMgdGhlIE5vZGUgR3JhcGggdmlzdWFsaXphdGlvbiBpbiB0aGUgdHJhY2Ugdmlld2VyLlwiXG4gICAgICAgICAgbGFiZWw9XCJFbmFibGUgTm9kZSBHcmFwaFwiXG4gICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgID5cbiAgICAgICAgICA8SW5saW5lU3dpdGNoXG4gICAgICAgICAgICBpZD1cImVuYWJsZU5vZGVHcmFwaFwiXG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS5ub2RlR3JhcGg/LmVuYWJsZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICdub2RlR3JhcGgnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS5ub2RlR3JhcGgsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4gKHtcbiAgY29udGFpbmVyOiBjc3NgXG4gICAgbGFiZWw6IGNvbnRhaW5lcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgYCxcbiAgcm93OiBjc3NgXG4gICAgbGFiZWw6IHJvdztcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUsIEtleVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTZWdtZW50SW5wdXQsIHVzZVN0eWxlcywgSW5saW5lTGFiZWwsIEljb24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmNvbnN0IEVRX1dJRFRIID0gMzsgLy8gPSAyNHB4IGluIGlubGluZSBsYWJlbFxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB2YWx1ZXM6IEFycmF5PEtleVZhbHVlPHN0cmluZz4+O1xuICBvbkNoYW5nZTogKHZhbHVlczogQXJyYXk8S2V5VmFsdWU8c3RyaW5nPj4pID0+IHZvaWQ7XG4gIGlkPzogc3RyaW5nO1xuICBrZXlQbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdmFsdWVQbGFjZWhvbGRlcj86IHN0cmluZztcbn1cblxuY29uc3QgS2V5VmFsdWVJbnB1dCA9ICh7XG4gIHZhbHVlcyxcbiAgb25DaGFuZ2UsXG4gIGlkLFxuICBrZXlQbGFjZWhvbGRlciA9ICdLZXknLFxuICB2YWx1ZVBsYWNlaG9sZGVyID0gJ1ZhbHVlIChvcHRpb25hbCknLFxufTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAge3ZhbHVlcy5sZW5ndGggPyAoXG4gICAgICAgIHZhbHVlcy5tYXAoKHZhbHVlLCBpZHgpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhaXJ9IGtleT17aWR4fT5cbiAgICAgICAgICAgIDxTZWdtZW50SW5wdXRcbiAgICAgICAgICAgICAgaWQ9e2Ake2lkfS1rZXktJHtpZHh9YH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2tleVBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUua2V5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgICAgICAgIHZhbHVlcy5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgIHYua2V5ID0gU3RyaW5nKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbmxpbmVMYWJlbCBhcmlhLWxhYmVsPVwiZXF1YWxzXCIgY2xhc3NOYW1lPXtzdHlsZXMub3BlcmF0b3J9IHdpZHRoPXtFUV9XSURUSH0+XG4gICAgICAgICAgICAgID1cbiAgICAgICAgICAgIDwvSW5saW5lTGFiZWw+XG4gICAgICAgICAgICA8U2VnbWVudElucHV0XG4gICAgICAgICAgICAgIGlkPXtgJHtpZH0tdmFsdWUtJHtpZHh9YH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3ZhbHVlUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgICB2YWx1ZXMubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2LnZhbHVlID0gU3RyaW5nKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoWy4uLnZhbHVlcy5zbGljZSgwLCBpZHgpLCAuLi52YWx1ZXMuc2xpY2UoaWR4ICsgMSldKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1wYXJ0XCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlbW92ZSB0YWdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwidGltZXNcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7aWR4ID09PSB2YWx1ZXMubGVuZ3RoIC0gMSA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKFsuLi52YWx1ZXMsIHsga2V5OiAnJywgdmFsdWU6ICcnIH1dKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LXBhcnRcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGQgdGFnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShbLi4udmFsdWVzLCB7IGtleTogJycsIHZhbHVlOiAnJyB9XSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1wYXJ0XCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQWRkIHRhZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwicGx1c1wiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleVZhbHVlSW5wdXQ7XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogJHt0aGVtZS5zcGFjaW5nLnhzfSAwO1xuICBgLFxuICBwYWlyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGAsXG4gIG9wZXJhdG9yOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUucGFsZXR0ZS5vcmFuZ2V9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgRGF0YVNvdXJjZUpzb25EYXRhLFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyxcbiAgR3JhZmFuYVRoZW1lLFxuICBLZXlWYWx1ZSxcbiAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VQaWNrZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5wdXQsIFRhZ3NJbnB1dCwgdXNlU3R5bGVzLCBJbmxpbmVTd2l0Y2ggfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCBLZXlWYWx1ZUlucHV0IGZyb20gJy4vS2V5VmFsdWVJbnB1dCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2VUb0xvZ3NPcHRpb25zIHtcbiAgZGF0YXNvdXJjZVVpZD86IHN0cmluZztcbiAgdGFncz86IHN0cmluZ1tdO1xuICBtYXBwZWRUYWdzPzogQXJyYXk8S2V5VmFsdWU8c3RyaW5nPj47XG4gIG1hcFRhZ05hbWVzRW5hYmxlZD86IGJvb2xlYW47XG4gIHNwYW5TdGFydFRpbWVTaGlmdD86IHN0cmluZztcbiAgc3BhbkVuZFRpbWVTaGlmdD86IHN0cmluZztcbiAgZmlsdGVyQnlUcmFjZUlEPzogYm9vbGVhbjtcbiAgZmlsdGVyQnlTcGFuSUQ/OiBib29sZWFuO1xuICBsb2tpU2VhcmNoPzogYm9vbGVhbjsgLy8gbGVnYWN5XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2VUb0xvZ3NEYXRhIGV4dGVuZHMgRGF0YVNvdXJjZUpzb25EYXRhIHtcbiAgdHJhY2VzVG9Mb2dzPzogVHJhY2VUb0xvZ3NPcHRpb25zO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzPFRyYWNlVG9Mb2dzRGF0YT4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIFRyYWNlVG9Mb2dzU2V0dGluZ3MoeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHsgd2lkdGg6ICcxMDAlJyB9KX0+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+VHJhY2UgdG8gbG9nczwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1RleHR9PlxuICAgICAgICBUcmFjZSB0byBsb2dzIGxldHMgeW91IG5hdmlnYXRlIGZyb20gYSB0cmFjZSBzcGFuIHRvIHRoZSBzZWxlY3RlZCBkYXRhIHNvdXJjZSZhcG9zO3MgbG9ncy5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZCB0b29sdGlwPVwiVGhlIGRhdGEgc291cmNlIHRoZSB0cmFjZSBpcyBnb2luZyB0byBuYXZpZ2F0ZSB0b1wiIGxhYmVsPVwiRGF0YSBzb3VyY2VcIiBsYWJlbFdpZHRoPXsyNn0+XG4gICAgICAgICAgPERhdGFTb3VyY2VQaWNrZXJcbiAgICAgICAgICAgIGlucHV0SWQ9XCJ0cmFjZS10by1sb2dzLWRhdGEtc291cmNlLXBpY2tlclwiXG4gICAgICAgICAgICBmaWx0ZXI9eyhkcykgPT4ge1xuICAgICAgICAgICAgICAvLyBUcmFjZSB0byBsb2dzIG9ubHkgc3VwcG9ydHMgbG9raSBhbmQgc3BsdW5rIGF0IHRoZSBtb21lbnRcbiAgICAgICAgICAgICAgcmV0dXJuIGRzLnR5cGUgPT09ICdsb2tpJyB8fCBkcy50eXBlID09PSAnZ3JhZmFuYS1zcGx1bmstZGF0YXNvdXJjZSc7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY3VycmVudD17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LmRhdGFzb3VyY2VVaWR9XG4gICAgICAgICAgICBub0RlZmF1bHQ9e3RydWV9XG4gICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGRzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncykgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogZHMudWlkLFxuICAgICAgICAgICAgICAgIHRhZ3M6IG9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy50YWdzLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICB7b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/Lm1hcFRhZ05hbWVzRW5hYmxlZCA/IChcbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgICAgdG9vbHRpcD1cIlRhZ3MgdGhhdCB3aWxsIGJlIHVzZWQgaW4gdGhlIExva2kgcXVlcnkuIERlZmF1bHQgdGFnczogJ2NsdXN0ZXInLCAnaG9zdG5hbWUnLCAnbmFtZXNwYWNlJywgJ3BvZCdcIlxuICAgICAgICAgICAgbGFiZWw9XCJUYWdzXCJcbiAgICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxLZXlWYWx1ZUlucHV0XG4gICAgICAgICAgICAgIGtleVBsYWNlaG9sZGVyPVwiVGFnXCJcbiAgICAgICAgICAgICAgdmFsdWVzPXtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8ubWFwcGVkVGFncyA/P1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy50YWdzPy5tYXAoKHRhZykgPT4gKHsga2V5OiB0YWcgfSkpID8/XG4gICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICAgIG1hcHBlZFRhZ3M6IHYsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgKSA6IChcbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgICAgdG9vbHRpcD1cIlRhZ3MgdGhhdCB3aWxsIGJlIHVzZWQgaW4gdGhlIExva2kgcXVlcnkuIERlZmF1bHQgdGFnczogJ2NsdXN0ZXInLCAnaG9zdG5hbWUnLCAnbmFtZXNwYWNlJywgJ3BvZCdcIlxuICAgICAgICAgICAgbGFiZWw9XCJUYWdzXCJcbiAgICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUYWdzSW5wdXRcbiAgICAgICAgICAgICAgdGFncz17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LnRhZ3N9XG4gICAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0YWdzKSA9PlxuICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgICB0YWdzOiB0YWdzLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICl9XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJNYXAgdGFnIG5hbWVzXCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIk1hcCB0cmFjZSB0YWcgbmFtZXMgdG8gbG9nIGxhYmVsIG5hbWVzLiBFeDogazhzLnBvZC5uYW1lIC0+IHBvZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5saW5lU3dpdGNoXG4gICAgICAgICAgICBpZD1cIm1hcFRhZ05hbWVzXCJcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8ubWFwVGFnTmFtZXNFbmFibGVkID8/IGZhbHNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgIG1hcFRhZ05hbWVzRW5hYmxlZDogZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgIGxhYmVsPVwiU3BhbiBzdGFydCB0aW1lIHNoaWZ0XCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIlNoaWZ0cyB0aGUgc3RhcnQgdGltZSBvZiB0aGUgc3Bhbi4gRGVmYXVsdCAwIChUaW1lIHVuaXRzIGNhbiBiZSB1c2VkIGhlcmUsIGZvciBleGFtcGxlOiA1cywgMW0sIDNoKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMWhcIlxuICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICBzcGFuU3RhcnRUaW1lU2hpZnQ6IHYuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8uc3BhblN0YXJ0VGltZVNoaWZ0IHx8ICcnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgIGxhYmVsPVwiU3BhbiBlbmQgdGltZSBzaGlmdFwiXG4gICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgZ3Jvd1xuICAgICAgICAgIHRvb2x0aXA9XCJTaGlmdHMgdGhlIGVuZCB0aW1lIG9mIHRoZSBzcGFuLiBEZWZhdWx0IDAgVGltZSB1bml0cyBjYW4gYmUgdXNlZCBoZXJlLCBmb3IgZXhhbXBsZTogNXMsIDFtLCAzaFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMWhcIlxuICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICBzcGFuRW5kVGltZVNoaWZ0OiB2LmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LnNwYW5FbmRUaW1lU2hpZnQgfHwgJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgYnkgVHJhY2UgSURcIlxuICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgIGdyb3dcbiAgICAgICAgICB0b29sdGlwPVwiRmlsdGVycyBsb2dzIGJ5IFRyYWNlIElELiBBcHBlbmRzICd8PTx0cmFjZSBpZD4nIHRvIHRoZSBxdWVyeS5cIlxuICAgICAgICA+XG4gICAgICAgICAgPElubGluZVN3aXRjaFxuICAgICAgICAgICAgaWQ9XCJmaWx0ZXJCeVRyYWNlSURcIlxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy5maWx0ZXJCeVRyYWNlSUR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgZmlsdGVyQnlUcmFjZUlEOiBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgYnkgU3BhbiBJRFwiXG4gICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgZ3Jvd1xuICAgICAgICAgIHRvb2x0aXA9XCJGaWx0ZXJzIGxvZ3MgYnkgU3BhbiBJRC4gQXBwZW5kcyAnfD08c3BhbiBpZD4nIHRvIHRoZSBxdWVyeS5cIlxuICAgICAgICA+XG4gICAgICAgICAgPElubGluZVN3aXRjaFxuICAgICAgICAgICAgaWQ9XCJmaWx0ZXJCeVNwYW5JRFwiXG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LmZpbHRlckJ5U3BhbklEfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgIGZpbHRlckJ5U3BhbklEOiBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICBpbmZvVGV4dDogY3NzYFxuICAgIHBhZGRpbmctYm90dG9tOiAke3RoZW1lLnNwYWNpbmcubWR9O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0U2VtaVdlYWt9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgRGF0YVNvdXJjZUpzb25EYXRhLFxuICBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzLFxuICBHcmFmYW5hVGhlbWUsXG4gIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGlja2VyIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5wdXQsIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFjZVRvTWV0cmljc09wdGlvbnMge1xuICBkYXRhc291cmNlVWlkPzogc3RyaW5nO1xuICBxdWVyeTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNlVG9NZXRyaWNzRGF0YSBleHRlbmRzIERhdGFTb3VyY2VKc29uRGF0YSB7XG4gIHRyYWNlc1RvTWV0cmljcz86IFRyYWNlVG9NZXRyaWNzT3B0aW9ucztcbn1cblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wczxUcmFjZVRvTWV0cmljc0RhdGE+IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBUcmFjZVRvTWV0cmljc1NldHRpbmdzKHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH06IFByb3BzKSB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcyh7IHdpZHRoOiAnMTAwJScgfSl9PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZ1wiPlRyYWNlIHRvIG1ldHJpY3M8L2gzPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9UZXh0fT5cbiAgICAgICAgVHJhY2UgdG8gbWV0cmljcyBsZXRzIHlvdSBuYXZpZ2F0ZSBmcm9tIGEgdHJhY2Ugc3BhbiB0byB0aGUgc2VsZWN0ZWQgZGF0YSBzb3VyY2UuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPElubGluZUZpZWxkUm93IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgIDxJbmxpbmVGaWVsZCB0b29sdGlwPVwiVGhlIGRhdGEgc291cmNlIHRoZSB0cmFjZSBpcyBnb2luZyB0byBuYXZpZ2F0ZSB0b1wiIGxhYmVsPVwiRGF0YSBzb3VyY2VcIiBsYWJlbFdpZHRoPXsyNn0+XG4gICAgICAgICAgPERhdGFTb3VyY2VQaWNrZXJcbiAgICAgICAgICAgIGlucHV0SWQ9XCJ0cmFjZS10by1tZXRyaWNzLWRhdGEtc291cmNlLXBpY2tlclwiXG4gICAgICAgICAgICBwbHVnaW5JZD1cInByb21ldGhldXNcIlxuICAgICAgICAgICAgY3VycmVudD17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3M/LmRhdGFzb3VyY2VVaWR9XG4gICAgICAgICAgICBub0RlZmF1bHQ9e3RydWV9XG4gICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGRzKSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTWV0cmljcycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTWV0cmljcyxcbiAgICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiBkcy51aWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAge29wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzPy5kYXRhc291cmNlVWlkID8gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgZmlsbD1cInRleHRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTWV0cmljcycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTWV0cmljcyxcbiAgICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDbGVhclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJRdWVyeVwiXG4gICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgdG9vbHRpcD1cIlRoZSBQcm9tZXRoZXVzIHF1ZXJ5IHRoYXQgd2lsbCBydW4gd2hlbiBuYXZpZ2F0aW5nIGZyb20gYSB0cmFjZSB0byBtZXRyaWNzXCJcbiAgICAgICAgICBncm93XG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiUXVlcnlcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3M/LnF1ZXJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9NZXRyaWNzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBlLmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGluZm9UZXh0OiBjc3NgXG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gIGAsXG4gIHJvdzogY3NzYFxuICAgIGxhYmVsOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBgLFxufSk7XG4iLCIvKipcbiAqIEdldCBub24gb3ZlcmxhcHBpbmcgZHVyYXRpb24gb2YgdGhlIHJhbmdlcyBhcyB0aGV5IGNhbiBvdmVybGFwIG9yIGhhdmUgZ2Fwcy5cbiAqL1xuaW1wb3J0IHsgRmllbGRUeXBlLCBNdXRhYmxlRGF0YUZyYW1lLCBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzIGFzIEZpZWxkcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9uT3ZlcmxhcHBpbmdEdXJhdGlvbihyYW5nZXM6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+KTogbnVtYmVyIHtcbiAgcmFuZ2VzLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKTtcbiAgY29uc3QgbWVyZ2VkUmFuZ2VzID0gcmFuZ2VzLnJlZHVjZSgoYWNjLCByYW5nZSkgPT4ge1xuICAgIGlmICghYWNjLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtyYW5nZV07XG4gICAgfVxuICAgIGNvbnN0IHRhaWwgPSBhY2Muc2xpY2UoLTEpWzBdO1xuICAgIGNvbnN0IFtwcmV2U3RhcnQsIHByZXZFbmRdID0gdGFpbDtcbiAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSByYW5nZTtcbiAgICBpZiAoZW5kIDwgcHJldkVuZCkge1xuICAgICAgLy8gSW4gdGhpcyBjYXNlIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IGluc2lkZSB0aGUgcHJldiByYW5nZSBzbyB3ZSBjYW4ganVzdCBpZ25vcmUgaXQuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IHByZXZFbmQpIHtcbiAgICAgIC8vIFRoZXJlIGlzIG5vIG92ZXJsYXAgc28gd2UgY2FuIGp1c3QgYWRkIGl0IHRvIHN0YWNrXG4gICAgICByZXR1cm4gWy4uLmFjYywgcmFuZ2VdO1xuICAgIH1cblxuICAgIC8vIFdlIGtub3cgdGhlcmUgaXMgb3ZlcmxhcCBhbmQgY3VycmVudCByYW5nZSBlbmRzIGxhdGVyIHRoYW4gcHJldmlvdXMgc28gd2UgY2FuIGp1c3QgZXh0ZW5kIHRoZSByYW5nZVxuICAgIHJldHVybiBbLi4uYWNjLnNsaWNlKDAsIC0xKSwgW3ByZXZTdGFydCwgZW5kXV0gYXMgQXJyYXk8W251bWJlciwgbnVtYmVyXT47XG4gIH0sIFtdIGFzIEFycmF5PFtudW1iZXIsIG51bWJlcl0+KTtcblxuICByZXR1cm4gbWVyZ2VkUmFuZ2VzLnJlZHVjZSgoYWNjLCByYW5nZSkgPT4ge1xuICAgIHJldHVybiBhY2MgKyAocmFuZ2VbMV0gLSByYW5nZVswXSk7XG4gIH0sIDApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBtYXAgb2YgdGhlIHNwYW5zIHdpdGggY2hpbGRyZW4gYXJyYXkgZm9yIGVhc2llciBwcm9jZXNzaW5nLiBJdCB3aWxsIGFsc28gY29udGFpbiBlbXB0eSBzcGFucyBpbiBjYXNlXG4gKiBzcGFuIGlzIG1pc3NpbmcgYnV0IG90aGVyIHNwYW5zIGFyZSBpdCdzIGNoaWxkcmVuLiBUaGlzIGlzIG1vcmUgZ2VuZXJpYyBiZWNhdXNlIGl0IG5lZWRzIHRvIGFsbG93IGl0ZXJhdGluZyBvdmVyXG4gKiBib3RoIGFycmF5cyBhbmQgZGF0YWZyYW1lIHZpZXdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNwYW5NYXA8VD4oZ2V0U3BhbjogKGluZGV4OiBudW1iZXIpID0+IHsgc3BhbjogVDsgaWQ6IHN0cmluZzsgcGFyZW50SWRzOiBzdHJpbmdbXSB9IHwgdW5kZWZpbmVkKToge1xuICBbaWQ6IHN0cmluZ106IHsgc3BhbjogVDsgY2hpbGRyZW46IHN0cmluZ1tdIH07XG59IHtcbiAgY29uc3Qgc3Bhbk1hcDogeyBbaWQ6IHN0cmluZ106IHsgc3Bhbj86IFQ7IGNoaWxkcmVuOiBzdHJpbmdbXSB9IH0gPSB7fTtcblxuICBsZXQgc3BhbjtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyAoc3BhbiA9IGdldFNwYW4oaW5kZXgpKSwgISFzcGFuOyBpbmRleCsrKSB7XG4gICAgaWYgKCFzcGFuTWFwW3NwYW4uaWRdKSB7XG4gICAgICBzcGFuTWFwW3NwYW4uaWRdID0ge1xuICAgICAgICBzcGFuOiBzcGFuLnNwYW4sXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwYW5NYXBbc3Bhbi5pZF0uc3BhbiA9IHNwYW4uc3BhbjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBhcmVudElkIG9mIHNwYW4ucGFyZW50SWRzKSB7XG4gICAgICBpZiAocGFyZW50SWQpIHtcbiAgICAgICAgaWYgKCFzcGFuTWFwW3BhcmVudElkXSkge1xuICAgICAgICAgIHNwYW5NYXBbcGFyZW50SWRdID0ge1xuICAgICAgICAgICAgc3BhbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzcGFuLmlkXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwYW5NYXBbcGFyZW50SWRdLmNoaWxkcmVuLnB1c2goc3Bhbi5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNwYW5NYXAgYXMgeyBbaWQ6IHN0cmluZ106IHsgc3BhbjogVDsgY2hpbGRyZW46IHN0cmluZ1tdIH0gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRzKGR1cmF0aW9uOiBudW1iZXIsIHRyYWNlRHVyYXRpb246IG51bWJlciwgc2VsZkR1cmF0aW9uOiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBtYWluOiBgJHt0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKGR1cmF0aW9uKX1tcyAoJHt0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKChkdXJhdGlvbiAvIHRyYWNlRHVyYXRpb24pICogMTAwKX0lKWAsXG4gICAgc2Vjb25kYXJ5OiBgJHt0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKHNlbGZEdXJhdGlvbil9bXMgKCR7dG9GaXhlZE5vVHJhaWxpbmdaZXJvcyhcbiAgICAgIChzZWxmRHVyYXRpb24gLyBkdXJhdGlvbikgKiAxMDBcbiAgICApfSUpYCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9GaXhlZE5vVHJhaWxpbmdaZXJvcyhuOiBudW1iZXIpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQobi50b0ZpeGVkKDIpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgZGVmYXVsdCBmcmFtZXMgdXNlZCB3aGVuIHJldHVybmluZyBkYXRhIGZvciBub2RlIGdyYXBoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZyYW1lcygpIHtcbiAgY29uc3Qgbm9kZXNGcmFtZSA9IG5ldyBNdXRhYmxlRGF0YUZyYW1lKHtcbiAgICBmaWVsZHM6IFtcbiAgICAgIHsgbmFtZTogRmllbGRzLmlkLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy50aXRsZSwgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiBGaWVsZHMuc3ViVGl0bGUsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICAgIHsgbmFtZTogRmllbGRzLm1haW5TdGF0LCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLCBjb25maWc6IHsgZGlzcGxheU5hbWU6ICdUb3RhbCB0aW1lICglIG9mIHRyYWNlKScgfSB9LFxuICAgICAgeyBuYW1lOiBGaWVsZHMuc2Vjb25kYXJ5U3RhdCwgdHlwZTogRmllbGRUeXBlLnN0cmluZywgY29uZmlnOiB7IGRpc3BsYXlOYW1lOiAnU2VsZiB0aW1lICglIG9mIHRvdGFsKScgfSB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBGaWVsZHMuY29sb3IsXG4gICAgICAgIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICAgIGNvbmZpZzogeyBjb2xvcjogeyBtb2RlOiAnY29udGludW91cy1HcllsUmQnIH0sIGRpc3BsYXlOYW1lOiAnU2VsZiB0aW1lIC8gVHJhY2UgZHVyYXRpb24nIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgbWV0YToge1xuICAgICAgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICdub2RlR3JhcGgnLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGVkZ2VzRnJhbWUgPSBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgZmllbGRzOiBbXG4gICAgICB7IG5hbWU6IEZpZWxkcy5pZCwgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiBGaWVsZHMudGFyZ2V0LCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy5zb3VyY2UsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICBdLFxuICAgIG1ldGE6IHtcbiAgICAgIHByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlOiAnbm9kZUdyYXBoJyxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gW25vZGVzRnJhbWUsIGVkZ2VzRnJhbWVdO1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJY29uLCBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElubGluZUxhYmVsLCBJbnB1dCwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBKYWVnZXJRdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgZHVyYXRpb25QbGFjZWhvbGRlciA9ICdlLmcuIDEuMnMsIDEwMG1zLCA1MDB1cyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHF1ZXJ5OiBKYWVnZXJRdWVyeTtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogSmFlZ2VyUXVlcnkpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gQWR2YW5jZWRPcHRpb25zKHsgcXVlcnksIG9uQ2hhbmdlIH06IFByb3BzKSB7XG4gIGNvbnN0IFtzaG93QWR2YW5jZWRPcHRpb25zLCBzZXRTaG93QWR2YW5jZWRPcHRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkdmFuY2VkT3B0aW9uc0NvbnRhaW5lcn0gb25DbGljaz17KCkgPT4gc2V0U2hvd0FkdmFuY2VkT3B0aW9ucyghc2hvd0FkdmFuY2VkT3B0aW9ucyl9PlxuICAgICAgICAgIDxJbmxpbmVMYWJlbCBhcz1cImRpdlwiPlxuICAgICAgICAgICAgQWR2YW5jZWQgb3B0aW9uc3snICd9XG4gICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e3Nob3dBZHZhbmNlZE9wdGlvbnMgPyBzdHlsZXMuYW5nbGVVcCA6IHN0eWxlcy5hbmdsZURvd259IG5hbWU9XCJhbmdsZS1kb3duXCIgLz5cbiAgICAgICAgICA8L0lubGluZUxhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICBpbj17c2hvd0FkdmFuY2VkT3B0aW9uc31cbiAgICAgICAgbW91bnRPbkVudGVyPXt0cnVlfVxuICAgICAgICB1bm1vdW50T25FeGl0PXt0cnVlfVxuICAgICAgICB0aW1lb3V0PXszMDB9XG4gICAgICAgIGNsYXNzTmFtZXM9e3N0eWxlc31cbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJNaW4gRHVyYXRpb25cIiBsYWJlbFdpZHRoPXsyMX0gZ3Jvdz5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJtaW5EdXJhdGlvblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1pbkR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkubWluRHVyYXRpb24gfHwgJyd9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2R1cmF0aW9uUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgbWluRHVyYXRpb246IHYuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIk1heCBEdXJhdGlvblwiIGxhYmVsV2lkdGg9ezIxfSBncm93PlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cIm1heER1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWF4RHVyYXRpb25cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5tYXhEdXJhdGlvbiB8fCAnJ31cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZHVyYXRpb25QbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBtYXhEdXJhdGlvbjogdi5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiTGltaXRcIiBsYWJlbFdpZHRoPXsyMX0gZ3JvdyB0b29sdGlwPVwiTWF4aW11bSBudW1iZXJzIG9mIHJldHVybmVkIHJlc3VsdHNcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJsaW1pdFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImxpbWl0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkubGltaXQgfHwgJyd9XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHYuY3VycmVudFRhcmdldC52YWx1ZSA/IHBhcnNlSW50KHYuY3VycmVudFRhcmdldC52YWx1ZSwgMTApIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZSkge1xuICByZXR1cm4ge1xuICAgIGFkdmFuY2VkT3B0aW9uc0NvbnRhaW5lcjogY3NzYFxuICAgICAgbWFyZ2luOiAwICR7dGhlbWUuc3BhY2luZy54c30gJHt0aGVtZS5zcGFjaW5nLnhzfSAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYCxcbiAgICBlbnRlcjogY3NzYFxuICAgICAgbGFiZWw6IGVudGVyO1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICBgLFxuICAgIGVudGVyQWN0aXZlOiBjc3NgXG4gICAgICBsYWJlbDogZW50ZXJBY3RpdmU7XG4gICAgICBoZWlnaHQ6IDEwOHB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBlYXNlLCBvcGFjaXR5IDMwMG1zIGVhc2U7XG4gICAgYCxcbiAgICBleGl0OiBjc3NgXG4gICAgICBsYWJlbDogZXhpdDtcbiAgICAgIGhlaWdodDogMTA4cHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIGAsXG4gICAgZXhpdEFjdGl2ZTogY3NzYFxuICAgICAgbGFiZWw6IGV4aXRBY3RpdmU7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGVhc2UsIG9wYWNpdHkgMzAwbXMgZWFzZTtcbiAgICBgLFxuICAgIGFuZ2xlVXA6IGNzc2BcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xuICAgIGAsXG4gICAgYW5nbGVEb3duOiBjc3NgXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcbiAgICBgLFxuICB9O1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlSHR0cFNldHRpbmdzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgTm9kZUdyYXBoU2V0dGluZ3MgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL05vZGVHcmFwaFNldHRpbmdzJztcbmltcG9ydCB7IFRyYWNlVG9Mb2dzU2V0dGluZ3MgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1RyYWNlVG9Mb2dzL1RyYWNlVG9Mb2dzU2V0dGluZ3MnO1xuaW1wb3J0IHsgVHJhY2VUb01ldHJpY3NTZXR0aW5ncyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVHJhY2VUb01ldHJpY3MvVHJhY2VUb01ldHJpY3NTZXR0aW5ncyc7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcztcblxuZXhwb3J0IGNvbnN0IENvbmZpZ0VkaXRvcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPERhdGFTb3VyY2VIdHRwU2V0dGluZ3NcbiAgICAgICAgZGVmYXVsdFVybD1cImh0dHA6Ly9sb2NhbGhvc3Q6MTY2ODZcIlxuICAgICAgICBkYXRhU291cmNlQ29uZmlnPXtvcHRpb25zfVxuICAgICAgICBzaG93QWNjZXNzT3B0aW9ucz17ZmFsc2V9XG4gICAgICAgIG9uQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9XG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPFRyYWNlVG9Mb2dzU2V0dGluZ3Mgb3B0aW9ucz17b3B0aW9uc30gb25PcHRpb25zQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2NvbmZpZy5mZWF0dXJlVG9nZ2xlcy50cmFjZVRvTWV0cmljcyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPFRyYWNlVG9NZXRyaWNzU2V0dGluZ3Mgb3B0aW9ucz17b3B0aW9uc30gb25PcHRpb25zQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICA8Tm9kZUdyYXBoU2V0dGluZ3Mgb3B0aW9ucz17b3B0aW9uc30gb25PcHRpb25zQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRmlsZURyb3B6b25lLCBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIFF1ZXJ5RmllbGQsIFJhZGlvQnV0dG9uR3JvdXAsIHVzZVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgSmFlZ2VyRGF0YXNvdXJjZSB9IGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgSmFlZ2VyUXVlcnksIEphZWdlclF1ZXJ5VHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgU2VhcmNoRm9ybSB9IGZyb20gJy4vU2VhcmNoRm9ybSc7XG5cbnR5cGUgUHJvcHMgPSBRdWVyeUVkaXRvclByb3BzPEphZWdlckRhdGFzb3VyY2UsIEphZWdlclF1ZXJ5PjtcblxuZXhwb3J0IGZ1bmN0aW9uIFF1ZXJ5RWRpdG9yKHsgZGF0YXNvdXJjZSwgcXVlcnksIG9uQ2hhbmdlLCBvblJ1blF1ZXJ5IH06IFByb3BzKSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG5cbiAgY29uc3Qgb25DaGFuZ2VRdWVyeSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmV4dFF1ZXJ5OiBKYWVnZXJRdWVyeSA9IHsgLi4ucXVlcnksIHF1ZXJ5OiB2YWx1ZSB9O1xuICAgIG9uQ2hhbmdlKG5leHRRdWVyeSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyRWRpdG9yQm9keSA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHF1ZXJ5LnF1ZXJ5VHlwZSkge1xuICAgICAgY2FzZSAnc2VhcmNoJzpcbiAgICAgICAgcmV0dXJuIDxTZWFyY2hGb3JtIGRhdGFzb3VyY2U9e2RhdGFzb3VyY2V9IHF1ZXJ5PXtxdWVyeX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPjtcbiAgICAgIGNhc2UgJ3VwbG9hZCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcyh7IHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMikgfSl9PlxuICAgICAgICAgICAgPEZpbGVEcm9wem9uZVxuICAgICAgICAgICAgICBvcHRpb25zPXt7IG11bHRpcGxlOiBmYWxzZSB9fVxuICAgICAgICAgICAgICBvbkxvYWQ9eyhyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhc291cmNlLnVwbG9hZGVkSnNvbiA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICBvblJ1blF1ZXJ5KCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJUcmFjZSBJRFwiIGxhYmVsV2lkdGg9ezE0fSBncm93PlxuICAgICAgICAgICAgICA8UXVlcnlGaWVsZFxuICAgICAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeS5xdWVyeX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VRdWVyeX1cbiAgICAgICAgICAgICAgICBvblJ1blF1ZXJ5PXtvblJ1blF1ZXJ5fVxuICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge319XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydFbnRlciBhIFRyYWNlIElEIChydW4gd2l0aCBTaGlmdCtFbnRlciknfVxuICAgICAgICAgICAgICAgIHBvcnRhbE9yaWdpbj1cImphZWdlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoeyB3aWR0aDogJzEwMCUnIH0pfT5cbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIlF1ZXJ5IHR5cGVcIj5cbiAgICAgICAgICAgIDxSYWRpb0J1dHRvbkdyb3VwPEphZWdlclF1ZXJ5VHlwZT5cbiAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdzZWFyY2gnLCBsYWJlbDogJ1NlYXJjaCcgfSxcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiB1bmRlZmluZWQsIGxhYmVsOiAnVHJhY2VJRCcgfSxcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiAndXBsb2FkJywgbGFiZWw6ICdKU09OIGZpbGUnIH0sXG4gICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5xdWVyeVR5cGV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT5cbiAgICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZTogdixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgIHtyZW5kZXJFZGl0b3JCb2R5KCl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlbGVjdGFibGVWYWx1ZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQXN5bmNTZWxlY3QsIGZ1enp5TWF0Y2gsIElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBub3RpZnlBcHAgfSBmcm9tICdhcHAvY29yZS9hY3Rpb25zJztcbmltcG9ydCB7IGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIH0gZnJvbSAnYXBwL2NvcmUvY29weS9hcHBOb3RpZmljYXRpb24nO1xuaW1wb3J0IHsgZGlzcGF0Y2ggfSBmcm9tICdhcHAvc3RvcmUvc3RvcmUnO1xuXG5pbXBvcnQgeyBKYWVnZXJEYXRhc291cmNlIH0gZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBKYWVnZXJRdWVyeSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IHRyYW5zZm9ybVRvTG9nZm10IH0gZnJvbSAnLi4vdXRpbCc7XG5cbmltcG9ydCB7IEFkdmFuY2VkT3B0aW9ucyB9IGZyb20gJy4vQWR2YW5jZWRPcHRpb25zJztcblxudHlwZSBQcm9wcyA9IHtcbiAgZGF0YXNvdXJjZTogSmFlZ2VyRGF0YXNvdXJjZTtcbiAgcXVlcnk6IEphZWdlclF1ZXJ5O1xuICBvbkNoYW5nZTogKHZhbHVlOiBKYWVnZXJRdWVyeSkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBBTExfT1BFUkFUSU9OU19LRVkgPSAnQWxsJztcbmNvbnN0IGFsbE9wZXJhdGlvbnNPcHRpb246IFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+ID0ge1xuICBsYWJlbDogQUxMX09QRVJBVElPTlNfS0VZLFxuICB2YWx1ZTogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaEZvcm0oeyBkYXRhc291cmNlLCBxdWVyeSwgb25DaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3QgW3NlcnZpY2VPcHRpb25zLCBzZXRTZXJ2aWNlT3B0aW9uc10gPSB1c2VTdGF0ZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+KCk7XG4gIGNvbnN0IFtvcGVyYXRpb25PcHRpb25zLCBzZXRPcGVyYXRpb25PcHRpb25zXSA9IHVzZVN0YXRlPEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+Pj4oKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPHtcbiAgICBzZXJ2aWNlczogYm9vbGVhbjtcbiAgICBvcGVyYXRpb25zOiBib29sZWFuO1xuICB9Pih7XG4gICAgc2VydmljZXM6IGZhbHNlLFxuICAgIG9wZXJhdGlvbnM6IGZhbHNlLFxuICB9KTtcblxuICBjb25zdCBsb2FkU2VydmljZXMgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAodXJsOiBzdHJpbmcsIGxvYWRlck9mVHlwZTogc3RyaW5nLCBxdWVyeSA9ICcnKTogUHJvbWlzZTxBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4+ID0+IHtcbiAgICAgIHNldElzTG9hZGluZygocHJldlZhbHVlKSA9PiAoeyAuLi5wcmV2VmFsdWUsIFtsb2FkZXJPZlR5cGVdOiB0cnVlIH0pKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdmFsdWVzOiBzdHJpbmdbXSB8IG51bGwgPSBhd2FpdCBkYXRhc291cmNlLm1ldGFkYXRhUmVxdWVzdCh1cmwpO1xuICAgICAgICBpZiAoIXZhbHVlcykge1xuICAgICAgICAgIHJldHVybiBbeyBsYWJlbDogYE5vICR7bG9hZGVyT2ZUeXBlfSBmb3VuZGAsIHZhbHVlOiBgTm8gJHtsb2FkZXJPZlR5cGV9IGZvdW5kYCB9XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlcnZpY2VPcHRpb25zOiBTZWxlY3RhYmxlVmFsdWVbXSA9IHZhbHVlcy5zb3J0KCkubWFwKChzZXJ2aWNlKSA9PiAoe1xuICAgICAgICAgIGxhYmVsOiBzZXJ2aWNlLFxuICAgICAgICAgIHZhbHVlOiBzZXJ2aWNlLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgY29uc3QgZmlsdGVyZWRPcHRpb25zID0gc2VydmljZU9wdGlvbnMuZmlsdGVyKChpdGVtKSA9PlxuICAgICAgICAgIGl0ZW0udmFsdWUgPyBmdXp6eU1hdGNoKGl0ZW0udmFsdWUsIHF1ZXJ5KS5mb3VuZCA6IGZhbHNlXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZE9wdGlvbnM7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oJ0Vycm9yJywgZXJyb3IpKSk7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldElzTG9hZGluZygocHJldlZhbHVlKSA9PiAoeyAuLi5wcmV2VmFsdWUsIFtsb2FkZXJPZlR5cGVdOiBmYWxzZSB9KSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbZGF0YXNvdXJjZV1cbiAgKTtcblxuICBjb25zdCBnZXRTZXJ2aWNlT3B0aW9ucyA9ICh1c2VyUXVlcnk6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBsb2FkU2VydmljZXMoJy9hcGkvc2VydmljZXMnLCAnc2VydmljZXMnLCB1c2VyUXVlcnkpO1xuICB9O1xuXG4gIGNvbnN0IGdldE9wZXJhdGlvbk9wdGlvbnMgPSAodXNlclF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gbG9hZFNlcnZpY2VzKGAvYXBpL3NlcnZpY2VzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5LnNlcnZpY2UhKX0vb3BlcmF0aW9uc2AsICdvcGVyYXRpb25zJywgdXNlclF1ZXJ5KTtcbiAgfTtcblxuICBjb25zdCBzZXJ2aWNlU2VhcmNoID0gZGVib3VuY2UoZ2V0U2VydmljZU9wdGlvbnMsIDUwMCwgeyBsZWFkaW5nOiB0cnVlLCB0cmFpbGluZzogdHJ1ZSB9KTtcbiAgY29uc3Qgb3BlcmF0aW9uU2VhcmNoID0gZGVib3VuY2UoZ2V0T3BlcmF0aW9uT3B0aW9ucywgNTAwLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0U2VydmljZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBzZXJ2aWNlcyA9IGF3YWl0IGxvYWRTZXJ2aWNlcygnL2FwaS9zZXJ2aWNlcycsICdzZXJ2aWNlcycpO1xuICAgICAgc2V0U2VydmljZU9wdGlvbnMoc2VydmljZXMpO1xuICAgIH07XG4gICAgZ2V0U2VydmljZXMoKTtcbiAgfSwgW2RhdGFzb3VyY2UsIGxvYWRTZXJ2aWNlc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0T3BlcmF0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG9wZXJhdGlvbnMgPSBhd2FpdCBsb2FkU2VydmljZXMoXG4gICAgICAgIGAvYXBpL3NlcnZpY2VzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5LnNlcnZpY2UhKX0vb3BlcmF0aW9uc2AsXG4gICAgICAgICdvcGVyYXRpb25zJ1xuICAgICAgKTtcbiAgICAgIHNldE9wZXJhdGlvbk9wdGlvbnMoW2FsbE9wZXJhdGlvbnNPcHRpb24sIC4uLm9wZXJhdGlvbnNdKTtcbiAgICB9O1xuICAgIGlmIChxdWVyeS5zZXJ2aWNlKSB7XG4gICAgICBnZXRPcGVyYXRpb25zKCk7XG4gICAgfVxuICB9LCBbZGF0YXNvdXJjZSwgcXVlcnkuc2VydmljZSwgbG9hZFNlcnZpY2VzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHsgbWF4V2lkdGg6ICc1MDBweCcgfSl9PlxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJTZXJ2aWNlXCIgbGFiZWxXaWR0aD17MTR9IGdyb3c+XG4gICAgICAgICAgPEFzeW5jU2VsZWN0XG4gICAgICAgICAgICBpbnB1dElkPVwic2VydmljZVwiXG4gICAgICAgICAgICBjYWNoZU9wdGlvbnM9e2ZhbHNlfVxuICAgICAgICAgICAgbG9hZE9wdGlvbnM9e3NlcnZpY2VTZWFyY2h9XG4gICAgICAgICAgICBvbk9wZW5NZW51PXsoKSA9PiBsb2FkU2VydmljZXMoJy9hcGkvc2VydmljZXMnLCAnc2VydmljZXMnKX1cbiAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nLnNlcnZpY2VzfVxuICAgICAgICAgICAgdmFsdWU9e3NlcnZpY2VPcHRpb25zPy5maW5kKCh2KSA9PiB2Py52YWx1ZSA9PT0gcXVlcnkuc2VydmljZSkgfHwgdW5kZWZpbmVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgICAgICAgc2VydmljZTogdj8udmFsdWUhLFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogcXVlcnkuc2VydmljZSAhPT0gdj8udmFsdWUgPyB1bmRlZmluZWQgOiBxdWVyeS5vcGVyYXRpb24sXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZW51UGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgIGlzQ2xlYXJhYmxlXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uc1xuICAgICAgICAgICAgYXJpYS1sYWJlbD17J3NlbGVjdC1zZXJ2aWNlLW5hbWUnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJPcGVyYXRpb25cIiBsYWJlbFdpZHRoPXsxNH0gZ3JvdyBkaXNhYmxlZD17IXF1ZXJ5LnNlcnZpY2V9PlxuICAgICAgICAgIDxBc3luY1NlbGVjdFxuICAgICAgICAgICAgaW5wdXRJZD1cIm9wZXJhdGlvblwiXG4gICAgICAgICAgICBjYWNoZU9wdGlvbnM9e2ZhbHNlfVxuICAgICAgICAgICAgbG9hZE9wdGlvbnM9e29wZXJhdGlvblNlYXJjaH1cbiAgICAgICAgICAgIG9uT3Blbk1lbnU9eygpID0+XG4gICAgICAgICAgICAgIGxvYWRTZXJ2aWNlcyhgL2FwaS9zZXJ2aWNlcy8ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeS5zZXJ2aWNlISl9L29wZXJhdGlvbnNgLCAnb3BlcmF0aW9ucycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZy5vcGVyYXRpb25zfVxuICAgICAgICAgICAgdmFsdWU9e29wZXJhdGlvbk9wdGlvbnM/LmZpbmQoKHYpID0+IHYudmFsdWUgPT09IHF1ZXJ5Lm9wZXJhdGlvbikgfHwgbnVsbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT5cbiAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogdj8udmFsdWUhIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lbnVQbGFjZW1lbnQ9XCJib3R0b21cIlxuICAgICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXsnc2VsZWN0LW9wZXJhdGlvbi1uYW1lJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiVGFnc1wiIGxhYmVsV2lkdGg9ezE0fSBncm93PlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgaWQ9XCJ0YWdzXCJcbiAgICAgICAgICAgIHZhbHVlPXt0cmFuc2Zvcm1Ub0xvZ2ZtdChxdWVyeS50YWdzKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cC5zdGF0dXNfY29kZT0yMDAgZXJyb3I9dHJ1ZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICAgICAgICB0YWdzOiB2LmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICA8QWR2YW5jZWRPcHRpb25zIHF1ZXJ5PXtxdWVyeX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGb3JtO1xuIiwiaW1wb3J0IHsgaWRlbnRpdHksIG9taXQsIHBpY2ssIHBpY2tCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBsYXN0VmFsdWVGcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBEYXRhUXVlcnlSZXF1ZXN0LFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsXG4gIERhdGFTb3VyY2VKc29uRGF0YSxcbiAgZGF0ZU1hdGgsXG4gIERhdGVUaW1lLFxuICBGaWVsZFR5cGUsXG4gIE11dGFibGVEYXRhRnJhbWUsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQmFja2VuZFNydlJlcXVlc3QsIGdldEJhY2tlbmRTcnYsIGdldFRlbXBsYXRlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBOb2RlR3JhcGhPcHRpb25zIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9Ob2RlR3JhcGhTZXR0aW5ncyc7XG5pbXBvcnQgeyBzZXJpYWxpemVQYXJhbXMgfSBmcm9tICdhcHAvY29yZS91dGlscy9mZXRjaCc7XG5pbXBvcnQgeyBnZXRUaW1lU3J2LCBUaW1lU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9zZXJ2aWNlcy9UaW1lU3J2JztcblxuaW1wb3J0IHsgQUxMX09QRVJBVElPTlNfS0VZIH0gZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaEZvcm0nO1xuaW1wb3J0IHsgY3JlYXRlR3JhcGhGcmFtZXMgfSBmcm9tICcuL2dyYXBoVHJhbnNmb3JtJztcbmltcG9ydCB7IGNyZWF0ZVRhYmxlRnJhbWUsIGNyZWF0ZVRyYWNlRnJhbWUgfSBmcm9tICcuL3Jlc3BvbnNlVHJhbnNmb3JtJztcbmltcG9ydCB7IEphZWdlclF1ZXJ5IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBjb252ZXJ0VGFnc0xvZ2ZtdCB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSmFlZ2VySnNvbkRhdGEgZXh0ZW5kcyBEYXRhU291cmNlSnNvbkRhdGEge1xuICBub2RlR3JhcGg/OiBOb2RlR3JhcGhPcHRpb25zO1xufVxuXG5leHBvcnQgY2xhc3MgSmFlZ2VyRGF0YXNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2VBcGk8SmFlZ2VyUXVlcnksIEphZWdlckpzb25EYXRhPiB7XG4gIHVwbG9hZGVkSnNvbjogc3RyaW5nIHwgQXJyYXlCdWZmZXIgfCBudWxsID0gbnVsbDtcbiAgbm9kZUdyYXBoPzogTm9kZUdyYXBoT3B0aW9ucztcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbnN0YW5jZVNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5nczxKYWVnZXJKc29uRGF0YT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aW1lU3J2OiBUaW1lU3J2ID0gZ2V0VGltZVNydigpXG4gICkge1xuICAgIHN1cGVyKGluc3RhbmNlU2V0dGluZ3MpO1xuICAgIHRoaXMubm9kZUdyYXBoID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS5ub2RlR3JhcGg7XG4gIH1cblxuICBhc3luYyBtZXRhZGF0YVJlcXVlc3QodXJsOiBzdHJpbmcsIHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy5fcmVxdWVzdCh1cmwsIHBhcmFtcywgeyBoaWRlRnJvbUluc3BlY3RvcjogdHJ1ZSB9KSk7XG4gICAgcmV0dXJuIHJlcy5kYXRhLmRhdGE7XG4gIH1cblxuICBxdWVyeShvcHRpb25zOiBEYXRhUXVlcnlSZXF1ZXN0PEphZWdlclF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICAvLyBBdCB0aGlzIG1vbWVudCB3ZSBleHBlY3Qgb25seSBvbmUgdGFyZ2V0LiBJbiBjYXNlIHdlIHNvbWVob3cgY2hhbmdlIHRoZSBVSSB0byBiZSBhYmxlIHRvIHNob3cgbXVsdGlwbGVcbiAgICAvLyB0cmFjZXMgYXQgb25lIHdlIG5lZWQgdG8gY2hhbmdlIHRoaXMuXG4gICAgY29uc3QgdGFyZ2V0OiBKYWVnZXJRdWVyeSA9IG9wdGlvbnMudGFyZ2V0c1swXTtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuIG9mKHsgZGF0YTogW2VtcHR5VHJhY2VEYXRhRnJhbWVdIH0pO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQucXVlcnlUeXBlICE9PSAnc2VhcmNoJyAmJiB0YXJnZXQucXVlcnkpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KFxuICAgICAgICBgL2FwaS90cmFjZXMvJHtlbmNvZGVVUklDb21wb25lbnQoZ2V0VGVtcGxhdGVTcnYoKS5yZXBsYWNlKHRhcmdldC5xdWVyeSwgb3B0aW9ucy5zY29wZWRWYXJzKSl9YFxuICAgICAgKS5waXBlKFxuICAgICAgICBtYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdHJhY2VEYXRhID0gcmVzcG9uc2U/LmRhdGE/LmRhdGE/LlswXTtcbiAgICAgICAgICBpZiAoIXRyYWNlRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogW2VtcHR5VHJhY2VEYXRhRnJhbWVdIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCBkYXRhID0gW2NyZWF0ZVRyYWNlRnJhbWUodHJhY2VEYXRhKV07XG4gICAgICAgICAgaWYgKHRoaXMubm9kZUdyYXBoPy5lbmFibGVkKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goLi4uY3JlYXRlR3JhcGhGcmFtZXModHJhY2VEYXRhKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXQucXVlcnlUeXBlID09PSAndXBsb2FkJykge1xuICAgICAgaWYgKCF0aGlzLnVwbG9hZGVkSnNvbikge1xuICAgICAgICByZXR1cm4gb2YoeyBkYXRhOiBbXSB9KTtcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdHJhY2VEYXRhID0gSlNPTi5wYXJzZSh0aGlzLnVwbG9hZGVkSnNvbiBhcyBzdHJpbmcpLmRhdGFbMF07XG4gICAgICAgIGxldCBkYXRhID0gW2NyZWF0ZVRyYWNlRnJhbWUodHJhY2VEYXRhKV07XG4gICAgICAgIGlmICh0aGlzLm5vZGVHcmFwaD8uZW5hYmxlZCkge1xuICAgICAgICAgIGRhdGEucHVzaCguLi5jcmVhdGVHcmFwaEZyYW1lcyh0cmFjZURhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2YoeyBkYXRhIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIG9mKHsgZXJyb3I6IHsgbWVzc2FnZTogJ0pTT04gaXMgbm90IHZhbGlkIEphZWdlciBmb3JtYXQnIH0sIGRhdGE6IFtdIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBqYWVnZXJRdWVyeSA9IHBpY2sodGFyZ2V0LCBbJ29wZXJhdGlvbicsICdzZXJ2aWNlJywgJ3RhZ3MnLCAnbWluRHVyYXRpb24nLCAnbWF4RHVyYXRpb24nLCAnbGltaXQnXSk7XG4gICAgLy8gcmVtb3ZlIGVtcHR5IHByb3BlcnRpZXNcbiAgICBqYWVnZXJRdWVyeSA9IHBpY2tCeShqYWVnZXJRdWVyeSwgaWRlbnRpdHkpO1xuICAgIGlmIChqYWVnZXJRdWVyeS50YWdzKSB7XG4gICAgICBqYWVnZXJRdWVyeSA9IHtcbiAgICAgICAgLi4uamFlZ2VyUXVlcnksXG4gICAgICAgIHRhZ3M6IGNvbnZlcnRUYWdzTG9nZm10KGdldFRlbXBsYXRlU3J2KCkucmVwbGFjZShqYWVnZXJRdWVyeS50YWdzLCBvcHRpb25zLnNjb3BlZFZhcnMpKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGphZWdlclF1ZXJ5Lm9wZXJhdGlvbiA9PT0gQUxMX09QRVJBVElPTlNfS0VZKSB7XG4gICAgICBqYWVnZXJRdWVyeSA9IG9taXQoamFlZ2VyUXVlcnksICdvcGVyYXRpb24nKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiB0aGlzIGFwaSBpcyBpbnRlcm5hbCwgdXNlZCBpbiBqYWVnZXIgdWkuIE9mZmljaWFsbHkgdGhleSBoYXZlIGdSUEMgYXBpIHRoYXQgc2hvdWxkIGJlIHVzZWQuXG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoYC9hcGkvdHJhY2VzYCwge1xuICAgICAgLi4uamFlZ2VyUXVlcnksXG4gICAgICAuLi50aGlzLmdldFRpbWVSYW5nZSgpLFxuICAgICAgbG9va2JhY2s6ICdjdXN0b20nLFxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0YTogW2NyZWF0ZVRhYmxlRnJhbWUocmVzcG9uc2UuZGF0YS5kYXRhLCB0aGlzLmluc3RhbmNlU2V0dGluZ3MpXSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIHRlc3REYXRhc291cmNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20oXG4gICAgICB0aGlzLl9yZXF1ZXN0KCcvYXBpL3NlcnZpY2VzJykucGlwZShcbiAgICAgICAgbWFwKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZXM6IGFueVtdID0gcmVzPy5kYXRhPy5kYXRhIHx8IFtdO1xuICAgICAgICAgIGNvbnN0IHRlc3RSZXN1bHQgPVxuICAgICAgICAgICAgdmFsdWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgPyB7IHN0YXR1czogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnRGF0YSBzb3VyY2UgY29ubmVjdGVkIGFuZCBzZXJ2aWNlcyBmb3VuZC4nIH1cbiAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICAgICAgICAnRGF0YSBzb3VyY2UgY29ubmVjdGVkLCBidXQgbm8gc2VydmljZXMgcmVjZWl2ZWQuIFZlcmlmeSB0aGF0IEphZWdlciBpcyBjb25maWd1cmVkIHByb3Blcmx5LicsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVzdFJlc3VsdDtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnSmFlZ2VyOiAnO1xuICAgICAgICAgIGlmIChlcnIuc3RhdHVzVGV4dCkge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBlcnIuc3RhdHVzVGV4dDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVzc2FnZSArPSAnQ2Fubm90IGNvbm5lY3QgdG8gSmFlZ2VyJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXJyLnN0YXR1cykge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgLiAke2Vyci5zdGF0dXN9YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXJyLmRhdGEgJiYgZXJyLmRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgLiAke2Vyci5kYXRhLm1lc3NhZ2V9YDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVyci5kYXRhKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGAuICR7SlNPTi5zdHJpbmdpZnkoZXJyLmRhdGEpfWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvZih7IHN0YXR1czogJ2Vycm9yJywgbWVzc2FnZTogbWVzc2FnZSB9KTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0VGltZVJhbmdlKCk6IHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfSB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnRpbWVTcnYudGltZVJhbmdlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiBnZXRUaW1lKHJhbmdlLmZyb20sIGZhbHNlKSxcbiAgICAgIGVuZDogZ2V0VGltZShyYW5nZS50bywgdHJ1ZSksXG4gICAgfTtcbiAgfVxuXG4gIGdldFF1ZXJ5RGlzcGxheVRleHQocXVlcnk6IEphZWdlclF1ZXJ5KSB7XG4gICAgcmV0dXJuIHF1ZXJ5LnF1ZXJ5IHx8ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVxdWVzdChhcGlVcmw6IHN0cmluZywgZGF0YT86IGFueSwgb3B0aW9ucz86IFBhcnRpYWw8QmFja2VuZFNydlJlcXVlc3Q+KTogT2JzZXJ2YWJsZTxSZWNvcmQ8c3RyaW5nLCBhbnk+PiB7XG4gICAgY29uc3QgcGFyYW1zID0gZGF0YSA/IHNlcmlhbGl6ZVBhcmFtcyhkYXRhKSA6ICcnO1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuaW5zdGFuY2VTZXR0aW5ncy51cmx9JHthcGlVcmx9JHtwYXJhbXMubGVuZ3RoID8gYD8ke3BhcmFtc31gIDogJyd9YDtcbiAgICBjb25zdCByZXEgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgdXJsLFxuICAgIH07XG5cbiAgICByZXR1cm4gZ2V0QmFja2VuZFNydigpLmZldGNoKHJlcSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGltZShkYXRlOiBzdHJpbmcgfCBEYXRlVGltZSwgcm91bmRVcDogYm9vbGVhbikge1xuICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgZGF0ZSA9IGRhdGVNYXRoLnBhcnNlKGRhdGUsIHJvdW5kVXApITtcbiAgfVxuICByZXR1cm4gZGF0ZS52YWx1ZU9mKCkgKiAxMDAwO1xufVxuXG5jb25zdCBlbXB0eVRyYWNlRGF0YUZyYW1lID0gbmV3IE11dGFibGVEYXRhRnJhbWUoe1xuICBmaWVsZHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAndHJhY2UnLFxuICAgICAgdHlwZTogRmllbGRUeXBlLnRyYWNlLFxuICAgICAgdmFsdWVzOiBbXSxcbiAgICB9LFxuICBdLFxuICBtZXRhOiB7XG4gICAgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICd0cmFjZScsXG4gICAgY3VzdG9tOiB7XG4gICAgICB0cmFjZUZvcm1hdDogJ2phZWdlcicsXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgRGF0YUZyYW1lLCBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzIGFzIEZpZWxkcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBnZXROb25PdmVybGFwcGluZ0R1cmF0aW9uLCBnZXRTdGF0cywgbWFrZUZyYW1lcywgbWFrZVNwYW5NYXAgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3V0aWxzL3RyYWNpbmcnO1xuXG5pbXBvcnQgeyBTcGFuLCBUcmFjZVJlc3BvbnNlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBOb2RlIHtcbiAgW0ZpZWxkcy5pZF06IHN0cmluZztcbiAgW0ZpZWxkcy50aXRsZV06IHN0cmluZztcbiAgW0ZpZWxkcy5zdWJUaXRsZV06IHN0cmluZztcbiAgW0ZpZWxkcy5tYWluU3RhdF06IHN0cmluZztcbiAgW0ZpZWxkcy5zZWNvbmRhcnlTdGF0XTogc3RyaW5nO1xuICBbRmllbGRzLmNvbG9yXTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgRWRnZSB7XG4gIFtGaWVsZHMuaWRdOiBzdHJpbmc7XG4gIFtGaWVsZHMudGFyZ2V0XTogc3RyaW5nO1xuICBbRmllbGRzLnNvdXJjZV06IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdyYXBoRnJhbWVzKGRhdGE6IFRyYWNlUmVzcG9uc2UpOiBEYXRhRnJhbWVbXSB7XG4gIGNvbnN0IHsgbm9kZXMsIGVkZ2VzIH0gPSBjb252ZXJ0VHJhY2VUb0dyYXBoKGRhdGEpO1xuICBjb25zdCBbbm9kZXNGcmFtZSwgZWRnZXNGcmFtZV0gPSBtYWtlRnJhbWVzKCk7XG5cbiAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgbm9kZXNGcmFtZS5hZGQobm9kZSk7XG4gIH1cblxuICBmb3IgKGNvbnN0IGVkZ2Ugb2YgZWRnZXMpIHtcbiAgICBlZGdlc0ZyYW1lLmFkZChlZGdlKTtcbiAgfVxuXG4gIHJldHVybiBbbm9kZXNGcmFtZSwgZWRnZXNGcmFtZV07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUcmFjZVRvR3JhcGgoZGF0YTogVHJhY2VSZXNwb25zZSk6IHsgbm9kZXM6IE5vZGVbXTsgZWRnZXM6IEVkZ2VbXSB9IHtcbiAgY29uc3Qgbm9kZXM6IE5vZGVbXSA9IFtdO1xuICBjb25zdCBlZGdlczogRWRnZVtdID0gW107XG5cbiAgY29uc3QgdHJhY2VEdXJhdGlvbiA9IGZpbmRUcmFjZUR1cmF0aW9uKGRhdGEuc3BhbnMpO1xuXG4gIGNvbnN0IHNwYW5NYXAgPSBtYWtlU3Bhbk1hcCgoaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPj0gZGF0YS5zcGFucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHNwYW4gPSBkYXRhLnNwYW5zW2luZGV4XTtcbiAgICByZXR1cm4ge1xuICAgICAgc3BhbixcbiAgICAgIGlkOiBzcGFuLnNwYW5JRCxcbiAgICAgIHBhcmVudElkczogc3Bhbi5yZWZlcmVuY2VzPy5maWx0ZXIoKHIpID0+IHIucmVmVHlwZSA9PT0gJ0NISUxEX09GJykubWFwKChyKSA9PiByLnNwYW5JRCkgfHwgW10sXG4gICAgfTtcbiAgfSk7XG5cbiAgZm9yIChjb25zdCBzcGFuIG9mIGRhdGEuc3BhbnMpIHtcbiAgICBjb25zdCBwcm9jZXNzID0gZGF0YS5wcm9jZXNzZXNbc3Bhbi5wcm9jZXNzSURdO1xuXG4gICAgY29uc3QgcmFuZ2VzOiBBcnJheTxbbnVtYmVyLCBudW1iZXJdPiA9IHNwYW5NYXBbc3Bhbi5zcGFuSURdLmNoaWxkcmVuLm1hcCgoYykgPT4ge1xuICAgICAgY29uc3Qgc3BhbiA9IHNwYW5NYXBbY10uc3BhbjtcbiAgICAgIHJldHVybiBbc3Bhbi5zdGFydFRpbWUsIHNwYW4uc3RhcnRUaW1lICsgc3Bhbi5kdXJhdGlvbl07XG4gICAgfSk7XG4gICAgY29uc3QgY2hpbGRyZW5EdXJhdGlvbiA9IGdldE5vbk92ZXJsYXBwaW5nRHVyYXRpb24ocmFuZ2VzKTtcbiAgICBjb25zdCBzZWxmRHVyYXRpb24gPSBzcGFuLmR1cmF0aW9uIC0gY2hpbGRyZW5EdXJhdGlvbjtcbiAgICBjb25zdCBzdGF0cyA9IGdldFN0YXRzKHNwYW4uZHVyYXRpb24gLyAxMDAwLCB0cmFjZUR1cmF0aW9uIC8gMTAwMCwgc2VsZkR1cmF0aW9uIC8gMTAwMCk7XG5cbiAgICBub2Rlcy5wdXNoKHtcbiAgICAgIFtGaWVsZHMuaWRdOiBzcGFuLnNwYW5JRCxcbiAgICAgIFtGaWVsZHMudGl0bGVdOiBwcm9jZXNzPy5zZXJ2aWNlTmFtZSA/PyAnJyxcbiAgICAgIFtGaWVsZHMuc3ViVGl0bGVdOiBzcGFuLm9wZXJhdGlvbk5hbWUsXG4gICAgICBbRmllbGRzLm1haW5TdGF0XTogc3RhdHMubWFpbixcbiAgICAgIFtGaWVsZHMuc2Vjb25kYXJ5U3RhdF06IHN0YXRzLnNlY29uZGFyeSxcbiAgICAgIFtGaWVsZHMuY29sb3JdOiBzZWxmRHVyYXRpb24gLyB0cmFjZUR1cmF0aW9uLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFyZW50U3BhbklEID0gc3Bhbi5yZWZlcmVuY2VzPy5maW5kKChyKSA9PiByLnJlZlR5cGUgPT09ICdDSElMRF9PRicpPy5zcGFuSUQ7XG4gICAgLy8gU29tZXRpbWVzIHNvbWUgc3BhbiBjYW4gYmUgbWlzc2luZy4gRG9uJ3QgYWRkIGVkZ2VzIGZvciB0aG9zZS5cbiAgICBpZiAocGFyZW50U3BhbklEICYmIHNwYW5NYXBbcGFyZW50U3BhbklEXS5zcGFuKSB7XG4gICAgICBlZGdlcy5wdXNoKHtcbiAgICAgICAgW0ZpZWxkcy5pZF06IHBhcmVudFNwYW5JRCArICctLScgKyBzcGFuLnNwYW5JRCxcbiAgICAgICAgW0ZpZWxkcy50YXJnZXRdOiBzcGFuLnNwYW5JRCxcbiAgICAgICAgW0ZpZWxkcy5zb3VyY2VdOiBwYXJlbnRTcGFuSUQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBub2RlcywgZWRnZXMgfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGR1cmF0aW9uIG9mIHRoZSB3aG9sZSB0cmFjZSBhcyBpdCBpc24ndCBhIHBhcnQgb2YgdGhlIHJlc3BvbnNlIGRhdGEuXG4gKiBOb3RlOiBTZWVtcyBsaWtlIHRoaXMgc2hvdWxkIGJlIHRoZSBzYW1lIGFzIGp1c3QgbG9uZ2VzdCBzcGFuLCBidXQgdGhpcyBpcyBwcm9iYWJseSBzYWZlci5cbiAqL1xuZnVuY3Rpb24gZmluZFRyYWNlRHVyYXRpb24oc3BhbnM6IFNwYW5bXSk6IG51bWJlciB7XG4gIGxldCB0cmFjZUVuZFRpbWUgPSAwO1xuICBsZXQgdHJhY2VTdGFydFRpbWUgPSBJbmZpbml0eTtcblxuICBmb3IgKGNvbnN0IHNwYW4gb2Ygc3BhbnMpIHtcbiAgICBpZiAoc3Bhbi5zdGFydFRpbWUgPCB0cmFjZVN0YXJ0VGltZSkge1xuICAgICAgdHJhY2VTdGFydFRpbWUgPSBzcGFuLnN0YXJ0VGltZTtcbiAgICB9XG5cbiAgICBpZiAoc3Bhbi5zdGFydFRpbWUgKyBzcGFuLmR1cmF0aW9uID4gdHJhY2VFbmRUaW1lKSB7XG4gICAgICB0cmFjZUVuZFRpbWUgPSBzcGFuLnN0YXJ0VGltZSArIHNwYW4uZHVyYXRpb247XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRyYWNlRW5kVGltZSAtIHRyYWNlU3RhcnRUaW1lO1xufVxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBDb25maWdFZGl0b3IgfSBmcm9tICcuL2NvbXBvbmVudHMvQ29uZmlnRWRpdG9yJztcbmltcG9ydCB7IFF1ZXJ5RWRpdG9yIH0gZnJvbSAnLi9jb21wb25lbnRzL1F1ZXJ5RWRpdG9yJztcbmltcG9ydCB7IEphZWdlckRhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuXG5leHBvcnQgY29uc3QgcGx1Z2luID0gbmV3IERhdGFTb3VyY2VQbHVnaW4oSmFlZ2VyRGF0YXNvdXJjZSkuc2V0Q29uZmlnRWRpdG9yKENvbmZpZ0VkaXRvcikuc2V0UXVlcnlFZGl0b3IoUXVlcnlFZGl0b3IpO1xuIiwiaW1wb3J0IHtcbiAgRGF0YUZyYW1lLFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgRmllbGRUeXBlLFxuICBNdXRhYmxlRGF0YUZyYW1lLFxuICBUcmFjZUxvZyxcbiAgVHJhY2VTcGFuUm93LFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IHRyYW5zZm9ybVRyYWNlRGF0YSB9IGZyb20gJ0BqYWVnZXJ0cmFjaW5nL2phZWdlci11aS1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgSmFlZ2VyUmVzcG9uc2UsIFNwYW4sIFRyYWNlUHJvY2VzcywgVHJhY2VSZXNwb25zZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhY2VGcmFtZShkYXRhOiBUcmFjZVJlc3BvbnNlKTogRGF0YUZyYW1lIHtcbiAgY29uc3Qgc3BhbnMgPSBkYXRhLnNwYW5zLm1hcCgocykgPT4gdG9TcGFuUm93KHMsIGRhdGEucHJvY2Vzc2VzKSk7XG5cbiAgY29uc3QgZnJhbWUgPSBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgZmllbGRzOiBbXG4gICAgICB7IG5hbWU6ICd0cmFjZUlEJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAnc3BhbklEJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAncGFyZW50U3BhbklEJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAnb3BlcmF0aW9uTmFtZScsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICAgIHsgbmFtZTogJ3NlcnZpY2VOYW1lJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAnc2VydmljZVRhZ3MnLCB0eXBlOiBGaWVsZFR5cGUub3RoZXIgfSxcbiAgICAgIHsgbmFtZTogJ3N0YXJ0VGltZScsIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIgfSxcbiAgICAgIHsgbmFtZTogJ2R1cmF0aW9uJywgdHlwZTogRmllbGRUeXBlLm51bWJlciB9LFxuICAgICAgeyBuYW1lOiAnbG9ncycsIHR5cGU6IEZpZWxkVHlwZS5vdGhlciB9LFxuICAgICAgeyBuYW1lOiAndGFncycsIHR5cGU6IEZpZWxkVHlwZS5vdGhlciB9LFxuICAgICAgeyBuYW1lOiAnd2FybmluZ3MnLCB0eXBlOiBGaWVsZFR5cGUub3RoZXIgfSxcbiAgICAgIHsgbmFtZTogJ3N0YWNrVHJhY2VzJywgdHlwZTogRmllbGRUeXBlLm90aGVyIH0sXG4gICAgXSxcbiAgICBtZXRhOiB7XG4gICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ3RyYWNlJyxcbiAgICAgIGN1c3RvbToge1xuICAgICAgICB0cmFjZUZvcm1hdDogJ2phZWdlcicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGZvciAoY29uc3Qgc3BhbiBvZiBzcGFucykge1xuICAgIGZyYW1lLmFkZChzcGFuKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gdG9TcGFuUm93KHNwYW46IFNwYW4sIHByb2Nlc3NlczogUmVjb3JkPHN0cmluZywgVHJhY2VQcm9jZXNzPik6IFRyYWNlU3BhblJvdyB7XG4gIHJldHVybiB7XG4gICAgc3BhbklEOiBzcGFuLnNwYW5JRCxcbiAgICB0cmFjZUlEOiBzcGFuLnRyYWNlSUQsXG4gICAgcGFyZW50U3BhbklEOiBzcGFuLnJlZmVyZW5jZXM/LmZpbmQoKHIpID0+IHIucmVmVHlwZSA9PT0gJ0NISUxEX09GJyk/LnNwYW5JRCxcbiAgICBvcGVyYXRpb25OYW1lOiBzcGFuLm9wZXJhdGlvbk5hbWUsXG4gICAgLy8gZnJvbSBtaWNybyB0byBtaWxsaXNcbiAgICBzdGFydFRpbWU6IHNwYW4uc3RhcnRUaW1lIC8gMTAwMCxcbiAgICBkdXJhdGlvbjogc3Bhbi5kdXJhdGlvbiAvIDEwMDAsXG4gICAgbG9nczogc3Bhbi5sb2dzLm1hcCgobCkgPT4gKHtcbiAgICAgIC4uLmwsXG4gICAgICB0aW1lc3RhbXA6IGwudGltZXN0YW1wIC8gMTAwMCxcbiAgICB9KSksXG4gICAgdGFnczogc3Bhbi50YWdzLFxuICAgIHdhcm5pbmdzOiBzcGFuLndhcm5pbmdzID8/IHVuZGVmaW5lZCxcbiAgICBzdGFja1RyYWNlczogc3Bhbi5zdGFja1RyYWNlcyxcbiAgICBzZXJ2aWNlTmFtZTogcHJvY2Vzc2VzW3NwYW4ucHJvY2Vzc0lEXS5zZXJ2aWNlTmFtZSxcbiAgICBzZXJ2aWNlVGFnczogcHJvY2Vzc2VzW3NwYW4ucHJvY2Vzc0lEXS50YWdzLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFibGVGcmFtZShkYXRhOiBUcmFjZVJlc3BvbnNlW10sIGluc3RhbmNlU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzKTogRGF0YUZyYW1lIHtcbiAgY29uc3QgZnJhbWUgPSBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgZmllbGRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0cmFjZUlEJyxcbiAgICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgdW5pdDogJ3N0cmluZycsXG4gICAgICAgICAgZGlzcGxheU5hbWVGcm9tRFM6ICdUcmFjZSBJRCcsXG4gICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdUcmFjZTogJHtfX3ZhbHVlLnJhd30nLFxuICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICBpbnRlcm5hbDoge1xuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6IGluc3RhbmNlU2V0dGluZ3MudWlkLFxuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VOYW1lOiBpbnN0YW5jZVNldHRpbmdzLm5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnJHtfX3ZhbHVlLnJhd30nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgeyBuYW1lOiAndHJhY2VOYW1lJywgdHlwZTogRmllbGRUeXBlLnN0cmluZywgY29uZmlnOiB7IGRpc3BsYXlOYW1lRnJvbURTOiAnVHJhY2UgbmFtZScgfSB9LFxuICAgICAgeyBuYW1lOiAnc3RhcnRUaW1lJywgdHlwZTogRmllbGRUeXBlLnRpbWUsIGNvbmZpZzogeyBkaXNwbGF5TmFtZUZyb21EUzogJ1N0YXJ0IHRpbWUnIH0gfSxcbiAgICAgIHsgbmFtZTogJ2R1cmF0aW9uJywgdHlwZTogRmllbGRUeXBlLm51bWJlciwgY29uZmlnOiB7IGRpc3BsYXlOYW1lRnJvbURTOiAnRHVyYXRpb24nLCB1bml0OiAnwrVzJyB9IH0sXG4gICAgXSxcbiAgICBtZXRhOiB7XG4gICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ3RhYmxlJyxcbiAgICB9LFxuICB9KTtcbiAgLy8gU2hvdyB0aGUgbW9zdCByZWNlbnQgdHJhY2VzXG4gIGNvbnN0IHRyYWNlRGF0YSA9IGRhdGEubWFwKHRyYW5zZm9ybVRvVHJhY2VEYXRhKS5zb3J0KChhLCBiKSA9PiBiPy5zdGFydFRpbWUhIC0gYT8uc3RhcnRUaW1lISk7XG5cbiAgZm9yIChjb25zdCB0cmFjZSBvZiB0cmFjZURhdGEpIHtcbiAgICBmcmFtZS5hZGQodHJhY2UpO1xuICB9XG5cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Ub1RyYWNlRGF0YShkYXRhOiBUcmFjZVJlc3BvbnNlKSB7XG4gIGNvbnN0IHRyYWNlRGF0YSA9IHRyYW5zZm9ybVRyYWNlRGF0YShkYXRhKTtcbiAgaWYgKCF0cmFjZURhdGEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRyYWNlSUQ6IHRyYWNlRGF0YS50cmFjZUlELFxuICAgIHN0YXJ0VGltZTogdHJhY2VEYXRhLnN0YXJ0VGltZSAvIDEwMDAsXG4gICAgZHVyYXRpb246IHRyYWNlRGF0YS5kdXJhdGlvbixcbiAgICB0cmFjZU5hbWU6IHRyYWNlRGF0YS50cmFjZU5hbWUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Ub0phZWdlcihkYXRhOiBNdXRhYmxlRGF0YUZyYW1lKTogSmFlZ2VyUmVzcG9uc2Uge1xuICBsZXQgdHJhY2VSZXNwb25zZTogVHJhY2VSZXNwb25zZSA9IHtcbiAgICB0cmFjZUlEOiAnJyxcbiAgICBzcGFuczogW10sXG4gICAgcHJvY2Vzc2VzOiB7fSxcbiAgICB3YXJuaW5nczogbnVsbCxcbiAgfTtcbiAgbGV0IHByb2Nlc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzcGFuID0gZGF0YS5nZXQoaSk7XG5cbiAgICAvLyBTZXQgdHJhY2VJRFxuICAgIGlmICghdHJhY2VSZXNwb25zZS50cmFjZUlEKSB7XG4gICAgICB0cmFjZVJlc3BvbnNlLnRyYWNlSUQgPSBzcGFuLnRyYWNlSUQ7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHByb2Nlc3MgaWYgZG9lc24ndCBleGlzdFxuICAgIGlmICghcHJvY2Vzc2VzLmZpbmQoKHApID0+IHAgPT09IHNwYW4uc2VydmljZU5hbWUpKSB7XG4gICAgICBwcm9jZXNzZXMucHVzaChzcGFuLnNlcnZpY2VOYW1lKTtcbiAgICAgIHRyYWNlUmVzcG9uc2UucHJvY2Vzc2VzW2BwJHtwcm9jZXNzZXMubGVuZ3RofWBdID0ge1xuICAgICAgICBzZXJ2aWNlTmFtZTogc3Bhbi5zZXJ2aWNlTmFtZSxcbiAgICAgICAgdGFnczogc3Bhbi5zZXJ2aWNlVGFncyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHNwYW5cbiAgICB0cmFjZVJlc3BvbnNlLnNwYW5zLnB1c2goe1xuICAgICAgdHJhY2VJRDogc3Bhbi50cmFjZUlELFxuICAgICAgc3BhbklEOiBzcGFuLnNwYW5JRCxcbiAgICAgIGR1cmF0aW9uOiBzcGFuLmR1cmF0aW9uICogMTAwMCxcbiAgICAgIHJlZmVyZW5jZXM6IHNwYW4ucGFyZW50U3BhbklEXG4gICAgICAgID8gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWZUeXBlOiAnQ0hJTERfT0YnLFxuICAgICAgICAgICAgICBzcGFuSUQ6IHNwYW4ucGFyZW50U3BhbklELFxuICAgICAgICAgICAgICB0cmFjZUlEOiBzcGFuLnRyYWNlSUQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXSxcbiAgICAgIGZsYWdzOiAwLFxuICAgICAgbG9nczogc3Bhbi5sb2dzLm1hcCgobDogVHJhY2VMb2cpID0+ICh7XG4gICAgICAgIC4uLmwsXG4gICAgICAgIHRpbWVzdGFtcDogbC50aW1lc3RhbXAgKiAxMDAwLFxuICAgICAgfSkpLFxuICAgICAgb3BlcmF0aW9uTmFtZTogc3Bhbi5vcGVyYXRpb25OYW1lLFxuICAgICAgcHJvY2Vzc0lEOlxuICAgICAgICBPYmplY3Qua2V5cyh0cmFjZVJlc3BvbnNlLnByb2Nlc3NlcykuZmluZChcbiAgICAgICAgICAoa2V5KSA9PiB0cmFjZVJlc3BvbnNlLnByb2Nlc3Nlc1trZXldLnNlcnZpY2VOYW1lID09PSBzcGFuLnNlcnZpY2VOYW1lXG4gICAgICAgICkgfHwgJycsXG4gICAgICBzdGFydFRpbWU6IHNwYW4uc3RhcnRUaW1lICogMTAwMCxcbiAgICAgIHRhZ3M6IHNwYW4udGFncyxcbiAgICAgIHdhcm5pbmdzOiBzcGFuLndhcm5pbmdzID8gc3Bhbi53YXJuaW5ncyA6IG51bGwsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4geyBkYXRhOiBbdHJhY2VSZXNwb25zZV0sIHRvdGFsOiAwLCBsaW1pdDogMCwgb2Zmc2V0OiAwLCBlcnJvcnM6IG51bGwgfTtcbn1cbiIsImltcG9ydCBsb2dmbXQgZnJvbSAnbG9nZm10JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUYWdzTG9nZm10KHRhZ3M6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICBpZiAoIXRhZ3MpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgY29uc3QgZGF0YTogYW55ID0gbG9nZm10LnBhcnNlKHRhZ3MpO1xuICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgZGF0YVtrZXldID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Ub0xvZ2ZtdCh0YWdzOiBzdHJpbmcgfCB1bmRlZmluZWQpIHtcbiAgaWYgKCF0YWdzKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHRyeSB7XG4gICAgcmV0dXJuIGxvZ2ZtdC5zdHJpbmdpZnkoSlNPTi5wYXJzZSh0YWdzKSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB0YWdzO1xuICB9XG59XG4iLCJcbi8qXG5Nb2R1bGUgZGVwZW5kZW5jaWVzLlxuKi9cblxuLypcbkpTT046XG5cblBhcnNlIGxvZ3BsZXggcmVxdWVzdCBib2RpZXMsIHByb3ZpZGluZyB0aGVcbnBhcnNlZCBvYmplY3QgYXMgYHJlcS5ib2R5YC5cblxuT3B0aW9uczogbm9uZVxuXG5AcGFyYW0gY29udGVudF90eXBlIHtTdHJpbmd9IHVzZSB3aGVuIENvbnRlbnQtVHlwZSBtYXRjaGVzIHRoaXMgc3RyaW5nXG5AcGFyYW0gcGFyc2VyIHtGdW5jdGlvbn0gcGFyc2luZyBmdW5jdGlvbiB0YWtlcyBTdHJpbmcgYm9keSBhbmQgcmV0dXJucyBuZXcgYm9keVxuQHJldHVybiB7RnVuY3Rpb259XG5AYXBpIHB1YmxpY1xuKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgbGltaXQ7XG4gIGlmIChvcHRpb25zID09IG51bGwpIG9wdGlvbnMgPSB7fTtcblxuICByZXR1cm4gZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICBpZiAocmVxLl9ib2R5KSByZXR1cm4gbmV4dCgpO1xuICAgIHZhciBpc19taW1lID0gcmVxLmhlYWRlcignY29udGVudC10eXBlJykgPT09IG9wdGlvbnMuY29udGVudFR5cGU7XG4gICAgaWYgKCFpc19taW1lKSByZXR1cm4gbmV4dCgpO1xuICAgIHJlcS5fYm9keSA9IHRydWU7XG4gICAgcmVxLmJvZHkgPSByZXEuYm9keSB8fCB7fTtcbiAgICB2YXIgYnVmO1xuICAgIGJ1ZiA9IFwiXCI7XG4gICAgcmVxLnNldEVuY29kaW5nKFwidXRmOFwiKTtcbiAgICByZXEub24oXCJkYXRhXCIsIGZ1bmN0aW9uKGNodW5rKSB7XG4gICAgICByZXR1cm4gYnVmICs9IGNodW5rO1xuICAgIH0pO1xuICAgIHJlcS5vbihcImVuZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBsaW5lcyA9IFtdXG4gICAgICAgIGJ1Zi50cmltKCkuc3BsaXQoXCJcXG5cIikuZm9yRWFjaChmdW5jdGlvbihsaW5lKXtcbiAgICAgICAgICBsaW5lcy5wdXNoKG9wdGlvbnMucGFyc2VyKGxpbmUpKVxuICAgICAgICB9KVxuICAgICAgICByZXEuYm9keSA9IGxpbmVzO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGVyci5ib2R5ID0gYnVmO1xuICAgICAgICBlcnIuc3RhdHVzID0gNDAwO1xuICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9KTtcbiAgfTtcbn07XG4iLCJ2YXIgc3BsaXQgPSByZXF1aXJlKCdzcGxpdCcpO1xudmFyIHRocm91Z2ggPSByZXF1aXJlKCd0aHJvdWdoJyk7XG52YXIgUmVhZGFibGUgPSByZXF1aXJlKCdzdHJlYW0nKS5SZWFkYWJsZTtcbnZhciBQYXNzVGhyb3VnaCA9IHJlcXVpcmUoJ3N0cmVhbScpLlBhc3NUaHJvdWdoO1xudmFyIGxvZ2ZtdCAgID0gcmVxdWlyZSgnLi4vbG9nZm10Jyk7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICBpZihvcHRpb25zID09IG51bGwpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIG1pbWUgPSBvcHRpb25zLmNvbnRlbnRUeXBlIHx8IFwiYXBwbGljYXRpb24vbG9ncGxleC0xXCI7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG5cbiAgICAvL2hvbm9yIGFscmVhZHkgcGFyc2VkIGJvZGllc1xuICAgIGlmIChyZXEuX2JvZHkpIHJldHVybiBuZXh0KCk7XG5cbiAgICAvL21pbWUtdHlwZSBjaGVja1xuICAgIHZhciBpc19taW1lID0gcmVxLmhlYWRlcignY29udGVudC10eXBlJykgPT09IG1pbWU7XG4gICAgaWYgKCFpc19taW1lKSByZXR1cm4gbmV4dCgpO1xuICAgIHJlcS5fYm9keSA9IHRydWU7XG4gICAgcmVxLmJvZHkgPSBuZXcgUGFzc1Rocm91Z2goe29iamVjdE1vZGU6IHRydWV9KTtcbiAgICByZXEucGlwZShsb2dmbXQuc3RyZWFtUGFyc2VyKCkpLnBpcGUocmVxLmJvZHkpO1xuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfVxufVxuXG4iLCJleHBvcnRzLmRlYnVnID0gZmFsc2U7XG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHZhciBrZXkgPSAnJztcbiAgdmFyIHZhbHVlID0gJyc7XG4gIHZhciBpc19udW1iZXIgPSB0cnVlO1xuICB2YXIgaW5fa2V5ICAgID0gZmFsc2U7XG4gIHZhciBpbl92YWx1ZSAgPSBmYWxzZTtcbiAgdmFyIGluX3F1b3RlICA9IGZhbHNlO1xuICB2YXIgaGFkX3F1b3RlID0gZmFsc2U7XG4gIHZhciBvYmplY3QgICAgPSB7fTtcbiAgdmFyIGRlYnVnICAgICA9IGV4cG9ydHMuZGVidWc7XG5cbiAgaWYobGluZVtsaW5lLmxlbmd0aCAtIDFdID09ICdcXG4nKXtcbiAgICBsaW5lID0gbGluZS5zbGljZSgwLGxpbmUubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIGZvcih2YXIgaT0wOyBpIDw9IGxpbmUubGVuZ3RoOyBpKyspe1xuXG4gICAgaWYoKGxpbmVbaV0gPT0gJyAnICYmICFpbl9xdW90ZSkgfHwgaSA9PSBsaW5lLmxlbmd0aCl7XG4gICAgICBpZihpbl9rZXkgJiYga2V5Lmxlbmd0aCA+IDApe1xuICAgICAgICBvYmplY3Rba2V5XSA9IHRydWU7XG4gICAgICB9ZWxzZSBpZihpbl92YWx1ZSl7XG4gICAgICAgIGlmKHZhbHVlID09ICd0cnVlJykgdmFsdWUgPSB0cnVlO1xuICAgICAgICBlbHNlIGlmKHZhbHVlID09ICdmYWxzZScpIHZhbHVlID0gZmFsc2U7XG4gICAgICAgIGVsc2UgaWYodmFsdWUgPT09ICcnICYmICFoYWRfcXVvdGUpIHZhbHVlID0gbnVsbDtcbiAgICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgIH1cblxuICAgICAgaWYoaSA9PSBsaW5lLmxlbmd0aCkgYnJlYWs7XG4gICAgICBlbHNlIHtcbiAgICAgICAgaW5fa2V5ICAgPSBmYWxzZTtcbiAgICAgICAgaW5fdmFsdWUgPSBmYWxzZTtcbiAgICAgICAgaW5fcXVvdGUgPSBmYWxzZTtcbiAgICAgICAgaGFkX3F1b3RlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYobGluZVtpXSA9PSAnPScgJiYgIWluX3F1b3RlKXtcbiAgICAgIGlmKGRlYnVnKSBjb25zb2xlLmxvZygnc3BsaXQnKVxuICAgICAgLy9zcGxpdFxuICAgICAgaW5fa2V5ID0gZmFsc2U7XG4gICAgICBpbl92YWx1ZSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYobGluZVtpXSA9PSAnXFxcXCcpe1xuICAgICAgaSArKyA7XG4gICAgICB2YWx1ZSArPSBsaW5lW2ldO1xuICAgICAgaWYoZGVidWcpIGNvbnNvbGUubG9nKCdlc2NhcGU6ICcgKyBsaW5lW2ldKVxuICAgIH1cbiAgICBlbHNlIGlmKGxpbmVbaV0gPT0gJ1wiJyl7XG4gICAgICBoYWRfcXVvdGUgPSB0cnVlO1xuICAgICAgaW5fcXVvdGUgPSAhaW5fcXVvdGU7XG4gICAgICBpZihkZWJ1ZykgY29uc29sZS5sb2coJ2luIHF1b3RlOiAnICsgaW5fcXVvdGUpXG4gICAgfVxuICAgIGVsc2UgaWYobGluZVtpXSAhPSAnICcgJiYgIWluX3ZhbHVlICYmICFpbl9rZXkpe1xuICAgICAgaWYoZGVidWcpIGNvbnNvbGUubG9nKCdzdGFydCBrZXkgd2l0aDogJyArIGxpbmVbaV0pXG4gICAgICBpbl9rZXkgPSB0cnVlO1xuICAgICAga2V5ID0gbGluZVtpXTtcbiAgICB9XG4gICAgZWxzZSBpZihpbl9rZXkpe1xuICAgICAgaWYoZGVidWcpIGNvbnNvbGUubG9nKCdhZGQgdG8ga2V5OiAnICsgbGluZVtpXSlcbiAgICAgIGtleSArPSBsaW5lW2ldXG4gICAgfVxuICAgIGVsc2UgaWYoaW5fdmFsdWUpe1xuICAgICAgaWYoZGVidWcpIGNvbnNvbGUubG9nKCdhZGQgdG8gdmFsdWU6ICcgKyBsaW5lW2ldKVxuICAgICAgdmFsdWUgKz0gbGluZVtpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuIiwiZXhwb3J0cy5sb2cgPSBmdW5jdGlvbihkYXRhLCBzdHJlYW0pIHtcbiAgdGhpcy5zdHJlYW0gPSB0aGlzLnN0cmVhbSB8fCBwcm9jZXNzLnN0ZG91dDtcbiAgaWYoc3RyZWFtID09IHVuZGVmaW5lZCkgc3RyZWFtID0gdGhpcy5zdHJlYW07XG5cbiAgdmFyIGxvZ0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHREYXRhLCBkYXRhKTtcblxuICBpZih0aGlzLnRpbWVycyl7XG4gICAgZm9yKHZhciBrZXkgaW4gdGhpcy50aW1lcnMpe1xuICAgICAgdmFyIG5vdyA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcbiAgICAgIGxvZ0RhdGFba2V5XSA9IChub3cgLSB0aGlzLnRpbWVyc1trZXldKS50b1N0cmluZygpICsgJ21zJyA7XG4gICAgfVxuICB9XG5cbiAgc3RyZWFtLndyaXRlKHRoaXMuc3RyaW5naWZ5KGxvZ0RhdGEpICsgXCJcXG5cIik7XG59XG5cbmV4cG9ydHMudGltZSA9IGZ1bmN0aW9uKGxhYmVsKSB7XG4gIHZhciBsb2dmbXQgPSByZXF1aXJlKCcuLi9sb2dmbXQnKTtcbiAgdmFyIHN0YXJ0VGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gIHZhciBsYWJlbCAgPSBsYWJlbCB8fCAnZWxhcHNlZCc7XG4gIHZhciB0aW1lciAgPSBuZXcgbG9nZm10KCk7XG4gIHRpbWVyLnN0cmVhbSA9IHRoaXMuc3RyZWFtO1xuICB0aW1lci5kZWZhdWx0RGF0YSA9IHRoaXMuZGVmYXVsdERhdGE7XG4gIHRpbWVyLnRpbWVycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGltZXJzKVxuICB0aW1lci50aW1lcnNbbGFiZWxdID0gc3RhcnRUaW1lO1xuICByZXR1cm4gdGltZXI7XG59XG5cbmV4cG9ydHMubmFtZXNwYWNlID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciBsb2dmbXQgPSByZXF1aXJlKCcuLi9sb2dmbXQnKTtcbiAgdmFyIG5hbWVzcGFjZWQgPSBuZXcgbG9nZm10KClcbiAgdmFyIG5hbWVzcGFjZSAgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHREYXRhLCBvYmplY3QpO1xuICBuYW1lc3BhY2VkLnN0cmVhbSA9IHRoaXMuc3RyZWFtO1xuICBuYW1lc3BhY2VkLmRlZmF1bHREYXRhID0gbmFtZXNwYWNlXG4gIG5hbWVzcGFjZWQudGltZXJzID0gdGhpcy50aW1lcnM7XG4gIHJldHVybiBuYW1lc3BhY2VkO1xufVxuXG5leHBvcnRzLmVycm9yID0gZnVuY3Rpb24oZXJyLCBpZCkge1xuICB0aGlzLm1heEVycm9yTGluZXMgPSB0aGlzLm1heEVycm9yTGluZXMgfHwgMTA7XG4gIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaWQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMiwgMTIpO1xuICB9XG4gIHZhciBlcnJvckxvZ2dlciA9IHRoaXMubmFtZXNwYWNlKHtcbiAgICBlcnJvcjogdHJ1ZSxcbiAgICBpZDppZCxcbiAgICBub3c6IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpXG4gIH0pXG4gIGVycm9yTG9nZ2VyLmxvZyh7IG1lc3NhZ2U6ZXJyLm1lc3NhZ2UgfSk7XG4gIGlmIChlcnIuc3RhY2spIHtcbiAgICB2YXIgc3RhY2sgPSBlcnIuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgIGZvciAodmFyIGxpbmUgaW4gc3RhY2spIHtcbiAgICAgIGlmIChsaW5lID49IHRoaXMubWF4RXJyb3JMaW5lcykgYnJlYWs7XG4gICAgICBlcnJvckxvZ2dlci5sb2coeyBsaW5lOmxpbmUsIHRyYWNlOnN0YWNrW2xpbmVdIH0pO1xuICAgIH1cbiAgfVxufVxuIiwidmFyIGNvbW1vbkZvcm1hdHRlciA9IGZ1bmN0aW9uKHJlcSwgcmVzKXtcbiAgaWYoKHR5cGVvZiByZXEucGF0aCkgPT0gJ2Z1bmN0aW9uJyl7XG4gICAgLy9pbiByZXN0aWZ5IHBhdGggaXMgYSBmdW5jdGlvblxuICAgIHZhciBwYXRoID0gcmVxLnBhdGgoKTtcbiAgfVxuICBlbHNle1xuICAgIC8vaW4gZXhwcmVzcyBpdCBpcyBhbiBhdHRyaWJ1dGVcbiAgICB2YXIgcGF0aCA9IHJlcS5vcmlnaW5hbFVybCB8fCByZXEucGF0aCB8fCByZXEudXJsO1xuICB9XG5cbiAgdmFyIGh0dHBIZWFkZXIgPSByZXEuaGVhZGVyICYmIHJlcS5oZWFkZXIoJ3gtZm9yd2FyZGVkLWZvcicpXG4gIHZhciByZXF1ZXN0SUQgID0gcmVxLmhlYWRlciAmJiByZXEuaGVhZGVyKCd4LXJlcXVlc3QtaWQnKVxuXG4gIHZhciBpcCA9IHJlcS5pcCB8fCBodHRwSGVhZGVyXG4gICAgICAgICAgICAgICAgICB8fCByZXEuY29ubmVjdGlvbi5yZW1vdGVBZGRyZXNzO1xuXG4gIHZhciByZXF1ZXN0RGF0YSA9ICB7XG4gICAgaXA6IGlwLFxuICAgIHRpbWU6IChuZXcgRGF0ZSgpKS50b0lTT1N0cmluZygpLFxuICAgIG1ldGhvZDogcmVxLm1ldGhvZCxcbiAgICBwYXRoOiBwYXRoLFxuICAgIFwic3RhdHVzXCI6IHJlcy5zdGF0dXNDb2RlLFxuICB9XG5cbiAgaWYgKHJlcXVlc3RJRCkge1xuICAgIHJlcXVlc3REYXRhLnJlcXVlc3RfaWQgPSByZXF1ZXN0SUQ7XG4gIH1cblxuICBpZihyZXMuZ2V0KXtcbiAgICByZXF1ZXN0RGF0YS5jb250ZW50X2xlbmd0aCA9IHJlcy5nZXQoJ2NvbnRlbnQtbGVuZ3RoJyk7XG4gICAgcmVxdWVzdERhdGEuY29udGVudF90eXBlID0gcmVzLmdldCgnY29udGVudC10eXBlJyk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3REYXRhO1xufVxuXG52YXIgaW1tZWRpYXRlTG9nZ2VyID0gZnVuY3Rpb24obG9nZ2VyLCBvcHRpb25zLCBmb3JtYXR0ZXIpe1xuICByZXR1cm4gZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpe1xuICAgIHZhciBkYXRhID0gZm9ybWF0dGVyKHJlcSwgcmVzKTtcbiAgICBsb2dnZXIubG9nKGRhdGEpO1xuICAgIG5leHQoKTtcbiAgfVxufVxuXG52YXIgdGltaW5nTG9nZ2VyID0gZnVuY3Rpb24obG9nZ2VyLCBvcHRpb25zLCBmb3JtYXR0ZXIpe1xuICByZXR1cm4gZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpe1xuICAgIHZhciBlbGFwc2VkID0gb3B0aW9ucy5lbGFwc2VkIHx8ICdlbGFwc2VkJztcbiAgICB2YXIgdGltZXIgICA9IGxvZ2dlci50aW1lKGVsYXBzZWQpO1xuICAgIHZhciBlbmQgPSByZXMuZW5kO1xuICAgIHJlcy5lbmQgPSBmdW5jdGlvbihjaHVuaywgZW5jb2RpbmcpIHtcbiAgICAgIHZhciBkYXRhID0gZm9ybWF0dGVyKHJlcSwgcmVzKTtcbiAgICAgIHJlcy5lbmQgPSBlbmQ7XG4gICAgICByZXMuZW5kKGNodW5rLCBlbmNvZGluZyk7XG4gICAgICB0aW1lci5sb2coZGF0YSk7XG4gICAgfTtcbiAgICBuZXh0KCk7XG4gIH1cbn1cblxuZXhwb3J0cy5pbml0ID0gZnVuY3Rpb24obG9nZ2VyLCBvcHRpb25zLCBmb3JtYXR0ZXIpIHtcbiAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG5cbiAgaWYoIWZvcm1hdHRlciAmJiAhb3B0aW9ucyl7XG4gICAgZm9ybWF0dGVyID0gY29tbW9uRm9ybWF0dGVyO1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBlbHNlIGlmKCFmb3JtYXR0ZXIpe1xuICAgIGlmKHR5cGVvZiBvcHRpb25zID09ICdmdW5jdGlvbicpe1xuICAgICAgZm9ybWF0dGVyID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9ZWxzZXtcbiAgICAgIGZvcm1hdHRlciA9IGNvbW1vbkZvcm1hdHRlcjtcbiAgICB9XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYob3B0aW9ucy5pbW1lZGlhdGUpe1xuICAgIHJldHVybiBpbW1lZGlhdGVMb2dnZXIobG9nZ2VyLCBvcHRpb25zLCBmb3JtYXR0ZXIpO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gdGltaW5nTG9nZ2VyKGxvZ2dlciwgb3B0aW9ucywgZm9ybWF0dGVyKTtcbiAgfVxufVxuXG5leHBvcnRzLmNvbW1vbkZvcm1hdHRlciA9IGNvbW1vbkZvcm1hdHRlcjtcbiIsInZhciBzcGxpdCAgICAgICA9IHJlcXVpcmUoJ3NwbGl0JylcbnZhciB0aHJvdWdoICAgICA9IHJlcXVpcmUoJ3Rocm91Z2gnKTtcbnZhciBQYXNzVGhyb3VnaCA9IHJlcXVpcmUoJ3N0cmVhbScpLlBhc3NUaHJvdWdoO1xuXG4vL3JldHVybnMgYSBzdHJlYW0gdGhhdCBzcGxpdHMgYW5kIHBhcnNlcyBsb2dmbXQgaW50byBvYmplY3RzXG5leHBvcnRzLnN0cmVhbVBhcnNlciA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICB2YXIgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHN0cmVhbVBhcnNlciA9IG5ldyBQYXNzVGhyb3VnaCgpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdmFyIGxvZ2ZtdFN0cmVhbSA9IHRocm91Z2goZnVuY3Rpb24obGluZSl7XG4gICAgaWYobGluZSAhPT0gJycpIHRoaXMucXVldWUoc2VsZi5wYXJzZShsaW5lKSlcbiAgfSlcblxuICAvLyBXaGVuIGEgc291cmNlIHN0cmVhbSBpcyBwaXBlZCB0byB1cywgdW5kbyB0aGF0IHBpcGUsIGFuZCBzYXZlXG4gIC8vIG9mZiB0aGUgc291cmNlIHN0cmVhbSBwaXBlZCBpbnRvIG91ciBpbnRlcm5hbGx5IG1hbmFnZWQgc3RyZWFtcy5cbiAgc3RyZWFtUGFyc2VyLm9uKCdwaXBlJywgZnVuY3Rpb24oc291cmNlKSB7XG4gICAgaWYoc291cmNlLnVucGlwZSkgc291cmNlLnVucGlwZSh0aGlzKTtcbiAgICB0aGlzLnRyYW5zZm9ybVN0cmVhbSA9IHNvdXJjZS5waXBlKHNwbGl0KCkpLnBpcGUobG9nZm10U3RyZWFtKTtcbiAgfSk7XG5cbiAgLy8gV2hlbiB3ZSdyZSBwaXBlZCB0byBhbm90aGVyIHN0cmVhbSwgaW5zdGVhZCBwaXBlIG91ciBpbnRlcm5hbFxuICAvLyB0cmFuc2Zvcm0gc3RyZWFtIHRvIHRoYXQgZGVzdGluYXRpb24uXG4gIHN0cmVhbVBhcnNlci5waXBlID0gZnVuY3Rpb24oZGVzdGluYXRpb24sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1TdHJlYW0ucGlwZShkZXN0aW5hdGlvbiwgb3B0aW9ucyk7XG4gIH07XG5cbiAgcmV0dXJuIHN0cmVhbVBhcnNlcjtcbn1cblxuLy8gcmV0dXJucyBhIHN0cmVhbSB0aGF0IHN0cmluZ2lmaWVzIG9iamVjdHNcbmV4cG9ydHMuc3RyZWFtU3RyaW5naWZ5ID0gZnVuY3Rpb24ob3B0aW9ucyl7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KCdkZWxpbWl0ZXInKSl7XG4gICAgdmFyIGRlbGltID0gb3B0aW9ucy5kZWxpbWl0ZXI7XG4gIH1lbHNle1xuICAgIHZhciBkZWxpbSA9IFwiXFxuXCI7XG4gIH1cblxuICByZXR1cm4gdGhyb3VnaChmdW5jdGlvbihkYXRhKXtcbiAgICB0aGlzLnF1ZXVlKHNlbGYuc3RyaW5naWZ5KGRhdGEpICsgZGVsaW0pXG4gIH0sIGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5xdWV1ZShudWxsKVxuICB9KVxufVxuIiwiZXhwb3J0cy5zdHJpbmdpZnkgPSBmdW5jdGlvbihkYXRhKXtcbiAgdmFyIGxpbmUgPSAnJztcblxuICBmb3IodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgdmFyIHZhbHVlID0gZGF0YVtrZXldO1xuICAgIHZhciBpc19udWxsID0gZmFsc2U7XG4gICAgaWYodmFsdWUgPT0gbnVsbCkge1xuICAgICAgaXNfbnVsbCA9IHRydWU7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBlbHNlIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcblxuICAgIHZhciBuZWVkc19xdW90aW5nICA9IHZhbHVlLmluZGV4T2YoJyAnKSA+IC0xIHx8IHZhbHVlLmluZGV4T2YoJz0nKSA+IC0xO1xuICAgIHZhciBuZWVkc19lc2NhcGluZyA9IHZhbHVlLmluZGV4T2YoJ1wiJykgPiAtMSB8fCB2YWx1ZS5pbmRleE9mKFwiXFxcXFwiKSA+IC0xO1xuXG4gICAgaWYobmVlZHNfZXNjYXBpbmcpIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW1wiXFxcXF0vZywgJ1xcXFwkJicpO1xuICAgIGlmKG5lZWRzX3F1b3RpbmcpIHZhbHVlID0gJ1wiJyArIHZhbHVlICsgJ1wiJztcbiAgICBpZih2YWx1ZSA9PT0gJycgJiYgIWlzX251bGwpIHZhbHVlID0gJ1wiXCInO1xuXG4gICAgbGluZSArPSBrZXkgKyAnPScgKyB2YWx1ZSArICcgJztcbiAgfVxuXG4gIC8vdHJpbSB0cmFsaW5nIHNwYWNlXG4gIHJldHVybiBsaW5lLnN1YnN0cmluZygwLGxpbmUubGVuZ3RoLTEpO1xufVxuXG4iLCIvL2NvbnN0cnVjdG9yXG5mdW5jdGlvbiBsb2dmbXQoKSB7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGxvZ2ZtdDtcblxudmFyIHN0cmVhbWluZyAgICAgICAgPSByZXF1aXJlKCcuL2xpYi9zdHJlYW1pbmcnKTtcbnZhciBib2R5UGFyc2VyICAgICAgID0gcmVxdWlyZSgnLi9saWIvYm9keV9wYXJzZXInKTtcbnZhciBib2R5UGFyc2VyU3RyZWFtID0gcmVxdWlyZSgnLi9saWIvYm9keV9wYXJzZXJfc3RyZWFtJyk7XG52YXIgbG9nZm10UGFyc2VyICAgICA9IHJlcXVpcmUoJy4vbGliL2xvZ2ZtdF9wYXJzZXInKTtcbnZhciBsb2dnZXIgICAgICAgICAgID0gcmVxdWlyZSgnLi9saWIvbG9nZ2VyJyk7XG52YXIgcmVxdWVzdExvZ2dlciAgICA9IHJlcXVpcmUoJy4vbGliL3JlcXVlc3RfbG9nZ2VyJyk7XG52YXIgc2VyaWFsaXplciAgICAgICA9IHJlcXVpcmUoJy4vbGliL3N0cmluZ2lmeScpO1xuXG4vL0J1aWxkIHVwIGxvZ2ZtdCBwcm90b3R5cGVcbk9iamVjdC5hc3NpZ24obG9nZm10LnByb3RvdHlwZSwgbG9nZ2VyKTtcbk9iamVjdC5hc3NpZ24obG9nZm10LnByb3RvdHlwZSwgc3RyZWFtaW5nKTtcblxubG9nZm10LnByb3RvdHlwZS5zdHJpbmdpZnkgPSBzZXJpYWxpemVyLnN0cmluZ2lmeTtcbmxvZ2ZtdC5wcm90b3R5cGUucGFyc2UgPSBsb2dmbXRQYXJzZXIucGFyc2U7XG5cbi8vIFN5bmNocm9ub3VzIGJvZHkgcGFyc2VyXG5sb2dmbXQucHJvdG90eXBlLmJvZHlQYXJzZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gIHZhciBtaW1lID0gb3B0aW9ucy5jb250ZW50VHlwZSB8fCBcImFwcGxpY2F0aW9uL2xvZ3BsZXgtMVwiO1xuICByZXR1cm4gYm9keVBhcnNlcih7IGNvbnRlbnRUeXBlOiBtaW1lLCBwYXJzZXI6IHRoaXMucGFyc2UgfSk7XG59O1xuXG4vLyBTdHJlYW0gcGFyc2VyXG5sb2dmbXQucHJvdG90eXBlLmJvZHlQYXJzZXJTdHJlYW0gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gIHZhciBtaW1lID0gb3B0aW9ucy5jb250ZW50VHlwZSB8fCBcImFwcGxpY2F0aW9uL2xvZ3BsZXgtMVwiO1xuICByZXR1cm4gYm9keVBhcnNlclN0cmVhbSh7IGNvbnRlbnRUeXBlOiBtaW1lIH0pO1xufTtcblxubG9nZm10LnByb3RvdHlwZS5yZXF1ZXN0TG9nZ2VyID0gZnVuY3Rpb24ob3B0aW9ucywgZm9ybWF0dGVyKSB7XG4gIHJldHVybiByZXF1ZXN0TG9nZ2VyLmluaXQodGhpcywgb3B0aW9ucywgZm9ybWF0dGVyKTtcbn07XG5cbmxvZ2ZtdC5wcm90b3R5cGUucmVxdWVzdExvZ2dlci5jb21tb25Gb3JtYXR0ZXIgPSByZXF1ZXN0TG9nZ2VyLmNvbW1vbkZvcm1hdHRlcjtcblxuT2JqZWN0LmFzc2lnbihsb2dmbXQsIGxvZ2ZtdC5wcm90b3R5cGUpO1xuIiwiLy9maWx0ZXIgd2lsbCByZWVtaXQgdGhlIGRhdGEgaWYgY2IoZXJyLHBhc3MpIHBhc3MgaXMgdHJ1dGh5XG5cbi8vIHJlZHVjZSBpcyBtb3JlIHRyaWNreVxuLy8gbWF5YmUgd2Ugd2FudCB0byBncm91cCB0aGUgcmVkdWN0aW9ucyBvciBlbWl0IHByb2dyZXNzIHVwZGF0ZXMgb2NjYXNpb25hbGx5XG4vLyB0aGUgbW9zdCBiYXNpYyByZWR1Y2UganVzdCBlbWl0cyBvbmUgJ2RhdGEnIGV2ZW50IGFmdGVyIGl0IGhhcyByZWNpZXZlZCAnZW5kJ1xuXG5cbnZhciB0aHJvdWdoID0gcmVxdWlyZSgndGhyb3VnaCcpXG52YXIgRGVjb2RlciA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyJykuU3RyaW5nRGVjb2RlclxuXG5tb2R1bGUuZXhwb3J0cyA9IHNwbGl0XG5cbi8vVE9ETyBwYXNzIGluIGEgZnVuY3Rpb24gdG8gbWFwIGFjcm9zcyB0aGUgbGluZXMuXG5cbmZ1bmN0aW9uIHNwbGl0IChtYXRjaGVyLCBtYXBwZXIpIHtcbiAgdmFyIGRlY29kZXIgPSBuZXcgRGVjb2RlcigpXG4gIHZhciBzb0ZhciA9ICcnXG4gIGlmKCdmdW5jdGlvbicgPT09IHR5cGVvZiBtYXRjaGVyKVxuICAgIG1hcHBlciA9IG1hdGNoZXIsIG1hdGNoZXIgPSBudWxsXG4gIGlmICghbWF0Y2hlcilcbiAgICBtYXRjaGVyID0gL1xccj9cXG4vXG5cbiAgZnVuY3Rpb24gZW1pdChzdHJlYW0sIHBpZWNlKSB7XG4gICAgaWYobWFwcGVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwaWVjZSA9IG1hcHBlcihwaWVjZSlcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVycilcbiAgICAgIH1cbiAgICAgIGlmKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgcGllY2UpXG4gICAgICAgIHN0cmVhbS5xdWV1ZShwaWVjZSlcbiAgICB9XG4gICAgZWxzZVxuICAgICAgc3RyZWFtLnF1ZXVlKHBpZWNlKVxuICB9XG5cbiAgZnVuY3Rpb24gbmV4dCAoc3RyZWFtLCBidWZmZXIpIHsgXG4gICAgdmFyIHBpZWNlcyA9IChzb0ZhciArIGJ1ZmZlcikuc3BsaXQobWF0Y2hlcilcbiAgICBzb0ZhciA9IHBpZWNlcy5wb3AoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwaWVjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwaWVjZSA9IHBpZWNlc1tpXVxuICAgICAgZW1pdChzdHJlYW0sIHBpZWNlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aHJvdWdoKGZ1bmN0aW9uIChiKSB7XG4gICAgbmV4dCh0aGlzLCBkZWNvZGVyLndyaXRlKGIpKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgaWYoZGVjb2Rlci5lbmQpIFxuICAgICAgbmV4dCh0aGlzLCBkZWNvZGVyLmVuZCgpKVxuICAgIGlmKHNvRmFyICE9IG51bGwpXG4gICAgICBlbWl0KHRoaXMsIHNvRmFyKVxuICAgIHRoaXMucXVldWUobnVsbClcbiAgfSlcbn1cblxuIiwidmFyIFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpXG5cbi8vIHRocm91Z2hcbi8vXG4vLyBhIHN0cmVhbSB0aGF0IGRvZXMgbm90aGluZyBidXQgcmUtZW1pdCB0aGUgaW5wdXQuXG4vLyB1c2VmdWwgZm9yIGFnZ3JlZ2F0aW5nIGEgc2VyaWVzIG9mIGNoYW5naW5nIGJ1dCBub3QgZW5kaW5nIHN0cmVhbXMgaW50byBvbmUgc3RyZWFtKVxuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0aHJvdWdoXG50aHJvdWdoLnRocm91Z2ggPSB0aHJvdWdoXG5cbi8vY3JlYXRlIGEgcmVhZGFibGUgd3JpdGFibGUgc3RyZWFtLlxuXG5mdW5jdGlvbiB0aHJvdWdoICh3cml0ZSwgZW5kLCBvcHRzKSB7XG4gIHdyaXRlID0gd3JpdGUgfHwgZnVuY3Rpb24gKGRhdGEpIHsgdGhpcy5xdWV1ZShkYXRhKSB9XG4gIGVuZCA9IGVuZCB8fCBmdW5jdGlvbiAoKSB7IHRoaXMucXVldWUobnVsbCkgfVxuXG4gIHZhciBlbmRlZCA9IGZhbHNlLCBkZXN0cm95ZWQgPSBmYWxzZSwgYnVmZmVyID0gW10sIF9lbmRlZCA9IGZhbHNlXG4gIHZhciBzdHJlYW0gPSBuZXcgU3RyZWFtKClcbiAgc3RyZWFtLnJlYWRhYmxlID0gc3RyZWFtLndyaXRhYmxlID0gdHJ1ZVxuICBzdHJlYW0ucGF1c2VkID0gZmFsc2VcblxuLy8gIHN0cmVhbS5hdXRvUGF1c2UgICA9ICEob3B0cyAmJiBvcHRzLmF1dG9QYXVzZSAgID09PSBmYWxzZSlcbiAgc3RyZWFtLmF1dG9EZXN0cm95ID0gIShvcHRzICYmIG9wdHMuYXV0b0Rlc3Ryb3kgPT09IGZhbHNlKVxuXG4gIHN0cmVhbS53cml0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgd3JpdGUuY2FsbCh0aGlzLCBkYXRhKVxuICAgIHJldHVybiAhc3RyZWFtLnBhdXNlZFxuICB9XG5cbiAgZnVuY3Rpb24gZHJhaW4oKSB7XG4gICAgd2hpbGUoYnVmZmVyLmxlbmd0aCAmJiAhc3RyZWFtLnBhdXNlZCkge1xuICAgICAgdmFyIGRhdGEgPSBidWZmZXIuc2hpZnQoKVxuICAgICAgaWYobnVsbCA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuIHN0cmVhbS5lbWl0KCdlbmQnKVxuICAgICAgZWxzZVxuICAgICAgICBzdHJlYW0uZW1pdCgnZGF0YScsIGRhdGEpXG4gICAgfVxuICB9XG5cbiAgc3RyZWFtLnF1ZXVlID0gc3RyZWFtLnB1c2ggPSBmdW5jdGlvbiAoZGF0YSkge1xuLy8gICAgY29uc29sZS5lcnJvcihlbmRlZClcbiAgICBpZihfZW5kZWQpIHJldHVybiBzdHJlYW1cbiAgICBpZihkYXRhID09PSBudWxsKSBfZW5kZWQgPSB0cnVlXG4gICAgYnVmZmVyLnB1c2goZGF0YSlcbiAgICBkcmFpbigpXG4gICAgcmV0dXJuIHN0cmVhbVxuICB9XG5cbiAgLy90aGlzIHdpbGwgYmUgcmVnaXN0ZXJlZCBhcyB0aGUgZmlyc3QgJ2VuZCcgbGlzdGVuZXJcbiAgLy9tdXN0IGNhbGwgZGVzdHJveSBuZXh0IHRpY2ssIHRvIG1ha2Ugc3VyZSB3ZSdyZSBhZnRlciBhbnlcbiAgLy9zdHJlYW0gcGlwZWQgZnJvbSBoZXJlLlxuICAvL3RoaXMgaXMgb25seSBhIHByb2JsZW0gaWYgZW5kIGlzIG5vdCBlbWl0dGVkIHN5bmNocm9ub3VzbHkuXG4gIC8vYSBuaWNlciB3YXkgdG8gZG8gdGhpcyBpcyB0byBtYWtlIHN1cmUgdGhpcyBpcyB0aGUgbGFzdCBsaXN0ZW5lciBmb3IgJ2VuZCdcblxuICBzdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBzdHJlYW0ucmVhZGFibGUgPSBmYWxzZVxuICAgIGlmKCFzdHJlYW0ud3JpdGFibGUgJiYgc3RyZWFtLmF1dG9EZXN0cm95KVxuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN0cmVhbS5kZXN0cm95KClcbiAgICAgIH0pXG4gIH0pXG5cbiAgZnVuY3Rpb24gX2VuZCAoKSB7XG4gICAgc3RyZWFtLndyaXRhYmxlID0gZmFsc2VcbiAgICBlbmQuY2FsbChzdHJlYW0pXG4gICAgaWYoIXN0cmVhbS5yZWFkYWJsZSAmJiBzdHJlYW0uYXV0b0Rlc3Ryb3kpXG4gICAgICBzdHJlYW0uZGVzdHJveSgpXG4gIH1cblxuICBzdHJlYW0uZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZihlbmRlZCkgcmV0dXJuXG4gICAgZW5kZWQgPSB0cnVlXG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCkgc3RyZWFtLndyaXRlKGRhdGEpXG4gICAgX2VuZCgpIC8vIHdpbGwgZW1pdCBvciBxdWV1ZVxuICAgIHJldHVybiBzdHJlYW1cbiAgfVxuXG4gIHN0cmVhbS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKGRlc3Ryb3llZCkgcmV0dXJuXG4gICAgZGVzdHJveWVkID0gdHJ1ZVxuICAgIGVuZGVkID0gdHJ1ZVxuICAgIGJ1ZmZlci5sZW5ndGggPSAwXG4gICAgc3RyZWFtLndyaXRhYmxlID0gc3RyZWFtLnJlYWRhYmxlID0gZmFsc2VcbiAgICBzdHJlYW0uZW1pdCgnY2xvc2UnKVxuICAgIHJldHVybiBzdHJlYW1cbiAgfVxuXG4gIHN0cmVhbS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihzdHJlYW0ucGF1c2VkKSByZXR1cm5cbiAgICBzdHJlYW0ucGF1c2VkID0gdHJ1ZVxuICAgIHJldHVybiBzdHJlYW1cbiAgfVxuXG4gIHN0cmVhbS5yZXN1bWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYoc3RyZWFtLnBhdXNlZCkge1xuICAgICAgc3RyZWFtLnBhdXNlZCA9IGZhbHNlXG4gICAgICBzdHJlYW0uZW1pdCgncmVzdW1lJylcbiAgICB9XG4gICAgZHJhaW4oKVxuICAgIC8vbWF5IGhhdmUgYmVjb21lIHBhdXNlZCBhZ2FpbixcbiAgICAvL2FzIGRyYWluIGVtaXRzICdkYXRhJy5cbiAgICBpZighc3RyZWFtLnBhdXNlZClcbiAgICAgIHN0cmVhbS5lbWl0KCdkcmFpbicpXG4gICAgcmV0dXJuIHN0cmVhbVxuICB9XG4gIHJldHVybiBzdHJlYW1cbn1cblxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbImNzcyIsIlJlYWN0IiwidXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uIiwiSW5saW5lRmllbGQiLCJJbmxpbmVGaWVsZFJvdyIsIklubGluZVN3aXRjaCIsInVzZVN0eWxlcyIsIk5vZGVHcmFwaFNldHRpbmdzIiwib3B0aW9ucyIsIm9uT3B0aW9uc0NoYW5nZSIsInN0eWxlcyIsImdldFN0eWxlcyIsImNvbnRhaW5lciIsInJvdyIsImpzb25EYXRhIiwibm9kZUdyYXBoIiwiZW5hYmxlZCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNoZWNrZWQiLCJ0aGVtZSIsIlNlZ21lbnRJbnB1dCIsIklubGluZUxhYmVsIiwiSWNvbiIsIkVRX1dJRFRIIiwiS2V5VmFsdWVJbnB1dCIsInZhbHVlcyIsIm9uQ2hhbmdlIiwiaWQiLCJrZXlQbGFjZWhvbGRlciIsInZhbHVlUGxhY2Vob2xkZXIiLCJ3cmFwcGVyIiwibGVuZ3RoIiwibWFwIiwidmFsdWUiLCJpZHgiLCJwYWlyIiwia2V5IiwiZSIsInYiLCJpIiwiU3RyaW5nIiwib3BlcmF0b3IiLCJzbGljZSIsInNwYWNpbmciLCJ4cyIsInBhbGV0dGUiLCJvcmFuZ2UiLCJEYXRhU291cmNlUGlja2VyIiwiSW5wdXQiLCJUYWdzSW5wdXQiLCJUcmFjZVRvTG9nc1NldHRpbmdzIiwid2lkdGgiLCJpbmZvVGV4dCIsImRzIiwidHlwZSIsInRyYWNlc1RvTG9ncyIsImRhdGFzb3VyY2VVaWQiLCJ1aWQiLCJ0YWdzIiwibWFwVGFnTmFtZXNFbmFibGVkIiwibWFwcGVkVGFncyIsInRhZyIsInNwYW5TdGFydFRpbWVTaGlmdCIsInNwYW5FbmRUaW1lU2hpZnQiLCJmaWx0ZXJCeVRyYWNlSUQiLCJmaWx0ZXJCeVNwYW5JRCIsIm1kIiwiY29sb3JzIiwidGV4dFNlbWlXZWFrIiwiQnV0dG9uIiwiVHJhY2VUb01ldHJpY3NTZXR0aW5ncyIsInRyYWNlc1RvTWV0cmljcyIsInVuZGVmaW5lZCIsInF1ZXJ5IiwiRmllbGRUeXBlIiwiTXV0YWJsZURhdGFGcmFtZSIsIk5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMiLCJGaWVsZHMiLCJnZXROb25PdmVybGFwcGluZ0R1cmF0aW9uIiwicmFuZ2VzIiwic29ydCIsImEiLCJiIiwibWVyZ2VkUmFuZ2VzIiwicmVkdWNlIiwiYWNjIiwicmFuZ2UiLCJ0YWlsIiwicHJldlN0YXJ0IiwicHJldkVuZCIsInN0YXJ0IiwiZW5kIiwibWFrZVNwYW5NYXAiLCJnZXRTcGFuIiwic3Bhbk1hcCIsInNwYW4iLCJpbmRleCIsImNoaWxkcmVuIiwicGFyZW50SWQiLCJwYXJlbnRJZHMiLCJwdXNoIiwiZ2V0U3RhdHMiLCJkdXJhdGlvbiIsInRyYWNlRHVyYXRpb24iLCJzZWxmRHVyYXRpb24iLCJtYWluIiwidG9GaXhlZE5vVHJhaWxpbmdaZXJvcyIsInNlY29uZGFyeSIsIm4iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIm1ha2VGcmFtZXMiLCJub2Rlc0ZyYW1lIiwiZmllbGRzIiwibmFtZSIsInN0cmluZyIsInRpdGxlIiwic3ViVGl0bGUiLCJtYWluU3RhdCIsImNvbmZpZyIsImRpc3BsYXlOYW1lIiwic2Vjb25kYXJ5U3RhdCIsImNvbG9yIiwibnVtYmVyIiwibW9kZSIsIm1ldGEiLCJwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZSIsImVkZ2VzRnJhbWUiLCJ0YXJnZXQiLCJzb3VyY2UiLCJ1c2VTdGF0ZSIsIkNTU1RyYW5zaXRpb24iLCJkdXJhdGlvblBsYWNlaG9sZGVyIiwiQWR2YW5jZWRPcHRpb25zIiwic2hvd0FkdmFuY2VkT3B0aW9ucyIsInNldFNob3dBZHZhbmNlZE9wdGlvbnMiLCJhZHZhbmNlZE9wdGlvbnNDb250YWluZXIiLCJhbmdsZVVwIiwiYW5nbGVEb3duIiwibWluRHVyYXRpb24iLCJtYXhEdXJhdGlvbiIsImxpbWl0IiwicGFyc2VJbnQiLCJlbnRlciIsImVudGVyQWN0aXZlIiwiZXhpdCIsImV4aXRBY3RpdmUiLCJEYXRhU291cmNlSHR0cFNldHRpbmdzIiwiQ29uZmlnRWRpdG9yIiwiZmVhdHVyZVRvZ2dsZXMiLCJ0cmFjZVRvTWV0cmljcyIsIkZpbGVEcm9wem9uZSIsIlF1ZXJ5RmllbGQiLCJSYWRpb0J1dHRvbkdyb3VwIiwidXNlVGhlbWUyIiwiU2VhcmNoRm9ybSIsIlF1ZXJ5RWRpdG9yIiwiZGF0YXNvdXJjZSIsIm9uUnVuUXVlcnkiLCJvbkNoYW5nZVF1ZXJ5IiwibmV4dFF1ZXJ5IiwicmVuZGVyRWRpdG9yQm9keSIsInF1ZXJ5VHlwZSIsInBhZGRpbmciLCJtdWx0aXBsZSIsInJlc3VsdCIsInVwbG9hZGVkSnNvbiIsImxhYmVsIiwiZGVib3VuY2UiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsIkFzeW5jU2VsZWN0IiwiZnV6enlNYXRjaCIsIm5vdGlmeUFwcCIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiZGlzcGF0Y2giLCJ0cmFuc2Zvcm1Ub0xvZ2ZtdCIsIkFMTF9PUEVSQVRJT05TX0tFWSIsImFsbE9wZXJhdGlvbnNPcHRpb24iLCJzZXJ2aWNlT3B0aW9ucyIsInNldFNlcnZpY2VPcHRpb25zIiwib3BlcmF0aW9uT3B0aW9ucyIsInNldE9wZXJhdGlvbk9wdGlvbnMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZXJ2aWNlcyIsIm9wZXJhdGlvbnMiLCJsb2FkU2VydmljZXMiLCJ1cmwiLCJsb2FkZXJPZlR5cGUiLCJwcmV2VmFsdWUiLCJtZXRhZGF0YVJlcXVlc3QiLCJzZXJ2aWNlIiwiZmlsdGVyZWRPcHRpb25zIiwiZmlsdGVyIiwiaXRlbSIsImZvdW5kIiwiZXJyb3IiLCJnZXRTZXJ2aWNlT3B0aW9ucyIsInVzZXJRdWVyeSIsImdldE9wZXJhdGlvbk9wdGlvbnMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXJ2aWNlU2VhcmNoIiwibGVhZGluZyIsInRyYWlsaW5nIiwib3BlcmF0aW9uU2VhcmNoIiwiZ2V0U2VydmljZXMiLCJnZXRPcGVyYXRpb25zIiwibWF4V2lkdGgiLCJmaW5kIiwib3BlcmF0aW9uIiwiaWRlbnRpdHkiLCJvbWl0IiwicGljayIsInBpY2tCeSIsImxhc3RWYWx1ZUZyb20iLCJvZiIsImNhdGNoRXJyb3IiLCJEYXRhU291cmNlQXBpIiwiZGF0ZU1hdGgiLCJnZXRCYWNrZW5kU3J2IiwiZ2V0VGVtcGxhdGVTcnYiLCJzZXJpYWxpemVQYXJhbXMiLCJnZXRUaW1lU3J2IiwiY3JlYXRlR3JhcGhGcmFtZXMiLCJjcmVhdGVUYWJsZUZyYW1lIiwiY3JlYXRlVHJhY2VGcmFtZSIsImNvbnZlcnRUYWdzTG9nZm10IiwiSmFlZ2VyRGF0YXNvdXJjZSIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2VTZXR0aW5ncyIsInRpbWVTcnYiLCJwYXJhbXMiLCJyZXMiLCJfcmVxdWVzdCIsImhpZGVGcm9tSW5zcGVjdG9yIiwiZGF0YSIsInRhcmdldHMiLCJlbXB0eVRyYWNlRGF0YUZyYW1lIiwicmVwbGFjZSIsInNjb3BlZFZhcnMiLCJwaXBlIiwicmVzcG9uc2UiLCJ0cmFjZURhdGEiLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlIiwiamFlZ2VyUXVlcnkiLCJnZXRUaW1lUmFuZ2UiLCJsb29rYmFjayIsInRlc3REYXRhc291cmNlIiwidGVzdFJlc3VsdCIsInN0YXR1cyIsImVyciIsInN0YXR1c1RleHQiLCJzdHJpbmdpZnkiLCJ0aW1lUmFuZ2UiLCJnZXRUaW1lIiwiZnJvbSIsInRvIiwiZ2V0UXVlcnlEaXNwbGF5VGV4dCIsImFwaVVybCIsInJlcSIsImZldGNoIiwiZGF0ZSIsInJvdW5kVXAiLCJ2YWx1ZU9mIiwidHJhY2UiLCJjdXN0b20iLCJ0cmFjZUZvcm1hdCIsIm5vZGVzIiwiZWRnZXMiLCJjb252ZXJ0VHJhY2VUb0dyYXBoIiwibm9kZSIsImFkZCIsImVkZ2UiLCJmaW5kVHJhY2VEdXJhdGlvbiIsInNwYW5zIiwic3BhbklEIiwicmVmZXJlbmNlcyIsInIiLCJyZWZUeXBlIiwicHJvY2VzcyIsInByb2Nlc3NlcyIsInByb2Nlc3NJRCIsImMiLCJzdGFydFRpbWUiLCJjaGlsZHJlbkR1cmF0aW9uIiwic3RhdHMiLCJzZXJ2aWNlTmFtZSIsIm9wZXJhdGlvbk5hbWUiLCJwYXJlbnRTcGFuSUQiLCJ0cmFjZUVuZFRpbWUiLCJ0cmFjZVN0YXJ0VGltZSIsIkluZmluaXR5IiwiRGF0YVNvdXJjZVBsdWdpbiIsInBsdWdpbiIsInNldENvbmZpZ0VkaXRvciIsInNldFF1ZXJ5RWRpdG9yIiwidHJhbnNmb3JtVHJhY2VEYXRhIiwicyIsInRvU3BhblJvdyIsImZyYW1lIiwib3RoZXIiLCJ0cmFjZUlEIiwibG9ncyIsImwiLCJ0aW1lc3RhbXAiLCJ3YXJuaW5ncyIsInN0YWNrVHJhY2VzIiwic2VydmljZVRhZ3MiLCJ1bml0IiwiZGlzcGxheU5hbWVGcm9tRFMiLCJsaW5rcyIsImludGVybmFsIiwiZGF0YXNvdXJjZU5hbWUiLCJ0aW1lIiwidHJhbnNmb3JtVG9UcmFjZURhdGEiLCJ0cmFjZU5hbWUiLCJ0cmFuc2Zvcm1Ub0phZWdlciIsInRyYWNlUmVzcG9uc2UiLCJnZXQiLCJwIiwiZmxhZ3MiLCJPYmplY3QiLCJrZXlzIiwidG90YWwiLCJvZmZzZXQiLCJlcnJvcnMiLCJsb2dmbXQiLCJmb3JFYWNoIl0sInNvdXJjZVJvb3QiOiIifQ==