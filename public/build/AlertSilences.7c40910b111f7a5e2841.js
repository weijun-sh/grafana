"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[1783],{

 "./public/app/core/hooks/useCleanup.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "x": () => ( useCleanup)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var _actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");



function useCleanup(stateSelector) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(); 

  const selectorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(stateSelector);
  selectorRef.current = stateSelector;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      dispatch((0,_actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__ .e)({
        stateSelector: selectorRef.current
      }));
    };
  }, [dispatch]);
}

 }),

 "./public/app/features/alerting/unified/Silences.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

__webpack_require__.d(__webpack_exports__, {
  "default": () => ( unified_Silences)
});

var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
var react_router = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var AlertManagerPicker = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
var AlertingPageWrapper = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
var NoAlertManagerWarning = __webpack_require__("./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx");
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
var index_esm = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
var useDebounce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
var grafana_data_src = __webpack_require__("./packages/grafana-data/src/index.ts");
var grafana_runtime_src = __webpack_require__("./packages/grafana-runtime/src/index.ts");
var useCleanup = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
var types = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
var useURLSearchParams = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
var useUnifiedAlertingSelector = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
var actions = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
var alertmanager = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
var utils_matchers = __webpack_require__("./public/app/features/alerting/unified/utils/matchers.ts");
var misc = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
var useCombinedRuleNamespaces = __webpack_require__("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts");
var rules = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
var AlertLabels = __webpack_require__("./public/app/features/alerting/unified/components/AlertLabels.tsx");
var DynamicTable = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
var AlertStateTag = __webpack_require__("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
var _span;


















const MatchedSilencedRules = () => {
  var _matchedAlertRules$sl;

  const [matchedAlertRules, setMatchedAlertRules] = (0,react.useState)([]);
  const formApi = (0,index_esm.Gc)();
  const dispatch = (0,es.useDispatch)();
  const {
    watch
  } = formApi;
  const matchers = watch('matchers');
  const styles = (0,src.useStyles2)(getStyles);
  const columns = useColumns();
  (0,react.useEffect)(() => {
    dispatch((0,actions.ei)());
  }, [dispatch]);
  const combinedNamespaces = (0,useCombinedRuleNamespaces.Zo)();
  (0,useDebounce.Z)(() => {
    const matchedInstances = combinedNamespaces.flatMap(namespace => {
      return namespace.groups.flatMap(group => {
        return group.rules.map(combinedRule => combinedRule.promRule).filter(rule => (0,rules.x_)(rule)).flatMap(rule => {
          var _rule$alerts;

          return (0,utils_matchers.TZ)((_rule$alerts = rule.alerts) !== null && _rule$alerts !== void 0 ? _rule$alerts : [], matchers);
        });
      });
    });
    setMatchedAlertRules(matchedInstances);
  }, 500, [combinedNamespaces, matchers]);
  return (0,jsx_runtime.jsxs)("div", {
    children: [(0,jsx_runtime.jsxs)("h4", {
      className: styles.title,
      children: ["Affected alert instances", matchedAlertRules.length > 0 ? (0,jsx_runtime.jsx)(src.Badge, {
        className: styles.badge,
        color: "blue",
        text: matchedAlertRules.length
      }) : null]
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.table,
      children: matchers.every(matcher => !matcher.value && !matcher.name) ? _span || (_span = (0,jsx_runtime.jsx)("span", {
        children: "Add a valid matcher to see affected alerts"
      })) : (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [(0,jsx_runtime.jsx)(DynamicTable.t, {
          items: (_matchedAlertRules$sl = matchedAlertRules.slice(0, 5)) !== null && _matchedAlertRules$sl !== void 0 ? _matchedAlertRules$sl : [],
          isExpandable: false,
          cols: columns
        }), matchedAlertRules.length > 5 && (0,jsx_runtime.jsxs)("div", {
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
      return (0,jsx_runtime.jsx)(AlertStateTag.l, {
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
      return (0,jsx_runtime.jsx)(AlertLabels.s, {
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
      return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
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
;
const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const MatchersField = _ref => {
  let {
    className
  } = _ref;
  const styles = (0,src.useStyles2)(MatchersField_getStyles);
  const formApi = (0,index_esm.Gc)();
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
  } = (0,index_esm.Dq)({
    name: 'matchers'
  });
  return (0,jsx_runtime.jsx)("div", {
    className: (0,emotion_css_esm.cx)(className, styles.wrapper),
    children: (0,jsx_runtime.jsx)(src.Field, {
      label: "Matching labels",
      required: true,
      children: (0,jsx_runtime.jsxs)("div", {
        children: [(0,jsx_runtime.jsx)("div", {
          className: styles.matchers,
          children: matchers.map((matcher, index) => {
            var _errors$matchers, _errors$matchers$inde, _errors$matchers2, _errors$matchers2$ind, _errors$matchers2$ind2, _errors$matchers3, _errors$matchers3$ind, _errors$matchers4, _errors$matchers4$ind, _errors$matchers4$ind2;

            return (0,jsx_runtime.jsxs)("div", {
              className: styles.row,
              "data-testid": "matcher",
              children: [(0,jsx_runtime.jsx)(src.Field, {
                label: "Label",
                invalid: !!(errors !== null && errors !== void 0 && (_errors$matchers = errors.matchers) !== null && _errors$matchers !== void 0 && (_errors$matchers$inde = _errors$matchers[index]) !== null && _errors$matchers$inde !== void 0 && _errors$matchers$inde.name),
                error: errors === null || errors === void 0 ? void 0 : (_errors$matchers2 = errors.matchers) === null || _errors$matchers2 === void 0 ? void 0 : (_errors$matchers2$ind = _errors$matchers2[index]) === null || _errors$matchers2$ind === void 0 ? void 0 : (_errors$matchers2$ind2 = _errors$matchers2$ind.name) === null || _errors$matchers2$ind2 === void 0 ? void 0 : _errors$matchers2$ind2.message,
                children: (0,jsx_runtime.jsx)(src.Input, Object.assign({}, register(`matchers.${index}.name`, {
                  required: {
                    value: true,
                    message: 'Required.'
                  }
                }), {
                  defaultValue: matcher.name,
                  placeholder: "label"
                }))
              }), (0,jsx_runtime.jsx)(src.Field, {
                label: 'Operator',
                children: (0,jsx_runtime.jsx)(src.InputControl, {
                  control: control,
                  render: _ref2 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref2,
                        field = _objectWithoutPropertiesLoose(_ref2.field, _excluded);

                    return (0,jsx_runtime.jsx)(src.Select, Object.assign({}, field, {
                      onChange: value => onChange(value.value),
                      className: styles.matcherOptions,
                      options: alertmanager.tA,
                      "aria-label": "operator"
                    }));
                  },
                  defaultValue: matcher.operator || alertmanager.tA[0].value,
                  name: `matchers.${index}.operator`,
                  rules: {
                    required: {
                      value: true,
                      message: 'Required.'
                    }
                  }
                })
              }), (0,jsx_runtime.jsx)(src.Field, {
                label: "Value",
                invalid: !!(errors !== null && errors !== void 0 && (_errors$matchers3 = errors.matchers) !== null && _errors$matchers3 !== void 0 && (_errors$matchers3$ind = _errors$matchers3[index]) !== null && _errors$matchers3$ind !== void 0 && _errors$matchers3$ind.value),
                error: errors === null || errors === void 0 ? void 0 : (_errors$matchers4 = errors.matchers) === null || _errors$matchers4 === void 0 ? void 0 : (_errors$matchers4$ind = _errors$matchers4[index]) === null || _errors$matchers4$ind === void 0 ? void 0 : (_errors$matchers4$ind2 = _errors$matchers4$ind.value) === null || _errors$matchers4$ind2 === void 0 ? void 0 : _errors$matchers4$ind2.message,
                children: (0,jsx_runtime.jsx)(src.Input, Object.assign({}, register(`matchers.${index}.value`, {
                  required: {
                    value: true,
                    message: 'Required.'
                  }
                }), {
                  defaultValue: matcher.value,
                  placeholder: "value"
                }))
              }), matchers.length > 1 && (0,jsx_runtime.jsx)(src.IconButton, {
                className: styles.removeButton,
                tooltip: "Remove matcher",
                name: 'trash-alt',
                onClick: () => remove(index),
                children: "Remove"
              })]
            }, `${matcher.id}`);
          })
        }), (0,jsx_runtime.jsx)(src.Button, {
          type: "button",
          icon: "plus",
          variant: "secondary",
          onClick: () => {
            const newMatcher = {
              name: '',
              value: '',
              operator: types._M.equal
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

 const silences_MatchersField = (MatchersField);
;






const SilencePeriod = () => {
  const {
    control,
    getValues
  } = (0,index_esm.Gc)();
  const styles = (0,src.useStyles)(SilencePeriod_getStyles);
  const {
    field: {
      onChange: onChangeStartsAt,
      value: startsAt
    },
    fieldState: {
      invalid: startsAtInvalid
    }
  } = (0,index_esm.bc)({
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
  } = (0,index_esm.bc)({
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
  } = (0,index_esm.bc)({
    name: 'timeZone',
    control
  });
  const invalid = startsAtInvalid || endsAtInvalid;
  const from = (0,grafana_data_src.dateTime)(startsAt);
  const to = (0,grafana_data_src.dateTime)(endsAt);
  return (0,jsx_runtime.jsx)(src.Field, {
    className: styles.timeRange,
    label: "Silence start and end",
    error: invalid ? 'To is before or the same as from' : '',
    invalid: invalid,
    children: (0,jsx_runtime.jsx)(src.TimeRangeInput, {
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
;
var _SilencePeriod, _MatchersField, _MatchedSilencedRules, _Button, _Button2;
























const defaultsFromQuery = searchParams => {
  const defaults = {};
  const comment = searchParams.get('comment');
  const matchers = searchParams.getAll('matcher');
  const formMatchers = (0,utils_matchers.RT)(matchers);

  if (formMatchers.length) {
    defaults.matchers = formMatchers.map(alertmanager.cm);
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
      matchers: ((_silence$matchers = silence.matchers) === null || _silence$matchers === void 0 ? void 0 : _silence$matchers.map(alertmanager.cm)) || [],
      matcherName: '',
      matcherValue: '',
      timeZone: grafana_data_src.DefaultTimeZone
    };
  } else {
    const endsAt = (0,grafana_data_src.addDurationToDate)(now, {
      hours: 2
    }); 

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
        operator: types._M.equal
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
  const [urlSearchParams] = (0,useURLSearchParams.j)();
  const defaultValues = (0,react.useMemo)(() => getDefaultFormValues(urlSearchParams, silence), [silence, urlSearchParams]);
  const formAPI = (0,index_esm.cI)({
    defaultValues
  });
  const dispatch = (0,es.useDispatch)();
  const styles = (0,src.useStyles2)(SilencesEditor_getStyles);
  const {
    loading
  } = (0,useUnifiedAlertingSelector._)(state => state.updateSilence);
  (0,useCleanup.x)(state => state.unifiedAlerting.updateSilence);
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
    const matchers = matchersFields.map(alertmanager._J);
    const payload = (0,lodash.pickBy)({
      id,
      startsAt,
      endsAt,
      comment,
      createdBy,
      matchers
    }, value => !!value);
    dispatch((0,actions.QY)({
      alertManagerSourceName,
      payload,
      exitOnSave: true,
      successMessage: `Silence ${payload.id ? 'updated' : 'created'}`
    }));
  };

  const duration = watch('duration');
  const startsAt = watch('startsAt');
  const endsAt = watch('endsAt'); 

  const [prevDuration, setPrevDuration] = (0,react.useState)(duration);
  (0,useDebounce.Z)(() => {
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
  return (0,jsx_runtime.jsx)(index_esm.RV, Object.assign({}, formAPI, {
    children: (0,jsx_runtime.jsxs)("form", {
      onSubmit: handleSubmit(onSubmit),
      children: [(0,jsx_runtime.jsxs)(src.FieldSet, {
        label: `${silence ? 'Recreate silence' : 'Create silence'}`,
        children: [(0,jsx_runtime.jsxs)("div", {
          className: (0,emotion_css_esm.cx)(styles.flexRow, styles.silencePeriod),
          children: [_SilencePeriod || (_SilencePeriod = (0,jsx_runtime.jsx)(SilencePeriod, {})), (0,jsx_runtime.jsx)(src.Field, {
            label: "Duration",
            invalid: !!formState.errors.duration,
            error: formState.errors.duration && (formState.errors.duration.type === 'required' ? 'Required field' : formState.errors.duration.message),
            children: (0,jsx_runtime.jsx)(src.Input, Object.assign({
              className: styles.createdBy
            }, register('duration', {
              validate: value => Object.keys((0,grafana_data_src.parseDuration)(value)).length === 0 ? 'Invalid duration. Valid example: 1d 4h (Available units: y, M, w, d, h, m, s)' : undefined
            }), {
              id: "duration"
            }))
          })]
        }), _MatchersField || (_MatchersField = (0,jsx_runtime.jsx)(silences_MatchersField, {})), (0,jsx_runtime.jsx)(src.Field, {
          className: (0,emotion_css_esm.cx)(styles.field, styles.textArea),
          label: "Comment",
          required: true,
          error: (_formState$errors$com = formState.errors.comment) === null || _formState$errors$com === void 0 ? void 0 : _formState$errors$com.message,
          invalid: !!formState.errors.comment,
          children: (0,jsx_runtime.jsx)(src.TextArea, Object.assign({}, register('comment', {
            required: {
              value: true,
              message: 'Required.'
            }
          }), {
            rows: 5,
            placeholder: "Details about the silence"
          }))
        }), _MatchedSilencedRules || (_MatchedSilencedRules = (0,jsx_runtime.jsx)(MatchedSilencedRules, {}))]
      }), (0,jsx_runtime.jsxs)("div", {
        className: styles.flexRow,
        children: [loading && (_Button || (_Button = (0,jsx_runtime.jsx)(src.Button, {
          disabled: true,
          icon: "fa fa-spinner",
          variant: "primary",
          children: "Saving..."
        }))), !loading && (_Button2 || (_Button2 = (0,jsx_runtime.jsx)(src.Button, {
          type: "submit",
          children: "Submit"
        }))), (0,jsx_runtime.jsx)(src.LinkButton, {
          href: (0,misc.eQ)('alerting/silences', alertManagerSourceName),
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

 const silences_SilencesEditor = (SilencesEditor);
var experimental = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
var useQueryParams = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
var access_control = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
var Authorize = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
var Button = __webpack_require__("./packages/grafana-ui/src/components/Button/index.ts");
;
const ActionButton_excluded = ["className"];

function ActionButton_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const ActionButton = _ref => {
  let {
    className
  } = _ref,
      restProps = ActionButton_objectWithoutPropertiesLoose(_ref, ActionButton_excluded);

  return (0,jsx_runtime.jsx)(Button.zx, Object.assign({
    variant: "secondary",
    size: "xs",
    className: (0,emotion_css_esm.cx)((0,src.useStyles)(getStyle), className)
  }, restProps));
};
const getStyle = theme => emotion_css_esm.css`
  height: 24px;
  font-size: ${theme.typography.size.sm};
`;
var ActionIcon = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
var Matchers = __webpack_require__("./public/app/features/alerting/unified/components/silences/Matchers.tsx");
var EmptyListCTA = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
;
var _CallToActionCard;








const NoSilencesSplash = _ref => {
  let {
    alertManagerSourceName
  } = _ref;
  const permissions = (0,access_control.QX)(alertManagerSourceName);

  if (context_srv.Vt.hasAccess(permissions.create, context_srv.Vt.isEditor)) {
    return (0,jsx_runtime.jsx)(EmptyListCTA.Z, {
      title: "You haven't created any silences yet",
      buttonIcon: "bell-slash",
      buttonLink: (0,misc.eQ)('alerting/silence/new', alertManagerSourceName),
      buttonTitle: "New silence"
    });
  }

  return _CallToActionCard || (_CallToActionCard = (0,jsx_runtime.jsx)(src.CallToActionCard, {
    callToActionElement: (0,jsx_runtime.jsx)("div", {}),
    message: "No silences found."
  }));
};
var table = __webpack_require__("./public/app/features/alerting/unified/styles/table.ts");
var CollapseToggle = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
var AmAlertStateTag = __webpack_require__("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx");
;
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
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)("tr", {
      className: className,
      children: [(0,jsx_runtime.jsx)("td", {
        children: (0,jsx_runtime.jsx)(CollapseToggle.U, {
          isCollapsed: isCollapsed,
          onToggle: collapsed => setIsCollapsed(collapsed)
        })
      }), (0,jsx_runtime.jsx)("td", {
        children: (0,jsx_runtime.jsx)(AmAlertStateTag.G, {
          state: alert.status.state
        })
      }), (0,jsx_runtime.jsxs)("td", {
        children: ["for ", duration, " seconds"]
      }), (0,jsx_runtime.jsx)("td", {
        children: alertName
      })]
    }), !isCollapsed && (0,jsx_runtime.jsxs)("tr", {
      className: className,
      children: [_td || (_td = (0,jsx_runtime.jsx)("td", {})), (0,jsx_runtime.jsx)("td", {
        colSpan: 5,
        children: (0,jsx_runtime.jsx)(AlertLabels.s, {
          labels: alert.labels
        })
      })]
    })]
  });
};
;
var _col, _thead;









const SilencedAlertsTable = _ref => {
  let {
    silencedAlerts
  } = _ref;
  const tableStyles = (0,src.useStyles2)(table.D);
  const styles = (0,src.useStyles2)(SilencedAlertsTable_getStyles);

  if (!!silencedAlerts.length) {
    return (0,jsx_runtime.jsxs)("table", {
      className: (0,emotion_css_esm.cx)(tableStyles.table, styles.tableMargin),
      children: [(0,jsx_runtime.jsxs)("colgroup", {
        children: [(0,jsx_runtime.jsx)("col", {
          className: tableStyles.colExpand
        }), (0,jsx_runtime.jsx)("col", {
          className: styles.colState
        }), _col || (_col = (0,jsx_runtime.jsx)("col", {})), (0,jsx_runtime.jsx)("col", {
          className: styles.colName
        })]
      }), _thead || (_thead = (0,jsx_runtime.jsx)("thead", {
        children: (0,jsx_runtime.jsxs)("tr", {
          children: [(0,jsx_runtime.jsx)("th", {}), (0,jsx_runtime.jsx)("th", {
            children: "State"
          }), (0,jsx_runtime.jsx)("th", {}), (0,jsx_runtime.jsx)("th", {
            children: "Alert name"
          })]
        })
      })), (0,jsx_runtime.jsx)("tbody", {
        children: silencedAlerts.map((alert, index) => {
          return (0,jsx_runtime.jsx)(SilencedAlertsTableRow, {
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

 const silences_SilencedAlertsTable = (SilencedAlertsTable);
;







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
  return (0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [(0,jsx_runtime.jsx)("div", {
      className: styles.title,
      children: "Comment"
    }), (0,jsx_runtime.jsx)("div", {
      children: comment
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.title,
      children: "Schedule"
    }), (0,jsx_runtime.jsx)("div", {
      children: `${startsAtDate === null || startsAtDate === void 0 ? void 0 : startsAtDate.format(dateDisplayFormat)} - ${endsAtDate === null || endsAtDate === void 0 ? void 0 : endsAtDate.format(dateDisplayFormat)}`
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.title,
      children: "Duration"
    }), (0,jsx_runtime.jsxs)("div", {
      children: [" ", duration]
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.title,
      children: "Created by"
    }), (0,jsx_runtime.jsxs)("div", {
      children: [" ", createdBy]
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.title,
      children: "Affected alerts"
    }), (0,jsx_runtime.jsx)(silences_SilencedAlertsTable, {
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
var StateTag = __webpack_require__("./public/app/features/alerting/unified/components/StateTag.tsx");
;




const silenceStateToState = {
  [types.As.Active]: 'good',
  [types.As.Expired]: 'neutral',
  [types.As.Pending]: 'neutral'
};
const SilenceStateTag = _ref => {
  let {
    state
  } = _ref;
  return (0,jsx_runtime.jsx)(StateTag.i, {
    state: silenceStateToState[state],
    children: state
  });
};
;
var _Label, _Icon;












const stateOptions = Object.entries(types.As).map(_ref => {
  let [key, value] = _ref;
  return {
    label: key,
    value
  };
});

const getQueryStringKey = () => (0,lodash.uniqueId)('query-string-');

const SilencesFilter = () => {
  const [queryStringKey, setQueryStringKey] = (0,react.useState)(getQueryStringKey());
  const [queryParams, setQueryParams] = (0,useQueryParams.K)();
  const {
    queryString,
    silenceState
  } = (0,misc.pF)(queryParams);
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

  const inputInvalid = queryString && queryString.length > 3 ? (0,alertmanager.Zh)(queryString).length === 0 : false;
  return (0,jsx_runtime.jsxs)("div", {
    className: styles.flexRow,
    children: [(0,jsx_runtime.jsx)(src.Field, {
      className: styles.rowChild,
      label: _Label || (_Label = (0,jsx_runtime.jsx)(src.Label, {
        children: (0,jsx_runtime.jsxs)(experimental.Stack, {
          gap: 0.5,
          children: [(0,jsx_runtime.jsx)("span", {
            children: "Search by matchers"
          }), (0,jsx_runtime.jsx)(src.Tooltip, {
            content: (0,jsx_runtime.jsxs)("div", {
              children: ["Filter silences by matchers using a comma separated list of matchers, ie:", (0,jsx_runtime.jsx)("pre", {
                children: `severity=critical, instance=~cluster-us-.+`
              })]
            }),
            children: (0,jsx_runtime.jsx)(src.Icon, {
              name: "info-circle",
              size: "sm"
            })
          })]
        })
      })),
      invalid: inputInvalid,
      error: inputInvalid ? 'Query must use valid matcher syntax' : null,
      children: (0,jsx_runtime.jsx)(src.Input, {
        className: styles.searchInput,
        prefix: _Icon || (_Icon = (0,jsx_runtime.jsx)(src.Icon, {
          name: "search"
        })),
        onChange: handleQueryStringChange,
        defaultValue: queryString !== null && queryString !== void 0 ? queryString : '',
        placeholder: "Search",
        "data-testid": "search-query-input"
      }, queryStringKey)
    }), (0,jsx_runtime.jsx)(src.Field, {
      className: styles.rowChild,
      label: "State",
      children: (0,jsx_runtime.jsx)(src.RadioButtonGroup, {
        options: stateOptions,
        value: silenceState,
        onChange: handleSilenceStateChange
      })
    }), (queryString || silenceState) && (0,jsx_runtime.jsx)("div", {
      className: styles.rowChild,
      children: (0,jsx_runtime.jsx)(src.Button, {
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
;
var _SilencesFilter, SilencesTable_span, _br, _ActionButton;



























const SilencesTable = _ref => {
  let {
    silences,
    alertManagerAlerts,
    alertManagerSourceName
  } = _ref;
  const styles = (0,src.useStyles2)(SilencesTable_getStyles);
  const [queryParams] = (0,useQueryParams.K)();
  const filteredSilences = useFilteredSilences(silences);
  const permissions = (0,access_control.QX)(alertManagerSourceName);
  const {
    silenceState
  } = (0,misc.pF)(queryParams);
  const showExpiredSilencesBanner = !!filteredSilences.length && (silenceState === undefined || silenceState === types.As.Expired);
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
  return (0,jsx_runtime.jsxs)("div", {
    "data-testid": "silences-table",
    children: [!!silences.length && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [_SilencesFilter || (_SilencesFilter = (0,jsx_runtime.jsx)(SilencesFilter, {})), (0,jsx_runtime.jsx)(Authorize.q, {
        actions: [permissions.create],
        fallback: context_srv.Vt.isEditor,
        children: (0,jsx_runtime.jsx)("div", {
          className: styles.topButtonContainer,
          children: (0,jsx_runtime.jsx)(src.Link, {
            href: (0,misc.eQ)('/alerting/silence/new', alertManagerSourceName),
            children: (0,jsx_runtime.jsx)(src.Button, {
              className: styles.addNewSilence,
              icon: "plus",
              children: "New Silence"
            })
          })
        })
      }), !!items.length ? (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [(0,jsx_runtime.jsx)(DynamicTable.t, {
          items: items,
          cols: columns,
          isExpandable: true,
          renderExpandedContent: _ref2 => {
            let {
              data
            } = _ref2;
            return (0,jsx_runtime.jsx)(SilenceDetails, {
              silence: data
            });
          }
        }), showExpiredSilencesBanner && (0,jsx_runtime.jsxs)("div", {
          className: styles.callout,
          children: [(0,jsx_runtime.jsx)(src.Icon, {
            className: styles.calloutIcon,
            name: "info-circle"
          }), SilencesTable_span || (SilencesTable_span = (0,jsx_runtime.jsx)("span", {
            children: "Expired silences are automatically deleted after 5 days."
          }))]
        })]
      }) : 'No matching silences found']
    }), !silences.length && (0,jsx_runtime.jsx)(NoSilencesSplash, {
      alertManagerSourceName: alertManagerSourceName
    })]
  });
};

const useFilteredSilences = silences => {
  const [queryParams] = (0,useQueryParams.K)();
  return (0,react.useMemo)(() => {
    const {
      queryString,
      silenceState
    } = (0,misc.pF)(queryParams);
    const silenceIdsString = queryParams === null || queryParams === void 0 ? void 0 : queryParams.silenceIds;
    return silences.filter(silence => {
      if (typeof silenceIdsString === 'string') {
        const idsIncluded = silenceIdsString.split(',').includes(silence.id);

        if (!idsIncluded) {
          return false;
        }
      }

      if (queryString) {
        const matchers = (0,alertmanager.Zh)(queryString);
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
  const permissions = (0,access_control.QX)(alertManagerSourceName);
  return (0,react.useMemo)(() => {
    const handleExpireSilenceClick = id => {
      dispatch((0,actions.yO)(alertManagerSourceName, id));
    };

    const showActions = context_srv.Vt.hasAccess(permissions.update, context_srv.Vt.isEditor);
    const columns = [{
      id: 'state',
      label: 'State',
      renderCell: function renderStateTag(_ref4) {
        let {
          data: {
            status
          }
        } = _ref4;
        return (0,jsx_runtime.jsx)(SilenceStateTag, {
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
        return (0,jsx_runtime.jsx)(Matchers.g, {
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
        return (0,jsx_runtime.jsx)("span", {
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
        return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [' ', startsAtDate === null || startsAtDate === void 0 ? void 0 : startsAtDate.format(dateDisplayFormat), " ", '-', _br || (_br = (0,jsx_runtime.jsx)("br", {})), endsAtDate === null || endsAtDate === void 0 ? void 0 : endsAtDate.format(dateDisplayFormat)]
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
          return (0,jsx_runtime.jsxs)(experimental.Stack, {
            gap: 0.5,
            children: [silence.status.state === 'expired' ? (0,jsx_runtime.jsx)(src.Link, {
              href: (0,misc.eQ)(`/alerting/silence/${silence.id}/edit`, alertManagerSourceName),
              children: _ActionButton || (_ActionButton = (0,jsx_runtime.jsx)(ActionButton, {
                icon: "sync",
                children: "Recreate"
              }))
            }) : (0,jsx_runtime.jsx)(ActionButton, {
              icon: "bell",
              onClick: () => handleExpireSilenceClick(silence.id),
              children: "Unsilence"
            }), silence.status.state !== 'expired' && (0,jsx_runtime.jsx)(ActionIcon.A, {
              className: styles.editButton,
              to: (0,misc.eQ)(`/alerting/silence/${silence.id}/edit`, alertManagerSourceName),
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

 const silences_SilencesTable = (SilencesTable);
var useAlertManagerSourceName = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
var useAlertManagerSources = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
var constants = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
var redux = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
;
var _Redirect, _LoadingPlaceholder;



















const Silences = () => {
  var _alertsRequest$error, _alertsRequest$result;

  const alertManagers = (0,useAlertManagerSources.k)('instance');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,useAlertManagerSourceName.k)(alertManagers);
  const dispatch = (0,es.useDispatch)();
  const silences = (0,useUnifiedAlertingSelector._)(state => state.silences);
  const alertsRequests = (0,useUnifiedAlertingSelector._)(state => state.amAlerts);
  const alertsRequest = alertManagerSourceName ? alertsRequests[alertManagerSourceName] || redux.oq : undefined;
  const location = (0,react_router.TH)();
  const isRoot = location.pathname.endsWith('/alerting/silences');
  (0,react.useEffect)(() => {
    function fetchAll() {
      if (alertManagerSourceName) {
        dispatch((0,actions.je)(alertManagerSourceName));
        dispatch((0,actions.dB)(alertManagerSourceName));
      }
    }

    fetchAll();
    const interval = setInterval(() => fetchAll, constants.cm);
    return () => {
      clearInterval(interval);
    };
  }, [alertManagerSourceName, dispatch]);
  const {
    result,
    loading,
    error
  } = alertManagerSourceName && silences[alertManagerSourceName] || redux.oq;
  const getSilenceById = (0,react.useCallback)(id => result && result.find(silence => silence.id === id), [result]);

  if (!alertManagerSourceName) {
    return isRoot ? (0,jsx_runtime.jsx)(AlertingPageWrapper.J, {
      pageId: "silences",
      children: (0,jsx_runtime.jsx)(NoAlertManagerWarning.I, {
        availableAlertManagers: alertManagers
      })
    }) : _Redirect || (_Redirect = (0,jsx_runtime.jsx)(react_router.l_, {
      to: "/alerting/silences"
    }));
  }

  return (0,jsx_runtime.jsxs)(AlertingPageWrapper.J, {
    pageId: "silences",
    children: [(0,jsx_runtime.jsx)(AlertManagerPicker.P, {
      disabled: !isRoot,
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName,
      dataSources: alertManagers
    }), error && !loading && (0,jsx_runtime.jsx)(src.Alert, {
      severity: "error",
      title: "Error loading silences",
      children: error.message || 'Unknown error.'
    }), (alertsRequest === null || alertsRequest === void 0 ? void 0 : alertsRequest.error) && !(alertsRequest !== null && alertsRequest !== void 0 && alertsRequest.loading) && (0,jsx_runtime.jsx)(src.Alert, {
      severity: "error",
      title: "Error loading Alertmanager alerts",
      children: ((_alertsRequest$error = alertsRequest.error) === null || _alertsRequest$error === void 0 ? void 0 : _alertsRequest$error.message) || 'Unknown error.'
    }), loading && (_LoadingPlaceholder || (_LoadingPlaceholder = (0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
      text: "loading silences..."
    }))), result && !error && (0,jsx_runtime.jsxs)(react_router.rs, {
      children: [(0,jsx_runtime.jsx)(react_router.AW, {
        exact: true,
        path: "/alerting/silences",
        children: (0,jsx_runtime.jsx)(silences_SilencesTable, {
          silences: result,
          alertManagerAlerts: (_alertsRequest$result = alertsRequest === null || alertsRequest === void 0 ? void 0 : alertsRequest.result) !== null && _alertsRequest$result !== void 0 ? _alertsRequest$result : [],
          alertManagerSourceName: alertManagerSourceName
        })
      }), (0,jsx_runtime.jsx)(react_router.AW, {
        exact: true,
        path: "/alerting/silence/new",
        children: (0,jsx_runtime.jsx)(silences_SilencesEditor, {
          alertManagerSourceName: alertManagerSourceName
        })
      }), (0,jsx_runtime.jsx)(react_router.AW, {
        exact: true,
        path: "/alerting/silence/:id/edit",
        children: _ref => {
          let {
            match
          } = _ref;
          return (match === null || match === void 0 ? void 0 : match.params.id) && (0,jsx_runtime.jsx)(silences_SilencesEditor, {
            silence: getSilenceById(match.params.id),
            alertManagerSourceName: alertManagerSourceName
          });
        }
      })]
    })]
  });
};

 const unified_Silences = ((0,src.withErrorBoundary)(Silences, {
  style: 'page'
}));

 }),

 "./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "J": () => ( AlertingPageWrapper)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AlertingPageWrapper = _ref => {
  let {
    children,
    pageId,
    isLoading
  } = _ref;
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_4__ .h)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.navIndex), pageId);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ .Z, {
    navModel: navModel,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ .Z.Contents, {
      isLoading: isLoading,
      children: children
    })
  });
};

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

 "./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "I": () => ( NoAlertManagerWarning)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
 var _AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _Alert2, _OtherAlertManagersAv, _NoAlertManagersAvail;









const NoAlertManagersAvailable = () => _Alert || (_Alert = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
  title: "No Alertmanager found",
  severity: "warning",
  children: "We could not find any external Alertmanagers and you may not have access to the built-in Grafana Alertmanager."
}));

const OtherAlertManagersAvailable = () => _Alert2 || (_Alert2 = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
  title: "Selected Alertmanager not found. Select a different Alertmanager.",
  severity: "warning",
  children: "Selected Alertmanager no longer exists or you may not have permission to access it."
}));

const NoAlertManagerWarning = _ref => {
  let {
    availableAlertManagers
  } = _ref;
  const [_, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_2__ .k)(availableAlertManagers);
  const hasOtherAMs = availableAlertManagers.length > 0;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: hasOtherAMs ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_3__ .P, {
        onChange: setAlertManagerSourceName,
        dataSources: availableAlertManagers
      }), _OtherAlertManagersAv || (_OtherAlertManagersAv = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(OtherAlertManagersAvailable, {}))]
    }) : _NoAlertManagersAvail || (_NoAlertManagersAvail = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(NoAlertManagersAvailable, {}))
  });
};

 }),

 "./public/app/features/alerting/unified/components/rules/ActionIcon.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "A": () => ( ActionIcon)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
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
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    content: tooltip,
    placement: tooltipPlacement,
    children: to ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton, Object.assign({
      variant: "secondary",
      fill: "text",
      icon: icon,
      href: to,
      size: "sm",
      target: target
    }, rest, {
      "aria-label": ariaLabel
    })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, Object.assign({
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

 }),

 "./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "G": () => ( AmAlertStateTag)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
 var _StateTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/StateTag.tsx");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");




const alertStateToState = {
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__ .Z9.Active]: 'bad',
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__ .Z9.Unprocessed]: 'neutral',
  [app_plugins_datasource_alertmanager_types__WEBPACK_IMPORTED_MODULE_1__ .Z9.Suppressed]: 'info'
};
const AmAlertStateTag = _ref => {
  let {
    state
  } = _ref;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_StateTag__WEBPACK_IMPORTED_MODULE_2__ .i, {
    state: alertStateToState[state],
    children: state
  });
};

 }),

 "./public/app/features/alerting/unified/components/silences/Matchers.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "g": () => ( Matchers)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
 var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const Matchers = _ref => {
  let {
    matchers
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TagList, {
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

 }),

 "./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "k": () => ( useAlertManagerSourceName)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
 var app_core_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/store.ts");
 var _utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
 var _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");






function useIsAlertManagerAvailable(availableAlertManagers) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alertManagerName => {
    const availableAlertManagersNames = availableAlertManagers.map(am => am.name);
    return availableAlertManagersNames.includes(alertManagerName);
  }, [availableAlertManagers]);
}


function useAlertManagerSourceName(availableAlertManagers) {
  const [queryParams, updateQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__ .K)();
  const isAlertManagerAvailable = useIsAlertManagerAvailable(availableAlertManagers);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alertManagerSourceName => {
    if (!isAlertManagerAvailable(alertManagerSourceName)) {
      return;
    }

    if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ .GC) {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__ .Z["delete"](_utils_constants__WEBPACK_IMPORTED_MODULE_3__ .de);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__ .c4]: null
      });
    } else {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__ .Z.set(_utils_constants__WEBPACK_IMPORTED_MODULE_3__ .de, alertManagerSourceName);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__ .c4]: alertManagerSourceName
      });
    }
  }, [updateQueryParams, isAlertManagerAvailable]);
  const querySource = queryParams[_utils_constants__WEBPACK_IMPORTED_MODULE_3__ .c4];

  if (querySource && typeof querySource === 'string') {
    if (isAlertManagerAvailable(querySource)) {
      return [querySource, update];
    } else {
      return [undefined, update];
    }
  }

  const storeSource = app_core_store__WEBPACK_IMPORTED_MODULE_2__ .Z.get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__ .de);

  if (storeSource && typeof storeSource === 'string' && isAlertManagerAvailable(storeSource)) {
    update(storeSource);
    return [storeSource, update];
  }

  if (isAlertManagerAvailable(_utils_datasource__WEBPACK_IMPORTED_MODULE_4__ .GC)) {
    return [_utils_datasource__WEBPACK_IMPORTED_MODULE_4__ .GC, update];
  }

  return [undefined, update];
}

 }),

 "./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "k": () => ( useAlertManagersByPermission)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");


function useAlertManagersByPermission(accessType) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__ .LE)(accessType), [accessType]);
}

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

 "./public/app/features/alerting/unified/styles/table.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "D": () => ( getAlertTableStyles)
 });
 var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");

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

 })

}]);