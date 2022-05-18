"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["FolderAlerting"],{

/***/ "./public/app/features/alerting/unified/AlertsFolderView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertsFolderView": () => (/* binding */ AlertsFolderView),
/* harmony export */   "getStyles": () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/constants.ts");
/* harmony import */ var app_core_utils_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/utils/query.ts");
/* harmony import */ var _hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;



















var SortOrder;

(function (SortOrder) {
  SortOrder["Ascending"] = "alpha-asc";
  SortOrder["Descending"] = "alpha-desc";
})(SortOrder || (SortOrder = {}));

const sortOptions = [{
  label: 'Alphabetically [A-Z]',
  value: SortOrder.Ascending
}, {
  label: 'Alphabetically [Z-A]',
  value: SortOrder.Descending
}];
const AlertsFolderView = ({
  folder
}) => {
  var _matchingNamespace$gr;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  const onTagClick = tagName => {
    const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.parseMatchers)(labelFilter);
    const tagMatcherField = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.parseMatcher)(tagName);
    const uniqueMatchers = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqWith)([...matchers, tagMatcherField], lodash__WEBPACK_IMPORTED_MODULE_1__.isEqual);
    const matchersString = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.matchersToString)(uniqueMatchers);
    setLabelFilter(matchersString);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.fetchPromRulesAction)({
      rulesSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_13__.GRAFANA_RULES_SOURCE_NAME
    }));
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_11__.fetchRulerRulesAction)({
      rulesSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_13__.GRAFANA_RULES_SOURCE_NAME
    }));
  }, [dispatch]);
  const combinedNamespaces = (0,_hooks_useCombinedRuleNamespaces__WEBPACK_IMPORTED_MODULE_8__.useCombinedRuleNamespaces)(_utils_datasource__WEBPACK_IMPORTED_MODULE_13__.GRAFANA_RULES_SOURCE_NAME);
  const {
    nameFilter,
    labelFilter,
    sortOrder,
    setNameFilter,
    setLabelFilter,
    setSortOrder
  } = useAlertsFolderViewParams();
  const matchingNamespace = combinedNamespaces.find(namespace => namespace.name === folder.title);
  const alertRules = (_matchingNamespace$gr = matchingNamespace === null || matchingNamespace === void 0 ? void 0 : matchingNamespace.groups.flatMap(group => group.rules)) !== null && _matchingNamespace$gr !== void 0 ? _matchingNamespace$gr : [];
  const filteredRules = filterAndSortRules(alertRules, nameFilter, labelFilter, sortOrder !== null && sortOrder !== void 0 ? sortOrder : SortOrder.Ascending);
  const hasNoResults = alertRules.length === 0 || filteredRules.length === 0;
  const {
    page,
    numberOfPages,
    onPageChange,
    pageItems
  } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_9__.usePagination)(filteredRules, 1, app_core_constants__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_PER_PAGE_PAGINATION);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
    className: styles.container,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_4__.Stack, {
      direction: "column",
      gap: 3,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.FilterInput, {
        value: nameFilter,
        onChange: setNameFilter,
        placeholder: "Search alert rules by name",
        "data-testid": "name-filter"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        direction: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select, {
          value: sortOrder,
          onChange: ({
            value
          }) => value && setSortOrder(value),
          options: sortOptions,
          width: 25,
          "aria-label": "Sort",
          placeholder: `Sort (Default A-Z)`,
          prefix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, {
            name: sortOrder === SortOrder.Ascending ? 'sort-amount-up' : 'sort-amount-down'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.FilterInput, {
          value: labelFilter,
          onChange: setLabelFilter,
          placeholder: "Search alerts by labels",
          className: styles.filterLabelsInput,
          "data-testid": "label-filter"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        gap: 1,
        children: pageItems.map(currentRule => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Card, {
          href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.createViewLink)('grafana', currentRule, ''),
          className: styles.card,
          "data-testid": "alert-card-row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Card.Heading, {
            children: currentRule.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Card.Tags, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TagList, {
              onClick: onTagClick,
              tags: Object.entries(currentRule.labels).map(([label, value]) => `${label}=${value}`)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Card.Meta, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
              children: [_Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, {
                name: "folder"
              })), " ", folder.title]
            })
          })]
        }, currentRule.name))
      }), hasNoResults && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: styles.noResults,
        children: "No alert rules found"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
        className: styles.pagination,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Pagination, {
          currentPage: page,
          numberOfPages: numberOfPages,
          onNavigate: onPageChange,
          hideWhenSinglePage: true
        })
      })]
    })
  });
};
var AlertFolderViewParams;

(function (AlertFolderViewParams) {
  AlertFolderViewParams["nameFilter"] = "nameFilter";
  AlertFolderViewParams["labelFilter"] = "labelFilter";
  AlertFolderViewParams["sortOrder"] = "sort";
})(AlertFolderViewParams || (AlertFolderViewParams = {}));

function useAlertsFolderViewParams() {
  var _searchParams$get, _searchParams$get2;

  const [searchParams, setSearchParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_10__.useURLSearchParams)();
  const [nameFilter, setNameFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((_searchParams$get = searchParams.get(AlertFolderViewParams.nameFilter)) !== null && _searchParams$get !== void 0 ? _searchParams$get : '');
  const [labelFilter, setLabelFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((_searchParams$get2 = searchParams.get(AlertFolderViewParams.labelFilter)) !== null && _searchParams$get2 !== void 0 ? _searchParams$get2 : '');
  const sortParam = searchParams.get(AlertFolderViewParams.sortOrder);
  const [sortOrder, setSortOrder] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(sortParam === SortOrder.Ascending ? SortOrder.Ascending : sortParam === SortOrder.Descending ? SortOrder.Descending : undefined);
  (0,react_use__WEBPACK_IMPORTED_MODULE_16__["default"])(() => setSearchParams({
    [AlertFolderViewParams.nameFilter]: (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_7__.getQueryParamValue)(nameFilter),
    [AlertFolderViewParams.labelFilter]: (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_7__.getQueryParamValue)(labelFilter),
    [AlertFolderViewParams.sortOrder]: (0,app_core_utils_query__WEBPACK_IMPORTED_MODULE_7__.getQueryParamValue)(sortOrder)
  }, true), 400, [nameFilter, labelFilter, sortOrder]);
  return {
    nameFilter,
    labelFilter,
    sortOrder,
    setNameFilter,
    setLabelFilter,
    setSortOrder
  };
}

function filterAndSortRules(originalRules, nameFilter, labelFilter, sortOrder) {
  const matchers = (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.parseMatchers)(labelFilter);
  let rules = originalRules.filter(rule => rule.name.toLowerCase().includes(nameFilter.toLowerCase()) && (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_12__.labelsMatchMatchers)(rule.labels, matchers));
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.orderBy)(rules, x => x.name.toLowerCase(), [sortOrder === SortOrder.Ascending ? 'asc' : 'desc']);
}

const getStyles = theme => ({
  container: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(1)};
  `,
  card: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    grid-template-columns: auto 1fr 2fr;
    margin: 0;
  `,
  pagination: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    align-self: center;
  `,
  filterLabelsInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    flex: 1;
    width: auto;
    min-width: 240px;
  `,
  noResults: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    padding: ${theme.spacing(2)};
    background-color: ${theme.colors.background.secondary};
    font-style: italic;
  `
});

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

/***/ "./public/app/features/alerting/unified/hooks/usePagination.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePagination": () => (/* binding */ usePagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");

function usePagination(items, initialPage, itemsPerPage) {
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialPage);
  const numberOfPages = Math.ceil(items.length / itemsPerPage);
  const firstItemOnPageIndex = itemsPerPage * (page - 1);
  const pageItems = items.slice(firstItemOnPageIndex, firstItemOnPageIndex + itemsPerPage);

  const onPageChange = newPage => {
    setPage(newPage);
  }; // Reset the current page when number of changes has been changed


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => setPage(1), [numberOfPages]);
  return {
    page,
    onPageChange,
    numberOfPages,
    pageItems
  };
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useURLSearchParams.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useURLSearchParams": () => (/* binding */ useURLSearchParams)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");



function useURLSearchParams() {
  const {
    search
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  const queryParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new URLSearchParams(search), [search]);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((searchValues, replace) => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial(searchValues, replace);
  }, []);
  return [queryParams, update];
}

/***/ }),

/***/ "./public/app/features/folders/FolderAlerting.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _alerting_unified_AlertsFolderView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/AlertsFolderView.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/folders/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/folders/state/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");










const FolderAlerting = ({
  match
}) => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.navIndex);
  const folder = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.folder);
  const uid = match.params.uid;
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)(navIndex, `folder-alerting-${uid}`, (0,_state_navModel__WEBPACK_IMPORTED_MODULE_6__.getLoadingNav)(1));
  const {
    loading
  } = (0,react_use__WEBPACK_IMPORTED_MODULE_8__["default"])(async () => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_5__.getFolderByUid)(uid)), [_state_actions__WEBPACK_IMPORTED_MODULE_5__.getFolderByUid, uid]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      isLoading: loading,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_alerting_unified_AlertsFolderView__WEBPACK_IMPORTED_MODULE_4__.AlertsFolderView, {
        folder: folder
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FolderAlerting);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLENBQUM4RSxRQUE5QixDQUE1QjtBQUNBLFFBQU16SixNQUFNLEdBQUdpSix3REFBVyxDQUFFdEUsS0FBRCxJQUF1QkEsS0FBSyxDQUFDM0UsTUFBOUIsQ0FBMUI7QUFFQSxRQUFNMEosR0FBRyxHQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUQsR0FBekI7QUFDQSxRQUFNRSxRQUFRLEdBQUdSLHdFQUFXLENBQUNLLFFBQUQsRUFBWSxtQkFBa0JDLEdBQUksRUFBbEMsRUFBcUNKLDhEQUFhLENBQUMsQ0FBRCxDQUFsRCxDQUE1QjtBQUVBLFFBQU07QUFBRU8sSUFBQUE7QUFBRixNQUFjWCxxREFBUSxDQUFDLFlBQVkvSSxRQUFRLENBQUNrSiw4REFBYyxDQUFDSyxHQUFELENBQWYsQ0FBckIsRUFBNEMsQ0FBQ0wsMERBQUQsRUFBaUJLLEdBQWpCLENBQTVDLENBQTVCO0FBRUEsc0JBQ0UsdURBQUMscUVBQUQ7QUFBTSxZQUFRLEVBQUVFLFFBQWhCO0FBQUEsMkJBQ0UsdURBQUMsOEVBQUQ7QUFBZSxlQUFTLEVBQUVDLE9BQTFCO0FBQUEsNkJBQ0UsdURBQUMsZ0ZBQUQ7QUFBa0IsY0FBTSxFQUFFN0o7QUFBMUI7QUFERjtBQURGLElBREY7QUFPRCxDQWpCRDs7QUFtQkEsaUVBQWV1SixjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9BbGVydHNGb2xkZXJWaWV3LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUNvbWJpbmVkUnVsZU5hbWVzcGFjZXMudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VQYWdpbmF0aW9uLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvaG9va3MvdXNlVVJMU2VhcmNoUGFyYW1zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2ZvbGRlcnMvRm9sZGVyQWxlcnRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgeyBpc0VxdWFsLCBvcmRlckJ5LCB1bmlxV2l0aCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tICdyZWFjdC11c2UnO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnQGdyYWZhbmEvZXhwZXJpbWVudGFsJztcbmltcG9ydCB7IENhcmQsIEZpbHRlcklucHV0LCBJY29uLCBQYWdpbmF0aW9uLCBTZWxlY3QsIFRhZ0xpc3QsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQgeyBERUZBVUxUX1BFUl9QQUdFX1BBR0lOQVRJT04gfSBmcm9tICdhcHAvY29yZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0UXVlcnlQYXJhbVZhbHVlIH0gZnJvbSAnYXBwL2NvcmUvdXRpbHMvcXVlcnknO1xuaW1wb3J0IHsgRm9sZGVyU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuaW1wb3J0IHsgQ29tYmluZWRSdWxlIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmcnO1xuXG5pbXBvcnQgeyB1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzIH0gZnJvbSAnLi9ob29rcy91c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzJztcbmltcG9ydCB7IHVzZVBhZ2luYXRpb24gfSBmcm9tICcuL2hvb2tzL3VzZVBhZ2luYXRpb24nO1xuaW1wb3J0IHsgdXNlVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi9ob29rcy91c2VVUkxTZWFyY2hQYXJhbXMnO1xuaW1wb3J0IHsgZmV0Y2hQcm9tUnVsZXNBY3Rpb24sIGZldGNoUnVsZXJSdWxlc0FjdGlvbiB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBsYWJlbHNNYXRjaE1hdGNoZXJzLCBtYXRjaGVyc1RvU3RyaW5nLCBwYXJzZU1hdGNoZXIsIHBhcnNlTWF0Y2hlcnMgfSBmcm9tICcuL3V0aWxzL2FsZXJ0bWFuYWdlcic7XG5pbXBvcnQgeyBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0gZnJvbSAnLi91dGlscy9kYXRhc291cmNlJztcbmltcG9ydCB7IGNyZWF0ZVZpZXdMaW5rIH0gZnJvbSAnLi91dGlscy9taXNjJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgZm9sZGVyOiBGb2xkZXJTdGF0ZTtcbn1cblxuZW51bSBTb3J0T3JkZXIge1xuICBBc2NlbmRpbmcgPSAnYWxwaGEtYXNjJyxcbiAgRGVzY2VuZGluZyA9ICdhbHBoYS1kZXNjJyxcbn1cblxuY29uc3Qgc29ydE9wdGlvbnM6IEFycmF5PFNlbGVjdGFibGVWYWx1ZTxTb3J0T3JkZXI+PiA9IFtcbiAgeyBsYWJlbDogJ0FscGhhYmV0aWNhbGx5IFtBLVpdJywgdmFsdWU6IFNvcnRPcmRlci5Bc2NlbmRpbmcgfSxcbiAgeyBsYWJlbDogJ0FscGhhYmV0aWNhbGx5IFtaLUFdJywgdmFsdWU6IFNvcnRPcmRlci5EZXNjZW5kaW5nIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgQWxlcnRzRm9sZGVyVmlldyA9ICh7IGZvbGRlciB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBvblRhZ0NsaWNrID0gKHRhZ05hbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG1hdGNoZXJzID0gcGFyc2VNYXRjaGVycyhsYWJlbEZpbHRlcik7XG4gICAgY29uc3QgdGFnTWF0Y2hlckZpZWxkID0gcGFyc2VNYXRjaGVyKHRhZ05hbWUpO1xuICAgIGNvbnN0IHVuaXF1ZU1hdGNoZXJzID0gdW5pcVdpdGgoWy4uLm1hdGNoZXJzLCB0YWdNYXRjaGVyRmllbGRdLCBpc0VxdWFsKTtcbiAgICBjb25zdCBtYXRjaGVyc1N0cmluZyA9IG1hdGNoZXJzVG9TdHJpbmcodW5pcXVlTWF0Y2hlcnMpO1xuICAgIHNldExhYmVsRmlsdGVyKG1hdGNoZXJzU3RyaW5nKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUHJvbVJ1bGVzQWN0aW9uKHsgcnVsZXNTb3VyY2VOYW1lOiBHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FIH0pKTtcbiAgICBkaXNwYXRjaChmZXRjaFJ1bGVyUnVsZXNBY3Rpb24oeyBydWxlc1NvdXJjZU5hbWU6IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUgfSkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuICBjb25zdCBjb21iaW5lZE5hbWVzcGFjZXMgPSB1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzKEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUpO1xuICBjb25zdCB7IG5hbWVGaWx0ZXIsIGxhYmVsRmlsdGVyLCBzb3J0T3JkZXIsIHNldE5hbWVGaWx0ZXIsIHNldExhYmVsRmlsdGVyLCBzZXRTb3J0T3JkZXIgfSA9XG4gICAgdXNlQWxlcnRzRm9sZGVyVmlld1BhcmFtcygpO1xuXG4gIGNvbnN0IG1hdGNoaW5nTmFtZXNwYWNlID0gY29tYmluZWROYW1lc3BhY2VzLmZpbmQoKG5hbWVzcGFjZSkgPT4gbmFtZXNwYWNlLm5hbWUgPT09IGZvbGRlci50aXRsZSk7XG4gIGNvbnN0IGFsZXJ0UnVsZXMgPSBtYXRjaGluZ05hbWVzcGFjZT8uZ3JvdXBzLmZsYXRNYXAoKGdyb3VwKSA9PiBncm91cC5ydWxlcykgPz8gW107XG5cbiAgY29uc3QgZmlsdGVyZWRSdWxlcyA9IGZpbHRlckFuZFNvcnRSdWxlcyhhbGVydFJ1bGVzLCBuYW1lRmlsdGVyLCBsYWJlbEZpbHRlciwgc29ydE9yZGVyID8/IFNvcnRPcmRlci5Bc2NlbmRpbmcpO1xuXG4gIGNvbnN0IGhhc05vUmVzdWx0cyA9IGFsZXJ0UnVsZXMubGVuZ3RoID09PSAwIHx8IGZpbHRlcmVkUnVsZXMubGVuZ3RoID09PSAwO1xuICBjb25zdCB7IHBhZ2UsIG51bWJlck9mUGFnZXMsIG9uUGFnZUNoYW5nZSwgcGFnZUl0ZW1zIH0gPSB1c2VQYWdpbmF0aW9uKGZpbHRlcmVkUnVsZXMsIDEsIERFRkFVTFRfUEVSX1BBR0VfUEFHSU5BVElPTik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8U3RhY2sgZGlyZWN0aW9uPVwiY29sdW1uXCIgZ2FwPXszfT5cbiAgICAgICAgPEZpbHRlcklucHV0XG4gICAgICAgICAgdmFsdWU9e25hbWVGaWx0ZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e3NldE5hbWVGaWx0ZXJ9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYWxlcnQgcnVsZXMgYnkgbmFtZVwiXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJuYW1lLWZpbHRlclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICA8U2VsZWN0PFNvcnRPcmRlcj5cbiAgICAgICAgICAgIHZhbHVlPXtzb3J0T3JkZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHsgdmFsdWUgfSkgPT4gdmFsdWUgJiYgc2V0U29ydE9yZGVyKHZhbHVlKX1cbiAgICAgICAgICAgIG9wdGlvbnM9e3NvcnRPcHRpb25zfVxuICAgICAgICAgICAgd2lkdGg9ezI1fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNvcnRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2BTb3J0IChEZWZhdWx0IEEtWilgfVxuICAgICAgICAgICAgcHJlZml4PXs8SWNvbiBuYW1lPXtzb3J0T3JkZXIgPT09IFNvcnRPcmRlci5Bc2NlbmRpbmcgPyAnc29ydC1hbW91bnQtdXAnIDogJ3NvcnQtYW1vdW50LWRvd24nfSAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGaWx0ZXJJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e2xhYmVsRmlsdGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldExhYmVsRmlsdGVyfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYWxlcnRzIGJ5IGxhYmVsc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJMYWJlbHNJbnB1dH1cbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibGFiZWwtZmlsdGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgIDxTdGFjayBnYXA9ezF9PlxuICAgICAgICAgIHtwYWdlSXRlbXMubWFwKChjdXJyZW50UnVsZSkgPT4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAga2V5PXtjdXJyZW50UnVsZS5uYW1lfVxuICAgICAgICAgICAgICBocmVmPXtjcmVhdGVWaWV3TGluaygnZ3JhZmFuYScsIGN1cnJlbnRSdWxlLCAnJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiYWxlcnQtY2FyZC1yb3dcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2FyZC5IZWFkaW5nPntjdXJyZW50UnVsZS5uYW1lfTwvQ2FyZC5IZWFkaW5nPlxuICAgICAgICAgICAgICA8Q2FyZC5UYWdzPlxuICAgICAgICAgICAgICAgIDxUYWdMaXN0XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblRhZ0NsaWNrfVxuICAgICAgICAgICAgICAgICAgdGFncz17T2JqZWN0LmVudHJpZXMoY3VycmVudFJ1bGUubGFiZWxzKS5tYXAoKFtsYWJlbCwgdmFsdWVdKSA9PiBgJHtsYWJlbH09JHt2YWx1ZX1gKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NhcmQuVGFncz5cbiAgICAgICAgICAgICAgPENhcmQuTWV0YT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImZvbGRlclwiIC8+IHtmb2xkZXIudGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2FyZC5NZXRhPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0YWNrPlxuICAgICAgICB7aGFzTm9SZXN1bHRzICYmIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubm9SZXN1bHRzfT5ObyBhbGVydCBydWxlcyBmb3VuZDwvZGl2Pn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdpbmF0aW9ufT5cbiAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICBudW1iZXJPZlBhZ2VzPXtudW1iZXJPZlBhZ2VzfVxuICAgICAgICAgICAgb25OYXZpZ2F0ZT17b25QYWdlQ2hhbmdlfVxuICAgICAgICAgICAgaGlkZVdoZW5TaW5nbGVQYWdlPXt0cnVlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TdGFjaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmVudW0gQWxlcnRGb2xkZXJWaWV3UGFyYW1zIHtcbiAgbmFtZUZpbHRlciA9ICduYW1lRmlsdGVyJyxcbiAgbGFiZWxGaWx0ZXIgPSAnbGFiZWxGaWx0ZXInLFxuICBzb3J0T3JkZXIgPSAnc29ydCcsXG59XG5cbmZ1bmN0aW9uIHVzZUFsZXJ0c0ZvbGRlclZpZXdQYXJhbXMoKSB7XG4gIGNvbnN0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VVUkxTZWFyY2hQYXJhbXMoKTtcblxuICBjb25zdCBbbmFtZUZpbHRlciwgc2V0TmFtZUZpbHRlcl0gPSB1c2VTdGF0ZShzZWFyY2hQYXJhbXMuZ2V0KEFsZXJ0Rm9sZGVyVmlld1BhcmFtcy5uYW1lRmlsdGVyKSA/PyAnJyk7XG4gIGNvbnN0IFtsYWJlbEZpbHRlciwgc2V0TGFiZWxGaWx0ZXJdID0gdXNlU3RhdGUoc2VhcmNoUGFyYW1zLmdldChBbGVydEZvbGRlclZpZXdQYXJhbXMubGFiZWxGaWx0ZXIpID8/ICcnKTtcblxuICBjb25zdCBzb3J0UGFyYW0gPSBzZWFyY2hQYXJhbXMuZ2V0KEFsZXJ0Rm9sZGVyVmlld1BhcmFtcy5zb3J0T3JkZXIpO1xuICBjb25zdCBbc29ydE9yZGVyLCBzZXRTb3J0T3JkZXJdID0gdXNlU3RhdGU8U29ydE9yZGVyIHwgdW5kZWZpbmVkPihcbiAgICBzb3J0UGFyYW0gPT09IFNvcnRPcmRlci5Bc2NlbmRpbmdcbiAgICAgID8gU29ydE9yZGVyLkFzY2VuZGluZ1xuICAgICAgOiBzb3J0UGFyYW0gPT09IFNvcnRPcmRlci5EZXNjZW5kaW5nXG4gICAgICA/IFNvcnRPcmRlci5EZXNjZW5kaW5nXG4gICAgICA6IHVuZGVmaW5lZFxuICApO1xuXG4gIHVzZURlYm91bmNlKFxuICAgICgpID0+XG4gICAgICBzZXRTZWFyY2hQYXJhbXMoXG4gICAgICAgIHtcbiAgICAgICAgICBbQWxlcnRGb2xkZXJWaWV3UGFyYW1zLm5hbWVGaWx0ZXJdOiBnZXRRdWVyeVBhcmFtVmFsdWUobmFtZUZpbHRlciksXG4gICAgICAgICAgW0FsZXJ0Rm9sZGVyVmlld1BhcmFtcy5sYWJlbEZpbHRlcl06IGdldFF1ZXJ5UGFyYW1WYWx1ZShsYWJlbEZpbHRlciksXG4gICAgICAgICAgW0FsZXJ0Rm9sZGVyVmlld1BhcmFtcy5zb3J0T3JkZXJdOiBnZXRRdWVyeVBhcmFtVmFsdWUoc29ydE9yZGVyKSxcbiAgICAgICAgfSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKSxcbiAgICA0MDAsXG4gICAgW25hbWVGaWx0ZXIsIGxhYmVsRmlsdGVyLCBzb3J0T3JkZXJdXG4gICk7XG5cbiAgcmV0dXJuIHsgbmFtZUZpbHRlciwgbGFiZWxGaWx0ZXIsIHNvcnRPcmRlciwgc2V0TmFtZUZpbHRlciwgc2V0TGFiZWxGaWx0ZXIsIHNldFNvcnRPcmRlciB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJBbmRTb3J0UnVsZXMoXG4gIG9yaWdpbmFsUnVsZXM6IENvbWJpbmVkUnVsZVtdLFxuICBuYW1lRmlsdGVyOiBzdHJpbmcsXG4gIGxhYmVsRmlsdGVyOiBzdHJpbmcsXG4gIHNvcnRPcmRlcjogU29ydE9yZGVyXG4pIHtcbiAgY29uc3QgbWF0Y2hlcnMgPSBwYXJzZU1hdGNoZXJzKGxhYmVsRmlsdGVyKTtcbiAgbGV0IHJ1bGVzID0gb3JpZ2luYWxSdWxlcy5maWx0ZXIoXG4gICAgKHJ1bGUpID0+IHJ1bGUubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5hbWVGaWx0ZXIudG9Mb3dlckNhc2UoKSkgJiYgbGFiZWxzTWF0Y2hNYXRjaGVycyhydWxlLmxhYmVscywgbWF0Y2hlcnMpXG4gICk7XG5cbiAgcmV0dXJuIG9yZGVyQnkocnVsZXMsICh4KSA9PiB4Lm5hbWUudG9Mb3dlckNhc2UoKSwgW3NvcnRPcmRlciA9PT0gU29ydE9yZGVyLkFzY2VuZGluZyA/ICdhc2MnIDogJ2Rlc2MnXSk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGNvbnRhaW5lcjogY3NzYFxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIGNhcmQ6IGNzc2BcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIDJmcjtcbiAgICBtYXJnaW46IDA7XG4gIGAsXG4gIHBhZ2luYXRpb246IGNzc2BcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGAsXG4gIGZpbHRlckxhYmVsc0lucHV0OiBjc3NgXG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtaW4td2lkdGg6IDI0MHB4O1xuICBgLFxuICBub1Jlc3VsdHM6IGNzc2BcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMil9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tYmluZWRSdWxlLFxuICBDb21iaW5lZFJ1bGVHcm91cCxcbiAgQ29tYmluZWRSdWxlTmFtZXNwYWNlLFxuICBSdWxlLFxuICBSdWxlR3JvdXAsXG4gIFJ1bGVOYW1lc3BhY2UsXG4gIFJ1bGVzU291cmNlLFxufSBmcm9tICdhcHAvdHlwZXMvdW5pZmllZC1hbGVydGluZyc7XG5pbXBvcnQgeyBSdWxlclJ1bGVEVE8sIFJ1bGVyUnVsZUdyb3VwRFRPLCBSdWxlclJ1bGVzQ29uZmlnRFRPIH0gZnJvbSAnYXBwL3R5cGVzL3VuaWZpZWQtYWxlcnRpbmctZHRvJztcblxuaW1wb3J0IHtcbiAgZ2V0QWxsUnVsZXNTb3VyY2VzLFxuICBnZXRSdWxlc1NvdXJjZUJ5TmFtZSxcbiAgaXNDbG91ZFJ1bGVzU291cmNlLFxuICBpc0dyYWZhbmFSdWxlc1NvdXJjZSxcbn0gZnJvbSAnLi4vdXRpbHMvZGF0YXNvdXJjZSc7XG5pbXBvcnQgeyBpc0FsZXJ0aW5nUnVsZSwgaXNBbGVydGluZ1J1bGVyUnVsZSwgaXNSZWNvcmRpbmdSdWxlclJ1bGUgfSBmcm9tICcuLi91dGlscy9ydWxlcyc7XG5cbmltcG9ydCB7IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yIH0gZnJvbSAnLi91c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3Rvcic7XG5cbmludGVyZmFjZSBDYWNoZVZhbHVlIHtcbiAgcHJvbVJ1bGVzPzogUnVsZU5hbWVzcGFjZVtdO1xuICBydWxlclJ1bGVzPzogUnVsZXJSdWxlc0NvbmZpZ0RUTyB8IG51bGw7XG4gIHJlc3VsdDogQ29tYmluZWRSdWxlTmFtZXNwYWNlW107XG59XG5cbi8vIHRoaXMgbGl0dGxlIG1vbnN0ZXIgY29tYmluZXMgcHJvbWV0aGV1cyBydWxlcyBhbmQgcnVsZXIgcnVsZXMgdG8gcHJvZHVjZSBhIHVuaWZpZWQgZGF0YSBzdHJ1Y3R1cmVcbi8vIGNhbiBsaW1pdCB0byBhIHNpbmdsZSBydWxlcyBzb3VyY2VcbmV4cG9ydCBmdW5jdGlvbiB1c2VDb21iaW5lZFJ1bGVOYW1lc3BhY2VzKHJ1bGVzU291cmNlTmFtZT86IHN0cmluZyk6IENvbWJpbmVkUnVsZU5hbWVzcGFjZVtdIHtcbiAgY29uc3QgcHJvbVJ1bGVzUmVzcG9uc2VzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9tUnVsZXMpO1xuICBjb25zdCBydWxlclJ1bGVzUmVzcG9uc2VzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5ydWxlclJ1bGVzKTtcblxuICAvLyBjYWNoZSByZXN1bHRzIHBlciBydWxlcyBzb3VyY2UsIHNvIHdlIG9ubHkgcmVjYWxjdWxhdGUgdGhvc2UgZm9yIHdoaWNoIHJlc3VsdHMgaGF2ZSBhY3R1YWxseSBjaGFuZ2VkXG4gIGNvbnN0IGNhY2hlID0gdXNlUmVmPFJlY29yZDxzdHJpbmcsIENhY2hlVmFsdWU+Pih7fSk7XG5cbiAgY29uc3QgcnVsZXNTb3VyY2VzID0gdXNlTWVtbygoKTogUnVsZXNTb3VyY2VbXSA9PiB7XG4gICAgaWYgKHJ1bGVzU291cmNlTmFtZSkge1xuICAgICAgY29uc3QgcnVsZXNTb3VyY2UgPSBnZXRSdWxlc1NvdXJjZUJ5TmFtZShydWxlc1NvdXJjZU5hbWUpO1xuICAgICAgaWYgKCFydWxlc1NvdXJjZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gcnVsZXMgc291cmNlOiAke3J1bGVzU291cmNlTmFtZX1gKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbcnVsZXNTb3VyY2VdO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0QWxsUnVsZXNTb3VyY2VzKCk7XG4gIH0sIFtydWxlc1NvdXJjZU5hbWVdKTtcblxuICByZXR1cm4gdXNlTWVtbyhcbiAgICAoKSA9PlxuICAgICAgcnVsZXNTb3VyY2VzXG4gICAgICAgIC5tYXAoKHJ1bGVzU291cmNlKTogQ29tYmluZWRSdWxlTmFtZXNwYWNlW10gPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVzU291cmNlTmFtZSA9IGlzQ2xvdWRSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkgPyBydWxlc1NvdXJjZS5uYW1lIDogcnVsZXNTb3VyY2U7XG4gICAgICAgICAgY29uc3QgcHJvbVJ1bGVzID0gcHJvbVJ1bGVzUmVzcG9uc2VzW3J1bGVzU291cmNlTmFtZV0/LnJlc3VsdDtcbiAgICAgICAgICBjb25zdCBydWxlclJ1bGVzID0gcnVsZXJSdWxlc1Jlc3BvbnNlc1tydWxlc1NvdXJjZU5hbWVdPy5yZXN1bHQ7XG5cbiAgICAgICAgICBjb25zdCBjYWNoZWQgPSBjYWNoZS5jdXJyZW50W3J1bGVzU291cmNlTmFtZV07XG4gICAgICAgICAgaWYgKGNhY2hlZCAmJiBjYWNoZWQucHJvbVJ1bGVzID09PSBwcm9tUnVsZXMgJiYgY2FjaGVkLnJ1bGVyUnVsZXMgPT09IHJ1bGVyUnVsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQucmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBuYW1lc3BhY2VzOiBSZWNvcmQ8c3RyaW5nLCBDb21iaW5lZFJ1bGVOYW1lc3BhY2U+ID0ge307XG5cbiAgICAgICAgICAvLyBmaXJzdCBnZXQgYWxsIHRoZSBydWxlciBydWxlcyBpblxuICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHJ1bGVyUnVsZXMgfHwge30pLmZvckVhY2goKFtuYW1lc3BhY2VOYW1lLCBncm91cHNdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSA9IHtcbiAgICAgICAgICAgICAgcnVsZXNTb3VyY2UsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWVzcGFjZU5hbWUsXG4gICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbmFtZXNwYWNlc1tuYW1lc3BhY2VOYW1lXSA9IG5hbWVzcGFjZTtcbiAgICAgICAgICAgIGFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2UsIGdyb3Vwcyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyB0aGVuIGNvcnJlbGF0ZSB3aXRoIHByb21ldGhldXMgcnVsZXNcbiAgICAgICAgICBwcm9tUnVsZXM/LmZvckVhY2goKHsgbmFtZTogbmFtZXNwYWNlTmFtZSwgZ3JvdXBzIH0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5zID0gKG5hbWVzcGFjZXNbbmFtZXNwYWNlTmFtZV0gPSBuYW1lc3BhY2VzW25hbWVzcGFjZU5hbWVdIHx8IHtcbiAgICAgICAgICAgICAgcnVsZXNTb3VyY2UsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWVzcGFjZU5hbWUsXG4gICAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UobnMsIGdyb3Vwcyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBPYmplY3QudmFsdWVzKG5hbWVzcGFjZXMpO1xuXG4gICAgICAgICAgY2FjaGUuY3VycmVudFtydWxlc1NvdXJjZU5hbWVdID0geyBwcm9tUnVsZXMsIHJ1bGVyUnVsZXMsIHJlc3VsdCB9O1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5mbGF0KCksXG4gICAgW3Byb21SdWxlc1Jlc3BvbnNlcywgcnVsZXJSdWxlc1Jlc3BvbnNlcywgcnVsZXNTb3VyY2VzXVxuICApO1xufVxuXG4vLyBtZXJnZSBhbGwgZ3JvdXBzIGluIGNhc2Ugb2YgZ3JhZmFuYSBtYW5hZ2VkLCBlc3NlbnRpYWxseSB0cmVhdGluZyBuYW1lc3BhY2VzIChmb2xkZXJzKSBhcyBncm91cHNcbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuR3JhZmFuYU1hbmFnZWRSdWxlcyhuYW1lc3BhY2VzOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2VbXSkge1xuICByZXR1cm4gbmFtZXNwYWNlcy5tYXAoKG5hbWVzcGFjZSkgPT4ge1xuICAgIGNvbnN0IG5ld05hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlID0ge1xuICAgICAgLi4ubmFtZXNwYWNlLFxuICAgICAgZ3JvdXBzOiBbXSxcbiAgICB9O1xuXG4gICAgLy8gYWRkIGRlZmF1bHQgZ3JvdXAgd2l0aCB1bmdyb3VwZWQgcnVsZXNcbiAgICBuZXdOYW1lc3BhY2UuZ3JvdXBzLnB1c2goe1xuICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgcnVsZXM6IHNvcnRSdWxlc0J5TmFtZShuYW1lc3BhY2UuZ3JvdXBzLmZsYXRNYXAoKGdyb3VwKSA9PiBncm91cC5ydWxlcykpLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld05hbWVzcGFjZTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0UnVsZXNCeU5hbWUocnVsZXM6IENvbWJpbmVkUnVsZVtdKSB7XG4gIHJldHVybiBydWxlcy5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbn1cblxuZnVuY3Rpb24gYWRkUnVsZXJHcm91cHNUb0NvbWJpbmVkTmFtZXNwYWNlKG5hbWVzcGFjZTogQ29tYmluZWRSdWxlTmFtZXNwYWNlLCBncm91cHM6IFJ1bGVyUnVsZUdyb3VwRFRPW10pOiB2b2lkIHtcbiAgbmFtZXNwYWNlLmdyb3VwcyA9IGdyb3Vwcy5tYXAoKGdyb3VwKSA9PiB7XG4gICAgY29uc3QgY29tYmluZWRHcm91cDogQ29tYmluZWRSdWxlR3JvdXAgPSB7XG4gICAgICBuYW1lOiBncm91cC5uYW1lLFxuICAgICAgaW50ZXJ2YWw6IGdyb3VwLmludGVydmFsLFxuICAgICAgc291cmNlX3RlbmFudHM6IGdyb3VwLnNvdXJjZV90ZW5hbnRzLFxuICAgICAgcnVsZXM6IFtdLFxuICAgIH07XG4gICAgY29tYmluZWRHcm91cC5ydWxlcyA9IGdyb3VwLnJ1bGVzLm1hcCgocnVsZSkgPT4gcnVsZXJSdWxlVG9Db21iaW5lZFJ1bGUocnVsZSwgbmFtZXNwYWNlLCBjb21iaW5lZEdyb3VwKSk7XG4gICAgcmV0dXJuIGNvbWJpbmVkR3JvdXA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9tR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZShuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSwgZ3JvdXBzOiBSdWxlR3JvdXBbXSk6IHZvaWQge1xuICBncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICBsZXQgY29tYmluZWRHcm91cCA9IG5hbWVzcGFjZS5ncm91cHMuZmluZCgoZykgPT4gZy5uYW1lID09PSBncm91cC5uYW1lKTtcbiAgICBpZiAoIWNvbWJpbmVkR3JvdXApIHtcbiAgICAgIGNvbWJpbmVkR3JvdXAgPSB7XG4gICAgICAgIG5hbWU6IGdyb3VwLm5hbWUsXG4gICAgICAgIHJ1bGVzOiBbXSxcbiAgICAgIH07XG4gICAgICBuYW1lc3BhY2UuZ3JvdXBzLnB1c2goY29tYmluZWRHcm91cCk7XG4gICAgfVxuXG4gICAgKGdyb3VwLnJ1bGVzID8/IFtdKS5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZ1J1bGUgPSBnZXRFeGlzdGluZ1J1bGVJbkdyb3VwKHJ1bGUsIGNvbWJpbmVkR3JvdXAhLCBuYW1lc3BhY2UucnVsZXNTb3VyY2UpO1xuICAgICAgaWYgKGV4aXN0aW5nUnVsZSkge1xuICAgICAgICBleGlzdGluZ1J1bGUucHJvbVJ1bGUgPSBydWxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tYmluZWRHcm91cCEucnVsZXMucHVzaChwcm9tUnVsZVRvQ29tYmluZWRSdWxlKHJ1bGUsIG5hbWVzcGFjZSwgY29tYmluZWRHcm91cCEpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHByb21SdWxlVG9Db21iaW5lZFJ1bGUocnVsZTogUnVsZSwgbmFtZXNwYWNlOiBDb21iaW5lZFJ1bGVOYW1lc3BhY2UsIGdyb3VwOiBDb21iaW5lZFJ1bGVHcm91cCk6IENvbWJpbmVkUnVsZSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogcnVsZS5uYW1lLFxuICAgIHF1ZXJ5OiBydWxlLnF1ZXJ5LFxuICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgYW5ub3RhdGlvbnM6IGlzQWxlcnRpbmdSdWxlKHJ1bGUpID8gcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSA6IHt9LFxuICAgIHByb21SdWxlOiBydWxlLFxuICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlLFxuICAgIGdyb3VwLFxuICB9O1xufVxuXG5mdW5jdGlvbiBydWxlclJ1bGVUb0NvbWJpbmVkUnVsZShcbiAgcnVsZTogUnVsZXJSdWxlRFRPLFxuICBuYW1lc3BhY2U6IENvbWJpbmVkUnVsZU5hbWVzcGFjZSxcbiAgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwXG4pOiBDb21iaW5lZFJ1bGUge1xuICByZXR1cm4gaXNBbGVydGluZ1J1bGVyUnVsZShydWxlKVxuICAgID8ge1xuICAgICAgICBuYW1lOiBydWxlLmFsZXJ0LFxuICAgICAgICBxdWVyeTogcnVsZS5leHByLFxuICAgICAgICBsYWJlbHM6IHJ1bGUubGFiZWxzIHx8IHt9LFxuICAgICAgICBhbm5vdGF0aW9uczogcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSxcbiAgICAgICAgcnVsZXJSdWxlOiBydWxlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIGdyb3VwLFxuICAgICAgfVxuICAgIDogaXNSZWNvcmRpbmdSdWxlclJ1bGUocnVsZSlcbiAgICA/IHtcbiAgICAgICAgbmFtZTogcnVsZS5yZWNvcmQsXG4gICAgICAgIHF1ZXJ5OiBydWxlLmV4cHIsXG4gICAgICAgIGxhYmVsczogcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGFubm90YXRpb25zOiB7fSxcbiAgICAgICAgcnVsZXJSdWxlOiBydWxlLFxuICAgICAgICBuYW1lc3BhY2UsXG4gICAgICAgIGdyb3VwLFxuICAgICAgfVxuICAgIDoge1xuICAgICAgICBuYW1lOiBydWxlLmdyYWZhbmFfYWxlcnQudGl0bGUsXG4gICAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgICAgbGFiZWxzOiBydWxlLmxhYmVscyB8fCB7fSxcbiAgICAgICAgYW5ub3RhdGlvbnM6IHJ1bGUuYW5ub3RhdGlvbnMgfHwge30sXG4gICAgICAgIHJ1bGVyUnVsZTogcnVsZSxcbiAgICAgICAgbmFtZXNwYWNlLFxuICAgICAgICBncm91cCxcbiAgICAgIH07XG59XG5cbi8vIGZpbmQgZXhpc3RpbmcgcnVsZSBpbiBncm91cCB0aGF0IG1hdGNoZXMgdGhlIGdpdmVuIHByb20gcnVsZVxuZnVuY3Rpb24gZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cChcbiAgcnVsZTogUnVsZSxcbiAgZ3JvdXA6IENvbWJpbmVkUnVsZUdyb3VwLFxuICBydWxlc1NvdXJjZTogUnVsZXNTb3VyY2Vcbik6IENvbWJpbmVkUnVsZSB8IHVuZGVmaW5lZCB7XG4gIGlmIChpc0dyYWZhbmFSdWxlc1NvdXJjZShydWxlc1NvdXJjZSkpIHtcbiAgICAvLyBhc3N1bWUgZ3JhZmFuYSBncm91cHMgaGF2ZSBvbmx5IHRoZSBvbmUgcnVsZS4gY2hlY2sgbmFtZSBhbnl3YXkgYmVjYXVzZSBwYXJhbm9pZFxuICAgIHJldHVybiBncm91cCEucnVsZXMuZmluZCgoZXhpc3RpbmdSdWxlKSA9PiBleGlzdGluZ1J1bGUubmFtZSA9PT0gcnVsZS5uYW1lKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIC8vIHRyeSBmaW5kaW5nIGEgcnVsZSB0aGF0IG1hdGNoZXMgbmFtZSwgbGFiZWxzLCBhbm5vdGF0aW9ucyBhbmQgcXVlcnlcbiAgICBncm91cCEucnVsZXMuZmluZChcbiAgICAgIChleGlzdGluZ1J1bGUpID0+ICFleGlzdGluZ1J1bGUucHJvbVJ1bGUgJiYgaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUoZXhpc3RpbmdSdWxlLCBydWxlLCB0cnVlKVxuICAgICkgPz9cbiAgICAvLyBpZiB0aGF0IGZhaWxzLCB0cnkgZmluZGluZyBhIHJ1bGUgdGhhdCBvbmx5IG1hdGNoZXMgbmFtZSwgbGFiZWxzIGFuZCBhbm5vdGF0aW9ucy5cbiAgICAvLyBsb2tpICYgcHJvbSBjYW4gc29tZXRpbWVzIG1vZGlmeSB0aGUgcXVlcnkgc28gaXQgZG9lc250IG1hdGNoLCBlZyBgMiA+IDFgIGJlY29tZXMgYDFgXG4gICAgZ3JvdXAhLnJ1bGVzLmZpbmQoXG4gICAgICAoZXhpc3RpbmdSdWxlKSA9PiAhZXhpc3RpbmdSdWxlLnByb21SdWxlICYmIGlzQ29tYmluZWRSdWxlRXF1YWxUb1Byb21SdWxlKGV4aXN0aW5nUnVsZSwgcnVsZSwgZmFsc2UpXG4gICAgKVxuICApO1xufVxuXG5mdW5jdGlvbiBpc0NvbWJpbmVkUnVsZUVxdWFsVG9Qcm9tUnVsZShjb21iaW5lZFJ1bGU6IENvbWJpbmVkUnVsZSwgcnVsZTogUnVsZSwgY2hlY2tRdWVyeSA9IHRydWUpOiBib29sZWFuIHtcbiAgaWYgKGNvbWJpbmVkUnVsZS5uYW1lID09PSBydWxlLm5hbWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICBjaGVja1F1ZXJ5ID8gaGFzaFF1ZXJ5KGNvbWJpbmVkUnVsZS5xdWVyeSkgOiAnJyxcbiAgICAgICAgY29tYmluZWRSdWxlLmxhYmVscyxcbiAgICAgICAgY29tYmluZWRSdWxlLmFubm90YXRpb25zLFxuICAgICAgXSkgPT09XG4gICAgICBKU09OLnN0cmluZ2lmeShbXG4gICAgICAgIGNoZWNrUXVlcnkgPyBoYXNoUXVlcnkocnVsZS5xdWVyeSkgOiAnJyxcbiAgICAgICAgcnVsZS5sYWJlbHMgfHwge30sXG4gICAgICAgIGlzQWxlcnRpbmdSdWxlKHJ1bGUpID8gcnVsZS5hbm5vdGF0aW9ucyB8fCB7fSA6IHt9LFxuICAgICAgXSlcbiAgICApO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gdGhlcmUgY2FuIGJlIHNsaWdodCBkaWZmZXJlbmNlcyBpbiBob3cgcHJvbSAmIHJ1bGVyIHJlbmRlciBhIHF1ZXJ5LCB0aGlzIHdpbGwgaGFzaCB0aGVtIGFjY291bnRpbmcgZm9yIHRoZSBkaWZmZXJlbmNlc1xuZnVuY3Rpb24gaGFzaFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpIHtcbiAgLy8gb25lIG9mIHRoZW0gbWlnaHQgYmUgd3JhcHBlZCBpbiBwYXJlbnNcbiAgaWYgKHF1ZXJ5Lmxlbmd0aCA+IDEgJiYgcXVlcnlbMF0gPT09ICcoJyAmJiBxdWVyeVtxdWVyeS5sZW5ndGggLSAxXSA9PT0gJyknKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5zbGljZSgxLCAtMSk7XG4gIH1cbiAgLy8gd2hpdGVzcGFjZSBjb3VsZCBiZSBhZGRlZCBvciByZW1vdmVkXG4gIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgvXFxzfFxcbi9nLCAnJyk7XG4gIC8vIGxhYmVscyBtYXRjaGVycyBjYW4gYmUgcmVvcmRlcmVkLCBzbyBzb3J0IHRoZSBlbml0cmUgc3RyaW5nLCBlc2VudGlhbGx5IGNvbXBhcmluZyBqdXN0IHRoZSBjaGFyYWN0ZXIgY291bnRzXG4gIHJldHVybiBxdWVyeS5zcGxpdCgnJykuc29ydCgpLmpvaW4oJycpO1xufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVBhZ2luYXRpb248VD4oaXRlbXM6IFRbXSwgaW5pdGlhbFBhZ2U6IG51bWJlciwgaXRlbXNQZXJQYWdlOiBudW1iZXIpIHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoaW5pdGlhbFBhZ2UpO1xuXG4gIGNvbnN0IG51bWJlck9mUGFnZXMgPSBNYXRoLmNlaWwoaXRlbXMubGVuZ3RoIC8gaXRlbXNQZXJQYWdlKTtcblxuICBjb25zdCBmaXJzdEl0ZW1PblBhZ2VJbmRleCA9IGl0ZW1zUGVyUGFnZSAqIChwYWdlIC0gMSk7XG4gIGNvbnN0IHBhZ2VJdGVtcyA9IGl0ZW1zLnNsaWNlKGZpcnN0SXRlbU9uUGFnZUluZGV4LCBmaXJzdEl0ZW1PblBhZ2VJbmRleCArIGl0ZW1zUGVyUGFnZSk7XG5cbiAgY29uc3Qgb25QYWdlQ2hhbmdlID0gKG5ld1BhZ2U6IG51bWJlcikgPT4ge1xuICAgIHNldFBhZ2UobmV3UGFnZSk7XG4gIH07XG5cbiAgLy8gUmVzZXQgdGhlIGN1cnJlbnQgcGFnZSB3aGVuIG51bWJlciBvZiBjaGFuZ2VzIGhhcyBiZWVuIGNoYW5nZWRcbiAgdXNlRWZmZWN0KCgpID0+IHNldFBhZ2UoMSksIFtudW1iZXJPZlBhZ2VzXSk7XG5cbiAgcmV0dXJuIHsgcGFnZSwgb25QYWdlQ2hhbmdlLCBudW1iZXJPZlBhZ2VzLCBwYWdlSXRlbXMgfTtcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHsgbG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGdyYWZhbmEvcnVudGltZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VVUkxTZWFyY2hQYXJhbXMoKTogW1xuICBVUkxTZWFyY2hQYXJhbXMsXG4gIChzZWFyY2hWYWx1ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkPiwgcmVwbGFjZT86IGJvb2xlYW4pID0+IHZvaWRcbl0ge1xuICBjb25zdCB7IHNlYXJjaCB9ID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgcXVlcnlQYXJhbXMgPSB1c2VNZW1vKCgpID0+IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKSwgW3NlYXJjaF0pO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKChzZWFyY2hWYWx1ZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkPiwgcmVwbGFjZT86IGJvb2xlYW4pID0+IHtcbiAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbChzZWFyY2hWYWx1ZXMsIHJlcGxhY2UpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIFtxdWVyeVBhcmFtcywgdXBkYXRlXTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB1c2VBc3luYyB9IGZyb20gJ3JlYWN0LXVzZSc7XG5cbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgQWxlcnRzRm9sZGVyVmlldyB9IGZyb20gJy4uL2FsZXJ0aW5nL3VuaWZpZWQvQWxlcnRzRm9sZGVyVmlldyc7XG5cbmltcG9ydCB7IGdldEZvbGRlckJ5VWlkIH0gZnJvbSAnLi9zdGF0ZS9hY3Rpb25zJztcbmltcG9ydCB7IGdldExvYWRpbmdOYXYgfSBmcm9tICcuL3N0YXRlL25hdk1vZGVsJztcblxuZXhwb3J0IGludGVyZmFjZSBPd25Qcm9wcyBleHRlbmRzIEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzPHsgdWlkOiBzdHJpbmcgfT4ge31cblxuY29uc3QgRm9sZGVyQWxlcnRpbmcgPSAoeyBtYXRjaCB9OiBPd25Qcm9wcykgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IG5hdkluZGV4ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiBzdGF0ZS5uYXZJbmRleCk7XG4gIGNvbnN0IGZvbGRlciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUuZm9sZGVyKTtcblxuICBjb25zdCB1aWQgPSBtYXRjaC5wYXJhbXMudWlkO1xuICBjb25zdCBuYXZNb2RlbCA9IGdldE5hdk1vZGVsKG5hdkluZGV4LCBgZm9sZGVyLWFsZXJ0aW5nLSR7dWlkfWAsIGdldExvYWRpbmdOYXYoMSkpO1xuXG4gIGNvbnN0IHsgbG9hZGluZyB9ID0gdXNlQXN5bmMoYXN5bmMgKCkgPT4gZGlzcGF0Y2goZ2V0Rm9sZGVyQnlVaWQodWlkKSksIFtnZXRGb2xkZXJCeVVpZCwgdWlkXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgICAgPEFsZXJ0c0ZvbGRlclZpZXcgZm9sZGVyPXtmb2xkZXJ9IC8+XG4gICAgICA8L1BhZ2UuQ29udGVudHM+XG4gICAgPC9QYWdlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9sZGVyQWxlcnRpbmc7XG4iXSwibmFtZXMiOlsiY3NzIiwiaXNFcXVhbCIsIm9yZGVyQnkiLCJ1bmlxV2l0aCIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZURlYm91bmNlIiwiU3RhY2siLCJDYXJkIiwiRmlsdGVySW5wdXQiLCJJY29uIiwiUGFnaW5hdGlvbiIsIlNlbGVjdCIsIlRhZ0xpc3QiLCJ1c2VTdHlsZXMyIiwiREVGQVVMVF9QRVJfUEFHRV9QQUdJTkFUSU9OIiwiZ2V0UXVlcnlQYXJhbVZhbHVlIiwidXNlQ29tYmluZWRSdWxlTmFtZXNwYWNlcyIsInVzZVBhZ2luYXRpb24iLCJ1c2VVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaFByb21SdWxlc0FjdGlvbiIsImZldGNoUnVsZXJSdWxlc0FjdGlvbiIsImxhYmVsc01hdGNoTWF0Y2hlcnMiLCJtYXRjaGVyc1RvU3RyaW5nIiwicGFyc2VNYXRjaGVyIiwicGFyc2VNYXRjaGVycyIsIkdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUiLCJjcmVhdGVWaWV3TGluayIsIlNvcnRPcmRlciIsInNvcnRPcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsIkFzY2VuZGluZyIsIkRlc2NlbmRpbmciLCJBbGVydHNGb2xkZXJWaWV3IiwiZm9sZGVyIiwic3R5bGVzIiwiZ2V0U3R5bGVzIiwiZGlzcGF0Y2giLCJvblRhZ0NsaWNrIiwidGFnTmFtZSIsIm1hdGNoZXJzIiwibGFiZWxGaWx0ZXIiLCJ0YWdNYXRjaGVyRmllbGQiLCJ1bmlxdWVNYXRjaGVycyIsIm1hdGNoZXJzU3RyaW5nIiwic2V0TGFiZWxGaWx0ZXIiLCJydWxlc1NvdXJjZU5hbWUiLCJjb21iaW5lZE5hbWVzcGFjZXMiLCJuYW1lRmlsdGVyIiwic29ydE9yZGVyIiwic2V0TmFtZUZpbHRlciIsInNldFNvcnRPcmRlciIsInVzZUFsZXJ0c0ZvbGRlclZpZXdQYXJhbXMiLCJtYXRjaGluZ05hbWVzcGFjZSIsImZpbmQiLCJuYW1lc3BhY2UiLCJuYW1lIiwidGl0bGUiLCJhbGVydFJ1bGVzIiwiZ3JvdXBzIiwiZmxhdE1hcCIsImdyb3VwIiwicnVsZXMiLCJmaWx0ZXJlZFJ1bGVzIiwiZmlsdGVyQW5kU29ydFJ1bGVzIiwiaGFzTm9SZXN1bHRzIiwibGVuZ3RoIiwicGFnZSIsIm51bWJlck9mUGFnZXMiLCJvblBhZ2VDaGFuZ2UiLCJwYWdlSXRlbXMiLCJjb250YWluZXIiLCJmaWx0ZXJMYWJlbHNJbnB1dCIsIm1hcCIsImN1cnJlbnRSdWxlIiwiY2FyZCIsIk9iamVjdCIsImVudHJpZXMiLCJsYWJlbHMiLCJub1Jlc3VsdHMiLCJwYWdpbmF0aW9uIiwiQWxlcnRGb2xkZXJWaWV3UGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0U2VhcmNoUGFyYW1zIiwiZ2V0Iiwic29ydFBhcmFtIiwidW5kZWZpbmVkIiwib3JpZ2luYWxSdWxlcyIsImZpbHRlciIsInJ1bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwieCIsInRoZW1lIiwic3BhY2luZyIsImNvbG9ycyIsImJhY2tncm91bmQiLCJzZWNvbmRhcnkiLCJ1c2VNZW1vIiwidXNlUmVmIiwiZ2V0QWxsUnVsZXNTb3VyY2VzIiwiZ2V0UnVsZXNTb3VyY2VCeU5hbWUiLCJpc0Nsb3VkUnVsZXNTb3VyY2UiLCJpc0dyYWZhbmFSdWxlc1NvdXJjZSIsImlzQWxlcnRpbmdSdWxlIiwiaXNBbGVydGluZ1J1bGVyUnVsZSIsImlzUmVjb3JkaW5nUnVsZXJSdWxlIiwidXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IiLCJwcm9tUnVsZXNSZXNwb25zZXMiLCJzdGF0ZSIsInByb21SdWxlcyIsInJ1bGVyUnVsZXNSZXNwb25zZXMiLCJydWxlclJ1bGVzIiwiY2FjaGUiLCJydWxlc1NvdXJjZXMiLCJydWxlc1NvdXJjZSIsIkVycm9yIiwicmVzdWx0IiwiY2FjaGVkIiwiY3VycmVudCIsIm5hbWVzcGFjZXMiLCJmb3JFYWNoIiwibmFtZXNwYWNlTmFtZSIsImFkZFJ1bGVyR3JvdXBzVG9Db21iaW5lZE5hbWVzcGFjZSIsIm5zIiwiYWRkUHJvbUdyb3Vwc1RvQ29tYmluZWROYW1lc3BhY2UiLCJ2YWx1ZXMiLCJmbGF0IiwiZmxhdHRlbkdyYWZhbmFNYW5hZ2VkUnVsZXMiLCJuZXdOYW1lc3BhY2UiLCJwdXNoIiwic29ydFJ1bGVzQnlOYW1lIiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsImNvbWJpbmVkR3JvdXAiLCJpbnRlcnZhbCIsInNvdXJjZV90ZW5hbnRzIiwicnVsZXJSdWxlVG9Db21iaW5lZFJ1bGUiLCJnIiwiZXhpc3RpbmdSdWxlIiwiZ2V0RXhpc3RpbmdSdWxlSW5Hcm91cCIsInByb21SdWxlIiwicHJvbVJ1bGVUb0NvbWJpbmVkUnVsZSIsInF1ZXJ5IiwiYW5ub3RhdGlvbnMiLCJhbGVydCIsImV4cHIiLCJydWxlclJ1bGUiLCJyZWNvcmQiLCJncmFmYW5hX2FsZXJ0IiwiaXNDb21iaW5lZFJ1bGVFcXVhbFRvUHJvbVJ1bGUiLCJjb21iaW5lZFJ1bGUiLCJjaGVja1F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhhc2hRdWVyeSIsInNsaWNlIiwicmVwbGFjZSIsInNwbGl0Iiwiam9pbiIsIml0ZW1zIiwiaW5pdGlhbFBhZ2UiLCJpdGVtc1BlclBhZ2UiLCJzZXRQYWdlIiwiTWF0aCIsImNlaWwiLCJmaXJzdEl0ZW1PblBhZ2VJbmRleCIsIm5ld1BhZ2UiLCJ1c2VDYWxsYmFjayIsInVzZUxvY2F0aW9uIiwibG9jYXRpb25TZXJ2aWNlIiwic2VhcmNoIiwicXVlcnlQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ1cGRhdGUiLCJzZWFyY2hWYWx1ZXMiLCJwYXJ0aWFsIiwidXNlU2VsZWN0b3IiLCJ1c2VBc3luYyIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsImdldEZvbGRlckJ5VWlkIiwiZ2V0TG9hZGluZ05hdiIsIkZvbGRlckFsZXJ0aW5nIiwibWF0Y2giLCJuYXZJbmRleCIsInVpZCIsInBhcmFtcyIsIm5hdk1vZGVsIiwibG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=