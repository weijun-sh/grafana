"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[1324],{

 "./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Kd": () => ( flattenGrafanaManagedRules),
   "Zo": () => ( useCombinedRuleNamespaces)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
 var _utils_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
 var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");




function useCombinedRuleNamespaces(rulesSourceName) {
  const promRulesResponses = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ ._)(state => state.promRules);
  const rulerRulesResponses = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ ._)(state => state.rulerRules); 

  const cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const rulesSources = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (rulesSourceName) {
      const rulesSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__ .o_)(rulesSourceName);

      if (!rulesSource) {
        throw new Error(`Unknown rules source: ${rulesSourceName}`);
      }

      return [rulesSource];
    }

    return (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__ .h_)();
  }, [rulesSourceName]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => rulesSources.map(rulesSource => {
    var _promRulesResponses$r, _rulerRulesResponses$;

    const rulesSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__ .jq)(rulesSource) ? rulesSource.name : rulesSource;
    const promRules = (_promRulesResponses$r = promRulesResponses[rulesSourceName]) === null || _promRulesResponses$r === void 0 ? void 0 : _promRulesResponses$r.result;
    const rulerRules = (_rulerRulesResponses$ = rulerRulesResponses[rulesSourceName]) === null || _rulerRulesResponses$ === void 0 ? void 0 : _rulerRulesResponses$.result;
    const cached = cache.current[rulesSourceName];

    if (cached && cached.promRules === promRules && cached.rulerRules === rulerRules) {
      return cached.result;
    }

    const namespaces = {}; 

    Object.entries(rulerRules || {}).forEach(_ref => {
      let [namespaceName, groups] = _ref;
      const namespace = {
        rulesSource,
        name: namespaceName,
        groups: []
      };
      namespaces[namespaceName] = namespace;
      addRulerGroupsToCombinedNamespace(namespace, groups);
    }); 

    promRules === null || promRules === void 0 ? void 0 : promRules.forEach(_ref2 => {
      let {
        name: namespaceName,
        groups
      } = _ref2;
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
} 

function flattenGrafanaManagedRules(namespaces) {
  return namespaces.map(namespace => {
    const newNamespace = Object.assign({}, namespace, {
      groups: []
    }); 

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
    annotations: (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__ .x_)(rule) ? rule.annotations || {} : {},
    promRule: rule,
    namespace: namespace,
    group
  };
}

function rulerRuleToCombinedRule(rule, namespace, group) {
  return (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__ .cG)(rule) ? {
    name: rule.alert,
    query: rule.expr,
    labels: rule.labels || {},
    annotations: rule.annotations || {},
    rulerRule: rule,
    namespace,
    group
  } : (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__ .yF)(rule) ? {
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
} 


function getExistingRuleInGroup(rule, group, rulesSource) {
  var _rules$find;

  if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__ .HY)(rulesSource)) {
    return group.rules.find(existingRule => existingRule.name === rule.name);
  }

  return (
    (_rules$find = group.rules.find(existingRule => !existingRule.promRule && isCombinedRuleEqualToPromRule(existingRule, rule, true))) !== null && _rules$find !== void 0 ? _rules$find : 
    group.rules.find(existingRule => !existingRule.promRule && isCombinedRuleEqualToPromRule(existingRule, rule, false))
  );
}

function isCombinedRuleEqualToPromRule(combinedRule, rule) {
  let checkQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (combinedRule.name === rule.name) {
    return JSON.stringify([checkQuery ? hashQuery(combinedRule.query) : '', combinedRule.labels, combinedRule.annotations]) === JSON.stringify([checkQuery ? hashQuery(rule.query) : '', rule.labels || {}, (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__ .x_)(rule) ? rule.annotations || {} : {}]);
  }

  return false;
} 


function hashQuery(query) {
  if (query.length > 1 && query[0] === '(' && query[query.length - 1] === ')') {
    query = query.slice(1, -1);
  } 


  query = query.replace(/\s|\n/g, ''); 

  return query.split('').sort().join('');
}

 }),

 "./public/app/features/alerting/unified/hooks/useURLSearchParams.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "j": () => ( useURLSearchParams)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");



function useURLSearchParams() {
  const {
    search
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__ .TH)();
  const queryParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new URLSearchParams(search), [search]);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((searchValues, replace) => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial(searchValues, replace);
  }, []);
  return [queryParams, update];
}

 }),

 "./public/app/features/folders/FolderAlerting.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "default": () => ( folders_FolderAlerting)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var useAsync = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
var Page = __webpack_require__("./public/app/core/components/Page/Page.tsx");
var selectors_navModel = __webpack_require__("./public/app/core/selectors/navModel.ts");
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var useDebounce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
var experimental = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var constants = __webpack_require__("./public/app/core/constants.ts");
var query = __webpack_require__("./public/app/core/utils/query.ts");
var useCombinedRuleNamespaces = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
;

function usePagination(items, initialPage, itemsPerPage) {
  const [page, setPage] = (0,react.useState)(initialPage);
  const numberOfPages = Math.ceil(items.length / itemsPerPage);
  const firstItemOnPageIndex = itemsPerPage * (page - 1);
  const pageItems = items.slice(firstItemOnPageIndex, firstItemOnPageIndex + itemsPerPage);

  const onPageChange = newPage => {
    setPage(newPage);
  }; 


  (0,react.useEffect)(() => setPage(1), [numberOfPages]);
  return {
    page,
    onPageChange,
    numberOfPages,
    pageItems
  };
}
var useURLSearchParams = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
var actions = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
var alertmanager = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
var datasource = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
var misc = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
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
const AlertsFolderView = _ref => {
  var _matchingNamespace$gr;

  let {
    folder
  } = _ref;
  const styles = (0,src.useStyles2)(getStyles);
  const dispatch = (0,es.useDispatch)();

  const onTagClick = tagName => {
    const matchers = (0,alertmanager.Zh)(labelFilter);
    const tagMatcherField = (0,alertmanager.tC)(tagName);
    const uniqueMatchers = (0,lodash.uniqWith)([...matchers, tagMatcherField], lodash.isEqual);
    const matchersString = (0,alertmanager.oI)(uniqueMatchers);
    setLabelFilter(matchersString);
  };

  (0,react.useEffect)(() => {
    dispatch((0,actions.y6)({
      rulesSourceName: datasource.GC
    }));
    dispatch((0,actions.UR)({
      rulesSourceName: datasource.GC
    }));
  }, [dispatch]);
  const combinedNamespaces = (0,useCombinedRuleNamespaces.Zo)(datasource.GC);
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
  } = usePagination(filteredRules, 1, constants.gN);
  return (0,jsx_runtime.jsx)("div", {
    className: styles.container,
    children: (0,jsx_runtime.jsxs)(experimental.Stack, {
      direction: "column",
      gap: 3,
      children: [(0,jsx_runtime.jsx)(src.FilterInput, {
        value: nameFilter,
        onChange: setNameFilter,
        placeholder: "Search alert rules by name",
        "data-testid": "name-filter"
      }), (0,jsx_runtime.jsxs)(experimental.Stack, {
        direction: "row",
        children: [(0,jsx_runtime.jsx)(src.Select, {
          value: sortOrder,
          onChange: _ref2 => {
            let {
              value
            } = _ref2;
            return value && setSortOrder(value);
          },
          options: sortOptions,
          width: 25,
          "aria-label": "Sort",
          placeholder: `Sort (Default A-Z)`,
          prefix: (0,jsx_runtime.jsx)(src.Icon, {
            name: sortOrder === SortOrder.Ascending ? 'sort-amount-up' : 'sort-amount-down'
          })
        }), (0,jsx_runtime.jsx)(src.FilterInput, {
          value: labelFilter,
          onChange: setLabelFilter,
          placeholder: "Search alerts by labels",
          className: styles.filterLabelsInput,
          "data-testid": "label-filter"
        })]
      }), (0,jsx_runtime.jsx)(experimental.Stack, {
        gap: 1,
        children: pageItems.map(currentRule => (0,jsx_runtime.jsxs)(src.Card, {
          href: (0,misc.V2)('grafana', currentRule, ''),
          className: styles.card,
          "data-testid": "alert-card-row",
          children: [(0,jsx_runtime.jsx)(src.Card.Heading, {
            children: currentRule.name
          }), (0,jsx_runtime.jsx)(src.Card.Tags, {
            children: (0,jsx_runtime.jsx)(src.TagList, {
              onClick: onTagClick,
              tags: Object.entries(currentRule.labels).map(_ref3 => {
                let [label, value] = _ref3;
                return `${label}=${value}`;
              })
            })
          }), (0,jsx_runtime.jsx)(src.Card.Meta, {
            children: (0,jsx_runtime.jsxs)("div", {
              children: [_Icon || (_Icon = (0,jsx_runtime.jsx)(src.Icon, {
                name: "folder"
              })), " ", folder.title]
            })
          })]
        }, currentRule.name))
      }), hasNoResults && (0,jsx_runtime.jsx)("div", {
        className: styles.noResults,
        children: "No alert rules found"
      }), (0,jsx_runtime.jsx)("div", {
        className: styles.pagination,
        children: (0,jsx_runtime.jsx)(src.Pagination, {
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

  const [searchParams, setSearchParams] = (0,useURLSearchParams.j)();
  const [nameFilter, setNameFilter] = (0,react.useState)((_searchParams$get = searchParams.get(AlertFolderViewParams.nameFilter)) !== null && _searchParams$get !== void 0 ? _searchParams$get : '');
  const [labelFilter, setLabelFilter] = (0,react.useState)((_searchParams$get2 = searchParams.get(AlertFolderViewParams.labelFilter)) !== null && _searchParams$get2 !== void 0 ? _searchParams$get2 : '');
  const sortParam = searchParams.get(AlertFolderViewParams.sortOrder);
  const [sortOrder, setSortOrder] = (0,react.useState)(sortParam === SortOrder.Ascending ? SortOrder.Ascending : sortParam === SortOrder.Descending ? SortOrder.Descending : undefined);
  (0,useDebounce.Z)(() => setSearchParams({
    [AlertFolderViewParams.nameFilter]: (0,query.sB)(nameFilter),
    [AlertFolderViewParams.labelFilter]: (0,query.sB)(labelFilter),
    [AlertFolderViewParams.sortOrder]: (0,query.sB)(sortOrder)
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
  const matchers = (0,alertmanager.Zh)(labelFilter);
  let rules = originalRules.filter(rule => rule.name.toLowerCase().includes(nameFilter.toLowerCase()) && (0,alertmanager.eD)(rule.labels, matchers));
  return (0,lodash.orderBy)(rules, x => x.name.toLowerCase(), [sortOrder === SortOrder.Ascending ? 'asc' : 'desc']);
}

const getStyles = theme => ({
  container: emotion_css_esm.css`
    padding: ${theme.spacing(1)};
  `,
  card: emotion_css_esm.css`
    grid-template-columns: auto 1fr 2fr;
    margin: 0;
  `,
  pagination: emotion_css_esm.css`
    align-self: center;
  `,
  filterLabelsInput: emotion_css_esm.css`
    flex: 1;
    width: auto;
    min-width: 240px;
  `,
  noResults: emotion_css_esm.css`
    padding: ${theme.spacing(2)};
    background-color: ${theme.colors.background.secondary};
    font-style: italic;
  `
});
var state_actions = __webpack_require__("./public/app/features/folders/state/actions.ts");
var state_navModel = __webpack_require__("./public/app/features/folders/state/navModel.ts");
;










const FolderAlerting = _ref => {
  let {
    match
  } = _ref;
  const dispatch = (0,es.useDispatch)();
  const navIndex = (0,es.useSelector)(state => state.navIndex);
  const folder = (0,es.useSelector)(state => state.folder);
  const uid = match.params.uid;
  const navModel = (0,selectors_navModel.h)(navIndex, `folder-alerting-${uid}`, (0,state_navModel._)(1));
  const {
    loading
  } = (0,useAsync.Z)(async () => dispatch((0,state_actions.Pb)(uid)), [state_actions.Pb, uid]);
  return (0,jsx_runtime.jsx)(Page.Z, {
    navModel: navModel,
    children: (0,jsx_runtime.jsx)(Page.Z.Contents, {
      isLoading: loading,
      children: (0,jsx_runtime.jsx)(AlertsFolderView, {
        folder: folder
      })
    })
  });
};

 const folders_FolderAlerting = (FolderAlerting);

 })

}]);