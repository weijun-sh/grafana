(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[5296],{

/***/ "./public/app/features/alerting/getAlertingValidationMessage.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ getAlertingValidationMessage),
/* harmony export */   "z": () => (/* binding */ getDefaultCondition)
/* harmony export */ });
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

/***/ }),

/***/ "./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ DynamicTableWithGuidelines)
/* harmony export */ });
/* unused harmony export getStyles */
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _DynamicTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["renderExpandedContent"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








// DynamicTable, but renders visual guidelines on the left, for larger screen widths
const DynamicTableWithGuidelines = _ref => {
  let {
    renderExpandedContent
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_DynamicTable__WEBPACK_IMPORTED_MODULE_3__/* .DynamicTable */ .t, Object.assign({
    renderExpandedContent: renderExpandedContent ? (item, index, items) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [!(index === items.length - 1) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.contentGuideline, styles.guideline)
      }), renderExpandedContent(item, index, items)]
    }) : undefined,
    renderPrefixHeader: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: styles.relative,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.headerGuideline, styles.guideline)
      })
    }),
    renderPrefixCell: (_, index, items) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: styles.relative,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.topGuideline, styles.guideline)
      }), !(index === items.length - 1) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
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

/***/ }),

/***/ "./public/app/features/alerting/unified/components/RuleLocation.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ RuleLocation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Icon;







const RuleLocation = _ref => {
  let {
    namespace,
    group
  } = _ref;

  if (!group) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: namespace
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [namespace, " ", _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: "angle-right"
    })), " ", group]
  });
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/RulesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ RulesTable)
});

// UNUSED EXPORTS: getStyles

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useHasRuler.ts
var useHasRuler = __webpack_require__("./public/app/features/alerting/unified/hooks/useHasRuler.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/constants.ts
var constants = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/DynamicTable.tsx
var DynamicTable = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx
var DynamicTableWithGuidelines = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/RuleLocation.tsx
var RuleLocation = __webpack_require__("./public/app/features/alerting/unified/components/RuleLocation.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertLabels.tsx
var AlertLabels = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/DetailsField.tsx
var DetailsField = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx + 3 modules
var RuleDetailsActionButtons = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx
var RuleDetailsAnnotations = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx
var RuleDetailsDataSources = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx + 1 modules
var RuleDetailsExpression = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx + 1 modules
var RuleDetailsMatchingInstances = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/RuleDetails.tsx












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
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetailsActionButtons/* RuleDetailsActionButtons */.f, {
      rule: rule,
      rulesSource: rulesSource
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.wrapper,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.leftSide,
        children: [!!rule.labels && !!Object.keys(rule.labels).length && /*#__PURE__*/(0,jsx_runtime.jsx)(DetailsField/* DetailsField */.C, {
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
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.rightSide,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetailsDataSources/* RuleDetailsDataSources */.C, {
          rulesSource: rulesSource,
          rule: rule
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetailsMatchingInstances/* RuleDetailsMatchingInstances */.M, {
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
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleHealth.tsx
var RuleHealth = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleHealth.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RuleState.tsx
var RuleState = __webpack_require__("./public/app/features/alerting/unified/components/rules/RuleState.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/RulesTable.tsx












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
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: (0,emotion_css_esm.cx)(wrapperClass, styles.emptyMessage),
      children: emptyMessage
    });
  }

  const TableComponent = showGuidelines ? DynamicTableWithGuidelines/* DynamicTableWithGuidelines */.F : DynamicTable/* DynamicTable */.t;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: wrapperClass,
    "data-testid": "rules-table",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TableComponent, {
      cols: columns,
      isExpandable: true,
      items: items,
      renderExpandedContent: _ref2 => {
        let {
          data: rule
        } = _ref2;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(RuleDetails, {
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
  const hasRuler = (0,useHasRuler/* useHasRuler */.h)();
  return (0,react.useMemo)(() => {
    const columns = [{
      id: 'state',
      label: 'State',
      // eslint-disable-next-line react/display-name
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
        return /*#__PURE__*/(0,jsx_runtime.jsx)(RuleState/* RuleState */.p, {
          rule: rule,
          isDeleting: isDeleting,
          isCreating: isCreating
        });
      },
      size: '165px'
    }, {
      id: 'name',
      label: 'Name',
      // eslint-disable-next-line react/display-name
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
      // eslint-disable-next-line react/display-name
      renderCell: _ref5 => {
        let {
          data: {
            promRule
          }
        } = _ref5;
        return promRule ? /*#__PURE__*/(0,jsx_runtime.jsx)(RuleHealth/* RuleHealth */.V, {
          rule: promRule
        }) : null;
      },
      size: '75px'
    }];

    if (showSummaryColumn) {
      columns.push({
        id: 'summary',
        label: 'Summary',
        // eslint-disable-next-line react/display-name
        renderCell: _ref6 => {
          var _rule$annotations$Ann;

          let {
            data: rule
          } = _ref6;
          return (_rule$annotations$Ann = rule.annotations[constants/* Annotation.summary */.q6.summary]) !== null && _rule$annotations$Ann !== void 0 ? _rule$annotations$Ann : '';
        },
        size: 5
      });
    }

    if (showGroupColumn) {
      columns.push({
        id: 'group',
        label: 'Group',
        // eslint-disable-next-line react/display-name
        renderCell: _ref7 => {
          let {
            data: rule
          } = _ref7;
          const {
            namespace,
            group
          } = rule; // ungrouped rules are rules that are in the "default" group name

          const isUngrouped = group.name === 'default';
          const groupName = isUngrouped ? /*#__PURE__*/(0,jsx_runtime.jsx)(RuleLocation/* RuleLocation */.V, {
            namespace: namespace.name
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(RuleLocation/* RuleLocation */.V, {
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

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useHasRuler.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useHasRuler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");


 // datasource has ruler if it's grafana managed or if we're able to load rules from it

function useHasRuler() {
  const rulerRules = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_2__/* .useUnifiedAlertingSelector */ ._)(state => state.rulerRules);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(rulesSource => {
    var _rulerRules$rulesSour;

    const rulesSourceName = typeof rulesSource === 'string' ? rulesSource : rulesSource.name;
    return rulesSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_1__/* .GRAFANA_RULES_SOURCE_NAME */ .GC || !!((_rulerRules$rulesSour = rulerRules[rulesSourceName]) !== null && _rulerRules$rulesSour !== void 0 && _rulerRules$rulesSour.result);
  }, [rulerRules]);
}

/***/ }),

/***/ "./public/app/features/dashboard/containers/DashboardPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DashboardPage": () => (/* binding */ DashboardPage),
  "UnthemedDashboardPage": () => (/* binding */ UnthemedDashboardPage),
  "default": () => (/* binding */ containers_DashboardPage),
  "getStyles": () => (/* binding */ DashboardPage_getStyles),
  "mapStateToProps": () => (/* binding */ DashboardPage_mapStateToProps)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js
var classnames = __webpack_require__("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./packages/grafana-e2e-selectors/src/index.ts + 3 modules
var src = __webpack_require__("./packages/grafana-e2e-selectors/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var grafana_ui_src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/actions/index.ts
var actions = __webpack_require__("./public/app/core/actions/index.ts");
// EXTERNAL MODULE: ./public/app/core/components/Branding/Branding.tsx
var Branding = __webpack_require__("./public/app/core/components/Branding/Branding.tsx");
// EXTERNAL MODULE: ./public/app/core/copy/appNotification.ts
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
// EXTERNAL MODULE: ./public/app/core/navigation/kiosk.ts
var kiosk = __webpack_require__("./public/app/core/navigation/kiosk.ts");
// EXTERNAL MODULE: ./public/app/features/live/dashboard/dashboardWatcher.ts + 2 modules
var dashboardWatcher = __webpack_require__("./public/app/features/live/dashboard/dashboardWatcher.ts");
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var types = __webpack_require__("./public/app/types/index.ts");
// EXTERNAL MODULE: ./public/app/types/events.ts
var types_events = __webpack_require__("./public/app/types/events.ts");
// EXTERNAL MODULE: ./public/app/features/variables/state/actions.ts + 1 modules
var state_actions = __webpack_require__("./public/app/features/variables/state/actions.ts");
// EXTERNAL MODULE: ./public/app/features/variables/utils.ts
var utils = __webpack_require__("./public/app/features/variables/utils.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/components/DashNav/index.ts + 2 modules
var DashNav = __webpack_require__("./public/app/features/dashboard/components/DashNav/index.ts");
// EXTERNAL MODULE: ./public/app/core/utils/errors.ts
var errors = __webpack_require__("./public/app/core/utils/errors.ts");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/DashboardLoading/DashboardFailed.tsx






const DashboardFailed = _ref => {
  let {
    initError
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(getStyles);

  if (!initError) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.dashboardLoading,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      severity: types/* AppNotificationSeverity.Error */.F1.Error,
      title: initError.message,
      children: (0,errors/* getMessageFromError */.i)(initError.error)
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
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/DashboardLoading/DashboardLoading.tsx
var _Spinner;







const DashboardLoading = _ref => {
  let {
    initPhase
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(DashboardLoading_getStyles);

  const cancelVariables = () => {
    grafana_runtime_src.locationService.push('/');
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.dashboardLoading,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.dashboardLoadingText,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
        spacing: "md",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
          align: "center",
          justify: "center",
          spacing: "xs",
          children: [_Spinner || (_Spinner = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Spinner, {
            inline: true
          })), " ", initPhase]
        }), ' ', /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.HorizontalGroup, {
          align: "center",
          justify: "center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
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
  // Amount of time we want to pass before we start showing loading spinner
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
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
// EXTERNAL MODULE: ./public/app/core/app_events.ts
var app_events = __webpack_require__("./public/app/core/app_events.ts");
// EXTERNAL MODULE: ./public/app/core/services/context_srv.ts
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsync.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js + 1 modules
var useDebounce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
// EXTERNAL MODULE: ./public/app/features/library-panels/state/api.ts
var api = __webpack_require__("./public/app/features/library-panels/state/api.ts");
// EXTERNAL MODULE: ./public/app/features/library-panels/styles.ts
var library_panels_styles = __webpack_require__("./public/app/features/library-panels/styles.ts");
// EXTERNAL MODULE: ./public/app/features/library-panels/utils/usePanelSave.ts
var usePanelSave = __webpack_require__("./public/app/features/library-panels/utils/usePanelSave.ts");
;// CONCATENATED MODULE: ./public/app/features/library-panels/components/SaveLibraryPanelModal/SaveLibraryPanelModal.tsx
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
  const dashState = (0,useAsync/* default */.Z)(async () => {
    const searchHits = await (0,api/* getConnectedDashboards */.E8)(panel.libraryPanel.uid);

    if (searchHits.length > 0) {
      return searchHits.map(dash => dash.title);
    }

    return [];
  }, [panel.libraryPanel.uid]);
  const [filteredDashboards, setFilteredDashboards] = (0,react.useState)([]);
  (0,useDebounce/* default */.Z)(() => {
    if (!dashState.value) {
      return setFilteredDashboards([]);
    }

    return setFilteredDashboards(dashState.value.filter(dashName => dashName.toLowerCase().includes(searchString.toLowerCase())));
  }, 300, [dashState.value, searchString]);
  const {
    saveLibraryPanel
  } = (0,usePanelSave/* usePanelSave */.E)();
  const styles = (0,grafana_ui_src.useStyles)(library_panels_styles/* getModalStyles */.J);
  const discardAndClose = (0,react.useCallback)(() => {
    onDiscard();
  }, [onDiscard]);
  const title = isUnsavedPrompt ? 'Unsaved library panel changes' : 'Save library panel';
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Modal, {
    title: title,
    icon: "save",
    onDismiss: onDismiss,
    isOpen: true,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
        className: styles.textInfo,
        children: ['This update will affect ', /*#__PURE__*/(0,jsx_runtime.jsxs)("strong", {
          children: [panel.libraryPanel.meta.connectedDashboards, ' ', panel.libraryPanel.meta.connectedDashboards === 1 ? 'dashboard' : 'dashboards', "."]
        }), "The following dashboards using the panel will be affected:"]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        className: styles.dashboardSearch,
        prefix: _Icon || (_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: "search"
        })),
        placeholder: "Search affected dashboards",
        value: searchString,
        onChange: e => setSearchString(e.currentTarget.value)
      }), dashState.loading ? _p || (_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: "Loading connected dashboards..."
      })) : /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
        className: styles.myTable,
        children: [_thead || (_thead = /*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: "Dashboard name"
            })
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
          children: filteredDashboards.map((dashName, i) => /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              children: dashName
            })
          }, `dashrow-${i}`))
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Modal.ButtonRow, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "secondary",
          onClick: onDismiss,
          fill: "outline",
          children: "Cancel"
        }), isUnsavedPrompt && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          variant: "destructive",
          onClick: discardAndClose,
          children: "Discard"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
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
// EXTERNAL MODULE: ./public/app/features/dashboard/state/DashboardModel.ts + 3 modules
var DashboardModel = __webpack_require__("./public/app/features/dashboard/state/DashboardModel.ts");
// EXTERNAL MODULE: ./public/app/core/store.ts
var store = __webpack_require__("./public/app/core/store.ts");
// EXTERNAL MODULE: ./public/app/features/panel/state/actions.ts
var panel_state_actions = __webpack_require__("./public/app/features/panel/state/actions.ts");
// EXTERNAL MODULE: ./public/app/features/panel/state/reducers.ts
var reducers = __webpack_require__("./public/app/features/panel/state/reducers.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/components/PanelEditor/state/reducers.ts
var state_reducers = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/state/reducers.ts");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/state/actions.ts





function initPanelEditor(sourcePanel, dashboard) {
  return async dispatch => {
    const panel = dashboard.initEditPanel(sourcePanel);
    await dispatch((0,panel_state_actions/* initPanelState */.JI)(panel));
    dispatch((0,state_reducers/* updateEditorInitState */.Hl)({
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
    dispatch((0,state_reducers/* setDiscardChanges */.yi)(true));
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

      panel.restoreModel(Object.assign({}, modifiedSaveModel, (0,lodash.pick)(panel, 'gridPos', 'id'))); // Loaded plugin is not included in the persisted properties
      // So is not handled by restoreModel

      const pluginChanged = ((_panel$plugin = panel.plugin) === null || _panel$plugin === void 0 ? void 0 : _panel$plugin.meta.id) !== ((_modifiedPanel$plugin = modifiedPanel.plugin) === null || _modifiedPanel$plugin === void 0 ? void 0 : _modifiedPanel$plugin.meta.id);
      panel.plugin = modifiedPanel.plugin;
      panel.configRev++;

      if (pluginChanged) {
        const cleanUpKey = panel.key;
        panel.generateNewKey();
        dispatch((0,reducers/* panelModelAndPluginReady */.bc)({
          key: panel.key,
          plugin: panel.plugin,
          cleanUpKey
        }));
      } // Resend last query result on source panel query runner
      // But do this after the panel edit editor exit process has completed


      setTimeout(() => {
        panel.getQueryRunner().useLastResultFrom(modifiedPanel.getQueryRunner());
      }, 20);
    }

    if (modifiedPanel.repeat) {
      // We skip any repeated library panels so we need to update them by calling processRepeats
      // But do this after the panel edit editor exit process has completed
      setTimeout(() => dashboard.processRepeats(), 20);
    }
  };
}
function skipPanelUpdate(modifiedPanel, panelToUpdate) {
  var _panelToUpdate$librar;

  // don't update library panels that aren't of the same type
  if (((_panelToUpdate$librar = panelToUpdate.libraryPanel) === null || _panelToUpdate$librar === void 0 ? void 0 : _panelToUpdate$librar.uid) !== modifiedPanel.libraryPanel.uid) {
    return true;
  } // don't update the modifiedPanel twice


  if (panelToUpdate.id && panelToUpdate.id === modifiedPanel.id) {
    return true;
  } // don't update library panels that are repeated


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
      sourcePanel.configRev++; // force check the configs

      if (panelTypeChanged) {
        // Loaded plugin is not included in the persisted properties so is not handled by restoreModel
        sourcePanel.plugin = panel.plugin;
        const cleanUpKey = sourcePanel.key;
        sourcePanel.generateNewKey();
        await dispatch((0,reducers/* panelModelAndPluginReady */.bc)({
          key: sourcePanel.key,
          plugin: panel.plugin,
          cleanUpKey
        }));
      } // Resend last query result on source panel query runner
      // But do this after the panel edit editor exit process has completed


      setTimeout(() => {
        sourcePanel.getQueryRunner().useLastResultFrom(panel.getQueryRunner());
        sourcePanel.render();
      }, 20);
    }

    dispatch((0,panel_state_actions/* cleanUpPanelState */.qj)(panel.key));
    dispatch((0,state_reducers/* closeEditor */.my)());
  };
}
function updatePanelEditorUIState(uiState) {
  return (dispatch, getStore) => {
    const nextState = Object.assign({}, getStore().panelEditor.ui, uiState);
    dispatch((0,state_reducers/* setPanelEditorUIState */.K9)(nextState));

    try {
      store/* default.setObject */.Z.setObject(state_reducers/* PANEL_EDITOR_UI_STATE_STORAGE_KEY */.jy, nextState);
    } catch (error) {
      console.error(error);
    }
  };
}
// EXTERNAL MODULE: ./public/app/features/dashboard/components/SaveDashboard/SaveDashboardButton.tsx
var SaveDashboardButton = __webpack_require__("./public/app/features/dashboard/components/SaveDashboard/SaveDashboardButton.tsx");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/SaveDashboard/UnsavedChangesModal.tsx
var _h;







const UnsavedChangesModal = _ref => {
  let {
    dashboard,
    onSaveSuccess,
    onDiscard,
    onDismiss
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Modal, {
    isOpen: true,
    title: "Unsaved changes",
    onDismiss: onDismiss,
    icon: "exclamation-triangle",
    className: emotion_css_esm.css`
        width: 500px;
      `,
    children: [_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
      children: "Do you want to save your changes?"
    })), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Modal.ButtonRow, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "secondary",
        onClick: onDismiss,
        fill: "outline",
        children: "Cancel"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        variant: "destructive",
        onClick: onDiscard,
        children: "Discard"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(SaveDashboardButton/* SaveDashboardButton */.i, {
        dashboard: dashboard,
        onSaveSuccess: onSaveSuccess
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/DashboardPrompt/DashboardPrompt.tsx














const DashboardPrompt = /*#__PURE__*/react.memo(_ref => {
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
    // This timeout delay is to wait for panels to load and migrate scheme before capturing the original state
    // This is to minimize unsaved changes warnings due to automatic schema migrations
    const timeoutId = setTimeout(() => {
      const originalPath = grafana_runtime_src.locationService.getLocation().pathname;
      const original = dashboard.getSaveModelClone();
      setState({
        originalPath,
        original
      });
    }, 1000);
    const savedEventUnsub = app_events/* appEvents.subscribe */.h.subscribe(types_events/* DashboardSavedEvent */.Jd, () => {
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
        event.preventDefault(); // No browser actually displays this message anymore.
        // But Chrome requires it to be defined else the popup won't show.

        event.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [dashboard, original]);

  const onHistoryBlock = location => {
    const panelInEdit = dashboard.panelInEdit;
    const search = new URLSearchParams(location.search); // Are we leaving panel edit & library panel?

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
    } // Are we still on the same dashboard?


    if (originalPath === location.pathname || !original) {
      // This is here due to timing reasons we want the exit panel editor state changes to happen before router update
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

  return /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Prompt */.NL, {
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
/**
 * For some dashboards and users changes should be ignored *
 */


function ignoreChanges(current, original) {
  if (!original) {
    return true;
  } // Ignore changes if the user has been signed out


  if (!context_srv/* contextSrv.isSignedIn */.Vt.isSignedIn) {
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

  if (!context_srv/* contextSrv.isEditor */.Vt.isEditor && !canSave) {
    return true;
  }

  return !canSave || fromScript || fromFile;
}
/**
 * Remove stuff that should not count in diff
 */

function cleanDashboardFromIgnoredChanges(dashData) {
  // need to new up the domain model class to get access to expand / collapse row logic
  const model = new DashboardModel/* DashboardModel */.f(dashData); // Expand all rows before making comparison. This is required because row expand / collapse
  // change order of panel array and panel positions.

  model.expandRows();
  const dash = model.getSaveModelClone(); // ignore time and refresh

  dash.time = 0;
  dash.refresh = 0;
  dash.schemaVersion = 0;
  dash.timezone = 0; // ignore iteration property

  delete dash.iteration;
  dash.panels = (0,lodash.filter)(dash.panels, panel => {
    if (panel.repeatPanelId) {
      return false;
    } // remove scopedVars


    panel.scopedVars = undefined; // ignore panel legend sort

    if (panel.legend) {
      delete panel.legend.sort;
      delete panel.legend.sortDesc;
    }

    return true;
  }); // ignore template variable values

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
// EXTERNAL MODULE: ./public/app/features/dashboard/components/DashboardSettings/index.ts + 36 modules
var DashboardSettings = __webpack_require__("./public/app/features/dashboard/components/DashboardSettings/index.ts");
// EXTERNAL MODULE: ./public/app/features/panel/state/selectors.ts
var selectors = __webpack_require__("./public/app/features/panel/state/selectors.ts");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/usePanelLatestData.ts



/**
 * Subscribes and returns latest panel data from PanelQueryRunner
 */
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
              return; // avoid updates if the schema has not changed for 10s
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
    /**
     * Adding separate options to dependencies array to avoid additional hook for comparing previous options with current.
     * Otherwise, passing different references to the same object might cause troubles.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panel, options.withFieldConfig, options.withTransforms]);
  return {
    data: latestData,
    error: latestData && latestData.error,
    isLoading: latestData ? latestData.state === grafana_data_src.LoadingState.Loading : true,
    hasSeries: latestData ? !!latestData.series : false
  };
};
// EXTERNAL MODULE: ./public/app/features/inspector/InspectDataTab.tsx + 2 modules
var InspectDataTab = __webpack_require__("./public/app/features/inspector/InspectDataTab.tsx");
// EXTERNAL MODULE: ./public/app/features/inspector/InspectErrorTab.tsx
var InspectErrorTab = __webpack_require__("./public/app/features/inspector/InspectErrorTab.tsx");
// EXTERNAL MODULE: ./public/app/features/inspector/InspectJSONTab.tsx
var InspectJSONTab = __webpack_require__("./public/app/features/inspector/InspectJSONTab.tsx");
;// CONCATENATED MODULE: ./public/app/features/inspector/InspectMetadataTab.tsx
var _div;



const InspectMetadataTab = _ref => {
  var _metadataDatasource$c;

  let {
    data,
    metadataDatasource
  } = _ref;

  if (!metadataDatasource || !((_metadataDatasource$c = metadataDatasource.components) !== null && _metadataDatasource$c !== void 0 && _metadataDatasource$c.MetadataInspector)) {
    return _div || (_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: "No Metadata Inspector"
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(metadataDatasource.components.MetadataInspector, {
    datasource: metadataDatasource,
    data: data.series
  });
};
// EXTERNAL MODULE: ./public/app/features/inspector/InspectStatsTab.tsx + 1 modules
var InspectStatsTab = __webpack_require__("./public/app/features/inspector/InspectStatsTab.tsx");
// EXTERNAL MODULE: ./public/app/features/inspector/QueryInspector.tsx
var QueryInspector = __webpack_require__("./public/app/features/inspector/QueryInspector.tsx");
// EXTERNAL MODULE: ./public/app/features/inspector/types.ts
var inspector_types = __webpack_require__("./public/app/features/inspector/types.ts");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/Inspector/InspectContent.tsx













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
  const [currentTab, setCurrentTab] = (0,react.useState)(defaultTab !== null && defaultTab !== void 0 ? defaultTab : inspector_types/* InspectTab.Data */.q.Data);

  if (!plugin) {
    return null;
  }

  const error = data === null || data === void 0 ? void 0 : data.error; // Validate that the active tab is actually valid and allowed

  let activeTab = currentTab;

  if (!tabs.find(item => item.value === currentTab)) {
    activeTab = inspector_types/* InspectTab.JSON */.q.JSON;
  }

  const title = (0,grafana_runtime_src.getTemplateSrv)().replace(panel.title, panel.scopedVars, 'text');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Drawer, {
    title: `Inspect: ${title || 'Panel'}`,
    subtitle: data && formatStats(data),
    width: "50%",
    onClose: onClose,
    expandable: true,
    scrollableContent: true,
    tabs: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.TabsBar, {
      children: tabs.map((t, index) => {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tab, {
          label: t.label,
          active: t.value === activeTab,
          onChangeTab: () => setCurrentTab(t.value || inspector_types/* InspectTab.Data */.q.Data)
        }, `${t.value}-${index}`);
      })
    }),
    children: [activeTab === inspector_types/* InspectTab.Data */.q.Data && /*#__PURE__*/(0,jsx_runtime.jsx)(InspectDataTab/* InspectDataTab */.E, {
      panel: panel,
      data: data && data.series,
      isLoading: isDataLoading,
      options: dataOptions,
      onOptionsChange: onDataOptionsChange,
      timeZone: dashboard.timezone
    }), data && activeTab === inspector_types/* InspectTab.Meta */.q.Meta && /*#__PURE__*/(0,jsx_runtime.jsx)(InspectMetadataTab, {
      data: data,
      metadataDatasource: metadataDatasource
    }), activeTab === inspector_types/* InspectTab.JSON */.q.JSON && /*#__PURE__*/(0,jsx_runtime.jsx)(InspectJSONTab/* InspectJSONTab */.W, {
      panel: panel,
      dashboard: dashboard,
      data: data,
      onClose: onClose
    }), activeTab === inspector_types/* InspectTab.Error */.q.Error && /*#__PURE__*/(0,jsx_runtime.jsx)(InspectErrorTab/* InspectErrorTab */.l, {
      error: error
    }), data && activeTab === inspector_types/* InspectTab.Stats */.q.Stats && /*#__PURE__*/(0,jsx_runtime.jsx)(InspectStatsTab/* InspectStatsTab */.f, {
      data: data,
      timeZone: dashboard.getTimezone()
    }), data && activeTab === inspector_types/* InspectTab.Query */.q.Query && /*#__PURE__*/(0,jsx_runtime.jsx)(QueryInspector/* QueryInspector */.D, {
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
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/lib/useAsync.js
var lib_useAsync = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/lib/useAsync.js");
// EXTERNAL MODULE: ./public/app/features/dashboard/components/PanelEditor/utils.ts
var PanelEditor_utils = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/utils.ts");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/Inspector/hooks.ts






/**
 * Given PanelData return first data source supporting metadata inspector
 */
const useDatasourceMetadata = data => {
  const state = (0,lib_useAsync/* default */.Z)(async () => {
    var _data$request;

    const targets = (data === null || data === void 0 ? void 0 : (_data$request = data.request) === null || _data$request === void 0 ? void 0 : _data$request.targets) || [];

    if (data && data.series && targets.length) {
      for (const frame of data.series) {
        if (frame.meta && frame.meta.custom) {
          var _dataSource$component;

          // get data source from first query
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
/**
 * Configures tabs for PanelInspector
 */

const useInspectTabs = (panel, dashboard, plugin, error, metaDs) => {
  return (0,react.useMemo)(() => {
    const tabs = [];

    if ((0,PanelEditor_utils/* supportsDataQuery */.sY)(plugin)) {
      tabs.push({
        label: 'Data',
        value: inspector_types/* InspectTab.Data */.q.Data
      });
      tabs.push({
        label: 'Stats',
        value: inspector_types/* InspectTab.Stats */.q.Stats
      });
    }

    if (metaDs) {
      tabs.push({
        label: 'Meta Data',
        value: inspector_types/* InspectTab.Meta */.q.Meta
      });
    }

    tabs.push({
      label: 'JSON',
      value: inspector_types/* InspectTab.JSON */.q.JSON
    });

    if (error && error.message) {
      tabs.push({
        label: 'Error',
        value: inspector_types/* InspectTab.Error */.q.Error
      });
    } // This is a quick internal hack to allow custom actions in inspect
    // For 8.1, something like this should be exposed through grafana/runtime


    const supplier = window.grafanaPanelInspectActionSupplier;

    if (supplier && supplier.getActions(panel)) {
      tabs.push({
        label: 'Actions',
        value: inspector_types/* InspectTab.Actions */.q.Actions
      });
    }

    if (dashboard.meta.canEdit && (0,PanelEditor_utils/* supportsDataQuery */.sY)(plugin)) {
      tabs.push({
        label: 'Query',
        value: inspector_types/* InspectTab.Query */.q.Query
      });
    }

    return tabs;
  }, [panel, plugin, metaDs, dashboard, error]);
};
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/Inspector/PanelInspector.tsx










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
  const location = (0,react_router/* useLocation */.TH)();
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

  return /*#__PURE__*/(0,jsx_runtime.jsx)(InspectContent, {
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
  const panelState = (0,selectors/* getPanelStateForModel */.i)(state, props.panel);

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
// EXTERNAL MODULE: ./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js
var index_esm = __webpack_require__("./.yarn/__virtual__/react-virtualized-auto-sizer-virtual-b5ab366cb0/0/cache/react-virtualized-auto-sizer-npm-1.0.6-50869b8392-81270e9d32.zip/node_modules/react-virtualized-auto-sizer/dist/index.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js
var Subscription = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/Subscription.js");
// EXTERNAL MODULE: ./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js
var prop_types = __webpack_require__("./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./.yarn/cache/react-style-proptype-npm-3.2.2-d7241ef02d-f0e646e148.zip/node_modules/react-style-proptype/src/index.js
var react_style_proptype_src = __webpack_require__("./.yarn/cache/react-style-proptype-npm-3.2.2-d7241ef02d-f0e646e148.zip/node_modules/react-style-proptype/src/index.js");
var src_default = /*#__PURE__*/__webpack_require__.n(react_style_proptype_src);
// EXTERNAL MODULE: ./.yarn/cache/react-lifecycles-compat-npm-3.0.4-d5e285a39e-a904b0fc0a.zip/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__("./.yarn/cache/react-lifecycles-compat-npm-3.0.4-d5e285a39e-a904b0fc0a.zip/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
;// CONCATENATED MODULE: ./.yarn/__virtual__/react-split-pane-virtual-057ebfddec/0/cache/react-split-pane-npm-0.1.92-93dbf51dff-4890f17263.zip/node_modules/react-split-pane/dist/index.esm.js





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

var Pane = /*#__PURE__*/function (_React$PureComponent) {
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
      return /*#__PURE__*/react.createElement("div", {
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

var Resizer = /*#__PURE__*/function (_React$Component) {
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
      return /*#__PURE__*/react.createElement("span", {
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
      window.getSelection().removeAllRanges(); // eslint-disable-next-line no-empty
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

var SplitPane = /*#__PURE__*/function (_React$Component) {
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
    _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this)); // order of setting panel sizes.
    // 1. size
    // 2. getDefaultSize(defaultSize, minsize, maxSize)

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
      // these are props that are needed in static functions. ie: gDSFP
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
              } // Integer division
              // eslint-disable-next-line no-bitwise


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
    } // we have to check values since gDSFP is called on every render and more in StrictMode

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
      return /*#__PURE__*/react.createElement("div", {
        className: classes.join(' '),
        ref: function ref(node) {
          _this2.splitPane = node;
        },
        style: style
      }, /*#__PURE__*/react.createElement(Pane, {
        className: pane1Classes,
        key: "pane1",
        eleRef: function eleRef(node) {
          _this2.pane1 = node;
        },
        size: pane1Size,
        split: split,
        style: pane1Style
      }, notNullChildren[0]), /*#__PURE__*/react.createElement(Resizer, {
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
      }), /*#__PURE__*/react.createElement(Pane, {
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
  // eslint-disable-next-line react/no-unused-prop-types
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
(0,react_lifecycles_compat_es/* polyfill */.O)(SplitPane);

/* harmony default export */ const dist_index_esm = (SplitPane);


// EXTERNAL MODULE: ./public/app/core/config.ts
var config = __webpack_require__("./public/app/core/config.ts");
;// CONCATENATED MODULE: ./public/app/core/components/SplitPaneWrapper/SplitPaneWrapper.tsx
function SplitPaneWrapper_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SplitPaneWrapper_Pane;

(function (Pane) {
  Pane[Pane["Right"] = 0] = "Right";
  Pane[Pane["Top"] = 1] = "Top";
})(SplitPaneWrapper_Pane || (SplitPaneWrapper_Pane = {}));

class SplitPaneWrapper extends react.PureComponent {
  constructor() {
    super(...arguments);

    SplitPaneWrapper_defineProperty(this, "rafToken", /*#__PURE__*/(0,react.createRef)());

    SplitPaneWrapper_defineProperty(this, "updateSplitPaneSize", () => {
      if (this.rafToken.current !== undefined) {
        window.cancelAnimationFrame(this.rafToken.current);
      }

      this.rafToken.current = window.requestAnimationFrame(() => {
        this.forceUpdate();
      });
    });

    SplitPaneWrapper_defineProperty(this, "onDragFinished", (pane, size) => {
      document.body.style.cursor = 'auto'; // When the drag handle is just clicked size is undefined

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
    const styles = SplitPaneWrapper_getStyles(config/* config.theme */.vc.theme);
    const topPaneSize = uiState.topPaneSize >= 1 ? uiState.topPaneSize : uiState.topPaneSize * window.innerHeight;
    /*
      Guesstimate the height of the browser window minus
      panel toolbar and editor toolbar (~120px). This is to prevent resizing
      the preview window beyond the browser window.
     */

    if (Array.isArray(leftPaneComponents)) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(dist_index_esm, {
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
    } = this.props; // Limit options pane width to 90% of screen.

    const styles = SplitPaneWrapper_getStyles(config/* config.theme */.vc.theme); // Need to handle when width is relative. ie a percentage of the viewport

    const rightPaneSize = uiState.rightPaneSize <= 1 ? uiState.rightPaneSize * window.innerWidth : uiState.rightPaneSize;

    if (!rightPaneVisible) {
      return this.renderHorizontalSplit();
    }

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(dist_index_esm, {
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
// EXTERNAL MODULE: ./public/app/core/core.ts
var core = __webpack_require__("./public/app/core/core.ts");
// EXTERNAL MODULE: ./public/app/features/variables/adapters.ts
var adapters = __webpack_require__("./public/app/features/variables/adapters.ts");
// EXTERNAL MODULE: ./public/app/features/variables/types.ts
var variables_types = __webpack_require__("./public/app/features/variables/types.ts");
;// CONCATENATED MODULE: ./public/app/features/variables/pickers/PickerRenderer.tsx
var PickerRenderer_div;








const PickerRenderer = props => {
  const PickerToRender = (0,react.useMemo)(() => adapters/* variableAdapters.get */.z.get(props.variable.type).picker, [props.variable]);

  if (!props.variable) {
    return PickerRenderer_div || (PickerRenderer_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: "Couldn't load variable"
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "gf-form",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PickerLabel, {
      variable: props.variable
    }), props.variable.hide !== variables_types/* VariableHide.hideVariable */.bU.hideVariable && PickerToRender && /*#__PURE__*/(0,jsx_runtime.jsx)(PickerToRender, {
      variable: props.variable
    })]
  });
};

function PickerLabel(_ref) {
  let {
    variable
  } = _ref;
  const labelOrName = (0,react.useMemo)(() => variable.label || variable.name, [variable]);

  if (variable.hide !== variables_types/* VariableHide.dontHide */.bU.dontHide) {
    return null;
  }

  const elementId = `var-${variable.id}`;

  if (variable.description) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
      content: variable.description,
      placement: 'bottom',
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
        className: "gf-form-label gf-form-label--variable",
        "data-testid": src/* selectors.pages.Dashboard.SubMenu.submenuItemLabels */.wl.pages.Dashboard.SubMenu.submenuItemLabels(labelOrName),
        htmlFor: elementId,
        children: labelOrName
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
    className: "gf-form-label gf-form-label--variable",
    "data-testid": src/* selectors.pages.Dashboard.SubMenu.submenuItemLabels */.wl.pages.Dashboard.SubMenu.submenuItemLabels(labelOrName),
    htmlFor: elementId,
    children: labelOrName
  });
}
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/SubMenu/SubMenuItems.tsx






const SubMenuItems = _ref => {
  let {
    variables
  } = _ref;
  const [visibleVariables, setVisibleVariables] = (0,react.useState)([]);
  (0,react.useEffect)(() => {
    setVisibleVariables(variables.filter(state => state.hide !== variables_types/* VariableHide.hideVariable */.bU.hideVariable));
  }, [variables]);

  if (visibleVariables.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: visibleVariables.map(variable => {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "submenu-item gf-form-inline",
        "data-testid": src/* selectors.pages.Dashboard.SubMenu.submenuItem */.wl.pages.Dashboard.SubMenu.submenuItem,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(PickerRenderer, {
          variable: variable
        })
      }, variable.id);
    })
  });
};
// EXTERNAL MODULE: ./public/app/features/profile/state/reducers.ts
var profile_state_reducers = __webpack_require__("./public/app/features/profile/state/reducers.ts");
// EXTERNAL MODULE: ./public/app/features/library-panels/components/UnlinkModal/UnlinkModal.tsx
var UnlinkModal = __webpack_require__("./public/app/features/library-panels/components/UnlinkModal/UnlinkModal.tsx");
// EXTERNAL MODULE: ./public/app/features/library-panels/guard.ts
var guard = __webpack_require__("./public/app/features/library-panels/guard.ts");
// EXTERNAL MODULE: ./public/app/features/library-panels/utils.ts
var library_panels_utils = __webpack_require__("./public/app/features/library-panels/utils.ts");
// EXTERNAL MODULE: ./public/app/features/variables/state/selectors.ts
var state_selectors = __webpack_require__("./public/app/features/variables/state/selectors.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/dashgrid/DashboardPanel.tsx + 14 modules
var DashboardPanel = __webpack_require__("./public/app/features/dashboard/dashgrid/DashboardPanel.tsx");
// EXTERNAL MODULE: ./public/app/features/dashboard/components/DashNav/DashNavTimeControls.tsx
var DashNavTimeControls = __webpack_require__("./public/app/features/dashboard/components/DashNav/DashNavTimeControls.tsx");
// EXTERNAL MODULE: ./public/app/features/dashboard/components/SaveDashboard/SaveDashboardDrawer.tsx + 6 modules
var SaveDashboardDrawer = __webpack_require__("./public/app/features/dashboard/components/SaveDashboard/SaveDashboardDrawer.tsx");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/state/utils.ts

function saveSectionOpenState(id, isOpen) {
  store/* default.set */.Z.set(`panel-edit-section-${id}`, isOpen ? 'true' : 'false');
}
function getSectionOpenState(id, defaultValue) {
  return store/* default.getBool */.Z.getBool(`panel-edit-section-${id}`, defaultValue);
}
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/AngularPanelOptions.tsx
function AngularPanelOptions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const AngularPanelOptions_mapStateToProps = (state, props) => {
  var _getPanelStateForMode;

  return {
    angularPanelComponent: (_getPanelStateForMode = (0,selectors/* getPanelStateForModel */.i)(state, props.panel)) === null || _getPanelStateForMode === void 0 ? void 0 : _getPanelStateForMode.angularComponent
  };
};

const mapDispatchToProps = {
  changePanelPlugin: panel_state_actions/* changePanelPlugin */.Kc
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

    const scope = angularPanelComponent.getScope(); // When full page reloading in edit mode the angular panel has on fully compiled and instantiated yet

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
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: elem => this.element = elem
    });
  }

}
const AngularPanelOptions = (0,es.connect)(AngularPanelOptions_mapStateToProps, mapDispatchToProps)(AngularPanelOptionsUnconnected);
// EXTERNAL MODULE: ./public/app/features/dashboard/components/PanelEditor/OptionsPaneCategory.tsx
var OptionsPaneCategory = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/OptionsPaneCategory.tsx");
// EXTERNAL MODULE: ./public/app/features/panel/panellinks/link_srv.ts
var link_srv = __webpack_require__("./public/app/features/panel/panellinks/link_srv.ts");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-highlight-words-virtual-d2265e757c/0/cache/react-highlight-words-npm-0.17.0-880b4a18ed-41b3d0e451.zip/node_modules/react-highlight-words/dist/main.js
var main = __webpack_require__("./.yarn/__virtual__/react-highlight-words-virtual-d2265e757c/0/cache/react-highlight-words-npm-0.17.0-880b4a18ed-41b3d0e451.zip/node_modules/react-highlight-words/dist/main.js");
var main_default = /*#__PURE__*/__webpack_require__.n(main);
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/DynamicConfigValueEditor.tsx

 // @ts-ignore







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
  /* eslint-disable react/display-name */

  const renderLabel = function () {
    let includeDescription = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    let includeCounter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return function () {
      let isExpanded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
        justify: "space-between",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Label, {
          category: labelCategory,
          description: includeDescription ? item.description : undefined,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)((main_default()), {
            textToHighlight: item.name,
            searchWords: [searchQuery],
            highlightClassName: 'search-fragment-highlight'
          }), !isExpanded && includeCounter && item.getItemsCount && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Counter, {
            value: item.getItemsCount(property.value)
          })]
        }), !isSystemOverride && (_div || (_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
            name: "times",
            onClick: onRemove
          })
        })))]
      });
    };
  };
  /* eslint-enable react/display-name */


  if (isCollapsible) {
    editor = /*#__PURE__*/(0,jsx_runtime.jsx)(OptionsPaneCategory/* OptionsPaneCategory */.u, {
      id: item.name,
      renderTitle: renderLabel(false, true),
      className: emotion_css_esm.css`
          padding-left: 0;
          padding-right: 0;
        `,
      isNested: true,
      isOpenDefault: property.value !== undefined,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(item.override, {
        value: property.value,
        onChange: value => {
          onChange(value);
        },
        item: item,
        context: context
      })
    });
  } else {
    editor = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
        label: renderLabel()(),
        description: item.description,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(item.override, {
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

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
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
// EXTERNAL MODULE: ./public/app/features/dashboard/components/PanelEditor/OptionsPaneCategoryDescriptor.tsx
var OptionsPaneCategoryDescriptor = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/OptionsPaneCategoryDescriptor.tsx");
// EXTERNAL MODULE: ./public/app/features/dashboard/components/PanelEditor/OptionsPaneItemDescriptor.tsx + 1 modules
var OptionsPaneItemDescriptor = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/OptionsPaneItemDescriptor.tsx");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/OverrideCategoryTitle.tsx
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
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      justify: "space-between",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: overrideName
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
        name: "trash-alt",
        onClick: onOverrideRemove,
        title: "Remove override"
      })]
    }), !isExpanded && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.overrideDetails,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.options,
        title: matcherOptions,
        children: [matcherOptions, " ", OverrideCategoryTitle_Icon || (OverrideCategoryTitle_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
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
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/getFieldOverrideElements.tsx











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
    getSuggestions: scope => (0,link_srv/* getDataLinksVariableSuggestions */.PW)(data, scope),
    isOverride: true
  };
  /**
   * Main loop through all override rules
   */

  for (let idx = 0; idx < currentFieldConfig.overrides.length; idx++) {
    const override = currentFieldConfig.overrides[idx];
    const overrideName = `Override ${idx + 1}`;
    const matcherUi = grafana_ui_src.fieldMatchersUI.get(override.matcher.id);
    const configPropertiesOptions = getOverrideProperties(registry);
    const isSystemOverride = (0,grafana_data_src.isSystemOverride)(override); // A way to force open new override categories

    const forceOpen = override.properties.length === 0 ? 1 : 0;
    const category = new OptionsPaneCategoryDescriptor/* OptionsPaneCategoryDescriptor */.j({
      title: overrideName,
      id: overrideName,
      forceOpen,
      renderTitle: function renderOverrideTitle(isExpanded) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(OverrideCategoryTitle, {
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
    /**
     * Add override matcher UI element
     */


    category.addItem(new OptionsPaneItemDescriptor/* OptionsPaneItemDescriptor */.a({
      title: matcherUi.name,
      render: function renderMatcherUI() {
        var _props$data$series2, _props$data2;

        return /*#__PURE__*/(0,jsx_runtime.jsx)(matcherUi.component, {
          id: `${matcherUi.matcher.id}-${idx}`,
          matcher: matcherUi.matcher,
          data: (_props$data$series2 = (_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.series) !== null && _props$data$series2 !== void 0 ? _props$data$series2 : [],
          options: override.matcher.options,
          onChange: onMatcherConfigChange
        });
      }
    }));
    /**
     * Loop through all override properties
     */

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
      /**
       * Add override property item
       */


      category.addItem(new OptionsPaneItemDescriptor/* OptionsPaneItemDescriptor */.a({
        title: registryItemForProperty.name,
        skipField: true,
        render: function renderPropertyEditor() {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(DynamicConfigValueEditor, {
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
    /**
     * Add button that adds new overrides
     */


    if (!isSystemOverride && override.matcher.options) {
      category.addItem(new OptionsPaneItemDescriptor/* OptionsPaneItemDescriptor */.a({
        title: '----------',
        skipField: true,
        render: function renderAddPropertyButton() {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ValuePicker, {
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

  categories.push(new OptionsPaneCategoryDescriptor/* OptionsPaneCategoryDescriptor */.j({
    title: 'add button',
    id: 'add button',
    customRender: function renderAddButton() {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(AddOverrideButtonContainer, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ValuePicker, {
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
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
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
;// CONCATENATED MODULE: ./public/app/features/library-panels/components/LibraryPanelInfo/LibraryPanelInfo.tsx






const LibraryPanelInformation = _ref => {
  var _formatDate;

  let {
    panel,
    formatDate
  } = _ref;
  const styles = (0,grafana_ui_src.useStyles)(LibraryPanelInfo_getStyles);

  if (!(0,guard/* isPanelModelLibraryPanel */.V)(panel)) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.info,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.libraryPanelInfo,
      children: [`Used on ${panel.libraryPanel.meta.connectedDashboards} `, panel.libraryPanel.meta.connectedDashboards === 1 ? 'dashboard' : 'dashboards']
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.libraryPanelInfo,
      children: ["Last edited on ", (_formatDate = formatDate === null || formatDate === void 0 ? void 0 : formatDate(panel.libraryPanel.meta.updated, 'L')) !== null && _formatDate !== void 0 ? _formatDate : panel.libraryPanel.meta.updated, " by", panel.libraryPanel.meta.updatedBy.avatarUrl && /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
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
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/getLibraryPanelOptions.tsx







function getLibraryPanelOptionsCategory(props) {
  const {
    panel,
    onPanelConfigChange,
    dashboard
  } = props;
  const descriptor = new OptionsPaneCategoryDescriptor/* OptionsPaneCategoryDescriptor */.j({
    title: 'Library panel options',
    id: 'Library panel options',
    isOpenDefault: true
  });

  if ((0,guard/* isPanelModelLibraryPanel */.V)(panel)) {
    descriptor.addItem(new OptionsPaneItemDescriptor/* OptionsPaneItemDescriptor */.a({
      title: 'Name',
      value: panel.libraryPanel.name,
      popularRank: 1,
      render: function renderName() {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          id: "LibraryPanelFrameName",
          defaultValue: panel.libraryPanel.name,
          onBlur: e => onPanelConfigChange('libraryPanel', Object.assign({}, panel.libraryPanel, {
            name: e.currentTarget.value
          }))
        });
      }
    })).addItem(new OptionsPaneItemDescriptor/* OptionsPaneItemDescriptor */.a({
      title: 'Information',
      render: function renderLibraryPanelInformation() {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(LibraryPanelInformation, {
          panel: panel,
          formatDate: dashboard.formatDate
        });
      }
    }));
  }

  return descriptor;
}
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/RepeatRowSelect/RepeatRowSelect.tsx





const RepeatRowSelect = _ref => {
  let {
    repeat,
    onChange,
    id
  } = _ref;
  const variables = (0,es.useSelector)(state => {
    return (0,state_selectors/* getVariablesByKey */.gt)((0,state_selectors/* getLastKey */.S_)(state), state);
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
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
    inputId: id,
    value: repeat,
    onChange: onSelectChange,
    options: variableOptions
  });
};
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/getPanelFrameOptions.tsx







function getPanelFrameCategory(props) {
  var _panel$links;

  const {
    panel,
    onPanelConfigChange
  } = props;
  const descriptor = new OptionsPaneCategoryDescriptor/* OptionsPaneCategoryDescriptor */.j({
    title: 'Panel options',
    id: 'Panel options',
    isOpenDefault: true
  });
  return descriptor.addItem(new OptionsPaneItemDescriptor/* OptionsPaneItemDescriptor */.a({
    title: 'Title',
    value: panel.title,
    popularRank: 1,
    render: function renderTitle() {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
        id: "PanelFrameTitle",
        defaultValue: panel.title,
        onBlur: e => onPanelConfigChange('title', e.currentTarget.value)
      });
    }
  })).addItem(new OptionsPaneItemDescriptor/* OptionsPaneItemDescriptor */.a({
    title: 'Description',
    description: panel.description,
    value: panel.description,
    render: function renderDescription() {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.TextArea, {
        id: "description-text-area",
        defaultValue: panel.description,
        onBlur: e => onPanelConfigChange('description', e.currentTarget.value)
      });
    }
  })).addItem(new OptionsPaneItemDescriptor/* OptionsPaneItemDescriptor */.a({
    title: 'Transparent background',
    render: function renderTransparent() {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Switch, {
        value: panel.transparent,
        id: "transparent-background",
        onChange: e => onPanelConfigChange('transparent', e.currentTarget.checked)
      });
    }
  })).addCategory(new OptionsPaneCategoryDescriptor/* OptionsPaneCategoryDescriptor */.j({
    title: 'Panel links',
    id: 'Panel links',
    isOpenDefault: false,
    itemsCount: (_panel$links = panel.links) === null || _panel$links === void 0 ? void 0 : _panel$links.length
  }).addItem(new OptionsPaneItemDescriptor/* OptionsPaneItemDescriptor */.a({
    title: 'Panel links',
    render: function renderLinks() {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.DataLinksInlineEditor, {
        links: panel.links,
        onChange: links => onPanelConfigChange('links', links),
        getSuggestions: link_srv/* getPanelLinksVariableSuggestions */.PR,
        data: []
      });
    }
  }))).addCategory(new OptionsPaneCategoryDescriptor/* OptionsPaneCategoryDescriptor */.j({
    title: 'Repeat options',
    id: 'Repeat options',
    isOpenDefault: false
  }).addItem(new OptionsPaneItemDescriptor/* OptionsPaneItemDescriptor */.a({
    title: 'Repeat by variable',
    description: 'Repeat this panel for each value in the selected variable. This is not visible while in edit mode. You need to go back to dashboard and then update the variable or reload the dashboard.',
    render: function renderRepeatOptions() {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(RepeatRowSelect, {
        id: "repeat-by-variable-select",
        repeat: panel.repeat,
        onChange: value => {
          onPanelConfigChange('repeat', value);
        }
      });
    }
  })).addItem(new OptionsPaneItemDescriptor/* OptionsPaneItemDescriptor */.a({
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
      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
        options: directionOptions,
        value: panel.repeatDirection || 'h',
        onChange: value => onPanelConfigChange('repeatDirection', value)
      });
    }
  })).addItem(new OptionsPaneItemDescriptor/* OptionsPaneItemDescriptor */.a({
    title: 'Max per row',
    showIf: () => Boolean(panel.repeat && panel.repeatDirection === 'h'),
    render: function renderOption() {
      const maxPerRowOptions = [2, 3, 4, 6, 8, 12].map(value => ({
        label: value.toString(),
        value
      }));
      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Select, {
        options: maxPerRowOptions,
        value: panel.maxPerRow,
        onChange: value => onPanelConfigChange('maxPerRow', value.value)
      });
    }
  })));
}
// EXTERNAL MODULE: ./public/app/features/dashboard/components/PanelEditor/getVisualizationOptions.tsx + 1 modules
var getVisualizationOptions = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/getVisualizationOptions.tsx");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/state/OptionSearchEngine.ts

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
        category = categories[hit.parent.props.title] = new OptionsPaneCategoryDescriptor/* OptionsPaneCategoryDescriptor */.j(hit.parent.props); // Add matcher item as that should always be shown

        category.addItem(hit.parent.items[0]);
      } // Prevent adding matcher twice since it's automatically added for every override


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
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/state/getRecentOptions.ts
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
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/OptionsPaneOptions.tsx














const OptionsPaneOptions = props => {
  const {
    plugin,
    dashboard,
    panel
  } = props;
  const [searchQuery, setSearchQuery] = (0,react.useState)('');
  const [listMode, setListMode] = (0,react.useState)(OptionFilter.All);
  const styles = (0,grafana_ui_src.useStyles2)(OptionsPaneOptions_getStyles);
  const [panelFrameOptions, vizOptions, libraryPanelOptions] = (0,react.useMemo)(() => [getPanelFrameCategory(props), (0,getVisualizationOptions/* getVisualizationOptions */.AL)(props), getLibraryPanelOptionsCategory(props)], // eslint-disable-next-line react-hooks/exhaustive-deps
  [panel.configRev, props.data, props.instanceState, searchQuery]);
  const justOverrides = (0,react.useMemo)(() => getFieldOverrideCategories(props, searchQuery), // eslint-disable-next-line react-hooks/exhaustive-deps
  [panel.configRev, props.data, props.instanceState, searchQuery]);
  const mainBoxElements = [];
  const isSearching = searchQuery.length > 0;
  const optionRadioFilters = (0,react.useMemo)(getOptionRadioFilters, []);
  const allOptions = (0,guard/* isPanelModelLibraryPanel */.V)(panel) ? [libraryPanelOptions, panelFrameOptions, ...vizOptions] : [panelFrameOptions, ...vizOptions];

  if (isSearching) {
    mainBoxElements.push(renderSearchHits(allOptions, justOverrides, searchQuery)); // If searching for angular panel, then we need to add notice that results are limited

    if (props.plugin.angularPanelCtrl) {
      mainBoxElements.push( /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.searchNotice,
        children: "This is an old visualization type that does not support searching all options."
      }, "Search notice"));
    }
  } else {
    switch (listMode) {
      case OptionFilter.All:
        if ((0,guard/* isPanelModelLibraryPanel */.V)(panel)) {
          // Library Panel options first
          mainBoxElements.push(libraryPanelOptions.render());
        } // Panel frame options second


        mainBoxElements.push(panelFrameOptions.render()); // If angular add those options next

        if (props.plugin.angularPanelCtrl) {
          mainBoxElements.push( /*#__PURE__*/(0,jsx_runtime.jsx)(AngularPanelOptions, {
            plugin: plugin,
            dashboard: dashboard,
            panel: panel
          }, "AngularOptions"));
        } // Then add all panel and field defaults


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
        mainBoxElements.push( /*#__PURE__*/(0,jsx_runtime.jsx)(OptionsPaneCategory/* OptionsPaneCategory */.u, {
          id: "Recent options",
          title: "Recent options",
          forceOpen: 1,
          children: getRecentOptions(allOptions).map(item => item.render())
        }, "Recent options"));
        break;
    }
  } // only show radio buttons if we are searching or if the plugin has field config


  const showSearchRadioButtons = !isSearching && !plugin.fieldConfigRegistry.isEmpty();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.formBox,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.formRow,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
          width: 0,
          value: searchQuery,
          onChange: setSearchQuery,
          placeholder: 'Search options'
        })
      }), showSearchRadioButtons && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.formRow,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
          options: optionRadioFilters,
          value: listMode,
          fullWidth: true,
          onChange: setListMode
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.scrollWrapper,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CustomScrollbar, {
        autoHeightMin: "100%",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
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
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(OptionsPaneCategory/* OptionsPaneCategory */.u, {
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
// EXTERNAL MODULE: ./public/app/features/panel/components/PanelPluginError.tsx
var PanelPluginError = __webpack_require__("./public/app/features/panel/components/PanelPluginError.tsx");
;// CONCATENATED MODULE: ./public/app/features/dashboard/state/selectors.ts

const getPanelPluginWithFallback = panelType => state => {
  const plugin = state.plugins.panels[panelType];
  return plugin || (0,PanelPluginError/* getPanelPluginNotFound */.X)(`Panel plugin not found (${panelType})`, true);
};
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/VisualizationButton.tsx









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
    dispatch((0,state_reducers/* toggleVizPicker */.g_)(!isVizPickerOpen));
  };

  const onToggleOptionsPane = () => {
    dispatch((0,state_reducers/* setPanelEditorUIState */.K9)({
      isPanelOptionsVisible: !isPanelOptionsVisible
    }));
  };

  if (!plugin) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.wrapper,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.ButtonGroup, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
        className: styles.vizButton,
        tooltip: "Click to change visualization",
        imgSrc: plugin.meta.info.logos.small,
        isOpen: isVizPickerOpen,
        onClick: onToggleOpen,
        "aria-label": src/* selectors.components.PanelEditor.toggleVizPicker */.wl.components.PanelEditor.toggleVizPicker,
        fullWidth: true,
        children: plugin.meta.name
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
        tooltip: isPanelOptionsVisible ? 'Close options pane' : 'Show options pane',
        icon: isPanelOptionsVisible ? 'angle-right' : 'angle-left',
        onClick: onToggleOptionsPane,
        "aria-label": src/* selectors.components.PanelEditor.toggleVizOptions */.wl.components.PanelEditor.toggleVizOptions
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
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js
var useLocalStorage = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/components/Forms/Field.tsx
var Field = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
// EXTERNAL MODULE: ./public/app/core/constants.ts
var constants = __webpack_require__("./public/app/core/constants.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/services/DashboardSrv.ts
var DashboardSrv = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
// EXTERNAL MODULE: ./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx
var PanelTypeFilter = __webpack_require__("./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx");
// EXTERNAL MODULE: ./public/app/features/library-panels/components/AddLibraryPanelModal/AddLibraryPanelModal.tsx
var AddLibraryPanelModal = __webpack_require__("./public/app/features/library-panels/components/AddLibraryPanelModal/AddLibraryPanelModal.tsx");
;// CONCATENATED MODULE: ./public/app/features/library-panels/components/ChangeLibraryPanelModal/ChangeLibraryPanelModal.tsx




const ChangeLibraryPanelModal = _ref => {
  let {
    onConfirm,
    onDismiss,
    panel
  } = _ref;
  const isLibraryPanel = (0,guard/* isPanelModelLibraryPanel */.V)(panel);
  const title = `${isLibraryPanel ? 'Changing' : 'Replace with'} library panel`;
  const body = `${isLibraryPanel ? 'Changing' : 'Replacing with a'} library panel will remove any changes since last save.`;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ConfirmModal, {
    onConfirm: onConfirm,
    onDismiss: onDismiss,
    confirmText: isLibraryPanel ? 'Change' : 'Replace',
    title: title,
    body: body,
    dismissText: "Cancel",
    isOpen: true
  });
};
// EXTERNAL MODULE: ./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx
var LibraryPanelsView = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx");
;// CONCATENATED MODULE: ./public/app/features/library-panels/components/PanelLibraryOptionsGroup/PanelLibraryOptionsGroup.tsx












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
  const dashboard = (0,DashboardSrv/* getDashboardSrv */.h4)().getCurrent();
  const dispatch = (0,es.useDispatch)();

  const useLibraryPanel = async () => {
    if (!changeToPanel) {
      return;
    }

    setChangeToPanel(undefined);
    dispatch((0,panel_state_actions/* changeToLibraryPanel */.ih)(panel, changeToPanel));
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

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
    spacing: "md",
    children: [!panel.libraryPanel && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.VerticalGroup, {
      align: "center",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
        icon: "plus",
        onClick: onAddToPanelLibrary,
        variant: "secondary",
        fullWidth: true,
        children: "Create new library panel"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(PanelTypeFilter/* PanelTypeFilter */.j, {
      onChange: onPanelFilterChange
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.libraryPanelsView,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(LibraryPanelsView/* LibraryPanelsView */.u, {
        currentPanelId: (_panel$libraryPanel = panel.libraryPanel) === null || _panel$libraryPanel === void 0 ? void 0 : _panel$libraryPanel.uid,
        searchString: searchQuery,
        panelFilter: panelFilter,
        onClickCard: onChangeLibraryPanel,
        showSecondaryActions: true
      })
    }), showingAddPanelModal && /*#__PURE__*/(0,jsx_runtime.jsx)(AddLibraryPanelModal/* AddLibraryPanelModal */.c, {
      panel: panel,
      onDismiss: () => setShowingAddPanelModal(false),
      initialFolderId: dashboard === null || dashboard === void 0 ? void 0 : dashboard.meta.folderId,
      isOpen: showingAddPanelModal
    }), changeToPanel && /*#__PURE__*/(0,jsx_runtime.jsx)(ChangeLibraryPanelModal, {
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
// EXTERNAL MODULE: ./public/app/features/plugins/importPanelPlugin.ts
var importPanelPlugin = __webpack_require__("./public/app/features/plugins/importPanelPlugin.ts");
;// CONCATENATED MODULE: ./public/app/features/panel/state/getAllSuggestions.ts



const panelsToCheckFirst = ['timeseries', 'barchart', 'gauge', 'stat', 'piechart', 'bargauge', 'table', 'state-timeline', 'status-history', 'logs', 'candlestick'];
async function getAllSuggestions(data, panel) {
  const builder = new grafana_data_src.VisualizationSuggestionsBuilder(data, panel);

  for (const pluginId of panelsToCheckFirst) {
    const plugin = await (0,importPanelPlugin/* importPanelPlugin */.U)(pluginId);
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
// EXTERNAL MODULE: ./public/app/features/panel/components/PanelRenderer.tsx
var PanelRenderer = __webpack_require__("./public/app/features/panel/components/PanelRenderer.tsx");
;// CONCATENATED MODULE: ./public/app/features/panel/components/VizTypePicker/VisualizationSuggestionCard.tsx








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
    'data-testid': src/* selectors.components.VisualizationPreview.card */.wl.components.VisualizationPreview.card(suggestion.name),
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

    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
      content: (_suggestion$descripti = suggestion.description) !== null && _suggestion$descripti !== void 0 ? _suggestion$descripti : suggestion.name,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("button", Object.assign({}, commonButtonProps, {
        className: (0,emotion_css_esm.cx)(styles.vizBox, styles.imgBox),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.name,
          children: suggestion.name
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
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

  return /*#__PURE__*/(0,jsx_runtime.jsx)("button", Object.assign({}, commonButtonProps, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
      content: suggestion.name,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: innerStyles,
        className: styles.renderContainer,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PanelRenderer/* PanelRenderer */.$, {
          title: "",
          data: data,
          pluginId: suggestion.pluginId,
          width: renderWidth,
          height: renderHeight,
          options: preview.options,
          fieldConfig: preview.fieldConfig
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
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
;// CONCATENATED MODULE: ./public/app/features/panel/components/VizTypePicker/VisualizationSuggestions.tsx









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
  } = (0,useAsync/* default */.Z)(() => getAllSuggestions(data, panel), [data, panel]); // temp test

  const [showTitle, setShowTitle] = (0,useLocalStorage/* default */.Z)(`VisualizationSuggestions.showTitle`, false);
  const filteredSuggestions = filterSuggestionsBySearch(searchQuery, suggestions);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* default */.Z, {
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
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.filterRow,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.infoText,
            onClick: () => setShowTitle(!showTitle),
            children: "Based on current data"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.grid,
          style: {
            gridTemplateColumns: `repeat(auto-fill, ${previewWidth - 1}px)`
          },
          children: [filteredSuggestions.map((suggestion, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(VisualizationSuggestionCard, {
            data: data,
            suggestion: suggestion,
            onChange: onChange,
            width: previewWidth,
            showTitle: showTitle
          }, index)), searchQuery && filteredSuggestions.length === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
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
// EXTERNAL MODULE: ./public/app/features/panel/state/util.ts
var util = __webpack_require__("./public/app/features/panel/state/util.ts");
// EXTERNAL MODULE: ./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx
var PanelTypeCard = __webpack_require__("./public/app/features/panel/components/VizTypePicker/PanelTypeCard.tsx");
;// CONCATENATED MODULE: ./public/app/features/panel/components/VizTypePicker/VizTypePickerPlugin.tsx



const VizTypePickerPlugin = _ref => {
  let {
    isCurrent,
    plugin,
    onClick,
    disabled
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PanelTypeCard/* PanelTypeCard */.X, {
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
;// CONCATENATED MODULE: ./public/app/features/panel/components/VizTypePicker/VizTypePicker.tsx
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
    return (0,util/* getAllPanelPluginMeta */.x)();
  }, []);
  const filteredPluginTypes = (0,react.useMemo)(() => {
    return (0,util/* filterPluginList */.r)(pluginsList, searchQuery, current);
  }, [current, pluginsList, searchQuery]);

  if (filteredPluginTypes.length === 0) {
    return _EmptySearchResult || (_EmptySearchResult = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.EmptySearchResult, {
      children: "Could not find anything matching your query"
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.grid,
    children: filteredPluginTypes.map((plugin, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(VizTypePickerPlugin, {
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
// EXTERNAL MODULE: ./public/app/features/dashboard/components/PanelEditor/types.ts
var PanelEditor_types = __webpack_require__("./public/app/features/dashboard/components/PanelEditor/types.ts");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/VisualizationSelectPane.tsx

















const VisualizationSelectPane = _ref => {
  let {
    panel,
    data
  } = _ref;
  const plugin = (0,es.useSelector)(getPanelPluginWithFallback(panel.type));
  const [searchQuery, setSearchQuery] = (0,react.useState)('');
  const [listMode, setListMode] = (0,useLocalStorage/* default */.Z)(constants/* LS_VISUALIZATION_SELECT_TAB_KEY */.FL, PanelEditor_types/* VisualizationSelectPaneTab.Visualizations */.Ok.Visualizations);
  const dispatch = (0,es.useDispatch)();
  const styles = (0,grafana_ui_src.useStyles)(VisualizationSelectPane_getStyles);
  const searchRef = (0,react.useRef)(null);
  const onVizChange = (0,react.useCallback)(pluginChange => {
    dispatch((0,panel_state_actions/* changePanelPlugin */.Kc)(Object.assign({
      panel: panel
    }, pluginChange))); // close viz picker unless a mod key is pressed while clicking

    if (!pluginChange.withModKey) {
      dispatch((0,state_reducers/* toggleVizPicker */.g_)(false));
    }
  }, [dispatch, panel]); // Give Search input focus when using radio button switch list mode

  (0,react.useEffect)(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  }, [listMode]);

  const onCloseVizPicker = () => {
    dispatch((0,state_reducers/* toggleVizPicker */.g_)(false));
  };

  if (!plugin) {
    return null;
  }

  const radioOptions = [{
    label: 'Visualizations',
    value: PanelEditor_types/* VisualizationSelectPaneTab.Visualizations */.Ok.Visualizations
  }, {
    label: 'Suggestions',
    value: PanelEditor_types/* VisualizationSelectPaneTab.Suggestions */.Ok.Suggestions
  }, {
    label: 'Library panels',
    value: PanelEditor_types/* VisualizationSelectPaneTab.LibraryPanels */.Ok.LibraryPanels,
    description: 'Reusable panels you can share between multiple dashboards.'
  }];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.openWrapper,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.formBox,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.searchRow,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.FilterInput, {
          value: searchQuery,
          onChange: setSearchQuery,
          ref: searchRef,
          autoFocus: true,
          placeholder: "Search for..."
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
          title: "Close",
          variant: "secondary",
          icon: "angle-up",
          className: styles.closeButton,
          "aria-label": src/* selectors.components.PanelEditor.toggleVizPicker */.wl.components.PanelEditor.toggleVizPicker,
          onClick: onCloseVizPicker
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Field/* Field */.g, {
        className: styles.customFieldMargin,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
          options: radioOptions,
          value: listMode,
          onChange: setListMode,
          fullWidth: true
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.scrollWrapper,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CustomScrollbar, {
        autoHeightMin: "100%",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.scrollContent,
          children: [listMode === PanelEditor_types/* VisualizationSelectPaneTab.Visualizations */.Ok.Visualizations && /*#__PURE__*/(0,jsx_runtime.jsx)(VizTypePicker, {
            current: plugin.meta,
            onChange: onVizChange,
            searchQuery: searchQuery,
            data: data,
            onClose: () => {}
          }), listMode === PanelEditor_types/* VisualizationSelectPaneTab.Suggestions */.Ok.Suggestions && /*#__PURE__*/(0,jsx_runtime.jsx)(VisualizationSuggestions, {
            current: plugin.meta,
            onChange: onVizChange,
            searchQuery: searchQuery,
            panel: panel,
            data: data,
            onClose: () => {}
          }), listMode === PanelEditor_types/* VisualizationSelectPaneTab.LibraryPanels */.Ok.LibraryPanels && /*#__PURE__*/(0,jsx_runtime.jsx)(PanelLibraryOptionsGroup, {
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
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/OptionsPane.tsx












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
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    "aria-label": src/* selectors.components.PanelEditor.OptionsPane.content */.wl.components.PanelEditor.OptionsPane.content,
    children: [!isVizPickerOpen && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.vizButtonWrapper,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(VisualizationButton, {
          panel: panel
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.optionsWrapper,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(OptionsPaneOptions, {
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
    }), isVizPickerOpen && /*#__PURE__*/(0,jsx_runtime.jsx)(VisualizationSelectPane, {
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
// EXTERNAL MODULE: ./public/app/features/dashboard/utils/panel.ts
var utils_panel = __webpack_require__("./public/app/features/dashboard/utils/panel.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderCorner.tsx
var PanelHeaderCorner = __webpack_require__("./public/app/features/dashboard/dashgrid/PanelHeader/PanelHeaderCorner.tsx");
// EXTERNAL MODULE: ./public/app/features/dashboard/services/TimeSrv.ts + 1 modules
var TimeSrv = __webpack_require__("./public/app/features/dashboard/services/TimeSrv.ts");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/PanelEditorTableView.tsx











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
  }); // Subscribe to panel event

  (0,react.useEffect)(() => {
    const timeSrv = (0,TimeSrv/* getTimeSrv */.$t)();
    const timeData = (0,utils_panel/* applyPanelTimeOverrides */.W1)(panel, timeSrv.timeRange());
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

  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.PanelChrome, {
    width: width,
    height: height,
    padding: "none",
    children: (innerWidth, innerHeight) => {
      var _data$error;

      return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PanelHeaderCorner/* default */.Z, {
          panel: panel,
          error: data === null || data === void 0 ? void 0 : (_data$error = data.error) === null || _data$error === void 0 ? void 0 : _data$error.message
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(PanelRenderer/* PanelRenderer */.$, {
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
// EXTERNAL MODULE: ./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
// EXTERNAL MODULE: ./packages/grafana-ui/src/components/Layout/Layout.tsx
var Layout = __webpack_require__("./packages/grafana-ui/src/components/Layout/Layout.tsx");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/PanelNotSupported.tsx







function PanelNotSupported(_ref) {
  let {
    message
  } = _ref;
  const onBackToQueries = (0,react.useCallback)(() => {
    grafana_runtime_src.locationService.partial({
      tab: PanelEditor_types/* PanelEditorTabId.Query */.Ip.Query
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Layout/* Layout */.Ar, {
    justify: "center",
    style: {
      marginTop: '100px'
    },
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
      spacing: "md",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h2", {
        children: message
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
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
// EXTERNAL MODULE: ./public/app/features/alerting/state/alertDef.ts
var alertDef = __webpack_require__("./public/app/features/alerting/state/alertDef.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/StateHistory.tsx
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
          stateModel: alertDef/* default.getStateDisplayModel */.Z.getStateDisplayModel(item.newState),
          time: dashboard.formatDate(item.time, 'MMM D, YYYY HH:mm:ss'),
          info: alertDef/* default.getAlertAnnotationInfo */.Z.getAlertAnnotationInfo(item)
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
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [stateHistoryItems.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "p-b-1",
        children: [_span || (_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "muted",
          children: "Last 50 state changes"
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ConfirmButton, {
          onConfirm: this.clearHistory,
          confirmVariant: "destructive",
          confirmText: "Clear",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            className: emotion_css_esm.css`
                  direction: ltr;
                `,
            variant: "destructive",
            icon: "trash-alt",
            children: "Clear history"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("ol", {
        className: "alert-rule-list",
        children: stateHistoryItems.length > 0 ? stateHistoryItems.map((item, index) => {
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
            className: "alert-rule-item",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: `alert-rule-item__icon ${item.stateModel.stateClass}`,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
                name: item.stateModel.iconClass,
                size: "xl"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "alert-rule-item__body",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "alert-rule-item__header",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
                  className: "alert-rule-item__name",
                  children: item.alertName
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: "alert-rule-item__text",
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                    className: `${item.stateModel.stateClass}`,
                    children: item.stateModel.text
                  })
                })]
              }), item.info]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "alert-rule-item__time",
              children: item.time
            })]
          }, `${item.time}-${index}`);
        }) : _i || (_i = /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          children: "No state changes recorded"
        }))
      })]
    });
  }

}

/* harmony default export */ const alerting_StateHistory = (StateHistory);
;// CONCATENATED MODULE: ./public/app/features/alerting/TestRuleResult.tsx
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
      app_events/* default.emit */.Z.emit(grafana_data_src.AppEvents.alertSuccess, ['Content copied to clipboard']);
    });

    TestRuleResult_defineProperty(this, "onToggleExpand", () => {
      this.setState(prevState => Object.assign({}, prevState, {
        allNodesExpanded: !this.state.allNodesExpanded
      }));
    });

    TestRuleResult_defineProperty(this, "getNrOfOpenNodes", () => {
      if (this.state.allNodesExpanded === null) {
        return 3; // 3 is default, ie when state is null
      } else if (this.state.allNodesExpanded) {
        return 20;
      }

      return 1;
    });

    TestRuleResult_defineProperty(this, "renderExpandCollapse", () => {
      const {
        allNodesExpanded
      } = this.state;

      const collapse = /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [TestRuleResult_Icon || (TestRuleResult_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: "minus-circle"
        })), " Collapse All"]
      });

      const expand = /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [_Icon2 || (_Icon2 = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
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
    } = this.props; // dashboard save model

    const model = dashboard.getSaveModelClone(); // now replace panel to get current edits

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
      return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LoadingPlaceholder, {
        text: "Evaluating rule"
      }));
    }

    const openNodes = this.getNrOfOpenNodes();
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "pull-right",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
          spacing: "md",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            onClick: this.onToggleExpand,
            children: this.renderExpandCollapse()
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ClipboardButton, {
            getText: this.getTextForClipboard,
            onClipboardCopy: this.onClipboardSuccess,
            icon: "copy",
            children: "Copy to Clipboard"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.JSONFormatter, {
        json: testRuleResponse,
        open: openNodes,
        onDidRender: this.setFormattedJson
      })]
    });
  }

}
// EXTERNAL MODULE: ./public/app/features/alerting/getAlertingValidationMessage.ts
var getAlertingValidationMessage = __webpack_require__("./public/app/features/alerting/getAlertingValidationMessage.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/AlertTab.tsx
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

      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Modal, {
        isOpen: true,
        icon: "bug",
        title: "Testing rule",
        onDismiss: onDismiss,
        onClickBackdrop: onDismiss,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(TestRuleResult, {
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

      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ConfirmModal, {
        isOpen: true,
        icon: "trash-alt",
        title: "Delete",
        body: AlertTab_div || (AlertTab_div = /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          children: ["Are you sure you want to delete this alert rule?", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
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

      return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Modal, {
        isOpen: true,
        icon: "history",
        title: "State history",
        onDismiss: onDismiss,
        onClickBackdrop: onDismiss,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(alerting_StateHistory, {
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
      await Promise.all(/* import() | AlertTabCtrl */[__webpack_require__.e(4808), __webpack_require__.e(5718)]).then(__webpack_require__.bind(__webpack_require__, "./public/app/features/alerting/AlertTabCtrl.ts"));
      this.loadAlertTab();
    } else {
      // TODO probably need to migrate AlertTab to react
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
      const scope = angularPanelComponent.getScope(); // When full page reloading in edit mode the angular panel has on fully compiled & instantiated yet

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
    const validationMessage = await (0,getAlertingValidationMessage/* getAlertingValidationMessage */.E)(panel.transformations, panel.targets, (0,grafana_runtime_src.getDataSourceSrv)(), panel.datasource);

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
      return /*#__PURE__*/(0,jsx_runtime.jsx)(PanelNotSupported, {
        message: validationMessage
      });
    }

    const model = {
      title: 'Panel has no alert rule defined',
      buttonIcon: 'bell',
      onClick: this.onAddAlert,
      buttonTitle: 'Create Alert'
    };
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CustomScrollbar, {
        autoHeightMin: "100%",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Container, {
          padding: "md",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            "aria-label": src/* selectors.components.AlertTab.content */.wl.components.AlertTab.content,
            children: [alert && hasTransformations && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
              severity: types/* AppNotificationSeverity.Error */.F1.Error,
              title: "Transformations are not supported in alert queries"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              ref: element => this.element = element
            }), alert && /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
                onClick: () => this.onToggleModal('showStateHistory'),
                variant: "secondary",
                children: "State history"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
                onClick: () => this.onToggleModal('showTestRule'),
                variant: "secondary",
                children: "Test rule"
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
                onClick: () => this.onToggleModal('showDeleteConfirmation'),
                variant: "destructive",
                children: "Delete"
              })]
            }), !alert && !validationMessage && /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyListCTA/* default */.Z, Object.assign({}, model))]
          })
        })
      }), this.renderTestRule(), this.renderDeleteConfirmation(), this.renderStateHistory()]
    });
  }

}

const AlertTab_mapStateToProps = (state, props) => {
  var _getPanelStateForMode;

  return {
    angularPanelComponent: (_getPanelStateForMode = (0,selectors/* getPanelStateForModel */.i)(state, props.panel)) === null || _getPanelStateForMode === void 0 ? void 0 : _getPanelStateForMode.angularComponent
  };
};

const AlertTab_mapDispatchToProps = {};
const AlertTab = (0,es.connect)(AlertTab_mapStateToProps, AlertTab_mapDispatchToProps)(UnConnectedAlertTab);
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/rule-form.ts
var rule_form = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/panel-alerts-tab/NewRuleFromPanelButton.tsx
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
  } = (0,useAsync/* default */.Z)(() => (0,rule_form/* panelToRuleFormValues */.aR)(panel, dashboard), [panel, dashboard]);
  const location = (0,react_router/* useLocation */.TH)();

  if (loading) {
    return _Button || (_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
      disabled: true,
      children: "Create alert rule from this panel"
    }));
  }

  if (!formValues) {
    return _Alert || (_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
      severity: "info",
      title: "No alerting capable query found",
      children: "Cannot create alerts from this panel because no query to an alerting capable datasource is found."
    }));
  }

  const ruleFormUrl = grafana_data_src.urlUtil.renderUrl('alerting/new', {
    defaults: JSON.stringify(formValues),
    returnTo: location.pathname + location.search
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LinkButton, {
    icon: "bell",
    href: ruleFormUrl,
    className: className,
    "data-testid": "create-alert-rule-button",
    children: "Create alert rule from this panel"
  });
};
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/RulesTable.tsx + 1 modules
var RulesTable = __webpack_require__("./public/app/features/alerting/unified/components/rules/RulesTable.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/state/actions.ts + 4 modules
var unified_state_actions = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/constants.ts
var utils_constants = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/datasource.ts
var datasource = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/redux.ts
var redux = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts
var useCombinedRuleNamespaces = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts
var useUnifiedAlertingSelector = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/hooks/usePanelCombinedRules.ts








function usePanelCombinedRules(_ref) {
  var _useUnifiedAlertingSe, _useUnifiedAlertingSe2;

  let {
    dashboard,
    panel,
    poll = false
  } = _ref;
  const dispatch = (0,es.useDispatch)();
  const promRuleRequest = (_useUnifiedAlertingSe = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.promRules[datasource/* GRAFANA_RULES_SOURCE_NAME */.GC])) !== null && _useUnifiedAlertingSe !== void 0 ? _useUnifiedAlertingSe : redux/* initialAsyncRequestState */.oq;
  const rulerRuleRequest = (_useUnifiedAlertingSe2 = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.rulerRules[datasource/* GRAFANA_RULES_SOURCE_NAME */.GC])) !== null && _useUnifiedAlertingSe2 !== void 0 ? _useUnifiedAlertingSe2 : redux/* initialAsyncRequestState */.oq; // fetch rules, then poll every RULE_LIST_POLL_INTERVAL_MS

  (0,react.useEffect)(() => {
    const fetch = () => {
      dispatch((0,unified_state_actions/* fetchPromRulesAction */.y6)({
        rulesSourceName: datasource/* GRAFANA_RULES_SOURCE_NAME */.GC,
        filter: {
          dashboardUID: dashboard.uid,
          panelId: panel.id
        }
      }));
      dispatch((0,unified_state_actions/* fetchRulerRulesAction */.UR)({
        rulesSourceName: datasource/* GRAFANA_RULES_SOURCE_NAME */.GC,
        filter: {
          dashboardUID: dashboard.uid,
          panelId: panel.id
        }
      }));
    };

    fetch();

    if (poll) {
      const interval = setInterval(fetch, utils_constants/* RULE_LIST_POLL_INTERVAL_MS */.p4);
      return () => {
        clearInterval(interval);
      };
    }

    return () => {};
  }, [dispatch, poll, panel.id, dashboard.uid]);
  const loading = promRuleRequest.loading || rulerRuleRequest.loading;
  const errors = [promRuleRequest.error, rulerRuleRequest.error].filter(err => !!err);
  const combinedNamespaces = (0,useCombinedRuleNamespaces/* useCombinedRuleNamespaces */.Zo)(datasource/* GRAFANA_RULES_SOURCE_NAME */.GC); // filter out rules that are relevant to this panel

  const rules = (0,react.useMemo)(() => combinedNamespaces.flatMap(ns => ns.groups).flatMap(group => group.rules).filter(rule => rule.annotations[utils_constants/* Annotation.dashboardUID */.q6.dashboardUID] === dashboard.uid && rule.annotations[utils_constants/* Annotation.panelID */.q6.panelID] === String(panel.id)), [combinedNamespaces, dashboard, panel]);
  return {
    rules,
    errors,
    loading
  };
}
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/access-control.ts
var access_control = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/PanelAlertTabContent.tsx
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
  const permissions = (0,access_control/* getRulesPermissions */.Bz)('grafana');
  const canCreateRules = context_srv/* contextSrv.hasPermission */.Vt.hasPermission(permissions.create);
  const alert = errors.length ? /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
    title: "Errors loading rules",
    severity: "error",
    children: errors.map((error, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: ["Failed to load Grafana rules state: ", error.message || 'Unknown error.']
    }, index))
  }) : null;

  if (loading && !rules.length) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.innerWrapper,
      children: [alert, PanelAlertTabContent_LoadingPlaceholder || (PanelAlertTabContent_LoadingPlaceholder = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.LoadingPlaceholder, {
        text: "Loading rules..."
      }))]
    });
  }

  if (rules.length) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CustomScrollbar, {
      autoHeightMin: "100%",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.innerWrapper,
        children: [alert, _RulesTable || (_RulesTable = /*#__PURE__*/(0,jsx_runtime.jsx)(RulesTable/* RulesTable */.i, {
          rules: rules
        })), !!dashboard.meta.canSave && canCreateRules && /*#__PURE__*/(0,jsx_runtime.jsx)(NewRuleFromPanelButton, {
          className: styles.newButton,
          panel: panel,
          dashboard: dashboard
        })]
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    "aria-label": src/* selectors.components.PanelAlertTabContent.content */.wl.components.PanelAlertTabContent.content,
    className: styles.noRulesWrapper,
    children: [alert, !!dashboard.uid && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [PanelAlertTabContent_p || (PanelAlertTabContent_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: "There are no alert rules linked to this panel."
      })), !!dashboard.meta.canSave && canCreateRules && /*#__PURE__*/(0,jsx_runtime.jsx)(NewRuleFromPanelButton, {
        panel: panel,
        dashboard: dashboard
      })]
    }), !dashboard.uid && !!dashboard.meta.canSave && (PanelAlertTabContent_Alert || (PanelAlertTabContent_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
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
;// CONCATENATED MODULE: ./public/app/features/alerting/AlertTabIndex.tsx


 // route between unified and "old" alerting pages based on feature flag

/* harmony default export */ const AlertTabIndex = (grafana_runtime_src.config.unifiedAlertingEnabled ? PanelAlertTabContent : AlertTab);
// EXTERNAL MODULE: ./packages/grafana-ui/src/components/Tabs/Tab.tsx
var Tab = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/PanelAlertTab.tsx
const _excluded = ["panel", "dashboard"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





// it will load rule count from backend
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
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Tab/* Tab */.O, Object.assign({}, otherProps, {
    counter: loading ? null : rules.length
  }));
};
// EXTERNAL MODULE: ./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js + 4 modules
var react_beautiful_dnd_esm = __webpack_require__("./.yarn/__virtual__/react-beautiful-dnd-virtual-27e4b658e7/0/cache/react-beautiful-dnd-npm-13.1.0-fcf5568b1c-12b7e9fbe8.zip/node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
// EXTERNAL MODULE: ./public/app/core/components/LocalStorageValueProvider/index.tsx + 1 modules
var LocalStorageValueProvider = __webpack_require__("./public/app/core/components/LocalStorageValueProvider/index.tsx");
;// CONCATENATED MODULE: ./public/app/core/utils/docsLinks.ts
 // TODO: Documentation links

const DOCS_LINKS = {
  [grafana_data_src.DocsId.Transformations]: 'https://grafana.com/docs/grafana/latest/panels/transformations',
  [grafana_data_src.DocsId.FieldConfig]: 'https://grafana.com/docs/grafana/latest/panels/field-configuration-options/',
  [grafana_data_src.DocsId.FieldConfigOverrides]: 'https://grafana.com/docs/grafana/latest/panels/field-configuration-options/#override-a-field'
};
const getDocsLink = id => DOCS_LINKS[id];
// EXTERNAL MODULE: ./public/app/features/plugins/components/PluginStateInfo.tsx
var PluginStateInfo = __webpack_require__("./public/app/features/plugins/components/PluginStateInfo.tsx");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useToggle.js
var useToggle = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useToggle.js");
// EXTERNAL MODULE: ./public/app/core/components/QueryOperationRow/OperationRowHelp.tsx
var OperationRowHelp = __webpack_require__("./public/app/core/components/QueryOperationRow/OperationRowHelp.tsx");
// EXTERNAL MODULE: ./public/app/core/components/QueryOperationRow/QueryOperationAction.tsx
var QueryOperationAction = __webpack_require__("./public/app/core/components/QueryOperationRow/QueryOperationAction.tsx");
// EXTERNAL MODULE: ./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx
var QueryOperationRow = __webpack_require__("./public/app/core/components/QueryOperationRow/QueryOperationRow.tsx");
// EXTERNAL MODULE: ./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
var mergeMap = __webpack_require__("./.yarn/cache/rxjs-npm-7.5.5-d0546b1ccb-e034f60805.zip/node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/TransformationsEditor/TransformationEditor.tsx
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
    const outputSubscription = (0,grafana_data_src.transformDataFrame)(inputTransforms, data).pipe((0,mergeMap/* mergeMap */.z)(before => (0,grafana_data_src.transformDataFrame)(outputTransforms, before))).subscribe(setOutput);
    return function unsubscribe() {
      inputSubscription.unsubscribe();
      outputSubscription.unsubscribe();
    };
  }, [index, data, configs]);
  const editor = (0,react.useMemo)(() => /*#__PURE__*/react.createElement(uiConfig.editor, {
    options: Object.assign({}, uiConfig.transformation.defaultOptions, config.transformation.options),
    input,
    onChange: opts => {
      onChange(index, {
        id: config.transformation.id,
        options: opts
      });
    }
  }), [uiConfig.editor, uiConfig.transformation.defaultOptions, config.transformation.options, config.transformation.id, input, onChange, index]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.editor,
    "aria-label": src/* selectors.components.TransformTab.transformationEditor */.wl.components.TransformTab.transformationEditor(uiConfig.name),
    children: [editor, debugMode && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.debugWrapper,
      "aria-label": src/* selectors.components.TransformTab.transformationEditorDebugger */.wl.components.TransformTab.transformationEditorDebugger(uiConfig.name),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.debug,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.debugTitle,
          children: "Transformation input data"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.debugJson,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.JSONFormatter, {
            json: input
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.debugSeparator,
        children: TransformationEditor_Icon || (TransformationEditor_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: "arrow-right"
        }))
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.debug,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.debugTitle,
          children: "Transformation output data"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.debugJson,
          children: output && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.JSONFormatter, {
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
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/TransformationsEditor/TransformationOperationRow.tsx










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
  const [showDebug, toggleDebug] = (0,useToggle/* default */.Z)(false);
  const [showHelp, toggleHelp] = (0,useToggle/* default */.Z)(false);
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
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
      align: "center",
      width: "auto",
      children: [uiConfig.state && /*#__PURE__*/(0,jsx_runtime.jsx)(PluginStateInfo/* PluginStateInfo */.u, {
        state: uiConfig.state
      }), _QueryOperationAction || (_QueryOperationAction = /*#__PURE__*/(0,jsx_runtime.jsx)(QueryOperationAction/* QueryOperationAction */.y, {
        title: "Show/hide transform help",
        icon: "info-circle",
        onClick: toggleHelp,
        active: showHelp
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(QueryOperationAction/* QueryOperationAction */.y, {
        title: "Debug",
        disabled: !isOpen,
        icon: "bug",
        onClick: toggleDebug,
        active: showDebug
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(QueryOperationAction/* QueryOperationAction */.y, {
        title: "Disable/Enable transformation",
        icon: disabled ? 'eye-slash' : 'eye',
        onClick: () => onDisableToggle(index),
        active: disabled
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(QueryOperationAction/* QueryOperationAction */.y, {
        title: "Remove",
        icon: "trash-alt",
        onClick: () => onRemove(index)
      })]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(QueryOperationRow/* QueryOperationRow */.t, {
    id: id,
    index: index,
    title: uiConfig.name,
    draggable: true,
    actions: renderActions,
    disabled: disabled,
    children: [showHelp && /*#__PURE__*/(0,jsx_runtime.jsx)(OperationRowHelp/* OperationRowHelp */.h, {
      markdown: prepMarkdown(uiConfig)
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TransformationEditor, {
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
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/TransformationsEditor/TransformationOperationRows.tsx





const TransformationOperationRows = _ref => {
  let {
    data,
    onChange,
    onRemove,
    configs
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: configs.map((t, i) => {
      const uiConfig = grafana_data_src.standardTransformersRegistry.getIfExists(t.transformation.id);

      if (!uiConfig) {
        return null;
      }

      return /*#__PURE__*/(0,jsx_runtime.jsx)(TransformationOperationRow, {
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
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/TransformationsEditor/TransformationsEditor.tsx
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
        // Escape key
        this.setState({
          search: '',
          showPicker: false
        });
        event.stopPropagation(); // don't exit the editor
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
      return /*#__PURE__*/(0,jsx_runtime.jsx)(react_beautiful_dnd_esm/* DragDropContext */.Z5, {
        onDragEnd: this.onDragEnd,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_beautiful_dnd_esm/* Droppable */.bK, {
          droppableId: "transformations-list",
          direction: "vertical",
          children: provided => {
            return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", Object.assign({
              ref: provided.innerRef
            }, provided.droppableProps, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TransformationOperationRows, {
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
  } // Transformation UIDs are stored in a name-X form. name is NOT unique hence we need to parse the IDs and increase X
  // for transformations with the same name


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
      suffix = /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [filtered.length, " / ", xforms.length, " \xA0\xA0", /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
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
      suffix = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
        name: "times",
        surface: "header",
        onClick: () => {
          this.setState({
            showPicker: false
          });
        }
      });
    }

    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [noTransforms && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Container, {
        grow: 1,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(LocalStorageValueProvider/* LocalStorageValueProvider */.G, {
          storageKey: LOCAL_STORAGE_KEY,
          defaultValue: false,
          children: (isDismissed, onDismiss) => {
            if (isDismissed) {
              return null;
            }

            return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Alert, {
              title: "Transformations",
              severity: "info",
              onRemove: () => {
                onDismiss(true);
              },
              children: [TransformationsEditor_p || (TransformationsEditor_p = /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
                children: ["Transformations allow you to join, calculate, re-order, hide, and rename your query results before they are visualized. ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "Many transforms are not suitable if you're using the Graph visualization, as it currently only supports time series data. ", /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}), "It can help to switch to the Table visualization to understand what a transformation is doing.", ' ']
              })), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
                href: getDocsLink(grafana_data_src.DocsId.Transformations),
                className: "external-link",
                target: "_blank",
                rel: "noreferrer",
                children: "Read more"
              })]
            });
          }
        })
      }), showPicker ? /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.VerticalGroup, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, {
          "aria-label": src/* selectors.components.Transforms.searchInput */.wl.components.Transforms.searchInput,
          value: search !== null && search !== void 0 ? search : '',
          autoFocus: !noTransforms,
          placeholder: "Add transformation",
          onChange: this.onSearchChange,
          onKeyDown: this.onSearchKeyDown,
          suffix: suffix
        }), xforms.map(t => {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(TransformationCard, {
            transform: t,
            onClick: () => {
              this.onTransformationAdd({
                value: t.id
              });
            }
          }, t.name);
        })]
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
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
      return _PanelNotSupported || (_PanelNotSupported = /*#__PURE__*/(0,jsx_runtime.jsx)(PanelNotSupported, {
        message: "Transformations can't be used on a panel with existing alerts"
      }));
    }

    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CustomScrollbar, {
      autoHeightMin: "100%",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Container, {
        padding: "md",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          "aria-label": src/* selectors.components.TransformTab.content */.wl.components.TransformTab.content,
          children: [hasTransforms && alert ? /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Alert, {
            severity: types/* AppNotificationSeverity.Error */.F1.Error,
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
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Card, {
    className: styles.card,
    "aria-label": src/* selectors.components.TransformTab.newTransform */.wl.components.TransformTab.newTransform(transform.name),
    onClick: onClick,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Card.Heading, {
      children: transform.name
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Card.Meta, {
      children: transform.description
    }), transform.state && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Card.Tags, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(PluginStateInfo/* PluginStateInfo */.u, {
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
// EXTERNAL MODULE: ./public/app/features/plugins/datasource_srv.ts
var datasource_srv = __webpack_require__("./public/app/features/plugins/datasource_srv.ts");
// EXTERNAL MODULE: ./public/app/features/query/components/QueryGroup.tsx + 3 modules
var QueryGroup = __webpack_require__("./public/app/features/query/components/QueryGroup.tsx");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/PanelEditorQueries.tsx
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
        // trigger queries when changing data source
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
    const datasourceSettings = (0,datasource_srv/* getDatasourceSrv */.ak)().getInstanceSettings(dataSource);
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
    } = this.props; // If the panel model has no datasource property load the default data source property and update the persisted model
    // Because this part of the panel model is not in redux yet we do a forceUpdate.

    if (!panel.datasource) {
      const ds = (0,datasource_srv/* getDatasourceSrv */.ak)().getInstanceSettings(null);
      panel.datasource = (0,grafana_data_src.getDataSourceRef)(ds);
      this.forceUpdate();
    }
  }

  render() {
    const {
      panel
    } = this.props; // If no panel data soruce set, wait with render. Will be set to default in componentDidMount

    if (!panel.datasource) {
      return null;
    }

    const options = this.buildQueryOptions(panel);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(QueryGroup/* QueryGroup */.D, {
      options: options,
      queryRunner: panel.getQueryRunner(),
      onRunQueries: this.onRunQueries,
      onOpenQueryInspector: this.onOpenQueryInspector,
      onOptionsChange: this.onOptionsChange
    });
  }

}
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/PanelEditorTabs.tsx













const PanelEditorTabs = /*#__PURE__*/react.memo(_ref => {
  let {
    panel,
    dashboard,
    tabs,
    onChangeTab
  } = _ref;
  const forceUpdate = (0,grafana_ui_src.useForceUpdate)();
  const styles = (0,grafana_ui_src.useStyles2)(PanelEditorTabs_getStyles);
  (0,react.useEffect)(() => {
    const eventSubs = new Subscription/* Subscription */.w0();
    eventSubs.add(panel.events.subscribe(types_events/* PanelQueriesChangedEvent */.pO, forceUpdate));
    eventSubs.add(panel.events.subscribe(types_events/* PanelTransformationsChangedEvent */.Xw, forceUpdate));
    return () => eventSubs.unsubscribe();
  }, [panel, forceUpdate]);
  const activeTab = tabs.find(item => item.active);

  if (tabs.length === 0) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.TabsBar, {
      className: styles.tabBar,
      hideBorder: true,
      children: tabs.map(tab => {
        if (tab.id === PanelEditor_types/* PanelEditorTabId.Alert */.Ip.Alert) {
          return renderAlertTab(tab, panel, dashboard, onChangeTab);
        }

        return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tab, {
          label: tab.text,
          active: tab.active,
          onChangeTab: () => onChangeTab(tab),
          icon: tab.icon,
          counter: getCounter(panel, tab)
        }, tab.id);
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.TabContent, {
      className: styles.tabContent,
      children: [activeTab.id === PanelEditor_types/* PanelEditorTabId.Query */.Ip.Query && /*#__PURE__*/(0,jsx_runtime.jsx)(PanelEditorQueries, {
        panel: panel,
        queries: panel.targets
      }), activeTab.id === PanelEditor_types/* PanelEditorTabId.Alert */.Ip.Alert && /*#__PURE__*/(0,jsx_runtime.jsx)(AlertTabIndex, {
        panel: panel,
        dashboard: dashboard
      }), activeTab.id === PanelEditor_types/* PanelEditorTabId.Transform */.Ip.Transform && /*#__PURE__*/(0,jsx_runtime.jsx)(TransformationsEditor, {
        panel: panel
      })]
    })]
  });
});
PanelEditorTabs.displayName = 'PanelEditorTabs';

function getCounter(panel, tab) {
  var _panel$getTransformat;

  switch (tab.id) {
    case PanelEditor_types/* PanelEditorTabId.Query */.Ip.Query:
      return panel.targets.length;

    case PanelEditor_types/* PanelEditorTabId.Alert */.Ip.Alert:
      return panel.alert ? 1 : 0;

    case PanelEditor_types/* PanelEditorTabId.Transform */.Ip.Transform:
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
    return /*#__PURE__*/(0,jsx_runtime.jsx)(PanelAlertTab, {
      label: tab.text,
      active: tab.active,
      onChangeTab: () => onChangeTab(tab),
      icon: tab.icon,
      panel: panel,
      dashboard: dashboard
    }, tab.id);
  }

  if (grafana_runtime_src.config.alertingEnabled) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tab, {
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
// EXTERNAL MODULE: ./.yarn/cache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js
var memoize_one_esm = __webpack_require__("./.yarn/cache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/state/selectors.ts






const getPanelEditorTabs = (0,memoize_one_esm/* default */.Z)((tab, plugin) => {
  var _tabs$find;

  const tabs = [];

  if (!plugin) {
    return tabs;
  }

  let defaultTab = PanelEditor_types/* PanelEditorTabId.Visualize */.Ip.Visualize;

  if (plugin.meta.skipDataQuery) {
    return [];
  }

  if (!plugin.meta.skipDataQuery) {
    defaultTab = PanelEditor_types/* PanelEditorTabId.Query */.Ip.Query;
    tabs.push({
      id: PanelEditor_types/* PanelEditorTabId.Query */.Ip.Query,
      text: 'Query',
      icon: 'database',
      active: false
    });
    tabs.push({
      id: PanelEditor_types/* PanelEditorTabId.Transform */.Ip.Transform,
      text: 'Transform',
      icon: 'process',
      active: false
    });
  }

  const {
    alertingEnabled,
    unifiedAlertingEnabled
  } = (0,config/* getConfig */.iE)();
  const hasRuleReadPermissions = context_srv/* contextSrv.hasPermission */.Vt.hasPermission((0,access_control/* getRulesPermissions */.Bz)(datasource/* GRAFANA_RULES_SOURCE_NAME */.GC).read);
  const isAlertingAvailable = alertingEnabled || unifiedAlertingEnabled && hasRuleReadPermissions;
  const isGraph = plugin.meta.id === 'graph';
  const isTimeseries = plugin.meta.id === 'timeseries';

  if (isAlertingAvailable && isGraph || isTimeseries) {
    tabs.push({
      id: PanelEditor_types/* PanelEditorTabId.Alert */.Ip.Alert,
      text: 'Alert',
      icon: 'bell',
      active: false
    });
  }

  const activeTab = (_tabs$find = tabs.find(item => item.id === (tab || defaultTab))) !== null && _tabs$find !== void 0 ? _tabs$find : tabs[0];
  activeTab.active = true;
  return tabs;
});
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/PanelEditor/PanelEditor.tsx
var PanelEditor_div;

function PanelEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





































const PanelEditor_mapStateToProps = (state, ownProps) => {
  const panel = state.panelEditor.getPanel();
  const panelState = (0,selectors/* getPanelStateForModel */.i)(state, panel);
  return {
    panel,
    plugin: panelState === null || panelState === void 0 ? void 0 : panelState.plugin,
    instanceState: panelState === null || panelState === void 0 ? void 0 : panelState.instanceState,
    initDone: state.panelEditor.initDone,
    uiState: state.panelEditor.ui,
    tableViewEnabled: state.panelEditor.tableViewEnabled,
    variables: (0,state_selectors/* getVariablesByKey */.gt)(ownProps.dashboard.uid, state)
  };
};

const PanelEditor_mapDispatchToProps = {
  initPanelEditor: initPanelEditor,
  discardPanelChanges: discardPanelChanges,
  updatePanelEditorUIState: updatePanelEditorUIState,
  updateTimeZoneForSession: profile_state_reducers/* updateTimeZoneForSession */.YT,
  toggleTableView: state_reducers/* toggleTableView */.OT,
  notifyApp: actions/* notifyApp */.$l
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
      core/* appEvents.publish */.h$.publish(new types_events/* ShowModalReactEvent */.Dn({
        component: SaveDashboardDrawer/* SaveDashboardDrawer */.d,
        props: {
          dashboard: this.props.dashboard
        }
      }));
    });

    PanelEditor_defineProperty(this, "onSaveLibraryPanel", async () => {
      if (!(0,guard/* isPanelModelLibraryPanel */.V)(this.props.panel)) {
        // New library panel, no need to display modal
        return;
      }

      const connectedDashboards = await (0,api/* getLibraryPanelConnectedDashboards */.Ef)(this.props.panel.libraryPanel.uid);

      if (connectedDashboards.length === 0 || connectedDashboards.length === 1 && connectedDashboards.includes(this.props.dashboard.id)) {
        try {
          await (0,library_panels_utils/* saveAndRefreshLibraryPanel */.i6)(this.props.panel, this.props.dashboard.meta.folderId);
          this.props.notifyApp((0,library_panels_utils/* createPanelLibrarySuccessNotification */.bF)('Library panel saved'));
        } catch (err) {
          this.props.notifyApp((0,library_panels_utils/* createPanelLibraryErrorNotification */.rm)(`Error saving library panel: "${err.statusText}"`));
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
      // we do not need to trigger force update here as the function call below
      // fires PanelOptionsChangedEvent which we subscribe to above
      this.props.panel.updateFieldConfig(Object.assign({}, config));
    });

    PanelEditor_defineProperty(this, "onPanelOptionsChanged", options => {
      // we do not need to trigger force update here as the function call below
      // fires PanelOptionsChangedEvent which we subscribe to above
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
      this.eventSubs = new Subscription/* Subscription */.w0();
      this.eventSubs.add(panel.events.subscribe(types_events/* PanelOptionsChangedEvent */.Wj, this.triggerForceUpdate));
    }
  }

  componentWillUnmount() {
    var _this$eventSubs;

    // redux action exitPanelEditor is called on location change from DashboardPrompt
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
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.mainPaneWrapper,
      children: [this.renderPanelToolbar(styles), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.panelWrapper,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* default */.Z, {
          children: _ref => {
            let {
              width,
              height
            } = _ref;

            if (width < 3 || height < 3) {
              return null;
            } // If no tabs limit height so panel does not extend to edge


            if (isOnlyPanel) {
              height -= theme.spacing.gridSize * 2;
            }

            if (tableViewEnabled) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)(PanelEditorTableView, {
                width: width,
                height: height,
                panel: panel,
                dashboard: dashboard
              });
            }

            const panelSize = (0,PanelEditor_utils/* calculatePanelSize */.jF)(uiState.mode, width, height, panel);
            return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: styles.centeringContainer,
              style: {
                width,
                height
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                style: panelSize,
                "data-panelid": panel.id,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(DashboardPanel/* DashboardPanel */.l, {
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

    return [panelPane, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.tabsWrapper,
      "aria-label": src/* selectors.components.PanelEditor.DataPane.content */.wl.components.PanelEditor.DataPane.content,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(PanelEditorTabs, {
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

    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.variablesWrapper,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(SubMenuItems, {
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
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.panelToolbar,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
        justify: variables.length > 0 ? 'space-between' : 'flex-end',
        align: "flex-start",
        children: [this.renderTemplateVariables(styles), /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.HorizontalGroup, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
            label: "Table view",
            showLabel: true,
            id: "table-view",
            value: tableViewEnabled,
            onClick: this.onToggleTableView,
            "aria-label": src/* selectors.components.PanelEditor.toggleTableView */.wl.components.PanelEditor.toggleTableView
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.RadioButtonGroup, {
            value: uiState.mode,
            options: PanelEditor_types/* displayModes */.d7,
            onChange: this.onDisplayModeChange
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(DashNavTimeControls/* DashNavTimeControls */.C, {
            dashboard: dashboard,
            onChangeTimeZone: updateTimeZoneForSession
          }), !uiState.isPanelOptionsVisible && /*#__PURE__*/(0,jsx_runtime.jsx)(VisualizationButton, {
            panel: panel
          })]
        })]
      })
    });
  }

  renderEditorActions() {
    let editorActions = [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
      icon: "cog",
      onClick: this.onOpenDashboardSettings,
      title: "Open dashboard settings"
    }, "settings"), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
      onClick: this.onDiscard,
      title: "Undo all changes",
      children: "Discard"
    }, "discard"), this.props.panel.libraryPanel ? /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
      onClick: this.onSaveLibraryPanel,
      variant: "primary",
      title: "Apply changes and save library panel",
      children: "Save library panel"
    }, "save-panel") : /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
      onClick: this.onSaveDashboard,
      title: "Apply changes and save dashboard",
      children: "Save"
    }, "save"), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
      onClick: this.onBack,
      variant: "primary",
      title: "Apply changes and go back to dashboard",
      "aria-label": src/* selectors.components.PanelEditor.applyButton */.wl.components.PanelEditor.applyButton,
      children: "Apply"
    }, "apply")];

    if (this.props.panel.libraryPanel) {
      editorActions.splice(1, 0, /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ModalsController, {
        children: _ref2 => {
          let {
            showModal,
            hideModal
          } = _ref2;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ToolbarButton, {
            onClick: () => {
              showModal(UnlinkModal/* UnlinkModal */.i, {
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
      }, "unlink-controller")); // Remove "Apply" button

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
      return PanelEditor_div || (PanelEditor_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {}));
    }

    return /*#__PURE__*/(0,jsx_runtime.jsx)(OptionsPane, {
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

    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.wrapper,
      "aria-label": src/* selectors.components.PanelEditor.General.content */.wl.components.PanelEditor.General.content,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.PageToolbar, {
        title: `${dashboard.title} / Edit Panel`,
        onGoBack: this.onGoBackToDashboard,
        children: this.renderEditorActions()
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.verticalSplitPanesWrapper,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(SplitPaneWrapper, {
          leftPaneComponents: this.renderPanelAndEditor(styles),
          rightPaneComponents: this.renderOptionsPane(),
          uiState: uiState,
          updateUiState: updatePanelEditorUIState,
          rightPaneVisible: uiState.isPanelOptionsVisible
        })
      }), this.state.showSaveLibraryPanelModal && /*#__PURE__*/(0,jsx_runtime.jsx)(SaveLibraryPanelModal, {
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
/*
 * Styles
 */

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
// EXTERNAL MODULE: ./packages/grafana-ui/src/components/PanelChrome/LoadingIndicator.tsx
var LoadingIndicator = __webpack_require__("./packages/grafana-ui/src/components/PanelChrome/LoadingIndicator.tsx");
// EXTERNAL MODULE: ./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts + 6 modules
var DashboardQueryRunner = __webpack_require__("./public/app/features/query/state/DashboardQueryRunner/DashboardQueryRunner.ts");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/SubMenu/AnnotationPicker.tsx








const AnnotationPicker = _ref => {
  let {
    annotation,
    events,
    onEnabledChanged
  } = _ref;
  const [loading, setLoading] = (0,react.useState)(false);
  const styles = (0,grafana_ui_src.useStyles2)(AnnotationPicker_getStyles);

  const onCancel = () => (0,DashboardQueryRunner/* getDashboardQueryRunner */.kt)().cancel(annotation);

  (0,react.useEffect)(() => {
    const started = events.getStream(types_events/* AnnotationQueryStarted */.z).subscribe({
      next: event => {
        if (event.payload === annotation) {
          setLoading(true);
        }
      }
    });
    const stopped = events.getStream(types_events/* AnnotationQueryFinished */.RB).subscribe({
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
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.annotation,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.InlineFieldRow, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineField, {
        label: annotation.name,
        disabled: loading,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.InlineSwitch, {
          value: annotation.enable,
          onChange: () => onEnabledChanged(annotation),
          disabled: loading
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.indicator,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingIndicator/* LoadingIndicator */.T, {
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
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/SubMenu/Annotations.tsx




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

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: visibleAnnotations.map(annotation => /*#__PURE__*/(0,jsx_runtime.jsx)(AnnotationPicker, {
      events: events,
      annotation: annotation,
      onEnabledChanged: onAnnotationChanged
    }, annotation.name))
  });
};
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js
var useEffectOnce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useEffectOnce.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/text/sanitize.ts
var sanitize = __webpack_require__("./packages/grafana-data/src/text/sanitize.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/components/LinksSettings/LinkSettingsEdit.tsx
var LinkSettingsEdit = __webpack_require__("./public/app/features/dashboard/components/LinksSettings/LinkSettingsEdit.tsx");
// EXTERNAL MODULE: ./public/app/core/services/backend_srv.ts + 4 modules
var backend_srv = __webpack_require__("./public/app/core/services/backend_srv.ts");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/SubMenu/DashboardLinksDashboard.tsx
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
    return /*#__PURE__*/(0,jsx_runtime.jsx)(LinkElement, {
      link: link,
      "data-testid": src/* selectors.components.DashboardLinks.dropDown */.wl.components.DashboardLinks.dropDown,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.ToolbarButton, {
          onClick: () => setOpened(Date.now()),
          className: (0,emotion_css_esm.cx)('gf-form-label gf-form-label--dashlink', buttonStyle),
          "data-placement": "bottom",
          "data-toggle": "dropdown",
          "aria-expanded": !!opened,
          "aria-controls": "dropdown-list",
          "aria-haspopup": "menu",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            "aria-hidden": true,
            name: "bars",
            style: {
              marginRight: '4px'
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: linkInfo.title
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
          id: "dropdown-list",
          className: `dropdown-menu ${dropdownCssClass}`,
          role: "menu",
          ref: listRef,
          children: resolvedLinks.length > 0 && resolvedLinks.map((resolvedLink, index) => {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
              role: "none",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
                role: "menuitem",
                href: resolvedLink.url,
                target: link.targetBlank ? '_blank' : undefined,
                rel: "noreferrer",
                "data-testid": src/* selectors.components.DashboardLinks.link */.wl.components.DashboardLinks.link,
                "aria-label": `${resolvedLink.title} dashboard`,
                children: resolvedLink.title
              })
            }, `dashlinks-dropdown-item-${resolvedLink.id}-${index}`);
          })
        })]
      })
    }, "dashlinks-dropdown");
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: resolvedLinks.length > 0 && resolvedLinks.map((resolvedLink, index) => {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(LinkElement, {
        link: link,
        "data-testid": src/* selectors.components.DashboardLinks.container */.wl.components.DashboardLinks.container,
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
          className: "gf-form-label gf-form-label--dashlink",
          href: resolvedLink.url,
          target: link.targetBlank ? '_blank' : undefined,
          rel: "noreferrer",
          "data-testid": src/* selectors.components.DashboardLinks.link */.wl.components.DashboardLinks.link,
          "aria-label": `${resolvedLink.title} dashboard`,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            "aria-hidden": true,
            name: "apps",
            style: {
              marginRight: '4px'
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
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

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", Object.assign({}, rest, {
    className: "gf-form",
    children: [link.tooltip && /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
      content: link.tooltip,
      children: children
    }), !link.tooltip && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
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
  const result = (0,useAsync/* default */.Z)(() => searchForTags(tags), [tags, opened]);

  if (!result.value) {
    return [];
  }

  return resolveLinks(dashboardId, link, result.value);
};

async function searchForTags(tags) {
  let dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    getBackendSrv: backend_srv/* getBackendSrv */.i
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
    getLinkSrv: link_srv/* getLinkSrv */.Bq,
    sanitize: sanitize/* sanitize */.Nw,
    sanitizeUrl: sanitize/* sanitizeUrl */.Nm
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
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/SubMenu/DashboardLinks.tsx












const DashboardLinks = _ref => {
  let {
    dashboard,
    links
  } = _ref;
  const forceUpdate = (0,grafana_ui_src.useForceUpdate)();
  (0,useEffectOnce/* default */.Z)(() => {
    const sub = dashboard.events.subscribe(grafana_runtime_src.TimeRangeUpdatedEvent, forceUpdate);
    return () => sub.unsubscribe();
  });

  if (!links.length) {
    return null;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: links.map((link, index) => {
      const linkInfo = (0,link_srv/* getLinkSrv */.Bq)().getAnchorInfo(link);
      const key = `${link.title}-$${index}`;

      if (link.type === 'dashboards') {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(DashboardLinksDashboard, {
          link: link,
          linkInfo: linkInfo,
          dashboardId: dashboard.id
        }, key);
      }

      const linkElement = /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
        className: "gf-form-label gf-form-label--dashlink",
        href: (0,sanitize/* sanitizeUrl */.Nm)(linkInfo.href),
        target: link.targetBlank ? '_blank' : undefined,
        rel: "noreferrer",
        "data-testid": src/* selectors.components.DashboardLinks.link */.wl.components.DashboardLinks.link,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          "aria-hidden": true,
          name: LinkSettingsEdit/* linkIconMap */.xy[link.icon],
          style: {
            marginRight: '4px'
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          children: linkInfo.title
        })]
      });

      return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form",
        "data-testid": src/* selectors.components.DashboardLinks.container */.wl.components.DashboardLinks.container,
        children: link.tooltip ? /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Tooltip, {
          content: linkInfo.tooltip,
          children: linkElement
        }) : linkElement
      }, key);
    })
  });
};
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/SubMenu/SubMenu.tsx
var SubMenu_div, _div2;

function SubMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class SubMenuUnConnected extends react.PureComponent {
  constructor() {
    super(...arguments);

    SubMenu_defineProperty(this, "onAnnotationStateChanged", updatedAnnotation => {
      // we're mutating dashboard state directly here until annotations are in Redux.
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

    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "submenu-controls",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("form", {
        "aria-label": "Template variables",
        className: styles,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(SubMenuItems, {
          variables: variables
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Annotations, {
        annotations: annotations,
        onAnnotationChanged: this.onAnnotationStateChanged,
        events: dashboard.events
      }), SubMenu_div || (SubMenu_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "gf-form gf-form--grow"
      })), dashboard && /*#__PURE__*/(0,jsx_runtime.jsx)(DashboardLinks, {
        dashboard: dashboard,
        links: links
      }), _div2 || (_div2 = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "clearfix"
      }))]
    });
  }

}

const SubMenu_mapStateToProps = (state, ownProps) => {
  const {
    uid
  } = ownProps.dashboard;
  const templatingState = (0,state_selectors/* getVariablesState */.AE)(uid, state);
  return {
    variables: (0,state_selectors/* getSubMenuVariables */.IV)(uid, templatingState.variables)
  };
};

const styles = emotion_css_esm.css`
  display: flex;
  flex-wrap: wrap;
  display: contents;
`;
const SubMenu = (0,es.connect)(SubMenu_mapStateToProps)(SubMenuUnConnected);
SubMenu.displayName = 'SubMenu';
// EXTERNAL MODULE: ./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/index.js
var react_grid_layout = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/index.js");
var react_grid_layout_default = /*#__PURE__*/__webpack_require__.n(react_grid_layout);
// EXTERNAL MODULE: ./.yarn/cache/tinycolor2-npm-1.4.2-462ba30c26-57ed262e08.zip/node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__("./.yarn/cache/tinycolor2-npm-1.4.2-462ba30c26-57ed262e08.zip/node_modules/tinycolor2/tinycolor.js");
var tinycolor_default = /*#__PURE__*/__webpack_require__.n(tinycolor);
// EXTERNAL MODULE: ./public/app/core/components/CardButton.tsx
var CardButton = __webpack_require__("./public/app/core/components/CardButton.tsx");
// EXTERNAL MODULE: ./public/app/features/dashboard/state/reducers.ts
var dashboard_state_reducers = __webpack_require__("./public/app/features/dashboard/state/reducers.ts");
// EXTERNAL MODULE: ./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx + 2 modules
var LibraryPanelsSearch = __webpack_require__("./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx");
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/AddPanelWidget/AddPanelWidget.tsx
var AddPanelWidget_Icon, AddPanelWidget_div;



















const getCopiedPanelPlugins = () => {
  const panels = (0,lodash.chain)(config/* default.panels */.ZP.panels).filter({
    hideFromList: false
  }).map(item => item).value();
  const copiedPanels = [];
  const copiedPanelJson = store/* default.get */.Z.get(constants/* LS_PANEL_COPY_KEY */.zF);

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
    }; // apply panel template / defaults

    if (panelPluginInfo.defaults) {
      (0,lodash.defaults)(newPanel, panelPluginInfo.defaults);
      newPanel.title = panelPluginInfo.defaults.title;
      store/* default.delete */.Z["delete"](constants/* LS_PANEL_COPY_KEY */.zF);
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
      libraryPanel: (0,library_panels_utils/* toPanelModelLibraryPanel */.Pi)(panelInfo)
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
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.wrapper,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (0,emotion_css_esm.cx)('panel-container', styles.callToAction),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AddPanelWidgetHandle, {
        onCancel: onCancelAddPanel,
        onBack: addPanelView ? onBack : undefined,
        styles: styles,
        children: addPanelView ? 'Add panel from panel library' : 'Add panel'
      }), addPanelView ? /*#__PURE__*/(0,jsx_runtime.jsx)(LibraryPanelsSearch/* LibraryPanelsSearch */.N, {
        onClick: onAddLibraryPanel,
        variant: LibraryPanelsSearch/* LibraryPanelsSearchVariant.Tight */.e.Tight,
        showPanelFilter: true
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.actionsWrapper,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CardButton/* CardButton */.x, {
          icon: "file-blank",
          "aria-label": src/* selectors.pages.AddDashboard.addNewPanel */.wl.pages.AddDashboard.addNewPanel,
          onClick: () => {
            (0,grafana_runtime_src.reportInteraction)('Create new panel');
            onCreateNewPanel();
          },
          children: "Add a new panel"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(CardButton/* CardButton */.x, {
          icon: "wrap-text",
          "aria-label": src/* selectors.pages.AddDashboard.addNewRow */.wl.pages.AddDashboard.addNewRow,
          onClick: () => {
            (0,grafana_runtime_src.reportInteraction)('Create new row');
            onCreateNewRow();
          },
          children: "Add a new row"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(CardButton/* CardButton */.x, {
          icon: "book-open",
          "aria-label": src/* selectors.pages.AddDashboard.addNewPanelLibrary */.wl.pages.AddDashboard.addNewPanelLibrary,
          onClick: () => {
            (0,grafana_runtime_src.reportInteraction)('Add a panel from the panel library');
            setAddPanelView(true);
          },
          children: "Add a panel from the panel library"
        }), copiedPanelPlugins.length === 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(CardButton/* CardButton */.x, {
          icon: "clipboard-alt",
          "aria-label": src/* selectors.pages.AddDashboard.addNewPanelLibrary */.wl.pages.AddDashboard.addNewPanelLibrary,
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
  addPanel: dashboard_state_reducers/* addPanel */.tq
};
const AddPanelWidget = (0,es.connect)(undefined, AddPanelWidget_mapDispatchToProps)(AddPanelWidgetUnconnected);

const AddPanelWidgetHandle = _ref2 => {
  let {
    children,
    onBack,
    onCancel,
    styles
  } = _ref2;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (0,emotion_css_esm.cx)(styles.headerRow, 'grid-drag-handle'),
    children: [onBack && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.backButton,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
        "aria-label": "Go back",
        name: "arrow-left",
        onClick: onBack,
        surface: "header",
        size: "xl"
      })
    }), !onBack && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.backButton,
      children: AddPanelWidget_Icon || (AddPanelWidget_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
        name: "panel-add",
        size: "md"
      }))
    }), children && /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: children
    }), AddPanelWidget_div || (AddPanelWidget_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "flex-grow-1"
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.IconButton, {
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
    // wrapper is used to make sure box-shadow animation isn't cut off in dashboard page
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
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/AddPanelWidget/index.ts

;// CONCATENATED MODULE: ./public/app/features/dashboard/components/RowOptions/RowOptionsForm.tsx
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
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Form, {
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
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: "Title",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Input, Object.assign({}, register('title'), {
            type: "text"
          }))
        }), _Field || (_Field = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Field, {
          label: "Repeat for",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(RepeatRowSelect, {
            repeat: newRepeat,
            onChange: onChangeRepeat
          })
        })), _Modal$ButtonRow || (_Modal$ButtonRow = /*#__PURE__*/(0,jsx_runtime.jsxs)(grafana_ui_src.Modal.ButtonRow, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            type: "button",
            variant: "secondary",
            onClick: onCancel,
            fill: "outline",
            children: "Cancel"
          }), RowOptionsForm_Button || (RowOptionsForm_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Button, {
            type: "submit",
            children: "Update"
          }))]
        }))]
      });
    }
  });
};
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/RowOptions/RowOptionsModal.tsx





const RowOptionsModal = _ref => {
  let {
    repeat,
    title,
    onDismiss,
    onUpdate
  } = _ref;
  const styles = RowOptionsModal_getStyles();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Modal, {
    isOpen: true,
    title: "Row options",
    icon: "copy",
    onDismiss: onDismiss,
    className: styles.modal,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(RowOptionsForm, {
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
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/RowOptions/RowOptionsButton.tsx
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

  return /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.ModalsController, {
    children: _ref2 => {
      let {
        showModal,
        hideModal
      } = _ref2;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        className: "pointer",
        onClick: () => {
          showModal(RowOptionsModal, {
            title,
            repeat,
            onDismiss: hideModal,
            onUpdate: onUpdateChange(hideModal)
          });
        },
        children: RowOptionsButton_Icon || (RowOptionsButton_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: "cog"
        }))
      });
    }
  });
};
RowOptionsButton.displayName = 'RowOptionsButton';
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/DashboardRow/DashboardRow.tsx
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
      app_events/* default.publish */.Z.publish(new types_events/* ShowConfirmModalEvent */.VJ({
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
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classes,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
        className: "dashboard-row__title pointer",
        "data-testid": src/* selectors.components.DashboardRow.title */.wl.components.DashboardRow.title(title),
        onClick: this.onToggle,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
          name: this.state.collapsed ? 'angle-right' : 'angle-down'
        }), title, /*#__PURE__*/(0,jsx_runtime.jsxs)("span", {
          className: "dashboard-row__panel_count",
          children: ["(", count, " ", panels, ")"]
        })]
      }), canEdit && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "dashboard-row__actions",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(RowOptionsButton, {
          title: this.props.panel.title,
          repeat: this.props.panel.repeat,
          onUpdate: this.onUpdate
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          className: "pointer",
          onClick: this.onDelete,
          children: DashboardRow_Icon || (DashboardRow_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.Icon, {
            name: "trash-alt"
          }))
        })]
      }), this.state.collapsed === true && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "dashboard-row__toggle-target",
        onClick: this.onToggle,
        children: "\xA0"
      }), canEdit && (DashboardRow_div || (DashboardRow_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "dashboard-row__drag grid-drag-handle"
      })))]
    });
  }

}
;// CONCATENATED MODULE: ./public/app/features/dashboard/components/DashboardRow/index.ts

;// CONCATENATED MODULE: ./public/app/features/dashboard/dashgrid/DashboardGrid.tsx
const DashboardGrid_excluded = ["gridWidth", "gridPos", "isViewing", "windowHeight", "windowWidth"];

function DashboardGrid_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DashboardGrid_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const DashboardGrid_mapDispatchToProps = {
  cleanAndRemoveMany: panel_state_actions/* cleanAndRemoveMany */.x
};
const DashboardGrid_connector = (0,es.connect)(null, DashboardGrid_mapDispatchToProps);
class DashboardGridUnconnected extends react.PureComponent {
  /** Used to keep track of mobile panel layout position */
  constructor(props) {
    super(props);

    DashboardGrid_defineProperty(this, "panelMap", {});

    DashboardGrid_defineProperty(this, "eventSubs", new Subscription/* Subscription */.w0());

    DashboardGrid_defineProperty(this, "windowHeight", 1200);

    DashboardGrid_defineProperty(this, "windowWidth", 1920);

    DashboardGrid_defineProperty(this, "gridWidth", 0);

    DashboardGrid_defineProperty(this, "lastPanelBottom", 0);

    DashboardGrid_defineProperty(this, "onLayoutChange", newLayout => {
      for (const newPos of newLayout) {
        this.panelMap[newPos.i].updateGridPos(newPos);
      }

      this.props.dashboard.sortPanelsByGridPos(); // This is called on grid mount as it can correct invalid initial grid positions

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
      panel.configRev++; // trigger change handler
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
    this.eventSubs.add(dashboard.events.subscribe(types_events/* DashboardPanelsChangedEvent */._B, this.triggerForceUpdate));
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
        panelPos.w = constants/* GRID_COLUMN_COUNT */.cz;
        panelPos.h = 1;
        panelPos.isResizable = false;
        panelPos.isDraggable = panel.collapsed;
      }

      layout.push(panelPos);
    }

    return layout;
  }

  getPanelScreenPos(panel, gridWidth) {
    let top = 0; // mobile layout

    if (gridWidth < grafana_runtime_src.config.theme2.breakpoints.values.md) {
      // In mobile layout panels are stacked so we just add the panel vertical margin to the last panel bottom position
      top = this.lastPanelBottom + constants/* GRID_CELL_VMARGIN */.hD;
    } else {
      // For top position we need to add back the vertical margin removed by translateGridHeightToScreenHeight
      top = translateGridHeightToScreenHeight(panel.gridPos.y) + constants/* GRID_CELL_VMARGIN */.hD;
    }

    this.lastPanelBottom = top + translateGridHeightToScreenHeight(panel.gridPos.h);
    return {
      top,
      bottom: this.lastPanelBottom
    };
  }

  renderPanels(gridWidth) {
    const panelElements = []; // Reset last panel bottom

    this.lastPanelBottom = 0; // This is to avoid layout re-flows, accessing window.innerHeight can trigger re-flow
    // We assume here that if width change height might have changed as well

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
      panelElements.push( /*#__PURE__*/(0,jsx_runtime.jsx)(GrafanaGridItem, {
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
      return /*#__PURE__*/(0,jsx_runtime.jsx)(DashboardRow, {
        panel: panel,
        dashboard: this.props.dashboard
      }, panel.key);
    }

    if (panel.type === 'add-panel') {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(AddPanelWidget, {
        panel: panel,
        dashboard: this.props.dashboard
      }, panel.key);
    }

    return /*#__PURE__*/(0,jsx_runtime.jsx)(DashboardPanel/* DashboardPanel */.l, {
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
    /**
     * We have a parent with "flex: 1 1 0" we need to reset it to "flex: 1 1 auto" to have the AutoSizer
     * properly working. For more information go here:
     * https://github.com/bvaughn/react-virtualized/blob/master/docs/usingAutoSizer.md#can-i-use-autosizer-within-a-flex-container
     */

    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        flex: '1 1 auto',
        display: this.props.editPanel ? 'none' : undefined
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* default */.Z, {
        disableHeight: true,
        children: _ref => {
          let {
            width
          } = _ref;

          if (width === 0) {
            return null;
          }

          const draggable = width <= 769 ? false : dashboard.meta.canEdit;
          /*
          Disable draggable if mobile device, solving an issue with unintentionally
          moving panels. https://github.com/grafana/grafana/issues/18497
          theme.breakpoints.md = 769
          */

          return (
            /*#__PURE__*/

            /**
             * The children is using a width of 100% so we need to guarantee that it is wrapped
             * in an element that has the calculated size given by the AutoSizer. The AutoSizer
             * has a width of 0 and will let its content overflow its div.
             */
            (0,jsx_runtime.jsx)("div", {
              style: {
                width: `${width}px`,
                height: '100%'
              },
              children: /*#__PURE__*/(0,jsx_runtime.jsx)((react_grid_layout_default()), {
                width: width,
                isDraggable: draggable,
                isResizable: dashboard.meta.canEdit,
                containerPadding: [0, 0],
                useCSSTransforms: false,
                margin: [constants/* GRID_CELL_VMARGIN */.hD, constants/* GRID_CELL_VMARGIN */.hD],
                cols: constants/* GRID_COLUMN_COUNT */.cz,
                rowHeight: constants/* GRID_CELL_HEIGHT */.K3,
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

/**
 * A hacky way to intercept the react-layout-grid item dimensions and pass them to DashboardPanel
 */
const GrafanaGridItem = /*#__PURE__*/react.forwardRef((props, ref) => {
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
    // In fullscreen view mode a single panel take up full width & 85% height
    width = gridWidth;
    height = windowHeight * 0.85;
    style.height = height;
    style.width = '100%';
  } else if (windowWidth < theme.breakpoints.values.md) {
    // Mobile layout is a bit different, every panel take up full width
    width = props.gridWidth;
    height = translateGridHeightToScreenHeight(gridPos.h);
    style.height = height;
    style.width = '100%';
  } else {
    // Normal grid layout. The grid framework passes width and height directly to children as style props.
    width = parseFloat(props.style.width);
    height = parseFloat(props.style.height);
  } // props.children[0] is our main children. RGL adds the drag handle at props.children[1]


  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", Object.assign({}, divProps, {
    ref: ref,
    children: [props.children[0](width, height), props.children.slice(1)]
  }));
});
/**
 * This translates grid height dimensions to real pixels
 */

function translateGridHeightToScreenHeight(gridHeight) {
  return gridHeight * (constants/* GRID_CELL_HEIGHT */.K3 + constants/* GRID_CELL_VMARGIN */.hD) - constants/* GRID_CELL_VMARGIN */.hD;
}

GrafanaGridItem.displayName = 'GridItemWithDimensions';
const DashboardGrid = DashboardGrid_connector(DashboardGridUnconnected);
// EXTERNAL MODULE: ./public/app/features/dashboard/dashgrid/liveTimer.ts
var liveTimer = __webpack_require__("./public/app/features/dashboard/dashgrid/liveTimer.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/state/actions.ts
var dashboard_state_actions = __webpack_require__("./public/app/features/dashboard/state/actions.ts");
// EXTERNAL MODULE: ./public/app/features/dashboard/state/initDashboard.ts + 1 modules
var initDashboard = __webpack_require__("./public/app/features/dashboard/state/initDashboard.ts");
;// CONCATENATED MODULE: ./public/app/features/dashboard/containers/DashboardPage.tsx
var _DashboardFailed;

function DashboardPage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
































const DashboardPage_mapStateToProps = state => ({
  initPhase: state.dashboard.initPhase,
  initError: state.dashboard.initError,
  dashboard: state.dashboard.getModel()
});
const DashboardPage_mapDispatchToProps = {
  initDashboard: initDashboard/* initDashboard */.mV,
  cleanUpDashboardAndVariables: dashboard_state_actions/* cleanUpDashboardAndVariables */.lw,
  notifyApp: actions/* notifyApp */.$l,
  cancelVariables: state_actions/* cancelVariables */.wX,
  templateVarsChangedInUrl: state_actions/* templateVarsChangedInUrl */.xs
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
        tr = (0,TimeSrv/* getTimeSrv */.$t)().timeRange();
      }

      liveTimer/* liveTimer.setLiveTimeRange */.A.setLiveTimeRange(tr);
    });

    DashboardPage_defineProperty(this, "onAddPanel", () => {
      const {
        dashboard
      } = this.props;

      if (!dashboard) {
        return;
      } // Return if the "Add panel" exists already


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
      }); // scroll to top after adding panel

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
    }); // small delay to start live updates

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
    } // if we just got dashboard update title


    if (prevProps.dashboard !== dashboard) {
      document.title = dashboard.title + ' - ' + Branding/* Branding.AppTitle */.c.AppTitle;
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
        (0,TimeSrv/* getTimeSrv */.$t)().updateTimeRangeFromUrl();
        this.updateLiveTimer();
      }

      if (!(prevUrlParams !== null && prevUrlParams !== void 0 && prevUrlParams.refresh) && urlParams !== null && urlParams !== void 0 && urlParams.refresh) {
        (0,TimeSrv/* getTimeSrv */.$t)().setAutoRefresh(urlParams.refresh);
      }

      const templateVarChanges = (0,utils/* findTemplateVarChanges */.xT)(this.props.queryParams, prevProps.queryParams);

      if (templateVarChanges) {
        templateVarsChangedInUrl(dashboard.uid, templateVarChanges);
      }
    } // entering edit mode


    if (this.state.editPanel && !prevState.editPanel) {
      var _this$props$dashboard2;

      dashboardWatcher/* dashboardWatcher.setEditingState */.H.setEditingState(true); // Some panels need to be notified when entering edit mode

      (_this$props$dashboard2 = this.props.dashboard) === null || _this$props$dashboard2 === void 0 ? void 0 : _this$props$dashboard2.events.publish(new types_events/* PanelEditEnteredEvent */.xF(this.state.editPanel.id));
    } // leaving edit mode


    if (!this.state.editPanel && prevState.editPanel) {
      var _this$props$dashboard3;

      dashboardWatcher/* dashboardWatcher.setEditingState */.H.setEditingState(false); // Some panels need kicked when leaving edit mode

      (_this$props$dashboard3 = this.props.dashboard) === null || _this$props$dashboard3 === void 0 ? void 0 : _this$props$dashboard3.events.publish(new types_events/* PanelEditExitedEvent */.Yr(prevState.editPanel.id));
    }

    if (this.state.editPanelAccessDenied) {
      this.props.notifyApp((0,appNotification/* createErrorNotification */.t_)('Permission to edit panel denied'));
      grafana_runtime_src.locationService.partial({
        editPanel: null
      });
    }

    if (this.state.panelNotFound) {
      this.props.notifyApp((0,appNotification/* createErrorNotification */.t_)(`Panel not found`));
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
    } // Entering edit mode


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
    } // Leaving edit mode
    else if (state.editPanel && !urlEditPanelId) {
      return Object.assign({}, state, {
        editPanel: null,
        updateScrollTop: state.rememberScrollTop
      });
    } // Entering view mode


    if (!state.viewPanel && urlViewPanelId) {
      var _state$scrollElement2;

      const panel = dashboard.getPanelByUrlId(urlViewPanelId);

      if (!panel) {
        return Object.assign({}, state, {
          panelNotFound: urlEditPanelId
        });
      } // This mutable state feels wrong to have in getDerivedStateFromProps
      // Should move this state out of dashboard in the future


      dashboard.initViewPanel(panel);
      return Object.assign({}, state, {
        viewPanel: panel,
        rememberScrollTop: (_state$scrollElement2 = state.scrollElement) === null || _state$scrollElement2 === void 0 ? void 0 : _state$scrollElement2.scrollTop,
        updateScrollTop: 0
      });
    } // Leaving view mode
    else if (state.viewPanel && !urlViewPanelId) {
      // This mutable state feels wrong to have in getDerivedStateFromProps
      // Should move this state out of dashboard in the future
      dashboard.exitViewPanel(state.viewPanel);
      return Object.assign({}, state, {
        viewPanel: null,
        updateScrollTop: state.rememberScrollTop
      });
    } // if we removed url edit state, clear any panel not found state


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

    const inspectPanel = dashboard.getPanelById(parseInt(inspectPanelId, 10)); // cannot inspect panels plugin is not already loaded

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
    const kioskMode = (0,kiosk/* getKioskMode */.U6)();
    const styles = DashboardPage_getStyles(theme, kioskMode);

    if (!dashboard) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(DashboardLoading, {
        initPhase: this.props.initPhase
      });
    }

    const inspectPanel = this.getInspectPanel();
    const containerClassNames = classnames_default()(styles.dashboardContainer, {
      'panel-in-fullscreen': viewPanel
    });
    const showSubMenu = !editPanel && kioskMode === types/* KioskMode.Off */.UX.Off && !this.props.queryParams.editview;
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: containerClassNames,
      children: [kioskMode !== types/* KioskMode.Full */.UX.Full && /*#__PURE__*/(0,jsx_runtime.jsx)("header", {
        "data-testid": src/* selectors.pages.Dashboard.DashNav.navV2 */.wl.pages.Dashboard.DashNav.navV2,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(DashNav/* DashNav */.t, {
          dashboard: dashboard,
          title: dashboard.title,
          folderTitle: dashboard.meta.folderTitle,
          isFullscreen: !!viewPanel,
          onAddPanel: this.onAddPanel,
          kioskMode: kioskMode,
          hideTimePicker: dashboard.timepicker.hidden
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(DashboardPrompt, {
        dashboard: dashboard
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.dashboardScroll,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(grafana_ui_src.CustomScrollbar, {
          autoHeightMin: "100%",
          scrollRefCallback: this.setScrollRef,
          scrollTop: updateScrollTop,
          hideHorizontalTrack: true,
          updateAfterMountMs: 500,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: styles.dashboardContent,
            children: [initError && (_DashboardFailed || (_DashboardFailed = /*#__PURE__*/(0,jsx_runtime.jsx)(DashboardFailed, {}))), showSubMenu && /*#__PURE__*/(0,jsx_runtime.jsx)("section", {
              "aria-label": src/* selectors.pages.Dashboard.SubMenu.submenu */.wl.pages.Dashboard.SubMenu.submenu,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(SubMenu, {
                dashboard: dashboard,
                annotations: dashboard.annotations.list,
                links: dashboard.links
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(DashboardGrid, {
              dashboard: dashboard,
              viewPanel: viewPanel,
              editPanel: editPanel
            })]
          })
        })
      }), inspectPanel && /*#__PURE__*/(0,jsx_runtime.jsx)(PanelInspector, {
        dashboard: dashboard,
        panel: inspectPanel
      }), editPanel && /*#__PURE__*/(0,jsx_runtime.jsx)(PanelEditor, {
        dashboard: dashboard,
        sourcePanel: editPanel,
        tab: this.props.queryParams.tab
      }), queryParams.editview && /*#__PURE__*/(0,jsx_runtime.jsx)(DashboardSettings/* DashboardSettings */.D, {
        dashboard: dashboard,
        editview: queryParams.editview
      })]
    });
  }

}
/*
 * Styles
 */

const DashboardPage_getStyles = (0,grafana_ui_src.stylesFactory)((theme, kioskMode) => {
  const contentPadding = kioskMode !== types/* KioskMode.Full */.UX.Full ? theme.spacing(0, 2, 2) : theme.spacing(2);
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
/* harmony default export */ const containers_DashboardPage = (DashboardPage_connector(DashboardPage));

/***/ }),

/***/ "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/GridItem.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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

/**
 * An individual item within a ReactGridLayout.
 */
var GridItem = /*#__PURE__*/function (_React$Component) {
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

    _defineProperty(_assertThisInitialized(_this), "elementRef", /*#__PURE__*/_react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (e, _ref) {
      var node = _ref.node;
      var _this$props = _this.props,
          onDragStart = _this$props.onDragStart,
          transformScale = _this$props.transformScale;
      if (!onDragStart) return;
      var newPosition
      /*: PartialPosition*/
      = {
        top: 0,
        left: 0
      }; // TODO: this wont work on nested parents

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
      }); // Call callback with this data


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

      var positionParams = _this.getPositionParams(); // Boundary calculations; keeps items within the grid


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
      /*: PartialPosition*/
      = {
        top: top,
        left: left
      };

      _this.setState({
        dragging: newPosition
      }); // Call callback with this data


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
      /*: PartialPosition*/
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
    /*: Props*/
    , nextState
    /*: State*/
    )
    /*: boolean*/
    {
      // We can't deeply compare children. If the developer memoizes them, we can
      // use this optimization.
      if (this.props.children !== nextProps.children) return true;
      if (this.props.droppingPosition !== nextProps.droppingPosition) return true; // TODO memoize these calculations so they don't take so long?

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
    /*: Props*/
    ) {
      this.moveDroppingItem(prevProps);
    } // When a droppingPosition is present, this means we should fire a move event, as if we had moved
    // this element by `x, y` pixels.

  }, {
    key: "moveDroppingItem",
    value: function moveDroppingItem(prevProps
    /*: Props*/
    ) {
      var droppingPosition = this.props.droppingPosition;
      if (!droppingPosition) return;
      var node = this.elementRef.current; // Can't find DOM node (are we unmounted?)

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
    /*: PositionParams*/
    {
      var props
      /*: Props*/
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
    /**
     * This is where we set the grid item's absolute placement. It gets a little tricky because we want to do it
     * well when server rendering, and the only way to do that properly is to use percentage width/left because
     * we don't know exactly what the browser viewport is.
     * Unfortunately, CSS Transforms, which are great for performance, break in this instance because a percentage
     * left is relative to the item itself, not its container! So we cannot use them on the server rendering pass.
     *
     * @param  {Object} pos Position object with width, height, left, top.
     * @return {Object}     Style object.
     */

  }, {
    key: "createStyle",
    value: function createStyle(pos
    /*: Position*/
    )
    /*: { [key: string]: ?string }*/
    {
      var _this$props5 = this.props,
          usePercentages = _this$props5.usePercentages,
          containerWidth = _this$props5.containerWidth,
          useCSSTransforms = _this$props5.useCSSTransforms;
      var style; // CSS Transforms support (default)

      if (useCSSTransforms) {
        style = (0, _utils.setTransform)(pos);
      } else {
        // top,left (slow)
        style = (0, _utils.setTopLeft)(pos); // This is used for server rendering.

        if (usePercentages) {
          style.left = (0, _utils.perc)(pos.left / containerWidth);
          style.width = (0, _utils.perc)(pos.width / containerWidth);
        }
      }

      return style;
    }
    /**
     * Mix a Draggable instance into a child.
     * @param  {Element} child    Child element.
     * @return {Element}          Child wrapped in Draggable.
     */

  }, {
    key: "mixinDraggable",
    value: function mixinDraggable(child
    /*: ReactElement<any>*/
    , isDraggable
    /*: boolean*/
    )
    /*: ReactElement<any>*/
    {
      return /*#__PURE__*/_react.default.createElement(_reactDraggable.DraggableCore, {
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
    /**
     * Mix a Resizable instance into a child.
     * @param  {Element} child    Child element.
     * @param  {Object} position  Position object (pixel values)
     * @return {Element}          Child wrapped in Resizable.
     */

  }, {
    key: "mixinResizable",
    value: function mixinResizable(child
    /*: ReactElement<any>*/
    , position
    /*: Position*/
    , isResizable
    /*: boolean*/
    )
    /*: ReactElement<any>*/
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
      var positionParams = this.getPositionParams(); // This is the max possible width - doesn't go to infinity because of the width of the window

      var maxWidth = (0, _calculateUtils.calcGridItemPosition)(positionParams, 0, 0, cols - x, 0).width; // Calculate min/max constraints using our min & maxes

      var mins = (0, _calculateUtils.calcGridItemPosition)(positionParams, 0, 0, minW, minH);
      var maxes = (0, _calculateUtils.calcGridItemPosition)(positionParams, 0, 0, maxW, maxH);
      var minConstraints = [mins.width, mins.height];
      var maxConstraints = [Math.min(maxes.width, maxWidth), Math.min(maxes.height, Infinity)];
      return /*#__PURE__*/_react.default.createElement(_reactResizable.Resizable // These are opts for the resize handle itself
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
    /**
     * onDragStart event handler
     * @param  {Event}  e             event data
     * @param  {Object} callbackData  an object with node, delta and position information
     */

  }, {
    key: "onResizeHandler",
    value:
    /**
     * Wrapper around drag events to provide more useful data.
     * All drag events call the function with the given handler name,
     * with the signature (index, x, y).
     *
     * @param  {String} handlerName Handler name to wrap.
     * @return {Function}           Handler function.
     */
    function onResizeHandler(e
    /*: Event*/
    , _ref4, handlerName
    /*: string*/
    )
    /*: void*/
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
          maxW = _this$props8.maxW; // Get new XY

      var _calcWH = (0, _calculateUtils.calcWH)(this.getPositionParams(), size.width, size.height, x, y),
          w = _calcWH.w,
          h = _calcWH.h; // minW should be at least 1 (TODO propTypes validation?)


      minW = Math.max(minW, 1); // maxW should be at most (cols - x)

      maxW = Math.min(maxW, cols - x); // Min/max capping

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
    /*: ReactNode*/
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

      var child = _react.default.Children.only(this.props.children); // Create the child element. We clone the existing element but modify its className and style.


      var newChild = /*#__PURE__*/_react.default.cloneElement(child, {
        ref: this.elementRef,
        className: (0, _clsx.default)("react-grid-item", child.props.className, this.props.className, {
          static: this.props.static,
          resizing: Boolean(this.state.resizing),
          "react-draggable": isDraggable,
          "react-draggable-dragging": Boolean(this.state.dragging),
          dropping: Boolean(droppingPosition),
          cssTransforms: useCSSTransforms
        }),
        // We can set the width and height on the child, but unfortunately we can't set the position.
        style: _objectSpread(_objectSpread(_objectSpread({}, this.props.style), child.props.style), this.createStyle(pos))
      }); // Resizable support. This is usually on but the user can toggle it off.


      newChild = this.mixinResizable(newChild, pos, isResizable); // Draggable support. This is always on, except for with placeholders.

      newChild = this.mixinDraggable(newChild, isDraggable);
      return newChild;
    }
  }]);

  return GridItem;
}(_react.default.Component);

exports["default"] = GridItem;

_defineProperty(GridItem, "propTypes", {
  // Children must be only a single element
  children: _propTypes.default.element,
  // General grid attributes
  cols: _propTypes.default.number.isRequired,
  containerWidth: _propTypes.default.number.isRequired,
  rowHeight: _propTypes.default.number.isRequired,
  margin: _propTypes.default.array.isRequired,
  maxRows: _propTypes.default.number.isRequired,
  containerPadding: _propTypes.default.array.isRequired,
  // These are all in grid units
  x: _propTypes.default.number.isRequired,
  y: _propTypes.default.number.isRequired,
  w: _propTypes.default.number.isRequired,
  h: _propTypes.default.number.isRequired,
  // All optional
  minW: function minW(props
  /*: Props*/
  , propName
  /*: string*/
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("minWidth not Number");
    if (value > props.w || value > props.maxW) return new Error("minWidth larger than item width/maxWidth");
  },
  maxW: function maxW(props
  /*: Props*/
  , propName
  /*: string*/
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("maxWidth not Number");
    if (value < props.w || value < props.minW) return new Error("maxWidth smaller than item width/minWidth");
  },
  minH: function minH(props
  /*: Props*/
  , propName
  /*: string*/
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("minHeight not Number");
    if (value > props.h || value > props.maxH) return new Error("minHeight larger than item height/maxHeight");
  },
  maxH: function maxH(props
  /*: Props*/
  , propName
  /*: string*/
  ) {
    var value = props[propName];
    if (typeof value !== "number") return new Error("maxHeight not Number");
    if (value < props.h || value < props.minH) return new Error("maxHeight smaller than item height/minHeight");
  },
  // ID is nice to have for callbacks
  i: _propTypes.default.string.isRequired,
  // Resize handle options
  resizeHandles: _ReactGridLayoutPropTypes.resizeHandleAxesType,
  resizeHandle: _ReactGridLayoutPropTypes.resizeHandleType,
  // Functions
  onDragStop: _propTypes.default.func,
  onDragStart: _propTypes.default.func,
  onDrag: _propTypes.default.func,
  onResizeStop: _propTypes.default.func,
  onResizeStart: _propTypes.default.func,
  onResize: _propTypes.default.func,
  // Flags
  isDraggable: _propTypes.default.bool.isRequired,
  isResizable: _propTypes.default.bool.isRequired,
  isBounded: _propTypes.default.bool.isRequired,
  static: _propTypes.default.bool,
  // Use CSS transforms instead of top/left
  useCSSTransforms: _propTypes.default.bool.isRequired,
  transformScale: _propTypes.default.number,
  // Others
  className: _propTypes.default.string,
  // Selector for draggable handle
  handle: _propTypes.default.string,
  // Selector for draggable cancel (see react-draggable)
  cancel: _propTypes.default.string,
  // Current position of a dropping element
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

/***/ }),

/***/ "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/ReactGridLayout.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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

// End Types
var layoutClassName = "react-grid-layout";
var isFirefox = false; // Try...catch will protect from navigator not existing (e.g. node) or a bad implementation of navigator

try {
  isFirefox = /firefox/i.test(navigator.userAgent);
} catch (e) {
  /* Ignore */
}
/**
 * A reactive, fluid grid layout with draggable, resizable components.
 */


var ReactGridLayout = /*#__PURE__*/function (_React$Component) {
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
      layout: (0, _utils.synchronizeLayoutWithChildren)(_this.props.layout, _this.props.children, _this.props.cols, // Legacy support for verticalCompact: false
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
    /*: string*/
    , x
    /*: number*/
    , y
    /*: number*/
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
      if (!l) return; // Create placeholder (display only)

      var placeholder = {
        w: l.w,
        h: l.h,
        x: l.x,
        y: l.y,
        placeholder: true,
        i: i
      }; // Move the element to the dragged location.

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
      if (!l) return; // Move the element here

      var isUserAction = true;
      layout = (0, _utils.moveElement)(layout, l, x, y, isUserAction, preventCollision, (0, _utils.compactType)(_this.props), cols, allowOverlap);

      _this.props.onDragStop(layout, oldDragItem, l, null, e, node); // Set state


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
        // Something like quad tree should be used
        // to find collisions faster
        var hasCollisions;

        if (preventCollision && !allowOverlap) {
          var collisions = (0, _utils.getAllCollisions)(layout, _objectSpread(_objectSpread({}, l), {}, {
            w: w,
            h: h
          })).filter(function (layoutItem) {
            return layoutItem.i !== l.i;
          });
          hasCollisions = collisions.length > 0; // If we're colliding, we need adjust the placeholder.

          // If we're colliding, we need adjust the placeholder.
          if (hasCollisions) {
            // adjust w && h to maximum allowed space
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
          // Set new width and height.
          l.w = w;
          l.h = h;
        }

        return l;
      }),
          _withLayoutItem2 = _slicedToArray(_withLayoutItem, 2),
          newLayout = _withLayoutItem2[0],
          l = _withLayoutItem2[1]; // Shouldn't ever happen, but typechecking makes it necessary


      if (!l) return; // Create placeholder element (display only)

      var placeholder = {
        w: l.w,
        h: l.h,
        x: l.x,
        y: l.y,
        static: true,
        i: i
      };

      _this.props.onResize(newLayout, oldResizeItem, l, placeholder, e, node); // Re-compact the newLayout and set the drag placeholder.


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

      _this.props.onResizeStop(layout, oldResizeItem, l, null, e, node); // Set state


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

      e.preventDefault(); // Prevent any browser native action

      e.stopPropagation(); // we should ignore events from layout's children in Firefox
      // to avoid unpredictable jumping of a dropping placeholder
      // FIXME remove this hack

      if (isFirefox && // $FlowIgnore can't figure this out
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
          transformScale = _this$props5.transformScale; // Allow user to customize the dropping item or short-circuit the drop based on the results
      // of the `onDragOver(e: Event)` callback.

      var onDragOverResult = onDropDragOver === null || onDropDragOver === void 0 ? void 0 : onDropDragOver(e);

      if (onDragOverResult === false) {
        if (_this.state.droppingDOMNode) {
          _this.removeDroppingPlaceholder();
        }

        return false;
      }

      var finalDroppingItem = _objectSpread(_objectSpread({}, droppingItem), onDragOverResult);

      var layout = _this.state.layout; // This is relative to the DOM element that this event fired for.

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
        /*: PositionParams*/
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
          droppingDOMNode: /*#__PURE__*/React.createElement("div", {
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
      e.preventDefault(); // Prevent any browser native action

      e.stopPropagation();
      _this.dragEnterCounter--; // onDragLeave can be triggered on each layout's child.
      // But we know that count of dragEnter and dragLeave events
      // will be balanced after leaving the layout's container
      // so we can increase and decrease count of dragEnter and
      // when it'll be equal to 0 we'll remove the placeholder

      if (_this.dragEnterCounter === 0) {
        _this.removeDroppingPlaceholder();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDragEnter", function (e) {
      e.preventDefault(); // Prevent any browser native action

      e.stopPropagation();
      _this.dragEnterCounter++;
    });

    _defineProperty(_assertThisInitialized(_this), "onDrop", function (e
    /*: Event*/
    ) {
      e.preventDefault(); // Prevent any browser native action

      e.stopPropagation();
      var droppingItem = _this.props.droppingItem;
      var layout = _this.state.layout;
      var item = layout.find(function (l) {
        return l.i === droppingItem.i;
      }); // reset dragEnter counter on drop

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
      }); // Possibly call back with layout on mount. This should be done after correcting the layout width
      // to ensure we don't rerender with the wrong width.

      this.onLayoutMaybeChanged(this.state.layout, this.props.layout);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps
    /*: Props*/
    , nextState
    /*: State*/
    )
    /*: boolean*/
    {
      return (// NOTE: this is almost always unequal. Therefore the only way to get better performance
        // from SCU is if the user intentionally memoizes children. If they do, and they can
        // handle changes properly, performance will increase.
        this.props.children !== nextProps.children || !(0, _utils.fastRGLPropsEqual)(this.props, nextProps, _lodash.default) || this.state.activeDrag !== nextState.activeDrag || this.state.mounted !== nextState.mounted || this.state.droppingPosition !== nextState.droppingPosition
      );
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps
    /*: Props*/
    , prevState
    /*: State*/
    ) {
      if (!this.state.activeDrag) {
        var newLayout = this.state.layout;
        var oldLayout = prevState.layout;
        this.onLayoutMaybeChanged(newLayout, oldLayout);
      }
    }
    /**
     * Calculates a pixel value for the container.
     * @return {String} Container height in pixels.
     */

  }, {
    key: "containerHeight",
    value: function containerHeight()
    /*: ?string*/
    {
      if (!this.props.autoSize) return;
      var nbRow = (0, _utils.bottom)(this.state.layout);
      var containerPaddingY = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
      return nbRow * this.props.rowHeight + (nbRow - 1) * this.props.margin[1] + containerPaddingY * 2 + "px";
    }
    /**
     * When dragging starts
     * @param {String} i Id of the child
     * @param {Number} x X position of the move
     * @param {Number} y Y position of the move
     * @param {Event} e The mousedown event
     * @param {Element} node The current dragging DOM element
     */

  }, {
    key: "onLayoutMaybeChanged",
    value: function onLayoutMaybeChanged(newLayout
    /*: Layout*/
    , oldLayout
    /*: ?Layout*/
    ) {
      if (!oldLayout) oldLayout = this.state.layout;

      if (!(0, _lodash.default)(oldLayout, newLayout)) {
        this.props.onLayoutChange(newLayout);
      }
    }
  }, {
    key: "placeholder",
    value:
    /**
     * Create a placeholder object.
     * @return {Element} Placeholder div.
     */
    function placeholder()
    /*: ?ReactElement<any>*/
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
          transformScale = _this$props7.transformScale; // {...this.state.activeDrag} is pretty slow, actually

      return /*#__PURE__*/React.createElement(_GridItem.default, {
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
      }, /*#__PURE__*/React.createElement("div", null));
    }
    /**
     * Given a grid item, set its style attributes & surround in a <Draggable>.
     * @param  {Element} child React element.
     * @return {Element}       Element wrapped in draggable and properly placed.
     */

  }, {
    key: "processGridItem",
    value: function processGridItem(child
    /*: ReactElement<any>*/
    , isDroppingItem
    /*: boolean*/
    )
    /*: ?ReactElement<any>*/
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
          droppingPosition = _this$state3.droppingPosition; // Determine user manipulations possible.
      // If an item is static, it can't be manipulated by default.
      // Any properties defined directly on the grid item will take precedence.

      var draggable = typeof l.isDraggable === "boolean" ? l.isDraggable : !l.static && isDraggable;
      var resizable = typeof l.isResizable === "boolean" ? l.isResizable : !l.static && isResizable;
      var resizeHandlesOptions = l.resizeHandles || resizeHandles; // isBounded set on child if set on parent, and child is not explicitly false

      var bounded = draggable && isBounded && l.isBounded !== false;
      return /*#__PURE__*/React.createElement(_GridItem.default, {
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
    } // Called while dragging an element. Part of browser native drag/drop API.
    // Native event target might be the layout itself, or an element within the layout.

  }, {
    key: "render",
    value: function render()
    /*: React.Element<"div">*/
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

      return /*#__PURE__*/React.createElement("div", {
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
    /*: Props*/
    , prevState
    /*: State*/
    )
    /*: $Shape<State> | null*/
    {
      var newLayoutBase;

      if (prevState.activeDrag) {
        return null;
      } // Legacy support for compactType
      // Allow parent to set layout directly.


      if (!(0, _lodash.default)(nextProps.layout, prevState.propsLayout) || nextProps.compactType !== prevState.compactType) {
        newLayoutBase = nextProps.layout;
      } else if (!(0, _utils.childrenEqual)(nextProps.children, prevState.children)) {
        // If children change, also regenerate the layout. Use our state
        // as the base in case because it may be more up to date than
        // what is in props.
        newLayoutBase = prevState.layout;
      } // We need to regenerate the layout.


      if (newLayoutBase) {
        var newLayout = (0, _utils.synchronizeLayoutWithChildren)(newLayoutBase, nextProps.children, nextProps.cols, (0, _utils.compactType)(nextProps), nextProps.allowOverlap);
        return {
          layout: newLayout,
          // We need to save these props to state for using
          // getDerivedStateFromProps instead of componentDidMount (in which we would get extra rerender)
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
  // infinite vertical growth
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

/***/ }),

/***/ "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/ReactGridLayoutPropTypes.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resizeHandleType = exports.resizeHandleAxesType = exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("./.yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-c056d3f1c0.zip/node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Defines which resize handles should be rendered (default: 'se')
// Allows for any combination of:
// 's' - South handle (bottom-center)
// 'w' - West handle (left-center)
// 'e' - East handle (right-center)
// 'n' - North handle (top-center)
// 'sw' - Southwest handle (bottom-left)
// 'nw' - Northwest handle (top-left)
// 'se' - Southeast handle (bottom-right)
// 'ne' - Northeast handle (top-right)
var resizeHandleAxesType
/*: ReactPropsChainableTypeChecker*/
= _propTypes.default.arrayOf(_propTypes.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])); // Custom component for resize handles


exports.resizeHandleAxesType = resizeHandleAxesType;

var resizeHandleType
/*: ReactPropsChainableTypeChecker*/
= _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]);
/*:: export type Props = {|
  className: string,
  style: Object,
  width: number,
  autoSize: boolean,
  cols: number,
  draggableCancel: string,
  draggableHandle: string,
  verticalCompact: boolean,
  compactType: CompactType,
  layout: Layout,
  margin: [number, number],
  containerPadding: ?[number, number],
  rowHeight: number,
  maxRows: number,
  isBounded: boolean,
  isDraggable: boolean,
  isResizable: boolean,
  isDroppable: boolean,
  preventCollision: boolean,
  useCSSTransforms: boolean,
  transformScale: number,
  droppingItem: $Shape<LayoutItem>,
  resizeHandles: ResizeHandleAxis[],
  resizeHandle?: ResizeHandle,
  allowOverlap: boolean,

  // Callbacks
  onLayoutChange: Layout => void,
  onDrag: EventCallback,
  onDragStart: EventCallback,
  onDragStop: EventCallback,
  onResize: EventCallback,
  onResizeStart: EventCallback,
  onResizeStop: EventCallback,
  onDropDragOver: (e: DragOverEvent) => ?({| w?: number, h?: number |} | false),
  onDrop: (layout: Layout, item: ?LayoutItem, e: Event) => void,
  children: ReactChildrenArray<ReactElement<any>>,
  innerRef?: Ref<"div">
|};*/

/*:: export type DefaultProps = $Diff<
  Props,
  {
    children: ReactChildrenArray<ReactElement<any>>,
    width: number
  }
>;*/


exports.resizeHandleType = resizeHandleType;
var _default = {
  //
  // Basic props
  //
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  // This can be set explicitly. If it is not set, it will automatically
  // be set to the container width. Note that resizes will *not* cause this to adjust.
  // If you need that behavior, use WidthProvider.
  width: _propTypes.default.number,
  // If true, the container height swells and contracts to fit contents
  autoSize: _propTypes.default.bool,
  // # of cols.
  cols: _propTypes.default.number,
  // A selector that will not be draggable.
  draggableCancel: _propTypes.default.string,
  // A selector for the draggable handler
  draggableHandle: _propTypes.default.string,
  // Deprecated
  verticalCompact: function verticalCompact(props
  /*: Props*/
  ) {
    if (props.verticalCompact === false && "production" !== "production") {}
  },
  // Choose vertical or hotizontal compaction
  compactType: (_propTypes.default.oneOf(["vertical", "horizontal"])
  /*: ReactPropsChainableTypeChecker*/
  ),
  // layout is an array of object with the format:
  // {x: Number, y: Number, w: Number, h: Number, i: String}
  layout: function layout(props
  /*: Props*/
  ) {
    var layout = props.layout; // I hope you're setting the data-grid property on the grid items

    if (layout === undefined) return;

    (__webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/utils.js").validateLayout)(layout, "layout");
  },
  //
  // Grid Dimensions
  //
  // Margin between items [x, y] in px
  margin: (_propTypes.default.arrayOf(_propTypes.default.number)
  /*: ReactPropsChainableTypeChecker*/
  ),
  // Padding inside the container [x, y] in px
  containerPadding: (_propTypes.default.arrayOf(_propTypes.default.number)
  /*: ReactPropsChainableTypeChecker*/
  ),
  // Rows have a static height, but you can change this based on breakpoints if you like
  rowHeight: _propTypes.default.number,
  // Default Infinity, but you can specify a max here if you like.
  // Note that this isn't fully fleshed out and won't error if you specify a layout that
  // extends beyond the row capacity. It will, however, not allow users to drag/resize
  // an item past the barrier. They can push items beyond the barrier, though.
  // Intentionally not documented for this reason.
  maxRows: _propTypes.default.number,
  //
  // Flags
  //
  isBounded: _propTypes.default.bool,
  isDraggable: _propTypes.default.bool,
  isResizable: _propTypes.default.bool,
  // If true, grid can be placed one over the other.
  allowOverlap: _propTypes.default.bool,
  // If true, grid items won't change position when being dragged over.
  preventCollision: _propTypes.default.bool,
  // Use CSS transforms instead of top/left
  useCSSTransforms: _propTypes.default.bool,
  // parent layout transform scale
  transformScale: _propTypes.default.number,
  // If true, an external element can trigger onDrop callback with a specific grid position as a parameter
  isDroppable: _propTypes.default.bool,
  // Resize handle options
  resizeHandles: resizeHandleAxesType,
  resizeHandle: resizeHandleType,
  //
  // Callbacks
  //
  // Callback so you can save the layout. Calls after each drag & resize stops.
  onLayoutChange: _propTypes.default.func,
  // Calls when drag starts. Callback is of the signature (layout, oldItem, newItem, placeholder, e, ?node).
  // All callbacks below have the same signature. 'start' and 'stop' callbacks omit the 'placeholder'.
  onDragStart: _propTypes.default.func,
  // Calls on each drag movement.
  onDrag: _propTypes.default.func,
  // Calls when drag is complete.
  onDragStop: _propTypes.default.func,
  //Calls when resize starts.
  onResizeStart: _propTypes.default.func,
  // Calls when resize movement happens.
  onResize: _propTypes.default.func,
  // Calls when resize is complete.
  onResizeStop: _propTypes.default.func,
  // Calls when some element is dropped.
  onDrop: _propTypes.default.func,
  //
  // Other validations
  //
  droppingItem: (_propTypes.default.shape({
    i: _propTypes.default.string.isRequired,
    w: _propTypes.default.number.isRequired,
    h: _propTypes.default.number.isRequired
  })
  /*: ReactPropsChainableTypeChecker*/
  ),
  // Children must not have duplicate keys.
  children: function children(props
  /*: Props*/
  , propName
  /*: string*/
  ) {
    var children = props[propName]; // Check children keys for duplicates. Throw if found.

    var keys = {};

    _react.default.Children.forEach(children, function (child) {
      if ((child === null || child === void 0 ? void 0 : child.key) == null) return;

      if (keys[child.key]) {
        throw new Error('Duplicate child key "' + child.key + '" found! This will cause problems in ReactGridLayout.');
      }

      keys[child.key] = true;
    });
  },
  // Optional ref for getting a reference for the wrapping div.
  innerRef: _propTypes.default.any
};
exports["default"] = _default;

/***/ }),

/***/ "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/ResponsiveReactGridLayout.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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

// $FlowFixMe[method-unbinding]
var type = function type(obj) {
  return Object.prototype.toString.call(obj);
};
/**
 * Get a value of margin or containerPadding.
 *
 * @param  {Array | Object} param Margin | containerPadding, e.g. [10, 10] | {lg: [10, 10], ...}.
 * @param  {String} breakpoint   Breakpoint: lg, md, sm, xs and etc.
 * @return {Array}
 */


function getIndentationValue
/*:: <T: ?[number, number]>*/
(param
/*: { [key: string]: T } | T*/
, breakpoint
/*: string*/
)
/*: T*/
{
  // $FlowIgnore TODO fix this typedef
  if (param == null) return null; // $FlowIgnore TODO fix this typedef

  return Array.isArray(param) ? param : param[breakpoint];
}
/*:: type State = {
  layout: Layout,
  breakpoint: string,
  cols: number,
  layouts?: ResponsiveLayout<string>
};*/

/*:: type Props<Breakpoint: string = string> = {|
  ...React.ElementConfig<typeof ReactGridLayout>,

  // Responsive config
  breakpoint?: ?Breakpoint,
  breakpoints: Breakpoints<Breakpoint>,
  cols: { [key: Breakpoint]: number },
  layouts: ResponsiveLayout<Breakpoint>,
  width: number,
  margin: { [key: Breakpoint]: [number, number] } | [number, number],
  /* prettier-ignore *-/
  containerPadding: { [key: Breakpoint]: ?[number, number] } | ?[number, number],

  // Callbacks
  onBreakpointChange: (Breakpoint, cols: number) => void,
  onLayoutChange: OnLayoutChangeCallback,
  onWidthChange: (
    containerWidth: number,
    margin: [number, number],
    cols: number,
    containerPadding: ?[number, number]
  ) => void
|};*/

/*:: type DefaultProps = Pick<
  Props<>,
  {|
    allowOverlap: 0,
    breakpoints: 0,
    cols: 0,
    containerPadding: 0,
    layouts: 0,
    margin: 0,
    onBreakpointChange: 0,
    onLayoutChange: 0,
    onWidthChange: 0
  |}
>;*/


var ResponsiveReactGridLayout = /*#__PURE__*/function (_React$Component) {
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
    /*: Layout*/
    ) {
      _this.props.onLayoutChange(layout, _objectSpread(_objectSpread({}, _this.props.layouts), {}, _defineProperty({}, _this.state.breakpoint, layout)));
    });

    return _this;
  }

  _createClass(ResponsiveReactGridLayout, [{
    key: "generateInitialState",
    value: function generateInitialState()
    /*: State*/
    {
      var _this$props = this.props,
          width = _this$props.width,
          breakpoints = _this$props.breakpoints,
          layouts = _this$props.layouts,
          cols = _this$props.cols;
      var breakpoint = (0, _responsiveUtils.getBreakpointFromWidth)(breakpoints, width);
      var colNo = (0, _responsiveUtils.getColsFromBreakpoint)(breakpoint, cols); // verticalCompact compatibility, now deprecated

      var compactType = this.props.verticalCompact === false ? null : this.props.compactType; // Get the initial layout. This can tricky; we try to generate one however possible if one doesn't exist
      // for this layout.

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
    /*: Props<*>*/
    ) {
      // Allow parent to set width or breakpoint directly.
      if (this.props.width != prevProps.width || this.props.breakpoint !== prevProps.breakpoint || !(0, _lodash.default)(this.props.breakpoints, prevProps.breakpoints) || !(0, _lodash.default)(this.props.cols, prevProps.cols)) {
        this.onWidthChange(prevProps);
      }
    } // wrap layouts so we do not need to pass layouts to child

  }, {
    key: "onWidthChange",
    value:
    /**
     * When the width changes work through breakpoints and reset state with the new width & breakpoint.
     * Width changes are necessary to figure out the widget widths.
     */
    function onWidthChange(prevProps
    /*: Props<*>*/
    ) {
      var _this$props2 = this.props,
          breakpoints = _this$props2.breakpoints,
          cols = _this$props2.cols,
          layouts = _this$props2.layouts,
          compactType = _this$props2.compactType;
      var newBreakpoint = this.props.breakpoint || (0, _responsiveUtils.getBreakpointFromWidth)(this.props.breakpoints, this.props.width);
      var lastBreakpoint = this.state.breakpoint;
      var newCols
      /*: number*/
      = (0, _responsiveUtils.getColsFromBreakpoint)(newBreakpoint, cols);

      var newLayouts = _objectSpread({}, layouts); // Breakpoint change


      if (lastBreakpoint !== newBreakpoint || prevProps.breakpoints !== breakpoints || prevProps.cols !== cols) {
        // Preserve the current layout if the current breakpoint is not present in the next layouts.
        if (!(lastBreakpoint in newLayouts)) newLayouts[lastBreakpoint] = (0, _utils.cloneLayout)(this.state.layout); // Find or generate a new layout.

        var layout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(newLayouts, breakpoints, newBreakpoint, lastBreakpoint, newCols, compactType); // This adds missing items.

        layout = (0, _utils.synchronizeLayoutWithChildren)(layout, this.props.children, newCols, compactType, this.props.allowOverlap); // Store the new layout.

        newLayouts[newBreakpoint] = layout; // callbacks

        this.props.onLayoutChange(layout, newLayouts);
        this.props.onBreakpointChange(newBreakpoint, newCols);
        this.setState({
          breakpoint: newBreakpoint,
          layout: layout,
          cols: newCols
        });
      }

      var margin = getIndentationValue(this.props.margin, newBreakpoint);
      var containerPadding = getIndentationValue(this.props.containerPadding, newBreakpoint); //call onWidthChange on every change of width, not only on breakpoint changes

      this.props.onWidthChange(this.props.width, margin, newCols, containerPadding);
    }
  }, {
    key: "render",
    value: function render()
    /*: React.Element<typeof ReactGridLayout>*/
    {
      /* eslint-disable no-unused-vars */
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
      /* eslint-enable no-unused-vars */


      return /*#__PURE__*/React.createElement(_ReactGridLayout.default, _extends({}, other, {
        // $FlowIgnore should allow nullable here due to DefaultProps
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
    /*: Props<*>*/
    , prevState
    /*: State*/
    )
    /*: ?$Shape<State>*/
    {
      if (!(0, _lodash.default)(nextProps.layouts, prevState.layouts)) {
        // Allow parent to set layouts directly.
        var breakpoint = prevState.breakpoint,
            _cols = prevState.cols; // Since we're setting an entirely new layout object, we must generate a new responsive layout
        // if one does not exist.

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
  //
  // Basic props
  //
  // Optional, but if you are managing width yourself you may want to set the breakpoint
  // yourself as well.
  breakpoint: _propTypes.default.string,
  // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
  breakpoints: _propTypes.default.object,
  allowOverlap: _propTypes.default.bool,
  // # of cols. This is a breakpoint -> cols map
  cols: _propTypes.default.object,
  // # of margin. This is a breakpoint -> margin map
  // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
  // Margin between items [x, y] in px
  // e.g. [10, 10]
  margin: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
  // # of containerPadding. This is a breakpoint -> containerPadding map
  // e.g. { lg: [5, 5], md: [10, 10], sm: [15, 15] }
  // Padding inside the container [x, y] in px
  // e.g. [10, 10]
  containerPadding: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),
  // layouts is an object mapping breakpoints to layouts.
  // e.g. {lg: Layout, md: Layout, ...}
  layouts: function layouts(props
  /*: Props<>*/
  , propName
  /*: string*/
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
  // The width of this component.
  // Required in this propTypes stanza because generateInitialState() will fail without it.
  width: _propTypes.default.number.isRequired,
  //
  // Callbacks
  //
  // Calls back with breakpoint and new # cols
  onBreakpointChange: _propTypes.default.func,
  // Callback so you can save the layout.
  // Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.
  onLayoutChange: _propTypes.default.func,
  // Calls back with (containerWidth, margin, cols, containerPadding)
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

/***/ }),

/***/ "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/calculateUtils.js":
/***/ ((__unused_webpack_module, exports) => {

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

/*:: import type { Position } from "./utils";*/

/*:: export type PositionParams = {
  margin: [number, number],
  containerPadding: [number, number],
  containerWidth: number,
  cols: number,
  rowHeight: number,
  maxRows: number
};*/
// Helper for generating column width
function calcGridColWidth(positionParams
/*: PositionParams*/
)
/*: number*/
{
  var margin = positionParams.margin,
      containerPadding = positionParams.containerPadding,
      containerWidth = positionParams.containerWidth,
      cols = positionParams.cols;
  return (containerWidth - margin[0] * (cols - 1) - containerPadding[0] * 2) / cols;
} // This can either be called:
// calcGridItemWHPx(w, colWidth, margin[0])
// or
// calcGridItemWHPx(h, rowHeight, margin[1])


function calcGridItemWHPx(gridUnits
/*: number*/
, colOrRowSize
/*: number*/
, marginPx
/*: number*/
)
/*: number*/
{
  // 0 * Infinity === NaN, which causes problems with resize contraints
  if (!Number.isFinite(gridUnits)) return gridUnits;
  return Math.round(colOrRowSize * gridUnits + Math.max(0, gridUnits - 1) * marginPx);
}
/**
 * Return position on the page given an x, y, w, h.
 * left, top, width, height are all in pixels.
 * @param  {PositionParams} positionParams  Parameters of grid needed for coordinates calculations.
 * @param  {Number}  x                      X coordinate in grid units.
 * @param  {Number}  y                      Y coordinate in grid units.
 * @param  {Number}  w                      W coordinate in grid units.
 * @param  {Number}  h                      H coordinate in grid units.
 * @return {Position}                       Object containing coords.
 */


function calcGridItemPosition(positionParams
/*: PositionParams*/
, x
/*: number*/
, y
/*: number*/
, w
/*: number*/
, h
/*: number*/
, state
/*: ?Object*/
)
/*: Position*/
{
  var margin = positionParams.margin,
      containerPadding = positionParams.containerPadding,
      rowHeight = positionParams.rowHeight;
  var colWidth = calcGridColWidth(positionParams);
  var out = {}; // If resizing, use the exact width and height as returned from resizing callbacks.

  if (state && state.resizing) {
    out.width = Math.round(state.resizing.width);
    out.height = Math.round(state.resizing.height);
  } // Otherwise, calculate from grid units.
  else {
    out.width = calcGridItemWHPx(w, colWidth, margin[0]);
    out.height = calcGridItemWHPx(h, rowHeight, margin[1]);
  } // If dragging, use the exact width and height as returned from dragging callbacks.


  if (state && state.dragging) {
    out.top = Math.round(state.dragging.top);
    out.left = Math.round(state.dragging.left);
  } // Otherwise, calculate from grid units.
  else {
    out.top = Math.round((rowHeight + margin[1]) * y + containerPadding[1]);
    out.left = Math.round((colWidth + margin[0]) * x + containerPadding[0]);
  }

  return out;
}
/**
 * Translate x and y coordinates from pixels to grid units.
 * @param  {PositionParams} positionParams  Parameters of grid needed for coordinates calculations.
 * @param  {Number} top                     Top position (relative to parent) in pixels.
 * @param  {Number} left                    Left position (relative to parent) in pixels.
 * @param  {Number} w                       W coordinate in grid units.
 * @param  {Number} h                       H coordinate in grid units.
 * @return {Object}                         x and y in grid units.
 */


function calcXY(positionParams
/*: PositionParams*/
, top
/*: number*/
, left
/*: number*/
, w
/*: number*/
, h
/*: number*/
)
/*: { x: number, y: number }*/
{
  var margin = positionParams.margin,
      cols = positionParams.cols,
      rowHeight = positionParams.rowHeight,
      maxRows = positionParams.maxRows;
  var colWidth = calcGridColWidth(positionParams); // left = colWidth * x + margin * (x + 1)
  // l = cx + m(x+1)
  // l = cx + mx + m
  // l - m = cx + mx
  // l - m = x(c + m)
  // (l - m) / (c + m) = x
  // x = (left - margin) / (coldWidth + margin)

  var x = Math.round((left - margin[0]) / (colWidth + margin[0]));
  var y = Math.round((top - margin[1]) / (rowHeight + margin[1])); // Capping

  x = clamp(x, 0, cols - w);
  y = clamp(y, 0, maxRows - h);
  return {
    x: x,
    y: y
  };
}
/**
 * Given a height and width in pixel values, calculate grid units.
 * @param  {PositionParams} positionParams  Parameters of grid needed for coordinates calcluations.
 * @param  {Number} height                  Height in pixels.
 * @param  {Number} width                   Width in pixels.
 * @param  {Number} x                       X coordinate in grid units.
 * @param  {Number} y                       Y coordinate in grid units.
 * @return {Object}                         w, h as grid units.
 */


function calcWH(positionParams
/*: PositionParams*/
, width
/*: number*/
, height
/*: number*/
, x
/*: number*/
, y
/*: number*/
)
/*: { w: number, h: number }*/
{
  var margin = positionParams.margin,
      maxRows = positionParams.maxRows,
      cols = positionParams.cols,
      rowHeight = positionParams.rowHeight;
  var colWidth = calcGridColWidth(positionParams); // width = colWidth * w - (margin * (w - 1))
  // ...
  // w = (width + margin) / (colWidth + margin)

  var w = Math.round((width + margin[0]) / (colWidth + margin[0]));
  var h = Math.round((height + margin[1]) / (rowHeight + margin[1])); // Capping

  w = clamp(w, 0, cols - x);
  h = clamp(h, 0, maxRows - y);
  return {
    w: w,
    h: h
  };
} // Similar to _.clamp


function clamp(num
/*: number*/
, lowerBound
/*: number*/
, upperBound
/*: number*/
)
/*: number*/
{
  return Math.max(Math.min(num, upperBound), lowerBound);
}

/***/ }),

/***/ "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/components/WidthProvider.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
/*
 * A simple HOC that provides facility for listening to container resizes.
 *
 * The Flow type is pretty janky here. I can't just spread `WPProps` into this returned object - I wish I could - but it triggers
 * a flow bug of some sort that causes it to stop typechecking.
 */

function WidthProvideRGL
/*:: <Config>*/
(ComposedComponent
/*: React.AbstractComponent<Config>*/
)
/*: React.AbstractComponent<ComposedProps<Config>>*/
{
  var _class;

  return _class = /*#__PURE__*/function (_React$Component) {
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

      _defineProperty(_assertThisInitialized(_this), "elementRef", /*#__PURE__*/React.createRef());

      _defineProperty(_assertThisInitialized(_this), "mounted", false);

      _defineProperty(_assertThisInitialized(_this), "onWindowResize", function () {
        if (!_this.mounted) return;
        var node = _this.elementRef.current; // Flow casts this to Text | Element
        // fix: grid position error when node or parentNode display is none by window resize
        // #924 #1084

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
        window.addEventListener("resize", this.onWindowResize); // Call to properly set the breakpoint and resize the elements.
        // Note that if you're doing a full-width element, this can get a little wonky if a scrollbar
        // appears because of the grid. In that case, fire your own resize event, or set `overflow: scroll` on your body.

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
          return /*#__PURE__*/React.createElement("div", {
            className: (0, _clsx.default)(this.props.className, layoutClassName),
            style: this.props.style // $FlowIgnore ref types
            ,
            ref: this.elementRef
          });
        }

        return /*#__PURE__*/React.createElement(ComposedComponent, _extends({
          innerRef: this.elementRef
        }, rest, this.state));
      }
    }]);

    return WidthProvider;
  }(React.Component), _defineProperty(_class, "defaultProps", {
    measureBeforeMount: false
  }), _defineProperty(_class, "propTypes", {
    // If true, will not render children until mounted. Useful for getting the exact width before
    // rendering, to prevent any unsightly resizing.
    measureBeforeMount: _propTypes.default.bool
  }), _class;
}

/***/ }),

/***/ "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/fastRGLPropsEqual.js":
/***/ ((module) => {

// this file was prevaled
module.exports = function fastRGLPropsEqual(a, b, isEqualImpl) {
  if (a === b) return true;
  return a.className === b.className && isEqualImpl(a.style, b.style) && a.width === b.width && a.autoSize === b.autoSize && a.cols === b.cols && a.draggableCancel === b.draggableCancel && a.draggableHandle === b.draggableHandle && isEqualImpl(a.verticalCompact, b.verticalCompact) && isEqualImpl(a.compactType, b.compactType) && isEqualImpl(a.layout, b.layout) && isEqualImpl(a.margin, b.margin) && isEqualImpl(a.containerPadding, b.containerPadding) && a.rowHeight === b.rowHeight && a.maxRows === b.maxRows && a.isBounded === b.isBounded && a.isDraggable === b.isDraggable && a.isResizable === b.isResizable && a.allowOverlap === b.allowOverlap && a.preventCollision === b.preventCollision && a.useCSSTransforms === b.useCSSTransforms && a.transformScale === b.transformScale && a.isDroppable === b.isDroppable && isEqualImpl(a.resizeHandles, b.resizeHandles) && isEqualImpl(a.resizeHandle, b.resizeHandle) && a.onLayoutChange === b.onLayoutChange && a.onDragStart === b.onDragStart && a.onDrag === b.onDrag && a.onDragStop === b.onDragStop && a.onResizeStart === b.onResizeStart && a.onResize === b.onResize && a.onResizeStop === b.onResizeStop && a.onDrop === b.onDrop && isEqualImpl(a.droppingItem, b.droppingItem) && isEqualImpl(a.innerRef, b.innerRef);
};

/***/ }),

/***/ "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/responsiveUtils.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.findOrGenerateResponsiveLayout = findOrGenerateResponsiveLayout;
exports.getBreakpointFromWidth = getBreakpointFromWidth;
exports.getColsFromBreakpoint = getColsFromBreakpoint;
exports.sortBreakpoints = sortBreakpoints;

var _utils = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/utils.js");

/**
 * Given a width, find the highest breakpoint that matches is valid for it (width > breakpoint).
 *
 * @param  {Object} breakpoints Breakpoints object (e.g. {lg: 1200, md: 960, ...})
 * @param  {Number} width Screen width.
 * @return {String}       Highest breakpoint that is less than width.
 */
function getBreakpointFromWidth(breakpoints
/*: Breakpoints<Breakpoint>*/
, width
/*: number*/
)
/*: Breakpoint*/
{
  var sorted = sortBreakpoints(breakpoints);
  var matching = sorted[0];

  for (var i = 1, len = sorted.length; i < len; i++) {
    var breakpointName = sorted[i];
    if (width > breakpoints[breakpointName]) matching = breakpointName;
  }

  return matching;
}
/**
 * Given a breakpoint, get the # of cols set for it.
 * @param  {String} breakpoint Breakpoint name.
 * @param  {Object} cols       Map of breakpoints to cols.
 * @return {Number}            Number of cols.
 */


function getColsFromBreakpoint(breakpoint
/*: Breakpoint*/
, cols
/*: Breakpoints<Breakpoint>*/
)
/*: number*/
{
  if (!cols[breakpoint]) {
    throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + breakpoint + " is missing!");
  }

  return cols[breakpoint];
}
/**
 * Given existing layouts and a new breakpoint, find or generate a new layout.
 *
 * This finds the layout above the new one and generates from it, if it exists.
 *
 * @param  {Object} layouts     Existing layouts.
 * @param  {Array} breakpoints All breakpoints.
 * @param  {String} breakpoint New breakpoint.
 * @param  {String} breakpoint Last breakpoint (for fallback).
 * @param  {Number} cols       Column count at new breakpoint.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout
 *   vertically.
 * @return {Array}             New layout.
 */


function findOrGenerateResponsiveLayout(layouts
/*: ResponsiveLayout<Breakpoint>*/
, breakpoints
/*: Breakpoints<Breakpoint>*/
, breakpoint
/*: Breakpoint*/
, lastBreakpoint
/*: Breakpoint*/
, cols
/*: number*/
, compactType
/*: CompactType*/
)
/*: Layout*/
{
  // If it already exists, just return it.
  if (layouts[breakpoint]) return (0, _utils.cloneLayout)(layouts[breakpoint]); // Find or generate the next layout

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

  layout = (0, _utils.cloneLayout)(layout || []); // clone layout so we don't modify existing items

  return (0, _utils.compact)((0, _utils.correctBounds)(layout, {
    cols: cols
  }), compactType, cols);
}
/**
 * Given breakpoints, return an array of breakpoints sorted by width. This is usually
 * e.g. ['xxs', 'xs', 'sm', ...]
 *
 * @param  {Object} breakpoints Key/value pair of breakpoint names to widths.
 * @return {Array}              Sorted breakpoints.
 */


function sortBreakpoints(breakpoints
/*: Breakpoints<Breakpoint>*/
)
/*: Array<Breakpoint>*/
{
  var keys
  /*: Array<string>*/
  = Object.keys(breakpoints);
  return keys.sort(function (a, b) {
    return breakpoints[a] - breakpoints[b];
  });
}

/***/ }),

/***/ "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/utils.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
/**
 * Return the bottom coordinate of the layout.
 *
 * @param  {Array} layout Layout array.
 * @return {Number}       Bottom coordinate.
 */

function bottom(layout
/*: Layout*/
)
/*: number*/
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
/*: Layout*/
)
/*: Layout*/
{
  var newLayout = Array(layout.length);

  for (var i = 0, len = layout.length; i < len; i++) {
    newLayout[i] = cloneLayoutItem(layout[i]);
  }

  return newLayout;
} // Modify a layoutItem inside a layout. Returns a new Layout,
// does not mutate. Carries over all other LayoutItems unmodified.


function modifyLayout(layout
/*: Layout*/
, layoutItem
/*: LayoutItem*/
)
/*: Layout*/
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
} // Function to be called to modify a layout item.
// Does defensive clones to ensure the layout is not modified.


function withLayoutItem(layout
/*: Layout*/
, itemKey
/*: string*/
, cb
/*: LayoutItem => LayoutItem*/
)
/*: [Layout, ?LayoutItem]*/
{
  var item = getLayoutItem(layout, itemKey);
  if (!item) return [layout, null];
  item = cb(cloneLayoutItem(item)); // defensive clone then modify
  // FIXME could do this faster if we already knew the index

  layout = modifyLayout(layout, item);
  return [layout, item];
} // Fast path to cloning, since this is monomorphic


function cloneLayoutItem(layoutItem
/*: LayoutItem*/
)
/*: LayoutItem*/
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
    // These can be null/undefined
    isDraggable: layoutItem.isDraggable,
    isResizable: layoutItem.isResizable,
    resizeHandles: layoutItem.resizeHandles,
    isBounded: layoutItem.isBounded
  };
}
/**
 * Comparing React `children` is a bit difficult. This is a good way to compare them.
 * This will catch differences in keys, order, and length.
 */


function childrenEqual(a
/*: ReactChildren*/
, b
/*: ReactChildren*/
)
/*: boolean*/
{
  return (0, _lodash.default)(_react.default.Children.map(a, function (c) {
    return c === null || c === void 0 ? void 0 : c.key;
  }), _react.default.Children.map(b, function (c) {
    return c === null || c === void 0 ? void 0 : c.key;
  }));
}
/**
 * See `fastRGLPropsEqual.js`.
 * We want this to run as fast as possible - it is called often - and to be
 * resilient to new props that we add. So rather than call lodash.isEqual,
 * which isn't suited to comparing props very well, we use this specialized
 * function in conjunction with preval to generate the fastest possible comparison
 * function, tuned for exactly our props.
 */

/*:: type FastRGLPropsEqual = (Object, Object, Function) => boolean;*/


var fastRGLPropsEqual
/*: FastRGLPropsEqual*/
= __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/fastRGLPropsEqual.js"); // Like the above, but a lot simpler.


exports.fastRGLPropsEqual = fastRGLPropsEqual;

function fastPositionEqual(a
/*: Position*/
, b
/*: Position*/
)
/*: boolean*/
{
  return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height;
}
/**
 * Given two layoutitems, check if they collide.
 */


function collides(l1
/*: LayoutItem*/
, l2
/*: LayoutItem*/
)
/*: boolean*/
{
  if (l1.i === l2.i) return false; // same element

  if (l1.x + l1.w <= l2.x) return false; // l1 is left of l2

  if (l1.x >= l2.x + l2.w) return false; // l1 is right of l2

  if (l1.y + l1.h <= l2.y) return false; // l1 is above l2

  if (l1.y >= l2.y + l2.h) return false; // l1 is below l2

  return true; // boxes overlap
}
/**
 * Given a layout, compact it. This involves going down each y coordinate and removing gaps
 * between items.
 *
 * Does not modify layout items (clones). Creates a new layout array.
 *
 * @param  {Array} layout Layout.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout
 *   vertically.
 * @return {Array}       Compacted Layout.
 */


function compact(layout
/*: Layout*/
, compactType
/*: CompactType*/
, cols
/*: number*/
)
/*: Layout*/
{
  // Statics go in the compareWith array right away so items flow around them.
  var compareWith = getStatics(layout); // We go through the items by row and column.

  var sorted = sortLayoutItems(layout, compactType); // Holding for new items.

  var out = Array(layout.length);

  for (var i = 0, len = sorted.length; i < len; i++) {
    var l = cloneLayoutItem(sorted[i]); // Don't move static elements

    if (!l.static) {
      l = compactItem(compareWith, l, compactType, cols, sorted); // Add to comparison array. We only collide with items before this one.
      // Statics are already in this array.

      compareWith.push(l);
    } // Add to output array to make sure they still come out in the right order.


    out[layout.indexOf(sorted[i])] = l; // Clear moved flag, if it exists.

    l.moved = false;
  }

  return out;
}

var heightWidth = {
  x: "w",
  y: "h"
};
/**
 * Before moving item down, it will check if the movement will cause collisions and move those items down before.
 */

function resolveCompactionCollision(layout
/*: Layout*/
, item
/*: LayoutItem*/
, moveToCoord
/*: number*/
, axis
/*: "x" | "y"*/
) {
  var sizeProp = heightWidth[axis];
  item[axis] += 1;
  var itemIndex = layout.map(function (layoutItem) {
    return layoutItem.i;
  }).indexOf(item.i); // Go through each item we collide with.

  for (var i = itemIndex + 1; i < layout.length; i++) {
    var otherItem = layout[i]; // Ignore static items

    if (otherItem.static) continue; // Optimization: we can break early if we know we're past this el
    // We can do this b/c it's a sorted layout

    if (otherItem.y > item.y + item.h) break;

    if (collides(item, otherItem)) {
      resolveCompactionCollision(layout, otherItem, moveToCoord + item[sizeProp], axis);
    }
  }

  item[axis] = moveToCoord;
}
/**
 * Compact an item in the layout.
 *
 * Modifies item.
 *
 */


function compactItem(compareWith
/*: Layout*/
, l
/*: LayoutItem*/
, compactType
/*: CompactType*/
, cols
/*: number*/
, fullLayout
/*: Layout*/
)
/*: LayoutItem*/
{
  var compactV = compactType === "vertical";
  var compactH = compactType === "horizontal";

  if (compactV) {
    // Bottom 'y' possible is the bottom of the layout.
    // This allows you to do nice stuff like specify {y: Infinity}
    // This is here because the layout must be sorted in order to get the correct bottom `y`.
    l.y = Math.min(bottom(compareWith), l.y); // Move the element up as far as it can go without colliding.

    while (l.y > 0 && !getFirstCollision(compareWith, l)) {
      l.y--;
    }
  } else if (compactH) {
    // Move the element left as far as it can go without colliding.
    while (l.x > 0 && !getFirstCollision(compareWith, l)) {
      l.x--;
    }
  } // Move it down, and keep moving it down if it's colliding.


  var collides;

  while (collides = getFirstCollision(compareWith, l)) {
    if (compactH) {
      resolveCompactionCollision(fullLayout, l, collides.x + collides.w, "x");
    } else {
      resolveCompactionCollision(fullLayout, l, collides.y + collides.h, "y");
    } // Since we can't grow without bounds horizontally, if we've overflown, let's move it down and try again.


    if (compactH && l.x + l.w > cols) {
      l.x = cols - l.w;
      l.y++;
    }
  } // Ensure that there are no negative positions


  l.y = Math.max(l.y, 0);
  l.x = Math.max(l.x, 0);
  return l;
}
/**
 * Given a layout, make sure all elements fit within its bounds.
 *
 * Modifies layout items.
 *
 * @param  {Array} layout Layout array.
 * @param  {Number} bounds Number of columns.
 */


function correctBounds(layout
/*: Layout*/
, bounds
/*: { cols: number }*/
)
/*: Layout*/
{
  var collidesWith = getStatics(layout);

  for (var i = 0, len = layout.length; i < len; i++) {
    var l = layout[i]; // Overflows right

    if (l.x + l.w > bounds.cols) l.x = bounds.cols - l.w; // Overflows left

    if (l.x < 0) {
      l.x = 0;
      l.w = bounds.cols;
    }

    if (!l.static) collidesWith.push(l);else {
      // If this is static and collides with other statics, we must move it down.
      // We have to do something nicer than just letting them overlap.
      while (getFirstCollision(collidesWith, l)) {
        l.y++;
      }
    }
  }

  return layout;
}
/**
 * Get a layout item by ID. Used so we can override later on if necessary.
 *
 * @param  {Array}  layout Layout array.
 * @param  {String} id     ID
 * @return {LayoutItem}    Item at ID.
 */


function getLayoutItem(layout
/*: Layout*/
, id
/*: string*/
)
/*: ?LayoutItem*/
{
  for (var i = 0, len = layout.length; i < len; i++) {
    if (layout[i].i === id) return layout[i];
  }
}
/**
 * Returns the first item this layout collides with.
 * It doesn't appear to matter which order we approach this from, although
 * perhaps that is the wrong thing to do.
 *
 * @param  {Object} layoutItem Layout item.
 * @return {Object|undefined}  A colliding layout item, or undefined.
 */


function getFirstCollision(layout
/*: Layout*/
, layoutItem
/*: LayoutItem*/
)
/*: ?LayoutItem*/
{
  for (var i = 0, len = layout.length; i < len; i++) {
    if (collides(layout[i], layoutItem)) return layout[i];
  }
}

function getAllCollisions(layout
/*: Layout*/
, layoutItem
/*: LayoutItem*/
)
/*: Array<LayoutItem>*/
{
  return layout.filter(function (l) {
    return collides(l, layoutItem);
  });
}
/**
 * Get all static elements.
 * @param  {Array} layout Array of layout objects.
 * @return {Array}        Array of static layout items..
 */


function getStatics(layout
/*: Layout*/
)
/*: Array<LayoutItem>*/
{
  return layout.filter(function (l) {
    return l.static;
  });
}
/**
 * Move an element. Responsible for doing cascading movements of other elements.
 *
 * Modifies layout items.
 *
 * @param  {Array}      layout            Full layout to modify.
 * @param  {LayoutItem} l                 element to move.
 * @param  {Number}     [x]               X position in grid units.
 * @param  {Number}     [y]               Y position in grid units.
 */


function moveElement(layout
/*: Layout*/
, l
/*: LayoutItem*/
, x
/*: ?number*/
, y
/*: ?number*/
, isUserAction
/*: ?boolean*/
, preventCollision
/*: ?boolean*/
, compactType
/*: CompactType*/
, cols
/*: number*/
, allowOverlap
/*: ?boolean*/
)
/*: Layout*/
{
  // If this is static and not explicitly enabled as draggable,
  // no move is possible, so we can short-circuit this immediately.
  if (l.static && l.isDraggable !== true) return layout; // Short-circuit if nothing to do.

  if (l.y === y && l.x === x) return layout;
  log("Moving element ".concat(l.i, " to [").concat(String(x), ",").concat(String(y), "] from [").concat(l.x, ",").concat(l.y, "]"));
  var oldX = l.x;
  var oldY = l.y; // This is quite a bit faster than extending the object

  if (typeof x === "number") l.x = x;
  if (typeof y === "number") l.y = y;
  l.moved = true; // If this collides with anything, move it.
  // When doing this comparison, we have to sort the items we compare with
  // to ensure, in the case of multiple collisions, that we're getting the
  // nearest collision.

  var sorted = sortLayoutItems(layout, compactType);
  var movingUp = compactType === "vertical" && typeof y === "number" ? oldY >= y : compactType === "horizontal" && typeof x === "number" ? oldX >= x : false; // $FlowIgnore acceptable modification of read-only array as it was recently cloned

  if (movingUp) sorted = sorted.reverse();
  var collisions = getAllCollisions(sorted, l);
  var hasCollisions = collisions.length > 0; // We may have collisions. We can short-circuit if we've turned off collisions or
  // allowed overlap.

  if (hasCollisions && allowOverlap) {
    // Easy, we don't need to resolve collisions. But we *did* change the layout,
    // so clone it on the way out.
    return cloneLayout(layout);
  } else if (hasCollisions && preventCollision) {
    // If we are preventing collision but not allowing overlap, we need to
    // revert the position of this element so it goes to where it came from, rather
    // than the user's desired location.
    log("Collision prevented on ".concat(l.i, ", reverting."));
    l.x = oldX;
    l.y = oldY;
    l.moved = false;
    return layout; // did not change so don't clone
  } // Move each item that collides away from this element.


  for (var i = 0, len = collisions.length; i < len; i++) {
    var collision = collisions[i];
    log("Resolving collision between ".concat(l.i, " at [").concat(l.x, ",").concat(l.y, "] and ").concat(collision.i, " at [").concat(collision.x, ",").concat(collision.y, "]")); // Short circuit so we can't infinite loop

    if (collision.moved) continue; // Don't move static items - we have to move *this* element away

    if (collision.static) {
      layout = moveElementAwayFromCollision(layout, collision, l, isUserAction, compactType, cols);
    } else {
      layout = moveElementAwayFromCollision(layout, l, collision, isUserAction, compactType, cols);
    }
  }

  return layout;
}
/**
 * This is where the magic needs to happen - given a collision, move an element away from the collision.
 * We attempt to move it up if there's room, otherwise it goes below.
 *
 * @param  {Array} layout            Full layout to modify.
 * @param  {LayoutItem} collidesWith Layout item we're colliding with.
 * @param  {LayoutItem} itemToMove   Layout item we're moving.
 */


function moveElementAwayFromCollision(layout
/*: Layout*/
, collidesWith
/*: LayoutItem*/
, itemToMove
/*: LayoutItem*/
, isUserAction
/*: ?boolean*/
, compactType
/*: CompactType*/
, cols
/*: number*/
)
/*: Layout*/
{
  var compactH = compactType === "horizontal"; // Compact vertically if not set to horizontal

  var compactV = compactType !== "horizontal";
  var preventCollision = collidesWith.static; // we're already colliding (not for static items)
  // If there is enough space above the collision to put this element, move it there.
  // We only do this on the main collision as this can get funky in cascades and cause
  // unwanted swapping behavior.

  if (isUserAction) {
    // Reset isUserAction flag because we're not in the main collision anymore.
    isUserAction = false; // Make a mock item so we don't modify the item here, only modify in moveElement.

    var fakeItem
    /*: LayoutItem*/
    = {
      x: compactH ? Math.max(collidesWith.x - itemToMove.w, 0) : itemToMove.x,
      y: compactV ? Math.max(collidesWith.y - itemToMove.h, 0) : itemToMove.y,
      w: itemToMove.w,
      h: itemToMove.h,
      i: "-1"
    }; // No collision? If so, we can go up there; otherwise, we'll end up moving down as normal

    if (!getFirstCollision(layout, fakeItem)) {
      log("Doing reverse collision on ".concat(itemToMove.i, " up to [").concat(fakeItem.x, ",").concat(fakeItem.y, "]."));
      return moveElement(layout, itemToMove, compactH ? fakeItem.x : undefined, compactV ? fakeItem.y : undefined, isUserAction, preventCollision, compactType, cols);
    }
  }

  return moveElement(layout, itemToMove, compactH ? itemToMove.x + 1 : undefined, compactV ? itemToMove.y + 1 : undefined, isUserAction, preventCollision, compactType, cols);
}
/**
 * Helper to convert a number to a percentage string.
 *
 * @param  {Number} num Any number
 * @return {String}     That number as a percentage.
 */


function perc(num
/*: number*/
)
/*: string*/
{
  return num * 100 + "%";
}

function setTransform(_ref)
/*: Object*/
{
  var top = _ref.top,
      left = _ref.left,
      width = _ref.width,
      height = _ref.height;
  // Replace unitless items with px
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
/*: Object*/
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
/**
 * Get layout items sorted from top left to right and down.
 *
 * @return {Array} Array of layout objects.
 * @return {Array}        Layout, sorted static items first.
 */


function sortLayoutItems(layout
/*: Layout*/
, compactType
/*: CompactType*/
)
/*: Layout*/
{
  if (compactType === "horizontal") return sortLayoutItemsByColRow(layout);
  if (compactType === "vertical") return sortLayoutItemsByRowCol(layout);else return layout;
}
/**
 * Sort layout items by row ascending and column ascending.
 *
 * Does not modify Layout.
 */


function sortLayoutItemsByRowCol(layout
/*: Layout*/
)
/*: Layout*/
{
  // Slice to clone array as sort modifies
  return layout.slice(0).sort(function (a, b) {
    if (a.y > b.y || a.y === b.y && a.x > b.x) {
      return 1;
    } else if (a.y === b.y && a.x === b.x) {
      // Without this, we can get different sort results in IE vs. Chrome/FF
      return 0;
    }

    return -1;
  });
}
/**
 * Sort layout items by column ascending then row ascending.
 *
 * Does not modify Layout.
 */


function sortLayoutItemsByColRow(layout
/*: Layout*/
)
/*: Layout*/
{
  return layout.slice(0).sort(function (a, b) {
    if (a.x > b.x || a.x === b.x && a.y > b.y) {
      return 1;
    }

    return -1;
  });
}
/**
 * Generate a layout using the initialLayout and children as a template.
 * Missing entries will be added, extraneous ones will be truncated.
 *
 * Does not modify initialLayout.
 *
 * @param  {Array}  initialLayout Layout passed in through props.
 * @param  {String} breakpoint    Current responsive breakpoint.
 * @param  {?String} compact      Compaction option.
 * @return {Array}                Working layout.
 */


function synchronizeLayoutWithChildren(initialLayout
/*: Layout*/
, children
/*: ReactChildren*/
, cols
/*: number*/
, compactType
/*: CompactType*/
, allowOverlap
/*: ?boolean*/
)
/*: Layout*/
{
  initialLayout = initialLayout || []; // Generate one layout item per child.

  var layout
  /*: LayoutItem[]*/
  = [];

  _react.default.Children.forEach(children, function (child
  /*: ReactElement<any>*/
  ) {
    // Child may not exist
    if ((child === null || child === void 0 ? void 0 : child.key) == null) return; // Don't overwrite if it already exists.

    var exists = getLayoutItem(initialLayout, String(child.key));

    if (exists) {
      layout.push(cloneLayoutItem(exists));
    } else {
      if (!isProduction && child.props._grid) {
        console.warn("`_grid` properties on children have been deprecated as of React 15.2. " + "Please use `data-grid` or add your properties directly to the `layout`.");
      }

      var g = child.props["data-grid"] || child.props._grid; // Hey, this item has a data-grid property, use it.

      if (g) {
        if (!isProduction) {
          validateLayout([g], "ReactGridLayout.children");
        } // FIXME clone not really necessary here


        layout.push(cloneLayoutItem(_objectSpread(_objectSpread({}, g), {}, {
          i: child.key
        })));
      } else {
        // Nothing provided: ensure this is added to the bottom
        // FIXME clone not really necessary here
        layout.push(cloneLayoutItem({
          w: 1,
          h: 1,
          x: 0,
          y: bottom(layout),
          i: String(child.key)
        }));
      }
    }
  }); // Correct the layout.


  var correctedLayout = correctBounds(layout, {
    cols: cols
  });
  return allowOverlap ? correctedLayout : compact(correctedLayout, compactType, cols);
}
/**
 * Validate a layout. Throws errors.
 *
 * @param  {Array}  layout        Array of layout items.
 * @param  {String} [contextName] Context name for errors.
 * @throw  {Error}                Validation error.
 */


function validateLayout(layout
/*: Layout*/
)
/*: void*/
{
  var contextName
  /*: string*/
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
} // Legacy support for verticalCompact: false


function compactType(props
/*: ?{ verticalCompact: boolean, compactType: CompactType }*/
)
/*: CompactType*/
{
  var _ref3 = props || {},
      verticalCompact = _ref3.verticalCompact,
      compactType = _ref3.compactType;

  return verticalCompact === false ? null : compactType;
}

function log() {
  var _console;

  if (!DEBUG) return; // eslint-disable-next-line no-console

  (_console = console).log.apply(_console, arguments);
}

var noop = function noop() {};

exports.noop = noop;

/***/ }),

/***/ "./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/ReactGridLayout.js")["default"];
module.exports.utils = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/utils.js");
module.exports.Responsive = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/ResponsiveReactGridLayout.js")["default"];
module.exports.Responsive.utils = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/responsiveUtils.js");
module.exports.WidthProvider = __webpack_require__("./.yarn/__virtual__/react-grid-layout-virtual-3d00dcc91b/0/cache/react-grid-layout-npm-1.3.4-e416174768-f56c8c452a.zip/node_modules/react-grid-layout/build/components/WidthProvider.js")["default"];


/***/ }),

/***/ "./.yarn/cache/lodash.isequal-npm-4.5.0-f8b0f64d63-da27515dc5.zip/node_modules/lodash.isequal/index.js":
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
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

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
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

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
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

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
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

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
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

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
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

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
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

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
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
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
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

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
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

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
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
    // Recursively compare arrays (susceptible to call stack limits).
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

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
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
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
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

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
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
  // Assume cyclic values are equal.
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
    // Recursively compare objects (susceptible to call stack limits).
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

    // Non `Object` object instances with different constructors are not equal.
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

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
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

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
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

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
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

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;


/***/ }),

/***/ "./.yarn/cache/react-style-proptype-npm-3.2.2-d7241ef02d-f0e646e148.zip/node_modules/react-style-proptype/src/css-properties.js":
/***/ ((module) => {

// GENERATED DO NOT EDIT
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


/***/ }),

/***/ "./.yarn/cache/react-style-proptype-npm-3.2.2-d7241ef02d-f0e646e148.zip/node_modules/react-style-proptype/src/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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


/***/ })

}]);