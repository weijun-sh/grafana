"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["NewNotificationChannel"],{

/***/ "./public/app/features/alerting/NewNotificationChannelPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _components_NotificationChannelForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/components/NotificationChannelForm.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");
/* harmony import */ var _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/utils/notificationChannels.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class NewNotificationChannelPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onSubmit", data => {
      this.props.createNotificationChannel((0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.transformSubmitData)(Object.assign({}, _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.defaultValues, data)));
    });

    _defineProperty(this, "onTestChannel", data => {
      this.props.testNotificationChannel((0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.transformTestData)(Object.assign({}, _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.defaultValues, data)));
    });
  }

  componentDidMount() {
    this.props.loadNotificationTypes();
  }

  render() {
    const {
      navModel,
      notificationChannelTypes
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__["default"].Contents, {
        children: [_h || (_h = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h2", {
          className: "page-sub-heading",
          children: "New notification channel"
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
          onSubmit: this.onSubmit,
          validateOn: "onChange",
          defaultValues: _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.defaultValues,
          maxWidth: 600,
          children: ({
            register,
            errors,
            control,
            getValues,
            watch
          }) => {
            const selectedChannel = notificationChannelTypes.find(c => c.value === getValues().type.value);
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_NotificationChannelForm__WEBPACK_IMPORTED_MODULE_6__.NotificationChannelForm, {
              selectableChannels: (0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_9__.mapChannelsToSelectableValue)(notificationChannelTypes, true),
              selectedChannel: selectedChannel,
              onTestChannel: this.onTestChannel,
              register: register,
              errors: errors,
              getValues: getValues,
              control: control,
              watch: watch,
              imageRendererAvailable: _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.rendererAvailable,
              resetSecureField: this.props.resetSecureField,
              secureFields: {}
            });
          }
        })]
      })
    });
  }

}

const mapStateToProps = state => ({
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_5__.getNavModel)(state.navIndex, 'channels'),
  notificationChannelTypes: state.notificationChannel.notificationChannelTypes
});

const mapDispatchToProps = {
  createNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_7__.createNotificationChannel,
  loadNotificationTypes: _state_actions__WEBPACK_IMPORTED_MODULE_7__.loadNotificationTypes,
  testNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_7__.testNotificationChannel,
  resetSecureField: _state_reducers__WEBPACK_IMPORTED_MODULE_8__.resetSecureField
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(NewNotificationChannelPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNSLFNBQVgscUVBQXdCN0ksYUFBYSxDQUFDNkksU0FIMUM7QUFJTG5ELElBQUFBLFFBQVEsb0JBQU80RCxNQUFNLENBQUNJLE1BQVAsQ0FBYzFKLGFBQWEsQ0FBQzBGLFFBQTVCLEVBQXNDMkQsUUFBUSxDQUFDM0QsUUFBL0MsQ0FBUCxDQUpIO0FBS0x1RCxJQUFBQSxjQUFjLG9CQUFPSSxRQUFRLENBQUNKLGNBQWhCO0FBTFQsR0FBUDtBQU9ELENBUk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9OZXdOb3RpZmljYXRpb25DaGFubmVsUGFnZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvY29tcG9uZW50cy9CYXNpY1NldHRpbmdzLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9jb21wb25lbnRzL0NoYW5uZWxTZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvY29tcG9uZW50cy9Ob3RpZmljYXRpb25DaGFubmVsRm9ybS50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvY29tcG9uZW50cy9Ob3RpZmljYXRpb25DaGFubmVsT3B0aW9ucy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvY29tcG9uZW50cy9Ob3RpZmljYXRpb25TZXR0aW5ncy50c3giLCJ3ZWJwYWNrOi8vZ3JhZmFuYS8uL3B1YmxpYy9hcHAvZmVhdHVyZXMvYWxlcnRpbmcvY29tcG9uZW50cy9PcHRpb25FbGVtZW50LnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3V0aWxzL25vdGlmaWNhdGlvbkNoYW5uZWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCwgQ29ubmVjdGVkUHJvcHMgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IGdldE5hdk1vZGVsIH0gZnJvbSAnYXBwL2NvcmUvc2VsZWN0b3JzL25hdk1vZGVsJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbERUTywgU3RvcmVTdGF0ZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0gfSBmcm9tICcuL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0nO1xuaW1wb3J0IHsgY3JlYXRlTm90aWZpY2F0aW9uQ2hhbm5lbCwgbG9hZE5vdGlmaWNhdGlvblR5cGVzLCB0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbCB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyByZXNldFNlY3VyZUZpZWxkIH0gZnJvbSAnLi9zdGF0ZS9yZWR1Y2Vycyc7XG5pbXBvcnQge1xuICBkZWZhdWx0VmFsdWVzLFxuICBtYXBDaGFubmVsc1RvU2VsZWN0YWJsZVZhbHVlLFxuICB0cmFuc2Zvcm1TdWJtaXREYXRhLFxuICB0cmFuc2Zvcm1UZXN0RGF0YSxcbn0gZnJvbSAnLi91dGlscy9ub3RpZmljYXRpb25DaGFubmVscyc7XG5cbmNsYXNzIE5ld05vdGlmaWNhdGlvbkNoYW5uZWxQYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmxvYWROb3RpZmljYXRpb25UeXBlcygpO1xuICB9XG5cbiAgb25TdWJtaXQgPSAoZGF0YTogTm90aWZpY2F0aW9uQ2hhbm5lbERUTykgPT4ge1xuICAgIHRoaXMucHJvcHMuY3JlYXRlTm90aWZpY2F0aW9uQ2hhbm5lbCh0cmFuc2Zvcm1TdWJtaXREYXRhKHsgLi4uZGVmYXVsdFZhbHVlcywgLi4uZGF0YSB9KSk7XG4gIH07XG5cbiAgb25UZXN0Q2hhbm5lbCA9IChkYXRhOiBOb3RpZmljYXRpb25DaGFubmVsRFRPKSA9PiB7XG4gICAgdGhpcy5wcm9wcy50ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbCh0cmFuc2Zvcm1UZXN0RGF0YSh7IC4uLmRlZmF1bHRWYWx1ZXMsIC4uLmRhdGEgfSkpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hdk1vZGVsLCBub3RpZmljYXRpb25DaGFubmVsVHlwZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHM+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2Utc3ViLWhlYWRpbmdcIj5OZXcgbm90aWZpY2F0aW9uIGNoYW5uZWw8L2gyPlxuICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSB2YWxpZGF0ZU9uPVwib25DaGFuZ2VcIiBkZWZhdWx0VmFsdWVzPXtkZWZhdWx0VmFsdWVzfSBtYXhXaWR0aD17NjAwfT5cbiAgICAgICAgICAgIHsoeyByZWdpc3RlciwgZXJyb3JzLCBjb250cm9sLCBnZXRWYWx1ZXMsIHdhdGNoIH0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaGFubmVsID0gbm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVzLmZpbmQoKGMpID0+IGMudmFsdWUgPT09IGdldFZhbHVlcygpLnR5cGUudmFsdWUpO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkNoYW5uZWxGb3JtXG4gICAgICAgICAgICAgICAgICBzZWxlY3RhYmxlQ2hhbm5lbHM9e21hcENoYW5uZWxzVG9TZWxlY3RhYmxlVmFsdWUobm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVzLCB0cnVlKX1cbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2hhbm5lbD17c2VsZWN0ZWRDaGFubmVsfVxuICAgICAgICAgICAgICAgICAgb25UZXN0Q2hhbm5lbD17dGhpcy5vblRlc3RDaGFubmVsfVxuICAgICAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICAgICAgICBnZXRWYWx1ZXM9e2dldFZhbHVlc31cbiAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgICAgICB3YXRjaD17d2F0Y2h9XG4gICAgICAgICAgICAgICAgICBpbWFnZVJlbmRlcmVyQXZhaWxhYmxlPXtjb25maWcucmVuZGVyZXJBdmFpbGFibGV9XG4gICAgICAgICAgICAgICAgICByZXNldFNlY3VyZUZpZWxkPXt0aGlzLnByb3BzLnJlc2V0U2VjdXJlRmllbGR9XG4gICAgICAgICAgICAgICAgICBzZWN1cmVGaWVsZHM9e3t9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9QYWdlLkNvbnRlbnRzPlxuICAgICAgPC9QYWdlPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdG9yZVN0YXRlKSA9PiAoe1xuICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdjaGFubmVscycpLFxuICBub3RpZmljYXRpb25DaGFubmVsVHlwZXM6IHN0YXRlLm5vdGlmaWNhdGlvbkNoYW5uZWwubm90aWZpY2F0aW9uQ2hhbm5lbFR5cGVzLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgY3JlYXRlTm90aWZpY2F0aW9uQ2hhbm5lbCxcbiAgbG9hZE5vdGlmaWNhdGlvblR5cGVzLFxuICB0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbCxcbiAgcmVzZXRTZWN1cmVGaWVsZCxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xudHlwZSBQcm9wcyA9IENvbm5lY3RlZFByb3BzPHR5cGVvZiBjb25uZWN0b3I+O1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdG9yKE5ld05vdGlmaWNhdGlvbkNoYW5uZWxQYWdlKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBGaWVsZCwgSW5wdXQsIElucHV0Q29udHJvbCwgU2VsZWN0IH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzLCBOb3RpZmljYXRpb25DaGFubmVsVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMgfSBmcm9tICcuL05vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB7XG4gIHNlbGVjdGVkQ2hhbm5lbDogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGU7XG4gIGNoYW5uZWxzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIHNlY3VyZUZpZWxkczogTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcztcbiAgcmVzZXRTZWN1cmVGaWVsZDogKGtleTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQmFzaWNTZXR0aW5nczogRkM8UHJvcHM+ID0gKHtcbiAgY29udHJvbCxcbiAgY3VycmVudEZvcm1WYWx1ZXMsXG4gIGVycm9ycyxcbiAgc2VjdXJlRmllbGRzLFxuICBzZWxlY3RlZENoYW5uZWwsXG4gIGNoYW5uZWxzLFxuICByZWdpc3RlcixcbiAgcmVzZXRTZWN1cmVGaWVsZCxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZpZWxkIGxhYmVsPVwiTmFtZVwiIGludmFsaWQ9eyEhZXJyb3JzLm5hbWV9IGVycm9yPXtlcnJvcnMubmFtZSAmJiBlcnJvcnMubmFtZS5tZXNzYWdlfT5cbiAgICAgICAgPElucHV0IHsuLi5yZWdpc3RlcignbmFtZScsIHsgcmVxdWlyZWQ6ICdOYW1lIGlzIHJlcXVpcmVkJyB9KX0gLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICA8RmllbGQgbGFiZWw9XCJUeXBlXCI+XG4gICAgICAgIDxJbnB1dENvbnRyb2xcbiAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZDogeyByZWYsIC4uLmZpZWxkIH0gfSkgPT4gPFNlbGVjdCB7Li4uZmllbGR9IG9wdGlvbnM9e2NoYW5uZWxzfSAvPn1cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB0cnVlIH19XG4gICAgICAgIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zXG4gICAgICAgIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM9e3NlbGVjdGVkQ2hhbm5lbC5vcHRpb25zLmZpbHRlcigobykgPT4gby5yZXF1aXJlZCl9XG4gICAgICAgIGN1cnJlbnRGb3JtVmFsdWVzPXtjdXJyZW50Rm9ybVZhbHVlc31cbiAgICAgICAgc2VjdXJlRmllbGRzPXtzZWN1cmVGaWVsZHN9XG4gICAgICAgIG9uUmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBbGVydCwgQ29sbGFwc2FibGVTZWN0aW9uIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25DaGFubmVsU2VjdXJlRmllbGRzLCBOb3RpZmljYXRpb25DaGFubmVsVHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbnMgfSBmcm9tICcuL05vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB7XG4gIHNlbGVjdGVkQ2hhbm5lbDogTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGU7XG4gIHNlY3VyZUZpZWxkczogTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcztcbiAgcmVzZXRTZWN1cmVGaWVsZDogKGtleTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQ2hhbm5lbFNldHRpbmdzOiBGQzxQcm9wcz4gPSAoe1xuICBjb250cm9sLFxuICBjdXJyZW50Rm9ybVZhbHVlcyxcbiAgZXJyb3JzLFxuICBzZWxlY3RlZENoYW5uZWwsXG4gIHNlY3VyZUZpZWxkcyxcbiAgcmVnaXN0ZXIsXG4gIHJlc2V0U2VjdXJlRmllbGQsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbGxhcHNhYmxlU2VjdGlvbiBsYWJlbD17YE9wdGlvbmFsICR7c2VsZWN0ZWRDaGFubmVsLmhlYWRpbmd9YH0gaXNPcGVuPXtmYWxzZX0+XG4gICAgICB7c2VsZWN0ZWRDaGFubmVsLmluZm8gIT09ICcnICYmIDxBbGVydCBzZXZlcml0eT1cImluZm9cIiB0aXRsZT17c2VsZWN0ZWRDaGFubmVsLmluZm8gPz8gJyd9IC8+fVxuICAgICAgPE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb25zXG4gICAgICAgIHNlbGVjdGVkQ2hhbm5lbE9wdGlvbnM9e3NlbGVjdGVkQ2hhbm5lbC5vcHRpb25zLmZpbHRlcigobykgPT4gIW8ucmVxdWlyZWQpfVxuICAgICAgICBjdXJyZW50Rm9ybVZhbHVlcz17Y3VycmVudEZvcm1WYWx1ZXN9XG4gICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgIG9uUmVzZXRTZWN1cmVGaWVsZD17cmVzZXRTZWN1cmVGaWVsZH1cbiAgICAgICAgc2VjdXJlRmllbGRzPXtzZWN1cmVGaWVsZHN9XG4gICAgICAvPlxuICAgIDwvQ29sbGFwc2FibGVTZWN0aW9uPlxuICApO1xufTtcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2Nzcyc7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhZmFuYVRoZW1lLCBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgRm9ybUFQSSwgSG9yaXpvbnRhbEdyb3VwLCBzdHlsZXNGYWN0b3J5LCB1c2VUaGVtZSwgU3Bpbm5lciB9IGZyb20gJ0BncmFmYW5hL3VpJztcbmltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbFR5cGUsIE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8sIE5vdGlmaWNhdGlvbkNoYW5uZWxTZWN1cmVGaWVsZHMgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmltcG9ydCB7IEJhc2ljU2V0dGluZ3MgfSBmcm9tICcuL0Jhc2ljU2V0dGluZ3MnO1xuaW1wb3J0IHsgQ2hhbm5lbFNldHRpbmdzIH0gZnJvbSAnLi9DaGFubmVsU2V0dGluZ3MnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V0dGluZ3MgfSBmcm9tICcuL05vdGlmaWNhdGlvblNldHRpbmdzJztcblxuaW50ZXJmYWNlIFByb3BzXG4gIGV4dGVuZHMgUGljazxGb3JtQVBJPE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8+LCAnY29udHJvbCcgfCAnZXJyb3JzJyB8ICdyZWdpc3RlcicgfCAnd2F0Y2gnIHwgJ2dldFZhbHVlcyc+IHtcbiAgc2VsZWN0YWJsZUNoYW5uZWxzOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj47XG4gIHNlbGVjdGVkQ2hhbm5lbD86IE5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlO1xuICBpbWFnZVJlbmRlcmVyQXZhaWxhYmxlOiBib29sZWFuO1xuICBzZWN1cmVGaWVsZHM6IE5vdGlmaWNhdGlvbkNoYW5uZWxTZWN1cmVGaWVsZHM7XG4gIHJlc2V0U2VjdXJlRmllbGQ6IChrZXk6IHN0cmluZykgPT4gdm9pZDtcbiAgb25UZXN0Q2hhbm5lbDogKGRhdGE6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wc1xuICBleHRlbmRzIFBpY2s8Rm9ybUFQSTxOb3RpZmljYXRpb25DaGFubmVsRFRPPiwgJ2NvbnRyb2wnIHwgJ2Vycm9ycycgfCAncmVnaXN0ZXInPiB7XG4gIGN1cnJlbnRGb3JtVmFsdWVzOiBOb3RpZmljYXRpb25DaGFubmVsRFRPO1xufVxuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm06IEZDPFByb3BzPiA9ICh7XG4gIGNvbnRyb2wsXG4gIGVycm9ycyxcbiAgc2VsZWN0ZWRDaGFubmVsLFxuICBzZWxlY3RhYmxlQ2hhbm5lbHMsXG4gIHJlZ2lzdGVyLFxuICB3YXRjaCxcbiAgZ2V0VmFsdWVzLFxuICBpbWFnZVJlbmRlcmVyQXZhaWxhYmxlLFxuICBvblRlc3RDaGFubmVsLFxuICByZXNldFNlY3VyZUZpZWxkLFxuICBzZWN1cmVGaWVsZHMsXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlcyh1c2VUaGVtZSgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8qXG4gICAgICBGaW5kIGZpZWxkcyB0aGF0IGhhdmUgZGVwZW5kZW5jaWVzIG9uIG90aGVyIGZpZWxkcyBhbmQgcmVtb3ZlcyBkdXBsaWNhdGVzLlxuICAgICAgTmVlZHMgdG8gYmUgcHJlZml4ZWQgd2l0aCBzZXR0aW5ncy5cbiAgICAqL1xuICAgIGNvbnN0IGZpZWxkc1RvV2F0Y2ggPVxuICAgICAgbmV3IFNldChcbiAgICAgICAgc2VsZWN0ZWRDaGFubmVsPy5vcHRpb25zXG4gICAgICAgICAgLmZpbHRlcigobykgPT4gby5zaG93V2hlbi5maWVsZClcbiAgICAgICAgICAubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgc2V0dGluZ3MuJHtvcHRpb24uc2hvd1doZW4uZmllbGR9YDtcbiAgICAgICAgICB9KVxuICAgICAgKSB8fCBbXTtcbiAgICB3YXRjaChbJ3R5cGUnLCAnc2VuZFJlbWluZGVyJywgJ3VwbG9hZEltYWdlJywgLi4uZmllbGRzVG9XYXRjaF0pO1xuICB9LCBbc2VsZWN0ZWRDaGFubmVsPy5vcHRpb25zLCB3YXRjaF0pO1xuXG4gIGNvbnN0IGN1cnJlbnRGb3JtVmFsdWVzID0gZ2V0VmFsdWVzKCk7XG5cbiAgaWYgKCFzZWxlY3RlZENoYW5uZWwpIHtcbiAgICByZXR1cm4gPFNwaW5uZXIgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JdGVtfT5cbiAgICAgICAgPEJhc2ljU2V0dGluZ3NcbiAgICAgICAgICBzZWxlY3RlZENoYW5uZWw9e3NlbGVjdGVkQ2hhbm5lbH1cbiAgICAgICAgICBjaGFubmVscz17c2VsZWN0YWJsZUNoYW5uZWxzfVxuICAgICAgICAgIHNlY3VyZUZpZWxkcz17c2VjdXJlRmllbGRzfVxuICAgICAgICAgIHJlc2V0U2VjdXJlRmllbGQ9e3Jlc2V0U2VjdXJlRmllbGR9XG4gICAgICAgICAgY3VycmVudEZvcm1WYWx1ZXM9e2N1cnJlbnRGb3JtVmFsdWVzfVxuICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogSWYgdGhlcmUgYXJlIG5vIG5vbi1yZXF1aXJlZCBmaWVsZHMsIGRvbid0IHJlbmRlciB0aGlzIHNlY3Rpb24qL31cbiAgICAgIHtzZWxlY3RlZENoYW5uZWwub3B0aW9ucy5maWx0ZXIoKG8pID0+ICFvLnJlcXVpcmVkKS5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSXRlbX0+XG4gICAgICAgICAgPENoYW5uZWxTZXR0aW5nc1xuICAgICAgICAgICAgc2VsZWN0ZWRDaGFubmVsPXtzZWxlY3RlZENoYW5uZWx9XG4gICAgICAgICAgICBzZWN1cmVGaWVsZHM9e3NlY3VyZUZpZWxkc31cbiAgICAgICAgICAgIHJlc2V0U2VjdXJlRmllbGQ9e3Jlc2V0U2VjdXJlRmllbGR9XG4gICAgICAgICAgICBjdXJyZW50Rm9ybVZhbHVlcz17Y3VycmVudEZvcm1WYWx1ZXN9XG4gICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSXRlbX0+XG4gICAgICAgIDxOb3RpZmljYXRpb25TZXR0aW5nc1xuICAgICAgICAgIGltYWdlUmVuZGVyZXJBdmFpbGFibGU9e2ltYWdlUmVuZGVyZXJBdmFpbGFibGV9XG4gICAgICAgICAgY3VycmVudEZvcm1WYWx1ZXM9e2N1cnJlbnRGb3JtVmFsdWVzfVxuICAgICAgICAgIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1CdXR0b25zfT5cbiAgICAgICAgPEhvcml6b250YWxHcm91cD5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IG9uVGVzdENoYW5uZWwoZ2V0VmFsdWVzKCkpfT5cbiAgICAgICAgICAgIFRlc3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8YSBocmVmPXtgJHtjb25maWcuYXBwU3ViVXJsfS9hbGVydGluZy9ub3RpZmljYXRpb25zYH0+XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9Ib3Jpem9udGFsR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGdldFN0eWxlcyA9IHN0eWxlc0ZhY3RvcnkoKHRoZW1lOiBHcmFmYW5hVGhlbWUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBmb3JtQ29udGFpbmVyOiBjc3NgYCxcbiAgICBmb3JtSXRlbTogY3NzYFxuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgcGFkZGluZy10b3A6ICR7dGhlbWUuc3BhY2luZy5tZH07XG4gICAgYCxcbiAgICBmb3JtQnV0dG9uczogY3NzYFxuICAgICAgcGFkZGluZy10b3A6ICR7dGhlbWUuc3BhY2luZy54bH07XG4gICAgYCxcbiAgfTtcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBTZWxlY3RhYmxlVmFsdWUgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIEZpZWxkLCBJbnB1dCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ2hhbm5lbERUTywgTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiwgTm90aWZpY2F0aW9uQ2hhbm5lbFNlY3VyZUZpZWxkcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB9IGZyb20gJy4vTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0nO1xuaW1wb3J0IHsgT3B0aW9uRWxlbWVudCB9IGZyb20gJy4vT3B0aW9uRWxlbWVudCc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIE5vdGlmaWNhdGlvblNldHRpbmdzUHJvcHMge1xuICBzZWxlY3RlZENoYW5uZWxPcHRpb25zOiBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uW107XG4gIGN1cnJlbnRGb3JtVmFsdWVzOiBOb3RpZmljYXRpb25DaGFubmVsRFRPO1xuICBzZWN1cmVGaWVsZHM6IE5vdGlmaWNhdGlvbkNoYW5uZWxTZWN1cmVGaWVsZHM7XG5cbiAgb25SZXNldFNlY3VyZUZpZWxkOiAoa2V5OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25DaGFubmVsT3B0aW9uczogRkM8UHJvcHM+ID0gKHtcbiAgY29udHJvbCxcbiAgY3VycmVudEZvcm1WYWx1ZXMsXG4gIGVycm9ycyxcbiAgc2VsZWN0ZWRDaGFubmVsT3B0aW9ucyxcbiAgcmVnaXN0ZXIsXG4gIG9uUmVzZXRTZWN1cmVGaWVsZCxcbiAgc2VjdXJlRmllbGRzLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2VsZWN0ZWRDaGFubmVsT3B0aW9ucy5tYXAoKG9wdGlvbjogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBgJHtvcHRpb24ubGFiZWx9LSR7aW5kZXh9YDtcbiAgICAgICAgLy8gU29tZSBvcHRpb25zIGNhbiBiZSBkZXBlbmRlbnQgb24gb3RoZXIgb3B0aW9ucywgdGhpcyBkZXRlcm1pbmVzIHdoYXQgaXMgc2VsZWN0ZWQgaW4gdGhlIGRlcGVuZGVuY3kgb3B0aW9uc1xuICAgICAgICAvLyBJIHRoaW5rIHRoaXMgbmVlZHMgbW9yZSB0aG91Z2h0LlxuICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvblZhbHVlID1cbiAgICAgICAgICBjdXJyZW50Rm9ybVZhbHVlc1tgc2V0dGluZ3MuJHtvcHRpb24uc2hvd1doZW4uZmllbGR9YF0gJiZcbiAgICAgICAgICAoY3VycmVudEZvcm1WYWx1ZXNbYHNldHRpbmdzLiR7b3B0aW9uLnNob3dXaGVuLmZpZWxkfWBdIGFzIFNlbGVjdGFibGVWYWx1ZTxzdHJpbmc+KS52YWx1ZTtcblxuICAgICAgICBpZiAob3B0aW9uLnNob3dXaGVuLmZpZWxkICYmIHNlbGVjdGVkT3B0aW9uVmFsdWUgIT09IG9wdGlvbi5zaG93V2hlbi5pcykge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbi5lbGVtZW50ID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGaWVsZCBrZXk9e2tleX0+XG4gICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcbiAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWN1cmUgPyBgc2VjdXJlU2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWAgOiBgc2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e29wdGlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICBsYWJlbD17b3B0aW9uLmxhYmVsfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e29wdGlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGludmFsaWQ9e2Vycm9ycy5zZXR0aW5ncyAmJiAhIWVycm9ycy5zZXR0aW5nc1tvcHRpb24ucHJvcGVydHlOYW1lXX1cbiAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuc2V0dGluZ3MgJiYgZXJyb3JzLnNldHRpbmdzW29wdGlvbi5wcm9wZXJ0eU5hbWVdPy5tZXNzYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzZWN1cmVGaWVsZHMgJiYgc2VjdXJlRmllbGRzW29wdGlvbi5wcm9wZXJ0eU5hbWVdID8gKFxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cbiAgICAgICAgICAgICAgICB2YWx1ZT1cIkNvbmZpZ3VyZWRcIlxuICAgICAgICAgICAgICAgIHN1ZmZpeD17XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUmVzZXRTZWN1cmVGaWVsZChvcHRpb24ucHJvcGVydHlOYW1lKX0gZmlsbD1cInRleHRcIiB0eXBlPVwiYnV0dG9uXCIgc2l6ZT1cInNtXCI+XG4gICAgICAgICAgICAgICAgICAgIENsZWFyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8T3B0aW9uRWxlbWVudCBvcHRpb249e29wdGlvbn0gcmVnaXN0ZXI9e3JlZ2lzdGVyfSBjb250cm9sPXtjb250cm9sfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDaGVja2JveCwgQ29sbGFwc2FibGVTZWN0aW9uLCBGaWVsZCwgSW5mb0JveCwgSW5wdXQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvblNldHRpbmdzUHJvcHMgfSBmcm9tICcuL05vdGlmaWNhdGlvbkNoYW5uZWxGb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgTm90aWZpY2F0aW9uU2V0dGluZ3NQcm9wcyB7XG4gIGltYWdlUmVuZGVyZXJBdmFpbGFibGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25TZXR0aW5nczogRkM8UHJvcHM+ID0gKHsgY3VycmVudEZvcm1WYWx1ZXMsIGltYWdlUmVuZGVyZXJBdmFpbGFibGUsIHJlZ2lzdGVyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29sbGFwc2FibGVTZWN0aW9uIGxhYmVsPVwiTm90aWZpY2F0aW9uIHNldHRpbmdzXCIgaXNPcGVuPXtmYWxzZX0+XG4gICAgICA8RmllbGQ+XG4gICAgICAgIDxDaGVja2JveCB7Li4ucmVnaXN0ZXIoJ2lzRGVmYXVsdCcpfSBsYWJlbD1cIkRlZmF1bHRcIiBkZXNjcmlwdGlvbj1cIlVzZSB0aGlzIG5vdGlmaWNhdGlvbiBmb3IgYWxsIGFsZXJ0c1wiIC8+XG4gICAgICA8L0ZpZWxkPlxuICAgICAgPEZpZWxkPlxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ3NldHRpbmdzLnVwbG9hZEltYWdlJyl9XG4gICAgICAgICAgbGFiZWw9XCJJbmNsdWRlIGltYWdlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNhcHR1cmVzIGFuIGltYWdlIGFuZCBpbmNsdWRlIGl0IGluIHRoZSBub3RpZmljYXRpb25cIlxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIHtjdXJyZW50Rm9ybVZhbHVlcy51cGxvYWRJbWFnZSAmJiAhaW1hZ2VSZW5kZXJlckF2YWlsYWJsZSAmJiAoXG4gICAgICAgIDxJbmZvQm94IHRpdGxlPVwiTm8gaW1hZ2UgcmVuZGVyZXIgYXZhaWxhYmxlL2luc3RhbGxlZFwiPlxuICAgICAgICAgIEdyYWZhbmEgY2Fubm90IGZpbmQgYW4gaW1hZ2UgcmVuZGVyZXIgdG8gY2FwdHVyZSBhbiBpbWFnZSBmb3IgdGhlIG5vdGlmaWNhdGlvbi4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgR3JhZmFuYVxuICAgICAgICAgIEltYWdlIFJlbmRlcmVyIHBsdWdpbiBpcyBpbnN0YWxsZWQuIFBsZWFzZSBjb250YWN0IHlvdXIgR3JhZmFuYSBhZG1pbmlzdHJhdG9yIHRvIGluc3RhbGwgdGhlIHBsdWdpbi5cbiAgICAgICAgPC9JbmZvQm94PlxuICAgICAgKX1cbiAgICAgIDxGaWVsZD5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdkaXNhYmxlUmVzb2x2ZU1lc3NhZ2UnKX1cbiAgICAgICAgICBsYWJlbD1cIkRpc2FibGUgUmVzb2x2ZSBNZXNzYWdlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpc2FibGUgdGhlIHJlc29sdmUgbWVzc2FnZSBbT0tdIHRoYXQgaXMgc2VudCB3aGVuIGFsZXJ0aW5nIHN0YXRlIHJldHVybnMgdG8gZmFsc2VcIlxuICAgICAgICAvPlxuICAgICAgPC9GaWVsZD5cbiAgICAgIDxGaWVsZD5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgey4uLnJlZ2lzdGVyKCdzZW5kUmVtaW5kZXInKX1cbiAgICAgICAgICBsYWJlbD1cIlNlbmQgcmVtaW5kZXJzXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNlbmQgYWRkaXRpb25hbCBub3RpZmljYXRpb25zIGZvciB0cmlnZ2VyZWQgYWxlcnRzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvRmllbGQ+XG4gICAgICB7Y3VycmVudEZvcm1WYWx1ZXMuc2VuZFJlbWluZGVyICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiU2VuZCByZW1pbmRlciBldmVyeVwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNwZWNpZnkgaG93IG9mdGVuIHJlbWluZGVycyBzaG91bGQgYmUgc2VudCwgZS5nLiBldmVyeSAzMHMsIDFtLCAxMG0sIDMwbScsIG9yIDFoIGV0Yy5cbiAgICAgICAgICAgIEFsZXJ0IHJlbWluZGVycyBhcmUgc2VudCBhZnRlciBydWxlcyBhcmUgZXZhbHVhdGVkLiBBIHJlbWluZGVyIGNhbiBuZXZlciBiZSBzZW50IG1vcmUgZnJlcXVlbnRseVxuICAgICAgICAgICAgdGhhbiBhIGNvbmZpZ3VyZWQgYWxlcnQgcnVsZSBldmFsdWF0aW9uIGludGVydmFsLlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPElucHV0IHsuLi5yZWdpc3RlcignZnJlcXVlbmN5Jyl9IHdpZHRoPXs4fSAvPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0NvbGxhcHNhYmxlU2VjdGlvbj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEZvcm1BUEksIElucHV0LCBJbnB1dENvbnRyb2wsIFNlbGVjdCwgVGV4dEFyZWEgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxPcHRpb24gfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFBpY2s8Rm9ybUFQSTxhbnk+LCAncmVnaXN0ZXInIHwgJ2NvbnRyb2wnPiB7XG4gIG9wdGlvbjogTm90aWZpY2F0aW9uQ2hhbm5lbE9wdGlvbjtcbiAgaW52YWxpZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBPcHRpb25FbGVtZW50OiBGQzxQcm9wcz4gPSAoeyBjb250cm9sLCBvcHRpb24sIHJlZ2lzdGVyLCBpbnZhbGlkIH0pID0+IHtcbiAgY29uc3QgbW9kZWxWYWx1ZSA9IG9wdGlvbi5zZWN1cmUgPyBgc2VjdXJlU2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWAgOiBgc2V0dGluZ3MuJHtvcHRpb24ucHJvcGVydHlOYW1lfWA7XG4gIHN3aXRjaCAob3B0aW9uLmVsZW1lbnQpIHtcbiAgICBjYXNlICdpbnB1dCc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoYCR7bW9kZWxWYWx1ZX1gLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogb3B0aW9uLnJlcXVpcmVkID8gJ1JlcXVpcmVkJyA6IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICh2KSA9PiAob3B0aW9uLnZhbGlkYXRpb25SdWxlICE9PSAnJyA/IHZhbGlkYXRlT3B0aW9uKHYsIG9wdGlvbi52YWxpZGF0aW9uUnVsZSkgOiB0cnVlKSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgIHR5cGU9e29wdGlvbi5pbnB1dFR5cGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e29wdGlvbi5wbGFjZWhvbGRlcn1cbiAgICAgICAgLz5cbiAgICAgICk7XG5cbiAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPElucHV0Q29udHJvbFxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgbmFtZT17YCR7bW9kZWxWYWx1ZX1gfVxuICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQ6IHsgcmVmLCAuLi5maWVsZCB9IH0pID0+IChcbiAgICAgICAgICAgIDxTZWxlY3Qgey4uLmZpZWxkfSBvcHRpb25zPXtvcHRpb24uc2VsZWN0T3B0aW9ucyA/PyB1bmRlZmluZWR9IGludmFsaWQ9e2ludmFsaWR9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG5cbiAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICBpbnZhbGlkPXtpbnZhbGlkfVxuICAgICAgICAgIHsuLi5yZWdpc3RlcihgJHttb2RlbFZhbHVlfWAsIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBvcHRpb24ucmVxdWlyZWQgPyAnUmVxdWlyZWQnIDogZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKHYpID0+IChvcHRpb24udmFsaWRhdGlvblJ1bGUgIT09ICcnID8gdmFsaWRhdGVPcHRpb24odiwgb3B0aW9uLnZhbGlkYXRpb25SdWxlKSA6IHRydWUpLFxuICAgICAgICAgIH0pfVxuICAgICAgICAvPlxuICAgICAgKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmVycm9yKCdFbGVtZW50IG5vdCBzdXBwb3J0ZWQnLCBvcHRpb24uZWxlbWVudCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3QgdmFsaWRhdGVPcHRpb24gPSAodmFsdWU6IHN0cmluZywgdmFsaWRhdGlvblJ1bGU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gUmVnRXhwKHZhbGlkYXRpb25SdWxlKS50ZXN0KHZhbHVlKSA/IHRydWUgOiAnSW52YWxpZCBmb3JtYXQnO1xufTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgbm90aWZ5QXBwIH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiwgY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiB9IGZyb20gJ2FwcC9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IEFsZXJ0UnVsZURUTywgTm90aWZpZXJEVE8sIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgbG9hZEFsZXJ0UnVsZXMsIGxvYWRlZEFsZXJ0UnVsZXMsIG5vdGlmaWNhdGlvbkNoYW5uZWxMb2FkZWQsIHNldE5vdGlmaWNhdGlvbkNoYW5uZWxzIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGVydFJ1bGVzQXN5bmMob3B0aW9uczogeyBzdGF0ZTogc3RyaW5nIH0pOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChsb2FkQWxlcnRSdWxlcygpKTtcbiAgICBjb25zdCBydWxlczogQWxlcnRSdWxlRFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL2FsZXJ0cycsIG9wdGlvbnMpO1xuICAgIGRpc3BhdGNoKGxvYWRlZEFsZXJ0UnVsZXMocnVsZXMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVBhdXNlQWxlcnRSdWxlKGlkOiBudW1iZXIsIG9wdGlvbnM6IHsgcGF1c2VkOiBib29sZWFuIH0pOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS9hbGVydHMvJHtpZH0vcGF1c2VgLCBvcHRpb25zKTtcbiAgICBjb25zdCBzdGF0ZUZpbHRlciA9IGxvY2F0aW9uU2VydmljZS5nZXRTZWFyY2hPYmplY3QoKS5zdGF0ZSB8fCAnYWxsJztcbiAgICBkaXNwYXRjaChnZXRBbGVydFJ1bGVzQXN5bmMoeyBzdGF0ZTogc3RhdGVGaWx0ZXIudG9TdHJpbmcoKSB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsKGRhdGE6IGFueSk6IFRodW5rUmVzdWx0PFByb21pc2U8dm9pZD4+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS9hbGVydC1ub3RpZmljYXRpb25zYCwgZGF0YSk7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbignTm90aWZpY2F0aW9uIGNyZWF0ZWQnKSkpO1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9hbGVydGluZy9ub3RpZmljYXRpb25zJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbihlcnJvci5kYXRhLmVycm9yKSkpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwoZGF0YTogYW55KTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvYWxlcnQtbm90aWZpY2F0aW9ucy8ke2RhdGEuaWR9YCwgZGF0YSk7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbignTm90aWZpY2F0aW9uIHVwZGF0ZWQnKSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oZXJyb3IuZGF0YS5lcnJvcikpKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbChkYXRhOiBhbnkpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgY29uc3QgY2hhbm5lbCA9IGdldFN0YXRlKCkubm90aWZpY2F0aW9uQ2hhbm5lbC5ub3RpZmljYXRpb25DaGFubmVsO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvdGVzdCcsIHsgaWQ6IGNoYW5uZWwuaWQsIC4uLmRhdGEgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTm90aWZpY2F0aW9uVHlwZXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgYWxlcnROb3RpZmllcnM6IE5vdGlmaWVyRFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL2FsZXJ0LW5vdGlmaWVyc2ApO1xuXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uVHlwZXMgPSBhbGVydE5vdGlmaWVycy5zb3J0KChvMSwgbzIpID0+IHtcbiAgICAgIGlmIChvMS5uYW1lID4gbzIubmFtZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9KTtcblxuICAgIGRpc3BhdGNoKHNldE5vdGlmaWNhdGlvbkNoYW5uZWxzKG5vdGlmaWNhdGlvblR5cGVzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbChpZDogbnVtYmVyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZE5vdGlmaWNhdGlvblR5cGVzKCkpO1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbkNoYW5uZWwgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvJHtpZH1gKTtcbiAgICBkaXNwYXRjaChub3RpZmljYXRpb25DaGFubmVsTG9hZGVkKG5vdGlmaWNhdGlvbkNoYW5uZWwpKTtcbiAgfTtcbn1cbiIsImltcG9ydCBtZW1vaXplT25lIGZyb20gJ21lbW9pemUtb25lJztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZ3JhZmFuYS9ydW50aW1lJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8sIE5vdGlmaWNhdGlvbkNoYW5uZWxUeXBlIH0gZnJvbSAnYXBwL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRWYWx1ZXM6IE5vdGlmaWNhdGlvbkNoYW5uZWxEVE8gPSB7XG4gIGlkOiAtMSxcbiAgbmFtZTogJycsXG4gIHR5cGU6IHsgdmFsdWU6ICdlbWFpbCcsIGxhYmVsOiAnRW1haWwnIH0sXG4gIHNlbmRSZW1pbmRlcjogZmFsc2UsXG4gIGRpc2FibGVSZXNvbHZlTWVzc2FnZTogZmFsc2UsXG4gIGZyZXF1ZW5jeTogJzE1bScsXG4gIHNldHRpbmdzOiB7XG4gICAgdXBsb2FkSW1hZ2U6IGNvbmZpZy5yZW5kZXJlckF2YWlsYWJsZSxcbiAgICBhdXRvUmVzb2x2ZTogdHJ1ZSxcbiAgICBodHRwTWV0aG9kOiAnUE9TVCcsXG4gICAgc2V2ZXJpdHk6ICdjcml0aWNhbCcsXG4gIH0sXG4gIHNlY3VyZVNldHRpbmdzOiB7fSxcbiAgc2VjdXJlRmllbGRzOiB7fSxcbiAgaXNEZWZhdWx0OiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBDaGFubmVsc1RvU2VsZWN0YWJsZVZhbHVlID0gbWVtb2l6ZU9uZShcbiAgKG5vdGlmaWNhdGlvbkNoYW5uZWxzOiBOb3RpZmljYXRpb25DaGFubmVsVHlwZVtdLCBpbmNsdWRlRGVzY3JpcHRpb246IGJvb2xlYW4pOiBBcnJheTxTZWxlY3RhYmxlVmFsdWU8c3RyaW5nPj4gPT4ge1xuICAgIHJldHVybiBub3RpZmljYXRpb25DaGFubmVscy5tYXAoKGNoYW5uZWwpID0+IHtcbiAgICAgIGlmIChpbmNsdWRlRGVzY3JpcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogY2hhbm5lbC52YWx1ZSxcbiAgICAgICAgICBsYWJlbDogY2hhbm5lbC5sYWJlbCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hhbm5lbC5kZXNjcmlwdGlvbixcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBjaGFubmVsLnZhbHVlLFxuICAgICAgICBsYWJlbDogY2hhbm5lbC5sYWJlbCxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbik7XG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1TdWJtaXREYXRhID0gKGZvcm1EYXRhOiBOb3RpZmljYXRpb25DaGFubmVsRFRPKSA9PiB7XG4gIC8qXG4gICAgU29tZSBzZXR0aW5ncyBjYW4gYmUgb3B0aW9ucyBpbiBhIHNlbGVjdCwgaW4gb3JkZXIgdG8gbm90IHNhdmUgYSBTZWxlY3RhYmxlVmFsdWU8VD5cbiAgICB3ZSBuZWVkIHRvIHVzZSBjaGVjayBpZiBpdCBpcyBhIFNlbGVjdGFibGVWYWx1ZSBhbmQgdXNlIGl0cyB2YWx1ZS5cbiAgKi9cbiAgY29uc3Qgc2V0dGluZ3MgPSBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgT2JqZWN0LmVudHJpZXMoZm9ybURhdGEuc2V0dGluZ3MpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICByZXR1cm4gW2tleSwgdmFsdWUgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyB2YWx1ZS52YWx1ZSA6IHZhbHVlXTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgLi4uZGVmYXVsdFZhbHVlcyxcbiAgICAuLi5mb3JtRGF0YSxcbiAgICBmcmVxdWVuY3k6IGZvcm1EYXRhLmZyZXF1ZW5jeSA9PT0gJycgPyBkZWZhdWx0VmFsdWVzLmZyZXF1ZW5jeSA6IGZvcm1EYXRhLmZyZXF1ZW5jeSxcbiAgICB0eXBlOiBmb3JtRGF0YS50eXBlLnZhbHVlLFxuICAgIHNldHRpbmdzOiB7IC4uLmRlZmF1bHRWYWx1ZXMuc2V0dGluZ3MsIC4uLnNldHRpbmdzIH0sXG4gICAgc2VjdXJlU2V0dGluZ3M6IHsgLi4uZm9ybURhdGEuc2VjdXJlU2V0dGluZ3MgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1UZXN0RGF0YSA9IChmb3JtRGF0YTogTm90aWZpY2F0aW9uQ2hhbm5lbERUTykgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IGZvcm1EYXRhLm5hbWUsXG4gICAgdHlwZTogZm9ybURhdGEudHlwZS52YWx1ZSxcbiAgICBmcmVxdWVuY3k6IGZvcm1EYXRhLmZyZXF1ZW5jeSA/PyBkZWZhdWx0VmFsdWVzLmZyZXF1ZW5jeSxcbiAgICBzZXR0aW5nczogeyAuLi5PYmplY3QuYXNzaWduKGRlZmF1bHRWYWx1ZXMuc2V0dGluZ3MsIGZvcm1EYXRhLnNldHRpbmdzKSB9LFxuICAgIHNlY3VyZVNldHRpbmdzOiB7IC4uLmZvcm1EYXRhLnNlY3VyZVNldHRpbmdzIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsImNvbm5lY3QiLCJjb25maWciLCJGb3JtIiwiUGFnZSIsImdldE5hdk1vZGVsIiwiTm90aWZpY2F0aW9uQ2hhbm5lbEZvcm0iLCJjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsIiwibG9hZE5vdGlmaWNhdGlvblR5cGVzIiwidGVzdE5vdGlmaWNhdGlvbkNoYW5uZWwiLCJyZXNldFNlY3VyZUZpZWxkIiwiZGVmYXVsdFZhbHVlcyIsIm1hcENoYW5uZWxzVG9TZWxlY3RhYmxlVmFsdWUiLCJ0cmFuc2Zvcm1TdWJtaXREYXRhIiwidHJhbnNmb3JtVGVzdERhdGEiLCJOZXdOb3RpZmljYXRpb25DaGFubmVsUGFnZSIsImRhdGEiLCJwcm9wcyIsImNvbXBvbmVudERpZE1vdW50IiwicmVuZGVyIiwibmF2TW9kZWwiLCJub3RpZmljYXRpb25DaGFubmVsVHlwZXMiLCJvblN1Ym1pdCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiY29udHJvbCIsImdldFZhbHVlcyIsIndhdGNoIiwic2VsZWN0ZWRDaGFubmVsIiwiZmluZCIsImMiLCJ2YWx1ZSIsInR5cGUiLCJvblRlc3RDaGFubmVsIiwicmVuZGVyZXJBdmFpbGFibGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm5hdkluZGV4Iiwibm90aWZpY2F0aW9uQ2hhbm5lbCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIkZpZWxkIiwiSW5wdXQiLCJJbnB1dENvbnRyb2wiLCJTZWxlY3QiLCJOb3RpZmljYXRpb25DaGFubmVsT3B0aW9ucyIsIkJhc2ljU2V0dGluZ3MiLCJjdXJyZW50Rm9ybVZhbHVlcyIsInNlY3VyZUZpZWxkcyIsImNoYW5uZWxzIiwibmFtZSIsIm1lc3NhZ2UiLCJyZXF1aXJlZCIsImZpZWxkIiwib3B0aW9ucyIsImZpbHRlciIsIm8iLCJBbGVydCIsIkNvbGxhcHNhYmxlU2VjdGlvbiIsIkNoYW5uZWxTZXR0aW5ncyIsImhlYWRpbmciLCJpbmZvIiwiY3NzIiwidXNlRWZmZWN0IiwiQnV0dG9uIiwiSG9yaXpvbnRhbEdyb3VwIiwic3R5bGVzRmFjdG9yeSIsInVzZVRoZW1lIiwiU3Bpbm5lciIsIk5vdGlmaWNhdGlvblNldHRpbmdzIiwic2VsZWN0YWJsZUNoYW5uZWxzIiwiaW1hZ2VSZW5kZXJlckF2YWlsYWJsZSIsInN0eWxlcyIsImdldFN0eWxlcyIsImZpZWxkc1RvV2F0Y2giLCJTZXQiLCJzaG93V2hlbiIsIm1hcCIsIm9wdGlvbiIsImZvcm1Db250YWluZXIiLCJmb3JtSXRlbSIsImxlbmd0aCIsImZvcm1CdXR0b25zIiwiYXBwU3ViVXJsIiwidGhlbWUiLCJzcGFjaW5nIiwibWQiLCJ4bCIsIkNoZWNrYm94IiwiT3B0aW9uRWxlbWVudCIsInNlbGVjdGVkQ2hhbm5lbE9wdGlvbnMiLCJvblJlc2V0U2VjdXJlRmllbGQiLCJpbmRleCIsImtleSIsImxhYmVsIiwic2VsZWN0ZWRPcHRpb25WYWx1ZSIsImlzIiwiZWxlbWVudCIsInNlY3VyZSIsInByb3BlcnR5TmFtZSIsImRlc2NyaXB0aW9uIiwic2V0dGluZ3MiLCJJbmZvQm94IiwidXBsb2FkSW1hZ2UiLCJzZW5kUmVtaW5kZXIiLCJUZXh0QXJlYSIsImludmFsaWQiLCJtb2RlbFZhbHVlIiwidmFsaWRhdGUiLCJ2IiwidmFsaWRhdGlvblJ1bGUiLCJ2YWxpZGF0ZU9wdGlvbiIsImlucHV0VHlwZSIsInBsYWNlaG9sZGVyIiwic2VsZWN0T3B0aW9ucyIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJlcnJvciIsIlJlZ0V4cCIsInRlc3QiLCJnZXRCYWNrZW5kU3J2IiwibG9jYXRpb25TZXJ2aWNlIiwibm90aWZ5QXBwIiwiY3JlYXRlRXJyb3JOb3RpZmljYXRpb24iLCJjcmVhdGVTdWNjZXNzTm90aWZpY2F0aW9uIiwibG9hZEFsZXJ0UnVsZXMiLCJsb2FkZWRBbGVydFJ1bGVzIiwibm90aWZpY2F0aW9uQ2hhbm5lbExvYWRlZCIsInNldE5vdGlmaWNhdGlvbkNoYW5uZWxzIiwiZ2V0QWxlcnRSdWxlc0FzeW5jIiwiZGlzcGF0Y2giLCJydWxlcyIsImdldCIsInRvZ2dsZVBhdXNlQWxlcnRSdWxlIiwiaWQiLCJwb3N0Iiwic3RhdGVGaWx0ZXIiLCJnZXRTZWFyY2hPYmplY3QiLCJ0b1N0cmluZyIsInB1c2giLCJ1cGRhdGVOb3RpZmljYXRpb25DaGFubmVsIiwicHV0IiwiZ2V0U3RhdGUiLCJjaGFubmVsIiwiYWxlcnROb3RpZmllcnMiLCJub3RpZmljYXRpb25UeXBlcyIsInNvcnQiLCJvMSIsIm8yIiwibG9hZE5vdGlmaWNhdGlvbkNoYW5uZWwiLCJtZW1vaXplT25lIiwiZGlzYWJsZVJlc29sdmVNZXNzYWdlIiwiZnJlcXVlbmN5IiwiYXV0b1Jlc29sdmUiLCJodHRwTWV0aG9kIiwic2V2ZXJpdHkiLCJzZWN1cmVTZXR0aW5ncyIsImlzRGVmYXVsdCIsIm5vdGlmaWNhdGlvbkNoYW5uZWxzIiwiaW5jbHVkZURlc2NyaXB0aW9uIiwiZm9ybURhdGEiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImFzc2lnbiJdLCJzb3VyY2VSb290IjoiIn0=