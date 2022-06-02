"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[4886],{

 "./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "F": () => ( MatcherFilter)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _span, _div;







const MatcherFilter = _ref => {
  let {
    className,
    onFilterChange,
    defaultQueryString,
    queryString
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);

  const handleSearchChange = e => {
    const target = e.target;
    onFilterChange(target.value);
  };

  const searchIcon = _Icon || (_Icon = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    name: 'search'
  }));

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: className,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        gap: 0.5,
        children: [_span || (_span = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: "Search by label"
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
          content: _div || (_div = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: ["Filter alerts using label querying, ex:", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", {
              children: `{severity="critical", instance=~"cluster-us-.+"}`
            })]
          })),
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            className: styles.icon,
            name: "info-circle",
            size: "sm"
          })
        })]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
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

 }),

 "./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "f": () => ( RuleDetailsActionButtons)
});


var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var react_router = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
var src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
var types = __webpack_require__("./public/app/types/index.ts");
var useIsRuleEditable = __webpack_require__("./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts");
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var actions = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
var useUnifiedAlertingSelector = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
;




function useManagedAlertStateHistory(alertId) {
  const dispatch = (0,es.useDispatch)();
  const history = (0,useUnifiedAlertingSelector._)(state => state.managedAlertStateHistory);
  (0,react.useEffect)(() => {
    dispatch((0,actions.Ms)(alertId));
  }, [dispatch, alertId]);
  return history;
}
var AlertLabel = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabel.tsx");
var DynamicTable = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
var AlertStateTag = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _LoadingPlaceholder;














const StateHistory = _ref => {
  let {
    alertId
  } = _ref;
  const {
    loading,
    error,
    result = []
  } = useManagedAlertStateHistory(alertId);

  if (loading && !error) {
    return _LoadingPlaceholder || (_LoadingPlaceholder = (0,jsx_runtime.jsx)(grafana_ui_src.LoadingPlaceholder, {
      text: 'Loading history...'
    }));
  }

  if (error && !loading) {
    return (0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
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
    }); 

    if (!hasMatchingPrecedingState(index, result)) {
      acc.push({
        id: (0,lodash.uniqueId)(),
        state: item.prevState
      });
    }

    return acc;
  }, []).map(historyItem => ({
    id: historyItem.id,
    data: historyItem
  }));
  return (0,jsx_runtime.jsx)(DynamicTable.t, {
    cols: columns,
    items: items
  });
};

function renderValueCell(item) {
  var _item$data$data$evalM, _item$data$data;

  const matches = (_item$data$data$evalM = (_item$data$data = item.data.data) === null || _item$data$data === void 0 ? void 0 : _item$data$data.evalMatches) !== null && _item$data$data$evalM !== void 0 ? _item$data$data$evalM : [];
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [item.data.text, (0,jsx_runtime.jsx)(LabelsWrapper, {
      children: matches.map(match => (0,jsx_runtime.jsx)(AlertLabel.i, {
        labelKey: match.metric,
        value: String(match.value)
      }, match.metric))
    })]
  });
}

function renderStateCell(item) {
  return (0,jsx_runtime.jsx)(AlertStateTag.l, {
    state: item.data.state
  });
}

function renderTimestampCell(item) {
  return (0,jsx_runtime.jsx)("div", {
    className: TimestampStyle,
    children: item.data.timestamp && (0,jsx_runtime.jsx)("span", {
      children: (0,src.dateTimeFormat)(item.data.timestamp)
    })
  });
}

const LabelsWrapper = _ref2 => {
  let {
    children
  } = _ref2;
  const {
    wrapper
  } = (0,grafana_ui_src.useStyles)(getStyles);
  return (0,jsx_runtime.jsx)("div", {
    className: wrapper,
    children: children
  });
};

const TimestampStyle = emotion_css_esm.css`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const getStyles = theme => ({
  wrapper: emotion_css_esm.css`
    & > * {
      margin-right: ${theme.spacing.xs};
    }
  `
}); 


function hasMatchingPrecedingState(index, items) {
  const currentHistoryItem = items[index];
  const previousHistoryItem = items[index + 1];

  if (!previousHistoryItem) {
    return false;
  }

  return previousHistoryItem.newState === currentHistoryItem.prevState;
}


;





function useStateHistoryModal(alertId) {
  var _StateHistory;

  const [showModal, setShowModal] = (0,react.useState)(false);
  const StateHistoryModal = (0,react.useMemo)(() => (0,jsx_runtime.jsx)(grafana_ui_src.Modal, {
    isOpen: showModal,
    onDismiss: () => setShowModal(false),
    closeOnBackdropClick: true,
    closeOnEscape: true,
    title: "State history",
    children: _StateHistory || (_StateHistory = (0,jsx_runtime.jsx)(StateHistory, {
      alertId: alertId
    }))
  }), [alertId, showModal]);
  return {
    StateHistoryModal,
    showStateHistoryModal: () => setShowModal(true),
    hideStateHistoryModal: () => setShowModal(false)
  };
}


var alertmanager = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
var constants = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
var datasource = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
var misc = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
var rule_id = __webpack_require__("./public/app/features/alerting/unified/utils/rule-id.ts");
var rules = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
;
var _div, _div2;























const RuleDetailsActionButtons = _ref => {
  var _rule$rulerRule$grafa, _getAlertmanagerByUid;

  let {
    rule,
    rulesSource
  } = _ref;
  const dispatch = (0,es.useDispatch)();
  const location = (0,react_router.TH)();
  const notifyApp = (0,appNotification.iG)();
  const style = (0,grafana_ui_src.useStyles2)(RuleDetailsActionButtons_getStyles);
  const {
    namespace,
    group,
    rulerRule
  } = rule;
  const [ruleToDelete, setRuleToDelete] = (0,react.useState)();
  const alertId = isGrafanaRulerRule(rule.rulerRule) ? (_rule$rulerRule$grafa = rule.rulerRule.grafana_alert.id) !== null && _rule$rulerRule$grafa !== void 0 ? _rule$rulerRule$grafa : '' : '';
  const {
    StateHistoryModal,
    showStateHistoryModal
  } = useStateHistoryModal(alertId);
  const alertmanagerSourceName = (0,datasource.HY)(rulesSource) ? rulesSource : (_getAlertmanagerByUid = (0,alertmanager.Xy)(rulesSource.jsonData.alertmanagerUid)) === null || _getAlertmanagerByUid === void 0 ? void 0 : _getAlertmanagerByUid.name;
  const rulesSourceName = (0,datasource.EG)(rulesSource);
  const hasExplorePermission = context_srv.Vt.hasPermission(types.bW.DataSourcesExplore);
  const leftButtons = [];
  const rightButtons = [];
  const isFederated = (0,rules.Jq)(group);
  const {
    isEditable,
    isRemovable
  } = (0,useIsRuleEditable.M)(rulesSourceName, rulerRule);
  const returnTo = location.pathname + location.search;
  const isViewMode = inViewMode(location.pathname);

  const deleteRule = () => {
    if (ruleToDelete && ruleToDelete.rulerRule) {
      const identifier = rule_id.Zk((0,datasource.EG)(ruleToDelete.namespace.rulesSource), ruleToDelete.namespace.name, ruleToDelete.group.name, ruleToDelete.rulerRule);
      dispatch((0,actions.hS)(identifier, {
        navigateTo: isViewMode ? '/alerting/list' : undefined
      }));
      setRuleToDelete(undefined);
    }
  };

  const buildShareUrl = () => {
    if ((0,datasource.jq)(rulesSource)) {
      const {
        appUrl,
        appSubUrl
      } = grafana_runtime_src.config;
      const baseUrl = appSubUrl !== '' ? `${appUrl}${appSubUrl}/` : grafana_runtime_src.config.appUrl;
      const ruleUrl = `${encodeURIComponent(rulesSource.name)}/${encodeURIComponent(rule.name)}`;
      return `${baseUrl}alerting/${ruleUrl}/find`;
    }

    return window.location.href.split('?')[0];
  }; 


  if ((0,datasource.jq)(rulesSource) && hasExplorePermission && !isFederated) {
    leftButtons.push( (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "primary",
      icon: "chart-line",
      target: "__blank",
      href: (0,misc.mH)(rulesSource.name, rule.query),
      children: "See graph"
    }, "explore"));
  }

  if (rule.annotations[constants.q6.runbookURL]) {
    leftButtons.push( (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "primary",
      icon: "book",
      target: "__blank",
      href: rule.annotations[constants.q6.runbookURL],
      children: "View runbook"
    }, "runbook"));
  }

  if (rule.annotations[constants.q6.dashboardUID]) {
    const dashboardUID = rule.annotations[constants.q6.dashboardUID];

    if (dashboardUID) {
      leftButtons.push( (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
        className: style.button,
        size: "xs",
        variant: "primary",
        icon: "apps",
        target: "__blank",
        href: `d/${encodeURIComponent(dashboardUID)}`,
        children: "Go to dashboard"
      }, "dashboard"));
      const panelId = rule.annotations[constants.q6.panelID];

      if (panelId) {
        leftButtons.push( (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
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

  if (alertmanagerSourceName && context_srv.Vt.hasAccess(types.bW.AlertingInstanceCreate, context_srv.Vt.isEditor)) {
    leftButtons.push( (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
      className: style.button,
      size: "xs",
      icon: "bell-slash",
      target: "__blank",
      href: (0,misc.Vv)(alertmanagerSourceName, rule),
      children: "Silence"
    }, "silence"));
  }

  if (alertId) {
    leftButtons.push( (0,jsx_runtime.jsxs)(react.Fragment, {
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        className: style.button,
        size: "xs",
        icon: "history",
        onClick: () => showStateHistoryModal(),
        children: "Show state history"
      }), StateHistoryModal]
    }, "history"));
  }

  if (!isViewMode) {
    rightButtons.push( (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "secondary",
      icon: "eye",
      href: (0,misc.V2)(rulesSource, rule, returnTo),
      children: "View"
    }, "view"));
  }

  if (isEditable && rulerRule && !isFederated) {
    const sourceName = (0,datasource.EG)(rulesSource);
    const identifier = rule_id.Zk(sourceName, namespace.name, group.name, rulerRule);
    const editURL = src.urlUtil.renderUrl(`${grafana_runtime_src.config.appSubUrl}/alerting/${encodeURIComponent(rule_id/* stringifyIdentifier */.$V(identifier))}/edit`, {
      returnTo
    });

    if (isViewMode) {
      rightButtons.push( (0,jsx_runtime.jsx)(grafana_ui_src.ClipboardButton, {
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

    rightButtons.push( (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
      className: style.button,
      size: "xs",
      variant: "secondary",
      icon: "pen",
      href: editURL,
      children: "Edit"
    }, "edit"));
  }

  if (isRemovable && rulerRule && !isFederated) {
    rightButtons.push( (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
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
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsxs)("div", {
        className: style.wrapper,
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.HorizontalGroup, {
          width: "auto",
          children: leftButtons.length ? leftButtons : _div || (_div = (0,jsx_runtime.jsx)("div", {}))
        }), (0,jsx_runtime.jsx)(grafana_ui_src.HorizontalGroup, {
          width: "auto",
          children: rightButtons.length ? rightButtons : _div2 || (_div2 = (0,jsx_runtime.jsx)("div", {}))
        })]
      }), !!ruleToDelete && (0,jsx_runtime.jsx)(grafana_ui_src.ConfirmModal, {
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

const RuleDetailsActionButtons_getStyles = theme => ({
  wrapper: emotion_css_esm.css`
    padding: ${theme.spacing(2)} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px ${theme.colors.border.medium};
  `,
  button: emotion_css_esm.css`
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

 }),

 "./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "J": () => ( RuleDetailsAnnotations)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var _AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





function RuleDetailsAnnotations(props) {
  const {
    annotations
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);

  if (annotations.length === 0) {
    return null;
  }

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: styles.annotations,
    children: annotations.map(_ref => {
      let [key, value] = _ref;
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AnnotationDetailsField__WEBPACK_IMPORTED_MODULE_3__ .a, {
        annotationKey: key,
        value: value
      }, key);
    })
  });
}

const getStyles = () => ({
  annotations: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: 46px;
  `
});

 }),

 "./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "C": () => ( RuleDetailsDataSources)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/expressions/ExpressionDatasource.ts");
 var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
 var _utils_rules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
 var _DetailsField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");











function RuleDetailsDataSources(props) {
  const {
    rulesSource,
    rule
  } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const dataSources = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__ .jq)(rulesSource)) {
      return [{
        name: rulesSource.name,
        icon: rulesSource.meta.info.logos.small
      }];
    }

    if ((0,_utils_rules__WEBPACK_IMPORTED_MODULE_6__ .Pc)(rule.rulerRule)) {
      const {
        data
      } = rule.rulerRule.grafana_alert;
      const unique = data.reduce((dataSources, query) => {
        const ds = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)().getInstanceSettings(query.datasourceUid);

        if (!ds || ds.uid === app_features_expressions_ExpressionDatasource__WEBPACK_IMPORTED_MODULE_4__ .Yq) {
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

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_7__ .C, {
    label: "Data source",
    children: dataSources.map((_ref, index) => {
      let {
        name,
        icon
      } = _ref;
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        children: [icon && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
            alt: `${name} datasource logo`,
            className: styles.dataSourceIcon,
            src: icon
          }), ' ']
        }), name]
      }, name);
    })
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

 }),

 "./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "C": () => ( RuleDetailsExpression)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var datasource = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
var DetailsField = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
var prism = __webpack_require__("./.yarn/cache/prismjs-npm-1.27.0-ca4e1667c6-85c7f4a3e9.zip/node_modules/prismjs/prism.js");
var slate_react_es = __webpack_require__("./.yarn/__virtual__/@grafana-slate-react-virtual-047372596b/0/cache/@grafana-slate-react-npm-0.22.10-grafana-510bc0576d-3417c53d9d.zip/node_modules/@grafana/slate-react/lib/slate-react.es.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var syntax = __webpack_require__("./public/app/plugins/datasource/loki/syntax.ts");
var promql = __webpack_require__("./public/app/plugins/datasource/prometheus/promql.ts");
var Well = __webpack_require__("./public/app/features/alerting/unified/components/Well.tsx");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;










const HighlightedQuery = _ref => {
  let {
    language,
    expr
  } = _ref;
  const plugins = (0,react.useMemo)(() => [(0,src.SlatePrism)({
    onlyIn: node => node.type === 'code_block',
    getSyntax: () => language
  }, Object.assign({}, prism.languages, {
    [language]: language === 'logql' ? syntax.ZP : promql.ZP
  }))], [language]);
  const slateValue = (0,react.useMemo)(() => (0,src.makeValue)(expr), [expr]);
  return (0,jsx_runtime.jsx)(slate_react_es.ML, {
    plugins: plugins,
    value: slateValue,
    readOnly: true
  });
};
const Expression = _ref2 => {
  let {
    expression: query,
    rulesSource
  } = _ref2;
  const styles = (0,src.useStyles)(getStyles);
  return (0,jsx_runtime.jsx)(Well.t, {
    className: (0,emotion_css_esm.cx)(styles.well, 'slate-query-field'),
    children: (0,datasource.jq)(rulesSource) ? (0,jsx_runtime.jsx)(HighlightedQuery, {
      expr: query,
      language: rulesSource.type === datasource.ye.Loki ? 'logql' : 'promql'
    }) : query
  });
};
const getStyles = theme => ({
  well: emotion_css_esm.css`
    font-family: ${theme.typography.fontFamily.monospace};
  `
});
;






function RuleDetailsExpression(props) {
  const {
    annotations,
    rulesSource,
    rule
  } = props;
  const styles = RuleDetailsExpression_getStyles();

  if (!(0,datasource.jq)(rulesSource)) {
    return null;
  }

  return (0,jsx_runtime.jsx)(DetailsField.C, {
    label: "Expression",
    horizontal: true,
    className: (0,emotion_css_esm.cx)({
      [styles.exprRow]: !!annotations.length
    }),
    children: (0,jsx_runtime.jsx)(Expression, {
      expression: rule.query,
      rulesSource: rulesSource
    })
  });
}

const RuleDetailsExpression_getStyles = () => ({
  exprRow: emotion_css_esm.css`
    margin-bottom: 46px;
  `
});

 }),

 "./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "M": () => ( RuleDetailsMatchingInstances)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var MatcherFilter = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx");
var unified_alerting_dto = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _Label;






const AlertInstanceStateFilter = _ref => {
  let {
    className,
    onStateFilterChange,
    stateFilter
  } = _ref;
  const stateOptions = Object.values(unified_alerting_dto.bj).map(value => ({
    label: value,
    value
  }));
  return (0,jsx_runtime.jsxs)("div", {
    className: className,
    children: [_Label || (_Label = (0,jsx_runtime.jsx)(src.Label, {
      children: "State"
    })), (0,jsx_runtime.jsx)(src.RadioButtonGroup, {
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
var alertmanager = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
var misc = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
var types = __webpack_require__("./public/app/plugins/panel/alertlist/types.ts");
var rules = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
var DetailsField = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
var AlertInstancesTable = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertInstancesTable.tsx");
;













function RuleDetailsMatchingInstances(props) {
  const {
    promRule
  } = props;
  const [queryString, setQueryString] = (0,react.useState)();
  const [alertState, setAlertState] = (0,react.useState)(); 

  const [filterKey] = (0,react.useState)(Math.floor(Math.random() * 100));
  const queryStringKey = `queryString-${filterKey}`;
  const styles = (0,src.useStyles)(getStyles);
  const alerts = (0,react.useMemo)(() => {
    var _promRule$alerts;

    return (0,rules.x_)(promRule) && (_promRule$alerts = promRule.alerts) !== null && _promRule$alerts !== void 0 && _promRule$alerts.length ? filterAlerts(queryString, alertState, (0,misc.Zl)(types.As.Importance, promRule.alerts)) : [];
  }, [promRule, alertState, queryString]);

  if (!(0,rules.x_)(promRule)) {
    return null;
  }

  return (0,jsx_runtime.jsxs)(DetailsField.C, {
    label: "Matching instances",
    horizontal: true,
    children: [(0,jsx_runtime.jsx)("div", {
      className: (0,emotion_css_esm.cx)(styles.flexRow, styles.spaceBetween),
      children: (0,jsx_runtime.jsxs)("div", {
        className: styles.flexRow,
        children: [(0,jsx_runtime.jsx)(MatcherFilter.F, {
          className: styles.rowChild,
          defaultQueryString: queryString,
          onFilterChange: value => setQueryString(value)
        }, queryStringKey), (0,jsx_runtime.jsx)(AlertInstanceStateFilter, {
          className: styles.rowChild,
          stateFilter: alertState,
          onStateFilterChange: setAlertState
        })]
      })
    }), (0,jsx_runtime.jsx)(AlertInstancesTable.o, {
      instances: alerts
    })]
  });
}

function filterAlerts(alertInstanceLabel, alertInstanceState, alerts) {
  let filteredAlerts = [...alerts];

  if (alertInstanceLabel) {
    const matchers = (0,alertmanager.Zh)(alertInstanceLabel || '');
    filteredAlerts = filteredAlerts.filter(_ref => {
      let {
        labels
      } = _ref;
      return (0,alertmanager.eD)(labels, matchers);
    });
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
    flexRow: emotion_css_esm.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
      margin-bottom: ${theme.spacing.sm};
    `,
    spaceBetween: emotion_css_esm.css`
      justify-content: space-between;
    `,
    rowChild: emotion_css_esm.css`
      margin-right: ${theme.spacing.sm};
    `
  };
};

 }),

 "./public/app/features/alerting/unified/components/rules/RuleHealth.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "V": () => ( RuleHealth)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon, _span;







const RuleHealth = _ref => {
  let {
    rule
  } = _ref;
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyle);

  if (rule.health === 'err' || rule.health === 'error') {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      theme: "error",
      content: rule.lastError || 'No error message provided.',
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: style.warn,
        children: [_Icon || (_Icon = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
          name: "exclamation-triangle"
        })), _span || (_span = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          children: "error"
        }))]
      })
    });
  }

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
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

 }),

 "./public/app/features/alerting/unified/components/rules/RuleState.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "p": () => ( RuleState)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
 var _utils_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
 var _AlertStateTag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _HorizontalGroup, _HorizontalGroup2;











const RuleState = _ref => {
  let {
    rule,
    isDeleting,
    isCreating
  } = _ref;
  const style = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyle);
  const {
    promRule
  } = rule; 

  const forTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _promRule$alerts;

    if (promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__ .x_)(promRule) && (_promRule$alerts = promRule.alerts) !== null && _promRule$alerts !== void 0 && _promRule$alerts.length && promRule.state !== app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_4__ .x_.Inactive) {
      const firstActiveAt = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__ .ub)(promRule); 

      if (firstActiveAt) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
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
    return _HorizontalGroup || (_HorizontalGroup = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
      align: "flex-start",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Spinner, {}), "deleting"]
    }));
  } else if (isCreating) {
    return _HorizontalGroup2 || (_HorizontalGroup2 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
      align: "flex-start",
      children: [' ', (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Spinner, {}), "creating"]
    }));
  } else if (promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__ .x_)(promRule)) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.HorizontalGroup, {
      align: "flex-start",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_AlertStateTag__WEBPACK_IMPORTED_MODULE_6__ .l, {
        state: promRule.state
      }), forTime]
    });
  } else if (promRule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_5__ .OP)(promRule)) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: "Recording rule"
    });
  }

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
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

 }),

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

 "./public/app/features/alerting/unified/hooks/useFolder.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "W": () => ( useFolder)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var _state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
 var _utils_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
 var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useFolder(uid) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const folderRequests = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ ._)(state => state.folders);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (uid) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_2__ .sw)(uid));
    }
  }, [dispatch, uid]);

  if (uid) {
    const request = folderRequests[uid] || _utils_redux__WEBPACK_IMPORTED_MODULE_3__ .oq;
    return {
      folder: request.result,
      loading: request.loading
    };
  }

  return {
    loading: false
  };
}

 }),

 "./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "M": () => ( useIsRuleEditable)
 });
 var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/services/context_srv.ts");
 var _utils_access_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
 var _utils_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
 var _useFolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFolder.ts");
 var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");





function useIsRuleEditable(rulesSourceName, rule) {
  var _dataSources$rulesSou, _dataSources$rulesSou2, _dataSources$rulesSou3;

  const dataSources = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_4__ ._)(state => state.dataSources);
  const folderUID = rule && (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__ .Pc)(rule) ? rule.grafana_alert.namespace_uid : undefined;
  const rulePermission = (0,_utils_access_control__WEBPACK_IMPORTED_MODULE_1__ .Bz)(rulesSourceName);
  const hasEditPermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__ .Vt.hasAccess(rulePermission.update, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__ .Vt.isEditor);
  const hasRemovePermission = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__ .Vt.hasAccess(rulePermission.delete, app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_0__ .Vt.isEditor);
  const {
    folder,
    loading
  } = (0,_useFolder__WEBPACK_IMPORTED_MODULE_3__ .W)(folderUID);

  if (!rule) {
    return {
      isEditable: false,
      isRemovable: false,
      loading: false
    };
  } 


  if ((0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__ .Pc)(rule)) {
    if (!folderUID) {
      throw new Error(`Rule ${rule.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);
    }

    return {
      isEditable: hasEditPermission && (folder === null || folder === void 0 ? void 0 : folder.canSave),
      isRemovable: hasRemovePermission && (folder === null || folder === void 0 ? void 0 : folder.canSave),
      loading
    };
  } 


  const isRulerAvailable = Boolean((_dataSources$rulesSou = dataSources[rulesSourceName]) === null || _dataSources$rulesSou === void 0 ? void 0 : (_dataSources$rulesSou2 = _dataSources$rulesSou.result) === null || _dataSources$rulesSou2 === void 0 ? void 0 : _dataSources$rulesSou2.rulerConfig);
  return {
    isEditable: hasEditPermission && isRulerAvailable,
    isRemovable: hasRemovePermission && isRulerAvailable,
    loading: (_dataSources$rulesSou3 = dataSources[rulesSourceName]) === null || _dataSources$rulesSou3 === void 0 ? void 0 : _dataSources$rulesSou3.loading
  };
}

 })

}]);