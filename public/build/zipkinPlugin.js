"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["zipkinPlugin"],{

/***/ "./public/app/core/components/NodeGraphSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./public/app/plugins/datasource/zipkin/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      defaultUrl: "http://localhost:9411",
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

/***/ "./public/app/plugins/datasource/zipkin/QueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZipkinQueryField": () => (/* binding */ ZipkinQueryField),
/* harmony export */   "useLoadOptions": () => (/* binding */ useLoadOptions),
/* harmony export */   "useServices": () => (/* binding */ useServices)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMountedState.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/zipkin/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













const getStyles = theme => {
  return {
    tracesCascader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      label: 'tracesCascader',
      marginRight: theme.spacing(1)
    })
  };
};

const ZipkinQueryField = ({
  query,
  onChange,
  onRunQuery,
  datasource
}) => {
  const serviceOptions = useServices(datasource);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const {
    onLoadOptions,
    allOptions
  } = useLoadOptions(datasource);
  const onSelectTrace = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((values, selectedOptions) => {
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        label: "Query type",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
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
    }), query.queryType === 'upload' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
        padding: theme.spacing(2)
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FileDropzone, {
        options: {
          multiple: false
        },
        onLoad: result => {
          datasource.uploadedJson = result;
          onRunQuery();
        }
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ButtonCascader, {
        options: cascaderOptions,
        onChange: onSelectTrace,
        loadData: onLoadOptions,
        variant: "secondary",
        buttonProps: {
          className: styles.tracesCascader
        },
        children: "Traces"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "gf-form gf-form--grow flex-shrink-1 min-width-15",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.QueryField, {
          query: query.query,
          onChange: onChangeQuery,
          onRunQuery: onRunQuery,
          placeholder: 'Insert Trace ID (run with Shift+Enter)',
          portalOrigin: "zipkin"
        })
      })]
    })]
  });
}; // Exported for tests

function useServices(datasource) {
  const url = `${_constants__WEBPACK_IMPORTED_MODULE_7__.apiPrefix}/services`;
  const [servicesOptions, fetch] = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(async () => {
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
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_6__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_4__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.createErrorNotification)('Failed to load services from Zipkin', error)));
      throw error;
    }
  }, [datasource]);
  (0,react_use__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
    // We should probably call this periodically to get new services after mount.
    fetch();
  });
  return servicesOptions;
}
// Exported for tests
function useLoadOptions(datasource) {
  const isMounted = (0,react_use__WEBPACK_IMPORTED_MODULE_11__["default"])();
  const [allOptions, setAllOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const [, fetchSpans] = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(async function findSpans(service) {
    const url = `${_constants__WEBPACK_IMPORTED_MODULE_7__.apiPrefix}/spans`;

    try {
      // The response of this should have been full ZipkinSpan objects based on API docs but is just list
      // of span names.
      // TODO: check if this is some issue of version used or something else
      const response = await datasource.metadataRequest(url, {
        serviceName: service
      });

      if (isMounted()) {
        setAllOptions(state => {
          const spanOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.fromPairs)(response.map(span => [span, undefined]));
          return Object.assign({}, state, {
            [service]: spanOptions
          });
        });
      }
    } catch (error) {
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_6__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_4__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.createErrorNotification)('Failed to load spans from Zipkin', error)));
      throw error;
    }
  }, [datasource, allOptions]);
  const [, fetchTraces] = (0,react_use__WEBPACK_IMPORTED_MODULE_9__["default"])(async function findTraces(serviceName, spanName) {
    const url = `${_constants__WEBPACK_IMPORTED_MODULE_7__.apiPrefix}/traces`;
    const search = {
      serviceName,
      spanName // See other params and default here https://zipkin.io/zipkin-api/#/default/get_traces

    };

    try {
      // This should return just root traces as there isn't any nesting
      const traces = await datasource.metadataRequest(url, search);

      if (isMounted()) {
        const newTraces = traces.length ? (0,lodash__WEBPACK_IMPORTED_MODULE_1__.fromPairs)(traces.map(trace => {
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
      (0,app_store_store__WEBPACK_IMPORTED_MODULE_6__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_4__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_5__.createErrorNotification)('Failed to load spans from Zipkin', error)));
      throw error;
    }
  }, [datasource]);
  const onLoadOptions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(selectedOptions => {
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
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
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
  isLeaf: true // Cannot be disabled because then cascader shows 'loading' for some reason.
  // disabled: true,

}];
const noTracesOptions = {
  '[No traces in time range]': NO_TRACES_KEY
};

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiPrefix": () => (/* binding */ apiPrefix)
/* harmony export */ });
const apiPrefix = '/api/v2';

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZipkinDatasource": () => (/* binding */ ZipkinDatasource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _core_utils_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/utils/fetch.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/zipkin/constants.ts");
/* harmony import */ var _utils_graphTransform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/zipkin/utils/graphTransform.ts");
/* harmony import */ var _utils_transforms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/zipkin/utils/transforms.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class ZipkinDatasource extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourceApi {
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
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
          data: []
        });
      }

      try {
        var _this$nodeGraph;

        const traceData = JSON.parse(this.uploadedJson);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(responseToDataQueryResponse({
          data: traceData
        }, (_this$nodeGraph = this.nodeGraph) === null || _this$nodeGraph === void 0 ? void 0 : _this$nodeGraph.enabled));
      } catch (error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
          error: {
            message: 'JSON is not valid Zipkin format'
          },
          data: []
        });
      }
    }

    if (target.query) {
      return this.request(`${_constants__WEBPACK_IMPORTED_MODULE_3__.apiPrefix}/trace/${encodeURIComponent(target.query)}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(res => {
        var _this$nodeGraph2;

        return responseToDataQueryResponse(res, (_this$nodeGraph2 = this.nodeGraph) === null || _this$nodeGraph2 === void 0 ? void 0 : _this$nodeGraph2.enabled);
      }));
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(emptyDataQueryResponse);
  }

  async metadataRequest(url, params) {
    const res = await (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.lastValueFrom)(this.request(url, params, {
      hideFromInspector: true
    }));
    return res.data;
  }

  async testDatasource() {
    await this.metadataRequest(`${_constants__WEBPACK_IMPORTED_MODULE_3__.apiPrefix}/services`);
    return {
      status: 'success',
      message: 'Data source is working'
    };
  }

  getQueryDisplayText(query) {
    return query.query;
  }

  request(apiUrl, data, options) {
    const params = data ? (0,_core_utils_fetch__WEBPACK_IMPORTED_MODULE_2__.serializeParams)(data) : '';
    const url = `${this.instanceSettings.url}${apiUrl}${params.length ? `?${params}` : ''}`;
    const req = Object.assign({}, options, {
      url
    });
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().fetch(req);
  }

}

function responseToDataQueryResponse(response, nodeGraph = false) {
  let data = response !== null && response !== void 0 && response.data ? [(0,_utils_transforms__WEBPACK_IMPORTED_MODULE_5__.transformResponse)(response === null || response === void 0 ? void 0 : response.data)] : [];

  if (nodeGraph) {
    data.push(...(0,_utils_graphTransform__WEBPACK_IMPORTED_MODULE_4__.createGraphFrames)(response === null || response === void 0 ? void 0 : response.data));
  }

  return {
    data
  };
}

const emptyDataQueryResponse = {
  data: [new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
    fields: [{
      name: 'trace',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldType.trace,
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

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _ConfigEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/zipkin/ConfigEditor.tsx");
/* harmony import */ var _QueryField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/zipkin/QueryField.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/zipkin/datasource.ts");




const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_3__.ZipkinDatasource).setQueryEditor(_QueryField__WEBPACK_IMPORTED_MODULE_2__.ZipkinQueryField).setConfigEditor(_ConfigEditor__WEBPACK_IMPORTED_MODULE_1__.ConfigEditor);

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/utils/graphTransform.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

function convertTraceToGraph(spans) {
  const nodes = [];
  const edges = [];
  const traceDuration = findTraceDuration(spans);
  const spanMap = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.makeSpanMap)(index => {
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
    const childrenDuration = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getNonOverlappingDuration)(ranges);
    const selfDuration = span.duration - childrenDuration;
    const stats = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getStats)(span.duration / 1000, traceDuration / 1000, selfDuration / 1000);
    nodes.push({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: span.id,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: ((_span$localEndpoint = span.localEndpoint) === null || _span$localEndpoint === void 0 ? void 0 : _span$localEndpoint.serviceName) || ((_span$remoteEndpoint = span.remoteEndpoint) === null || _span$remoteEndpoint === void 0 ? void 0 : _span$remoteEndpoint.serviceName) || 'unknown',
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle]: span.name,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: stats.main,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: stats.secondary,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.color]: selfDuration / traceDuration
    });

    if (span.parentId && spanMap[span.parentId].span) {
      edges.push({
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: span.parentId + '--' + span.id,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: span.id,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: span.parentId
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
    if (span.timestamp < traceStartTime) {
      traceStartTime = span.timestamp;
    }

    if (span.timestamp + span.duration > traceEndTime) {
      traceEndTime = span.timestamp + span.duration;
    }
  }

  return traceEndTime - traceStartTime;
}

/***/ }),

/***/ "./public/app/plugins/datasource/zipkin/utils/transforms.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transformResponse": () => (/* binding */ transformResponse),
/* harmony export */   "transformToZipkin": () => (/* binding */ transformToZipkin)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");



/**
 * Transforms response to Grafana trace data frame.
 */
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
      // If tag is error we remap it to simple boolean so that the trace ui will show an error icon.
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
/**
 * Maps annotations as a log as that seems to be the closest thing.
 * See https://zipkin.io/zipkin-api/#/default/get_trace__traceId_
 */


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
/**
 * Transforms data frame to Zipkin response
 */


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
}; // Returns remote or local endpoint object

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

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useMount.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useEffectOnce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");

var useMount = function (fn) {
    (0,_useEffectOnce__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        fn();
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMount);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b21wb25lbnRzL05vZGVHcmFwaFNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvVHJhY2VUb0xvZ3MvS2V5VmFsdWVJbnB1dC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1RyYWNlVG9Mb2dzL1RyYWNlVG9Mb2dzU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9UcmFjZVRvTWV0cmljcy9UcmFjZVRvTWV0cmljc1NldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL3V0aWxzL3RyYWNpbmcudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3ppcGtpbi9Db25maWdFZGl0b3IudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS96aXBraW4vUXVlcnlGaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3ppcGtpbi9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3ppcGtpbi9kYXRhc291cmNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS96aXBraW4vbW9kdWxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS96aXBraW4vdXRpbHMvZ3JhcGhUcmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3ppcGtpbi91dGlscy90cmFuc2Zvcm1zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC11c2UtdmlydHVhbC0wMDMyNmU3MGJhLzAvY2FjaGUvcmVhY3QtdXNlLW5wbS0xNy4zLjItYTAzMmNiZWIwMS03Mzc5NDYwZjUxLnppcC9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VNb3VudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgRGF0YVNvdXJjZUpzb25EYXRhLFxuICBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzLFxuICBHcmFmYW5hVGhlbWUsXG4gIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBJbmxpbmVGaWVsZCwgSW5saW5lRmllbGRSb3csIElubGluZVN3aXRjaCwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVHcmFwaE9wdGlvbnMge1xuICBlbmFibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb2RlR3JhcGhEYXRhIGV4dGVuZHMgRGF0YVNvdXJjZUpzb25EYXRhIHtcbiAgbm9kZUdyYXBoPzogTm9kZUdyYXBoT3B0aW9ucztcbn1cblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wczxOb2RlR3JhcGhEYXRhPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gTm9kZUdyYXBoU2V0dGluZ3MoeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+Tm9kZSBHcmFwaDwvaDM+XG4gICAgICA8SW5saW5lRmllbGRSb3cgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgdG9vbHRpcD1cIkVuYWJsZXMgdGhlIE5vZGUgR3JhcGggdmlzdWFsaXphdGlvbiBpbiB0aGUgdHJhY2Ugdmlld2VyLlwiXG4gICAgICAgICAgbGFiZWw9XCJFbmFibGUgTm9kZSBHcmFwaFwiXG4gICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgID5cbiAgICAgICAgICA8SW5saW5lU3dpdGNoXG4gICAgICAgICAgICBpZD1cImVuYWJsZU5vZGVHcmFwaFwiXG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS5ub2RlR3JhcGg/LmVuYWJsZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICdub2RlR3JhcGgnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS5ub2RlR3JhcGgsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4gKHtcbiAgY29udGFpbmVyOiBjc3NgXG4gICAgbGFiZWw6IGNvbnRhaW5lcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgYCxcbiAgcm93OiBjc3NgXG4gICAgbGFiZWw6IHJvdztcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUsIEtleVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTZWdtZW50SW5wdXQsIHVzZVN0eWxlcywgSW5saW5lTGFiZWwsIEljb24gfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmNvbnN0IEVRX1dJRFRIID0gMzsgLy8gPSAyNHB4IGluIGlubGluZSBsYWJlbFxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB2YWx1ZXM6IEFycmF5PEtleVZhbHVlPHN0cmluZz4+O1xuICBvbkNoYW5nZTogKHZhbHVlczogQXJyYXk8S2V5VmFsdWU8c3RyaW5nPj4pID0+IHZvaWQ7XG4gIGlkPzogc3RyaW5nO1xuICBrZXlQbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdmFsdWVQbGFjZWhvbGRlcj86IHN0cmluZztcbn1cblxuY29uc3QgS2V5VmFsdWVJbnB1dCA9ICh7XG4gIHZhbHVlcyxcbiAgb25DaGFuZ2UsXG4gIGlkLFxuICBrZXlQbGFjZWhvbGRlciA9ICdLZXknLFxuICB2YWx1ZVBsYWNlaG9sZGVyID0gJ1ZhbHVlIChvcHRpb25hbCknLFxufTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAge3ZhbHVlcy5sZW5ndGggPyAoXG4gICAgICAgIHZhbHVlcy5tYXAoKHZhbHVlLCBpZHgpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhaXJ9IGtleT17aWR4fT5cbiAgICAgICAgICAgIDxTZWdtZW50SW5wdXRcbiAgICAgICAgICAgICAgaWQ9e2Ake2lkfS1rZXktJHtpZHh9YH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2tleVBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUua2V5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgICAgICAgIHZhbHVlcy5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgIHYua2V5ID0gU3RyaW5nKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbmxpbmVMYWJlbCBhcmlhLWxhYmVsPVwiZXF1YWxzXCIgY2xhc3NOYW1lPXtzdHlsZXMub3BlcmF0b3J9IHdpZHRoPXtFUV9XSURUSH0+XG4gICAgICAgICAgICAgID1cbiAgICAgICAgICAgIDwvSW5saW5lTGFiZWw+XG4gICAgICAgICAgICA8U2VnbWVudElucHV0XG4gICAgICAgICAgICAgIGlkPXtgJHtpZH0tdmFsdWUtJHtpZHh9YH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3ZhbHVlUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgICB2YWx1ZXMubWFwKCh2LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2LnZhbHVlID0gU3RyaW5nKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoWy4uLnZhbHVlcy5zbGljZSgwLCBpZHgpLCAuLi52YWx1ZXMuc2xpY2UoaWR4ICsgMSldKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1wYXJ0XCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlbW92ZSB0YWdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwidGltZXNcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7aWR4ID09PSB2YWx1ZXMubGVuZ3RoIC0gMSA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKFsuLi52YWx1ZXMsIHsga2V5OiAnJywgdmFsdWU6ICcnIH1dKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LXBhcnRcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGQgdGFnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgICkgOiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShbLi4udmFsdWVzLCB7IGtleTogJycsIHZhbHVlOiAnJyB9XSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1wYXJ0XCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQWRkIHRhZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBuYW1lPVwicGx1c1wiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleVZhbHVlSW5wdXQ7XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICB3cmFwcGVyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogJHt0aGVtZS5zcGFjaW5nLnhzfSAwO1xuICBgLFxuICBwYWlyOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGAsXG4gIG9wZXJhdG9yOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUucGFsZXR0ZS5vcmFuZ2V9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgRGF0YVNvdXJjZUpzb25EYXRhLFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyxcbiAgR3JhZmFuYVRoZW1lLFxuICBLZXlWYWx1ZSxcbiAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VQaWNrZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5wdXQsIFRhZ3NJbnB1dCwgdXNlU3R5bGVzLCBJbmxpbmVTd2l0Y2ggfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCBLZXlWYWx1ZUlucHV0IGZyb20gJy4vS2V5VmFsdWVJbnB1dCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2VUb0xvZ3NPcHRpb25zIHtcbiAgZGF0YXNvdXJjZVVpZD86IHN0cmluZztcbiAgdGFncz86IHN0cmluZ1tdO1xuICBtYXBwZWRUYWdzPzogQXJyYXk8S2V5VmFsdWU8c3RyaW5nPj47XG4gIG1hcFRhZ05hbWVzRW5hYmxlZD86IGJvb2xlYW47XG4gIHNwYW5TdGFydFRpbWVTaGlmdD86IHN0cmluZztcbiAgc3BhbkVuZFRpbWVTaGlmdD86IHN0cmluZztcbiAgZmlsdGVyQnlUcmFjZUlEPzogYm9vbGVhbjtcbiAgZmlsdGVyQnlTcGFuSUQ/OiBib29sZWFuO1xuICBsb2tpU2VhcmNoPzogYm9vbGVhbjsgLy8gbGVnYWN5XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2VUb0xvZ3NEYXRhIGV4dGVuZHMgRGF0YVNvdXJjZUpzb25EYXRhIHtcbiAgdHJhY2VzVG9Mb2dzPzogVHJhY2VUb0xvZ3NPcHRpb25zO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzPFRyYWNlVG9Mb2dzRGF0YT4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIFRyYWNlVG9Mb2dzU2V0dGluZ3MoeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHsgd2lkdGg6ICcxMDAlJyB9KX0+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+VHJhY2UgdG8gbG9nczwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1RleHR9PlxuICAgICAgICBUcmFjZSB0byBsb2dzIGxldHMgeW91IG5hdmlnYXRlIGZyb20gYSB0cmFjZSBzcGFuIHRvIHRoZSBzZWxlY3RlZCBkYXRhIHNvdXJjZSZhcG9zO3MgbG9ncy5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZCB0b29sdGlwPVwiVGhlIGRhdGEgc291cmNlIHRoZSB0cmFjZSBpcyBnb2luZyB0byBuYXZpZ2F0ZSB0b1wiIGxhYmVsPVwiRGF0YSBzb3VyY2VcIiBsYWJlbFdpZHRoPXsyNn0+XG4gICAgICAgICAgPERhdGFTb3VyY2VQaWNrZXJcbiAgICAgICAgICAgIGlucHV0SWQ9XCJ0cmFjZS10by1sb2dzLWRhdGEtc291cmNlLXBpY2tlclwiXG4gICAgICAgICAgICBmaWx0ZXI9eyhkcykgPT4ge1xuICAgICAgICAgICAgICAvLyBUcmFjZSB0byBsb2dzIG9ubHkgc3VwcG9ydHMgbG9raSBhbmQgc3BsdW5rIGF0IHRoZSBtb21lbnRcbiAgICAgICAgICAgICAgcmV0dXJuIGRzLnR5cGUgPT09ICdsb2tpJyB8fCBkcy50eXBlID09PSAnZ3JhZmFuYS1zcGx1bmstZGF0YXNvdXJjZSc7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY3VycmVudD17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LmRhdGFzb3VyY2VVaWR9XG4gICAgICAgICAgICBub0RlZmF1bHQ9e3RydWV9XG4gICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGRzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncykgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogZHMudWlkLFxuICAgICAgICAgICAgICAgIHRhZ3M6IG9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy50YWdzLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICB7b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/Lm1hcFRhZ05hbWVzRW5hYmxlZCA/IChcbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgICAgdG9vbHRpcD1cIlRhZ3MgdGhhdCB3aWxsIGJlIHVzZWQgaW4gdGhlIExva2kgcXVlcnkuIERlZmF1bHQgdGFnczogJ2NsdXN0ZXInLCAnaG9zdG5hbWUnLCAnbmFtZXNwYWNlJywgJ3BvZCdcIlxuICAgICAgICAgICAgbGFiZWw9XCJUYWdzXCJcbiAgICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxLZXlWYWx1ZUlucHV0XG4gICAgICAgICAgICAgIGtleVBsYWNlaG9sZGVyPVwiVGFnXCJcbiAgICAgICAgICAgICAgdmFsdWVzPXtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8ubWFwcGVkVGFncyA/P1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy50YWdzPy5tYXAoKHRhZykgPT4gKHsga2V5OiB0YWcgfSkpID8/XG4gICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICAgIG1hcHBlZFRhZ3M6IHYsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgKSA6IChcbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgICAgdG9vbHRpcD1cIlRhZ3MgdGhhdCB3aWxsIGJlIHVzZWQgaW4gdGhlIExva2kgcXVlcnkuIERlZmF1bHQgdGFnczogJ2NsdXN0ZXInLCAnaG9zdG5hbWUnLCAnbmFtZXNwYWNlJywgJ3BvZCdcIlxuICAgICAgICAgICAgbGFiZWw9XCJUYWdzXCJcbiAgICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUYWdzSW5wdXRcbiAgICAgICAgICAgICAgdGFncz17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LnRhZ3N9XG4gICAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0YWdzKSA9PlxuICAgICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgICB0YWdzOiB0YWdzLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICl9XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJNYXAgdGFnIG5hbWVzXCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIk1hcCB0cmFjZSB0YWcgbmFtZXMgdG8gbG9nIGxhYmVsIG5hbWVzLiBFeDogazhzLnBvZC5uYW1lIC0+IHBvZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5saW5lU3dpdGNoXG4gICAgICAgICAgICBpZD1cIm1hcFRhZ05hbWVzXCJcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8ubWFwVGFnTmFtZXNFbmFibGVkID8/IGZhbHNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgIG1hcFRhZ05hbWVzRW5hYmxlZDogZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgIGxhYmVsPVwiU3BhbiBzdGFydCB0aW1lIHNoaWZ0XCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIlNoaWZ0cyB0aGUgc3RhcnQgdGltZSBvZiB0aGUgc3Bhbi4gRGVmYXVsdCAwIChUaW1lIHVuaXRzIGNhbiBiZSB1c2VkIGhlcmUsIGZvciBleGFtcGxlOiA1cywgMW0sIDNoKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMWhcIlxuICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICBzcGFuU3RhcnRUaW1lU2hpZnQ6IHYuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8uc3BhblN0YXJ0VGltZVNoaWZ0IHx8ICcnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuXG4gICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgIGxhYmVsPVwiU3BhbiBlbmQgdGltZSBzaGlmdFwiXG4gICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgZ3Jvd1xuICAgICAgICAgIHRvb2x0aXA9XCJTaGlmdHMgdGhlIGVuZCB0aW1lIG9mIHRoZSBzcGFuLiBEZWZhdWx0IDAgVGltZSB1bml0cyBjYW4gYmUgdXNlZCBoZXJlLCBmb3IgZXhhbXBsZTogNXMsIDFtLCAzaFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMWhcIlxuICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICBzcGFuRW5kVGltZVNoaWZ0OiB2LmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LnNwYW5FbmRUaW1lU2hpZnQgfHwgJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgYnkgVHJhY2UgSURcIlxuICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgIGdyb3dcbiAgICAgICAgICB0b29sdGlwPVwiRmlsdGVycyBsb2dzIGJ5IFRyYWNlIElELiBBcHBlbmRzICd8PTx0cmFjZSBpZD4nIHRvIHRoZSBxdWVyeS5cIlxuICAgICAgICA+XG4gICAgICAgICAgPElubGluZVN3aXRjaFxuICAgICAgICAgICAgaWQ9XCJmaWx0ZXJCeVRyYWNlSURcIlxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy5maWx0ZXJCeVRyYWNlSUR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgZmlsdGVyQnlUcmFjZUlEOiBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJGaWx0ZXIgYnkgU3BhbiBJRFwiXG4gICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgZ3Jvd1xuICAgICAgICAgIHRvb2x0aXA9XCJGaWx0ZXJzIGxvZ3MgYnkgU3BhbiBJRC4gQXBwZW5kcyAnfD08c3BhbiBpZD4nIHRvIHRoZSBxdWVyeS5cIlxuICAgICAgICA+XG4gICAgICAgICAgPElubGluZVN3aXRjaFxuICAgICAgICAgICAgaWQ9XCJmaWx0ZXJCeVNwYW5JRFwiXG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LmZpbHRlckJ5U3BhbklEfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgIGZpbHRlckJ5U3BhbklEOiBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICBpbmZvVGV4dDogY3NzYFxuICAgIHBhZGRpbmctYm90dG9tOiAke3RoZW1lLnNwYWNpbmcubWR9O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0U2VtaVdlYWt9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgRGF0YVNvdXJjZUpzb25EYXRhLFxuICBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzLFxuICBHcmFmYW5hVGhlbWUsXG4gIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbixcbn0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBEYXRhU291cmNlUGlja2VyIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5wdXQsIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFjZVRvTWV0cmljc09wdGlvbnMge1xuICBkYXRhc291cmNlVWlkPzogc3RyaW5nO1xuICBxdWVyeTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNlVG9NZXRyaWNzRGF0YSBleHRlbmRzIERhdGFTb3VyY2VKc29uRGF0YSB7XG4gIHRyYWNlc1RvTWV0cmljcz86IFRyYWNlVG9NZXRyaWNzT3B0aW9ucztcbn1cblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wczxUcmFjZVRvTWV0cmljc0RhdGE+IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBUcmFjZVRvTWV0cmljc1NldHRpbmdzKHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH06IFByb3BzKSB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcyh7IHdpZHRoOiAnMTAwJScgfSl9PlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGluZ1wiPlRyYWNlIHRvIG1ldHJpY3M8L2gzPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9UZXh0fT5cbiAgICAgICAgVHJhY2UgdG8gbWV0cmljcyBsZXRzIHlvdSBuYXZpZ2F0ZSBmcm9tIGEgdHJhY2Ugc3BhbiB0byB0aGUgc2VsZWN0ZWQgZGF0YSBzb3VyY2UuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPElubGluZUZpZWxkUm93IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgIDxJbmxpbmVGaWVsZCB0b29sdGlwPVwiVGhlIGRhdGEgc291cmNlIHRoZSB0cmFjZSBpcyBnb2luZyB0byBuYXZpZ2F0ZSB0b1wiIGxhYmVsPVwiRGF0YSBzb3VyY2VcIiBsYWJlbFdpZHRoPXsyNn0+XG4gICAgICAgICAgPERhdGFTb3VyY2VQaWNrZXJcbiAgICAgICAgICAgIGlucHV0SWQ9XCJ0cmFjZS10by1tZXRyaWNzLWRhdGEtc291cmNlLXBpY2tlclwiXG4gICAgICAgICAgICBwbHVnaW5JZD1cInByb21ldGhldXNcIlxuICAgICAgICAgICAgY3VycmVudD17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3M/LmRhdGFzb3VyY2VVaWR9XG4gICAgICAgICAgICBub0RlZmF1bHQ9e3RydWV9XG4gICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGRzKSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTWV0cmljcycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTWV0cmljcyxcbiAgICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiBkcy51aWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAge29wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzPy5kYXRhc291cmNlVWlkID8gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgZmlsbD1cInRleHRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTWV0cmljcycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTWV0cmljcyxcbiAgICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDbGVhclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJRdWVyeVwiXG4gICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgdG9vbHRpcD1cIlRoZSBQcm9tZXRoZXVzIHF1ZXJ5IHRoYXQgd2lsbCBydW4gd2hlbiBuYXZpZ2F0aW5nIGZyb20gYSB0cmFjZSB0byBtZXRyaWNzXCJcbiAgICAgICAgICBncm93XG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiUXVlcnlcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3M/LnF1ZXJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9NZXRyaWNzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiBlLmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGluZm9UZXh0OiBjc3NgXG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gIGAsXG4gIHJvdzogY3NzYFxuICAgIGxhYmVsOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBgLFxufSk7XG4iLCIvKipcbiAqIEdldCBub24gb3ZlcmxhcHBpbmcgZHVyYXRpb24gb2YgdGhlIHJhbmdlcyBhcyB0aGV5IGNhbiBvdmVybGFwIG9yIGhhdmUgZ2Fwcy5cbiAqL1xuaW1wb3J0IHsgRmllbGRUeXBlLCBNdXRhYmxlRGF0YUZyYW1lLCBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzIGFzIEZpZWxkcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9uT3ZlcmxhcHBpbmdEdXJhdGlvbihyYW5nZXM6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+KTogbnVtYmVyIHtcbiAgcmFuZ2VzLnNvcnQoKGEsIGIpID0+IGFbMF0gLSBiWzBdKTtcbiAgY29uc3QgbWVyZ2VkUmFuZ2VzID0gcmFuZ2VzLnJlZHVjZSgoYWNjLCByYW5nZSkgPT4ge1xuICAgIGlmICghYWNjLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtyYW5nZV07XG4gICAgfVxuICAgIGNvbnN0IHRhaWwgPSBhY2Muc2xpY2UoLTEpWzBdO1xuICAgIGNvbnN0IFtwcmV2U3RhcnQsIHByZXZFbmRdID0gdGFpbDtcbiAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSByYW5nZTtcbiAgICBpZiAoZW5kIDwgcHJldkVuZCkge1xuICAgICAgLy8gSW4gdGhpcyBjYXNlIHRoZSByYW5nZSBpcyBjb21wbGV0ZWx5IGluc2lkZSB0aGUgcHJldiByYW5nZSBzbyB3ZSBjYW4ganVzdCBpZ25vcmUgaXQuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IHByZXZFbmQpIHtcbiAgICAgIC8vIFRoZXJlIGlzIG5vIG92ZXJsYXAgc28gd2UgY2FuIGp1c3QgYWRkIGl0IHRvIHN0YWNrXG4gICAgICByZXR1cm4gWy4uLmFjYywgcmFuZ2VdO1xuICAgIH1cblxuICAgIC8vIFdlIGtub3cgdGhlcmUgaXMgb3ZlcmxhcCBhbmQgY3VycmVudCByYW5nZSBlbmRzIGxhdGVyIHRoYW4gcHJldmlvdXMgc28gd2UgY2FuIGp1c3QgZXh0ZW5kIHRoZSByYW5nZVxuICAgIHJldHVybiBbLi4uYWNjLnNsaWNlKDAsIC0xKSwgW3ByZXZTdGFydCwgZW5kXV0gYXMgQXJyYXk8W251bWJlciwgbnVtYmVyXT47XG4gIH0sIFtdIGFzIEFycmF5PFtudW1iZXIsIG51bWJlcl0+KTtcblxuICByZXR1cm4gbWVyZ2VkUmFuZ2VzLnJlZHVjZSgoYWNjLCByYW5nZSkgPT4ge1xuICAgIHJldHVybiBhY2MgKyAocmFuZ2VbMV0gLSByYW5nZVswXSk7XG4gIH0sIDApO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBtYXAgb2YgdGhlIHNwYW5zIHdpdGggY2hpbGRyZW4gYXJyYXkgZm9yIGVhc2llciBwcm9jZXNzaW5nLiBJdCB3aWxsIGFsc28gY29udGFpbiBlbXB0eSBzcGFucyBpbiBjYXNlXG4gKiBzcGFuIGlzIG1pc3NpbmcgYnV0IG90aGVyIHNwYW5zIGFyZSBpdCdzIGNoaWxkcmVuLiBUaGlzIGlzIG1vcmUgZ2VuZXJpYyBiZWNhdXNlIGl0IG5lZWRzIHRvIGFsbG93IGl0ZXJhdGluZyBvdmVyXG4gKiBib3RoIGFycmF5cyBhbmQgZGF0YWZyYW1lIHZpZXdzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNwYW5NYXA8VD4oZ2V0U3BhbjogKGluZGV4OiBudW1iZXIpID0+IHsgc3BhbjogVDsgaWQ6IHN0cmluZzsgcGFyZW50SWRzOiBzdHJpbmdbXSB9IHwgdW5kZWZpbmVkKToge1xuICBbaWQ6IHN0cmluZ106IHsgc3BhbjogVDsgY2hpbGRyZW46IHN0cmluZ1tdIH07XG59IHtcbiAgY29uc3Qgc3Bhbk1hcDogeyBbaWQ6IHN0cmluZ106IHsgc3Bhbj86IFQ7IGNoaWxkcmVuOiBzdHJpbmdbXSB9IH0gPSB7fTtcblxuICBsZXQgc3BhbjtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyAoc3BhbiA9IGdldFNwYW4oaW5kZXgpKSwgISFzcGFuOyBpbmRleCsrKSB7XG4gICAgaWYgKCFzcGFuTWFwW3NwYW4uaWRdKSB7XG4gICAgICBzcGFuTWFwW3NwYW4uaWRdID0ge1xuICAgICAgICBzcGFuOiBzcGFuLnNwYW4sXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwYW5NYXBbc3Bhbi5pZF0uc3BhbiA9IHNwYW4uc3BhbjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBhcmVudElkIG9mIHNwYW4ucGFyZW50SWRzKSB7XG4gICAgICBpZiAocGFyZW50SWQpIHtcbiAgICAgICAgaWYgKCFzcGFuTWFwW3BhcmVudElkXSkge1xuICAgICAgICAgIHNwYW5NYXBbcGFyZW50SWRdID0ge1xuICAgICAgICAgICAgc3BhbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtzcGFuLmlkXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwYW5NYXBbcGFyZW50SWRdLmNoaWxkcmVuLnB1c2goc3Bhbi5pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNwYW5NYXAgYXMgeyBbaWQ6IHN0cmluZ106IHsgc3BhbjogVDsgY2hpbGRyZW46IHN0cmluZ1tdIH0gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRzKGR1cmF0aW9uOiBudW1iZXIsIHRyYWNlRHVyYXRpb246IG51bWJlciwgc2VsZkR1cmF0aW9uOiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICBtYWluOiBgJHt0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKGR1cmF0aW9uKX1tcyAoJHt0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKChkdXJhdGlvbiAvIHRyYWNlRHVyYXRpb24pICogMTAwKX0lKWAsXG4gICAgc2Vjb25kYXJ5OiBgJHt0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKHNlbGZEdXJhdGlvbil9bXMgKCR7dG9GaXhlZE5vVHJhaWxpbmdaZXJvcyhcbiAgICAgIChzZWxmRHVyYXRpb24gLyBkdXJhdGlvbikgKiAxMDBcbiAgICApfSUpYCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9GaXhlZE5vVHJhaWxpbmdaZXJvcyhuOiBudW1iZXIpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQobi50b0ZpeGVkKDIpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgZGVmYXVsdCBmcmFtZXMgdXNlZCB3aGVuIHJldHVybmluZyBkYXRhIGZvciBub2RlIGdyYXBoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZyYW1lcygpIHtcbiAgY29uc3Qgbm9kZXNGcmFtZSA9IG5ldyBNdXRhYmxlRGF0YUZyYW1lKHtcbiAgICBmaWVsZHM6IFtcbiAgICAgIHsgbmFtZTogRmllbGRzLmlkLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy50aXRsZSwgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiBGaWVsZHMuc3ViVGl0bGUsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICAgIHsgbmFtZTogRmllbGRzLm1haW5TdGF0LCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLCBjb25maWc6IHsgZGlzcGxheU5hbWU6ICdUb3RhbCB0aW1lICglIG9mIHRyYWNlKScgfSB9LFxuICAgICAgeyBuYW1lOiBGaWVsZHMuc2Vjb25kYXJ5U3RhdCwgdHlwZTogRmllbGRUeXBlLnN0cmluZywgY29uZmlnOiB7IGRpc3BsYXlOYW1lOiAnU2VsZiB0aW1lICglIG9mIHRvdGFsKScgfSB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBGaWVsZHMuY29sb3IsXG4gICAgICAgIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsXG4gICAgICAgIGNvbmZpZzogeyBjb2xvcjogeyBtb2RlOiAnY29udGludW91cy1HcllsUmQnIH0sIGRpc3BsYXlOYW1lOiAnU2VsZiB0aW1lIC8gVHJhY2UgZHVyYXRpb24nIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgbWV0YToge1xuICAgICAgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICdub2RlR3JhcGgnLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGVkZ2VzRnJhbWUgPSBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgZmllbGRzOiBbXG4gICAgICB7IG5hbWU6IEZpZWxkcy5pZCwgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiBGaWVsZHMudGFyZ2V0LCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy5zb3VyY2UsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICBdLFxuICAgIG1ldGE6IHtcbiAgICAgIHByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlOiAnbm9kZUdyYXBoJyxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gW25vZGVzRnJhbWUsIGVkZ2VzRnJhbWVdO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBEYXRhU291cmNlSHR0cFNldHRpbmdzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgTm9kZUdyYXBoU2V0dGluZ3MgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL05vZGVHcmFwaFNldHRpbmdzJztcbmltcG9ydCB7IFRyYWNlVG9Mb2dzU2V0dGluZ3MgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1RyYWNlVG9Mb2dzL1RyYWNlVG9Mb2dzU2V0dGluZ3MnO1xuaW1wb3J0IHsgVHJhY2VUb01ldHJpY3NTZXR0aW5ncyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVHJhY2VUb01ldHJpY3MvVHJhY2VUb01ldHJpY3NTZXR0aW5ncyc7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcztcblxuZXhwb3J0IGNvbnN0IENvbmZpZ0VkaXRvcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPERhdGFTb3VyY2VIdHRwU2V0dGluZ3NcbiAgICAgICAgZGVmYXVsdFVybD1cImh0dHA6Ly9sb2NhbGhvc3Q6OTQxMVwiXG4gICAgICAgIGRhdGFTb3VyY2VDb25maWc9e29wdGlvbnN9XG4gICAgICAgIHNob3dBY2Nlc3NPcHRpb25zPXtmYWxzZX1cbiAgICAgICAgb25DaGFuZ2U9e29uT3B0aW9uc0NoYW5nZX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICA8VHJhY2VUb0xvZ3NTZXR0aW5ncyBvcHRpb25zPXtvcHRpb25zfSBvbk9wdGlvbnNDaGFuZ2U9e29uT3B0aW9uc0NoYW5nZX0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Y29uZmlnLmZlYXR1cmVUb2dnbGVzLnRyYWNlVG9NZXRyaWNzID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8VHJhY2VUb01ldHJpY3NTZXR0aW5ncyBvcHRpb25zPXtvcHRpb25zfSBvbk9wdGlvbnNDaGFuZ2U9e29uT3B0aW9uc0NoYW5nZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICAgIDxOb2RlR3JhcGhTZXR0aW5ncyBvcHRpb25zPXtvcHRpb25zfSBvbk9wdGlvbnNDaGFuZ2U9e29uT3B0aW9uc0NoYW5nZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBmcm9tUGFpcnMgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFzeW5jRm4sIHVzZU1vdW50LCB1c2VNb3VudGVkU3RhdGUgfSBmcm9tICdyZWFjdC11c2UnO1xuaW1wb3J0IHsgQXN5bmNTdGF0ZSB9IGZyb20gJ3JlYWN0LXVzZS9saWIvdXNlQXN5bmNGbic7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIFF1ZXJ5RWRpdG9yUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7XG4gIEJ1dHRvbkNhc2NhZGVyLFxuICBDYXNjYWRlck9wdGlvbixcbiAgRmlsZURyb3B6b25lLFxuICBJbmxpbmVGaWVsZCxcbiAgSW5saW5lRmllbGRSb3csXG4gIFJhZGlvQnV0dG9uR3JvdXAsXG4gIHVzZVRoZW1lMixcbiAgUXVlcnlGaWVsZCxcbiAgdXNlU3R5bGVzMixcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgbm90aWZ5QXBwIH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiB9IGZyb20gJ2FwcC9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IGRpc3BhdGNoIH0gZnJvbSAnYXBwL3N0b3JlL3N0b3JlJztcblxuaW1wb3J0IHsgYXBpUHJlZml4IH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgWmlwa2luRGF0YXNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBaaXBraW5RdWVyeSwgWmlwa2luUXVlcnlUeXBlLCBaaXBraW5TcGFuIH0gZnJvbSAnLi90eXBlcyc7XG5cbnR5cGUgUHJvcHMgPSBRdWVyeUVkaXRvclByb3BzPFppcGtpbkRhdGFzb3VyY2UsIFppcGtpblF1ZXJ5PjtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHJhY2VzQ2FzY2FkZXI6IGNzcyh7XG4gICAgICBsYWJlbDogJ3RyYWNlc0Nhc2NhZGVyJyxcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIH0pLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IFppcGtpblF1ZXJ5RmllbGQgPSAoeyBxdWVyeSwgb25DaGFuZ2UsIG9uUnVuUXVlcnksIGRhdGFzb3VyY2UgfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc2VydmljZU9wdGlvbnMgPSB1c2VTZXJ2aWNlcyhkYXRhc291cmNlKTtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZTIoKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCB7IG9uTG9hZE9wdGlvbnMsIGFsbE9wdGlvbnMgfSA9IHVzZUxvYWRPcHRpb25zKGRhdGFzb3VyY2UpO1xuXG4gIGNvbnN0IG9uU2VsZWN0VHJhY2UgPSB1c2VDYWxsYmFjayhcbiAgICAodmFsdWVzOiBzdHJpbmdbXSwgc2VsZWN0ZWRPcHRpb25zOiBDYXNjYWRlck9wdGlvbltdKSA9PiB7XG4gICAgICBpZiAoc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBjb25zdCB0cmFjZUlEID0gc2VsZWN0ZWRPcHRpb25zWzJdLnZhbHVlO1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXJ5LCBxdWVyeTogdHJhY2VJRCB9KTtcbiAgICAgICAgb25SdW5RdWVyeSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW29uQ2hhbmdlLCBvblJ1blF1ZXJ5LCBxdWVyeV1cbiAgKTtcblxuICBjb25zdCBvbkNoYW5nZVF1ZXJ5ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBuZXh0UXVlcnkgPSB7IC4uLnF1ZXJ5LCBxdWVyeTogdmFsdWUgfTtcbiAgICBvbkNoYW5nZShuZXh0UXVlcnkpO1xuICB9O1xuXG4gIGxldCBjYXNjYWRlck9wdGlvbnMgPSB1c2VNYXBUb0Nhc2NhZGVyT3B0aW9ucyhzZXJ2aWNlT3B0aW9ucywgYWxsT3B0aW9ucyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJRdWVyeSB0eXBlXCI+XG4gICAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXA8Wmlwa2luUXVlcnlUeXBlPlxuICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICB7IHZhbHVlOiAndHJhY2VJRCcsIGxhYmVsOiAnVHJhY2VJRCcgfSxcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ3VwbG9hZCcsIGxhYmVsOiAnSlNPTiBmaWxlJyB9LFxuICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5xdWVyeVR5cGUgfHwgJ3RyYWNlSUQnfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgICAgICAgcXVlcnlUeXBlOiB2LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgIHtxdWVyeS5xdWVyeVR5cGUgPT09ICd1cGxvYWQnID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHsgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSB9KX0+XG4gICAgICAgICAgPEZpbGVEcm9wem9uZVxuICAgICAgICAgICAgb3B0aW9ucz17eyBtdWx0aXBsZTogZmFsc2UgfX1cbiAgICAgICAgICAgIG9uTG9hZD17KHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICBkYXRhc291cmNlLnVwbG9hZGVkSnNvbiA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgb25SdW5RdWVyeSgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgICA8QnV0dG9uQ2FzY2FkZXJcbiAgICAgICAgICAgIG9wdGlvbnM9e2Nhc2NhZGVyT3B0aW9uc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdFRyYWNlfVxuICAgICAgICAgICAgbG9hZERhdGE9e29uTG9hZE9wdGlvbnN9XG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGJ1dHRvblByb3BzPXt7IGNsYXNzTmFtZTogc3R5bGVzLnRyYWNlc0Nhc2NhZGVyIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVHJhY2VzXG4gICAgICAgICAgPC9CdXR0b25DYXNjYWRlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0gZ2YtZm9ybS0tZ3JvdyBmbGV4LXNocmluay0xIG1pbi13aWR0aC0xNVwiPlxuICAgICAgICAgICAgPFF1ZXJ5RmllbGRcbiAgICAgICAgICAgICAgcXVlcnk9e3F1ZXJ5LnF1ZXJ5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VRdWVyeX1cbiAgICAgICAgICAgICAgb25SdW5RdWVyeT17b25SdW5RdWVyeX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydJbnNlcnQgVHJhY2UgSUQgKHJ1biB3aXRoIFNoaWZ0K0VudGVyKSd9XG4gICAgICAgICAgICAgIHBvcnRhbE9yaWdpbj1cInppcGtpblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbi8vIEV4cG9ydGVkIGZvciB0ZXN0c1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVNlcnZpY2VzKGRhdGFzb3VyY2U6IFppcGtpbkRhdGFzb3VyY2UpOiBBc3luY1N0YXRlPENhc2NhZGVyT3B0aW9uW10+IHtcbiAgY29uc3QgdXJsID0gYCR7YXBpUHJlZml4fS9zZXJ2aWNlc2A7XG5cbiAgY29uc3QgW3NlcnZpY2VzT3B0aW9ucywgZmV0Y2hdID0gdXNlQXN5bmNGbihhc3luYyAoKTogUHJvbWlzZTxDYXNjYWRlck9wdGlvbltdPiA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNlcnZpY2VzOiBzdHJpbmdbXSB8IG51bGwgPSBhd2FpdCBkYXRhc291cmNlLm1ldGFkYXRhUmVxdWVzdCh1cmwpO1xuICAgICAgaWYgKHNlcnZpY2VzKSB7XG4gICAgICAgIHJldHVybiBzZXJ2aWNlcy5zb3J0KCkubWFwKChzZXJ2aWNlKSA9PiAoe1xuICAgICAgICAgIGxhYmVsOiBzZXJ2aWNlLFxuICAgICAgICAgIHZhbHVlOiBzZXJ2aWNlLFxuICAgICAgICAgIGlzTGVhZjogZmFsc2UsXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKCdGYWlsZWQgdG8gbG9hZCBzZXJ2aWNlcyBmcm9tIFppcGtpbicsIGVycm9yKSkpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9LCBbZGF0YXNvdXJjZV0pO1xuXG4gIHVzZU1vdW50KCgpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgcHJvYmFibHkgY2FsbCB0aGlzIHBlcmlvZGljYWxseSB0byBnZXQgbmV3IHNlcnZpY2VzIGFmdGVyIG1vdW50LlxuICAgIGZldGNoKCk7XG4gIH0pO1xuXG4gIHJldHVybiBzZXJ2aWNlc09wdGlvbnM7XG59XG5cbnR5cGUgT3B0aW9uc1N0YXRlID0ge1xuICBbc2VydmljZU5hbWU6IHN0cmluZ106IHtcbiAgICBbc3Bhbk5hbWU6IHN0cmluZ106IHtcbiAgICAgIFt0cmFjZUlkOiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbn07XG5cbi8vIEV4cG9ydGVkIGZvciB0ZXN0c1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvYWRPcHRpb25zKGRhdGFzb3VyY2U6IFppcGtpbkRhdGFzb3VyY2UpIHtcbiAgY29uc3QgaXNNb3VudGVkID0gdXNlTW91bnRlZFN0YXRlKCk7XG4gIGNvbnN0IFthbGxPcHRpb25zLCBzZXRBbGxPcHRpb25zXSA9IHVzZVN0YXRlKHt9IGFzIE9wdGlvbnNTdGF0ZSk7XG5cbiAgY29uc3QgWywgZmV0Y2hTcGFuc10gPSB1c2VBc3luY0ZuKFxuICAgIGFzeW5jIGZ1bmN0aW9uIGZpbmRTcGFucyhzZXJ2aWNlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIGNvbnN0IHVybCA9IGAke2FwaVByZWZpeH0vc3BhbnNgO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhlIHJlc3BvbnNlIG9mIHRoaXMgc2hvdWxkIGhhdmUgYmVlbiBmdWxsIFppcGtpblNwYW4gb2JqZWN0cyBiYXNlZCBvbiBBUEkgZG9jcyBidXQgaXMganVzdCBsaXN0XG4gICAgICAgIC8vIG9mIHNwYW4gbmFtZXMuXG4gICAgICAgIC8vIFRPRE86IGNoZWNrIGlmIHRoaXMgaXMgc29tZSBpc3N1ZSBvZiB2ZXJzaW9uIHVzZWQgb3Igc29tZXRoaW5nIGVsc2VcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IHN0cmluZ1tdID0gYXdhaXQgZGF0YXNvdXJjZS5tZXRhZGF0YVJlcXVlc3QodXJsLCB7IHNlcnZpY2VOYW1lOiBzZXJ2aWNlIH0pO1xuICAgICAgICBpZiAoaXNNb3VudGVkKCkpIHtcbiAgICAgICAgICBzZXRBbGxPcHRpb25zKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Bhbk9wdGlvbnMgPSBmcm9tUGFpcnMocmVzcG9uc2UubWFwKChzcGFuOiBzdHJpbmcpID0+IFtzcGFuLCB1bmRlZmluZWRdKSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgW3NlcnZpY2VdOiBzcGFuT3B0aW9ucyBhcyBhbnksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oJ0ZhaWxlZCB0byBsb2FkIHNwYW5zIGZyb20gWmlwa2luJywgZXJyb3IpKSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2RhdGFzb3VyY2UsIGFsbE9wdGlvbnNdXG4gICk7XG5cbiAgY29uc3QgWywgZmV0Y2hUcmFjZXNdID0gdXNlQXN5bmNGbihcbiAgICBhc3luYyBmdW5jdGlvbiBmaW5kVHJhY2VzKHNlcnZpY2VOYW1lOiBzdHJpbmcsIHNwYW5OYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIGNvbnN0IHVybCA9IGAke2FwaVByZWZpeH0vdHJhY2VzYDtcbiAgICAgIGNvbnN0IHNlYXJjaCA9IHtcbiAgICAgICAgc2VydmljZU5hbWUsXG4gICAgICAgIHNwYW5OYW1lLFxuICAgICAgICAvLyBTZWUgb3RoZXIgcGFyYW1zIGFuZCBkZWZhdWx0IGhlcmUgaHR0cHM6Ly96aXBraW4uaW8vemlwa2luLWFwaS8jL2RlZmF1bHQvZ2V0X3RyYWNlc1xuICAgICAgfTtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgc2hvdWxkIHJldHVybiBqdXN0IHJvb3QgdHJhY2VzIGFzIHRoZXJlIGlzbid0IGFueSBuZXN0aW5nXG4gICAgICAgIGNvbnN0IHRyYWNlczogWmlwa2luU3BhbltdW10gPSBhd2FpdCBkYXRhc291cmNlLm1ldGFkYXRhUmVxdWVzdCh1cmwsIHNlYXJjaCk7XG4gICAgICAgIGlmIChpc01vdW50ZWQoKSkge1xuICAgICAgICAgIGNvbnN0IG5ld1RyYWNlcyA9IHRyYWNlcy5sZW5ndGhcbiAgICAgICAgICAgID8gZnJvbVBhaXJzKFxuICAgICAgICAgICAgICAgIHRyYWNlcy5tYXAoKHRyYWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCByb290U3BhbiA9IHRyYWNlLmZpbmQoKHNwYW4pID0+ICFzcGFuLnBhcmVudElkKSE7XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBbYCR7cm9vdFNwYW4ubmFtZX0gWyR7TWF0aC5mbG9vcihyb290U3Bhbi5kdXJhdGlvbiAvIDEwMDApfSBtc11gLCByb290U3Bhbi50cmFjZUlkXTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IG5vVHJhY2VzT3B0aW9ucztcblxuICAgICAgICAgIHNldEFsbE9wdGlvbnMoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGFucyA9IHN0YXRlW3NlcnZpY2VOYW1lXTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICBbc2VydmljZU5hbWVdOiB7XG4gICAgICAgICAgICAgICAgLi4uc3BhbnMsXG4gICAgICAgICAgICAgICAgW3NwYW5OYW1lXTogbmV3VHJhY2VzLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKCdGYWlsZWQgdG8gbG9hZCBzcGFucyBmcm9tIFppcGtpbicsIGVycm9yKSkpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtkYXRhc291cmNlXVxuICApO1xuXG4gIGNvbnN0IG9uTG9hZE9wdGlvbnMgPSB1c2VDYWxsYmFjayhcbiAgICAoc2VsZWN0ZWRPcHRpb25zOiBDYXNjYWRlck9wdGlvbltdKSA9PiB7XG4gICAgICBjb25zdCBzZXJ2aWNlID0gc2VsZWN0ZWRPcHRpb25zWzBdLnZhbHVlO1xuICAgICAgaWYgKHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZmV0Y2hTcGFucyhzZXJ2aWNlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBjb25zdCBzcGFuTmFtZSA9IHNlbGVjdGVkT3B0aW9uc1sxXS52YWx1ZTtcbiAgICAgICAgZmV0Y2hUcmFjZXMoc2VydmljZSwgc3Bhbk5hbWUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2ZldGNoU3BhbnMsIGZldGNoVHJhY2VzXVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgb25Mb2FkT3B0aW9ucyxcbiAgICBhbGxPcHRpb25zLFxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VNYXBUb0Nhc2NhZGVyT3B0aW9ucyhzZXJ2aWNlczogQXN5bmNTdGF0ZTxDYXNjYWRlck9wdGlvbltdPiwgYWxsT3B0aW9uczogT3B0aW9uc1N0YXRlKSB7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgY2FzY2FkZXJPcHRpb25zOiBDYXNjYWRlck9wdGlvbltdID0gW107XG5cbiAgICBpZiAoc2VydmljZXMudmFsdWUgJiYgc2VydmljZXMudmFsdWUubGVuZ3RoKSB7XG4gICAgICBjYXNjYWRlck9wdGlvbnMgPSBzZXJ2aWNlcy52YWx1ZS5tYXAoKHNlcnZpY2VzKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2VydmljZXMsXG4gICAgICAgICAgY2hpbGRyZW46XG4gICAgICAgICAgICBhbGxPcHRpb25zW3NlcnZpY2VzLnZhbHVlXSAmJlxuICAgICAgICAgICAgT2JqZWN0LmtleXMoYWxsT3B0aW9uc1tzZXJ2aWNlcy52YWx1ZV0pLm1hcCgoc3Bhbk5hbWUpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogc3Bhbk5hbWUsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHNwYW5OYW1lLFxuICAgICAgICAgICAgICAgIGlzTGVhZjogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46XG4gICAgICAgICAgICAgICAgICBhbGxPcHRpb25zW3NlcnZpY2VzLnZhbHVlXVtzcGFuTmFtZV0gJiZcbiAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGFsbE9wdGlvbnNbc2VydmljZXMudmFsdWVdW3NwYW5OYW1lXSkubWFwKCh0cmFjZU5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogdHJhY2VOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhbGxPcHRpb25zW3NlcnZpY2VzLnZhbHVlXVtzcGFuTmFtZV1bdHJhY2VOYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSksXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHNlcnZpY2VzLnZhbHVlICYmICFzZXJ2aWNlcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGNhc2NhZGVyT3B0aW9ucyA9IG5vVHJhY2VzRm91bmRPcHRpb25zO1xuICAgIH1cblxuICAgIHJldHVybiBjYXNjYWRlck9wdGlvbnM7XG4gIH0sIFtzZXJ2aWNlcywgYWxsT3B0aW9uc10pO1xufVxuXG5jb25zdCBOT19UUkFDRVNfS0VZID0gJ19fTk9fVFJBQ0VTX18nO1xuY29uc3Qgbm9UcmFjZXNGb3VuZE9wdGlvbnMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ05vIHRyYWNlcyBmb3VuZCcsXG4gICAgdmFsdWU6ICdub190cmFjZXMnLFxuICAgIGlzTGVhZjogdHJ1ZSxcblxuICAgIC8vIENhbm5vdCBiZSBkaXNhYmxlZCBiZWNhdXNlIHRoZW4gY2FzY2FkZXIgc2hvd3MgJ2xvYWRpbmcnIGZvciBzb21lIHJlYXNvbi5cbiAgICAvLyBkaXNhYmxlZDogdHJ1ZSxcbiAgfSxcbl07XG5cbmNvbnN0IG5vVHJhY2VzT3B0aW9ucyA9IHtcbiAgJ1tObyB0cmFjZXMgaW4gdGltZSByYW5nZV0nOiBOT19UUkFDRVNfS0VZLFxufTtcbiIsImV4cG9ydCBjb25zdCBhcGlQcmVmaXggPSAnL2FwaS92Mic7XG4iLCJpbXBvcnQgeyBsYXN0VmFsdWVGcm9tLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBEYXRhUXVlcnlSZXF1ZXN0LFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRGF0YVNvdXJjZUFwaSxcbiAgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsXG4gIERhdGFTb3VyY2VKc29uRGF0YSxcbiAgRmllbGRUeXBlLFxuICBNdXRhYmxlRGF0YUZyYW1lLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJhY2tlbmRTcnZSZXF1ZXN0LCBGZXRjaFJlc3BvbnNlLCBnZXRCYWNrZW5kU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBOb2RlR3JhcGhPcHRpb25zIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9Ob2RlR3JhcGhTZXR0aW5ncyc7XG5cbmltcG9ydCB7IHNlcmlhbGl6ZVBhcmFtcyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbHMvZmV0Y2gnO1xuXG5pbXBvcnQgeyBhcGlQcmVmaXggfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBaaXBraW5RdWVyeSwgWmlwa2luU3BhbiB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlR3JhcGhGcmFtZXMgfSBmcm9tICcuL3V0aWxzL2dyYXBoVHJhbnNmb3JtJztcbmltcG9ydCB7IHRyYW5zZm9ybVJlc3BvbnNlIH0gZnJvbSAnLi91dGlscy90cmFuc2Zvcm1zJztcblxuZXhwb3J0IGludGVyZmFjZSBaaXBraW5Kc29uRGF0YSBleHRlbmRzIERhdGFTb3VyY2VKc29uRGF0YSB7XG4gIG5vZGVHcmFwaD86IE5vZGVHcmFwaE9wdGlvbnM7XG59XG5cbmV4cG9ydCBjbGFzcyBaaXBraW5EYXRhc291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZUFwaTxaaXBraW5RdWVyeSwgWmlwa2luSnNvbkRhdGE+IHtcbiAgdXBsb2FkZWRKc29uOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IG51bGwgPSBudWxsO1xuICBub2RlR3JhcGg/OiBOb2RlR3JhcGhPcHRpb25zO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluc3RhbmNlU2V0dGluZ3M6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzPFppcGtpbkpzb25EYXRhPikge1xuICAgIHN1cGVyKGluc3RhbmNlU2V0dGluZ3MpO1xuICAgIHRoaXMubm9kZUdyYXBoID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS5ub2RlR3JhcGg7XG4gIH1cblxuICBxdWVyeShvcHRpb25zOiBEYXRhUXVlcnlSZXF1ZXN0PFppcGtpblF1ZXJ5Pik6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBvcHRpb25zLnRhcmdldHNbMF07XG4gICAgaWYgKHRhcmdldC5xdWVyeVR5cGUgPT09ICd1cGxvYWQnKSB7XG4gICAgICBpZiAoIXRoaXMudXBsb2FkZWRKc29uKSB7XG4gICAgICAgIHJldHVybiBvZih7IGRhdGE6IFtdIH0pO1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0cmFjZURhdGEgPSBKU09OLnBhcnNlKHRoaXMudXBsb2FkZWRKc29uIGFzIHN0cmluZyk7XG4gICAgICAgIHJldHVybiBvZihyZXNwb25zZVRvRGF0YVF1ZXJ5UmVzcG9uc2UoeyBkYXRhOiB0cmFjZURhdGEgfSwgdGhpcy5ub2RlR3JhcGg/LmVuYWJsZWQpKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBvZih7IGVycm9yOiB7IG1lc3NhZ2U6ICdKU09OIGlzIG5vdCB2YWxpZCBaaXBraW4gZm9ybWF0JyB9LCBkYXRhOiBbXSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0LnF1ZXJ5KSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0PFppcGtpblNwYW5bXT4oYCR7YXBpUHJlZml4fS90cmFjZS8ke2VuY29kZVVSSUNvbXBvbmVudCh0YXJnZXQucXVlcnkpfWApLnBpcGUoXG4gICAgICAgIG1hcCgocmVzKSA9PiByZXNwb25zZVRvRGF0YVF1ZXJ5UmVzcG9uc2UocmVzLCB0aGlzLm5vZGVHcmFwaD8uZW5hYmxlZCkpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gb2YoZW1wdHlEYXRhUXVlcnlSZXNwb25zZSk7XG4gIH1cblxuICBhc3luYyBtZXRhZGF0YVJlcXVlc3QodXJsOiBzdHJpbmcsIHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy5yZXF1ZXN0KHVybCwgcGFyYW1zLCB7IGhpZGVGcm9tSW5zcGVjdG9yOiB0cnVlIH0pKTtcbiAgICByZXR1cm4gcmVzLmRhdGE7XG4gIH1cblxuICBhc3luYyB0ZXN0RGF0YXNvdXJjZSgpOiBQcm9taXNlPHsgc3RhdHVzOiBzdHJpbmc7IG1lc3NhZ2U6IHN0cmluZyB9PiB7XG4gICAgYXdhaXQgdGhpcy5tZXRhZGF0YVJlcXVlc3QoYCR7YXBpUHJlZml4fS9zZXJ2aWNlc2ApO1xuICAgIHJldHVybiB7IHN0YXR1czogJ3N1Y2Nlc3MnLCBtZXNzYWdlOiAnRGF0YSBzb3VyY2UgaXMgd29ya2luZycgfTtcbiAgfVxuXG4gIGdldFF1ZXJ5RGlzcGxheVRleHQocXVlcnk6IFppcGtpblF1ZXJ5KTogc3RyaW5nIHtcbiAgICByZXR1cm4gcXVlcnkucXVlcnk7XG4gIH1cblxuICBwcml2YXRlIHJlcXVlc3Q8VCA9IGFueT4oXG4gICAgYXBpVXJsOiBzdHJpbmcsXG4gICAgZGF0YT86IGFueSxcbiAgICBvcHRpb25zPzogUGFydGlhbDxCYWNrZW5kU3J2UmVxdWVzdD5cbiAgKTogT2JzZXJ2YWJsZTxGZXRjaFJlc3BvbnNlPFQ+PiB7XG4gICAgY29uc3QgcGFyYW1zID0gZGF0YSA/IHNlcmlhbGl6ZVBhcmFtcyhkYXRhKSA6ICcnO1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuaW5zdGFuY2VTZXR0aW5ncy51cmx9JHthcGlVcmx9JHtwYXJhbXMubGVuZ3RoID8gYD8ke3BhcmFtc31gIDogJyd9YDtcbiAgICBjb25zdCByZXEgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgdXJsLFxuICAgIH07XG5cbiAgICByZXR1cm4gZ2V0QmFja2VuZFNydigpLmZldGNoPFQ+KHJlcSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzcG9uc2VUb0RhdGFRdWVyeVJlc3BvbnNlKHJlc3BvbnNlOiB7IGRhdGE6IFppcGtpblNwYW5bXSB9LCBub2RlR3JhcGggPSBmYWxzZSk6IERhdGFRdWVyeVJlc3BvbnNlIHtcbiAgbGV0IGRhdGEgPSByZXNwb25zZT8uZGF0YSA/IFt0cmFuc2Zvcm1SZXNwb25zZShyZXNwb25zZT8uZGF0YSldIDogW107XG4gIGlmIChub2RlR3JhcGgpIHtcbiAgICBkYXRhLnB1c2goLi4uY3JlYXRlR3JhcGhGcmFtZXMocmVzcG9uc2U/LmRhdGEpKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRhdGEsXG4gIH07XG59XG5cbmNvbnN0IGVtcHR5RGF0YVF1ZXJ5UmVzcG9uc2UgPSB7XG4gIGRhdGE6IFtcbiAgICBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd0cmFjZScsXG4gICAgICAgICAgdHlwZTogRmllbGRUeXBlLnRyYWNlLFxuICAgICAgICAgIHZhbHVlczogW10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgbWV0YToge1xuICAgICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ3RyYWNlJyxcbiAgICAgICAgY3VzdG9tOiB7XG4gICAgICAgICAgdHJhY2VGb3JtYXQ6ICd6aXBraW4nLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn07XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCB7IENvbmZpZ0VkaXRvciB9IGZyb20gJy4vQ29uZmlnRWRpdG9yJztcbmltcG9ydCB7IFppcGtpblF1ZXJ5RmllbGQgfSBmcm9tICcuL1F1ZXJ5RmllbGQnO1xuaW1wb3J0IHsgWmlwa2luRGF0YXNvdXJjZSB9IGZyb20gJy4vZGF0YXNvdXJjZSc7XG5cbmV4cG9ydCBjb25zdCBwbHVnaW4gPSBuZXcgRGF0YVNvdXJjZVBsdWdpbihaaXBraW5EYXRhc291cmNlKVxuICAuc2V0UXVlcnlFZGl0b3IoWmlwa2luUXVlcnlGaWVsZClcbiAgLnNldENvbmZpZ0VkaXRvcihDb25maWdFZGl0b3IpO1xuIiwiaW1wb3J0IHsgRGF0YUZyYW1lLCBOb2RlR3JhcGhEYXRhRnJhbWVGaWVsZE5hbWVzIGFzIEZpZWxkcyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBnZXROb25PdmVybGFwcGluZ0R1cmF0aW9uLCBnZXRTdGF0cywgbWFrZUZyYW1lcywgbWFrZVNwYW5NYXAgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3V0aWxzL3RyYWNpbmcnO1xuaW1wb3J0IHsgWmlwa2luU3BhbiB9IGZyb20gJy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIE5vZGUge1xuICBbRmllbGRzLmlkXTogc3RyaW5nO1xuICBbRmllbGRzLnRpdGxlXTogc3RyaW5nO1xuICBbRmllbGRzLnN1YlRpdGxlXTogc3RyaW5nO1xuICBbRmllbGRzLm1haW5TdGF0XTogc3RyaW5nO1xuICBbRmllbGRzLnNlY29uZGFyeVN0YXRdOiBzdHJpbmc7XG4gIFtGaWVsZHMuY29sb3JdOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBFZGdlIHtcbiAgW0ZpZWxkcy5pZF06IHN0cmluZztcbiAgW0ZpZWxkcy50YXJnZXRdOiBzdHJpbmc7XG4gIFtGaWVsZHMuc291cmNlXTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR3JhcGhGcmFtZXMoZGF0YTogWmlwa2luU3BhbltdKTogRGF0YUZyYW1lW10ge1xuICBjb25zdCB7IG5vZGVzLCBlZGdlcyB9ID0gY29udmVydFRyYWNlVG9HcmFwaChkYXRhKTtcbiAgY29uc3QgW25vZGVzRnJhbWUsIGVkZ2VzRnJhbWVdID0gbWFrZUZyYW1lcygpO1xuXG4gIGZvciAoY29uc3Qgbm9kZSBvZiBub2Rlcykge1xuICAgIG5vZGVzRnJhbWUuYWRkKG5vZGUpO1xuICB9XG5cbiAgZm9yIChjb25zdCBlZGdlIG9mIGVkZ2VzKSB7XG4gICAgZWRnZXNGcmFtZS5hZGQoZWRnZSk7XG4gIH1cblxuICByZXR1cm4gW25vZGVzRnJhbWUsIGVkZ2VzRnJhbWVdO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VHJhY2VUb0dyYXBoKHNwYW5zOiBaaXBraW5TcGFuW10pOiB7IG5vZGVzOiBOb2RlW107IGVkZ2VzOiBFZGdlW10gfSB7XG4gIGNvbnN0IG5vZGVzOiBOb2RlW10gPSBbXTtcbiAgY29uc3QgZWRnZXM6IEVkZ2VbXSA9IFtdO1xuXG4gIGNvbnN0IHRyYWNlRHVyYXRpb24gPSBmaW5kVHJhY2VEdXJhdGlvbihzcGFucyk7XG4gIGNvbnN0IHNwYW5NYXAgPSBtYWtlU3Bhbk1hcCgoaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPj0gc3BhbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc3Bhbjogc3BhbnNbaW5kZXhdLFxuICAgICAgaWQ6IHNwYW5zW2luZGV4XS5pZCxcbiAgICAgIHBhcmVudElkczogc3BhbnNbaW5kZXhdLnBhcmVudElkID8gW3NwYW5zW2luZGV4XS5wYXJlbnRJZCFdIDogW10sXG4gICAgfTtcbiAgfSk7XG5cbiAgZm9yIChjb25zdCBzcGFuIG9mIHNwYW5zKSB7XG4gICAgY29uc3QgcmFuZ2VzOiBBcnJheTxbbnVtYmVyLCBudW1iZXJdPiA9IHNwYW5NYXBbc3Bhbi5pZF0uY2hpbGRyZW4ubWFwKChjKSA9PiB7XG4gICAgICBjb25zdCBzcGFuID0gc3Bhbk1hcFtjXS5zcGFuO1xuICAgICAgcmV0dXJuIFtzcGFuLnRpbWVzdGFtcCwgc3Bhbi50aW1lc3RhbXAgKyBzcGFuLmR1cmF0aW9uXTtcbiAgICB9KTtcbiAgICBjb25zdCBjaGlsZHJlbkR1cmF0aW9uID0gZ2V0Tm9uT3ZlcmxhcHBpbmdEdXJhdGlvbihyYW5nZXMpO1xuICAgIGNvbnN0IHNlbGZEdXJhdGlvbiA9IHNwYW4uZHVyYXRpb24gLSBjaGlsZHJlbkR1cmF0aW9uO1xuICAgIGNvbnN0IHN0YXRzID0gZ2V0U3RhdHMoc3Bhbi5kdXJhdGlvbiAvIDEwMDAsIHRyYWNlRHVyYXRpb24gLyAxMDAwLCBzZWxmRHVyYXRpb24gLyAxMDAwKTtcblxuICAgIG5vZGVzLnB1c2goe1xuICAgICAgW0ZpZWxkcy5pZF06IHNwYW4uaWQsXG4gICAgICBbRmllbGRzLnRpdGxlXTogc3Bhbi5sb2NhbEVuZHBvaW50Py5zZXJ2aWNlTmFtZSB8fCBzcGFuLnJlbW90ZUVuZHBvaW50Py5zZXJ2aWNlTmFtZSB8fCAndW5rbm93bicsXG4gICAgICBbRmllbGRzLnN1YlRpdGxlXTogc3Bhbi5uYW1lLFxuICAgICAgW0ZpZWxkcy5tYWluU3RhdF06IHN0YXRzLm1haW4sXG4gICAgICBbRmllbGRzLnNlY29uZGFyeVN0YXRdOiBzdGF0cy5zZWNvbmRhcnksXG4gICAgICBbRmllbGRzLmNvbG9yXTogc2VsZkR1cmF0aW9uIC8gdHJhY2VEdXJhdGlvbixcbiAgICB9KTtcblxuICAgIGlmIChzcGFuLnBhcmVudElkICYmIHNwYW5NYXBbc3Bhbi5wYXJlbnRJZF0uc3Bhbikge1xuICAgICAgZWRnZXMucHVzaCh7XG4gICAgICAgIFtGaWVsZHMuaWRdOiBzcGFuLnBhcmVudElkICsgJy0tJyArIHNwYW4uaWQsXG4gICAgICAgIFtGaWVsZHMudGFyZ2V0XTogc3Bhbi5pZCxcbiAgICAgICAgW0ZpZWxkcy5zb3VyY2VdOiBzcGFuLnBhcmVudElkLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgbm9kZXMsIGVkZ2VzIH07XG59XG5cbi8qKlxuICogR2V0IHRoZSBkdXJhdGlvbiBvZiB0aGUgd2hvbGUgdHJhY2UgYXMgaXQgaXNuJ3QgYSBwYXJ0IG9mIHRoZSByZXNwb25zZSBkYXRhLlxuICogTm90ZTogU2VlbXMgbGlrZSB0aGlzIHNob3VsZCBiZSB0aGUgc2FtZSBhcyBqdXN0IGxvbmdlc3Qgc3BhbiwgYnV0IHRoaXMgaXMgcHJvYmFibHkgc2FmZXIuXG4gKi9cbmZ1bmN0aW9uIGZpbmRUcmFjZUR1cmF0aW9uKHNwYW5zOiBaaXBraW5TcGFuW10pOiBudW1iZXIge1xuICBsZXQgdHJhY2VFbmRUaW1lID0gMDtcbiAgbGV0IHRyYWNlU3RhcnRUaW1lID0gSW5maW5pdHk7XG5cbiAgZm9yIChjb25zdCBzcGFuIG9mIHNwYW5zKSB7XG4gICAgaWYgKHNwYW4udGltZXN0YW1wIDwgdHJhY2VTdGFydFRpbWUpIHtcbiAgICAgIHRyYWNlU3RhcnRUaW1lID0gc3Bhbi50aW1lc3RhbXA7XG4gICAgfVxuXG4gICAgaWYgKHNwYW4udGltZXN0YW1wICsgc3Bhbi5kdXJhdGlvbiA+IHRyYWNlRW5kVGltZSkge1xuICAgICAgdHJhY2VFbmRUaW1lID0gc3Bhbi50aW1lc3RhbXAgKyBzcGFuLmR1cmF0aW9uO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJhY2VFbmRUaW1lIC0gdHJhY2VTdGFydFRpbWU7XG59XG4iLCJpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IERhdGFGcmFtZSwgRmllbGRUeXBlLCBNdXRhYmxlRGF0YUZyYW1lLCBUcmFjZUtleVZhbHVlUGFpciwgVHJhY2VMb2csIFRyYWNlU3BhblJvdyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBaaXBraW5Bbm5vdGF0aW9uLCBaaXBraW5FbmRwb2ludCwgWmlwa2luU3BhbiB9IGZyb20gJy4uL3R5cGVzJztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHJlc3BvbnNlIHRvIEdyYWZhbmEgdHJhY2UgZGF0YSBmcmFtZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKHpTcGFuczogWmlwa2luU3BhbltdKTogRGF0YUZyYW1lIHtcbiAgY29uc3Qgc3BhblJvd3MgPSB6U3BhbnMubWFwKHRyYW5zZm9ybVNwYW4pO1xuICBjb25zdCBmcmFtZSA9IG5ldyBNdXRhYmxlRGF0YUZyYW1lKHtcbiAgICBmaWVsZHM6IFtcbiAgICAgIHsgbmFtZTogJ3RyYWNlSUQnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdzcGFuSUQnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdwYXJlbnRTcGFuSUQnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdvcGVyYXRpb25OYW1lJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAnc2VydmljZU5hbWUnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdzZXJ2aWNlVGFncycsIHR5cGU6IEZpZWxkVHlwZS5vdGhlciB9LFxuICAgICAgeyBuYW1lOiAnc3RhcnRUaW1lJywgdHlwZTogRmllbGRUeXBlLm51bWJlciB9LFxuICAgICAgeyBuYW1lOiAnZHVyYXRpb24nLCB0eXBlOiBGaWVsZFR5cGUubnVtYmVyIH0sXG4gICAgICB7IG5hbWU6ICdsb2dzJywgdHlwZTogRmllbGRUeXBlLm90aGVyIH0sXG4gICAgICB7IG5hbWU6ICd0YWdzJywgdHlwZTogRmllbGRUeXBlLm90aGVyIH0sXG4gICAgXSxcbiAgICBtZXRhOiB7XG4gICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ3RyYWNlJyxcbiAgICAgIGN1c3RvbToge1xuICAgICAgICB0cmFjZUZvcm1hdDogJ3ppcGtpbicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGZvciAoY29uc3Qgc3BhbiBvZiBzcGFuUm93cykge1xuICAgIGZyYW1lLmFkZChzcGFuKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU3BhbihzcGFuOiBaaXBraW5TcGFuKTogVHJhY2VTcGFuUm93IHtcbiAgY29uc3Qgcm93ID0ge1xuICAgIHRyYWNlSUQ6IHNwYW4udHJhY2VJZCxcbiAgICBzcGFuSUQ6IHNwYW4uaWQsXG4gICAgcGFyZW50U3BhbklEOiBzcGFuLnBhcmVudElkLFxuICAgIG9wZXJhdGlvbk5hbWU6IHNwYW4ubmFtZSxcbiAgICBzZXJ2aWNlTmFtZTogc3Bhbi5sb2NhbEVuZHBvaW50Py5zZXJ2aWNlTmFtZSB8fCBzcGFuLnJlbW90ZUVuZHBvaW50Py5zZXJ2aWNlTmFtZSB8fCAndW5rbm93bicsXG4gICAgc2VydmljZVRhZ3M6IHNlcnZpY2VUYWdzKHNwYW4pLFxuICAgIHN0YXJ0VGltZTogc3Bhbi50aW1lc3RhbXAgLyAxMDAwLFxuICAgIGR1cmF0aW9uOiBzcGFuLmR1cmF0aW9uIC8gMTAwMCxcbiAgICBsb2dzOiBzcGFuLmFubm90YXRpb25zPy5tYXAodHJhbnNmb3JtQW5ub3RhdGlvbikgPz8gW10sXG4gICAgdGFnczogT2JqZWN0LmtleXMoc3Bhbi50YWdzIHx8IHt9KS5yZWR1Y2U8VHJhY2VLZXlWYWx1ZVBhaXJbXT4oKGFjYywga2V5KSA9PiB7XG4gICAgICAvLyBJZiB0YWcgaXMgZXJyb3Igd2UgcmVtYXAgaXQgdG8gc2ltcGxlIGJvb2xlYW4gc28gdGhhdCB0aGUgdHJhY2UgdWkgd2lsbCBzaG93IGFuIGVycm9yIGljb24uXG4gICAgICBpZiAoa2V5ID09PSAnZXJyb3InKSB7XG4gICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICBrZXk6ICdlcnJvcicsXG4gICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFjYy5wdXNoKHtcbiAgICAgICAgICBrZXk6ICdlcnJvclZhbHVlJyxcbiAgICAgICAgICB2YWx1ZTogc3Bhbi50YWdzIVsnZXJyb3InXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICBhY2MucHVzaCh7IGtleSwgdmFsdWU6IHNwYW4udGFncyFba2V5XSB9KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pLFxuICB9O1xuXG4gIGlmIChzcGFuLmtpbmQpIHtcbiAgICByb3cudGFncyA9IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAna2luZCcsXG4gICAgICAgIHZhbHVlOiBzcGFuLmtpbmQsXG4gICAgICB9LFxuICAgICAgLi4uKHJvdy50YWdzID8/IFtdKSxcbiAgICBdO1xuICB9XG5cbiAgaWYgKHNwYW4uc2hhcmVkKSB7XG4gICAgcm93LnRhZ3MgPSBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ3NoYXJlZCcsXG4gICAgICAgIHZhbHVlOiBzcGFuLnNoYXJlZCxcbiAgICAgIH0sXG4gICAgICAuLi4ocm93LnRhZ3MgPz8gW10pLFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gcm93O1xufVxuXG4vKipcbiAqIE1hcHMgYW5ub3RhdGlvbnMgYXMgYSBsb2cgYXMgdGhhdCBzZWVtcyB0byBiZSB0aGUgY2xvc2VzdCB0aGluZy5cbiAqIFNlZSBodHRwczovL3ppcGtpbi5pby96aXBraW4tYXBpLyMvZGVmYXVsdC9nZXRfdHJhY2VfX3RyYWNlSWRfXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybUFubm90YXRpb24oYW5ub3RhdGlvbjogWmlwa2luQW5ub3RhdGlvbik6IFRyYWNlTG9nIHtcbiAgcmV0dXJuIHtcbiAgICB0aW1lc3RhbXA6IGFubm90YXRpb24udGltZXN0YW1wLFxuICAgIGZpZWxkczogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdhbm5vdGF0aW9uJyxcbiAgICAgICAgdmFsdWU6IGFubm90YXRpb24udmFsdWUsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNlcnZpY2VUYWdzKHNwYW46IFppcGtpblNwYW4pOiBUcmFjZUtleVZhbHVlUGFpcltdIHtcbiAgY29uc3QgZW5kcG9pbnQgPSBzcGFuLmxvY2FsRW5kcG9pbnQgfHwgc3Bhbi5yZW1vdGVFbmRwb2ludDtcbiAgaWYgKCFlbmRwb2ludCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gW1xuICAgIHZhbHVlVG9UYWcoJ2lwdjQnLCBlbmRwb2ludC5pcHY0KSxcbiAgICB2YWx1ZVRvVGFnKCdpcHY2JywgZW5kcG9pbnQuaXB2NiksXG4gICAgdmFsdWVUb1RhZygncG9ydCcsIGVuZHBvaW50LnBvcnQpLFxuICAgIHZhbHVlVG9UYWcoJ2VuZHBvaW50VHlwZScsIHNwYW4ubG9jYWxFbmRwb2ludCA/ICdsb2NhbCcgOiAncmVtb3RlJyksXG4gIF0uZmlsdGVyKGlkZW50aXR5KSBhcyBUcmFjZUtleVZhbHVlUGFpcltdO1xufVxuXG5mdW5jdGlvbiB2YWx1ZVRvVGFnPFQ+KGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IFRyYWNlS2V5VmFsdWVQYWlyPFQ+IHwgdW5kZWZpbmVkIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBrZXksXG4gICAgdmFsdWUsXG4gIH07XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyBkYXRhIGZyYW1lIHRvIFppcGtpbiByZXNwb25zZVxuICovXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtVG9aaXBraW4gPSAoZGF0YTogTXV0YWJsZURhdGFGcmFtZSk6IFppcGtpblNwYW5bXSA9PiB7XG4gIGxldCByZXNwb25zZTogWmlwa2luU3BhbltdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3BhbiA9IGRhdGEuZ2V0KGkpO1xuICAgIHJlc3BvbnNlLnB1c2goe1xuICAgICAgdHJhY2VJZDogc3Bhbi50cmFjZUlELFxuICAgICAgcGFyZW50SWQ6IHNwYW4ucGFyZW50U3BhbklELFxuICAgICAgbmFtZTogc3Bhbi5vcGVyYXRpb25OYW1lLFxuICAgICAgaWQ6IHNwYW4uc3BhbklELFxuICAgICAgdGltZXN0YW1wOiBzcGFuLnN0YXJ0VGltZSAqIDEwMDAsXG4gICAgICBkdXJhdGlvbjogc3Bhbi5kdXJhdGlvbiAqIDEwMDAsXG4gICAgICAuLi5nZXRFbmRwb2ludChzcGFuKSxcbiAgICAgIGFubm90YXRpb25zOiBzcGFuLmxvZ3MubGVuZ3RoXG4gICAgICAgID8gc3Bhbi5sb2dzLm1hcCgobDogVHJhY2VMb2cpID0+ICh7IHRpbWVzdGFtcDogbC50aW1lc3RhbXAsIHZhbHVlOiBsLmZpZWxkc1swXS52YWx1ZSB9KSlcbiAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB0YWdzOiBzcGFuLnRhZ3MubGVuZ3RoXG4gICAgICAgID8gc3Bhbi50YWdzXG4gICAgICAgICAgICAuZmlsdGVyKCh0OiBUcmFjZUtleVZhbHVlUGFpcikgPT4gdC5rZXkgIT09ICdraW5kJyAmJiB0LmtleSAhPT0gJ2VuZHBvaW50VHlwZScgJiYgdC5rZXkgIT09ICdzaGFyZWQnKVxuICAgICAgICAgICAgLnJlZHVjZSgodGFnczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSwgdDogVHJhY2VLZXlWYWx1ZVBhaXIpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHQua2V5ID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIC4uLnRhZ3MsXG4gICAgICAgICAgICAgICAgICBbdC5rZXldOiBzcGFuLnRhZ3MuZmluZCgodDogVHJhY2VLZXlWYWx1ZVBhaXIpID0+IHQua2V5ID09PSAnZXJyb3JWYWx1ZScpLnZhbHVlIHx8ICcnLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4udGFncywgW3Qua2V5XTogdC52YWx1ZSB9O1xuICAgICAgICAgICAgfSwge30pXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAga2luZDogc3Bhbi50YWdzLmZpbmQoKHQ6IFRyYWNlS2V5VmFsdWVQYWlyKSA9PiB0LmtleSA9PT0gJ2tpbmQnKT8udmFsdWUsXG4gICAgICBzaGFyZWQ6IHNwYW4udGFncy5maW5kKCh0OiBUcmFjZUtleVZhbHVlUGFpcikgPT4gdC5rZXkgPT09ICdzaGFyZWQnKT8udmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG4vLyBSZXR1cm5zIHJlbW90ZSBvciBsb2NhbCBlbmRwb2ludCBvYmplY3RcbmNvbnN0IGdldEVuZHBvaW50ID0gKHNwYW46IGFueSk6IHsgW2tleTogc3RyaW5nXTogWmlwa2luRW5kcG9pbnQgfSB8IHVuZGVmaW5lZCA9PiB7XG4gIGNvbnN0IGtleSA9XG4gICAgc3Bhbi5zZXJ2aWNlVGFncy5maW5kKCh0OiBUcmFjZUtleVZhbHVlUGFpcikgPT4gdC5rZXkgPT09ICdlbmRwb2ludFR5cGUnKT8udmFsdWUgPT09ICdsb2NhbCdcbiAgICAgID8gJ2xvY2FsRW5kcG9pbnQnXG4gICAgICA6ICdyZW1vdGVFbmRwb2ludCc7XG4gIHJldHVybiBzcGFuLnNlcnZpY2VOYW1lICE9PSAndW5rbm93bidcbiAgICA/IHtcbiAgICAgICAgW2tleV06IHtcbiAgICAgICAgICBzZXJ2aWNlTmFtZTogc3Bhbi5zZXJ2aWNlTmFtZSxcbiAgICAgICAgICBpcHY0OiBzcGFuLnNlcnZpY2VUYWdzLmZpbmQoKHQ6IFRyYWNlS2V5VmFsdWVQYWlyKSA9PiB0LmtleSA9PT0gJ2lwdjQnKT8udmFsdWUsXG4gICAgICAgICAgaXB2Njogc3Bhbi5zZXJ2aWNlVGFncy5maW5kKCh0OiBUcmFjZUtleVZhbHVlUGFpcikgPT4gdC5rZXkgPT09ICdpcHY2Jyk/LnZhbHVlLFxuICAgICAgICAgIHBvcnQ6IHNwYW4uc2VydmljZVRhZ3MuZmluZCgodDogVHJhY2VLZXlWYWx1ZVBhaXIpID0+IHQua2V5ID09PSAncG9ydCcpPy52YWx1ZSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICA6IHVuZGVmaW5lZDtcbn07XG4iLCJpbXBvcnQgdXNlRWZmZWN0T25jZSBmcm9tICcuL3VzZUVmZmVjdE9uY2UnO1xudmFyIHVzZU1vdW50ID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgdXNlRWZmZWN0T25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZuKCk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgdXNlTW91bnQ7XG4iXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJ1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24iLCJJbmxpbmVGaWVsZCIsIklubGluZUZpZWxkUm93IiwiSW5saW5lU3dpdGNoIiwidXNlU3R5bGVzIiwiTm9kZUdyYXBoU2V0dGluZ3MiLCJvcHRpb25zIiwib25PcHRpb25zQ2hhbmdlIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiY29udGFpbmVyIiwicm93IiwianNvbkRhdGEiLCJub2RlR3JhcGgiLCJlbmFibGVkIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiY2hlY2tlZCIsInRoZW1lIiwiU2VnbWVudElucHV0IiwiSW5saW5lTGFiZWwiLCJJY29uIiwiRVFfV0lEVEgiLCJLZXlWYWx1ZUlucHV0IiwidmFsdWVzIiwib25DaGFuZ2UiLCJpZCIsImtleVBsYWNlaG9sZGVyIiwidmFsdWVQbGFjZWhvbGRlciIsIndyYXBwZXIiLCJsZW5ndGgiLCJtYXAiLCJ2YWx1ZSIsImlkeCIsInBhaXIiLCJrZXkiLCJlIiwidiIsImkiLCJTdHJpbmciLCJvcGVyYXRvciIsInNsaWNlIiwic3BhY2luZyIsInhzIiwicGFsZXR0ZSIsIm9yYW5nZSIsIkRhdGFTb3VyY2VQaWNrZXIiLCJJbnB1dCIsIlRhZ3NJbnB1dCIsIlRyYWNlVG9Mb2dzU2V0dGluZ3MiLCJ3aWR0aCIsImluZm9UZXh0IiwiZHMiLCJ0eXBlIiwidHJhY2VzVG9Mb2dzIiwiZGF0YXNvdXJjZVVpZCIsInVpZCIsInRhZ3MiLCJtYXBUYWdOYW1lc0VuYWJsZWQiLCJtYXBwZWRUYWdzIiwidGFnIiwic3BhblN0YXJ0VGltZVNoaWZ0Iiwic3BhbkVuZFRpbWVTaGlmdCIsImZpbHRlckJ5VHJhY2VJRCIsImZpbHRlckJ5U3BhbklEIiwibWQiLCJjb2xvcnMiLCJ0ZXh0U2VtaVdlYWsiLCJCdXR0b24iLCJUcmFjZVRvTWV0cmljc1NldHRpbmdzIiwidHJhY2VzVG9NZXRyaWNzIiwidW5kZWZpbmVkIiwicXVlcnkiLCJGaWVsZFR5cGUiLCJNdXRhYmxlRGF0YUZyYW1lIiwiTm9kZUdyYXBoRGF0YUZyYW1lRmllbGROYW1lcyIsIkZpZWxkcyIsImdldE5vbk92ZXJsYXBwaW5nRHVyYXRpb24iLCJyYW5nZXMiLCJzb3J0IiwiYSIsImIiLCJtZXJnZWRSYW5nZXMiLCJyZWR1Y2UiLCJhY2MiLCJyYW5nZSIsInRhaWwiLCJwcmV2U3RhcnQiLCJwcmV2RW5kIiwic3RhcnQiLCJlbmQiLCJtYWtlU3Bhbk1hcCIsImdldFNwYW4iLCJzcGFuTWFwIiwic3BhbiIsImluZGV4IiwiY2hpbGRyZW4iLCJwYXJlbnRJZCIsInBhcmVudElkcyIsInB1c2giLCJnZXRTdGF0cyIsImR1cmF0aW9uIiwidHJhY2VEdXJhdGlvbiIsInNlbGZEdXJhdGlvbiIsIm1haW4iLCJ0b0ZpeGVkTm9UcmFpbGluZ1plcm9zIiwic2Vjb25kYXJ5IiwibiIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwibWFrZUZyYW1lcyIsIm5vZGVzRnJhbWUiLCJmaWVsZHMiLCJuYW1lIiwic3RyaW5nIiwidGl0bGUiLCJzdWJUaXRsZSIsIm1haW5TdGF0IiwiY29uZmlnIiwiZGlzcGxheU5hbWUiLCJzZWNvbmRhcnlTdGF0IiwiY29sb3IiLCJudW1iZXIiLCJtb2RlIiwibWV0YSIsInByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlIiwiZWRnZXNGcmFtZSIsInRhcmdldCIsInNvdXJjZSIsIkRhdGFTb3VyY2VIdHRwU2V0dGluZ3MiLCJDb25maWdFZGl0b3IiLCJmZWF0dXJlVG9nZ2xlcyIsInRyYWNlVG9NZXRyaWNzIiwiZnJvbVBhaXJzIiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VBc3luY0ZuIiwidXNlTW91bnQiLCJ1c2VNb3VudGVkU3RhdGUiLCJCdXR0b25DYXNjYWRlciIsIkZpbGVEcm9wem9uZSIsIlJhZGlvQnV0dG9uR3JvdXAiLCJ1c2VUaGVtZTIiLCJRdWVyeUZpZWxkIiwidXNlU3R5bGVzMiIsIm5vdGlmeUFwcCIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiZGlzcGF0Y2giLCJhcGlQcmVmaXgiLCJ0cmFjZXNDYXNjYWRlciIsImxhYmVsIiwibWFyZ2luUmlnaHQiLCJaaXBraW5RdWVyeUZpZWxkIiwib25SdW5RdWVyeSIsImRhdGFzb3VyY2UiLCJzZXJ2aWNlT3B0aW9ucyIsInVzZVNlcnZpY2VzIiwib25Mb2FkT3B0aW9ucyIsImFsbE9wdGlvbnMiLCJ1c2VMb2FkT3B0aW9ucyIsIm9uU2VsZWN0VHJhY2UiLCJzZWxlY3RlZE9wdGlvbnMiLCJ0cmFjZUlEIiwib25DaGFuZ2VRdWVyeSIsIm5leHRRdWVyeSIsImNhc2NhZGVyT3B0aW9ucyIsInVzZU1hcFRvQ2FzY2FkZXJPcHRpb25zIiwicXVlcnlUeXBlIiwicGFkZGluZyIsIm11bHRpcGxlIiwicmVzdWx0IiwidXBsb2FkZWRKc29uIiwiY2xhc3NOYW1lIiwidXJsIiwic2VydmljZXNPcHRpb25zIiwiZmV0Y2giLCJzZXJ2aWNlcyIsIm1ldGFkYXRhUmVxdWVzdCIsInNlcnZpY2UiLCJpc0xlYWYiLCJlcnJvciIsImlzTW91bnRlZCIsInNldEFsbE9wdGlvbnMiLCJmZXRjaFNwYW5zIiwiZmluZFNwYW5zIiwicmVzcG9uc2UiLCJzZXJ2aWNlTmFtZSIsInN0YXRlIiwic3Bhbk9wdGlvbnMiLCJmZXRjaFRyYWNlcyIsImZpbmRUcmFjZXMiLCJzcGFuTmFtZSIsInNlYXJjaCIsInRyYWNlcyIsIm5ld1RyYWNlcyIsInRyYWNlIiwicm9vdFNwYW4iLCJmaW5kIiwiTWF0aCIsImZsb29yIiwidHJhY2VJZCIsIm5vVHJhY2VzT3B0aW9ucyIsInNwYW5zIiwiT2JqZWN0Iiwia2V5cyIsInRyYWNlTmFtZSIsIm5vVHJhY2VzRm91bmRPcHRpb25zIiwiTk9fVFJBQ0VTX0tFWSIsImxhc3RWYWx1ZUZyb20iLCJvZiIsIkRhdGFTb3VyY2VBcGkiLCJnZXRCYWNrZW5kU3J2Iiwic2VyaWFsaXplUGFyYW1zIiwiY3JlYXRlR3JhcGhGcmFtZXMiLCJ0cmFuc2Zvcm1SZXNwb25zZSIsIlppcGtpbkRhdGFzb3VyY2UiLCJjb25zdHJ1Y3RvciIsImluc3RhbmNlU2V0dGluZ3MiLCJ0YXJnZXRzIiwiZGF0YSIsInRyYWNlRGF0YSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVG9EYXRhUXVlcnlSZXNwb25zZSIsIm1lc3NhZ2UiLCJyZXF1ZXN0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicGlwZSIsInJlcyIsImVtcHR5RGF0YVF1ZXJ5UmVzcG9uc2UiLCJwYXJhbXMiLCJoaWRlRnJvbUluc3BlY3RvciIsInRlc3REYXRhc291cmNlIiwic3RhdHVzIiwiZ2V0UXVlcnlEaXNwbGF5VGV4dCIsImFwaVVybCIsInJlcSIsImN1c3RvbSIsInRyYWNlRm9ybWF0IiwiRGF0YVNvdXJjZVBsdWdpbiIsInBsdWdpbiIsInNldFF1ZXJ5RWRpdG9yIiwic2V0Q29uZmlnRWRpdG9yIiwibm9kZXMiLCJlZGdlcyIsImNvbnZlcnRUcmFjZVRvR3JhcGgiLCJub2RlIiwiYWRkIiwiZWRnZSIsImZpbmRUcmFjZUR1cmF0aW9uIiwiYyIsInRpbWVzdGFtcCIsImNoaWxkcmVuRHVyYXRpb24iLCJzdGF0cyIsImxvY2FsRW5kcG9pbnQiLCJyZW1vdGVFbmRwb2ludCIsInRyYWNlRW5kVGltZSIsInRyYWNlU3RhcnRUaW1lIiwiSW5maW5pdHkiLCJpZGVudGl0eSIsInpTcGFucyIsInNwYW5Sb3dzIiwidHJhbnNmb3JtU3BhbiIsImZyYW1lIiwib3RoZXIiLCJzcGFuSUQiLCJwYXJlbnRTcGFuSUQiLCJvcGVyYXRpb25OYW1lIiwic2VydmljZVRhZ3MiLCJzdGFydFRpbWUiLCJsb2dzIiwiYW5ub3RhdGlvbnMiLCJ0cmFuc2Zvcm1Bbm5vdGF0aW9uIiwia2luZCIsInNoYXJlZCIsImFubm90YXRpb24iLCJlbmRwb2ludCIsInZhbHVlVG9UYWciLCJpcHY0IiwiaXB2NiIsInBvcnQiLCJmaWx0ZXIiLCJ0cmFuc2Zvcm1Ub1ppcGtpbiIsImdldCIsImdldEVuZHBvaW50IiwibCIsInQiXSwic291cmNlUm9vdCI6IiJ9