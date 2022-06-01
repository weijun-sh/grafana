"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[8648],{

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

/***/ "./public/app/features/alerting/unified/AmRoutes.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ unified_AmRoutes)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js + 20 modules
var es = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/core/hooks/useCleanup.ts
var useCleanup = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertManagerPicker.tsx
var AlertManagerPicker = __webpack_require__("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx
var AlertingPageWrapper = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx
var NoAlertManagerWarning = __webpack_require__("./public/app/features/alerting/unified/components/NoAlertManagerWarning.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/Authorize.tsx
var Authorize = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/access-control.ts
var access_control = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/datasource.ts
var datasource = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ./public/app/plugins/datasource/alertmanager/types.ts
var types = __webpack_require__("./public/app/plugins/datasource/alertmanager/types.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/alertmanager.ts
var alertmanager = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/time.ts + 1 modules
var time = __webpack_require__("./public/app/features/alerting/unified/utils/time.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/utils/amroutes.ts





const defaultValueAndType = ['', time/* timeOptions.0.value */.qr[0].value];

const matchersToArrayFieldMatchers = (matchers, isRegex) => Object.entries(matchers !== null && matchers !== void 0 ? matchers : {}).reduce((acc, _ref) => {
  let [name, value] = _ref;
  return [...acc, {
    name,
    value,
    operator: isRegex ? types/* MatcherOperator.regex */._M.regex : types/* MatcherOperator.equal */._M.equal
  }];
}, []);

const intervalToValueAndType = strValue => {
  if (!strValue) {
    return defaultValueAndType;
  }

  const [value, valueType] = strValue ? (0,time/* parseInterval */.bG)(strValue) : [undefined, undefined];
  const timeOption = time/* timeOptions.find */.qr.find(opt => opt.value === valueType);

  if (!value || !timeOption) {
    return defaultValueAndType;
  }

  return [String(value), timeOption.value];
};

const selectableValueToString = selectableValue => selectableValue.value;

const selectableValuesToStrings = arr => (arr !== null && arr !== void 0 ? arr : []).map(selectableValueToString);

const emptyArrayFieldMatcher = {
  name: '',
  value: '',
  operator: types/* MatcherOperator.equal */._M.equal
};
const emptyRoute = {
  id: '',
  groupBy: [],
  object_matchers: [],
  routes: [],
  continue: false,
  receiver: '',
  groupWaitValue: '',
  groupWaitValueType: time/* timeOptions.0.value */.qr[0].value,
  groupIntervalValue: '',
  groupIntervalValueType: time/* timeOptions.0.value */.qr[0].value,
  repeatIntervalValue: '',
  repeatIntervalValueType: time/* timeOptions.0.value */.qr[0].value,
  muteTimeIntervals: []
}; //returns route, and a record mapping id to existing route route

const amRouteToFormAmRoute = route => {
  var _route$routes, _route$matchers$map, _route$matchers, _route$object_matcher, _route$object_matcher2, _route$continue, _route$receiver, _route$group_by, _route$mute_time_inte;

  if (!route || Object.keys(route).length === 0) {
    return [emptyRoute, {}];
  }

  const [groupWaitValue, groupWaitValueType] = intervalToValueAndType(route.group_wait);
  const [groupIntervalValue, groupIntervalValueType] = intervalToValueAndType(route.group_interval);
  const [repeatIntervalValue, repeatIntervalValueType] = intervalToValueAndType(route.repeat_interval);
  const id = String(Math.random());
  const id2route = {
    [id]: route
  };
  const formRoutes = [];
  (_route$routes = route.routes) === null || _route$routes === void 0 ? void 0 : _route$routes.forEach(subRoute => {
    const [subFormRoute, subId2Route] = amRouteToFormAmRoute(subRoute);
    formRoutes.push(subFormRoute);
    Object.assign(id2route, subId2Route);
  }); // Frontend migration to use object_matchers instead of matchers

  const matchers = route.matchers ? (_route$matchers$map = (_route$matchers = route.matchers) === null || _route$matchers === void 0 ? void 0 : _route$matchers.map(matcher => (0,alertmanager/* matcherToMatcherField */.cm)((0,alertmanager/* parseMatcher */.tC)(matcher)))) !== null && _route$matchers$map !== void 0 ? _route$matchers$map : [] : (_route$object_matcher = (_route$object_matcher2 = route.object_matchers) === null || _route$object_matcher2 === void 0 ? void 0 : _route$object_matcher2.map(matcher => ({
    name: matcher[0],
    operator: matcher[1],
    value: matcher[2]
  }))) !== null && _route$object_matcher !== void 0 ? _route$object_matcher : [];
  return [{
    id,
    object_matchers: [...matchers, ...matchersToArrayFieldMatchers(route.match, false), ...matchersToArrayFieldMatchers(route.match_re, true)],
    continue: (_route$continue = route.continue) !== null && _route$continue !== void 0 ? _route$continue : false,
    receiver: (_route$receiver = route.receiver) !== null && _route$receiver !== void 0 ? _route$receiver : '',
    groupBy: (_route$group_by = route.group_by) !== null && _route$group_by !== void 0 ? _route$group_by : [],
    groupWaitValue,
    groupWaitValueType,
    groupIntervalValue,
    groupIntervalValueType,
    repeatIntervalValue,
    repeatIntervalValueType,
    routes: formRoutes,
    muteTimeIntervals: (_route$mute_time_inte = route.mute_time_intervals) !== null && _route$mute_time_inte !== void 0 ? _route$mute_time_inte : []
  }, id2route];
};
const formAmRouteToAmRoute = (alertManagerSourceName, formAmRoute, id2ExistingRoute) => {
  const existing = id2ExistingRoute[formAmRoute.id];
  const amRoute = Object.assign({}, existing !== null && existing !== void 0 ? existing : {}, {
    continue: formAmRoute.continue,
    group_by: formAmRoute.groupBy,
    object_matchers: formAmRoute.object_matchers.length ? formAmRoute.object_matchers.map(matcher => [matcher.name, matcher.operator, matcher.value]) : undefined,
    match: undefined,
    match_re: undefined,
    group_wait: formAmRoute.groupWaitValue ? `${formAmRoute.groupWaitValue}${formAmRoute.groupWaitValueType}` : undefined,
    group_interval: formAmRoute.groupIntervalValue ? `${formAmRoute.groupIntervalValue}${formAmRoute.groupIntervalValueType}` : undefined,
    repeat_interval: formAmRoute.repeatIntervalValue ? `${formAmRoute.repeatIntervalValue}${formAmRoute.repeatIntervalValueType}` : undefined,
    routes: formAmRoute.routes.map(subRoute => formAmRouteToAmRoute(alertManagerSourceName, subRoute, id2ExistingRoute)),
    mute_time_intervals: formAmRoute.muteTimeIntervals
  });

  if (alertManagerSourceName !== datasource/* GRAFANA_RULES_SOURCE_NAME */.GC) {
    amRoute.matchers = formAmRoute.object_matchers.map(_ref2 => {
      let {
        name,
        operator,
        value
      } = _ref2;
      return `${name}${operator}${value}`;
    });
    amRoute.object_matchers = undefined;
  } else {
    amRoute.matchers = undefined;
  }

  if (formAmRoute.receiver) {
    amRoute.receiver = formAmRoute.receiver;
  }

  return (0,lodash.omitBy)(amRoute, lodash.isUndefined);
};
const stringToSelectableValue = str => ({
  label: str,
  value: str
});
const stringsToSelectableValues = arr => (arr !== null && arr !== void 0 ? arr : []).map(stringToSelectableValue);
const mapSelectValueToString = selectableValue => {
  var _selectableValueToStr;

  if (!selectableValue) {
    return '';
  }

  return (_selectableValueToStr = selectableValueToString(selectableValue)) !== null && _selectableValueToStr !== void 0 ? _selectableValueToStr : '';
};
const mapMultiSelectValueToStrings = selectableValues => {
  if (!selectableValues) {
    return [];
  }

  return selectableValuesToStrings(selectableValues);
};
const optionalPositiveInteger = value => {
  if (!value) {
    return undefined;
  }

  return !/^\d+$/.test(value) ? 'Must be a positive integer.' : undefined;
};
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/misc.ts
var misc = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/amroutes/formStyles.ts

const getFormStyles = theme => {
  return {
    container: emotion_css_esm.css`
      align-items: center;
      display: flex;
      flex-flow: row nowrap;

      & > * + * {
        margin-left: ${theme.spacing(1)};
      }
    `,
    input: emotion_css_esm.css`
      flex: 1;
    `,
    timingContainer: emotion_css_esm.css`
      max-width: ${theme.spacing(33)};
    `,
    smallInput: emotion_css_esm.css`
      width: ${theme.spacing(6.5)};
    `,
    linkText: emotion_css_esm.css`
      text-decoration: underline;
    `,
    collapse: emotion_css_esm.css`
      border: none;
      background: none;
      color: ${theme.colors.text.primary};
    `
  };
};
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/amroutes/AmRootRouteForm.tsx
var _span, _Button;

const _excluded = ["onChange", "ref"],
      _excluded2 = ["onChange", "ref"],
      _excluded3 = ["onChange", "ref"],
      _excluded4 = ["onChange", "ref"],
      _excluded5 = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const AmRootRouteForm = _ref => {
  var _Button2;

  let {
    alertManagerSourceName,
    onCancel,
    onSave,
    receivers,
    routes
  } = _ref;
  const styles = (0,src.useStyles2)(getFormStyles);
  const [isTimingOptionsExpanded, setIsTimingOptionsExpanded] = (0,react.useState)(false);
  const [groupByOptions, setGroupByOptions] = (0,react.useState)(stringsToSelectableValues(routes.groupBy));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Form, {
    defaultValues: routes,
    onSubmit: onSave,
    children: _ref2 => {
      var _errors$receiver, _errors$groupWaitValu, _errors$groupInterval, _errors$repeatInterva;

      let {
        control,
        errors,
        setValue
      } = _ref2;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
          label: "Default contact point",
          invalid: !!errors.receiver,
          error: (_errors$receiver = errors.receiver) === null || _errors$receiver === void 0 ? void 0 : _errors$receiver.message,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: styles.container,
              "data-testid": "am-receiver-select",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                render: _ref3 => {
                  let {
                    field: {
                      onChange
                    }
                  } = _ref3,
                      field = _objectWithoutPropertiesLoose(_ref3.field, _excluded);

                  return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Select, Object.assign({
                    "aria-label": "Default contact point"
                  }, field, {
                    className: styles.input,
                    onChange: value => onChange(mapSelectValueToString(value)),
                    options: receivers
                  }));
                },
                control: control,
                name: "receiver",
                rules: {
                  required: {
                    value: true,
                    message: 'Required.'
                  }
                }
              }), _span || (_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                children: "or"
              })), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Link, {
                className: styles.linkText,
                href: (0,misc/* makeAMLink */.eQ)('/alerting/notifications/receivers/new', alertManagerSourceName),
                children: "Create a contact point"
              })]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
          label: "Group by",
          description: "Group alerts when you receive a notification based on labels.",
          "data-testid": "am-group-select",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
            render: _ref4 => {
              let {
                field: {
                  onChange
                }
              } = _ref4,
                  field = _objectWithoutPropertiesLoose(_ref4.field, _excluded2);

              return /*#__PURE__*/(0,jsx_runtime.jsx)(src.MultiSelect, Object.assign({
                "aria-label": "Group by"
              }, field, {
                allowCustomValue: true,
                className: styles.input,
                onCreateOption: opt => {
                  setGroupByOptions(opts => [...opts, stringToSelectableValue(opt)]); // @ts-ignore-check: react-hook-form made me do this

                  setValue('groupBy', [...field.value, opt]);
                },
                onChange: value => onChange(mapMultiSelectValueToStrings(value)),
                options: groupByOptions
              }));
            },
            control: control,
            name: "groupBy"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(src.Collapse, {
          collapsible: true,
          className: styles.collapse,
          isOpen: isTimingOptionsExpanded,
          label: "Timing options",
          onToggle: setIsTimingOptionsExpanded,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "Group wait",
            description: "The waiting time until the initial notification is sent for a new group created by an incoming alert. Default 30 seconds.",
            invalid: !!errors.groupWaitValue,
            error: (_errors$groupWaitValu = errors.groupWaitValue) === null || _errors$groupWaitValu === void 0 ? void 0 : _errors$groupWaitValu.message,
            "data-testid": "am-group-wait",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: (0,emotion_css_esm.cx)(styles.container, styles.timingContainer),
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                  render: _ref5 => {
                    let {
                      field,
                      fieldState: {
                        invalid
                      }
                    } = _ref5;
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, field, {
                      className: styles.smallInput,
                      invalid: invalid,
                      placeholder: 'Default 30 seconds'
                    }));
                  },
                  control: control,
                  name: "groupWaitValue",
                  rules: {
                    validate: optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                  render: _ref6 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref6,
                        field = _objectWithoutPropertiesLoose(_ref6.field, _excluded3);

                    return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Select, Object.assign({}, field, {
                      className: styles.input,
                      onChange: value => onChange(mapSelectValueToString(value)),
                      options: time/* timeOptions */.qr,
                      "aria-label": "Group wait type"
                    }));
                  },
                  control: control,
                  name: "groupWaitValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "Group interval",
            description: "The waiting time to send a batch of new alerts for that group after the first notification was sent. Default 5 minutes.",
            invalid: !!errors.groupIntervalValue,
            error: (_errors$groupInterval = errors.groupIntervalValue) === null || _errors$groupInterval === void 0 ? void 0 : _errors$groupInterval.message,
            "data-testid": "am-group-interval",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: (0,emotion_css_esm.cx)(styles.container, styles.timingContainer),
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                  render: _ref7 => {
                    let {
                      field,
                      fieldState: {
                        invalid
                      }
                    } = _ref7;
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, field, {
                      className: styles.smallInput,
                      invalid: invalid,
                      placeholder: 'Default 5 minutes'
                    }));
                  },
                  control: control,
                  name: "groupIntervalValue",
                  rules: {
                    validate: optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                  render: _ref8 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref8,
                        field = _objectWithoutPropertiesLoose(_ref8.field, _excluded4);

                    return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Select, Object.assign({}, field, {
                      className: styles.input,
                      onChange: value => onChange(mapSelectValueToString(value)),
                      options: time/* timeOptions */.qr,
                      "aria-label": "Group interval type"
                    }));
                  },
                  control: control,
                  name: "groupIntervalValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "Repeat interval",
            description: "The waiting time to resend an alert after they have successfully been sent. Default 4 hours.",
            invalid: !!errors.repeatIntervalValue,
            error: (_errors$repeatInterva = errors.repeatIntervalValue) === null || _errors$repeatInterva === void 0 ? void 0 : _errors$repeatInterva.message,
            "data-testid": "am-repeat-interval",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: (0,emotion_css_esm.cx)(styles.container, styles.timingContainer),
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                  render: _ref9 => {
                    let {
                      field,
                      fieldState: {
                        invalid
                      }
                    } = _ref9;
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, field, {
                      className: styles.smallInput,
                      invalid: invalid,
                      placeholder: "Default 4 hours"
                    }));
                  },
                  control: control,
                  name: "repeatIntervalValue",
                  rules: {
                    validate: optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                  render: _ref10 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref10,
                        field = _objectWithoutPropertiesLoose(_ref10.field, _excluded5);

                    return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Select, Object.assign({}, field, {
                      className: styles.input,
                      menuPlacement: "top",
                      onChange: value => onChange(mapSelectValueToString(value)),
                      options: time/* timeOptions */.qr,
                      "aria-label": "Repeat interval type"
                    }));
                  },
                  control: control,
                  name: "repeatIntervalValueType"
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.container,
          children: [_Button || (_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            type: "submit",
            children: "Save"
          })), _Button2 || (_Button2 = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            onClick: onCancel,
            type: "reset",
            variant: "secondary",
            fill: "outline",
            children: "Cancel"
          }))]
        })]
      });
    }
  });
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/amroutes/gridStyles.ts

const getGridStyles = theme => {
  return {
    container: emotion_css_esm.css`
      display: grid;
      font-style: ${theme.typography.fontSize};
      grid-template-columns: ${theme.spacing(15.5)} auto;

      ${theme.breakpoints.down('md')} {
        grid-template-columns: 100%;
      }
    `,
    titleCell: emotion_css_esm.css`
      color: ${theme.colors.text.primary};
    `,
    valueCell: emotion_css_esm.css`
      color: ${theme.colors.text.secondary};
      margin-bottom: ${theme.spacing(1)};
    `
  };
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/amroutes/AmRootRouteRead.tsx





const AmRootRouteRead = _ref => {
  let {
    routes
  } = _ref;
  const styles = (0,src.useStyles2)(getGridStyles);
  const receiver = routes.receiver || '-';
  const groupBy = routes.groupBy.join(', ') || '-';
  const groupWait = routes.groupWaitValue ? `${routes.groupWaitValue}${routes.groupWaitValueType}` : '-';
  const groupInterval = routes.groupIntervalValue ? `${routes.groupIntervalValue}${routes.groupIntervalValueType}` : '-';
  const repeatInterval = routes.repeatIntervalValue ? `${routes.repeatIntervalValue}${routes.repeatIntervalValueType}` : '-';
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.titleCell,
      children: "Contact point"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.valueCell,
      "data-testid": "am-routes-root-receiver",
      children: receiver
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.titleCell,
      children: "Group by"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.valueCell,
      "data-testid": "am-routes-root-group-by",
      children: groupBy
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: styles.titleCell,
      children: "Timings"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.valueCell,
      "data-testid": "am-routes-root-timings",
      children: ["Group wait: ", groupWait, " | Group interval: ", groupInterval, " | Repeat interval: ", repeatInterval]
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/amroutes/AmRootRoute.tsx
var _i, _p;











const AmRootRoute = _ref => {
  let {
    isEditMode,
    onSave,
    onEnterEditMode,
    onExitEditMode,
    receivers,
    routes,
    alertManagerSourceName
  } = _ref;
  const styles = (0,src.useStyles2)(getStyles);
  const permissions = (0,access_control/* getNotificationsPermissions */.Ko)(alertManagerSourceName);
  const isReadOnly = (0,datasource/* isVanillaPrometheusAlertManagerDataSource */.RY)(alertManagerSourceName);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    "data-testid": "am-root-route-container",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.titleContainer,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("h5", {
        className: styles.title,
        children: ["Root policy - ", _i || (_i = /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
          children: "default for all alerts"
        }))]
      }), !isEditMode && !isReadOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
        actions: [permissions.update],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          icon: "pen",
          onClick: onEnterEditMode,
          size: "sm",
          type: "button",
          variant: "secondary",
          children: "Edit"
        })
      })]
    }), _p || (_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: "All alerts will go to the default contact point, unless you set additional matchers in the specific routing area."
    })), isEditMode ? /*#__PURE__*/(0,jsx_runtime.jsx)(AmRootRouteForm, {
      alertManagerSourceName: alertManagerSourceName,
      onCancel: onExitEditMode,
      onSave: onSave,
      receivers: receivers,
      routes: routes
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(AmRootRouteRead, {
      routes: routes
    })]
  });
};

const getStyles = theme => {
  return {
    container: emotion_css_esm.css`
      background-color: ${theme.colors.background.secondary};
      color: ${theme.colors.text.secondary};
      padding: ${theme.spacing(2)};
    `,
    titleContainer: emotion_css_esm.css`
      color: ${theme.colors.text.primary};
      display: flex;
      flex-flow: row nowrap;
    `,
    title: emotion_css_esm.css`
      flex: 100%;
    `
  };
};
// EXTERNAL MODULE: ./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js + 1 modules
var useDebounce = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");
// EXTERNAL MODULE: ./public/app/core/services/context_srv.ts
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useURLSearchParams.ts
var useURLSearchParams = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/EmptyArea.tsx




const EmptyArea = _ref => {
  let {
    children
  } = _ref;
  const styles = (0,src.useStyles)(EmptyArea_getStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.container,
    children: children
  });
};

const EmptyArea_getStyles = theme => {
  return {
    container: emotion_css_esm.css`
      background-color: ${theme.colors.bg2};
      color: ${theme.colors.textSemiWeak};
      padding: ${theme.spacing.xl};
      text-align: center;
    `
  };
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/EmptyAreaWithCTA.tsx







const EmptyAreaWithCTA = _ref => {
  let {
    buttonIcon,
    buttonLabel,
    buttonSize = 'lg',
    buttonVariant = 'primary',
    onButtonClick,
    text,
    href,
    showButton = true
  } = _ref;
  const styles = (0,src.useStyles)(EmptyAreaWithCTA_getStyles);
  const commonProps = {
    className: styles.button,
    icon: buttonIcon,
    size: buttonSize,
    variant: buttonVariant
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyArea, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        className: styles.text,
        children: text
      }), showButton && (href ? /*#__PURE__*/(0,jsx_runtime.jsx)(src.LinkButton, Object.assign({
        href: href,
        type: "button"
      }, commonProps, {
        children: buttonLabel
      })) : /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, Object.assign({
        onClick: onButtonClick,
        type: "button"
      }, commonProps, {
        children: buttonLabel
      })))]
    })
  });
};

const EmptyAreaWithCTA_getStyles = theme => {
  return {
    container: emotion_css_esm.css`
      background-color: ${theme.colors.bg2};
      color: ${theme.colors.textSemiWeak};
      padding: ${theme.spacing.xl};
      text-align: center;
    `,
    text: emotion_css_esm.css`
      margin-bottom: ${theme.spacing.md};
    `,
    button: emotion_css_esm.css`
      margin: ${theme.spacing.md} 0 ${theme.spacing.sm};
    `
  };
};
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx
var MatcherFilter = __webpack_require__("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/utils/dynamicTable.ts
const prepareItems = (items, idCreator) => items.map((item, index) => {
  var _idCreator;

  return {
    id: (_idCreator = idCreator === null || idCreator === void 0 ? void 0 : idCreator(item)) !== null && _idCreator !== void 0 ? _idCreator : index,
    data: item
  };
});
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/DynamicTable.tsx
var DynamicTable = __webpack_require__("./public/app/features/alerting/unified/components/DynamicTable.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/silences/Matchers.tsx
var Matchers = __webpack_require__("./public/app/features/alerting/unified/components/silences/Matchers.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/redux.ts
var redux = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts
var useAlertManagerSourceName = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts
var useAlertManagerSources = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts
var useUnifiedAlertingSelector = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/hooks/useMuteTimingOptions.ts






function useMuteTimingOptions() {
  const alertManagers = (0,useAlertManagerSources/* useAlertManagersByPermission */.k)('notification');
  const [alertManagerSourceName] = (0,useAlertManagerSourceName/* useAlertManagerSourceName */.k)(alertManagers);
  const amConfigs = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.amConfigs);
  return (0,react.useMemo)(() => {
    var _result$alertmanager_, _config$mute_time_int, _config$mute_time_int2;

    const {
      result
    } = alertManagerSourceName && amConfigs[alertManagerSourceName] || redux/* initialAsyncRequestState */.oq;
    const config = (_result$alertmanager_ = result === null || result === void 0 ? void 0 : result.alertmanager_config) !== null && _result$alertmanager_ !== void 0 ? _result$alertmanager_ : {};
    const muteTimingsOptions = (_config$mute_time_int = config === null || config === void 0 ? void 0 : (_config$mute_time_int2 = config.mute_time_intervals) === null || _config$mute_time_int2 === void 0 ? void 0 : _config$mute_time_int2.map(value => ({
      value: value.name,
      label: value.name,
      description: value.time_intervals.map(interval => (0,alertmanager/* timeIntervalToString */.uK)(interval)).join(', AND ')
    }))) !== null && _config$mute_time_int !== void 0 ? _config$mute_time_int : [];
    return muteTimingsOptions;
  }, [alertManagerSourceName, amConfigs]);
}
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/amroutes/AmRoutesExpandedForm.tsx
const AmRoutesExpandedForm_excluded = ["onChange", "ref"],
      AmRoutesExpandedForm_excluded2 = ["onChange", "ref"],
      AmRoutesExpandedForm_excluded3 = ["onChange", "ref"],
      AmRoutesExpandedForm_excluded4 = ["onChange", "ref"],
      AmRoutesExpandedForm_excluded5 = ["onChange", "ref"],
      _excluded6 = ["onChange", "ref"],
      _excluded7 = ["onChange", "ref"];

var _div, AmRoutesExpandedForm_Button;

function AmRoutesExpandedForm_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












const AmRoutesExpandedForm = _ref => {
  var _Button2;

  let {
    onCancel,
    onSave,
    receivers,
    routes
  } = _ref;
  const styles = (0,src.useStyles2)(AmRoutesExpandedForm_getStyles);
  const formStyles = (0,src.useStyles2)(getFormStyles);
  const [overrideGrouping, setOverrideGrouping] = (0,react.useState)(routes.groupBy.length > 0);
  const [overrideTimings, setOverrideTimings] = (0,react.useState)(!!routes.groupWaitValue || !!routes.groupIntervalValue || !!routes.repeatIntervalValue);
  const [groupByOptions, setGroupByOptions] = (0,react.useState)(stringsToSelectableValues(routes.groupBy));
  const muteTimingOptions = useMuteTimingOptions();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Form, {
    defaultValues: routes,
    onSubmit: onSave,
    children: _ref2 => {
      var _errors$groupWaitValu, _errors$groupInterval, _errors$repeatInterva;

      let {
        control,
        register,
        errors,
        setValue
      } = _ref2;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("input", Object.assign({
          type: "hidden"
        }, register('id'))), /*#__PURE__*/(0,jsx_runtime.jsx)(src.FieldArray, {
          name: "object_matchers",
          control: control,
          children: _ref3 => {
            let {
              fields,
              append,
              remove
            } = _ref3;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(src.VerticalGroup, {
                justify: "flex-start",
                spacing: "md",
                children: [_div || (_div = /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  children: "Matching labels"
                })), fields.length === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Badge, {
                  color: "orange",
                  className: styles.noMatchersWarning,
                  icon: "exclamation-triangle",
                  text: "If no matchers are specified, this notification policy will handle all alert instances."
                }), fields.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                  className: styles.matchersContainer,
                  children: fields.map((field, index) => {
                    var _errors$object_matche, _errors$object_matche2, _errors$object_matche3, _errors$object_matche4, _errors$object_matche5, _errors$object_matche6, _errors$object_matche7, _errors$object_matche8, _errors$object_matche9, _errors$object_matche10;

                    const localPath = `object_matchers[${index}]`;
                    return /*#__PURE__*/(0,jsx_runtime.jsxs)(src.HorizontalGroup, {
                      align: "flex-start",
                      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
                        label: "Label",
                        invalid: !!((_errors$object_matche = errors.object_matchers) !== null && _errors$object_matche !== void 0 && (_errors$object_matche2 = _errors$object_matche[index]) !== null && _errors$object_matche2 !== void 0 && _errors$object_matche2.name),
                        error: (_errors$object_matche3 = errors.object_matchers) === null || _errors$object_matche3 === void 0 ? void 0 : (_errors$object_matche4 = _errors$object_matche3[index]) === null || _errors$object_matche4 === void 0 ? void 0 : (_errors$object_matche5 = _errors$object_matche4.name) === null || _errors$object_matche5 === void 0 ? void 0 : _errors$object_matche5.message,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, register(`${localPath}.name`, {
                          required: 'Field is required'
                        }), {
                          defaultValue: field.name,
                          placeholder: "label"
                        }))
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
                        label: 'Operator',
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                          render: _ref4 => {
                            let {
                              field: {
                                onChange
                              }
                            } = _ref4,
                                field = AmRoutesExpandedForm_objectWithoutPropertiesLoose(_ref4.field, AmRoutesExpandedForm_excluded);

                            return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Select, Object.assign({}, field, {
                              className: styles.matchersOperator,
                              onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value),
                              options: alertmanager/* matcherFieldOptions */.tA,
                              "aria-label": "Operator"
                            }));
                          },
                          defaultValue: field.operator,
                          control: control,
                          name: `${localPath}.operator`,
                          rules: {
                            required: {
                              value: true,
                              message: 'Required.'
                            }
                          }
                        })
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
                        label: "Value",
                        invalid: !!((_errors$object_matche6 = errors.object_matchers) !== null && _errors$object_matche6 !== void 0 && (_errors$object_matche7 = _errors$object_matche6[index]) !== null && _errors$object_matche7 !== void 0 && _errors$object_matche7.value),
                        error: (_errors$object_matche8 = errors.object_matchers) === null || _errors$object_matche8 === void 0 ? void 0 : (_errors$object_matche9 = _errors$object_matche8[index]) === null || _errors$object_matche9 === void 0 ? void 0 : (_errors$object_matche10 = _errors$object_matche9.value) === null || _errors$object_matche10 === void 0 ? void 0 : _errors$object_matche10.message,
                        children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, register(`${localPath}.value`, {
                          required: 'Field is required'
                        }), {
                          defaultValue: field.value,
                          placeholder: "value"
                        }))
                      }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.IconButton, {
                        className: styles.removeButton,
                        tooltip: "Remove matcher",
                        name: 'trash-alt',
                        onClick: () => remove(index),
                        children: "Remove"
                      })]
                    }, field.id);
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
                  className: styles.addMatcherBtn,
                  icon: "plus",
                  onClick: () => append(emptyArrayFieldMatcher),
                  variant: "secondary",
                  type: "button",
                  children: "Add matcher"
                })]
              })
            });
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
          label: "Contact point",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
            render: _ref5 => {
              let {
                field: {
                  onChange
                }
              } = _ref5,
                  field = AmRoutesExpandedForm_objectWithoutPropertiesLoose(_ref5.field, AmRoutesExpandedForm_excluded2);

              return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Select, Object.assign({
                "aria-label": "Contact point"
              }, field, {
                className: formStyles.input,
                onChange: value => onChange(mapSelectValueToString(value)),
                options: receivers
              }));
            },
            control: control,
            name: "receiver"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
          label: "Continue matching subsequent sibling nodes",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Switch, Object.assign({
            id: "continue-toggle"
          }, register('continue')))
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
          label: "Override grouping",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Switch, {
            id: "override-grouping-toggle",
            value: overrideGrouping,
            onChange: () => setOverrideGrouping(overrideGrouping => !overrideGrouping)
          })
        }), overrideGrouping && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
          label: "Group by",
          description: "Group alerts when you receive a notification based on labels.",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
            render: _ref6 => {
              let {
                field: {
                  onChange
                }
              } = _ref6,
                  field = AmRoutesExpandedForm_objectWithoutPropertiesLoose(_ref6.field, AmRoutesExpandedForm_excluded3);

              return /*#__PURE__*/(0,jsx_runtime.jsx)(src.MultiSelect, Object.assign({
                "aria-label": "Group by"
              }, field, {
                allowCustomValue: true,
                className: formStyles.input,
                onCreateOption: opt => {
                  setGroupByOptions(opts => [...opts, stringToSelectableValue(opt)]); // @ts-ignore-check: react-hook-form made me do this

                  setValue('groupBy', [...field.value, opt]);
                },
                onChange: value => onChange(mapMultiSelectValueToStrings(value)),
                options: groupByOptions
              }));
            },
            control: control,
            name: "groupBy"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
          label: "Override general timings",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Switch, {
            id: "override-timings-toggle",
            value: overrideTimings,
            onChange: () => setOverrideTimings(overrideTimings => !overrideTimings)
          })
        }), overrideTimings && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "Group wait",
            description: "The waiting time until the initial notification is sent for a new group created by an incoming alert.",
            invalid: !!errors.groupWaitValue,
            error: (_errors$groupWaitValu = errors.groupWaitValue) === null || _errors$groupWaitValu === void 0 ? void 0 : _errors$groupWaitValu.message,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: (0,emotion_css_esm.cx)(formStyles.container, formStyles.timingContainer),
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                  render: _ref7 => {
                    let {
                      field,
                      fieldState: {
                        invalid
                      }
                    } = _ref7;
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, field, {
                      className: formStyles.smallInput,
                      invalid: invalid,
                      placeholder: "Time",
                      "aria-label": "Group wait value"
                    }));
                  },
                  control: control,
                  name: "groupWaitValue",
                  rules: {
                    validate: optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                  render: _ref8 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref8,
                        field = AmRoutesExpandedForm_objectWithoutPropertiesLoose(_ref8.field, AmRoutesExpandedForm_excluded4);

                    return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Select, Object.assign({}, field, {
                      className: formStyles.input,
                      onChange: value => onChange(mapSelectValueToString(value)),
                      options: time/* timeOptions */.qr,
                      "aria-label": "Group wait type"
                    }));
                  },
                  control: control,
                  name: "groupWaitValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "Group interval",
            description: "The waiting time to send a batch of new alerts for that group after the first notification was sent.",
            invalid: !!errors.groupIntervalValue,
            error: (_errors$groupInterval = errors.groupIntervalValue) === null || _errors$groupInterval === void 0 ? void 0 : _errors$groupInterval.message,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: (0,emotion_css_esm.cx)(formStyles.container, formStyles.timingContainer),
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                  render: _ref9 => {
                    let {
                      field,
                      fieldState: {
                        invalid
                      }
                    } = _ref9;
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, field, {
                      className: formStyles.smallInput,
                      invalid: invalid,
                      placeholder: "Time",
                      "aria-label": "Group interval value"
                    }));
                  },
                  control: control,
                  name: "groupIntervalValue",
                  rules: {
                    validate: optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                  render: _ref10 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref10,
                        field = AmRoutesExpandedForm_objectWithoutPropertiesLoose(_ref10.field, AmRoutesExpandedForm_excluded5);

                    return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Select, Object.assign({}, field, {
                      className: formStyles.input,
                      onChange: value => onChange(mapSelectValueToString(value)),
                      options: time/* timeOptions */.qr,
                      "aria-label": "Group interval type"
                    }));
                  },
                  control: control,
                  name: "groupIntervalValueType"
                })]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
            label: "Repeat interval",
            description: "The waiting time to resend an alert after they have successfully been sent.",
            invalid: !!errors.repeatIntervalValue,
            error: (_errors$repeatInterva = errors.repeatIntervalValue) === null || _errors$repeatInterva === void 0 ? void 0 : _errors$repeatInterva.message,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: (0,emotion_css_esm.cx)(formStyles.container, formStyles.timingContainer),
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                  render: _ref11 => {
                    let {
                      field,
                      fieldState: {
                        invalid
                      }
                    } = _ref11;
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, field, {
                      className: formStyles.smallInput,
                      invalid: invalid,
                      placeholder: "Time",
                      "aria-label": "Repeat interval value"
                    }));
                  },
                  control: control,
                  name: "repeatIntervalValue",
                  rules: {
                    validate: optionalPositiveInteger
                  }
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                  render: _ref12 => {
                    let {
                      field: {
                        onChange
                      }
                    } = _ref12,
                        field = AmRoutesExpandedForm_objectWithoutPropertiesLoose(_ref12.field, _excluded6);

                    return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Select, Object.assign({}, field, {
                      className: formStyles.input,
                      menuPlacement: "top",
                      onChange: value => onChange(mapSelectValueToString(value)),
                      options: time/* timeOptions */.qr,
                      "aria-label": "Repeat interval type"
                    }));
                  },
                  control: control,
                  name: "repeatIntervalValueType"
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
          label: "Mute timings",
          "data-testid": "am-mute-timing-select",
          description: "Add mute timing to policy",
          invalid: !!errors.muteTimeIntervals,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
            render: _ref13 => {
              let {
                field: {
                  onChange
                }
              } = _ref13,
                  field = AmRoutesExpandedForm_objectWithoutPropertiesLoose(_ref13.field, _excluded7);

              return /*#__PURE__*/(0,jsx_runtime.jsx)(src.MultiSelect, Object.assign({
                "aria-label": "Mute timings"
              }, field, {
                className: formStyles.input,
                onChange: value => onChange(mapMultiSelectValueToStrings(value)),
                options: muteTimingOptions
              }));
            },
            control: control,
            name: "muteTimeIntervals"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.buttonGroup,
          children: [AmRoutesExpandedForm_Button || (AmRoutesExpandedForm_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            type: "submit",
            children: "Save policy"
          })), _Button2 || (_Button2 = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            onClick: onCancel,
            fill: "outline",
            type: "button",
            variant: "secondary",
            children: "Cancel"
          }))]
        })]
      });
    }
  });
};

const AmRoutesExpandedForm_getStyles = theme => {
  const commonSpacing = theme.spacing(3.5);
  return {
    addMatcherBtn: emotion_css_esm.css`
      margin-bottom: ${commonSpacing};
    `,
    matchersContainer: emotion_css_esm.css`
      background-color: ${theme.colors.background.secondary};
      margin: ${theme.spacing(1, 0)};
      padding: ${theme.spacing(1, 4.6, 1, 1.5)};
      width: fit-content;
    `,
    matchersOperator: emotion_css_esm.css`
      min-width: 140px;
    `,
    nestedPolicies: emotion_css_esm.css`
      margin-top: ${commonSpacing};
    `,
    removeButton: emotion_css_esm.css`
      margin-left: ${theme.spacing(1)};
      margin-top: ${theme.spacing(2.5)};
    `,
    buttonGroup: emotion_css_esm.css`
      margin: ${theme.spacing(6)} 0 ${commonSpacing};

      & > * + * {
        margin-left: ${theme.spacing(1.5)};
      }
    `,
    noMatchersWarning: emotion_css_esm.css`
      padding: ${theme.spacing(1)} ${theme.spacing(2)};
    `
  };
};
// EXTERNAL MODULE: ./public/app/features/alerting/unified/state/actions.ts + 4 modules
var actions = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/amroutes/MuteTimingsTable.tsx
var _h, MuteTimingsTable_p, _p2, _IconButton, _br, _br2;

















const MuteTimingsTable = _ref => {
  var _result$alertmanager_3;

  let {
    alertManagerSourceName,
    muteTimingNames,
    hideActions
  } = _ref;
  const styles = (0,src.useStyles2)(MuteTimingsTable_getStyles);
  const dispatch = (0,es.useDispatch)();
  const permissions = (0,access_control/* getNotificationsPermissions */.Ko)(alertManagerSourceName);
  const amConfigs = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.amConfigs);
  const [muteTimingName, setMuteTimingName] = (0,react.useState)('');
  const {
    result
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || redux/* initialAsyncRequestState */.oq;
  const items = (0,react.useMemo)(() => {
    var _result$alertmanager_, _result$alertmanager_2;

    const muteTimings = (_result$alertmanager_ = result === null || result === void 0 ? void 0 : (_result$alertmanager_2 = result.alertmanager_config) === null || _result$alertmanager_2 === void 0 ? void 0 : _result$alertmanager_2.mute_time_intervals) !== null && _result$alertmanager_ !== void 0 ? _result$alertmanager_ : [];
    return muteTimings.filter(_ref2 => {
      let {
        name
      } = _ref2;
      return muteTimingNames ? muteTimingNames.includes(name) : true;
    }).map(mute => {
      return {
        id: mute.name,
        data: mute
      };
    });
  }, [result === null || result === void 0 ? void 0 : (_result$alertmanager_3 = result.alertmanager_config) === null || _result$alertmanager_3 === void 0 ? void 0 : _result$alertmanager_3.mute_time_intervals, muteTimingNames]);
  const columns = useColumns(alertManagerSourceName, hideActions, setMuteTimingName);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [!hideActions && (_h || (_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
      children: "Mute timings"
    }))), !hideActions && (MuteTimingsTable_p || (MuteTimingsTable_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: "Mute timings are a named interval of time that may be referenced in the notification policy tree to mute particular notification policies for specific times of the day."
    }))), !hideActions && items.length > 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
      actions: [permissions.create],
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.LinkButton, {
        className: styles.addMuteButton,
        icon: "plus",
        variant: "primary",
        href: (0,misc/* makeAMLink */.eQ)('alerting/routes/mute-timing/new', alertManagerSourceName),
        children: "New mute timing"
      })
    }), items.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsx)(DynamicTable/* DynamicTable */.t, {
      items: items,
      cols: columns
    }) : !hideActions ? /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyAreaWithCTA, {
      text: "You haven't created any mute timings yet",
      buttonLabel: "Add mute timing",
      buttonIcon: "plus",
      buttonSize: "lg",
      href: (0,misc/* makeAMLink */.eQ)('alerting/routes/mute-timing/new', alertManagerSourceName),
      showButton: context_srv/* contextSrv.hasPermission */.Vt.hasPermission(permissions.create)
    }) : _p2 || (_p2 = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: "No mute timings configured"
    })), !hideActions && /*#__PURE__*/(0,jsx_runtime.jsx)(src.ConfirmModal, {
      isOpen: !!muteTimingName,
      title: "Delete mute timing",
      body: `Are you sure you would like to delete "${muteTimingName}"`,
      confirmText: "Delete",
      onConfirm: () => dispatch((0,actions/* deleteMuteTimingAction */.r0)(alertManagerSourceName, muteTimingName)),
      onDismiss: () => setMuteTimingName('')
    })]
  });
};

function useColumns(alertManagerSourceName) {
  let hideActions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let setMuteTimingName = arguments.length > 2 ? arguments[2] : undefined;
  const permissions = (0,access_control/* getNotificationsPermissions */.Ko)(alertManagerSourceName);
  const userHasEditPermissions = context_srv/* contextSrv.hasPermission */.Vt.hasPermission(permissions.update);
  const userHasDeletePermissions = context_srv/* contextSrv.hasPermission */.Vt.hasPermission(permissions.delete);
  const showActions = !hideActions && (userHasEditPermissions || userHasDeletePermissions);
  return (0,react.useMemo)(() => {
    const columns = [{
      id: 'name',
      label: 'Name',
      renderCell: function renderName(_ref3) {
        let {
          data
        } = _ref3;
        return data.name;
      },
      size: '250px'
    }, {
      id: 'timeRange',
      label: 'Time range',
      renderCell: _ref4 => {
        let {
          data
        } = _ref4;
        return renderTimeIntervals(data.time_intervals);
      }
    }];

    if (showActions) {
      columns.push({
        id: 'actions',
        label: 'Actions',
        renderCell: function renderActions(_ref5) {
          let {
            data
          } = _ref5;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
              actions: [permissions.update],
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Link, {
                href: (0,misc/* makeAMLink */.eQ)(`/alerting/routes/mute-timing/edit`, alertManagerSourceName, {
                  muteName: data.name
                }),
                children: _IconButton || (_IconButton = /*#__PURE__*/(0,jsx_runtime.jsx)(src.IconButton, {
                  name: "edit",
                  title: "Edit mute timing"
                }))
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
              actions: [permissions.delete],
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.IconButton, {
                name: 'trash-alt',
                title: "Delete mute timing",
                onClick: () => setMuteTimingName(data.name)
              })
            })]
          });
        },
        size: '100px'
      });
    }

    return columns;
  }, [alertManagerSourceName, setMuteTimingName, showActions, permissions]);
}

function renderTimeIntervals(timeIntervals) {
  return timeIntervals.map((interval, index) => {
    const {
      times,
      weekdays,
      days_of_month,
      months,
      years
    } = interval;
    const timeString = (0,alertmanager/* getTimeString */.u6)(times);
    const weekdayString = (0,alertmanager/* getWeekdayString */.v7)(weekdays);
    const daysString = (0,alertmanager/* getDaysOfMonthString */.J8)(days_of_month);
    const monthsString = (0,alertmanager/* getMonthsString */.m8)(months);
    const yearsString = (0,alertmanager/* getYearsString */.qw)(years);
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
      children: [`${timeString} ${weekdayString}`, _br || (_br = /*#__PURE__*/(0,jsx_runtime.jsx)("br", {})), [daysString, monthsString, yearsString].join(' | '), _br2 || (_br2 = /*#__PURE__*/(0,jsx_runtime.jsx)("br", {}))]
    }, JSON.stringify(interval) + index);
  });
}

const MuteTimingsTable_getStyles = theme => ({
  container: emotion_css_esm.css`
    display: flex;
    flex-flow: column nowrap;
  `,
  addMuteButton: emotion_css_esm.css`
    margin-bottom: ${theme.spacing(2)};
    align-self: flex-end;
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/amroutes/AmRoutesExpandedRead.tsx
var AmRoutesExpandedRead_p;












const AmRoutesExpandedRead = _ref => {
  let {
    onChange,
    receivers,
    routes,
    readOnly = false,
    alertManagerSourceName
  } = _ref;
  const styles = (0,src.useStyles2)(AmRoutesExpandedRead_getStyles);
  const gridStyles = (0,src.useStyles2)(getGridStyles);
  const permissions = (0,access_control/* getNotificationsPermissions */.Ko)(alertManagerSourceName);
  const groupWait = routes.groupWaitValue ? `${routes.groupWaitValue}${routes.groupWaitValueType}` : '-';
  const groupInterval = routes.groupIntervalValue ? `${routes.groupIntervalValue}${routes.groupIntervalValueType}` : '-';
  const repeatInterval = routes.repeatIntervalValue ? `${routes.repeatIntervalValue}${routes.repeatIntervalValueType}` : '-';
  const [subroutes, setSubroutes] = (0,react.useState)(routes.routes);
  const [isAddMode, setIsAddMode] = (0,react.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: gridStyles.container,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Group wait"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: gridStyles.valueCell,
      children: groupWait
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Group interval"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: gridStyles.valueCell,
      children: groupInterval
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Repeat interval"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: gridStyles.valueCell,
      children: repeatInterval
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Nested policies"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: gridStyles.valueCell,
      children: [!!subroutes.length ? /*#__PURE__*/(0,jsx_runtime.jsx)(AmRoutesTable, {
        isAddMode: isAddMode,
        onCancelAdd: () => {
          setIsAddMode(false);
          setSubroutes(subroutes => {
            const newSubroutes = [...subroutes];
            newSubroutes.pop();
            return newSubroutes;
          });
        },
        onChange: newRoutes => {
          onChange(Object.assign({}, routes, {
            routes: newRoutes
          }));

          if (isAddMode) {
            setIsAddMode(false);
          }
        },
        receivers: receivers,
        routes: subroutes,
        alertManagerSourceName: alertManagerSourceName
      }) : AmRoutesExpandedRead_p || (AmRoutesExpandedRead_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: "No nested policies configured."
      })), !isAddMode && !readOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
        actions: [permissions.create],
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          className: styles.addNestedRoutingBtn,
          icon: "plus",
          onClick: () => {
            setSubroutes(subroutes => [...subroutes, emptyRoute]);
            setIsAddMode(true);
          },
          variant: "secondary",
          type: "button",
          children: "Add nested policy"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: gridStyles.titleCell,
      children: "Mute timings"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: gridStyles.valueCell,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(MuteTimingsTable, {
        alertManagerSourceName: alertManagerSourceName,
        muteTimingNames: routes.muteTimeIntervals,
        hideActions: true
      })
    })]
  });
};

const AmRoutesExpandedRead_getStyles = theme => {
  return {
    addNestedRoutingBtn: emotion_css_esm.css`
      margin-top: ${theme.spacing(2)};
    `
  };
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/amroutes/AmRoutesTable.tsx
var AmRoutesTable_span, _EmptyArea;
















const getFilteredRoutes = (routes, labelMatcherQuery, contactPointQuery) => {
  const matchers = (0,alertmanager/* parseMatchers */.Zh)(labelMatcherQuery !== null && labelMatcherQuery !== void 0 ? labelMatcherQuery : '');
  let filteredRoutes = routes;

  if (matchers.length) {
    filteredRoutes = routes.filter(route => {
      const routeMatchers = route.object_matchers.map(alertmanager/* matcherFieldToMatcher */._J);
      return (0,lodash.intersectionWith)(routeMatchers, matchers, lodash.isEqual).length > 0;
    });
  }

  if (contactPointQuery && contactPointQuery.length > 0) {
    filteredRoutes = filteredRoutes.filter(route => route.receiver.toLowerCase().includes(contactPointQuery.toLowerCase()));
  }

  return filteredRoutes;
};
const updatedRoute = (routes, updatedRoute) => {
  const newRoutes = [...routes];
  const editIndex = newRoutes.findIndex(route => route.id === updatedRoute.id);

  if (editIndex >= 0) {
    newRoutes[editIndex] = Object.assign({}, newRoutes[editIndex], updatedRoute);
  }

  return newRoutes;
};
const deleteRoute = (routes, routeId) => {
  return routes.filter(route => route.id !== routeId);
};
const AmRoutesTable = _ref => {
  let {
    isAddMode,
    onCancelAdd,
    onChange,
    receivers,
    routes,
    filters,
    readOnly = false,
    alertManagerSourceName
  } = _ref;
  const [editMode, setEditMode] = (0,react.useState)(false);
  const [deletingRouteId, setDeletingRouteId] = (0,react.useState)(undefined);
  const [expandedId, setExpandedId] = (0,react.useState)();
  const permissions = (0,access_control/* getNotificationsPermissions */.Ko)(alertManagerSourceName);
  const canEditRoutes = context_srv/* contextSrv.hasPermission */.Vt.hasPermission(permissions.update);
  const canDeleteRoutes = context_srv/* contextSrv.hasPermission */.Vt.hasPermission(permissions.delete);
  const showActions = !readOnly && (canEditRoutes || canDeleteRoutes);
  const expandItem = (0,react.useCallback)(item => setExpandedId(item.id), []);
  const collapseItem = (0,react.useCallback)(() => setExpandedId(undefined), []);
  const cols = [{
    id: 'matchingCriteria',
    label: 'Matching labels',
    // eslint-disable-next-line react/display-name
    renderCell: item => {
      return item.data.object_matchers.length ? /*#__PURE__*/(0,jsx_runtime.jsx)(Matchers/* Matchers */.g, {
        matchers: item.data.object_matchers.map(alertmanager/* matcherFieldToMatcher */._J)
      }) : AmRoutesTable_span || (AmRoutesTable_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: "Matches all alert instances"
      }));
    },
    size: 10
  }, {
    id: 'groupBy',
    label: 'Group by',
    renderCell: item => item.data.groupBy.join(', ') || '-',
    size: 5
  }, {
    id: 'receiverChannel',
    label: 'Contact point',
    renderCell: item => item.data.receiver || '-',
    size: 5
  }, {
    id: 'muteTimings',
    label: 'Mute timings',
    renderCell: item => item.data.muteTimeIntervals.join(', ') || '-',
    size: 5
  }, ...(!showActions ? [] : [{
    id: 'actions',
    label: 'Actions',
    // eslint-disable-next-line react/display-name
    renderCell: item => {
      if (item.renderExpandedContent) {
        return null;
      }

      const expandWithCustomContent = () => {
        expandItem(item);
        setEditMode(true);
      };

      return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(src.HorizontalGroup, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            "aria-label": "Edit route",
            icon: "pen",
            onClick: expandWithCustomContent,
            size: "sm",
            type: "button",
            variant: "secondary",
            children: "Edit"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.IconButton, {
            "aria-label": "Delete route",
            name: "trash-alt",
            onClick: () => {
              setDeletingRouteId(item.data.id);
            },
            type: "button"
          })]
        })
      });
    },
    size: '100px'
  }])];
  const filteredRoutes = (0,react.useMemo)(() => getFilteredRoutes(routes, filters === null || filters === void 0 ? void 0 : filters.queryString, filters === null || filters === void 0 ? void 0 : filters.contactPoint), [routes, filters]);
  const dynamicTableRoutes = (0,react.useMemo)(() => prepareItems(isAddMode ? routes : filteredRoutes), [isAddMode, routes, filteredRoutes]); // expand the last item when adding or reset when the length changed

  (0,react.useEffect)(() => {
    if (isAddMode && dynamicTableRoutes.length) {
      setExpandedId(dynamicTableRoutes[dynamicTableRoutes.length - 1].id);
    }

    if (!isAddMode && dynamicTableRoutes.length) {
      setExpandedId(undefined);
    }
  }, [isAddMode, dynamicTableRoutes]);

  if (routes.length > 0 && filteredRoutes.length === 0) {
    return _EmptyArea || (_EmptyArea = /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyArea, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: "No policies found"
      })
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DynamicTable/* DynamicTable */.t, {
      cols: cols,
      isExpandable: true,
      items: dynamicTableRoutes,
      testIdGenerator: () => 'am-routes-row',
      onCollapse: collapseItem,
      onExpand: expandItem,
      isExpanded: item => expandedId === item.id,
      renderExpandedContent: item => isAddMode || editMode ? /*#__PURE__*/(0,jsx_runtime.jsx)(AmRoutesExpandedForm, {
        onCancel: () => {
          if (isAddMode) {
            onCancelAdd();
          }

          setEditMode(false);
        },
        onSave: data => {
          const newRoutes = updatedRoute(routes, data);
          setEditMode(false);
          onChange(newRoutes);
        },
        receivers: receivers,
        routes: item.data
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(AmRoutesExpandedRead, {
        onChange: data => {
          const newRoutes = updatedRoute(routes, data);
          onChange(newRoutes);
        },
        receivers: receivers,
        routes: item.data,
        readOnly: readOnly,
        alertManagerSourceName: alertManagerSourceName
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.ConfirmModal, {
      isOpen: !!deletingRouteId,
      title: "Delete notification policy",
      body: "Deleting this notification policy will permanently remove it. Are you sure you want to delete this policy?",
      confirmText: "Yes, delete",
      icon: "exclamation-triangle",
      onConfirm: () => {
        if (deletingRouteId) {
          const newRoutes = deleteRoute(routes, deletingRouteId);
          onChange(newRoutes);
          setDeletingRouteId(undefined);
        }
      },
      onDismiss: () => setDeletingRouteId(undefined)
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/amroutes/AmSpecificRouting.tsx
var AmSpecificRouting_h, AmSpecificRouting_p, AmSpecificRouting_EmptyArea, _Label, _Icon, _EmptyArea2;


















const AmSpecificRouting = _ref => {
  var _filters$queryString, _filters$contactPoint;

  let {
    alertManagerSourceName,
    onChange,
    onRootRouteEdit,
    receivers,
    routes,
    readOnly = false
  } = _ref;
  const [actualRoutes, setActualRoutes] = (0,react.useState)([...routes.routes]);
  const [isAddMode, setIsAddMode] = (0,react.useState)(false);
  const permissions = (0,access_control/* getNotificationsPermissions */.Ko)(alertManagerSourceName);
  const canCreateNotifications = context_srv/* contextSrv.hasPermission */.Vt.hasPermission(permissions.create);
  const [searchParams, setSearchParams] = (0,useURLSearchParams/* useURLSearchParams */.j)();
  const {
    queryString,
    contactPoint
  } = (0,misc/* getNotificationPoliciesFilters */.$f)(searchParams);
  const [filters, setFilters] = (0,react.useState)({
    queryString,
    contactPoint
  });
  (0,useDebounce/* default */.Z)(() => {
    setSearchParams({
      queryString: filters.queryString,
      contactPoint: filters.contactPoint
    });
  }, 400, [filters]);
  const styles = (0,src.useStyles2)(AmSpecificRouting_getStyles);

  const clearFilters = () => {
    setFilters({
      queryString: undefined,
      contactPoint: undefined
    });
    setSearchParams({
      queryString: undefined,
      contactPoint: undefined
    });
  };

  const addNewRoute = () => {
    clearFilters();
    setIsAddMode(true);
    setActualRoutes(() => [...routes.routes, Object.assign({}, emptyRoute, {
      matchers: [emptyArrayFieldMatcher]
    })]);
  };

  const onCancelAdd = () => {
    setIsAddMode(false);
    setActualRoutes([...routes.routes]);
  };

  const onTableRouteChange = newRoutes => {
    onChange(Object.assign({}, routes, {
      routes: newRoutes
    }));

    if (isAddMode) {
      setIsAddMode(false);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.container,
    children: [AmSpecificRouting_h || (AmSpecificRouting_h = /*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
      children: "Specific routing"
    })), AmSpecificRouting_p || (AmSpecificRouting_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      children: "Send specific alerts to chosen contact points, based on matching criteria"
    })), !routes.receiver ? readOnly ? AmSpecificRouting_EmptyArea || (AmSpecificRouting_EmptyArea = /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyArea, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: "There is no default contact point configured for the root route."
      })
    })) : /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyAreaWithCTA, {
      buttonIcon: "rocket",
      buttonLabel: "Set a default contact point",
      onButtonClick: onRootRouteEdit,
      text: "You haven't set a default contact point for the root route yet.",
      showButton: canCreateNotifications
    }) : actualRoutes.length > 0 ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [!isAddMode && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.searchContainer,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(MatcherFilter/* MatcherFilter */.F, {
            onFilterChange: filter => setFilters(currentFilters => Object.assign({}, currentFilters, {
              queryString: filter
            })),
            queryString: (_filters$queryString = filters.queryString) !== null && _filters$queryString !== void 0 ? _filters$queryString : '',
            className: styles.filterInput
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: styles.filterInput,
            children: [_Label || (_Label = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Label, {
              children: "Search by contact point"
            })), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, {
              onChange: _ref2 => {
                let {
                  currentTarget
                } = _ref2;
                return setFilters(currentFilters => Object.assign({}, currentFilters, {
                  contactPoint: currentTarget.value
                }));
              },
              value: (_filters$contactPoint = filters.contactPoint) !== null && _filters$contactPoint !== void 0 ? _filters$contactPoint : '',
              placeholder: "Search by contact point",
              "data-testid": "search-query-input",
              prefix: _Icon || (_Icon = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Icon, {
                name: 'search'
              }))
            })]
          }), (queryString || contactPoint) && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            variant: "secondary",
            icon: "times",
            onClick: clearFilters,
            className: styles.clearFilterBtn,
            children: "Clear filters"
          })]
        }), !isAddMode && !readOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
          actions: [permissions.create],
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.addMatcherBtnRow,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
              className: styles.addMatcherBtn,
              icon: "plus",
              onClick: addNewRoute,
              type: "button",
              children: "New policy"
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(AmRoutesTable, {
        isAddMode: isAddMode,
        readOnly: readOnly,
        onCancelAdd: onCancelAdd,
        onChange: onTableRouteChange,
        receivers: receivers,
        routes: actualRoutes,
        filters: {
          queryString,
          contactPoint
        },
        alertManagerSourceName: alertManagerSourceName
      })]
    }) : readOnly ? _EmptyArea2 || (_EmptyArea2 = /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyArea, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: "There are no specific policies configured."
      })
    })) : /*#__PURE__*/(0,jsx_runtime.jsx)(EmptyAreaWithCTA, {
      buttonIcon: "plus",
      buttonLabel: "New specific policy",
      onButtonClick: addNewRoute,
      text: "You haven't created any specific policies yet.",
      showButton: canCreateNotifications
    })]
  });
};

const AmSpecificRouting_getStyles = theme => {
  return {
    container: emotion_css_esm.css`
      display: flex;
      flex-flow: column wrap;
    `,
    searchContainer: emotion_css_esm.css`
      display: flex;
      flex-flow: row nowrap;
      padding-bottom: ${theme.spacing(2)};
      border-bottom: 1px solid ${theme.colors.border.strong};
    `,
    clearFilterBtn: emotion_css_esm.css`
      align-self: flex-end;
      margin-left: ${theme.spacing(1)};
    `,
    filterInput: emotion_css_esm.css`
      width: 340px;
      & + & {
        margin-left: ${theme.spacing(1)};
      }
    `,
    addMatcherBtnRow: emotion_css_esm.css`
      display: flex;
      flex-flow: column nowrap;
      padding: ${theme.spacing(2)} 0;
    `,
    addMatcherBtn: emotion_css_esm.css`
      align-self: flex-end;
    `
  };
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/AmRoutes.tsx
var _LoadingPlaceholder;























const AmRoutes = () => {
  var _config$receivers;

  const dispatch = (0,es.useDispatch)();
  const styles = (0,src.useStyles2)(AmRoutes_getStyles);
  const [isRootRouteEditMode, setIsRootRouteEditMode] = (0,react.useState)(false);
  const alertManagers = (0,useAlertManagerSources/* useAlertManagersByPermission */.k)('notification');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,useAlertManagerSourceName/* useAlertManagerSourceName */.k)(alertManagers);
  const readOnly = alertManagerSourceName ? (0,datasource/* isVanillaPrometheusAlertManagerDataSource */.RY)(alertManagerSourceName) : true;
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
    loading: resultLoading,
    error: resultError
  } = alertManagerSourceName && amConfigs[alertManagerSourceName] || redux/* initialAsyncRequestState */.oq;
  const config = result === null || result === void 0 ? void 0 : result.alertmanager_config;
  const [rootRoute, id2ExistingRoute] = (0,react.useMemo)(() => amRouteToFormAmRoute(config === null || config === void 0 ? void 0 : config.route), [config === null || config === void 0 ? void 0 : config.route]);
  const receivers = stringsToSelectableValues(((_config$receivers = config === null || config === void 0 ? void 0 : config.receivers) !== null && _config$receivers !== void 0 ? _config$receivers : []).map(receiver => receiver.name));

  const enterRootRouteEditMode = () => {
    setIsRootRouteEditMode(true);
  };

  const exitRootRouteEditMode = () => {
    setIsRootRouteEditMode(false);
  };

  (0,useCleanup/* useCleanup */.x)(state => state.unifiedAlerting.saveAMConfig);

  const handleSave = data => {
    if (!result) {
      return;
    }

    const newData = formAmRouteToAmRoute(alertManagerSourceName, Object.assign({}, rootRoute, data), id2ExistingRoute);

    if (isRootRouteEditMode) {
      exitRootRouteEditMode();
    }

    dispatch((0,actions/* updateAlertManagerConfigAction */.mM)({
      newConfig: Object.assign({}, result, {
        alertmanager_config: Object.assign({}, result.alertmanager_config, {
          route: newData
        })
      }),
      oldConfig: result,
      alertManagerSourceName: alertManagerSourceName,
      successMessage: 'Saved',
      refetch: true
    }));
  };

  if (!alertManagerSourceName) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(AlertingPageWrapper/* AlertingPageWrapper */.J, {
      pageId: "am-routes",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(NoAlertManagerWarning/* NoAlertManagerWarning */.I, {
        availableAlertManagers: alertManagers
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(AlertingPageWrapper/* AlertingPageWrapper */.J, {
    pageId: "am-routes",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AlertManagerPicker/* AlertManagerPicker */.P, {
      current: alertManagerSourceName,
      onChange: setAlertManagerSourceName,
      dataSources: alertManagers
    }), resultError && !resultLoading && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Alert, {
      severity: "error",
      title: "Error loading Alertmanager config",
      children: resultError.message || 'Unknown error.'
    }), resultLoading && (_LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
      text: "Loading Alertmanager config..."
    }))), result && !resultLoading && !resultError && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AmRootRoute, {
        alertManagerSourceName: alertManagerSourceName,
        isEditMode: isRootRouteEditMode,
        onSave: handleSave,
        onEnterEditMode: enterRootRouteEditMode,
        onExitEditMode: exitRootRouteEditMode,
        receivers: receivers,
        routes: rootRoute
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.break
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(AmSpecificRouting, {
        alertManagerSourceName: alertManagerSourceName,
        onChange: handleSave,
        readOnly: readOnly,
        onRootRouteEdit: enterRootRouteEditMode,
        receivers: receivers,
        routes: rootRoute
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: styles.break
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(MuteTimingsTable, {
        alertManagerSourceName: alertManagerSourceName
      })]
    })]
  });
};

/* harmony default export */ const unified_AmRoutes = ((0,src.withErrorBoundary)(AmRoutes, {
  style: 'page'
}));

const AmRoutes_getStyles = theme => ({
  break: emotion_css_esm.css`
    width: 100%;
    height: 0;
    margin-bottom: ${theme.spacing(2)};
  `
});

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

/***/ "./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ MatcherFilter)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_experimental__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/@grafana-experimental-virtual-22e4fdfd25/0/cache/@grafana-experimental-npm-0.0.2-canary.30-71a280d204-b5b453b937.zip/node_modules/@grafana/experimental/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
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

  const searchIcon = _Icon || (_Icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    name: 'search'
  }));

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_grafana_experimental__WEBPACK_IMPORTED_MODULE_2__.Stack, {
        gap: 0.5,
        children: [_span || (_span = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          children: "Search by label"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
          content: _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: ["Filter alerts using label querying, ex:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", {
              children: `{severity="critical", instance=~"cluster-us-.+"}`
            })]
          })),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, {
            className: styles.icon,
            name: "info-circle",
            size: "sm"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, {
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

/***/ })

}]);