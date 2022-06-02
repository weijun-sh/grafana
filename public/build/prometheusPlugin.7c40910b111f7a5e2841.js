"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[7004],{

 "./public/app/plugins/datasource/prometheus/module.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "plugin": () => ( module_plugin)
});

var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _h;




const CHEAT_SHEET_ITEMS = [{
  title: 'Request Rate',
  expression: 'rate(http_request_total[5m])',
  label: 'Given an HTTP request counter, this query calculates the per-second average request rate over the last 5 minutes.'
}, {
  title: '95th Percentile of Request Latencies',
  expression: 'histogram_quantile(0.95, sum(rate(prometheus_http_request_duration_seconds_bucket[5m])) by (le))',
  label: 'Calculates the 95th percentile of HTTP request rate over 5 minute windows.'
}, {
  title: 'Alerts Firing',
  expression: 'sort_desc(sum(sum_over_time(ALERTS{alertstate="firing"}[24h])) by (alertname))',
  label: 'Sums up the alerts that have been firing over the last 24 hours.'
}, {
  title: 'Step',
  label: 'Defines the graph resolution using a duration format (15s, 1m, 3h, ...). Small steps create high-resolution graphs but can be slow over larger time ranges. Using a longer step lowers the resolution and smooths the graph by producing fewer datapoints. If no step is given the resolution is calculated automatically.'
}];

const PromCheatSheet = props => (0,jsx_runtime.jsxs)("div", {
  children: [_h || (_h = (0,jsx_runtime.jsx)("h2", {
    children: "PromQL Cheat Sheet"
  })), CHEAT_SHEET_ITEMS.map((item, index) => (0,jsx_runtime.jsxs)("div", {
    className: "cheat-sheet-item",
    children: [(0,jsx_runtime.jsx)("div", {
      className: "cheat-sheet-item__title",
      children: item.title
    }), item.expression ? (0,jsx_runtime.jsx)("div", {
      className: "cheat-sheet-item__example",
      onClick: e => props.onClickExample({
        refId: 'A',
        expr: item.expression
      }),
      children: (0,jsx_runtime.jsx)("code", {
        children: item.expression
      })
    }) : null, (0,jsx_runtime.jsx)("div", {
      className: "cheat-sheet-item__label",
      children: item.label
    })]
  }, index))]
});

 const components_PromCheatSheet = (PromCheatSheet);
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var experimental = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var PromQueryModeller = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/PromQueryModeller.ts");
var parsing = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/parsing.ts");
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
;
var _Icon;








function FeedbackLink(_ref) {
  let {
    feedbackUrl
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);

  if (!grafana_runtime_src.config.feedbackLinksEnabled) {
    return null;
  }

  return (0,jsx_runtime.jsx)(experimental.Stack, {
    gap: 1,
    children: (0,jsx_runtime.jsxs)("a", {
      href: feedbackUrl,
      className: styles.link,
      title: "This query builder is new, please let us know how we can improve it",
      target: "_blank",
      rel: "noreferrer noopener",
      children: [_Icon || (_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "comment-alt-message"
      })), " Give feedback"]
    })
  });
}

function getStyles(theme) {
  return {
    link: (0,emotion_css_esm.css)({
      color: theme.colors.text.secondary,
      fontSize: theme.typography.bodySmall.fontSize,
      ':hover': {
        color: theme.colors.text.link
      }
    })
  };
}
var QueryEditorModeToggle = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/QueryEditorModeToggle.tsx");
var QueryHeaderSwitch = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/QueryHeaderSwitch.tsx");
var types = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/types.ts");
var store = __webpack_require__("./public/app/core/store.ts");
var prometheus_types = __webpack_require__("./public/app/plugins/datasource/prometheus/types.ts");
;




const queryEditorModeDefaultLocalStorageKey = 'PrometheusQueryEditorModeDefault';
function changeEditorMode(query, editorMode, onChange) {
  if (query.expr === '') {
    store.Z.set(queryEditorModeDefaultLocalStorageKey, editorMode);
  }

  onChange(Object.assign({}, query, {
    editorMode
  }));
}

function getDefaultEditorMode(expr) {
  if (expr != null && expr !== '') {
    return types.c.Code;
  }

  const value = store.Z.get(queryEditorModeDefaultLocalStorageKey);

  switch (value) {
    case types.c.Builder:
    case types.c.Code:
    case types.c.Explain:
      return value;

    default:
      return types.c.Builder;
  }
}


function getQueryWithDefaults(query, app) {
  let result = query;

  if (!query.editorMode) {
    result = Object.assign({}, query, {
      editorMode: getDefaultEditorMode(query.expr)
    });
  }

  if (query.expr == null) {
    result = Object.assign({}, result, {
      expr: '',
      legendFormat: prometheus_types.pD.Auto
    });
  }

  if (query.range == null && query.instant == null) {
    result = Object.assign({}, result, {
      range: true
    }); 

    if (app === src.CoreApp.Explore) {
      result.instant = true;
    }
  }

  return result;
}
var redux_toolkit_esm = __webpack_require__("./.yarn/__virtual__/@reduxjs-toolkit-virtual-341575ab98/0/cache/@reduxjs-toolkit-npm-1.8.0-436263eab0-e229571b80.zip/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
var language_provider = __webpack_require__("./public/app/plugins/datasource/prometheus/language_provider.ts");
var LabelFilters = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/LabelFilters.tsx");
var OperationList = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationList.tsx");
var OperationsEditorRow = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationsEditorRow.tsx");
var main = __webpack_require__("./.yarn/__virtual__/react-highlight-words-virtual-d2265e757c/0/cache/react-highlight-words-npm-0.17.0-880b4a18ed-41b3d0e451.zip/node_modules/react-highlight-words/dist/main.js");
var main_default = __webpack_require__.n(main);
;







const splitSeparator = ' ';
function MetricSelect(_ref) {
  let {
    query,
    onChange,
    onGetMetrics
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(MetricSelect_getStyles);
  const [state, setState] = (0,react.useState)({});
  const customFilterOption = (0,react.useCallback)((option, searchQuery) => {
    var _option$label;

    const label = (_option$label = option.label) !== null && _option$label !== void 0 ? _option$label : option.value;

    if (!label) {
      return false;
    } 


    if (!label.toLowerCase) {
      return true;
    }

    const searchWords = searchQuery.split(splitSeparator);
    return searchWords.reduce((acc, cur) => acc && label.toLowerCase().includes(cur.toLowerCase()), true);
  }, []);
  const formatOptionLabel = (0,react.useCallback)((option, meta) => {
    var _option$label2;

    if (option['__isNew__']) {
      return option.label;
    }

    return (0,jsx_runtime.jsx)((main_default()), {
      searchWords: meta.inputValue.split(splitSeparator),
      textToHighlight: (_option$label2 = option.label) !== null && _option$label2 !== void 0 ? _option$label2 : '',
      highlightClassName: styles.highlight
    });
  }, [styles.highlight]);
  return (0,jsx_runtime.jsx)(experimental.EditorFieldGroup, {
    children: (0,jsx_runtime.jsx)(experimental.EditorField, {
      label: "Metric",
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        inputId: "prometheus-metric-select",
        className: styles.select,
        value: query.metric ? (0,src.toOption)(query.metric) : undefined,
        placeholder: "Select metric",
        allowCustomValue: true,
        formatOptionLabel: formatOptionLabel,
        filterOption: customFilterOption,
        onOpenMenu: async () => {
          setState({
            isLoading: true
          });
          const metrics = await onGetMetrics();
          setState({
            metrics,
            isLoading: undefined
          });
        },
        isLoading: state.isLoading,
        options: state.metrics,
        onChange: _ref2 => {
          let {
            value
          } = _ref2;

          if (value) {
            onChange(Object.assign({}, query, {
              metric: value
            }));
          }
        }
      })
    })
  });
}

const MetricSelect_getStyles = theme => ({
  select: emotion_css_esm.css`
    min-width: 125px;
  `,
  highlight: emotion_css_esm.css`
    label: select__match-highlight;
    background: inherit;
    padding: inherit;
    color: ${theme.colors.warning.main};
    background-color: rgba(${theme.colors.warning.main}, 0.1);
  `
});
var binaryScalarOperations = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/binaryScalarOperations.ts");
var AutoSizeInput = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/AutoSizeInput.tsx");
;
var _FlexItem;











const NestedQuery = react.memo(_ref => {
  let {
    nestedQuery,
    index,
    datasource,
    onChange,
    onRemove,
    onRunQuery
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(NestedQuery_getStyles);
  return (0,jsx_runtime.jsxs)("div", {
    className: styles.card,
    children: [(0,jsx_runtime.jsxs)("div", {
      className: styles.header,
      children: [(0,jsx_runtime.jsx)("div", {
        className: styles.name,
        children: "Operator"
      }), (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        width: "auto",
        options: operators,
        value: (0,src.toOption)(nestedQuery.operator),
        onChange: value => {
          onChange(index, Object.assign({}, nestedQuery, {
            operator: value.value
          }));
        }
      }), (0,jsx_runtime.jsx)("div", {
        className: styles.name,
        children: "Vector matches"
      }), (0,jsx_runtime.jsxs)("div", {
        className: styles.vectorMatchWrapper,
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          width: "auto",
          value: nestedQuery.vectorMatchesType || 'on',
          allowCustomValue: true,
          options: [{
            value: 'on',
            label: 'on'
          }, {
            value: 'ignoring',
            label: 'ignoring'
          }],
          onChange: val => {
            onChange(index, Object.assign({}, nestedQuery, {
              vectorMatchesType: val.value
            }));
          }
        }), (0,jsx_runtime.jsx)(AutoSizeInput.H, {
          className: styles.vectorMatchInput,
          minWidth: 20,
          defaultValue: nestedQuery.vectorMatches,
          onCommitChange: evt => {
            onChange(index, Object.assign({}, nestedQuery, {
              vectorMatches: evt.currentTarget.value,
              vectorMatchesType: nestedQuery.vectorMatchesType || 'on'
            }));
          }
        })]
      }), _FlexItem || (_FlexItem = (0,jsx_runtime.jsx)(experimental.FlexItem, {
        grow: 1
      })), (0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
        name: "times",
        size: "sm",
        onClick: () => onRemove(index)
      })]
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.body,
      children: (0,jsx_runtime.jsx)(experimental.EditorRows, {
        children: (0,jsx_runtime.jsx)(PromQueryBuilder, {
          query: nestedQuery.query,
          datasource: datasource,
          nested: true,
          onRunQuery: onRunQuery,
          onChange: update => {
            onChange(index, Object.assign({}, nestedQuery, {
              query: update
            }));
          }
        })
      })
    })]
  });
});
const operators = binaryScalarOperations.iQ.map(def => ({
  label: def.sign,
  value: def.sign
}));
NestedQuery.displayName = 'NestedQuery';

const NestedQuery_getStyles = theme => {
  return {
    card: (0,emotion_css_esm.css)({
      label: 'card',
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(0.5)
    }),
    header: (0,emotion_css_esm.css)({
      label: 'header',
      padding: theme.spacing(0.5, 0.5, 0.5, 1),
      gap: theme.spacing(1),
      display: 'flex',
      alignItems: 'center'
    }),
    name: (0,emotion_css_esm.css)({
      label: 'name',
      whiteSpace: 'nowrap'
    }),
    body: (0,emotion_css_esm.css)({
      label: 'body',
      paddingLeft: theme.spacing(2)
    }),
    vectorMatchInput: (0,emotion_css_esm.css)({
      label: 'vectorMatchInput',
      marginLeft: -1
    }),
    vectorMatchWrapper: (0,emotion_css_esm.css)({
      label: 'vectorMatchWrapper',
      display: 'flex'
    })
  };
};
;




function NestedQueryList(_ref) {
  var _query$binaryQueries;

  let {
    query,
    datasource,
    onChange,
    onRunQuery
  } = _ref;
  const nestedQueries = (_query$binaryQueries = query.binaryQueries) !== null && _query$binaryQueries !== void 0 ? _query$binaryQueries : [];

  const onNestedQueryUpdate = (index, update) => {
    const updatedList = [...nestedQueries];
    updatedList.splice(index, 1, update);
    onChange(Object.assign({}, query, {
      binaryQueries: updatedList
    }));
  };

  const onRemove = index => {
    const updatedList = [...nestedQueries.slice(0, index), ...nestedQueries.slice(index + 1)];
    onChange(Object.assign({}, query, {
      binaryQueries: updatedList
    }));
  };

  return (0,jsx_runtime.jsx)(experimental.Stack, {
    direction: "column",
    gap: 1,
    children: nestedQueries.map((nestedQuery, index) => (0,jsx_runtime.jsx)(NestedQuery, {
      nestedQuery: nestedQuery,
      index: index,
      onChange: onNestedQueryUpdate,
      datasource: datasource,
      onRemove: onRemove,
      onRunQuery: onRunQuery
    }, index.toString()))
  });
}
;







const PromQueryBuilderHints = react.memo(_ref => {
  let {
    datasource,
    query,
    onChange,
    data
  } = _ref;
  const [hints, setHints] = (0,react.useState)([]);
  const styles = (0,grafana_ui_src.useStyles2)(PromQueryBuilderHints_getStyles);
  (0,react.useEffect)(() => {
    const promQuery = {
      expr: PromQueryModeller.Z.renderQuery(query),
      refId: ''
    }; 

    const hints = datasource.getQueryHints(promQuery, (data === null || data === void 0 ? void 0 : data.series) || []).filter(hint => {
      var _hint$fix;

      return (_hint$fix = hint.fix) === null || _hint$fix === void 0 ? void 0 : _hint$fix.action;
    });
    setHints(hints);
  }, [datasource, query, onChange, data, styles.hint]);
  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: hints.length > 0 && (0,jsx_runtime.jsx)("div", {
      className: styles.container,
      children: hints.map(hint => {
        var _hint$fix2, _hint$fix3, _hint$fix3$action;

        return (0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
          content: `${hint.label} ${(_hint$fix2 = hint.fix) === null || _hint$fix2 === void 0 ? void 0 : _hint$fix2.label}`,
          children: (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            onClick: () => {
              const promQuery = {
                expr: PromQueryModeller.Z.renderQuery(query),
                refId: ''
              };
              const newPromQuery = datasource.modifyQuery(promQuery, hint.fix.action);
              const visualQuery = (0,parsing._)(newPromQuery.expr);
              return onChange(visualQuery.query);
            },
            fill: "outline",
            size: "sm",
            className: styles.hint,
            children: 'hint: ' + ((_hint$fix3 = hint.fix) === null || _hint$fix3 === void 0 ? void 0 : (_hint$fix3$action = _hint$fix3.action) === null || _hint$fix3$action === void 0 ? void 0 : _hint$fix3$action.type.toLowerCase().replace('_', ' ')) + '()'
          })
        }, hint.type);
      })
    })
  });
});
PromQueryBuilderHints.displayName = 'PromQueryBuilderHints';

const PromQueryBuilderHints_getStyles = theme => {
  return {
    container: emotion_css_esm.css`
      display: flex;
      margin-bottom: ${theme.spacing(1)};
      align-items: center;
    `,
    hint: emotion_css_esm.css`
      margin-right: ${theme.spacing(1)};
    `
  };
};
;













const PromQueryBuilder = react.memo(_ref => {
  let {
    datasource,
    query,
    onChange,
    onRunQuery,
    data
  } = _ref;

  const onChangeLabels = labels => {
    onChange(Object.assign({}, query, {
      labels
    }));
  };


  const withTemplateVariableOptions = (0,react.useCallback)(async optionsPromise => {
    const variables = datasource.getVariables();
    const options = await optionsPromise;
    return [...variables.map(value => ({
      label: value,
      value
    })), ...options.map(option => ({
      label: option.value,
      value: option.value,
      title: option.description
    }))];
  }, [datasource]);

  const onGetLabelNames = async forLabel => {
    if (!query.metric) {
      await datasource.languageProvider.fetchLabels();
      return datasource.languageProvider.getLabelKeys().map(k => ({
        value: k
      }));
    }

    const labelsToConsider = query.labels.filter(x => x !== forLabel);
    labelsToConsider.push({
      label: '__name__',
      op: '=',
      value: query.metric
    });
    const expr = PromQueryModeller.Z.renderLabels(labelsToConsider);
    const labelsIndex = await datasource.languageProvider.fetchSeriesLabels(expr); 

    return Object.keys(labelsIndex).filter(labelName => !labelsToConsider.find(filter => filter.label === labelName)).map(k => ({
      value: k
    }));
  };

  const onGetLabelValues = async forLabel => {
    var _result$forLabelInter;

    if (!forLabel.label) {
      return [];
    } 


    if (!query.metric) {
      return (await datasource.languageProvider.getLabelValues(forLabel.label)).map(v => ({
        value: v
      }));
    }

    const labelsToConsider = query.labels.filter(x => x !== forLabel);
    labelsToConsider.push({
      label: '__name__',
      op: '=',
      value: query.metric
    });
    const expr = PromQueryModeller.Z.renderLabels(labelsToConsider);
    const result = await datasource.languageProvider.fetchSeriesLabels(expr);
    const forLabelInterpolated = datasource.interpolateString(forLabel.label);
    return (_result$forLabelInter = result[forLabelInterpolated].map(v => ({
      value: v
    }))) !== null && _result$forLabelInter !== void 0 ? _result$forLabelInter : [];
  };

  const onGetMetrics = (0,react.useCallback)(() => {
    return withTemplateVariableOptions(getMetrics(datasource, query));
  }, [datasource, query, withTemplateVariableOptions]);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(experimental.EditorRow, {
      children: [(0,jsx_runtime.jsx)(MetricSelect, {
        query: query,
        onChange: onChange,
        onGetMetrics: onGetMetrics
      }), (0,jsx_runtime.jsx)(LabelFilters.P, {
        labelsFilters: query.labels,
        onChange: onChangeLabels,
        onGetLabelNames: forLabel => withTemplateVariableOptions(onGetLabelNames(forLabel)),
        onGetLabelValues: forLabel => withTemplateVariableOptions(onGetLabelValues(forLabel))
      })]
    }), (0,jsx_runtime.jsxs)(OperationsEditorRow.B, {
      children: [(0,jsx_runtime.jsx)(OperationList.P, {
        queryModeller: PromQueryModeller.Z,
        datasource: datasource,
        query: query,
        onChange: onChange,
        onRunQuery: onRunQuery
      }), (0,jsx_runtime.jsx)(PromQueryBuilderHints, {
        datasource: datasource,
        query: query,
        onChange: onChange,
        data: data
      })]
    }), query.binaryQueries && query.binaryQueries.length > 0 && (0,jsx_runtime.jsx)(NestedQueryList, {
      query: query,
      datasource: datasource,
      onChange: onChange,
      onRunQuery: onRunQuery
    })]
  });
});

async function getMetrics(datasource, query) {
  if (!datasource.languageProvider.metricsMetadata) {
    await datasource.languageProvider.loadMetricsMetadata();
  }

  let metrics;

  if (query.labels.length > 0) {
    var _await$datasource$lan;

    const expr = PromQueryModeller.Z.renderLabels(query.labels);
    metrics = (_await$datasource$lan = (await datasource.languageProvider.getSeries(expr, true))['__name__']) !== null && _await$datasource$lan !== void 0 ? _await$datasource$lan : [];
  } else {
    var _await$datasource$lan2;

    metrics = (_await$datasource$lan2 = await datasource.languageProvider.getLabelValues('__name__')) !== null && _await$datasource$lan2 !== void 0 ? _await$datasource$lan2 : [];
  }

  return metrics.map(m => ({
    value: m,
    description: (0,language_provider.UQ)(m, datasource.languageProvider.metricsMetadata)
  }));
}

PromQueryBuilder.displayName = 'PromQueryBuilder';
var prism = __webpack_require__("./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js");
var prism_default = __webpack_require__.n(prism);
var promql = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
;







function QueryPreview(_ref) {
  let {
    query
  } = _ref;
  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = QueryPreview_getStyles(theme);
  const highlighted = prism_default().highlight(query, promql.Fe, 'promql');
  return (0,jsx_runtime.jsx)(experimental.EditorRow, {
    children: (0,jsx_runtime.jsx)(experimental.EditorFieldGroup, {
      children: (0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Raw query",
        children: (0,jsx_runtime.jsx)("div", {
          className: (0,emotion_css_esm.cx)(styles.editorField, 'prism-syntax-highlight'),
          "aria-label": "selector",
          dangerouslySetInnerHTML: {
            __html: highlighted
          }
        })
      })
    })
  });
}

const QueryPreview_getStyles = theme => {
  return {
    editorField: (0,emotion_css_esm.css)({
      fontFamily: theme.typography.fontFamilyMonospace,
      fontSize: theme.typography.bodySmall.fontSize
    })
  };
};
;










function PromQueryBuilderContainer(props) {
  const {
    query,
    onChange,
    onRunQuery,
    datasource,
    data
  } = props;
  const [state, dispatch] = (0,react.useReducer)(stateSlice.reducer, {
    expr: query.expr
  }); 

  (0,react.useEffect)(() => {
    dispatch(exprChanged(query.expr));
  }, [query.expr]);

  const onVisQueryChange = visQuery => {
    const expr = PromQueryModeller.Z.renderQuery(visQuery);
    dispatch(visualQueryChange({
      visQuery,
      expr
    }));
    onChange(Object.assign({}, props.query, {
      expr: expr
    }));
  };

  if (!state.visQuery) {
    return null;
  }

  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(PromQueryBuilder, {
      query: state.visQuery,
      datasource: datasource,
      onChange: onVisQueryChange,
      onRunQuery: onRunQuery,
      data: data
    }), query.rawQuery && (0,jsx_runtime.jsx)(QueryPreview, {
      query: query.expr
    })]
  });
}
const stateSlice = (0,redux_toolkit_esm.oM)({
  name: 'prom-builder-container',
  initialState: {
    expr: ''
  },
  reducers: {
    visualQueryChange: (state, action) => {
      state.expr = action.payload.expr;
      state.visQuery = action.payload.visQuery;
    },
    exprChanged: (state, action) => {
      if (!state.visQuery || state.expr !== action.payload) {
        state.expr = action.payload;
        const parseResult = (0,parsing._)(action.payload);
        state.visQuery = parseResult.query;
      }
    }
  }
});
const {
  visualQueryChange,
  exprChanged
} = stateSlice.actions;
var OperationExplainedBox = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationExplainedBox.tsx");
var OperationListExplained = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/OperationListExplained.tsx");
;








const PromQueryBuilderExplained = react.memo(_ref => {
  let {
    query,
    nested
  } = _ref;
  const visQuery = (0,parsing._)(query || '').query;
  return (0,jsx_runtime.jsxs)(experimental.Stack, {
    gap: 0,
    direction: "column",
    children: [(0,jsx_runtime.jsx)(OperationExplainedBox.B, {
      stepNumber: 1,
      title: `${visQuery.metric} ${PromQueryModeller/* promQueryModeller.renderLabels */.Z.renderLabels(visQuery.labels)}`,
      children: "Fetch all series matching metric name and label filters."
    }), (0,jsx_runtime.jsx)(OperationListExplained.V, {
      stepNumber: 2,
      queryModeller: PromQueryModeller.Z,
      query: visQuery
    })]
  });
});
PromQueryBuilderExplained.displayName = 'PromQueryBuilderExplained';
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var usePrevious = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/usePrevious.js");
;
const _excluded = ["datasource", "onChange", "query"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function PromExemplarField(_ref) {
  let {
    datasource,
    onChange,
    query
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const [error, setError] = (0,react.useState)(null);
  const styles = (0,grafana_ui_src.useStyles2)(PromExemplarField_getStyles);
  const prevError = (0,usePrevious.Z)(error);
  (0,react.useEffect)(() => {
    if (!datasource.exemplarsAvailable) {
      setError('Exemplars for this query are not available');
      onChange(false);
    } else if (query.instant && !query.range) {
      setError('Exemplars are not available for instant queries');
      onChange(false);
    } else {
      setError(null); 

      if (prevError && !error) {
        onChange(true);
      }
    }
  }, [datasource.exemplarsAvailable, query.instant, query.range, onChange, prevError, error]);
  const iconButtonStyles = (0,emotion_css_esm.cx)({
    [styles.activeIcon]: !!query.exemplar
  }, styles.eyeIcon);
  return (0,jsx_runtime.jsx)(grafana_ui_src.InlineLabel, {
    width: "auto",
    "data-testid": rest['data-testid'],
    children: (0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
      content: error !== null && error !== void 0 ? error : '',
      children: (0,jsx_runtime.jsxs)("div", {
        className: styles.iconWrapper,
        children: ["Exemplars", (0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
          name: "eye",
          tooltip: !!query.exemplar ? 'Disable query with exemplars' : 'Enable query with exemplars',
          disabled: !!error,
          className: iconButtonStyles,
          onClick: () => {
            onChange(!query.exemplar);
          }
        })]
      })
    })
  });
}

function PromExemplarField_getStyles(theme) {
  return {
    eyeIcon: emotion_css_esm.css`
      margin-left: ${theme.spacing(2)};
    `,
    activeIcon: emotion_css_esm.css`
      color: ${theme.colors.primary.main};
    `,
    iconWrapper: emotion_css_esm.css`
      display: flex;
      align-items: center;
    `
  };
}
;
var _InlineFormLabel, _InlineFormLabel2;









const PromExploreExtraField = (0,react.memo)(_ref => {
  var _query$interval;

  let {
    query,
    datasource,
    onChange,
    onRunQuery
  } = _ref;
  const rangeOptions = getQueryTypeOptions(true);
  const prevQuery = (0,usePrevious.Z)(query);
  const onExemplarChange = (0,react.useCallback)(exemplar => {
    if (!(0,lodash.isEqual)(query, prevQuery) || exemplar !== query.exemplar) {
      onChange(Object.assign({}, query, {
        exemplar
      }));
    }
  }, [prevQuery, query, onChange]);

  function onChangeQueryStep(interval) {
    onChange(Object.assign({}, query, {
      interval
    }));
  }

  function onStepChange(e) {
    if (e.currentTarget.value !== query.interval) {
      onChangeQueryStep(e.currentTarget.value);
    }
  }

  function onReturnKeyDown(e) {
    if (e.key === 'Enter' && e.shiftKey) {
      onRunQuery();
    }
  }

  const onQueryTypeChange = getQueryTypeChangeHandler(query, onChange);
  return (0,jsx_runtime.jsxs)("div", {
    "aria-label": "Prometheus extra field",
    className: "gf-form-inline",
    "data-testid": testIds.extraFieldEditor,
    children: [(0,jsx_runtime.jsxs)("div", {
      "data-testid": testIds.queryTypeField,
      className: (0,emotion_css_esm.cx)('gf-form explore-input-margin', emotion_css_esm.css`
              flex-wrap: nowrap;
            `),
      "aria-label": "Query type field",
      children: [_InlineFormLabel || (_InlineFormLabel = (0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
        width: "auto",
        children: "Query type"
      })), (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
        options: rangeOptions,
        value: query.range && query.instant ? 'both' : query.instant ? 'instant' : 'range',
        onChange: onQueryTypeChange
      })]
    }), (0,jsx_runtime.jsxs)("div", {
      "data-testid": testIds.stepField,
      className: (0,emotion_css_esm.cx)('gf-form', emotion_css_esm.css`
              flex-wrap: nowrap;
            `),
      "aria-label": "Step field",
      children: [_InlineFormLabel2 || (_InlineFormLabel2 = (0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
        width: 6,
        tooltip: 'Time units and built-in variables can be used here, for example: $__interval, $__rate_interval, 5s, 1m, 3h, 1d, 1y (Default if no unit is specified: s)',
        children: "Min step"
      })), (0,jsx_runtime.jsx)("input", {
        type: 'text',
        className: "gf-form-input width-4",
        placeholder: 'auto',
        onChange: onStepChange,
        onKeyDown: onReturnKeyDown,
        value: (_query$interval = query.interval) !== null && _query$interval !== void 0 ? _query$interval : ''
      })]
    }), (0,jsx_runtime.jsx)(PromExemplarField, {
      onChange: onExemplarChange,
      datasource: datasource,
      query: query
    })]
  });
});
PromExploreExtraField.displayName = 'PromExploreExtraField';
function getQueryTypeOptions(includeBoth) {
  const rangeOptions = [{
    value: 'range',
    label: 'Range',
    description: 'Run query over a range of time'
  }, {
    value: 'instant',
    label: 'Instant',
    description: 'Run query against a single point in time. For this query, the "To" time is used'
  }];

  if (includeBoth) {
    rangeOptions.push({
      value: 'both',
      label: 'Both',
      description: 'Run an Instant query and a Range query'
    });
  }

  return rangeOptions;
}
function getQueryTypeChangeHandler(query, onChange) {
  return queryType => {
    if (queryType === 'instant') {
      onChange(Object.assign({}, query, {
        instant: true,
        range: false,
        exemplar: false
      }));
    } else if (queryType === 'range') {
      onChange(Object.assign({}, query, {
        instant: false,
        range: true
      }));
    } else {
      onChange(Object.assign({}, query, {
        instant: true,
        range: true
      }));
    }
  };
}
const testIds = {
  extraFieldEditor: 'prom-editor-extra-field',
  stepField: 'prom-editor-extra-field-step',
  queryTypeField: 'prom-editor-extra-field-query-type'
};
;





const PromLink = _ref => {
  let {
    panelData,
    query,
    datasource
  } = _ref;
  const [href, setHref] = (0,react.useState)('');
  (0,react.useEffect)(() => {
    if (panelData) {
      const getExternalLink = () => {
        if (!panelData.request) {
          return '';
        }

        const {
          request: {
            range,
            interval,
            scopedVars
          }
        } = panelData;
        const start = datasource.getPrometheusTime(range.from, false);
        const end = datasource.getPrometheusTime(range.to, true);
        const rangeDiff = Math.ceil(end - start);
        const endTime = range.to.utc().format('YYYY-MM-DD HH:mm');
        const enrichedScopedVars = Object.assign({}, scopedVars, datasource.getRateIntervalScopedVariable(src.rangeUtil.intervalToSeconds(interval), src.rangeUtil.intervalToSeconds(datasource.interval)));
        const options = {
          interval,
          scopedVars: enrichedScopedVars
        };
        const customQueryParameters = {};

        if (datasource.customQueryParameters) {
          for (const [k, v] of datasource.customQueryParameters) {
            customQueryParameters[k] = v;
          }
        }

        const queryOptions = datasource.createQuery(query, options, start, end);
        const expr = Object.assign({}, customQueryParameters, {
          'g0.expr': queryOptions.expr,
          'g0.range_input': rangeDiff + 's',
          'g0.end_input': endTime,
          'g0.step_input': queryOptions.step,
          'g0.tab': 0
        });
        const args = (0,lodash.map)(expr, (v, k) => {
          return k + '=' + encodeURIComponent(v);
        }).join('&');
        return `${datasource.directUrl}/graph?${args}`;
      };

      setHref(getExternalLink());
    }
  }, [datasource, panelData, query]);
  return (0,jsx_runtime.jsx)("a", {
    href: src.textUtil.sanitizeUrl(href),
    target: "_blank",
    rel: "noopener noreferrer",
    children: "Prometheus"
  });
};

 const components_PromLink = ((0,react.memo)(PromLink));
var LocalStorageValueProvider = __webpack_require__("./public/app/core/components/LocalStorageValueProvider/index.tsx");
;
const makePromiseCancelable = promise => {
  let hasCanceled_ = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(val => hasCanceled_ ? reject({
      isCanceled: true
    }) : resolve(val));
    promise.catch(error => hasCanceled_ ? reject({
      isCanceled: true
    }) : reject(error));
  });
  return {
    promise: wrappedPromise,

    cancel() {
      hasCanceled_ = true;
    }

  };
};
var language_utils = __webpack_require__("./public/app/plugins/datasource/prometheus/language_utils.ts");
var index_esm = __webpack_require__("./.yarn/__virtual__/react-window-virtual-0f9a8c6a67/0/cache/react-window-npm-1.8.6-4f5a230226-54ccf2b16c.zip/node_modules/react-window/dist/index.esm.js");
;
var _LoadingPlaceholder, _Label, _Label2, _Label3, _Label4;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const EMPTY_SELECTOR = '{}';
const METRIC_LABEL = '__name__';
const LIST_ITEM_SIZE = 25;
function buildSelector(labels) {
  let singleMetric = '';
  const selectedLabels = [];

  for (const label of labels) {
    if ((label.name === METRIC_LABEL || label.selected) && label.values && label.values.length > 0) {
      const selectedValues = label.values.filter(value => value.selected).map(value => value.name);

      if (selectedValues.length > 1) {
        selectedLabels.push(`${label.name}=~"${selectedValues.map(language_utils/* escapeLabelValueInRegexSelector */.tU).join('|')}"`);
      } else if (selectedValues.length === 1) {
        if (label.name === METRIC_LABEL) {
          singleMetric = selectedValues[0];
        } else {
          selectedLabels.push(`${label.name}="${(0,language_utils/* escapeLabelValueInExactSelector */.U9)(selectedValues[0])}"`);
        }
      }
    }
  }

  return [singleMetric, '{', selectedLabels.join(','), '}'].join('');
}
function facetLabels(labels, possibleLabels, lastFacetted) {
  return labels.map(label => {
    const possibleValues = possibleLabels[label.name];

    if (possibleValues) {
      let existingValues;

      if (label.name === lastFacetted && label.values) {
        existingValues = label.values;
      } else {
        var _label$values;

        const selectedValues = new Set(((_label$values = label.values) === null || _label$values === void 0 ? void 0 : _label$values.filter(value => value.selected).map(value => value.name)) || []); 

        existingValues = possibleValues.map(value => ({
          name: value,
          selected: selectedValues.has(value)
        }));
      }

      return Object.assign({}, label, {
        loading: false,
        values: existingValues,
        hidden: !possibleValues,
        facets: existingValues.length
      });
    } 


    return Object.assign({}, label, {
      loading: false,
      hidden: !possibleValues,
      values: undefined,
      facets: 0
    });
  });
}
const PrometheusMetricsBrowser_getStyles = (0,grafana_ui_src.stylesFactory)(theme => ({
  wrapper: emotion_css_esm.css`
    background-color: ${theme.colors.bg2};
    padding: ${theme.spacing.sm};
    width: 100%;
  `,
  list: emotion_css_esm.css`
    margin-top: ${theme.spacing.sm};
    display: flex;
    flex-wrap: wrap;
    max-height: 200px;
    overflow: auto;
    align-content: flex-start;
  `,
  section: emotion_css_esm.css`
    & + & {
      margin: ${theme.spacing.md} 0;
    }
    position: relative;
  `,
  selector: emotion_css_esm.css`
    font-family: ${theme.typography.fontFamily.monospace};
    margin-bottom: ${theme.spacing.sm};
  `,
  status: emotion_css_esm.css`
    padding: ${theme.spacing.xs};
    color: ${theme.colors.textSemiWeak};
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
  statusShowing: emotion_css_esm.css`
    opacity: 1;
  `,
  error: emotion_css_esm.css`
    color: ${theme.palette.brandDanger};
  `,
  valueList: emotion_css_esm.css`
    margin-right: ${theme.spacing.sm};
  `,
  valueListWrapper: emotion_css_esm.css`
    border-left: 1px solid ${theme.colors.border2};
    margin: ${theme.spacing.sm} 0;
    padding: ${theme.spacing.sm} 0 ${theme.spacing.sm} ${theme.spacing.sm};
  `,
  valueListArea: emotion_css_esm.css`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${theme.spacing.sm};
  `,
  valueTitle: emotion_css_esm.css`
    margin-left: -${theme.spacing.xs};
    margin-bottom: ${theme.spacing.sm};
  `,
  validationStatus: emotion_css_esm.css`
    padding: ${theme.spacing.xs};
    margin-bottom: ${theme.spacing.sm};
    color: ${theme.colors.textStrong};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}));

class UnthemedPrometheusMetricsBrowser extends react.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "valueListsRef", react.createRef());

    _defineProperty(this, "state", {
      labels: [],
      labelSearchTerm: '',
      metricSearchTerm: '',
      status: 'Ready',
      error: '',
      validationStatus: '',
      valueSearchTerm: ''
    });

    _defineProperty(this, "onChangeLabelSearch", event => {
      this.setState({
        labelSearchTerm: event.target.value
      });
    });

    _defineProperty(this, "onChangeMetricSearch", event => {
      this.setState({
        metricSearchTerm: event.target.value
      });
    });

    _defineProperty(this, "onChangeValueSearch", event => {
      this.setState({
        valueSearchTerm: event.target.value
      });
    });

    _defineProperty(this, "onClickRunQuery", () => {
      const selector = buildSelector(this.state.labels);
      this.props.onChange(selector);
    });

    _defineProperty(this, "onClickRunRateQuery", () => {
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
          labelSearchTerm: '',
          metricSearchTerm: '',
          status: '',
          error: '',
          validationStatus: '',
          valueSearchTerm: ''
        };
      });
      this.props.deleteLastUsedLabels(); 

      this.fetchValues(METRIC_LABEL, EMPTY_SELECTOR);
    });

    _defineProperty(this, "onClickLabel", (name, value, event) => {
      const label = this.state.labels.find(l => l.name === name);

      if (!label) {
        return;
      } 


      const selected = !label.selected;
      let nextValue = {
        selected
      };

      if (label.values && !selected) {
        const values = label.values.map(value => Object.assign({}, value, {
          selected: false
        }));
        nextValue = Object.assign({}, nextValue, {
          facets: 0,
          values
        });
      } 


      this.setState({
        labelSearchTerm: ''
      });
      this.updateLabelState(name, nextValue, '', () => this.doFacettingForLabel(name));
    });

    _defineProperty(this, "onClickValue", (name, value, event) => {
      const label = this.state.labels.find(l => l.name === name);

      if (!label || !label.values) {
        return;
      } 


      this.setState({
        labelSearchTerm: ''
      }); 

      const values = label.values.map(v => Object.assign({}, v, {
        selected: v.name === value ? !v.selected : v.selected
      }));
      this.updateLabelState(name, {
        values
      }, '', () => this.doFacetting(name));
    });

    _defineProperty(this, "onClickMetric", (name, value, event) => {
      const label = this.state.labels.find(l => l.name === name);

      if (!label || !label.values) {
        return;
      } 


      this.setState({
        metricSearchTerm: ''
      }); 

      const values = label.values.map(v => Object.assign({}, v, {
        selected: v.name === value || v.selected ? !v.selected : v.selected
      })); 

      const selected = values.some(v => v.selected);
      this.updateLabelState(name, {
        selected,
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
          this.state.labels.forEach(label => (label.selected || label.name === METRIC_LABEL) && this.fetchValues(label.name, selector));
        });
      } else {
        this.fetchSeries(selector, lastFacetted);
      }
    });
  }

  updateLabelState(name, updatedFields) {
    let status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    let cb = arguments.length > 3 ? arguments[3] : undefined;
    this.setState(state => {
      const labels = state.labels.map(label => {
        if (label.name === name) {
          return Object.assign({}, label, updatedFields);
        }

        return label;
      }); 

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
      lastUsedLabels
    } = this.props;

    if (languageProvider) {
      const selectedLabels = lastUsedLabels;
      languageProvider.start().then(() => {
        let rawLabels = languageProvider.getLabelKeys(); 

        this.fetchValues(METRIC_LABEL, EMPTY_SELECTOR); 

        const labels = rawLabels.map((label, i, arr) => ({
          name: label,
          selected: selectedLabels.includes(label),
          loading: false
        })); 

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
      if (!label.values) {
        this.fetchValues(name, buildSelector(this.state.labels));
      }
    } else {
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
      let rawValues = await languageProvider.getLabelValues(name); 

      if (selector !== buildSelector(this.state.labels)) {
        this.updateLabelState(name, {
          loading: false
        });
        return;
      }

      const values = [];
      const {
        metricsMetadata
      } = languageProvider;

      for (const labelValue of rawValues) {
        const value = {
          name: labelValue
        }; 

        if (name === METRIC_LABEL && metricsMetadata) {
          const meta = metricsMetadata[labelValue];

          if (meta) {
            value.details = `(${meta.type}) ${meta.help}`;
          }
        }

        values.push(value);
      }

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
      const possibleLabels = await languageProvider.fetchSeriesLabels(selector, true); 

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
      validationStatus: `Selector is valid (${streams.length} series found)`
    });
  }

  render() {
    var _metrics, _metrics$values2;

    const {
      theme
    } = this.props;
    const {
      labels,
      labelSearchTerm,
      metricSearchTerm,
      status,
      error,
      validationStatus,
      valueSearchTerm
    } = this.state;
    const styles = PrometheusMetricsBrowser_getStyles(theme);

    if (labels.length === 0) {
      return (0,jsx_runtime.jsx)("div", {
        className: styles.wrapper,
        children: _LoadingPlaceholder || (_LoadingPlaceholder = (0,jsx_runtime.jsx)(grafana_ui_src.LoadingPlaceholder, {
          text: "Loading labels..."
        }))
      });
    } 


    let metrics = labels.find(label => label.name === METRIC_LABEL);

    if (metrics && metricSearchTerm) {
      var _metrics$values;

      metrics = Object.assign({}, metrics, {
        values: (_metrics$values = metrics.values) === null || _metrics$values === void 0 ? void 0 : _metrics$values.filter(value => value.selected || value.name.includes(metricSearchTerm))
      });
    } 


    let nonMetricLabels = labels.filter(label => !label.hidden && label.name !== METRIC_LABEL);

    if (labelSearchTerm) {
      nonMetricLabels = nonMetricLabels.filter(label => label.selected || label.name.includes(labelSearchTerm));
    } 


    let selectedLabels = nonMetricLabels.filter(label => label.selected && label.values);

    if (valueSearchTerm) {
      selectedLabels = selectedLabels.map(label => {
        var _label$values2;

        return Object.assign({}, label, {
          values: (_label$values2 = label.values) === null || _label$values2 === void 0 ? void 0 : _label$values2.filter(value => value.selected || value.name.includes(valueSearchTerm))
        });
      });
    }

    const selector = buildSelector(this.state.labels);
    const empty = selector === EMPTY_SELECTOR;
    const metricCount = ((_metrics = metrics) === null || _metrics === void 0 ? void 0 : (_metrics$values2 = _metrics.values) === null || _metrics$values2 === void 0 ? void 0 : _metrics$values2.length) || 0;
    return (0,jsx_runtime.jsxs)("div", {
      className: styles.wrapper,
      children: [(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
        align: "flex-start",
        spacing: "lg",
        children: [(0,jsx_runtime.jsx)("div", {
          children: (0,jsx_runtime.jsxs)("div", {
            className: styles.section,
            children: [_Label || (_Label = (0,jsx_runtime.jsx)(grafana_ui_src.Label, {
              description: "Once a metric is selected only possible labels are shown.",
              children: "1. Select a metric"
            })), (0,jsx_runtime.jsx)("div", {
              children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
                onChange: this.onChangeMetricSearch,
                "aria-label": "Filter expression for metric",
                value: metricSearchTerm
              })
            }), (0,jsx_runtime.jsx)("div", {
              role: "list",
              className: styles.valueListWrapper,
              children: (0,jsx_runtime.jsx)(index_esm.t7, {
                height: Math.min(450, metricCount * LIST_ITEM_SIZE),
                itemCount: metricCount,
                itemSize: LIST_ITEM_SIZE,
                itemKey: i => metrics.values[i].name,
                width: 300,
                className: styles.valueList,
                children: _ref => {
                  var _metrics2, _metrics2$values;

                  let {
                    index,
                    style
                  } = _ref;
                  const value = (_metrics2 = metrics) === null || _metrics2 === void 0 ? void 0 : (_metrics2$values = _metrics2.values) === null || _metrics2$values === void 0 ? void 0 : _metrics2$values[index];

                  if (!value) {
                    return null;
                  }

                  return (0,jsx_runtime.jsx)("div", {
                    style: style,
                    children: (0,jsx_runtime.jsx)(grafana_ui_src.BrowserLabel, {
                      name: metrics.name,
                      value: value === null || value === void 0 ? void 0 : value.name,
                      title: value.details,
                      active: value === null || value === void 0 ? void 0 : value.selected,
                      onClick: this.onClickMetric,
                      searchTerm: metricSearchTerm
                    })
                  });
                }
              })
            })]
          })
        }), (0,jsx_runtime.jsxs)("div", {
          children: [(0,jsx_runtime.jsxs)("div", {
            className: styles.section,
            children: [_Label2 || (_Label2 = (0,jsx_runtime.jsx)(grafana_ui_src.Label, {
              description: "Once label values are selected, only possible label combinations are shown.",
              children: "2. Select labels to search in"
            })), (0,jsx_runtime.jsx)("div", {
              children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
                onChange: this.onChangeLabelSearch,
                "aria-label": "Filter expression for label",
                value: labelSearchTerm
              })
            }), (0,jsx_runtime.jsx)("div", {
              className: styles.list,
              style: {
                height: 120
              },
              children: nonMetricLabels.map(label => (0,jsx_runtime.jsx)(grafana_ui_src.BrowserLabel, {
                name: label.name,
                loading: label.loading,
                active: label.selected,
                hidden: label.hidden,
                facets: label.facets,
                onClick: this.onClickLabel,
                searchTerm: labelSearchTerm
              }, label.name))
            })]
          }), (0,jsx_runtime.jsxs)("div", {
            className: styles.section,
            children: [_Label3 || (_Label3 = (0,jsx_runtime.jsx)(grafana_ui_src.Label, {
              description: "Use the search field to find values across selected labels.",
              children: "3. Select (multiple) values for your labels"
            })), (0,jsx_runtime.jsx)("div", {
              children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
                onChange: this.onChangeValueSearch,
                "aria-label": "Filter expression for label values",
                value: valueSearchTerm
              })
            }), (0,jsx_runtime.jsx)("div", {
              className: styles.valueListArea,
              ref: this.valueListsRef,
              children: selectedLabels.map(label => {
                var _label$values3, _label$values4, _label$values5;

                return (0,jsx_runtime.jsxs)("div", {
                  role: "list",
                  "aria-label": `Values for ${label.name}`,
                  className: styles.valueListWrapper,
                  children: [(0,jsx_runtime.jsx)("div", {
                    className: styles.valueTitle,
                    children: (0,jsx_runtime.jsx)(grafana_ui_src.BrowserLabel, {
                      name: label.name,
                      loading: label.loading,
                      active: label.selected,
                      hidden: label.hidden 
                      ,
                      facets: label.facets || ((_label$values3 = label.values) === null || _label$values3 === void 0 ? void 0 : _label$values3.length),
                      onClick: this.onClickLabel
                    })
                  }), (0,jsx_runtime.jsx)(index_esm.t7, {
                    height: Math.min(200, LIST_ITEM_SIZE * (((_label$values4 = label.values) === null || _label$values4 === void 0 ? void 0 : _label$values4.length) || 0)),
                    itemCount: ((_label$values5 = label.values) === null || _label$values5 === void 0 ? void 0 : _label$values5.length) || 0,
                    itemSize: 28,
                    itemKey: i => label.values[i].name,
                    width: 200,
                    className: styles.valueList,
                    children: _ref2 => {
                      var _label$values6;

                      let {
                        index,
                        style
                      } = _ref2;
                      const value = (_label$values6 = label.values) === null || _label$values6 === void 0 ? void 0 : _label$values6[index];

                      if (!value) {
                        return null;
                      }

                      return (0,jsx_runtime.jsx)("div", {
                        style: style,
                        children: (0,jsx_runtime.jsx)(grafana_ui_src.BrowserLabel, {
                          name: label.name,
                          value: value === null || value === void 0 ? void 0 : value.name,
                          active: value === null || value === void 0 ? void 0 : value.selected,
                          onClick: this.onClickValue,
                          searchTerm: valueSearchTerm
                        })
                      });
                    }
                  })]
                }, label.name);
              })
            })]
          })]
        })]
      }), (0,jsx_runtime.jsxs)("div", {
        className: styles.section,
        children: [_Label4 || (_Label4 = (0,jsx_runtime.jsx)(grafana_ui_src.Label, {
          children: "4. Resulting selector"
        })), (0,jsx_runtime.jsx)("div", {
          "aria-label": "selector",
          className: styles.selector,
          children: selector
        }), validationStatus && (0,jsx_runtime.jsx)("div", {
          className: styles.validationStatus,
          children: validationStatus
        }), (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
          children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            "aria-label": "Use selector for query button",
            disabled: empty,
            onClick: this.onClickRunQuery,
            children: "Use query"
          }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            "aria-label": "Use selector as metrics button",
            variant: "secondary",
            disabled: empty,
            onClick: this.onClickRunRateQuery,
            children: "Use as rate query"
          }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            "aria-label": "Validate submit button",
            variant: "secondary",
            disabled: empty,
            onClick: this.onClickValidate,
            children: "Validate selector"
          }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            "aria-label": "Selector clear button",
            variant: "secondary",
            onClick: this.onClickClear,
            children: "Clear"
          }), (0,jsx_runtime.jsx)("div", {
            className: (0,emotion_css_esm.cx)(styles.status, (status || error) && styles.statusShowing),
            children: (0,jsx_runtime.jsx)("span", {
              className: error ? styles.error : '',
              children: error || status
            })
          })]
        })]
      })]
    });
  }

}
const PrometheusMetricsBrowser = (0,grafana_ui_src.withTheme)(UnthemedPrometheusMetricsBrowser);
;


const Field = react.lazy(() => __webpack_require__.e( 6031).then(__webpack_require__.bind(__webpack_require__, "./public/app/plugins/datasource/prometheus/components/monaco-query-field/MonacoQueryField.tsx")));
const MonacoQueryFieldLazy = props => {
  return (0,jsx_runtime.jsx)(react.Suspense, {
    fallback: null,
    children: (0,jsx_runtime.jsx)(Field, Object.assign({}, props))
  });
};
;
const MonacoQueryFieldWrapper_excluded = ["runQueryOnBlur", "onRunQuery", "onChange"];

function MonacoQueryFieldWrapper_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const MonacoQueryFieldWrapper = props => {
  const lastRunValueRef = (0,react.useRef)(null);

  const {
    runQueryOnBlur,
    onRunQuery,
    onChange
  } = props,
        rest = MonacoQueryFieldWrapper_objectWithoutPropertiesLoose(props, MonacoQueryFieldWrapper_excluded);

  const handleRunQuery = value => {
    lastRunValueRef.current = value;
    onChange(value);
    onRunQuery();
  };

  const handleBlur = value => {
    if (runQueryOnBlur) {
      if (value !== lastRunValueRef.current) {
        handleRunQuery(value);
      }
    } else {
      onChange(value);
    }
  };

  return (0,jsx_runtime.jsx)(MonacoQueryFieldLazy, Object.assign({
    onRunQuery: handleRunQuery,
    onBlur: handleBlur
  }, rest));
};
;
function PromQueryField_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const RECORDING_RULES_GROUP = '__recording_rules__';
const LAST_USED_LABELS_KEY = 'grafana.datasources.prometheus.browser.labels';

function getChooserText(metricsLookupDisabled, hasSyntax, hasMetrics) {
  if (metricsLookupDisabled) {
    return '(Disabled)';
  }

  if (!hasSyntax) {
    return 'Loading metrics...';
  }

  if (!hasMetrics) {
    return '(No metrics found)';
  }

  return 'Metrics browser';
}

function willApplySuggestion(suggestion, _ref) {
  let {
    typeaheadContext,
    typeaheadText
  } = _ref;

  switch (typeaheadContext) {
    case 'context-labels':
      {
        const nextChar = DOMUtil.getNextCharacter();

        if (!nextChar || nextChar === '}' || nextChar === ',') {
          suggestion += '=';
        }

        break;
      }

    case 'context-label-values':
      {
        if (!typeaheadText.match(/^(!?=~?"|")/)) {
          suggestion = `"${suggestion}`;
        }

        if (DOMUtil.getNextCharacter() !== '"') {
          suggestion = `${suggestion}"`;
        }

        break;
      }

    default:
  }

  return suggestion;
}

class PromQueryField extends react.PureComponent {
  constructor(props, context) {
    super(props, context);

    PromQueryField_defineProperty(this, "plugins", void 0);

    PromQueryField_defineProperty(this, "refreshHint", () => {
      const {
        datasource,
        query,
        data
      } = this.props;
      const initHints = datasource.getInitHints();
      const initHint = initHints.length > 0 ? initHints[0] : null;

      if (!data || data.series.length === 0) {
        this.setState({
          hint: initHint
        });
        return;
      }

      const result = (0,src.isDataFrame)(data.series[0]) ? data.series.map(src.toLegacyResponseData) : data.series;
      const queryHints = datasource.getQueryHints(query, result);
      let queryHint = queryHints.length > 0 ? queryHints[0] : null;
      this.setState({
        hint: queryHint !== null && queryHint !== void 0 ? queryHint : initHint
      });
    });

    PromQueryField_defineProperty(this, "refreshMetrics", async () => {
      const {
        datasource: {
          languageProvider
        }
      } = this.props;
      this.languageProviderInitializationPromise = makePromiseCancelable(languageProvider.start());

      try {
        const remainingTasks = await this.languageProviderInitializationPromise.promise;
        await Promise.all(remainingTasks);
        this.onUpdateLanguage();
      } catch (err) {
        if (!err.isCanceled) {
          throw err;
        }
      }
    });

    PromQueryField_defineProperty(this, "onChangeLabelBrowser", selector => {
      this.onChangeQuery(selector, true);
      this.setState({
        labelBrowserVisible: false
      });
    });

    PromQueryField_defineProperty(this, "onChangeQuery", (value, override) => {
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

    PromQueryField_defineProperty(this, "onClickChooserButton", () => {
      this.setState(state => ({
        labelBrowserVisible: !state.labelBrowserVisible
      }));
    });

    PromQueryField_defineProperty(this, "onClickHintFix", () => {
      const {
        datasource,
        query,
        onChange,
        onRunQuery
      } = this.props;
      const {
        hint
      } = this.state;
      onChange(datasource.modifyQuery(query, hint.fix.action));
      onRunQuery();
    });

    PromQueryField_defineProperty(this, "onUpdateLanguage", () => {
      const {
        datasource: {
          languageProvider
        }
      } = this.props;
      const {
        metrics
      } = languageProvider;

      if (!metrics) {
        return;
      }

      this.setState({
        syntaxLoaded: true
      });
    });

    PromQueryField_defineProperty(this, "onTypeahead", async typeahead => {
      const {
        datasource: {
          languageProvider
        }
      } = this.props;

      if (!languageProvider) {
        return {
          suggestions: []
        };
      }

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
      const result = await languageProvider.provideCompletionItems({
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

    this.plugins = [(0,grafana_ui_src.BracesPlugin)(), (0,grafana_ui_src.SlatePrism)({
      onlyIn: node => node.type === 'code_block',
      getSyntax: node => 'promql'
    }, Object.assign({}, prism.languages, {
      promql: this.props.datasource.languageProvider.syntax
    }))];
    this.state = {
      labelBrowserVisible: false,
      syntaxLoaded: false,
      hint: null
    };
  }

  componentDidMount() {
    if (this.props.datasource.languageProvider) {
      this.refreshMetrics();
    }

    this.refreshHint();
  }

  componentWillUnmount() {
    if (this.languageProviderInitializationPromise) {
      this.languageProviderInitializationPromise.cancel();
    }
  }

  componentDidUpdate(prevProps) {
    const {
      data,
      datasource: {
        languageProvider
      },
      range
    } = this.props;

    if (languageProvider !== prevProps.datasource.languageProvider) {
      this.setState({
        syntaxLoaded: false
      });
    }

    const changedRangeToRefresh = this.rangeChangedToRefresh(range, prevProps.range); 

    if (languageProvider !== prevProps.datasource.languageProvider || changedRangeToRefresh) {
      this.refreshMetrics();
    }

    if (data && prevProps.data && prevProps.data.series !== data.series) {
      this.refreshHint();
    }
  }

  rangeChangedToRefresh(range, prevRange) {
    if (range && prevRange) {
      const sameMinuteFrom = (0,language_utils.o8)(range.from.valueOf()) === (0,language_utils.o8)(prevRange.from.valueOf());
      const sameMinuteTo = (0,language_utils.o8)(range.to.valueOf()) === (0,language_utils.o8)(prevRange.to.valueOf()); 

      return !(sameMinuteFrom && sameMinuteTo);
    }

    return false;
  }


  render() {
    const {
      datasource,
      datasource: {
        languageProvider
      },
      query,
      ExtraFieldElement,
      history = []
    } = this.props;
    const {
      labelBrowserVisible,
      syntaxLoaded,
      hint
    } = this.state;
    const hasMetrics = languageProvider.metrics.length > 0;
    const chooserText = getChooserText(datasource.lookupsDisabled, syntaxLoaded, hasMetrics);
    const buttonDisabled = !(syntaxLoaded && hasMetrics);
    return (0,jsx_runtime.jsx)(LocalStorageValueProvider.G, {
      storageKey: LAST_USED_LABELS_KEY,
      defaultValue: [],
      children: (lastUsedLabels, onLastUsedLabelsSave, onLastUsedLabelsDelete) => {
        var _query$expr;

        return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [(0,jsx_runtime.jsxs)("div", {
            className: "gf-form-inline gf-form-inline--xs-view-flex-column flex-grow-1",
            "data-testid": this.props['data-testid'],
            children: [(0,jsx_runtime.jsxs)("button", {
              className: "gf-form-label query-keyword pointer",
              onClick: this.onClickChooserButton,
              disabled: buttonDisabled,
              children: [chooserText, (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
                name: labelBrowserVisible ? 'angle-down' : 'angle-right'
              })]
            }), (0,jsx_runtime.jsx)("div", {
              className: "gf-form gf-form--grow flex-shrink-1 min-width-15",
              children: (0,jsx_runtime.jsx)(MonacoQueryFieldWrapper, {
                runQueryOnBlur: this.props.app !== src.CoreApp.Explore,
                languageProvider: languageProvider,
                history: history,
                onChange: this.onChangeQuery,
                onRunQuery: this.props.onRunQuery,
                initialValue: (_query$expr = query.expr) !== null && _query$expr !== void 0 ? _query$expr : ''
              })
            })]
          }), labelBrowserVisible && (0,jsx_runtime.jsx)("div", {
            className: "gf-form",
            children: (0,jsx_runtime.jsx)(PrometheusMetricsBrowser, {
              languageProvider: languageProvider,
              onChange: this.onChangeLabelBrowser,
              lastUsedLabels: lastUsedLabels || [],
              storeLastUsedLabels: onLastUsedLabelsSave,
              deleteLastUsedLabels: onLastUsedLabelsDelete
            })
          }), ExtraFieldElement, hint ? (0,jsx_runtime.jsx)("div", {
            className: "query-row-break",
            children: (0,jsx_runtime.jsxs)("div", {
              className: "prom-query-field-info text-warning",
              children: [hint.label, ' ', hint.fix ? (0,jsx_runtime.jsx)("a", {
                className: "text-link muted",
                onClick: this.onClickHintFix,
                children: hint.fix.label
              }) : null]
            })
          }) : null]
        });
      }
    });
  }

}

 const components_PromQueryField = (PromQueryField);
;
var PromQueryEditor_InlineFormLabel, PromQueryEditor_InlineFormLabel2, _div, _div2;

function PromQueryEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const {
  Switch
} = grafana_ui_src.LegacyForms;
const FORMAT_OPTIONS = [{
  label: 'Time series',
  value: 'time_series'
}, {
  label: 'Table',
  value: 'table'
}, {
  label: 'Heatmap',
  value: 'heatmap'
}];
const INTERVAL_FACTOR_OPTIONS = (0,lodash.map)([1, 2, 3, 4, 5, 10], value => ({
  value,
  label: '1/' + value
}));
class PromQueryEditor extends react.PureComponent {
  constructor(props) {
    super(props); 

    PromQueryEditor_defineProperty(this, "query", void 0);

    PromQueryEditor_defineProperty(this, "onFieldChange", (query, override) => {
      this.query.expr = query.expr;
    });

    PromQueryEditor_defineProperty(this, "onFormatChange", option => {
      this.query.format = option.value;
      this.setState({
        formatOption: option
      }, this.onRunQuery);
    });

    PromQueryEditor_defineProperty(this, "onInstantChange", e => {
      const instant = e.target.checked;
      this.query.instant = instant;
      this.setState({
        instant
      }, this.onRunQuery);
    });

    PromQueryEditor_defineProperty(this, "onIntervalChange", e => {
      const interval = e.currentTarget.value;
      this.query.interval = interval;
      this.setState({
        interval
      });
    });

    PromQueryEditor_defineProperty(this, "onIntervalFactorChange", option => {
      this.query.intervalFactor = option.value;
      this.setState({
        intervalFactorOption: option
      }, this.onRunQuery);
    });

    PromQueryEditor_defineProperty(this, "onLegendChange", e => {
      const legendFormat = e.currentTarget.value;
      this.query.legendFormat = legendFormat;
      this.setState({
        legendFormat
      });
    });

    PromQueryEditor_defineProperty(this, "onExemplarChange", isEnabled => {
      this.query.exemplar = isEnabled;
      this.setState({
        exemplar: isEnabled
      }, this.onRunQuery);
    });

    PromQueryEditor_defineProperty(this, "onRunQuery", () => {
      const {
        query
      } = this; 

      const {
        hide
      } = this.props.query;
      this.props.onChange(Object.assign({}, query, {
        hide
      }));
      this.props.onRunQuery();
    });

    const defaultQuery = {
      expr: '',
      legendFormat: '',
      interval: '',
      exemplar: props.app === src.CoreApp.UnifiedAlerting ? false : true
    };

    const _query = Object.assign({}, defaultQuery, props.query);

    this.query = _query; 

    this.state = {
      interval: _query.interval,
      legendFormat: _query.legendFormat,
      formatOption: FORMAT_OPTIONS.find(option => option.value === _query.format) || FORMAT_OPTIONS[0],
      intervalFactorOption: INTERVAL_FACTOR_OPTIONS.find(option => option.value === _query.intervalFactor) || INTERVAL_FACTOR_OPTIONS[0],
      instant: Boolean(_query.instant),
      exemplar: Boolean(_query.exemplar)
    };
  }

  render() {
    const {
      datasource,
      query,
      range,
      data
    } = this.props;
    const {
      formatOption,
      instant,
      interval,
      intervalFactorOption,
      legendFormat
    } = this.state; 

    const showExemplarField = this.props.app !== src.CoreApp.UnifiedAlerting;
    return (0,jsx_runtime.jsx)(components_PromQueryField, {
      datasource: datasource,
      query: query,
      range: range,
      onRunQuery: this.onRunQuery,
      onChange: this.onFieldChange,
      history: [],
      data: data,
      "data-testid": PromQueryEditor_testIds.editor,
      ExtraFieldElement: (0,jsx_runtime.jsxs)("div", {
        className: "gf-form-inline",
        children: [(0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [PromQueryEditor_InlineFormLabel || (PromQueryEditor_InlineFormLabel = (0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            width: 7,
            tooltip: "Controls the name of the time series, using name or pattern. For example {{hostname}} will be replaced with label value for the label hostname.",
            children: "Legend"
          })), (0,jsx_runtime.jsx)("input", {
            type: "text",
            className: "gf-form-input",
            placeholder: "legend format",
            value: legendFormat,
            onChange: this.onLegendChange,
            onBlur: this.onRunQuery
          })]
        }), (0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [PromQueryEditor_InlineFormLabel2 || (PromQueryEditor_InlineFormLabel2 = (0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            width: 7,
            tooltip: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: ["An additional lower limit for the step parameter of the Prometheus query and for the", ' ', (0,jsx_runtime.jsx)("code", {
                children: "$__interval"
              }), " and ", (0,jsx_runtime.jsx)("code", {
                children: "$__rate_interval"
              }), " variables. The limit is absolute and not modified by the \"Resolution\" setting."]
            }),
            children: "Min step"
          })), (0,jsx_runtime.jsx)("input", {
            type: "text",
            className: "gf-form-input width-8",
            "aria-label": "Set lower limit for the step parameter",
            placeholder: interval,
            onChange: this.onIntervalChange,
            onBlur: this.onRunQuery,
            value: interval
          })]
        }), (0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_div || (_div = (0,jsx_runtime.jsx)("div", {
            className: "gf-form-label",
            children: "Resolution"
          })), (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
            "aria-label": "Select resolution",
            isSearchable: false,
            options: INTERVAL_FACTOR_OPTIONS,
            onChange: this.onIntervalFactorChange,
            value: intervalFactorOption
          })]
        }), (0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_div2 || (_div2 = (0,jsx_runtime.jsx)("div", {
            className: "gf-form-label width-7",
            children: "Format"
          })), (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
            className: "select-container",
            width: 16,
            isSearchable: false,
            options: FORMAT_OPTIONS,
            onChange: this.onFormatChange,
            value: formatOption,
            "aria-label": "Select format"
          }), (0,jsx_runtime.jsx)(Switch, {
            label: "Instant",
            checked: instant,
            onChange: this.onInstantChange
          }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            width: 10,
            tooltip: "Link to Graph in Prometheus",
            children: (0,jsx_runtime.jsx)(components_PromLink, {
              datasource: datasource,
              query: this.query 
              ,
              panelData: data
            })
          })]
        }), showExemplarField && (0,jsx_runtime.jsx)(PromExemplarField, {
          onChange: this.onExemplarChange,
          datasource: datasource,
          query: this.query,
          "data-testid": PromQueryEditor_testIds.exemplar
        })]
      })
    });
  }

}
const PromQueryEditor_testIds = {
  editor: 'prom-editor',
  exemplar: 'exemplar-editor'
};
var QueryOptionGroup = __webpack_require__("./public/app/plugins/datasource/prometheus/querybuilder/shared/QueryOptionGroup.tsx");
;








const legendModeOptions = [{
  label: 'Auto',
  value: prometheus_types.pD.Auto,
  description: 'Only includes unique labels'
}, {
  label: 'Verbose',
  value: prometheus_types.pD.Verbose,
  description: 'All label names and values'
}, {
  label: 'Custom',
  value: prometheus_types.pD.Custom,
  description: 'Provide a naming template'
}];

const PromQueryLegendEditor = react.memo(_ref => {
  let {
    legendFormat,
    onChange,
    onRunQuery
  } = _ref;
  const mode = getLegendMode(legendFormat);
  const inputRef = (0,react.useRef)(null);

  const onLegendFormatChanged = evt => {
    let newFormat = evt.currentTarget.value;

    if (newFormat.length === 0) {
      newFormat = prometheus_types.pD.Auto;
    }

    if (newFormat !== legendFormat) {
      onChange(newFormat);
      onRunQuery();
    }
  };

  const onLegendModeChanged = value => {
    switch (value.value) {
      case prometheus_types.pD.Auto:
        onChange(prometheus_types.pD.Auto);
        break;

      case prometheus_types.pD.Custom:
        onChange('{{label_name}}');
        setTimeout(() => {
          var _inputRef$current, _inputRef$current2;

          (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
          (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.setSelectionRange(2, 12, 'forward');
        }, 10);
        break;

      case prometheus_types.pD.Verbose:
        onChange('');
        break;
    }

    onRunQuery();
  };

  return (0,jsx_runtime.jsx)(experimental.EditorField, {
    label: "Legend",
    tooltip: "Series name override or template. Ex. {{hostname}} will be replaced with label value for hostname.",
    children: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [mode === prometheus_types.pD.Custom && (0,jsx_runtime.jsx)(AutoSizeInput.H, {
        id: "legendFormat",
        minWidth: 22,
        placeholder: "auto",
        defaultValue: legendFormat,
        onCommitChange: onLegendFormatChanged,
        ref: inputRef
      }), mode !== prometheus_types.pD.Custom && (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        inputId: "legend.mode",
        isSearchable: false,
        placeholder: "Select legend mode",
        options: legendModeOptions,
        width: 22,
        onChange: onLegendModeChanged,
        value: legendModeOptions.find(x => x.value === mode)
      })]
    })
  });
});
PromQueryLegendEditor.displayName = 'PromQueryLegendEditor';

function getLegendMode(legendFormat) {
  if (legendFormat === prometheus_types.pD.Auto) {
    return prometheus_types.pD.Auto;
  } 


  if (legendFormat == null || legendFormat === '') {
    return prometheus_types.pD.Verbose;
  }

  return prometheus_types.pD.Custom;
}

function getLegendModeLabel(legendFormat) {
  const mode = getLegendMode(legendFormat);

  if (mode !== prometheus_types.pD.Custom) {
    var _legendModeOptions$fi;

    return (_legendModeOptions$fi = legendModeOptions.find(x => x.value === mode)) === null || _legendModeOptions$fi === void 0 ? void 0 : _legendModeOptions$fi.label;
  }

  return legendFormat;
}
;
var _code, _code2;













const PromQueryBuilderOptions = react.memo(_ref => {
  let {
    query,
    app,
    onChange,
    onRunQuery
  } = _ref;

  const onChangeFormat = value => {
    onChange(Object.assign({}, query, {
      format: value.value
    }));
    onRunQuery();
  };

  const onChangeStep = evt => {
    onChange(Object.assign({}, query, {
      interval: evt.currentTarget.value
    }));
    onRunQuery();
  };

  const queryTypeOptions = getQueryTypeOptions(app === src.CoreApp.Explore);
  const onQueryTypeChange = getQueryTypeChangeHandler(query, onChange);

  const onExemplarChange = event => {
    const isEnabled = event.currentTarget.checked;
    onChange(Object.assign({}, query, {
      exemplar: isEnabled
    }));
    onRunQuery();
  };

  const onIntervalFactorChange = value => {
    onChange(Object.assign({}, query, {
      intervalFactor: value.value
    }));
    onRunQuery();
  };

  const formatOption = FORMAT_OPTIONS.find(option => option.value === query.format) || FORMAT_OPTIONS[0];
  const queryTypeValue = getQueryTypeValue(query);
  const queryTypeLabel = queryTypeOptions.find(x => x.value === queryTypeValue).label;
  return (0,jsx_runtime.jsx)(experimental.EditorRow, {
    children: (0,jsx_runtime.jsxs)(QueryOptionGroup.d, {
      title: "Options",
      collapsedInfo: getCollapsedInfo(query, formatOption.label, queryTypeLabel),
      children: [(0,jsx_runtime.jsx)(PromQueryLegendEditor, {
        legendFormat: query.legendFormat,
        onChange: legendFormat => onChange(Object.assign({}, query, {
          legendFormat
        })),
        onRunQuery: onRunQuery
      }), (0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Min step",
        tooltip: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: ["An additional lower limit for the step parameter of the Prometheus query and for the", ' ', _code || (_code = (0,jsx_runtime.jsx)("code", {
            children: "$__interval"
          })), " and ", _code2 || (_code2 = (0,jsx_runtime.jsx)("code", {
            children: "$__rate_interval"
          })), " variables."]
        }),
        children: (0,jsx_runtime.jsx)(AutoSizeInput.H, {
          type: "text",
          "aria-label": "Set lower limit for the step parameter",
          placeholder: 'auto',
          minWidth: 10,
          onCommitChange: onChangeStep,
          defaultValue: query.interval
        })
      }), (0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Format",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          value: formatOption,
          allowCustomValue: true,
          onChange: onChangeFormat,
          options: FORMAT_OPTIONS
        })
      }), (0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Type",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
          options: queryTypeOptions,
          value: queryTypeValue,
          onChange: onQueryTypeChange
        })
      }), shouldShowExemplarSwitch(query, app) && (0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Exemplars",
        children: (0,jsx_runtime.jsx)(experimental.EditorSwitch, {
          value: query.exemplar,
          onChange: onExemplarChange
        })
      }), query.intervalFactor && query.intervalFactor > 1 && (0,jsx_runtime.jsx)(experimental.EditorField, {
        label: "Resolution",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
          "aria-label": "Select resolution",
          isSearchable: false,
          options: INTERVAL_FACTOR_OPTIONS,
          onChange: onIntervalFactorChange,
          value: INTERVAL_FACTOR_OPTIONS.find(option => option.value === query.intervalFactor)
        })
      })]
    })
  });
});

function shouldShowExemplarSwitch(query, app) {
  if (app === src.CoreApp.UnifiedAlerting || !query.range) {
    return false;
  }

  return true;
}

function getQueryTypeValue(query) {
  return query.range && query.instant ? 'both' : query.instant ? 'instant' : 'range';
}

function getCollapsedInfo(query, formatOption, queryType) {
  const items = [];
  items.push(`Legend: ${getLegendModeLabel(query.legendFormat)}`);
  items.push(`Format: ${formatOption}`);

  if (query.interval) {
    items.push(`Step ${query.interval}`);
  }

  items.push(`Type: ${queryType}`);

  if (query.exemplar) {
    items.push(`Exemplars: true`);
  }

  return items;
}

PromQueryBuilderOptions.displayName = 'PromQueryBuilderOptions';
;






function PromQueryCodeEditor(_ref) {
  let {
    query,
    datasource,
    range,
    onRunQuery,
    onChange,
    data,
    app
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(PromQueryCodeEditor_getStyles);
  return (0,jsx_runtime.jsx)("div", {
    className: styles.wrapper,
    children: (0,jsx_runtime.jsx)(components_PromQueryField, {
      datasource: datasource,
      query: query,
      range: range,
      onRunQuery: onRunQuery,
      onChange: onChange,
      history: [],
      data: data,
      "data-testid": PromQueryEditor_testIds.editor,
      app: app
    })
  });
}

const PromQueryCodeEditor_getStyles = theme => {
  return {
    wrapper: emotion_css_esm.css`
      .gf-form {
        margin-bottom: 0;
      }
    `
  };
};
;
var _FeedbackLink, PromQueryEditorSelector_FlexItem, _Space;




















const PromQueryEditorSelector = react.memo(props => {
  const {
    onChange,
    onRunQuery,
    data,
    app
  } = props;
  const [parseModalOpen, setParseModalOpen] = (0,react.useState)(false);
  const [dataIsStale, setDataIsStale] = (0,react.useState)(false);
  const query = getQueryWithDefaults(props.query, app);
  const editorMode = query.editorMode;
  const onEditorModeChange = (0,react.useCallback)(newMetricEditorMode => {
    var _query$editorMode;

    (0,grafana_runtime_src.reportInteraction)('user_grafana_prometheus_editor_mode_clicked', {
      newEditor: newMetricEditorMode,
      previousEditor: (_query$editorMode = query.editorMode) !== null && _query$editorMode !== void 0 ? _query$editorMode : '',
      newQuery: !query.expr,
      app: app !== null && app !== void 0 ? app : ''
    });

    if (newMetricEditorMode === types.c.Builder) {
      const result = (0,parsing._)(query.expr || ''); 

      if (result.errors.length) {
        setParseModalOpen(true);
        return;
      }
    }

    changeEditorMode(query, newMetricEditorMode, onChange);
  }, [onChange, query, app]);
  (0,react.useEffect)(() => {
    setDataIsStale(false);
  }, [data]);

  const onQueryPreviewChange = event => {
    const isEnabled = event.currentTarget.checked;
    onChange(Object.assign({}, query, {
      rawQuery: isEnabled
    }));
  };

  const onChangeInternal = query => {
    setDataIsStale(true);
    onChange(query);
  };

  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.ConfirmModal, {
      isOpen: parseModalOpen,
      title: "Query parsing",
      body: "There were errors while trying to parse the query. Continuing to visual builder may loose some parts of the query.",
      confirmText: "Continue",
      onConfirm: () => {
        changeEditorMode(query, types.c.Builder, onChange);
        setParseModalOpen(false);
      },
      onDismiss: () => setParseModalOpen(false)
    }), (0,jsx_runtime.jsxs)(experimental.EditorHeader, {
      children: [editorMode === types.c.Builder && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [(0,jsx_runtime.jsx)(experimental.InlineSelect, {
          value: null,
          placeholder: "Query patterns",
          allowCustomValue: true,
          onChange: _ref => {
            let {
              value
            } = _ref;
            const result = (0,parsing._)(query.expr || '');
            result.query.operations = value === null || value === void 0 ? void 0 : value.operations;
            onChange(Object.assign({}, query, {
              expr: PromQueryModeller.Z.renderQuery(result.query)
            }));
          },
          options: PromQueryModeller.Z.getQueryPatterns().map(x => ({
            label: x.name,
            value: x
          }))
        }), (0,jsx_runtime.jsx)(QueryHeaderSwitch.n, {
          label: "Raw query",
          value: query.rawQuery,
          onChange: onQueryPreviewChange
        })]
      }), editorMode === types.c.Builder && (_FeedbackLink || (_FeedbackLink = (0,jsx_runtime.jsx)(FeedbackLink, {
        feedbackUrl: "https://github.com/grafana/grafana/discussions/47693"
      }))), PromQueryEditorSelector_FlexItem || (PromQueryEditorSelector_FlexItem = (0,jsx_runtime.jsx)(experimental.FlexItem, {
        grow: 1
      })), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: dataIsStale ? 'primary' : 'secondary',
        size: "sm",
        onClick: onRunQuery,
        icon: (data === null || data === void 0 ? void 0 : data.state) === src.LoadingState.Loading ? 'fa fa-spinner' : undefined,
        disabled: (data === null || data === void 0 ? void 0 : data.state) === src.LoadingState.Loading,
        children: "Run query"
      }), (0,jsx_runtime.jsx)(QueryEditorModeToggle.k, {
        mode: editorMode,
        onChange: onEditorModeChange
      })]
    }), _Space || (_Space = (0,jsx_runtime.jsx)(experimental.Space, {
      v: 0.5
    })), (0,jsx_runtime.jsxs)(experimental.EditorRows, {
      children: [editorMode === types.c.Code && (0,jsx_runtime.jsx)(PromQueryCodeEditor, Object.assign({}, props)), editorMode === types.c.Builder && (0,jsx_runtime.jsx)(PromQueryBuilderContainer, {
        query: query,
        datasource: props.datasource,
        onChange: onChangeInternal,
        onRunQuery: props.onRunQuery,
        data: data
      }), editorMode === types.c.Explain && (0,jsx_runtime.jsx)(PromQueryBuilderExplained, {
        query: query.expr
      }), editorMode !== types.c.Explain && (0,jsx_runtime.jsx)(PromQueryBuilderOptions, {
        query: query,
        app: props.app,
        onChange: onChange,
        onRunQuery: onRunQuery
      })]
    })]
  });
});
PromQueryEditorSelector.displayName = 'PromQueryEditorSelector';
;





const PromExploreQueryEditor = (0,react.memo)(props => {
  const {
    range,
    query,
    data,
    datasource,
    history,
    onChange,
    onRunQuery
  } = props; 

  (0,react.useEffect)(() => {
    if (query.expr === undefined) {
      onChange(Object.assign({}, query, {
        expr: ''
      }));
    }

    if (query.exemplar === undefined) {
      onChange(Object.assign({}, query, {
        exemplar: true
      }));
    } 


    if (!query.instant && !query.range && !query.expr) {
      onChange(Object.assign({}, query, {
        instant: true,
        range: true
      }));
    }
  }, [onChange, query]);
  return (0,jsx_runtime.jsx)(components_PromQueryField, {
    app: src.CoreApp.Explore,
    datasource: datasource,
    query: query,
    range: range,
    onRunQuery: onRunQuery,
    onChange: onChange,
    onBlur: () => {},
    history: history,
    data: data,
    "data-testid": PromExploreQueryEditor_testIds.editor,
    ExtraFieldElement: (0,jsx_runtime.jsx)(PromExploreExtraField, {
      query: query,
      onChange: onChange,
      datasource: datasource,
      onRunQuery: onRunQuery
    })
  });
});
PromExploreQueryEditor.displayName = 'PromExploreQueryEditor';
const PromExploreQueryEditor_testIds = {
  editor: 'prom-editor-explore'
};
;



function PromQueryEditorForAlerting(props) {
  const {
    datasource,
    query,
    range,
    data,
    onChange,
    onRunQuery
  } = props;
  return (0,jsx_runtime.jsx)(components_PromQueryField, {
    datasource: datasource,
    query: query,
    onRunQuery: onRunQuery,
    onChange: onChange,
    history: [],
    range: range,
    data: data,
    "data-testid": PromQueryEditorForAlerting_testIds.editor
  });
}
const PromQueryEditorForAlerting_testIds = {
  editor: 'prom-editor-cloud-alerting'
};
;








function PromQueryEditorByApp(props) {
  const {
    app
  } = props;

  switch (app) {
    case src.CoreApp.CloudAlerting:
      return (0,jsx_runtime.jsx)(PromQueryEditorForAlerting, Object.assign({}, props));

    case src.CoreApp.Explore:
      if (grafana_runtime_src.config.featureToggles.promQueryBuilder) {
        return (0,jsx_runtime.jsx)(PromQueryEditorSelector, Object.assign({}, props));
      }

      return (0,jsx_runtime.jsx)(PromExploreQueryEditor, Object.assign({}, props));

    default:
      if (grafana_runtime_src.config.featureToggles.promQueryBuilder) {
        return (0,jsx_runtime.jsx)(PromQueryEditorSelector, Object.assign({}, props));
      }

      return (0,jsx_runtime.jsx)(PromQueryEditor, Object.assign({}, props));
  }
}
 const components_PromQueryEditorByApp = ((0,react.memo)(PromQueryEditorByApp));
var config = __webpack_require__("./public/app/core/config.ts");
var alertmanager = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
;
let AzureCloud;

(function (AzureCloud) {
  AzureCloud["Public"] = "AzureCloud";
  AzureCloud["China"] = "AzureChinaCloud";
  AzureCloud["USGovernment"] = "AzureUSGovernment";
  AzureCloud["Germany"] = "AzureGermanCloud";
  AzureCloud["None"] = "";
})(AzureCloud || (AzureCloud = {}));

const KnownAzureClouds = [{
  value: AzureCloud.Public,
  label: 'Azure'
}, {
  value: AzureCloud.China,
  label: 'Azure China'
}, {
  value: AzureCloud.USGovernment,
  label: 'Azure US Government'
}, {
  value: AzureCloud.Germany,
  label: 'Azure Germany'
}];
function isCredentialsComplete(credentials) {
  switch (credentials.authType) {
    case 'msi':
      return true;

    case 'clientsecret':
      return !!(credentials.azureCloud && credentials.tenantId && credentials.clientId && credentials.clientSecret);
  }
}
;


const concealed = Symbol('Concealed client secret');

function getDefaultAzureCloud() {
  return grafana_runtime_src.config.azure.cloud || AzureCloud.Public;
}

function getSecret(options) {
  if (options.secureJsonFields.azureClientSecret) {
    return concealed;
  } else {
    var _options$secureJsonDa;

    const secret = (_options$secureJsonDa = options.secureJsonData) === null || _options$secureJsonDa === void 0 ? void 0 : _options$secureJsonDa.azureClientSecret;
    return typeof secret === 'string' && secret.length > 0 ? secret : undefined;
  }
}

function hasCredentials(options) {
  return !!options.jsonData.azureCredentials;
}
function getDefaultCredentials() {
  if (grafana_runtime_src.config.azure.managedIdentityEnabled) {
    return {
      authType: 'msi'
    };
  } else {
    return {
      authType: 'clientsecret',
      azureCloud: getDefaultAzureCloud()
    };
  }
}
function getCredentials(options) {
  const credentials = options.jsonData.azureCredentials; 

  if (!credentials) {
    return getDefaultCredentials();
  }

  switch (credentials.authType) {
    case 'msi':
      if (grafana_runtime_src.config.azure.managedIdentityEnabled) {
        return {
          authType: 'msi'
        };
      } else {
        return {
          authType: 'clientsecret',
          azureCloud: getDefaultAzureCloud()
        };
      }

    case 'clientsecret':
      return {
        authType: 'clientsecret',
        azureCloud: credentials.azureCloud || getDefaultAzureCloud(),
        tenantId: credentials.tenantId,
        clientId: credentials.clientId,
        clientSecret: getSecret(options)
      };
  }
}
function updateCredentials(options, credentials) {
  switch (credentials.authType) {
    case 'msi':
      if (!grafana_runtime_src.config.azure.managedIdentityEnabled) {
        throw new Error('Managed Identity authentication is not enabled in Grafana config.');
      }

      options = Object.assign({}, options, {
        jsonData: Object.assign({}, options.jsonData, {
          azureCredentials: {
            authType: 'msi'
          }
        })
      });
      return options;

    case 'clientsecret':
      options = Object.assign({}, options, {
        jsonData: Object.assign({}, options.jsonData, {
          azureCredentials: {
            authType: 'clientsecret',
            azureCloud: credentials.azureCloud || getDefaultAzureCloud(),
            tenantId: credentials.tenantId,
            clientId: credentials.clientId
          }
        }),
        secureJsonData: Object.assign({}, options.secureJsonData, {
          azureClientSecret: typeof credentials.clientSecret === 'string' && credentials.clientSecret.length > 0 ? credentials.clientSecret : undefined
        }),
        secureJsonFields: Object.assign({}, options.secureJsonFields, {
          azureClientSecret: typeof credentials.clientSecret === 'symbol'
        })
      });
      return options;
  }
}
function setDefaultCredentials(options) {
  return {
    jsonData: Object.assign({}, options.jsonData, {
      azureCredentials: getDefaultCredentials()
    })
  };
}
function resetCredentials(options) {
  return {
    jsonData: Object.assign({}, options.jsonData, {
      azureAuth: undefined,
      azureCredentials: undefined,
      azureEndpointResourceId: undefined
    })
  };
}
var components = __webpack_require__("./packages/grafana-ui/src/components/index.ts");
var Input = __webpack_require__("./packages/grafana-ui/src/components/Forms/Legacy/Input/Input.tsx");
var Select = __webpack_require__("./packages/grafana-ui/src/components/Forms/Legacy/Select/Select.tsx");
;
var AzureCredentialsForm_InlineFormLabel, AzureCredentialsForm_InlineFormLabel2, _InlineFormLabel3, _InlineFormLabel4, AzureCredentialsForm_div, _InlineFormLabel5, _InlineFormLabel6;









const authTypeOptions = [{
  value: 'msi',
  label: 'Managed Identity'
}, {
  value: 'clientsecret',
  label: 'App Registration'
}];
const AzureCredentialsForm = props => {
  const {
    credentials,
    azureCloudOptions,
    onCredentialsChange,
    getSubscriptions
  } = props;
  const hasRequiredFields = isCredentialsComplete(credentials);
  const [subscriptions, setSubscriptions] = (0,react.useState)([]);
  const [loadSubscriptionsClicked, onLoadSubscriptions] = (0,react.useReducer)(val => val + 1, 0);
  (0,react.useEffect)(() => {
    if (!getSubscriptions || !hasRequiredFields) {
      updateSubscriptions([]);
      return;
    }

    let canceled = false;
    getSubscriptions().then(result => {
      if (!canceled) {
        updateSubscriptions(result, loadSubscriptionsClicked);
      }
    });
    return () => {
      canceled = true;
    }; 
  }, [loadSubscriptionsClicked]);

  const updateSubscriptions = function (received) {
    let autoSelect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setSubscriptions(received);

    if (getSubscriptions) {
      if (autoSelect && !credentials.defaultSubscriptionId && received.length > 0) {
        onSubscriptionChange(received[0]);
      } else if (credentials.defaultSubscriptionId) {
        const found = received.find(opt => opt.value === credentials.defaultSubscriptionId);

        if (!found) {
          onSubscriptionChange(undefined);
        }
      }
    }
  };

  const onAuthTypeChange = selected => {
    if (onCredentialsChange) {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        authType: selected.value || 'msi',
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onAzureCloudChange = selected => {
    if (onCredentialsChange && credentials.authType === 'clientsecret') {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        azureCloud: selected.value,
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onTenantIdChange = event => {
    if (onCredentialsChange && credentials.authType === 'clientsecret') {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        tenantId: event.target.value,
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onClientIdChange = event => {
    if (onCredentialsChange && credentials.authType === 'clientsecret') {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        clientId: event.target.value,
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onClientSecretChange = event => {
    if (onCredentialsChange && credentials.authType === 'clientsecret') {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        clientSecret: event.target.value,
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onClientSecretReset = () => {
    if (onCredentialsChange && credentials.authType === 'clientsecret') {
      setSubscriptions([]);
      const updated = Object.assign({}, credentials, {
        clientSecret: '',
        defaultSubscriptionId: undefined
      });
      onCredentialsChange(updated);
    }
  };

  const onSubscriptionChange = selected => {
    if (onCredentialsChange) {
      const updated = Object.assign({}, credentials, {
        defaultSubscriptionId: selected === null || selected === void 0 ? void 0 : selected.value
      });
      onCredentialsChange(updated);
    }
  };

  return (0,jsx_runtime.jsxs)("div", {
    className: "gf-form-group",
    children: [props.managedIdentityEnabled && (0,jsx_runtime.jsx)("div", {
      className: "gf-form-inline",
      children: (0,jsx_runtime.jsxs)("div", {
        className: "gf-form",
        children: [AzureCredentialsForm_InlineFormLabel || (AzureCredentialsForm_InlineFormLabel = (0,jsx_runtime.jsx)(components.cJ0, {
          className: "width-12",
          tooltip: "Choose the type of authentication to Azure services",
          children: "Authentication"
        })), (0,jsx_runtime.jsx)(Select.Ph, {
          className: "width-15",
          value: authTypeOptions.find(opt => opt.value === credentials.authType),
          options: authTypeOptions,
          onChange: onAuthTypeChange
        })]
      })
    }), credentials.authType === 'clientsecret' && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [azureCloudOptions && (0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: (0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [AzureCredentialsForm_InlineFormLabel2 || (AzureCredentialsForm_InlineFormLabel2 = (0,jsx_runtime.jsx)(components.cJ0, {
            className: "width-12",
            tooltip: "Choose an Azure Cloud",
            children: "Azure Cloud"
          })), (0,jsx_runtime.jsx)(Select.Ph, {
            className: "width-15",
            value: azureCloudOptions.find(opt => opt.value === credentials.azureCloud),
            options: azureCloudOptions,
            onChange: onAzureCloudChange
          })]
        })
      }), (0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: (0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel3 || (_InlineFormLabel3 = (0,jsx_runtime.jsx)(components.cJ0, {
            className: "width-12",
            children: "Directory (tenant) ID"
          })), (0,jsx_runtime.jsx)("div", {
            className: "width-15",
            children: (0,jsx_runtime.jsx)(Input.I, {
              className: "width-30",
              placeholder: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
              value: credentials.tenantId || '',
              onChange: onTenantIdChange
            })
          })]
        })
      }), (0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: (0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel4 || (_InlineFormLabel4 = (0,jsx_runtime.jsx)(components.cJ0, {
            className: "width-12",
            children: "Application (client) ID"
          })), (0,jsx_runtime.jsx)("div", {
            className: "width-15",
            children: (0,jsx_runtime.jsx)(Input.I, {
              className: "width-30",
              placeholder: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
              value: credentials.clientId || '',
              onChange: onClientIdChange
            })
          })]
        })
      }), typeof credentials.clientSecret === 'symbol' ? (0,jsx_runtime.jsxs)("div", {
        className: "gf-form-inline",
        children: [AzureCredentialsForm_div || (AzureCredentialsForm_div = (0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [(0,jsx_runtime.jsx)(components.cJ0, {
            className: "width-12",
            children: "Client Secret"
          }), (0,jsx_runtime.jsx)(Input.I, {
            className: "width-25",
            placeholder: "configured",
            disabled: true
          })]
        })), (0,jsx_runtime.jsx)("div", {
          className: "gf-form",
          children: (0,jsx_runtime.jsx)("div", {
            className: "max-width-30 gf-form-inline",
            children: (0,jsx_runtime.jsx)(components.zxk, {
              variant: "secondary",
              type: "button",
              onClick: onClientSecretReset,
              children: "reset"
            })
          })
        })]
      }) : (0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: (0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel5 || (_InlineFormLabel5 = (0,jsx_runtime.jsx)(components.cJ0, {
            className: "width-12",
            children: "Client Secret"
          })), (0,jsx_runtime.jsx)("div", {
            className: "width-15",
            children: (0,jsx_runtime.jsx)(Input.I, {
              className: "width-30",
              placeholder: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
              value: credentials.clientSecret || '',
              onChange: onClientSecretChange
            })
          })]
        })
      })]
    }), getSubscriptions && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: (0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [_InlineFormLabel6 || (_InlineFormLabel6 = (0,jsx_runtime.jsx)(components.cJ0, {
            className: "width-12",
            children: "Default Subscription"
          })), (0,jsx_runtime.jsx)("div", {
            className: "width-25",
            children: (0,jsx_runtime.jsx)(Select.Ph, {
              value: credentials.defaultSubscriptionId ? subscriptions.find(opt => opt.value === credentials.defaultSubscriptionId) : undefined,
              options: subscriptions,
              onChange: onSubscriptionChange
            })
          })]
        })
      }), (0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: (0,jsx_runtime.jsx)("div", {
          className: "gf-form",
          children: (0,jsx_runtime.jsx)("div", {
            className: "max-width-30 gf-form-inline",
            children: (0,jsx_runtime.jsx)(components.zxk, {
              variant: "secondary",
              size: "sm",
              type: "button",
              onClick: onLoadSubscriptions,
              disabled: !hasRequiredFields,
              children: "Load Subscriptions"
            })
          })
        })
      })]
    })]
  });
};
 const configuration_AzureCredentialsForm = (( null && (AzureCredentialsForm)));
;
var AzureAuthSettings_h, _h2, AzureAuthSettings_InlineFormLabel;










const AzureAuthSettings = props => {
  const {
    dataSourceConfig,
    onChange
  } = props;
  const credentials = (0,react.useMemo)(() => getCredentials(dataSourceConfig), [dataSourceConfig]);

  const onCredentialsChange = credentials => {
    onChange(updateCredentials(dataSourceConfig, credentials));
  };

  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [AzureAuthSettings_h || (AzureAuthSettings_h = (0,jsx_runtime.jsx)("h6", {
      children: "Azure Authentication"
    })), (0,jsx_runtime.jsx)(AzureCredentialsForm, {
      managedIdentityEnabled: grafana_runtime_src.config.azure.managedIdentityEnabled,
      credentials: credentials,
      azureCloudOptions: KnownAzureClouds,
      onCredentialsChange: onCredentialsChange
    }), _h2 || (_h2 = (0,jsx_runtime.jsx)("h6", {
      children: "Azure Configuration"
    })), (0,jsx_runtime.jsx)("div", {
      className: "gf-form-group",
      children: (0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: (0,jsx_runtime.jsxs)("div", {
          className: "gf-form",
          children: [AzureAuthSettings_InlineFormLabel || (AzureAuthSettings_InlineFormLabel = (0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
            className: "width-12",
            children: "AAD resource ID"
          })), (0,jsx_runtime.jsx)("div", {
            className: "width-15",
            children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
              className: "width-30",
              value: dataSourceConfig.jsonData.azureEndpointResourceId || '',
              onChange: event => onChange(Object.assign({}, dataSourceConfig, {
                jsonData: Object.assign({}, dataSourceConfig.jsonData, {
                  azureEndpointResourceId: event.currentTarget.value
                })
              }))
            })
          })]
        })
      })
    })]
  });
};
 const configuration_AzureAuthSettings = (( null && (AzureAuthSettings)));
var grafana_e2e_selectors_src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
;








function ExemplarSetting(_ref) {
  let {
    value,
    onChange,
    onDelete
  } = _ref;
  const [isInternalLink, setIsInternalLink] = (0,react.useState)(Boolean(value.datasourceUid));
  return (0,jsx_runtime.jsxs)("div", {
    className: "gf-form-group",
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Internal link",
      labelWidth: 24,
      children: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
          value: isInternalLink,
          "aria-label": grafana_e2e_selectors_src.wl.components.DataSource.Prometheus.configPage.internalLinkSwitch,
          onChange: ev => setIsInternalLink(ev.currentTarget.checked)
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "destructive",
          title: "Remove link",
          icon: "times",
          onClick: event => {
            event.preventDefault();
            onDelete();
          },
          className: emotion_css_esm.css`
              margin-left: 8px;
            `
        })]
      })
    }), isInternalLink ? (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Data source",
      labelWidth: 24,
      tooltip: "The data source the exemplar is going to navigate to.",
      children: (0,jsx_runtime.jsx)(grafana_runtime_src.DataSourcePicker, {
        tracing: true,
        current: value.datasourceUid,
        noDefault: true,
        width: 40,
        onChange: ds => onChange(Object.assign({}, value, {
          datasourceUid: ds.uid,
          url: undefined
        }))
      })
    }) : (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "URL",
      labelWidth: 24,
      tooltip: "The URL of the trace backend the user would go to see its trace.",
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        placeholder: "https://example.com/${__value.raw}",
        spellCheck: false,
        width: 40,
        value: value.url,
        onChange: event => onChange(Object.assign({}, value, {
          datasourceUid: undefined,
          url: event.currentTarget.value
        }))
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "URL Label",
      labelWidth: 24,
      tooltip: "Use to override the button label on the exemplar traceID field.",
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        placeholder: "Go to example.com",
        spellCheck: false,
        width: 40,
        value: value.urlDisplayLabel,
        onChange: event => onChange(Object.assign({}, value, {
          urlDisplayLabel: event.currentTarget.value
        }))
      })
    }), (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
      label: "Label name",
      labelWidth: 24,
      tooltip: "The name of the field in the labels object that should be used to get the traceID.",
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        placeholder: "traceID",
        spellCheck: false,
        width: 40,
        value: value.name,
        onChange: event => onChange(Object.assign({}, value, {
          name: event.currentTarget.value
        }))
      })
    })]
  });
}
;
var ExemplarsSettings_h;









function ExemplarsSettings(_ref) {
  let {
    options,
    onChange
  } = _ref;
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [ExemplarsSettings_h || (ExemplarsSettings_h = (0,jsx_runtime.jsx)("h3", {
      className: "page-heading",
      children: "Exemplars"
    })), options && options.map((option, index) => {
      return (0,jsx_runtime.jsx)(ExemplarSetting, {
        value: option,
        onChange: newField => {
          const newOptions = [...options];
          newOptions.splice(index, 1, newField);
          onChange(newOptions);
        },
        onDelete: () => {
          const newOptions = [...options];
          newOptions.splice(index, 1);
          onChange(newOptions);
        }
      }, index);
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      variant: "secondary",
      "aria-label": grafana_e2e_selectors_src.wl.components.DataSource.Prometheus.configPage.exemplarsAddButton,
      className: emotion_css_esm.css`
          margin-bottom: 10px;
        `,
      icon: "plus",
      onClick: event => {
        event.preventDefault();
        const newOptions = [...(options || []), {
          name: 'traceID'
        }];
        onChange(newOptions);
      },
      children: "Add"
    })]
  });
}
;
var PromSettings_InlineFormLabel, PromSettings_h;








const {
  Select: PromSettings_Select,
  Input: PromSettings_Input,
  FormField
} = grafana_ui_src.LegacyForms;
const httpOptions = [{
  value: 'POST',
  label: 'POST'
}, {
  value: 'GET',
  label: 'GET'
}];
const PromSettings = props => {
  var _options$jsonData$dis;

  const {
    options,
    onOptionsChange
  } = props; 

  if (!options.jsonData.httpMethod) {
    options.jsonData.httpMethod = 'POST';
  }

  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)("div", {
      className: "gf-form-group",
      children: [(0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: (0,jsx_runtime.jsx)("div", {
          className: "gf-form",
          children: (0,jsx_runtime.jsx)(FormField, {
            label: "Scrape interval",
            labelWidth: 13,
            inputEl: (0,jsx_runtime.jsx)(PromSettings_Input, {
              className: "width-6",
              value: options.jsonData.timeInterval,
              spellCheck: false,
              placeholder: "15s",
              onChange: onChangeHandler('timeInterval', options, onOptionsChange),
              validationEvents: promSettingsValidationEvents
            }),
            tooltip: "Set this to the typical scrape and evaluation interval configured in Prometheus. Defaults to 15s."
          })
        })
      }), (0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: (0,jsx_runtime.jsx)("div", {
          className: "gf-form",
          children: (0,jsx_runtime.jsx)(FormField, {
            label: "Query timeout",
            labelWidth: 13,
            inputEl: (0,jsx_runtime.jsx)(PromSettings_Input, {
              className: "width-6",
              value: options.jsonData.queryTimeout,
              onChange: onChangeHandler('queryTimeout', options, onOptionsChange),
              spellCheck: false,
              placeholder: "60s",
              validationEvents: promSettingsValidationEvents
            }),
            tooltip: "Set the Prometheus query timeout."
          })
        })
      }), (0,jsx_runtime.jsxs)("div", {
        className: "gf-form",
        children: [PromSettings_InlineFormLabel || (PromSettings_InlineFormLabel = (0,jsx_runtime.jsx)(grafana_ui_src.InlineFormLabel, {
          width: 13,
          tooltip: "You can use either POST or GET HTTP method to query your Prometheus data source. POST is the recommended method as it allows bigger queries. Change this to GET if you have a Prometheus version older than 2.1 or if POST requests are restricted in your network.",
          children: "HTTP Method"
        })), (0,jsx_runtime.jsx)(PromSettings_Select, {
          "aria-label": "Select HTTP method",
          options: httpOptions,
          value: httpOptions.find(o => o.value === options.jsonData.httpMethod),
          onChange: onChangeHandler('httpMethod', options, onOptionsChange),
          width: 7
        })]
      })]
    }), PromSettings_h || (PromSettings_h = (0,jsx_runtime.jsx)("h3", {
      className: "page-heading",
      children: "Misc"
    })), (0,jsx_runtime.jsxs)("div", {
      className: "gf-form-group",
      children: [(0,jsx_runtime.jsx)("div", {
        className: "gf-form",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
          labelWidth: 28,
          label: "Disable metrics lookup",
          tooltip: "Checking this option will disable the metrics chooser and metric/label support in the query field's autocomplete. This helps if you have performance issues with bigger Prometheus instances.",
          children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
            value: (_options$jsonData$dis = options.jsonData.disableMetricsLookup) !== null && _options$jsonData$dis !== void 0 ? _options$jsonData$dis : false,
            onChange: (0,src.onUpdateDatasourceJsonDataOptionChecked)(props, 'disableMetricsLookup')
          })
        })
      }), (0,jsx_runtime.jsx)("div", {
        className: "gf-form-inline",
        children: (0,jsx_runtime.jsx)("div", {
          className: "gf-form max-width-30",
          children: (0,jsx_runtime.jsx)(FormField, {
            label: "Custom query parameters",
            labelWidth: 14,
            tooltip: "Add Custom parameters to all Prometheus or Thanos queries.",
            inputEl: (0,jsx_runtime.jsx)(PromSettings_Input, {
              className: "width-25",
              value: options.jsonData.customQueryParameters,
              onChange: onChangeHandler('customQueryParameters', options, onOptionsChange),
              spellCheck: false,
              placeholder: "Example: max_source_resolution=5m&timeout=10"
            })
          })
        })
      })]
    }), (0,jsx_runtime.jsx)(ExemplarsSettings, {
      options: options.jsonData.exemplarTraceIdDestinations,
      onChange: exemplarOptions => (0,src.updateDatasourcePluginJsonDataOption)({
        onOptionsChange,
        options
      }, 'exemplarTraceIdDestinations', exemplarOptions)
    })]
  });
};
const promSettingsValidationEvents = {
  [grafana_ui_src.EventsWithValidation.onBlur]: [(0,grafana_ui_src.regexValidation)(/^$|^\d+(ms|[Mwdhmsy])$/, 'Value is not valid, you can use number with time unit specifier: y, M, w, d, h, m, s')]
};
const getValueFromEventItem = eventItem => {
  if (!eventItem) {
    return '';
  }

  if (eventItem.hasOwnProperty('currentTarget')) {
    return eventItem.currentTarget.value;
  }

  return eventItem.value;
};

const onChangeHandler = (key, options, onOptionsChange) => eventItem => {
  onOptionsChange(Object.assign({}, options, {
    jsonData: Object.assign({}, options.jsonData, {
      [key]: getValueFromEventItem(eventItem)
    })
  }));
};
;
var _Alert;











const ConfigEditor = props => {
  var _config$featureToggle;

  const {
    options,
    onOptionsChange
  } = props;
  const alertmanagers = (0,alertmanager.Tc)();
  const azureAuthSettings = {
    azureAuthSupported: (_config$featureToggle = config.vc.featureToggles.prometheus_azure_auth) !== null && _config$featureToggle !== void 0 ? _config$featureToggle : false,
    getAzureAuthEnabled: config => hasCredentials(config),
    setAzureAuthEnabled: (config, enabled) => enabled ? setDefaultCredentials(config) : resetCredentials(config),
    azureSettingsUI: AzureAuthSettings
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [options.access === 'direct' && (_Alert || (_Alert = (0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      title: "Deprecation Notice",
      severity: "warning",
      children: "Browser access mode in the Prometheus datasource is deprecated and will be removed in a future release."
    }))), (0,jsx_runtime.jsx)(grafana_ui_src.DataSourceHttpSettings, {
      defaultUrl: "http://localhost:9090",
      dataSourceConfig: options,
      showAccessOptions: true,
      onChange: onOptionsChange,
      sigV4AuthToggleEnabled: config.vc.sigV4AuthEnabled,
      azureAuthSettings: azureAuthSettings
    }), (0,jsx_runtime.jsx)(grafana_ui_src.AlertingSettings, {
      alertmanagerDataSources: alertmanagers,
      options: options,
      onOptionsChange: onOptionsChange
    }), (0,jsx_runtime.jsx)(PromSettings, {
      options: options,
      onOptionsChange: onOptionsChange
    })]
  });
};
var datasource = __webpack_require__("./public/app/plugins/datasource/prometheus/datasource.tsx");
;
function module_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class PrometheusAnnotationsQueryCtrl {
  constructor() {
    module_defineProperty(this, "stepDefaultValuePlaceholder", datasource.cf);
  }

}

module_defineProperty(PrometheusAnnotationsQueryCtrl, "templateUrl", 'partials/annotations.editor.html');

const module_plugin = new src.DataSourcePlugin(datasource.vQ).setQueryEditor(components_PromQueryEditorByApp).setConfigEditor(ConfigEditor).setAnnotationQueryCtrl(PrometheusAnnotationsQueryCtrl).setQueryEditorHelp(components_PromCheatSheet);

 }),

 "./public/app/plugins/datasource/prometheus/promql.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Fe": () => ( promqlGrammar),
   "Os": () => ( LOGICAL_OPERATORS),
   "Ty": () => ( RATE_RANGES),
   "YO": () => ( PROM_KEYWORDS),
   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
   "fP": () => ( OPERATORS),
   "r8": () => ( FUNCTIONS)
 });
const RATE_RANGES = [{
  label: '$__interval',
  sortValue: '$__interval'
}, {
  label: '$__rate_interval',
  sortValue: '$__rate_interval'
}, {
  label: '$__range',
  sortValue: '$__range'
}, {
  label: '1m',
  sortValue: '00:01:00'
}, {
  label: '5m',
  sortValue: '00:05:00'
}, {
  label: '10m',
  sortValue: '00:10:00'
}, {
  label: '30m',
  sortValue: '00:30:00'
}, {
  label: '1h',
  sortValue: '01:00:00'
}, {
  label: '1d',
  sortValue: '24:00:00'
}];
const OPERATORS = ['by', 'group_left', 'group_right', 'ignoring', 'on', 'offset', 'without'];
const LOGICAL_OPERATORS = ['or', 'and', 'unless'];
const TRIGONOMETRIC_FUNCTIONS = [{
  label: 'acos',
  insertText: 'acos',
  detail: 'acos(v instant-vector)',
  documentation: 'calculates the arccosine of all elements in v'
}, {
  label: 'acosh',
  insertText: 'acosh',
  detail: 'acosh(v instant-vector)',
  documentation: 'calculates the inverse hyperbolic cosine of all elements in v'
}, {
  label: 'asin',
  insertText: 'asin',
  detail: 'asin(v instant-vector)',
  documentation: 'calculates the arcsine of all elements in v'
}, {
  label: 'asinh',
  insertText: 'asinh',
  detail: 'asinh(v instant-vector)',
  documentation: 'calculates the inverse hyperbolic sine of all elements in v'
}, {
  label: 'atan',
  insertText: 'atan',
  detail: 'atan(v instant-vector)',
  documentation: 'calculates the arctangent of all elements in v'
}, {
  label: 'atanh',
  insertText: 'atanh',
  detail: 'atanh(v instant-vector)',
  documentation: 'calculates the inverse hyperbolic tangent of all elements in v'
}, {
  label: 'cos',
  insertText: 'cos',
  detail: 'cos(v instant-vector)',
  documentation: 'calculates the cosine of all elements in v'
}, {
  label: 'cosh',
  insertText: 'cosh',
  detail: 'cosh(v instant-vector)',
  documentation: 'calculates the hyperbolic cosine of all elements in v'
}, {
  label: 'sin',
  insertText: 'sin',
  detail: 'sin(v instant-vector)',
  documentation: 'calculates the sine of all elements in v'
}, {
  label: 'sinh',
  insertText: 'sinh',
  detail: 'sinh(v instant-vector)',
  documentation: 'calculates the hyperbolic sine of all elements in v'
}, {
  label: 'tan',
  insertText: 'tan',
  detail: 'tan(v instant-vector)',
  documentation: 'calculates the tangent of all elements in v'
}, {
  label: 'tanh',
  insertText: 'tanh',
  detail: 'tanh(v instant-vector)',
  documentation: 'calculates the hyperbolic tangent of all elements in v'
}];
const AGGREGATION_OPERATORS = [{
  label: 'sum',
  insertText: 'sum',
  documentation: 'Calculate sum over dimensions'
}, {
  label: 'min',
  insertText: 'min',
  documentation: 'Select minimum over dimensions'
}, {
  label: 'max',
  insertText: 'max',
  documentation: 'Select maximum over dimensions'
}, {
  label: 'avg',
  insertText: 'avg',
  documentation: 'Calculate the average over dimensions'
}, {
  label: 'group',
  insertText: 'group',
  documentation: 'All values in the resulting vector are 1'
}, {
  label: 'stddev',
  insertText: 'stddev',
  documentation: 'Calculate population standard deviation over dimensions'
}, {
  label: 'stdvar',
  insertText: 'stdvar',
  documentation: 'Calculate population standard variance over dimensions'
}, {
  label: 'count',
  insertText: 'count',
  documentation: 'Count number of elements in the vector'
}, {
  label: 'count_values',
  insertText: 'count_values',
  documentation: 'Count number of elements with the same value'
}, {
  label: 'bottomk',
  insertText: 'bottomk',
  documentation: 'Smallest k elements by sample value'
}, {
  label: 'topk',
  insertText: 'topk',
  documentation: 'Largest k elements by sample value'
}, {
  label: 'quantile',
  insertText: 'quantile',
  documentation: 'Calculate φ-quantile (0 ≤ φ ≤ 1) over dimensions'
}];
const FUNCTIONS = [...AGGREGATION_OPERATORS, ...TRIGONOMETRIC_FUNCTIONS, {
  insertText: 'abs',
  label: 'abs',
  detail: 'abs(v instant-vector)',
  documentation: 'Returns the input vector with all sample values converted to their absolute value.'
}, {
  insertText: 'absent',
  label: 'absent',
  detail: 'absent(v instant-vector)',
  documentation: 'Returns an empty vector if the vector passed to it has any elements and a 1-element vector with the value 1 if the vector passed to it has no elements. This is useful for alerting on when no time series exist for a given metric name and label combination.'
}, {
  insertText: 'absent_over_time',
  label: 'absent_over_time',
  detail: 'absent(v range-vector)',
  documentation: 'Returns an empty vector if the range vector passed to it has any elements and a 1-element vector with the value 1 if the range vector passed to it has no elements.'
}, {
  insertText: 'ceil',
  label: 'ceil',
  detail: 'ceil(v instant-vector)',
  documentation: 'Rounds the sample values of all elements in `v` up to the nearest integer.'
}, {
  insertText: 'changes',
  label: 'changes',
  detail: 'changes(v range-vector)',
  documentation: 'For each input time series, `changes(v range-vector)` returns the number of times its value has changed within the provided time range as an instant vector.'
}, {
  insertText: 'clamp',
  label: 'clamp',
  detail: 'clamp(v instant-vector, min scalar, max scalar)',
  documentation: 'Clamps the sample values of all elements in `v` to have a lower limit of `min` and an upper limit of `max`.'
}, {
  insertText: 'clamp_max',
  label: 'clamp_max',
  detail: 'clamp_max(v instant-vector, max scalar)',
  documentation: 'Clamps the sample values of all elements in `v` to have an upper limit of `max`.'
}, {
  insertText: 'clamp_min',
  label: 'clamp_min',
  detail: 'clamp_min(v instant-vector, min scalar)',
  documentation: 'Clamps the sample values of all elements in `v` to have a lower limit of `min`.'
}, {
  insertText: 'count_scalar',
  label: 'count_scalar',
  detail: 'count_scalar(v instant-vector)',
  documentation: 'Returns the number of elements in a time series vector as a scalar. This is in contrast to the `count()` aggregation operator, which always returns a vector (an empty one if the input vector is empty) and allows grouping by labels via a `by` clause.'
}, {
  insertText: 'deg',
  label: 'deg',
  detail: 'deg(v instant-vector)',
  documentation: 'Converts radians to degrees for all elements in v'
}, {
  insertText: 'day_of_month',
  label: 'day_of_month',
  detail: 'day_of_month(v=vector(time()) instant-vector)',
  documentation: 'Returns the day of the month for each of the given times in UTC. Returned values are from 1 to 31.'
}, {
  insertText: 'day_of_week',
  label: 'day_of_week',
  detail: 'day_of_week(v=vector(time()) instant-vector)',
  documentation: 'Returns the day of the week for each of the given times in UTC. Returned values are from 0 to 6, where 0 means Sunday etc.'
}, {
  insertText: 'days_in_month',
  label: 'days_in_month',
  detail: 'days_in_month(v=vector(time()) instant-vector)',
  documentation: 'Returns number of days in the month for each of the given times in UTC. Returned values are from 28 to 31.'
}, {
  insertText: 'delta',
  label: 'delta',
  detail: 'delta(v range-vector)',
  documentation: 'Calculates the difference between the first and last value of each time series element in a range vector `v`, returning an instant vector with the given deltas and equivalent labels. The delta is extrapolated to cover the full time range as specified in the range vector selector, so that it is possible to get a non-integer result even if the sample values are all integers.'
}, {
  insertText: 'deriv',
  label: 'deriv',
  detail: 'deriv(v range-vector)',
  documentation: 'Calculates the per-second derivative of the time series in a range vector `v`, using simple linear regression.'
}, {
  insertText: 'drop_common_labels',
  label: 'drop_common_labels',
  detail: 'drop_common_labels(instant-vector)',
  documentation: 'Drops all labels that have the same name and value across all series in the input vector.'
}, {
  insertText: 'exp',
  label: 'exp',
  detail: 'exp(v instant-vector)',
  documentation: 'Calculates the exponential function for all elements in `v`.\nSpecial cases are:\n* `Exp(+Inf) = +Inf` \n* `Exp(NaN) = NaN`'
}, {
  insertText: 'floor',
  label: 'floor',
  detail: 'floor(v instant-vector)',
  documentation: 'Rounds the sample values of all elements in `v` down to the nearest integer.'
}, {
  insertText: 'histogram_quantile',
  label: 'histogram_quantile',
  detail: 'histogram_quantile(φ float, b instant-vector)',
  documentation: 'Calculates the φ-quantile (0 ≤ φ ≤ 1) from the buckets `b` of a histogram. The samples in `b` are the counts of observations in each bucket. Each sample must have a label `le` where the label value denotes the inclusive upper bound of the bucket. (Samples without such a label are silently ignored.) The histogram metric type automatically provides time series with the `_bucket` suffix and the appropriate labels.'
}, {
  insertText: 'holt_winters',
  label: 'holt_winters',
  detail: 'holt_winters(v range-vector, sf scalar, tf scalar)',
  documentation: 'Produces a smoothed value for time series based on the range in `v`. The lower the smoothing factor `sf`, the more importance is given to old data. The higher the trend factor `tf`, the more trends in the data is considered. Both `sf` and `tf` must be between 0 and 1.'
}, {
  insertText: 'hour',
  label: 'hour',
  detail: 'hour(v=vector(time()) instant-vector)',
  documentation: 'Returns the hour of the day for each of the given times in UTC. Returned values are from 0 to 23.'
}, {
  insertText: 'idelta',
  label: 'idelta',
  detail: 'idelta(v range-vector)',
  documentation: 'Calculates the difference between the last two samples in the range vector `v`, returning an instant vector with the given deltas and equivalent labels.'
}, {
  insertText: 'increase',
  label: 'increase',
  detail: 'increase(v range-vector)',
  documentation: 'Calculates the increase in the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. The increase is extrapolated to cover the full time range as specified in the range vector selector, so that it is possible to get a non-integer result even if a counter increases only by integer increments.'
}, {
  insertText: 'irate',
  label: 'irate',
  detail: 'irate(v range-vector)',
  documentation: 'Calculates the per-second instant rate of increase of the time series in the range vector. This is based on the last two data points. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for.'
}, {
  insertText: 'label_join',
  label: 'label_join',
  detail: 'label_join(v instant-vector, dst_label string, separator string, src_label_1 string, src_label_2 string, ...)',
  documentation: 'For each timeseries in `v`, joins all the values of all the `src_labels` using `separator` and returns the timeseries with the label `dst_label` containing the joined value. There can be any number of `src_labels` in this function.'
}, {
  insertText: 'label_replace',
  label: 'label_replace',
  detail: 'label_replace(v instant-vector, dst_label string, replacement string, src_label string, regex string)',
  documentation: "For each timeseries in `v`, `label_replace(v instant-vector, dst_label string, replacement string, src_label string, regex string)`  matches the regular expression `regex` against the label `src_label`.  If it matches, then the timeseries is returned with the label `dst_label` replaced by the expansion of `replacement`. `$1` is replaced with the first matching subgroup, `$2` with the second etc. If the regular expression doesn't match then the timeseries is returned unchanged."
}, {
  insertText: 'ln',
  label: 'ln',
  detail: 'ln(v instant-vector)',
  documentation: 'Calculates the natural logarithm for all elements in `v`.\nSpecial cases are:\n * `ln(+Inf) = +Inf`\n * `ln(0) = -Inf`\n * `ln(x < 0) = NaN`\n * `ln(NaN) = NaN`'
}, {
  insertText: 'log2',
  label: 'log2',
  detail: 'log2(v instant-vector)',
  documentation: 'Calculates the binary logarithm for all elements in `v`. The special cases are equivalent to those in `ln`.'
}, {
  insertText: 'log10',
  label: 'log10',
  detail: 'log10(v instant-vector)',
  documentation: 'Calculates the decimal logarithm for all elements in `v`. The special cases are equivalent to those in `ln`.'
}, {
  insertText: 'minute',
  label: 'minute',
  detail: 'minute(v=vector(time()) instant-vector)',
  documentation: 'Returns the minute of the hour for each of the given times in UTC. Returned values are from 0 to 59.'
}, {
  insertText: 'month',
  label: 'month',
  detail: 'month(v=vector(time()) instant-vector)',
  documentation: 'Returns the month of the year for each of the given times in UTC. Returned values are from 1 to 12, where 1 means January etc.'
}, {
  insertText: 'pi',
  label: 'pi',
  detail: 'pi()',
  documentation: 'Returns pi'
}, {
  insertText: 'predict_linear',
  label: 'predict_linear',
  detail: 'predict_linear(v range-vector, t scalar)',
  documentation: 'Predicts the value of time series `t` seconds from now, based on the range vector `v`, using simple linear regression.'
}, {
  insertText: 'rad',
  label: 'rad',
  detail: 'rad(v instant-vector)',
  documentation: 'Converts degrees to radians for all elements in v'
}, {
  insertText: 'rate',
  label: 'rate',
  detail: 'rate(v range-vector)',
  documentation: "Calculates the per-second average rate of increase of the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. Also, the calculation extrapolates to the ends of the time range, allowing for missed scrapes or imperfect alignment of scrape cycles with the range's time period."
}, {
  insertText: 'resets',
  label: 'resets',
  detail: 'resets(v range-vector)',
  documentation: 'For each input time series, `resets(v range-vector)` returns the number of counter resets within the provided time range as an instant vector. Any decrease in the value between two consecutive samples is interpreted as a counter reset.'
}, {
  insertText: 'round',
  label: 'round',
  detail: 'round(v instant-vector, to_nearest=1 scalar)',
  documentation: 'Rounds the sample values of all elements in `v` to the nearest integer. Ties are resolved by rounding up. The optional `to_nearest` argument allows specifying the nearest multiple to which the sample values should be rounded. This multiple may also be a fraction.'
}, {
  insertText: 'scalar',
  label: 'scalar',
  detail: 'scalar(v instant-vector)',
  documentation: 'Given a single-element input vector, `scalar(v instant-vector)` returns the sample value of that single element as a scalar. If the input vector does not have exactly one element, `scalar` will return `NaN`.'
}, {
  insertText: 'sgn',
  label: 'sgn',
  detail: 'sgn(v instant-vector)',
  documentation: 'Returns a vector with all sample values converted to their sign, defined as this: 1 if v is positive, -1 if v is negative and 0 if v is equal to zero.'
}, {
  insertText: 'sort',
  label: 'sort',
  detail: 'sort(v instant-vector)',
  documentation: 'Returns vector elements sorted by their sample values, in ascending order.'
}, {
  insertText: 'sort_desc',
  label: 'sort_desc',
  detail: 'sort_desc(v instant-vector)',
  documentation: 'Returns vector elements sorted by their sample values, in descending order.'
}, {
  insertText: 'sqrt',
  label: 'sqrt',
  detail: 'sqrt(v instant-vector)',
  documentation: 'Calculates the square root of all elements in `v`.'
}, {
  insertText: 'time',
  label: 'time',
  detail: 'time()',
  documentation: 'Returns the number of seconds since January 1, 1970 UTC. Note that this does not actually return the current time, but the time at which the expression is to be evaluated.'
}, {
  insertText: 'timestamp',
  label: 'timestamp',
  detail: 'timestamp(v instant-vector)',
  documentation: 'Returns the timestamp of each of the samples of the given vector as the number of seconds since January 1, 1970 UTC.'
}, {
  insertText: 'vector',
  label: 'vector',
  detail: 'vector(s scalar)',
  documentation: 'Returns the scalar `s` as a vector with no labels.'
}, {
  insertText: 'year',
  label: 'year',
  detail: 'year(v=vector(time()) instant-vector)',
  documentation: 'Returns the year for each of the given times in UTC.'
}, {
  insertText: 'avg_over_time',
  label: 'avg_over_time',
  detail: 'avg_over_time(range-vector)',
  documentation: 'The average value of all points in the specified interval.'
}, {
  insertText: 'min_over_time',
  label: 'min_over_time',
  detail: 'min_over_time(range-vector)',
  documentation: 'The minimum value of all points in the specified interval.'
}, {
  insertText: 'max_over_time',
  label: 'max_over_time',
  detail: 'max_over_time(range-vector)',
  documentation: 'The maximum value of all points in the specified interval.'
}, {
  insertText: 'sum_over_time',
  label: 'sum_over_time',
  detail: 'sum_over_time(range-vector)',
  documentation: 'The sum of all values in the specified interval.'
}, {
  insertText: 'count_over_time',
  label: 'count_over_time',
  detail: 'count_over_time(range-vector)',
  documentation: 'The count of all values in the specified interval.'
}, {
  insertText: 'quantile_over_time',
  label: 'quantile_over_time',
  detail: 'quantile_over_time(scalar, range-vector)',
  documentation: 'The φ-quantile (0 ≤ φ ≤ 1) of the values in the specified interval.'
}, {
  insertText: 'stddev_over_time',
  label: 'stddev_over_time',
  detail: 'stddev_over_time(range-vector)',
  documentation: 'The population standard deviation of the values in the specified interval.'
}, {
  insertText: 'stdvar_over_time',
  label: 'stdvar_over_time',
  detail: 'stdvar_over_time(range-vector)',
  documentation: 'The population standard variance of the values in the specified interval.'
}, {
  insertText: 'last_over_time',
  label: 'last_over_time',
  detail: 'last_over_time(range-vector)',
  documentation: 'The most recent point value in specified interval.'
}];
const PROM_KEYWORDS = FUNCTIONS.map(keyword => keyword.label);
const promqlGrammar = {
  comment: {
    pattern: /#.*/
  },
  'context-aggregation': {
    pattern: /((by|without)\s*)\([^)]*\)/,
    lookbehind: true,
    inside: {
      'label-key': {
        pattern: /[^(),\s][^,)]*[^),\s]*/,
        alias: 'attr-name'
      },
      punctuation: /[()]/
    }
  },
  'context-labels': {
    pattern: /\{[^}]*(?=}?)/,
    greedy: true,
    inside: {
      comment: {
        pattern: /#.*/
      },
      'label-key': {
        pattern: /[a-z_]\w*(?=\s*(=|!=|=~|!~))/,
        alias: 'attr-name',
        greedy: true
      },
      'label-value': {
        pattern: /"(?:\\.|[^\\"])*"/,
        greedy: true,
        alias: 'attr-value'
      },
      punctuation: /[{]/
    }
  },
  function: new RegExp(`\\b(?:${FUNCTIONS.map(f => f.label).join('|')})(?=\\s*\\()`, 'i'),
  'context-range': [{
    pattern: /\[[^\]]*(?=])/,
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }, {
    pattern: /(offset\s+)\w+/,
    lookbehind: true,
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }],
  idList: {
    pattern: /\d+(\|\d+)+/,
    alias: 'number'
  },
  number: /\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,
  operator: new RegExp(`/[-+*/=%^~]|&&?|\\|?\\||!=?|<(?:=>?|<|>)?|>[>=]?|\\b(?:${OPERATORS.join('|')})\\b`, 'i'),
  punctuation: /[{};()`,.]/
};
 const __WEBPACK_DEFAULT_EXPORT__ = (promqlGrammar);

 })

}]);