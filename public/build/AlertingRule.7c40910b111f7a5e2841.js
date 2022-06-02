"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[4679],{

 "./public/app/features/alerting/unified/RuleViewer.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "RuleViewer": () => ( RuleViewer),
  "default": () => ( unified_RuleViewer)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var useObservable = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var AlertLabels = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
var DetailsField = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
var RuleViewerLayout = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx");
var index_esm = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var guards = __webpack_require__("./public/app/features/expressions/guards.ts");
var types = __webpack_require__("./public/app/types/index.ts");
var constants = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
var Authorize = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
var PanelPluginsButtonGroup = __webpack_require__("./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
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
  const defaultPanel = (0,guards.j)(query.model) ? constants.Fe : constants.GC;
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
    return (0,jsx_runtime.jsxs)("div", {
      className: styles.content,
      children: [_Alert || (_Alert = (0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
        title: "Could not find datasource for query"
      })), (0,jsx_runtime.jsx)(grafana_ui_src.CodeEditor, {
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

  return (0,jsx_runtime.jsx)("div", {
    className: styles.content,
    children: (0,jsx_runtime.jsx)(index_esm.Z, {
      children: _ref => {
        let {
          width,
          height
        } = _ref;
        return (0,jsx_runtime.jsxs)("div", {
          style: {
            width,
            height
          },
          children: [(0,jsx_runtime.jsxs)("div", {
            className: styles.header,
            children: [(0,jsx_runtime.jsxs)("div", {
              children: [`Query ${query.refId}`, (0,jsx_runtime.jsxs)("span", {
                className: styles.dataSource,
                children: ["(", dsSettings.name, ")"]
              })]
            }), (0,jsx_runtime.jsxs)("div", {
              className: styles.actions,
              children: [!(0,guards.j)(query.model) && relativeTimeRange ? (0,jsx_runtime.jsx)(grafana_ui_src.DateTimePicker, {
                date: setDateTime(relativeTimeRange.to),
                onChange: onTimeChange,
                maxDate: new Date()
              }) : null, _PanelPluginsButtonGr || (_PanelPluginsButtonGr = (0,jsx_runtime.jsx)(PanelPluginsButtonGroup.j, {
                onChange: setPanel,
                value: panel,
                size: "md"
              })), (0,jsx_runtime.jsx)(Authorize.q, {
                actions: [types.bW.DataSourcesExplore],
                children: !(0,guards.j)(query.model) && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                  children: [(0,jsx_runtime.jsx)("div", {
                    className: styles.spacing
                  }), (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
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
          }), (0,jsx_runtime.jsx)(grafana_runtime_src.PanelRenderer, {
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
var RuleDetailsActionButtons = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx");
var RuleDetailsAnnotations = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx");
var RuleDetailsDataSources = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx");
var RuleDetailsExpression = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx");
;





const RuleDetailsFederatedSources = _ref => {
  var _group$source_tenants;

  let {
    group
  } = _ref;
  const sourceTenants = (_group$source_tenants = group.source_tenants) !== null && _group$source_tenants !== void 0 ? _group$source_tenants : [];
  return (0,jsx_runtime.jsx)(DetailsField.C, {
    label: "Tenant sources",
    children: (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: sourceTenants.map(tenant => (0,jsx_runtime.jsx)("div", {
        children: tenant
      }, tenant))
    })
  });
};


var RuleDetailsMatchingInstances = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx");
var RuleHealth = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleHealth.tsx");
var RuleState = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleState.tsx");
var useAlertQueriesStatus = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts");
var useCombinedRule = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRule.ts");
var AlertingQueryRunner = __webpack_require__("./public/app/features/alerting/unified/state/AlertingQueryRunner.ts");
var datasource = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
var rules = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
;


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

  if ((0,datasource.HY)(rulesSource)) {
    if ((0,rules.Pc)(rulerRule)) {
      return rulerRule.grafana_alert.data;
    }
  }

  if ((0,datasource.jq)(rulesSource)) {
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
var rule_id = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
;
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
  const identifier = rule_id.OA(id, true);
  const {
    loading,
    error,
    result: rule
  } = (0,useCombinedRule.H)(identifier, sourceName);
  const runner = (0,react.useMemo)(() => new AlertingQueryRunner.v(), []);
  const data = (0,useObservable.Z)(runner.get());
  const queries2 = (0,react.useMemo)(() => alertRuleToQueries(rule), [rule]);
  const [queries, setQueries] = (0,react.useState)([]);
  const {
    allDataSourcesAvailable
  } = (0,useAlertQueriesStatus.S)(queries2);
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
    return (0,jsx_runtime.jsx)(RuleViewerLayout.$, {
      title: pageTitle,
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
        title: errorTitle,
        children: (0,jsx_runtime.jsx)("details", {
          className: styles.errorMessage,
          children: errorMessage
        })
      })
    });
  }

  const rulesSource = (0,datasource.o_)(sourceName);

  if (loading) {
    return _RuleViewerLayout || (_RuleViewerLayout = (0,jsx_runtime.jsx)(RuleViewerLayout.$, {
      title: pageTitle,
      children: (0,jsx_runtime.jsx)(grafana_ui_src.LoadingPlaceholder, {
        text: "Loading rule..."
      })
    }));
  }

  if (error || !rulesSource) {
    var _error$message;

    return (0,jsx_runtime.jsx)(RuleViewerLayout.$, {
      title: pageTitle,
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
        title: errorTitle,
        children: (0,jsx_runtime.jsxs)("details", {
          className: styles.errorMessage,
          children: [(_error$message = error === null || error === void 0 ? void 0 : error.message) !== null && _error$message !== void 0 ? _error$message : errorMessage, _br || (_br = (0,jsx_runtime.jsx)("br", {})), !!(error !== null && error !== void 0 && error.stack) && error.stack]
        })
      })
    });
  }

  if (!rule) {
    return _RuleViewerLayout2 || (_RuleViewerLayout2 = (0,jsx_runtime.jsx)(RuleViewerLayout.$, {
      title: pageTitle,
      children: (0,jsx_runtime.jsx)("span", {
        children: "Rule could not be found."
      })
    }));
  }

  const annotations = Object.entries(rule.annotations).filter(_ref2 => {
    let [_, value] = _ref2;
    return !!value.trim();
  });
  const isFederatedRule = (0,rules.Jq)(rule.group);
  return (0,jsx_runtime.jsxs)(RuleViewerLayout.$, {
    wrapInContent: false,
    title: pageTitle,
    children: [isFederatedRule && (RuleViewer_Alert || (RuleViewer_Alert = (0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      severity: "info",
      title: "This rule is part of a federated rule group.",
      children: (0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
        children: ["Federated rule groups are currently an experimental feature.", (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          fill: "text",
          icon: "book",
          children: (0,jsx_runtime.jsx)("a", {
            href: "https://grafana.com/docs/metrics-enterprise/latest/tenant-management/tenant-federation/#cross-tenant-alerting-and-recording-rule-federation",
            children: "Read documentation"
          })
        })]
      })
    }))), (0,jsx_runtime.jsxs)(RuleViewerLayout.l, {
      children: [(0,jsx_runtime.jsxs)("div", {
        children: [(0,jsx_runtime.jsxs)("h4", {
          children: [_Icon || (_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            name: "bell",
            size: "lg"
          })), " ", rule.name]
        }), (0,jsx_runtime.jsx)(RuleState.p, {
          rule: rule,
          isCreating: false,
          isDeleting: false
        }), (0,jsx_runtime.jsx)(RuleDetailsActionButtons.f, {
          rule: rule,
          rulesSource: rulesSource
        })]
      }), (0,jsx_runtime.jsxs)("div", {
        className: styles.details,
        children: [(0,jsx_runtime.jsxs)("div", {
          className: styles.leftSide,
          children: [rule.promRule && (0,jsx_runtime.jsx)(DetailsField.C, {
            label: "Health",
            horizontal: true,
            children: (0,jsx_runtime.jsx)(RuleHealth.V, {
              rule: rule.promRule
            })
          }), !!rule.labels && !!Object.keys(rule.labels).length && (0,jsx_runtime.jsx)(DetailsField.C, {
            label: "Labels",
            horizontal: true,
            children: (0,jsx_runtime.jsx)(AlertLabels.s, {
              labels: rule.labels
            })
          }), (0,jsx_runtime.jsx)(RuleDetailsExpression.C, {
            rulesSource: rulesSource,
            rule: rule,
            annotations: annotations
          }), (0,jsx_runtime.jsx)(RuleDetailsAnnotations.J, {
            annotations: annotations
          })]
        }), (0,jsx_runtime.jsxs)("div", {
          className: styles.rightSide,
          children: [(0,jsx_runtime.jsx)(RuleDetailsDataSources.C, {
            rule: rule,
            rulesSource: rulesSource
          }), isFederatedRule && (0,jsx_runtime.jsx)(RuleDetailsFederatedSources, {
            group: rule.group
          }), (0,jsx_runtime.jsx)(DetailsField.C, {
            label: "Namespace / Group",
            children: `${rule.namespace.name} / ${rule.group.name}`
          })]
        })]
      }), (0,jsx_runtime.jsx)("div", {
        children: (0,jsx_runtime.jsx)(RuleDetailsMatchingInstances.M, {
          promRule: rule.promRule
        })
      })]
    }), !isFederatedRule && data && Object.keys(data).length > 0 && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsxs)("div", {
        className: styles.queriesTitle,
        children: ["Query results ", (0,jsx_runtime.jsx)(grafana_ui_src.PanelChromeLoadingIndicator, {
          loading: isLoading(data),
          onCancel: () => runner.cancel()
        })]
      }), (0,jsx_runtime.jsx)(RuleViewerLayout.l, {
        padding: 0,
        children: (0,jsx_runtime.jsx)("div", {
          className: styles.queries,
          children: queries.map(query => {
            return (0,jsx_runtime.jsx)("div", {
              className: styles.query,
              children: (0,jsx_runtime.jsx)(RuleViewerVisualization, {
                query: query,
                data: data && data[query.refId],
                onChangeQuery: onChangeQuery
              })
            }, query.refId);
          })
        })
      })]
    }), !isFederatedRule && !allDataSourcesAvailable && (0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
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

 const unified_RuleViewer = ((0,grafana_ui_src.withErrorBoundary)(RuleViewer, {
  style: 'page'
}));

 }),

 "./public/app/features/alerting/unified/components/Authorize.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "q": () => ( Authorize)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/services/context_srv.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const Authorize = _ref => {
  let {
    actions,
    children,
    fallback = true
  } = _ref;

  if (actions.some(action => app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_1__ .Vt.hasAccess(action, fallback))) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: children
    });
  } else {
    return null;
  }
};

 }),

 "./public/app/features/alerting/unified/components/PanelPluginsButtonGroup.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "j": () => ( PanelPluginsButtonGroup)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function PanelPluginsButtonGroup(props) {
  const {
    value,
    onChange,
    size = 'md'
  } = props;
  const panels = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => getSupportedPanels(), []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.RadioButtonGroup, {
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
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__ .GC:
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__ .Fe:
    case _utils_constants__WEBPACK_IMPORTED_MODULE_3__ .Kd:
      return true;

    default:
      return false;
  }
}

 }),

 "./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "$": () => ( RuleViewerLayout),
   "l": () => ( RuleViewerLayoutContent)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







function RuleViewerLayout(props) {
  const {
    wrapInContent = true,
    children,
    title
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getPageStyles);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ .T, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.PageToolbar, {
      title: title,
      pageIcon: "bell",
      onGoBack: () => _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.push('/alerting/list')
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: styles.content,
      children: wrapInContent ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(RuleViewerLayoutContent, Object.assign({}, props)) : children
    })]
  });
}
function RuleViewerLayoutContent(_ref) {
  let {
    children,
    padding = 2
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getContentStyles(padding));
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
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

 }),

 "./public/app/features/alerting/unified/hooks/useAlertQueriesStatus.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "S": () => ( useAlertQueriesStatus)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");


function useAlertQueriesStatus(queries) {
  const allDataSourcesAvailable = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => queries.every(query => Boolean((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid))), [queries]);
  return {
    allDataSourcesAvailable
  };
}

 }),

 "./public/app/features/alerting/unified/hooks/useCombinedRule.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "H": () => ( useCombinedRule),
   "X": () => ( useCombinedRulesMatching)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
 var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
 var _utils_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
 var _utils_rule_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
 var _utils_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
 var _useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
 var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");









function useCombinedRule(identifier, ruleSourceName) {
  const requestState = useCombinedRulesLoader(ruleSourceName);
  const combinedRules = (0,_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__ .Zo)(ruleSourceName);
  const rule = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!identifier || !ruleSourceName || combinedRules.length === 0) {
      return;
    }

    for (const namespace of combinedRules) {
      for (const group of namespace.groups) {
        for (const rule of group.rules) {
          const id = _utils_rule_id__WEBPACK_IMPORTED_MODULE_4__ .Yd(ruleSourceName, rule);

          if (_utils_rule_id__WEBPACK_IMPORTED_MODULE_4__ .Dg(id, identifier)) {
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
  const combinedRules = (0,_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_6__ .Zo)(ruleSourceName);
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
  const promRuleRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__ ._)(state => state.promRules);
  const promRuleRequest = getRequestState(rulesSourceName, promRuleRequests);
  const rulerRuleRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__ ._)(state => state.rulerRules);
  const rulerRuleRequest = getRequestState(rulesSourceName, rulerRuleRequests);
  const {
    loading
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_8__ .Z)(async () => {
    if (!rulesSourceName) {
      return;
    }

    await dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__ .dn)({
      rulesSourceName
    }));
  }, [dispatch, rulesSourceName]);
  return {
    loading,
    error: ((_promRuleRequest$erro = promRuleRequest.error) !== null && _promRuleRequest$erro !== void 0 ? _promRuleRequest$erro : (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__ .m$)(rulerRuleRequest)) ? undefined : rulerRuleRequest.error,
    dispatched: promRuleRequest.dispatched && rulerRuleRequest.dispatched
  };
}

function getRequestState(ruleSourceName, slice) {
  if (!ruleSourceName) {
    return _utils_redux__WEBPACK_IMPORTED_MODULE_3__ .oq;
  }

  const state = slice[ruleSourceName];

  if (!state) {
    return _utils_redux__WEBPACK_IMPORTED_MODULE_3__ .oq;
  }

  return state;
}

 }),

 "./public/app/features/alerting/unified/state/AlertingQueryRunner.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "v": () => ( AlertingQueryRunner)
});

var ReplaySubject = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/ReplaySubject.js");
var of = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/observable/of.js");
var catchError = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
var share = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/share.js");
var map = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/map.js");
var v4 = __webpack_require__("./.yarn/cache/uuid-npm-8.3.2-eca0baba53-5575a8a75c.zip/node_modules/uuid/dist/esm-browser/v4.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
var guards = __webpack_require__("./public/app/features/expressions/guards.ts");
var canceler = __webpack_require__("./public/app/features/query/state/processing/canceler.ts");
var revision = __webpack_require__("./public/app/features/query/state/processing/revision.ts");
var runRequest = __webpack_require__("./public/app/features/query/state/runRequest.ts");
var types = __webpack_require__("./public/app/features/expressions/types.ts");
;

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
    case types.Us.classic:
      return getReferencedIdsForClassicCondition(model);

    case types.Us.math:
      return getReferencedIdsForMath(model, queries);

    case types.Us.resample:
    case types.Us.reduce:
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
  return queries 
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
;
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class AlertingQueryRunner {
  constructor() {
    let backendSrv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,backend_srv.i)();
    let dataSourceSrv = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0,grafana_runtime_src.getDataSourceSrv)();
    this.backendSrv = backendSrv;
    this.dataSourceSrv = dataSourceSrv;

    _defineProperty(this, "subject", void 0);

    _defineProperty(this, "subscription", void 0);

    _defineProperty(this, "lastResult", void 0);

    this.backendSrv = backendSrv;
    this.dataSourceSrv = dataSourceSrv;
    this.subject = new ReplaySubject.t(1);
    this.lastResult = {};
  }

  get() {
    return this.subject.asObservable();
  }

  async run(queries) {
    if (queries.length === 0) {
      const empty = initialState(queries, src.LoadingState.Done);
      return this.subject.next(empty);
    } 


    for (const query of queries) {
      if (!(0,guards.j)(query.model)) {
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
          const preProcessed = (0,runRequest.zR)(data, previous);
          return (0,revision.C)(preProcessed, previous);
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
    requestId: (0,v4.Z)()
  };
  return (0,src.withLoadingIndicator)({
    whileLoading: initial,
    source: backendSrv.fetch(request).pipe(mapToPanelData(initial), (0,catchError.K)(error => (0,of.of)(mapErrorToPanelData(initial, error))), (0,canceler.V)(backendSrv, request.requestId), (0,share.B)())
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
  if ((0,guards.j)(query.model)) {
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
  return (0,map.U)(response => {
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

 }),

 "./public/app/features/expressions/guards.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "j": () => ( isExpressionQuery)
 });
 var _grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
 var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/expressions/types.ts");


const isExpressionQuery = dataQuery => {
  if (!dataQuery) {
    return false;
  }

  if ((0,_grafana_runtime_src_utils_DataSourceWithBackend__WEBPACK_IMPORTED_MODULE_0__ .Pr)(dataQuery.datasource)) {
    return true;
  }

  const expression = dataQuery;

  if (typeof expression.type !== 'string') {
    return false;
  }

  return Object.values(_types__WEBPACK_IMPORTED_MODULE_1__ .Us).includes(expression.type);
};

 }),

 "./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useObservable.js":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useIsomorphicLayoutEffect.js");


function useObservable(observable$, initialValue) {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue), value = _a[0], update = _a[1];
    (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ .Z)(function () {
        var s = observable$.subscribe(update);
        return function () { return s.unsubscribe(); };
    }, [observable$]);
    return value;
}
 const __WEBPACK_DEFAULT_EXPORT__ = (useObservable);


 })

}]);