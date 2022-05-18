"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["MuteTimings"],{

/***/ "./public/app/features/alerting/unified/MuteTimings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var _components_amroutes_MuteTimingForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/MuteTimingForm.tsx");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _LoadingPlaceholder, _Route, _Redirect;
















const MuteTimings = () => {
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_3__.useQueryParams)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const alertManagers = (0,_hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_6__.useAlertManagersByPermission)('notification');
  const [alertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_5__.useAlertManagerSourceName)(alertManagers);
  const amConfigs = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const fetchConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (alertManagerSourceName) {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_8__.fetchAlertManagerConfigAction)(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchConfig();
  }, [fetchConfig]);
  const {
    result,
    error,
    loading
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_9__.initialAsyncRequestState;
  const config = result === null || result === void 0 ? void 0 : result.alertmanager_config;
  const getMuteTimingByName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(id => {
    var _config$mute_time_int;

    return config === null || config === void 0 ? void 0 : (_config$mute_time_int = config.mute_time_intervals) === null || _config$mute_time_int === void 0 ? void 0 : _config$mute_time_int.find(({
      name
    }) => name === id);
  }, [config]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [loading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder, {
      text: "Loading mute timing"
    }))), error && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, {
      severity: "error",
      title: `Error loading Alertmanager config for ${alertManagerSourceName}`,
      children: error.message || 'Unknown error.'
    }), result && !error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Switch, {
      children: [_Route || (_Route = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        exact: true,
        path: "/alerting/routes/mute-timing/new",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_amroutes_MuteTimingForm__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        exact: true,
        path: "/alerting/routes/mute-timing/edit",
        children: () => {
          if (queryParams['muteName']) {
            const muteTiming = getMuteTimingByName(String(queryParams['muteName']));
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_amroutes_MuteTimingForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
              muteTiming: muteTiming,
              showError: !muteTiming
            });
          }

          return _Redirect || (_Redirect = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Redirect, {
            to: "/alerting/routes"
          }));
        }
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MuteTimings);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertingPageWrapper": () => (/* binding */ AlertingPageWrapper)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const AlertingPageWrapper = ({
  children,
  pageId,
  isLoading
}) => {
  const navModel = (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_3__.getNavModel)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.navIndex), pageId);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__["default"].Contents, {
      isLoading: isLoading,
      children: children
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/MuteTimingForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
/* harmony import */ var _hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
/* harmony import */ var _hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
/* harmony import */ var _utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/utils/mute-timings.ts");
/* harmony import */ var _utils_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
/* harmony import */ var _AlertManagerPicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
/* harmony import */ var _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _MuteTimingTimeInterval__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/MuteTimingTimeInterval.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Alert, _MuteTimingTimeInterv;




















const useDefaultValues = muteTiming => {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const defaultValues = {
      name: '',
      time_intervals: [_utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval]
    };

    if (!muteTiming) {
      return defaultValues;
    }

    const intervals = muteTiming.time_intervals.map(interval => {
      var _interval$times, _interval$weekdays$jo, _interval$weekdays, _interval$days_of_mon, _interval$days_of_mon2, _interval$months$join, _interval$months, _interval$years$join, _interval$years;

      return {
        times: (_interval$times = interval.times) !== null && _interval$times !== void 0 ? _interval$times : _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval.times,
        weekdays: (_interval$weekdays$jo = interval === null || interval === void 0 ? void 0 : (_interval$weekdays = interval.weekdays) === null || _interval$weekdays === void 0 ? void 0 : _interval$weekdays.join(', ')) !== null && _interval$weekdays$jo !== void 0 ? _interval$weekdays$jo : _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval.weekdays,
        days_of_month: (_interval$days_of_mon = interval === null || interval === void 0 ? void 0 : (_interval$days_of_mon2 = interval.days_of_month) === null || _interval$days_of_mon2 === void 0 ? void 0 : _interval$days_of_mon2.join(', ')) !== null && _interval$days_of_mon !== void 0 ? _interval$days_of_mon : _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval.days_of_month,
        months: (_interval$months$join = interval === null || interval === void 0 ? void 0 : (_interval$months = interval.months) === null || _interval$months === void 0 ? void 0 : _interval$months.join(', ')) !== null && _interval$months$join !== void 0 ? _interval$months$join : _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval.months,
        years: (_interval$years$join = interval === null || interval === void 0 ? void 0 : (_interval$years = interval.years) === null || _interval$years === void 0 ? void 0 : _interval$years.join(', ')) !== null && _interval$years$join !== void 0 ? _interval$years$join : _utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.defaultTimeInterval.years
      };
    });
    return {
      name: muteTiming.name,
      time_intervals: intervals
    };
  }, [muteTiming]);
};

const MuteTimingForm = ({
  muteTiming,
  showError
}) => {
  var _result$alertmanager_, _formApi$formState$er, _formApi$formState$er2;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const alertManagers = (0,_hooks_useAlertManagerSources__WEBPACK_IMPORTED_MODULE_6__.useAlertManagersByPermission)('notification');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,_hooks_useAlertManagerSourceName__WEBPACK_IMPORTED_MODULE_5__.useAlertManagerSourceName)(alertManagers);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  const defaultAmCortexConfig = {
    alertmanager_config: {},
    template_files: {}
  };
  const amConfigs = (0,_hooks_useUnifiedAlertingSelector__WEBPACK_IMPORTED_MODULE_7__.useUnifiedAlertingSelector)(state => state.amConfigs);
  const {
    result = defaultAmCortexConfig,
    loading
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || _utils_redux__WEBPACK_IMPORTED_MODULE_12__.initialAsyncRequestState;
  const config = (_result$alertmanager_ = result === null || result === void 0 ? void 0 : result.alertmanager_config) !== null && _result$alertmanager_ !== void 0 ? _result$alertmanager_ : {};
  const defaultValues = useDefaultValues(muteTiming);
  const formApi = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    defaultValues
  });

  const onSubmit = values => {
    var _config$mute_time_int, _config$route;

    const newMuteTiming = (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_11__.createMuteTiming)(values);
    const muteTimings = muteTiming ? config === null || config === void 0 ? void 0 : (_config$mute_time_int = config.mute_time_intervals) === null || _config$mute_time_int === void 0 ? void 0 : _config$mute_time_int.filter(({
      name
    }) => name !== muteTiming.name) : config.mute_time_intervals;
    const newConfig = Object.assign({}, result, {
      alertmanager_config: Object.assign({}, config, {
        route: muteTiming && newMuteTiming.name !== muteTiming.name ? (0,_utils_alertmanager__WEBPACK_IMPORTED_MODULE_9__.renameMuteTimings)(newMuteTiming.name, muteTiming.name, (_config$route = config.route) !== null && _config$route !== void 0 ? _config$route : {}) : config.route,
        mute_time_intervals: [...(muteTimings || []), newMuteTiming]
      })
    });
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_8__.updateAlertManagerConfigAction)({
      newConfig,
      oldConfig: result,
      alertManagerSourceName: alertManagerSourceName,
      successMessage: 'Mute timing saved',
      redirectPath: '/alerting/routes/'
    }));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_14__.AlertingPageWrapper, {
    pageId: "am-routes",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_AlertManagerPicker__WEBPACK_IMPORTED_MODULE_13__.AlertManagerPicker, {
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName,
      disabled: true,
      dataSources: alertManagers
    }), result && !loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, Object.assign({}, formApi, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("form", {
        onSubmit: formApi.handleSubmit(onSubmit),
        "data-testid": "mute-timing-form",
        children: [showError && (_Alert || (_Alert = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, {
          title: "No matching mute timing found"
        }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.FieldSet, {
          label: 'Create mute timing',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Field, {
            required: true,
            label: "Name",
            description: "A unique name for the mute timing",
            invalid: !!((_formApi$formState$er = formApi.formState.errors) !== null && _formApi$formState$er !== void 0 && _formApi$formState$er.name),
            error: (_formApi$formState$er2 = formApi.formState.errors.name) === null || _formApi$formState$er2 === void 0 ? void 0 : _formApi$formState$er2.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Input, Object.assign({}, formApi.register('name', {
              required: true,
              validate: value => {
                if (!muteTiming) {
                  var _config$mute_time_int2;

                  const existingMuteTiming = config === null || config === void 0 ? void 0 : (_config$mute_time_int2 = config.mute_time_intervals) === null || _config$mute_time_int2 === void 0 ? void 0 : _config$mute_time_int2.find(({
                    name
                  }) => value === name);
                  return existingMuteTiming ? `Mute timing already exists for "${value}"` : true;
                }

                return value.length > 0 || 'Name is required';
              }
            }), {
              className: styles.input,
              "data-testid": 'mute-timing-name'
            }))
          }), _MuteTimingTimeInterv || (_MuteTimingTimeInterv = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_MuteTimingTimeInterval__WEBPACK_IMPORTED_MODULE_15__.MuteTimingTimeInterval, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {
            type: "button",
            variant: "secondary",
            href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_10__.makeAMLink)('/alerting/routes/', alertManagerSourceName),
            children: "Cancel"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
            type: "submit",
            className: styles.submitButton,
            children: muteTiming ? 'Save' : 'Submit'
          })]
        })]
      })
    }))]
  });
};

const getStyles = theme => ({
  input: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 400px;
  `,
  submitButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-left: ${theme.spacing(1)};
  `
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MuteTimingForm);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/MuteTimingTimeInterval.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MuteTimingTimeInterval": () => (/* binding */ MuteTimingTimeInterval)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/mute-timings.ts");
/* harmony import */ var _MuteTimingTimeRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/amroutes/MuteTimingTimeRange.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p;










const MuteTimingTimeInterval = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const {
    formState,
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const {
    fields: timeIntervals,
    append: addTimeInterval,
    remove: removeTimeInterval
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFieldArray)({
    name: 'time_intervals'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldSet, {
    className: styles.timeIntervalLegend,
    label: "Time intervals",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
      children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        children: "A time interval is a definition for a moment in time. All fields are lists, and at least one list element must be satisfied to match the field. If a field is left blank, any moment of time will match the field. For an instant of time to match a complete time interval, all fields must match. A mute timing can contain multiple time intervals."
      })), timeIntervals.map((timeInterval, timeIntervalIndex) => {
        var _errors$time_interval, _errors$time_interval2, _errors$time_interval3, _errors$time_interval4, _errors$time_interval5, _errors$time_interval6, _errors$time_interval7, _errors$time_interval8, _errors$time_interval9, _errors$time_interval10, _errors$time_interval11, _errors$time_interval12, _errors$time_interval13, _errors$time_interval14, _errors$time_interval15, _errors$time_interval16, _errors$time_interval17, _errors$time_interval18, _errors$time_interval19, _errors$time_interval20, _errors$time_interval21, _errors$time_interval22;

        const errors = formState.errors;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: styles.timeIntervalSection,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MuteTimingTimeRange__WEBPACK_IMPORTED_MODULE_5__.MuteTimingTimeRange, {
            intervalIndex: timeIntervalIndex
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Days of the week",
            error: (_errors$time_interval = (_errors$time_interval2 = errors.time_intervals) === null || _errors$time_interval2 === void 0 ? void 0 : (_errors$time_interval3 = _errors$time_interval2[timeIntervalIndex]) === null || _errors$time_interval3 === void 0 ? void 0 : (_errors$time_interval4 = _errors$time_interval3.weekdays) === null || _errors$time_interval4 === void 0 ? void 0 : _errors$time_interval4.message) !== null && _errors$time_interval !== void 0 ? _errors$time_interval : '',
            invalid: !!((_errors$time_interval5 = errors.time_intervals) !== null && _errors$time_interval5 !== void 0 && (_errors$time_interval6 = _errors$time_interval5[timeIntervalIndex]) !== null && _errors$time_interval6 !== void 0 && _errors$time_interval6.weekdays),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.weekdays`, {
              validate: value => (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.validateArrayField)(value, day => _utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.DAYS_OF_THE_WEEK.includes(day.toLowerCase()), 'Invalid day of the week')
            }), {
              className: styles.input,
              "data-testid": "mute-timing-weekdays" // @ts-ignore react-hook-form doesn't handle nested field arrays well
              ,
              defaultValue: timeInterval.weekdays,
              placeholder: "Example: monday, tuesday:thursday"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Days of the month",
            description: "The days of the month, 1-31, of a month. Negative values can be used to represent days which begin at the end of the month",
            invalid: !!((_errors$time_interval7 = errors.time_intervals) !== null && _errors$time_interval7 !== void 0 && (_errors$time_interval8 = _errors$time_interval7[timeIntervalIndex]) !== null && _errors$time_interval8 !== void 0 && _errors$time_interval8.days_of_month),
            error: (_errors$time_interval9 = errors.time_intervals) === null || _errors$time_interval9 === void 0 ? void 0 : (_errors$time_interval10 = _errors$time_interval9[timeIntervalIndex]) === null || _errors$time_interval10 === void 0 ? void 0 : (_errors$time_interval11 = _errors$time_interval10.days_of_month) === null || _errors$time_interval11 === void 0 ? void 0 : _errors$time_interval11.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.days_of_month`, {
              validate: value => (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.validateArrayField)(value, day => {
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
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Months",
            description: "The months of the year in either numerical or the full calendar month",
            invalid: !!((_errors$time_interval12 = errors.time_intervals) !== null && _errors$time_interval12 !== void 0 && (_errors$time_interval13 = _errors$time_interval12[timeIntervalIndex]) !== null && _errors$time_interval13 !== void 0 && _errors$time_interval13.months),
            error: (_errors$time_interval14 = errors.time_intervals) === null || _errors$time_interval14 === void 0 ? void 0 : (_errors$time_interval15 = _errors$time_interval14[timeIntervalIndex]) === null || _errors$time_interval15 === void 0 ? void 0 : (_errors$time_interval16 = _errors$time_interval15.months) === null || _errors$time_interval16 === void 0 ? void 0 : _errors$time_interval16.message,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.months`, {
              validate: value => (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.validateArrayField)(value, month => _utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.MONTHS.includes(month) || parseInt(month, 10) < 13 && parseInt(month, 10) > 0, 'Invalid month')
            }), {
              className: styles.input,
              placeholder: "Example: 1:3, may:august, december" // @ts-ignore react-hook-form doesn't handle nested field arrays well
              ,
              defaultValue: timeInterval.months,
              "data-testid": "mute-timing-months"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
            label: "Years",
            invalid: !!((_errors$time_interval17 = errors.time_intervals) !== null && _errors$time_interval17 !== void 0 && (_errors$time_interval18 = _errors$time_interval17[timeIntervalIndex]) !== null && _errors$time_interval18 !== void 0 && _errors$time_interval18.years),
            error: (_errors$time_interval19 = (_errors$time_interval20 = errors.time_intervals) === null || _errors$time_interval20 === void 0 ? void 0 : (_errors$time_interval21 = _errors$time_interval20[timeIntervalIndex]) === null || _errors$time_interval21 === void 0 ? void 0 : (_errors$time_interval22 = _errors$time_interval21.years) === null || _errors$time_interval22 === void 0 ? void 0 : _errors$time_interval22.message) !== null && _errors$time_interval19 !== void 0 ? _errors$time_interval19 : '',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`time_intervals.${timeIntervalIndex}.years`, {
              validate: value => (0,_utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.validateArrayField)(value, year => /^\d{4}$/.test(year), 'Invalid year')
            }), {
              className: styles.input,
              placeholder: "Example: 2021:2022, 2030" // @ts-ignore react-hook-form doesn't handle nested field arrays well
              ,
              defaultValue: timeInterval.years,
              "data-testid": "mute-timing-years"
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            type: "button",
            variant: "destructive",
            icon: "trash-alt",
            onClick: () => removeTimeInterval(timeIntervalIndex),
            children: "Remove time interval"
          })]
        }, timeInterval.id);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
        type: "button",
        variant: "secondary",
        className: styles.removeTimeIntervalButton,
        onClick: () => {
          addTimeInterval(_utils_mute_timings__WEBPACK_IMPORTED_MODULE_4__.defaultTimeInterval);
        },
        icon: "plus",
        children: "Add another time interval"
      })]
    })
  });
};

const getStyles = theme => ({
  input: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 400px;
  `,
  timeIntervalLegend: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    legend {
      font-size: 1.25rem;
    }
  `,
  timeIntervalSection: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    background-color: ${theme.colors.background.secondary};
    padding: ${theme.spacing(1)};
    margin-bottom: ${theme.spacing(1)};
  `,
  removeTimeIntervalButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-top: ${theme.spacing(1)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/components/amroutes/MuteTimingTimeRange.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MuteTimingTimeRange": () => (/* binding */ MuteTimingTimeRange)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");







const MuteTimingTimeRange = ({
  intervalIndex
}) => {
  var _formState$errors$tim, _formErrors$times$som, _formErrors$times;

  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles);
  const {
    register,
    formState
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const {
    fields: timeRanges,
    append: addTimeRange,
    remove: removeTimeRange
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFieldArray)({
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
      className: styles.field,
      label: "Time range",
      description: "The time inclusive of the starting time and exclusive of the end time in UTC",
      invalid: timeRangeInvalid,
      error: timeRangeInvalid ? 'Times must be between 00:00 and 24:00 UTC' : '',
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: timeRanges.map((timeRange, index) => {
          var _formErrors$times2, _formErrors$times2$in, _formErrors$times3, _formErrors$times3$in;

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: styles.timeRange,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineFieldRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
                label: "Start time",
                invalid: !!(formErrors !== null && formErrors !== void 0 && (_formErrors$times2 = formErrors.times) !== null && _formErrors$times2 !== void 0 && (_formErrors$times2$in = _formErrors$times2[index]) !== null && _formErrors$times2$in !== void 0 && _formErrors$times2$in.start_time),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`time_intervals.${intervalIndex}.times.${index}.start_time`, {
                  validate: validateTime
                }), {
                  className: styles.timeRangeInput // @ts-ignore react-hook-form doesn't handle nested field arrays well
                  ,
                  defaultValue: timeRange.start_time,
                  placeholder: "HH:MM",
                  "data-testid": "mute-timing-starts-at"
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, {
                label: "End time",
                invalid: !!(formErrors !== null && formErrors !== void 0 && (_formErrors$times3 = formErrors.times) !== null && _formErrors$times3 !== void 0 && (_formErrors$times3$in = _formErrors$times3[index]) !== null && _formErrors$times3$in !== void 0 && _formErrors$times3$in.end_time),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`time_intervals.${intervalIndex}.times.${index}.end_time`, {
                  validate: validateTime
                }), {
                  className: styles.timeRangeInput // @ts-ignore react-hook-form doesn't handle nested field arrays well
                  ,
                  defaultValue: timeRange.end_time,
                  placeholder: "HH:MM",
                  "data-testid": "mute-timing-ends-at"
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
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
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
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
  field: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: 0;
  `,
  timeRange: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(1)};
  `,
  timeRangeInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    width: 120px;
  `,
  deleteTimeRange: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin: ${theme.spacing(1)} 0 0 ${theme.spacing(0.5)};
  `,
  addTimeRange: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
    margin-bottom: ${theme.spacing(2)};
  `
});

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAlertManagerSourceName": () => (/* binding */ useAlertManagerSourceName)
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
  const [queryParams, updateQueryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_1__.useQueryParams)();
  const isAlertManagerAvailable = useIsAlertManagerAvailable(availableAlertManagers);
  const update = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(alertManagerSourceName => {
    if (!isAlertManagerAvailable(alertManagerSourceName)) {
      return;
    }

    if (alertManagerSourceName === _utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME) {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_LOCAL_STORAGE_KEY);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_QUERY_KEY]: null
      });
    } else {
      app_core_store__WEBPACK_IMPORTED_MODULE_2__["default"].set(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_LOCAL_STORAGE_KEY, alertManagerSourceName);
      updateQueryParams({
        [_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_QUERY_KEY]: alertManagerSourceName
      });
    }
  }, [updateQueryParams, isAlertManagerAvailable]);
  const querySource = queryParams[_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_QUERY_KEY];

  if (querySource && typeof querySource === 'string') {
    if (isAlertManagerAvailable(querySource)) {
      return [querySource, update];
    } else {
      // non existing alertmanager
      return [undefined, update];
    }
  }

  const storeSource = app_core_store__WEBPACK_IMPORTED_MODULE_2__["default"].get(_utils_constants__WEBPACK_IMPORTED_MODULE_3__.ALERTMANAGER_NAME_LOCAL_STORAGE_KEY);

  if (storeSource && typeof storeSource === 'string' && isAlertManagerAvailable(storeSource)) {
    update(storeSource);
    return [storeSource, update];
  }

  if (isAlertManagerAvailable(_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME)) {
    return [_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULES_SOURCE_NAME, update];
  }

  return [undefined, update];
}

/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAlertManagersByPermission": () => (/* binding */ useAlertManagersByPermission)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");


function useAlertManagersByPermission(accessType) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_1__.getAlertManagerDataSourcesByPermission)(accessType), [accessType]);
}

/***/ }),

/***/ "./public/app/features/alerting/unified/utils/mute-timings.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DAYS_OF_THE_WEEK": () => (/* binding */ DAYS_OF_THE_WEEK),
/* harmony export */   "MONTHS": () => (/* binding */ MONTHS),
/* harmony export */   "createMuteTiming": () => (/* binding */ createMuteTiming),
/* harmony export */   "defaultTimeInterval": () => (/* binding */ defaultTimeInterval),
/* harmony export */   "validateArrayField": () => (/* binding */ validateArrayField)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

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
  const timeIntervals = fields.time_intervals.map(({
    times,
    weekdays,
    days_of_month,
    months,
    years
  }) => {
    var _convertStringToArray;

    const interval = {
      times: times.filter(({
        start_time,
        end_time
      }) => !!start_time && !!end_time),
      weekdays: (_convertStringToArray = convertStringToArray(weekdays)) === null || _convertStringToArray === void 0 ? void 0 : _convertStringToArray.map(v => v.toLowerCase()),
      days_of_month: convertStringToArray(days_of_month),
      months: convertStringToArray(months),
      years: convertStringToArray(years)
    };
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omitBy)(interval, lodash__WEBPACK_IMPORTED_MODULE_0__.isUndefined);
  });
  return {
    name: fields.name,
    time_intervals: timeIntervals
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFZm5GLE1BQUFBLFFBQVEsMkJBQUVzSCxvQkFBb0IsQ0FBQ3RILFFBQUQsQ0FBdEIsMERBQUUsc0JBQWdDSCxHQUFoQyxDQUFxQzRILENBQUQsSUFBT0EsQ0FBQyxDQUFDcEUsV0FBRixFQUEzQyxDQUZLO0FBR2ZuRCxNQUFBQSxhQUFhLEVBQUVvSCxvQkFBb0IsQ0FBQ3BILGFBQUQsQ0FIcEI7QUFJZkMsTUFBQUEsTUFBTSxFQUFFbUgsb0JBQW9CLENBQUNuSCxNQUFELENBSmI7QUFLZkMsTUFBQUEsS0FBSyxFQUFFa0gsb0JBQW9CLENBQUNsSCxLQUFEO0FBTFosS0FBakI7QUFRQSxXQUFPMkcsOENBQU0sQ0FBQ2pILFFBQUQsRUFBV2tILCtDQUFYLENBQWI7QUFDRCxHQVhtQyxDQUF0QztBQWNBLFNBQU87QUFDTHJKLElBQUFBLElBQUksRUFBRThFLE1BQU0sQ0FBQzlFLElBRFI7QUFFTGdDLElBQUFBLGNBQWMsRUFBRStDO0FBRlgsR0FBUDtBQUlELENBbkJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9NdXRlVGltaW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL0FsZXJ0aW5nUGFnZVdyYXBwZXIudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbXJvdXRlcy9NdXRlVGltaW5nRm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9jb21wb25lbnRzL2Ftcm91dGVzL011dGVUaW1pbmdUaW1lSW50ZXJ2YWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvY29tcG9uZW50cy9hbXJvdXRlcy9NdXRlVGltaW5nVGltZVJhbmdlLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91bmlmaWVkL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUudHMiLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvdW5pZmllZC9ob29rcy91c2VBbGVydE1hbmFnZXJTb3VyY2VzLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3VuaWZpZWQvdXRpbHMvbXV0ZS10aW1pbmdzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSb3V0ZSwgUmVkaXJlY3QsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBBbGVydCwgTG9hZGluZ1BsYWNlaG9sZGVyIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IHsgdXNlUXVlcnlQYXJhbXMgfSBmcm9tICdhcHAvY29yZS9ob29rcy91c2VRdWVyeVBhcmFtcyc7XG5pbXBvcnQgeyBNdXRlVGltZUludGVydmFsIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgTXV0ZVRpbWluZ0Zvcm0gZnJvbSAnLi9jb21wb25lbnRzL2Ftcm91dGVzL011dGVUaW1pbmdGb3JtJztcbmltcG9ydCB7IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSBmcm9tICcuL2hvb2tzL3VzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUnO1xuaW1wb3J0IHsgdXNlQWxlcnRNYW5hZ2Vyc0J5UGVybWlzc2lvbiB9IGZyb20gJy4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlcyc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4vaG9va3MvdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3InO1xuaW1wb3J0IHsgZmV0Y2hBbGVydE1hbmFnZXJDb25maWdBY3Rpb24gfSBmcm9tICcuL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgaW5pdGlhbEFzeW5jUmVxdWVzdFN0YXRlIH0gZnJvbSAnLi91dGlscy9yZWR1eCc7XG5cbmNvbnN0IE11dGVUaW1pbmdzID0gKCkgPT4ge1xuICBjb25zdCBbcXVlcnlQYXJhbXNdID0gdXNlUXVlcnlQYXJhbXMoKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBhbGVydE1hbmFnZXJzID0gdXNlQWxlcnRNYW5hZ2Vyc0J5UGVybWlzc2lvbignbm90aWZpY2F0aW9uJyk7XG4gIGNvbnN0IFthbGVydE1hbmFnZXJTb3VyY2VOYW1lXSA9IHVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUoYWxlcnRNYW5hZ2Vycyk7XG5cbiAgY29uc3QgYW1Db25maWdzID0gdXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hbUNvbmZpZ3MpO1xuXG4gIGNvbnN0IGZldGNoQ29uZmlnID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSB7XG4gICAgICBkaXNwYXRjaChmZXRjaEFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbihhbGVydE1hbmFnZXJTb3VyY2VOYW1lKSk7XG4gICAgfVxuICB9LCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgZGlzcGF0Y2hdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQ29uZmlnKCk7XG4gIH0sIFtmZXRjaENvbmZpZ10pO1xuXG4gIGNvbnN0IHsgcmVzdWx0LCBlcnJvciwgbG9hZGluZyB9ID1cbiAgICAoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSAmJiBhbUNvbmZpZ3NbYWxlcnRNYW5hZ2VyU291cmNlTmFtZV0pIHx8IGluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZTtcblxuICBjb25zdCBjb25maWcgPSByZXN1bHQ/LmFsZXJ0bWFuYWdlcl9jb25maWc7XG5cbiAgY29uc3QgZ2V0TXV0ZVRpbWluZ0J5TmFtZSA9IHVzZUNhbGxiYWNrKFxuICAgIChpZDogc3RyaW5nKTogTXV0ZVRpbWVJbnRlcnZhbCB8IHVuZGVmaW5lZCA9PiB7XG4gICAgICByZXR1cm4gY29uZmlnPy5tdXRlX3RpbWVfaW50ZXJ2YWxzPy5maW5kKCh7IG5hbWUgfTogTXV0ZVRpbWVJbnRlcnZhbCkgPT4gbmFtZSA9PT0gaWQpO1xuICAgIH0sXG4gICAgW2NvbmZpZ11cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bG9hZGluZyAmJiA8TG9hZGluZ1BsYWNlaG9sZGVyIHRleHQ9XCJMb2FkaW5nIG11dGUgdGltaW5nXCIgLz59XG4gICAgICB7ZXJyb3IgJiYgIWxvYWRpbmcgJiYgKFxuICAgICAgICA8QWxlcnQgc2V2ZXJpdHk9XCJlcnJvclwiIHRpdGxlPXtgRXJyb3IgbG9hZGluZyBBbGVydG1hbmFnZXIgY29uZmlnIGZvciAke2FsZXJ0TWFuYWdlclNvdXJjZU5hbWV9YH0+XG4gICAgICAgICAge2Vycm9yLm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3IuJ31cbiAgICAgICAgPC9BbGVydD5cbiAgICAgICl9XG4gICAgICB7cmVzdWx0ICYmICFlcnJvciAmJiAoXG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvYWxlcnRpbmcvcm91dGVzL211dGUtdGltaW5nL25ld1wiPlxuICAgICAgICAgICAgPE11dGVUaW1pbmdGb3JtIC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9hbGVydGluZy9yb3V0ZXMvbXV0ZS10aW1pbmcvZWRpdFwiPlxuICAgICAgICAgICAgeygpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zWydtdXRlTmFtZSddKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbXV0ZVRpbWluZyA9IGdldE11dGVUaW1pbmdCeU5hbWUoU3RyaW5nKHF1ZXJ5UGFyYW1zWydtdXRlTmFtZSddKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxNdXRlVGltaW5nRm9ybSBtdXRlVGltaW5nPXttdXRlVGltaW5nfSBzaG93RXJyb3I9eyFtdXRlVGltaW5nfSAvPjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL2FsZXJ0aW5nL3JvdXRlc1wiIC8+O1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNdXRlVGltaW5ncztcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUGFnZSBmcm9tICdhcHAvY29yZS9jb21wb25lbnRzL1BhZ2UvUGFnZSc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBTdG9yZVN0YXRlIH0gZnJvbSAnYXBwL3R5cGVzL3N0b3JlJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcGFnZUlkOiBzdHJpbmc7XG4gIGlzTG9hZGluZz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBBbGVydGluZ1BhZ2VXcmFwcGVyOiBGQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgcGFnZUlkLCBpc0xvYWRpbmcgfSkgPT4ge1xuICBjb25zdCBuYXZNb2RlbCA9IGdldE5hdk1vZGVsKFxuICAgIHVzZVNlbGVjdG9yKChzdGF0ZTogU3RvcmVTdGF0ZSkgPT4gc3RhdGUubmF2SW5kZXgpLFxuICAgIHBhZ2VJZFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgIDxQYWdlLkNvbnRlbnRzIGlzTG9hZGluZz17aXNMb2FkaW5nfT57Y2hpbGRyZW59PC9QYWdlLkNvbnRlbnRzPlxuICAgIDwvUGFnZT5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jc3MnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtUHJvdmlkZXIsIHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEFsZXJ0LCBGaWVsZCwgRmllbGRTZXQsIElucHV0LCBCdXR0b24sIExpbmtCdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5pbXBvcnQge1xuICBBbGVydG1hbmFnZXJDb25maWcsXG4gIEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyxcbiAgTXV0ZVRpbWVJbnRlcnZhbCxcbn0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlTmFtZSc7XG5pbXBvcnQgeyB1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQWxlcnRNYW5hZ2VyU291cmNlcyc7XG5pbXBvcnQgeyB1c2VVbmlmaWVkQWxlcnRpbmdTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yJztcbmltcG9ydCB7IHVwZGF0ZUFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiB9IGZyb20gJy4uLy4uL3N0YXRlL2FjdGlvbnMnO1xuaW1wb3J0IHsgTXV0ZVRpbWluZ0ZpZWxkcyB9IGZyb20gJy4uLy4uL3R5cGVzL211dGUtdGltaW5nLWZvcm0nO1xuaW1wb3J0IHsgcmVuYW1lTXV0ZVRpbWluZ3MgfSBmcm9tICcuLi8uLi91dGlscy9hbGVydG1hbmFnZXInO1xuaW1wb3J0IHsgbWFrZUFNTGluayB9IGZyb20gJy4uLy4uL3V0aWxzL21pc2MnO1xuaW1wb3J0IHsgY3JlYXRlTXV0ZVRpbWluZywgZGVmYXVsdFRpbWVJbnRlcnZhbCB9IGZyb20gJy4uLy4uL3V0aWxzL211dGUtdGltaW5ncyc7XG5pbXBvcnQgeyBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGUgfSBmcm9tICcuLi8uLi91dGlscy9yZWR1eCc7XG5pbXBvcnQgeyBBbGVydE1hbmFnZXJQaWNrZXIgfSBmcm9tICcuLi9BbGVydE1hbmFnZXJQaWNrZXInO1xuaW1wb3J0IHsgQWxlcnRpbmdQYWdlV3JhcHBlciB9IGZyb20gJy4uL0FsZXJ0aW5nUGFnZVdyYXBwZXInO1xuXG5pbXBvcnQgeyBNdXRlVGltaW5nVGltZUludGVydmFsIH0gZnJvbSAnLi9NdXRlVGltaW5nVGltZUludGVydmFsJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbXV0ZVRpbWluZz86IE11dGVUaW1lSW50ZXJ2YWw7XG4gIHNob3dFcnJvcj86IGJvb2xlYW47XG59XG5cbmNvbnN0IHVzZURlZmF1bHRWYWx1ZXMgPSAobXV0ZVRpbWluZz86IE11dGVUaW1lSW50ZXJ2YWwpOiBNdXRlVGltaW5nRmllbGRzID0+IHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZXMgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHRpbWVfaW50ZXJ2YWxzOiBbZGVmYXVsdFRpbWVJbnRlcnZhbF0sXG4gICAgfTtcblxuICAgIGlmICghbXV0ZVRpbWluZykge1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZXM7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJ2YWxzID0gbXV0ZVRpbWluZy50aW1lX2ludGVydmFscy5tYXAoKGludGVydmFsKSA9PiAoe1xuICAgICAgdGltZXM6IGludGVydmFsLnRpbWVzID8/IGRlZmF1bHRUaW1lSW50ZXJ2YWwudGltZXMsXG4gICAgICB3ZWVrZGF5czogaW50ZXJ2YWw/LndlZWtkYXlzPy5qb2luKCcsICcpID8/IGRlZmF1bHRUaW1lSW50ZXJ2YWwud2Vla2RheXMsXG4gICAgICBkYXlzX29mX21vbnRoOiBpbnRlcnZhbD8uZGF5c19vZl9tb250aD8uam9pbignLCAnKSA/PyBkZWZhdWx0VGltZUludGVydmFsLmRheXNfb2ZfbW9udGgsXG4gICAgICBtb250aHM6IGludGVydmFsPy5tb250aHM/LmpvaW4oJywgJykgPz8gZGVmYXVsdFRpbWVJbnRlcnZhbC5tb250aHMsXG4gICAgICB5ZWFyczogaW50ZXJ2YWw/LnllYXJzPy5qb2luKCcsICcpID8/IGRlZmF1bHRUaW1lSW50ZXJ2YWwueWVhcnMsXG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG11dGVUaW1pbmcubmFtZSxcbiAgICAgIHRpbWVfaW50ZXJ2YWxzOiBpbnRlcnZhbHMsXG4gICAgfTtcbiAgfSwgW211dGVUaW1pbmddKTtcbn07XG5cbmNvbnN0IE11dGVUaW1pbmdGb3JtID0gKHsgbXV0ZVRpbWluZywgc2hvd0Vycm9yIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgYWxlcnRNYW5hZ2VycyA9IHVzZUFsZXJ0TWFuYWdlcnNCeVBlcm1pc3Npb24oJ25vdGlmaWNhdGlvbicpO1xuICBjb25zdCBbYWxlcnRNYW5hZ2VyU291cmNlTmFtZSwgc2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZV0gPSB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKGFsZXJ0TWFuYWdlcnMpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG5cbiAgY29uc3QgZGVmYXVsdEFtQ29ydGV4Q29uZmlnID0geyBhbGVydG1hbmFnZXJfY29uZmlnOiB7fSwgdGVtcGxhdGVfZmlsZXM6IHt9IH07XG4gIGNvbnN0IGFtQ29uZmlncyA9IHVzZVVuaWZpZWRBbGVydGluZ1NlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYW1Db25maWdzKTtcbiAgY29uc3QgeyByZXN1bHQgPSBkZWZhdWx0QW1Db3J0ZXhDb25maWcsIGxvYWRpbmcgfSA9XG4gICAgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgJiYgYW1Db25maWdzW2FsZXJ0TWFuYWdlclNvdXJjZU5hbWVdKSB8fCBpbml0aWFsQXN5bmNSZXF1ZXN0U3RhdGU7XG5cbiAgY29uc3QgY29uZmlnOiBBbGVydG1hbmFnZXJDb25maWcgPSByZXN1bHQ/LmFsZXJ0bWFuYWdlcl9jb25maWcgPz8ge307XG4gIGNvbnN0IGRlZmF1bHRWYWx1ZXMgPSB1c2VEZWZhdWx0VmFsdWVzKG11dGVUaW1pbmcpO1xuICBjb25zdCBmb3JtQXBpID0gdXNlRm9ybSh7IGRlZmF1bHRWYWx1ZXMgfSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAodmFsdWVzOiBNdXRlVGltaW5nRmllbGRzKSA9PiB7XG4gICAgY29uc3QgbmV3TXV0ZVRpbWluZyA9IGNyZWF0ZU11dGVUaW1pbmcodmFsdWVzKTtcblxuICAgIGNvbnN0IG11dGVUaW1pbmdzID0gbXV0ZVRpbWluZ1xuICAgICAgPyBjb25maWc/Lm11dGVfdGltZV9pbnRlcnZhbHM/LmZpbHRlcigoeyBuYW1lIH0pID0+IG5hbWUgIT09IG11dGVUaW1pbmcubmFtZSlcbiAgICAgIDogY29uZmlnLm11dGVfdGltZV9pbnRlcnZhbHM7XG5cbiAgICBjb25zdCBuZXdDb25maWc6IEFsZXJ0TWFuYWdlckNvcnRleENvbmZpZyA9IHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIGFsZXJ0bWFuYWdlcl9jb25maWc6IHtcbiAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICByb3V0ZTpcbiAgICAgICAgICBtdXRlVGltaW5nICYmIG5ld011dGVUaW1pbmcubmFtZSAhPT0gbXV0ZVRpbWluZy5uYW1lXG4gICAgICAgICAgICA/IHJlbmFtZU11dGVUaW1pbmdzKG5ld011dGVUaW1pbmcubmFtZSwgbXV0ZVRpbWluZy5uYW1lLCBjb25maWcucm91dGUgPz8ge30pXG4gICAgICAgICAgICA6IGNvbmZpZy5yb3V0ZSxcbiAgICAgICAgbXV0ZV90aW1lX2ludGVydmFsczogWy4uLihtdXRlVGltaW5ncyB8fCBbXSksIG5ld011dGVUaW1pbmddLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2goXG4gICAgICB1cGRhdGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24oe1xuICAgICAgICBuZXdDb25maWcsXG4gICAgICAgIG9sZENvbmZpZzogcmVzdWx0LFxuICAgICAgICBhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBhbGVydE1hbmFnZXJTb3VyY2VOYW1lISxcbiAgICAgICAgc3VjY2Vzc01lc3NhZ2U6ICdNdXRlIHRpbWluZyBzYXZlZCcsXG4gICAgICAgIHJlZGlyZWN0UGF0aDogJy9hbGVydGluZy9yb3V0ZXMvJyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBbGVydGluZ1BhZ2VXcmFwcGVyIHBhZ2VJZD1cImFtLXJvdXRlc1wiPlxuICAgICAgPEFsZXJ0TWFuYWdlclBpY2tlclxuICAgICAgICBjdXJyZW50PXthbGVydE1hbmFnZXJTb3VyY2VOYW1lfVxuICAgICAgICBvbkNoYW5nZT17c2V0QWxlcnRNYW5hZ2VyU291cmNlTmFtZX1cbiAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgZGF0YVNvdXJjZXM9e2FsZXJ0TWFuYWdlcnN9XG4gICAgICAvPlxuICAgICAge3Jlc3VsdCAmJiAhbG9hZGluZyAmJiAoXG4gICAgICAgIDxGb3JtUHJvdmlkZXIgey4uLmZvcm1BcGl9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtQXBpLmhhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGRhdGEtdGVzdGlkPVwibXV0ZS10aW1pbmctZm9ybVwiPlxuICAgICAgICAgICAge3Nob3dFcnJvciAmJiA8QWxlcnQgdGl0bGU9XCJObyBtYXRjaGluZyBtdXRlIHRpbWluZyBmb3VuZFwiIC8+fVxuICAgICAgICAgICAgPEZpZWxkU2V0IGxhYmVsPXsnQ3JlYXRlIG11dGUgdGltaW5nJ30+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkEgdW5pcXVlIG5hbWUgZm9yIHRoZSBtdXRlIHRpbWluZ1wiXG4gICAgICAgICAgICAgICAgaW52YWxpZD17ISFmb3JtQXBpLmZvcm1TdGF0ZS5lcnJvcnM/Lm5hbWV9XG4gICAgICAgICAgICAgICAgZXJyb3I9e2Zvcm1BcGkuZm9ybVN0YXRlLmVycm9ycy5uYW1lPy5tZXNzYWdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB7Li4uZm9ybUFwaS5yZWdpc3RlcignbmFtZScsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIW11dGVUaW1pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTXV0ZVRpbWluZyA9IGNvbmZpZz8ubXV0ZV90aW1lX2ludGVydmFscz8uZmluZCgoeyBuYW1lIH0pID0+IHZhbHVlID09PSBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ011dGVUaW1pbmcgPyBgTXV0ZSB0aW1pbmcgYWxyZWFkeSBleGlzdHMgZm9yIFwiJHt2YWx1ZX1cImAgOiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMCB8fCAnTmFtZSBpcyByZXF1aXJlZCc7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9eydtdXRlLXRpbWluZy1uYW1lJ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICAgICAgICA8TXV0ZVRpbWluZ1RpbWVJbnRlcnZhbCAvPlxuICAgICAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIGhyZWY9e21ha2VBTUxpbmsoJy9hbGVydGluZy9yb3V0ZXMvJywgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXRCdXR0b259PlxuICAgICAgICAgICAgICAgIHttdXRlVGltaW5nID8gJ1NhdmUnIDogJ1N1Ym1pdCd9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GaWVsZFNldD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvRm9ybVByb3ZpZGVyPlxuICAgICAgKX1cbiAgICA8L0FsZXJ0aW5nUGFnZVdyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGlucHV0OiBjc3NgXG4gICAgd2lkdGg6IDQwMHB4O1xuICBgLFxuICBzdWJtaXRCdXR0b246IGNzc2BcbiAgICBtYXJnaW4tbGVmdDogJHt0aGVtZS5zcGFjaW5nKDEpfTtcbiAgYCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBNdXRlVGltaW5nRm9ybTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRm9ybUNvbnRleHQsIHVzZUZpZWxkQXJyYXkgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgeyBHcmFmYW5hVGhlbWUyIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBGaWVsZCwgRmllbGRTZXQsIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IE11dGVUaW1pbmdGaWVsZHMgfSBmcm9tICcuLi8uLi90eXBlcy9tdXRlLXRpbWluZy1mb3JtJztcbmltcG9ydCB7IERBWVNfT0ZfVEhFX1dFRUssIE1PTlRIUywgdmFsaWRhdGVBcnJheUZpZWxkLCBkZWZhdWx0VGltZUludGVydmFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvbXV0ZS10aW1pbmdzJztcblxuaW1wb3J0IHsgTXV0ZVRpbWluZ1RpbWVSYW5nZSB9IGZyb20gJy4vTXV0ZVRpbWluZ1RpbWVSYW5nZSc7XG5cbmV4cG9ydCBjb25zdCBNdXRlVGltaW5nVGltZUludGVydmFsID0gKCkgPT4ge1xuICBjb25zdCBzdHlsZXMgPSB1c2VTdHlsZXMyKGdldFN0eWxlcyk7XG4gIGNvbnN0IHsgZm9ybVN0YXRlLCByZWdpc3RlciB9ID0gdXNlRm9ybUNvbnRleHQoKTtcbiAgY29uc3Qge1xuICAgIGZpZWxkczogdGltZUludGVydmFscyxcbiAgICBhcHBlbmQ6IGFkZFRpbWVJbnRlcnZhbCxcbiAgICByZW1vdmU6IHJlbW92ZVRpbWVJbnRlcnZhbCxcbiAgfSA9IHVzZUZpZWxkQXJyYXk8TXV0ZVRpbWluZ0ZpZWxkcz4oe1xuICAgIG5hbWU6ICd0aW1lX2ludGVydmFscycsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkU2V0IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVJbnRlcnZhbExlZ2VuZH0gbGFiZWw9XCJUaW1lIGludGVydmFsc1wiPlxuICAgICAgPD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQSB0aW1lIGludGVydmFsIGlzIGEgZGVmaW5pdGlvbiBmb3IgYSBtb21lbnQgaW4gdGltZS4gQWxsIGZpZWxkcyBhcmUgbGlzdHMsIGFuZCBhdCBsZWFzdCBvbmUgbGlzdCBlbGVtZW50IG11c3RcbiAgICAgICAgICBiZSBzYXRpc2ZpZWQgdG8gbWF0Y2ggdGhlIGZpZWxkLiBJZiBhIGZpZWxkIGlzIGxlZnQgYmxhbmssIGFueSBtb21lbnQgb2YgdGltZSB3aWxsIG1hdGNoIHRoZSBmaWVsZC4gRm9yIGFuXG4gICAgICAgICAgaW5zdGFudCBvZiB0aW1lIHRvIG1hdGNoIGEgY29tcGxldGUgdGltZSBpbnRlcnZhbCwgYWxsIGZpZWxkcyBtdXN0IG1hdGNoLiBBIG11dGUgdGltaW5nIGNhbiBjb250YWluIG11bHRpcGxlXG4gICAgICAgICAgdGltZSBpbnRlcnZhbHMuXG4gICAgICAgIDwvcD5cbiAgICAgICAge3RpbWVJbnRlcnZhbHMubWFwKCh0aW1lSW50ZXJ2YWwsIHRpbWVJbnRlcnZhbEluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgZXJyb3JzID0gZm9ybVN0YXRlLmVycm9ycztcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3RpbWVJbnRlcnZhbC5pZH0gY2xhc3NOYW1lPXtzdHlsZXMudGltZUludGVydmFsU2VjdGlvbn0+XG4gICAgICAgICAgICAgIDxNdXRlVGltaW5nVGltZVJhbmdlIGludGVydmFsSW5kZXg9e3RpbWVJbnRlcnZhbEluZGV4fSAvPlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRheXMgb2YgdGhlIHdlZWtcIlxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudGltZV9pbnRlcnZhbHM/Llt0aW1lSW50ZXJ2YWxJbmRleF0/LndlZWtkYXlzPy5tZXNzYWdlID8/ICcnfVxuICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLnRpbWVfaW50ZXJ2YWxzPy5bdGltZUludGVydmFsSW5kZXhdPy53ZWVrZGF5c31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGB0aW1lX2ludGVydmFscy4ke3RpbWVJbnRlcnZhbEluZGV4fS53ZWVrZGF5c2AsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6ICh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFycmF5RmllbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChkYXkpID0+IERBWVNfT0ZfVEhFX1dFRUsuaW5jbHVkZXMoZGF5LnRvTG93ZXJDYXNlKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0ludmFsaWQgZGF5IG9mIHRoZSB3ZWVrJ1xuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJtdXRlLXRpbWluZy13ZWVrZGF5c1wiXG4gICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHJlYWN0LWhvb2stZm9ybSBkb2Vzbid0IGhhbmRsZSBuZXN0ZWQgZmllbGQgYXJyYXlzIHdlbGxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGltZUludGVydmFsLndlZWtkYXlzfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeGFtcGxlOiBtb25kYXksIHR1ZXNkYXk6dGh1cnNkYXlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF5cyBvZiB0aGUgbW9udGhcIlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIGRheXMgb2YgdGhlIG1vbnRoLCAxLTMxLCBvZiBhIG1vbnRoLiBOZWdhdGl2ZSB2YWx1ZXMgY2FuIGJlIHVzZWQgdG8gcmVwcmVzZW50IGRheXMgd2hpY2ggYmVnaW4gYXQgdGhlIGVuZCBvZiB0aGUgbW9udGhcIlxuICAgICAgICAgICAgICAgIGludmFsaWQ9eyEhZXJyb3JzLnRpbWVfaW50ZXJ2YWxzPy5bdGltZUludGVydmFsSW5kZXhdPy5kYXlzX29mX21vbnRofVxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudGltZV9pbnRlcnZhbHM/Llt0aW1lSW50ZXJ2YWxJbmRleF0/LmRheXNfb2ZfbW9udGg/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgdGltZV9pbnRlcnZhbHMuJHt0aW1lSW50ZXJ2YWxJbmRleH0uZGF5c19vZl9tb250aGAsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6ICh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUFycmF5RmllbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChkYXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkRGF5ID0gcGFyc2VJbnQoZGF5LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VkRGF5ID4gLTMxICYmIHBhcnNlZERheSA8IDApIHx8IChwYXJzZWREYXkgPiAwICYmIHBhcnNlZERheSA8IDMyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBkYXknXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHJlYWN0LWhvb2stZm9ybSBkb2Vzbid0IGhhbmRsZSBuZXN0ZWQgZmllbGQgYXJyYXlzIHdlbGxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGltZUludGVydmFsLmRheXNfb2ZfbW9udGh9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IDEsIDE0OjE2LCAtMVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cIm11dGUtdGltaW5nLWRheXNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9udGhzXCJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSBtb250aHMgb2YgdGhlIHllYXIgaW4gZWl0aGVyIG51bWVyaWNhbCBvciB0aGUgZnVsbCBjYWxlbmRhciBtb250aFwiXG4gICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMudGltZV9pbnRlcnZhbHM/Llt0aW1lSW50ZXJ2YWxJbmRleF0/Lm1vbnRoc31cbiAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnRpbWVfaW50ZXJ2YWxzPy5bdGltZUludGVydmFsSW5kZXhdPy5tb250aHM/Lm1lc3NhZ2V9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgdGltZV9pbnRlcnZhbHMuJHt0aW1lSW50ZXJ2YWxJbmRleH0ubW9udGhzYCwge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlQXJyYXlGaWVsZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgKG1vbnRoKSA9PiBNT05USFMuaW5jbHVkZXMobW9udGgpIHx8IChwYXJzZUludChtb250aCwgMTApIDwgMTMgJiYgcGFyc2VJbnQobW9udGgsIDEwKSA+IDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0ludmFsaWQgbW9udGgnXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IDE6MywgbWF5OmF1Z3VzdCwgZGVjZW1iZXJcIlxuICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSByZWFjdC1ob29rLWZvcm0gZG9lc24ndCBoYW5kbGUgbmVzdGVkIGZpZWxkIGFycmF5cyB3ZWxsXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpbWVJbnRlcnZhbC5tb250aHN9XG4gICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cIm11dGUtdGltaW5nLW1vbnRoc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJZZWFyc1wiXG4gICAgICAgICAgICAgICAgaW52YWxpZD17ISFlcnJvcnMudGltZV9pbnRlcnZhbHM/Llt0aW1lSW50ZXJ2YWxJbmRleF0/LnllYXJzfVxuICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMudGltZV9pbnRlcnZhbHM/Llt0aW1lSW50ZXJ2YWxJbmRleF0/LnllYXJzPy5tZXNzYWdlID8/ICcnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoYHRpbWVfaW50ZXJ2YWxzLiR7dGltZUludGVydmFsSW5kZXh9LnllYXJzYCwge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PiB2YWxpZGF0ZUFycmF5RmllbGQodmFsdWUsICh5ZWFyKSA9PiAvXlxcZHs0fSQvLnRlc3QoeWVhciksICdJbnZhbGlkIHllYXInKSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IDIwMjE6MjAyMiwgMjAzMFwiXG4gICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHJlYWN0LWhvb2stZm9ybSBkb2Vzbid0IGhhbmRsZSBuZXN0ZWQgZmllbGQgYXJyYXlzIHdlbGxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGltZUludGVydmFsLnllYXJzfVxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJtdXRlLXRpbWluZy15ZWFyc1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJkZXN0cnVjdGl2ZVwiXG4gICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoLWFsdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlVGltZUludGVydmFsKHRpbWVJbnRlcnZhbEluZGV4KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJlbW92ZSB0aW1lIGludGVydmFsXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yZW1vdmVUaW1lSW50ZXJ2YWxCdXR0b259XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgYWRkVGltZUludGVydmFsKGRlZmF1bHRUaW1lSW50ZXJ2YWwpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICA+XG4gICAgICAgICAgQWRkIGFub3RoZXIgdGltZSBpbnRlcnZhbFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvPlxuICAgIDwvRmllbGRTZXQ+XG4gICk7XG59O1xuXG5jb25zdCBnZXRTdHlsZXMgPSAodGhlbWU6IEdyYWZhbmFUaGVtZTIpID0+ICh7XG4gIGlucHV0OiBjc3NgXG4gICAgd2lkdGg6IDQwMHB4O1xuICBgLFxuICB0aW1lSW50ZXJ2YWxMZWdlbmQ6IGNzc2BcbiAgICBsZWdlbmQge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIH1cbiAgYCxcbiAgdGltZUludGVydmFsU2VjdGlvbjogY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG4gIHJlbW92ZVRpbWVJbnRlcnZhbEJ1dHRvbjogY3NzYFxuICAgIG1hcmdpbi10b3A6ICR7dGhlbWUuc3BhY2luZygxKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGaWVsZEFycmF5LCB1c2VGb3JtQ29udGV4dCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbmltcG9ydCB7IEdyYWZhbmFUaGVtZTIgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEZpZWxkLCBJbmxpbmVGaWVsZFJvdywgSW5saW5lRmllbGQsIElucHV0LCBCdXR0b24sIEljb25CdXR0b24sIHVzZVN0eWxlczIgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IE11dGVUaW1pbmdGaWVsZHMgfSBmcm9tICcuLi8uLi90eXBlcy9tdXRlLXRpbWluZy1mb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaW50ZXJ2YWxJbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgTXV0ZVRpbWluZ1RpbWVSYW5nZTogRkM8UHJvcHM+ID0gKHsgaW50ZXJ2YWxJbmRleCB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVN0eWxlczIoZ2V0U3R5bGVzKTtcbiAgY29uc3QgeyByZWdpc3RlciwgZm9ybVN0YXRlIH0gPSB1c2VGb3JtQ29udGV4dDxNdXRlVGltaW5nRmllbGRzPigpO1xuXG4gIGNvbnN0IHtcbiAgICBmaWVsZHM6IHRpbWVSYW5nZXMsXG4gICAgYXBwZW5kOiBhZGRUaW1lUmFuZ2UsXG4gICAgcmVtb3ZlOiByZW1vdmVUaW1lUmFuZ2UsXG4gIH0gPSB1c2VGaWVsZEFycmF5PE11dGVUaW1pbmdGaWVsZHM+KHtcbiAgICBuYW1lOiBgdGltZV9pbnRlcnZhbHMuJHtpbnRlcnZhbEluZGV4fS50aW1lc2AsXG4gIH0pO1xuXG4gIGNvbnN0IHZhbGlkYXRlVGltZSA9ICh0aW1lU3RyaW5nOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIXRpbWVTdHJpbmcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBbaG91ciwgbWludXRlc10gPSB0aW1lU3RyaW5nLnNwbGl0KCc6JykubWFwKCh4KSA9PiBwYXJzZUludCh4LCAxMCkpO1xuICAgIGNvbnN0IGlzSG91clZhbGlkID0gaG91ciA+PSAwICYmIGhvdXIgPCAyNTtcbiAgICBjb25zdCBpc01pbnV0ZVZhbGlkID0gbWludXRlcyA+IC0xICYmIG1pbnV0ZXMgPCA2MDtcbiAgICBjb25zdCBpc1RpbWVWYWxpZCA9IGhvdXIgPT09IDI0ID8gbWludXRlcyA9PT0gMCA6IGlzSG91clZhbGlkICYmIGlzTWludXRlVmFsaWQ7XG5cbiAgICByZXR1cm4gaXNUaW1lVmFsaWQgfHwgJ1RpbWUgaXMgaW52YWxpZCc7XG4gIH07XG5cbiAgY29uc3QgZm9ybUVycm9ycyA9IGZvcm1TdGF0ZS5lcnJvcnMudGltZV9pbnRlcnZhbHM/LltpbnRlcnZhbEluZGV4XTtcbiAgY29uc3QgdGltZVJhbmdlSW52YWxpZCA9IGZvcm1FcnJvcnM/LnRpbWVzPy5zb21lKCh2YWx1ZSkgPT4gdmFsdWU/LnN0YXJ0X3RpbWUgfHwgdmFsdWU/LmVuZF90aW1lKSA/PyBmYWxzZTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RmllbGRcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGR9XG4gICAgICAgIGxhYmVsPVwiVGltZSByYW5nZVwiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiVGhlIHRpbWUgaW5jbHVzaXZlIG9mIHRoZSBzdGFydGluZyB0aW1lIGFuZCBleGNsdXNpdmUgb2YgdGhlIGVuZCB0aW1lIGluIFVUQ1wiXG4gICAgICAgIGludmFsaWQ9e3RpbWVSYW5nZUludmFsaWR9XG4gICAgICAgIGVycm9yPXt0aW1lUmFuZ2VJbnZhbGlkID8gJ1RpbWVzIG11c3QgYmUgYmV0d2VlbiAwMDowMCBhbmQgMjQ6MDAgVVRDJyA6ICcnfVxuICAgICAgPlxuICAgICAgICA8PlxuICAgICAgICAgIHt0aW1lUmFuZ2VzLm1hcCgodGltZVJhbmdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lUmFuZ2V9IGtleT17dGltZVJhbmdlLmlkfT5cbiAgICAgICAgICAgICAgICA8SW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJTdGFydCB0aW1lXCIgaW52YWxpZD17ISFmb3JtRXJyb3JzPy50aW1lcz8uW2luZGV4XT8uc3RhcnRfdGltZX0+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihgdGltZV9pbnRlcnZhbHMuJHtpbnRlcnZhbEluZGV4fS50aW1lcy4ke2luZGV4fS5zdGFydF90aW1lYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50aW1lUmFuZ2VJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHJlYWN0LWhvb2stZm9ybSBkb2Vzbid0IGhhbmRsZSBuZXN0ZWQgZmllbGQgYXJyYXlzIHdlbGxcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpbWVSYW5nZS5zdGFydF90aW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSEg6TU1cIlxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwibXV0ZS10aW1pbmctc3RhcnRzLWF0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvSW5saW5lRmllbGQ+XG4gICAgICAgICAgICAgICAgICA8SW5saW5lRmllbGQgbGFiZWw9XCJFbmQgdGltZVwiIGludmFsaWQ9eyEhZm9ybUVycm9ycz8udGltZXM/LltpbmRleF0/LmVuZF90aW1lfT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKGB0aW1lX2ludGVydmFscy4ke2ludGVydmFsSW5kZXh9LnRpbWVzLiR7aW5kZXh9LmVuZF90aW1lYCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50aW1lUmFuZ2VJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHJlYWN0LWhvb2stZm9ybSBkb2Vzbid0IGhhbmRsZSBuZXN0ZWQgZmllbGQgYXJyYXlzIHdlbGxcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RpbWVSYW5nZS5lbmRfdGltZX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhIOk1NXCJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cIm11dGUtdGltaW5nLWVuZHMtYXRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9JbmxpbmVGaWVsZD5cbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZVRpbWVSYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydSZW1vdmUnfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXsndHJhc2gtYWx0J31cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVRpbWVSYW5nZShpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvSW5saW5lRmllbGRSb3c+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRUaW1lUmFuZ2V9XG4gICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgaWNvbj17J3BsdXMnfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRUaW1lUmFuZ2UoeyBzdGFydF90aW1lOiAnJywgZW5kX3RpbWU6ICcnIH0pfVxuICAgICAgPlxuICAgICAgICBBZGQgYW5vdGhlciB0aW1lIHJhbmdlXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9ICh0aGVtZTogR3JhZmFuYVRoZW1lMikgPT4gKHtcbiAgZmllbGQ6IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBgLFxuICB0aW1lUmFuZ2U6IGNzc2BcbiAgICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLnNwYWNpbmcoMSl9O1xuICBgLFxuICB0aW1lUmFuZ2VJbnB1dDogY3NzYFxuICAgIHdpZHRoOiAxMjBweDtcbiAgYCxcbiAgZGVsZXRlVGltZVJhbmdlOiBjc3NgXG4gICAgbWFyZ2luOiAke3RoZW1lLnNwYWNpbmcoMSl9IDAgMCAke3RoZW1lLnNwYWNpbmcoMC41KX07XG4gIGAsXG4gIGFkZFRpbWVSYW5nZTogY3NzYFxuICAgIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuc3BhY2luZygyKX07XG4gIGAsXG59KTtcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VRdWVyeVBhcmFtcyB9IGZyb20gJ2FwcC9jb3JlL2hvb2tzL3VzZVF1ZXJ5UGFyYW1zJztcbmltcG9ydCBzdG9yZSBmcm9tICdhcHAvY29yZS9zdG9yZSc7XG5cbmltcG9ydCB7IEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZLCBBTEVSVE1BTkFHRVJfTkFNRV9RVUVSWV9LRVkgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQWxlcnRNYW5hZ2VyRGF0YVNvdXJjZSwgR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuXG5mdW5jdGlvbiB1c2VJc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShhdmFpbGFibGVBbGVydE1hbmFnZXJzOiBBbGVydE1hbmFnZXJEYXRhU291cmNlW10pIHtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKFxuICAgIChhbGVydE1hbmFnZXJOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnNOYW1lcyA9IGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnMubWFwKChhbSkgPT4gYW0ubmFtZSk7XG4gICAgICByZXR1cm4gYXZhaWxhYmxlQWxlcnRNYW5hZ2Vyc05hbWVzLmluY2x1ZGVzKGFsZXJ0TWFuYWdlck5hbWUpO1xuICAgIH0sXG4gICAgW2F2YWlsYWJsZUFsZXJ0TWFuYWdlcnNdXG4gICk7XG59XG5cbi8qIFRoaXMgd2lsbCByZXR1cm4gYW0gbmFtZSBlaXRoZXIgZnJvbSBxdWVyeSBwYXJhbXMgb3IgZnJvbSBsb2NhbCBzdG9yYWdlIG9yIGEgZGVmYXVsdCAoZ3JhZmFuYSkuXG4gKiBEdWUgdG8gUkJBQyBwZXJtaXNzaW9ucyBHcmFmYW5hIE1hbmFnZWQgQWxlcnQgbWFuYWdlciBvciBleHRlcm5hbCBhbGVydCBtYW5hZ2VycyBtYXkgbm90IGJlIGF2YWlsYWJsZVxuICogSW4gdGhlIHdvcnN0IGNhc2UgbmVpaHRlciBHTUEgbm9yIGV4dGVybmFsIGFsZXJ0IG1hbmFnZXIgaXMgYXZhaWxhYmxlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGVydE1hbmFnZXJTb3VyY2VOYW1lKFxuICBhdmFpbGFibGVBbGVydE1hbmFnZXJzOiBBbGVydE1hbmFnZXJEYXRhU291cmNlW11cbik6IFtzdHJpbmcgfCB1bmRlZmluZWQsIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcpID0+IHZvaWRdIHtcbiAgY29uc3QgW3F1ZXJ5UGFyYW1zLCB1cGRhdGVRdWVyeVBhcmFtc10gPSB1c2VRdWVyeVBhcmFtcygpO1xuICBjb25zdCBpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZSA9IHVzZUlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKGF2YWlsYWJsZUFsZXJ0TWFuYWdlcnMpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKFxuICAgIChhbGVydE1hbmFnZXJTb3VyY2VOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghaXNBbGVydE1hbmFnZXJBdmFpbGFibGUoYWxlcnRNYW5hZ2VyU291cmNlTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgPT09IEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUpIHtcbiAgICAgICAgc3RvcmUuZGVsZXRlKEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICAgICAgdXBkYXRlUXVlcnlQYXJhbXMoeyBbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTogbnVsbCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlLnNldChBTEVSVE1BTkFHRVJfTkFNRV9MT0NBTF9TVE9SQUdFX0tFWSwgYWxlcnRNYW5hZ2VyU291cmNlTmFtZSk7XG4gICAgICAgIHVwZGF0ZVF1ZXJ5UGFyYW1zKHsgW0FMRVJUTUFOQUdFUl9OQU1FX1FVRVJZX0tFWV06IGFsZXJ0TWFuYWdlclNvdXJjZU5hbWUgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBbdXBkYXRlUXVlcnlQYXJhbXMsIGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlXVxuICApO1xuXG4gIGNvbnN0IHF1ZXJ5U291cmNlID0gcXVlcnlQYXJhbXNbQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZXTtcblxuICBpZiAocXVlcnlTb3VyY2UgJiYgdHlwZW9mIHF1ZXJ5U291cmNlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChpc0FsZXJ0TWFuYWdlckF2YWlsYWJsZShxdWVyeVNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBbcXVlcnlTb3VyY2UsIHVwZGF0ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vbiBleGlzdGluZyBhbGVydG1hbmFnZXJcbiAgICAgIHJldHVybiBbdW5kZWZpbmVkLCB1cGRhdGVdO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0b3JlU291cmNlID0gc3RvcmUuZ2V0KEFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgaWYgKHN0b3JlU291cmNlICYmIHR5cGVvZiBzdG9yZVNvdXJjZSA9PT0gJ3N0cmluZycgJiYgaXNBbGVydE1hbmFnZXJBdmFpbGFibGUoc3RvcmVTb3VyY2UpKSB7XG4gICAgdXBkYXRlKHN0b3JlU291cmNlKTtcbiAgICByZXR1cm4gW3N0b3JlU291cmNlLCB1cGRhdGVdO1xuICB9XG5cbiAgaWYgKGlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlKEdSQUZBTkFfUlVMRVNfU09VUkNFX05BTUUpKSB7XG4gICAgcmV0dXJuIFtHUkFGQU5BX1JVTEVTX1NPVVJDRV9OQU1FLCB1cGRhdGVdO1xuICB9XG5cbiAgcmV0dXJuIFt1bmRlZmluZWQsIHVwZGF0ZV07XG59XG4iLCJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBnZXRBbGVydE1hbmFnZXJEYXRhU291cmNlc0J5UGVybWlzc2lvbiB9IGZyb20gJy4uL3V0aWxzL2RhdGFzb3VyY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQWxlcnRNYW5hZ2Vyc0J5UGVybWlzc2lvbihhY2Nlc3NUeXBlOiAnaW5zdGFuY2UnIHwgJ25vdGlmaWNhdGlvbicpIHtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gZ2V0QWxlcnRNYW5hZ2VyRGF0YVNvdXJjZXNCeVBlcm1pc3Npb24oYWNjZXNzVHlwZSksIFthY2Nlc3NUeXBlXSk7XG59XG4iLCJpbXBvcnQgeyBvbWl0QnksIGlzVW5kZWZpbmVkIH0gZnJvbSAnbG9kYXNoJztcblxuaW1wb3J0IHsgTXV0ZVRpbWVJbnRlcnZhbCwgVGltZUludGVydmFsIH0gZnJvbSAnYXBwL3BsdWdpbnMvZGF0YXNvdXJjZS9hbGVydG1hbmFnZXIvdHlwZXMnO1xuXG5pbXBvcnQgeyBNdXRlVGltaW5nRmllbGRzLCBNdXRlVGltaW5nSW50ZXJ2YWxGaWVsZHMgfSBmcm9tICcuLi90eXBlcy9tdXRlLXRpbWluZy1mb3JtJztcblxuZXhwb3J0IGNvbnN0IERBWVNfT0ZfVEhFX1dFRUsgPSBbJ21vbmRheScsICd0dWVzZGF5JywgJ3dlZG5lc2RheScsICd0aHVyc2RheScsICdmcmlkYXknLCAnc2F0dXJkYXknLCAnc3VuZGF5J107XG5cbmV4cG9ydCBjb25zdCBNT05USFMgPSBbXG4gICdqYW51YXJ5JyxcbiAgJ2ZlYnJ1YXJ5JyxcbiAgJ21hcmNoJyxcbiAgJ2FwcmlsJyxcbiAgJ21heScsXG4gICdqdW5lJyxcbiAgJ2p1bHknLFxuICAnYXVndXN0JyxcbiAgJ3NlcHRlbWJlcicsXG4gICdvY3RvYmVyJyxcbiAgJ25vdmVtYmVyJyxcbiAgJ2RlY2VtYmVyJyxcbl07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0VGltZUludGVydmFsOiBNdXRlVGltaW5nSW50ZXJ2YWxGaWVsZHMgPSB7XG4gIHRpbWVzOiBbeyBzdGFydF90aW1lOiAnJywgZW5kX3RpbWU6ICcnIH1dLFxuICB3ZWVrZGF5czogJycsXG4gIGRheXNfb2ZfbW9udGg6ICcnLFxuICBtb250aHM6ICcnLFxuICB5ZWFyczogJycsXG59O1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVBcnJheUZpZWxkID0gKHZhbHVlOiBzdHJpbmcsIHZhbGlkYXRlVmFsdWU6IChpbnB1dDogc3RyaW5nKSA9PiBib29sZWFuLCBpbnZhbGlkVGV4dDogc3RyaW5nKSA9PiB7XG4gIGlmICh2YWx1ZSkge1xuICAgIHJldHVybiAoXG4gICAgICB2YWx1ZVxuICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAubWFwKCh4KSA9PiB4LnRyaW0oKSlcbiAgICAgICAgLmV2ZXJ5KChlbnRyeSkgPT4gZW50cnkuc3BsaXQoJzonKS5ldmVyeSh2YWxpZGF0ZVZhbHVlKSkgfHwgaW52YWxpZFRleHRcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBjb252ZXJ0U3RyaW5nVG9BcnJheSA9IChzdHI6IHN0cmluZykgPT4ge1xuICByZXR1cm4gc3RyID8gc3RyLnNwbGl0KCcsJykubWFwKChzKSA9PiBzLnRyaW0oKSkgOiB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTXV0ZVRpbWluZyA9IChmaWVsZHM6IE11dGVUaW1pbmdGaWVsZHMpOiBNdXRlVGltZUludGVydmFsID0+IHtcbiAgY29uc3QgdGltZUludGVydmFsczogVGltZUludGVydmFsW10gPSBmaWVsZHMudGltZV9pbnRlcnZhbHMubWFwKFxuICAgICh7IHRpbWVzLCB3ZWVrZGF5cywgZGF5c19vZl9tb250aCwgbW9udGhzLCB5ZWFycyB9KSA9PiB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHtcbiAgICAgICAgdGltZXM6IHRpbWVzLmZpbHRlcigoeyBzdGFydF90aW1lLCBlbmRfdGltZSB9KSA9PiAhIXN0YXJ0X3RpbWUgJiYgISFlbmRfdGltZSksXG4gICAgICAgIHdlZWtkYXlzOiBjb252ZXJ0U3RyaW5nVG9BcnJheSh3ZWVrZGF5cyk/Lm1hcCgodikgPT4gdi50b0xvd2VyQ2FzZSgpKSxcbiAgICAgICAgZGF5c19vZl9tb250aDogY29udmVydFN0cmluZ1RvQXJyYXkoZGF5c19vZl9tb250aCksXG4gICAgICAgIG1vbnRoczogY29udmVydFN0cmluZ1RvQXJyYXkobW9udGhzKSxcbiAgICAgICAgeWVhcnM6IGNvbnZlcnRTdHJpbmdUb0FycmF5KHllYXJzKSxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBvbWl0QnkoaW50ZXJ2YWwsIGlzVW5kZWZpbmVkKTtcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBmaWVsZHMubmFtZSxcbiAgICB0aW1lX2ludGVydmFsczogdGltZUludGVydmFscyxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwiUm91dGUiLCJSZWRpcmVjdCIsIlN3aXRjaCIsIkFsZXJ0IiwiTG9hZGluZ1BsYWNlaG9sZGVyIiwidXNlUXVlcnlQYXJhbXMiLCJNdXRlVGltaW5nRm9ybSIsInVzZUFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJ1c2VBbGVydE1hbmFnZXJzQnlQZXJtaXNzaW9uIiwidXNlVW5pZmllZEFsZXJ0aW5nU2VsZWN0b3IiLCJmZXRjaEFsZXJ0TWFuYWdlckNvbmZpZ0FjdGlvbiIsImluaXRpYWxBc3luY1JlcXVlc3RTdGF0ZSIsIk11dGVUaW1pbmdzIiwicXVlcnlQYXJhbXMiLCJkaXNwYXRjaCIsImFsZXJ0TWFuYWdlcnMiLCJhbGVydE1hbmFnZXJTb3VyY2VOYW1lIiwiYW1Db25maWdzIiwic3RhdGUiLCJmZXRjaENvbmZpZyIsInJlc3VsdCIsImVycm9yIiwibG9hZGluZyIsImNvbmZpZyIsImFsZXJ0bWFuYWdlcl9jb25maWciLCJnZXRNdXRlVGltaW5nQnlOYW1lIiwiaWQiLCJtdXRlX3RpbWVfaW50ZXJ2YWxzIiwiZmluZCIsIm5hbWUiLCJtZXNzYWdlIiwibXV0ZVRpbWluZyIsIlN0cmluZyIsInVzZVNlbGVjdG9yIiwiUGFnZSIsImdldE5hdk1vZGVsIiwiQWxlcnRpbmdQYWdlV3JhcHBlciIsImNoaWxkcmVuIiwicGFnZUlkIiwiaXNMb2FkaW5nIiwibmF2TW9kZWwiLCJuYXZJbmRleCIsImNzcyIsInVzZU1lbW8iLCJGb3JtUHJvdmlkZXIiLCJ1c2VGb3JtIiwiRmllbGQiLCJGaWVsZFNldCIsIklucHV0IiwiQnV0dG9uIiwiTGlua0J1dHRvbiIsInVzZVN0eWxlczIiLCJ1cGRhdGVBbGVydE1hbmFnZXJDb25maWdBY3Rpb24iLCJyZW5hbWVNdXRlVGltaW5ncyIsIm1ha2VBTUxpbmsiLCJjcmVhdGVNdXRlVGltaW5nIiwiZGVmYXVsdFRpbWVJbnRlcnZhbCIsIkFsZXJ0TWFuYWdlclBpY2tlciIsIk11dGVUaW1pbmdUaW1lSW50ZXJ2YWwiLCJ1c2VEZWZhdWx0VmFsdWVzIiwiZGVmYXVsdFZhbHVlcyIsInRpbWVfaW50ZXJ2YWxzIiwiaW50ZXJ2YWxzIiwibWFwIiwiaW50ZXJ2YWwiLCJ0aW1lcyIsIndlZWtkYXlzIiwiam9pbiIsImRheXNfb2ZfbW9udGgiLCJtb250aHMiLCJ5ZWFycyIsInNob3dFcnJvciIsInNldEFsZXJ0TWFuYWdlclNvdXJjZU5hbWUiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJkZWZhdWx0QW1Db3J0ZXhDb25maWciLCJ0ZW1wbGF0ZV9maWxlcyIsImZvcm1BcGkiLCJvblN1Ym1pdCIsInZhbHVlcyIsIm5ld011dGVUaW1pbmciLCJtdXRlVGltaW5ncyIsImZpbHRlciIsIm5ld0NvbmZpZyIsInJvdXRlIiwib2xkQ29uZmlnIiwic3VjY2Vzc01lc3NhZ2UiLCJyZWRpcmVjdFBhdGgiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJyZWdpc3RlciIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJ2YWx1ZSIsImV4aXN0aW5nTXV0ZVRpbWluZyIsImxlbmd0aCIsImlucHV0Iiwic3VibWl0QnV0dG9uIiwidGhlbWUiLCJzcGFjaW5nIiwidXNlRm9ybUNvbnRleHQiLCJ1c2VGaWVsZEFycmF5IiwiREFZU19PRl9USEVfV0VFSyIsIk1PTlRIUyIsInZhbGlkYXRlQXJyYXlGaWVsZCIsIk11dGVUaW1pbmdUaW1lUmFuZ2UiLCJmaWVsZHMiLCJ0aW1lSW50ZXJ2YWxzIiwiYXBwZW5kIiwiYWRkVGltZUludGVydmFsIiwicmVtb3ZlIiwicmVtb3ZlVGltZUludGVydmFsIiwidGltZUludGVydmFsTGVnZW5kIiwidGltZUludGVydmFsIiwidGltZUludGVydmFsSW5kZXgiLCJ0aW1lSW50ZXJ2YWxTZWN0aW9uIiwiZGF5IiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsInBhcnNlZERheSIsInBhcnNlSW50IiwibW9udGgiLCJ5ZWFyIiwidGVzdCIsInJlbW92ZVRpbWVJbnRlcnZhbEJ1dHRvbiIsImNvbG9ycyIsImJhY2tncm91bmQiLCJzZWNvbmRhcnkiLCJJbmxpbmVGaWVsZFJvdyIsIklubGluZUZpZWxkIiwiSWNvbkJ1dHRvbiIsImludGVydmFsSW5kZXgiLCJ0aW1lUmFuZ2VzIiwiYWRkVGltZVJhbmdlIiwicmVtb3ZlVGltZVJhbmdlIiwidmFsaWRhdGVUaW1lIiwidGltZVN0cmluZyIsImhvdXIiLCJtaW51dGVzIiwic3BsaXQiLCJ4IiwiaXNIb3VyVmFsaWQiLCJpc01pbnV0ZVZhbGlkIiwiaXNUaW1lVmFsaWQiLCJmb3JtRXJyb3JzIiwidGltZVJhbmdlSW52YWxpZCIsInNvbWUiLCJzdGFydF90aW1lIiwiZW5kX3RpbWUiLCJmaWVsZCIsInRpbWVSYW5nZSIsImluZGV4IiwidGltZVJhbmdlSW5wdXQiLCJkZWxldGVUaW1lUmFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9yZSIsIkFMRVJUTUFOQUdFUl9OQU1FX0xPQ0FMX1NUT1JBR0VfS0VZIiwiQUxFUlRNQU5BR0VSX05BTUVfUVVFUllfS0VZIiwiR1JBRkFOQV9SVUxFU19TT1VSQ0VfTkFNRSIsInVzZUlzQWxlcnRNYW5hZ2VyQXZhaWxhYmxlIiwiYXZhaWxhYmxlQWxlcnRNYW5hZ2VycyIsImFsZXJ0TWFuYWdlck5hbWUiLCJhdmFpbGFibGVBbGVydE1hbmFnZXJzTmFtZXMiLCJhbSIsInVwZGF0ZVF1ZXJ5UGFyYW1zIiwiaXNBbGVydE1hbmFnZXJBdmFpbGFibGUiLCJ1cGRhdGUiLCJkZWxldGUiLCJzZXQiLCJxdWVyeVNvdXJjZSIsInVuZGVmaW5lZCIsInN0b3JlU291cmNlIiwiZ2V0IiwiZ2V0QWxlcnRNYW5hZ2VyRGF0YVNvdXJjZXNCeVBlcm1pc3Npb24iLCJhY2Nlc3NUeXBlIiwib21pdEJ5IiwiaXNVbmRlZmluZWQiLCJ2YWxpZGF0ZVZhbHVlIiwiaW52YWxpZFRleHQiLCJ0cmltIiwiZXZlcnkiLCJlbnRyeSIsImNvbnZlcnRTdHJpbmdUb0FycmF5Iiwic3RyIiwicyIsInYiXSwic291cmNlUm9vdCI6IiJ9