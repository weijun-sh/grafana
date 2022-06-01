"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[1783],{

/***/ "./public/app/core/hooks/useCleanup.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useCleanup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");



function useCleanup(stateSelector) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(); //bit of a hack to unburden user from having to wrap stateSelcetor in a useCallback. Otherwise cleanup would happen on every render

  const selectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stateSelector);
  selectorRef.current = stateSelector;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      dispatch((0,_actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__/* .cleanUpAction */ .e)({
        stateSelector: selectorRef.current
      }));
    };
  }, [dispatch]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/Silences.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ unified_Silences)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertManagerPicker.tsx
var AlertManagerPicker = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx
var AlertingPageWrapper = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx
var NoAlertManagerWarning = __webpack_require__("./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx");
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js + 1 modules
var useDebounce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
// EXTERNAL MODULE: ./packages/grafana-data/src/index.ts + 10 modules
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
// EXTERNAL MODULE: ./packages/grafana-runtime/src/index.ts + 8 modules
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/hooks/useCleanup.ts
var useCleanup = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
// EXTERNAL MODULE: ./public/app/plugins/datasource/alertmanager/types.ts
var types = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useURLSearchParams.ts
var useURLSearchParams = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts
var useUnifiedAlertingSelector = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/state/actions.ts + 4 modules
var actions = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/alertmanager.ts
var alertmanager = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/matchers.ts
var utils_matchers = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/misc.ts
var misc = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts
var useCombinedRuleNamespaces = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/rules.ts
var rules = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertLabels.tsx
var AlertLabels = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/DynamicTable.tsx
var DynamicTable = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx
var AlertStateTag = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/silences/MatchedSilencedRules.tsx
var _span;


















const MatchedSilencedRules = () => {
  var _matchedAlertRules$sl;

  const [matchedAlertRules, setMatchedAlertRules] = (0,react.useState)([]);
  const formApi = (0,index_esm/* useFormContext */.Gc)();
  const dispatch = (0,es.useDispatch)();
  const {
    watch
  } = formApi;
  const matchers = watch('matchers');
  const styles = (0,src.useStyles2)(getStyles);
  const columns = useColumns();
  (0,react.useEffect)(() => {
    dispatch((0,actions/* fetchAllPromAndRulerRulesAction */.ei)());
  }, [dispatch]);
  const combinedNamespaces = (0,useCombinedRuleNamespaces/* useCombinedRuleNamespaces */.Zo)();
  (0,useDebounce/* default */.Z)(() => {
    const matchedInstances = combinedNamespaces.flatMap(namespace => {
      return namespace.groups.flatMap(group => {
        return group.rules.map(combinedRule => combinedRule.promRule).filter(rule => (0,rules/* isAlertingRule */.x_)(rule)).flatMap(rule => {
          var _rule$alerts;

          return (0,utils_matchers/* findAlertInstancesWithMatchers */.TZ)((_rule$alerts = rule.alerts) !== null && _rule$alerts !== void 0 ? _rule$alerts : [], matchers);
        });
      });
    });
    setMatchedAlertRules(matchedInstances);
  }, 500, [combinedNamespaces, matchers]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("h4", {
      className: styles.title,
      children: ["Affected alert instances", matchedAlertRules.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(src.Badge, {
        className: styles.badge,
        color: "blue",
        text: matchedAlertRules.length
      }) : null]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.table,
      children: matchers.every(matcher => !matcher.value && !matcher.name) ? _span || (_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: "Add a valid matcher to see affected alerts"
      })) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DynamicTable/* DynamicTable */.t, {
          items: (_matchedAlertRules$sl = matchedAlertRules.slice(0, 5)) !== null && _matchedAlertRules$sl !== void 0 ? _matchedAlertRules$sl : [],
          isExpandable: false,
          cols: columns
        }), matchedAlertRules.length > 5 && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.moreMatches,
          children: ["and ", matchedAlertRules.length - 5, " more"]
        })]
      })
    })]
  });
};

function useColumns() {
  return [{
    id: 'state',
    label: 'State',
    renderCell: function renderStateTag(_ref) {
      let {
        data: {
          matchedInstance
        }
      } = _ref;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(AlertStateTag/* AlertStateTag */.l, {
        state: matchedInstance.state
      });
    },
    size: '160px'
  }, {
    id: 'labels',
    label: 'Labels',
    renderCell: function renderName(_ref2) {
      let {
        data: {
          matchedInstance
        }
      } = _ref2;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(AlertLabels/* AlertLabels */.s, {
        labels: matchedInstance.labels
      });
    },
    size: '250px'
  }, {
    id: 'created',
    label: 'Created',
    renderCell: function renderSummary(_ref3) {
      let {
        data: {
          matchedInstance
        }
      } = _ref3;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: matchedInstance.activeAt.startsWith('0001') ? '-' : (0,grafana_data_src.dateTime)(matchedInstance.activeAt).format('YYYY-MM-DD HH:mm:ss')
      });
    },
    size: '400px'
  }];
}

const getStyles = theme => ({
  table: emotion_css_esm.css`
    max-width: ${theme.breakpoints.values.lg}px;
  `,
  moreMatches: emotion_css_esm.css`
    margin-top: ${theme.spacing(1)};
  `,
  title: emotion_css_esm.css`
    display: flex;
    align-items: center;
  `,
  badge: emotion_css_esm.css`
    margin-left: ${theme.spacing(1)};
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/silences/MatchersField.tsx
const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const MatchersField = _ref => {
  let {
    className
  } = _ref;
  const styles = (0,src.useStyles2)(MatchersField_getStyles);
  const formApi = (0,index_esm/* useFormContext */.Gc)();
  const {
    control,
    register,
    formState: {
      errors
    }
  } = formApi;
  const {
    fields: matchers = [],
    append,
    remove
  } = (0,index_esm/* useFieldArray */.Dq)({
    name: 'matchers'
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: (0,emotion_css_esm.cx)(className, styles.wrapper),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
      label: "Matching labels",
      required: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.matchers,
          children: matchers.map((matcher, index) => {
            var _errors$matchers, _errors$matchers$inde, _errors$matchers2, _errors$matchers2$ind, _errors$matchers2$ind2, _errors$matchers3, _errors$matchers3$ind, _errors$matchers4, _errors$matchers4$ind, _errors$matchers4$ind2;

            return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: styles.row,
              "data-testid": "matcher",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
                label: "Label",
                invalid: !!(errors !== null && errors !== void 0 && (_errors$matchers = errors.matchers) !== null && _errors$matchers !== void 0 && (_errors$matchers$inde = _errors$matchers[index]) !== null && _errors$matchers$inde !== void 0 && _errors$matchers$inde.name),
                error: errors === null || errors === void 0 ? void 0 : (_errors$matchers2 = errors.matchers) === null || _errors$matchers2 === void 0 ? void 0 : (_errors$matchers2$ind = _errors$matchers2[index]) === null || _errors$matchers2$ind === void 0 ? void 0 : (_errors$matchers2$ind2 = _errors$matchers2$ind.name) === null || _errors$matchers2$ind2 === void 0 ? void 0 : _errors$matchers2$ind2.message,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, register(`matchers.${index}.name`, {
                  required: {
                    value: true,
                    message: 'Required.'
                  }
                }), {
                  defaultValue: matcher.name,
                  placeholder: "label"
                }))
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
                label: 'Operator',
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                  control: control,
                  render: _ref2 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref2,
                        field = _objectWithoutPropertiesLoose(_ref2.field, _excluded);

                    return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Select, Object.assign({}, field, {
                      onChange: value => onChange(value.value),
                      className: styles.matcherOptions,
                      options: alertmanager/* matcherFieldOptions */.tA,
                      "aria-label": "operator"
                    }));
                  },
                  defaultValue: matcher.operator || alertmanager/* matcherFieldOptions.0.value */.tA[0].value,
                  name: `matchers.${index}.operator`,
                  rules: {
                    required: {
                      value: true,
                      message: 'Required.'
                    }
                  }
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
                label: "Value",
                invalid: !!(errors !== null && errors !== void 0 && (_errors$matchers3 = errors.matchers) !== null && _errors$matchers3 !== void 0 && (_errors$matchers3$ind = _errors$matchers3[index]) !== null && _errors$matchers3$ind !== void 0 && _errors$matchers3$ind.value),
                error: errors === null || errors === void 0 ? void 0 : (_errors$matchers4 = errors.matchers) === null || _errors$matchers4 === void 0 ? void 0 : (_errors$matchers4$ind = _errors$matchers4[index]) === null || _errors$matchers4$ind === void 0 ? void 0 : (_errors$matchers4$ind2 = _errors$matchers4$ind.value) === null || _errors$matchers4$ind2 === void 0 ? void 0 : _errors$matchers4$ind2.message,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, register(`matchers.${index}.value`, {
                  required: {
                    value: true,
                    message: 'Required.'
                  }
                }), {
                  defaultValue: matcher.value,
                  placeholder: "value"
                }))
              }), matchers.length > 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(src.IconButton, {
                className: styles.removeButton,
                tooltip: "Remove matcher",
                name: 'trash-alt',
                onClick: () => remove(index),
                children: "Remove"
              })]
            }, `${matcher.id}`);
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          type: "button",
          icon: "plus",
          variant: "secondary",
          onClick: () => {
            const newMatcher = {
              name: '',
              value: '',
              operator: types/* MatcherOperator.equal */._M.equal
            };
            append(newMatcher);
          },
          children: "Add matcher"
        })]
      })
    })
  });
};

const MatchersField_getStyles = theme => {
  return {
    wrapper: emotion_css_esm.css`
      margin-top: ${theme.spacing(2)};
    `,
    row: emotion_css_esm.css`
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      background-color: ${theme.colors.background.secondary};
      padding: ${theme.spacing(1)} ${theme.spacing(1)} 0 ${theme.spacing(1)};
      & > * + * {
        margin-left: ${theme.spacing(2)};
      }
    `,
    removeButton: emotion_css_esm.css`
      margin-left: ${theme.spacing(1)};
      margin-top: ${theme.spacing(2.5)};
    `,
    matcherOptions: emotion_css_esm.css`
      min-width: 140px;
    `,
    matchers: emotion_css_esm.css`
      max-width: ${theme.breakpoints.values.sm}px;
      margin: ${theme.spacing(1)} 0;
      padding-top: ${theme.spacing(0.5)};
    `
  };
};

/* harmony default export */ const silences_MatchersField = (MatchersField);
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/silences/SilencePeriod.tsx






const SilencePeriod = () => {
  const {
    control,
    getValues
  } = (0,index_esm/* useFormContext */.Gc)();
  const styles = (0,src.useStyles)(SilencePeriod_getStyles);
  const {
    field: {
      onChange: onChangeStartsAt,
      value: startsAt
    },
    fieldState: {
      invalid: startsAtInvalid
    }
  } = (0,index_esm/* useController */.bc)({
    name: 'startsAt',
    control,
    rules: {
      validate: value => getValues().endsAt > value
    }
  });
  const {
    field: {
      onChange: onChangeEndsAt,
      value: endsAt
    },
    fieldState: {
      invalid: endsAtInvalid
    }
  } = (0,index_esm/* useController */.bc)({
    name: 'endsAt',
    control,
    rules: {
      validate: value => getValues().startsAt < value
    }
  });
  const {
    field: {
      onChange: onChangeTimeZone,
      value: timeZone
    }
  } = (0,index_esm/* useController */.bc)({
    name: 'timeZone',
    control
  });
  const invalid = startsAtInvalid || endsAtInvalid;
  const from = (0,grafana_data_src.dateTime)(startsAt);
  const to = (0,grafana_data_src.dateTime)(endsAt);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
    className: styles.timeRange,
    label: "Silence start and end",
    error: invalid ? 'To is before or the same as from' : '',
    invalid: invalid,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.TimeRangeInput, {
      value: {
        from,
        to,
        raw: {
          from,
          to
        }
      },
      timeZone: timeZone,
      onChange: newValue => {
        onChangeStartsAt((0,grafana_data_src.dateTime)(newValue.from));
        onChangeEndsAt((0,grafana_data_src.dateTime)(newValue.to));
      },
      onChangeTimeZone: newValue => onChangeTimeZone(newValue),
      hideTimeZone: false,
      hideQuickRanges: true,
      placeholder: 'Select time range'
    })
  });
};

const SilencePeriod_getStyles = theme => ({
  timeRange: emotion_css_esm.css`
    width: 400px;
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/silences/SilencesEditor.tsx
var _SilencePeriod, _MatchersField, _MatchedSilencedRules, _Button, _Button2;
























const defaultsFromQuery = searchParams => {
  const defaults = {};
  const comment = searchParams.get('comment');
  const matchers = searchParams.getAll('matcher');
  const formMatchers = (0,utils_matchers/* parseQueryParamMatchers */.RT)(matchers);

  if (formMatchers.length) {
    defaults.matchers = formMatchers.map(alertmanager/* matcherToMatcherField */.cm);
  }

  if (comment) {
    defaults.comment = comment;
  }

  return defaults;
};

const getDefaultFormValues = (searchParams, silence) => {
  const now = new Date();

  if (silence) {
    var _silence$matchers;

    const isExpired = Date.parse(silence.endsAt) < Date.now();
    const interval = isExpired ? {
      start: now,
      end: (0,grafana_data_src.addDurationToDate)(now, {
        hours: 2
      })
    } : {
      start: new Date(silence.startsAt),
      end: new Date(silence.endsAt)
    };
    return {
      id: silence.id,
      startsAt: interval.start.toISOString(),
      endsAt: interval.end.toISOString(),
      comment: silence.comment,
      createdBy: silence.createdBy,
      duration: (0,grafana_data_src.intervalToAbbreviatedDurationString)(interval),
      isRegex: false,
      matchers: ((_silence$matchers = silence.matchers) === null || _silence$matchers === void 0 ? void 0 : _silence$matchers.map(alertmanager/* matcherToMatcherField */.cm)) || [],
      matcherName: '',
      matcherValue: '',
      timeZone: grafana_data_src.DefaultTimeZone
    };
  } else {
    const endsAt = (0,grafana_data_src.addDurationToDate)(now, {
      hours: 2
    }); // Default time period is now + 2h

    return Object.assign({
      id: '',
      startsAt: now.toISOString(),
      endsAt: endsAt.toISOString(),
      comment: `created ${(0,grafana_data_src.dateTime)().format('YYYY-MM-DD HH:mm')}`,
      createdBy: grafana_runtime_src.config.bootData.user.name,
      duration: '2h',
      isRegex: false,
      matchers: [{
        name: '',
        value: '',
        operator: types/* MatcherOperator.equal */._M.equal
      }],
      matcherName: '',
      matcherValue: '',
      timeZone: grafana_data_src.DefaultTimeZone
    }, defaultsFromQuery(searchParams));
  }
};

const SilencesEditor = _ref => {
  var _formState$errors$com;

  let {
    silence,
    alertManagerSourceName
  } = _ref;
  const [urlSearchParams] = (0,useURLSearchParams/* useURLSearchParams */.j)();
  const defaultValues = (0,react.useMemo)(() => getDefaultFormValues(urlSearchParams, silence), [silence, urlSearchParams]);
  const formAPI = (0,index_esm/* useForm */.cI)({
    defaultValues
  });
  const dispatch = (0,es.useDispatch)();
  const styles = (0,src.useStyles2)(SilencesEditor_getStyles);
  const {
    loading
  } = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.updateSilence);
  (0,useCleanup/* useCleanup */.x)(state => state.unifiedAlerting.updateSilence);
  const {
    register,
    handleSubmit,
    formState,
    watch,
    setValue,
    clearErrors
  } = formAPI;

  const onSubmit = data => {
    const {
      id,
      startsAt,
      endsAt,
      comment,
      createdBy,
      matchers: matchersFields
    } = data;
    const matchers = matchersFields.map(alertmanager/* matcherFieldToMatcher */._J);
    const payload = (0,lodash.pickBy)({
      id,
      startsAt,
      endsAt,
      comment,
      createdBy,
      matchers
    }, value => !!value);
    dispatch((0,actions/* createOrUpdateSilenceAction */.QY)({
      alertManagerSourceName,
      payload,
      exitOnSave: true,
      successMessage: `Silence ${payload.id ? 'updated' : 'created'}`
    }));
  };

  const duration = watch('duration');
  const startsAt = watch('startsAt');
  const endsAt = watch('endsAt'); // Keep duration and endsAt in sync

  const [prevDuration, setPrevDuration] = (0,react.useState)(duration);
  (0,useDebounce/* default */.Z)(() => {
    if ((0,grafana_data_src.isValidDate)(startsAt) && (0,grafana_data_src.isValidDate)(endsAt)) {
      if (duration !== prevDuration) {
        setValue('endsAt', (0,grafana_data_src.dateTime)((0,grafana_data_src.addDurationToDate)(new Date(startsAt), (0,grafana_data_src.parseDuration)(duration))).toISOString());
        setPrevDuration(duration);
      } else {
        const startValue = new Date(startsAt).valueOf();
        const endValue = new Date(endsAt).valueOf();

        if (endValue > startValue) {
          const nextDuration = (0,grafana_data_src.intervalToAbbreviatedDurationString)({
            start: new Date(startsAt),
            end: new Date(endsAt)
          });
          setValue('duration', nextDuration);
          setPrevDuration(nextDuration);
        }
      }
    }
  }, 700, [clearErrors, duration, endsAt, prevDuration, setValue, startsAt]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FormProvider */.RV, Object.assign({}, formAPI, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(src.FieldSet, {
        label: `${silence ? 'Recreate silence' : 'Create silence'}`,
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: (0,emotion_css_esm.cx)(styles.flexRow, styles.silencePeriod),
          children: [_SilencePeriod || (_SilencePeriod = /*#__PURE__*/(0,jsx_runtime.jsx)(SilencePeriod, {})), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "Duration",
            invalid: !!formState.errors.duration,
            error: formState.errors.duration && (formState.errors.duration.type === 'required' ? 'Required field' : formState.errors.duration.message),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({
              className: styles.createdBy
            }, register('duration', {
              validate: value => Object.keys((0,grafana_data_src.parseDuration)(value)).length === 0 ? 'Invalid duration. Valid example: 1d 4h (Available units: y, M, w, d, h, m, s)' : undefined
            }), {
              id: "duration"
            }))
          })]
        }), _MatchersField || (_MatchersField = /*#__PURE__*/(0,jsx_runtime.jsx)(silences_MatchersField, {})), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
          className: (0,emotion_css_esm.cx)(styles.field, styles.textArea),
          label: "Comment",
          required: true,
          error: (_formState$errors$com = formState.errors.comment) === null || _formState$errors$com === void 0 ? void 0 : _formState$errors$com.message,
          invalid: !!formState.errors.comment,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.TextArea, Object.assign({}, register('comment', {
            required: {
              value: true,
              message: 'Required.'
            }
          }), {
            rows: 5,
            placeholder: "Details about the silence"
          }))
        }), _MatchedSilencedRules || (_MatchedSilencedRules = /*#__PURE__*/(0,jsx_runtime.jsx)(MatchedSilencedRules, {}))]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.flexRow,
        children: [loading && (_Button || (_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          disabled: true,
          icon: "fa fa-spinner",
          variant: "primary",
          children: "Saving..."
        }))), !loading && (_Button2 || (_Button2 = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          type: "submit",
          children: "Submit"
        }))), /*#__PURE__*/(0,jsx_runtime.jsx)(src.LinkButton, {
          href: (0,misc/* makeAMLink */.eQ)('alerting/silences', alertManagerSourceName),
          variant: 'secondary',
          fill: "outline",
          children: "Cancel"
        })]
      })]
    })
  }));
};

const SilencesEditor_getStyles = theme => ({
  field: emotion_css_esm.css`
    margin: ${theme.spacing(1, 0)};
  `,
  textArea: emotion_css_esm.css`
    max-width: ${theme.breakpoints.values.sm}px;
  `,
  createdBy: emotion_css_esm.css`
    width: 200px;
  `,
  flexRow: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > * {
      margin-right: ${theme.spacing(1)};
    }
  `,
  silencePeriod: emotion_css_esm.css`
    max-width: ${theme.breakpoints.values.sm}px;
  `
});

/* harmony default export */ const silences_SilencesEditor = (SilencesEditor);
// EXTERNAL MODULE: ./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js
var experimental = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
// EXTERNAL MODULE: ./public/app/core/hooks/useQueryParams.ts
var useQueryParams = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
// EXTERNAL MODULE: ./public/app/core/services/context_srv.ts
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/access-control.ts
var access_control = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/Authorize.tsx
var Authorize = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
// EXTERNAL MODULE: ./packages/grafana-ui/src/components/Button/index.ts + 3 modules
var Button = __webpack_require__("./packages/grafana-ui/src/components/Button/index.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rules/ActionButton.tsx
const ActionButton_excluded = ["className"];

function ActionButton_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ActionButton = _ref => {
  let {
    className
  } = _ref,
      restProps = ActionButton_objectWithoutPropertiesLoose(_ref, ActionButton_excluded);

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* Button */.zx, Object.assign({
    variant: "secondary",
    size: "xs",
    className: (0,emotion_css_esm.cx)((0,src.useStyles)(getStyle), className)
  }, restProps));
};
const getStyle = theme => emotion_css_esm.css`
  height: 24px;
  font-size: ${theme.typography.size.sm};
`;
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/ActionIcon.tsx
var ActionIcon = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/silences/Matchers.tsx
var Matchers = __webpack_require__("./public/app/features/alerting/unified/components/silences/Matchers.tsx");
// EXTERNAL MODULE: ./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/silences/NoSilencesCTA.tsx
var _CallToActionCard;








const NoSilencesSplash = _ref => {
  let {
    alertManagerSourceName
  } = _ref;
  const permissions = (0,access_control/* getInstancesPermissions */.QX)(alertManagerSourceName);

  if (context_srv/* contextSrv.hasAccess */.Vt.hasAccess(permissions.create, context_srv/* contextSrv.isEditor */.Vt.isEditor)) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyListCTA/* default */.Z, {
      title: "You haven't created any silences yet",
      buttonIcon: "bell-slash",
      buttonLink: (0,misc/* makeAMLink */.eQ)('alerting/silence/new', alertManagerSourceName),
      buttonTitle: "New silence"
    });
  }

  return _CallToActionCard || (_CallToActionCard = /*#__PURE__*/(0,jsx_runtime.jsx)(src.CallToActionCard, {
    callToActionElement: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {}),
    message: "No silences found."
  }));
};
// EXTERNAL MODULE: ./public/app/features/alerting/unified/styles/table.ts
var table = __webpack_require__("./public/app/features/alerting/unified/styles/table.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/CollapseToggle.tsx
var CollapseToggle = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx
var AmAlertStateTag = __webpack_require__("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/silences/SilencedAlertsTableRow.tsx
var _td;









const SilencedAlertsTableRow = _ref => {
  let {
    alert,
    className
  } = _ref;
  const [isCollapsed, setIsCollapsed] = (0,react.useState)(true);
  const duration = (0,grafana_data_src.intervalToAbbreviatedDurationString)({
    start: new Date(alert.startsAt),
    end: new Date(alert.endsAt)
  });
  const alertName = Object.entries(alert.labels).reduce((name, _ref2) => {
    let [labelKey, labelValue] = _ref2;

    if (labelKey === 'alertname' || labelKey === '__alert_rule_title__') {
      name = labelValue;
    }

    return name;
  }, '');
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
      className: className,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(CollapseToggle/* CollapseToggle */.U, {
          isCollapsed: isCollapsed,
          onToggle: collapsed => setIsCollapsed(collapsed)
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(AmAlertStateTag/* AmAlertStateTag */.G, {
          state: alert.status.state
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
        children: ["for ", duration, " seconds"]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        children: alertName
      })]
    }), !isCollapsed && /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
      className: className,
      children: [_td || (_td = /*#__PURE__*/(0,jsx_runtime.jsx)("td", {})), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
        colSpan: 5,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(AlertLabels/* AlertLabels */.s, {
          labels: alert.labels
        })
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/silences/SilencedAlertsTable.tsx
var _col, _thead;









const SilencedAlertsTable = _ref => {
  let {
    silencedAlerts
  } = _ref;
  const tableStyles = (0,src.useStyles2)(table/* getAlertTableStyles */.D);
  const styles = (0,src.useStyles2)(SilencedAlertsTable_getStyles);

  if (!!silencedAlerts.length) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
      className: (0,emotion_css_esm.cx)(tableStyles.table, styles.tableMargin),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("colgroup", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("col", {
          className: tableStyles.colExpand
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("col", {
          className: styles.colState
        }), _col || (_col = /*#__PURE__*/(0,jsx_runtime.jsx)("col", {})), /*#__PURE__*/(0,jsx_runtime.jsx)("col", {
          className: styles.colName
        })]
      }), _thead || (_thead = /*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("th", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: "State"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: "Alert name"
          })]
        })
      })), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
        children: silencedAlerts.map((alert, index) => {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(SilencedAlertsTableRow, {
            alert: alert,
            className: index % 2 === 0 ? tableStyles.evenRow : ''
          }, alert.fingerprint);
        })
      })]
    });
  } else {
    return null;
  }
};

const SilencedAlertsTable_getStyles = theme => ({
  tableMargin: emotion_css_esm.css`
    margin-bottom: ${theme.spacing(1)};
  `,
  colState: emotion_css_esm.css`
    width: 110px;
  `,
  colName: emotion_css_esm.css`
    width: 65%;
  `
});

/* harmony default export */ const silences_SilencedAlertsTable = (SilencedAlertsTable);
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/silences/SilenceDetails.tsx







const SilenceDetails = _ref => {
  let {
    silence
  } = _ref;
  const {
    startsAt,
    endsAt,
    comment,
    createdBy,
    silencedAlerts
  } = silence;
  const styles = (0,src.useStyles2)(SilenceDetails_getStyles);
  const dateDisplayFormat = 'YYYY-MM-DD HH:mm';
  const startsAtDate = grafana_data_src.dateMath.parse(startsAt);
  const endsAtDate = grafana_data_src.dateMath.parse(endsAt);
  const duration = (0,grafana_data_src.intervalToAbbreviatedDurationString)({
    start: new Date(startsAt),
    end: new Date(endsAt)
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.title,
      children: "Comment"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: comment
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.title,
      children: "Schedule"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: `${startsAtDate === null || startsAtDate === void 0 ? void 0 : startsAtDate.format(dateDisplayFormat)} - ${endsAtDate === null || endsAtDate === void 0 ? void 0 : endsAtDate.format(dateDisplayFormat)}`
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.title,
      children: "Duration"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [" ", duration]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.title,
      children: "Created by"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      children: [" ", createdBy]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.title,
      children: "Affected alerts"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(silences_SilencedAlertsTable, {
      silencedAlerts: silencedAlerts
    })]
  });
};

const SilenceDetails_getStyles = theme => ({
  container: emotion_css_esm.css`
    display: grid;
    grid-template-columns: 1fr 9fr;
    grid-row-gap: 1rem;
  `,
  title: emotion_css_esm.css`
    color: ${theme.colors.text.primary};
  `,
  row: emotion_css_esm.css`
    margin: ${theme.spacing(1, 0)};
  `
});
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/StateTag.tsx
var StateTag = __webpack_require__("./public/app/features/alerting/unified/components/StateTag.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/silences/SilenceStateTag.tsx




const silenceStateToState = {
  [types/* SilenceState.Active */.As.Active]: 'good',
  [types/* SilenceState.Expired */.As.Expired]: 'neutral',
  [types/* SilenceState.Pending */.As.Pending]: 'neutral'
};
const SilenceStateTag = _ref => {
  let {
    state
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StateTag/* StateTag */.i, {
    state: silenceStateToState[state],
    children: state
  });
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/silences/SilencesFilter.tsx
var _Label, _Icon;












const stateOptions = Object.entries(types/* SilenceState */.As).map(_ref => {
  let [key, value] = _ref;
  return {
    label: key,
    value
  };
});

const getQueryStringKey = () => (0,lodash.uniqueId)('query-string-');

const SilencesFilter = () => {
  const [queryStringKey, setQueryStringKey] = (0,react.useState)(getQueryStringKey());
  const [queryParams, setQueryParams] = (0,useQueryParams/* useQueryParams */.K)();
  const {
    queryString,
    silenceState
  } = (0,misc/* getSilenceFiltersFromUrlParams */.pF)(queryParams);
  const styles = (0,src.useStyles2)(SilencesFilter_getStyles);
  const handleQueryStringChange = (0,lodash.debounce)(e => {
    const target = e.target;
    setQueryParams({
      queryString: target.value || null
    });
  }, 400);

  const handleSilenceStateChange = state => {
    setQueryParams({
      silenceState: state
    });
  };

  const clearFilters = () => {
    setQueryParams({
      queryString: null,
      silenceState: null
    });
    setTimeout(() => setQueryStringKey(getQueryStringKey()));
  };

  const inputInvalid = queryString && queryString.length > 3 ? (0,alertmanager/* parseMatchers */.Zh)(queryString).length === 0 : false;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.flexRow,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
      className: styles.rowChild,
      label: _Label || (_Label = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Label, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.Stack, {
          gap: 0.5,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: "Search by matchers"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Tooltip, {
            content: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              children: ["Filter silences by matchers using a comma separated list of matchers, ie:", /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
                children: `severity=critical, instance=~cluster-us-.+`
              })]
            }),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
              name: "info-circle",
              size: "sm"
            })
          })]
        })
      })),
      invalid: inputInvalid,
      error: inputInvalid ? 'Query must use valid matcher syntax' : null,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, {
        className: styles.searchInput,
        prefix: _Icon || (_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
          name: "search"
        })),
        onChange: handleQueryStringChange,
        defaultValue: queryString !== null && queryString !== void 0 ? queryString : '',
        placeholder: "Search",
        "data-testid": "search-query-input"
      }, queryStringKey)
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
      className: styles.rowChild,
      label: "State",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.RadioButtonGroup, {
        options: stateOptions,
        value: silenceState,
        onChange: handleSilenceStateChange
      })
    }), (queryString || silenceState) && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.rowChild,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
        variant: "secondary",
        icon: "times",
        onClick: clearFilters,
        children: "Clear filters"
      })
    })]
  });
};

const SilencesFilter_getStyles = theme => ({
  searchInput: emotion_css_esm.css`
    width: 360px;
  `,
  flexRow: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: ${theme.spacing(2)};
    border-bottom: 1px solid ${theme.colors.border.strong};
  `,
  rowChild: emotion_css_esm.css`
    margin-right: ${theme.spacing(1)};
    margin-bottom: 0;
    max-height: 52px;
  `,
  fieldLabel: emotion_css_esm.css`
    font-size: 12px;
    font-weight: 500;
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/silences/SilencesTable.tsx
var _SilencesFilter, SilencesTable_span, _br, _ActionButton;



























const SilencesTable = _ref => {
  let {
    silences,
    alertManagerAlerts,
    alertManagerSourceName
  } = _ref;
  const styles = (0,src.useStyles2)(SilencesTable_getStyles);
  const [queryParams] = (0,useQueryParams/* useQueryParams */.K)();
  const filteredSilences = useFilteredSilences(silences);
  const permissions = (0,access_control/* getInstancesPermissions */.QX)(alertManagerSourceName);
  const {
    silenceState
  } = (0,misc/* getSilenceFiltersFromUrlParams */.pF)(queryParams);
  const showExpiredSilencesBanner = !!filteredSilences.length && (silenceState === undefined || silenceState === types/* SilenceState.Expired */.As.Expired);
  const columns = SilencesTable_useColumns(alertManagerSourceName);
  const items = (0,react.useMemo)(() => {
    const findSilencedAlerts = id => {
      return alertManagerAlerts.filter(alert => alert.status.silencedBy.includes(id));
    };

    return filteredSilences.map(silence => {
      const silencedAlerts = findSilencedAlerts(silence.id);
      return {
        id: silence.id,
        data: Object.assign({}, silence, {
          silencedAlerts
        })
      };
    });
  }, [filteredSilences, alertManagerAlerts]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    "data-testid": "silences-table",
    children: [!!silences.length && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [_SilencesFilter || (_SilencesFilter = /*#__PURE__*/(0,jsx_runtime.jsx)(SilencesFilter, {})), /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
        actions: [permissions.create],
        fallback: context_srv/* contextSrv.isEditor */.Vt.isEditor,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: styles.topButtonContainer,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Link, {
            href: (0,misc/* makeAMLink */.eQ)('/alerting/silence/new', alertManagerSourceName),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
              className: styles.addNewSilence,
              icon: "plus",
              children: "New Silence"
            })
          })
        })
      }), !!items.length ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DynamicTable/* DynamicTable */.t, {
          items: items,
          cols: columns,
          isExpandable: true,
          renderExpandedContent: _ref2 => {
            let {
              data
            } = _ref2;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(SilenceDetails, {
              silence: data
            });
          }
        }), showExpiredSilencesBanner && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.callout,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
            className: styles.calloutIcon,
            name: "info-circle"
          }), SilencesTable_span || (SilencesTable_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: "Expired silences are automatically deleted after 5 days."
          }))]
        })]
      }) : 'No matching silences found']
    }), !silences.length && /*#__PURE__*/(0,jsx_runtime.jsx)(NoSilencesSplash, {
      alertManagerSourceName: alertManagerSourceName
    })]
  });
};

const useFilteredSilences = silences => {
  const [queryParams] = (0,useQueryParams/* useQueryParams */.K)();
  return (0,react.useMemo)(() => {
    const {
      queryString,
      silenceState
    } = (0,misc/* getSilenceFiltersFromUrlParams */.pF)(queryParams);
    const silenceIdsString = queryParams === null || queryParams === void 0 ? void 0 : queryParams.silenceIds;
    return silences.filter(silence => {
      if (typeof silenceIdsString === 'string') {
        const idsIncluded = silenceIdsString.split(',').includes(silence.id);

        if (!idsIncluded) {
          return false;
        }
      }

      if (queryString) {
        const matchers = (0,alertmanager/* parseMatchers */.Zh)(queryString);
        const matchersMatch = matchers.every(matcher => {
          var _silence$matchers;

          return (_silence$matchers = silence.matchers) === null || _silence$matchers === void 0 ? void 0 : _silence$matchers.some(_ref3 => {
            let {
              name,
              value,
              isEqual,
              isRegex
            } = _ref3;
            return matcher.name === name && matcher.value === value && matcher.isEqual === isEqual && matcher.isRegex === isRegex;
          });
        });

        if (!matchersMatch) {
          return false;
        }
      }

      if (silenceState) {
        const stateMatches = silence.status.state === silenceState;

        if (!stateMatches) {
          return false;
        }
      }

      return true;
    });
  }, [queryParams, silences]);
};

const SilencesTable_getStyles = theme => ({
  topButtonContainer: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `,
  addNewSilence: emotion_css_esm.css`
    margin: ${theme.spacing(2, 0)};
  `,
  callout: emotion_css_esm.css`
    background-color: ${theme.colors.background.secondary};
    border-top: 3px solid ${theme.colors.info.border};
    border-radius: 2px;
    height: 62px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${theme.spacing(2)};

    & > * {
      margin-left: ${theme.spacing(1)};
    }
  `,
  calloutIcon: emotion_css_esm.css`
    color: ${theme.colors.info.text};
  `,
  editButton: emotion_css_esm.css`
    margin-left: ${theme.spacing(0.5)};
  `
});

function SilencesTable_useColumns(alertManagerSourceName) {
  const dispatch = (0,es.useDispatch)();
  const styles = (0,src.useStyles2)(SilencesTable_getStyles);
  const permissions = (0,access_control/* getInstancesPermissions */.QX)(alertManagerSourceName);
  return (0,react.useMemo)(() => {
    const handleExpireSilenceClick = id => {
      dispatch((0,actions/* expireSilenceAction */.yO)(alertManagerSourceName, id));
    };

    const showActions = context_srv/* contextSrv.hasAccess */.Vt.hasAccess(permissions.update, context_srv/* contextSrv.isEditor */.Vt.isEditor);
    const columns = [{
      id: 'state',
      label: 'State',
      renderCell: function renderStateTag(_ref4) {
        let {
          data: {
            status
          }
        } = _ref4;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(SilenceStateTag, {
          state: status.state
        });
      },
      size: '88px'
    }, {
      id: 'matchers',
      label: 'Matching labels',
      renderCell: function renderMatchers(_ref5) {
        let {
          data: {
            matchers
          }
        } = _ref5;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Matchers/* Matchers */.g, {
          matchers: matchers || []
        });
      },
      size: 9
    }, {
      id: 'alerts',
      label: 'Alerts',
      renderCell: function renderSilencedAlerts(_ref6) {
        let {
          data: {
            silencedAlerts
          }
        } = _ref6;
        return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          "data-testid": "alerts",
          children: silencedAlerts.length
        });
      },
      size: 1
    }, {
      id: 'schedule',
      label: 'Schedule',
      renderCell: function renderSchedule(_ref7) {
        let {
          data: {
            startsAt,
            endsAt
          }
        } = _ref7;
        const startsAtDate = grafana_data_src.dateMath.parse(startsAt);
        const endsAtDate = grafana_data_src.dateMath.parse(endsAt);
        const dateDisplayFormat = 'YYYY-MM-DD HH:mm';
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [' ', startsAtDate === null || startsAtDate === void 0 ? void 0 : startsAtDate.format(dateDisplayFormat), " ", '-', _br || (_br = /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})), endsAtDate === null || endsAtDate === void 0 ? void 0 : endsAtDate.format(dateDisplayFormat)]
        });
      },
      size: '150px'
    }];

    if (showActions) {
      columns.push({
        id: 'actions',
        label: 'Actions',
        renderCell: function renderActions(_ref8) {
          let {
            data: silence
          } = _ref8;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(experimental.Stack, {
            gap: 0.5,
            children: [silence.status.state === 'expired' ? /*#__PURE__*/(0,jsx_runtime.jsx)(src.Link, {
              href: (0,misc/* makeAMLink */.eQ)(`/alerting/silence/${silence.id}/edit`, alertManagerSourceName),
              children: _ActionButton || (_ActionButton = /*#__PURE__*/(0,jsx_runtime.jsx)(ActionButton, {
                icon: "sync",
                children: "Recreate"
              }))
            }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ActionButton, {
              icon: "bell",
              onClick: () => handleExpireSilenceClick(silence.id),
              children: "Unsilence"
            }), silence.status.state !== 'expired' && /*#__PURE__*/(0,jsx_runtime.jsx)(ActionIcon/* ActionIcon */.A, {
              className: styles.editButton,
              to: (0,misc/* makeAMLink */.eQ)(`/alerting/silence/${silence.id}/edit`, alertManagerSourceName),
              icon: "pen",
              tooltip: "edit"
            })]
          });
        },
        size: '147px'
      });
    }

    return columns;
  }, [alertManagerSourceName, dispatch, styles, permissions]);
}

/* harmony default export */ const silences_SilencesTable = (SilencesTable);
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts
var useAlertManagerSourceName = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts
var useAlertManagerSources = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/constants.ts
var constants = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/redux.ts
var redux = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/Silences.tsx
var _Redirect, _LoadingPlaceholder;



















const Silences = () => {
  var _alertsRequest$error, _alertsRequest$result;

  const alertManagers = (0,useAlertManagerSources/* useAlertManagersByPermission */.k)('instance');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,useAlertManagerSourceName/* useAlertManagerSourceName */.k)(alertManagers);
  const dispatch = (0,es.useDispatch)();
  const silences = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.silences);
  const alertsRequests = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.amAlerts);
  const alertsRequest = alertManagerSourceName ? alertsRequests[alertManagerSourceName] || redux/* initialAsyncRequestState */.oq : undefined;
  const location = (0,react_router/* useLocation */.TH)();
  const isRoot = location.pathname.endsWith('/alerting/silences');
  (0,react.useEffect)(() => {
    function fetchAll() {
      if (alertManagerSourceName) {
        dispatch((0,actions/* fetchSilencesAction */.je)(alertManagerSourceName));
        dispatch((0,actions/* fetchAmAlertsAction */.dB)(alertManagerSourceName));
      }
    }

    fetchAll();
    const interval = setInterval(() => fetchAll, constants/* SILENCES_POLL_INTERVAL_MS */.cm);
    return () => {
      clearInterval(interval);
    };
  }, [alertManagerSourceName, dispatch]);
  const {
    result,
    loading,
    error
  } = alertManagerSourceName && silences[alertManagerSourceName] || redux/* initialAsyncRequestState */.oq;
  const getSilenceById = (0,react.useCallback)(id => result && result.find(silence => silence.id === id), [result]);

  if (!alertManagerSourceName) {
    return isRoot ? /*#__PURE__*/(0,jsx_runtime.jsx)(AlertingPageWrapper/* AlertingPageWrapper */.J, {
      pageId: "silences",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(NoAlertManagerWarning/* NoAlertManagerWarning */.I, {
        availableAlertManagers: alertManagers
      })
    }) : _Redirect || (_Redirect = /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
      to: "/alerting/silences"
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(AlertingPageWrapper/* AlertingPageWrapper */.J, {
    pageId: "silences",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AlertManagerPicker/* AlertManagerPicker */.P, {
      disabled: !isRoot,
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName,
      dataSources: alertManagers
    }), error && !loading && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Alert, {
      severity: "error",
      title: "Error loading silences",
      children: error.message || 'Unknown error.'
    }), (alertsRequest === null || alertsRequest === void 0 ? void 0 : alertsRequest.error) && !(alertsRequest !== null && alertsRequest !== void 0 && alertsRequest.loading) && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Alert, {
      severity: "error",
      title: "Error loading Alertmanager alerts",
      children: ((_alertsRequest$error = alertsRequest.error) === null || _alertsRequest$error === void 0 ? void 0 : _alertsRequest$error.message) || 'Unknown error.'
    }), loading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
      text: "loading silences..."
    }))), result && !error && /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        exact: true,
        path: "/alerting/silences",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(silences_SilencesTable, {
          silences: result,
          alertManagerAlerts: (_alertsRequest$result = alertsRequest === null || alertsRequest === void 0 ? void 0 : alertsRequest.result) !== null && _alertsRequest$result !== void 0 ? _alertsRequest$result : [],
          alertManagerSourceName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        exact: true,
        path: "/alerting/silence/new",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(silences_SilencesEditor, {
          alertManagerSourceName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        exact: true,
        path: "/alerting/silence/:id/edit",
        children: _ref => {
          let {
            match
          } = _ref;
          return (match === null || match === void 0 ? void 0 : match.params.id) && /*#__PURE__*/(0,jsx_runtime.jsx)(silences_SilencesEditor, {
            silence: getSilenceById(match.params.id),
            alertManagerSourceName: alertManagerSourceName
          });
        }
      })]
    })]
  });
};

/* harmony default export */ const unified_Silences = ((0,src.withErrorBoundary)(Silences, {
  style: 'page'
}));

/***/ }),

/***/ "./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ AlertingPageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AlertingPageWrapper = _ref => {
  let {
    children,
    pageId,
    isLoading
  } = _ref;
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__/* .getNavModel */ .h)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.navIndex), pageId);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Contents */ .Z.Contents, {
      isLoading: isLoading,
      children: children
    })
  });
};

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

/***/ "./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ NoAlertManagerWarning)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _Alert2, _OtherAlertManagersAv, _NoAlertManagersAvail;









const NoAlertManagersAvailable = () => _Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
  title: "No Alertmanager found",
  severity: "warning",
  children: "We could not find any external Alertmanagers and you may not have access to the built-in Grafana Alertmanager."
}));

const OtherAlertManagersAvailable = () => _Alert2 || (_Alert2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
  title: "Selected Alertmanager not found. Select a different Alertmanager.",
  severity: "warning",
  children: "Selected Alertmanager no longer exists or you may not have permission to access it."
}));

const NoAlertManagerWarning = _ref => {
  let {
    availableAlertManagers
  } = _ref;
  const [_, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_2__/* .useAlertManagerSourceName */ .k)(availableAlertManagers);
  const hasOtherAMs = availableAlertManagers.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: hasOtherAMs ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__/* .AlertManagerPicker */ .P, {
        onChange: setAlertManagerSourceName,
        dataSources: availableAlertManagers
      }), _OtherAlertManagersAv || (_OtherAlertManagersAv = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(OtherAlertManagersAvailable, {}))]
    }) : _NoAlertManagersAvail || (_NoAlertManagersAvail = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(NoAlertManagersAvailable, {}))
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/ActionIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ ActionIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["tooltip", "icon", "to", "target", "onClick", "className", "tooltipPlacement"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ActionIcon = _ref => {
  let {
    tooltip,
    icon,
    to,
    target,
    onClick,
    className,
    tooltipPlacement = 'top'
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const ariaLabel = typeof tooltip === 'string' ? tooltip : undefined;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    content: tooltip,
    placement: tooltipPlacement,
    children: to ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, Object.assign({
      variant: "secondary",
      fill: "text",
      icon: icon,
      href: to,
      size: "sm",
      target: target
    }, rest, {
      "aria-label": ariaLabel
    })) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, Object.assign({
      className: className,
      variant: "secondary",
      fill: "text",
      size: "sm",
      icon: icon,
      type: "button",
      onClick: onClick
    }, rest, {
      "aria-label": ariaLabel
    }))
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ AmAlertStateTag)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
/* harmony import */ var _StateTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/StateTag.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const alertStateToState = {
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__/* .AlertState.Active */ .Z9.Active]: 'bad',
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__/* .AlertState.Unprocessed */ .Z9.Unprocessed]: 'neutral',
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__/* .AlertState.Suppressed */ .Z9.Suppressed]: 'info'
};
const AmAlertStateTag = _ref => {
  let {
    state
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_StateTag__WEBPACK_IMPORTED_MODULE_2__/* .StateTag */ .i, {
    state: alertStateToState[state],
    children: state
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/silences/Matchers.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ Matchers)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Matchers = _ref => {
  let {
    matchers
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TagList, {
      className: styles.tags,
      tags: matchers.map(matcher => `${matcher.name}${(0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_3__/* .matcherToOperator */ .zy)(matcher)}${matcher.value}`)
    })
  });
};

const getStyles = () => ({
  tags: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    justify-content: flex-start;
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useAlertManagerSourceName)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_core_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/store.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");






function useIsAlertManagerAvailable(availableAlertManagers) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alertManagerName => {
    const availableAlertManagersNames = availableAlertManagers.map(am => am.name);
    return availableAlertManagersNames.includes(alertManagerName);
  }, [availableAlertManagers]);
}
/* This will return am name either from query params or from local storage or a default (grafana).
 * Due to RBAC permissions Grafana Managed Alert manager or external alert managers may not be available
 * In the worst case neihter GMA nor external alert manager is available
 */


function useAlertManagerSourceName(availableAlertManagers) {
  const [queryParams, updateQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__/* .useQueryParams */ .K)();
  const isAlertManagerAvailable = useIsAlertManagerAvailable(availableAlertManagers);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alertManagerSourceName => {
    if (!isAlertManagerAvailable(alertManagerSourceName)) {
      return;
    }

    if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_4__/* .GRAFANA_RULES_SOURCE_NAME */ .GC) {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"]["delete"] */ .Z["delete"](_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_LOCAL_STORAGE_KEY */ .de);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_QUERY_KEY */ .c4]: null
      });
    } else {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].set */ .Z.set(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_LOCAL_STORAGE_KEY */ .de, alertManagerSourceName);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_QUERY_KEY */ .c4]: alertManagerSourceName
      });
    }
  }, [updateQueryParams, isAlertManagerAvailable]);
  const querySource = queryParams[_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_QUERY_KEY */ .c4];

  if (querySource && typeof querySource === 'string') {
    if (isAlertManagerAvailable(querySource)) {
      return [querySource, update];
    } else {
      // non existing alertmanager
      return [undefined, update];
    }
  }

  const storeSource = app_core_store__WEBPACK_IMPORTED_MODULE_2__/* ["default"].get */ .Z.get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .ALERTMANAGER_NAME_LOCAL_STORAGE_KEY */ .de);

  if (storeSource && typeof storeSource === 'string' && isAlertManagerAvailable(storeSource)) {
    update(storeSource);
    return [storeSource, update];
  }

  if (isAlertManagerAvailable(_utils_datasource__WEBPACK_IMPORTED_MODULE_4__/* .GRAFANA_RULES_SOURCE_NAME */ .GC)) {
    return [_utils_datasource__WEBPACK_IMPORTED_MODULE_4__/* .GRAFANA_RULES_SOURCE_NAME */ .GC, update];
  }

  return [undefined, update];
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useAlertManagersByPermission)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");


function useAlertManagersByPermission(accessType) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__/* .getAlertManagerDataSourcesByPermission */ .LE)(accessType), [accessType]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kd": () => (/* binding */ flattenGrafanaManagedRules),
/* harmony export */   "Zo": () => (/* binding */ useCombinedRuleNamespaces)
/* harmony export */ });
/* unused harmony export sortRulesByName */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");




// this little monster combines prometheus rules and ruler rules to produce a unified data structure
// can limit to a single rules source
function useCombinedRuleNamespaces(rulesSourceName) {
  const promRulesResponses = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__/* .useUnifiedAlertingSelector */ ._)(state => state.promRules);
  const rulerRulesResponses = (0,_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_3__/* .useUnifiedAlertingSelector */ ._)(state => state.rulerRules); // cache results per rules source, so we only recalculate those for which results have actually changed

  const cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  const rulesSources = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (rulesSourceName) {
      const rulesSource = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__/* .getRulesSourceByName */ .o_)(rulesSourceName);

      if (!rulesSource) {
        throw new Error(`Unknown rules source: ${rulesSourceName}`);
      }

      return [rulesSource];
    }

    return (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__/* .getAllRulesSources */ .h_)();
  }, [rulesSourceName]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => rulesSources.map(rulesSource => {
    var _promRulesResponses$r, _rulerRulesResponses$;

    const rulesSourceName = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__/* .isCloudRulesSource */ .jq)(rulesSource) ? rulesSource.name : rulesSource;
    const promRules = (_promRulesResponses$r = promRulesResponses[rulesSourceName]) === null || _promRulesResponses$r === void 0 ? void 0 : _promRulesResponses$r.result;
    const rulerRules = (_rulerRulesResponses$ = rulerRulesResponses[rulesSourceName]) === null || _rulerRulesResponses$ === void 0 ? void 0 : _rulerRulesResponses$.result;
    const cached = cache.current[rulesSourceName];

    if (cached && cached.promRules === promRules && cached.rulerRules === rulerRules) {
      return cached.result;
    }

    const namespaces = {}; // first get all the ruler rules in

    Object.entries(rulerRules || {}).forEach(_ref => {
      let [namespaceName, groups] = _ref;
      const namespace = {
        rulesSource,
        name: namespaceName,
        groups: []
      };
      namespaces[namespaceName] = namespace;
      addRulerGroupsToCombinedNamespace(namespace, groups);
    }); // then correlate with prometheus rules

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
    annotations: (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__/* .isAlertingRule */ .x_)(rule) ? rule.annotations || {} : {},
    promRule: rule,
    namespace: namespace,
    group
  };
}

function rulerRuleToCombinedRule(rule, namespace, group) {
  return (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__/* .isAlertingRulerRule */ .cG)(rule) ? {
    name: rule.alert,
    query: rule.expr,
    labels: rule.labels || {},
    annotations: rule.annotations || {},
    rulerRule: rule,
    namespace,
    group
  } : (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__/* .isRecordingRulerRule */ .yF)(rule) ? {
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

  if ((0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__/* .isGrafanaRulesSource */ .HY)(rulesSource)) {
    // assume grafana groups have only the one rule. check name anyway because paranoid
    return group.rules.find(existingRule => existingRule.name === rule.name);
  }

  return (// try finding a rule that matches name, labels, annotations and query
    (_rules$find = group.rules.find(existingRule => !existingRule.promRule && isCombinedRuleEqualToPromRule(existingRule, rule, true))) !== null && _rules$find !== void 0 ? _rules$find : // if that fails, try finding a rule that only matches name, labels and annotations.
    // loki & prom can sometimes modify the query so it doesnt match, eg `2 > 1` becomes `1`
    group.rules.find(existingRule => !existingRule.promRule && isCombinedRuleEqualToPromRule(existingRule, rule, false))
  );
}

function isCombinedRuleEqualToPromRule(combinedRule, rule) {
  let checkQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (combinedRule.name === rule.name) {
    return JSON.stringify([checkQuery ? hashQuery(combinedRule.query) : '', combinedRule.labels, combinedRule.annotations]) === JSON.stringify([checkQuery ? hashQuery(rule.query) : '', rule.labels || {}, (0,_utils_rules__WEBPACK_IMPORTED_MODULE_2__/* .isAlertingRule */ .x_)(rule) ? rule.annotations || {} : {}]);
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

/***/ "./public/app/features/alerting/unified/hooks/useURLSearchParams.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useURLSearchParams)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");



function useURLSearchParams() {
  const {
    search
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__/* .useLocation */ .TH)();
  const queryParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => new URLSearchParams(search), [search]);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((searchValues, replace) => {
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.partial(searchValues, replace);
  }, []);
  return [queryParams, update];
}

/***/ }),

/***/ "./public/app/features/alerting/unified/styles/table.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getAlertTableStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

const getAlertTableStyles = theme => ({
  table: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 100%;
    border-radius: ${theme.shape.borderRadius()};
    border: solid 1px ${theme.colors.border.weak};
    background-color: ${theme.colors.background.secondary};

    th {
      padding: ${theme.spacing(1)};
    }

    td {
      padding: 0 ${theme.spacing(1)};
    }

    tr {
      height: 38px;
    }
  `,
  evenRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background-color: ${theme.colors.background.primary};
  `,
  colExpand: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 36px;
  `,
  actionsCell: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${theme.spacing(0.5)};
    }
  `
});

/***/ })

}]);