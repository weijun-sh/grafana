"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["tempoPlugin"],{

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

/***/ "./public/app/plugins/datasource/loki/components/LokiLabelBrowser.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LokiLabelBrowser": () => (/* binding */ LokiLabelBrowser),
/* harmony export */   "UnthemedLokiLabelBrowser": () => (/* binding */ UnthemedLokiLabelBrowser),
/* harmony export */   "buildSelector": () => (/* binding */ buildSelector),
/* harmony export */   "facetLabels": () => (/* binding */ facetLabels)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-window-virtual-0f9a8c6a67/0/cache/react-window-npm-1.8.6-4f5a230226-54ccf2b16c.zip/node_modules/react-window/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _language_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/language_utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _Label, _Label2, _Label3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // Hard limit on labels to render



const MAX_LABEL_COUNT = 1000;
const MAX_VALUE_COUNT = 10000;
const MAX_AUTO_SELECT = 4;
const EMPTY_SELECTOR = '{}';
function buildSelector(labels) {
  const selectedLabels = [];

  for (const label of labels) {
    if (label.selected && label.values && label.values.length > 0) {
      const selectedValues = label.values.filter(value => value.selected).map(value => value.name);

      if (selectedValues.length > 1) {
        selectedLabels.push(`${label.name}=~"${selectedValues.map(_language_utils__WEBPACK_IMPORTED_MODULE_4__.escapeLabelValueInRegexSelector).join('|')}"`);
      } else if (selectedValues.length === 1) {
        selectedLabels.push(`${label.name}="${(0,_language_utils__WEBPACK_IMPORTED_MODULE_4__.escapeLabelValueInExactSelector)(selectedValues[0])}"`);
      }
    }
  }

  return ['{', selectedLabels.join(','), '}'].join('');
}
function facetLabels(labels, possibleLabels, lastFacetted) {
  return labels.map(label => {
    const possibleValues = possibleLabels[label.name];

    if (possibleValues) {
      let existingValues;

      if (label.name === lastFacetted && label.values) {
        // Facetting this label, show all values
        existingValues = label.values;
      } else {
        var _label$values;

        // Keep selection in other facets
        const selectedValues = new Set(((_label$values = label.values) === null || _label$values === void 0 ? void 0 : _label$values.filter(value => value.selected).map(value => value.name)) || []); // Values for this label have not been requested yet, let's use the facetted ones as the initial values

        existingValues = possibleValues.map(value => ({
          name: value,
          selected: selectedValues.has(value)
        }));
      }

      return Object.assign({}, label, {
        loading: false,
        values: existingValues,
        facets: existingValues.length
      });
    } // Label is facetted out, hide all values


    return Object.assign({}, label, {
      loading: false,
      hidden: !possibleValues,
      values: undefined,
      facets: 0
    });
  });
}

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background-color: ${theme.colors.background.secondary};
    padding: ${theme.spacing(2)};
    width: 100%;
  `,
  list: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(1)};
    display: flex;
    flex-wrap: wrap;
    max-height: 200px;
    overflow: auto;
  `,
  section: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & + & {
      margin: ${theme.spacing(2, 0)};
    }
    position: relative;
  `,
  selector: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-family: ${theme.typography.fontFamilyMonospace};
    margin-bottom: ${theme.spacing(1)};
  `,
  status: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(0.5)};
    color: ${theme.colors.text.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* using absolute positioning because flex interferes with ellipsis */
    position: absolute;
    width: 50%;
    right: 0;
    text-align: right;
    transition: opacity 100ms linear;
    opacity: 0;
  `,
  statusShowing: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    opacity: 1;
  `,
  error: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    color: ${theme.colors.error.main};
  `,
  valueList: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(1)};
  `,
  valueListWrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    border-left: 1px solid ${theme.colors.border.medium};
    margin: ${theme.spacing(1, 0)};
    padding: ${theme.spacing(1, 0, 1, 1)};
  `,
  valueListArea: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${theme.spacing(1)};
  `,
  valueTitle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: -${theme.spacing(0.5)};
    margin-bottom: ${theme.spacing(1)};
  `,
  validationStatus: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(0.5)};
    margin-bottom: ${theme.spacing(1)};
    color: ${theme.colors.text.maxContrast};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
});

class UnthemedLokiLabelBrowser extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      labels: [],
      searchTerm: '',
      status: 'Ready',
      error: '',
      validationStatus: ''
    });

    _defineProperty(this, "onChangeSearch", event => {
      this.setState({
        searchTerm: event.target.value
      });
    });

    _defineProperty(this, "onClickRunLogsQuery", () => {
      const selector = buildSelector(this.state.labels);
      this.props.onChange(selector);
    });

    _defineProperty(this, "onClickRunMetricsQuery", () => {
      const selector = buildSelector(this.state.labels);
      const query = `rate(${selector}[$__interval])`;
      this.props.onChange(query);
    });

    _defineProperty(this, "onClickClear", () => {
      this.setState(state => {
        const labels = state.labels.map(label => Object.assign({}, label, {
          values: undefined,
          selected: false,
          loading: false,
          hidden: false,
          facets: undefined
        }));
        return {
          labels,
          searchTerm: '',
          status: '',
          error: '',
          validationStatus: ''
        };
      });
      this.props.deleteLastUsedLabels();
    });

    _defineProperty(this, "onClickLabel", (name, value, event) => {
      const label = this.state.labels.find(l => l.name === name);

      if (!label) {
        return;
      } // Toggle selected state


      const selected = !label.selected;
      let nextValue = {
        selected
      };

      if (label.values && !selected) {
        // Deselect all values if label was deselected
        const values = label.values.map(value => Object.assign({}, value, {
          selected: false
        }));
        nextValue = Object.assign({}, nextValue, {
          facets: 0,
          values
        });
      } // Resetting search to prevent empty results


      this.setState({
        searchTerm: ''
      });
      this.updateLabelState(name, nextValue, '', () => this.doFacettingForLabel(name));
    });

    _defineProperty(this, "onClickValue", (name, value, event) => {
      const label = this.state.labels.find(l => l.name === name);

      if (!label || !label.values) {
        return;
      } // Resetting search to prevent empty results


      this.setState({
        searchTerm: ''
      }); // Toggling value for selected label, leaving other values intact

      const values = label.values.map(v => Object.assign({}, v, {
        selected: v.name === value ? !v.selected : v.selected
      }));
      this.updateLabelState(name, {
        values
      }, '', () => this.doFacetting(name));
    });

    _defineProperty(this, "onClickValidate", () => {
      const selector = buildSelector(this.state.labels);
      this.validateSelector(selector);
    });

    _defineProperty(this, "doFacetting", lastFacetted => {
      const selector = buildSelector(this.state.labels);

      if (selector === EMPTY_SELECTOR) {
        // Clear up facetting
        const labels = this.state.labels.map(label => {
          return Object.assign({}, label, {
            facets: 0,
            values: undefined,
            hidden: false
          });
        });
        this.setState({
          labels
        }, () => {
          // Get fresh set of values
          this.state.labels.forEach(label => label.selected && this.fetchValues(label.name, selector));
        });
      } else {
        // Do facetting
        this.fetchSeries(selector, lastFacetted);
      }
    });
  }

  updateLabelState(name, updatedFields, status = '', cb) {
    this.setState(state => {
      const labels = state.labels.map(label => {
        if (label.name === name) {
          return Object.assign({}, label, updatedFields);
        }

        return label;
      }); // New status overrides errors

      const error = status ? '' : state.error;
      return {
        labels,
        status,
        error,
        validationStatus: ''
      };
    }, cb);
  }

  componentDidMount() {
    const {
      languageProvider,
      autoSelect = MAX_AUTO_SELECT,
      lastUsedLabels
    } = this.props;

    if (languageProvider) {
      const selectedLabels = lastUsedLabels;
      languageProvider.start().then(() => {
        let rawLabels = languageProvider.getLabelKeys();

        if (rawLabels.length > MAX_LABEL_COUNT) {
          const error = `Too many labels found (showing only ${MAX_LABEL_COUNT} of ${rawLabels.length})`;
          rawLabels = rawLabels.slice(0, MAX_LABEL_COUNT);
          this.setState({
            error
          });
        } // Auto-select all labels if label list is small enough


        const labels = rawLabels.map((label, i, arr) => ({
          name: label,
          selected: arr.length <= autoSelect && selectedLabels.length === 0 || selectedLabels.includes(label),
          loading: false
        })); // Pre-fetch values for selected labels

        this.setState({
          labels
        }, () => {
          this.state.labels.forEach(label => {
            if (label.selected) {
              this.fetchValues(label.name, EMPTY_SELECTOR);
            }
          });
        });
      });
    }
  }

  doFacettingForLabel(name) {
    const label = this.state.labels.find(l => l.name === name);

    if (!label) {
      return;
    }

    const selectedLabels = this.state.labels.filter(label => label.selected).map(label => label.name);
    this.props.storeLastUsedLabels(selectedLabels);

    if (label.selected) {
      // Refetch values for newly selected label...
      if (!label.values) {
        this.fetchValues(name, buildSelector(this.state.labels));
      }
    } else {
      // Only need to facet when deselecting labels
      this.doFacetting();
    }
  }

  async fetchValues(name, selector) {
    const {
      languageProvider
    } = this.props;
    this.updateLabelState(name, {
      loading: true
    }, `Fetching values for ${name}`);

    try {
      let rawValues = await languageProvider.getLabelValues(name); // If selector changed, clear loading state and discard result by returning early

      if (selector !== buildSelector(this.state.labels)) {
        this.updateLabelState(name, {
          loading: false
        }, '');
        return;
      }

      if (rawValues.length > MAX_VALUE_COUNT) {
        const error = `Too many values for ${name} (showing only ${MAX_VALUE_COUNT} of ${rawValues.length})`;
        rawValues = rawValues.slice(0, MAX_VALUE_COUNT);
        this.setState({
          error
        });
      }

      const values = rawValues.map(value => ({
        name: value
      }));
      this.updateLabelState(name, {
        values,
        loading: false
      });
    } catch (error) {
      console.error(error);
    }
  }

  async fetchSeries(selector, lastFacetted) {
    const {
      languageProvider
    } = this.props;

    if (lastFacetted) {
      this.updateLabelState(lastFacetted, {
        loading: true
      }, `Facetting labels for ${selector}`);
    }

    try {
      const possibleLabels = await languageProvider.fetchSeriesLabels(selector, true); // If selector changed, clear loading state and discard result by returning early

      if (selector !== buildSelector(this.state.labels)) {
        if (lastFacetted) {
          this.updateLabelState(lastFacetted, {
            loading: false
          });
        }

        return;
      }

      if (Object.keys(possibleLabels).length === 0) {
        this.setState({
          error: `Empty results, no matching label for ${selector}`
        });
        return;
      }

      const labels = facetLabels(this.state.labels, possibleLabels, lastFacetted);
      this.setState({
        labels,
        error: ''
      });

      if (lastFacetted) {
        this.updateLabelState(lastFacetted, {
          loading: false
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async validateSelector(selector) {
    const {
      languageProvider
    } = this.props;
    this.setState({
      validationStatus: `Validating selector ${selector}`,
      error: ''
    });
    const streams = await languageProvider.fetchSeries(selector);
    this.setState({
      validationStatus: `Selector is valid (${streams.length} streams found)`
    });
  }

  render() {
    const {
      theme
    } = this.props;
    const {
      labels,
      searchTerm,
      status,
      error,
      validationStatus
    } = this.state;

    if (labels.length === 0) {
      return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, {
        text: "Loading labels..."
      }));
    }

    const styles = getStyles(theme);
    const selector = buildSelector(this.state.labels);
    const empty = selector === EMPTY_SELECTOR;
    let selectedLabels = labels.filter(label => label.selected && label.values);

    if (searchTerm) {
      selectedLabels = selectedLabels.map(label => {
        const searchResults = label.values.filter(value => {
          // Always return selected values
          if (value.selected) {
            value.highlightParts = undefined;
            return true;
          }

          const fuzzyMatchResult = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.fuzzyMatch)(value.name.toLowerCase(), searchTerm.toLowerCase());

          if (fuzzyMatchResult.found) {
            value.highlightParts = fuzzyMatchResult.ranges;
            value.order = fuzzyMatchResult.distance;
            return true;
          } else {
            return false;
          }
        });
        return Object.assign({}, label, {
          values: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.sortBy)(searchResults, value => value.selected ? -Infinity : value.order)
        });
      });
    } else {
      // Clear highlight parts when searchTerm is cleared
      selectedLabels = this.state.labels.filter(label => label.selected && label.values).map(label => Object.assign({}, label, {
        values: label !== null && label !== void 0 && label.values ? label.values.map(value => Object.assign({}, value, {
          highlightParts: undefined
        })) : []
      }));
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: styles.wrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: styles.section,
        children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
          description: "Which labels would you like to consider for your search?",
          children: "1. Select labels to search in"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: styles.list,
          children: labels.map(label => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.BrowserLabel, {
            name: label.name,
            loading: label.loading,
            active: label.selected,
            hidden: label.hidden,
            facets: label.facets,
            onClick: this.onClickLabel
          }, label.name))
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: styles.section,
        children: [_Label2 || (_Label2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
          description: "Choose the label values that you would like to use for the query. Use the search field to find values across selected labels.",
          children: "2. Find values for the selected labels"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
            onChange: this.onChangeSearch,
            "aria-label": "Filter expression for values",
            value: searchTerm
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: styles.valueListArea,
          children: selectedLabels.map(label => {
            var _label$values2, _label$values3;

            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              role: "list",
              className: styles.valueListWrapper,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: styles.valueTitle,
                "aria-label": `Values for ${label.name}`,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.BrowserLabel, {
                  name: label.name,
                  loading: label.loading,
                  active: label.selected,
                  hidden: label.hidden //If no facets, we want to show number of all label values
                  ,
                  facets: label.facets || ((_label$values2 = label.values) === null || _label$values2 === void 0 ? void 0 : _label$values2.length),
                  onClick: this.onClickLabel
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_window__WEBPACK_IMPORTED_MODULE_6__.FixedSizeList, {
                height: 200,
                itemCount: ((_label$values3 = label.values) === null || _label$values3 === void 0 ? void 0 : _label$values3.length) || 0,
                itemSize: 28,
                itemKey: i => label.values[i].name,
                width: 200,
                className: styles.valueList,
                children: ({
                  index,
                  style
                }) => {
                  var _label$values4;

                  const value = (_label$values4 = label.values) === null || _label$values4 === void 0 ? void 0 : _label$values4[index];

                  if (!value) {
                    return null;
                  }

                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    style: style,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.BrowserLabel, {
                      name: label.name,
                      value: value === null || value === void 0 ? void 0 : value.name,
                      active: value === null || value === void 0 ? void 0 : value.selected,
                      highlightParts: value === null || value === void 0 ? void 0 : value.highlightParts,
                      onClick: this.onClickValue,
                      searchTerm: searchTerm
                    })
                  });
                }
              })]
            }, label.name);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: styles.section,
        children: [_Label3 || (_Label3 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
          children: "3. Resulting selector"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          "aria-label": "selector",
          className: styles.selector,
          children: selector
        }), validationStatus && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: styles.validationStatus,
          children: validationStatus
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            "aria-label": "Use selector as logs button",
            disabled: empty,
            onClick: this.onClickRunLogsQuery,
            children: "Show logs"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            "aria-label": "Use selector as metrics button",
            variant: "secondary",
            disabled: empty,
            onClick: this.onClickRunMetricsQuery,
            children: "Show logs rate"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            "aria-label": "Validate submit button",
            variant: "secondary",
            disabled: empty,
            onClick: this.onClickValidate,
            children: "Validate selector"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            "aria-label": "Selector clear button",
            variant: "secondary",
            onClick: this.onClickClear,
            children: "Clear"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.status, (status || error) && styles.statusShowing),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: error ? styles.error : '',
              children: error || status
            })
          })]
        })]
      })]
    });
  }

}
const LokiLabelBrowser = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.withTheme2)(UnthemedLokiLabelBrowser);

/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/LokiQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LokiQueryField": () => (/* binding */ LokiQueryField)
/* harmony export */ });
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_LocalStorageValueProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/LocalStorageValueProvider/index.tsx");
/* harmony import */ var _language_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/language_utils.ts");
/* harmony import */ var _LokiLabelBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiLabelBrowser.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const LAST_USED_LABELS_KEY = 'grafana.datasources.loki.browser.labels';

function getChooserText(hasSyntax, hasLogLabels) {
  if (!hasSyntax) {
    return 'Loading labels...';
  }

  if (!hasLogLabels) {
    return '(No logs found)';
  }

  return 'Log browser';
}

function willApplySuggestion(suggestion, {
  typeaheadContext,
  typeaheadText
}) {
  // Modify suggestion based on context
  switch (typeaheadContext) {
    case 'context-labels':
      {
        const nextChar = _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.DOMUtil.getNextCharacter();

        if (!nextChar || nextChar === '}' || nextChar === ',') {
          suggestion += '=';
        }

        break;
      }

    case 'context-label-values':
      {
        // Always add quotes and remove existing ones instead
        let suggestionModified = '';

        if (!typeaheadText.match(/^(!?=~?"|")/)) {
          suggestionModified = '"';
        }

        suggestionModified += (0,_language_utils__WEBPACK_IMPORTED_MODULE_4__.escapeLabelValueInSelector)(suggestion, typeaheadText);

        if (_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.DOMUtil.getNextCharacter() !== '"') {
          suggestionModified += '"';
        }

        suggestion = suggestionModified;
        break;
      }

    default:
  }

  return suggestion;
}

class LokiQueryField extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "plugins", void 0);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "onChangeLabelBrowser", selector => {
      this.onChangeQuery(selector, true);
      this.setState({
        labelBrowserVisible: false
      });
    });

    _defineProperty(this, "onChangeQuery", (value, override) => {
      // Send text change to parent
      const {
        query,
        onChange,
        onRunQuery
      } = this.props;

      if (onChange) {
        const nextQuery = Object.assign({}, query, {
          expr: value
        });
        onChange(nextQuery);

        if (override && onRunQuery) {
          onRunQuery();
        }
      }
    });

    _defineProperty(this, "onClickChooserButton", () => {
      this.setState(state => ({
        labelBrowserVisible: !state.labelBrowserVisible
      }));
    });

    _defineProperty(this, "onTypeahead", async typeahead => {
      const {
        datasource
      } = this.props;

      if (!datasource.languageProvider) {
        return {
          suggestions: []
        };
      }

      const lokiLanguageProvider = datasource.languageProvider;
      const {
        history
      } = this.props;
      const {
        prefix,
        text,
        value,
        wrapperClasses,
        labelKey
      } = typeahead;
      const result = await lokiLanguageProvider.provideCompletionItems({
        text,
        value,
        prefix,
        wrapperClasses,
        labelKey
      }, {
        history
      });
      return result;
    });

    this.state = {
      labelsLoaded: false,
      labelBrowserVisible: false
    };
    this.plugins = [(0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.BracesPlugin)(), (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SlatePrism)({
      onlyIn: node => node.object === 'block' && node.type === 'code_block',
      getSyntax: node => 'logql'
    }, Object.assign({}, prismjs__WEBPACK_IMPORTED_MODULE_0__.languages, {
      logql: this.props.datasource.languageProvider.getSyntax()
    }))];
  }

  async componentDidMount() {
    this._isMounted = true;
    await this.props.datasource.languageProvider.start();

    if (this._isMounted) {
      this.setState({
        labelsLoaded: true
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate(prevProps) {
    const {
      range,
      datasource: {
        languageProvider
      }
    } = this.props;
    const refreshLabels = (0,_language_utils__WEBPACK_IMPORTED_MODULE_4__.shouldRefreshLabels)(range, prevProps.range); // We want to refresh labels when range changes (we round up intervals to a minute)

    if (refreshLabels) {
      languageProvider.fetchLabels();
    }
  }

  render() {
    const {
      ExtraFieldElement,
      query,
      datasource,
      placeholder = 'Enter a Loki query (run with Shift+Enter)'
    } = this.props;
    const {
      labelsLoaded,
      labelBrowserVisible
    } = this.state;
    const lokiLanguageProvider = datasource.languageProvider;
    const cleanText = datasource.languageProvider ? lokiLanguageProvider.cleanText : undefined;
    const hasLogLabels = lokiLanguageProvider.getLabelKeys().length > 0;
    const chooserText = getChooserText(labelsLoaded, hasLogLabels);
    const buttonDisabled = !(labelsLoaded && hasLogLabels);
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(app_core_components_LocalStorageValueProvider__WEBPACK_IMPORTED_MODULE_3__.LocalStorageValueProvider, {
      storageKey: LAST_USED_LABELS_KEY,
      defaultValue: [],
      children: (lastUsedLabels, onLastUsedLabelsSave, onLastUsedLabelsDelete) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "gf-form-inline gf-form-inline--xs-view-flex-column flex-grow-1",
            "data-testid": this.props['data-testid'],
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
              className: "gf-form-label query-keyword pointer",
              onClick: this.onClickChooserButton,
              disabled: buttonDisabled,
              children: [chooserText, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                name: labelBrowserVisible ? 'angle-down' : 'angle-right'
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "gf-form gf-form--grow flex-shrink-1 min-width-15",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.QueryField, {
                additionalPlugins: this.plugins,
                cleanText: cleanText,
                query: query.expr,
                onTypeahead: this.onTypeahead,
                onWillApplySuggestion: willApplySuggestion,
                onChange: this.onChangeQuery,
                onBlur: this.props.onBlur,
                onRunQuery: this.props.onRunQuery,
                placeholder: placeholder,
                portalOrigin: "loki"
              })
            })]
          }), labelBrowserVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "gf-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LokiLabelBrowser__WEBPACK_IMPORTED_MODULE_5__.LokiLabelBrowser, {
              languageProvider: lokiLanguageProvider,
              onChange: this.onChangeLabelBrowser,
              lastUsedLabels: lastUsedLabels || [],
              storeLastUsedLabels: onLastUsedLabelsSave,
              deleteLastUsedLabels: onLastUsedLabelsDelete
            })
          }), ExtraFieldElement]
        });
      }
    });
  }

}

/***/ }),

/***/ "./public/app/plugins/datasource/loki/language_utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "escapeLabelValueInExactSelector": () => (/* binding */ escapeLabelValueInExactSelector),
/* harmony export */   "escapeLabelValueInRegexSelector": () => (/* binding */ escapeLabelValueInRegexSelector),
/* harmony export */   "escapeLabelValueInSelector": () => (/* binding */ escapeLabelValueInSelector),
/* harmony export */   "isRegexSelector": () => (/* binding */ isRegexSelector),
/* harmony export */   "shouldRefreshLabels": () => (/* binding */ shouldRefreshLabels)
/* harmony export */ });
function roundMsToMin(milliseconds) {
  return roundSecToMin(milliseconds / 1000);
}

function roundSecToMin(seconds) {
  return Math.floor(seconds / 60);
}

function shouldRefreshLabels(range, prevRange) {
  if (range && prevRange) {
    const sameMinuteFrom = roundMsToMin(range.from.valueOf()) === roundMsToMin(prevRange.from.valueOf());
    const sameMinuteTo = roundMsToMin(range.to.valueOf()) === roundMsToMin(prevRange.to.valueOf()); // If both are same, don't need to refresh

    return !(sameMinuteFrom && sameMinuteTo);
  }

  return false;
} // Loki regular-expressions use the RE2 syntax (https://github.com/google/re2/wiki/Syntax),
// so every character that matches something in that list has to be escaped.
// the list of meta characters is: *+?()|\.[]{}^$
// we make a javascript regular expression that matches those characters:

const RE2_METACHARACTERS = /[*+?()|\\.\[\]{}^$]/g;

function escapeLokiRegexp(value) {
  return value.replace(RE2_METACHARACTERS, '\\$&');
} // based on the openmetrics-documentation, the 3 symbols we have to handle are:
// - \n ... the newline character
// - \  ... the backslash character
// - "  ... the double-quote character


function escapeLabelValueInExactSelector(labelValue) {
  return labelValue.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/"/g, '\\"');
}
function escapeLabelValueInRegexSelector(labelValue) {
  return escapeLabelValueInExactSelector(escapeLokiRegexp(labelValue));
}
function escapeLabelValueInSelector(labelValue, selector) {
  return isRegexSelector(selector) ? escapeLabelValueInRegexSelector(labelValue) : escapeLabelValueInExactSelector(labelValue);
}
function isRegexSelector(selector) {
  if (selector && (selector.includes('=~') || selector.includes('!~'))) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/CheatSheet.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheatSheet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div;




function CheatSheet() {
  return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
      id: "tempo-cheat-sheet",
      children: "Tempo Cheat Sheet"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      children: "Tempo is a trace id lookup store. Enter a trace id in the above field and hit \u201CRun Query\u201D to retrieve your trace. Tempo is generally paired with other datasources such as Loki or Prometheus to find traces."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      children: ["Here are some", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
        href: "https://grafana.com/docs/tempo/latest/guides/instrumentation/",
        target: "blank",
        children: "instrumentation examples"
      }), ' ', "to get you started with trace discovery through logs and metrics (exemplars)."]
    })]
  }));
}

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/QueryEditor/NativeSearch.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_store_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/store/store.ts");
/* harmony import */ var _language_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/tempo/language_provider.ts");
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/tempo/syntax.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");















const PRISM_LANGUAGE = 'tempo';
const durationPlaceholder = 'e.g. 1.2s, 100ms';
const plugins = [(0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.BracesPlugin)(), (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.SlatePrism)({
  onlyIn: node => node.object === 'block' && node.type === 'code_block',
  getSyntax: () => PRISM_LANGUAGE
})];
(prismjs__WEBPACK_IMPORTED_MODULE_2___default().languages)[PRISM_LANGUAGE] = _syntax__WEBPACK_IMPORTED_MODULE_11__.tokenizer;

const NativeSearch = ({
  datasource,
  query,
  onChange,
  onBlur,
  onRunQuery
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const languageProvider = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => new _language_provider__WEBPACK_IMPORTED_MODULE_10__["default"](datasource), [datasource]);
  const [hasSyntaxLoaded, setHasSyntaxLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [asyncServiceNameValue, setAsyncServiceNameValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    value: ''
  });
  const [asyncSpanNameValue, setAsyncSpanNameValue] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    value: ''
  });
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
  const [inputErrors, setInputErrors] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    serviceName: false,
    spanName: false
  });

  async function fetchOptionsCallback(name, lp, query = '') {
    try {
      setIsLoading(prevValue => Object.assign({}, prevValue, {
        [name]: false
      }));
      const options = await lp.getOptions(name);
      const filteredOptions = options.filter(item => item.value ? (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.fuzzyMatch)(item.value, query).found : false);
      return filteredOptions;
    } catch (error) {
      if ((error === null || error === void 0 ? void 0 : error.status) === 404) {
        setIsLoading(prevValue => Object.assign({}, prevValue, {
          [name]: false
        }));
      } else {
        (0,app_store_store__WEBPACK_IMPORTED_MODULE_9__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_7__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_8__.createErrorNotification)('Error', error)));
        setIsLoading(prevValue => Object.assign({}, prevValue, {
          [name]: false
        }));
      }

      setError(error);
      return [];
    }
  }

  const loadOptionsOfType = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(name => {
    setIsLoading(prevValue => Object.assign({}, prevValue, {
      [name]: true
    }));
    return fetchOptionsCallback(name, languageProvider);
  }, [languageProvider]);
  const fetchOptionsOfType = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(name => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(() => loadOptionsOfType(name), 500, {
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

  const serviceNameSearch = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(getServiceNameOptions, 500, {
    leading: true,
    trailing: true
  });
  const spanNameSearch = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(getSpanNameOptions, 500, {
    leading: true,
    trailing: true
  });
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const fetchOptions = async () => {
      try {
        await languageProvider.start();
        fetchOptionsCallback('service.name', languageProvider);
        fetchOptionsCallback('name', languageProvider);
        setHasSyntaxLoaded(true);
      } catch (error) {
        // Display message if Tempo is connected but search 404's
        if ((error === null || error === void 0 ? void 0 : error.status) === 404) {
          setError(error);
        } else {
          (0,app_store_store__WEBPACK_IMPORTED_MODULE_9__.dispatch)((0,app_core_actions__WEBPACK_IMPORTED_MODULE_7__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_8__.createErrorNotification)('Error', error)));
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

  const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getTemplateSrv)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: styles.container,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineField, {
          label: "Service Name",
          labelWidth: 14,
          grow: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.AsyncSelect, {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineField, {
          label: "Span Name",
          labelWidth: 14,
          grow: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.AsyncSelect, {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineField, {
          label: "Tags",
          labelWidth: 14,
          grow: true,
          tooltip: "Values should be in the logfmt format.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.QueryField, {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineField, {
          label: "Min Duration",
          invalid: !!inputErrors.minDuration,
          labelWidth: 14,
          grow: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input, {
            id: "minDuration",
            value: query.minDuration || '',
            placeholder: durationPlaceholder,
            onBlur: () => {
              var _query$minDuration;

              const templatedMinDuration = templateSrv.replace((_query$minDuration = query.minDuration) !== null && _query$minDuration !== void 0 ? _query$minDuration : '');

              if (query.minDuration && !(0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.isValidGoDuration)(templatedMinDuration)) {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineField, {
          label: "Max Duration",
          invalid: !!inputErrors.maxDuration,
          labelWidth: 14,
          grow: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input, {
            id: "maxDuration",
            value: query.maxDuration || '',
            placeholder: durationPlaceholder,
            onBlur: () => {
              var _query$maxDuration;

              const templatedMaxDuration = templateSrv.replace((_query$maxDuration = query.maxDuration) !== null && _query$maxDuration !== void 0 ? _query$maxDuration : '');

              if (query.maxDuration && !(0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.isValidGoDuration)(templatedMaxDuration)) {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineField, {
          label: "Limit",
          invalid: !!inputErrors.limit,
          labelWidth: 14,
          grow: true,
          tooltip: "Maximum numbers of returned results",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input, {
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
    }), error ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, {
      title: "Unable to connect to Tempo search",
      severity: "info",
      className: styles.alert,
      children: ["Please ensure that Tempo is configured with search enabled. If you would like to hide this tab, you can configure it in the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("a", {
        href: `/datasources/edit/${datasource.uid}`,
        children: "datasource settings"
      }), "."]
    }) : null]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NativeSearch);

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: 500px;
  `,
  alert: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: 75ch;
    margin-top: ${theme.spacing(2)};
  `
});

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/QueryEditor/QueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TempoQueryField": () => (/* binding */ TempoQueryField)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/lib/useAsync.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _loki_components_LokiQueryField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/components/LokiQueryField.tsx");
/* harmony import */ var _NativeSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/tempo/QueryEditor/NativeSearch.tsx");
/* harmony import */ var _ServiceGraphSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/tempo/QueryEditor/ServiceGraphSection.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/tempo/QueryEditor/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Badge, _div, _div2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const DEFAULT_QUERY_TYPE = 'traceId';

class TempoQueryFieldComponent extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "onChangeLinkedQuery", value => {
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

    _defineProperty(this, "onRunLinkedQuery", () => {
      this.props.onRunQuery();
    });

    _defineProperty(this, "onClearResults", () => {
      // Run clear query to clear results
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
    // Set initial query type to ensure traceID field appears
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

    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.tempoServiceGraph) {
      queryTypeOptions.push({
        value: 'serviceMap',
        label: 'Service Graph'
      });
    }

    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.tempoSearch && !(datasource !== null && datasource !== void 0 && (_datasource$search = datasource.search) !== null && _datasource$search !== void 0 && _datasource$search.hide)) {
      queryTypeOptions.unshift({
        value: 'nativeSearch',
        label: 'Search - Beta'
      });
    }

    if (logsDatasourceUid) {
      if (!_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.tempoSearch) {
        // Place at beginning as Search if no native search
        queryTypeOptions.unshift({
          value: 'search',
          label: 'Search'
        });
      } else {
        // Place at end as Loki Search if native search is enabled
        queryTypeOptions.push({
          value: 'search',
          label: 'Loki Search'
        });
      }
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
          label: "Query type",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.RadioButtonGroup, {
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
      }), query.queryType === 'nativeSearch' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        style: {
          maxWidth: '65ch'
        },
        children: [_Badge || (_Badge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Badge, {
          icon: "rocket",
          text: "Beta",
          color: "blue"
        })), _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.tempoBackendSearch ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: "\xA0Tempo search is currently in beta."
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: "\xA0Tempo search is currently in beta and is designed to return recent traces only. It ignores the time range picker. We are actively working on full backend search. Look for improvements in the near future!"
        })]
      }), query.queryType === 'search' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(SearchSection, {
        logsDatasourceUid: logsDatasourceUid,
        query: query,
        onRunQuery: this.onRunLinkedQuery,
        onChange: this.onChangeLinkedQuery
      }), query.queryType === 'nativeSearch' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_NativeSearch__WEBPACK_IMPORTED_MODULE_5__["default"], {
        datasource: this.props.datasource,
        query: query,
        onChange: onChange,
        onBlur: this.props.onBlur,
        onRunQuery: this.props.onRunQuery
      }), query.queryType === 'upload' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
          padding: this.props.theme.spacing(2)
        }),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FileDropzone, {
          options: {
            multiple: false
          },
          onLoad: result => {
            this.props.datasource.uploadedJson = result;
            this.props.onRunQuery();
          }
        })
      }), query.queryType === 'traceId' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
          label: "Trace ID",
          labelWidth: 14,
          grow: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.QueryField, {
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
      }), query.queryType === 'serviceMap' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ServiceGraphSection__WEBPACK_IMPORTED_MODULE_6__.ServiceGraphSection, {
        graphDatasourceUid: graphDatasourceUid,
        query: query,
        onChange: onChange
      })]
    });
  }

}

function SearchSection({
  logsDatasourceUid,
  onChange,
  onRunQuery,
  query
}) {
  const dsState = (0,react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_9__["default"])(() => (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getDS)(logsDatasourceUid), [logsDatasourceUid]);

  if (dsState.loading) {
    return null;
  }

  const ds = dsState.value;

  if (ds) {
    var _query$linkedQuery;

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
        children: ["Tempo uses ", ds.name, " to find traces."]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_loki_components_LokiQueryField__WEBPACK_IMPORTED_MODULE_4__.LokiQueryField, {
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
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "text-warning",
      children: "Please set up a Loki search datasource in the datasource settings."
    }));
  }

  if (logsDatasourceUid && !ds) {
    return _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "text-warning",
      children: "Loki search datasource is configured but the data source no longer exists. Please configure existing data source to use the search."
    }));
  }

  return null;
}

const TempoQueryField = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.withTheme2)(TempoQueryFieldComponent);

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/QueryEditor/ServiceGraphSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceGraphSection": () => (/* binding */ ServiceGraphSection)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/lib/useAsync.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _features_variables_adhoc_picker_AdHocFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/variables/adhoc/picker/AdHocFilter.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/tempo/QueryEditor/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _div2, _a;









function ServiceGraphSection({
  graphDatasourceUid,
  query,
  onChange
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const dsState = (0,react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_6__["default"])(() => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getDS)(graphDatasourceUid), [graphDatasourceUid]); // Check if service graph metrics are being collected. If not, displays a warning

  const [hasKeys, setHasKeys] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
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
    return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "text-warning",
      children: "Please set up a service graph datasource in the datasource settings."
    }));
  }

  if (graphDatasourceUid && !ds) {
    return _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "text-warning",
      children: "Service graph datasource is configured but the data source no longer exists. Please configure existing data source to use the service graph functionality."
    }));
  }

  const filters = queryToFilter(query.serviceMapQuery || '');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineField, {
        label: "Filter",
        labelWidth: 14,
        grow: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_features_variables_adhoc_picker_AdHocFilter__WEBPACK_IMPORTED_MODULE_3__.AdHocFilter, {
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
    }), hasKeys === false ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      title: "No service graph data found",
      severity: "info",
      className: styles.alert,
      children: ["Please ensure that service graph metrics are set up correctly according to the", ' ', _a || (_a = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
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

const getStyles = theme => ({
  alert: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    max-width: 75ch;
    margin-top: ${theme.spacing(2)};
  `
});

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/QueryEditor/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDS": () => (/* binding */ getDS)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");

async function getDS(uid) {
  if (!uid) {
    return undefined;
  }

  const dsSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getDataSourceSrv)();

  try {
    return await dsSrv.get(uid);
  } catch (error) {
    console.error('Failed to load data source', error);
    return undefined;
  }
}

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/configuration/ConfigEditor.tsx":
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
/* harmony import */ var _LokiSearchSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/tempo/configuration/LokiSearchSettings.tsx");
/* harmony import */ var _SearchSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/tempo/configuration/SearchSettings.tsx");
/* harmony import */ var _ServiceGraphSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/tempo/configuration/ServiceGraphSettings.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");












const ConfigEditor = ({
  options,
  onOptionsChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.DataSourceHttpSettings, {
      defaultUrl: "http://tempo",
      dataSourceConfig: options,
      showAccessOptions: false,
      onChange: onOptionsChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_TraceToLogs_TraceToLogsSettings__WEBPACK_IMPORTED_MODULE_4__.TraceToLogsSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.featureToggles.traceToMetrics ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_TraceToMetrics_TraceToMetricsSettings__WEBPACK_IMPORTED_MODULE_5__.TraceToMetricsSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }) : null, _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.featureToggles.tempoServiceGraph && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ServiceGraphSettings__WEBPACK_IMPORTED_MODULE_8__.ServiceGraphSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.featureToggles.tempoSearch && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_SearchSettings__WEBPACK_IMPORTED_MODULE_7__.SearchSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_NodeGraphSettings__WEBPACK_IMPORTED_MODULE_3__.NodeGraphSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "gf-form-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_LokiSearchSettings__WEBPACK_IMPORTED_MODULE_6__.LokiSearchSettings, {
        options: options,
        onOptionsChange: onOptionsChange
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/configuration/LokiSearchSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LokiSearchSettings": () => (/* binding */ LokiSearchSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;








function LokiSearchSettings({
  options,
  onOptionsChange
}) {
  var _options$jsonData$tra, _options$jsonData$tra2, _options$jsonData$lok, _options$jsonData$lok2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles)(getStyles); // Default to the trace to logs datasource if configured and loki search was enabled
  // but only if jsonData.lokiSearch hasn't been set

  const legacyDatasource = ((_options$jsonData$tra = options.jsonData.tracesToLogs) === null || _options$jsonData$tra === void 0 ? void 0 : _options$jsonData$tra.lokiSearch) !== false ? (_options$jsonData$tra2 = options.jsonData.tracesToLogs) === null || _options$jsonData$tra2 === void 0 ? void 0 : _options$jsonData$tra2.datasourceUid : undefined;

  if (legacyDatasource && options.jsonData.lokiSearch === undefined) {
    (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
      onOptionsChange,
      options
    }, 'lokiSearch', {
      datasourceUid: legacyDatasource
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      width: '100%'
    }),
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
      className: "page-heading",
      children: "Loki Search"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.infoText,
      children: "Select a Loki datasource to search for traces. Derived fields must be configured in the Loki data source."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      className: styles.row,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        tooltip: "The Loki data source with the service graph data",
        label: "Data source",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.DataSourcePicker, {
          inputId: "loki-search-data-source-picker",
          pluginId: "loki",
          current: (_options$jsonData$lok = options.jsonData.lokiSearch) === null || _options$jsonData$lok === void 0 ? void 0 : _options$jsonData$lok.datasourceUid,
          noDefault: true,
          width: 40,
          onChange: ds => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'lokiSearch', {
            datasourceUid: ds.uid
          })
        })
      }), (_options$jsonData$lok2 = options.jsonData.lokiSearch) !== null && _options$jsonData$lok2 !== void 0 && _options$jsonData$lok2.datasourceUid ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        type: 'button',
        variant: 'secondary',
        size: 'sm',
        fill: 'text',
        onClick: () => {
          (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
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

const getStyles = theme => ({
  infoText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: infoText;
    padding-bottom: ${theme.spacing.md};
    color: ${theme.colors.textSemiWeak};
  `,
  row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: row;
    align-items: baseline;
  `
});

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/configuration/SearchSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchSettings": () => (/* binding */ SearchSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;







function SearchSettings({
  options,
  onOptionsChange
}) {
  var _options$jsonData$sea;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: styles.container,
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
      className: "page-heading",
      children: "Search"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
      className: styles.row,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
        tooltip: "Removes the Search tab from the Tempo query editor.",
        label: "Hide search",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineSwitch, {
          id: "hideSearch",
          value: (_options$jsonData$sea = options.jsonData.search) === null || _options$jsonData$sea === void 0 ? void 0 : _options$jsonData$sea.hide,
          onChange: event => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
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

/***/ "./public/app/plugins/datasource/tempo/configuration/ServiceGraphSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceGraphSettings": () => (/* binding */ ServiceGraphSettings)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;








function ServiceGraphSettings({
  options,
  onOptionsChange
}) {
  var _options$jsonData$ser, _options$jsonData$ser2;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      width: '100%'
    }),
    children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
      className: "page-heading",
      children: "Service Graph"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.infoText,
      children: "To allow querying service graph data you have to select a Prometheus instance where the data is stored."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, {
      className: styles.row,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, {
        tooltip: "The Prometheus data source with the service graph data",
        label: "Data source",
        labelWidth: 26,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.DataSourcePicker, {
          inputId: "service-graph-data-source-picker",
          pluginId: "prometheus",
          current: (_options$jsonData$ser = options.jsonData.serviceMap) === null || _options$jsonData$ser === void 0 ? void 0 : _options$jsonData$ser.datasourceUid,
          noDefault: true,
          width: 40,
          onChange: ds => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
            onOptionsChange,
            options
          }, 'serviceMap', {
            datasourceUid: ds.uid
          })
        })
      }), (_options$jsonData$ser2 = options.jsonData.serviceMap) !== null && _options$jsonData$ser2 !== void 0 && _options$jsonData$ser2.datasourceUid ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
        type: 'button',
        variant: 'secondary',
        size: 'sm',
        fill: 'text',
        onClick: () => {
          (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginJsonDataOption)({
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

const getStyles = theme => ({
  infoText: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: infoText;
    padding-bottom: ${theme.spacing.md};
    color: ${theme.colors.textSemiWeak};
  `,
  row: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    label: row;
    align-items: baseline;
  `
});

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_LIMIT": () => (/* binding */ DEFAULT_LIMIT),
/* harmony export */   "TempoDatasource": () => (/* binding */ TempoDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/empty.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/toArray.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_utils_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/fetch.ts");
/* harmony import */ var app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
/* harmony import */ var _graphTransform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/tempo/graphTransform.ts");
/* harmony import */ var _resultTransformer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/tempo/resultTransformer.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // search = Loki search, nativeSearch = Tempo search for backwards compatibility

const DEFAULT_LIMIT = 20;
class TempoDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)()) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;
    this.templateSrv = templateSrv;

    _defineProperty(this, "tracesToLogs", void 0);

    _defineProperty(this, "serviceMap", void 0);

    _defineProperty(this, "search", void 0);

    _defineProperty(this, "nodeGraph", void 0);

    _defineProperty(this, "lokiSearch", void 0);

    _defineProperty(this, "uploadedJson", null);

    _defineProperty(this, "getLokiSearchDS", () => {
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
    const targets = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(filteredTargets, t => t.queryType || 'traceId');

    if (targets.clear) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
        data: [],
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done
      });
    }

    const logsDatasourceUid = this.getLokiSearchDS(); // Run search queries on linked datasource

    if (logsDatasourceUid && ((_targets$search = targets.search) === null || _targets$search === void 0 ? void 0 : _targets$search.length) > 0) {
      const dsSrv = (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__.getDatasourceSrv)();
      subQueries.push((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)(dsSrv.get(logsDatasourceUid)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(linkedDatasource => {
        var _settings$jsonData$de;

        // Wrap linked query into a data request based on original request
        const linkedRequest = Object.assign({}, options, {
          targets: targets.search.map(t => t.linkedQuery)
        }); // Find trace matchers in derived fields of the linked datasource that's identical to this datasource

        const settings = linkedDatasource.instanceSettings;
        const traceLinkMatcher = ((_settings$jsonData$de = settings.jsonData.derivedFields) === null || _settings$jsonData$de === void 0 ? void 0 : _settings$jsonData$de.filter(field => field.datasourceUid === this.uid && field.matcherRegex).map(field => field.matcherRegex)) || [];

        if (!traceLinkMatcher || traceLinkMatcher.length === 0) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.throwError)(() => new Error('No Loki datasource configured for search. Set up Derived Fields for traces in a Loki datasource settings and link it to this Tempo datasource.'));
        } else {
          return linkedDatasource.query(linkedRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => response.error ? response : (0,_resultTransformer__WEBPACK_IMPORTED_MODULE_6__.transformTraceList)(response, this.uid, this.name, traceLinkMatcher)));
        }
      })));
    }

    if ((_targets$nativeSearch = targets.nativeSearch) !== null && _targets$nativeSearch !== void 0 && _targets$nativeSearch.length) {
      try {
        const timeRange = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.tempoBackendSearch ? {
          startTime: options.range.from.unix(),
          endTime: options.range.to.unix()
        } : undefined;
        const query = this.applyVariables(targets.nativeSearch[0], options.scopedVars);
        const searchQuery = this.buildSearchQuery(query, timeRange);
        subQueries.push(this._request('/api/search', searchQuery).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => {
          return {
            data: [(0,_resultTransformer__WEBPACK_IMPORTED_MODULE_6__.createTableFrameFromSearch)(response.data.traces, this.instanceSettings)]
          };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
            error: {
              message: error.data.message
            },
            data: []
          });
        })));
      } catch (error) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
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
          subQueries.push((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
            error: {
              message: 'JSON is not valid OpenTelemetry format'
            },
            data: []
          }));
        } else {
          var _this$nodeGraph;

          subQueries.push((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)((0,_resultTransformer__WEBPACK_IMPORTED_MODULE_6__.transformFromOTLP)(otelTraceData.batches, (_this$nodeGraph = this.nodeGraph) === null || _this$nodeGraph === void 0 ? void 0 : _this$nodeGraph.enabled)));
        }
      } else {
        subQueries.push((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
          data: [],
          state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done
        }));
      }
    }

    if ((_this$serviceMap = this.serviceMap) !== null && _this$serviceMap !== void 0 && _this$serviceMap.datasourceUid && ((_targets$serviceMap = targets.serviceMap) === null || _targets$serviceMap === void 0 ? void 0 : _targets$serviceMap.length) > 0) {
      subQueries.push(serviceMapQuery(options, this.serviceMap.datasourceUid));
    }

    if (((_targets$traceId = targets.traceId) === null || _targets$traceId === void 0 ? void 0 : _targets$traceId.length) > 0) {
      subQueries.push(this.handleTraceIdQuery(options, targets.traceId));
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(...subQueries);
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
  /**
   * Handles the simplest of the queries where we have just a trace id and return trace data for it.
   * @param options
   * @param targets
   * @private
   */


  handleTraceIdQuery(options, targets) {
    const validTargets = targets.filter(t => t.query);

    if (!validTargets.length) {
      return rxjs__WEBPACK_IMPORTED_MODULE_14__.EMPTY;
    }

    const traceRequest = Object.assign({}, options, {
      targets: validTargets
    });
    return super.query(traceRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(response => {
      var _this$nodeGraph2;

      if (response.error) {
        return response;
      }

      return (0,_resultTransformer__WEBPACK_IMPORTED_MODULE_6__.transformTrace)(response, (_this$nodeGraph2 = this.nodeGraph) === null || _this$nodeGraph2 === void 0 ? void 0 : _this$nodeGraph2.enabled);
    }));
  }

  async metadataRequest(url, params = {}) {
    return await this._request(url, params, {
      method: 'GET',
      hideFromInspector: true
    }).toPromise();
  }

  _request(apiUrl, data, options) {
    const params = data ? (0,app_core_utils_fetch__WEBPACK_IMPORTED_MODULE_3__.serializeParams)(data) : '';
    const url = `${this.instanceSettings.url}${apiUrl}${params.length ? `?${params}` : ''}`;
    const req = Object.assign({}, options, {
      url
    });
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch(req);
  }

  async testDatasource() {
    const options = {
      headers: {},
      method: 'GET',
      url: `${this.instanceSettings.url}/api/echo`
    };
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)().fetch(options).toPromise();

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
          result.push(`${(0,lodash__WEBPACK_IMPORTED_MODULE_0__.startCase)(key)}: ${query[key]}`);
        }
      }

      return result.join(', ');
    }

    return query.query;
  }

  buildSearchQuery(query, timeRange) {
    var _query$search2;

    let tags = (_query$search2 = query.search) !== null && _query$search2 !== void 0 ? _query$search2 : '';
    let tempoQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(query, ['minDuration', 'maxDuration', 'limit']); // Remove empty properties

    tempoQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pickBy)(tempoQuery, lodash__WEBPACK_IMPORTED_MODULE_0__.identity);

    if (query.serviceName) {
      tags += ` service.name="${query.serviceName}"`;
    }

    if (query.spanName) {
      tags += ` name="${query.spanName}"`;
    } // Set default limit


    if (!tempoQuery.limit) {
      tempoQuery.limit = DEFAULT_LIMIT;
    } // Validate query inputs and remove spaces if valid


    if (tempoQuery.minDuration) {
      var _tempoQuery$minDurati;

      tempoQuery.minDuration = this.templateSrv.replace((_tempoQuery$minDurati = tempoQuery.minDuration) !== null && _tempoQuery$minDurati !== void 0 ? _tempoQuery$minDurati : '');

      if (!(0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.isValidGoDuration)(tempoQuery.minDuration)) {
        throw new Error('Please enter a valid min duration.');
      }

      tempoQuery.minDuration = tempoQuery.minDuration.replace(/\s/g, '');
    }

    if (tempoQuery.maxDuration) {
      var _tempoQuery$maxDurati;

      tempoQuery.maxDuration = this.templateSrv.replace((_tempoQuery$maxDurati = tempoQuery.maxDuration) !== null && _tempoQuery$maxDurati !== void 0 ? _tempoQuery$maxDurati : '');

      if (!(0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.isValidGoDuration)(tempoQuery.maxDuration)) {
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
    const ds = await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__.getDatasourceSrv)().get(this.serviceMap.datasourceUid);
    return ds.getTagKeys();
  }

  async getServiceGraphLabelValues(key) {
    const ds = await (0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__.getDatasourceSrv)().get(this.serviceMap.datasourceUid);
    return ds.getTagValues({
      key
    });
  } // Get linked loki search datasource. Fall back to legacy loki search/trace to logs config


}

function queryServiceMapPrometheus(request, datasourceUid) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.from)((0,app_features_plugins_datasource_srv__WEBPACK_IMPORTED_MODULE_4__.getDatasourceSrv)().get(datasourceUid)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(ds => {
    return ds.query(request);
  }));
}

function serviceMapQuery(request, datasourceUid) {
  return queryServiceMapPrometheus(makePromServiceMapRequest(request), datasourceUid).pipe( // Just collect all the responses first before processing into node graph data
  (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.toArray)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(responses => {
    const errorRes = responses.find(res => !!res.error);

    if (errorRes) {
      throw new Error(errorRes.error.message);
    }

    const {
      nodes,
      edges
    } = (0,_graphTransform__WEBPACK_IMPORTED_MODULE_5__.mapPromMetricsToServiceMap)(responses, request.range);
    nodes.fields[0].config = {
      links: [makePromLink('Request rate', `rate(${_graphTransform__WEBPACK_IMPORTED_MODULE_5__.totalsMetric}{server="\${__data.fields.id}"}[$__rate_interval])`, datasourceUid), makePromLink('Request histogram', `histogram_quantile(0.9, sum(rate(${_graphTransform__WEBPACK_IMPORTED_MODULE_5__.histogramMetric}{server="\${__data.fields.id}"}[$__rate_interval])) by (le, client, server))`, datasourceUid), makePromLink('Failed request rate', `rate(${_graphTransform__WEBPACK_IMPORTED_MODULE_5__.failedMetric}{server="\${__data.fields.id}"}[$__rate_interval])`, datasourceUid)]
    };
    return {
      data: [nodes, edges],
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.LoadingState.Done
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
    targets: _graphTransform__WEBPACK_IMPORTED_MODULE_5__.serviceMapMetrics.map(metric => {
      return {
        refId: metric,
        // options.targets[0] is not correct here, but not sure what should happen if you have multiple queries for
        // service map at the same time anyway
        expr: `delta(${metric}${options.targets[0].serviceMapQuery || ''}[$__range])`,
        instant: true
      };
    })
  });
}

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/graphTransform.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGraphFrames": () => (/* binding */ createGraphFrames),
/* harmony export */   "failedMetric": () => (/* binding */ failedMetric),
/* harmony export */   "histogramMetric": () => (/* binding */ histogramMetric),
/* harmony export */   "mapPromMetricsToServiceMap": () => (/* binding */ mapPromMetricsToServiceMap),
/* harmony export */   "secondsMetric": () => (/* binding */ secondsMetric),
/* harmony export */   "serviceMapMetrics": () => (/* binding */ serviceMapMetrics),
/* harmony export */   "totalsMetric": () => (/* binding */ totalsMetric)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/utils/tracing.ts");


/**
 * Row in a trace dataFrame
 */

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
  const view = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataFrameView(data);
  const traceDuration = findTraceDuration(view);
  const spanMap = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.makeSpanMap)(index => {
    if (index >= data.length) {
      return undefined;
    }

    const span = view.get(index);
    return {
      span: Object.assign({}, span),
      id: span.spanID,
      parentIds: span.parentSpanID ? [span.parentSpanID] : []
    };
  });

  for (let i = 0; i < view.length; i++) {
    var _row$serviceName;

    const row = view.get(i);
    const ranges = spanMap[row.spanID].children.map(c => {
      const span = spanMap[c].span;
      return [span.startTime, span.startTime + span.duration];
    });
    const childrenDuration = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getNonOverlappingDuration)(ranges);
    const selfDuration = row.duration - childrenDuration;
    const stats = (0,_core_utils_tracing__WEBPACK_IMPORTED_MODULE_1__.getStats)(row.duration, traceDuration, selfDuration);
    nodes.push({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: row.spanID,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: (_row$serviceName = row.serviceName) !== null && _row$serviceName !== void 0 ? _row$serviceName : '',
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.subTitle]: row.operationName,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: stats.main,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: stats.secondary,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.color]: selfDuration / traceDuration
    }); // Sometimes some span can be missing. Don't add edges for those.

    if (row.parentSpanID && spanMap[row.parentSpanID].span) {
      edges.push({
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: row.parentSpanID + '--' + row.spanID,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: row.spanID,
        [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: row.parentSpanID
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


function findTraceDuration(view) {
  let traceEndTime = 0;
  let traceStartTime = Infinity;

  for (let i = 0; i < view.length; i++) {
    const row = view.get(i);

    if (row.startTime < traceStartTime) {
      traceStartTime = row.startTime;
    }

    if (row.startTime + row.duration > traceEndTime) {
      traceEndTime = row.startTime + row.duration;
    }
  }

  return traceEndTime - traceStartTime;
}

const secondsMetric = 'traces_service_graph_request_server_seconds_sum';
const totalsMetric = 'traces_service_graph_request_total';
const failedMetric = 'traces_service_graph_request_failed_total';
const histogramMetric = 'traces_service_graph_request_server_seconds_bucket';
const serviceMapMetrics = [secondsMetric, totalsMetric, failedMetric, histogramMetric // These are used for debugging the tempo collection so probably not useful for service map right now.
// 'traces_service_graph_unpaired_spans_total',
// 'traces_service_graph_untagged_spans_total',
];
/**
 * Map response from multiple prometheus metrics into a node graph data frames with nodes and edges.
 * @param responses
 * @param range
 */

function mapPromMetricsToServiceMap(responses, range) {
  const frames = getMetricFrames(responses); // First just collect data from the metrics into a map with nodes and edges as keys

  const nodesMap = {};
  const edgesMap = {}; // At this moment we don't have any error/success or other counts so we just use these 2

  collectMetricData(frames[totalsMetric], 'total', totalsMetric, nodesMap, edgesMap);
  collectMetricData(frames[secondsMetric], 'seconds', secondsMetric, nodesMap, edgesMap);
  collectMetricData(frames[failedMetric], 'failed', failedMetric, nodesMap, edgesMap);
  return convertToDataFrames(nodesMap, edgesMap, range);
}

function createServiceMapDataFrames() {
  function createDF(name, fields) {
    return new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.MutableDataFrame({
      name,
      fields,
      meta: {
        preferredVisualisationType: 'nodeGraph'
      }
    });
  }

  const nodes = createDF('Nodes', [{
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title,
    config: {
      displayName: 'Service name'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
    config: {
      unit: 'ms/r',
      displayName: 'Average response time'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
    config: {
      unit: 'r/sec',
      displayName: 'Requests per second'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'success',
    config: {
      displayName: 'Success',
      color: {
        fixedColor: 'green',
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed
      }
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'failed',
    config: {
      displayName: 'Failed',
      color: {
        fixedColor: 'red',
        mode: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.FieldColorModeId.Fixed
      }
    }
  }]);
  const edges = createDF('Edges', [{
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat,
    config: {
      unit: 'r',
      displayName: 'Requests'
    }
  }, {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat,
    config: {
      unit: 'ms/r',
      displayName: 'Average response time'
    }
  }]);
  return [nodes, edges];
}
/**
 * Group frames from response based on ref id which is set the same as the metric name so we know which metric is where
 * and also put it into DataFrameView so it's easier to work with.
 * @param responses
 */


function getMetricFrames(responses) {
  return responses[0].data.reduce((acc, frame) => {
    acc[frame.refId] = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataFrameView(frame);
    return acc;
  }, {});
}

/**
 * Collect data from a metric into a map of nodes and edges. The metric data is modeled as counts of metric per edge
 * which is a pair of client-server nodes. This means we convert each row of the metric 1-1 to edges and than we assign
 * the metric also to server. We count the stats for server only as we show requests/transactions that particular node
 * processed not those which it generated and other stats like average transaction time then stem from that.
 * @param frame
 * @param stat
 * @param metric
 * @param nodesMap
 * @param edgesMap
 */
function collectMetricData(frame, stat, metric, nodesMap, edgesMap) {
  if (!frame) {
    return;
  } // The name of the value column is in this format
  // TODO figure out if it can be changed


  const valueName = `Value #${metric}`;

  for (let i = 0; i < frame.length; i++) {
    const row = frame.get(i);
    const edgeId = `${row.client}_${row.server}`;

    if (!edgesMap[edgeId]) {
      // Create edge as it does not exist yet
      edgesMap[edgeId] = {
        target: row.server,
        source: row.client,
        [stat]: row[valueName]
      };
    } else {
      // Add stat to edge
      // We are adding the values if exists but that should not happen in general as there should be single row for
      // an edge.
      edgesMap[edgeId][stat] = (edgesMap[edgeId][stat] || 0) + row[valueName];
    }

    if (!nodesMap[row.server]) {
      // Create node for server
      nodesMap[row.server] = {
        [stat]: row[valueName]
      };
    } else {
      // Add stat to server node. Sum up values if there are multiple edges targeting this server node.
      nodesMap[row.server][stat] = (nodesMap[row.server][stat] || 0) + row[valueName];
    }

    if (!nodesMap[row.client]) {
      // Create the client node but don't add the stat as edge stats are attributed to the server node. This means for
      // example that the number of requests in a node show how many requests it handled not how many it generated.
      nodesMap[row.client] = {
        [stat]: 0
      };
    }
  }
}

function convertToDataFrames(nodesMap, edgesMap, range) {
  const rangeMs = range.to.valueOf() - range.from.valueOf();
  const [nodes, edges] = createServiceMapDataFrames();

  for (const nodeId of Object.keys(nodesMap)) {
    const node = nodesMap[nodeId];
    nodes.add({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: nodeId,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.title]: nodeId,
      // NaN will not be shown in the node graph. This happens for a root client node which did not process
      // any requests itself.
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: node.total ? node.seconds / node.total * 1000 : Number.NaN,
      // Average response time
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: node.total ? Math.round(node.total / (rangeMs / 1000) * 100) / 100 : Number.NaN,
      // Request per second (to 2 decimals)
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'success']: node.total ? (node.total - Math.min(node.failed || 0, node.total)) / node.total : 1,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.arc + 'failed']: node.total ? Math.min(node.failed || 0, node.total) / node.total : 0
    });
  }

  for (const edgeId of Object.keys(edgesMap)) {
    const edge = edgesMap[edgeId];
    edges.add({
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.id]: edgeId,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.source]: edge.source,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.target]: edge.target,
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.mainStat]: edge.total,
      // Requests
      [_grafana_data__WEBPACK_IMPORTED_MODULE_0__.NodeGraphDataFrameFieldNames.secondaryStat]: edge.total ? edge.seconds / edge.total * 1000 : Number.NaN // Average response time

    });
  }

  return {
    nodes,
    edges
  };
}

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/language_provider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TempoLanguageProvider)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class TempoLanguageProvider extends _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LanguageProvider {
  constructor(datasource, initialValues) {
    super();

    _defineProperty(this, "datasource", void 0);

    _defineProperty(this, "tags", void 0);

    _defineProperty(this, "request", async (url, params = {}) => {
      const res = await this.datasource.metadataRequest(url, params);
      return res === null || res === void 0 ? void 0 : res.data;
    });

    _defineProperty(this, "start", async () => {
      await this.fetchTags();
      return [];
    });

    _defineProperty(this, "provideCompletionItems", async ({
      prefix,
      text,
      value,
      labelKey,
      wrapperClasses
    }, context = {
      history: []
    }) => {
      const emptyResult = {
        suggestions: []
      };

      if (!value) {
        return emptyResult;
      }

      const query = value.endText.getText();
      const isValue = query[query.indexOf(text) - 1] === '=';

      if (isValue || text === '=') {
        return this.getTagValueCompletionItems(value);
      }

      return this.getTagsCompletionItems();
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

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _CheatSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/tempo/CheatSheet.tsx");
/* harmony import */ var _QueryEditor_QueryField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/tempo/QueryEditor/QueryField.tsx");
/* harmony import */ var _configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/tempo/configuration/ConfigEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/tempo/datasource.ts");





const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_4__.TempoDatasource).setQueryEditor(_QueryEditor_QueryField__WEBPACK_IMPORTED_MODULE_2__.TempoQueryField).setConfigEditor(_configuration_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__.ConfigEditor).setQueryEditorHelp(_CheatSheet__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/resultTransformer.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTableFrame": () => (/* binding */ createTableFrame),
/* harmony export */   "createTableFrameFromSearch": () => (/* binding */ createTableFrameFromSearch),
/* harmony export */   "transformFromOTLP": () => (/* binding */ transformFromOTLP),
/* harmony export */   "transformToOTLP": () => (/* binding */ transformToOTLP),
/* harmony export */   "transformTrace": () => (/* binding */ transformTrace),
/* harmony export */   "transformTraceList": () => (/* binding */ transformTraceList)
/* harmony export */ });
/* harmony import */ var _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/index.js");
/* harmony import */ var _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js");
/* harmony import */ var date_fns_differenceInHours__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInHours/index.js");
/* harmony import */ var date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _graphTransform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/tempo/graphTransform.ts");






function createTableFrame(logsFrame, datasourceUid, datasourceName, traceRegexs) {
  const tableFrame = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.MutableDataFrame({
    fields: [{
      name: 'Time',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.time,
      config: {
        custom: {
          width: 150
        }
      }
    }, {
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string,
      config: {
        displayNameFromDS: 'Trace ID',
        custom: {
          width: 300
        },
        links: [{
          title: 'Click to open trace ${__value.raw}',
          url: '',
          internal: {
            datasourceUid,
            datasourceName,
            query: {
              query: '${__value.raw}'
            }
          }
        }]
      }
    }, {
      name: 'Message',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string
    }],
    meta: {
      preferredVisualisationType: 'table'
    }
  });

  if (!logsFrame || traceRegexs.length === 0) {
    return tableFrame;
  }

  const timeField = logsFrame.fields.find(f => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.time); // Going through all string fields to look for trace IDs

  for (let field of logsFrame.fields) {
    let hasMatch = false;

    if (field.type === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string) {
      const values = field.values.toArray();

      for (let i = 0; i < values.length; i++) {
        const line = values[i];

        if (line) {
          for (let traceRegex of traceRegexs) {
            const match = line.match(traceRegex);

            if (match) {
              const traceId = match[1];
              const time = timeField ? timeField.values.get(i) : null;
              tableFrame.fields[0].values.add(time);
              tableFrame.fields[1].values.add(traceId);
              tableFrame.fields[2].values.add(line);
              hasMatch = true;
            }
          }
        }
      }
    }

    if (hasMatch) {
      break;
    }
  }

  return tableFrame;
}
function transformTraceList(response, datasourceId, datasourceName, traceRegexs) {
  response.data.forEach((data, index) => {
    const frame = createTableFrame(data, datasourceId, datasourceName, traceRegexs);
    response.data[index] = frame;
  });
  return response;
} // Don't forget to change the backend code when the id representation changed

function transformBase64IDToHexString(base64) {
  const raw = atob(base64);
  let result = '';

  for (let i = 0; i < raw.length; i++) {
    const hex = raw.charCodeAt(i).toString(16);
    result += hex.length === 2 ? hex : '0' + hex;
  }

  return result.length > 16 ? result.slice(16) : result;
}

function transformHexStringToBase64ID(hex) {
  const hexArray = hex.match(/\w{2}/g) || [];
  return btoa(hexArray.map(function (a) {
    return String.fromCharCode(parseInt(a, 16));
  }).join(''));
}

function getAttributeValue(value) {
  if (value.stringValue) {
    return value.stringValue;
  }

  if (value.boolValue !== undefined) {
    return Boolean(value.boolValue);
  }

  if (value.intValue !== undefined) {
    return Number.parseInt(value.intValue, 10);
  }

  if (value.doubleValue) {
    return Number.parseFloat(value.doubleValue);
  }

  if (value.arrayValue) {
    const arrayValue = [];

    for (const arValue of value.arrayValue.values) {
      arrayValue.push(getAttributeValue(arValue));
    }

    return arrayValue;
  }

  return '';
}

function resourceToProcess(resource) {
  const serviceTags = [];
  let serviceName = 'OTLPResourceNoServiceName';

  if (!resource) {
    return {
      serviceName,
      serviceTags
    };
  }

  for (const attribute of resource.attributes) {
    if (attribute.key === _opentelemetry_semantic_conventions__WEBPACK_IMPORTED_MODULE_1__.SemanticResourceAttributes.SERVICE_NAME) {
      serviceName = attribute.value.stringValue || serviceName;
    }

    serviceTags.push({
      key: attribute.key,
      value: getAttributeValue(attribute.value)
    });
  }

  return {
    serviceName,
    serviceTags
  };
}

function getSpanTags(span, instrumentationLibrary) {
  const spanTags = [];

  if (instrumentationLibrary) {
    if (instrumentationLibrary.name) {
      spanTags.push({
        key: 'otel.library.name',
        value: instrumentationLibrary.name
      });
    }

    if (instrumentationLibrary.version) {
      spanTags.push({
        key: 'otel.library.version',
        value: instrumentationLibrary.version
      });
    }
  }

  if (span.attributes) {
    for (const attribute of span.attributes) {
      spanTags.push({
        key: attribute.key,
        value: getAttributeValue(attribute.value)
      });
    }
  }

  if (span.status) {
    if (span.status.code && span.status.code !== _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.SpanStatusCode.UNSET) {
      spanTags.push({
        key: 'otel.status_code',
        value: _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.SpanStatusCode[span.status.code]
      });

      if (span.status.message) {
        spanTags.push({
          key: 'otel.status_description',
          value: span.status.message
        });
      }
    }

    if (span.status.code === _opentelemetry_api__WEBPACK_IMPORTED_MODULE_0__.SpanStatusCode.ERROR) {
      spanTags.push({
        key: 'error',
        value: true
      });
    }
  }

  if (span.kind !== undefined) {
    const split = span.kind.toString().toLowerCase().split('_');
    spanTags.push({
      key: 'span.kind',
      value: split.length ? split[split.length - 1] : span.kind.toString()
    });
  }

  return spanTags;
}

function getReferences(span) {
  const references = [];

  if (span.links) {
    for (const link of span.links) {
      const {
        traceId,
        spanId
      } = link;
      const tags = [];

      if (link.attributes) {
        for (const attribute of link.attributes) {
          tags.push({
            key: attribute.key,
            value: getAttributeValue(attribute.value)
          });
        }
      }

      references.push({
        traceID: traceId,
        spanID: spanId,
        tags
      });
    }
  }

  return references;
}

function getLogs(span) {
  const logs = [];

  if (span.events) {
    for (const event of span.events) {
      const fields = [];

      if (event.attributes) {
        for (const attribute of event.attributes) {
          fields.push({
            key: attribute.key,
            value: getAttributeValue(attribute.value)
          });
        }
      }

      logs.push({
        fields,
        timestamp: event.timeUnixNano / 1000000
      });
    }
  }

  return logs;
}

function transformFromOTLP(traceData, nodeGraph = false) {
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string
    }, {
      name: 'spanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string
    }, {
      name: 'parentSpanID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string
    }, {
      name: 'operationName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string
    }, {
      name: 'serviceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string
    }, {
      name: 'serviceTags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.other
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number
    }, {
      name: 'logs',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.other
    }, {
      name: 'references',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.other
    }, {
      name: 'tags',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.other
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'otlp'
      }
    }
  });

  try {
    for (const data of traceData) {
      const {
        serviceName,
        serviceTags
      } = resourceToProcess(data.resource);

      for (const librarySpan of data.instrumentationLibrarySpans) {
        for (const span of librarySpan.spans) {
          frame.add({
            traceID: transformBase64IDToHexString(span.traceId),
            spanID: transformBase64IDToHexString(span.spanId),
            parentSpanID: transformBase64IDToHexString(span.parentSpanId || ''),
            operationName: span.name || '',
            serviceName,
            serviceTags,
            startTime: span.startTimeUnixNano / 1000000,
            duration: (span.endTimeUnixNano - span.startTimeUnixNano) / 1000000,
            tags: getSpanTags(span, librarySpan.instrumentationLibrary),
            logs: getLogs(span),
            references: getReferences(span)
          });
        }
      }
    }
  } catch (error) {
    console.error(error);
    return {
      error: {
        message: 'JSON is not valid OpenTelemetry format: ' + error
      },
      data: []
    };
  }

  let data = [frame];

  if (nodeGraph) {
    data.push(...(0,_graphTransform__WEBPACK_IMPORTED_MODULE_3__.createGraphFrames)(frame));
  }

  return {
    data
  };
}
/**
 * Transforms trace dataframes to the OpenTelemetry format
 */

function transformToOTLP(data) {
  let result = {
    batches: []
  }; // Lookup object to see which batch contains spans for which services

  let services = {};

  for (let i = 0; i < data.length; i++) {
    const span = data.get(i); // Group spans based on service

    if (!services[span.serviceName]) {
      services[span.serviceName] = result.batches.length;
      result.batches.push({
        resource: {
          attributes: [],
          droppedAttributesCount: 0
        },
        instrumentationLibrarySpans: [{
          spans: []
        }]
      });
    }

    let batchIndex = services[span.serviceName]; // Populate resource attributes from service tags

    if (result.batches[batchIndex].resource.attributes.length === 0) {
      result.batches[batchIndex].resource.attributes = tagsToAttributes(span.serviceTags);
    } // Populate instrumentation library if it exists


    if (!result.batches[batchIndex].instrumentationLibrarySpans[0].instrumentationLibrary) {
      var _span$tags$find;

      let libraryName = (_span$tags$find = span.tags.find(t => t.key === 'otel.library.name')) === null || _span$tags$find === void 0 ? void 0 : _span$tags$find.value;

      if (libraryName) {
        var _span$tags$find2;

        result.batches[batchIndex].instrumentationLibrarySpans[0].instrumentationLibrary = {
          name: libraryName,
          version: (_span$tags$find2 = span.tags.find(t => t.key === 'otel.library.version')) === null || _span$tags$find2 === void 0 ? void 0 : _span$tags$find2.value
        };
      }
    }

    result.batches[batchIndex].instrumentationLibrarySpans[0].spans.push({
      traceId: transformHexStringToBase64ID(span.traceID.padStart(32, '0')),
      spanId: transformHexStringToBase64ID(span.spanID),
      traceState: '',
      parentSpanId: transformHexStringToBase64ID(span.parentSpanID || ''),
      name: span.operationName,
      kind: getOTLPSpanKind(span.tags),
      startTimeUnixNano: span.startTime * 1000000,
      endTimeUnixNano: (span.startTime + span.duration) * 1000000,
      attributes: tagsToAttributes(span.tags),
      droppedAttributesCount: 0,
      droppedEventsCount: 0,
      droppedLinksCount: 0,
      status: getOTLPStatus(span.tags),
      events: getOTLPEvents(span.logs),
      links: getOTLPReferences(span.references)
    });
  }

  return result;
}

function getOTLPSpanKind(tags) {
  var _tags$find;

  let spanKind = undefined;
  const spanKindTagValue = (_tags$find = tags.find(t => t.key === 'span.kind')) === null || _tags$find === void 0 ? void 0 : _tags$find.value;

  switch (spanKindTagValue) {
    case 'server':
      spanKind = 'SPAN_KIND_SERVER';
      break;

    case 'client':
      spanKind = 'SPAN_KIND_CLIENT';
      break;

    case 'producer':
      spanKind = 'SPAN_KIND_PRODUCER';
      break;

    case 'consumer':
      spanKind = 'SPAN_KIND_CONSUMER';
      break;
  }

  return spanKind;
}
/**
 * Converts key-value tags to OTLP attributes and removes tags added by Grafana
 */


function tagsToAttributes(tags) {
  return tags.filter(t => !['span.kind', 'otel.library.name', 'otel.libary.version', 'otel.status_description', 'otel.status_code'].includes(t.key)).reduce((attributes, tag) => [...attributes, {
    key: tag.key,
    value: toAttributeValue(tag)
  }], []);
}
/**
 * Returns the correct OTLP AnyValue based on the value of the tag value
 */


function toAttributeValue(tag) {
  if (typeof tag.value === 'string') {
    return {
      stringValue: tag.value
    };
  } else if (typeof tag.value === 'boolean') {
    return {
      boolValue: tag.value
    };
  } else if (typeof tag.value === 'number') {
    if (tag.value % 1 === 0) {
      return {
        intValue: tag.value
      };
    } else {
      return {
        doubleValue: tag.value
      };
    }
  } else if (typeof tag.value === 'object') {
    if (Array.isArray(tag.value)) {
      const values = [];

      for (const val of tag.value) {
        values.push(toAttributeValue(val));
      }

      return {
        arrayValue: {
          values
        }
      };
    }
  }

  return {
    stringValue: tag.value
  };
}

function getOTLPStatus(tags) {
  let status = undefined;
  const statusCodeTag = tags.find(t => t.key === 'otel.status_code');

  if (statusCodeTag) {
    var _tags$find2;

    status = {
      code: statusCodeTag.value,
      message: (_tags$find2 = tags.find(t => t.key === 'otel_status_description')) === null || _tags$find2 === void 0 ? void 0 : _tags$find2.value
    };
  }

  return status;
}

function getOTLPEvents(logs) {
  if (!logs || !logs.length) {
    return undefined;
  }

  let events = [];

  for (const log of logs) {
    let event = {
      timeUnixNano: log.timestamp * 1000000,
      attributes: [],
      droppedAttributesCount: 0,
      name: ''
    };

    for (const field of log.fields) {
      event.attributes.push({
        key: field.key,
        value: toAttributeValue(field)
      });
    }

    events.push(event);
  }

  return events;
}

function getOTLPReferences(references) {
  if (!references || !references.length) {
    return undefined;
  }

  let links = [];

  for (const ref of references) {
    var _ref$tags;

    let link = {
      traceId: ref.traceID,
      spanId: ref.spanID,
      attributes: [],
      droppedAttributesCount: 0
    };

    if ((_ref$tags = ref.tags) !== null && _ref$tags !== void 0 && _ref$tags.length) {
      for (const tag of ref.tags) {
        var _link$attributes;

        (_link$attributes = link.attributes) === null || _link$attributes === void 0 ? void 0 : _link$attributes.push({
          key: tag.key,
          value: toAttributeValue(tag)
        });
      }
    }

    links.push(link);
  }

  return links;
}

function transformTrace(response, nodeGraph = false) {
  // We need to parse some of the fields which contain stringified json.
  // Seems like we can't just map the values as the frame we got from backend has some default processing
  // and will stringify the json back when we try to set it. So we create a new field and swap it instead.
  const frame = response.data[0];

  if (!frame) {
    return emptyDataQueryResponse;
  }

  try {
    parseJsonFields(frame);
  } catch (error) {
    console.error(error);
    return {
      error: {
        message: 'Unable to parse trace response: ' + error
      },
      data: []
    };
  }

  let data = [...response.data];

  if (nodeGraph) {
    data.push(...(0,_graphTransform__WEBPACK_IMPORTED_MODULE_3__.createGraphFrames)(frame));
  }

  return Object.assign({}, response, {
    data
  });
}
/**
 * Change fields which are json string into JS objects. Modifies the frame in place.
 */

function parseJsonFields(frame) {
  for (const fieldName of ['serviceTags', 'logs', 'tags', 'references']) {
    const field = frame.fields.find(f => f.name === fieldName);

    if (field) {
      const fieldIndex = frame.fields.indexOf(field);
      const values = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.ArrayVector();
      const newField = Object.assign({}, field, {
        values,
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.other
      });

      for (let i = 0; i < field.values.length; i++) {
        const value = field.values.get(i);
        values.set(i, value === '' ? undefined : JSON.parse(value));
      }

      frame.fields[fieldIndex] = newField;
    }
  }
}

function createTableFrameFromSearch(data, instanceSettings) {
  const frame = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.MutableDataFrame({
    fields: [{
      name: 'traceID',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string,
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
              query: '${__value.raw}',
              queryType: 'traceId'
            }
          }
        }]
      }
    }, {
      name: 'traceName',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string,
      config: {
        displayNameFromDS: 'Trace name'
      }
    }, {
      name: 'startTime',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.string,
      config: {
        displayNameFromDS: 'Start time'
      }
    }, {
      name: 'duration',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.number,
      config: {
        displayNameFromDS: 'Duration',
        unit: 'ms'
      }
    }],
    meta: {
      preferredVisualisationType: 'table'
    }
  });

  if (!(data !== null && data !== void 0 && data.length)) {
    return frame;
  } // Show the most recent traces


  const traceData = data.sort((a, b) => parseInt(b === null || b === void 0 ? void 0 : b.startTimeUnixNano, 10) / 1000000 - parseInt(a === null || a === void 0 ? void 0 : a.startTimeUnixNano, 10) / 1000000).map(transformToTraceData);

  for (const trace of traceData) {
    frame.add(trace);
  }

  return frame;
}

function transformToTraceData(data) {
  let traceName = '';

  if (data.rootServiceName) {
    traceName += data.rootServiceName + ' ';
  }

  if (data.rootTraceName) {
    traceName += data.rootTraceName;
  }

  const traceStartTime = parseInt(data.startTimeUnixNano, 10) / 1000000;
  let startTime = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormat)(traceStartTime);

  if (Math.abs((0,date_fns_differenceInHours__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(traceStartTime), Date.now())) <= 1) {
    startTime = (0,date_fns_formatDistance__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(traceStartTime), Date.now(), {
      addSuffix: true,
      includeSeconds: true
    });
  }

  return {
    traceID: data.traceID,
    startTime: startTime,
    duration: data.durationMs,
    traceName
  };
}

const emptyDataQueryResponse = {
  data: [new _grafana_data__WEBPACK_IMPORTED_MODULE_2__.MutableDataFrame({
    fields: [{
      name: 'trace',
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_2__.FieldType.trace,
      values: []
    }],
    meta: {
      preferredVisualisationType: 'trace',
      custom: {
        traceFormat: 'otlp'
      }
    }
  })]
};

/***/ }),

/***/ "./public/app/plugins/datasource/tempo/syntax.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenizer": () => (/* binding */ tokenizer)
/* harmony export */ });
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

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextAPI": () => (/* binding */ ContextAPI)
/* harmony export */ });
/* harmony import */ var _context_NoopContextManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js");
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};



var API_NAME = 'context';
var NOOP_CONTEXT_MANAGER = new _context_NoopContextManager__WEBPACK_IMPORTED_MODULE_0__.NoopContextManager();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 */
var ContextAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function ContextAPI() {
    }
    /** Get the singleton instance of the Context API */
    ContextAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new ContextAPI();
        }
        return this._instance;
    };
    /**
     * Set the current context manager.
     *
     * @returns true if the context manager was successfully registered, else false
     */
    ContextAPI.prototype.setGlobalContextManager = function (contextManager) {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.registerGlobal)(API_NAME, contextManager, _diag__WEBPACK_IMPORTED_MODULE_2__.DiagAPI.instance());
    };
    /**
     * Get the currently active context
     */
    ContextAPI.prototype.active = function () {
        return this._getContextManager().active();
    };
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */
    ContextAPI.prototype.with = function (context, fn, thisArg) {
        var _a;
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return (_a = this._getContextManager()).with.apply(_a, __spreadArray([context, fn, thisArg], args));
    };
    /**
     * Bind a context to a target function or event emitter
     *
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     * @param target function or event emitter to bind
     */
    ContextAPI.prototype.bind = function (context, target) {
        return this._getContextManager().bind(context, target);
    };
    ContextAPI.prototype._getContextManager = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.getGlobal)(API_NAME) || NOOP_CONTEXT_MANAGER;
    };
    /** Disable and remove the global context manager */
    ContextAPI.prototype.disable = function () {
        this._getContextManager().disable();
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_1__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_2__.DiagAPI.instance());
    };
    return ContextAPI;
}());

//# sourceMappingURL=context.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagAPI": () => (/* binding */ DiagAPI)
/* harmony export */ });
/* harmony import */ var _diag_ComponentLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js");
/* harmony import */ var _diag_internal_logLevelLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js");
/* harmony import */ var _diag_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/types.js");
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var API_NAME = 'diag';
/**
 * Singleton object which represents the entry point to the OpenTelemetry internal
 * diagnostic API
 */
var DiagAPI = /** @class */ (function () {
    /**
     * Private internal constructor
     * @private
     */
    function DiagAPI() {
        function _logProxy(funcName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var logger = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.getGlobal)('diag');
                // shortcut if logger not set
                if (!logger)
                    return;
                return logger[funcName].apply(logger, args);
            };
        }
        // Using self local variable for minification purposes as 'this' cannot be minified
        var self = this;
        // DiagAPI specific functions
        self.setLogger = function (logger, logLevel) {
            var _a, _b;
            if (logLevel === void 0) { logLevel = _diag_types__WEBPACK_IMPORTED_MODULE_2__.DiagLogLevel.INFO; }
            if (logger === self) {
                // There isn't much we can do here.
                // Logging to the console might break the user application.
                // Try to log to self. If a logger was previously registered it will receive the log.
                var err = new Error('Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation');
                self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
                return false;
            }
            var oldLogger = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.getGlobal)('diag');
            var newLogger = (0,_diag_internal_logLevelLogger__WEBPACK_IMPORTED_MODULE_1__.createLogLevelDiagLogger)(logLevel, logger);
            // There already is an logger registered. We'll let it know before overwriting it.
            if (oldLogger) {
                var stack = (_b = new Error().stack) !== null && _b !== void 0 ? _b : '<failed to generate stacktrace>';
                oldLogger.warn("Current logger will be overwritten from " + stack);
                newLogger.warn("Current logger will overwrite one already registered from " + stack);
            }
            return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.registerGlobal)('diag', newLogger, self, true);
        };
        self.disable = function () {
            (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_3__.unregisterGlobal)(API_NAME, self);
        };
        self.createComponentLogger = function (options) {
            return new _diag_ComponentLogger__WEBPACK_IMPORTED_MODULE_0__.DiagComponentLogger(options);
        };
        self.verbose = _logProxy('verbose');
        self.debug = _logProxy('debug');
        self.info = _logProxy('info');
        self.warn = _logProxy('warn');
        self.error = _logProxy('error');
    }
    /** Get the singleton instance of the DiagAPI API */
    DiagAPI.instance = function () {
        if (!this._instance) {
            this._instance = new DiagAPI();
        }
        return this._instance;
    };
    return DiagAPI;
}());

//# sourceMappingURL=diag.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/propagation.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropagationAPI": () => (/* binding */ PropagationAPI)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _propagation_NoopTextMapPropagator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js");
/* harmony import */ var _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js");
/* harmony import */ var _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js");
/* harmony import */ var _baggage_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






var API_NAME = 'propagation';
var NOOP_TEXT_MAP_PROPAGATOR = new _propagation_NoopTextMapPropagator__WEBPACK_IMPORTED_MODULE_1__.NoopTextMapPropagator();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Propagation API
 */
var PropagationAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function PropagationAPI() {
        this.createBaggage = _baggage_utils__WEBPACK_IMPORTED_MODULE_4__.createBaggage;
        this.getBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.getBaggage;
        this.setBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.setBaggage;
        this.deleteBaggage = _baggage_context_helpers__WEBPACK_IMPORTED_MODULE_3__.deleteBaggage;
    }
    /** Get the singleton instance of the Propagator API */
    PropagationAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new PropagationAPI();
        }
        return this._instance;
    };
    /**
     * Set the current propagator.
     *
     * @returns true if the propagator was successfully registered, else false
     */
    PropagationAPI.prototype.setGlobalPropagator = function (propagator) {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.registerGlobal)(API_NAME, propagator, _diag__WEBPACK_IMPORTED_MODULE_5__.DiagAPI.instance());
    };
    /**
     * Inject context into a carrier to be propagated inter-process
     *
     * @param context Context carrying tracing data to inject
     * @param carrier carrier to inject context into
     * @param setter Function used to set values on the carrier
     */
    PropagationAPI.prototype.inject = function (context, carrier, setter) {
        if (setter === void 0) { setter = _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_2__.defaultTextMapSetter; }
        return this._getGlobalPropagator().inject(context, carrier, setter);
    };
    /**
     * Extract context from a carrier
     *
     * @param context Context which the newly created context will inherit from
     * @param carrier Carrier to extract context from
     * @param getter Function used to extract keys from a carrier
     */
    PropagationAPI.prototype.extract = function (context, carrier, getter) {
        if (getter === void 0) { getter = _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_2__.defaultTextMapGetter; }
        return this._getGlobalPropagator().extract(context, carrier, getter);
    };
    /**
     * Return a list of all fields which may be used by the propagator.
     */
    PropagationAPI.prototype.fields = function () {
        return this._getGlobalPropagator().fields();
    };
    /** Remove the global propagator */
    PropagationAPI.prototype.disable = function () {
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_5__.DiagAPI.instance());
    };
    PropagationAPI.prototype._getGlobalPropagator = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobal)(API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
    };
    return PropagationAPI;
}());

//# sourceMappingURL=propagation.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/trace.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceAPI": () => (/* binding */ TraceAPI)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/* harmony import */ var _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js");
/* harmony import */ var _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/* harmony import */ var _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var API_NAME = 'trace';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 */
var TraceAPI = /** @class */ (function () {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    function TraceAPI() {
        this._proxyTracerProvider = new _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_1__.ProxyTracerProvider();
        this.wrapSpanContext = _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_2__.wrapSpanContext;
        this.isSpanContextValid = _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_2__.isSpanContextValid;
        this.deleteSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.deleteSpan;
        this.getSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.getSpan;
        this.getSpanContext = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.getSpanContext;
        this.setSpan = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.setSpan;
        this.setSpanContext = _trace_context_utils__WEBPACK_IMPORTED_MODULE_3__.setSpanContext;
    }
    /** Get the singleton instance of the Trace API */
    TraceAPI.getInstance = function () {
        if (!this._instance) {
            this._instance = new TraceAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global tracer.
     *
     * @returns true if the tracer provider was successfully registered, else false
     */
    TraceAPI.prototype.setGlobalTracerProvider = function (provider) {
        var success = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.registerGlobal)(API_NAME, this._proxyTracerProvider, _diag__WEBPACK_IMPORTED_MODULE_4__.DiagAPI.instance());
        if (success) {
            this._proxyTracerProvider.setDelegate(provider);
        }
        return success;
    };
    /**
     * Returns the global tracer provider.
     */
    TraceAPI.prototype.getTracerProvider = function () {
        return (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobal)(API_NAME) || this._proxyTracerProvider;
    };
    /**
     * Returns a tracer from the global tracer provider.
     */
    TraceAPI.prototype.getTracer = function (name, version) {
        return this.getTracerProvider().getTracer(name, version);
    };
    /** Remove the global tracer provider */
    TraceAPI.prototype.disable = function () {
        (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.unregisterGlobal)(API_NAME, _diag__WEBPACK_IMPORTED_MODULE_4__.DiagAPI.instance());
        this._proxyTracerProvider = new _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_1__.ProxyTracerProvider();
    };
    return TraceAPI;
}());

//# sourceMappingURL=trace.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteBaggage": () => (/* binding */ deleteBaggage),
/* harmony export */   "getBaggage": () => (/* binding */ getBaggage),
/* harmony export */   "setBaggage": () => (/* binding */ setBaggage)
/* harmony export */ });
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/context.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Baggage key
 */
var BAGGAGE_KEY = (0,_context_context__WEBPACK_IMPORTED_MODULE_0__.createContextKey)('OpenTelemetry Baggage Key');
/**
 * Retrieve the current baggage from the given context
 *
 * @param {Context} Context that manage all context values
 * @returns {Baggage} Extracted baggage from the context
 */
function getBaggage(context) {
    return context.getValue(BAGGAGE_KEY) || undefined;
}
/**
 * Store a baggage in the given context
 *
 * @param {Context} Context that manage all context values
 * @param {Baggage} baggage that will be set in the actual context
 */
function setBaggage(context, baggage) {
    return context.setValue(BAGGAGE_KEY, baggage);
}
/**
 * Delete the baggage stored in the given context
 *
 * @param {Context} Context that manage all context values
 */
function deleteBaggage(context) {
    return context.deleteValue(BAGGAGE_KEY);
}
//# sourceMappingURL=context-helpers.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaggageImpl": () => (/* binding */ BaggageImpl)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var BaggageImpl = /** @class */ (function () {
    function BaggageImpl(entries) {
        this._entries = entries ? new Map(entries) : new Map();
    }
    BaggageImpl.prototype.getEntry = function (key) {
        var entry = this._entries.get(key);
        if (!entry) {
            return undefined;
        }
        return Object.assign({}, entry);
    };
    BaggageImpl.prototype.getAllEntries = function () {
        return Array.from(this._entries.entries()).map(function (_a) {
            var k = _a[0], v = _a[1];
            return [k, v];
        });
    };
    BaggageImpl.prototype.setEntry = function (key, entry) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntry = function (key) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntries = function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var newBaggage = new BaggageImpl(this._entries);
        for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
            var key = keys_1[_a];
            newBaggage._entries.delete(key);
        }
        return newBaggage;
    };
    BaggageImpl.prototype.clear = function () {
        return new BaggageImpl();
    };
    return BaggageImpl;
}());

//# sourceMappingURL=baggage-impl.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baggageEntryMetadataSymbol": () => (/* binding */ baggageEntryMetadataSymbol)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Symbol used to make BaggageEntryMetadata an opaque type
 */
var baggageEntryMetadataSymbol = Symbol('BaggageEntryMetadata');
//# sourceMappingURL=symbol.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baggageEntryMetadataFromString": () => (/* binding */ baggageEntryMetadataFromString),
/* harmony export */   "createBaggage": () => (/* binding */ createBaggage)
/* harmony export */ });
/* harmony import */ var _api_diag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js");
/* harmony import */ var _internal_baggage_impl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js");
/* harmony import */ var _internal_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var diag = _api_diag__WEBPACK_IMPORTED_MODULE_0__.DiagAPI.instance();
/**
 * Create a new Baggage with optional entries
 *
 * @param entries An array of baggage entries the new baggage should contain
 */
function createBaggage(entries) {
    if (entries === void 0) { entries = {}; }
    return new _internal_baggage_impl__WEBPACK_IMPORTED_MODULE_1__.BaggageImpl(new Map(Object.entries(entries)));
}
/**
 * Create a serializable BaggageEntryMetadata object from a string.
 *
 * @param str string metadata. Format is currently not defined by the spec and has no special meaning.
 *
 */
function baggageEntryMetadataFromString(str) {
    if (typeof str !== 'string') {
        diag.error("Cannot create baggage metadata from unknown type: " + typeof str);
        str = '';
    }
    return {
        __TYPE__: _internal_symbol__WEBPACK_IMPORTED_MODULE_2__.baggageEntryMetadataSymbol,
        toString: function () {
            return str;
        },
    };
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Attributes.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=Attributes.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Exception.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=Exception.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Time.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=Time.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopContextManager": () => (/* binding */ NoopContextManager)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/context.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};

var NoopContextManager = /** @class */ (function () {
    function NoopContextManager() {
    }
    NoopContextManager.prototype.active = function () {
        return _context__WEBPACK_IMPORTED_MODULE_0__.ROOT_CONTEXT;
    };
    NoopContextManager.prototype.with = function (_context, fn, thisArg) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return fn.call.apply(fn, __spreadArray([thisArg], args));
    };
    NoopContextManager.prototype.bind = function (_context, target) {
        return target;
    };
    NoopContextManager.prototype.enable = function () {
        return this;
    };
    NoopContextManager.prototype.disable = function () {
        return this;
    };
    return NoopContextManager;
}());

//# sourceMappingURL=NoopContextManager.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROOT_CONTEXT": () => (/* binding */ ROOT_CONTEXT),
/* harmony export */   "createContextKey": () => (/* binding */ createContextKey)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Get a key to uniquely identify a context value */
function createContextKey(description) {
    // The specification states that for the same input, multiple calls should
    // return different keys. Due to the nature of the JS dependency management
    // system, this creates problems where multiple versions of some package
    // could hold different keys for the same property.
    //
    // Therefore, we use Symbol.for which returns the same key for the same input.
    return Symbol.for(description);
}
var BaseContext = /** @class */ (function () {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */
    function BaseContext(parentContext) {
        // for minification
        var self = this;
        self._currentContext = parentContext ? new Map(parentContext) : new Map();
        self.getValue = function (key) { return self._currentContext.get(key); };
        self.setValue = function (key, value) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = function (key) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
    return BaseContext;
}());
/** The root context is used as the default parent context when there is no active context */
var ROOT_CONTEXT = new BaseContext();
//# sourceMappingURL=context.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagComponentLogger": () => (/* binding */ DiagComponentLogger)
/* harmony export */ });
/* harmony import */ var _internal_global_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Component Logger which is meant to be used as part of any component which
 * will add automatically additional namespace in front of the log message.
 * It will then forward all message to global diag logger
 * @example
 * const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
 * cLogger.debug('test');
 * // @opentelemetry/instrumentation-http test
 */
var DiagComponentLogger = /** @class */ (function () {
    function DiagComponentLogger(props) {
        this._namespace = props.namespace || 'DiagComponentLogger';
    }
    DiagComponentLogger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('debug', this._namespace, args);
    };
    DiagComponentLogger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('error', this._namespace, args);
    };
    DiagComponentLogger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('info', this._namespace, args);
    };
    DiagComponentLogger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('warn', this._namespace, args);
    };
    DiagComponentLogger.prototype.verbose = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logProxy('verbose', this._namespace, args);
    };
    return DiagComponentLogger;
}());

function logProxy(funcName, namespace, args) {
    var logger = (0,_internal_global_utils__WEBPACK_IMPORTED_MODULE_0__.getGlobal)('diag');
    // shortcut if logger not set
    if (!logger) {
        return;
    }
    args.unshift(namespace);
    return logger[funcName].apply(logger, args);
}
//# sourceMappingURL=ComponentLogger.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/consoleLogger.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagConsoleLogger": () => (/* binding */ DiagConsoleLogger)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var consoleMap = [
    { n: 'error', c: 'error' },
    { n: 'warn', c: 'warn' },
    { n: 'info', c: 'info' },
    { n: 'debug', c: 'debug' },
    { n: 'verbose', c: 'trace' },
];
/**
 * A simple Immutable Console based diagnostic logger which will output any messages to the Console.
 * If you want to limit the amount of logging to a specific level or lower use the
 * {@link createLogLevelDiagLogger}
 */
var DiagConsoleLogger = /** @class */ (function () {
    function DiagConsoleLogger() {
        function _consoleFunc(funcName) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (console) {
                    // Some environments only expose the console when the F12 developer console is open
                    // eslint-disable-next-line no-console
                    var theFunc = console[funcName];
                    if (typeof theFunc !== 'function') {
                        // Not all environments support all functions
                        // eslint-disable-next-line no-console
                        theFunc = console.log;
                    }
                    // One last final check
                    if (typeof theFunc === 'function') {
                        return theFunc.apply(console, args);
                    }
                }
            };
        }
        for (var i = 0; i < consoleMap.length; i++) {
            this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
        }
    }
    return DiagConsoleLogger;
}());

//# sourceMappingURL=consoleLogger.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagConsoleLogger": () => (/* reexport safe */ _consoleLogger__WEBPACK_IMPORTED_MODULE_0__.DiagConsoleLogger),
/* harmony export */   "DiagLogLevel": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.DiagLogLevel)
/* harmony export */ });
/* harmony import */ var _consoleLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/consoleLogger.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/types.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLogLevelDiagLogger": () => (/* binding */ createLogLevelDiagLogger)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/types.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.NONE) {
        maxLevel = _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.NONE;
    }
    else if (maxLevel > _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ALL) {
        maxLevel = _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ALL;
    }
    // In case the logger is null or undefined
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
        var theFunc = logger[funcName];
        if (typeof theFunc === 'function' && maxLevel >= theLevel) {
            return theFunc.bind(logger);
        }
        return function () { };
    }
    return {
        error: _filterFunc('error', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.ERROR),
        warn: _filterFunc('warn', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.WARN),
        info: _filterFunc('info', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.INFO),
        debug: _filterFunc('debug', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.DEBUG),
        verbose: _filterFunc('verbose', _types__WEBPACK_IMPORTED_MODULE_0__.DiagLogLevel.VERBOSE),
    };
}
//# sourceMappingURL=logLevelLogger.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/types.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagLogLevel": () => (/* binding */ DiagLogLevel)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Defines the available internal logging levels for the diagnostic logger, the numeric values
 * of the levels are defined to match the original values from the initial LogLevel to avoid
 * compatibility/migration issues for any implementation that assume the numeric ordering.
 */
var DiagLogLevel;
(function (DiagLogLevel) {
    /** Diagnostic Logging level setting to disable all logging (except and forced logs) */
    DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
    /** Identifies an error scenario */
    DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
    /** Identifies a warning scenario */
    DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
    /** General informational log message */
    DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
    /** General debug log message */
    DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
    /**
     * Detailed trace level logging should only be used for development, should only be set
     * in a development environment.
     */
    DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
    /** Used to set the logging level to include all logging */
    DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiagConsoleLogger": () => (/* reexport safe */ _diag__WEBPACK_IMPORTED_MODULE_5__.DiagConsoleLogger),
/* harmony export */   "DiagLogLevel": () => (/* reexport safe */ _diag__WEBPACK_IMPORTED_MODULE_5__.DiagLogLevel),
/* harmony export */   "INVALID_SPANID": () => (/* reexport safe */ _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_25__.INVALID_SPANID),
/* harmony export */   "INVALID_SPAN_CONTEXT": () => (/* reexport safe */ _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_25__.INVALID_SPAN_CONTEXT),
/* harmony export */   "INVALID_TRACEID": () => (/* reexport safe */ _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_25__.INVALID_TRACEID),
/* harmony export */   "ProxyTracer": () => (/* reexport safe */ _trace_ProxyTracer__WEBPACK_IMPORTED_MODULE_9__.ProxyTracer),
/* harmony export */   "ProxyTracerProvider": () => (/* reexport safe */ _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_10__.ProxyTracerProvider),
/* harmony export */   "ROOT_CONTEXT": () => (/* reexport safe */ _context_context__WEBPACK_IMPORTED_MODULE_26__.ROOT_CONTEXT),
/* harmony export */   "SamplingDecision": () => (/* reexport safe */ _trace_SamplingResult__WEBPACK_IMPORTED_MODULE_12__.SamplingDecision),
/* harmony export */   "SpanKind": () => (/* reexport safe */ _trace_span_kind__WEBPACK_IMPORTED_MODULE_14__.SpanKind),
/* harmony export */   "SpanStatusCode": () => (/* reexport safe */ _trace_status__WEBPACK_IMPORTED_MODULE_17__.SpanStatusCode),
/* harmony export */   "TraceFlags": () => (/* reexport safe */ _trace_trace_flags__WEBPACK_IMPORTED_MODULE_18__.TraceFlags),
/* harmony export */   "baggageEntryMetadataFromString": () => (/* reexport safe */ _baggage_utils__WEBPACK_IMPORTED_MODULE_1__.baggageEntryMetadataFromString),
/* harmony export */   "context": () => (/* binding */ context),
/* harmony export */   "createContextKey": () => (/* reexport safe */ _context_context__WEBPACK_IMPORTED_MODULE_26__.createContextKey),
/* harmony export */   "createTraceState": () => (/* reexport safe */ _trace_internal_utils__WEBPACK_IMPORTED_MODULE_20__.createTraceState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defaultTextMapGetter": () => (/* reexport safe */ _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_6__.defaultTextMapGetter),
/* harmony export */   "defaultTextMapSetter": () => (/* reexport safe */ _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_6__.defaultTextMapSetter),
/* harmony export */   "diag": () => (/* binding */ diag),
/* harmony export */   "isSpanContextValid": () => (/* reexport safe */ _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_24__.isSpanContextValid),
/* harmony export */   "isValidSpanId": () => (/* reexport safe */ _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_24__.isValidSpanId),
/* harmony export */   "isValidTraceId": () => (/* reexport safe */ _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_24__.isValidTraceId),
/* harmony export */   "propagation": () => (/* binding */ propagation),
/* harmony export */   "trace": () => (/* binding */ trace)
/* harmony export */ });
/* harmony import */ var _baggage_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/types.js");
/* harmony import */ var _baggage_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/baggage/utils.js");
/* harmony import */ var _common_Exception__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Exception.js");
/* harmony import */ var _common_Time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Time.js");
/* harmony import */ var _common_Attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/common/Attributes.js");
/* harmony import */ var _diag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/diag/index.js");
/* harmony import */ var _propagation_TextMapPropagator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js");
/* harmony import */ var _trace_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/attributes.js");
/* harmony import */ var _trace_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/link.js");
/* harmony import */ var _trace_ProxyTracer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js");
/* harmony import */ var _trace_ProxyTracerProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js");
/* harmony import */ var _trace_Sampler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/Sampler.js");
/* harmony import */ var _trace_SamplingResult__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js");
/* harmony import */ var _trace_span_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span_context.js");
/* harmony import */ var _trace_span_kind__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span_kind.js");
/* harmony import */ var _trace_span__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span.js");
/* harmony import */ var _trace_SpanOptions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/SpanOptions.js");
/* harmony import */ var _trace_status__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/status.js");
/* harmony import */ var _trace_trace_flags__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js");
/* harmony import */ var _trace_trace_state__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/trace_state.js");
/* harmony import */ var _trace_internal_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/utils.js");
/* harmony import */ var _trace_tracer_provider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer_provider.js");
/* harmony import */ var _trace_tracer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer.js");
/* harmony import */ var _trace_tracer_options__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer_options.js");
/* harmony import */ var _trace_spancontext_utils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/* harmony import */ var _trace_invalid_span_constants__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js");
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/context.js");
/* harmony import */ var _context_types__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/types.js");
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/context.js");
/* harmony import */ var _api_trace__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/trace.js");
/* harmony import */ var _api_propagation__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/propagation.js");
/* harmony import */ var _api_diag__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/diag.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





























/** Entrypoint for context API */
var context = _api_context__WEBPACK_IMPORTED_MODULE_28__.ContextAPI.getInstance();

/** Entrypoint for trace API */
var trace = _api_trace__WEBPACK_IMPORTED_MODULE_29__.TraceAPI.getInstance();

/** Entrypoint for propagation API */
var propagation = _api_propagation__WEBPACK_IMPORTED_MODULE_30__.PropagationAPI.getInstance();

/**
 * Entrypoint for Diag API.
 * Defines Diagnostic handler used for internal diagnostic logging operations.
 * The default provides a Noop DiagLogger implementation which may be changed via the
 * diag.setLogger(logger: DiagLogger) function.
 */
var diag = _api_diag__WEBPACK_IMPORTED_MODULE_31__.DiagAPI.instance();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    trace: trace,
    context: context,
    propagation: propagation,
    diag: diag,
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGlobal": () => (/* binding */ getGlobal),
/* harmony export */   "registerGlobal": () => (/* binding */ registerGlobal),
/* harmony export */   "unregisterGlobal": () => (/* binding */ unregisterGlobal)
/* harmony export */ });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/platform/browser/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/version.js");
/* harmony import */ var _semver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/semver.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var major = _version__WEBPACK_IMPORTED_MODULE_1__.VERSION.split('.')[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
var _global = _platform__WEBPACK_IMPORTED_MODULE_0__._globalThis;
function registerGlobal(type, instance, diag, allowOverride) {
    var _a;
    if (allowOverride === void 0) { allowOverride = false; }
    var api = (_global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: _version__WEBPACK_IMPORTED_MODULE_1__.VERSION,
    });
    if (!allowOverride && api[type]) {
        // already registered an API of this type
        var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== _version__WEBPACK_IMPORTED_MODULE_1__.VERSION) {
        // All registered APIs must be of the same version exactly
        var err = new Error('@opentelemetry/api: All API registration versions must match');
        diag.error(err.stack || err.message);
        return false;
    }
    api[type] = instance;
    diag.debug("@opentelemetry/api: Registered a global for " + type + " v" + _version__WEBPACK_IMPORTED_MODULE_1__.VERSION + ".");
    return true;
}
function getGlobal(type) {
    var _a, _b;
    var globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !(0,_semver__WEBPACK_IMPORTED_MODULE_2__.isCompatible)(globalVersion)) {
        return;
    }
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
    diag.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + _version__WEBPACK_IMPORTED_MODULE_1__.VERSION + ".");
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) {
        delete api[type];
    }
}
//# sourceMappingURL=global-utils.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/internal/semver.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_makeCompatibilityCheck": () => (/* binding */ _makeCompatibilityCheck),
/* harmony export */   "isCompatible": () => (/* binding */ isCompatible)
/* harmony export */ });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/version.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
/**
 * Create a function to test an API version to see if it is compatible with the provided ownVersion.
 *
 * The returned function has the following semantics:
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param ownVersion version which should be checked against
 */
function _makeCompatibilityCheck(ownVersion) {
    var acceptedVersions = new Set([ownVersion]);
    var rejectedVersions = new Set();
    var myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) {
        // we cannot guarantee compatibility so we always return noop
        return function () { return false; };
    }
    var ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
        prerelease: myVersionMatch[4],
    };
    // if ownVersion has a prerelease tag, versions must match exactly
    if (ownVersionParsed.prerelease != null) {
        return function isExactmatch(globalVersion) {
            return globalVersion === ownVersion;
        };
    }
    function _reject(v) {
        rejectedVersions.add(v);
        return false;
    }
    function _accept(v) {
        acceptedVersions.add(v);
        return true;
    }
    return function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) {
            return true;
        }
        if (rejectedVersions.has(globalVersion)) {
            return false;
        }
        var globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) {
            // cannot parse other version
            // we cannot guarantee compatibility so we always noop
            return _reject(globalVersion);
        }
        var globalVersionParsed = {
            major: +globalVersionMatch[1],
            minor: +globalVersionMatch[2],
            patch: +globalVersionMatch[3],
            prerelease: globalVersionMatch[4],
        };
        // if globalVersion has a prerelease tag, versions must match exactly
        if (globalVersionParsed.prerelease != null) {
            return _reject(globalVersion);
        }
        // major versions must match
        if (ownVersionParsed.major !== globalVersionParsed.major) {
            return _reject(globalVersion);
        }
        if (ownVersionParsed.major === 0) {
            if (ownVersionParsed.minor === globalVersionParsed.minor &&
                ownVersionParsed.patch <= globalVersionParsed.patch) {
                return _accept(globalVersion);
            }
            return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) {
            return _accept(globalVersion);
        }
        return _reject(globalVersion);
    };
}
/**
 * Test an API version to see if it is compatible with this API.
 *
 * - Exact match is always compatible
 * - Major versions must match exactly
 *    - 1.x package cannot use global 2.x package
 *    - 2.x package cannot use global 1.x package
 * - The minor version of the API module requesting access to the global API must be less than or equal to the minor version of this API
 *    - 1.3 package may use 1.4 global because the later global contains all functions 1.3 expects
 *    - 1.4 package may NOT use 1.3 global because it may try to call functions which don't exist on 1.3
 * - If the major version is 0, the minor version is treated as the major and the patch is treated as the minor
 * - Patch and build tag differences are not considered at this time
 *
 * @param version version of the API requesting an instance of the global API
 */
var isCompatible = _makeCompatibilityCheck(_version__WEBPACK_IMPORTED_MODULE_0__.VERSION);
//# sourceMappingURL=semver.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_globalThis": () => (/* binding */ _globalThis)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Updates to this file should also be replicated to @opentelemetry/api-metrics and
// @opentelemetry/core too.
/**
 * - globalThis (New standard)
 * - self (Will return the current window instance for supported browsers)
 * - window (fallback for older browser implementations)
 * - global (NodeJS implementation)
 * - <object> (When all else fails)
 */
/** only globals that common to node and browsers are allowed */
// eslint-disable-next-line node/no-unsupported-features/es-builtins, no-undef
var _globalThis = typeof globalThis === 'object' ? globalThis :
    typeof self === 'object' ? self :
        typeof window === 'object' ? window :
            typeof __webpack_require__.g === 'object' ? __webpack_require__.g :
                {};
//# sourceMappingURL=globalThis.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/platform/browser/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_globalThis": () => (/* reexport safe */ _globalThis__WEBPACK_IMPORTED_MODULE_0__._globalThis)
/* harmony export */ });
/* harmony import */ var _globalThis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/platform/browser/globalThis.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopTextMapPropagator": () => (/* binding */ NoopTextMapPropagator)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * No-op implementations of {@link TextMapPropagator}.
 */
var NoopTextMapPropagator = /** @class */ (function () {
    function NoopTextMapPropagator() {
    }
    /** Noop inject function does nothing */
    NoopTextMapPropagator.prototype.inject = function (_context, _carrier) { };
    /** Noop extract function does nothing and returns the input context */
    NoopTextMapPropagator.prototype.extract = function (context, _carrier) {
        return context;
    };
    NoopTextMapPropagator.prototype.fields = function () {
        return [];
    };
    return NoopTextMapPropagator;
}());

//# sourceMappingURL=NoopTextMapPropagator.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultTextMapGetter": () => (/* binding */ defaultTextMapGetter),
/* harmony export */   "defaultTextMapSetter": () => (/* binding */ defaultTextMapSetter)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var defaultTextMapGetter = {
    get: function (carrier, key) {
        if (carrier == null) {
            return undefined;
        }
        return carrier[key];
    },
    keys: function (carrier) {
        if (carrier == null) {
            return [];
        }
        return Object.keys(carrier);
    },
};
var defaultTextMapSetter = {
    set: function (carrier, key, value) {
        if (carrier == null) {
            return;
        }
        carrier[key] = value;
    },
};
//# sourceMappingURL=TextMapPropagator.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonRecordingSpan": () => (/* binding */ NonRecordingSpan)
/* harmony export */ });
/* harmony import */ var _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The NonRecordingSpan is the default {@link Span} that is used when no Span
 * implementation is available. All operations are no-op including context
 * propagation.
 */
var NonRecordingSpan = /** @class */ (function () {
    function NonRecordingSpan(_spanContext) {
        if (_spanContext === void 0) { _spanContext = _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__.INVALID_SPAN_CONTEXT; }
        this._spanContext = _spanContext;
    }
    // Returns a SpanContext.
    NonRecordingSpan.prototype.spanContext = function () {
        return this._spanContext;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttribute = function (_key, _value) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttributes = function (_attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.addEvent = function (_name, _attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setStatus = function (_status) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.updateName = function (_name) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.end = function (_endTime) { };
    // isRecording always returns false for NonRecordingSpan.
    NonRecordingSpan.prototype.isRecording = function () {
        return false;
    };
    // By default does nothing
    NonRecordingSpan.prototype.recordException = function (_exception, _time) { };
    return NonRecordingSpan;
}());

//# sourceMappingURL=NonRecordingSpan.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopTracer": () => (/* binding */ NoopTracer)
/* harmony export */ });
/* harmony import */ var _api_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/api/context.js");
/* harmony import */ var _trace_context_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js");
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js");
/* harmony import */ var _spancontext_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




var context = _api_context__WEBPACK_IMPORTED_MODULE_0__.ContextAPI.getInstance();
/**
 * No-op implementations of {@link Tracer}.
 */
var NoopTracer = /** @class */ (function () {
    function NoopTracer() {
    }
    // startSpan starts a noop span.
    NoopTracer.prototype.startSpan = function (name, options, context) {
        var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__.NonRecordingSpan();
        }
        var parentFromContext = context && (0,_trace_context_utils__WEBPACK_IMPORTED_MODULE_1__.getSpanContext)(context);
        if (isSpanContext(parentFromContext) &&
            (0,_spancontext_utils__WEBPACK_IMPORTED_MODULE_3__.isSpanContextValid)(parentFromContext)) {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__.NonRecordingSpan(parentFromContext);
        }
        else {
            return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_2__.NonRecordingSpan();
        }
    };
    NoopTracer.prototype.startActiveSpan = function (name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) {
            return;
        }
        else if (arguments.length === 2) {
            fn = arg2;
        }
        else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        }
        else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : context.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = (0,_trace_context_utils__WEBPACK_IMPORTED_MODULE_1__.setSpan)(parentContext, span);
        return context.with(contextWithSpanSet, fn, undefined, span);
    };
    return NoopTracer;
}());

function isSpanContext(spanContext) {
    return (typeof spanContext === 'object' &&
        typeof spanContext['spanId'] === 'string' &&
        typeof spanContext['traceId'] === 'string' &&
        typeof spanContext['traceFlags'] === 'number');
}
//# sourceMappingURL=NoopTracer.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopTracerProvider": () => (/* binding */ NoopTracerProvider)
/* harmony export */ });
/* harmony import */ var _NoopTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */
var NoopTracerProvider = /** @class */ (function () {
    function NoopTracerProvider() {
    }
    NoopTracerProvider.prototype.getTracer = function (_name, _version, _options) {
        return new _NoopTracer__WEBPACK_IMPORTED_MODULE_0__.NoopTracer();
    };
    return NoopTracerProvider;
}());

//# sourceMappingURL=NoopTracerProvider.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProxyTracer": () => (/* binding */ ProxyTracer)
/* harmony export */ });
/* harmony import */ var _NoopTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var NOOP_TRACER = new _NoopTracer__WEBPACK_IMPORTED_MODULE_0__.NoopTracer();
/**
 * Proxy tracer provided by the proxy tracer provider
 */
var ProxyTracer = /** @class */ (function () {
    function ProxyTracer(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    ProxyTracer.prototype.startSpan = function (name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    };
    ProxyTracer.prototype.startActiveSpan = function (_name, _options, _context, _fn) {
        var tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */
    ProxyTracer.prototype._getTracer = function () {
        if (this._delegate) {
            return this._delegate;
        }
        var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer) {
            return NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
    };
    return ProxyTracer;
}());

//# sourceMappingURL=ProxyTracer.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProxyTracerProvider": () => (/* binding */ ProxyTracerProvider)
/* harmony export */ });
/* harmony import */ var _ProxyTracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js");
/* harmony import */ var _NoopTracerProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var NOOP_TRACER_PROVIDER = new _NoopTracerProvider__WEBPACK_IMPORTED_MODULE_1__.NoopTracerProvider();
/**
 * Tracer provider which provides {@link ProxyTracer}s.
 *
 * Before a delegate is set, tracers provided are NoOp.
 *   When a delegate is set, traces are provided from the delegate.
 *   When a delegate is set after tracers have already been provided,
 *   all tracers already provided will use the provided delegate implementation.
 */
var ProxyTracerProvider = /** @class */ (function () {
    function ProxyTracerProvider() {
    }
    /**
     * Get a {@link ProxyTracer}
     */
    ProxyTracerProvider.prototype.getTracer = function (name, version, options) {
        var _a;
        return ((_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new _ProxyTracer__WEBPACK_IMPORTED_MODULE_0__.ProxyTracer(this, name, version, options));
    };
    ProxyTracerProvider.prototype.getDelegate = function () {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
    };
    /**
     * Set the delegate tracer provider
     */
    ProxyTracerProvider.prototype.setDelegate = function (delegate) {
        this._delegate = delegate;
    };
    ProxyTracerProvider.prototype.getDelegateTracer = function (name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
    };
    return ProxyTracerProvider;
}());

//# sourceMappingURL=ProxyTracerProvider.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/Sampler.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=Sampler.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplingDecision": () => (/* binding */ SamplingDecision)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 */
var SamplingDecision;
(function (SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */
    SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */
    SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */
    SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {}));
//# sourceMappingURL=SamplingResult.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/SpanOptions.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=SpanOptions.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/attributes.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=attributes.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteSpan": () => (/* binding */ deleteSpan),
/* harmony export */   "getSpan": () => (/* binding */ getSpan),
/* harmony export */   "getSpanContext": () => (/* binding */ getSpanContext),
/* harmony export */   "setSpan": () => (/* binding */ setSpan),
/* harmony export */   "setSpanContext": () => (/* binding */ setSpanContext)
/* harmony export */ });
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/context/context.js");
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * span key
 */
var SPAN_KEY = (0,_context_context__WEBPACK_IMPORTED_MODULE_0__.createContextKey)('OpenTelemetry Context Key SPAN');
/**
 * Return the span if one exists
 *
 * @param context context to get span from
 */
function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
/**
 * Set the span on a context
 *
 * @param context context to use as parent
 * @param span span to set active
 */
function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
/**
 * Remove current span stored in the context
 *
 * @param context context to delete span from
 */
function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
/**
 * Wrap span context in a NoopSpan and set as span in a new
 * context
 *
 * @param context context to set active span on
 * @param spanContext span context to be wrapped
 */
function setSpanContext(context, spanContext) {
    return setSpan(context, new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__.NonRecordingSpan(spanContext));
}
/**
 * Get the span context of the span if it exists.
 *
 * @param context context to get values from
 */
function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
}
//# sourceMappingURL=context-utils.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-impl.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceStateImpl": () => (/* binding */ TraceStateImpl)
/* harmony export */ });
/* harmony import */ var _tracestate_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-validators.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var MAX_TRACE_STATE_ITEMS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LIST_MEMBERS_SEPARATOR = ',';
var LIST_MEMBER_KEY_VALUE_SPLITTER = '=';
/**
 * TraceState must be a class and not a simple object type because of the spec
 * requirement (https://www.w3.org/TR/trace-context/#tracestate-field).
 *
 * Here is the list of allowed mutations:
 * - New key-value pair should be added into the beginning of the list
 * - The value of any key can be updated. Modified keys MUST be moved to the
 * beginning of the list.
 */
var TraceStateImpl = /** @class */ (function () {
    function TraceStateImpl(rawTraceState) {
        this._internalState = new Map();
        if (rawTraceState)
            this._parse(rawTraceState);
    }
    TraceStateImpl.prototype.set = function (key, value) {
        // TODO: Benchmark the different approaches(map vs list) and
        // use the faster one.
        var traceState = this._clone();
        if (traceState._internalState.has(key)) {
            traceState._internalState.delete(key);
        }
        traceState._internalState.set(key, value);
        return traceState;
    };
    TraceStateImpl.prototype.unset = function (key) {
        var traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
    };
    TraceStateImpl.prototype.get = function (key) {
        return this._internalState.get(key);
    };
    TraceStateImpl.prototype.serialize = function () {
        var _this = this;
        return this._keys()
            .reduce(function (agg, key) {
            agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + _this.get(key));
            return agg;
        }, [])
            .join(LIST_MEMBERS_SEPARATOR);
    };
    TraceStateImpl.prototype._parse = function (rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN)
            return;
        this._internalState = rawTraceState
            .split(LIST_MEMBERS_SEPARATOR)
            .reverse() // Store in reverse so new keys (.set(...)) will be placed at the beginning
            .reduce(function (agg, part) {
            var listMember = part.trim(); // Optional Whitespace (OWS) handling
            var i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (i !== -1) {
                var key = listMember.slice(0, i);
                var value = listMember.slice(i + 1, part.length);
                if ((0,_tracestate_validators__WEBPACK_IMPORTED_MODULE_0__.validateKey)(key) && (0,_tracestate_validators__WEBPACK_IMPORTED_MODULE_0__.validateValue)(value)) {
                    agg.set(key, value);
                }
                else {
                    // TODO: Consider to add warning log
                }
            }
            return agg;
        }, new Map());
        // Because of the reverse() requirement, trunc must be done after map is created
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
            this._internalState = new Map(Array.from(this._internalState.entries())
                .reverse() // Use reverse same as original tracestate parse chain
                .slice(0, MAX_TRACE_STATE_ITEMS));
        }
    };
    TraceStateImpl.prototype._keys = function () {
        return Array.from(this._internalState.keys()).reverse();
    };
    TraceStateImpl.prototype._clone = function () {
        var traceState = new TraceStateImpl();
        traceState._internalState = new Map(this._internalState);
        return traceState;
    };
    return TraceStateImpl;
}());

//# sourceMappingURL=tracestate-impl.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-validators.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateKey": () => (/* binding */ validateKey),
/* harmony export */   "validateValue": () => (/* binding */ validateValue)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var VALID_KEY_CHAR_RANGE = '[_0-9a-z-*/]';
var VALID_KEY = "[a-z]" + VALID_KEY_CHAR_RANGE + "{0,255}";
var VALID_VENDOR_KEY = "[a-z0-9]" + VALID_KEY_CHAR_RANGE + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE + "{0,13}";
var VALID_KEY_REGEX = new RegExp("^(?:" + VALID_KEY + "|" + VALID_VENDOR_KEY + ")$");
var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
/**
 * Key is opaque string up to 256 characters printable. It MUST begin with a
 * lowercase letter, and can only contain lowercase letters a-z, digits 0-9,
 * underscores _, dashes -, asterisks *, and forward slashes /.
 * For multi-tenant vendor scenarios, an at sign (@) can be used to prefix the
 * vendor name. Vendors SHOULD set the tenant ID at the beginning of the key.
 * see https://www.w3.org/TR/trace-context/#key
 */
function validateKey(key) {
    return VALID_KEY_REGEX.test(key);
}
/**
 * Value is opaque string up to 256 characters printable ASCII RFC0020
 * characters (i.e., the range 0x20 to 0x7E) except comma , and =.
 */
function validateValue(value) {
    return (VALID_VALUE_BASE_REGEX.test(value) &&
        !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value));
}
//# sourceMappingURL=tracestate-validators.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTraceState": () => (/* binding */ createTraceState)
/* harmony export */ });
/* harmony import */ var _tracestate_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-impl.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function createTraceState(rawTraceState) {
    return new _tracestate_impl__WEBPACK_IMPORTED_MODULE_0__.TraceStateImpl(rawTraceState);
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INVALID_SPANID": () => (/* binding */ INVALID_SPANID),
/* harmony export */   "INVALID_SPAN_CONTEXT": () => (/* binding */ INVALID_SPAN_CONTEXT),
/* harmony export */   "INVALID_TRACEID": () => (/* binding */ INVALID_TRACEID)
/* harmony export */ });
/* harmony import */ var _trace_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var INVALID_SPANID = '0000000000000000';
var INVALID_TRACEID = '00000000000000000000000000000000';
var INVALID_SPAN_CONTEXT = {
    traceId: INVALID_TRACEID,
    spanId: INVALID_SPANID,
    traceFlags: _trace_flags__WEBPACK_IMPORTED_MODULE_0__.TraceFlags.NONE,
};
//# sourceMappingURL=invalid-span-constants.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/link.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=span.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span_context.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=span_context.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/span_kind.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpanKind": () => (/* binding */ SpanKind)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var SpanKind;
(function (SpanKind) {
    /** Default value. Indicates that the span is used internally. */
    SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */
    SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */
    SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */
    SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {}));
//# sourceMappingURL=span_kind.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSpanContextValid": () => (/* binding */ isSpanContextValid),
/* harmony export */   "isValidSpanId": () => (/* binding */ isValidSpanId),
/* harmony export */   "isValidTraceId": () => (/* binding */ isValidTraceId),
/* harmony export */   "wrapSpanContext": () => (/* binding */ wrapSpanContext)
/* harmony export */ });
/* harmony import */ var _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js");
/* harmony import */ var _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__.INVALID_TRACEID;
}
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== _invalid_span_constants__WEBPACK_IMPORTED_MODULE_0__.INVALID_SPANID;
}
/**
 * Returns true if this {@link SpanContext} is valid.
 * @return true if this {@link SpanContext} is valid.
 */
function isSpanContextValid(spanContext) {
    return (isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId));
}
/**
 * Wrap the given {@link SpanContext} in a new non-recording {@link Span}
 *
 * @param spanContext span context to be wrapped
 * @returns a new non-recording {@link Span} with the provided context
 */
function wrapSpanContext(spanContext) {
    return new _NonRecordingSpan__WEBPACK_IMPORTED_MODULE_1__.NonRecordingSpan(spanContext);
}
//# sourceMappingURL=spancontext-utils.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/status.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpanStatusCode": () => (/* binding */ SpanStatusCode)
/* harmony export */ });
/**
 * An enumeration of status codes.
 */
var SpanStatusCode;
(function (SpanStatusCode) {
    /**
     * The default status.
     */
    SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */
    SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */
    SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {}));
//# sourceMappingURL=status.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TraceFlags": () => (/* binding */ TraceFlags)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TraceFlags;
(function (TraceFlags) {
    /** Represents no flag set. */
    TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */
    TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {}));
//# sourceMappingURL=trace_flags.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/trace_state.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=trace_state.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=tracer.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer_options.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=tracer_options.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/trace/tracer_provider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=tracer_provider.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-api-npm-1.1.0-7f8c5a33ef-8be8e8dd20.zip/node_modules/@opentelemetry/api/build/esm/version.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* binding */ VERSION)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// this is autogenerated file, see scripts/version-update.js
var VERSION = '1.1.0';
//# sourceMappingURL=version.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwsEcsLaunchtypeValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.AwsEcsLaunchtypeValues),
/* harmony export */   "CloudPlatformValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.CloudPlatformValues),
/* harmony export */   "CloudProviderValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.CloudProviderValues),
/* harmony export */   "DbCassandraConsistencyLevelValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.DbCassandraConsistencyLevelValues),
/* harmony export */   "DbSystemValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.DbSystemValues),
/* harmony export */   "FaasDocumentOperationValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.FaasDocumentOperationValues),
/* harmony export */   "FaasInvokedProviderValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.FaasInvokedProviderValues),
/* harmony export */   "FaasTriggerValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.FaasTriggerValues),
/* harmony export */   "HostArchValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.HostArchValues),
/* harmony export */   "HttpFlavorValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.HttpFlavorValues),
/* harmony export */   "MessageTypeValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.MessageTypeValues),
/* harmony export */   "MessagingDestinationKindValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.MessagingDestinationKindValues),
/* harmony export */   "MessagingOperationValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.MessagingOperationValues),
/* harmony export */   "NetHostConnectionSubtypeValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.NetHostConnectionSubtypeValues),
/* harmony export */   "NetHostConnectionTypeValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.NetHostConnectionTypeValues),
/* harmony export */   "NetTransportValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.NetTransportValues),
/* harmony export */   "OsTypeValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.OsTypeValues),
/* harmony export */   "RpcGrpcStatusCodeValues": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.RpcGrpcStatusCodeValues),
/* harmony export */   "SemanticAttributes": () => (/* reexport safe */ _trace__WEBPACK_IMPORTED_MODULE_0__.SemanticAttributes),
/* harmony export */   "SemanticResourceAttributes": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.SemanticResourceAttributes),
/* harmony export */   "TelemetrySdkLanguageValues": () => (/* reexport safe */ _resource__WEBPACK_IMPORTED_MODULE_1__.TelemetrySdkLanguageValues)
/* harmony export */ });
/* harmony import */ var _trace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/index.js");
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/index.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwsEcsLaunchtypeValues": () => (/* binding */ AwsEcsLaunchtypeValues),
/* harmony export */   "CloudPlatformValues": () => (/* binding */ CloudPlatformValues),
/* harmony export */   "CloudProviderValues": () => (/* binding */ CloudProviderValues),
/* harmony export */   "HostArchValues": () => (/* binding */ HostArchValues),
/* harmony export */   "OsTypeValues": () => (/* binding */ OsTypeValues),
/* harmony export */   "SemanticResourceAttributes": () => (/* binding */ SemanticResourceAttributes),
/* harmony export */   "TelemetrySdkLanguageValues": () => (/* binding */ TelemetrySdkLanguageValues)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
var SemanticResourceAttributes = {
    /**
    * Name of the cloud provider.
    */
    CLOUD_PROVIDER: 'cloud.provider',
    /**
    * The cloud account ID the resource is assigned to.
    */
    CLOUD_ACCOUNT_ID: 'cloud.account.id',
    /**
    * The geographical region the resource is running. Refer to your provider&#39;s docs to see the available regions, for example [Alibaba Cloud regions](https://www.alibabacloud.com/help/doc-detail/40654.htm), [AWS regions](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/), [Azure regions](https://azure.microsoft.com/en-us/global-infrastructure/geographies/), or [Google Cloud regions](https://cloud.google.com/about/locations).
    */
    CLOUD_REGION: 'cloud.region',
    /**
    * Cloud regions often have multiple, isolated locations known as zones to increase availability. Availability zone represents the zone where the resource is running.
    *
    * Note: Availability zones are called &#34;zones&#34; on Alibaba Cloud and Google Cloud.
    */
    CLOUD_AVAILABILITY_ZONE: 'cloud.availability_zone',
    /**
    * The cloud platform in use.
    *
    * Note: The prefix of the service SHOULD match the one specified in `cloud.provider`.
    */
    CLOUD_PLATFORM: 'cloud.platform',
    /**
    * The Amazon Resource Name (ARN) of an [ECS container instance](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_instances.html).
    */
    AWS_ECS_CONTAINER_ARN: 'aws.ecs.container.arn',
    /**
    * The ARN of an [ECS cluster](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/clusters.html).
    */
    AWS_ECS_CLUSTER_ARN: 'aws.ecs.cluster.arn',
    /**
    * The [launch type](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) for an ECS task.
    */
    AWS_ECS_LAUNCHTYPE: 'aws.ecs.launchtype',
    /**
    * The ARN of an [ECS task definition](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html).
    */
    AWS_ECS_TASK_ARN: 'aws.ecs.task.arn',
    /**
    * The task definition family this task definition is a member of.
    */
    AWS_ECS_TASK_FAMILY: 'aws.ecs.task.family',
    /**
    * The revision for this task definition.
    */
    AWS_ECS_TASK_REVISION: 'aws.ecs.task.revision',
    /**
    * The ARN of an EKS cluster.
    */
    AWS_EKS_CLUSTER_ARN: 'aws.eks.cluster.arn',
    /**
    * The name(s) of the AWS log group(s) an application is writing to.
    *
    * Note: Multiple log groups must be supported for cases like multi-container applications, where a single application has sidecar containers, and each write to their own log group.
    */
    AWS_LOG_GROUP_NAMES: 'aws.log.group.names',
    /**
    * The Amazon Resource Name(s) (ARN) of the AWS log group(s).
    *
    * Note: See the [log group ARN format documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html#CWL_ARN_Format).
    */
    AWS_LOG_GROUP_ARNS: 'aws.log.group.arns',
    /**
    * The name(s) of the AWS log stream(s) an application is writing to.
    */
    AWS_LOG_STREAM_NAMES: 'aws.log.stream.names',
    /**
    * The ARN(s) of the AWS log stream(s).
    *
    * Note: See the [log stream ARN format documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/iam-access-control-overview-cwl.html#CWL_ARN_Format). One log group can contain several log streams, so these ARNs necessarily identify both a log group and a log stream.
    */
    AWS_LOG_STREAM_ARNS: 'aws.log.stream.arns',
    /**
    * Container name.
    */
    CONTAINER_NAME: 'container.name',
    /**
    * Container ID. Usually a UUID, as for example used to [identify Docker containers](https://docs.docker.com/engine/reference/run/#container-identification). The UUID might be abbreviated.
    */
    CONTAINER_ID: 'container.id',
    /**
    * The container runtime managing this container.
    */
    CONTAINER_RUNTIME: 'container.runtime',
    /**
    * Name of the image the container was built on.
    */
    CONTAINER_IMAGE_NAME: 'container.image.name',
    /**
    * Container image tag.
    */
    CONTAINER_IMAGE_TAG: 'container.image.tag',
    /**
    * Name of the [deployment environment](https://en.wikipedia.org/wiki/Deployment_environment) (aka deployment tier).
    */
    DEPLOYMENT_ENVIRONMENT: 'deployment.environment',
    /**
    * A unique identifier representing the device.
    *
    * Note: The device identifier MUST only be defined using the values outlined below. This value is not an advertising identifier and MUST NOT be used as such. On iOS (Swift or Objective-C), this value MUST be equal to the [vendor identifier](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor). On Android (Java or Kotlin), this value MUST be equal to the Firebase Installation ID or a globally unique UUID which is persisted across sessions in your application. More information can be found [here](https://developer.android.com/training/articles/user-data-ids) on best practices and exact implementation details. Caution should be taken when storing personal data or anything which can identify a user. GDPR and data protection laws may apply, ensure you do your own due diligence.
    */
    DEVICE_ID: 'device.id',
    /**
    * The model identifier for the device.
    *
    * Note: It&#39;s recommended this value represents a machine readable version of the model identifier rather than the market or consumer-friendly name of the device.
    */
    DEVICE_MODEL_IDENTIFIER: 'device.model.identifier',
    /**
    * The marketing name for the device model.
    *
    * Note: It&#39;s recommended this value represents a human readable version of the device model rather than a machine readable alternative.
    */
    DEVICE_MODEL_NAME: 'device.model.name',
    /**
    * The name of the single function that this runtime instance executes.
    *
    * Note: This is the name of the function as configured/deployed on the FaaS platform and is usually different from the name of the callback function (which may be stored in the [`code.namespace`/`code.function`](../../trace/semantic_conventions/span-general.md#source-code-attributes) span attributes).
    */
    FAAS_NAME: 'faas.name',
    /**
    * The unique ID of the single function that this runtime instance executes.
    *
    * Note: Depending on the cloud provider, use:
  
  * **AWS Lambda:** The function [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).
  Take care not to use the &#34;invoked ARN&#34; directly but replace any
  [alias suffix](https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html) with the resolved function version, as the same runtime instance may be invokable with multiple
  different aliases.
  * **GCP:** The [URI of the resource](https://cloud.google.com/iam/docs/full-resource-names)
  * **Azure:** The [Fully Qualified Resource ID](https://docs.microsoft.com/en-us/rest/api/resources/resources/get-by-id).
  
  On some providers, it may not be possible to determine the full ID at startup,
  which is why this field cannot be made required. For example, on AWS the account ID
  part of the ARN is not available without calling another AWS API
  which may be deemed too slow for a short-running lambda function.
  As an alternative, consider setting `faas.id` as a span attribute instead.
    */
    FAAS_ID: 'faas.id',
    /**
    * The immutable version of the function being executed.
    *
    * Note: Depending on the cloud provider and platform, use:
  
  * **AWS Lambda:** The [function version](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html)
    (an integer represented as a decimal string).
  * **Google Cloud Run:** The [revision](https://cloud.google.com/run/docs/managing/revisions)
    (i.e., the function name plus the revision suffix).
  * **Google Cloud Functions:** The value of the
    [`K_REVISION` environment variable](https://cloud.google.com/functions/docs/env-var#runtime_environment_variables_set_automatically).
  * **Azure Functions:** Not applicable. Do not set this attribute.
    */
    FAAS_VERSION: 'faas.version',
    /**
    * The execution environment ID as a string, that will be potentially reused for other invocations to the same function/function version.
    *
    * Note: * **AWS Lambda:** Use the (full) log stream name.
    */
    FAAS_INSTANCE: 'faas.instance',
    /**
    * The amount of memory available to the serverless function in MiB.
    *
    * Note: It&#39;s recommended to set this attribute since e.g. too little memory can easily stop a Java AWS Lambda function from working correctly. On AWS Lambda, the environment variable `AWS_LAMBDA_FUNCTION_MEMORY_SIZE` provides this information.
    */
    FAAS_MAX_MEMORY: 'faas.max_memory',
    /**
    * Unique host ID. For Cloud, this must be the instance_id assigned by the cloud provider.
    */
    HOST_ID: 'host.id',
    /**
    * Name of the host. On Unix systems, it may contain what the hostname command returns, or the fully qualified hostname, or another name specified by the user.
    */
    HOST_NAME: 'host.name',
    /**
    * Type of host. For Cloud, this must be the machine type.
    */
    HOST_TYPE: 'host.type',
    /**
    * The CPU architecture the host system is running on.
    */
    HOST_ARCH: 'host.arch',
    /**
    * Name of the VM image or OS install the host was instantiated from.
    */
    HOST_IMAGE_NAME: 'host.image.name',
    /**
    * VM image ID. For Cloud, this value is from the provider.
    */
    HOST_IMAGE_ID: 'host.image.id',
    /**
    * The version string of the VM image as defined in [Version Attributes](README.md#version-attributes).
    */
    HOST_IMAGE_VERSION: 'host.image.version',
    /**
    * The name of the cluster.
    */
    K8S_CLUSTER_NAME: 'k8s.cluster.name',
    /**
    * The name of the Node.
    */
    K8S_NODE_NAME: 'k8s.node.name',
    /**
    * The UID of the Node.
    */
    K8S_NODE_UID: 'k8s.node.uid',
    /**
    * The name of the namespace that the pod is running in.
    */
    K8S_NAMESPACE_NAME: 'k8s.namespace.name',
    /**
    * The UID of the Pod.
    */
    K8S_POD_UID: 'k8s.pod.uid',
    /**
    * The name of the Pod.
    */
    K8S_POD_NAME: 'k8s.pod.name',
    /**
    * The name of the Container in a Pod template.
    */
    K8S_CONTAINER_NAME: 'k8s.container.name',
    /**
    * The UID of the ReplicaSet.
    */
    K8S_REPLICASET_UID: 'k8s.replicaset.uid',
    /**
    * The name of the ReplicaSet.
    */
    K8S_REPLICASET_NAME: 'k8s.replicaset.name',
    /**
    * The UID of the Deployment.
    */
    K8S_DEPLOYMENT_UID: 'k8s.deployment.uid',
    /**
    * The name of the Deployment.
    */
    K8S_DEPLOYMENT_NAME: 'k8s.deployment.name',
    /**
    * The UID of the StatefulSet.
    */
    K8S_STATEFULSET_UID: 'k8s.statefulset.uid',
    /**
    * The name of the StatefulSet.
    */
    K8S_STATEFULSET_NAME: 'k8s.statefulset.name',
    /**
    * The UID of the DaemonSet.
    */
    K8S_DAEMONSET_UID: 'k8s.daemonset.uid',
    /**
    * The name of the DaemonSet.
    */
    K8S_DAEMONSET_NAME: 'k8s.daemonset.name',
    /**
    * The UID of the Job.
    */
    K8S_JOB_UID: 'k8s.job.uid',
    /**
    * The name of the Job.
    */
    K8S_JOB_NAME: 'k8s.job.name',
    /**
    * The UID of the CronJob.
    */
    K8S_CRONJOB_UID: 'k8s.cronjob.uid',
    /**
    * The name of the CronJob.
    */
    K8S_CRONJOB_NAME: 'k8s.cronjob.name',
    /**
    * The operating system type.
    */
    OS_TYPE: 'os.type',
    /**
    * Human readable (not intended to be parsed) OS version information, like e.g. reported by `ver` or `lsb_release -a` commands.
    */
    OS_DESCRIPTION: 'os.description',
    /**
    * Human readable operating system name.
    */
    OS_NAME: 'os.name',
    /**
    * The version string of the operating system as defined in [Version Attributes](../../resource/semantic_conventions/README.md#version-attributes).
    */
    OS_VERSION: 'os.version',
    /**
    * Process identifier (PID).
    */
    PROCESS_PID: 'process.pid',
    /**
    * The name of the process executable. On Linux based systems, can be set to the `Name` in `proc/[pid]/status`. On Windows, can be set to the base name of `GetProcessImageFileNameW`.
    */
    PROCESS_EXECUTABLE_NAME: 'process.executable.name',
    /**
    * The full path to the process executable. On Linux based systems, can be set to the target of `proc/[pid]/exe`. On Windows, can be set to the result of `GetProcessImageFileNameW`.
    */
    PROCESS_EXECUTABLE_PATH: 'process.executable.path',
    /**
    * The command used to launch the process (i.e. the command name). On Linux based systems, can be set to the zeroth string in `proc/[pid]/cmdline`. On Windows, can be set to the first parameter extracted from `GetCommandLineW`.
    */
    PROCESS_COMMAND: 'process.command',
    /**
    * The full command used to launch the process as a single string representing the full command. On Windows, can be set to the result of `GetCommandLineW`. Do not set this if you have to assemble it just for monitoring; use `process.command_args` instead.
    */
    PROCESS_COMMAND_LINE: 'process.command_line',
    /**
    * All the command arguments (including the command/executable itself) as received by the process. On Linux-based systems (and some other Unixoid systems supporting procfs), can be set according to the list of null-delimited strings extracted from `proc/[pid]/cmdline`. For libc-based executables, this would be the full argv vector passed to `main`.
    */
    PROCESS_COMMAND_ARGS: 'process.command_args',
    /**
    * The username of the user that owns the process.
    */
    PROCESS_OWNER: 'process.owner',
    /**
    * The name of the runtime of this process. For compiled native binaries, this SHOULD be the name of the compiler.
    */
    PROCESS_RUNTIME_NAME: 'process.runtime.name',
    /**
    * The version of the runtime of this process, as returned by the runtime without modification.
    */
    PROCESS_RUNTIME_VERSION: 'process.runtime.version',
    /**
    * An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment.
    */
    PROCESS_RUNTIME_DESCRIPTION: 'process.runtime.description',
    /**
    * Logical name of the service.
    *
    * Note: MUST be the same for all instances of horizontally scaled services. If the value was not specified, SDKs MUST fallback to `unknown_service:` concatenated with [`process.executable.name`](process.md#process), e.g. `unknown_service:bash`. If `process.executable.name` is not available, the value MUST be set to `unknown_service`.
    */
    SERVICE_NAME: 'service.name',
    /**
    * A namespace for `service.name`.
    *
    * Note: A string value having a meaning that helps to distinguish a group of services, for example the team name that owns a group of services. `service.name` is expected to be unique within the same namespace. If `service.namespace` is not specified in the Resource then `service.name` is expected to be unique for all services that have no explicit namespace defined (so the empty/unspecified namespace is simply one more valid namespace). Zero-length namespace string is assumed equal to unspecified namespace.
    */
    SERVICE_NAMESPACE: 'service.namespace',
    /**
    * The string ID of the service instance.
    *
    * Note: MUST be unique for each instance of the same `service.namespace,service.name` pair (in other words `service.namespace,service.name,service.instance.id` triplet MUST be globally unique). The ID helps to distinguish instances of the same service that exist at the same time (e.g. instances of a horizontally scaled service). It is preferable for the ID to be persistent and stay the same for the lifetime of the service instance, however it is acceptable that the ID is ephemeral and changes during important lifetime events for the service (e.g. service restarts). If the service has no inherent unique ID that can be used as the value of this attribute it is recommended to generate a random Version 1 or Version 4 RFC 4122 UUID (services aiming for reproducible UUIDs may also use Version 5, see RFC 4122 for more recommendations).
    */
    SERVICE_INSTANCE_ID: 'service.instance.id',
    /**
    * The version string of the service API or implementation.
    */
    SERVICE_VERSION: 'service.version',
    /**
    * The name of the telemetry SDK as defined above.
    */
    TELEMETRY_SDK_NAME: 'telemetry.sdk.name',
    /**
    * The language of the telemetry SDK.
    */
    TELEMETRY_SDK_LANGUAGE: 'telemetry.sdk.language',
    /**
    * The version string of the telemetry SDK.
    */
    TELEMETRY_SDK_VERSION: 'telemetry.sdk.version',
    /**
    * The version string of the auto instrumentation agent, if used.
    */
    TELEMETRY_AUTO_VERSION: 'telemetry.auto.version',
    /**
    * The name of the web engine.
    */
    WEBENGINE_NAME: 'webengine.name',
    /**
    * The version of the web engine.
    */
    WEBENGINE_VERSION: 'webengine.version',
    /**
    * Additional description of the web engine (e.g. detailed version and edition information).
    */
    WEBENGINE_DESCRIPTION: 'webengine.description',
};
var CloudProviderValues = {
    /** Alibaba Cloud. */
    ALIBABA_CLOUD: 'alibaba_cloud',
    /** Amazon Web Services. */
    AWS: 'aws',
    /** Microsoft Azure. */
    AZURE: 'azure',
    /** Google Cloud Platform. */
    GCP: 'gcp',
};
var CloudPlatformValues = {
    /** Alibaba Cloud Elastic Compute Service. */
    ALIBABA_CLOUD_ECS: 'alibaba_cloud_ecs',
    /** Alibaba Cloud Function Compute. */
    ALIBABA_CLOUD_FC: 'alibaba_cloud_fc',
    /** AWS Elastic Compute Cloud. */
    AWS_EC2: 'aws_ec2',
    /** AWS Elastic Container Service. */
    AWS_ECS: 'aws_ecs',
    /** AWS Elastic Kubernetes Service. */
    AWS_EKS: 'aws_eks',
    /** AWS Lambda. */
    AWS_LAMBDA: 'aws_lambda',
    /** AWS Elastic Beanstalk. */
    AWS_ELASTIC_BEANSTALK: 'aws_elastic_beanstalk',
    /** Azure Virtual Machines. */
    AZURE_VM: 'azure_vm',
    /** Azure Container Instances. */
    AZURE_CONTAINER_INSTANCES: 'azure_container_instances',
    /** Azure Kubernetes Service. */
    AZURE_AKS: 'azure_aks',
    /** Azure Functions. */
    AZURE_FUNCTIONS: 'azure_functions',
    /** Azure App Service. */
    AZURE_APP_SERVICE: 'azure_app_service',
    /** Google Cloud Compute Engine (GCE). */
    GCP_COMPUTE_ENGINE: 'gcp_compute_engine',
    /** Google Cloud Run. */
    GCP_CLOUD_RUN: 'gcp_cloud_run',
    /** Google Cloud Kubernetes Engine (GKE). */
    GCP_KUBERNETES_ENGINE: 'gcp_kubernetes_engine',
    /** Google Cloud Functions (GCF). */
    GCP_CLOUD_FUNCTIONS: 'gcp_cloud_functions',
    /** Google Cloud App Engine (GAE). */
    GCP_APP_ENGINE: 'gcp_app_engine',
};
var AwsEcsLaunchtypeValues = {
    /** ec2. */
    EC2: 'ec2',
    /** fargate. */
    FARGATE: 'fargate',
};
var HostArchValues = {
    /** AMD64. */
    AMD64: 'amd64',
    /** ARM32. */
    ARM32: 'arm32',
    /** ARM64. */
    ARM64: 'arm64',
    /** Itanium. */
    IA64: 'ia64',
    /** 32-bit PowerPC. */
    PPC32: 'ppc32',
    /** 64-bit PowerPC. */
    PPC64: 'ppc64',
    /** 32-bit x86. */
    X86: 'x86',
};
var OsTypeValues = {
    /** Microsoft Windows. */
    WINDOWS: 'windows',
    /** Linux. */
    LINUX: 'linux',
    /** Apple Darwin. */
    DARWIN: 'darwin',
    /** FreeBSD. */
    FREEBSD: 'freebsd',
    /** NetBSD. */
    NETBSD: 'netbsd',
    /** OpenBSD. */
    OPENBSD: 'openbsd',
    /** DragonFly BSD. */
    DRAGONFLYBSD: 'dragonflybsd',
    /** HP-UX (Hewlett Packard Unix). */
    HPUX: 'hpux',
    /** AIX (Advanced Interactive eXecutive). */
    AIX: 'aix',
    /** Oracle Solaris. */
    SOLARIS: 'solaris',
    /** IBM z/OS. */
    Z_OS: 'z_os',
};
var TelemetrySdkLanguageValues = {
    /** cpp. */
    CPP: 'cpp',
    /** dotnet. */
    DOTNET: 'dotnet',
    /** erlang. */
    ERLANG: 'erlang',
    /** go. */
    GO: 'go',
    /** java. */
    JAVA: 'java',
    /** nodejs. */
    NODEJS: 'nodejs',
    /** php. */
    PHP: 'php',
    /** python. */
    PYTHON: 'python',
    /** ruby. */
    RUBY: 'ruby',
    /** webjs. */
    WEBJS: 'webjs',
};
//# sourceMappingURL=SemanticResourceAttributes.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwsEcsLaunchtypeValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.AwsEcsLaunchtypeValues),
/* harmony export */   "CloudPlatformValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.CloudPlatformValues),
/* harmony export */   "CloudProviderValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.CloudProviderValues),
/* harmony export */   "HostArchValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.HostArchValues),
/* harmony export */   "OsTypeValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.OsTypeValues),
/* harmony export */   "SemanticResourceAttributes": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.SemanticResourceAttributes),
/* harmony export */   "TelemetrySdkLanguageValues": () => (/* reexport safe */ _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__.TelemetrySdkLanguageValues)
/* harmony export */ });
/* harmony import */ var _SemanticResourceAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/SemanticAttributes.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DbCassandraConsistencyLevelValues": () => (/* binding */ DbCassandraConsistencyLevelValues),
/* harmony export */   "DbSystemValues": () => (/* binding */ DbSystemValues),
/* harmony export */   "FaasDocumentOperationValues": () => (/* binding */ FaasDocumentOperationValues),
/* harmony export */   "FaasInvokedProviderValues": () => (/* binding */ FaasInvokedProviderValues),
/* harmony export */   "FaasTriggerValues": () => (/* binding */ FaasTriggerValues),
/* harmony export */   "HttpFlavorValues": () => (/* binding */ HttpFlavorValues),
/* harmony export */   "MessageTypeValues": () => (/* binding */ MessageTypeValues),
/* harmony export */   "MessagingDestinationKindValues": () => (/* binding */ MessagingDestinationKindValues),
/* harmony export */   "MessagingOperationValues": () => (/* binding */ MessagingOperationValues),
/* harmony export */   "NetHostConnectionSubtypeValues": () => (/* binding */ NetHostConnectionSubtypeValues),
/* harmony export */   "NetHostConnectionTypeValues": () => (/* binding */ NetHostConnectionTypeValues),
/* harmony export */   "NetTransportValues": () => (/* binding */ NetTransportValues),
/* harmony export */   "RpcGrpcStatusCodeValues": () => (/* binding */ RpcGrpcStatusCodeValues),
/* harmony export */   "SemanticAttributes": () => (/* binding */ SemanticAttributes)
/* harmony export */ });
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// DO NOT EDIT, this is an Auto-generated file from scripts/semconv/templates//templates/SemanticAttributes.ts.j2
var SemanticAttributes = {
    /**
    * The full invoked ARN as provided on the `Context` passed to the function (`Lambda-Runtime-Invoked-Function-Arn` header on the `/runtime/invocation/next` applicable).
    *
    * Note: This may be different from `faas.id` if an alias is involved.
    */
    AWS_LAMBDA_INVOKED_ARN: 'aws.lambda.invoked_arn',
    /**
    * An identifier for the database management system (DBMS) product being used. See below for a list of well-known identifiers.
    */
    DB_SYSTEM: 'db.system',
    /**
    * The connection string used to connect to the database. It is recommended to remove embedded credentials.
    */
    DB_CONNECTION_STRING: 'db.connection_string',
    /**
    * Username for accessing the database.
    */
    DB_USER: 'db.user',
    /**
    * The fully-qualified class name of the [Java Database Connectivity (JDBC)](https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/) driver used to connect.
    */
    DB_JDBC_DRIVER_CLASSNAME: 'db.jdbc.driver_classname',
    /**
    * If no [tech-specific attribute](#call-level-attributes-for-specific-technologies) is defined, this attribute is used to report the name of the database being accessed. For commands that switch the database, this should be set to the target database (even if the command fails).
    *
    * Note: In some SQL databases, the database name to be used is called &#34;schema name&#34;.
    */
    DB_NAME: 'db.name',
    /**
    * The database statement being executed.
    *
    * Note: The value may be sanitized to exclude sensitive information.
    */
    DB_STATEMENT: 'db.statement',
    /**
    * The name of the operation being executed, e.g. the [MongoDB command name](https://docs.mongodb.com/manual/reference/command/#database-operations) such as `findAndModify`, or the SQL keyword.
    *
    * Note: When setting this to an SQL keyword, it is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if the operation name is provided by the library being instrumented. If the SQL statement has an ambiguous operation, or performs more than one operation, this value may be omitted.
    */
    DB_OPERATION: 'db.operation',
    /**
    * The Microsoft SQL Server [instance name](https://docs.microsoft.com/en-us/sql/connect/jdbc/building-the-connection-url?view=sql-server-ver15) connecting to. This name is used to determine the port of a named instance.
    *
    * Note: If setting a `db.mssql.instance_name`, `net.peer.port` is no longer required (but still recommended if non-standard).
    */
    DB_MSSQL_INSTANCE_NAME: 'db.mssql.instance_name',
    /**
    * The name of the keyspace being accessed. To be used instead of the generic `db.name` attribute.
    */
    DB_CASSANDRA_KEYSPACE: 'db.cassandra.keyspace',
    /**
    * The fetch size used for paging, i.e. how many rows will be returned at once.
    */
    DB_CASSANDRA_PAGE_SIZE: 'db.cassandra.page_size',
    /**
    * The consistency level of the query. Based on consistency values from [CQL](https://docs.datastax.com/en/cassandra-oss/3.0/cassandra/dml/dmlConfigConsistency.html).
    */
    DB_CASSANDRA_CONSISTENCY_LEVEL: 'db.cassandra.consistency_level',
    /**
    * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
    *
    * Note: This mirrors the db.sql.table attribute but references cassandra rather than sql. It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
    */
    DB_CASSANDRA_TABLE: 'db.cassandra.table',
    /**
    * Whether or not the query is idempotent.
    */
    DB_CASSANDRA_IDEMPOTENCE: 'db.cassandra.idempotence',
    /**
    * The number of times a query was speculatively executed. Not set or `0` if the query was not executed speculatively.
    */
    DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: 'db.cassandra.speculative_execution_count',
    /**
    * The ID of the coordinating node for a query.
    */
    DB_CASSANDRA_COORDINATOR_ID: 'db.cassandra.coordinator.id',
    /**
    * The data center of the coordinating node for a query.
    */
    DB_CASSANDRA_COORDINATOR_DC: 'db.cassandra.coordinator.dc',
    /**
    * The [HBase namespace](https://hbase.apache.org/book.html#_namespace) being accessed. To be used instead of the generic `db.name` attribute.
    */
    DB_HBASE_NAMESPACE: 'db.hbase.namespace',
    /**
    * The index of the database being accessed as used in the [`SELECT` command](https://redis.io/commands/select), provided as an integer. To be used instead of the generic `db.name` attribute.
    */
    DB_REDIS_DATABASE_INDEX: 'db.redis.database_index',
    /**
    * The collection being accessed within the database stated in `db.name`.
    */
    DB_MONGODB_COLLECTION: 'db.mongodb.collection',
    /**
    * The name of the primary table that the operation is acting upon, including the schema name (if applicable).
    *
    * Note: It is not recommended to attempt any client-side parsing of `db.statement` just to get this property, but it should be set if it is provided by the library being instrumented. If the operation is acting upon an anonymous table, or more than one table, this value MUST NOT be set.
    */
    DB_SQL_TABLE: 'db.sql.table',
    /**
    * The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.
    */
    EXCEPTION_TYPE: 'exception.type',
    /**
    * The exception message.
    */
    EXCEPTION_MESSAGE: 'exception.message',
    /**
    * A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.
    */
    EXCEPTION_STACKTRACE: 'exception.stacktrace',
    /**
    * SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.
    *
    * Note: An exception is considered to have escaped (or left) the scope of a span,
  if that span is ended while the exception is still logically &#34;in flight&#34;.
  This may be actually &#34;in flight&#34; in some languages (e.g. if the exception
  is passed to a Context manager&#39;s `__exit__` method in Python) but will
  usually be caught at the point of recording the exception in most languages.
  
  It is usually not possible to determine at the point where an exception is thrown
  whether it will escape the scope of a span.
  However, it is trivial to know that an exception
  will escape, if one checks for an active exception just before ending the span,
  as done in the [example above](#exception-end-example).
  
  It follows that an exception may still escape the scope of the span
  even if the `exception.escaped` attribute was not set or set to false,
  since the event might have been recorded at a time where it was not
  clear whether the exception will escape.
    */
    EXCEPTION_ESCAPED: 'exception.escaped',
    /**
    * Type of the trigger on which the function is executed.
    */
    FAAS_TRIGGER: 'faas.trigger',
    /**
    * The execution ID of the current function execution.
    */
    FAAS_EXECUTION: 'faas.execution',
    /**
    * The name of the source on which the triggering operation was performed. For example, in Cloud Storage or S3 corresponds to the bucket name, and in Cosmos DB to the database name.
    */
    FAAS_DOCUMENT_COLLECTION: 'faas.document.collection',
    /**
    * Describes the type of the operation that was performed on the data.
    */
    FAAS_DOCUMENT_OPERATION: 'faas.document.operation',
    /**
    * A string containing the time when the data was accessed in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
    */
    FAAS_DOCUMENT_TIME: 'faas.document.time',
    /**
    * The document name/table subjected to the operation. For example, in Cloud Storage or S3 is the name of the file, and in Cosmos DB the table name.
    */
    FAAS_DOCUMENT_NAME: 'faas.document.name',
    /**
    * A string containing the function invocation time in the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format expressed in [UTC](https://www.w3.org/TR/NOTE-datetime).
    */
    FAAS_TIME: 'faas.time',
    /**
    * A string containing the schedule period as [Cron Expression](https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm).
    */
    FAAS_CRON: 'faas.cron',
    /**
    * A boolean that is true if the serverless function is executed for the first time (aka cold-start).
    */
    FAAS_COLDSTART: 'faas.coldstart',
    /**
    * The name of the invoked function.
    *
    * Note: SHOULD be equal to the `faas.name` resource attribute of the invoked function.
    */
    FAAS_INVOKED_NAME: 'faas.invoked_name',
    /**
    * The cloud provider of the invoked function.
    *
    * Note: SHOULD be equal to the `cloud.provider` resource attribute of the invoked function.
    */
    FAAS_INVOKED_PROVIDER: 'faas.invoked_provider',
    /**
    * The cloud region of the invoked function.
    *
    * Note: SHOULD be equal to the `cloud.region` resource attribute of the invoked function.
    */
    FAAS_INVOKED_REGION: 'faas.invoked_region',
    /**
    * Transport protocol used. See note below.
    */
    NET_TRANSPORT: 'net.transport',
    /**
    * Remote address of the peer (dotted decimal for IPv4 or [RFC5952](https://tools.ietf.org/html/rfc5952) for IPv6).
    */
    NET_PEER_IP: 'net.peer.ip',
    /**
    * Remote port number.
    */
    NET_PEER_PORT: 'net.peer.port',
    /**
    * Remote hostname or similar, see note below.
    */
    NET_PEER_NAME: 'net.peer.name',
    /**
    * Like `net.peer.ip` but for the host IP. Useful in case of a multi-IP host.
    */
    NET_HOST_IP: 'net.host.ip',
    /**
    * Like `net.peer.port` but for the host port.
    */
    NET_HOST_PORT: 'net.host.port',
    /**
    * Local hostname or similar, see note below.
    */
    NET_HOST_NAME: 'net.host.name',
    /**
    * The internet connection type currently being used by the host.
    */
    NET_HOST_CONNECTION_TYPE: 'net.host.connection.type',
    /**
    * This describes more details regarding the connection.type. It may be the type of cell technology connection, but it could be used for describing details about a wifi connection.
    */
    NET_HOST_CONNECTION_SUBTYPE: 'net.host.connection.subtype',
    /**
    * The name of the mobile carrier.
    */
    NET_HOST_CARRIER_NAME: 'net.host.carrier.name',
    /**
    * The mobile carrier country code.
    */
    NET_HOST_CARRIER_MCC: 'net.host.carrier.mcc',
    /**
    * The mobile carrier network code.
    */
    NET_HOST_CARRIER_MNC: 'net.host.carrier.mnc',
    /**
    * The ISO 3166-1 alpha-2 2-character country code associated with the mobile carrier network.
    */
    NET_HOST_CARRIER_ICC: 'net.host.carrier.icc',
    /**
    * The [`service.name`](../../resource/semantic_conventions/README.md#service) of the remote service. SHOULD be equal to the actual `service.name` resource attribute of the remote service if any.
    */
    PEER_SERVICE: 'peer.service',
    /**
    * Username or client_id extracted from the access token or [Authorization](https://tools.ietf.org/html/rfc7235#section-4.2) header in the inbound request from outside the system.
    */
    ENDUSER_ID: 'enduser.id',
    /**
    * Actual/assumed role the client is making the request under extracted from token or application security context.
    */
    ENDUSER_ROLE: 'enduser.role',
    /**
    * Scopes or granted authorities the client currently possesses extracted from token or application security context. The value would come from the scope associated with an [OAuth 2.0 Access Token](https://tools.ietf.org/html/rfc6749#section-3.3) or an attribute value in a [SAML 2.0 Assertion](http://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html).
    */
    ENDUSER_SCOPE: 'enduser.scope',
    /**
    * Current &#34;managed&#34; thread ID (as opposed to OS thread ID).
    */
    THREAD_ID: 'thread.id',
    /**
    * Current thread name.
    */
    THREAD_NAME: 'thread.name',
    /**
    * The method or function name, or equivalent (usually rightmost part of the code unit&#39;s name).
    */
    CODE_FUNCTION: 'code.function',
    /**
    * The &#34;namespace&#34; within which `code.function` is defined. Usually the qualified class or module name, such that `code.namespace` + some separator + `code.function` form a unique identifier for the code unit.
    */
    CODE_NAMESPACE: 'code.namespace',
    /**
    * The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
    */
    CODE_FILEPATH: 'code.filepath',
    /**
    * The line number in `code.filepath` best representing the operation. It SHOULD point within the code unit named in `code.function`.
    */
    CODE_LINENO: 'code.lineno',
    /**
    * HTTP request method.
    */
    HTTP_METHOD: 'http.method',
    /**
    * Full HTTP request URL in the form `scheme://host[:port]/path?query[#fragment]`. Usually the fragment is not transmitted over HTTP, but if it is known, it should be included nevertheless.
    *
    * Note: `http.url` MUST NOT contain credentials passed via URL in form of `https://username:password@www.example.com/`. In such case the attribute&#39;s value should be `https://www.example.com/`.
    */
    HTTP_URL: 'http.url',
    /**
    * The full request target as passed in a HTTP request line or equivalent.
    */
    HTTP_TARGET: 'http.target',
    /**
    * The value of the [HTTP host header](https://tools.ietf.org/html/rfc7230#section-5.4). An empty Host header should also be reported, see note.
    *
    * Note: When the header is present but empty the attribute SHOULD be set to the empty string. Note that this is a valid situation that is expected in certain cases, according the aforementioned [section of RFC 7230](https://tools.ietf.org/html/rfc7230#section-5.4). When the header is not set the attribute MUST NOT be set.
    */
    HTTP_HOST: 'http.host',
    /**
    * The URI scheme identifying the used protocol.
    */
    HTTP_SCHEME: 'http.scheme',
    /**
    * [HTTP response status code](https://tools.ietf.org/html/rfc7231#section-6).
    */
    HTTP_STATUS_CODE: 'http.status_code',
    /**
    * Kind of HTTP protocol used.
    *
    * Note: If `net.transport` is not specified, it can be assumed to be `IP.TCP` except if `http.flavor` is `QUIC`, in which case `IP.UDP` is assumed.
    */
    HTTP_FLAVOR: 'http.flavor',
    /**
    * Value of the [HTTP User-Agent](https://tools.ietf.org/html/rfc7231#section-5.5.3) header sent by the client.
    */
    HTTP_USER_AGENT: 'http.user_agent',
    /**
    * The size of the request payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
    */
    HTTP_REQUEST_CONTENT_LENGTH: 'http.request_content_length',
    /**
    * The size of the uncompressed request payload body after transport decoding. Not set if transport encoding not used.
    */
    HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: 'http.request_content_length_uncompressed',
    /**
    * The size of the response payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the [Content-Length](https://tools.ietf.org/html/rfc7230#section-3.3.2) header. For requests using transport encoding, this should be the compressed size.
    */
    HTTP_RESPONSE_CONTENT_LENGTH: 'http.response_content_length',
    /**
    * The size of the uncompressed response payload body after transport decoding. Not set if transport encoding not used.
    */
    HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: 'http.response_content_length_uncompressed',
    /**
    * The primary server name of the matched virtual host. This should be obtained via configuration. If no such configuration can be obtained, this attribute MUST NOT be set ( `net.host.name` should be used instead).
    *
    * Note: `http.url` is usually not readily available on the server side but would have to be assembled in a cumbersome and sometimes lossy process from other information (see e.g. open-telemetry/opentelemetry-python/pull/148). It is thus preferred to supply the raw data that is available.
    */
    HTTP_SERVER_NAME: 'http.server_name',
    /**
    * The matched route (path template).
    */
    HTTP_ROUTE: 'http.route',
    /**
    * The IP address of the original client behind all proxies, if known (e.g. from [X-Forwarded-For](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)).
    *
    * Note: This is not necessarily the same as `net.peer.ip`, which would
  identify the network-level peer, which may be a proxy.
  
  This attribute should be set when a source of information different
  from the one used for `net.peer.ip`, is available even if that other
  source just confirms the same value as `net.peer.ip`.
  Rationale: For `net.peer.ip`, one typically does not know if it
  comes from a proxy, reverse proxy, or the actual client. Setting
  `http.client_ip` when it&#39;s the same as `net.peer.ip` means that
  one is at least somewhat confident that the address is not that of
  the closest proxy.
    */
    HTTP_CLIENT_IP: 'http.client_ip',
    /**
    * The keys in the `RequestItems` object field.
    */
    AWS_DYNAMODB_TABLE_NAMES: 'aws.dynamodb.table_names',
    /**
    * The JSON-serialized value of each item in the `ConsumedCapacity` response field.
    */
    AWS_DYNAMODB_CONSUMED_CAPACITY: 'aws.dynamodb.consumed_capacity',
    /**
    * The JSON-serialized value of the `ItemCollectionMetrics` response field.
    */
    AWS_DYNAMODB_ITEM_COLLECTION_METRICS: 'aws.dynamodb.item_collection_metrics',
    /**
    * The value of the `ProvisionedThroughput.ReadCapacityUnits` request parameter.
    */
    AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: 'aws.dynamodb.provisioned_read_capacity',
    /**
    * The value of the `ProvisionedThroughput.WriteCapacityUnits` request parameter.
    */
    AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: 'aws.dynamodb.provisioned_write_capacity',
    /**
    * The value of the `ConsistentRead` request parameter.
    */
    AWS_DYNAMODB_CONSISTENT_READ: 'aws.dynamodb.consistent_read',
    /**
    * The value of the `ProjectionExpression` request parameter.
    */
    AWS_DYNAMODB_PROJECTION: 'aws.dynamodb.projection',
    /**
    * The value of the `Limit` request parameter.
    */
    AWS_DYNAMODB_LIMIT: 'aws.dynamodb.limit',
    /**
    * The value of the `AttributesToGet` request parameter.
    */
    AWS_DYNAMODB_ATTRIBUTES_TO_GET: 'aws.dynamodb.attributes_to_get',
    /**
    * The value of the `IndexName` request parameter.
    */
    AWS_DYNAMODB_INDEX_NAME: 'aws.dynamodb.index_name',
    /**
    * The value of the `Select` request parameter.
    */
    AWS_DYNAMODB_SELECT: 'aws.dynamodb.select',
    /**
    * The JSON-serialized value of each item of the `GlobalSecondaryIndexes` request field.
    */
    AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: 'aws.dynamodb.global_secondary_indexes',
    /**
    * The JSON-serialized value of each item of the `LocalSecondaryIndexes` request field.
    */
    AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: 'aws.dynamodb.local_secondary_indexes',
    /**
    * The value of the `ExclusiveStartTableName` request parameter.
    */
    AWS_DYNAMODB_EXCLUSIVE_START_TABLE: 'aws.dynamodb.exclusive_start_table',
    /**
    * The the number of items in the `TableNames` response parameter.
    */
    AWS_DYNAMODB_TABLE_COUNT: 'aws.dynamodb.table_count',
    /**
    * The value of the `ScanIndexForward` request parameter.
    */
    AWS_DYNAMODB_SCAN_FORWARD: 'aws.dynamodb.scan_forward',
    /**
    * The value of the `Segment` request parameter.
    */
    AWS_DYNAMODB_SEGMENT: 'aws.dynamodb.segment',
    /**
    * The value of the `TotalSegments` request parameter.
    */
    AWS_DYNAMODB_TOTAL_SEGMENTS: 'aws.dynamodb.total_segments',
    /**
    * The value of the `Count` response parameter.
    */
    AWS_DYNAMODB_COUNT: 'aws.dynamodb.count',
    /**
    * The value of the `ScannedCount` response parameter.
    */
    AWS_DYNAMODB_SCANNED_COUNT: 'aws.dynamodb.scanned_count',
    /**
    * The JSON-serialized value of each item in the `AttributeDefinitions` request field.
    */
    AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: 'aws.dynamodb.attribute_definitions',
    /**
    * The JSON-serialized value of each item in the the `GlobalSecondaryIndexUpdates` request field.
    */
    AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: 'aws.dynamodb.global_secondary_index_updates',
    /**
    * A string identifying the messaging system.
    */
    MESSAGING_SYSTEM: 'messaging.system',
    /**
    * The message destination name. This might be equal to the span name but is required nevertheless.
    */
    MESSAGING_DESTINATION: 'messaging.destination',
    /**
    * The kind of message destination.
    */
    MESSAGING_DESTINATION_KIND: 'messaging.destination_kind',
    /**
    * A boolean that is true if the message destination is temporary.
    */
    MESSAGING_TEMP_DESTINATION: 'messaging.temp_destination',
    /**
    * The name of the transport protocol.
    */
    MESSAGING_PROTOCOL: 'messaging.protocol',
    /**
    * The version of the transport protocol.
    */
    MESSAGING_PROTOCOL_VERSION: 'messaging.protocol_version',
    /**
    * Connection string.
    */
    MESSAGING_URL: 'messaging.url',
    /**
    * A value used by the messaging system as an identifier for the message, represented as a string.
    */
    MESSAGING_MESSAGE_ID: 'messaging.message_id',
    /**
    * The [conversation ID](#conversations) identifying the conversation to which the message belongs, represented as a string. Sometimes called &#34;Correlation ID&#34;.
    */
    MESSAGING_CONVERSATION_ID: 'messaging.conversation_id',
    /**
    * The (uncompressed) size of the message payload in bytes. Also use this attribute if it is unknown whether the compressed or uncompressed payload size is reported.
    */
    MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: 'messaging.message_payload_size_bytes',
    /**
    * The compressed size of the message payload in bytes.
    */
    MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: 'messaging.message_payload_compressed_size_bytes',
    /**
    * A string identifying the kind of message consumption as defined in the [Operation names](#operation-names) section above. If the operation is &#34;send&#34;, this attribute MUST NOT be set, since the operation can be inferred from the span kind in that case.
    */
    MESSAGING_OPERATION: 'messaging.operation',
    /**
    * The identifier for the consumer receiving a message. For Kafka, set it to `{messaging.kafka.consumer_group} - {messaging.kafka.client_id}`, if both are present, or only `messaging.kafka.consumer_group`. For brokers, such as RabbitMQ and Artemis, set it to the `client_id` of the client consuming the message.
    */
    MESSAGING_CONSUMER_ID: 'messaging.consumer_id',
    /**
    * RabbitMQ message routing key.
    */
    MESSAGING_RABBITMQ_ROUTING_KEY: 'messaging.rabbitmq.routing_key',
    /**
    * Message keys in Kafka are used for grouping alike messages to ensure they&#39;re processed on the same partition. They differ from `messaging.message_id` in that they&#39;re not unique. If the key is `null`, the attribute MUST NOT be set.
    *
    * Note: If the key type is not string, it&#39;s string representation has to be supplied for the attribute. If the key has no unambiguous, canonical string form, don&#39;t include its value.
    */
    MESSAGING_KAFKA_MESSAGE_KEY: 'messaging.kafka.message_key',
    /**
    * Name of the Kafka Consumer Group that is handling the message. Only applies to consumers, not producers.
    */
    MESSAGING_KAFKA_CONSUMER_GROUP: 'messaging.kafka.consumer_group',
    /**
    * Client Id for the Consumer or Producer that is handling the message.
    */
    MESSAGING_KAFKA_CLIENT_ID: 'messaging.kafka.client_id',
    /**
    * Partition the message is sent to.
    */
    MESSAGING_KAFKA_PARTITION: 'messaging.kafka.partition',
    /**
    * A boolean that is true if the message is a tombstone.
    */
    MESSAGING_KAFKA_TOMBSTONE: 'messaging.kafka.tombstone',
    /**
    * A string identifying the remoting system.
    */
    RPC_SYSTEM: 'rpc.system',
    /**
    * The full (logical) name of the service being called, including its package name, if applicable.
    *
    * Note: This is the logical name of the service from the RPC interface perspective, which can be different from the name of any implementing class. The `code.namespace` attribute may be used to store the latter (despite the attribute name, it may include a class name; e.g., class with method actually executing the call on the server side, RPC client stub class on the client side).
    */
    RPC_SERVICE: 'rpc.service',
    /**
    * The name of the (logical) method being called, must be equal to the $method part in the span name.
    *
    * Note: This is the logical name of the method from the RPC interface perspective, which can be different from the name of any implementing method/function. The `code.function` attribute may be used to store the latter (e.g., method actually executing the call on the server side, RPC client stub method on the client side).
    */
    RPC_METHOD: 'rpc.method',
    /**
    * The [numeric status code](https://github.com/grpc/grpc/blob/v1.33.2/doc/statuscodes.md) of the gRPC request.
    */
    RPC_GRPC_STATUS_CODE: 'rpc.grpc.status_code',
    /**
    * Protocol version as in `jsonrpc` property of request/response. Since JSON-RPC 1.0 does not specify this, the value can be omitted.
    */
    RPC_JSONRPC_VERSION: 'rpc.jsonrpc.version',
    /**
    * `id` property of request or response. Since protocol allows id to be int, string, `null` or missing (for notifications), value is expected to be cast to string for simplicity. Use empty string in case of `null` value. Omit entirely if this is a notification.
    */
    RPC_JSONRPC_REQUEST_ID: 'rpc.jsonrpc.request_id',
    /**
    * `error.code` property of response if it is an error response.
    */
    RPC_JSONRPC_ERROR_CODE: 'rpc.jsonrpc.error_code',
    /**
    * `error.message` property of response if it is an error response.
    */
    RPC_JSONRPC_ERROR_MESSAGE: 'rpc.jsonrpc.error_message',
    /**
    * Whether this is a received or sent message.
    */
    MESSAGE_TYPE: 'message.type',
    /**
    * MUST be calculated as two different counters starting from `1` one for sent messages and one for received message.
    *
    * Note: This way we guarantee that the values will be consistent between different implementations.
    */
    MESSAGE_ID: 'message.id',
    /**
    * Compressed size of the message in bytes.
    */
    MESSAGE_COMPRESSED_SIZE: 'message.compressed_size',
    /**
    * Uncompressed size of the message in bytes.
    */
    MESSAGE_UNCOMPRESSED_SIZE: 'message.uncompressed_size',
};
var DbSystemValues = {
    /** Some other SQL database. Fallback only. See notes. */
    OTHER_SQL: 'other_sql',
    /** Microsoft SQL Server. */
    MSSQL: 'mssql',
    /** MySQL. */
    MYSQL: 'mysql',
    /** Oracle Database. */
    ORACLE: 'oracle',
    /** IBM Db2. */
    DB2: 'db2',
    /** PostgreSQL. */
    POSTGRESQL: 'postgresql',
    /** Amazon Redshift. */
    REDSHIFT: 'redshift',
    /** Apache Hive. */
    HIVE: 'hive',
    /** Cloudscape. */
    CLOUDSCAPE: 'cloudscape',
    /** HyperSQL DataBase. */
    HSQLDB: 'hsqldb',
    /** Progress Database. */
    PROGRESS: 'progress',
    /** SAP MaxDB. */
    MAXDB: 'maxdb',
    /** SAP HANA. */
    HANADB: 'hanadb',
    /** Ingres. */
    INGRES: 'ingres',
    /** FirstSQL. */
    FIRSTSQL: 'firstsql',
    /** EnterpriseDB. */
    EDB: 'edb',
    /** InterSystems Caché. */
    CACHE: 'cache',
    /** Adabas (Adaptable Database System). */
    ADABAS: 'adabas',
    /** Firebird. */
    FIREBIRD: 'firebird',
    /** Apache Derby. */
    DERBY: 'derby',
    /** FileMaker. */
    FILEMAKER: 'filemaker',
    /** Informix. */
    INFORMIX: 'informix',
    /** InstantDB. */
    INSTANTDB: 'instantdb',
    /** InterBase. */
    INTERBASE: 'interbase',
    /** MariaDB. */
    MARIADB: 'mariadb',
    /** Netezza. */
    NETEZZA: 'netezza',
    /** Pervasive PSQL. */
    PERVASIVE: 'pervasive',
    /** PointBase. */
    POINTBASE: 'pointbase',
    /** SQLite. */
    SQLITE: 'sqlite',
    /** Sybase. */
    SYBASE: 'sybase',
    /** Teradata. */
    TERADATA: 'teradata',
    /** Vertica. */
    VERTICA: 'vertica',
    /** H2. */
    H2: 'h2',
    /** ColdFusion IMQ. */
    COLDFUSION: 'coldfusion',
    /** Apache Cassandra. */
    CASSANDRA: 'cassandra',
    /** Apache HBase. */
    HBASE: 'hbase',
    /** MongoDB. */
    MONGODB: 'mongodb',
    /** Redis. */
    REDIS: 'redis',
    /** Couchbase. */
    COUCHBASE: 'couchbase',
    /** CouchDB. */
    COUCHDB: 'couchdb',
    /** Microsoft Azure Cosmos DB. */
    COSMOSDB: 'cosmosdb',
    /** Amazon DynamoDB. */
    DYNAMODB: 'dynamodb',
    /** Neo4j. */
    NEO4J: 'neo4j',
    /** Apache Geode. */
    GEODE: 'geode',
    /** Elasticsearch. */
    ELASTICSEARCH: 'elasticsearch',
    /** Memcached. */
    MEMCACHED: 'memcached',
    /** CockroachDB. */
    COCKROACHDB: 'cockroachdb',
};
var DbCassandraConsistencyLevelValues = {
    /** all. */
    ALL: 'all',
    /** each_quorum. */
    EACH_QUORUM: 'each_quorum',
    /** quorum. */
    QUORUM: 'quorum',
    /** local_quorum. */
    LOCAL_QUORUM: 'local_quorum',
    /** one. */
    ONE: 'one',
    /** two. */
    TWO: 'two',
    /** three. */
    THREE: 'three',
    /** local_one. */
    LOCAL_ONE: 'local_one',
    /** any. */
    ANY: 'any',
    /** serial. */
    SERIAL: 'serial',
    /** local_serial. */
    LOCAL_SERIAL: 'local_serial',
};
var FaasTriggerValues = {
    /** A response to some data source operation such as a database or filesystem read/write. */
    DATASOURCE: 'datasource',
    /** To provide an answer to an inbound HTTP request. */
    HTTP: 'http',
    /** A function is set to be executed when messages are sent to a messaging system. */
    PUBSUB: 'pubsub',
    /** A function is scheduled to be executed regularly. */
    TIMER: 'timer',
    /** If none of the others apply. */
    OTHER: 'other',
};
var FaasDocumentOperationValues = {
    /** When a new object is created. */
    INSERT: 'insert',
    /** When an object is modified. */
    EDIT: 'edit',
    /** When an object is deleted. */
    DELETE: 'delete',
};
var FaasInvokedProviderValues = {
    /** Alibaba Cloud. */
    ALIBABA_CLOUD: 'alibaba_cloud',
    /** Amazon Web Services. */
    AWS: 'aws',
    /** Microsoft Azure. */
    AZURE: 'azure',
    /** Google Cloud Platform. */
    GCP: 'gcp',
};
var NetTransportValues = {
    /** ip_tcp. */
    IP_TCP: 'ip_tcp',
    /** ip_udp. */
    IP_UDP: 'ip_udp',
    /** Another IP-based protocol. */
    IP: 'ip',
    /** Unix Domain socket. See below. */
    UNIX: 'unix',
    /** Named or anonymous pipe. See note below. */
    PIPE: 'pipe',
    /** In-process communication. */
    INPROC: 'inproc',
    /** Something else (non IP-based). */
    OTHER: 'other',
};
var NetHostConnectionTypeValues = {
    /** wifi. */
    WIFI: 'wifi',
    /** wired. */
    WIRED: 'wired',
    /** cell. */
    CELL: 'cell',
    /** unavailable. */
    UNAVAILABLE: 'unavailable',
    /** unknown. */
    UNKNOWN: 'unknown',
};
var NetHostConnectionSubtypeValues = {
    /** GPRS. */
    GPRS: 'gprs',
    /** EDGE. */
    EDGE: 'edge',
    /** UMTS. */
    UMTS: 'umts',
    /** CDMA. */
    CDMA: 'cdma',
    /** EVDO Rel. 0. */
    EVDO_0: 'evdo_0',
    /** EVDO Rev. A. */
    EVDO_A: 'evdo_a',
    /** CDMA2000 1XRTT. */
    CDMA2000_1XRTT: 'cdma2000_1xrtt',
    /** HSDPA. */
    HSDPA: 'hsdpa',
    /** HSUPA. */
    HSUPA: 'hsupa',
    /** HSPA. */
    HSPA: 'hspa',
    /** IDEN. */
    IDEN: 'iden',
    /** EVDO Rev. B. */
    EVDO_B: 'evdo_b',
    /** LTE. */
    LTE: 'lte',
    /** EHRPD. */
    EHRPD: 'ehrpd',
    /** HSPAP. */
    HSPAP: 'hspap',
    /** GSM. */
    GSM: 'gsm',
    /** TD-SCDMA. */
    TD_SCDMA: 'td_scdma',
    /** IWLAN. */
    IWLAN: 'iwlan',
    /** 5G NR (New Radio). */
    NR: 'nr',
    /** 5G NRNSA (New Radio Non-Standalone). */
    NRNSA: 'nrnsa',
    /** LTE CA. */
    LTE_CA: 'lte_ca',
};
var HttpFlavorValues = {
    /** HTTP 1.0. */
    HTTP_1_0: '1.0',
    /** HTTP 1.1. */
    HTTP_1_1: '1.1',
    /** HTTP 2. */
    HTTP_2_0: '2.0',
    /** SPDY protocol. */
    SPDY: 'SPDY',
    /** QUIC protocol. */
    QUIC: 'QUIC',
};
var MessagingDestinationKindValues = {
    /** A message sent to a queue. */
    QUEUE: 'queue',
    /** A message sent to a topic. */
    TOPIC: 'topic',
};
var MessagingOperationValues = {
    /** receive. */
    RECEIVE: 'receive',
    /** process. */
    PROCESS: 'process',
};
var RpcGrpcStatusCodeValues = {
    /** OK. */
    OK: 0,
    /** CANCELLED. */
    CANCELLED: 1,
    /** UNKNOWN. */
    UNKNOWN: 2,
    /** INVALID_ARGUMENT. */
    INVALID_ARGUMENT: 3,
    /** DEADLINE_EXCEEDED. */
    DEADLINE_EXCEEDED: 4,
    /** NOT_FOUND. */
    NOT_FOUND: 5,
    /** ALREADY_EXISTS. */
    ALREADY_EXISTS: 6,
    /** PERMISSION_DENIED. */
    PERMISSION_DENIED: 7,
    /** RESOURCE_EXHAUSTED. */
    RESOURCE_EXHAUSTED: 8,
    /** FAILED_PRECONDITION. */
    FAILED_PRECONDITION: 9,
    /** ABORTED. */
    ABORTED: 10,
    /** OUT_OF_RANGE. */
    OUT_OF_RANGE: 11,
    /** UNIMPLEMENTED. */
    UNIMPLEMENTED: 12,
    /** INTERNAL. */
    INTERNAL: 13,
    /** UNAVAILABLE. */
    UNAVAILABLE: 14,
    /** DATA_LOSS. */
    DATA_LOSS: 15,
    /** UNAUTHENTICATED. */
    UNAUTHENTICATED: 16,
};
var MessageTypeValues = {
    /** sent. */
    SENT: 'SENT',
    /** received. */
    RECEIVED: 'RECEIVED',
};
//# sourceMappingURL=SemanticAttributes.js.map

/***/ }),

/***/ "./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DbCassandraConsistencyLevelValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.DbCassandraConsistencyLevelValues),
/* harmony export */   "DbSystemValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.DbSystemValues),
/* harmony export */   "FaasDocumentOperationValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.FaasDocumentOperationValues),
/* harmony export */   "FaasInvokedProviderValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.FaasInvokedProviderValues),
/* harmony export */   "FaasTriggerValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.FaasTriggerValues),
/* harmony export */   "HttpFlavorValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.HttpFlavorValues),
/* harmony export */   "MessageTypeValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.MessageTypeValues),
/* harmony export */   "MessagingDestinationKindValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.MessagingDestinationKindValues),
/* harmony export */   "MessagingOperationValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.MessagingOperationValues),
/* harmony export */   "NetHostConnectionSubtypeValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.NetHostConnectionSubtypeValues),
/* harmony export */   "NetHostConnectionTypeValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.NetHostConnectionTypeValues),
/* harmony export */   "NetTransportValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.NetTransportValues),
/* harmony export */   "RpcGrpcStatusCodeValues": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.RpcGrpcStatusCodeValues),
/* harmony export */   "SemanticAttributes": () => (/* reexport safe */ _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__.SemanticAttributes)
/* harmony export */ });
/* harmony import */ var _SemanticAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/@opentelemetry-semantic-conventions-npm-1.0.1-db37946131-c17dd64941.zip/node_modules/@opentelemetry/semantic-conventions/build/esm/trace/SemanticAttributes.js");
/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/assign/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/cloneObject/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dirtyObject);
}

/***/ }),

/***/ "./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/formatDistance/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/date-fns-npm-2.28.0-c19c5add1b-a0516b2e4f.zip/node_modules/date-fns/esm/_lib/requiredArgs/index.js");








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRDQUE0QztBQUM3Qzs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1U7QUFDVjs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1U7QUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NEO0FBQ0E7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrRUFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0NBQWdDLCtEQUFnQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0NBQXdDO0FBQ3pDOzs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQzs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1U7QUFDVjs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1U7QUFDVjs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1U7QUFDVjs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1U7QUFDVjs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dCO0FBQ0c7QUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0Y7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxXQUFXO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtOQUErTjtBQUMvTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzZDO0FBQzdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGdCQUFnQjtBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxjQUFjO0FBQ2xGLDRCQUE0QixlQUFlO0FBQzNDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGFBQWE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEY7QUFDOUY7QUFDQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwySkFBMko7QUFDM0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixtQkFBbUI7QUFDeks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlKQUF5SixTQUFTO0FBQ2xLO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRixnQ0FBZ0MsR0FBRywwQkFBMEI7QUFDL0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsNkZBQTZGO0FBQ2pMO0FBQ0Esa0RBQWtELDRIQUE0SDtBQUM5SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlSQUFpUjtBQUNqUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUMzRSxNQUFNO0FBQ04sMEVBQTBFO0FBQzFFLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9Ob2RlR3JhcGhTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS9jb21wb25lbnRzL1RyYWNlVG9Mb2dzL0tleVZhbHVlSW5wdXQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2NvcmUvY29tcG9uZW50cy9UcmFjZVRvTG9ncy9UcmFjZVRvTG9nc1NldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvVHJhY2VUb01ldHJpY3MvVHJhY2VUb01ldHJpY3NTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvY29yZS91dGlscy90cmFjaW5nLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9sb2tpL2NvbXBvbmVudHMvTG9raUxhYmVsQnJvd3Nlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2xva2kvY29tcG9uZW50cy9Mb2tpUXVlcnlGaWVsZC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL2xva2kvbGFuZ3VhZ2VfdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3RlbXBvL0NoZWF0U2hlZXQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZW1wby9RdWVyeUVkaXRvci9OYXRpdmVTZWFyY2gudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZW1wby9RdWVyeUVkaXRvci9RdWVyeUZpZWxkLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVtcG8vUXVlcnlFZGl0b3IvU2VydmljZUdyYXBoU2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3RlbXBvL1F1ZXJ5RWRpdG9yL3V0aWxzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZW1wby9jb25maWd1cmF0aW9uL0NvbmZpZ0VkaXRvci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3RlbXBvL2NvbmZpZ3VyYXRpb24vTG9raVNlYXJjaFNldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVtcG8vY29uZmlndXJhdGlvbi9TZWFyY2hTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3RlbXBvL2NvbmZpZ3VyYXRpb24vU2VydmljZUdyYXBoU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZW1wby9kYXRhc291cmNlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS90ZW1wby9ncmFwaFRyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVtcG8vbGFuZ3VhZ2VfcHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3RlbXBvL21vZHVsZS50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvdGVtcG8vcmVzdWx0VHJhbnNmb3JtZXIudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3RlbXBvL3N5bnRheC50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL2FwaS9jb250ZXh0LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vYXBpL2RpYWcuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9hcGkvcHJvcGFnYXRpb24uanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9hcGkvdHJhY2UuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9iYWdnYWdlL2NvbnRleHQtaGVscGVycy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL2JhZ2dhZ2UvaW50ZXJuYWwvYmFnZ2FnZS1pbXBsLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vYmFnZ2FnZS9pbnRlcm5hbC9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9iYWdnYWdlL3R5cGVzLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vYmFnZ2FnZS91dGlscy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL2NvbW1vbi9BdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vY29tbW9uL0V4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL2NvbW1vbi9UaW1lLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vY29udGV4dC9Ob29wQ29udGV4dE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9jb250ZXh0L2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9jb250ZXh0L3R5cGVzLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vZGlhZy9Db21wb25lbnRMb2dnZXIuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9kaWFnL2NvbnNvbGVMb2dnZXIuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9kaWFnL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vZGlhZy9pbnRlcm5hbC9sb2dMZXZlbExvZ2dlci5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL2RpYWcvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL2ludGVybmFsL2dsb2JhbC11dGlscy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL2ludGVybmFsL3NlbXZlci5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3BsYXRmb3JtL2Jyb3dzZXIvZ2xvYmFsVGhpcy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3BsYXRmb3JtL2Jyb3dzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9wcm9wYWdhdGlvbi9Ob29wVGV4dE1hcFByb3BhZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS9wcm9wYWdhdGlvbi9UZXh0TWFwUHJvcGFnYXRvci5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL05vblJlY29yZGluZ1NwYW4uanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS90cmFjZS9Ob29wVHJhY2VyLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2UvTm9vcFRyYWNlclByb3ZpZGVyLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2UvUHJveHlUcmFjZXIuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS90cmFjZS9Qcm94eVRyYWNlclByb3ZpZGVyLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2UvU2FtcGxlci5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL1NhbXBsaW5nUmVzdWx0LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2UvU3Bhbk9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS90cmFjZS9hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2UvY29udGV4dC11dGlscy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL2ludGVybmFsL3RyYWNlc3RhdGUtaW1wbC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL2ludGVybmFsL3RyYWNlc3RhdGUtdmFsaWRhdG9ycy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL2ludGVybmFsL3V0aWxzLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2UvaW52YWxpZC1zcGFuLWNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL2xpbmsuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS90cmFjZS9zcGFuLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2Uvc3Bhbl9jb250ZXh0LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2Uvc3Bhbl9raW5kLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2Uvc3BhbmNvbnRleHQtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS90cmFjZS9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS90cmFjZS90cmFjZV9mbGFncy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktYXBpLW5wbS0xLjEuMC03ZjhjNWEzM2VmLThiZThlOGRkMjAuemlwL25vZGVfbW9kdWxlcy9Ab3BlbnRlbGVtZXRyeS9hcGkvYnVpbGQvZXNtL3RyYWNlL3RyYWNlX3N0YXRlLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2UvdHJhY2VyLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1hcGktbnBtLTEuMS4wLTdmOGM1YTMzZWYtOGJlOGU4ZGQyMC56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L2FwaS9idWlsZC9lc20vdHJhY2UvdHJhY2VyX29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS90cmFjZS90cmFjZXJfcHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL0BvcGVudGVsZW1ldHJ5LWFwaS1ucG0tMS4xLjAtN2Y4YzVhMzNlZi04YmU4ZThkZDIwLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvYXBpL2J1aWxkL2VzbS92ZXJzaW9uLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1zZW1hbnRpYy1jb252ZW50aW9ucy1ucG0tMS4wLjEtZGIzNzk0NjEzMS1jMTdkZDY0OTQxLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvc2VtYW50aWMtY29udmVudGlvbnMvYnVpbGQvZXNtL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1zZW1hbnRpYy1jb252ZW50aW9ucy1ucG0tMS4wLjEtZGIzNzk0NjEzMS1jMTdkZDY0OTQxLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvc2VtYW50aWMtY29udmVudGlvbnMvYnVpbGQvZXNtL3Jlc291cmNlL1NlbWFudGljUmVzb3VyY2VBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1zZW1hbnRpYy1jb252ZW50aW9ucy1ucG0tMS4wLjEtZGIzNzk0NjEzMS1jMTdkZDY0OTQxLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvc2VtYW50aWMtY29udmVudGlvbnMvYnVpbGQvZXNtL3Jlc291cmNlL2luZGV4LmpzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9jYWNoZS9Ab3BlbnRlbGVtZXRyeS1zZW1hbnRpYy1jb252ZW50aW9ucy1ucG0tMS4wLjEtZGIzNzk0NjEzMS1jMTdkZDY0OTQxLnppcC9ub2RlX21vZHVsZXMvQG9wZW50ZWxlbWV0cnkvc2VtYW50aWMtY29udmVudGlvbnMvYnVpbGQvZXNtL3RyYWNlL1NlbWFudGljQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvQG9wZW50ZWxlbWV0cnktc2VtYW50aWMtY29udmVudGlvbnMtbnBtLTEuMC4xLWRiMzc5NDYxMzEtYzE3ZGQ2NDk0MS56aXAvbm9kZV9tb2R1bGVzL0BvcGVudGVsZW1ldHJ5L3NlbWFudGljLWNvbnZlbnRpb25zL2J1aWxkL2VzbS90cmFjZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vLnlhcm4vY2FjaGUvZGF0ZS1mbnMtbnBtLTIuMjguMC1jMTljNWFkZDFiLWEwNTE2YjJlNGYuemlwL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL2RhdGUtZm5zLW5wbS0yLjI4LjAtYzE5YzVhZGQxYi1hMDUxNmIyZTRmLnppcC9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvY2xvbmVPYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uLy55YXJuL2NhY2hlL2RhdGUtZm5zLW5wbS0yLjI4LjAtYzE5YzVhZGQxYi1hMDUxNmIyZTRmLnppcC9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBEYXRhU291cmNlSnNvbkRhdGEsXG4gIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHMsXG4gIEdyYWZhbmFUaGVtZSxcbiAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IElubGluZUZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5saW5lU3dpdGNoLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm9kZUdyYXBoT3B0aW9ucyB7XG4gIGVuYWJsZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVHcmFwaERhdGEgZXh0ZW5kcyBEYXRhU291cmNlSnNvbkRhdGEge1xuICBub2RlR3JhcGg/OiBOb2RlR3JhcGhPcHRpb25zO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzPE5vZGVHcmFwaERhdGE+IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBOb2RlR3JhcGhTZXR0aW5ncyh7IG9wdGlvbnMsIG9uT3B0aW9uc0NoYW5nZSB9OiBQcm9wcykge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRpbmdcIj5Ob2RlIEdyYXBoPC9oMz5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdyBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICB0b29sdGlwPVwiRW5hYmxlcyB0aGUgTm9kZSBHcmFwaCB2aXN1YWxpemF0aW9uIGluIHRoZSB0cmFjZSB2aWV3ZXIuXCJcbiAgICAgICAgICBsYWJlbD1cIkVuYWJsZSBOb2RlIEdyYXBoXCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbmxpbmVTd2l0Y2hcbiAgICAgICAgICAgIGlkPVwiZW5hYmxlTm9kZUdyYXBoXCJcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLm5vZGVHcmFwaD8uZW5hYmxlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ25vZGVHcmFwaCcsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLm5vZGVHcmFwaCxcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICBjb250YWluZXI6IGNzc2BcbiAgICBsYWJlbDogY29udGFpbmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICBgLFxuICByb3c6IGNzc2BcbiAgICBsYWJlbDogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSwgS2V5VmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNlZ21lbnRJbnB1dCwgdXNlU3R5bGVzLCBJbmxpbmVMYWJlbCwgSWNvbiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuY29uc3QgRVFfV0lEVEggPSAzOyAvLyA9IDI0cHggaW4gaW5saW5lIGxhYmVsXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHZhbHVlczogQXJyYXk8S2V5VmFsdWU8c3RyaW5nPj47XG4gIG9uQ2hhbmdlOiAodmFsdWVzOiBBcnJheTxLZXlWYWx1ZTxzdHJpbmc+PikgPT4gdm9pZDtcbiAgaWQ/OiBzdHJpbmc7XG4gIGtleVBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICB2YWx1ZVBsYWNlaG9sZGVyPzogc3RyaW5nO1xufVxuXG5jb25zdCBLZXlWYWx1ZUlucHV0ID0gKHtcbiAgdmFsdWVzLFxuICBvbkNoYW5nZSxcbiAgaWQsXG4gIGtleVBsYWNlaG9sZGVyID0gJ0tleScsXG4gIHZhbHVlUGxhY2Vob2xkZXIgPSAnVmFsdWUgKG9wdGlvbmFsKScsXG59OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICB7dmFsdWVzLmxlbmd0aCA/IChcbiAgICAgICAgdmFsdWVzLm1hcCgodmFsdWUsIGlkeCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFpcn0ga2V5PXtpZHh9PlxuICAgICAgICAgICAgPFNlZ21lbnRJbnB1dFxuICAgICAgICAgICAgICBpZD17YCR7aWR9LWtleS0ke2lkeH1gfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17a2V5UGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5rZXl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgdmFsdWVzLm1hcCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdi5rZXkgPSBTdHJpbmcoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElubGluZUxhYmVsIGFyaWEtbGFiZWw9XCJlcXVhbHNcIiBjbGFzc05hbWU9e3N0eWxlcy5vcGVyYXRvcn0gd2lkdGg9e0VRX1dJRFRIfT5cbiAgICAgICAgICAgICAgPVxuICAgICAgICAgICAgPC9JbmxpbmVMYWJlbD5cbiAgICAgICAgICAgIDxTZWdtZW50SW5wdXRcbiAgICAgICAgICAgICAgaWQ9e2Ake2lkfS12YWx1ZS0ke2lkeH1gfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dmFsdWVQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShcbiAgICAgICAgICAgICAgICAgIHZhbHVlcy5tYXAoKHYsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgIHYudmFsdWUgPSBTdHJpbmcoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZShbLi4udmFsdWVzLnNsaWNlKDAsIGlkeCksIC4uLnZhbHVlcy5zbGljZShpZHggKyAxKV0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LXBhcnRcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVtb3ZlIHRhZ1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ0aW1lc1wiIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIHtpZHggPT09IHZhbHVlcy5sZW5ndGggLSAxID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2UoWy4uLnZhbHVlcywgeyBrZXk6ICcnLCB2YWx1ZTogJycgfV0pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdmLWZvcm0tbGFiZWwgcXVlcnktcGFydFwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFkZCB0YWdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEljb24gbmFtZT1cInBsdXNcIiAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgKSA6IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKFsuLi52YWx1ZXMsIHsga2V5OiAnJywgdmFsdWU6ICcnIH1dKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsIHF1ZXJ5LXBhcnRcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGQgdGFnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5VmFsdWVJbnB1dDtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAke3RoZW1lLnNwYWNpbmcueHN9IDA7XG4gIGAsXG4gIHBhaXI6IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYCxcbiAgb3BlcmF0b3I6IGNzc2BcbiAgICBjb2xvcjogJHt0aGVtZS5wYWxldHRlLm9yYW5nZX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBEYXRhU291cmNlSnNvbkRhdGEsXG4gIERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzLFxuICBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzLFxuICBHcmFmYW5hVGhlbWUsXG4gIEtleVZhbHVlLFxuICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24sXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZVBpY2tlciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCBJbnB1dCwgVGFnc0lucHV0LCB1c2VTdHlsZXMsIElubGluZVN3aXRjaCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IEtleVZhbHVlSW5wdXQgZnJvbSAnLi9LZXlWYWx1ZUlucHV0JztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFjZVRvTG9nc09wdGlvbnMge1xuICBkYXRhc291cmNlVWlkPzogc3RyaW5nO1xuICB0YWdzPzogc3RyaW5nW107XG4gIG1hcHBlZFRhZ3M/OiBBcnJheTxLZXlWYWx1ZTxzdHJpbmc+PjtcbiAgbWFwVGFnTmFtZXNFbmFibGVkPzogYm9vbGVhbjtcbiAgc3BhblN0YXJ0VGltZVNoaWZ0Pzogc3RyaW5nO1xuICBzcGFuRW5kVGltZVNoaWZ0Pzogc3RyaW5nO1xuICBmaWx0ZXJCeVRyYWNlSUQ/OiBib29sZWFuO1xuICBmaWx0ZXJCeVNwYW5JRD86IGJvb2xlYW47XG4gIGxva2lTZWFyY2g/OiBib29sZWFuOyAvLyBsZWdhY3lcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFjZVRvTG9nc0RhdGEgZXh0ZW5kcyBEYXRhU291cmNlSnNvbkRhdGEge1xuICB0cmFjZXNUb0xvZ3M/OiBUcmFjZVRvTG9nc09wdGlvbnM7XG59XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHM8VHJhY2VUb0xvZ3NEYXRhPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gVHJhY2VUb0xvZ3NTZXR0aW5ncyh7IG9wdGlvbnMsIG9uT3B0aW9uc0NoYW5nZSB9OiBQcm9wcykge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MoeyB3aWR0aDogJzEwMCUnIH0pfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRpbmdcIj5UcmFjZSB0byBsb2dzPC9oMz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvVGV4dH0+XG4gICAgICAgIFRyYWNlIHRvIGxvZ3MgbGV0cyB5b3UgbmF2aWdhdGUgZnJvbSBhIHRyYWNlIHNwYW4gdG8gdGhlIHNlbGVjdGVkIGRhdGEgc291cmNlJmFwb3M7cyBsb2dzLlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkIHRvb2x0aXA9XCJUaGUgZGF0YSBzb3VyY2UgdGhlIHRyYWNlIGlzIGdvaW5nIHRvIG5hdmlnYXRlIHRvXCIgbGFiZWw9XCJEYXRhIHNvdXJjZVwiIGxhYmVsV2lkdGg9ezI2fT5cbiAgICAgICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICAgICAgaW5wdXRJZD1cInRyYWNlLXRvLWxvZ3MtZGF0YS1zb3VyY2UtcGlja2VyXCJcbiAgICAgICAgICAgIGZpbHRlcj17KGRzKSA9PiB7XG4gICAgICAgICAgICAgIC8vIFRyYWNlIHRvIGxvZ3Mgb25seSBzdXBwb3J0cyBsb2tpIGFuZCBzcGx1bmsgYXQgdGhlIG1vbWVudFxuICAgICAgICAgICAgICByZXR1cm4gZHMudHlwZSA9PT0gJ2xva2knIHx8IGRzLnR5cGUgPT09ICdncmFmYW5hLXNwbHVuay1kYXRhc291cmNlJztcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjdXJyZW50PXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8uZGF0YXNvdXJjZVVpZH1cbiAgICAgICAgICAgIG5vRGVmYXVsdD17dHJ1ZX1cbiAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZHM6IERhdGFTb3VyY2VJbnN0YW5jZVNldHRpbmdzKSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICBkYXRhc291cmNlVWlkOiBkcy51aWQsXG4gICAgICAgICAgICAgICAgdGFnczogb3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LnRhZ3MsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIHtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8ubWFwVGFnTmFtZXNFbmFibGVkID8gKFxuICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgICB0b29sdGlwPVwiVGFncyB0aGF0IHdpbGwgYmUgdXNlZCBpbiB0aGUgTG9raSBxdWVyeS4gRGVmYXVsdCB0YWdzOiAnY2x1c3RlcicsICdob3N0bmFtZScsICduYW1lc3BhY2UnLCAncG9kJ1wiXG4gICAgICAgICAgICBsYWJlbD1cIlRhZ3NcIlxuICAgICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEtleVZhbHVlSW5wdXRcbiAgICAgICAgICAgICAga2V5UGxhY2Vob2xkZXI9XCJUYWdcIlxuICAgICAgICAgICAgICB2YWx1ZXM9e1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy5tYXBwZWRUYWdzID8/XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LnRhZ3M/Lm1hcCgodGFnKSA9PiAoeyBrZXk6IHRhZyB9KSkgPz9cbiAgICAgICAgICAgICAgICBbXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT5cbiAgICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgICAgbWFwcGVkVGFnczogdixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICApIDogKFxuICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgICB0b29sdGlwPVwiVGFncyB0aGF0IHdpbGwgYmUgdXNlZCBpbiB0aGUgTG9raSBxdWVyeS4gRGVmYXVsdCB0YWdzOiAnY2x1c3RlcicsICdob3N0bmFtZScsICduYW1lc3BhY2UnLCAncG9kJ1wiXG4gICAgICAgICAgICBsYWJlbD1cIlRhZ3NcIlxuICAgICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRhZ3NJbnB1dFxuICAgICAgICAgICAgICB0YWdzPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8udGFnc31cbiAgICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHRhZ3MpID0+XG4gICAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICAgIHRhZ3M6IHRhZ3MsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgKX1cblxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICBsYWJlbD1cIk1hcCB0YWcgbmFtZXNcIlxuICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgIGdyb3dcbiAgICAgICAgICB0b29sdGlwPVwiTWFwIHRyYWNlIHRhZyBuYW1lcyB0byBsb2cgbGFiZWwgbmFtZXMuIEV4OiBrOHMucG9kLm5hbWUgLT4gcG9kXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJbmxpbmVTd2l0Y2hcbiAgICAgICAgICAgIGlkPVwibWFwVGFnTmFtZXNcIlxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy5tYXBUYWdOYW1lc0VuYWJsZWQgPz8gZmFsc2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgbWFwVGFnTmFtZXNFbmFibGVkOiBldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJTcGFuIHN0YXJ0IHRpbWUgc2hpZnRcIlxuICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICAgIGdyb3dcbiAgICAgICAgICB0b29sdGlwPVwiU2hpZnRzIHRoZSBzdGFydCB0aW1lIG9mIHRoZSBzcGFuLiBEZWZhdWx0IDAgKFRpbWUgdW5pdHMgY2FuIGJlIHVzZWQgaGVyZSwgZm9yIGV4YW1wbGU6IDVzLCAxbSwgM2gpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxaFwiXG4gICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgIHNwYW5TdGFydFRpbWVTaGlmdDogdi5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzPy5zcGFuU3RhcnRUaW1lU2hpZnQgfHwgJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgIDwvSW5saW5lRmllbGRSb3c+XG5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkXG4gICAgICAgICAgbGFiZWw9XCJTcGFuIGVuZCB0aW1lIHNoaWZ0XCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIlNoaWZ0cyB0aGUgZW5kIHRpbWUgb2YgdGhlIHNwYW4uIERlZmF1bHQgMCBUaW1lIHVuaXRzIGNhbiBiZSB1c2VkIGhlcmUsIGZvciBleGFtcGxlOiA1cywgMW0sIDNoXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxaFwiXG4gICAgICAgICAgICB3aWR0aD17NDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9Mb2dzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9Mb2dzLFxuICAgICAgICAgICAgICAgIHNwYW5FbmRUaW1lU2hpZnQ6IHYuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8uc3BhbkVuZFRpbWVTaGlmdCB8fCAnJ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cblxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICBsYWJlbD1cIkZpbHRlciBieSBUcmFjZSBJRFwiXG4gICAgICAgICAgbGFiZWxXaWR0aD17MjZ9XG4gICAgICAgICAgZ3Jvd1xuICAgICAgICAgIHRvb2x0aXA9XCJGaWx0ZXJzIGxvZ3MgYnkgVHJhY2UgSUQuIEFwcGVuZHMgJ3w9PHRyYWNlIGlkPicgdG8gdGhlIHF1ZXJ5LlwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5saW5lU3dpdGNoXG4gICAgICAgICAgICBpZD1cImZpbHRlckJ5VHJhY2VJRFwiXG4gICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3M/LmZpbHRlckJ5VHJhY2VJRH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3RyYWNlc1RvTG9ncycsIHtcbiAgICAgICAgICAgICAgICAuLi5vcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJCeVRyYWNlSUQ6IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cblxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICBsYWJlbD1cIkZpbHRlciBieSBTcGFuIElEXCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgICBncm93XG4gICAgICAgICAgdG9vbHRpcD1cIkZpbHRlcnMgbG9ncyBieSBTcGFuIElELiBBcHBlbmRzICd8PTxzcGFuIGlkPicgdG8gdGhlIHF1ZXJ5LlwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5saW5lU3dpdGNoXG4gICAgICAgICAgICBpZD1cImZpbHRlckJ5U3BhbklEXCJcbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8uZmlsdGVyQnlTcGFuSUR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb0xvZ3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb0xvZ3MsXG4gICAgICAgICAgICAgICAgZmlsdGVyQnlTcGFuSUQ6IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGluZm9UZXh0OiBjc3NgXG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBEYXRhU291cmNlSnNvbkRhdGEsXG4gIERhdGFTb3VyY2VQbHVnaW5PcHRpb25zRWRpdG9yUHJvcHMsXG4gIEdyYWZhbmFUaGVtZSxcbiAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VQaWNrZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCBJbnB1dCwgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNlVG9NZXRyaWNzT3B0aW9ucyB7XG4gIGRhdGFzb3VyY2VVaWQ/OiBzdHJpbmc7XG4gIHF1ZXJ5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2VUb01ldHJpY3NEYXRhIGV4dGVuZHMgRGF0YVNvdXJjZUpzb25EYXRhIHtcbiAgdHJhY2VzVG9NZXRyaWNzPzogVHJhY2VUb01ldHJpY3NPcHRpb25zO1xufVxuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzPFRyYWNlVG9NZXRyaWNzRGF0YT4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIFRyYWNlVG9NZXRyaWNzU2V0dGluZ3MoeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHsgd2lkdGg6ICcxMDAlJyB9KX0+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+VHJhY2UgdG8gbWV0cmljczwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1RleHR9PlxuICAgICAgICBUcmFjZSB0byBtZXRyaWNzIGxldHMgeW91IG5hdmlnYXRlIGZyb20gYSB0cmFjZSBzcGFuIHRvIHRoZSBzZWxlY3RlZCBkYXRhIHNvdXJjZS5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8SW5saW5lRmllbGRSb3cgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgPElubGluZUZpZWxkIHRvb2x0aXA9XCJUaGUgZGF0YSBzb3VyY2UgdGhlIHRyYWNlIGlzIGdvaW5nIHRvIG5hdmlnYXRlIHRvXCIgbGFiZWw9XCJEYXRhIHNvdXJjZVwiIGxhYmVsV2lkdGg9ezI2fT5cbiAgICAgICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICAgICAgaW5wdXRJZD1cInRyYWNlLXRvLW1ldHJpY3MtZGF0YS1zb3VyY2UtcGlja2VyXCJcbiAgICAgICAgICAgIHBsdWdpbklkPVwicHJvbWV0aGV1c1wiXG4gICAgICAgICAgICBjdXJyZW50PXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTWV0cmljcz8uZGF0YXNvdXJjZVVpZH1cbiAgICAgICAgICAgIG5vRGVmYXVsdD17dHJ1ZX1cbiAgICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZHMpID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9NZXRyaWNzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzLFxuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6IGRzLnVpZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICB7b3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3M/LmRhdGFzb3VyY2VVaWQgPyAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICBmaWxsPVwidGV4dFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAndHJhY2VzVG9NZXRyaWNzJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEudHJhY2VzVG9NZXRyaWNzLFxuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENsZWFyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cblxuICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICBsYWJlbD1cIlF1ZXJ5XCJcbiAgICAgICAgICBsYWJlbFdpZHRoPXsyNn1cbiAgICAgICAgICB0b29sdGlwPVwiVGhlIFByb21ldGhldXMgcXVlcnkgdGhhdCB3aWxsIHJ1biB3aGVuIG5hdmlnYXRpbmcgZnJvbSBhIHRyYWNlIHRvIG1ldHJpY3NcIlxuICAgICAgICAgIGdyb3dcbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJRdWVyeVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTWV0cmljcz8ucXVlcnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICd0cmFjZXNUb01ldHJpY3MnLCB7XG4gICAgICAgICAgICAgICAgLi4ub3B0aW9ucy5qc29uRGF0YS50cmFjZXNUb01ldHJpY3MsXG4gICAgICAgICAgICAgICAgcXVlcnk6IGUuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4gKHtcbiAgaW5mb1RleHQ6IGNzc2BcbiAgICBwYWRkaW5nLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLm1kfTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dFNlbWlXZWFrfTtcbiAgYCxcbiAgcm93OiBjc3NgXG4gICAgbGFiZWw6IHJvdztcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGAsXG59KTtcbiIsIi8qKlxuICogR2V0IG5vbiBvdmVybGFwcGluZyBkdXJhdGlvbiBvZiB0aGUgcmFuZ2VzIGFzIHRoZXkgY2FuIG92ZXJsYXAgb3IgaGF2ZSBnYXBzLlxuICovXG5pbXBvcnQgeyBGaWVsZFR5cGUsIE11dGFibGVEYXRhRnJhbWUsIE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMgYXMgRmllbGRzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb25PdmVybGFwcGluZ0R1cmF0aW9uKHJhbmdlczogQXJyYXk8W251bWJlciwgbnVtYmVyXT4pOiBudW1iZXIge1xuICByYW5nZXMuc29ydCgoYSwgYikgPT4gYVswXSAtIGJbMF0pO1xuICBjb25zdCBtZXJnZWRSYW5nZXMgPSByYW5nZXMucmVkdWNlKChhY2MsIHJhbmdlKSA9PiB7XG4gICAgaWYgKCFhY2MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gW3JhbmdlXTtcbiAgICB9XG4gICAgY29uc3QgdGFpbCA9IGFjYy5zbGljZSgtMSlbMF07XG4gICAgY29uc3QgW3ByZXZTdGFydCwgcHJldkVuZF0gPSB0YWlsO1xuICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHJhbmdlO1xuICAgIGlmIChlbmQgPCBwcmV2RW5kKSB7XG4gICAgICAvLyBJbiB0aGlzIGNhc2UgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgaW5zaWRlIHRoZSBwcmV2IHJhbmdlIHNvIHdlIGNhbiBqdXN0IGlnbm9yZSBpdC5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gcHJldkVuZCkge1xuICAgICAgLy8gVGhlcmUgaXMgbm8gb3ZlcmxhcCBzbyB3ZSBjYW4ganVzdCBhZGQgaXQgdG8gc3RhY2tcbiAgICAgIHJldHVybiBbLi4uYWNjLCByYW5nZV07XG4gICAgfVxuXG4gICAgLy8gV2Uga25vdyB0aGVyZSBpcyBvdmVybGFwIGFuZCBjdXJyZW50IHJhbmdlIGVuZHMgbGF0ZXIgdGhhbiBwcmV2aW91cyBzbyB3ZSBjYW4ganVzdCBleHRlbmQgdGhlIHJhbmdlXG4gICAgcmV0dXJuIFsuLi5hY2Muc2xpY2UoMCwgLTEpLCBbcHJldlN0YXJ0LCBlbmRdXSBhcyBBcnJheTxbbnVtYmVyLCBudW1iZXJdPjtcbiAgfSwgW10gYXMgQXJyYXk8W251bWJlciwgbnVtYmVyXT4pO1xuXG4gIHJldHVybiBtZXJnZWRSYW5nZXMucmVkdWNlKChhY2MsIHJhbmdlKSA9PiB7XG4gICAgcmV0dXJuIGFjYyArIChyYW5nZVsxXSAtIHJhbmdlWzBdKTtcbiAgfSwgMCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG1hcCBvZiB0aGUgc3BhbnMgd2l0aCBjaGlsZHJlbiBhcnJheSBmb3IgZWFzaWVyIHByb2Nlc3NpbmcuIEl0IHdpbGwgYWxzbyBjb250YWluIGVtcHR5IHNwYW5zIGluIGNhc2VcbiAqIHNwYW4gaXMgbWlzc2luZyBidXQgb3RoZXIgc3BhbnMgYXJlIGl0J3MgY2hpbGRyZW4uIFRoaXMgaXMgbW9yZSBnZW5lcmljIGJlY2F1c2UgaXQgbmVlZHMgdG8gYWxsb3cgaXRlcmF0aW5nIG92ZXJcbiAqIGJvdGggYXJyYXlzIGFuZCBkYXRhZnJhbWUgdmlld3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3Bhbk1hcDxUPihnZXRTcGFuOiAoaW5kZXg6IG51bWJlcikgPT4geyBzcGFuOiBUOyBpZDogc3RyaW5nOyBwYXJlbnRJZHM6IHN0cmluZ1tdIH0gfCB1bmRlZmluZWQpOiB7XG4gIFtpZDogc3RyaW5nXTogeyBzcGFuOiBUOyBjaGlsZHJlbjogc3RyaW5nW10gfTtcbn0ge1xuICBjb25zdCBzcGFuTWFwOiB7IFtpZDogc3RyaW5nXTogeyBzcGFuPzogVDsgY2hpbGRyZW46IHN0cmluZ1tdIH0gfSA9IHt9O1xuXG4gIGxldCBzcGFuO1xuICBmb3IgKGxldCBpbmRleCA9IDA7IChzcGFuID0gZ2V0U3BhbihpbmRleCkpLCAhIXNwYW47IGluZGV4KyspIHtcbiAgICBpZiAoIXNwYW5NYXBbc3Bhbi5pZF0pIHtcbiAgICAgIHNwYW5NYXBbc3Bhbi5pZF0gPSB7XG4gICAgICAgIHNwYW46IHNwYW4uc3BhbixcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3Bhbk1hcFtzcGFuLmlkXS5zcGFuID0gc3Bhbi5zcGFuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcGFyZW50SWQgb2Ygc3Bhbi5wYXJlbnRJZHMpIHtcbiAgICAgIGlmIChwYXJlbnRJZCkge1xuICAgICAgICBpZiAoIXNwYW5NYXBbcGFyZW50SWRdKSB7XG4gICAgICAgICAgc3Bhbk1hcFtwYXJlbnRJZF0gPSB7XG4gICAgICAgICAgICBzcGFuOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjaGlsZHJlbjogW3NwYW4uaWRdLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3Bhbk1hcFtwYXJlbnRJZF0uY2hpbGRyZW4ucHVzaChzcGFuLmlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3Bhbk1hcCBhcyB7IFtpZDogc3RyaW5nXTogeyBzcGFuOiBUOyBjaGlsZHJlbjogc3RyaW5nW10gfSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHMoZHVyYXRpb246IG51bWJlciwgdHJhY2VEdXJhdGlvbjogbnVtYmVyLCBzZWxmRHVyYXRpb246IG51bWJlcikge1xuICByZXR1cm4ge1xuICAgIG1haW46IGAke3RvRml4ZWROb1RyYWlsaW5nWmVyb3MoZHVyYXRpb24pfW1zICgke3RvRml4ZWROb1RyYWlsaW5nWmVyb3MoKGR1cmF0aW9uIC8gdHJhY2VEdXJhdGlvbikgKiAxMDApfSUpYCxcbiAgICBzZWNvbmRhcnk6IGAke3RvRml4ZWROb1RyYWlsaW5nWmVyb3Moc2VsZkR1cmF0aW9uKX1tcyAoJHt0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKFxuICAgICAgKHNlbGZEdXJhdGlvbiAvIGR1cmF0aW9uKSAqIDEwMFxuICAgICl9JSlgLFxuICB9O1xufVxuXG5mdW5jdGlvbiB0b0ZpeGVkTm9UcmFpbGluZ1plcm9zKG46IG51bWJlcikge1xuICByZXR1cm4gcGFyc2VGbG9hdChuLnRvRml4ZWQoMikpO1xufVxuXG4vKipcbiAqIENyZWF0ZSBkZWZhdWx0IGZyYW1lcyB1c2VkIHdoZW4gcmV0dXJuaW5nIGRhdGEgZm9yIG5vZGUgZ3JhcGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRnJhbWVzKCkge1xuICBjb25zdCBub2Rlc0ZyYW1lID0gbmV3IE11dGFibGVEYXRhRnJhbWUoe1xuICAgIGZpZWxkczogW1xuICAgICAgeyBuYW1lOiBGaWVsZHMuaWQsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICAgIHsgbmFtZTogRmllbGRzLnRpdGxlLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy5zdWJUaXRsZSwgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiBGaWVsZHMubWFpblN0YXQsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsIGNvbmZpZzogeyBkaXNwbGF5TmFtZTogJ1RvdGFsIHRpbWUgKCUgb2YgdHJhY2UpJyB9IH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy5zZWNvbmRhcnlTdGF0LCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLCBjb25maWc6IHsgZGlzcGxheU5hbWU6ICdTZWxmIHRpbWUgKCUgb2YgdG90YWwpJyB9IH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IEZpZWxkcy5jb2xvcixcbiAgICAgICAgdHlwZTogRmllbGRUeXBlLm51bWJlcixcbiAgICAgICAgY29uZmlnOiB7IGNvbG9yOiB7IG1vZGU6ICdjb250aW51b3VzLUdyWWxSZCcgfSwgZGlzcGxheU5hbWU6ICdTZWxmIHRpbWUgLyBUcmFjZSBkdXJhdGlvbicgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBtZXRhOiB7XG4gICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ25vZGVHcmFwaCcsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgZWRnZXNGcmFtZSA9IG5ldyBNdXRhYmxlRGF0YUZyYW1lKHtcbiAgICBmaWVsZHM6IFtcbiAgICAgIHsgbmFtZTogRmllbGRzLmlkLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6IEZpZWxkcy50YXJnZXQsIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcgfSxcbiAgICAgIHsgbmFtZTogRmllbGRzLnNvdXJjZSwgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgIF0sXG4gICAgbWV0YToge1xuICAgICAgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICdub2RlR3JhcGgnLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBbbm9kZXNGcmFtZSwgZWRnZXNGcmFtZV07XG59XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IHNvcnRCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0IH0gZnJvbSAncmVhY3Qtd2luZG93JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBIaWdobGlnaHRQYXJ0LFxuICBIb3Jpem9udGFsR3JvdXAsXG4gIElucHV0LFxuICBMYWJlbCxcbiAgTG9hZGluZ1BsYWNlaG9sZGVyLFxuICB3aXRoVGhlbWUyLFxuICBCcm93c2VyTGFiZWwgYXMgTG9raUxhYmVsLFxuICBmdXp6eU1hdGNoLFxufSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCBQcm9tUWxMYW5ndWFnZVByb3ZpZGVyIGZyb20gJy4uLy4uL3Byb21ldGhldXMvbGFuZ3VhZ2VfcHJvdmlkZXInO1xuaW1wb3J0IExva2lMYW5ndWFnZVByb3ZpZGVyIGZyb20gJy4uL2xhbmd1YWdlX3Byb3ZpZGVyJztcbmltcG9ydCB7IGVzY2FwZUxhYmVsVmFsdWVJbkV4YWN0U2VsZWN0b3IsIGVzY2FwZUxhYmVsVmFsdWVJblJlZ2V4U2VsZWN0b3IgfSBmcm9tICcuLi9sYW5ndWFnZV91dGlscyc7XG5cbi8vIEhhcmQgbGltaXQgb24gbGFiZWxzIHRvIHJlbmRlclxuY29uc3QgTUFYX0xBQkVMX0NPVU5UID0gMTAwMDtcbmNvbnN0IE1BWF9WQUxVRV9DT1VOVCA9IDEwMDAwO1xuY29uc3QgTUFYX0FVVE9fU0VMRUNUID0gNDtcbmNvbnN0IEVNUFRZX1NFTEVDVE9SID0gJ3t9JztcblxuZXhwb3J0IGludGVyZmFjZSBCcm93c2VyUHJvcHMge1xuICAvLyBUT0RPICMzMzk3NjogSXMgaXQgcG9zc2libGUgdG8gdXNlIGEgY29tbW9uIGludGVyZmFjZSBoZXJlPyBGb3IgZXhhbXBsZTogTGFiZWxzTGFuZ3VhZ2VQcm92aWRlclxuICBsYW5ndWFnZVByb3ZpZGVyOiBMb2tpTGFuZ3VhZ2VQcm92aWRlciB8IFByb21RbExhbmd1YWdlUHJvdmlkZXI7XG4gIG9uQ2hhbmdlOiAoc2VsZWN0b3I6IHN0cmluZykgPT4gdm9pZDtcbiAgdGhlbWU6IEdyYWZhbmFUaGVtZTI7XG4gIGF1dG9TZWxlY3Q/OiBudW1iZXI7XG4gIGhpZGU/OiAoKSA9PiB2b2lkO1xuICBsYXN0VXNlZExhYmVsczogc3RyaW5nW107XG4gIHN0b3JlTGFzdFVzZWRMYWJlbHM6IChsYWJlbHM6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICBkZWxldGVMYXN0VXNlZExhYmVsczogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIEJyb3dzZXJTdGF0ZSB7XG4gIGxhYmVsczogU2VsZWN0YWJsZUxhYmVsW107XG4gIHNlYXJjaFRlcm06IHN0cmluZztcbiAgc3RhdHVzOiBzdHJpbmc7XG4gIGVycm9yOiBzdHJpbmc7XG4gIHZhbGlkYXRpb25TdGF0dXM6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEZhY2V0dGFibGVWYWx1ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICBoaWdobGlnaHRQYXJ0cz86IEhpZ2hsaWdodFBhcnRbXTtcbiAgb3JkZXI/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0YWJsZUxhYmVsIHtcbiAgbmFtZTogc3RyaW5nO1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIGxvYWRpbmc/OiBib29sZWFuO1xuICB2YWx1ZXM/OiBGYWNldHRhYmxlVmFsdWVbXTtcbiAgaGlkZGVuPzogYm9vbGVhbjtcbiAgZmFjZXRzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTZWxlY3RvcihsYWJlbHM6IFNlbGVjdGFibGVMYWJlbFtdKTogc3RyaW5nIHtcbiAgY29uc3Qgc2VsZWN0ZWRMYWJlbHMgPSBbXTtcbiAgZm9yIChjb25zdCBsYWJlbCBvZiBsYWJlbHMpIHtcbiAgICBpZiAobGFiZWwuc2VsZWN0ZWQgJiYgbGFiZWwudmFsdWVzICYmIGxhYmVsLnZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZFZhbHVlcyA9IGxhYmVsLnZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5zZWxlY3RlZCkubWFwKCh2YWx1ZSkgPT4gdmFsdWUubmFtZSk7XG4gICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBzZWxlY3RlZExhYmVscy5wdXNoKGAke2xhYmVsLm5hbWV9PX5cIiR7c2VsZWN0ZWRWYWx1ZXMubWFwKGVzY2FwZUxhYmVsVmFsdWVJblJlZ2V4U2VsZWN0b3IpLmpvaW4oJ3wnKX1cImApO1xuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgc2VsZWN0ZWRMYWJlbHMucHVzaChgJHtsYWJlbC5uYW1lfT1cIiR7ZXNjYXBlTGFiZWxWYWx1ZUluRXhhY3RTZWxlY3RvcihzZWxlY3RlZFZhbHVlc1swXSl9XCJgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFsneycsIHNlbGVjdGVkTGFiZWxzLmpvaW4oJywnKSwgJ30nXS5qb2luKCcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZhY2V0TGFiZWxzKFxuICBsYWJlbHM6IFNlbGVjdGFibGVMYWJlbFtdLFxuICBwb3NzaWJsZUxhYmVsczogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+LFxuICBsYXN0RmFjZXR0ZWQ/OiBzdHJpbmdcbik6IFNlbGVjdGFibGVMYWJlbFtdIHtcbiAgcmV0dXJuIGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgY29uc3QgcG9zc2libGVWYWx1ZXMgPSBwb3NzaWJsZUxhYmVsc1tsYWJlbC5uYW1lXTtcbiAgICBpZiAocG9zc2libGVWYWx1ZXMpIHtcbiAgICAgIGxldCBleGlzdGluZ1ZhbHVlczogRmFjZXR0YWJsZVZhbHVlW107XG4gICAgICBpZiAobGFiZWwubmFtZSA9PT0gbGFzdEZhY2V0dGVkICYmIGxhYmVsLnZhbHVlcykge1xuICAgICAgICAvLyBGYWNldHRpbmcgdGhpcyBsYWJlbCwgc2hvdyBhbGwgdmFsdWVzXG4gICAgICAgIGV4aXN0aW5nVmFsdWVzID0gbGFiZWwudmFsdWVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gS2VlcCBzZWxlY3Rpb24gaW4gb3RoZXIgZmFjZXRzXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWVzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoXG4gICAgICAgICAgbGFiZWwudmFsdWVzPy5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5zZWxlY3RlZCkubWFwKCh2YWx1ZSkgPT4gdmFsdWUubmFtZSkgfHwgW11cbiAgICAgICAgKTtcbiAgICAgICAgLy8gVmFsdWVzIGZvciB0aGlzIGxhYmVsIGhhdmUgbm90IGJlZW4gcmVxdWVzdGVkIHlldCwgbGV0J3MgdXNlIHRoZSBmYWNldHRlZCBvbmVzIGFzIHRoZSBpbml0aWFsIHZhbHVlc1xuICAgICAgICBleGlzdGluZ1ZhbHVlcyA9IHBvc3NpYmxlVmFsdWVzLm1hcCgodmFsdWUpID0+ICh7IG5hbWU6IHZhbHVlLCBzZWxlY3RlZDogc2VsZWN0ZWRWYWx1ZXMuaGFzKHZhbHVlKSB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4geyAuLi5sYWJlbCwgbG9hZGluZzogZmFsc2UsIHZhbHVlczogZXhpc3RpbmdWYWx1ZXMsIGZhY2V0czogZXhpc3RpbmdWYWx1ZXMubGVuZ3RoIH07XG4gICAgfVxuXG4gICAgLy8gTGFiZWwgaXMgZmFjZXR0ZWQgb3V0LCBoaWRlIGFsbCB2YWx1ZXNcbiAgICByZXR1cm4geyAuLi5sYWJlbCwgbG9hZGluZzogZmFsc2UsIGhpZGRlbjogIXBvc3NpYmxlVmFsdWVzLCB2YWx1ZXM6IHVuZGVmaW5lZCwgZmFjZXRzOiAwIH07XG4gIH0pO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnNlY29uZGFyeX07XG4gICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgICB3aWR0aDogMTAwJTtcbiAgYCxcbiAgbGlzdDogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIGAsXG4gIHNlY3Rpb246IGNzc2BcbiAgICAmICsgJiB7XG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZygyLCAwKX07XG4gICAgfVxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYCxcbiAgc2VsZWN0b3I6IGNzc2BcbiAgICBmb250LWZhbWlseTogJHt0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHlNb25vc3BhY2V9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIHN0YXR1czogY3NzYFxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygwLjUpfTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAvKiB1c2luZyBhYnNvbHV0ZSBwb3NpdGlvbmluZyBiZWNhdXNlIGZsZXggaW50ZXJmZXJlcyB3aXRoIGVsbGlwc2lzICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcyBsaW5lYXI7XG4gICAgb3BhY2l0eTogMDtcbiAgYCxcbiAgc3RhdHVzU2hvd2luZzogY3NzYFxuICAgIG9wYWNpdHk6IDE7XG4gIGAsXG4gIGVycm9yOiBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmVycm9yLm1haW59O1xuICBgLFxuICB2YWx1ZUxpc3Q6IGNzc2BcbiAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIHZhbHVlTGlzdFdyYXBwZXI6IGNzc2BcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci5tZWRpdW19O1xuICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDEsIDApfTtcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSwgMCwgMSwgMSl9O1xuICBgLFxuICB2YWx1ZUxpc3RBcmVhOiBjc3NgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbiAgdmFsdWVUaXRsZTogY3NzYFxuICAgIG1hcmdpbi1sZWZ0OiAtJHt0aGVtZS5zcGFjaW5nKDAuNSl9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIHZhbGlkYXRpb25TdGF0dXM6IGNzc2BcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5tYXhDb250cmFzdH07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBgLFxufSk7XG5cbmV4cG9ydCBjbGFzcyBVbnRoZW1lZExva2lMYWJlbEJyb3dzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QnJvd3NlclByb3BzLCBCcm93c2VyU3RhdGU+IHtcbiAgc3RhdGU6IEJyb3dzZXJTdGF0ZSA9IHtcbiAgICBsYWJlbHM6IFtdIGFzIFNlbGVjdGFibGVMYWJlbFtdLFxuICAgIHNlYXJjaFRlcm06ICcnLFxuICAgIHN0YXR1czogJ1JlYWR5JyxcbiAgICBlcnJvcjogJycsXG4gICAgdmFsaWRhdGlvblN0YXR1czogJycsXG4gIH07XG5cbiAgb25DaGFuZ2VTZWFyY2ggPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFRlcm06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBvbkNsaWNrUnVuTG9nc1F1ZXJ5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gYnVpbGRTZWxlY3Rvcih0aGlzLnN0YXRlLmxhYmVscyk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzZWxlY3Rvcik7XG4gIH07XG5cbiAgb25DbGlja1J1bk1ldHJpY3NRdWVyeSA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGJ1aWxkU2VsZWN0b3IodGhpcy5zdGF0ZS5sYWJlbHMpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gYHJhdGUoJHtzZWxlY3Rvcn1bJF9faW50ZXJ2YWxdKWA7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShxdWVyeSk7XG4gIH07XG5cbiAgb25DbGlja0NsZWFyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbHM6IFNlbGVjdGFibGVMYWJlbFtdID0gc3RhdGUubGFiZWxzLm1hcCgobGFiZWwpID0+ICh7XG4gICAgICAgIC4uLmxhYmVsLFxuICAgICAgICB2YWx1ZXM6IHVuZGVmaW5lZCxcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgaGlkZGVuOiBmYWxzZSxcbiAgICAgICAgZmFjZXRzOiB1bmRlZmluZWQsXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4geyBsYWJlbHMsIHNlYXJjaFRlcm06ICcnLCBzdGF0dXM6ICcnLCBlcnJvcjogJycsIHZhbGlkYXRpb25TdGF0dXM6ICcnIH07XG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5kZWxldGVMYXN0VXNlZExhYmVscygpO1xuICB9O1xuXG4gIG9uQ2xpY2tMYWJlbCA9IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5zdGF0ZS5sYWJlbHMuZmluZCgobCkgPT4gbC5uYW1lID09PSBuYW1lKTtcbiAgICBpZiAoIWxhYmVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFRvZ2dsZSBzZWxlY3RlZCBzdGF0ZVxuICAgIGNvbnN0IHNlbGVjdGVkID0gIWxhYmVsLnNlbGVjdGVkO1xuICAgIGxldCBuZXh0VmFsdWU6IFBhcnRpYWw8U2VsZWN0YWJsZUxhYmVsPiA9IHsgc2VsZWN0ZWQgfTtcbiAgICBpZiAobGFiZWwudmFsdWVzICYmICFzZWxlY3RlZCkge1xuICAgICAgLy8gRGVzZWxlY3QgYWxsIHZhbHVlcyBpZiBsYWJlbCB3YXMgZGVzZWxlY3RlZFxuICAgICAgY29uc3QgdmFsdWVzID0gbGFiZWwudmFsdWVzLm1hcCgodmFsdWUpID0+ICh7IC4uLnZhbHVlLCBzZWxlY3RlZDogZmFsc2UgfSkpO1xuICAgICAgbmV4dFZhbHVlID0geyAuLi5uZXh0VmFsdWUsIGZhY2V0czogMCwgdmFsdWVzIH07XG4gICAgfVxuICAgIC8vIFJlc2V0dGluZyBzZWFyY2ggdG8gcHJldmVudCBlbXB0eSByZXN1bHRzXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFRlcm06ICcnIH0pO1xuICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZShuYW1lLCBuZXh0VmFsdWUsICcnLCAoKSA9PiB0aGlzLmRvRmFjZXR0aW5nRm9yTGFiZWwobmFtZSkpO1xuICB9O1xuXG4gIG9uQ2xpY2tWYWx1ZSA9IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5zdGF0ZS5sYWJlbHMuZmluZCgobCkgPT4gbC5uYW1lID09PSBuYW1lKTtcbiAgICBpZiAoIWxhYmVsIHx8ICFsYWJlbC52YWx1ZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gUmVzZXR0aW5nIHNlYXJjaCB0byBwcmV2ZW50IGVtcHR5IHJlc3VsdHNcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVGVybTogJycgfSk7XG4gICAgLy8gVG9nZ2xpbmcgdmFsdWUgZm9yIHNlbGVjdGVkIGxhYmVsLCBsZWF2aW5nIG90aGVyIHZhbHVlcyBpbnRhY3RcbiAgICBjb25zdCB2YWx1ZXMgPSBsYWJlbC52YWx1ZXMubWFwKCh2KSA9PiAoeyAuLi52LCBzZWxlY3RlZDogdi5uYW1lID09PSB2YWx1ZSA/ICF2LnNlbGVjdGVkIDogdi5zZWxlY3RlZCB9KSk7XG4gICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKG5hbWUsIHsgdmFsdWVzIH0sICcnLCAoKSA9PiB0aGlzLmRvRmFjZXR0aW5nKG5hbWUpKTtcbiAgfTtcblxuICBvbkNsaWNrVmFsaWRhdGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBidWlsZFNlbGVjdG9yKHRoaXMuc3RhdGUubGFiZWxzKTtcbiAgICB0aGlzLnZhbGlkYXRlU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9O1xuXG4gIHVwZGF0ZUxhYmVsU3RhdGUobmFtZTogc3RyaW5nLCB1cGRhdGVkRmllbGRzOiBQYXJ0aWFsPFNlbGVjdGFibGVMYWJlbD4sIHN0YXR1cyA9ICcnLCBjYj86ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxzOiBTZWxlY3RhYmxlTGFiZWxbXSA9IHN0YXRlLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgIGlmIChsYWJlbC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHsgLi4ubGFiZWwsIC4uLnVwZGF0ZWRGaWVsZHMgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICB9KTtcbiAgICAgIC8vIE5ldyBzdGF0dXMgb3ZlcnJpZGVzIGVycm9yc1xuICAgICAgY29uc3QgZXJyb3IgPSBzdGF0dXMgPyAnJyA6IHN0YXRlLmVycm9yO1xuICAgICAgcmV0dXJuIHsgbGFiZWxzLCBzdGF0dXMsIGVycm9yLCB2YWxpZGF0aW9uU3RhdHVzOiAnJyB9O1xuICAgIH0sIGNiKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbGFuZ3VhZ2VQcm92aWRlciwgYXV0b1NlbGVjdCA9IE1BWF9BVVRPX1NFTEVDVCwgbGFzdFVzZWRMYWJlbHMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGxhbmd1YWdlUHJvdmlkZXIpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkTGFiZWxzOiBzdHJpbmdbXSA9IGxhc3RVc2VkTGFiZWxzO1xuICAgICAgbGFuZ3VhZ2VQcm92aWRlci5zdGFydCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBsZXQgcmF3TGFiZWxzOiBzdHJpbmdbXSA9IGxhbmd1YWdlUHJvdmlkZXIuZ2V0TGFiZWxLZXlzKCk7XG4gICAgICAgIGlmIChyYXdMYWJlbHMubGVuZ3RoID4gTUFYX0xBQkVMX0NPVU5UKSB7XG4gICAgICAgICAgY29uc3QgZXJyb3IgPSBgVG9vIG1hbnkgbGFiZWxzIGZvdW5kIChzaG93aW5nIG9ubHkgJHtNQVhfTEFCRUxfQ09VTlR9IG9mICR7cmF3TGFiZWxzLmxlbmd0aH0pYDtcbiAgICAgICAgICByYXdMYWJlbHMgPSByYXdMYWJlbHMuc2xpY2UoMCwgTUFYX0xBQkVMX0NPVU5UKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXV0by1zZWxlY3QgYWxsIGxhYmVscyBpZiBsYWJlbCBsaXN0IGlzIHNtYWxsIGVub3VnaFxuICAgICAgICBjb25zdCBsYWJlbHM6IFNlbGVjdGFibGVMYWJlbFtdID0gcmF3TGFiZWxzLm1hcCgobGFiZWwsIGksIGFycikgPT4gKHtcbiAgICAgICAgICBuYW1lOiBsYWJlbCxcbiAgICAgICAgICBzZWxlY3RlZDogKGFyci5sZW5ndGggPD0gYXV0b1NlbGVjdCAmJiBzZWxlY3RlZExhYmVscy5sZW5ndGggPT09IDApIHx8IHNlbGVjdGVkTGFiZWxzLmluY2x1ZGVzKGxhYmVsKSxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfSkpO1xuICAgICAgICAvLyBQcmUtZmV0Y2ggdmFsdWVzIGZvciBzZWxlY3RlZCBsYWJlbHNcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhYmVscyB9LCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5sYWJlbHMuZm9yRWFjaCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGlmIChsYWJlbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICB0aGlzLmZldGNoVmFsdWVzKGxhYmVsLm5hbWUsIEVNUFRZX1NFTEVDVE9SKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkb0ZhY2V0dGluZ0ZvckxhYmVsKG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5zdGF0ZS5sYWJlbHMuZmluZCgobCkgPT4gbC5uYW1lID09PSBuYW1lKTtcbiAgICBpZiAoIWxhYmVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdGVkTGFiZWxzID0gdGhpcy5zdGF0ZS5sYWJlbHMuZmlsdGVyKChsYWJlbCkgPT4gbGFiZWwuc2VsZWN0ZWQpLm1hcCgobGFiZWwpID0+IGxhYmVsLm5hbWUpO1xuICAgIHRoaXMucHJvcHMuc3RvcmVMYXN0VXNlZExhYmVscyhzZWxlY3RlZExhYmVscyk7XG4gICAgaWYgKGxhYmVsLnNlbGVjdGVkKSB7XG4gICAgICAvLyBSZWZldGNoIHZhbHVlcyBmb3IgbmV3bHkgc2VsZWN0ZWQgbGFiZWwuLi5cbiAgICAgIGlmICghbGFiZWwudmFsdWVzKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hWYWx1ZXMobmFtZSwgYnVpbGRTZWxlY3Rvcih0aGlzLnN0YXRlLmxhYmVscykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPbmx5IG5lZWQgdG8gZmFjZXQgd2hlbiBkZXNlbGVjdGluZyBsYWJlbHNcbiAgICAgIHRoaXMuZG9GYWNldHRpbmcoKTtcbiAgICB9XG4gIH1cblxuICBkb0ZhY2V0dGluZyA9IChsYXN0RmFjZXR0ZWQ/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGJ1aWxkU2VsZWN0b3IodGhpcy5zdGF0ZS5sYWJlbHMpO1xuICAgIGlmIChzZWxlY3RvciA9PT0gRU1QVFlfU0VMRUNUT1IpIHtcbiAgICAgIC8vIENsZWFyIHVwIGZhY2V0dGluZ1xuICAgICAgY29uc3QgbGFiZWxzOiBTZWxlY3RhYmxlTGFiZWxbXSA9IHRoaXMuc3RhdGUubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgLi4ubGFiZWwsIGZhY2V0czogMCwgdmFsdWVzOiB1bmRlZmluZWQsIGhpZGRlbjogZmFsc2UgfTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhYmVscyB9LCAoKSA9PiB7XG4gICAgICAgIC8vIEdldCBmcmVzaCBzZXQgb2YgdmFsdWVzXG4gICAgICAgIHRoaXMuc3RhdGUubGFiZWxzLmZvckVhY2goKGxhYmVsKSA9PiBsYWJlbC5zZWxlY3RlZCAmJiB0aGlzLmZldGNoVmFsdWVzKGxhYmVsLm5hbWUsIHNlbGVjdG9yKSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRG8gZmFjZXR0aW5nXG4gICAgICB0aGlzLmZldGNoU2VyaWVzKHNlbGVjdG9yLCBsYXN0RmFjZXR0ZWQpO1xuICAgIH1cbiAgfTtcblxuICBhc3luYyBmZXRjaFZhbHVlcyhuYW1lOiBzdHJpbmcsIHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICBjb25zdCB7IGxhbmd1YWdlUHJvdmlkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKG5hbWUsIHsgbG9hZGluZzogdHJ1ZSB9LCBgRmV0Y2hpbmcgdmFsdWVzIGZvciAke25hbWV9YCk7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByYXdWYWx1ZXMgPSBhd2FpdCBsYW5ndWFnZVByb3ZpZGVyLmdldExhYmVsVmFsdWVzKG5hbWUpO1xuICAgICAgLy8gSWYgc2VsZWN0b3IgY2hhbmdlZCwgY2xlYXIgbG9hZGluZyBzdGF0ZSBhbmQgZGlzY2FyZCByZXN1bHQgYnkgcmV0dXJuaW5nIGVhcmx5XG4gICAgICBpZiAoc2VsZWN0b3IgIT09IGJ1aWxkU2VsZWN0b3IodGhpcy5zdGF0ZS5sYWJlbHMpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZShuYW1lLCB7IGxvYWRpbmc6IGZhbHNlIH0sICcnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHJhd1ZhbHVlcy5sZW5ndGggPiBNQVhfVkFMVUVfQ09VTlQpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBgVG9vIG1hbnkgdmFsdWVzIGZvciAke25hbWV9IChzaG93aW5nIG9ubHkgJHtNQVhfVkFMVUVfQ09VTlR9IG9mICR7cmF3VmFsdWVzLmxlbmd0aH0pYDtcbiAgICAgICAgcmF3VmFsdWVzID0gcmF3VmFsdWVzLnNsaWNlKDAsIE1BWF9WQUxVRV9DT1VOVCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHZhbHVlczogRmFjZXR0YWJsZVZhbHVlW10gPSByYXdWYWx1ZXMubWFwKCh2YWx1ZSkgPT4gKHsgbmFtZTogdmFsdWUgfSkpO1xuICAgICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKG5hbWUsIHsgdmFsdWVzLCBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hTZXJpZXMoc2VsZWN0b3I6IHN0cmluZywgbGFzdEZhY2V0dGVkPzogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZVByb3ZpZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChsYXN0RmFjZXR0ZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZShsYXN0RmFjZXR0ZWQsIHsgbG9hZGluZzogdHJ1ZSB9LCBgRmFjZXR0aW5nIGxhYmVscyBmb3IgJHtzZWxlY3Rvcn1gKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBvc3NpYmxlTGFiZWxzID0gYXdhaXQgbGFuZ3VhZ2VQcm92aWRlci5mZXRjaFNlcmllc0xhYmVscyhzZWxlY3RvciwgdHJ1ZSk7XG4gICAgICAvLyBJZiBzZWxlY3RvciBjaGFuZ2VkLCBjbGVhciBsb2FkaW5nIHN0YXRlIGFuZCBkaXNjYXJkIHJlc3VsdCBieSByZXR1cm5pbmcgZWFybHlcbiAgICAgIGlmIChzZWxlY3RvciAhPT0gYnVpbGRTZWxlY3Rvcih0aGlzLnN0YXRlLmxhYmVscykpIHtcbiAgICAgICAgaWYgKGxhc3RGYWNldHRlZCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZShsYXN0RmFjZXR0ZWQsIHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKE9iamVjdC5rZXlzKHBvc3NpYmxlTGFiZWxzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yOiBgRW1wdHkgcmVzdWx0cywgbm8gbWF0Y2hpbmcgbGFiZWwgZm9yICR7c2VsZWN0b3J9YCB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbGFiZWxzOiBTZWxlY3RhYmxlTGFiZWxbXSA9IGZhY2V0TGFiZWxzKHRoaXMuc3RhdGUubGFiZWxzLCBwb3NzaWJsZUxhYmVscywgbGFzdEZhY2V0dGVkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYWJlbHMsIGVycm9yOiAnJyB9KTtcbiAgICAgIGlmIChsYXN0RmFjZXR0ZWQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKGxhc3RGYWNldHRlZCwgeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdmFsaWRhdGVTZWxlY3RvcihzZWxlY3Rvcjogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBsYW5ndWFnZVByb3ZpZGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uU3RhdHVzOiBgVmFsaWRhdGluZyBzZWxlY3RvciAke3NlbGVjdG9yfWAsIGVycm9yOiAnJyB9KTtcbiAgICBjb25zdCBzdHJlYW1zID0gYXdhaXQgbGFuZ3VhZ2VQcm92aWRlci5mZXRjaFNlcmllcyhzZWxlY3Rvcik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb25TdGF0dXM6IGBTZWxlY3RvciBpcyB2YWxpZCAoJHtzdHJlYW1zLmxlbmd0aH0gc3RyZWFtcyBmb3VuZClgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBsYWJlbHMsIHNlYXJjaFRlcm0sIHN0YXR1cywgZXJyb3IsIHZhbGlkYXRpb25TdGF0dXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGxhYmVscy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9XCJMb2FkaW5nIGxhYmVscy4uLlwiIC8+O1xuICAgIH1cbiAgICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZXModGhlbWUpO1xuICAgIGNvbnN0IHNlbGVjdG9yID0gYnVpbGRTZWxlY3Rvcih0aGlzLnN0YXRlLmxhYmVscyk7XG4gICAgY29uc3QgZW1wdHkgPSBzZWxlY3RvciA9PT0gRU1QVFlfU0VMRUNUT1I7XG5cbiAgICBsZXQgc2VsZWN0ZWRMYWJlbHMgPSBsYWJlbHMuZmlsdGVyKChsYWJlbCkgPT4gbGFiZWwuc2VsZWN0ZWQgJiYgbGFiZWwudmFsdWVzKTtcbiAgICBpZiAoc2VhcmNoVGVybSkge1xuICAgICAgc2VsZWN0ZWRMYWJlbHMgPSBzZWxlY3RlZExhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBsYWJlbC52YWx1ZXMhLmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgICAvLyBBbHdheXMgcmV0dXJuIHNlbGVjdGVkIHZhbHVlc1xuICAgICAgICAgIGlmICh2YWx1ZS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdmFsdWUuaGlnaGxpZ2h0UGFydHMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZnV6enlNYXRjaFJlc3VsdCA9IGZ1enp5TWF0Y2godmFsdWUubmFtZS50b0xvd2VyQ2FzZSgpLCBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIGlmIChmdXp6eU1hdGNoUmVzdWx0LmZvdW5kKSB7XG4gICAgICAgICAgICB2YWx1ZS5oaWdobGlnaHRQYXJ0cyA9IGZ1enp5TWF0Y2hSZXN1bHQucmFuZ2VzO1xuICAgICAgICAgICAgdmFsdWUub3JkZXIgPSBmdXp6eU1hdGNoUmVzdWx0LmRpc3RhbmNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmxhYmVsLFxuICAgICAgICAgIHZhbHVlczogc29ydEJ5KHNlYXJjaFJlc3VsdHMsICh2YWx1ZSkgPT4gKHZhbHVlLnNlbGVjdGVkID8gLUluZmluaXR5IDogdmFsdWUub3JkZXIpKSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDbGVhciBoaWdobGlnaHQgcGFydHMgd2hlbiBzZWFyY2hUZXJtIGlzIGNsZWFyZWRcbiAgICAgIHNlbGVjdGVkTGFiZWxzID0gdGhpcy5zdGF0ZS5sYWJlbHNcbiAgICAgICAgLmZpbHRlcigobGFiZWwpID0+IGxhYmVsLnNlbGVjdGVkICYmIGxhYmVsLnZhbHVlcylcbiAgICAgICAgLm1hcCgobGFiZWwpID0+ICh7XG4gICAgICAgICAgLi4ubGFiZWwsXG4gICAgICAgICAgdmFsdWVzOiBsYWJlbD8udmFsdWVzID8gbGFiZWwudmFsdWVzLm1hcCgodmFsdWUpID0+ICh7IC4uLnZhbHVlLCBoaWdobGlnaHRQYXJ0czogdW5kZWZpbmVkIH0pKSA6IFtdLFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICAgICAgPExhYmVsIGRlc2NyaXB0aW9uPVwiV2hpY2ggbGFiZWxzIHdvdWxkIHlvdSBsaWtlIHRvIGNvbnNpZGVyIGZvciB5b3VyIHNlYXJjaD9cIj5cbiAgICAgICAgICAgIDEuIFNlbGVjdCBsYWJlbHMgdG8gc2VhcmNoIGluXG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgICAgICAge2xhYmVscy5tYXAoKGxhYmVsKSA9PiAoXG4gICAgICAgICAgICAgIDxMb2tpTGFiZWxcbiAgICAgICAgICAgICAgICBrZXk9e2xhYmVsLm5hbWV9XG4gICAgICAgICAgICAgICAgbmFtZT17bGFiZWwubmFtZX1cbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsYWJlbC5sb2FkaW5nfVxuICAgICAgICAgICAgICAgIGFjdGl2ZT17bGFiZWwuc2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgaGlkZGVuPXtsYWJlbC5oaWRkZW59XG4gICAgICAgICAgICAgICAgZmFjZXRzPXtsYWJlbC5mYWNldHN9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrTGFiZWx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbn0+XG4gICAgICAgICAgPExhYmVsIGRlc2NyaXB0aW9uPVwiQ2hvb3NlIHRoZSBsYWJlbCB2YWx1ZXMgdGhhdCB5b3Ugd291bGQgbGlrZSB0byB1c2UgZm9yIHRoZSBxdWVyeS4gVXNlIHRoZSBzZWFyY2ggZmllbGQgdG8gZmluZCB2YWx1ZXMgYWNyb3NzIHNlbGVjdGVkIGxhYmVscy5cIj5cbiAgICAgICAgICAgIDIuIEZpbmQgdmFsdWVzIGZvciB0aGUgc2VsZWN0ZWQgbGFiZWxzXG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlU2VhcmNofSBhcmlhLWxhYmVsPVwiRmlsdGVyIGV4cHJlc3Npb24gZm9yIHZhbHVlc1wiIHZhbHVlPXtzZWFyY2hUZXJtfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudmFsdWVMaXN0QXJlYX0+XG4gICAgICAgICAgICB7c2VsZWN0ZWRMYWJlbHMubWFwKChsYWJlbCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJsaXN0XCIga2V5PXtsYWJlbC5uYW1lfSBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZUxpc3RXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZhbHVlVGl0bGV9IGFyaWEtbGFiZWw9e2BWYWx1ZXMgZm9yICR7bGFiZWwubmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgIDxMb2tpTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17bGFiZWwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bGFiZWwubG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtsYWJlbC5zZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXtsYWJlbC5oaWRkZW59XG4gICAgICAgICAgICAgICAgICAgIC8vSWYgbm8gZmFjZXRzLCB3ZSB3YW50IHRvIHNob3cgbnVtYmVyIG9mIGFsbCBsYWJlbCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgZmFjZXRzPXtsYWJlbC5mYWNldHMgfHwgbGFiZWwudmFsdWVzPy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja0xhYmVsfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Rml4ZWRTaXplTGlzdFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XG4gICAgICAgICAgICAgICAgICBpdGVtQ291bnQ9e2xhYmVsLnZhbHVlcz8ubGVuZ3RoIHx8IDB9XG4gICAgICAgICAgICAgICAgICBpdGVtU2l6ZT17Mjh9XG4gICAgICAgICAgICAgICAgICBpdGVtS2V5PXsoaSkgPT4gKGxhYmVsLnZhbHVlcyBhcyBGYWNldHRhYmxlVmFsdWVbXSlbaV0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZUxpc3R9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgeyh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGFiZWwudmFsdWVzPy5baW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9raUxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2xhYmVsLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZT8ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXt2YWx1ZT8uc2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodFBhcnRzPXt2YWx1ZT8uaGlnaGxpZ2h0UGFydHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja1ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hUZXJtPXtzZWFyY2hUZXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPC9GaXhlZFNpemVMaXN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cbiAgICAgICAgICA8TGFiZWw+My4gUmVzdWx0aW5nIHNlbGVjdG9yPC9MYWJlbD5cbiAgICAgICAgICA8ZGl2IGFyaWEtbGFiZWw9XCJzZWxlY3RvclwiIGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdG9yfT5cbiAgICAgICAgICAgIHtzZWxlY3Rvcn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dmFsaWRhdGlvblN0YXR1cyAmJiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZhbGlkYXRpb25TdGF0dXN9Pnt2YWxpZGF0aW9uU3RhdHVzfTwvZGl2Pn1cbiAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwPlxuICAgICAgICAgICAgPEJ1dHRvbiBhcmlhLWxhYmVsPVwiVXNlIHNlbGVjdG9yIGFzIGxvZ3MgYnV0dG9uXCIgZGlzYWJsZWQ9e2VtcHR5fSBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tSdW5Mb2dzUXVlcnl9PlxuICAgICAgICAgICAgICBTaG93IGxvZ3NcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVXNlIHNlbGVjdG9yIGFzIG1ldHJpY3MgYnV0dG9uXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtlbXB0eX1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrUnVuTWV0cmljc1F1ZXJ5fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTaG93IGxvZ3MgcmF0ZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJWYWxpZGF0ZSBzdWJtaXQgYnV0dG9uXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtlbXB0eX1cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrVmFsaWRhdGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFZhbGlkYXRlIHNlbGVjdG9yXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gYXJpYS1sYWJlbD1cIlNlbGVjdG9yIGNsZWFyIGJ1dHRvblwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tDbGVhcn0+XG4gICAgICAgICAgICAgIENsZWFyXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChzdHlsZXMuc3RhdHVzLCAoc3RhdHVzIHx8IGVycm9yKSAmJiBzdHlsZXMuc3RhdHVzU2hvd2luZyl9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Vycm9yID8gc3R5bGVzLmVycm9yIDogJyd9PntlcnJvciB8fCBzdGF0dXN9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTG9raUxhYmVsQnJvd3NlciA9IHdpdGhUaGVtZTIoVW50aGVtZWRMb2tpTGFiZWxCcm93c2VyKTtcbiIsImltcG9ydCB7IExhbmd1YWdlTWFwLCBsYW5ndWFnZXMgYXMgcHJpc21MYW5ndWFnZXMgfSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQbHVnaW4sIE5vZGUgfSBmcm9tICdzbGF0ZSc7XG5cbmltcG9ydCB7IFF1ZXJ5RWRpdG9yUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7XG4gIFNsYXRlUHJpc20sXG4gIFR5cGVhaGVhZE91dHB1dCxcbiAgU3VnZ2VzdGlvbnNTdGF0ZSxcbiAgUXVlcnlGaWVsZCxcbiAgVHlwZWFoZWFkSW5wdXQsXG4gIEJyYWNlc1BsdWdpbixcbiAgRE9NVXRpbCxcbiAgSWNvbixcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlVmFsdWVQcm92aWRlciB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvTG9jYWxTdG9yYWdlVmFsdWVQcm92aWRlcic7XG5cbmltcG9ydCB7IExva2lEYXRhc291cmNlIH0gZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5pbXBvcnQgTG9raUxhbmd1YWdlUHJvdmlkZXIgZnJvbSAnLi4vbGFuZ3VhZ2VfcHJvdmlkZXInO1xuaW1wb3J0IHsgZXNjYXBlTGFiZWxWYWx1ZUluU2VsZWN0b3IsIHNob3VsZFJlZnJlc2hMYWJlbHMgfSBmcm9tICcuLi9sYW5ndWFnZV91dGlscyc7XG5pbXBvcnQgeyBMb2tpUXVlcnksIExva2lPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgeyBMb2tpTGFiZWxCcm93c2VyIH0gZnJvbSAnLi9Mb2tpTGFiZWxCcm93c2VyJztcblxuY29uc3QgTEFTVF9VU0VEX0xBQkVMU19LRVkgPSAnZ3JhZmFuYS5kYXRhc291cmNlcy5sb2tpLmJyb3dzZXIubGFiZWxzJztcblxuZnVuY3Rpb24gZ2V0Q2hvb3NlclRleHQoaGFzU3ludGF4OiBib29sZWFuLCBoYXNMb2dMYWJlbHM6IGJvb2xlYW4pIHtcbiAgaWYgKCFoYXNTeW50YXgpIHtcbiAgICByZXR1cm4gJ0xvYWRpbmcgbGFiZWxzLi4uJztcbiAgfVxuICBpZiAoIWhhc0xvZ0xhYmVscykge1xuICAgIHJldHVybiAnKE5vIGxvZ3MgZm91bmQpJztcbiAgfVxuICByZXR1cm4gJ0xvZyBicm93c2VyJztcbn1cblxuZnVuY3Rpb24gd2lsbEFwcGx5U3VnZ2VzdGlvbihzdWdnZXN0aW9uOiBzdHJpbmcsIHsgdHlwZWFoZWFkQ29udGV4dCwgdHlwZWFoZWFkVGV4dCB9OiBTdWdnZXN0aW9uc1N0YXRlKTogc3RyaW5nIHtcbiAgLy8gTW9kaWZ5IHN1Z2dlc3Rpb24gYmFzZWQgb24gY29udGV4dFxuICBzd2l0Y2ggKHR5cGVhaGVhZENvbnRleHQpIHtcbiAgICBjYXNlICdjb250ZXh0LWxhYmVscyc6IHtcbiAgICAgIGNvbnN0IG5leHRDaGFyID0gRE9NVXRpbC5nZXROZXh0Q2hhcmFjdGVyKCk7XG4gICAgICBpZiAoIW5leHRDaGFyIHx8IG5leHRDaGFyID09PSAnfScgfHwgbmV4dENoYXIgPT09ICcsJykge1xuICAgICAgICBzdWdnZXN0aW9uICs9ICc9JztcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgJ2NvbnRleHQtbGFiZWwtdmFsdWVzJzoge1xuICAgICAgLy8gQWx3YXlzIGFkZCBxdW90ZXMgYW5kIHJlbW92ZSBleGlzdGluZyBvbmVzIGluc3RlYWRcbiAgICAgIGxldCBzdWdnZXN0aW9uTW9kaWZpZWQgPSAnJztcblxuICAgICAgaWYgKCF0eXBlYWhlYWRUZXh0Lm1hdGNoKC9eKCE/PX4/XCJ8XCIpLykpIHtcbiAgICAgICAgc3VnZ2VzdGlvbk1vZGlmaWVkID0gJ1wiJztcbiAgICAgIH1cblxuICAgICAgc3VnZ2VzdGlvbk1vZGlmaWVkICs9IGVzY2FwZUxhYmVsVmFsdWVJblNlbGVjdG9yKHN1Z2dlc3Rpb24sIHR5cGVhaGVhZFRleHQpO1xuXG4gICAgICBpZiAoRE9NVXRpbC5nZXROZXh0Q2hhcmFjdGVyKCkgIT09ICdcIicpIHtcbiAgICAgICAgc3VnZ2VzdGlvbk1vZGlmaWVkICs9ICdcIic7XG4gICAgICB9XG5cbiAgICAgIHN1Z2dlc3Rpb24gPSBzdWdnZXN0aW9uTW9kaWZpZWQ7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gIH1cblxuICByZXR1cm4gc3VnZ2VzdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2tpUXVlcnlGaWVsZFByb3BzIGV4dGVuZHMgUXVlcnlFZGl0b3JQcm9wczxMb2tpRGF0YXNvdXJjZSwgTG9raVF1ZXJ5LCBMb2tpT3B0aW9ucz4ge1xuICBFeHRyYUZpZWxkRWxlbWVudD86IFJlYWN0Tm9kZTtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICdkYXRhLXRlc3RpZCc/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBMb2tpUXVlcnlGaWVsZFN0YXRlIHtcbiAgbGFiZWxzTG9hZGVkOiBib29sZWFuO1xuICBsYWJlbEJyb3dzZXJWaXNpYmxlOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgTG9raVF1ZXJ5RmllbGQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PExva2lRdWVyeUZpZWxkUHJvcHMsIExva2lRdWVyeUZpZWxkU3RhdGU+IHtcbiAgcGx1Z2luczogUGx1Z2luW107XG4gIF9pc01vdW50ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogTG9raVF1ZXJ5RmllbGRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7IGxhYmVsc0xvYWRlZDogZmFsc2UsIGxhYmVsQnJvd3NlclZpc2libGU6IGZhbHNlIH07XG5cbiAgICB0aGlzLnBsdWdpbnMgPSBbXG4gICAgICBCcmFjZXNQbHVnaW4oKSxcbiAgICAgIFNsYXRlUHJpc20oXG4gICAgICAgIHtcbiAgICAgICAgICBvbmx5SW46IChub2RlOiBOb2RlKSA9PiBub2RlLm9iamVjdCA9PT0gJ2Jsb2NrJyAmJiBub2RlLnR5cGUgPT09ICdjb2RlX2Jsb2NrJyxcbiAgICAgICAgICBnZXRTeW50YXg6IChub2RlOiBOb2RlKSA9PiAnbG9ncWwnLFxuICAgICAgICB9LFxuICAgICAgICB7IC4uLihwcmlzbUxhbmd1YWdlcyBhcyBMYW5ndWFnZU1hcCksIGxvZ3FsOiB0aGlzLnByb3BzLmRhdGFzb3VyY2UubGFuZ3VhZ2VQcm92aWRlci5nZXRTeW50YXgoKSB9XG4gICAgICApLFxuICAgIF07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIGF3YWl0IHRoaXMucHJvcHMuZGF0YXNvdXJjZS5sYW5ndWFnZVByb3ZpZGVyLnN0YXJ0KCk7XG4gICAgaWYgKHRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhYmVsc0xvYWRlZDogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IExva2lRdWVyeUZpZWxkUHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICByYW5nZSxcbiAgICAgIGRhdGFzb3VyY2U6IHsgbGFuZ3VhZ2VQcm92aWRlciB9LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHJlZnJlc2hMYWJlbHMgPSBzaG91bGRSZWZyZXNoTGFiZWxzKHJhbmdlLCBwcmV2UHJvcHMucmFuZ2UpO1xuICAgIC8vIFdlIHdhbnQgdG8gcmVmcmVzaCBsYWJlbHMgd2hlbiByYW5nZSBjaGFuZ2VzICh3ZSByb3VuZCB1cCBpbnRlcnZhbHMgdG8gYSBtaW51dGUpXG4gICAgaWYgKHJlZnJlc2hMYWJlbHMpIHtcbiAgICAgIGxhbmd1YWdlUHJvdmlkZXIuZmV0Y2hMYWJlbHMoKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZUxhYmVsQnJvd3NlciA9IChzZWxlY3Rvcjogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5vbkNoYW5nZVF1ZXJ5KHNlbGVjdG9yLCB0cnVlKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbGFiZWxCcm93c2VyVmlzaWJsZTogZmFsc2UgfSk7XG4gIH07XG5cbiAgb25DaGFuZ2VRdWVyeSA9ICh2YWx1ZTogc3RyaW5nLCBvdmVycmlkZT86IGJvb2xlYW4pID0+IHtcbiAgICAvLyBTZW5kIHRleHQgY2hhbmdlIHRvIHBhcmVudFxuICAgIGNvbnN0IHsgcXVlcnksIG9uQ2hhbmdlLCBvblJ1blF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgY29uc3QgbmV4dFF1ZXJ5ID0geyAuLi5xdWVyeSwgZXhwcjogdmFsdWUgfTtcbiAgICAgIG9uQ2hhbmdlKG5leHRRdWVyeSk7XG5cbiAgICAgIGlmIChvdmVycmlkZSAmJiBvblJ1blF1ZXJ5KSB7XG4gICAgICAgIG9uUnVuUXVlcnkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgb25DbGlja0Nob29zZXJCdXR0b24gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+ICh7IGxhYmVsQnJvd3NlclZpc2libGU6ICFzdGF0ZS5sYWJlbEJyb3dzZXJWaXNpYmxlIH0pKTtcbiAgfTtcblxuICBvblR5cGVhaGVhZCA9IGFzeW5jICh0eXBlYWhlYWQ6IFR5cGVhaGVhZElucHV0KTogUHJvbWlzZTxUeXBlYWhlYWRPdXRwdXQ+ID0+IHtcbiAgICBjb25zdCB7IGRhdGFzb3VyY2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWRhdGFzb3VyY2UubGFuZ3VhZ2VQcm92aWRlcikge1xuICAgICAgcmV0dXJuIHsgc3VnZ2VzdGlvbnM6IFtdIH07XG4gICAgfVxuXG4gICAgY29uc3QgbG9raUxhbmd1YWdlUHJvdmlkZXIgPSBkYXRhc291cmNlLmxhbmd1YWdlUHJvdmlkZXIgYXMgTG9raUxhbmd1YWdlUHJvdmlkZXI7XG4gICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcHJlZml4LCB0ZXh0LCB2YWx1ZSwgd3JhcHBlckNsYXNzZXMsIGxhYmVsS2V5IH0gPSB0eXBlYWhlYWQ7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsb2tpTGFuZ3VhZ2VQcm92aWRlci5wcm92aWRlQ29tcGxldGlvbkl0ZW1zKFxuICAgICAgeyB0ZXh0LCB2YWx1ZSwgcHJlZml4LCB3cmFwcGVyQ2xhc3NlcywgbGFiZWxLZXkgfSxcbiAgICAgIHsgaGlzdG9yeSB9XG4gICAgKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBFeHRyYUZpZWxkRWxlbWVudCxcbiAgICAgIHF1ZXJ5LFxuICAgICAgZGF0YXNvdXJjZSxcbiAgICAgIHBsYWNlaG9sZGVyID0gJ0VudGVyIGEgTG9raSBxdWVyeSAocnVuIHdpdGggU2hpZnQrRW50ZXIpJyxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgbGFiZWxzTG9hZGVkLCBsYWJlbEJyb3dzZXJWaXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGxva2lMYW5ndWFnZVByb3ZpZGVyID0gZGF0YXNvdXJjZS5sYW5ndWFnZVByb3ZpZGVyIGFzIExva2lMYW5ndWFnZVByb3ZpZGVyO1xuICAgIGNvbnN0IGNsZWFuVGV4dCA9IGRhdGFzb3VyY2UubGFuZ3VhZ2VQcm92aWRlciA/IGxva2lMYW5ndWFnZVByb3ZpZGVyLmNsZWFuVGV4dCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBoYXNMb2dMYWJlbHMgPSBsb2tpTGFuZ3VhZ2VQcm92aWRlci5nZXRMYWJlbEtleXMoKS5sZW5ndGggPiAwO1xuICAgIGNvbnN0IGNob29zZXJUZXh0ID0gZ2V0Q2hvb3NlclRleHQobGFiZWxzTG9hZGVkLCBoYXNMb2dMYWJlbHMpO1xuICAgIGNvbnN0IGJ1dHRvbkRpc2FibGVkID0gIShsYWJlbHNMb2FkZWQgJiYgaGFzTG9nTGFiZWxzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TG9jYWxTdG9yYWdlVmFsdWVQcm92aWRlcjxzdHJpbmdbXT4gc3RvcmFnZUtleT17TEFTVF9VU0VEX0xBQkVMU19LRVl9IGRlZmF1bHRWYWx1ZT17W119PlxuICAgICAgICB7KGxhc3RVc2VkTGFiZWxzLCBvbkxhc3RVc2VkTGFiZWxzU2F2ZSwgb25MYXN0VXNlZExhYmVsc0RlbGV0ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2YtZm9ybS1pbmxpbmUgZ2YtZm9ybS1pbmxpbmUtLXhzLXZpZXctZmxleC1jb2x1bW4gZmxleC1ncm93LTFcIlxuICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPXt0aGlzLnByb3BzWydkYXRhLXRlc3RpZCddfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2YtZm9ybS1sYWJlbCBxdWVyeS1rZXl3b3JkIHBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrQ2hvb3NlckJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtidXR0b25EaXNhYmxlZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2hvb3NlclRleHR9XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPXtsYWJlbEJyb3dzZXJWaXNpYmxlID8gJ2FuZ2xlLWRvd24nIDogJ2FuZ2xlLXJpZ2h0J30gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0gZ2YtZm9ybS0tZ3JvdyBmbGV4LXNocmluay0xIG1pbi13aWR0aC0xNVwiPlxuICAgICAgICAgICAgICAgICAgPFF1ZXJ5RmllbGRcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbFBsdWdpbnM9e3RoaXMucGx1Z2luc31cbiAgICAgICAgICAgICAgICAgICAgY2xlYW5UZXh0PXtjbGVhblRleHR9XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeS5leHByfVxuICAgICAgICAgICAgICAgICAgICBvblR5cGVhaGVhZD17dGhpcy5vblR5cGVhaGVhZH1cbiAgICAgICAgICAgICAgICAgICAgb25XaWxsQXBwbHlTdWdnZXN0aW9uPXt3aWxsQXBwbHlTdWdnZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMucHJvcHMub25CbHVyfVxuICAgICAgICAgICAgICAgICAgICBvblJ1blF1ZXJ5PXt0aGlzLnByb3BzLm9uUnVuUXVlcnl9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgcG9ydGFsT3JpZ2luPVwibG9raVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge2xhYmVsQnJvd3NlclZpc2libGUgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPExva2lMYWJlbEJyb3dzZXJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VQcm92aWRlcj17bG9raUxhbmd1YWdlUHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlTGFiZWxCcm93c2VyfVxuICAgICAgICAgICAgICAgICAgICBsYXN0VXNlZExhYmVscz17bGFzdFVzZWRMYWJlbHMgfHwgW119XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlTGFzdFVzZWRMYWJlbHM9e29uTGFzdFVzZWRMYWJlbHNTYXZlfVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVMYXN0VXNlZExhYmVscz17b25MYXN0VXNlZExhYmVsc0RlbGV0ZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAge0V4dHJhRmllbGRFbGVtZW50fVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvTG9jYWxTdG9yYWdlVmFsdWVQcm92aWRlcj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUaW1lUmFuZ2UgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcblxuZnVuY3Rpb24gcm91bmRNc1RvTWluKG1pbGxpc2Vjb25kczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHJvdW5kU2VjVG9NaW4obWlsbGlzZWNvbmRzIC8gMTAwMCk7XG59XG5cbmZ1bmN0aW9uIHJvdW5kU2VjVG9NaW4oc2Vjb25kczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFJlZnJlc2hMYWJlbHMocmFuZ2U/OiBUaW1lUmFuZ2UsIHByZXZSYW5nZT86IFRpbWVSYW5nZSk6IGJvb2xlYW4ge1xuICBpZiAocmFuZ2UgJiYgcHJldlJhbmdlKSB7XG4gICAgY29uc3Qgc2FtZU1pbnV0ZUZyb20gPSByb3VuZE1zVG9NaW4ocmFuZ2UuZnJvbS52YWx1ZU9mKCkpID09PSByb3VuZE1zVG9NaW4ocHJldlJhbmdlLmZyb20udmFsdWVPZigpKTtcbiAgICBjb25zdCBzYW1lTWludXRlVG8gPSByb3VuZE1zVG9NaW4ocmFuZ2UudG8udmFsdWVPZigpKSA9PT0gcm91bmRNc1RvTWluKHByZXZSYW5nZS50by52YWx1ZU9mKCkpO1xuICAgIC8vIElmIGJvdGggYXJlIHNhbWUsIGRvbid0IG5lZWQgdG8gcmVmcmVzaFxuICAgIHJldHVybiAhKHNhbWVNaW51dGVGcm9tICYmIHNhbWVNaW51dGVUbyk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBMb2tpIHJlZ3VsYXItZXhwcmVzc2lvbnMgdXNlIHRoZSBSRTIgc3ludGF4IChodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL3JlMi93aWtpL1N5bnRheCksXG4vLyBzbyBldmVyeSBjaGFyYWN0ZXIgdGhhdCBtYXRjaGVzIHNvbWV0aGluZyBpbiB0aGF0IGxpc3QgaGFzIHRvIGJlIGVzY2FwZWQuXG4vLyB0aGUgbGlzdCBvZiBtZXRhIGNoYXJhY3RlcnMgaXM6ICorPygpfFxcLltde31eJFxuLy8gd2UgbWFrZSBhIGphdmFzY3JpcHQgcmVndWxhciBleHByZXNzaW9uIHRoYXQgbWF0Y2hlcyB0aG9zZSBjaGFyYWN0ZXJzOlxuY29uc3QgUkUyX01FVEFDSEFSQUNURVJTID0gL1sqKz8oKXxcXFxcLlxcW1xcXXt9XiRdL2c7XG5mdW5jdGlvbiBlc2NhcGVMb2tpUmVnZXhwKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gdmFsdWUucmVwbGFjZShSRTJfTUVUQUNIQVJBQ1RFUlMsICdcXFxcJCYnKTtcbn1cblxuLy8gYmFzZWQgb24gdGhlIG9wZW5tZXRyaWNzLWRvY3VtZW50YXRpb24sIHRoZSAzIHN5bWJvbHMgd2UgaGF2ZSB0byBoYW5kbGUgYXJlOlxuLy8gLSBcXG4gLi4uIHRoZSBuZXdsaW5lIGNoYXJhY3RlclxuLy8gLSBcXCAgLi4uIHRoZSBiYWNrc2xhc2ggY2hhcmFjdGVyXG4vLyAtIFwiICAuLi4gdGhlIGRvdWJsZS1xdW90ZSBjaGFyYWN0ZXJcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVMYWJlbFZhbHVlSW5FeGFjdFNlbGVjdG9yKGxhYmVsVmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBsYWJlbFZhbHVlLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZUxhYmVsVmFsdWVJblJlZ2V4U2VsZWN0b3IobGFiZWxWYWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGVzY2FwZUxhYmVsVmFsdWVJbkV4YWN0U2VsZWN0b3IoZXNjYXBlTG9raVJlZ2V4cChsYWJlbFZhbHVlKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVMYWJlbFZhbHVlSW5TZWxlY3RvcihsYWJlbFZhbHVlOiBzdHJpbmcsIHNlbGVjdG9yPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGlzUmVnZXhTZWxlY3RvcihzZWxlY3RvcilcbiAgICA/IGVzY2FwZUxhYmVsVmFsdWVJblJlZ2V4U2VsZWN0b3IobGFiZWxWYWx1ZSlcbiAgICA6IGVzY2FwZUxhYmVsVmFsdWVJbkV4YWN0U2VsZWN0b3IobGFiZWxWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1JlZ2V4U2VsZWN0b3Ioc2VsZWN0b3I/OiBzdHJpbmcpIHtcbiAgaWYgKHNlbGVjdG9yICYmIChzZWxlY3Rvci5pbmNsdWRlcygnPX4nKSB8fCBzZWxlY3Rvci5pbmNsdWRlcygnIX4nKSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVhdFNoZWV0KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDIgaWQ9XCJ0ZW1wby1jaGVhdC1zaGVldFwiPlRlbXBvIENoZWF0IFNoZWV0PC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBUZW1wbyBpcyBhIHRyYWNlIGlkIGxvb2t1cCBzdG9yZS4gRW50ZXIgYSB0cmFjZSBpZCBpbiB0aGUgYWJvdmUgZmllbGQgYW5kIGhpdCDigJxSdW4gUXVlcnnigJ0gdG8gcmV0cmlldmUgeW91clxuICAgICAgICB0cmFjZS4gVGVtcG8gaXMgZ2VuZXJhbGx5IHBhaXJlZCB3aXRoIG90aGVyIGRhdGFzb3VyY2VzIHN1Y2ggYXMgTG9raSBvciBQcm9tZXRoZXVzIHRvIGZpbmQgdHJhY2VzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEhlcmUgYXJlIHNvbWV7JyAnfVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9kb2NzL3RlbXBvL2xhdGVzdC9ndWlkZXMvaW5zdHJ1bWVudGF0aW9uL1wiIHRhcmdldD1cImJsYW5rXCI+XG4gICAgICAgICAgaW5zdHJ1bWVudGF0aW9uIGV4YW1wbGVzXG4gICAgICAgIDwvYT57JyAnfVxuICAgICAgICB0byBnZXQgeW91IHN0YXJ0ZWQgd2l0aCB0cmFjZSBkaXNjb3ZlcnkgdGhyb3VnaCBsb2dzIGFuZCBtZXRyaWNzIChleGVtcGxhcnMpLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBQcmlzbSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5vZGUgfSBmcm9tICdzbGF0ZSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIsIGlzVmFsaWRHb0R1cmF0aW9uLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGdldFRlbXBsYXRlU3J2LCBUZW1wbGF0ZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHtcbiAgSW5saW5lRmllbGRSb3csXG4gIElubGluZUZpZWxkLFxuICBJbnB1dCxcbiAgUXVlcnlGaWVsZCxcbiAgU2xhdGVQcmlzbSxcbiAgQnJhY2VzUGx1Z2luLFxuICBUeXBlYWhlYWRJbnB1dCxcbiAgVHlwZWFoZWFkT3V0cHV0LFxuICBBc3luY1NlbGVjdCxcbiAgQWxlcnQsXG4gIHVzZVN0eWxlczIsXG4gIGZ1enp5TWF0Y2gsXG59IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IG5vdGlmeUFwcCB9IGZyb20gJ2FwcC9jb3JlL2FjdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlRXJyb3JOb3RpZmljYXRpb24gfSBmcm9tICdhcHAvY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBkaXNwYXRjaCB9IGZyb20gJ2FwcC9zdG9yZS9zdG9yZSc7XG5cbmltcG9ydCB7IFRlbXBvRGF0YXNvdXJjZSwgVGVtcG9RdWVyeSB9IGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuaW1wb3J0IFRlbXBvTGFuZ3VhZ2VQcm92aWRlciBmcm9tICcuLi9sYW5ndWFnZV9wcm92aWRlcic7XG5pbXBvcnQgeyB0b2tlbml6ZXIgfSBmcm9tICcuLi9zeW50YXgnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBkYXRhc291cmNlOiBUZW1wb0RhdGFzb3VyY2U7XG4gIHF1ZXJ5OiBUZW1wb1F1ZXJ5O1xuICBvbkNoYW5nZTogKHZhbHVlOiBUZW1wb1F1ZXJ5KSA9PiB2b2lkO1xuICBvbkJsdXI/OiAoKSA9PiB2b2lkO1xuICBvblJ1blF1ZXJ5OiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBQUklTTV9MQU5HVUFHRSA9ICd0ZW1wbyc7XG5jb25zdCBkdXJhdGlvblBsYWNlaG9sZGVyID0gJ2UuZy4gMS4ycywgMTAwbXMnO1xuY29uc3QgcGx1Z2lucyA9IFtcbiAgQnJhY2VzUGx1Z2luKCksXG4gIFNsYXRlUHJpc20oe1xuICAgIG9ubHlJbjogKG5vZGU6IE5vZGUpID0+IG5vZGUub2JqZWN0ID09PSAnYmxvY2snICYmIG5vZGUudHlwZSA9PT0gJ2NvZGVfYmxvY2snLFxuICAgIGdldFN5bnRheDogKCkgPT4gUFJJU01fTEFOR1VBR0UsXG4gIH0pLFxuXTtcblxuUHJpc20ubGFuZ3VhZ2VzW1BSSVNNX0xBTkdVQUdFXSA9IHRva2VuaXplcjtcblxuY29uc3QgTmF0aXZlU2VhcmNoID0gKHsgZGF0YXNvdXJjZSwgcXVlcnksIG9uQ2hhbmdlLCBvbkJsdXIsIG9uUnVuUXVlcnkgfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCBsYW5ndWFnZVByb3ZpZGVyID0gdXNlTWVtbygoKSA9PiBuZXcgVGVtcG9MYW5ndWFnZVByb3ZpZGVyKGRhdGFzb3VyY2UpLCBbZGF0YXNvdXJjZV0pO1xuICBjb25zdCBbaGFzU3ludGF4TG9hZGVkLCBzZXRIYXNTeW50YXhMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYXN5bmNTZXJ2aWNlTmFtZVZhbHVlLCBzZXRBc3luY1NlcnZpY2VOYW1lVmFsdWVdID0gdXNlU3RhdGU8U2VsZWN0YWJsZVZhbHVlPGFueT4+KHtcbiAgICB2YWx1ZTogJycsXG4gIH0pO1xuICBjb25zdCBbYXN5bmNTcGFuTmFtZVZhbHVlLCBzZXRBc3luY1NwYW5OYW1lVmFsdWVdID0gdXNlU3RhdGU8U2VsZWN0YWJsZVZhbHVlPGFueT4+KHtcbiAgICB2YWx1ZTogJycsXG4gIH0pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaW5wdXRFcnJvcnMsIHNldElucHV0RXJyb3JzXSA9IHVzZVN0YXRlPHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9Pih7fSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTx7XG4gICAgc2VydmljZU5hbWU6IGJvb2xlYW47XG4gICAgc3Bhbk5hbWU6IGJvb2xlYW47XG4gIH0+KHtcbiAgICBzZXJ2aWNlTmFtZTogZmFsc2UsXG4gICAgc3Bhbk5hbWU6IGZhbHNlLFxuICB9KTtcblxuICBhc3luYyBmdW5jdGlvbiBmZXRjaE9wdGlvbnNDYWxsYmFjayhuYW1lOiBzdHJpbmcsIGxwOiBUZW1wb0xhbmd1YWdlUHJvdmlkZXIsIHF1ZXJ5ID0gJycpIHtcbiAgICB0cnkge1xuICAgICAgc2V0SXNMb2FkaW5nKChwcmV2VmFsdWUpID0+ICh7IC4uLnByZXZWYWx1ZSwgW25hbWVdOiBmYWxzZSB9KSk7XG4gICAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgbHAuZ2V0T3B0aW9ucyhuYW1lKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkT3B0aW9ucyA9IG9wdGlvbnMuZmlsdGVyKChpdGVtKSA9PiAoaXRlbS52YWx1ZSA/IGZ1enp5TWF0Y2goaXRlbS52YWx1ZSwgcXVlcnkpLmZvdW5kIDogZmFsc2UpKTtcbiAgICAgIHJldHVybiBmaWx0ZXJlZE9wdGlvbnM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvcj8uc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKChwcmV2VmFsdWUpID0+ICh7IC4uLnByZXZWYWx1ZSwgW25hbWVdOiBmYWxzZSB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oJ0Vycm9yJywgZXJyb3IpKSk7XG4gICAgICAgIHNldElzTG9hZGluZygocHJldlZhbHVlKSA9PiAoeyAuLi5wcmV2VmFsdWUsIFtuYW1lXTogZmFsc2UgfSkpO1xuICAgICAgfVxuICAgICAgc2V0RXJyb3IoZXJyb3IpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGxvYWRPcHRpb25zT2ZUeXBlID0gdXNlQ2FsbGJhY2soXG4gICAgKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgc2V0SXNMb2FkaW5nKChwcmV2VmFsdWUpID0+ICh7IC4uLnByZXZWYWx1ZSwgW25hbWVdOiB0cnVlIH0pKTtcbiAgICAgIHJldHVybiBmZXRjaE9wdGlvbnNDYWxsYmFjayhuYW1lLCBsYW5ndWFnZVByb3ZpZGVyKTtcbiAgICB9LFxuICAgIFtsYW5ndWFnZVByb3ZpZGVyXVxuICApO1xuXG4gIGNvbnN0IGZldGNoT3B0aW9uc09mVHlwZSA9IHVzZUNhbGxiYWNrKFxuICAgIChuYW1lOiBzdHJpbmcpID0+IGRlYm91bmNlKCgpID0+IGxvYWRPcHRpb25zT2ZUeXBlKG5hbWUpLCA1MDAsIHsgbGVhZGluZzogdHJ1ZSwgdHJhaWxpbmc6IHRydWUgfSksXG4gICAgW2xvYWRPcHRpb25zT2ZUeXBlXVxuICApO1xuXG4gIGNvbnN0IGdldE5hbWVPcHRpb25zID0gKHF1ZXJ5OiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgIHNldElzTG9hZGluZygocHJldlZhbHVlKSA9PiAoeyAuLi5wcmV2VmFsdWUsIFtuYW1lXTogdHJ1ZSB9KSk7XG4gICAgcmV0dXJuIGZldGNoT3B0aW9uc0NhbGxiYWNrKG5hbWUsIGxhbmd1YWdlUHJvdmlkZXIsIHF1ZXJ5KTtcbiAgfTtcblxuICBjb25zdCBnZXRTZXJ2aWNlTmFtZU9wdGlvbnMgPSAocXVlcnk6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBnZXROYW1lT3B0aW9ucyhxdWVyeSwgJ3NlcnZpY2UubmFtZScpO1xuICB9O1xuXG4gIGNvbnN0IGdldFNwYW5OYW1lT3B0aW9ucyA9IChxdWVyeTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGdldE5hbWVPcHRpb25zKHF1ZXJ5LCAnbmFtZScpO1xuICB9O1xuXG4gIGNvbnN0IHNlcnZpY2VOYW1lU2VhcmNoID0gZGVib3VuY2UoZ2V0U2VydmljZU5hbWVPcHRpb25zLCA1MDAsIHsgbGVhZGluZzogdHJ1ZSwgdHJhaWxpbmc6IHRydWUgfSk7XG4gIGNvbnN0IHNwYW5OYW1lU2VhcmNoID0gZGVib3VuY2UoZ2V0U3Bhbk5hbWVPcHRpb25zLCA1MDAsIHsgbGVhZGluZzogdHJ1ZSwgdHJhaWxpbmc6IHRydWUgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBsYW5ndWFnZVByb3ZpZGVyLnN0YXJ0KCk7XG4gICAgICAgIGZldGNoT3B0aW9uc0NhbGxiYWNrKCdzZXJ2aWNlLm5hbWUnLCBsYW5ndWFnZVByb3ZpZGVyKTtcbiAgICAgICAgZmV0Y2hPcHRpb25zQ2FsbGJhY2soJ25hbWUnLCBsYW5ndWFnZVByb3ZpZGVyKTtcbiAgICAgICAgc2V0SGFzU3ludGF4TG9hZGVkKHRydWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gRGlzcGxheSBtZXNzYWdlIGlmIFRlbXBvIGlzIGNvbm5lY3RlZCBidXQgc2VhcmNoIDQwNCdzXG4gICAgICAgIGlmIChlcnJvcj8uc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gobm90aWZ5QXBwKGNyZWF0ZUVycm9yTm90aWZpY2F0aW9uKCdFcnJvcicsIGVycm9yKSkpO1xuICAgICAgICB9XG4gICAgICAgIHNldEhhc1N5bnRheExvYWRlZCh0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoT3B0aW9ucygpO1xuICB9LCBbbGFuZ3VhZ2VQcm92aWRlciwgZmV0Y2hPcHRpb25zT2ZUeXBlXSk7XG5cbiAgY29uc3Qgb25UeXBlYWhlYWQgPSBhc3luYyAodHlwZWFoZWFkOiBUeXBlYWhlYWRJbnB1dCk6IFByb21pc2U8VHlwZWFoZWFkT3V0cHV0PiA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IGxhbmd1YWdlUHJvdmlkZXIucHJvdmlkZUNvbXBsZXRpb25JdGVtcyh0eXBlYWhlYWQpO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFuVGV4dCA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBzcGxpdHRlZFRleHQgPSB0ZXh0LnNwbGl0KC9cXHMrKD89KFteXCJdKlwiW15cIl0qXCIpKlteXCJdKiQpL2cpO1xuICAgIGlmIChzcGxpdHRlZFRleHQubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHNwbGl0dGVkVGV4dFtzcGxpdHRlZFRleHQubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIHJldHVybiB0ZXh0O1xuICB9O1xuXG4gIGNvbnN0IG9uS2V5RG93biA9IChrZXlFdmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChrZXlFdmVudC5rZXkgPT09ICdFbnRlcicgJiYgKGtleUV2ZW50LnNoaWZ0S2V5IHx8IGtleUV2ZW50LmN0cmxLZXkpKSB7XG4gICAgICBvblJ1blF1ZXJ5KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRlbXBsYXRlU3J2OiBUZW1wbGF0ZVNydiA9IGdldFRlbXBsYXRlU3J2KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiU2VydmljZSBOYW1lXCIgbGFiZWxXaWR0aD17MTR9IGdyb3c+XG4gICAgICAgICAgICA8QXN5bmNTZWxlY3RcbiAgICAgICAgICAgICAgaW5wdXRJZD1cInNlcnZpY2VcIlxuICAgICAgICAgICAgICBjYWNoZU9wdGlvbnM9e2ZhbHNlfVxuICAgICAgICAgICAgICBsb2FkT3B0aW9ucz17c2VydmljZU5hbWVTZWFyY2h9XG4gICAgICAgICAgICAgIG9uT3Blbk1lbnU9e2ZldGNoT3B0aW9uc09mVHlwZSgnc2VydmljZS5uYW1lJyl9XG4gICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nLnNlcnZpY2VOYW1lfVxuICAgICAgICAgICAgICB2YWx1ZT17YXN5bmNTZXJ2aWNlTmFtZVZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRBc3luY1NlcnZpY2VOYW1lVmFsdWUoe1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlTmFtZTogdj8udmFsdWUgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIHNlcnZpY2VcIlxuICAgICAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9uc1xuICAgICAgICAgICAgICBvbktleURvd249e29uS2V5RG93bn1cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17J3NlbGVjdC1zZXJ2aWNlLW5hbWUnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiU3BhbiBOYW1lXCIgbGFiZWxXaWR0aD17MTR9IGdyb3c+XG4gICAgICAgICAgICA8QXN5bmNTZWxlY3RcbiAgICAgICAgICAgICAgaW5wdXRJZD1cInNwYW5OYW1lXCJcbiAgICAgICAgICAgICAgY2FjaGVPcHRpb25zPXtmYWxzZX1cbiAgICAgICAgICAgICAgbG9hZE9wdGlvbnM9e3NwYW5OYW1lU2VhcmNofVxuICAgICAgICAgICAgICBvbk9wZW5NZW51PXtmZXRjaE9wdGlvbnNPZlR5cGUoJ25hbWUnKX1cbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmcuc3Bhbk5hbWV9XG4gICAgICAgICAgICAgIHZhbHVlPXthc3luY1NwYW5OYW1lVmFsdWUudmFsdWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgICAgIHNldEFzeW5jU3Bhbk5hbWVWYWx1ZSh7IHZhbHVlOiB2IH0pO1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgc3Bhbk5hbWU6IHY/LnZhbHVlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgYSBzcGFuXCJcbiAgICAgICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnNcbiAgICAgICAgICAgICAgb25LZXlEb3duPXtvbktleURvd259XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9eydzZWxlY3Qtc3Bhbi1uYW1lJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIlRhZ3NcIiBsYWJlbFdpZHRoPXsxNH0gZ3JvdyB0b29sdGlwPVwiVmFsdWVzIHNob3VsZCBiZSBpbiB0aGUgbG9nZm10IGZvcm1hdC5cIj5cbiAgICAgICAgICAgIDxRdWVyeUZpZWxkXG4gICAgICAgICAgICAgIGFkZGl0aW9uYWxQbHVnaW5zPXtwbHVnaW5zfVxuICAgICAgICAgICAgICBxdWVyeT17cXVlcnkuc2VhcmNofVxuICAgICAgICAgICAgICBvblR5cGVhaGVhZD17b25UeXBlYWhlYWR9XG4gICAgICAgICAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgICAgICAgICBzZWFyY2g6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHAuc3RhdHVzX2NvZGU9MjAwIGVycm9yPXRydWVcIlxuICAgICAgICAgICAgICBjbGVhblRleHQ9e2NsZWFuVGV4dH1cbiAgICAgICAgICAgICAgb25SdW5RdWVyeT17b25SdW5RdWVyeX1cbiAgICAgICAgICAgICAgc3ludGF4TG9hZGVkPXtoYXNTeW50YXhMb2FkZWR9XG4gICAgICAgICAgICAgIHBvcnRhbE9yaWdpbj1cInRlbXBvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgIDxJbmxpbmVGaWVsZCBsYWJlbD1cIk1pbiBEdXJhdGlvblwiIGludmFsaWQ9eyEhaW5wdXRFcnJvcnMubWluRHVyYXRpb259IGxhYmVsV2lkdGg9ezE0fSBncm93PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGlkPVwibWluRHVyYXRpb25cIlxuICAgICAgICAgICAgICB2YWx1ZT17cXVlcnkubWluRHVyYXRpb24gfHwgJyd9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtkdXJhdGlvblBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZWRNaW5EdXJhdGlvbiA9IHRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkubWluRHVyYXRpb24gPz8gJycpO1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeS5taW5EdXJhdGlvbiAmJiAhaXNWYWxpZEdvRHVyYXRpb24odGVtcGxhdGVkTWluRHVyYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICBzZXRJbnB1dEVycm9ycyh7IC4uLmlucHV0RXJyb3JzLCBtaW5EdXJhdGlvbjogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc2V0SW5wdXRFcnJvcnMoeyAuLi5pbnB1dEVycm9ycywgbWluRHVyYXRpb246IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgbWluRHVyYXRpb246IHYuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17b25LZXlEb3dufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiTWF4IER1cmF0aW9uXCIgaW52YWxpZD17ISFpbnB1dEVycm9ycy5tYXhEdXJhdGlvbn0gbGFiZWxXaWR0aD17MTR9IGdyb3c+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJtYXhEdXJhdGlvblwiXG4gICAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5tYXhEdXJhdGlvbiB8fCAnJ31cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2R1cmF0aW9uUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlZE1heER1cmF0aW9uID0gdGVtcGxhdGVTcnYucmVwbGFjZShxdWVyeS5tYXhEdXJhdGlvbiA/PyAnJyk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5Lm1heER1cmF0aW9uICYmICFpc1ZhbGlkR29EdXJhdGlvbih0ZW1wbGF0ZWRNYXhEdXJhdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgIHNldElucHV0RXJyb3JzKHsgLi4uaW5wdXRFcnJvcnMsIG1heER1cmF0aW9uOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzZXRJbnB1dEVycm9ycyh7IC4uLmlucHV0RXJyb3JzLCBtYXhEdXJhdGlvbjogZmFsc2UgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+XG4gICAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgICAgICAgICBtYXhEdXJhdGlvbjogdi5jdXJyZW50VGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXtvbktleURvd259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgICA8SW5saW5lRmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiTGltaXRcIlxuICAgICAgICAgICAgaW52YWxpZD17ISFpbnB1dEVycm9ycy5saW1pdH1cbiAgICAgICAgICAgIGxhYmVsV2lkdGg9ezE0fVxuICAgICAgICAgICAgZ3Jvd1xuICAgICAgICAgICAgdG9vbHRpcD1cIk1heGltdW0gbnVtYmVycyBvZiByZXR1cm5lZCByZXN1bHRzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJsaW1pdFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5saW1pdCB8fCAnJ31cbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaW1pdCA9IHYuY3VycmVudFRhcmdldC52YWx1ZSA/IHBhcnNlSW50KHYuY3VycmVudFRhcmdldC52YWx1ZSwgMTApIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGlmIChsaW1pdCAmJiAoIU51bWJlci5pc0ludGVnZXIobGltaXQpIHx8IGxpbWl0IDw9IDApKSB7XG4gICAgICAgICAgICAgICAgICBzZXRJbnB1dEVycm9ycyh7IC4uLmlucHV0RXJyb3JzLCBsaW1pdDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc2V0SW5wdXRFcnJvcnMoeyAuLi5pbnB1dEVycm9ycywgbGltaXQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgbGltaXQ6IHYuY3VycmVudFRhcmdldC52YWx1ZSA/IHBhcnNlSW50KHYuY3VycmVudFRhcmdldC52YWx1ZSwgMTApIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbktleURvd249e29uS2V5RG93bn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICAgIDwvZGl2PlxuICAgICAge2Vycm9yID8gKFxuICAgICAgICA8QWxlcnQgdGl0bGU9XCJVbmFibGUgdG8gY29ubmVjdCB0byBUZW1wbyBzZWFyY2hcIiBzZXZlcml0eT1cImluZm9cIiBjbGFzc05hbWU9e3N0eWxlcy5hbGVydH0+XG4gICAgICAgICAgUGxlYXNlIGVuc3VyZSB0aGF0IFRlbXBvIGlzIGNvbmZpZ3VyZWQgd2l0aCBzZWFyY2ggZW5hYmxlZC4gSWYgeW91IHdvdWxkIGxpa2UgdG8gaGlkZSB0aGlzIHRhYiwgeW91IGNhblxuICAgICAgICAgIGNvbmZpZ3VyZSBpdCBpbiB0aGUgPGEgaHJlZj17YC9kYXRhc291cmNlcy9lZGl0LyR7ZGF0YXNvdXJjZS51aWR9YH0+ZGF0YXNvdXJjZSBzZXR0aW5nczwvYT4uXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdGl2ZVNlYXJjaDtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBjb250YWluZXI6IGNzc2BcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICBgLFxuICBhbGVydDogY3NzYFxuICAgIG1heC13aWR0aDogNzVjaDtcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VBc3luYyBmcm9tICdyZWFjdC11c2UvbGliL3VzZUFzeW5jJztcblxuaW1wb3J0IHsgUXVlcnlFZGl0b3JQcm9wcywgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7XG4gIEJhZGdlLFxuICBGaWxlRHJvcHpvbmUsXG4gIElubGluZUZpZWxkLFxuICBJbmxpbmVGaWVsZFJvdyxcbiAgSW5saW5lTGFiZWwsXG4gIFF1ZXJ5RmllbGQsXG4gIFJhZGlvQnV0dG9uR3JvdXAsXG4gIFRoZW1lYWJsZTIsXG4gIHdpdGhUaGVtZTIsXG59IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgTG9raVF1ZXJ5RmllbGQgfSBmcm9tICcuLi8uLi9sb2tpL2NvbXBvbmVudHMvTG9raVF1ZXJ5RmllbGQnO1xuaW1wb3J0IHsgTG9raURhdGFzb3VyY2UgfSBmcm9tICcuLi8uLi9sb2tpL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgTG9raVF1ZXJ5IH0gZnJvbSAnLi4vLi4vbG9raS90eXBlcyc7XG5pbXBvcnQgeyBUZW1wb0RhdGFzb3VyY2UsIFRlbXBvUXVlcnksIFRlbXBvUXVlcnlUeXBlIH0gZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5cbmltcG9ydCBOYXRpdmVTZWFyY2ggZnJvbSAnLi9OYXRpdmVTZWFyY2gnO1xuaW1wb3J0IHsgU2VydmljZUdyYXBoU2VjdGlvbiB9IGZyb20gJy4vU2VydmljZUdyYXBoU2VjdGlvbic7XG5pbXBvcnQgeyBnZXREUyB9IGZyb20gJy4vdXRpbHMnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBRdWVyeUVkaXRvclByb3BzPFRlbXBvRGF0YXNvdXJjZSwgVGVtcG9RdWVyeT4sIFRoZW1lYWJsZTIge31cblxuY29uc3QgREVGQVVMVF9RVUVSWV9UWVBFOiBUZW1wb1F1ZXJ5VHlwZSA9ICd0cmFjZUlkJztcblxuY2xhc3MgVGVtcG9RdWVyeUZpZWxkQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBTZXQgaW5pdGlhbCBxdWVyeSB0eXBlIHRvIGVuc3VyZSB0cmFjZUlEIGZpZWxkIGFwcGVhcnNcbiAgICBpZiAoIXRoaXMucHJvcHMucXVlcnkucXVlcnlUeXBlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgICAgLi4udGhpcy5wcm9wcy5xdWVyeSxcbiAgICAgICAgcXVlcnlUeXBlOiBERUZBVUxUX1FVRVJZX1RZUEUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZUxpbmtlZFF1ZXJ5ID0gKHZhbHVlOiBMb2tpUXVlcnkpID0+IHtcbiAgICBjb25zdCB7IHF1ZXJ5LCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvbkNoYW5nZSh7XG4gICAgICAuLi5xdWVyeSxcbiAgICAgIGxpbmtlZFF1ZXJ5OiB7IC4uLnZhbHVlLCByZWZJZDogJ2xpbmtlZCcgfSxcbiAgICB9KTtcbiAgfTtcblxuICBvblJ1bkxpbmtlZFF1ZXJ5ID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25SdW5RdWVyeSgpO1xuICB9O1xuXG4gIG9uQ2xlYXJSZXN1bHRzID0gKCkgPT4ge1xuICAgIC8vIFJ1biBjbGVhciBxdWVyeSB0byBjbGVhciByZXN1bHRzXG4gICAgY29uc3QgeyBvbkNoYW5nZSwgcXVlcnksIG9uUnVuUXVlcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgb25DaGFuZ2Uoe1xuICAgICAgLi4ucXVlcnksXG4gICAgICBxdWVyeVR5cGU6ICdjbGVhcicsXG4gICAgfSk7XG4gICAgb25SdW5RdWVyeSgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHF1ZXJ5LCBvbkNoYW5nZSwgZGF0YXNvdXJjZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGxvZ3NEYXRhc291cmNlVWlkID0gZGF0YXNvdXJjZS5nZXRMb2tpU2VhcmNoRFMoKTtcblxuICAgIGNvbnN0IGdyYXBoRGF0YXNvdXJjZVVpZCA9IGRhdGFzb3VyY2Uuc2VydmljZU1hcD8uZGF0YXNvdXJjZVVpZDtcblxuICAgIGNvbnN0IHF1ZXJ5VHlwZU9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxUZW1wb1F1ZXJ5VHlwZT4+ID0gW1xuICAgICAgeyB2YWx1ZTogJ3RyYWNlSWQnLCBsYWJlbDogJ1RyYWNlSUQnIH0sXG4gICAgICB7IHZhbHVlOiAndXBsb2FkJywgbGFiZWw6ICdKU09OIGZpbGUnIH0sXG4gICAgXTtcblxuICAgIGlmIChjb25maWcuZmVhdHVyZVRvZ2dsZXMudGVtcG9TZXJ2aWNlR3JhcGgpIHtcbiAgICAgIHF1ZXJ5VHlwZU9wdGlvbnMucHVzaCh7IHZhbHVlOiAnc2VydmljZU1hcCcsIGxhYmVsOiAnU2VydmljZSBHcmFwaCcgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5mZWF0dXJlVG9nZ2xlcy50ZW1wb1NlYXJjaCAmJiAhZGF0YXNvdXJjZT8uc2VhcmNoPy5oaWRlKSB7XG4gICAgICBxdWVyeVR5cGVPcHRpb25zLnVuc2hpZnQoeyB2YWx1ZTogJ25hdGl2ZVNlYXJjaCcsIGxhYmVsOiAnU2VhcmNoIC0gQmV0YScgfSk7XG4gICAgfVxuXG4gICAgaWYgKGxvZ3NEYXRhc291cmNlVWlkKSB7XG4gICAgICBpZiAoIWNvbmZpZy5mZWF0dXJlVG9nZ2xlcy50ZW1wb1NlYXJjaCkge1xuICAgICAgICAvLyBQbGFjZSBhdCBiZWdpbm5pbmcgYXMgU2VhcmNoIGlmIG5vIG5hdGl2ZSBzZWFyY2hcbiAgICAgICAgcXVlcnlUeXBlT3B0aW9ucy51bnNoaWZ0KHsgdmFsdWU6ICdzZWFyY2gnLCBsYWJlbDogJ1NlYXJjaCcgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQbGFjZSBhdCBlbmQgYXMgTG9raSBTZWFyY2ggaWYgbmF0aXZlIHNlYXJjaCBpcyBlbmFibGVkXG4gICAgICAgIHF1ZXJ5VHlwZU9wdGlvbnMucHVzaCh7IHZhbHVlOiAnc2VhcmNoJywgbGFiZWw6ICdMb2tpIFNlYXJjaCcgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJRdWVyeSB0eXBlXCI+XG4gICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cDxUZW1wb1F1ZXJ5VHlwZT5cbiAgICAgICAgICAgICAgb3B0aW9ucz17cXVlcnlUeXBlT3B0aW9uc31cbiAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnF1ZXJ5VHlwZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsZWFyUmVzdWx0cygpO1xuXG4gICAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgICAgICAgICBxdWVyeVR5cGU6IHYsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgIHtxdWVyeS5xdWVyeVR5cGUgPT09ICduYXRpdmVTZWFyY2gnICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiAnNjVjaCcgfX0+XG4gICAgICAgICAgICA8QmFkZ2UgaWNvbj1cInJvY2tldFwiIHRleHQ9XCJCZXRhXCIgY29sb3I9XCJibHVlXCIgLz5cbiAgICAgICAgICAgIHtjb25maWcuZmVhdHVyZVRvZ2dsZXMudGVtcG9CYWNrZW5kU2VhcmNoID8gKFxuICAgICAgICAgICAgICA8PiZuYnNwO1RlbXBvIHNlYXJjaCBpcyBjdXJyZW50bHkgaW4gYmV0YS48Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgJm5ic3A7VGVtcG8gc2VhcmNoIGlzIGN1cnJlbnRseSBpbiBiZXRhIGFuZCBpcyBkZXNpZ25lZCB0byByZXR1cm4gcmVjZW50IHRyYWNlcyBvbmx5LiBJdCBpZ25vcmVzIHRoZVxuICAgICAgICAgICAgICAgIHRpbWUgcmFuZ2UgcGlja2VyLiBXZSBhcmUgYWN0aXZlbHkgd29ya2luZyBvbiBmdWxsIGJhY2tlbmQgc2VhcmNoLiBMb29rIGZvciBpbXByb3ZlbWVudHMgaW4gdGhlIG5lYXJcbiAgICAgICAgICAgICAgICBmdXR1cmUhXG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge3F1ZXJ5LnF1ZXJ5VHlwZSA9PT0gJ3NlYXJjaCcgJiYgKFxuICAgICAgICAgIDxTZWFyY2hTZWN0aW9uXG4gICAgICAgICAgICBsb2dzRGF0YXNvdXJjZVVpZD17bG9nc0RhdGFzb3VyY2VVaWR9XG4gICAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgICBvblJ1blF1ZXJ5PXt0aGlzLm9uUnVuTGlua2VkUXVlcnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUxpbmtlZFF1ZXJ5fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtxdWVyeS5xdWVyeVR5cGUgPT09ICduYXRpdmVTZWFyY2gnICYmIChcbiAgICAgICAgICA8TmF0aXZlU2VhcmNoXG4gICAgICAgICAgICBkYXRhc291cmNlPXt0aGlzLnByb3BzLmRhdGFzb3VyY2V9XG4gICAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBvbkJsdXI9e3RoaXMucHJvcHMub25CbHVyfVxuICAgICAgICAgICAgb25SdW5RdWVyeT17dGhpcy5wcm9wcy5vblJ1blF1ZXJ5fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtxdWVyeS5xdWVyeVR5cGUgPT09ICd1cGxvYWQnICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHsgcGFkZGluZzogdGhpcy5wcm9wcy50aGVtZS5zcGFjaW5nKDIpIH0pfT5cbiAgICAgICAgICAgIDxGaWxlRHJvcHpvbmVcbiAgICAgICAgICAgICAgb3B0aW9ucz17eyBtdWx0aXBsZTogZmFsc2UgfX1cbiAgICAgICAgICAgICAgb25Mb2FkPXsocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhc291cmNlLnVwbG9hZGVkSnNvbiA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uUnVuUXVlcnkoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtxdWVyeS5xdWVyeVR5cGUgPT09ICd0cmFjZUlkJyAmJiAoXG4gICAgICAgICAgPElubGluZUZpZWxkUm93PlxuICAgICAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiVHJhY2UgSURcIiBsYWJlbFdpZHRoPXsxNH0gZ3Jvdz5cbiAgICAgICAgICAgICAgPFF1ZXJ5RmllbGRcbiAgICAgICAgICAgICAgICBxdWVyeT17cXVlcnkucXVlcnl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucXVlcnksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB2YWwsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5VHlwZTogJ3RyYWNlSWQnLFxuICAgICAgICAgICAgICAgICAgICBsaW5rZWRRdWVyeTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMucHJvcHMub25CbHVyfVxuICAgICAgICAgICAgICAgIG9uUnVuUXVlcnk9e3RoaXMucHJvcHMub25SdW5RdWVyeX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J0VudGVyIGEgVHJhY2UgSUQgKHJ1biB3aXRoIFNoaWZ0K0VudGVyKSd9XG4gICAgICAgICAgICAgICAgcG9ydGFsT3JpZ2luPVwidGVtcG9cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAgICApfVxuICAgICAgICB7cXVlcnkucXVlcnlUeXBlID09PSAnc2VydmljZU1hcCcgJiYgKFxuICAgICAgICAgIDxTZXJ2aWNlR3JhcGhTZWN0aW9uIGdyYXBoRGF0YXNvdXJjZVVpZD17Z3JhcGhEYXRhc291cmNlVWlkfSBxdWVyeT17cXVlcnl9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFNlYXJjaFNlY3Rpb25Qcm9wcyB7XG4gIGxvZ3NEYXRhc291cmNlVWlkPzogc3RyaW5nO1xuICBvbkNoYW5nZTogKHZhbHVlOiBMb2tpUXVlcnkpID0+IHZvaWQ7XG4gIG9uUnVuUXVlcnk6ICgpID0+IHZvaWQ7XG4gIHF1ZXJ5OiBUZW1wb1F1ZXJ5O1xufVxuZnVuY3Rpb24gU2VhcmNoU2VjdGlvbih7IGxvZ3NEYXRhc291cmNlVWlkLCBvbkNoYW5nZSwgb25SdW5RdWVyeSwgcXVlcnkgfTogU2VhcmNoU2VjdGlvblByb3BzKSB7XG4gIGNvbnN0IGRzU3RhdGUgPSB1c2VBc3luYygoKSA9PiBnZXREUyhsb2dzRGF0YXNvdXJjZVVpZCksIFtsb2dzRGF0YXNvdXJjZVVpZF0pO1xuICBpZiAoZHNTdGF0ZS5sb2FkaW5nKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBkcyA9IGRzU3RhdGUudmFsdWUgYXMgTG9raURhdGFzb3VyY2U7XG5cbiAgaWYgKGRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxJbmxpbmVMYWJlbD5UZW1wbyB1c2VzIHtkcy5uYW1lfSB0byBmaW5kIHRyYWNlcy48L0lubGluZUxhYmVsPlxuICAgICAgICA8TG9raVF1ZXJ5RmllbGRcbiAgICAgICAgICBkYXRhc291cmNlPXtkc31cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgb25SdW5RdWVyeT17b25SdW5RdWVyeX1cbiAgICAgICAgICBxdWVyeT17cXVlcnkubGlua2VkUXVlcnkgPz8gKHsgcmVmSWQ6ICdsaW5rZWQnIH0gYXMgYW55KX1cbiAgICAgICAgICBoaXN0b3J5PXtbXX1cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICBpZiAoIWxvZ3NEYXRhc291cmNlVWlkKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13YXJuaW5nXCI+UGxlYXNlIHNldCB1cCBhIExva2kgc2VhcmNoIGRhdGFzb3VyY2UgaW4gdGhlIGRhdGFzb3VyY2Ugc2V0dGluZ3MuPC9kaXY+O1xuICB9XG5cbiAgaWYgKGxvZ3NEYXRhc291cmNlVWlkICYmICFkcykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2FybmluZ1wiPlxuICAgICAgICBMb2tpIHNlYXJjaCBkYXRhc291cmNlIGlzIGNvbmZpZ3VyZWQgYnV0IHRoZSBkYXRhIHNvdXJjZSBubyBsb25nZXIgZXhpc3RzLiBQbGVhc2UgY29uZmlndXJlIGV4aXN0aW5nIGRhdGEgc291cmNlXG4gICAgICAgIHRvIHVzZSB0aGUgc2VhcmNoLlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgVGVtcG9RdWVyeUZpZWxkID0gd2l0aFRoZW1lMihUZW1wb1F1ZXJ5RmllbGRDb21wb25lbnQpO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUFzeW5jIGZyb20gJ3JlYWN0LXVzZS9saWIvdXNlQXN5bmMnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBBZEhvY0ZpbHRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmVzL3ZhcmlhYmxlcy9hZGhvYy9waWNrZXIvQWRIb2NGaWx0ZXInO1xuaW1wb3J0IHsgQWRIb2NWYXJpYWJsZUZpbHRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmVzL3ZhcmlhYmxlcy90eXBlcyc7XG5pbXBvcnQgeyBQcm9tZXRoZXVzRGF0YXNvdXJjZSB9IGZyb20gJy4uLy4uL3Byb21ldGhldXMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBUZW1wb1F1ZXJ5IH0gZnJvbSAnLi4vZGF0YXNvdXJjZSc7XG5cbmltcG9ydCB7IGdldERTIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBTZXJ2aWNlR3JhcGhTZWN0aW9uKHtcbiAgZ3JhcGhEYXRhc291cmNlVWlkLFxuICBxdWVyeSxcbiAgb25DaGFuZ2UsXG59OiB7XG4gIGdyYXBoRGF0YXNvdXJjZVVpZD86IHN0cmluZztcbiAgcXVlcnk6IFRlbXBvUXVlcnk7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IFRlbXBvUXVlcnkpID0+IHZvaWQ7XG59KSB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBkc1N0YXRlID0gdXNlQXN5bmMoKCkgPT4gZ2V0RFMoZ3JhcGhEYXRhc291cmNlVWlkKSwgW2dyYXBoRGF0YXNvdXJjZVVpZF0pO1xuXG4gIC8vIENoZWNrIGlmIHNlcnZpY2UgZ3JhcGggbWV0cmljcyBhcmUgYmVpbmcgY29sbGVjdGVkLiBJZiBub3QsIGRpc3BsYXlzIGEgd2FybmluZ1xuICBjb25zdCBbaGFzS2V5cywgc2V0SGFzS2V5c10gPSB1c2VTdGF0ZTxib29sZWFuIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZuKGRzOiBQcm9tZXRoZXVzRGF0YXNvdXJjZSkge1xuICAgICAgY29uc3Qga2V5cyA9IGF3YWl0IGRzLmdldFRhZ0tleXMoe1xuICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAndHJhY2VzX3NlcnZpY2VfZ3JhcGhfcmVxdWVzdF9zZXJ2ZXJfc2Vjb25kc19zdW0nLFxuICAgICAgICAgICd0cmFjZXNfc2VydmljZV9ncmFwaF9yZXF1ZXN0X3RvdGFsJyxcbiAgICAgICAgICAndHJhY2VzX3NlcnZpY2VfZ3JhcGhfcmVxdWVzdF9mYWlsZWRfdG90YWwnLFxuICAgICAgICBdLFxuICAgICAgfSk7XG4gICAgICBzZXRIYXNLZXlzKEJvb2xlYW4oa2V5cy5sZW5ndGgpKTtcbiAgICB9XG4gICAgaWYgKCFkc1N0YXRlLmxvYWRpbmcgJiYgZHNTdGF0ZS52YWx1ZSkge1xuICAgICAgZm4oZHNTdGF0ZS52YWx1ZSBhcyBQcm9tZXRoZXVzRGF0YXNvdXJjZSk7XG4gICAgfVxuICB9LCBbZHNTdGF0ZV0pO1xuXG4gIGlmIChkc1N0YXRlLmxvYWRpbmcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGRzID0gZHNTdGF0ZS52YWx1ZSBhcyBQcm9tZXRoZXVzRGF0YXNvdXJjZTtcblxuICBpZiAoIWdyYXBoRGF0YXNvdXJjZVVpZCkge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2FybmluZ1wiPlBsZWFzZSBzZXQgdXAgYSBzZXJ2aWNlIGdyYXBoIGRhdGFzb3VyY2UgaW4gdGhlIGRhdGFzb3VyY2Ugc2V0dGluZ3MuPC9kaXY+O1xuICB9XG5cbiAgaWYgKGdyYXBoRGF0YXNvdXJjZVVpZCAmJiAhZHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdhcm5pbmdcIj5cbiAgICAgICAgU2VydmljZSBncmFwaCBkYXRhc291cmNlIGlzIGNvbmZpZ3VyZWQgYnV0IHRoZSBkYXRhIHNvdXJjZSBubyBsb25nZXIgZXhpc3RzLiBQbGVhc2UgY29uZmlndXJlIGV4aXN0aW5nIGRhdGFcbiAgICAgICAgc291cmNlIHRvIHVzZSB0aGUgc2VydmljZSBncmFwaCBmdW5jdGlvbmFsaXR5LlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBjb25zdCBmaWx0ZXJzID0gcXVlcnlUb0ZpbHRlcihxdWVyeS5zZXJ2aWNlTWFwUXVlcnkgfHwgJycpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJbmxpbmVGaWVsZFJvdz5cbiAgICAgICAgPElubGluZUZpZWxkIGxhYmVsPVwiRmlsdGVyXCIgbGFiZWxXaWR0aD17MTR9IGdyb3c+XG4gICAgICAgICAgPEFkSG9jRmlsdGVyXG4gICAgICAgICAgICBkYXRhc291cmNlPXt7IHVpZDogZ3JhcGhEYXRhc291cmNlVWlkIH19XG4gICAgICAgICAgICBmaWx0ZXJzPXtmaWx0ZXJzfVxuICAgICAgICAgICAgZ2V0VGFnS2V5c09wdGlvbnM9e3tcbiAgICAgICAgICAgICAgc2VyaWVzOiBbXG4gICAgICAgICAgICAgICAgJ3RyYWNlc19zZXJ2aWNlX2dyYXBoX3JlcXVlc3Rfc2VydmVyX3NlY29uZHNfc3VtJyxcbiAgICAgICAgICAgICAgICAndHJhY2VzX3NlcnZpY2VfZ3JhcGhfcmVxdWVzdF90b3RhbCcsXG4gICAgICAgICAgICAgICAgJ3RyYWNlc19zZXJ2aWNlX2dyYXBoX3JlcXVlc3RfZmFpbGVkX3RvdGFsJyxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhZGRGaWx0ZXI9eyhmaWx0ZXI6IEFkSG9jVmFyaWFibGVGaWx0ZXIpID0+IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIC4uLnF1ZXJ5LFxuICAgICAgICAgICAgICAgIHNlcnZpY2VNYXBRdWVyeTogZmlsdGVyc1RvUXVlcnkoWy4uLmZpbHRlcnMsIGZpbHRlcl0pLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICByZW1vdmVGaWx0ZXI9eyhpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld0ZpbHRlcnMgPSBbLi4uZmlsdGVyc107XG4gICAgICAgICAgICAgIG5ld0ZpbHRlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVyeSwgc2VydmljZU1hcFF1ZXJ5OiBmaWx0ZXJzVG9RdWVyeShuZXdGaWx0ZXJzKSB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjaGFuZ2VGaWx0ZXI9eyhpbmRleDogbnVtYmVyLCBmaWx0ZXI6IEFkSG9jVmFyaWFibGVGaWx0ZXIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3RmlsdGVycyA9IFsuLi5maWx0ZXJzXTtcbiAgICAgICAgICAgICAgbmV3RmlsdGVycy5zcGxpY2UoaW5kZXgsIDEsIGZpbHRlcik7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlcnksIHNlcnZpY2VNYXBRdWVyeTogZmlsdGVyc1RvUXVlcnkobmV3RmlsdGVycykgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgICAge2hhc0tleXMgPT09IGZhbHNlID8gKFxuICAgICAgICA8QWxlcnQgdGl0bGU9XCJObyBzZXJ2aWNlIGdyYXBoIGRhdGEgZm91bmRcIiBzZXZlcml0eT1cImluZm9cIiBjbGFzc05hbWU9e3N0eWxlcy5hbGVydH0+XG4gICAgICAgICAgUGxlYXNlIGVuc3VyZSB0aGF0IHNlcnZpY2UgZ3JhcGggbWV0cmljcyBhcmUgc2V0IHVwIGNvcnJlY3RseSBhY2NvcmRpbmcgdG8gdGhleycgJ31cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ3JhZmFuYS5jb20vZG9jcy90ZW1wby9uZXh0L2dyYWZhbmEtYWdlbnQvc2VydmljZS1ncmFwaHMvXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBUZW1wbyBkb2N1bWVudGF0aW9uXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIC5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBxdWVyeVRvRmlsdGVyKHF1ZXJ5OiBzdHJpbmcpOiBBZEhvY1ZhcmlhYmxlRmlsdGVyW10ge1xuICBsZXQgbWF0Y2g7XG4gIGxldCBmaWx0ZXJzOiBBZEhvY1ZhcmlhYmxlRmlsdGVyW10gPSBbXTtcbiAgY29uc3QgcmUgPSAvKFtcXHdfXSspKD18IT18PHw+fD1+fCF+KVwiKC4qPylcIi9nO1xuICB3aGlsZSAoKG1hdGNoID0gcmUuZXhlYyhxdWVyeSkpICE9PSBudWxsKSB7XG4gICAgZmlsdGVycy5wdXNoKHtcbiAgICAgIGtleTogbWF0Y2hbMV0sXG4gICAgICBvcGVyYXRvcjogbWF0Y2hbMl0sXG4gICAgICB2YWx1ZTogbWF0Y2hbM10sXG4gICAgICBjb25kaXRpb246ICcnLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBmaWx0ZXJzO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJzVG9RdWVyeShmaWx0ZXJzOiBBZEhvY1ZhcmlhYmxlRmlsdGVyW10pOiBzdHJpbmcge1xuICByZXR1cm4gYHske2ZpbHRlcnMubWFwKChmKSA9PiBgJHtmLmtleX0ke2Yub3BlcmF0b3J9XCIke2YudmFsdWV9XCJgKS5qb2luKCcsJyl9fWA7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgYWxlcnQ6IGNzc2BcbiAgICBtYXgtd2lkdGg6IDc1Y2g7XG4gICAgbWFyZ2luLXRvcDogJHt0aGVtZS5zcGFjaW5nKDIpfTtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZUFwaSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgZ2V0RGF0YVNvdXJjZVNydiB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RFModWlkPzogc3RyaW5nKTogUHJvbWlzZTxEYXRhU291cmNlQXBpIHwgdW5kZWZpbmVkPiB7XG4gIGlmICghdWlkKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNvbnN0IGRzU3J2ID0gZ2V0RGF0YVNvdXJjZVNydigpO1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBkc1Nydi5nZXQodWlkKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBkYXRhIHNvdXJjZScsIGVycm9yKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IERhdGFTb3VyY2VIdHRwU2V0dGluZ3MgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBOb2RlR3JhcGhTZXR0aW5ncyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvTm9kZUdyYXBoU2V0dGluZ3MnO1xuaW1wb3J0IHsgVHJhY2VUb0xvZ3NTZXR0aW5ncyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVHJhY2VUb0xvZ3MvVHJhY2VUb0xvZ3NTZXR0aW5ncyc7XG5pbXBvcnQgeyBUcmFjZVRvTWV0cmljc1NldHRpbmdzIH0gZnJvbSAnYXBwL2NvcmUvY29tcG9uZW50cy9UcmFjZVRvTWV0cmljcy9UcmFjZVRvTWV0cmljc1NldHRpbmdzJztcblxuaW1wb3J0IHsgTG9raVNlYXJjaFNldHRpbmdzIH0gZnJvbSAnLi9Mb2tpU2VhcmNoU2V0dGluZ3MnO1xuaW1wb3J0IHsgU2VhcmNoU2V0dGluZ3MgfSBmcm9tICcuL1NlYXJjaFNldHRpbmdzJztcbmltcG9ydCB7IFNlcnZpY2VHcmFwaFNldHRpbmdzIH0gZnJvbSAnLi9TZXJ2aWNlR3JhcGhTZXR0aW5ncyc7XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcztcblxuZXhwb3J0IGNvbnN0IENvbmZpZ0VkaXRvcjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPERhdGFTb3VyY2VIdHRwU2V0dGluZ3NcbiAgICAgICAgZGVmYXVsdFVybD1cImh0dHA6Ly90ZW1wb1wiXG4gICAgICAgIGRhdGFTb3VyY2VDb25maWc9e29wdGlvbnN9XG4gICAgICAgIHNob3dBY2Nlc3NPcHRpb25zPXtmYWxzZX1cbiAgICAgICAgb25DaGFuZ2U9e29uT3B0aW9uc0NoYW5nZX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICA8VHJhY2VUb0xvZ3NTZXR0aW5ncyBvcHRpb25zPXtvcHRpb25zfSBvbk9wdGlvbnNDaGFuZ2U9e29uT3B0aW9uc0NoYW5nZX0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Y29uZmlnLmZlYXR1cmVUb2dnbGVzLnRyYWNlVG9NZXRyaWNzID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8VHJhY2VUb01ldHJpY3NTZXR0aW5ncyBvcHRpb25zPXtvcHRpb25zfSBvbk9wdGlvbnNDaGFuZ2U9e29uT3B0aW9uc0NoYW5nZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cblxuICAgICAge2NvbmZpZy5mZWF0dXJlVG9nZ2xlcy50ZW1wb1NlcnZpY2VHcmFwaCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxTZXJ2aWNlR3JhcGhTZXR0aW5ncyBvcHRpb25zPXtvcHRpb25zfSBvbk9wdGlvbnNDaGFuZ2U9e29uT3B0aW9uc0NoYW5nZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7Y29uZmlnLmZlYXR1cmVUb2dnbGVzLnRlbXBvU2VhcmNoICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPFNlYXJjaFNldHRpbmdzIG9wdGlvbnM9e29wdGlvbnN9IG9uT3B0aW9uc0NoYW5nZT17b25PcHRpb25zQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2YtZm9ybS1ncm91cFwiPlxuICAgICAgICA8Tm9kZUdyYXBoU2V0dGluZ3Mgb3B0aW9ucz17b3B0aW9uc30gb25PcHRpb25zQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtLWdyb3VwXCI+XG4gICAgICAgIDxMb2tpU2VhcmNoU2V0dGluZ3Mgb3B0aW9ucz17b3B0aW9uc30gb25PcHRpb25zQ2hhbmdlPXtvbk9wdGlvbnNDaGFuZ2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcywgR3JhZmFuYVRoZW1lLCB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VQaWNrZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFRlbXBvSnNvbkRhdGEgfSBmcm9tICcuLi9kYXRhc291cmNlJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wczxUZW1wb0pzb25EYXRhPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gTG9raVNlYXJjaFNldHRpbmdzKHsgb3B0aW9ucywgb25PcHRpb25zQ2hhbmdlIH06IFByb3BzKSB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuXG4gIC8vIERlZmF1bHQgdG8gdGhlIHRyYWNlIHRvIGxvZ3MgZGF0YXNvdXJjZSBpZiBjb25maWd1cmVkIGFuZCBsb2tpIHNlYXJjaCB3YXMgZW5hYmxlZFxuICAvLyBidXQgb25seSBpZiBqc29uRGF0YS5sb2tpU2VhcmNoIGhhc24ndCBiZWVuIHNldFxuICBjb25zdCBsZWdhY3lEYXRhc291cmNlID1cbiAgICBvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8ubG9raVNlYXJjaCAhPT0gZmFsc2UgPyBvcHRpb25zLmpzb25EYXRhLnRyYWNlc1RvTG9ncz8uZGF0YXNvdXJjZVVpZCA6IHVuZGVmaW5lZDtcbiAgaWYgKGxlZ2FjeURhdGFzb3VyY2UgJiYgb3B0aW9ucy5qc29uRGF0YS5sb2tpU2VhcmNoID09PSB1bmRlZmluZWQpIHtcbiAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ2xva2lTZWFyY2gnLCB7XG4gICAgICBkYXRhc291cmNlVWlkOiBsZWdhY3lEYXRhc291cmNlLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHsgd2lkdGg6ICcxMDAlJyB9KX0+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+TG9raSBTZWFyY2g8L2gzPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9UZXh0fT5cbiAgICAgICAgU2VsZWN0IGEgTG9raSBkYXRhc291cmNlIHRvIHNlYXJjaCBmb3IgdHJhY2VzLiBEZXJpdmVkIGZpZWxkcyBtdXN0IGJlIGNvbmZpZ3VyZWQgaW4gdGhlIExva2kgZGF0YSBzb3VyY2UuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPElubGluZUZpZWxkUm93IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgIDxJbmxpbmVGaWVsZCB0b29sdGlwPVwiVGhlIExva2kgZGF0YSBzb3VyY2Ugd2l0aCB0aGUgc2VydmljZSBncmFwaCBkYXRhXCIgbGFiZWw9XCJEYXRhIHNvdXJjZVwiIGxhYmVsV2lkdGg9ezI2fT5cbiAgICAgICAgICA8RGF0YVNvdXJjZVBpY2tlclxuICAgICAgICAgICAgaW5wdXRJZD1cImxva2ktc2VhcmNoLWRhdGEtc291cmNlLXBpY2tlclwiXG4gICAgICAgICAgICBwbHVnaW5JZD1cImxva2lcIlxuICAgICAgICAgICAgY3VycmVudD17b3B0aW9ucy5qc29uRGF0YS5sb2tpU2VhcmNoPy5kYXRhc291cmNlVWlkfVxuICAgICAgICAgICAgbm9EZWZhdWx0PXt0cnVlfVxuICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhkcykgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICdsb2tpU2VhcmNoJywge1xuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6IGRzLnVpZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICB7b3B0aW9ucy5qc29uRGF0YS5sb2tpU2VhcmNoPy5kYXRhc291cmNlVWlkID8gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9eydidXR0b24nfVxuICAgICAgICAgICAgdmFyaWFudD17J3NlY29uZGFyeSd9XG4gICAgICAgICAgICBzaXplPXsnc20nfVxuICAgICAgICAgICAgZmlsbD17J3RleHQnfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ2xva2lTZWFyY2gnLCB7XG4gICAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4gKHtcbiAgaW5mb1RleHQ6IGNzc2BcbiAgICBsYWJlbDogaW5mb1RleHQ7XG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gIGAsXG5cbiAgcm93OiBjc3NgXG4gICAgbGFiZWw6IHJvdztcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzLCBHcmFmYW5hVGhlbWUsIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCBJbmxpbmVTd2l0Y2gsIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgVGVtcG9Kc29uRGF0YSB9IGZyb20gJy4uL2RhdGFzb3VyY2UnO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBEYXRhU291cmNlUGx1Z2luT3B0aW9uc0VkaXRvclByb3BzPFRlbXBvSnNvbkRhdGE+IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hTZXR0aW5ncyh7IG9wdGlvbnMsIG9uT3B0aW9uc0NoYW5nZSB9OiBQcm9wcykge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJwYWdlLWhlYWRpbmdcIj5TZWFyY2g8L2gzPlxuICAgICAgPElubGluZUZpZWxkUm93IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgIDxJbmxpbmVGaWVsZCB0b29sdGlwPVwiUmVtb3ZlcyB0aGUgU2VhcmNoIHRhYiBmcm9tIHRoZSBUZW1wbyBxdWVyeSBlZGl0b3IuXCIgbGFiZWw9XCJIaWRlIHNlYXJjaFwiIGxhYmVsV2lkdGg9ezI2fT5cbiAgICAgICAgICA8SW5saW5lU3dpdGNoXG4gICAgICAgICAgICBpZD1cImhpZGVTZWFyY2hcIlxuICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuanNvbkRhdGEuc2VhcmNoPy5oaWRlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XG4gICAgICAgICAgICAgIHVwZGF0ZURhdGFzb3VyY2VQbHVnaW5Kc29uRGF0YU9wdGlvbih7IG9uT3B0aW9uc0NoYW5nZSwgb3B0aW9ucyB9LCAnc2VhcmNoJywge1xuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnMuanNvbkRhdGEuc2VhcmNoLFxuICAgICAgICAgICAgICAgIGhpZGU6IGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgPC9JbmxpbmVGaWVsZFJvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIGNvbnRhaW5lcjogY3NzYFxuICAgIGxhYmVsOiBjb250YWluZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gIGAsXG4gIHJvdzogY3NzYFxuICAgIGxhYmVsOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wcywgR3JhZmFuYVRoZW1lLCB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24gfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IERhdGFTb3VyY2VQaWNrZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEJ1dHRvbiwgSW5saW5lRmllbGQsIElubGluZUZpZWxkUm93LCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFRlbXBvSnNvbkRhdGEgfSBmcm9tICcuLi9kYXRhc291cmNlJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgRGF0YVNvdXJjZVBsdWdpbk9wdGlvbnNFZGl0b3JQcm9wczxUZW1wb0pzb25EYXRhPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gU2VydmljZUdyYXBoU2V0dGluZ3MoeyBvcHRpb25zLCBvbk9wdGlvbnNDaGFuZ2UgfTogUHJvcHMpIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzKHsgd2lkdGg6ICcxMDAlJyB9KX0+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwicGFnZS1oZWFkaW5nXCI+U2VydmljZSBHcmFwaDwvaDM+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1RleHR9PlxuICAgICAgICBUbyBhbGxvdyBxdWVyeWluZyBzZXJ2aWNlIGdyYXBoIGRhdGEgeW91IGhhdmUgdG8gc2VsZWN0IGEgUHJvbWV0aGV1cyBpbnN0YW5jZSB3aGVyZSB0aGUgZGF0YSBpcyBzdG9yZWQuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPElubGluZUZpZWxkUm93IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgIDxJbmxpbmVGaWVsZFxuICAgICAgICAgIHRvb2x0aXA9XCJUaGUgUHJvbWV0aGV1cyBkYXRhIHNvdXJjZSB3aXRoIHRoZSBzZXJ2aWNlIGdyYXBoIGRhdGFcIlxuICAgICAgICAgIGxhYmVsPVwiRGF0YSBzb3VyY2VcIlxuICAgICAgICAgIGxhYmVsV2lkdGg9ezI2fVxuICAgICAgICA+XG4gICAgICAgICAgPERhdGFTb3VyY2VQaWNrZXJcbiAgICAgICAgICAgIGlucHV0SWQ9XCJzZXJ2aWNlLWdyYXBoLWRhdGEtc291cmNlLXBpY2tlclwiXG4gICAgICAgICAgICBwbHVnaW5JZD1cInByb21ldGhldXNcIlxuICAgICAgICAgICAgY3VycmVudD17b3B0aW9ucy5qc29uRGF0YS5zZXJ2aWNlTWFwPy5kYXRhc291cmNlVWlkfVxuICAgICAgICAgICAgbm9EZWZhdWx0PXt0cnVlfVxuICAgICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhkcykgPT5cbiAgICAgICAgICAgICAgdXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uKHsgb25PcHRpb25zQ2hhbmdlLCBvcHRpb25zIH0sICdzZXJ2aWNlTWFwJywge1xuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6IGRzLnVpZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0lubGluZUZpZWxkPlxuICAgICAgICB7b3B0aW9ucy5qc29uRGF0YS5zZXJ2aWNlTWFwPy5kYXRhc291cmNlVWlkID8gKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9eydidXR0b24nfVxuICAgICAgICAgICAgdmFyaWFudD17J3NlY29uZGFyeSd9XG4gICAgICAgICAgICBzaXplPXsnc20nfVxuICAgICAgICAgICAgZmlsbD17J3RleHQnfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB1cGRhdGVEYXRhc291cmNlUGx1Z2luSnNvbkRhdGFPcHRpb24oeyBvbk9wdGlvbnNDaGFuZ2UsIG9wdGlvbnMgfSwgJ3NlcnZpY2VNYXAnLCB7XG4gICAgICAgICAgICAgICAgZGF0YXNvdXJjZVVpZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L0lubGluZUZpZWxkUm93PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZSkgPT4gKHtcbiAgaW5mb1RleHQ6IGNzc2BcbiAgICBsYWJlbDogaW5mb1RleHQ7XG4gICAgcGFkZGluZy1ib3R0b206ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHRTZW1pV2Vha307XG4gIGAsXG5cbiAgcm93OiBjc3NgXG4gICAgbGFiZWw6IHJvdztcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGlkZW50aXR5LCBwaWNrLCBwaWNrQnksIGdyb3VwQnksIHN0YXJ0Q2FzZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBFTVBUWSwgZnJvbSwgbWVyZ2UsIE9ic2VydmFibGUsIG9mLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCB0b0FycmF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBEYXRhUXVlcnksXG4gIERhdGFRdWVyeVJlcXVlc3QsXG4gIERhdGFRdWVyeVJlc3BvbnNlLFxuICBEYXRhU291cmNlQXBpLFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgRGF0YVNvdXJjZUpzb25EYXRhLFxuICBpc1ZhbGlkR29EdXJhdGlvbixcbiAgTG9hZGluZ1N0YXRlLFxuICBTY29wZWRWYXJzLFxufSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7XG4gIGNvbmZpZyxcbiAgQmFja2VuZFNydlJlcXVlc3QsXG4gIERhdGFTb3VyY2VXaXRoQmFja2VuZCxcbiAgZ2V0QmFja2VuZFNydixcbiAgVGVtcGxhdGVTcnYsXG4gIGdldFRlbXBsYXRlU3J2LFxufSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IE5vZGVHcmFwaE9wdGlvbnMgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL05vZGVHcmFwaFNldHRpbmdzJztcbmltcG9ydCB7IFRyYWNlVG9Mb2dzT3B0aW9ucyB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvVHJhY2VUb0xvZ3MvVHJhY2VUb0xvZ3NTZXR0aW5ncyc7XG5pbXBvcnQgeyBzZXJpYWxpemVQYXJhbXMgfSBmcm9tICdhcHAvY29yZS91dGlscy9mZXRjaCc7XG5pbXBvcnQgeyBnZXREYXRhc291cmNlU3J2IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3BsdWdpbnMvZGF0YXNvdXJjZV9zcnYnO1xuXG5pbXBvcnQgeyBMb2tpT3B0aW9ucywgTG9raVF1ZXJ5IH0gZnJvbSAnLi4vbG9raS90eXBlcyc7XG5pbXBvcnQgeyBQcm9tZXRoZXVzRGF0YXNvdXJjZSB9IGZyb20gJy4uL3Byb21ldGhldXMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBQcm9tUXVlcnkgfSBmcm9tICcuLi9wcm9tZXRoZXVzL3R5cGVzJztcblxuaW1wb3J0IHtcbiAgZmFpbGVkTWV0cmljLFxuICBoaXN0b2dyYW1NZXRyaWMsXG4gIG1hcFByb21NZXRyaWNzVG9TZXJ2aWNlTWFwLFxuICBzZXJ2aWNlTWFwTWV0cmljcyxcbiAgdG90YWxzTWV0cmljLFxufSBmcm9tICcuL2dyYXBoVHJhbnNmb3JtJztcbmltcG9ydCB7XG4gIHRyYW5zZm9ybVRyYWNlLFxuICB0cmFuc2Zvcm1UcmFjZUxpc3QsXG4gIHRyYW5zZm9ybUZyb21PVExQIGFzIHRyYW5zZm9ybUZyb21PVEVMLFxuICBjcmVhdGVUYWJsZUZyYW1lRnJvbVNlYXJjaCxcbn0gZnJvbSAnLi9yZXN1bHRUcmFuc2Zvcm1lcic7XG5cbi8vIHNlYXJjaCA9IExva2kgc2VhcmNoLCBuYXRpdmVTZWFyY2ggPSBUZW1wbyBzZWFyY2ggZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5leHBvcnQgdHlwZSBUZW1wb1F1ZXJ5VHlwZSA9ICdzZWFyY2gnIHwgJ3RyYWNlSWQnIHwgJ3NlcnZpY2VNYXAnIHwgJ3VwbG9hZCcgfCAnbmF0aXZlU2VhcmNoJyB8ICdjbGVhcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcG9Kc29uRGF0YSBleHRlbmRzIERhdGFTb3VyY2VKc29uRGF0YSB7XG4gIHRyYWNlc1RvTG9ncz86IFRyYWNlVG9Mb2dzT3B0aW9ucztcbiAgc2VydmljZU1hcD86IHtcbiAgICBkYXRhc291cmNlVWlkPzogc3RyaW5nO1xuICB9O1xuICBzZWFyY2g/OiB7XG4gICAgaGlkZT86IGJvb2xlYW47XG4gIH07XG4gIG5vZGVHcmFwaD86IE5vZGVHcmFwaE9wdGlvbnM7XG4gIGxva2lTZWFyY2g/OiB7XG4gICAgZGF0YXNvdXJjZVVpZD86IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZW1wb1F1ZXJ5IGV4dGVuZHMgRGF0YVF1ZXJ5IHtcbiAgcXVlcnk6IHN0cmluZztcbiAgLy8gUXVlcnkgdG8gZmluZCBsaXN0IG9mIHRyYWNlcywgZS5nLiwgdmlhIExva2lcbiAgbGlua2VkUXVlcnk/OiBMb2tpUXVlcnk7XG4gIHNlYXJjaDogc3RyaW5nO1xuICBxdWVyeVR5cGU6IFRlbXBvUXVlcnlUeXBlO1xuICBzZXJ2aWNlTmFtZT86IHN0cmluZztcbiAgc3Bhbk5hbWU/OiBzdHJpbmc7XG4gIG1pbkR1cmF0aW9uPzogc3RyaW5nO1xuICBtYXhEdXJhdGlvbj86IHN0cmluZztcbiAgbGltaXQ/OiBudW1iZXI7XG4gIHNlcnZpY2VNYXBRdWVyeT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNlYXJjaFF1ZXJ5UGFyYW1zIHtcbiAgbWluRHVyYXRpb24/OiBzdHJpbmc7XG4gIG1heER1cmF0aW9uPzogc3RyaW5nO1xuICBsaW1pdD86IG51bWJlcjtcbiAgdGFnczogc3RyaW5nO1xuICBzdGFydD86IG51bWJlcjtcbiAgZW5kPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9MSU1JVCA9IDIwO1xuXG5leHBvcnQgY2xhc3MgVGVtcG9EYXRhc291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZVdpdGhCYWNrZW5kPFRlbXBvUXVlcnksIFRlbXBvSnNvbkRhdGE+IHtcbiAgdHJhY2VzVG9Mb2dzPzogVHJhY2VUb0xvZ3NPcHRpb25zO1xuICBzZXJ2aWNlTWFwPzoge1xuICAgIGRhdGFzb3VyY2VVaWQ/OiBzdHJpbmc7XG4gIH07XG4gIHNlYXJjaD86IHtcbiAgICBoaWRlPzogYm9vbGVhbjtcbiAgfTtcbiAgbm9kZUdyYXBoPzogTm9kZUdyYXBoT3B0aW9ucztcbiAgbG9raVNlYXJjaD86IHtcbiAgICBkYXRhc291cmNlVWlkPzogc3RyaW5nO1xuICB9O1xuICB1cGxvYWRlZEpzb24/OiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3M8VGVtcG9Kc29uRGF0YT4sXG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZVNydjogVGVtcGxhdGVTcnYgPSBnZXRUZW1wbGF0ZVNydigpXG4gICkge1xuICAgIHN1cGVyKGluc3RhbmNlU2V0dGluZ3MpO1xuICAgIHRoaXMudHJhY2VzVG9Mb2dzID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS50cmFjZXNUb0xvZ3M7XG4gICAgdGhpcy5zZXJ2aWNlTWFwID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS5zZXJ2aWNlTWFwO1xuICAgIHRoaXMuc2VhcmNoID0gaW5zdGFuY2VTZXR0aW5ncy5qc29uRGF0YS5zZWFyY2g7XG4gICAgdGhpcy5ub2RlR3JhcGggPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLm5vZGVHcmFwaDtcbiAgICB0aGlzLmxva2lTZWFyY2ggPSBpbnN0YW5jZVNldHRpbmdzLmpzb25EYXRhLmxva2lTZWFyY2g7XG4gIH1cblxuICBxdWVyeShvcHRpb25zOiBEYXRhUXVlcnlSZXF1ZXN0PFRlbXBvUXVlcnk+KTogT2JzZXJ2YWJsZTxEYXRhUXVlcnlSZXNwb25zZT4ge1xuICAgIGNvbnN0IHN1YlF1ZXJpZXM6IEFycmF5PE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+PiA9IFtdO1xuICAgIGNvbnN0IGZpbHRlcmVkVGFyZ2V0cyA9IG9wdGlvbnMudGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4gIXRhcmdldC5oaWRlKTtcbiAgICBjb25zdCB0YXJnZXRzOiB7IFt0eXBlOiBzdHJpbmddOiBUZW1wb1F1ZXJ5W10gfSA9IGdyb3VwQnkoZmlsdGVyZWRUYXJnZXRzLCAodCkgPT4gdC5xdWVyeVR5cGUgfHwgJ3RyYWNlSWQnKTtcblxuICAgIGlmICh0YXJnZXRzLmNsZWFyKSB7XG4gICAgICByZXR1cm4gb2YoeyBkYXRhOiBbXSwgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGxvZ3NEYXRhc291cmNlVWlkID0gdGhpcy5nZXRMb2tpU2VhcmNoRFMoKTtcblxuICAgIC8vIFJ1biBzZWFyY2ggcXVlcmllcyBvbiBsaW5rZWQgZGF0YXNvdXJjZVxuICAgIGlmIChsb2dzRGF0YXNvdXJjZVVpZCAmJiB0YXJnZXRzLnNlYXJjaD8ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZHNTcnYgPSBnZXREYXRhc291cmNlU3J2KCk7XG4gICAgICBzdWJRdWVyaWVzLnB1c2goXG4gICAgICAgIGZyb20oZHNTcnYuZ2V0KGxvZ3NEYXRhc291cmNlVWlkKSkucGlwZShcbiAgICAgICAgICBtZXJnZU1hcCgobGlua2VkRGF0YXNvdXJjZTogRGF0YVNvdXJjZUFwaSkgPT4ge1xuICAgICAgICAgICAgLy8gV3JhcCBsaW5rZWQgcXVlcnkgaW50byBhIGRhdGEgcmVxdWVzdCBiYXNlZCBvbiBvcmlnaW5hbCByZXF1ZXN0XG4gICAgICAgICAgICBjb25zdCBsaW5rZWRSZXF1ZXN0OiBEYXRhUXVlcnlSZXF1ZXN0ID0geyAuLi5vcHRpb25zLCB0YXJnZXRzOiB0YXJnZXRzLnNlYXJjaC5tYXAoKHQpID0+IHQubGlua2VkUXVlcnkhKSB9O1xuICAgICAgICAgICAgLy8gRmluZCB0cmFjZSBtYXRjaGVycyBpbiBkZXJpdmVkIGZpZWxkcyBvZiB0aGUgbGlua2VkIGRhdGFzb3VyY2UgdGhhdCdzIGlkZW50aWNhbCB0byB0aGlzIGRhdGFzb3VyY2VcbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5nczxMb2tpT3B0aW9ucz4gPSAobGlua2VkRGF0YXNvdXJjZSBhcyBhbnkpLmluc3RhbmNlU2V0dGluZ3M7XG4gICAgICAgICAgICBjb25zdCB0cmFjZUxpbmtNYXRjaGVyOiBzdHJpbmdbXSA9XG4gICAgICAgICAgICAgIHNldHRpbmdzLmpzb25EYXRhLmRlcml2ZWRGaWVsZHNcbiAgICAgICAgICAgICAgICA/LmZpbHRlcigoZmllbGQpID0+IGZpZWxkLmRhdGFzb3VyY2VVaWQgPT09IHRoaXMudWlkICYmIGZpZWxkLm1hdGNoZXJSZWdleClcbiAgICAgICAgICAgICAgICAubWFwKChmaWVsZCkgPT4gZmllbGQubWF0Y2hlclJlZ2V4KSB8fCBbXTtcblxuICAgICAgICAgICAgaWYgKCF0cmFjZUxpbmtNYXRjaGVyIHx8IHRyYWNlTGlua01hdGNoZXIubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKFxuICAgICAgICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdObyBMb2tpIGRhdGFzb3VyY2UgY29uZmlndXJlZCBmb3Igc2VhcmNoLiBTZXQgdXAgRGVyaXZlZCBGaWVsZHMgZm9yIHRyYWNlcyBpbiBhIExva2kgZGF0YXNvdXJjZSBzZXR0aW5ncyBhbmQgbGluayBpdCB0byB0aGlzIFRlbXBvIGRhdGFzb3VyY2UuJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChsaW5rZWREYXRhc291cmNlLnF1ZXJ5KGxpbmtlZFJlcXVlc3QpIGFzIE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+KS5waXBlKFxuICAgICAgICAgICAgICAgIG1hcCgocmVzcG9uc2UpID0+XG4gICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvciA/IHJlc3BvbnNlIDogdHJhbnNmb3JtVHJhY2VMaXN0KHJlc3BvbnNlLCB0aGlzLnVpZCwgdGhpcy5uYW1lLCB0cmFjZUxpbmtNYXRjaGVyKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRzLm5hdGl2ZVNlYXJjaD8ubGVuZ3RoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0aW1lUmFuZ2UgPSBjb25maWcuZmVhdHVyZVRvZ2dsZXMudGVtcG9CYWNrZW5kU2VhcmNoXG4gICAgICAgICAgPyB7IHN0YXJ0VGltZTogb3B0aW9ucy5yYW5nZS5mcm9tLnVuaXgoKSwgZW5kVGltZTogb3B0aW9ucy5yYW5nZS50by51bml4KCkgfVxuICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBxdWVyeSA9IHRoaXMuYXBwbHlWYXJpYWJsZXModGFyZ2V0cy5uYXRpdmVTZWFyY2hbMF0sIG9wdGlvbnMuc2NvcGVkVmFycyk7XG4gICAgICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5idWlsZFNlYXJjaFF1ZXJ5KHF1ZXJ5LCB0aW1lUmFuZ2UpO1xuICAgICAgICBzdWJRdWVyaWVzLnB1c2goXG4gICAgICAgICAgdGhpcy5fcmVxdWVzdCgnL2FwaS9zZWFyY2gnLCBzZWFyY2hRdWVyeSkucGlwZShcbiAgICAgICAgICAgIG1hcCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBbY3JlYXRlVGFibGVGcmFtZUZyb21TZWFyY2gocmVzcG9uc2UuZGF0YS50cmFjZXMsIHRoaXMuaW5zdGFuY2VTZXR0aW5ncyldLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gb2YoeyBlcnJvcjogeyBtZXNzYWdlOiBlcnJvci5kYXRhLm1lc3NhZ2UgfSwgZGF0YTogW10gfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBvZih7IGVycm9yOiB7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSwgZGF0YTogW10gfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldHMudXBsb2FkPy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLnVwbG9hZGVkSnNvbikge1xuICAgICAgICBjb25zdCBvdGVsVHJhY2VEYXRhID0gSlNPTi5wYXJzZSh0aGlzLnVwbG9hZGVkSnNvbiBhcyBzdHJpbmcpO1xuICAgICAgICBpZiAoIW90ZWxUcmFjZURhdGEuYmF0Y2hlcykge1xuICAgICAgICAgIHN1YlF1ZXJpZXMucHVzaChvZih7IGVycm9yOiB7IG1lc3NhZ2U6ICdKU09OIGlzIG5vdCB2YWxpZCBPcGVuVGVsZW1ldHJ5IGZvcm1hdCcgfSwgZGF0YTogW10gfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN1YlF1ZXJpZXMucHVzaChvZih0cmFuc2Zvcm1Gcm9tT1RFTChvdGVsVHJhY2VEYXRhLmJhdGNoZXMsIHRoaXMubm9kZUdyYXBoPy5lbmFibGVkKSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJRdWVyaWVzLnB1c2gob2YoeyBkYXRhOiBbXSwgc3RhdGU6IExvYWRpbmdTdGF0ZS5Eb25lIH0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXJ2aWNlTWFwPy5kYXRhc291cmNlVWlkICYmIHRhcmdldHMuc2VydmljZU1hcD8ubGVuZ3RoID4gMCkge1xuICAgICAgc3ViUXVlcmllcy5wdXNoKHNlcnZpY2VNYXBRdWVyeShvcHRpb25zLCB0aGlzLnNlcnZpY2VNYXAuZGF0YXNvdXJjZVVpZCkpO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRzLnRyYWNlSWQ/Lmxlbmd0aCA+IDApIHtcbiAgICAgIHN1YlF1ZXJpZXMucHVzaCh0aGlzLmhhbmRsZVRyYWNlSWRRdWVyeShvcHRpb25zLCB0YXJnZXRzLnRyYWNlSWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2UoLi4uc3ViUXVlcmllcyk7XG4gIH1cblxuICBhcHBseVRlbXBsYXRlVmFyaWFibGVzKHF1ZXJ5OiBUZW1wb1F1ZXJ5LCBzY29wZWRWYXJzOiBTY29wZWRWYXJzKTogUmVjb3JkPHN0cmluZywgYW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYXBwbHlWYXJpYWJsZXMocXVlcnksIHNjb3BlZFZhcnMpO1xuICB9XG5cbiAgaW50ZXJwb2xhdGVWYXJpYWJsZXNJblF1ZXJpZXMocXVlcmllczogVGVtcG9RdWVyeVtdLCBzY29wZWRWYXJzOiBTY29wZWRWYXJzKTogVGVtcG9RdWVyeVtdIHtcbiAgICBpZiAoIXF1ZXJpZXMgfHwgcXVlcmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcXVlcmllcy5tYXAoKHF1ZXJ5KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgZGF0YXNvdXJjZTogdGhpcy5nZXRSZWYoKSxcbiAgICAgICAgLi4udGhpcy5hcHBseVZhcmlhYmxlcyhxdWVyeSwgc2NvcGVkVmFycyksXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlWYXJpYWJsZXMocXVlcnk6IFRlbXBvUXVlcnksIHNjb3BlZFZhcnM6IFNjb3BlZFZhcnMpIHtcbiAgICBjb25zdCBleHBhbmRlZFF1ZXJ5ID0geyAuLi5xdWVyeSB9O1xuXG4gICAgaWYgKHF1ZXJ5LmxpbmtlZFF1ZXJ5KSB7XG4gICAgICBleHBhbmRlZFF1ZXJ5LmxpbmtlZFF1ZXJ5ID0ge1xuICAgICAgICAuLi5xdWVyeS5saW5rZWRRdWVyeSxcbiAgICAgICAgZXhwcjogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LmxpbmtlZFF1ZXJ5Py5leHByID8/ICcnLCBzY29wZWRWYXJzKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmV4cGFuZGVkUXVlcnksXG4gICAgICBxdWVyeTogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnF1ZXJ5ID8/ICcnLCBzY29wZWRWYXJzKSxcbiAgICAgIHNlYXJjaDogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5LnNlYXJjaCA/PyAnJywgc2NvcGVkVmFycyksXG4gICAgICBtaW5EdXJhdGlvbjogdGhpcy50ZW1wbGF0ZVNydi5yZXBsYWNlKHF1ZXJ5Lm1pbkR1cmF0aW9uID8/ICcnLCBzY29wZWRWYXJzKSxcbiAgICAgIG1heER1cmF0aW9uOiB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UocXVlcnkubWF4RHVyYXRpb24gPz8gJycsIHNjb3BlZFZhcnMpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgc2ltcGxlc3Qgb2YgdGhlIHF1ZXJpZXMgd2hlcmUgd2UgaGF2ZSBqdXN0IGEgdHJhY2UgaWQgYW5kIHJldHVybiB0cmFjZSBkYXRhIGZvciBpdC5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHBhcmFtIHRhcmdldHNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHByaXZhdGUgaGFuZGxlVHJhY2VJZFF1ZXJ5KFxuICAgIG9wdGlvbnM6IERhdGFRdWVyeVJlcXVlc3Q8VGVtcG9RdWVyeT4sXG4gICAgdGFyZ2V0czogVGVtcG9RdWVyeVtdXG4gICk6IE9ic2VydmFibGU8RGF0YVF1ZXJ5UmVzcG9uc2U+IHtcbiAgICBjb25zdCB2YWxpZFRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcigodCkgPT4gdC5xdWVyeSk7XG4gICAgaWYgKCF2YWxpZFRhcmdldHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gRU1QVFk7XG4gICAgfVxuXG4gICAgY29uc3QgdHJhY2VSZXF1ZXN0OiBEYXRhUXVlcnlSZXF1ZXN0PFRlbXBvUXVlcnk+ID0geyAuLi5vcHRpb25zLCB0YXJnZXRzOiB2YWxpZFRhcmdldHMgfTtcbiAgICByZXR1cm4gc3VwZXIucXVlcnkodHJhY2VSZXF1ZXN0KS5waXBlKFxuICAgICAgbWFwKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybVRyYWNlKHJlc3BvbnNlLCB0aGlzLm5vZGVHcmFwaD8uZW5hYmxlZCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBhc3luYyBtZXRhZGF0YVJlcXVlc3QodXJsOiBzdHJpbmcsIHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX3JlcXVlc3QodXJsLCBwYXJhbXMsIHsgbWV0aG9kOiAnR0VUJywgaGlkZUZyb21JbnNwZWN0b3I6IHRydWUgfSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIF9yZXF1ZXN0KGFwaVVybDogc3RyaW5nLCBkYXRhPzogYW55LCBvcHRpb25zPzogUGFydGlhbDxCYWNrZW5kU3J2UmVxdWVzdD4pOiBPYnNlcnZhYmxlPFJlY29yZDxzdHJpbmcsIGFueT4+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBkYXRhID8gc2VyaWFsaXplUGFyYW1zKGRhdGEpIDogJyc7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5pbnN0YW5jZVNldHRpbmdzLnVybH0ke2FwaVVybH0ke3BhcmFtcy5sZW5ndGggPyBgPyR7cGFyYW1zfWAgOiAnJ31gO1xuICAgIGNvbnN0IHJlcSA9IHsgLi4ub3B0aW9ucywgdXJsIH07XG5cbiAgICByZXR1cm4gZ2V0QmFja2VuZFNydigpLmZldGNoKHJlcSk7XG4gIH1cblxuICBhc3luYyB0ZXN0RGF0YXNvdXJjZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IG9wdGlvbnM6IEJhY2tlbmRTcnZSZXF1ZXN0ID0ge1xuICAgICAgaGVhZGVyczoge30sXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiBgJHt0aGlzLmluc3RhbmNlU2V0dGluZ3MudXJsfS9hcGkvZWNob2AsXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEJhY2tlbmRTcnYoKS5mZXRjaDxhbnk+KG9wdGlvbnMpLnRvUHJvbWlzZSgpO1xuXG4gICAgaWYgKHJlc3BvbnNlPy5vaykge1xuICAgICAgcmV0dXJuIHsgc3RhdHVzOiAnc3VjY2VzcycsIG1lc3NhZ2U6ICdEYXRhIHNvdXJjZSBpcyB3b3JraW5nJyB9O1xuICAgIH1cbiAgfVxuXG4gIGdldFF1ZXJ5RGlzcGxheVRleHQocXVlcnk6IFRlbXBvUXVlcnkpIHtcbiAgICBpZiAocXVlcnkucXVlcnlUeXBlID09PSAnbmF0aXZlU2VhcmNoJykge1xuICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgWydzZXJ2aWNlTmFtZScsICdzcGFuTmFtZScsICdzZWFyY2gnLCAnbWluRHVyYXRpb24nLCAnbWF4RHVyYXRpb24nLCAnbGltaXQnXSkge1xuICAgICAgICBpZiAocXVlcnkuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBxdWVyeVtrZXkgYXMga2V5b2YgVGVtcG9RdWVyeV0pIHtcbiAgICAgICAgICByZXN1bHQucHVzaChgJHtzdGFydENhc2Uoa2V5KX06ICR7cXVlcnlba2V5IGFzIGtleW9mIFRlbXBvUXVlcnldfWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJywgJyk7XG4gICAgfVxuICAgIHJldHVybiBxdWVyeS5xdWVyeTtcbiAgfVxuXG4gIGJ1aWxkU2VhcmNoUXVlcnkocXVlcnk6IFRlbXBvUXVlcnksIHRpbWVSYW5nZT86IHsgc3RhcnRUaW1lOiBudW1iZXI7IGVuZFRpbWU/OiBudW1iZXIgfSk6IFNlYXJjaFF1ZXJ5UGFyYW1zIHtcbiAgICBsZXQgdGFncyA9IHF1ZXJ5LnNlYXJjaCA/PyAnJztcblxuICAgIGxldCB0ZW1wb1F1ZXJ5ID0gcGljayhxdWVyeSwgWydtaW5EdXJhdGlvbicsICdtYXhEdXJhdGlvbicsICdsaW1pdCddKTtcbiAgICAvLyBSZW1vdmUgZW1wdHkgcHJvcGVydGllc1xuICAgIHRlbXBvUXVlcnkgPSBwaWNrQnkodGVtcG9RdWVyeSwgaWRlbnRpdHkpO1xuXG4gICAgaWYgKHF1ZXJ5LnNlcnZpY2VOYW1lKSB7XG4gICAgICB0YWdzICs9IGAgc2VydmljZS5uYW1lPVwiJHtxdWVyeS5zZXJ2aWNlTmFtZX1cImA7XG4gICAgfVxuICAgIGlmIChxdWVyeS5zcGFuTmFtZSkge1xuICAgICAgdGFncyArPSBgIG5hbWU9XCIke3F1ZXJ5LnNwYW5OYW1lfVwiYDtcbiAgICB9XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBsaW1pdFxuICAgIGlmICghdGVtcG9RdWVyeS5saW1pdCkge1xuICAgICAgdGVtcG9RdWVyeS5saW1pdCA9IERFRkFVTFRfTElNSVQ7XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgcXVlcnkgaW5wdXRzIGFuZCByZW1vdmUgc3BhY2VzIGlmIHZhbGlkXG4gICAgaWYgKHRlbXBvUXVlcnkubWluRHVyYXRpb24pIHtcbiAgICAgIHRlbXBvUXVlcnkubWluRHVyYXRpb24gPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodGVtcG9RdWVyeS5taW5EdXJhdGlvbiA/PyAnJyk7XG4gICAgICBpZiAoIWlzVmFsaWRHb0R1cmF0aW9uKHRlbXBvUXVlcnkubWluRHVyYXRpb24pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGVudGVyIGEgdmFsaWQgbWluIGR1cmF0aW9uLicpO1xuICAgICAgfVxuICAgICAgdGVtcG9RdWVyeS5taW5EdXJhdGlvbiA9IHRlbXBvUXVlcnkubWluRHVyYXRpb24ucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICB9XG4gICAgaWYgKHRlbXBvUXVlcnkubWF4RHVyYXRpb24pIHtcbiAgICAgIHRlbXBvUXVlcnkubWF4RHVyYXRpb24gPSB0aGlzLnRlbXBsYXRlU3J2LnJlcGxhY2UodGVtcG9RdWVyeS5tYXhEdXJhdGlvbiA/PyAnJyk7XG4gICAgICBpZiAoIWlzVmFsaWRHb0R1cmF0aW9uKHRlbXBvUXVlcnkubWF4RHVyYXRpb24pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGVudGVyIGEgdmFsaWQgbWF4IGR1cmF0aW9uLicpO1xuICAgICAgfVxuICAgICAgdGVtcG9RdWVyeS5tYXhEdXJhdGlvbiA9IHRlbXBvUXVlcnkubWF4RHVyYXRpb24ucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICB9XG5cbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIodGVtcG9RdWVyeS5saW1pdCkgfHwgdGVtcG9RdWVyeS5saW1pdCA8PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGxpbWl0LicpO1xuICAgIH1cblxuICAgIGxldCBzZWFyY2hRdWVyeTogU2VhcmNoUXVlcnlQYXJhbXMgPSB7IHRhZ3MsIC4uLnRlbXBvUXVlcnkgfTtcblxuICAgIGlmICh0aW1lUmFuZ2UpIHtcbiAgICAgIHNlYXJjaFF1ZXJ5LnN0YXJ0ID0gdGltZVJhbmdlLnN0YXJ0VGltZTtcbiAgICAgIHNlYXJjaFF1ZXJ5LmVuZCA9IHRpbWVSYW5nZS5lbmRUaW1lO1xuICAgIH1cblxuICAgIHJldHVybiBzZWFyY2hRdWVyeTtcbiAgfVxuXG4gIGFzeW5jIGdldFNlcnZpY2VHcmFwaExhYmVscygpIHtcbiAgICBjb25zdCBkcyA9IGF3YWl0IGdldERhdGFzb3VyY2VTcnYoKS5nZXQodGhpcy5zZXJ2aWNlTWFwIS5kYXRhc291cmNlVWlkKTtcbiAgICByZXR1cm4gZHMuZ2V0VGFnS2V5cyEoKTtcbiAgfVxuXG4gIGFzeW5jIGdldFNlcnZpY2VHcmFwaExhYmVsVmFsdWVzKGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgZHMgPSBhd2FpdCBnZXREYXRhc291cmNlU3J2KCkuZ2V0KHRoaXMuc2VydmljZU1hcCEuZGF0YXNvdXJjZVVpZCk7XG4gICAgcmV0dXJuIGRzLmdldFRhZ1ZhbHVlcyEoeyBrZXkgfSk7XG4gIH1cblxuICAvLyBHZXQgbGlua2VkIGxva2kgc2VhcmNoIGRhdGFzb3VyY2UuIEZhbGwgYmFjayB0byBsZWdhY3kgbG9raSBzZWFyY2gvdHJhY2UgdG8gbG9ncyBjb25maWdcbiAgZ2V0TG9raVNlYXJjaERTID0gKCk6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG4gICAgY29uc3QgbGVnYWN5TG9nc0RhdGFzb3VyY2VVaWQgPVxuICAgICAgdGhpcy50cmFjZXNUb0xvZ3M/Lmxva2lTZWFyY2ggIT09IGZhbHNlICYmIHRoaXMubG9raVNlYXJjaCA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gdGhpcy50cmFjZXNUb0xvZ3M/LmRhdGFzb3VyY2VVaWRcbiAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRoaXMubG9raVNlYXJjaD8uZGF0YXNvdXJjZVVpZCA/PyBsZWdhY3lMb2dzRGF0YXNvdXJjZVVpZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcXVlcnlTZXJ2aWNlTWFwUHJvbWV0aGV1cyhyZXF1ZXN0OiBEYXRhUXVlcnlSZXF1ZXN0PFByb21RdWVyeT4sIGRhdGFzb3VyY2VVaWQ6IHN0cmluZykge1xuICByZXR1cm4gZnJvbShnZXREYXRhc291cmNlU3J2KCkuZ2V0KGRhdGFzb3VyY2VVaWQpKS5waXBlKFxuICAgIG1lcmdlTWFwKChkcykgPT4ge1xuICAgICAgcmV0dXJuIChkcyBhcyBQcm9tZXRoZXVzRGF0YXNvdXJjZSkucXVlcnkocmVxdWVzdCk7XG4gICAgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gc2VydmljZU1hcFF1ZXJ5KHJlcXVlc3Q6IERhdGFRdWVyeVJlcXVlc3Q8VGVtcG9RdWVyeT4sIGRhdGFzb3VyY2VVaWQ6IHN0cmluZykge1xuICByZXR1cm4gcXVlcnlTZXJ2aWNlTWFwUHJvbWV0aGV1cyhtYWtlUHJvbVNlcnZpY2VNYXBSZXF1ZXN0KHJlcXVlc3QpLCBkYXRhc291cmNlVWlkKS5waXBlKFxuICAgIC8vIEp1c3QgY29sbGVjdCBhbGwgdGhlIHJlc3BvbnNlcyBmaXJzdCBiZWZvcmUgcHJvY2Vzc2luZyBpbnRvIG5vZGUgZ3JhcGggZGF0YVxuICAgIHRvQXJyYXkoKSxcbiAgICBtYXAoKHJlc3BvbnNlczogRGF0YVF1ZXJ5UmVzcG9uc2VbXSkgPT4ge1xuICAgICAgY29uc3QgZXJyb3JSZXMgPSByZXNwb25zZXMuZmluZCgocmVzKSA9PiAhIXJlcy5lcnJvcik7XG4gICAgICBpZiAoZXJyb3JSZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUmVzLmVycm9yIS5tZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBub2RlcywgZWRnZXMgfSA9IG1hcFByb21NZXRyaWNzVG9TZXJ2aWNlTWFwKHJlc3BvbnNlcywgcmVxdWVzdC5yYW5nZSk7XG4gICAgICBub2Rlcy5maWVsZHNbMF0uY29uZmlnID0ge1xuICAgICAgICBsaW5rczogW1xuICAgICAgICAgIG1ha2VQcm9tTGluayhcbiAgICAgICAgICAgICdSZXF1ZXN0IHJhdGUnLFxuICAgICAgICAgICAgYHJhdGUoJHt0b3RhbHNNZXRyaWN9e3NlcnZlcj1cIlxcJHtfX2RhdGEuZmllbGRzLmlkfVwifVskX19yYXRlX2ludGVydmFsXSlgLFxuICAgICAgICAgICAgZGF0YXNvdXJjZVVpZFxuICAgICAgICAgICksXG4gICAgICAgICAgbWFrZVByb21MaW5rKFxuICAgICAgICAgICAgJ1JlcXVlc3QgaGlzdG9ncmFtJyxcbiAgICAgICAgICAgIGBoaXN0b2dyYW1fcXVhbnRpbGUoMC45LCBzdW0ocmF0ZSgke2hpc3RvZ3JhbU1ldHJpY317c2VydmVyPVwiXFwke19fZGF0YS5maWVsZHMuaWR9XCJ9WyRfX3JhdGVfaW50ZXJ2YWxdKSkgYnkgKGxlLCBjbGllbnQsIHNlcnZlcikpYCxcbiAgICAgICAgICAgIGRhdGFzb3VyY2VVaWRcbiAgICAgICAgICApLFxuICAgICAgICAgIG1ha2VQcm9tTGluayhcbiAgICAgICAgICAgICdGYWlsZWQgcmVxdWVzdCByYXRlJyxcbiAgICAgICAgICAgIGByYXRlKCR7ZmFpbGVkTWV0cmljfXtzZXJ2ZXI9XCJcXCR7X19kYXRhLmZpZWxkcy5pZH1cIn1bJF9fcmF0ZV9pbnRlcnZhbF0pYCxcbiAgICAgICAgICAgIGRhdGFzb3VyY2VVaWRcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogW25vZGVzLCBlZGdlc10sXG4gICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgIH07XG4gICAgfSlcbiAgKTtcbn1cblxuZnVuY3Rpb24gbWFrZVByb21MaW5rKHRpdGxlOiBzdHJpbmcsIG1ldHJpYzogc3RyaW5nLCBkYXRhc291cmNlVWlkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHtcbiAgICB1cmw6ICcnLFxuICAgIHRpdGxlLFxuICAgIGludGVybmFsOiB7XG4gICAgICBxdWVyeToge1xuICAgICAgICBleHByOiBtZXRyaWMsXG4gICAgICB9IGFzIFByb21RdWVyeSxcbiAgICAgIGRhdGFzb3VyY2VVaWQsXG4gICAgICBkYXRhc291cmNlTmFtZTogJ1Byb21ldGhldXMnLFxuICAgIH0sXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm9tU2VydmljZU1hcFJlcXVlc3Qob3B0aW9uczogRGF0YVF1ZXJ5UmVxdWVzdDxUZW1wb1F1ZXJ5Pik6IERhdGFRdWVyeVJlcXVlc3Q8UHJvbVF1ZXJ5PiB7XG4gIHJldHVybiB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICB0YXJnZXRzOiBzZXJ2aWNlTWFwTWV0cmljcy5tYXAoKG1ldHJpYykgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVmSWQ6IG1ldHJpYyxcbiAgICAgICAgLy8gb3B0aW9ucy50YXJnZXRzWzBdIGlzIG5vdCBjb3JyZWN0IGhlcmUsIGJ1dCBub3Qgc3VyZSB3aGF0IHNob3VsZCBoYXBwZW4gaWYgeW91IGhhdmUgbXVsdGlwbGUgcXVlcmllcyBmb3JcbiAgICAgICAgLy8gc2VydmljZSBtYXAgYXQgdGhlIHNhbWUgdGltZSBhbnl3YXlcbiAgICAgICAgZXhwcjogYGRlbHRhKCR7bWV0cmljfSR7b3B0aW9ucy50YXJnZXRzWzBdLnNlcnZpY2VNYXBRdWVyeSB8fCAnJ31bJF9fcmFuZ2VdKWAsXG4gICAgICAgIGluc3RhbnQ6IHRydWUsXG4gICAgICB9O1xuICAgIH0pLFxuICB9O1xufVxuIiwiaW1wb3J0IHtcbiAgRGF0YUZyYW1lLFxuICBEYXRhRnJhbWVWaWV3LFxuICBEYXRhUXVlcnlSZXNwb25zZSxcbiAgRmllbGRDb2xvck1vZGVJZCxcbiAgRmllbGREVE8sXG4gIE11dGFibGVEYXRhRnJhbWUsXG4gIE5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMgYXMgRmllbGRzLFxuICBUaW1lUmFuZ2UsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBnZXROb25PdmVybGFwcGluZ0R1cmF0aW9uLCBnZXRTdGF0cywgbWFrZUZyYW1lcywgbWFrZVNwYW5NYXAgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3V0aWxzL3RyYWNpbmcnO1xuXG4vKipcbiAqIFJvdyBpbiBhIHRyYWNlIGRhdGFGcmFtZVxuICovXG5pbnRlcmZhY2UgUm93IHtcbiAgdHJhY2VJRDogc3RyaW5nO1xuICBzcGFuSUQ6IHN0cmluZztcbiAgcGFyZW50U3BhbklEOiBzdHJpbmc7XG4gIG9wZXJhdGlvbk5hbWU6IHN0cmluZztcbiAgc2VydmljZU5hbWU6IHN0cmluZztcbiAgc2VydmljZVRhZ3M6IHN0cmluZztcbiAgc3RhcnRUaW1lOiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIGxvZ3M6IHN0cmluZztcbiAgdGFnczogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgTm9kZSB7XG4gIFtGaWVsZHMuaWRdOiBzdHJpbmc7XG4gIFtGaWVsZHMudGl0bGVdOiBzdHJpbmc7XG4gIFtGaWVsZHMuc3ViVGl0bGVdOiBzdHJpbmc7XG4gIFtGaWVsZHMubWFpblN0YXRdOiBzdHJpbmc7XG4gIFtGaWVsZHMuc2Vjb25kYXJ5U3RhdF06IHN0cmluZztcbiAgW0ZpZWxkcy5jb2xvcl06IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEVkZ2Uge1xuICBbRmllbGRzLmlkXTogc3RyaW5nO1xuICBbRmllbGRzLnRhcmdldF06IHN0cmluZztcbiAgW0ZpZWxkcy5zb3VyY2VdOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHcmFwaEZyYW1lcyhkYXRhOiBEYXRhRnJhbWUpOiBEYXRhRnJhbWVbXSB7XG4gIGNvbnN0IHsgbm9kZXMsIGVkZ2VzIH0gPSBjb252ZXJ0VHJhY2VUb0dyYXBoKGRhdGEpO1xuICBjb25zdCBbbm9kZXNGcmFtZSwgZWRnZXNGcmFtZV0gPSBtYWtlRnJhbWVzKCk7XG5cbiAgZm9yIChjb25zdCBub2RlIG9mIG5vZGVzKSB7XG4gICAgbm9kZXNGcmFtZS5hZGQobm9kZSk7XG4gIH1cbiAgZm9yIChjb25zdCBlZGdlIG9mIGVkZ2VzKSB7XG4gICAgZWRnZXNGcmFtZS5hZGQoZWRnZSk7XG4gIH1cblxuICByZXR1cm4gW25vZGVzRnJhbWUsIGVkZ2VzRnJhbWVdO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VHJhY2VUb0dyYXBoKGRhdGE6IERhdGFGcmFtZSk6IHsgbm9kZXM6IE5vZGVbXTsgZWRnZXM6IEVkZ2VbXSB9IHtcbiAgY29uc3Qgbm9kZXM6IE5vZGVbXSA9IFtdO1xuICBjb25zdCBlZGdlczogRWRnZVtdID0gW107XG5cbiAgY29uc3QgdmlldyA9IG5ldyBEYXRhRnJhbWVWaWV3PFJvdz4oZGF0YSk7XG5cbiAgY29uc3QgdHJhY2VEdXJhdGlvbiA9IGZpbmRUcmFjZUR1cmF0aW9uKHZpZXcpO1xuICBjb25zdCBzcGFuTWFwID0gbWFrZVNwYW5NYXAoKGluZGV4KSA9PiB7XG4gICAgaWYgKGluZGV4ID49IGRhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBzcGFuID0gdmlldy5nZXQoaW5kZXgpO1xuICAgIHJldHVybiB7XG4gICAgICBzcGFuOiB7IC4uLnNwYW4gfSxcbiAgICAgIGlkOiBzcGFuLnNwYW5JRCxcbiAgICAgIHBhcmVudElkczogc3Bhbi5wYXJlbnRTcGFuSUQgPyBbc3Bhbi5wYXJlbnRTcGFuSURdIDogW10sXG4gICAgfTtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm93ID0gdmlldy5nZXQoaSk7XG5cbiAgICBjb25zdCByYW5nZXM6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+ID0gc3Bhbk1hcFtyb3cuc3BhbklEXS5jaGlsZHJlbi5tYXAoKGMpID0+IHtcbiAgICAgIGNvbnN0IHNwYW4gPSBzcGFuTWFwW2NdLnNwYW47XG4gICAgICByZXR1cm4gW3NwYW4uc3RhcnRUaW1lLCBzcGFuLnN0YXJ0VGltZSArIHNwYW4uZHVyYXRpb25dO1xuICAgIH0pO1xuICAgIGNvbnN0IGNoaWxkcmVuRHVyYXRpb24gPSBnZXROb25PdmVybGFwcGluZ0R1cmF0aW9uKHJhbmdlcyk7XG4gICAgY29uc3Qgc2VsZkR1cmF0aW9uID0gcm93LmR1cmF0aW9uIC0gY2hpbGRyZW5EdXJhdGlvbjtcbiAgICBjb25zdCBzdGF0cyA9IGdldFN0YXRzKHJvdy5kdXJhdGlvbiwgdHJhY2VEdXJhdGlvbiwgc2VsZkR1cmF0aW9uKTtcblxuICAgIG5vZGVzLnB1c2goe1xuICAgICAgW0ZpZWxkcy5pZF06IHJvdy5zcGFuSUQsXG4gICAgICBbRmllbGRzLnRpdGxlXTogcm93LnNlcnZpY2VOYW1lID8/ICcnLFxuICAgICAgW0ZpZWxkcy5zdWJUaXRsZV06IHJvdy5vcGVyYXRpb25OYW1lLFxuICAgICAgW0ZpZWxkcy5tYWluU3RhdF06IHN0YXRzLm1haW4sXG4gICAgICBbRmllbGRzLnNlY29uZGFyeVN0YXRdOiBzdGF0cy5zZWNvbmRhcnksXG4gICAgICBbRmllbGRzLmNvbG9yXTogc2VsZkR1cmF0aW9uIC8gdHJhY2VEdXJhdGlvbixcbiAgICB9KTtcblxuICAgIC8vIFNvbWV0aW1lcyBzb21lIHNwYW4gY2FuIGJlIG1pc3NpbmcuIERvbid0IGFkZCBlZGdlcyBmb3IgdGhvc2UuXG4gICAgaWYgKHJvdy5wYXJlbnRTcGFuSUQgJiYgc3Bhbk1hcFtyb3cucGFyZW50U3BhbklEXS5zcGFuKSB7XG4gICAgICBlZGdlcy5wdXNoKHtcbiAgICAgICAgW0ZpZWxkcy5pZF06IHJvdy5wYXJlbnRTcGFuSUQgKyAnLS0nICsgcm93LnNwYW5JRCxcbiAgICAgICAgW0ZpZWxkcy50YXJnZXRdOiByb3cuc3BhbklELFxuICAgICAgICBbRmllbGRzLnNvdXJjZV06IHJvdy5wYXJlbnRTcGFuSUQsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBub2RlcywgZWRnZXMgfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGR1cmF0aW9uIG9mIHRoZSB3aG9sZSB0cmFjZSBhcyBpdCBpc24ndCBhIHBhcnQgb2YgdGhlIHJlc3BvbnNlIGRhdGEuXG4gKiBOb3RlOiBTZWVtcyBsaWtlIHRoaXMgc2hvdWxkIGJlIHRoZSBzYW1lIGFzIGp1c3QgbG9uZ2VzdCBzcGFuLCBidXQgdGhpcyBpcyBwcm9iYWJseSBzYWZlci5cbiAqL1xuZnVuY3Rpb24gZmluZFRyYWNlRHVyYXRpb24odmlldzogRGF0YUZyYW1lVmlldzxSb3c+KTogbnVtYmVyIHtcbiAgbGV0IHRyYWNlRW5kVGltZSA9IDA7XG4gIGxldCB0cmFjZVN0YXJ0VGltZSA9IEluZmluaXR5O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IHZpZXcuZ2V0KGkpO1xuXG4gICAgaWYgKHJvdy5zdGFydFRpbWUgPCB0cmFjZVN0YXJ0VGltZSkge1xuICAgICAgdHJhY2VTdGFydFRpbWUgPSByb3cuc3RhcnRUaW1lO1xuICAgIH1cblxuICAgIGlmIChyb3cuc3RhcnRUaW1lICsgcm93LmR1cmF0aW9uID4gdHJhY2VFbmRUaW1lKSB7XG4gICAgICB0cmFjZUVuZFRpbWUgPSByb3cuc3RhcnRUaW1lICsgcm93LmR1cmF0aW9uO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cmFjZUVuZFRpbWUgLSB0cmFjZVN0YXJ0VGltZTtcbn1cblxuZXhwb3J0IGNvbnN0IHNlY29uZHNNZXRyaWMgPSAndHJhY2VzX3NlcnZpY2VfZ3JhcGhfcmVxdWVzdF9zZXJ2ZXJfc2Vjb25kc19zdW0nO1xuZXhwb3J0IGNvbnN0IHRvdGFsc01ldHJpYyA9ICd0cmFjZXNfc2VydmljZV9ncmFwaF9yZXF1ZXN0X3RvdGFsJztcbmV4cG9ydCBjb25zdCBmYWlsZWRNZXRyaWMgPSAndHJhY2VzX3NlcnZpY2VfZ3JhcGhfcmVxdWVzdF9mYWlsZWRfdG90YWwnO1xuZXhwb3J0IGNvbnN0IGhpc3RvZ3JhbU1ldHJpYyA9ICd0cmFjZXNfc2VydmljZV9ncmFwaF9yZXF1ZXN0X3NlcnZlcl9zZWNvbmRzX2J1Y2tldCc7XG5cbmV4cG9ydCBjb25zdCBzZXJ2aWNlTWFwTWV0cmljcyA9IFtcbiAgc2Vjb25kc01ldHJpYyxcbiAgdG90YWxzTWV0cmljLFxuICBmYWlsZWRNZXRyaWMsXG4gIGhpc3RvZ3JhbU1ldHJpYyxcbiAgLy8gVGhlc2UgYXJlIHVzZWQgZm9yIGRlYnVnZ2luZyB0aGUgdGVtcG8gY29sbGVjdGlvbiBzbyBwcm9iYWJseSBub3QgdXNlZnVsIGZvciBzZXJ2aWNlIG1hcCByaWdodCBub3cuXG4gIC8vICd0cmFjZXNfc2VydmljZV9ncmFwaF91bnBhaXJlZF9zcGFuc190b3RhbCcsXG4gIC8vICd0cmFjZXNfc2VydmljZV9ncmFwaF91bnRhZ2dlZF9zcGFuc190b3RhbCcsXG5dO1xuXG4vKipcbiAqIE1hcCByZXNwb25zZSBmcm9tIG11bHRpcGxlIHByb21ldGhldXMgbWV0cmljcyBpbnRvIGEgbm9kZSBncmFwaCBkYXRhIGZyYW1lcyB3aXRoIG5vZGVzIGFuZCBlZGdlcy5cbiAqIEBwYXJhbSByZXNwb25zZXNcbiAqIEBwYXJhbSByYW5nZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwUHJvbU1ldHJpY3NUb1NlcnZpY2VNYXAoXG4gIHJlc3BvbnNlczogRGF0YVF1ZXJ5UmVzcG9uc2VbXSxcbiAgcmFuZ2U6IFRpbWVSYW5nZVxuKTogeyBub2RlczogRGF0YUZyYW1lOyBlZGdlczogRGF0YUZyYW1lIH0ge1xuICBjb25zdCBmcmFtZXMgPSBnZXRNZXRyaWNGcmFtZXMocmVzcG9uc2VzKTtcblxuICAvLyBGaXJzdCBqdXN0IGNvbGxlY3QgZGF0YSBmcm9tIHRoZSBtZXRyaWNzIGludG8gYSBtYXAgd2l0aCBub2RlcyBhbmQgZWRnZXMgYXMga2V5c1xuICBjb25zdCBub2Rlc01hcDogUmVjb3JkPHN0cmluZywgU2VydmljZU1hcFN0YXRpc3RpY3M+ID0ge307XG4gIGNvbnN0IGVkZ2VzTWFwOiBSZWNvcmQ8c3RyaW5nLCBFZGdlT2JqZWN0PiA9IHt9O1xuICAvLyBBdCB0aGlzIG1vbWVudCB3ZSBkb24ndCBoYXZlIGFueSBlcnJvci9zdWNjZXNzIG9yIG90aGVyIGNvdW50cyBzbyB3ZSBqdXN0IHVzZSB0aGVzZSAyXG4gIGNvbGxlY3RNZXRyaWNEYXRhKGZyYW1lc1t0b3RhbHNNZXRyaWNdLCAndG90YWwnLCB0b3RhbHNNZXRyaWMsIG5vZGVzTWFwLCBlZGdlc01hcCk7XG4gIGNvbGxlY3RNZXRyaWNEYXRhKGZyYW1lc1tzZWNvbmRzTWV0cmljXSwgJ3NlY29uZHMnLCBzZWNvbmRzTWV0cmljLCBub2Rlc01hcCwgZWRnZXNNYXApO1xuICBjb2xsZWN0TWV0cmljRGF0YShmcmFtZXNbZmFpbGVkTWV0cmljXSwgJ2ZhaWxlZCcsIGZhaWxlZE1ldHJpYywgbm9kZXNNYXAsIGVkZ2VzTWFwKTtcblxuICByZXR1cm4gY29udmVydFRvRGF0YUZyYW1lcyhub2Rlc01hcCwgZWRnZXNNYXAsIHJhbmdlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VydmljZU1hcERhdGFGcmFtZXMoKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZURGKG5hbWU6IHN0cmluZywgZmllbGRzOiBGaWVsZERUT1tdKSB7XG4gICAgcmV0dXJuIG5ldyBNdXRhYmxlRGF0YUZyYW1lKHsgbmFtZSwgZmllbGRzLCBtZXRhOiB7IHByZWZlcnJlZFZpc3VhbGlzYXRpb25UeXBlOiAnbm9kZUdyYXBoJyB9IH0pO1xuICB9XG5cbiAgY29uc3Qgbm9kZXMgPSBjcmVhdGVERignTm9kZXMnLCBbXG4gICAgeyBuYW1lOiBGaWVsZHMuaWQgfSxcbiAgICB7IG5hbWU6IEZpZWxkcy50aXRsZSwgY29uZmlnOiB7IGRpc3BsYXlOYW1lOiAnU2VydmljZSBuYW1lJyB9IH0sXG4gICAgeyBuYW1lOiBGaWVsZHMubWFpblN0YXQsIGNvbmZpZzogeyB1bml0OiAnbXMvcicsIGRpc3BsYXlOYW1lOiAnQXZlcmFnZSByZXNwb25zZSB0aW1lJyB9IH0sXG4gICAge1xuICAgICAgbmFtZTogRmllbGRzLnNlY29uZGFyeVN0YXQsXG4gICAgICBjb25maWc6IHsgdW5pdDogJ3Ivc2VjJywgZGlzcGxheU5hbWU6ICdSZXF1ZXN0cyBwZXIgc2Vjb25kJyB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogRmllbGRzLmFyYyArICdzdWNjZXNzJyxcbiAgICAgIGNvbmZpZzogeyBkaXNwbGF5TmFtZTogJ1N1Y2Nlc3MnLCBjb2xvcjogeyBmaXhlZENvbG9yOiAnZ3JlZW4nLCBtb2RlOiBGaWVsZENvbG9yTW9kZUlkLkZpeGVkIH0gfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IEZpZWxkcy5hcmMgKyAnZmFpbGVkJyxcbiAgICAgIGNvbmZpZzogeyBkaXNwbGF5TmFtZTogJ0ZhaWxlZCcsIGNvbG9yOiB7IGZpeGVkQ29sb3I6ICdyZWQnLCBtb2RlOiBGaWVsZENvbG9yTW9kZUlkLkZpeGVkIH0gfSxcbiAgICB9LFxuICBdKTtcbiAgY29uc3QgZWRnZXMgPSBjcmVhdGVERignRWRnZXMnLCBbXG4gICAgeyBuYW1lOiBGaWVsZHMuaWQgfSxcbiAgICB7IG5hbWU6IEZpZWxkcy5zb3VyY2UgfSxcbiAgICB7IG5hbWU6IEZpZWxkcy50YXJnZXQgfSxcbiAgICB7IG5hbWU6IEZpZWxkcy5tYWluU3RhdCwgY29uZmlnOiB7IHVuaXQ6ICdyJywgZGlzcGxheU5hbWU6ICdSZXF1ZXN0cycgfSB9LFxuICAgIHsgbmFtZTogRmllbGRzLnNlY29uZGFyeVN0YXQsIGNvbmZpZzogeyB1bml0OiAnbXMvcicsIGRpc3BsYXlOYW1lOiAnQXZlcmFnZSByZXNwb25zZSB0aW1lJyB9IH0sXG4gIF0pO1xuXG4gIHJldHVybiBbbm9kZXMsIGVkZ2VzXTtcbn1cblxuLyoqXG4gKiBHcm91cCBmcmFtZXMgZnJvbSByZXNwb25zZSBiYXNlZCBvbiByZWYgaWQgd2hpY2ggaXMgc2V0IHRoZSBzYW1lIGFzIHRoZSBtZXRyaWMgbmFtZSBzbyB3ZSBrbm93IHdoaWNoIG1ldHJpYyBpcyB3aGVyZVxuICogYW5kIGFsc28gcHV0IGl0IGludG8gRGF0YUZyYW1lVmlldyBzbyBpdCdzIGVhc2llciB0byB3b3JrIHdpdGguXG4gKiBAcGFyYW0gcmVzcG9uc2VzXG4gKi9cbmZ1bmN0aW9uIGdldE1ldHJpY0ZyYW1lcyhyZXNwb25zZXM6IERhdGFRdWVyeVJlc3BvbnNlW10pOiBSZWNvcmQ8c3RyaW5nLCBEYXRhRnJhbWVWaWV3PiB7XG4gIHJldHVybiByZXNwb25zZXNbMF0uZGF0YS5yZWR1Y2U8UmVjb3JkPHN0cmluZywgRGF0YUZyYW1lVmlldz4+KChhY2MsIGZyYW1lKSA9PiB7XG4gICAgYWNjW2ZyYW1lLnJlZklkXSA9IG5ldyBEYXRhRnJhbWVWaWV3KGZyYW1lKTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbnR5cGUgU2VydmljZU1hcFN0YXRpc3RpY3MgPSB7XG4gIHRvdGFsPzogbnVtYmVyO1xuICBzZWNvbmRzPzogbnVtYmVyO1xuICBmYWlsZWQ/OiBudW1iZXI7XG59O1xuXG50eXBlIEVkZ2VPYmplY3QgPSBTZXJ2aWNlTWFwU3RhdGlzdGljcyAmIHtcbiAgc291cmNlOiBzdHJpbmc7XG4gIHRhcmdldDogc3RyaW5nO1xufTtcblxuLyoqXG4gKiBDb2xsZWN0IGRhdGEgZnJvbSBhIG1ldHJpYyBpbnRvIGEgbWFwIG9mIG5vZGVzIGFuZCBlZGdlcy4gVGhlIG1ldHJpYyBkYXRhIGlzIG1vZGVsZWQgYXMgY291bnRzIG9mIG1ldHJpYyBwZXIgZWRnZVxuICogd2hpY2ggaXMgYSBwYWlyIG9mIGNsaWVudC1zZXJ2ZXIgbm9kZXMuIFRoaXMgbWVhbnMgd2UgY29udmVydCBlYWNoIHJvdyBvZiB0aGUgbWV0cmljIDEtMSB0byBlZGdlcyBhbmQgdGhhbiB3ZSBhc3NpZ25cbiAqIHRoZSBtZXRyaWMgYWxzbyB0byBzZXJ2ZXIuIFdlIGNvdW50IHRoZSBzdGF0cyBmb3Igc2VydmVyIG9ubHkgYXMgd2Ugc2hvdyByZXF1ZXN0cy90cmFuc2FjdGlvbnMgdGhhdCBwYXJ0aWN1bGFyIG5vZGVcbiAqIHByb2Nlc3NlZCBub3QgdGhvc2Ugd2hpY2ggaXQgZ2VuZXJhdGVkIGFuZCBvdGhlciBzdGF0cyBsaWtlIGF2ZXJhZ2UgdHJhbnNhY3Rpb24gdGltZSB0aGVuIHN0ZW0gZnJvbSB0aGF0LlxuICogQHBhcmFtIGZyYW1lXG4gKiBAcGFyYW0gc3RhdFxuICogQHBhcmFtIG1ldHJpY1xuICogQHBhcmFtIG5vZGVzTWFwXG4gKiBAcGFyYW0gZWRnZXNNYXBcbiAqL1xuZnVuY3Rpb24gY29sbGVjdE1ldHJpY0RhdGEoXG4gIGZyYW1lOiBEYXRhRnJhbWVWaWV3IHwgdW5kZWZpbmVkLFxuICBzdGF0OiBrZXlvZiBTZXJ2aWNlTWFwU3RhdGlzdGljcyxcbiAgbWV0cmljOiBzdHJpbmcsXG4gIG5vZGVzTWFwOiBSZWNvcmQ8c3RyaW5nLCBTZXJ2aWNlTWFwU3RhdGlzdGljcz4sXG4gIGVkZ2VzTWFwOiBSZWNvcmQ8c3RyaW5nLCBFZGdlT2JqZWN0PlxuKSB7XG4gIGlmICghZnJhbWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBUaGUgbmFtZSBvZiB0aGUgdmFsdWUgY29sdW1uIGlzIGluIHRoaXMgZm9ybWF0XG4gIC8vIFRPRE8gZmlndXJlIG91dCBpZiBpdCBjYW4gYmUgY2hhbmdlZFxuICBjb25zdCB2YWx1ZU5hbWUgPSBgVmFsdWUgIyR7bWV0cmljfWA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmFtZS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IGZyYW1lLmdldChpKTtcbiAgICBjb25zdCBlZGdlSWQgPSBgJHtyb3cuY2xpZW50fV8ke3Jvdy5zZXJ2ZXJ9YDtcblxuICAgIGlmICghZWRnZXNNYXBbZWRnZUlkXSkge1xuICAgICAgLy8gQ3JlYXRlIGVkZ2UgYXMgaXQgZG9lcyBub3QgZXhpc3QgeWV0XG4gICAgICBlZGdlc01hcFtlZGdlSWRdID0ge1xuICAgICAgICB0YXJnZXQ6IHJvdy5zZXJ2ZXIsXG4gICAgICAgIHNvdXJjZTogcm93LmNsaWVudCxcbiAgICAgICAgW3N0YXRdOiByb3dbdmFsdWVOYW1lXSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFkZCBzdGF0IHRvIGVkZ2VcbiAgICAgIC8vIFdlIGFyZSBhZGRpbmcgdGhlIHZhbHVlcyBpZiBleGlzdHMgYnV0IHRoYXQgc2hvdWxkIG5vdCBoYXBwZW4gaW4gZ2VuZXJhbCBhcyB0aGVyZSBzaG91bGQgYmUgc2luZ2xlIHJvdyBmb3JcbiAgICAgIC8vIGFuIGVkZ2UuXG4gICAgICBlZGdlc01hcFtlZGdlSWRdW3N0YXRdID0gKGVkZ2VzTWFwW2VkZ2VJZF1bc3RhdF0gfHwgMCkgKyByb3dbdmFsdWVOYW1lXTtcbiAgICB9XG5cbiAgICBpZiAoIW5vZGVzTWFwW3Jvdy5zZXJ2ZXJdKSB7XG4gICAgICAvLyBDcmVhdGUgbm9kZSBmb3Igc2VydmVyXG4gICAgICBub2Rlc01hcFtyb3cuc2VydmVyXSA9IHtcbiAgICAgICAgW3N0YXRdOiByb3dbdmFsdWVOYW1lXSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFkZCBzdGF0IHRvIHNlcnZlciBub2RlLiBTdW0gdXAgdmFsdWVzIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBlZGdlcyB0YXJnZXRpbmcgdGhpcyBzZXJ2ZXIgbm9kZS5cbiAgICAgIG5vZGVzTWFwW3Jvdy5zZXJ2ZXJdW3N0YXRdID0gKG5vZGVzTWFwW3Jvdy5zZXJ2ZXJdW3N0YXRdIHx8IDApICsgcm93W3ZhbHVlTmFtZV07XG4gICAgfVxuXG4gICAgaWYgKCFub2Rlc01hcFtyb3cuY2xpZW50XSkge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBjbGllbnQgbm9kZSBidXQgZG9uJ3QgYWRkIHRoZSBzdGF0IGFzIGVkZ2Ugc3RhdHMgYXJlIGF0dHJpYnV0ZWQgdG8gdGhlIHNlcnZlciBub2RlLiBUaGlzIG1lYW5zIGZvclxuICAgICAgLy8gZXhhbXBsZSB0aGF0IHRoZSBudW1iZXIgb2YgcmVxdWVzdHMgaW4gYSBub2RlIHNob3cgaG93IG1hbnkgcmVxdWVzdHMgaXQgaGFuZGxlZCBub3QgaG93IG1hbnkgaXQgZ2VuZXJhdGVkLlxuICAgICAgbm9kZXNNYXBbcm93LmNsaWVudF0gPSB7XG4gICAgICAgIFtzdGF0XTogMCxcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0RhdGFGcmFtZXMoXG4gIG5vZGVzTWFwOiBSZWNvcmQ8c3RyaW5nLCBTZXJ2aWNlTWFwU3RhdGlzdGljcz4sXG4gIGVkZ2VzTWFwOiBSZWNvcmQ8c3RyaW5nLCBFZGdlT2JqZWN0PixcbiAgcmFuZ2U6IFRpbWVSYW5nZVxuKTogeyBub2RlczogRGF0YUZyYW1lOyBlZGdlczogRGF0YUZyYW1lIH0ge1xuICBjb25zdCByYW5nZU1zID0gcmFuZ2UudG8udmFsdWVPZigpIC0gcmFuZ2UuZnJvbS52YWx1ZU9mKCk7XG4gIGNvbnN0IFtub2RlcywgZWRnZXNdID0gY3JlYXRlU2VydmljZU1hcERhdGFGcmFtZXMoKTtcbiAgZm9yIChjb25zdCBub2RlSWQgb2YgT2JqZWN0LmtleXMobm9kZXNNYXApKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5vZGVzTWFwW25vZGVJZF07XG4gICAgbm9kZXMuYWRkKHtcbiAgICAgIFtGaWVsZHMuaWRdOiBub2RlSWQsXG4gICAgICBbRmllbGRzLnRpdGxlXTogbm9kZUlkLFxuICAgICAgLy8gTmFOIHdpbGwgbm90IGJlIHNob3duIGluIHRoZSBub2RlIGdyYXBoLiBUaGlzIGhhcHBlbnMgZm9yIGEgcm9vdCBjbGllbnQgbm9kZSB3aGljaCBkaWQgbm90IHByb2Nlc3NcbiAgICAgIC8vIGFueSByZXF1ZXN0cyBpdHNlbGYuXG4gICAgICBbRmllbGRzLm1haW5TdGF0XTogbm9kZS50b3RhbCA/IChub2RlLnNlY29uZHMhIC8gbm9kZS50b3RhbCkgKiAxMDAwIDogTnVtYmVyLk5hTiwgLy8gQXZlcmFnZSByZXNwb25zZSB0aW1lXG4gICAgICBbRmllbGRzLnNlY29uZGFyeVN0YXRdOiBub2RlLnRvdGFsID8gTWF0aC5yb3VuZCgobm9kZS50b3RhbCAvIChyYW5nZU1zIC8gMTAwMCkpICogMTAwKSAvIDEwMCA6IE51bWJlci5OYU4sIC8vIFJlcXVlc3QgcGVyIHNlY29uZCAodG8gMiBkZWNpbWFscylcbiAgICAgIFtGaWVsZHMuYXJjICsgJ3N1Y2Nlc3MnXTogbm9kZS50b3RhbCA/IChub2RlLnRvdGFsIC0gTWF0aC5taW4obm9kZS5mYWlsZWQgfHwgMCwgbm9kZS50b3RhbCkpIC8gbm9kZS50b3RhbCA6IDEsXG4gICAgICBbRmllbGRzLmFyYyArICdmYWlsZWQnXTogbm9kZS50b3RhbCA/IE1hdGgubWluKG5vZGUuZmFpbGVkIHx8IDAsIG5vZGUudG90YWwpIC8gbm9kZS50b3RhbCA6IDAsXG4gICAgfSk7XG4gIH1cbiAgZm9yIChjb25zdCBlZGdlSWQgb2YgT2JqZWN0LmtleXMoZWRnZXNNYXApKSB7XG4gICAgY29uc3QgZWRnZSA9IGVkZ2VzTWFwW2VkZ2VJZF07XG4gICAgZWRnZXMuYWRkKHtcbiAgICAgIFtGaWVsZHMuaWRdOiBlZGdlSWQsXG4gICAgICBbRmllbGRzLnNvdXJjZV06IGVkZ2Uuc291cmNlLFxuICAgICAgW0ZpZWxkcy50YXJnZXRdOiBlZGdlLnRhcmdldCxcbiAgICAgIFtGaWVsZHMubWFpblN0YXRdOiBlZGdlLnRvdGFsLCAvLyBSZXF1ZXN0c1xuICAgICAgW0ZpZWxkcy5zZWNvbmRhcnlTdGF0XTogZWRnZS50b3RhbCA/IChlZGdlLnNlY29uZHMhIC8gZWRnZS50b3RhbCkgKiAxMDAwIDogTnVtYmVyLk5hTiwgLy8gQXZlcmFnZSByZXNwb25zZSB0aW1lXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4geyBub2RlcywgZWRnZXMgfTtcbn1cbiIsImltcG9ydCB7IFZhbHVlIH0gZnJvbSAnc2xhdGUnO1xuXG5pbXBvcnQgeyBIaXN0b3J5SXRlbSwgTGFuZ3VhZ2VQcm92aWRlciwgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBDb21wbGV0aW9uSXRlbUdyb3VwLCBUeXBlYWhlYWRJbnB1dCwgVHlwZWFoZWFkT3V0cHV0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBUZW1wb0RhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wb0xhbmd1YWdlUHJvdmlkZXIgZXh0ZW5kcyBMYW5ndWFnZVByb3ZpZGVyIHtcbiAgZGF0YXNvdXJjZTogVGVtcG9EYXRhc291cmNlO1xuICB0YWdzPzogc3RyaW5nW107XG4gIGNvbnN0cnVjdG9yKGRhdGFzb3VyY2U6IFRlbXBvRGF0YXNvdXJjZSwgaW5pdGlhbFZhbHVlcz86IGFueSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmRhdGFzb3VyY2UgPSBkYXRhc291cmNlO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdGlhbFZhbHVlcyk7XG4gIH1cblxuICByZXF1ZXN0ID0gYXN5bmMgKHVybDogc3RyaW5nLCBwYXJhbXMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZGF0YXNvdXJjZS5tZXRhZGF0YVJlcXVlc3QodXJsLCBwYXJhbXMpO1xuICAgIHJldHVybiByZXM/LmRhdGE7XG4gIH07XG5cbiAgc3RhcnQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgdGhpcy5mZXRjaFRhZ3MoKTtcbiAgICByZXR1cm4gW107XG4gIH07XG5cbiAgYXN5bmMgZmV0Y2hUYWdzKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCcvYXBpL3NlYXJjaC90YWdzJywgW10pO1xuICAgIHRoaXMudGFncyA9IHJlc3BvbnNlLnRhZ05hbWVzO1xuICB9XG5cbiAgcHJvdmlkZUNvbXBsZXRpb25JdGVtcyA9IGFzeW5jIChcbiAgICB7IHByZWZpeCwgdGV4dCwgdmFsdWUsIGxhYmVsS2V5LCB3cmFwcGVyQ2xhc3NlcyB9OiBUeXBlYWhlYWRJbnB1dCxcbiAgICBjb250ZXh0OiB7IGhpc3Rvcnk6IEFycmF5PEhpc3RvcnlJdGVtPGFueT4+IH0gPSB7IGhpc3Rvcnk6IFtdIH1cbiAgKTogUHJvbWlzZTxUeXBlYWhlYWRPdXRwdXQ+ID0+IHtcbiAgICBjb25zdCBlbXB0eVJlc3VsdDogVHlwZWFoZWFkT3V0cHV0ID0geyBzdWdnZXN0aW9uczogW10gfTtcblxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHJldHVybiBlbXB0eVJlc3VsdDtcbiAgICB9XG5cbiAgICBjb25zdCBxdWVyeSA9IHZhbHVlLmVuZFRleHQuZ2V0VGV4dCgpO1xuICAgIGNvbnN0IGlzVmFsdWUgPSBxdWVyeVtxdWVyeS5pbmRleE9mKHRleHQpIC0gMV0gPT09ICc9JztcbiAgICBpZiAoaXNWYWx1ZSB8fCB0ZXh0ID09PSAnPScpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFRhZ1ZhbHVlQ29tcGxldGlvbkl0ZW1zKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGFnc0NvbXBsZXRpb25JdGVtcygpO1xuICB9O1xuXG4gIGdldFRhZ3NDb21wbGV0aW9uSXRlbXMgPSAoKTogVHlwZWFoZWFkT3V0cHV0ID0+IHtcbiAgICBjb25zdCB7IHRhZ3MgfSA9IHRoaXM7XG4gICAgY29uc3Qgc3VnZ2VzdGlvbnM6IENvbXBsZXRpb25JdGVtR3JvdXBbXSA9IFtdO1xuXG4gICAgaWYgKHRhZ3M/Lmxlbmd0aCkge1xuICAgICAgc3VnZ2VzdGlvbnMucHVzaCh7XG4gICAgICAgIGxhYmVsOiBgVGFnYCxcbiAgICAgICAgaXRlbXM6IHRhZ3MubWFwKCh0YWcpID0+ICh7IGxhYmVsOiB0YWcgfSkpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3VnZ2VzdGlvbnMgfTtcbiAgfTtcblxuICBhc3luYyBnZXRUYWdWYWx1ZUNvbXBsZXRpb25JdGVtcyh2YWx1ZTogVmFsdWUpIHtcbiAgICBjb25zdCB0YWdzID0gdmFsdWUuZW5kVGV4dC5nZXRUZXh0KCkuc3BsaXQoJyAnKTtcblxuICAgIGxldCB0YWdOYW1lID0gdGFnc1t0YWdzLmxlbmd0aCAtIDFdID8/ICcnO1xuICAgIHRhZ05hbWUgPSB0YWdOYW1lLnNwbGl0KCc9JylbMF07XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMucmVxdWVzdChgL2FwaS9zZWFyY2gvdGFnLyR7dGFnTmFtZX0vdmFsdWVzYCwgW10pO1xuICAgIGNvbnN0IHN1Z2dlc3Rpb25zOiBDb21wbGV0aW9uSXRlbUdyb3VwW10gPSBbXTtcblxuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS50YWdWYWx1ZXMpIHtcbiAgICAgIHN1Z2dlc3Rpb25zLnB1c2goe1xuICAgICAgICBsYWJlbDogYFRhZyBWYWx1ZXNgLFxuICAgICAgICBpdGVtczogcmVzcG9uc2UudGFnVmFsdWVzLm1hcCgodGFnVmFsdWU6IHN0cmluZykgPT4gKHsgbGFiZWw6IHRhZ1ZhbHVlIH0pKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4geyBzdWdnZXN0aW9ucyB9O1xuICB9XG5cbiAgYXN5bmMgZ2V0T3B0aW9ucyh0YWc6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8U2VsZWN0YWJsZVZhbHVlPHN0cmluZz4+PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3QoYC9hcGkvc2VhcmNoL3RhZy8ke3RhZ30vdmFsdWVzYCk7XG4gICAgbGV0IG9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+PiA9IFtdO1xuXG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnRhZ1ZhbHVlcykge1xuICAgICAgb3B0aW9ucyA9IHJlc3BvbnNlLnRhZ1ZhbHVlcy5tYXAoKHY6IHN0cmluZykgPT4gKHtcbiAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgIGxhYmVsOiB2LFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhU291cmNlUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5cbmltcG9ydCBDaGVhdFNoZWV0IGZyb20gJy4vQ2hlYXRTaGVldCc7XG5pbXBvcnQgeyBUZW1wb1F1ZXJ5RmllbGQgfSBmcm9tICcuL1F1ZXJ5RWRpdG9yL1F1ZXJ5RmllbGQnO1xuaW1wb3J0IHsgQ29uZmlnRWRpdG9yIH0gZnJvbSAnLi9jb25maWd1cmF0aW9uL0NvbmZpZ0VkaXRvcic7XG5pbXBvcnQgeyBUZW1wb0RhdGFzb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuXG5leHBvcnQgY29uc3QgcGx1Z2luID0gbmV3IERhdGFTb3VyY2VQbHVnaW4oVGVtcG9EYXRhc291cmNlKVxuICAuc2V0UXVlcnlFZGl0b3IoVGVtcG9RdWVyeUZpZWxkKVxuICAuc2V0Q29uZmlnRWRpdG9yKENvbmZpZ0VkaXRvcilcbiAgLnNldFF1ZXJ5RWRpdG9ySGVscChDaGVhdFNoZWV0KTtcbiIsImltcG9ydCB7IFNwYW5TdGF0dXMsIFNwYW5TdGF0dXNDb2RlIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvYXBpJztcbmltcG9ydCB7IGNvbGxlY3RvclR5cGVzIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvZXhwb3J0ZXItY29sbGVjdG9yJztcbmltcG9ydCB7IFNlbWFudGljUmVzb3VyY2VBdHRyaWJ1dGVzIH0gZnJvbSAnQG9wZW50ZWxlbWV0cnkvc2VtYW50aWMtY29udmVudGlvbnMnO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkhvdXJzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VJbkhvdXJzJztcbmltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tICdkYXRlLWZucy9mb3JtYXREaXN0YW5jZSc7XG5cbmltcG9ydCB7XG4gIEFycmF5VmVjdG9yLFxuICBEYXRhRnJhbWUsXG4gIERhdGFRdWVyeVJlc3BvbnNlLFxuICBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncyxcbiAgRmllbGQsXG4gIEZpZWxkVHlwZSxcbiAgTXV0YWJsZURhdGFGcmFtZSxcbiAgVHJhY2VLZXlWYWx1ZVBhaXIsXG4gIFRyYWNlTG9nLFxuICBUcmFjZVNwYW5SZWZlcmVuY2UsXG4gIFRyYWNlU3BhblJvdyxcbiAgZGF0ZVRpbWVGb3JtYXQsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuXG5pbXBvcnQgeyBjcmVhdGVHcmFwaEZyYW1lcyB9IGZyb20gJy4vZ3JhcGhUcmFuc2Zvcm0nO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFibGVGcmFtZShcbiAgbG9nc0ZyYW1lOiBEYXRhRnJhbWUsXG4gIGRhdGFzb3VyY2VVaWQ6IHN0cmluZyxcbiAgZGF0YXNvdXJjZU5hbWU6IHN0cmluZyxcbiAgdHJhY2VSZWdleHM6IHN0cmluZ1tdXG4pOiBEYXRhRnJhbWUge1xuICBjb25zdCB0YWJsZUZyYW1lID0gbmV3IE11dGFibGVEYXRhRnJhbWUoe1xuICAgIGZpZWxkczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnVGltZScsXG4gICAgICAgIHR5cGU6IEZpZWxkVHlwZS50aW1lLFxuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICBjdXN0b206IHtcbiAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0cmFjZUlEJyxcbiAgICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgZGlzcGxheU5hbWVGcm9tRFM6ICdUcmFjZSBJRCcsXG4gICAgICAgICAgY3VzdG9tOiB7IHdpZHRoOiAzMDAgfSxcbiAgICAgICAgICBsaW5rczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogJ0NsaWNrIHRvIG9wZW4gdHJhY2UgJHtfX3ZhbHVlLnJhd30nLFxuICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICBpbnRlcm5hbDoge1xuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQsXG4gICAgICAgICAgICAgICAgZGF0YXNvdXJjZU5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnJHtfX3ZhbHVlLnJhd30nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTWVzc2FnZScsXG4gICAgICAgIHR5cGU6IEZpZWxkVHlwZS5zdHJpbmcsXG4gICAgICB9LFxuICAgIF0sXG4gICAgbWV0YToge1xuICAgICAgcHJlZmVycmVkVmlzdWFsaXNhdGlvblR5cGU6ICd0YWJsZScsXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKCFsb2dzRnJhbWUgfHwgdHJhY2VSZWdleHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHRhYmxlRnJhbWU7XG4gIH1cblxuICBjb25zdCB0aW1lRmllbGQgPSBsb2dzRnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYudHlwZSA9PT0gRmllbGRUeXBlLnRpbWUpO1xuXG4gIC8vIEdvaW5nIHRocm91Z2ggYWxsIHN0cmluZyBmaWVsZHMgdG8gbG9vayBmb3IgdHJhY2UgSURzXG4gIGZvciAobGV0IGZpZWxkIG9mIGxvZ3NGcmFtZS5maWVsZHMpIHtcbiAgICBsZXQgaGFzTWF0Y2ggPSBmYWxzZTtcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gRmllbGRUeXBlLnN0cmluZykge1xuICAgICAgY29uc3QgdmFsdWVzID0gZmllbGQudmFsdWVzLnRvQXJyYXkoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSB2YWx1ZXNbaV07XG4gICAgICAgIGlmIChsaW5lKSB7XG4gICAgICAgICAgZm9yIChsZXQgdHJhY2VSZWdleCBvZiB0cmFjZVJlZ2V4cykge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAobGluZSBhcyBzdHJpbmcpLm1hdGNoKHRyYWNlUmVnZXgpO1xuICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRyYWNlSWQgPSBtYXRjaFsxXTtcbiAgICAgICAgICAgICAgY29uc3QgdGltZSA9IHRpbWVGaWVsZCA/IHRpbWVGaWVsZC52YWx1ZXMuZ2V0KGkpIDogbnVsbDtcbiAgICAgICAgICAgICAgdGFibGVGcmFtZS5maWVsZHNbMF0udmFsdWVzLmFkZCh0aW1lKTtcbiAgICAgICAgICAgICAgdGFibGVGcmFtZS5maWVsZHNbMV0udmFsdWVzLmFkZCh0cmFjZUlkKTtcbiAgICAgICAgICAgICAgdGFibGVGcmFtZS5maWVsZHNbMl0udmFsdWVzLmFkZChsaW5lKTtcbiAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YWJsZUZyYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtVHJhY2VMaXN0KFxuICByZXNwb25zZTogRGF0YVF1ZXJ5UmVzcG9uc2UsXG4gIGRhdGFzb3VyY2VJZDogc3RyaW5nLFxuICBkYXRhc291cmNlTmFtZTogc3RyaW5nLFxuICB0cmFjZVJlZ2V4czogc3RyaW5nW11cbik6IERhdGFRdWVyeVJlc3BvbnNlIHtcbiAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGZyYW1lID0gY3JlYXRlVGFibGVGcmFtZShkYXRhLCBkYXRhc291cmNlSWQsIGRhdGFzb3VyY2VOYW1lLCB0cmFjZVJlZ2V4cyk7XG4gICAgcmVzcG9uc2UuZGF0YVtpbmRleF0gPSBmcmFtZTtcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuLy8gRG9uJ3QgZm9yZ2V0IHRvIGNoYW5nZSB0aGUgYmFja2VuZCBjb2RlIHdoZW4gdGhlIGlkIHJlcHJlc2VudGF0aW9uIGNoYW5nZWRcbmZ1bmN0aW9uIHRyYW5zZm9ybUJhc2U2NElEVG9IZXhTdHJpbmcoYmFzZTY0OiBzdHJpbmcpIHtcbiAgY29uc3QgcmF3ID0gYXRvYihiYXNlNjQpO1xuICBsZXQgcmVzdWx0ID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgaGV4ID0gcmF3LmNoYXJDb2RlQXQoaSkudG9TdHJpbmcoMTYpO1xuICAgIHJlc3VsdCArPSBoZXgubGVuZ3RoID09PSAyID8gaGV4IDogJzAnICsgaGV4O1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPiAxNiA/IHJlc3VsdC5zbGljZSgxNikgOiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUhleFN0cmluZ1RvQmFzZTY0SUQoaGV4OiBzdHJpbmcpIHtcbiAgY29uc3QgaGV4QXJyYXkgPSBoZXgubWF0Y2goL1xcd3syfS9nKSB8fCBbXTtcbiAgcmV0dXJuIGJ0b2EoXG4gICAgaGV4QXJyYXlcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoYSwgMTYpKTtcbiAgICAgIH0pXG4gICAgICAuam9pbignJylcbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlVmFsdWUodmFsdWU6IGNvbGxlY3RvclR5cGVzLm9wZW50ZWxlbWV0cnlQcm90by5jb21tb24udjEuQW55VmFsdWUpOiBhbnkge1xuICBpZiAodmFsdWUuc3RyaW5nVmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3RyaW5nVmFsdWU7XG4gIH1cblxuICBpZiAodmFsdWUuYm9vbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2YWx1ZS5ib29sVmFsdWUpO1xuICB9XG5cbiAgaWYgKHZhbHVlLmludFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLmludFZhbHVlIGFzIGFueSwgMTApO1xuICB9XG5cbiAgaWYgKHZhbHVlLmRvdWJsZVZhbHVlKSB7XG4gICAgcmV0dXJuIE51bWJlci5wYXJzZUZsb2F0KHZhbHVlLmRvdWJsZVZhbHVlIGFzIGFueSk7XG4gIH1cblxuICBpZiAodmFsdWUuYXJyYXlWYWx1ZSkge1xuICAgIGNvbnN0IGFycmF5VmFsdWUgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGFyVmFsdWUgb2YgdmFsdWUuYXJyYXlWYWx1ZS52YWx1ZXMpIHtcbiAgICAgIGFycmF5VmFsdWUucHVzaChnZXRBdHRyaWJ1dGVWYWx1ZShhclZhbHVlKSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheVZhbHVlO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiByZXNvdXJjZVRvUHJvY2VzcyhyZXNvdXJjZTogY29sbGVjdG9yVHlwZXMub3BlbnRlbGVtZXRyeVByb3RvLnJlc291cmNlLnYxLlJlc291cmNlIHwgdW5kZWZpbmVkKSB7XG4gIGNvbnN0IHNlcnZpY2VUYWdzOiBUcmFjZUtleVZhbHVlUGFpcltdID0gW107XG4gIGxldCBzZXJ2aWNlTmFtZSA9ICdPVExQUmVzb3VyY2VOb1NlcnZpY2VOYW1lJztcbiAgaWYgKCFyZXNvdXJjZSkge1xuICAgIHJldHVybiB7IHNlcnZpY2VOYW1lLCBzZXJ2aWNlVGFncyB9O1xuICB9XG5cbiAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgcmVzb3VyY2UuYXR0cmlidXRlcykge1xuICAgIGlmIChhdHRyaWJ1dGUua2V5ID09PSBTZW1hbnRpY1Jlc291cmNlQXR0cmlidXRlcy5TRVJWSUNFX05BTUUpIHtcbiAgICAgIHNlcnZpY2VOYW1lID0gYXR0cmlidXRlLnZhbHVlLnN0cmluZ1ZhbHVlIHx8IHNlcnZpY2VOYW1lO1xuICAgIH1cbiAgICBzZXJ2aWNlVGFncy5wdXNoKHsga2V5OiBhdHRyaWJ1dGUua2V5LCB2YWx1ZTogZ2V0QXR0cmlidXRlVmFsdWUoYXR0cmlidXRlLnZhbHVlKSB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHNlcnZpY2VOYW1lLCBzZXJ2aWNlVGFncyB9O1xufVxuXG5mdW5jdGlvbiBnZXRTcGFuVGFncyhcbiAgc3BhbjogY29sbGVjdG9yVHlwZXMub3BlbnRlbGVtZXRyeVByb3RvLnRyYWNlLnYxLlNwYW4sXG4gIGluc3RydW1lbnRhdGlvbkxpYnJhcnk/OiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8uY29tbW9uLnYxLkluc3RydW1lbnRhdGlvbkxpYnJhcnlcbik6IFRyYWNlS2V5VmFsdWVQYWlyW10ge1xuICBjb25zdCBzcGFuVGFnczogVHJhY2VLZXlWYWx1ZVBhaXJbXSA9IFtdO1xuXG4gIGlmIChpbnN0cnVtZW50YXRpb25MaWJyYXJ5KSB7XG4gICAgaWYgKGluc3RydW1lbnRhdGlvbkxpYnJhcnkubmFtZSkge1xuICAgICAgc3BhblRhZ3MucHVzaCh7IGtleTogJ290ZWwubGlicmFyeS5uYW1lJywgdmFsdWU6IGluc3RydW1lbnRhdGlvbkxpYnJhcnkubmFtZSB9KTtcbiAgICB9XG4gICAgaWYgKGluc3RydW1lbnRhdGlvbkxpYnJhcnkudmVyc2lvbikge1xuICAgICAgc3BhblRhZ3MucHVzaCh7IGtleTogJ290ZWwubGlicmFyeS52ZXJzaW9uJywgdmFsdWU6IGluc3RydW1lbnRhdGlvbkxpYnJhcnkudmVyc2lvbiB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3Bhbi5hdHRyaWJ1dGVzKSB7XG4gICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2Ygc3Bhbi5hdHRyaWJ1dGVzKSB7XG4gICAgICBzcGFuVGFncy5wdXNoKHsga2V5OiBhdHRyaWJ1dGUua2V5LCB2YWx1ZTogZ2V0QXR0cmlidXRlVmFsdWUoYXR0cmlidXRlLnZhbHVlKSB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3Bhbi5zdGF0dXMpIHtcbiAgICBpZiAoc3Bhbi5zdGF0dXMuY29kZSAmJiAoc3Bhbi5zdGF0dXMuY29kZSBhcyBhbnkpICE9PSBTcGFuU3RhdHVzQ29kZS5VTlNFVCkge1xuICAgICAgc3BhblRhZ3MucHVzaCh7XG4gICAgICAgIGtleTogJ290ZWwuc3RhdHVzX2NvZGUnLFxuICAgICAgICB2YWx1ZTogU3BhblN0YXR1c0NvZGVbc3Bhbi5zdGF0dXMuY29kZV0sXG4gICAgICB9KTtcbiAgICAgIGlmIChzcGFuLnN0YXR1cy5tZXNzYWdlKSB7XG4gICAgICAgIHNwYW5UYWdzLnB1c2goeyBrZXk6ICdvdGVsLnN0YXR1c19kZXNjcmlwdGlvbicsIHZhbHVlOiBzcGFuLnN0YXR1cy5tZXNzYWdlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3Bhbi5zdGF0dXMuY29kZSA9PT0gU3BhblN0YXR1c0NvZGUuRVJST1IpIHtcbiAgICAgIHNwYW5UYWdzLnB1c2goeyBrZXk6ICdlcnJvcicsIHZhbHVlOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzcGFuLmtpbmQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IHNwbGl0ID0gc3Bhbi5raW5kLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5zcGxpdCgnXycpO1xuICAgIHNwYW5UYWdzLnB1c2goe1xuICAgICAga2V5OiAnc3Bhbi5raW5kJyxcbiAgICAgIHZhbHVlOiBzcGxpdC5sZW5ndGggPyBzcGxpdFtzcGxpdC5sZW5ndGggLSAxXSA6IHNwYW4ua2luZC50b1N0cmluZygpLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHNwYW5UYWdzO1xufVxuXG5mdW5jdGlvbiBnZXRSZWZlcmVuY2VzKHNwYW46IGNvbGxlY3RvclR5cGVzLm9wZW50ZWxlbWV0cnlQcm90by50cmFjZS52MS5TcGFuKSB7XG4gIGNvbnN0IHJlZmVyZW5jZXM6IFRyYWNlU3BhblJlZmVyZW5jZVtdID0gW107XG4gIGlmIChzcGFuLmxpbmtzKSB7XG4gICAgZm9yIChjb25zdCBsaW5rIG9mIHNwYW4ubGlua3MpIHtcbiAgICAgIGNvbnN0IHsgdHJhY2VJZCwgc3BhbklkIH0gPSBsaW5rO1xuICAgICAgY29uc3QgdGFnczogVHJhY2VLZXlWYWx1ZVBhaXJbXSA9IFtdO1xuICAgICAgaWYgKGxpbmsuYXR0cmlidXRlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBsaW5rLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICB0YWdzLnB1c2goeyBrZXk6IGF0dHJpYnV0ZS5rZXksIHZhbHVlOiBnZXRBdHRyaWJ1dGVWYWx1ZShhdHRyaWJ1dGUudmFsdWUpIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZWZlcmVuY2VzLnB1c2goeyB0cmFjZUlEOiB0cmFjZUlkLCBzcGFuSUQ6IHNwYW5JZCwgdGFncyB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlcztcbn1cblxuZnVuY3Rpb24gZ2V0TG9ncyhzcGFuOiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8udHJhY2UudjEuU3Bhbikge1xuICBjb25zdCBsb2dzOiBUcmFjZUxvZ1tdID0gW107XG4gIGlmIChzcGFuLmV2ZW50cykge1xuICAgIGZvciAoY29uc3QgZXZlbnQgb2Ygc3Bhbi5ldmVudHMpIHtcbiAgICAgIGNvbnN0IGZpZWxkczogVHJhY2VLZXlWYWx1ZVBhaXJbXSA9IFtdO1xuICAgICAgaWYgKGV2ZW50LmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBhdHRyaWJ1dGUgb2YgZXZlbnQuYXR0cmlidXRlcykge1xuICAgICAgICAgIGZpZWxkcy5wdXNoKHsga2V5OiBhdHRyaWJ1dGUua2V5LCB2YWx1ZTogZ2V0QXR0cmlidXRlVmFsdWUoYXR0cmlidXRlLnZhbHVlKSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbG9ncy5wdXNoKHsgZmllbGRzLCB0aW1lc3RhbXA6IGV2ZW50LnRpbWVVbml4TmFubyAvIDEwMDAwMDAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxvZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Gcm9tT1RMUChcbiAgdHJhY2VEYXRhOiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8udHJhY2UudjEuUmVzb3VyY2VTcGFuc1tdLFxuICBub2RlR3JhcGggPSBmYWxzZVxuKTogRGF0YVF1ZXJ5UmVzcG9uc2Uge1xuICBjb25zdCBmcmFtZSA9IG5ldyBNdXRhYmxlRGF0YUZyYW1lKHtcbiAgICBmaWVsZHM6IFtcbiAgICAgIHsgbmFtZTogJ3RyYWNlSUQnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdzcGFuSUQnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdwYXJlbnRTcGFuSUQnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdvcGVyYXRpb25OYW1lJywgdHlwZTogRmllbGRUeXBlLnN0cmluZyB9LFxuICAgICAgeyBuYW1lOiAnc2VydmljZU5hbWUnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nIH0sXG4gICAgICB7IG5hbWU6ICdzZXJ2aWNlVGFncycsIHR5cGU6IEZpZWxkVHlwZS5vdGhlciB9LFxuICAgICAgeyBuYW1lOiAnc3RhcnRUaW1lJywgdHlwZTogRmllbGRUeXBlLm51bWJlciB9LFxuICAgICAgeyBuYW1lOiAnZHVyYXRpb24nLCB0eXBlOiBGaWVsZFR5cGUubnVtYmVyIH0sXG4gICAgICB7IG5hbWU6ICdsb2dzJywgdHlwZTogRmllbGRUeXBlLm90aGVyIH0sXG4gICAgICB7IG5hbWU6ICdyZWZlcmVuY2VzJywgdHlwZTogRmllbGRUeXBlLm90aGVyIH0sXG4gICAgICB7IG5hbWU6ICd0YWdzJywgdHlwZTogRmllbGRUeXBlLm90aGVyIH0sXG4gICAgXSxcbiAgICBtZXRhOiB7XG4gICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ3RyYWNlJyxcbiAgICAgIGN1c3RvbToge1xuICAgICAgICB0cmFjZUZvcm1hdDogJ290bHAnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcbiAgdHJ5IHtcbiAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdHJhY2VEYXRhKSB7XG4gICAgICBjb25zdCB7IHNlcnZpY2VOYW1lLCBzZXJ2aWNlVGFncyB9ID0gcmVzb3VyY2VUb1Byb2Nlc3MoZGF0YS5yZXNvdXJjZSk7XG4gICAgICBmb3IgKGNvbnN0IGxpYnJhcnlTcGFuIG9mIGRhdGEuaW5zdHJ1bWVudGF0aW9uTGlicmFyeVNwYW5zKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc3BhbiBvZiBsaWJyYXJ5U3Bhbi5zcGFucykge1xuICAgICAgICAgIGZyYW1lLmFkZCh7XG4gICAgICAgICAgICB0cmFjZUlEOiB0cmFuc2Zvcm1CYXNlNjRJRFRvSGV4U3RyaW5nKHNwYW4udHJhY2VJZCksXG4gICAgICAgICAgICBzcGFuSUQ6IHRyYW5zZm9ybUJhc2U2NElEVG9IZXhTdHJpbmcoc3Bhbi5zcGFuSWQpLFxuICAgICAgICAgICAgcGFyZW50U3BhbklEOiB0cmFuc2Zvcm1CYXNlNjRJRFRvSGV4U3RyaW5nKHNwYW4ucGFyZW50U3BhbklkIHx8ICcnKSxcbiAgICAgICAgICAgIG9wZXJhdGlvbk5hbWU6IHNwYW4ubmFtZSB8fCAnJyxcbiAgICAgICAgICAgIHNlcnZpY2VOYW1lLFxuICAgICAgICAgICAgc2VydmljZVRhZ3MsXG4gICAgICAgICAgICBzdGFydFRpbWU6IHNwYW4uc3RhcnRUaW1lVW5peE5hbm8hIC8gMTAwMDAwMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAoc3Bhbi5lbmRUaW1lVW5peE5hbm8hIC0gc3Bhbi5zdGFydFRpbWVVbml4TmFubyEpIC8gMTAwMDAwMCxcbiAgICAgICAgICAgIHRhZ3M6IGdldFNwYW5UYWdzKHNwYW4sIGxpYnJhcnlTcGFuLmluc3RydW1lbnRhdGlvbkxpYnJhcnkpLFxuICAgICAgICAgICAgbG9nczogZ2V0TG9ncyhzcGFuKSxcbiAgICAgICAgICAgIHJlZmVyZW5jZXM6IGdldFJlZmVyZW5jZXMoc3BhbiksXG4gICAgICAgICAgfSBhcyBUcmFjZVNwYW5Sb3cpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yOiB7IG1lc3NhZ2U6ICdKU09OIGlzIG5vdCB2YWxpZCBPcGVuVGVsZW1ldHJ5IGZvcm1hdDogJyArIGVycm9yIH0sIGRhdGE6IFtdIH07XG4gIH1cblxuICBsZXQgZGF0YSA9IFtmcmFtZV07XG4gIGlmIChub2RlR3JhcGgpIHtcbiAgICBkYXRhLnB1c2goLi4uKGNyZWF0ZUdyYXBoRnJhbWVzKGZyYW1lKSBhcyBNdXRhYmxlRGF0YUZyYW1lW10pKTtcbiAgfVxuXG4gIHJldHVybiB7IGRhdGEgfTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRyYWNlIGRhdGFmcmFtZXMgdG8gdGhlIE9wZW5UZWxlbWV0cnkgZm9ybWF0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1Ub09UTFAoZGF0YTogTXV0YWJsZURhdGFGcmFtZSk6IHtcbiAgYmF0Y2hlczogY29sbGVjdG9yVHlwZXMub3BlbnRlbGVtZXRyeVByb3RvLnRyYWNlLnYxLlJlc291cmNlU3BhbnNbXTtcbn0ge1xuICBsZXQgcmVzdWx0OiB7IGJhdGNoZXM6IGNvbGxlY3RvclR5cGVzLm9wZW50ZWxlbWV0cnlQcm90by50cmFjZS52MS5SZXNvdXJjZVNwYW5zW10gfSA9IHtcbiAgICBiYXRjaGVzOiBbXSxcbiAgfTtcblxuICAvLyBMb29rdXAgb2JqZWN0IHRvIHNlZSB3aGljaCBiYXRjaCBjb250YWlucyBzcGFucyBmb3Igd2hpY2ggc2VydmljZXNcbiAgbGV0IHNlcnZpY2VzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3BhbiA9IGRhdGEuZ2V0KGkpO1xuXG4gICAgLy8gR3JvdXAgc3BhbnMgYmFzZWQgb24gc2VydmljZVxuICAgIGlmICghc2VydmljZXNbc3Bhbi5zZXJ2aWNlTmFtZV0pIHtcbiAgICAgIHNlcnZpY2VzW3NwYW4uc2VydmljZU5hbWVdID0gcmVzdWx0LmJhdGNoZXMubGVuZ3RoO1xuICAgICAgcmVzdWx0LmJhdGNoZXMucHVzaCh7XG4gICAgICAgIHJlc291cmNlOiB7XG4gICAgICAgICAgYXR0cmlidXRlczogW10sXG4gICAgICAgICAgZHJvcHBlZEF0dHJpYnV0ZXNDb3VudDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgaW5zdHJ1bWVudGF0aW9uTGlicmFyeVNwYW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3BhbnM6IFtdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgYmF0Y2hJbmRleCA9IHNlcnZpY2VzW3NwYW4uc2VydmljZU5hbWVdO1xuXG4gICAgLy8gUG9wdWxhdGUgcmVzb3VyY2UgYXR0cmlidXRlcyBmcm9tIHNlcnZpY2UgdGFnc1xuICAgIGlmIChyZXN1bHQuYmF0Y2hlc1tiYXRjaEluZGV4XS5yZXNvdXJjZSEuYXR0cmlidXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJlc3VsdC5iYXRjaGVzW2JhdGNoSW5kZXhdLnJlc291cmNlIS5hdHRyaWJ1dGVzID0gdGFnc1RvQXR0cmlidXRlcyhzcGFuLnNlcnZpY2VUYWdzKTtcbiAgICB9XG5cbiAgICAvLyBQb3B1bGF0ZSBpbnN0cnVtZW50YXRpb24gbGlicmFyeSBpZiBpdCBleGlzdHNcbiAgICBpZiAoIXJlc3VsdC5iYXRjaGVzW2JhdGNoSW5kZXhdLmluc3RydW1lbnRhdGlvbkxpYnJhcnlTcGFuc1swXS5pbnN0cnVtZW50YXRpb25MaWJyYXJ5KSB7XG4gICAgICBsZXQgbGlicmFyeU5hbWUgPSBzcGFuLnRhZ3MuZmluZCgodDogVHJhY2VLZXlWYWx1ZVBhaXIpID0+IHQua2V5ID09PSAnb3RlbC5saWJyYXJ5Lm5hbWUnKT8udmFsdWU7XG4gICAgICBpZiAobGlicmFyeU5hbWUpIHtcbiAgICAgICAgcmVzdWx0LmJhdGNoZXNbYmF0Y2hJbmRleF0uaW5zdHJ1bWVudGF0aW9uTGlicmFyeVNwYW5zWzBdLmluc3RydW1lbnRhdGlvbkxpYnJhcnkgPSB7XG4gICAgICAgICAgbmFtZTogbGlicmFyeU5hbWUsXG4gICAgICAgICAgdmVyc2lvbjogc3Bhbi50YWdzLmZpbmQoKHQ6IFRyYWNlS2V5VmFsdWVQYWlyKSA9PiB0LmtleSA9PT0gJ290ZWwubGlicmFyeS52ZXJzaW9uJyk/LnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlc3VsdC5iYXRjaGVzW2JhdGNoSW5kZXhdLmluc3RydW1lbnRhdGlvbkxpYnJhcnlTcGFuc1swXS5zcGFucy5wdXNoKHtcbiAgICAgIHRyYWNlSWQ6IHRyYW5zZm9ybUhleFN0cmluZ1RvQmFzZTY0SUQoc3Bhbi50cmFjZUlELnBhZFN0YXJ0KDMyLCAnMCcpKSxcbiAgICAgIHNwYW5JZDogdHJhbnNmb3JtSGV4U3RyaW5nVG9CYXNlNjRJRChzcGFuLnNwYW5JRCksXG4gICAgICB0cmFjZVN0YXRlOiAnJyxcbiAgICAgIHBhcmVudFNwYW5JZDogdHJhbnNmb3JtSGV4U3RyaW5nVG9CYXNlNjRJRChzcGFuLnBhcmVudFNwYW5JRCB8fCAnJyksXG4gICAgICBuYW1lOiBzcGFuLm9wZXJhdGlvbk5hbWUsXG4gICAgICBraW5kOiBnZXRPVExQU3BhbktpbmQoc3Bhbi50YWdzKSBhcyBhbnksXG4gICAgICBzdGFydFRpbWVVbml4TmFubzogc3Bhbi5zdGFydFRpbWUgKiAxMDAwMDAwLFxuICAgICAgZW5kVGltZVVuaXhOYW5vOiAoc3Bhbi5zdGFydFRpbWUgKyBzcGFuLmR1cmF0aW9uKSAqIDEwMDAwMDAsXG4gICAgICBhdHRyaWJ1dGVzOiB0YWdzVG9BdHRyaWJ1dGVzKHNwYW4udGFncyksXG4gICAgICBkcm9wcGVkQXR0cmlidXRlc0NvdW50OiAwLFxuICAgICAgZHJvcHBlZEV2ZW50c0NvdW50OiAwLFxuICAgICAgZHJvcHBlZExpbmtzQ291bnQ6IDAsXG4gICAgICBzdGF0dXM6IGdldE9UTFBTdGF0dXMoc3Bhbi50YWdzKSxcbiAgICAgIGV2ZW50czogZ2V0T1RMUEV2ZW50cyhzcGFuLmxvZ3MpLFxuICAgICAgbGlua3M6IGdldE9UTFBSZWZlcmVuY2VzKHNwYW4ucmVmZXJlbmNlcyksXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBnZXRPVExQU3BhbktpbmQodGFnczogVHJhY2VLZXlWYWx1ZVBhaXJbXSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGxldCBzcGFuS2luZCA9IHVuZGVmaW5lZDtcbiAgY29uc3Qgc3BhbktpbmRUYWdWYWx1ZSA9IHRhZ3MuZmluZCgodCkgPT4gdC5rZXkgPT09ICdzcGFuLmtpbmQnKT8udmFsdWU7XG4gIHN3aXRjaCAoc3BhbktpbmRUYWdWYWx1ZSkge1xuICAgIGNhc2UgJ3NlcnZlcic6XG4gICAgICBzcGFuS2luZCA9ICdTUEFOX0tJTkRfU0VSVkVSJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2NsaWVudCc6XG4gICAgICBzcGFuS2luZCA9ICdTUEFOX0tJTkRfQ0xJRU5UJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Byb2R1Y2VyJzpcbiAgICAgIHNwYW5LaW5kID0gJ1NQQU5fS0lORF9QUk9EVUNFUic7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjb25zdW1lcic6XG4gICAgICBzcGFuS2luZCA9ICdTUEFOX0tJTkRfQ09OU1VNRVInO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3BhbktpbmQ7XG59XG5cbi8qKlxuICogQ29udmVydHMga2V5LXZhbHVlIHRhZ3MgdG8gT1RMUCBhdHRyaWJ1dGVzIGFuZCByZW1vdmVzIHRhZ3MgYWRkZWQgYnkgR3JhZmFuYVxuICovXG5mdW5jdGlvbiB0YWdzVG9BdHRyaWJ1dGVzKHRhZ3M6IFRyYWNlS2V5VmFsdWVQYWlyW10pOiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8uY29tbW9uLnYxLktleVZhbHVlW10ge1xuICByZXR1cm4gdGFnc1xuICAgIC5maWx0ZXIoXG4gICAgICAodCkgPT5cbiAgICAgICAgIVtcbiAgICAgICAgICAnc3Bhbi5raW5kJyxcbiAgICAgICAgICAnb3RlbC5saWJyYXJ5Lm5hbWUnLFxuICAgICAgICAgICdvdGVsLmxpYmFyeS52ZXJzaW9uJyxcbiAgICAgICAgICAnb3RlbC5zdGF0dXNfZGVzY3JpcHRpb24nLFxuICAgICAgICAgICdvdGVsLnN0YXR1c19jb2RlJyxcbiAgICAgICAgXS5pbmNsdWRlcyh0LmtleSlcbiAgICApXG4gICAgLnJlZHVjZTxjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8uY29tbW9uLnYxLktleVZhbHVlW10+KFxuICAgICAgKGF0dHJpYnV0ZXMsIHRhZykgPT4gWy4uLmF0dHJpYnV0ZXMsIHsga2V5OiB0YWcua2V5LCB2YWx1ZTogdG9BdHRyaWJ1dGVWYWx1ZSh0YWcpIH1dLFxuICAgICAgW11cbiAgICApO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGNvcnJlY3QgT1RMUCBBbnlWYWx1ZSBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgdGhlIHRhZyB2YWx1ZVxuICovXG5mdW5jdGlvbiB0b0F0dHJpYnV0ZVZhbHVlKHRhZzogVHJhY2VLZXlWYWx1ZVBhaXIpOiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8uY29tbW9uLnYxLkFueVZhbHVlIHtcbiAgaWYgKHR5cGVvZiB0YWcudmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHsgc3RyaW5nVmFsdWU6IHRhZy52YWx1ZSB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiB0YWcudmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiB7IGJvb2xWYWx1ZTogdGFnLnZhbHVlIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIHRhZy52YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodGFnLnZhbHVlICUgMSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHsgaW50VmFsdWU6IHRhZy52YWx1ZSB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBkb3VibGVWYWx1ZTogdGFnLnZhbHVlIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB0YWcudmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFnLnZhbHVlKSkge1xuICAgICAgY29uc3QgdmFsdWVzOiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8uY29tbW9uLnYxLkFueVZhbHVlW10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRhZy52YWx1ZSkge1xuICAgICAgICB2YWx1ZXMucHVzaCh0b0F0dHJpYnV0ZVZhbHVlKHZhbCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBhcnJheVZhbHVlOiB7IHZhbHVlcyB9IH07XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHN0cmluZ1ZhbHVlOiB0YWcudmFsdWUgfTtcbn1cblxuZnVuY3Rpb24gZ2V0T1RMUFN0YXR1cyh0YWdzOiBUcmFjZUtleVZhbHVlUGFpcltdKTogU3BhblN0YXR1cyB8IHVuZGVmaW5lZCB7XG4gIGxldCBzdGF0dXMgPSB1bmRlZmluZWQ7XG4gIGNvbnN0IHN0YXR1c0NvZGVUYWcgPSB0YWdzLmZpbmQoKHQpID0+IHQua2V5ID09PSAnb3RlbC5zdGF0dXNfY29kZScpO1xuICBpZiAoc3RhdHVzQ29kZVRhZykge1xuICAgIHN0YXR1cyA9IHtcbiAgICAgIGNvZGU6IHN0YXR1c0NvZGVUYWcudmFsdWUsXG4gICAgICBtZXNzYWdlOiB0YWdzLmZpbmQoKHQpID0+IHQua2V5ID09PSAnb3RlbF9zdGF0dXNfZGVzY3JpcHRpb24nKT8udmFsdWUsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBzdGF0dXM7XG59XG5cbmZ1bmN0aW9uIGdldE9UTFBFdmVudHMobG9nczogVHJhY2VMb2dbXSk6IGNvbGxlY3RvclR5cGVzLm9wZW50ZWxlbWV0cnlQcm90by50cmFjZS52MS5TcGFuLkV2ZW50W10gfCB1bmRlZmluZWQge1xuICBpZiAoIWxvZ3MgfHwgIWxvZ3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGxldCBldmVudHM6IGNvbGxlY3RvclR5cGVzLm9wZW50ZWxlbWV0cnlQcm90by50cmFjZS52MS5TcGFuLkV2ZW50W10gPSBbXTtcbiAgZm9yIChjb25zdCBsb2cgb2YgbG9ncykge1xuICAgIGxldCBldmVudDogY29sbGVjdG9yVHlwZXMub3BlbnRlbGVtZXRyeVByb3RvLnRyYWNlLnYxLlNwYW4uRXZlbnQgPSB7XG4gICAgICB0aW1lVW5peE5hbm86IGxvZy50aW1lc3RhbXAgKiAxMDAwMDAwLFxuICAgICAgYXR0cmlidXRlczogW10sXG4gICAgICBkcm9wcGVkQXR0cmlidXRlc0NvdW50OiAwLFxuICAgICAgbmFtZTogJycsXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGxvZy5maWVsZHMpIHtcbiAgICAgIGV2ZW50LmF0dHJpYnV0ZXMhLnB1c2goe1xuICAgICAgICBrZXk6IGZpZWxkLmtleSxcbiAgICAgICAgdmFsdWU6IHRvQXR0cmlidXRlVmFsdWUoZmllbGQpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgfVxuICByZXR1cm4gZXZlbnRzO1xufVxuXG5mdW5jdGlvbiBnZXRPVExQUmVmZXJlbmNlcyhcbiAgcmVmZXJlbmNlczogVHJhY2VTcGFuUmVmZXJlbmNlW11cbik6IGNvbGxlY3RvclR5cGVzLm9wZW50ZWxlbWV0cnlQcm90by50cmFjZS52MS5TcGFuLkxpbmtbXSB8IHVuZGVmaW5lZCB7XG4gIGlmICghcmVmZXJlbmNlcyB8fCAhcmVmZXJlbmNlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgbGV0IGxpbmtzOiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8udHJhY2UudjEuU3Bhbi5MaW5rW10gPSBbXTtcbiAgZm9yIChjb25zdCByZWYgb2YgcmVmZXJlbmNlcykge1xuICAgIGxldCBsaW5rOiBjb2xsZWN0b3JUeXBlcy5vcGVudGVsZW1ldHJ5UHJvdG8udHJhY2UudjEuU3Bhbi5MaW5rID0ge1xuICAgICAgdHJhY2VJZDogcmVmLnRyYWNlSUQsXG4gICAgICBzcGFuSWQ6IHJlZi5zcGFuSUQsXG4gICAgICBhdHRyaWJ1dGVzOiBbXSxcbiAgICAgIGRyb3BwZWRBdHRyaWJ1dGVzQ291bnQ6IDAsXG4gICAgfTtcbiAgICBpZiAocmVmLnRhZ3M/Lmxlbmd0aCkge1xuICAgICAgZm9yIChjb25zdCB0YWcgb2YgcmVmLnRhZ3MpIHtcbiAgICAgICAgbGluay5hdHRyaWJ1dGVzPy5wdXNoKHtcbiAgICAgICAgICBrZXk6IHRhZy5rZXksXG4gICAgICAgICAgdmFsdWU6IHRvQXR0cmlidXRlVmFsdWUodGFnKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxpbmtzLnB1c2gobGluayk7XG4gIH1cbiAgcmV0dXJuIGxpbmtzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtVHJhY2UocmVzcG9uc2U6IERhdGFRdWVyeVJlc3BvbnNlLCBub2RlR3JhcGggPSBmYWxzZSk6IERhdGFRdWVyeVJlc3BvbnNlIHtcbiAgLy8gV2UgbmVlZCB0byBwYXJzZSBzb21lIG9mIHRoZSBmaWVsZHMgd2hpY2ggY29udGFpbiBzdHJpbmdpZmllZCBqc29uLlxuICAvLyBTZWVtcyBsaWtlIHdlIGNhbid0IGp1c3QgbWFwIHRoZSB2YWx1ZXMgYXMgdGhlIGZyYW1lIHdlIGdvdCBmcm9tIGJhY2tlbmQgaGFzIHNvbWUgZGVmYXVsdCBwcm9jZXNzaW5nXG4gIC8vIGFuZCB3aWxsIHN0cmluZ2lmeSB0aGUganNvbiBiYWNrIHdoZW4gd2UgdHJ5IHRvIHNldCBpdC4gU28gd2UgY3JlYXRlIGEgbmV3IGZpZWxkIGFuZCBzd2FwIGl0IGluc3RlYWQuXG4gIGNvbnN0IGZyYW1lOiBEYXRhRnJhbWUgPSByZXNwb25zZS5kYXRhWzBdO1xuXG4gIGlmICghZnJhbWUpIHtcbiAgICByZXR1cm4gZW1wdHlEYXRhUXVlcnlSZXNwb25zZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcGFyc2VKc29uRmllbGRzKGZyYW1lKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogeyBtZXNzYWdlOiAnVW5hYmxlIHRvIHBhcnNlIHRyYWNlIHJlc3BvbnNlOiAnICsgZXJyb3IgfSwgZGF0YTogW10gfTtcbiAgfVxuXG4gIGxldCBkYXRhID0gWy4uLnJlc3BvbnNlLmRhdGFdO1xuICBpZiAobm9kZUdyYXBoKSB7XG4gICAgZGF0YS5wdXNoKC4uLmNyZWF0ZUdyYXBoRnJhbWVzKGZyYW1lKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnJlc3BvbnNlLFxuICAgIGRhdGEsXG4gIH07XG59XG5cbi8qKlxuICogQ2hhbmdlIGZpZWxkcyB3aGljaCBhcmUganNvbiBzdHJpbmcgaW50byBKUyBvYmplY3RzLiBNb2RpZmllcyB0aGUgZnJhbWUgaW4gcGxhY2UuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlSnNvbkZpZWxkcyhmcmFtZTogRGF0YUZyYW1lKSB7XG4gIGZvciAoY29uc3QgZmllbGROYW1lIG9mIFsnc2VydmljZVRhZ3MnLCAnbG9ncycsICd0YWdzJywgJ3JlZmVyZW5jZXMnXSkge1xuICAgIGNvbnN0IGZpZWxkID0gZnJhbWUuZmllbGRzLmZpbmQoKGYpID0+IGYubmFtZSA9PT0gZmllbGROYW1lKTtcbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIGNvbnN0IGZpZWxkSW5kZXggPSBmcmFtZS5maWVsZHMuaW5kZXhPZihmaWVsZCk7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBuZXcgQXJyYXlWZWN0b3IoKTtcbiAgICAgIGNvbnN0IG5ld0ZpZWxkOiBGaWVsZCA9IHtcbiAgICAgICAgLi4uZmllbGQsXG4gICAgICAgIHZhbHVlcyxcbiAgICAgICAgdHlwZTogRmllbGRUeXBlLm90aGVyLFxuICAgICAgfTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZC52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBmaWVsZC52YWx1ZXMuZ2V0KGkpO1xuICAgICAgICB2YWx1ZXMuc2V0KGksIHZhbHVlID09PSAnJyA/IHVuZGVmaW5lZCA6IEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIGZyYW1lLmZpZWxkc1tmaWVsZEluZGV4XSA9IG5ld0ZpZWxkO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTZWFyY2hSZXNwb25zZSA9IHtcbiAgdHJhY2VJRDogc3RyaW5nO1xuICByb290U2VydmljZU5hbWU6IHN0cmluZztcbiAgcm9vdFRyYWNlTmFtZTogc3RyaW5nO1xuICBzdGFydFRpbWVVbml4TmFubzogc3RyaW5nO1xuICBkdXJhdGlvbk1zOiBudW1iZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFibGVGcmFtZUZyb21TZWFyY2goZGF0YTogU2VhcmNoUmVzcG9uc2VbXSwgaW5zdGFuY2VTZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MpIHtcbiAgY29uc3QgZnJhbWUgPSBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgZmllbGRzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICd0cmFjZUlEJyxcbiAgICAgICAgdHlwZTogRmllbGRUeXBlLnN0cmluZyxcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgdW5pdDogJ3N0cmluZycsXG4gICAgICAgICAgZGlzcGxheU5hbWVGcm9tRFM6ICdUcmFjZSBJRCcsXG4gICAgICAgICAgbGlua3M6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdUcmFjZTogJHtfX3ZhbHVlLnJhd30nLFxuICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICBpbnRlcm5hbDoge1xuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VVaWQ6IGluc3RhbmNlU2V0dGluZ3MudWlkLFxuICAgICAgICAgICAgICAgIGRhdGFzb3VyY2VOYW1lOiBpbnN0YW5jZVNldHRpbmdzLm5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5OiAnJHtfX3ZhbHVlLnJhd30nLFxuICAgICAgICAgICAgICAgICAgcXVlcnlUeXBlOiAndHJhY2VJZCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7IG5hbWU6ICd0cmFjZU5hbWUnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLCBjb25maWc6IHsgZGlzcGxheU5hbWVGcm9tRFM6ICdUcmFjZSBuYW1lJyB9IH0sXG4gICAgICB7IG5hbWU6ICdzdGFydFRpbWUnLCB0eXBlOiBGaWVsZFR5cGUuc3RyaW5nLCBjb25maWc6IHsgZGlzcGxheU5hbWVGcm9tRFM6ICdTdGFydCB0aW1lJyB9IH0sXG4gICAgICB7IG5hbWU6ICdkdXJhdGlvbicsIHR5cGU6IEZpZWxkVHlwZS5udW1iZXIsIGNvbmZpZzogeyBkaXNwbGF5TmFtZUZyb21EUzogJ0R1cmF0aW9uJywgdW5pdDogJ21zJyB9IH0sXG4gICAgXSxcbiAgICBtZXRhOiB7XG4gICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ3RhYmxlJyxcbiAgICB9LFxuICB9KTtcbiAgaWYgKCFkYXRhPy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cbiAgLy8gU2hvdyB0aGUgbW9zdCByZWNlbnQgdHJhY2VzXG4gIGNvbnN0IHRyYWNlRGF0YSA9IGRhdGFcbiAgICAuc29ydCgoYSwgYikgPT4gcGFyc2VJbnQoYj8uc3RhcnRUaW1lVW5peE5hbm8hLCAxMCkgLyAxMDAwMDAwIC0gcGFyc2VJbnQoYT8uc3RhcnRUaW1lVW5peE5hbm8hLCAxMCkgLyAxMDAwMDAwKVxuICAgIC5tYXAodHJhbnNmb3JtVG9UcmFjZURhdGEpO1xuXG4gIGZvciAoY29uc3QgdHJhY2Ugb2YgdHJhY2VEYXRhKSB7XG4gICAgZnJhbWUuYWRkKHRyYWNlKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtVG9UcmFjZURhdGEoZGF0YTogU2VhcmNoUmVzcG9uc2UpIHtcbiAgbGV0IHRyYWNlTmFtZSA9ICcnO1xuICBpZiAoZGF0YS5yb290U2VydmljZU5hbWUpIHtcbiAgICB0cmFjZU5hbWUgKz0gZGF0YS5yb290U2VydmljZU5hbWUgKyAnICc7XG4gIH1cbiAgaWYgKGRhdGEucm9vdFRyYWNlTmFtZSkge1xuICAgIHRyYWNlTmFtZSArPSBkYXRhLnJvb3RUcmFjZU5hbWU7XG4gIH1cblxuICBjb25zdCB0cmFjZVN0YXJ0VGltZSA9IHBhcnNlSW50KGRhdGEuc3RhcnRUaW1lVW5peE5hbm8hLCAxMCkgLyAxMDAwMDAwO1xuXG4gIGxldCBzdGFydFRpbWUgPSBkYXRlVGltZUZvcm1hdCh0cmFjZVN0YXJ0VGltZSk7XG5cbiAgaWYgKE1hdGguYWJzKGRpZmZlcmVuY2VJbkhvdXJzKG5ldyBEYXRlKHRyYWNlU3RhcnRUaW1lKSwgRGF0ZS5ub3coKSkpIDw9IDEpIHtcbiAgICBzdGFydFRpbWUgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSh0cmFjZVN0YXJ0VGltZSksIERhdGUubm93KCksIHtcbiAgICAgIGFkZFN1ZmZpeDogdHJ1ZSxcbiAgICAgIGluY2x1ZGVTZWNvbmRzOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0cmFjZUlEOiBkYXRhLnRyYWNlSUQsXG4gICAgc3RhcnRUaW1lOiBzdGFydFRpbWUsXG4gICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb25NcyxcbiAgICB0cmFjZU5hbWUsXG4gIH07XG59XG5cbmNvbnN0IGVtcHR5RGF0YVF1ZXJ5UmVzcG9uc2UgPSB7XG4gIGRhdGE6IFtcbiAgICBuZXcgTXV0YWJsZURhdGFGcmFtZSh7XG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd0cmFjZScsXG4gICAgICAgICAgdHlwZTogRmllbGRUeXBlLnRyYWNlLFxuICAgICAgICAgIHZhbHVlczogW10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgbWV0YToge1xuICAgICAgICBwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZTogJ3RyYWNlJyxcbiAgICAgICAgY3VzdG9tOiB7XG4gICAgICAgICAgdHJhY2VGb3JtYXQ6ICdvdGxwJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59O1xuIiwiaW1wb3J0IHsgR3JhbW1hciB9IGZyb20gJ3ByaXNtanMnO1xuXG5leHBvcnQgY29uc3QgdG9rZW5pemVyOiBHcmFtbWFyID0ge1xuICBrZXk6IHtcbiAgICBwYXR0ZXJuOiAvW15cXHNdKyg/PT0pLyxcbiAgICBhbGlhczogJ2F0dHItbmFtZScsXG4gIH0sXG4gIG9wZXJhdG9yOiAvWz1dLyxcbiAgdmFsdWU6IFtcbiAgICB7XG4gICAgICBwYXR0ZXJuOiAvXCIoLispXCIvLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0dGVybjogL1teXFxzXSsvLFxuICAgIH0sXG4gIF0sXG59O1xuIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20pIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xuICAgIHJldHVybiB0bztcbn07XG5pbXBvcnQgeyBOb29wQ29udGV4dE1hbmFnZXIgfSBmcm9tICcuLi9jb250ZXh0L05vb3BDb250ZXh0TWFuYWdlcic7XG5pbXBvcnQgeyBnZXRHbG9iYWwsIHJlZ2lzdGVyR2xvYmFsLCB1bnJlZ2lzdGVyR2xvYmFsLCB9IGZyb20gJy4uL2ludGVybmFsL2dsb2JhbC11dGlscyc7XG5pbXBvcnQgeyBEaWFnQVBJIH0gZnJvbSAnLi9kaWFnJztcbnZhciBBUElfTkFNRSA9ICdjb250ZXh0JztcbnZhciBOT09QX0NPTlRFWFRfTUFOQUdFUiA9IG5ldyBOb29wQ29udGV4dE1hbmFnZXIoKTtcbi8qKlxuICogU2luZ2xldG9uIG9iamVjdCB3aGljaCByZXByZXNlbnRzIHRoZSBlbnRyeSBwb2ludCB0byB0aGUgT3BlblRlbGVtZXRyeSBDb250ZXh0IEFQSVxuICovXG52YXIgQ29udGV4dEFQSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKiogRW1wdHkgcHJpdmF0ZSBjb25zdHJ1Y3RvciBwcmV2ZW50cyBlbmQgdXNlcnMgZnJvbSBjb25zdHJ1Y3RpbmcgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIEFQSSAqL1xuICAgIGZ1bmN0aW9uIENvbnRleHRBUEkoKSB7XG4gICAgfVxuICAgIC8qKiBHZXQgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZSBvZiB0aGUgQ29udGV4dCBBUEkgKi9cbiAgICBDb250ZXh0QVBJLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBDb250ZXh0QVBJKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBjdXJyZW50IGNvbnRleHQgbWFuYWdlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIGNvbnRleHQgbWFuYWdlciB3YXMgc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQsIGVsc2UgZmFsc2VcbiAgICAgKi9cbiAgICBDb250ZXh0QVBJLnByb3RvdHlwZS5zZXRHbG9iYWxDb250ZXh0TWFuYWdlciA9IGZ1bmN0aW9uIChjb250ZXh0TWFuYWdlcikge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJHbG9iYWwoQVBJX05BTUUsIGNvbnRleHRNYW5hZ2VyLCBEaWFnQVBJLmluc3RhbmNlKCkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50bHkgYWN0aXZlIGNvbnRleHRcbiAgICAgKi9cbiAgICBDb250ZXh0QVBJLnByb3RvdHlwZS5hY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRDb250ZXh0TWFuYWdlcigpLmFjdGl2ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhlY3V0ZSBhIGZ1bmN0aW9uIHdpdGggYW4gYWN0aXZlIGNvbnRleHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZXh0IGNvbnRleHQgdG8gYmUgYWN0aXZlIGR1cmluZyBmdW5jdGlvbiBleGVjdXRpb25cbiAgICAgKiBAcGFyYW0gZm4gZnVuY3Rpb24gdG8gZXhlY3V0ZSBpbiBhIGNvbnRleHRcbiAgICAgKiBAcGFyYW0gdGhpc0FyZyBvcHRpb25hbCByZWNlaXZlciB0byBiZSB1c2VkIGZvciBjYWxsaW5nIGZuXG4gICAgICogQHBhcmFtIGFyZ3Mgb3B0aW9uYWwgYXJndW1lbnRzIGZvcndhcmRlZCB0byBmblxuICAgICAqL1xuICAgIENvbnRleHRBUEkucHJvdG90eXBlLndpdGggPSBmdW5jdGlvbiAoY29udGV4dCwgZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDM7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDNdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5fZ2V0Q29udGV4dE1hbmFnZXIoKSkud2l0aC5hcHBseShfYSwgX19zcHJlYWRBcnJheShbY29udGV4dCwgZm4sIHRoaXNBcmddLCBhcmdzKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBCaW5kIGEgY29udGV4dCB0byBhIHRhcmdldCBmdW5jdGlvbiBvciBldmVudCBlbWl0dGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udGV4dCBjb250ZXh0IHRvIGJpbmQgdG8gdGhlIGV2ZW50IGVtaXR0ZXIgb3IgZnVuY3Rpb24uIERlZmF1bHRzIHRvIHRoZSBjdXJyZW50bHkgYWN0aXZlIGNvbnRleHRcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IGZ1bmN0aW9uIG9yIGV2ZW50IGVtaXR0ZXIgdG8gYmluZFxuICAgICAqL1xuICAgIENvbnRleHRBUEkucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoY29udGV4dCwgdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRDb250ZXh0TWFuYWdlcigpLmJpbmQoY29udGV4dCwgdGFyZ2V0KTtcbiAgICB9O1xuICAgIENvbnRleHRBUEkucHJvdG90eXBlLl9nZXRDb250ZXh0TWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldEdsb2JhbChBUElfTkFNRSkgfHwgTk9PUF9DT05URVhUX01BTkFHRVI7XG4gICAgfTtcbiAgICAvKiogRGlzYWJsZSBhbmQgcmVtb3ZlIHRoZSBnbG9iYWwgY29udGV4dCBtYW5hZ2VyICovXG4gICAgQ29udGV4dEFQSS5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fZ2V0Q29udGV4dE1hbmFnZXIoKS5kaXNhYmxlKCk7XG4gICAgICAgIHVucmVnaXN0ZXJHbG9iYWwoQVBJX05BTUUsIERpYWdBUEkuaW5zdGFuY2UoKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29udGV4dEFQSTtcbn0oKSk7XG5leHBvcnQgeyBDb250ZXh0QVBJIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250ZXh0LmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBEaWFnQ29tcG9uZW50TG9nZ2VyIH0gZnJvbSAnLi4vZGlhZy9Db21wb25lbnRMb2dnZXInO1xuaW1wb3J0IHsgY3JlYXRlTG9nTGV2ZWxEaWFnTG9nZ2VyIH0gZnJvbSAnLi4vZGlhZy9pbnRlcm5hbC9sb2dMZXZlbExvZ2dlcic7XG5pbXBvcnQgeyBEaWFnTG9nTGV2ZWwsIH0gZnJvbSAnLi4vZGlhZy90eXBlcyc7XG5pbXBvcnQgeyBnZXRHbG9iYWwsIHJlZ2lzdGVyR2xvYmFsLCB1bnJlZ2lzdGVyR2xvYmFsLCB9IGZyb20gJy4uL2ludGVybmFsL2dsb2JhbC11dGlscyc7XG52YXIgQVBJX05BTUUgPSAnZGlhZyc7XG4vKipcbiAqIFNpbmdsZXRvbiBvYmplY3Qgd2hpY2ggcmVwcmVzZW50cyB0aGUgZW50cnkgcG9pbnQgdG8gdGhlIE9wZW5UZWxlbWV0cnkgaW50ZXJuYWxcbiAqIGRpYWdub3N0aWMgQVBJXG4gKi9cbnZhciBEaWFnQVBJID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIFByaXZhdGUgaW50ZXJuYWwgY29uc3RydWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIERpYWdBUEkoKSB7XG4gICAgICAgIGZ1bmN0aW9uIF9sb2dQcm94eShmdW5jTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGxvZ2dlciA9IGdldEdsb2JhbCgnZGlhZycpO1xuICAgICAgICAgICAgICAgIC8vIHNob3J0Y3V0IGlmIGxvZ2dlciBub3Qgc2V0XG4gICAgICAgICAgICAgICAgaWYgKCFsb2dnZXIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9nZ2VyW2Z1bmNOYW1lXS5hcHBseShsb2dnZXIsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBVc2luZyBzZWxmIGxvY2FsIHZhcmlhYmxlIGZvciBtaW5pZmljYXRpb24gcHVycG9zZXMgYXMgJ3RoaXMnIGNhbm5vdCBiZSBtaW5pZmllZFxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIERpYWdBUEkgc3BlY2lmaWMgZnVuY3Rpb25zXG4gICAgICAgIHNlbGYuc2V0TG9nZ2VyID0gZnVuY3Rpb24gKGxvZ2dlciwgbG9nTGV2ZWwpIHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICBpZiAobG9nTGV2ZWwgPT09IHZvaWQgMCkgeyBsb2dMZXZlbCA9IERpYWdMb2dMZXZlbC5JTkZPOyB9XG4gICAgICAgICAgICBpZiAobG9nZ2VyID09PSBzZWxmKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlcmUgaXNuJ3QgbXVjaCB3ZSBjYW4gZG8gaGVyZS5cbiAgICAgICAgICAgICAgICAvLyBMb2dnaW5nIHRvIHRoZSBjb25zb2xlIG1pZ2h0IGJyZWFrIHRoZSB1c2VyIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgICAgIC8vIFRyeSB0byBsb2cgdG8gc2VsZi4gSWYgYSBsb2dnZXIgd2FzIHByZXZpb3VzbHkgcmVnaXN0ZXJlZCBpdCB3aWxsIHJlY2VpdmUgdGhlIGxvZy5cbiAgICAgICAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdDYW5ub3QgdXNlIGRpYWcgYXMgdGhlIGxvZ2dlciBmb3IgaXRzZWxmLiBQbGVhc2UgdXNlIGEgRGlhZ0xvZ2dlciBpbXBsZW1lbnRhdGlvbiBsaWtlIENvbnNvbGVEaWFnTG9nZ2VyIG9yIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uJyk7XG4gICAgICAgICAgICAgICAgc2VsZi5lcnJvcigoX2EgPSBlcnIuc3RhY2spICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb2xkTG9nZ2VyID0gZ2V0R2xvYmFsKCdkaWFnJyk7XG4gICAgICAgICAgICB2YXIgbmV3TG9nZ2VyID0gY3JlYXRlTG9nTGV2ZWxEaWFnTG9nZ2VyKGxvZ0xldmVsLCBsb2dnZXIpO1xuICAgICAgICAgICAgLy8gVGhlcmUgYWxyZWFkeSBpcyBhbiBsb2dnZXIgcmVnaXN0ZXJlZC4gV2UnbGwgbGV0IGl0IGtub3cgYmVmb3JlIG92ZXJ3cml0aW5nIGl0LlxuICAgICAgICAgICAgaWYgKG9sZExvZ2dlcikge1xuICAgICAgICAgICAgICAgIHZhciBzdGFjayA9IChfYiA9IG5ldyBFcnJvcigpLnN0YWNrKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnPGZhaWxlZCB0byBnZW5lcmF0ZSBzdGFja3RyYWNlPic7XG4gICAgICAgICAgICAgICAgb2xkTG9nZ2VyLndhcm4oXCJDdXJyZW50IGxvZ2dlciB3aWxsIGJlIG92ZXJ3cml0dGVuIGZyb20gXCIgKyBzdGFjayk7XG4gICAgICAgICAgICAgICAgbmV3TG9nZ2VyLndhcm4oXCJDdXJyZW50IGxvZ2dlciB3aWxsIG92ZXJ3cml0ZSBvbmUgYWxyZWFkeSByZWdpc3RlcmVkIGZyb20gXCIgKyBzdGFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0ZXJHbG9iYWwoJ2RpYWcnLCBuZXdMb2dnZXIsIHNlbGYsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBzZWxmLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1bnJlZ2lzdGVyR2xvYmFsKEFQSV9OQU1FLCBzZWxmKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2VsZi5jcmVhdGVDb21wb25lbnRMb2dnZXIgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEaWFnQ29tcG9uZW50TG9nZ2VyKG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICBzZWxmLnZlcmJvc2UgPSBfbG9nUHJveHkoJ3ZlcmJvc2UnKTtcbiAgICAgICAgc2VsZi5kZWJ1ZyA9IF9sb2dQcm94eSgnZGVidWcnKTtcbiAgICAgICAgc2VsZi5pbmZvID0gX2xvZ1Byb3h5KCdpbmZvJyk7XG4gICAgICAgIHNlbGYud2FybiA9IF9sb2dQcm94eSgnd2FybicpO1xuICAgICAgICBzZWxmLmVycm9yID0gX2xvZ1Byb3h5KCdlcnJvcicpO1xuICAgIH1cbiAgICAvKiogR2V0IHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIERpYWdBUEkgQVBJICovXG4gICAgRGlhZ0FQSS5pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgRGlhZ0FQSSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9O1xuICAgIHJldHVybiBEaWFnQVBJO1xufSgpKTtcbmV4cG9ydCB7IERpYWdBUEkgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpYWcuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IGdldEdsb2JhbCwgcmVnaXN0ZXJHbG9iYWwsIHVucmVnaXN0ZXJHbG9iYWwsIH0gZnJvbSAnLi4vaW50ZXJuYWwvZ2xvYmFsLXV0aWxzJztcbmltcG9ydCB7IE5vb3BUZXh0TWFwUHJvcGFnYXRvciB9IGZyb20gJy4uL3Byb3BhZ2F0aW9uL05vb3BUZXh0TWFwUHJvcGFnYXRvcic7XG5pbXBvcnQgeyBkZWZhdWx0VGV4dE1hcEdldHRlciwgZGVmYXVsdFRleHRNYXBTZXR0ZXIsIH0gZnJvbSAnLi4vcHJvcGFnYXRpb24vVGV4dE1hcFByb3BhZ2F0b3InO1xuaW1wb3J0IHsgZ2V0QmFnZ2FnZSwgc2V0QmFnZ2FnZSwgZGVsZXRlQmFnZ2FnZSwgfSBmcm9tICcuLi9iYWdnYWdlL2NvbnRleHQtaGVscGVycyc7XG5pbXBvcnQgeyBjcmVhdGVCYWdnYWdlIH0gZnJvbSAnLi4vYmFnZ2FnZS91dGlscyc7XG5pbXBvcnQgeyBEaWFnQVBJIH0gZnJvbSAnLi9kaWFnJztcbnZhciBBUElfTkFNRSA9ICdwcm9wYWdhdGlvbic7XG52YXIgTk9PUF9URVhUX01BUF9QUk9QQUdBVE9SID0gbmV3IE5vb3BUZXh0TWFwUHJvcGFnYXRvcigpO1xuLyoqXG4gKiBTaW5nbGV0b24gb2JqZWN0IHdoaWNoIHJlcHJlc2VudHMgdGhlIGVudHJ5IHBvaW50IHRvIHRoZSBPcGVuVGVsZW1ldHJ5IFByb3BhZ2F0aW9uIEFQSVxuICovXG52YXIgUHJvcGFnYXRpb25BUEkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIEVtcHR5IHByaXZhdGUgY29uc3RydWN0b3IgcHJldmVudHMgZW5kIHVzZXJzIGZyb20gY29uc3RydWN0aW5nIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBBUEkgKi9cbiAgICBmdW5jdGlvbiBQcm9wYWdhdGlvbkFQSSgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVCYWdnYWdlID0gY3JlYXRlQmFnZ2FnZTtcbiAgICAgICAgdGhpcy5nZXRCYWdnYWdlID0gZ2V0QmFnZ2FnZTtcbiAgICAgICAgdGhpcy5zZXRCYWdnYWdlID0gc2V0QmFnZ2FnZTtcbiAgICAgICAgdGhpcy5kZWxldGVCYWdnYWdlID0gZGVsZXRlQmFnZ2FnZTtcbiAgICB9XG4gICAgLyoqIEdldCB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBQcm9wYWdhdG9yIEFQSSAqL1xuICAgIFByb3BhZ2F0aW9uQVBJLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBQcm9wYWdhdGlvbkFQSSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY3VycmVudCBwcm9wYWdhdG9yLlxuICAgICAqXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvcGFnYXRvciB3YXMgc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQsIGVsc2UgZmFsc2VcbiAgICAgKi9cbiAgICBQcm9wYWdhdGlvbkFQSS5wcm90b3R5cGUuc2V0R2xvYmFsUHJvcGFnYXRvciA9IGZ1bmN0aW9uIChwcm9wYWdhdG9yKSB7XG4gICAgICAgIHJldHVybiByZWdpc3Rlckdsb2JhbChBUElfTkFNRSwgcHJvcGFnYXRvciwgRGlhZ0FQSS5pbnN0YW5jZSgpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluamVjdCBjb250ZXh0IGludG8gYSBjYXJyaWVyIHRvIGJlIHByb3BhZ2F0ZWQgaW50ZXItcHJvY2Vzc1xuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRleHQgQ29udGV4dCBjYXJyeWluZyB0cmFjaW5nIGRhdGEgdG8gaW5qZWN0XG4gICAgICogQHBhcmFtIGNhcnJpZXIgY2FycmllciB0byBpbmplY3QgY29udGV4dCBpbnRvXG4gICAgICogQHBhcmFtIHNldHRlciBGdW5jdGlvbiB1c2VkIHRvIHNldCB2YWx1ZXMgb24gdGhlIGNhcnJpZXJcbiAgICAgKi9cbiAgICBQcm9wYWdhdGlvbkFQSS5wcm90b3R5cGUuaW5qZWN0ID0gZnVuY3Rpb24gKGNvbnRleHQsIGNhcnJpZXIsIHNldHRlcikge1xuICAgICAgICBpZiAoc2V0dGVyID09PSB2b2lkIDApIHsgc2V0dGVyID0gZGVmYXVsdFRleHRNYXBTZXR0ZXI7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldEdsb2JhbFByb3BhZ2F0b3IoKS5pbmplY3QoY29udGV4dCwgY2Fycmllciwgc2V0dGVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgY29udGV4dCBmcm9tIGEgY2FycmllclxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRleHQgQ29udGV4dCB3aGljaCB0aGUgbmV3bHkgY3JlYXRlZCBjb250ZXh0IHdpbGwgaW5oZXJpdCBmcm9tXG4gICAgICogQHBhcmFtIGNhcnJpZXIgQ2FycmllciB0byBleHRyYWN0IGNvbnRleHQgZnJvbVxuICAgICAqIEBwYXJhbSBnZXR0ZXIgRnVuY3Rpb24gdXNlZCB0byBleHRyYWN0IGtleXMgZnJvbSBhIGNhcnJpZXJcbiAgICAgKi9cbiAgICBQcm9wYWdhdGlvbkFQSS5wcm90b3R5cGUuZXh0cmFjdCA9IGZ1bmN0aW9uIChjb250ZXh0LCBjYXJyaWVyLCBnZXR0ZXIpIHtcbiAgICAgICAgaWYgKGdldHRlciA9PT0gdm9pZCAwKSB7IGdldHRlciA9IGRlZmF1bHRUZXh0TWFwR2V0dGVyOyB9XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRHbG9iYWxQcm9wYWdhdG9yKCkuZXh0cmFjdChjb250ZXh0LCBjYXJyaWVyLCBnZXR0ZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgbGlzdCBvZiBhbGwgZmllbGRzIHdoaWNoIG1heSBiZSB1c2VkIGJ5IHRoZSBwcm9wYWdhdG9yLlxuICAgICAqL1xuICAgIFByb3BhZ2F0aW9uQVBJLnByb3RvdHlwZS5maWVsZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRHbG9iYWxQcm9wYWdhdG9yKCkuZmllbGRzKCk7XG4gICAgfTtcbiAgICAvKiogUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGFnYXRvciAqL1xuICAgIFByb3BhZ2F0aW9uQVBJLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB1bnJlZ2lzdGVyR2xvYmFsKEFQSV9OQU1FLCBEaWFnQVBJLmluc3RhbmNlKCkpO1xuICAgIH07XG4gICAgUHJvcGFnYXRpb25BUEkucHJvdG90eXBlLl9nZXRHbG9iYWxQcm9wYWdhdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0R2xvYmFsKEFQSV9OQU1FKSB8fCBOT09QX1RFWFRfTUFQX1BST1BBR0FUT1I7XG4gICAgfTtcbiAgICByZXR1cm4gUHJvcGFnYXRpb25BUEk7XG59KCkpO1xuZXhwb3J0IHsgUHJvcGFnYXRpb25BUEkgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByb3BhZ2F0aW9uLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBnZXRHbG9iYWwsIHJlZ2lzdGVyR2xvYmFsLCB1bnJlZ2lzdGVyR2xvYmFsLCB9IGZyb20gJy4uL2ludGVybmFsL2dsb2JhbC11dGlscyc7XG5pbXBvcnQgeyBQcm94eVRyYWNlclByb3ZpZGVyIH0gZnJvbSAnLi4vdHJhY2UvUHJveHlUcmFjZXJQcm92aWRlcic7XG5pbXBvcnQgeyBpc1NwYW5Db250ZXh0VmFsaWQsIHdyYXBTcGFuQ29udGV4dCwgfSBmcm9tICcuLi90cmFjZS9zcGFuY29udGV4dC11dGlscyc7XG5pbXBvcnQgeyBkZWxldGVTcGFuLCBnZXRTcGFuLCBnZXRTcGFuQ29udGV4dCwgc2V0U3Bhbiwgc2V0U3BhbkNvbnRleHQsIH0gZnJvbSAnLi4vdHJhY2UvY29udGV4dC11dGlscyc7XG5pbXBvcnQgeyBEaWFnQVBJIH0gZnJvbSAnLi9kaWFnJztcbnZhciBBUElfTkFNRSA9ICd0cmFjZSc7XG4vKipcbiAqIFNpbmdsZXRvbiBvYmplY3Qgd2hpY2ggcmVwcmVzZW50cyB0aGUgZW50cnkgcG9pbnQgdG8gdGhlIE9wZW5UZWxlbWV0cnkgVHJhY2luZyBBUElcbiAqL1xudmFyIFRyYWNlQVBJID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKiBFbXB0eSBwcml2YXRlIGNvbnN0cnVjdG9yIHByZXZlbnRzIGVuZCB1c2VycyBmcm9tIGNvbnN0cnVjdGluZyBhIG5ldyBpbnN0YW5jZSBvZiB0aGUgQVBJICovXG4gICAgZnVuY3Rpb24gVHJhY2VBUEkoKSB7XG4gICAgICAgIHRoaXMuX3Byb3h5VHJhY2VyUHJvdmlkZXIgPSBuZXcgUHJveHlUcmFjZXJQcm92aWRlcigpO1xuICAgICAgICB0aGlzLndyYXBTcGFuQ29udGV4dCA9IHdyYXBTcGFuQ29udGV4dDtcbiAgICAgICAgdGhpcy5pc1NwYW5Db250ZXh0VmFsaWQgPSBpc1NwYW5Db250ZXh0VmFsaWQ7XG4gICAgICAgIHRoaXMuZGVsZXRlU3BhbiA9IGRlbGV0ZVNwYW47XG4gICAgICAgIHRoaXMuZ2V0U3BhbiA9IGdldFNwYW47XG4gICAgICAgIHRoaXMuZ2V0U3BhbkNvbnRleHQgPSBnZXRTcGFuQ29udGV4dDtcbiAgICAgICAgdGhpcy5zZXRTcGFuID0gc2V0U3BhbjtcbiAgICAgICAgdGhpcy5zZXRTcGFuQ29udGV4dCA9IHNldFNwYW5Db250ZXh0O1xuICAgIH1cbiAgICAvKiogR2V0IHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFRyYWNlIEFQSSAqL1xuICAgIFRyYWNlQVBJLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBUcmFjZUFQSSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY3VycmVudCBnbG9iYWwgdHJhY2VyLlxuICAgICAqXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgdHJhY2VyIHByb3ZpZGVyIHdhcyBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCwgZWxzZSBmYWxzZVxuICAgICAqL1xuICAgIFRyYWNlQVBJLnByb3RvdHlwZS5zZXRHbG9iYWxUcmFjZXJQcm92aWRlciA9IGZ1bmN0aW9uIChwcm92aWRlcikge1xuICAgICAgICB2YXIgc3VjY2VzcyA9IHJlZ2lzdGVyR2xvYmFsKEFQSV9OQU1FLCB0aGlzLl9wcm94eVRyYWNlclByb3ZpZGVyLCBEaWFnQVBJLmluc3RhbmNlKCkpO1xuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5fcHJveHlUcmFjZXJQcm92aWRlci5zZXREZWxlZ2F0ZShwcm92aWRlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBnbG9iYWwgdHJhY2VyIHByb3ZpZGVyLlxuICAgICAqL1xuICAgIFRyYWNlQVBJLnByb3RvdHlwZS5nZXRUcmFjZXJQcm92aWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldEdsb2JhbChBUElfTkFNRSkgfHwgdGhpcy5fcHJveHlUcmFjZXJQcm92aWRlcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSB0cmFjZXIgZnJvbSB0aGUgZ2xvYmFsIHRyYWNlciBwcm92aWRlci5cbiAgICAgKi9cbiAgICBUcmFjZUFQSS5wcm90b3R5cGUuZ2V0VHJhY2VyID0gZnVuY3Rpb24gKG5hbWUsIHZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VHJhY2VyUHJvdmlkZXIoKS5nZXRUcmFjZXIobmFtZSwgdmVyc2lvbik7XG4gICAgfTtcbiAgICAvKiogUmVtb3ZlIHRoZSBnbG9iYWwgdHJhY2VyIHByb3ZpZGVyICovXG4gICAgVHJhY2VBUEkucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHVucmVnaXN0ZXJHbG9iYWwoQVBJX05BTUUsIERpYWdBUEkuaW5zdGFuY2UoKSk7XG4gICAgICAgIHRoaXMuX3Byb3h5VHJhY2VyUHJvdmlkZXIgPSBuZXcgUHJveHlUcmFjZXJQcm92aWRlcigpO1xuICAgIH07XG4gICAgcmV0dXJuIFRyYWNlQVBJO1xufSgpKTtcbmV4cG9ydCB7IFRyYWNlQVBJIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFjZS5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dEtleSB9IGZyb20gJy4uL2NvbnRleHQvY29udGV4dCc7XG4vKipcbiAqIEJhZ2dhZ2Uga2V5XG4gKi9cbnZhciBCQUdHQUdFX0tFWSA9IGNyZWF0ZUNvbnRleHRLZXkoJ09wZW5UZWxlbWV0cnkgQmFnZ2FnZSBLZXknKTtcbi8qKlxuICogUmV0cmlldmUgdGhlIGN1cnJlbnQgYmFnZ2FnZSBmcm9tIHRoZSBnaXZlbiBjb250ZXh0XG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBDb250ZXh0IHRoYXQgbWFuYWdlIGFsbCBjb250ZXh0IHZhbHVlc1xuICogQHJldHVybnMge0JhZ2dhZ2V9IEV4dHJhY3RlZCBiYWdnYWdlIGZyb20gdGhlIGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJhZ2dhZ2UoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0LmdldFZhbHVlKEJBR0dBR0VfS0VZKSB8fCB1bmRlZmluZWQ7XG59XG4vKipcbiAqIFN0b3JlIGEgYmFnZ2FnZSBpbiB0aGUgZ2l2ZW4gY29udGV4dFxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gQ29udGV4dCB0aGF0IG1hbmFnZSBhbGwgY29udGV4dCB2YWx1ZXNcbiAqIEBwYXJhbSB7QmFnZ2FnZX0gYmFnZ2FnZSB0aGF0IHdpbGwgYmUgc2V0IGluIHRoZSBhY3R1YWwgY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0QmFnZ2FnZShjb250ZXh0LCBiYWdnYWdlKSB7XG4gICAgcmV0dXJuIGNvbnRleHQuc2V0VmFsdWUoQkFHR0FHRV9LRVksIGJhZ2dhZ2UpO1xufVxuLyoqXG4gKiBEZWxldGUgdGhlIGJhZ2dhZ2Ugc3RvcmVkIGluIHRoZSBnaXZlbiBjb250ZXh0XG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBDb250ZXh0IHRoYXQgbWFuYWdlIGFsbCBjb250ZXh0IHZhbHVlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQmFnZ2FnZShjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQuZGVsZXRlVmFsdWUoQkFHR0FHRV9LRVkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udGV4dC1oZWxwZXJzLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG52YXIgQmFnZ2FnZUltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmFnZ2FnZUltcGwoZW50cmllcykge1xuICAgICAgICB0aGlzLl9lbnRyaWVzID0gZW50cmllcyA/IG5ldyBNYXAoZW50cmllcykgOiBuZXcgTWFwKCk7XG4gICAgfVxuICAgIEJhZ2dhZ2VJbXBsLnByb3RvdHlwZS5nZXRFbnRyeSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy5fZW50cmllcy5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZW50cnkpO1xuICAgIH07XG4gICAgQmFnZ2FnZUltcGwucHJvdG90eXBlLmdldEFsbEVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2VudHJpZXMuZW50cmllcygpKS5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgayA9IF9hWzBdLCB2ID0gX2FbMV07XG4gICAgICAgICAgICByZXR1cm4gW2ssIHZdO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJhZ2dhZ2VJbXBsLnByb3RvdHlwZS5zZXRFbnRyeSA9IGZ1bmN0aW9uIChrZXksIGVudHJ5KSB7XG4gICAgICAgIHZhciBuZXdCYWdnYWdlID0gbmV3IEJhZ2dhZ2VJbXBsKHRoaXMuX2VudHJpZXMpO1xuICAgICAgICBuZXdCYWdnYWdlLl9lbnRyaWVzLnNldChrZXksIGVudHJ5KTtcbiAgICAgICAgcmV0dXJuIG5ld0JhZ2dhZ2U7XG4gICAgfTtcbiAgICBCYWdnYWdlSW1wbC5wcm90b3R5cGUucmVtb3ZlRW50cnkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBuZXdCYWdnYWdlID0gbmV3IEJhZ2dhZ2VJbXBsKHRoaXMuX2VudHJpZXMpO1xuICAgICAgICBuZXdCYWdnYWdlLl9lbnRyaWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICByZXR1cm4gbmV3QmFnZ2FnZTtcbiAgICB9O1xuICAgIEJhZ2dhZ2VJbXBsLnByb3RvdHlwZS5yZW1vdmVFbnRyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIga2V5cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAga2V5c1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdCYWdnYWdlID0gbmV3IEJhZ2dhZ2VJbXBsKHRoaXMuX2VudHJpZXMpO1xuICAgICAgICBmb3IgKHZhciBfYSA9IDAsIGtleXNfMSA9IGtleXM7IF9hIDwga2V5c18xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNfMVtfYV07XG4gICAgICAgICAgICBuZXdCYWdnYWdlLl9lbnRyaWVzLmRlbGV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdCYWdnYWdlO1xuICAgIH07XG4gICAgQmFnZ2FnZUltcGwucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEJhZ2dhZ2VJbXBsKCk7XG4gICAgfTtcbiAgICByZXR1cm4gQmFnZ2FnZUltcGw7XG59KCkpO1xuZXhwb3J0IHsgQmFnZ2FnZUltcGwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJhZ2dhZ2UtaW1wbC5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBTeW1ib2wgdXNlZCB0byBtYWtlIEJhZ2dhZ2VFbnRyeU1ldGFkYXRhIGFuIG9wYXF1ZSB0eXBlXG4gKi9cbmV4cG9ydCB2YXIgYmFnZ2FnZUVudHJ5TWV0YWRhdGFTeW1ib2wgPSBTeW1ib2woJ0JhZ2dhZ2VFbnRyeU1ldGFkYXRhJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zeW1ib2wuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGVzLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBEaWFnQVBJIH0gZnJvbSAnLi4vYXBpL2RpYWcnO1xuaW1wb3J0IHsgQmFnZ2FnZUltcGwgfSBmcm9tICcuL2ludGVybmFsL2JhZ2dhZ2UtaW1wbCc7XG5pbXBvcnQgeyBiYWdnYWdlRW50cnlNZXRhZGF0YVN5bWJvbCB9IGZyb20gJy4vaW50ZXJuYWwvc3ltYm9sJztcbnZhciBkaWFnID0gRGlhZ0FQSS5pbnN0YW5jZSgpO1xuLyoqXG4gKiBDcmVhdGUgYSBuZXcgQmFnZ2FnZSB3aXRoIG9wdGlvbmFsIGVudHJpZXNcbiAqXG4gKiBAcGFyYW0gZW50cmllcyBBbiBhcnJheSBvZiBiYWdnYWdlIGVudHJpZXMgdGhlIG5ldyBiYWdnYWdlIHNob3VsZCBjb250YWluXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCYWdnYWdlKGVudHJpZXMpIHtcbiAgICBpZiAoZW50cmllcyA9PT0gdm9pZCAwKSB7IGVudHJpZXMgPSB7fTsgfVxuICAgIHJldHVybiBuZXcgQmFnZ2FnZUltcGwobmV3IE1hcChPYmplY3QuZW50cmllcyhlbnRyaWVzKSkpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBzZXJpYWxpemFibGUgQmFnZ2FnZUVudHJ5TWV0YWRhdGEgb2JqZWN0IGZyb20gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHN0ciBzdHJpbmcgbWV0YWRhdGEuIEZvcm1hdCBpcyBjdXJyZW50bHkgbm90IGRlZmluZWQgYnkgdGhlIHNwZWMgYW5kIGhhcyBubyBzcGVjaWFsIG1lYW5pbmcuXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gYmFnZ2FnZUVudHJ5TWV0YWRhdGFGcm9tU3RyaW5nKHN0cikge1xuICAgIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgICAgICBkaWFnLmVycm9yKFwiQ2Fubm90IGNyZWF0ZSBiYWdnYWdlIG1ldGFkYXRhIGZyb20gdW5rbm93biB0eXBlOiBcIiArIHR5cGVvZiBzdHIpO1xuICAgICAgICBzdHIgPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgX19UWVBFX186IGJhZ2dhZ2VFbnRyeU1ldGFkYXRhU3ltYm9sLFxuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUF0dHJpYnV0ZXMuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUV4Y2VwdGlvbi5qcy5tYXAiLCJleHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UaW1lLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcbiAgICByZXR1cm4gdG87XG59O1xuaW1wb3J0IHsgUk9PVF9DT05URVhUIH0gZnJvbSAnLi9jb250ZXh0JztcbnZhciBOb29wQ29udGV4dE1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9vcENvbnRleHRNYW5hZ2VyKCkge1xuICAgIH1cbiAgICBOb29wQ29udGV4dE1hbmFnZXIucHJvdG90eXBlLmFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFJPT1RfQ09OVEVYVDtcbiAgICB9O1xuICAgIE5vb3BDb250ZXh0TWFuYWdlci5wcm90b3R5cGUud2l0aCA9IGZ1bmN0aW9uIChfY29udGV4dCwgZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAzOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAzXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZuLmNhbGwuYXBwbHkoZm4sIF9fc3ByZWFkQXJyYXkoW3RoaXNBcmddLCBhcmdzKSk7XG4gICAgfTtcbiAgICBOb29wQ29udGV4dE1hbmFnZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoX2NvbnRleHQsIHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgTm9vcENvbnRleHRNYW5hZ2VyLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgTm9vcENvbnRleHRNYW5hZ2VyLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBOb29wQ29udGV4dE1hbmFnZXI7XG59KCkpO1xuZXhwb3J0IHsgTm9vcENvbnRleHRNYW5hZ2VyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob29wQ29udGV4dE1hbmFnZXIuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKiBHZXQgYSBrZXkgdG8gdW5pcXVlbHkgaWRlbnRpZnkgYSBjb250ZXh0IHZhbHVlICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dEtleShkZXNjcmlwdGlvbikge1xuICAgIC8vIFRoZSBzcGVjaWZpY2F0aW9uIHN0YXRlcyB0aGF0IGZvciB0aGUgc2FtZSBpbnB1dCwgbXVsdGlwbGUgY2FsbHMgc2hvdWxkXG4gICAgLy8gcmV0dXJuIGRpZmZlcmVudCBrZXlzLiBEdWUgdG8gdGhlIG5hdHVyZSBvZiB0aGUgSlMgZGVwZW5kZW5jeSBtYW5hZ2VtZW50XG4gICAgLy8gc3lzdGVtLCB0aGlzIGNyZWF0ZXMgcHJvYmxlbXMgd2hlcmUgbXVsdGlwbGUgdmVyc2lvbnMgb2Ygc29tZSBwYWNrYWdlXG4gICAgLy8gY291bGQgaG9sZCBkaWZmZXJlbnQga2V5cyBmb3IgdGhlIHNhbWUgcHJvcGVydHkuXG4gICAgLy9cbiAgICAvLyBUaGVyZWZvcmUsIHdlIHVzZSBTeW1ib2wuZm9yIHdoaWNoIHJldHVybnMgdGhlIHNhbWUga2V5IGZvciB0aGUgc2FtZSBpbnB1dC5cbiAgICByZXR1cm4gU3ltYm9sLmZvcihkZXNjcmlwdGlvbik7XG59XG52YXIgQmFzZUNvbnRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGEgbmV3IGNvbnRleHQgd2hpY2ggaW5oZXJpdHMgdmFsdWVzIGZyb20gYW4gb3B0aW9uYWwgcGFyZW50IGNvbnRleHQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyZW50Q29udGV4dCBhIGNvbnRleHQgZnJvbSB3aGljaCB0byBpbmhlcml0IHZhbHVlc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIEJhc2VDb250ZXh0KHBhcmVudENvbnRleHQpIHtcbiAgICAgICAgLy8gZm9yIG1pbmlmaWNhdGlvblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuX2N1cnJlbnRDb250ZXh0ID0gcGFyZW50Q29udGV4dCA/IG5ldyBNYXAocGFyZW50Q29udGV4dCkgOiBuZXcgTWFwKCk7XG4gICAgICAgIHNlbGYuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBzZWxmLl9jdXJyZW50Q29udGV4dC5nZXQoa2V5KTsgfTtcbiAgICAgICAgc2VsZi5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IG5ldyBCYXNlQ29udGV4dChzZWxmLl9jdXJyZW50Q29udGV4dCk7XG4gICAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50Q29udGV4dC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICAgICAgfTtcbiAgICAgICAgc2VsZi5kZWxldGVWYWx1ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gbmV3IEJhc2VDb250ZXh0KHNlbGYuX2N1cnJlbnRDb250ZXh0KTtcbiAgICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRDb250ZXh0LmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBCYXNlQ29udGV4dDtcbn0oKSk7XG4vKiogVGhlIHJvb3QgY29udGV4dCBpcyB1c2VkIGFzIHRoZSBkZWZhdWx0IHBhcmVudCBjb250ZXh0IHdoZW4gdGhlcmUgaXMgbm8gYWN0aXZlIGNvbnRleHQgKi9cbmV4cG9ydCB2YXIgUk9PVF9DT05URVhUID0gbmV3IEJhc2VDb250ZXh0KCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb250ZXh0LmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgZ2V0R2xvYmFsIH0gZnJvbSAnLi4vaW50ZXJuYWwvZ2xvYmFsLXV0aWxzJztcbi8qKlxuICogQ29tcG9uZW50IExvZ2dlciB3aGljaCBpcyBtZWFudCB0byBiZSB1c2VkIGFzIHBhcnQgb2YgYW55IGNvbXBvbmVudCB3aGljaFxuICogd2lsbCBhZGQgYXV0b21hdGljYWxseSBhZGRpdGlvbmFsIG5hbWVzcGFjZSBpbiBmcm9udCBvZiB0aGUgbG9nIG1lc3NhZ2UuXG4gKiBJdCB3aWxsIHRoZW4gZm9yd2FyZCBhbGwgbWVzc2FnZSB0byBnbG9iYWwgZGlhZyBsb2dnZXJcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBjTG9nZ2VyID0gZGlhZy5jcmVhdGVDb21wb25lbnRMb2dnZXIoeyBuYW1lc3BhY2U6ICdAb3BlbnRlbGVtZXRyeS9pbnN0cnVtZW50YXRpb24taHR0cCcgfSk7XG4gKiBjTG9nZ2VyLmRlYnVnKCd0ZXN0Jyk7XG4gKiAvLyBAb3BlbnRlbGVtZXRyeS9pbnN0cnVtZW50YXRpb24taHR0cCB0ZXN0XG4gKi9cbnZhciBEaWFnQ29tcG9uZW50TG9nZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERpYWdDb21wb25lbnRMb2dnZXIocHJvcHMpIHtcbiAgICAgICAgdGhpcy5fbmFtZXNwYWNlID0gcHJvcHMubmFtZXNwYWNlIHx8ICdEaWFnQ29tcG9uZW50TG9nZ2VyJztcbiAgICB9XG4gICAgRGlhZ0NvbXBvbmVudExvZ2dlci5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ1Byb3h5KCdkZWJ1ZycsIHRoaXMuX25hbWVzcGFjZSwgYXJncyk7XG4gICAgfTtcbiAgICBEaWFnQ29tcG9uZW50TG9nZ2VyLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9nUHJveHkoJ2Vycm9yJywgdGhpcy5fbmFtZXNwYWNlLCBhcmdzKTtcbiAgICB9O1xuICAgIERpYWdDb21wb25lbnRMb2dnZXIucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ1Byb3h5KCdpbmZvJywgdGhpcy5fbmFtZXNwYWNlLCBhcmdzKTtcbiAgICB9O1xuICAgIERpYWdDb21wb25lbnRMb2dnZXIucHJvdG90eXBlLndhcm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ1Byb3h5KCd3YXJuJywgdGhpcy5fbmFtZXNwYWNlLCBhcmdzKTtcbiAgICB9O1xuICAgIERpYWdDb21wb25lbnRMb2dnZXIucHJvdG90eXBlLnZlcmJvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ1Byb3h5KCd2ZXJib3NlJywgdGhpcy5fbmFtZXNwYWNlLCBhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiBEaWFnQ29tcG9uZW50TG9nZ2VyO1xufSgpKTtcbmV4cG9ydCB7IERpYWdDb21wb25lbnRMb2dnZXIgfTtcbmZ1bmN0aW9uIGxvZ1Byb3h5KGZ1bmNOYW1lLCBuYW1lc3BhY2UsIGFyZ3MpIHtcbiAgICB2YXIgbG9nZ2VyID0gZ2V0R2xvYmFsKCdkaWFnJyk7XG4gICAgLy8gc2hvcnRjdXQgaWYgbG9nZ2VyIG5vdCBzZXRcbiAgICBpZiAoIWxvZ2dlcikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFyZ3MudW5zaGlmdChuYW1lc3BhY2UpO1xuICAgIHJldHVybiBsb2dnZXJbZnVuY05hbWVdLmFwcGx5KGxvZ2dlciwgYXJncyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db21wb25lbnRMb2dnZXIuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbnZhciBjb25zb2xlTWFwID0gW1xuICAgIHsgbjogJ2Vycm9yJywgYzogJ2Vycm9yJyB9LFxuICAgIHsgbjogJ3dhcm4nLCBjOiAnd2FybicgfSxcbiAgICB7IG46ICdpbmZvJywgYzogJ2luZm8nIH0sXG4gICAgeyBuOiAnZGVidWcnLCBjOiAnZGVidWcnIH0sXG4gICAgeyBuOiAndmVyYm9zZScsIGM6ICd0cmFjZScgfSxcbl07XG4vKipcbiAqIEEgc2ltcGxlIEltbXV0YWJsZSBDb25zb2xlIGJhc2VkIGRpYWdub3N0aWMgbG9nZ2VyIHdoaWNoIHdpbGwgb3V0cHV0IGFueSBtZXNzYWdlcyB0byB0aGUgQ29uc29sZS5cbiAqIElmIHlvdSB3YW50IHRvIGxpbWl0IHRoZSBhbW91bnQgb2YgbG9nZ2luZyB0byBhIHNwZWNpZmljIGxldmVsIG9yIGxvd2VyIHVzZSB0aGVcbiAqIHtAbGluayBjcmVhdGVMb2dMZXZlbERpYWdMb2dnZXJ9XG4gKi9cbnZhciBEaWFnQ29uc29sZUxvZ2dlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaWFnQ29uc29sZUxvZ2dlcigpIHtcbiAgICAgICAgZnVuY3Rpb24gX2NvbnNvbGVGdW5jKGZ1bmNOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29uc29sZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTb21lIGVudmlyb25tZW50cyBvbmx5IGV4cG9zZSB0aGUgY29uc29sZSB3aGVuIHRoZSBGMTIgZGV2ZWxvcGVyIGNvbnNvbGUgaXMgb3BlblxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgICAgICAgICB2YXIgdGhlRnVuYyA9IGNvbnNvbGVbZnVuY05hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoZUZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBhbGwgZW52aXJvbm1lbnRzIHN1cHBvcnQgYWxsIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZUZ1bmMgPSBjb25zb2xlLmxvZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBPbmUgbGFzdCBmaW5hbCBjaGVja1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoZUZ1bmMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGVGdW5jLmFwcGx5KGNvbnNvbGUsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnNvbGVNYXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNbY29uc29sZU1hcFtpXS5uXSA9IF9jb25zb2xlRnVuYyhjb25zb2xlTWFwW2ldLmMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBEaWFnQ29uc29sZUxvZ2dlcjtcbn0oKSk7XG5leHBvcnQgeyBEaWFnQ29uc29sZUxvZ2dlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc29sZUxvZ2dlci5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9jb25zb2xlTG9nZ2VyJztcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IERpYWdMb2dMZXZlbCB9IGZyb20gJy4uL3R5cGVzJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2dMZXZlbERpYWdMb2dnZXIobWF4TGV2ZWwsIGxvZ2dlcikge1xuICAgIGlmIChtYXhMZXZlbCA8IERpYWdMb2dMZXZlbC5OT05FKSB7XG4gICAgICAgIG1heExldmVsID0gRGlhZ0xvZ0xldmVsLk5PTkU7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1heExldmVsID4gRGlhZ0xvZ0xldmVsLkFMTCkge1xuICAgICAgICBtYXhMZXZlbCA9IERpYWdMb2dMZXZlbC5BTEw7XG4gICAgfVxuICAgIC8vIEluIGNhc2UgdGhlIGxvZ2dlciBpcyBudWxsIG9yIHVuZGVmaW5lZFxuICAgIGxvZ2dlciA9IGxvZ2dlciB8fCB7fTtcbiAgICBmdW5jdGlvbiBfZmlsdGVyRnVuYyhmdW5jTmFtZSwgdGhlTGV2ZWwpIHtcbiAgICAgICAgdmFyIHRoZUZ1bmMgPSBsb2dnZXJbZnVuY05hbWVdO1xuICAgICAgICBpZiAodHlwZW9mIHRoZUZ1bmMgPT09ICdmdW5jdGlvbicgJiYgbWF4TGV2ZWwgPj0gdGhlTGV2ZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGVGdW5jLmJpbmQobG9nZ2VyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcjogX2ZpbHRlckZ1bmMoJ2Vycm9yJywgRGlhZ0xvZ0xldmVsLkVSUk9SKSxcbiAgICAgICAgd2FybjogX2ZpbHRlckZ1bmMoJ3dhcm4nLCBEaWFnTG9nTGV2ZWwuV0FSTiksXG4gICAgICAgIGluZm86IF9maWx0ZXJGdW5jKCdpbmZvJywgRGlhZ0xvZ0xldmVsLklORk8pLFxuICAgICAgICBkZWJ1ZzogX2ZpbHRlckZ1bmMoJ2RlYnVnJywgRGlhZ0xvZ0xldmVsLkRFQlVHKSxcbiAgICAgICAgdmVyYm9zZTogX2ZpbHRlckZ1bmMoJ3ZlcmJvc2UnLCBEaWFnTG9nTGV2ZWwuVkVSQk9TRSksXG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvZ0xldmVsTG9nZ2VyLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIERlZmluZXMgdGhlIGF2YWlsYWJsZSBpbnRlcm5hbCBsb2dnaW5nIGxldmVscyBmb3IgdGhlIGRpYWdub3N0aWMgbG9nZ2VyLCB0aGUgbnVtZXJpYyB2YWx1ZXNcbiAqIG9mIHRoZSBsZXZlbHMgYXJlIGRlZmluZWQgdG8gbWF0Y2ggdGhlIG9yaWdpbmFsIHZhbHVlcyBmcm9tIHRoZSBpbml0aWFsIExvZ0xldmVsIHRvIGF2b2lkXG4gKiBjb21wYXRpYmlsaXR5L21pZ3JhdGlvbiBpc3N1ZXMgZm9yIGFueSBpbXBsZW1lbnRhdGlvbiB0aGF0IGFzc3VtZSB0aGUgbnVtZXJpYyBvcmRlcmluZy5cbiAqL1xuZXhwb3J0IHZhciBEaWFnTG9nTGV2ZWw7XG4oZnVuY3Rpb24gKERpYWdMb2dMZXZlbCkge1xuICAgIC8qKiBEaWFnbm9zdGljIExvZ2dpbmcgbGV2ZWwgc2V0dGluZyB0byBkaXNhYmxlIGFsbCBsb2dnaW5nIChleGNlcHQgYW5kIGZvcmNlZCBsb2dzKSAqL1xuICAgIERpYWdMb2dMZXZlbFtEaWFnTG9nTGV2ZWxbXCJOT05FXCJdID0gMF0gPSBcIk5PTkVcIjtcbiAgICAvKiogSWRlbnRpZmllcyBhbiBlcnJvciBzY2VuYXJpbyAqL1xuICAgIERpYWdMb2dMZXZlbFtEaWFnTG9nTGV2ZWxbXCJFUlJPUlwiXSA9IDMwXSA9IFwiRVJST1JcIjtcbiAgICAvKiogSWRlbnRpZmllcyBhIHdhcm5pbmcgc2NlbmFyaW8gKi9cbiAgICBEaWFnTG9nTGV2ZWxbRGlhZ0xvZ0xldmVsW1wiV0FSTlwiXSA9IDUwXSA9IFwiV0FSTlwiO1xuICAgIC8qKiBHZW5lcmFsIGluZm9ybWF0aW9uYWwgbG9nIG1lc3NhZ2UgKi9cbiAgICBEaWFnTG9nTGV2ZWxbRGlhZ0xvZ0xldmVsW1wiSU5GT1wiXSA9IDYwXSA9IFwiSU5GT1wiO1xuICAgIC8qKiBHZW5lcmFsIGRlYnVnIGxvZyBtZXNzYWdlICovXG4gICAgRGlhZ0xvZ0xldmVsW0RpYWdMb2dMZXZlbFtcIkRFQlVHXCJdID0gNzBdID0gXCJERUJVR1wiO1xuICAgIC8qKlxuICAgICAqIERldGFpbGVkIHRyYWNlIGxldmVsIGxvZ2dpbmcgc2hvdWxkIG9ubHkgYmUgdXNlZCBmb3IgZGV2ZWxvcG1lbnQsIHNob3VsZCBvbmx5IGJlIHNldFxuICAgICAqIGluIGEgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQuXG4gICAgICovXG4gICAgRGlhZ0xvZ0xldmVsW0RpYWdMb2dMZXZlbFtcIlZFUkJPU0VcIl0gPSA4MF0gPSBcIlZFUkJPU0VcIjtcbiAgICAvKiogVXNlZCB0byBzZXQgdGhlIGxvZ2dpbmcgbGV2ZWwgdG8gaW5jbHVkZSBhbGwgbG9nZ2luZyAqL1xuICAgIERpYWdMb2dMZXZlbFtEaWFnTG9nTGV2ZWxbXCJBTExcIl0gPSA5OTk5XSA9IFwiQUxMXCI7XG59KShEaWFnTG9nTGV2ZWwgfHwgKERpYWdMb2dMZXZlbCA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9iYWdnYWdlL3R5cGVzJztcbmV4cG9ydCB7IGJhZ2dhZ2VFbnRyeU1ldGFkYXRhRnJvbVN0cmluZyB9IGZyb20gJy4vYmFnZ2FnZS91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbi9FeGNlcHRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tb24vVGltZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbi9BdHRyaWJ1dGVzJztcbmV4cG9ydCAqIGZyb20gJy4vZGlhZyc7XG5leHBvcnQgKiBmcm9tICcuL3Byb3BhZ2F0aW9uL1RleHRNYXBQcm9wYWdhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhY2UvYXR0cmlidXRlcyc7XG5leHBvcnQgKiBmcm9tICcuL3RyYWNlL2xpbmsnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFjZS9Qcm94eVRyYWNlcic7XG5leHBvcnQgKiBmcm9tICcuL3RyYWNlL1Byb3h5VHJhY2VyUHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi90cmFjZS9TYW1wbGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhY2UvU2FtcGxpbmdSZXN1bHQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFjZS9zcGFuX2NvbnRleHQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFjZS9zcGFuX2tpbmQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFjZS9zcGFuJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhY2UvU3Bhbk9wdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFjZS9zdGF0dXMnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFjZS90cmFjZV9mbGFncyc7XG5leHBvcnQgKiBmcm9tICcuL3RyYWNlL3RyYWNlX3N0YXRlJztcbmV4cG9ydCB7IGNyZWF0ZVRyYWNlU3RhdGUgfSBmcm9tICcuL3RyYWNlL2ludGVybmFsL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhY2UvdHJhY2VyX3Byb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhY2UvdHJhY2VyJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhY2UvdHJhY2VyX29wdGlvbnMnO1xuZXhwb3J0IHsgaXNTcGFuQ29udGV4dFZhbGlkLCBpc1ZhbGlkVHJhY2VJZCwgaXNWYWxpZFNwYW5JZCwgfSBmcm9tICcuL3RyYWNlL3NwYW5jb250ZXh0LXV0aWxzJztcbmV4cG9ydCB7IElOVkFMSURfU1BBTklELCBJTlZBTElEX1RSQUNFSUQsIElOVkFMSURfU1BBTl9DT05URVhULCB9IGZyb20gJy4vdHJhY2UvaW52YWxpZC1zcGFuLWNvbnN0YW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRleHQvY29udGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnRleHQvdHlwZXMnO1xuaW1wb3J0IHsgQ29udGV4dEFQSSB9IGZyb20gJy4vYXBpL2NvbnRleHQnO1xuLyoqIEVudHJ5cG9pbnQgZm9yIGNvbnRleHQgQVBJICovXG5leHBvcnQgdmFyIGNvbnRleHQgPSBDb250ZXh0QVBJLmdldEluc3RhbmNlKCk7XG5pbXBvcnQgeyBUcmFjZUFQSSB9IGZyb20gJy4vYXBpL3RyYWNlJztcbi8qKiBFbnRyeXBvaW50IGZvciB0cmFjZSBBUEkgKi9cbmV4cG9ydCB2YXIgdHJhY2UgPSBUcmFjZUFQSS5nZXRJbnN0YW5jZSgpO1xuaW1wb3J0IHsgUHJvcGFnYXRpb25BUEkgfSBmcm9tICcuL2FwaS9wcm9wYWdhdGlvbic7XG4vKiogRW50cnlwb2ludCBmb3IgcHJvcGFnYXRpb24gQVBJICovXG5leHBvcnQgdmFyIHByb3BhZ2F0aW9uID0gUHJvcGFnYXRpb25BUEkuZ2V0SW5zdGFuY2UoKTtcbmltcG9ydCB7IERpYWdBUEkgfSBmcm9tICcuL2FwaS9kaWFnJztcbi8qKlxuICogRW50cnlwb2ludCBmb3IgRGlhZyBBUEkuXG4gKiBEZWZpbmVzIERpYWdub3N0aWMgaGFuZGxlciB1c2VkIGZvciBpbnRlcm5hbCBkaWFnbm9zdGljIGxvZ2dpbmcgb3BlcmF0aW9ucy5cbiAqIFRoZSBkZWZhdWx0IHByb3ZpZGVzIGEgTm9vcCBEaWFnTG9nZ2VyIGltcGxlbWVudGF0aW9uIHdoaWNoIG1heSBiZSBjaGFuZ2VkIHZpYSB0aGVcbiAqIGRpYWcuc2V0TG9nZ2VyKGxvZ2dlcjogRGlhZ0xvZ2dlcikgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCB2YXIgZGlhZyA9IERpYWdBUEkuaW5zdGFuY2UoKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0cmFjZTogdHJhY2UsXG4gICAgY29udGV4dDogY29udGV4dCxcbiAgICBwcm9wYWdhdGlvbjogcHJvcGFnYXRpb24sXG4gICAgZGlhZzogZGlhZyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgX2dsb2JhbFRoaXMgfSBmcm9tICcuLi9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBWRVJTSU9OIH0gZnJvbSAnLi4vdmVyc2lvbic7XG5pbXBvcnQgeyBpc0NvbXBhdGlibGUgfSBmcm9tICcuL3NlbXZlcic7XG52YXIgbWFqb3IgPSBWRVJTSU9OLnNwbGl0KCcuJylbMF07XG52YXIgR0xPQkFMX09QRU5URUxFTUVUUllfQVBJX0tFWSA9IFN5bWJvbC5mb3IoXCJvcGVudGVsZW1ldHJ5LmpzLmFwaS5cIiArIG1ham9yKTtcbnZhciBfZ2xvYmFsID0gX2dsb2JhbFRoaXM7XG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJHbG9iYWwodHlwZSwgaW5zdGFuY2UsIGRpYWcsIGFsbG93T3ZlcnJpZGUpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKGFsbG93T3ZlcnJpZGUgPT09IHZvaWQgMCkgeyBhbGxvd092ZXJyaWRlID0gZmFsc2U7IH1cbiAgICB2YXIgYXBpID0gKF9nbG9iYWxbR0xPQkFMX09QRU5URUxFTUVUUllfQVBJX0tFWV0gPSAoX2EgPSBfZ2xvYmFsW0dMT0JBTF9PUEVOVEVMRU1FVFJZX0FQSV9LRVldKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB7XG4gICAgICAgIHZlcnNpb246IFZFUlNJT04sXG4gICAgfSk7XG4gICAgaWYgKCFhbGxvd092ZXJyaWRlICYmIGFwaVt0eXBlXSkge1xuICAgICAgICAvLyBhbHJlYWR5IHJlZ2lzdGVyZWQgYW4gQVBJIG9mIHRoaXMgdHlwZVxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFwiQG9wZW50ZWxlbWV0cnkvYXBpOiBBdHRlbXB0ZWQgZHVwbGljYXRlIHJlZ2lzdHJhdGlvbiBvZiBBUEk6IFwiICsgdHlwZSk7XG4gICAgICAgIGRpYWcuZXJyb3IoZXJyLnN0YWNrIHx8IGVyci5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYXBpLnZlcnNpb24gIT09IFZFUlNJT04pIHtcbiAgICAgICAgLy8gQWxsIHJlZ2lzdGVyZWQgQVBJcyBtdXN0IGJlIG9mIHRoZSBzYW1lIHZlcnNpb24gZXhhY3RseVxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdAb3BlbnRlbGVtZXRyeS9hcGk6IEFsbCBBUEkgcmVnaXN0cmF0aW9uIHZlcnNpb25zIG11c3QgbWF0Y2gnKTtcbiAgICAgICAgZGlhZy5lcnJvcihlcnIuc3RhY2sgfHwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGFwaVt0eXBlXSA9IGluc3RhbmNlO1xuICAgIGRpYWcuZGVidWcoXCJAb3BlbnRlbGVtZXRyeS9hcGk6IFJlZ2lzdGVyZWQgYSBnbG9iYWwgZm9yIFwiICsgdHlwZSArIFwiIHZcIiArIFZFUlNJT04gKyBcIi5cIik7XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYmFsKHR5cGUpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHZhciBnbG9iYWxWZXJzaW9uID0gKF9hID0gX2dsb2JhbFtHTE9CQUxfT1BFTlRFTEVNRVRSWV9BUElfS0VZXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZlcnNpb247XG4gICAgaWYgKCFnbG9iYWxWZXJzaW9uIHx8ICFpc0NvbXBhdGlibGUoZ2xvYmFsVmVyc2lvbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gKF9iID0gX2dsb2JhbFtHTE9CQUxfT1BFTlRFTEVNRVRSWV9BUElfS0VZXSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iW3R5cGVdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVucmVnaXN0ZXJHbG9iYWwodHlwZSwgZGlhZykge1xuICAgIGRpYWcuZGVidWcoXCJAb3BlbnRlbGVtZXRyeS9hcGk6IFVucmVnaXN0ZXJpbmcgYSBnbG9iYWwgZm9yIFwiICsgdHlwZSArIFwiIHZcIiArIFZFUlNJT04gKyBcIi5cIik7XG4gICAgdmFyIGFwaSA9IF9nbG9iYWxbR0xPQkFMX09QRU5URUxFTUVUUllfQVBJX0tFWV07XG4gICAgaWYgKGFwaSkge1xuICAgICAgICBkZWxldGUgYXBpW3R5cGVdO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdsb2JhbC11dGlscy5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgVkVSU0lPTiB9IGZyb20gJy4uL3ZlcnNpb24nO1xudmFyIHJlID0gL14oXFxkKylcXC4oXFxkKylcXC4oXFxkKykoLSguKykpPyQvO1xuLyoqXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiB0byB0ZXN0IGFuIEFQSSB2ZXJzaW9uIHRvIHNlZSBpZiBpdCBpcyBjb21wYXRpYmxlIHdpdGggdGhlIHByb3ZpZGVkIG93blZlcnNpb24uXG4gKlxuICogVGhlIHJldHVybmVkIGZ1bmN0aW9uIGhhcyB0aGUgZm9sbG93aW5nIHNlbWFudGljczpcbiAqIC0gRXhhY3QgbWF0Y2ggaXMgYWx3YXlzIGNvbXBhdGlibGVcbiAqIC0gTWFqb3IgdmVyc2lvbnMgbXVzdCBtYXRjaCBleGFjdGx5XG4gKiAgICAtIDEueCBwYWNrYWdlIGNhbm5vdCB1c2UgZ2xvYmFsIDIueCBwYWNrYWdlXG4gKiAgICAtIDIueCBwYWNrYWdlIGNhbm5vdCB1c2UgZ2xvYmFsIDEueCBwYWNrYWdlXG4gKiAtIFRoZSBtaW5vciB2ZXJzaW9uIG9mIHRoZSBBUEkgbW9kdWxlIHJlcXVlc3RpbmcgYWNjZXNzIHRvIHRoZSBnbG9iYWwgQVBJIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHRoZSBtaW5vciB2ZXJzaW9uIG9mIHRoaXMgQVBJXG4gKiAgICAtIDEuMyBwYWNrYWdlIG1heSB1c2UgMS40IGdsb2JhbCBiZWNhdXNlIHRoZSBsYXRlciBnbG9iYWwgY29udGFpbnMgYWxsIGZ1bmN0aW9ucyAxLjMgZXhwZWN0c1xuICogICAgLSAxLjQgcGFja2FnZSBtYXkgTk9UIHVzZSAxLjMgZ2xvYmFsIGJlY2F1c2UgaXQgbWF5IHRyeSB0byBjYWxsIGZ1bmN0aW9ucyB3aGljaCBkb24ndCBleGlzdCBvbiAxLjNcbiAqIC0gSWYgdGhlIG1ham9yIHZlcnNpb24gaXMgMCwgdGhlIG1pbm9yIHZlcnNpb24gaXMgdHJlYXRlZCBhcyB0aGUgbWFqb3IgYW5kIHRoZSBwYXRjaCBpcyB0cmVhdGVkIGFzIHRoZSBtaW5vclxuICogLSBQYXRjaCBhbmQgYnVpbGQgdGFnIGRpZmZlcmVuY2VzIGFyZSBub3QgY29uc2lkZXJlZCBhdCB0aGlzIHRpbWVcbiAqXG4gKiBAcGFyYW0gb3duVmVyc2lvbiB2ZXJzaW9uIHdoaWNoIHNob3VsZCBiZSBjaGVja2VkIGFnYWluc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9tYWtlQ29tcGF0aWJpbGl0eUNoZWNrKG93blZlcnNpb24pIHtcbiAgICB2YXIgYWNjZXB0ZWRWZXJzaW9ucyA9IG5ldyBTZXQoW293blZlcnNpb25dKTtcbiAgICB2YXIgcmVqZWN0ZWRWZXJzaW9ucyA9IG5ldyBTZXQoKTtcbiAgICB2YXIgbXlWZXJzaW9uTWF0Y2ggPSBvd25WZXJzaW9uLm1hdGNoKHJlKTtcbiAgICBpZiAoIW15VmVyc2lvbk1hdGNoKSB7XG4gICAgICAgIC8vIHdlIGNhbm5vdCBndWFyYW50ZWUgY29tcGF0aWJpbGl0eSBzbyB3ZSBhbHdheXMgcmV0dXJuIG5vb3BcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9O1xuICAgIH1cbiAgICB2YXIgb3duVmVyc2lvblBhcnNlZCA9IHtcbiAgICAgICAgbWFqb3I6ICtteVZlcnNpb25NYXRjaFsxXSxcbiAgICAgICAgbWlub3I6ICtteVZlcnNpb25NYXRjaFsyXSxcbiAgICAgICAgcGF0Y2g6ICtteVZlcnNpb25NYXRjaFszXSxcbiAgICAgICAgcHJlcmVsZWFzZTogbXlWZXJzaW9uTWF0Y2hbNF0sXG4gICAgfTtcbiAgICAvLyBpZiBvd25WZXJzaW9uIGhhcyBhIHByZXJlbGVhc2UgdGFnLCB2ZXJzaW9ucyBtdXN0IG1hdGNoIGV4YWN0bHlcbiAgICBpZiAob3duVmVyc2lvblBhcnNlZC5wcmVyZWxlYXNlICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzRXhhY3RtYXRjaChnbG9iYWxWZXJzaW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsVmVyc2lvbiA9PT0gb3duVmVyc2lvbjtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3JlamVjdCh2KSB7XG4gICAgICAgIHJlamVjdGVkVmVyc2lvbnMuYWRkKHYpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIF9hY2NlcHQodikge1xuICAgICAgICBhY2NlcHRlZFZlcnNpb25zLmFkZCh2KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiBpc0NvbXBhdGlibGUoZ2xvYmFsVmVyc2lvbikge1xuICAgICAgICBpZiAoYWNjZXB0ZWRWZXJzaW9ucy5oYXMoZ2xvYmFsVmVyc2lvbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWplY3RlZFZlcnNpb25zLmhhcyhnbG9iYWxWZXJzaW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBnbG9iYWxWZXJzaW9uTWF0Y2ggPSBnbG9iYWxWZXJzaW9uLm1hdGNoKHJlKTtcbiAgICAgICAgaWYgKCFnbG9iYWxWZXJzaW9uTWF0Y2gpIHtcbiAgICAgICAgICAgIC8vIGNhbm5vdCBwYXJzZSBvdGhlciB2ZXJzaW9uXG4gICAgICAgICAgICAvLyB3ZSBjYW5ub3QgZ3VhcmFudGVlIGNvbXBhdGliaWxpdHkgc28gd2UgYWx3YXlzIG5vb3BcbiAgICAgICAgICAgIHJldHVybiBfcmVqZWN0KGdsb2JhbFZlcnNpb24pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBnbG9iYWxWZXJzaW9uUGFyc2VkID0ge1xuICAgICAgICAgICAgbWFqb3I6ICtnbG9iYWxWZXJzaW9uTWF0Y2hbMV0sXG4gICAgICAgICAgICBtaW5vcjogK2dsb2JhbFZlcnNpb25NYXRjaFsyXSxcbiAgICAgICAgICAgIHBhdGNoOiArZ2xvYmFsVmVyc2lvbk1hdGNoWzNdLFxuICAgICAgICAgICAgcHJlcmVsZWFzZTogZ2xvYmFsVmVyc2lvbk1hdGNoWzRdLFxuICAgICAgICB9O1xuICAgICAgICAvLyBpZiBnbG9iYWxWZXJzaW9uIGhhcyBhIHByZXJlbGVhc2UgdGFnLCB2ZXJzaW9ucyBtdXN0IG1hdGNoIGV4YWN0bHlcbiAgICAgICAgaWYgKGdsb2JhbFZlcnNpb25QYXJzZWQucHJlcmVsZWFzZSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlamVjdChnbG9iYWxWZXJzaW9uKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtYWpvciB2ZXJzaW9ucyBtdXN0IG1hdGNoXG4gICAgICAgIGlmIChvd25WZXJzaW9uUGFyc2VkLm1ham9yICE9PSBnbG9iYWxWZXJzaW9uUGFyc2VkLm1ham9yKSB7XG4gICAgICAgICAgICByZXR1cm4gX3JlamVjdChnbG9iYWxWZXJzaW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3duVmVyc2lvblBhcnNlZC5tYWpvciA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKG93blZlcnNpb25QYXJzZWQubWlub3IgPT09IGdsb2JhbFZlcnNpb25QYXJzZWQubWlub3IgJiZcbiAgICAgICAgICAgICAgICBvd25WZXJzaW9uUGFyc2VkLnBhdGNoIDw9IGdsb2JhbFZlcnNpb25QYXJzZWQucGF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2FjY2VwdChnbG9iYWxWZXJzaW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfcmVqZWN0KGdsb2JhbFZlcnNpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvd25WZXJzaW9uUGFyc2VkLm1pbm9yIDw9IGdsb2JhbFZlcnNpb25QYXJzZWQubWlub3IpIHtcbiAgICAgICAgICAgIHJldHVybiBfYWNjZXB0KGdsb2JhbFZlcnNpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVqZWN0KGdsb2JhbFZlcnNpb24pO1xuICAgIH07XG59XG4vKipcbiAqIFRlc3QgYW4gQVBJIHZlcnNpb24gdG8gc2VlIGlmIGl0IGlzIGNvbXBhdGlibGUgd2l0aCB0aGlzIEFQSS5cbiAqXG4gKiAtIEV4YWN0IG1hdGNoIGlzIGFsd2F5cyBjb21wYXRpYmxlXG4gKiAtIE1ham9yIHZlcnNpb25zIG11c3QgbWF0Y2ggZXhhY3RseVxuICogICAgLSAxLnggcGFja2FnZSBjYW5ub3QgdXNlIGdsb2JhbCAyLnggcGFja2FnZVxuICogICAgLSAyLnggcGFja2FnZSBjYW5ub3QgdXNlIGdsb2JhbCAxLnggcGFja2FnZVxuICogLSBUaGUgbWlub3IgdmVyc2lvbiBvZiB0aGUgQVBJIG1vZHVsZSByZXF1ZXN0aW5nIGFjY2VzcyB0byB0aGUgZ2xvYmFsIEFQSSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgbWlub3IgdmVyc2lvbiBvZiB0aGlzIEFQSVxuICogICAgLSAxLjMgcGFja2FnZSBtYXkgdXNlIDEuNCBnbG9iYWwgYmVjYXVzZSB0aGUgbGF0ZXIgZ2xvYmFsIGNvbnRhaW5zIGFsbCBmdW5jdGlvbnMgMS4zIGV4cGVjdHNcbiAqICAgIC0gMS40IHBhY2thZ2UgbWF5IE5PVCB1c2UgMS4zIGdsb2JhbCBiZWNhdXNlIGl0IG1heSB0cnkgdG8gY2FsbCBmdW5jdGlvbnMgd2hpY2ggZG9uJ3QgZXhpc3Qgb24gMS4zXG4gKiAtIElmIHRoZSBtYWpvciB2ZXJzaW9uIGlzIDAsIHRoZSBtaW5vciB2ZXJzaW9uIGlzIHRyZWF0ZWQgYXMgdGhlIG1ham9yIGFuZCB0aGUgcGF0Y2ggaXMgdHJlYXRlZCBhcyB0aGUgbWlub3JcbiAqIC0gUGF0Y2ggYW5kIGJ1aWxkIHRhZyBkaWZmZXJlbmNlcyBhcmUgbm90IGNvbnNpZGVyZWQgYXQgdGhpcyB0aW1lXG4gKlxuICogQHBhcmFtIHZlcnNpb24gdmVyc2lvbiBvZiB0aGUgQVBJIHJlcXVlc3RpbmcgYW4gaW5zdGFuY2Ugb2YgdGhlIGdsb2JhbCBBUElcbiAqL1xuZXhwb3J0IHZhciBpc0NvbXBhdGlibGUgPSBfbWFrZUNvbXBhdGliaWxpdHlDaGVjayhWRVJTSU9OKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNlbXZlci5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLy8gVXBkYXRlcyB0byB0aGlzIGZpbGUgc2hvdWxkIGFsc28gYmUgcmVwbGljYXRlZCB0byBAb3BlbnRlbGVtZXRyeS9hcGktbWV0cmljcyBhbmRcbi8vIEBvcGVudGVsZW1ldHJ5L2NvcmUgdG9vLlxuLyoqXG4gKiAtIGdsb2JhbFRoaXMgKE5ldyBzdGFuZGFyZClcbiAqIC0gc2VsZiAoV2lsbCByZXR1cm4gdGhlIGN1cnJlbnQgd2luZG93IGluc3RhbmNlIGZvciBzdXBwb3J0ZWQgYnJvd3NlcnMpXG4gKiAtIHdpbmRvdyAoZmFsbGJhY2sgZm9yIG9sZGVyIGJyb3dzZXIgaW1wbGVtZW50YXRpb25zKVxuICogLSBnbG9iYWwgKE5vZGVKUyBpbXBsZW1lbnRhdGlvbilcbiAqIC0gPG9iamVjdD4gKFdoZW4gYWxsIGVsc2UgZmFpbHMpXG4gKi9cbi8qKiBvbmx5IGdsb2JhbHMgdGhhdCBjb21tb24gdG8gbm9kZSBhbmQgYnJvd3NlcnMgYXJlIGFsbG93ZWQgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBub2RlL25vLXVuc3VwcG9ydGVkLWZlYXR1cmVzL2VzLWJ1aWx0aW5zLCBuby11bmRlZlxuZXhwb3J0IHZhciBfZ2xvYmFsVGhpcyA9IHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JyA/IGdsb2JhbFRoaXMgOlxuICAgIHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyA/IHNlbGYgOlxuICAgICAgICB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyA/IHdpbmRvdyA6XG4gICAgICAgICAgICB0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyA/IGdsb2JhbCA6XG4gICAgICAgICAgICAgICAge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nbG9iYWxUaGlzLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgKiBmcm9tICcuL2dsb2JhbFRoaXMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogTm8tb3AgaW1wbGVtZW50YXRpb25zIG9mIHtAbGluayBUZXh0TWFwUHJvcGFnYXRvcn0uXG4gKi9cbnZhciBOb29wVGV4dE1hcFByb3BhZ2F0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9vcFRleHRNYXBQcm9wYWdhdG9yKCkge1xuICAgIH1cbiAgICAvKiogTm9vcCBpbmplY3QgZnVuY3Rpb24gZG9lcyBub3RoaW5nICovXG4gICAgTm9vcFRleHRNYXBQcm9wYWdhdG9yLnByb3RvdHlwZS5pbmplY3QgPSBmdW5jdGlvbiAoX2NvbnRleHQsIF9jYXJyaWVyKSB7IH07XG4gICAgLyoqIE5vb3AgZXh0cmFjdCBmdW5jdGlvbiBkb2VzIG5vdGhpbmcgYW5kIHJldHVybnMgdGhlIGlucHV0IGNvbnRleHQgKi9cbiAgICBOb29wVGV4dE1hcFByb3BhZ2F0b3IucHJvdG90eXBlLmV4dHJhY3QgPSBmdW5jdGlvbiAoY29udGV4dCwgX2NhcnJpZXIpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfTtcbiAgICBOb29wVGV4dE1hcFByb3BhZ2F0b3IucHJvdG90eXBlLmZpZWxkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH07XG4gICAgcmV0dXJuIE5vb3BUZXh0TWFwUHJvcGFnYXRvcjtcbn0oKSk7XG5leHBvcnQgeyBOb29wVGV4dE1hcFByb3BhZ2F0b3IgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5vb3BUZXh0TWFwUHJvcGFnYXRvci5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IHZhciBkZWZhdWx0VGV4dE1hcEdldHRlciA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIChjYXJyaWVyLCBrZXkpIHtcbiAgICAgICAgaWYgKGNhcnJpZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FycmllcltrZXldO1xuICAgIH0sXG4gICAga2V5czogZnVuY3Rpb24gKGNhcnJpZXIpIHtcbiAgICAgICAgaWYgKGNhcnJpZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjYXJyaWVyKTtcbiAgICB9LFxufTtcbmV4cG9ydCB2YXIgZGVmYXVsdFRleHRNYXBTZXR0ZXIgPSB7XG4gICAgc2V0OiBmdW5jdGlvbiAoY2Fycmllciwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoY2FycmllciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FycmllcltrZXldID0gdmFsdWU7XG4gICAgfSxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UZXh0TWFwUHJvcGFnYXRvci5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgSU5WQUxJRF9TUEFOX0NPTlRFWFQgfSBmcm9tICcuL2ludmFsaWQtc3Bhbi1jb25zdGFudHMnO1xuLyoqXG4gKiBUaGUgTm9uUmVjb3JkaW5nU3BhbiBpcyB0aGUgZGVmYXVsdCB7QGxpbmsgU3Bhbn0gdGhhdCBpcyB1c2VkIHdoZW4gbm8gU3BhblxuICogaW1wbGVtZW50YXRpb24gaXMgYXZhaWxhYmxlLiBBbGwgb3BlcmF0aW9ucyBhcmUgbm8tb3AgaW5jbHVkaW5nIGNvbnRleHRcbiAqIHByb3BhZ2F0aW9uLlxuICovXG52YXIgTm9uUmVjb3JkaW5nU3BhbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb25SZWNvcmRpbmdTcGFuKF9zcGFuQ29udGV4dCkge1xuICAgICAgICBpZiAoX3NwYW5Db250ZXh0ID09PSB2b2lkIDApIHsgX3NwYW5Db250ZXh0ID0gSU5WQUxJRF9TUEFOX0NPTlRFWFQ7IH1cbiAgICAgICAgdGhpcy5fc3BhbkNvbnRleHQgPSBfc3BhbkNvbnRleHQ7XG4gICAgfVxuICAgIC8vIFJldHVybnMgYSBTcGFuQ29udGV4dC5cbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS5zcGFuQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwYW5Db250ZXh0O1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS5zZXRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoX2tleSwgX3ZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKF9hdHRyaWJ1dGVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uIChfbmFtZSwgX2F0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvLyBCeSBkZWZhdWx0IGRvZXMgbm90aGluZ1xuICAgIE5vblJlY29yZGluZ1NwYW4ucHJvdG90eXBlLnNldFN0YXR1cyA9IGZ1bmN0aW9uIChfc3RhdHVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS51cGRhdGVOYW1lID0gZnVuY3Rpb24gKF9uYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoX2VuZFRpbWUpIHsgfTtcbiAgICAvLyBpc1JlY29yZGluZyBhbHdheXMgcmV0dXJucyBmYWxzZSBmb3IgTm9uUmVjb3JkaW5nU3Bhbi5cbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS5pc1JlY29yZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgLy8gQnkgZGVmYXVsdCBkb2VzIG5vdGhpbmdcbiAgICBOb25SZWNvcmRpbmdTcGFuLnByb3RvdHlwZS5yZWNvcmRFeGNlcHRpb24gPSBmdW5jdGlvbiAoX2V4Y2VwdGlvbiwgX3RpbWUpIHsgfTtcbiAgICByZXR1cm4gTm9uUmVjb3JkaW5nU3Bhbjtcbn0oKSk7XG5leHBvcnQgeyBOb25SZWNvcmRpbmdTcGFuIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob25SZWNvcmRpbmdTcGFuLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBDb250ZXh0QVBJIH0gZnJvbSAnLi4vYXBpL2NvbnRleHQnO1xuaW1wb3J0IHsgZ2V0U3BhbkNvbnRleHQsIHNldFNwYW4gfSBmcm9tICcuLi90cmFjZS9jb250ZXh0LXV0aWxzJztcbmltcG9ydCB7IE5vblJlY29yZGluZ1NwYW4gfSBmcm9tICcuL05vblJlY29yZGluZ1NwYW4nO1xuaW1wb3J0IHsgaXNTcGFuQ29udGV4dFZhbGlkIH0gZnJvbSAnLi9zcGFuY29udGV4dC11dGlscyc7XG52YXIgY29udGV4dCA9IENvbnRleHRBUEkuZ2V0SW5zdGFuY2UoKTtcbi8qKlxuICogTm8tb3AgaW1wbGVtZW50YXRpb25zIG9mIHtAbGluayBUcmFjZXJ9LlxuICovXG52YXIgTm9vcFRyYWNlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb29wVHJhY2VyKCkge1xuICAgIH1cbiAgICAvLyBzdGFydFNwYW4gc3RhcnRzIGEgbm9vcCBzcGFuLlxuICAgIE5vb3BUcmFjZXIucHJvdG90eXBlLnN0YXJ0U3BhbiA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciByb290ID0gQm9vbGVhbihvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm9vdCk7XG4gICAgICAgIGlmIChyb290KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vblJlY29yZGluZ1NwYW4oKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFyZW50RnJvbUNvbnRleHQgPSBjb250ZXh0ICYmIGdldFNwYW5Db250ZXh0KGNvbnRleHQpO1xuICAgICAgICBpZiAoaXNTcGFuQ29udGV4dChwYXJlbnRGcm9tQ29udGV4dCkgJiZcbiAgICAgICAgICAgIGlzU3BhbkNvbnRleHRWYWxpZChwYXJlbnRGcm9tQ29udGV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTm9uUmVjb3JkaW5nU3BhbihwYXJlbnRGcm9tQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vblJlY29yZGluZ1NwYW4oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTm9vcFRyYWNlci5wcm90b3R5cGUuc3RhcnRBY3RpdmVTcGFuID0gZnVuY3Rpb24gKG5hbWUsIGFyZzIsIGFyZzMsIGFyZzQpIHtcbiAgICAgICAgdmFyIG9wdHM7XG4gICAgICAgIHZhciBjdHg7XG4gICAgICAgIHZhciBmbjtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgZm4gPSBhcmcyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIG9wdHMgPSBhcmcyO1xuICAgICAgICAgICAgZm4gPSBhcmczO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3B0cyA9IGFyZzI7XG4gICAgICAgICAgICBjdHggPSBhcmczO1xuICAgICAgICAgICAgZm4gPSBhcmc0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXJlbnRDb250ZXh0ID0gY3R4ICE9PSBudWxsICYmIGN0eCAhPT0gdm9pZCAwID8gY3R4IDogY29udGV4dC5hY3RpdmUoKTtcbiAgICAgICAgdmFyIHNwYW4gPSB0aGlzLnN0YXJ0U3BhbihuYW1lLCBvcHRzLCBwYXJlbnRDb250ZXh0KTtcbiAgICAgICAgdmFyIGNvbnRleHRXaXRoU3BhblNldCA9IHNldFNwYW4ocGFyZW50Q29udGV4dCwgc3Bhbik7XG4gICAgICAgIHJldHVybiBjb250ZXh0LndpdGgoY29udGV4dFdpdGhTcGFuU2V0LCBmbiwgdW5kZWZpbmVkLCBzcGFuKTtcbiAgICB9O1xuICAgIHJldHVybiBOb29wVHJhY2VyO1xufSgpKTtcbmV4cG9ydCB7IE5vb3BUcmFjZXIgfTtcbmZ1bmN0aW9uIGlzU3BhbkNvbnRleHQoc3BhbkNvbnRleHQpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBzcGFuQ29udGV4dCA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgdHlwZW9mIHNwYW5Db250ZXh0WydzcGFuSWQnXSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgdHlwZW9mIHNwYW5Db250ZXh0Wyd0cmFjZUlkJ10gPT09ICdzdHJpbmcnICYmXG4gICAgICAgIHR5cGVvZiBzcGFuQ29udGV4dFsndHJhY2VGbGFncyddID09PSAnbnVtYmVyJyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob29wVHJhY2VyLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBOb29wVHJhY2VyIH0gZnJvbSAnLi9Ob29wVHJhY2VyJztcbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgdGhlIHtAbGluayBUcmFjZXJQcm92aWRlcn0gd2hpY2ggcmV0dXJucyBhbiBpbXBvdGVudFxuICogVHJhY2VyIGZvciBhbGwgY2FsbHMgdG8gYGdldFRyYWNlcmAuXG4gKlxuICogQWxsIG9wZXJhdGlvbnMgYXJlIG5vLW9wLlxuICovXG52YXIgTm9vcFRyYWNlclByb3ZpZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vb3BUcmFjZXJQcm92aWRlcigpIHtcbiAgICB9XG4gICAgTm9vcFRyYWNlclByb3ZpZGVyLnByb3RvdHlwZS5nZXRUcmFjZXIgPSBmdW5jdGlvbiAoX25hbWUsIF92ZXJzaW9uLCBfb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IE5vb3BUcmFjZXIoKTtcbiAgICB9O1xuICAgIHJldHVybiBOb29wVHJhY2VyUHJvdmlkZXI7XG59KCkpO1xuZXhwb3J0IHsgTm9vcFRyYWNlclByb3ZpZGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob29wVHJhY2VyUHJvdmlkZXIuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IE5vb3BUcmFjZXIgfSBmcm9tICcuL05vb3BUcmFjZXInO1xudmFyIE5PT1BfVFJBQ0VSID0gbmV3IE5vb3BUcmFjZXIoKTtcbi8qKlxuICogUHJveHkgdHJhY2VyIHByb3ZpZGVkIGJ5IHRoZSBwcm94eSB0cmFjZXIgcHJvdmlkZXJcbiAqL1xudmFyIFByb3h5VHJhY2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFByb3h5VHJhY2VyKF9wcm92aWRlciwgbmFtZSwgdmVyc2lvbiwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLl9wcm92aWRlciA9IF9wcm92aWRlcjtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgUHJveHlUcmFjZXIucHJvdG90eXBlLnN0YXJ0U3BhbiA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zLCBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRUcmFjZXIoKS5zdGFydFNwYW4obmFtZSwgb3B0aW9ucywgY29udGV4dCk7XG4gICAgfTtcbiAgICBQcm94eVRyYWNlci5wcm90b3R5cGUuc3RhcnRBY3RpdmVTcGFuID0gZnVuY3Rpb24gKF9uYW1lLCBfb3B0aW9ucywgX2NvbnRleHQsIF9mbikge1xuICAgICAgICB2YXIgdHJhY2VyID0gdGhpcy5fZ2V0VHJhY2VyKCk7XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmFwcGx5KHRyYWNlci5zdGFydEFjdGl2ZVNwYW4sIHRyYWNlciwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRyeSB0byBnZXQgYSB0cmFjZXIgZnJvbSB0aGUgcHJveHkgdHJhY2VyIHByb3ZpZGVyLlxuICAgICAqIElmIHRoZSBwcm94eSB0cmFjZXIgcHJvdmlkZXIgaGFzIG5vIGRlbGVnYXRlLCByZXR1cm4gYSBub29wIHRyYWNlci5cbiAgICAgKi9cbiAgICBQcm94eVRyYWNlci5wcm90b3R5cGUuX2dldFRyYWNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RlbGVnYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRyYWNlciA9IHRoaXMuX3Byb3ZpZGVyLmdldERlbGVnYXRlVHJhY2VyKHRoaXMubmFtZSwgdGhpcy52ZXJzaW9uLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICBpZiAoIXRyYWNlcikge1xuICAgICAgICAgICAgcmV0dXJuIE5PT1BfVFJBQ0VSO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RlbGVnYXRlID0gdHJhY2VyO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVsZWdhdGU7XG4gICAgfTtcbiAgICByZXR1cm4gUHJveHlUcmFjZXI7XG59KCkpO1xuZXhwb3J0IHsgUHJveHlUcmFjZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVByb3h5VHJhY2VyLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBQcm94eVRyYWNlciB9IGZyb20gJy4vUHJveHlUcmFjZXInO1xuaW1wb3J0IHsgTm9vcFRyYWNlclByb3ZpZGVyIH0gZnJvbSAnLi9Ob29wVHJhY2VyUHJvdmlkZXInO1xudmFyIE5PT1BfVFJBQ0VSX1BST1ZJREVSID0gbmV3IE5vb3BUcmFjZXJQcm92aWRlcigpO1xuLyoqXG4gKiBUcmFjZXIgcHJvdmlkZXIgd2hpY2ggcHJvdmlkZXMge0BsaW5rIFByb3h5VHJhY2VyfXMuXG4gKlxuICogQmVmb3JlIGEgZGVsZWdhdGUgaXMgc2V0LCB0cmFjZXJzIHByb3ZpZGVkIGFyZSBOb09wLlxuICogICBXaGVuIGEgZGVsZWdhdGUgaXMgc2V0LCB0cmFjZXMgYXJlIHByb3ZpZGVkIGZyb20gdGhlIGRlbGVnYXRlLlxuICogICBXaGVuIGEgZGVsZWdhdGUgaXMgc2V0IGFmdGVyIHRyYWNlcnMgaGF2ZSBhbHJlYWR5IGJlZW4gcHJvdmlkZWQsXG4gKiAgIGFsbCB0cmFjZXJzIGFscmVhZHkgcHJvdmlkZWQgd2lsbCB1c2UgdGhlIHByb3ZpZGVkIGRlbGVnYXRlIGltcGxlbWVudGF0aW9uLlxuICovXG52YXIgUHJveHlUcmFjZXJQcm92aWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQcm94eVRyYWNlclByb3ZpZGVyKCkge1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSB7QGxpbmsgUHJveHlUcmFjZXJ9XG4gICAgICovXG4gICAgUHJveHlUcmFjZXJQcm92aWRlci5wcm90b3R5cGUuZ2V0VHJhY2VyID0gZnVuY3Rpb24gKG5hbWUsIHZlcnNpb24sIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKChfYSA9IHRoaXMuZ2V0RGVsZWdhdGVUcmFjZXIobmFtZSwgdmVyc2lvbiwgb3B0aW9ucykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG5ldyBQcm94eVRyYWNlcih0aGlzLCBuYW1lLCB2ZXJzaW9uLCBvcHRpb25zKSk7XG4gICAgfTtcbiAgICBQcm94eVRyYWNlclByb3ZpZGVyLnByb3RvdHlwZS5nZXREZWxlZ2F0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5fZGVsZWdhdGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IE5PT1BfVFJBQ0VSX1BST1ZJREVSO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBkZWxlZ2F0ZSB0cmFjZXIgcHJvdmlkZXJcbiAgICAgKi9cbiAgICBQcm94eVRyYWNlclByb3ZpZGVyLnByb3RvdHlwZS5zZXREZWxlZ2F0ZSA9IGZ1bmN0aW9uIChkZWxlZ2F0ZSkge1xuICAgICAgICB0aGlzLl9kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgIH07XG4gICAgUHJveHlUcmFjZXJQcm92aWRlci5wcm90b3R5cGUuZ2V0RGVsZWdhdGVUcmFjZXIgPSBmdW5jdGlvbiAobmFtZSwgdmVyc2lvbiwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLl9kZWxlZ2F0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldFRyYWNlcihuYW1lLCB2ZXJzaW9uLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIHJldHVybiBQcm94eVRyYWNlclByb3ZpZGVyO1xufSgpKTtcbmV4cG9ydCB7IFByb3h5VHJhY2VyUHJvdmlkZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVByb3h5VHJhY2VyUHJvdmlkZXIuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNhbXBsZXIuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQSBzYW1wbGluZyBkZWNpc2lvbiB0aGF0IGRldGVybWluZXMgaG93IGEge0BsaW5rIFNwYW59IHdpbGwgYmUgcmVjb3JkZWRcbiAqIGFuZCBjb2xsZWN0ZWQuXG4gKi9cbmV4cG9ydCB2YXIgU2FtcGxpbmdEZWNpc2lvbjtcbihmdW5jdGlvbiAoU2FtcGxpbmdEZWNpc2lvbikge1xuICAgIC8qKlxuICAgICAqIGBTcGFuLmlzUmVjb3JkaW5nKCkgPT09IGZhbHNlYCwgc3BhbiB3aWxsIG5vdCBiZSByZWNvcmRlZCBhbmQgYWxsIGV2ZW50c1xuICAgICAqIGFuZCBhdHRyaWJ1dGVzIHdpbGwgYmUgZHJvcHBlZC5cbiAgICAgKi9cbiAgICBTYW1wbGluZ0RlY2lzaW9uW1NhbXBsaW5nRGVjaXNpb25bXCJOT1RfUkVDT1JEXCJdID0gMF0gPSBcIk5PVF9SRUNPUkRcIjtcbiAgICAvKipcbiAgICAgKiBgU3Bhbi5pc1JlY29yZGluZygpID09PSB0cnVlYCwgYnV0IGBTYW1wbGVkYCBmbGFnIGluIHtAbGluayBUcmFjZUZsYWdzfVxuICAgICAqIE1VU1QgTk9UIGJlIHNldC5cbiAgICAgKi9cbiAgICBTYW1wbGluZ0RlY2lzaW9uW1NhbXBsaW5nRGVjaXNpb25bXCJSRUNPUkRcIl0gPSAxXSA9IFwiUkVDT1JEXCI7XG4gICAgLyoqXG4gICAgICogYFNwYW4uaXNSZWNvcmRpbmcoKSA9PT0gdHJ1ZWAgQU5EIGBTYW1wbGVkYCBmbGFnIGluIHtAbGluayBUcmFjZUZsYWdzfVxuICAgICAqIE1VU1QgYmUgc2V0LlxuICAgICAqL1xuICAgIFNhbXBsaW5nRGVjaXNpb25bU2FtcGxpbmdEZWNpc2lvbltcIlJFQ09SRF9BTkRfU0FNUExFRFwiXSA9IDJdID0gXCJSRUNPUkRfQU5EX1NBTVBMRURcIjtcbn0pKFNhbXBsaW5nRGVjaXNpb24gfHwgKFNhbXBsaW5nRGVjaXNpb24gPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2FtcGxpbmdSZXN1bHQuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNwYW5PcHRpb25zLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdHRyaWJ1dGVzLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0S2V5IH0gZnJvbSAnLi4vY29udGV4dC9jb250ZXh0JztcbmltcG9ydCB7IE5vblJlY29yZGluZ1NwYW4gfSBmcm9tICcuL05vblJlY29yZGluZ1NwYW4nO1xuLyoqXG4gKiBzcGFuIGtleVxuICovXG52YXIgU1BBTl9LRVkgPSBjcmVhdGVDb250ZXh0S2V5KCdPcGVuVGVsZW1ldHJ5IENvbnRleHQgS2V5IFNQQU4nKTtcbi8qKlxuICogUmV0dXJuIHRoZSBzcGFuIGlmIG9uZSBleGlzdHNcbiAqXG4gKiBAcGFyYW0gY29udGV4dCBjb250ZXh0IHRvIGdldCBzcGFuIGZyb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNwYW4oY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0LmdldFZhbHVlKFNQQU5fS0VZKSB8fCB1bmRlZmluZWQ7XG59XG4vKipcbiAqIFNldCB0aGUgc3BhbiBvbiBhIGNvbnRleHRcbiAqXG4gKiBAcGFyYW0gY29udGV4dCBjb250ZXh0IHRvIHVzZSBhcyBwYXJlbnRcbiAqIEBwYXJhbSBzcGFuIHNwYW4gdG8gc2V0IGFjdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0U3Bhbihjb250ZXh0LCBzcGFuKSB7XG4gICAgcmV0dXJuIGNvbnRleHQuc2V0VmFsdWUoU1BBTl9LRVksIHNwYW4pO1xufVxuLyoqXG4gKiBSZW1vdmUgY3VycmVudCBzcGFuIHN0b3JlZCBpbiB0aGUgY29udGV4dFxuICpcbiAqIEBwYXJhbSBjb250ZXh0IGNvbnRleHQgdG8gZGVsZXRlIHNwYW4gZnJvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlU3Bhbihjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQuZGVsZXRlVmFsdWUoU1BBTl9LRVkpO1xufVxuLyoqXG4gKiBXcmFwIHNwYW4gY29udGV4dCBpbiBhIE5vb3BTcGFuIGFuZCBzZXQgYXMgc3BhbiBpbiBhIG5ld1xuICogY29udGV4dFxuICpcbiAqIEBwYXJhbSBjb250ZXh0IGNvbnRleHQgdG8gc2V0IGFjdGl2ZSBzcGFuIG9uXG4gKiBAcGFyYW0gc3BhbkNvbnRleHQgc3BhbiBjb250ZXh0IHRvIGJlIHdyYXBwZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFNwYW5Db250ZXh0KGNvbnRleHQsIHNwYW5Db250ZXh0KSB7XG4gICAgcmV0dXJuIHNldFNwYW4oY29udGV4dCwgbmV3IE5vblJlY29yZGluZ1NwYW4oc3BhbkNvbnRleHQpKTtcbn1cbi8qKlxuICogR2V0IHRoZSBzcGFuIGNvbnRleHQgb2YgdGhlIHNwYW4gaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSBjb250ZXh0IGNvbnRleHQgdG8gZ2V0IHZhbHVlcyBmcm9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTcGFuQ29udGV4dChjb250ZXh0KSB7XG4gICAgdmFyIF9hO1xuICAgIHJldHVybiAoX2EgPSBnZXRTcGFuKGNvbnRleHQpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3BhbkNvbnRleHQoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnRleHQtdXRpbHMuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IHZhbGlkYXRlS2V5LCB2YWxpZGF0ZVZhbHVlIH0gZnJvbSAnLi90cmFjZXN0YXRlLXZhbGlkYXRvcnMnO1xudmFyIE1BWF9UUkFDRV9TVEFURV9JVEVNUyA9IDMyO1xudmFyIE1BWF9UUkFDRV9TVEFURV9MRU4gPSA1MTI7XG52YXIgTElTVF9NRU1CRVJTX1NFUEFSQVRPUiA9ICcsJztcbnZhciBMSVNUX01FTUJFUl9LRVlfVkFMVUVfU1BMSVRURVIgPSAnPSc7XG4vKipcbiAqIFRyYWNlU3RhdGUgbXVzdCBiZSBhIGNsYXNzIGFuZCBub3QgYSBzaW1wbGUgb2JqZWN0IHR5cGUgYmVjYXVzZSBvZiB0aGUgc3BlY1xuICogcmVxdWlyZW1lbnQgKGh0dHBzOi8vd3d3LnczLm9yZy9UUi90cmFjZS1jb250ZXh0LyN0cmFjZXN0YXRlLWZpZWxkKS5cbiAqXG4gKiBIZXJlIGlzIHRoZSBsaXN0IG9mIGFsbG93ZWQgbXV0YXRpb25zOlxuICogLSBOZXcga2V5LXZhbHVlIHBhaXIgc2hvdWxkIGJlIGFkZGVkIGludG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgbGlzdFxuICogLSBUaGUgdmFsdWUgb2YgYW55IGtleSBjYW4gYmUgdXBkYXRlZC4gTW9kaWZpZWQga2V5cyBNVVNUIGJlIG1vdmVkIHRvIHRoZVxuICogYmVnaW5uaW5nIG9mIHRoZSBsaXN0LlxuICovXG52YXIgVHJhY2VTdGF0ZUltcGwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJhY2VTdGF0ZUltcGwocmF3VHJhY2VTdGF0ZSkge1xuICAgICAgICB0aGlzLl9pbnRlcm5hbFN0YXRlID0gbmV3IE1hcCgpO1xuICAgICAgICBpZiAocmF3VHJhY2VTdGF0ZSlcbiAgICAgICAgICAgIHRoaXMuX3BhcnNlKHJhd1RyYWNlU3RhdGUpO1xuICAgIH1cbiAgICBUcmFjZVN0YXRlSW1wbC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgLy8gVE9ETzogQmVuY2htYXJrIHRoZSBkaWZmZXJlbnQgYXBwcm9hY2hlcyhtYXAgdnMgbGlzdCkgYW5kXG4gICAgICAgIC8vIHVzZSB0aGUgZmFzdGVyIG9uZS5cbiAgICAgICAgdmFyIHRyYWNlU3RhdGUgPSB0aGlzLl9jbG9uZSgpO1xuICAgICAgICBpZiAodHJhY2VTdGF0ZS5faW50ZXJuYWxTdGF0ZS5oYXMoa2V5KSkge1xuICAgICAgICAgICAgdHJhY2VTdGF0ZS5faW50ZXJuYWxTdGF0ZS5kZWxldGUoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0cmFjZVN0YXRlLl9pbnRlcm5hbFN0YXRlLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRyYWNlU3RhdGU7XG4gICAgfTtcbiAgICBUcmFjZVN0YXRlSW1wbC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0cmFjZVN0YXRlID0gdGhpcy5fY2xvbmUoKTtcbiAgICAgICAgdHJhY2VTdGF0ZS5faW50ZXJuYWxTdGF0ZS5kZWxldGUoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRyYWNlU3RhdGU7XG4gICAgfTtcbiAgICBUcmFjZVN0YXRlSW1wbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJuYWxTdGF0ZS5nZXQoa2V5KTtcbiAgICB9O1xuICAgIFRyYWNlU3RhdGVJbXBsLnByb3RvdHlwZS5zZXJpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLl9rZXlzKClcbiAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGFnZywga2V5KSB7XG4gICAgICAgICAgICBhZ2cucHVzaChrZXkgKyBMSVNUX01FTUJFUl9LRVlfVkFMVUVfU1BMSVRURVIgKyBfdGhpcy5nZXQoa2V5KSk7XG4gICAgICAgICAgICByZXR1cm4gYWdnO1xuICAgICAgICB9LCBbXSlcbiAgICAgICAgICAgIC5qb2luKExJU1RfTUVNQkVSU19TRVBBUkFUT1IpO1xuICAgIH07XG4gICAgVHJhY2VTdGF0ZUltcGwucHJvdG90eXBlLl9wYXJzZSA9IGZ1bmN0aW9uIChyYXdUcmFjZVN0YXRlKSB7XG4gICAgICAgIGlmIChyYXdUcmFjZVN0YXRlLmxlbmd0aCA+IE1BWF9UUkFDRV9TVEFURV9MRU4pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuX2ludGVybmFsU3RhdGUgPSByYXdUcmFjZVN0YXRlXG4gICAgICAgICAgICAuc3BsaXQoTElTVF9NRU1CRVJTX1NFUEFSQVRPUilcbiAgICAgICAgICAgIC5yZXZlcnNlKCkgLy8gU3RvcmUgaW4gcmV2ZXJzZSBzbyBuZXcga2V5cyAoLnNldCguLi4pKSB3aWxsIGJlIHBsYWNlZCBhdCB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChhZ2csIHBhcnQpIHtcbiAgICAgICAgICAgIHZhciBsaXN0TWVtYmVyID0gcGFydC50cmltKCk7IC8vIE9wdGlvbmFsIFdoaXRlc3BhY2UgKE9XUykgaGFuZGxpbmdcbiAgICAgICAgICAgIHZhciBpID0gbGlzdE1lbWJlci5pbmRleE9mKExJU1RfTUVNQkVSX0tFWV9WQUxVRV9TUExJVFRFUik7XG4gICAgICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gbGlzdE1lbWJlci5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBsaXN0TWVtYmVyLnNsaWNlKGkgKyAxLCBwYXJ0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlS2V5KGtleSkgJiYgdmFsaWRhdGVWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWdnLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IENvbnNpZGVyIHRvIGFkZCB3YXJuaW5nIGxvZ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhZ2c7XG4gICAgICAgIH0sIG5ldyBNYXAoKSk7XG4gICAgICAgIC8vIEJlY2F1c2Ugb2YgdGhlIHJldmVyc2UoKSByZXF1aXJlbWVudCwgdHJ1bmMgbXVzdCBiZSBkb25lIGFmdGVyIG1hcCBpcyBjcmVhdGVkXG4gICAgICAgIGlmICh0aGlzLl9pbnRlcm5hbFN0YXRlLnNpemUgPiBNQVhfVFJBQ0VfU1RBVEVfSVRFTVMpIHtcbiAgICAgICAgICAgIHRoaXMuX2ludGVybmFsU3RhdGUgPSBuZXcgTWFwKEFycmF5LmZyb20odGhpcy5faW50ZXJuYWxTdGF0ZS5lbnRyaWVzKCkpXG4gICAgICAgICAgICAgICAgLnJldmVyc2UoKSAvLyBVc2UgcmV2ZXJzZSBzYW1lIGFzIG9yaWdpbmFsIHRyYWNlc3RhdGUgcGFyc2UgY2hhaW5cbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgTUFYX1RSQUNFX1NUQVRFX0lURU1TKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyYWNlU3RhdGVJbXBsLnByb3RvdHlwZS5fa2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5faW50ZXJuYWxTdGF0ZS5rZXlzKCkpLnJldmVyc2UoKTtcbiAgICB9O1xuICAgIFRyYWNlU3RhdGVJbXBsLnByb3RvdHlwZS5fY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0cmFjZVN0YXRlID0gbmV3IFRyYWNlU3RhdGVJbXBsKCk7XG4gICAgICAgIHRyYWNlU3RhdGUuX2ludGVybmFsU3RhdGUgPSBuZXcgTWFwKHRoaXMuX2ludGVybmFsU3RhdGUpO1xuICAgICAgICByZXR1cm4gdHJhY2VTdGF0ZTtcbiAgICB9O1xuICAgIHJldHVybiBUcmFjZVN0YXRlSW1wbDtcbn0oKSk7XG5leHBvcnQgeyBUcmFjZVN0YXRlSW1wbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhY2VzdGF0ZS1pbXBsLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG52YXIgVkFMSURfS0VZX0NIQVJfUkFOR0UgPSAnW18wLTlhLXotKi9dJztcbnZhciBWQUxJRF9LRVkgPSBcIlthLXpdXCIgKyBWQUxJRF9LRVlfQ0hBUl9SQU5HRSArIFwiezAsMjU1fVwiO1xudmFyIFZBTElEX1ZFTkRPUl9LRVkgPSBcIlthLXowLTldXCIgKyBWQUxJRF9LRVlfQ0hBUl9SQU5HRSArIFwiezAsMjQwfUBbYS16XVwiICsgVkFMSURfS0VZX0NIQVJfUkFOR0UgKyBcInswLDEzfVwiO1xudmFyIFZBTElEX0tFWV9SRUdFWCA9IG5ldyBSZWdFeHAoXCJeKD86XCIgKyBWQUxJRF9LRVkgKyBcInxcIiArIFZBTElEX1ZFTkRPUl9LRVkgKyBcIikkXCIpO1xudmFyIFZBTElEX1ZBTFVFX0JBU0VfUkVHRVggPSAvXlsgLX5dezAsMjU1fVshLX5dJC87XG52YXIgSU5WQUxJRF9WQUxVRV9DT01NQV9FUVVBTF9SRUdFWCA9IC8sfD0vO1xuLyoqXG4gKiBLZXkgaXMgb3BhcXVlIHN0cmluZyB1cCB0byAyNTYgY2hhcmFjdGVycyBwcmludGFibGUuIEl0IE1VU1QgYmVnaW4gd2l0aCBhXG4gKiBsb3dlcmNhc2UgbGV0dGVyLCBhbmQgY2FuIG9ubHkgY29udGFpbiBsb3dlcmNhc2UgbGV0dGVycyBhLXosIGRpZ2l0cyAwLTksXG4gKiB1bmRlcnNjb3JlcyBfLCBkYXNoZXMgLSwgYXN0ZXJpc2tzICosIGFuZCBmb3J3YXJkIHNsYXNoZXMgLy5cbiAqIEZvciBtdWx0aS10ZW5hbnQgdmVuZG9yIHNjZW5hcmlvcywgYW4gYXQgc2lnbiAoQCkgY2FuIGJlIHVzZWQgdG8gcHJlZml4IHRoZVxuICogdmVuZG9yIG5hbWUuIFZlbmRvcnMgU0hPVUxEIHNldCB0aGUgdGVuYW50IElEIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGtleS5cbiAqIHNlZSBodHRwczovL3d3dy53My5vcmcvVFIvdHJhY2UtY29udGV4dC8ja2V5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUtleShrZXkpIHtcbiAgICByZXR1cm4gVkFMSURfS0VZX1JFR0VYLnRlc3Qoa2V5KTtcbn1cbi8qKlxuICogVmFsdWUgaXMgb3BhcXVlIHN0cmluZyB1cCB0byAyNTYgY2hhcmFjdGVycyBwcmludGFibGUgQVNDSUkgUkZDMDAyMFxuICogY2hhcmFjdGVycyAoaS5lLiwgdGhlIHJhbmdlIDB4MjAgdG8gMHg3RSkgZXhjZXB0IGNvbW1hICwgYW5kID0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIChWQUxJRF9WQUxVRV9CQVNFX1JFR0VYLnRlc3QodmFsdWUpICYmXG4gICAgICAgICFJTlZBTElEX1ZBTFVFX0NPTU1BX0VRVUFMX1JFR0VYLnRlc3QodmFsdWUpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYWNlc3RhdGUtdmFsaWRhdG9ycy5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHsgVHJhY2VTdGF0ZUltcGwgfSBmcm9tICcuL3RyYWNlc3RhdGUtaW1wbCc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhY2VTdGF0ZShyYXdUcmFjZVN0YXRlKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFjZVN0YXRlSW1wbChyYXdUcmFjZVN0YXRlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgeyBUcmFjZUZsYWdzIH0gZnJvbSAnLi90cmFjZV9mbGFncyc7XG5leHBvcnQgdmFyIElOVkFMSURfU1BBTklEID0gJzAwMDAwMDAwMDAwMDAwMDAnO1xuZXhwb3J0IHZhciBJTlZBTElEX1RSQUNFSUQgPSAnMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAnO1xuZXhwb3J0IHZhciBJTlZBTElEX1NQQU5fQ09OVEVYVCA9IHtcbiAgICB0cmFjZUlkOiBJTlZBTElEX1RSQUNFSUQsXG4gICAgc3BhbklkOiBJTlZBTElEX1NQQU5JRCxcbiAgICB0cmFjZUZsYWdzOiBUcmFjZUZsYWdzLk5PTkUsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW52YWxpZC1zcGFuLWNvbnN0YW50cy5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Bhbi5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Bhbl9jb250ZXh0LmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgdmFyIFNwYW5LaW5kO1xuKGZ1bmN0aW9uIChTcGFuS2luZCkge1xuICAgIC8qKiBEZWZhdWx0IHZhbHVlLiBJbmRpY2F0ZXMgdGhhdCB0aGUgc3BhbiBpcyB1c2VkIGludGVybmFsbHkuICovXG4gICAgU3BhbktpbmRbU3BhbktpbmRbXCJJTlRFUk5BTFwiXSA9IDBdID0gXCJJTlRFUk5BTFwiO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IHRoZSBzcGFuIGNvdmVycyBzZXJ2ZXItc2lkZSBoYW5kbGluZyBvZiBhbiBSUEMgb3Igb3RoZXJcbiAgICAgKiByZW1vdGUgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBTcGFuS2luZFtTcGFuS2luZFtcIlNFUlZFUlwiXSA9IDFdID0gXCJTRVJWRVJcIjtcbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgc3BhbiBjb3ZlcnMgdGhlIGNsaWVudC1zaWRlIHdyYXBwZXIgYXJvdW5kIGFuIFJQQyBvclxuICAgICAqIG90aGVyIHJlbW90ZSByZXF1ZXN0LlxuICAgICAqL1xuICAgIFNwYW5LaW5kW1NwYW5LaW5kW1wiQ0xJRU5UXCJdID0gMl0gPSBcIkNMSUVOVFwiO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IHRoZSBzcGFuIGRlc2NyaWJlcyBwcm9kdWNlciBzZW5kaW5nIGEgbWVzc2FnZSB0byBhXG4gICAgICogYnJva2VyLiBVbmxpa2UgY2xpZW50IGFuZCBzZXJ2ZXIsIHRoZXJlIGlzIG5vIGRpcmVjdCBjcml0aWNhbCBwYXRoIGxhdGVuY3lcbiAgICAgKiByZWxhdGlvbnNoaXAgYmV0d2VlbiBwcm9kdWNlciBhbmQgY29uc3VtZXIgc3BhbnMuXG4gICAgICovXG4gICAgU3BhbktpbmRbU3BhbktpbmRbXCJQUk9EVUNFUlwiXSA9IDNdID0gXCJQUk9EVUNFUlwiO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGF0IHRoZSBzcGFuIGRlc2NyaWJlcyBjb25zdW1lciByZWNlaXZpbmcgYSBtZXNzYWdlIGZyb20gYVxuICAgICAqIGJyb2tlci4gVW5saWtlIGNsaWVudCBhbmQgc2VydmVyLCB0aGVyZSBpcyBubyBkaXJlY3QgY3JpdGljYWwgcGF0aCBsYXRlbmN5XG4gICAgICogcmVsYXRpb25zaGlwIGJldHdlZW4gcHJvZHVjZXIgYW5kIGNvbnN1bWVyIHNwYW5zLlxuICAgICAqL1xuICAgIFNwYW5LaW5kW1NwYW5LaW5kW1wiQ09OU1VNRVJcIl0gPSA0XSA9IFwiQ09OU1VNRVJcIjtcbn0pKFNwYW5LaW5kIHx8IChTcGFuS2luZCA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcGFuX2tpbmQuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCB7IElOVkFMSURfU1BBTklELCBJTlZBTElEX1RSQUNFSUQgfSBmcm9tICcuL2ludmFsaWQtc3Bhbi1jb25zdGFudHMnO1xuaW1wb3J0IHsgTm9uUmVjb3JkaW5nU3BhbiB9IGZyb20gJy4vTm9uUmVjb3JkaW5nU3Bhbic7XG52YXIgVkFMSURfVFJBQ0VJRF9SRUdFWCA9IC9eKFswLTlhLWZdezMyfSkkL2k7XG52YXIgVkFMSURfU1BBTklEX1JFR0VYID0gL15bMC05YS1mXXsxNn0kL2k7XG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFRyYWNlSWQodHJhY2VJZCkge1xuICAgIHJldHVybiBWQUxJRF9UUkFDRUlEX1JFR0VYLnRlc3QodHJhY2VJZCkgJiYgdHJhY2VJZCAhPT0gSU5WQUxJRF9UUkFDRUlEO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRTcGFuSWQoc3BhbklkKSB7XG4gICAgcmV0dXJuIFZBTElEX1NQQU5JRF9SRUdFWC50ZXN0KHNwYW5JZCkgJiYgc3BhbklkICE9PSBJTlZBTElEX1NQQU5JRDtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoaXMge0BsaW5rIFNwYW5Db250ZXh0fSBpcyB2YWxpZC5cbiAqIEByZXR1cm4gdHJ1ZSBpZiB0aGlzIHtAbGluayBTcGFuQ29udGV4dH0gaXMgdmFsaWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NwYW5Db250ZXh0VmFsaWQoc3BhbkNvbnRleHQpIHtcbiAgICByZXR1cm4gKGlzVmFsaWRUcmFjZUlkKHNwYW5Db250ZXh0LnRyYWNlSWQpICYmIGlzVmFsaWRTcGFuSWQoc3BhbkNvbnRleHQuc3BhbklkKSk7XG59XG4vKipcbiAqIFdyYXAgdGhlIGdpdmVuIHtAbGluayBTcGFuQ29udGV4dH0gaW4gYSBuZXcgbm9uLXJlY29yZGluZyB7QGxpbmsgU3Bhbn1cbiAqXG4gKiBAcGFyYW0gc3BhbkNvbnRleHQgc3BhbiBjb250ZXh0IHRvIGJlIHdyYXBwZWRcbiAqIEByZXR1cm5zIGEgbmV3IG5vbi1yZWNvcmRpbmcge0BsaW5rIFNwYW59IHdpdGggdGhlIHByb3ZpZGVkIGNvbnRleHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBTcGFuQ29udGV4dChzcGFuQ29udGV4dCkge1xuICAgIHJldHVybiBuZXcgTm9uUmVjb3JkaW5nU3BhbihzcGFuQ29udGV4dCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zcGFuY29udGV4dC11dGlscy5qcy5tYXAiLCIvKipcbiAqIEFuIGVudW1lcmF0aW9uIG9mIHN0YXR1cyBjb2Rlcy5cbiAqL1xuZXhwb3J0IHZhciBTcGFuU3RhdHVzQ29kZTtcbihmdW5jdGlvbiAoU3BhblN0YXR1c0NvZGUpIHtcbiAgICAvKipcbiAgICAgKiBUaGUgZGVmYXVsdCBzdGF0dXMuXG4gICAgICovXG4gICAgU3BhblN0YXR1c0NvZGVbU3BhblN0YXR1c0NvZGVbXCJVTlNFVFwiXSA9IDBdID0gXCJVTlNFVFwiO1xuICAgIC8qKlxuICAgICAqIFRoZSBvcGVyYXRpb24gaGFzIGJlZW4gdmFsaWRhdGVkIGJ5IGFuIEFwcGxpY2F0aW9uIGRldmVsb3BlciBvclxuICAgICAqIE9wZXJhdG9yIHRvIGhhdmUgY29tcGxldGVkIHN1Y2Nlc3NmdWxseS5cbiAgICAgKi9cbiAgICBTcGFuU3RhdHVzQ29kZVtTcGFuU3RhdHVzQ29kZVtcIk9LXCJdID0gMV0gPSBcIk9LXCI7XG4gICAgLyoqXG4gICAgICogVGhlIG9wZXJhdGlvbiBjb250YWlucyBhbiBlcnJvci5cbiAgICAgKi9cbiAgICBTcGFuU3RhdHVzQ29kZVtTcGFuU3RhdHVzQ29kZVtcIkVSUk9SXCJdID0gMl0gPSBcIkVSUk9SXCI7XG59KShTcGFuU3RhdHVzQ29kZSB8fCAoU3BhblN0YXR1c0NvZGUgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RhdHVzLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgdmFyIFRyYWNlRmxhZ3M7XG4oZnVuY3Rpb24gKFRyYWNlRmxhZ3MpIHtcbiAgICAvKiogUmVwcmVzZW50cyBubyBmbGFnIHNldC4gKi9cbiAgICBUcmFjZUZsYWdzW1RyYWNlRmxhZ3NbXCJOT05FXCJdID0gMF0gPSBcIk5PTkVcIjtcbiAgICAvKiogQml0IHRvIHJlcHJlc2VudCB3aGV0aGVyIHRyYWNlIGlzIHNhbXBsZWQgaW4gdHJhY2UgZmxhZ3MuICovXG4gICAgVHJhY2VGbGFnc1tUcmFjZUZsYWdzW1wiU0FNUExFRFwiXSA9IDFdID0gXCJTQU1QTEVEXCI7XG59KShUcmFjZUZsYWdzIHx8IChUcmFjZUZsYWdzID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYWNlX2ZsYWdzLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFjZV9zdGF0ZS5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhY2VyLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD10cmFjZXJfb3B0aW9ucy5qcy5tYXAiLCIvKlxuICogQ29weXJpZ2h0IFRoZSBPcGVuVGVsZW1ldHJ5IEF1dGhvcnNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZXhwb3J0IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHJhY2VyX3Byb3ZpZGVyLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vLyB0aGlzIGlzIGF1dG9nZW5lcmF0ZWQgZmlsZSwgc2VlIHNjcmlwdHMvdmVyc2lvbi11cGRhdGUuanNcbmV4cG9ydCB2YXIgVkVSU0lPTiA9ICcxLjEuMCc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZXJzaW9uLmpzLm1hcCIsIi8qXG4gKiBDb3B5cmlnaHQgVGhlIE9wZW5UZWxlbWV0cnkgQXV0aG9yc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgKiBmcm9tICcuL3RyYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcmVzb3VyY2UnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8vIERPIE5PVCBFRElULCB0aGlzIGlzIGFuIEF1dG8tZ2VuZXJhdGVkIGZpbGUgZnJvbSBzY3JpcHRzL3NlbWNvbnYvdGVtcGxhdGVzLy90ZW1wbGF0ZXMvU2VtYW50aWNBdHRyaWJ1dGVzLnRzLmoyXG5leHBvcnQgdmFyIFNlbWFudGljUmVzb3VyY2VBdHRyaWJ1dGVzID0ge1xuICAgIC8qKlxuICAgICogTmFtZSBvZiB0aGUgY2xvdWQgcHJvdmlkZXIuXG4gICAgKi9cbiAgICBDTE9VRF9QUk9WSURFUjogJ2Nsb3VkLnByb3ZpZGVyJyxcbiAgICAvKipcbiAgICAqIFRoZSBjbG91ZCBhY2NvdW50IElEIHRoZSByZXNvdXJjZSBpcyBhc3NpZ25lZCB0by5cbiAgICAqL1xuICAgIENMT1VEX0FDQ09VTlRfSUQ6ICdjbG91ZC5hY2NvdW50LmlkJyxcbiAgICAvKipcbiAgICAqIFRoZSBnZW9ncmFwaGljYWwgcmVnaW9uIHRoZSByZXNvdXJjZSBpcyBydW5uaW5nLiBSZWZlciB0byB5b3VyIHByb3ZpZGVyJiMzOTtzIGRvY3MgdG8gc2VlIHRoZSBhdmFpbGFibGUgcmVnaW9ucywgZm9yIGV4YW1wbGUgW0FsaWJhYmEgQ2xvdWQgcmVnaW9uc10oaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL2RvYy1kZXRhaWwvNDA2NTQuaHRtKSwgW0FXUyByZWdpb25zXShodHRwczovL2F3cy5hbWF6b24uY29tL2Fib3V0LWF3cy9nbG9iYWwtaW5mcmFzdHJ1Y3R1cmUvcmVnaW9uc19hei8pLCBbQXp1cmUgcmVnaW9uc10oaHR0cHM6Ly9henVyZS5taWNyb3NvZnQuY29tL2VuLXVzL2dsb2JhbC1pbmZyYXN0cnVjdHVyZS9nZW9ncmFwaGllcy8pLCBvciBbR29vZ2xlIENsb3VkIHJlZ2lvbnNdKGh0dHBzOi8vY2xvdWQuZ29vZ2xlLmNvbS9hYm91dC9sb2NhdGlvbnMpLlxuICAgICovXG4gICAgQ0xPVURfUkVHSU9OOiAnY2xvdWQucmVnaW9uJyxcbiAgICAvKipcbiAgICAqIENsb3VkIHJlZ2lvbnMgb2Z0ZW4gaGF2ZSBtdWx0aXBsZSwgaXNvbGF0ZWQgbG9jYXRpb25zIGtub3duIGFzIHpvbmVzIHRvIGluY3JlYXNlIGF2YWlsYWJpbGl0eS4gQXZhaWxhYmlsaXR5IHpvbmUgcmVwcmVzZW50cyB0aGUgem9uZSB3aGVyZSB0aGUgcmVzb3VyY2UgaXMgcnVubmluZy5cbiAgICAqXG4gICAgKiBOb3RlOiBBdmFpbGFiaWxpdHkgem9uZXMgYXJlIGNhbGxlZCAmIzM0O3pvbmVzJiMzNDsgb24gQWxpYmFiYSBDbG91ZCBhbmQgR29vZ2xlIENsb3VkLlxuICAgICovXG4gICAgQ0xPVURfQVZBSUxBQklMSVRZX1pPTkU6ICdjbG91ZC5hdmFpbGFiaWxpdHlfem9uZScsXG4gICAgLyoqXG4gICAgKiBUaGUgY2xvdWQgcGxhdGZvcm0gaW4gdXNlLlxuICAgICpcbiAgICAqIE5vdGU6IFRoZSBwcmVmaXggb2YgdGhlIHNlcnZpY2UgU0hPVUxEIG1hdGNoIHRoZSBvbmUgc3BlY2lmaWVkIGluIGBjbG91ZC5wcm92aWRlcmAuXG4gICAgKi9cbiAgICBDTE9VRF9QTEFURk9STTogJ2Nsb3VkLnBsYXRmb3JtJyxcbiAgICAvKipcbiAgICAqIFRoZSBBbWF6b24gUmVzb3VyY2UgTmFtZSAoQVJOKSBvZiBhbiBbRUNTIGNvbnRhaW5lciBpbnN0YW5jZV0oaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FtYXpvbkVDUy9sYXRlc3QvZGV2ZWxvcGVyZ3VpZGUvRUNTX2luc3RhbmNlcy5odG1sKS5cbiAgICAqL1xuICAgIEFXU19FQ1NfQ09OVEFJTkVSX0FSTjogJ2F3cy5lY3MuY29udGFpbmVyLmFybicsXG4gICAgLyoqXG4gICAgKiBUaGUgQVJOIG9mIGFuIFtFQ1MgY2x1c3Rlcl0oaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FtYXpvbkVDUy9sYXRlc3QvZGV2ZWxvcGVyZ3VpZGUvY2x1c3RlcnMuaHRtbCkuXG4gICAgKi9cbiAgICBBV1NfRUNTX0NMVVNURVJfQVJOOiAnYXdzLmVjcy5jbHVzdGVyLmFybicsXG4gICAgLyoqXG4gICAgKiBUaGUgW2xhdW5jaCB0eXBlXShodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vQW1hem9uRUNTL2xhdGVzdC9kZXZlbG9wZXJndWlkZS9sYXVuY2hfdHlwZXMuaHRtbCkgZm9yIGFuIEVDUyB0YXNrLlxuICAgICovXG4gICAgQVdTX0VDU19MQVVOQ0hUWVBFOiAnYXdzLmVjcy5sYXVuY2h0eXBlJyxcbiAgICAvKipcbiAgICAqIFRoZSBBUk4gb2YgYW4gW0VDUyB0YXNrIGRlZmluaXRpb25dKGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BbWF6b25FQ1MvbGF0ZXN0L2RldmVsb3Blcmd1aWRlL3Rhc2tfZGVmaW5pdGlvbnMuaHRtbCkuXG4gICAgKi9cbiAgICBBV1NfRUNTX1RBU0tfQVJOOiAnYXdzLmVjcy50YXNrLmFybicsXG4gICAgLyoqXG4gICAgKiBUaGUgdGFzayBkZWZpbml0aW9uIGZhbWlseSB0aGlzIHRhc2sgZGVmaW5pdGlvbiBpcyBhIG1lbWJlciBvZi5cbiAgICAqL1xuICAgIEFXU19FQ1NfVEFTS19GQU1JTFk6ICdhd3MuZWNzLnRhc2suZmFtaWx5JyxcbiAgICAvKipcbiAgICAqIFRoZSByZXZpc2lvbiBmb3IgdGhpcyB0YXNrIGRlZmluaXRpb24uXG4gICAgKi9cbiAgICBBV1NfRUNTX1RBU0tfUkVWSVNJT046ICdhd3MuZWNzLnRhc2sucmV2aXNpb24nLFxuICAgIC8qKlxuICAgICogVGhlIEFSTiBvZiBhbiBFS1MgY2x1c3Rlci5cbiAgICAqL1xuICAgIEFXU19FS1NfQ0xVU1RFUl9BUk46ICdhd3MuZWtzLmNsdXN0ZXIuYXJuJyxcbiAgICAvKipcbiAgICAqIFRoZSBuYW1lKHMpIG9mIHRoZSBBV1MgbG9nIGdyb3VwKHMpIGFuIGFwcGxpY2F0aW9uIGlzIHdyaXRpbmcgdG8uXG4gICAgKlxuICAgICogTm90ZTogTXVsdGlwbGUgbG9nIGdyb3VwcyBtdXN0IGJlIHN1cHBvcnRlZCBmb3IgY2FzZXMgbGlrZSBtdWx0aS1jb250YWluZXIgYXBwbGljYXRpb25zLCB3aGVyZSBhIHNpbmdsZSBhcHBsaWNhdGlvbiBoYXMgc2lkZWNhciBjb250YWluZXJzLCBhbmQgZWFjaCB3cml0ZSB0byB0aGVpciBvd24gbG9nIGdyb3VwLlxuICAgICovXG4gICAgQVdTX0xPR19HUk9VUF9OQU1FUzogJ2F3cy5sb2cuZ3JvdXAubmFtZXMnLFxuICAgIC8qKlxuICAgICogVGhlIEFtYXpvbiBSZXNvdXJjZSBOYW1lKHMpIChBUk4pIG9mIHRoZSBBV1MgbG9nIGdyb3VwKHMpLlxuICAgICpcbiAgICAqIE5vdGU6IFNlZSB0aGUgW2xvZyBncm91cCBBUk4gZm9ybWF0IGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BbWF6b25DbG91ZFdhdGNoL2xhdGVzdC9sb2dzL2lhbS1hY2Nlc3MtY29udHJvbC1vdmVydmlldy1jd2wuaHRtbCNDV0xfQVJOX0Zvcm1hdCkuXG4gICAgKi9cbiAgICBBV1NfTE9HX0dST1VQX0FSTlM6ICdhd3MubG9nLmdyb3VwLmFybnMnLFxuICAgIC8qKlxuICAgICogVGhlIG5hbWUocykgb2YgdGhlIEFXUyBsb2cgc3RyZWFtKHMpIGFuIGFwcGxpY2F0aW9uIGlzIHdyaXRpbmcgdG8uXG4gICAgKi9cbiAgICBBV1NfTE9HX1NUUkVBTV9OQU1FUzogJ2F3cy5sb2cuc3RyZWFtLm5hbWVzJyxcbiAgICAvKipcbiAgICAqIFRoZSBBUk4ocykgb2YgdGhlIEFXUyBsb2cgc3RyZWFtKHMpLlxuICAgICpcbiAgICAqIE5vdGU6IFNlZSB0aGUgW2xvZyBzdHJlYW0gQVJOIGZvcm1hdCBkb2N1bWVudGF0aW9uXShodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vQW1hem9uQ2xvdWRXYXRjaC9sYXRlc3QvbG9ncy9pYW0tYWNjZXNzLWNvbnRyb2wtb3ZlcnZpZXctY3dsLmh0bWwjQ1dMX0FSTl9Gb3JtYXQpLiBPbmUgbG9nIGdyb3VwIGNhbiBjb250YWluIHNldmVyYWwgbG9nIHN0cmVhbXMsIHNvIHRoZXNlIEFSTnMgbmVjZXNzYXJpbHkgaWRlbnRpZnkgYm90aCBhIGxvZyBncm91cCBhbmQgYSBsb2cgc3RyZWFtLlxuICAgICovXG4gICAgQVdTX0xPR19TVFJFQU1fQVJOUzogJ2F3cy5sb2cuc3RyZWFtLmFybnMnLFxuICAgIC8qKlxuICAgICogQ29udGFpbmVyIG5hbWUuXG4gICAgKi9cbiAgICBDT05UQUlORVJfTkFNRTogJ2NvbnRhaW5lci5uYW1lJyxcbiAgICAvKipcbiAgICAqIENvbnRhaW5lciBJRC4gVXN1YWxseSBhIFVVSUQsIGFzIGZvciBleGFtcGxlIHVzZWQgdG8gW2lkZW50aWZ5IERvY2tlciBjb250YWluZXJzXShodHRwczovL2RvY3MuZG9ja2VyLmNvbS9lbmdpbmUvcmVmZXJlbmNlL3J1bi8jY29udGFpbmVyLWlkZW50aWZpY2F0aW9uKS4gVGhlIFVVSUQgbWlnaHQgYmUgYWJicmV2aWF0ZWQuXG4gICAgKi9cbiAgICBDT05UQUlORVJfSUQ6ICdjb250YWluZXIuaWQnLFxuICAgIC8qKlxuICAgICogVGhlIGNvbnRhaW5lciBydW50aW1lIG1hbmFnaW5nIHRoaXMgY29udGFpbmVyLlxuICAgICovXG4gICAgQ09OVEFJTkVSX1JVTlRJTUU6ICdjb250YWluZXIucnVudGltZScsXG4gICAgLyoqXG4gICAgKiBOYW1lIG9mIHRoZSBpbWFnZSB0aGUgY29udGFpbmVyIHdhcyBidWlsdCBvbi5cbiAgICAqL1xuICAgIENPTlRBSU5FUl9JTUFHRV9OQU1FOiAnY29udGFpbmVyLmltYWdlLm5hbWUnLFxuICAgIC8qKlxuICAgICogQ29udGFpbmVyIGltYWdlIHRhZy5cbiAgICAqL1xuICAgIENPTlRBSU5FUl9JTUFHRV9UQUc6ICdjb250YWluZXIuaW1hZ2UudGFnJyxcbiAgICAvKipcbiAgICAqIE5hbWUgb2YgdGhlIFtkZXBsb3ltZW50IGVudmlyb25tZW50XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EZXBsb3ltZW50X2Vudmlyb25tZW50KSAoYWthIGRlcGxveW1lbnQgdGllcikuXG4gICAgKi9cbiAgICBERVBMT1lNRU5UX0VOVklST05NRU5UOiAnZGVwbG95bWVudC5lbnZpcm9ubWVudCcsXG4gICAgLyoqXG4gICAgKiBBIHVuaXF1ZSBpZGVudGlmaWVyIHJlcHJlc2VudGluZyB0aGUgZGV2aWNlLlxuICAgICpcbiAgICAqIE5vdGU6IFRoZSBkZXZpY2UgaWRlbnRpZmllciBNVVNUIG9ubHkgYmUgZGVmaW5lZCB1c2luZyB0aGUgdmFsdWVzIG91dGxpbmVkIGJlbG93LiBUaGlzIHZhbHVlIGlzIG5vdCBhbiBhZHZlcnRpc2luZyBpZGVudGlmaWVyIGFuZCBNVVNUIE5PVCBiZSB1c2VkIGFzIHN1Y2guIE9uIGlPUyAoU3dpZnQgb3IgT2JqZWN0aXZlLUMpLCB0aGlzIHZhbHVlIE1VU1QgYmUgZXF1YWwgdG8gdGhlIFt2ZW5kb3IgaWRlbnRpZmllcl0oaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vdWlraXQvdWlkZXZpY2UvMTYyMDA1OS1pZGVudGlmaWVyZm9ydmVuZG9yKS4gT24gQW5kcm9pZCAoSmF2YSBvciBLb3RsaW4pLCB0aGlzIHZhbHVlIE1VU1QgYmUgZXF1YWwgdG8gdGhlIEZpcmViYXNlIEluc3RhbGxhdGlvbiBJRCBvciBhIGdsb2JhbGx5IHVuaXF1ZSBVVUlEIHdoaWNoIGlzIHBlcnNpc3RlZCBhY3Jvc3Mgc2Vzc2lvbnMgaW4geW91ciBhcHBsaWNhdGlvbi4gTW9yZSBpbmZvcm1hdGlvbiBjYW4gYmUgZm91bmQgW2hlcmVdKGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL3RyYWluaW5nL2FydGljbGVzL3VzZXItZGF0YS1pZHMpIG9uIGJlc3QgcHJhY3RpY2VzIGFuZCBleGFjdCBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzLiBDYXV0aW9uIHNob3VsZCBiZSB0YWtlbiB3aGVuIHN0b3JpbmcgcGVyc29uYWwgZGF0YSBvciBhbnl0aGluZyB3aGljaCBjYW4gaWRlbnRpZnkgYSB1c2VyLiBHRFBSIGFuZCBkYXRhIHByb3RlY3Rpb24gbGF3cyBtYXkgYXBwbHksIGVuc3VyZSB5b3UgZG8geW91ciBvd24gZHVlIGRpbGlnZW5jZS5cbiAgICAqL1xuICAgIERFVklDRV9JRDogJ2RldmljZS5pZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgbW9kZWwgaWRlbnRpZmllciBmb3IgdGhlIGRldmljZS5cbiAgICAqXG4gICAgKiBOb3RlOiBJdCYjMzk7cyByZWNvbW1lbmRlZCB0aGlzIHZhbHVlIHJlcHJlc2VudHMgYSBtYWNoaW5lIHJlYWRhYmxlIHZlcnNpb24gb2YgdGhlIG1vZGVsIGlkZW50aWZpZXIgcmF0aGVyIHRoYW4gdGhlIG1hcmtldCBvciBjb25zdW1lci1mcmllbmRseSBuYW1lIG9mIHRoZSBkZXZpY2UuXG4gICAgKi9cbiAgICBERVZJQ0VfTU9ERUxfSURFTlRJRklFUjogJ2RldmljZS5tb2RlbC5pZGVudGlmaWVyJyxcbiAgICAvKipcbiAgICAqIFRoZSBtYXJrZXRpbmcgbmFtZSBmb3IgdGhlIGRldmljZSBtb2RlbC5cbiAgICAqXG4gICAgKiBOb3RlOiBJdCYjMzk7cyByZWNvbW1lbmRlZCB0aGlzIHZhbHVlIHJlcHJlc2VudHMgYSBodW1hbiByZWFkYWJsZSB2ZXJzaW9uIG9mIHRoZSBkZXZpY2UgbW9kZWwgcmF0aGVyIHRoYW4gYSBtYWNoaW5lIHJlYWRhYmxlIGFsdGVybmF0aXZlLlxuICAgICovXG4gICAgREVWSUNFX01PREVMX05BTUU6ICdkZXZpY2UubW9kZWwubmFtZScsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgc2luZ2xlIGZ1bmN0aW9uIHRoYXQgdGhpcyBydW50aW1lIGluc3RhbmNlIGV4ZWN1dGVzLlxuICAgICpcbiAgICAqIE5vdGU6IFRoaXMgaXMgdGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIGFzIGNvbmZpZ3VyZWQvZGVwbG95ZWQgb24gdGhlIEZhYVMgcGxhdGZvcm0gYW5kIGlzIHVzdWFsbHkgZGlmZmVyZW50IGZyb20gdGhlIG5hbWUgb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uICh3aGljaCBtYXkgYmUgc3RvcmVkIGluIHRoZSBbYGNvZGUubmFtZXNwYWNlYC9gY29kZS5mdW5jdGlvbmBdKC4uLy4uL3RyYWNlL3NlbWFudGljX2NvbnZlbnRpb25zL3NwYW4tZ2VuZXJhbC5tZCNzb3VyY2UtY29kZS1hdHRyaWJ1dGVzKSBzcGFuIGF0dHJpYnV0ZXMpLlxuICAgICovXG4gICAgRkFBU19OQU1FOiAnZmFhcy5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSB1bmlxdWUgSUQgb2YgdGhlIHNpbmdsZSBmdW5jdGlvbiB0aGF0IHRoaXMgcnVudGltZSBpbnN0YW5jZSBleGVjdXRlcy5cbiAgICAqXG4gICAgKiBOb3RlOiBEZXBlbmRpbmcgb24gdGhlIGNsb3VkIHByb3ZpZGVyLCB1c2U6XG4gIFxuICAqICoqQVdTIExhbWJkYToqKiBUaGUgZnVuY3Rpb24gW0FSTl0oaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2dlbmVyYWwvbGF0ZXN0L2dyL2F3cy1hcm5zLWFuZC1uYW1lc3BhY2VzLmh0bWwpLlxuICBUYWtlIGNhcmUgbm90IHRvIHVzZSB0aGUgJiMzNDtpbnZva2VkIEFSTiYjMzQ7IGRpcmVjdGx5IGJ1dCByZXBsYWNlIGFueVxuICBbYWxpYXMgc3VmZml4XShodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vbGFtYmRhL2xhdGVzdC9kZy9jb25maWd1cmF0aW9uLWFsaWFzZXMuaHRtbCkgd2l0aCB0aGUgcmVzb2x2ZWQgZnVuY3Rpb24gdmVyc2lvbiwgYXMgdGhlIHNhbWUgcnVudGltZSBpbnN0YW5jZSBtYXkgYmUgaW52b2thYmxlIHdpdGggbXVsdGlwbGVcbiAgZGlmZmVyZW50IGFsaWFzZXMuXG4gICogKipHQ1A6KiogVGhlIFtVUkkgb2YgdGhlIHJlc291cmNlXShodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vaWFtL2RvY3MvZnVsbC1yZXNvdXJjZS1uYW1lcylcbiAgKiAqKkF6dXJlOioqIFRoZSBbRnVsbHkgUXVhbGlmaWVkIFJlc291cmNlIElEXShodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9yZXN0L2FwaS9yZXNvdXJjZXMvcmVzb3VyY2VzL2dldC1ieS1pZCkuXG4gIFxuICBPbiBzb21lIHByb3ZpZGVycywgaXQgbWF5IG5vdCBiZSBwb3NzaWJsZSB0byBkZXRlcm1pbmUgdGhlIGZ1bGwgSUQgYXQgc3RhcnR1cCxcbiAgd2hpY2ggaXMgd2h5IHRoaXMgZmllbGQgY2Fubm90IGJlIG1hZGUgcmVxdWlyZWQuIEZvciBleGFtcGxlLCBvbiBBV1MgdGhlIGFjY291bnQgSURcbiAgcGFydCBvZiB0aGUgQVJOIGlzIG5vdCBhdmFpbGFibGUgd2l0aG91dCBjYWxsaW5nIGFub3RoZXIgQVdTIEFQSVxuICB3aGljaCBtYXkgYmUgZGVlbWVkIHRvbyBzbG93IGZvciBhIHNob3J0LXJ1bm5pbmcgbGFtYmRhIGZ1bmN0aW9uLlxuICBBcyBhbiBhbHRlcm5hdGl2ZSwgY29uc2lkZXIgc2V0dGluZyBgZmFhcy5pZGAgYXMgYSBzcGFuIGF0dHJpYnV0ZSBpbnN0ZWFkLlxuICAgICovXG4gICAgRkFBU19JRDogJ2ZhYXMuaWQnLFxuICAgIC8qKlxuICAgICogVGhlIGltbXV0YWJsZSB2ZXJzaW9uIG9mIHRoZSBmdW5jdGlvbiBiZWluZyBleGVjdXRlZC5cbiAgICAqXG4gICAgKiBOb3RlOiBEZXBlbmRpbmcgb24gdGhlIGNsb3VkIHByb3ZpZGVyIGFuZCBwbGF0Zm9ybSwgdXNlOlxuICBcbiAgKiAqKkFXUyBMYW1iZGE6KiogVGhlIFtmdW5jdGlvbiB2ZXJzaW9uXShodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vbGFtYmRhL2xhdGVzdC9kZy9jb25maWd1cmF0aW9uLXZlcnNpb25zLmh0bWwpXG4gICAgKGFuIGludGVnZXIgcmVwcmVzZW50ZWQgYXMgYSBkZWNpbWFsIHN0cmluZykuXG4gICogKipHb29nbGUgQ2xvdWQgUnVuOioqIFRoZSBbcmV2aXNpb25dKGh0dHBzOi8vY2xvdWQuZ29vZ2xlLmNvbS9ydW4vZG9jcy9tYW5hZ2luZy9yZXZpc2lvbnMpXG4gICAgKGkuZS4sIHRoZSBmdW5jdGlvbiBuYW1lIHBsdXMgdGhlIHJldmlzaW9uIHN1ZmZpeCkuXG4gICogKipHb29nbGUgQ2xvdWQgRnVuY3Rpb25zOioqIFRoZSB2YWx1ZSBvZiB0aGVcbiAgICBbYEtfUkVWSVNJT05gIGVudmlyb25tZW50IHZhcmlhYmxlXShodHRwczovL2Nsb3VkLmdvb2dsZS5jb20vZnVuY3Rpb25zL2RvY3MvZW52LXZhciNydW50aW1lX2Vudmlyb25tZW50X3ZhcmlhYmxlc19zZXRfYXV0b21hdGljYWxseSkuXG4gICogKipBenVyZSBGdW5jdGlvbnM6KiogTm90IGFwcGxpY2FibGUuIERvIG5vdCBzZXQgdGhpcyBhdHRyaWJ1dGUuXG4gICAgKi9cbiAgICBGQUFTX1ZFUlNJT046ICdmYWFzLnZlcnNpb24nLFxuICAgIC8qKlxuICAgICogVGhlIGV4ZWN1dGlvbiBlbnZpcm9ubWVudCBJRCBhcyBhIHN0cmluZywgdGhhdCB3aWxsIGJlIHBvdGVudGlhbGx5IHJldXNlZCBmb3Igb3RoZXIgaW52b2NhdGlvbnMgdG8gdGhlIHNhbWUgZnVuY3Rpb24vZnVuY3Rpb24gdmVyc2lvbi5cbiAgICAqXG4gICAgKiBOb3RlOiAqICoqQVdTIExhbWJkYToqKiBVc2UgdGhlIChmdWxsKSBsb2cgc3RyZWFtIG5hbWUuXG4gICAgKi9cbiAgICBGQUFTX0lOU1RBTkNFOiAnZmFhcy5pbnN0YW5jZScsXG4gICAgLyoqXG4gICAgKiBUaGUgYW1vdW50IG9mIG1lbW9yeSBhdmFpbGFibGUgdG8gdGhlIHNlcnZlcmxlc3MgZnVuY3Rpb24gaW4gTWlCLlxuICAgICpcbiAgICAqIE5vdGU6IEl0JiMzOTtzIHJlY29tbWVuZGVkIHRvIHNldCB0aGlzIGF0dHJpYnV0ZSBzaW5jZSBlLmcuIHRvbyBsaXR0bGUgbWVtb3J5IGNhbiBlYXNpbHkgc3RvcCBhIEphdmEgQVdTIExhbWJkYSBmdW5jdGlvbiBmcm9tIHdvcmtpbmcgY29ycmVjdGx5LiBPbiBBV1MgTGFtYmRhLCB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGUgYEFXU19MQU1CREFfRlVOQ1RJT05fTUVNT1JZX1NJWkVgIHByb3ZpZGVzIHRoaXMgaW5mb3JtYXRpb24uXG4gICAgKi9cbiAgICBGQUFTX01BWF9NRU1PUlk6ICdmYWFzLm1heF9tZW1vcnknLFxuICAgIC8qKlxuICAgICogVW5pcXVlIGhvc3QgSUQuIEZvciBDbG91ZCwgdGhpcyBtdXN0IGJlIHRoZSBpbnN0YW5jZV9pZCBhc3NpZ25lZCBieSB0aGUgY2xvdWQgcHJvdmlkZXIuXG4gICAgKi9cbiAgICBIT1NUX0lEOiAnaG9zdC5pZCcsXG4gICAgLyoqXG4gICAgKiBOYW1lIG9mIHRoZSBob3N0LiBPbiBVbml4IHN5c3RlbXMsIGl0IG1heSBjb250YWluIHdoYXQgdGhlIGhvc3RuYW1lIGNvbW1hbmQgcmV0dXJucywgb3IgdGhlIGZ1bGx5IHF1YWxpZmllZCBob3N0bmFtZSwgb3IgYW5vdGhlciBuYW1lIHNwZWNpZmllZCBieSB0aGUgdXNlci5cbiAgICAqL1xuICAgIEhPU1RfTkFNRTogJ2hvc3QubmFtZScsXG4gICAgLyoqXG4gICAgKiBUeXBlIG9mIGhvc3QuIEZvciBDbG91ZCwgdGhpcyBtdXN0IGJlIHRoZSBtYWNoaW5lIHR5cGUuXG4gICAgKi9cbiAgICBIT1NUX1RZUEU6ICdob3N0LnR5cGUnLFxuICAgIC8qKlxuICAgICogVGhlIENQVSBhcmNoaXRlY3R1cmUgdGhlIGhvc3Qgc3lzdGVtIGlzIHJ1bm5pbmcgb24uXG4gICAgKi9cbiAgICBIT1NUX0FSQ0g6ICdob3N0LmFyY2gnLFxuICAgIC8qKlxuICAgICogTmFtZSBvZiB0aGUgVk0gaW1hZ2Ugb3IgT1MgaW5zdGFsbCB0aGUgaG9zdCB3YXMgaW5zdGFudGlhdGVkIGZyb20uXG4gICAgKi9cbiAgICBIT1NUX0lNQUdFX05BTUU6ICdob3N0LmltYWdlLm5hbWUnLFxuICAgIC8qKlxuICAgICogVk0gaW1hZ2UgSUQuIEZvciBDbG91ZCwgdGhpcyB2YWx1ZSBpcyBmcm9tIHRoZSBwcm92aWRlci5cbiAgICAqL1xuICAgIEhPU1RfSU1BR0VfSUQ6ICdob3N0LmltYWdlLmlkJyxcbiAgICAvKipcbiAgICAqIFRoZSB2ZXJzaW9uIHN0cmluZyBvZiB0aGUgVk0gaW1hZ2UgYXMgZGVmaW5lZCBpbiBbVmVyc2lvbiBBdHRyaWJ1dGVzXShSRUFETUUubWQjdmVyc2lvbi1hdHRyaWJ1dGVzKS5cbiAgICAqL1xuICAgIEhPU1RfSU1BR0VfVkVSU0lPTjogJ2hvc3QuaW1hZ2UudmVyc2lvbicsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgY2x1c3Rlci5cbiAgICAqL1xuICAgIEs4U19DTFVTVEVSX05BTUU6ICdrOHMuY2x1c3Rlci5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBuYW1lIG9mIHRoZSBOb2RlLlxuICAgICovXG4gICAgSzhTX05PREVfTkFNRTogJ2s4cy5ub2RlLm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIFVJRCBvZiB0aGUgTm9kZS5cbiAgICAqL1xuICAgIEs4U19OT0RFX1VJRDogJ2s4cy5ub2RlLnVpZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgbmFtZXNwYWNlIHRoYXQgdGhlIHBvZCBpcyBydW5uaW5nIGluLlxuICAgICovXG4gICAgSzhTX05BTUVTUEFDRV9OQU1FOiAnazhzLm5hbWVzcGFjZS5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBVSUQgb2YgdGhlIFBvZC5cbiAgICAqL1xuICAgIEs4U19QT0RfVUlEOiAnazhzLnBvZC51aWQnLFxuICAgIC8qKlxuICAgICogVGhlIG5hbWUgb2YgdGhlIFBvZC5cbiAgICAqL1xuICAgIEs4U19QT0RfTkFNRTogJ2s4cy5wb2QubmFtZScsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgQ29udGFpbmVyIGluIGEgUG9kIHRlbXBsYXRlLlxuICAgICovXG4gICAgSzhTX0NPTlRBSU5FUl9OQU1FOiAnazhzLmNvbnRhaW5lci5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBVSUQgb2YgdGhlIFJlcGxpY2FTZXQuXG4gICAgKi9cbiAgICBLOFNfUkVQTElDQVNFVF9VSUQ6ICdrOHMucmVwbGljYXNldC51aWQnLFxuICAgIC8qKlxuICAgICogVGhlIG5hbWUgb2YgdGhlIFJlcGxpY2FTZXQuXG4gICAgKi9cbiAgICBLOFNfUkVQTElDQVNFVF9OQU1FOiAnazhzLnJlcGxpY2FzZXQubmFtZScsXG4gICAgLyoqXG4gICAgKiBUaGUgVUlEIG9mIHRoZSBEZXBsb3ltZW50LlxuICAgICovXG4gICAgSzhTX0RFUExPWU1FTlRfVUlEOiAnazhzLmRlcGxveW1lbnQudWlkJyxcbiAgICAvKipcbiAgICAqIFRoZSBuYW1lIG9mIHRoZSBEZXBsb3ltZW50LlxuICAgICovXG4gICAgSzhTX0RFUExPWU1FTlRfTkFNRTogJ2s4cy5kZXBsb3ltZW50Lm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIFVJRCBvZiB0aGUgU3RhdGVmdWxTZXQuXG4gICAgKi9cbiAgICBLOFNfU1RBVEVGVUxTRVRfVUlEOiAnazhzLnN0YXRlZnVsc2V0LnVpZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgU3RhdGVmdWxTZXQuXG4gICAgKi9cbiAgICBLOFNfU1RBVEVGVUxTRVRfTkFNRTogJ2s4cy5zdGF0ZWZ1bHNldC5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBVSUQgb2YgdGhlIERhZW1vblNldC5cbiAgICAqL1xuICAgIEs4U19EQUVNT05TRVRfVUlEOiAnazhzLmRhZW1vbnNldC51aWQnLFxuICAgIC8qKlxuICAgICogVGhlIG5hbWUgb2YgdGhlIERhZW1vblNldC5cbiAgICAqL1xuICAgIEs4U19EQUVNT05TRVRfTkFNRTogJ2s4cy5kYWVtb25zZXQubmFtZScsXG4gICAgLyoqXG4gICAgKiBUaGUgVUlEIG9mIHRoZSBKb2IuXG4gICAgKi9cbiAgICBLOFNfSk9CX1VJRDogJ2s4cy5qb2IudWlkJyxcbiAgICAvKipcbiAgICAqIFRoZSBuYW1lIG9mIHRoZSBKb2IuXG4gICAgKi9cbiAgICBLOFNfSk9CX05BTUU6ICdrOHMuam9iLm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIFVJRCBvZiB0aGUgQ3JvbkpvYi5cbiAgICAqL1xuICAgIEs4U19DUk9OSk9CX1VJRDogJ2s4cy5jcm9uam9iLnVpZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgQ3JvbkpvYi5cbiAgICAqL1xuICAgIEs4U19DUk9OSk9CX05BTUU6ICdrOHMuY3JvbmpvYi5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBvcGVyYXRpbmcgc3lzdGVtIHR5cGUuXG4gICAgKi9cbiAgICBPU19UWVBFOiAnb3MudHlwZScsXG4gICAgLyoqXG4gICAgKiBIdW1hbiByZWFkYWJsZSAobm90IGludGVuZGVkIHRvIGJlIHBhcnNlZCkgT1MgdmVyc2lvbiBpbmZvcm1hdGlvbiwgbGlrZSBlLmcuIHJlcG9ydGVkIGJ5IGB2ZXJgIG9yIGBsc2JfcmVsZWFzZSAtYWAgY29tbWFuZHMuXG4gICAgKi9cbiAgICBPU19ERVNDUklQVElPTjogJ29zLmRlc2NyaXB0aW9uJyxcbiAgICAvKipcbiAgICAqIEh1bWFuIHJlYWRhYmxlIG9wZXJhdGluZyBzeXN0ZW0gbmFtZS5cbiAgICAqL1xuICAgIE9TX05BTUU6ICdvcy5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSB2ZXJzaW9uIHN0cmluZyBvZiB0aGUgb3BlcmF0aW5nIHN5c3RlbSBhcyBkZWZpbmVkIGluIFtWZXJzaW9uIEF0dHJpYnV0ZXNdKC4uLy4uL3Jlc291cmNlL3NlbWFudGljX2NvbnZlbnRpb25zL1JFQURNRS5tZCN2ZXJzaW9uLWF0dHJpYnV0ZXMpLlxuICAgICovXG4gICAgT1NfVkVSU0lPTjogJ29zLnZlcnNpb24nLFxuICAgIC8qKlxuICAgICogUHJvY2VzcyBpZGVudGlmaWVyIChQSUQpLlxuICAgICovXG4gICAgUFJPQ0VTU19QSUQ6ICdwcm9jZXNzLnBpZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgcHJvY2VzcyBleGVjdXRhYmxlLiBPbiBMaW51eCBiYXNlZCBzeXN0ZW1zLCBjYW4gYmUgc2V0IHRvIHRoZSBgTmFtZWAgaW4gYHByb2MvW3BpZF0vc3RhdHVzYC4gT24gV2luZG93cywgY2FuIGJlIHNldCB0byB0aGUgYmFzZSBuYW1lIG9mIGBHZXRQcm9jZXNzSW1hZ2VGaWxlTmFtZVdgLlxuICAgICovXG4gICAgUFJPQ0VTU19FWEVDVVRBQkxFX05BTUU6ICdwcm9jZXNzLmV4ZWN1dGFibGUubmFtZScsXG4gICAgLyoqXG4gICAgKiBUaGUgZnVsbCBwYXRoIHRvIHRoZSBwcm9jZXNzIGV4ZWN1dGFibGUuIE9uIExpbnV4IGJhc2VkIHN5c3RlbXMsIGNhbiBiZSBzZXQgdG8gdGhlIHRhcmdldCBvZiBgcHJvYy9bcGlkXS9leGVgLiBPbiBXaW5kb3dzLCBjYW4gYmUgc2V0IHRvIHRoZSByZXN1bHQgb2YgYEdldFByb2Nlc3NJbWFnZUZpbGVOYW1lV2AuXG4gICAgKi9cbiAgICBQUk9DRVNTX0VYRUNVVEFCTEVfUEFUSDogJ3Byb2Nlc3MuZXhlY3V0YWJsZS5wYXRoJyxcbiAgICAvKipcbiAgICAqIFRoZSBjb21tYW5kIHVzZWQgdG8gbGF1bmNoIHRoZSBwcm9jZXNzIChpLmUuIHRoZSBjb21tYW5kIG5hbWUpLiBPbiBMaW51eCBiYXNlZCBzeXN0ZW1zLCBjYW4gYmUgc2V0IHRvIHRoZSB6ZXJvdGggc3RyaW5nIGluIGBwcm9jL1twaWRdL2NtZGxpbmVgLiBPbiBXaW5kb3dzLCBjYW4gYmUgc2V0IHRvIHRoZSBmaXJzdCBwYXJhbWV0ZXIgZXh0cmFjdGVkIGZyb20gYEdldENvbW1hbmRMaW5lV2AuXG4gICAgKi9cbiAgICBQUk9DRVNTX0NPTU1BTkQ6ICdwcm9jZXNzLmNvbW1hbmQnLFxuICAgIC8qKlxuICAgICogVGhlIGZ1bGwgY29tbWFuZCB1c2VkIHRvIGxhdW5jaCB0aGUgcHJvY2VzcyBhcyBhIHNpbmdsZSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBmdWxsIGNvbW1hbmQuIE9uIFdpbmRvd3MsIGNhbiBiZSBzZXQgdG8gdGhlIHJlc3VsdCBvZiBgR2V0Q29tbWFuZExpbmVXYC4gRG8gbm90IHNldCB0aGlzIGlmIHlvdSBoYXZlIHRvIGFzc2VtYmxlIGl0IGp1c3QgZm9yIG1vbml0b3Jpbmc7IHVzZSBgcHJvY2Vzcy5jb21tYW5kX2FyZ3NgIGluc3RlYWQuXG4gICAgKi9cbiAgICBQUk9DRVNTX0NPTU1BTkRfTElORTogJ3Byb2Nlc3MuY29tbWFuZF9saW5lJyxcbiAgICAvKipcbiAgICAqIEFsbCB0aGUgY29tbWFuZCBhcmd1bWVudHMgKGluY2x1ZGluZyB0aGUgY29tbWFuZC9leGVjdXRhYmxlIGl0c2VsZikgYXMgcmVjZWl2ZWQgYnkgdGhlIHByb2Nlc3MuIE9uIExpbnV4LWJhc2VkIHN5c3RlbXMgKGFuZCBzb21lIG90aGVyIFVuaXhvaWQgc3lzdGVtcyBzdXBwb3J0aW5nIHByb2NmcyksIGNhbiBiZSBzZXQgYWNjb3JkaW5nIHRvIHRoZSBsaXN0IG9mIG51bGwtZGVsaW1pdGVkIHN0cmluZ3MgZXh0cmFjdGVkIGZyb20gYHByb2MvW3BpZF0vY21kbGluZWAuIEZvciBsaWJjLWJhc2VkIGV4ZWN1dGFibGVzLCB0aGlzIHdvdWxkIGJlIHRoZSBmdWxsIGFyZ3YgdmVjdG9yIHBhc3NlZCB0byBgbWFpbmAuXG4gICAgKi9cbiAgICBQUk9DRVNTX0NPTU1BTkRfQVJHUzogJ3Byb2Nlc3MuY29tbWFuZF9hcmdzJyxcbiAgICAvKipcbiAgICAqIFRoZSB1c2VybmFtZSBvZiB0aGUgdXNlciB0aGF0IG93bnMgdGhlIHByb2Nlc3MuXG4gICAgKi9cbiAgICBQUk9DRVNTX09XTkVSOiAncHJvY2Vzcy5vd25lcicsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgcnVudGltZSBvZiB0aGlzIHByb2Nlc3MuIEZvciBjb21waWxlZCBuYXRpdmUgYmluYXJpZXMsIHRoaXMgU0hPVUxEIGJlIHRoZSBuYW1lIG9mIHRoZSBjb21waWxlci5cbiAgICAqL1xuICAgIFBST0NFU1NfUlVOVElNRV9OQU1FOiAncHJvY2Vzcy5ydW50aW1lLm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIHZlcnNpb24gb2YgdGhlIHJ1bnRpbWUgb2YgdGhpcyBwcm9jZXNzLCBhcyByZXR1cm5lZCBieSB0aGUgcnVudGltZSB3aXRob3V0IG1vZGlmaWNhdGlvbi5cbiAgICAqL1xuICAgIFBST0NFU1NfUlVOVElNRV9WRVJTSU9OOiAncHJvY2Vzcy5ydW50aW1lLnZlcnNpb24nLFxuICAgIC8qKlxuICAgICogQW4gYWRkaXRpb25hbCBkZXNjcmlwdGlvbiBhYm91dCB0aGUgcnVudGltZSBvZiB0aGUgcHJvY2VzcywgZm9yIGV4YW1wbGUgYSBzcGVjaWZpYyB2ZW5kb3IgY3VzdG9taXphdGlvbiBvZiB0aGUgcnVudGltZSBlbnZpcm9ubWVudC5cbiAgICAqL1xuICAgIFBST0NFU1NfUlVOVElNRV9ERVNDUklQVElPTjogJ3Byb2Nlc3MucnVudGltZS5kZXNjcmlwdGlvbicsXG4gICAgLyoqXG4gICAgKiBMb2dpY2FsIG5hbWUgb2YgdGhlIHNlcnZpY2UuXG4gICAgKlxuICAgICogTm90ZTogTVVTVCBiZSB0aGUgc2FtZSBmb3IgYWxsIGluc3RhbmNlcyBvZiBob3Jpem9udGFsbHkgc2NhbGVkIHNlcnZpY2VzLiBJZiB0aGUgdmFsdWUgd2FzIG5vdCBzcGVjaWZpZWQsIFNES3MgTVVTVCBmYWxsYmFjayB0byBgdW5rbm93bl9zZXJ2aWNlOmAgY29uY2F0ZW5hdGVkIHdpdGggW2Bwcm9jZXNzLmV4ZWN1dGFibGUubmFtZWBdKHByb2Nlc3MubWQjcHJvY2VzcyksIGUuZy4gYHVua25vd25fc2VydmljZTpiYXNoYC4gSWYgYHByb2Nlc3MuZXhlY3V0YWJsZS5uYW1lYCBpcyBub3QgYXZhaWxhYmxlLCB0aGUgdmFsdWUgTVVTVCBiZSBzZXQgdG8gYHVua25vd25fc2VydmljZWAuXG4gICAgKi9cbiAgICBTRVJWSUNFX05BTUU6ICdzZXJ2aWNlLm5hbWUnLFxuICAgIC8qKlxuICAgICogQSBuYW1lc3BhY2UgZm9yIGBzZXJ2aWNlLm5hbWVgLlxuICAgICpcbiAgICAqIE5vdGU6IEEgc3RyaW5nIHZhbHVlIGhhdmluZyBhIG1lYW5pbmcgdGhhdCBoZWxwcyB0byBkaXN0aW5ndWlzaCBhIGdyb3VwIG9mIHNlcnZpY2VzLCBmb3IgZXhhbXBsZSB0aGUgdGVhbSBuYW1lIHRoYXQgb3ducyBhIGdyb3VwIG9mIHNlcnZpY2VzLiBgc2VydmljZS5uYW1lYCBpcyBleHBlY3RlZCB0byBiZSB1bmlxdWUgd2l0aGluIHRoZSBzYW1lIG5hbWVzcGFjZS4gSWYgYHNlcnZpY2UubmFtZXNwYWNlYCBpcyBub3Qgc3BlY2lmaWVkIGluIHRoZSBSZXNvdXJjZSB0aGVuIGBzZXJ2aWNlLm5hbWVgIGlzIGV4cGVjdGVkIHRvIGJlIHVuaXF1ZSBmb3IgYWxsIHNlcnZpY2VzIHRoYXQgaGF2ZSBubyBleHBsaWNpdCBuYW1lc3BhY2UgZGVmaW5lZCAoc28gdGhlIGVtcHR5L3Vuc3BlY2lmaWVkIG5hbWVzcGFjZSBpcyBzaW1wbHkgb25lIG1vcmUgdmFsaWQgbmFtZXNwYWNlKS4gWmVyby1sZW5ndGggbmFtZXNwYWNlIHN0cmluZyBpcyBhc3N1bWVkIGVxdWFsIHRvIHVuc3BlY2lmaWVkIG5hbWVzcGFjZS5cbiAgICAqL1xuICAgIFNFUlZJQ0VfTkFNRVNQQUNFOiAnc2VydmljZS5uYW1lc3BhY2UnLFxuICAgIC8qKlxuICAgICogVGhlIHN0cmluZyBJRCBvZiB0aGUgc2VydmljZSBpbnN0YW5jZS5cbiAgICAqXG4gICAgKiBOb3RlOiBNVVNUIGJlIHVuaXF1ZSBmb3IgZWFjaCBpbnN0YW5jZSBvZiB0aGUgc2FtZSBgc2VydmljZS5uYW1lc3BhY2Usc2VydmljZS5uYW1lYCBwYWlyIChpbiBvdGhlciB3b3JkcyBgc2VydmljZS5uYW1lc3BhY2Usc2VydmljZS5uYW1lLHNlcnZpY2UuaW5zdGFuY2UuaWRgIHRyaXBsZXQgTVVTVCBiZSBnbG9iYWxseSB1bmlxdWUpLiBUaGUgSUQgaGVscHMgdG8gZGlzdGluZ3Vpc2ggaW5zdGFuY2VzIG9mIHRoZSBzYW1lIHNlcnZpY2UgdGhhdCBleGlzdCBhdCB0aGUgc2FtZSB0aW1lIChlLmcuIGluc3RhbmNlcyBvZiBhIGhvcml6b250YWxseSBzY2FsZWQgc2VydmljZSkuIEl0IGlzIHByZWZlcmFibGUgZm9yIHRoZSBJRCB0byBiZSBwZXJzaXN0ZW50IGFuZCBzdGF5IHRoZSBzYW1lIGZvciB0aGUgbGlmZXRpbWUgb2YgdGhlIHNlcnZpY2UgaW5zdGFuY2UsIGhvd2V2ZXIgaXQgaXMgYWNjZXB0YWJsZSB0aGF0IHRoZSBJRCBpcyBlcGhlbWVyYWwgYW5kIGNoYW5nZXMgZHVyaW5nIGltcG9ydGFudCBsaWZldGltZSBldmVudHMgZm9yIHRoZSBzZXJ2aWNlIChlLmcuIHNlcnZpY2UgcmVzdGFydHMpLiBJZiB0aGUgc2VydmljZSBoYXMgbm8gaW5oZXJlbnQgdW5pcXVlIElEIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIG9mIHRoaXMgYXR0cmlidXRlIGl0IGlzIHJlY29tbWVuZGVkIHRvIGdlbmVyYXRlIGEgcmFuZG9tIFZlcnNpb24gMSBvciBWZXJzaW9uIDQgUkZDIDQxMjIgVVVJRCAoc2VydmljZXMgYWltaW5nIGZvciByZXByb2R1Y2libGUgVVVJRHMgbWF5IGFsc28gdXNlIFZlcnNpb24gNSwgc2VlIFJGQyA0MTIyIGZvciBtb3JlIHJlY29tbWVuZGF0aW9ucykuXG4gICAgKi9cbiAgICBTRVJWSUNFX0lOU1RBTkNFX0lEOiAnc2VydmljZS5pbnN0YW5jZS5pZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgdmVyc2lvbiBzdHJpbmcgb2YgdGhlIHNlcnZpY2UgQVBJIG9yIGltcGxlbWVudGF0aW9uLlxuICAgICovXG4gICAgU0VSVklDRV9WRVJTSU9OOiAnc2VydmljZS52ZXJzaW9uJyxcbiAgICAvKipcbiAgICAqIFRoZSBuYW1lIG9mIHRoZSB0ZWxlbWV0cnkgU0RLIGFzIGRlZmluZWQgYWJvdmUuXG4gICAgKi9cbiAgICBURUxFTUVUUllfU0RLX05BTUU6ICd0ZWxlbWV0cnkuc2RrLm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIGxhbmd1YWdlIG9mIHRoZSB0ZWxlbWV0cnkgU0RLLlxuICAgICovXG4gICAgVEVMRU1FVFJZX1NES19MQU5HVUFHRTogJ3RlbGVtZXRyeS5zZGsubGFuZ3VhZ2UnLFxuICAgIC8qKlxuICAgICogVGhlIHZlcnNpb24gc3RyaW5nIG9mIHRoZSB0ZWxlbWV0cnkgU0RLLlxuICAgICovXG4gICAgVEVMRU1FVFJZX1NES19WRVJTSU9OOiAndGVsZW1ldHJ5LnNkay52ZXJzaW9uJyxcbiAgICAvKipcbiAgICAqIFRoZSB2ZXJzaW9uIHN0cmluZyBvZiB0aGUgYXV0byBpbnN0cnVtZW50YXRpb24gYWdlbnQsIGlmIHVzZWQuXG4gICAgKi9cbiAgICBURUxFTUVUUllfQVVUT19WRVJTSU9OOiAndGVsZW1ldHJ5LmF1dG8udmVyc2lvbicsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgd2ViIGVuZ2luZS5cbiAgICAqL1xuICAgIFdFQkVOR0lORV9OQU1FOiAnd2ViZW5naW5lLm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIHZlcnNpb24gb2YgdGhlIHdlYiBlbmdpbmUuXG4gICAgKi9cbiAgICBXRUJFTkdJTkVfVkVSU0lPTjogJ3dlYmVuZ2luZS52ZXJzaW9uJyxcbiAgICAvKipcbiAgICAqIEFkZGl0aW9uYWwgZGVzY3JpcHRpb24gb2YgdGhlIHdlYiBlbmdpbmUgKGUuZy4gZGV0YWlsZWQgdmVyc2lvbiBhbmQgZWRpdGlvbiBpbmZvcm1hdGlvbikuXG4gICAgKi9cbiAgICBXRUJFTkdJTkVfREVTQ1JJUFRJT046ICd3ZWJlbmdpbmUuZGVzY3JpcHRpb24nLFxufTtcbmV4cG9ydCB2YXIgQ2xvdWRQcm92aWRlclZhbHVlcyA9IHtcbiAgICAvKiogQWxpYmFiYSBDbG91ZC4gKi9cbiAgICBBTElCQUJBX0NMT1VEOiAnYWxpYmFiYV9jbG91ZCcsXG4gICAgLyoqIEFtYXpvbiBXZWIgU2VydmljZXMuICovXG4gICAgQVdTOiAnYXdzJyxcbiAgICAvKiogTWljcm9zb2Z0IEF6dXJlLiAqL1xuICAgIEFaVVJFOiAnYXp1cmUnLFxuICAgIC8qKiBHb29nbGUgQ2xvdWQgUGxhdGZvcm0uICovXG4gICAgR0NQOiAnZ2NwJyxcbn07XG5leHBvcnQgdmFyIENsb3VkUGxhdGZvcm1WYWx1ZXMgPSB7XG4gICAgLyoqIEFsaWJhYmEgQ2xvdWQgRWxhc3RpYyBDb21wdXRlIFNlcnZpY2UuICovXG4gICAgQUxJQkFCQV9DTE9VRF9FQ1M6ICdhbGliYWJhX2Nsb3VkX2VjcycsXG4gICAgLyoqIEFsaWJhYmEgQ2xvdWQgRnVuY3Rpb24gQ29tcHV0ZS4gKi9cbiAgICBBTElCQUJBX0NMT1VEX0ZDOiAnYWxpYmFiYV9jbG91ZF9mYycsXG4gICAgLyoqIEFXUyBFbGFzdGljIENvbXB1dGUgQ2xvdWQuICovXG4gICAgQVdTX0VDMjogJ2F3c19lYzInLFxuICAgIC8qKiBBV1MgRWxhc3RpYyBDb250YWluZXIgU2VydmljZS4gKi9cbiAgICBBV1NfRUNTOiAnYXdzX2VjcycsXG4gICAgLyoqIEFXUyBFbGFzdGljIEt1YmVybmV0ZXMgU2VydmljZS4gKi9cbiAgICBBV1NfRUtTOiAnYXdzX2VrcycsXG4gICAgLyoqIEFXUyBMYW1iZGEuICovXG4gICAgQVdTX0xBTUJEQTogJ2F3c19sYW1iZGEnLFxuICAgIC8qKiBBV1MgRWxhc3RpYyBCZWFuc3RhbGsuICovXG4gICAgQVdTX0VMQVNUSUNfQkVBTlNUQUxLOiAnYXdzX2VsYXN0aWNfYmVhbnN0YWxrJyxcbiAgICAvKiogQXp1cmUgVmlydHVhbCBNYWNoaW5lcy4gKi9cbiAgICBBWlVSRV9WTTogJ2F6dXJlX3ZtJyxcbiAgICAvKiogQXp1cmUgQ29udGFpbmVyIEluc3RhbmNlcy4gKi9cbiAgICBBWlVSRV9DT05UQUlORVJfSU5TVEFOQ0VTOiAnYXp1cmVfY29udGFpbmVyX2luc3RhbmNlcycsXG4gICAgLyoqIEF6dXJlIEt1YmVybmV0ZXMgU2VydmljZS4gKi9cbiAgICBBWlVSRV9BS1M6ICdhenVyZV9ha3MnLFxuICAgIC8qKiBBenVyZSBGdW5jdGlvbnMuICovXG4gICAgQVpVUkVfRlVOQ1RJT05TOiAnYXp1cmVfZnVuY3Rpb25zJyxcbiAgICAvKiogQXp1cmUgQXBwIFNlcnZpY2UuICovXG4gICAgQVpVUkVfQVBQX1NFUlZJQ0U6ICdhenVyZV9hcHBfc2VydmljZScsXG4gICAgLyoqIEdvb2dsZSBDbG91ZCBDb21wdXRlIEVuZ2luZSAoR0NFKS4gKi9cbiAgICBHQ1BfQ09NUFVURV9FTkdJTkU6ICdnY3BfY29tcHV0ZV9lbmdpbmUnLFxuICAgIC8qKiBHb29nbGUgQ2xvdWQgUnVuLiAqL1xuICAgIEdDUF9DTE9VRF9SVU46ICdnY3BfY2xvdWRfcnVuJyxcbiAgICAvKiogR29vZ2xlIENsb3VkIEt1YmVybmV0ZXMgRW5naW5lIChHS0UpLiAqL1xuICAgIEdDUF9LVUJFUk5FVEVTX0VOR0lORTogJ2djcF9rdWJlcm5ldGVzX2VuZ2luZScsXG4gICAgLyoqIEdvb2dsZSBDbG91ZCBGdW5jdGlvbnMgKEdDRikuICovXG4gICAgR0NQX0NMT1VEX0ZVTkNUSU9OUzogJ2djcF9jbG91ZF9mdW5jdGlvbnMnLFxuICAgIC8qKiBHb29nbGUgQ2xvdWQgQXBwIEVuZ2luZSAoR0FFKS4gKi9cbiAgICBHQ1BfQVBQX0VOR0lORTogJ2djcF9hcHBfZW5naW5lJyxcbn07XG5leHBvcnQgdmFyIEF3c0Vjc0xhdW5jaHR5cGVWYWx1ZXMgPSB7XG4gICAgLyoqIGVjMi4gKi9cbiAgICBFQzI6ICdlYzInLFxuICAgIC8qKiBmYXJnYXRlLiAqL1xuICAgIEZBUkdBVEU6ICdmYXJnYXRlJyxcbn07XG5leHBvcnQgdmFyIEhvc3RBcmNoVmFsdWVzID0ge1xuICAgIC8qKiBBTUQ2NC4gKi9cbiAgICBBTUQ2NDogJ2FtZDY0JyxcbiAgICAvKiogQVJNMzIuICovXG4gICAgQVJNMzI6ICdhcm0zMicsXG4gICAgLyoqIEFSTTY0LiAqL1xuICAgIEFSTTY0OiAnYXJtNjQnLFxuICAgIC8qKiBJdGFuaXVtLiAqL1xuICAgIElBNjQ6ICdpYTY0JyxcbiAgICAvKiogMzItYml0IFBvd2VyUEMuICovXG4gICAgUFBDMzI6ICdwcGMzMicsXG4gICAgLyoqIDY0LWJpdCBQb3dlclBDLiAqL1xuICAgIFBQQzY0OiAncHBjNjQnLFxuICAgIC8qKiAzMi1iaXQgeDg2LiAqL1xuICAgIFg4NjogJ3g4NicsXG59O1xuZXhwb3J0IHZhciBPc1R5cGVWYWx1ZXMgPSB7XG4gICAgLyoqIE1pY3Jvc29mdCBXaW5kb3dzLiAqL1xuICAgIFdJTkRPV1M6ICd3aW5kb3dzJyxcbiAgICAvKiogTGludXguICovXG4gICAgTElOVVg6ICdsaW51eCcsXG4gICAgLyoqIEFwcGxlIERhcndpbi4gKi9cbiAgICBEQVJXSU46ICdkYXJ3aW4nLFxuICAgIC8qKiBGcmVlQlNELiAqL1xuICAgIEZSRUVCU0Q6ICdmcmVlYnNkJyxcbiAgICAvKiogTmV0QlNELiAqL1xuICAgIE5FVEJTRDogJ25ldGJzZCcsXG4gICAgLyoqIE9wZW5CU0QuICovXG4gICAgT1BFTkJTRDogJ29wZW5ic2QnLFxuICAgIC8qKiBEcmFnb25GbHkgQlNELiAqL1xuICAgIERSQUdPTkZMWUJTRDogJ2RyYWdvbmZseWJzZCcsXG4gICAgLyoqIEhQLVVYIChIZXdsZXR0IFBhY2thcmQgVW5peCkuICovXG4gICAgSFBVWDogJ2hwdXgnLFxuICAgIC8qKiBBSVggKEFkdmFuY2VkIEludGVyYWN0aXZlIGVYZWN1dGl2ZSkuICovXG4gICAgQUlYOiAnYWl4JyxcbiAgICAvKiogT3JhY2xlIFNvbGFyaXMuICovXG4gICAgU09MQVJJUzogJ3NvbGFyaXMnLFxuICAgIC8qKiBJQk0gei9PUy4gKi9cbiAgICBaX09TOiAnel9vcycsXG59O1xuZXhwb3J0IHZhciBUZWxlbWV0cnlTZGtMYW5ndWFnZVZhbHVlcyA9IHtcbiAgICAvKiogY3BwLiAqL1xuICAgIENQUDogJ2NwcCcsXG4gICAgLyoqIGRvdG5ldC4gKi9cbiAgICBET1RORVQ6ICdkb3RuZXQnLFxuICAgIC8qKiBlcmxhbmcuICovXG4gICAgRVJMQU5HOiAnZXJsYW5nJyxcbiAgICAvKiogZ28uICovXG4gICAgR086ICdnbycsXG4gICAgLyoqIGphdmEuICovXG4gICAgSkFWQTogJ2phdmEnLFxuICAgIC8qKiBub2RlanMuICovXG4gICAgTk9ERUpTOiAnbm9kZWpzJyxcbiAgICAvKiogcGhwLiAqL1xuICAgIFBIUDogJ3BocCcsXG4gICAgLyoqIHB5dGhvbi4gKi9cbiAgICBQWVRIT046ICdweXRob24nLFxuICAgIC8qKiBydWJ5LiAqL1xuICAgIFJVQlk6ICdydWJ5JyxcbiAgICAvKiogd2VianMuICovXG4gICAgV0VCSlM6ICd3ZWJqcycsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2VtYW50aWNSZXNvdXJjZUF0dHJpYnV0ZXMuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vU2VtYW50aWNSZXNvdXJjZUF0dHJpYnV0ZXMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8vIERPIE5PVCBFRElULCB0aGlzIGlzIGFuIEF1dG8tZ2VuZXJhdGVkIGZpbGUgZnJvbSBzY3JpcHRzL3NlbWNvbnYvdGVtcGxhdGVzLy90ZW1wbGF0ZXMvU2VtYW50aWNBdHRyaWJ1dGVzLnRzLmoyXG5leHBvcnQgdmFyIFNlbWFudGljQXR0cmlidXRlcyA9IHtcbiAgICAvKipcbiAgICAqIFRoZSBmdWxsIGludm9rZWQgQVJOIGFzIHByb3ZpZGVkIG9uIHRoZSBgQ29udGV4dGAgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiAoYExhbWJkYS1SdW50aW1lLUludm9rZWQtRnVuY3Rpb24tQXJuYCBoZWFkZXIgb24gdGhlIGAvcnVudGltZS9pbnZvY2F0aW9uL25leHRgIGFwcGxpY2FibGUpLlxuICAgICpcbiAgICAqIE5vdGU6IFRoaXMgbWF5IGJlIGRpZmZlcmVudCBmcm9tIGBmYWFzLmlkYCBpZiBhbiBhbGlhcyBpcyBpbnZvbHZlZC5cbiAgICAqL1xuICAgIEFXU19MQU1CREFfSU5WT0tFRF9BUk46ICdhd3MubGFtYmRhLmludm9rZWRfYXJuJyxcbiAgICAvKipcbiAgICAqIEFuIGlkZW50aWZpZXIgZm9yIHRoZSBkYXRhYmFzZSBtYW5hZ2VtZW50IHN5c3RlbSAoREJNUykgcHJvZHVjdCBiZWluZyB1c2VkLiBTZWUgYmVsb3cgZm9yIGEgbGlzdCBvZiB3ZWxsLWtub3duIGlkZW50aWZpZXJzLlxuICAgICovXG4gICAgREJfU1lTVEVNOiAnZGIuc3lzdGVtJyxcbiAgICAvKipcbiAgICAqIFRoZSBjb25uZWN0aW9uIHN0cmluZyB1c2VkIHRvIGNvbm5lY3QgdG8gdGhlIGRhdGFiYXNlLiBJdCBpcyByZWNvbW1lbmRlZCB0byByZW1vdmUgZW1iZWRkZWQgY3JlZGVudGlhbHMuXG4gICAgKi9cbiAgICBEQl9DT05ORUNUSU9OX1NUUklORzogJ2RiLmNvbm5lY3Rpb25fc3RyaW5nJyxcbiAgICAvKipcbiAgICAqIFVzZXJuYW1lIGZvciBhY2Nlc3NpbmcgdGhlIGRhdGFiYXNlLlxuICAgICovXG4gICAgREJfVVNFUjogJ2RiLnVzZXInLFxuICAgIC8qKlxuICAgICogVGhlIGZ1bGx5LXF1YWxpZmllZCBjbGFzcyBuYW1lIG9mIHRoZSBbSmF2YSBEYXRhYmFzZSBDb25uZWN0aXZpdHkgKEpEQkMpXShodHRwczovL2RvY3Mub3JhY2xlLmNvbS9qYXZhc2UvOC9kb2NzL3RlY2hub3Rlcy9ndWlkZXMvamRiYy8pIGRyaXZlciB1c2VkIHRvIGNvbm5lY3QuXG4gICAgKi9cbiAgICBEQl9KREJDX0RSSVZFUl9DTEFTU05BTUU6ICdkYi5qZGJjLmRyaXZlcl9jbGFzc25hbWUnLFxuICAgIC8qKlxuICAgICogSWYgbm8gW3RlY2gtc3BlY2lmaWMgYXR0cmlidXRlXSgjY2FsbC1sZXZlbC1hdHRyaWJ1dGVzLWZvci1zcGVjaWZpYy10ZWNobm9sb2dpZXMpIGlzIGRlZmluZWQsIHRoaXMgYXR0cmlidXRlIGlzIHVzZWQgdG8gcmVwb3J0IHRoZSBuYW1lIG9mIHRoZSBkYXRhYmFzZSBiZWluZyBhY2Nlc3NlZC4gRm9yIGNvbW1hbmRzIHRoYXQgc3dpdGNoIHRoZSBkYXRhYmFzZSwgdGhpcyBzaG91bGQgYmUgc2V0IHRvIHRoZSB0YXJnZXQgZGF0YWJhc2UgKGV2ZW4gaWYgdGhlIGNvbW1hbmQgZmFpbHMpLlxuICAgICpcbiAgICAqIE5vdGU6IEluIHNvbWUgU1FMIGRhdGFiYXNlcywgdGhlIGRhdGFiYXNlIG5hbWUgdG8gYmUgdXNlZCBpcyBjYWxsZWQgJiMzNDtzY2hlbWEgbmFtZSYjMzQ7LlxuICAgICovXG4gICAgREJfTkFNRTogJ2RiLm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIGRhdGFiYXNlIHN0YXRlbWVudCBiZWluZyBleGVjdXRlZC5cbiAgICAqXG4gICAgKiBOb3RlOiBUaGUgdmFsdWUgbWF5IGJlIHNhbml0aXplZCB0byBleGNsdWRlIHNlbnNpdGl2ZSBpbmZvcm1hdGlvbi5cbiAgICAqL1xuICAgIERCX1NUQVRFTUVOVDogJ2RiLnN0YXRlbWVudCcsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgb3BlcmF0aW9uIGJlaW5nIGV4ZWN1dGVkLCBlLmcuIHRoZSBbTW9uZ29EQiBjb21tYW5kIG5hbWVdKGh0dHBzOi8vZG9jcy5tb25nb2RiLmNvbS9tYW51YWwvcmVmZXJlbmNlL2NvbW1hbmQvI2RhdGFiYXNlLW9wZXJhdGlvbnMpIHN1Y2ggYXMgYGZpbmRBbmRNb2RpZnlgLCBvciB0aGUgU1FMIGtleXdvcmQuXG4gICAgKlxuICAgICogTm90ZTogV2hlbiBzZXR0aW5nIHRoaXMgdG8gYW4gU1FMIGtleXdvcmQsIGl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBhdHRlbXB0IGFueSBjbGllbnQtc2lkZSBwYXJzaW5nIG9mIGBkYi5zdGF0ZW1lbnRgIGp1c3QgdG8gZ2V0IHRoaXMgcHJvcGVydHksIGJ1dCBpdCBzaG91bGQgYmUgc2V0IGlmIHRoZSBvcGVyYXRpb24gbmFtZSBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBiZWluZyBpbnN0cnVtZW50ZWQuIElmIHRoZSBTUUwgc3RhdGVtZW50IGhhcyBhbiBhbWJpZ3VvdXMgb3BlcmF0aW9uLCBvciBwZXJmb3JtcyBtb3JlIHRoYW4gb25lIG9wZXJhdGlvbiwgdGhpcyB2YWx1ZSBtYXkgYmUgb21pdHRlZC5cbiAgICAqL1xuICAgIERCX09QRVJBVElPTjogJ2RiLm9wZXJhdGlvbicsXG4gICAgLyoqXG4gICAgKiBUaGUgTWljcm9zb2Z0IFNRTCBTZXJ2ZXIgW2luc3RhbmNlIG5hbWVdKGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL3NxbC9jb25uZWN0L2pkYmMvYnVpbGRpbmctdGhlLWNvbm5lY3Rpb24tdXJsP3ZpZXc9c3FsLXNlcnZlci12ZXIxNSkgY29ubmVjdGluZyB0by4gVGhpcyBuYW1lIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBwb3J0IG9mIGEgbmFtZWQgaW5zdGFuY2UuXG4gICAgKlxuICAgICogTm90ZTogSWYgc2V0dGluZyBhIGBkYi5tc3NxbC5pbnN0YW5jZV9uYW1lYCwgYG5ldC5wZWVyLnBvcnRgIGlzIG5vIGxvbmdlciByZXF1aXJlZCAoYnV0IHN0aWxsIHJlY29tbWVuZGVkIGlmIG5vbi1zdGFuZGFyZCkuXG4gICAgKi9cbiAgICBEQl9NU1NRTF9JTlNUQU5DRV9OQU1FOiAnZGIubXNzcWwuaW5zdGFuY2VfbmFtZScsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUga2V5c3BhY2UgYmVpbmcgYWNjZXNzZWQuIFRvIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgZ2VuZXJpYyBgZGIubmFtZWAgYXR0cmlidXRlLlxuICAgICovXG4gICAgREJfQ0FTU0FORFJBX0tFWVNQQUNFOiAnZGIuY2Fzc2FuZHJhLmtleXNwYWNlJyxcbiAgICAvKipcbiAgICAqIFRoZSBmZXRjaCBzaXplIHVzZWQgZm9yIHBhZ2luZywgaS5lLiBob3cgbWFueSByb3dzIHdpbGwgYmUgcmV0dXJuZWQgYXQgb25jZS5cbiAgICAqL1xuICAgIERCX0NBU1NBTkRSQV9QQUdFX1NJWkU6ICdkYi5jYXNzYW5kcmEucGFnZV9zaXplJyxcbiAgICAvKipcbiAgICAqIFRoZSBjb25zaXN0ZW5jeSBsZXZlbCBvZiB0aGUgcXVlcnkuIEJhc2VkIG9uIGNvbnNpc3RlbmN5IHZhbHVlcyBmcm9tIFtDUUxdKGh0dHBzOi8vZG9jcy5kYXRhc3RheC5jb20vZW4vY2Fzc2FuZHJhLW9zcy8zLjAvY2Fzc2FuZHJhL2RtbC9kbWxDb25maWdDb25zaXN0ZW5jeS5odG1sKS5cbiAgICAqL1xuICAgIERCX0NBU1NBTkRSQV9DT05TSVNURU5DWV9MRVZFTDogJ2RiLmNhc3NhbmRyYS5jb25zaXN0ZW5jeV9sZXZlbCcsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgcHJpbWFyeSB0YWJsZSB0aGF0IHRoZSBvcGVyYXRpb24gaXMgYWN0aW5nIHVwb24sIGluY2x1ZGluZyB0aGUgc2NoZW1hIG5hbWUgKGlmIGFwcGxpY2FibGUpLlxuICAgICpcbiAgICAqIE5vdGU6IFRoaXMgbWlycm9ycyB0aGUgZGIuc3FsLnRhYmxlIGF0dHJpYnV0ZSBidXQgcmVmZXJlbmNlcyBjYXNzYW5kcmEgcmF0aGVyIHRoYW4gc3FsLiBJdCBpcyBub3QgcmVjb21tZW5kZWQgdG8gYXR0ZW1wdCBhbnkgY2xpZW50LXNpZGUgcGFyc2luZyBvZiBgZGIuc3RhdGVtZW50YCBqdXN0IHRvIGdldCB0aGlzIHByb3BlcnR5LCBidXQgaXQgc2hvdWxkIGJlIHNldCBpZiBpdCBpcyBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBiZWluZyBpbnN0cnVtZW50ZWQuIElmIHRoZSBvcGVyYXRpb24gaXMgYWN0aW5nIHVwb24gYW4gYW5vbnltb3VzIHRhYmxlLCBvciBtb3JlIHRoYW4gb25lIHRhYmxlLCB0aGlzIHZhbHVlIE1VU1QgTk9UIGJlIHNldC5cbiAgICAqL1xuICAgIERCX0NBU1NBTkRSQV9UQUJMRTogJ2RiLmNhc3NhbmRyYS50YWJsZScsXG4gICAgLyoqXG4gICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgcXVlcnkgaXMgaWRlbXBvdGVudC5cbiAgICAqL1xuICAgIERCX0NBU1NBTkRSQV9JREVNUE9URU5DRTogJ2RiLmNhc3NhbmRyYS5pZGVtcG90ZW5jZScsXG4gICAgLyoqXG4gICAgKiBUaGUgbnVtYmVyIG9mIHRpbWVzIGEgcXVlcnkgd2FzIHNwZWN1bGF0aXZlbHkgZXhlY3V0ZWQuIE5vdCBzZXQgb3IgYDBgIGlmIHRoZSBxdWVyeSB3YXMgbm90IGV4ZWN1dGVkIHNwZWN1bGF0aXZlbHkuXG4gICAgKi9cbiAgICBEQl9DQVNTQU5EUkFfU1BFQ1VMQVRJVkVfRVhFQ1VUSU9OX0NPVU5UOiAnZGIuY2Fzc2FuZHJhLnNwZWN1bGF0aXZlX2V4ZWN1dGlvbl9jb3VudCcsXG4gICAgLyoqXG4gICAgKiBUaGUgSUQgb2YgdGhlIGNvb3JkaW5hdGluZyBub2RlIGZvciBhIHF1ZXJ5LlxuICAgICovXG4gICAgREJfQ0FTU0FORFJBX0NPT1JESU5BVE9SX0lEOiAnZGIuY2Fzc2FuZHJhLmNvb3JkaW5hdG9yLmlkJyxcbiAgICAvKipcbiAgICAqIFRoZSBkYXRhIGNlbnRlciBvZiB0aGUgY29vcmRpbmF0aW5nIG5vZGUgZm9yIGEgcXVlcnkuXG4gICAgKi9cbiAgICBEQl9DQVNTQU5EUkFfQ09PUkRJTkFUT1JfREM6ICdkYi5jYXNzYW5kcmEuY29vcmRpbmF0b3IuZGMnLFxuICAgIC8qKlxuICAgICogVGhlIFtIQmFzZSBuYW1lc3BhY2VdKGh0dHBzOi8vaGJhc2UuYXBhY2hlLm9yZy9ib29rLmh0bWwjX25hbWVzcGFjZSkgYmVpbmcgYWNjZXNzZWQuIFRvIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgZ2VuZXJpYyBgZGIubmFtZWAgYXR0cmlidXRlLlxuICAgICovXG4gICAgREJfSEJBU0VfTkFNRVNQQUNFOiAnZGIuaGJhc2UubmFtZXNwYWNlJyxcbiAgICAvKipcbiAgICAqIFRoZSBpbmRleCBvZiB0aGUgZGF0YWJhc2UgYmVpbmcgYWNjZXNzZWQgYXMgdXNlZCBpbiB0aGUgW2BTRUxFQ1RgIGNvbW1hbmRdKGh0dHBzOi8vcmVkaXMuaW8vY29tbWFuZHMvc2VsZWN0KSwgcHJvdmlkZWQgYXMgYW4gaW50ZWdlci4gVG8gYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZSBnZW5lcmljIGBkYi5uYW1lYCBhdHRyaWJ1dGUuXG4gICAgKi9cbiAgICBEQl9SRURJU19EQVRBQkFTRV9JTkRFWDogJ2RiLnJlZGlzLmRhdGFiYXNlX2luZGV4JyxcbiAgICAvKipcbiAgICAqIFRoZSBjb2xsZWN0aW9uIGJlaW5nIGFjY2Vzc2VkIHdpdGhpbiB0aGUgZGF0YWJhc2Ugc3RhdGVkIGluIGBkYi5uYW1lYC5cbiAgICAqL1xuICAgIERCX01PTkdPREJfQ09MTEVDVElPTjogJ2RiLm1vbmdvZGIuY29sbGVjdGlvbicsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgcHJpbWFyeSB0YWJsZSB0aGF0IHRoZSBvcGVyYXRpb24gaXMgYWN0aW5nIHVwb24sIGluY2x1ZGluZyB0aGUgc2NoZW1hIG5hbWUgKGlmIGFwcGxpY2FibGUpLlxuICAgICpcbiAgICAqIE5vdGU6IEl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBhdHRlbXB0IGFueSBjbGllbnQtc2lkZSBwYXJzaW5nIG9mIGBkYi5zdGF0ZW1lbnRgIGp1c3QgdG8gZ2V0IHRoaXMgcHJvcGVydHksIGJ1dCBpdCBzaG91bGQgYmUgc2V0IGlmIGl0IGlzIHByb3ZpZGVkIGJ5IHRoZSBsaWJyYXJ5IGJlaW5nIGluc3RydW1lbnRlZC4gSWYgdGhlIG9wZXJhdGlvbiBpcyBhY3RpbmcgdXBvbiBhbiBhbm9ueW1vdXMgdGFibGUsIG9yIG1vcmUgdGhhbiBvbmUgdGFibGUsIHRoaXMgdmFsdWUgTVVTVCBOT1QgYmUgc2V0LlxuICAgICovXG4gICAgREJfU1FMX1RBQkxFOiAnZGIuc3FsLnRhYmxlJyxcbiAgICAvKipcbiAgICAqIFRoZSB0eXBlIG9mIHRoZSBleGNlcHRpb24gKGl0cyBmdWxseS1xdWFsaWZpZWQgY2xhc3MgbmFtZSwgaWYgYXBwbGljYWJsZSkuIFRoZSBkeW5hbWljIHR5cGUgb2YgdGhlIGV4Y2VwdGlvbiBzaG91bGQgYmUgcHJlZmVycmVkIG92ZXIgdGhlIHN0YXRpYyB0eXBlIGluIGxhbmd1YWdlcyB0aGF0IHN1cHBvcnQgaXQuXG4gICAgKi9cbiAgICBFWENFUFRJT05fVFlQRTogJ2V4Y2VwdGlvbi50eXBlJyxcbiAgICAvKipcbiAgICAqIFRoZSBleGNlcHRpb24gbWVzc2FnZS5cbiAgICAqL1xuICAgIEVYQ0VQVElPTl9NRVNTQUdFOiAnZXhjZXB0aW9uLm1lc3NhZ2UnLFxuICAgIC8qKlxuICAgICogQSBzdGFja3RyYWNlIGFzIGEgc3RyaW5nIGluIHRoZSBuYXR1cmFsIHJlcHJlc2VudGF0aW9uIGZvciB0aGUgbGFuZ3VhZ2UgcnVudGltZS4gVGhlIHJlcHJlc2VudGF0aW9uIGlzIHRvIGJlIGRldGVybWluZWQgYW5kIGRvY3VtZW50ZWQgYnkgZWFjaCBsYW5ndWFnZSBTSUcuXG4gICAgKi9cbiAgICBFWENFUFRJT05fU1RBQ0tUUkFDRTogJ2V4Y2VwdGlvbi5zdGFja3RyYWNlJyxcbiAgICAvKipcbiAgICAqIFNIT1VMRCBiZSBzZXQgdG8gdHJ1ZSBpZiB0aGUgZXhjZXB0aW9uIGV2ZW50IGlzIHJlY29yZGVkIGF0IGEgcG9pbnQgd2hlcmUgaXQgaXMga25vd24gdGhhdCB0aGUgZXhjZXB0aW9uIGlzIGVzY2FwaW5nIHRoZSBzY29wZSBvZiB0aGUgc3Bhbi5cbiAgICAqXG4gICAgKiBOb3RlOiBBbiBleGNlcHRpb24gaXMgY29uc2lkZXJlZCB0byBoYXZlIGVzY2FwZWQgKG9yIGxlZnQpIHRoZSBzY29wZSBvZiBhIHNwYW4sXG4gIGlmIHRoYXQgc3BhbiBpcyBlbmRlZCB3aGlsZSB0aGUgZXhjZXB0aW9uIGlzIHN0aWxsIGxvZ2ljYWxseSAmIzM0O2luIGZsaWdodCYjMzQ7LlxuICBUaGlzIG1heSBiZSBhY3R1YWxseSAmIzM0O2luIGZsaWdodCYjMzQ7IGluIHNvbWUgbGFuZ3VhZ2VzIChlLmcuIGlmIHRoZSBleGNlcHRpb25cbiAgaXMgcGFzc2VkIHRvIGEgQ29udGV4dCBtYW5hZ2VyJiMzOTtzIGBfX2V4aXRfX2AgbWV0aG9kIGluIFB5dGhvbikgYnV0IHdpbGxcbiAgdXN1YWxseSBiZSBjYXVnaHQgYXQgdGhlIHBvaW50IG9mIHJlY29yZGluZyB0aGUgZXhjZXB0aW9uIGluIG1vc3QgbGFuZ3VhZ2VzLlxuICBcbiAgSXQgaXMgdXN1YWxseSBub3QgcG9zc2libGUgdG8gZGV0ZXJtaW5lIGF0IHRoZSBwb2ludCB3aGVyZSBhbiBleGNlcHRpb24gaXMgdGhyb3duXG4gIHdoZXRoZXIgaXQgd2lsbCBlc2NhcGUgdGhlIHNjb3BlIG9mIGEgc3Bhbi5cbiAgSG93ZXZlciwgaXQgaXMgdHJpdmlhbCB0byBrbm93IHRoYXQgYW4gZXhjZXB0aW9uXG4gIHdpbGwgZXNjYXBlLCBpZiBvbmUgY2hlY2tzIGZvciBhbiBhY3RpdmUgZXhjZXB0aW9uIGp1c3QgYmVmb3JlIGVuZGluZyB0aGUgc3BhbixcbiAgYXMgZG9uZSBpbiB0aGUgW2V4YW1wbGUgYWJvdmVdKCNleGNlcHRpb24tZW5kLWV4YW1wbGUpLlxuICBcbiAgSXQgZm9sbG93cyB0aGF0IGFuIGV4Y2VwdGlvbiBtYXkgc3RpbGwgZXNjYXBlIHRoZSBzY29wZSBvZiB0aGUgc3BhblxuICBldmVuIGlmIHRoZSBgZXhjZXB0aW9uLmVzY2FwZWRgIGF0dHJpYnV0ZSB3YXMgbm90IHNldCBvciBzZXQgdG8gZmFsc2UsXG4gIHNpbmNlIHRoZSBldmVudCBtaWdodCBoYXZlIGJlZW4gcmVjb3JkZWQgYXQgYSB0aW1lIHdoZXJlIGl0IHdhcyBub3RcbiAgY2xlYXIgd2hldGhlciB0aGUgZXhjZXB0aW9uIHdpbGwgZXNjYXBlLlxuICAgICovXG4gICAgRVhDRVBUSU9OX0VTQ0FQRUQ6ICdleGNlcHRpb24uZXNjYXBlZCcsXG4gICAgLyoqXG4gICAgKiBUeXBlIG9mIHRoZSB0cmlnZ2VyIG9uIHdoaWNoIHRoZSBmdW5jdGlvbiBpcyBleGVjdXRlZC5cbiAgICAqL1xuICAgIEZBQVNfVFJJR0dFUjogJ2ZhYXMudHJpZ2dlcicsXG4gICAgLyoqXG4gICAgKiBUaGUgZXhlY3V0aW9uIElEIG9mIHRoZSBjdXJyZW50IGZ1bmN0aW9uIGV4ZWN1dGlvbi5cbiAgICAqL1xuICAgIEZBQVNfRVhFQ1VUSU9OOiAnZmFhcy5leGVjdXRpb24nLFxuICAgIC8qKlxuICAgICogVGhlIG5hbWUgb2YgdGhlIHNvdXJjZSBvbiB3aGljaCB0aGUgdHJpZ2dlcmluZyBvcGVyYXRpb24gd2FzIHBlcmZvcm1lZC4gRm9yIGV4YW1wbGUsIGluIENsb3VkIFN0b3JhZ2Ugb3IgUzMgY29ycmVzcG9uZHMgdG8gdGhlIGJ1Y2tldCBuYW1lLCBhbmQgaW4gQ29zbW9zIERCIHRvIHRoZSBkYXRhYmFzZSBuYW1lLlxuICAgICovXG4gICAgRkFBU19ET0NVTUVOVF9DT0xMRUNUSU9OOiAnZmFhcy5kb2N1bWVudC5jb2xsZWN0aW9uJyxcbiAgICAvKipcbiAgICAqIERlc2NyaWJlcyB0aGUgdHlwZSBvZiB0aGUgb3BlcmF0aW9uIHRoYXQgd2FzIHBlcmZvcm1lZCBvbiB0aGUgZGF0YS5cbiAgICAqL1xuICAgIEZBQVNfRE9DVU1FTlRfT1BFUkFUSU9OOiAnZmFhcy5kb2N1bWVudC5vcGVyYXRpb24nLFxuICAgIC8qKlxuICAgICogQSBzdHJpbmcgY29udGFpbmluZyB0aGUgdGltZSB3aGVuIHRoZSBkYXRhIHdhcyBhY2Nlc3NlZCBpbiB0aGUgW0lTTyA4NjAxXShodHRwczovL3d3dy5pc28ub3JnL2lzby04NjAxLWRhdGUtYW5kLXRpbWUtZm9ybWF0Lmh0bWwpIGZvcm1hdCBleHByZXNzZWQgaW4gW1VUQ10oaHR0cHM6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWUpLlxuICAgICovXG4gICAgRkFBU19ET0NVTUVOVF9USU1FOiAnZmFhcy5kb2N1bWVudC50aW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBkb2N1bWVudCBuYW1lL3RhYmxlIHN1YmplY3RlZCB0byB0aGUgb3BlcmF0aW9uLiBGb3IgZXhhbXBsZSwgaW4gQ2xvdWQgU3RvcmFnZSBvciBTMyBpcyB0aGUgbmFtZSBvZiB0aGUgZmlsZSwgYW5kIGluIENvc21vcyBEQiB0aGUgdGFibGUgbmFtZS5cbiAgICAqL1xuICAgIEZBQVNfRE9DVU1FTlRfTkFNRTogJ2ZhYXMuZG9jdW1lbnQubmFtZScsXG4gICAgLyoqXG4gICAgKiBBIHN0cmluZyBjb250YWluaW5nIHRoZSBmdW5jdGlvbiBpbnZvY2F0aW9uIHRpbWUgaW4gdGhlIFtJU08gODYwMV0oaHR0cHM6Ly93d3cuaXNvLm9yZy9pc28tODYwMS1kYXRlLWFuZC10aW1lLWZvcm1hdC5odG1sKSBmb3JtYXQgZXhwcmVzc2VkIGluIFtVVENdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lKS5cbiAgICAqL1xuICAgIEZBQVNfVElNRTogJ2ZhYXMudGltZScsXG4gICAgLyoqXG4gICAgKiBBIHN0cmluZyBjb250YWluaW5nIHRoZSBzY2hlZHVsZSBwZXJpb2QgYXMgW0Nyb24gRXhwcmVzc2lvbl0oaHR0cHM6Ly9kb2NzLm9yYWNsZS5jb20vY2QvRTEyMDU4XzAxL2RvYy9kb2MuMTAxNC9lMTIwMzAvY3Jvbl9leHByZXNzaW9ucy5odG0pLlxuICAgICovXG4gICAgRkFBU19DUk9OOiAnZmFhcy5jcm9uJyxcbiAgICAvKipcbiAgICAqIEEgYm9vbGVhbiB0aGF0IGlzIHRydWUgaWYgdGhlIHNlcnZlcmxlc3MgZnVuY3Rpb24gaXMgZXhlY3V0ZWQgZm9yIHRoZSBmaXJzdCB0aW1lIChha2EgY29sZC1zdGFydCkuXG4gICAgKi9cbiAgICBGQUFTX0NPTERTVEFSVDogJ2ZhYXMuY29sZHN0YXJ0JyxcbiAgICAvKipcbiAgICAqIFRoZSBuYW1lIG9mIHRoZSBpbnZva2VkIGZ1bmN0aW9uLlxuICAgICpcbiAgICAqIE5vdGU6IFNIT1VMRCBiZSBlcXVhbCB0byB0aGUgYGZhYXMubmFtZWAgcmVzb3VyY2UgYXR0cmlidXRlIG9mIHRoZSBpbnZva2VkIGZ1bmN0aW9uLlxuICAgICovXG4gICAgRkFBU19JTlZPS0VEX05BTUU6ICdmYWFzLmludm9rZWRfbmFtZScsXG4gICAgLyoqXG4gICAgKiBUaGUgY2xvdWQgcHJvdmlkZXIgb2YgdGhlIGludm9rZWQgZnVuY3Rpb24uXG4gICAgKlxuICAgICogTm90ZTogU0hPVUxEIGJlIGVxdWFsIHRvIHRoZSBgY2xvdWQucHJvdmlkZXJgIHJlc291cmNlIGF0dHJpYnV0ZSBvZiB0aGUgaW52b2tlZCBmdW5jdGlvbi5cbiAgICAqL1xuICAgIEZBQVNfSU5WT0tFRF9QUk9WSURFUjogJ2ZhYXMuaW52b2tlZF9wcm92aWRlcicsXG4gICAgLyoqXG4gICAgKiBUaGUgY2xvdWQgcmVnaW9uIG9mIHRoZSBpbnZva2VkIGZ1bmN0aW9uLlxuICAgICpcbiAgICAqIE5vdGU6IFNIT1VMRCBiZSBlcXVhbCB0byB0aGUgYGNsb3VkLnJlZ2lvbmAgcmVzb3VyY2UgYXR0cmlidXRlIG9mIHRoZSBpbnZva2VkIGZ1bmN0aW9uLlxuICAgICovXG4gICAgRkFBU19JTlZPS0VEX1JFR0lPTjogJ2ZhYXMuaW52b2tlZF9yZWdpb24nLFxuICAgIC8qKlxuICAgICogVHJhbnNwb3J0IHByb3RvY29sIHVzZWQuIFNlZSBub3RlIGJlbG93LlxuICAgICovXG4gICAgTkVUX1RSQU5TUE9SVDogJ25ldC50cmFuc3BvcnQnLFxuICAgIC8qKlxuICAgICogUmVtb3RlIGFkZHJlc3Mgb2YgdGhlIHBlZXIgKGRvdHRlZCBkZWNpbWFsIGZvciBJUHY0IG9yIFtSRkM1OTUyXShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTk1MikgZm9yIElQdjYpLlxuICAgICovXG4gICAgTkVUX1BFRVJfSVA6ICduZXQucGVlci5pcCcsXG4gICAgLyoqXG4gICAgKiBSZW1vdGUgcG9ydCBudW1iZXIuXG4gICAgKi9cbiAgICBORVRfUEVFUl9QT1JUOiAnbmV0LnBlZXIucG9ydCcsXG4gICAgLyoqXG4gICAgKiBSZW1vdGUgaG9zdG5hbWUgb3Igc2ltaWxhciwgc2VlIG5vdGUgYmVsb3cuXG4gICAgKi9cbiAgICBORVRfUEVFUl9OQU1FOiAnbmV0LnBlZXIubmFtZScsXG4gICAgLyoqXG4gICAgKiBMaWtlIGBuZXQucGVlci5pcGAgYnV0IGZvciB0aGUgaG9zdCBJUC4gVXNlZnVsIGluIGNhc2Ugb2YgYSBtdWx0aS1JUCBob3N0LlxuICAgICovXG4gICAgTkVUX0hPU1RfSVA6ICduZXQuaG9zdC5pcCcsXG4gICAgLyoqXG4gICAgKiBMaWtlIGBuZXQucGVlci5wb3J0YCBidXQgZm9yIHRoZSBob3N0IHBvcnQuXG4gICAgKi9cbiAgICBORVRfSE9TVF9QT1JUOiAnbmV0Lmhvc3QucG9ydCcsXG4gICAgLyoqXG4gICAgKiBMb2NhbCBob3N0bmFtZSBvciBzaW1pbGFyLCBzZWUgbm90ZSBiZWxvdy5cbiAgICAqL1xuICAgIE5FVF9IT1NUX05BTUU6ICduZXQuaG9zdC5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBpbnRlcm5ldCBjb25uZWN0aW9uIHR5cGUgY3VycmVudGx5IGJlaW5nIHVzZWQgYnkgdGhlIGhvc3QuXG4gICAgKi9cbiAgICBORVRfSE9TVF9DT05ORUNUSU9OX1RZUEU6ICduZXQuaG9zdC5jb25uZWN0aW9uLnR5cGUnLFxuICAgIC8qKlxuICAgICogVGhpcyBkZXNjcmliZXMgbW9yZSBkZXRhaWxzIHJlZ2FyZGluZyB0aGUgY29ubmVjdGlvbi50eXBlLiBJdCBtYXkgYmUgdGhlIHR5cGUgb2YgY2VsbCB0ZWNobm9sb2d5IGNvbm5lY3Rpb24sIGJ1dCBpdCBjb3VsZCBiZSB1c2VkIGZvciBkZXNjcmliaW5nIGRldGFpbHMgYWJvdXQgYSB3aWZpIGNvbm5lY3Rpb24uXG4gICAgKi9cbiAgICBORVRfSE9TVF9DT05ORUNUSU9OX1NVQlRZUEU6ICduZXQuaG9zdC5jb25uZWN0aW9uLnN1YnR5cGUnLFxuICAgIC8qKlxuICAgICogVGhlIG5hbWUgb2YgdGhlIG1vYmlsZSBjYXJyaWVyLlxuICAgICovXG4gICAgTkVUX0hPU1RfQ0FSUklFUl9OQU1FOiAnbmV0Lmhvc3QuY2Fycmllci5uYW1lJyxcbiAgICAvKipcbiAgICAqIFRoZSBtb2JpbGUgY2FycmllciBjb3VudHJ5IGNvZGUuXG4gICAgKi9cbiAgICBORVRfSE9TVF9DQVJSSUVSX01DQzogJ25ldC5ob3N0LmNhcnJpZXIubWNjJyxcbiAgICAvKipcbiAgICAqIFRoZSBtb2JpbGUgY2FycmllciBuZXR3b3JrIGNvZGUuXG4gICAgKi9cbiAgICBORVRfSE9TVF9DQVJSSUVSX01OQzogJ25ldC5ob3N0LmNhcnJpZXIubW5jJyxcbiAgICAvKipcbiAgICAqIFRoZSBJU08gMzE2Ni0xIGFscGhhLTIgMi1jaGFyYWN0ZXIgY291bnRyeSBjb2RlIGFzc29jaWF0ZWQgd2l0aCB0aGUgbW9iaWxlIGNhcnJpZXIgbmV0d29yay5cbiAgICAqL1xuICAgIE5FVF9IT1NUX0NBUlJJRVJfSUNDOiAnbmV0Lmhvc3QuY2Fycmllci5pY2MnLFxuICAgIC8qKlxuICAgICogVGhlIFtgc2VydmljZS5uYW1lYF0oLi4vLi4vcmVzb3VyY2Uvc2VtYW50aWNfY29udmVudGlvbnMvUkVBRE1FLm1kI3NlcnZpY2UpIG9mIHRoZSByZW1vdGUgc2VydmljZS4gU0hPVUxEIGJlIGVxdWFsIHRvIHRoZSBhY3R1YWwgYHNlcnZpY2UubmFtZWAgcmVzb3VyY2UgYXR0cmlidXRlIG9mIHRoZSByZW1vdGUgc2VydmljZSBpZiBhbnkuXG4gICAgKi9cbiAgICBQRUVSX1NFUlZJQ0U6ICdwZWVyLnNlcnZpY2UnLFxuICAgIC8qKlxuICAgICogVXNlcm5hbWUgb3IgY2xpZW50X2lkIGV4dHJhY3RlZCBmcm9tIHRoZSBhY2Nlc3MgdG9rZW4gb3IgW0F1dGhvcml6YXRpb25dKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjM1I3NlY3Rpb24tNC4yKSBoZWFkZXIgaW4gdGhlIGluYm91bmQgcmVxdWVzdCBmcm9tIG91dHNpZGUgdGhlIHN5c3RlbS5cbiAgICAqL1xuICAgIEVORFVTRVJfSUQ6ICdlbmR1c2VyLmlkJyxcbiAgICAvKipcbiAgICAqIEFjdHVhbC9hc3N1bWVkIHJvbGUgdGhlIGNsaWVudCBpcyBtYWtpbmcgdGhlIHJlcXVlc3QgdW5kZXIgZXh0cmFjdGVkIGZyb20gdG9rZW4gb3IgYXBwbGljYXRpb24gc2VjdXJpdHkgY29udGV4dC5cbiAgICAqL1xuICAgIEVORFVTRVJfUk9MRTogJ2VuZHVzZXIucm9sZScsXG4gICAgLyoqXG4gICAgKiBTY29wZXMgb3IgZ3JhbnRlZCBhdXRob3JpdGllcyB0aGUgY2xpZW50IGN1cnJlbnRseSBwb3NzZXNzZXMgZXh0cmFjdGVkIGZyb20gdG9rZW4gb3IgYXBwbGljYXRpb24gc2VjdXJpdHkgY29udGV4dC4gVGhlIHZhbHVlIHdvdWxkIGNvbWUgZnJvbSB0aGUgc2NvcGUgYXNzb2NpYXRlZCB3aXRoIGFuIFtPQXV0aCAyLjAgQWNjZXNzIFRva2VuXShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OSNzZWN0aW9uLTMuMykgb3IgYW4gYXR0cmlidXRlIHZhbHVlIGluIGEgW1NBTUwgMi4wIEFzc2VydGlvbl0oaHR0cDovL2RvY3Mub2FzaXMtb3Blbi5vcmcvc2VjdXJpdHkvc2FtbC9Qb3N0Mi4wL3NzdGMtc2FtbC10ZWNoLW92ZXJ2aWV3LTIuMC5odG1sKS5cbiAgICAqL1xuICAgIEVORFVTRVJfU0NPUEU6ICdlbmR1c2VyLnNjb3BlJyxcbiAgICAvKipcbiAgICAqIEN1cnJlbnQgJiMzNDttYW5hZ2VkJiMzNDsgdGhyZWFkIElEIChhcyBvcHBvc2VkIHRvIE9TIHRocmVhZCBJRCkuXG4gICAgKi9cbiAgICBUSFJFQURfSUQ6ICd0aHJlYWQuaWQnLFxuICAgIC8qKlxuICAgICogQ3VycmVudCB0aHJlYWQgbmFtZS5cbiAgICAqL1xuICAgIFRIUkVBRF9OQU1FOiAndGhyZWFkLm5hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIG1ldGhvZCBvciBmdW5jdGlvbiBuYW1lLCBvciBlcXVpdmFsZW50ICh1c3VhbGx5IHJpZ2h0bW9zdCBwYXJ0IG9mIHRoZSBjb2RlIHVuaXQmIzM5O3MgbmFtZSkuXG4gICAgKi9cbiAgICBDT0RFX0ZVTkNUSU9OOiAnY29kZS5mdW5jdGlvbicsXG4gICAgLyoqXG4gICAgKiBUaGUgJiMzNDtuYW1lc3BhY2UmIzM0OyB3aXRoaW4gd2hpY2ggYGNvZGUuZnVuY3Rpb25gIGlzIGRlZmluZWQuIFVzdWFsbHkgdGhlIHF1YWxpZmllZCBjbGFzcyBvciBtb2R1bGUgbmFtZSwgc3VjaCB0aGF0IGBjb2RlLm5hbWVzcGFjZWAgKyBzb21lIHNlcGFyYXRvciArIGBjb2RlLmZ1bmN0aW9uYCBmb3JtIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBjb2RlIHVuaXQuXG4gICAgKi9cbiAgICBDT0RFX05BTUVTUEFDRTogJ2NvZGUubmFtZXNwYWNlJyxcbiAgICAvKipcbiAgICAqIFRoZSBzb3VyY2UgY29kZSBmaWxlIG5hbWUgdGhhdCBpZGVudGlmaWVzIHRoZSBjb2RlIHVuaXQgYXMgdW5pcXVlbHkgYXMgcG9zc2libGUgKHByZWZlcmFibHkgYW4gYWJzb2x1dGUgZmlsZSBwYXRoKS5cbiAgICAqL1xuICAgIENPREVfRklMRVBBVEg6ICdjb2RlLmZpbGVwYXRoJyxcbiAgICAvKipcbiAgICAqIFRoZSBsaW5lIG51bWJlciBpbiBgY29kZS5maWxlcGF0aGAgYmVzdCByZXByZXNlbnRpbmcgdGhlIG9wZXJhdGlvbi4gSXQgU0hPVUxEIHBvaW50IHdpdGhpbiB0aGUgY29kZSB1bml0IG5hbWVkIGluIGBjb2RlLmZ1bmN0aW9uYC5cbiAgICAqL1xuICAgIENPREVfTElORU5POiAnY29kZS5saW5lbm8nLFxuICAgIC8qKlxuICAgICogSFRUUCByZXF1ZXN0IG1ldGhvZC5cbiAgICAqL1xuICAgIEhUVFBfTUVUSE9EOiAnaHR0cC5tZXRob2QnLFxuICAgIC8qKlxuICAgICogRnVsbCBIVFRQIHJlcXVlc3QgVVJMIGluIHRoZSBmb3JtIGBzY2hlbWU6Ly9ob3N0Wzpwb3J0XS9wYXRoP3F1ZXJ5WyNmcmFnbWVudF1gLiBVc3VhbGx5IHRoZSBmcmFnbWVudCBpcyBub3QgdHJhbnNtaXR0ZWQgb3ZlciBIVFRQLCBidXQgaWYgaXQgaXMga25vd24sIGl0IHNob3VsZCBiZSBpbmNsdWRlZCBuZXZlcnRoZWxlc3MuXG4gICAgKlxuICAgICogTm90ZTogYGh0dHAudXJsYCBNVVNUIE5PVCBjb250YWluIGNyZWRlbnRpYWxzIHBhc3NlZCB2aWEgVVJMIGluIGZvcm0gb2YgYGh0dHBzOi8vdXNlcm5hbWU6cGFzc3dvcmRAd3d3LmV4YW1wbGUuY29tL2AuIEluIHN1Y2ggY2FzZSB0aGUgYXR0cmlidXRlJiMzOTtzIHZhbHVlIHNob3VsZCBiZSBgaHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vYC5cbiAgICAqL1xuICAgIEhUVFBfVVJMOiAnaHR0cC51cmwnLFxuICAgIC8qKlxuICAgICogVGhlIGZ1bGwgcmVxdWVzdCB0YXJnZXQgYXMgcGFzc2VkIGluIGEgSFRUUCByZXF1ZXN0IGxpbmUgb3IgZXF1aXZhbGVudC5cbiAgICAqL1xuICAgIEhUVFBfVEFSR0VUOiAnaHR0cC50YXJnZXQnLFxuICAgIC8qKlxuICAgICogVGhlIHZhbHVlIG9mIHRoZSBbSFRUUCBob3N0IGhlYWRlcl0oaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAjc2VjdGlvbi01LjQpLiBBbiBlbXB0eSBIb3N0IGhlYWRlciBzaG91bGQgYWxzbyBiZSByZXBvcnRlZCwgc2VlIG5vdGUuXG4gICAgKlxuICAgICogTm90ZTogV2hlbiB0aGUgaGVhZGVyIGlzIHByZXNlbnQgYnV0IGVtcHR5IHRoZSBhdHRyaWJ1dGUgU0hPVUxEIGJlIHNldCB0byB0aGUgZW1wdHkgc3RyaW5nLiBOb3RlIHRoYXQgdGhpcyBpcyBhIHZhbGlkIHNpdHVhdGlvbiB0aGF0IGlzIGV4cGVjdGVkIGluIGNlcnRhaW4gY2FzZXMsIGFjY29yZGluZyB0aGUgYWZvcmVtZW50aW9uZWQgW3NlY3Rpb24gb2YgUkZDIDcyMzBdKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMwI3NlY3Rpb24tNS40KS4gV2hlbiB0aGUgaGVhZGVyIGlzIG5vdCBzZXQgdGhlIGF0dHJpYnV0ZSBNVVNUIE5PVCBiZSBzZXQuXG4gICAgKi9cbiAgICBIVFRQX0hPU1Q6ICdodHRwLmhvc3QnLFxuICAgIC8qKlxuICAgICogVGhlIFVSSSBzY2hlbWUgaWRlbnRpZnlpbmcgdGhlIHVzZWQgcHJvdG9jb2wuXG4gICAgKi9cbiAgICBIVFRQX1NDSEVNRTogJ2h0dHAuc2NoZW1lJyxcbiAgICAvKipcbiAgICAqIFtIVFRQIHJlc3BvbnNlIHN0YXR1cyBjb2RlXShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYpLlxuICAgICovXG4gICAgSFRUUF9TVEFUVVNfQ09ERTogJ2h0dHAuc3RhdHVzX2NvZGUnLFxuICAgIC8qKlxuICAgICogS2luZCBvZiBIVFRQIHByb3RvY29sIHVzZWQuXG4gICAgKlxuICAgICogTm90ZTogSWYgYG5ldC50cmFuc3BvcnRgIGlzIG5vdCBzcGVjaWZpZWQsIGl0IGNhbiBiZSBhc3N1bWVkIHRvIGJlIGBJUC5UQ1BgIGV4Y2VwdCBpZiBgaHR0cC5mbGF2b3JgIGlzIGBRVUlDYCwgaW4gd2hpY2ggY2FzZSBgSVAuVURQYCBpcyBhc3N1bWVkLlxuICAgICovXG4gICAgSFRUUF9GTEFWT1I6ICdodHRwLmZsYXZvcicsXG4gICAgLyoqXG4gICAgKiBWYWx1ZSBvZiB0aGUgW0hUVFAgVXNlci1BZ2VudF0oaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi01LjUuMykgaGVhZGVyIHNlbnQgYnkgdGhlIGNsaWVudC5cbiAgICAqL1xuICAgIEhUVFBfVVNFUl9BR0VOVDogJ2h0dHAudXNlcl9hZ2VudCcsXG4gICAgLyoqXG4gICAgKiBUaGUgc2l6ZSBvZiB0aGUgcmVxdWVzdCBwYXlsb2FkIGJvZHkgaW4gYnl0ZXMuIFRoaXMgaXMgdGhlIG51bWJlciBvZiBieXRlcyB0cmFuc2ZlcnJlZCBleGNsdWRpbmcgaGVhZGVycyBhbmQgaXMgb2Z0ZW4sIGJ1dCBub3QgYWx3YXlzLCBwcmVzZW50IGFzIHRoZSBbQ29udGVudC1MZW5ndGhdKGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMwI3NlY3Rpb24tMy4zLjIpIGhlYWRlci4gRm9yIHJlcXVlc3RzIHVzaW5nIHRyYW5zcG9ydCBlbmNvZGluZywgdGhpcyBzaG91bGQgYmUgdGhlIGNvbXByZXNzZWQgc2l6ZS5cbiAgICAqL1xuICAgIEhUVFBfUkVRVUVTVF9DT05URU5UX0xFTkdUSDogJ2h0dHAucmVxdWVzdF9jb250ZW50X2xlbmd0aCcsXG4gICAgLyoqXG4gICAgKiBUaGUgc2l6ZSBvZiB0aGUgdW5jb21wcmVzc2VkIHJlcXVlc3QgcGF5bG9hZCBib2R5IGFmdGVyIHRyYW5zcG9ydCBkZWNvZGluZy4gTm90IHNldCBpZiB0cmFuc3BvcnQgZW5jb2Rpbmcgbm90IHVzZWQuXG4gICAgKi9cbiAgICBIVFRQX1JFUVVFU1RfQ09OVEVOVF9MRU5HVEhfVU5DT01QUkVTU0VEOiAnaHR0cC5yZXF1ZXN0X2NvbnRlbnRfbGVuZ3RoX3VuY29tcHJlc3NlZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgc2l6ZSBvZiB0aGUgcmVzcG9uc2UgcGF5bG9hZCBib2R5IGluIGJ5dGVzLiBUaGlzIGlzIHRoZSBudW1iZXIgb2YgYnl0ZXMgdHJhbnNmZXJyZWQgZXhjbHVkaW5nIGhlYWRlcnMgYW5kIGlzIG9mdGVuLCBidXQgbm90IGFsd2F5cywgcHJlc2VudCBhcyB0aGUgW0NvbnRlbnQtTGVuZ3RoXShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMCNzZWN0aW9uLTMuMy4yKSBoZWFkZXIuIEZvciByZXF1ZXN0cyB1c2luZyB0cmFuc3BvcnQgZW5jb2RpbmcsIHRoaXMgc2hvdWxkIGJlIHRoZSBjb21wcmVzc2VkIHNpemUuXG4gICAgKi9cbiAgICBIVFRQX1JFU1BPTlNFX0NPTlRFTlRfTEVOR1RIOiAnaHR0cC5yZXNwb25zZV9jb250ZW50X2xlbmd0aCcsXG4gICAgLyoqXG4gICAgKiBUaGUgc2l6ZSBvZiB0aGUgdW5jb21wcmVzc2VkIHJlc3BvbnNlIHBheWxvYWQgYm9keSBhZnRlciB0cmFuc3BvcnQgZGVjb2RpbmcuIE5vdCBzZXQgaWYgdHJhbnNwb3J0IGVuY29kaW5nIG5vdCB1c2VkLlxuICAgICovXG4gICAgSFRUUF9SRVNQT05TRV9DT05URU5UX0xFTkdUSF9VTkNPTVBSRVNTRUQ6ICdodHRwLnJlc3BvbnNlX2NvbnRlbnRfbGVuZ3RoX3VuY29tcHJlc3NlZCcsXG4gICAgLyoqXG4gICAgKiBUaGUgcHJpbWFyeSBzZXJ2ZXIgbmFtZSBvZiB0aGUgbWF0Y2hlZCB2aXJ0dWFsIGhvc3QuIFRoaXMgc2hvdWxkIGJlIG9idGFpbmVkIHZpYSBjb25maWd1cmF0aW9uLiBJZiBubyBzdWNoIGNvbmZpZ3VyYXRpb24gY2FuIGJlIG9idGFpbmVkLCB0aGlzIGF0dHJpYnV0ZSBNVVNUIE5PVCBiZSBzZXQgKCBgbmV0Lmhvc3QubmFtZWAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCkuXG4gICAgKlxuICAgICogTm90ZTogYGh0dHAudXJsYCBpcyB1c3VhbGx5IG5vdCByZWFkaWx5IGF2YWlsYWJsZSBvbiB0aGUgc2VydmVyIHNpZGUgYnV0IHdvdWxkIGhhdmUgdG8gYmUgYXNzZW1ibGVkIGluIGEgY3VtYmVyc29tZSBhbmQgc29tZXRpbWVzIGxvc3N5IHByb2Nlc3MgZnJvbSBvdGhlciBpbmZvcm1hdGlvbiAoc2VlIGUuZy4gb3Blbi10ZWxlbWV0cnkvb3BlbnRlbGVtZXRyeS1weXRob24vcHVsbC8xNDgpLiBJdCBpcyB0aHVzIHByZWZlcnJlZCB0byBzdXBwbHkgdGhlIHJhdyBkYXRhIHRoYXQgaXMgYXZhaWxhYmxlLlxuICAgICovXG4gICAgSFRUUF9TRVJWRVJfTkFNRTogJ2h0dHAuc2VydmVyX25hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIG1hdGNoZWQgcm91dGUgKHBhdGggdGVtcGxhdGUpLlxuICAgICovXG4gICAgSFRUUF9ST1VURTogJ2h0dHAucm91dGUnLFxuICAgIC8qKlxuICAgICogVGhlIElQIGFkZHJlc3Mgb2YgdGhlIG9yaWdpbmFsIGNsaWVudCBiZWhpbmQgYWxsIHByb3hpZXMsIGlmIGtub3duIChlLmcuIGZyb20gW1gtRm9yd2FyZGVkLUZvcl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9IZWFkZXJzL1gtRm9yd2FyZGVkLUZvcikpLlxuICAgICpcbiAgICAqIE5vdGU6IFRoaXMgaXMgbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIGFzIGBuZXQucGVlci5pcGAsIHdoaWNoIHdvdWxkXG4gIGlkZW50aWZ5IHRoZSBuZXR3b3JrLWxldmVsIHBlZXIsIHdoaWNoIG1heSBiZSBhIHByb3h5LlxuICBcbiAgVGhpcyBhdHRyaWJ1dGUgc2hvdWxkIGJlIHNldCB3aGVuIGEgc291cmNlIG9mIGluZm9ybWF0aW9uIGRpZmZlcmVudFxuICBmcm9tIHRoZSBvbmUgdXNlZCBmb3IgYG5ldC5wZWVyLmlwYCwgaXMgYXZhaWxhYmxlIGV2ZW4gaWYgdGhhdCBvdGhlclxuICBzb3VyY2UganVzdCBjb25maXJtcyB0aGUgc2FtZSB2YWx1ZSBhcyBgbmV0LnBlZXIuaXBgLlxuICBSYXRpb25hbGU6IEZvciBgbmV0LnBlZXIuaXBgLCBvbmUgdHlwaWNhbGx5IGRvZXMgbm90IGtub3cgaWYgaXRcbiAgY29tZXMgZnJvbSBhIHByb3h5LCByZXZlcnNlIHByb3h5LCBvciB0aGUgYWN0dWFsIGNsaWVudC4gU2V0dGluZ1xuICBgaHR0cC5jbGllbnRfaXBgIHdoZW4gaXQmIzM5O3MgdGhlIHNhbWUgYXMgYG5ldC5wZWVyLmlwYCBtZWFucyB0aGF0XG4gIG9uZSBpcyBhdCBsZWFzdCBzb21ld2hhdCBjb25maWRlbnQgdGhhdCB0aGUgYWRkcmVzcyBpcyBub3QgdGhhdCBvZlxuICB0aGUgY2xvc2VzdCBwcm94eS5cbiAgICAqL1xuICAgIEhUVFBfQ0xJRU5UX0lQOiAnaHR0cC5jbGllbnRfaXAnLFxuICAgIC8qKlxuICAgICogVGhlIGtleXMgaW4gdGhlIGBSZXF1ZXN0SXRlbXNgIG9iamVjdCBmaWVsZC5cbiAgICAqL1xuICAgIEFXU19EWU5BTU9EQl9UQUJMRV9OQU1FUzogJ2F3cy5keW5hbW9kYi50YWJsZV9uYW1lcycsXG4gICAgLyoqXG4gICAgKiBUaGUgSlNPTi1zZXJpYWxpemVkIHZhbHVlIG9mIGVhY2ggaXRlbSBpbiB0aGUgYENvbnN1bWVkQ2FwYWNpdHlgIHJlc3BvbnNlIGZpZWxkLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX0NPTlNVTUVEX0NBUEFDSVRZOiAnYXdzLmR5bmFtb2RiLmNvbnN1bWVkX2NhcGFjaXR5JyxcbiAgICAvKipcbiAgICAqIFRoZSBKU09OLXNlcmlhbGl6ZWQgdmFsdWUgb2YgdGhlIGBJdGVtQ29sbGVjdGlvbk1ldHJpY3NgIHJlc3BvbnNlIGZpZWxkLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX0lURU1fQ09MTEVDVElPTl9NRVRSSUNTOiAnYXdzLmR5bmFtb2RiLml0ZW1fY29sbGVjdGlvbl9tZXRyaWNzJyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYFByb3Zpc2lvbmVkVGhyb3VnaHB1dC5SZWFkQ2FwYWNpdHlVbml0c2AgcmVxdWVzdCBwYXJhbWV0ZXIuXG4gICAgKi9cbiAgICBBV1NfRFlOQU1PREJfUFJPVklTSU9ORURfUkVBRF9DQVBBQ0lUWTogJ2F3cy5keW5hbW9kYi5wcm92aXNpb25lZF9yZWFkX2NhcGFjaXR5JyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYFByb3Zpc2lvbmVkVGhyb3VnaHB1dC5Xcml0ZUNhcGFjaXR5VW5pdHNgIHJlcXVlc3QgcGFyYW1ldGVyLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX1BST1ZJU0lPTkVEX1dSSVRFX0NBUEFDSVRZOiAnYXdzLmR5bmFtb2RiLnByb3Zpc2lvbmVkX3dyaXRlX2NhcGFjaXR5JyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYENvbnNpc3RlbnRSZWFkYCByZXF1ZXN0IHBhcmFtZXRlci5cbiAgICAqL1xuICAgIEFXU19EWU5BTU9EQl9DT05TSVNURU5UX1JFQUQ6ICdhd3MuZHluYW1vZGIuY29uc2lzdGVudF9yZWFkJyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYFByb2plY3Rpb25FeHByZXNzaW9uYCByZXF1ZXN0IHBhcmFtZXRlci5cbiAgICAqL1xuICAgIEFXU19EWU5BTU9EQl9QUk9KRUNUSU9OOiAnYXdzLmR5bmFtb2RiLnByb2plY3Rpb24nLFxuICAgIC8qKlxuICAgICogVGhlIHZhbHVlIG9mIHRoZSBgTGltaXRgIHJlcXVlc3QgcGFyYW1ldGVyLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX0xJTUlUOiAnYXdzLmR5bmFtb2RiLmxpbWl0JyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYEF0dHJpYnV0ZXNUb0dldGAgcmVxdWVzdCBwYXJhbWV0ZXIuXG4gICAgKi9cbiAgICBBV1NfRFlOQU1PREJfQVRUUklCVVRFU19UT19HRVQ6ICdhd3MuZHluYW1vZGIuYXR0cmlidXRlc190b19nZXQnLFxuICAgIC8qKlxuICAgICogVGhlIHZhbHVlIG9mIHRoZSBgSW5kZXhOYW1lYCByZXF1ZXN0IHBhcmFtZXRlci5cbiAgICAqL1xuICAgIEFXU19EWU5BTU9EQl9JTkRFWF9OQU1FOiAnYXdzLmR5bmFtb2RiLmluZGV4X25hbWUnLFxuICAgIC8qKlxuICAgICogVGhlIHZhbHVlIG9mIHRoZSBgU2VsZWN0YCByZXF1ZXN0IHBhcmFtZXRlci5cbiAgICAqL1xuICAgIEFXU19EWU5BTU9EQl9TRUxFQ1Q6ICdhd3MuZHluYW1vZGIuc2VsZWN0JyxcbiAgICAvKipcbiAgICAqIFRoZSBKU09OLXNlcmlhbGl6ZWQgdmFsdWUgb2YgZWFjaCBpdGVtIG9mIHRoZSBgR2xvYmFsU2Vjb25kYXJ5SW5kZXhlc2AgcmVxdWVzdCBmaWVsZC5cbiAgICAqL1xuICAgIEFXU19EWU5BTU9EQl9HTE9CQUxfU0VDT05EQVJZX0lOREVYRVM6ICdhd3MuZHluYW1vZGIuZ2xvYmFsX3NlY29uZGFyeV9pbmRleGVzJyxcbiAgICAvKipcbiAgICAqIFRoZSBKU09OLXNlcmlhbGl6ZWQgdmFsdWUgb2YgZWFjaCBpdGVtIG9mIHRoZSBgTG9jYWxTZWNvbmRhcnlJbmRleGVzYCByZXF1ZXN0IGZpZWxkLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX0xPQ0FMX1NFQ09OREFSWV9JTkRFWEVTOiAnYXdzLmR5bmFtb2RiLmxvY2FsX3NlY29uZGFyeV9pbmRleGVzJyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYEV4Y2x1c2l2ZVN0YXJ0VGFibGVOYW1lYCByZXF1ZXN0IHBhcmFtZXRlci5cbiAgICAqL1xuICAgIEFXU19EWU5BTU9EQl9FWENMVVNJVkVfU1RBUlRfVEFCTEU6ICdhd3MuZHluYW1vZGIuZXhjbHVzaXZlX3N0YXJ0X3RhYmxlJyxcbiAgICAvKipcbiAgICAqIFRoZSB0aGUgbnVtYmVyIG9mIGl0ZW1zIGluIHRoZSBgVGFibGVOYW1lc2AgcmVzcG9uc2UgcGFyYW1ldGVyLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX1RBQkxFX0NPVU5UOiAnYXdzLmR5bmFtb2RiLnRhYmxlX2NvdW50JyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYFNjYW5JbmRleEZvcndhcmRgIHJlcXVlc3QgcGFyYW1ldGVyLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX1NDQU5fRk9SV0FSRDogJ2F3cy5keW5hbW9kYi5zY2FuX2ZvcndhcmQnLFxuICAgIC8qKlxuICAgICogVGhlIHZhbHVlIG9mIHRoZSBgU2VnbWVudGAgcmVxdWVzdCBwYXJhbWV0ZXIuXG4gICAgKi9cbiAgICBBV1NfRFlOQU1PREJfU0VHTUVOVDogJ2F3cy5keW5hbW9kYi5zZWdtZW50JyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYFRvdGFsU2VnbWVudHNgIHJlcXVlc3QgcGFyYW1ldGVyLlxuICAgICovXG4gICAgQVdTX0RZTkFNT0RCX1RPVEFMX1NFR01FTlRTOiAnYXdzLmR5bmFtb2RiLnRvdGFsX3NlZ21lbnRzJyxcbiAgICAvKipcbiAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgYENvdW50YCByZXNwb25zZSBwYXJhbWV0ZXIuXG4gICAgKi9cbiAgICBBV1NfRFlOQU1PREJfQ09VTlQ6ICdhd3MuZHluYW1vZGIuY291bnQnLFxuICAgIC8qKlxuICAgICogVGhlIHZhbHVlIG9mIHRoZSBgU2Nhbm5lZENvdW50YCByZXNwb25zZSBwYXJhbWV0ZXIuXG4gICAgKi9cbiAgICBBV1NfRFlOQU1PREJfU0NBTk5FRF9DT1VOVDogJ2F3cy5keW5hbW9kYi5zY2FubmVkX2NvdW50JyxcbiAgICAvKipcbiAgICAqIFRoZSBKU09OLXNlcmlhbGl6ZWQgdmFsdWUgb2YgZWFjaCBpdGVtIGluIHRoZSBgQXR0cmlidXRlRGVmaW5pdGlvbnNgIHJlcXVlc3QgZmllbGQuXG4gICAgKi9cbiAgICBBV1NfRFlOQU1PREJfQVRUUklCVVRFX0RFRklOSVRJT05TOiAnYXdzLmR5bmFtb2RiLmF0dHJpYnV0ZV9kZWZpbml0aW9ucycsXG4gICAgLyoqXG4gICAgKiBUaGUgSlNPTi1zZXJpYWxpemVkIHZhbHVlIG9mIGVhY2ggaXRlbSBpbiB0aGUgdGhlIGBHbG9iYWxTZWNvbmRhcnlJbmRleFVwZGF0ZXNgIHJlcXVlc3QgZmllbGQuXG4gICAgKi9cbiAgICBBV1NfRFlOQU1PREJfR0xPQkFMX1NFQ09OREFSWV9JTkRFWF9VUERBVEVTOiAnYXdzLmR5bmFtb2RiLmdsb2JhbF9zZWNvbmRhcnlfaW5kZXhfdXBkYXRlcycsXG4gICAgLyoqXG4gICAgKiBBIHN0cmluZyBpZGVudGlmeWluZyB0aGUgbWVzc2FnaW5nIHN5c3RlbS5cbiAgICAqL1xuICAgIE1FU1NBR0lOR19TWVNURU06ICdtZXNzYWdpbmcuc3lzdGVtJyxcbiAgICAvKipcbiAgICAqIFRoZSBtZXNzYWdlIGRlc3RpbmF0aW9uIG5hbWUuIFRoaXMgbWlnaHQgYmUgZXF1YWwgdG8gdGhlIHNwYW4gbmFtZSBidXQgaXMgcmVxdWlyZWQgbmV2ZXJ0aGVsZXNzLlxuICAgICovXG4gICAgTUVTU0FHSU5HX0RFU1RJTkFUSU9OOiAnbWVzc2FnaW5nLmRlc3RpbmF0aW9uJyxcbiAgICAvKipcbiAgICAqIFRoZSBraW5kIG9mIG1lc3NhZ2UgZGVzdGluYXRpb24uXG4gICAgKi9cbiAgICBNRVNTQUdJTkdfREVTVElOQVRJT05fS0lORDogJ21lc3NhZ2luZy5kZXN0aW5hdGlvbl9raW5kJyxcbiAgICAvKipcbiAgICAqIEEgYm9vbGVhbiB0aGF0IGlzIHRydWUgaWYgdGhlIG1lc3NhZ2UgZGVzdGluYXRpb24gaXMgdGVtcG9yYXJ5LlxuICAgICovXG4gICAgTUVTU0FHSU5HX1RFTVBfREVTVElOQVRJT046ICdtZXNzYWdpbmcudGVtcF9kZXN0aW5hdGlvbicsXG4gICAgLyoqXG4gICAgKiBUaGUgbmFtZSBvZiB0aGUgdHJhbnNwb3J0IHByb3RvY29sLlxuICAgICovXG4gICAgTUVTU0FHSU5HX1BST1RPQ09MOiAnbWVzc2FnaW5nLnByb3RvY29sJyxcbiAgICAvKipcbiAgICAqIFRoZSB2ZXJzaW9uIG9mIHRoZSB0cmFuc3BvcnQgcHJvdG9jb2wuXG4gICAgKi9cbiAgICBNRVNTQUdJTkdfUFJPVE9DT0xfVkVSU0lPTjogJ21lc3NhZ2luZy5wcm90b2NvbF92ZXJzaW9uJyxcbiAgICAvKipcbiAgICAqIENvbm5lY3Rpb24gc3RyaW5nLlxuICAgICovXG4gICAgTUVTU0FHSU5HX1VSTDogJ21lc3NhZ2luZy51cmwnLFxuICAgIC8qKlxuICAgICogQSB2YWx1ZSB1c2VkIGJ5IHRoZSBtZXNzYWdpbmcgc3lzdGVtIGFzIGFuIGlkZW50aWZpZXIgZm9yIHRoZSBtZXNzYWdlLCByZXByZXNlbnRlZCBhcyBhIHN0cmluZy5cbiAgICAqL1xuICAgIE1FU1NBR0lOR19NRVNTQUdFX0lEOiAnbWVzc2FnaW5nLm1lc3NhZ2VfaWQnLFxuICAgIC8qKlxuICAgICogVGhlIFtjb252ZXJzYXRpb24gSURdKCNjb252ZXJzYXRpb25zKSBpZGVudGlmeWluZyB0aGUgY29udmVyc2F0aW9uIHRvIHdoaWNoIHRoZSBtZXNzYWdlIGJlbG9uZ3MsIHJlcHJlc2VudGVkIGFzIGEgc3RyaW5nLiBTb21ldGltZXMgY2FsbGVkICYjMzQ7Q29ycmVsYXRpb24gSUQmIzM0Oy5cbiAgICAqL1xuICAgIE1FU1NBR0lOR19DT05WRVJTQVRJT05fSUQ6ICdtZXNzYWdpbmcuY29udmVyc2F0aW9uX2lkJyxcbiAgICAvKipcbiAgICAqIFRoZSAodW5jb21wcmVzc2VkKSBzaXplIG9mIHRoZSBtZXNzYWdlIHBheWxvYWQgaW4gYnl0ZXMuIEFsc28gdXNlIHRoaXMgYXR0cmlidXRlIGlmIGl0IGlzIHVua25vd24gd2hldGhlciB0aGUgY29tcHJlc3NlZCBvciB1bmNvbXByZXNzZWQgcGF5bG9hZCBzaXplIGlzIHJlcG9ydGVkLlxuICAgICovXG4gICAgTUVTU0FHSU5HX01FU1NBR0VfUEFZTE9BRF9TSVpFX0JZVEVTOiAnbWVzc2FnaW5nLm1lc3NhZ2VfcGF5bG9hZF9zaXplX2J5dGVzJyxcbiAgICAvKipcbiAgICAqIFRoZSBjb21wcmVzc2VkIHNpemUgb2YgdGhlIG1lc3NhZ2UgcGF5bG9hZCBpbiBieXRlcy5cbiAgICAqL1xuICAgIE1FU1NBR0lOR19NRVNTQUdFX1BBWUxPQURfQ09NUFJFU1NFRF9TSVpFX0JZVEVTOiAnbWVzc2FnaW5nLm1lc3NhZ2VfcGF5bG9hZF9jb21wcmVzc2VkX3NpemVfYnl0ZXMnLFxuICAgIC8qKlxuICAgICogQSBzdHJpbmcgaWRlbnRpZnlpbmcgdGhlIGtpbmQgb2YgbWVzc2FnZSBjb25zdW1wdGlvbiBhcyBkZWZpbmVkIGluIHRoZSBbT3BlcmF0aW9uIG5hbWVzXSgjb3BlcmF0aW9uLW5hbWVzKSBzZWN0aW9uIGFib3ZlLiBJZiB0aGUgb3BlcmF0aW9uIGlzICYjMzQ7c2VuZCYjMzQ7LCB0aGlzIGF0dHJpYnV0ZSBNVVNUIE5PVCBiZSBzZXQsIHNpbmNlIHRoZSBvcGVyYXRpb24gY2FuIGJlIGluZmVycmVkIGZyb20gdGhlIHNwYW4ga2luZCBpbiB0aGF0IGNhc2UuXG4gICAgKi9cbiAgICBNRVNTQUdJTkdfT1BFUkFUSU9OOiAnbWVzc2FnaW5nLm9wZXJhdGlvbicsXG4gICAgLyoqXG4gICAgKiBUaGUgaWRlbnRpZmllciBmb3IgdGhlIGNvbnN1bWVyIHJlY2VpdmluZyBhIG1lc3NhZ2UuIEZvciBLYWZrYSwgc2V0IGl0IHRvIGB7bWVzc2FnaW5nLmthZmthLmNvbnN1bWVyX2dyb3VwfSAtIHttZXNzYWdpbmcua2Fma2EuY2xpZW50X2lkfWAsIGlmIGJvdGggYXJlIHByZXNlbnQsIG9yIG9ubHkgYG1lc3NhZ2luZy5rYWZrYS5jb25zdW1lcl9ncm91cGAuIEZvciBicm9rZXJzLCBzdWNoIGFzIFJhYmJpdE1RIGFuZCBBcnRlbWlzLCBzZXQgaXQgdG8gdGhlIGBjbGllbnRfaWRgIG9mIHRoZSBjbGllbnQgY29uc3VtaW5nIHRoZSBtZXNzYWdlLlxuICAgICovXG4gICAgTUVTU0FHSU5HX0NPTlNVTUVSX0lEOiAnbWVzc2FnaW5nLmNvbnN1bWVyX2lkJyxcbiAgICAvKipcbiAgICAqIFJhYmJpdE1RIG1lc3NhZ2Ugcm91dGluZyBrZXkuXG4gICAgKi9cbiAgICBNRVNTQUdJTkdfUkFCQklUTVFfUk9VVElOR19LRVk6ICdtZXNzYWdpbmcucmFiYml0bXEucm91dGluZ19rZXknLFxuICAgIC8qKlxuICAgICogTWVzc2FnZSBrZXlzIGluIEthZmthIGFyZSB1c2VkIGZvciBncm91cGluZyBhbGlrZSBtZXNzYWdlcyB0byBlbnN1cmUgdGhleSYjMzk7cmUgcHJvY2Vzc2VkIG9uIHRoZSBzYW1lIHBhcnRpdGlvbi4gVGhleSBkaWZmZXIgZnJvbSBgbWVzc2FnaW5nLm1lc3NhZ2VfaWRgIGluIHRoYXQgdGhleSYjMzk7cmUgbm90IHVuaXF1ZS4gSWYgdGhlIGtleSBpcyBgbnVsbGAsIHRoZSBhdHRyaWJ1dGUgTVVTVCBOT1QgYmUgc2V0LlxuICAgICpcbiAgICAqIE5vdGU6IElmIHRoZSBrZXkgdHlwZSBpcyBub3Qgc3RyaW5nLCBpdCYjMzk7cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gaGFzIHRvIGJlIHN1cHBsaWVkIGZvciB0aGUgYXR0cmlidXRlLiBJZiB0aGUga2V5IGhhcyBubyB1bmFtYmlndW91cywgY2Fub25pY2FsIHN0cmluZyBmb3JtLCBkb24mIzM5O3QgaW5jbHVkZSBpdHMgdmFsdWUuXG4gICAgKi9cbiAgICBNRVNTQUdJTkdfS0FGS0FfTUVTU0FHRV9LRVk6ICdtZXNzYWdpbmcua2Fma2EubWVzc2FnZV9rZXknLFxuICAgIC8qKlxuICAgICogTmFtZSBvZiB0aGUgS2Fma2EgQ29uc3VtZXIgR3JvdXAgdGhhdCBpcyBoYW5kbGluZyB0aGUgbWVzc2FnZS4gT25seSBhcHBsaWVzIHRvIGNvbnN1bWVycywgbm90IHByb2R1Y2Vycy5cbiAgICAqL1xuICAgIE1FU1NBR0lOR19LQUZLQV9DT05TVU1FUl9HUk9VUDogJ21lc3NhZ2luZy5rYWZrYS5jb25zdW1lcl9ncm91cCcsXG4gICAgLyoqXG4gICAgKiBDbGllbnQgSWQgZm9yIHRoZSBDb25zdW1lciBvciBQcm9kdWNlciB0aGF0IGlzIGhhbmRsaW5nIHRoZSBtZXNzYWdlLlxuICAgICovXG4gICAgTUVTU0FHSU5HX0tBRktBX0NMSUVOVF9JRDogJ21lc3NhZ2luZy5rYWZrYS5jbGllbnRfaWQnLFxuICAgIC8qKlxuICAgICogUGFydGl0aW9uIHRoZSBtZXNzYWdlIGlzIHNlbnQgdG8uXG4gICAgKi9cbiAgICBNRVNTQUdJTkdfS0FGS0FfUEFSVElUSU9OOiAnbWVzc2FnaW5nLmthZmthLnBhcnRpdGlvbicsXG4gICAgLyoqXG4gICAgKiBBIGJvb2xlYW4gdGhhdCBpcyB0cnVlIGlmIHRoZSBtZXNzYWdlIGlzIGEgdG9tYnN0b25lLlxuICAgICovXG4gICAgTUVTU0FHSU5HX0tBRktBX1RPTUJTVE9ORTogJ21lc3NhZ2luZy5rYWZrYS50b21ic3RvbmUnLFxuICAgIC8qKlxuICAgICogQSBzdHJpbmcgaWRlbnRpZnlpbmcgdGhlIHJlbW90aW5nIHN5c3RlbS5cbiAgICAqL1xuICAgIFJQQ19TWVNURU06ICdycGMuc3lzdGVtJyxcbiAgICAvKipcbiAgICAqIFRoZSBmdWxsIChsb2dpY2FsKSBuYW1lIG9mIHRoZSBzZXJ2aWNlIGJlaW5nIGNhbGxlZCwgaW5jbHVkaW5nIGl0cyBwYWNrYWdlIG5hbWUsIGlmIGFwcGxpY2FibGUuXG4gICAgKlxuICAgICogTm90ZTogVGhpcyBpcyB0aGUgbG9naWNhbCBuYW1lIG9mIHRoZSBzZXJ2aWNlIGZyb20gdGhlIFJQQyBpbnRlcmZhY2UgcGVyc3BlY3RpdmUsIHdoaWNoIGNhbiBiZSBkaWZmZXJlbnQgZnJvbSB0aGUgbmFtZSBvZiBhbnkgaW1wbGVtZW50aW5nIGNsYXNzLiBUaGUgYGNvZGUubmFtZXNwYWNlYCBhdHRyaWJ1dGUgbWF5IGJlIHVzZWQgdG8gc3RvcmUgdGhlIGxhdHRlciAoZGVzcGl0ZSB0aGUgYXR0cmlidXRlIG5hbWUsIGl0IG1heSBpbmNsdWRlIGEgY2xhc3MgbmFtZTsgZS5nLiwgY2xhc3Mgd2l0aCBtZXRob2QgYWN0dWFsbHkgZXhlY3V0aW5nIHRoZSBjYWxsIG9uIHRoZSBzZXJ2ZXIgc2lkZSwgUlBDIGNsaWVudCBzdHViIGNsYXNzIG9uIHRoZSBjbGllbnQgc2lkZSkuXG4gICAgKi9cbiAgICBSUENfU0VSVklDRTogJ3JwYy5zZXJ2aWNlJyxcbiAgICAvKipcbiAgICAqIFRoZSBuYW1lIG9mIHRoZSAobG9naWNhbCkgbWV0aG9kIGJlaW5nIGNhbGxlZCwgbXVzdCBiZSBlcXVhbCB0byB0aGUgJG1ldGhvZCBwYXJ0IGluIHRoZSBzcGFuIG5hbWUuXG4gICAgKlxuICAgICogTm90ZTogVGhpcyBpcyB0aGUgbG9naWNhbCBuYW1lIG9mIHRoZSBtZXRob2QgZnJvbSB0aGUgUlBDIGludGVyZmFjZSBwZXJzcGVjdGl2ZSwgd2hpY2ggY2FuIGJlIGRpZmZlcmVudCBmcm9tIHRoZSBuYW1lIG9mIGFueSBpbXBsZW1lbnRpbmcgbWV0aG9kL2Z1bmN0aW9uLiBUaGUgYGNvZGUuZnVuY3Rpb25gIGF0dHJpYnV0ZSBtYXkgYmUgdXNlZCB0byBzdG9yZSB0aGUgbGF0dGVyIChlLmcuLCBtZXRob2QgYWN0dWFsbHkgZXhlY3V0aW5nIHRoZSBjYWxsIG9uIHRoZSBzZXJ2ZXIgc2lkZSwgUlBDIGNsaWVudCBzdHViIG1ldGhvZCBvbiB0aGUgY2xpZW50IHNpZGUpLlxuICAgICovXG4gICAgUlBDX01FVEhPRDogJ3JwYy5tZXRob2QnLFxuICAgIC8qKlxuICAgICogVGhlIFtudW1lcmljIHN0YXR1cyBjb2RlXShodHRwczovL2dpdGh1Yi5jb20vZ3JwYy9ncnBjL2Jsb2IvdjEuMzMuMi9kb2Mvc3RhdHVzY29kZXMubWQpIG9mIHRoZSBnUlBDIHJlcXVlc3QuXG4gICAgKi9cbiAgICBSUENfR1JQQ19TVEFUVVNfQ09ERTogJ3JwYy5ncnBjLnN0YXR1c19jb2RlJyxcbiAgICAvKipcbiAgICAqIFByb3RvY29sIHZlcnNpb24gYXMgaW4gYGpzb25ycGNgIHByb3BlcnR5IG9mIHJlcXVlc3QvcmVzcG9uc2UuIFNpbmNlIEpTT04tUlBDIDEuMCBkb2VzIG5vdCBzcGVjaWZ5IHRoaXMsIHRoZSB2YWx1ZSBjYW4gYmUgb21pdHRlZC5cbiAgICAqL1xuICAgIFJQQ19KU09OUlBDX1ZFUlNJT046ICdycGMuanNvbnJwYy52ZXJzaW9uJyxcbiAgICAvKipcbiAgICAqIGBpZGAgcHJvcGVydHkgb2YgcmVxdWVzdCBvciByZXNwb25zZS4gU2luY2UgcHJvdG9jb2wgYWxsb3dzIGlkIHRvIGJlIGludCwgc3RyaW5nLCBgbnVsbGAgb3IgbWlzc2luZyAoZm9yIG5vdGlmaWNhdGlvbnMpLCB2YWx1ZSBpcyBleHBlY3RlZCB0byBiZSBjYXN0IHRvIHN0cmluZyBmb3Igc2ltcGxpY2l0eS4gVXNlIGVtcHR5IHN0cmluZyBpbiBjYXNlIG9mIGBudWxsYCB2YWx1ZS4gT21pdCBlbnRpcmVseSBpZiB0aGlzIGlzIGEgbm90aWZpY2F0aW9uLlxuICAgICovXG4gICAgUlBDX0pTT05SUENfUkVRVUVTVF9JRDogJ3JwYy5qc29ucnBjLnJlcXVlc3RfaWQnLFxuICAgIC8qKlxuICAgICogYGVycm9yLmNvZGVgIHByb3BlcnR5IG9mIHJlc3BvbnNlIGlmIGl0IGlzIGFuIGVycm9yIHJlc3BvbnNlLlxuICAgICovXG4gICAgUlBDX0pTT05SUENfRVJST1JfQ09ERTogJ3JwYy5qc29ucnBjLmVycm9yX2NvZGUnLFxuICAgIC8qKlxuICAgICogYGVycm9yLm1lc3NhZ2VgIHByb3BlcnR5IG9mIHJlc3BvbnNlIGlmIGl0IGlzIGFuIGVycm9yIHJlc3BvbnNlLlxuICAgICovXG4gICAgUlBDX0pTT05SUENfRVJST1JfTUVTU0FHRTogJ3JwYy5qc29ucnBjLmVycm9yX21lc3NhZ2UnLFxuICAgIC8qKlxuICAgICogV2hldGhlciB0aGlzIGlzIGEgcmVjZWl2ZWQgb3Igc2VudCBtZXNzYWdlLlxuICAgICovXG4gICAgTUVTU0FHRV9UWVBFOiAnbWVzc2FnZS50eXBlJyxcbiAgICAvKipcbiAgICAqIE1VU1QgYmUgY2FsY3VsYXRlZCBhcyB0d28gZGlmZmVyZW50IGNvdW50ZXJzIHN0YXJ0aW5nIGZyb20gYDFgIG9uZSBmb3Igc2VudCBtZXNzYWdlcyBhbmQgb25lIGZvciByZWNlaXZlZCBtZXNzYWdlLlxuICAgICpcbiAgICAqIE5vdGU6IFRoaXMgd2F5IHdlIGd1YXJhbnRlZSB0aGF0IHRoZSB2YWx1ZXMgd2lsbCBiZSBjb25zaXN0ZW50IGJldHdlZW4gZGlmZmVyZW50IGltcGxlbWVudGF0aW9ucy5cbiAgICAqL1xuICAgIE1FU1NBR0VfSUQ6ICdtZXNzYWdlLmlkJyxcbiAgICAvKipcbiAgICAqIENvbXByZXNzZWQgc2l6ZSBvZiB0aGUgbWVzc2FnZSBpbiBieXRlcy5cbiAgICAqL1xuICAgIE1FU1NBR0VfQ09NUFJFU1NFRF9TSVpFOiAnbWVzc2FnZS5jb21wcmVzc2VkX3NpemUnLFxuICAgIC8qKlxuICAgICogVW5jb21wcmVzc2VkIHNpemUgb2YgdGhlIG1lc3NhZ2UgaW4gYnl0ZXMuXG4gICAgKi9cbiAgICBNRVNTQUdFX1VOQ09NUFJFU1NFRF9TSVpFOiAnbWVzc2FnZS51bmNvbXByZXNzZWRfc2l6ZScsXG59O1xuZXhwb3J0IHZhciBEYlN5c3RlbVZhbHVlcyA9IHtcbiAgICAvKiogU29tZSBvdGhlciBTUUwgZGF0YWJhc2UuIEZhbGxiYWNrIG9ubHkuIFNlZSBub3Rlcy4gKi9cbiAgICBPVEhFUl9TUUw6ICdvdGhlcl9zcWwnLFxuICAgIC8qKiBNaWNyb3NvZnQgU1FMIFNlcnZlci4gKi9cbiAgICBNU1NRTDogJ21zc3FsJyxcbiAgICAvKiogTXlTUUwuICovXG4gICAgTVlTUUw6ICdteXNxbCcsXG4gICAgLyoqIE9yYWNsZSBEYXRhYmFzZS4gKi9cbiAgICBPUkFDTEU6ICdvcmFjbGUnLFxuICAgIC8qKiBJQk0gRGIyLiAqL1xuICAgIERCMjogJ2RiMicsXG4gICAgLyoqIFBvc3RncmVTUUwuICovXG4gICAgUE9TVEdSRVNRTDogJ3Bvc3RncmVzcWwnLFxuICAgIC8qKiBBbWF6b24gUmVkc2hpZnQuICovXG4gICAgUkVEU0hJRlQ6ICdyZWRzaGlmdCcsXG4gICAgLyoqIEFwYWNoZSBIaXZlLiAqL1xuICAgIEhJVkU6ICdoaXZlJyxcbiAgICAvKiogQ2xvdWRzY2FwZS4gKi9cbiAgICBDTE9VRFNDQVBFOiAnY2xvdWRzY2FwZScsXG4gICAgLyoqIEh5cGVyU1FMIERhdGFCYXNlLiAqL1xuICAgIEhTUUxEQjogJ2hzcWxkYicsXG4gICAgLyoqIFByb2dyZXNzIERhdGFiYXNlLiAqL1xuICAgIFBST0dSRVNTOiAncHJvZ3Jlc3MnLFxuICAgIC8qKiBTQVAgTWF4REIuICovXG4gICAgTUFYREI6ICdtYXhkYicsXG4gICAgLyoqIFNBUCBIQU5BLiAqL1xuICAgIEhBTkFEQjogJ2hhbmFkYicsXG4gICAgLyoqIEluZ3Jlcy4gKi9cbiAgICBJTkdSRVM6ICdpbmdyZXMnLFxuICAgIC8qKiBGaXJzdFNRTC4gKi9cbiAgICBGSVJTVFNRTDogJ2ZpcnN0c3FsJyxcbiAgICAvKiogRW50ZXJwcmlzZURCLiAqL1xuICAgIEVEQjogJ2VkYicsXG4gICAgLyoqIEludGVyU3lzdGVtcyBDYWNow6kuICovXG4gICAgQ0FDSEU6ICdjYWNoZScsXG4gICAgLyoqIEFkYWJhcyAoQWRhcHRhYmxlIERhdGFiYXNlIFN5c3RlbSkuICovXG4gICAgQURBQkFTOiAnYWRhYmFzJyxcbiAgICAvKiogRmlyZWJpcmQuICovXG4gICAgRklSRUJJUkQ6ICdmaXJlYmlyZCcsXG4gICAgLyoqIEFwYWNoZSBEZXJieS4gKi9cbiAgICBERVJCWTogJ2RlcmJ5JyxcbiAgICAvKiogRmlsZU1ha2VyLiAqL1xuICAgIEZJTEVNQUtFUjogJ2ZpbGVtYWtlcicsXG4gICAgLyoqIEluZm9ybWl4LiAqL1xuICAgIElORk9STUlYOiAnaW5mb3JtaXgnLFxuICAgIC8qKiBJbnN0YW50REIuICovXG4gICAgSU5TVEFOVERCOiAnaW5zdGFudGRiJyxcbiAgICAvKiogSW50ZXJCYXNlLiAqL1xuICAgIElOVEVSQkFTRTogJ2ludGVyYmFzZScsXG4gICAgLyoqIE1hcmlhREIuICovXG4gICAgTUFSSUFEQjogJ21hcmlhZGInLFxuICAgIC8qKiBOZXRlenphLiAqL1xuICAgIE5FVEVaWkE6ICduZXRlenphJyxcbiAgICAvKiogUGVydmFzaXZlIFBTUUwuICovXG4gICAgUEVSVkFTSVZFOiAncGVydmFzaXZlJyxcbiAgICAvKiogUG9pbnRCYXNlLiAqL1xuICAgIFBPSU5UQkFTRTogJ3BvaW50YmFzZScsXG4gICAgLyoqIFNRTGl0ZS4gKi9cbiAgICBTUUxJVEU6ICdzcWxpdGUnLFxuICAgIC8qKiBTeWJhc2UuICovXG4gICAgU1lCQVNFOiAnc3liYXNlJyxcbiAgICAvKiogVGVyYWRhdGEuICovXG4gICAgVEVSQURBVEE6ICd0ZXJhZGF0YScsXG4gICAgLyoqIFZlcnRpY2EuICovXG4gICAgVkVSVElDQTogJ3ZlcnRpY2EnLFxuICAgIC8qKiBIMi4gKi9cbiAgICBIMjogJ2gyJyxcbiAgICAvKiogQ29sZEZ1c2lvbiBJTVEuICovXG4gICAgQ09MREZVU0lPTjogJ2NvbGRmdXNpb24nLFxuICAgIC8qKiBBcGFjaGUgQ2Fzc2FuZHJhLiAqL1xuICAgIENBU1NBTkRSQTogJ2Nhc3NhbmRyYScsXG4gICAgLyoqIEFwYWNoZSBIQmFzZS4gKi9cbiAgICBIQkFTRTogJ2hiYXNlJyxcbiAgICAvKiogTW9uZ29EQi4gKi9cbiAgICBNT05HT0RCOiAnbW9uZ29kYicsXG4gICAgLyoqIFJlZGlzLiAqL1xuICAgIFJFRElTOiAncmVkaXMnLFxuICAgIC8qKiBDb3VjaGJhc2UuICovXG4gICAgQ09VQ0hCQVNFOiAnY291Y2hiYXNlJyxcbiAgICAvKiogQ291Y2hEQi4gKi9cbiAgICBDT1VDSERCOiAnY291Y2hkYicsXG4gICAgLyoqIE1pY3Jvc29mdCBBenVyZSBDb3Ntb3MgREIuICovXG4gICAgQ09TTU9TREI6ICdjb3Ntb3NkYicsXG4gICAgLyoqIEFtYXpvbiBEeW5hbW9EQi4gKi9cbiAgICBEWU5BTU9EQjogJ2R5bmFtb2RiJyxcbiAgICAvKiogTmVvNGouICovXG4gICAgTkVPNEo6ICduZW80aicsXG4gICAgLyoqIEFwYWNoZSBHZW9kZS4gKi9cbiAgICBHRU9ERTogJ2dlb2RlJyxcbiAgICAvKiogRWxhc3RpY3NlYXJjaC4gKi9cbiAgICBFTEFTVElDU0VBUkNIOiAnZWxhc3RpY3NlYXJjaCcsXG4gICAgLyoqIE1lbWNhY2hlZC4gKi9cbiAgICBNRU1DQUNIRUQ6ICdtZW1jYWNoZWQnLFxuICAgIC8qKiBDb2Nrcm9hY2hEQi4gKi9cbiAgICBDT0NLUk9BQ0hEQjogJ2NvY2tyb2FjaGRiJyxcbn07XG5leHBvcnQgdmFyIERiQ2Fzc2FuZHJhQ29uc2lzdGVuY3lMZXZlbFZhbHVlcyA9IHtcbiAgICAvKiogYWxsLiAqL1xuICAgIEFMTDogJ2FsbCcsXG4gICAgLyoqIGVhY2hfcXVvcnVtLiAqL1xuICAgIEVBQ0hfUVVPUlVNOiAnZWFjaF9xdW9ydW0nLFxuICAgIC8qKiBxdW9ydW0uICovXG4gICAgUVVPUlVNOiAncXVvcnVtJyxcbiAgICAvKiogbG9jYWxfcXVvcnVtLiAqL1xuICAgIExPQ0FMX1FVT1JVTTogJ2xvY2FsX3F1b3J1bScsXG4gICAgLyoqIG9uZS4gKi9cbiAgICBPTkU6ICdvbmUnLFxuICAgIC8qKiB0d28uICovXG4gICAgVFdPOiAndHdvJyxcbiAgICAvKiogdGhyZWUuICovXG4gICAgVEhSRUU6ICd0aHJlZScsXG4gICAgLyoqIGxvY2FsX29uZS4gKi9cbiAgICBMT0NBTF9PTkU6ICdsb2NhbF9vbmUnLFxuICAgIC8qKiBhbnkuICovXG4gICAgQU5ZOiAnYW55JyxcbiAgICAvKiogc2VyaWFsLiAqL1xuICAgIFNFUklBTDogJ3NlcmlhbCcsXG4gICAgLyoqIGxvY2FsX3NlcmlhbC4gKi9cbiAgICBMT0NBTF9TRVJJQUw6ICdsb2NhbF9zZXJpYWwnLFxufTtcbmV4cG9ydCB2YXIgRmFhc1RyaWdnZXJWYWx1ZXMgPSB7XG4gICAgLyoqIEEgcmVzcG9uc2UgdG8gc29tZSBkYXRhIHNvdXJjZSBvcGVyYXRpb24gc3VjaCBhcyBhIGRhdGFiYXNlIG9yIGZpbGVzeXN0ZW0gcmVhZC93cml0ZS4gKi9cbiAgICBEQVRBU09VUkNFOiAnZGF0YXNvdXJjZScsXG4gICAgLyoqIFRvIHByb3ZpZGUgYW4gYW5zd2VyIHRvIGFuIGluYm91bmQgSFRUUCByZXF1ZXN0LiAqL1xuICAgIEhUVFA6ICdodHRwJyxcbiAgICAvKiogQSBmdW5jdGlvbiBpcyBzZXQgdG8gYmUgZXhlY3V0ZWQgd2hlbiBtZXNzYWdlcyBhcmUgc2VudCB0byBhIG1lc3NhZ2luZyBzeXN0ZW0uICovXG4gICAgUFVCU1VCOiAncHVic3ViJyxcbiAgICAvKiogQSBmdW5jdGlvbiBpcyBzY2hlZHVsZWQgdG8gYmUgZXhlY3V0ZWQgcmVndWxhcmx5LiAqL1xuICAgIFRJTUVSOiAndGltZXInLFxuICAgIC8qKiBJZiBub25lIG9mIHRoZSBvdGhlcnMgYXBwbHkuICovXG4gICAgT1RIRVI6ICdvdGhlcicsXG59O1xuZXhwb3J0IHZhciBGYWFzRG9jdW1lbnRPcGVyYXRpb25WYWx1ZXMgPSB7XG4gICAgLyoqIFdoZW4gYSBuZXcgb2JqZWN0IGlzIGNyZWF0ZWQuICovXG4gICAgSU5TRVJUOiAnaW5zZXJ0JyxcbiAgICAvKiogV2hlbiBhbiBvYmplY3QgaXMgbW9kaWZpZWQuICovXG4gICAgRURJVDogJ2VkaXQnLFxuICAgIC8qKiBXaGVuIGFuIG9iamVjdCBpcyBkZWxldGVkLiAqL1xuICAgIERFTEVURTogJ2RlbGV0ZScsXG59O1xuZXhwb3J0IHZhciBGYWFzSW52b2tlZFByb3ZpZGVyVmFsdWVzID0ge1xuICAgIC8qKiBBbGliYWJhIENsb3VkLiAqL1xuICAgIEFMSUJBQkFfQ0xPVUQ6ICdhbGliYWJhX2Nsb3VkJyxcbiAgICAvKiogQW1hem9uIFdlYiBTZXJ2aWNlcy4gKi9cbiAgICBBV1M6ICdhd3MnLFxuICAgIC8qKiBNaWNyb3NvZnQgQXp1cmUuICovXG4gICAgQVpVUkU6ICdhenVyZScsXG4gICAgLyoqIEdvb2dsZSBDbG91ZCBQbGF0Zm9ybS4gKi9cbiAgICBHQ1A6ICdnY3AnLFxufTtcbmV4cG9ydCB2YXIgTmV0VHJhbnNwb3J0VmFsdWVzID0ge1xuICAgIC8qKiBpcF90Y3AuICovXG4gICAgSVBfVENQOiAnaXBfdGNwJyxcbiAgICAvKiogaXBfdWRwLiAqL1xuICAgIElQX1VEUDogJ2lwX3VkcCcsXG4gICAgLyoqIEFub3RoZXIgSVAtYmFzZWQgcHJvdG9jb2wuICovXG4gICAgSVA6ICdpcCcsXG4gICAgLyoqIFVuaXggRG9tYWluIHNvY2tldC4gU2VlIGJlbG93LiAqL1xuICAgIFVOSVg6ICd1bml4JyxcbiAgICAvKiogTmFtZWQgb3IgYW5vbnltb3VzIHBpcGUuIFNlZSBub3RlIGJlbG93LiAqL1xuICAgIFBJUEU6ICdwaXBlJyxcbiAgICAvKiogSW4tcHJvY2VzcyBjb21tdW5pY2F0aW9uLiAqL1xuICAgIElOUFJPQzogJ2lucHJvYycsXG4gICAgLyoqIFNvbWV0aGluZyBlbHNlIChub24gSVAtYmFzZWQpLiAqL1xuICAgIE9USEVSOiAnb3RoZXInLFxufTtcbmV4cG9ydCB2YXIgTmV0SG9zdENvbm5lY3Rpb25UeXBlVmFsdWVzID0ge1xuICAgIC8qKiB3aWZpLiAqL1xuICAgIFdJRkk6ICd3aWZpJyxcbiAgICAvKiogd2lyZWQuICovXG4gICAgV0lSRUQ6ICd3aXJlZCcsXG4gICAgLyoqIGNlbGwuICovXG4gICAgQ0VMTDogJ2NlbGwnLFxuICAgIC8qKiB1bmF2YWlsYWJsZS4gKi9cbiAgICBVTkFWQUlMQUJMRTogJ3VuYXZhaWxhYmxlJyxcbiAgICAvKiogdW5rbm93bi4gKi9cbiAgICBVTktOT1dOOiAndW5rbm93bicsXG59O1xuZXhwb3J0IHZhciBOZXRIb3N0Q29ubmVjdGlvblN1YnR5cGVWYWx1ZXMgPSB7XG4gICAgLyoqIEdQUlMuICovXG4gICAgR1BSUzogJ2dwcnMnLFxuICAgIC8qKiBFREdFLiAqL1xuICAgIEVER0U6ICdlZGdlJyxcbiAgICAvKiogVU1UUy4gKi9cbiAgICBVTVRTOiAndW10cycsXG4gICAgLyoqIENETUEuICovXG4gICAgQ0RNQTogJ2NkbWEnLFxuICAgIC8qKiBFVkRPIFJlbC4gMC4gKi9cbiAgICBFVkRPXzA6ICdldmRvXzAnLFxuICAgIC8qKiBFVkRPIFJldi4gQS4gKi9cbiAgICBFVkRPX0E6ICdldmRvX2EnLFxuICAgIC8qKiBDRE1BMjAwMCAxWFJUVC4gKi9cbiAgICBDRE1BMjAwMF8xWFJUVDogJ2NkbWEyMDAwXzF4cnR0JyxcbiAgICAvKiogSFNEUEEuICovXG4gICAgSFNEUEE6ICdoc2RwYScsXG4gICAgLyoqIEhTVVBBLiAqL1xuICAgIEhTVVBBOiAnaHN1cGEnLFxuICAgIC8qKiBIU1BBLiAqL1xuICAgIEhTUEE6ICdoc3BhJyxcbiAgICAvKiogSURFTi4gKi9cbiAgICBJREVOOiAnaWRlbicsXG4gICAgLyoqIEVWRE8gUmV2LiBCLiAqL1xuICAgIEVWRE9fQjogJ2V2ZG9fYicsXG4gICAgLyoqIExURS4gKi9cbiAgICBMVEU6ICdsdGUnLFxuICAgIC8qKiBFSFJQRC4gKi9cbiAgICBFSFJQRDogJ2VocnBkJyxcbiAgICAvKiogSFNQQVAuICovXG4gICAgSFNQQVA6ICdoc3BhcCcsXG4gICAgLyoqIEdTTS4gKi9cbiAgICBHU006ICdnc20nLFxuICAgIC8qKiBURC1TQ0RNQS4gKi9cbiAgICBURF9TQ0RNQTogJ3RkX3NjZG1hJyxcbiAgICAvKiogSVdMQU4uICovXG4gICAgSVdMQU46ICdpd2xhbicsXG4gICAgLyoqIDVHIE5SIChOZXcgUmFkaW8pLiAqL1xuICAgIE5SOiAnbnInLFxuICAgIC8qKiA1RyBOUk5TQSAoTmV3IFJhZGlvIE5vbi1TdGFuZGFsb25lKS4gKi9cbiAgICBOUk5TQTogJ25ybnNhJyxcbiAgICAvKiogTFRFIENBLiAqL1xuICAgIExURV9DQTogJ2x0ZV9jYScsXG59O1xuZXhwb3J0IHZhciBIdHRwRmxhdm9yVmFsdWVzID0ge1xuICAgIC8qKiBIVFRQIDEuMC4gKi9cbiAgICBIVFRQXzFfMDogJzEuMCcsXG4gICAgLyoqIEhUVFAgMS4xLiAqL1xuICAgIEhUVFBfMV8xOiAnMS4xJyxcbiAgICAvKiogSFRUUCAyLiAqL1xuICAgIEhUVFBfMl8wOiAnMi4wJyxcbiAgICAvKiogU1BEWSBwcm90b2NvbC4gKi9cbiAgICBTUERZOiAnU1BEWScsXG4gICAgLyoqIFFVSUMgcHJvdG9jb2wuICovXG4gICAgUVVJQzogJ1FVSUMnLFxufTtcbmV4cG9ydCB2YXIgTWVzc2FnaW5nRGVzdGluYXRpb25LaW5kVmFsdWVzID0ge1xuICAgIC8qKiBBIG1lc3NhZ2Ugc2VudCB0byBhIHF1ZXVlLiAqL1xuICAgIFFVRVVFOiAncXVldWUnLFxuICAgIC8qKiBBIG1lc3NhZ2Ugc2VudCB0byBhIHRvcGljLiAqL1xuICAgIFRPUElDOiAndG9waWMnLFxufTtcbmV4cG9ydCB2YXIgTWVzc2FnaW5nT3BlcmF0aW9uVmFsdWVzID0ge1xuICAgIC8qKiByZWNlaXZlLiAqL1xuICAgIFJFQ0VJVkU6ICdyZWNlaXZlJyxcbiAgICAvKiogcHJvY2Vzcy4gKi9cbiAgICBQUk9DRVNTOiAncHJvY2VzcycsXG59O1xuZXhwb3J0IHZhciBScGNHcnBjU3RhdHVzQ29kZVZhbHVlcyA9IHtcbiAgICAvKiogT0suICovXG4gICAgT0s6IDAsXG4gICAgLyoqIENBTkNFTExFRC4gKi9cbiAgICBDQU5DRUxMRUQ6IDEsXG4gICAgLyoqIFVOS05PV04uICovXG4gICAgVU5LTk9XTjogMixcbiAgICAvKiogSU5WQUxJRF9BUkdVTUVOVC4gKi9cbiAgICBJTlZBTElEX0FSR1VNRU5UOiAzLFxuICAgIC8qKiBERUFETElORV9FWENFRURFRC4gKi9cbiAgICBERUFETElORV9FWENFRURFRDogNCxcbiAgICAvKiogTk9UX0ZPVU5ELiAqL1xuICAgIE5PVF9GT1VORDogNSxcbiAgICAvKiogQUxSRUFEWV9FWElTVFMuICovXG4gICAgQUxSRUFEWV9FWElTVFM6IDYsXG4gICAgLyoqIFBFUk1JU1NJT05fREVOSUVELiAqL1xuICAgIFBFUk1JU1NJT05fREVOSUVEOiA3LFxuICAgIC8qKiBSRVNPVVJDRV9FWEhBVVNURUQuICovXG4gICAgUkVTT1VSQ0VfRVhIQVVTVEVEOiA4LFxuICAgIC8qKiBGQUlMRURfUFJFQ09ORElUSU9OLiAqL1xuICAgIEZBSUxFRF9QUkVDT05ESVRJT046IDksXG4gICAgLyoqIEFCT1JURUQuICovXG4gICAgQUJPUlRFRDogMTAsXG4gICAgLyoqIE9VVF9PRl9SQU5HRS4gKi9cbiAgICBPVVRfT0ZfUkFOR0U6IDExLFxuICAgIC8qKiBVTklNUExFTUVOVEVELiAqL1xuICAgIFVOSU1QTEVNRU5URUQ6IDEyLFxuICAgIC8qKiBJTlRFUk5BTC4gKi9cbiAgICBJTlRFUk5BTDogMTMsXG4gICAgLyoqIFVOQVZBSUxBQkxFLiAqL1xuICAgIFVOQVZBSUxBQkxFOiAxNCxcbiAgICAvKiogREFUQV9MT1NTLiAqL1xuICAgIERBVEFfTE9TUzogMTUsXG4gICAgLyoqIFVOQVVUSEVOVElDQVRFRC4gKi9cbiAgICBVTkFVVEhFTlRJQ0FURUQ6IDE2LFxufTtcbmV4cG9ydCB2YXIgTWVzc2FnZVR5cGVWYWx1ZXMgPSB7XG4gICAgLyoqIHNlbnQuICovXG4gICAgU0VOVDogJ1NFTlQnLFxuICAgIC8qKiByZWNlaXZlZC4gKi9cbiAgICBSRUNFSVZFRDogJ1JFQ0VJVkVEJyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TZW1hbnRpY0F0dHJpYnV0ZXMuanMubWFwIiwiLypcbiAqIENvcHlyaWdodCBUaGUgT3BlblRlbGVtZXRyeSBBdXRob3JzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cHM6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vU2VtYW50aWNBdHRyaWJ1dGVzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIGRpcnR5T2JqZWN0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Fzc2lnbiByZXF1aXJlcyB0aGF0IGlucHV0IHBhcmFtZXRlciBub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGRpcnR5T2JqZWN0ID0gZGlydHlPYmplY3QgfHwge307XG5cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGlydHlPYmplY3QpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRpcnR5T2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBkaXJ0eU9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXNzaWduIGZyb20gXCIuLi9hc3NpZ24vaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KGRpcnR5T2JqZWN0KSB7XG4gIHJldHVybiBhc3NpZ24oe30sIGRpcnR5T2JqZWN0KTtcbn0iLCJpbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbk1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluU2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgY2xvbmVPYmplY3QgZnJvbSBcIi4uL19saWIvY2xvbmVPYmplY3QvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlOVVRFU19JTl9EQVkgPSAxNDQwO1xudmFyIE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTID0gMjUyMDtcbnZhciBNSU5VVEVTX0lOX01PTlRIID0gNDMyMDA7XG52YXIgTUlOVVRFU19JTl9UV09fTU9OVEhTID0gODY0MDA7XG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgICAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgICAgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzICAgIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzICAgIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzICAgIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgZnVuY3Rpb24gd2FzIHJlbmFtZWQgZnJvbSBgZGlzdGFuY2VJbldvcmRzIGAgdG8gYGZvcm1hdERpc3RhbmNlYFxuICogICB0byBtYWtlIGl0cyBuYW1lIGNvbnNpc3RlbnQgd2l0aCBgZm9ybWF0YCBhbmQgYGZvcm1hdFJlbGF0aXZlYC5cbiAqXG4gKiAtIFRoZSBvcmRlciBvZiBhcmd1bWVudHMgaXMgc3dhcHBlZCB0byBtYWtlIHRoZSBmdW5jdGlvblxuICogICBjb25zaXN0ZW50IHdpdGggYGRpZmZlcmVuY2VJbi4uLmAgZnVuY3Rpb25zLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKlxuICogICBkaXN0YW5jZUluV29yZHMoXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzIsIDApLFxuICogICAgIHsgYWRkU3VmZml4OiB0cnVlIH1cbiAqICAgKSAvLz0+ICdpbiBhYm91dCAxIGhvdXInXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKlxuICogICBmb3JtYXREaXN0YW5jZShcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgeyBhZGRTdWZmaXg6IHRydWUgfVxuICogICApIC8vPT4gJ2luIGFib3V0IDEgaG91cidcbiAqICAgYGBgXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgYmFzZURhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgSnVseSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1XG4gKiAvLyBhbmQgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMCksXG4gKiAgIHsgaW5jbHVkZVNlY29uZHM6IHRydWUgfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTZcbiAqIC8vIHRvIDEgSmFudWFyeSAyMDE1LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNSwgMCwgMSksIG5ldyBEYXRlKDIwMTYsIDAsIDEpLCB7XG4gKiAgIGFkZFN1ZmZpeDogdHJ1ZVxuICogfSlcbiAqIC8vPT4gJ2Fib3V0IDEgeWVhciBhZ28nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE2LCA3LCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuXG4gIGlmICghbG9jYWxlLmZvcm1hdERpc3RhbmNlKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0RGlzdGFuY2UgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBjb21wYXJpc29uID0gY29tcGFyZUFzYyhkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpO1xuXG4gIGlmIChpc05hTihjb21wYXJpc29uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIHZhciBsb2NhbGl6ZU9wdGlvbnMgPSBjbG9uZU9iamVjdChvcHRpb25zKTtcbiAgbG9jYWxpemVPcHRpb25zLmFkZFN1ZmZpeCA9IEJvb2xlYW4ob3B0aW9ucy5hZGRTdWZmaXgpO1xuICBsb2NhbGl6ZU9wdGlvbnMuY29tcGFyaXNvbiA9IGNvbXBhcmlzb247XG4gIHZhciBkYXRlTGVmdDtcbiAgdmFyIGRhdGVSaWdodDtcblxuICBpZiAoY29tcGFyaXNvbiA+IDApIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgfVxuXG4gIHZhciBzZWNvbmRzID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTtcbiAgdmFyIG9mZnNldEluU2Vjb25kcyA9IChnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVSaWdodCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KSkgLyAxMDAwO1xuICB2YXIgbWludXRlcyA9IE1hdGgucm91bmQoKHNlY29uZHMgLSBvZmZzZXRJblNlY29uZHMpIC8gNjApO1xuICB2YXIgbW9udGhzOyAvLyAwIHVwIHRvIDIgbWluc1xuXG4gIGlmIChtaW51dGVzIDwgMikge1xuICAgIGlmIChvcHRpb25zLmluY2x1ZGVTZWNvbmRzKSB7XG4gICAgICBpZiAoc2Vjb25kcyA8IDUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDUsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMTAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAyMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMjAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA0MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdoYWxmQU1pbnV0ZScsIG51bGwsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA2MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSAvLyAyIG1pbnMgdXAgdG8gMC43NSBocnNcblxuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA0NSkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTsgLy8gMC43NSBocnMgdXAgdG8gMS41IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA5MCkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS41IGhycyB1cCB0byAyNCBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9EQVkpIHtcbiAgICB2YXIgaG91cnMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyA2MCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCBob3VycywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBkYXkgdXAgdG8gMS43NSBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxLjc1IGRheXMgdXAgdG8gMzAgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX01PTlRIKSB7XG4gICAgdmFyIGRheXMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX0RBWSk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIG1vbnRoIHVwIHRvIDIgbW9udGhzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fVFdPX01PTlRIUykge1xuICAgIG1vbnRocyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WE1vbnRocycsIG1vbnRocywgbG9jYWxpemVPcHRpb25zKTtcbiAgfVxuXG4gIG1vbnRocyA9IGRpZmZlcmVuY2VJbk1vbnRocyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTsgLy8gMiBtb250aHMgdXAgdG8gMTIgbW9udGhzXG5cbiAgaWYgKG1vbnRocyA8IDEyKSB7XG4gICAgdmFyIG5lYXJlc3RNb250aCA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNb250aHMnLCBuZWFyZXN0TW9udGgsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgeWVhciB1cCB0byBtYXggRGF0ZVxuICB9IGVsc2Uge1xuICAgIHZhciBtb250aHNTaW5jZVN0YXJ0T2ZZZWFyID0gbW9udGhzICUgMTI7XG4gICAgdmFyIHllYXJzID0gTWF0aC5mbG9vcihtb250aHMgLyAxMik7IC8vIE4geWVhcnMgdXAgdG8gMSB5ZWFycyAzIG1vbnRoc1xuXG4gICAgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCAzKSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDMgbW9udGhzIHVwIHRvIE4geWVhcnMgOSBtb250aHNcbiAgICB9IGVsc2UgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCA5KSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdvdmVyWFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIE4geWVhcnMgOSBtb250aHMgdXAgdG8gTiB5ZWFyIDEyIG1vbnRoc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhbG1vc3RYWWVhcnMnLCB5ZWFycyArIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbImNzcyIsIlJlYWN0IiwidXBkYXRlRGF0YXNvdXJjZVBsdWdpbkpzb25EYXRhT3B0aW9uIiwiSW5saW5lRmllbGQiLCJJbmxpbmVGaWVsZFJvdyIsIklubGluZVN3aXRjaCIsInVzZVN0eWxlcyIsIk5vZGVHcmFwaFNldHRpbmdzIiwib3B0aW9ucyIsIm9uT3B0aW9uc0NoYW5nZSIsInN0eWxlcyIsImdldFN0eWxlcyIsImNvbnRhaW5lciIsInJvdyIsImpzb25EYXRhIiwibm9kZUdyYXBoIiwiZW5hYmxlZCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNoZWNrZWQiLCJ0aGVtZSIsIlNlZ21lbnRJbnB1dCIsIklubGluZUxhYmVsIiwiSWNvbiIsIkVRX1dJRFRIIiwiS2V5VmFsdWVJbnB1dCIsInZhbHVlcyIsIm9uQ2hhbmdlIiwiaWQiLCJrZXlQbGFjZWhvbGRlciIsInZhbHVlUGxhY2Vob2xkZXIiLCJ3cmFwcGVyIiwibGVuZ3RoIiwibWFwIiwidmFsdWUiLCJpZHgiLCJwYWlyIiwia2V5IiwiZSIsInYiLCJpIiwiU3RyaW5nIiwib3BlcmF0b3IiLCJzbGljZSIsInNwYWNpbmciLCJ4cyIsInBhbGV0dGUiLCJvcmFuZ2UiLCJEYXRhU291cmNlUGlja2VyIiwiSW5wdXQiLCJUYWdzSW5wdXQiLCJUcmFjZVRvTG9nc1NldHRpbmdzIiwid2lkdGgiLCJpbmZvVGV4dCIsImRzIiwidHlwZSIsInRyYWNlc1RvTG9ncyIsImRhdGFzb3VyY2VVaWQiLCJ1aWQiLCJ0YWdzIiwibWFwVGFnTmFtZXNFbmFibGVkIiwibWFwcGVkVGFncyIsInRhZyIsInNwYW5TdGFydFRpbWVTaGlmdCIsInNwYW5FbmRUaW1lU2hpZnQiLCJmaWx0ZXJCeVRyYWNlSUQiLCJmaWx0ZXJCeVNwYW5JRCIsIm1kIiwiY29sb3JzIiwidGV4dFNlbWlXZWFrIiwiQnV0dG9uIiwiVHJhY2VUb01ldHJpY3NTZXR0aW5ncyIsInRyYWNlc1RvTWV0cmljcyIsInVuZGVmaW5lZCIsInF1ZXJ5IiwiRmllbGRUeXBlIiwiTXV0YWJsZURhdGFGcmFtZSIsIk5vZGVHcmFwaERhdGFGcmFtZUZpZWxkTmFtZXMiLCJGaWVsZHMiLCJnZXROb25PdmVybGFwcGluZ0R1cmF0aW9uIiwicmFuZ2VzIiwic29ydCIsImEiLCJiIiwibWVyZ2VkUmFuZ2VzIiwicmVkdWNlIiwiYWNjIiwicmFuZ2UiLCJ0YWlsIiwicHJldlN0YXJ0IiwicHJldkVuZCIsInN0YXJ0IiwiZW5kIiwibWFrZVNwYW5NYXAiLCJnZXRTcGFuIiwic3Bhbk1hcCIsInNwYW4iLCJpbmRleCIsImNoaWxkcmVuIiwicGFyZW50SWQiLCJwYXJlbnRJZHMiLCJwdXNoIiwiZ2V0U3RhdHMiLCJkdXJhdGlvbiIsInRyYWNlRHVyYXRpb24iLCJzZWxmRHVyYXRpb24iLCJtYWluIiwidG9GaXhlZE5vVHJhaWxpbmdaZXJvcyIsInNlY29uZGFyeSIsIm4iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIm1ha2VGcmFtZXMiLCJub2Rlc0ZyYW1lIiwiZmllbGRzIiwibmFtZSIsInN0cmluZyIsInRpdGxlIiwic3ViVGl0bGUiLCJtYWluU3RhdCIsImNvbmZpZyIsImRpc3BsYXlOYW1lIiwic2Vjb25kYXJ5U3RhdCIsImNvbG9yIiwibnVtYmVyIiwibW9kZSIsIm1ldGEiLCJwcmVmZXJyZWRWaXN1YWxpc2F0aW9uVHlwZSIsImVkZ2VzRnJhbWUiLCJ0YXJnZXQiLCJzb3VyY2UiLCJjeCIsInNvcnRCeSIsIkZpeGVkU2l6ZUxpc3QiLCJIb3Jpem9udGFsR3JvdXAiLCJMYWJlbCIsIkxvYWRpbmdQbGFjZWhvbGRlciIsIndpdGhUaGVtZTIiLCJCcm93c2VyTGFiZWwiLCJMb2tpTGFiZWwiLCJmdXp6eU1hdGNoIiwiZXNjYXBlTGFiZWxWYWx1ZUluRXhhY3RTZWxlY3RvciIsImVzY2FwZUxhYmVsVmFsdWVJblJlZ2V4U2VsZWN0b3IiLCJNQVhfTEFCRUxfQ09VTlQiLCJNQVhfVkFMVUVfQ09VTlQiLCJNQVhfQVVUT19TRUxFQ1QiLCJFTVBUWV9TRUxFQ1RPUiIsImJ1aWxkU2VsZWN0b3IiLCJsYWJlbHMiLCJzZWxlY3RlZExhYmVscyIsImxhYmVsIiwic2VsZWN0ZWQiLCJzZWxlY3RlZFZhbHVlcyIsImZpbHRlciIsImpvaW4iLCJmYWNldExhYmVscyIsInBvc3NpYmxlTGFiZWxzIiwibGFzdEZhY2V0dGVkIiwicG9zc2libGVWYWx1ZXMiLCJleGlzdGluZ1ZhbHVlcyIsIlNldCIsImhhcyIsImxvYWRpbmciLCJmYWNldHMiLCJoaWRkZW4iLCJiYWNrZ3JvdW5kIiwibGlzdCIsInNlY3Rpb24iLCJzZWxlY3RvciIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5TW9ub3NwYWNlIiwic3RhdHVzIiwidGV4dCIsInN0YXR1c1Nob3dpbmciLCJlcnJvciIsInZhbHVlTGlzdCIsInZhbHVlTGlzdFdyYXBwZXIiLCJib3JkZXIiLCJtZWRpdW0iLCJ2YWx1ZUxpc3RBcmVhIiwidmFsdWVUaXRsZSIsInZhbGlkYXRpb25TdGF0dXMiLCJtYXhDb250cmFzdCIsIlVudGhlbWVkTG9raUxhYmVsQnJvd3NlciIsIkNvbXBvbmVudCIsInNlYXJjaFRlcm0iLCJzZXRTdGF0ZSIsInN0YXRlIiwicHJvcHMiLCJkZWxldGVMYXN0VXNlZExhYmVscyIsImZpbmQiLCJsIiwibmV4dFZhbHVlIiwidXBkYXRlTGFiZWxTdGF0ZSIsImRvRmFjZXR0aW5nRm9yTGFiZWwiLCJkb0ZhY2V0dGluZyIsInZhbGlkYXRlU2VsZWN0b3IiLCJmb3JFYWNoIiwiZmV0Y2hWYWx1ZXMiLCJmZXRjaFNlcmllcyIsInVwZGF0ZWRGaWVsZHMiLCJjYiIsImNvbXBvbmVudERpZE1vdW50IiwibGFuZ3VhZ2VQcm92aWRlciIsImF1dG9TZWxlY3QiLCJsYXN0VXNlZExhYmVscyIsInRoZW4iLCJyYXdMYWJlbHMiLCJnZXRMYWJlbEtleXMiLCJhcnIiLCJpbmNsdWRlcyIsInN0b3JlTGFzdFVzZWRMYWJlbHMiLCJyYXdWYWx1ZXMiLCJnZXRMYWJlbFZhbHVlcyIsImNvbnNvbGUiLCJmZXRjaFNlcmllc0xhYmVscyIsIk9iamVjdCIsImtleXMiLCJzdHJlYW1zIiwicmVuZGVyIiwiZW1wdHkiLCJzZWFyY2hSZXN1bHRzIiwiaGlnaGxpZ2h0UGFydHMiLCJmdXp6eU1hdGNoUmVzdWx0IiwidG9Mb3dlckNhc2UiLCJmb3VuZCIsIm9yZGVyIiwiZGlzdGFuY2UiLCJJbmZpbml0eSIsIm9uQ2xpY2tMYWJlbCIsIm9uQ2hhbmdlU2VhcmNoIiwic3R5bGUiLCJvbkNsaWNrVmFsdWUiLCJvbkNsaWNrUnVuTG9nc1F1ZXJ5Iiwib25DbGlja1J1bk1ldHJpY3NRdWVyeSIsIm9uQ2xpY2tWYWxpZGF0ZSIsIm9uQ2xpY2tDbGVhciIsIkxva2lMYWJlbEJyb3dzZXIiLCJsYW5ndWFnZXMiLCJwcmlzbUxhbmd1YWdlcyIsIlNsYXRlUHJpc20iLCJRdWVyeUZpZWxkIiwiQnJhY2VzUGx1Z2luIiwiRE9NVXRpbCIsIkxvY2FsU3RvcmFnZVZhbHVlUHJvdmlkZXIiLCJlc2NhcGVMYWJlbFZhbHVlSW5TZWxlY3RvciIsInNob3VsZFJlZnJlc2hMYWJlbHMiLCJMQVNUX1VTRURfTEFCRUxTX0tFWSIsImdldENob29zZXJUZXh0IiwiaGFzU3ludGF4IiwiaGFzTG9nTGFiZWxzIiwid2lsbEFwcGx5U3VnZ2VzdGlvbiIsInN1Z2dlc3Rpb24iLCJ0eXBlYWhlYWRDb250ZXh0IiwidHlwZWFoZWFkVGV4dCIsIm5leHRDaGFyIiwiZ2V0TmV4dENoYXJhY3RlciIsInN1Z2dlc3Rpb25Nb2RpZmllZCIsIm1hdGNoIiwiTG9raVF1ZXJ5RmllbGQiLCJQdXJlQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJvbkNoYW5nZVF1ZXJ5IiwibGFiZWxCcm93c2VyVmlzaWJsZSIsIm92ZXJyaWRlIiwib25SdW5RdWVyeSIsIm5leHRRdWVyeSIsImV4cHIiLCJ0eXBlYWhlYWQiLCJkYXRhc291cmNlIiwic3VnZ2VzdGlvbnMiLCJsb2tpTGFuZ3VhZ2VQcm92aWRlciIsImhpc3RvcnkiLCJwcmVmaXgiLCJ3cmFwcGVyQ2xhc3NlcyIsImxhYmVsS2V5IiwicmVzdWx0IiwicHJvdmlkZUNvbXBsZXRpb25JdGVtcyIsImxhYmVsc0xvYWRlZCIsInBsdWdpbnMiLCJvbmx5SW4iLCJub2RlIiwib2JqZWN0IiwiZ2V0U3ludGF4IiwibG9ncWwiLCJfaXNNb3VudGVkIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJyZWZyZXNoTGFiZWxzIiwiZmV0Y2hMYWJlbHMiLCJFeHRyYUZpZWxkRWxlbWVudCIsInBsYWNlaG9sZGVyIiwiY2xlYW5UZXh0IiwiY2hvb3NlclRleHQiLCJidXR0b25EaXNhYmxlZCIsIm9uTGFzdFVzZWRMYWJlbHNTYXZlIiwib25MYXN0VXNlZExhYmVsc0RlbGV0ZSIsIm9uQ2xpY2tDaG9vc2VyQnV0dG9uIiwib25UeXBlYWhlYWQiLCJvbkJsdXIiLCJvbkNoYW5nZUxhYmVsQnJvd3NlciIsInJvdW5kTXNUb01pbiIsIm1pbGxpc2Vjb25kcyIsInJvdW5kU2VjVG9NaW4iLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwicHJldlJhbmdlIiwic2FtZU1pbnV0ZUZyb20iLCJmcm9tIiwidmFsdWVPZiIsInNhbWVNaW51dGVUbyIsInRvIiwiUkUyX01FVEFDSEFSQUNURVJTIiwiZXNjYXBlTG9raVJlZ2V4cCIsInJlcGxhY2UiLCJsYWJlbFZhbHVlIiwiaXNSZWdleFNlbGVjdG9yIiwiQ2hlYXRTaGVldCIsImRlYm91bmNlIiwiUHJpc20iLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsImlzVmFsaWRHb0R1cmF0aW9uIiwiZ2V0VGVtcGxhdGVTcnYiLCJBc3luY1NlbGVjdCIsIkFsZXJ0IiwidXNlU3R5bGVzMiIsIm5vdGlmeUFwcCIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiZGlzcGF0Y2giLCJUZW1wb0xhbmd1YWdlUHJvdmlkZXIiLCJ0b2tlbml6ZXIiLCJQUklTTV9MQU5HVUFHRSIsImR1cmF0aW9uUGxhY2Vob2xkZXIiLCJOYXRpdmVTZWFyY2giLCJoYXNTeW50YXhMb2FkZWQiLCJzZXRIYXNTeW50YXhMb2FkZWQiLCJhc3luY1NlcnZpY2VOYW1lVmFsdWUiLCJzZXRBc3luY1NlcnZpY2VOYW1lVmFsdWUiLCJhc3luY1NwYW5OYW1lVmFsdWUiLCJzZXRBc3luY1NwYW5OYW1lVmFsdWUiLCJzZXRFcnJvciIsImlucHV0RXJyb3JzIiwic2V0SW5wdXRFcnJvcnMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzZXJ2aWNlTmFtZSIsInNwYW5OYW1lIiwiZmV0Y2hPcHRpb25zQ2FsbGJhY2siLCJscCIsInByZXZWYWx1ZSIsImdldE9wdGlvbnMiLCJmaWx0ZXJlZE9wdGlvbnMiLCJpdGVtIiwibG9hZE9wdGlvbnNPZlR5cGUiLCJmZXRjaE9wdGlvbnNPZlR5cGUiLCJsZWFkaW5nIiwidHJhaWxpbmciLCJnZXROYW1lT3B0aW9ucyIsImdldFNlcnZpY2VOYW1lT3B0aW9ucyIsImdldFNwYW5OYW1lT3B0aW9ucyIsInNlcnZpY2VOYW1lU2VhcmNoIiwic3Bhbk5hbWVTZWFyY2giLCJmZXRjaE9wdGlvbnMiLCJzcGxpdHRlZFRleHQiLCJzcGxpdCIsIm9uS2V5RG93biIsImtleUV2ZW50Iiwic2hpZnRLZXkiLCJjdHJsS2V5IiwidGVtcGxhdGVTcnYiLCJzZWFyY2giLCJtaW5EdXJhdGlvbiIsInRlbXBsYXRlZE1pbkR1cmF0aW9uIiwibWF4RHVyYXRpb24iLCJ0ZW1wbGF0ZWRNYXhEdXJhdGlvbiIsImxpbWl0IiwicGFyc2VJbnQiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJhbGVydCIsInVzZUFzeW5jIiwiQmFkZ2UiLCJGaWxlRHJvcHpvbmUiLCJSYWRpb0J1dHRvbkdyb3VwIiwiU2VydmljZUdyYXBoU2VjdGlvbiIsImdldERTIiwiREVGQVVMVF9RVUVSWV9UWVBFIiwiVGVtcG9RdWVyeUZpZWxkQ29tcG9uZW50IiwibGlua2VkUXVlcnkiLCJyZWZJZCIsInF1ZXJ5VHlwZSIsImxvZ3NEYXRhc291cmNlVWlkIiwiZ2V0TG9raVNlYXJjaERTIiwiZ3JhcGhEYXRhc291cmNlVWlkIiwic2VydmljZU1hcCIsInF1ZXJ5VHlwZU9wdGlvbnMiLCJmZWF0dXJlVG9nZ2xlcyIsInRlbXBvU2VydmljZUdyYXBoIiwidGVtcG9TZWFyY2giLCJoaWRlIiwidW5zaGlmdCIsIm9uQ2xlYXJSZXN1bHRzIiwibWF4V2lkdGgiLCJ0ZW1wb0JhY2tlbmRTZWFyY2giLCJvblJ1bkxpbmtlZFF1ZXJ5Iiwib25DaGFuZ2VMaW5rZWRRdWVyeSIsInBhZGRpbmciLCJtdWx0aXBsZSIsInVwbG9hZGVkSnNvbiIsInZhbCIsIlNlYXJjaFNlY3Rpb24iLCJkc1N0YXRlIiwiVGVtcG9RdWVyeUZpZWxkIiwiQWRIb2NGaWx0ZXIiLCJoYXNLZXlzIiwic2V0SGFzS2V5cyIsImZuIiwiZ2V0VGFnS2V5cyIsInNlcmllcyIsIkJvb2xlYW4iLCJmaWx0ZXJzIiwicXVlcnlUb0ZpbHRlciIsInNlcnZpY2VNYXBRdWVyeSIsImZpbHRlcnNUb1F1ZXJ5IiwibmV3RmlsdGVycyIsInNwbGljZSIsInJlIiwiZXhlYyIsImNvbmRpdGlvbiIsImYiLCJnZXREYXRhU291cmNlU3J2IiwiZHNTcnYiLCJnZXQiLCJEYXRhU291cmNlSHR0cFNldHRpbmdzIiwiTG9raVNlYXJjaFNldHRpbmdzIiwiU2VhcmNoU2V0dGluZ3MiLCJTZXJ2aWNlR3JhcGhTZXR0aW5ncyIsIkNvbmZpZ0VkaXRvciIsInRyYWNlVG9NZXRyaWNzIiwibGVnYWN5RGF0YXNvdXJjZSIsImxva2lTZWFyY2giLCJpZGVudGl0eSIsInBpY2siLCJwaWNrQnkiLCJncm91cEJ5Iiwic3RhcnRDYXNlIiwiRU1QVFkiLCJtZXJnZSIsIm9mIiwidGhyb3dFcnJvciIsImNhdGNoRXJyb3IiLCJtZXJnZU1hcCIsInRvQXJyYXkiLCJMb2FkaW5nU3RhdGUiLCJEYXRhU291cmNlV2l0aEJhY2tlbmQiLCJnZXRCYWNrZW5kU3J2Iiwic2VyaWFsaXplUGFyYW1zIiwiZ2V0RGF0YXNvdXJjZVNydiIsImZhaWxlZE1ldHJpYyIsImhpc3RvZ3JhbU1ldHJpYyIsIm1hcFByb21NZXRyaWNzVG9TZXJ2aWNlTWFwIiwic2VydmljZU1hcE1ldHJpY3MiLCJ0b3RhbHNNZXRyaWMiLCJ0cmFuc2Zvcm1UcmFjZSIsInRyYW5zZm9ybVRyYWNlTGlzdCIsInRyYW5zZm9ybUZyb21PVExQIiwidHJhbnNmb3JtRnJvbU9URUwiLCJjcmVhdGVUYWJsZUZyYW1lRnJvbVNlYXJjaCIsIkRFRkFVTFRfTElNSVQiLCJUZW1wb0RhdGFzb3VyY2UiLCJpbnN0YW5jZVNldHRpbmdzIiwibGVnYWN5TG9nc0RhdGFzb3VyY2VVaWQiLCJzdWJRdWVyaWVzIiwiZmlsdGVyZWRUYXJnZXRzIiwidGFyZ2V0cyIsInQiLCJjbGVhciIsImRhdGEiLCJEb25lIiwicGlwZSIsImxpbmtlZERhdGFzb3VyY2UiLCJsaW5rZWRSZXF1ZXN0Iiwic2V0dGluZ3MiLCJ0cmFjZUxpbmtNYXRjaGVyIiwiZGVyaXZlZEZpZWxkcyIsImZpZWxkIiwibWF0Y2hlclJlZ2V4IiwiRXJyb3IiLCJyZXNwb25zZSIsIm5hdGl2ZVNlYXJjaCIsInRpbWVSYW5nZSIsInN0YXJ0VGltZSIsInVuaXgiLCJlbmRUaW1lIiwiYXBwbHlWYXJpYWJsZXMiLCJzY29wZWRWYXJzIiwic2VhcmNoUXVlcnkiLCJidWlsZFNlYXJjaFF1ZXJ5IiwiX3JlcXVlc3QiLCJ0cmFjZXMiLCJtZXNzYWdlIiwidXBsb2FkIiwib3RlbFRyYWNlRGF0YSIsIkpTT04iLCJwYXJzZSIsImJhdGNoZXMiLCJ0cmFjZUlkIiwiaGFuZGxlVHJhY2VJZFF1ZXJ5IiwiYXBwbHlUZW1wbGF0ZVZhcmlhYmxlcyIsImludGVycG9sYXRlVmFyaWFibGVzSW5RdWVyaWVzIiwicXVlcmllcyIsImdldFJlZiIsImV4cGFuZGVkUXVlcnkiLCJ2YWxpZFRhcmdldHMiLCJ0cmFjZVJlcXVlc3QiLCJtZXRhZGF0YVJlcXVlc3QiLCJ1cmwiLCJwYXJhbXMiLCJtZXRob2QiLCJoaWRlRnJvbUluc3BlY3RvciIsInRvUHJvbWlzZSIsImFwaVVybCIsInJlcSIsImZldGNoIiwidGVzdERhdGFzb3VyY2UiLCJoZWFkZXJzIiwib2siLCJnZXRRdWVyeURpc3BsYXlUZXh0IiwiaGFzT3duUHJvcGVydHkiLCJ0ZW1wb1F1ZXJ5IiwiZ2V0U2VydmljZUdyYXBoTGFiZWxzIiwiZ2V0U2VydmljZUdyYXBoTGFiZWxWYWx1ZXMiLCJnZXRUYWdWYWx1ZXMiLCJxdWVyeVNlcnZpY2VNYXBQcm9tZXRoZXVzIiwicmVxdWVzdCIsIm1ha2VQcm9tU2VydmljZU1hcFJlcXVlc3QiLCJyZXNwb25zZXMiLCJlcnJvclJlcyIsInJlcyIsIm5vZGVzIiwiZWRnZXMiLCJsaW5rcyIsIm1ha2VQcm9tTGluayIsIm1ldHJpYyIsImludGVybmFsIiwiZGF0YXNvdXJjZU5hbWUiLCJpbnN0YW50IiwiRGF0YUZyYW1lVmlldyIsIkZpZWxkQ29sb3JNb2RlSWQiLCJjcmVhdGVHcmFwaEZyYW1lcyIsImNvbnZlcnRUcmFjZVRvR3JhcGgiLCJhZGQiLCJlZGdlIiwidmlldyIsImZpbmRUcmFjZUR1cmF0aW9uIiwic3BhbklEIiwicGFyZW50U3BhbklEIiwiYyIsImNoaWxkcmVuRHVyYXRpb24iLCJzdGF0cyIsIm9wZXJhdGlvbk5hbWUiLCJ0cmFjZUVuZFRpbWUiLCJ0cmFjZVN0YXJ0VGltZSIsInNlY29uZHNNZXRyaWMiLCJmcmFtZXMiLCJnZXRNZXRyaWNGcmFtZXMiLCJub2Rlc01hcCIsImVkZ2VzTWFwIiwiY29sbGVjdE1ldHJpY0RhdGEiLCJjb252ZXJ0VG9EYXRhRnJhbWVzIiwiY3JlYXRlU2VydmljZU1hcERhdGFGcmFtZXMiLCJjcmVhdGVERiIsInVuaXQiLCJhcmMiLCJmaXhlZENvbG9yIiwiRml4ZWQiLCJmcmFtZSIsInN0YXQiLCJ2YWx1ZU5hbWUiLCJlZGdlSWQiLCJjbGllbnQiLCJzZXJ2ZXIiLCJyYW5nZU1zIiwibm9kZUlkIiwidG90YWwiLCJOYU4iLCJyb3VuZCIsIm1pbiIsImZhaWxlZCIsIkxhbmd1YWdlUHJvdmlkZXIiLCJpbml0aWFsVmFsdWVzIiwiZmV0Y2hUYWdzIiwiY29udGV4dCIsImVtcHR5UmVzdWx0IiwiZW5kVGV4dCIsImdldFRleHQiLCJpc1ZhbHVlIiwiaW5kZXhPZiIsImdldFRhZ1ZhbHVlQ29tcGxldGlvbkl0ZW1zIiwiZ2V0VGFnc0NvbXBsZXRpb25JdGVtcyIsIml0ZW1zIiwiYXNzaWduIiwidGFnTmFtZXMiLCJ0YWdOYW1lIiwidGFnVmFsdWVzIiwidGFnVmFsdWUiLCJEYXRhU291cmNlUGx1Z2luIiwicGx1Z2luIiwic2V0UXVlcnlFZGl0b3IiLCJzZXRDb25maWdFZGl0b3IiLCJzZXRRdWVyeUVkaXRvckhlbHAiLCJTcGFuU3RhdHVzQ29kZSIsIlNlbWFudGljUmVzb3VyY2VBdHRyaWJ1dGVzIiwiZGlmZmVyZW5jZUluSG91cnMiLCJmb3JtYXREaXN0YW5jZSIsIkFycmF5VmVjdG9yIiwiZGF0ZVRpbWVGb3JtYXQiLCJjcmVhdGVUYWJsZUZyYW1lIiwibG9nc0ZyYW1lIiwidHJhY2VSZWdleHMiLCJ0YWJsZUZyYW1lIiwidGltZSIsImN1c3RvbSIsImRpc3BsYXlOYW1lRnJvbURTIiwidGltZUZpZWxkIiwiaGFzTWF0Y2giLCJsaW5lIiwidHJhY2VSZWdleCIsImRhdGFzb3VyY2VJZCIsInRyYW5zZm9ybUJhc2U2NElEVG9IZXhTdHJpbmciLCJiYXNlNjQiLCJyYXciLCJhdG9iIiwiaGV4IiwiY2hhckNvZGVBdCIsInRvU3RyaW5nIiwidHJhbnNmb3JtSGV4U3RyaW5nVG9CYXNlNjRJRCIsImhleEFycmF5IiwiYnRvYSIsImZyb21DaGFyQ29kZSIsImdldEF0dHJpYnV0ZVZhbHVlIiwic3RyaW5nVmFsdWUiLCJib29sVmFsdWUiLCJpbnRWYWx1ZSIsImRvdWJsZVZhbHVlIiwiYXJyYXlWYWx1ZSIsImFyVmFsdWUiLCJyZXNvdXJjZVRvUHJvY2VzcyIsInJlc291cmNlIiwic2VydmljZVRhZ3MiLCJhdHRyaWJ1dGUiLCJhdHRyaWJ1dGVzIiwiU0VSVklDRV9OQU1FIiwiZ2V0U3BhblRhZ3MiLCJpbnN0cnVtZW50YXRpb25MaWJyYXJ5Iiwic3BhblRhZ3MiLCJ2ZXJzaW9uIiwiY29kZSIsIlVOU0VUIiwiRVJST1IiLCJraW5kIiwiZ2V0UmVmZXJlbmNlcyIsInJlZmVyZW5jZXMiLCJsaW5rIiwic3BhbklkIiwidHJhY2VJRCIsImdldExvZ3MiLCJsb2dzIiwiZXZlbnRzIiwidGltZXN0YW1wIiwidGltZVVuaXhOYW5vIiwidHJhY2VEYXRhIiwib3RoZXIiLCJ0cmFjZUZvcm1hdCIsImxpYnJhcnlTcGFuIiwiaW5zdHJ1bWVudGF0aW9uTGlicmFyeVNwYW5zIiwic3BhbnMiLCJwYXJlbnRTcGFuSWQiLCJzdGFydFRpbWVVbml4TmFubyIsImVuZFRpbWVVbml4TmFubyIsInRyYW5zZm9ybVRvT1RMUCIsInNlcnZpY2VzIiwiZHJvcHBlZEF0dHJpYnV0ZXNDb3VudCIsImJhdGNoSW5kZXgiLCJ0YWdzVG9BdHRyaWJ1dGVzIiwibGlicmFyeU5hbWUiLCJwYWRTdGFydCIsInRyYWNlU3RhdGUiLCJnZXRPVExQU3BhbktpbmQiLCJkcm9wcGVkRXZlbnRzQ291bnQiLCJkcm9wcGVkTGlua3NDb3VudCIsImdldE9UTFBTdGF0dXMiLCJnZXRPVExQRXZlbnRzIiwiZ2V0T1RMUFJlZmVyZW5jZXMiLCJzcGFuS2luZCIsInNwYW5LaW5kVGFnVmFsdWUiLCJ0b0F0dHJpYnV0ZVZhbHVlIiwiQXJyYXkiLCJpc0FycmF5Iiwic3RhdHVzQ29kZVRhZyIsImxvZyIsInJlZiIsImVtcHR5RGF0YVF1ZXJ5UmVzcG9uc2UiLCJwYXJzZUpzb25GaWVsZHMiLCJmaWVsZE5hbWUiLCJmaWVsZEluZGV4IiwibmV3RmllbGQiLCJzZXQiLCJ0cmFuc2Zvcm1Ub1RyYWNlRGF0YSIsInRyYWNlIiwidHJhY2VOYW1lIiwicm9vdFNlcnZpY2VOYW1lIiwicm9vdFRyYWNlTmFtZSIsImFicyIsIkRhdGUiLCJub3ciLCJhZGRTdWZmaXgiLCJpbmNsdWRlU2Vjb25kcyIsImR1cmF0aW9uTXMiLCJwYXR0ZXJuIiwiYWxpYXMiXSwic291cmNlUm9vdCI6IiJ9