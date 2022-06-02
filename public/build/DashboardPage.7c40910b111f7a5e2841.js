(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[5296],{

 "./public/app/features/alerting/getAlertingValidationMessage.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "E": () => ( getAlertingValidationMessage),
   "z": () => ( getDefaultCondition)
 });
const getDefaultCondition = () => ({
  type: 'query',
  query: {
    params: ['A', '5m', 'now']
  },
  reducer: {
    type: 'avg',
    params: []
  },
  evaluator: {
    type: 'gt',
    params: [null]
  },
  operator: {
    type: 'and'
  }
});
const getAlertingValidationMessage = async (transformations, targets, datasourceSrv, datasource) => {
  if (targets.length === 0) {
    return 'Could not find any metric queries';
  }

  if (transformations && transformations.length) {
    return 'Transformations are not supported in alert queries';
  }

  let alertingNotSupported = 0;
  let templateVariablesNotSupported = 0;

  for (const target of targets) {
    const dsRef = target.datasource || datasource;
    const ds = await datasourceSrv.get(dsRef);

    if (!ds.meta.alerting) {
      alertingNotSupported++;
    } else if (ds.targetContainsTemplate && ds.targetContainsTemplate(target)) {
      templateVariablesNotSupported++;
    }
  }

  if (alertingNotSupported === targets.length) {
    return 'The datasource does not support alerting queries';
  }

  if (templateVariablesNotSupported === targets.length) {
    return 'Template variables are not supported in alert queries';
  }

  return '';
};

 }),

 "./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "F": () => ( DynamicTableWithGuidelines)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var _DynamicTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["renderExpandedContent"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const DynamicTableWithGuidelines = _ref => {
  let {
    renderExpandedContent
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_3__ .t, Object.assign({
    renderExpandedContent: renderExpandedContent ? (item, index, items) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [!(index === items.length - 1) && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.contentGuideline, styles.guideline)
      }), renderExpandedContent(item, index, items)]
    }) : undefined,
    renderPrefixHeader: () => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.relative,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.headerGuideline, styles.guideline)
      })
    }),
    renderPrefixCell: (_, index, items) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.relative,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.topGuideline, styles.guideline)
      }), !(index === items.length - 1) && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.bottomGuideline, styles.guideline)
      })]
    })
  }, props));
};
const getStyles = theme => ({
  relative: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    position: relative;
    height: 100%;
  `,
  guideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    left: -19px;
    border-left: 1px solid ${theme.colors.border.medium};
    position: absolute;

    ${theme.breakpoints.down('md')} {
      display: none;
    }
  `,
  topGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 18px;
    border-bottom: 1px solid ${theme.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,
  bottomGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: 50%;
    bottom: 0;
  `,
  contentGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,
  headerGuideline: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    top: -25px;
    bottom: 0;
  `
});

 }),

 "./public/app/features/alerting/unified/components/RuleLocation.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "V": () => ( RuleLocation)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;







const RuleLocation = _ref => {
  let {
    namespace,
    group
  } = _ref;

  if (!group) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: namespace
    });
  }

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [namespace, " ", _Icon || (_Icon = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "angle-right"
    })), " ", group]
  });
};



 }),

 "./public/app/features/alerting/unified/components/rules/RulesTable.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

__webpack_require__.d(__webpack_exports__, {
  "i": () => ( RulesTable)
});


var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var useHasRuler = __webpack_require__("./public/app/features/alerting/unified/hooks/useHasRuler.ts");
var constants = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
var DynamicTable = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
var DynamicTableWithGuidelines = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx");
var RuleLocation = __webpack_require__("./public/app/features/alerting/unified/components/RuleLocation.tsx");
var AlertLabels = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
var DetailsField = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
var RuleDetailsActionButtons = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx");
var RuleDetailsAnnotations = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx");
var RuleDetailsDataSources = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx");
var RuleDetailsExpression = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx");
var RuleDetailsMatchingInstances = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;












const RuleDetails = _ref => {
  let {
    rule
  } = _ref;
  const styles = (0,src.useStyles2)(getStyles);
  const {
    promRule,
    namespace: {
      rulesSource
    }
  } = rule;
  const annotations = Object.entries(rule.annotations).filter(_ref2 => {
    let [_, value] = _ref2;
    return !!value.trim();
  });
  return (0,jsx_runtime.jsxs)("div", {
    children: [(0,jsx_runtime.jsx)(RuleDetailsActionButtons.f, {
      rule: rule,
      rulesSource: rulesSource
    }), (0,jsx_runtime.jsxs)("div", {
      className: styles.wrapper,
      children: [(0,jsx_runtime.jsxs)("div", {
        className: styles.leftSide,
        children: [!!rule.labels && !!Object.keys(rule.labels).length && (0,jsx_runtime.jsx)(DetailsField.C, {
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
      }), (0,jsx_runtime.jsx)("div", {
        className: styles.rightSide,
        children: (0,jsx_runtime.jsx)(RuleDetailsDataSources.C, {
          rulesSource: rulesSource,
          rule: rule
        })
      })]
    }), (0,jsx_runtime.jsx)(RuleDetailsMatchingInstances.M, {
      promRule: promRule
    })]
  });
};
const getStyles = theme => ({
  wrapper: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    ${theme.breakpoints.down('md')} {
      flex-direction: column;
    }
  `,
  leftSide: emotion_css_esm.css`
    flex: 1;
  `,
  rightSide: emotion_css_esm.css`
    ${theme.breakpoints.up('md')} {
      padding-left: 90px;
      width: 300px;
    }
  `
});
var RuleHealth = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleHealth.tsx");
var RuleState = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleState.tsx");
;












const RulesTable = _ref => {
  let {
    rules,
    className,
    showGuidelines = false,
    emptyMessage = 'No rules found.',
    showGroupColumn = false,
    showSummaryColumn = false
  } = _ref;
  const styles = (0,src.useStyles2)(RulesTable_getStyles);
  const wrapperClass = (0,emotion_css_esm.cx)(styles.wrapper, className, {
    [styles.wrapperMargin]: showGuidelines
  });
  const items = (0,react.useMemo)(() => {
    const seenKeys = [];
    return rules.map((rule, ruleIdx) => {
      var _rule$promRule;

      let key = JSON.stringify([(_rule$promRule = rule.promRule) === null || _rule$promRule === void 0 ? void 0 : _rule$promRule.type, rule.labels, rule.query, rule.name, rule.annotations]);

      if (seenKeys.includes(key)) {
        key += `-${ruleIdx}`;
      }

      seenKeys.push(key);
      return {
        id: key,
        data: rule
      };
    });
  }, [rules]);
  const columns = useColumns(showSummaryColumn, showGroupColumn);

  if (!rules.length) {
    return (0,jsx_runtime.jsx)("div", {
      className: (0,emotion_css_esm.cx)(wrapperClass, styles.emptyMessage),
      children: emptyMessage
    });
  }

  const TableComponent = showGuidelines ? DynamicTableWithGuidelines.F : DynamicTable.t;
  return (0,jsx_runtime.jsx)("div", {
    className: wrapperClass,
    "data-testid": "rules-table",
    children: (0,jsx_runtime.jsx)(TableComponent, {
      cols: columns,
      isExpandable: true,
      items: items,
      renderExpandedContent: _ref2 => {
        let {
          data: rule
        } = _ref2;
        return (0,jsx_runtime.jsx)(RuleDetails, {
          rule: rule
        });
      }
    })
  });
};
const RulesTable_getStyles = theme => ({
  wrapperMargin: emotion_css_esm.css`
    ${theme.breakpoints.up('md')} {
      margin-left: 36px;
    }
  `,
  emptyMessage: emotion_css_esm.css`
    padding: ${theme.spacing(1)};
  `,
  wrapper: emotion_css_esm.css`
    width: auto;
    background-color: ${theme.colors.background.secondary};
    border-radius: ${theme.shape.borderRadius()};
  `
});

function useColumns(showSummaryColumn, showGroupColumn) {
  const hasRuler = (0,useHasRuler.h)();
  return (0,react.useMemo)(() => {
    const columns = [{
      id: 'state',
      label: 'State',
      renderCell: _ref3 => {
        let {
          data: rule
        } = _ref3;
        const {
          namespace
        } = rule;
        const {
          rulesSource
        } = namespace;
        const {
          promRule,
          rulerRule
        } = rule;
        const isDeleting = !!(hasRuler(rulesSource) && promRule && !rulerRule);
        const isCreating = !!(hasRuler(rulesSource) && rulerRule && !promRule);
        return (0,jsx_runtime.jsx)(RuleState.p, {
          rule: rule,
          isDeleting: isDeleting,
          isCreating: isCreating
        });
      },
      size: '165px'
    }, {
      id: 'name',
      label: 'Name',
      renderCell: _ref4 => {
        let {
          data: rule
        } = _ref4;
        return rule.name;
      },
      size: 5
    }, {
      id: 'health',
      label: 'Health',
      renderCell: _ref5 => {
        let {
          data: {
            promRule
          }
        } = _ref5;
        return promRule ? (0,jsx_runtime.jsx)(RuleHealth.V, {
          rule: promRule
        }) : null;
      },
      size: '75px'
    }];

    if (showSummaryColumn) {
      columns.push({
        id: 'summary',
        label: 'Summary',
        renderCell: _ref6 => {
          var _rule$annotations$Ann;

          let {
            data: rule
          } = _ref6;
          return (_rule$annotations$Ann = rule.annotations[constants.q6.summary]) !== null && _rule$annotations$Ann !== void 0 ? _rule$annotations$Ann : '';
        },
        size: 5
      });
    }

    if (showGroupColumn) {
      columns.push({
        id: 'group',
        label: 'Group',
        renderCell: _ref7 => {
          let {
            data: rule
          } = _ref7;
          const {
            namespace,
            group
          } = rule; 

          const isUngrouped = group.name === 'default';
          const groupName = isUngrouped ? (0,jsx_runtime.jsx)(RuleLocation.V, {
            namespace: namespace.name
          }) : (0,jsx_runtime.jsx)(RuleLocation.V, {
            namespace: namespace.name,
            group: group.name
          });
          return groupName;
        },
        size: 5
      });
    }

    return columns;
  }, [hasRuler, showSummaryColumn, showGroupColumn]);
}

 }),

 "./public/app/features/alerting/unified/hooks/useHasRuler.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
 __webpack_require__.d(__webpack_exports__, {
   "h": () => ( useHasRuler)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
 var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");



function useHasRuler() {
  const rulerRules = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__ ._)(state => state.rulerRules);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(rulesSource => {
    var _rulerRules$rulesSour;

    const rulesSourceName = typeof rulesSource === 'string' ? rulesSource : rulesSource.name;
    return rulesSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ .GC || !!((_rulerRules$rulesSour = rulerRules[rulesSourceName]) !== null && _rulerRules$rulesSour !== void 0 && _rulerRules$rulesSour.result);
  }, [rulerRules]);
}

 }),

 "./public/app/features/dashboard/containers/DashboardPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "DashboardPage": () => ( DashboardPage),
  "UnthemedDashboardPage": () => ( UnthemedDashboardPage),
  "default": () => ( containers_DashboardPage),
  "getStyles": () => ( DashboardPage_getStyles),
  "mapStateToProps": () => ( DashboardPage_mapStateToProps)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var classnames = __webpack_require__("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js");
var classnames_default = __webpack_require__.n(classnames);
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var actions = __webpack_require__("./public/app/core/actions/index.ts");
var Branding = __webpack_require__("./public/app/core/components/Branding/Branding.tsx");
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
var kiosk = __webpack_require__("./public/app/core/navigation/kiosk.ts");
var dashboardWatcher = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
var types = __webpack_require__("./public/app/types/index.ts");
var types_events = __webpack_require__("./public/app/types/events.ts");
var state_actions = __webpack_require__("./public/app/features/variables/state/actions.ts");
var utils = __webpack_require__("./public/app/features/variables/utils.ts");
var DashNav = __webpack_require__("./public/app/features/dashboard/components/DashNav/index.ts");
var errors = __webpack_require__("./public/app/core/utils/errors.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;






const DashboardFailed = _ref => {
  let {
    initError
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(getStyles);

  if (!initError) {
    return null;
  }

  return (0,jsx_runtime.jsx)("div", {
    className: styles.dashboardLoading,
    children: (0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      severity: types.F1.Error,
      title: initError.message,
      children: (0,errors.i)(initError.error)
    })
  });
};
const getStyles = theme => {
  return {
    dashboardLoading: emotion_css_esm.css`
      height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
    `
  };
};
;
var _Spinner;







const DashboardLoading = _ref => {
  let {
    initPhase
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(DashboardLoading_getStyles);

  const cancelVariables = () => {
    grafana_runtime_src.locationService.push('/');
  };

  return (0,jsx_runtime.jsx)("div", {
    className: styles.dashboardLoading,
    children: (0,jsx_runtime.jsx)("div", {
      className: styles.dashboardLoadingText,
      children: (0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
        spacing: "md",
        children: [(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
          align: "center",
          justify: "center",
          spacing: "xs",
          children: [_Spinner || (_Spinner = (0,jsx_runtime.jsx)(grafana_ui_src.Spinner, {
            inline: true
          })), " ", initPhase]
        }), ' ', (0,jsx_runtime.jsx)(grafana_ui_src.HorizontalGroup, {
          align: "center",
          justify: "center",
          children: (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            variant: "secondary",
            size: "md",
            icon: "repeat",
            onClick: cancelVariables,
            children: "Cancel loading dashboard"
          })
        })]
      })
    })
  });
};
const DashboardLoading_getStyles = theme => {
  const slowStartThreshold = '0.5s';
  const invisibleToVisible = emotion_css_esm.keyframes`
    0% { opacity: 0%; }
    100% { opacity: 100%; }
  `;
  return {
    dashboardLoading: emotion_css_esm.css`
      height: 60vh;
      display: flex;
      opacity: 0%;
      align-items: center;
      justify-content: center;
      animation: ${invisibleToVisible} 0s step-end ${slowStartThreshold} 1 normal forwards;
    `,
    dashboardLoadingText: emotion_css_esm.css`
      font-size: ${theme.typography.size.lg};
    `
  };
};
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var react_router = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
var app_events = __webpack_require__("./public/app/core/app_events.ts");
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
var useAsync = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
var useDebounce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
var api = __webpack_require__("./public/app/features/library-panels/state/api.ts");
var library_panels_styles = __webpack_require__("./public/app/features/library-panels/styles.ts");
var usePanelSave = __webpack_require__("./public/app/features/library-panels/utils/usePanelSave.ts");
;
var _Icon, _p, _thead;









const SaveLibraryPanelModal = _ref => {
  let {
    panel,
    folderId,
    isUnsavedPrompt,
    onDismiss,
    onConfirm,
    onDiscard
  } = _ref;
  const [searchString, setSearchString] = (0,react.useState)('');
  const dashState = (0,useAsync.Z)(async () => {
    const searchHits = await (0,api.E8)(panel.libraryPanel.uid);

    if (searchHits.length > 0) {
      return searchHits.map(dash => dash.title);
    }

    return [];
  }, [panel.libraryPanel.uid]);
  const [filteredDashboards, setFilteredDashboards] = (0,react.useState)([]);
  (0,useDebounce.Z)(() => {
    if (!dashState.value) {
      return setFilteredDashboards([]);
    }

    return setFilteredDashboards(dashState.value.filter(dashName => dashName.toLowerCase().includes(searchString.toLowerCase())));
  }, 300, [dashState.value, searchString]);
  const {
    saveLibraryPanel
  } = (0,usePanelSave.E)();
  const styles = (0,grafana_ui_src.useStyles)(library_panels_styles.J);
  const discardAndClose = (0,react.useCallback)(() => {
    onDiscard();
  }, [onDiscard]);
  const title = isUnsavedPrompt ? 'Unsaved library panel changes' : 'Save library panel';
  return (0,jsx_runtime.jsx)(grafana_ui_src.Modal, {
    title: title,
    icon: "save",
    onDismiss: onDismiss,
    isOpen: true,
    children: (0,jsx_runtime.jsxs)("div", {
      children: [(0,jsx_runtime.jsxs)("p", {
        className: styles.textInfo,
        children: ['This update will affect ', (0,jsx_runtime.jsxs)("strong", {
          children: [panel.libraryPanel.meta.connectedDashboards, ' ', panel.libraryPanel.meta.connectedDashboards === 1 ? 'dashboard' : 'dashboards', "."]
        }), "The following dashboards using the panel will be affected:"]
      }), (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        className: styles.dashboardSearch,
        prefix: _Icon || (_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: "search"
        })),
        placeholder: "Search affected dashboards",
        value: searchString,
        onChange: e => setSearchString(e.currentTarget.value)
      }), dashState.loading ? _p || (_p = (0,jsx_runtime.jsx)("p", {
        children: "Loading connected dashboards..."
      })) : (0,jsx_runtime.jsxs)("table", {
        className: styles.myTable,
        children: [_thead || (_thead = (0,jsx_runtime.jsx)("thead", {
          children: (0,jsx_runtime.jsx)("tr", {
            children: (0,jsx_runtime.jsx)("th", {
              children: "Dashboard name"
            })
          })
        })), (0,jsx_runtime.jsx)("tbody", {
          children: filteredDashboards.map((dashName, i) => (0,jsx_runtime.jsx)("tr", {
            children: (0,jsx_runtime.jsx)("td", {
              children: dashName
            })
          }, `dashrow-${i}`))
        })]
      }), (0,jsx_runtime.jsxs)(grafana_ui_src.Modal.ButtonRow, {
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "secondary",
          onClick: onDismiss,
          fill: "outline",
          children: "Cancel"
        }), isUnsavedPrompt && (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "destructive",
          onClick: discardAndClose,
          children: "Discard"
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          onClick: () => {
            saveLibraryPanel(panel, folderId).then(() => {
              onConfirm();
            });
          },
          children: "Update all"
        })]
      })]
    })
  });
};
var DashboardModel = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");
var store = __webpack_require__("./public/app/core/store.ts");
var panel_state_actions = __webpack_require__("./public/app/features/panel/state/actions.ts");
var reducers = __webpack_require__("./public/app/features/panel/state/reducers.ts");
var state_reducers = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/state/reducers.ts");
;





function initPanelEditor(sourcePanel, dashboard) {
  return async dispatch => {
    const panel = dashboard.initEditPanel(sourcePanel);
    await dispatch((0,panel_state_actions.JI)(panel));
    dispatch((0,state_reducers.Hl)({
      panel,
      sourcePanel
    }));
  };
}
function discardPanelChanges() {
  return async (dispatch, getStore) => {
    const {
      getPanel
    } = getStore().panelEditor;
    getPanel().configRev = 0;
    dispatch((0,state_reducers.yi)(true));
  };
}
function updateDuplicateLibraryPanels(modifiedPanel, dashboard) {
  return dispatch => {
    var _modifiedPanel$librar;

    if (((_modifiedPanel$librar = modifiedPanel.libraryPanel) === null || _modifiedPanel$librar === void 0 ? void 0 : _modifiedPanel$librar.uid) === undefined || !dashboard) {
      return;
    }

    const modifiedSaveModel = modifiedPanel.getSaveModel();

    for (const panel of dashboard.panels) {
      var _panel$plugin, _modifiedPanel$plugin;

      if (skipPanelUpdate(modifiedPanel, panel)) {
        continue;
      }

      panel.restoreModel(Object.assign({}, modifiedSaveModel, (0,lodash.pick)(panel, 'gridPos', 'id'))); 

      const pluginChanged = ((_panel$plugin = panel.plugin) === null || _panel$plugin === void 0 ? void 0 : _panel$plugin.meta.id) !== ((_modifiedPanel$plugin = modifiedPanel.plugin) === null || _modifiedPanel$plugin === void 0 ? void 0 : _modifiedPanel$plugin.meta.id);
      panel.plugin = modifiedPanel.plugin;
      panel.configRev++;

      if (pluginChanged) {
        const cleanUpKey = panel.key;
        panel.generateNewKey();
        dispatch((0,reducers.bc)({
          key: panel.key,
          plugin: panel.plugin,
          cleanUpKey
        }));
      } 


      setTimeout(() => {
        panel.getQueryRunner().useLastResultFrom(modifiedPanel.getQueryRunner());
      }, 20);
    }

    if (modifiedPanel.repeat) {
      setTimeout(() => dashboard.processRepeats(), 20);
    }
  };
}
function skipPanelUpdate(modifiedPanel, panelToUpdate) {
  var _panelToUpdate$librar;

  if (((_panelToUpdate$librar = panelToUpdate.libraryPanel) === null || _panelToUpdate$librar === void 0 ? void 0 : _panelToUpdate$librar.uid) !== modifiedPanel.libraryPanel.uid) {
    return true;
  } 


  if (panelToUpdate.id && panelToUpdate.id === modifiedPanel.id) {
    return true;
  } 


  if (panelToUpdate.repeatPanelId) {
    return true;
  }

  return false;
}
function exitPanelEditor() {
  return async (dispatch, getStore) => {
    const dashboard = getStore().dashboard.getModel();
    const {
      getPanel,
      getSourcePanel,
      shouldDiscardChanges
    } = getStore().panelEditor;
    const panel = getPanel();

    if (dashboard) {
      dashboard.exitPanelEditor();
    }

    if (!shouldDiscardChanges) {
      const modifiedSaveModel = panel.getSaveModel();
      const sourcePanel = getSourcePanel();
      const panelTypeChanged = sourcePanel.type !== panel.type;
      dispatch(updateDuplicateLibraryPanels(panel, dashboard));
      sourcePanel.restoreModel(modifiedSaveModel);
      sourcePanel.configRev++; 

      if (panelTypeChanged) {
        sourcePanel.plugin = panel.plugin;
        const cleanUpKey = sourcePanel.key;
        sourcePanel.generateNewKey();
        await dispatch((0,reducers.bc)({
          key: sourcePanel.key,
          plugin: panel.plugin,
          cleanUpKey
        }));
      } 


      setTimeout(() => {
        sourcePanel.getQueryRunner().useLastResultFrom(panel.getQueryRunner());
        sourcePanel.render();
      }, 20);
    }

    dispatch((0,panel_state_actions.qj)(panel.key));
    dispatch((0,state_reducers.my)());
  };
}
function updatePanelEditorUIState(uiState) {
  return (dispatch, getStore) => {
    const nextState = Object.assign({}, getStore().panelEditor.ui, uiState);
    dispatch((0,state_reducers.K9)(nextState));

    try {
      store.Z.setObject(state_reducers.jy, nextState);
    } catch (error) {
      console.error(error);
    }
  };
}
var SaveDashboardButton = __webpack_require__("./public/app/features/dashboard/components/SaveDashboard/SaveDashboardButton.tsx");
;
var _h;







const UnsavedChangesModal = _ref => {
  let {
    dashboard,
    onSaveSuccess,
    onDiscard,
    onDismiss
  } = _ref;
  return (0,jsx_runtime.jsxs)(grafana_ui_src.Modal, {
    isOpen: true,
    title: "Unsaved changes",
    onDismiss: onDismiss,
    icon: "exclamation-triangle",
    className: emotion_css_esm.css`
        width: 500px;
      `,
    children: [_h || (_h = (0,jsx_runtime.jsx)("h5", {
      children: "Do you want to save your changes?"
    })), (0,jsx_runtime.jsxs)(grafana_ui_src.Modal.ButtonRow, {
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "secondary",
        onClick: onDismiss,
        fill: "outline",
        children: "Cancel"
      }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "destructive",
        onClick: onDiscard,
        children: "Discard"
      }), (0,jsx_runtime.jsx)(SaveDashboardButton.i, {
        dashboard: dashboard,
        onSaveSuccess: onSaveSuccess
      })]
    })]
  });
};
;














const DashboardPrompt = react.memo(_ref => {
  let {
    dashboard
  } = _ref;
  const [state, setState] = (0,react.useState)({
    original: null
  });
  const dispatch = (0,es.useDispatch)();
  const {
    original,
    originalPath
  } = state;
  const {
    showModal,
    hideModal
  } = (0,react.useContext)(grafana_ui_src.ModalsContext);
  (0,react.useEffect)(() => {
    const timeoutId = setTimeout(() => {
      const originalPath = grafana_runtime_src.locationService.getLocation().pathname;
      const original = dashboard.getSaveModelClone();
      setState({
        originalPath,
        original
      });
    }, 1000);
    const savedEventUnsub = app_events.h.subscribe(types_events.Jd, () => {
      const original = dashboard.getSaveModelClone();
      setState({
        originalPath,
        original
      });
    });
    return () => {
      clearTimeout(timeoutId);
      savedEventUnsub.unsubscribe();
    };
  }, [dashboard, originalPath]);
  (0,react.useEffect)(() => {
    const handleUnload = event => {
      if (ignoreChanges(dashboard, original)) {
        return;
      }

      if (hasChanges(dashboard, original)) {
        event.preventDefault(); 

        event.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [dashboard, original]);

  const onHistoryBlock = location => {
    const panelInEdit = dashboard.panelInEdit;
    const search = new URLSearchParams(location.search); 

    if (panelInEdit && panelInEdit.libraryPanel && panelInEdit.hasChanged && !search.has('editPanel')) {
      showModal(SaveLibraryPanelModal, {
        isUnsavedPrompt: true,
        panel: dashboard.panelInEdit,
        folderId: dashboard.meta.folderId,
        onConfirm: () => {
          hideModal();
          moveToBlockedLocationAfterReactStateUpdate(location);
        },
        onDiscard: () => {
          dispatch(discardPanelChanges());
          moveToBlockedLocationAfterReactStateUpdate(location);
          hideModal();
        },
        onDismiss: hideModal
      });
      return false;
    } 


    if (originalPath === location.pathname || !original) {
      if (panelInEdit && !search.has('editPanel')) {
        dispatch(exitPanelEditor());
      }

      return true;
    }

    if (ignoreChanges(dashboard, original)) {
      return true;
    }

    if (!hasChanges(dashboard, original)) {
      return true;
    }

    showModal(UnsavedChangesModal, {
      dashboard: dashboard,
      onSaveSuccess: () => {
        hideModal();
        moveToBlockedLocationAfterReactStateUpdate(location);
      },
      onDiscard: () => {
        setState(Object.assign({}, state, {
          original: null
        }));
        hideModal();
        moveToBlockedLocationAfterReactStateUpdate(location);
      },
      onDismiss: hideModal
    });
    return false;
  };

  return (0,jsx_runtime.jsx)(react_router.NL, {
    when: true,
    message: onHistoryBlock
  });
});
DashboardPrompt.displayName = 'DashboardPrompt';

function moveToBlockedLocationAfterReactStateUpdate(location) {
  if (location) {
    setTimeout(() => grafana_runtime_src.locationService.push(location), 10);
  }
}


function ignoreChanges(current, original) {
  if (!original) {
    return true;
  } 


  if (!context_srv.Vt.isSignedIn) {
    return true;
  }

  if (!current || !current.meta) {
    return true;
  }

  const {
    canSave,
    fromScript,
    fromFile
  } = current.meta;

  if (!context_srv.Vt.isEditor && !canSave) {
    return true;
  }

  return !canSave || fromScript || fromFile;
}

function cleanDashboardFromIgnoredChanges(dashData) {
  const model = new DashboardModel.f(dashData); 

  model.expandRows();
  const dash = model.getSaveModelClone(); 

  dash.time = 0;
  dash.refresh = 0;
  dash.schemaVersion = 0;
  dash.timezone = 0; 

  delete dash.iteration;
  dash.panels = (0,lodash.filter)(dash.panels, panel => {
    if (panel.repeatPanelId) {
      return false;
    } 


    panel.scopedVars = undefined; 

    if (panel.legend) {
      delete panel.legend.sort;
      delete panel.legend.sortDesc;
    }

    return true;
  }); 

  (0,lodash.each)(dash.getVariables(), variable => {
    variable.current = null;
    variable.options = null;
    variable.filters = null;
  });
  return dash;
}

function hasChanges(current, original) {
  const currentClean = cleanDashboardFromIgnoredChanges(current.getSaveModelClone());
  const originalClean = cleanDashboardFromIgnoredChanges(original);
  const currentTimepicker = (0,lodash.find)(currentClean.nav, {
    type: 'timepicker'
  });
  const originalTimepicker = (0,lodash.find)(originalClean.nav, {
    type: 'timepicker'
  });

  if (currentTimepicker && originalTimepicker) {
    currentTimepicker.now = originalTimepicker.now;
  }

  const currentJson = JSON.stringify(currentClean, null);
  const originalJson = JSON.stringify(originalClean, null);
  return currentJson !== originalJson;
}
var DashboardSettings = __webpack_require__("./public/app/features/dashboard/components/DashboardSettings/index.ts");
var selectors = __webpack_require__("./public/app/features/panel/state/selectors.ts");
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
;



const usePanelLatestData = (panel, options, checkSchema) => {
  const querySubscription = (0,react.useRef)();
  const [latestData, setLatestData] = (0,react.useState)();
  (0,react.useEffect)(() => {
    let lastRev = -1;
    let lastUpdate = 0;
    querySubscription.current = panel.getQueryRunner().getData(options).subscribe({
      next: data => {
        if (checkSchema) {
          var _data$structureRev;

          if (lastRev === data.structureRev) {
            const now = Date.now();
            const elapsed = now - lastUpdate;

            if (elapsed < 10000) {
              return; 
            }

            lastUpdate = now;
          }

          lastRev = (_data$structureRev = data.structureRev) !== null && _data$structureRev !== void 0 ? _data$structureRev : -1;
        }

        setLatestData(data);
      }
    });
    return () => {
      if (querySubscription.current) {
        querySubscription.current.unsubscribe();
      }
    };
  }, [panel, options.withFieldConfig, options.withTransforms]);
  return {
    data: latestData,
    error: latestData && latestData.error,
    isLoading: latestData ? latestData.state === grafana_data_src.LoadingState.Loading : true,
    hasSeries: latestData ? !!latestData.series : false
  };
};
var InspectDataTab = __webpack_require__("./public/app/features/inspector/InspectDataTab.tsx");
var InspectErrorTab = __webpack_require__("./public/app/features/inspector/InspectErrorTab.tsx");
var InspectJSONTab = __webpack_require__("./public/app/features/inspector/InspectJSONTab.tsx");
;
var _div;



const InspectMetadataTab = _ref => {
  var _metadataDatasource$c;

  let {
    data,
    metadataDatasource
  } = _ref;

  if (!metadataDatasource || !((_metadataDatasource$c = metadataDatasource.components) !== null && _metadataDatasource$c !== void 0 && _metadataDatasource$c.MetadataInspector)) {
    return _div || (_div = (0,jsx_runtime.jsx)("div", {
      children: "No Metadata Inspector"
    }));
  }

  return (0,jsx_runtime.jsx)(metadataDatasource.components.MetadataInspector, {
    datasource: metadataDatasource,
    data: data.series
  });
};
var InspectStatsTab = __webpack_require__("./public/app/features/inspector/InspectStatsTab.tsx");
var QueryInspector = __webpack_require__("./public/app/features/inspector/QueryInspector.tsx");
var inspector_types = __webpack_require__("./public/app/features/inspector/types.ts");
;













const InspectContent = _ref => {
  let {
    panel,
    plugin,
    dashboard,
    tabs,
    data,
    isDataLoading,
    dataOptions,
    metadataDatasource,
    defaultTab,
    onDataOptionsChange,
    onClose
  } = _ref;
  const [currentTab, setCurrentTab] = (0,react.useState)(defaultTab !== null && defaultTab !== void 0 ? defaultTab : inspector_types.q.Data);

  if (!plugin) {
    return null;
  }

  const error = data === null || data === void 0 ? void 0 : data.error; 

  let activeTab = currentTab;

  if (!tabs.find(item => item.value === currentTab)) {
    activeTab = inspector_types.q.JSON;
  }

  const title = (0,grafana_runtime_src.getTemplateSrv)().replace(panel.title, panel.scopedVars, 'text');
  return (0,jsx_runtime.jsxs)(grafana_ui_src.Drawer, {
    title: `Inspect: ${title || 'Panel'}`,
    subtitle: data && formatStats(data),
    width: "50%",
    onClose: onClose,
    expandable: true,
    scrollableContent: true,
    tabs: (0,jsx_runtime.jsx)(grafana_ui_src.TabsBar, {
      children: tabs.map((t, index) => {
        return (0,jsx_runtime.jsx)(grafana_ui_src.Tab, {
          label: t.label,
          active: t.value === activeTab,
          onChangeTab: () => setCurrentTab(t.value || inspector_types.q.Data)
        }, `${t.value}-${index}`);
      })
    }),
    children: [activeTab === inspector_types.q.Data && (0,jsx_runtime.jsx)(InspectDataTab.E, {
      panel: panel,
      data: data && data.series,
      isLoading: isDataLoading,
      options: dataOptions,
      onOptionsChange: onDataOptionsChange,
      timeZone: dashboard.timezone
    }), data && activeTab === inspector_types.q.Meta && (0,jsx_runtime.jsx)(InspectMetadataTab, {
      data: data,
      metadataDatasource: metadataDatasource
    }), activeTab === inspector_types.q.JSON && (0,jsx_runtime.jsx)(InspectJSONTab.W, {
      panel: panel,
      dashboard: dashboard,
      data: data,
      onClose: onClose
    }), activeTab === inspector_types.q.Error && (0,jsx_runtime.jsx)(InspectErrorTab.l, {
      error: error
    }), data && activeTab === inspector_types.q.Stats && (0,jsx_runtime.jsx)(InspectStatsTab.f, {
      data: data,
      timeZone: dashboard.getTimezone()
    }), data && activeTab === inspector_types.q.Query && (0,jsx_runtime.jsx)(QueryInspector.D, {
      panel: panel,
      data: data.series,
      onRefreshQuery: () => panel.refresh()
    })]
  });
};

function formatStats(data) {
  const {
    request
  } = data;

  if (!request) {
    return '';
  }

  const queryCount = request.targets.length;
  const requestTime = request.endTime ? request.endTime - request.startTime : 0;
  const formatted = (0,grafana_data_src.formattedValueToString)((0,grafana_data_src.getValueFormat)('ms')(requestTime));
  return `${queryCount} queries with total query time of ${formatted}`;
}
var lib_useAsync = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/lib/useAsync.js");
var PanelEditor_utils = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/utils.ts");
;






const useDatasourceMetadata = data => {
  const state = (0,lib_useAsync.Z)(async () => {
    var _data$request;

    const targets = (data === null || data === void 0 ? void 0 : (_data$request = data.request) === null || _data$request === void 0 ? void 0 : _data$request.targets) || [];

    if (data && data.series && targets.length) {
      for (const frame of data.series) {
        if (frame.meta && frame.meta.custom) {
          var _dataSource$component;

          const dataSource = await (0,grafana_runtime_src.getDataSourceSrv)().get(targets[0].datasource);

          if (dataSource && (_dataSource$component = dataSource.components) !== null && _dataSource$component !== void 0 && _dataSource$component.MetadataInspector) {
            return dataSource;
          }
        }
      }
    }

    return undefined;
  }, [data]);
  return state.value;
};

const useInspectTabs = (panel, dashboard, plugin, error, metaDs) => {
  return (0,react.useMemo)(() => {
    const tabs = [];

    if ((0,PanelEditor_utils.sY)(plugin)) {
      tabs.push({
        label: 'Data',
        value: inspector_types.q.Data
      });
      tabs.push({
        label: 'Stats',
        value: inspector_types.q.Stats
      });
    }

    if (metaDs) {
      tabs.push({
        label: 'Meta Data',
        value: inspector_types.q.Meta
      });
    }

    tabs.push({
      label: 'JSON',
      value: inspector_types.q.JSON
    });

    if (error && error.message) {
      tabs.push({
        label: 'Error',
        value: inspector_types.q.Error
      });
    } 


    const supplier = window.grafanaPanelInspectActionSupplier;

    if (supplier && supplier.getActions(panel)) {
      tabs.push({
        label: 'Actions',
        value: inspector_types.q.Actions
      });
    }

    if (dashboard.meta.canEdit && (0,PanelEditor_utils.sY)(plugin)) {
      tabs.push({
        label: 'Query',
        value: inspector_types.q.Query
      });
    }

    return tabs;
  }, [panel, plugin, metaDs, dashboard, error]);
};
;










const PanelInspectorUnconnected = _ref => {
  let {
    panel,
    dashboard,
    plugin
  } = _ref;
  const [dataOptions, setDataOptions] = (0,react.useState)({
    withTransforms: false,
    withFieldConfig: true
  });
  const location = (0,react_router.TH)();
  const {
    data,
    isLoading,
    error
  } = usePanelLatestData(panel, dataOptions, true);
  const metaDs = useDatasourceMetadata(data);
  const tabs = useInspectTabs(panel, dashboard, plugin, error, metaDs);
  const defaultTab = new URLSearchParams(location.search).get('inspectTab');

  const onClose = () => {
    grafana_runtime_src.locationService.partial({
      inspect: null,
      inspectTab: null
    });
  };

  if (!plugin) {
    return null;
  }

  return (0,jsx_runtime.jsx)(InspectContent, {
    dashboard: dashboard,
    panel: panel,
    plugin: plugin,
    defaultTab: defaultTab,
    tabs: tabs,
    data: data,
    isDataLoading: isLoading,
    dataOptions: dataOptions,
    onDataOptionsChange: setDataOptions,
    metadataDatasource: metaDs,
    onClose: onClose
  });
};

const mapStateToProps = (state, props) => {
  const panelState = (0,selectors.i)(state, props.panel);

  if (!panelState) {
    return {
      plugin: null
    };
  }

  return {
    plugin: panelState.plugin
  };
};

const PanelInspector = (0,es.connect)(mapStateToProps)(PanelInspectorUnconnected);
var index_esm = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
var Subscription = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
var prop_types = __webpack_require__("./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js");
var prop_types_default = __webpack_require__.n(prop_types);
var react_style_proptype_src = __webpack_require__("./.yarn/cache/react-style-proptype-npm-3.2.2-d7241ef02d-f0e646e148.zip/node_modules/react-style-proptype/src/index.js");
var src_default = __webpack_require__.n(react_style_proptype_src);
var react_lifecycles_compat_es = __webpack_require__("./.yarn/cache/react-lifecycles-compat-npm-3.0.4-d5e285a39e-a904b0fc0a.zip/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
;





function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var Pane = function (_React$PureComponent) {
  _inherits(Pane, _React$PureComponent);

  var _super = _createSuper(Pane);

  function Pane() {
    _classCallCheck(this, Pane);

    return _super.apply(this, arguments);
  }

  _createClass(Pane, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          split = _this$props.split,
          styleProps = _this$props.style,
          size = _this$props.size,
          eleRef = _this$props.eleRef;
      var classes = ['Pane', split, className];
      var style = {
        flex: 1,
        position: 'relative',
        outline: 'none'
      };

      if (size !== undefined) {
        if (split === 'vertical') {
          style.width = size;
        } else {
          style.height = size;
          style.display = 'flex';
        }

        style.flex = 'none';
      }

      style = Object.assign({}, style, styleProps || {});
      return react.createElement("div", {
        ref: eleRef,
        className: classes.join(' '),
        style: style
      }, children);
    }
  }]);

  return Pane;
}(react.PureComponent);

Pane.propTypes = {
  className: (prop_types_default()).string.isRequired,
  children: (prop_types_default()).node.isRequired,
  size: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  split: prop_types_default().oneOf(['vertical', 'horizontal']),
  style: (src_default()),
  eleRef: (prop_types_default()).func
};
Pane.defaultProps = {};

var RESIZER_DEFAULT_CLASSNAME = 'Resizer';

var Resizer = function (_React$Component) {
  _inherits(Resizer, _React$Component);

  var _super = _createSuper(Resizer);

  function Resizer() {
    _classCallCheck(this, Resizer);

    return _super.apply(this, arguments);
  }

  _createClass(Resizer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          _onClick = _this$props.onClick,
          _onDoubleClick = _this$props.onDoubleClick,
          _onMouseDown = _this$props.onMouseDown,
          _onTouchEnd = _this$props.onTouchEnd,
          _onTouchStart = _this$props.onTouchStart,
          resizerClassName = _this$props.resizerClassName,
          split = _this$props.split,
          style = _this$props.style;
      var classes = [resizerClassName, split, className];
      return react.createElement("span", {
        role: "presentation",
        className: classes.join(' '),
        style: style,
        onMouseDown: function onMouseDown(event) {
          return _onMouseDown(event);
        },
        onTouchStart: function onTouchStart(event) {
          event.preventDefault();

          _onTouchStart(event);
        },
        onTouchEnd: function onTouchEnd(event) {
          event.preventDefault();

          _onTouchEnd(event);
        },
        onClick: function onClick(event) {
          if (_onClick) {
            event.preventDefault();

            _onClick(event);
          }
        },
        onDoubleClick: function onDoubleClick(event) {
          if (_onDoubleClick) {
            event.preventDefault();

            _onDoubleClick(event);
          }
        }
      });
    }
  }]);

  return Resizer;
}(react.Component);

Resizer.propTypes = {
  className: (prop_types_default()).string.isRequired,
  onClick: (prop_types_default()).func,
  onDoubleClick: (prop_types_default()).func,
  onMouseDown: (prop_types_default()).func.isRequired,
  onTouchStart: (prop_types_default()).func.isRequired,
  onTouchEnd: (prop_types_default()).func.isRequired,
  split: prop_types_default().oneOf(['vertical', 'horizontal']),
  style: (src_default()),
  resizerClassName: (prop_types_default()).string.isRequired
};
Resizer.defaultProps = {
  resizerClassName: RESIZER_DEFAULT_CLASSNAME
};

function unFocus(document, window) {
  if (document.selection) {
    document.selection.empty();
  } else {
    try {
      window.getSelection().removeAllRanges(); 
    } catch (e) {}
  }
}

function getDefaultSize(defaultSize, minSize, maxSize, draggedSize) {
  if (typeof draggedSize === 'number') {
    var min = typeof minSize === 'number' ? minSize : 0;
    var max = typeof maxSize === 'number' && maxSize >= 0 ? maxSize : Infinity;
    return Math.max(min, Math.min(max, draggedSize));
  }

  if (defaultSize !== undefined) {
    return defaultSize;
  }

  return minSize;
}

function removeNullChildren(children) {
  return react.Children.toArray(children).filter(function (c) {
    return c;
  });
}

var SplitPane = function (_React$Component) {
  _inherits(SplitPane, _React$Component);

  var _super = _createSuper(SplitPane);

  function SplitPane(props) {
    var _this;

    _classCallCheck(this, SplitPane);

    _this = _super.call(this, props);
    _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
    _this.onTouchStart = _this.onTouchStart.bind(_assertThisInitialized(_this));
    _this.onMouseMove = _this.onMouseMove.bind(_assertThisInitialized(_this));
    _this.onTouchMove = _this.onTouchMove.bind(_assertThisInitialized(_this));
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this)); 

    var size = props.size,
        defaultSize = props.defaultSize,
        minSize = props.minSize,
        maxSize = props.maxSize,
        primary = props.primary;
    var initialSize = size !== undefined ? size : getDefaultSize(defaultSize, minSize, maxSize, null);
    _this.state = {
      active: false,
      resized: false,
      pane1Size: primary === 'first' ? initialSize : undefined,
      pane2Size: primary === 'second' ? initialSize : undefined,
      instanceProps: {
        size: size
      }
    };
    return _this;
  }

  _createClass(SplitPane, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mouseup', this.onMouseUp);
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('touchmove', this.onTouchMove);
      this.setState(SplitPane.getSizeUpdate(this.props, this.state));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', this.onMouseUp);
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('touchmove', this.onTouchMove);
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      var eventWithTouches = Object.assign({}, event, {
        touches: [{
          clientX: event.clientX,
          clientY: event.clientY
        }]
      });
      this.onTouchStart(eventWithTouches);
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(event) {
      var _this$props = this.props,
          allowResize = _this$props.allowResize,
          onDragStarted = _this$props.onDragStarted,
          split = _this$props.split;

      if (allowResize) {
        unFocus(document, window);
        var position = split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;

        if (typeof onDragStarted === 'function') {
          onDragStarted();
        }

        this.setState({
          active: true,
          position: position
        });
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      var eventWithTouches = Object.assign({}, event, {
        touches: [{
          clientX: event.clientX,
          clientY: event.clientY
        }]
      });
      this.onTouchMove(eventWithTouches);
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(event) {
      var _this$props2 = this.props,
          allowResize = _this$props2.allowResize,
          maxSize = _this$props2.maxSize,
          minSize = _this$props2.minSize,
          onChange = _this$props2.onChange,
          split = _this$props2.split,
          step = _this$props2.step;
      var _this$state = this.state,
          active = _this$state.active,
          position = _this$state.position;

      if (allowResize && active) {
        unFocus(document, window);
        var isPrimaryFirst = this.props.primary === 'first';
        var ref = isPrimaryFirst ? this.pane1 : this.pane2;
        var ref2 = isPrimaryFirst ? this.pane2 : this.pane1;

        if (ref) {
          var node = ref;
          var node2 = ref2;

          if (node.getBoundingClientRect) {
            var width = node.getBoundingClientRect().width;
            var height = node.getBoundingClientRect().height;
            var current = split === 'vertical' ? event.touches[0].clientX : event.touches[0].clientY;
            var size = split === 'vertical' ? width : height;
            var positionDelta = position - current;

            if (step) {
              if (Math.abs(positionDelta) < step) {
                return;
              } 


              positionDelta = ~~(positionDelta / step) * step;
            }

            var sizeDelta = isPrimaryFirst ? positionDelta : -positionDelta;
            var pane1Order = parseInt(window.getComputedStyle(node).order);
            var pane2Order = parseInt(window.getComputedStyle(node2).order);

            if (pane1Order > pane2Order) {
              sizeDelta = -sizeDelta;
            }

            var newMaxSize = maxSize;

            if (maxSize !== undefined && maxSize <= 0) {
              var splitPane = this.splitPane;

              if (split === 'vertical') {
                newMaxSize = splitPane.getBoundingClientRect().width + maxSize;
              } else {
                newMaxSize = splitPane.getBoundingClientRect().height + maxSize;
              }
            }

            var newSize = size - sizeDelta;
            var newPosition = position - positionDelta;

            if (newSize < minSize) {
              newSize = minSize;
            } else if (maxSize !== undefined && newSize > newMaxSize) {
              newSize = newMaxSize;
            } else {
              this.setState({
                position: newPosition,
                resized: true
              });
            }

            if (onChange) onChange(newSize);
            this.setState(_defineProperty({
              draggedSize: newSize
            }, isPrimaryFirst ? 'pane1Size' : 'pane2Size', newSize));
          }
        }
      }
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      var _this$props3 = this.props,
          allowResize = _this$props3.allowResize,
          onDragFinished = _this$props3.onDragFinished;
      var _this$state2 = this.state,
          active = _this$state2.active,
          draggedSize = _this$state2.draggedSize;

      if (allowResize && active) {
        if (typeof onDragFinished === 'function') {
          onDragFinished(draggedSize);
        }

        this.setState({
          active: false
        });
      }
    } 

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          allowResize = _this$props4.allowResize,
          children = _this$props4.children,
          className = _this$props4.className,
          onResizerClick = _this$props4.onResizerClick,
          onResizerDoubleClick = _this$props4.onResizerDoubleClick,
          paneClassName = _this$props4.paneClassName,
          pane1ClassName = _this$props4.pane1ClassName,
          pane2ClassName = _this$props4.pane2ClassName,
          paneStyle = _this$props4.paneStyle,
          pane1StyleProps = _this$props4.pane1Style,
          pane2StyleProps = _this$props4.pane2Style,
          resizerClassName = _this$props4.resizerClassName,
          resizerStyle = _this$props4.resizerStyle,
          split = _this$props4.split,
          styleProps = _this$props4.style;
      var _this$state3 = this.state,
          pane1Size = _this$state3.pane1Size,
          pane2Size = _this$state3.pane2Size;
      var disabledClass = allowResize ? '' : 'disabled';
      var resizerClassNamesIncludingDefault = resizerClassName ? "".concat(resizerClassName, " ").concat(RESIZER_DEFAULT_CLASSNAME) : resizerClassName;
      var notNullChildren = removeNullChildren(children);

      var style = _objectSpread2({
        display: 'flex',
        flex: 1,
        height: '100%',
        position: 'absolute',
        outline: 'none',
        overflow: 'hidden',
        MozUserSelect: 'text',
        WebkitUserSelect: 'text',
        msUserSelect: 'text',
        userSelect: 'text'
      }, styleProps);

      if (split === 'vertical') {
        Object.assign(style, {
          flexDirection: 'row',
          left: 0,
          right: 0
        });
      } else {
        Object.assign(style, {
          bottom: 0,
          flexDirection: 'column',
          minHeight: '100%',
          top: 0,
          width: '100%'
        });
      }

      var classes = ['SplitPane', className, split, disabledClass];

      var pane1Style = _objectSpread2({}, paneStyle, {}, pane1StyleProps);

      var pane2Style = _objectSpread2({}, paneStyle, {}, pane2StyleProps);

      var pane1Classes = ['Pane1', paneClassName, pane1ClassName].join(' ');
      var pane2Classes = ['Pane2', paneClassName, pane2ClassName].join(' ');
      return react.createElement("div", {
        className: classes.join(' '),
        ref: function ref(node) {
          _this2.splitPane = node;
        },
        style: style
      }, react.createElement(Pane, {
        className: pane1Classes,
        key: "pane1",
        eleRef: function eleRef(node) {
          _this2.pane1 = node;
        },
        size: pane1Size,
        split: split,
        style: pane1Style
      }, notNullChildren[0]), react.createElement(Resizer, {
        className: disabledClass,
        onClick: onResizerClick,
        onDoubleClick: onResizerDoubleClick,
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        onTouchEnd: this.onMouseUp,
        key: "resizer",
        resizerClassName: resizerClassNamesIncludingDefault,
        split: split,
        style: resizerStyle || {}
      }), react.createElement(Pane, {
        className: pane2Classes,
        key: "pane2",
        eleRef: function eleRef(node) {
          _this2.pane2 = node;
        },
        size: pane2Size,
        split: split,
        style: pane2Style
      }, notNullChildren[1]));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return SplitPane.getSizeUpdate(nextProps, prevState);
    }
  }, {
    key: "getSizeUpdate",
    value: function getSizeUpdate(props, state) {
      var newState = {};
      var instanceProps = state.instanceProps;

      if (instanceProps.size === props.size && props.size !== undefined) {
        return {};
      }

      var newSize = props.size !== undefined ? props.size : getDefaultSize(props.defaultSize, props.minSize, props.maxSize, state.draggedSize);

      if (props.size !== undefined) {
        newState.draggedSize = newSize;
      }

      var isPanel1Primary = props.primary === 'first';
      newState[isPanel1Primary ? 'pane1Size' : 'pane2Size'] = newSize;
      newState[isPanel1Primary ? 'pane2Size' : 'pane1Size'] = undefined;
      newState.instanceProps = {
        size: props.size
      };
      return newState;
    }
  }]);

  return SplitPane;
}(react.Component);

SplitPane.propTypes = {
  allowResize: (prop_types_default()).bool,
  children: prop_types_default().arrayOf((prop_types_default()).node).isRequired,
  className: (prop_types_default()).string,
  primary: prop_types_default().oneOf(['first', 'second']),
  minSize: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  maxSize: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  defaultSize: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  size: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number]),
  split: prop_types_default().oneOf(['vertical', 'horizontal']),
  onDragStarted: (prop_types_default()).func,
  onDragFinished: (prop_types_default()).func,
  onChange: (prop_types_default()).func,
  onResizerClick: (prop_types_default()).func,
  onResizerDoubleClick: (prop_types_default()).func,
  style: (src_default()),
  resizerStyle: (src_default()),
  paneClassName: (prop_types_default()).string,
  pane1ClassName: (prop_types_default()).string,
  pane2ClassName: (prop_types_default()).string,
  paneStyle: (src_default()),
  pane1Style: (src_default()),
  pane2Style: (src_default()),
  resizerClassName: (prop_types_default()).string,
  step: (prop_types_default()).number
};
SplitPane.defaultProps = {
  allowResize: true,
  minSize: 50,
  primary: 'first',
  split: 'vertical',
  paneClassName: '',
  pane1ClassName: '',
  pane2ClassName: ''
};
(0,react_lifecycles_compat_es.O)(SplitPane);

 const dist_index_esm = (SplitPane);


var config = __webpack_require__("./public/app/core/config.ts");
;
function SplitPaneWrapper_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SplitPaneWrapper_Pane;

(function (Pane) {
  Pane[Pane["Right"] = 0] = "Right";
  Pane[Pane["Top"] = 1] = "Top";
})(SplitPaneWrapper_Pane || (SplitPaneWrapper_Pane = {}));

class SplitPaneWrapper extends react.PureComponent {
  constructor() {
    super(...arguments);

    SplitPaneWrapper_defineProperty(this, "rafToken", (0,react.createRef)());

    SplitPaneWrapper_defineProperty(this, "updateSplitPaneSize", () => {
      if (this.rafToken.current !== undefined) {
        window.cancelAnimationFrame(this.rafToken.current);
      }

      this.rafToken.current = window.requestAnimationFrame(() => {
        this.forceUpdate();
      });
    });

    SplitPaneWrapper_defineProperty(this, "onDragFinished", (pane, size) => {
      document.body.style.cursor = 'auto'; 

      if (!size) {
        return;
      }

      const {
        updateUiState
      } = this.props;

      if (pane === SplitPaneWrapper_Pane.Top) {
        updateUiState({
          topPaneSize: size / window.innerHeight
        });
      } else {
        updateUiState({
          rightPaneSize: size / window.innerWidth
        });
      }
    });

    SplitPaneWrapper_defineProperty(this, "onDragStarted", () => {
      document.body.style.cursor = 'row-resize';
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateSplitPaneSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSplitPaneSize);
  }

  renderHorizontalSplit() {
    const {
      leftPaneComponents,
      uiState
    } = this.props;
    const styles = SplitPaneWrapper_getStyles(config.vc.theme);
    const topPaneSize = uiState.topPaneSize >= 1 ? uiState.topPaneSize : uiState.topPaneSize * window.innerHeight;

    if (Array.isArray(leftPaneComponents)) {
      return (0,jsx_runtime.jsx)(dist_index_esm, {
        split: "horizontal",
        maxSize: -200,
        primary: "first",
        size: topPaneSize,
        pane2Style: {
          minHeight: 0
        },
        resizerClassName: styles.resizerH,
        onDragStarted: this.onDragStarted,
        onDragFinished: size => this.onDragFinished(SplitPaneWrapper_Pane.Top, size),
        children: leftPaneComponents
      });
    }

    return leftPaneComponents;
  }

  render() {
    const {
      rightPaneVisible,
      rightPaneComponents,
      uiState
    } = this.props; 

    const styles = SplitPaneWrapper_getStyles(config.vc.theme); 

    const rightPaneSize = uiState.rightPaneSize <= 1 ? uiState.rightPaneSize * window.innerWidth : uiState.rightPaneSize;

    if (!rightPaneVisible) {
      return this.renderHorizontalSplit();
    }

    return (0,jsx_runtime.jsxs)(dist_index_esm, {
      split: "vertical",
      maxSize: -300,
      size: rightPaneSize,
      primary: "second",
      resizerClassName: styles.resizerV,
      onDragStarted: () => document.body.style.cursor = 'col-resize',
      onDragFinished: size => this.onDragFinished(SplitPaneWrapper_Pane.Right, size),
      children: [this.renderHorizontalSplit(), rightPaneComponents]
    });
  }

}

SplitPaneWrapper_defineProperty(SplitPaneWrapper, "defaultProps", {
  rightPaneVisible: true
});

const SplitPaneWrapper_getStyles = (0,grafana_ui_src.stylesFactory)(theme => {
  const handleColor = theme.palette.blue95;
  const paneSpacing = theme.spacing.md;
  const resizer = emotion_css_esm.css`
    position: relative;

    &::before {
      content: '';
      position: absolute;
      transition: 0.2s border-color ease-in-out;
    }

    &::after {
      background: ${theme.colors.panelBorder};
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transition: 0.2s background ease-in-out;
      transform: translate(-50%, -50%);
      border-radius: 4px;
    }

    &:hover {
      &::before {
        border-color: ${handleColor};
      }

      &::after {
        background: ${handleColor};
      }
    }
  `;
  return {
    resizerV: (0,emotion_css_esm.cx)(resizer, emotion_css_esm.css`
        cursor: col-resize;
        width: ${paneSpacing};

        &::before {
          border-right: 1px solid transparent;
          height: 100%;
          left: 50%;
          transform: translateX(-50%);
        }

        &::after {
          height: 200px;
          width: 4px;
        }
      `),
    resizerH: (0,emotion_css_esm.cx)(resizer, emotion_css_esm.css`
        height: ${paneSpacing};
        cursor: row-resize;
        margin-left: ${paneSpacing};

        &::before {
          border-top: 1px solid transparent;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
        }

        &::after {
          height: 4px;
          width: 200px;
        }
      `)
  };
});
var core = __webpack_require__("./public/app/core/core.ts");
var adapters = __webpack_require__("./public/app/features/variables/adapters.ts");
var variables_types = __webpack_require__("./public/app/features/variables/types.ts");
;
var PickerRenderer_div;








const PickerRenderer = props => {
  const PickerToRender = (0,react.useMemo)(() => adapters.z.get(props.variable.type).picker, [props.variable]);

  if (!props.variable) {
    return PickerRenderer_div || (PickerRenderer_div = (0,jsx_runtime.jsx)("div", {
      children: "Couldn't load variable"
    }));
  }

  return (0,jsx_runtime.jsxs)("div", {
    className: "gf-form",
    children: [(0,jsx_runtime.jsx)(PickerLabel, {
      variable: props.variable
    }), props.variable.hide !== variables_types.bU.hideVariable && PickerToRender && (0,jsx_runtime.jsx)(PickerToRender, {
      variable: props.variable
    })]
  });
};

function PickerLabel(_ref) {
  let {
    variable
  } = _ref;
  const labelOrName = (0,react.useMemo)(() => variable.label || variable.name, [variable]);

  if (variable.hide !== variables_types.bU.dontHide) {
    return null;
  }

  const elementId = `var-${variable.id}`;

  if (variable.description) {
    return (0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
      content: variable.description,
      placement: 'bottom',
      children: (0,jsx_runtime.jsx)("label", {
        className: "gf-form-label gf-form-label--variable",
        "data-testid": src.wl.pages.Dashboard.SubMenu.submenuItemLabels(labelOrName),
        htmlFor: elementId,
        children: labelOrName
      })
    });
  }

  return (0,jsx_runtime.jsx)("label", {
    className: "gf-form-label gf-form-label--variable",
    "data-testid": src.wl.pages.Dashboard.SubMenu.submenuItemLabels(labelOrName),
    htmlFor: elementId,
    children: labelOrName
  });
}
;






const SubMenuItems = _ref => {
  let {
    variables
  } = _ref;
  const [visibleVariables, setVisibleVariables] = (0,react.useState)([]);
  (0,react.useEffect)(() => {
    setVisibleVariables(variables.filter(state => state.hide !== variables_types.bU.hideVariable));
  }, [variables]);

  if (visibleVariables.length === 0) {
    return null;
  }

  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: visibleVariables.map(variable => {
      return (0,jsx_runtime.jsx)("div", {
        className: "submenu-item gf-form-inline",
        "data-testid": src.wl.pages.Dashboard.SubMenu.submenuItem,
        children: (0,jsx_runtime.jsx)(PickerRenderer, {
          variable: variable
        })
      }, variable.id);
    })
  });
};
var profile_state_reducers = __webpack_require__("./public/app/features/profile/state/reducers.ts");
var UnlinkModal = __webpack_require__("./public/app/features/library-panels/components/UnlinkModal/UnlinkModal.tsx");
var guard = __webpack_require__("./public/app/features/library-panels/guard.ts");
var library_panels_utils = __webpack_require__("./public/app/features/library-panels/utils.ts");
var state_selectors = __webpack_require__("./public/app/features/variables/state/selectors.ts");
var DashboardPanel = __webpack_require__("./public/app/features/dashboard/dashgrid/DashboardPanel.tsx");
var DashNavTimeControls = __webpack_require__("./public/app/features/dashboard/components/DashNav/DashNavTimeControls.tsx");
var SaveDashboardDrawer = __webpack_require__("./public/app/features/dashboard/components/SaveDashboard/SaveDashboardDrawer.tsx");
;

function saveSectionOpenState(id, isOpen) {
  store.Z.set(`panel-edit-section-${id}`, isOpen ? 'true' : 'false');
}
function getSectionOpenState(id, defaultValue) {
  return store.Z.getBool(`panel-edit-section-${id}`, defaultValue);
}
;
function AngularPanelOptions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const AngularPanelOptions_mapStateToProps = (state, props) => {
  var _getPanelStateForMode;

  return {
    angularPanelComponent: (_getPanelStateForMode = (0,selectors.i)(state, props.panel)) === null || _getPanelStateForMode === void 0 ? void 0 : _getPanelStateForMode.angularComponent
  };
};

const mapDispatchToProps = {
  changePanelPlugin: panel_state_actions.Kc
};
const connector = (0,es.connect)(AngularPanelOptions_mapStateToProps, mapDispatchToProps);
class AngularPanelOptionsUnconnected extends react.PureComponent {
  constructor(props) {
    super(props);

    AngularPanelOptions_defineProperty(this, "element", void 0);

    AngularPanelOptions_defineProperty(this, "angularOptions", void 0);
  }

  componentDidMount() {
    this.loadAngularOptions();
  }

  componentDidUpdate(prevProps) {
    if (this.props.plugin !== prevProps.plugin || this.props.angularPanelComponent !== prevProps.angularPanelComponent) {
      this.cleanUpAngularOptions();
    }

    this.loadAngularOptions();
  }

  componentWillUnmount() {
    this.cleanUpAngularOptions();
  }

  cleanUpAngularOptions() {
    if (this.angularOptions) {
      this.angularOptions.destroy();
      this.angularOptions = null;
    }
  }

  loadAngularOptions() {
    const {
      panel,
      angularPanelComponent,
      changePanelPlugin
    } = this.props;

    if (!this.element || !angularPanelComponent || this.angularOptions) {
      return;
    }

    const scope = angularPanelComponent.getScope(); 

    if (!scope.$$childHead) {
      setTimeout(() => {
        this.forceUpdate();
      });
      return;
    }

    const panelCtrl = scope.$$childHead.ctrl;
    panelCtrl.initEditMode();

    panelCtrl.onPluginTypeChange = plugin => {
      changePanelPlugin({
        panel,
        pluginId: plugin.id
      });
    };

    let template = '';

    for (let i = 0; i < panelCtrl.editorTabs.length; i++) {
      const tab = panelCtrl.editorTabs[i];
      tab.isOpen = getSectionOpenState(tab.title, i === 0);
      template += `
      <div class="panel-options-group" ng-cloak>
        <div class="panel-options-group__header" ng-click="toggleOptionGroup(${i})" aria-label="${tab.title} section">
          <div class="panel-options-group__icon">
            <icon name="ctrl.editorTabs[${i}].isOpen ? 'angle-down' : 'angle-right'"></icon>
          </div>
          <div class="panel-options-group__title">${tab.title}</div>
        </div>
        <div class="panel-options-group__body" ng-if="ctrl.editorTabs[${i}].isOpen">
          <panel-editor-tab editor-tab="ctrl.editorTabs[${i}]" ctrl="ctrl"></panel-editor-tab>
        </div>
      </div>
      `;
    }

    const loader = (0,grafana_runtime_src.getAngularLoader)();
    const scopeProps = {
      ctrl: panelCtrl,
      toggleOptionGroup: index => {
        const tab = panelCtrl.editorTabs[index];
        tab.isOpen = !tab.isOpen;
        saveSectionOpenState(tab.title, tab.isOpen);
      }
    };
    this.angularOptions = loader.load(this.element, scopeProps, template);
    this.angularOptions.digest();
  }

  render() {
    return (0,jsx_runtime.jsx)("div", {
      ref: elem => this.element = elem
    });
  }

}
const AngularPanelOptions = (0,es.connect)(AngularPanelOptions_mapStateToProps, mapDispatchToProps)(AngularPanelOptionsUnconnected);
var OptionsPaneCategory = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/OptionsPaneCategory.tsx");
var link_srv = __webpack_require__("./public/app/features/panel/panellinks/link_srv.ts");
var main = __webpack_require__("./.yarn/__virtual__/react-highlight-words-virtual-d2265e757c/0/cache/react-highlight-words-npm-0.17.0-880b4a18ed-41b3d0e451.zip/node_modules/react-highlight-words/dist/main.js");
var main_default = __webpack_require__.n(main);
;








const DynamicConfigValueEditor = _ref => {
  var _item$category, _div;

  let {
    property,
    context,
    registry,
    onChange,
    onRemove,
    isSystemOverride,
    searchQuery
  } = _ref;
  const theme = (0,grafana_ui_src.useTheme)();
  const styles = DynamicConfigValueEditor_getStyles(theme);
  const item = registry === null || registry === void 0 ? void 0 : registry.getIfExists(property.id);

  if (!item) {
    return null;
  }

  const isCollapsible = Array.isArray(property.value) || property.id === grafana_data_src.FieldConfigProperty.Thresholds || property.id === grafana_data_src.FieldConfigProperty.Links || property.id === grafana_data_src.FieldConfigProperty.Mappings;
  const labelCategory = (_item$category = item.category) === null || _item$category === void 0 ? void 0 : _item$category.filter(c => c !== item.name);
  let editor;

  const renderLabel = function () {
    let includeDescription = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    let includeCounter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return function () {
      let isExpanded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
        justify: "space-between",
        children: [(0,jsx_runtime.jsxs)(grafana_ui_src.Label, {
          category: labelCategory,
          description: includeDescription ? item.description : undefined,
          children: [(0,jsx_runtime.jsx)((main_default()), {
            textToHighlight: item.name,
            searchWords: [searchQuery],
            highlightClassName: 'search-fragment-highlight'
          }), !isExpanded && includeCounter && item.getItemsCount && (0,jsx_runtime.jsx)(grafana_ui_src.Counter, {
            value: item.getItemsCount(property.value)
          })]
        }), !isSystemOverride && (_div || (_div = (0,jsx_runtime.jsx)("div", {
          children: (0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
            name: "times",
            onClick: onRemove
          })
        })))]
      });
    };
  };


  if (isCollapsible) {
    editor = (0,jsx_runtime.jsx)(OptionsPaneCategory.u, {
      id: item.name,
      renderTitle: renderLabel(false, true),
      className: emotion_css_esm.css`
          padding-left: 0;
          padding-right: 0;
        `,
      isNested: true,
      isOpenDefault: property.value !== undefined,
      children: (0,jsx_runtime.jsx)(item.override, {
        value: property.value,
        onChange: value => {
          onChange(value);
        },
        item: item,
        context: context
      })
    });
  } else {
    editor = (0,jsx_runtime.jsx)("div", {
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
        label: renderLabel()(),
        description: item.description,
        children: (0,jsx_runtime.jsx)(item.override, {
          value: property.value,
          onChange: value => {
            onChange(value);
          },
          item: item,
          context: context
        })
      })
    });
  }

  return (0,jsx_runtime.jsx)("div", {
    className: (0,emotion_css_esm.cx)(isCollapsible && styles.collapsibleOverrideEditor, !isCollapsible && 'dynamicConfigValueEditor--nonCollapsible'),
    children: editor
  });
};
const DynamicConfigValueEditor_getStyles = (0,grafana_ui_src.stylesFactory)(theme => {
  return {
    collapsibleOverrideEditor: emotion_css_esm.css`
      label: collapsibleOverrideEditor;
      & + .dynamicConfigValueEditor--nonCollapsible {
        margin-top: ${theme.spacing.formSpacingBase}px;
      }
    `
  };
});
var OptionsPaneCategoryDescriptor = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/OptionsPaneCategoryDescriptor.tsx");
var OptionsPaneItemDescriptor = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/OptionsPaneItemDescriptor.tsx");
;
var OverrideCategoryTitle_Icon;






const OverrideCategoryTitle = _ref => {
  let {
    isExpanded,
    registry,
    matcherUi,
    overrideName,
    override,
    onOverrideRemove
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(OverrideCategoryTitle_getStyles);
  const properties = override.properties.map(p => registry.getIfExists(p.id)).filter(prop => !!prop);
  const propertyNames = properties.map(p => p === null || p === void 0 ? void 0 : p.name).join(', ');
  const matcherOptions = matcherUi.optionsToLabel(override.matcher.options);
  return (0,jsx_runtime.jsxs)("div", {
    children: [(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      justify: "space-between",
      children: [(0,jsx_runtime.jsx)("div", {
        children: overrideName
      }), (0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
        name: "trash-alt",
        onClick: onOverrideRemove,
        title: "Remove override"
      })]
    }), !isExpanded && (0,jsx_runtime.jsx)("div", {
      className: styles.overrideDetails,
      children: (0,jsx_runtime.jsxs)("div", {
        className: styles.options,
        title: matcherOptions,
        children: [matcherOptions, " ", OverrideCategoryTitle_Icon || (OverrideCategoryTitle_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: "angle-right"
        })), " ", propertyNames]
      })
    })]
  });
};
OverrideCategoryTitle.displayName = 'OverrideTitle';

const OverrideCategoryTitle_getStyles = theme => {
  return {
    matcherUi: emotion_css_esm.css`
      padding: ${theme.spacing.sm};
    `,
    propertyPickerWrapper: emotion_css_esm.css`
      margin-top: ${theme.spacing.formSpacingBase * 2}px;
    `,
    overrideDetails: emotion_css_esm.css`
      font-size: ${theme.typography.size.sm};
      color: ${theme.colors.textWeak};
      font-weight: ${theme.typography.weight.regular};
    `,
    options: emotion_css_esm.css`
      overflow: hidden;
      padding-right: ${theme.spacing.xl};
    `,
    unknownLabel: emotion_css_esm.css`
      margin-bottom: 0;
    `
  };
};
;











function getFieldOverrideCategories(props, searchQuery) {
  var _props$data$series, _props$data;

  const categories = [];
  const currentFieldConfig = props.panel.fieldConfig;
  const registry = props.plugin.fieldConfigRegistry;
  const data = (_props$data$series = (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.series) !== null && _props$data$series !== void 0 ? _props$data$series : [];

  if (registry.isEmpty()) {
    return [];
  }

  const onOverrideChange = (index, override) => {
    let overrides = (0,lodash.cloneDeep)(currentFieldConfig.overrides);
    overrides[index] = override;
    props.onFieldConfigsChange(Object.assign({}, currentFieldConfig, {
      overrides
    }));
  };

  const onOverrideRemove = overrideIndex => {
    let overrides = (0,lodash.cloneDeep)(currentFieldConfig.overrides);
    overrides.splice(overrideIndex, 1);
    props.onFieldConfigsChange(Object.assign({}, currentFieldConfig, {
      overrides
    }));
  };

  const onOverrideAdd = value => {
    props.onFieldConfigsChange(Object.assign({}, currentFieldConfig, {
      overrides: [...currentFieldConfig.overrides, {
        matcher: {
          id: value.value
        },
        properties: []
      }]
    }));
  };

  const context = {
    data,
    getSuggestions: scope => (0,link_srv.PW)(data, scope),
    isOverride: true
  };

  for (let idx = 0; idx < currentFieldConfig.overrides.length; idx++) {
    const override = currentFieldConfig.overrides[idx];
    const overrideName = `Override ${idx + 1}`;
    const matcherUi = grafana_ui_src.fieldMatchersUI.get(override.matcher.id);
    const configPropertiesOptions = getOverrideProperties(registry);
    const isSystemOverride = (0,grafana_data_src.isSystemOverride)(override); 

    const forceOpen = override.properties.length === 0 ? 1 : 0;
    const category = new OptionsPaneCategoryDescriptor.j({
      title: overrideName,
      id: overrideName,
      forceOpen,
      renderTitle: function renderOverrideTitle(isExpanded) {
        return (0,jsx_runtime.jsx)(OverrideCategoryTitle, {
          override: override,
          isExpanded: isExpanded,
          registry: registry,
          overrideName: overrideName,
          matcherUi: matcherUi,
          onOverrideRemove: () => onOverrideRemove(idx)
        });
      }
    });

    const onMatcherConfigChange = options => {
      override.matcher.options = options;
      onOverrideChange(idx, override);
    };

    const onDynamicConfigValueAdd = (o, value) => {
      const registryItem = registry.get(value.value);
      const propertyConfig = {
        id: registryItem.id,
        value: registryItem.defaultValue
      };

      if (override.properties) {
        o.properties.push(propertyConfig);
      } else {
        o.properties = [propertyConfig];
      }

      onOverrideChange(idx, o);
    };


    category.addItem(new OptionsPaneItemDescriptor.a({
      title: matcherUi.name,
      render: function renderMatcherUI() {
        var _props$data$series2, _props$data2;

        return (0,jsx_runtime.jsx)(matcherUi.component, {
          id: `${matcherUi.matcher.id}-${idx}`,
          matcher: matcherUi.matcher,
          data: (_props$data$series2 = (_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.series) !== null && _props$data$series2 !== void 0 ? _props$data$series2 : [],
          options: override.matcher.options,
          onChange: onMatcherConfigChange
        });
      }
    }));

    for (let propIdx = 0; propIdx < override.properties.length; propIdx++) {
      const property = override.properties[propIdx];
      const registryItemForProperty = registry.getIfExists(property.id);

      if (!registryItemForProperty) {
        continue;
      }

      const onPropertyChange = value => {
        override.properties[propIdx].value = value;
        onOverrideChange(idx, override);
      };

      const onPropertyRemove = () => {
        override.properties.splice(propIdx, 1);
        onOverrideChange(idx, override);
      };


      category.addItem(new OptionsPaneItemDescriptor.a({
        title: registryItemForProperty.name,
        skipField: true,
        render: function renderPropertyEditor() {
          return (0,jsx_runtime.jsx)(DynamicConfigValueEditor, {
            isSystemOverride: isSystemOverride,
            onChange: onPropertyChange,
            onRemove: onPropertyRemove,
            property: property,
            registry: registry,
            context: context,
            searchQuery: searchQuery
          }, `${property.id}/${propIdx}`);
        }
      }));
    }


    if (!isSystemOverride && override.matcher.options) {
      category.addItem(new OptionsPaneItemDescriptor.a({
        title: '----------',
        skipField: true,
        render: function renderAddPropertyButton() {
          return (0,jsx_runtime.jsx)(grafana_ui_src.ValuePicker, {
            label: "Add override property",
            variant: "secondary",
            isFullWidth: true,
            icon: "plus",
            menuPlacement: "auto",
            options: configPropertiesOptions,
            onChange: v => onDynamicConfigValueAdd(override, v)
          }, "Add override property");
        }
      }));
    }

    categories.push(category);
  }

  categories.push(new OptionsPaneCategoryDescriptor.j({
    title: 'add button',
    id: 'add button',
    customRender: function renderAddButton() {
      return (0,jsx_runtime.jsx)(AddOverrideButtonContainer, {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.ValuePicker, {
          icon: "plus",
          label: "Add field override",
          variant: "secondary",
          menuPlacement: "auto",
          isFullWidth: true,
          size: "md",
          options: grafana_ui_src.fieldMatchersUI.list().filter(o => !o.excludeFromPicker).map(i => ({
            label: i.name,
            value: i.id,
            description: i.description
          })),
          onChange: value => onOverrideAdd(value)
        })
      }, "Add override");
    }
  }));
  return categories;
}

function getOverrideProperties(registry) {
  return registry.list().filter(o => !o.hideFromOverrides).map(item => {
    let label = item.name;

    if (item.category) {
      label = [...item.category, item.name].join(' > ');
    }

    return {
      label,
      value: item.id,
      description: item.description
    };
  });
}

function AddOverrideButtonContainer(_ref) {
  let {
    children
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(getBorderTopStyles);
  return (0,jsx_runtime.jsx)("div", {
    className: styles,
    children: children
  });
}

function getBorderTopStyles(theme) {
  return (0,emotion_css_esm.css)({
    borderTop: `1px solid ${theme.colors.border.weak}`,
    padding: `${theme.spacing(2)}`,
    display: 'flex'
  });
}
;






const LibraryPanelInformation = _ref => {
  var _formatDate;

  let {
    panel,
    formatDate
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(LibraryPanelInfo_getStyles);

  if (!(0,guard.V)(panel)) {
    return null;
  }

  return (0,jsx_runtime.jsxs)("div", {
    className: styles.info,
    children: [(0,jsx_runtime.jsxs)("div", {
      className: styles.libraryPanelInfo,
      children: [`Used on ${panel.libraryPanel.meta.connectedDashboards} `, panel.libraryPanel.meta.connectedDashboards === 1 ? 'dashboard' : 'dashboards']
    }), (0,jsx_runtime.jsxs)("div", {
      className: styles.libraryPanelInfo,
      children: ["Last edited on ", (_formatDate = formatDate === null || formatDate === void 0 ? void 0 : formatDate(panel.libraryPanel.meta.updated, 'L')) !== null && _formatDate !== void 0 ? _formatDate : panel.libraryPanel.meta.updated, " by", panel.libraryPanel.meta.updatedBy.avatarUrl && (0,jsx_runtime.jsx)("img", {
        width: "22",
        height: "22",
        className: styles.userAvatar,
        src: panel.libraryPanel.meta.updatedBy.avatarUrl,
        alt: `Avatar for ${panel.libraryPanel.meta.updatedBy.name}`
      }), panel.libraryPanel.meta.updatedBy.name]
    })]
  });
};

const LibraryPanelInfo_getStyles = theme => {
  return {
    info: emotion_css_esm.css`
      line-height: 1;
    `,
    libraryPanelInfo: emotion_css_esm.css`
      color: ${theme.colors.textSemiWeak};
      font-size: ${theme.typography.size.sm};
    `,
    userAvatar: emotion_css_esm.css`
      border-radius: 50%;
      box-sizing: content-box;
      width: 22px;
      height: 22px;
      padding-left: ${theme.spacing.sm};
      padding-right: ${theme.spacing.sm};
    `
  };
};
;







function getLibraryPanelOptionsCategory(props) {
  const {
    panel,
    onPanelConfigChange,
    dashboard
  } = props;
  const descriptor = new OptionsPaneCategoryDescriptor.j({
    title: 'Library panel options',
    id: 'Library panel options',
    isOpenDefault: true
  });

  if ((0,guard.V)(panel)) {
    descriptor.addItem(new OptionsPaneItemDescriptor.a({
      title: 'Name',
      value: panel.libraryPanel.name,
      popularRank: 1,
      render: function renderName() {
        return (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: "LibraryPanelFrameName",
          defaultValue: panel.libraryPanel.name,
          onBlur: e => onPanelConfigChange('libraryPanel', Object.assign({}, panel.libraryPanel, {
            name: e.currentTarget.value
          }))
        });
      }
    })).addItem(new OptionsPaneItemDescriptor.a({
      title: 'Information',
      render: function renderLibraryPanelInformation() {
        return (0,jsx_runtime.jsx)(LibraryPanelInformation, {
          panel: panel,
          formatDate: dashboard.formatDate
        });
      }
    }));
  }

  return descriptor;
}
;





const RepeatRowSelect = _ref => {
  let {
    repeat,
    onChange,
    id
  } = _ref;
  const variables = (0,es.useSelector)(state => {
    return (0,state_selectors.gt)((0,state_selectors.S_)(state), state);
  });
  const variableOptions = (0,react.useMemo)(() => {
    const options = variables.map(item => {
      return {
        label: item.name,
        value: item.name
      };
    });

    if (options.length === 0) {
      options.unshift({
        label: 'No template variables found',
        value: null
      });
    }

    options.unshift({
      label: 'Disable repeating',
      value: null
    });
    return options;
  }, [variables]);
  const onSelectChange = (0,react.useCallback)(option => onChange(option.value), [onChange]);
  return (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
    inputId: id,
    value: repeat,
    onChange: onSelectChange,
    options: variableOptions
  });
};
;







function getPanelFrameCategory(props) {
  var _panel$links;

  const {
    panel,
    onPanelConfigChange
  } = props;
  const descriptor = new OptionsPaneCategoryDescriptor.j({
    title: 'Panel options',
    id: 'Panel options',
    isOpenDefault: true
  });
  return descriptor.addItem(new OptionsPaneItemDescriptor.a({
    title: 'Title',
    value: panel.title,
    popularRank: 1,
    render: function renderTitle() {
      return (0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: "PanelFrameTitle",
        defaultValue: panel.title,
        onBlur: e => onPanelConfigChange('title', e.currentTarget.value)
      });
    }
  })).addItem(new OptionsPaneItemDescriptor.a({
    title: 'Description',
    description: panel.description,
    value: panel.description,
    render: function renderDescription() {
      return (0,jsx_runtime.jsx)(grafana_ui_src.TextArea, {
        id: "description-text-area",
        defaultValue: panel.description,
        onBlur: e => onPanelConfigChange('description', e.currentTarget.value)
      });
    }
  })).addItem(new OptionsPaneItemDescriptor.a({
    title: 'Transparent background',
    render: function renderTransparent() {
      return (0,jsx_runtime.jsx)(grafana_ui_src.Switch, {
        value: panel.transparent,
        id: "transparent-background",
        onChange: e => onPanelConfigChange('transparent', e.currentTarget.checked)
      });
    }
  })).addCategory(new OptionsPaneCategoryDescriptor.j({
    title: 'Panel links',
    id: 'Panel links',
    isOpenDefault: false,
    itemsCount: (_panel$links = panel.links) === null || _panel$links === void 0 ? void 0 : _panel$links.length
  }).addItem(new OptionsPaneItemDescriptor.a({
    title: 'Panel links',
    render: function renderLinks() {
      return (0,jsx_runtime.jsx)(grafana_ui_src.DataLinksInlineEditor, {
        links: panel.links,
        onChange: links => onPanelConfigChange('links', links),
        getSuggestions: link_srv.PR,
        data: []
      });
    }
  }))).addCategory(new OptionsPaneCategoryDescriptor.j({
    title: 'Repeat options',
    id: 'Repeat options',
    isOpenDefault: false
  }).addItem(new OptionsPaneItemDescriptor.a({
    title: 'Repeat by variable',
    description: 'Repeat this panel for each value in the selected variable. This is not visible while in edit mode. You need to go back to dashboard and then update the variable or reload the dashboard.',
    render: function renderRepeatOptions() {
      return (0,jsx_runtime.jsx)(RepeatRowSelect, {
        id: "repeat-by-variable-select",
        repeat: panel.repeat,
        onChange: value => {
          onPanelConfigChange('repeat', value);
        }
      });
    }
  })).addItem(new OptionsPaneItemDescriptor.a({
    title: 'Repeat direction',
    showIf: () => !!panel.repeat,
    render: function renderRepeatOptions() {
      const directionOptions = [{
        label: 'Horizontal',
        value: 'h'
      }, {
        label: 'Vertical',
        value: 'v'
      }];
      return (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
        options: directionOptions,
        value: panel.repeatDirection || 'h',
        onChange: value => onPanelConfigChange('repeatDirection', value)
      });
    }
  })).addItem(new OptionsPaneItemDescriptor.a({
    title: 'Max per row',
    showIf: () => Boolean(panel.repeat && panel.repeatDirection === 'h'),
    render: function renderOption() {
      const maxPerRowOptions = [2, 3, 4, 6, 8, 12].map(value => ({
        label: value.toString(),
        value
      }));
      return (0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        options: maxPerRowOptions,
        value: panel.maxPerRow,
        onChange: value => onPanelConfigChange('maxPerRow', value.value)
      });
    }
  })));
}
var getVisualizationOptions = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/getVisualizationOptions.tsx");
;

class OptionSearchEngine {
  constructor(categories, overrides) {
    this.categories = categories;
    this.overrides = overrides;
    this.categories = categories;
    this.overrides = overrides;
  }

  search(query) {
    const searchRegex = new RegExp(query, 'i');
    const optionHits = this.collectHits(this.categories, searchRegex, []);
    const sortedHits = optionHits.sort(compareHit).map(x => x.item);
    const overrideHits = this.collectHits(this.overrides, searchRegex, []);
    const sortedOverridesHits = overrideHits.sort(compareHit).map(x => x.item);
    return {
      optionHits: sortedHits,
      overrideHits: this.buildOverrideHitCategories(sortedOverridesHits),
      totalCount: this.getAllOptionsCount(this.categories)
    };
  }

  collectHits(categories, searchRegex, hits) {
    for (const category of categories) {
      const categoryNameMatch = searchRegex.test(category.props.title);

      for (const item of category.items) {
        if (searchRegex.test(item.props.title)) {
          hits.push({
            item: item,
            rank: 1
          });
          continue;
        }

        if (item.props.description && searchRegex.test(item.props.description)) {
          hits.push({
            item: item,
            rank: 2
          });
          continue;
        }

        if (categoryNameMatch) {
          hits.push({
            item: item,
            rank: 3
          });
        }
      }

      if (category.categories.length > 0) {
        this.collectHits(category.categories, searchRegex, hits);
      }
    }

    return hits;
  }

  getAllOptionsCount(categories) {
    var total = 0;

    for (const category of categories) {
      total += category.items.length;

      if (category.categories.length > 0) {
        total += this.getAllOptionsCount(category.categories);
      }
    }

    return total;
  }

  buildOverrideHitCategories(hits) {
    const categories = {};

    for (const hit of hits) {
      let category = categories[hit.parent.props.title];

      if (!category) {
        category = categories[hit.parent.props.title] = new OptionsPaneCategoryDescriptor.j(hit.parent.props); 

        category.addItem(hit.parent.items[0]);
      } 


      if (category.items[0].props.title !== hit.props.title) {
        category.addItem(hit);
      }
    }

    return Object.values(categories);
  }

}

function compareHit(left, right) {
  return left.rank - right.rank;
}
;
function getRecentOptions(allOptions) {
  const popularOptions = [];

  for (const category of allOptions) {
    for (const item of category.items) {
      if (item.props.title === 'Unit') {
        item.props.popularRank = 2;
      }

      if (item.props.title === 'Min') {
        item.props.popularRank = 3;
      }

      if (item.props.title === 'Max') {
        item.props.popularRank = 4;
      }

      if (item.props.title === 'Display name') {
        item.props.popularRank = 5;
      }

      if (item.props.popularRank) {
        popularOptions.push(item);
      }
    }
  }

  return popularOptions.sort((left, right) => left.props.popularRank - right.props.popularRank);
}
;














const OptionsPaneOptions = props => {
  const {
    plugin,
    dashboard,
    panel
  } = props;
  const [searchQuery, setSearchQuery] = (0,react.useState)('');
  const [listMode, setListMode] = (0,react.useState)(OptionFilter.All);
  const styles = (0,grafana_ui_src.useStyles2)(OptionsPaneOptions_getStyles);
  const [panelFrameOptions, vizOptions, libraryPanelOptions] = (0,react.useMemo)(() => [getPanelFrameCategory(props), (0,getVisualizationOptions.AL)(props), getLibraryPanelOptionsCategory(props)], 
  [panel.configRev, props.data, props.instanceState, searchQuery]);
  const justOverrides = (0,react.useMemo)(() => getFieldOverrideCategories(props, searchQuery), 
  [panel.configRev, props.data, props.instanceState, searchQuery]);
  const mainBoxElements = [];
  const isSearching = searchQuery.length > 0;
  const optionRadioFilters = (0,react.useMemo)(getOptionRadioFilters, []);
  const allOptions = (0,guard.V)(panel) ? [libraryPanelOptions, panelFrameOptions, ...vizOptions] : [panelFrameOptions, ...vizOptions];

  if (isSearching) {
    mainBoxElements.push(renderSearchHits(allOptions, justOverrides, searchQuery)); 

    if (props.plugin.angularPanelCtrl) {
      mainBoxElements.push( (0,jsx_runtime.jsx)("div", {
        className: styles.searchNotice,
        children: "This is an old visualization type that does not support searching all options."
      }, "Search notice"));
    }
  } else {
    switch (listMode) {
      case OptionFilter.All:
        if ((0,guard.V)(panel)) {
          mainBoxElements.push(libraryPanelOptions.render());
        } 


        mainBoxElements.push(panelFrameOptions.render()); 

        if (props.plugin.angularPanelCtrl) {
          mainBoxElements.push( (0,jsx_runtime.jsx)(AngularPanelOptions, {
            plugin: plugin,
            dashboard: dashboard,
            panel: panel
          }, "AngularOptions"));
        } 


        for (const item of vizOptions) {
          mainBoxElements.push(item.render());
        }

        for (const item of justOverrides) {
          mainBoxElements.push(item.render());
        }

        break;

      case OptionFilter.Overrides:
        for (const override of justOverrides) {
          mainBoxElements.push(override.render());
        }

        break;

      case OptionFilter.Recent:
        mainBoxElements.push( (0,jsx_runtime.jsx)(OptionsPaneCategory.u, {
          id: "Recent options",
          title: "Recent options",
          forceOpen: 1,
          children: getRecentOptions(allOptions).map(item => item.render())
        }, "Recent options"));
        break;
    }
  } 


  const showSearchRadioButtons = !isSearching && !plugin.fieldConfigRegistry.isEmpty();
  return (0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    children: [(0,jsx_runtime.jsxs)("div", {
      className: styles.formBox,
      children: [(0,jsx_runtime.jsx)("div", {
        className: styles.formRow,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
          width: 0,
          value: searchQuery,
          onChange: setSearchQuery,
          placeholder: 'Search options'
        })
      }), showSearchRadioButtons && (0,jsx_runtime.jsx)("div", {
        className: styles.formRow,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
          options: optionRadioFilters,
          value: listMode,
          fullWidth: true,
          onChange: setListMode
        })
      })]
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.scrollWrapper,
      children: (0,jsx_runtime.jsx)(grafana_ui_src.CustomScrollbar, {
        autoHeightMin: "100%",
        children: (0,jsx_runtime.jsx)("div", {
          className: styles.mainBox,
          children: mainBoxElements
        })
      })
    })]
  });
};

function getOptionRadioFilters() {
  return [{
    label: OptionFilter.All,
    value: OptionFilter.All
  }, {
    label: OptionFilter.Overrides,
    value: OptionFilter.Overrides
  }];
}

let OptionFilter;

(function (OptionFilter) {
  OptionFilter["All"] = "All";
  OptionFilter["Overrides"] = "Overrides";
  OptionFilter["Recent"] = "Recent";
})(OptionFilter || (OptionFilter = {}));

function renderSearchHits(allOptions, overrides, searchQuery) {
  const engine = new OptionSearchEngine(allOptions, overrides);
  const {
    optionHits,
    totalCount,
    overrideHits
  } = engine.search(searchQuery);
  return (0,jsx_runtime.jsxs)("div", {
    children: [(0,jsx_runtime.jsx)(OptionsPaneCategory.u, {
      id: "Found options",
      title: `Matched ${optionHits.length}/${totalCount} options`,
      forceOpen: 1,
      children: optionHits.map(hit => hit.render(searchQuery))
    }, "Normal options"), overrideHits.map(override => override.render(searchQuery))]
  }, "search results");
}

const OptionsPaneOptions_getStyles = theme => ({
  wrapper: emotion_css_esm.css`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 1 0;

    .search-fragment-highlight {
      color: ${theme.colors.warning.text};
      background: transparent;
    }
  `,
  searchBox: emotion_css_esm.css`
    display: flex;
    flex-direction: column;
    min-height: 0;
  `,
  formRow: emotion_css_esm.css`
    margin-bottom: ${theme.spacing(1)};
  `,
  formBox: emotion_css_esm.css`
    padding: ${theme.spacing(1)};
    background: ${theme.colors.background.primary};
    border: 1px solid ${theme.components.panel.borderColor};
    border-top-left-radius: ${theme.shape.borderRadius(1.5)};
    border-bottom: none;
  `,
  closeButton: emotion_css_esm.css`
    margin-left: ${theme.spacing(1)};
  `,
  searchHits: emotion_css_esm.css`
    padding: ${theme.spacing(1, 1, 0, 1)};
  `,
  scrollWrapper: emotion_css_esm.css`
    flex-grow: 1;
    min-height: 0;
  `,
  searchNotice: emotion_css_esm.css`
    font-size: ${theme.typography.size.sm};
    color: ${theme.colors.text.secondary};
    padding: ${theme.spacing(1)};
    text-align: center;
  `,
  mainBox: emotion_css_esm.css`
    background: ${theme.colors.background.primary};
    border: 1px solid ${theme.components.panel.borderColor};
    border-top: none;
    flex-grow: 1;
  `
});
var PanelPluginError = __webpack_require__("./public/app/features/panel/components/PanelPluginError.tsx");
;

const getPanelPluginWithFallback = panelType => state => {
  const plugin = state.plugins.panels[panelType];
  return plugin || (0,PanelPluginError.X)(`Panel plugin not found (${panelType})`, true);
};
;









const VisualizationButton = _ref => {
  let {
    panel
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(VisualizationButton_getStyles);
  const dispatch = (0,es.useDispatch)();
  const plugin = (0,es.useSelector)(getPanelPluginWithFallback(panel.type));
  const isPanelOptionsVisible = (0,es.useSelector)(state => state.panelEditor.ui.isPanelOptionsVisible);
  const isVizPickerOpen = (0,es.useSelector)(state => state.panelEditor.isVizPickerOpen);

  const onToggleOpen = () => {
    dispatch((0,state_reducers.g_)(!isVizPickerOpen));
  };

  const onToggleOptionsPane = () => {
    dispatch((0,state_reducers.K9)({
      isPanelOptionsVisible: !isPanelOptionsVisible
    }));
  };

  if (!plugin) {
    return null;
  }

  return (0,jsx_runtime.jsx)("div", {
    className: styles.wrapper,
    children: (0,jsx_runtime.jsxs)(grafana_ui_src.ButtonGroup, {
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
        className: styles.vizButton,
        tooltip: "Click to change visualization",
        imgSrc: plugin.meta.info.logos.small,
        isOpen: isVizPickerOpen,
        onClick: onToggleOpen,
        "aria-label": src.wl.components.PanelEditor.toggleVizPicker,
        fullWidth: true,
        children: plugin.meta.name
      }), (0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
        tooltip: isPanelOptionsVisible ? 'Close options pane' : 'Show options pane',
        icon: isPanelOptionsVisible ? 'angle-right' : 'angle-left',
        onClick: onToggleOptionsPane,
        "aria-label": src.wl.components.PanelEditor.toggleVizOptions
      })]
    })
  });
};
VisualizationButton.displayName = 'VisualizationTab';

const VisualizationButton_getStyles = theme => {
  return {
    wrapper: emotion_css_esm.css`
      display: flex;
      flex-direction: column;
    `,
    vizButton: emotion_css_esm.css`
      text-align: left;
    `
  };
};
var useLocalStorage = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js");
var Field = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
var constants = __webpack_require__("./public/app/core/constants.ts");
var DashboardSrv = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
var PanelTypeFilter = __webpack_require__("./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx");
var AddLibraryPanelModal = __webpack_require__("./public/app/features/library-panels/components/AddLibraryPanelModal/AddLibraryPanelModal.tsx");
;




const ChangeLibraryPanelModal = _ref => {
  let {
    onConfirm,
    onDismiss,
    panel
  } = _ref;
  const isLibraryPanel = (0,guard.V)(panel);
  const title = `${isLibraryPanel ? 'Changing' : 'Replace with'} library panel`;
  const body = `${isLibraryPanel ? 'Changing' : 'Replacing with a'} library panel will remove any changes since last save.`;
  return (0,jsx_runtime.jsx)(grafana_ui_src.ConfirmModal, {
    onConfirm: onConfirm,
    onDismiss: onDismiss,
    confirmText: isLibraryPanel ? 'Change' : 'Replace',
    title: title,
    body: body,
    dismissText: "Cancel",
    isOpen: true
  });
};
var LibraryPanelsView = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx");
;












const PanelLibraryOptionsGroup = _ref => {
  var _panel$libraryPanel;

  let {
    panel,
    searchQuery
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(PanelLibraryOptionsGroup_getStyles);
  const [showingAddPanelModal, setShowingAddPanelModal] = (0,react.useState)(false);
  const [changeToPanel, setChangeToPanel] = (0,react.useState)(undefined);
  const [panelFilter, setPanelFilter] = (0,react.useState)([]);
  const onPanelFilterChange = (0,react.useCallback)(plugins => {
    setPanelFilter(plugins.map(p => p.id));
  }, [setPanelFilter]);
  const dashboard = (0,DashboardSrv.h4)().getCurrent();
  const dispatch = (0,es.useDispatch)();

  const useLibraryPanel = async () => {
    if (!changeToPanel) {
      return;
    }

    setChangeToPanel(undefined);
    dispatch((0,panel_state_actions.ih)(panel, changeToPanel));
  };

  const onAddToPanelLibrary = () => {
    setShowingAddPanelModal(true);
  };

  const onChangeLibraryPanel = panel => {
    setChangeToPanel(panel);
  };

  const onDismissChangeToPanel = () => {
    setChangeToPanel(undefined);
  };

  return (0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
    spacing: "md",
    children: [!panel.libraryPanel && (0,jsx_runtime.jsx)(grafana_ui_src.VerticalGroup, {
      align: "center",
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        icon: "plus",
        onClick: onAddToPanelLibrary,
        variant: "secondary",
        fullWidth: true,
        children: "Create new library panel"
      })
    }), (0,jsx_runtime.jsx)(PanelTypeFilter.j, {
      onChange: onPanelFilterChange
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.libraryPanelsView,
      children: (0,jsx_runtime.jsx)(LibraryPanelsView.u, {
        currentPanelId: (_panel$libraryPanel = panel.libraryPanel) === null || _panel$libraryPanel === void 0 ? void 0 : _panel$libraryPanel.uid,
        searchString: searchQuery,
        panelFilter: panelFilter,
        onClickCard: onChangeLibraryPanel,
        showSecondaryActions: true
      })
    }), showingAddPanelModal && (0,jsx_runtime.jsx)(AddLibraryPanelModal.c, {
      panel: panel,
      onDismiss: () => setShowingAddPanelModal(false),
      initialFolderId: dashboard === null || dashboard === void 0 ? void 0 : dashboard.meta.folderId,
      isOpen: showingAddPanelModal
    }), changeToPanel && (0,jsx_runtime.jsx)(ChangeLibraryPanelModal, {
      panel: panel,
      onDismiss: onDismissChangeToPanel,
      onConfirm: useLibraryPanel
    })]
  });
};

const PanelLibraryOptionsGroup_getStyles = theme => {
  return {
    libraryPanelsView: emotion_css_esm.css`
      width: 100%;
    `
  };
};
var importPanelPlugin = __webpack_require__("./public/app/features/plugins/importPanelPlugin.ts");
;



const panelsToCheckFirst = ['timeseries', 'barchart', 'gauge', 'stat', 'piechart', 'bargauge', 'table', 'state-timeline', 'status-history', 'logs', 'candlestick'];
async function getAllSuggestions(data, panel) {
  const builder = new grafana_data_src.VisualizationSuggestionsBuilder(data, panel);

  for (const pluginId of panelsToCheckFirst) {
    const plugin = await (0,importPanelPlugin.U)(pluginId);
    const supplier = plugin.getSuggestionsSupplier();

    if (supplier) {
      supplier.getSuggestionsForData(builder);
    }
  }

  const list = builder.getList();

  if (builder.dataSummary.fieldCount === 0) {
    for (const plugin of Object.values(grafana_runtime_src.config.panels)) {
      if (!plugin.skipDataQuery || plugin.hideFromList) {
        continue;
      }

      list.push({
        name: plugin.name,
        pluginId: plugin.id,
        description: plugin.info.description,
        cardOptions: {
          imgSrc: plugin.info.logos.small
        }
      });
    }
  }

  return list.sort((a, b) => {
    var _b$score, _a$score;

    return ((_b$score = b.score) !== null && _b$score !== void 0 ? _b$score : grafana_data_src.VisualizationSuggestionScore.OK) - ((_a$score = a.score) !== null && _a$score !== void 0 ? _a$score : grafana_data_src.VisualizationSuggestionScore.OK);
  });
}
var PanelRenderer = __webpack_require__("./public/app/features/panel/components/PanelRenderer.tsx");
;








function VisualizationSuggestionCard(_ref) {
  var _suggestion$cardOptio, _suggestion$cardOptio2;

  let {
    data,
    suggestion,
    onChange,
    width,
    showTitle
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(VisualizationSuggestionCard_getStyles);
  const {
    innerStyles,
    outerStyles,
    renderWidth,
    renderHeight
  } = getPreviewDimensionsAndStyles(width);
  const cardOptions = (_suggestion$cardOptio = suggestion.cardOptions) !== null && _suggestion$cardOptio !== void 0 ? _suggestion$cardOptio : {};
  const commonButtonProps = {
    'aria-label': suggestion.name,
    className: styles.vizBox,
    'data-testid': src.wl.components.VisualizationPreview.card(suggestion.name),
    style: outerStyles,
    onClick: () => {
      onChange({
        pluginId: suggestion.pluginId,
        options: suggestion.options,
        fieldConfig: suggestion.fieldConfig
      });
    }
  };

  if (cardOptions.imgSrc) {
    var _suggestion$descripti;

    return (0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
      content: (_suggestion$descripti = suggestion.description) !== null && _suggestion$descripti !== void 0 ? _suggestion$descripti : suggestion.name,
      children: (0,jsx_runtime.jsxs)("button", Object.assign({}, commonButtonProps, {
        className: (0,emotion_css_esm.cx)(styles.vizBox, styles.imgBox),
        children: [(0,jsx_runtime.jsx)("div", {
          className: styles.name,
          children: suggestion.name
        }), (0,jsx_runtime.jsx)("img", {
          className: styles.img,
          src: cardOptions.imgSrc,
          alt: suggestion.name
        })]
      }))
    });
  }

  let preview = suggestion;

  if ((_suggestion$cardOptio2 = suggestion.cardOptions) !== null && _suggestion$cardOptio2 !== void 0 && _suggestion$cardOptio2.previewModifier) {
    preview = (0,lodash.cloneDeep)(suggestion);
    suggestion.cardOptions.previewModifier(preview);
  }

  return (0,jsx_runtime.jsx)("button", Object.assign({}, commonButtonProps, {
    children: (0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
      content: suggestion.name,
      children: (0,jsx_runtime.jsxs)("div", {
        style: innerStyles,
        className: styles.renderContainer,
        children: [(0,jsx_runtime.jsx)(PanelRenderer.$, {
          title: "",
          data: data,
          pluginId: suggestion.pluginId,
          width: renderWidth,
          height: renderHeight,
          options: preview.options,
          fieldConfig: preview.fieldConfig
        }), (0,jsx_runtime.jsx)("div", {
          className: styles.hoverPane
        })]
      })
    })
  }));
}

const VisualizationSuggestionCard_getStyles = theme => {
  return {
    hoverPane: (0,emotion_css_esm.css)({
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      borderRadius: theme.spacing(2),
      bottom: 0
    }),
    vizBox: emotion_css_esm.css`
      position: relative;
      background: none;
      border-radius: ${theme.shape.borderRadius(1)};
      cursor: pointer;
      border: 1px solid ${theme.colors.border.medium};

      transition: ${theme.transitions.create(['background'], {
      duration: theme.transitions.duration.short
    })};

      &:hover {
        background: ${theme.colors.background.secondary};
      }
    `,
    imgBox: emotion_css_esm.css`
      display: flex;
      flex-direction: column;
      height: 100%;

      justify-self: center;
      color: ${theme.colors.text.primary};
      width: 100%;
      display: flex;

      justify-content: center;
      align-items: center;
      text-align: center;
    `,
    name: emotion_css_esm.css`
      padding-bottom: ${theme.spacing(0.5)};
      margin-top: ${theme.spacing(-1)};
      font-size: ${theme.typography.bodySmall.fontSize};
      white-space: nowrap;
      overflow: hidden;
      color: ${theme.colors.text.secondary};
      font-weight: ${theme.typography.fontWeightMedium};
      text-overflow: ellipsis;
    `,
    img: emotion_css_esm.css`
      max-width: ${theme.spacing(8)};
      max-height: ${theme.spacing(8)};
    `,
    renderContainer: emotion_css_esm.css`
      position: absolute;
      transform-origin: left top;
      top: 6px;
      left: 6px;
    `
  };
};

function getPreviewDimensionsAndStyles(width) {
  const aspectRatio = 16 / 10;
  const showWidth = width;
  const showHeight = width * (1 / aspectRatio);
  const renderWidth = 350;
  const renderHeight = renderWidth * (1 / aspectRatio);
  const padding = 6;
  const widthFactor = (showWidth - padding * 2) / renderWidth;
  const heightFactor = (showHeight - padding * 2) / renderHeight;
  return {
    renderHeight,
    renderWidth,
    outerStyles: {
      width: showWidth,
      height: showHeight
    },
    innerStyles: {
      width: renderWidth,
      height: renderHeight,
      transform: `scale(${widthFactor}, ${heightFactor})`
    }
  };
}
;









function VisualizationSuggestions(_ref) {
  let {
    onChange,
    data,
    panel,
    searchQuery
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(VisualizationSuggestions_getStyles);
  const {
    value: suggestions
  } = (0,useAsync.Z)(() => getAllSuggestions(data, panel), [data, panel]); 

  const [showTitle, setShowTitle] = (0,useLocalStorage.Z)(`VisualizationSuggestions.showTitle`, false);
  const filteredSuggestions = filterSuggestionsBySearch(searchQuery, suggestions);
  return (0,jsx_runtime.jsx)(index_esm.Z, {
    disableHeight: true,
    style: {
      width: '100%',
      height: '100%'
    },
    children: _ref2 => {
      let {
        width
      } = _ref2;

      if (!width) {
        return null;
      }

      const columnCount = Math.floor(width / 170);
      const spaceBetween = 8 * (columnCount - 1);
      const previewWidth = (width - spaceBetween) / columnCount;
      return (0,jsx_runtime.jsxs)("div", {
        children: [(0,jsx_runtime.jsx)("div", {
          className: styles.filterRow,
          children: (0,jsx_runtime.jsx)("div", {
            className: styles.infoText,
            onClick: () => setShowTitle(!showTitle),
            children: "Based on current data"
          })
        }), (0,jsx_runtime.jsxs)("div", {
          className: styles.grid,
          style: {
            gridTemplateColumns: `repeat(auto-fill, ${previewWidth - 1}px)`
          },
          children: [filteredSuggestions.map((suggestion, index) => (0,jsx_runtime.jsx)(VisualizationSuggestionCard, {
            data: data,
            suggestion: suggestion,
            onChange: onChange,
            width: previewWidth,
            showTitle: showTitle
          }, index)), searchQuery && filteredSuggestions.length === 0 && (0,jsx_runtime.jsx)("div", {
            className: styles.infoText,
            children: "No results matched your query"
          })]
        })]
      });
    }
  });
}

function filterSuggestionsBySearch(searchQuery, suggestions) {
  if (!searchQuery || !suggestions) {
    return suggestions || [];
  }

  const regex = new RegExp(searchQuery, 'i');
  return suggestions.filter(s => regex.test(s.name) || regex.test(s.pluginId));
}

const VisualizationSuggestions_getStyles = theme => {
  return {
    heading: (0,emotion_css_esm.css)(Object.assign({}, theme.typography.h5, {
      margin: theme.spacing(0, 0.5, 1)
    })),
    filterRow: (0,emotion_css_esm.css)({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: '8px'
    }),
    infoText: (0,emotion_css_esm.css)({
      fontSize: theme.typography.bodySmall.fontSize,
      color: theme.colors.text.secondary,
      fontStyle: 'italic'
    }),
    grid: (0,emotion_css_esm.css)({
      display: 'grid',
      gridGap: theme.spacing(1),
      gridTemplateColumns: 'repeat(auto-fill, 144px)',
      marginBottom: theme.spacing(1),
      justifyContent: 'space-evenly'
    })
  };
};
var util = __webpack_require__("./public/app/features/panel/state/util.ts");
var PanelTypeCard = __webpack_require__("./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx");
;



const VizTypePickerPlugin = _ref => {
  let {
    isCurrent,
    plugin,
    onClick,
    disabled
  } = _ref;
  return (0,jsx_runtime.jsx)(PanelTypeCard.X, {
    title: plugin.name,
    plugin: plugin,
    description: plugin.info.description,
    onClick: onClick,
    isCurrent: isCurrent,
    disabled: disabled,
    showBadge: true
  });
};
VizTypePickerPlugin.displayName = 'VizTypePickerPlugin';
;
var _EmptySearchResult;







function VizTypePicker(_ref) {
  let {
    searchQuery,
    onChange,
    current,
    data
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(VizTypePicker_getStyles);
  const pluginsList = (0,react.useMemo)(() => {
    return (0,util.x)();
  }, []);
  const filteredPluginTypes = (0,react.useMemo)(() => {
    return (0,util.r)(pluginsList, searchQuery, current);
  }, [current, pluginsList, searchQuery]);

  if (filteredPluginTypes.length === 0) {
    return _EmptySearchResult || (_EmptySearchResult = (0,jsx_runtime.jsx)(grafana_ui_src.EmptySearchResult, {
      children: "Could not find anything matching your query"
    }));
  }

  return (0,jsx_runtime.jsx)("div", {
    className: styles.grid,
    children: filteredPluginTypes.map((plugin, index) => (0,jsx_runtime.jsx)(VizTypePickerPlugin, {
      disabled: false,
      isCurrent: plugin.id === current.id,
      plugin: plugin,
      onClick: e => onChange({
        pluginId: plugin.id,
        withModKey: Boolean(e.metaKey || e.ctrlKey || e.altKey)
      })
    }, plugin.id))
  });
}

const VizTypePicker_getStyles = theme => {
  return {
    grid: emotion_css_esm.css`
      max-width: 100%;
      display: grid;
      grid-gap: ${theme.spacing(0.5)};
    `,
    heading: (0,emotion_css_esm.css)(Object.assign({}, theme.typography.h5, {
      margin: theme.spacing(0, 0.5, 1)
    }))
  };
};
var PanelEditor_types = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/types.ts");
;

















const VisualizationSelectPane = _ref => {
  let {
    panel,
    data
  } = _ref;
  const plugin = (0,es.useSelector)(getPanelPluginWithFallback(panel.type));
  const [searchQuery, setSearchQuery] = (0,react.useState)('');
  const [listMode, setListMode] = (0,useLocalStorage.Z)(constants.FL, PanelEditor_types.Ok.Visualizations);
  const dispatch = (0,es.useDispatch)();
  const styles = (0,grafana_ui_src.useStyles)(VisualizationSelectPane_getStyles);
  const searchRef = (0,react.useRef)(null);
  const onVizChange = (0,react.useCallback)(pluginChange => {
    dispatch((0,panel_state_actions.Kc)(Object.assign({
      panel: panel
    }, pluginChange))); 

    if (!pluginChange.withModKey) {
      dispatch((0,state_reducers.g_)(false));
    }
  }, [dispatch, panel]); 

  (0,react.useEffect)(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [listMode]);

  const onCloseVizPicker = () => {
    dispatch((0,state_reducers.g_)(false));
  };

  if (!plugin) {
    return null;
  }

  const radioOptions = [{
    label: 'Visualizations',
    value: PanelEditor_types.Ok.Visualizations
  }, {
    label: 'Suggestions',
    value: PanelEditor_types.Ok.Suggestions
  }, {
    label: 'Library panels',
    value: PanelEditor_types.Ok.LibraryPanels,
    description: 'Reusable panels you can share between multiple dashboards.'
  }];
  return (0,jsx_runtime.jsxs)("div", {
    className: styles.openWrapper,
    children: [(0,jsx_runtime.jsxs)("div", {
      className: styles.formBox,
      children: [(0,jsx_runtime.jsxs)("div", {
        className: styles.searchRow,
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
          value: searchQuery,
          onChange: setSearchQuery,
          ref: searchRef,
          autoFocus: true,
          placeholder: "Search for..."
        }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          title: "Close",
          variant: "secondary",
          icon: "angle-up",
          className: styles.closeButton,
          "aria-label": src.wl.components.PanelEditor.toggleVizPicker,
          onClick: onCloseVizPicker
        })]
      }), (0,jsx_runtime.jsx)(Field.g, {
        className: styles.customFieldMargin,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
          options: radioOptions,
          value: listMode,
          onChange: setListMode,
          fullWidth: true
        })
      })]
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.scrollWrapper,
      children: (0,jsx_runtime.jsx)(grafana_ui_src.CustomScrollbar, {
        autoHeightMin: "100%",
        children: (0,jsx_runtime.jsxs)("div", {
          className: styles.scrollContent,
          children: [listMode === PanelEditor_types.Ok.Visualizations && (0,jsx_runtime.jsx)(VizTypePicker, {
            current: plugin.meta,
            onChange: onVizChange,
            searchQuery: searchQuery,
            data: data,
            onClose: () => {}
          }), listMode === PanelEditor_types.Ok.Suggestions && (0,jsx_runtime.jsx)(VisualizationSuggestions, {
            current: plugin.meta,
            onChange: onVizChange,
            searchQuery: searchQuery,
            panel: panel,
            data: data,
            onClose: () => {}
          }), listMode === PanelEditor_types.Ok.LibraryPanels && (0,jsx_runtime.jsx)(PanelLibraryOptionsGroup, {
            searchQuery: searchQuery,
            panel: panel
          }, "Panel Library")]
        })
      })
    })]
  });
};
VisualizationSelectPane.displayName = 'VisualizationSelectPane';

const VisualizationSelectPane_getStyles = theme => {
  return {
    icon: emotion_css_esm.css`
      color: ${theme.palette.gray33};
    `,
    wrapper: emotion_css_esm.css`
      display: flex;
      flex-direction: column;
      flex: 1 1 0;
      height: 100%;
    `,
    vizButton: emotion_css_esm.css`
      text-align: left;
    `,
    scrollWrapper: emotion_css_esm.css`
      flex-grow: 1;
      min-height: 0;
    `,
    scrollContent: emotion_css_esm.css`
      padding: ${theme.spacing.sm};
    `,
    openWrapper: emotion_css_esm.css`
      display: flex;
      flex-direction: column;
      flex: 1 1 100%;
      height: 100%;
      background: ${theme.colors.bg1};
      border: 1px solid ${theme.colors.border1};
    `,
    searchRow: emotion_css_esm.css`
      display: flex;
      margin-bottom: ${theme.spacing.sm};
    `,
    closeButton: emotion_css_esm.css`
      margin-left: ${theme.spacing.sm};
    `,
    customFieldMargin: emotion_css_esm.css`
      margin-bottom: ${theme.spacing.sm};
    `,
    formBox: emotion_css_esm.css`
      padding: ${theme.spacing.sm};
      padding-bottom: 0;
    `
  };
};
;












const OptionsPane = _ref => {
  let {
    plugin,
    panel,
    onFieldConfigsChange,
    onPanelOptionsChanged,
    onPanelConfigChange,
    dashboard,
    instanceState
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(OptionsPane_getStyles);
  const isVizPickerOpen = (0,es.useSelector)(state => state.panelEditor.isVizPickerOpen);
  const {
    data
  } = usePanelLatestData(panel, {
    withTransforms: true,
    withFieldConfig: false
  }, true);
  return (0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    "aria-label": src.wl.components.PanelEditor.OptionsPane.content,
    children: [!isVizPickerOpen && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)("div", {
        className: styles.vizButtonWrapper,
        children: (0,jsx_runtime.jsx)(VisualizationButton, {
          panel: panel
        })
      }), (0,jsx_runtime.jsx)("div", {
        className: styles.optionsWrapper,
        children: (0,jsx_runtime.jsx)(OptionsPaneOptions, {
          panel: panel,
          dashboard: dashboard,
          plugin: plugin,
          instanceState: instanceState,
          data: data,
          onFieldConfigsChange: onFieldConfigsChange,
          onPanelOptionsChanged: onPanelOptionsChanged,
          onPanelConfigChange: onPanelConfigChange
        })
      })]
    }), isVizPickerOpen && (0,jsx_runtime.jsx)(VisualizationSelectPane, {
      panel: panel,
      data: data
    })]
  });
};

const OptionsPane_getStyles = theme => {
  return {
    wrapper: emotion_css_esm.css`
      height: 100%;
      width: 100%;
      display: flex;
      flex: 1 1 0;
      flex-direction: column;
      padding: 0;
    `,
    optionsWrapper: emotion_css_esm.css`
      flex-grow: 1;
      min-height: 0;
    `,
    vizButtonWrapper: emotion_css_esm.css`
      padding: 0 ${theme.spacing.md} ${theme.spacing.md} 0;
    `,
    legacyOptions: emotion_css_esm.css`
      label: legacy-options;
      .panel-options-grid {
        display: flex;
        flex-direction: column;
      }
      .panel-options-group {
        margin-bottom: 0;
      }
      .panel-options-group__body {
        padding: ${theme.spacing.md} 0;
      }

      .section {
        display: block;
        margin: ${theme.spacing.md} 0;

        &:first-child {
          margin-top: 0;
        }
      }
    `
  };
};
var utils_panel = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
var PanelHeaderCorner = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderCorner.tsx");
var TimeSrv = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
;











function PanelEditorTableView(_ref) {
  let {
    width,
    height,
    panel,
    dashboard
  } = _ref;
  const {
    data
  } = usePanelLatestData(panel, {
    withTransforms: true,
    withFieldConfig: false
  }, false);
  const [options, setOptions] = (0,react.useState)({
    frameIndex: 0,
    showHeader: true,
    showTypeIcons: true
  }); 

  (0,react.useEffect)(() => {
    const timeSrv = (0,TimeSrv.$t)();
    const timeData = (0,utils_panel.W1)(panel, timeSrv.timeRange());
    const sub = panel.events.subscribe(grafana_runtime_src.RefreshEvent, () => {
      panel.runAllPanelQueries(dashboard.id, dashboard.getTimezone(), timeData, width);
    });
    return () => {
      sub.unsubscribe();
    };
  }, [panel, dashboard, width]);

  if (!data) {
    return null;
  }

  return (0,jsx_runtime.jsx)(grafana_ui_src.PanelChrome, {
    width: width,
    height: height,
    padding: "none",
    children: (innerWidth, innerHeight) => {
      var _data$error;

      return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [(0,jsx_runtime.jsx)(PanelHeaderCorner.Z, {
          panel: panel,
          error: data === null || data === void 0 ? void 0 : (_data$error = data.error) === null || _data$error === void 0 ? void 0 : _data$error.message
        }), (0,jsx_runtime.jsx)(PanelRenderer.$, {
          title: "Raw data",
          pluginId: "table",
          width: innerWidth,
          height: innerHeight,
          data: data,
          options: options,
          onOptionsChange: setOptions
        })]
      });
    }
  });
}
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
var Layout = __webpack_require__("./packages/grafana-ui/src/components/Layout/Layout.tsx");
;







function PanelNotSupported(_ref) {
  let {
    message
  } = _ref;
  const onBackToQueries = (0,react.useCallback)(() => {
    grafana_runtime_src.locationService.partial({
      tab: PanelEditor_types.Ip.Query
    });
  }, []);
  return (0,jsx_runtime.jsx)(Layout.Ar, {
    justify: "center",
    style: {
      marginTop: '100px'
    },
    children: (0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
      spacing: "md",
      children: [(0,jsx_runtime.jsx)("h2", {
        children: message
      }), (0,jsx_runtime.jsx)("div", {
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          size: "md",
          variant: "secondary",
          icon: "arrow-left",
          onClick: onBackToQueries,
          children: "Go back to Queries"
        })
      })]
    })
  });
}
var alertDef = __webpack_require__("./public/app/features/alerting/state/alertDef.ts");
;
var _span, _i;

function StateHistory_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class StateHistory extends react.PureComponent {
  constructor() {
    super(...arguments);

    StateHistory_defineProperty(this, "state", {
      stateHistoryItems: []
    });

    StateHistory_defineProperty(this, "clearHistory", async () => {
      const {
        dashboard,
        panelId,
        onRefresh
      } = this.props;
      await (0,grafana_runtime_src.getBackendSrv)().post('/api/annotations/mass-delete', {
        dashboardId: dashboard.id,
        panelId: panelId
      });
      this.setState({
        stateHistoryItems: []
      });
      onRefresh();
    });
  }

  componentDidMount() {
    const {
      dashboard,
      panelId
    } = this.props;
    (0,grafana_runtime_src.getBackendSrv)().get(`/api/annotations?dashboardId=${dashboard.id}&panelId=${panelId}&limit=50&type=alert`, {}, `state-history-${dashboard.id}-${panelId}`).then(data => {
      const items = data.map(item => {
        return {
          stateModel: alertDef.Z.getStateDisplayModel(item.newState),
          time: dashboard.formatDate(item.time, 'MMM D, YYYY HH:mm:ss'),
          info: alertDef.Z.getAlertAnnotationInfo(item)
        };
      });
      this.setState({
        stateHistoryItems: items
      });
    });
  }

  render() {
    const {
      stateHistoryItems
    } = this.state;
    return (0,jsx_runtime.jsxs)("div", {
      children: [stateHistoryItems.length > 0 && (0,jsx_runtime.jsxs)("div", {
        className: "p-b-1",
        children: [_span || (_span = (0,jsx_runtime.jsx)("span", {
          className: "muted",
          children: "Last 50 state changes"
        })), (0,jsx_runtime.jsx)(grafana_ui_src.ConfirmButton, {
          onConfirm: this.clearHistory,
          confirmVariant: "destructive",
          confirmText: "Clear",
          children: (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            className: emotion_css_esm.css`
                  direction: ltr;
                `,
            variant: "destructive",
            icon: "trash-alt",
            children: "Clear history"
          })
        })]
      }), (0,jsx_runtime.jsx)("ol", {
        className: "alert-rule-list",
        children: stateHistoryItems.length > 0 ? stateHistoryItems.map((item, index) => {
          return (0,jsx_runtime.jsxs)("li", {
            className: "alert-rule-item",
            children: [(0,jsx_runtime.jsx)("div", {
              className: `alert-rule-item__icon ${item.stateModel.stateClass}`,
              children: (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
                name: item.stateModel.iconClass,
                size: "xl"
              })
            }), (0,jsx_runtime.jsxs)("div", {
              className: "alert-rule-item__body",
              children: [(0,jsx_runtime.jsxs)("div", {
                className: "alert-rule-item__header",
                children: [(0,jsx_runtime.jsx)("p", {
                  className: "alert-rule-item__name",
                  children: item.alertName
                }), (0,jsx_runtime.jsx)("div", {
                  className: "alert-rule-item__text",
                  children: (0,jsx_runtime.jsx)("span", {
                    className: `${item.stateModel.stateClass}`,
                    children: item.stateModel.text
                  })
                })]
              }), item.info]
            }), (0,jsx_runtime.jsx)("div", {
              className: "alert-rule-item__time",
              children: item.time
            })]
          }, `${item.time}-${index}`);
        }) : _i || (_i = (0,jsx_runtime.jsx)("i", {
          children: "No state changes recorded"
        }))
      })]
    });
  }

}

 const alerting_StateHistory = (StateHistory);
;
var TestRuleResult_Icon, _Icon2, _LoadingPlaceholder;

function TestRuleResult_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class TestRuleResult extends react.PureComponent {
  constructor() {
    super(...arguments);

    TestRuleResult_defineProperty(this, "state", {
      isLoading: false,
      allNodesExpanded: null,
      testRuleResponse: {}
    });

    TestRuleResult_defineProperty(this, "formattedJson", void 0);

    TestRuleResult_defineProperty(this, "clipboard", void 0);

    TestRuleResult_defineProperty(this, "setFormattedJson", formattedJson => {
      this.formattedJson = formattedJson;
    });

    TestRuleResult_defineProperty(this, "getTextForClipboard", () => {
      return JSON.stringify(this.formattedJson, null, 2);
    });

    TestRuleResult_defineProperty(this, "onClipboardSuccess", () => {
      app_events.Z.emit(grafana_data_src.AppEvents.alertSuccess, ['Content copied to clipboard']);
    });

    TestRuleResult_defineProperty(this, "onToggleExpand", () => {
      this.setState(prevState => Object.assign({}, prevState, {
        allNodesExpanded: !this.state.allNodesExpanded
      }));
    });

    TestRuleResult_defineProperty(this, "getNrOfOpenNodes", () => {
      if (this.state.allNodesExpanded === null) {
        return 3; 
      } else if (this.state.allNodesExpanded) {
        return 20;
      }

      return 1;
    });

    TestRuleResult_defineProperty(this, "renderExpandCollapse", () => {
      const {
        allNodesExpanded
      } = this.state;

      const collapse = (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [TestRuleResult_Icon || (TestRuleResult_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: "minus-circle"
        })), " Collapse All"]
      });

      const expand = (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [_Icon2 || (_Icon2 = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: "plus-circle"
        })), " Expand All"]
      });

      return allNodesExpanded ? collapse : expand;
    });
  }

  componentDidMount() {
    this.testRule();
  }

  async testRule() {
    const {
      dashboard,
      panel
    } = this.props; 

    const model = dashboard.getSaveModelClone(); 

    model.panels = model.panels.map(dashPanel => {
      return dashPanel.id === panel.id ? panel.getSaveModel() : dashPanel;
    });
    const payload = {
      dashboard: model,
      panelId: panel.id
    };
    this.setState({
      isLoading: true
    });
    const testRuleResponse = await (0,grafana_runtime_src.getBackendSrv)().post(`/api/alerts/test`, payload);
    this.setState({
      isLoading: false,
      testRuleResponse
    });
  }

  render() {
    const {
      testRuleResponse,
      isLoading
    } = this.state;

    if (isLoading === true) {
      return _LoadingPlaceholder || (_LoadingPlaceholder = (0,jsx_runtime.jsx)(grafana_ui_src.LoadingPlaceholder, {
        text: "Evaluating rule"
      }));
    }

    const openNodes = this.getNrOfOpenNodes();
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)("div", {
        className: "pull-right",
        children: (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
          spacing: "md",
          children: [(0,jsx_runtime.jsx)("div", {
            onClick: this.onToggleExpand,
            children: this.renderExpandCollapse()
          }), (0,jsx_runtime.jsx)(grafana_ui_src.ClipboardButton, {
            getText: this.getTextForClipboard,
            onClipboardCopy: this.onClipboardSuccess,
            icon: "copy",
            children: "Copy to Clipboard"
          })]
        })
      }), (0,jsx_runtime.jsx)(grafana_ui_src.JSONFormatter, {
        json: testRuleResponse,
        open: openNodes,
        onDidRender: this.setFormattedJson
      })]
    });
  }

}
var getAlertingValidationMessage = __webpack_require__("./public/app/features/alerting/getAlertingValidationMessage.ts");
;
var AlertTab_div;

function AlertTab_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















class UnConnectedAlertTab extends react.PureComponent {
  constructor() {
    super(...arguments);

    AlertTab_defineProperty(this, "element", void 0);

    AlertTab_defineProperty(this, "component", void 0);

    AlertTab_defineProperty(this, "panelCtrl", void 0);

    AlertTab_defineProperty(this, "state", {
      validationMessage: '',
      showStateHistory: false,
      showDeleteConfirmation: false,
      showTestRule: false
    });

    AlertTab_defineProperty(this, "onAngularPanelUpdated", () => {
      this.forceUpdate();
    });

    AlertTab_defineProperty(this, "onAddAlert", () => {
      var _this$panelCtrl, _this$component;

      (_this$panelCtrl = this.panelCtrl) === null || _this$panelCtrl === void 0 ? void 0 : _this$panelCtrl._enableAlert();
      (_this$component = this.component) === null || _this$component === void 0 ? void 0 : _this$component.digest();
      this.forceUpdate();
    });

    AlertTab_defineProperty(this, "onToggleModal", prop => {
      const value = this.state[prop];
      this.setState(Object.assign({}, this.state, {
        [prop]: !value
      }));
    });

    AlertTab_defineProperty(this, "renderTestRule", () => {
      if (!this.state.showTestRule) {
        return null;
      }

      const {
        panel,
        dashboard
      } = this.props;

      const onDismiss = () => this.onToggleModal('showTestRule');

      return (0,jsx_runtime.jsx)(grafana_ui_src.Modal, {
        isOpen: true,
        icon: "bug",
        title: "Testing rule",
        onDismiss: onDismiss,
        onClickBackdrop: onDismiss,
        children: (0,jsx_runtime.jsx)(TestRuleResult, {
          panel: panel,
          dashboard: dashboard
        })
      });
    });

    AlertTab_defineProperty(this, "renderDeleteConfirmation", () => {
      if (!this.state.showDeleteConfirmation) {
        return null;
      }

      const {
        panel
      } = this.props;

      const onDismiss = () => this.onToggleModal('showDeleteConfirmation');

      return (0,jsx_runtime.jsx)(grafana_ui_src.ConfirmModal, {
        isOpen: true,
        icon: "trash-alt",
        title: "Delete",
        body: AlertTab_div || (AlertTab_div = (0,jsx_runtime.jsxs)("div", {
          children: ["Are you sure you want to delete this alert rule?", (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)("small", {
            children: "You need to save dashboard for the delete to take effect."
          })]
        })),
        confirmText: "Delete alert",
        onDismiss: onDismiss,
        onConfirm: () => {
          var _this$component2;

          delete panel.alert;
          panel.thresholds = [];

          if (this.panelCtrl) {
            this.panelCtrl.alertState = null;
            this.panelCtrl.render();
          }

          (_this$component2 = this.component) === null || _this$component2 === void 0 ? void 0 : _this$component2.digest();
          onDismiss();
        }
      });
    });

    AlertTab_defineProperty(this, "renderStateHistory", () => {
      if (!this.state.showStateHistory) {
        return null;
      }

      const {
        panel,
        dashboard
      } = this.props;

      const onDismiss = () => this.onToggleModal('showStateHistory');

      return (0,jsx_runtime.jsx)(grafana_ui_src.Modal, {
        isOpen: true,
        icon: "history",
        title: "State history",
        onDismiss: onDismiss,
        onClickBackdrop: onDismiss,
        children: (0,jsx_runtime.jsx)(alerting_StateHistory, {
          dashboard: dashboard,
          panelId: panel.id,
          onRefresh: () => {
            var _this$panelCtrl2;

            return (_this$panelCtrl2 = this.panelCtrl) === null || _this$panelCtrl2 === void 0 ? void 0 : _this$panelCtrl2.refresh();
          }
        })
      });
    });
  }

  async componentDidMount() {
    if (grafana_runtime_src.config.angularSupportEnabled) {
      await Promise.all([__webpack_require__.e(4808), __webpack_require__.e(5718)]).then(__webpack_require__.bind(__webpack_require__, "./public/app/features/alerting/AlertTabCtrl.ts"));
      this.loadAlertTab();
    } else {
      alert('Angular support disabled, legacy alerting cannot function without angular support');
    }
  }

  componentDidUpdate(prevProps) {
    this.loadAlertTab();
  }

  componentWillUnmount() {
    if (this.component) {
      this.component.destroy();
    }
  }

  async loadAlertTab() {
    const {
      panel,
      angularPanelComponent
    } = this.props;

    if (!this.element || this.component) {
      return;
    }

    if (angularPanelComponent) {
      const scope = angularPanelComponent.getScope(); 

      if (!scope.$$childHead) {
        setTimeout(() => {
          this.forceUpdate();
        });
        return;
      }

      this.panelCtrl = scope.$$childHead.ctrl;
    } else {
      this.panelCtrl = this.getReactAlertPanelCtrl();
    }

    const loader = (0,grafana_runtime_src.getAngularLoader)();
    const template = '<alert-tab />';
    const scopeProps = {
      ctrl: this.panelCtrl
    };
    this.component = loader.load(this.element, scopeProps, template);
    const validationMessage = await (0,getAlertingValidationMessage.E)(panel.transformations, panel.targets, (0,grafana_runtime_src.getDataSourceSrv)(), panel.datasource);

    if (validationMessage) {
      this.setState({
        validationMessage
      });
    }
  }

  getReactAlertPanelCtrl() {
    return {
      panel: this.props.panel,
      events: new grafana_data_src.EventBusSrv(),
      render: () => {
        this.props.panel.render();
      }
    };
  }

  render() {
    const {
      alert,
      transformations
    } = this.props.panel;
    const {
      validationMessage
    } = this.state;
    const hasTransformations = transformations && transformations.length > 0;

    if (!alert && validationMessage) {
      return (0,jsx_runtime.jsx)(PanelNotSupported, {
        message: validationMessage
      });
    }

    const model = {
      title: 'Panel has no alert rule defined',
      buttonIcon: 'bell',
      onClick: this.onAddAlert,
      buttonTitle: 'Create Alert'
    };
    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.CustomScrollbar, {
        autoHeightMin: "100%",
        children: (0,jsx_runtime.jsx)(grafana_ui_src.Container, {
          padding: "md",
          children: (0,jsx_runtime.jsxs)("div", {
            "aria-label": src.wl.components.AlertTab.content,
            children: [alert && hasTransformations && (0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
              severity: types.F1.Error,
              title: "Transformations are not supported in alert queries"
            }), (0,jsx_runtime.jsx)("div", {
              ref: element => this.element = element
            }), alert && (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
              children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
                onClick: () => this.onToggleModal('showStateHistory'),
                variant: "secondary",
                children: "State history"
              }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
                onClick: () => this.onToggleModal('showTestRule'),
                variant: "secondary",
                children: "Test rule"
              }), (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
                onClick: () => this.onToggleModal('showDeleteConfirmation'),
                variant: "destructive",
                children: "Delete"
              })]
            }), !alert && !validationMessage && (0,jsx_runtime.jsx)(EmptyListCTA.Z, Object.assign({}, model))]
          })
        })
      }), this.renderTestRule(), this.renderDeleteConfirmation(), this.renderStateHistory()]
    });
  }

}

const AlertTab_mapStateToProps = (state, props) => {
  var _getPanelStateForMode;

  return {
    angularPanelComponent: (_getPanelStateForMode = (0,selectors.i)(state, props.panel)) === null || _getPanelStateForMode === void 0 ? void 0 : _getPanelStateForMode.angularComponent
  };
};

const AlertTab_mapDispatchToProps = {};
const AlertTab = (0,es.connect)(AlertTab_mapStateToProps, AlertTab_mapDispatchToProps)(UnConnectedAlertTab);
var rule_form = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
;
var _Button, _Alert;








const NewRuleFromPanelButton = _ref => {
  let {
    dashboard,
    panel,
    className
  } = _ref;
  const {
    loading,
    value: formValues
  } = (0,useAsync.Z)(() => (0,rule_form.aR)(panel, dashboard), [panel, dashboard]);
  const location = (0,react_router.TH)();

  if (loading) {
    return _Button || (_Button = (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      disabled: true,
      children: "Create alert rule from this panel"
    }));
  }

  if (!formValues) {
    return _Alert || (_Alert = (0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      severity: "info",
      title: "No alerting capable query found",
      children: "Cannot create alerts from this panel because no query to an alerting capable datasource is found."
    }));
  }

  const ruleFormUrl = grafana_data_src.urlUtil.renderUrl('alerting/new', {
    defaults: JSON.stringify(formValues),
    returnTo: location.pathname + location.search
  });
  return (0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
    icon: "bell",
    href: ruleFormUrl,
    className: className,
    "data-testid": "create-alert-rule-button",
    children: "Create alert rule from this panel"
  });
};
var RulesTable = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesTable.tsx");
var unified_state_actions = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
var utils_constants = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
var datasource = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
var redux = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
var useCombinedRuleNamespaces = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
var useUnifiedAlertingSelector = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
;








function usePanelCombinedRules(_ref) {
  var _useUnifiedAlertingSe, _useUnifiedAlertingSe2;

  let {
    dashboard,
    panel,
    poll = false
  } = _ref;
  const dispatch = (0,es.useDispatch)();
  const promRuleRequest = (_useUnifiedAlertingSe = (0,useUnifiedAlertingSelector._)(state => state.promRules[datasource.GC])) !== null && _useUnifiedAlertingSe !== void 0 ? _useUnifiedAlertingSe : redux.oq;
  const rulerRuleRequest = (_useUnifiedAlertingSe2 = (0,useUnifiedAlertingSelector._)(state => state.rulerRules[datasource.GC])) !== null && _useUnifiedAlertingSe2 !== void 0 ? _useUnifiedAlertingSe2 : redux.oq; 

  (0,react.useEffect)(() => {
    const fetch = () => {
      dispatch((0,unified_state_actions.y6)({
        rulesSourceName: datasource.GC,
        filter: {
          dashboardUID: dashboard.uid,
          panelId: panel.id
        }
      }));
      dispatch((0,unified_state_actions.UR)({
        rulesSourceName: datasource.GC,
        filter: {
          dashboardUID: dashboard.uid,
          panelId: panel.id
        }
      }));
    };

    fetch();

    if (poll) {
      const interval = setInterval(fetch, utils_constants.p4);
      return () => {
        clearInterval(interval);
      };
    }

    return () => {};
  }, [dispatch, poll, panel.id, dashboard.uid]);
  const loading = promRuleRequest.loading || rulerRuleRequest.loading;
  const errors = [promRuleRequest.error, rulerRuleRequest.error].filter(err => !!err);
  const combinedNamespaces = (0,useCombinedRuleNamespaces.Zo)(datasource.GC); 

  const rules = (0,react.useMemo)(() => combinedNamespaces.flatMap(ns => ns.groups).flatMap(group => group.rules).filter(rule => rule.annotations[utils_constants.q6.dashboardUID] === dashboard.uid && rule.annotations[utils_constants.q6.panelID] === String(panel.id)), [combinedNamespaces, dashboard, panel]);
  return {
    rules,
    errors,
    loading
  };
}
var access_control = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
;
var PanelAlertTabContent_LoadingPlaceholder, PanelAlertTabContent_p, PanelAlertTabContent_Alert;













const PanelAlertTabContent = _ref => {
  var _RulesTable;

  let {
    dashboard,
    panel
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(PanelAlertTabContent_getStyles);
  const {
    errors,
    loading,
    rules
  } = usePanelCombinedRules({
    dashboard,
    panel,
    poll: true
  });
  const permissions = (0,access_control.Bz)('grafana');
  const canCreateRules = context_srv.Vt.hasPermission(permissions.create);
  const alert = errors.length ? (0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
    title: "Errors loading rules",
    severity: "error",
    children: errors.map((error, index) => (0,jsx_runtime.jsxs)("div", {
      children: ["Failed to load Grafana rules state: ", error.message || 'Unknown error.']
    }, index))
  }) : null;

  if (loading && !rules.length) {
    return (0,jsx_runtime.jsxs)("div", {
      className: styles.innerWrapper,
      children: [alert, PanelAlertTabContent_LoadingPlaceholder || (PanelAlertTabContent_LoadingPlaceholder = (0,jsx_runtime.jsx)(grafana_ui_src.LoadingPlaceholder, {
        text: "Loading rules..."
      }))]
    });
  }

  if (rules.length) {
    return (0,jsx_runtime.jsx)(grafana_ui_src.CustomScrollbar, {
      autoHeightMin: "100%",
      children: (0,jsx_runtime.jsxs)("div", {
        className: styles.innerWrapper,
        children: [alert, _RulesTable || (_RulesTable = (0,jsx_runtime.jsx)(RulesTable.i, {
          rules: rules
        })), !!dashboard.meta.canSave && canCreateRules && (0,jsx_runtime.jsx)(NewRuleFromPanelButton, {
          className: styles.newButton,
          panel: panel,
          dashboard: dashboard
        })]
      })
    });
  }

  return (0,jsx_runtime.jsxs)("div", {
    "aria-label": src.wl.components.PanelAlertTabContent.content,
    className: styles.noRulesWrapper,
    children: [alert, !!dashboard.uid && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [PanelAlertTabContent_p || (PanelAlertTabContent_p = (0,jsx_runtime.jsx)("p", {
        children: "There are no alert rules linked to this panel."
      })), !!dashboard.meta.canSave && canCreateRules && (0,jsx_runtime.jsx)(NewRuleFromPanelButton, {
        panel: panel,
        dashboard: dashboard
      })]
    }), !dashboard.uid && !!dashboard.meta.canSave && (PanelAlertTabContent_Alert || (PanelAlertTabContent_Alert = (0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      severity: "info",
      title: "Dashboard not saved",
      children: "Dashboard must be saved before alerts can be added."
    })))]
  });
};

const PanelAlertTabContent_getStyles = theme => ({
  newButton: emotion_css_esm.css`
    margin-top: ${theme.spacing(3)};
  `,
  innerWrapper: emotion_css_esm.css`
    padding: ${theme.spacing(2)};
  `,
  noRulesWrapper: emotion_css_esm.css`
    margin: ${theme.spacing(2)};
    background-color: ${theme.colors.background.secondary};
    padding: ${theme.spacing(3)};
  `
});
;



 const AlertTabIndex = (grafana_runtime_src.config.unifiedAlertingEnabled ? PanelAlertTabContent : AlertTab);
var Tab = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
;
const _excluded = ["panel", "dashboard"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const PanelAlertTab = _ref => {
  let {
    panel,
    dashboard
  } = _ref,
      otherProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  const {
    rules,
    loading
  } = usePanelCombinedRules({
    panel,
    dashboard
  });
  return (0,jsx_runtime.jsx)(Tab.O, Object.assign({}, otherProps, {
    counter: loading ? null : rules.length
  }));
};
var react_beautiful_dnd_esm = __webpack_require__("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
var LocalStorageValueProvider = __webpack_require__("./public/app/core/components/LocalStorageValueProvider/index.tsx");
;

const DOCS_LINKS = {
  [grafana_data_src.DocsId.Transformations]: 'https://grafana.com/docs/grafana/latest/panels/transformations',
  [grafana_data_src.DocsId.FieldConfig]: 'https://grafana.com/docs/grafana/latest/panels/field-configuration-options/',
  [grafana_data_src.DocsId.FieldConfigOverrides]: 'https://grafana.com/docs/grafana/latest/panels/field-configuration-options/#override-a-field'
};
const getDocsLink = id => DOCS_LINKS[id];
var PluginStateInfo = __webpack_require__("./public/app/features/plugins/components/PluginStateInfo.tsx");
var useToggle = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useToggle.js");
var OperationRowHelp = __webpack_require__("./public/app/core/components/QueryOperationRow/OperationRowHelp.tsx");
var QueryOperationAction = __webpack_require__("./public/app/core/components/QueryOperationRow/QueryOperationAction.tsx");
var QueryOperationRow = __webpack_require__("./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx");
var mergeMap = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
;
var TransformationEditor_Icon;









const TransformationEditor = _ref => {
  let {
    debugMode,
    index,
    data,
    uiConfig,
    configs,
    onChange
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(TransformationEditor_getStyles);
  const [input, setInput] = (0,react.useState)([]);
  const [output, setOutput] = (0,react.useState)([]);
  const config = (0,react.useMemo)(() => configs[index], [configs, index]);
  (0,react.useEffect)(() => {
    const inputTransforms = configs.slice(0, index).map(t => t.transformation);
    const outputTransforms = configs.slice(index, index + 1).map(t => t.transformation);
    const inputSubscription = (0,grafana_data_src.transformDataFrame)(inputTransforms, data).subscribe(setInput);
    const outputSubscription = (0,grafana_data_src.transformDataFrame)(inputTransforms, data).pipe((0,mergeMap.z)(before => (0,grafana_data_src.transformDataFrame)(outputTransforms, before))).subscribe(setOutput);
    return function unsubscribe() {
      inputSubscription.unsubscribe();
      outputSubscription.unsubscribe();
    };
  }, [index, data, configs]);
  const editor = (0,react.useMemo)(() => react.createElement(uiConfig.editor, {
    options: Object.assign({}, uiConfig.transformation.defaultOptions, config.transformation.options),
    input,
    onChange: opts => {
      onChange(index, {
        id: config.transformation.id,
        options: opts
      });
    }
  }), [uiConfig.editor, uiConfig.transformation.defaultOptions, config.transformation.options, config.transformation.id, input, onChange, index]);
  return (0,jsx_runtime.jsxs)("div", {
    className: styles.editor,
    "aria-label": src.wl.components.TransformTab.transformationEditor(uiConfig.name),
    children: [editor, debugMode && (0,jsx_runtime.jsxs)("div", {
      className: styles.debugWrapper,
      "aria-label": src.wl.components.TransformTab.transformationEditorDebugger(uiConfig.name),
      children: [(0,jsx_runtime.jsxs)("div", {
        className: styles.debug,
        children: [(0,jsx_runtime.jsx)("div", {
          className: styles.debugTitle,
          children: "Transformation input data"
        }), (0,jsx_runtime.jsx)("div", {
          className: styles.debugJson,
          children: (0,jsx_runtime.jsx)(grafana_ui_src.JSONFormatter, {
            json: input
          })
        })]
      }), (0,jsx_runtime.jsx)("div", {
        className: styles.debugSeparator,
        children: TransformationEditor_Icon || (TransformationEditor_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: "arrow-right"
        }))
      }), (0,jsx_runtime.jsxs)("div", {
        className: styles.debug,
        children: [(0,jsx_runtime.jsx)("div", {
          className: styles.debugTitle,
          children: "Transformation output data"
        }), (0,jsx_runtime.jsx)("div", {
          className: styles.debugJson,
          children: output && (0,jsx_runtime.jsx)(grafana_ui_src.JSONFormatter, {
            json: output
          })
        })]
      })]
    })]
  });
};

const TransformationEditor_getStyles = theme => {
  const debugBorder = theme.isLight ? theme.palette.gray85 : theme.palette.gray15;
  return {
    title: emotion_css_esm.css`
      display: flex;
      padding: 4px 8px 4px 8px;
      position: relative;
      height: 35px;
      border-radius: 4px 4px 0 0;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
    `,
    name: emotion_css_esm.css`
      font-weight: ${theme.typography.weight.semibold};
      color: ${theme.colors.textBlue};
    `,
    iconRow: emotion_css_esm.css`
      display: flex;
    `,
    icon: emotion_css_esm.css`
      background: transparent;
      border: none;
      box-shadow: none;
      cursor: pointer;
      color: ${theme.colors.textWeak};
      margin-left: ${theme.spacing.sm};
      &:hover {
        color: ${theme.colors.text};
      }
    `,
    editor: emotion_css_esm.css``,
    debugWrapper: emotion_css_esm.css`
      display: flex;
      flex-direction: row;
    `,
    debugSeparator: emotion_css_esm.css`
      width: 48px;
      min-height: 300px;
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-content: center;
      margin: 0 ${theme.spacing.xs};
      color: ${theme.colors.textBlue};
    `,
    debugTitle: emotion_css_esm.css`
      padding: ${theme.spacing.sm} ${theme.spacing.xxs};
      font-family: ${theme.typography.fontFamily.monospace};
      font-size: ${theme.typography.size.sm};
      color: ${theme.colors.text};
      border-bottom: 1px solid ${debugBorder};
      flex-grow: 0;
      flex-shrink: 1;
    `,
    debug: emotion_css_esm.css`
      margin-top: ${theme.spacing.sm};
      padding: 0 ${theme.spacing.sm} ${theme.spacing.sm} ${theme.spacing.sm};
      border: 1px solid ${debugBorder};
      background: ${theme.isLight ? theme.palette.white : theme.palette.gray05};
      border-radius: ${theme.border.radius.sm};
      width: 100%;
      min-height: 300px;
      display: flex;
      flex-direction: column;
      align-self: stretch;
    `,
    debugJson: emotion_css_esm.css`
      flex-grow: 1;
      height: 100%;
      overflow: hidden;
      padding: ${theme.spacing.xs};
    `
  };
};
;










const TransformationOperationRow = _ref => {
  var _QueryOperationAction;

  let {
    onRemove,
    index,
    id,
    data,
    configs,
    uiConfig,
    onChange
  } = _ref;
  const [showDebug, toggleDebug] = (0,useToggle.Z)(false);
  const [showHelp, toggleHelp] = (0,useToggle.Z)(false);
  const disabled = configs[index].transformation.disabled;
  const onDisableToggle = (0,react.useCallback)(index => {
    const current = configs[index].transformation;
    onChange(index, Object.assign({}, current, {
      disabled: current.disabled ? undefined : true
    }));
  }, [onChange, configs]);

  const renderActions = _ref2 => {
    let {
      isOpen
    } = _ref2;
    return (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      align: "center",
      width: "auto",
      children: [uiConfig.state && (0,jsx_runtime.jsx)(PluginStateInfo.u, {
        state: uiConfig.state
      }), _QueryOperationAction || (_QueryOperationAction = (0,jsx_runtime.jsx)(QueryOperationAction.y, {
        title: "Show/hide transform help",
        icon: "info-circle",
        onClick: toggleHelp,
        active: showHelp
      })), (0,jsx_runtime.jsx)(QueryOperationAction.y, {
        title: "Debug",
        disabled: !isOpen,
        icon: "bug",
        onClick: toggleDebug,
        active: showDebug
      }), (0,jsx_runtime.jsx)(QueryOperationAction.y, {
        title: "Disable/Enable transformation",
        icon: disabled ? 'eye-slash' : 'eye',
        onClick: () => onDisableToggle(index),
        active: disabled
      }), (0,jsx_runtime.jsx)(QueryOperationAction.y, {
        title: "Remove",
        icon: "trash-alt",
        onClick: () => onRemove(index)
      })]
    });
  };

  return (0,jsx_runtime.jsxs)(QueryOperationRow.t, {
    id: id,
    index: index,
    title: uiConfig.name,
    draggable: true,
    actions: renderActions,
    disabled: disabled,
    children: [showHelp && (0,jsx_runtime.jsx)(OperationRowHelp.h, {
      markdown: prepMarkdown(uiConfig)
    }), (0,jsx_runtime.jsx)(TransformationEditor, {
      debugMode: showDebug,
      index: index,
      data: data,
      configs: configs,
      uiConfig: uiConfig,
      onChange: onChange
    })]
  });
};

function prepMarkdown(uiConfig) {
  var _uiConfig$help;

  let helpMarkdown = (_uiConfig$help = uiConfig.help) !== null && _uiConfig$help !== void 0 ? _uiConfig$help : uiConfig.description;
  return `
${helpMarkdown}

Go the <a href="https://grafana.com/docs/grafana/latest/panels/transformations/?utm_source=grafana" target="_blank" rel="noreferrer">
transformation documentation
</a> for more.
`;
}
;





const TransformationOperationRows = _ref => {
  let {
    data,
    onChange,
    onRemove,
    configs
  } = _ref;
  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: configs.map((t, i) => {
      const uiConfig = grafana_data_src.standardTransformersRegistry.getIfExists(t.transformation.id);

      if (!uiConfig) {
        return null;
      }

      return (0,jsx_runtime.jsx)(TransformationOperationRow, {
        index: i,
        id: `${t.id}`,
        data: data,
        configs: configs,
        uiConfig: uiConfig,
        onRemove: onRemove,
        onChange: onChange
      }, `${t.id}`);
    })
  });
};
;
var TransformationsEditor_p, _PanelNotSupported;

function TransformationsEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const LOCAL_STORAGE_KEY = 'dashboard.components.TransformationEditor.featureInfoBox.isDismissed';

class UnThemedTransformationsEditor extends react.PureComponent {
  constructor(props) {
    super(props);

    TransformationsEditor_defineProperty(this, "subscription", void 0);

    TransformationsEditor_defineProperty(this, "onSearchChange", event => {
      this.setState({
        search: event.target.value
      });
    });

    TransformationsEditor_defineProperty(this, "onSearchKeyDown", event => {
      if (event.key === 'Enter') {
        const {
          search
        } = this.state;

        if (search) {
          const lower = search.toLowerCase();
          const filtered = grafana_data_src.standardTransformersRegistry.list().filter(t => {
            const txt = (t.name + t.description).toLowerCase();
            return txt.indexOf(lower) >= 0;
          });

          if (filtered.length > 0) {
            this.onTransformationAdd({
              value: filtered[0].id
            });
          }
        }
      } else if (event.keyCode === 27) {
        this.setState({
          search: '',
          showPicker: false
        });
        event.stopPropagation(); 
      }
    });

    TransformationsEditor_defineProperty(this, "getTransformationNextId", name => {
      const {
        transformations
      } = this.state;
      let nextId = 0;
      const existingIds = transformations.filter(t => t.id.startsWith(name)).map(t => t.id);

      if (existingIds.length !== 0) {
        nextId = Math.max(...existingIds.map(i => parseInt(i.match(/\d+/)[0], 10))) + 1;
      }

      return `${name}-${nextId}`;
    });

    TransformationsEditor_defineProperty(this, "onTransformationAdd", selectable => {
      const {
        transformations
      } = this.state;
      const nextId = this.getTransformationNextId(selectable.value);
      this.setState({
        search: '',
        showPicker: false
      });
      this.onChange([...transformations, {
        id: nextId,
        transformation: {
          id: selectable.value,
          options: {}
        }
      }]);
    });

    TransformationsEditor_defineProperty(this, "onTransformationChange", (idx, config) => {
      const {
        transformations
      } = this.state;
      const next = Array.from(transformations);
      next[idx].transformation = config;
      this.onChange(next);
    });

    TransformationsEditor_defineProperty(this, "onTransformationRemove", idx => {
      const {
        transformations
      } = this.state;
      const next = Array.from(transformations);
      next.splice(idx, 1);
      this.onChange(next);
    });

    TransformationsEditor_defineProperty(this, "onDragEnd", result => {
      const {
        transformations
      } = this.state;

      if (!result || !result.destination) {
        return;
      }

      const startIndex = result.source.index;
      const endIndex = result.destination.index;

      if (startIndex === endIndex) {
        return;
      }

      const update = Array.from(transformations);
      const [removed] = update.splice(startIndex, 1);
      update.splice(endIndex, 0, removed);
      this.onChange(update);
    });

    TransformationsEditor_defineProperty(this, "renderTransformationEditors", () => {
      const {
        data,
        transformations
      } = this.state;
      return (0,jsx_runtime.jsx)(react_beautiful_dnd_esm.Z5, {
        onDragEnd: this.onDragEnd,
        children: (0,jsx_runtime.jsx)(react_beautiful_dnd_esm.bK, {
          droppableId: "transformations-list",
          direction: "vertical",
          children: provided => {
            return (0,jsx_runtime.jsxs)("div", Object.assign({
              ref: provided.innerRef
            }, provided.droppableProps, {
              children: [(0,jsx_runtime.jsx)(TransformationOperationRows, {
                configs: transformations,
                data: data,
                onRemove: this.onTransformationRemove,
                onChange: this.onTransformationChange
              }), provided.placeholder]
            }));
          }
        })
      });
    });

    const _transformations = props.panel.transformations || [];

    const ids = this.buildTransformationIds(_transformations);
    this.state = {
      transformations: _transformations.map((t, i) => ({
        transformation: t,
        id: ids[i]
      })),
      data: [],
      search: ''
    };
  }

  buildTransformationIds(transformations) {
    const transformationCounters = {};
    const transformationIds = [];

    for (let i = 0; i < transformations.length; i++) {
      const transformation = transformations[i];

      if (transformationCounters[transformation.id] === undefined) {
        transformationCounters[transformation.id] = 0;
      } else {
        transformationCounters[transformation.id] += 1;
      }

      transformationIds.push(`${transformations[i].id}-${transformationCounters[transformations[i].id]}`);
    }

    return transformationIds;
  }

  componentDidMount() {
    this.subscription = this.props.panel.getQueryRunner().getData({
      withTransforms: false,
      withFieldConfig: false
    }).subscribe({
      next: panelData => this.setState({
        data: panelData.series
      })
    });
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onChange(transformations) {
    this.setState({
      transformations
    });
    this.props.panel.setTransformations(transformations.map(t => t.transformation));
  } 


  renderTransformsPicker() {
    const {
      transformations,
      search
    } = this.state;
    let suffix = null;
    let xforms = grafana_data_src.standardTransformersRegistry.list().sort((a, b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0);

    if (search) {
      const lower = search.toLowerCase();
      const filtered = xforms.filter(t => {
        const txt = (t.name + t.description).toLowerCase();
        return txt.indexOf(lower) >= 0;
      });
      suffix = (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [filtered.length, " / ", xforms.length, " \xA0\xA0", (0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
          name: "times",
          surface: "header",
          onClick: () => {
            this.setState({
              search: ''
            });
          }
        })]
      });
      xforms = filtered;
    }

    const noTransforms = !(transformations !== null && transformations !== void 0 && transformations.length);
    const showPicker = noTransforms || this.state.showPicker;

    if (!suffix && showPicker && !noTransforms) {
      suffix = (0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
        name: "times",
        surface: "header",
        onClick: () => {
          this.setState({
            showPicker: false
          });
        }
      });
    }

    return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [noTransforms && (0,jsx_runtime.jsx)(grafana_ui_src.Container, {
        grow: 1,
        children: (0,jsx_runtime.jsx)(LocalStorageValueProvider.G, {
          storageKey: LOCAL_STORAGE_KEY,
          defaultValue: false,
          children: (isDismissed, onDismiss) => {
            if (isDismissed) {
              return null;
            }

            return (0,jsx_runtime.jsxs)(grafana_ui_src.Alert, {
              title: "Transformations",
              severity: "info",
              onRemove: () => {
                onDismiss(true);
              },
              children: [TransformationsEditor_p || (TransformationsEditor_p = (0,jsx_runtime.jsxs)("p", {
                children: ["Transformations allow you to join, calculate, re-order, hide, and rename your query results before they are visualized. ", (0,jsx_runtime.jsx)("br", {}), "Many transforms are not suitable if you're using the Graph visualization, as it currently only supports time series data. ", (0,jsx_runtime.jsx)("br", {}), "It can help to switch to the Table visualization to understand what a transformation is doing.", ' ']
              })), (0,jsx_runtime.jsx)("a", {
                href: getDocsLink(grafana_data_src.DocsId.Transformations),
                className: "external-link",
                target: "_blank",
                rel: "noreferrer",
                children: "Read more"
              })]
            });
          }
        })
      }), showPicker ? (0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          "aria-label": src.wl.components.Transforms.searchInput,
          value: search !== null && search !== void 0 ? search : '',
          autoFocus: !noTransforms,
          placeholder: "Add transformation",
          onChange: this.onSearchChange,
          onKeyDown: this.onSearchKeyDown,
          suffix: suffix
        }), xforms.map(t => {
          return (0,jsx_runtime.jsx)(TransformationCard, {
            transform: t,
            onClick: () => {
              this.onTransformationAdd({
                value: t.id
              });
            }
          }, t.name);
        })]
      }) : (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        icon: "plus",
        variant: "secondary",
        onClick: () => {
          this.setState({
            showPicker: true
          });
        },
        children: "Add transformation"
      })]
    });
  }

  render() {
    const {
      panel: {
        alert
      }
    } = this.props;
    const {
      transformations
    } = this.state;
    const hasTransforms = transformations.length > 0;

    if (!hasTransforms && alert) {
      return _PanelNotSupported || (_PanelNotSupported = (0,jsx_runtime.jsx)(PanelNotSupported, {
        message: "Transformations can't be used on a panel with existing alerts"
      }));
    }

    return (0,jsx_runtime.jsx)(grafana_ui_src.CustomScrollbar, {
      autoHeightMin: "100%",
      children: (0,jsx_runtime.jsx)(grafana_ui_src.Container, {
        padding: "md",
        children: (0,jsx_runtime.jsxs)("div", {
          "aria-label": src.wl.components.TransformTab.content,
          children: [hasTransforms && alert ? (0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
            severity: types.F1.Error,
            title: "Transformations can't be used on a panel with alerts"
          }) : null, hasTransforms && this.renderTransformationEditors(), this.renderTransformsPicker()]
        })
      })
    });
  }

}

function TransformationCard(_ref) {
  let {
    transform,
    onClick
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles2)(TransformationsEditor_getStyles);
  return (0,jsx_runtime.jsxs)(grafana_ui_src.Card, {
    className: styles.card,
    "aria-label": src.wl.components.TransformTab.newTransform(transform.name),
    onClick: onClick,
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.Card.Heading, {
      children: transform.name
    }), (0,jsx_runtime.jsx)(grafana_ui_src.Card.Meta, {
      children: transform.description
    }), transform.state && (0,jsx_runtime.jsx)(grafana_ui_src.Card.Tags, {
      children: (0,jsx_runtime.jsx)(PluginStateInfo.u, {
        state: transform.state
      })
    })]
  });
}

const TransformationsEditor_getStyles = theme => {
  return {
    card: emotion_css_esm.css`
      margin: 0;
      padding: ${theme.spacing(1)};
    `
  };
};

const TransformationsEditor = (0,grafana_ui_src.withTheme)(UnThemedTransformationsEditor);
var datasource_srv = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
var QueryGroup = __webpack_require__("./public/app/features/query/components/QueryGroup.tsx");
;
function PanelEditorQueries_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class PanelEditorQueries extends react.PureComponent {
  constructor(props) {
    super(props);

    PanelEditorQueries_defineProperty(this, "onRunQueries", () => {
      this.props.panel.refresh();
    });

    PanelEditorQueries_defineProperty(this, "onOpenQueryInspector", () => {
      grafana_runtime_src.locationService.partial({
        inspect: this.props.panel.id,
        inspectTab: 'query'
      });
    });

    PanelEditorQueries_defineProperty(this, "onOptionsChange", options => {
      var _panel$datasource;

      const {
        panel
      } = this.props;
      panel.updateQueries(options);

      if (options.dataSource.uid !== ((_panel$datasource = panel.datasource) === null || _panel$datasource === void 0 ? void 0 : _panel$datasource.uid)) {
        setTimeout(this.onRunQueries, 10);
      }

      this.forceUpdate();
    });
  }

  buildQueryOptions(panel) {
    var _panel$datasource2, _datasourceSettings$m;

    const dataSource = (_panel$datasource2 = panel.datasource) !== null && _panel$datasource2 !== void 0 ? _panel$datasource2 : {
      default: true
    };
    const datasourceSettings = (0,datasource_srv.ak)().getInstanceSettings(dataSource);
    return {
      cacheTimeout: datasourceSettings !== null && datasourceSettings !== void 0 && (_datasourceSettings$m = datasourceSettings.meta.queryOptions) !== null && _datasourceSettings$m !== void 0 && _datasourceSettings$m.cacheTimeout ? panel.cacheTimeout : undefined,
      dataSource: {
        default: datasourceSettings === null || datasourceSettings === void 0 ? void 0 : datasourceSettings.isDefault,
        type: datasourceSettings === null || datasourceSettings === void 0 ? void 0 : datasourceSettings.type,
        uid: datasourceSettings === null || datasourceSettings === void 0 ? void 0 : datasourceSettings.uid
      },
      queries: panel.targets,
      maxDataPoints: panel.maxDataPoints,
      minInterval: panel.interval,
      timeRange: {
        from: panel.timeFrom,
        shift: panel.timeShift,
        hide: panel.hideTimeOverride
      }
    };
  }

  async componentDidMount() {
    const {
      panel
    } = this.props; 

    if (!panel.datasource) {
      const ds = (0,datasource_srv.ak)().getInstanceSettings(null);
      panel.datasource = (0,grafana_data_src.getDataSourceRef)(ds);
      this.forceUpdate();
    }
  }

  render() {
    const {
      panel
    } = this.props; 

    if (!panel.datasource) {
      return null;
    }

    const options = this.buildQueryOptions(panel);
    return (0,jsx_runtime.jsx)(QueryGroup.D, {
      options: options,
      queryRunner: panel.getQueryRunner(),
      onRunQueries: this.onRunQueries,
      onOpenQueryInspector: this.onOpenQueryInspector,
      onOptionsChange: this.onOptionsChange
    });
  }

}
;













const PanelEditorTabs = react.memo(_ref => {
  let {
    panel,
    dashboard,
    tabs,
    onChangeTab
  } = _ref;
  const forceUpdate = (0,grafana_ui_src.useForceUpdate)();
  const styles = (0,grafana_ui_src.useStyles2)(PanelEditorTabs_getStyles);
  (0,react.useEffect)(() => {
    const eventSubs = new Subscription.w0();
    eventSubs.add(panel.events.subscribe(types_events.pO, forceUpdate));
    eventSubs.add(panel.events.subscribe(types_events.Xw, forceUpdate));
    return () => eventSubs.unsubscribe();
  }, [panel, forceUpdate]);
  const activeTab = tabs.find(item => item.active);

  if (tabs.length === 0) {
    return null;
  }

  return (0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    children: [(0,jsx_runtime.jsx)(grafana_ui_src.TabsBar, {
      className: styles.tabBar,
      hideBorder: true,
      children: tabs.map(tab => {
        if (tab.id === PanelEditor_types.Ip.Alert) {
          return renderAlertTab(tab, panel, dashboard, onChangeTab);
        }

        return (0,jsx_runtime.jsx)(grafana_ui_src.Tab, {
          label: tab.text,
          active: tab.active,
          onChangeTab: () => onChangeTab(tab),
          icon: tab.icon,
          counter: getCounter(panel, tab)
        }, tab.id);
      })
    }), (0,jsx_runtime.jsxs)(grafana_ui_src.TabContent, {
      className: styles.tabContent,
      children: [activeTab.id === PanelEditor_types.Ip.Query && (0,jsx_runtime.jsx)(PanelEditorQueries, {
        panel: panel,
        queries: panel.targets
      }), activeTab.id === PanelEditor_types.Ip.Alert && (0,jsx_runtime.jsx)(AlertTabIndex, {
        panel: panel,
        dashboard: dashboard
      }), activeTab.id === PanelEditor_types.Ip.Transform && (0,jsx_runtime.jsx)(TransformationsEditor, {
        panel: panel
      })]
    })]
  });
});
PanelEditorTabs.displayName = 'PanelEditorTabs';

function getCounter(panel, tab) {
  var _panel$getTransformat;

  switch (tab.id) {
    case PanelEditor_types.Ip.Query:
      return panel.targets.length;

    case PanelEditor_types.Ip.Alert:
      return panel.alert ? 1 : 0;

    case PanelEditor_types.Ip.Transform:
      const transformations = (_panel$getTransformat = panel.getTransformations()) !== null && _panel$getTransformat !== void 0 ? _panel$getTransformat : [];
      return transformations.length;
  }

  return null;
}

function renderAlertTab(tab, panel, dashboard, onChangeTab) {
  const alertingDisabled = !grafana_runtime_src.config.alertingEnabled && !grafana_runtime_src.config.unifiedAlertingEnabled;

  if (alertingDisabled) {
    return null;
  }

  if (grafana_runtime_src.config.unifiedAlertingEnabled) {
    return (0,jsx_runtime.jsx)(PanelAlertTab, {
      label: tab.text,
      active: tab.active,
      onChangeTab: () => onChangeTab(tab),
      icon: tab.icon,
      panel: panel,
      dashboard: dashboard
    }, tab.id);
  }

  if (grafana_runtime_src.config.alertingEnabled) {
    return (0,jsx_runtime.jsx)(grafana_ui_src.Tab, {
      label: tab.text,
      active: tab.active,
      onChangeTab: () => onChangeTab(tab),
      icon: tab.icon,
      counter: getCounter(panel, tab)
    }, tab.id);
  }

  return null;
}

const PanelEditorTabs_getStyles = theme => {
  return {
    wrapper: emotion_css_esm.css`
      display: flex;
      flex-direction: column;
      height: 100%;
    `,
    tabBar: emotion_css_esm.css`
      padding-left: ${theme.spacing(2)};
    `,
    tabContent: emotion_css_esm.css`
      padding: 0;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      min-height: 0;
      background: ${theme.colors.background.primary};
      border: 1px solid ${theme.components.panel.borderColor};
      border-left: none;
      border-bottom: none;
      border-top-right-radius: ${theme.shape.borderRadius(1.5)};
    `
  };
};
var memoize_one_esm = __webpack_require__("./.yarn/cache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js");
;






const getPanelEditorTabs = (0,memoize_one_esm.Z)((tab, plugin) => {
  var _tabs$find;

  const tabs = [];

  if (!plugin) {
    return tabs;
  }

  let defaultTab = PanelEditor_types.Ip.Visualize;

  if (plugin.meta.skipDataQuery) {
    return [];
  }

  if (!plugin.meta.skipDataQuery) {
    defaultTab = PanelEditor_types.Ip.Query;
    tabs.push({
      id: PanelEditor_types.Ip.Query,
      text: 'Query',
      icon: 'database',
      active: false
    });
    tabs.push({
      id: PanelEditor_types.Ip.Transform,
      text: 'Transform',
      icon: 'process',
      active: false
    });
  }

  const {
    alertingEnabled,
    unifiedAlertingEnabled
  } = (0,config.iE)();
  const hasRuleReadPermissions = context_srv.Vt.hasPermission((0,access_control.Bz)(datasource.GC).read);
  const isAlertingAvailable = alertingEnabled || unifiedAlertingEnabled && hasRuleReadPermissions;
  const isGraph = plugin.meta.id === 'graph';
  const isTimeseries = plugin.meta.id === 'timeseries';

  if (isAlertingAvailable && isGraph || isTimeseries) {
    tabs.push({
      id: PanelEditor_types.Ip.Alert,
      text: 'Alert',
      icon: 'bell',
      active: false
    });
  }

  const activeTab = (_tabs$find = tabs.find(item => item.id === (tab || defaultTab))) !== null && _tabs$find !== void 0 ? _tabs$find : tabs[0];
  activeTab.active = true;
  return tabs;
});
;
var PanelEditor_div;

function PanelEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





































const PanelEditor_mapStateToProps = (state, ownProps) => {
  const panel = state.panelEditor.getPanel();
  const panelState = (0,selectors.i)(state, panel);
  return {
    panel,
    plugin: panelState === null || panelState === void 0 ? void 0 : panelState.plugin,
    instanceState: panelState === null || panelState === void 0 ? void 0 : panelState.instanceState,
    initDone: state.panelEditor.initDone,
    uiState: state.panelEditor.ui,
    tableViewEnabled: state.panelEditor.tableViewEnabled,
    variables: (0,state_selectors.gt)(ownProps.dashboard.uid, state)
  };
};

const PanelEditor_mapDispatchToProps = {
  initPanelEditor: initPanelEditor,
  discardPanelChanges: discardPanelChanges,
  updatePanelEditorUIState: updatePanelEditorUIState,
  updateTimeZoneForSession: profile_state_reducers.YT,
  toggleTableView: state_reducers.OT,
  notifyApp: actions.$l
};
const PanelEditor_connector = (0,es.connect)(PanelEditor_mapStateToProps, PanelEditor_mapDispatchToProps);
class PanelEditorUnconnected extends react.PureComponent {
  constructor() {
    super(...arguments);

    PanelEditor_defineProperty(this, "eventSubs", void 0);

    PanelEditor_defineProperty(this, "state", {
      showSaveLibraryPanelModal: false
    });

    PanelEditor_defineProperty(this, "triggerForceUpdate", () => {
      this.forceUpdate();
    });

    PanelEditor_defineProperty(this, "onBack", () => {
      grafana_runtime_src.locationService.partial({
        editPanel: null,
        tab: null,
        showCategory: null
      });
    });

    PanelEditor_defineProperty(this, "onDiscard", () => {
      this.props.discardPanelChanges();
      this.onBack();
    });

    PanelEditor_defineProperty(this, "onOpenDashboardSettings", () => {
      grafana_runtime_src.locationService.partial({
        editview: 'settings'
      });
    });

    PanelEditor_defineProperty(this, "onSaveDashboard", () => {
      core.h$.publish(new types_events.Dn({
        component: SaveDashboardDrawer.d,
        props: {
          dashboard: this.props.dashboard
        }
      }));
    });

    PanelEditor_defineProperty(this, "onSaveLibraryPanel", async () => {
      if (!(0,guard.V)(this.props.panel)) {
        return;
      }

      const connectedDashboards = await (0,api.Ef)(this.props.panel.libraryPanel.uid);

      if (connectedDashboards.length === 0 || connectedDashboards.length === 1 && connectedDashboards.includes(this.props.dashboard.id)) {
        try {
          await (0,library_panels_utils.i6)(this.props.panel, this.props.dashboard.meta.folderId);
          this.props.notifyApp((0,library_panels_utils.bF)('Library panel saved'));
        } catch (err) {
          this.props.notifyApp((0,library_panels_utils.rm)(`Error saving library panel: "${err.statusText}"`));
        }

        return;
      }

      this.setState({
        showSaveLibraryPanelModal: true
      });
    });

    PanelEditor_defineProperty(this, "onChangeTab", tab => {
      grafana_runtime_src.locationService.partial({
        tab: tab.id
      });
    });

    PanelEditor_defineProperty(this, "onFieldConfigChange", config => {
      this.props.panel.updateFieldConfig(Object.assign({}, config));
    });

    PanelEditor_defineProperty(this, "onPanelOptionsChanged", options => {
      this.props.panel.updateOptions(options);
    });

    PanelEditor_defineProperty(this, "onPanelConfigChanged", (configKey, value) => {
      this.props.panel.setProperty(configKey, value);
      this.props.panel.render();
      this.forceUpdate();
    });

    PanelEditor_defineProperty(this, "onDisplayModeChange", mode => {
      const {
        updatePanelEditorUIState
      } = this.props;

      if (this.props.tableViewEnabled) {
        this.props.toggleTableView();
      }

      updatePanelEditorUIState({
        mode: mode
      });
    });

    PanelEditor_defineProperty(this, "onToggleTableView", () => {
      this.props.toggleTableView();
    });

    PanelEditor_defineProperty(this, "onTogglePanelOptions", () => {
      const {
        uiState,
        updatePanelEditorUIState
      } = this.props;
      updatePanelEditorUIState({
        isPanelOptionsVisible: !uiState.isPanelOptionsVisible
      });
    });

    PanelEditor_defineProperty(this, "onGoBackToDashboard", () => {
      grafana_runtime_src.locationService.partial({
        editPanel: null,
        tab: null,
        showCategory: null
      });
    });

    PanelEditor_defineProperty(this, "onConfirmAndDismissLibarayPanelModel", () => {
      this.setState({
        showSaveLibraryPanelModal: false
      });
    });
  }

  componentDidMount() {
    this.props.initPanelEditor(this.props.sourcePanel, this.props.dashboard);
  }

  componentDidUpdate() {
    const {
      panel,
      initDone
    } = this.props;

    if (initDone && !this.eventSubs) {
      this.eventSubs = new Subscription.w0();
      this.eventSubs.add(panel.events.subscribe(types_events.Wj, this.triggerForceUpdate));
    }
  }

  componentWillUnmount() {
    var _this$eventSubs;

    (_this$eventSubs = this.eventSubs) === null || _this$eventSubs === void 0 ? void 0 : _this$eventSubs.unsubscribe();
  }

  renderPanel(styles, isOnlyPanel) {
    const {
      dashboard,
      panel,
      uiState,
      tableViewEnabled,
      theme
    } = this.props;
    return (0,jsx_runtime.jsxs)("div", {
      className: styles.mainPaneWrapper,
      children: [this.renderPanelToolbar(styles), (0,jsx_runtime.jsx)("div", {
        className: styles.panelWrapper,
        children: (0,jsx_runtime.jsx)(index_esm.Z, {
          children: _ref => {
            let {
              width,
              height
            } = _ref;

            if (width < 3 || height < 3) {
              return null;
            } 


            if (isOnlyPanel) {
              height -= theme.spacing.gridSize * 2;
            }

            if (tableViewEnabled) {
              return (0,jsx_runtime.jsx)(PanelEditorTableView, {
                width: width,
                height: height,
                panel: panel,
                dashboard: dashboard
              });
            }

            const panelSize = (0,PanelEditor_utils.jF)(uiState.mode, width, height, panel);
            return (0,jsx_runtime.jsx)("div", {
              className: styles.centeringContainer,
              style: {
                width,
                height
              },
              children: (0,jsx_runtime.jsx)("div", {
                style: panelSize,
                "data-panelid": panel.id,
                children: (0,jsx_runtime.jsx)(DashboardPanel.l, {
                  stateKey: panel.key,
                  dashboard: dashboard,
                  panel: panel,
                  isEditing: true,
                  isViewing: false,
                  lazy: false,
                  width: panelSize.width,
                  height: panelSize.height
                }, panel.key)
              })
            });
          }
        })
      })]
    }, "panel");
  }

  renderPanelAndEditor(styles) {
    const {
      panel,
      dashboard,
      plugin,
      tab
    } = this.props;
    const tabs = getPanelEditorTabs(tab, plugin);
    const isOnlyPanel = tabs.length === 0;
    const panelPane = this.renderPanel(styles, isOnlyPanel);

    if (tabs.length === 0) {
      return panelPane;
    }

    return [panelPane, (0,jsx_runtime.jsx)("div", {
      className: styles.tabsWrapper,
      "aria-label": src.wl.components.PanelEditor.DataPane.content,
      children: (0,jsx_runtime.jsx)(PanelEditorTabs, {
        panel: panel,
        dashboard: dashboard,
        tabs: tabs,
        onChangeTab: this.onChangeTab
      }, panel.key)
    }, "panel-editor-tabs")];
  }

  renderTemplateVariables(styles) {
    const {
      variables
    } = this.props;

    if (!variables.length) {
      return null;
    }

    return (0,jsx_runtime.jsx)("div", {
      className: styles.variablesWrapper,
      children: (0,jsx_runtime.jsx)(SubMenuItems, {
        variables: variables
      })
    });
  }

  renderPanelToolbar(styles) {
    const {
      dashboard,
      uiState,
      variables,
      updateTimeZoneForSession,
      panel,
      tableViewEnabled
    } = this.props;
    return (0,jsx_runtime.jsx)("div", {
      className: styles.panelToolbar,
      children: (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
        justify: variables.length > 0 ? 'space-between' : 'flex-end',
        align: "flex-start",
        children: [this.renderTemplateVariables(styles), (0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
          children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
            label: "Table view",
            showLabel: true,
            id: "table-view",
            value: tableViewEnabled,
            onClick: this.onToggleTableView,
            "aria-label": src.wl.components.PanelEditor.toggleTableView
          }), (0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
            value: uiState.mode,
            options: PanelEditor_types.d7,
            onChange: this.onDisplayModeChange
          }), (0,jsx_runtime.jsx)(DashNavTimeControls.C, {
            dashboard: dashboard,
            onChangeTimeZone: updateTimeZoneForSession
          }), !uiState.isPanelOptionsVisible && (0,jsx_runtime.jsx)(VisualizationButton, {
            panel: panel
          })]
        })]
      })
    });
  }

  renderEditorActions() {
    let editorActions = [(0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
      icon: "cog",
      onClick: this.onOpenDashboardSettings,
      title: "Open dashboard settings"
    }, "settings"), (0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
      onClick: this.onDiscard,
      title: "Undo all changes",
      children: "Discard"
    }, "discard"), this.props.panel.libraryPanel ? (0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
      onClick: this.onSaveLibraryPanel,
      variant: "primary",
      title: "Apply changes and save library panel",
      children: "Save library panel"
    }, "save-panel") : (0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
      onClick: this.onSaveDashboard,
      title: "Apply changes and save dashboard",
      children: "Save"
    }, "save"), (0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
      onClick: this.onBack,
      variant: "primary",
      title: "Apply changes and go back to dashboard",
      "aria-label": src.wl.components.PanelEditor.applyButton,
      children: "Apply"
    }, "apply")];

    if (this.props.panel.libraryPanel) {
      editorActions.splice(1, 0, (0,jsx_runtime.jsx)(grafana_ui_src.ModalsController, {
        children: _ref2 => {
          let {
            showModal,
            hideModal
          } = _ref2;
          return (0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
            onClick: () => {
              showModal(UnlinkModal.i, {
                onConfirm: () => {
                  delete this.props.panel.libraryPanel;
                  this.props.panel.render();
                  this.forceUpdate();
                },
                onDismiss: hideModal,
                isOpen: true
              });
            },
            title: "Disconnects this panel from the library panel so that you can edit it regularly.",
            children: "Unlink"
          }, "unlink");
        }
      }, "unlink-controller")); 

      editorActions.pop();
    }

    return editorActions;
  }

  renderOptionsPane() {
    const {
      plugin,
      dashboard,
      panel,
      instanceState
    } = this.props;

    if (!plugin) {
      return PanelEditor_div || (PanelEditor_div = (0,jsx_runtime.jsx)("div", {}));
    }

    return (0,jsx_runtime.jsx)(OptionsPane, {
      plugin: plugin,
      dashboard: dashboard,
      panel: panel,
      instanceState: instanceState,
      onFieldConfigsChange: this.onFieldConfigChange,
      onPanelOptionsChanged: this.onPanelOptionsChanged,
      onPanelConfigChange: this.onPanelConfigChanged
    });
  }

  render() {
    const {
      dashboard,
      initDone,
      updatePanelEditorUIState,
      uiState,
      theme
    } = this.props;
    const styles = PanelEditor_getStyles(theme, this.props);

    if (!initDone) {
      return null;
    }

    return (0,jsx_runtime.jsxs)("div", {
      className: styles.wrapper,
      "aria-label": src.wl.components.PanelEditor.General.content,
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.PageToolbar, {
        title: `${dashboard.title} / Edit Panel`,
        onGoBack: this.onGoBackToDashboard,
        children: this.renderEditorActions()
      }), (0,jsx_runtime.jsx)("div", {
        className: styles.verticalSplitPanesWrapper,
        children: (0,jsx_runtime.jsx)(SplitPaneWrapper, {
          leftPaneComponents: this.renderPanelAndEditor(styles),
          rightPaneComponents: this.renderOptionsPane(),
          uiState: uiState,
          updateUiState: updatePanelEditorUIState,
          rightPaneVisible: uiState.isPanelOptionsVisible
        })
      }), this.state.showSaveLibraryPanelModal && (0,jsx_runtime.jsx)(SaveLibraryPanelModal, {
        panel: this.props.panel,
        folderId: this.props.dashboard.meta.folderId,
        onConfirm: this.onConfirmAndDismissLibarayPanelModel,
        onDiscard: this.onDiscard,
        onDismiss: this.onConfirmAndDismissLibarayPanelModel
      })]
    });
  }

}
const PanelEditor = (0,grafana_ui_src.withTheme2)(PanelEditor_connector(PanelEditorUnconnected));

const PanelEditor_getStyles = (0,grafana_ui_src.stylesFactory)((theme, props) => {
  const {
    uiState
  } = props;
  const paneSpacing = theme.spacing(2);
  return {
    wrapper: emotion_css_esm.css`
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: ${theme.zIndex.sidemenu};
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${theme.colors.background.canvas};
      display: flex;
      flex-direction: column;
    `,
    verticalSplitPanesWrapper: emotion_css_esm.css`
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      position: relative;
    `,
    mainPaneWrapper: emotion_css_esm.css`
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      padding-right: ${uiState.isPanelOptionsVisible ? 0 : paneSpacing};
    `,
    variablesWrapper: emotion_css_esm.css`
      label: variablesWrapper;
      display: flex;
      flex-grow: 1;
      flex-wrap: wrap;
      gap: ${theme.spacing(1, 2)};
    `,
    panelWrapper: emotion_css_esm.css`
      flex: 1 1 0;
      min-height: 0;
      width: 100%;
      padding-left: ${paneSpacing};
    `,
    tabsWrapper: emotion_css_esm.css`
      height: 100%;
      width: 100%;
    `,
    panelToolbar: emotion_css_esm.css`
      display: flex;
      padding: 0 0 ${paneSpacing} ${paneSpacing};
      justify-content: space-between;
      flex-wrap: wrap;
    `,
    toolbarLeft: emotion_css_esm.css`
      padding-left: ${theme.spacing(1)};
    `,
    centeringContainer: emotion_css_esm.css`
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-direction: column;
    `
  };
});
var LoadingIndicator = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/LoadingIndicator.tsx");
var DashboardQueryRunner = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
;








const AnnotationPicker = _ref => {
  let {
    annotation,
    events,
    onEnabledChanged
  } = _ref;
  const [loading, setLoading] = (0,react.useState)(false);
  const styles = (0,grafana_ui_src.useStyles2)(AnnotationPicker_getStyles);

  const onCancel = () => (0,DashboardQueryRunner.kt)().cancel(annotation);

  (0,react.useEffect)(() => {
    const started = events.getStream(types_events.z).subscribe({
      next: event => {
        if (event.payload === annotation) {
          setLoading(true);
        }
      }
    });
    const stopped = events.getStream(types_events.RB).subscribe({
      next: event => {
        if (event.payload === annotation) {
          setLoading(false);
        }
      }
    });
    return () => {
      started.unsubscribe();
      stopped.unsubscribe();
    };
  });
  return (0,jsx_runtime.jsx)("div", {
    className: styles.annotation,
    children: (0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      children: [(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: annotation.name,
        disabled: loading,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
          value: annotation.enable,
          onChange: () => onEnabledChanged(annotation),
          disabled: loading
        })
      }), (0,jsx_runtime.jsx)("div", {
        className: styles.indicator,
        children: (0,jsx_runtime.jsx)(LoadingIndicator.T, {
          loading: loading,
          onCancel: onCancel
        })
      })]
    })
  }, annotation.name);
};

function AnnotationPicker_getStyles(theme) {
  return {
    annotation: emotion_css_esm.css`
      display: inline-block;
      margin-right: ${theme.spacing(1)};

      .fa-caret-down {
        font-size: 75%;
        padding-left: ${theme.spacing(1)};
      }

      .gf-form-inline .gf-form {
        margin-bottom: 0;
      }
    `,
    indicator: emotion_css_esm.css`
      align-self: center;
      padding: 0 ${theme.spacing(0.5)};
    `
  };
}
;




const Annotations = _ref => {
  let {
    annotations,
    onAnnotationChanged,
    events
  } = _ref;
  const [visibleAnnotations, setVisibleAnnotations] = (0,react.useState)([]);
  (0,react.useEffect)(() => {
    setVisibleAnnotations(annotations.filter(annotation => annotation.hide !== true));
  }, [annotations]);

  if (visibleAnnotations.length === 0) {
    return null;
  }

  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: visibleAnnotations.map(annotation => (0,jsx_runtime.jsx)(AnnotationPicker, {
      events: events,
      annotation: annotation,
      onEnabledChanged: onAnnotationChanged
    }, annotation.name))
  });
};
var useEffectOnce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");
var sanitize = __webpack_require__("./packages/grafana-data/src/text/sanitize.ts");
var LinkSettingsEdit = __webpack_require__("./public/app/features/dashboard/components/LinksSettings/LinkSettingsEdit.tsx");
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
;
const DashboardLinksDashboard_excluded = ["link", "children"];

function DashboardLinksDashboard_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const DashboardLinksDashboard = props => {
  const {
    link,
    linkInfo
  } = props;
  const listRef = (0,react.useRef)(null);
  const [dropdownCssClass, setDropdownCssClass] = (0,react.useState)('invisible');
  const [opened, setOpened] = (0,react.useState)(0);
  const resolvedLinks = useResolvedLinks(props, opened);
  const buttonStyle = (0,grafana_ui_src.useStyles2)(theme => emotion_css_esm.css`
        color: ${theme.colors.text.primary};
      `);
  (0,react.useLayoutEffect)(() => {
    setDropdownCssClass(getDropdownLocationCssClass(listRef.current));
  }, [resolvedLinks]);

  if (link.asDropdown) {
    return (0,jsx_runtime.jsx)(LinkElement, {
      link: link,
      "data-testid": src.wl.components.DashboardLinks.dropDown,
      children: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [(0,jsx_runtime.jsxs)(grafana_ui_src.ToolbarButton, {
          onClick: () => setOpened(Date.now()),
          className: (0,emotion_css_esm.cx)('gf-form-label gf-form-label--dashlink', buttonStyle),
          "data-placement": "bottom",
          "data-toggle": "dropdown",
          "aria-expanded": !!opened,
          "aria-controls": "dropdown-list",
          "aria-haspopup": "menu",
          children: [(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            "aria-hidden": true,
            name: "bars",
            style: {
              marginRight: '4px'
            }
          }), (0,jsx_runtime.jsx)("span", {
            children: linkInfo.title
          })]
        }), (0,jsx_runtime.jsx)("ul", {
          id: "dropdown-list",
          className: `dropdown-menu ${dropdownCssClass}`,
          role: "menu",
          ref: listRef,
          children: resolvedLinks.length > 0 && resolvedLinks.map((resolvedLink, index) => {
            return (0,jsx_runtime.jsx)("li", {
              role: "none",
              children: (0,jsx_runtime.jsx)("a", {
                role: "menuitem",
                href: resolvedLink.url,
                target: link.targetBlank ? '_blank' : undefined,
                rel: "noreferrer",
                "data-testid": src.wl.components.DashboardLinks.link,
                "aria-label": `${resolvedLink.title} dashboard`,
                children: resolvedLink.title
              })
            }, `dashlinks-dropdown-item-${resolvedLink.id}-${index}`);
          })
        })]
      })
    }, "dashlinks-dropdown");
  }

  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: resolvedLinks.length > 0 && resolvedLinks.map((resolvedLink, index) => {
      return (0,jsx_runtime.jsx)(LinkElement, {
        link: link,
        "data-testid": src.wl.components.DashboardLinks.container,
        children: (0,jsx_runtime.jsxs)("a", {
          className: "gf-form-label gf-form-label--dashlink",
          href: resolvedLink.url,
          target: link.targetBlank ? '_blank' : undefined,
          rel: "noreferrer",
          "data-testid": src.wl.components.DashboardLinks.link,
          "aria-label": `${resolvedLink.title} dashboard`,
          children: [(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            "aria-hidden": true,
            name: "apps",
            style: {
              marginRight: '4px'
            }
          }), (0,jsx_runtime.jsx)("span", {
            children: resolvedLink.title
          })]
        })
      }, `dashlinks-list-item-${resolvedLink.id}-${index}`);
    })
  });
};

const LinkElement = props => {
  const {
    link,
    children
  } = props,
        rest = DashboardLinksDashboard_objectWithoutPropertiesLoose(props, DashboardLinksDashboard_excluded);

  return (0,jsx_runtime.jsxs)("div", Object.assign({}, rest, {
    className: "gf-form",
    children: [link.tooltip && (0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
      content: link.tooltip,
      children: children
    }), !link.tooltip && (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: children
    })]
  }));
};

const useResolvedLinks = (_ref, opened) => {
  let {
    link,
    dashboardId
  } = _ref;
  const {
    tags
  } = link;
  const result = (0,useAsync.Z)(() => searchForTags(tags), [tags, opened]);

  if (!result.value) {
    return [];
  }

  return resolveLinks(dashboardId, link, result.value);
};

async function searchForTags(tags) {
  let dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    getBackendSrv: backend_srv.i
  };
  const limit = 100;
  const searchHits = await dependencies.getBackendSrv().search({
    tag: tags,
    limit
  });
  return searchHits;
}
function resolveLinks(dashboardId, link, searchHits) {
  let dependencies = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
    getLinkSrv: link_srv.Bq,
    sanitize: sanitize.Nw,
    sanitizeUrl: sanitize.Nm
  };
  return searchHits.filter(searchHit => searchHit.id !== dashboardId).map(searchHit => {
    const id = searchHit.id;
    const title = dependencies.sanitize(searchHit.title);
    const resolvedLink = dependencies.getLinkSrv().getLinkUrl(Object.assign({}, link, {
      url: searchHit.url
    }));
    const url = dependencies.sanitizeUrl(resolvedLink);
    return {
      id,
      title,
      url
    };
  });
}

function getDropdownLocationCssClass(element) {
  if (!element) {
    return 'invisible';
  }

  const wrapperPos = element.parentElement.getBoundingClientRect();
  const pos = element.getBoundingClientRect();

  if (pos.width === 0) {
    return 'invisible';
  }

  if (wrapperPos.left + pos.width + 10 > window.innerWidth) {
    return 'pull-left';
  } else {
    return 'pull-right';
  }
}
;












const DashboardLinks = _ref => {
  let {
    dashboard,
    links
  } = _ref;
  const forceUpdate = (0,grafana_ui_src.useForceUpdate)();
  (0,useEffectOnce.Z)(() => {
    const sub = dashboard.events.subscribe(grafana_runtime_src.TimeRangeUpdatedEvent, forceUpdate);
    return () => sub.unsubscribe();
  });

  if (!links.length) {
    return null;
  }

  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: links.map((link, index) => {
      const linkInfo = (0,link_srv.Bq)().getAnchorInfo(link);
      const key = `${link.title}-$${index}`;

      if (link.type === 'dashboards') {
        return (0,jsx_runtime.jsx)(DashboardLinksDashboard, {
          link: link,
          linkInfo: linkInfo,
          dashboardId: dashboard.id
        }, key);
      }

      const linkElement = (0,jsx_runtime.jsxs)("a", {
        className: "gf-form-label gf-form-label--dashlink",
        href: (0,sanitize.Nm)(linkInfo.href),
        target: link.targetBlank ? '_blank' : undefined,
        rel: "noreferrer",
        "data-testid": src.wl.components.DashboardLinks.link,
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          "aria-hidden": true,
          name: LinkSettingsEdit.xy[link.icon],
          style: {
            marginRight: '4px'
          }
        }), (0,jsx_runtime.jsx)("span", {
          children: linkInfo.title
        })]
      });

      return (0,jsx_runtime.jsx)("div", {
        className: "gf-form",
        "data-testid": src.wl.components.DashboardLinks.container,
        children: link.tooltip ? (0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
          content: linkInfo.tooltip,
          children: linkElement
        }) : linkElement
      }, key);
    })
  });
};
;
var SubMenu_div, _div2;

function SubMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class SubMenuUnConnected extends react.PureComponent {
  constructor() {
    super(...arguments);

    SubMenu_defineProperty(this, "onAnnotationStateChanged", updatedAnnotation => {
      for (let index = 0; index < this.props.dashboard.annotations.list.length; index++) {
        const annotation = this.props.dashboard.annotations.list[index];

        if (annotation.name === updatedAnnotation.name) {
          annotation.enable = !annotation.enable;
          break;
        }
      }

      this.props.dashboard.startRefresh();
      this.forceUpdate();
    });
  }

  render() {
    const {
      dashboard,
      variables,
      links,
      annotations
    } = this.props;

    if (!dashboard.isSubMenuVisible()) {
      return null;
    }

    return (0,jsx_runtime.jsxs)("div", {
      className: "submenu-controls",
      children: [(0,jsx_runtime.jsx)("form", {
        "aria-label": "Template variables",
        className: styles,
        children: (0,jsx_runtime.jsx)(SubMenuItems, {
          variables: variables
        })
      }), (0,jsx_runtime.jsx)(Annotations, {
        annotations: annotations,
        onAnnotationChanged: this.onAnnotationStateChanged,
        events: dashboard.events
      }), SubMenu_div || (SubMenu_div = (0,jsx_runtime.jsx)("div", {
        className: "gf-form gf-form--grow"
      })), dashboard && (0,jsx_runtime.jsx)(DashboardLinks, {
        dashboard: dashboard,
        links: links
      }), _div2 || (_div2 = (0,jsx_runtime.jsx)("div", {
        className: "clearfix"
      }))]
    });
  }

}

const SubMenu_mapStateToProps = (state, ownProps) => {
  const {
    uid
  } = ownProps.dashboard;
  const templatingState = (0,state_selectors.AE)(uid, state);
  return {
    variables: (0,state_selectors.IV)(uid, templatingState.variables)
  };
};

const styles = emotion_css_esm.css`
  display: flex;
  flex-wrap: wrap;
  display: contents;
`;
const SubMenu = (0,es.connect)(SubMenu_mapStateToProps)(SubMenuUnConnected);
SubMenu.displayName = 'SubMenu';
var react_grid_layout = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/index.js");
var react_grid_layout_default = __webpack_require__.n(react_grid_layout);
var tinycolor = __webpack_require__("./.yarn/cache/tinycolor2-npm-1.4.2-462ba30c26-57ed262e08.zip/node_modules/tinycolor2/tinycolor.js");
var tinycolor_default = __webpack_require__.n(tinycolor);
var CardButton = __webpack_require__("./public/app/core/components/CardButton.tsx");
var dashboard_state_reducers = __webpack_require__("./public/app/features/dashboard/state/reducers.ts");
var LibraryPanelsSearch = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx");
;
var AddPanelWidget_Icon, AddPanelWidget_div;



















const getCopiedPanelPlugins = () => {
  const panels = (0,lodash.chain)(config.ZP.panels).filter({
    hideFromList: false
  }).map(item => item).value();
  const copiedPanels = [];
  const copiedPanelJson = store.Z.get(constants.zF);

  if (copiedPanelJson) {
    const copiedPanel = JSON.parse(copiedPanelJson);
    const pluginInfo = (0,lodash.find)(panels, {
      id: copiedPanel.type
    });

    if (pluginInfo) {
      const pluginCopy = (0,lodash.cloneDeep)(pluginInfo);
      pluginCopy.name = copiedPanel.title;
      pluginCopy.sort = -1;
      pluginCopy.defaults = copiedPanel;
      copiedPanels.push(pluginCopy);
    }
  }

  return (0,lodash.sortBy)(copiedPanels, 'sort');
};

const AddPanelWidgetUnconnected = _ref => {
  let {
    panel,
    dashboard
  } = _ref;
  const [addPanelView, setAddPanelView] = (0,react.useState)(false);

  const onCancelAddPanel = evt => {
    evt.preventDefault();
    dashboard.removePanel(panel);
  };

  const onBack = () => {
    setAddPanelView(false);
  };

  const onCreateNewPanel = () => {
    const {
      gridPos
    } = panel;
    const newPanel = {
      type: 'timeseries',
      title: 'Panel Title',
      gridPos: {
        x: gridPos.x,
        y: gridPos.y,
        w: gridPos.w,
        h: gridPos.h
      }
    };
    dashboard.addPanel(newPanel);
    dashboard.removePanel(panel);
    grafana_runtime_src.locationService.partial({
      editPanel: newPanel.id
    });
  };

  const onPasteCopiedPanel = panelPluginInfo => {
    const {
      gridPos
    } = panel;
    const newPanel = {
      type: panelPluginInfo.id,
      title: 'Panel Title',
      gridPos: {
        x: gridPos.x,
        y: gridPos.y,
        w: panelPluginInfo.defaults.gridPos.w,
        h: panelPluginInfo.defaults.gridPos.h
      }
    }; 

    if (panelPluginInfo.defaults) {
      (0,lodash.defaults)(newPanel, panelPluginInfo.defaults);
      newPanel.title = panelPluginInfo.defaults.title;
      store.Z["delete"](constants.zF);
    }

    dashboard.addPanel(newPanel);
    dashboard.removePanel(panel);
  };

  const onAddLibraryPanel = panelInfo => {
    const {
      gridPos
    } = panel;
    const newPanel = Object.assign({}, panelInfo.model, {
      gridPos,
      libraryPanel: (0,library_panels_utils.Pi)(panelInfo)
    });
    dashboard.addPanel(newPanel);
    dashboard.removePanel(panel);
  };

  const onCreateNewRow = () => {
    const newRow = {
      type: 'row',
      title: 'Row title',
      gridPos: {
        x: 0,
        y: 0
      }
    };
    dashboard.addPanel(newRow);
    dashboard.removePanel(panel);
  };

  const styles = (0,grafana_ui_src.useStyles2)(AddPanelWidget_getStyles);
  const copiedPanelPlugins = (0,react.useMemo)(() => getCopiedPanelPlugins(), []);
  return (0,jsx_runtime.jsx)("div", {
    className: styles.wrapper,
    children: (0,jsx_runtime.jsxs)("div", {
      className: (0,emotion_css_esm.cx)('panel-container', styles.callToAction),
      children: [(0,jsx_runtime.jsx)(AddPanelWidgetHandle, {
        onCancel: onCancelAddPanel,
        onBack: addPanelView ? onBack : undefined,
        styles: styles,
        children: addPanelView ? 'Add panel from panel library' : 'Add panel'
      }), addPanelView ? (0,jsx_runtime.jsx)(LibraryPanelsSearch.N, {
        onClick: onAddLibraryPanel,
        variant: LibraryPanelsSearch.e.Tight,
        showPanelFilter: true
      }) : (0,jsx_runtime.jsxs)("div", {
        className: styles.actionsWrapper,
        children: [(0,jsx_runtime.jsx)(CardButton.x, {
          icon: "file-blank",
          "aria-label": src.wl.pages.AddDashboard.addNewPanel,
          onClick: () => {
            (0,grafana_runtime_src.reportInteraction)('Create new panel');
            onCreateNewPanel();
          },
          children: "Add a new panel"
        }), (0,jsx_runtime.jsx)(CardButton.x, {
          icon: "wrap-text",
          "aria-label": src.wl.pages.AddDashboard.addNewRow,
          onClick: () => {
            (0,grafana_runtime_src.reportInteraction)('Create new row');
            onCreateNewRow();
          },
          children: "Add a new row"
        }), (0,jsx_runtime.jsx)(CardButton.x, {
          icon: "book-open",
          "aria-label": src.wl.pages.AddDashboard.addNewPanelLibrary,
          onClick: () => {
            (0,grafana_runtime_src.reportInteraction)('Add a panel from the panel library');
            setAddPanelView(true);
          },
          children: "Add a panel from the panel library"
        }), copiedPanelPlugins.length === 1 && (0,jsx_runtime.jsx)(CardButton.x, {
          icon: "clipboard-alt",
          "aria-label": src.wl.pages.AddDashboard.addNewPanelLibrary,
          onClick: () => {
            (0,grafana_runtime_src.reportInteraction)('Paste panel from clipboard');
            onPasteCopiedPanel(copiedPanelPlugins[0]);
          },
          children: "Paste panel from clipboard"
        })]
      })]
    })
  });
};
const AddPanelWidget_mapDispatchToProps = {
  addPanel: dashboard_state_reducers.tq
};
const AddPanelWidget = (0,es.connect)(undefined, AddPanelWidget_mapDispatchToProps)(AddPanelWidgetUnconnected);

const AddPanelWidgetHandle = _ref2 => {
  let {
    children,
    onBack,
    onCancel,
    styles
  } = _ref2;
  return (0,jsx_runtime.jsxs)("div", {
    className: (0,emotion_css_esm.cx)(styles.headerRow, 'grid-drag-handle'),
    children: [onBack && (0,jsx_runtime.jsx)("div", {
      className: styles.backButton,
      children: (0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
        "aria-label": "Go back",
        name: "arrow-left",
        onClick: onBack,
        surface: "header",
        size: "xl"
      })
    }), !onBack && (0,jsx_runtime.jsx)("div", {
      className: styles.backButton,
      children: AddPanelWidget_Icon || (AddPanelWidget_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "panel-add",
        size: "md"
      }))
    }), children && (0,jsx_runtime.jsx)("span", {
      children: children
    }), AddPanelWidget_div || (AddPanelWidget_div = (0,jsx_runtime.jsx)("div", {
      className: "flex-grow-1"
    })), (0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
      "aria-label": "Close 'Add Panel' widget",
      name: "times",
      onClick: onCancel,
      surface: "header"
    })]
  });
};

const AddPanelWidget_getStyles = theme => {
  const pulsate = emotion_css_esm.keyframes`
    0% {box-shadow: 0 0 0 2px ${theme.colors.background.canvas}, 0 0 0px 4px ${theme.colors.primary.main};}
    50% {box-shadow: 0 0 0 2px ${theme.components.dashboard.background}, 0 0 0px 4px ${tinycolor_default()(theme.colors.primary.main).darken(20).toHexString()};}
    100% {box-shadow: 0 0 0 2px ${theme.components.dashboard.background}, 0 0 0px 4px  ${theme.colors.primary.main};}
  `;
  return {
    wrapper: emotion_css_esm.css`
      height: 100%;
      padding-top: ${theme.spacing(0.5)};
    `,
    callToAction: emotion_css_esm.css`
      overflow: hidden;
      outline: 2px dotted transparent;
      outline-offset: 2px;
      box-shadow: 0 0 0 2px black, 0 0 0px 4px #1f60c4;
      animation: ${pulsate} 2s ease infinite;
    `,
    actionsWrapper: emotion_css_esm.css`
      height: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: ${theme.spacing(1)};
      row-gap: ${theme.spacing(1)};
      padding: ${theme.spacing(0, 1, 1, 1)};

      // This is to make the last action full width (if by itself)
      & > div:nth-child(2n-1):nth-last-of-type(1) {
        grid-column: span 2;
      }
    `,
    headerRow: emotion_css_esm.css`
      display: flex;
      align-items: center;
      height: 38px;
      flex-shrink: 0;
      width: 100%;
      font-size: ${theme.typography.fontSize};
      font-weight: ${theme.typography.fontWeightMedium};
      padding-left: ${theme.spacing(1)};
      transition: background-color 0.1s ease-in-out;
      cursor: move;

      &:hover {
        background: ${theme.colors.background.secondary};
      }
    `,
    backButton: emotion_css_esm.css`
      display: flex;
      align-items: center;
      cursor: pointer;
      padding-left: ${theme.spacing(0.5)};
      width: ${theme.spacing(4)};
    `,
    noMargin: emotion_css_esm.css`
      margin: 0;
    `
  };
};
;

;
var RowOptionsForm_Button;







const RowOptionsForm = _ref => {
  var _Field, _Modal$ButtonRow;

  let {
    repeat,
    title,
    onUpdate,
    onCancel
  } = _ref;
  const [newRepeat, setNewRepeat] = (0,react.useState)(repeat);
  const onChangeRepeat = (0,react.useCallback)(name => setNewRepeat(name), [setNewRepeat]);
  return (0,jsx_runtime.jsx)(grafana_ui_src.Form, {
    defaultValues: {
      title
    },
    onSubmit: formData => {
      onUpdate(formData.title, newRepeat);
    },
    children: _ref2 => {
      let {
        register
      } = _ref2;
      return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: "Title",
          children: (0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({}, register('title'), {
            type: "text"
          }))
        }), _Field || (_Field = (0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: "Repeat for",
          children: (0,jsx_runtime.jsx)(RepeatRowSelect, {
            repeat: newRepeat,
            onChange: onChangeRepeat
          })
        })), _Modal$ButtonRow || (_Modal$ButtonRow = (0,jsx_runtime.jsxs)(grafana_ui_src.Modal.ButtonRow, {
          children: [(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            type: "button",
            variant: "secondary",
            onClick: onCancel,
            fill: "outline",
            children: "Cancel"
          }), RowOptionsForm_Button || (RowOptionsForm_Button = (0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            type: "submit",
            children: "Update"
          }))]
        }))]
      });
    }
  });
};
;





const RowOptionsModal = _ref => {
  let {
    repeat,
    title,
    onDismiss,
    onUpdate
  } = _ref;
  const styles = RowOptionsModal_getStyles();
  return (0,jsx_runtime.jsx)(grafana_ui_src.Modal, {
    isOpen: true,
    title: "Row options",
    icon: "copy",
    onDismiss: onDismiss,
    className: styles.modal,
    children: (0,jsx_runtime.jsx)(RowOptionsForm, {
      repeat: repeat,
      title: title,
      onCancel: onDismiss,
      onUpdate: onUpdate
    })
  });
};
const RowOptionsModal_getStyles = (0,grafana_ui_src.stylesFactory)(() => {
  return {
    modal: emotion_css_esm.css`
      label: RowOptionsModal;
      width: 500px;
    `
  };
});
;
var RowOptionsButton_Icon;





const RowOptionsButton = _ref => {
  let {
    repeat,
    title,
    onUpdate
  } = _ref;

  const onUpdateChange = hideModal => (title, repeat) => {
    onUpdate(title, repeat);
    hideModal();
  };

  return (0,jsx_runtime.jsx)(grafana_ui_src.ModalsController, {
    children: _ref2 => {
      let {
        showModal,
        hideModal
      } = _ref2;
      return (0,jsx_runtime.jsx)("a", {
        className: "pointer",
        onClick: () => {
          showModal(RowOptionsModal, {
            title,
            repeat,
            onDismiss: hideModal,
            onUpdate: onUpdateChange(hideModal)
          });
        },
        children: RowOptionsButton_Icon || (RowOptionsButton_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: "cog"
        }))
      });
    }
  });
};
RowOptionsButton.displayName = 'RowOptionsButton';
;
var DashboardRow_Icon, DashboardRow_div;

function DashboardRow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class DashboardRow extends react.Component {
  constructor(props) {
    super(props);

    DashboardRow_defineProperty(this, "sub", void 0);

    DashboardRow_defineProperty(this, "onVariableUpdated", () => {
      this.forceUpdate();
    });

    DashboardRow_defineProperty(this, "onToggle", () => {
      this.props.dashboard.toggleRow(this.props.panel);
      this.setState(prevState => {
        return {
          collapsed: !prevState.collapsed
        };
      });
    });

    DashboardRow_defineProperty(this, "onUpdate", (title, repeat) => {
      this.props.panel['title'] = title;
      this.props.panel['repeat'] = repeat !== null && repeat !== void 0 ? repeat : undefined;
      this.props.panel.render();
      this.props.dashboard.processRepeats();
      this.forceUpdate();
    });

    DashboardRow_defineProperty(this, "onDelete", () => {
      app_events.Z.publish(new types_events.VJ({
        title: 'Delete row',
        text: 'Are you sure you want to remove this row and all its panels?',
        altActionText: 'Delete row only',
        icon: 'trash-alt',
        onConfirm: () => {
          this.props.dashboard.removeRow(this.props.panel, true);
        },
        onAltAction: () => {
          this.props.dashboard.removeRow(this.props.panel, false);
        }
      }));
    });

    this.state = {
      collapsed: this.props.panel.collapsed
    };
  }

  componentDidMount() {
    this.sub = this.props.dashboard.events.subscribe(grafana_runtime_src.RefreshEvent, this.onVariableUpdated);
  }

  componentWillUnmount() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  render() {
    const classes = classnames_default()({
      'dashboard-row': true,
      'dashboard-row--collapsed': this.state.collapsed
    });
    const title = (0,grafana_runtime_src.getTemplateSrv)().replace(this.props.panel.title, this.props.panel.scopedVars, 'text');
    const count = this.props.panel.panels ? this.props.panel.panels.length : 0;
    const panels = count === 1 ? 'panel' : 'panels';
    const canEdit = this.props.dashboard.meta.canEdit === true;
    return (0,jsx_runtime.jsxs)("div", {
      className: classes,
      children: [(0,jsx_runtime.jsxs)("a", {
        className: "dashboard-row__title pointer",
        "data-testid": src.wl.components.DashboardRow.title(title),
        onClick: this.onToggle,
        children: [(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: this.state.collapsed ? 'angle-right' : 'angle-down'
        }), title, (0,jsx_runtime.jsxs)("span", {
          className: "dashboard-row__panel_count",
          children: ["(", count, " ", panels, ")"]
        })]
      }), canEdit && (0,jsx_runtime.jsxs)("div", {
        className: "dashboard-row__actions",
        children: [(0,jsx_runtime.jsx)(RowOptionsButton, {
          title: this.props.panel.title,
          repeat: this.props.panel.repeat,
          onUpdate: this.onUpdate
        }), (0,jsx_runtime.jsx)("a", {
          className: "pointer",
          onClick: this.onDelete,
          children: DashboardRow_Icon || (DashboardRow_Icon = (0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            name: "trash-alt"
          }))
        })]
      }), this.state.collapsed === true && (0,jsx_runtime.jsx)("div", {
        className: "dashboard-row__toggle-target",
        onClick: this.onToggle,
        children: "\xA0"
      }), canEdit && (DashboardRow_div || (DashboardRow_div = (0,jsx_runtime.jsx)("div", {
        className: "dashboard-row__drag grid-drag-handle"
      })))]
    });
  }

}
;

;
const DashboardGrid_excluded = ["gridWidth", "gridPos", "isViewing", "windowHeight", "windowWidth"];

function DashboardGrid_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DashboardGrid_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const DashboardGrid_mapDispatchToProps = {
  cleanAndRemoveMany: panel_state_actions.x
};
const DashboardGrid_connector = (0,es.connect)(null, DashboardGrid_mapDispatchToProps);
class DashboardGridUnconnected extends react.PureComponent {
  constructor(props) {
    super(props);

    DashboardGrid_defineProperty(this, "panelMap", {});

    DashboardGrid_defineProperty(this, "eventSubs", new Subscription.w0());

    DashboardGrid_defineProperty(this, "windowHeight", 1200);

    DashboardGrid_defineProperty(this, "windowWidth", 1920);

    DashboardGrid_defineProperty(this, "gridWidth", 0);

    DashboardGrid_defineProperty(this, "lastPanelBottom", 0);

    DashboardGrid_defineProperty(this, "onLayoutChange", newLayout => {
      for (const newPos of newLayout) {
        this.panelMap[newPos.i].updateGridPos(newPos);
      }

      this.props.dashboard.sortPanelsByGridPos(); 

      if (!this.state.isLayoutInitialized) {
        this.setState({
          isLayoutInitialized: true
        });
      }
    });

    DashboardGrid_defineProperty(this, "triggerForceUpdate", () => {
      this.forceUpdate();
    });

    DashboardGrid_defineProperty(this, "updateGridPos", (item, layout) => {
      this.panelMap[item.i].updateGridPos(item);
    });

    DashboardGrid_defineProperty(this, "onResize", (layout, oldItem, newItem) => {
      const panel = this.panelMap[newItem.i];
      panel.updateGridPos(newItem);
      panel.configRev++; 
    });

    DashboardGrid_defineProperty(this, "onResizeStop", (layout, oldItem, newItem) => {
      this.updateGridPos(newItem, layout);
    });

    DashboardGrid_defineProperty(this, "onDragStop", (layout, oldItem, newItem) => {
      this.updateGridPos(newItem, layout);
    });

    this.state = {
      isLayoutInitialized: false
    };
  }

  componentDidMount() {
    const {
      dashboard
    } = this.props;
    this.eventSubs.add(dashboard.events.subscribe(types_events._B, this.triggerForceUpdate));
  }

  componentWillUnmount() {
    this.eventSubs.unsubscribe();
    this.props.cleanAndRemoveMany(Object.keys(this.panelMap));
  }

  buildLayout() {
    const layout = [];
    this.panelMap = {};

    for (const panel of this.props.dashboard.panels) {
      if (!panel.key) {
        panel.key = `panel-${panel.id}-${Date.now()}`;
      }

      this.panelMap[panel.key] = panel;

      if (!panel.gridPos) {
        console.log('panel without gridpos');
        continue;
      }

      const panelPos = {
        i: panel.key,
        x: panel.gridPos.x,
        y: panel.gridPos.y,
        w: panel.gridPos.w,
        h: panel.gridPos.h
      };

      if (panel.type === 'row') {
        panelPos.w = constants.cz;
        panelPos.h = 1;
        panelPos.isResizable = false;
        panelPos.isDraggable = panel.collapsed;
      }

      layout.push(panelPos);
    }

    return layout;
  }

  getPanelScreenPos(panel, gridWidth) {
    let top = 0; 

    if (gridWidth < grafana_runtime_src.config.theme2.breakpoints.values.md) {
      top = this.lastPanelBottom + constants.hD;
    } else {
      top = translateGridHeightToScreenHeight(panel.gridPos.y) + constants.hD;
    }

    this.lastPanelBottom = top + translateGridHeightToScreenHeight(panel.gridPos.h);
    return {
      top,
      bottom: this.lastPanelBottom
    };
  }

  renderPanels(gridWidth) {
    const panelElements = []; 

    this.lastPanelBottom = 0; 

    if (this.gridWidth !== gridWidth) {
      var _window$innerHeight;

      this.windowHeight = (_window$innerHeight = window.innerHeight) !== null && _window$innerHeight !== void 0 ? _window$innerHeight : 1000;
      this.windowWidth = window.innerWidth;
      this.gridWidth = gridWidth;
    }

    for (const panel of this.props.dashboard.panels) {
      const panelClasses = classnames_default()({
        'react-grid-item--fullscreen': panel.isViewing
      });
      panelElements.push( (0,jsx_runtime.jsx)(GrafanaGridItem, {
        className: panelClasses,
        "data-panelid": panel.id,
        gridPos: panel.gridPos,
        gridWidth: gridWidth,
        windowHeight: this.windowHeight,
        windowWidth: this.windowWidth,
        isViewing: panel.isViewing,
        children: (width, height) => {
          return this.renderPanel(panel, width, height);
        }
      }, panel.key));
    }

    return panelElements;
  }

  renderPanel(panel, width, height) {
    if (panel.type === 'row') {
      return (0,jsx_runtime.jsx)(DashboardRow, {
        panel: panel,
        dashboard: this.props.dashboard
      }, panel.key);
    }

    if (panel.type === 'add-panel') {
      return (0,jsx_runtime.jsx)(AddPanelWidget, {
        panel: panel,
        dashboard: this.props.dashboard
      }, panel.key);
    }

    return (0,jsx_runtime.jsx)(DashboardPanel.l, {
      stateKey: panel.key,
      panel: panel,
      dashboard: this.props.dashboard,
      isEditing: panel.isEditing,
      isViewing: panel.isViewing,
      width: width,
      height: height
    }, panel.key);
  }

  render() {
    const {
      dashboard
    } = this.props;

    return (0,jsx_runtime.jsx)("div", {
      style: {
        flex: '1 1 auto',
        display: this.props.editPanel ? 'none' : undefined
      },
      children: (0,jsx_runtime.jsx)(index_esm.Z, {
        disableHeight: true,
        children: _ref => {
          let {
            width
          } = _ref;

          if (width === 0) {
            return null;
          }

          const draggable = width <= 769 ? false : dashboard.meta.canEdit;

          return (

            (0,jsx_runtime.jsx)("div", {
              style: {
                width: `${width}px`,
                height: '100%'
              },
              children: (0,jsx_runtime.jsx)((react_grid_layout_default()), {
                width: width,
                isDraggable: draggable,
                isResizable: dashboard.meta.canEdit,
                containerPadding: [0, 0],
                useCSSTransforms: false,
                margin: [constants.hD, constants.hD],
                cols: constants.cz,
                rowHeight: constants.K3,
                draggableHandle: ".grid-drag-handle",
                layout: this.buildLayout(),
                onDragStop: this.onDragStop,
                onResize: this.onResize,
                onResizeStop: this.onResizeStop,
                onLayoutChange: this.onLayoutChange,
                children: this.renderPanels(width)
              })
            })
          );
        }
      })
    });
  }

}

const GrafanaGridItem = react.forwardRef((props, ref) => {
  var _props$style;

  const theme = grafana_runtime_src.config.theme2;
  let width = 100;
  let height = 100;

  const {
    gridWidth,
    gridPos,
    isViewing,
    windowHeight,
    windowWidth
  } = props,
        divProps = DashboardGrid_objectWithoutPropertiesLoose(props, DashboardGrid_excluded);

  const style = (_props$style = props.style) !== null && _props$style !== void 0 ? _props$style : {};

  if (isViewing) {
    width = gridWidth;
    height = windowHeight * 0.85;
    style.height = height;
    style.width = '100%';
  } else if (windowWidth < theme.breakpoints.values.md) {
    width = props.gridWidth;
    height = translateGridHeightToScreenHeight(gridPos.h);
    style.height = height;
    style.width = '100%';
  } else {
    width = parseFloat(props.style.width);
    height = parseFloat(props.style.height);
  } 


  return (0,jsx_runtime.jsx)("div", Object.assign({}, divProps, {
    ref: ref,
    children: [props.children[0](width, height), props.children.slice(1)]
  }));
});

function translateGridHeightToScreenHeight(gridHeight) {
  return gridHeight * (constants.K3 + constants.hD) - constants.hD;
}

GrafanaGridItem.displayName = 'GridItemWithDimensions';
const DashboardGrid = DashboardGrid_connector(DashboardGridUnconnected);
var liveTimer = __webpack_require__("./public/app/features/dashboard/dashgrid/liveTimer.ts");
var dashboard_state_actions = __webpack_require__("./public/app/features/dashboard/state/actions.ts");
var initDashboard = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");
;
var _DashboardFailed;

function DashboardPage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
































const DashboardPage_mapStateToProps = state => ({
  initPhase: state.dashboard.initPhase,
  initError: state.dashboard.initError,
  dashboard: state.dashboard.getModel()
});
const DashboardPage_mapDispatchToProps = {
  initDashboard: initDashboard.mV,
  cleanUpDashboardAndVariables: dashboard_state_actions.lw,
  notifyApp: actions.$l,
  cancelVariables: state_actions.wX,
  templateVarsChangedInUrl: state_actions.xs
};
const DashboardPage_connector = (0,es.connect)(DashboardPage_mapStateToProps, DashboardPage_mapDispatchToProps);
class UnthemedDashboardPage extends react.PureComponent {
  constructor() {
    super(...arguments);

    DashboardPage_defineProperty(this, "forceRouteReloadCounter", 0);

    DashboardPage_defineProperty(this, "state", this.getCleanState());

    DashboardPage_defineProperty(this, "updateLiveTimer", () => {
      var _this$props$dashboard;

      let tr = undefined;

      if ((_this$props$dashboard = this.props.dashboard) !== null && _this$props$dashboard !== void 0 && _this$props$dashboard.liveNow) {
        tr = (0,TimeSrv.$t)().timeRange();
      }

      liveTimer.A.setLiveTimeRange(tr);
    });

    DashboardPage_defineProperty(this, "onAddPanel", () => {
      const {
        dashboard
      } = this.props;

      if (!dashboard) {
        return;
      } 


      if (dashboard.panels.length > 0 && dashboard.panels[0].type === 'add-panel') {
        return;
      }

      dashboard.addPanel({
        type: 'add-panel',
        gridPos: {
          x: 0,
          y: 0,
          w: 12,
          h: 8
        },
        title: 'Panel Title'
      }); 

      this.setState({
        updateScrollTop: 0
      });
    });

    DashboardPage_defineProperty(this, "setScrollRef", scrollElement => {
      this.setState({
        scrollElement
      });
    });
  }

  getCleanState() {
    return {
      editPanel: null,
      viewPanel: null,
      showLoadingState: false,
      rememberScrollTop: 0,
      panelNotFound: false,
      editPanelAccessDenied: false
    };
  }

  componentDidMount() {
    var _this$props$history$l;

    this.initDashboard();
    this.forceRouteReloadCounter = ((_this$props$history$l = this.props.history.location.state) === null || _this$props$history$l === void 0 ? void 0 : _this$props$history$l.routeReloadCounter) || 0;
  }

  componentWillUnmount() {
    this.closeDashboard();
  }

  closeDashboard() {
    this.props.cleanUpDashboardAndVariables();
    this.setState(this.getCleanState());
  }

  initDashboard() {
    const {
      dashboard,
      match,
      queryParams
    } = this.props;

    if (dashboard) {
      this.closeDashboard();
    }

    this.props.initDashboard({
      urlSlug: match.params.slug,
      urlUid: match.params.uid,
      urlType: match.params.type,
      urlFolderId: queryParams.folderId,
      routeName: this.props.route.routeName,
      fixUrl: true
    }); 

    setTimeout(this.updateLiveTimer, 250);
  }

  componentDidUpdate(prevProps, prevState) {
    var _this$props$history$l2;

    const {
      dashboard,
      match,
      templateVarsChangedInUrl
    } = this.props;
    const routeReloadCounter = (_this$props$history$l2 = this.props.history.location.state) === null || _this$props$history$l2 === void 0 ? void 0 : _this$props$history$l2.routeReloadCounter;

    if (!dashboard) {
      return;
    } 


    if (prevProps.dashboard !== dashboard) {
      document.title = dashboard.title + ' - ' + Branding.c.AppTitle;
    }

    if (prevProps.match.params.uid !== match.params.uid || routeReloadCounter !== undefined && this.forceRouteReloadCounter !== routeReloadCounter) {
      this.initDashboard();
      this.forceRouteReloadCounter = routeReloadCounter;
      return;
    }

    if (prevProps.location.search !== this.props.location.search) {
      const prevUrlParams = prevProps.queryParams;
      const urlParams = this.props.queryParams;

      if ((urlParams === null || urlParams === void 0 ? void 0 : urlParams.from) !== (prevUrlParams === null || prevUrlParams === void 0 ? void 0 : prevUrlParams.from) || (urlParams === null || urlParams === void 0 ? void 0 : urlParams.to) !== (prevUrlParams === null || prevUrlParams === void 0 ? void 0 : prevUrlParams.to)) {
        (0,TimeSrv.$t)().updateTimeRangeFromUrl();
        this.updateLiveTimer();
      }

      if (!(prevUrlParams !== null && prevUrlParams !== void 0 && prevUrlParams.refresh) && urlParams !== null && urlParams !== void 0 && urlParams.refresh) {
        (0,TimeSrv.$t)().setAutoRefresh(urlParams.refresh);
      }

      const templateVarChanges = (0,utils.xT)(this.props.queryParams, prevProps.queryParams);

      if (templateVarChanges) {
        templateVarsChangedInUrl(dashboard.uid, templateVarChanges);
      }
    } 


    if (this.state.editPanel && !prevState.editPanel) {
      var _this$props$dashboard2;

      dashboardWatcher.H.setEditingState(true); 

      (_this$props$dashboard2 = this.props.dashboard) === null || _this$props$dashboard2 === void 0 ? void 0 : _this$props$dashboard2.events.publish(new types_events.xF(this.state.editPanel.id));
    } 


    if (!this.state.editPanel && prevState.editPanel) {
      var _this$props$dashboard3;

      dashboardWatcher.H.setEditingState(false); 

      (_this$props$dashboard3 = this.props.dashboard) === null || _this$props$dashboard3 === void 0 ? void 0 : _this$props$dashboard3.events.publish(new types_events.Yr(prevState.editPanel.id));
    }

    if (this.state.editPanelAccessDenied) {
      this.props.notifyApp((0,appNotification.t_)('Permission to edit panel denied'));
      grafana_runtime_src.locationService.partial({
        editPanel: null
      });
    }

    if (this.state.panelNotFound) {
      this.props.notifyApp((0,appNotification.t_)(`Panel not found`));
      grafana_runtime_src.locationService.partial({
        editPanel: null,
        viewPanel: null
      });
    }
  }

  static getDerivedStateFromProps(props, state) {
    const {
      dashboard,
      queryParams
    } = props;
    const urlEditPanelId = queryParams.editPanel;
    const urlViewPanelId = queryParams.viewPanel;

    if (!dashboard) {
      return state;
    } 


    if (!state.editPanel && urlEditPanelId) {
      const panel = dashboard.getPanelByUrlId(urlEditPanelId);

      if (!panel) {
        return Object.assign({}, state, {
          panelNotFound: true
        });
      }

      if (dashboard.canEditPanel(panel)) {
        var _state$scrollElement;

        return Object.assign({}, state, {
          editPanel: panel,
          rememberScrollTop: (_state$scrollElement = state.scrollElement) === null || _state$scrollElement === void 0 ? void 0 : _state$scrollElement.scrollTop
        });
      } else {
        return Object.assign({}, state, {
          editPanelAccessDenied: true
        });
      }
    } 
    else if (state.editPanel && !urlEditPanelId) {
      return Object.assign({}, state, {
        editPanel: null,
        updateScrollTop: state.rememberScrollTop
      });
    } 


    if (!state.viewPanel && urlViewPanelId) {
      var _state$scrollElement2;

      const panel = dashboard.getPanelByUrlId(urlViewPanelId);

      if (!panel) {
        return Object.assign({}, state, {
          panelNotFound: urlEditPanelId
        });
      } 


      dashboard.initViewPanel(panel);
      return Object.assign({}, state, {
        viewPanel: panel,
        rememberScrollTop: (_state$scrollElement2 = state.scrollElement) === null || _state$scrollElement2 === void 0 ? void 0 : _state$scrollElement2.scrollTop,
        updateScrollTop: 0
      });
    } 
    else if (state.viewPanel && !urlViewPanelId) {
      dashboard.exitViewPanel(state.viewPanel);
      return Object.assign({}, state, {
        viewPanel: null,
        updateScrollTop: state.rememberScrollTop
      });
    } 


    if (state.panelNotFound || state.editPanelAccessDenied && !urlEditPanelId) {
      return Object.assign({}, state, {
        panelNotFound: false,
        editPanelAccessDenied: false
      });
    }

    return state;
  }

  getInspectPanel() {
    const {
      dashboard,
      queryParams
    } = this.props;
    const inspectPanelId = queryParams.inspect;

    if (!dashboard || !inspectPanelId) {
      return null;
    }

    const inspectPanel = dashboard.getPanelById(parseInt(inspectPanelId, 10)); 

    if (!inspectPanel) {
      return null;
    }

    return inspectPanel;
  }

  render() {
    const {
      dashboard,
      initError,
      queryParams,
      theme
    } = this.props;
    const {
      editPanel,
      viewPanel,
      updateScrollTop
    } = this.state;
    const kioskMode = (0,kiosk.U6)();
    const styles = DashboardPage_getStyles(theme, kioskMode);

    if (!dashboard) {
      return (0,jsx_runtime.jsx)(DashboardLoading, {
        initPhase: this.props.initPhase
      });
    }

    const inspectPanel = this.getInspectPanel();
    const containerClassNames = classnames_default()(styles.dashboardContainer, {
      'panel-in-fullscreen': viewPanel
    });
    const showSubMenu = !editPanel && kioskMode === types.UX.Off && !this.props.queryParams.editview;
    return (0,jsx_runtime.jsxs)("div", {
      className: containerClassNames,
      children: [kioskMode !== types.UX.Full && (0,jsx_runtime.jsx)("header", {
        "data-testid": src.wl.pages.Dashboard.DashNav.navV2,
        children: (0,jsx_runtime.jsx)(DashNav.t, {
          dashboard: dashboard,
          title: dashboard.title,
          folderTitle: dashboard.meta.folderTitle,
          isFullscreen: !!viewPanel,
          onAddPanel: this.onAddPanel,
          kioskMode: kioskMode,
          hideTimePicker: dashboard.timepicker.hidden
        })
      }), (0,jsx_runtime.jsx)(DashboardPrompt, {
        dashboard: dashboard
      }), (0,jsx_runtime.jsx)("div", {
        className: styles.dashboardScroll,
        children: (0,jsx_runtime.jsx)(grafana_ui_src.CustomScrollbar, {
          autoHeightMin: "100%",
          scrollRefCallback: this.setScrollRef,
          scrollTop: updateScrollTop,
          hideHorizontalTrack: true,
          updateAfterMountMs: 500,
          children: (0,jsx_runtime.jsxs)("div", {
            className: styles.dashboardContent,
            children: [initError && (_DashboardFailed || (_DashboardFailed = (0,jsx_runtime.jsx)(DashboardFailed, {}))), showSubMenu && (0,jsx_runtime.jsx)("section", {
              "aria-label": src.wl.pages.Dashboard.SubMenu.submenu,
              children: (0,jsx_runtime.jsx)(SubMenu, {
                dashboard: dashboard,
                annotations: dashboard.annotations.list,
                links: dashboard.links
              })
            }), (0,jsx_runtime.jsx)(DashboardGrid, {
              dashboard: dashboard,
              viewPanel: viewPanel,
              editPanel: editPanel
            })]
          })
        })
      }), inspectPanel && (0,jsx_runtime.jsx)(PanelInspector, {
        dashboard: dashboard,
        panel: inspectPanel
      }), editPanel && (0,jsx_runtime.jsx)(PanelEditor, {
        dashboard: dashboard,
        sourcePanel: editPanel,
        tab: this.props.queryParams.tab
      }), queryParams.editview && (0,jsx_runtime.jsx)(DashboardSettings.D, {
        dashboard: dashboard,
        editview: queryParams.editview
      })]
    });
  }

}

const DashboardPage_getStyles = (0,grafana_ui_src.stylesFactory)((theme, kioskMode) => {
  const contentPadding = kioskMode !== types.UX.Full ? theme.spacing(0, 2, 2) : theme.spacing(2);
  return {
    dashboardContainer: emotion_css_esm.css`
      width: 100%;
      height: 100%;
      display: flex;
      flex: 1 1 0;
      flex-direction: column;
      min-height: 0;
    `,
    dashboardScroll: emotion_css_esm.css`
      width: 100%;
      flex-grow: 1;
      min-height: 0;
      display: flex;
    `,
    dashboardContent: emotion_css_esm.css`
      padding: ${contentPadding};
      flex-basis: 100%;
      flex-grow: 1;
    `
  };
});
const DashboardPage = (0,grafana_ui_src.withTheme2)(UnthemedDashboardPage);
DashboardPage.displayName = 'DashboardPage';
 const containers_DashboardPage = (DashboardPage_connector(DashboardPage));

 }),

 "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/GridItem.js":
 ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./.yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-c056d3f1c0.zip/node_modules/prop-types/index.js"));

var _reactDraggable = __webpack_require__("./.yarn/__virtual__/react-draggable-virtual-eb201fa540/0/cache/react-draggable-npm-4.4.4-f0b7a5c546-b8258a5893.zip/node_modules/react-draggable/build/cjs/cjs.js");

var _reactResizable = __webpack_require__("./.yarn/__virtual__/react-resizable-virtual-13412137cd/0/cache/react-resizable-npm-3.0.4-aa39f9db2b-cbf86ad04b.zip/node_modules/react-resizable/index.js");

var _utils = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/utils.js");

var _calculateUtils = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/calculateUtils.js");

var _ReactGridLayoutPropTypes = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/ReactGridLayoutPropTypes.js");

var _clsx = _interopRequireDefault(__webpack_require__("./.yarn/cache/clsx-npm-1.1.1-362bec0598-ff05265032.zip/node_modules/clsx/dist/clsx.m.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GridItem = function (_React$Component) {
  _inherits(GridItem, _React$Component);

  var _super = _createSuper(GridItem);

  function GridItem() {
    var _this;

    _classCallCheck(this, GridItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      resizing: null,
      dragging: null,
      className: ""
    });

    _defineProperty(_assertThisInitialized(_this), "elementRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (e, _ref) {
      var node = _ref.node;
      var _this$props = _this.props,
          onDragStart = _this$props.onDragStart,
          transformScale = _this$props.transformScale;
      if (!onDragStart) return;
      var newPosition
      = {
        top: 0,
        left: 0
      }; 

      var offsetParent = node.offsetParent;
      if (!offsetParent) return;
      var parentRect = offsetParent.getBoundingClientRect();
      var clientRect = node.getBoundingClientRect();
      var cLeft = clientRect.left / transformScale;
      var pLeft = parentRect.left / transformScale;
      var cTop = clientRect.top / transformScale;
      var pTop = parentRect.top / transformScale;
      newPosition.left = cLeft - pLeft + offsetParent.scrollLeft;
      newPosition.top = cTop - pTop + offsetParent.scrollTop;

      _this.setState({
        dragging: newPosition
      }); 


      var _calcXY = (0, _calculateUtils.calcXY)(_this.getPositionParams(), newPosition.top, newPosition.left, _this.props.w, _this.props.h),
          x = _calcXY.x,
          y = _calcXY.y;

      return onDragStart.call(_assertThisInitialized(_this), _this.props.i, x, y, {
        e: e,
        node: node,
        newPosition: newPosition
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDrag", function (e, _ref2) {
      var node = _ref2.node,
          deltaX = _ref2.deltaX,
          deltaY = _ref2.deltaY;
      var onDrag = _this.props.onDrag;
      if (!onDrag) return;

      if (!_this.state.dragging) {
        throw new Error("onDrag called before onDragStart.");
      }

      var top = _this.state.dragging.top + deltaY;
      var left = _this.state.dragging.left + deltaX;
      var _this$props2 = _this.props,
          isBounded = _this$props2.isBounded,
          i = _this$props2.i,
          w = _this$props2.w,
          h = _this$props2.h,
          containerWidth = _this$props2.containerWidth;

      var positionParams = _this.getPositionParams(); 


      if (isBounded) {
        var offsetParent = node.offsetParent;

        if (offsetParent) {
          var _this$props3 = _this.props,
              margin = _this$props3.margin,
              rowHeight = _this$props3.rowHeight;
          var bottomBoundary = offsetParent.clientHeight - (0, _calculateUtils.calcGridItemWHPx)(h, rowHeight, margin[1]);
          top = (0, _calculateUtils.clamp)(top, 0, bottomBoundary);
          var colWidth = (0, _calculateUtils.calcGridColWidth)(positionParams);
          var rightBoundary = containerWidth - (0, _calculateUtils.calcGridItemWHPx)(w, colWidth, margin[0]);
          left = (0, _calculateUtils.clamp)(left, 0, rightBoundary);
        }
      }

      var newPosition
      = {
        top: top,
        left: left
      };

      _this.setState({
        dragging: newPosition
      }); 


      var _calcXY2 = (0, _calculateUtils.calcXY)(positionParams, top, left, w, h),
          x = _calcXY2.x,
          y = _calcXY2.y;

      return onDrag.call(_assertThisInitialized(_this), i, x, y, {
        e: e,
        node: node,
        newPosition: newPosition
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDragStop", function (e, _ref3) {
      var node = _ref3.node;
      var onDragStop = _this.props.onDragStop;
      if (!onDragStop) return;

      if (!_this.state.dragging) {
        throw new Error("onDragEnd called before onDragStart.");
      }

      var _this$props4 = _this.props,
          w = _this$props4.w,
          h = _this$props4.h,
          i = _this$props4.i;
      var _this$state$dragging = _this.state.dragging,
          left = _this$state$dragging.left,
          top = _this$state$dragging.top;
      var newPosition
      = {
        top: top,
        left: left
      };

      _this.setState({
        dragging: null
      });

      var _calcXY3 = (0, _calculateUtils.calcXY)(_this.getPositionParams(), top, left, w, h),
          x = _calcXY3.x,
          y = _calcXY3.y;

      return onDragStop.call(_assertThisInitialized(_this), i, x, y, {
        e: e,
        node: node,
        newPosition: newPosition
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onResizeStop", function (e, callbackData) {
      _this.onResizeHandler(e, callbackData, "onResizeStop");
    });

    _defineProperty(_assertThisInitialized(_this), "onResizeStart", function (e, callbackData) {
      _this.onResizeHandler(e, callbackData, "onResizeStart");
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function (e, callbackData) {
      _this.onResizeHandler(e, callbackData, "onResize");
    });

    return _this;
  }

  _createClass(GridItem, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps
    , nextState
    )
    {
      if (this.props.children !== nextProps.children) return true;
      if (this.props.droppingPosition !== nextProps.droppingPosition) return true; 

      var oldPosition = (0, _calculateUtils.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state);
      var newPosition = (0, _calculateUtils.calcGridItemPosition)(this.getPositionParams(nextProps), nextProps.x, nextProps.y, nextProps.w, nextProps.h, nextState);
      return !(0, _utils.fastPositionEqual)(oldPosition, newPosition) || this.props.useCSSTransforms !== nextProps.useCSSTransforms;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.moveDroppingItem({});
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps
    ) {
      this.moveDroppingItem(prevProps);
    } 

  }, {
    key: "moveDroppingItem",
    value: function moveDroppingItem(prevProps
    ) {
      var droppingPosition = this.props.droppingPosition;
      if (!droppingPosition) return;
      var node = this.elementRef.current; 

      if (!node) return;
      var prevDroppingPosition = prevProps.droppingPosition || {
        left: 0,
        top: 0
      };
      var dragging = this.state.dragging;
      var shouldDrag = dragging && droppingPosition.left !== prevDroppingPosition.left || droppingPosition.top !== prevDroppingPosition.top;

      if (!dragging) {
        this.onDragStart(droppingPosition.e, {
          node: node,
          deltaX: droppingPosition.left,
          deltaY: droppingPosition.top
        });
      } else if (shouldDrag) {
        var deltaX = droppingPosition.left - dragging.left;
        var deltaY = droppingPosition.top - dragging.top;
        this.onDrag(droppingPosition.e, {
          node: node,
          deltaX: deltaX,
          deltaY: deltaY
        });
      }
    }
  }, {
    key: "getPositionParams",
    value: function getPositionParams()
    {
      var props
      = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      return {
        cols: props.cols,
        containerPadding: props.containerPadding,
        containerWidth: props.containerWidth,
        margin: props.margin,
        maxRows: props.maxRows,
        rowHeight: props.rowHeight
      };
    }

  }, {
    key: "createStyle",
    value: function createStyle(pos
    )
    {
      var _this$props5 = this.props,
          usePercentages = _this$props5.usePercentages,
          containerWidth = _this$props5.containerWidth,
          useCSSTransforms = _this$props5.useCSSTransforms;
      var style; 

      if (useCSSTransforms) {
        style = (0, _utils.setTransform)(pos);
      } else {
        style = (0, _utils.setTopLeft)(pos); 

        if (usePercentages) {
          style.left = (0, _utils.perc)(pos.left / containerWidth);
          style.width = (0, _utils.perc)(pos.width / containerWidth);
        }
      }

      return style;
    }

  }, {
    key: "mixinDraggable",
    value: function mixinDraggable(child
    , isDraggable
    )
    {
      return _react.default.createElement(_reactDraggable.DraggableCore, {
        disabled: !isDraggable,
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop,
        handle: this.props.handle,
        cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
        scale: this.props.transformScale,
        nodeRef: this.elementRef
      }, child);
    }

  }, {
    key: "mixinResizable",
    value: function mixinResizable(child
    , position
    , isResizable
    )
    {
      var _this$props6 = this.props,
          cols = _this$props6.cols,
          x = _this$props6.x,
          minW = _this$props6.minW,
          minH = _this$props6.minH,
          maxW = _this$props6.maxW,
          maxH = _this$props6.maxH,
          transformScale = _this$props6.transformScale,
          resizeHandles = _this$props6.resizeHandles,
          resizeHandle = _this$props6.resizeHandle;
      var positionParams = this.getPositionParams(); 

      var maxWidth = (0, _calculateUtils.calcGridItemPosition)(positionParams, 0, 0, cols - x, 0).width; 

      var mins = (0, _calculateUtils.calcGridItemPosition)(positionParams, 0, 0, minW, minH);
      var maxes = (0, _calculateUtils.calcGridItemPosition)(positionParams, 0, 0, maxW, maxH);
      var minConstraints = [mins.width, mins.height];
      var maxConstraints = [Math.min(maxes.width, maxWidth), Math.min(maxes.height, Infinity)];
      return _react.default.createElement(_reactResizable.Resizable 
      , {
        draggableOpts: {
          disabled: !isResizable
        },
        className: isResizable ? undefined : "react-resizable-hide",
        width: position.width,
        height: position.height,
        minConstraints: minConstraints,
        maxConstraints: maxConstraints,
        onResizeStop: this.onResizeStop,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        transformScale: transformScale,
        resizeHandles: resizeHandles,
        handle: resizeHandle
      }, child);
    }

  }, {
    key: "onResizeHandler",
    value:
    function onResizeHandler(e
    , _ref4, handlerName
    )
    {
      var node = _ref4.node,
          size = _ref4.size;
      var handler = this.props[handlerName];
      if (!handler) return;
      var _this$props7 = this.props,
          cols = _this$props7.cols,
          x = _this$props7.x,
          y = _this$props7.y,
          i = _this$props7.i,
          maxH = _this$props7.maxH,
          minH = _this$props7.minH;
      var _this$props8 = this.props,
          minW = _this$props8.minW,
          maxW = _this$props8.maxW; 

      var _calcWH = (0, _calculateUtils.calcWH)(this.getPositionParams(), size.width, size.height, x, y),
          w = _calcWH.w,
          h = _calcWH.h; 


      minW = Math.max(minW, 1); 

      maxW = Math.min(maxW, cols - x); 

      w = (0, _calculateUtils.clamp)(w, minW, maxW);
      h = (0, _calculateUtils.clamp)(h, minH, maxH);
      this.setState({
        resizing: handlerName === "onResizeStop" ? null : size
      });
      handler.call(this, i, w, h, {
        e: e,
        node: node,
        size: size
      });
    }
  }, {
    key: "render",
    value: function render()
    {
      var _this$props9 = this.props,
          x = _this$props9.x,
          y = _this$props9.y,
          w = _this$props9.w,
          h = _this$props9.h,
          isDraggable = _this$props9.isDraggable,
          isResizable = _this$props9.isResizable,
          droppingPosition = _this$props9.droppingPosition,
          useCSSTransforms = _this$props9.useCSSTransforms;
      var pos = (0, _calculateUtils.calcGridItemPosition)(this.getPositionParams(), x, y, w, h, this.state);

      var child = _react.default.Children.only(this.props.children); 


      var newChild = _react.default.cloneElement(child, {
        ref: this.elementRef,
        className: (0, _clsx.default)("react-grid-item", child.props.className, this.props.className, {
          static: this.props.static,
          resizing: Boolean(this.state.resizing),
          "react-draggable": isDraggable,
          "react-draggable-dragging": Boolean(this.state.dragging),
          dropping: Boolean(droppingPosition),
          cssTransforms: useCSSTransforms
        }),
        style: _objectSpread(_objectSpread(_objectSpread({}, this.props.style), child.props.style), this.createStyle(pos))
      }); 


      newChild = this.mixinResizable(newChild, pos, isResizable); 

      newChild = this.mixinDraggable(newChild, isDraggable);
      return newChild;
    }
  }]);

  return GridItem;
}(_react.default.Component);

exports["default"] = GridItem;

_defineProperty(GridItem, "propTypes", {
  children: _propTypes.default.element,
  cols: _propTypes.default.number.isRequired,
  containerWidth: _propTypes.default.number.isRequired,
  rowHeight: _propTypes.default.number.isRequired,
  margin: _propTypes.default.array.isRequired,
  maxRows: _propTypes.default.number.isRequired,
  containerPadding: _propTypes.default.array.isRequired,
  x: _propTypes.default.number.isRequired,
  y: _propTypes.default.number.isRequired,
  w: _propTypes.default.number.isRequired,
  h: _propTypes.default.number.isRequired,
  minW: function minW(props
  , propName
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("minWidth not Number");
    if (value > props.w || value > props.maxW) return new Error("minWidth larger than item width/maxWidth");
  },
  maxW: function maxW(props
  , propName
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("maxWidth not Number");
    if (value < props.w || value < props.minW) return new Error("maxWidth smaller than item width/minWidth");
  },
  minH: function minH(props
  , propName
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("minHeight not Number");
    if (value > props.h || value > props.maxH) return new Error("minHeight larger than item height/maxHeight");
  },
  maxH: function maxH(props
  , propName
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("maxHeight not Number");
    if (value < props.h || value < props.minH) return new Error("maxHeight smaller than item height/minHeight");
  },
  i: _propTypes.default.string.isRequired,
  resizeHandles: _ReactGridLayoutPropTypes.resizeHandleAxesType,
  resizeHandle: _ReactGridLayoutPropTypes.resizeHandleType,
  onDragStop: _propTypes.default.func,
  onDragStart: _propTypes.default.func,
  onDrag: _propTypes.default.func,
  onResizeStop: _propTypes.default.func,
  onResizeStart: _propTypes.default.func,
  onResize: _propTypes.default.func,
  isDraggable: _propTypes.default.bool.isRequired,
  isResizable: _propTypes.default.bool.isRequired,
  isBounded: _propTypes.default.bool.isRequired,
  static: _propTypes.default.bool,
  useCSSTransforms: _propTypes.default.bool.isRequired,
  transformScale: _propTypes.default.number,
  className: _propTypes.default.string,
  handle: _propTypes.default.string,
  cancel: _propTypes.default.string,
  droppingPosition: _propTypes.default.shape({
    e: _propTypes.default.object.isRequired,
    left: _propTypes.default.number.isRequired,
    top: _propTypes.default.number.isRequired
  })
});

_defineProperty(GridItem, "defaultProps", {
  className: "",
  cancel: "",
  handle: "",
  minH: 1,
  minW: 1,
  maxH: Infinity,
  maxW: Infinity,
  transformScale: 1
});

 }),

 "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/ReactGridLayout.js":
 ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"));

var _lodash = _interopRequireDefault(__webpack_require__("./.yarn/cache/lodash.isequal-npm-4.5.0-f8b0f64d63-da27515dc5.zip/node_modules/lodash.isequal/index.js"));

var _clsx = _interopRequireDefault(__webpack_require__("./.yarn/cache/clsx-npm-1.1.1-362bec0598-ff05265032.zip/node_modules/clsx/dist/clsx.m.js"));

var _utils = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/utils.js");

var _calculateUtils = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/calculateUtils.js");

var _GridItem = _interopRequireDefault(__webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/GridItem.js"));

var _ReactGridLayoutPropTypes = _interopRequireDefault(__webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/ReactGridLayoutPropTypes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layoutClassName = "react-grid-layout";
var isFirefox = false; 

try {
  isFirefox = /firefox/i.test(navigator.userAgent);
} catch (e) {
}


var ReactGridLayout = function (_React$Component) {
  _inherits(ReactGridLayout, _React$Component);

  var _super = _createSuper(ReactGridLayout);

  function ReactGridLayout() {
    var _this;

    _classCallCheck(this, ReactGridLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeDrag: null,
      layout: (0, _utils.synchronizeLayoutWithChildren)(_this.props.layout, _this.props.children, _this.props.cols, 
      (0, _utils.compactType)(_this.props), _this.props.allowOverlap),
      mounted: false,
      oldDragItem: null,
      oldLayout: null,
      oldResizeItem: null,
      droppingDOMNode: null,
      children: []
    });

    _defineProperty(_assertThisInitialized(_this), "dragEnterCounter", 0);

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (i
    , x
    , y
    , _ref) {
      var e = _ref.e,
          node = _ref.node;
      var layout = _this.state.layout;
      var l = (0, _utils.getLayoutItem)(layout, i);
      if (!l) return;

      _this.setState({
        oldDragItem: (0, _utils.cloneLayoutItem)(l),
        oldLayout: layout
      });

      return _this.props.onDragStart(layout, l, l, null, e, node);
    });

    _defineProperty(_assertThisInitialized(_this), "onDrag", function (i, x, y, _ref2) {
      var e = _ref2.e,
          node = _ref2.node;
      var oldDragItem = _this.state.oldDragItem;
      var layout = _this.state.layout;
      var _this$props = _this.props,
          cols = _this$props.cols,
          allowOverlap = _this$props.allowOverlap,
          preventCollision = _this$props.preventCollision;
      var l = (0, _utils.getLayoutItem)(layout, i);
      if (!l) return; 

      var placeholder = {
        w: l.w,
        h: l.h,
        x: l.x,
        y: l.y,
        placeholder: true,
        i: i
      }; 

      var isUserAction = true;
      layout = (0, _utils.moveElement)(layout, l, x, y, isUserAction, preventCollision, (0, _utils.compactType)(_this.props), cols, allowOverlap);

      _this.props.onDrag(layout, oldDragItem, l, placeholder, e, node);

      _this.setState({
        layout: allowOverlap ? layout : (0, _utils.compact)(layout, (0, _utils.compactType)(_this.props), cols),
        activeDrag: placeholder
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDragStop", function (i, x, y, _ref3) {
      var e = _ref3.e,
          node = _ref3.node;
      if (!_this.state.activeDrag) return;
      var oldDragItem = _this.state.oldDragItem;
      var layout = _this.state.layout;
      var _this$props2 = _this.props,
          cols = _this$props2.cols,
          preventCollision = _this$props2.preventCollision,
          allowOverlap = _this$props2.allowOverlap;
      var l = (0, _utils.getLayoutItem)(layout, i);
      if (!l) return; 

      var isUserAction = true;
      layout = (0, _utils.moveElement)(layout, l, x, y, isUserAction, preventCollision, (0, _utils.compactType)(_this.props), cols, allowOverlap);

      _this.props.onDragStop(layout, oldDragItem, l, null, e, node); 


      var newLayout = allowOverlap ? layout : (0, _utils.compact)(layout, (0, _utils.compactType)(_this.props), cols);
      var oldLayout = _this.state.oldLayout;

      _this.setState({
        activeDrag: null,
        layout: newLayout,
        oldDragItem: null,
        oldLayout: null
      });

      _this.onLayoutMaybeChanged(newLayout, oldLayout);
    });

    _defineProperty(_assertThisInitialized(_this), "onResizeStart", function (i, w, h, _ref4) {
      var e = _ref4.e,
          node = _ref4.node;
      var layout = _this.state.layout;
      var l = (0, _utils.getLayoutItem)(layout, i);
      if (!l) return;

      _this.setState({
        oldResizeItem: (0, _utils.cloneLayoutItem)(l),
        oldLayout: _this.state.layout
      });

      _this.props.onResizeStart(layout, l, l, null, e, node);
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function (i, w, h, _ref5) {
      var e = _ref5.e,
          node = _ref5.node;
      var _this$state = _this.state,
          layout = _this$state.layout,
          oldResizeItem = _this$state.oldResizeItem;
      var _this$props3 = _this.props,
          cols = _this$props3.cols,
          preventCollision = _this$props3.preventCollision,
          allowOverlap = _this$props3.allowOverlap;

      var _withLayoutItem = (0, _utils.withLayoutItem)(layout, i, function (l) {
        var hasCollisions;

        if (preventCollision && !allowOverlap) {
          var collisions = (0, _utils.getAllCollisions)(layout, _objectSpread(_objectSpread({}, l), {}, {
            w: w,
            h: h
          })).filter(function (layoutItem) {
            return layoutItem.i !== l.i;
          });
          hasCollisions = collisions.length > 0; 

          if (hasCollisions) {
            var leastX = Infinity,
                leastY = Infinity;
            collisions.forEach(function (layoutItem) {
              if (layoutItem.x > l.x) leastX = Math.min(leastX, layoutItem.x);
              if (layoutItem.y > l.y) leastY = Math.min(leastY, layoutItem.y);
            });
            if (Number.isFinite(leastX)) l.w = leastX - l.x;
            if (Number.isFinite(leastY)) l.h = leastY - l.y;
          }
        }

        if (!hasCollisions) {
          l.w = w;
          l.h = h;
        }

        return l;
      }),
          _withLayoutItem2 = _slicedToArray(_withLayoutItem, 2),
          newLayout = _withLayoutItem2[0],
          l = _withLayoutItem2[1]; 


      if (!l) return; 

      var placeholder = {
        w: l.w,
        h: l.h,
        x: l.x,
        y: l.y,
        static: true,
        i: i
      };

      _this.props.onResize(newLayout, oldResizeItem, l, placeholder, e, node); 


      _this.setState({
        layout: allowOverlap ? newLayout : (0, _utils.compact)(newLayout, (0, _utils.compactType)(_this.props), cols),
        activeDrag: placeholder
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onResizeStop", function (i, w, h, _ref6) {
      var e = _ref6.e,
          node = _ref6.node;
      var _this$state2 = _this.state,
          layout = _this$state2.layout,
          oldResizeItem = _this$state2.oldResizeItem;
      var _this$props4 = _this.props,
          cols = _this$props4.cols,
          allowOverlap = _this$props4.allowOverlap;
      var l = (0, _utils.getLayoutItem)(layout, i);

      _this.props.onResizeStop(layout, oldResizeItem, l, null, e, node); 


      var newLayout = allowOverlap ? layout : (0, _utils.compact)(layout, (0, _utils.compactType)(_this.props), cols);
      var oldLayout = _this.state.oldLayout;

      _this.setState({
        activeDrag: null,
        layout: newLayout,
        oldResizeItem: null,
        oldLayout: null
      });

      _this.onLayoutMaybeChanged(newLayout, oldLayout);
    });

    _defineProperty(_assertThisInitialized(_this), "onDragOver", function (e) {
      var _e$nativeEvent$target;

      e.preventDefault(); 

      e.stopPropagation(); 

      if (isFirefox && 
      !((_e$nativeEvent$target = e.nativeEvent.target) !== null && _e$nativeEvent$target !== void 0 && _e$nativeEvent$target.classList.contains(layoutClassName))) {
        return false;
      }

      var _this$props5 = _this.props,
          droppingItem = _this$props5.droppingItem,
          onDropDragOver = _this$props5.onDropDragOver,
          margin = _this$props5.margin,
          cols = _this$props5.cols,
          rowHeight = _this$props5.rowHeight,
          maxRows = _this$props5.maxRows,
          width = _this$props5.width,
          containerPadding = _this$props5.containerPadding,
          transformScale = _this$props5.transformScale; 

      var onDragOverResult = onDropDragOver === null || onDropDragOver === void 0 ? void 0 : onDropDragOver(e);

      if (onDragOverResult === false) {
        if (_this.state.droppingDOMNode) {
          _this.removeDroppingPlaceholder();
        }

        return false;
      }

      var finalDroppingItem = _objectSpread(_objectSpread({}, droppingItem), onDragOverResult);

      var layout = _this.state.layout; 

      var _e$nativeEvent = e.nativeEvent,
          layerX = _e$nativeEvent.layerX,
          layerY = _e$nativeEvent.layerY;
      var droppingPosition = {
        left: layerX / transformScale,
        top: layerY / transformScale,
        e: e
      };

      if (!_this.state.droppingDOMNode) {
        var positionParams
        = {
          cols: cols,
          margin: margin,
          maxRows: maxRows,
          rowHeight: rowHeight,
          containerWidth: width,
          containerPadding: containerPadding || margin
        };
        var calculatedPosition = (0, _calculateUtils.calcXY)(positionParams, layerY, layerX, finalDroppingItem.w, finalDroppingItem.h);

        _this.setState({
          droppingDOMNode: React.createElement("div", {
            key: finalDroppingItem.i
          }),
          droppingPosition: droppingPosition,
          layout: [].concat(_toConsumableArray(layout), [_objectSpread(_objectSpread({}, finalDroppingItem), {}, {
            x: calculatedPosition.x,
            y: calculatedPosition.y,
            static: false,
            isDraggable: true
          })])
        });
      } else if (_this.state.droppingPosition) {
        var _this$state$droppingP = _this.state.droppingPosition,
            left = _this$state$droppingP.left,
            top = _this$state$droppingP.top;
        var shouldUpdatePosition = left != layerX || top != layerY;

        if (shouldUpdatePosition) {
          _this.setState({
            droppingPosition: droppingPosition
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeDroppingPlaceholder", function () {
      var _this$props6 = _this.props,
          droppingItem = _this$props6.droppingItem,
          cols = _this$props6.cols;
      var layout = _this.state.layout;
      var newLayout = (0, _utils.compact)(layout.filter(function (l) {
        return l.i !== droppingItem.i;
      }), (0, _utils.compactType)(_this.props), cols);

      _this.setState({
        layout: newLayout,
        droppingDOMNode: null,
        activeDrag: null,
        droppingPosition: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDragLeave", function (e) {
      e.preventDefault(); 

      e.stopPropagation();
      _this.dragEnterCounter--; 

      if (_this.dragEnterCounter === 0) {
        _this.removeDroppingPlaceholder();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDragEnter", function (e) {
      e.preventDefault(); 

      e.stopPropagation();
      _this.dragEnterCounter++;
    });

    _defineProperty(_assertThisInitialized(_this), "onDrop", function (e
    ) {
      e.preventDefault(); 

      e.stopPropagation();
      var droppingItem = _this.props.droppingItem;
      var layout = _this.state.layout;
      var item = layout.find(function (l) {
        return l.i === droppingItem.i;
      }); 

      _this.dragEnterCounter = 0;

      _this.removeDroppingPlaceholder();

      _this.props.onDrop(layout, item, e);
    });

    return _this;
  }

  _createClass(ReactGridLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        mounted: true
      }); 

      this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps
    , nextState
    )
    {
      return (
        this.props.children !== nextProps.children || !(0, _utils.fastRGLPropsEqual)(this.props, nextProps, _lodash.default) || this.state.activeDrag !== nextState.activeDrag || this.state.mounted !== nextState.mounted || this.state.droppingPosition !== nextState.droppingPosition
      );
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps
    , prevState
    ) {
      if (!this.state.activeDrag) {
        var newLayout = this.state.layout;
        var oldLayout = prevState.layout;
        this.onLayoutMaybeChanged(newLayout, oldLayout);
      }
    }

  }, {
    key: "containerHeight",
    value: function containerHeight()
    {
      if (!this.props.autoSize) return;
      var nbRow = (0, _utils.bottom)(this.state.layout);
      var containerPaddingY = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
      return nbRow * this.props.rowHeight + (nbRow - 1) * this.props.margin[1] + containerPaddingY * 2 + "px";
    }

  }, {
    key: "onLayoutMaybeChanged",
    value: function onLayoutMaybeChanged(newLayout
    , oldLayout
    ) {
      if (!oldLayout) oldLayout = this.state.layout;

      if (!(0, _lodash.default)(oldLayout, newLayout)) {
        this.props.onLayoutChange(newLayout);
      }
    }
  }, {
    key: "placeholder",
    value:
    function placeholder()
    {
      var activeDrag = this.state.activeDrag;
      if (!activeDrag) return null;
      var _this$props7 = this.props,
          width = _this$props7.width,
          cols = _this$props7.cols,
          margin = _this$props7.margin,
          containerPadding = _this$props7.containerPadding,
          rowHeight = _this$props7.rowHeight,
          maxRows = _this$props7.maxRows,
          useCSSTransforms = _this$props7.useCSSTransforms,
          transformScale = _this$props7.transformScale; 

      return React.createElement(_GridItem.default, {
        w: activeDrag.w,
        h: activeDrag.h,
        x: activeDrag.x,
        y: activeDrag.y,
        i: activeDrag.i,
        className: "react-grid-placeholder",
        containerWidth: width,
        cols: cols,
        margin: margin,
        containerPadding: containerPadding || margin,
        maxRows: maxRows,
        rowHeight: rowHeight,
        isDraggable: false,
        isResizable: false,
        isBounded: false,
        useCSSTransforms: useCSSTransforms,
        transformScale: transformScale
      }, React.createElement("div", null));
    }

  }, {
    key: "processGridItem",
    value: function processGridItem(child
    , isDroppingItem
    )
    {
      if (!child || !child.key) return;
      var l = (0, _utils.getLayoutItem)(this.state.layout, String(child.key));
      if (!l) return null;
      var _this$props8 = this.props,
          width = _this$props8.width,
          cols = _this$props8.cols,
          margin = _this$props8.margin,
          containerPadding = _this$props8.containerPadding,
          rowHeight = _this$props8.rowHeight,
          maxRows = _this$props8.maxRows,
          isDraggable = _this$props8.isDraggable,
          isResizable = _this$props8.isResizable,
          isBounded = _this$props8.isBounded,
          useCSSTransforms = _this$props8.useCSSTransforms,
          transformScale = _this$props8.transformScale,
          draggableCancel = _this$props8.draggableCancel,
          draggableHandle = _this$props8.draggableHandle,
          resizeHandles = _this$props8.resizeHandles,
          resizeHandle = _this$props8.resizeHandle;
      var _this$state3 = this.state,
          mounted = _this$state3.mounted,
          droppingPosition = _this$state3.droppingPosition; 

      var draggable = typeof l.isDraggable === "boolean" ? l.isDraggable : !l.static && isDraggable;
      var resizable = typeof l.isResizable === "boolean" ? l.isResizable : !l.static && isResizable;
      var resizeHandlesOptions = l.resizeHandles || resizeHandles; 

      var bounded = draggable && isBounded && l.isBounded !== false;
      return React.createElement(_GridItem.default, {
        containerWidth: width,
        cols: cols,
        margin: margin,
        containerPadding: containerPadding || margin,
        maxRows: maxRows,
        rowHeight: rowHeight,
        cancel: draggableCancel,
        handle: draggableHandle,
        onDragStop: this.onDragStop,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
        onResizeStart: this.onResizeStart,
        onResize: this.onResize,
        onResizeStop: this.onResizeStop,
        isDraggable: draggable,
        isResizable: resizable,
        isBounded: bounded,
        useCSSTransforms: useCSSTransforms && mounted,
        usePercentages: !mounted,
        transformScale: transformScale,
        w: l.w,
        h: l.h,
        x: l.x,
        y: l.y,
        i: l.i,
        minH: l.minH,
        minW: l.minW,
        maxH: l.maxH,
        maxW: l.maxW,
        static: l.static,
        droppingPosition: isDroppingItem ? droppingPosition : undefined,
        resizeHandles: resizeHandlesOptions,
        resizeHandle: resizeHandle
      }, child);
    } 

  }, {
    key: "render",
    value: function render()
    {
      var _this2 = this;

      var _this$props9 = this.props,
          className = _this$props9.className,
          style = _this$props9.style,
          isDroppable = _this$props9.isDroppable,
          innerRef = _this$props9.innerRef;
      var mergedClassName = (0, _clsx.default)(layoutClassName, className);

      var mergedStyle = _objectSpread({
        height: this.containerHeight()
      }, style);

      return React.createElement("div", {
        ref: innerRef,
        className: mergedClassName,
        style: mergedStyle,
        onDrop: isDroppable ? this.onDrop : _utils.noop,
        onDragLeave: isDroppable ? this.onDragLeave : _utils.noop,
        onDragEnter: isDroppable ? this.onDragEnter : _utils.noop,
        onDragOver: isDroppable ? this.onDragOver : _utils.noop
      }, React.Children.map(this.props.children, function (child) {
        return _this2.processGridItem(child);
      }), isDroppable && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, true), this.placeholder());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps
    , prevState
    )
    {
      var newLayoutBase;

      if (prevState.activeDrag) {
        return null;
      } 


      if (!(0, _lodash.default)(nextProps.layout, prevState.propsLayout) || nextProps.compactType !== prevState.compactType) {
        newLayoutBase = nextProps.layout;
      } else if (!(0, _utils.childrenEqual)(nextProps.children, prevState.children)) {
        newLayoutBase = prevState.layout;
      } 


      if (newLayoutBase) {
        var newLayout = (0, _utils.synchronizeLayoutWithChildren)(newLayoutBase, nextProps.children, nextProps.cols, (0, _utils.compactType)(nextProps), nextProps.allowOverlap);
        return {
          layout: newLayout,
          compactType: nextProps.compactType,
          children: nextProps.children,
          propsLayout: nextProps.layout
        };
      }

      return null;
    }
  }]);

  return ReactGridLayout;
}(React.Component);

exports["default"] = ReactGridLayout;

_defineProperty(ReactGridLayout, "displayName", "ReactGridLayout");

_defineProperty(ReactGridLayout, "propTypes", _ReactGridLayoutPropTypes.default);

_defineProperty(ReactGridLayout, "defaultProps", {
  autoSize: true,
  cols: 12,
  className: "",
  style: {},
  draggableHandle: "",
  draggableCancel: "",
  containerPadding: null,
  rowHeight: 150,
  maxRows: Infinity,
  layout: [],
  margin: [10, 10],
  isBounded: false,
  isDraggable: true,
  isResizable: true,
  allowOverlap: false,
  isDroppable: false,
  useCSSTransforms: true,
  transformScale: 1,
  verticalCompact: true,
  compactType: "vertical",
  preventCollision: false,
  droppingItem: {
    i: "__dropping-elem__",
    h: 1,
    w: 1
  },
  resizeHandles: ["se"],
  onLayoutChange: _utils.noop,
  onDragStart: _utils.noop,
  onDrag: _utils.noop,
  onDragStop: _utils.noop,
  onResizeStart: _utils.noop,
  onResize: _utils.noop,
  onResizeStop: _utils.noop,
  onDrop: _utils.noop,
  onDropDragOver: _utils.noop
});

 }),

 "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/ReactGridLayoutPropTypes.js":
 ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resizeHandleType = exports.resizeHandleAxesType = exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./.yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-c056d3f1c0.zip/node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resizeHandleAxesType
= _propTypes.default.arrayOf(_propTypes.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])); 


exports.resizeHandleAxesType = resizeHandleAxesType;

var resizeHandleType
= _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]);



exports.resizeHandleType = resizeHandleType;
var _default = {
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  width: _propTypes.default.number,
  autoSize: _propTypes.default.bool,
  cols: _propTypes.default.number,
  draggableCancel: _propTypes.default.string,
  draggableHandle: _propTypes.default.string,
  verticalCompact: function verticalCompact(props
  ) {
    if (props.verticalCompact === false && "production" !== "production") {}
  },
  compactType: (_propTypes.default.oneOf(["vertical", "horizontal"])
  ),
  layout: function layout(props
  ) {
    var layout = props.layout; 

    if (layout === undefined) return;

    (__webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/utils.js").validateLayout)(layout, "layout");
  },
  margin: (_propTypes.default.arrayOf(_propTypes.default.number)
  ),
  containerPadding: (_propTypes.default.arrayOf(_propTypes.default.number)
  ),
  rowHeight: _propTypes.default.number,
  maxRows: _propTypes.default.number,
  isBounded: _propTypes.default.bool,
  isDraggable: _propTypes.default.bool,
  isResizable: _propTypes.default.bool,
  allowOverlap: _propTypes.default.bool,
  preventCollision: _propTypes.default.bool,
  useCSSTransforms: _propTypes.default.bool,
  transformScale: _propTypes.default.number,
  isDroppable: _propTypes.default.bool,
  resizeHandles: resizeHandleAxesType,
  resizeHandle: resizeHandleType,
  onLayoutChange: _propTypes.default.func,
  onDragStart: _propTypes.default.func,
  onDrag: _propTypes.default.func,
  onDragStop: _propTypes.default.func,
  onResizeStart: _propTypes.default.func,
  onResize: _propTypes.default.func,
  onResizeStop: _propTypes.default.func,
  onDrop: _propTypes.default.func,
  droppingItem: (_propTypes.default.shape({
    i: _propTypes.default.string.isRequired,
    w: _propTypes.default.number.isRequired,
    h: _propTypes.default.number.isRequired
  })
  ),
  children: function children(props
  , propName
  ) {
    var children = props[propName]; 

    var keys = {};

    _react.default.Children.forEach(children, function (child) {
      if ((child === null || child === void 0 ? void 0 : child.key) == null) return;

      if (keys[child.key]) {
        throw new Error('Duplicate child key "' + child.key + '" found! This will cause problems in ReactGridLayout.');
      }

      keys[child.key] = true;
    });
  },
  innerRef: _propTypes.default.any
};
exports["default"] = _default;

 }),

 "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/ResponsiveReactGridLayout.js":
 ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_unused_export__ = ({
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./.yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-c056d3f1c0.zip/node_modules/prop-types/index.js"));

var _lodash = _interopRequireDefault(__webpack_require__("./.yarn/cache/lodash.isequal-npm-4.5.0-f8b0f64d63-da27515dc5.zip/node_modules/lodash.isequal/index.js"));

var _utils = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/utils.js");

var _responsiveUtils = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/responsiveUtils.js");

var _ReactGridLayout = _interopRequireDefault(__webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/ReactGridLayout.js"));

var _excluded = ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var type = function type(obj) {
  return Object.prototype.toString.call(obj);
};


function getIndentationValue
(param
, breakpoint
)
{
  if (param == null) return null; 

  return Array.isArray(param) ? param : param[breakpoint];
}




var ResponsiveReactGridLayout = function (_React$Component) {
  _inherits(ResponsiveReactGridLayout, _React$Component);

  var _super = _createSuper(ResponsiveReactGridLayout);

  function ResponsiveReactGridLayout() {
    var _this;

    _classCallCheck(this, ResponsiveReactGridLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", _this.generateInitialState());

    _defineProperty(_assertThisInitialized(_this), "onLayoutChange", function (layout
    ) {
      _this.props.onLayoutChange(layout, _objectSpread(_objectSpread({}, _this.props.layouts), {}, _defineProperty({}, _this.state.breakpoint, layout)));
    });

    return _this;
  }

  _createClass(ResponsiveReactGridLayout, [{
    key: "generateInitialState",
    value: function generateInitialState()
    {
      var _this$props = this.props,
          width = _this$props.width,
          breakpoints = _this$props.breakpoints,
          layouts = _this$props.layouts,
          cols = _this$props.cols;
      var breakpoint = (0, _responsiveUtils.getBreakpointFromWidth)(breakpoints, width);
      var colNo = (0, _responsiveUtils.getColsFromBreakpoint)(breakpoint, cols); 

      var compactType = this.props.verticalCompact === false ? null : this.props.compactType; 

      var initialLayout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(layouts, breakpoints, breakpoint, breakpoint, colNo, compactType);
      return {
        layout: initialLayout,
        breakpoint: breakpoint,
        cols: colNo
      };
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps
    ) {
      if (this.props.width != prevProps.width || this.props.breakpoint !== prevProps.breakpoint || !(0, _lodash.default)(this.props.breakpoints, prevProps.breakpoints) || !(0, _lodash.default)(this.props.cols, prevProps.cols)) {
        this.onWidthChange(prevProps);
      }
    } 

  }, {
    key: "onWidthChange",
    value:
    function onWidthChange(prevProps
    ) {
      var _this$props2 = this.props,
          breakpoints = _this$props2.breakpoints,
          cols = _this$props2.cols,
          layouts = _this$props2.layouts,
          compactType = _this$props2.compactType;
      var newBreakpoint = this.props.breakpoint || (0, _responsiveUtils.getBreakpointFromWidth)(this.props.breakpoints, this.props.width);
      var lastBreakpoint = this.state.breakpoint;
      var newCols
      = (0, _responsiveUtils.getColsFromBreakpoint)(newBreakpoint, cols);

      var newLayouts = _objectSpread({}, layouts); 


      if (lastBreakpoint !== newBreakpoint || prevProps.breakpoints !== breakpoints || prevProps.cols !== cols) {
        if (!(lastBreakpoint in newLayouts)) newLayouts[lastBreakpoint] = (0, _utils.cloneLayout)(this.state.layout); 

        var layout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(newLayouts, breakpoints, newBreakpoint, lastBreakpoint, newCols, compactType); 

        layout = (0, _utils.synchronizeLayoutWithChildren)(layout, this.props.children, newCols, compactType, this.props.allowOverlap); 

        newLayouts[newBreakpoint] = layout; 

        this.props.onLayoutChange(layout, newLayouts);
        this.props.onBreakpointChange(newBreakpoint, newCols);
        this.setState({
          breakpoint: newBreakpoint,
          layout: layout,
          cols: newCols
        });
      }

      var margin = getIndentationValue(this.props.margin, newBreakpoint);
      var containerPadding = getIndentationValue(this.props.containerPadding, newBreakpoint); 

      this.props.onWidthChange(this.props.width, margin, newCols, containerPadding);
    }
  }, {
    key: "render",
    value: function render()
    {
      var _this$props3 = this.props,
          breakpoint = _this$props3.breakpoint,
          breakpoints = _this$props3.breakpoints,
          cols = _this$props3.cols,
          layouts = _this$props3.layouts,
          margin = _this$props3.margin,
          containerPadding = _this$props3.containerPadding,
          onBreakpointChange = _this$props3.onBreakpointChange,
          onLayoutChange = _this$props3.onLayoutChange,
          onWidthChange = _this$props3.onWidthChange,
          other = _objectWithoutProperties(_this$props3, _excluded);


      return React.createElement(_ReactGridLayout.default, _extends({}, other, {
        margin: getIndentationValue(margin, this.state.breakpoint),
        containerPadding: getIndentationValue(containerPadding, this.state.breakpoint),
        onLayoutChange: this.onLayoutChange,
        layout: this.state.layout,
        cols: this.state.cols
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps
    , prevState
    )
    {
      if (!(0, _lodash.default)(nextProps.layouts, prevState.layouts)) {
        var breakpoint = prevState.breakpoint,
            _cols = prevState.cols; 

        var newLayout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(nextProps.layouts, nextProps.breakpoints, breakpoint, breakpoint, _cols, nextProps.compactType);
        return {
          layout: newLayout,
          layouts: nextProps.layouts
        };
      }

      return null;
    }
  }]);

  return ResponsiveReactGridLayout;
}(React.Component);

exports["default"] = ResponsiveReactGridLayout;

_defineProperty(ResponsiveReactGridLayout, "propTypes", {
  breakpoint: _propTypes.default.string,
  breakpoints: _propTypes.default.object,
  allowOverlap: _propTypes.default.bool,
  cols: _propTypes.default.object,
  margin: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
  containerPadding: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
  layouts: function layouts(props
  , propName
  ) {
    if (type(props[propName]) !== "[object Object]") {
      throw new Error("Layout property must be an object. Received: " + type(props[propName]));
    }

    Object.keys(props[propName]).forEach(function (key) {
      if (!(key in props.breakpoints)) {
        throw new Error("Each key in layouts must align with a key in breakpoints.");
      }

      (0, _utils.validateLayout)(props.layouts[key], "layouts." + key);
    });
  },
  width: _propTypes.default.number.isRequired,
  onBreakpointChange: _propTypes.default.func,
  onLayoutChange: _propTypes.default.func,
  onWidthChange: _propTypes.default.func
});

_defineProperty(ResponsiveReactGridLayout, "defaultProps", {
  breakpoints: {
    lg: 1200,
    md: 996,
    sm: 768,
    xs: 480,
    xxs: 0
  },
  cols: {
    lg: 12,
    md: 10,
    sm: 6,
    xs: 4,
    xxs: 2
  },
  containerPadding: {
    lg: null,
    md: null,
    sm: null,
    xs: null,
    xxs: null
  },
  layouts: {},
  margin: [10, 10],
  allowOverlap: false,
  onBreakpointChange: _utils.noop,
  onLayoutChange: _utils.noop,
  onWidthChange: _utils.noop
});

 }),

 "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/calculateUtils.js":
 ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.calcGridColWidth = calcGridColWidth;
exports.calcGridItemPosition = calcGridItemPosition;
exports.calcGridItemWHPx = calcGridItemWHPx;
exports.calcWH = calcWH;
exports.calcXY = calcXY;
exports.clamp = clamp;


function calcGridColWidth(positionParams
)
{
  var margin = positionParams.margin,
      containerPadding = positionParams.containerPadding,
      containerWidth = positionParams.containerWidth,
      cols = positionParams.cols;
  return (containerWidth - margin[0] * (cols - 1) - containerPadding[0] * 2) / cols;
} 


function calcGridItemWHPx(gridUnits
, colOrRowSize
, marginPx
)
{
  if (!Number.isFinite(gridUnits)) return gridUnits;
  return Math.round(colOrRowSize * gridUnits + Math.max(0, gridUnits - 1) * marginPx);
}


function calcGridItemPosition(positionParams
, x
, y
, w
, h
, state
)
{
  var margin = positionParams.margin,
      containerPadding = positionParams.containerPadding,
      rowHeight = positionParams.rowHeight;
  var colWidth = calcGridColWidth(positionParams);
  var out = {}; 

  if (state && state.resizing) {
    out.width = Math.round(state.resizing.width);
    out.height = Math.round(state.resizing.height);
  } 
  else {
    out.width = calcGridItemWHPx(w, colWidth, margin[0]);
    out.height = calcGridItemWHPx(h, rowHeight, margin[1]);
  } 


  if (state && state.dragging) {
    out.top = Math.round(state.dragging.top);
    out.left = Math.round(state.dragging.left);
  } 
  else {
    out.top = Math.round((rowHeight + margin[1]) * y + containerPadding[1]);
    out.left = Math.round((colWidth + margin[0]) * x + containerPadding[0]);
  }

  return out;
}


function calcXY(positionParams
, top
, left
, w
, h
)
{
  var margin = positionParams.margin,
      cols = positionParams.cols,
      rowHeight = positionParams.rowHeight,
      maxRows = positionParams.maxRows;
  var colWidth = calcGridColWidth(positionParams); 

  var x = Math.round((left - margin[0]) / (colWidth + margin[0]));
  var y = Math.round((top - margin[1]) / (rowHeight + margin[1])); 

  x = clamp(x, 0, cols - w);
  y = clamp(y, 0, maxRows - h);
  return {
    x: x,
    y: y
  };
}


function calcWH(positionParams
, width
, height
, x
, y
)
{
  var margin = positionParams.margin,
      maxRows = positionParams.maxRows,
      cols = positionParams.cols,
      rowHeight = positionParams.rowHeight;
  var colWidth = calcGridColWidth(positionParams); 

  var w = Math.round((width + margin[0]) / (colWidth + margin[0]));
  var h = Math.round((height + margin[1]) / (rowHeight + margin[1])); 

  w = clamp(w, 0, cols - x);
  h = clamp(h, 0, maxRows - y);
  return {
    w: w,
    h: h
  };
} 


function clamp(num
, lowerBound
, upperBound
)
{
  return Math.max(Math.min(num, upperBound), lowerBound);
}

 }),

 "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/components/WidthProvider.js":
 ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_unused_export__ = ({
  value: true
});
exports["default"] = WidthProvideRGL;

var React = _interopRequireWildcard(__webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./.yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-c056d3f1c0.zip/node_modules/prop-types/index.js"));

var _clsx = _interopRequireDefault(__webpack_require__("./.yarn/cache/clsx-npm-1.1.1-362bec0598-ff05265032.zip/node_modules/clsx/dist/clsx.m.js"));

var _excluded = ["measureBeforeMount"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layoutClassName = "react-grid-layout";

function WidthProvideRGL
(ComposedComponent
)
{
  var _class;

  return _class = function (_React$Component) {
    _inherits(WidthProvider, _React$Component);

    var _super = _createSuper(WidthProvider);

    function WidthProvider() {
      var _this;

      _classCallCheck(this, WidthProvider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "state", {
        width: 1280
      });

      _defineProperty(_assertThisInitialized(_this), "elementRef", React.createRef());

      _defineProperty(_assertThisInitialized(_this), "mounted", false);

      _defineProperty(_assertThisInitialized(_this), "onWindowResize", function () {
        if (!_this.mounted) return;
        var node = _this.elementRef.current; 

        if (node instanceof HTMLElement && node.offsetWidth) {
          _this.setState({
            width: node.offsetWidth
          });
        }
      });

      return _this;
    }

    _createClass(WidthProvider, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.mounted = true;
        window.addEventListener("resize", this.onWindowResize); 

        this.onWindowResize();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
        window.removeEventListener("resize", this.onWindowResize);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            measureBeforeMount = _this$props.measureBeforeMount,
            rest = _objectWithoutProperties(_this$props, _excluded);

        if (measureBeforeMount && !this.mounted) {
          return React.createElement("div", {
            className: (0, _clsx.default)(this.props.className, layoutClassName),
            style: this.props.style 
            ,
            ref: this.elementRef
          });
        }

        return React.createElement(ComposedComponent, _extends({
          innerRef: this.elementRef
        }, rest, this.state));
      }
    }]);

    return WidthProvider;
  }(React.Component), _defineProperty(_class, "defaultProps", {
    measureBeforeMount: false
  }), _defineProperty(_class, "propTypes", {
    measureBeforeMount: _propTypes.default.bool
  }), _class;
}

 }),

 "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/fastRGLPropsEqual.js":
 ((module) => {

module.exports = function fastRGLPropsEqual(a, b, isEqualImpl) {
  if (a === b) return true;
  return a.className === b.className && isEqualImpl(a.style, b.style) && a.width === b.width && a.autoSize === b.autoSize && a.cols === b.cols && a.draggableCancel === b.draggableCancel && a.draggableHandle === b.draggableHandle && isEqualImpl(a.verticalCompact, b.verticalCompact) && isEqualImpl(a.compactType, b.compactType) && isEqualImpl(a.layout, b.layout) && isEqualImpl(a.margin, b.margin) && isEqualImpl(a.containerPadding, b.containerPadding) && a.rowHeight === b.rowHeight && a.maxRows === b.maxRows && a.isBounded === b.isBounded && a.isDraggable === b.isDraggable && a.isResizable === b.isResizable && a.allowOverlap === b.allowOverlap && a.preventCollision === b.preventCollision && a.useCSSTransforms === b.useCSSTransforms && a.transformScale === b.transformScale && a.isDroppable === b.isDroppable && isEqualImpl(a.resizeHandles, b.resizeHandles) && isEqualImpl(a.resizeHandle, b.resizeHandle) && a.onLayoutChange === b.onLayoutChange && a.onDragStart === b.onDragStart && a.onDrag === b.onDrag && a.onDragStop === b.onDragStop && a.onResizeStart === b.onResizeStart && a.onResize === b.onResize && a.onResizeStop === b.onResizeStop && a.onDrop === b.onDrop && isEqualImpl(a.droppingItem, b.droppingItem) && isEqualImpl(a.innerRef, b.innerRef);
};

 }),

 "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/responsiveUtils.js":
 ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.findOrGenerateResponsiveLayout = findOrGenerateResponsiveLayout;
exports.getBreakpointFromWidth = getBreakpointFromWidth;
exports.getColsFromBreakpoint = getColsFromBreakpoint;
exports.sortBreakpoints = sortBreakpoints;

var _utils = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/utils.js");

function getBreakpointFromWidth(breakpoints
, width
)
{
  var sorted = sortBreakpoints(breakpoints);
  var matching = sorted[0];

  for (var i = 1, len = sorted.length; i < len; i++) {
    var breakpointName = sorted[i];
    if (width > breakpoints[breakpointName]) matching = breakpointName;
  }

  return matching;
}


function getColsFromBreakpoint(breakpoint
, cols
)
{
  if (!cols[breakpoint]) {
    throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + breakpoint + " is missing!");
  }

  return cols[breakpoint];
}


function findOrGenerateResponsiveLayout(layouts
, breakpoints
, breakpoint
, lastBreakpoint
, cols
, compactType
)
{
  if (layouts[breakpoint]) return (0, _utils.cloneLayout)(layouts[breakpoint]); 

  var layout = layouts[lastBreakpoint];
  var breakpointsSorted = sortBreakpoints(breakpoints);
  var breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint));

  for (var i = 0, len = breakpointsAbove.length; i < len; i++) {
    var b = breakpointsAbove[i];

    if (layouts[b]) {
      layout = layouts[b];
      break;
    }
  }

  layout = (0, _utils.cloneLayout)(layout || []); 

  return (0, _utils.compact)((0, _utils.correctBounds)(layout, {
    cols: cols
  }), compactType, cols);
}


function sortBreakpoints(breakpoints
)
{
  var keys
  = Object.keys(breakpoints);
  return keys.sort(function (a, b) {
    return breakpoints[a] - breakpoints[b];
  });
}

 }),

 "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/utils.js":
 ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bottom = bottom;
exports.childrenEqual = childrenEqual;
exports.cloneLayout = cloneLayout;
exports.cloneLayoutItem = cloneLayoutItem;
exports.collides = collides;
exports.compact = compact;
exports.compactItem = compactItem;
exports.compactType = compactType;
exports.correctBounds = correctBounds;
exports.fastPositionEqual = fastPositionEqual;
exports.fastRGLPropsEqual = void 0;
exports.getAllCollisions = getAllCollisions;
exports.getFirstCollision = getFirstCollision;
exports.getLayoutItem = getLayoutItem;
exports.getStatics = getStatics;
exports.modifyLayout = modifyLayout;
exports.moveElement = moveElement;
exports.moveElementAwayFromCollision = moveElementAwayFromCollision;
exports.noop = void 0;
exports.perc = perc;
exports.setTopLeft = setTopLeft;
exports.setTransform = setTransform;
exports.sortLayoutItems = sortLayoutItems;
exports.sortLayoutItemsByColRow = sortLayoutItemsByColRow;
exports.sortLayoutItemsByRowCol = sortLayoutItemsByRowCol;
exports.synchronizeLayoutWithChildren = synchronizeLayoutWithChildren;
exports.validateLayout = validateLayout;
exports.withLayoutItem = withLayoutItem;

var _lodash = _interopRequireDefault(__webpack_require__("./.yarn/cache/lodash.isequal-npm-4.5.0-f8b0f64d63-da27515dc5.zip/node_modules/lodash.isequal/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isProduction = "production" === "production";
var DEBUG = false;

function bottom(layout
)
{
  var max = 0,
      bottomY;

  for (var i = 0, len = layout.length; i < len; i++) {
    bottomY = layout[i].y + layout[i].h;
    if (bottomY > max) max = bottomY;
  }

  return max;
}

function cloneLayout(layout
)
{
  var newLayout = Array(layout.length);

  for (var i = 0, len = layout.length; i < len; i++) {
    newLayout[i] = cloneLayoutItem(layout[i]);
  }

  return newLayout;
} 


function modifyLayout(layout
, layoutItem
)
{
  var newLayout = Array(layout.length);

  for (var i = 0, len = layout.length; i < len; i++) {
    if (layoutItem.i === layout[i].i) {
      newLayout[i] = layoutItem;
    } else {
      newLayout[i] = layout[i];
    }
  }

  return newLayout;
} 


function withLayoutItem(layout
, itemKey
, cb
)
{
  var item = getLayoutItem(layout, itemKey);
  if (!item) return [layout, null];
  item = cb(cloneLayoutItem(item)); 

  layout = modifyLayout(layout, item);
  return [layout, item];
} 


function cloneLayoutItem(layoutItem
)
{
  return {
    w: layoutItem.w,
    h: layoutItem.h,
    x: layoutItem.x,
    y: layoutItem.y,
    i: layoutItem.i,
    minW: layoutItem.minW,
    maxW: layoutItem.maxW,
    minH: layoutItem.minH,
    maxH: layoutItem.maxH,
    moved: Boolean(layoutItem.moved),
    static: Boolean(layoutItem.static),
    isDraggable: layoutItem.isDraggable,
    isResizable: layoutItem.isResizable,
    resizeHandles: layoutItem.resizeHandles,
    isBounded: layoutItem.isBounded
  };
}


function childrenEqual(a
, b
)
{
  return (0, _lodash.default)(_react.default.Children.map(a, function (c) {
    return c === null || c === void 0 ? void 0 : c.key;
  }), _react.default.Children.map(b, function (c) {
    return c === null || c === void 0 ? void 0 : c.key;
  }));
}



var fastRGLPropsEqual
= __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/fastRGLPropsEqual.js"); 


exports.fastRGLPropsEqual = fastRGLPropsEqual;

function fastPositionEqual(a
, b
)
{
  return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height;
}


function collides(l1
, l2
)
{
  if (l1.i === l2.i) return false; 

  if (l1.x + l1.w <= l2.x) return false; 

  if (l1.x >= l2.x + l2.w) return false; 

  if (l1.y + l1.h <= l2.y) return false; 

  if (l1.y >= l2.y + l2.h) return false; 

  return true; 
}


function compact(layout
, compactType
, cols
)
{
  var compareWith = getStatics(layout); 

  var sorted = sortLayoutItems(layout, compactType); 

  var out = Array(layout.length);

  for (var i = 0, len = sorted.length; i < len; i++) {
    var l = cloneLayoutItem(sorted[i]); 

    if (!l.static) {
      l = compactItem(compareWith, l, compactType, cols, sorted); 

      compareWith.push(l);
    } 


    out[layout.indexOf(sorted[i])] = l; 

    l.moved = false;
  }

  return out;
}

var heightWidth = {
  x: "w",
  y: "h"
};

function resolveCompactionCollision(layout
, item
, moveToCoord
, axis
) {
  var sizeProp = heightWidth[axis];
  item[axis] += 1;
  var itemIndex = layout.map(function (layoutItem) {
    return layoutItem.i;
  }).indexOf(item.i); 

  for (var i = itemIndex + 1; i < layout.length; i++) {
    var otherItem = layout[i]; 

    if (otherItem.static) continue; 

    if (otherItem.y > item.y + item.h) break;

    if (collides(item, otherItem)) {
      resolveCompactionCollision(layout, otherItem, moveToCoord + item[sizeProp], axis);
    }
  }

  item[axis] = moveToCoord;
}


function compactItem(compareWith
, l
, compactType
, cols
, fullLayout
)
{
  var compactV = compactType === "vertical";
  var compactH = compactType === "horizontal";

  if (compactV) {
    l.y = Math.min(bottom(compareWith), l.y); 

    while (l.y > 0 && !getFirstCollision(compareWith, l)) {
      l.y--;
    }
  } else if (compactH) {
    while (l.x > 0 && !getFirstCollision(compareWith, l)) {
      l.x--;
    }
  } 


  var collides;

  while (collides = getFirstCollision(compareWith, l)) {
    if (compactH) {
      resolveCompactionCollision(fullLayout, l, collides.x + collides.w, "x");
    } else {
      resolveCompactionCollision(fullLayout, l, collides.y + collides.h, "y");
    } 


    if (compactH && l.x + l.w > cols) {
      l.x = cols - l.w;
      l.y++;
    }
  } 


  l.y = Math.max(l.y, 0);
  l.x = Math.max(l.x, 0);
  return l;
}


function correctBounds(layout
, bounds
)
{
  var collidesWith = getStatics(layout);

  for (var i = 0, len = layout.length; i < len; i++) {
    var l = layout[i]; 

    if (l.x + l.w > bounds.cols) l.x = bounds.cols - l.w; 

    if (l.x < 0) {
      l.x = 0;
      l.w = bounds.cols;
    }

    if (!l.static) collidesWith.push(l);else {
      while (getFirstCollision(collidesWith, l)) {
        l.y++;
      }
    }
  }

  return layout;
}


function getLayoutItem(layout
, id
)
{
  for (var i = 0, len = layout.length; i < len; i++) {
    if (layout[i].i === id) return layout[i];
  }
}


function getFirstCollision(layout
, layoutItem
)
{
  for (var i = 0, len = layout.length; i < len; i++) {
    if (collides(layout[i], layoutItem)) return layout[i];
  }
}

function getAllCollisions(layout
, layoutItem
)
{
  return layout.filter(function (l) {
    return collides(l, layoutItem);
  });
}


function getStatics(layout
)
{
  return layout.filter(function (l) {
    return l.static;
  });
}


function moveElement(layout
, l
, x
, y
, isUserAction
, preventCollision
, compactType
, cols
, allowOverlap
)
{
  if (l.static && l.isDraggable !== true) return layout; 

  if (l.y === y && l.x === x) return layout;
  log("Moving element ".concat(l.i, " to [").concat(String(x), ",").concat(String(y), "] from [").concat(l.x, ",").concat(l.y, "]"));
  var oldX = l.x;
  var oldY = l.y; 

  if (typeof x === "number") l.x = x;
  if (typeof y === "number") l.y = y;
  l.moved = true; 

  var sorted = sortLayoutItems(layout, compactType);
  var movingUp = compactType === "vertical" && typeof y === "number" ? oldY >= y : compactType === "horizontal" && typeof x === "number" ? oldX >= x : false; 

  if (movingUp) sorted = sorted.reverse();
  var collisions = getAllCollisions(sorted, l);
  var hasCollisions = collisions.length > 0; 

  if (hasCollisions && allowOverlap) {
    return cloneLayout(layout);
  } else if (hasCollisions && preventCollision) {
    log("Collision prevented on ".concat(l.i, ", reverting."));
    l.x = oldX;
    l.y = oldY;
    l.moved = false;
    return layout; 
  } 


  for (var i = 0, len = collisions.length; i < len; i++) {
    var collision = collisions[i];
    log("Resolving collision between ".concat(l.i, " at [").concat(l.x, ",").concat(l.y, "] and ").concat(collision.i, " at [").concat(collision.x, ",").concat(collision.y, "]")); 

    if (collision.moved) continue; 

    if (collision.static) {
      layout = moveElementAwayFromCollision(layout, collision, l, isUserAction, compactType, cols);
    } else {
      layout = moveElementAwayFromCollision(layout, l, collision, isUserAction, compactType, cols);
    }
  }

  return layout;
}


function moveElementAwayFromCollision(layout
, collidesWith
, itemToMove
, isUserAction
, compactType
, cols
)
{
  var compactH = compactType === "horizontal"; 

  var compactV = compactType !== "horizontal";
  var preventCollision = collidesWith.static; 

  if (isUserAction) {
    isUserAction = false; 

    var fakeItem
    = {
      x: compactH ? Math.max(collidesWith.x - itemToMove.w, 0) : itemToMove.x,
      y: compactV ? Math.max(collidesWith.y - itemToMove.h, 0) : itemToMove.y,
      w: itemToMove.w,
      h: itemToMove.h,
      i: "-1"
    }; 

    if (!getFirstCollision(layout, fakeItem)) {
      log("Doing reverse collision on ".concat(itemToMove.i, " up to [").concat(fakeItem.x, ",").concat(fakeItem.y, "]."));
      return moveElement(layout, itemToMove, compactH ? fakeItem.x : undefined, compactV ? fakeItem.y : undefined, isUserAction, preventCollision, compactType, cols);
    }
  }

  return moveElement(layout, itemToMove, compactH ? itemToMove.x + 1 : undefined, compactV ? itemToMove.y + 1 : undefined, isUserAction, preventCollision, compactType, cols);
}


function perc(num
)
{
  return num * 100 + "%";
}

function setTransform(_ref)
{
  var top = _ref.top,
      left = _ref.left,
      width = _ref.width,
      height = _ref.height;
  var translate = "translate(".concat(left, "px,").concat(top, "px)");
  return {
    transform: translate,
    WebkitTransform: translate,
    MozTransform: translate,
    msTransform: translate,
    OTransform: translate,
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    position: "absolute"
  };
}

function setTopLeft(_ref2)
{
  var top = _ref2.top,
      left = _ref2.left,
      width = _ref2.width,
      height = _ref2.height;
  return {
    top: "".concat(top, "px"),
    left: "".concat(left, "px"),
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    position: "absolute"
  };
}


function sortLayoutItems(layout
, compactType
)
{
  if (compactType === "horizontal") return sortLayoutItemsByColRow(layout);
  if (compactType === "vertical") return sortLayoutItemsByRowCol(layout);else return layout;
}


function sortLayoutItemsByRowCol(layout
)
{
  return layout.slice(0).sort(function (a, b) {
    if (a.y > b.y || a.y === b.y && a.x > b.x) {
      return 1;
    } else if (a.y === b.y && a.x === b.x) {
      return 0;
    }

    return -1;
  });
}


function sortLayoutItemsByColRow(layout
)
{
  return layout.slice(0).sort(function (a, b) {
    if (a.x > b.x || a.x === b.x && a.y > b.y) {
      return 1;
    }

    return -1;
  });
}


function synchronizeLayoutWithChildren(initialLayout
, children
, cols
, compactType
, allowOverlap
)
{
  initialLayout = initialLayout || []; 

  var layout
  = [];

  _react.default.Children.forEach(children, function (child
  ) {
    if ((child === null || child === void 0 ? void 0 : child.key) == null) return; 

    var exists = getLayoutItem(initialLayout, String(child.key));

    if (exists) {
      layout.push(cloneLayoutItem(exists));
    } else {
      if (!isProduction && child.props._grid) {
        console.warn("`_grid` properties on children have been deprecated as of React 15.2. " + "Please use `data-grid` or add your properties directly to the `layout`.");
      }

      var g = child.props["data-grid"] || child.props._grid; 

      if (g) {
        if (!isProduction) {
          validateLayout([g], "ReactGridLayout.children");
        } 


        layout.push(cloneLayoutItem(_objectSpread(_objectSpread({}, g), {}, {
          i: child.key
        })));
      } else {
        layout.push(cloneLayoutItem({
          w: 1,
          h: 1,
          x: 0,
          y: bottom(layout),
          i: String(child.key)
        }));
      }
    }
  }); 


  var correctedLayout = correctBounds(layout, {
    cols: cols
  });
  return allowOverlap ? correctedLayout : compact(correctedLayout, compactType, cols);
}


function validateLayout(layout
)
{
  var contextName
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Layout";
  var subProps = ["x", "y", "w", "h"];
  if (!Array.isArray(layout)) throw new Error(contextName + " must be an array!");

  for (var i = 0, len = layout.length; i < len; i++) {
    var item = layout[i];

    for (var j = 0; j < subProps.length; j++) {
      if (typeof item[subProps[j]] !== "number") {
        throw new Error("ReactGridLayout: " + contextName + "[" + i + "]." + subProps[j] + " must be a number!");
      }
    }
  }
} 


function compactType(props
)
{
  var _ref3 = props || {},
      verticalCompact = _ref3.verticalCompact,
      compactType = _ref3.compactType;

  return verticalCompact === false ? null : compactType;
}

function log() {
  var _console;

  if (!DEBUG) return; 

  (_console = console).log.apply(_console, arguments);
}

var noop = function noop() {};

exports.noop = noop;

 }),

 "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/index.js":
 ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/ReactGridLayout.js")["default"];
module.exports.utils = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/utils.js");
module.exports.Responsive = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/ResponsiveReactGridLayout.js")["default"];
module.exports.Responsive.utils = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/responsiveUtils.js");
module.exports.WidthProvider = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/components/WidthProvider.js")["default"];


 }),

 "./.yarn/cache/lodash.isequal-npm-4.5.0-f8b0f64d63-da27515dc5.zip/node_modules/lodash.isequal/index.js":
 ((module, exports, __webpack_require__) => {

 module = __webpack_require__.nmd(module);

var LARGE_ARRAY_SIZE = 200;

var HASH_UNDEFINED = '__lodash_hash_undefined__';

var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

var MAX_SAFE_INTEGER = 9007199254740991;

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

var reIsHostCtor = /^\[object .+?Constructor\]$/;

var reIsUint = /^(?:0|[1-9]\d*)$/;

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

var root = freeGlobal || freeSelf || Function('return this')();

var freeExports =  true && exports && !exports.nodeType && exports;

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

var moduleExports = freeModule && freeModule.exports === freeExports;

var freeProcess = moduleExports && freeGlobal.process;

var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

function cacheHas(cache, key) {
  return cache.has(key);
}

function getValue(object, key) {
  return object == null ? undefined : object[key];
}

function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

var coreJsData = root['__core-js_shared__'];

var funcToString = funcProto.toString;

var hasOwnProperty = objectProto.hasOwnProperty;

var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

var nativeObjectToString = objectProto.toString;

var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

function setCacheHas(value) {
  return this.__data__.has(value);
}

SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

function stackGet(key) {
  return this.__data__.get(key);
}

function stackHas(key) {
  return this.__data__.has(key);
}

function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           key == 'length' ||
           (isBuff && (key == 'offset' || key == 'parent')) ||
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

var getTag = baseGetTag;

if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

function objectToString(value) {
  return nativeObjectToString.call(value);
}

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArray = Array.isArray;

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

var isBuffer = nativeIsBuffer || stubFalse;

function isEqual(value, other) {
  return baseIsEqual(value, other);
}

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

function stubArray() {
  return [];
}

function stubFalse() {
  return false;
}

module.exports = isEqual;


 }),

 "./.yarn/cache/react-style-proptype-npm-3.2.2-d7241ef02d-f0e646e148.zip/node_modules/react-style-proptype/src/css-properties.js":
 ((module) => {

module.exports = [
  "alignContent",
  "MozAlignContent",
  "WebkitAlignContent",
  "MSAlignContent",
  "OAlignContent",
  "alignItems",
  "MozAlignItems",
  "WebkitAlignItems",
  "MSAlignItems",
  "OAlignItems",
  "alignSelf",
  "MozAlignSelf",
  "WebkitAlignSelf",
  "MSAlignSelf",
  "OAlignSelf",
  "all",
  "MozAll",
  "WebkitAll",
  "MSAll",
  "OAll",
  "animation",
  "MozAnimation",
  "WebkitAnimation",
  "MSAnimation",
  "OAnimation",
  "animationDelay",
  "MozAnimationDelay",
  "WebkitAnimationDelay",
  "MSAnimationDelay",
  "OAnimationDelay",
  "animationDirection",
  "MozAnimationDirection",
  "WebkitAnimationDirection",
  "MSAnimationDirection",
  "OAnimationDirection",
  "animationDuration",
  "MozAnimationDuration",
  "WebkitAnimationDuration",
  "MSAnimationDuration",
  "OAnimationDuration",
  "animationFillMode",
  "MozAnimationFillMode",
  "WebkitAnimationFillMode",
  "MSAnimationFillMode",
  "OAnimationFillMode",
  "animationIterationCount",
  "MozAnimationIterationCount",
  "WebkitAnimationIterationCount",
  "MSAnimationIterationCount",
  "OAnimationIterationCount",
  "animationName",
  "MozAnimationName",
  "WebkitAnimationName",
  "MSAnimationName",
  "OAnimationName",
  "animationPlayState",
  "MozAnimationPlayState",
  "WebkitAnimationPlayState",
  "MSAnimationPlayState",
  "OAnimationPlayState",
  "animationTimingFunction",
  "MozAnimationTimingFunction",
  "WebkitAnimationTimingFunction",
  "MSAnimationTimingFunction",
  "OAnimationTimingFunction",
  "backfaceVisibility",
  "MozBackfaceVisibility",
  "WebkitBackfaceVisibility",
  "MSBackfaceVisibility",
  "OBackfaceVisibility",
  "background",
  "MozBackground",
  "WebkitBackground",
  "MSBackground",
  "OBackground",
  "backgroundAttachment",
  "MozBackgroundAttachment",
  "WebkitBackgroundAttachment",
  "MSBackgroundAttachment",
  "OBackgroundAttachment",
  "backgroundBlendMode",
  "MozBackgroundBlendMode",
  "WebkitBackgroundBlendMode",
  "MSBackgroundBlendMode",
  "OBackgroundBlendMode",
  "backgroundClip",
  "MozBackgroundClip",
  "WebkitBackgroundClip",
  "MSBackgroundClip",
  "OBackgroundClip",
  "backgroundColor",
  "MozBackgroundColor",
  "WebkitBackgroundColor",
  "MSBackgroundColor",
  "OBackgroundColor",
  "backgroundImage",
  "MozBackgroundImage",
  "WebkitBackgroundImage",
  "MSBackgroundImage",
  "OBackgroundImage",
  "backgroundOrigin",
  "MozBackgroundOrigin",
  "WebkitBackgroundOrigin",
  "MSBackgroundOrigin",
  "OBackgroundOrigin",
  "backgroundPosition",
  "MozBackgroundPosition",
  "WebkitBackgroundPosition",
  "MSBackgroundPosition",
  "OBackgroundPosition",
  "backgroundRepeat",
  "MozBackgroundRepeat",
  "WebkitBackgroundRepeat",
  "MSBackgroundRepeat",
  "OBackgroundRepeat",
  "backgroundSize",
  "MozBackgroundSize",
  "WebkitBackgroundSize",
  "MSBackgroundSize",
  "OBackgroundSize",
  "blockSize",
  "MozBlockSize",
  "WebkitBlockSize",
  "MSBlockSize",
  "OBlockSize",
  "border",
  "MozBorder",
  "WebkitBorder",
  "MSBorder",
  "OBorder",
  "borderBlockEnd",
  "MozBorderBlockEnd",
  "WebkitBorderBlockEnd",
  "MSBorderBlockEnd",
  "OBorderBlockEnd",
  "borderBlockEndColor",
  "MozBorderBlockEndColor",
  "WebkitBorderBlockEndColor",
  "MSBorderBlockEndColor",
  "OBorderBlockEndColor",
  "borderBlockEndStyle",
  "MozBorderBlockEndStyle",
  "WebkitBorderBlockEndStyle",
  "MSBorderBlockEndStyle",
  "OBorderBlockEndStyle",
  "borderBlockEndWidth",
  "MozBorderBlockEndWidth",
  "WebkitBorderBlockEndWidth",
  "MSBorderBlockEndWidth",
  "OBorderBlockEndWidth",
  "borderBlockStart",
  "MozBorderBlockStart",
  "WebkitBorderBlockStart",
  "MSBorderBlockStart",
  "OBorderBlockStart",
  "borderBlockStartColor",
  "MozBorderBlockStartColor",
  "WebkitBorderBlockStartColor",
  "MSBorderBlockStartColor",
  "OBorderBlockStartColor",
  "borderBlockStartStyle",
  "MozBorderBlockStartStyle",
  "WebkitBorderBlockStartStyle",
  "MSBorderBlockStartStyle",
  "OBorderBlockStartStyle",
  "borderBlockStartWidth",
  "MozBorderBlockStartWidth",
  "WebkitBorderBlockStartWidth",
  "MSBorderBlockStartWidth",
  "OBorderBlockStartWidth",
  "borderBottom",
  "MozBorderBottom",
  "WebkitBorderBottom",
  "MSBorderBottom",
  "OBorderBottom",
  "borderBottomColor",
  "MozBorderBottomColor",
  "WebkitBorderBottomColor",
  "MSBorderBottomColor",
  "OBorderBottomColor",
  "borderBottomLeftRadius",
  "MozBorderBottomLeftRadius",
  "WebkitBorderBottomLeftRadius",
  "MSBorderBottomLeftRadius",
  "OBorderBottomLeftRadius",
  "borderBottomRightRadius",
  "MozBorderBottomRightRadius",
  "WebkitBorderBottomRightRadius",
  "MSBorderBottomRightRadius",
  "OBorderBottomRightRadius",
  "borderBottomStyle",
  "MozBorderBottomStyle",
  "WebkitBorderBottomStyle",
  "MSBorderBottomStyle",
  "OBorderBottomStyle",
  "borderBottomWidth",
  "MozBorderBottomWidth",
  "WebkitBorderBottomWidth",
  "MSBorderBottomWidth",
  "OBorderBottomWidth",
  "borderCollapse",
  "MozBorderCollapse",
  "WebkitBorderCollapse",
  "MSBorderCollapse",
  "OBorderCollapse",
  "borderColor",
  "MozBorderColor",
  "WebkitBorderColor",
  "MSBorderColor",
  "OBorderColor",
  "borderImage",
  "MozBorderImage",
  "WebkitBorderImage",
  "MSBorderImage",
  "OBorderImage",
  "borderImageOutset",
  "MozBorderImageOutset",
  "WebkitBorderImageOutset",
  "MSBorderImageOutset",
  "OBorderImageOutset",
  "borderImageRepeat",
  "MozBorderImageRepeat",
  "WebkitBorderImageRepeat",
  "MSBorderImageRepeat",
  "OBorderImageRepeat",
  "borderImageSlice",
  "MozBorderImageSlice",
  "WebkitBorderImageSlice",
  "MSBorderImageSlice",
  "OBorderImageSlice",
  "borderImageSource",
  "MozBorderImageSource",
  "WebkitBorderImageSource",
  "MSBorderImageSource",
  "OBorderImageSource",
  "borderImageWidth",
  "MozBorderImageWidth",
  "WebkitBorderImageWidth",
  "MSBorderImageWidth",
  "OBorderImageWidth",
  "borderInlineEnd",
  "MozBorderInlineEnd",
  "WebkitBorderInlineEnd",
  "MSBorderInlineEnd",
  "OBorderInlineEnd",
  "borderInlineEndColor",
  "MozBorderInlineEndColor",
  "WebkitBorderInlineEndColor",
  "MSBorderInlineEndColor",
  "OBorderInlineEndColor",
  "borderInlineEndStyle",
  "MozBorderInlineEndStyle",
  "WebkitBorderInlineEndStyle",
  "MSBorderInlineEndStyle",
  "OBorderInlineEndStyle",
  "borderInlineEndWidth",
  "MozBorderInlineEndWidth",
  "WebkitBorderInlineEndWidth",
  "MSBorderInlineEndWidth",
  "OBorderInlineEndWidth",
  "borderInlineStart",
  "MozBorderInlineStart",
  "WebkitBorderInlineStart",
  "MSBorderInlineStart",
  "OBorderInlineStart",
  "borderInlineStartColor",
  "MozBorderInlineStartColor",
  "WebkitBorderInlineStartColor",
  "MSBorderInlineStartColor",
  "OBorderInlineStartColor",
  "borderInlineStartStyle",
  "MozBorderInlineStartStyle",
  "WebkitBorderInlineStartStyle",
  "MSBorderInlineStartStyle",
  "OBorderInlineStartStyle",
  "borderInlineStartWidth",
  "MozBorderInlineStartWidth",
  "WebkitBorderInlineStartWidth",
  "MSBorderInlineStartWidth",
  "OBorderInlineStartWidth",
  "borderLeft",
  "MozBorderLeft",
  "WebkitBorderLeft",
  "MSBorderLeft",
  "OBorderLeft",
  "borderLeftColor",
  "MozBorderLeftColor",
  "WebkitBorderLeftColor",
  "MSBorderLeftColor",
  "OBorderLeftColor",
  "borderLeftStyle",
  "MozBorderLeftStyle",
  "WebkitBorderLeftStyle",
  "MSBorderLeftStyle",
  "OBorderLeftStyle",
  "borderLeftWidth",
  "MozBorderLeftWidth",
  "WebkitBorderLeftWidth",
  "MSBorderLeftWidth",
  "OBorderLeftWidth",
  "borderRadius",
  "MozBorderRadius",
  "WebkitBorderRadius",
  "MSBorderRadius",
  "OBorderRadius",
  "borderRight",
  "MozBorderRight",
  "WebkitBorderRight",
  "MSBorderRight",
  "OBorderRight",
  "borderRightColor",
  "MozBorderRightColor",
  "WebkitBorderRightColor",
  "MSBorderRightColor",
  "OBorderRightColor",
  "borderRightStyle",
  "MozBorderRightStyle",
  "WebkitBorderRightStyle",
  "MSBorderRightStyle",
  "OBorderRightStyle",
  "borderRightWidth",
  "MozBorderRightWidth",
  "WebkitBorderRightWidth",
  "MSBorderRightWidth",
  "OBorderRightWidth",
  "borderSpacing",
  "MozBorderSpacing",
  "WebkitBorderSpacing",
  "MSBorderSpacing",
  "OBorderSpacing",
  "borderStyle",
  "MozBorderStyle",
  "WebkitBorderStyle",
  "MSBorderStyle",
  "OBorderStyle",
  "borderTop",
  "MozBorderTop",
  "WebkitBorderTop",
  "MSBorderTop",
  "OBorderTop",
  "borderTopColor",
  "MozBorderTopColor",
  "WebkitBorderTopColor",
  "MSBorderTopColor",
  "OBorderTopColor",
  "borderTopLeftRadius",
  "MozBorderTopLeftRadius",
  "WebkitBorderTopLeftRadius",
  "MSBorderTopLeftRadius",
  "OBorderTopLeftRadius",
  "borderTopRightRadius",
  "MozBorderTopRightRadius",
  "WebkitBorderTopRightRadius",
  "MSBorderTopRightRadius",
  "OBorderTopRightRadius",
  "borderTopStyle",
  "MozBorderTopStyle",
  "WebkitBorderTopStyle",
  "MSBorderTopStyle",
  "OBorderTopStyle",
  "borderTopWidth",
  "MozBorderTopWidth",
  "WebkitBorderTopWidth",
  "MSBorderTopWidth",
  "OBorderTopWidth",
  "borderWidth",
  "MozBorderWidth",
  "WebkitBorderWidth",
  "MSBorderWidth",
  "OBorderWidth",
  "bottom",
  "MozBottom",
  "WebkitBottom",
  "MSBottom",
  "OBottom",
  "boxDecorationBreak",
  "MozBoxDecorationBreak",
  "WebkitBoxDecorationBreak",
  "MSBoxDecorationBreak",
  "OBoxDecorationBreak",
  "boxShadow",
  "MozBoxShadow",
  "WebkitBoxShadow",
  "MSBoxShadow",
  "OBoxShadow",
  "boxSizing",
  "MozBoxSizing",
  "WebkitBoxSizing",
  "MSBoxSizing",
  "OBoxSizing",
  "breakAfter",
  "MozBreakAfter",
  "WebkitBreakAfter",
  "MSBreakAfter",
  "OBreakAfter",
  "breakBefore",
  "MozBreakBefore",
  "WebkitBreakBefore",
  "MSBreakBefore",
  "OBreakBefore",
  "breakInside",
  "MozBreakInside",
  "WebkitBreakInside",
  "MSBreakInside",
  "OBreakInside",
  "captionSide",
  "MozCaptionSide",
  "WebkitCaptionSide",
  "MSCaptionSide",
  "OCaptionSide",
  "caretColor",
  "MozCaretColor",
  "WebkitCaretColor",
  "MSCaretColor",
  "OCaretColor",
  "ch",
  "MozCh",
  "WebkitCh",
  "MSCh",
  "OCh",
  "clear",
  "MozClear",
  "WebkitClear",
  "MSClear",
  "OClear",
  "clip",
  "MozClip",
  "WebkitClip",
  "MSClip",
  "OClip",
  "clipPath",
  "MozClipPath",
  "WebkitClipPath",
  "MSClipPath",
  "OClipPath",
  "cm",
  "MozCm",
  "WebkitCm",
  "MSCm",
  "OCm",
  "color",
  "MozColor",
  "WebkitColor",
  "MSColor",
  "OColor",
  "columnCount",
  "MozColumnCount",
  "WebkitColumnCount",
  "MSColumnCount",
  "OColumnCount",
  "columnFill",
  "MozColumnFill",
  "WebkitColumnFill",
  "MSColumnFill",
  "OColumnFill",
  "columnGap",
  "MozColumnGap",
  "WebkitColumnGap",
  "MSColumnGap",
  "OColumnGap",
  "columnRule",
  "MozColumnRule",
  "WebkitColumnRule",
  "MSColumnRule",
  "OColumnRule",
  "columnRuleColor",
  "MozColumnRuleColor",
  "WebkitColumnRuleColor",
  "MSColumnRuleColor",
  "OColumnRuleColor",
  "columnRuleStyle",
  "MozColumnRuleStyle",
  "WebkitColumnRuleStyle",
  "MSColumnRuleStyle",
  "OColumnRuleStyle",
  "columnRuleWidth",
  "MozColumnRuleWidth",
  "WebkitColumnRuleWidth",
  "MSColumnRuleWidth",
  "OColumnRuleWidth",
  "columnSpan",
  "MozColumnSpan",
  "WebkitColumnSpan",
  "MSColumnSpan",
  "OColumnSpan",
  "columnWidth",
  "MozColumnWidth",
  "WebkitColumnWidth",
  "MSColumnWidth",
  "OColumnWidth",
  "columns",
  "MozColumns",
  "WebkitColumns",
  "MSColumns",
  "OColumns",
  "content",
  "MozContent",
  "WebkitContent",
  "MSContent",
  "OContent",
  "counterIncrement",
  "MozCounterIncrement",
  "WebkitCounterIncrement",
  "MSCounterIncrement",
  "OCounterIncrement",
  "counterReset",
  "MozCounterReset",
  "WebkitCounterReset",
  "MSCounterReset",
  "OCounterReset",
  "cursor",
  "MozCursor",
  "WebkitCursor",
  "MSCursor",
  "OCursor",
  "deg",
  "MozDeg",
  "WebkitDeg",
  "MSDeg",
  "ODeg",
  "direction",
  "MozDirection",
  "WebkitDirection",
  "MSDirection",
  "ODirection",
  "display",
  "MozDisplay",
  "WebkitDisplay",
  "MSDisplay",
  "ODisplay",
  "dpcm",
  "MozDpcm",
  "WebkitDpcm",
  "MSDpcm",
  "ODpcm",
  "dpi",
  "MozDpi",
  "WebkitDpi",
  "MSDpi",
  "ODpi",
  "dppx",
  "MozDppx",
  "WebkitDppx",
  "MSDppx",
  "ODppx",
  "em",
  "MozEm",
  "WebkitEm",
  "MSEm",
  "OEm",
  "emptyCells",
  "MozEmptyCells",
  "WebkitEmptyCells",
  "MSEmptyCells",
  "OEmptyCells",
  "ex",
  "MozEx",
  "WebkitEx",
  "MSEx",
  "OEx",
  "filter",
  "MozFilter",
  "WebkitFilter",
  "MSFilter",
  "OFilter",
  "flexBasis",
  "MozFlexBasis",
  "WebkitFlexBasis",
  "MSFlexBasis",
  "OFlexBasis",
  "flexDirection",
  "MozFlexDirection",
  "WebkitFlexDirection",
  "MSFlexDirection",
  "OFlexDirection",
  "flexFlow",
  "MozFlexFlow",
  "WebkitFlexFlow",
  "MSFlexFlow",
  "OFlexFlow",
  "flexGrow",
  "MozFlexGrow",
  "WebkitFlexGrow",
  "MSFlexGrow",
  "OFlexGrow",
  "flexShrink",
  "MozFlexShrink",
  "WebkitFlexShrink",
  "MSFlexShrink",
  "OFlexShrink",
  "flexWrap",
  "MozFlexWrap",
  "WebkitFlexWrap",
  "MSFlexWrap",
  "OFlexWrap",
  "float",
  "MozFloat",
  "WebkitFloat",
  "MSFloat",
  "OFloat",
  "font",
  "MozFont",
  "WebkitFont",
  "MSFont",
  "OFont",
  "fontFamily",
  "MozFontFamily",
  "WebkitFontFamily",
  "MSFontFamily",
  "OFontFamily",
  "fontFeatureSettings",
  "MozFontFeatureSettings",
  "WebkitFontFeatureSettings",
  "MSFontFeatureSettings",
  "OFontFeatureSettings",
  "fontKerning",
  "MozFontKerning",
  "WebkitFontKerning",
  "MSFontKerning",
  "OFontKerning",
  "fontLanguageOverride",
  "MozFontLanguageOverride",
  "WebkitFontLanguageOverride",
  "MSFontLanguageOverride",
  "OFontLanguageOverride",
  "fontSize",
  "MozFontSize",
  "WebkitFontSize",
  "MSFontSize",
  "OFontSize",
  "fontSizeAdjust",
  "MozFontSizeAdjust",
  "WebkitFontSizeAdjust",
  "MSFontSizeAdjust",
  "OFontSizeAdjust",
  "fontStretch",
  "MozFontStretch",
  "WebkitFontStretch",
  "MSFontStretch",
  "OFontStretch",
  "fontStyle",
  "MozFontStyle",
  "WebkitFontStyle",
  "MSFontStyle",
  "OFontStyle",
  "fontSynthesis",
  "MozFontSynthesis",
  "WebkitFontSynthesis",
  "MSFontSynthesis",
  "OFontSynthesis",
  "fontVariant",
  "MozFontVariant",
  "WebkitFontVariant",
  "MSFontVariant",
  "OFontVariant",
  "fontVariantAlternates",
  "MozFontVariantAlternates",
  "WebkitFontVariantAlternates",
  "MSFontVariantAlternates",
  "OFontVariantAlternates",
  "fontVariantCaps",
  "MozFontVariantCaps",
  "WebkitFontVariantCaps",
  "MSFontVariantCaps",
  "OFontVariantCaps",
  "fontVariantEastAsian",
  "MozFontVariantEastAsian",
  "WebkitFontVariantEastAsian",
  "MSFontVariantEastAsian",
  "OFontVariantEastAsian",
  "fontVariantLigatures",
  "MozFontVariantLigatures",
  "WebkitFontVariantLigatures",
  "MSFontVariantLigatures",
  "OFontVariantLigatures",
  "fontVariantNumeric",
  "MozFontVariantNumeric",
  "WebkitFontVariantNumeric",
  "MSFontVariantNumeric",
  "OFontVariantNumeric",
  "fontVariantPosition",
  "MozFontVariantPosition",
  "WebkitFontVariantPosition",
  "MSFontVariantPosition",
  "OFontVariantPosition",
  "fontWeight",
  "MozFontWeight",
  "WebkitFontWeight",
  "MSFontWeight",
  "OFontWeight",
  "fr",
  "MozFr",
  "WebkitFr",
  "MSFr",
  "OFr",
  "grad",
  "MozGrad",
  "WebkitGrad",
  "MSGrad",
  "OGrad",
  "grid",
  "MozGrid",
  "WebkitGrid",
  "MSGrid",
  "OGrid",
  "gridArea",
  "MozGridArea",
  "WebkitGridArea",
  "MSGridArea",
  "OGridArea",
  "gridAutoColumns",
  "MozGridAutoColumns",
  "WebkitGridAutoColumns",
  "MSGridAutoColumns",
  "OGridAutoColumns",
  "gridAutoFlow",
  "MozGridAutoFlow",
  "WebkitGridAutoFlow",
  "MSGridAutoFlow",
  "OGridAutoFlow",
  "gridAutoRows",
  "MozGridAutoRows",
  "WebkitGridAutoRows",
  "MSGridAutoRows",
  "OGridAutoRows",
  "gridColumn",
  "MozGridColumn",
  "WebkitGridColumn",
  "MSGridColumn",
  "OGridColumn",
  "gridColumnEnd",
  "MozGridColumnEnd",
  "WebkitGridColumnEnd",
  "MSGridColumnEnd",
  "OGridColumnEnd",
  "gridColumnGap",
  "MozGridColumnGap",
  "WebkitGridColumnGap",
  "MSGridColumnGap",
  "OGridColumnGap",
  "gridColumnStart",
  "MozGridColumnStart",
  "WebkitGridColumnStart",
  "MSGridColumnStart",
  "OGridColumnStart",
  "gridGap",
  "MozGridGap",
  "WebkitGridGap",
  "MSGridGap",
  "OGridGap",
  "gridRow",
  "MozGridRow",
  "WebkitGridRow",
  "MSGridRow",
  "OGridRow",
  "gridRowEnd",
  "MozGridRowEnd",
  "WebkitGridRowEnd",
  "MSGridRowEnd",
  "OGridRowEnd",
  "gridRowGap",
  "MozGridRowGap",
  "WebkitGridRowGap",
  "MSGridRowGap",
  "OGridRowGap",
  "gridRowStart",
  "MozGridRowStart",
  "WebkitGridRowStart",
  "MSGridRowStart",
  "OGridRowStart",
  "gridTemplate",
  "MozGridTemplate",
  "WebkitGridTemplate",
  "MSGridTemplate",
  "OGridTemplate",
  "gridTemplateAreas",
  "MozGridTemplateAreas",
  "WebkitGridTemplateAreas",
  "MSGridTemplateAreas",
  "OGridTemplateAreas",
  "gridTemplateColumns",
  "MozGridTemplateColumns",
  "WebkitGridTemplateColumns",
  "MSGridTemplateColumns",
  "OGridTemplateColumns",
  "gridTemplateRows",
  "MozGridTemplateRows",
  "WebkitGridTemplateRows",
  "MSGridTemplateRows",
  "OGridTemplateRows",
  "height",
  "MozHeight",
  "WebkitHeight",
  "MSHeight",
  "OHeight",
  "hyphens",
  "MozHyphens",
  "WebkitHyphens",
  "MSHyphens",
  "OHyphens",
  "hz",
  "MozHz",
  "WebkitHz",
  "MSHz",
  "OHz",
  "imageOrientation",
  "MozImageOrientation",
  "WebkitImageOrientation",
  "MSImageOrientation",
  "OImageOrientation",
  "imageRendering",
  "MozImageRendering",
  "WebkitImageRendering",
  "MSImageRendering",
  "OImageRendering",
  "imageResolution",
  "MozImageResolution",
  "WebkitImageResolution",
  "MSImageResolution",
  "OImageResolution",
  "imeMode",
  "MozImeMode",
  "WebkitImeMode",
  "MSImeMode",
  "OImeMode",
  "in",
  "MozIn",
  "WebkitIn",
  "MSIn",
  "OIn",
  "inherit",
  "MozInherit",
  "WebkitInherit",
  "MSInherit",
  "OInherit",
  "initial",
  "MozInitial",
  "WebkitInitial",
  "MSInitial",
  "OInitial",
  "inlineSize",
  "MozInlineSize",
  "WebkitInlineSize",
  "MSInlineSize",
  "OInlineSize",
  "isolation",
  "MozIsolation",
  "WebkitIsolation",
  "MSIsolation",
  "OIsolation",
  "justifyContent",
  "MozJustifyContent",
  "WebkitJustifyContent",
  "MSJustifyContent",
  "OJustifyContent",
  "khz",
  "MozKhz",
  "WebkitKhz",
  "MSKhz",
  "OKhz",
  "left",
  "MozLeft",
  "WebkitLeft",
  "MSLeft",
  "OLeft",
  "letterSpacing",
  "MozLetterSpacing",
  "WebkitLetterSpacing",
  "MSLetterSpacing",
  "OLetterSpacing",
  "lineBreak",
  "MozLineBreak",
  "WebkitLineBreak",
  "MSLineBreak",
  "OLineBreak",
  "lineHeight",
  "MozLineHeight",
  "WebkitLineHeight",
  "MSLineHeight",
  "OLineHeight",
  "listStyle",
  "MozListStyle",
  "WebkitListStyle",
  "MSListStyle",
  "OListStyle",
  "listStyleImage",
  "MozListStyleImage",
  "WebkitListStyleImage",
  "MSListStyleImage",
  "OListStyleImage",
  "listStylePosition",
  "MozListStylePosition",
  "WebkitListStylePosition",
  "MSListStylePosition",
  "OListStylePosition",
  "listStyleType",
  "MozListStyleType",
  "WebkitListStyleType",
  "MSListStyleType",
  "OListStyleType",
  "margin",
  "MozMargin",
  "WebkitMargin",
  "MSMargin",
  "OMargin",
  "marginBlockEnd",
  "MozMarginBlockEnd",
  "WebkitMarginBlockEnd",
  "MSMarginBlockEnd",
  "OMarginBlockEnd",
  "marginBlockStart",
  "MozMarginBlockStart",
  "WebkitMarginBlockStart",
  "MSMarginBlockStart",
  "OMarginBlockStart",
  "marginBottom",
  "MozMarginBottom",
  "WebkitMarginBottom",
  "MSMarginBottom",
  "OMarginBottom",
  "marginInlineEnd",
  "MozMarginInlineEnd",
  "WebkitMarginInlineEnd",
  "MSMarginInlineEnd",
  "OMarginInlineEnd",
  "marginInlineStart",
  "MozMarginInlineStart",
  "WebkitMarginInlineStart",
  "MSMarginInlineStart",
  "OMarginInlineStart",
  "marginLeft",
  "MozMarginLeft",
  "WebkitMarginLeft",
  "MSMarginLeft",
  "OMarginLeft",
  "marginRight",
  "MozMarginRight",
  "WebkitMarginRight",
  "MSMarginRight",
  "OMarginRight",
  "marginTop",
  "MozMarginTop",
  "WebkitMarginTop",
  "MSMarginTop",
  "OMarginTop",
  "mask",
  "MozMask",
  "WebkitMask",
  "MSMask",
  "OMask",
  "maskClip",
  "MozMaskClip",
  "WebkitMaskClip",
  "MSMaskClip",
  "OMaskClip",
  "maskComposite",
  "MozMaskComposite",
  "WebkitMaskComposite",
  "MSMaskComposite",
  "OMaskComposite",
  "maskImage",
  "MozMaskImage",
  "WebkitMaskImage",
  "MSMaskImage",
  "OMaskImage",
  "maskMode",
  "MozMaskMode",
  "WebkitMaskMode",
  "MSMaskMode",
  "OMaskMode",
  "maskOrigin",
  "MozMaskOrigin",
  "WebkitMaskOrigin",
  "MSMaskOrigin",
  "OMaskOrigin",
  "maskPosition",
  "MozMaskPosition",
  "WebkitMaskPosition",
  "MSMaskPosition",
  "OMaskPosition",
  "maskRepeat",
  "MozMaskRepeat",
  "WebkitMaskRepeat",
  "MSMaskRepeat",
  "OMaskRepeat",
  "maskSize",
  "MozMaskSize",
  "WebkitMaskSize",
  "MSMaskSize",
  "OMaskSize",
  "maskType",
  "MozMaskType",
  "WebkitMaskType",
  "MSMaskType",
  "OMaskType",
  "maxHeight",
  "MozMaxHeight",
  "WebkitMaxHeight",
  "MSMaxHeight",
  "OMaxHeight",
  "maxWidth",
  "MozMaxWidth",
  "WebkitMaxWidth",
  "MSMaxWidth",
  "OMaxWidth",
  "minBlockSize",
  "MozMinBlockSize",
  "WebkitMinBlockSize",
  "MSMinBlockSize",
  "OMinBlockSize",
  "minHeight",
  "MozMinHeight",
  "WebkitMinHeight",
  "MSMinHeight",
  "OMinHeight",
  "minInlineSize",
  "MozMinInlineSize",
  "WebkitMinInlineSize",
  "MSMinInlineSize",
  "OMinInlineSize",
  "minWidth",
  "MozMinWidth",
  "WebkitMinWidth",
  "MSMinWidth",
  "OMinWidth",
  "mixBlendMode",
  "MozMixBlendMode",
  "WebkitMixBlendMode",
  "MSMixBlendMode",
  "OMixBlendMode",
  "mm",
  "MozMm",
  "WebkitMm",
  "MSMm",
  "OMm",
  "ms",
  "MozMs",
  "WebkitMs",
  "MSMs",
  "OMs",
  "objectFit",
  "MozObjectFit",
  "WebkitObjectFit",
  "MSObjectFit",
  "OObjectFit",
  "objectPosition",
  "MozObjectPosition",
  "WebkitObjectPosition",
  "MSObjectPosition",
  "OObjectPosition",
  "offsetBlockEnd",
  "MozOffsetBlockEnd",
  "WebkitOffsetBlockEnd",
  "MSOffsetBlockEnd",
  "OOffsetBlockEnd",
  "offsetBlockStart",
  "MozOffsetBlockStart",
  "WebkitOffsetBlockStart",
  "MSOffsetBlockStart",
  "OOffsetBlockStart",
  "offsetInlineEnd",
  "MozOffsetInlineEnd",
  "WebkitOffsetInlineEnd",
  "MSOffsetInlineEnd",
  "OOffsetInlineEnd",
  "offsetInlineStart",
  "MozOffsetInlineStart",
  "WebkitOffsetInlineStart",
  "MSOffsetInlineStart",
  "OOffsetInlineStart",
  "opacity",
  "MozOpacity",
  "WebkitOpacity",
  "MSOpacity",
  "OOpacity",
  "order",
  "MozOrder",
  "WebkitOrder",
  "MSOrder",
  "OOrder",
  "orphans",
  "MozOrphans",
  "WebkitOrphans",
  "MSOrphans",
  "OOrphans",
  "outline",
  "MozOutline",
  "WebkitOutline",
  "MSOutline",
  "OOutline",
  "outlineColor",
  "MozOutlineColor",
  "WebkitOutlineColor",
  "MSOutlineColor",
  "OOutlineColor",
  "outlineOffset",
  "MozOutlineOffset",
  "WebkitOutlineOffset",
  "MSOutlineOffset",
  "OOutlineOffset",
  "outlineStyle",
  "MozOutlineStyle",
  "WebkitOutlineStyle",
  "MSOutlineStyle",
  "OOutlineStyle",
  "outlineWidth",
  "MozOutlineWidth",
  "WebkitOutlineWidth",
  "MSOutlineWidth",
  "OOutlineWidth",
  "overflow",
  "MozOverflow",
  "WebkitOverflow",
  "MSOverflow",
  "OOverflow",
  "overflowWrap",
  "MozOverflowWrap",
  "WebkitOverflowWrap",
  "MSOverflowWrap",
  "OOverflowWrap",
  "overflowX",
  "MozOverflowX",
  "WebkitOverflowX",
  "MSOverflowX",
  "OOverflowX",
  "overflowY",
  "MozOverflowY",
  "WebkitOverflowY",
  "MSOverflowY",
  "OOverflowY",
  "padding",
  "MozPadding",
  "WebkitPadding",
  "MSPadding",
  "OPadding",
  "paddingBlockEnd",
  "MozPaddingBlockEnd",
  "WebkitPaddingBlockEnd",
  "MSPaddingBlockEnd",
  "OPaddingBlockEnd",
  "paddingBlockStart",
  "MozPaddingBlockStart",
  "WebkitPaddingBlockStart",
  "MSPaddingBlockStart",
  "OPaddingBlockStart",
  "paddingBottom",
  "MozPaddingBottom",
  "WebkitPaddingBottom",
  "MSPaddingBottom",
  "OPaddingBottom",
  "paddingInlineEnd",
  "MozPaddingInlineEnd",
  "WebkitPaddingInlineEnd",
  "MSPaddingInlineEnd",
  "OPaddingInlineEnd",
  "paddingInlineStart",
  "MozPaddingInlineStart",
  "WebkitPaddingInlineStart",
  "MSPaddingInlineStart",
  "OPaddingInlineStart",
  "paddingLeft",
  "MozPaddingLeft",
  "WebkitPaddingLeft",
  "MSPaddingLeft",
  "OPaddingLeft",
  "paddingRight",
  "MozPaddingRight",
  "WebkitPaddingRight",
  "MSPaddingRight",
  "OPaddingRight",
  "paddingTop",
  "MozPaddingTop",
  "WebkitPaddingTop",
  "MSPaddingTop",
  "OPaddingTop",
  "pageBreakAfter",
  "MozPageBreakAfter",
  "WebkitPageBreakAfter",
  "MSPageBreakAfter",
  "OPageBreakAfter",
  "pageBreakBefore",
  "MozPageBreakBefore",
  "WebkitPageBreakBefore",
  "MSPageBreakBefore",
  "OPageBreakBefore",
  "pageBreakInside",
  "MozPageBreakInside",
  "WebkitPageBreakInside",
  "MSPageBreakInside",
  "OPageBreakInside",
  "pc",
  "MozPc",
  "WebkitPc",
  "MSPc",
  "OPc",
  "perspective",
  "MozPerspective",
  "WebkitPerspective",
  "MSPerspective",
  "OPerspective",
  "perspectiveOrigin",
  "MozPerspectiveOrigin",
  "WebkitPerspectiveOrigin",
  "MSPerspectiveOrigin",
  "OPerspectiveOrigin",
  "pointerEvents",
  "MozPointerEvents",
  "WebkitPointerEvents",
  "MSPointerEvents",
  "OPointerEvents",
  "position",
  "MozPosition",
  "WebkitPosition",
  "MSPosition",
  "OPosition",
  "pt",
  "MozPt",
  "WebkitPt",
  "MSPt",
  "OPt",
  "px",
  "MozPx",
  "WebkitPx",
  "MSPx",
  "OPx",
  "q",
  "MozQ",
  "WebkitQ",
  "MSQ",
  "OQ",
  "quotes",
  "MozQuotes",
  "WebkitQuotes",
  "MSQuotes",
  "OQuotes",
  "rad",
  "MozRad",
  "WebkitRad",
  "MSRad",
  "ORad",
  "rem",
  "MozRem",
  "WebkitRem",
  "MSRem",
  "ORem",
  "resize",
  "MozResize",
  "WebkitResize",
  "MSResize",
  "OResize",
  "revert",
  "MozRevert",
  "WebkitRevert",
  "MSRevert",
  "ORevert",
  "right",
  "MozRight",
  "WebkitRight",
  "MSRight",
  "ORight",
  "rubyAlign",
  "MozRubyAlign",
  "WebkitRubyAlign",
  "MSRubyAlign",
  "ORubyAlign",
  "rubyMerge",
  "MozRubyMerge",
  "WebkitRubyMerge",
  "MSRubyMerge",
  "ORubyMerge",
  "rubyPosition",
  "MozRubyPosition",
  "WebkitRubyPosition",
  "MSRubyPosition",
  "ORubyPosition",
  "s",
  "MozS",
  "WebkitS",
  "MSS",
  "OS",
  "scrollBehavior",
  "MozScrollBehavior",
  "WebkitScrollBehavior",
  "MSScrollBehavior",
  "OScrollBehavior",
  "scrollSnapCoordinate",
  "MozScrollSnapCoordinate",
  "WebkitScrollSnapCoordinate",
  "MSScrollSnapCoordinate",
  "OScrollSnapCoordinate",
  "scrollSnapDestination",
  "MozScrollSnapDestination",
  "WebkitScrollSnapDestination",
  "MSScrollSnapDestination",
  "OScrollSnapDestination",
  "scrollSnapType",
  "MozScrollSnapType",
  "WebkitScrollSnapType",
  "MSScrollSnapType",
  "OScrollSnapType",
  "shapeImageThreshold",
  "MozShapeImageThreshold",
  "WebkitShapeImageThreshold",
  "MSShapeImageThreshold",
  "OShapeImageThreshold",
  "shapeMargin",
  "MozShapeMargin",
  "WebkitShapeMargin",
  "MSShapeMargin",
  "OShapeMargin",
  "shapeOutside",
  "MozShapeOutside",
  "WebkitShapeOutside",
  "MSShapeOutside",
  "OShapeOutside",
  "tabSize",
  "MozTabSize",
  "WebkitTabSize",
  "MSTabSize",
  "OTabSize",
  "tableLayout",
  "MozTableLayout",
  "WebkitTableLayout",
  "MSTableLayout",
  "OTableLayout",
  "textAlign",
  "MozTextAlign",
  "WebkitTextAlign",
  "MSTextAlign",
  "OTextAlign",
  "textAlignLast",
  "MozTextAlignLast",
  "WebkitTextAlignLast",
  "MSTextAlignLast",
  "OTextAlignLast",
  "textCombineUpright",
  "MozTextCombineUpright",
  "WebkitTextCombineUpright",
  "MSTextCombineUpright",
  "OTextCombineUpright",
  "textDecoration",
  "MozTextDecoration",
  "WebkitTextDecoration",
  "MSTextDecoration",
  "OTextDecoration",
  "textDecorationColor",
  "MozTextDecorationColor",
  "WebkitTextDecorationColor",
  "MSTextDecorationColor",
  "OTextDecorationColor",
  "textDecorationLine",
  "MozTextDecorationLine",
  "WebkitTextDecorationLine",
  "MSTextDecorationLine",
  "OTextDecorationLine",
  "textDecorationStyle",
  "MozTextDecorationStyle",
  "WebkitTextDecorationStyle",
  "MSTextDecorationStyle",
  "OTextDecorationStyle",
  "textEmphasis",
  "MozTextEmphasis",
  "WebkitTextEmphasis",
  "MSTextEmphasis",
  "OTextEmphasis",
  "textEmphasisColor",
  "MozTextEmphasisColor",
  "WebkitTextEmphasisColor",
  "MSTextEmphasisColor",
  "OTextEmphasisColor",
  "textEmphasisPosition",
  "MozTextEmphasisPosition",
  "WebkitTextEmphasisPosition",
  "MSTextEmphasisPosition",
  "OTextEmphasisPosition",
  "textEmphasisStyle",
  "MozTextEmphasisStyle",
  "WebkitTextEmphasisStyle",
  "MSTextEmphasisStyle",
  "OTextEmphasisStyle",
  "textIndent",
  "MozTextIndent",
  "WebkitTextIndent",
  "MSTextIndent",
  "OTextIndent",
  "textOrientation",
  "MozTextOrientation",
  "WebkitTextOrientation",
  "MSTextOrientation",
  "OTextOrientation",
  "textOverflow",
  "MozTextOverflow",
  "WebkitTextOverflow",
  "MSTextOverflow",
  "OTextOverflow",
  "textRendering",
  "MozTextRendering",
  "WebkitTextRendering",
  "MSTextRendering",
  "OTextRendering",
  "textShadow",
  "MozTextShadow",
  "WebkitTextShadow",
  "MSTextShadow",
  "OTextShadow",
  "textTransform",
  "MozTextTransform",
  "WebkitTextTransform",
  "MSTextTransform",
  "OTextTransform",
  "textUnderlinePosition",
  "MozTextUnderlinePosition",
  "WebkitTextUnderlinePosition",
  "MSTextUnderlinePosition",
  "OTextUnderlinePosition",
  "top",
  "MozTop",
  "WebkitTop",
  "MSTop",
  "OTop",
  "touchAction",
  "MozTouchAction",
  "WebkitTouchAction",
  "MSTouchAction",
  "OTouchAction",
  "transform",
  "MozTransform",
  "WebkitTransform",
  "msTransform",
  "OTransform",
  "transformBox",
  "MozTransformBox",
  "WebkitTransformBox",
  "MSTransformBox",
  "OTransformBox",
  "transformOrigin",
  "MozTransformOrigin",
  "WebkitTransformOrigin",
  "MSTransformOrigin",
  "OTransformOrigin",
  "transformStyle",
  "MozTransformStyle",
  "WebkitTransformStyle",
  "MSTransformStyle",
  "OTransformStyle",
  "transition",
  "MozTransition",
  "WebkitTransition",
  "MSTransition",
  "OTransition",
  "transitionDelay",
  "MozTransitionDelay",
  "WebkitTransitionDelay",
  "MSTransitionDelay",
  "OTransitionDelay",
  "transitionDuration",
  "MozTransitionDuration",
  "WebkitTransitionDuration",
  "MSTransitionDuration",
  "OTransitionDuration",
  "transitionProperty",
  "MozTransitionProperty",
  "WebkitTransitionProperty",
  "MSTransitionProperty",
  "OTransitionProperty",
  "transitionTimingFunction",
  "MozTransitionTimingFunction",
  "WebkitTransitionTimingFunction",
  "MSTransitionTimingFunction",
  "OTransitionTimingFunction",
  "turn",
  "MozTurn",
  "WebkitTurn",
  "MSTurn",
  "OTurn",
  "unicodeBidi",
  "MozUnicodeBidi",
  "WebkitUnicodeBidi",
  "MSUnicodeBidi",
  "OUnicodeBidi",
  "unset",
  "MozUnset",
  "WebkitUnset",
  "MSUnset",
  "OUnset",
  "verticalAlign",
  "MozVerticalAlign",
  "WebkitVerticalAlign",
  "MSVerticalAlign",
  "OVerticalAlign",
  "vh",
  "MozVh",
  "WebkitVh",
  "MSVh",
  "OVh",
  "visibility",
  "MozVisibility",
  "WebkitVisibility",
  "MSVisibility",
  "OVisibility",
  "vmax",
  "MozVmax",
  "WebkitVmax",
  "MSVmax",
  "OVmax",
  "vmin",
  "MozVmin",
  "WebkitVmin",
  "MSVmin",
  "OVmin",
  "vw",
  "MozVw",
  "WebkitVw",
  "MSVw",
  "OVw",
  "whiteSpace",
  "MozWhiteSpace",
  "WebkitWhiteSpace",
  "MSWhiteSpace",
  "OWhiteSpace",
  "widows",
  "MozWidows",
  "WebkitWidows",
  "MSWidows",
  "OWidows",
  "width",
  "MozWidth",
  "WebkitWidth",
  "MSWidth",
  "OWidth",
  "willChange",
  "MozWillChange",
  "WebkitWillChange",
  "MSWillChange",
  "OWillChange",
  "wordBreak",
  "MozWordBreak",
  "WebkitWordBreak",
  "MSWordBreak",
  "OWordBreak",
  "wordSpacing",
  "MozWordSpacing",
  "WebkitWordSpacing",
  "MSWordSpacing",
  "OWordSpacing",
  "wordWrap",
  "MozWordWrap",
  "WebkitWordWrap",
  "MSWordWrap",
  "OWordWrap",
  "writingMode",
  "MozWritingMode",
  "WebkitWritingMode",
  "MSWritingMode",
  "OWritingMode",
  "zIndex",
  "MozZIndex",
  "WebkitZIndex",
  "MSZIndex",
  "OZIndex",
  "fontSize",
  "MozFontSize",
  "WebkitFontSize",
  "MSFontSize",
  "OFontSize",
  "flex",
  "MozFlex",
  "WebkitFlex",
  "MSFlex",
  "OFlex",
  "fr",
  "MozFr",
  "WebkitFr",
  "MSFr",
  "OFr",
  "overflowScrolling",
  "MozOverflowScrolling",
  "WebkitOverflowScrolling",
  "MSOverflowScrolling",
  "OOverflowScrolling",
  "userSelect",
  "MozUserSelect",
  "WebkitUserSelect",
  "MSUserSelect",
  "OUserSelect"
]


 }),

 "./.yarn/cache/react-style-proptype-npm-3.2.2-d7241ef02d-f0e646e148.zip/node_modules/react-style-proptype/src/index.js":
 ((module, __unused_webpack_exports, __webpack_require__) => {

var properties = __webpack_require__("./.yarn/cache/react-style-proptype-npm-3.2.2-d7241ef02d-f0e646e148.zip/node_modules/react-style-proptype/src/css-properties.js");
var PropTypes = __webpack_require__("./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js");

module.exports = function(props, propName, componentName) {
  var styles = props[propName];
  if (!styles) {
    return;
  }

  var failures = [];
  Object.keys(styles).forEach(function(styleKey){
    if (properties.indexOf(styleKey) === -1) {
      failures.push(styleKey);
    }
  });
  if (failures.length) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + '. Has invalid keys ' + failures.join(', '));
  }
};

module.exports.isRequired = function(props, propName, componentName) {
  if (!props[propName]) {
    throw new Error('Prop ' + propName + ' passed to ' + componentName + ' is required');
  }
  return module.exports(props, propName, componentName);
};

module.exports.supportingArrays = PropTypes.oneOfType([
  PropTypes.arrayOf(module.exports),
  module.exports
]);


 })

}]);