"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[4710],{

/***/ "./public/app/features/query/components/QueryGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ QueryGroup)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-e2e-selectors/src/index.ts + 3 modules
var grafana_e2e_selectors_src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/core/components/PluginHelp/PluginHelp.tsx
var _h, _h2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class PluginHelp extends react.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      isError: false,
      isLoading: false,
      help: ''
    });

    _defineProperty(this, "loadHelp", () => {
      const {
        plugin,
        type
      } = this.props;
      this.setState({
        isLoading: true
      });
      (0,grafana_runtime_src.getBackendSrv)().get(`/api/plugins/${plugin.id}/markdown/${type}`).then(response => {
        const helpHtml = (0,src.renderMarkdown)(response);

        if (response === '' && type === 'help') {
          this.setState({
            isError: false,
            isLoading: false,
            help: this.constructPlaceholderInfo()
          });
        } else {
          this.setState({
            isError: false,
            isLoading: false,
            help: helpHtml
          });
        }
      }).catch(() => {
        this.setState({
          isError: true,
          isLoading: false
        });
      });
    });
  }

  componentDidMount() {
    this.loadHelp();
  }

  constructPlaceholderInfo() {
    return 'No plugin help or readme markdown file was found';
  }

  render() {
    const {
      type
    } = this.props;
    const {
      isError,
      isLoading,
      help
    } = this.state;

    if (isLoading) {
      return _h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        children: "Loading help..."
      }));
    }

    if (isError) {
      return _h2 || (_h2 = /*#__PURE__*/(0,jsx_runtime.jsx)("h3", {
        children: "'Error occurred when loading help'"
      }));
    }

    if (type === 'panel_help' && help === '') {}

    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "markdown-html",
      dangerouslySetInnerHTML: {
        __html: help
      }
    });
  }

}
// EXTERNAL MODULE: ./public/app/core/config.ts
var config = __webpack_require__("./public/app/core/config.ts");
// EXTERNAL MODULE: ./public/app/core/services/backend_srv.ts + 4 modules
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
// EXTERNAL MODULE: ./public/app/core/utils/query.ts
var utils_query = __webpack_require__("./public/app/core/utils/query.ts");
// EXTERNAL MODULE: ./public/app/features/expressions/ExpressionDatasource.ts + 6 modules
var ExpressionDatasource = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/dashboard/index.ts + 4 modules
var dashboard = __webpack_require__("./public/app/plugins/datasource/dashboard/index.ts");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts
var DataSourceWithBackend = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
;// CONCATENATED MODULE: ./public/app/features/query/state/updateQueries.ts


async function updateQueries(nextDS, queries, currentDS) {
  let nextQueries = queries;
  const datasource = {
    type: nextDS.type,
    uid: nextDS.uid
  }; // we are changing data source type

  if ((currentDS === null || currentDS === void 0 ? void 0 : currentDS.meta.id) !== nextDS.meta.id) {
    // If changing to mixed do nothing
    if (nextDS.meta.mixed) {
      return queries;
    } // when both data sources support abstract queries
    else if ((0,src.hasQueryExportSupport)(currentDS) && (0,src.hasQueryImportSupport)(nextDS)) {
      const abstractQueries = await currentDS.exportToAbstractQueries(queries);
      nextQueries = await nextDS.importFromAbstractQueries(abstractQueries);
    } // when datasource supports query import
    else if (currentDS && nextDS.importQueries) {
      nextQueries = await nextDS.importQueries(queries, currentDS);
    } // Otherwise clear queries
    else {
      return [{
        refId: 'A',
        datasource
      }];
    }
  }

  if (nextQueries.length === 0) {
    return [{
      refId: 'A',
      datasource
    }];
  } // Set data source on all queries except expression queries


  return nextQueries.map(query => {
    if (!(0,DataSourceWithBackend/* isExpressionReference */.Pr)(query.datasource) && !nextDS.meta.mixed) {
      query.datasource = datasource;
    }

    return query;
  });
}
// EXTERNAL MODULE: ./public/app/features/query/components/QueryActionComponent.ts
var QueryActionComponent = __webpack_require__("./public/app/features/query/components/QueryActionComponent.ts");
// EXTERNAL MODULE: ./public/app/features/query/components/QueryEditorRows.tsx
var QueryEditorRows = __webpack_require__("./public/app/features/query/components/QueryEditorRows.tsx");
// EXTERNAL MODULE: ./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx
var QueryOperationRow = __webpack_require__("./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx");
;// CONCATENATED MODULE: ./public/app/features/query/components/QueryGroupOptions.tsx
var _InlineFormLabel, _div, _div2, _InlineFormLabel2, _InlineFormLabel3, _div3, _div4, _InlineFormLabel4, _span;

function QueryGroupOptions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class QueryGroupOptionsEditor extends react.PureComponent {
  constructor(props) {
    var _options$timeRange6, _options$timeRange7, _options$timeRange$hi, _options$timeRange8;

    super(props);

    QueryGroupOptions_defineProperty(this, "onRelativeTimeChange", event => {
      this.setState({
        timeRangeFrom: event.target.value
      });
    });

    QueryGroupOptions_defineProperty(this, "onTimeShiftChange", event => {
      this.setState({
        timeRangeShift: event.target.value
      });
    });

    QueryGroupOptions_defineProperty(this, "onOverrideTime", event => {
      var _options$timeRange;

      const {
        options,
        onChange
      } = this.props;
      const newValue = emptyToNull(event.target.value);
      const isValid = timeRangeValidation(newValue);

      if (isValid && ((_options$timeRange = options.timeRange) === null || _options$timeRange === void 0 ? void 0 : _options$timeRange.from) !== newValue) {
        var _options$timeRange2;

        onChange(Object.assign({}, options, {
          timeRange: Object.assign({}, (_options$timeRange2 = options.timeRange) !== null && _options$timeRange2 !== void 0 ? _options$timeRange2 : {}, {
            from: newValue
          })
        }));
      }

      this.setState({
        relativeTimeIsValid: isValid
      });
    });

    QueryGroupOptions_defineProperty(this, "onTimeShift", event => {
      var _options$timeRange3;

      const {
        options,
        onChange
      } = this.props;
      const newValue = emptyToNull(event.target.value);
      const isValid = timeRangeValidation(newValue);

      if (isValid && ((_options$timeRange3 = options.timeRange) === null || _options$timeRange3 === void 0 ? void 0 : _options$timeRange3.shift) !== newValue) {
        var _options$timeRange4;

        onChange(Object.assign({}, options, {
          timeRange: Object.assign({}, (_options$timeRange4 = options.timeRange) !== null && _options$timeRange4 !== void 0 ? _options$timeRange4 : {}, {
            shift: newValue
          })
        }));
      }

      this.setState({
        timeShiftIsValid: isValid
      });
    });

    QueryGroupOptions_defineProperty(this, "onToggleTimeOverride", () => {
      const {
        onChange,
        options
      } = this.props;
      this.setState({
        timeRangeHide: !this.state.timeRangeHide
      }, () => {
        var _options$timeRange5;

        onChange(Object.assign({}, options, {
          timeRange: Object.assign({}, (_options$timeRange5 = options.timeRange) !== null && _options$timeRange5 !== void 0 ? _options$timeRange5 : {}, {
            hide: this.state.timeRangeHide
          })
        }));
      });
    });

    QueryGroupOptions_defineProperty(this, "onCacheTimeoutBlur", event => {
      const {
        options,
        onChange
      } = this.props;
      onChange(Object.assign({}, options, {
        cacheTimeout: emptyToNull(event.target.value)
      }));
    });

    QueryGroupOptions_defineProperty(this, "onMaxDataPointsBlur", event => {
      const {
        options,
        onChange
      } = this.props;
      let maxDataPoints = parseInt(event.target.value, 10);

      if (isNaN(maxDataPoints) || maxDataPoints === 0) {
        maxDataPoints = null;
      }

      if (maxDataPoints !== options.maxDataPoints) {
        onChange(Object.assign({}, options, {
          maxDataPoints
        }));
      }
    });

    QueryGroupOptions_defineProperty(this, "onMinIntervalBlur", event => {
      const {
        options,
        onChange
      } = this.props;
      const minInterval = emptyToNull(event.target.value);

      if (minInterval !== options.minInterval) {
        onChange(Object.assign({}, options, {
          minInterval
        }));
      }
    });

    QueryGroupOptions_defineProperty(this, "onOpenOptions", () => {
      this.setState({
        isOpen: true
      });
    });

    QueryGroupOptions_defineProperty(this, "onCloseOptions", () => {
      this.setState({
        isOpen: false
      });
    });

    const {
      options: _options
    } = props;
    this.state = {
      timeRangeFrom: ((_options$timeRange6 = _options.timeRange) === null || _options$timeRange6 === void 0 ? void 0 : _options$timeRange6.from) || '',
      timeRangeShift: ((_options$timeRange7 = _options.timeRange) === null || _options$timeRange7 === void 0 ? void 0 : _options$timeRange7.shift) || '',
      timeRangeHide: (_options$timeRange$hi = (_options$timeRange8 = _options.timeRange) === null || _options$timeRange8 === void 0 ? void 0 : _options$timeRange8.hide) !== null && _options$timeRange$hi !== void 0 ? _options$timeRange$hi : false,
      isOpen: false,
      relativeTimeIsValid: true,
      timeShiftIsValid: true
    };
  }

  renderCacheTimeoutOption() {
    var _dataSource$meta$quer, _options$cacheTimeout;

    const {
      dataSource,
      options
    } = this.props;
    const tooltip = `If your time series store has a query cache this option can override the default cache timeout. Specify a
    numeric value in seconds.`;

    if (!((_dataSource$meta$quer = dataSource.meta.queryOptions) !== null && _dataSource$meta$quer !== void 0 && _dataSource$meta$quer.cacheTimeout)) {
      return null;
    }

    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "gf-form-inline",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "gf-form",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
          width: 9,
          tooltip: tooltip,
          children: "Cache timeout"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          type: "text",
          className: "width-6",
          placeholder: "60",
          spellCheck: false,
          onBlur: this.onCacheTimeoutBlur,
          defaultValue: (_options$cacheTimeout = options.cacheTimeout) !== null && _options$cacheTimeout !== void 0 ? _options$cacheTimeout : ''
        })]
      })
    });
  }

  renderMaxDataPointsOption() {
    var _data$request, _options$maxDataPoint;

    const {
      data,
      options
    } = this.props;
    const realMd = (_data$request = data.request) === null || _data$request === void 0 ? void 0 : _data$request.maxDataPoints;
    const value = (_options$maxDataPoint = options.maxDataPoints) !== null && _options$maxDataPoint !== void 0 ? _options$maxDataPoint : '';
    const isAuto = value === '';
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "gf-form-inline",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "gf-form",
        children: [_InlineFormLabel || (_InlineFormLabel = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
          width: 9,
          tooltip: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: "The maximum data points per series. Used directly by some data sources and used in calculation of auto interval. With streaming data this value is used for the rolling buffer."
          }),
          children: "Max data points"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          type: "number",
          className: "width-6",
          placeholder: `${realMd}`,
          spellCheck: false,
          onBlur: this.onMaxDataPointsBlur,
          defaultValue: value
        }), isAuto && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [_div || (_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "gf-form-label query-segment-operator",
            children: "="
          })), _div2 || (_div2 = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "gf-form-label",
            children: "Width of panel"
          }))]
        })]
      })
    });
  }

  renderIntervalOption() {
    var _data$request2, _dataSource$interval, _options$minInterval;

    const {
      data,
      dataSource,
      options
    } = this.props;
    const realInterval = (_data$request2 = data.request) === null || _data$request2 === void 0 ? void 0 : _data$request2.interval;
    const minIntervalOnDs = (_dataSource$interval = dataSource.interval) !== null && _dataSource$interval !== void 0 ? _dataSource$interval : 'No limit';
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel2 || (_InlineFormLabel2 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            width: 9,
            tooltip: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: ["A lower limit for the interval. Recommended to be set to write frequency, for example ", /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
                children: "1m"
              }), ' ', "if your data is written every minute. Default value can be set in data source settings for most data sources."]
            }),
            children: "Min interval"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
            type: "text",
            className: "width-6",
            placeholder: `${minIntervalOnDs}`,
            spellCheck: false,
            onBlur: this.onMinIntervalBlur,
            defaultValue: (_options$minInterval = options.minInterval) !== null && _options$minInterval !== void 0 ? _options$minInterval : ''
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel3 || (_InlineFormLabel3 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            width: 9,
            tooltip: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: ["The evaluated interval that is sent to data source and is used in ", /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
                children: "$__interval"
              }), " and", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("code", {
                children: "$__interval_ms"
              })]
            }),
            children: "Interval"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            width: 6,
            children: realInterval
          }), _div3 || (_div3 = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "gf-form-label query-segment-operator",
            children: "="
          })), _div4 || (_div4 = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "gf-form-label",
            children: "Time range / max data points"
          }))]
        })
      })]
    });
  }

  renderCollapsedText(styles) {
    var _options$maxDataPoint2;

    const {
      data,
      options
    } = this.props;
    const {
      isOpen
    } = this.state;

    if (isOpen) {
      return undefined;
    }

    let mdDesc = (_options$maxDataPoint2 = options.maxDataPoints) !== null && _options$maxDataPoint2 !== void 0 ? _options$maxDataPoint2 : '';

    if (mdDesc === '' && data.request) {
      mdDesc = `auto = ${data.request.maxDataPoints}`;
    }

    let intervalDesc = options.minInterval;

    if (data.request) {
      intervalDesc = `${data.request.interval}`;
    }

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.collapsedText,
        children: ["MD = ", mdDesc]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.collapsedText,
        children: ["Interval = ", intervalDesc]
      })]
    });
  }

  render() {
    const {
      timeRangeHide: hideTimeOverride,
      relativeTimeIsValid,
      timeShiftIsValid
    } = this.state;
    const {
      timeRangeFrom: relativeTime,
      timeRangeShift: timeShift,
      isOpen
    } = this.state;
    const styles = getStyles();
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(QueryOperationRow/* QueryOperationRow */.t, {
      id: "Query options",
      index: 0,
      title: "Query options",
      headerElement: this.renderCollapsedText(styles),
      isOpen: isOpen,
      onOpen: this.onOpenOptions,
      onClose: this.onCloseOptions,
      children: [this.renderMaxDataPointsOption(), this.renderIntervalOption(), this.renderCacheTimeoutOption(), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "gf-form",
        children: [_InlineFormLabel4 || (_InlineFormLabel4 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
          width: 9,
          children: "Relative time"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          type: "text",
          className: "width-6",
          placeholder: "1h",
          onChange: this.onRelativeTimeChange,
          onBlur: this.onOverrideTime,
          invalid: !relativeTimeIsValid,
          value: relativeTime
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "gf-form",
        children: [_span || (_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "gf-form-label width-9",
          children: "Time shift"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          type: "text",
          className: "width-6",
          placeholder: "1h",
          onChange: this.onTimeShiftChange,
          onBlur: this.onTimeShift,
          invalid: !timeShiftIsValid,
          value: timeShift
        })]
      }), (timeShift || relativeTime) && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          label: "Hide time info",
          labelWidth: 18,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Switch, {
            value: hideTimeOverride,
            onChange: this.onToggleTimeOverride
          })
        })
      })]
    });
  }

}

const timeRangeValidation = value => {
  if (!value) {
    return true;
  }

  return src.rangeUtil.isValidTimeSpan(value);
};

const emptyToNull = value => {
  return value === '' ? null : value;
};

const getStyles = (0,grafana_ui_src.stylesFactory)(() => {
  const {
    theme
  } = config/* config */.vc;
  return {
    collapsedText: emotion_css_esm.css`
      margin-left: ${theme.spacing.md};
      font-size: ${theme.typography.size.sm};
      color: ${theme.colors.textWeak};
    `
  };
});
;// CONCATENATED MODULE: ./public/app/features/query/components/QueryGroup.tsx
var QueryGroup_InlineFormLabel, QueryGroup_span;

function QueryGroup_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















class QueryGroup extends react.PureComponent {
  constructor() {
    super(...arguments);

    QueryGroup_defineProperty(this, "backendSrv", backend_srv/* backendSrv */.ae);

    QueryGroup_defineProperty(this, "dataSourceSrv", (0,grafana_runtime_src.getDataSourceSrv)());

    QueryGroup_defineProperty(this, "querySubscription", null);

    QueryGroup_defineProperty(this, "state", {
      isLoadingHelp: false,
      helpContent: null,
      isPickerOpen: false,
      isAddingMixed: false,
      isHelpOpen: false,
      queries: [],
      data: {
        state: src.LoadingState.NotStarted,
        series: [],
        timeRange: (0,src.getDefaultTimeRange)()
      }
    });

    QueryGroup_defineProperty(this, "onChangeDataSource", async newSettings => {
      const {
        dsSettings
      } = this.state;
      const currentDS = dsSettings ? await (0,grafana_runtime_src.getDataSourceSrv)().get(dsSettings.uid) : undefined;
      const nextDS = await (0,grafana_runtime_src.getDataSourceSrv)().get(newSettings.uid);
      const queries = await updateQueries(nextDS, this.state.queries, currentDS);
      const dataSource = await this.dataSourceSrv.get(newSettings.name);
      this.onChange({
        queries,
        dataSource: {
          name: newSettings.name,
          uid: newSettings.uid,
          type: newSettings.meta.id,
          default: newSettings.isDefault
        }
      });
      this.setState({
        queries,
        dataSource: dataSource,
        dsSettings: newSettings
      });
    });

    QueryGroup_defineProperty(this, "onAddQueryClick", () => {
      const {
        queries
      } = this.state;
      this.onQueriesChange((0,utils_query/* addQuery */.DI)(queries, this.newQuery()));
      this.onScrollBottom();
    });

    QueryGroup_defineProperty(this, "onAddExpressionClick", () => {
      this.onQueriesChange((0,utils_query/* addQuery */.DI)(this.state.queries, ExpressionDatasource/* dataSource.newQuery */.mV.newQuery()));
      this.onScrollBottom();
    });

    QueryGroup_defineProperty(this, "onScrollBottom", () => {
      setTimeout(() => {
        if (this.state.scrollElement) {
          this.state.scrollElement.scrollTo({
            top: 10000
          });
        }
      }, 20);
    });

    QueryGroup_defineProperty(this, "onUpdateAndRun", options => {
      this.props.onOptionsChange(options);
      this.props.onRunQueries();
    });

    QueryGroup_defineProperty(this, "onOpenHelp", () => {
      this.setState({
        isHelpOpen: true
      });
    });

    QueryGroup_defineProperty(this, "onCloseHelp", () => {
      this.setState({
        isHelpOpen: false
      });
    });

    QueryGroup_defineProperty(this, "renderMixedPicker", () => {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_runtime_src.DataSourcePicker, {
        mixed: false,
        onChange: this.onAddMixedQuery,
        current: null,
        autoFocus: true,
        variables: true,
        onBlur: this.onMixedPickerBlur,
        openMenuOnFocus: true
      });
    });

    QueryGroup_defineProperty(this, "onAddMixedQuery", datasource => {
      this.onAddQuery({
        datasource: datasource.name
      });
      this.setState({
        isAddingMixed: false
      });
    });

    QueryGroup_defineProperty(this, "onMixedPickerBlur", () => {
      this.setState({
        isAddingMixed: false
      });
    });

    QueryGroup_defineProperty(this, "onAddQuery", query => {
      const {
        dsSettings,
        queries
      } = this.state;
      this.onQueriesChange((0,utils_query/* addQuery */.DI)(queries, query, {
        type: dsSettings === null || dsSettings === void 0 ? void 0 : dsSettings.type,
        uid: dsSettings === null || dsSettings === void 0 ? void 0 : dsSettings.uid
      }));
      this.onScrollBottom();
    });

    QueryGroup_defineProperty(this, "onQueriesChange", queries => {
      this.onChange({
        queries
      });
      this.setState({
        queries
      });
    });

    QueryGroup_defineProperty(this, "setScrollRef", scrollElement => {
      this.setState({
        scrollElement
      });
    });
  }

  async componentDidMount() {
    const {
      queryRunner,
      options
    } = this.props;
    this.querySubscription = queryRunner.getData({
      withTransforms: false,
      withFieldConfig: false
    }).subscribe({
      next: data => this.onPanelDataUpdate(data)
    });

    try {
      const ds = await this.dataSourceSrv.get(options.dataSource);
      const dsSettings = this.dataSourceSrv.getInstanceSettings(options.dataSource);
      const defaultDataSource = await this.dataSourceSrv.get();
      const datasource = ds.getRef();
      const queries = options.queries.map(q => q.datasource ? q : Object.assign({}, q, {
        datasource
      }));
      this.setState({
        queries,
        dataSource: ds,
        dsSettings,
        defaultDataSource
      });
    } catch (error) {
      console.log('failed to load data source', error);
    }
  }

  componentWillUnmount() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
      this.querySubscription = null;
    }
  }

  onPanelDataUpdate(data) {
    this.setState({
      data
    });
  }

  newQuery() {
    const {
      dsSettings,
      defaultDataSource
    } = this.state;
    const ds = !(dsSettings !== null && dsSettings !== void 0 && dsSettings.meta.mixed) ? dsSettings : defaultDataSource;
    return {
      datasource: {
        uid: ds === null || ds === void 0 ? void 0 : ds.uid,
        type: ds === null || ds === void 0 ? void 0 : ds.type
      }
    };
  }

  onChange(changedProps) {
    this.props.onOptionsChange(Object.assign({}, this.props.options, changedProps));
  }

  renderTopSection(styles) {
    const {
      onOpenQueryInspector,
      options
    } = this.props;
    const {
      dataSource,
      data
    } = this.state;
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.dataSourceRow,
        children: [QueryGroup_InlineFormLabel || (QueryGroup_InlineFormLabel = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
          htmlFor: "data-source-picker",
          width: 'auto',
          children: "Data source"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.dataSourceRowItem,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_runtime_src.DataSourcePicker, {
            onChange: this.onChangeDataSource,
            current: options.dataSource,
            metrics: true,
            mixed: true,
            dashboard: true,
            variables: true
          })
        }), dataSource && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.dataSourceRowItem,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
              variant: "secondary",
              icon: "question-circle",
              title: "Open data source help",
              onClick: this.onOpenHelp
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.dataSourceRowItemOptions,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(QueryGroupOptionsEditor, {
              options: options,
              dataSource: dataSource,
              data: data,
              onChange: this.onUpdateAndRun
            })
          }), onOpenQueryInspector && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.dataSourceRowItem,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
              variant: "secondary",
              onClick: onOpenQueryInspector,
              "aria-label": grafana_e2e_selectors_src/* selectors.components.QueryTab.queryInspectorButton */.wl.components.QueryTab.queryInspectorButton,
              children: "Query inspector"
            })
          })]
        })]
      })
    });
  }

  renderQueries(dsSettings) {
    const {
      onRunQueries
    } = this.props;
    const {
      data,
      queries
    } = this.state;

    if ((0,dashboard/* isSharedDashboardQuery */.yl)(dsSettings.name)) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(dashboard/* DashboardQueryEditor */.hD, {
        queries: queries,
        panelData: data,
        onChange: this.onQueriesChange,
        onRunQueries: onRunQueries
      });
    }

    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      "aria-label": grafana_e2e_selectors_src/* selectors.components.QueryTab.content */.wl.components.QueryTab.content,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(QueryEditorRows/* QueryEditorRows */.l, {
        queries: queries,
        dsSettings: dsSettings,
        onQueriesChange: this.onQueriesChange,
        onAddQuery: this.onAddQuery,
        onRunQueries: onRunQueries,
        data: data
      })
    });
  }

  isExpressionsSupported(dsSettings) {
    return (dsSettings.meta.alerting || dsSettings.meta.mixed) === true;
  }

  renderExtraActions() {
    return QueryActionComponent/* GroupActionComponents.getAllExtraRenderAction */.S.getAllExtraRenderAction().map((action, index) => action({
      onAddQuery: this.onAddQuery,
      onChangeDataSource: this.onChangeDataSource,
      key: index
    })).filter(Boolean);
  }

  renderAddQueryRow(dsSettings, styles) {
    const {
      isAddingMixed
    } = this.state;
    const showAddButton = !(isAddingMixed || (0,dashboard/* isSharedDashboardQuery */.yl)(dsSettings.name));
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      spacing: "md",
      align: "flex-start",
      children: [showAddButton && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        icon: "plus",
        onClick: this.onAddQueryClick,
        variant: "secondary",
        "aria-label": grafana_e2e_selectors_src/* selectors.components.QueryTab.addQuery */.wl.components.QueryTab.addQuery,
        children: "Query"
      }), config/* default.expressionsEnabled */.ZP.expressionsEnabled && this.isExpressionsSupported(dsSettings) && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        icon: "plus",
        onClick: this.onAddExpressionClick,
        variant: "secondary",
        className: styles.expressionButton,
        children: QueryGroup_span || (QueryGroup_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: "Expression\xA0"
        }))
      }), this.renderExtraActions()]
    });
  }

  render() {
    const {
      isHelpOpen,
      dsSettings
    } = this.state;
    const styles = QueryGroup_getStyles();
    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CustomScrollbar, {
      autoHeightMin: "100%",
      scrollRefCallback: this.setScrollRef,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.innerWrapper,
        children: [this.renderTopSection(styles), dsSettings && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.queriesWrapper,
            children: this.renderQueries(dsSettings)
          }), this.renderAddQueryRow(dsSettings, styles), isHelpOpen && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Modal, {
            title: "Data source help",
            isOpen: true,
            onDismiss: this.onCloseHelp,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(PluginHelp, {
              plugin: dsSettings.meta,
              type: "query_help"
            })
          })]
        })]
      })
    });
  }

}
const QueryGroup_getStyles = (0,grafana_ui_src.stylesFactory)(() => {
  const {
    theme
  } = config/* default */.ZP;
  return {
    innerWrapper: emotion_css_esm.css`
      display: flex;
      flex-direction: column;
      padding: ${theme.spacing.md};
    `,
    dataSourceRow: emotion_css_esm.css`
      display: flex;
      margin-bottom: ${theme.spacing.md};
    `,
    dataSourceRowItem: emotion_css_esm.css`
      margin-right: ${theme.spacing.inlineFormMargin};
    `,
    dataSourceRowItemOptions: emotion_css_esm.css`
      flex-grow: 1;
      margin-right: ${theme.spacing.inlineFormMargin};
    `,
    queriesWrapper: emotion_css_esm.css`
      padding-bottom: 16px;
    `,
    expressionWrapper: emotion_css_esm.css``,
    expressionButton: emotion_css_esm.css`
      margin-right: ${theme.spacing.sm};
    `
  };
});

/***/ })

}]);