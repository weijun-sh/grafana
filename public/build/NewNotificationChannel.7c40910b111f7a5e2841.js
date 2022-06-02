"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[476],{

 "./public/app/features/alerting/NewNotificationChannelPage.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
 __webpack_require__.d(__webpack_exports__, {
   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
 });
 var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
 var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
 var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
 var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
 var _components_NotificationChannelForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/components/NotificationChannelForm.tsx");
 var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/state/actions.ts");
 var _state_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");
 var _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/utils/notificationChannels.ts");
 var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _h;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














class NewNotificationChannelPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "onSubmit", data => {
      this.props.createNotificationChannel((0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_8__ .YV)(Object.assign({}, _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_8__ .Pg, data)));
    });

    _defineProperty(this, "onTestChannel", data => {
      this.props.testNotificationChannel((0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_8__ .dv)(Object.assign({}, _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_8__ .Pg, data)));
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
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ .Z, {
      navModel: navModel,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ .Z.Contents, {
        children: [_h || (_h = (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
          className: "page-sub-heading",
          children: "New notification channel"
        })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Form, {
          onSubmit: this.onSubmit,
          validateOn: "onChange",
          defaultValues: _utils_notificationChannels__WEBPACK_IMPORTED_MODULE_8__ .Pg,
          maxWidth: 600,
          children: _ref => {
            let {
              register,
              errors,
              control,
              getValues,
              watch
            } = _ref;
            const selectedChannel = notificationChannelTypes.find(c => c.value === getValues().type.value);
            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_NotificationChannelForm__WEBPACK_IMPORTED_MODULE_5__ .w, {
              selectableChannels: (0,_utils_notificationChannels__WEBPACK_IMPORTED_MODULE_8__ .t7)(notificationChannelTypes, true),
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
  navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_10__ .h)(state.navIndex, 'channels'),
  notificationChannelTypes: state.notificationChannel.notificationChannelTypes
});

const mapDispatchToProps = {
  createNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_6__ .C2,
  loadNotificationTypes: _state_actions__WEBPACK_IMPORTED_MODULE_6__ .fA,
  testNotificationChannel: _state_actions__WEBPACK_IMPORTED_MODULE_6__ .c1,
  resetSecureField: _state_reducers__WEBPACK_IMPORTED_MODULE_7__ .J0
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
 const __WEBPACK_DEFAULT_EXPORT__ = (connector(NewNotificationChannelPage));

 }),

 "./public/app/features/alerting/components/NotificationChannelForm.tsx":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


__webpack_require__.d(__webpack_exports__, {
  "w": () => ( NotificationChannelForm)
});

var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
var config = __webpack_require__("./public/app/core/config.ts");
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;
const _excluded = ["ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const OptionElement = _ref => {
  let {
    control,
    option,
    register,
    invalid
  } = _ref;
  const modelValue = option.secure ? `secureSettings.${option.propertyName}` : `settings.${option.propertyName}`;

  switch (option.element) {
    case 'input':
      return (0,jsx_runtime.jsx)(src.Input, Object.assign({}, register(`${modelValue}`, {
        required: option.required ? 'Required' : false,
        validate: v => option.validationRule !== '' ? validateOption(v, option.validationRule) : true
      }), {
        invalid: invalid,
        type: option.inputType,
        placeholder: option.placeholder
      }));

    case 'select':
      return (0,jsx_runtime.jsx)(src.InputControl, {
        control: control,
        name: `${modelValue}`,
        render: _ref2 => {
          var _option$selectOptions;

          let {} = _ref2,
              field = _objectWithoutPropertiesLoose(_ref2.field, _excluded);

          return (0,jsx_runtime.jsx)(src.Select, Object.assign({}, field, {
            options: (_option$selectOptions = option.selectOptions) !== null && _option$selectOptions !== void 0 ? _option$selectOptions : undefined,
            invalid: invalid
          }));
        }
      });

    case 'textarea':
      return (0,jsx_runtime.jsx)(src.TextArea, Object.assign({
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
;





const NotificationChannelOptions = _ref => {
  let {
    control,
    currentFormValues,
    errors,
    selectedChannelOptions,
    register,
    onResetSecureField,
    secureFields
  } = _ref;
  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: selectedChannelOptions.map((option, index) => {
      var _errors$settings$opti;

      const key = `${option.label}-${index}`; 

      const selectedOptionValue = currentFormValues[`settings.${option.showWhen.field}`] && currentFormValues[`settings.${option.showWhen.field}`].value;

      if (option.showWhen.field && selectedOptionValue !== option.showWhen.is) {
        return null;
      }

      if (option.element === 'checkbox') {
        return (0,jsx_runtime.jsx)(src.Field, {
          children: (0,jsx_runtime.jsx)(src.Checkbox, Object.assign({}, register(option.secure ? `secureSettings.${option.propertyName}` : `settings.${option.propertyName}`), {
            label: option.label,
            description: option.description
          }))
        }, key);
      }

      return (0,jsx_runtime.jsx)(src.Field, {
        label: option.label,
        description: option.description,
        invalid: errors.settings && !!errors.settings[option.propertyName],
        error: errors.settings && ((_errors$settings$opti = errors.settings[option.propertyName]) === null || _errors$settings$opti === void 0 ? void 0 : _errors$settings$opti.message),
        children: secureFields && secureFields[option.propertyName] ? (0,jsx_runtime.jsx)(src.Input, {
          readOnly: true,
          value: "Configured",
          suffix: (0,jsx_runtime.jsx)(src.Button, {
            onClick: () => onResetSecureField(option.propertyName),
            fill: "text",
            type: "button",
            size: "sm",
            children: "Clear"
          })
        }) : (0,jsx_runtime.jsx)(OptionElement, {
          option: option,
          register: register,
          control: control
        })
      }, key);
    })
  });
};
;
const BasicSettings_excluded = ["ref"];

function BasicSettings_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const BasicSettings = _ref => {
  let {
    control,
    currentFormValues,
    errors,
    secureFields,
    selectedChannel,
    channels,
    register,
    resetSecureField
  } = _ref;
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(src.Field, {
      label: "Name",
      invalid: !!errors.name,
      error: errors.name && errors.name.message,
      children: (0,jsx_runtime.jsx)(src.Input, Object.assign({}, register('name', {
        required: 'Name is required'
      })))
    }), (0,jsx_runtime.jsx)(src.Field, {
      label: "Type",
      children: (0,jsx_runtime.jsx)(src.InputControl, {
        name: "type",
        render: _ref2 => {
          let {} = _ref2,
              field = BasicSettings_objectWithoutPropertiesLoose(_ref2.field, BasicSettings_excluded);

          return (0,jsx_runtime.jsx)(src.Select, Object.assign({}, field, {
            options: channels
          }));
        },
        control: control,
        rules: {
          required: true
        }
      })
    }), (0,jsx_runtime.jsx)(NotificationChannelOptions, {
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
;





const ChannelSettings = _ref => {
  var _selectedChannel$info;

  let {
    control,
    currentFormValues,
    errors,
    selectedChannel,
    secureFields,
    register,
    resetSecureField
  } = _ref;
  return (0,jsx_runtime.jsxs)(src.CollapsableSection, {
    label: `Optional ${selectedChannel.heading}`,
    isOpen: false,
    children: [selectedChannel.info !== '' && (0,jsx_runtime.jsx)(src.Alert, {
      severity: "info",
      title: (_selectedChannel$info = selectedChannel.info) !== null && _selectedChannel$info !== void 0 ? _selectedChannel$info : ''
    }), (0,jsx_runtime.jsx)(NotificationChannelOptions, {
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
;
var _InfoBox;






const NotificationSettings = _ref => {
  let {
    currentFormValues,
    imageRendererAvailable,
    register
  } = _ref;
  return (0,jsx_runtime.jsxs)(src.CollapsableSection, {
    label: "Notification settings",
    isOpen: false,
    children: [(0,jsx_runtime.jsx)(src.Field, {
      children: (0,jsx_runtime.jsx)(src.Checkbox, Object.assign({}, register('isDefault'), {
        label: "Default",
        description: "Use this notification for all alerts"
      }))
    }), (0,jsx_runtime.jsx)(src.Field, {
      children: (0,jsx_runtime.jsx)(src.Checkbox, Object.assign({}, register('settings.uploadImage'), {
        label: "Include image",
        description: "Captures an image and include it in the notification"
      }))
    }), currentFormValues.uploadImage && !imageRendererAvailable && (_InfoBox || (_InfoBox = (0,jsx_runtime.jsx)(src.InfoBox, {
      title: "No image renderer available/installed",
      children: "Grafana cannot find an image renderer to capture an image for the notification. Please make sure the Grafana Image Renderer plugin is installed. Please contact your Grafana administrator to install the plugin."
    }))), (0,jsx_runtime.jsx)(src.Field, {
      children: (0,jsx_runtime.jsx)(src.Checkbox, Object.assign({}, register('disableResolveMessage'), {
        label: "Disable Resolve Message",
        description: "Disable the resolve message [OK] that is sent when alerting state returns to false"
      }))
    }), (0,jsx_runtime.jsx)(src.Field, {
      children: (0,jsx_runtime.jsx)(src.Checkbox, Object.assign({}, register('sendReminder'), {
        label: "Send reminders",
        description: "Send additional notifications for triggered alerts"
      }))
    }), currentFormValues.sendReminder && (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
      children: (0,jsx_runtime.jsx)(src.Field, {
        label: "Send reminder every",
        description: "Specify how often reminders should be sent, e.g. every 30s, 1m, 10m, 30m', or 1h etc. Alert reminders are sent after rules are evaluated. A reminder can never be sent more frequently than a configured alert rule evaluation interval.",
        children: (0,jsx_runtime.jsx)(src.Input, Object.assign({}, register('frequency'), {
          width: 8
        }))
      })
    })]
  });
};
;
var _Spinner, _Button, _Button2;










const NotificationChannelForm = _ref => {
  let {
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
  } = _ref;
  const styles = getStyles((0,src.useTheme)());
  (0,react.useEffect)(() => {
    const fieldsToWatch = new Set(selectedChannel === null || selectedChannel === void 0 ? void 0 : selectedChannel.options.filter(o => o.showWhen.field).map(option => {
      return `settings.${option.showWhen.field}`;
    })) || [];
    watch(['type', 'sendReminder', 'uploadImage', ...fieldsToWatch]);
  }, [selectedChannel === null || selectedChannel === void 0 ? void 0 : selectedChannel.options, watch]);
  const currentFormValues = getValues();

  if (!selectedChannel) {
    return _Spinner || (_Spinner = (0,jsx_runtime.jsx)(src.Spinner, {}));
  }

  return (0,jsx_runtime.jsxs)("div", {
    className: styles.formContainer,
    children: [(0,jsx_runtime.jsx)("div", {
      className: styles.formItem,
      children: (0,jsx_runtime.jsx)(BasicSettings, {
        selectedChannel: selectedChannel,
        channels: selectableChannels,
        secureFields: secureFields,
        resetSecureField: resetSecureField,
        currentFormValues: currentFormValues,
        register: register,
        errors: errors,
        control: control
      })
    }), selectedChannel.options.filter(o => !o.required).length > 0 && (0,jsx_runtime.jsx)("div", {
      className: styles.formItem,
      children: (0,jsx_runtime.jsx)(ChannelSettings, {
        selectedChannel: selectedChannel,
        secureFields: secureFields,
        resetSecureField: resetSecureField,
        currentFormValues: currentFormValues,
        register: register,
        errors: errors,
        control: control
      })
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.formItem,
      children: (0,jsx_runtime.jsx)(NotificationSettings, {
        imageRendererAvailable: imageRendererAvailable,
        currentFormValues: currentFormValues,
        register: register,
        errors: errors,
        control: control
      })
    }), (0,jsx_runtime.jsx)("div", {
      className: styles.formButtons,
      children: (0,jsx_runtime.jsxs)(src.HorizontalGroup, {
        children: [_Button || (_Button = (0,jsx_runtime.jsx)(src.Button, {
          type: "submit",
          children: "Save"
        })), (0,jsx_runtime.jsx)(src.Button, {
          type: "button",
          variant: "secondary",
          onClick: () => onTestChannel(getValues()),
          children: "Test"
        }), (0,jsx_runtime.jsx)("a", {
          href: `${config/* default.appSubUrl */.ZP.appSubUrl}/alerting/notifications`,
          children: _Button2 || (_Button2 = (0,jsx_runtime.jsx)(src.Button, {
            type: "button",
            variant: "secondary",
            children: "Back"
          }))
        })]
      })
    })]
  });
};
const getStyles = (0,src.stylesFactory)(theme => {
  return {
    formContainer: emotion_css_esm.css``,
    formItem: emotion_css_esm.css`
      flex-grow: 1;
      padding-top: ${theme.spacing.md};
    `,
    formButtons: emotion_css_esm.css`
      padding-top: ${theme.spacing.xl};
    `
  };
});

 }),

 "./public/app/features/alerting/state/actions.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Au": () => ( getAlertRulesAsync),
   "C2": () => ( createNotificationChannel),
   "c1": () => ( testNotificationChannel),
   "en": () => ( togglePauseAlertRule),
   "fA": () => ( loadNotificationTypes),
   "fg": () => ( updateNotificationChannel),
   "tk": () => ( loadNotificationChannel)
 });
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
 var app_core_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/actions/index.ts");
 var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
 var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");




function getAlertRulesAsync(options) {
  return async dispatch => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__ .gz)());
    const rules = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get('/api/alerts', options);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__ .Oc)(rules));
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
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__ .$l)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ .AT)('Notification created')));
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.locationService.push('/alerting/notifications');
    } catch (error) {
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__ .$l)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ .t_)(error.data.error)));
    }
  };
}
function updateNotificationChannel(data) {
  return async dispatch => {
    try {
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(`/api/alert-notifications/${data.id}`, data);
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__ .$l)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ .AT)('Notification updated')));
    } catch (error) {
      dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_1__ .$l)((0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ .t_)(error.data.error)));
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
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__ .T2)(notificationTypes));
  };
}
function loadNotificationChannel(id) {
  return async dispatch => {
    await dispatch(loadNotificationTypes());
    const notificationChannel = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/alert-notifications/${id}`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__ .K)(notificationChannel));
  };
}

 }),

 "./public/app/features/alerting/utils/notificationChannels.ts":
 ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

 __webpack_require__.d(__webpack_exports__, {
   "Pg": () => ( defaultValues),
   "YV": () => ( transformSubmitData),
   "dv": () => ( transformTestData),
   "t7": () => ( mapChannelsToSelectableValue)
 });
 var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js");
 var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");


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
const mapChannelsToSelectableValue = (0,memoize_one__WEBPACK_IMPORTED_MODULE_1__ .Z)((notificationChannels, includeDescription) => {
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
  const settings = Object.fromEntries(Object.entries(formData.settings).map(_ref => {
    let [key, value] = _ref;
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

 })

}]);