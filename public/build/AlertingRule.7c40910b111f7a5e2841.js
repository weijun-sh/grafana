"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[4679],{

/***/ "./public/app/features/alerting/unified/RuleViewer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "RuleViewer": () => (/* binding */ RuleViewer),
  "default": () => (/* binding */ unified_RuleViewer)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js
var useObservable = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertLabels.tsx
var AlertLabels = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/DetailsField.tsx
var DetailsField = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx
var RuleViewerLayout = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js
var index_esm = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./public/app/features/expressions/guards.ts
var guards = __webpack_require__("./public/app/features/expressions/guards.ts");
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var types = __webpack_require__("./public/app/types/index.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/constants.ts
var constants = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/Authorize.tsx
var Authorize = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx
var PanelPluginsButtonGroup = __webpack_require__("./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rule-viewer/RuleViewerVisualization.tsx
const _excluded = ["refId"];

var _Alert;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const headerHeight = 4;
function RuleViewerVisualization(props) {
  var _PanelPluginsButtonGr;

  const theme = (0,grafana_ui_src.useTheme2)();
  const styles = (0,grafana_ui_src.useStyles2)(getStyles);
  const {
    data,
    query,
    onChangeQuery
  } = props;
  const defaultPanel = (0,guards/* isExpressionQuery */.j)(query.model) ? constants/* TABLE */.Fe : constants/* TIMESERIES */.GC;
  const [panel, setPanel] = (0,react.useState)(defaultPanel);
  const dsSettings = (0,grafana_runtime_src.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);
  const relativeTimeRange = query.relativeTimeRange;
  const [options, setOptions] = (0,react.useState)({
    frameIndex: 0,
    showHeader: true
  });
  const onTimeChange = (0,react.useCallback)(newDateTime => {
    const now = (0,src.dateTime)().unix() - newDateTime.unix();

    if (relativeTimeRange) {
      const interval = relativeTimeRange.from - relativeTimeRange.to;
      onChangeQuery(Object.assign({}, query, {
        relativeTimeRange: {
          from: now + interval,
          to: now
        }
      }));
    }
  }, [onChangeQuery, query, relativeTimeRange]);
  const setDateTime = (0,react.useCallback)(relativeTimeRangeTo => {
    return relativeTimeRangeTo === 0 ? (0,src.dateTime)() : (0,src.dateTime)().subtract(relativeTimeRangeTo, 'seconds');
  }, []);

  if (!data) {
    return null;
  }

  if (!dsSettings) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.content,
      children: [_Alert || (_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
        title: "Could not find datasource for query"
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CodeEditor, {
        width: "100%",
        height: "250px",
        language: "json",
        showLineNumbers: false,
        showMiniMap: false,
        value: JSON.stringify(query, null, '\t'),
        readOnly: true
      })]
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.content,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* default */.Z, {
      children: _ref => {
        let {
          width,
          height
        } = _ref;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          style: {
            width,
            height
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: styles.header,
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: [`Query ${query.refId}`, /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
                className: styles.dataSource,
                children: ["(", dsSettings.name, ")"]
              })]
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: styles.actions,
              children: [!(0,guards/* isExpressionQuery */.j)(query.model) && relativeTimeRange ? /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.DateTimePicker, {
                date: setDateTime(relativeTimeRange.to),
                onChange: onTimeChange,
                maxDate: new Date()
              }) : null, _PanelPluginsButtonGr || (_PanelPluginsButtonGr = /*#__PURE__*/(0,jsx_runtime.jsx)(PanelPluginsButtonGroup/* PanelPluginsButtonGroup */.j, {
                onChange: setPanel,
                value: panel,
                size: "md"
              })), /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
                actions: [types/* AccessControlAction.DataSourcesExplore */.bW.DataSourcesExplore],
                children: !(0,guards/* isExpressionQuery */.j)(query.model) && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                    className: styles.spacing
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
                    size: "md",
                    variant: "secondary",
                    icon: "compass",
                    target: "_blank",
                    href: createExploreLink(dsSettings, query),
                    children: "View in Explore"
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_runtime_src.PanelRenderer, {
            height: height - theme.spacing.gridSize * headerHeight,
            width: width,
            data: data,
            pluginId: panel,
            title: "",
            onOptionsChange: setOptions,
            options: options
          })]
        });
      }
    })
  });
}

function createExploreLink(settings, query) {
  const {
    name
  } = settings;

  const _query$model = query.model,
        rest = _objectWithoutPropertiesLoose(_query$model, _excluded);

  const queryParams = Object.assign({}, rest, {
    datasource: name
  });
  return src.urlUtil.renderUrl(`${grafana_runtime_src.config.appSubUrl}/explore`, {
    left: JSON.stringify(['now-1h', 'now', name, queryParams])
  });
}

const getStyles = theme => {
  return {
    content: emotion_css_esm.css`
      width: 100%;
      height: 250px;
    `,
    header: emotion_css_esm.css`
      height: ${theme.spacing(headerHeight)};
      display: flex;
      align-items: center;
      justify-content: space-between;
      white-space: nowrap;
    `,
    refId: emotion_css_esm.css`
      font-weight: ${theme.typography.fontWeightMedium};
      color: ${theme.colors.text.link};
      overflow: hidden;
    `,
    dataSource: emotion_css_esm.css`
      margin-left: ${theme.spacing(1)};
      font-style: italic;
      color: ${theme.colors.text.secondary};
    `,
    actions: emotion_css_esm.css`
      display: flex;
      align-items: center;
    `,
    spacing: emotion_css_esm.css`
      padding: ${theme.spacing(0, 1, 0, 0)};
    `,
    errorMessage: emotion_css_esm.css`
      white-space: pre-wrap;
    `
  };
};
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx + 3 modules
var RuleDetailsActionButtons = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx
var RuleDetailsAnnotations = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx
var RuleDetailsDataSources = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx + 1 modules
var RuleDetailsExpression = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsFederatedSources.tsx





const RuleDetailsFederatedSources = _ref => {
  var _group$source_tenants;

  let {
    group
  } = _ref;
  const sourceTenants = (_group$source_tenants = group.source_tenants) !== null && _group$source_tenants !== void 0 ? _group$source_tenants : [];
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DetailsField/* DetailsField */.C, {
    label: "Tenant sources",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: sourceTenants.map(tenant => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: tenant
      }, tenant))
    })
  });
};


// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx + 1 modules
var RuleDetailsMatchingInstances = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleHealth.tsx
var RuleHealth = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleHealth.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleState.tsx
var RuleState = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleState.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts
var useAlertQueriesStatus = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useCombinedRule.ts
var useCombinedRule = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRule.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/state/AlertingQueryRunner.ts + 1 modules
var AlertingQueryRunner = __webpack_require__("./public/app/features/alerting/unified/state/AlertingQueryRunner.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/datasource.ts
var datasource = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/rules.ts
var rules = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/utils/query.ts


function alertRuleToQueries(combinedRule) {
  if (!combinedRule) {
    return [];
  }

  const {
    namespace,
    rulerRule
  } = combinedRule;
  const {
    rulesSource
  } = namespace;

  if ((0,datasource/* isGrafanaRulesSource */.HY)(rulesSource)) {
    if ((0,rules/* isGrafanaRulerRule */.Pc)(rulerRule)) {
      return rulerRule.grafana_alert.data;
    }
  }

  if ((0,datasource/* isCloudRulesSource */.jq)(rulesSource)) {
    const model = cloudAlertRuleToModel(rulesSource, combinedRule);
    return [{
      refId: model.refId,
      datasourceUid: rulesSource.uid,
      queryType: '',
      model,
      relativeTimeRange: {
        from: 360,
        to: 0
      }
    }];
  }

  return [];
}

function cloudAlertRuleToModel(dsSettings, rule) {
  const refId = 'A';

  switch (dsSettings.type) {
    case 'prometheus':
      {
        const query = {
          refId,
          expr: rule.query
        };
        return query;
      }

    case 'loki':
      {
        const query = {
          refId,
          expr: rule.query
        };
        return query;
      }

    default:
      throw new Error(`Query for datasource type ${dsSettings.type} is currently not supported by cloud alert rules.`);
  }
}
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/rule-id.ts
var rule_id = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/RuleViewer.tsx
var _RuleViewerLayout, _br, _RuleViewerLayout2, RuleViewer_Alert, _Icon;




























const errorMessage = 'Could not find data source for rule';
const errorTitle = 'Could not view rule';
const pageTitle = 'Alerting / View rule';
function RuleViewer(_ref) {
  let {
    match
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(RuleViewer_getStyles);
  const {
    id,
    sourceName
  } = match.params;
  const identifier = rule_id/* tryParse */.OA(id, true);
  const {
    loading,
    error,
    result: rule
  } = (0,useCombinedRule/* useCombinedRule */.H)(identifier, sourceName);
  const runner = (0,react.useMemo)(() => new AlertingQueryRunner/* AlertingQueryRunner */.v(), []);
  const data = (0,useObservable/* default */.Z)(runner.get());
  const queries2 = (0,react.useMemo)(() => alertRuleToQueries(rule), [rule]);
  const [queries, setQueries] = (0,react.useState)([]);
  const {
    allDataSourcesAvailable
  } = (0,useAlertQueriesStatus/* useAlertQueriesStatus */.S)(queries2);
  const onRunQueries = (0,react.useCallback)(() => {
    if (queries.length > 0 && allDataSourcesAvailable) {
      runner.run(queries);
    }
  }, [queries, runner, allDataSourcesAvailable]);
  (0,react.useEffect)(() => {
    setQueries(queries2);
  }, [queries2]);
  (0,react.useEffect)(() => {
    if (allDataSourcesAvailable) {
      onRunQueries();
    }
  }, [onRunQueries, allDataSourcesAvailable]);
  (0,react.useEffect)(() => {
    return () => runner.destroy();
  }, [runner]);
  const onChangeQuery = (0,react.useCallback)(query => {
    setQueries(queries => queries.map(q => {
      if (q.refId === query.refId) {
        return query;
      }

      return q;
    }));
  }, []);

  if (!sourceName) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(RuleViewerLayout/* RuleViewerLayout */.$, {
      title: pageTitle,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
        title: errorTitle,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("details", {
          className: styles.errorMessage,
          children: errorMessage
        })
      })
    });
  }

  const rulesSource = (0,datasource/* getRulesSourceByName */.o_)(sourceName);

  if (loading) {
    return _RuleViewerLayout || (_RuleViewerLayout = /*#__PURE__*/(0,jsx_runtime.jsx)(RuleViewerLayout/* RuleViewerLayout */.$, {
      title: pageTitle,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LoadingPlaceholder, {
        text: "Loading rule..."
      })
    }));
  }

  if (error || !rulesSource) {
    var _error$message;

    return /*#__PURE__*/(0,jsx_runtime.jsx)(RuleViewerLayout/* RuleViewerLayout */.$, {
      title: pageTitle,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
        title: errorTitle,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("details", {
          className: styles.errorMessage,
          children: [(_error$message = error === null || error === void 0 ? void 0 : error.message) !== null && _error$message !== void 0 ? _error$message : errorMessage, _br || (_br = /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})), !!(error !== null && error !== void 0 && error.stack) && error.stack]
        })
      })
    });
  }

  if (!rule) {
    return _RuleViewerLayout2 || (_RuleViewerLayout2 = /*#__PURE__*/(0,jsx_runtime.jsx)(RuleViewerLayout/* RuleViewerLayout */.$, {
      title: pageTitle,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: "Rule could not be found."
      })
    }));
  }

  const annotations = Object.entries(rule.annotations).filter(_ref2 => {
    let [_, value] = _ref2;
    return !!value.trim();
  });
  const isFederatedRule = (0,rules/* isFederatedRuleGroup */.Jq)(rule.group);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(RuleViewerLayout/* RuleViewerLayout */.$, {
    wrapInContent: false,
    title: pageTitle,
    children: [isFederatedRule && (RuleViewer_Alert || (RuleViewer_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      severity: "info",
      title: "This rule is part of a federated rule group.",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
        children: ["Federated rule groups are currently an experimental feature.", /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          fill: "text",
          icon: "book",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
            href: "https://grafana.com/docs/metrics-enterprise/latest/tenant-management/tenant-federation/#cross-tenant-alerting-and-recording-rule-federation",
            children: "Read documentation"
          })
        })]
      })
    }))), /*#__PURE__*/(0,jsx_runtime.jsxs)(RuleViewerLayout/* RuleViewerLayoutContent */.l, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("h4", {
          children: [_Icon || (_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            name: "bell",
            size: "lg"
          })), " ", rule.name]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(RuleState/* RuleState */.p, {
          rule: rule,
          isCreating: false,
          isDeleting: false
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetailsActionButtons/* RuleDetailsActionButtons */.f, {
          rule: rule,
          rulesSource: rulesSource
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.details,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.leftSide,
          children: [rule.promRule && /*#__PURE__*/(0,jsx_runtime.jsx)(DetailsField/* DetailsField */.C, {
            label: "Health",
            horizontal: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(RuleHealth/* RuleHealth */.V, {
              rule: rule.promRule
            })
          }), !!rule.labels && !!Object.keys(rule.labels).length && /*#__PURE__*/(0,jsx_runtime.jsx)(DetailsField/* DetailsField */.C, {
            label: "Labels",
            horizontal: true,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(AlertLabels/* AlertLabels */.s, {
              labels: rule.labels
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetailsExpression/* RuleDetailsExpression */.C, {
            rulesSource: rulesSource,
            rule: rule,
            annotations: annotations
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetailsAnnotations/* RuleDetailsAnnotations */.J, {
            annotations: annotations
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.rightSide,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetailsDataSources/* RuleDetailsDataSources */.C, {
            rule: rule,
            rulesSource: rulesSource
          }), isFederatedRule && /*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetailsFederatedSources, {
            group: rule.group
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DetailsField/* DetailsField */.C, {
            label: "Namespace / Group",
            children: `${rule.namespace.name} / ${rule.group.name}`
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetailsMatchingInstances/* RuleDetailsMatchingInstances */.M, {
          promRule: rule.promRule
        })
      })]
    }), !isFederatedRule && data && Object.keys(data).length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.queriesTitle,
        children: ["Query results ", /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.PanelChromeLoadingIndicator, {
          loading: isLoading(data),
          onCancel: () => runner.cancel()
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(RuleViewerLayout/* RuleViewerLayoutContent */.l, {
        padding: 0,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.queries,
          children: queries.map(query => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: styles.query,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(RuleViewerVisualization, {
                query: query,
                data: data && data[query.refId],
                onChangeQuery: onChangeQuery
              })
            }, query.refId);
          })
        })
      })]
    }), !isFederatedRule && !allDataSourcesAvailable && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      title: "Query not available",
      severity: "warning",
      className: styles.queryWarning,
      children: "Cannot display the query preview. Some of the data sources used in the queries are not available."
    })]
  });
}

function isLoading(data) {
  return !!Object.values(data).find(d => d.state === src.LoadingState.Loading);
}

const RuleViewer_getStyles = theme => {
  return {
    errorMessage: emotion_css_esm.css`
      white-space: pre-wrap;
    `,
    queries: emotion_css_esm.css`
      height: 100%;
      width: 100%;
    `,
    queriesTitle: emotion_css_esm.css`
      padding: ${theme.spacing(2, 0.5)};
      font-size: ${theme.typography.h5.fontSize};
      font-weight: ${theme.typography.fontWeightBold};
      font-family: ${theme.typography.h5.fontFamily};
    `,
    query: emotion_css_esm.css`
      border-bottom: 1px solid ${theme.colors.border.medium};
      padding: ${theme.spacing(2)};
    `,
    queryWarning: emotion_css_esm.css`
      margin: ${theme.spacing(4, 0)};
    `,
    details: emotion_css_esm.css`
      display: flex;
      flex-direction: row;
    `,
    leftSide: emotion_css_esm.css`
      flex: 1;
    `,
    rightSide: emotion_css_esm.css`
      padding-left: 90px;
      width: 300px;
    `
  };
};

/* harmony default export */ const unified_RuleViewer = ((0,grafana_ui_src.withErrorBoundary)(RuleViewer, {
  style: 'page'
}));

/***/ }),

/***/ "./public/app/features/alerting/unified/components/Authorize.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Authorize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Authorize = _ref => {
  let {
    actions,
    children,
    fallback = true
  } = _ref;

  if (actions.some(action => app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__/* .contextSrv.hasAccess */ .Vt.hasAccess(action, fallback))) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: children
    });
  } else {
    return null;
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ PanelPluginsButtonGroup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function PanelPluginsButtonGroup(props) {
  const {
    value,
    onChange,
    size = 'md'
  } = props;
  const panels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => getSupportedPanels(), []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
    options: panels,
    value: value,
    onChange: onChange,
    size: size
  });
}

function getSupportedPanels() {
  return Object.values(_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.panels).reduce((panels, panel) => {
    if (isSupportedPanelPlugin(panel.id)) {
      panels.push({
        value: panel.id,
        label: panel.name,
        imgUrl: panel.info.logos.small
      });
    }

    return panels;
  }, []);
}

function isSupportedPanelPlugin(id) {
  switch (id) {
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .TIMESERIES */ .GC:
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .TABLE */ .Fe:
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .STAT */ .Kd:
      return true;

    default:
      return false;
  }
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ RuleViewerLayout),
/* harmony export */   "l": () => (/* binding */ RuleViewerLayoutContent)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function RuleViewerLayout(props) {
  const {
    wrapInContent = true,
    children,
    title
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getPageStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__/* .Page */ .T, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.PageToolbar, {
      title: title,
      pageIcon: "bell",
      onGoBack: () => _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push('/alerting/list')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.content,
      children: wrapInContent ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(RuleViewerLayoutContent, Object.assign({}, props)) : children
    })]
  });
}
function RuleViewerLayoutContent(_ref) {
  let {
    children,
    padding = 2
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getContentStyles(padding));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: styles.wrapper,
    children: children
  });
}

const getPageStyles = theme => {
  return {
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(0, 2, 2)};
      max-width: ${theme.breakpoints.values.xxl}px;
    `
  };
};

const getContentStyles = padding => theme => {
  return {
    wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      background: ${theme.colors.background.primary};
      border: 1px solid ${theme.colors.border.weak};
      border-radius: ${theme.shape.borderRadius()};
      padding: ${theme.spacing(padding)};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useAlertQueriesStatus)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");


function useAlertQueriesStatus(queries) {
  const allDataSourcesAvailable = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => queries.every(query => Boolean((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid))), [queries]);
  return {
    allDataSourcesAvailable
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useCombinedRule.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useCombinedRule),
/* harmony export */   "X": () => (/* binding */ useCombinedRulesMatching)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");









function useCombinedRule(identifier, ruleSourceName) {
  const requestState = useCombinedRulesLoader(ruleSourceName);
  const combinedRules = (0,_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__/* .useCombinedRuleNamespaces */ .Zo)(ruleSourceName);
  const rule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!identifier || !ruleSourceName || combinedRules.length === 0) {
      return;
    }

    for (const namespace of combinedRules) {
      for (const group of namespace.groups) {
        for (const rule of group.rules) {
          const id = _utils_rule_id__WEBPACK_IMPORTED_MODULE_4__/* .fromCombinedRule */ .Yd(ruleSourceName, rule);

          if (_utils_rule_id__WEBPACK_IMPORTED_MODULE_4__/* .equal */ .Dg(id, identifier)) {
            return rule;
          }
        }
      }
    }

    return;
  }, [identifier, ruleSourceName, combinedRules]);
  return Object.assign({}, requestState, {
    result: rule
  });
}
function useCombinedRulesMatching(ruleName, ruleSourceName) {
  const requestState = useCombinedRulesLoader(ruleSourceName);
  const combinedRules = (0,_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__/* .useCombinedRuleNamespaces */ .Zo)(ruleSourceName);
  const rules = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!ruleName || !ruleSourceName || combinedRules.length === 0) {
      return [];
    }

    const rules = [];

    for (const namespace of combinedRules) {
      for (const group of namespace.groups) {
        for (const rule of group.rules) {
          if (rule.name === ruleName) {
            rules.push(rule);
          }
        }
      }
    }

    return rules;
  }, [ruleName, ruleSourceName, combinedRules]);
  return Object.assign({}, requestState, {
    result: rules
  });
}

function useCombinedRulesLoader(rulesSourceName) {
  var _promRuleRequest$erro;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const promRuleRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__/* .useUnifiedAlertingSelector */ ._)(state => state.promRules);
  const promRuleRequest = getRequestState(rulesSourceName, promRuleRequests);
  const rulerRuleRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__/* .useUnifiedAlertingSelector */ ._)(state => state.rulerRules);
  const rulerRuleRequest = getRequestState(rulesSourceName, rulerRuleRequests);
  const {
    loading
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(async () => {
    if (!rulesSourceName) {
      return;
    }

    await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__/* .fetchPromAndRulerRulesAction */ .dn)({
      rulesSourceName
    }));
  }, [dispatch, rulesSourceName]);
  return {
    loading,
    error: ((_promRuleRequest$erro = promRuleRequest.error) !== null && _promRuleRequest$erro !== void 0 ? _promRuleRequest$erro : (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__/* .isRulerNotSupportedResponse */ .m$)(rulerRuleRequest)) ? undefined : rulerRuleRequest.error,
    dispatched: promRuleRequest.dispatched && rulerRuleRequest.dispatched
  };
}

function getRequestState(ruleSourceName, slice) {
  if (!ruleSourceName) {
    return _utils_redux__WEBPACK_IMPORTED_MODULE_3__/* .initialAsyncRequestState */ .oq;
  }

  const state = slice[ruleSourceName];

  if (!state) {
    return _utils_redux__WEBPACK_IMPORTED_MODULE_3__/* .initialAsyncRequestState */ .oq;
  }

  return state;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/state/AlertingQueryRunner.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* binding */ AlertingQueryRunner)
});

// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js
var ReplaySubject = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js
var catchError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js
var share = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
// EXTERNAL MODULE: ./.yarn/cache/uuid-npm-8.3.2-eca0baba53-5575a8a75c.zip/node_modules/uuid/dist/esm-browser/v4.js + 1 modules
var v4 = __webpack_require__("./.yarn/cache/uuid-npm-8.3.2-eca0baba53-5575a8a75c.zip/node_modules/uuid/dist/esm-browser/v4.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/services/backend_srv.ts + 4 modules
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
// EXTERNAL MODULE: ./public/app/features/expressions/guards.ts
var guards = __webpack_require__("./public/app/features/expressions/guards.ts");
// EXTERNAL MODULE: ./public/app/features/query/state/processing/canceler.ts
var canceler = __webpack_require__("./public/app/features/query/state/processing/canceler.ts");
// EXTERNAL MODULE: ./public/app/features/query/state/processing/revision.ts
var revision = __webpack_require__("./public/app/features/query/state/processing/revision.ts");
// EXTERNAL MODULE: ./public/app/features/query/state/runRequest.ts + 1 modules
var runRequest = __webpack_require__("./public/app/features/query/state/runRequest.ts");
// EXTERNAL MODULE: ./public/app/features/expressions/types.ts
var types = __webpack_require__("./public/app/features/expressions/types.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/utils/timeRange.ts

const FALL_BACK_TIME_RANGE = {
  from: 21600,
  to: 0
};
const getTimeRangeForExpression = (query, queries) => {
  const referencedRefIds = getReferencedIds(query, queries);

  if (!referencedRefIds) {
    return FALL_BACK_TIME_RANGE;
  }

  const {
    from,
    to
  } = getTimeRanges(referencedRefIds, queries);

  if (!from.length && !to.length) {
    return FALL_BACK_TIME_RANGE;
  }

  return {
    from: Math.max(...from),
    to: Math.min(...to)
  };
};

const getReferencedIds = (model, queries) => {
  switch (model.type) {
    case types/* ExpressionQueryType.classic */.Us.classic:
      return getReferencedIdsForClassicCondition(model);

    case types/* ExpressionQueryType.math */.Us.math:
      return getReferencedIdsForMath(model, queries);

    case types/* ExpressionQueryType.resample */.Us.resample:
    case types/* ExpressionQueryType.reduce */.Us.reduce:
      return getReferencedIdsForReduce(model);
  }
};

const getReferencedIdsForClassicCondition = model => {
  var _model$conditions;

  return (_model$conditions = model.conditions) === null || _model$conditions === void 0 ? void 0 : _model$conditions.map(condition => {
    return condition.query.params[0];
  });
};

const getTimeRanges = (referencedRefIds, queries) => {
  let from = [];
  let to = [FALL_BACK_TIME_RANGE.to];

  for (const referencedRefIdsKey of referencedRefIds) {
    const query = queries.find(query => query.refId === referencedRefIdsKey);

    if (!query || !query.relativeTimeRange) {
      continue;
    }

    from.push(query.relativeTimeRange.from);
    to.push(query.relativeTimeRange.to);
  }

  return {
    from,
    to
  };
};

const getReferencedIdsForMath = (model, queries) => {
  return queries // filter queries of type query and filter expression on if it includes any refIds
  .filter(q => {
    var _model$expression;

    return q.queryType === 'query' && ((_model$expression = model.expression) === null || _model$expression === void 0 ? void 0 : _model$expression.includes(q.refId));
  }).map(q => {
    return q.refId;
  });
};

const getReferencedIdsForReduce = model => {
  return model.expression ? [model.expression] : undefined;
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/state/AlertingQueryRunner.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class AlertingQueryRunner {
  constructor() {
    let backendSrv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,backend_srv/* getBackendSrv */.i)();
    let dataSourceSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,grafana_runtime_src.getDataSourceSrv)();
    this.backendSrv = backendSrv;
    this.dataSourceSrv = dataSourceSrv;

    _defineProperty(this, "subject", void 0);

    _defineProperty(this, "subscription", void 0);

    _defineProperty(this, "lastResult", void 0);

    this.backendSrv = backendSrv;
    this.dataSourceSrv = dataSourceSrv;
    this.subject = new ReplaySubject/* ReplaySubject */.t(1);
    this.lastResult = {};
  }

  get() {
    return this.subject.asObservable();
  }

  async run(queries) {
    if (queries.length === 0) {
      const empty = initialState(queries, src.LoadingState.Done);
      return this.subject.next(empty);
    } // do not execute if one more of the queries are not runnable,
    // for example not completely configured


    for (const query of queries) {
      if (!(0,guards/* isExpressionQuery */.j)(query.model)) {
        const ds = await this.dataSourceSrv.get(query.datasourceUid);

        if (ds.filterQuery && !ds.filterQuery(query.model)) {
          const empty = initialState(queries, src.LoadingState.Done);
          return this.subject.next(empty);
        }
      }
    }

    this.subscription = AlertingQueryRunner_runRequest(this.backendSrv, queries).subscribe({
      next: dataPerQuery => {
        const nextResult = applyChange(dataPerQuery, (refId, data) => {
          const previous = this.lastResult[refId];
          const preProcessed = (0,runRequest/* preProcessPanelData */.zR)(data, previous);
          return (0,revision/* setStructureRevision */.C)(preProcessed, previous);
        });
        this.lastResult = nextResult;
        this.subject.next(this.lastResult);
      },
      error: error => {
        this.lastResult = mapErrorToPanelData(this.lastResult, error);
        this.subject.next(this.lastResult);
      }
    });
  }

  cancel() {
    if (!this.subscription) {
      return;
    }

    this.subscription.unsubscribe();
    let requestIsRunning = false;
    const nextResult = applyChange(this.lastResult, (refId, data) => {
      if (data.state === src.LoadingState.Loading) {
        requestIsRunning = true;
      }

      return Object.assign({}, data, {
        state: src.LoadingState.Done
      });
    });

    if (requestIsRunning) {
      this.subject.next(nextResult);
    }
  }

  destroy() {
    if (this.subject) {
      this.subject.complete();
    }

    this.cancel();
  }

}

const AlertingQueryRunner_runRequest = (backendSrv, queries) => {
  const initial = initialState(queries, src.LoadingState.Loading);
  const request = {
    data: {
      data: queries
    },
    url: '/api/v1/eval',
    method: 'POST',
    requestId: (0,v4/* default */.Z)()
  };
  return (0,src.withLoadingIndicator)({
    whileLoading: initial,
    source: backendSrv.fetch(request).pipe(mapToPanelData(initial), (0,catchError/* catchError */.K)(error => (0,of.of)(mapErrorToPanelData(initial, error))), (0,canceler/* cancelNetworkRequestsOnUnsubscribe */.V)(backendSrv, request.requestId), (0,share/* share */.B)())
  });
};

const initialState = (queries, state) => {
  return queries.reduce((dataByQuery, query) => {
    dataByQuery[query.refId] = {
      state,
      series: [],
      timeRange: getTimeRange(query, queries)
    };
    return dataByQuery;
  }, {});
};

const getTimeRange = (query, queries) => {
  if ((0,guards/* isExpressionQuery */.j)(query.model)) {
    const relative = getTimeRangeForExpression(query.model, queries);
    return src.rangeUtil.relativeToTimeRange(relative);
  }

  if (!query.relativeTimeRange) {
    console.warn(`Query with refId: ${query.refId} did not have any relative time range, using default.`);
    return (0,src.getDefaultTimeRange)();
  }

  return src.rangeUtil.relativeToTimeRange(query.relativeTimeRange);
};

const mapToPanelData = dataByQuery => {
  return (0,map/* map */.U)(response => {
    const {
      data
    } = response;
    const results = {};

    for (const [refId, result] of Object.entries(data.results)) {
      results[refId] = {
        timeRange: dataByQuery[refId].timeRange,
        state: src.LoadingState.Done,
        series: result.frames.map(src.dataFrameFromJSON)
      };
    }

    return results;
  });
};

const mapErrorToPanelData = (lastResult, error) => {
  const queryError = (0,grafana_runtime_src.toDataQueryError)(error);
  return applyChange(lastResult, (refId, data) => {
    return Object.assign({}, data, {
      state: src.LoadingState.Error,
      error: queryError
    });
  });
};

const applyChange = (initial, change) => {
  const nextResult = {};

  for (const [refId, data] of Object.entries(initial)) {
    nextResult[refId] = change(refId, data);
  }

  return nextResult;
};

/***/ }),

/***/ "./public/app/features/expressions/guards.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ isExpressionQuery)
/* harmony export */ });
/* harmony import */ var _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/expressions/types.ts");


const isExpressionQuery = dataQuery => {
  if (!dataQuery) {
    return false;
  }

  if ((0,_grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_0__/* .isExpressionReference */ .Pr)(dataQuery.datasource)) {
    return true;
  }

  const expression = dataQuery;

  if (typeof expression.type !== 'string') {
    return false;
  }

  return Object.values(_types__WEBPACK_IMPORTED_MODULE_1__/* .ExpressionQueryType */ .Us).includes(expression.type);
};

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


function useObservable(observable$, initialValue) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue), value = _a[0], update = _a[1];
    (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useObservable);


/***/ })

}]);