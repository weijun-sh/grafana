"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[7040],{

/***/ "./public/app/features/inspector/InspectDataTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ InspectDataTab)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/file-saver-npm-2.0.5-2c3bc40d53-c62d96e5ce.zip/node_modules/file-saver/dist/FileSaver.min.js
var FileSaver_min = __webpack_require__("./.yarn/cache/file-saver-npm-2.0.5-2c3bc40d53-c62d96e5ce.zip/node_modules/file-saver/dist/FileSaver.min.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js
var index_esm = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-e2e-selectors/src/index.ts + 3 modules
var grafana_e2e_selectors_src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/config.ts
var config = __webpack_require__("./public/app/core/config.ts");
// EXTERNAL MODULE: ./public/app/core/logs_model.ts + 1 modules
var logs_model = __webpack_require__("./public/app/core/logs_model.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/jaeger/responseTransform.ts
var responseTransform = __webpack_require__("./public/app/plugins/datasource/jaeger/responseTransform.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/tempo/resultTransformer.ts + 43 modules
var resultTransformer = __webpack_require__("./public/app/plugins/datasource/tempo/resultTransformer.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/zipkin/utils/transforms.ts
var transforms = __webpack_require__("./public/app/plugins/datasource/zipkin/utils/transforms.ts");
// EXTERNAL MODULE: ./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx
var QueryOperationRow = __webpack_require__("./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/inspector/DetailText.tsx





const getStyles = theme => emotion_css_esm.css`
  margin: 0;
  margin-left: ${theme.spacing.md};
  font-size: ${theme.typography.size.sm};
  color: ${theme.colors.textWeak};
`;

const DetailText = _ref => {
  let {
    children
  } = _ref;
  const collapsedTextStyles = (0,grafana_ui_src.useStyles)(getStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
    className: collapsedTextStyles,
    children: children
  });
};
// EXTERNAL MODULE: ./public/app/features/inspector/styles.ts
var inspector_styles = __webpack_require__("./public/app/features/inspector/styles.ts");
;// CONCATENATED MODULE: ./public/app/features/inspector/InspectDataOptions.tsx








const InspectDataOptions = _ref => {
  var _panel$plugin;

  let {
    options,
    onOptionsChange,
    panel,
    data,
    dataFrames,
    transformId,
    transformationOptions,
    selectedDataFrame,
    onDataFrameChange,
    downloadForExcel,
    toggleDownloadForExcel
  } = _ref;
  const styles = (0,inspector_styles/* getPanelInspectorStyles */.S)();
  const panelTransformations = panel === null || panel === void 0 ? void 0 : panel.getTransformations();
  const showPanelTransformationsOption = Boolean(panelTransformations === null || panelTransformations === void 0 ? void 0 : panelTransformations.length) && transformId !== 'join by time';
  const showFieldConfigsOption = panel && !((_panel$plugin = panel.plugin) !== null && _panel$plugin !== void 0 && _panel$plugin.fieldConfigRegistry.isEmpty());
  let dataSelect = dataFrames;

  if (selectedDataFrame === src.DataTransformerID.seriesToColumns) {
    dataSelect = data;
  }

  const choices = dataSelect.map((frame, index) => {
    return {
      value: index,
      label: `${(0,src.getFrameDisplayName)(frame)} (${index})`
    };
  });
  const selectableOptions = [...transformationOptions, ...choices];

  function getActiveString() {
    let activeString = '';

    if (!data) {
      return activeString;
    }

    const parts = [];

    if (selectedDataFrame === src.DataTransformerID.seriesToColumns) {
      parts.push('Series joined by time');
    } else if (data.length > 1) {
      parts.push((0,src.getFrameDisplayName)(data[selectedDataFrame]));
    }

    if (options.withTransforms || options.withFieldConfig) {
      if (options.withTransforms) {
        parts.push('Panel transforms');
      }

      if (options.withTransforms && options.withFieldConfig) {}

      if (options.withFieldConfig) {
        parts.push('Formatted data');
      }
    }

    if (downloadForExcel) {
      parts.push('Excel header');
    }

    return parts.join(', ');
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.dataDisplayOptions,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(QueryOperationRow/* QueryOperationRow */.t, {
      id: "Data options",
      index: 0,
      title: "Data options",
      headerElement: /*#__PURE__*/(0,jsx_runtime.jsx)(DetailText, {
        children: getActiveString()
      }),
      isOpen: false,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.options,
        "data-testid": "dataOptions",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
          spacing: "none",
          children: [data.length > 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
            label: "Show data frame",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
              options: selectableOptions,
              value: selectedDataFrame,
              onChange: onDataFrameChange,
              width: 30,
              "aria-label": "Select dataframe"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
            children: [showPanelTransformationsOption && onOptionsChange && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
              label: "Apply panel transformations",
              description: "Table data is displayed with transformations defined in the panel Transform tab.",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Switch, {
                value: !!options.withTransforms,
                onChange: () => onOptionsChange(Object.assign({}, options, {
                  withTransforms: !options.withTransforms
                }))
              })
            }), showFieldConfigsOption && onOptionsChange && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
              label: "Formatted data",
              description: "Table data is formatted with options defined in the Field and Override tabs.",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Switch, {
                id: "formatted-data-toggle",
                value: !!options.withFieldConfig,
                onChange: () => onOptionsChange(Object.assign({}, options, {
                  withFieldConfig: !options.withFieldConfig
                }))
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
              label: "Download for Excel",
              description: "Adds header to CSV for use with Excel",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Switch, {
                id: "excel-toggle",
                value: downloadForExcel,
                onChange: toggleDownloadForExcel
              })
            })]
          })]
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./public/app/features/inspector/InspectDataTab.tsx
var _div, _div2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class InspectDataTab extends react.PureComponent {
  constructor(props) {
    var _this, _props$data;

    super(props);
    _this = this;

    _defineProperty(this, "exportCsv", function (dataFrame) {
      let csvConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const {
        panel
      } = _this.props;
      const {
        transformId
      } = _this.state;
      const dataFrameCsv = (0,src.toCSV)([dataFrame], csvConfig);
      const blob = new Blob([String.fromCharCode(0xfeff), dataFrameCsv], {
        type: 'text/csv;charset=utf-8'
      });
      const displayTitle = panel ? panel.getDisplayTitle() : 'Explore';
      const transformation = transformId !== src.DataTransformerID.noop ? '-as-' + transformId.toLocaleLowerCase() : '';
      const fileName = `${displayTitle}-data${transformation}-${(0,src.dateTimeFormat)(new Date())}.csv`;
      (0,FileSaver_min.saveAs)(blob, fileName);
    });

    _defineProperty(this, "exportLogsAsTxt", () => {
      var _logsModel$meta;

      const {
        data,
        panel
      } = this.props;
      const logsModel = (0,logs_model/* dataFrameToLogsModel */.aB)(data || [], undefined);
      let textToDownload = '';
      (_logsModel$meta = logsModel.meta) === null || _logsModel$meta === void 0 ? void 0 : _logsModel$meta.forEach(metaItem => {
        const string = `${metaItem.label}: ${JSON.stringify(metaItem.value)}\n`;
        textToDownload = textToDownload + string;
      });
      textToDownload = textToDownload + '\n\n';
      logsModel.rows.forEach(row => {
        const newRow = (0,src.dateTimeFormatISO)(row.timeEpochMs) + '\t' + row.entry + '\n';
        textToDownload = textToDownload + newRow;
      });
      const blob = new Blob([textToDownload], {
        type: 'text/plain;charset=utf-8'
      });
      const displayTitle = panel ? panel.getDisplayTitle() : 'Explore';
      const fileName = `${displayTitle}-logs-${(0,src.dateTimeFormat)(new Date())}.txt`;
      (0,FileSaver_min.saveAs)(blob, fileName);
    });

    _defineProperty(this, "exportTracesAsJson", () => {
      var _df$meta2, _df$meta2$custom;

      const {
        data,
        panel
      } = this.props;

      if (!data) {
        return;
      }

      for (const df of data) {
        var _df$meta;

        // Only export traces
        if (((_df$meta = df.meta) === null || _df$meta === void 0 ? void 0 : _df$meta.preferredVisualisationType) !== 'trace') {
          continue;
        }

        switch ((_df$meta2 = df.meta) === null || _df$meta2 === void 0 ? void 0 : (_df$meta2$custom = _df$meta2.custom) === null || _df$meta2$custom === void 0 ? void 0 : _df$meta2$custom.traceFormat) {
          case 'jaeger':
            {
              let res = (0,responseTransform/* transformToJaeger */.c6)(new src.MutableDataFrame(df));
              this.saveTraceJson(res, panel);
              break;
            }

          case 'zipkin':
            {
              let res = (0,transforms/* transformToZipkin */.H)(new src.MutableDataFrame(df));
              this.saveTraceJson(res, panel);
              break;
            }

          case 'otlp':
          default:
            {
              let res = (0,resultTransformer/* transformToOTLP */.g9)(new src.MutableDataFrame(df));
              this.saveTraceJson(res, panel);
              break;
            }
        }
      }
    });

    _defineProperty(this, "saveTraceJson", (json, panel) => {
      const blob = new Blob([JSON.stringify(json)], {
        type: 'application/json'
      });
      const displayTitle = panel ? panel.getDisplayTitle() : 'Explore';
      const fileName = `${displayTitle}-traces-${(0,src.dateTimeFormat)(new Date())}.json`;
      (0,FileSaver_min.saveAs)(blob, fileName);
    });

    _defineProperty(this, "onDataFrameChange", item => {
      this.setState({
        transformId: item.value === src.DataTransformerID.seriesToColumns ? src.DataTransformerID.seriesToColumns : src.DataTransformerID.noop,
        dataFrameIndex: typeof item.value === 'number' ? item.value : 0,
        selectedDataFrame: item.value
      });
    });

    _defineProperty(this, "toggleDownloadForExcel", () => {
      this.setState(prevState => ({
        downloadForExcel: !prevState.downloadForExcel
      }));
    });

    this.state = {
      selectedDataFrame: 0,
      dataFrameIndex: 0,
      transformId: src.DataTransformerID.noop,
      transformationOptions: buildTransformationOptions(),
      transformedData: (_props$data = props.data) !== null && _props$data !== void 0 ? _props$data : [],
      downloadForExcel: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.data) {
      this.setState({
        transformedData: []
      });
      return;
    }

    if (this.props.options.withTransforms) {
      this.setState({
        transformedData: this.props.data
      });
      return;
    }

    if (prevProps.data !== this.props.data || prevState.transformId !== this.state.transformId) {
      const currentTransform = this.state.transformationOptions.find(item => item.value === this.state.transformId);

      if (currentTransform && currentTransform.transformer.id !== src.DataTransformerID.noop) {
        const selectedDataFrame = this.state.selectedDataFrame;
        const dataFrameIndex = this.state.dataFrameIndex;
        const subscription = (0,src.transformDataFrame)([currentTransform.transformer], this.props.data).subscribe(data => {
          this.setState({
            transformedData: data,
            selectedDataFrame,
            dataFrameIndex
          }, () => subscription.unsubscribe());
        });
        return;
      }

      this.setState({
        transformedData: this.props.data
      });
      return;
    }
  }

  getProcessedData() {
    const {
      options,
      panel,
      timeZone
    } = this.props;
    const data = this.state.transformedData;

    if (!options.withFieldConfig || !panel) {
      return (0,src.applyRawFieldOverrides)(data);
    } // We need to apply field config even though it was already applied in the PanelQueryRunner.
    // That's because transformers create new fields and data frames, so i.e. display processor is no longer there


    return (0,src.applyFieldOverrides)({
      data,
      theme: config/* config.theme2 */.vc.theme2,
      fieldConfig: panel.fieldConfig,
      timeZone,
      replaceVariables: value => {
        return value;
      }
    });
  }

  render() {
    const {
      isLoading,
      options,
      data,
      panel,
      onOptionsChange
    } = this.props;
    const {
      dataFrameIndex,
      transformId,
      transformationOptions,
      selectedDataFrame,
      downloadForExcel
    } = this.state;
    const styles = (0,inspector_styles/* getPanelInspectorStyles */.S)();

    if (isLoading) {
      return _div || (_div = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Spinner, {
          inline: true
        }), " Loading"]
      }));
    }

    const dataFrames = this.getProcessedData();

    if (!dataFrames || !dataFrames.length) {
      return _div2 || (_div2 = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: "No Data"
      }));
    } // let's make sure we don't try to render a frame that doesn't exists


    const index = !dataFrames[dataFrameIndex] ? 0 : dataFrameIndex;
    const dataFrame = dataFrames[index];
    const hasLogs = dataFrames.some(df => {
      var _df$meta3;

      return (df === null || df === void 0 ? void 0 : (_df$meta3 = df.meta) === null || _df$meta3 === void 0 ? void 0 : _df$meta3.preferredVisualisationType) === 'logs';
    });
    const hasTraces = dataFrames.some(df => {
      var _df$meta4;

      return (df === null || df === void 0 ? void 0 : (_df$meta4 = df.meta) === null || _df$meta4 === void 0 ? void 0 : _df$meta4.preferredVisualisationType) === 'trace';
    });
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.wrap,
      "aria-label": grafana_e2e_selectors_src/* selectors.components.PanelInspector.Data.content */.wl.components.PanelInspector.Data.content,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.toolbar,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InspectDataOptions, {
          data: data,
          panel: panel,
          options: options,
          dataFrames: dataFrames,
          transformId: transformId,
          transformationOptions: transformationOptions,
          selectedDataFrame: selectedDataFrame,
          downloadForExcel: downloadForExcel,
          onOptionsChange: onOptionsChange,
          onDataFrameChange: this.onDataFrameChange,
          toggleDownloadForExcel: this.toggleDownloadForExcel
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "primary",
          onClick: () => this.exportCsv(dataFrames[dataFrameIndex], {
            useExcelHeader: this.state.downloadForExcel
          }),
          className: emotion_css_esm.css`
              margin-bottom: 10px;
            `,
          children: "Download CSV"
        }), hasLogs && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "primary",
          onClick: this.exportLogsAsTxt,
          className: emotion_css_esm.css`
                margin-bottom: 10px;
                margin-left: 10px;
              `,
          children: "Download logs"
        }), hasTraces && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "primary",
          onClick: this.exportTracesAsJson,
          className: emotion_css_esm.css`
                margin-bottom: 10px;
                margin-left: 10px;
              `,
          children: "Download traces"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.content,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* default */.Z, {
          children: _ref => {
            let {
              width,
              height
            } = _ref;

            if (width === 0) {
              return null;
            }

            return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              style: {
                width,
                height
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Table, {
                width: width,
                height: height,
                data: dataFrame,
                showTypeIcons: true
              })
            });
          }
        })
      })]
    });
  }

}

function buildTransformationOptions() {
  const transformations = [{
    value: src.DataTransformerID.seriesToColumns,
    label: 'Series joined by time',
    transformer: {
      id: src.DataTransformerID.seriesToColumns,
      options: {
        byField: 'Time'
      }
    }
  }];
  return transformations;
}

/***/ }),

/***/ "./public/app/features/inspector/InspectErrorTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ InspectErrorTab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _h, _JSONFormatter;







const parseErrorMessage = message => {
  try {
    const [msg, json] = message.split(/(\{.+)/);
    const jsonError = JSON.parse(json);
    return {
      msg,
      json: jsonError
    };
  } catch {
    return {
      msg: message
    };
  }
};

const InspectErrorTab = _ref => {
  let {
    error
  } = _ref;

  if (!error) {
    return null;
  }

  if (error.data) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
        children: error.data.message
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.JSONFormatter, {
        json: error,
        open: 2
      })]
    });
  }

  if (error.message) {
    const {
      msg,
      json
    } = parseErrorMessage(error.message);

    if (!json) {
      return _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: msg
      }));
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [msg !== '' && (_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
          children: msg
        }))), _JSONFormatter || (_JSONFormatter = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.JSONFormatter, {
          json: json,
          open: 5
        }))]
      });
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.JSONFormatter, {
    json: error,
    open: 2
  });
};

/***/ }),

/***/ "./public/app/features/inspector/InspectJSONTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ InspectJSONTab)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var _inspector_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/inspector/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var ShowContent;

(function (ShowContent) {
  ShowContent["PanelJSON"] = "panel";
  ShowContent["PanelData"] = "data";
  ShowContent["DataFrames"] = "frames";
})(ShowContent || (ShowContent = {}));

const options = [{
  label: 'Panel JSON',
  description: 'The model saved in the dashboard JSON that configures how everything works.',
  value: ShowContent.PanelJSON
}, {
  label: 'Panel data',
  description: 'The raw model passed to the panel visualization',
  value: ShowContent.PanelData
}, {
  label: 'DataFrame JSON',
  description: 'JSON formatted DataFrames',
  value: ShowContent.DataFrames
}];
class InspectJSONTab extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "hasPanelJSON", void 0);

    _defineProperty(this, "onSelectChanged", item => {
      const show = this.getJSONObject(item.value);
      const text = getPrettyJSON(show);
      this.setState({
        text,
        show: item.value
      });
    });

    _defineProperty(this, "onTextChanged", text => {
      this.setState({
        text
      });
    });

    _defineProperty(this, "onApplyPanelModel", () => {
      const {
        panel,
        dashboard,
        onClose
      } = this.props;

      if (this.hasPanelJSON) {
        try {
          if (!dashboard.meta.canEdit) {
            app_core_core__WEBPACK_IMPORTED_MODULE_5__/* .appEvents.emit */ .h$.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertError, ['Unable to apply']);
          } else {
            const updates = JSON.parse(this.state.text);
            dashboard.shouldUpdateDashboardPanelFromJSON(updates, panel);
            panel.restoreModel(updates);
            panel.refresh();
            app_core_core__WEBPACK_IMPORTED_MODULE_5__/* .appEvents.emit */ .h$.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertSuccess, ['Panel model updated']);
          }
        } catch (err) {
          console.error('Error applying updates', err);
          app_core_core__WEBPACK_IMPORTED_MODULE_5__/* .appEvents.emit */ .h$.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertError, ['Invalid JSON text']);
        }

        onClose();
      }
    });

    this.hasPanelJSON = !!(props.panel && props.dashboard); // If we are in panel, we want to show PanelJSON, otherwise show DataFrames

    this.state = {
      show: this.hasPanelJSON ? ShowContent.PanelJSON : ShowContent.DataFrames,
      text: this.hasPanelJSON ? getPrettyJSON(props.panel.getSaveModel()) : getPrettyJSON(props.data)
    };
  }

  getJSONObject(show) {
    const {
      data,
      panel
    } = this.props;

    if (show === ShowContent.PanelData) {
      return data;
    }

    if (show === ShowContent.DataFrames) {
      const series = data === null || data === void 0 ? void 0 : data.series;

      if (!series) {
        return {
          note: 'Missing Response Data'
        };
      }

      return data.series.map(frame => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dataFrameToJSON)(frame));
    }

    if (this.hasPanelJSON && show === ShowContent.PanelJSON) {
      return panel.getSaveModel();
    }

    return {
      note: `Unknown Object: ${show}`
    };
  }

  render() {
    const {
      dashboard
    } = this.props;
    const {
      show,
      text
    } = this.state;
    const jsonOptions = this.hasPanelJSON ? options : options.slice(1, options.length);
    const selected = options.find(v => v.value === show);
    const isPanelJSON = show === ShowContent.PanelJSON;
    const canEdit = dashboard && dashboard.meta.canEdit;
    const styles = (0,_inspector_styles__WEBPACK_IMPORTED_MODULE_6__/* .getPanelInspectorStyles */ .S)();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: styles.wrap,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: styles.toolbar,
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__/* .selectors.components.PanelInspector.Json.content */ .wl.components.PanelInspector.Json.content,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
          label: "Select source",
          className: "flex-grow-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
            inputId: "select-source-dropdown",
            options: jsonOptions,
            value: selected,
            onChange: this.onSelectChanged
          })
        }), this.hasPanelJSON && isPanelJSON && canEdit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
          className: styles.toolbarItem,
          onClick: this.onApplyPanelModel,
          children: "Apply"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: styles.content,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
          disableWidth: true,
          children: _ref => {
            let {
              height
            } = _ref;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.CodeEditor, {
              width: "100%",
              height: height,
              language: "json",
              showLineNumbers: true,
              showMiniMap: (text && text.length) > 100,
              value: text || '',
              readOnly: !isPanelJSON,
              onBlur: this.onTextChanged
            });
          }
        })
      })]
    });
  }

}

function getPrettyJSON(obj) {
  return JSON.stringify(obj, null, 2);
}

/***/ }),

/***/ "./public/app/features/inspector/InspectStatsTab.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ InspectStatsTab)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./packages/grafana-e2e-selectors/src/index.ts + 3 modules
var src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/inspector/InspectStatsTable.tsx






const InspectStatsTable = _ref => {
  let {
    timeZone,
    name,
    stats
  } = _ref;
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = getStyles(theme);

  if (!stats || !stats.length) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "section-heading",
      children: name
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("table", {
      className: "filter-table width-30",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
        children: stats.map((stat, index) => {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              children: stat.displayName
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              className: styles.cell,
              children: formatStat(stat, timeZone, theme)
            })]
          }, `${stat.displayName}-${index}`);
        })
      })
    })]
  });
};

function formatStat(stat, timeZone, theme) {
  const display = (0,grafana_data_src.getDisplayProcessor)({
    field: {
      type: grafana_data_src.FieldType.number,
      config: stat
    },
    theme,
    timeZone
  });
  return (0,grafana_data_src.formattedValueToString)(display(stat.value));
}

const getStyles = (0,grafana_ui_src.stylesFactory)(theme => {
  return {
    wrapper: emotion_css_esm.css`
      padding-bottom: ${theme.spacing(2)};
    `,
    cell: emotion_css_esm.css`
      text-align: right;
    `
  };
});
;// CONCATENATED MODULE: ./public/app/features/inspector/InspectStatsTab.tsx





const InspectStatsTab = _ref => {
  var _data$timings;

  let {
    data,
    timeZone
  } = _ref;

  if (!data.request) {
    return null;
  }

  let stats = [];
  const requestTime = data.request.endTime ? data.request.endTime - data.request.startTime : -1;
  const processingTime = ((_data$timings = data.timings) === null || _data$timings === void 0 ? void 0 : _data$timings.dataProcessingTime) || -1;
  let dataRows = 0;

  for (const frame of data.series) {
    dataRows += frame.length;
  }

  if (requestTime > 0) {
    stats.push({
      displayName: 'Total request time',
      value: requestTime,
      unit: 'ms'
    });
  }

  if (processingTime > 0) {
    stats.push({
      displayName: 'Data processing time',
      value: processingTime,
      unit: 'ms'
    });
  }

  stats.push({
    displayName: 'Number of queries',
    value: data.request.targets.length
  });
  stats.push({
    displayName: 'Total number rows',
    value: dataRows
  });
  let dataStats = [];

  for (const series of data.series) {
    if (series.meta && series.meta.stats) {
      dataStats = dataStats.concat(series.meta.stats);
    }
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    "aria-label": src/* selectors.components.PanelInspector.Stats.content */.wl.components.PanelInspector.Stats.content,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InspectStatsTable, {
      timeZone: timeZone,
      name: 'Stats',
      stats: stats
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(InspectStatsTable, {
      timeZone: timeZone,
      name: 'Data source stats',
      stats: dataStats
    })]
  });
};

/***/ }),

/***/ "./public/app/features/inspector/QueryInspector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ QueryInspector)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_features_dashboard_components_PanelEditor_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/utils.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/inspector/styles.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _p, _div, _LoadingPlaceholder, _p2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















class QueryInspector extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "formattedJson", void 0);

    _defineProperty(this, "subs", new rxjs__WEBPACK_IMPORTED_MODULE_12__/* .Subscription */ .w0());

    _defineProperty(this, "onPanelRefresh", () => {
      this.setState(prevState => Object.assign({}, prevState, {
        dsQuery: {
          isLoading: true,
          response: {}
        }
      }));
    });

    _defineProperty(this, "setFormattedJson", formattedJson => {
      this.formattedJson = formattedJson;
    });

    _defineProperty(this, "getTextForClipboard", () => {
      return JSON.stringify(this.formattedJson, null, 2);
    });

    _defineProperty(this, "onClipboardSuccess", () => {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_7__/* ["default"].emit */ .Z.emit(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.AppEvents.alertSuccess, ['Content copied to clipboard']);
    });

    _defineProperty(this, "onToggleExpand", () => {
      this.setState(prevState => Object.assign({}, prevState, {
        allNodesExpanded: !this.state.allNodesExpanded
      }));
    });

    _defineProperty(this, "onToggleMocking", () => {
      this.setState(prevState => Object.assign({}, prevState, {
        isMocking: !this.state.isMocking
      }));
    });

    _defineProperty(this, "getNrOfOpenNodes", () => {
      if (this.state.allNodesExpanded === null) {
        return 3; // 3 is default, ie when state is null
      } else if (this.state.allNodesExpanded) {
        return 20;
      }

      return 1;
    });

    _defineProperty(this, "setMockedResponse", evt => {
      const mockedResponse = evt.target.value;
      this.setState(prevState => Object.assign({}, prevState, {
        mockedResponse
      }));
    });

    this.state = {
      executedQueries: [],
      allNodesExpanded: null,
      isMocking: false,
      mockedResponse: '',
      dsQuery: {
        isLoading: false,
        response: {}
      }
    };
  }

  componentDidMount() {
    const {
      panel
    } = this.props;
    this.subs.add(app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_8__/* .backendSrv.getInspectorStream */ .ae.getInspectorStream().subscribe({
      next: response => this.onDataSourceResponse(response)
    }));

    if (panel) {
      this.subs.add(panel.events.subscribe(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.RefreshEvent, this.onPanelRefresh));
      this.updateQueryList();
    }
  }

  componentDidUpdate(oldProps) {
    if (this.props.data !== oldProps.data) {
      this.updateQueryList();
    }
  }
  /**
   * Find the list of executed queries
   */


  updateQueryList() {
    const {
      data
    } = this.props;
    const executedQueries = [];

    if (data !== null && data !== void 0 && data.length) {
      let last = undefined;
      data.forEach((frame, idx) => {
        var _frame$meta;

        const query = (_frame$meta = frame.meta) === null || _frame$meta === void 0 ? void 0 : _frame$meta.executedQueryString;

        if (query) {
          var _last;

          const refId = frame.refId || '?';

          if (((_last = last) === null || _last === void 0 ? void 0 : _last.refId) === refId) {
            last.frames++;
            last.rows += frame.length;
          } else {
            last = {
              refId,
              frames: 0,
              rows: frame.length,
              query
            };
            executedQueries.push(last);
          }
        }
      });
    }

    this.setState({
      executedQueries
    });
  }

  componentWillUnmount() {
    this.subs.unsubscribe();
  }

  onDataSourceResponse(response) {
    var _response$config;

    // ignore silent requests
    if ((_response$config = response.config) !== null && _response$config !== void 0 && _response$config.hideFromInspector) {
      return;
    }

    response = Object.assign({}, response); // clone - dont modify the response

    if (response.headers) {
      delete response.headers;
    }

    if (response.config) {
      response.request = response.config;
      delete response.config;
      delete response.request.transformRequest;
      delete response.request.transformResponse;
      delete response.request.paramSerializer;
      delete response.request.jsonpCallbackParam;
      delete response.request.headers;
      delete response.request.requestId;
      delete response.request.inspect;
      delete response.request.retry;
      delete response.request.timeout;
    }

    if (response.data) {
      response.response = response.data;
      delete response.config;
      delete response.data;
      delete response.status;
      delete response.statusText;
      delete response.ok;
      delete response.url;
      delete response.redirected;
      delete response.type;
      delete response.$$config;
    }

    this.setState(prevState => Object.assign({}, prevState, {
      dsQuery: {
        isLoading: false,
        response: response
      }
    }));
  }

  renderExecutedQueries(executedQueries) {
    if (!executedQueries.length) {
      return null;
    }

    const styles = {
      refId: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
        font-weight: ${_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.theme.typography.weight.semibold};
        color: ${_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.theme.colors.textBlue};
        margin-right: 8px;
      `
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      children: executedQueries.map(info => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_4__.Stack, {
          gap: 1,
          direction: "column",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
              className: styles.refId,
              children: [info.refId, ":"]
            }), info.frames > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
              children: [info.frames, " frames, "]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
              children: [info.rows, " rows"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("pre", {
            children: info.query
          })]
        }, info.refId);
      })
    });
  }

  render() {
    const {
      allNodesExpanded,
      executedQueries
    } = this.state;
    const {
      panel,
      onRefreshQuery
    } = this.props;
    const {
      response,
      isLoading
    } = this.state.dsQuery;
    const openNodes = this.getNrOfOpenNodes();
    const styles = (0,_styles__WEBPACK_IMPORTED_MODULE_10__/* .getPanelInspectorStyles */ .S)();
    const haveData = Object.keys(response).length > 0;

    if (panel && !(0,app_features_dashboard_components_PanelEditor_utils__WEBPACK_IMPORTED_MODULE_9__/* .supportsDataQuery */ .sY)(panel.plugin)) {
      return null;
    }

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.wrap,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__/* .selectors.components.PanelInspector.Query.content */ .wl.components.PanelInspector.Query.content,
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h3", {
          className: "section-heading",
          children: "Query inspector"
        })), _p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "small muted",
          children: "Query inspector allows you to view raw request and response. To collect this data Grafana needs to issue a new query. Click refresh button below to trigger a new query."
        }))]
      }), this.renderExecutedQueries(executedQueries), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: styles.toolbar,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
          icon: "sync",
          onClick: onRefreshQuery,
          "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__/* .selectors.components.PanelInspector.Query.refreshButton */ .wl.components.PanelInspector.Query.refreshButton,
          children: "Refresh"
        }), haveData && allNodesExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
          icon: "minus",
          variant: "secondary",
          className: styles.toolbarItem,
          onClick: this.onToggleExpand,
          children: "Collapse all"
        }), haveData && !allNodesExpanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, {
          icon: "plus",
          variant: "secondary",
          className: styles.toolbarItem,
          onClick: this.onToggleExpand,
          children: "Expand all"
        }), haveData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ClipboardButton, {
          getText: this.getTextForClipboard,
          onClipboardCopy: this.onClipboardSuccess,
          className: styles.toolbarItem,
          icon: "copy",
          variant: "secondary",
          children: "Copy to clipboard"
        }), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "flex-grow-1"
        }))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: styles.content,
        children: [isLoading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LoadingPlaceholder, {
          text: "Loading query inspector..."
        }))), !isLoading && haveData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.JSONFormatter, {
          json: response,
          open: openNodes,
          onDidRender: this.setFormattedJson
        }), !isLoading && !haveData && (_p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "muted",
          children: "No request and response collected yet. Hit refresh button"
        })))]
      })]
    });
  }

}

/***/ }),

/***/ "./public/app/features/inspector/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ getPanelInspectorStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/config.ts");



const getPanelInspectorStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.stylesFactory)(() => {
  return {
    wrap: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      flex: 1 1 0;
    `,
    toolbar: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      width: 100%;
      flex-grow: 0;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: ${app_core_config__WEBPACK_IMPORTED_MODULE_2__/* .config.theme.spacing.sm */ .vc.theme.spacing.sm};
    `,
    toolbarItem: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${app_core_config__WEBPACK_IMPORTED_MODULE_2__/* .config.theme.spacing.md */ .vc.theme.spacing.md};
    `,
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
      height: 100%;
      overflow: scroll;
    `,
    editor: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-family: monospace;
      height: 100%;
      flex-grow: 1;
    `,
    viewer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      overflow: scroll;
    `,
    dataFrameSelect: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 2;
    `,
    leftActions: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-grow: 1;

      max-width: 85%;
      @media (max-width: 1345px) {
        max-width: 75%;
      }
    `,
    options: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding-top: ${app_core_config__WEBPACK_IMPORTED_MODULE_2__/* .config.theme.spacing.sm */ .vc.theme.spacing.sm};
    `,
    dataDisplayOptions: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
      min-width: 300px;
      margin-right: ${app_core_config__WEBPACK_IMPORTED_MODULE_2__/* .config.theme.spacing.sm */ .vc.theme.spacing.sm};
    `,
    selects: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      > * {
        margin-right: ${app_core_config__WEBPACK_IMPORTED_MODULE_2__/* .config.theme.spacing.sm */ .vc.theme.spacing.sm};
      }
    `
  };
});

/***/ }),

/***/ "./public/app/features/query/components/QueryEditorRows.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ QueryEditorRows)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _QueryEditorRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/query/components/QueryEditorRow.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class QueryEditorRows extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onRemoveQuery", query => {
      this.props.onQueriesChange(this.props.queries.filter(item => item !== query));
    });

    _defineProperty(this, "onDragStart", result => {
      const {
        queries,
        dsSettings
      } = this.props;
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.reportInteraction)('query_row_reorder_started', {
        startIndex: result.source.index,
        numberOfQueries: queries.length,
        datasourceType: dsSettings.type
      });
    });

    _defineProperty(this, "onDragEnd", result => {
      const {
        queries,
        onQueriesChange,
        dsSettings
      } = this.props;

      if (!result || !result.destination) {
        return;
      }

      const startIndex = result.source.index;
      const endIndex = result.destination.index;

      if (startIndex === endIndex) {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.reportInteraction)('query_row_reorder_canceled', {
          startIndex,
          endIndex,
          numberOfQueries: queries.length,
          datasourceType: dsSettings.type
        });
        return;
      }

      const update = Array.from(queries);
      const [removed] = update.splice(startIndex, 1);
      update.splice(endIndex, 0, removed);
      onQueriesChange(update);
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.reportInteraction)('query_row_reorder_ended', {
        startIndex,
        endIndex,
        numberOfQueries: queries.length,
        datasourceType: dsSettings.type
      });
    });
  }

  onChangeQuery(query, index) {
    const {
      queries,
      onQueriesChange
    } = this.props; // update query in array

    onQueriesChange(queries.map((item, itemIndex) => {
      if (itemIndex === index) {
        return query;
      }

      return item;
    }));
  }

  onDataSourceChange(dataSource, index) {
    const {
      queries,
      onQueriesChange
    } = this.props;
    onQueriesChange(queries.map((item, itemIndex) => {
      if (itemIndex !== index) {
        return item;
      }

      const dataSourceRef = {
        type: dataSource.type,
        uid: dataSource.uid
      };

      if (item.datasource) {
        const previous = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().getInstanceSettings(item.datasource);

        if ((previous === null || previous === void 0 ? void 0 : previous.type) === dataSource.type) {
          return Object.assign({}, item, {
            datasource: dataSourceRef
          });
        }
      }

      return {
        refId: item.refId,
        hide: item.hide,
        datasource: dataSourceRef
      };
    }));
  }

  render() {
    const {
      dsSettings,
      data,
      queries,
      app,
      history,
      eventBus
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__/* .DragDropContext */ .Z5, {
      onDragStart: this.onDragStart,
      onDragEnd: this.onDragEnd,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_4__/* .Droppable */ .bK, {
        droppableId: "transformations-list",
        direction: "vertical",
        children: provided => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", Object.assign({
            ref: provided.innerRef
          }, provided.droppableProps, {
            children: [queries.map((query, index) => {
              const dataSourceSettings = getDataSourceSettings(query, dsSettings);
              const onChangeDataSourceSettings = dsSettings.meta.mixed ? settings => this.onDataSourceChange(settings, index) : undefined;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_QueryEditorRow__WEBPACK_IMPORTED_MODULE_2__/* .QueryEditorRow */ .x, {
                id: query.refId,
                index: index,
                data: data,
                query: query,
                dataSource: dataSourceSettings,
                onChangeDataSource: onChangeDataSourceSettings,
                onChange: query => this.onChangeQuery(query, index),
                onRemoveQuery: this.onRemoveQuery,
                onAddQuery: this.props.onAddQuery,
                onRunQuery: this.props.onRunQueries,
                queries: queries,
                app: app,
                history: history,
                eventBus: eventBus
              }, query.refId);
            }), provided.placeholder]
          }));
        }
      })
    });
  }

}

const getDataSourceSettings = (query, groupSettings) => {
  if (!query.datasource) {
    return groupSettings;
  }

  const querySettings = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().getInstanceSettings(query.datasource);
  return querySettings || groupSettings;
};

/***/ }),

/***/ "./public/app/plugins/datasource/jaeger/responseTransform.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./public/app/plugins/datasource/zipkin/utils/transforms.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ transformToZipkin),
/* harmony export */   "m": () => (/* binding */ transformResponse)
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

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useToggle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

var toggleReducer = function (state, nextValue) {
    return typeof nextValue === 'boolean' ? nextValue : !state;
};
var useToggle = function (initialValue) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(toggleReducer, initialValue);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useToggle);


/***/ })

}]);