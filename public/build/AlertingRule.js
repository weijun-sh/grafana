"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingRule"],{

/***/ "./public/app/features/alerting/unified/RuleViewer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleViewer": () => (/* binding */ RuleViewer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_AlertLabels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _components_DetailsField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx");
/* harmony import */ var _components_rule_viewer_RuleViewerVisualization__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/RuleViewerVisualization.tsx");
/* harmony import */ var _components_rules_RuleDetailsActionButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx");
/* harmony import */ var _components_rules_RuleDetailsAnnotations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx");
/* harmony import */ var _components_rules_RuleDetailsDataSources__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx");
/* harmony import */ var _components_rules_RuleDetailsExpression__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx");
/* harmony import */ var _components_rules_RuleDetailsFederatedSources__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsFederatedSources.tsx");
/* harmony import */ var _components_rules_RuleDetailsMatchingInstances__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx");
/* harmony import */ var _components_rules_RuleHealth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleHealth.tsx");
/* harmony import */ var _components_rules_RuleState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleState.tsx");
/* harmony import */ var _hooks_useAlertQueriesStatus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts");
/* harmony import */ var _hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRule.ts");
/* harmony import */ var _state_AlertingQueryRunner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertingQueryRunner.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_query__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/utils/query.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _RuleViewerLayout, _br, _RuleViewerLayout2, _Alert, _Icon;




























const errorMessage = 'Could not find data source for rule';
const errorTitle = 'Could not view rule';
const pageTitle = 'Alerting / View rule';
function RuleViewer({
  match
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const {
    id,
    sourceName
  } = match.params;
  const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_21__.tryParse(id, true);
  const {
    loading,
    error,
    result: rule
  } = (0,_hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_17__.useCombinedRule)(identifier, sourceName);
  const runner = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => new _state_AlertingQueryRunner__WEBPACK_IMPORTED_MODULE_18__.AlertingQueryRunner(), []);
  const data = (0,react_use__WEBPACK_IMPORTED_MODULE_24__["default"])(runner.get());
  const queries2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils_query__WEBPACK_IMPORTED_MODULE_20__.alertRuleToQueries)(rule), [rule]);
  const [queries, setQueries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    allDataSourcesAvailable
  } = (0,_hooks_useAlertQueriesStatus__WEBPACK_IMPORTED_MODULE_16__.useAlertQueriesStatus)(queries2);
  const onRunQueries = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (queries.length > 0 && allDataSourcesAvailable) {
      runner.run(queries);
    }
  }, [queries, runner, allDataSourcesAvailable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setQueries(queries2);
  }, [queries2]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (allDataSourcesAvailable) {
      onRunQueries();
    }
  }, [onRunQueries, allDataSourcesAvailable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return () => runner.destroy();
  }, [runner]);
  const onChangeQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(query => {
    setQueries(queries => queries.map(q => {
      if (q.refId === query.refId) {
        return query;
      }

      return q;
    }));
  }, []);

  if (!sourceName) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
        title: errorTitle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("details", {
          className: styles.errorMessage,
          children: errorMessage
        })
      })
    });
  }

  const rulesSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_19__.getRulesSourceByName)(sourceName);

  if (loading) {
    return _RuleViewerLayout || (_RuleViewerLayout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, {
        text: "Loading rule..."
      })
    }));
  }

  if (error || !rulesSource) {
    var _error$message;

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
        title: errorTitle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("details", {
          className: styles.errorMessage,
          children: [(_error$message = error === null || error === void 0 ? void 0 : error.message) !== null && _error$message !== void 0 ? _error$message : errorMessage, _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("br", {})), !!(error !== null && error !== void 0 && error.stack) && error.stack]
        })
      })
    });
  }

  if (!rule) {
    return _RuleViewerLayout2 || (_RuleViewerLayout2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span", {
        children: "Rule could not be found."
      })
    }));
  }

  const annotations = Object.entries(rule.annotations).filter(([_, value]) => !!value.trim());
  const isFederatedRule = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_22__.isFederatedRuleGroup)(rule.group);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayout, {
    wrapInContent: false,
    title: pageTitle,
    children: [isFederatedRule && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      severity: "info",
      title: "This rule is part of a federated rule group.",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.VerticalGroup, {
        children: ["Federated rule groups are currently an experimental feature.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
          fill: "text",
          icon: "book",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("a", {
            href: "https://grafana.com/docs/metrics-enterprise/latest/tenant-management/tenant-federation/#cross-tenant-alerting-and-recording-rule-federation",
            children: "Read documentation"
          })
        })]
      })
    }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayoutContent, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("h4", {
          children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            name: "bell",
            size: "lg"
          })), " ", rule.name]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleState__WEBPACK_IMPORTED_MODULE_15__.RuleState, {
          rule: rule,
          isCreating: false,
          isDeleting: false
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleDetailsActionButtons__WEBPACK_IMPORTED_MODULE_8__.RuleDetailsActionButtons, {
          rule: rule,
          rulesSource: rulesSource
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
        className: styles.details,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: styles.leftSide,
          children: [rule.promRule && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_DetailsField__WEBPACK_IMPORTED_MODULE_5__.DetailsField, {
            label: "Health",
            horizontal: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleHealth__WEBPACK_IMPORTED_MODULE_14__.RuleHealth, {
              rule: rule.promRule
            })
          }), !!rule.labels && !!Object.keys(rule.labels).length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_DetailsField__WEBPACK_IMPORTED_MODULE_5__.DetailsField, {
            label: "Labels",
            horizontal: true,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_AlertLabels__WEBPACK_IMPORTED_MODULE_4__.AlertLabels, {
              labels: rule.labels
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleDetailsExpression__WEBPACK_IMPORTED_MODULE_11__.RuleDetailsExpression, {
            rulesSource: rulesSource,
            rule: rule,
            annotations: annotations
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleDetailsAnnotations__WEBPACK_IMPORTED_MODULE_9__.RuleDetailsAnnotations, {
            annotations: annotations
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
          className: styles.rightSide,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleDetailsDataSources__WEBPACK_IMPORTED_MODULE_10__.RuleDetailsDataSources, {
            rule: rule,
            rulesSource: rulesSource
          }), isFederatedRule && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleDetailsFederatedSources__WEBPACK_IMPORTED_MODULE_12__.RuleDetailsFederatedSources, {
            group: rule.group
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_DetailsField__WEBPACK_IMPORTED_MODULE_5__.DetailsField, {
            label: "Namespace / Group",
            children: `${rule.namespace.name} / ${rule.group.name}`
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rules_RuleDetailsMatchingInstances__WEBPACK_IMPORTED_MODULE_13__.RuleDetailsMatchingInstances, {
          promRule: rule.promRule
        })
      })]
    }), !isFederatedRule && data && Object.keys(data).length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div", {
        className: styles.queriesTitle,
        children: ["Query results ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.PanelChromeLoadingIndicator, {
          loading: isLoading(data),
          onCancel: () => runner.cancel()
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_6__.RuleViewerLayoutContent, {
        padding: 0,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
          className: styles.queries,
          children: queries.map(query => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div", {
              className: styles.query,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_components_rule_viewer_RuleViewerVisualization__WEBPACK_IMPORTED_MODULE_7__.RuleViewerVisualization, {
                query: query,
                data: data && data[query.refId],
                onChangeQuery: onChangeQuery
              })
            }, query.refId);
          })
        })
      })]
    }), !isFederatedRule && !allDataSourcesAvailable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      title: "Query not available",
      severity: "warning",
      className: styles.queryWarning,
      children: "Cannot display the query preview. Some of the data sources used in the queries are not available."
    })]
  });
}

function isLoading(data) {
  return !!Object.values(data).find(d => d.state === _grafana_data__WEBPACK_IMPORTED_MODULE_2__.LoadingState.Loading);
}

const getStyles = theme => {
  return {
    errorMessage: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      white-space: pre-wrap;
    `,
    queries: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      height: 100%;
      width: 100%;
    `,
    queriesTitle: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing(2, 0.5)};
      font-size: ${theme.typography.h5.fontSize};
      font-weight: ${theme.typography.fontWeightBold};
      font-family: ${theme.typography.h5.fontFamily};
    `,
    query: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      border-bottom: 1px solid ${theme.colors.border.medium};
      padding: ${theme.spacing(2)};
    `,
    queryWarning: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin: ${theme.spacing(4, 0)};
    `,
    details: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: row;
    `,
    leftSide: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex: 1;
    `,
    rightSide: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding-left: 90px;
      width: 300px;
    `
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.withErrorBoundary)(RuleViewer, {
  style: 'page'
}));

/***/ }),

/***/ "./public/app/features/alerting/unified/components/Authorize.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Authorize": () => (/* binding */ Authorize)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Authorize = ({
  actions,
  children,
  fallback = true
}) => {
  if (actions.some(action => app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__.contextSrv.hasAccess(action, fallback))) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: children
    });
  } else {
    return null;
  }
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/Expression.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Expression": () => (/* binding */ Expression),
/* harmony export */   "HighlightedQuery": () => (/* binding */ HighlightedQuery),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_slate_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/@grafana-slate-react-virtual-047372596b/0/cache/@grafana-slate-react-npm-0.22.10-grafana-510bc0576d-3417c53d9d.zip/node_modules/@grafana/slate-react/lib/slate-react.es.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_plugins_datasource_loki_syntax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/syntax.ts");
/* harmony import */ var app_plugins_datasource_prometheus_promql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _Well__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/Well.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const HighlightedQuery = ({
  language,
  expr
}) => {
  const plugins = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => [(0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SlatePrism)({
    onlyIn: node => node.type === 'code_block',
    getSyntax: () => language
  }, Object.assign({}, prismjs__WEBPACK_IMPORTED_MODULE_1__.languages, {
    [language]: language === 'logql' ? app_plugins_datasource_loki_syntax__WEBPACK_IMPORTED_MODULE_5__["default"] : app_plugins_datasource_prometheus_promql__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))], [language]);
  const slateValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.makeValue)(expr), [expr]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_slate_react__WEBPACK_IMPORTED_MODULE_3__.Editor, {
    plugins: plugins,
    value: slateValue,
    readOnly: true
  });
};
const Expression = ({
  expression: query,
  rulesSource
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Well__WEBPACK_IMPORTED_MODULE_8__.Well, {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.well, 'slate-query-field'),
    children: (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_7__.isCloudRulesSource)(rulesSource) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(HighlightedQuery, {
      expr: query,
      language: rulesSource.type === _utils_datasource__WEBPACK_IMPORTED_MODULE_7__.DataSourceType.Loki ? 'logql' : 'promql'
    }) : query
  });
};
const getStyles = theme => ({
  well: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-family: ${theme.typography.fontFamily.monospace};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelPluginsButtonGroup": () => (/* binding */ PanelPluginsButtonGroup)
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
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__.TIMESERIES:
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__.TABLE:
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__.STAT:
      return true;

    default:
      return false;
  }
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatcherFilter": () => (/* binding */ MatcherFilter)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _span, _div;







const MatcherFilter = ({
  className,
  onFilterChange,
  defaultQueryString,
  queryString
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);

  const handleSearchChange = e => {
    const target = e.target;
    onFilterChange(target.value);
  };

  const searchIcon = _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    name: 'search'
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        gap: 0.5,
        children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: "Search by label"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
          content: _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: ["Filter alerts using label querying, ex:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", {
              children: `{severity="critical", instance=~"cluster-us-.+"}`
            })]
          })),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            className: styles.icon,
            name: "info-circle",
            size: "sm"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
      placeholder: "Search",
      defaultValue: defaultQueryString,
      value: queryString,
      onChange: handleSearchChange,
      "data-testid": "search-query-input",
      prefix: searchIcon,
      className: styles.inputWidth
    })]
  });
};

const getStyles = theme => ({
  icon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-right: ${theme.spacing(0.5)};
  `,
  inputWidth: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 340px;
    flex-grow: 0;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleViewerLayout": () => (/* binding */ RuleViewerLayout),
/* harmony export */   "RuleViewerLayoutContent": () => (/* binding */ RuleViewerLayoutContent)
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__.Page, {
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
function RuleViewerLayoutContent({
  children,
  padding = 2
}) {
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

/***/ "./public/app/features/alerting/unified/components/rule-viewer/RuleViewerVisualization.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleViewerVisualization": () => (/* binding */ RuleViewerVisualization)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _PanelPluginsButtonGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["refId"];

var _Alert;

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const headerHeight = 4;
function RuleViewerVisualization(props) {
  var _PanelPluginsButtonGr;

  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const {
    data,
    query,
    onChangeQuery
  } = props;
  const defaultPanel = (0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_6__.isExpressionQuery)(query.model) ? _utils_constants__WEBPACK_IMPORTED_MODULE_8__.TABLE : _utils_constants__WEBPACK_IMPORTED_MODULE_8__.TIMESERIES;
  const [panel, setPanel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultPanel);
  const dsSettings = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);
  const relativeTimeRange = query.relativeTimeRange;
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    frameIndex: 0,
    showHeader: true
  });
  const onTimeChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newDateTime => {
    const now = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)().unix() - newDateTime.unix();

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
  const setDateTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(relativeTimeRangeTo => {
    return relativeTimeRangeTo === 0 ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)() : (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTime)().subtract(relativeTimeRangeTo, 'seconds');
  }, []);

  if (!data) {
    return null;
  }

  if (!dsSettings) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: styles.content,
      children: [_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert, {
        title: "Could not find datasource for query"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CodeEditor, {
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

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
    className: styles.content,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: ({
        width,
        height
      }) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          style: {
            width,
            height
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: styles.header,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              children: [`Query ${query.refId}`, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
                className: styles.dataSource,
                children: ["(", dsSettings.name, ")"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: styles.actions,
              children: [!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_6__.isExpressionQuery)(query.model) && relativeTimeRange ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.DateTimePicker, {
                date: setDateTime(relativeTimeRange.to),
                onChange: onTimeChange,
                maxDate: new Date()
              }) : null, _PanelPluginsButtonGr || (_PanelPluginsButtonGr = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_PanelPluginsButtonGroup__WEBPACK_IMPORTED_MODULE_10__.PanelPluginsButtonGroup, {
                onChange: setPanel,
                value: panel,
                size: "md"
              })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_9__.Authorize, {
                actions: [app_types__WEBPACK_IMPORTED_MODULE_7__.AccessControlAction.DataSourcesExplore],
                children: !(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_6__.isExpressionQuery)(query.model) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                    className: styles.spacing
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.PanelRenderer, {
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
  return _grafana_data__WEBPACK_IMPORTED_MODULE_3__.urlUtil.renderUrl(`${_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.appSubUrl}/explore`, {
    left: JSON.stringify(['now-1h', 'now', name, queryParams])
  });
}

const getStyles = theme => {
  return {
    content: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 100%;
      height: 250px;
    `,
    header: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      height: ${theme.spacing(headerHeight)};
      display: flex;
      align-items: center;
      justify-content: space-between;
      white-space: nowrap;
    `,
    refId: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-weight: ${theme.typography.fontWeightMedium};
      color: ${theme.colors.text.link};
      overflow: hidden;
    `,
    dataSource: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing(1)};
      font-style: italic;
      color: ${theme.colors.text.secondary};
    `,
    actions: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      align-items: center;
    `,
    spacing: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding: ${theme.spacing(0, 1, 0, 0)};
    `,
    errorMessage: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      white-space: pre-wrap;
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/AlertInstanceStateFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertInstanceStateFilter": () => (/* binding */ AlertInstanceStateFilter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label;






const AlertInstanceStateFilter = ({
  className,
  onStateFilterChange,
  stateFilter
}) => {
  const stateOptions = Object.values(app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_2__.GrafanaAlertState).map(value => ({
    label: value,
    value
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: className,
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Label, {
      children: "State"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.RadioButtonGroup, {
      options: stateOptions,
      value: stateFilter,
      onChange: onStateFilterChange,
      onClick: v => {
        if (v === stateFilter) {
          onStateFilterChange(undefined);
        }
      }
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsActionButtons": () => (/* binding */ RuleDetailsActionButtons),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/types/index.ts");
/* harmony import */ var _hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts");
/* harmony import */ var _hooks_useStateHistoryModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useStateHistoryModal.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rule_id__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _div2;























const RuleDetailsActionButtons = ({
  rule,
  rulesSource
}) => {
  var _rule$rulerRule$grafa, _getAlertmanagerByUid;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useLocation)();
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_6__.useAppNotification)();
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const {
    namespace,
    group,
    rulerRule
  } = rule;
  const [ruleToDelete, setRuleToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const alertId = isGrafanaRulerRule(rule.rulerRule) ? (_rule$rulerRule$grafa = rule.rulerRule.grafana_alert.id) !== null && _rule$rulerRule$grafa !== void 0 ? _rule$rulerRule$grafa : '' : '';
  const {
    StateHistoryModal,
    showStateHistoryModal
  } = (0,_hooks_useStateHistoryModal__WEBPACK_IMPORTED_MODULE_10__.useStateHistoryModal)(alertId);
  const alertmanagerSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.isGrafanaRulesSource)(rulesSource) ? rulesSource : (_getAlertmanagerByUid = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.getAlertmanagerByUid)(rulesSource.jsonData.alertmanagerUid)) === null || _getAlertmanagerByUid === void 0 ? void 0 : _getAlertmanagerByUid.name;
  const rulesSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.getRulesSourceName)(rulesSource);
  const hasExplorePermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.hasPermission(app_types__WEBPACK_IMPORTED_MODULE_8__.AccessControlAction.DataSourcesExplore);
  const leftButtons = [];
  const rightButtons = [];
  const isFederated = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_17__.isFederatedRuleGroup)(group);
  const {
    isEditable,
    isRemovable
  } = (0,_hooks_useIsRuleEditable__WEBPACK_IMPORTED_MODULE_9__.useIsRuleEditable)(rulesSourceName, rulerRule);
  const returnTo = location.pathname + location.search;
  const isViewMode = inViewMode(location.pathname);

  const deleteRule = () => {
    if (ruleToDelete && ruleToDelete.rulerRule) {
      const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_16__.fromRulerRule((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.getRulesSourceName)(ruleToDelete.namespace.rulesSource), ruleToDelete.namespace.name, ruleToDelete.group.name, ruleToDelete.rulerRule);
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.deleteRuleAction)(identifier, {
        navigateTo: isViewMode ? '/alerting/list' : undefined
      }));
      setRuleToDelete(undefined);
    }
  };

  const buildShareUrl = () => {
    if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.isCloudRulesSource)(rulesSource)) {
      const {
        appUrl,
        appSubUrl
      } = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config;
      const baseUrl = appSubUrl !== '' ? `${appUrl}${appSubUrl}/` : _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.appUrl;
      const ruleUrl = `${encodeURIComponent(rulesSource.name)}/${encodeURIComponent(rule.name)}`;
      return `${baseUrl}alerting/${ruleUrl}/find`;
    }

    return window.location.href.split('?')[0];
  }; // explore does not support grafana rule queries atm
  // neither do "federated rules"


  if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.isCloudRulesSource)(rulesSource) && hasExplorePermission && !isFederated) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "primary",
      icon: "chart-line",
      target: "__blank",
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.createExploreLink)(rulesSource.name, rule.query),
      children: "See graph"
    }, "explore"));
  }

  if (rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.runbookURL]) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "primary",
      icon: "book",
      target: "__blank",
      href: rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.runbookURL],
      children: "View runbook"
    }, "runbook"));
  }

  if (rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.dashboardUID]) {
    const dashboardUID = rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.dashboardUID];

    if (dashboardUID) {
      leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
        className: style.button,
        size: "xs",
        variant: "primary",
        icon: "apps",
        target: "__blank",
        href: `d/${encodeURIComponent(dashboardUID)}`,
        children: "Go to dashboard"
      }, "dashboard"));
      const panelId = rule.annotations[_utils_constants__WEBPACK_IMPORTED_MODULE_13__.Annotation.panelID];

      if (panelId) {
        leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
          className: style.button,
          size: "xs",
          variant: "primary",
          icon: "apps",
          target: "__blank",
          href: `d/${encodeURIComponent(dashboardUID)}?viewPanel=${encodeURIComponent(panelId)}`,
          children: "Go to panel"
        }, "panel"));
      }
    }
  }

  if (alertmanagerSourceName && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.hasAccess(app_types__WEBPACK_IMPORTED_MODULE_8__.AccessControlAction.AlertingInstanceCreate, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_7__.contextSrv.isEditor)) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
      className: style.button,
      size: "xs",
      icon: "bell-slash",
      target: "__blank",
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.makeRuleBasedSilenceLink)(alertmanagerSourceName, rule),
      children: "Silence"
    }, "silence"));
  }

  if (alertId) {
    leftButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: style.button,
        size: "xs",
        icon: "history",
        onClick: () => showStateHistoryModal(),
        children: "Show state history"
      }), StateHistoryModal]
    }, "history"));
  }

  if (!isViewMode) {
    rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "secondary",
      icon: "eye",
      href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_15__.createViewLink)(rulesSource, rule, returnTo),
      children: "View"
    }, "view"));
  }

  if (isEditable && rulerRule && !isFederated) {
    const sourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_14__.getRulesSourceName)(rulesSource);
    const identifier = _utils_rule_id__WEBPACK_IMPORTED_MODULE_16__.fromRulerRule(sourceName, namespace.name, group.name, rulerRule);
    const editURL = _grafana_data__WEBPACK_IMPORTED_MODULE_3__.urlUtil.renderUrl(`${_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.appSubUrl}/alerting/${encodeURIComponent(_utils_rule_id__WEBPACK_IMPORTED_MODULE_16__.stringifyIdentifier(identifier))}/edit`, {
      returnTo
    });

    if (isViewMode) {
      rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ClipboardButton, {
        onClipboardCopy: () => {
          notifyApp.success('URL copied!');
        },
        onClipboardError: e => {
          notifyApp.error('Error while copying URL', e.text);
        },
        className: style.button,
        size: "sm",
        getText: buildShareUrl,
        children: "Copy link to rule"
      }, "copy"));
    }

    rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "secondary",
      icon: "pen",
      href: editURL,
      children: "Edit"
    }, "edit"));
  }

  if (isRemovable && rulerRule && !isFederated) {
    rightButtons.push( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, {
      className: style.button,
      size: "xs",
      type: "button",
      variant: "secondary",
      icon: "trash-alt",
      onClick: () => setRuleToDelete(rule),
      children: "Delete"
    }, "delete"));
  }

  if (leftButtons.length || rightButtons.length) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
        className: style.wrapper,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.HorizontalGroup, {
          width: "auto",
          children: leftButtons.length ? leftButtons : _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {}))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.HorizontalGroup, {
          width: "auto",
          children: rightButtons.length ? rightButtons : _div2 || (_div2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {}))
        })]
      }), !!ruleToDelete && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ConfirmModal, {
        isOpen: true,
        title: "Delete rule",
        body: "Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",
        confirmText: "Yes, delete",
        icon: "exclamation-triangle",
        onConfirm: deleteRule,
        onDismiss: () => setRuleToDelete(undefined)
      })]
    });
  }

  return null;
};

function inViewMode(pathname) {
  return pathname.endsWith('/view');
}

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(2)} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px ${theme.colors.border.medium};
  `,
  button: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    height: 24px;
    margin-top: ${theme.spacing(1)};
    font-size: ${theme.typography.size.sm};
  `
});

function isGrafanaRulerRule(rule) {
  if (!rule) {
    return false;
  }

  return rule.grafana_alert != null;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsAnnotations": () => (/* binding */ RuleDetailsAnnotations)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function RuleDetailsAnnotations(props) {
  const {
    annotations
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  if (annotations.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: styles.annotations,
    children: annotations.map(([key, value]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_3__.AnnotationDetailsField, {
      annotationKey: key,
      value: value
    }, key))
  });
}

const getStyles = () => ({
  annotations: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: 46px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsDataSources": () => (/* binding */ RuleDetailsDataSources)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











function RuleDetailsDataSources(props) {
  const {
    rulesSource,
    rule
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const dataSources = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isCloudRulesSource)(rulesSource)) {
      return [{
        name: rulesSource.name,
        icon: rulesSource.meta.info.logos.small
      }];
    }

    if ((0,_utils_rules__WEBPACK_IMPORTED_MODULE_6__.isGrafanaRulerRule)(rule.rulerRule)) {
      const {
        data
      } = rule.rulerRule.grafana_alert;
      const unique = data.reduce((dataSources, query) => {
        const ds = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);

        if (!ds || ds.uid === app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_4__.ExpressionDatasourceUID) {
          return dataSources;
        }

        dataSources[ds.name] = {
          name: ds.name,
          icon: ds.meta.info.logos.small
        };
        return dataSources;
      }, {});
      return Object.values(unique);
    }

    return [];
  }, [rule, rulesSource]);

  if (dataSources.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_7__.DetailsField, {
    label: "Data source",
    children: dataSources.map(({
      name,
      icon
    }, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: [icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
          alt: `${name} datasource logo`,
          className: styles.dataSourceIcon,
          src: icon
        }), ' ']
      }), name]
    }, name))
  });
}

function getStyles(theme) {
  const size = theme.spacing(2);
  return {
    dataSourceIcon: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: ${size};
      height: ${size};
    `
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsExpression": () => (/* binding */ RuleDetailsExpression)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _Expression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/Expression.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");






function RuleDetailsExpression(props) {
  const {
    annotations,
    rulesSource,
    rule
  } = props;
  const styles = getStyles();

  if (!(0,_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.isCloudRulesSource)(rulesSource)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_3__.DetailsField, {
    label: "Expression",
    horizontal: true,
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)({
      [styles.exprRow]: !!annotations.length
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Expression__WEBPACK_IMPORTED_MODULE_4__.Expression, {
      expression: rule.query,
      rulesSource: rulesSource
    })
  });
}

const getStyles = () => ({
  exprRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 46px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsFederatedSources.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsFederatedSources": () => (/* binding */ RuleDetailsFederatedSources)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const RuleDetailsFederatedSources = ({
  group
}) => {
  var _group$source_tenants;

  const sourceTenants = (_group$source_tenants = group.source_tenants) !== null && _group$source_tenants !== void 0 ? _group$source_tenants : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_1__.DetailsField, {
    label: "Tenant sources",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: sourceTenants.map(tenant => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        children: tenant
      }, tenant))
    })
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleDetailsMatchingInstances": () => (/* binding */ RuleDetailsMatchingInstances)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_features_alerting_unified_components_alert_groups_MatcherFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx");
/* harmony import */ var app_features_alerting_unified_components_rules_AlertInstanceStateFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertInstanceStateFilter.tsx");
/* harmony import */ var app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var app_plugins_panel_alertlist_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/alertlist/types.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _AlertInstancesTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertInstancesTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");













function RuleDetailsMatchingInstances(props) {
  const {
    promRule
  } = props;
  const [queryString, setQueryString] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [alertState, setAlertState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); // This key is used to force a rerender on the inputs when the filters are cleared

  const [filterKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.floor(Math.random() * 100));
  const queryStringKey = `queryString-${filterKey}`;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles)(getStyles);
  const alerts = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _promRule$alerts;

    return (0,_utils_rules__WEBPACK_IMPORTED_MODULE_8__.isAlertingRule)(promRule) && (_promRule$alerts = promRule.alerts) !== null && _promRule$alerts !== void 0 && _promRule$alerts.length ? filterAlerts(queryString, alertState, (0,app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_6__.sortAlerts)(app_plugins_panel_alertlist_types__WEBPACK_IMPORTED_MODULE_7__.SortOrder.Importance, promRule.alerts)) : [];
  }, [promRule, alertState, queryString]);

  if (!(0,_utils_rules__WEBPACK_IMPORTED_MODULE_8__.isAlertingRule)(promRule)) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_DetailsField__WEBPACK_IMPORTED_MODULE_9__.DetailsField, {
    label: "Matching instances",
    horizontal: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.flexRow, styles.spaceBetween),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: styles.flexRow,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_features_alerting_unified_components_alert_groups_MatcherFilter__WEBPACK_IMPORTED_MODULE_3__.MatcherFilter, {
          className: styles.rowChild,
          defaultQueryString: queryString,
          onFilterChange: value => setQueryString(value)
        }, queryStringKey), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(app_features_alerting_unified_components_rules_AlertInstanceStateFilter__WEBPACK_IMPORTED_MODULE_4__.AlertInstanceStateFilter, {
          className: styles.rowChild,
          stateFilter: alertState,
          onStateFilterChange: setAlertState
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_AlertInstancesTable__WEBPACK_IMPORTED_MODULE_10__.AlertInstancesTable, {
      instances: alerts
    })]
  });
}

function filterAlerts(alertInstanceLabel, alertInstanceState, alerts) {
  let filteredAlerts = [...alerts];

  if (alertInstanceLabel) {
    const matchers = (0,app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__.parseMatchers)(alertInstanceLabel || '');
    filteredAlerts = filteredAlerts.filter(({
      labels
    }) => (0,app_features_alerting_unified_utils_alertmanager__WEBPACK_IMPORTED_MODULE_5__.labelsMatchMatchers)(labels, matchers));
  }

  if (alertInstanceState) {
    filteredAlerts = filteredAlerts.filter(alert => {
      return alert.state === alertInstanceState;
    });
  }

  return filteredAlerts;
}

const getStyles = theme => {
  return {
    flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
      margin-bottom: ${theme.spacing.sm};
    `,
    spaceBetween: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      justify-content: space-between;
    `,
    rowChild: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-right: ${theme.spacing.sm};
    `
  };
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleHealth.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleHealth": () => (/* binding */ RuleHealth)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _span;







const RuleHealth = ({
  rule
}) => {
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyle);

  if (rule.health === 'err' || rule.health === 'error') {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      theme: "error",
      content: rule.lastError || 'No error message provided.',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: style.warn,
        children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "exclamation-triangle"
        })), _span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          children: "error"
        }))]
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: rule.health
  });
};

const getStyle = theme => ({
  warn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    display: inline-flex;
    flex-direction: row;
    color: ${theme.colors.warning.text};
    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RuleState.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleState": () => (/* binding */ RuleState)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _AlertStateTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _HorizontalGroup, _HorizontalGroup2;











const RuleState = ({
  rule,
  isDeleting,
  isCreating
}) => {
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyle);
  const {
    promRule
  } = rule; // return how long the rule has been in it's firing state, if any

  const forTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _promRule$alerts;

    if (promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isAlertingRule)(promRule) && (_promRule$alerts = promRule.alerts) !== null && _promRule$alerts !== void 0 && _promRule$alerts.length && promRule.state !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__.PromAlertingRuleState.Inactive) {
      // find earliest alert
      const firstActiveAt = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.getFirstActiveAt)(promRule); // calculate time elapsed from earliest alert

      if (firstActiveAt) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          title: String(firstActiveAt),
          className: style.for,
          children: ["for", ' ', (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.intervalToAbbreviatedDurationString)({
            start: firstActiveAt,
            end: new Date()
          }, false)]
        });
      }
    }

    return null;
  }, [promRule, style]);

  if (isDeleting) {
    return _HorizontalGroup || (_HorizontalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
      align: "flex-start",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Spinner, {}), "deleting"]
    }));
  } else if (isCreating) {
    return _HorizontalGroup2 || (_HorizontalGroup2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
      align: "flex-start",
      children: [' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Spinner, {}), "creating"]
    }));
  } else if (promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isAlertingRule)(promRule)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
      align: "flex-start",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_6__.AlertStateTag, {
        state: promRule.state
      }), forTime]
    });
  } else if (promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isRecordingRule)(promRule)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: "Recording rule"
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: "n/a"
  });
};

const getStyle = theme => ({
  for: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    font-size: ${theme.typography.bodySmall.fontSize};
    color: ${theme.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/StateHistory.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateHistory": () => (/* binding */ StateHistory)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useManagedAlertStateHistory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useManagedAlertStateHistory.ts");
/* harmony import */ var _AlertLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabel.tsx");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var _AlertStateTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder;














const StateHistory = ({
  alertId
}) => {
  const {
    loading,
    error,
    result = []
  } = (0,_hooks_useManagedAlertStateHistory__WEBPACK_IMPORTED_MODULE_5__.useManagedAlertStateHistory)(alertId);

  if (loading && !error) {
    return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LoadingPlaceholder, {
      text: 'Loading history...'
    }));
  }

  if (error && !loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
      title: 'Failed to fetch alert state history',
      children: error.message
    });
  }

  const columns = [{
    id: 'state',
    label: 'State',
    size: 'max-content',
    renderCell: renderStateCell
  }, {
    id: 'value',
    label: '',
    size: 'auto',
    renderCell: renderValueCell
  }, {
    id: 'timestamp',
    label: 'Time',
    size: 'max-content',
    renderCell: renderTimestampCell
  }];
  const items = result.reduce((acc, item, index) => {
    acc.push({
      id: String(item.id),
      state: item.newState,
      text: item.text,
      data: item.data,
      timestamp: item.updated
    }); // if the preceding state is not the same, create a separate state entry – this likely means the state was reset

    if (!hasMatchingPrecedingState(index, result)) {
      acc.push({
        id: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)(),
        state: item.prevState
      });
    }

    return acc;
  }, []).map(historyItem => ({
    id: historyItem.id,
    data: historyItem
  }));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_7__.DynamicTable, {
    cols: columns,
    items: items
  });
};

function renderValueCell(item) {
  var _item$data$data$evalM, _item$data$data;

  const matches = (_item$data$data$evalM = (_item$data$data = item.data.data) === null || _item$data$data === void 0 ? void 0 : _item$data$data.evalMatches) !== null && _item$data$data$evalM !== void 0 ? _item$data$data$evalM : [];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [item.data.text, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(LabelsWrapper, {
      children: matches.map(match => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_AlertLabel__WEBPACK_IMPORTED_MODULE_6__.AlertLabel, {
        labelKey: match.metric,
        value: String(match.value)
      }, match.metric))
    })]
  });
}

function renderStateCell(item) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_8__.AlertStateTag, {
    state: item.data.state
  });
}

function renderTimestampCell(item) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: TimestampStyle,
    children: item.data.timestamp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
      children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTimeFormat)(item.data.timestamp)
    })
  });
}

const LabelsWrapper = ({
  children
}) => {
  const {
    wrapper
  } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: wrapper,
    children: children
  });
};

const TimestampStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const getStyles = theme => ({
  wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    & > * {
      margin-right: ${theme.spacing.xs};
    }
  `
}); // this function will figure out if a given historyItem has a preceding historyItem where the states match - in other words
// the newState of the previous historyItem is the same as the prevState of the current historyItem


function hasMatchingPrecedingState(index, items) {
  const currentHistoryItem = items[index];
  const previousHistoryItem = items[index + 1];

  if (!previousHistoryItem) {
    return false;
  }

  return previousHistoryItem.newState === currentHistoryItem.prevState;
}



/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAlertQueriesStatus": () => (/* binding */ useAlertQueriesStatus)
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCombinedRule": () => (/* binding */ useCombinedRule),
/* harmony export */   "useCombinedRulesMatching": () => (/* binding */ useCombinedRulesMatching)
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
  const combinedRules = (0,_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__.useCombinedRuleNamespaces)(ruleSourceName);
  const rule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!identifier || !ruleSourceName || combinedRules.length === 0) {
      return;
    }

    for (const namespace of combinedRules) {
      for (const group of namespace.groups) {
        for (const rule of group.rules) {
          const id = _utils_rule_id__WEBPACK_IMPORTED_MODULE_4__.fromCombinedRule(ruleSourceName, rule);

          if (_utils_rule_id__WEBPACK_IMPORTED_MODULE_4__.equal(id, identifier)) {
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
  const combinedRules = (0,_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__.useCombinedRuleNamespaces)(ruleSourceName);
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
  const promRuleRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__.useUnifiedAlertingSelector)(state => state.promRules);
  const promRuleRequest = getRequestState(rulesSourceName, promRuleRequests);
  const rulerRuleRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__.useUnifiedAlertingSelector)(state => state.rulerRules);
  const rulerRuleRequest = getRequestState(rulesSourceName, rulerRuleRequests);
  const {
    loading
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(async () => {
    if (!rulesSourceName) {
      return;
    }

    await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__.fetchPromAndRulerRulesAction)({
      rulesSourceName
    }));
  }, [dispatch, rulesSourceName]);
  return {
    loading,
    error: ((_promRuleRequest$erro = promRuleRequest.error) !== null && _promRuleRequest$erro !== void 0 ? _promRuleRequest$erro : (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__.isRulerNotSupportedResponse)(rulerRuleRequest)) ? undefined : rulerRuleRequest.error,
    dispatched: promRuleRequest.dispatched && rulerRuleRequest.dispatched
  };
}

function getRequestState(ruleSourceName, slice) {
  if (!ruleSourceName) {
    return _utils_redux__WEBPACK_IMPORTED_MODULE_3__.initialAsyncRequestState;
  }

  const state = slice[ruleSourceName];

  if (!state) {
    return _utils_redux__WEBPACK_IMPORTED_MODULE_3__.initialAsyncRequestState;
  }

  return state;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flattenGrafanaManagedRules": () => (/* binding */ flattenGrafanaManagedRules),
/* harmony export */   "sortRulesByName": () => (/* binding */ sortRulesByName),
/* harmony export */   "useCombinedRuleNamespaces": () => (/* binding */ useCombinedRuleNamespaces)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");




// this little monster combines prometheus rules and ruler rules to produce a unified data structure
// can limit to a single rules source
function useCombinedRuleNamespaces(rulesSourceName) {
  const promRulesResponses = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.promRules);
  const rulerRulesResponses = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.rulerRules); // cache results per rules source, so we only recalculate those for which results have actually changed

  const cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const rulesSources = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (rulesSourceName) {
      const rulesSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.getRulesSourceByName)(rulesSourceName);

      if (!rulesSource) {
        throw new Error(`Unknown rules source: ${rulesSourceName}`);
      }

      return [rulesSource];
    }

    return (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.getAllRulesSources)();
  }, [rulesSourceName]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => rulesSources.map(rulesSource => {
    var _promRulesResponses$r, _rulerRulesResponses$;

    const rulesSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.isCloudRulesSource)(rulesSource) ? rulesSource.name : rulesSource;
    const promRules = (_promRulesResponses$r = promRulesResponses[rulesSourceName]) === null || _promRulesResponses$r === void 0 ? void 0 : _promRulesResponses$r.result;
    const rulerRules = (_rulerRulesResponses$ = rulerRulesResponses[rulesSourceName]) === null || _rulerRulesResponses$ === void 0 ? void 0 : _rulerRulesResponses$.result;
    const cached = cache.current[rulesSourceName];

    if (cached && cached.promRules === promRules && cached.rulerRules === rulerRules) {
      return cached.result;
    }

    const namespaces = {}; // first get all the ruler rules in

    Object.entries(rulerRules || {}).forEach(([namespaceName, groups]) => {
      const namespace = {
        rulesSource,
        name: namespaceName,
        groups: []
      };
      namespaces[namespaceName] = namespace;
      addRulerGroupsToCombinedNamespace(namespace, groups);
    }); // then correlate with prometheus rules

    promRules === null || promRules === void 0 ? void 0 : promRules.forEach(({
      name: namespaceName,
      groups
    }) => {
      const ns = namespaces[namespaceName] = namespaces[namespaceName] || {
        rulesSource,
        name: namespaceName,
        groups: []
      };
      addPromGroupsToCombinedNamespace(ns, groups);
    });
    const result = Object.values(namespaces);
    cache.current[rulesSourceName] = {
      promRules,
      rulerRules,
      result
    };
    return result;
  }).flat(), [promRulesResponses, rulerRulesResponses, rulesSources]);
} // merge all groups in case of grafana managed, essentially treating namespaces (folders) as groups

function flattenGrafanaManagedRules(namespaces) {
  return namespaces.map(namespace => {
    const newNamespace = Object.assign({}, namespace, {
      groups: []
    }); // add default group with ungrouped rules

    newNamespace.groups.push({
      name: 'default',
      rules: sortRulesByName(namespace.groups.flatMap(group => group.rules))
    });
    return newNamespace;
  });
}
function sortRulesByName(rules) {
  return rules.sort((a, b) => a.name.localeCompare(b.name));
}

function addRulerGroupsToCombinedNamespace(namespace, groups) {
  namespace.groups = groups.map(group => {
    const combinedGroup = {
      name: group.name,
      interval: group.interval,
      source_tenants: group.source_tenants,
      rules: []
    };
    combinedGroup.rules = group.rules.map(rule => rulerRuleToCombinedRule(rule, namespace, combinedGroup));
    return combinedGroup;
  });
}

function addPromGroupsToCombinedNamespace(namespace, groups) {
  groups.forEach(group => {
    var _group$rules;

    let combinedGroup = namespace.groups.find(g => g.name === group.name);

    if (!combinedGroup) {
      combinedGroup = {
        name: group.name,
        rules: []
      };
      namespace.groups.push(combinedGroup);
    }

    ((_group$rules = group.rules) !== null && _group$rules !== void 0 ? _group$rules : []).forEach(rule => {
      const existingRule = getExistingRuleInGroup(rule, combinedGroup, namespace.rulesSource);

      if (existingRule) {
        existingRule.promRule = rule;
      } else {
        combinedGroup.rules.push(promRuleToCombinedRule(rule, namespace, combinedGroup));
      }
    });
  });
}

function promRuleToCombinedRule(rule, namespace, group) {
  return {
    name: rule.name,
    query: rule.query,
    labels: rule.labels || {},
    annotations: (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRule)(rule) ? rule.annotations || {} : {},
    promRule: rule,
    namespace: namespace,
    group
  };
}

function rulerRuleToCombinedRule(rule, namespace, group) {
  return (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRulerRule)(rule) ? {
    name: rule.alert,
    query: rule.expr,
    labels: rule.labels || {},
    annotations: rule.annotations || {},
    rulerRule: rule,
    namespace,
    group
  } : (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isRecordingRulerRule)(rule) ? {
    name: rule.record,
    query: rule.expr,
    labels: rule.labels || {},
    annotations: {},
    rulerRule: rule,
    namespace,
    group
  } : {
    name: rule.grafana_alert.title,
    query: '',
    labels: rule.labels || {},
    annotations: rule.annotations || {},
    rulerRule: rule,
    namespace,
    group
  };
} // find existing rule in group that matches the given prom rule


function getExistingRuleInGroup(rule, group, rulesSource) {
  var _rules$find;

  if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.isGrafanaRulesSource)(rulesSource)) {
    // assume grafana groups have only the one rule. check name anyway because paranoid
    return group.rules.find(existingRule => existingRule.name === rule.name);
  }

  return (// try finding a rule that matches name, labels, annotations and query
    (_rules$find = group.rules.find(existingRule => !existingRule.promRule && isCombinedRuleEqualToPromRule(existingRule, rule, true))) !== null && _rules$find !== void 0 ? _rules$find : // if that fails, try finding a rule that only matches name, labels and annotations.
    // loki & prom can sometimes modify the query so it doesnt match, eg `2 > 1` becomes `1`
    group.rules.find(existingRule => !existingRule.promRule && isCombinedRuleEqualToPromRule(existingRule, rule, false))
  );
}

function isCombinedRuleEqualToPromRule(combinedRule, rule, checkQuery = true) {
  if (combinedRule.name === rule.name) {
    return JSON.stringify([checkQuery ? hashQuery(combinedRule.query) : '', combinedRule.labels, combinedRule.annotations]) === JSON.stringify([checkQuery ? hashQuery(rule.query) : '', rule.labels || {}, (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isAlertingRule)(rule) ? rule.annotations || {} : {}]);
  }

  return false;
} // there can be slight differences in how prom & ruler render a query, this will hash them accounting for the differences


function hashQuery(query) {
  // one of them might be wrapped in parens
  if (query.length > 1 && query[0] === '(' && query[query.length - 1] === ')') {
    query = query.slice(1, -1);
  } // whitespace could be added or removed


  query = query.replace(/\s|\n/g, ''); // labels matchers can be reordered, so sort the enitre string, esentially comparing just the character counts

  return query.split('').sort().join('');
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useFolder.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFolder": () => (/* binding */ useFolder)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useFolder(uid) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const folderRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.folders);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (uid) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__.fetchFolderIfNotFetchedAction)(uid));
    }
  }, [dispatch, uid]);

  if (uid) {
    const request = folderRequests[uid] || _utils_redux__WEBPACK_IMPORTED_MODULE_3__.initialAsyncRequestState;
    return {
      folder: request.result,
      loading: request.loading
    };
  }

  return {
    loading: false
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIsRuleEditable": () => (/* binding */ useIsRuleEditable)
/* harmony export */ });
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _utils_access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _useFolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useIsRuleEditable(rulesSourceName, rule) {
  var _dataSources$rulesSou, _dataSources$rulesSou2, _dataSources$rulesSou3;

  const dataSources = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__.useUnifiedAlertingSelector)(state => state.dataSources);
  const folderUID = rule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isGrafanaRulerRule)(rule) ? rule.grafana_alert.namespace_uid : undefined;
  const rulePermission = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_1__.getRulesPermissions)(rulesSourceName);
  const hasEditPermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasAccess(rulePermission.update, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.isEditor);
  const hasRemovePermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.hasAccess(rulePermission.delete, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__.contextSrv.isEditor);
  const {
    folder,
    loading
  } = (0,_useFolder__WEBPACK_IMPORTED_MODULE_3__.useFolder)(folderUID);

  if (!rule) {
    return {
      isEditable: false,
      isRemovable: false,
      loading: false
    };
  } // grafana rules can be edited if user can edit the folder they're in


  if ((0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__.isGrafanaRulerRule)(rule)) {
    if (!folderUID) {
      throw new Error(`Rule ${rule.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);
    }

    return {
      isEditable: hasEditPermission && (folder === null || folder === void 0 ? void 0 : folder.canSave),
      isRemovable: hasRemovePermission && (folder === null || folder === void 0 ? void 0 : folder.canSave),
      loading
    };
  } // prom rules are only editable by users with Editor role and only if rules source supports editing


  const isRulerAvailable = Boolean((_dataSources$rulesSou = dataSources[rulesSourceName]) === null || _dataSources$rulesSou === void 0 ? void 0 : (_dataSources$rulesSou2 = _dataSources$rulesSou.result) === null || _dataSources$rulesSou2 === void 0 ? void 0 : _dataSources$rulesSou2.rulerConfig);
  return {
    isEditable: hasEditPermission && isRulerAvailable,
    isRemovable: hasRemovePermission && isRulerAvailable,
    loading: (_dataSources$rulesSou3 = dataSources[rulesSourceName]) === null || _dataSources$rulesSou3 === void 0 ? void 0 : _dataSources$rulesSou3.loading
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useManagedAlertStateHistory.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useManagedAlertStateHistory": () => (/* binding */ useManagedAlertStateHistory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");




function useManagedAlertStateHistory(alertId) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const history = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__.useUnifiedAlertingSelector)(state => state.managedAlertStateHistory);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__.fetchGrafanaAnnotationsAction)(alertId));
  }, [dispatch, alertId]);
  return history;
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useStateHistoryModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStateHistoryModal": () => (/* binding */ useStateHistoryModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_rules_StateHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/StateHistory.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function useStateHistoryModal(alertId) {
  var _StateHistory;

  const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const StateHistoryModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    isOpen: showModal,
    onDismiss: () => setShowModal(false),
    closeOnBackdropClick: true,
    closeOnEscape: true,
    title: "State history",
    children: _StateHistory || (_StateHistory = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_rules_StateHistory__WEBPACK_IMPORTED_MODULE_2__.StateHistory, {
      alertId: alertId
    }))
  }), [alertId, showModal]);
  return {
    StateHistoryModal,
    showStateHistoryModal: () => setShowModal(true),
    hideStateHistoryModal: () => setShowModal(false)
  };
}



/***/ }),

/***/ "./public/app/features/alerting/unified/state/AlertingQueryRunner.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertingQueryRunner": () => (/* binding */ AlertingQueryRunner)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/uuid-npm-8.3.2-eca0baba53-5575a8a75c.zip/node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/expressions/guards.ts");
/* harmony import */ var app_features_query_state_processing_canceler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/query/state/processing/canceler.ts");
/* harmony import */ var app_features_query_state_processing_revision__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/query/state/processing/revision.ts");
/* harmony import */ var app_features_query_state_runRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/query/state/runRequest.ts");
/* harmony import */ var _utils_timeRange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/timeRange.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class AlertingQueryRunner {
  constructor(backendSrv = (0,app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_2__.getBackendSrv)(), dataSourceSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)()) {
    this.backendSrv = backendSrv;
    this.dataSourceSrv = dataSourceSrv;

    _defineProperty(this, "subject", void 0);

    _defineProperty(this, "subscription", void 0);

    _defineProperty(this, "lastResult", void 0);

    this.backendSrv = backendSrv;
    this.dataSourceSrv = dataSourceSrv;
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.ReplaySubject(1);
    this.lastResult = {};
  }

  get() {
    return this.subject.asObservable();
  }

  async run(queries) {
    if (queries.length === 0) {
      const empty = initialState(queries, _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done);
      return this.subject.next(empty);
    } // do not execute if one more of the queries are not runnable,
    // for example not completely configured


    for (const query of queries) {
      if (!(0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_3__.isExpressionQuery)(query.model)) {
        const ds = await this.dataSourceSrv.get(query.datasourceUid);

        if (ds.filterQuery && !ds.filterQuery(query.model)) {
          const empty = initialState(queries, _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done);
          return this.subject.next(empty);
        }
      }
    }

    this.subscription = runRequest(this.backendSrv, queries).subscribe({
      next: dataPerQuery => {
        const nextResult = applyChange(dataPerQuery, (refId, data) => {
          const previous = this.lastResult[refId];
          const preProcessed = (0,app_features_query_state_runRequest__WEBPACK_IMPORTED_MODULE_6__.preProcessPanelData)(data, previous);
          return (0,app_features_query_state_processing_revision__WEBPACK_IMPORTED_MODULE_5__.setStructureRevision)(preProcessed, previous);
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
      if (data.state === _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading) {
        requestIsRunning = true;
      }

      return Object.assign({}, data, {
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done
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

const runRequest = (backendSrv, queries) => {
  const initial = initialState(queries, _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Loading);
  const request = {
    data: {
      data: queries
    },
    url: '/api/v1/eval',
    method: 'POST',
    requestId: (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])()
  };
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.withLoadingIndicator)({
    whileLoading: initial,
    source: backendSrv.fetch(request).pipe(mapToPanelData(initial), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(mapErrorToPanelData(initial, error))), (0,app_features_query_state_processing_canceler__WEBPACK_IMPORTED_MODULE_4__.cancelNetworkRequestsOnUnsubscribe)(backendSrv, request.requestId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.share)())
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
  if ((0,app_features_expressions_guards__WEBPACK_IMPORTED_MODULE_3__.isExpressionQuery)(query.model)) {
    const relative = (0,_utils_timeRange__WEBPACK_IMPORTED_MODULE_7__.getTimeRangeForExpression)(query.model, queries);
    return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.rangeUtil.relativeToTimeRange(relative);
  }

  if (!query.relativeTimeRange) {
    console.warn(`Query with refId: ${query.refId} did not have any relative time range, using default.`);
    return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.getDefaultTimeRange)();
  }

  return _grafana_data__WEBPACK_IMPORTED_MODULE_0__.rangeUtil.relativeToTimeRange(query.relativeTimeRange);
};

const mapToPanelData = dataByQuery => {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(response => {
    const {
      data
    } = response;
    const results = {};

    for (const [refId, result] of Object.entries(data.results)) {
      results[refId] = {
        timeRange: dataByQuery[refId].timeRange,
        state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Done,
        series: result.frames.map(_grafana_data__WEBPACK_IMPORTED_MODULE_0__.dataFrameFromJSON)
      };
    }

    return results;
  });
};

const mapErrorToPanelData = (lastResult, error) => {
  const queryError = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.toDataQueryError)(error);
  return applyChange(lastResult, (refId, data) => {
    return Object.assign({}, data, {
      state: _grafana_data__WEBPACK_IMPORTED_MODULE_0__.LoadingState.Error,
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

/***/ "./public/app/features/alerting/unified/utils/query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alertRuleToQueries": () => (/* binding */ alertRuleToQueries)
/* harmony export */ });
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");


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

  if ((0,_datasource__WEBPACK_IMPORTED_MODULE_0__.isGrafanaRulesSource)(rulesSource)) {
    if ((0,_rules__WEBPACK_IMPORTED_MODULE_1__.isGrafanaRulerRule)(rulerRule)) {
      return rulerRule.grafana_alert.data;
    }
  }

  if ((0,_datasource__WEBPACK_IMPORTED_MODULE_0__.isCloudRulesSource)(rulesSource)) {
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

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/timeRange.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTimeRangeForExpression": () => (/* binding */ getTimeRangeForExpression)
/* harmony export */ });
/* harmony import */ var _expressions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/expressions/types.ts");

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
    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.classic:
      return getReferencedIdsForClassicCondition(model);

    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.math:
      return getReferencedIdsForMath(model, queries);

    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.resample:
    case _expressions_types__WEBPACK_IMPORTED_MODULE_0__.ExpressionQueryType.reduce:
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

/***/ }),

/***/ "./public/app/features/expressions/guards.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isExpressionQuery": () => (/* binding */ isExpressionQuery)
/* harmony export */ });
/* harmony import */ var _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/expressions/types.ts");


const isExpressionQuery = dataQuery => {
  if (!dataQuery) {
    return false;
  }

  if ((0,_grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_0__.isExpressionReference)(dataQuery.datasource)) {
    return true;
  }

  const expression = dataQuery;

  if (typeof expression.type !== 'string') {
    return false;
  }

  return Object.values(_types__WEBPACK_IMPORTED_MODULE_1__.ExpressionQueryType).includes(expression.type);
};

/***/ }),

/***/ "./public/app/plugins/datasource/loki/syntax.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FUNCTIONS": () => (/* binding */ FUNCTIONS),
/* harmony export */   "LOKI_KEYWORDS": () => (/* binding */ LOKI_KEYWORDS),
/* harmony export */   "PIPE_OPERATORS": () => (/* binding */ PIPE_OPERATORS),
/* harmony export */   "PIPE_PARSERS": () => (/* binding */ PIPE_PARSERS),
/* harmony export */   "RANGE_VEC_FUNCTIONS": () => (/* binding */ RANGE_VEC_FUNCTIONS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "lokiGrammar": () => (/* binding */ lokiGrammar)
/* harmony export */ });
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
  label: 'bottomk',
  insertText: 'bottomk',
  documentation: 'Smallest k elements by sample value'
}, {
  label: 'topk',
  insertText: 'topk',
  documentation: 'Largest k elements by sample value'
}];
const PIPE_PARSERS = [{
  label: 'json',
  insertText: 'json',
  documentation: 'Extracting labels from the log line using json parser. Only available in Loki 2.0+.'
}, {
  label: 'regexp',
  insertText: 'regexp ""',
  documentation: 'Extracting labels from the log line using regexp parser. Only available in Loki 2.0+.',
  move: -1
}, {
  label: 'logfmt',
  insertText: 'logfmt',
  documentation: 'Extracting labels from the log line using logfmt parser. Only available in Loki 2.0+.'
}, {
  label: 'pattern',
  insertText: 'pattern',
  documentation: 'Extracting labels from the log line using pattern parser. Only available in Loki 2.3+.'
}];
const PIPE_OPERATORS = [{
  label: 'unwrap',
  insertText: 'unwrap',
  detail: 'unwrap identifier',
  documentation: 'Take labels and use the values as sample data for metric aggregations. Only available in Loki 2.0+.'
}, {
  label: 'unpack',
  insertText: 'unpack',
  detail: 'unpack identifier',
  documentation: 'Parses a JSON log line, unpacking all embedded labels in the pack stage. A special property "_entry" will also be used to replace the original log line. Only available in Loki 2.0+.'
}, {
  label: 'label_format',
  insertText: 'label_format',
  documentation: 'Use to rename, modify or add labels. For example, | label_format foo=bar . Only available in Loki 2.0+.'
}, {
  label: 'line_format',
  insertText: 'line_format',
  documentation: 'Rewrites log line content. For example, | line_format "{{.query}} {{.duration}}" . Only available in Loki 2.0+.'
}];
const RANGE_VEC_FUNCTIONS = [{
  insertText: 'avg_over_time',
  label: 'avg_over_time',
  detail: 'avg_over_time(range-vector)',
  documentation: 'The average of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'min_over_time',
  label: 'min_over_time',
  detail: 'min_over_time(range-vector)',
  documentation: 'The minimum of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'max_over_time',
  label: 'max_over_time',
  detail: 'max_over_time(range-vector)',
  documentation: 'The maximum of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'sum_over_time',
  label: 'sum_over_time',
  detail: 'sum_over_time(range-vector)',
  documentation: 'The sum of all values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'count_over_time',
  label: 'count_over_time',
  detail: 'count_over_time(range-vector)',
  documentation: 'The count of all values in the specified interval.'
}, {
  insertText: 'stdvar_over_time',
  label: 'stdvar_over_time',
  detail: 'stdvar_over_time(range-vector)',
  documentation: 'The population standard variance of the values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'stddev_over_time',
  label: 'stddev_over_time',
  detail: 'stddev_over_time(range-vector)',
  documentation: 'The population standard deviation of the values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'quantile_over_time',
  label: 'quantile_over_time',
  detail: 'quantile_over_time(scalar, range-vector)',
  documentation: 'The φ-quantile (0 ≤ φ ≤ 1) of the values in the specified interval. Only available in Loki 2.0+.'
}, {
  insertText: 'bytes_over_time',
  label: 'bytes_over_time',
  detail: 'bytes_over_time(range-vector)',
  documentation: 'Counts the amount of bytes used by each log stream for a given range'
}, {
  insertText: 'bytes_rate',
  label: 'bytes_rate',
  detail: 'bytes_rate(range-vector)',
  documentation: 'Calculates the number of bytes per second for each stream.'
}, {
  insertText: 'rate',
  label: 'rate',
  detail: 'rate(v range-vector)',
  documentation: 'Calculates the number of entries per second.'
}];
const FUNCTIONS = [...AGGREGATION_OPERATORS, ...RANGE_VEC_FUNCTIONS];
const LOKI_KEYWORDS = [...FUNCTIONS, ...PIPE_OPERATORS, ...PIPE_PARSERS].map(keyword => keyword.label);
const lokiGrammar = {
  comment: {
    pattern: /#.*/
  },
  'context-aggregation': {
    pattern: /((without|by)\s*)\([^)]*\)/,
    // by ()
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
        pattern: /[a-zA-Z_]\w*(?=\s*(=|!=|=~|!~))/,
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
  'context-pipe': {
    pattern: /\s\|[^=~]\s?\w*/i,
    inside: {
      'pipe-operator': {
        pattern: /\|/i,
        alias: 'operator'
      },
      'pipe-operations': {
        pattern: new RegExp(`${[...PIPE_PARSERS, ...PIPE_OPERATORS].map(f => f.label).join('|')}`, 'i'),
        alias: 'keyword'
      }
    }
  },
  function: new RegExp(`\\b(?:${FUNCTIONS.map(f => f.label).join('|')})(?=\\s*\\()`, 'i'),
  'context-range': [{
    pattern: /\[[^\]]*(?=\])/,
    // [1m]
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }, {
    pattern: /(offset\s+)\w+/,
    // offset 1m
    lookbehind: true,
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }],
  quote: {
    pattern: /"(?:\\.|[^\\"])*"/,
    alias: 'string',
    greedy: true
  },
  backticks: {
    pattern: /`(?:\\.|[^\\`])*`/,
    alias: 'string',
    greedy: true
  },
  number: /\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,
  operator: /\s?(\|[=~]?|!=?|<(?:=>?|<|>)?|>[>=]?)\s?/i,
  punctuation: /[{}(),.]/
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lokiGrammar);

/***/ }),

/***/ "./public/app/plugins/datasource/prometheus/promql.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FUNCTIONS": () => (/* binding */ FUNCTIONS),
/* harmony export */   "LOGICAL_OPERATORS": () => (/* binding */ LOGICAL_OPERATORS),
/* harmony export */   "OPERATORS": () => (/* binding */ OPERATORS),
/* harmony export */   "PROM_KEYWORDS": () => (/* binding */ PROM_KEYWORDS),
/* harmony export */   "RATE_RANGES": () => (/* binding */ RATE_RANGES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "promqlGrammar": () => (/* binding */ promqlGrammar)
/* harmony export */ });
// When changing RATE_RANGES, check if Loki/LogQL ranges should be changed too
// @see public/app/plugins/datasource/loki/language_provider.ts
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
    // by ()
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
    // [1m]
    inside: {
      'range-duration': {
        pattern: /\b\d+[smhdwy]\b/i,
        alias: 'number'
      }
    }
  }, {
    pattern: /(offset\s+)\w+/,
    // offset 1m
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (promqlGrammar);

/***/ }),

/***/ "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


function useObservable(observable$, initialValue) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue), value = _a[0], update = _a[1];
    (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useObservable);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDBCO0FBK0RwQzJILEVBQUFBLFdBQVcsRUFBRTtBQS9EdUIsQ0FBL0I7QUFrRVAsaUVBQWVlLGFBQWY7Ozs7Ozs7Ozs7Ozs7QUNqbEJpQztBQUNtQztBQUNwRTtBQUNBLGFBQWEsK0NBQVE7QUFDckIsSUFBSSxzRUFBeUI7QUFDN0I7QUFDQSw2QkFBNkI7QUFDN0IsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL1J1bGVWaWV3ZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9BdXRob3JpemUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9FeHByZXNzaW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvUGFuZWxQbHVnaW5zQnV0dG9uR3JvdXAudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbGVydC1ncm91cHMvTWF0Y2hlckZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGUtdmlld2VyL1J1bGVWaWV3ZXJMYXlvdXQudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlLXZpZXdlci9SdWxlVmlld2VyVmlzdWFsaXphdGlvbi50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL0FsZXJ0SW5zdGFuY2VTdGF0ZUZpbHRlci50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVEZXRhaWxzQWN0aW9uQnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVEZXRhaWxzQW5ub3RhdGlvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlsc0RhdGFTb3VyY2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNFeHByZXNzaW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNGZWRlcmF0ZWRTb3VyY2VzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNNYXRjaGluZ0luc3RhbmNlcy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL3J1bGVzL1J1bGVIZWFsdGgudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9SdWxlU3RhdGUudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9TdGF0ZUhpc3RvcnkudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQWxlcnRRdWVyaWVzU3RhdHVzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29tYmluZWRSdWxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUZvbGRlci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUlzUnVsZUVkaXRhYmxlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlU3RhdGVIaXN0b3J5TW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvc3RhdGUvQWxlcnRpbmdRdWVyeVJ1bm5lci50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3V0aWxzL3F1ZXJ5LnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvdGltZVJhbmdlLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL2d1YXJkcy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbG9raS9zeW50YXgudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvcGx1Z2lucy9kYXRhc291cmNlL3Byb21ldGhldXMvcHJvbXFsLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi8ueWFybi9fX3ZpcnR1YWxfXy9yZWFjdC11c2UtdmlydHVhbC0wMDMyNmU3MGJhLzAvY2FjaGUvcmVhY3QtdXNlLW5wbS0xNy4zLjItYTAzMmNiZWIwMS03Mzc5NDYwZjUxLnppcC9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2VzbS91c2VPYnNlcnZhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VPYnNlcnZhYmxlIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgTG9hZGluZ1N0YXRlLCBQYW5lbERhdGEgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7XG4gIEFsZXJ0LFxuICBCdXR0b24sXG4gIEljb24sXG4gIExvYWRpbmdQbGFjZWhvbGRlcixcbiAgUGFuZWxDaHJvbWVMb2FkaW5nSW5kaWNhdG9yLFxuICB1c2VTdHlsZXMyLFxuICBWZXJ0aWNhbEdyb3VwLFxuICB3aXRoRXJyb3JCb3VuZGFyeSxcbn0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdhcHAvY29yZS9uYXZpZ2F0aW9uL3R5cGVzJztcblxuaW1wb3J0IHsgQWxlcnRRdWVyeSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgQWxlcnRMYWJlbHMgfSBmcm9tICcuL2NvbXBvbmVudHMvQWxlcnRMYWJlbHMnO1xuaW1wb3J0IHsgRGV0YWlsc0ZpZWxkIH0gZnJvbSAnLi9jb21wb25lbnRzL0RldGFpbHNGaWVsZCc7XG5pbXBvcnQgeyBSdWxlVmlld2VyTGF5b3V0LCBSdWxlVmlld2VyTGF5b3V0Q29udGVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ydWxlLXZpZXdlci9SdWxlVmlld2VyTGF5b3V0JztcbmltcG9ydCB7IFJ1bGVWaWV3ZXJWaXN1YWxpemF0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGUtdmlld2VyL1J1bGVWaWV3ZXJWaXN1YWxpemF0aW9uJztcbmltcG9ydCB7IFJ1bGVEZXRhaWxzQWN0aW9uQnV0dG9ucyB9IGZyb20gJy4vY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlsc0FjdGlvbkJ1dHRvbnMnO1xuaW1wb3J0IHsgUnVsZURldGFpbHNBbm5vdGF0aW9ucyB9IGZyb20gJy4vY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlsc0Fubm90YXRpb25zJztcbmltcG9ydCB7IFJ1bGVEZXRhaWxzRGF0YVNvdXJjZXMgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNEYXRhU291cmNlcyc7XG5pbXBvcnQgeyBSdWxlRGV0YWlsc0V4cHJlc3Npb24gfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZURldGFpbHNFeHByZXNzaW9uJztcbmltcG9ydCB7IFJ1bGVEZXRhaWxzRmVkZXJhdGVkU291cmNlcyB9IGZyb20gJy4vY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlsc0ZlZGVyYXRlZFNvdXJjZXMnO1xuaW1wb3J0IHsgUnVsZURldGFpbHNNYXRjaGluZ0luc3RhbmNlcyB9IGZyb20gJy4vY29tcG9uZW50cy9ydWxlcy9SdWxlRGV0YWlsc01hdGNoaW5nSW5zdGFuY2VzJztcbmltcG9ydCB7IFJ1bGVIZWFsdGggfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZUhlYWx0aCc7XG5pbXBvcnQgeyBSdWxlU3RhdGUgfSBmcm9tICcuL2NvbXBvbmVudHMvcnVsZXMvUnVsZVN0YXRlJztcbmltcG9ydCB7IHVzZUFsZXJ0UXVlcmllc1N0YXR1cyB9IGZyb20gJy4vaG9va3MvdXNlQWxlcnRRdWVyaWVzU3RhdHVzJztcbmltcG9ydCB7IHVzZUNvbWJpbmVkUnVsZSB9IGZyb20gJy4vaG9va3MvdXNlQ29tYmluZWRSdWxlJztcbmltcG9ydCB7IEFsZXJ0aW5nUXVlcnlSdW5uZXIgfSBmcm9tICcuL3N0YXRlL0FsZXJ0aW5nUXVlcnlSdW5uZXInO1xuaW1wb3J0IHsgZ2V0UnVsZXNTb3VyY2VCeU5hbWUgfSBmcm9tICcuL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgYWxlcnRSdWxlVG9RdWVyaWVzIH0gZnJvbSAnLi91dGlscy9xdWVyeSc7XG5pbXBvcnQgKiBhcyBydWxlSWQgZnJvbSAnLi91dGlscy9ydWxlLWlkJztcbmltcG9ydCB7IGlzRmVkZXJhdGVkUnVsZUdyb3VwIH0gZnJvbSAnLi91dGlscy9ydWxlcyc7XG5cbnR5cGUgUnVsZVZpZXdlclByb3BzID0gR3JhZmFuYVJvdXRlQ29tcG9uZW50UHJvcHM8eyBpZD86IHN0cmluZzsgc291cmNlTmFtZT86IHN0cmluZyB9PjtcblxuY29uc3QgZXJyb3JNZXNzYWdlID0gJ0NvdWxkIG5vdCBmaW5kIGRhdGEgc291cmNlIGZvciBydWxlJztcbmNvbnN0IGVycm9yVGl0bGUgPSAnQ291bGQgbm90IHZpZXcgcnVsZSc7XG5jb25zdCBwYWdlVGl0bGUgPSAnQWxlcnRpbmcgLyBWaWV3IHJ1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZVZpZXdlcih7IG1hdGNoIH06IFJ1bGVWaWV3ZXJQcm9wcykge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgaWQsIHNvdXJjZU5hbWUgfSA9IG1hdGNoLnBhcmFtcztcbiAgY29uc3QgaWRlbnRpZmllciA9IHJ1bGVJZC50cnlQYXJzZShpZCwgdHJ1ZSk7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIHJlc3VsdDogcnVsZSB9ID0gdXNlQ29tYmluZWRSdWxlKGlkZW50aWZpZXIsIHNvdXJjZU5hbWUpO1xuICBjb25zdCBydW5uZXIgPSB1c2VNZW1vKCgpID0+IG5ldyBBbGVydGluZ1F1ZXJ5UnVubmVyKCksIFtdKTtcbiAgY29uc3QgZGF0YSA9IHVzZU9ic2VydmFibGUocnVubmVyLmdldCgpKTtcbiAgY29uc3QgcXVlcmllczIgPSB1c2VNZW1vKCgpID0+IGFsZXJ0UnVsZVRvUXVlcmllcyhydWxlKSwgW3J1bGVdKTtcbiAgY29uc3QgW3F1ZXJpZXMsIHNldFF1ZXJpZXNdID0gdXNlU3RhdGU8QWxlcnRRdWVyeVtdPihbXSk7XG5cbiAgY29uc3QgeyBhbGxEYXRhU291cmNlc0F2YWlsYWJsZSB9ID0gdXNlQWxlcnRRdWVyaWVzU3RhdHVzKHF1ZXJpZXMyKTtcblxuICBjb25zdCBvblJ1blF1ZXJpZXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHF1ZXJpZXMubGVuZ3RoID4gMCAmJiBhbGxEYXRhU291cmNlc0F2YWlsYWJsZSkge1xuICAgICAgcnVubmVyLnJ1bihxdWVyaWVzKTtcbiAgICB9XG4gIH0sIFtxdWVyaWVzLCBydW5uZXIsIGFsbERhdGFTb3VyY2VzQXZhaWxhYmxlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRRdWVyaWVzKHF1ZXJpZXMyKTtcbiAgfSwgW3F1ZXJpZXMyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUpIHtcbiAgICAgIG9uUnVuUXVlcmllcygpO1xuICAgIH1cbiAgfSwgW29uUnVuUXVlcmllcywgYWxsRGF0YVNvdXJjZXNBdmFpbGFibGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiAoKSA9PiBydW5uZXIuZGVzdHJveSgpO1xuICB9LCBbcnVubmVyXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VRdWVyeSA9IHVzZUNhbGxiYWNrKChxdWVyeTogQWxlcnRRdWVyeSkgPT4ge1xuICAgIHNldFF1ZXJpZXMoKHF1ZXJpZXMpID0+XG4gICAgICBxdWVyaWVzLm1hcCgocSkgPT4ge1xuICAgICAgICBpZiAocS5yZWZJZCA9PT0gcXVlcnkucmVmSWQpIHtcbiAgICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHE7XG4gICAgICB9KVxuICAgICk7XG4gIH0sIFtdKTtcblxuICBpZiAoIXNvdXJjZU5hbWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJ1bGVWaWV3ZXJMYXlvdXQgdGl0bGU9e3BhZ2VUaXRsZX0+XG4gICAgICAgIDxBbGVydCB0aXRsZT17ZXJyb3JUaXRsZX0+XG4gICAgICAgICAgPGRldGFpbHMgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JNZXNzYWdlfT57ZXJyb3JNZXNzYWdlfTwvZGV0YWlscz5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgIDwvUnVsZVZpZXdlckxheW91dD5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgcnVsZXNTb3VyY2UgPSBnZXRSdWxlc1NvdXJjZUJ5TmFtZShzb3VyY2VOYW1lKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8UnVsZVZpZXdlckxheW91dCB0aXRsZT17cGFnZVRpdGxlfT5cbiAgICAgICAgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PVwiTG9hZGluZyBydWxlLi4uXCIgLz5cbiAgICAgIDwvUnVsZVZpZXdlckxheW91dD5cbiAgICApO1xuICB9XG5cbiAgaWYgKGVycm9yIHx8ICFydWxlc1NvdXJjZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8UnVsZVZpZXdlckxheW91dCB0aXRsZT17cGFnZVRpdGxlfT5cbiAgICAgICAgPEFsZXJ0IHRpdGxlPXtlcnJvclRpdGxlfT5cbiAgICAgICAgICA8ZGV0YWlscyBjbGFzc05hbWU9e3N0eWxlcy5lcnJvck1lc3NhZ2V9PlxuICAgICAgICAgICAge2Vycm9yPy5tZXNzYWdlID8/IGVycm9yTWVzc2FnZX1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgeyEhZXJyb3I/LnN0YWNrICYmIGVycm9yLnN0YWNrfVxuICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgIDwvUnVsZVZpZXdlckxheW91dD5cbiAgICApO1xuICB9XG5cbiAgaWYgKCFydWxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSdWxlVmlld2VyTGF5b3V0IHRpdGxlPXtwYWdlVGl0bGV9PlxuICAgICAgICA8c3Bhbj5SdWxlIGNvdWxkIG5vdCBiZSBmb3VuZC48L3NwYW4+XG4gICAgICA8L1J1bGVWaWV3ZXJMYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGFubm90YXRpb25zID0gT2JqZWN0LmVudHJpZXMocnVsZS5hbm5vdGF0aW9ucykuZmlsdGVyKChbXywgdmFsdWVdKSA9PiAhIXZhbHVlLnRyaW0oKSk7XG4gIGNvbnN0IGlzRmVkZXJhdGVkUnVsZSA9IGlzRmVkZXJhdGVkUnVsZUdyb3VwKHJ1bGUuZ3JvdXApO1xuXG4gIHJldHVybiAoXG4gICAgPFJ1bGVWaWV3ZXJMYXlvdXQgd3JhcEluQ29udGVudD17ZmFsc2V9IHRpdGxlPXtwYWdlVGl0bGV9PlxuICAgICAge2lzRmVkZXJhdGVkUnVsZSAmJiAoXG4gICAgICAgIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT1cIlRoaXMgcnVsZSBpcyBwYXJ0IG9mIGEgZmVkZXJhdGVkIHJ1bGUgZ3JvdXAuXCI+XG4gICAgICAgICAgPFZlcnRpY2FsR3JvdXA+XG4gICAgICAgICAgICBGZWRlcmF0ZWQgcnVsZSBncm91cHMgYXJlIGN1cnJlbnRseSBhbiBleHBlcmltZW50YWwgZmVhdHVyZS5cbiAgICAgICAgICAgIDxCdXR0b24gZmlsbD1cInRleHRcIiBpY29uPVwiYm9va1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9kb2NzL21ldHJpY3MtZW50ZXJwcmlzZS9sYXRlc3QvdGVuYW50LW1hbmFnZW1lbnQvdGVuYW50LWZlZGVyYXRpb24vI2Nyb3NzLXRlbmFudC1hbGVydGluZy1hbmQtcmVjb3JkaW5nLXJ1bGUtZmVkZXJhdGlvblwiPlxuICAgICAgICAgICAgICAgIFJlYWQgZG9jdW1lbnRhdGlvblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgICAgPFJ1bGVWaWV3ZXJMYXlvdXRDb250ZW50PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoND5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJiZWxsXCIgc2l6ZT1cImxnXCIgLz4ge3J1bGUubmFtZX1cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDxSdWxlU3RhdGUgcnVsZT17cnVsZX0gaXNDcmVhdGluZz17ZmFsc2V9IGlzRGVsZXRpbmc9e2ZhbHNlfSAvPlxuICAgICAgICAgIDxSdWxlRGV0YWlsc0FjdGlvbkJ1dHRvbnMgcnVsZT17cnVsZX0gcnVsZXNTb3VyY2U9e3J1bGVzU291cmNlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRTaWRlfT5cbiAgICAgICAgICAgIHtydWxlLnByb21SdWxlICYmIChcbiAgICAgICAgICAgICAgPERldGFpbHNGaWVsZCBsYWJlbD1cIkhlYWx0aFwiIGhvcml6b250YWw9e3RydWV9PlxuICAgICAgICAgICAgICAgIDxSdWxlSGVhbHRoIHJ1bGU9e3J1bGUucHJvbVJ1bGV9IC8+XG4gICAgICAgICAgICAgIDwvRGV0YWlsc0ZpZWxkPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshIXJ1bGUubGFiZWxzICYmICEhT2JqZWN0LmtleXMocnVsZS5sYWJlbHMpLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgIDxEZXRhaWxzRmllbGQgbGFiZWw9XCJMYWJlbHNcIiBob3Jpem9udGFsPXt0cnVlfT5cbiAgICAgICAgICAgICAgICA8QWxlcnRMYWJlbHMgbGFiZWxzPXtydWxlLmxhYmVsc30gLz5cbiAgICAgICAgICAgICAgPC9EZXRhaWxzRmllbGQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFJ1bGVEZXRhaWxzRXhwcmVzc2lvbiBydWxlc1NvdXJjZT17cnVsZXNTb3VyY2V9IHJ1bGU9e3J1bGV9IGFubm90YXRpb25zPXthbm5vdGF0aW9uc30gLz5cbiAgICAgICAgICAgIDxSdWxlRGV0YWlsc0Fubm90YXRpb25zIGFubm90YXRpb25zPXthbm5vdGF0aW9uc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0U2lkZX0+XG4gICAgICAgICAgICA8UnVsZURldGFpbHNEYXRhU291cmNlcyBydWxlPXtydWxlfSBydWxlc1NvdXJjZT17cnVsZXNTb3VyY2V9IC8+XG4gICAgICAgICAgICB7aXNGZWRlcmF0ZWRSdWxlICYmIDxSdWxlRGV0YWlsc0ZlZGVyYXRlZFNvdXJjZXMgZ3JvdXA9e3J1bGUuZ3JvdXB9IC8+fVxuICAgICAgICAgICAgPERldGFpbHNGaWVsZCBsYWJlbD1cIk5hbWVzcGFjZSAvIEdyb3VwXCI+e2Ake3J1bGUubmFtZXNwYWNlLm5hbWV9IC8gJHtydWxlLmdyb3VwLm5hbWV9YH08L0RldGFpbHNGaWVsZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFJ1bGVEZXRhaWxzTWF0Y2hpbmdJbnN0YW5jZXMgcHJvbVJ1bGU9e3J1bGUucHJvbVJ1bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SdWxlVmlld2VyTGF5b3V0Q29udGVudD5cbiAgICAgIHshaXNGZWRlcmF0ZWRSdWxlICYmIGRhdGEgJiYgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWVyaWVzVGl0bGV9PlxuICAgICAgICAgICAgUXVlcnkgcmVzdWx0cyA8UGFuZWxDaHJvbWVMb2FkaW5nSW5kaWNhdG9yIGxvYWRpbmc9e2lzTG9hZGluZyhkYXRhKX0gb25DYW5jZWw9eygpID0+IHJ1bm5lci5jYW5jZWwoKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UnVsZVZpZXdlckxheW91dENvbnRlbnQgcGFkZGluZz17MH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXJpZXN9PlxuICAgICAgICAgICAgICB7cXVlcmllcy5tYXAoKHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtxdWVyeS5yZWZJZH0gY2xhc3NOYW1lPXtzdHlsZXMucXVlcnl9PlxuICAgICAgICAgICAgICAgICAgICA8UnVsZVZpZXdlclZpc3VhbGl6YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YSAmJiBkYXRhW3F1ZXJ5LnJlZklkXX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVF1ZXJ5PXtvbkNoYW5nZVF1ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1J1bGVWaWV3ZXJMYXlvdXRDb250ZW50PlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7IWlzRmVkZXJhdGVkUnVsZSAmJiAhYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUgJiYgKFxuICAgICAgICA8QWxlcnQgdGl0bGU9XCJRdWVyeSBub3QgYXZhaWxhYmxlXCIgc2V2ZXJpdHk9XCJ3YXJuaW5nXCIgY2xhc3NOYW1lPXtzdHlsZXMucXVlcnlXYXJuaW5nfT5cbiAgICAgICAgICBDYW5ub3QgZGlzcGxheSB0aGUgcXVlcnkgcHJldmlldy4gU29tZSBvZiB0aGUgZGF0YSBzb3VyY2VzIHVzZWQgaW4gdGhlIHF1ZXJpZXMgYXJlIG5vdCBhdmFpbGFibGUuXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApfVxuICAgIDwvUnVsZVZpZXdlckxheW91dD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNMb2FkaW5nKGRhdGE6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4pOiBib29sZWFuIHtcbiAgcmV0dXJuICEhT2JqZWN0LnZhbHVlcyhkYXRhKS5maW5kKChkKSA9PiBkLnN0YXRlID09PSBMb2FkaW5nU3RhdGUuTG9hZGluZyk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGVycm9yTWVzc2FnZTogY3NzYFxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIGAsXG4gICAgcXVlcmllczogY3NzYFxuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgYCxcbiAgICBxdWVyaWVzVGl0bGU6IGNzc2BcbiAgICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyLCAwLjUpfTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5Lmg1LmZvbnRTaXplfTtcbiAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGR9O1xuICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUudHlwb2dyYXBoeS5oNS5mb250RmFtaWx5fTtcbiAgICBgLFxuICAgIHF1ZXJ5OiBjc3NgXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLm1lZGl1bX07XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGAsXG4gICAgcXVlcnlXYXJuaW5nOiBjc3NgXG4gICAgICBtYXJnaW46ICR7dGhlbWUuc3BhY2luZyg0LCAwKX07XG4gICAgYCxcbiAgICBkZXRhaWxzOiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBgLFxuICAgIGxlZnRTaWRlOiBjc3NgXG4gICAgICBmbGV4OiAxO1xuICAgIGAsXG4gICAgcmlnaHRTaWRlOiBjc3NgXG4gICAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgYCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhFcnJvckJvdW5kYXJ5KFJ1bGVWaWV3ZXIsIHsgc3R5bGU6ICdwYWdlJyB9KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY29udGV4dFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2NvbnRleHRfc3J2JztcbmltcG9ydCB7IEFjY2Vzc0NvbnRyb2xBY3Rpb24gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG50eXBlIFByb3BzID0ge1xuICBhY3Rpb25zOiBBY2Nlc3NDb250cm9sQWN0aW9uW107XG4gIGZhbGxiYWNrPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBBdXRob3JpemU6IEZDPFByb3BzPiA9ICh7IGFjdGlvbnMsIGNoaWxkcmVuLCBmYWxsYmFjayA9IHRydWUgfSkgPT4ge1xuICBpZiAoYWN0aW9ucy5zb21lKChhY3Rpb24pID0+IGNvbnRleHRTcnYuaGFzQWNjZXNzKGFjdGlvbiwgZmFsbGJhY2spKSkge1xuICAgIHJldHVybiA8PntjaGlsZHJlbn08Lz47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjc3MsIGN4IH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCB7IExhbmd1YWdlTWFwLCBsYW5ndWFnZXMgYXMgcHJpc21MYW5ndWFnZXMgfSBmcm9tICdwcmlzbWpzJztcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tICdAZ3JhZmFuYS9zbGF0ZS1yZWFjdCc7XG5pbXBvcnQgeyBtYWtlVmFsdWUsIFNsYXRlUHJpc20sIHVzZVN0eWxlcyB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBMb2dxbFN5bnRheCBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL2xva2kvc3ludGF4JztcbmltcG9ydCBQcm9tcWxTeW50YXggZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9wcm9tZXRoZXVzL3Byb21xbCc7XG5pbXBvcnQgeyBSdWxlc1NvdXJjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZVR5cGUsIGlzQ2xvdWRSdWxlc1NvdXJjZSB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuXG5pbXBvcnQgeyBXZWxsIH0gZnJvbSAnLi9XZWxsJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZXhwcmVzc2lvbjogc3RyaW5nO1xuICBydWxlc1NvdXJjZTogUnVsZXNTb3VyY2U7XG59XG5cbmV4cG9ydCBjb25zdCBIaWdobGlnaHRlZFF1ZXJ5OiBGQzx7IGxhbmd1YWdlOiAncHJvbXFsJyB8ICdsb2dxbCc7IGV4cHI6IHN0cmluZyB9PiA9ICh7IGxhbmd1YWdlLCBleHByIH0pID0+IHtcbiAgY29uc3QgcGx1Z2lucyA9IHVzZU1lbW8oXG4gICAgKCkgPT4gW1xuICAgICAgU2xhdGVQcmlzbShcbiAgICAgICAge1xuICAgICAgICAgIG9ubHlJbjogKG5vZGU6IGFueSkgPT4gbm9kZS50eXBlID09PSAnY29kZV9ibG9jaycsXG4gICAgICAgICAgZ2V0U3ludGF4OiAoKSA9PiBsYW5ndWFnZSxcbiAgICAgICAgfSxcbiAgICAgICAgeyAuLi4ocHJpc21MYW5ndWFnZXMgYXMgTGFuZ3VhZ2VNYXApLCBbbGFuZ3VhZ2VdOiBsYW5ndWFnZSA9PT0gJ2xvZ3FsJyA/IExvZ3FsU3ludGF4IDogUHJvbXFsU3ludGF4IH1cbiAgICAgICksXG4gICAgXSxcbiAgICBbbGFuZ3VhZ2VdXG4gICk7XG5cbiAgY29uc3Qgc2xhdGVWYWx1ZSA9IHVzZU1lbW8oKCkgPT4gbWFrZVZhbHVlKGV4cHIpLCBbZXhwcl0pO1xuXG4gIHJldHVybiA8RWRpdG9yIHBsdWdpbnM9e3BsdWdpbnN9IHZhbHVlPXtzbGF0ZVZhbHVlfSByZWFkT25seT17dHJ1ZX0gLz47XG59O1xuXG5leHBvcnQgY29uc3QgRXhwcmVzc2lvbjogRkM8UHJvcHM+ID0gKHsgZXhwcmVzc2lvbjogcXVlcnksIHJ1bGVzU291cmNlIH0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzKGdldFN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8V2VsbCBjbGFzc05hbWU9e2N4KHN0eWxlcy53ZWxsLCAnc2xhdGUtcXVlcnktZmllbGQnKX0+XG4gICAgICB7aXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSA/IChcbiAgICAgICAgPEhpZ2hsaWdodGVkUXVlcnkgZXhwcj17cXVlcnl9IGxhbmd1YWdlPXtydWxlc1NvdXJjZS50eXBlID09PSBEYXRhU291cmNlVHlwZS5Mb2tpID8gJ2xvZ3FsJyA6ICdwcm9tcWwnfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgcXVlcnlcbiAgICAgICl9XG4gICAgPC9XZWxsPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lKSA9PiAoe1xuICB3ZWxsOiBjc3NgXG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5Lm1vbm9zcGFjZX07XG4gIGAsXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgUmFkaW9CdXR0b25Hcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgU1RBVCwgVEFCTEUsIFRJTUVTRVJJRVMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuXG5leHBvcnQgdHlwZSBTdXBwb3J0ZWRQYW5lbFBsdWdpbnMgPSAndGltZXNlcmllcycgfCAndGFibGUnIHwgJ3N0YXQnO1xuXG50eXBlIFByb3BzID0ge1xuICB2YWx1ZTogU3VwcG9ydGVkUGFuZWxQbHVnaW5zO1xuICBvbkNoYW5nZTogKHZhbHVlOiBTdXBwb3J0ZWRQYW5lbFBsdWdpbnMpID0+IHZvaWQ7XG4gIHNpemU/OiAnc20nIHwgJ21kJztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQYW5lbFBsdWdpbnNCdXR0b25Hcm91cChwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IHZhbHVlLCBvbkNoYW5nZSwgc2l6ZSA9ICdtZCcgfSA9IHByb3BzO1xuICBjb25zdCBwYW5lbHMgPSB1c2VNZW1vKCgpID0+IGdldFN1cHBvcnRlZFBhbmVscygpLCBbXSk7XG5cbiAgcmV0dXJuIDxSYWRpb0J1dHRvbkdyb3VwIG9wdGlvbnM9e3BhbmVsc30gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IHNpemU9e3NpemV9IC8+O1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0ZWRQYW5lbHMoKTogQXJyYXk8U2VsZWN0YWJsZVZhbHVlPFN1cHBvcnRlZFBhbmVsUGx1Z2lucz4+IHtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoY29uZmlnLnBhbmVscykucmVkdWNlKChwYW5lbHM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxTdXBwb3J0ZWRQYW5lbFBsdWdpbnM+PiwgcGFuZWwpID0+IHtcbiAgICBpZiAoaXNTdXBwb3J0ZWRQYW5lbFBsdWdpbihwYW5lbC5pZCkpIHtcbiAgICAgIHBhbmVscy5wdXNoKHtcbiAgICAgICAgdmFsdWU6IHBhbmVsLmlkLFxuICAgICAgICBsYWJlbDogcGFuZWwubmFtZSxcbiAgICAgICAgaW1nVXJsOiBwYW5lbC5pbmZvLmxvZ29zLnNtYWxsLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwYW5lbHM7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gaXNTdXBwb3J0ZWRQYW5lbFBsdWdpbihpZDogc3RyaW5nKTogaWQgaXMgU3VwcG9ydGVkUGFuZWxQbHVnaW5zIHtcbiAgc3dpdGNoIChpZCkge1xuICAgIGNhc2UgVElNRVNFUklFUzpcbiAgICBjYXNlIFRBQkxFOlxuICAgIGNhc2UgU1RBVDpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJ0BncmFmYW5hL2V4cGVyaW1lbnRhbCc7XG5pbXBvcnQgeyBMYWJlbCwgVG9vbHRpcCwgSW5wdXQsIEljb24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgcXVlcnlTdHJpbmc/OiBzdHJpbmc7XG4gIGRlZmF1bHRRdWVyeVN0cmluZz86IHN0cmluZztcbiAgb25GaWx0ZXJDaGFuZ2U6IChmaWx0ZXJTdHJpbmc6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IE1hdGNoZXJGaWx0ZXIgPSAoeyBjbGFzc05hbWUsIG9uRmlsdGVyQ2hhbmdlLCBkZWZhdWx0UXVlcnlTdHJpbmcsIHF1ZXJ5U3RyaW5nIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGU6IEZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgb25GaWx0ZXJDaGFuZ2UodGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgc2VhcmNoSWNvbiA9IDxJY29uIG5hbWU9eydzZWFyY2gnfSAvPjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxMYWJlbD5cbiAgICAgICAgPFN0YWNrIGdhcD17MC41fT5cbiAgICAgICAgICA8c3Bhbj5TZWFyY2ggYnkgbGFiZWw8L3NwYW4+XG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEZpbHRlciBhbGVydHMgdXNpbmcgbGFiZWwgcXVlcnlpbmcsIGV4OlxuICAgICAgICAgICAgICAgIDxwcmU+e2B7c2V2ZXJpdHk9XCJjcml0aWNhbFwiLCBpbnN0YW5jZT1+XCJjbHVzdGVyLXVzLS4rXCJ9YH08L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gbmFtZT1cImluZm8tY2lyY2xlXCIgc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgICA8L0xhYmVsPlxuICAgICAgPElucHV0XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWZhdWx0UXVlcnlTdHJpbmd9XG4gICAgICAgIHZhbHVlPXtxdWVyeVN0cmluZ31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJzZWFyY2gtcXVlcnktaW5wdXRcIlxuICAgICAgICBwcmVmaXg9e3NlYXJjaEljb259XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0V2lkdGh9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBpY29uOiBjc3NgXG4gICAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gIGAsXG4gIGlucHV0V2lkdGg6IGNzc2BcbiAgICB3aWR0aDogMzQwcHg7XG4gICAgZmxleC1ncm93OiAwO1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBQYWdlVG9vbGJhciwgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfCBSZWFjdC5SZWFjdE5vZGVbXTtcbiAgdGl0bGU6IHN0cmluZztcbiAgd3JhcEluQ29udGVudD86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZVZpZXdlckxheW91dChwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IHdyYXBJbkNvbnRlbnQgPSB0cnVlLCBjaGlsZHJlbiwgdGl0bGUgfSA9IHByb3BzO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFBhZ2VTdHlsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8UGFnZVRvb2xiYXIgdGl0bGU9e3RpdGxlfSBwYWdlSWNvbj1cImJlbGxcIiBvbkdvQmFjaz17KCkgPT4gbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9hbGVydGluZy9saXN0Jyl9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9Pnt3cmFwSW5Db250ZW50ID8gPFJ1bGVWaWV3ZXJMYXlvdXRDb250ZW50IHsuLi5wcm9wc30gLz4gOiBjaGlsZHJlbn08L2Rpdj5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG5cbnR5cGUgQ29udGVudFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIHwgUmVhY3QuUmVhY3ROb2RlW107XG4gIHBhZGRpbmc/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZVZpZXdlckxheW91dENvbnRlbnQoeyBjaGlsZHJlbiwgcGFkZGluZyA9IDIgfTogQ29udGVudFByb3BzKTogSlNYLkVsZW1lbnQgfCBudWxsIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRDb250ZW50U3R5bGVzKHBhZGRpbmcpKTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+e2NoaWxkcmVufTwvZGl2Pjtcbn1cblxuY29uc3QgZ2V0UGFnZVN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IGNzc2BcbiAgICAgIG1hcmdpbjogJHt0aGVtZS5zcGFjaW5nKDAsIDIsIDIpfTtcbiAgICAgIG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50cy52YWx1ZXMueHhsfXB4O1xuICAgIGAsXG4gIH07XG59O1xuXG5jb25zdCBnZXRDb250ZW50U3R5bGVzID0gKHBhZGRpbmc6IG51bWJlcikgPT4gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgd3JhcHBlcjogY3NzYFxuICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZC5wcmltYXJ5fTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlci53ZWFrfTtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzKCl9O1xuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKHBhZGRpbmcpfTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF1dG9TaXplciBmcm9tICdyZWFjdC12aXJ0dWFsaXplZC1hdXRvLXNpemVyJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsIERhdGVUaW1lLCBkYXRlVGltZSwgR3JhZmFuYVRoZW1lMiwgUGFuZWxEYXRhLCB1cmxVdGlsIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGdldERhdGFTb3VyY2VTcnYsIFBhbmVsUmVuZGVyZXIgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IEFsZXJ0LCBDb2RlRWRpdG9yLCBEYXRlVGltZVBpY2tlciwgTGlua0J1dHRvbiwgdXNlU3R5bGVzMiwgdXNlVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgaXNFeHByZXNzaW9uUXVlcnkgfSBmcm9tICdhcHAvZmVhdHVyZXMvZXhwcmVzc2lvbnMvZ3VhcmRzJztcbmltcG9ydCB7IFBhbmVsT3B0aW9ucyB9IGZyb20gJ2FwcC9wbHVnaW5zL3BhbmVsL3RhYmxlL21vZGVscy5nZW4nO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBBbGVydFF1ZXJ5IH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgVEFCTEUsIFRJTUVTRVJJRVMgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQXV0aG9yaXplIH0gZnJvbSAnLi4vQXV0aG9yaXplJztcbmltcG9ydCB7IFBhbmVsUGx1Z2luc0J1dHRvbkdyb3VwLCBTdXBwb3J0ZWRQYW5lbFBsdWdpbnMgfSBmcm9tICcuLi9QYW5lbFBsdWdpbnNCdXR0b25Hcm91cCc7XG5cbnR5cGUgUnVsZVZpZXdlclZpc3VhbGl6YXRpb25Qcm9wcyA9IHtcbiAgZGF0YT86IFBhbmVsRGF0YTtcbiAgcXVlcnk6IEFsZXJ0UXVlcnk7XG4gIG9uQ2hhbmdlUXVlcnk6IChxdWVyeTogQWxlcnRRdWVyeSkgPT4gdm9pZDtcbn07XG5cbmNvbnN0IGhlYWRlckhlaWdodCA9IDQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBSdWxlVmlld2VyVmlzdWFsaXphdGlvbihwcm9wczogUnVsZVZpZXdlclZpc3VhbGl6YXRpb25Qcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUyKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgeyBkYXRhLCBxdWVyeSwgb25DaGFuZ2VRdWVyeSB9ID0gcHJvcHM7XG4gIGNvbnN0IGRlZmF1bHRQYW5lbCA9IGlzRXhwcmVzc2lvblF1ZXJ5KHF1ZXJ5Lm1vZGVsKSA/IFRBQkxFIDogVElNRVNFUklFUztcbiAgY29uc3QgW3BhbmVsLCBzZXRQYW5lbF0gPSB1c2VTdGF0ZTxTdXBwb3J0ZWRQYW5lbFBsdWdpbnM+KGRlZmF1bHRQYW5lbCk7XG4gIGNvbnN0IGRzU2V0dGluZ3MgPSBnZXREYXRhU291cmNlU3J2KCkuZ2V0SW5zdGFuY2VTZXR0aW5ncyhxdWVyeS5kYXRhc291cmNlVWlkKTtcbiAgY29uc3QgcmVsYXRpdmVUaW1lUmFuZ2UgPSBxdWVyeS5yZWxhdGl2ZVRpbWVSYW5nZTtcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGU8UGFuZWxPcHRpb25zPih7XG4gICAgZnJhbWVJbmRleDogMCxcbiAgICBzaG93SGVhZGVyOiB0cnVlLFxuICB9KTtcblxuICBjb25zdCBvblRpbWVDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAobmV3RGF0ZVRpbWU6IERhdGVUaW1lKSA9PiB7XG4gICAgICBjb25zdCBub3cgPSBkYXRlVGltZSgpLnVuaXgoKSAtIG5ld0RhdGVUaW1lLnVuaXgoKTtcblxuICAgICAgaWYgKHJlbGF0aXZlVGltZVJhbmdlKSB7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gcmVsYXRpdmVUaW1lUmFuZ2UuZnJvbSAtIHJlbGF0aXZlVGltZVJhbmdlLnRvO1xuICAgICAgICBvbkNoYW5nZVF1ZXJ5KHtcbiAgICAgICAgICAuLi5xdWVyeSxcbiAgICAgICAgICByZWxhdGl2ZVRpbWVSYW5nZTogeyBmcm9tOiBub3cgKyBpbnRlcnZhbCwgdG86IG5vdyB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtvbkNoYW5nZVF1ZXJ5LCBxdWVyeSwgcmVsYXRpdmVUaW1lUmFuZ2VdXG4gICk7XG5cbiAgY29uc3Qgc2V0RGF0ZVRpbWUgPSB1c2VDYWxsYmFjaygocmVsYXRpdmVUaW1lUmFuZ2VUbzogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHJlbGF0aXZlVGltZVJhbmdlVG8gPT09IDAgPyBkYXRlVGltZSgpIDogZGF0ZVRpbWUoKS5zdWJ0cmFjdChyZWxhdGl2ZVRpbWVSYW5nZVRvLCAnc2Vjb25kcycpO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoIWRzU2V0dGluZ3MpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPEFsZXJ0IHRpdGxlPVwiQ291bGQgbm90IGZpbmQgZGF0YXNvdXJjZSBmb3IgcXVlcnlcIiAvPlxuICAgICAgICA8Q29kZUVkaXRvclxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMjUwcHhcIlxuICAgICAgICAgIGxhbmd1YWdlPVwianNvblwiXG4gICAgICAgICAgc2hvd0xpbmVOdW1iZXJzPXtmYWxzZX1cbiAgICAgICAgICBzaG93TWluaU1hcD17ZmFsc2V9XG4gICAgICAgICAgdmFsdWU9e0pTT04uc3RyaW5naWZ5KHF1ZXJ5LCBudWxsLCAnXFx0Jyl9XG4gICAgICAgICAgcmVhZE9ubHk9e3RydWV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgPEF1dG9TaXplcj5cbiAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAge2BRdWVyeSAke3F1ZXJ5LnJlZklkfWB9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXRhU291cmNlfT4oe2RzU2V0dGluZ3MubmFtZX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30+XG4gICAgICAgICAgICAgICAgICB7IWlzRXhwcmVzc2lvblF1ZXJ5KHF1ZXJ5Lm1vZGVsKSAmJiByZWxhdGl2ZVRpbWVSYW5nZSA/IChcbiAgICAgICAgICAgICAgICAgICAgPERhdGVUaW1lUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0ZT17c2V0RGF0ZVRpbWUocmVsYXRpdmVUaW1lUmFuZ2UudG8pfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblRpbWVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17bmV3IERhdGUoKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgPFBhbmVsUGx1Z2luc0J1dHRvbkdyb3VwIG9uQ2hhbmdlPXtzZXRQYW5lbH0gdmFsdWU9e3BhbmVsfSBzaXplPVwibWRcIiAvPlxuICAgICAgICAgICAgICAgICAgPEF1dGhvcml6ZSBhY3Rpb25zPXtbQWNjZXNzQ29udHJvbEFjdGlvbi5EYXRhU291cmNlc0V4cGxvcmVdfT5cbiAgICAgICAgICAgICAgICAgICAgeyFpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwYWNpbmd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNvbXBhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtjcmVhdGVFeHBsb3JlTGluayhkc1NldHRpbmdzLCBxdWVyeSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgaW4gRXhwbG9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9BdXRob3JpemU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8UGFuZWxSZW5kZXJlclxuICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0IC0gdGhlbWUuc3BhY2luZy5ncmlkU2l6ZSAqIGhlYWRlckhlaWdodH1cbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICBwbHVnaW5JZD17cGFuZWx9XG4gICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgIG9uT3B0aW9uc0NoYW5nZT17c2V0T3B0aW9uc31cbiAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvQXV0b1NpemVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFeHBsb3JlTGluayhzZXR0aW5nczogRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MsIHF1ZXJ5OiBBbGVydFF1ZXJ5KTogc3RyaW5nIHtcbiAgY29uc3QgeyBuYW1lIH0gPSBzZXR0aW5ncztcbiAgY29uc3QgeyByZWZJZCwgLi4ucmVzdCB9ID0gcXVlcnkubW9kZWw7XG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0geyAuLi5yZXN0LCBkYXRhc291cmNlOiBuYW1lIH07XG5cbiAgcmV0dXJuIHVybFV0aWwucmVuZGVyVXJsKGAke2NvbmZpZy5hcHBTdWJVcmx9L2V4cGxvcmVgLCB7XG4gICAgbGVmdDogSlNPTi5zdHJpbmdpZnkoWydub3ctMWgnLCAnbm93JywgbmFtZSwgcXVlcnlQYXJhbXNdKSxcbiAgfSk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICBgLFxuICAgIGhlYWRlcjogY3NzYFxuICAgICAgaGVpZ2h0OiAke3RoZW1lLnNwYWNpbmcoaGVhZGVySGVpZ2h0KX07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgYCxcbiAgICByZWZJZDogY3NzYFxuICAgICAgZm9udC13ZWlnaHQ6ICR7dGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtfTtcbiAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0Lmxpbmt9O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBgLFxuICAgIGRhdGFTb3VyY2U6IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHQuc2Vjb25kYXJ5fTtcbiAgICBgLFxuICAgIGFjdGlvbnM6IGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGAsXG4gICAgc3BhY2luZzogY3NzYFxuICAgICAgcGFkZGluZzogJHt0aGVtZS5zcGFjaW5nKDAsIDEsIDAsIDApfTtcbiAgICBgLFxuICAgIGVycm9yTWVzc2FnZTogY3NzYFxuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgUmFkaW9CdXR0b25Hcm91cCwgTGFiZWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hQWxlcnRTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgc3RhdGVGaWx0ZXI/OiBHcmFmYW5hQWxlcnRTdGF0ZTtcbiAgb25TdGF0ZUZpbHRlckNoYW5nZTogKHZhbHVlOiBHcmFmYW5hQWxlcnRTdGF0ZSB8IHVuZGVmaW5lZCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IEFsZXJ0SW5zdGFuY2VTdGF0ZUZpbHRlciA9ICh7IGNsYXNzTmFtZSwgb25TdGF0ZUZpbHRlckNoYW5nZSwgc3RhdGVGaWx0ZXIgfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3RhdGVPcHRpb25zID0gT2JqZWN0LnZhbHVlcyhHcmFmYW5hQWxlcnRTdGF0ZSkubWFwKCh2YWx1ZSkgPT4gKHtcbiAgICBsYWJlbDogdmFsdWUsXG4gICAgdmFsdWUsXG4gIH0pKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPExhYmVsPlN0YXRlPC9MYWJlbD5cbiAgICAgIDxSYWRpb0J1dHRvbkdyb3VwXG4gICAgICAgIG9wdGlvbnM9e3N0YXRlT3B0aW9uc31cbiAgICAgICAgdmFsdWU9e3N0YXRlRmlsdGVyfVxuICAgICAgICBvbkNoYW5nZT17b25TdGF0ZUZpbHRlckNoYW5nZX1cbiAgICAgICAgb25DbGljaz17KHYpID0+IHtcbiAgICAgICAgICBpZiAodiA9PT0gc3RhdGVGaWx0ZXIpIHtcbiAgICAgICAgICAgIG9uU3RhdGVGaWx0ZXJDaGFuZ2UodW5kZWZpbmVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiwgdXJsVXRpbCB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBCdXR0b24sIENsaXBib2FyZEJ1dHRvbiwgQ29uZmlybU1vZGFsLCBIb3Jpem9udGFsR3JvdXAsIExpbmtCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyB1c2VBcHBOb3RpZmljYXRpb24gfSBmcm9tICdhcHAvY29yZS9jb3B5L2FwcE5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBjb250ZXh0U3J2IH0gZnJvbSAnYXBwL2NvcmUvc2VydmljZXMvY29udGV4dF9zcnYnO1xuaW1wb3J0IHsgQWNjZXNzQ29udHJvbEFjdGlvbiB9IGZyb20gJ2FwcC90eXBlcyc7XG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUsIFJ1bGVzU291cmNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgUnVsZXJHcmFmYW5hUnVsZURUTywgUnVsZXJSdWxlRFRPIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgdXNlSXNSdWxlRWRpdGFibGUgfSBmcm9tICcuLi8uLi9ob29rcy91c2VJc1J1bGVFZGl0YWJsZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZUhpc3RvcnlNb2RhbCB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVN0YXRlSGlzdG9yeU1vZGFsJztcbmltcG9ydCB7IGRlbGV0ZVJ1bGVBY3Rpb24gfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldEFsZXJ0bWFuYWdlckJ5VWlkIH0gZnJvbSAnLi4vLi4vdXRpbHMvYWxlcnRtYW5hZ2VyJztcbmltcG9ydCB7IEFubm90YXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0UnVsZXNTb3VyY2VOYW1lLCBpc0Nsb3VkUnVsZXNTb3VyY2UsIGlzR3JhZmFuYVJ1bGVzU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBjcmVhdGVFeHBsb3JlTGluaywgY3JlYXRlVmlld0xpbmssIG1ha2VSdWxlQmFzZWRTaWxlbmNlTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0ICogYXMgcnVsZUlkIGZyb20gJy4uLy4uL3V0aWxzL3J1bGUtaWQnO1xuaW1wb3J0IHsgaXNGZWRlcmF0ZWRSdWxlR3JvdXAgfSBmcm9tICcuLi8uLi91dGlscy9ydWxlcyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHJ1bGU6IENvbWJpbmVkUnVsZTtcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlO1xufVxuXG5leHBvcnQgY29uc3QgUnVsZURldGFpbHNBY3Rpb25CdXR0b25zOiBGQzxQcm9wcz4gPSAoeyBydWxlLCBydWxlc1NvdXJjZSB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBub3RpZnlBcHAgPSB1c2VBcHBOb3RpZmljYXRpb24oKTtcbiAgY29uc3Qgc3R5bGUgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgbmFtZXNwYWNlLCBncm91cCwgcnVsZXJSdWxlIH0gPSBydWxlO1xuICBjb25zdCBbcnVsZVRvRGVsZXRlLCBzZXRSdWxlVG9EZWxldGVdID0gdXNlU3RhdGU8Q29tYmluZWRSdWxlPigpO1xuICBjb25zdCBhbGVydElkID0gaXNHcmFmYW5hUnVsZXJSdWxlKHJ1bGUucnVsZXJSdWxlKSA/IHJ1bGUucnVsZXJSdWxlLmdyYWZhbmFfYWxlcnQuaWQgPz8gJycgOiAnJztcbiAgY29uc3QgeyBTdGF0ZUhpc3RvcnlNb2RhbCwgc2hvd1N0YXRlSGlzdG9yeU1vZGFsIH0gPSB1c2VTdGF0ZUhpc3RvcnlNb2RhbChhbGVydElkKTtcblxuICBjb25zdCBhbGVydG1hbmFnZXJTb3VyY2VOYW1lID0gaXNHcmFmYW5hUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpXG4gICAgPyBydWxlc1NvdXJjZVxuICAgIDogZ2V0QWxlcnRtYW5hZ2VyQnlVaWQocnVsZXNTb3VyY2UuanNvbkRhdGEuYWxlcnRtYW5hZ2VyVWlkKT8ubmFtZTtcbiAgY29uc3QgcnVsZXNTb3VyY2VOYW1lID0gZ2V0UnVsZXNTb3VyY2VOYW1lKHJ1bGVzU291cmNlKTtcblxuICBjb25zdCBoYXNFeHBsb3JlUGVybWlzc2lvbiA9IGNvbnRleHRTcnYuaGFzUGVybWlzc2lvbihBY2Nlc3NDb250cm9sQWN0aW9uLkRhdGFTb3VyY2VzRXhwbG9yZSk7XG5cbiAgY29uc3QgbGVmdEJ1dHRvbnM6IEpTWC5FbGVtZW50W10gPSBbXTtcbiAgY29uc3QgcmlnaHRCdXR0b25zOiBKU1guRWxlbWVudFtdID0gW107XG5cbiAgY29uc3QgaXNGZWRlcmF0ZWQgPSBpc0ZlZGVyYXRlZFJ1bGVHcm91cChncm91cCk7XG4gIGNvbnN0IHsgaXNFZGl0YWJsZSwgaXNSZW1vdmFibGUgfSA9IHVzZUlzUnVsZUVkaXRhYmxlKHJ1bGVzU291cmNlTmFtZSwgcnVsZXJSdWxlKTtcbiAgY29uc3QgcmV0dXJuVG8gPSBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaDtcbiAgY29uc3QgaXNWaWV3TW9kZSA9IGluVmlld01vZGUobG9jYXRpb24ucGF0aG5hbWUpO1xuXG4gIGNvbnN0IGRlbGV0ZVJ1bGUgPSAoKSA9PiB7XG4gICAgaWYgKHJ1bGVUb0RlbGV0ZSAmJiBydWxlVG9EZWxldGUucnVsZXJSdWxlKSB7XG4gICAgICBjb25zdCBpZGVudGlmaWVyID0gcnVsZUlkLmZyb21SdWxlclJ1bGUoXG4gICAgICAgIGdldFJ1bGVzU291cmNlTmFtZShydWxlVG9EZWxldGUubmFtZXNwYWNlLnJ1bGVzU291cmNlKSxcbiAgICAgICAgcnVsZVRvRGVsZXRlLm5hbWVzcGFjZS5uYW1lLFxuICAgICAgICBydWxlVG9EZWxldGUuZ3JvdXAubmFtZSxcbiAgICAgICAgcnVsZVRvRGVsZXRlLnJ1bGVyUnVsZVxuICAgICAgKTtcblxuICAgICAgZGlzcGF0Y2goZGVsZXRlUnVsZUFjdGlvbihpZGVudGlmaWVyLCB7IG5hdmlnYXRlVG86IGlzVmlld01vZGUgPyAnL2FsZXJ0aW5nL2xpc3QnIDogdW5kZWZpbmVkIH0pKTtcbiAgICAgIHNldFJ1bGVUb0RlbGV0ZSh1bmRlZmluZWQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBidWlsZFNoYXJlVXJsID0gKCkgPT4ge1xuICAgIGlmIChpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpKSB7XG4gICAgICBjb25zdCB7IGFwcFVybCwgYXBwU3ViVXJsIH0gPSBjb25maWc7XG4gICAgICBjb25zdCBiYXNlVXJsID0gYXBwU3ViVXJsICE9PSAnJyA/IGAke2FwcFVybH0ke2FwcFN1YlVybH0vYCA6IGNvbmZpZy5hcHBVcmw7XG4gICAgICBjb25zdCBydWxlVXJsID0gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KHJ1bGVzU291cmNlLm5hbWUpfS8ke2VuY29kZVVSSUNvbXBvbmVudChydWxlLm5hbWUpfWA7XG4gICAgICByZXR1cm4gYCR7YmFzZVVybH1hbGVydGluZy8ke3J1bGVVcmx9L2ZpbmRgO1xuICAgIH1cblxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdO1xuICB9O1xuXG4gIC8vIGV4cGxvcmUgZG9lcyBub3Qgc3VwcG9ydCBncmFmYW5hIHJ1bGUgcXVlcmllcyBhdG1cbiAgLy8gbmVpdGhlciBkbyBcImZlZGVyYXRlZCBydWxlc1wiXG4gIGlmIChpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpICYmIGhhc0V4cGxvcmVQZXJtaXNzaW9uICYmICFpc0ZlZGVyYXRlZCkge1xuICAgIGxlZnRCdXR0b25zLnB1c2goXG4gICAgICA8TGlua0J1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAga2V5PVwiZXhwbG9yZVwiXG4gICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgaWNvbj1cImNoYXJ0LWxpbmVcIlxuICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgaHJlZj17Y3JlYXRlRXhwbG9yZUxpbmsocnVsZXNTb3VyY2UubmFtZSwgcnVsZS5xdWVyeSl9XG4gICAgICA+XG4gICAgICAgIFNlZSBncmFwaFxuICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICk7XG4gIH1cbiAgaWYgKHJ1bGUuYW5ub3RhdGlvbnNbQW5ub3RhdGlvbi5ydW5ib29rVVJMXSkge1xuICAgIGxlZnRCdXR0b25zLnB1c2goXG4gICAgICA8TGlua0J1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAga2V5PVwicnVuYm9va1wiXG4gICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgaWNvbj1cImJvb2tcIlxuICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgaHJlZj17cnVsZS5hbm5vdGF0aW9uc1tBbm5vdGF0aW9uLnJ1bmJvb2tVUkxdfVxuICAgICAgPlxuICAgICAgICBWaWV3IHJ1bmJvb2tcbiAgICAgIDwvTGlua0J1dHRvbj5cbiAgICApO1xuICB9XG4gIGlmIChydWxlLmFubm90YXRpb25zW0Fubm90YXRpb24uZGFzaGJvYXJkVUlEXSkge1xuICAgIGNvbnN0IGRhc2hib2FyZFVJRCA9IHJ1bGUuYW5ub3RhdGlvbnNbQW5ub3RhdGlvbi5kYXNoYm9hcmRVSURdO1xuICAgIGlmIChkYXNoYm9hcmRVSUQpIHtcbiAgICAgIGxlZnRCdXR0b25zLnB1c2goXG4gICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAgICBrZXk9XCJkYXNoYm9hcmRcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICBpY29uPVwiYXBwc1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgICAgaHJlZj17YGQvJHtlbmNvZGVVUklDb21wb25lbnQoZGFzaGJvYXJkVUlEKX1gfVxuICAgICAgICA+XG4gICAgICAgICAgR28gdG8gZGFzaGJvYXJkXG4gICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICk7XG4gICAgICBjb25zdCBwYW5lbElkID0gcnVsZS5hbm5vdGF0aW9uc1tBbm5vdGF0aW9uLnBhbmVsSURdO1xuICAgICAgaWYgKHBhbmVsSWQpIHtcbiAgICAgICAgbGVmdEJ1dHRvbnMucHVzaChcbiAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICAgICAga2V5PVwicGFuZWxcIlxuICAgICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgaWNvbj1cImFwcHNcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgICAgICBocmVmPXtgZC8ke2VuY29kZVVSSUNvbXBvbmVudChkYXNoYm9hcmRVSUQpfT92aWV3UGFuZWw9JHtlbmNvZGVVUklDb21wb25lbnQocGFuZWxJZCl9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBHbyB0byBwYW5lbFxuICAgICAgICAgIDwvTGlua0J1dHRvbj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWxlcnRtYW5hZ2VyU291cmNlTmFtZSAmJiBjb250ZXh0U3J2Lmhhc0FjY2VzcyhBY2Nlc3NDb250cm9sQWN0aW9uLkFsZXJ0aW5nSW5zdGFuY2VDcmVhdGUsIGNvbnRleHRTcnYuaXNFZGl0b3IpKSB7XG4gICAgbGVmdEJ1dHRvbnMucHVzaChcbiAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufVxuICAgICAgICBzaXplPVwieHNcIlxuICAgICAgICBrZXk9XCJzaWxlbmNlXCJcbiAgICAgICAgaWNvbj1cImJlbGwtc2xhc2hcIlxuICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgaHJlZj17bWFrZVJ1bGVCYXNlZFNpbGVuY2VMaW5rKGFsZXJ0bWFuYWdlclNvdXJjZU5hbWUsIHJ1bGUpfVxuICAgICAgPlxuICAgICAgICBTaWxlbmNlXG4gICAgICA8L0xpbmtCdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChhbGVydElkKSB7XG4gICAgbGVmdEJ1dHRvbnMucHVzaChcbiAgICAgIDxGcmFnbWVudCBrZXk9XCJoaXN0b3J5XCI+XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZS5idXR0b259IHNpemU9XCJ4c1wiIGljb249XCJoaXN0b3J5XCIgb25DbGljaz17KCkgPT4gc2hvd1N0YXRlSGlzdG9yeU1vZGFsKCl9PlxuICAgICAgICAgIFNob3cgc3RhdGUgaGlzdG9yeVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAge1N0YXRlSGlzdG9yeU1vZGFsfVxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgaWYgKCFpc1ZpZXdNb2RlKSB7XG4gICAgcmlnaHRCdXR0b25zLnB1c2goXG4gICAgICA8TGlua0J1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgc2l6ZT1cInhzXCJcbiAgICAgICAga2V5PVwidmlld1wiXG4gICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICBpY29uPVwiZXllXCJcbiAgICAgICAgaHJlZj17Y3JlYXRlVmlld0xpbmsocnVsZXNTb3VyY2UsIHJ1bGUsIHJldHVyblRvKX1cbiAgICAgID5cbiAgICAgICAgVmlld1xuICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICk7XG4gIH1cblxuICBpZiAoaXNFZGl0YWJsZSAmJiBydWxlclJ1bGUgJiYgIWlzRmVkZXJhdGVkKSB7XG4gICAgY29uc3Qgc291cmNlTmFtZSA9IGdldFJ1bGVzU291cmNlTmFtZShydWxlc1NvdXJjZSk7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHJ1bGVJZC5mcm9tUnVsZXJSdWxlKHNvdXJjZU5hbWUsIG5hbWVzcGFjZS5uYW1lLCBncm91cC5uYW1lLCBydWxlclJ1bGUpO1xuXG4gICAgY29uc3QgZWRpdFVSTCA9IHVybFV0aWwucmVuZGVyVXJsKFxuICAgICAgYCR7Y29uZmlnLmFwcFN1YlVybH0vYWxlcnRpbmcvJHtlbmNvZGVVUklDb21wb25lbnQocnVsZUlkLnN0cmluZ2lmeUlkZW50aWZpZXIoaWRlbnRpZmllcikpfS9lZGl0YCxcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuVG8sXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmIChpc1ZpZXdNb2RlKSB7XG4gICAgICByaWdodEJ1dHRvbnMucHVzaChcbiAgICAgICAgPENsaXBib2FyZEJ1dHRvblxuICAgICAgICAgIGtleT1cImNvcHlcIlxuICAgICAgICAgIG9uQ2xpcGJvYXJkQ29weT17KCkgPT4ge1xuICAgICAgICAgICAgbm90aWZ5QXBwLnN1Y2Nlc3MoJ1VSTCBjb3BpZWQhJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNsaXBib2FyZEVycm9yPXsoZSkgPT4ge1xuICAgICAgICAgICAgbm90aWZ5QXBwLmVycm9yKCdFcnJvciB3aGlsZSBjb3B5aW5nIFVSTCcsIGUudGV4dCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn1cbiAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgIGdldFRleHQ9e2J1aWxkU2hhcmVVcmx9XG4gICAgICAgID5cbiAgICAgICAgICBDb3B5IGxpbmsgdG8gcnVsZVxuICAgICAgICA8L0NsaXBib2FyZEJ1dHRvbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmlnaHRCdXR0b25zLnB1c2goXG4gICAgICA8TGlua0J1dHRvbiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn0gc2l6ZT1cInhzXCIga2V5PVwiZWRpdFwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBpY29uPVwicGVuXCIgaHJlZj17ZWRpdFVSTH0+XG4gICAgICAgIEVkaXRcbiAgICAgIDwvTGlua0J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgaWYgKGlzUmVtb3ZhYmxlICYmIHJ1bGVyUnVsZSAmJiAhaXNGZWRlcmF0ZWQpIHtcbiAgICByaWdodEJ1dHRvbnMucHVzaChcbiAgICAgIDxCdXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b259XG4gICAgICAgIHNpemU9XCJ4c1wiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBrZXk9XCJkZWxldGVcIlxuICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFJ1bGVUb0RlbGV0ZShydWxlKX1cbiAgICAgID5cbiAgICAgICAgRGVsZXRlXG4gICAgICA8L0J1dHRvbj5cbiAgICApO1xuICB9XG5cbiAgaWYgKGxlZnRCdXR0b25zLmxlbmd0aCB8fCByaWdodEJ1dHRvbnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cbiAgICAgICAgICA8SG9yaXpvbnRhbEdyb3VwIHdpZHRoPVwiYXV0b1wiPntsZWZ0QnV0dG9ucy5sZW5ndGggPyBsZWZ0QnV0dG9ucyA6IDxkaXYgLz59PC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgICAgPEhvcml6b250YWxHcm91cCB3aWR0aD1cImF1dG9cIj57cmlnaHRCdXR0b25zLmxlbmd0aCA/IHJpZ2h0QnV0dG9ucyA6IDxkaXYgLz59PC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ISFydWxlVG9EZWxldGUgJiYgKFxuICAgICAgICAgIDxDb25maXJtTW9kYWxcbiAgICAgICAgICAgIGlzT3Blbj17dHJ1ZX1cbiAgICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHJ1bGVcIlxuICAgICAgICAgICAgYm9keT1cIkRlbGV0aW5nIHRoaXMgcnVsZSB3aWxsIHBlcm1hbmVudGx5IHJlbW92ZSBpdCBmcm9tIHlvdXIgYWxlcnQgcnVsZSBsaXN0LiBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcnVsZT9cIlxuICAgICAgICAgICAgY29uZmlybVRleHQ9XCJZZXMsIGRlbGV0ZVwiXG4gICAgICAgICAgICBpY29uPVwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIlxuICAgICAgICAgICAgb25Db25maXJtPXtkZWxldGVSdWxlfVxuICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRSdWxlVG9EZWxldGUodW5kZWZpbmVkKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZnVuY3Rpb24gaW5WaWV3TW9kZShwYXRobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRobmFtZS5lbmRzV2l0aCgnL3ZpZXcnKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgd3JhcHBlcjogY3NzYFxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygyKX0gMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJHt0aGVtZS5jb2xvcnMuYm9yZGVyLm1lZGl1bX07XG4gIGAsXG4gIGJ1dHRvbjogY3NzYFxuICAgIGhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tdG9wOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnNpemUuc219O1xuICBgLFxufSk7XG5cbmZ1bmN0aW9uIGlzR3JhZmFuYVJ1bGVyUnVsZShydWxlPzogUnVsZXJSdWxlRFRPKTogcnVsZSBpcyBSdWxlckdyYWZhbmFSdWxlRFRPIHtcbiAgaWYgKCFydWxlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAocnVsZSBhcyBSdWxlckdyYWZhbmFSdWxlRFRPKS5ncmFmYW5hX2FsZXJ0ICE9IG51bGw7XG59XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlU3R5bGVzMiB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgQW5ub3RhdGlvbkRldGFpbHNGaWVsZCB9IGZyb20gJy4uL0Fubm90YXRpb25EZXRhaWxzRmllbGQnO1xuXG50eXBlIFByb3BzID0ge1xuICBhbm5vdGF0aW9uczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT47XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUnVsZURldGFpbHNBbm5vdGF0aW9ucyhwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IGFubm90YXRpb25zIH0gPSBwcm9wcztcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuXG4gIGlmIChhbm5vdGF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbm5vdGF0aW9uc30+XG4gICAgICB7YW5ub3RhdGlvbnMubWFwKChba2V5LCB2YWx1ZV0pID0+IChcbiAgICAgICAgPEFubm90YXRpb25EZXRhaWxzRmllbGQga2V5PXtrZXl9IGFubm90YXRpb25LZXk9e2tleX0gdmFsdWU9e3ZhbHVlfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICgpID0+ICh7XG4gIGFubm90YXRpb25zOiBjc3NgXG4gICAgbWFyZ2luLXRvcDogNDZweDtcbiAgYCxcbn0pO1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY3NzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBnZXREYXRhU291cmNlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgRXhwcmVzc2lvbkRhdGFzb3VyY2VVSUQgfSBmcm9tICdhcHAvZmVhdHVyZXMvZXhwcmVzc2lvbnMvRXhwcmVzc2lvbkRhdGFzb3VyY2UnO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlLCBSdWxlc1NvdXJjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgaXNDbG91ZFJ1bGVzU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBpc0dyYWZhbmFSdWxlclJ1bGUgfSBmcm9tICcuLi8uLi91dGlscy9ydWxlcyc7XG5pbXBvcnQgeyBEZXRhaWxzRmllbGQgfSBmcm9tICcuLi9EZXRhaWxzRmllbGQnO1xuXG50eXBlIFByb3BzID0ge1xuICBydWxlOiBDb21iaW5lZFJ1bGU7XG4gIHJ1bGVzU291cmNlOiBSdWxlc1NvdXJjZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBSdWxlRGV0YWlsc0RhdGFTb3VyY2VzKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgcnVsZXNTb3VyY2UsIHJ1bGUgfSA9IHByb3BzO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgZGF0YVNvdXJjZXM6IEFycmF5PHsgbmFtZTogc3RyaW5nOyBpY29uPzogc3RyaW5nIH0+ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKGlzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkpIHtcbiAgICAgIHJldHVybiBbeyBuYW1lOiBydWxlc1NvdXJjZS5uYW1lLCBpY29uOiBydWxlc1NvdXJjZS5tZXRhLmluZm8ubG9nb3Muc21hbGwgfV07XG4gICAgfVxuXG4gICAgaWYgKGlzR3JhZmFuYVJ1bGVyUnVsZShydWxlLnJ1bGVyUnVsZSkpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcnVsZS5ydWxlclJ1bGUuZ3JhZmFuYV9hbGVydDtcbiAgICAgIGNvbnN0IHVuaXF1ZSA9IGRhdGEucmVkdWNlKChkYXRhU291cmNlcywgcXVlcnkpID0+IHtcbiAgICAgICAgY29uc3QgZHMgPSBnZXREYXRhU291cmNlU3J2KCkuZ2V0SW5zdGFuY2VTZXR0aW5ncyhxdWVyeS5kYXRhc291cmNlVWlkKTtcblxuICAgICAgICBpZiAoIWRzIHx8IGRzLnVpZCA9PT0gRXhwcmVzc2lvbkRhdGFzb3VyY2VVSUQpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YVNvdXJjZXM7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhU291cmNlc1tkcy5uYW1lXSA9IHsgbmFtZTogZHMubmFtZSwgaWNvbjogZHMubWV0YS5pbmZvLmxvZ29zLnNtYWxsIH07XG4gICAgICAgIHJldHVybiBkYXRhU291cmNlcztcbiAgICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIHsgbmFtZTogc3RyaW5nOyBpY29uPzogc3RyaW5nIH0+KTtcblxuICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModW5pcXVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG4gIH0sIFtydWxlLCBydWxlc1NvdXJjZV0pO1xuXG4gIGlmIChkYXRhU291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERldGFpbHNGaWVsZCBsYWJlbD1cIkRhdGEgc291cmNlXCI+XG4gICAgICB7ZGF0YVNvdXJjZXMubWFwKCh7IG5hbWUsIGljb24gfSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e25hbWV9PlxuICAgICAgICAgIHtpY29uICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxpbWcgYWx0PXtgJHtuYW1lfSBkYXRhc291cmNlIGxvZ29gfSBjbGFzc05hbWU9e3N0eWxlcy5kYXRhU291cmNlSWNvbn0gc3JjPXtpY29ufSAvPnsnICd9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtuYW1lfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvRGV0YWlsc0ZpZWxkPlxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXModGhlbWU6IEdyYWZhbmFUaGVtZTIpIHtcbiAgY29uc3Qgc2l6ZSA9IHRoZW1lLnNwYWNpbmcoMik7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhU291cmNlSWNvbjogY3NzYFxuICAgICAgd2lkdGg6ICR7c2l6ZX07XG4gICAgICBoZWlnaHQ6ICR7c2l6ZX07XG4gICAgYCxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNzcywgY3ggfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29tYmluZWRSdWxlLCBSdWxlc1NvdXJjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgaXNDbG91ZFJ1bGVzU291cmNlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBEZXRhaWxzRmllbGQgfSBmcm9tICcuLi9EZXRhaWxzRmllbGQnO1xuaW1wb3J0IHsgRXhwcmVzc2lvbiB9IGZyb20gJy4uL0V4cHJlc3Npb24nO1xuXG50eXBlIFByb3BzID0ge1xuICBydWxlOiBDb21iaW5lZFJ1bGU7XG4gIHJ1bGVzU291cmNlOiBSdWxlc1NvdXJjZTtcbiAgYW5ub3RhdGlvbnM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFJ1bGVEZXRhaWxzRXhwcmVzc2lvbihwcm9wczogUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IGFubm90YXRpb25zLCBydWxlc1NvdXJjZSwgcnVsZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcygpO1xuXG4gIGlmICghaXNDbG91ZFJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGV0YWlsc0ZpZWxkIGxhYmVsPVwiRXhwcmVzc2lvblwiIGhvcml6b250YWw9e3RydWV9IGNsYXNzTmFtZT17Y3goeyBbc3R5bGVzLmV4cHJSb3ddOiAhIWFubm90YXRpb25zLmxlbmd0aCB9KX0+XG4gICAgICA8RXhwcmVzc2lvbiBleHByZXNzaW9uPXtydWxlLnF1ZXJ5fSBydWxlc1NvdXJjZT17cnVsZXNTb3VyY2V9IC8+XG4gICAgPC9EZXRhaWxzRmllbGQ+XG4gICk7XG59XG5cbmNvbnN0IGdldFN0eWxlcyA9ICgpID0+ICh7XG4gIGV4cHJSb3c6IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiA0NnB4O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbWJpbmVkUnVsZUdyb3VwIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyBEZXRhaWxzRmllbGQgfSBmcm9tICcuLi9EZXRhaWxzRmllbGQnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBncm91cDogQ29tYmluZWRSdWxlR3JvdXA7XG59XG5cbmNvbnN0IFJ1bGVEZXRhaWxzRmVkZXJhdGVkU291cmNlczogRkM8UHJvcHM+ID0gKHsgZ3JvdXAgfSkgPT4ge1xuICBjb25zdCBzb3VyY2VUZW5hbnRzID0gZ3JvdXAuc291cmNlX3RlbmFudHMgPz8gW107XG5cbiAgcmV0dXJuIChcbiAgICA8RGV0YWlsc0ZpZWxkIGxhYmVsPVwiVGVuYW50IHNvdXJjZXNcIj5cbiAgICAgIDw+XG4gICAgICAgIHtzb3VyY2VUZW5hbnRzLm1hcCgodGVuYW50KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3RlbmFudH0+e3RlbmFudH08L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8Lz5cbiAgICA8L0RldGFpbHNGaWVsZD5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IFJ1bGVEZXRhaWxzRmVkZXJhdGVkU291cmNlcyB9O1xuIiwiaW1wb3J0IHsgY3NzLCBjeCB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgdXNlU3R5bGVzIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgTWF0Y2hlckZpbHRlciB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvYWxlcnQtZ3JvdXBzL01hdGNoZXJGaWx0ZXInO1xuaW1wb3J0IHsgQWxlcnRJbnN0YW5jZVN0YXRlRmlsdGVyIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9ydWxlcy9BbGVydEluc3RhbmNlU3RhdGVGaWx0ZXInO1xuaW1wb3J0IHsgbGFiZWxzTWF0Y2hNYXRjaGVycywgcGFyc2VNYXRjaGVycyB9IGZyb20gJ2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5pbXBvcnQgeyBzb3J0QWxlcnRzIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvbWlzYyc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICdhcHAvcGx1Z2lucy9wYW5lbC9hbGVydGxpc3QvdHlwZXMnO1xuaW1wb3J0IHsgQWxlcnQsIFJ1bGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBHcmFmYW5hQWxlcnRTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IGlzQWxlcnRpbmdSdWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcnVsZXMnO1xuaW1wb3J0IHsgRGV0YWlsc0ZpZWxkIH0gZnJvbSAnLi4vRGV0YWlsc0ZpZWxkJztcblxuaW1wb3J0IHsgQWxlcnRJbnN0YW5jZXNUYWJsZSB9IGZyb20gJy4vQWxlcnRJbnN0YW5jZXNUYWJsZSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHByb21SdWxlPzogUnVsZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBSdWxlRGV0YWlsc01hdGNoaW5nSW5zdGFuY2VzKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgcHJvbVJ1bGUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtxdWVyeVN0cmluZywgc2V0UXVlcnlTdHJpbmddID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbYWxlcnRTdGF0ZSwgc2V0QWxlcnRTdGF0ZV0gPSB1c2VTdGF0ZTxHcmFmYW5hQWxlcnRTdGF0ZT4oKTtcblxuICAvLyBUaGlzIGtleSBpcyB1c2VkIHRvIGZvcmNlIGEgcmVyZW5kZXIgb24gdGhlIGlucHV0cyB3aGVuIHRoZSBmaWx0ZXJzIGFyZSBjbGVhcmVkXG4gIGNvbnN0IFtmaWx0ZXJLZXldID0gdXNlU3RhdGU8bnVtYmVyPihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApKTtcbiAgY29uc3QgcXVlcnlTdHJpbmdLZXkgPSBgcXVlcnlTdHJpbmctJHtmaWx0ZXJLZXl9YDtcblxuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMoZ2V0U3R5bGVzKTtcblxuICBjb25zdCBhbGVydHMgPSB1c2VNZW1vKFxuICAgICgpOiBBbGVydFtdID0+XG4gICAgICBpc0FsZXJ0aW5nUnVsZShwcm9tUnVsZSkgJiYgcHJvbVJ1bGUuYWxlcnRzPy5sZW5ndGhcbiAgICAgICAgPyBmaWx0ZXJBbGVydHMocXVlcnlTdHJpbmcsIGFsZXJ0U3RhdGUsIHNvcnRBbGVydHMoU29ydE9yZGVyLkltcG9ydGFuY2UsIHByb21SdWxlLmFsZXJ0cykpXG4gICAgICAgIDogW10sXG4gICAgW3Byb21SdWxlLCBhbGVydFN0YXRlLCBxdWVyeVN0cmluZ11cbiAgKTtcblxuICBpZiAoIWlzQWxlcnRpbmdSdWxlKHByb21SdWxlKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGV0YWlsc0ZpZWxkIGxhYmVsPVwiTWF0Y2hpbmcgaW5zdGFuY2VzXCIgaG9yaXpvbnRhbD17dHJ1ZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goc3R5bGVzLmZsZXhSb3csIHN0eWxlcy5zcGFjZUJldHdlZW4pfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4Um93fT5cbiAgICAgICAgICA8TWF0Y2hlckZpbHRlclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucm93Q2hpbGR9XG4gICAgICAgICAgICBrZXk9e3F1ZXJ5U3RyaW5nS2V5fVxuICAgICAgICAgICAgZGVmYXVsdFF1ZXJ5U3RyaW5nPXtxdWVyeVN0cmluZ31cbiAgICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlPXsodmFsdWUpID0+IHNldFF1ZXJ5U3RyaW5nKHZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBbGVydEluc3RhbmNlU3RhdGVGaWx0ZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJvd0NoaWxkfVxuICAgICAgICAgICAgc3RhdGVGaWx0ZXI9e2FsZXJ0U3RhdGV9XG4gICAgICAgICAgICBvblN0YXRlRmlsdGVyQ2hhbmdlPXtzZXRBbGVydFN0YXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxBbGVydEluc3RhbmNlc1RhYmxlIGluc3RhbmNlcz17YWxlcnRzfSAvPlxuICAgIDwvRGV0YWlsc0ZpZWxkPlxuICApO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJBbGVydHMoXG4gIGFsZXJ0SW5zdGFuY2VMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICBhbGVydEluc3RhbmNlU3RhdGU6IEdyYWZhbmFBbGVydFN0YXRlIHwgdW5kZWZpbmVkLFxuICBhbGVydHM6IEFsZXJ0W11cbik6IEFsZXJ0W10ge1xuICBsZXQgZmlsdGVyZWRBbGVydHMgPSBbLi4uYWxlcnRzXTtcbiAgaWYgKGFsZXJ0SW5zdGFuY2VMYWJlbCkge1xuICAgIGNvbnN0IG1hdGNoZXJzID0gcGFyc2VNYXRjaGVycyhhbGVydEluc3RhbmNlTGFiZWwgfHwgJycpO1xuICAgIGZpbHRlcmVkQWxlcnRzID0gZmlsdGVyZWRBbGVydHMuZmlsdGVyKCh7IGxhYmVscyB9KSA9PiBsYWJlbHNNYXRjaE1hdGNoZXJzKGxhYmVscywgbWF0Y2hlcnMpKTtcbiAgfVxuICBpZiAoYWxlcnRJbnN0YW5jZVN0YXRlKSB7XG4gICAgZmlsdGVyZWRBbGVydHMgPSBmaWx0ZXJlZEFsZXJ0cy5maWx0ZXIoKGFsZXJ0KSA9PiB7XG4gICAgICByZXR1cm4gYWxlcnQuc3RhdGUgPT09IGFsZXJ0SW5zdGFuY2VTdGF0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZEFsZXJ0cztcbn1cblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmbGV4Um93OiBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICAgIHNwYWNlQmV0d2VlbjogY3NzYFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGAsXG4gICAgcm93Q2hpbGQ6IGNzc2BcbiAgICAgIG1hcmdpbi1yaWdodDogJHt0aGVtZS5zcGFjaW5nLnNtfTtcbiAgICBgLFxuICB9O1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEljb24sIFRvb2x0aXAsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBSdWxlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbnRlcmZhY2UgUHJvbSB7XG4gIHJ1bGU6IFJ1bGU7XG59XG5cbmV4cG9ydCBjb25zdCBSdWxlSGVhbHRoOiBGQzxQcm9tPiA9ICh7IHJ1bGUgfSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHVzZVN0eWxlczIoZ2V0U3R5bGUpO1xuICBpZiAocnVsZS5oZWFsdGggPT09ICdlcnInIHx8IHJ1bGUuaGVhbHRoID09PSAnZXJyb3InKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwIHRoZW1lPVwiZXJyb3JcIiBjb250ZW50PXtydWxlLmxhc3RFcnJvciB8fCAnTm8gZXJyb3IgbWVzc2FnZSBwcm92aWRlZC4nfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndhcm59PlxuICAgICAgICAgIDxJY29uIG5hbWU9XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiIC8+XG4gICAgICAgICAgPHNwYW4+ZXJyb3I8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ub29sdGlwPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIDw+e3J1bGUuaGVhbHRofTwvPjtcbn07XG5cbmNvbnN0IGdldFN0eWxlID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICB3YXJuOiBjc3NgXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMud2FybmluZy50ZXh0fTtcbiAgICAmID4gKiArICoge1xuICAgICAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gICAgfVxuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgSG9yaXpvbnRhbEdyb3VwLCBTcGlubmVyLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgUHJvbUFsZXJ0aW5nUnVsZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHsgaXNBbGVydGluZ1J1bGUsIGlzUmVjb3JkaW5nUnVsZSwgZ2V0Rmlyc3RBY3RpdmVBdCB9IGZyb20gJy4uLy4uL3V0aWxzL3J1bGVzJztcblxuaW1wb3J0IHsgQWxlcnRTdGF0ZVRhZyB9IGZyb20gJy4vQWxlcnRTdGF0ZVRhZyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHJ1bGU6IENvbWJpbmVkUnVsZTtcbiAgaXNEZWxldGluZzogYm9vbGVhbjtcbiAgaXNDcmVhdGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFJ1bGVTdGF0ZTogRkM8UHJvcHM+ID0gKHsgcnVsZSwgaXNEZWxldGluZywgaXNDcmVhdGluZyB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0gdXNlU3R5bGVzMihnZXRTdHlsZSk7XG4gIGNvbnN0IHsgcHJvbVJ1bGUgfSA9IHJ1bGU7XG5cbiAgLy8gcmV0dXJuIGhvdyBsb25nIHRoZSBydWxlIGhhcyBiZWVuIGluIGl0J3MgZmlyaW5nIHN0YXRlLCBpZiBhbnlcbiAgY29uc3QgZm9yVGltZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHByb21SdWxlICYmXG4gICAgICBpc0FsZXJ0aW5nUnVsZShwcm9tUnVsZSkgJiZcbiAgICAgIHByb21SdWxlLmFsZXJ0cz8ubGVuZ3RoICYmXG4gICAgICBwcm9tUnVsZS5zdGF0ZSAhPT0gUHJvbUFsZXJ0aW5nUnVsZVN0YXRlLkluYWN0aXZlXG4gICAgKSB7XG4gICAgICAvLyBmaW5kIGVhcmxpZXN0IGFsZXJ0XG4gICAgICBjb25zdCBmaXJzdEFjdGl2ZUF0ID0gZ2V0Rmlyc3RBY3RpdmVBdChwcm9tUnVsZSk7XG5cbiAgICAgIC8vIGNhbGN1bGF0ZSB0aW1lIGVsYXBzZWQgZnJvbSBlYXJsaWVzdCBhbGVydFxuICAgICAgaWYgKGZpcnN0QWN0aXZlQXQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c3BhbiB0aXRsZT17U3RyaW5nKGZpcnN0QWN0aXZlQXQpfSBjbGFzc05hbWU9e3N0eWxlLmZvcn0+XG4gICAgICAgICAgICBmb3J7JyAnfVxuICAgICAgICAgICAge2ludGVydmFsVG9BYmJyZXZpYXRlZER1cmF0aW9uU3RyaW5nKFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IGZpcnN0QWN0aXZlQXQsXG4gICAgICAgICAgICAgICAgZW5kOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LCBbcHJvbVJ1bGUsIHN0eWxlXSk7XG5cbiAgaWYgKGlzRGVsZXRpbmcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvcml6b250YWxHcm91cCBhbGlnbj1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgZGVsZXRpbmdcbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICk7XG4gIH0gZWxzZSBpZiAoaXNDcmVhdGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8SG9yaXpvbnRhbEdyb3VwIGFsaWduPVwiZmxleC1zdGFydFwiPlxuICAgICAgICB7JyAnfVxuICAgICAgICA8U3Bpbm5lciAvPlxuICAgICAgICBjcmVhdGluZ1xuICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChwcm9tUnVsZSAmJiBpc0FsZXJ0aW5nUnVsZShwcm9tUnVsZSkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhvcml6b250YWxHcm91cCBhbGlnbj1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgPEFsZXJ0U3RhdGVUYWcgc3RhdGU9e3Byb21SdWxlLnN0YXRlfSAvPlxuICAgICAgICB7Zm9yVGltZX1cbiAgICAgIDwvSG9yaXpvbnRhbEdyb3VwPlxuICAgICk7XG4gIH0gZWxzZSBpZiAocHJvbVJ1bGUgJiYgaXNSZWNvcmRpbmdSdWxlKHByb21SdWxlKSkge1xuICAgIHJldHVybiA8PlJlY29yZGluZyBydWxlPC8+O1xuICB9XG4gIHJldHVybiA8Pm4vYTwvPjtcbn07XG5cbmNvbnN0IGdldFN0eWxlID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiAoe1xuICBmb3I6IGNzc2BcbiAgICBmb250LXNpemU6ICR7dGhlbWUudHlwb2dyYXBoeS5ib2R5U21hbGwuZm9udFNpemV9O1xuICAgIGNvbG9yOiAke3RoZW1lLmNvbG9ycy50ZXh0LnNlY29uZGFyeX07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xuICBgLFxufSk7XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IHsgdW5pcXVlSWQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBbGVydFN0YXRlLCBkYXRlVGltZUZvcm1hdCwgR3JhZmFuYVRoZW1lIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBBbGVydCwgTG9hZGluZ1BsYWNlaG9sZGVyLCB1c2VTdHlsZXMgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBTdGF0ZUhpc3RvcnlJdGVtLCBTdGF0ZUhpc3RvcnlJdGVtRGF0YSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IEdyYWZhbmFBbGVydFN0YXRlLCBQcm9tQWxlcnRpbmdSdWxlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyB1c2VNYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnkgfSBmcm9tICcuLi8uLi9ob29rcy91c2VNYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnknO1xuaW1wb3J0IHsgQWxlcnRMYWJlbCB9IGZyb20gJy4uL0FsZXJ0TGFiZWwnO1xuaW1wb3J0IHsgRHluYW1pY1RhYmxlLCBEeW5hbWljVGFibGVDb2x1bW5Qcm9wcywgRHluYW1pY1RhYmxlSXRlbVByb3BzIH0gZnJvbSAnLi4vRHluYW1pY1RhYmxlJztcblxuaW1wb3J0IHsgQWxlcnRTdGF0ZVRhZyB9IGZyb20gJy4vQWxlcnRTdGF0ZVRhZyc7XG5cbnR5cGUgU3RhdGVIaXN0b3J5Um93SXRlbSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgc3RhdGU6IFByb21BbGVydGluZ1J1bGVTdGF0ZSB8IEdyYWZhbmFBbGVydFN0YXRlIHwgQWxlcnRTdGF0ZTtcbiAgdGV4dD86IHN0cmluZztcbiAgZGF0YT86IFN0YXRlSGlzdG9yeUl0ZW1EYXRhO1xuICB0aW1lc3RhbXA/OiBudW1iZXI7XG59O1xuXG50eXBlIFN0YXRlSGlzdG9yeVJvdyA9IER5bmFtaWNUYWJsZUl0ZW1Qcm9wczxTdGF0ZUhpc3RvcnlSb3dJdGVtPjtcblxuaW50ZXJmYWNlIFJ1bGVTdGF0ZUhpc3RvcnlQcm9wcyB7XG4gIGFsZXJ0SWQ6IHN0cmluZztcbn1cblxuY29uc3QgU3RhdGVIaXN0b3J5OiBGQzxSdWxlU3RhdGVIaXN0b3J5UHJvcHM+ID0gKHsgYWxlcnRJZCB9KSA9PiB7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIHJlc3VsdCA9IFtdIH0gPSB1c2VNYW5hZ2VkQWxlcnRTdGF0ZUhpc3RvcnkoYWxlcnRJZCk7XG5cbiAgaWYgKGxvYWRpbmcgJiYgIWVycm9yKSB7XG4gICAgcmV0dXJuIDxMb2FkaW5nUGxhY2Vob2xkZXIgdGV4dD17J0xvYWRpbmcgaGlzdG9yeS4uLid9IC8+O1xuICB9XG5cbiAgaWYgKGVycm9yICYmICFsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxBbGVydCB0aXRsZT17J0ZhaWxlZCB0byBmZXRjaCBhbGVydCBzdGF0ZSBoaXN0b3J5J30+e2Vycm9yLm1lc3NhZ2V9PC9BbGVydD47XG4gIH1cblxuICBjb25zdCBjb2x1bW5zOiBBcnJheTxEeW5hbWljVGFibGVDb2x1bW5Qcm9wczxTdGF0ZUhpc3RvcnlSb3dJdGVtPj4gPSBbXG4gICAgeyBpZDogJ3N0YXRlJywgbGFiZWw6ICdTdGF0ZScsIHNpemU6ICdtYXgtY29udGVudCcsIHJlbmRlckNlbGw6IHJlbmRlclN0YXRlQ2VsbCB9LFxuICAgIHsgaWQ6ICd2YWx1ZScsIGxhYmVsOiAnJywgc2l6ZTogJ2F1dG8nLCByZW5kZXJDZWxsOiByZW5kZXJWYWx1ZUNlbGwgfSxcbiAgICB7IGlkOiAndGltZXN0YW1wJywgbGFiZWw6ICdUaW1lJywgc2l6ZTogJ21heC1jb250ZW50JywgcmVuZGVyQ2VsbDogcmVuZGVyVGltZXN0YW1wQ2VsbCB9LFxuICBdO1xuXG4gIGNvbnN0IGl0ZW1zOiBTdGF0ZUhpc3RvcnlSb3dbXSA9IHJlc3VsdFxuICAgIC5yZWR1Y2UoKGFjYzogU3RhdGVIaXN0b3J5Um93SXRlbVtdLCBpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgYWNjLnB1c2goe1xuICAgICAgICBpZDogU3RyaW5nKGl0ZW0uaWQpLFxuICAgICAgICBzdGF0ZTogaXRlbS5uZXdTdGF0ZSxcbiAgICAgICAgdGV4dDogaXRlbS50ZXh0LFxuICAgICAgICBkYXRhOiBpdGVtLmRhdGEsXG4gICAgICAgIHRpbWVzdGFtcDogaXRlbS51cGRhdGVkLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIGlmIHRoZSBwcmVjZWRpbmcgc3RhdGUgaXMgbm90IHRoZSBzYW1lLCBjcmVhdGUgYSBzZXBhcmF0ZSBzdGF0ZSBlbnRyeSDigJMgdGhpcyBsaWtlbHkgbWVhbnMgdGhlIHN0YXRlIHdhcyByZXNldFxuICAgICAgaWYgKCFoYXNNYXRjaGluZ1ByZWNlZGluZ1N0YXRlKGluZGV4LCByZXN1bHQpKSB7XG4gICAgICAgIGFjYy5wdXNoKHsgaWQ6IHVuaXF1ZUlkKCksIHN0YXRlOiBpdGVtLnByZXZTdGF0ZSB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSlcbiAgICAubWFwKChoaXN0b3J5SXRlbSkgPT4gKHtcbiAgICAgIGlkOiBoaXN0b3J5SXRlbS5pZCxcbiAgICAgIGRhdGE6IGhpc3RvcnlJdGVtLFxuICAgIH0pKTtcblxuICByZXR1cm4gPER5bmFtaWNUYWJsZSBjb2xzPXtjb2x1bW5zfSBpdGVtcz17aXRlbXN9IC8+O1xufTtcblxuZnVuY3Rpb24gcmVuZGVyVmFsdWVDZWxsKGl0ZW06IFN0YXRlSGlzdG9yeVJvdykge1xuICBjb25zdCBtYXRjaGVzID0gaXRlbS5kYXRhLmRhdGE/LmV2YWxNYXRjaGVzID8/IFtdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpdGVtLmRhdGEudGV4dH1cbiAgICAgIDxMYWJlbHNXcmFwcGVyPlxuICAgICAgICB7bWF0Y2hlcy5tYXAoKG1hdGNoKSA9PiAoXG4gICAgICAgICAgPEFsZXJ0TGFiZWwga2V5PXttYXRjaC5tZXRyaWN9IGxhYmVsS2V5PXttYXRjaC5tZXRyaWN9IHZhbHVlPXtTdHJpbmcobWF0Y2gudmFsdWUpfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvTGFiZWxzV3JhcHBlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU3RhdGVDZWxsKGl0ZW06IFN0YXRlSGlzdG9yeVJvdykge1xuICByZXR1cm4gPEFsZXJ0U3RhdGVUYWcgc3RhdGU9e2l0ZW0uZGF0YS5zdGF0ZX0gLz47XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRpbWVzdGFtcENlbGwoaXRlbTogU3RhdGVIaXN0b3J5Um93KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1RpbWVzdGFtcFN0eWxlfT57aXRlbS5kYXRhLnRpbWVzdGFtcCAmJiA8c3Bhbj57ZGF0ZVRpbWVGb3JtYXQoaXRlbS5kYXRhLnRpbWVzdGFtcCl9PC9zcGFuPn08L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgTGFiZWxzV3JhcHBlcjogRkM8e30+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IHdyYXBwZXIgfSA9IHVzZVN0eWxlcyhnZXRTdHlsZXMpO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3dyYXBwZXJ9PntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5jb25zdCBUaW1lc3RhbXBTdHlsZSA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuY29uc3QgZ2V0U3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+ICh7XG4gIHdyYXBwZXI6IGNzc2BcbiAgICAmID4gKiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuc3BhY2luZy54c307XG4gICAgfVxuICBgLFxufSk7XG5cbi8vIHRoaXMgZnVuY3Rpb24gd2lsbCBmaWd1cmUgb3V0IGlmIGEgZ2l2ZW4gaGlzdG9yeUl0ZW0gaGFzIGEgcHJlY2VkaW5nIGhpc3RvcnlJdGVtIHdoZXJlIHRoZSBzdGF0ZXMgbWF0Y2ggLSBpbiBvdGhlciB3b3Jkc1xuLy8gdGhlIG5ld1N0YXRlIG9mIHRoZSBwcmV2aW91cyBoaXN0b3J5SXRlbSBpcyB0aGUgc2FtZSBhcyB0aGUgcHJldlN0YXRlIG9mIHRoZSBjdXJyZW50IGhpc3RvcnlJdGVtXG5mdW5jdGlvbiBoYXNNYXRjaGluZ1ByZWNlZGluZ1N0YXRlKGluZGV4OiBudW1iZXIsIGl0ZW1zOiBTdGF0ZUhpc3RvcnlJdGVtW10pOiBib29sZWFuIHtcbiAgY29uc3QgY3VycmVudEhpc3RvcnlJdGVtID0gaXRlbXNbaW5kZXhdO1xuICBjb25zdCBwcmV2aW91c0hpc3RvcnlJdGVtID0gaXRlbXNbaW5kZXggKyAxXTtcblxuICBpZiAoIXByZXZpb3VzSGlzdG9yeUl0ZW0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcHJldmlvdXNIaXN0b3J5SXRlbS5uZXdTdGF0ZSA9PT0gY3VycmVudEhpc3RvcnlJdGVtLnByZXZTdGF0ZTtcbn1cblxuZXhwb3J0IHsgU3RhdGVIaXN0b3J5IH07XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBnZXREYXRhU291cmNlU3J2IH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5pbXBvcnQgeyBBbGVydFF1ZXJ5IH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsZXJ0UXVlcmllc1N0YXR1cyhxdWVyaWVzOiBBbGVydFF1ZXJ5W10pIHtcbiAgY29uc3QgYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUgPSB1c2VNZW1vKFxuICAgICgpID0+IHF1ZXJpZXMuZXZlcnkoKHF1ZXJ5KSA9PiBCb29sZWFuKGdldERhdGFTb3VyY2VTcnYoKS5nZXRJbnN0YW5jZVNldHRpbmdzKHF1ZXJ5LmRhdGFzb3VyY2VVaWQpKSksXG4gICAgW3F1ZXJpZXNdXG4gICk7XG5cbiAgcmV0dXJuIHsgYWxsRGF0YVNvdXJjZXNBdmFpbGFibGUgfTtcbn1cbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZUFzeW5jIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgQ29tYmluZWRSdWxlLCBSdWxlSWRlbnRpZmllciwgUnVsZU5hbWVzcGFjZSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcbmltcG9ydCB7IFJ1bGVyUnVsZXNDb25maWdEVE8gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBmZXRjaFByb21BbmRSdWxlclJ1bGVzQWN0aW9uIH0gZnJvbSAnLi4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBBc3luY1JlcXVlc3RNYXBTbGljZSwgQXN5bmNSZXF1ZXN0U3RhdGUsIGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSB9IGZyb20gJy4uL3V0aWxzL3JlZHV4JztcbmltcG9ydCAqIGFzIHJ1bGVJZCBmcm9tICcuLi91dGlscy9ydWxlLWlkJztcbmltcG9ydCB7IGlzUnVsZXJOb3RTdXBwb3J0ZWRSZXNwb25zZSB9IGZyb20gJy4uL3V0aWxzL3J1bGVzJztcblxuaW1wb3J0IHsgdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyB9IGZyb20gJy4vdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29tYmluZWRSdWxlKFxuICBpZGVudGlmaWVyOiBSdWxlSWRlbnRpZmllciB8IHVuZGVmaW5lZCxcbiAgcnVsZVNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogQXN5bmNSZXF1ZXN0U3RhdGU8Q29tYmluZWRSdWxlPiB7XG4gIGNvbnN0IHJlcXVlc3RTdGF0ZSA9IHVzZUNvbWJpbmVkUnVsZXNMb2FkZXIocnVsZVNvdXJjZU5hbWUpO1xuICBjb25zdCBjb21iaW5lZFJ1bGVzID0gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyhydWxlU291cmNlTmFtZSk7XG5cbiAgY29uc3QgcnVsZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghaWRlbnRpZmllciB8fCAhcnVsZVNvdXJjZU5hbWUgfHwgY29tYmluZWRSdWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG5hbWVzcGFjZSBvZiBjb21iaW5lZFJ1bGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIG5hbWVzcGFjZS5ncm91cHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIGdyb3VwLnJ1bGVzKSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBydWxlSWQuZnJvbUNvbWJpbmVkUnVsZShydWxlU291cmNlTmFtZSwgcnVsZSk7XG5cbiAgICAgICAgICBpZiAocnVsZUlkLmVxdWFsKGlkLCBpZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9LCBbaWRlbnRpZmllciwgcnVsZVNvdXJjZU5hbWUsIGNvbWJpbmVkUnVsZXNdKTtcblxuICByZXR1cm4ge1xuICAgIC4uLnJlcXVlc3RTdGF0ZSxcbiAgICByZXN1bHQ6IHJ1bGUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb21iaW5lZFJ1bGVzTWF0Y2hpbmcoXG4gIHJ1bGVOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHJ1bGVTb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IEFzeW5jUmVxdWVzdFN0YXRlPENvbWJpbmVkUnVsZVtdPiB7XG4gIGNvbnN0IHJlcXVlc3RTdGF0ZSA9IHVzZUNvbWJpbmVkUnVsZXNMb2FkZXIocnVsZVNvdXJjZU5hbWUpO1xuICBjb25zdCBjb21iaW5lZFJ1bGVzID0gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyhydWxlU291cmNlTmFtZSk7XG5cbiAgY29uc3QgcnVsZXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXJ1bGVOYW1lIHx8ICFydWxlU291cmNlTmFtZSB8fCBjb21iaW5lZFJ1bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVzOiBDb21iaW5lZFJ1bGVbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBuYW1lc3BhY2Ugb2YgY29tYmluZWRSdWxlcykge1xuICAgICAgZm9yIChjb25zdCBncm91cCBvZiBuYW1lc3BhY2UuZ3JvdXBzKSB7XG4gICAgICAgIGZvciAoY29uc3QgcnVsZSBvZiBncm91cC5ydWxlcykge1xuICAgICAgICAgIGlmIChydWxlLm5hbWUgPT09IHJ1bGVOYW1lKSB7XG4gICAgICAgICAgICBydWxlcy5wdXNoKHJ1bGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfSwgW3J1bGVOYW1lLCBydWxlU291cmNlTmFtZSwgY29tYmluZWRSdWxlc10pO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucmVxdWVzdFN0YXRlLFxuICAgIHJlc3VsdDogcnVsZXMsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZUNvbWJpbmVkUnVsZXNMb2FkZXIocnVsZXNTb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBBc3luY1JlcXVlc3RTdGF0ZTx2b2lkPiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgcHJvbVJ1bGVSZXF1ZXN0cyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvbVJ1bGVzKTtcbiAgY29uc3QgcHJvbVJ1bGVSZXF1ZXN0ID0gZ2V0UmVxdWVzdFN0YXRlKHJ1bGVzU291cmNlTmFtZSwgcHJvbVJ1bGVSZXF1ZXN0cyk7XG4gIGNvbnN0IHJ1bGVyUnVsZVJlcXVlc3RzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ydWxlclJ1bGVzKTtcbiAgY29uc3QgcnVsZXJSdWxlUmVxdWVzdCA9IGdldFJlcXVlc3RTdGF0ZShydWxlc1NvdXJjZU5hbWUsIHJ1bGVyUnVsZVJlcXVlc3RzKTtcblxuICBjb25zdCB7IGxvYWRpbmcgfSA9IHVzZUFzeW5jKGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXJ1bGVzU291cmNlTmFtZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGF3YWl0IGRpc3BhdGNoKGZldGNoUHJvbUFuZFJ1bGVyUnVsZXNBY3Rpb24oeyBydWxlc1NvdXJjZU5hbWUgfSkpO1xuICB9LCBbZGlzcGF0Y2gsIHJ1bGVzU291cmNlTmFtZV0pO1xuXG4gIHJldHVybiB7XG4gICAgbG9hZGluZyxcbiAgICBlcnJvcjogcHJvbVJ1bGVSZXF1ZXN0LmVycm9yID8/IGlzUnVsZXJOb3RTdXBwb3J0ZWRSZXNwb25zZShydWxlclJ1bGVSZXF1ZXN0KSA/IHVuZGVmaW5lZCA6IHJ1bGVyUnVsZVJlcXVlc3QuZXJyb3IsXG4gICAgZGlzcGF0Y2hlZDogcHJvbVJ1bGVSZXF1ZXN0LmRpc3BhdGNoZWQgJiYgcnVsZXJSdWxlUmVxdWVzdC5kaXNwYXRjaGVkLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRSZXF1ZXN0U3RhdGUoXG4gIHJ1bGVTb3VyY2VOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gIHNsaWNlOiBBc3luY1JlcXVlc3RNYXBTbGljZTxSdWxlclJ1bGVzQ29uZmlnRFRPIHwgUnVsZU5hbWVzcGFjZVtdIHwgbnVsbD5cbik6IEFzeW5jUmVxdWVzdFN0YXRlPFJ1bGVyUnVsZXNDb25maWdEVE8gfCBSdWxlTmFtZXNwYWNlW10gfCBudWxsPiB7XG4gIGlmICghcnVsZVNvdXJjZU5hbWUpIHtcbiAgICByZXR1cm4gaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlO1xuICB9XG5cbiAgY29uc3Qgc3RhdGUgPSBzbGljZVtydWxlU291cmNlTmFtZV07XG5cbiAgaWYgKCFzdGF0ZSkge1xuICAgIHJldHVybiBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iLCJpbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbWJpbmVkUnVsZSxcbiAgQ29tYmluZWRSdWxlR3JvdXAsXG4gIENvbWJpbmVkUnVsZU5hbWVzcGFjZSxcbiAgUnVsZSxcbiAgUnVsZUdyb3VwLFxuICBSdWxlTmFtZXNwYWNlLFxuICBSdWxlc1NvdXJjZSxcbn0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgUnVsZXJSdWxlRFRPLCBSdWxlclJ1bGVHcm91cERUTywgUnVsZXJSdWxlc0NvbmZpZ0RUTyB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7XG4gIGdldEFsbFJ1bGVzU291cmNlcyxcbiAgZ2V0UnVsZXNTb3VyY2VCeU5hbWUsXG4gIGlzQ2xvdWRSdWxlc1NvdXJjZSxcbiAgaXNHcmFmYW5hUnVsZXNTb3VyY2UsXG59IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaXNBbGVydGluZ1J1bGUsIGlzQWxlcnRpbmdSdWxlclJ1bGUsIGlzUmVjb3JkaW5nUnVsZXJSdWxlIH0gZnJvbSAnLi4vdXRpbHMvcnVsZXMnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgQ2FjaGVWYWx1ZSB7XG4gIHByb21SdWxlcz86IFJ1bGVOYW1lc3BhY2VbXTtcbiAgcnVsZXJSdWxlcz86IFJ1bGVyUnVsZXNDb25maWdEVE8gfCBudWxsO1xuICByZXN1bHQ6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdO1xufVxuXG4vLyB0aGlzIGxpdHRsZSBtb25zdGVyIGNvbWJpbmVzIHByb21ldGhldXMgcnVsZXMgYW5kIHJ1bGVyIHJ1bGVzIHRvIHByb2R1Y2UgYSB1bmlmaWVkIGRhdGEgc3RydWN0dXJlXG4vLyBjYW4gbGltaXQgdG8gYSBzaW5nbGUgcnVsZXMgc291cmNlXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyhydWxlc1NvdXJjZU5hbWU/OiBzdHJpbmcpOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSB7XG4gIGNvbnN0IHByb21SdWxlc1Jlc3BvbnNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvbVJ1bGVzKTtcbiAgY29uc3QgcnVsZXJSdWxlc1Jlc3BvbnNlcyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucnVsZXJSdWxlcyk7XG5cbiAgLy8gY2FjaGUgcmVzdWx0cyBwZXIgcnVsZXMgc291cmNlLCBzbyB3ZSBvbmx5IHJlY2FsY3VsYXRlIHRob3NlIGZvciB3aGljaCByZXN1bHRzIGhhdmUgYWN0dWFsbHkgY2hhbmdlZFxuICBjb25zdCBjYWNoZSA9IHVzZVJlZjxSZWNvcmQ8c3RyaW5nLCBDYWNoZVZhbHVlPj4oe30pO1xuXG4gIGNvbnN0IHJ1bGVzU291cmNlcyA9IHVzZU1lbW8oKCk6IFJ1bGVzU291cmNlW10gPT4ge1xuICAgIGlmIChydWxlc1NvdXJjZU5hbWUpIHtcbiAgICAgIGNvbnN0IHJ1bGVzU291cmNlID0gZ2V0UnVsZXNTb3VyY2VCeU5hbWUocnVsZXNTb3VyY2VOYW1lKTtcbiAgICAgIGlmICghcnVsZXNTb3VyY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHJ1bGVzIHNvdXJjZTogJHtydWxlc1NvdXJjZU5hbWV9YCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gW3J1bGVzU291cmNlXTtcbiAgICB9XG4gICAgcmV0dXJuIGdldEFsbFJ1bGVzU291cmNlcygpO1xuICB9LCBbcnVsZXNTb3VyY2VOYW1lXSk7XG5cbiAgcmV0dXJuIHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHJ1bGVzU291cmNlc1xuICAgICAgICAubWFwKChydWxlc1NvdXJjZSk6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdID0+IHtcbiAgICAgICAgICBjb25zdCBydWxlc1NvdXJjZU5hbWUgPSBpc0Nsb3VkUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpID8gcnVsZXNTb3VyY2UubmFtZSA6IHJ1bGVzU291cmNlO1xuICAgICAgICAgIGNvbnN0IHByb21SdWxlcyA9IHByb21SdWxlc1Jlc3BvbnNlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ7XG4gICAgICAgICAgY29uc3QgcnVsZXJSdWxlcyA9IHJ1bGVyUnVsZXNSZXNwb25zZXNbcnVsZXNTb3VyY2VOYW1lXT8ucmVzdWx0O1xuXG4gICAgICAgICAgY29uc3QgY2FjaGVkID0gY2FjaGUuY3VycmVudFtydWxlc1NvdXJjZU5hbWVdO1xuICAgICAgICAgIGlmIChjYWNoZWQgJiYgY2FjaGVkLnByb21SdWxlcyA9PT0gcHJvbVJ1bGVzICYmIGNhY2hlZC5ydWxlclJ1bGVzID09PSBydWxlclJ1bGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkLnJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgbmFtZXNwYWNlczogUmVjb3JkPHN0cmluZywgQ29tYmluZWRSdWxlTmFtZXNwYWNlPiA9IHt9O1xuXG4gICAgICAgICAgLy8gZmlyc3QgZ2V0IGFsbCB0aGUgcnVsZXIgcnVsZXMgaW5cbiAgICAgICAgICBPYmplY3QuZW50cmllcyhydWxlclJ1bGVzIHx8IHt9KS5mb3JFYWNoKChbbmFtZXNwYWNlTmFtZSwgZ3JvdXBzXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UgPSB7XG4gICAgICAgICAgICAgIHJ1bGVzU291cmNlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lc3BhY2VOYW1lLFxuICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5hbWVzcGFjZXNbbmFtZXNwYWNlTmFtZV0gPSBuYW1lc3BhY2U7XG4gICAgICAgICAgICBhZGRSdWxlckdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlLCBncm91cHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gdGhlbiBjb3JyZWxhdGUgd2l0aCBwcm9tZXRoZXVzIHJ1bGVzXG4gICAgICAgICAgcHJvbVJ1bGVzPy5mb3JFYWNoKCh7IG5hbWU6IG5hbWVzcGFjZU5hbWUsIGdyb3VwcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBucyA9IChuYW1lc3BhY2VzW25hbWVzcGFjZU5hbWVdID0gbmFtZXNwYWNlc1tuYW1lc3BhY2VOYW1lXSB8fCB7XG4gICAgICAgICAgICAgIHJ1bGVzU291cmNlLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lc3BhY2VOYW1lLFxuICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFkZFByb21Hcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5zLCBncm91cHMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gT2JqZWN0LnZhbHVlcyhuYW1lc3BhY2VzKTtcblxuICAgICAgICAgIGNhY2hlLmN1cnJlbnRbcnVsZXNTb3VyY2VOYW1lXSA9IHsgcHJvbVJ1bGVzLCBydWxlclJ1bGVzLCByZXN1bHQgfTtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KVxuICAgICAgICAuZmxhdCgpLFxuICAgIFtwcm9tUnVsZXNSZXNwb25zZXMsIHJ1bGVyUnVsZXNSZXNwb25zZXMsIHJ1bGVzU291cmNlc11cbiAgKTtcbn1cblxuLy8gbWVyZ2UgYWxsIGdyb3VwcyBpbiBjYXNlIG9mIGdyYWZhbmEgbWFuYWdlZCwgZXNzZW50aWFsbHkgdHJlYXRpbmcgbmFtZXNwYWNlcyAoZm9sZGVycykgYXMgZ3JvdXBzXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbkdyYWZhbmFNYW5hZ2VkUnVsZXMobmFtZXNwYWNlczogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10pIHtcbiAgcmV0dXJuIG5hbWVzcGFjZXMubWFwKChuYW1lc3BhY2UpID0+IHtcbiAgICBjb25zdCBuZXdOYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSA9IHtcbiAgICAgIC4uLm5hbWVzcGFjZSxcbiAgICAgIGdyb3VwczogW10sXG4gICAgfTtcblxuICAgIC8vIGFkZCBkZWZhdWx0IGdyb3VwIHdpdGggdW5ncm91cGVkIHJ1bGVzXG4gICAgbmV3TmFtZXNwYWNlLmdyb3Vwcy5wdXNoKHtcbiAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgIHJ1bGVzOiBzb3J0UnVsZXNCeU5hbWUobmFtZXNwYWNlLmdyb3Vwcy5mbGF0TWFwKChncm91cCkgPT4gZ3JvdXAucnVsZXMpKSxcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdOYW1lc3BhY2U7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydFJ1bGVzQnlOYW1lKHJ1bGVzOiBDb21iaW5lZFJ1bGVbXSkge1xuICByZXR1cm4gcnVsZXMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSwgZ3JvdXBzOiBSdWxlclJ1bGVHcm91cERUT1tdKTogdm9pZCB7XG4gIG5hbWVzcGFjZS5ncm91cHMgPSBncm91cHMubWFwKChncm91cCkgPT4ge1xuICAgIGNvbnN0IGNvbWJpbmVkR3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwID0ge1xuICAgICAgbmFtZTogZ3JvdXAubmFtZSxcbiAgICAgIGludGVydmFsOiBncm91cC5pbnRlcnZhbCxcbiAgICAgIHNvdXJjZV90ZW5hbnRzOiBncm91cC5zb3VyY2VfdGVuYW50cyxcbiAgICAgIHJ1bGVzOiBbXSxcbiAgICB9O1xuICAgIGNvbWJpbmVkR3JvdXAucnVsZXMgPSBncm91cC5ydWxlcy5tYXAoKHJ1bGUpID0+IHJ1bGVyUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGUsIG5hbWVzcGFjZSwgY29tYmluZWRHcm91cCkpO1xuICAgIHJldHVybiBjb21iaW5lZEdyb3VwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsIGdyb3VwczogUnVsZUdyb3VwW10pOiB2b2lkIHtcbiAgZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgbGV0IGNvbWJpbmVkR3JvdXAgPSBuYW1lc3BhY2UuZ3JvdXBzLmZpbmQoKGcpID0+IGcubmFtZSA9PT0gZ3JvdXAubmFtZSk7XG4gICAgaWYgKCFjb21iaW5lZEdyb3VwKSB7XG4gICAgICBjb21iaW5lZEdyb3VwID0ge1xuICAgICAgICBuYW1lOiBncm91cC5uYW1lLFxuICAgICAgICBydWxlczogW10sXG4gICAgICB9O1xuICAgICAgbmFtZXNwYWNlLmdyb3Vwcy5wdXNoKGNvbWJpbmVkR3JvdXApO1xuICAgIH1cblxuICAgIChncm91cC5ydWxlcyA/PyBbXSkuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmdSdWxlID0gZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cChydWxlLCBjb21iaW5lZEdyb3VwISwgbmFtZXNwYWNlLnJ1bGVzU291cmNlKTtcbiAgICAgIGlmIChleGlzdGluZ1J1bGUpIHtcbiAgICAgICAgZXhpc3RpbmdSdWxlLnByb21SdWxlID0gcnVsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbWJpbmVkR3JvdXAhLnJ1bGVzLnB1c2gocHJvbVJ1bGVUb0NvbWJpbmVkUnVsZShydWxlLCBuYW1lc3BhY2UsIGNvbWJpbmVkR3JvdXAhKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwcm9tUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGU6IFJ1bGUsIG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLCBncm91cDogQ29tYmluZWRSdWxlR3JvdXApOiBDb21iaW5lZFJ1bGUge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IHJ1bGUubmFtZSxcbiAgICBxdWVyeTogcnVsZS5xdWVyeSxcbiAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgIGFubm90YXRpb25zOiBpc0FsZXJ0aW5nUnVsZShydWxlKSA/IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30gOiB7fSxcbiAgICBwcm9tUnVsZTogcnVsZSxcbiAgICBuYW1lc3BhY2U6IG5hbWVzcGFjZSxcbiAgICBncm91cCxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcnVsZXJSdWxlVG9Db21iaW5lZFJ1bGUoXG4gIHJ1bGU6IFJ1bGVyUnVsZURUTyxcbiAgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsXG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cFxuKTogQ29tYmluZWRSdWxlIHtcbiAgcmV0dXJuIGlzQWxlcnRpbmdSdWxlclJ1bGUocnVsZSlcbiAgICA/IHtcbiAgICAgICAgbmFtZTogcnVsZS5hbGVydCxcbiAgICAgICAgcXVlcnk6IHJ1bGUuZXhwcixcbiAgICAgICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH1cbiAgICA6IGlzUmVjb3JkaW5nUnVsZXJSdWxlKHJ1bGUpXG4gICAgPyB7XG4gICAgICAgIG5hbWU6IHJ1bGUucmVjb3JkLFxuICAgICAgICBxdWVyeTogcnVsZS5leHByLFxuICAgICAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBhbm5vdGF0aW9uczoge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH1cbiAgICA6IHtcbiAgICAgICAgbmFtZTogcnVsZS5ncmFmYW5hX2FsZXJ0LnRpdGxlLFxuICAgICAgICBxdWVyeTogJycsXG4gICAgICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGFubm90YXRpb25zOiBydWxlLmFubm90YXRpb25zIHx8IHt9LFxuICAgICAgICBydWxlclJ1bGU6IHJ1bGUsXG4gICAgICAgIG5hbWVzcGFjZSxcbiAgICAgICAgZ3JvdXAsXG4gICAgICB9O1xufVxuXG4vLyBmaW5kIGV4aXN0aW5nIHJ1bGUgaW4gZ3JvdXAgdGhhdCBtYXRjaGVzIHRoZSBnaXZlbiBwcm9tIHJ1bGVcbmZ1bmN0aW9uIGdldEV4aXN0aW5nUnVsZUluR3JvdXAoXG4gIHJ1bGU6IFJ1bGUsXG4gIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cCxcbiAgcnVsZXNTb3VyY2U6IFJ1bGVzU291cmNlXG4pOiBDb21iaW5lZFJ1bGUgfCB1bmRlZmluZWQge1xuICBpZiAoaXNHcmFmYW5hUnVsZXNTb3VyY2UocnVsZXNTb3VyY2UpKSB7XG4gICAgLy8gYXNzdW1lIGdyYWZhbmEgZ3JvdXBzIGhhdmUgb25seSB0aGUgb25lIHJ1bGUuIGNoZWNrIG5hbWUgYW55d2F5IGJlY2F1c2UgcGFyYW5vaWRcbiAgICByZXR1cm4gZ3JvdXAhLnJ1bGVzLmZpbmQoKGV4aXN0aW5nUnVsZSkgPT4gZXhpc3RpbmdSdWxlLm5hbWUgPT09IHJ1bGUubmFtZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICAvLyB0cnkgZmluZGluZyBhIHJ1bGUgdGhhdCBtYXRjaGVzIG5hbWUsIGxhYmVscywgYW5ub3RhdGlvbnMgYW5kIHF1ZXJ5XG4gICAgZ3JvdXAhLnJ1bGVzLmZpbmQoXG4gICAgICAoZXhpc3RpbmdSdWxlKSA9PiAhZXhpc3RpbmdSdWxlLnByb21SdWxlICYmIGlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlKGV4aXN0aW5nUnVsZSwgcnVsZSwgdHJ1ZSlcbiAgICApID8/XG4gICAgLy8gaWYgdGhhdCBmYWlscywgdHJ5IGZpbmRpbmcgYSBydWxlIHRoYXQgb25seSBtYXRjaGVzIG5hbWUsIGxhYmVscyBhbmQgYW5ub3RhdGlvbnMuXG4gICAgLy8gbG9raSAmIHByb20gY2FuIHNvbWV0aW1lcyBtb2RpZnkgdGhlIHF1ZXJ5IHNvIGl0IGRvZXNudCBtYXRjaCwgZWcgYDIgPiAxYCBiZWNvbWVzIGAxYFxuICAgIGdyb3VwIS5ydWxlcy5maW5kKFxuICAgICAgKGV4aXN0aW5nUnVsZSkgPT4gIWV4aXN0aW5nUnVsZS5wcm9tUnVsZSAmJiBpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZShleGlzdGluZ1J1bGUsIHJ1bGUsIGZhbHNlKVxuICAgIClcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUoY29tYmluZWRSdWxlOiBDb21iaW5lZFJ1bGUsIHJ1bGU6IFJ1bGUsIGNoZWNrUXVlcnkgPSB0cnVlKTogYm9vbGVhbiB7XG4gIGlmIChjb21iaW5lZFJ1bGUubmFtZSA9PT0gcnVsZS5uYW1lKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgY2hlY2tRdWVyeSA/IGhhc2hRdWVyeShjb21iaW5lZFJ1bGUucXVlcnkpIDogJycsXG4gICAgICAgIGNvbWJpbmVkUnVsZS5sYWJlbHMsXG4gICAgICAgIGNvbWJpbmVkUnVsZS5hbm5vdGF0aW9ucyxcbiAgICAgIF0pID09PVxuICAgICAgSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICBjaGVja1F1ZXJ5ID8gaGFzaFF1ZXJ5KHJ1bGUucXVlcnkpIDogJycsXG4gICAgICAgIHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBpc0FsZXJ0aW5nUnVsZShydWxlKSA/IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30gOiB7fSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIHRoZXJlIGNhbiBiZSBzbGlnaHQgZGlmZmVyZW5jZXMgaW4gaG93IHByb20gJiBydWxlciByZW5kZXIgYSBxdWVyeSwgdGhpcyB3aWxsIGhhc2ggdGhlbSBhY2NvdW50aW5nIGZvciB0aGUgZGlmZmVyZW5jZXNcbmZ1bmN0aW9uIGhhc2hRdWVyeShxdWVyeTogc3RyaW5nKSB7XG4gIC8vIG9uZSBvZiB0aGVtIG1pZ2h0IGJlIHdyYXBwZWQgaW4gcGFyZW5zXG4gIGlmIChxdWVyeS5sZW5ndGggPiAxICYmIHF1ZXJ5WzBdID09PSAnKCcgJiYgcXVlcnlbcXVlcnkubGVuZ3RoIC0gMV0gPT09ICcpJykge1xuICAgIHF1ZXJ5ID0gcXVlcnkuc2xpY2UoMSwgLTEpO1xuICB9XG4gIC8vIHdoaXRlc3BhY2UgY291bGQgYmUgYWRkZWQgb3IgcmVtb3ZlZFxuICBxdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoL1xcc3xcXG4vZywgJycpO1xuICAvLyBsYWJlbHMgbWF0Y2hlcnMgY2FuIGJlIHJlb3JkZXJlZCwgc28gc29ydCB0aGUgZW5pdHJlIHN0cmluZywgZXNlbnRpYWxseSBjb21wYXJpbmcganVzdCB0aGUgY2hhcmFjdGVyIGNvdW50c1xuICByZXR1cm4gcXVlcnkuc3BsaXQoJycpLnNvcnQoKS5qb2luKCcnKTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBGb2xkZXJEVE8gfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBmZXRjaEZvbGRlcklmTm90RmV0Y2hlZEFjdGlvbiB9IGZyb20gJy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvcmVkdXgnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgUmV0dXJuQmFnIHtcbiAgZm9sZGVyPzogRm9sZGVyRFRPO1xuICBsb2FkaW5nOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9sZGVyKHVpZD86IHN0cmluZyk6IFJldHVybkJhZyB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgZm9sZGVyUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZvbGRlcnMpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1aWQpIHtcbiAgICAgIGRpc3BhdGNoKGZldGNoRm9sZGVySWZOb3RGZXRjaGVkQWN0aW9uKHVpZCkpO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoLCB1aWRdKTtcblxuICBpZiAodWlkKSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGZvbGRlclJlcXVlc3RzW3VpZF0gfHwgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlO1xuICAgIHJldHVybiB7XG4gICAgICBmb2xkZXI6IHJlcXVlc3QucmVzdWx0LFxuICAgICAgbG9hZGluZzogcmVxdWVzdC5sb2FkaW5nLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGNvbnRleHRTcnYgfSBmcm9tICdhcHAvY29yZS9zZXJ2aWNlcy9jb250ZXh0X3Nydic7XG5pbXBvcnQgeyBSdWxlclJ1bGVEVE8gfSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZy1kdG8nO1xuXG5pbXBvcnQgeyBnZXRSdWxlc1Blcm1pc3Npb25zIH0gZnJvbSAnLi4vdXRpbHMvYWNjZXNzLWNvbnRyb2wnO1xuaW1wb3J0IHsgaXNHcmFmYW5hUnVsZXJSdWxlIH0gZnJvbSAnLi4vdXRpbHMvcnVsZXMnO1xuXG5pbXBvcnQgeyB1c2VGb2xkZXIgfSBmcm9tICcuL3VzZUZvbGRlcic7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5pbnRlcmZhY2UgUmVzdWx0QmFnIHtcbiAgaXNFZGl0YWJsZT86IGJvb2xlYW47XG4gIGlzUmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUlzUnVsZUVkaXRhYmxlKHJ1bGVzU291cmNlTmFtZTogc3RyaW5nLCBydWxlPzogUnVsZXJSdWxlRFRPKTogUmVzdWx0QmFnIHtcbiAgY29uc3QgZGF0YVNvdXJjZXMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRhdGFTb3VyY2VzKTtcbiAgY29uc3QgZm9sZGVyVUlEID0gcnVsZSAmJiBpc0dyYWZhbmFSdWxlclJ1bGUocnVsZSkgPyBydWxlLmdyYWZhbmFfYWxlcnQubmFtZXNwYWNlX3VpZCA6IHVuZGVmaW5lZDtcblxuICBjb25zdCBydWxlUGVybWlzc2lvbiA9IGdldFJ1bGVzUGVybWlzc2lvbnMocnVsZXNTb3VyY2VOYW1lKTtcbiAgY29uc3QgaGFzRWRpdFBlcm1pc3Npb24gPSBjb250ZXh0U3J2Lmhhc0FjY2VzcyhydWxlUGVybWlzc2lvbi51cGRhdGUsIGNvbnRleHRTcnYuaXNFZGl0b3IpO1xuICBjb25zdCBoYXNSZW1vdmVQZXJtaXNzaW9uID0gY29udGV4dFNydi5oYXNBY2Nlc3MocnVsZVBlcm1pc3Npb24uZGVsZXRlLCBjb250ZXh0U3J2LmlzRWRpdG9yKTtcblxuICBjb25zdCB7IGZvbGRlciwgbG9hZGluZyB9ID0gdXNlRm9sZGVyKGZvbGRlclVJRCk7XG5cbiAgaWYgKCFydWxlKSB7XG4gICAgcmV0dXJuIHsgaXNFZGl0YWJsZTogZmFsc2UsIGlzUmVtb3ZhYmxlOiBmYWxzZSwgbG9hZGluZzogZmFsc2UgfTtcbiAgfVxuXG4gIC8vIGdyYWZhbmEgcnVsZXMgY2FuIGJlIGVkaXRlZCBpZiB1c2VyIGNhbiBlZGl0IHRoZSBmb2xkZXIgdGhleSdyZSBpblxuICBpZiAoaXNHcmFmYW5hUnVsZXJSdWxlKHJ1bGUpKSB7XG4gICAgaWYgKCFmb2xkZXJVSUQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFJ1bGUgJHtydWxlLmdyYWZhbmFfYWxlcnQudGl0bGV9IGRvZXMgbm90IGhhdmUgYSBmb2xkZXIgdWlkLCBjYW5ub3QgZGV0ZXJtaW5lIGlmIGl0IGlzIGVkaXRhYmxlLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBpc0VkaXRhYmxlOiBoYXNFZGl0UGVybWlzc2lvbiAmJiBmb2xkZXI/LmNhblNhdmUsXG4gICAgICBpc1JlbW92YWJsZTogaGFzUmVtb3ZlUGVybWlzc2lvbiAmJiBmb2xkZXI/LmNhblNhdmUsXG4gICAgICBsb2FkaW5nLFxuICAgIH07XG4gIH1cblxuICAvLyBwcm9tIHJ1bGVzIGFyZSBvbmx5IGVkaXRhYmxlIGJ5IHVzZXJzIHdpdGggRWRpdG9yIHJvbGUgYW5kIG9ubHkgaWYgcnVsZXMgc291cmNlIHN1cHBvcnRzIGVkaXRpbmdcbiAgY29uc3QgaXNSdWxlckF2YWlsYWJsZSA9IEJvb2xlYW4oZGF0YVNvdXJjZXNbcnVsZXNTb3VyY2VOYW1lXT8ucmVzdWx0Py5ydWxlckNvbmZpZyk7XG4gIHJldHVybiB7XG4gICAgaXNFZGl0YWJsZTogaGFzRWRpdFBlcm1pc3Npb24gJiYgaXNSdWxlckF2YWlsYWJsZSxcbiAgICBpc1JlbW92YWJsZTogaGFzUmVtb3ZlUGVybWlzc2lvbiAmJiBpc1J1bGVyQXZhaWxhYmxlLFxuICAgIGxvYWRpbmc6IGRhdGFTb3VyY2VzW3J1bGVzU291cmNlTmFtZV0/LmxvYWRpbmcsXG4gIH07XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgU3RhdGVIaXN0b3J5SXRlbSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nJztcblxuaW1wb3J0IHsgZmV0Y2hHcmFmYW5hQW5ub3RhdGlvbnNBY3Rpb24gfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvcmVkdXgnO1xuXG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWFuYWdlZEFsZXJ0U3RhdGVIaXN0b3J5KGFsZXJ0SWQ6IHN0cmluZykge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvcjxBc3luY1JlcXVlc3RTdGF0ZTxTdGF0ZUhpc3RvcnlJdGVtW10+PihcbiAgICAoc3RhdGUpID0+IHN0YXRlLm1hbmFnZWRBbGVydFN0YXRlSGlzdG9yeVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hHcmFmYW5hQW5ub3RhdGlvbnNBY3Rpb24oYWxlcnRJZCkpO1xuICB9LCBbZGlzcGF0Y2gsIGFsZXJ0SWRdKTtcblxuICByZXR1cm4gaGlzdG9yeTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IFN0YXRlSGlzdG9yeSB9IGZyb20gJy4uL2NvbXBvbmVudHMvcnVsZXMvU3RhdGVIaXN0b3J5JztcblxuZnVuY3Rpb24gdXNlU3RhdGVIaXN0b3J5TW9kYWwoYWxlcnRJZDogc3RyaW5nKSB7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgU3RhdGVIaXN0b3J5TW9kYWwgPSB1c2VNZW1vKFxuICAgICgpID0+IChcbiAgICAgIDxNb2RhbFxuICAgICAgICBpc09wZW49e3Nob3dNb2RhbH1cbiAgICAgICAgb25EaXNtaXNzPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxuICAgICAgICBjbG9zZU9uQmFja2Ryb3BDbGljaz17dHJ1ZX1cbiAgICAgICAgY2xvc2VPbkVzY2FwZT17dHJ1ZX1cbiAgICAgICAgdGl0bGU9XCJTdGF0ZSBoaXN0b3J5XCJcbiAgICAgID5cbiAgICAgICAgPFN0YXRlSGlzdG9yeSBhbGVydElkPXthbGVydElkfSAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICApLFxuICAgIFthbGVydElkLCBzaG93TW9kYWxdXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBTdGF0ZUhpc3RvcnlNb2RhbCxcbiAgICBzaG93U3RhdGVIaXN0b3J5TW9kYWw6ICgpID0+IHNldFNob3dNb2RhbCh0cnVlKSxcbiAgICBoaWRlU3RhdGVIaXN0b3J5TW9kYWw6ICgpID0+IHNldFNob3dNb2RhbChmYWxzZSksXG4gIH07XG59XG5cbmV4cG9ydCB7IHVzZVN0YXRlSGlzdG9yeU1vZGFsIH07XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgT3BlcmF0b3JGdW5jdGlvbiwgUmVwbGF5U3ViamVjdCwgVW5zdWJzY3JpYmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuaW1wb3J0IHtcbiAgZGF0YUZyYW1lRnJvbUpTT04sXG4gIERhdGFGcmFtZUpTT04sXG4gIGdldERlZmF1bHRUaW1lUmFuZ2UsXG4gIExvYWRpbmdTdGF0ZSxcbiAgUGFuZWxEYXRhLFxuICByYW5nZVV0aWwsXG4gIFRpbWVSYW5nZSxcbiAgd2l0aExvYWRpbmdJbmRpY2F0b3IsXG59IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgRmV0Y2hSZXNwb25zZSwgZ2V0RGF0YVNvdXJjZVNydiwgdG9EYXRhUXVlcnlFcnJvciB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQmFja2VuZFNydiwgZ2V0QmFja2VuZFNydiB9IGZyb20gJ2FwcC9jb3JlL3NlcnZpY2VzL2JhY2tlbmRfc3J2JztcbmltcG9ydCB7IGlzRXhwcmVzc2lvblF1ZXJ5IH0gZnJvbSAnYXBwL2ZlYXR1cmVzL2V4cHJlc3Npb25zL2d1YXJkcyc7XG5pbXBvcnQgeyBjYW5jZWxOZXR3b3JrUmVxdWVzdHNPblVuc3Vic2NyaWJlIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3F1ZXJ5L3N0YXRlL3Byb2Nlc3NpbmcvY2FuY2VsZXInO1xuaW1wb3J0IHsgc2V0U3RydWN0dXJlUmV2aXNpb24gfSBmcm9tICdhcHAvZmVhdHVyZXMvcXVlcnkvc3RhdGUvcHJvY2Vzc2luZy9yZXZpc2lvbic7XG5pbXBvcnQgeyBwcmVQcm9jZXNzUGFuZWxEYXRhIH0gZnJvbSAnYXBwL2ZlYXR1cmVzL3F1ZXJ5L3N0YXRlL3J1blJlcXVlc3QnO1xuaW1wb3J0IHsgQWxlcnRRdWVyeSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IGdldFRpbWVSYW5nZUZvckV4cHJlc3Npb24gfSBmcm9tICcuLi91dGlscy90aW1lUmFuZ2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0aW5nUXVlcnlSZXN1bHQge1xuICBmcmFtZXM6IERhdGFGcmFtZUpTT05bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbGVydGluZ1F1ZXJ5UmVzcG9uc2Uge1xuICByZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCBBbGVydGluZ1F1ZXJ5UmVzdWx0Pjtcbn1cbmV4cG9ydCBjbGFzcyBBbGVydGluZ1F1ZXJ5UnVubmVyIHtcbiAgcHJpdmF0ZSBzdWJqZWN0OiBSZXBsYXlTdWJqZWN0PFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4+O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbj86IFVuc3Vic2NyaWJhYmxlO1xuICBwcml2YXRlIGxhc3RSZXN1bHQ6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrZW5kU3J2ID0gZ2V0QmFja2VuZFNydigpLCBwcml2YXRlIGRhdGFTb3VyY2VTcnYgPSBnZXREYXRhU291cmNlU3J2KCkpIHtcbiAgICB0aGlzLnN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcbiAgICB0aGlzLmxhc3RSZXN1bHQgPSB7fTtcbiAgfVxuXG4gIGdldCgpOiBPYnNlcnZhYmxlPFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgYXN5bmMgcnVuKHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSkge1xuICAgIGlmIChxdWVyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZW1wdHkgPSBpbml0aWFsU3RhdGUocXVlcmllcywgTG9hZGluZ1N0YXRlLkRvbmUpO1xuICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdC5uZXh0KGVtcHR5KTtcbiAgICB9XG5cbiAgICAvLyBkbyBub3QgZXhlY3V0ZSBpZiBvbmUgbW9yZSBvZiB0aGUgcXVlcmllcyBhcmUgbm90IHJ1bm5hYmxlLFxuICAgIC8vIGZvciBleGFtcGxlIG5vdCBjb21wbGV0ZWx5IGNvbmZpZ3VyZWRcbiAgICBmb3IgKGNvbnN0IHF1ZXJ5IG9mIHF1ZXJpZXMpIHtcbiAgICAgIGlmICghaXNFeHByZXNzaW9uUXVlcnkocXVlcnkubW9kZWwpKSB7XG4gICAgICAgIGNvbnN0IGRzID0gYXdhaXQgdGhpcy5kYXRhU291cmNlU3J2LmdldChxdWVyeS5kYXRhc291cmNlVWlkKTtcbiAgICAgICAgaWYgKGRzLmZpbHRlclF1ZXJ5ICYmICFkcy5maWx0ZXJRdWVyeShxdWVyeS5tb2RlbCkpIHtcbiAgICAgICAgICBjb25zdCBlbXB0eSA9IGluaXRpYWxTdGF0ZShxdWVyaWVzLCBMb2FkaW5nU3RhdGUuRG9uZSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdC5uZXh0KGVtcHR5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gcnVuUmVxdWVzdCh0aGlzLmJhY2tlbmRTcnYsIHF1ZXJpZXMpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAoZGF0YVBlclF1ZXJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRSZXN1bHQgPSBhcHBseUNoYW5nZShkYXRhUGVyUXVlcnksIChyZWZJZCwgZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5sYXN0UmVzdWx0W3JlZklkXTtcbiAgICAgICAgICBjb25zdCBwcmVQcm9jZXNzZWQgPSBwcmVQcm9jZXNzUGFuZWxEYXRhKGRhdGEsIHByZXZpb3VzKTtcbiAgICAgICAgICByZXR1cm4gc2V0U3RydWN0dXJlUmV2aXNpb24ocHJlUHJvY2Vzc2VkLCBwcmV2aW91cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGFzdFJlc3VsdCA9IG5leHRSZXN1bHQ7XG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHRoaXMubGFzdFJlc3VsdCk7XG4gICAgICB9LFxuXG4gICAgICBlcnJvcjogKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICB0aGlzLmxhc3RSZXN1bHQgPSBtYXBFcnJvclRvUGFuZWxEYXRhKHRoaXMubGFzdFJlc3VsdCwgZXJyb3IpO1xuICAgICAgICB0aGlzLnN1YmplY3QubmV4dCh0aGlzLmxhc3RSZXN1bHQpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICBpZiAoIXRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cbiAgICBsZXQgcmVxdWVzdElzUnVubmluZyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbmV4dFJlc3VsdCA9IGFwcGx5Q2hhbmdlKHRoaXMubGFzdFJlc3VsdCwgKHJlZklkLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5zdGF0ZSA9PT0gTG9hZGluZ1N0YXRlLkxvYWRpbmcpIHtcbiAgICAgICAgcmVxdWVzdElzUnVubmluZyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIHN0YXRlOiBMb2FkaW5nU3RhdGUuRG9uZSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBpZiAocmVxdWVzdElzUnVubmluZykge1xuICAgICAgdGhpcy5zdWJqZWN0Lm5leHQobmV4dFJlc3VsdCk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJqZWN0KSB7XG4gICAgICB0aGlzLnN1YmplY3QuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmNhbmNlbCgpO1xuICB9XG59XG5cbmNvbnN0IHJ1blJlcXVlc3QgPSAoYmFja2VuZFNydjogQmFja2VuZFNydiwgcXVlcmllczogQWxlcnRRdWVyeVtdKTogT2JzZXJ2YWJsZTxSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+PiA9PiB7XG4gIGNvbnN0IGluaXRpYWwgPSBpbml0aWFsU3RhdGUocXVlcmllcywgTG9hZGluZ1N0YXRlLkxvYWRpbmcpO1xuICBjb25zdCByZXF1ZXN0ID0ge1xuICAgIGRhdGE6IHsgZGF0YTogcXVlcmllcyB9LFxuICAgIHVybDogJy9hcGkvdjEvZXZhbCcsXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgcmVxdWVzdElkOiB1dWlkdjQoKSxcbiAgfTtcblxuICByZXR1cm4gd2l0aExvYWRpbmdJbmRpY2F0b3Ioe1xuICAgIHdoaWxlTG9hZGluZzogaW5pdGlhbCxcbiAgICBzb3VyY2U6IGJhY2tlbmRTcnYuZmV0Y2g8QWxlcnRpbmdRdWVyeVJlc3BvbnNlPihyZXF1ZXN0KS5waXBlKFxuICAgICAgbWFwVG9QYW5lbERhdGEoaW5pdGlhbCksXG4gICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4gb2YobWFwRXJyb3JUb1BhbmVsRGF0YShpbml0aWFsLCBlcnJvcikpKSxcbiAgICAgIGNhbmNlbE5ldHdvcmtSZXF1ZXN0c09uVW5zdWJzY3JpYmUoYmFja2VuZFNydiwgcmVxdWVzdC5yZXF1ZXN0SWQpLFxuICAgICAgc2hhcmUoKVxuICAgICksXG4gIH0pO1xufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gKHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSwgc3RhdGU6IExvYWRpbmdTdGF0ZSk6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4gPT4ge1xuICByZXR1cm4gcXVlcmllcy5yZWR1Y2UoKGRhdGFCeVF1ZXJ5OiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+LCBxdWVyeSkgPT4ge1xuICAgIGRhdGFCeVF1ZXJ5W3F1ZXJ5LnJlZklkXSA9IHtcbiAgICAgIHN0YXRlLFxuICAgICAgc2VyaWVzOiBbXSxcbiAgICAgIHRpbWVSYW5nZTogZ2V0VGltZVJhbmdlKHF1ZXJ5LCBxdWVyaWVzKSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRhdGFCeVF1ZXJ5O1xuICB9LCB7fSk7XG59O1xuXG5jb25zdCBnZXRUaW1lUmFuZ2UgPSAocXVlcnk6IEFsZXJ0UXVlcnksIHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSk6IFRpbWVSYW5nZSA9PiB7XG4gIGlmIChpc0V4cHJlc3Npb25RdWVyeShxdWVyeS5tb2RlbCkpIHtcbiAgICBjb25zdCByZWxhdGl2ZSA9IGdldFRpbWVSYW5nZUZvckV4cHJlc3Npb24ocXVlcnkubW9kZWwsIHF1ZXJpZXMpO1xuICAgIHJldHVybiByYW5nZVV0aWwucmVsYXRpdmVUb1RpbWVSYW5nZShyZWxhdGl2ZSk7XG4gIH1cblxuICBpZiAoIXF1ZXJ5LnJlbGF0aXZlVGltZVJhbmdlKSB7XG4gICAgY29uc29sZS53YXJuKGBRdWVyeSB3aXRoIHJlZklkOiAke3F1ZXJ5LnJlZklkfSBkaWQgbm90IGhhdmUgYW55IHJlbGF0aXZlIHRpbWUgcmFuZ2UsIHVzaW5nIGRlZmF1bHQuYCk7XG4gICAgcmV0dXJuIGdldERlZmF1bHRUaW1lUmFuZ2UoKTtcbiAgfVxuXG4gIHJldHVybiByYW5nZVV0aWwucmVsYXRpdmVUb1RpbWVSYW5nZShxdWVyeS5yZWxhdGl2ZVRpbWVSYW5nZSk7XG59O1xuXG5jb25zdCBtYXBUb1BhbmVsRGF0YSA9IChcbiAgZGF0YUJ5UXVlcnk6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT5cbik6IE9wZXJhdG9yRnVuY3Rpb248RmV0Y2hSZXNwb25zZTxBbGVydGluZ1F1ZXJ5UmVzcG9uc2U+LCBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+PiA9PiB7XG4gIHJldHVybiBtYXAoKHJlc3BvbnNlKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcbiAgICBjb25zdCByZXN1bHRzOiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IFtyZWZJZCwgcmVzdWx0XSBvZiBPYmplY3QuZW50cmllcyhkYXRhLnJlc3VsdHMpKSB7XG4gICAgICByZXN1bHRzW3JlZklkXSA9IHtcbiAgICAgICAgdGltZVJhbmdlOiBkYXRhQnlRdWVyeVtyZWZJZF0udGltZVJhbmdlLFxuICAgICAgICBzdGF0ZTogTG9hZGluZ1N0YXRlLkRvbmUsXG4gICAgICAgIHNlcmllczogcmVzdWx0LmZyYW1lcy5tYXAoZGF0YUZyYW1lRnJvbUpTT04pLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfSk7XG59O1xuXG5jb25zdCBtYXBFcnJvclRvUGFuZWxEYXRhID0gKGxhc3RSZXN1bHQ6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4sIGVycm9yOiBFcnJvcik6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4gPT4ge1xuICBjb25zdCBxdWVyeUVycm9yID0gdG9EYXRhUXVlcnlFcnJvcihlcnJvcik7XG5cbiAgcmV0dXJuIGFwcGx5Q2hhbmdlKGxhc3RSZXN1bHQsIChyZWZJZCwgZGF0YSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5kYXRhLFxuICAgICAgc3RhdGU6IExvYWRpbmdTdGF0ZS5FcnJvcixcbiAgICAgIGVycm9yOiBxdWVyeUVycm9yLFxuICAgIH07XG4gIH0pO1xufTtcblxuY29uc3QgYXBwbHlDaGFuZ2UgPSAoXG4gIGluaXRpYWw6IFJlY29yZDxzdHJpbmcsIFBhbmVsRGF0YT4sXG4gIGNoYW5nZTogKHJlZklkOiBzdHJpbmcsIGRhdGE6IFBhbmVsRGF0YSkgPT4gUGFuZWxEYXRhXG4pOiBSZWNvcmQ8c3RyaW5nLCBQYW5lbERhdGE+ID0+IHtcbiAgY29uc3QgbmV4dFJlc3VsdDogUmVjb3JkPHN0cmluZywgUGFuZWxEYXRhPiA9IHt9O1xuXG4gIGZvciAoY29uc3QgW3JlZklkLCBkYXRhXSBvZiBPYmplY3QuZW50cmllcyhpbml0aWFsKSkge1xuICAgIG5leHRSZXN1bHRbcmVmSWRdID0gY2hhbmdlKHJlZklkLCBkYXRhKTtcbiAgfVxuXG4gIHJldHVybiBuZXh0UmVzdWx0O1xufTtcbiIsImltcG9ydCB7IERhdGFRdWVyeSwgRGF0YVNvdXJjZUluc3RhbmNlU2V0dGluZ3MgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IExva2lRdWVyeSB9IGZyb20gJ2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbG9raS90eXBlcyc7XG5pbXBvcnQgeyBQcm9tUXVlcnkgfSBmcm9tICdhcHAvcGx1Z2lucy9kYXRhc291cmNlL3Byb21ldGhldXMvdHlwZXMnO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgQWxlcnRRdWVyeSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IGlzQ2xvdWRSdWxlc1NvdXJjZSwgaXNHcmFmYW5hUnVsZXNTb3VyY2UgfSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgaXNHcmFmYW5hUnVsZXJSdWxlIH0gZnJvbSAnLi9ydWxlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGVydFJ1bGVUb1F1ZXJpZXMoY29tYmluZWRSdWxlOiBDb21iaW5lZFJ1bGUgfCB1bmRlZmluZWQgfCBudWxsKTogQWxlcnRRdWVyeVtdIHtcbiAgaWYgKCFjb21iaW5lZFJ1bGUpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgeyBuYW1lc3BhY2UsIHJ1bGVyUnVsZSB9ID0gY29tYmluZWRSdWxlO1xuICBjb25zdCB7IHJ1bGVzU291cmNlIH0gPSBuYW1lc3BhY2U7XG5cbiAgaWYgKGlzR3JhZmFuYVJ1bGVzU291cmNlKHJ1bGVzU291cmNlKSkge1xuICAgIGlmIChpc0dyYWZhbmFSdWxlclJ1bGUocnVsZXJSdWxlKSkge1xuICAgICAgcmV0dXJuIHJ1bGVyUnVsZS5ncmFmYW5hX2FsZXJ0LmRhdGE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkpIHtcbiAgICBjb25zdCBtb2RlbCA9IGNsb3VkQWxlcnRSdWxlVG9Nb2RlbChydWxlc1NvdXJjZSwgY29tYmluZWRSdWxlKTtcblxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHJlZklkOiBtb2RlbC5yZWZJZCxcbiAgICAgICAgZGF0YXNvdXJjZVVpZDogcnVsZXNTb3VyY2UudWlkLFxuICAgICAgICBxdWVyeVR5cGU6ICcnLFxuICAgICAgICBtb2RlbCxcbiAgICAgICAgcmVsYXRpdmVUaW1lUmFuZ2U6IHtcbiAgICAgICAgICBmcm9tOiAzNjAsXG4gICAgICAgICAgdG86IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gW107XG59XG5cbmZ1bmN0aW9uIGNsb3VkQWxlcnRSdWxlVG9Nb2RlbChkc1NldHRpbmdzOiBEYXRhU291cmNlSW5zdGFuY2VTZXR0aW5ncywgcnVsZTogQ29tYmluZWRSdWxlKTogRGF0YVF1ZXJ5IHtcbiAgY29uc3QgcmVmSWQgPSAnQSc7XG5cbiAgc3dpdGNoIChkc1NldHRpbmdzLnR5cGUpIHtcbiAgICBjYXNlICdwcm9tZXRoZXVzJzoge1xuICAgICAgY29uc3QgcXVlcnk6IFByb21RdWVyeSA9IHtcbiAgICAgICAgcmVmSWQsXG4gICAgICAgIGV4cHI6IHJ1bGUucXVlcnksXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfVxuXG4gICAgY2FzZSAnbG9raSc6IHtcbiAgICAgIGNvbnN0IHF1ZXJ5OiBMb2tpUXVlcnkgPSB7XG4gICAgICAgIHJlZklkLFxuICAgICAgICBleHByOiBydWxlLnF1ZXJ5LFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFF1ZXJ5IGZvciBkYXRhc291cmNlIHR5cGUgJHtkc1NldHRpbmdzLnR5cGV9IGlzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkIGJ5IGNsb3VkIGFsZXJ0IHJ1bGVzLmApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZWxhdGl2ZVRpbWVSYW5nZSB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnRRdWVyeSB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IEV4cHJlc3Npb25RdWVyeSwgRXhwcmVzc2lvblF1ZXJ5VHlwZSB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3Npb25zL3R5cGVzJztcblxuY29uc3QgRkFMTF9CQUNLX1RJTUVfUkFOR0UgPSB7IGZyb206IDIxNjAwLCB0bzogMCB9O1xuXG5leHBvcnQgY29uc3QgZ2V0VGltZVJhbmdlRm9yRXhwcmVzc2lvbiA9IChxdWVyeTogRXhwcmVzc2lvblF1ZXJ5LCBxdWVyaWVzOiBBbGVydFF1ZXJ5W10pOiBSZWxhdGl2ZVRpbWVSYW5nZSA9PiB7XG4gIGNvbnN0IHJlZmVyZW5jZWRSZWZJZHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gZ2V0UmVmZXJlbmNlZElkcyhxdWVyeSwgcXVlcmllcyk7XG5cbiAgaWYgKCFyZWZlcmVuY2VkUmVmSWRzKSB7XG4gICAgcmV0dXJuIEZBTExfQkFDS19USU1FX1JBTkdFO1xuICB9XG5cbiAgY29uc3QgeyBmcm9tLCB0byB9ID0gZ2V0VGltZVJhbmdlcyhyZWZlcmVuY2VkUmVmSWRzLCBxdWVyaWVzKTtcblxuICBpZiAoIWZyb20ubGVuZ3RoICYmICF0by5sZW5ndGgpIHtcbiAgICByZXR1cm4gRkFMTF9CQUNLX1RJTUVfUkFOR0U7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZyb206IE1hdGgubWF4KC4uLmZyb20pLFxuICAgIHRvOiBNYXRoLm1pbiguLi50byksXG4gIH07XG59O1xuXG5jb25zdCBnZXRSZWZlcmVuY2VkSWRzID0gKG1vZGVsOiBFeHByZXNzaW9uUXVlcnksIHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0+IHtcbiAgc3dpdGNoIChtb2RlbC50eXBlKSB7XG4gICAgY2FzZSBFeHByZXNzaW9uUXVlcnlUeXBlLmNsYXNzaWM6XG4gICAgICByZXR1cm4gZ2V0UmVmZXJlbmNlZElkc0ZvckNsYXNzaWNDb25kaXRpb24obW9kZWwpO1xuICAgIGNhc2UgRXhwcmVzc2lvblF1ZXJ5VHlwZS5tYXRoOlxuICAgICAgcmV0dXJuIGdldFJlZmVyZW5jZWRJZHNGb3JNYXRoKG1vZGVsLCBxdWVyaWVzKTtcbiAgICBjYXNlIEV4cHJlc3Npb25RdWVyeVR5cGUucmVzYW1wbGU6XG4gICAgY2FzZSBFeHByZXNzaW9uUXVlcnlUeXBlLnJlZHVjZTpcbiAgICAgIHJldHVybiBnZXRSZWZlcmVuY2VkSWRzRm9yUmVkdWNlKG1vZGVsKTtcbiAgfVxufTtcblxuY29uc3QgZ2V0UmVmZXJlbmNlZElkc0ZvckNsYXNzaWNDb25kaXRpb24gPSAobW9kZWw6IEV4cHJlc3Npb25RdWVyeSkgPT4ge1xuICByZXR1cm4gbW9kZWwuY29uZGl0aW9ucz8ubWFwKChjb25kaXRpb24pID0+IHtcbiAgICByZXR1cm4gY29uZGl0aW9uLnF1ZXJ5LnBhcmFtc1swXTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRUaW1lUmFuZ2VzID0gKHJlZmVyZW5jZWRSZWZJZHM6IHN0cmluZ1tdLCBxdWVyaWVzOiBBbGVydFF1ZXJ5W10pID0+IHtcbiAgbGV0IGZyb206IG51bWJlcltdID0gW107XG4gIGxldCB0byA9IFtGQUxMX0JBQ0tfVElNRV9SQU5HRS50b107XG4gIGZvciAoY29uc3QgcmVmZXJlbmNlZFJlZklkc0tleSBvZiByZWZlcmVuY2VkUmVmSWRzKSB7XG4gICAgY29uc3QgcXVlcnkgPSBxdWVyaWVzLmZpbmQoKHF1ZXJ5KSA9PiBxdWVyeS5yZWZJZCA9PT0gcmVmZXJlbmNlZFJlZklkc0tleSk7XG5cbiAgICBpZiAoIXF1ZXJ5IHx8ICFxdWVyeS5yZWxhdGl2ZVRpbWVSYW5nZSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZyb20ucHVzaChxdWVyeS5yZWxhdGl2ZVRpbWVSYW5nZS5mcm9tKTtcbiAgICB0by5wdXNoKHF1ZXJ5LnJlbGF0aXZlVGltZVJhbmdlLnRvKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZnJvbSxcbiAgICB0byxcbiAgfTtcbn07XG5cbmNvbnN0IGdldFJlZmVyZW5jZWRJZHNGb3JNYXRoID0gKG1vZGVsOiBFeHByZXNzaW9uUXVlcnksIHF1ZXJpZXM6IEFsZXJ0UXVlcnlbXSkgPT4ge1xuICByZXR1cm4gKFxuICAgIHF1ZXJpZXNcbiAgICAgIC8vIGZpbHRlciBxdWVyaWVzIG9mIHR5cGUgcXVlcnkgYW5kIGZpbHRlciBleHByZXNzaW9uIG9uIGlmIGl0IGluY2x1ZGVzIGFueSByZWZJZHNcbiAgICAgIC5maWx0ZXIoKHEpID0+IHEucXVlcnlUeXBlID09PSAncXVlcnknICYmIG1vZGVsLmV4cHJlc3Npb24/LmluY2x1ZGVzKHEucmVmSWQpKVxuICAgICAgLm1hcCgocSkgPT4ge1xuICAgICAgICByZXR1cm4gcS5yZWZJZDtcbiAgICAgIH0pXG4gICk7XG59O1xuXG5jb25zdCBnZXRSZWZlcmVuY2VkSWRzRm9yUmVkdWNlID0gKG1vZGVsOiBFeHByZXNzaW9uUXVlcnkpID0+IHtcbiAgcmV0dXJuIG1vZGVsLmV4cHJlc3Npb24gPyBbbW9kZWwuZXhwcmVzc2lvbl0gOiB1bmRlZmluZWQ7XG59O1xuIiwiaW1wb3J0IHsgRGF0YVF1ZXJ5IH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBpc0V4cHJlc3Npb25SZWZlcmVuY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lL3NyYy91dGlscy9EYXRhU291cmNlV2l0aEJhY2tlbmQnO1xuXG5pbXBvcnQgeyBFeHByZXNzaW9uUXVlcnksIEV4cHJlc3Npb25RdWVyeVR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGlzRXhwcmVzc2lvblF1ZXJ5ID0gKGRhdGFRdWVyeT86IERhdGFRdWVyeSk6IGRhdGFRdWVyeSBpcyBFeHByZXNzaW9uUXVlcnkgPT4ge1xuICBpZiAoIWRhdGFRdWVyeSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0V4cHJlc3Npb25SZWZlcmVuY2UoZGF0YVF1ZXJ5LmRhdGFzb3VyY2UpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdCBleHByZXNzaW9uID0gZGF0YVF1ZXJ5IGFzIEV4cHJlc3Npb25RdWVyeTtcblxuICBpZiAodHlwZW9mIGV4cHJlc3Npb24udHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoRXhwcmVzc2lvblF1ZXJ5VHlwZSkuaW5jbHVkZXMoZXhwcmVzc2lvbi50eXBlKTtcbn07XG4iLCJpbXBvcnQgeyBHcmFtbWFyIH0gZnJvbSAncHJpc21qcyc7XG5cbmltcG9ydCB7IENvbXBsZXRpb25JdGVtIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5jb25zdCBBR0dSRUdBVElPTl9PUEVSQVRPUlM6IENvbXBsZXRpb25JdGVtW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ3N1bScsXG4gICAgaW5zZXJ0VGV4dDogJ3N1bScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBzdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbWluJyxcbiAgICBpbnNlcnRUZXh0OiAnbWluJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU2VsZWN0IG1pbmltdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbWF4JyxcbiAgICBpbnNlcnRUZXh0OiAnbWF4JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU2VsZWN0IG1heGltdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYXZnJyxcbiAgICBpbnNlcnRUZXh0OiAnYXZnJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIHRoZSBhdmVyYWdlIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3N0ZGRldicsXG4gICAgaW5zZXJ0VGV4dDogJ3N0ZGRldicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBwb3B1bGF0aW9uIHN0YW5kYXJkIGRldmlhdGlvbiBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdzdGR2YXInLFxuICAgIGluc2VydFRleHQ6ICdzdGR2YXInLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgcG9wdWxhdGlvbiBzdGFuZGFyZCB2YXJpYW5jZSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdjb3VudCcsXG4gICAgaW5zZXJ0VGV4dDogJ2NvdW50JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ291bnQgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSB2ZWN0b3InLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdib3R0b21rJyxcbiAgICBpbnNlcnRUZXh0OiAnYm90dG9taycsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1NtYWxsZXN0IGsgZWxlbWVudHMgYnkgc2FtcGxlIHZhbHVlJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAndG9waycsXG4gICAgaW5zZXJ0VGV4dDogJ3RvcGsnLFxuICAgIGRvY3VtZW50YXRpb246ICdMYXJnZXN0IGsgZWxlbWVudHMgYnkgc2FtcGxlIHZhbHVlJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBQSVBFX1BBUlNFUlM6IENvbXBsZXRpb25JdGVtW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ2pzb24nLFxuICAgIGluc2VydFRleHQ6ICdqc29uJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnRXh0cmFjdGluZyBsYWJlbHMgZnJvbSB0aGUgbG9nIGxpbmUgdXNpbmcganNvbiBwYXJzZXIuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdyZWdleHAnLFxuICAgIGluc2VydFRleHQ6ICdyZWdleHAgXCJcIicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0V4dHJhY3RpbmcgbGFiZWxzIGZyb20gdGhlIGxvZyBsaW5lIHVzaW5nIHJlZ2V4cCBwYXJzZXIuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICAgIG1vdmU6IC0xLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdsb2dmbXQnLFxuICAgIGluc2VydFRleHQ6ICdsb2dmbXQnLFxuICAgIGRvY3VtZW50YXRpb246ICdFeHRyYWN0aW5nIGxhYmVscyBmcm9tIHRoZSBsb2cgbGluZSB1c2luZyBsb2dmbXQgcGFyc2VyLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAncGF0dGVybicsXG4gICAgaW5zZXJ0VGV4dDogJ3BhdHRlcm4nLFxuICAgIGRvY3VtZW50YXRpb246ICdFeHRyYWN0aW5nIGxhYmVscyBmcm9tIHRoZSBsb2cgbGluZSB1c2luZyBwYXR0ZXJuIHBhcnNlci4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjMrLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUElQRV9PUEVSQVRPUlM6IENvbXBsZXRpb25JdGVtW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ3Vud3JhcCcsXG4gICAgaW5zZXJ0VGV4dDogJ3Vud3JhcCcsXG4gICAgZGV0YWlsOiAndW53cmFwIGlkZW50aWZpZXInLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnVGFrZSBsYWJlbHMgYW5kIHVzZSB0aGUgdmFsdWVzIGFzIHNhbXBsZSBkYXRhIGZvciBtZXRyaWMgYWdncmVnYXRpb25zLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAndW5wYWNrJyxcbiAgICBpbnNlcnRUZXh0OiAndW5wYWNrJyxcbiAgICBkZXRhaWw6ICd1bnBhY2sgaWRlbnRpZmllcicsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdQYXJzZXMgYSBKU09OIGxvZyBsaW5lLCB1bnBhY2tpbmcgYWxsIGVtYmVkZGVkIGxhYmVscyBpbiB0aGUgcGFjayBzdGFnZS4gQSBzcGVjaWFsIHByb3BlcnR5IFwiX2VudHJ5XCIgd2lsbCBhbHNvIGJlIHVzZWQgdG8gcmVwbGFjZSB0aGUgb3JpZ2luYWwgbG9nIGxpbmUuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdsYWJlbF9mb3JtYXQnLFxuICAgIGluc2VydFRleHQ6ICdsYWJlbF9mb3JtYXQnLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnVXNlIHRvIHJlbmFtZSwgbW9kaWZ5IG9yIGFkZCBsYWJlbHMuIEZvciBleGFtcGxlLCB8IGxhYmVsX2Zvcm1hdCBmb289YmFyIC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2xpbmVfZm9ybWF0JyxcbiAgICBpbnNlcnRUZXh0OiAnbGluZV9mb3JtYXQnLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV3cml0ZXMgbG9nIGxpbmUgY29udGVudC4gRm9yIGV4YW1wbGUsIHwgbGluZV9mb3JtYXQgXCJ7ey5xdWVyeX19IHt7LmR1cmF0aW9ufX1cIiAuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFJBTkdFX1ZFQ19GVU5DVElPTlMgPSBbXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnYXZnX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdhdmdfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdhdmdfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgYXZlcmFnZSBvZiBhbGwgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuIE9ubHkgYXZhaWxhYmxlIGluIExva2kgMi4wKy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ21pbl9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnbWluX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnbWluX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIG1pbmltdW0gb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdtYXhfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ21heF9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ21heF9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBtYXhpbXVtIG9mIGFsbCB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3VtX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdzdW1fb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdzdW1fb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgc3VtIG9mIGFsbCB2YWx1ZXMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4gT25seSBhdmFpbGFibGUgaW4gTG9raSAyLjArLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY291bnRfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2NvdW50X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnY291bnRfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgY291bnQgb2YgYWxsIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3RkdmFyX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdzdGR2YXJfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdzdGR2YXJfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnVGhlIHBvcHVsYXRpb24gc3RhbmRhcmQgdmFyaWFuY2Ugb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdzdGRkZXZfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ3N0ZGRldl9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ3N0ZGRldl9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdUaGUgcG9wdWxhdGlvbiBzdGFuZGFyZCBkZXZpYXRpb24gb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdxdWFudGlsZV9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAncXVhbnRpbGVfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdxdWFudGlsZV9vdmVyX3RpbWUoc2NhbGFyLCByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIM+GLXF1YW50aWxlICgwIOKJpCDPhiDiiaQgMSkgb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLiBPbmx5IGF2YWlsYWJsZSBpbiBMb2tpIDIuMCsuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdieXRlc19vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnYnl0ZXNfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdieXRlc19vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NvdW50cyB0aGUgYW1vdW50IG9mIGJ5dGVzIHVzZWQgYnkgZWFjaCBsb2cgc3RyZWFtIGZvciBhIGdpdmVuIHJhbmdlJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdieXRlc19yYXRlJyxcbiAgICBsYWJlbDogJ2J5dGVzX3JhdGUnLFxuICAgIGRldGFpbDogJ2J5dGVzX3JhdGUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBieXRlcyBwZXIgc2Vjb25kIGZvciBlYWNoIHN0cmVhbS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3JhdGUnLFxuICAgIGxhYmVsOiAncmF0ZScsXG4gICAgZGV0YWlsOiAncmF0ZSh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGVzIHRoZSBudW1iZXIgb2YgZW50cmllcyBwZXIgc2Vjb25kLicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgRlVOQ1RJT05TID0gWy4uLkFHR1JFR0FUSU9OX09QRVJBVE9SUywgLi4uUkFOR0VfVkVDX0ZVTkNUSU9OU107XG5leHBvcnQgY29uc3QgTE9LSV9LRVlXT1JEUyA9IFsuLi5GVU5DVElPTlMsIC4uLlBJUEVfT1BFUkFUT1JTLCAuLi5QSVBFX1BBUlNFUlNdLm1hcCgoa2V5d29yZCkgPT4ga2V5d29yZC5sYWJlbCk7XG5cbmV4cG9ydCBjb25zdCBsb2tpR3JhbW1hcjogR3JhbW1hciA9IHtcbiAgY29tbWVudDoge1xuICAgIHBhdHRlcm46IC8jLiovLFxuICB9LFxuICAnY29udGV4dC1hZ2dyZWdhdGlvbic6IHtcbiAgICBwYXR0ZXJuOiAvKCh3aXRob3V0fGJ5KVxccyopXFwoW14pXSpcXCkvLCAvLyBieSAoKVxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgaW5zaWRlOiB7XG4gICAgICAnbGFiZWwta2V5Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvW14oKSxcXHNdW14sKV0qW14pLFxcc10qLyxcbiAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnLFxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvWygpXS8sXG4gICAgfSxcbiAgfSxcbiAgJ2NvbnRleHQtbGFiZWxzJzoge1xuICAgIHBhdHRlcm46IC9cXHtbXn1dKig/PX0/KS8sXG4gICAgZ3JlZWR5OiB0cnVlLFxuICAgIGluc2lkZToge1xuICAgICAgY29tbWVudDoge1xuICAgICAgICBwYXR0ZXJuOiAvIy4qLyxcbiAgICAgIH0sXG4gICAgICAnbGFiZWwta2V5Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvW2EtekEtWl9dXFx3Kig/PVxccyooPXwhPXw9fnwhfikpLyxcbiAgICAgICAgYWxpYXM6ICdhdHRyLW5hbWUnLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICB9LFxuICAgICAgJ2xhYmVsLXZhbHVlJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcLnxbXlxcXFxcIl0pKlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBhbGlhczogJ2F0dHItdmFsdWUnLFxuICAgICAgfSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvW3tdLyxcbiAgICB9LFxuICB9LFxuICAnY29udGV4dC1waXBlJzoge1xuICAgIHBhdHRlcm46IC9cXHNcXHxbXj1+XVxccz9cXHcqL2ksXG4gICAgaW5zaWRlOiB7XG4gICAgICAncGlwZS1vcGVyYXRvcic6IHtcbiAgICAgICAgcGF0dGVybjogL1xcfC9pLFxuICAgICAgICBhbGlhczogJ29wZXJhdG9yJyxcbiAgICAgIH0sXG4gICAgICAncGlwZS1vcGVyYXRpb25zJzoge1xuICAgICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKGAke1suLi5QSVBFX1BBUlNFUlMsIC4uLlBJUEVfT1BFUkFUT1JTXS5tYXAoKGYpID0+IGYubGFiZWwpLmpvaW4oJ3wnKX1gLCAnaScpLFxuICAgICAgICBhbGlhczogJ2tleXdvcmQnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBmdW5jdGlvbjogbmV3IFJlZ0V4cChgXFxcXGIoPzoke0ZVTkNUSU9OUy5tYXAoKGYpID0+IGYubGFiZWwpLmpvaW4oJ3wnKX0pKD89XFxcXHMqXFxcXCgpYCwgJ2knKSxcbiAgJ2NvbnRleHQtcmFuZ2UnOiBbXG4gICAge1xuICAgICAgcGF0dGVybjogL1xcW1teXFxdXSooPz1cXF0pLywgLy8gWzFtXVxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdyYW5nZS1kdXJhdGlvbic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxiXFxkK1tzbWhkd3ldXFxiL2ksXG4gICAgICAgICAgYWxpYXM6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdHRlcm46IC8ob2Zmc2V0XFxzKylcXHcrLywgLy8gb2Zmc2V0IDFtXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdyYW5nZS1kdXJhdGlvbic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxiXFxkK1tzbWhkd3ldXFxiL2ksXG4gICAgICAgICAgYWxpYXM6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBxdW90ZToge1xuICAgIHBhdHRlcm46IC9cIig/OlxcXFwufFteXFxcXFwiXSkqXCIvLFxuICAgIGFsaWFzOiAnc3RyaW5nJyxcbiAgICBncmVlZHk6IHRydWUsXG4gIH0sXG4gIGJhY2t0aWNrczoge1xuICAgIHBhdHRlcm46IC9gKD86XFxcXC58W15cXFxcYF0pKmAvLFxuICAgIGFsaWFzOiAnc3RyaW5nJyxcbiAgICBncmVlZHk6IHRydWUsXG4gIH0sXG4gIG51bWJlcjogL1xcYi0/XFxkKygoXFwuXFxkKik/KFtlRV1bKy1dP1xcZCspPyk/XFxiLyxcbiAgb3BlcmF0b3I6IC9cXHM/KFxcfFs9fl0/fCE9P3w8KD86PT4/fDx8Pik/fD5bPj1dPylcXHM/L2ksXG4gIHB1bmN0dWF0aW9uOiAvW3t9KCksLl0vLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9raUdyYW1tYXI7XG4iLCJpbXBvcnQgeyBHcmFtbWFyIH0gZnJvbSAncHJpc21qcyc7XG5cbmltcG9ydCB7IENvbXBsZXRpb25JdGVtIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG4vLyBXaGVuIGNoYW5naW5nIFJBVEVfUkFOR0VTLCBjaGVjayBpZiBMb2tpL0xvZ1FMIHJhbmdlcyBzaG91bGQgYmUgY2hhbmdlZCB0b29cbi8vIEBzZWUgcHVibGljL2FwcC9wbHVnaW5zL2RhdGFzb3VyY2UvbG9raS9sYW5ndWFnZV9wcm92aWRlci50c1xuZXhwb3J0IGNvbnN0IFJBVEVfUkFOR0VTOiBDb21wbGV0aW9uSXRlbVtdID0gW1xuICB7IGxhYmVsOiAnJF9faW50ZXJ2YWwnLCBzb3J0VmFsdWU6ICckX19pbnRlcnZhbCcgfSxcbiAgeyBsYWJlbDogJyRfX3JhdGVfaW50ZXJ2YWwnLCBzb3J0VmFsdWU6ICckX19yYXRlX2ludGVydmFsJyB9LFxuICB7IGxhYmVsOiAnJF9fcmFuZ2UnLCBzb3J0VmFsdWU6ICckX19yYW5nZScgfSxcbiAgeyBsYWJlbDogJzFtJywgc29ydFZhbHVlOiAnMDA6MDE6MDAnIH0sXG4gIHsgbGFiZWw6ICc1bScsIHNvcnRWYWx1ZTogJzAwOjA1OjAwJyB9LFxuICB7IGxhYmVsOiAnMTBtJywgc29ydFZhbHVlOiAnMDA6MTA6MDAnIH0sXG4gIHsgbGFiZWw6ICczMG0nLCBzb3J0VmFsdWU6ICcwMDozMDowMCcgfSxcbiAgeyBsYWJlbDogJzFoJywgc29ydFZhbHVlOiAnMDE6MDA6MDAnIH0sXG4gIHsgbGFiZWw6ICcxZCcsIHNvcnRWYWx1ZTogJzI0OjAwOjAwJyB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IE9QRVJBVE9SUyA9IFsnYnknLCAnZ3JvdXBfbGVmdCcsICdncm91cF9yaWdodCcsICdpZ25vcmluZycsICdvbicsICdvZmZzZXQnLCAnd2l0aG91dCddO1xuZXhwb3J0IGNvbnN0IExPR0lDQUxfT1BFUkFUT1JTID0gWydvcicsICdhbmQnLCAndW5sZXNzJ107XG5cbmNvbnN0IFRSSUdPTk9NRVRSSUNfRlVOQ1RJT05TOiBDb21wbGV0aW9uSXRlbVtdID0gW1xuICB7XG4gICAgbGFiZWw6ICdhY29zJyxcbiAgICBpbnNlcnRUZXh0OiAnYWNvcycsXG4gICAgZGV0YWlsOiAnYWNvcyh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGFyY2Nvc2luZSBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2Fjb3NoJyxcbiAgICBpbnNlcnRUZXh0OiAnYWNvc2gnLFxuICAgIGRldGFpbDogJ2Fjb3NoKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgaW52ZXJzZSBoeXBlcmJvbGljIGNvc2luZSBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2FzaW4nLFxuICAgIGluc2VydFRleHQ6ICdhc2luJyxcbiAgICBkZXRhaWw6ICdhc2luKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgYXJjc2luZSBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2FzaW5oJyxcbiAgICBpbnNlcnRUZXh0OiAnYXNpbmgnLFxuICAgIGRldGFpbDogJ2FzaW5oKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnY2FsY3VsYXRlcyB0aGUgaW52ZXJzZSBoeXBlcmJvbGljIHNpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdhdGFuJyxcbiAgICBpbnNlcnRUZXh0OiAnYXRhbicsXG4gICAgZGV0YWlsOiAnYXRhbih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGFyY3RhbmdlbnQgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdhdGFuaCcsXG4gICAgaW5zZXJ0VGV4dDogJ2F0YW5oJyxcbiAgICBkZXRhaWw6ICdhdGFuaCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGludmVyc2UgaHlwZXJib2xpYyB0YW5nZW50IG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnY29zJyxcbiAgICBpbnNlcnRUZXh0OiAnY29zJyxcbiAgICBkZXRhaWw6ICdjb3ModiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBjb3NpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdjb3NoJyxcbiAgICBpbnNlcnRUZXh0OiAnY29zaCcsXG4gICAgZGV0YWlsOiAnY29zaCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGh5cGVyYm9saWMgY29zaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnc2luJyxcbiAgICBpbnNlcnRUZXh0OiAnc2luJyxcbiAgICBkZXRhaWw6ICdzaW4odiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBzaW5lIG9mIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnc2luaCcsXG4gICAgaW5zZXJ0VGV4dDogJ3NpbmgnLFxuICAgIGRldGFpbDogJ3NpbmgodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdjYWxjdWxhdGVzIHRoZSBoeXBlcmJvbGljIHNpbmUgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICd0YW4nLFxuICAgIGluc2VydFRleHQ6ICd0YW4nLFxuICAgIGRldGFpbDogJ3Rhbih2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIHRhbmdlbnQgb2YgYWxsIGVsZW1lbnRzIGluIHYnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICd0YW5oJyxcbiAgICBpbnNlcnRUZXh0OiAndGFuaCcsXG4gICAgZGV0YWlsOiAndGFuaCh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ2NhbGN1bGF0ZXMgdGhlIGh5cGVyYm9saWMgdGFuZ2VudCBvZiBhbGwgZWxlbWVudHMgaW4gdicsXG4gIH0sXG5dO1xuXG5jb25zdCBBR0dSRUdBVElPTl9PUEVSQVRPUlM6IENvbXBsZXRpb25JdGVtW10gPSBbXG4gIHtcbiAgICBsYWJlbDogJ3N1bScsXG4gICAgaW5zZXJ0VGV4dDogJ3N1bScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBzdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbWluJyxcbiAgICBpbnNlcnRUZXh0OiAnbWluJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU2VsZWN0IG1pbmltdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbWF4JyxcbiAgICBpbnNlcnRUZXh0OiAnbWF4JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnU2VsZWN0IG1heGltdW0gb3ZlciBkaW1lbnNpb25zJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYXZnJyxcbiAgICBpbnNlcnRUZXh0OiAnYXZnJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIHRoZSBhdmVyYWdlIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2dyb3VwJyxcbiAgICBpbnNlcnRUZXh0OiAnZ3JvdXAnLFxuICAgIGRvY3VtZW50YXRpb246ICdBbGwgdmFsdWVzIGluIHRoZSByZXN1bHRpbmcgdmVjdG9yIGFyZSAxJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnc3RkZGV2JyxcbiAgICBpbnNlcnRUZXh0OiAnc3RkZGV2JyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlIHBvcHVsYXRpb24gc3RhbmRhcmQgZGV2aWF0aW9uIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3N0ZHZhcicsXG4gICAgaW5zZXJ0VGV4dDogJ3N0ZHZhcicsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NhbGN1bGF0ZSBwb3B1bGF0aW9uIHN0YW5kYXJkIHZhcmlhbmNlIG92ZXIgZGltZW5zaW9ucycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2NvdW50JyxcbiAgICBpbnNlcnRUZXh0OiAnY291bnQnLFxuICAgIGRvY3VtZW50YXRpb246ICdDb3VudCBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIHZlY3RvcicsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2NvdW50X3ZhbHVlcycsXG4gICAgaW5zZXJ0VGV4dDogJ2NvdW50X3ZhbHVlcycsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NvdW50IG51bWJlciBvZiBlbGVtZW50cyB3aXRoIHRoZSBzYW1lIHZhbHVlJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYm90dG9taycsXG4gICAgaW5zZXJ0VGV4dDogJ2JvdHRvbWsnLFxuICAgIGRvY3VtZW50YXRpb246ICdTbWFsbGVzdCBrIGVsZW1lbnRzIGJ5IHNhbXBsZSB2YWx1ZScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3RvcGsnLFxuICAgIGluc2VydFRleHQ6ICd0b3BrJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnTGFyZ2VzdCBrIGVsZW1lbnRzIGJ5IHNhbXBsZSB2YWx1ZScsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ3F1YW50aWxlJyxcbiAgICBpbnNlcnRUZXh0OiAncXVhbnRpbGUnLFxuICAgIGRvY3VtZW50YXRpb246ICdDYWxjdWxhdGUgz4YtcXVhbnRpbGUgKDAg4omkIM+GIOKJpCAxKSBvdmVyIGRpbWVuc2lvbnMnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IEZVTkNUSU9OUyA9IFtcbiAgLi4uQUdHUkVHQVRJT05fT1BFUkFUT1JTLFxuICAuLi5UUklHT05PTUVUUklDX0ZVTkNUSU9OUyxcbiAge1xuICAgIGluc2VydFRleHQ6ICdhYnMnLFxuICAgIGxhYmVsOiAnYWJzJyxcbiAgICBkZXRhaWw6ICdhYnModiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHRoZSBpbnB1dCB2ZWN0b3Igd2l0aCBhbGwgc2FtcGxlIHZhbHVlcyBjb252ZXJ0ZWQgdG8gdGhlaXIgYWJzb2x1dGUgdmFsdWUuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdhYnNlbnQnLFxuICAgIGxhYmVsOiAnYWJzZW50JyxcbiAgICBkZXRhaWw6ICdhYnNlbnQodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV0dXJucyBhbiBlbXB0eSB2ZWN0b3IgaWYgdGhlIHZlY3RvciBwYXNzZWQgdG8gaXQgaGFzIGFueSBlbGVtZW50cyBhbmQgYSAxLWVsZW1lbnQgdmVjdG9yIHdpdGggdGhlIHZhbHVlIDEgaWYgdGhlIHZlY3RvciBwYXNzZWQgdG8gaXQgaGFzIG5vIGVsZW1lbnRzLiBUaGlzIGlzIHVzZWZ1bCBmb3IgYWxlcnRpbmcgb24gd2hlbiBubyB0aW1lIHNlcmllcyBleGlzdCBmb3IgYSBnaXZlbiBtZXRyaWMgbmFtZSBhbmQgbGFiZWwgY29tYmluYXRpb24uJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdhYnNlbnRfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ2Fic2VudF9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ2Fic2VudCh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV0dXJucyBhbiBlbXB0eSB2ZWN0b3IgaWYgdGhlIHJhbmdlIHZlY3RvciBwYXNzZWQgdG8gaXQgaGFzIGFueSBlbGVtZW50cyBhbmQgYSAxLWVsZW1lbnQgdmVjdG9yIHdpdGggdGhlIHZhbHVlIDEgaWYgdGhlIHJhbmdlIHZlY3RvciBwYXNzZWQgdG8gaXQgaGFzIG5vIGVsZW1lbnRzLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnY2VpbCcsXG4gICAgbGFiZWw6ICdjZWlsJyxcbiAgICBkZXRhaWw6ICdjZWlsKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUm91bmRzIHRoZSBzYW1wbGUgdmFsdWVzIG9mIGFsbCBlbGVtZW50cyBpbiBgdmAgdXAgdG8gdGhlIG5lYXJlc3QgaW50ZWdlci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2NoYW5nZXMnLFxuICAgIGxhYmVsOiAnY2hhbmdlcycsXG4gICAgZGV0YWlsOiAnY2hhbmdlcyh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnRm9yIGVhY2ggaW5wdXQgdGltZSBzZXJpZXMsIGBjaGFuZ2VzKHYgcmFuZ2UtdmVjdG9yKWAgcmV0dXJucyB0aGUgbnVtYmVyIG9mIHRpbWVzIGl0cyB2YWx1ZSBoYXMgY2hhbmdlZCB3aXRoaW4gdGhlIHByb3ZpZGVkIHRpbWUgcmFuZ2UgYXMgYW4gaW5zdGFudCB2ZWN0b3IuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjbGFtcCcsXG4gICAgbGFiZWw6ICdjbGFtcCcsXG4gICAgZGV0YWlsOiAnY2xhbXAodiBpbnN0YW50LXZlY3RvciwgbWluIHNjYWxhciwgbWF4IHNjYWxhciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2xhbXBzIHRoZSBzYW1wbGUgdmFsdWVzIG9mIGFsbCBlbGVtZW50cyBpbiBgdmAgdG8gaGF2ZSBhIGxvd2VyIGxpbWl0IG9mIGBtaW5gIGFuZCBhbiB1cHBlciBsaW1pdCBvZiBgbWF4YC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2NsYW1wX21heCcsXG4gICAgbGFiZWw6ICdjbGFtcF9tYXgnLFxuICAgIGRldGFpbDogJ2NsYW1wX21heCh2IGluc3RhbnQtdmVjdG9yLCBtYXggc2NhbGFyKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ0NsYW1wcyB0aGUgc2FtcGxlIHZhbHVlcyBvZiBhbGwgZWxlbWVudHMgaW4gYHZgIHRvIGhhdmUgYW4gdXBwZXIgbGltaXQgb2YgYG1heGAuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjbGFtcF9taW4nLFxuICAgIGxhYmVsOiAnY2xhbXBfbWluJyxcbiAgICBkZXRhaWw6ICdjbGFtcF9taW4odiBpbnN0YW50LXZlY3RvciwgbWluIHNjYWxhciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDbGFtcHMgdGhlIHNhbXBsZSB2YWx1ZXMgb2YgYWxsIGVsZW1lbnRzIGluIGB2YCB0byBoYXZlIGEgbG93ZXIgbGltaXQgb2YgYG1pbmAuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjb3VudF9zY2FsYXInLFxuICAgIGxhYmVsOiAnY291bnRfc2NhbGFyJyxcbiAgICBkZXRhaWw6ICdjb3VudF9zY2FsYXIodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIGEgdGltZSBzZXJpZXMgdmVjdG9yIGFzIGEgc2NhbGFyLiBUaGlzIGlzIGluIGNvbnRyYXN0IHRvIHRoZSBgY291bnQoKWAgYWdncmVnYXRpb24gb3BlcmF0b3IsIHdoaWNoIGFsd2F5cyByZXR1cm5zIGEgdmVjdG9yIChhbiBlbXB0eSBvbmUgaWYgdGhlIGlucHV0IHZlY3RvciBpcyBlbXB0eSkgYW5kIGFsbG93cyBncm91cGluZyBieSBsYWJlbHMgdmlhIGEgYGJ5YCBjbGF1c2UuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdkZWcnLFxuICAgIGxhYmVsOiAnZGVnJyxcbiAgICBkZXRhaWw6ICdkZWcodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDb252ZXJ0cyByYWRpYW5zIHRvIGRlZ3JlZXMgZm9yIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdkYXlfb2ZfbW9udGgnLFxuICAgIGxhYmVsOiAnZGF5X29mX21vbnRoJyxcbiAgICBkZXRhaWw6ICdkYXlfb2ZfbW9udGgodj12ZWN0b3IodGltZSgpKSBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHRoZSBkYXkgb2YgdGhlIG1vbnRoIGZvciBlYWNoIG9mIHRoZSBnaXZlbiB0aW1lcyBpbiBVVEMuIFJldHVybmVkIHZhbHVlcyBhcmUgZnJvbSAxIHRvIDMxLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZGF5X29mX3dlZWsnLFxuICAgIGxhYmVsOiAnZGF5X29mX3dlZWsnLFxuICAgIGRldGFpbDogJ2RheV9vZl93ZWVrKHY9dmVjdG9yKHRpbWUoKSkgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgdGhlIGRheSBvZiB0aGUgd2VlayBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW4gdGltZXMgaW4gVVRDLiBSZXR1cm5lZCB2YWx1ZXMgYXJlIGZyb20gMCB0byA2LCB3aGVyZSAwIG1lYW5zIFN1bmRheSBldGMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdkYXlzX2luX21vbnRoJyxcbiAgICBsYWJlbDogJ2RheXNfaW5fbW9udGgnLFxuICAgIGRldGFpbDogJ2RheXNfaW5fbW9udGgodj12ZWN0b3IodGltZSgpKSBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV0dXJucyBudW1iZXIgb2YgZGF5cyBpbiB0aGUgbW9udGggZm9yIGVhY2ggb2YgdGhlIGdpdmVuIHRpbWVzIGluIFVUQy4gUmV0dXJuZWQgdmFsdWVzIGFyZSBmcm9tIDI4IHRvIDMxLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZGVsdGEnLFxuICAgIGxhYmVsOiAnZGVsdGEnLFxuICAgIGRldGFpbDogJ2RlbHRhKHYgcmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGZpcnN0IGFuZCBsYXN0IHZhbHVlIG9mIGVhY2ggdGltZSBzZXJpZXMgZWxlbWVudCBpbiBhIHJhbmdlIHZlY3RvciBgdmAsIHJldHVybmluZyBhbiBpbnN0YW50IHZlY3RvciB3aXRoIHRoZSBnaXZlbiBkZWx0YXMgYW5kIGVxdWl2YWxlbnQgbGFiZWxzLiBUaGUgZGVsdGEgaXMgZXh0cmFwb2xhdGVkIHRvIGNvdmVyIHRoZSBmdWxsIHRpbWUgcmFuZ2UgYXMgc3BlY2lmaWVkIGluIHRoZSByYW5nZSB2ZWN0b3Igc2VsZWN0b3IsIHNvIHRoYXQgaXQgaXMgcG9zc2libGUgdG8gZ2V0IGEgbm9uLWludGVnZXIgcmVzdWx0IGV2ZW4gaWYgdGhlIHNhbXBsZSB2YWx1ZXMgYXJlIGFsbCBpbnRlZ2Vycy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2Rlcml2JyxcbiAgICBsYWJlbDogJ2Rlcml2JyxcbiAgICBkZXRhaWw6ICdkZXJpdih2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgcGVyLXNlY29uZCBkZXJpdmF0aXZlIG9mIHRoZSB0aW1lIHNlcmllcyBpbiBhIHJhbmdlIHZlY3RvciBgdmAsIHVzaW5nIHNpbXBsZSBsaW5lYXIgcmVncmVzc2lvbi4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2Ryb3BfY29tbW9uX2xhYmVscycsXG4gICAgbGFiZWw6ICdkcm9wX2NvbW1vbl9sYWJlbHMnLFxuICAgIGRldGFpbDogJ2Ryb3BfY29tbW9uX2xhYmVscyhpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdEcm9wcyBhbGwgbGFiZWxzIHRoYXQgaGF2ZSB0aGUgc2FtZSBuYW1lIGFuZCB2YWx1ZSBhY3Jvc3MgYWxsIHNlcmllcyBpbiB0aGUgaW5wdXQgdmVjdG9yLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZXhwJyxcbiAgICBsYWJlbDogJ2V4cCcsXG4gICAgZGV0YWlsOiAnZXhwKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIGV4cG9uZW50aWFsIGZ1bmN0aW9uIGZvciBhbGwgZWxlbWVudHMgaW4gYHZgLlxcblNwZWNpYWwgY2FzZXMgYXJlOlxcbiogYEV4cCgrSW5mKSA9ICtJbmZgIFxcbiogYEV4cChOYU4pID0gTmFOYCcsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnZmxvb3InLFxuICAgIGxhYmVsOiAnZmxvb3InLFxuICAgIGRldGFpbDogJ2Zsb29yKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUm91bmRzIHRoZSBzYW1wbGUgdmFsdWVzIG9mIGFsbCBlbGVtZW50cyBpbiBgdmAgZG93biB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnaGlzdG9ncmFtX3F1YW50aWxlJyxcbiAgICBsYWJlbDogJ2hpc3RvZ3JhbV9xdWFudGlsZScsXG4gICAgZGV0YWlsOiAnaGlzdG9ncmFtX3F1YW50aWxlKM+GIGZsb2F0LCBiIGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdDYWxjdWxhdGVzIHRoZSDPhi1xdWFudGlsZSAoMCDiiaQgz4Yg4omkIDEpIGZyb20gdGhlIGJ1Y2tldHMgYGJgIG9mIGEgaGlzdG9ncmFtLiBUaGUgc2FtcGxlcyBpbiBgYmAgYXJlIHRoZSBjb3VudHMgb2Ygb2JzZXJ2YXRpb25zIGluIGVhY2ggYnVja2V0LiBFYWNoIHNhbXBsZSBtdXN0IGhhdmUgYSBsYWJlbCBgbGVgIHdoZXJlIHRoZSBsYWJlbCB2YWx1ZSBkZW5vdGVzIHRoZSBpbmNsdXNpdmUgdXBwZXIgYm91bmQgb2YgdGhlIGJ1Y2tldC4gKFNhbXBsZXMgd2l0aG91dCBzdWNoIGEgbGFiZWwgYXJlIHNpbGVudGx5IGlnbm9yZWQuKSBUaGUgaGlzdG9ncmFtIG1ldHJpYyB0eXBlIGF1dG9tYXRpY2FsbHkgcHJvdmlkZXMgdGltZSBzZXJpZXMgd2l0aCB0aGUgYF9idWNrZXRgIHN1ZmZpeCBhbmQgdGhlIGFwcHJvcHJpYXRlIGxhYmVscy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2hvbHRfd2ludGVycycsXG4gICAgbGFiZWw6ICdob2x0X3dpbnRlcnMnLFxuICAgIGRldGFpbDogJ2hvbHRfd2ludGVycyh2IHJhbmdlLXZlY3Rvciwgc2Ygc2NhbGFyLCB0ZiBzY2FsYXIpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1Byb2R1Y2VzIGEgc21vb3RoZWQgdmFsdWUgZm9yIHRpbWUgc2VyaWVzIGJhc2VkIG9uIHRoZSByYW5nZSBpbiBgdmAuIFRoZSBsb3dlciB0aGUgc21vb3RoaW5nIGZhY3RvciBgc2ZgLCB0aGUgbW9yZSBpbXBvcnRhbmNlIGlzIGdpdmVuIHRvIG9sZCBkYXRhLiBUaGUgaGlnaGVyIHRoZSB0cmVuZCBmYWN0b3IgYHRmYCwgdGhlIG1vcmUgdHJlbmRzIGluIHRoZSBkYXRhIGlzIGNvbnNpZGVyZWQuIEJvdGggYHNmYCBhbmQgYHRmYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMS4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2hvdXInLFxuICAgIGxhYmVsOiAnaG91cicsXG4gICAgZGV0YWlsOiAnaG91cih2PXZlY3Rvcih0aW1lKCkpIGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JldHVybnMgdGhlIGhvdXIgb2YgdGhlIGRheSBmb3IgZWFjaCBvZiB0aGUgZ2l2ZW4gdGltZXMgaW4gVVRDLiBSZXR1cm5lZCB2YWx1ZXMgYXJlIGZyb20gMCB0byAyMy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2lkZWx0YScsXG4gICAgbGFiZWw6ICdpZGVsdGEnLFxuICAgIGRldGFpbDogJ2lkZWx0YSh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBsYXN0IHR3byBzYW1wbGVzIGluIHRoZSByYW5nZSB2ZWN0b3IgYHZgLCByZXR1cm5pbmcgYW4gaW5zdGFudCB2ZWN0b3Igd2l0aCB0aGUgZ2l2ZW4gZGVsdGFzIGFuZCBlcXVpdmFsZW50IGxhYmVscy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2luY3JlYXNlJyxcbiAgICBsYWJlbDogJ2luY3JlYXNlJyxcbiAgICBkZXRhaWw6ICdpbmNyZWFzZSh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgaW5jcmVhc2UgaW4gdGhlIHRpbWUgc2VyaWVzIGluIHRoZSByYW5nZSB2ZWN0b3IuIEJyZWFrcyBpbiBtb25vdG9uaWNpdHkgKHN1Y2ggYXMgY291bnRlciByZXNldHMgZHVlIHRvIHRhcmdldCByZXN0YXJ0cykgYXJlIGF1dG9tYXRpY2FsbHkgYWRqdXN0ZWQgZm9yLiBUaGUgaW5jcmVhc2UgaXMgZXh0cmFwb2xhdGVkIHRvIGNvdmVyIHRoZSBmdWxsIHRpbWUgcmFuZ2UgYXMgc3BlY2lmaWVkIGluIHRoZSByYW5nZSB2ZWN0b3Igc2VsZWN0b3IsIHNvIHRoYXQgaXQgaXMgcG9zc2libGUgdG8gZ2V0IGEgbm9uLWludGVnZXIgcmVzdWx0IGV2ZW4gaWYgYSBjb3VudGVyIGluY3JlYXNlcyBvbmx5IGJ5IGludGVnZXIgaW5jcmVtZW50cy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2lyYXRlJyxcbiAgICBsYWJlbDogJ2lyYXRlJyxcbiAgICBkZXRhaWw6ICdpcmF0ZSh2IHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgcGVyLXNlY29uZCBpbnN0YW50IHJhdGUgb2YgaW5jcmVhc2Ugb2YgdGhlIHRpbWUgc2VyaWVzIGluIHRoZSByYW5nZSB2ZWN0b3IuIFRoaXMgaXMgYmFzZWQgb24gdGhlIGxhc3QgdHdvIGRhdGEgcG9pbnRzLiBCcmVha3MgaW4gbW9ub3RvbmljaXR5IChzdWNoIGFzIGNvdW50ZXIgcmVzZXRzIGR1ZSB0byB0YXJnZXQgcmVzdGFydHMpIGFyZSBhdXRvbWF0aWNhbGx5IGFkanVzdGVkIGZvci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2xhYmVsX2pvaW4nLFxuICAgIGxhYmVsOiAnbGFiZWxfam9pbicsXG4gICAgZGV0YWlsOlxuICAgICAgJ2xhYmVsX2pvaW4odiBpbnN0YW50LXZlY3RvciwgZHN0X2xhYmVsIHN0cmluZywgc2VwYXJhdG9yIHN0cmluZywgc3JjX2xhYmVsXzEgc3RyaW5nLCBzcmNfbGFiZWxfMiBzdHJpbmcsIC4uLiknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnRm9yIGVhY2ggdGltZXNlcmllcyBpbiBgdmAsIGpvaW5zIGFsbCB0aGUgdmFsdWVzIG9mIGFsbCB0aGUgYHNyY19sYWJlbHNgIHVzaW5nIGBzZXBhcmF0b3JgIGFuZCByZXR1cm5zIHRoZSB0aW1lc2VyaWVzIHdpdGggdGhlIGxhYmVsIGBkc3RfbGFiZWxgIGNvbnRhaW5pbmcgdGhlIGpvaW5lZCB2YWx1ZS4gVGhlcmUgY2FuIGJlIGFueSBudW1iZXIgb2YgYHNyY19sYWJlbHNgIGluIHRoaXMgZnVuY3Rpb24uJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdsYWJlbF9yZXBsYWNlJyxcbiAgICBsYWJlbDogJ2xhYmVsX3JlcGxhY2UnLFxuICAgIGRldGFpbDogJ2xhYmVsX3JlcGxhY2UodiBpbnN0YW50LXZlY3RvciwgZHN0X2xhYmVsIHN0cmluZywgcmVwbGFjZW1lbnQgc3RyaW5nLCBzcmNfbGFiZWwgc3RyaW5nLCByZWdleCBzdHJpbmcpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgXCJGb3IgZWFjaCB0aW1lc2VyaWVzIGluIGB2YCwgYGxhYmVsX3JlcGxhY2UodiBpbnN0YW50LXZlY3RvciwgZHN0X2xhYmVsIHN0cmluZywgcmVwbGFjZW1lbnQgc3RyaW5nLCBzcmNfbGFiZWwgc3RyaW5nLCByZWdleCBzdHJpbmcpYCAgbWF0Y2hlcyB0aGUgcmVndWxhciBleHByZXNzaW9uIGByZWdleGAgYWdhaW5zdCB0aGUgbGFiZWwgYHNyY19sYWJlbGAuICBJZiBpdCBtYXRjaGVzLCB0aGVuIHRoZSB0aW1lc2VyaWVzIGlzIHJldHVybmVkIHdpdGggdGhlIGxhYmVsIGBkc3RfbGFiZWxgIHJlcGxhY2VkIGJ5IHRoZSBleHBhbnNpb24gb2YgYHJlcGxhY2VtZW50YC4gYCQxYCBpcyByZXBsYWNlZCB3aXRoIHRoZSBmaXJzdCBtYXRjaGluZyBzdWJncm91cCwgYCQyYCB3aXRoIHRoZSBzZWNvbmQgZXRjLiBJZiB0aGUgcmVndWxhciBleHByZXNzaW9uIGRvZXNuJ3QgbWF0Y2ggdGhlbiB0aGUgdGltZXNlcmllcyBpcyByZXR1cm5lZCB1bmNoYW5nZWQuXCIsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbG4nLFxuICAgIGxhYmVsOiAnbG4nLFxuICAgIGRldGFpbDogJ2xuKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIG5hdHVyYWwgbG9nYXJpdGhtIGZvciBhbGwgZWxlbWVudHMgaW4gYHZgLlxcblNwZWNpYWwgY2FzZXMgYXJlOlxcbiAqIGBsbigrSW5mKSA9ICtJbmZgXFxuICogYGxuKDApID0gLUluZmBcXG4gKiBgbG4oeCA8IDApID0gTmFOYFxcbiAqIGBsbihOYU4pID0gTmFOYCcsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbG9nMicsXG4gICAgbGFiZWw6ICdsb2cyJyxcbiAgICBkZXRhaWw6ICdsb2cyKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0NhbGN1bGF0ZXMgdGhlIGJpbmFyeSBsb2dhcml0aG0gZm9yIGFsbCBlbGVtZW50cyBpbiBgdmAuIFRoZSBzcGVjaWFsIGNhc2VzIGFyZSBlcXVpdmFsZW50IHRvIHRob3NlIGluIGBsbmAuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdsb2cxMCcsXG4gICAgbGFiZWw6ICdsb2cxMCcsXG4gICAgZGV0YWlsOiAnbG9nMTAodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnQ2FsY3VsYXRlcyB0aGUgZGVjaW1hbCBsb2dhcml0aG0gZm9yIGFsbCBlbGVtZW50cyBpbiBgdmAuIFRoZSBzcGVjaWFsIGNhc2VzIGFyZSBlcXVpdmFsZW50IHRvIHRob3NlIGluIGBsbmAuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdtaW51dGUnLFxuICAgIGxhYmVsOiAnbWludXRlJyxcbiAgICBkZXRhaWw6ICdtaW51dGUodj12ZWN0b3IodGltZSgpKSBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246XG4gICAgICAnUmV0dXJucyB0aGUgbWludXRlIG9mIHRoZSBob3VyIGZvciBlYWNoIG9mIHRoZSBnaXZlbiB0aW1lcyBpbiBVVEMuIFJldHVybmVkIHZhbHVlcyBhcmUgZnJvbSAwIHRvIDU5LicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbW9udGgnLFxuICAgIGxhYmVsOiAnbW9udGgnLFxuICAgIGRldGFpbDogJ21vbnRoKHY9dmVjdG9yKHRpbWUoKSkgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgdGhlIG1vbnRoIG9mIHRoZSB5ZWFyIGZvciBlYWNoIG9mIHRoZSBnaXZlbiB0aW1lcyBpbiBVVEMuIFJldHVybmVkIHZhbHVlcyBhcmUgZnJvbSAxIHRvIDEyLCB3aGVyZSAxIG1lYW5zIEphbnVhcnkgZXRjLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAncGknLFxuICAgIGxhYmVsOiAncGknLFxuICAgIGRldGFpbDogJ3BpKCknLFxuICAgIGRvY3VtZW50YXRpb246ICdSZXR1cm5zIHBpJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdwcmVkaWN0X2xpbmVhcicsXG4gICAgbGFiZWw6ICdwcmVkaWN0X2xpbmVhcicsXG4gICAgZGV0YWlsOiAncHJlZGljdF9saW5lYXIodiByYW5nZS12ZWN0b3IsIHQgc2NhbGFyKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdQcmVkaWN0cyB0aGUgdmFsdWUgb2YgdGltZSBzZXJpZXMgYHRgIHNlY29uZHMgZnJvbSBub3csIGJhc2VkIG9uIHRoZSByYW5nZSB2ZWN0b3IgYHZgLCB1c2luZyBzaW1wbGUgbGluZWFyIHJlZ3Jlc3Npb24uJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdyYWQnLFxuICAgIGxhYmVsOiAncmFkJyxcbiAgICBkZXRhaWw6ICdyYWQodiBpbnN0YW50LXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdDb252ZXJ0cyBkZWdyZWVzIHRvIHJhZGlhbnMgZm9yIGFsbCBlbGVtZW50cyBpbiB2JyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdyYXRlJyxcbiAgICBsYWJlbDogJ3JhdGUnLFxuICAgIGRldGFpbDogJ3JhdGUodiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgXCJDYWxjdWxhdGVzIHRoZSBwZXItc2Vjb25kIGF2ZXJhZ2UgcmF0ZSBvZiBpbmNyZWFzZSBvZiB0aGUgdGltZSBzZXJpZXMgaW4gdGhlIHJhbmdlIHZlY3Rvci4gQnJlYWtzIGluIG1vbm90b25pY2l0eSAoc3VjaCBhcyBjb3VudGVyIHJlc2V0cyBkdWUgdG8gdGFyZ2V0IHJlc3RhcnRzKSBhcmUgYXV0b21hdGljYWxseSBhZGp1c3RlZCBmb3IuIEFsc28sIHRoZSBjYWxjdWxhdGlvbiBleHRyYXBvbGF0ZXMgdG8gdGhlIGVuZHMgb2YgdGhlIHRpbWUgcmFuZ2UsIGFsbG93aW5nIGZvciBtaXNzZWQgc2NyYXBlcyBvciBpbXBlcmZlY3QgYWxpZ25tZW50IG9mIHNjcmFwZSBjeWNsZXMgd2l0aCB0aGUgcmFuZ2UncyB0aW1lIHBlcmlvZC5cIixcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdyZXNldHMnLFxuICAgIGxhYmVsOiAncmVzZXRzJyxcbiAgICBkZXRhaWw6ICdyZXNldHModiByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0ZvciBlYWNoIGlucHV0IHRpbWUgc2VyaWVzLCBgcmVzZXRzKHYgcmFuZ2UtdmVjdG9yKWAgcmV0dXJucyB0aGUgbnVtYmVyIG9mIGNvdW50ZXIgcmVzZXRzIHdpdGhpbiB0aGUgcHJvdmlkZWQgdGltZSByYW5nZSBhcyBhbiBpbnN0YW50IHZlY3Rvci4gQW55IGRlY3JlYXNlIGluIHRoZSB2YWx1ZSBiZXR3ZWVuIHR3byBjb25zZWN1dGl2ZSBzYW1wbGVzIGlzIGludGVycHJldGVkIGFzIGEgY291bnRlciByZXNldC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3JvdW5kJyxcbiAgICBsYWJlbDogJ3JvdW5kJyxcbiAgICBkZXRhaWw6ICdyb3VuZCh2IGluc3RhbnQtdmVjdG9yLCB0b19uZWFyZXN0PTEgc2NhbGFyKScsXG4gICAgZG9jdW1lbnRhdGlvbjpcbiAgICAgICdSb3VuZHMgdGhlIHNhbXBsZSB2YWx1ZXMgb2YgYWxsIGVsZW1lbnRzIGluIGB2YCB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyLiBUaWVzIGFyZSByZXNvbHZlZCBieSByb3VuZGluZyB1cC4gVGhlIG9wdGlvbmFsIGB0b19uZWFyZXN0YCBhcmd1bWVudCBhbGxvd3Mgc3BlY2lmeWluZyB0aGUgbmVhcmVzdCBtdWx0aXBsZSB0byB3aGljaCB0aGUgc2FtcGxlIHZhbHVlcyBzaG91bGQgYmUgcm91bmRlZC4gVGhpcyBtdWx0aXBsZSBtYXkgYWxzbyBiZSBhIGZyYWN0aW9uLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc2NhbGFyJyxcbiAgICBsYWJlbDogJ3NjYWxhcicsXG4gICAgZGV0YWlsOiAnc2NhbGFyKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ0dpdmVuIGEgc2luZ2xlLWVsZW1lbnQgaW5wdXQgdmVjdG9yLCBgc2NhbGFyKHYgaW5zdGFudC12ZWN0b3IpYCByZXR1cm5zIHRoZSBzYW1wbGUgdmFsdWUgb2YgdGhhdCBzaW5nbGUgZWxlbWVudCBhcyBhIHNjYWxhci4gSWYgdGhlIGlucHV0IHZlY3RvciBkb2VzIG5vdCBoYXZlIGV4YWN0bHkgb25lIGVsZW1lbnQsIGBzY2FsYXJgIHdpbGwgcmV0dXJuIGBOYU5gLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc2duJyxcbiAgICBsYWJlbDogJ3NnbicsXG4gICAgZGV0YWlsOiAnc2duKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgYSB2ZWN0b3Igd2l0aCBhbGwgc2FtcGxlIHZhbHVlcyBjb252ZXJ0ZWQgdG8gdGhlaXIgc2lnbiwgZGVmaW5lZCBhcyB0aGlzOiAxIGlmIHYgaXMgcG9zaXRpdmUsIC0xIGlmIHYgaXMgbmVnYXRpdmUgYW5kIDAgaWYgdiBpcyBlcXVhbCB0byB6ZXJvLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc29ydCcsXG4gICAgbGFiZWw6ICdzb3J0JyxcbiAgICBkZXRhaWw6ICdzb3J0KHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyB2ZWN0b3IgZWxlbWVudHMgc29ydGVkIGJ5IHRoZWlyIHNhbXBsZSB2YWx1ZXMsIGluIGFzY2VuZGluZyBvcmRlci4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3NvcnRfZGVzYycsXG4gICAgbGFiZWw6ICdzb3J0X2Rlc2MnLFxuICAgIGRldGFpbDogJ3NvcnRfZGVzYyh2IGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JldHVybnMgdmVjdG9yIGVsZW1lbnRzIHNvcnRlZCBieSB0aGVpciBzYW1wbGUgdmFsdWVzLCBpbiBkZXNjZW5kaW5nIG9yZGVyLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3FydCcsXG4gICAgbGFiZWw6ICdzcXJ0JyxcbiAgICBkZXRhaWw6ICdzcXJ0KHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnQ2FsY3VsYXRlcyB0aGUgc3F1YXJlIHJvb3Qgb2YgYWxsIGVsZW1lbnRzIGluIGB2YC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3RpbWUnLFxuICAgIGxhYmVsOiAndGltZScsXG4gICAgZGV0YWlsOiAndGltZSgpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgdGhlIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIEphbnVhcnkgMSwgMTk3MCBVVEMuIE5vdGUgdGhhdCB0aGlzIGRvZXMgbm90IGFjdHVhbGx5IHJldHVybiB0aGUgY3VycmVudCB0aW1lLCBidXQgdGhlIHRpbWUgYXQgd2hpY2ggdGhlIGV4cHJlc3Npb24gaXMgdG8gYmUgZXZhbHVhdGVkLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAndGltZXN0YW1wJyxcbiAgICBsYWJlbDogJ3RpbWVzdGFtcCcsXG4gICAgZGV0YWlsOiAndGltZXN0YW1wKHYgaW5zdGFudC12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOlxuICAgICAgJ1JldHVybnMgdGhlIHRpbWVzdGFtcCBvZiBlYWNoIG9mIHRoZSBzYW1wbGVzIG9mIHRoZSBnaXZlbiB2ZWN0b3IgYXMgdGhlIG51bWJlciBvZiBzZWNvbmRzIHNpbmNlIEphbnVhcnkgMSwgMTk3MCBVVEMuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICd2ZWN0b3InLFxuICAgIGxhYmVsOiAndmVjdG9yJyxcbiAgICBkZXRhaWw6ICd2ZWN0b3IocyBzY2FsYXIpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnUmV0dXJucyB0aGUgc2NhbGFyIGBzYCBhcyBhIHZlY3RvciB3aXRoIG5vIGxhYmVscy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3llYXInLFxuICAgIGxhYmVsOiAneWVhcicsXG4gICAgZGV0YWlsOiAneWVhcih2PXZlY3Rvcih0aW1lKCkpIGluc3RhbnQtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1JldHVybnMgdGhlIHllYXIgZm9yIGVhY2ggb2YgdGhlIGdpdmVuIHRpbWVzIGluIFVUQy4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ2F2Z19vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnYXZnX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnYXZnX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIGF2ZXJhZ2UgdmFsdWUgb2YgYWxsIHBvaW50cyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnbWluX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdtaW5fb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdtaW5fb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgbWluaW11bSB2YWx1ZSBvZiBhbGwgcG9pbnRzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdtYXhfb3Zlcl90aW1lJyxcbiAgICBsYWJlbDogJ21heF9vdmVyX3RpbWUnLFxuICAgIGRldGFpbDogJ21heF9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBtYXhpbXVtIHZhbHVlIG9mIGFsbCBwb2ludHMgaW4gdGhlIHNwZWNpZmllZCBpbnRlcnZhbC4nLFxuICB9LFxuICB7XG4gICAgaW5zZXJ0VGV4dDogJ3N1bV9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnc3VtX292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnc3VtX292ZXJfdGltZShyYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIHN1bSBvZiBhbGwgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdjb3VudF9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAnY291bnRfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdjb3VudF9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBjb3VudCBvZiBhbGwgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdxdWFudGlsZV9vdmVyX3RpbWUnLFxuICAgIGxhYmVsOiAncXVhbnRpbGVfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdxdWFudGlsZV9vdmVyX3RpbWUoc2NhbGFyLCByYW5nZS12ZWN0b3IpJyxcbiAgICBkb2N1bWVudGF0aW9uOiAnVGhlIM+GLXF1YW50aWxlICgwIOKJpCDPhiDiiaQgMSkgb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3RkZGV2X292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdzdGRkZXZfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdzdGRkZXZfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgcG9wdWxhdGlvbiBzdGFuZGFyZCBkZXZpYXRpb24gb2YgdGhlIHZhbHVlcyBpbiB0aGUgc3BlY2lmaWVkIGludGVydmFsLicsXG4gIH0sXG4gIHtcbiAgICBpbnNlcnRUZXh0OiAnc3RkdmFyX292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdzdGR2YXJfb3Zlcl90aW1lJyxcbiAgICBkZXRhaWw6ICdzdGR2YXJfb3Zlcl90aW1lKHJhbmdlLXZlY3RvciknLFxuICAgIGRvY3VtZW50YXRpb246ICdUaGUgcG9wdWxhdGlvbiBzdGFuZGFyZCB2YXJpYW5jZSBvZiB0aGUgdmFsdWVzIGluIHRoZSBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbiAge1xuICAgIGluc2VydFRleHQ6ICdsYXN0X292ZXJfdGltZScsXG4gICAgbGFiZWw6ICdsYXN0X292ZXJfdGltZScsXG4gICAgZGV0YWlsOiAnbGFzdF9vdmVyX3RpbWUocmFuZ2UtdmVjdG9yKScsXG4gICAgZG9jdW1lbnRhdGlvbjogJ1RoZSBtb3N0IHJlY2VudCBwb2ludCB2YWx1ZSBpbiBzcGVjaWZpZWQgaW50ZXJ2YWwuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBQUk9NX0tFWVdPUkRTID0gRlVOQ1RJT05TLm1hcCgoa2V5d29yZCkgPT4ga2V5d29yZC5sYWJlbCk7XG5cbmV4cG9ydCBjb25zdCBwcm9tcWxHcmFtbWFyOiBHcmFtbWFyID0ge1xuICBjb21tZW50OiB7XG4gICAgcGF0dGVybjogLyMuKi8sXG4gIH0sXG4gICdjb250ZXh0LWFnZ3JlZ2F0aW9uJzoge1xuICAgIHBhdHRlcm46IC8oKGJ5fHdpdGhvdXQpXFxzKilcXChbXildKlxcKS8sIC8vIGJ5ICgpXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBpbnNpZGU6IHtcbiAgICAgICdsYWJlbC1rZXknOiB7XG4gICAgICAgIHBhdHRlcm46IC9bXigpLFxcc11bXiwpXSpbXiksXFxzXSovLFxuICAgICAgICBhbGlhczogJ2F0dHItbmFtZScsXG4gICAgICB9LFxuICAgICAgcHVuY3R1YXRpb246IC9bKCldLyxcbiAgICB9LFxuICB9LFxuICAnY29udGV4dC1sYWJlbHMnOiB7XG4gICAgcGF0dGVybjogL1xce1tefV0qKD89fT8pLyxcbiAgICBncmVlZHk6IHRydWUsXG4gICAgaW5zaWRlOiB7XG4gICAgICBjb21tZW50OiB7XG4gICAgICAgIHBhdHRlcm46IC8jLiovLFxuICAgICAgfSxcbiAgICAgICdsYWJlbC1rZXknOiB7XG4gICAgICAgIHBhdHRlcm46IC9bYS16X11cXHcqKD89XFxzKig9fCE9fD1+fCF+KSkvLFxuICAgICAgICBhbGlhczogJ2F0dHItbmFtZScsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAnbGFiZWwtdmFsdWUnOiB7XG4gICAgICAgIHBhdHRlcm46IC9cIig/OlxcXFwufFteXFxcXFwiXSkqXCIvLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGFsaWFzOiAnYXR0ci12YWx1ZScsXG4gICAgICB9LFxuICAgICAgcHVuY3R1YXRpb246IC9be10vLFxuICAgIH0sXG4gIH0sXG4gIGZ1bmN0aW9uOiBuZXcgUmVnRXhwKGBcXFxcYig/OiR7RlVOQ1RJT05TLm1hcCgoZikgPT4gZi5sYWJlbCkuam9pbignfCcpfSkoPz1cXFxccypcXFxcKClgLCAnaScpLFxuICAnY29udGV4dC1yYW5nZSc6IFtcbiAgICB7XG4gICAgICBwYXR0ZXJuOiAvXFxbW15cXF1dKig/PV0pLywgLy8gWzFtXVxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdyYW5nZS1kdXJhdGlvbic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxiXFxkK1tzbWhkd3ldXFxiL2ksXG4gICAgICAgICAgYWxpYXM6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdHRlcm46IC8ob2Zmc2V0XFxzKylcXHcrLywgLy8gb2Zmc2V0IDFtXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdyYW5nZS1kdXJhdGlvbic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxiXFxkK1tzbWhkd3ldXFxiL2ksXG4gICAgICAgICAgYWxpYXM6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBpZExpc3Q6IHtcbiAgICBwYXR0ZXJuOiAvXFxkKyhcXHxcXGQrKSsvLFxuICAgIGFsaWFzOiAnbnVtYmVyJyxcbiAgfSxcbiAgbnVtYmVyOiAvXFxiLT9cXGQrKChcXC5cXGQqKT8oW2VFXVsrLV0/XFxkKyk/KT9cXGIvLFxuICBvcGVyYXRvcjogbmV3IFJlZ0V4cChgL1stKyovPSVefl18JiY/fFxcXFx8P1xcXFx8fCE9P3w8KD86PT4/fDx8Pik/fD5bPj1dP3xcXFxcYig/OiR7T1BFUkFUT1JTLmpvaW4oJ3wnKX0pXFxcXGJgLCAnaScpLFxuICBwdW5jdHVhdGlvbjogL1t7fTsoKWAsLl0vLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvbXFsR3JhbW1hcjtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgZnJvbSAnLi91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0JztcbmZ1bmN0aW9uIHVzZU9ic2VydmFibGUob2JzZXJ2YWJsZSQsIGluaXRpYWxWYWx1ZSkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSksIHZhbHVlID0gX2FbMF0sIHVwZGF0ZSA9IF9hWzFdO1xuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcyA9IG9ic2VydmFibGUkLnN1YnNjcmliZSh1cGRhdGUpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gcy51bnN1YnNjcmliZSgpOyB9O1xuICAgIH0sIFtvYnNlcnZhYmxlJF0pO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydCBkZWZhdWx0IHVzZU9ic2VydmFibGU7XG4iXSwibmFtZXMiOlsiY3NzIiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZU9ic2VydmFibGUiLCJMb2FkaW5nU3RhdGUiLCJBbGVydCIsIkJ1dHRvbiIsIkljb24iLCJMb2FkaW5nUGxhY2Vob2xkZXIiLCJQYW5lbENocm9tZUxvYWRpbmdJbmRpY2F0b3IiLCJ1c2VTdHlsZXMyIiwiVmVydGljYWxHcm91cCIsIndpdGhFcnJvckJvdW5kYXJ5IiwiQWxlcnRMYWJlbHMiLCJEZXRhaWxzRmllbGQiLCJSdWxlVmlld2VyTGF5b3V0IiwiUnVsZVZpZXdlckxheW91dENvbnRlbnQiLCJSdWxlVmlld2VyVmlzdWFsaXphdGlvbiIsIlJ1bGVEZXRhaWxzQWN0aW9uQnV0dG9ucyIsIlJ1bGVEZXRhaWxzQW5ub3RhdGlvbnMiLCJSdWxlRGV0YWlsc0RhdGFTb3VyY2VzIiwiUnVsZURldGFpbHNFeHByZXNzaW9uIiwiUnVsZURldGFpbHNGZWRlcmF0ZWRTb3VyY2VzIiwiUnVsZURldGFpbHNNYXRjaGluZ0luc3RhbmNlcyIsIlJ1bGVIZWFsdGgiLCJSdWxlU3RhdGUiLCJ1c2VBbGVydFF1ZXJpZXNTdGF0dXMiLCJ1c2VDb21iaW5lZFJ1bGUiLCJBbGVydGluZ1F1ZXJ5UnVubmVyIiwiZ2V0UnVsZXNTb3VyY2VCeU5hbWUiLCJhbGVydFJ1bGVUb1F1ZXJpZXMiLCJydWxlSWQiLCJpc0ZlZGVyYXRlZFJ1bGVHcm91cCIsImVycm9yTWVzc2FnZSIsImVycm9yVGl0bGUiLCJwYWdlVGl0bGUiLCJSdWxlVmlld2VyIiwibWF0Y2giLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJpZCIsInNvdXJjZU5hbWUiLCJwYXJhbXMiLCJpZGVudGlmaWVyIiwidHJ5UGFyc2UiLCJsb2FkaW5nIiwiZXJyb3IiLCJyZXN1bHQiLCJydWxlIiwicnVubmVyIiwiZGF0YSIsImdldCIsInF1ZXJpZXMyIiwicXVlcmllcyIsInNldFF1ZXJpZXMiLCJhbGxEYXRhU291cmNlc0F2YWlsYWJsZSIsIm9uUnVuUXVlcmllcyIsImxlbmd0aCIsInJ1biIsImRlc3Ryb3kiLCJvbkNoYW5nZVF1ZXJ5IiwicXVlcnkiLCJtYXAiLCJxIiwicmVmSWQiLCJydWxlc1NvdXJjZSIsIm1lc3NhZ2UiLCJzdGFjayIsImFubm90YXRpb25zIiwiT2JqZWN0IiwiZW50cmllcyIsImZpbHRlciIsIl8iLCJ2YWx1ZSIsInRyaW0iLCJpc0ZlZGVyYXRlZFJ1bGUiLCJncm91cCIsIm5hbWUiLCJkZXRhaWxzIiwibGVmdFNpZGUiLCJwcm9tUnVsZSIsImxhYmVscyIsImtleXMiLCJyaWdodFNpZGUiLCJuYW1lc3BhY2UiLCJxdWVyaWVzVGl0bGUiLCJpc0xvYWRpbmciLCJjYW5jZWwiLCJxdWVyeVdhcm5pbmciLCJ2YWx1ZXMiLCJmaW5kIiwiZCIsInN0YXRlIiwiTG9hZGluZyIsInRoZW1lIiwic3BhY2luZyIsInR5cG9ncmFwaHkiLCJoNSIsImZvbnRTaXplIiwiZm9udFdlaWdodEJvbGQiLCJmb250RmFtaWx5IiwiY29sb3JzIiwiYm9yZGVyIiwibWVkaXVtIiwic3R5bGUiLCJjb250ZXh0U3J2IiwiQXV0aG9yaXplIiwiYWN0aW9ucyIsImNoaWxkcmVuIiwiZmFsbGJhY2siLCJzb21lIiwiYWN0aW9uIiwiaGFzQWNjZXNzIiwiY3giLCJsYW5ndWFnZXMiLCJwcmlzbUxhbmd1YWdlcyIsIkVkaXRvciIsIm1ha2VWYWx1ZSIsIlNsYXRlUHJpc20iLCJ1c2VTdHlsZXMiLCJMb2dxbFN5bnRheCIsIlByb21xbFN5bnRheCIsIkRhdGFTb3VyY2VUeXBlIiwiaXNDbG91ZFJ1bGVzU291cmNlIiwiV2VsbCIsIkhpZ2hsaWdodGVkUXVlcnkiLCJsYW5ndWFnZSIsImV4cHIiLCJwbHVnaW5zIiwib25seUluIiwibm9kZSIsInR5cGUiLCJnZXRTeW50YXgiLCJzbGF0ZVZhbHVlIiwiRXhwcmVzc2lvbiIsImV4cHJlc3Npb24iLCJ3ZWxsIiwiTG9raSIsIm1vbm9zcGFjZSIsImNvbmZpZyIsIlJhZGlvQnV0dG9uR3JvdXAiLCJTVEFUIiwiVEFCTEUiLCJUSU1FU0VSSUVTIiwiUGFuZWxQbHVnaW5zQnV0dG9uR3JvdXAiLCJwcm9wcyIsIm9uQ2hhbmdlIiwic2l6ZSIsInBhbmVscyIsImdldFN1cHBvcnRlZFBhbmVscyIsInJlZHVjZSIsInBhbmVsIiwiaXNTdXBwb3J0ZWRQYW5lbFBsdWdpbiIsInB1c2giLCJsYWJlbCIsImltZ1VybCIsImluZm8iLCJsb2dvcyIsInNtYWxsIiwiU3RhY2siLCJMYWJlbCIsIlRvb2x0aXAiLCJJbnB1dCIsIk1hdGNoZXJGaWx0ZXIiLCJjbGFzc05hbWUiLCJvbkZpbHRlckNoYW5nZSIsImRlZmF1bHRRdWVyeVN0cmluZyIsInF1ZXJ5U3RyaW5nIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiZSIsInRhcmdldCIsInNlYXJjaEljb24iLCJpY29uIiwiaW5wdXRXaWR0aCIsImxvY2F0aW9uU2VydmljZSIsIlBhZ2VUb29sYmFyIiwiUGFnZSIsIndyYXBJbkNvbnRlbnQiLCJ0aXRsZSIsImdldFBhZ2VTdHlsZXMiLCJjb250ZW50IiwicGFkZGluZyIsImdldENvbnRlbnRTdHlsZXMiLCJ3cmFwcGVyIiwiYnJlYWtwb2ludHMiLCJ4eGwiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsIndlYWsiLCJzaGFwZSIsImJvcmRlclJhZGl1cyIsIkF1dG9TaXplciIsImRhdGVUaW1lIiwidXJsVXRpbCIsImdldERhdGFTb3VyY2VTcnYiLCJQYW5lbFJlbmRlcmVyIiwiQ29kZUVkaXRvciIsIkRhdGVUaW1lUGlja2VyIiwiTGlua0J1dHRvbiIsInVzZVRoZW1lMiIsImlzRXhwcmVzc2lvblF1ZXJ5IiwiQWNjZXNzQ29udHJvbEFjdGlvbiIsImhlYWRlckhlaWdodCIsImRlZmF1bHRQYW5lbCIsIm1vZGVsIiwic2V0UGFuZWwiLCJkc1NldHRpbmdzIiwiZ2V0SW5zdGFuY2VTZXR0aW5ncyIsImRhdGFzb3VyY2VVaWQiLCJyZWxhdGl2ZVRpbWVSYW5nZSIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwiZnJhbWVJbmRleCIsInNob3dIZWFkZXIiLCJvblRpbWVDaGFuZ2UiLCJuZXdEYXRlVGltZSIsIm5vdyIsInVuaXgiLCJpbnRlcnZhbCIsImZyb20iLCJ0byIsInNldERhdGVUaW1lIiwicmVsYXRpdmVUaW1lUmFuZ2VUbyIsInN1YnRyYWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoIiwiaGVpZ2h0IiwiaGVhZGVyIiwiZGF0YVNvdXJjZSIsIkRhdGUiLCJEYXRhU291cmNlc0V4cGxvcmUiLCJjcmVhdGVFeHBsb3JlTGluayIsImdyaWRTaXplIiwic2V0dGluZ3MiLCJyZXN0IiwicXVlcnlQYXJhbXMiLCJkYXRhc291cmNlIiwicmVuZGVyVXJsIiwiYXBwU3ViVXJsIiwibGVmdCIsImZvbnRXZWlnaHRNZWRpdW0iLCJ0ZXh0IiwibGluayIsInNlY29uZGFyeSIsIkdyYWZhbmFBbGVydFN0YXRlIiwiQWxlcnRJbnN0YW5jZVN0YXRlRmlsdGVyIiwib25TdGF0ZUZpbHRlckNoYW5nZSIsInN0YXRlRmlsdGVyIiwic3RhdGVPcHRpb25zIiwidiIsInVuZGVmaW5lZCIsIkZyYWdtZW50IiwidXNlRGlzcGF0Y2giLCJ1c2VMb2NhdGlvbiIsIkNsaXBib2FyZEJ1dHRvbiIsIkNvbmZpcm1Nb2RhbCIsIkhvcml6b250YWxHcm91cCIsInVzZUFwcE5vdGlmaWNhdGlvbiIsInVzZUlzUnVsZUVkaXRhYmxlIiwidXNlU3RhdGVIaXN0b3J5TW9kYWwiLCJkZWxldGVSdWxlQWN0aW9uIiwiZ2V0QWxlcnRtYW5hZ2VyQnlVaWQiLCJBbm5vdGF0aW9uIiwiZ2V0UnVsZXNTb3VyY2VOYW1lIiwiaXNHcmFmYW5hUnVsZXNTb3VyY2UiLCJjcmVhdGVWaWV3TGluayIsIm1ha2VSdWxlQmFzZWRTaWxlbmNlTGluayIsImRpc3BhdGNoIiwibG9jYXRpb24iLCJub3RpZnlBcHAiLCJydWxlclJ1bGUiLCJydWxlVG9EZWxldGUiLCJzZXRSdWxlVG9EZWxldGUiLCJhbGVydElkIiwiaXNHcmFmYW5hUnVsZXJSdWxlIiwiZ3JhZmFuYV9hbGVydCIsIlN0YXRlSGlzdG9yeU1vZGFsIiwic2hvd1N0YXRlSGlzdG9yeU1vZGFsIiwiYWxlcnRtYW5hZ2VyU291cmNlTmFtZSIsImpzb25EYXRhIiwiYWxlcnRtYW5hZ2VyVWlkIiwicnVsZXNTb3VyY2VOYW1lIiwiaGFzRXhwbG9yZVBlcm1pc3Npb24iLCJoYXNQZXJtaXNzaW9uIiwibGVmdEJ1dHRvbnMiLCJyaWdodEJ1dHRvbnMiLCJpc0ZlZGVyYXRlZCIsImlzRWRpdGFibGUiLCJpc1JlbW92YWJsZSIsInJldHVyblRvIiwicGF0aG5hbWUiLCJzZWFyY2giLCJpc1ZpZXdNb2RlIiwiaW5WaWV3TW9kZSIsImRlbGV0ZVJ1bGUiLCJmcm9tUnVsZXJSdWxlIiwibmF2aWdhdGVUbyIsImJ1aWxkU2hhcmVVcmwiLCJhcHBVcmwiLCJiYXNlVXJsIiwicnVsZVVybCIsImVuY29kZVVSSUNvbXBvbmVudCIsIndpbmRvdyIsImhyZWYiLCJzcGxpdCIsImJ1dHRvbiIsInJ1bmJvb2tVUkwiLCJkYXNoYm9hcmRVSUQiLCJwYW5lbElkIiwicGFuZWxJRCIsIkFsZXJ0aW5nSW5zdGFuY2VDcmVhdGUiLCJpc0VkaXRvciIsImVkaXRVUkwiLCJzdHJpbmdpZnlJZGVudGlmaWVyIiwic3VjY2VzcyIsImVuZHNXaXRoIiwic20iLCJBbm5vdGF0aW9uRGV0YWlsc0ZpZWxkIiwia2V5IiwiRXhwcmVzc2lvbkRhdGFzb3VyY2VVSUQiLCJkYXRhU291cmNlcyIsIm1ldGEiLCJ1bmlxdWUiLCJkcyIsInVpZCIsImluZGV4IiwiZGF0YVNvdXJjZUljb24iLCJleHByUm93Iiwic291cmNlVGVuYW50cyIsInNvdXJjZV90ZW5hbnRzIiwidGVuYW50IiwibGFiZWxzTWF0Y2hNYXRjaGVycyIsInBhcnNlTWF0Y2hlcnMiLCJzb3J0QWxlcnRzIiwiU29ydE9yZGVyIiwiaXNBbGVydGluZ1J1bGUiLCJBbGVydEluc3RhbmNlc1RhYmxlIiwic2V0UXVlcnlTdHJpbmciLCJhbGVydFN0YXRlIiwic2V0QWxlcnRTdGF0ZSIsImZpbHRlcktleSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInF1ZXJ5U3RyaW5nS2V5IiwiYWxlcnRzIiwiZmlsdGVyQWxlcnRzIiwiSW1wb3J0YW5jZSIsImZsZXhSb3ciLCJzcGFjZUJldHdlZW4iLCJyb3dDaGlsZCIsImFsZXJ0SW5zdGFuY2VMYWJlbCIsImFsZXJ0SW5zdGFuY2VTdGF0ZSIsImZpbHRlcmVkQWxlcnRzIiwibWF0Y2hlcnMiLCJhbGVydCIsImdldFN0eWxlIiwiaGVhbHRoIiwibGFzdEVycm9yIiwid2FybiIsIndhcm5pbmciLCJpbnRlcnZhbFRvQWJicmV2aWF0ZWREdXJhdGlvblN0cmluZyIsIlNwaW5uZXIiLCJQcm9tQWxlcnRpbmdSdWxlU3RhdGUiLCJpc1JlY29yZGluZ1J1bGUiLCJnZXRGaXJzdEFjdGl2ZUF0IiwiQWxlcnRTdGF0ZVRhZyIsImlzRGVsZXRpbmciLCJpc0NyZWF0aW5nIiwiZm9yVGltZSIsIkluYWN0aXZlIiwiZmlyc3RBY3RpdmVBdCIsIlN0cmluZyIsImZvciIsInN0YXJ0IiwiZW5kIiwiYm9keVNtYWxsIiwidW5pcXVlSWQiLCJkYXRlVGltZUZvcm1hdCIsInVzZU1hbmFnZWRBbGVydFN0YXRlSGlzdG9yeSIsIkFsZXJ0TGFiZWwiLCJEeW5hbWljVGFibGUiLCJTdGF0ZUhpc3RvcnkiLCJjb2x1bW5zIiwicmVuZGVyQ2VsbCIsInJlbmRlclN0YXRlQ2VsbCIsInJlbmRlclZhbHVlQ2VsbCIsInJlbmRlclRpbWVzdGFtcENlbGwiLCJpdGVtcyIsImFjYyIsIml0ZW0iLCJuZXdTdGF0ZSIsInRpbWVzdGFtcCIsInVwZGF0ZWQiLCJoYXNNYXRjaGluZ1ByZWNlZGluZ1N0YXRlIiwicHJldlN0YXRlIiwiaGlzdG9yeUl0ZW0iLCJtYXRjaGVzIiwiZXZhbE1hdGNoZXMiLCJtZXRyaWMiLCJUaW1lc3RhbXBTdHlsZSIsIkxhYmVsc1dyYXBwZXIiLCJ4cyIsImN1cnJlbnRIaXN0b3J5SXRlbSIsInByZXZpb3VzSGlzdG9yeUl0ZW0iLCJldmVyeSIsIkJvb2xlYW4iLCJ1c2VBc3luYyIsImZldGNoUHJvbUFuZFJ1bGVyUnVsZXNBY3Rpb24iLCJpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUiLCJpc1J1bGVyTm90U3VwcG9ydGVkUmVzcG9uc2UiLCJ1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzIiwidXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IiLCJydWxlU291cmNlTmFtZSIsInJlcXVlc3RTdGF0ZSIsInVzZUNvbWJpbmVkUnVsZXNMb2FkZXIiLCJjb21iaW5lZFJ1bGVzIiwiZ3JvdXBzIiwicnVsZXMiLCJmcm9tQ29tYmluZWRSdWxlIiwiZXF1YWwiLCJ1c2VDb21iaW5lZFJ1bGVzTWF0Y2hpbmciLCJydWxlTmFtZSIsInByb21SdWxlUmVxdWVzdHMiLCJwcm9tUnVsZXMiLCJwcm9tUnVsZVJlcXVlc3QiLCJnZXRSZXF1ZXN0U3RhdGUiLCJydWxlclJ1bGVSZXF1ZXN0cyIsInJ1bGVyUnVsZXMiLCJydWxlclJ1bGVSZXF1ZXN0IiwiZGlzcGF0Y2hlZCIsInNsaWNlIiwidXNlUmVmIiwiZ2V0QWxsUnVsZXNTb3VyY2VzIiwiaXNBbGVydGluZ1J1bGVyUnVsZSIsImlzUmVjb3JkaW5nUnVsZXJSdWxlIiwicHJvbVJ1bGVzUmVzcG9uc2VzIiwicnVsZXJSdWxlc1Jlc3BvbnNlcyIsImNhY2hlIiwicnVsZXNTb3VyY2VzIiwiRXJyb3IiLCJjYWNoZWQiLCJjdXJyZW50IiwibmFtZXNwYWNlcyIsImZvckVhY2giLCJuYW1lc3BhY2VOYW1lIiwiYWRkUnVsZXJHcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlIiwibnMiLCJhZGRQcm9tR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZSIsImZsYXQiLCJmbGF0dGVuR3JhZmFuYU1hbmFnZWRSdWxlcyIsIm5ld05hbWVzcGFjZSIsInNvcnRSdWxlc0J5TmFtZSIsImZsYXRNYXAiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiY29tYmluZWRHcm91cCIsInJ1bGVyUnVsZVRvQ29tYmluZWRSdWxlIiwiZyIsImV4aXN0aW5nUnVsZSIsImdldEV4aXN0aW5nUnVsZUluR3JvdXAiLCJwcm9tUnVsZVRvQ29tYmluZWRSdWxlIiwicmVjb3JkIiwiaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUiLCJjb21iaW5lZFJ1bGUiLCJjaGVja1F1ZXJ5IiwiaGFzaFF1ZXJ5IiwicmVwbGFjZSIsImpvaW4iLCJmZXRjaEZvbGRlcklmTm90RmV0Y2hlZEFjdGlvbiIsInVzZUZvbGRlciIsImZvbGRlclJlcXVlc3RzIiwiZm9sZGVycyIsInJlcXVlc3QiLCJmb2xkZXIiLCJnZXRSdWxlc1Blcm1pc3Npb25zIiwiZm9sZGVyVUlEIiwibmFtZXNwYWNlX3VpZCIsInJ1bGVQZXJtaXNzaW9uIiwiaGFzRWRpdFBlcm1pc3Npb24iLCJ1cGRhdGUiLCJoYXNSZW1vdmVQZXJtaXNzaW9uIiwiZGVsZXRlIiwiY2FuU2F2ZSIsImlzUnVsZXJBdmFpbGFibGUiLCJydWxlckNvbmZpZyIsImZldGNoR3JhZmFuYUFubm90YXRpb25zQWN0aW9uIiwiaGlzdG9yeSIsIm1hbmFnZWRBbGVydFN0YXRlSGlzdG9yeSIsIk1vZGFsIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiaGlkZVN0YXRlSGlzdG9yeU1vZGFsIiwib2YiLCJSZXBsYXlTdWJqZWN0IiwiY2F0Y2hFcnJvciIsInNoYXJlIiwidjQiLCJ1dWlkdjQiLCJkYXRhRnJhbWVGcm9tSlNPTiIsImdldERlZmF1bHRUaW1lUmFuZ2UiLCJyYW5nZVV0aWwiLCJ3aXRoTG9hZGluZ0luZGljYXRvciIsInRvRGF0YVF1ZXJ5RXJyb3IiLCJnZXRCYWNrZW5kU3J2IiwiY2FuY2VsTmV0d29ya1JlcXVlc3RzT25VbnN1YnNjcmliZSIsInNldFN0cnVjdHVyZVJldmlzaW9uIiwicHJlUHJvY2Vzc1BhbmVsRGF0YSIsImdldFRpbWVSYW5nZUZvckV4cHJlc3Npb24iLCJjb25zdHJ1Y3RvciIsImJhY2tlbmRTcnYiLCJkYXRhU291cmNlU3J2Iiwic3ViamVjdCIsImxhc3RSZXN1bHQiLCJhc09ic2VydmFibGUiLCJlbXB0eSIsImluaXRpYWxTdGF0ZSIsIkRvbmUiLCJuZXh0IiwiZmlsdGVyUXVlcnkiLCJzdWJzY3JpcHRpb24iLCJydW5SZXF1ZXN0Iiwic3Vic2NyaWJlIiwiZGF0YVBlclF1ZXJ5IiwibmV4dFJlc3VsdCIsImFwcGx5Q2hhbmdlIiwicHJldmlvdXMiLCJwcmVQcm9jZXNzZWQiLCJtYXBFcnJvclRvUGFuZWxEYXRhIiwidW5zdWJzY3JpYmUiLCJyZXF1ZXN0SXNSdW5uaW5nIiwiY29tcGxldGUiLCJpbml0aWFsIiwidXJsIiwibWV0aG9kIiwicmVxdWVzdElkIiwid2hpbGVMb2FkaW5nIiwic291cmNlIiwiZmV0Y2giLCJwaXBlIiwibWFwVG9QYW5lbERhdGEiLCJkYXRhQnlRdWVyeSIsInNlcmllcyIsInRpbWVSYW5nZSIsImdldFRpbWVSYW5nZSIsInJlbGF0aXZlIiwicmVsYXRpdmVUb1RpbWVSYW5nZSIsImNvbnNvbGUiLCJyZXNwb25zZSIsInJlc3VsdHMiLCJmcmFtZXMiLCJxdWVyeUVycm9yIiwiY2hhbmdlIiwiY2xvdWRBbGVydFJ1bGVUb01vZGVsIiwicXVlcnlUeXBlIiwiRXhwcmVzc2lvblF1ZXJ5VHlwZSIsIkZBTExfQkFDS19USU1FX1JBTkdFIiwicmVmZXJlbmNlZFJlZklkcyIsImdldFJlZmVyZW5jZWRJZHMiLCJnZXRUaW1lUmFuZ2VzIiwibWF4IiwibWluIiwiY2xhc3NpYyIsImdldFJlZmVyZW5jZWRJZHNGb3JDbGFzc2ljQ29uZGl0aW9uIiwibWF0aCIsImdldFJlZmVyZW5jZWRJZHNGb3JNYXRoIiwicmVzYW1wbGUiLCJnZXRSZWZlcmVuY2VkSWRzRm9yUmVkdWNlIiwiY29uZGl0aW9ucyIsImNvbmRpdGlvbiIsInJlZmVyZW5jZWRSZWZJZHNLZXkiLCJpbmNsdWRlcyIsImlzRXhwcmVzc2lvblJlZmVyZW5jZSIsImRhdGFRdWVyeSIsIkFHR1JFR0FUSU9OX09QRVJBVE9SUyIsImluc2VydFRleHQiLCJkb2N1bWVudGF0aW9uIiwiUElQRV9QQVJTRVJTIiwibW92ZSIsIlBJUEVfT1BFUkFUT1JTIiwiZGV0YWlsIiwiUkFOR0VfVkVDX0ZVTkNUSU9OUyIsIkZVTkNUSU9OUyIsIkxPS0lfS0VZV09SRFMiLCJrZXl3b3JkIiwibG9raUdyYW1tYXIiLCJjb21tZW50IiwicGF0dGVybiIsImxvb2tiZWhpbmQiLCJpbnNpZGUiLCJhbGlhcyIsInB1bmN0dWF0aW9uIiwiZ3JlZWR5IiwiUmVnRXhwIiwiZiIsImZ1bmN0aW9uIiwicXVvdGUiLCJiYWNrdGlja3MiLCJudW1iZXIiLCJvcGVyYXRvciIsIlJBVEVfUkFOR0VTIiwic29ydFZhbHVlIiwiT1BFUkFUT1JTIiwiTE9HSUNBTF9PUEVSQVRPUlMiLCJUUklHT05PTUVUUklDX0ZVTkNUSU9OUyIsIlBST01fS0VZV09SRFMiLCJwcm9tcWxHcmFtbWFyIiwiaWRMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==