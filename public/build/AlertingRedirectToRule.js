"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingRedirectToRule"],{

/***/ "./public/app/features/alerting/unified/RedirectToRuleViewer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirectToRuleViewer": () => (/* binding */ RedirectToRuleViewer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _components_AlertLabels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
/* harmony import */ var _components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/RuleViewerLayout.tsx");
/* harmony import */ var _hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRule.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _br, _RuleViewerLayout, _Redirect, _Icon;












const pageTitle = 'Alerting / Find rule';
function RedirectToRuleViewer(props) {
  const {
    name,
    sourceName
  } = props.match.params;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  const {
    error,
    loading,
    result: rules,
    dispatched
  } = (0,_hooks_useCombinedRule__WEBPACK_IMPORTED_MODULE_5__.useCombinedRulesMatching)(name, sourceName);

  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_4__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        title: `Failed to load rules from ${sourceName}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("details", {
          className: styles.errorMessage,
          children: [error.message, _br || (_br = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {})), !!(error !== null && error !== void 0 && error.stack) && error.stack]
        })
      })
    });
  }

  if (loading || !dispatched || !Array.isArray(rules)) {
    return _RuleViewerLayout || (_RuleViewerLayout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_4__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
        text: "Loading rule..."
      })
    }));
  }

  if (!name || !sourceName) {
    return _Redirect || (_Redirect = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Redirect, {
      to: "/notfound"
    }));
  }

  const rulesSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_6__.getRulesSourceByName)(sourceName);

  if (!rulesSource) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_4__.RuleViewerLayout, {
      title: pageTitle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
        title: "Could not view rule",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("details", {
          className: styles.errorMessage,
          children: `Could not find data source with name: ${sourceName}.`
        })
      })
    });
  }

  if (rules.length === 1) {
    const [rule] = rules;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Redirect, {
      to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_7__.createViewLink)(rulesSource, rule, '/alerting/list')
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_components_rule_viewer_RuleViewerLayout__WEBPACK_IMPORTED_MODULE_4__.RuleViewerLayout, {
    title: pageTitle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      children: ["Several rules in ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: styles.param,
        children: sourceName
      }), " matched the name", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
        className: styles.param,
        children: name
      }), ", please select the rule you want to view."]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: styles.rules,
      children: rules.map((rule, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_7__.createViewLink)(rulesSource, rule, '/alerting/list'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Heading, {
            children: rule.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
            separator: '',
            children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
              name: "folder"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              className: styles.namespace,
              children: `${rule.namespace.name} / ${rule.group.name}`
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Tags, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_AlertLabels__WEBPACK_IMPORTED_MODULE_3__.AlertLabels, {
              labels: rule.labels
            })
          })]
        }, `${rule.name}-${index}`);
      })
    })]
  });
}

function getStyles(theme) {
  return {
    param: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      font-style: italic;
      color: ${theme.colors.text.secondary};
    `,
    rules: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing(2)};
    `,
    namespace: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing(1)};
    `,
    errorMessage: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      white-space: pre-wrap;
    `
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.withErrorBoundary)(RedirectToRuleViewer, {
  style: 'page'
}));

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOUcsTUFGQSxFQUdiOEcsWUFBWSxDQUFDUCxXQUhBLENBQWYsTUFLQVMsSUFBSSxDQUFDQyxTQUFMLENBQWUsQ0FDYkYsVUFBVSxHQUFHRyxTQUFTLENBQUN4SCxJQUFJLENBQUM0RyxLQUFOLENBQVosR0FBMkIsRUFEeEIsRUFFYjVHLElBQUksQ0FBQ00sTUFBTCxJQUFlLEVBRkYsRUFHYmlFLDREQUFjLENBQUN2RSxJQUFELENBQWQsR0FBdUJBLElBQUksQ0FBQzZHLFdBQUwsSUFBb0IsRUFBM0MsR0FBZ0QsRUFIbkMsQ0FBZixDQU5GO0FBWUQ7O0FBQ0QsU0FBTyxLQUFQO0FBQ0QsRUFFRDs7O0FBQ0EsU0FBU1csU0FBVCxDQUFtQlosS0FBbkIsRUFBa0M7QUFDaEM7QUFDQSxNQUFJQSxLQUFLLENBQUM3RyxNQUFOLEdBQWUsQ0FBZixJQUFvQjZHLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYSxHQUFqQyxJQUF3Q0EsS0FBSyxDQUFDQSxLQUFLLENBQUM3RyxNQUFOLEdBQWUsQ0FBaEIsQ0FBTCxLQUE0QixHQUF4RSxFQUE2RTtBQUMzRTZHLElBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDMUMsS0FBTixDQUFZLENBQVosRUFBZSxDQUFDLENBQWhCLENBQVI7QUFDRCxHQUorQixDQUtoQzs7O0FBQ0EwQyxFQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ2EsT0FBTixDQUFjLFFBQWQsRUFBd0IsRUFBeEIsQ0FBUixDQU5nQyxDQU9oQzs7QUFDQSxTQUFPYixLQUFLLENBQUNjLEtBQU4sQ0FBWSxFQUFaLEVBQWdCNUIsSUFBaEIsR0FBdUI2QixJQUF2QixDQUE0QixFQUE1QixDQUFQO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL1JlZGlyZWN0VG9SdWxlVmlld2VyLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2NvbXBvbmVudHMvcnVsZS12aWV3ZXIvUnVsZVZpZXdlckxheW91dC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VDb21iaW5lZFJ1bGUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lMiB9IGZyb20gJ0BncmFmYW5hL2RhdGEnO1xuaW1wb3J0IHsgQWxlcnQsIENhcmQsIEljb24sIExvYWRpbmdQbGFjZWhvbGRlciwgdXNlU3R5bGVzMiwgd2l0aEVycm9yQm91bmRhcnkgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ2FwcC9jb3JlL25hdmlnYXRpb24vdHlwZXMnO1xuXG5pbXBvcnQgeyBBbGVydExhYmVscyB9IGZyb20gJy4vY29tcG9uZW50cy9BbGVydExhYmVscyc7XG5pbXBvcnQgeyBSdWxlVmlld2VyTGF5b3V0IH0gZnJvbSAnLi9jb21wb25lbnRzL3J1bGUtdmlld2VyL1J1bGVWaWV3ZXJMYXlvdXQnO1xuaW1wb3J0IHsgdXNlQ29tYmluZWRSdWxlc01hdGNoaW5nIH0gZnJvbSAnLi9ob29rcy91c2VDb21iaW5lZFJ1bGUnO1xuaW1wb3J0IHsgZ2V0UnVsZXNTb3VyY2VCeU5hbWUgfSBmcm9tICcuL3V0aWxzL2RhdGFzb3VyY2UnO1xuaW1wb3J0IHsgY3JlYXRlVmlld0xpbmsgfSBmcm9tICcuL3V0aWxzL21pc2MnO1xuXG50eXBlIFJlZGlyZWN0VG9SdWxlVmlld2VyUHJvcHMgPSBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7IG5hbWU/OiBzdHJpbmc7IHNvdXJjZU5hbWU/OiBzdHJpbmcgfT47XG5jb25zdCBwYWdlVGl0bGUgPSAnQWxlcnRpbmcgLyBGaW5kIHJ1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gUmVkaXJlY3RUb1J1bGVWaWV3ZXIocHJvcHM6IFJlZGlyZWN0VG9SdWxlVmlld2VyUHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCB7IG5hbWUsIHNvdXJjZU5hbWUgfSA9IHByb3BzLm1hdGNoLnBhcmFtcztcbiAgY29uc3Qgc3R5bGVzID0gdXNlU3R5bGVzMihnZXRTdHlsZXMpO1xuICBjb25zdCB7IGVycm9yLCBsb2FkaW5nLCByZXN1bHQ6IHJ1bGVzLCBkaXNwYXRjaGVkIH0gPSB1c2VDb21iaW5lZFJ1bGVzTWF0Y2hpbmcobmFtZSwgc291cmNlTmFtZSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSdWxlVmlld2VyTGF5b3V0IHRpdGxlPXtwYWdlVGl0bGV9PlxuICAgICAgICA8QWxlcnQgdGl0bGU9e2BGYWlsZWQgdG8gbG9hZCBydWxlcyBmcm9tICR7c291cmNlTmFtZX1gfT5cbiAgICAgICAgICA8ZGV0YWlscyBjbGFzc05hbWU9e3N0eWxlcy5lcnJvck1lc3NhZ2V9PlxuICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2V9XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHshIWVycm9yPy5zdGFjayAmJiBlcnJvci5zdGFja31cbiAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICA8L1J1bGVWaWV3ZXJMYXlvdXQ+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChsb2FkaW5nIHx8ICFkaXNwYXRjaGVkIHx8ICFBcnJheS5pc0FycmF5KHJ1bGVzKSkge1xuICAgIHJldHVybiAoXG4gICAgICA8UnVsZVZpZXdlckxheW91dCB0aXRsZT17cGFnZVRpdGxlfT5cbiAgICAgICAgPExvYWRpbmdQbGFjZWhvbGRlciB0ZXh0PVwiTG9hZGluZyBydWxlLi4uXCIgLz5cbiAgICAgIDwvUnVsZVZpZXdlckxheW91dD5cbiAgICApO1xuICB9XG5cbiAgaWYgKCFuYW1lIHx8ICFzb3VyY2VOYW1lKSB7XG4gICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9ub3Rmb3VuZFwiIC8+O1xuICB9XG5cbiAgY29uc3QgcnVsZXNTb3VyY2UgPSBnZXRSdWxlc1NvdXJjZUJ5TmFtZShzb3VyY2VOYW1lKTtcblxuICBpZiAoIXJ1bGVzU291cmNlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSdWxlVmlld2VyTGF5b3V0IHRpdGxlPXtwYWdlVGl0bGV9PlxuICAgICAgICA8QWxlcnQgdGl0bGU9XCJDb3VsZCBub3QgdmlldyBydWxlXCI+XG4gICAgICAgICAgPGRldGFpbHMgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JNZXNzYWdlfT57YENvdWxkIG5vdCBmaW5kIGRhdGEgc291cmNlIHdpdGggbmFtZTogJHtzb3VyY2VOYW1lfS5gfTwvZGV0YWlscz5cbiAgICAgICAgPC9BbGVydD5cbiAgICAgIDwvUnVsZVZpZXdlckxheW91dD5cbiAgICApO1xuICB9XG5cbiAgaWYgKHJ1bGVzLmxlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IFtydWxlXSA9IHJ1bGVzO1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89e2NyZWF0ZVZpZXdMaW5rKHJ1bGVzU291cmNlLCBydWxlLCAnL2FsZXJ0aW5nL2xpc3QnKX0gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSdWxlVmlld2VyTGF5b3V0IHRpdGxlPXtwYWdlVGl0bGV9PlxuICAgICAgPGRpdj5cbiAgICAgICAgU2V2ZXJhbCBydWxlcyBpbiA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wYXJhbX0+e3NvdXJjZU5hbWV9PC9zcGFuPiBtYXRjaGVkIHRoZSBuYW1leycgJ31cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucGFyYW19PntuYW1lfTwvc3Bhbj4sIHBsZWFzZSBzZWxlY3QgdGhlIHJ1bGUgeW91IHdhbnQgdG8gdmlldy5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ydWxlc30+XG4gICAgICAgIHtydWxlcy5tYXAoKHJ1bGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXJkIGtleT17YCR7cnVsZS5uYW1lfS0ke2luZGV4fWB9IGhyZWY9e2NyZWF0ZVZpZXdMaW5rKHJ1bGVzU291cmNlLCBydWxlLCAnL2FsZXJ0aW5nL2xpc3QnKX0+XG4gICAgICAgICAgICAgIDxDYXJkLkhlYWRpbmc+e3J1bGUubmFtZX08L0NhcmQuSGVhZGluZz5cbiAgICAgICAgICAgICAgPENhcmQuTWV0YSBzZXBhcmF0b3I9eycnfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiZm9sZGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lc3BhY2V9PntgJHtydWxlLm5hbWVzcGFjZS5uYW1lfSAvICR7cnVsZS5ncm91cC5uYW1lfWB9PC9zcGFuPlxuICAgICAgICAgICAgICA8L0NhcmQuTWV0YT5cbiAgICAgICAgICAgICAgPENhcmQuVGFncz5cbiAgICAgICAgICAgICAgICA8QWxlcnRMYWJlbHMgbGFiZWxzPXtydWxlLmxhYmVsc30gLz5cbiAgICAgICAgICAgICAgPC9DYXJkLlRhZ3M+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1J1bGVWaWV3ZXJMYXlvdXQ+XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyh0aGVtZTogR3JhZmFuYVRoZW1lMikge1xuICByZXR1cm4ge1xuICAgIHBhcmFtOiBjc3NgXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dC5zZWNvbmRhcnl9O1xuICAgIGAsXG4gICAgcnVsZXM6IGNzc2BcbiAgICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygyKX07XG4gICAgYCxcbiAgICBuYW1lc3BhY2U6IGNzc2BcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIGAsXG4gICAgZXJyb3JNZXNzYWdlOiBjc3NgXG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgYCxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEVycm9yQm91bmRhcnkoUmVkaXJlY3RUb1J1bGVWaWV3ZXIsIHsgc3R5bGU6ICdwYWdlJyB9KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBsb2NhdGlvblNlcnZpY2UgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IFBhZ2VUb29sYmFyLCB1c2VTdHlsZXMyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB8IFJlYWN0LlJlYWN0Tm9kZVtdO1xuICB0aXRsZTogc3RyaW5nO1xuICB3cmFwSW5Db250ZW50PzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBSdWxlVmlld2VyTGF5b3V0KHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50IHwgbnVsbCB7XG4gIGNvbnN0IHsgd3JhcEluQ29udGVudCA9IHRydWUsIGNoaWxkcmVuLCB0aXRsZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0UGFnZVN0eWxlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZT5cbiAgICAgIDxQYWdlVG9vbGJhciB0aXRsZT17dGl0bGV9IHBhZ2VJY29uPVwiYmVsbFwiIG9uR29CYWNrPXsoKSA9PiBsb2NhdGlvblNlcnZpY2UucHVzaCgnL2FsZXJ0aW5nL2xpc3QnKX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+e3dyYXBJbkNvbnRlbnQgPyA8UnVsZVZpZXdlckxheW91dENvbnRlbnQgey4uLnByb3BzfSAvPiA6IGNoaWxkcmVufTwvZGl2PlxuICAgIDwvUGFnZT5cbiAgKTtcbn1cblxudHlwZSBDb250ZW50UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfCBSZWFjdC5SZWFjdE5vZGVbXTtcbiAgcGFkZGluZz86IG51bWJlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBSdWxlVmlld2VyTGF5b3V0Q29udGVudCh7IGNoaWxkcmVuLCBwYWRkaW5nID0gMiB9OiBDb250ZW50UHJvcHMpOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldENvbnRlbnRTdHlsZXMocGFkZGluZykpO1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT57Y2hpbGRyZW59PC9kaXY+O1xufVxuXG5jb25zdCBnZXRQYWdlU3R5bGVzID0gKHRoZW1lOiBHcmFmYW5hVGhlbWUyKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29udGVudDogY3NzYFxuICAgICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMCwgMiwgMil9O1xuICAgICAgbWF4LXdpZHRoOiAke3RoZW1lLmJyZWFrcG9pbnRzLnZhbHVlcy54eGx9cHg7XG4gICAgYCxcbiAgfTtcbn07XG5cbmNvbnN0IGdldENvbnRlbnRTdHlsZXMgPSAocGFkZGluZzogbnVtYmVyKSA9PiAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB3cmFwcGVyOiBjc3NgXG4gICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLnByaW1hcnl9O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLndlYWt9O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHt0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXMoKX07XG4gICAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcocGFkZGluZyl9O1xuICAgIGAsXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlQXN5bmMgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBDb21iaW5lZFJ1bGUsIFJ1bGVJZGVudGlmaWVyLCBSdWxlTmFtZXNwYWNlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuaW1wb3J0IHsgUnVsZXJSdWxlc0NvbmZpZ0RUTyB9IGZyb20gJ2FwcC90eXBlcy91bmlmaWVkLWFsZXJ0aW5nLWR0byc7XG5cbmltcG9ydCB7IGZldGNoUHJvbUFuZFJ1bGVyUnVsZXNBY3Rpb24gfSBmcm9tICcuLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IEFzeW5jUmVxdWVzdE1hcFNsaWNlLCBBc3luY1JlcXVlc3RTdGF0ZSwgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi4vdXRpbHMvcmVkdXgnO1xuaW1wb3J0ICogYXMgcnVsZUlkIGZyb20gJy4uL3V0aWxzL3J1bGUtaWQnO1xuaW1wb3J0IHsgaXNSdWxlck5vdFN1cHBvcnRlZFJlc3BvbnNlIH0gZnJvbSAnLi4vdXRpbHMvcnVsZXMnO1xuXG5pbXBvcnQgeyB1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzIH0gZnJvbSAnLi91c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzJztcbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb21iaW5lZFJ1bGUoXG4gIGlkZW50aWZpZXI6IFJ1bGVJZGVudGlmaWVyIHwgdW5kZWZpbmVkLFxuICBydWxlU291cmNlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4pOiBBc3luY1JlcXVlc3RTdGF0ZTxDb21iaW5lZFJ1bGU+IHtcbiAgY29uc3QgcmVxdWVzdFN0YXRlID0gdXNlQ29tYmluZWRSdWxlc0xvYWRlcihydWxlU291cmNlTmFtZSk7XG4gIGNvbnN0IGNvbWJpbmVkUnVsZXMgPSB1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzKHJ1bGVTb3VyY2VOYW1lKTtcblxuICBjb25zdCBydWxlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFpZGVudGlmaWVyIHx8ICFydWxlU291cmNlTmFtZSB8fCBjb21iaW5lZFJ1bGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgbmFtZXNwYWNlIG9mIGNvbWJpbmVkUnVsZXMpIHtcbiAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgbmFtZXNwYWNlLmdyb3Vwcykge1xuICAgICAgICBmb3IgKGNvbnN0IHJ1bGUgb2YgZ3JvdXAucnVsZXMpIHtcbiAgICAgICAgICBjb25zdCBpZCA9IHJ1bGVJZC5mcm9tQ29tYmluZWRSdWxlKHJ1bGVTb3VyY2VOYW1lLCBydWxlKTtcblxuICAgICAgICAgIGlmIChydWxlSWQuZXF1YWwoaWQsIGlkZW50aWZpZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH0sIFtpZGVudGlmaWVyLCBydWxlU291cmNlTmFtZSwgY29tYmluZWRSdWxlc10pO1xuXG4gIHJldHVybiB7XG4gICAgLi4ucmVxdWVzdFN0YXRlLFxuICAgIHJlc3VsdDogcnVsZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbWJpbmVkUnVsZXNNYXRjaGluZyhcbiAgcnVsZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgcnVsZVNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogQXN5bmNSZXF1ZXN0U3RhdGU8Q29tYmluZWRSdWxlW10+IHtcbiAgY29uc3QgcmVxdWVzdFN0YXRlID0gdXNlQ29tYmluZWRSdWxlc0xvYWRlcihydWxlU291cmNlTmFtZSk7XG4gIGNvbnN0IGNvbWJpbmVkUnVsZXMgPSB1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzKHJ1bGVTb3VyY2VOYW1lKTtcblxuICBjb25zdCBydWxlcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghcnVsZU5hbWUgfHwgIXJ1bGVTb3VyY2VOYW1lIHx8IGNvbWJpbmVkUnVsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgcnVsZXM6IENvbWJpbmVkUnVsZVtdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IG5hbWVzcGFjZSBvZiBjb21iaW5lZFJ1bGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIG5hbWVzcGFjZS5ncm91cHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBydWxlIG9mIGdyb3VwLnJ1bGVzKSB7XG4gICAgICAgICAgaWYgKHJ1bGUubmFtZSA9PT0gcnVsZU5hbWUpIHtcbiAgICAgICAgICAgIHJ1bGVzLnB1c2gocnVsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9LCBbcnVsZU5hbWUsIHJ1bGVTb3VyY2VOYW1lLCBjb21iaW5lZFJ1bGVzXSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5yZXF1ZXN0U3RhdGUsXG4gICAgcmVzdWx0OiBydWxlcyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlQ29tYmluZWRSdWxlc0xvYWRlcihydWxlc1NvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IEFzeW5jUmVxdWVzdFN0YXRlPHZvaWQ+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBwcm9tUnVsZVJlcXVlc3RzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9tUnVsZXMpO1xuICBjb25zdCBwcm9tUnVsZVJlcXVlc3QgPSBnZXRSZXF1ZXN0U3RhdGUocnVsZXNTb3VyY2VOYW1lLCBwcm9tUnVsZVJlcXVlc3RzKTtcbiAgY29uc3QgcnVsZXJSdWxlUmVxdWVzdHMgPSB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJ1bGVyUnVsZXMpO1xuICBjb25zdCBydWxlclJ1bGVSZXF1ZXN0ID0gZ2V0UmVxdWVzdFN0YXRlKHJ1bGVzU291cmNlTmFtZSwgcnVsZXJSdWxlUmVxdWVzdHMpO1xuXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXN5bmMoYXN5bmMgKCkgPT4ge1xuICAgIGlmICghcnVsZXNTb3VyY2VOYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXdhaXQgZGlzcGF0Y2goZmV0Y2hQcm9tQW5kUnVsZXJSdWxlc0FjdGlvbih7IHJ1bGVzU291cmNlTmFtZSB9KSk7XG4gIH0sIFtkaXNwYXRjaCwgcnVsZXNTb3VyY2VOYW1lXSk7XG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkaW5nLFxuICAgIGVycm9yOiBwcm9tUnVsZVJlcXVlc3QuZXJyb3IgPz8gaXNSdWxlck5vdFN1cHBvcnRlZFJlc3BvbnNlKHJ1bGVyUnVsZVJlcXVlc3QpID8gdW5kZWZpbmVkIDogcnVsZXJSdWxlUmVxdWVzdC5lcnJvcixcbiAgICBkaXNwYXRjaGVkOiBwcm9tUnVsZVJlcXVlc3QuZGlzcGF0Y2hlZCAmJiBydWxlclJ1bGVSZXF1ZXN0LmRpc3BhdGNoZWQsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFJlcXVlc3RTdGF0ZShcbiAgcnVsZVNvdXJjZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgc2xpY2U6IEFzeW5jUmVxdWVzdE1hcFNsaWNlPFJ1bGVyUnVsZXNDb25maWdEVE8gfCBSdWxlTmFtZXNwYWNlW10gfCBudWxsPlxuKTogQXN5bmNSZXF1ZXN0U3RhdGU8UnVsZXJSdWxlc0NvbmZpZ0RUTyB8IFJ1bGVOYW1lc3BhY2VbXSB8IG51bGw+IHtcbiAgaWYgKCFydWxlU291cmNlTmFtZSkge1xuICAgIHJldHVybiBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG4gIH1cblxuICBjb25zdCBzdGF0ZSA9IHNsaWNlW3J1bGVTb3VyY2VOYW1lXTtcblxuICBpZiAoIXN0YXRlKSB7XG4gICAgcmV0dXJuIGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiIsImltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tYmluZWRSdWxlLFxuICBDb21iaW5lZFJ1bGVHcm91cCxcbiAgQ29tYmluZWRSdWxlTmFtZXNwYWNlLFxuICBSdWxlLFxuICBSdWxlR3JvdXAsXG4gIFJ1bGVOYW1lc3BhY2UsXG4gIFJ1bGVzU291cmNlLFxufSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBSdWxlclJ1bGVEVE8sIFJ1bGVyUnVsZUdyb3VwRFRPLCBSdWxlclJ1bGVzQ29uZmlnRFRPIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHtcbiAgZ2V0QWxsUnVsZXNTb3VyY2VzLFxuICBnZXRSdWxlc1NvdXJjZUJ5TmFtZSxcbiAgaXNDbG91ZFJ1bGVzU291cmNlLFxuICBpc0dyYWZhbmFSdWxlc1NvdXJjZSxcbn0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBpc0FsZXJ0aW5nUnVsZSwgaXNBbGVydGluZ1J1bGVyUnVsZSwgaXNSZWNvcmRpbmdSdWxlclJ1bGUgfSBmcm9tICcuLi91dGlscy9ydWxlcyc7XG5cbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5cbmludGVyZmFjZSBDYWNoZVZhbHVlIHtcbiAgcHJvbVJ1bGVzPzogUnVsZU5hbWVzcGFjZVtdO1xuICBydWxlclJ1bGVzPzogUnVsZXJSdWxlc0NvbmZpZ0RUTyB8IG51bGw7XG4gIHJlc3VsdDogQ29tYmluZWRSdWxlTmFtZXNwYWNlW107XG59XG5cbi8vIHRoaXMgbGl0dGxlIG1vbnN0ZXIgY29tYmluZXMgcHJvbWV0aGV1cyBydWxlcyBhbmQgcnVsZXIgcnVsZXMgdG8gcHJvZHVjZSBhIHVuaWZpZWQgZGF0YSBzdHJ1Y3R1cmVcbi8vIGNhbiBsaW1pdCB0byBhIHNpbmdsZSBydWxlcyBzb3VyY2VcbmV4cG9ydCBmdW5jdGlvbiB1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzKHJ1bGVzU291cmNlTmFtZT86IHN0cmluZyk6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdIHtcbiAgY29uc3QgcHJvbVJ1bGVzUmVzcG9uc2VzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9tUnVsZXMpO1xuICBjb25zdCBydWxlclJ1bGVzUmVzcG9uc2VzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ydWxlclJ1bGVzKTtcblxuICAvLyBjYWNoZSByZXN1bHRzIHBlciBydWxlcyBzb3VyY2UsIHNvIHdlIG9ubHkgcmVjYWxjdWxhdGUgdGhvc2UgZm9yIHdoaWNoIHJlc3VsdHMgaGF2ZSBhY3R1YWxseSBjaGFuZ2VkXG4gIGNvbnN0IGNhY2hlID0gdXNlUmVmPFJlY29yZDxzdHJpbmcsIENhY2hlVmFsdWU+Pih7fSk7XG5cbiAgY29uc3QgcnVsZXNTb3VyY2VzID0gdXNlTWVtbygoKTogUnVsZXNTb3VyY2VbXSA9PiB7XG4gICAgaWYgKHJ1bGVzU291cmNlTmFtZSkge1xuICAgICAgY29uc3QgcnVsZXNTb3VyY2UgPSBnZXRSdWxlc1NvdXJjZUJ5TmFtZShydWxlc1NvdXJjZU5hbWUpO1xuICAgICAgaWYgKCFydWxlc1NvdXJjZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gcnVsZXMgc291cmNlOiAke3J1bGVzU291cmNlTmFtZX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbcnVsZXNTb3VyY2VdO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0QWxsUnVsZXNTb3VyY2VzKCk7XG4gIH0sIFtydWxlc1NvdXJjZU5hbWVdKTtcblxuICByZXR1cm4gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgcnVsZXNTb3VyY2VzXG4gICAgICAgIC5tYXAoKHJ1bGVzU291cmNlKTogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10gPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVzU291cmNlTmFtZSA9IGlzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkgPyBydWxlc1NvdXJjZS5uYW1lIDogcnVsZXNTb3VyY2U7XG4gICAgICAgICAgY29uc3QgcHJvbVJ1bGVzID0gcHJvbVJ1bGVzUmVzcG9uc2VzW3J1bGVzU291cmNlTmFtZV0/LnJlc3VsdDtcbiAgICAgICAgICBjb25zdCBydWxlclJ1bGVzID0gcnVsZXJSdWxlc1Jlc3BvbnNlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ7XG5cbiAgICAgICAgICBjb25zdCBjYWNoZWQgPSBjYWNoZS5jdXJyZW50W3J1bGVzU291cmNlTmFtZV07XG4gICAgICAgICAgaWYgKGNhY2hlZCAmJiBjYWNoZWQucHJvbVJ1bGVzID09PSBwcm9tUnVsZXMgJiYgY2FjaGVkLnJ1bGVyUnVsZXMgPT09IHJ1bGVyUnVsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQucmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuYW1lc3BhY2VzOiBSZWNvcmQ8c3RyaW5nLCBDb21iaW5lZFJ1bGVOYW1lc3BhY2U+ID0ge307XG5cbiAgICAgICAgICAvLyBmaXJzdCBnZXQgYWxsIHRoZSBydWxlciBydWxlcyBpblxuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHJ1bGVyUnVsZXMgfHwge30pLmZvckVhY2goKFtuYW1lc3BhY2VOYW1lLCBncm91cHNdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSA9IHtcbiAgICAgICAgICAgICAgcnVsZXNTb3VyY2UsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWVzcGFjZU5hbWUsXG4gICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbmFtZXNwYWNlc1tuYW1lc3BhY2VOYW1lXSA9IG5hbWVzcGFjZTtcbiAgICAgICAgICAgIGFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2UsIGdyb3Vwcyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyB0aGVuIGNvcnJlbGF0ZSB3aXRoIHByb21ldGhldXMgcnVsZXNcbiAgICAgICAgICBwcm9tUnVsZXM/LmZvckVhY2goKHsgbmFtZTogbmFtZXNwYWNlTmFtZSwgZ3JvdXBzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5zID0gKG5hbWVzcGFjZXNbbmFtZXNwYWNlTmFtZV0gPSBuYW1lc3BhY2VzW25hbWVzcGFjZU5hbWVdIHx8IHtcbiAgICAgICAgICAgICAgcnVsZXNTb3VyY2UsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWVzcGFjZU5hbWUsXG4gICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobnMsIGdyb3Vwcyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBPYmplY3QudmFsdWVzKG5hbWVzcGFjZXMpO1xuXG4gICAgICAgICAgY2FjaGUuY3VycmVudFtydWxlc1NvdXJjZU5hbWVdID0geyBwcm9tUnVsZXMsIHJ1bGVyUnVsZXMsIHJlc3VsdCB9O1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5mbGF0KCksXG4gICAgW3Byb21SdWxlc1Jlc3BvbnNlcywgcnVsZXJSdWxlc1Jlc3BvbnNlcywgcnVsZXNTb3VyY2VzXVxuICApO1xufVxuXG4vLyBtZXJnZSBhbGwgZ3JvdXBzIGluIGNhc2Ugb2YgZ3JhZmFuYSBtYW5hZ2VkLCBlc3NlbnRpYWxseSB0cmVhdGluZyBuYW1lc3BhY2VzIChmb2xkZXJzKSBhcyBncm91cHNcbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuR3JhZmFuYU1hbmFnZWRSdWxlcyhuYW1lc3BhY2VzOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSkge1xuICByZXR1cm4gbmFtZXNwYWNlcy5tYXAoKG5hbWVzcGFjZSkgPT4ge1xuICAgIGNvbnN0IG5ld05hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlID0ge1xuICAgICAgLi4ubmFtZXNwYWNlLFxuICAgICAgZ3JvdXBzOiBbXSxcbiAgICB9O1xuXG4gICAgLy8gYWRkIGRlZmF1bHQgZ3JvdXAgd2l0aCB1bmdyb3VwZWQgcnVsZXNcbiAgICBuZXdOYW1lc3BhY2UuZ3JvdXBzLnB1c2goe1xuICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgcnVsZXM6IHNvcnRSdWxlc0J5TmFtZShuYW1lc3BhY2UuZ3JvdXBzLmZsYXRNYXAoKGdyb3VwKSA9PiBncm91cC5ydWxlcykpLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld05hbWVzcGFjZTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0UnVsZXNCeU5hbWUocnVsZXM6IENvbWJpbmVkUnVsZVtdKSB7XG4gIHJldHVybiBydWxlcy5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbn1cblxuZnVuY3Rpb24gYWRkUnVsZXJHcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLCBncm91cHM6IFJ1bGVyUnVsZUdyb3VwRFRPW10pOiB2b2lkIHtcbiAgbmFtZXNwYWNlLmdyb3VwcyA9IGdyb3Vwcy5tYXAoKGdyb3VwKSA9PiB7XG4gICAgY29uc3QgY29tYmluZWRHcm91cDogQ29tYmluZWRSdWxlR3JvdXAgPSB7XG4gICAgICBuYW1lOiBncm91cC5uYW1lLFxuICAgICAgaW50ZXJ2YWw6IGdyb3VwLmludGVydmFsLFxuICAgICAgc291cmNlX3RlbmFudHM6IGdyb3VwLnNvdXJjZV90ZW5hbnRzLFxuICAgICAgcnVsZXM6IFtdLFxuICAgIH07XG4gICAgY29tYmluZWRHcm91cC5ydWxlcyA9IGdyb3VwLnJ1bGVzLm1hcCgocnVsZSkgPT4gcnVsZXJSdWxlVG9Db21iaW5lZFJ1bGUocnVsZSwgbmFtZXNwYWNlLCBjb21iaW5lZEdyb3VwKSk7XG4gICAgcmV0dXJuIGNvbWJpbmVkR3JvdXA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9tR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSwgZ3JvdXBzOiBSdWxlR3JvdXBbXSk6IHZvaWQge1xuICBncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICBsZXQgY29tYmluZWRHcm91cCA9IG5hbWVzcGFjZS5ncm91cHMuZmluZCgoZykgPT4gZy5uYW1lID09PSBncm91cC5uYW1lKTtcbiAgICBpZiAoIWNvbWJpbmVkR3JvdXApIHtcbiAgICAgIGNvbWJpbmVkR3JvdXAgPSB7XG4gICAgICAgIG5hbWU6IGdyb3VwLm5hbWUsXG4gICAgICAgIHJ1bGVzOiBbXSxcbiAgICAgIH07XG4gICAgICBuYW1lc3BhY2UuZ3JvdXBzLnB1c2goY29tYmluZWRHcm91cCk7XG4gICAgfVxuXG4gICAgKGdyb3VwLnJ1bGVzID8/IFtdKS5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZ1J1bGUgPSBnZXRFeGlzdGluZ1J1bGVJbkdyb3VwKHJ1bGUsIGNvbWJpbmVkR3JvdXAhLCBuYW1lc3BhY2UucnVsZXNTb3VyY2UpO1xuICAgICAgaWYgKGV4aXN0aW5nUnVsZSkge1xuICAgICAgICBleGlzdGluZ1J1bGUucHJvbVJ1bGUgPSBydWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tYmluZWRHcm91cCEucnVsZXMucHVzaChwcm9tUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGUsIG5hbWVzcGFjZSwgY29tYmluZWRHcm91cCEpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByb21SdWxlVG9Db21iaW5lZFJ1bGUocnVsZTogUnVsZSwgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cCk6IENvbWJpbmVkUnVsZSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogcnVsZS5uYW1lLFxuICAgIHF1ZXJ5OiBydWxlLnF1ZXJ5LFxuICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgYW5ub3RhdGlvbnM6IGlzQWxlcnRpbmdSdWxlKHJ1bGUpID8gcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSA6IHt9LFxuICAgIHByb21SdWxlOiBydWxlLFxuICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlLFxuICAgIGdyb3VwLFxuICB9O1xufVxuXG5mdW5jdGlvbiBydWxlclJ1bGVUb0NvbWJpbmVkUnVsZShcbiAgcnVsZTogUnVsZXJSdWxlRFRPLFxuICBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSxcbiAgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwXG4pOiBDb21iaW5lZFJ1bGUge1xuICByZXR1cm4gaXNBbGVydGluZ1J1bGVyUnVsZShydWxlKVxuICAgID8ge1xuICAgICAgICBuYW1lOiBydWxlLmFsZXJ0LFxuICAgICAgICBxdWVyeTogcnVsZS5leHByLFxuICAgICAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBhbm5vdGF0aW9uczogcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSxcbiAgICAgICAgcnVsZXJSdWxlOiBydWxlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIGdyb3VwLFxuICAgICAgfVxuICAgIDogaXNSZWNvcmRpbmdSdWxlclJ1bGUocnVsZSlcbiAgICA/IHtcbiAgICAgICAgbmFtZTogcnVsZS5yZWNvcmQsXG4gICAgICAgIHF1ZXJ5OiBydWxlLmV4cHIsXG4gICAgICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGFubm90YXRpb25zOiB7fSxcbiAgICAgICAgcnVsZXJSdWxlOiBydWxlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIGdyb3VwLFxuICAgICAgfVxuICAgIDoge1xuICAgICAgICBuYW1lOiBydWxlLmdyYWZhbmFfYWxlcnQudGl0bGUsXG4gICAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH07XG59XG5cbi8vIGZpbmQgZXhpc3RpbmcgcnVsZSBpbiBncm91cCB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuIHByb20gcnVsZVxuZnVuY3Rpb24gZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cChcbiAgcnVsZTogUnVsZSxcbiAgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwLFxuICBydWxlc1NvdXJjZTogUnVsZXNTb3VyY2Vcbik6IENvbWJpbmVkUnVsZSB8IHVuZGVmaW5lZCB7XG4gIGlmIChpc0dyYWZhbmFSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkpIHtcbiAgICAvLyBhc3N1bWUgZ3JhZmFuYSBncm91cHMgaGF2ZSBvbmx5IHRoZSBvbmUgcnVsZS4gY2hlY2sgbmFtZSBhbnl3YXkgYmVjYXVzZSBwYXJhbm9pZFxuICAgIHJldHVybiBncm91cCEucnVsZXMuZmluZCgoZXhpc3RpbmdSdWxlKSA9PiBleGlzdGluZ1J1bGUubmFtZSA9PT0gcnVsZS5uYW1lKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIC8vIHRyeSBmaW5kaW5nIGEgcnVsZSB0aGF0IG1hdGNoZXMgbmFtZSwgbGFiZWxzLCBhbm5vdGF0aW9ucyBhbmQgcXVlcnlcbiAgICBncm91cCEucnVsZXMuZmluZChcbiAgICAgIChleGlzdGluZ1J1bGUpID0+ICFleGlzdGluZ1J1bGUucHJvbVJ1bGUgJiYgaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUoZXhpc3RpbmdSdWxlLCBydWxlLCB0cnVlKVxuICAgICkgPz9cbiAgICAvLyBpZiB0aGF0IGZhaWxzLCB0cnkgZmluZGluZyBhIHJ1bGUgdGhhdCBvbmx5IG1hdGNoZXMgbmFtZSwgbGFiZWxzIGFuZCBhbm5vdGF0aW9ucy5cbiAgICAvLyBsb2tpICYgcHJvbSBjYW4gc29tZXRpbWVzIG1vZGlmeSB0aGUgcXVlcnkgc28gaXQgZG9lc250IG1hdGNoLCBlZyBgMiA+IDFgIGJlY29tZXMgYDFgXG4gICAgZ3JvdXAhLnJ1bGVzLmZpbmQoXG4gICAgICAoZXhpc3RpbmdSdWxlKSA9PiAhZXhpc3RpbmdSdWxlLnByb21SdWxlICYmIGlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlKGV4aXN0aW5nUnVsZSwgcnVsZSwgZmFsc2UpXG4gICAgKVxuICApO1xufVxuXG5mdW5jdGlvbiBpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZShjb21iaW5lZFJ1bGU6IENvbWJpbmVkUnVsZSwgcnVsZTogUnVsZSwgY2hlY2tRdWVyeSA9IHRydWUpOiBib29sZWFuIHtcbiAgaWYgKGNvbWJpbmVkUnVsZS5uYW1lID09PSBydWxlLm5hbWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICBjaGVja1F1ZXJ5ID8gaGFzaFF1ZXJ5KGNvbWJpbmVkUnVsZS5xdWVyeSkgOiAnJyxcbiAgICAgICAgY29tYmluZWRSdWxlLmxhYmVscyxcbiAgICAgICAgY29tYmluZWRSdWxlLmFubm90YXRpb25zLFxuICAgICAgXSkgPT09XG4gICAgICBKU09OLnN0cmluZ2lmeShbXG4gICAgICAgIGNoZWNrUXVlcnkgPyBoYXNoUXVlcnkocnVsZS5xdWVyeSkgOiAnJyxcbiAgICAgICAgcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGlzQWxlcnRpbmdSdWxlKHJ1bGUpID8gcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSA6IHt9LFxuICAgICAgXSlcbiAgICApO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gdGhlcmUgY2FuIGJlIHNsaWdodCBkaWZmZXJlbmNlcyBpbiBob3cgcHJvbSAmIHJ1bGVyIHJlbmRlciBhIHF1ZXJ5LCB0aGlzIHdpbGwgaGFzaCB0aGVtIGFjY291bnRpbmcgZm9yIHRoZSBkaWZmZXJlbmNlc1xuZnVuY3Rpb24gaGFzaFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpIHtcbiAgLy8gb25lIG9mIHRoZW0gbWlnaHQgYmUgd3JhcHBlZCBpbiBwYXJlbnNcbiAgaWYgKHF1ZXJ5Lmxlbmd0aCA+IDEgJiYgcXVlcnlbMF0gPT09ICcoJyAmJiBxdWVyeVtxdWVyeS5sZW5ndGggLSAxXSA9PT0gJyknKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5zbGljZSgxLCAtMSk7XG4gIH1cbiAgLy8gd2hpdGVzcGFjZSBjb3VsZCBiZSBhZGRlZCBvciByZW1vdmVkXG4gIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgvXFxzfFxcbi9nLCAnJyk7XG4gIC8vIGxhYmVscyBtYXRjaGVycyBjYW4gYmUgcmVvcmRlcmVkLCBzbyBzb3J0IHRoZSBlbml0cmUgc3RyaW5nLCBlc2VudGlhbGx5IGNvbXBhcmluZyBqdXN0IHRoZSBjaGFyYWN0ZXIgY291bnRzXG4gIHJldHVybiBxdWVyeS5zcGxpdCgnJykuc29ydCgpLmpvaW4oJycpO1xufVxuIl0sIm5hbWVzIjpbImNzcyIsIlJlYWN0IiwiUmVkaXJlY3QiLCJBbGVydCIsIkNhcmQiLCJJY29uIiwiTG9hZGluZ1BsYWNlaG9sZGVyIiwidXNlU3R5bGVzMiIsIndpdGhFcnJvckJvdW5kYXJ5IiwiQWxlcnRMYWJlbHMiLCJSdWxlVmlld2VyTGF5b3V0IiwidXNlQ29tYmluZWRSdWxlc01hdGNoaW5nIiwiZ2V0UnVsZXNTb3VyY2VCeU5hbWUiLCJjcmVhdGVWaWV3TGluayIsInBhZ2VUaXRsZSIsIlJlZGlyZWN0VG9SdWxlVmlld2VyIiwicHJvcHMiLCJuYW1lIiwic291cmNlTmFtZSIsIm1hdGNoIiwicGFyYW1zIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiZXJyb3IiLCJsb2FkaW5nIiwicmVzdWx0IiwicnVsZXMiLCJkaXNwYXRjaGVkIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsInN0YWNrIiwiQXJyYXkiLCJpc0FycmF5IiwicnVsZXNTb3VyY2UiLCJsZW5ndGgiLCJydWxlIiwicGFyYW0iLCJtYXAiLCJpbmRleCIsIm5hbWVzcGFjZSIsImdyb3VwIiwibGFiZWxzIiwidGhlbWUiLCJjb2xvcnMiLCJ0ZXh0Iiwic2Vjb25kYXJ5Iiwic3BhY2luZyIsInN0eWxlIiwibG9jYXRpb25TZXJ2aWNlIiwiUGFnZVRvb2xiYXIiLCJQYWdlIiwid3JhcEluQ29udGVudCIsImNoaWxkcmVuIiwidGl0bGUiLCJnZXRQYWdlU3R5bGVzIiwicHVzaCIsImNvbnRlbnQiLCJSdWxlVmlld2VyTGF5b3V0Q29udGVudCIsInBhZGRpbmciLCJnZXRDb250ZW50U3R5bGVzIiwid3JhcHBlciIsImJyZWFrcG9pbnRzIiwidmFsdWVzIiwieHhsIiwiYmFja2dyb3VuZCIsInByaW1hcnkiLCJib3JkZXIiLCJ3ZWFrIiwic2hhcGUiLCJib3JkZXJSYWRpdXMiLCJ1c2VNZW1vIiwidXNlRGlzcGF0Y2giLCJ1c2VBc3luYyIsImZldGNoUHJvbUFuZFJ1bGVyUnVsZXNBY3Rpb24iLCJpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUiLCJydWxlSWQiLCJpc1J1bGVyTm90U3VwcG9ydGVkUmVzcG9uc2UiLCJ1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzIiwidXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IiLCJ1c2VDb21iaW5lZFJ1bGUiLCJpZGVudGlmaWVyIiwicnVsZVNvdXJjZU5hbWUiLCJyZXF1ZXN0U3RhdGUiLCJ1c2VDb21iaW5lZFJ1bGVzTG9hZGVyIiwiY29tYmluZWRSdWxlcyIsImdyb3VwcyIsImlkIiwiZnJvbUNvbWJpbmVkUnVsZSIsImVxdWFsIiwicnVsZU5hbWUiLCJydWxlc1NvdXJjZU5hbWUiLCJkaXNwYXRjaCIsInByb21SdWxlUmVxdWVzdHMiLCJzdGF0ZSIsInByb21SdWxlcyIsInByb21SdWxlUmVxdWVzdCIsImdldFJlcXVlc3RTdGF0ZSIsInJ1bGVyUnVsZVJlcXVlc3RzIiwicnVsZXJSdWxlcyIsInJ1bGVyUnVsZVJlcXVlc3QiLCJ1bmRlZmluZWQiLCJzbGljZSIsInVzZVJlZiIsImdldEFsbFJ1bGVzU291cmNlcyIsImlzQ2xvdWRSdWxlc1NvdXJjZSIsImlzR3JhZmFuYVJ1bGVzU291cmNlIiwiaXNBbGVydGluZ1J1bGUiLCJpc0FsZXJ0aW5nUnVsZXJSdWxlIiwiaXNSZWNvcmRpbmdSdWxlclJ1bGUiLCJwcm9tUnVsZXNSZXNwb25zZXMiLCJydWxlclJ1bGVzUmVzcG9uc2VzIiwiY2FjaGUiLCJydWxlc1NvdXJjZXMiLCJFcnJvciIsImNhY2hlZCIsImN1cnJlbnQiLCJuYW1lc3BhY2VzIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJuYW1lc3BhY2VOYW1lIiwiYWRkUnVsZXJHcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlIiwibnMiLCJhZGRQcm9tR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZSIsImZsYXQiLCJmbGF0dGVuR3JhZmFuYU1hbmFnZWRSdWxlcyIsIm5ld05hbWVzcGFjZSIsInNvcnRSdWxlc0J5TmFtZSIsImZsYXRNYXAiLCJzb3J0IiwiYSIsImIiLCJsb2NhbGVDb21wYXJlIiwiY29tYmluZWRHcm91cCIsImludGVydmFsIiwic291cmNlX3RlbmFudHMiLCJydWxlclJ1bGVUb0NvbWJpbmVkUnVsZSIsImZpbmQiLCJnIiwiZXhpc3RpbmdSdWxlIiwiZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cCIsInByb21SdWxlIiwicHJvbVJ1bGVUb0NvbWJpbmVkUnVsZSIsInF1ZXJ5IiwiYW5ub3RhdGlvbnMiLCJhbGVydCIsImV4cHIiLCJydWxlclJ1bGUiLCJyZWNvcmQiLCJncmFmYW5hX2FsZXJ0IiwiaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUiLCJjb21iaW5lZFJ1bGUiLCJjaGVja1F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhhc2hRdWVyeSIsInJlcGxhY2UiLCJzcGxpdCIsImpvaW4iXSwic291cmNlUm9vdCI6IiJ9