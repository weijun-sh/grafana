"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["EditNotificationChannel"],{

/***/ "./public/app/core/components/connectWithCleanUp.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectWithCleanUp": () => (/* binding */ connectWithCleanUp)
/* harmony export */ });
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_cleanUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/actions/cleanUp.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const connectWithCleanUp = (mapStateToProps, mapDispatchToProps, stateSelector) => Component => {
  const ConnectedComponent = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps // @ts-ignore
  )(Component);

  const ConnectedComponentWithCleanUp = props => {
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      return function cleanUp() {
        dispatch((0,_actions_cleanUp__WEBPACK_IMPORTED_MODULE_3__.cleanUpAction)({
          stateSelector
        }));
      };
    }, [dispatch]); // @ts-ignore

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ConnectedComponent, Object.assign({}, props));
  };

  ConnectedComponentWithCleanUp.displayName = `ConnectWithCleanUp(${ConnectedComponent.displayName})`;
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(ConnectedComponentWithCleanUp, Component);
  return ConnectedComponentWithCleanUp;
};

/***/ }),

/***/ "./public/app/features/alerting/EditNotificationChannelPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditNotificationChannelPage": () => (/* binding */ EditNotificationChannelPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_connectWithCleanUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/connectWithCleanUp.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _components_NotificationChannelForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/components/NotificationChannelForm.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");
/* harmony import */ var _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/utils/notificationChannels.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h, _div;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class EditNotificationChannelPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onSubmit", formData => {
      const {
        notificationChannel
      } = this.props;
      this.props.updateNotificationChannel(Object.assign({}, (0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.transformSubmitData)(Object.assign({}, notificationChannel, formData, {
        settings: Object.assign({}, notificationChannel.settings, formData.settings)
      })), {
        id: notificationChannel.id
      }));
    });

    _defineProperty(this, "onTestChannel", formData => {
      const {
        notificationChannel
      } = this.props;
      /*
        Same as submit
       */

      this.props.testNotificationChannel((0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.transformTestData)(Object.assign({}, notificationChannel, formData, {
        settings: Object.assign({}, notificationChannel.settings, formData.settings)
      })));
    });
  }

  componentDidMount() {
    this.props.loadNotificationChannel(parseInt(this.props.match.params.id, 10));
  }

  render() {
    const {
      navModel,
      notificationChannel,
      notificationChannelTypes
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_3__["default"].Contents, {
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h2", {
          className: "page-sub-heading",
          children: "Edit notification channel"
        })), notificationChannel && notificationChannel.id > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Form, {
          maxWidth: 600,
          onSubmit: this.onSubmit,
          defaultValues: Object.assign({}, notificationChannel, {
            type: notificationChannelTypes.find(n => n.value === notificationChannel.type)
          }),
          children: ({
            control,
            errors,
            getValues,
            register,
            watch
          }) => {
            const selectedChannel = notificationChannelTypes.find(c => c.value === getValues().type.value);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_NotificationChannelForm__WEBPACK_IMPORTED_MODULE_6__.NotificationChannelForm, {
              selectableChannels: (0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.mapChannelsToSelectableValue)(notificationChannelTypes, true),
              selectedChannel: selectedChannel,
              imageRendererAvailable: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.rendererAvailable,
              onTestChannel: this.onTestChannel,
              register: register,
              watch: watch,
              errors: errors,
              getValues: getValues,
              control: control,
              resetSecureField: this.props.resetSecureField,
              secureFields: notificationChannel.secureFields
            });
          }
        }) : _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: ["Loading notification channel", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Spinner, {})]
        }))]
      })
    });
  }

}

const mapStateToProps = state => {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'channels'),
    notificationChannel: state.notificationChannel.notificationChannel,
    notificationChannelTypes: state.notificationChannel.notificationChannelTypes
  };
};

const mapDispatchToProps = {
  loadNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_7__.loadNotificationChannel,
  testNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_7__.testNotificationChannel,
  updateNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_7__.updateNotificationChannel,
  resetSecureField: _state_reducers__WEBPACK_IMPORTED_MODULE_8__.resetSecureField
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,app_core_components_connectWithCleanUp__WEBPACK_IMPORTED_MODULE_4__.connectWithCleanUp)(mapStateToProps, mapDispatchToProps, state => state.notificationChannel)(EditNotificationChannelPage));

/***/ }),

/***/ "./public/app/features/alerting/components/BasicSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicSettings": () => (/* binding */ BasicSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _NotificationChannelOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/components/NotificationChannelOptions.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const BasicSettings = ({
  control,
  currentFormValues,
  errors,
  secureFields,
  selectedChannel,
  channels,
  register,
  resetSecureField
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      label: "Name",
      invalid: !!errors.name,
      error: errors.name && errors.name.message,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register('name', {
        required: 'Name is required'
      })))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      label: "Type",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
        name: "type",
        render: _ref => {
          let {} = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, Object.assign({}, field, {
            options: channels
          }));
        },
        control: control,
        rules: {
          required: true
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_NotificationChannelOptions__WEBPACK_IMPORTED_MODULE_2__.NotificationChannelOptions, {
      selectedChannelOptions: selectedChannel.options.filter(o => o.required),
      currentFormValues: currentFormValues,
      secureFields: secureFields,
      onResetSecureField: resetSecureField,
      register: register,
      errors: errors,
      control: control
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/components/ChannelSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChannelSettings": () => (/* binding */ ChannelSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _NotificationChannelOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/components/NotificationChannelOptions.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const ChannelSettings = ({
  control,
  currentFormValues,
  errors,
  selectedChannel,
  secureFields,
  register,
  resetSecureField
}) => {
  var _selectedChannel$info;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CollapsableSection, {
    label: `Optional ${selectedChannel.heading}`,
    isOpen: false,
    children: [selectedChannel.info !== '' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      severity: "info",
      title: (_selectedChannel$info = selectedChannel.info) !== null && _selectedChannel$info !== void 0 ? _selectedChannel$info : ''
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_NotificationChannelOptions__WEBPACK_IMPORTED_MODULE_2__.NotificationChannelOptions, {
      selectedChannelOptions: selectedChannel.options.filter(o => !o.required),
      currentFormValues: currentFormValues,
      register: register,
      errors: errors,
      control: control,
      onResetSecureField: resetSecureField,
      secureFields: secureFields
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/components/NotificationChannelForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationChannelForm": () => (/* binding */ NotificationChannelForm)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _BasicSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/components/BasicSettings.tsx");
/* harmony import */ var _ChannelSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/components/ChannelSettings.tsx");
/* harmony import */ var _NotificationSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/components/NotificationSettings.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Spinner, _Button, _Button2;










const NotificationChannelForm = ({
  control,
  errors,
  selectedChannel,
  selectableChannels,
  register,
  watch,
  getValues,
  imageRendererAvailable,
  onTestChannel,
  resetSecureField,
  secureFields
}) => {
  const styles = getStyles((0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useTheme)());
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    /*
      Find fields that have dependencies on other fields and removes duplicates.
      Needs to be prefixed with settings.
    */
    const fieldsToWatch = new Set(selectedChannel === null || selectedChannel === void 0 ? void 0 : selectedChannel.options.filter(o => o.showWhen.field).map(option => {
      return `settings.${option.showWhen.field}`;
    })) || [];
    watch(['type', 'sendReminder', 'uploadImage', ...fieldsToWatch]);
  }, [selectedChannel === null || selectedChannel === void 0 ? void 0 : selectedChannel.options, watch]);
  const currentFormValues = getValues();

  if (!selectedChannel) {
    return _Spinner || (_Spinner = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Spinner, {}));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: styles.formContainer,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.formItem,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_BasicSettings__WEBPACK_IMPORTED_MODULE_4__.BasicSettings, {
        selectedChannel: selectedChannel,
        channels: selectableChannels,
        secureFields: secureFields,
        resetSecureField: resetSecureField,
        currentFormValues: currentFormValues,
        register: register,
        errors: errors,
        control: control
      })
    }), selectedChannel.options.filter(o => !o.required).length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.formItem,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ChannelSettings__WEBPACK_IMPORTED_MODULE_5__.ChannelSettings, {
        selectedChannel: selectedChannel,
        secureFields: secureFields,
        resetSecureField: resetSecureField,
        currentFormValues: currentFormValues,
        register: register,
        errors: errors,
        control: control
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.formItem,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_NotificationSettings__WEBPACK_IMPORTED_MODULE_6__.NotificationSettings, {
        imageRendererAvailable: imageRendererAvailable,
        currentFormValues: currentFormValues,
        register: register,
        errors: errors,
        control: control
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: styles.formButtons,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
        children: [_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          type: "submit",
          children: "Save"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
          type: "button",
          variant: "secondary",
          onClick: () => onTestChannel(getValues()),
          children: "Test"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
          href: `${app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].appSubUrl}/alerting/notifications`,
          children: _Button2 || (_Button2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
            type: "button",
            variant: "secondary",
            children: "Back"
          }))
        })]
      })
    })]
  });
};
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.stylesFactory)(theme => {
  return {
    formContainer: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css``,
    formItem: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 1;
      padding-top: ${theme.spacing.md};
    `,
    formButtons: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      padding-top: ${theme.spacing.xl};
    `
  };
});

/***/ }),

/***/ "./public/app/features/alerting/components/NotificationChannelOptions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationChannelOptions": () => (/* binding */ NotificationChannelOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var _OptionElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/components/OptionElement.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");





const NotificationChannelOptions = ({
  control,
  currentFormValues,
  errors,
  selectedChannelOptions,
  register,
  onResetSecureField,
  secureFields
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: selectedChannelOptions.map((option, index) => {
      var _errors$settings$opti;

      const key = `${option.label}-${index}`; // Some options can be dependent on other options, this determines what is selected in the dependency options
      // I think this needs more thought.

      const selectedOptionValue = currentFormValues[`settings.${option.showWhen.field}`] && currentFormValues[`settings.${option.showWhen.field}`].value;

      if (option.showWhen.field && selectedOptionValue !== option.showWhen.is) {
        return null;
      }

      if (option.element === 'checkbox') {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({}, register(option.secure ? `secureSettings.${option.propertyName}` : `settings.${option.propertyName}`), {
            label: option.label,
            description: option.description
          }))
        }, key);
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: option.label,
        description: option.description,
        invalid: errors.settings && !!errors.settings[option.propertyName],
        error: errors.settings && ((_errors$settings$opti = errors.settings[option.propertyName]) === null || _errors$settings$opti === void 0 ? void 0 : _errors$settings$opti.message),
        children: secureFields && secureFields[option.propertyName] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
          readOnly: true,
          value: "Configured",
          suffix: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
            onClick: () => onResetSecureField(option.propertyName),
            fill: "text",
            type: "button",
            size: "sm",
            children: "Clear"
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_OptionElement__WEBPACK_IMPORTED_MODULE_2__.OptionElement, {
          option: option,
          register: register,
          control: control
        })
      }, key);
    })
  });
};

/***/ }),

/***/ "./public/app/features/alerting/components/NotificationSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSettings": () => (/* binding */ NotificationSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _InfoBox;






const NotificationSettings = ({
  currentFormValues,
  imageRendererAvailable,
  register
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.CollapsableSection, {
    label: "Notification settings",
    isOpen: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({}, register('isDefault'), {
        label: "Default",
        description: "Use this notification for all alerts"
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({}, register('settings.uploadImage'), {
        label: "Include image",
        description: "Captures an image and include it in the notification"
      }))
    }), currentFormValues.uploadImage && !imageRendererAvailable && (_InfoBox || (_InfoBox = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InfoBox, {
      title: "No image renderer available/installed",
      children: "Grafana cannot find an image renderer to capture an image for the notification. Please make sure the Grafana Image Renderer plugin is installed. Please contact your Grafana administrator to install the plugin."
    }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({}, register('disableResolveMessage'), {
        label: "Disable Resolve Message",
        description: "Disable the resolve message [OK] that is sent when alerting state returns to false"
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, Object.assign({}, register('sendReminder'), {
        label: "Send reminders",
        description: "Send additional notifications for triggered alerts"
      }))
    }), currentFormValues.sendReminder && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Field, {
        label: "Send reminder every",
        description: "Specify how often reminders should be sent, e.g. every 30s, 1m, 10m, 30m', or 1h etc. Alert reminders are sent after rules are evaluated. A reminder can never be sent more frequently than a configured alert rule evaluation interval.",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register('frequency'), {
          width: 8
        }))
      })
    })]
  });
};

/***/ }),

/***/ "./public/app/features/alerting/components/OptionElement.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionElement": () => (/* binding */ OptionElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
const _excluded = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const OptionElement = ({
  control,
  option,
  register,
  invalid
}) => {
  const modelValue = option.secure ? `secureSettings.${option.propertyName}` : `settings.${option.propertyName}`;

  switch (option.element) {
    case 'input':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, Object.assign({}, register(`${modelValue}`, {
        required: option.required ? 'Required' : false,
        validate: v => option.validationRule !== '' ? validateOption(v, option.validationRule) : true
      }), {
        invalid: invalid,
        type: option.inputType,
        placeholder: option.placeholder
      }));

    case 'select':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InputControl, {
        control: control,
        name: `${modelValue}`,
        render: _ref => {
          var _option$selectOptions;

          let {} = _ref,
              field = _objectWithoutPropertiesLoose(_ref.field, _excluded);

          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, Object.assign({}, field, {
            options: (_option$selectOptions = option.selectOptions) !== null && _option$selectOptions !== void 0 ? _option$selectOptions : undefined,
            invalid: invalid
          }));
        }
      });

    case 'textarea':
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextArea, Object.assign({
        invalid: invalid
      }, register(`${modelValue}`, {
        required: option.required ? 'Required' : false,
        validate: v => option.validationRule !== '' ? validateOption(v, option.validationRule) : true
      })));

    default:
      console.error('Element not supported', option.element);
      return null;
  }
};

const validateOption = (value, validationRule) => {
  return RegExp(validationRule).test(value) ? true : 'Invalid format';
};

/***/ }),

/***/ "./public/app/features/alerting/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNotificationChannel": () => (/* binding */ createNotificationChannel),
/* harmony export */   "getAlertRulesAsync": () => (/* binding */ getAlertRulesAsync),
/* harmony export */   "loadNotificationChannel": () => (/* binding */ loadNotificationChannel),
/* harmony export */   "loadNotificationTypes": () => (/* binding */ loadNotificationTypes),
/* harmony export */   "testNotificationChannel": () => (/* binding */ testNotificationChannel),
/* harmony export */   "togglePauseAlertRule": () => (/* binding */ togglePauseAlertRule),
/* harmony export */   "updateNotificationChannel": () => (/* binding */ updateNotificationChannel)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");




function getAlertRulesAsync(options) {
  return async dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.loadAlertRules)());
    const rules = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/alerts', options);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.loadedAlertRules)(rules));
  };
}
function togglePauseAlertRule(id, options) {
  return async dispatch => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/alerts/${id}/pause`, options);
    const stateFilter = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.getSearchObject().state || 'all';
    dispatch(getAlertRulesAsync({
      state: stateFilter.toString()
    }));
  };
}
function createNotificationChannel(data) {
  return async dispatch => {
    try {
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`/api/alert-notifications`, data);
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createSuccessNotification)('Notification created')));
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.push('/alerting/notifications');
    } catch (error) {
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createErrorNotification)(error.data.error)));
    }
  };
}
function updateNotificationChannel(data) {
  return async dispatch => {
    try {
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/alert-notifications/${data.id}`, data);
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createSuccessNotification)('Notification updated')));
    } catch (error) {
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__.notifyApp)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.createErrorNotification)(error.data.error)));
    }
  };
}
function testNotificationChannel(data) {
  return async (dispatch, getState) => {
    const channel = getState().notificationChannel.notificationChannel;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post('/api/alert-notifications/test', Object.assign({
      id: channel.id
    }, data));
  };
}
function loadNotificationTypes() {
  return async dispatch => {
    const alertNotifiers = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/alert-notifiers`);
    const notificationTypes = alertNotifiers.sort((o1, o2) => {
      if (o1.name > o2.name) {
        return 1;
      }

      return -1;
    });
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.setNotificationChannels)(notificationTypes));
  };
}
function loadNotificationChannel(id) {
  return async dispatch => {
    await dispatch(loadNotificationTypes());
    const notificationChannel = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/alert-notifications/${id}`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.notificationChannelLoaded)(notificationChannel));
  };
}

/***/ }),

/***/ "./public/app/features/alerting/utils/notificationChannels.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultValues": () => (/* binding */ defaultValues),
/* harmony export */   "mapChannelsToSelectableValue": () => (/* binding */ mapChannelsToSelectableValue),
/* harmony export */   "transformSubmitData": () => (/* binding */ transformSubmitData),
/* harmony export */   "transformTestData": () => (/* binding */ transformTestData)
/* harmony export */ });
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");


const defaultValues = {
  id: -1,
  name: '',
  type: {
    value: 'email',
    label: 'Email'
  },
  sendReminder: false,
  disableResolveMessage: false,
  frequency: '15m',
  settings: {
    uploadImage: _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.rendererAvailable,
    autoResolve: true,
    httpMethod: 'POST',
    severity: 'critical'
  },
  secureSettings: {},
  secureFields: {},
  isDefault: false
};
const mapChannelsToSelectableValue = (0,memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])((notificationChannels, includeDescription) => {
  return notificationChannels.map(channel => {
    if (includeDescription) {
      return {
        value: channel.value,
        label: channel.label,
        description: channel.description
      };
    }

    return {
      value: channel.value,
      label: channel.label
    };
  });
});
const transformSubmitData = formData => {
  /*
    Some settings can be options in a select, in order to not save a SelectableValue<T>
    we need to use check if it is a SelectableValue and use its value.
  */
  const settings = Object.fromEntries(Object.entries(formData.settings).map(([key, value]) => {
    return [key, value && value.hasOwnProperty('value') ? value.value : value];
  }));
  return Object.assign({}, defaultValues, formData, {
    frequency: formData.frequency === '' ? defaultValues.frequency : formData.frequency,
    type: formData.type.value,
    settings: Object.assign({}, defaultValues.settings, settings),
    secureSettings: Object.assign({}, formData.secureSettings)
  });
};
const transformTestData = formData => {
  var _formData$frequency;

  return {
    name: formData.name,
    type: formData.type.value,
    frequency: (_formData$frequency = formData.frequency) !== null && _formData$frequency !== void 0 ? _formData$frequency : defaultValues.frequency,
    settings: Object.assign({}, Object.assign(defaultValues.settings, formData.settings)),
    secureSettings: Object.assign({}, formData.secureSettings)
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdE5vdGlmaWNhdGlvbkNoYW5uZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVPLE1BQU1NLGtCQUFrQixHQUM3QixDQVFFQyxlQVJGLEVBU0VDLGtCQVRGLEVBVUVDLGFBVkYsS0FZQ0MsU0FBRCxJQUFtQztBQUNqQyxRQUFNQyxrQkFBa0IsR0FBR1Isb0RBQU8sQ0FDaENJLGVBRGdDLEVBRWhDQyxrQkFGZ0MsQ0FHaEM7QUFIZ0MsR0FBUCxDQUl6QkUsU0FKeUIsQ0FBM0I7O0FBTUEsUUFBTUUsNkJBQWdELEdBQUlDLEtBQUQsSUFBVztBQUNsRSxVQUFNQyxRQUFRLEdBQUdWLHdEQUFXLEVBQTVCO0FBQ0FGLElBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLGFBQU8sU0FBU2EsT0FBVCxHQUFtQjtBQUN4QkQsUUFBQUEsUUFBUSxDQUFDVCwrREFBYSxDQUFDO0FBQUVJLFVBQUFBO0FBQUYsU0FBRCxDQUFkLENBQVI7QUFDRCxPQUZEO0FBR0QsS0FKUSxFQUlOLENBQUNLLFFBQUQsQ0FKTSxDQUFULENBRmtFLENBT2xFOztBQUNBLHdCQUFPLHVEQUFDLGtCQUFELG9CQUF3QkQsS0FBeEIsRUFBUDtBQUNELEdBVEQ7O0FBV0FELEVBQUFBLDZCQUE2QixDQUFDSSxXQUE5QixHQUE2QyxzQkFBcUJMLGtCQUFrQixDQUFDSyxXQUFZLEdBQWpHO0FBQ0FoQixFQUFBQSw4REFBb0IsQ0FBQ1ksNkJBQUQsRUFBZ0NGLFNBQWhDLENBQXBCO0FBR0EsU0FBT0UsNkJBQVA7QUFDRCxDQXBDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlA7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQW1CTyxNQUFNbUIsMkJBQU4sU0FBMENkLGdEQUExQyxDQUErRDtBQUFBO0FBQUE7O0FBQUEsc0NBS3hEZSxRQUFELElBQXNDO0FBQy9DLFlBQU07QUFBRUMsUUFBQUE7QUFBRixVQUEwQixLQUFLcEIsS0FBckM7QUFFQSxXQUFLQSxLQUFMLENBQVdhLHlCQUFYLG1CQU1LRyxnRkFBbUIsbUJBQ2pCSSxtQkFEaUIsRUFFakJELFFBRmlCO0FBR3BCRSxRQUFBQSxRQUFRLG9CQUFPRCxtQkFBbUIsQ0FBQ0MsUUFBM0IsRUFBd0NGLFFBQVEsQ0FBQ0UsUUFBakQ7QUFIWSxTQU54QjtBQVdFQyxRQUFBQSxFQUFFLEVBQUVGLG1CQUFtQixDQUFDRTtBQVgxQjtBQWFELEtBckJtRTs7QUFBQSwyQ0F1Qm5ESCxRQUFELElBQXNDO0FBQ3BELFlBQU07QUFBRUMsUUFBQUE7QUFBRixVQUEwQixLQUFLcEIsS0FBckM7QUFDQTtBQUNKO0FBQ0E7O0FBQ0ksV0FBS0EsS0FBTCxDQUFXWSx1QkFBWCxDQUNFSyw4RUFBaUIsbUJBQ1pHLG1CQURZLEVBRVpELFFBRlk7QUFHZkUsUUFBQUEsUUFBUSxvQkFBT0QsbUJBQW1CLENBQUNDLFFBQTNCLEVBQXdDRixRQUFRLENBQUNFLFFBQWpEO0FBSE8sU0FEbkI7QUFPRCxLQW5DbUU7QUFBQTs7QUFDcEVFLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCLFNBQUt2QixLQUFMLENBQVdXLHVCQUFYLENBQW1DYSxRQUFRLENBQUMsS0FBS3hCLEtBQUwsQ0FBV3lCLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCSixFQUF6QixFQUE2QixFQUE3QixDQUEzQztBQUNEOztBQWtDREssRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFQyxNQUFBQSxRQUFGO0FBQVlSLE1BQUFBLG1CQUFaO0FBQWlDUyxNQUFBQTtBQUFqQyxRQUE4RCxLQUFLN0IsS0FBekU7QUFFQSx3QkFDRSx3REFBQyxxRUFBRDtBQUFNLGNBQVEsRUFBRTRCLFFBQWhCO0FBQUEsNkJBQ0UseURBQUMsOEVBQUQ7QUFBQSw0Q0FDRTtBQUFJLG1CQUFTLEVBQUMsa0JBQWQ7QUFBQTtBQUFBLFVBREYsR0FFR1IsbUJBQW1CLElBQUlBLG1CQUFtQixDQUFDRSxFQUFwQixHQUF5QixDQUFoRCxnQkFDQyx3REFBQyw2Q0FBRDtBQUNFLGtCQUFRLEVBQUUsR0FEWjtBQUVFLGtCQUFRLEVBQUUsS0FBS1EsUUFGakI7QUFHRSx1QkFBYSxvQkFDUlYsbUJBRFE7QUFFWFcsWUFBQUEsSUFBSSxFQUFFRix3QkFBd0IsQ0FBQ0csSUFBekIsQ0FBK0JDLENBQUQsSUFBT0EsQ0FBQyxDQUFDQyxLQUFGLEtBQVlkLG1CQUFtQixDQUFDVyxJQUFyRTtBQUZLLFlBSGY7QUFBQSxvQkFRRyxDQUFDO0FBQUVJLFlBQUFBLE9BQUY7QUFBV0MsWUFBQUEsTUFBWDtBQUFtQkMsWUFBQUEsU0FBbkI7QUFBOEJDLFlBQUFBLFFBQTlCO0FBQXdDQyxZQUFBQTtBQUF4QyxXQUFELEtBQXFEO0FBQ3BELGtCQUFNQyxlQUFlLEdBQUdYLHdCQUF3QixDQUFDRyxJQUF6QixDQUErQlMsQ0FBRCxJQUFPQSxDQUFDLENBQUNQLEtBQUYsS0FBWUcsU0FBUyxHQUFHTixJQUFaLENBQWlCRyxLQUFsRSxDQUF4QjtBQUVBLGdDQUNFLHdEQUFDLHdGQUFEO0FBQ0UsZ0NBQWtCLEVBQUVuQix5RkFBNEIsQ0FBQ2Msd0JBQUQsRUFBMkIsSUFBM0IsQ0FEbEQ7QUFFRSw2QkFBZSxFQUFFVyxlQUZuQjtBQUdFLG9DQUFzQixFQUFFbkMsc0VBSDFCO0FBSUUsMkJBQWEsRUFBRSxLQUFLc0MsYUFKdEI7QUFLRSxzQkFBUSxFQUFFTCxRQUxaO0FBTUUsbUJBQUssRUFBRUMsS0FOVDtBQU9FLG9CQUFNLEVBQUVILE1BUFY7QUFRRSx1QkFBUyxFQUFFQyxTQVJiO0FBU0UscUJBQU8sRUFBRUYsT0FUWDtBQVVFLDhCQUFnQixFQUFFLEtBQUtuQyxLQUFMLENBQVdjLGdCQVYvQjtBQVdFLDBCQUFZLEVBQUVNLG1CQUFtQixDQUFDd0I7QUFYcEMsY0FERjtBQWVEO0FBMUJILFVBREQsZ0NBOEJDO0FBQUEsa0VBRUUsd0RBQUMsZ0RBQUQsS0FGRjtBQUFBLFVBOUJELENBRkg7QUFBQTtBQURGLE1BREY7QUEwQ0Q7O0FBbEZtRTs7QUFxRnRFLE1BQU1sRCxlQUFzRSxHQUFJbUQsS0FBRCxJQUFXO0FBQ3hGLFNBQU87QUFDTGpCLElBQUFBLFFBQVEsRUFBRW5CLHdFQUFXLENBQUNvQyxLQUFLLENBQUNDLFFBQVAsRUFBaUIsVUFBakIsQ0FEaEI7QUFFTDFCLElBQUFBLG1CQUFtQixFQUFFeUIsS0FBSyxDQUFDekIsbUJBQU4sQ0FBMEJBLG1CQUYxQztBQUdMUyxJQUFBQSx3QkFBd0IsRUFBRWdCLEtBQUssQ0FBQ3pCLG1CQUFOLENBQTBCUztBQUgvQyxHQUFQO0FBS0QsQ0FORDs7QUFRQSxNQUFNbEMsa0JBQStELEdBQUc7QUFDdEVnQixFQUFBQSx1QkFEc0U7QUFFdEVDLEVBQUFBLHVCQUZzRTtBQUd0RUMsRUFBQUEseUJBSHNFO0FBSXRFQyxFQUFBQSxnQkFBZ0JBLCtEQUFBQTtBQUpzRCxDQUF4RTtBQU9BLGlFQUFlckIsMEZBQWtCLENBQy9CQyxlQUQrQixFQUUvQkMsa0JBRitCLEVBRzlCa0QsS0FBRCxJQUFXQSxLQUFLLENBQUN6QixtQkFIYyxDQUFsQixDQUliRiwyQkFKYSxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdElBO0FBR0E7QUFLQTs7OztBQVNPLE1BQU1rQyxhQUF3QixHQUFHLENBQUM7QUFDdkNqQixFQUFBQSxPQUR1QztBQUV2Q2tCLEVBQUFBLGlCQUZ1QztBQUd2Q2pCLEVBQUFBLE1BSHVDO0FBSXZDUSxFQUFBQSxZQUp1QztBQUt2Q0osRUFBQUEsZUFMdUM7QUFNdkNjLEVBQUFBLFFBTnVDO0FBT3ZDaEIsRUFBQUEsUUFQdUM7QUFRdkN4QixFQUFBQTtBQVJ1QyxDQUFELEtBU2xDO0FBQ0osc0JBQ0U7QUFBQSw0QkFDRSx1REFBQyw4Q0FBRDtBQUFPLFdBQUssRUFBQyxNQUFiO0FBQW9CLGFBQU8sRUFBRSxDQUFDLENBQUNzQixNQUFNLENBQUNtQixJQUF0QztBQUE0QyxXQUFLLEVBQUVuQixNQUFNLENBQUNtQixJQUFQLElBQWVuQixNQUFNLENBQUNtQixJQUFQLENBQVlDLE9BQTlFO0FBQUEsNkJBQ0UsdURBQUMsOENBQUQsb0JBQVdsQixRQUFRLENBQUMsTUFBRCxFQUFTO0FBQUVtQixRQUFBQSxRQUFRLEVBQUU7QUFBWixPQUFULENBQW5CO0FBREYsTUFERixlQUlFLHVEQUFDLDhDQUFEO0FBQU8sV0FBSyxFQUFDLE1BQWI7QUFBQSw2QkFDRSx1REFBQyxxREFBRDtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsY0FBTSxFQUFFO0FBQUEsY0FBQyxFQUFEO0FBQUEsY0FBb0JDLEtBQXBCLHNDQUFHQSxLQUFIOztBQUFBLDhCQUFrQyx1REFBQywrQ0FBRCxvQkFBWUEsS0FBWjtBQUFtQixtQkFBTyxFQUFFSjtBQUE1QixhQUFsQztBQUFBLFNBRlY7QUFHRSxlQUFPLEVBQUVuQixPQUhYO0FBSUUsYUFBSyxFQUFFO0FBQUVzQixVQUFBQSxRQUFRLEVBQUU7QUFBWjtBQUpUO0FBREYsTUFKRixlQVlFLHVEQUFDLG1GQUFEO0FBQ0UsNEJBQXNCLEVBQUVqQixlQUFlLENBQUNtQixPQUFoQixDQUF3QkMsTUFBeEIsQ0FBZ0NDLENBQUQsSUFBT0EsQ0FBQyxDQUFDSixRQUF4QyxDQUQxQjtBQUVFLHVCQUFpQixFQUFFSixpQkFGckI7QUFHRSxrQkFBWSxFQUFFVCxZQUhoQjtBQUlFLHdCQUFrQixFQUFFOUIsZ0JBSnRCO0FBS0UsY0FBUSxFQUFFd0IsUUFMWjtBQU1FLFlBQU0sRUFBRUYsTUFOVjtBQU9FLGFBQU8sRUFBRUQ7QUFQWCxNQVpGO0FBQUEsSUFERjtBQXdCRCxDQWxDTTs7Ozs7Ozs7Ozs7Ozs7O0FDakJQO0FBRUE7QUFLQTs7O0FBUU8sTUFBTTZCLGVBQTBCLEdBQUcsQ0FBQztBQUN6QzdCLEVBQUFBLE9BRHlDO0FBRXpDa0IsRUFBQUEsaUJBRnlDO0FBR3pDakIsRUFBQUEsTUFIeUM7QUFJekNJLEVBQUFBLGVBSnlDO0FBS3pDSSxFQUFBQSxZQUx5QztBQU16Q04sRUFBQUEsUUFOeUM7QUFPekN4QixFQUFBQTtBQVB5QyxDQUFELEtBUXBDO0FBQUE7O0FBQ0osc0JBQ0Usd0RBQUMsMkRBQUQ7QUFBb0IsU0FBSyxFQUFHLFlBQVcwQixlQUFlLENBQUN5QixPQUFRLEVBQS9EO0FBQWtFLFVBQU0sRUFBRSxLQUExRTtBQUFBLGVBQ0d6QixlQUFlLENBQUMwQixJQUFoQixLQUF5QixFQUF6QixpQkFBK0IsdURBQUMsOENBQUQ7QUFBTyxjQUFRLEVBQUMsTUFBaEI7QUFBdUIsV0FBSywyQkFBRTFCLGVBQWUsQ0FBQzBCLElBQWxCLHlFQUEwQjtBQUF0RCxNQURsQyxlQUVFLHVEQUFDLG1GQUFEO0FBQ0UsNEJBQXNCLEVBQUUxQixlQUFlLENBQUNtQixPQUFoQixDQUF3QkMsTUFBeEIsQ0FBZ0NDLENBQUQsSUFBTyxDQUFDQSxDQUFDLENBQUNKLFFBQXpDLENBRDFCO0FBRUUsdUJBQWlCLEVBQUVKLGlCQUZyQjtBQUdFLGNBQVEsRUFBRWYsUUFIWjtBQUlFLFlBQU0sRUFBRUYsTUFKVjtBQUtFLGFBQU8sRUFBRUQsT0FMWDtBQU1FLHdCQUFrQixFQUFFckIsZ0JBTnRCO0FBT0Usa0JBQVksRUFBRThCO0FBUGhCLE1BRkY7QUFBQSxJQURGO0FBY0QsQ0F2Qk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZQO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7QUFpQk8sTUFBTWxDLHVCQUFrQyxHQUFHLENBQUM7QUFDakR5QixFQUFBQSxPQURpRDtBQUVqREMsRUFBQUEsTUFGaUQ7QUFHakRJLEVBQUFBLGVBSGlEO0FBSWpEaUMsRUFBQUEsa0JBSmlEO0FBS2pEbkMsRUFBQUEsUUFMaUQ7QUFNakRDLEVBQUFBLEtBTmlEO0FBT2pERixFQUFBQSxTQVBpRDtBQVFqRHFDLEVBQUFBLHNCQVJpRDtBQVNqRC9CLEVBQUFBLGFBVGlEO0FBVWpEN0IsRUFBQUEsZ0JBVmlEO0FBV2pEOEIsRUFBQUE7QUFYaUQsQ0FBRCxLQVk1QztBQUNKLFFBQU0rQixNQUFNLEdBQUdDLFNBQVMsQ0FBQ0wscURBQVEsRUFBVCxDQUF4QjtBQUVBbEYsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2Q7QUFDSjtBQUNBO0FBQ0E7QUFDSSxVQUFNd0YsYUFBYSxHQUNqQixJQUFJQyxHQUFKLENBQ0V0QyxlQURGLGFBQ0VBLGVBREYsdUJBQ0VBLGVBQWUsQ0FBRW1CLE9BQWpCLENBQ0dDLE1BREgsQ0FDV0MsQ0FBRCxJQUFPQSxDQUFDLENBQUNrQixRQUFGLENBQVdyQixLQUQ1QixFQUVHc0IsR0FGSCxDQUVRQyxNQUFELElBQVk7QUFDZixhQUFRLFlBQVdBLE1BQU0sQ0FBQ0YsUUFBUCxDQUFnQnJCLEtBQU0sRUFBekM7QUFDRCxLQUpILENBREYsS0FNSyxFQVBQO0FBUUFuQixJQUFBQSxLQUFLLENBQUMsQ0FBQyxNQUFELEVBQVMsY0FBVCxFQUF5QixhQUF6QixFQUF3QyxHQUFHc0MsYUFBM0MsQ0FBRCxDQUFMO0FBQ0QsR0FkUSxFQWNOLENBQUNyQyxlQUFELGFBQUNBLGVBQUQsdUJBQUNBLGVBQWUsQ0FBRW1CLE9BQWxCLEVBQTJCcEIsS0FBM0IsQ0FkTSxDQUFUO0FBZ0JBLFFBQU1jLGlCQUFpQixHQUFHaEIsU0FBUyxFQUFuQzs7QUFFQSxNQUFJLENBQUNHLGVBQUwsRUFBc0I7QUFDcEIsZ0RBQU8sdURBQUMsZ0RBQUQsS0FBUDtBQUNEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFFbUMsTUFBTSxDQUFDTyxhQUF2QjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFUCxNQUFNLENBQUNRLFFBQXZCO0FBQUEsNkJBQ0UsdURBQUMseURBQUQ7QUFDRSx1QkFBZSxFQUFFM0MsZUFEbkI7QUFFRSxnQkFBUSxFQUFFaUMsa0JBRlo7QUFHRSxvQkFBWSxFQUFFN0IsWUFIaEI7QUFJRSx3QkFBZ0IsRUFBRTlCLGdCQUpwQjtBQUtFLHlCQUFpQixFQUFFdUMsaUJBTHJCO0FBTUUsZ0JBQVEsRUFBRWYsUUFOWjtBQU9FLGNBQU0sRUFBRUYsTUFQVjtBQVFFLGVBQU8sRUFBRUQ7QUFSWDtBQURGLE1BREYsRUFjR0ssZUFBZSxDQUFDbUIsT0FBaEIsQ0FBd0JDLE1BQXhCLENBQWdDQyxDQUFELElBQU8sQ0FBQ0EsQ0FBQyxDQUFDSixRQUF6QyxFQUFtRDJCLE1BQW5ELEdBQTRELENBQTVELGlCQUNDO0FBQUssZUFBUyxFQUFFVCxNQUFNLENBQUNRLFFBQXZCO0FBQUEsNkJBQ0UsdURBQUMsNkRBQUQ7QUFDRSx1QkFBZSxFQUFFM0MsZUFEbkI7QUFFRSxvQkFBWSxFQUFFSSxZQUZoQjtBQUdFLHdCQUFnQixFQUFFOUIsZ0JBSHBCO0FBSUUseUJBQWlCLEVBQUV1QyxpQkFKckI7QUFLRSxnQkFBUSxFQUFFZixRQUxaO0FBTUUsY0FBTSxFQUFFRixNQU5WO0FBT0UsZUFBTyxFQUFFRDtBQVBYO0FBREYsTUFmSixlQTJCRTtBQUFLLGVBQVMsRUFBRXdDLE1BQU0sQ0FBQ1EsUUFBdkI7QUFBQSw2QkFDRSx1REFBQyx1RUFBRDtBQUNFLDhCQUFzQixFQUFFVCxzQkFEMUI7QUFFRSx5QkFBaUIsRUFBRXJCLGlCQUZyQjtBQUdFLGdCQUFRLEVBQUVmLFFBSFo7QUFJRSxjQUFNLEVBQUVGLE1BSlY7QUFLRSxlQUFPLEVBQUVEO0FBTFg7QUFERixNQTNCRixlQW9DRTtBQUFLLGVBQVMsRUFBRXdDLE1BQU0sQ0FBQ1UsV0FBdkI7QUFBQSw2QkFDRSx3REFBQyx3REFBRDtBQUFBLHNEQUNFLHVEQUFDLCtDQUFEO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBLFVBREYsZ0JBRUUsdURBQUMsK0NBQUQ7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBTyxFQUFDLFdBQTlCO0FBQTBDLGlCQUFPLEVBQUUsTUFBTTFDLGFBQWEsQ0FBQ04sU0FBUyxFQUFWLENBQXRFO0FBQUE7QUFBQSxVQUZGLGVBS0U7QUFBRyxjQUFJLEVBQUcsR0FBRWhDLGlFQUFpQix5QkFBN0I7QUFBQSx5REFDRSx1REFBQywrQ0FBRDtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBTyxFQUFDLFdBQTlCO0FBQUE7QUFBQSxZQURGO0FBQUEsVUFMRjtBQUFBO0FBREYsTUFwQ0Y7QUFBQSxJQURGO0FBb0RELENBekZNO0FBMkZQLE1BQU11RSxTQUFTLEdBQUdOLDBEQUFhLENBQUVpQixLQUFELElBQXlCO0FBQ3ZELFNBQU87QUFDTEwsSUFBQUEsYUFBYSxFQUFFZiw2Q0FBSSxFQURkO0FBRUxnQixJQUFBQSxRQUFRLEVBQUVoQiw2Q0FBSTtBQUNsQjtBQUNBLHFCQUFxQm9CLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxFQUFHO0FBQ3RDLEtBTFM7QUFNTEosSUFBQUEsV0FBVyxFQUFFbEIsNkNBQUk7QUFDckIscUJBQXFCb0IsS0FBSyxDQUFDQyxPQUFOLENBQWNFLEVBQUc7QUFDdEM7QUFSUyxHQUFQO0FBVUQsQ0FYOEIsQ0FBL0I7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUdBO0FBS0E7OztBQVVPLE1BQU12QywwQkFBcUMsR0FBRyxDQUFDO0FBQ3BEaEIsRUFBQUEsT0FEb0Q7QUFFcERrQixFQUFBQSxpQkFGb0Q7QUFHcERqQixFQUFBQSxNQUhvRDtBQUlwRHlELEVBQUFBLHNCQUpvRDtBQUtwRHZELEVBQUFBLFFBTG9EO0FBTXBEd0QsRUFBQUEsa0JBTm9EO0FBT3BEbEQsRUFBQUE7QUFQb0QsQ0FBRCxLQVEvQztBQUNKLHNCQUNFO0FBQUEsY0FDR2lELHNCQUFzQixDQUFDYixHQUF2QixDQUEyQixDQUFDQyxNQUFELEVBQW9DYyxLQUFwQyxLQUFzRDtBQUFBOztBQUNoRixZQUFNQyxHQUFHLEdBQUksR0FBRWYsTUFBTSxDQUFDZ0IsS0FBTSxJQUFHRixLQUFNLEVBQXJDLENBRGdGLENBRWhGO0FBQ0E7O0FBQ0EsWUFBTUcsbUJBQW1CLEdBQ3ZCN0MsaUJBQWlCLENBQUUsWUFBVzRCLE1BQU0sQ0FBQ0YsUUFBUCxDQUFnQnJCLEtBQU0sRUFBbkMsQ0FBakIsSUFDQ0wsaUJBQWlCLENBQUUsWUFBVzRCLE1BQU0sQ0FBQ0YsUUFBUCxDQUFnQnJCLEtBQU0sRUFBbkMsQ0FBbEIsQ0FBb0Z4QixLQUZ0Rjs7QUFJQSxVQUFJK0MsTUFBTSxDQUFDRixRQUFQLENBQWdCckIsS0FBaEIsSUFBeUJ3QyxtQkFBbUIsS0FBS2pCLE1BQU0sQ0FBQ0YsUUFBUCxDQUFnQm9CLEVBQXJFLEVBQXlFO0FBQ3ZFLGVBQU8sSUFBUDtBQUNEOztBQUVELFVBQUlsQixNQUFNLENBQUNtQixPQUFQLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ2pDLDRCQUNFLHVEQUFDLDhDQUFEO0FBQUEsaUNBQ0UsdURBQUMsaURBQUQsb0JBQ005RCxRQUFRLENBQ1YyQyxNQUFNLENBQUNvQixNQUFQLEdBQWlCLGtCQUFpQnBCLE1BQU0sQ0FBQ3FCLFlBQWEsRUFBdEQsR0FBMkQsWUFBV3JCLE1BQU0sQ0FBQ3FCLFlBQWEsRUFEaEYsQ0FEZDtBQUlFLGlCQUFLLEVBQUVyQixNQUFNLENBQUNnQixLQUpoQjtBQUtFLHVCQUFXLEVBQUVoQixNQUFNLENBQUNzQjtBQUx0QjtBQURGLFdBQVlQLEdBQVosQ0FERjtBQVdEOztBQUNELDBCQUNFLHVEQUFDLDhDQUFEO0FBRUUsYUFBSyxFQUFFZixNQUFNLENBQUNnQixLQUZoQjtBQUdFLG1CQUFXLEVBQUVoQixNQUFNLENBQUNzQixXQUh0QjtBQUlFLGVBQU8sRUFBRW5FLE1BQU0sQ0FBQ2YsUUFBUCxJQUFtQixDQUFDLENBQUNlLE1BQU0sQ0FBQ2YsUUFBUCxDQUFnQjRELE1BQU0sQ0FBQ3FCLFlBQXZCLENBSmhDO0FBS0UsYUFBSyxFQUFFbEUsTUFBTSxDQUFDZixRQUFQLDhCQUFtQmUsTUFBTSxDQUFDZixRQUFQLENBQWdCNEQsTUFBTSxDQUFDcUIsWUFBdkIsQ0FBbkIsMERBQW1CLHNCQUFzQzlDLE9BQXpELENBTFQ7QUFBQSxrQkFPR1osWUFBWSxJQUFJQSxZQUFZLENBQUNxQyxNQUFNLENBQUNxQixZQUFSLENBQTVCLGdCQUNDLHVEQUFDLDhDQUFEO0FBQ0Usa0JBQVEsRUFBRSxJQURaO0FBRUUsZUFBSyxFQUFDLFlBRlI7QUFHRSxnQkFBTSxlQUNKLHVEQUFDLCtDQUFEO0FBQVEsbUJBQU8sRUFBRSxNQUFNUixrQkFBa0IsQ0FBQ2IsTUFBTSxDQUFDcUIsWUFBUixDQUF6QztBQUFnRSxnQkFBSSxFQUFDLE1BQXJFO0FBQTRFLGdCQUFJLEVBQUMsUUFBakY7QUFBMEYsZ0JBQUksRUFBQyxJQUEvRjtBQUFBO0FBQUE7QUFKSixVQURELGdCQVdDLHVEQUFDLHlEQUFEO0FBQWUsZ0JBQU0sRUFBRXJCLE1BQXZCO0FBQStCLGtCQUFRLEVBQUUzQyxRQUF6QztBQUFtRCxpQkFBTyxFQUFFSDtBQUE1RDtBQWxCSixTQUNPNkQsR0FEUCxDQURGO0FBdUJELEtBaERBO0FBREgsSUFERjtBQXFERCxDQTlETTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCUDtBQUVBOzs7O0FBUU8sTUFBTXhCLG9CQUErQixHQUFHLENBQUM7QUFBRW5CLEVBQUFBLGlCQUFGO0FBQXFCcUIsRUFBQUEsc0JBQXJCO0FBQTZDcEMsRUFBQUE7QUFBN0MsQ0FBRCxLQUE2RDtBQUMxRyxzQkFDRSx3REFBQywyREFBRDtBQUFvQixTQUFLLEVBQUMsdUJBQTFCO0FBQWtELFVBQU0sRUFBRSxLQUExRDtBQUFBLDRCQUNFLHVEQUFDLDhDQUFEO0FBQUEsNkJBQ0UsdURBQUMsaURBQUQsb0JBQWNBLFFBQVEsQ0FBQyxXQUFELENBQXRCO0FBQXFDLGFBQUssRUFBQyxTQUEzQztBQUFxRCxtQkFBVyxFQUFDO0FBQWpFO0FBREYsTUFERixlQUlFLHVEQUFDLDhDQUFEO0FBQUEsNkJBQ0UsdURBQUMsaURBQUQsb0JBQ01BLFFBQVEsQ0FBQyxzQkFBRCxDQURkO0FBRUUsYUFBSyxFQUFDLGVBRlI7QUFHRSxtQkFBVyxFQUFDO0FBSGQ7QUFERixNQUpGLEVBV0dlLGlCQUFpQixDQUFDb0QsV0FBbEIsSUFBaUMsQ0FBQy9CLHNCQUFsQywwQ0FDQyx1REFBQyxnREFBRDtBQUFTLFdBQUssRUFBQyx1Q0FBZjtBQUFBO0FBQUEsTUFERCxFQVhILGVBaUJFLHVEQUFDLDhDQUFEO0FBQUEsNkJBQ0UsdURBQUMsaURBQUQsb0JBQ01wQyxRQUFRLENBQUMsdUJBQUQsQ0FEZDtBQUVFLGFBQUssRUFBQyx5QkFGUjtBQUdFLG1CQUFXLEVBQUM7QUFIZDtBQURGLE1BakJGLGVBd0JFLHVEQUFDLDhDQUFEO0FBQUEsNkJBQ0UsdURBQUMsaURBQUQsb0JBQ01BLFFBQVEsQ0FBQyxjQUFELENBRGQ7QUFFRSxhQUFLLEVBQUMsZ0JBRlI7QUFHRSxtQkFBVyxFQUFDO0FBSGQ7QUFERixNQXhCRixFQStCR2UsaUJBQWlCLENBQUNxRCxZQUFsQixpQkFDQztBQUFBLDZCQUNFLHVEQUFDLDhDQUFEO0FBQ0UsYUFBSyxFQUFDLHFCQURSO0FBRUUsbUJBQVcsRUFBQywwT0FGZDtBQUFBLCtCQU1FLHVEQUFDLDhDQUFELG9CQUFXcEUsUUFBUSxDQUFDLFdBQUQsQ0FBbkI7QUFBa0MsZUFBSyxFQUFFO0FBQXpDO0FBTkY7QUFERixNQWhDSjtBQUFBLElBREY7QUE4Q0QsQ0EvQ007Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQO0FBRUE7O0FBU08sTUFBTXNELGFBQXdCLEdBQUcsQ0FBQztBQUFFekQsRUFBQUEsT0FBRjtBQUFXOEMsRUFBQUEsTUFBWDtBQUFtQjNDLEVBQUFBLFFBQW5CO0FBQTZCc0UsRUFBQUE7QUFBN0IsQ0FBRCxLQUE0QztBQUNsRixRQUFNQyxVQUFVLEdBQUc1QixNQUFNLENBQUNvQixNQUFQLEdBQWlCLGtCQUFpQnBCLE1BQU0sQ0FBQ3FCLFlBQWEsRUFBdEQsR0FBMkQsWUFBV3JCLE1BQU0sQ0FBQ3FCLFlBQWEsRUFBN0c7O0FBQ0EsVUFBUXJCLE1BQU0sQ0FBQ21CLE9BQWY7QUFDRSxTQUFLLE9BQUw7QUFDRSwwQkFDRSx1REFBQyw4Q0FBRCxvQkFDTTlELFFBQVEsQ0FBRSxHQUFFdUUsVUFBVyxFQUFmLEVBQWtCO0FBQzVCcEQsUUFBQUEsUUFBUSxFQUFFd0IsTUFBTSxDQUFDeEIsUUFBUCxHQUFrQixVQUFsQixHQUErQixLQURiO0FBRTVCcUQsUUFBQUEsUUFBUSxFQUFHQyxDQUFELElBQVE5QixNQUFNLENBQUMrQixjQUFQLEtBQTBCLEVBQTFCLEdBQStCQyxjQUFjLENBQUNGLENBQUQsRUFBSTlCLE1BQU0sQ0FBQytCLGNBQVgsQ0FBN0MsR0FBMEU7QUFGaEUsT0FBbEIsQ0FEZDtBQUtFLGVBQU8sRUFBRUosT0FMWDtBQU1FLFlBQUksRUFBRTNCLE1BQU0sQ0FBQ2lDLFNBTmY7QUFPRSxtQkFBVyxFQUFFakMsTUFBTSxDQUFDa0M7QUFQdEIsU0FERjs7QUFZRixTQUFLLFFBQUw7QUFDRSwwQkFDRSx1REFBQyxxREFBRDtBQUNFLGVBQU8sRUFBRWhGLE9BRFg7QUFFRSxZQUFJLEVBQUcsR0FBRTBFLFVBQVcsRUFGdEI7QUFHRSxjQUFNLEVBQUU7QUFBQTs7QUFBQSxjQUFDLEVBQUQ7QUFBQSxjQUFvQm5ELEtBQXBCLHNDQUFHQSxLQUFIOztBQUFBLDhCQUNOLHVEQUFDLCtDQUFELG9CQUFZQSxLQUFaO0FBQW1CLG1CQUFPLDJCQUFFdUIsTUFBTSxDQUFDbUMsYUFBVCx5RUFBMEJDLFNBQXBEO0FBQStELG1CQUFPLEVBQUVUO0FBQXhFLGFBRE07QUFBQTtBQUhWLFFBREY7O0FBVUYsU0FBSyxVQUFMO0FBQ0UsMEJBQ0UsdURBQUMsaURBQUQ7QUFDRSxlQUFPLEVBQUVBO0FBRFgsU0FFTXRFLFFBQVEsQ0FBRSxHQUFFdUUsVUFBVyxFQUFmLEVBQWtCO0FBQzVCcEQsUUFBQUEsUUFBUSxFQUFFd0IsTUFBTSxDQUFDeEIsUUFBUCxHQUFrQixVQUFsQixHQUErQixLQURiO0FBRTVCcUQsUUFBQUEsUUFBUSxFQUFHQyxDQUFELElBQVE5QixNQUFNLENBQUMrQixjQUFQLEtBQTBCLEVBQTFCLEdBQStCQyxjQUFjLENBQUNGLENBQUQsRUFBSTlCLE1BQU0sQ0FBQytCLGNBQVgsQ0FBN0MsR0FBMEU7QUFGaEUsT0FBbEIsQ0FGZCxFQURGOztBQVVGO0FBQ0VNLE1BQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLHVCQUFkLEVBQXVDdEMsTUFBTSxDQUFDbUIsT0FBOUM7QUFDQSxhQUFPLElBQVA7QUF0Q0o7QUF3Q0QsQ0ExQ007O0FBNENQLE1BQU1hLGNBQWMsR0FBRyxDQUFDL0UsS0FBRCxFQUFnQjhFLGNBQWhCLEtBQTJDO0FBQ2hFLFNBQU9RLE1BQU0sQ0FBQ1IsY0FBRCxDQUFOLENBQXVCUyxJQUF2QixDQUE0QnZGLEtBQTVCLElBQXFDLElBQXJDLEdBQTRDLGdCQUFuRDtBQUNELENBRkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFHQTtBQUVPLFNBQVNpRyxrQkFBVCxDQUE0QnhFLE9BQTVCLEVBQTJFO0FBQ2hGLFNBQU8sTUFBTzFELFFBQVAsSUFBb0I7QUFDekJBLElBQUFBLFFBQVEsQ0FBQzhILHlEQUFjLEVBQWYsQ0FBUjtBQUNBLFVBQU1LLEtBQXFCLEdBQUcsTUFBTVYsK0RBQWEsR0FBR1csR0FBaEIsQ0FBb0IsYUFBcEIsRUFBbUMxRSxPQUFuQyxDQUFwQztBQUNBMUQsSUFBQUEsUUFBUSxDQUFDK0gsMkRBQWdCLENBQUNJLEtBQUQsQ0FBakIsQ0FBUjtBQUNELEdBSkQ7QUFLRDtBQUVNLFNBQVNFLG9CQUFULENBQThCaEgsRUFBOUIsRUFBMENxQyxPQUExQyxFQUEyRjtBQUNoRyxTQUFPLE1BQU8xRCxRQUFQLElBQW9CO0FBQ3pCLFVBQU15SCwrREFBYSxHQUFHYSxJQUFoQixDQUFzQixlQUFjakgsRUFBRyxRQUF2QyxFQUFnRHFDLE9BQWhELENBQU47QUFDQSxVQUFNNkUsV0FBVyxHQUFHYiw2RUFBQSxHQUFrQzlFLEtBQWxDLElBQTJDLEtBQS9EO0FBQ0E1QyxJQUFBQSxRQUFRLENBQUNrSSxrQkFBa0IsQ0FBQztBQUFFdEYsTUFBQUEsS0FBSyxFQUFFMkYsV0FBVyxDQUFDRSxRQUFaO0FBQVQsS0FBRCxDQUFuQixDQUFSO0FBQ0QsR0FKRDtBQUtEO0FBRU0sU0FBU0MseUJBQVQsQ0FBbUNDLElBQW5DLEVBQTBFO0FBQy9FLFNBQU8sTUFBTzNJLFFBQVAsSUFBb0I7QUFDekIsUUFBSTtBQUNGLFlBQU15SCwrREFBYSxHQUFHYSxJQUFoQixDQUFzQiwwQkFBdEIsRUFBaURLLElBQWpELENBQU47QUFDQTNJLE1BQUFBLFFBQVEsQ0FBQzJILDJEQUFTLENBQUNFLHdGQUF5QixDQUFDLHNCQUFELENBQTFCLENBQVYsQ0FBUjtBQUNBSCxNQUFBQSxrRUFBQSxDQUFxQix5QkFBckI7QUFDRCxLQUpELENBSUUsT0FBT0osS0FBUCxFQUFjO0FBQ2R0SCxNQUFBQSxRQUFRLENBQUMySCwyREFBUyxDQUFDQyxzRkFBdUIsQ0FBQ04sS0FBSyxDQUFDcUIsSUFBTixDQUFXckIsS0FBWixDQUF4QixDQUFWLENBQVI7QUFDRDtBQUNGLEdBUkQ7QUFTRDtBQUVNLFNBQVMxRyx5QkFBVCxDQUFtQytILElBQW5DLEVBQWlFO0FBQ3RFLFNBQU8sTUFBTzNJLFFBQVAsSUFBb0I7QUFDekIsUUFBSTtBQUNGLFlBQU15SCwrREFBYSxHQUFHb0IsR0FBaEIsQ0FBcUIsNEJBQTJCRixJQUFJLENBQUN0SCxFQUFHLEVBQXhELEVBQTJEc0gsSUFBM0QsQ0FBTjtBQUNBM0ksTUFBQUEsUUFBUSxDQUFDMkgsMkRBQVMsQ0FBQ0Usd0ZBQXlCLENBQUMsc0JBQUQsQ0FBMUIsQ0FBVixDQUFSO0FBQ0QsS0FIRCxDQUdFLE9BQU9QLEtBQVAsRUFBYztBQUNkdEgsTUFBQUEsUUFBUSxDQUFDMkgsMkRBQVMsQ0FBQ0Msc0ZBQXVCLENBQUNOLEtBQUssQ0FBQ3FCLElBQU4sQ0FBV3JCLEtBQVosQ0FBeEIsQ0FBVixDQUFSO0FBQ0Q7QUFDRixHQVBEO0FBUUQ7QUFFTSxTQUFTM0csdUJBQVQsQ0FBaUNnSSxJQUFqQyxFQUErRDtBQUNwRSxTQUFPLE9BQU8zSSxRQUFQLEVBQWlCOEksUUFBakIsS0FBOEI7QUFDbkMsVUFBTUMsT0FBTyxHQUFHRCxRQUFRLEdBQUczSCxtQkFBWCxDQUErQkEsbUJBQS9DO0FBQ0EsVUFBTXNHLCtEQUFhLEdBQUdhLElBQWhCLENBQXFCLCtCQUFyQjtBQUF3RGpILE1BQUFBLEVBQUUsRUFBRTBILE9BQU8sQ0FBQzFIO0FBQXBFLE9BQTJFc0gsSUFBM0UsRUFBTjtBQUNELEdBSEQ7QUFJRDtBQUVNLFNBQVNLLHFCQUFULEdBQW9EO0FBQ3pELFNBQU8sTUFBT2hKLFFBQVAsSUFBb0I7QUFDekIsVUFBTWlKLGNBQTZCLEdBQUcsTUFBTXhCLCtEQUFhLEdBQUdXLEdBQWhCLENBQXFCLHNCQUFyQixDQUE1QztBQUVBLFVBQU1jLGlCQUFpQixHQUFHRCxjQUFjLENBQUNFLElBQWYsQ0FBb0IsQ0FBQ0MsRUFBRCxFQUFLQyxFQUFMLEtBQVk7QUFDeEQsVUFBSUQsRUFBRSxDQUFDOUYsSUFBSCxHQUFVK0YsRUFBRSxDQUFDL0YsSUFBakIsRUFBdUI7QUFDckIsZUFBTyxDQUFQO0FBQ0Q7O0FBQ0QsYUFBTyxDQUFDLENBQVI7QUFDRCxLQUx5QixDQUExQjtBQU9BdEQsSUFBQUEsUUFBUSxDQUFDaUksa0VBQXVCLENBQUNpQixpQkFBRCxDQUF4QixDQUFSO0FBQ0QsR0FYRDtBQVlEO0FBRU0sU0FBU3hJLHVCQUFULENBQWlDVyxFQUFqQyxFQUFnRTtBQUNyRSxTQUFPLE1BQU9yQixRQUFQLElBQW9CO0FBQ3pCLFVBQU1BLFFBQVEsQ0FBQ2dKLHFCQUFxQixFQUF0QixDQUFkO0FBQ0EsVUFBTTdILG1CQUFtQixHQUFHLE1BQU1zRywrREFBYSxHQUFHVyxHQUFoQixDQUFxQiw0QkFBMkIvRyxFQUFHLEVBQW5ELENBQWxDO0FBQ0FyQixJQUFBQSxRQUFRLENBQUNnSSxvRUFBeUIsQ0FBQzdHLG1CQUFELENBQTFCLENBQVI7QUFDRCxHQUpEO0FBS0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUQ7QUFHQTtBQUdPLE1BQU1vSSxhQUFxQyxHQUFHO0FBQ25EbEksRUFBQUEsRUFBRSxFQUFFLENBQUMsQ0FEOEM7QUFFbkRpQyxFQUFBQSxJQUFJLEVBQUUsRUFGNkM7QUFHbkR4QixFQUFBQSxJQUFJLEVBQUU7QUFBRUcsSUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0IrRCxJQUFBQSxLQUFLLEVBQUU7QUFBekIsR0FINkM7QUFJbkRTLEVBQUFBLFlBQVksRUFBRSxLQUpxQztBQUtuRCtDLEVBQUFBLHFCQUFxQixFQUFFLEtBTDRCO0FBTW5EQyxFQUFBQSxTQUFTLEVBQUUsS0FOd0M7QUFPbkRySSxFQUFBQSxRQUFRLEVBQUU7QUFDUm9GLElBQUFBLFdBQVcsRUFBRXBHLHNFQURMO0FBRVJzSixJQUFBQSxXQUFXLEVBQUUsSUFGTDtBQUdSQyxJQUFBQSxVQUFVLEVBQUUsTUFISjtBQUlSQyxJQUFBQSxRQUFRLEVBQUU7QUFKRixHQVB5QztBQWFuREMsRUFBQUEsY0FBYyxFQUFFLEVBYm1DO0FBY25EbEgsRUFBQUEsWUFBWSxFQUFFLEVBZHFDO0FBZW5EbUgsRUFBQUEsU0FBUyxFQUFFO0FBZndDLENBQTlDO0FBa0JBLE1BQU1oSiw0QkFBNEIsR0FBR3dJLHVEQUFVLENBQ3BELENBQUNTLG9CQUFELEVBQWtEQyxrQkFBbEQsS0FBa0g7QUFDaEgsU0FBT0Qsb0JBQW9CLENBQUNoRixHQUFyQixDQUEwQmdFLE9BQUQsSUFBYTtBQUMzQyxRQUFJaUIsa0JBQUosRUFBd0I7QUFDdEIsYUFBTztBQUNML0gsUUFBQUEsS0FBSyxFQUFFOEcsT0FBTyxDQUFDOUcsS0FEVjtBQUVMK0QsUUFBQUEsS0FBSyxFQUFFK0MsT0FBTyxDQUFDL0MsS0FGVjtBQUdMTSxRQUFBQSxXQUFXLEVBQUV5QyxPQUFPLENBQUN6QztBQUhoQixPQUFQO0FBS0Q7O0FBQ0QsV0FBTztBQUNMckUsTUFBQUEsS0FBSyxFQUFFOEcsT0FBTyxDQUFDOUcsS0FEVjtBQUVMK0QsTUFBQUEsS0FBSyxFQUFFK0MsT0FBTyxDQUFDL0M7QUFGVixLQUFQO0FBSUQsR0FaTSxDQUFQO0FBYUQsQ0FmbUQsQ0FBL0M7QUFrQkEsTUFBTWpGLG1CQUFtQixHQUFJRyxRQUFELElBQXNDO0FBQ3ZFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0UsUUFBTUUsUUFBUSxHQUFHNkksTUFBTSxDQUFDQyxXQUFQLENBQ2ZELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlakosUUFBUSxDQUFDRSxRQUF4QixFQUFrQzJELEdBQWxDLENBQXNDLENBQUMsQ0FBQ2dCLEdBQUQsRUFBTTlELEtBQU4sQ0FBRCxLQUFrQjtBQUN0RCxXQUFPLENBQUM4RCxHQUFELEVBQU05RCxLQUFLLElBQUlBLEtBQUssQ0FBQ21JLGNBQU4sQ0FBcUIsT0FBckIsQ0FBVCxHQUF5Q25JLEtBQUssQ0FBQ0EsS0FBL0MsR0FBdURBLEtBQTdELENBQVA7QUFDRCxHQUZELENBRGUsQ0FBakI7QUFNQSwyQkFDS3NILGFBREwsRUFFS3JJLFFBRkw7QUFHRXVJLElBQUFBLFNBQVMsRUFBRXZJLFFBQVEsQ0FBQ3VJLFNBQVQsS0FBdUIsRUFBdkIsR0FBNEJGLGFBQWEsQ0FBQ0UsU0FBMUMsR0FBc0R2SSxRQUFRLENBQUN1SSxTQUg1RTtBQUlFM0gsSUFBQUEsSUFBSSxFQUFFWixRQUFRLENBQUNZLElBQVQsQ0FBY0csS0FKdEI7QUFLRWIsSUFBQUEsUUFBUSxvQkFBT21JLGFBQWEsQ0FBQ25JLFFBQXJCLEVBQWtDQSxRQUFsQyxDQUxWO0FBTUV5SSxJQUFBQSxjQUFjLG9CQUFPM0ksUUFBUSxDQUFDMkksY0FBaEI7QUFOaEI7QUFRRCxDQW5CTTtBQXFCQSxNQUFNN0ksaUJBQWlCLEdBQUlFLFFBQUQsSUFBc0M7QUFBQTs7QUFDckUsU0FBTztBQUNMb0MsSUFBQUEsSUFBSSxFQUFFcEMsUUFBUSxDQUFDb0MsSUFEVjtBQUVMeEIsSUFBQUEsSUFBSSxFQUFFWixRQUFRLENBQUNZLElBQVQsQ0FBY0csS0FGZjtBQUdMd0gsSUFBQUEsU0FBUyx5QkFBRXZJLFFBQVEsQ0FBQ3VJLFNBQVgscUVBQXdCRixhQUFhLENBQUNFLFNBSDFDO0FBSUxySSxJQUFBQSxRQUFRLG9CQUFPNkksTUFBTSxDQUFDSSxNQUFQLENBQWNkLGFBQWEsQ0FBQ25JLFFBQTVCLEVBQXNDRixRQUFRLENBQUNFLFFBQS9DLENBQVAsQ0FKSDtBQUtMeUksSUFBQUEsY0FBYyxvQkFBTzNJLFFBQVEsQ0FBQzJJLGNBQWhCO0FBTFQsR0FBUDtBQU9ELENBUk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9jb3JlL2NvbXBvbmVudHMvY29ubmVjdFdpdGhDbGVhblVwLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9FZGl0Tm90aWZpY2F0aW9uQ2hhbm5lbFBhZ2UudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvQmFzaWNTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvY29tcG9uZW50cy9DaGFubmVsU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uU2V0dGluZ3MudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvT3B0aW9uRWxlbWVudC50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvc3RhdGUvYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy91dGlscy9ub3RpZmljYXRpb25DaGFubmVscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudFR5cGUsIEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBNYXBEaXNwYXRjaFRvUHJvcHNQYXJhbSwgTWFwU3RhdGVUb1Byb3BzUGFyYW0sIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBjbGVhblVwQWN0aW9uLCBTdGF0ZVNlbGVjdG9yIH0gZnJvbSAnLi4vYWN0aW9ucy9jbGVhblVwJztcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3RXaXRoQ2xlYW5VcCA9XG4gIDxcbiAgICBUU3RhdGVQcm9wcyBleHRlbmRzIHt9ID0ge30sXG4gICAgVERpc3BhdGNoUHJvcHMgPSB7fSxcbiAgICBUT3duUHJvcHMgPSB7fSxcbiAgICBTdGF0ZSA9IHt9LFxuICAgIFRTZWxlY3RvciBleHRlbmRzIG9iamVjdCA9IHt9LFxuICAgIFN0YXRpY3MgPSB7fVxuICA+KFxuICAgIG1hcFN0YXRlVG9Qcm9wczogTWFwU3RhdGVUb1Byb3BzUGFyYW08VFN0YXRlUHJvcHMsIFRPd25Qcm9wcywgU3RhdGU+LFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wczogTWFwRGlzcGF0Y2hUb1Byb3BzUGFyYW08VERpc3BhdGNoUHJvcHMsIFRPd25Qcm9wcz4sXG4gICAgc3RhdGVTZWxlY3RvcjogU3RhdGVTZWxlY3RvcjxUU2VsZWN0b3I+XG4gICkgPT5cbiAgKENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxhbnk+KSA9PiB7XG4gICAgY29uc3QgQ29ubmVjdGVkQ29tcG9uZW50ID0gY29ubmVjdChcbiAgICAgIG1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICkoQ29tcG9uZW50KTtcblxuICAgIGNvbnN0IENvbm5lY3RlZENvbXBvbmVudFdpdGhDbGVhblVwOiBGdW5jdGlvbkNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFuVXAoKSB7XG4gICAgICAgICAgZGlzcGF0Y2goY2xlYW5VcEFjdGlvbih7IHN0YXRlU2VsZWN0b3IgfSkpO1xuICAgICAgICB9O1xuICAgICAgfSwgW2Rpc3BhdGNoXSk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gPENvbm5lY3RlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xuICAgIH07XG5cbiAgICBDb25uZWN0ZWRDb21wb25lbnRXaXRoQ2xlYW5VcC5kaXNwbGF5TmFtZSA9IGBDb25uZWN0V2l0aENsZWFuVXAoJHtDb25uZWN0ZWRDb21wb25lbnQuZGlzcGxheU5hbWV9KWA7XG4gICAgaG9pc3ROb25SZWFjdFN0YXRpY3MoQ29ubmVjdGVkQ29tcG9uZW50V2l0aENsZWFuVXAsIENvbXBvbmVudCk7XG4gICAgdHlwZSBIb2lzdGVkID0gdHlwZW9mIENvbm5lY3RlZENvbXBvbmVudFdpdGhDbGVhblVwICYgU3RhdGljcztcblxuICAgIHJldHVybiBDb25uZWN0ZWRDb21wb25lbnRXaXRoQ2xlYW5VcCBhcyBIb2lzdGVkO1xuICB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXBEaXNwYXRjaFRvUHJvcHMsIE1hcFN0YXRlVG9Qcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgTmF2TW9kZWwgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRm9ybSwgU3Bpbm5lciB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGNvbm5lY3RXaXRoQ2xlYW5VcCB9IGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvY29ubmVjdFdpdGhDbGVhblVwJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsVHlwZSwgTm90aWZpY2F0aW9uQ2hhbm5lbERUTywgU3RvcmVTdGF0ZSB9IGZyb20gJ2FwcC90eXBlcyc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxGb3JtIH0gZnJvbSAnLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbkNoYW5uZWxGb3JtJztcbmltcG9ydCB7IGxvYWROb3RpZmljYXRpb25DaGFubmVsLCB0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbCwgdXBkYXRlTm90aWZpY2F0aW9uQ2hhbm5lbCB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyByZXNldFNlY3VyZUZpZWxkIH0gZnJvbSAnLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBtYXBDaGFubmVsc1RvU2VsZWN0YWJsZVZhbHVlLCB0cmFuc2Zvcm1TdWJtaXREYXRhLCB0cmFuc2Zvcm1UZXN0RGF0YSB9IGZyb20gJy4vdXRpbHMvbm90aWZpY2F0aW9uQ2hhbm5lbHMnO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7IGlkOiBzdHJpbmcgfT4ge31cblxuaW50ZXJmYWNlIENvbm5lY3RlZFByb3BzIHtcbiAgbmF2TW9kZWw6IE5hdk1vZGVsO1xuICBub3RpZmljYXRpb25DaGFubmVsOiBhbnk7XG4gIG5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlczogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVbXTtcbn1cblxuaW50ZXJmYWNlIERpc3BhdGNoUHJvcHMge1xuICBsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbDogdHlwZW9mIGxvYWROb3RpZmljYXRpb25DaGFubmVsO1xuICB0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbDogdHlwZW9mIHRlc3ROb3RpZmljYXRpb25DaGFubmVsO1xuICB1cGRhdGVOb3RpZmljYXRpb25DaGFubmVsOiB0eXBlb2YgdXBkYXRlTm90aWZpY2F0aW9uQ2hhbm5lbDtcbiAgcmVzZXRTZWN1cmVGaWVsZDogdHlwZW9mIHJlc2V0U2VjdXJlRmllbGQ7XG59XG5cbnR5cGUgUHJvcHMgPSBPd25Qcm9wcyAmIENvbm5lY3RlZFByb3BzICYgRGlzcGF0Y2hQcm9wcztcblxuZXhwb3J0IGNsYXNzIEVkaXROb3RpZmljYXRpb25DaGFubmVsUGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5sb2FkTm90aWZpY2F0aW9uQ2hhbm5lbChwYXJzZUludCh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCwgMTApKTtcbiAgfVxuXG4gIG9uU3VibWl0ID0gKGZvcm1EYXRhOiBOb3RpZmljYXRpb25DaGFubmVsRFRPKSA9PiB7XG4gICAgY29uc3QgeyBub3RpZmljYXRpb25DaGFubmVsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5wcm9wcy51cGRhdGVOb3RpZmljYXRpb25DaGFubmVsKHtcbiAgICAgIC8qXG4gICAgICAgU29tZSBzZXR0aW5ncyB3aGljaCBsaXZlcyBpbiBhIGNvbGxhcHNlZCBzZWN0aW9uIHdpbGwgbm90IGJlIHJlZ2lzdGVyZWQgc2luY2VcbiAgICAgICB0aGUgc2VjdGlvbiB3aWxsIG5vdCBiZSByZW5kZXJlZCBpZiBhIHVzZXIgZG9lc24ndCBleHBhbmQgaXQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvXG4gICAgICAgbWVyZ2UgdGhlIGluaXRpYWxEYXRhIHdpdGggYW55IGNoYW5nZXMgZnJvbSB0aGUgZm9ybS5cbiAgICAgICovXG4gICAgICAuLi50cmFuc2Zvcm1TdWJtaXREYXRhKHtcbiAgICAgICAgLi4ubm90aWZpY2F0aW9uQ2hhbm5lbCxcbiAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgIHNldHRpbmdzOiB7IC4uLm5vdGlmaWNhdGlvbkNoYW5uZWwuc2V0dGluZ3MsIC4uLmZvcm1EYXRhLnNldHRpbmdzIH0sXG4gICAgICB9KSxcbiAgICAgIGlkOiBub3RpZmljYXRpb25DaGFubmVsLmlkLFxuICAgIH0pO1xuICB9O1xuXG4gIG9uVGVzdENoYW5uZWwgPSAoZm9ybURhdGE6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8pID0+IHtcbiAgICBjb25zdCB7IG5vdGlmaWNhdGlvbkNoYW5uZWwgfSA9IHRoaXMucHJvcHM7XG4gICAgLypcbiAgICAgIFNhbWUgYXMgc3VibWl0XG4gICAgICovXG4gICAgdGhpcy5wcm9wcy50ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbChcbiAgICAgIHRyYW5zZm9ybVRlc3REYXRhKHtcbiAgICAgICAgLi4ubm90aWZpY2F0aW9uQ2hhbm5lbCxcbiAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgIHNldHRpbmdzOiB7IC4uLm5vdGlmaWNhdGlvbkNoYW5uZWwuc2V0dGluZ3MsIC4uLmZvcm1EYXRhLnNldHRpbmdzIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmF2TW9kZWwsIG5vdGlmaWNhdGlvbkNoYW5uZWwsIG5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZSBuYXZNb2RlbD17bmF2TW9kZWx9PlxuICAgICAgICA8UGFnZS5Db250ZW50cz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGFnZS1zdWItaGVhZGluZ1wiPkVkaXQgbm90aWZpY2F0aW9uIGNoYW5uZWw8L2gyPlxuICAgICAgICAgIHtub3RpZmljYXRpb25DaGFubmVsICYmIG5vdGlmaWNhdGlvbkNoYW5uZWwuaWQgPiAwID8gKFxuICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgbWF4V2lkdGg9ezYwMH1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZXM9e3tcbiAgICAgICAgICAgICAgICAuLi5ub3RpZmljYXRpb25DaGFubmVsLFxuICAgICAgICAgICAgICAgIHR5cGU6IG5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlcy5maW5kKChuKSA9PiBuLnZhbHVlID09PSBub3RpZmljYXRpb25DaGFubmVsLnR5cGUpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7KHsgY29udHJvbCwgZXJyb3JzLCBnZXRWYWx1ZXMsIHJlZ2lzdGVyLCB3YXRjaCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaGFubmVsID0gbm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVzLmZpbmQoKGMpID0+IGMudmFsdWUgPT09IGdldFZhbHVlcygpLnR5cGUudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25DaGFubmVsRm9ybVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RhYmxlQ2hhbm5lbHM9e21hcENoYW5uZWxzVG9TZWxlY3RhYmxlVmFsdWUobm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVzLCB0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDaGFubmVsPXtzZWxlY3RlZENoYW5uZWx9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlUmVuZGVyZXJBdmFpbGFibGU9e2NvbmZpZy5yZW5kZXJlckF2YWlsYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgb25UZXN0Q2hhbm5lbD17dGhpcy5vblRlc3RDaGFubmVsfVxuICAgICAgICAgICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIHdhdGNoPXt3YXRjaH1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICAgICAgICAgIGdldFZhbHVlcz17Z2V0VmFsdWVzfVxuICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICAgICAgICByZXNldFNlY3VyZUZpZWxkPXt0aGlzLnByb3BzLnJlc2V0U2VjdXJlRmllbGR9XG4gICAgICAgICAgICAgICAgICAgIHNlY3VyZUZpZWxkcz17bm90aWZpY2F0aW9uQ2hhbm5lbC5zZWN1cmVGaWVsZHN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIExvYWRpbmcgbm90aWZpY2F0aW9uIGNoYW5uZWxcbiAgICAgICAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wczogTWFwU3RhdGVUb1Byb3BzPENvbm5lY3RlZFByb3BzLCBPd25Qcm9wcywgU3RvcmVTdGF0ZT4gPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdjaGFubmVscycpLFxuICAgIG5vdGlmaWNhdGlvbkNoYW5uZWw6IHN0YXRlLm5vdGlmaWNhdGlvbkNoYW5uZWwubm90aWZpY2F0aW9uQ2hhbm5lbCxcbiAgICBub3RpZmljYXRpb25DaGFubmVsVHlwZXM6IHN0YXRlLm5vdGlmaWNhdGlvbkNoYW5uZWwubm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVzLFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzOiBNYXBEaXNwYXRjaFRvUHJvcHM8RGlzcGF0Y2hQcm9wcywgT3duUHJvcHM+ID0ge1xuICBsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbCxcbiAgdGVzdE5vdGlmaWNhdGlvbkNoYW5uZWwsXG4gIHVwZGF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwsXG4gIHJlc2V0U2VjdXJlRmllbGQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0V2l0aENsZWFuVXAoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAoc3RhdGUpID0+IHN0YXRlLm5vdGlmaWNhdGlvbkNoYW5uZWxcbikoRWRpdE5vdGlmaWNhdGlvbkNoYW5uZWxQYWdlKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBGaWVsZCwgSW5wdXQsIElucHV0Q29udHJvbCwgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzLCBOb3RpZmljYXRpb25DaGFubmVsVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMgfSBmcm9tICcuL05vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB7XG4gIHNlbGVjdGVkQ2hhbm5lbDogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGU7XG4gIGNoYW5uZWxzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIHNlY3VyZUZpZWxkczogTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcztcbiAgcmVzZXRTZWN1cmVGaWVsZDogKGtleTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQmFzaWNTZXR0aW5nczogRkM8UHJvcHM+ID0gKHtcbiAgY29udHJvbCxcbiAgY3VycmVudEZvcm1WYWx1ZXMsXG4gIGVycm9ycyxcbiAgc2VjdXJlRmllbGRzLFxuICBzZWxlY3RlZENoYW5uZWwsXG4gIGNoYW5uZWxzLFxuICByZWdpc3RlcixcbiAgcmVzZXRTZWN1cmVGaWVsZCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZpZWxkIGxhYmVsPVwiTmFtZVwiIGludmFsaWQ9eyEhZXJyb3JzLm5hbWV9IGVycm9yPXtlcnJvcnMubmFtZSAmJiBlcnJvcnMubmFtZS5tZXNzYWdlfT5cbiAgICAgICAgPElucHV0IHsuLi5yZWdpc3RlcignbmFtZScsIHsgcmVxdWlyZWQ6ICdOYW1lIGlzIHJlcXVpcmVkJyB9KX0gLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8RmllbGQgbGFiZWw9XCJUeXBlXCI+XG4gICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyByZWYsIC4uLmZpZWxkIH0gfSkgPT4gPFNlbGVjdCB7Li4uZmllbGR9IG9wdGlvbnM9e2NoYW5uZWxzfSAvPn1cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB0cnVlIH19XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zXG4gICAgICAgIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM9e3NlbGVjdGVkQ2hhbm5lbC5vcHRpb25zLmZpbHRlcigobykgPT4gby5yZXF1aXJlZCl9XG4gICAgICAgIGN1cnJlbnRGb3JtVmFsdWVzPXtjdXJyZW50Rm9ybVZhbHVlc31cbiAgICAgICAgc2VjdXJlRmllbGRzPXtzZWN1cmVGaWVsZHN9XG4gICAgICAgIG9uUmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBbGVydCwgQ29sbGFwc2FibGVTZWN0aW9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzLCBOb3RpZmljYXRpb25DaGFubmVsVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMgfSBmcm9tICcuL05vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB7XG4gIHNlbGVjdGVkQ2hhbm5lbDogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGU7XG4gIHNlY3VyZUZpZWxkczogTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcztcbiAgcmVzZXRTZWN1cmVGaWVsZDogKGtleTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhbm5lbFNldHRpbmdzOiBGQzxQcm9wcz4gPSAoe1xuICBjb250cm9sLFxuICBjdXJyZW50Rm9ybVZhbHVlcyxcbiAgZXJyb3JzLFxuICBzZWxlY3RlZENoYW5uZWwsXG4gIHNlY3VyZUZpZWxkcyxcbiAgcmVnaXN0ZXIsXG4gIHJlc2V0U2VjdXJlRmllbGQsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbGxhcHNhYmxlU2VjdGlvbiBsYWJlbD17YE9wdGlvbmFsICR7c2VsZWN0ZWRDaGFubmVsLmhlYWRpbmd9YH0gaXNPcGVuPXtmYWxzZX0+XG4gICAgICB7c2VsZWN0ZWRDaGFubmVsLmluZm8gIT09ICcnICYmIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT17c2VsZWN0ZWRDaGFubmVsLmluZm8gPz8gJyd9IC8+fVxuICAgICAgPE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zXG4gICAgICAgIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM9e3NlbGVjdGVkQ2hhbm5lbC5vcHRpb25zLmZpbHRlcigobykgPT4gIW8ucmVxdWlyZWQpfVxuICAgICAgICBjdXJyZW50Rm9ybVZhbHVlcz17Y3VycmVudEZvcm1WYWx1ZXN9XG4gICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgIG9uUmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgc2VjdXJlRmllbGRzPXtzZWN1cmVGaWVsZHN9XG4gICAgICAvPlxuICAgIDwvQ29sbGFwc2FibGVTZWN0aW9uPlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybUFQSSwgSG9yaXpvbnRhbEdyb3VwLCBzdHlsZXNGYWN0b3J5LCB1c2VUaGVtZSwgU3Bpbm5lciB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGUsIE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8sIE5vdGlmaWNhdGlvbkNoYW5uZWxTZWN1cmVGaWVsZHMgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IEJhc2ljU2V0dGluZ3MgfSBmcm9tICcuL0Jhc2ljU2V0dGluZ3MnO1xuaW1wb3J0IHsgQ2hhbm5lbFNldHRpbmdzIH0gZnJvbSAnLi9DaGFubmVsU2V0dGluZ3MnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V0dGluZ3MgfSBmcm9tICcuL05vdGlmaWNhdGlvblNldHRpbmdzJztcblxuaW50ZXJmYWNlIFByb3BzXG4gIGV4dGVuZHMgUGljazxGb3JtQVBJPE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8+LCAnY29udHJvbCcgfCAnZXJyb3JzJyB8ICdyZWdpc3RlcicgfCAnd2F0Y2gnIHwgJ2dldFZhbHVlcyc+IHtcbiAgc2VsZWN0YWJsZUNoYW5uZWxzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIHNlbGVjdGVkQ2hhbm5lbD86IE5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlO1xuICBpbWFnZVJlbmRlcmVyQXZhaWxhYmxlOiBib29sZWFuO1xuICBzZWN1cmVGaWVsZHM6IE5vdGlmaWNhdGlvbkNoYW5uZWxTZWN1cmVGaWVsZHM7XG4gIHJlc2V0U2VjdXJlRmllbGQ6IChrZXk6IHN0cmluZykgPT4gdm9pZDtcbiAgb25UZXN0Q2hhbm5lbDogKGRhdGE6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wc1xuICBleHRlbmRzIFBpY2s8Rm9ybUFQSTxOb3RpZmljYXRpb25DaGFubmVsRFRPPiwgJ2NvbnRyb2wnIHwgJ2Vycm9ycycgfCAncmVnaXN0ZXInPiB7XG4gIGN1cnJlbnRGb3JtVmFsdWVzOiBOb3RpZmljYXRpb25DaGFubmVsRFRPO1xufVxuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm06IEZDPFByb3BzPiA9ICh7XG4gIGNvbnRyb2wsXG4gIGVycm9ycyxcbiAgc2VsZWN0ZWRDaGFubmVsLFxuICBzZWxlY3RhYmxlQ2hhbm5lbHMsXG4gIHJlZ2lzdGVyLFxuICB3YXRjaCxcbiAgZ2V0VmFsdWVzLFxuICBpbWFnZVJlbmRlcmVyQXZhaWxhYmxlLFxuICBvblRlc3RDaGFubmVsLFxuICByZXNldFNlY3VyZUZpZWxkLFxuICBzZWN1cmVGaWVsZHMsXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh1c2VUaGVtZSgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8qXG4gICAgICBGaW5kIGZpZWxkcyB0aGF0IGhhdmUgZGVwZW5kZW5jaWVzIG9uIG90aGVyIGZpZWxkcyBhbmQgcmVtb3ZlcyBkdXBsaWNhdGVzLlxuICAgICAgTmVlZHMgdG8gYmUgcHJlZml4ZWQgd2l0aCBzZXR0aW5ncy5cbiAgICAqL1xuICAgIGNvbnN0IGZpZWxkc1RvV2F0Y2ggPVxuICAgICAgbmV3IFNldChcbiAgICAgICAgc2VsZWN0ZWRDaGFubmVsPy5vcHRpb25zXG4gICAgICAgICAgLmZpbHRlcigobykgPT4gby5zaG93V2hlbi5maWVsZClcbiAgICAgICAgICAubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgc2V0dGluZ3MuJHtvcHRpb24uc2hvd1doZW4uZmllbGR9YDtcbiAgICAgICAgICB9KVxuICAgICAgKSB8fCBbXTtcbiAgICB3YXRjaChbJ3R5cGUnLCAnc2VuZFJlbWluZGVyJywgJ3VwbG9hZEltYWdlJywgLi4uZmllbGRzVG9XYXRjaF0pO1xuICB9LCBbc2VsZWN0ZWRDaGFubmVsPy5vcHRpb25zLCB3YXRjaF0pO1xuXG4gIGNvbnN0IGN1cnJlbnRGb3JtVmFsdWVzID0gZ2V0VmFsdWVzKCk7XG5cbiAgaWYgKCFzZWxlY3RlZENoYW5uZWwpIHtcbiAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JdGVtfT5cbiAgICAgICAgPEJhc2ljU2V0dGluZ3NcbiAgICAgICAgICBzZWxlY3RlZENoYW5uZWw9e3NlbGVjdGVkQ2hhbm5lbH1cbiAgICAgICAgICBjaGFubmVscz17c2VsZWN0YWJsZUNoYW5uZWxzfVxuICAgICAgICAgIHNlY3VyZUZpZWxkcz17c2VjdXJlRmllbGRzfVxuICAgICAgICAgIHJlc2V0U2VjdXJlRmllbGQ9e3Jlc2V0U2VjdXJlRmllbGR9XG4gICAgICAgICAgY3VycmVudEZvcm1WYWx1ZXM9e2N1cnJlbnRGb3JtVmFsdWVzfVxuICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogSWYgdGhlcmUgYXJlIG5vIG5vbi1yZXF1aXJlZCBmaWVsZHMsIGRvbid0IHJlbmRlciB0aGlzIHNlY3Rpb24qL31cbiAgICAgIHtzZWxlY3RlZENoYW5uZWwub3B0aW9ucy5maWx0ZXIoKG8pID0+ICFvLnJlcXVpcmVkKS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSXRlbX0+XG4gICAgICAgICAgPENoYW5uZWxTZXR0aW5nc1xuICAgICAgICAgICAgc2VsZWN0ZWRDaGFubmVsPXtzZWxlY3RlZENoYW5uZWx9XG4gICAgICAgICAgICBzZWN1cmVGaWVsZHM9e3NlY3VyZUZpZWxkc31cbiAgICAgICAgICAgIHJlc2V0U2VjdXJlRmllbGQ9e3Jlc2V0U2VjdXJlRmllbGR9XG4gICAgICAgICAgICBjdXJyZW50Rm9ybVZhbHVlcz17Y3VycmVudEZvcm1WYWx1ZXN9XG4gICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSXRlbX0+XG4gICAgICAgIDxOb3RpZmljYXRpb25TZXR0aW5nc1xuICAgICAgICAgIGltYWdlUmVuZGVyZXJBdmFpbGFibGU9e2ltYWdlUmVuZGVyZXJBdmFpbGFibGV9XG4gICAgICAgICAgY3VycmVudEZvcm1WYWx1ZXM9e2N1cnJlbnRGb3JtVmFsdWVzfVxuICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1CdXR0b25zfT5cbiAgICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IG9uVGVzdENoYW5uZWwoZ2V0VmFsdWVzKCkpfT5cbiAgICAgICAgICAgIFRlc3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8YSBocmVmPXtgJHtjb25maWcuYXBwU3ViVXJsfS9hbGVydGluZy9ub3RpZmljYXRpb25zYH0+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9IHN0eWxlc0ZhY3RvcnkoKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmb3JtQ29udGFpbmVyOiBjc3NgYCxcbiAgICBmb3JtSXRlbTogY3NzYFxuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgcGFkZGluZy10b3A6ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgYCxcbiAgICBmb3JtQnV0dG9uczogY3NzYFxuICAgICAgcGFkZGluZy10b3A6ICR7dGhlbWUuc3BhY2luZy54bH07XG4gICAgYCxcbiAgfTtcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIEZpZWxkLCBJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbERUTywgTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiwgTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0nO1xuaW1wb3J0IHsgT3B0aW9uRWxlbWVudCB9IGZyb20gJy4vT3B0aW9uRWxlbWVudCc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIE5vdGlmaWNhdGlvblNldHRpbmdzUHJvcHMge1xuICBzZWxlY3RlZENoYW5uZWxPcHRpb25zOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uW107XG4gIGN1cnJlbnRGb3JtVmFsdWVzOiBOb3RpZmljYXRpb25DaGFubmVsRFRPO1xuICBzZWN1cmVGaWVsZHM6IE5vdGlmaWNhdGlvbkNoYW5uZWxTZWN1cmVGaWVsZHM7XG5cbiAgb25SZXNldFNlY3VyZUZpZWxkOiAoa2V5OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uczogRkM8UHJvcHM+ID0gKHtcbiAgY29udHJvbCxcbiAgY3VycmVudEZvcm1WYWx1ZXMsXG4gIGVycm9ycyxcbiAgc2VsZWN0ZWRDaGFubmVsT3B0aW9ucyxcbiAgcmVnaXN0ZXIsXG4gIG9uUmVzZXRTZWN1cmVGaWVsZCxcbiAgc2VjdXJlRmllbGRzLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2VsZWN0ZWRDaGFubmVsT3B0aW9ucy5tYXAoKG9wdGlvbjogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBgJHtvcHRpb24ubGFiZWx9LSR7aW5kZXh9YDtcbiAgICAgICAgLy8gU29tZSBvcHRpb25zIGNhbiBiZSBkZXBlbmRlbnQgb24gb3RoZXIgb3B0aW9ucywgdGhpcyBkZXRlcm1pbmVzIHdoYXQgaXMgc2VsZWN0ZWQgaW4gdGhlIGRlcGVuZGVuY3kgb3B0aW9uc1xuICAgICAgICAvLyBJIHRoaW5rIHRoaXMgbmVlZHMgbW9yZSB0aG91Z2h0LlxuICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvblZhbHVlID1cbiAgICAgICAgICBjdXJyZW50Rm9ybVZhbHVlc1tgc2V0dGluZ3MuJHtvcHRpb24uc2hvd1doZW4uZmllbGR9YF0gJiZcbiAgICAgICAgICAoY3VycmVudEZvcm1WYWx1ZXNbYHNldHRpbmdzLiR7b3B0aW9uLnNob3dXaGVuLmZpZWxkfWBdIGFzIFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KS52YWx1ZTtcblxuICAgICAgICBpZiAob3B0aW9uLnNob3dXaGVuLmZpZWxkICYmIHNlbGVjdGVkT3B0aW9uVmFsdWUgIT09IG9wdGlvbi5zaG93V2hlbi5pcykge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbi5lbGVtZW50ID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGaWVsZCBrZXk9e2tleX0+XG4gICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcbiAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWN1cmUgPyBgc2VjdXJlU2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWAgOiBgc2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e29wdGlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICBsYWJlbD17b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e29wdGlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGludmFsaWQ9e2Vycm9ycy5zZXR0aW5ncyAmJiAhIWVycm9ycy5zZXR0aW5nc1tvcHRpb24ucHJvcGVydHlOYW1lXX1cbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuc2V0dGluZ3MgJiYgZXJyb3JzLnNldHRpbmdzW29wdGlvbi5wcm9wZXJ0eU5hbWVdPy5tZXNzYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWN1cmVGaWVsZHMgJiYgc2VjdXJlRmllbGRzW29wdGlvbi5wcm9wZXJ0eU5hbWVdID8gKFxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cIkNvbmZpZ3VyZWRcIlxuICAgICAgICAgICAgICAgIHN1ZmZpeD17XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUmVzZXRTZWN1cmVGaWVsZChvcHRpb24ucHJvcGVydHlOYW1lKX0gZmlsbD1cInRleHRcIiB0eXBlPVwiYnV0dG9uXCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICAgICAgICAgIENsZWFyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8T3B0aW9uRWxlbWVudCBvcHRpb249e29wdGlvbn0gcmVnaXN0ZXI9e3JlZ2lzdGVyfSBjb250cm9sPXtjb250cm9sfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDaGVja2JveCwgQ29sbGFwc2FibGVTZWN0aW9uLCBGaWVsZCwgSW5mb0JveCwgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvblNldHRpbmdzUHJvcHMgfSBmcm9tICcuL05vdGlmaWNhdGlvbkNoYW5uZWxGb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB7XG4gIGltYWdlUmVuZGVyZXJBdmFpbGFibGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25TZXR0aW5nczogRkM8UHJvcHM+ID0gKHsgY3VycmVudEZvcm1WYWx1ZXMsIGltYWdlUmVuZGVyZXJBdmFpbGFibGUsIHJlZ2lzdGVyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29sbGFwc2FibGVTZWN0aW9uIGxhYmVsPVwiTm90aWZpY2F0aW9uIHNldHRpbmdzXCIgaXNPcGVuPXtmYWxzZX0+XG4gICAgICA8RmllbGQ+XG4gICAgICAgIDxDaGVja2JveCB7Li4ucmVnaXN0ZXIoJ2lzRGVmYXVsdCcpfSBsYWJlbD1cIkRlZmF1bHRcIiBkZXNjcmlwdGlvbj1cIlVzZSB0aGlzIG5vdGlmaWNhdGlvbiBmb3IgYWxsIGFsZXJ0c1wiIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPEZpZWxkPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3NldHRpbmdzLnVwbG9hZEltYWdlJyl9XG4gICAgICAgICAgbGFiZWw9XCJJbmNsdWRlIGltYWdlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNhcHR1cmVzIGFuIGltYWdlIGFuZCBpbmNsdWRlIGl0IGluIHRoZSBub3RpZmljYXRpb25cIlxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIHtjdXJyZW50Rm9ybVZhbHVlcy51cGxvYWRJbWFnZSAmJiAhaW1hZ2VSZW5kZXJlckF2YWlsYWJsZSAmJiAoXG4gICAgICAgIDxJbmZvQm94IHRpdGxlPVwiTm8gaW1hZ2UgcmVuZGVyZXIgYXZhaWxhYmxlL2luc3RhbGxlZFwiPlxuICAgICAgICAgIEdyYWZhbmEgY2Fubm90IGZpbmQgYW4gaW1hZ2UgcmVuZGVyZXIgdG8gY2FwdHVyZSBhbiBpbWFnZSBmb3IgdGhlIG5vdGlmaWNhdGlvbi4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgR3JhZmFuYVxuICAgICAgICAgIEltYWdlIFJlbmRlcmVyIHBsdWdpbiBpcyBpbnN0YWxsZWQuIFBsZWFzZSBjb250YWN0IHlvdXIgR3JhZmFuYSBhZG1pbmlzdHJhdG9yIHRvIGluc3RhbGwgdGhlIHBsdWdpbi5cbiAgICAgICAgPC9JbmZvQm94PlxuICAgICAgKX1cbiAgICAgIDxGaWVsZD5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdkaXNhYmxlUmVzb2x2ZU1lc3NhZ2UnKX1cbiAgICAgICAgICBsYWJlbD1cIkRpc2FibGUgUmVzb2x2ZSBNZXNzYWdlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpc2FibGUgdGhlIHJlc29sdmUgbWVzc2FnZSBbT0tdIHRoYXQgaXMgc2VudCB3aGVuIGFsZXJ0aW5nIHN0YXRlIHJldHVybnMgdG8gZmFsc2VcIlxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxGaWVsZD5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdzZW5kUmVtaW5kZXInKX1cbiAgICAgICAgICBsYWJlbD1cIlNlbmQgcmVtaW5kZXJzXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNlbmQgYWRkaXRpb25hbCBub3RpZmljYXRpb25zIGZvciB0cmlnZ2VyZWQgYWxlcnRzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICB7Y3VycmVudEZvcm1WYWx1ZXMuc2VuZFJlbWluZGVyICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiU2VuZCByZW1pbmRlciBldmVyeVwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNwZWNpZnkgaG93IG9mdGVuIHJlbWluZGVycyBzaG91bGQgYmUgc2VudCwgZS5nLiBldmVyeSAzMHMsIDFtLCAxMG0sIDMwbScsIG9yIDFoIGV0Yy5cbiAgICAgICAgICAgIEFsZXJ0IHJlbWluZGVycyBhcmUgc2VudCBhZnRlciBydWxlcyBhcmUgZXZhbHVhdGVkLiBBIHJlbWluZGVyIGNhbiBuZXZlciBiZSBzZW50IG1vcmUgZnJlcXVlbnRseVxuICAgICAgICAgICAgdGhhbiBhIGNvbmZpZ3VyZWQgYWxlcnQgcnVsZSBldmFsdWF0aW9uIGludGVydmFsLlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0IHsuLi5yZWdpc3RlcignZnJlcXVlbmN5Jyl9IHdpZHRoPXs4fSAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0NvbGxhcHNhYmxlU2VjdGlvbj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEZvcm1BUEksIElucHV0LCBJbnB1dENvbnRyb2wsIFNlbGVjdCwgVGV4dEFyZWEgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb24gfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFBpY2s8Rm9ybUFQSTxhbnk+LCAncmVnaXN0ZXInIHwgJ2NvbnRyb2wnPiB7XG4gIG9wdGlvbjogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbjtcbiAgaW52YWxpZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBPcHRpb25FbGVtZW50OiBGQzxQcm9wcz4gPSAoeyBjb250cm9sLCBvcHRpb24sIHJlZ2lzdGVyLCBpbnZhbGlkIH0pID0+IHtcbiAgY29uc3QgbW9kZWxWYWx1ZSA9IG9wdGlvbi5zZWN1cmUgPyBgc2VjdXJlU2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWAgOiBgc2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWA7XG4gIHN3aXRjaCAob3B0aW9uLmVsZW1lbnQpIHtcbiAgICBjYXNlICdpbnB1dCc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoYCR7bW9kZWxWYWx1ZX1gLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogb3B0aW9uLnJlcXVpcmVkID8gJ1JlcXVpcmVkJyA6IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICh2KSA9PiAob3B0aW9uLnZhbGlkYXRpb25SdWxlICE9PSAnJyA/IHZhbGlkYXRlT3B0aW9uKHYsIG9wdGlvbi52YWxpZGF0aW9uUnVsZSkgOiB0cnVlKSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgIHR5cGU9e29wdGlvbi5pbnB1dFR5cGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e29wdGlvbi5wbGFjZWhvbGRlcn1cbiAgICAgICAgLz5cbiAgICAgICk7XG5cbiAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgbmFtZT17YCR7bW9kZWxWYWx1ZX1gfVxuICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgIDxTZWxlY3Qgey4uLmZpZWxkfSBvcHRpb25zPXtvcHRpb24uc2VsZWN0T3B0aW9ucyA/PyB1bmRlZmluZWR9IGludmFsaWQ9e2ludmFsaWR9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG5cbiAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihgJHttb2RlbFZhbHVlfWAsIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBvcHRpb24ucmVxdWlyZWQgPyAnUmVxdWlyZWQnIDogZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKHYpID0+IChvcHRpb24udmFsaWRhdGlvblJ1bGUgIT09ICcnID8gdmFsaWRhdGVPcHRpb24odiwgb3B0aW9uLnZhbGlkYXRpb25SdWxlKSA6IHRydWUpLFxuICAgICAgICAgIH0pfVxuICAgICAgICAvPlxuICAgICAgKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmVycm9yKCdFbGVtZW50IG5vdCBzdXBwb3J0ZWQnLCBvcHRpb24uZWxlbWVudCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgdmFsaWRhdGVPcHRpb24gPSAodmFsdWU6IHN0cmluZywgdmFsaWRhdGlvblJ1bGU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gUmVnRXhwKHZhbGlkYXRpb25SdWxlKS50ZXN0KHZhbHVlKSA/IHRydWUgOiAnSW52YWxpZCBmb3JtYXQnO1xufTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgbm90aWZ5QXBwIH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiwgY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiB9IGZyb20gJ2FwcC9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IEFsZXJ0UnVsZURUTywgTm90aWZpZXJEVE8sIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgbG9hZEFsZXJ0UnVsZXMsIGxvYWRlZEFsZXJ0UnVsZXMsIG5vdGlmaWNhdGlvbkNoYW5uZWxMb2FkZWQsIHNldE5vdGlmaWNhdGlvbkNoYW5uZWxzIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGVydFJ1bGVzQXN5bmMob3B0aW9uczogeyBzdGF0ZTogc3RyaW5nIH0pOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChsb2FkQWxlcnRSdWxlcygpKTtcbiAgICBjb25zdCBydWxlczogQWxlcnRSdWxlRFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL2FsZXJ0cycsIG9wdGlvbnMpO1xuICAgIGRpc3BhdGNoKGxvYWRlZEFsZXJ0UnVsZXMocnVsZXMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVBhdXNlQWxlcnRSdWxlKGlkOiBudW1iZXIsIG9wdGlvbnM6IHsgcGF1c2VkOiBib29sZWFuIH0pOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS9hbGVydHMvJHtpZH0vcGF1c2VgLCBvcHRpb25zKTtcbiAgICBjb25zdCBzdGF0ZUZpbHRlciA9IGxvY2F0aW9uU2VydmljZS5nZXRTZWFyY2hPYmplY3QoKS5zdGF0ZSB8fCAnYWxsJztcbiAgICBkaXNwYXRjaChnZXRBbGVydFJ1bGVzQXN5bmMoeyBzdGF0ZTogc3RhdGVGaWx0ZXIudG9TdHJpbmcoKSB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsKGRhdGE6IGFueSk6IFRodW5rUmVzdWx0PFByb21pc2U8dm9pZD4+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS9hbGVydC1ub3RpZmljYXRpb25zYCwgZGF0YSk7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbignTm90aWZpY2F0aW9uIGNyZWF0ZWQnKSkpO1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9hbGVydGluZy9ub3RpZmljYXRpb25zJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbihlcnJvci5kYXRhLmVycm9yKSkpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwoZGF0YTogYW55KTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvYWxlcnQtbm90aWZpY2F0aW9ucy8ke2RhdGEuaWR9YCwgZGF0YSk7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbignTm90aWZpY2F0aW9uIHVwZGF0ZWQnKSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oZXJyb3IuZGF0YS5lcnJvcikpKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbChkYXRhOiBhbnkpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgY29uc3QgY2hhbm5lbCA9IGdldFN0YXRlKCkubm90aWZpY2F0aW9uQ2hhbm5lbC5ub3RpZmljYXRpb25DaGFubmVsO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvdGVzdCcsIHsgaWQ6IGNoYW5uZWwuaWQsIC4uLmRhdGEgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTm90aWZpY2F0aW9uVHlwZXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgYWxlcnROb3RpZmllcnM6IE5vdGlmaWVyRFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL2FsZXJ0LW5vdGlmaWVyc2ApO1xuXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uVHlwZXMgPSBhbGVydE5vdGlmaWVycy5zb3J0KChvMSwgbzIpID0+IHtcbiAgICAgIGlmIChvMS5uYW1lID4gbzIubmFtZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9KTtcblxuICAgIGRpc3BhdGNoKHNldE5vdGlmaWNhdGlvbkNoYW5uZWxzKG5vdGlmaWNhdGlvblR5cGVzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbChpZDogbnVtYmVyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZE5vdGlmaWNhdGlvblR5cGVzKCkpO1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbkNoYW5uZWwgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvJHtpZH1gKTtcbiAgICBkaXNwYXRjaChub3RpZmljYXRpb25DaGFubmVsTG9hZGVkKG5vdGlmaWNhdGlvbkNoYW5uZWwpKTtcbiAgfTtcbn1cbiIsImltcG9ydCBtZW1vaXplT25lIGZyb20gJ21lbW9pemUtb25lJztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8sIE5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRWYWx1ZXM6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8gPSB7XG4gIGlkOiAtMSxcbiAgbmFtZTogJycsXG4gIHR5cGU6IHsgdmFsdWU6ICdlbWFpbCcsIGxhYmVsOiAnRW1haWwnIH0sXG4gIHNlbmRSZW1pbmRlcjogZmFsc2UsXG4gIGRpc2FibGVSZXNvbHZlTWVzc2FnZTogZmFsc2UsXG4gIGZyZXF1ZW5jeTogJzE1bScsXG4gIHNldHRpbmdzOiB7XG4gICAgdXBsb2FkSW1hZ2U6IGNvbmZpZy5yZW5kZXJlckF2YWlsYWJsZSxcbiAgICBhdXRvUmVzb2x2ZTogdHJ1ZSxcbiAgICBodHRwTWV0aG9kOiAnUE9TVCcsXG4gICAgc2V2ZXJpdHk6ICdjcml0aWNhbCcsXG4gIH0sXG4gIHNlY3VyZVNldHRpbmdzOiB7fSxcbiAgc2VjdXJlRmllbGRzOiB7fSxcbiAgaXNEZWZhdWx0OiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBDaGFubmVsc1RvU2VsZWN0YWJsZVZhbHVlID0gbWVtb2l6ZU9uZShcbiAgKG5vdGlmaWNhdGlvbkNoYW5uZWxzOiBOb3RpZmljYXRpb25DaGFubmVsVHlwZVtdLCBpbmNsdWRlRGVzY3JpcHRpb246IGJvb2xlYW4pOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPT4ge1xuICAgIHJldHVybiBub3RpZmljYXRpb25DaGFubmVscy5tYXAoKGNoYW5uZWwpID0+IHtcbiAgICAgIGlmIChpbmNsdWRlRGVzY3JpcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogY2hhbm5lbC52YWx1ZSxcbiAgICAgICAgICBsYWJlbDogY2hhbm5lbC5sYWJlbCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hhbm5lbC5kZXNjcmlwdGlvbixcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBjaGFubmVsLnZhbHVlLFxuICAgICAgICBsYWJlbDogY2hhbm5lbC5sYWJlbCxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1TdWJtaXREYXRhID0gKGZvcm1EYXRhOiBOb3RpZmljYXRpb25DaGFubmVsRFRPKSA9PiB7XG4gIC8qXG4gICAgU29tZSBzZXR0aW5ncyBjYW4gYmUgb3B0aW9ucyBpbiBhIHNlbGVjdCwgaW4gb3JkZXIgdG8gbm90IHNhdmUgYSBTZWxlY3RhYmxlVmFsdWU8VD5cbiAgICB3ZSBuZWVkIHRvIHVzZSBjaGVjayBpZiBpdCBpcyBhIFNlbGVjdGFibGVWYWx1ZSBhbmQgdXNlIGl0cyB2YWx1ZS5cbiAgKi9cbiAgY29uc3Qgc2V0dGluZ3MgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgT2JqZWN0LmVudHJpZXMoZm9ybURhdGEuc2V0dGluZ3MpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICByZXR1cm4gW2tleSwgdmFsdWUgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyB2YWx1ZS52YWx1ZSA6IHZhbHVlXTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgLi4uZGVmYXVsdFZhbHVlcyxcbiAgICAuLi5mb3JtRGF0YSxcbiAgICBmcmVxdWVuY3k6IGZvcm1EYXRhLmZyZXF1ZW5jeSA9PT0gJycgPyBkZWZhdWx0VmFsdWVzLmZyZXF1ZW5jeSA6IGZvcm1EYXRhLmZyZXF1ZW5jeSxcbiAgICB0eXBlOiBmb3JtRGF0YS50eXBlLnZhbHVlLFxuICAgIHNldHRpbmdzOiB7IC4uLmRlZmF1bHRWYWx1ZXMuc2V0dGluZ3MsIC4uLnNldHRpbmdzIH0sXG4gICAgc2VjdXJlU2V0dGluZ3M6IHsgLi4uZm9ybURhdGEuc2VjdXJlU2V0dGluZ3MgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1UZXN0RGF0YSA9IChmb3JtRGF0YTogTm90aWZpY2F0aW9uQ2hhbm5lbERUTykgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGZvcm1EYXRhLm5hbWUsXG4gICAgdHlwZTogZm9ybURhdGEudHlwZS52YWx1ZSxcbiAgICBmcmVxdWVuY3k6IGZvcm1EYXRhLmZyZXF1ZW5jeSA/PyBkZWZhdWx0VmFsdWVzLmZyZXF1ZW5jeSxcbiAgICBzZXR0aW5nczogeyAuLi5PYmplY3QuYXNzaWduKGRlZmF1bHRWYWx1ZXMuc2V0dGluZ3MsIGZvcm1EYXRhLnNldHRpbmdzKSB9LFxuICAgIHNlY3VyZVNldHRpbmdzOiB7IC4uLmZvcm1EYXRhLnNlY3VyZVNldHRpbmdzIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImhvaXN0Tm9uUmVhY3RTdGF0aWNzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJjb25uZWN0IiwidXNlRGlzcGF0Y2giLCJjbGVhblVwQWN0aW9uIiwiY29ubmVjdFdpdGhDbGVhblVwIiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwic3RhdGVTZWxlY3RvciIsIkNvbXBvbmVudCIsIkNvbm5lY3RlZENvbXBvbmVudCIsIkNvbm5lY3RlZENvbXBvbmVudFdpdGhDbGVhblVwIiwicHJvcHMiLCJkaXNwYXRjaCIsImNsZWFuVXAiLCJkaXNwbGF5TmFtZSIsIlB1cmVDb21wb25lbnQiLCJjb25maWciLCJGb3JtIiwiU3Bpbm5lciIsIlBhZ2UiLCJnZXROYXZNb2RlbCIsIk5vdGlmaWNhdGlvbkNoYW5uZWxGb3JtIiwibG9hZE5vdGlmaWNhdGlvbkNoYW5uZWwiLCJ0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbCIsInVwZGF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwiLCJyZXNldFNlY3VyZUZpZWxkIiwibWFwQ2hhbm5lbHNUb1NlbGVjdGFibGVWYWx1ZSIsInRyYW5zZm9ybVN1Ym1pdERhdGEiLCJ0cmFuc2Zvcm1UZXN0RGF0YSIsIkVkaXROb3RpZmljYXRpb25DaGFubmVsUGFnZSIsImZvcm1EYXRhIiwibm90aWZpY2F0aW9uQ2hhbm5lbCIsInNldHRpbmdzIiwiaWQiLCJjb21wb25lbnREaWRNb3VudCIsInBhcnNlSW50IiwibWF0Y2giLCJwYXJhbXMiLCJyZW5kZXIiLCJuYXZNb2RlbCIsIm5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlcyIsIm9uU3VibWl0IiwidHlwZSIsImZpbmQiLCJuIiwidmFsdWUiLCJjb250cm9sIiwiZXJyb3JzIiwiZ2V0VmFsdWVzIiwicmVnaXN0ZXIiLCJ3YXRjaCIsInNlbGVjdGVkQ2hhbm5lbCIsImMiLCJyZW5kZXJlckF2YWlsYWJsZSIsIm9uVGVzdENoYW5uZWwiLCJzZWN1cmVGaWVsZHMiLCJzdGF0ZSIsIm5hdkluZGV4IiwiRmllbGQiLCJJbnB1dCIsIklucHV0Q29udHJvbCIsIlNlbGVjdCIsIk5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zIiwiQmFzaWNTZXR0aW5ncyIsImN1cnJlbnRGb3JtVmFsdWVzIiwiY2hhbm5lbHMiLCJuYW1lIiwibWVzc2FnZSIsInJlcXVpcmVkIiwiZmllbGQiLCJvcHRpb25zIiwiZmlsdGVyIiwibyIsIkFsZXJ0IiwiQ29sbGFwc2FibGVTZWN0aW9uIiwiQ2hhbm5lbFNldHRpbmdzIiwiaGVhZGluZyIsImluZm8iLCJjc3MiLCJCdXR0b24iLCJIb3Jpem9udGFsR3JvdXAiLCJzdHlsZXNGYWN0b3J5IiwidXNlVGhlbWUiLCJOb3RpZmljYXRpb25TZXR0aW5ncyIsInNlbGVjdGFibGVDaGFubmVscyIsImltYWdlUmVuZGVyZXJBdmFpbGFibGUiLCJzdHlsZXMiLCJnZXRTdHlsZXMiLCJmaWVsZHNUb1dhdGNoIiwiU2V0Iiwic2hvd1doZW4iLCJtYXAiLCJvcHRpb24iLCJmb3JtQ29udGFpbmVyIiwiZm9ybUl0ZW0iLCJsZW5ndGgiLCJmb3JtQnV0dG9ucyIsImFwcFN1YlVybCIsInRoZW1lIiwic3BhY2luZyIsIm1kIiwieGwiLCJDaGVja2JveCIsIk9wdGlvbkVsZW1lbnQiLCJzZWxlY3RlZENoYW5uZWxPcHRpb25zIiwib25SZXNldFNlY3VyZUZpZWxkIiwiaW5kZXgiLCJrZXkiLCJsYWJlbCIsInNlbGVjdGVkT3B0aW9uVmFsdWUiLCJpcyIsImVsZW1lbnQiLCJzZWN1cmUiLCJwcm9wZXJ0eU5hbWUiLCJkZXNjcmlwdGlvbiIsIkluZm9Cb3giLCJ1cGxvYWRJbWFnZSIsInNlbmRSZW1pbmRlciIsIlRleHRBcmVhIiwiaW52YWxpZCIsIm1vZGVsVmFsdWUiLCJ2YWxpZGF0ZSIsInYiLCJ2YWxpZGF0aW9uUnVsZSIsInZhbGlkYXRlT3B0aW9uIiwiaW5wdXRUeXBlIiwicGxhY2Vob2xkZXIiLCJzZWxlY3RPcHRpb25zIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImVycm9yIiwiUmVnRXhwIiwidGVzdCIsImdldEJhY2tlbmRTcnYiLCJsb2NhdGlvblNlcnZpY2UiLCJub3RpZnlBcHAiLCJjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiIsImNyZWF0ZVN1Y2Nlc3NOb3RpZmljYXRpb24iLCJsb2FkQWxlcnRSdWxlcyIsImxvYWRlZEFsZXJ0UnVsZXMiLCJub3RpZmljYXRpb25DaGFubmVsTG9hZGVkIiwic2V0Tm90aWZpY2F0aW9uQ2hhbm5lbHMiLCJnZXRBbGVydFJ1bGVzQXN5bmMiLCJydWxlcyIsImdldCIsInRvZ2dsZVBhdXNlQWxlcnRSdWxlIiwicG9zdCIsInN0YXRlRmlsdGVyIiwiZ2V0U2VhcmNoT2JqZWN0IiwidG9TdHJpbmciLCJjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsIiwiZGF0YSIsInB1c2giLCJwdXQiLCJnZXRTdGF0ZSIsImNoYW5uZWwiLCJsb2FkTm90aWZpY2F0aW9uVHlwZXMiLCJhbGVydE5vdGlmaWVycyIsIm5vdGlmaWNhdGlvblR5cGVzIiwic29ydCIsIm8xIiwibzIiLCJtZW1vaXplT25lIiwiZGVmYXVsdFZhbHVlcyIsImRpc2FibGVSZXNvbHZlTWVzc2FnZSIsImZyZXF1ZW5jeSIsImF1dG9SZXNvbHZlIiwiaHR0cE1ldGhvZCIsInNldmVyaXR5Iiwic2VjdXJlU2V0dGluZ3MiLCJpc0RlZmF1bHQiLCJub3RpZmljYXRpb25DaGFubmVscyIsImluY2x1ZGVEZXNjcmlwdGlvbiIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsImhhc093blByb3BlcnR5IiwiYXNzaWduIl0sInNvdXJjZVJvb3QiOiIifQ==