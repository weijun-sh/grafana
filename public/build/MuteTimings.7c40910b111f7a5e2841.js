"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[9355],{

/***/ "./public/app/features/alerting/unified/MuteTimings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ unified_MuteTimings)
});

// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/hooks/useQueryParams.ts
var useQueryParams = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts
var useAlertManagerSourceName = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts
var useAlertManagerSources = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts
var useUnifiedAlertingSelector = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/state/actions.ts + 4 modules
var actions = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/alertmanager.ts
var alertmanager = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/misc.ts
var misc = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/utils/mute-timings.ts

const DAYS_OF_THE_WEEK = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const defaultTimeInterval = {
  times: [{
    start_time: '',
    end_time: ''
  }],
  weekdays: '',
  days_of_month: '',
  months: '',
  years: ''
};
const validateArrayField = (value, validateValue, invalidText) => {
  if (value) {
    return value.split(',').map(x => x.trim()).every(entry => entry.split(':').every(validateValue)) || invalidText;
  } else {
    return true;
  }
};

const convertStringToArray = str => {
  return str ? str.split(',').map(s => s.trim()) : undefined;
};

const createMuteTiming = fields => {
  const timeIntervals = fields.time_intervals.map(_ref => {
    var _convertStringToArray;

    let {
      times,
      weekdays,
      days_of_month,
      months,
      years
    } = _ref;
    const interval = {
      times: times.filter(_ref2 => {
        let {
          start_time,
          end_time
        } = _ref2;
        return !!start_time && !!end_time;
      }),
      weekdays: (_convertStringToArray = convertStringToArray(weekdays)) === null || _convertStringToArray === void 0 ? void 0 : _convertStringToArray.map(v => v.toLowerCase()),
      days_of_month: convertStringToArray(days_of_month),
      months: convertStringToArray(months),
      years: convertStringToArray(years)
    };
    return (0,lodash.omitBy)(interval, lodash.isUndefined);
  });
  return {
    name: fields.name,
    time_intervals: timeIntervals
  };
};
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/redux.ts
var redux = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertManagerPicker.tsx
var AlertManagerPicker = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx
var AlertingPageWrapper = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/amroutes/MuteTimingTimeRange.tsx







const MuteTimingTimeRange = _ref => {
  var _formState$errors$tim, _formErrors$times$som, _formErrors$times;

  let {
    intervalIndex
  } = _ref;
  const styles = (0,src.useStyles2)(getStyles);
  const {
    register,
    formState
  } = (0,index_esm/* useFormContext */.Gc)();
  const {
    fields: timeRanges,
    append: addTimeRange,
    remove: removeTimeRange
  } = (0,index_esm/* useFieldArray */.Dq)({
    name: `time_intervals.${intervalIndex}.times`
  });

  const validateTime = timeString => {
    if (!timeString) {
      return true;
    }

    const [hour, minutes] = timeString.split(':').map(x => parseInt(x, 10));
    const isHourValid = hour >= 0 && hour < 25;
    const isMinuteValid = minutes > -1 && minutes < 60;
    const isTimeValid = hour === 24 ? minutes === 0 : isHourValid && isMinuteValid;
    return isTimeValid || 'Time is invalid';
  };

  const formErrors = (_formState$errors$tim = formState.errors.time_intervals) === null || _formState$errors$tim === void 0 ? void 0 : _formState$errors$tim[intervalIndex];
  const timeRangeInvalid = (_formErrors$times$som = formErrors === null || formErrors === void 0 ? void 0 : (_formErrors$times = formErrors.times) === null || _formErrors$times === void 0 ? void 0 : _formErrors$times.some(value => (value === null || value === void 0 ? void 0 : value.start_time) || (value === null || value === void 0 ? void 0 : value.end_time))) !== null && _formErrors$times$som !== void 0 ? _formErrors$times$som : false;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
      className: styles.field,
      label: "Time range",
      description: "The time inclusive of the starting time and exclusive of the end time in UTC",
      invalid: timeRangeInvalid,
      error: timeRangeInvalid ? 'Times must be between 00:00 and 24:00 UTC' : '',
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: timeRanges.map((timeRange, index) => {
          var _formErrors$times2, _formErrors$times2$in, _formErrors$times3, _formErrors$times3$in;

          return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.timeRange,
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(src.InlineFieldRow, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.InlineField, {
                label: "Start time",
                invalid: !!(formErrors !== null && formErrors !== void 0 && (_formErrors$times2 = formErrors.times) !== null && _formErrors$times2 !== void 0 && (_formErrors$times2$in = _formErrors$times2[index]) !== null && _formErrors$times2$in !== void 0 && _formErrors$times2$in.start_time),
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, register(`time_intervals.${intervalIndex}.times.${index}.start_time`, {
                  validate: validateTime
                }), {
                  className: styles.timeRangeInput // @ts-ignore react-hook-form doesn't handle nested field arrays well
                  ,
                  defaultValue: timeRange.start_time,
                  placeholder: "HH:MM",
                  "data-testid": "mute-timing-starts-at"
                }))
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.InlineField, {
                label: "End time",
                invalid: !!(formErrors !== null && formErrors !== void 0 && (_formErrors$times3 = formErrors.times) !== null && _formErrors$times3 !== void 0 && (_formErrors$times3$in = _formErrors$times3[index]) !== null && _formErrors$times3$in !== void 0 && _formErrors$times3$in.end_time),
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, register(`time_intervals.${intervalIndex}.times.${index}.end_time`, {
                  validate: validateTime
                }), {
                  className: styles.timeRangeInput // @ts-ignore react-hook-form doesn't handle nested field arrays well
                  ,
                  defaultValue: timeRange.end_time,
                  placeholder: "HH:MM",
                  "data-testid": "mute-timing-ends-at"
                }))
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.IconButton, {
                className: styles.deleteTimeRange,
                title: 'Remove',
                name: 'trash-alt',
                type: "button",
                onClick: e => {
                  e.preventDefault();
                  removeTimeRange(index);
                }
              })]
            })
          }, timeRange.id);
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
      className: styles.addTimeRange,
      variant: "secondary",
      type: "button",
      icon: 'plus',
      onClick: () => addTimeRange({
        start_time: '',
        end_time: ''
      }),
      children: "Add another time range"
    })]
  });
};

const getStyles = theme => ({
  field: emotion_css_esm.css`
    margin-bottom: 0;
  `,
  timeRange: emotion_css_esm.css`
    margin-bottom: ${theme.spacing(1)};
  `,
  timeRangeInput: emotion_css_esm.css`
    width: 120px;
  `,
  deleteTimeRange: emotion_css_esm.css`
    margin: ${theme.spacing(1)} 0 0 ${theme.spacing(0.5)};
  `,
  addTimeRange: emotion_css_esm.css`
    margin-bottom: ${theme.spacing(2)};
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/amroutes/MuteTimingTimeInterval.tsx
var _p;










const MuteTimingTimeInterval = () => {
  const styles = (0,src.useStyles2)(MuteTimingTimeInterval_getStyles);
  const {
    formState,
    register
  } = (0,index_esm/* useFormContext */.Gc)();
  const {
    fields: timeIntervals,
    append: addTimeInterval,
    remove: removeTimeInterval
  } = (0,index_esm/* useFieldArray */.Dq)({
    name: 'time_intervals'
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src.FieldSet, {
    className: styles.timeIntervalLegend,
    label: "Time intervals",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [_p || (_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: "A time interval is a definition for a moment in time. All fields are lists, and at least one list element must be satisfied to match the field. If a field is left blank, any moment of time will match the field. For an instant of time to match a complete time interval, all fields must match. A mute timing can contain multiple time intervals."
      })), timeIntervals.map((timeInterval, timeIntervalIndex) => {
        var _errors$time_interval, _errors$time_interval2, _errors$time_interval3, _errors$time_interval4, _errors$time_interval5, _errors$time_interval6, _errors$time_interval7, _errors$time_interval8, _errors$time_interval9, _errors$time_interval10, _errors$time_interval11, _errors$time_interval12, _errors$time_interval13, _errors$time_interval14, _errors$time_interval15, _errors$time_interval16, _errors$time_interval17, _errors$time_interval18, _errors$time_interval19, _errors$time_interval20, _errors$time_interval21, _errors$time_interval22;

        const errors = formState.errors;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.timeIntervalSection,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MuteTimingTimeRange, {
            intervalIndex: timeIntervalIndex
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "Days of the week",
            error: (_errors$time_interval = (_errors$time_interval2 = errors.time_intervals) === null || _errors$time_interval2 === void 0 ? void 0 : (_errors$time_interval3 = _errors$time_interval2[timeIntervalIndex]) === null || _errors$time_interval3 === void 0 ? void 0 : (_errors$time_interval4 = _errors$time_interval3.weekdays) === null || _errors$time_interval4 === void 0 ? void 0 : _errors$time_interval4.message) !== null && _errors$time_interval !== void 0 ? _errors$time_interval : '',
            invalid: !!((_errors$time_interval5 = errors.time_intervals) !== null && _errors$time_interval5 !== void 0 && (_errors$time_interval6 = _errors$time_interval5[timeIntervalIndex]) !== null && _errors$time_interval6 !== void 0 && _errors$time_interval6.weekdays),
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.weekdays`, {
              validate: value => validateArrayField(value, day => DAYS_OF_THE_WEEK.includes(day.toLowerCase()), 'Invalid day of the week')
            }), {
              className: styles.input,
              "data-testid": "mute-timing-weekdays" // @ts-ignore react-hook-form doesn't handle nested field arrays well
              ,
              defaultValue: timeInterval.weekdays,
              placeholder: "Example: monday, tuesday:thursday"
            }))
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "Days of the month",
            description: "The days of the month, 1-31, of a month. Negative values can be used to represent days which begin at the end of the month",
            invalid: !!((_errors$time_interval7 = errors.time_intervals) !== null && _errors$time_interval7 !== void 0 && (_errors$time_interval8 = _errors$time_interval7[timeIntervalIndex]) !== null && _errors$time_interval8 !== void 0 && _errors$time_interval8.days_of_month),
            error: (_errors$time_interval9 = errors.time_intervals) === null || _errors$time_interval9 === void 0 ? void 0 : (_errors$time_interval10 = _errors$time_interval9[timeIntervalIndex]) === null || _errors$time_interval10 === void 0 ? void 0 : (_errors$time_interval11 = _errors$time_interval10.days_of_month) === null || _errors$time_interval11 === void 0 ? void 0 : _errors$time_interval11.message,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.days_of_month`, {
              validate: value => validateArrayField(value, day => {
                const parsedDay = parseInt(day, 10);
                return parsedDay > -31 && parsedDay < 0 || parsedDay > 0 && parsedDay < 32;
              }, 'Invalid day')
            }), {
              className: styles.input // @ts-ignore react-hook-form doesn't handle nested field arrays well
              ,
              defaultValue: timeInterval.days_of_month,
              placeholder: "Example: 1, 14:16, -1",
              "data-testid": "mute-timing-days"
            }))
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "Months",
            description: "The months of the year in either numerical or the full calendar month",
            invalid: !!((_errors$time_interval12 = errors.time_intervals) !== null && _errors$time_interval12 !== void 0 && (_errors$time_interval13 = _errors$time_interval12[timeIntervalIndex]) !== null && _errors$time_interval13 !== void 0 && _errors$time_interval13.months),
            error: (_errors$time_interval14 = errors.time_intervals) === null || _errors$time_interval14 === void 0 ? void 0 : (_errors$time_interval15 = _errors$time_interval14[timeIntervalIndex]) === null || _errors$time_interval15 === void 0 ? void 0 : (_errors$time_interval16 = _errors$time_interval15.months) === null || _errors$time_interval16 === void 0 ? void 0 : _errors$time_interval16.message,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.months`, {
              validate: value => validateArrayField(value, month => MONTHS.includes(month) || parseInt(month, 10) < 13 && parseInt(month, 10) > 0, 'Invalid month')
            }), {
              className: styles.input,
              placeholder: "Example: 1:3, may:august, december" // @ts-ignore react-hook-form doesn't handle nested field arrays well
              ,
              defaultValue: timeInterval.months,
              "data-testid": "mute-timing-months"
            }))
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "Years",
            invalid: !!((_errors$time_interval17 = errors.time_intervals) !== null && _errors$time_interval17 !== void 0 && (_errors$time_interval18 = _errors$time_interval17[timeIntervalIndex]) !== null && _errors$time_interval18 !== void 0 && _errors$time_interval18.years),
            error: (_errors$time_interval19 = (_errors$time_interval20 = errors.time_intervals) === null || _errors$time_interval20 === void 0 ? void 0 : (_errors$time_interval21 = _errors$time_interval20[timeIntervalIndex]) === null || _errors$time_interval21 === void 0 ? void 0 : (_errors$time_interval22 = _errors$time_interval21.years) === null || _errors$time_interval22 === void 0 ? void 0 : _errors$time_interval22.message) !== null && _errors$time_interval19 !== void 0 ? _errors$time_interval19 : '',
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.years`, {
              validate: value => validateArrayField(value, year => /^\d{4}$/.test(year), 'Invalid year')
            }), {
              className: styles.input,
              placeholder: "Example: 2021:2022, 2030" // @ts-ignore react-hook-form doesn't handle nested field arrays well
              ,
              defaultValue: timeInterval.years,
              "data-testid": "mute-timing-years"
            }))
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            type: "button",
            variant: "destructive",
            icon: "trash-alt",
            onClick: () => removeTimeInterval(timeIntervalIndex),
            children: "Remove time interval"
          })]
        }, timeInterval.id);
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
        type: "button",
        variant: "secondary",
        className: styles.removeTimeIntervalButton,
        onClick: () => {
          addTimeInterval(defaultTimeInterval);
        },
        icon: "plus",
        children: "Add another time interval"
      })]
    })
  });
};

const MuteTimingTimeInterval_getStyles = theme => ({
  input: emotion_css_esm.css`
    width: 400px;
  `,
  timeIntervalLegend: emotion_css_esm.css`
    legend {
      font-size: 1.25rem;
    }
  `,
  timeIntervalSection: emotion_css_esm.css`
    background-color: ${theme.colors.background.secondary};
    padding: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(1)};
  `,
  removeTimeIntervalButton: emotion_css_esm.css`
    margin-top: ${theme.spacing(1)};
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/amroutes/MuteTimingForm.tsx
var _Alert, _MuteTimingTimeInterv;




















const useDefaultValues = muteTiming => {
  return (0,react.useMemo)(() => {
    const defaultValues = {
      name: '',
      time_intervals: [defaultTimeInterval]
    };

    if (!muteTiming) {
      return defaultValues;
    }

    const intervals = muteTiming.time_intervals.map(interval => {
      var _interval$times, _interval$weekdays$jo, _interval$weekdays, _interval$days_of_mon, _interval$days_of_mon2, _interval$months$join, _interval$months, _interval$years$join, _interval$years;

      return {
        times: (_interval$times = interval.times) !== null && _interval$times !== void 0 ? _interval$times : defaultTimeInterval.times,
        weekdays: (_interval$weekdays$jo = interval === null || interval === void 0 ? void 0 : (_interval$weekdays = interval.weekdays) === null || _interval$weekdays === void 0 ? void 0 : _interval$weekdays.join(', ')) !== null && _interval$weekdays$jo !== void 0 ? _interval$weekdays$jo : defaultTimeInterval.weekdays,
        days_of_month: (_interval$days_of_mon = interval === null || interval === void 0 ? void 0 : (_interval$days_of_mon2 = interval.days_of_month) === null || _interval$days_of_mon2 === void 0 ? void 0 : _interval$days_of_mon2.join(', ')) !== null && _interval$days_of_mon !== void 0 ? _interval$days_of_mon : defaultTimeInterval.days_of_month,
        months: (_interval$months$join = interval === null || interval === void 0 ? void 0 : (_interval$months = interval.months) === null || _interval$months === void 0 ? void 0 : _interval$months.join(', ')) !== null && _interval$months$join !== void 0 ? _interval$months$join : defaultTimeInterval.months,
        years: (_interval$years$join = interval === null || interval === void 0 ? void 0 : (_interval$years = interval.years) === null || _interval$years === void 0 ? void 0 : _interval$years.join(', ')) !== null && _interval$years$join !== void 0 ? _interval$years$join : defaultTimeInterval.years
      };
    });
    return {
      name: muteTiming.name,
      time_intervals: intervals
    };
  }, [muteTiming]);
};

const MuteTimingForm = _ref => {
  var _result$alertmanager_, _formApi$formState$er, _formApi$formState$er2;

  let {
    muteTiming,
    showError
  } = _ref;
  const dispatch = (0,es.useDispatch)();
  const alertManagers = (0,useAlertManagerSources/* useAlertManagersByPermission */.k)('notification');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,useAlertManagerSourceName/* useAlertManagerSourceName */.k)(alertManagers);
  const styles = (0,src.useStyles2)(MuteTimingForm_getStyles);
  const defaultAmCortexConfig = {
    alertmanager_config: {},
    template_files: {}
  };
  const amConfigs = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.amConfigs);
  const {
    result = defaultAmCortexConfig,
    loading
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || redux/* initialAsyncRequestState */.oq;
  const config = (_result$alertmanager_ = result === null || result === void 0 ? void 0 : result.alertmanager_config) !== null && _result$alertmanager_ !== void 0 ? _result$alertmanager_ : {};
  const defaultValues = useDefaultValues(muteTiming);
  const formApi = (0,index_esm/* useForm */.cI)({
    defaultValues
  });

  const onSubmit = values => {
    var _config$mute_time_int, _config$route;

    const newMuteTiming = createMuteTiming(values);
    const muteTimings = muteTiming ? config === null || config === void 0 ? void 0 : (_config$mute_time_int = config.mute_time_intervals) === null || _config$mute_time_int === void 0 ? void 0 : _config$mute_time_int.filter(_ref2 => {
      let {
        name
      } = _ref2;
      return name !== muteTiming.name;
    }) : config.mute_time_intervals;
    const newConfig = Object.assign({}, result, {
      alertmanager_config: Object.assign({}, config, {
        route: muteTiming && newMuteTiming.name !== muteTiming.name ? (0,alertmanager/* renameMuteTimings */.FM)(newMuteTiming.name, muteTiming.name, (_config$route = config.route) !== null && _config$route !== void 0 ? _config$route : {}) : config.route,
        mute_time_intervals: [...(muteTimings || []), newMuteTiming]
      })
    });
    dispatch((0,actions/* updateAlertManagerConfigAction */.mM)({
      newConfig,
      oldConfig: result,
      alertManagerSourceName: alertManagerSourceName,
      successMessage: 'Mute timing saved',
      redirectPath: '/alerting/routes/'
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(AlertingPageWrapper/* AlertingPageWrapper */.J, {
    pageId: "am-routes",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AlertManagerPicker/* AlertManagerPicker */.P, {
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName,
      disabled: true,
      dataSources: alertManagers
    }), result && !loading && /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FormProvider */.RV, Object.assign({}, formApi, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
        onSubmit: formApi.handleSubmit(onSubmit),
        "data-testid": "mute-timing-form",
        children: [showError && (_Alert || (_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Alert, {
          title: "No matching mute timing found"
        }))), /*#__PURE__*/(0,jsx_runtime.jsxs)(src.FieldSet, {
          label: 'Create mute timing',
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            required: true,
            label: "Name",
            description: "A unique name for the mute timing",
            invalid: !!((_formApi$formState$er = formApi.formState.errors) !== null && _formApi$formState$er !== void 0 && _formApi$formState$er.name),
            error: (_formApi$formState$er2 = formApi.formState.errors.name) === null || _formApi$formState$er2 === void 0 ? void 0 : _formApi$formState$er2.message,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, formApi.register('name', {
              required: true,
              validate: value => {
                if (!muteTiming) {
                  var _config$mute_time_int2;

                  const existingMuteTiming = config === null || config === void 0 ? void 0 : (_config$mute_time_int2 = config.mute_time_intervals) === null || _config$mute_time_int2 === void 0 ? void 0 : _config$mute_time_int2.find(_ref3 => {
                    let {
                      name
                    } = _ref3;
                    return value === name;
                  });
                  return existingMuteTiming ? `Mute timing already exists for "${value}"` : true;
                }

                return value.length > 0 || 'Name is required';
              }
            }), {
              className: styles.input,
              "data-testid": 'mute-timing-name'
            }))
          }), _MuteTimingTimeInterv || (_MuteTimingTimeInterv = /*#__PURE__*/(0,jsx_runtime.jsx)(MuteTimingTimeInterval, {})), /*#__PURE__*/(0,jsx_runtime.jsx)(src.LinkButton, {
            type: "button",
            variant: "secondary",
            href: (0,misc/* makeAMLink */.eQ)('/alerting/routes/', alertManagerSourceName),
            children: "Cancel"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            type: "submit",
            className: styles.submitButton,
            children: muteTiming ? 'Save' : 'Submit'
          })]
        })]
      })
    }))]
  });
};

const MuteTimingForm_getStyles = theme => ({
  input: emotion_css_esm.css`
    width: 400px;
  `,
  submitButton: emotion_css_esm.css`
    margin-left: ${theme.spacing(1)};
  `
});

/* harmony default export */ const amroutes_MuteTimingForm = (MuteTimingForm);
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/MuteTimings.tsx
var _LoadingPlaceholder, _Route, _Redirect;
















const MuteTimings = () => {
  const [queryParams] = (0,useQueryParams/* useQueryParams */.K)();
  const dispatch = (0,es.useDispatch)();
  const alertManagers = (0,useAlertManagerSources/* useAlertManagersByPermission */.k)('notification');
  const [alertManagerSourceName] = (0,useAlertManagerSourceName/* useAlertManagerSourceName */.k)(alertManagers);
  const amConfigs = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.amConfigs);
  const fetchConfig = (0,react.useCallback)(() => {
    if (alertManagerSourceName) {
      dispatch((0,actions/* fetchAlertManagerConfigAction */.Yh)(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch]);
  (0,react.useEffect)(() => {
    fetchConfig();
  }, [fetchConfig]);
  const {
    result,
    error,
    loading
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || redux/* initialAsyncRequestState */.oq;
  const config = result === null || result === void 0 ? void 0 : result.alertmanager_config;
  const getMuteTimingByName = (0,react.useCallback)(id => {
    var _config$mute_time_int;

    return config === null || config === void 0 ? void 0 : (_config$mute_time_int = config.mute_time_intervals) === null || _config$mute_time_int === void 0 ? void 0 : _config$mute_time_int.find(_ref => {
      let {
        name
      } = _ref;
      return name === id;
    });
  }, [config]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [loading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
      text: "Loading mute timing"
    }))), error && !loading && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Alert, {
      severity: "error",
      title: `Error loading Alertmanager config for ${alertManagerSourceName}`,
      children: error.message || 'Unknown error.'
    }), result && !error && /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
      children: [_Route || (_Route = /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        exact: true,
        path: "/alerting/routes/mute-timing/new",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(amroutes_MuteTimingForm, {})
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        exact: true,
        path: "/alerting/routes/mute-timing/edit",
        children: () => {
          if (queryParams['muteName']) {
            const muteTiming = getMuteTimingByName(String(queryParams['muteName']));
            return /*#__PURE__*/(0,jsx_runtime.jsx)(amroutes_MuteTimingForm, {
              muteTiming: muteTiming,
              showError: !muteTiming
            });
          }

          return _Redirect || (_Redirect = /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
            to: "/alerting/routes"
          }));
        }
      })]
    })]
  });
};

/* harmony default export */ const unified_MuteTimings = (MuteTimings);

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

/***/ })

}]);