"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([[6618],{

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

/***/ "./public/app/core/hooks/useNavModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ useNavModel)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _selectors_navModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/selectors/navModel.ts");


const useNavModel = id => {
  const navIndex = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.navIndex);
  return (0,_selectors_navModel__WEBPACK_IMPORTED_MODULE_1__/* .getNavModel */ .h)(navIndex, id);
};

/***/ }),

/***/ "./public/app/features/alerting/NotificationsListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/hooks/useNavModel.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _div, _strong, _Button, _EmptyListCTA;














const NotificationsListPage = () => {
  const navModel = (0,app_core_hooks_useNavModel__WEBPACK_IMPORTED_MODULE_6__/* .useNavModel */ .q)('channels');
  const [notifications, setNotifications] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const getNotifications = async () => {
    return await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(`/api/alert-notifications`);
  };

  const [state, fetchNotifications] = (0,react_use__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(getNotifications);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchNotifications().then(res => {
      setNotifications(res);
    });
  }, [fetchNotifications]);

  const deleteNotification = id => {
    app_core_core__WEBPACK_IMPORTED_MODULE_5__/* .appEvents.publish */ .h$.publish(new _types_events__WEBPACK_IMPORTED_MODULE_7__/* .ShowConfirmModalEvent */ .VJ({
      title: 'Delete',
      text: 'Do you want to delete this notification channel?',
      text2: `Deleting this notification channel will not delete from alerts any references to it`,
      icon: 'trash-alt',
      confirmText: 'Delete',
      yesText: 'Delete',
      onConfirm: async () => {
        deleteNotificationConfirmed(id);
      }
    }));
  };

  const deleteNotificationConfirmed = async id => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().delete(`/api/alert-notifications/${id}`);
    const notifications = await fetchNotifications();
    setNotifications(notifications);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    navModel: navModel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Contents */ .Z.Contents, {
      children: [state.error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
        children: state.error
      }), !!notifications.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [_div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "page-action-bar",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "page-action-bar__spacer"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
            icon: "channel-add",
            href: "alerting/notification/new",
            children: "New channel"
          })]
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("table", {
          className: "filter-table filter-table--hover",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                style: {
                  minWidth: '200px'
                },
                children: _strong || (_strong = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("strong", {
                  children: "Name"
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                style: {
                  minWidth: '100px'
                },
                children: "Type"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("th", {
                style: {
                  width: '1%'
                }
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("tbody", {
            children: notifications.map(notification => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                className: "link-td",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                  href: `alerting/notification/${notification.id}/edit`,
                  children: notification.name
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                className: "link-td",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
                  href: `alerting/notification/${notification.id}/edit`,
                  children: notification.type
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
                className: "text-right",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.HorizontalGroup, {
                  justify: "flex-end",
                  children: [notification.isDefault && (_Button || (_Button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    disabled: true,
                    variant: "secondary",
                    size: "sm",
                    children: "default"
                  }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
                    variant: "destructive",
                    icon: "times",
                    size: "sm",
                    onClick: () => {
                      deleteNotification(notification.id);
                    }
                  })]
                })
              })]
            }, notification.id))
          })]
        })]
      }), !(notifications.length || state.loading) && (_EmptyListCTA || (_EmptyListCTA = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        title: "There are no notification channels defined yet",
        buttonIcon: "channel-add",
        buttonLink: "alerting/notification/new",
        buttonTitle: "Add channel",
        proTip: "You can include images in your alert notifications.",
        proTipLink: "http://docs.grafana.org/alerting/notifications/",
        proTipLinkTitle: "Learn more",
        proTipTarget: "_blank"
      })))]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationsListPage);

/***/ }),

/***/ "./public/app/features/alerting/unified/Receivers.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ unified_Receivers)
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
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/datasource.ts
var datasource = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/state/actions.ts + 4 modules
var actions = __webpack_require__("./public/app/features/alerting/unified/state/actions.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/utils/cloud-alertmanager-notifier-types.ts
function cloud_alertmanager_notifier_types_option(propertyName, label, description) {
  let rest = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return Object.assign({
    propertyName,
    label,
    description,
    element: 'input',
    inputType: '',
    required: false,
    secure: false,
    placeholder: '',
    validationRule: '',
    showWhen: {
      field: '',
      is: ''
    },
    dependsOn: ''
  }, rest);
}

const basicAuthOption = cloud_alertmanager_notifier_types_option('basic_auth', 'Basic auth', 'Sets the `Authorization` header with the configured username and password. Password and password_file are mutually exclusive.', {
  element: 'subform',
  subformOptions: [cloud_alertmanager_notifier_types_option('username', 'Username', ''), cloud_alertmanager_notifier_types_option('password', 'Password', ''), cloud_alertmanager_notifier_types_option('password_file', 'Password file', '')]
});
const tlsConfigOption = cloud_alertmanager_notifier_types_option('tls_config', 'TLS config', 'Configures the TLS settings.', {
  element: 'subform',
  subformOptions: [cloud_alertmanager_notifier_types_option('ca_file', 'CA file', 'CA certificate to validate the server certificate with.'), cloud_alertmanager_notifier_types_option('cert_file', 'Cert file', 'Certificate for client cert authentication to the server.'), cloud_alertmanager_notifier_types_option('key_file', 'Key file', 'Key file for client cert authentication to the server.'), cloud_alertmanager_notifier_types_option('server_name', 'Server name', 'ServerName extension to indicate the name of the server.'), cloud_alertmanager_notifier_types_option('insecure_skip_verify', 'Skip verify', 'Disable validation of the server certificate.', {
    element: 'checkbox'
  })]
});
const httpConfigOption = cloud_alertmanager_notifier_types_option('http_config', 'HTTP Config', 'Note that `basic_auth`, `bearer_token` and `bearer_token_file` options are mutually exclusive.', {
  element: 'subform',
  subformOptions: [cloud_alertmanager_notifier_types_option('bearer_token', 'Bearer token', 'Sets the `Authorization` header with the configured bearer token.'), cloud_alertmanager_notifier_types_option('bearer_token_file', 'Bearer token file', 'Sets the `Authorization` header with the bearer token read from the configured file.'), cloud_alertmanager_notifier_types_option('proxy_url', 'Proxy URL', 'Optional proxy URL.'), basicAuthOption, tlsConfigOption]
});
const cloudNotifierTypes = [{
  name: 'Email',
  description: 'Send notification over SMTP',
  type: 'email',
  info: '',
  heading: 'Email settings',
  options: [cloud_alertmanager_notifier_types_option('to', 'To', 'The email address to send notifications to.', {
    required: true
  }), cloud_alertmanager_notifier_types_option('from', 'From', 'The sender address.'), cloud_alertmanager_notifier_types_option('smarthost', 'SMTP host', 'The SMTP host through which emails are sent.'), cloud_alertmanager_notifier_types_option('hello', 'Hello', 'The hostname to identify to the SMTP server.'), cloud_alertmanager_notifier_types_option('auth_username', 'Username', 'SMTP authentication information'), cloud_alertmanager_notifier_types_option('auth_password', 'Password', 'SMTP authentication information'), cloud_alertmanager_notifier_types_option('auth_secret', 'Secret', 'SMTP authentication information'), cloud_alertmanager_notifier_types_option('auth_identity', 'Identity', 'SMTP authentication information'), cloud_alertmanager_notifier_types_option('require_tls', 'Require TLS', 'The SMTP TLS requirement', {
    element: 'checkbox'
  }), cloud_alertmanager_notifier_types_option('html', 'Email HTML body', 'The HTML body of the email notification.', {
    placeholder: '{{ template "email.default.html" . }}',
    element: 'textarea'
  }), cloud_alertmanager_notifier_types_option('text', 'Email text body', 'The text body of the email notification.', {
    element: 'textarea'
  }), cloud_alertmanager_notifier_types_option('headers', 'Headers', 'Further headers email header key/value pairs. Overrides any headers previously set by the notification implementation.', {
    element: 'key_value_map'
  }), tlsConfigOption]
}, {
  name: 'PagerDuty',
  description: 'Send notifications to PagerDuty',
  type: 'pagerduty',
  info: '',
  heading: 'PagerDuty settings',
  options: [cloud_alertmanager_notifier_types_option('routing_key', 'Routing key', 'The PagerDuty integration key (when using PagerDuty integration type `Events API v2`)'), cloud_alertmanager_notifier_types_option('service_key', 'Service key', 'The PagerDuty integration key (when using PagerDuty integration type `Prometheus`).'), cloud_alertmanager_notifier_types_option('url', 'URL', 'The URL to send API requests to'), cloud_alertmanager_notifier_types_option('client', 'Client', 'The client identification of the Alertmanager.', {
    placeholder: '{{ template "pagerduty.default.client" . }}'
  }), cloud_alertmanager_notifier_types_option('client_url', 'Client URL', 'A backlink to the sender of the notification.', {
    placeholder: '{{ template "pagerduty.default.clientURL" . }}'
  }), cloud_alertmanager_notifier_types_option('description', 'Description', 'A description of the incident.', {
    placeholder: '{{ template "pagerduty.default.description" .}}'
  }), cloud_alertmanager_notifier_types_option('severity', 'Severity', 'Severity of the incident.', {
    placeholder: 'error'
  }), cloud_alertmanager_notifier_types_option('details', 'Details', 'A set of arbitrary key/value pairs that provide further detail about the incident.', {
    element: 'key_value_map'
  }), cloud_alertmanager_notifier_types_option('images', 'Images', 'Images to attach to the incident.', {
    element: 'subform_array',
    subformOptions: [cloud_alertmanager_notifier_types_option('href', 'URL', '', {
      required: true
    }), cloud_alertmanager_notifier_types_option('source', 'Source', '', {
      required: true
    }), cloud_alertmanager_notifier_types_option('alt', 'Alt', '', {
      required: true
    })]
  }), cloud_alertmanager_notifier_types_option('links', 'Links', 'Links to attach to the incident.', {
    element: 'subform_array',
    subformOptions: [cloud_alertmanager_notifier_types_option('href', 'URL', '', {
      required: true
    }), cloud_alertmanager_notifier_types_option('text', 'Text', '', {
      required: true
    })]
  }), httpConfigOption]
}, {
  name: 'Pushover',
  description: 'Send notifications to Pushover',
  type: 'pushover',
  info: '',
  heading: 'Pushover settings',
  options: [cloud_alertmanager_notifier_types_option('user_key', 'User key', 'The recipient user’s user key.', {
    required: true
  }), cloud_alertmanager_notifier_types_option('token', 'Token', 'Your registered application’s API token, see https://pushover.net/app', {
    required: true
  }), cloud_alertmanager_notifier_types_option('title', 'Title', 'Notification title.', {
    placeholder: '{{ template "pushover.default.title" . }}'
  }), cloud_alertmanager_notifier_types_option('message', 'Message', 'Notification message.', {
    placeholder: '{{ template "pushover.default.message" . }}'
  }), cloud_alertmanager_notifier_types_option('url', 'URL', 'A supplementary URL shown alongside the message.', {
    placeholder: '{{ template "pushover.default.url" . }}'
  }), cloud_alertmanager_notifier_types_option('priority', 'Priority', 'Priority, see https://pushover.net/api#priority', {
    placeholder: '{{ if eq .Status "firing" }}2{{ else }}0{{ end }}'
  }), cloud_alertmanager_notifier_types_option('retry', 'Retry', 'How often the Pushover servers will send the same notification to the user. Must be at least 30 seconds.', {
    placeholder: '1m'
  }), cloud_alertmanager_notifier_types_option('expire', 'Expire', 'How long your notification will continue to be retried for, unless the user acknowledges the notification.', {
    placeholder: '1h'
  }), httpConfigOption]
}, {
  name: 'Slack',
  description: 'Send notifications to Slack',
  type: 'slack',
  info: '',
  heading: 'Slack settings',
  options: [cloud_alertmanager_notifier_types_option('api_url', 'Webhook URL', 'The Slack webhook URL.'), cloud_alertmanager_notifier_types_option('channel', 'Channel', 'The #channel or @user to send notifications to.', {
    required: true
  }), cloud_alertmanager_notifier_types_option('icon_emoji', 'Emoji icon', ''), cloud_alertmanager_notifier_types_option('icon_url', 'Icon URL', ''), cloud_alertmanager_notifier_types_option('link_names', 'Names link', '', {
    element: 'checkbox'
  }), cloud_alertmanager_notifier_types_option('username', 'Username', '', {
    placeholder: '{{ template "slack.default.username" . }}'
  }), cloud_alertmanager_notifier_types_option('callback_id', 'Callback ID', '', {
    placeholder: '{{ template "slack.default.callbackid" . }}'
  }), cloud_alertmanager_notifier_types_option('color', 'Color', '', {
    placeholder: '{{ if eq .Status "firing" }}danger{{ else }}good{{ end }}'
  }), cloud_alertmanager_notifier_types_option('fallback', 'Fallback', '', {
    placeholder: '{{ template "slack.default.fallback" . }}'
  }), cloud_alertmanager_notifier_types_option('footer', 'Footer', '', {
    placeholder: '{{ template "slack.default.footer" . }}'
  }), cloud_alertmanager_notifier_types_option('mrkdwn_in', 'Mrkdwn fields', 'An array of field names that should be formatted by mrkdwn syntax.', {
    element: 'string_array'
  }), cloud_alertmanager_notifier_types_option('pretext', 'Pre-text', '', {
    placeholder: '{{ template "slack.default.pretext" . }}'
  }), cloud_alertmanager_notifier_types_option('short_fields', 'Short fields', '', {
    element: 'checkbox'
  }), cloud_alertmanager_notifier_types_option('text', 'Message body', '', {
    element: 'textarea',
    placeholder: '{{ template "slack.default.text" . }}'
  }), cloud_alertmanager_notifier_types_option('title', 'Title', '', {
    placeholder: '{{ template "slack.default.title" . }}'
  }), cloud_alertmanager_notifier_types_option('title_link', 'Title link', '', {
    placeholder: '{{ template "slack.default.titlelink" . }}'
  }), cloud_alertmanager_notifier_types_option('image_url', 'Image URL', ''), cloud_alertmanager_notifier_types_option('thumb_url', 'Thumbnail URL', ''), cloud_alertmanager_notifier_types_option('actions', 'Actions', '', {
    element: 'subform_array',
    subformOptions: [cloud_alertmanager_notifier_types_option('text', 'Text', '', {
      required: true
    }), cloud_alertmanager_notifier_types_option('type', 'Type', '', {
      required: true
    }), cloud_alertmanager_notifier_types_option('url', 'URL', 'Either url or name and value are mandatory.'), cloud_alertmanager_notifier_types_option('name', 'Name', ''), cloud_alertmanager_notifier_types_option('value', 'Value', ''), cloud_alertmanager_notifier_types_option('confirm', 'Confirm', '', {
      element: 'subform',
      subformOptions: [cloud_alertmanager_notifier_types_option('text', 'Text', '', {
        required: true
      }), cloud_alertmanager_notifier_types_option('dismiss_text', 'Dismiss text', ''), cloud_alertmanager_notifier_types_option('ok_text', 'OK text', ''), cloud_alertmanager_notifier_types_option('title', 'Title', '')]
    }), cloud_alertmanager_notifier_types_option('style', 'Style', '')]
  }), cloud_alertmanager_notifier_types_option('fields', 'Fields', '', {
    element: 'subform_array',
    subformOptions: [cloud_alertmanager_notifier_types_option('title', 'Title', '', {
      required: true
    }), cloud_alertmanager_notifier_types_option('value', 'Value', '', {
      required: true
    }), cloud_alertmanager_notifier_types_option('short', 'Short', '', {
      element: 'checkbox'
    })]
  }), httpConfigOption]
}, {
  name: 'OpsGenie',
  description: 'Send notifications to OpsGenie',
  type: 'opsgenie',
  info: '',
  heading: 'OpsGenie settings',
  options: [cloud_alertmanager_notifier_types_option('api_key', 'API key', 'The API key to use when talking to the OpsGenie API.'), cloud_alertmanager_notifier_types_option('api_url', 'API URL', 'The host to send OpsGenie API requests to.'), cloud_alertmanager_notifier_types_option('message', 'Message', 'Alert text limited to 130 characters.'), cloud_alertmanager_notifier_types_option('description', 'Description', 'A description of the incident.', {
    placeholder: '{{ template "opsgenie.default.description" . }}'
  }), cloud_alertmanager_notifier_types_option('source', 'Source', 'A backlink to the sender of the notification.', {
    placeholder: '{{ template "opsgenie.default.source" . }}'
  }), cloud_alertmanager_notifier_types_option('details', 'Details', 'A set of arbitrary key/value pairs that provide further detail about the incident.', {
    element: 'key_value_map'
  }), cloud_alertmanager_notifier_types_option('tags', 'Tags', 'Comma separated list of tags attached to the notifications.'), cloud_alertmanager_notifier_types_option('note', 'Note', 'Additional alert note.'), cloud_alertmanager_notifier_types_option('priority', 'Priority', 'Priority level of alert. Possible values are P1, P2, P3, P4, and P5.'), cloud_alertmanager_notifier_types_option('responders', 'Responders', 'List of responders responsible for notifications.', {
    element: 'subform_array',
    subformOptions: [cloud_alertmanager_notifier_types_option('type', 'Type', '"team", "user", "escalation" or schedule".', {
      required: true
    }), cloud_alertmanager_notifier_types_option('id', 'ID', 'Exactly one of these fields should be defined.'), cloud_alertmanager_notifier_types_option('name', 'Name', 'Exactly one of these fields should be defined.'), cloud_alertmanager_notifier_types_option('username', 'Username', 'Exactly one of these fields should be defined.')]
  }), httpConfigOption]
}, {
  name: 'VictorOps',
  description: 'Send notifications to VictorOps',
  type: 'victorops',
  info: '',
  heading: 'VictorOps settings',
  options: [cloud_alertmanager_notifier_types_option('api_key', 'API key', 'The API key to use when talking to the VictorOps API.'), cloud_alertmanager_notifier_types_option('api_url', 'API URL', 'The VictorOps API URL.'), cloud_alertmanager_notifier_types_option('routing_key', 'Routing key', 'A key used to map the alert to a team.', {
    required: true
  }), cloud_alertmanager_notifier_types_option('message_type', 'Message type', 'Describes the behavior of the alert (CRITICAL, WARNING, INFO).'), cloud_alertmanager_notifier_types_option('entity_display_name', 'Entity display name', 'Contains summary of the alerted problem.', {
    placeholder: '{{ template "victorops.default.entity_display_name" . }}'
  }), cloud_alertmanager_notifier_types_option('state_message', 'State message', 'Contains long explanation of the alerted problem.', {
    placeholder: '{{ template "victorops.default.state_message" . }}'
  }), cloud_alertmanager_notifier_types_option('monitoring_tool', 'Monitoring tool', 'The monitoring tool the state message is from.', {
    placeholder: '{{ template "victorops.default.monitoring_tool" . }}'
  }), httpConfigOption]
}, {
  name: 'Webhook',
  description: 'Send notifications to a webhook',
  type: 'webhook',
  info: '',
  heading: 'Webhook settings',
  options: [cloud_alertmanager_notifier_types_option('url', 'URL', 'The endpoint to send HTTP POST requests to.', {
    required: true
  }), cloud_alertmanager_notifier_types_option('max_alerts', 'Max alerts', 'The maximum number of alerts to include in a single webhook message. Alerts above this threshold are truncated. When leaving this at its default value of 0, all alerts are included.', {
    placeholder: '0',
    validationRule: '(^\\d+$|^$)'
  }), httpConfigOption]
}];
const globalConfigOptions = [// email
cloud_alertmanager_notifier_types_option('smtp_from', 'SMTP from', 'The default SMTP From header field.'), cloud_alertmanager_notifier_types_option('smtp_smarthost', 'SMTP smarthost', 'The default SMTP smarthost used for sending emails, including port number. Port number usually is 25, or 587 for SMTP over TLS (sometimes referred to as STARTTLS). Example: smtp.example.org:587'), cloud_alertmanager_notifier_types_option('smtp_hello', 'SMTP hello', 'The default hostname to identify to the SMTP server.', {
  placeholder: 'localhost'
}), cloud_alertmanager_notifier_types_option('smtp_auth_username', 'SMTP auth username', "SMTP Auth using CRAM-MD5, LOGIN and PLAIN. If empty, Alertmanager doesn't authenticate to the SMTP server."), cloud_alertmanager_notifier_types_option('smtp_auth_password', 'SMTP auth password', 'SMTP Auth using LOGIN and PLAIN.'), cloud_alertmanager_notifier_types_option('smtp_auth_identity', 'SMTP auth identity', 'SMTP Auth using PLAIN.'), cloud_alertmanager_notifier_types_option('smtp_auth_secret', 'SMTP auth secret', 'SMTP Auth using CRAM-MD5.'), cloud_alertmanager_notifier_types_option('smtp_require_tls', 'SMTP require TLS', 'The default SMTP TLS requirement. Note that Go does not support unencrypted connections to remote SMTP endpoints.', {
  element: 'checkbox'
}), // slack
cloud_alertmanager_notifier_types_option('slack_api_url', 'Slack API URL', ''), cloud_alertmanager_notifier_types_option('victorops_api_key', 'VictorOps API key', ''), cloud_alertmanager_notifier_types_option('victorops_api_url', 'VictorOps API URL', '', {
  placeholder: 'https://alert.victorops.com/integrations/generic/20131114/alert/'
}), cloud_alertmanager_notifier_types_option('pagerduty_url', 'PagerDuty URL', 'https://events.pagerduty.com/v2/enqueue'), cloud_alertmanager_notifier_types_option('opsgenie_api_key', 'OpsGenie API key', ''), cloud_alertmanager_notifier_types_option('opsgenie_api_url', 'OpsGenie API URL', '', {
  placeholder: 'https://api.opsgenie.com/'
}), cloud_alertmanager_notifier_types_option('wechat_api_url', 'WeChat API URL', '', {
  placeholder: 'https://qyapi.weixin.qq.com/cgi-bin/'
}), cloud_alertmanager_notifier_types_option('wechat_api_secret', 'WeChat API secret', ''), cloud_alertmanager_notifier_types_option('wechat_api_corp_id', 'WeChat API corp id', ''), httpConfigOption, cloud_alertmanager_notifier_types_option('resolve_timeout', 'Resolve timeout', 'ResolveTimeout is the default value used by alertmanager if the alert does not include EndsAt, after this time passes it can declare the alert as resolved if it has not been updated. This has no impact on alerts from Prometheus, as they always include EndsAt.', {
  placeholder: '5m'
})];
// EXTERNAL MODULE: ./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js
var lodash = __webpack_require__("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/utils/receiver-form.ts

function grafanaReceiverToFormValues(receiver, notifiers) {
  var _receiver$grafana_man, _receiver$grafana_man2;

  const channelMap = {}; // giving each form receiver item a unique id so we can use it to map back to "original" items
  // as well as to use as `key` prop.
  // @TODO use uid once backend is fixed to provide it. then we can get rid of the GrafanaChannelMap

  let idCounter = 1;
  const values = {
    name: receiver.name,
    items: (_receiver$grafana_man = (_receiver$grafana_man2 = receiver.grafana_managed_receiver_configs) === null || _receiver$grafana_man2 === void 0 ? void 0 : _receiver$grafana_man2.map(channel => {
      const id = String(idCounter++);
      channelMap[id] = channel;
      const notifier = notifiers.find(_ref => {
        let {
          type
        } = _ref;
        return type === channel.type;
      });
      return grafanaChannelConfigToFormChannelValues(id, channel, notifier);
    })) !== null && _receiver$grafana_man !== void 0 ? _receiver$grafana_man : []
  };
  return [values, channelMap];
}
function cloudReceiverToFormValues(receiver, notifiers) {
  const channelMap = {}; // giving each form receiver item a unique id so we can use it to map back to "original" items

  let idCounter = 1;
  const items = Object.entries(receiver) // filter out only config items that are relevant to cloud
  .filter(_ref2 => {
    let [type] = _ref2;
    return type.endsWith('_configs') && type !== 'grafana_managed_receiver_configs';
  }) // map property names to cloud notifier types by removing the `_config` suffix
  .map(_ref3 => {
    let [type, configs] = _ref3;
    return [type.replace('_configs', ''), configs];
  }) // convert channel configs to form values
  .map(_ref4 => {
    let [type, configs] = _ref4;
    return configs.map(config => {
      const id = String(idCounter++);
      channelMap[id] = {
        type,
        config
      };
      const notifier = notifiers.find(notifier => notifier.type === type);

      if (!notifier) {
        throw new Error(`unknown cloud notifier: ${type}`);
      }

      return cloudChannelConfigToFormChannelValues(id, type, config);
    });
  }).flat();
  const values = {
    name: receiver.name,
    items
  };
  return [values, channelMap];
}
function formValuesToGrafanaReceiver(values, channelMap, defaultChannelValues) {
  var _values$items;

  return {
    name: values.name,
    grafana_managed_receiver_configs: ((_values$items = values.items) !== null && _values$items !== void 0 ? _values$items : []).map(channelValues => {
      const existing = channelMap[channelValues.__id];
      return formChannelValuesToGrafanaChannelConfig(channelValues, defaultChannelValues, values.name, existing);
    })
  };
}
function formValuesToCloudReceiver(values, defaults) {
  const recv = {
    name: values.name
  };
  values.items.forEach(_ref5 => {
    let {
      __id,
      type,
      settings,
      sendResolved
    } = _ref5;
    const channel = omitEmptyValues(Object.assign({}, settings, {
      send_resolved: sendResolved !== null && sendResolved !== void 0 ? sendResolved : defaults.sendResolved
    }));
    const configsKey = `${type}_configs`;

    if (!recv[configsKey]) {
      recv[configsKey] = [channel];
    } else {
      recv[configsKey].push(channel);
    }
  });
  return recv;
} // will add new receiver, or replace exisitng one

function updateConfigWithReceiver(config, receiver, replaceReceiverName) {
  var _config$alertmanager_;

  const oldReceivers = (_config$alertmanager_ = config.alertmanager_config.receivers) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : []; // sanity check that name is not duplicated

  if (receiver.name !== replaceReceiverName && !!oldReceivers.find(_ref6 => {
    let {
      name
    } = _ref6;
    return name === receiver.name;
  })) {
    throw new Error(`Duplicate receiver name ${receiver.name}`);
  } // sanity check that existing receiver exists


  if (replaceReceiverName && !oldReceivers.find(_ref7 => {
    let {
      name
    } = _ref7;
    return name === replaceReceiverName;
  })) {
    throw new Error(`Expected receiver ${replaceReceiverName} to exist, but did not find it in the config`);
  }

  const updated = Object.assign({}, config, {
    alertmanager_config: Object.assign({}, config.alertmanager_config, {
      receivers: replaceReceiverName ? oldReceivers.map(existingReceiver => existingReceiver.name === replaceReceiverName ? receiver : existingReceiver) : [...oldReceivers, receiver]
    })
  }); // if receiver was renamed, rename it in routes as well

  if (updated.alertmanager_config.route && replaceReceiverName && receiver.name !== replaceReceiverName) {
    updated.alertmanager_config.route = renameReceiverInRoute(updated.alertmanager_config.route, replaceReceiverName, receiver.name);
  }

  return updated;
}

function renameReceiverInRoute(route, oldName, newName) {
  const updated = Object.assign({}, route);

  if (updated.receiver === oldName) {
    updated.receiver = newName;
  }

  if (updated.routes) {
    updated.routes = updated.routes.map(route => renameReceiverInRoute(route, oldName, newName));
  }

  return updated;
}

function cloudChannelConfigToFormChannelValues(id, type, channel) {
  return {
    __id: id,
    type,
    settings: Object.assign({}, channel),
    secureFields: {},
    secureSettings: {},
    sendResolved: channel.send_resolved
  };
}

function grafanaChannelConfigToFormChannelValues(id, channel, notifier) {
  const values = {
    __id: id,
    type: channel.type,
    secureSettings: {},
    settings: Object.assign({}, channel.settings),
    secureFields: Object.assign({}, channel.secureFields),
    disableResolveMessage: channel.disableResolveMessage
  }; // work around https://github.com/grafana/alerting-squad/issues/100

  notifier === null || notifier === void 0 ? void 0 : notifier.options.forEach(option => {
    if (option.secure && values.settings[option.propertyName]) {
      delete values.settings[option.propertyName];
      values.secureFields[option.propertyName] = true;
    }
  });
  return values;
}

function formChannelValuesToGrafanaChannelConfig(values, defaults, name, existing) {
  var _existing$settings, _values$settings, _values$secureSetting, _ref8, _values$disableResolv;

  const channel = {
    settings: omitEmptyValues(Object.assign({}, existing && existing.type === values.type ? (_existing$settings = existing.settings) !== null && _existing$settings !== void 0 ? _existing$settings : {} : {}, (_values$settings = values.settings) !== null && _values$settings !== void 0 ? _values$settings : {})),
    secureSettings: (_values$secureSetting = values.secureSettings) !== null && _values$secureSetting !== void 0 ? _values$secureSetting : {},
    type: values.type,
    name,
    disableResolveMessage: (_ref8 = (_values$disableResolv = values.disableResolveMessage) !== null && _values$disableResolv !== void 0 ? _values$disableResolv : existing === null || existing === void 0 ? void 0 : existing.disableResolveMessage) !== null && _ref8 !== void 0 ? _ref8 : defaults.disableResolveMessage
  };

  if (existing) {
    channel.uid = existing.uid;
  }

  return channel;
} // will remove properties that have empty ('', null, undefined) object properties.
// traverses nested objects and arrays as well. in place, mutates the object.
// this is needed because form will submit empty string for not filled in fields,
// but for cloud alertmanager receiver config to use global default value the property must be omitted entirely
// this isn't a perfect solution though. No way for user to intentionally provide an empty string. Will need rethinking later

function omitEmptyValues(obj) {
  if ((0,lodash.isArray)(obj)) {
    obj.forEach(omitEmptyValues);
  } else if (typeof obj === 'object' && obj !== null) {
    Object.entries(obj).forEach(_ref9 => {
      let [key, value] = _ref9;

      if (value === '' || value === null || value === undefined) {
        delete obj[key];
      } else {
        omitEmptyValues(value);
      }
    });
  }

  return obj;
}
// EXTERNAL MODULE: ./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/CloudCommonChannelSettings.tsx




const CloudCommonChannelSettings = _ref => {
  let {
    pathPrefix,
    className,
    readOnly = false
  } = _ref;
  const {
    register
  } = (0,index_esm/* useFormContext */.Gc)();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: className,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
      disabled: readOnly,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Checkbox, Object.assign({}, register(`${pathPrefix}sendResolved`), {
        label: "Send resolved",
        disabled: readOnly,
        description: "Whether or not to notify about resolved alerts."
      }))
    })
  });
};
// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./public/app/core/copy/appNotification.ts
var appNotification = __webpack_require__("./public/app/core/copy/appNotification.ts");
// EXTERNAL MODULE: ./public/app/core/hooks/useCleanup.ts
var useCleanup = __webpack_require__("./public/app/core/hooks/useCleanup.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/hooks/useControlledFieldArray.ts


const EMPTY_ARRAY = [];
/*
 * react-hook-form's own useFieldArray is uncontrolled and super buggy.
 * this is a simple controlled version. It's dead simple and more robust at the cost of re-rendering the form
 * on every change to the sub forms in the array.
 * Warning: you'll have to take care of your own unique identiifer to use as `key` for the ReactNode array.
 * Using index will cause problems.
 */

function useControlledFieldArray(options) {
  var _ref, _watch;

  const {
    name,
    formAPI,
    defaults,
    softDelete
  } = options;
  const {
    watch,
    getValues,
    reset,
    setValue
  } = formAPI;
  const fields = (_ref = (_watch = watch(name)) !== null && _watch !== void 0 ? _watch : defaults) !== null && _ref !== void 0 ? _ref : EMPTY_ARRAY;
  const update = (0,react.useCallback)(updateFn => {
    const values = JSON.parse(JSON.stringify(getValues()));
    const newItems = updateFn(fields !== null && fields !== void 0 ? fields : []);
    reset((0,lodash.set)(values, name, newItems));
  }, [getValues, name, reset, fields]);
  return {
    fields,
    append: (0,react.useCallback)(values => update(fields => [...fields, values]), [update]),
    remove: (0,react.useCallback)(index => {
      if (softDelete) {
        setValue(`${name}.${index}.__deleted`, true);
      } else {
        update(items => {
          const newItems = items.slice();
          newItems.splice(index, 1);
          return newItems;
        });
      }
    }, [update, name, setValue, softDelete])
  };
}
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts
var useUnifiedAlertingSelector = __webpack_require__("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/misc.ts
var misc = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rules/ActionIcon.tsx
var ActionIcon = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/fields/KeyValueMapInput.tsx
var _th, _th2, _th3;







const KeyValueMapInput = _ref => {
  let {
    value,
    onChange,
    readOnly = false
  } = _ref;
  const styles = (0,src.useStyles2)(getStyles);
  const [pairs, setPairs] = (0,react.useState)(recordToPairs(value));
  (0,react.useEffect)(() => setPairs(recordToPairs(value)), [value]);

  const emitChange = pairs => {
    onChange(pairsToRecord(pairs));
  };

  const deleteItem = index => {
    const newPairs = pairs.slice();
    const removed = newPairs.splice(index, 1)[0];
    setPairs(newPairs);

    if (removed[0]) {
      emitChange(newPairs);
    }
  };

  const updatePair = (values, index) => {
    const old = pairs[index];
    const newPairs = pairs.map((pair, i) => i === index ? values : pair);
    setPairs(newPairs);

    if (values[0] || old[0]) {
      emitChange(newPairs);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [!!pairs.length && /*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
      className: styles.table,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          children: [_th || (_th = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: "Name"
          })), _th2 || (_th2 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: "Value"
          })), !readOnly && (_th3 || (_th3 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {})))]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("tbody", {
        children: pairs.map((_ref2, index) => {
          let [key, value] = _ref2;
          return /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, {
                readOnly: readOnly,
                value: key,
                onChange: e => updatePair([e.currentTarget.value, value], index)
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, {
                readOnly: readOnly,
                value: value,
                onChange: e => updatePair([key, e.currentTarget.value], index)
              })
            }), !readOnly && /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(ActionIcon/* ActionIcon */.A, {
                icon: "trash-alt",
                tooltip: "delete",
                onClick: () => deleteItem(index)
              })
            })]
          }, index);
        })
      })]
    }), !readOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
      className: styles.addButton,
      type: "button",
      variant: "secondary",
      icon: "plus",
      size: "sm",
      onClick: () => setPairs([...pairs, ['', '']]),
      children: "Add"
    })]
  });
};

const getStyles = theme => ({
  addButton: emotion_css_esm.css`
    margin-top: ${theme.spacing(1)};
  `,
  table: emotion_css_esm.css`
    tbody td {
      padding: 0 ${theme.spacing(1)} ${theme.spacing(1)} 0;
    }
  `
});

const pairsToRecord = pairs => {
  const record = {};

  for (const [key, value] of pairs) {
    if (key) {
      record[key] = value;
    }
  }

  return record;
};

const recordToPairs = obj => Object.entries(obj !== null && obj !== void 0 ? obj : {});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/fields/StringArrayInput.tsx






const StringArrayInput = _ref => {
  let {
    value,
    onChange,
    readOnly = false
  } = _ref;
  const styles = (0,src.useStyles2)(StringArrayInput_getStyles);

  const deleteItem = index => {
    if (!value) {
      return;
    }

    const newValue = value.slice();
    newValue.splice(index, 1);
    onChange(newValue);
  };

  const updateValue = (itemValue, index) => {
    if (!value) {
      return;
    }

    onChange(value.map((v, i) => i === index ? itemValue : v));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    children: [!!(value !== null && value !== void 0 && value.length) && value.map((v, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.row,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, {
        readOnly: readOnly,
        value: v,
        onChange: e => updateValue(e.currentTarget.value, index)
      }), !readOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(ActionIcon/* ActionIcon */.A, {
        className: styles.deleteIcon,
        icon: "trash-alt",
        tooltip: "delete",
        onClick: () => deleteItem(index)
      })]
    }, index)), !readOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
      className: styles.addButton,
      type: "button",
      variant: "secondary",
      icon: "plus",
      size: "sm",
      onClick: () => onChange([...(value !== null && value !== void 0 ? value : []), '']),
      children: "Add"
    })]
  });
};

const StringArrayInput_getStyles = theme => ({
  row: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${theme.spacing(1)};
    align-items: center;
  `,
  deleteIcon: emotion_css_esm.css`
    margin-left: ${theme.spacing(1)};
  `,
  addButton: emotion_css_esm.css`
    margin-top: ${theme.spacing(1)};
  `
});
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/CollapseToggle.tsx
var CollapseToggle = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/CollapsibleSection.tsx






const CollapsibleSection = _ref => {
  let {
    label,
    description,
    children,
    className,
    size = 'xl'
  } = _ref;
  const styles = (0,src.useStyles2)(CollapsibleSection_getStyles);
  const [isCollapsed, setIsCollapsed] = (0,react.useState)(true);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: (0,emotion_css_esm.cx)(styles.wrapper, className),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.heading,
      onClick: toggleCollapse,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CollapseToggle/* CollapseToggle */.U, {
        className: styles.caret,
        size: size,
        onToggle: toggleCollapse,
        isCollapsed: isCollapsed
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("h6", {
        children: label
      })]
    }), description && /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      className: styles.description,
      children: description
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: isCollapsed ? styles.hidden : undefined,
      children: children
    })]
  });
};

const CollapsibleSection_getStyles = theme => ({
  wrapper: emotion_css_esm.css`
    margin-top: ${theme.spacing(1)};
    padding-bottom: ${theme.spacing(1)};
  `,
  caret: emotion_css_esm.css`
    margin-left: -${theme.spacing(0.5)}; // make it align with fields despite icon size
  `,
  heading: emotion_css_esm.css`
    cursor: pointer;
    h6 {
      display: inline-block;
    }
  `,
  hidden: emotion_css_esm.css`
    display: none;
  `,
  description: emotion_css_esm.css`
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.size.sm};
    font-weight: ${theme.typography.fontWeightRegular};
    margin: 0;
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/fields/styles.ts

const getReceiverFormFieldStyles = theme => ({
  collapsibleSection: emotion_css_esm.css`
    margin: 0;
    padding: 0;
  `,
  wrapper: emotion_css_esm.css`
    margin: ${theme.spacing(2, 0)};
    padding: ${theme.spacing(1)};
    border: solid 1px ${theme.colors.border.medium};
    border-radius: ${theme.shape.borderRadius(1)};
    position: relative;
  `,
  description: emotion_css_esm.css`
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.size.sm};
    font-weight: ${theme.typography.fontWeightRegular};
    margin: 0;
  `,
  deleteIcon: emotion_css_esm.css`
    position: absolute;
    right: ${theme.spacing(1)};
    top: ${theme.spacing(1)};
  `,
  addButton: emotion_css_esm.css`
    margin-top: ${theme.spacing(1)};
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/fields/SubformArrayField.tsx










const SubformArrayField = _ref => {
  var _ref2;

  let {
    option,
    pathPrefix,
    errors,
    defaultValues,
    readOnly = false
  } = _ref;
  const styles = (0,src.useStyles2)(getReceiverFormFieldStyles);
  const path = `${pathPrefix}${option.propertyName}`;
  const formAPI = (0,index_esm/* useFormContext */.Gc)();
  const {
    fields,
    append,
    remove
  } = useControlledFieldArray({
    name: path,
    formAPI,
    defaults: defaultValues
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: styles.wrapper,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(CollapsibleSection, {
      className: styles.collapsibleSection,
      label: `${option.label} (${fields.length})`,
      description: option.description,
      children: [((_ref2 = fields !== null && fields !== void 0 ? fields : defaultValues) !== null && _ref2 !== void 0 ? _ref2 : []).map((field, itemIndex) => {
        var _option$subformOption;

        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.wrapper,
          children: [!readOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(ActionIcon/* ActionIcon */.A, {
            "data-testid": `${path}.${itemIndex}.delete-button`,
            icon: "trash-alt",
            tooltip: "delete",
            onClick: () => remove(itemIndex),
            className: styles.deleteIcon
          }), (_option$subformOption = option.subformOptions) === null || _option$subformOption === void 0 ? void 0 : _option$subformOption.map(option => {
            var _errors$itemIndex;

            return /*#__PURE__*/(0,jsx_runtime.jsx)(OptionField, {
              readOnly: readOnly,
              defaultValue: field === null || field === void 0 ? void 0 : field[option.propertyName],
              option: option,
              pathPrefix: `${path}.${itemIndex}.`,
              error: errors === null || errors === void 0 ? void 0 : (_errors$itemIndex = errors[itemIndex]) === null || _errors$itemIndex === void 0 ? void 0 : _errors$itemIndex[option.propertyName]
            }, option.propertyName);
          })]
        }, itemIndex);
      }), !readOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
        "data-testid": `${path}.add-button`,
        className: styles.addButton,
        type: "button",
        variant: "secondary",
        icon: "plus",
        size: "sm",
        onClick: () => append({
          __id: String(Math.random())
        }),
        children: "Add"
      })]
    })
  });
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/fields/SubformField.tsx









const SubformField = _ref => {
  var _option$subformOption;

  let {
    option,
    pathPrefix,
    errors,
    defaultValue,
    readOnly = false
  } = _ref;
  const styles = (0,src.useStyles2)(getReceiverFormFieldStyles);
  const name = `${pathPrefix}${option.propertyName}`;
  const {
    watch
  } = (0,index_esm/* useFormContext */.Gc)();

  const _watchValue = watch(name);

  const value = _watchValue === undefined ? defaultValue : _watchValue;
  const [show, setShow] = (0,react.useState)(!!value);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    "data-testid": `${name}.container`,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h6", {
      children: option.label
    }), option.description && /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
      className: styles.description,
      children: option.description
    }), show && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [!readOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(ActionIcon/* ActionIcon */.A, {
        "data-testid": `${name}.delete-button`,
        icon: "trash-alt",
        tooltip: "delete",
        onClick: () => setShow(false),
        className: styles.deleteIcon
      }), ((_option$subformOption = option.subformOptions) !== null && _option$subformOption !== void 0 ? _option$subformOption : []).map(subOption => {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(OptionField, {
          readOnly: readOnly,
          defaultValue: defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue[subOption.propertyName],
          option: subOption,
          pathPrefix: `${name}.`,
          error: errors === null || errors === void 0 ? void 0 : errors[subOption.propertyName]
        }, subOption.propertyName);
      })]
    }), !show && !readOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
      className: styles.addButton,
      type: "button",
      variant: "secondary",
      icon: "plus",
      size: "sm",
      onClick: () => setShow(true),
      "data-testid": `${name}.add-button`,
      children: "Add"
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/fields/OptionField.tsx
const _excluded = ["onChange", "ref"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











const OptionField = _ref => {
  let {
    option,
    invalid,
    pathPrefix,
    pathSuffix = '',
    error,
    defaultValue,
    readOnly = false
  } = _ref;
  const optionPath = `${pathPrefix}${pathSuffix}`;

  if (option.element === 'subform') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(SubformField, {
      readOnly: readOnly,
      defaultValue: defaultValue,
      option: option,
      errors: error,
      pathPrefix: optionPath
    });
  }

  if (option.element === 'subform_array') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(SubformArrayField, {
      readOnly: readOnly,
      defaultValues: defaultValue,
      option: option,
      pathPrefix: optionPath,
      errors: error
    });
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
    label: option.element !== 'checkbox' ? option.label : undefined,
    description: option.description || undefined,
    invalid: !!error,
    error: error === null || error === void 0 ? void 0 : error.message,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(OptionInput, {
      id: `${optionPath}${option.propertyName}`,
      defaultValue: defaultValue,
      option: option,
      invalid: invalid,
      pathPrefix: optionPath,
      readOnly: readOnly,
      pathIndex: pathPrefix
    })
  });
};

const OptionInput = _ref2 => {
  let {
    option,
    invalid,
    id,
    pathPrefix = '',
    pathIndex = '',
    readOnly = false
  } = _ref2;
  const {
    control,
    register,
    unregister,
    getValues
  } = (0,index_esm/* useFormContext */.Gc)();
  const name = `${pathPrefix}${option.propertyName}`; // workaround for https://github.com/react-hook-form/react-hook-form/issues/4993#issuecomment-829012506

  (0,react.useEffect)(() => () => {
    unregister(name, {
      keepValue: false
    });
  }, [unregister, name]);

  switch (option.element) {
    case 'checkbox':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Checkbox, Object.assign({
        id: id,
        readOnly: readOnly,
        disabled: readOnly,
        className: styles.checkbox
      }, register(name), {
        label: option.label,
        description: option.description
      }));

    case 'input':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({
        id: id,
        readOnly: readOnly || determineReadOnly(option, getValues, pathIndex),
        invalid: invalid,
        type: option.inputType
      }, register(name, {
        required: determineRequired(option, getValues, pathIndex),
        validate: v => option.validationRule !== '' ? validateOption(v, option.validationRule) : true
      }), {
        placeholder: option.placeholder
      }));

    case 'select':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
        render: _ref3 => {
          var _option$selectOptions;

          let {
            field: {
              onChange
            }
          } = _ref3,
              field = _objectWithoutPropertiesLoose(_ref3.field, _excluded);

          return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Select, Object.assign({
            disabled: readOnly
          }, field, {
            options: (_option$selectOptions = option.selectOptions) !== null && _option$selectOptions !== void 0 ? _option$selectOptions : undefined,
            invalid: invalid,
            onChange: value => onChange(value.value)
          }));
        },
        control: control,
        name: name
      });

    case 'textarea':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(src.TextArea, Object.assign({
        id: id,
        readOnly: readOnly,
        invalid: invalid
      }, register(name, {
        required: option.required ? 'Required' : false,
        validate: v => option.validationRule !== '' ? validateOption(v, option.validationRule) : true
      })));

    case 'string_array':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
        render: _ref4 => {
          let {
            field: {
              value,
              onChange
            }
          } = _ref4;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(StringArrayInput, {
            readOnly: readOnly,
            value: value,
            onChange: onChange
          });
        },
        control: control,
        name: name
      });

    case 'key_value_map':
      return /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
        render: _ref5 => {
          let {
            field: {
              value,
              onChange
            }
          } = _ref5;
          return /*#__PURE__*/(0,jsx_runtime.jsx)(KeyValueMapInput, {
            readOnly: readOnly,
            value: value,
            onChange: onChange
          });
        },
        control: control,
        name: name
      });

    default:
      console.error('Element not supported', option.element);
      return null;
  }
};

const styles = {
  checkbox: emotion_css_esm.css`
    height: auto; // native checkbox has fixed height which does not take into account description
  `
};

const validateOption = (value, validationRule) => {
  return RegExp(validationRule).test(value) ? true : 'Invalid format';
};

const determineRequired = (option, getValues, pathIndex) => {
  if (!option.dependsOn) {
    return option.required ? 'Required' : false;
  }

  if ((0,lodash.isEmpty)(getValues(`${pathIndex}secureFields`))) {
    const dependentOn = getValues(`${pathIndex}secureSettings.${option.dependsOn}`);
    return !Boolean(dependentOn) && option.required ? 'Required' : false;
  } else {
    const dependentOn = getValues(`${pathIndex}secureFields.${option.dependsOn}`);
    return !dependentOn && option.required ? 'Required' : false;
  }
};

const determineReadOnly = (option, getValues, pathIndex) => {
  if (!option.dependsOn) {
    return false;
  }

  if ((0,lodash.isEmpty)(getValues(`${pathIndex}secureFields`))) {
    return getValues(`${pathIndex}secureSettings.${option.dependsOn}`);
  } else {
    return getValues(`${pathIndex}secureFields.${option.dependsOn}`);
  }
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/ChannelOptions.tsx






function ChannelOptions(_ref) {
  let {
    defaultValues,
    selectedChannelOptions,
    onResetSecureField,
    secureFields,
    errors,
    pathPrefix = '',
    readOnly = false
  } = _ref;
  const {
    watch
  } = (0,index_esm/* useFormContext */.Gc)();
  const currentFormValues = watch(); // react hook form types ARE LYING!

  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: selectedChannelOptions.map((option, index) => {
      var _ref2, _defaultValues$settin;

      const key = `${option.label}-${index}`; // Some options can be dependent on other options, this determines what is selected in the dependency options
      // I think this needs more thought.

      const selectedOptionValue = currentFormValues[`${pathPrefix}settings.${option.showWhen.field}`];

      if (option.showWhen.field && selectedOptionValue !== option.showWhen.is) {
        return null;
      }

      if (secureFields && secureFields[option.propertyName]) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
          label: option.label,
          description: option.description || undefined,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, {
            readOnly: true,
            value: "Configured",
            suffix: readOnly ? null : /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
              onClick: () => onResetSecureField(option.propertyName),
              fill: "text",
              type: "button",
              size: "sm",
              children: "Clear"
            })
          })
        }, key);
      }

      const error = (_ref2 = option.secure ? errors === null || errors === void 0 ? void 0 : errors.secureSettings : errors === null || errors === void 0 ? void 0 : errors.settings) === null || _ref2 === void 0 ? void 0 : _ref2[option.propertyName];
      const defaultValue = defaultValues === null || defaultValues === void 0 ? void 0 : (_defaultValues$settin = defaultValues.settings) === null || _defaultValues$settin === void 0 ? void 0 : _defaultValues$settin[option.propertyName];
      return /*#__PURE__*/(0,jsx_runtime.jsx)(OptionField, {
        defaultValue: defaultValue,
        readOnly: readOnly,
        error: error,
        pathPrefix: pathPrefix,
        pathSuffix: option.secure ? 'secureSettings.' : 'settings.',
        option: option
      }, key);
    })
  });
}
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/ChannelSubForm.tsx
const ChannelSubForm_excluded = ["ref", "onChange"];

function ChannelSubForm_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function ChannelSubForm(_ref) {
  var _watch;

  let {
    defaultValues,
    pathPrefix,
    onDuplicate,
    onDelete,
    onTest,
    notifiers,
    errors,
    secureFields,
    commonSettingsComponent: CommonSettingsComponent,
    readOnly = false
  } = _ref;
  const styles = (0,src.useStyles2)(ChannelSubForm_getStyles);

  const name = fieldName => `${pathPrefix}${fieldName}`;

  const {
    control,
    watch,
    register,
    trigger,
    formState,
    setValue
  } = (0,index_esm/* useFormContext */.Gc)();
  const selectedType = (_watch = watch(name('type'))) !== null && _watch !== void 0 ? _watch : defaultValues.type; // nope, setting "default" does not work at all.

  const {
    loading: testingReceiver
  } = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.testReceivers);
  (0,react.useEffect)(() => {
    register(`${pathPrefix}.__id`);
    /* Need to manually register secureFields or else they'll
     be lost when testing a contact point */

    register(`${pathPrefix}.secureFields`);
  }, [register, pathPrefix]);
  const [_secureFields, setSecureFields] = (0,react.useState)(secureFields !== null && secureFields !== void 0 ? secureFields : {});

  const onResetSecureField = key => {
    if (_secureFields[key]) {
      const updatedSecureFields = Object.assign({}, secureFields);
      delete updatedSecureFields[key];
      setSecureFields(updatedSecureFields);
      setValue(`${pathPrefix}.secureFields`, updatedSecureFields);
    }
  };

  const typeOptions = (0,react.useMemo)(() => notifiers.map(_ref2 => {
    let {
      name,
      type
    } = _ref2;
    return {
      label: name,
      value: type
    };
  }).sort((a, b) => a.label.localeCompare(b.label)), [notifiers]);

  const handleTest = async () => {
    await trigger();
    const isValid = Object.keys(formState.errors).length === 0;

    if (isValid && onTest) {
      onTest();
    }
  };

  const notifier = notifiers.find(_ref3 => {
    let {
      type
    } = _ref3;
    return type === selectedType;
  }); // if there are mandatory options defined, optional options will be hidden by a collapse
  // if there aren't mandatory options, all options will be shown without collapse

  const mandatoryOptions = notifier === null || notifier === void 0 ? void 0 : notifier.options.filter(o => o.required);
  const optionalOptions = notifier === null || notifier === void 0 ? void 0 : notifier.options.filter(o => !o.required);
  const contactPointTypeInputId = `contact-point-type-${pathPrefix}`;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: styles.wrapper,
    "data-testid": "item-container",
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.topRow,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
          label: "Contact point type",
          htmlFor: contactPointTypeInputId,
          "data-testid": `${pathPrefix}type`,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
            name: name('type'),
            defaultValue: defaultValues.type,
            render: _ref4 => {
              let {
                field: {
                  onChange
                }
              } = _ref4,
                  field = ChannelSubForm_objectWithoutPropertiesLoose(_ref4.field, ChannelSubForm_excluded);

              return /*#__PURE__*/(0,jsx_runtime.jsx)(src.Select, Object.assign({
                disabled: readOnly,
                inputId: contactPointTypeInputId
              }, field, {
                width: 37,
                options: typeOptions,
                onChange: value => onChange(value === null || value === void 0 ? void 0 : value.value)
              }));
            },
            control: control,
            rules: {
              required: true
            }
          })
        })
      }), !readOnly && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: styles.buttons,
        children: [onTest && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          disabled: testingReceiver,
          size: "xs",
          variant: "secondary",
          type: "button",
          onClick: () => handleTest(),
          icon: testingReceiver ? 'fa fa-spinner' : 'message',
          children: "Test"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          size: "xs",
          variant: "secondary",
          type: "button",
          onClick: () => onDuplicate(),
          icon: "copy",
          children: "Duplicate"
        }), onDelete && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          "data-testid": `${pathPrefix}delete-button`,
          size: "xs",
          variant: "secondary",
          type: "button",
          onClick: () => onDelete(),
          icon: "trash-alt",
          children: "Delete"
        })]
      })]
    }), notifier && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.innerContent,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ChannelOptions, {
        defaultValues: defaultValues,
        selectedChannelOptions: mandatoryOptions !== null && mandatoryOptions !== void 0 && mandatoryOptions.length ? mandatoryOptions : optionalOptions,
        secureFields: _secureFields,
        errors: errors,
        onResetSecureField: onResetSecureField,
        pathPrefix: pathPrefix,
        readOnly: readOnly
      }), !!(mandatoryOptions !== null && mandatoryOptions !== void 0 && mandatoryOptions.length && optionalOptions !== null && optionalOptions !== void 0 && optionalOptions.length) && /*#__PURE__*/(0,jsx_runtime.jsxs)(CollapsibleSection, {
        label: `Optional ${notifier.name} settings`,
        children: [notifier.info !== '' && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Alert, {
          title: "",
          severity: "info",
          children: notifier.info
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ChannelOptions, {
          defaultValues: defaultValues,
          selectedChannelOptions: optionalOptions,
          secureFields: _secureFields,
          onResetSecureField: onResetSecureField,
          errors: errors,
          pathPrefix: pathPrefix,
          readOnly: readOnly
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(CollapsibleSection, {
        label: "Notification settings",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(CommonSettingsComponent, {
          pathPrefix: pathPrefix,
          readOnly: readOnly
        })
      })]
    })]
  });
}

const ChannelSubForm_getStyles = theme => ({
  buttons: emotion_css_esm.css`
    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `,
  innerContent: emotion_css_esm.css`
    max-width: 536px;
  `,
  wrapper: emotion_css_esm.css`
    margin: ${theme.spacing(2, 0)};
    padding: ${theme.spacing(1)};
    border: solid 1px ${theme.colors.border.medium};
    border-radius: ${theme.shape.borderRadius(1)};
    max-width: ${theme.breakpoints.values.xl}${theme.breakpoints.unit};
  `,
  topRow: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  channelSettingsHeader: emotion_css_esm.css`
    margin-top: ${theme.spacing(2)};
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/fields/DeletedSubform.tsx




// we can't drop the deleted item from list entirely because
// there will be a rece condition with register/unregister calls in react-hook-form
// and fields will become randomly erroneously unregistered
function DeletedSubForm(_ref) {
  let {
    pathPrefix
  } = _ref;
  const {
    register
  } = (0,index_esm/* useFormContext */.Gc)(); // required to be registered or react-hook-form will randomly drop the values when it feels like it

  (0,react.useEffect)(() => {
    register(`${pathPrefix}.__id`);
    register(`${pathPrefix}.__deleted`);
  }, [register, pathPrefix]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
}
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/ReceiverForm.tsx
var _Alert, _Button, _Button2;
















function ReceiverForm(_ref) {
  let {
    config,
    initialValues,
    defaultItem,
    notifiers,
    alertManagerSourceName,
    onSubmit,
    onTestChannel,
    takenReceiverNames,
    commonSettingsComponent
  } = _ref;
  const notifyApp = (0,appNotification/* useAppNotification */.iG)();
  const styles = (0,src.useStyles2)(ReceiverForm_getStyles);
  const readOnly = (0,datasource/* isVanillaPrometheusAlertManagerDataSource */.RY)(alertManagerSourceName);
  const defaultValues = initialValues || {
    name: '',
    items: [Object.assign({}, defaultItem, {
      __id: String(Math.random())
    })]
  };
  const formAPI = (0,index_esm/* useForm */.cI)({
    // making a copy here beacuse react-hook-form will mutate these, and break if the object is frozen. for real.
    defaultValues: JSON.parse(JSON.stringify(defaultValues))
  });
  (0,useCleanup/* useCleanup */.x)(state => state.unifiedAlerting.saveAMConfig);
  const {
    loading
  } = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.saveAMConfig);
  const {
    handleSubmit,
    register,
    formState: {
      errors
    },
    getValues
  } = formAPI;
  const {
    fields,
    append,
    remove
  } = useControlledFieldArray({
    name: 'items',
    formAPI,
    softDelete: true
  });
  const validateNameIsAvailable = (0,react.useCallback)(name => takenReceiverNames.map(name => name.trim().toLowerCase()).includes(name.trim().toLowerCase()) ? 'Another receiver with this name already exists.' : true, [takenReceiverNames]);

  const submitCallback = values => {
    onSubmit(Object.assign({}, values, {
      items: values.items.filter(item => !item.__deleted)
    }));
  };

  const onInvalid = () => {
    notifyApp.error('There are errors in the form. Please correct them and try again!');
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(index_esm/* FormProvider */.RV, Object.assign({}, formAPI, {
    children: [!config.alertmanager_config.route && (_Alert || (_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Alert, {
      severity: "warning",
      title: "Attention",
      children: "Because there is no default policy configured yet, this contact point will automatically be set as default."
    }))), /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      onSubmit: handleSubmit(submitCallback, onInvalid),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
        className: styles.heading,
        children: readOnly ? 'Contact point' : initialValues ? 'Update contact point' : 'Create contact point'
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
        label: "Name",
        invalid: !!errors.name,
        error: errors.name && errors.name.message,
        required: true,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({
          readOnly: readOnly,
          id: "name"
        }, register('name', {
          required: 'Name is required',
          validate: {
            nameIsAvailable: validateNameIsAvailable
          }
        }), {
          width: 39,
          placeholder: "Name"
        }))
      }), fields.map((field, index) => {
        var _errors$items;

        const pathPrefix = `items.${index}.`;

        if (field.__deleted) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(DeletedSubForm, {
            pathPrefix: pathPrefix
          }, field.__id);
        }

        const initialItem = initialValues === null || initialValues === void 0 ? void 0 : initialValues.items.find(_ref2 => {
          let {
            __id
          } = _ref2;
          return __id === field.__id;
        });
        return /*#__PURE__*/(0,jsx_runtime.jsx)(ChannelSubForm, {
          defaultValues: field,
          onDuplicate: () => {
            const currentValues = getValues().items[index];
            append(Object.assign({}, currentValues, {
              __id: String(Math.random())
            }));
          },
          onTest: onTestChannel ? () => {
            const currentValues = getValues().items[index];
            onTestChannel(currentValues);
          } : undefined,
          onDelete: () => remove(index),
          pathPrefix: pathPrefix,
          notifiers: notifiers,
          secureFields: initialItem === null || initialItem === void 0 ? void 0 : initialItem.secureFields,
          errors: errors === null || errors === void 0 ? void 0 : (_errors$items = errors.items) === null || _errors$items === void 0 ? void 0 : _errors$items[index],
          commonSettingsComponent: commonSettingsComponent,
          readOnly: readOnly
        }, field.__id);
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [!readOnly && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          type: "button",
          icon: "plus",
          variant: "secondary",
          onClick: () => append(Object.assign({}, defaultItem, {
            __id: String(Math.random())
          })),
          children: "New contact point type"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.buttons,
          children: [!readOnly && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [loading && (_Button || (_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
              disabled: true,
              icon: "fa fa-spinner",
              variant: "primary",
              children: "Saving..."
            }))), !loading && (_Button2 || (_Button2 = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
              type: "submit",
              children: "Save contact point"
            })))]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.LinkButton, {
            disabled: loading,
            fill: "outline",
            variant: "secondary",
            "data-testid": "cancel-button",
            href: (0,misc/* makeAMLink */.eQ)('alerting/notifications', alertManagerSourceName),
            children: "Cancel"
          })]
        })]
      })]
    })]
  }));
}

const ReceiverForm_getStyles = theme => ({
  heading: emotion_css_esm.css`
    margin: ${theme.spacing(4, 0)};
  `,
  buttons: emotion_css_esm.css`
    margin-top: ${theme.spacing(4)};

    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/CloudReceiverForm.tsx
var CloudReceiverForm_Alert;













const defaultChannelValues = Object.freeze({
  __id: '',
  sendResolved: true,
  secureSettings: {},
  settings: {},
  secureFields: {},
  type: 'email'
});
const CloudReceiverForm = _ref => {
  let {
    existing,
    alertManagerSourceName,
    config
  } = _ref;
  const dispatch = (0,es.useDispatch)();
  const isVanillaAM = (0,datasource/* isVanillaPrometheusAlertManagerDataSource */.RY)(alertManagerSourceName); // transform receiver DTO to form values

  const [existingValue] = (0,react.useMemo)(() => {
    if (!existing) {
      return [undefined, {}];
    }

    return cloudReceiverToFormValues(existing, cloudNotifierTypes);
  }, [existing]);

  const onSubmit = values => {
    const newReceiver = formValuesToCloudReceiver(values, defaultChannelValues);
    dispatch((0,actions/* updateAlertManagerConfigAction */.mM)({
      newConfig: updateConfigWithReceiver(config, newReceiver, existing === null || existing === void 0 ? void 0 : existing.name),
      oldConfig: config,
      alertManagerSourceName,
      successMessage: existing ? 'Contact point updated.' : 'Contact point created.',
      redirectPath: '/alerting/notifications'
    }));
  };

  const takenReceiverNames = (0,react.useMemo)(() => {
    var _config$alertmanager_, _config$alertmanager_2;

    return (_config$alertmanager_ = (_config$alertmanager_2 = config.alertmanager_config.receivers) === null || _config$alertmanager_2 === void 0 ? void 0 : _config$alertmanager_2.map(_ref2 => {
      let {
        name
      } = _ref2;
      return name;
    }).filter(name => name !== (existing === null || existing === void 0 ? void 0 : existing.name))) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : [];
  }, [config, existing]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [!isVanillaAM && (CloudReceiverForm_Alert || (CloudReceiverForm_Alert = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Alert, {
      title: "Info",
      severity: "info",
      children: "Note that empty string values will be replaced with global defaults where appropriate."
    }))), /*#__PURE__*/(0,jsx_runtime.jsx)(ReceiverForm, {
      config: config,
      onSubmit: onSubmit,
      initialValues: existingValue,
      notifiers: cloudNotifierTypes,
      alertManagerSourceName: alertManagerSourceName,
      defaultItem: defaultChannelValues,
      takenReceiverNames: takenReceiverNames,
      commonSettingsComponent: CloudCommonChannelSettings
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/GrafanaCommonChannelSettings.tsx




const GrafanaCommonChannelSettings = _ref => {
  let {
    pathPrefix,
    className
  } = _ref;
  const {
    register
  } = (0,index_esm/* useFormContext */.Gc)();
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: className,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Checkbox, Object.assign({}, register(`${pathPrefix}disableResolveMessage`), {
        label: "Disable resolved message",
        description: "Disable the resolve message [OK] that is sent when alerting state returns to false"
      }))
    })
  });
};
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx + 1 modules
var AnnotationsField = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx
var LabelsField = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/TestContactPointModal.tsx
var _Label, _strong, _AnnotationsField, _LabelsField, _Modal$ButtonRow;










var NotificationType;

(function (NotificationType) {
  NotificationType["predefined"] = "Predefined";
  NotificationType["custom"] = "Custom";
})(NotificationType || (NotificationType = {}));

const notificationOptions = Object.values(NotificationType).map(value => ({
  label: value,
  value: value
}));
const defaultValues = {
  annotations: [{
    key: '',
    value: ''
  }],
  labels: [{
    key: '',
    value: ''
  }]
};
const TestContactPointModal = _ref => {
  let {
    isOpen,
    onDismiss,
    onTest
  } = _ref;
  const [notificationType, setNotificationType] = (0,react.useState)(NotificationType.predefined);
  const styles = (0,src.useStyles2)(TestContactPointModal_getStyles);
  const formMethods = (0,index_esm/* useForm */.cI)({
    defaultValues,
    mode: 'onBlur'
  });

  const onSubmit = data => {
    if (notificationType === NotificationType.custom) {
      const alert = {
        annotations: data.annotations.filter(_ref2 => {
          let {
            key,
            value
          } = _ref2;
          return !!key && !!value;
        }).reduce((acc, _ref3) => {
          let {
            key,
            value
          } = _ref3;
          return Object.assign({}, acc, {
            [key]: value
          });
        }, {}),
        labels: data.labels.filter(_ref4 => {
          let {
            key,
            value
          } = _ref4;
          return !!key && !!value;
        }).reduce((acc, _ref5) => {
          let {
            key,
            value
          } = _ref5;
          return Object.assign({}, acc, {
            [key]: value
          });
        }, {})
      };
      onTest(alert);
    } else {
      onTest();
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(src.Modal, {
    onDismiss: onDismiss,
    isOpen: isOpen,
    title: 'Test contact point',
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.section,
      children: [_Label || (_Label = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Label, {
        children: "Notification message"
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(src.RadioButtonGroup, {
        options: notificationOptions,
        value: notificationType,
        onChange: value => setNotificationType(value)
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FormProvider */.RV, Object.assign({}, formMethods, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
        onSubmit: formMethods.handleSubmit(onSubmit),
        children: [notificationType === NotificationType.predefined && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.section,
          children: ["You will send a test notification that uses a predefined alert. If you have defined a custom template or message, for better results switch to ", _strong || (_strong = /*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: "custom"
          })), " notification message, from above."]
        }), notificationType === NotificationType.custom && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.section,
            children: "You will send a test notification that uses the annotations defined below. This is a good option if you use custom templates and messages."
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.section,
            children: _AnnotationsField || (_AnnotationsField = /*#__PURE__*/(0,jsx_runtime.jsx)(AnnotationsField/* default */.Z, {}))
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: styles.section,
            children: _LabelsField || (_LabelsField = /*#__PURE__*/(0,jsx_runtime.jsx)(LabelsField/* default */.Z, {}))
          })]
        }), _Modal$ButtonRow || (_Modal$ButtonRow = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Modal.ButtonRow, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            type: "submit",
            children: "Send test notification"
          })
        }))]
      })
    }))]
  });
};

const TestContactPointModal_getStyles = theme => ({
  flexRow: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: ${theme.spacing(1)};
  `,
  section: emotion_css_esm.css`
    margin-bottom: ${theme.spacing(2)};
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/form/GrafanaReceiverForm.tsx
var _LoadingPlaceholder;














const GrafanaReceiverForm_defaultChannelValues = Object.freeze({
  __id: '',
  secureSettings: {},
  settings: {},
  secureFields: {},
  disableResolveMessage: false,
  type: 'email'
});
const GrafanaReceiverForm = _ref => {
  let {
    existing,
    alertManagerSourceName,
    config
  } = _ref;
  const grafanaNotifiers = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.grafanaNotifiers);
  const [testChannelValues, setTestChannelValues] = (0,react.useState)();
  const dispatch = (0,es.useDispatch)();
  (0,react.useEffect)(() => {
    if (!(grafanaNotifiers.result || grafanaNotifiers.loading)) {
      dispatch((0,actions/* fetchGrafanaNotifiersAction */.Vj)());
    }
  }, [grafanaNotifiers, dispatch]); // transform receiver DTO to form values

  const [existingValue, id2original] = (0,react.useMemo)(() => {
    if (!existing || !grafanaNotifiers.result) {
      return [undefined, {}];
    }

    return grafanaReceiverToFormValues(existing, grafanaNotifiers.result);
  }, [existing, grafanaNotifiers.result]);

  const onSubmit = values => {
    const newReceiver = formValuesToGrafanaReceiver(values, id2original, GrafanaReceiverForm_defaultChannelValues);
    dispatch((0,actions/* updateAlertManagerConfigAction */.mM)({
      newConfig: updateConfigWithReceiver(config, newReceiver, existing === null || existing === void 0 ? void 0 : existing.name),
      oldConfig: config,
      alertManagerSourceName: datasource/* GRAFANA_RULES_SOURCE_NAME */.GC,
      successMessage: existing ? 'Contact point updated.' : 'Contact point created',
      redirectPath: '/alerting/notifications'
    }));
  };

  const onTestChannel = values => {
    setTestChannelValues(values);
  };

  const testNotification = alert => {
    if (testChannelValues) {
      const existing = id2original[testChannelValues.__id];
      const chan = formChannelValuesToGrafanaChannelConfig(testChannelValues, GrafanaReceiverForm_defaultChannelValues, 'test', existing);
      const payload = {
        alertManagerSourceName,
        receivers: [{
          name: 'test',
          grafana_managed_receiver_configs: [chan]
        }],
        alert
      };
      dispatch((0,actions/* testReceiversAction */.D8)(payload));
    }
  };

  const takenReceiverNames = (0,react.useMemo)(() => {
    var _config$alertmanager_, _config$alertmanager_2;

    return (_config$alertmanager_ = (_config$alertmanager_2 = config.alertmanager_config.receivers) === null || _config$alertmanager_2 === void 0 ? void 0 : _config$alertmanager_2.map(_ref2 => {
      let {
        name
      } = _ref2;
      return name;
    }).filter(name => name !== (existing === null || existing === void 0 ? void 0 : existing.name))) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : [];
  }, [config, existing]);

  if (grafanaNotifiers.result) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ReceiverForm, {
        config: config,
        onSubmit: onSubmit,
        initialValues: existingValue,
        onTestChannel: onTestChannel,
        notifiers: grafanaNotifiers.result,
        alertManagerSourceName: alertManagerSourceName,
        defaultItem: GrafanaReceiverForm_defaultChannelValues,
        takenReceiverNames: takenReceiverNames,
        commonSettingsComponent: GrafanaCommonChannelSettings
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(TestContactPointModal, {
        onDismiss: () => setTestChannelValues(undefined),
        isOpen: !!testChannelValues,
        onTest: alert => testNotification(alert)
      })]
    });
  } else {
    return _LoadingPlaceholder || (_LoadingPlaceholder = /*#__PURE__*/(0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
      text: "Loading notifiers..."
    }));
  }
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/EditReceiverView.tsx
var _InfoBox;







const EditReceiverView = _ref => {
  var _config$alertmanager_;

  let {
    config,
    receiverName,
    alertManagerSourceName
  } = _ref;
  const receiver = (_config$alertmanager_ = config.alertmanager_config.receivers) === null || _config$alertmanager_ === void 0 ? void 0 : _config$alertmanager_.find(_ref2 => {
    let {
      name
    } = _ref2;
    return name === receiverName;
  });

  if (!receiver) {
    return _InfoBox || (_InfoBox = /*#__PURE__*/(0,jsx_runtime.jsx)(src.InfoBox, {
      severity: "error",
      title: "Receiver not found",
      children: "Sorry, this receiver does not seem to exit."
    }));
  }

  if (alertManagerSourceName === datasource/* GRAFANA_RULES_SOURCE_NAME */.GC) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(GrafanaReceiverForm, {
      config: config,
      alertManagerSourceName: alertManagerSourceName,
      existing: receiver
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(CloudReceiverForm, {
      config: config,
      alertManagerSourceName: alertManagerSourceName,
      existing: receiver
    });
  }
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/utils/templates.ts
function ensureDefine(templateName, templateContent) {
  // notification template content must be wrapped in {{ define "name" }} tag,
  // but this is not obvious because user also has to provide name separately in the form.
  // so if user does not manually add {{ define }} tag, we do it automatically
  let content = templateContent.trim();

  if (!content.match(/\{\{\s*define/)) {
    const indentedContent = content.split('\n').map(line => '  ' + line).join('\n');
    content = `{{ define "${templateName}" }}\n${indentedContent}\n{{ end }}`;
  }

  return content;
}
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/TemplateForm.tsx
var TemplateForm_Button, TemplateForm_Button2;














const defaults = Object.freeze({
  name: '',
  content: ''
});
const TemplateForm = _ref => {
  var _data, _errors$name, _errors$name2, _errors$content, _errors$content2;

  let {
    existing,
    alertManagerSourceName,
    config
  } = _ref;
  const styles = (0,src.useStyles2)(TemplateForm_getStyles);
  const dispatch = (0,es.useDispatch)();
  (0,useCleanup/* useCleanup */.x)(state => state.unifiedAlerting.saveAMConfig);
  const {
    loading,
    error
  } = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.saveAMConfig);

  const submit = values => {
    var _config$alertmanager_;

    // wrap content in "define" if it's not already wrapped, in case user did not do it/
    // it's not obvious that this is needed for template to work
    const content = ensureDefine(values.name, values.content); // add new template to template map

    const template_files = Object.assign({}, config.template_files, {
      [values.name]: content
    }); // delete existing one (if name changed, otherwise it was overwritten in previous step)

    if (existing && existing.name !== values.name) {
      delete template_files[existing.name];
    } // make sure name for the template is configured on the alertmanager config object


    const templates = [...((_config$alertmanager_ = config.alertmanager_config.templates) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : []).filter(name => name !== (existing === null || existing === void 0 ? void 0 : existing.name)), values.name];
    const newConfig = {
      template_files,
      alertmanager_config: Object.assign({}, config.alertmanager_config, {
        templates
      })
    };
    dispatch((0,actions/* updateAlertManagerConfigAction */.mM)({
      alertManagerSourceName,
      newConfig,
      oldConfig: config,
      successMessage: 'Template saved.',
      redirectPath: '/alerting/notifications'
    }));
  };

  const {
    handleSubmit,
    register,
    formState: {
      errors
    }
  } = (0,index_esm/* useForm */.cI)({
    mode: 'onSubmit',
    defaultValues: existing !== null && existing !== void 0 ? existing : defaults
  });

  const validateNameIsUnique = name => {
    return !config.template_files[name] || (existing === null || existing === void 0 ? void 0 : existing.name) === name ? true : 'Another template with this name already exists.';
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
    onSubmit: handleSubmit(submit),
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
      children: existing ? 'Edit message template' : 'Create message template'
    }), error && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Alert, {
      severity: "error",
      title: "Error saving template",
      children: error.message || (error === null || error === void 0 ? void 0 : (_data = error.data) === null || _data === void 0 ? void 0 : _data.message) || String(error)
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
      label: "Template name",
      error: errors === null || errors === void 0 ? void 0 : (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message,
      invalid: !!((_errors$name2 = errors.name) !== null && _errors$name2 !== void 0 && _errors$name2.message),
      required: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Input, Object.assign({}, register('name', {
        required: {
          value: true,
          message: 'Required.'
        },
        validate: {
          nameIsUnique: validateNameIsUnique
        }
      }), {
        placeholder: "Give your template a name",
        width: 42,
        autoFocus: true
      }))
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
      description: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: ["You can use the", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: "https://pkg.go.dev/text/template?utm_source=godoc",
          target: "__blank",
          rel: "noreferrer",
          className: styles.externalLink,
          children: "Go templating language"
        }), ".", ' ', /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
          href: "https://prometheus.io/blog/2016/03/03/custom-alertmanager-templates/",
          target: "__blank",
          rel: "noreferrer",
          className: styles.externalLink,
          children: "More info about alertmanager templates"
        })]
      }),
      label: "Content",
      error: errors === null || errors === void 0 ? void 0 : (_errors$content = errors.content) === null || _errors$content === void 0 ? void 0 : _errors$content.message,
      invalid: !!((_errors$content2 = errors.content) !== null && _errors$content2 !== void 0 && _errors$content2.message),
      required: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.TextArea, Object.assign({}, register('content', {
        required: {
          value: true,
          message: 'Required.'
        }
      }), {
        className: styles.textarea,
        placeholder: "Message",
        rows: 12
      }))
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: styles.buttons,
      children: [loading && (TemplateForm_Button || (TemplateForm_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
        disabled: true,
        icon: "fa fa-spinner",
        variant: "primary",
        children: "Saving..."
      }))), !loading && (TemplateForm_Button2 || (TemplateForm_Button2 = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
        type: "submit",
        variant: "primary",
        children: "Save template"
      }))), /*#__PURE__*/(0,jsx_runtime.jsx)(src.LinkButton, {
        disabled: loading,
        href: (0,misc/* makeAMLink */.eQ)('alerting/notifications', alertManagerSourceName),
        variant: "secondary",
        type: "button",
        fill: "outline",
        children: "Cancel"
      })]
    })]
  });
};

const TemplateForm_getStyles = theme => ({
  externalLink: emotion_css_esm.css`
    color: ${theme.colors.text.secondary};
    text-decoration: underline;
  `,
  buttons: emotion_css_esm.css`
    & > * + * {
      margin-left: ${theme.spacing(1)};
    }
  `,
  textarea: emotion_css_esm.css`
    max-width: 758px;
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/EditTemplateView.tsx
var EditTemplateView_InfoBox;





const EditTemplateView = _ref => {
  var _config$template_file;

  let {
    config,
    templateName,
    alertManagerSourceName
  } = _ref;
  const template = (_config$template_file = config.template_files) === null || _config$template_file === void 0 ? void 0 : _config$template_file[templateName];

  if (!template) {
    return EditTemplateView_InfoBox || (EditTemplateView_InfoBox = /*#__PURE__*/(0,jsx_runtime.jsx)(src.InfoBox, {
      severity: "error",
      title: "Template not found",
      children: "Sorry, this template does not seem to exit."
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(TemplateForm, {
    alertManagerSourceName: alertManagerSourceName,
    config: config,
    existing: {
      name: templateName,
      content: template
    }
  });
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/GlobalConfigForm.tsx
var GlobalConfigForm_Button, GlobalConfigForm_Button2;

















const GlobalConfigForm_defaultValues = {
  smtp_require_tls: true
};
const GlobalConfigForm = _ref => {
  var _config$alertmanager_;

  let {
    config,
    alertManagerSourceName
  } = _ref;
  const dispatch = (0,es.useDispatch)();
  (0,useCleanup/* useCleanup */.x)(state => state.unifiedAlerting.saveAMConfig);
  const {
    loading,
    error
  } = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.saveAMConfig);
  const readOnly = (0,datasource/* isVanillaPrometheusAlertManagerDataSource */.RY)(alertManagerSourceName);
  const styles = (0,src.useStyles2)(GlobalConfigForm_getStyles);
  const formAPI = (0,index_esm/* useForm */.cI)({
    // making a copy here beacuse react-hook-form will mutate these, and break if the object is frozen. for real.
    defaultValues: JSON.parse(JSON.stringify(Object.assign({}, GlobalConfigForm_defaultValues, (_config$alertmanager_ = config.alertmanager_config.global) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : {})))
  });
  const {
    handleSubmit,
    formState: {
      errors
    }
  } = formAPI;

  const onSubmitCallback = values => {
    dispatch((0,actions/* updateAlertManagerConfigAction */.mM)({
      newConfig: Object.assign({}, config, {
        alertmanager_config: Object.assign({}, config.alertmanager_config, {
          global: omitEmptyValues(values)
        })
      }),
      oldConfig: config,
      alertManagerSourceName,
      successMessage: 'Global config updated.',
      redirectPath: (0,misc/* makeAMLink */.eQ)('/alerting/notifications', alertManagerSourceName)
    }));
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* FormProvider */.RV, Object.assign({}, formAPI, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("form", {
      onSubmit: handleSubmit(onSubmitCallback),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
        className: styles.heading,
        children: "Global config"
      }), error && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Alert, {
        severity: "error",
        title: "Error saving receiver",
        children: error.message || String(error)
      }), globalConfigOptions.map(option => /*#__PURE__*/(0,jsx_runtime.jsx)(OptionField, {
        readOnly: readOnly,
        defaultValue: GlobalConfigForm_defaultValues[option.propertyName],
        option: option,
        error: errors[option.propertyName],
        pathPrefix: ''
      }, option.propertyName)), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(src.HorizontalGroup, {
          children: [!readOnly && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [loading && (GlobalConfigForm_Button || (GlobalConfigForm_Button = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
              disabled: true,
              icon: "fa fa-spinner",
              variant: "primary",
              children: "Saving..."
            }))), !loading && (GlobalConfigForm_Button2 || (GlobalConfigForm_Button2 = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
              type: "submit",
              children: "Save global config"
            })))]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.LinkButton, {
            disabled: loading,
            fill: "outline",
            variant: "secondary",
            href: (0,misc/* makeAMLink */.eQ)('alerting/notifications', alertManagerSourceName),
            children: "Cancel"
          })]
        })
      })]
    })
  }));
};

const GlobalConfigForm_getStyles = theme => ({
  heading: emotion_css_esm.css`
    margin: ${theme.spacing(4, 0)};
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/NewReceiverView.tsx





const NewReceiverView = _ref => {
  let {
    alertManagerSourceName,
    config
  } = _ref;

  if (alertManagerSourceName === datasource/* GRAFANA_RULES_SOURCE_NAME */.GC) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(GrafanaReceiverForm, {
      alertManagerSourceName: alertManagerSourceName,
      config: config
    });
  } else {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(CloudReceiverForm, {
      alertManagerSourceName: alertManagerSourceName,
      config: config
    });
  }
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/NewTemplateView.tsx



const NewTemplateView = _ref => {
  let {
    config,
    alertManagerSourceName
  } = _ref;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TemplateForm, {
    config: config,
    alertManagerSourceName: alertManagerSourceName
  });
};
// EXTERNAL MODULE: ./public/app/types/index.ts + 4 modules
var types = __webpack_require__("./public/app/types/index.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/Authorize.tsx
var Authorize = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
// EXTERNAL MODULE: ./public/app/core/services/context_srv.ts
var context_srv = __webpack_require__("./public/app/core/services/context_srv.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/styles/table.ts
var table = __webpack_require__("./public/app/features/alerting/unified/styles/table.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/access-control.ts
var access_control = __webpack_require__("./public/app/features/alerting/unified/utils/access-control.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/alertmanager.ts
var alertmanager = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager.ts");
;// CONCATENATED MODULE: ./public/app/plugins/datasource/alertmanager/consts.ts
const receiverTypeNames = {
  pagerduty: 'PagerDuty',
  pushover: 'Pushover',
  slack: 'Slack',
  opsgenie: 'OpsGenie',
  webhook: 'Webhook',
  victorops: 'VictorOps',
  wechat: 'WeChat'
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/utils/receivers.ts


// name : count
function extractNotifierTypeCounts(receiver, grafanaNotifiers) {
  if (receiver['grafana_managed_receiver_configs']) {
    var _receiver$grafana_man;

    return getGrafanaNotifierTypeCounts((_receiver$grafana_man = receiver.grafana_managed_receiver_configs) !== null && _receiver$grafana_man !== void 0 ? _receiver$grafana_man : [], grafanaNotifiers);
  }

  return getCortexAlertManagerNotifierTypeCounts(receiver);
}

function getCortexAlertManagerNotifierTypeCounts(receiver) {
  return Object.entries(receiver).filter(_ref => {
    let [key] = _ref;
    return key !== 'grafana_managed_receiver_configs' && key.endsWith('_configs');
  }) // filter out only properties that are alertmanager notifier
  .filter(_ref2 => {
    let [_, value] = _ref2;
    return Array.isArray(value) && !!value.length;
  }) // check that there are actually notifiers of this type configured
  .reduce((acc, _ref3) => {
    var _receiverTypeNames$ty, _acc$name;

    let [key, value] = _ref3;
    const type = key.replace('_configs', ''); // remove the `_config` part from the key, making it intto a notifier name

    const name = (_receiverTypeNames$ty = receiverTypeNames[type]) !== null && _receiverTypeNames$ty !== void 0 ? _receiverTypeNames$ty : (0,lodash.capitalize)(type);
    return Object.assign({}, acc, {
      [name]: ((_acc$name = acc[name]) !== null && _acc$name !== void 0 ? _acc$name : 0) + (Array.isArray(value) ? value.length : 1)
    });
  }, {});
}

function getGrafanaNotifierTypeCounts(configs, grafanaNotifiers) {
  return configs.map(recv => recv.type) // extract types from config
  .map(type => {
    var _grafanaNotifiers$fin, _grafanaNotifiers$fin2;

    return (_grafanaNotifiers$fin = (_grafanaNotifiers$fin2 = grafanaNotifiers.find(r => r.type === type)) === null || _grafanaNotifiers$fin2 === void 0 ? void 0 : _grafanaNotifiers$fin2.name) !== null && _grafanaNotifiers$fin !== void 0 ? _grafanaNotifiers$fin : (0,lodash.capitalize)(type);
  }) // get readable name from notifier cofnig, or if not available, just capitalize
  .reduce((acc, type) => {
    var _acc$type;

    return Object.assign({}, acc, {
      [type]: ((_acc$type = acc[type]) !== null && _acc$type !== void 0 ? _acc$type : 0) + 1
    });
  }, {});
}
// EXTERNAL MODULE: ./.yarn/__virtual__/react-router-dom-virtual-e45eb1b58b/0/cache/react-router-dom-npm-5.3.0-aa9adb5bec-47584fd629.zip/node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__("./.yarn/__virtual__/react-router-dom-virtual-e45eb1b58b/0/cache/react-router-dom-npm-5.3.0-aa9adb5bec-47584fd629.zip/node_modules/react-router-dom/esm/react-router-dom.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/ReceiversSection.tsx







const ReceiversSection = _ref => {
  let {
    className,
    title,
    description,
    addButtonLabel,
    addButtonTo,
    children,
    showButton = true
  } = _ref;
  const styles = (0,src.useStyles2)(ReceiversSection_getStyles);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: (0,emotion_css_esm.cx)(styles.heading, className),
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
          children: title
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          className: styles.description,
          children: description
        })]
      }), showButton && /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom.Link, {
        to: addButtonTo,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          type: "button",
          icon: "plus",
          children: addButtonLabel
        })
      })]
    }), children]
  });
};

const ReceiversSection_getStyles = theme => ({
  heading: emotion_css_esm.css`
    display: flex;
    justify-content: space-between;
  `,
  description: emotion_css_esm.css`
    color: ${theme.colors.text.secondary};
  `
});
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/ReceiversTable.tsx
var _col, _col2, _col3, ReceiversTable_th, ReceiversTable_th2, ReceiversTable_th3, _td, _p;




















const ReceiversTable = _ref => {
  let {
    config,
    alertManagerName
  } = _ref;
  const dispatch = (0,es.useDispatch)();
  const tableStyles = (0,src.useStyles2)(table/* getAlertTableStyles */.D);
  const styles = (0,src.useStyles2)(ReceiversTable_getStyles);
  const isVanillaAM = (0,datasource/* isVanillaPrometheusAlertManagerDataSource */.RY)(alertManagerName);
  const permissions = (0,access_control/* getNotificationsPermissions */.Ko)(alertManagerName);
  const grafanaNotifiers = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.grafanaNotifiers); // receiver name slated for deletion. If this is set, a confirmation modal is shown. If user approves, this receiver is deleted

  const [receiverToDelete, setReceiverToDelete] = (0,react.useState)();
  const [showCannotDeleteReceiverModal, setShowCannotDeleteReceiverModal] = (0,react.useState)(false);

  const onClickDeleteReceiver = receiverName => {
    if ((0,alertmanager/* isReceiverUsed */.nv)(receiverName, config)) {
      setShowCannotDeleteReceiverModal(true);
    } else {
      setReceiverToDelete(receiverName);
    }
  };

  const deleteReceiver = () => {
    if (receiverToDelete) {
      dispatch((0,actions/* deleteReceiverAction */.X4)(receiverToDelete, alertManagerName));
    }

    setReceiverToDelete(undefined);
  };

  const rows = (0,react.useMemo)(() => {
    var _config$alertmanager_, _config$alertmanager_2;

    return (_config$alertmanager_ = (_config$alertmanager_2 = config.alertmanager_config.receivers) === null || _config$alertmanager_2 === void 0 ? void 0 : _config$alertmanager_2.map(receiver => {
      var _grafanaNotifiers$res;

      return {
        name: receiver.name,
        types: Object.entries(extractNotifierTypeCounts(receiver, (_grafanaNotifiers$res = grafanaNotifiers.result) !== null && _grafanaNotifiers$res !== void 0 ? _grafanaNotifiers$res : [])).map(_ref2 => {
          let [type, count] = _ref2;

          if (count > 1) {
            return `${type} (${count})`;
          }

          return type;
        })
      };
    })) !== null && _config$alertmanager_ !== void 0 ? _config$alertmanager_ : [];
  }, [config, grafanaNotifiers.result]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ReceiversSection, {
    className: styles.section,
    title: "Contact points",
    description: "Define where the notifications will be sent to, for example email or Slack.",
    showButton: !isVanillaAM && context_srv/* contextSrv.hasPermission */.Vt.hasPermission(permissions.create),
    addButtonLabel: "New contact point",
    addButtonTo: (0,misc/* makeAMLink */.eQ)('/alerting/notifications/receivers/new', alertManagerName),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
      className: tableStyles.table,
      "data-testid": "receivers-table",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("colgroup", {
        children: [_col || (_col = /*#__PURE__*/(0,jsx_runtime.jsx)("col", {})), _col2 || (_col2 = /*#__PURE__*/(0,jsx_runtime.jsx)("col", {})), /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
          actions: [permissions.update, permissions.delete],
          children: _col3 || (_col3 = /*#__PURE__*/(0,jsx_runtime.jsx)("col", {}))
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          children: [ReceiversTable_th || (ReceiversTable_th = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: "Contact point name"
          })), ReceiversTable_th2 || (ReceiversTable_th2 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: "Type"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
            actions: [permissions.update, permissions.delete],
            children: ReceiversTable_th3 || (ReceiversTable_th3 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: "Actions"
            }))
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tbody", {
        children: [!rows.length && /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
          className: tableStyles.evenRow,
          children: _td || (_td = /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            colSpan: 3,
            children: "No receivers defined."
          }))
        }), rows.map((receiver, idx) => /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          className: idx % 2 === 0 ? tableStyles.evenRow : undefined,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            children: receiver.name
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            children: receiver.types.join(', ')
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
            actions: [permissions.update, permissions.delete],
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
              className: tableStyles.actionsCell,
              children: [!isVanillaAM && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
                  actions: [permissions.update],
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(ActionIcon/* ActionIcon */.A, {
                    "aria-label": "Edit",
                    "data-testid": "edit",
                    to: (0,misc/* makeAMLink */.eQ)(`/alerting/notifications/receivers/${encodeURIComponent(receiver.name)}/edit`, alertManagerName),
                    tooltip: "Edit contact point",
                    icon: "pen"
                  })
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
                  actions: [permissions.delete],
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)(ActionIcon/* ActionIcon */.A, {
                    onClick: () => onClickDeleteReceiver(receiver.name),
                    tooltip: "Delete contact point",
                    icon: "trash-alt"
                  })
                })]
              }), isVanillaAM && /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
                actions: [permissions.update],
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(ActionIcon/* ActionIcon */.A, {
                  "data-testid": "view",
                  to: (0,misc/* makeAMLink */.eQ)(`/alerting/notifications/receivers/${encodeURIComponent(receiver.name)}/edit`, alertManagerName),
                  tooltip: "View contact point",
                  icon: "file-alt"
                })
              })]
            })
          })]
        }, receiver.name))]
      })]
    }), !!showCannotDeleteReceiverModal && /*#__PURE__*/(0,jsx_runtime.jsxs)(src.Modal, {
      isOpen: true,
      title: "Cannot delete contact point",
      onDismiss: () => setShowCannotDeleteReceiverModal(false),
      children: [_p || (_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: "Contact point cannot be deleted because it is used in more policies. Please update or delete these policies first."
      })), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Modal.ButtonRow, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
          variant: "secondary",
          onClick: () => setShowCannotDeleteReceiverModal(false),
          fill: "outline",
          children: "Close"
        })
      })]
    }), !!receiverToDelete && /*#__PURE__*/(0,jsx_runtime.jsx)(src.ConfirmModal, {
      isOpen: true,
      title: "Delete contact point",
      body: `Are you sure you want to delete contact point "${receiverToDelete}"?`,
      confirmText: "Yes, delete",
      onConfirm: deleteReceiver,
      onDismiss: () => setReceiverToDelete(undefined)
    })]
  });
};

const ReceiversTable_getStyles = theme => ({
  section: emotion_css_esm.css`
    margin-top: ${theme.spacing(4)};
  `
});
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/DetailsField.tsx
var DetailsField = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/TemplatesTable.tsx
var TemplatesTable_col, TemplatesTable_col2, TemplatesTable_th, TemplatesTable_th2, TemplatesTable_th3, TemplatesTable_td, _td2;
















const TemplatesTable = _ref => {
  let {
    config,
    alertManagerName
  } = _ref;
  const dispatch = (0,es.useDispatch)();
  const [expandedTemplates, setExpandedTemplates] = (0,react.useState)({});
  const tableStyles = (0,src.useStyles2)(table/* getAlertTableStyles */.D);
  const permissions = (0,access_control/* getNotificationsPermissions */.Ko)(alertManagerName);
  const templateRows = (0,react.useMemo)(() => Object.entries(config.template_files), [config]);
  const [templateToDelete, setTemplateToDelete] = (0,react.useState)();

  const deleteTemplate = () => {
    if (templateToDelete) {
      dispatch((0,actions/* deleteTemplateAction */.S6)(templateToDelete, alertManagerName));
    }

    setTemplateToDelete(undefined);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ReceiversSection, {
    title: "Message templates",
    description: "Templates construct the messages that get sent to the contact points.",
    addButtonLabel: "New template",
    addButtonTo: (0,misc/* makeAMLink */.eQ)('/alerting/notifications/templates/new', alertManagerName),
    showButton: context_srv/* contextSrv.hasPermission */.Vt.hasPermission(permissions.create),
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("table", {
      className: tableStyles.table,
      "data-testid": "templates-table",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("colgroup", {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("col", {
          className: tableStyles.colExpand
        }), TemplatesTable_col || (TemplatesTable_col = /*#__PURE__*/(0,jsx_runtime.jsx)("col", {})), TemplatesTable_col2 || (TemplatesTable_col2 = /*#__PURE__*/(0,jsx_runtime.jsx)("col", {}))]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("thead", {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
          children: [TemplatesTable_th || (TemplatesTable_th = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {})), TemplatesTable_th2 || (TemplatesTable_th2 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
            children: "Template"
          })), /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
            actions: [permissions.update, permissions.delete],
            children: TemplatesTable_th3 || (TemplatesTable_th3 = /*#__PURE__*/(0,jsx_runtime.jsx)("th", {
              children: "Actions"
            }))
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("tbody", {
        children: [!templateRows.length && /*#__PURE__*/(0,jsx_runtime.jsx)("tr", {
          className: tableStyles.evenRow,
          children: TemplatesTable_td || (TemplatesTable_td = /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
            colSpan: 3,
            children: "No templates defined."
          }))
        }), templateRows.map((_ref2, idx) => {
          let [name, content] = _ref2;
          const isExpanded = !!expandedTemplates[name];
          return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: idx % 2 === 0 ? tableStyles.evenRow : undefined,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(CollapseToggle/* CollapseToggle */.U, {
                  isCollapsed: !expandedTemplates[name],
                  onToggle: () => setExpandedTemplates(Object.assign({}, expandedTemplates, {
                    [name]: !isExpanded
                  }))
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                children: name
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
                actions: [permissions.update, permissions.delete],
                children: /*#__PURE__*/(0,jsx_runtime.jsxs)("td", {
                  className: tableStyles.actionsCell,
                  children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
                    actions: [permissions.update],
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ActionIcon/* ActionIcon */.A, {
                      to: (0,misc/* makeAMLink */.eQ)(`/alerting/notifications/templates/${encodeURIComponent(name)}/edit`, alertManagerName),
                      tooltip: "edit template",
                      icon: "pen"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
                    actions: [permissions.delete],
                    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ActionIcon/* ActionIcon */.A, {
                      onClick: () => setTemplateToDelete(name),
                      tooltip: "delete template",
                      icon: "trash-alt"
                    })
                  })]
                })
              })]
            }, name), isExpanded && /*#__PURE__*/(0,jsx_runtime.jsxs)("tr", {
              className: idx % 2 === 0 ? tableStyles.evenRow : undefined,
              children: [_td2 || (_td2 = /*#__PURE__*/(0,jsx_runtime.jsx)("td", {})), /*#__PURE__*/(0,jsx_runtime.jsx)("td", {
                colSpan: 2,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(DetailsField/* DetailsField */.C, {
                  label: "Description",
                  horizontal: true,
                  children: /*#__PURE__*/(0,jsx_runtime.jsx)("pre", {
                    children: content
                  })
                })
              })]
            })]
          }, name);
        })]
      })]
    }), !!templateToDelete && /*#__PURE__*/(0,jsx_runtime.jsx)(src.ConfirmModal, {
      isOpen: true,
      title: "Delete template",
      body: `Are you sure you want to delete template "${templateToDelete}"?`,
      confirmText: "Yes, delete",
      onConfirm: deleteTemplate,
      onDismiss: () => setTemplateToDelete(undefined)
    })]
  });
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/receivers/ReceiversAndTemplatesView.tsx
var ReceiversAndTemplatesView_p;













const ReceiversAndTemplatesView = _ref => {
  let {
    config,
    alertManagerName
  } = _ref;
  const isCloud = alertManagerName !== datasource/* GRAFANA_RULES_SOURCE_NAME */.GC;
  const styles = (0,src.useStyles2)(ReceiversAndTemplatesView_getStyles);
  const isVanillaAM = (0,datasource/* isVanillaPrometheusAlertManagerDataSource */.RY)(alertManagerName);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [!isVanillaAM && /*#__PURE__*/(0,jsx_runtime.jsx)(TemplatesTable, {
      config: config,
      alertManagerName: alertManagerName
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(ReceiversTable, {
      config: config,
      alertManagerName: alertManagerName
    }), isCloud && /*#__PURE__*/(0,jsx_runtime.jsx)(Authorize/* Authorize */.q, {
      actions: [types/* AccessControlAction.AlertingNotificationsExternalWrite */.bW.AlertingNotificationsExternalWrite],
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(src.Alert, {
        className: styles.section,
        severity: "info",
        title: "Global config for contact points",
        children: [ReceiversAndTemplatesView_p || (ReceiversAndTemplatesView_p = /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "For each external Alertmanager you can define global settings, like server addresses, usernames and password, for all the supported contact points."
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(src.LinkButton, {
          href: (0,misc/* makeAMLink */.eQ)('alerting/notifications/global-config', alertManagerName),
          variant: "secondary",
          children: isVanillaAM ? 'View global config' : 'Edit global config'
        })]
      })
    })]
  });
};

const ReceiversAndTemplatesView_getStyles = theme => ({
  section: emotion_css_esm.css`
    margin-top: ${theme.spacing(4)};
  `
});
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts
var useAlertManagerSourceName = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts
var useAlertManagerSources = __webpack_require__("./public/app/features/alerting/unified/hooks/useAlertManagerSources.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/redux.ts
var redux = __webpack_require__("./public/app/features/alerting/unified/utils/redux.ts");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/Receivers.tsx
var _Redirect, Receivers_LoadingPlaceholder;























const Receivers = () => {
  const alertManagers = (0,useAlertManagerSources/* useAlertManagersByPermission */.k)('notification');
  const [alertManagerSourceName, setAlertManagerSourceName] = (0,useAlertManagerSourceName/* useAlertManagerSourceName */.k)(alertManagers);
  const dispatch = (0,es.useDispatch)();
  const location = (0,react_router/* useLocation */.TH)();
  const isRoot = location.pathname.endsWith('/alerting/notifications');
  const configRequests = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.amConfigs);
  const {
    result: config,
    loading,
    error
  } = alertManagerSourceName && configRequests[alertManagerSourceName] || redux/* initialAsyncRequestState */.oq;
  const receiverTypes = (0,useUnifiedAlertingSelector/* useUnifiedAlertingSelector */._)(state => state.grafanaNotifiers);
  const shouldLoadConfig = isRoot || !config;
  (0,react.useEffect)(() => {
    if (alertManagerSourceName && shouldLoadConfig) {
      dispatch((0,actions/* fetchAlertManagerConfigAction */.Yh)(alertManagerSourceName));
    }
  }, [alertManagerSourceName, dispatch, shouldLoadConfig]);
  (0,react.useEffect)(() => {
    if (alertManagerSourceName === datasource/* GRAFANA_RULES_SOURCE_NAME */.GC && !(receiverTypes.result || receiverTypes.loading || receiverTypes.error)) {
      dispatch((0,actions/* fetchGrafanaNotifiersAction */.Vj)());
    }
  }, [alertManagerSourceName, dispatch, receiverTypes]);
  const disableAmSelect = !isRoot;

  if (!alertManagerSourceName) {
    return isRoot ? /*#__PURE__*/(0,jsx_runtime.jsx)(AlertingPageWrapper/* AlertingPageWrapper */.J, {
      pageId: "receivers",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(NoAlertManagerWarning/* NoAlertManagerWarning */.I, {
        availableAlertManagers: alertManagers
      })
    }) : _Redirect || (_Redirect = /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
      to: "/alerting/notifications"
    }));
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(AlertingPageWrapper/* AlertingPageWrapper */.J, {
    pageId: "receivers",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(AlertManagerPicker/* AlertManagerPicker */.P, {
      current: alertManagerSourceName,
      disabled: disableAmSelect,
      onChange: setAlertManagerSourceName,
      dataSources: alertManagers
    }), error && !loading && /*#__PURE__*/(0,jsx_runtime.jsx)(src.Alert, {
      severity: "error",
      title: "Error loading Alertmanager config",
      children: error.message || 'Unknown error.'
    }), loading && !config && (Receivers_LoadingPlaceholder || (Receivers_LoadingPlaceholder = /*#__PURE__*/(0,jsx_runtime.jsx)(src.LoadingPlaceholder, {
      text: "loading configuration..."
    }))), config && !error && /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        exact: true,
        path: "/alerting/notifications",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ReceiversAndTemplatesView, {
          config: config,
          alertManagerName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        exact: true,
        path: "/alerting/notifications/templates/new",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(NewTemplateView, {
          config: config,
          alertManagerSourceName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        exact: true,
        path: "/alerting/notifications/templates/:name/edit",
        children: _ref => {
          let {
            match
          } = _ref;
          return (match === null || match === void 0 ? void 0 : match.params.name) && /*#__PURE__*/(0,jsx_runtime.jsx)(EditTemplateView, {
            alertManagerSourceName: alertManagerSourceName,
            config: config,
            templateName: decodeURIComponent(match === null || match === void 0 ? void 0 : match.params.name)
          });
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        exact: true,
        path: "/alerting/notifications/receivers/new",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(NewReceiverView, {
          config: config,
          alertManagerSourceName: alertManagerSourceName
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        exact: true,
        path: "/alerting/notifications/receivers/:name/edit",
        children: _ref2 => {
          let {
            match
          } = _ref2;
          return (match === null || match === void 0 ? void 0 : match.params.name) && /*#__PURE__*/(0,jsx_runtime.jsx)(EditReceiverView, {
            alertManagerSourceName: alertManagerSourceName,
            config: config,
            receiverName: decodeURIComponent(match === null || match === void 0 ? void 0 : match.params.name)
          });
        }
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        exact: true,
        path: "/alerting/notifications/global-config",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(GlobalConfigForm, {
          config: config,
          alertManagerSourceName: alertManagerSourceName
        })
      })]
    })]
  });
};

/* harmony default export */ const unified_Receivers = ((0,src.withErrorBoundary)(Receivers, {
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

/***/ "./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ rule_editor_AnnotationsField)
});

// EXTERNAL MODULE: ./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js
var react = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
// EXTERNAL MODULE: ./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
// EXTERNAL MODULE: ./packages/grafana-ui/src/index.ts + 14 modules
var src = __webpack_require__("./packages/grafana-ui/src/index.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/utils/constants.ts
var constants = __webpack_require__("./public/app/features/alerting/unified/utils/constants.ts");
// EXTERNAL MODULE: ./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx
var SelectWIthAdd = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx");
// EXTERNAL MODULE: ./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rule-editor/AnnotationKeyInput.tsx
const _excluded = ["value", "existingKeys", "aria-label"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const AnnotationKeyInput = _ref => {
  let {
    value,
    existingKeys,
    'aria-label': ariaLabel
  } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  const annotationOptions = (0,react.useMemo)(() => Object.values(constants/* Annotation */.q6).filter(key => !existingKeys.includes(key)) // remove keys already taken in other annotations
  .map(key => ({
    value: key,
    label: constants/* annotationLabels */.vY[key]
  })), [existingKeys]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(SelectWIthAdd/* SelectWithAdd */.P, Object.assign({
    "aria-label": ariaLabel,
    value: value,
    options: annotationOptions,
    custom: !!value && !Object.values(constants/* Annotation */.q6).includes(value)
  }, rest));
};
;// CONCATENATED MODULE: ./public/app/features/alerting/unified/components/rule-editor/AnnotationsField.tsx
const AnnotationsField_excluded = ["ref"];

var _Label;

function AnnotationsField_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const AnnotationsField = () => {
  const styles = (0,src.useStyles)(getStyles);
  const {
    control,
    register,
    watch,
    formState: {
      errors
    }
  } = (0,index_esm/* useFormContext */.Gc)();
  const annotations = watch('annotations');
  const existingKeys = (0,react.useCallback)(index => annotations.filter((_, idx) => idx !== index).map(_ref => {
    let {
      key
    } = _ref;
    return key;
  }), [annotations]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [_Label || (_Label = /*#__PURE__*/(0,jsx_runtime.jsx)(src.Label, {
      children: "Summary and annotations"
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(src.FieldArray, {
      name: 'annotations',
      control: control,
      children: _ref2 => {
        let {
          fields,
          append,
          remove
        } = _ref2;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: styles.flexColumn,
          children: [fields.map((field, index) => {
            var _annotations$index, _annotations$index$ke, _errors$annotations, _errors$annotations$i, _errors$annotations$i2, _errors$annotations2, _errors$annotations2$, _errors$annotations2$2, _annotations$index2, _errors$annotations3, _errors$annotations3$, _errors$annotations3$2, _errors$annotations4, _errors$annotations4$, _errors$annotations4$2;

            const isUrl = (_annotations$index = annotations[index]) === null || _annotations$index === void 0 ? void 0 : (_annotations$index$ke = _annotations$index.key) === null || _annotations$index$ke === void 0 ? void 0 : _annotations$index$ke.toLocaleLowerCase().endsWith('url');
            const ValueInputComponent = isUrl ? src.Input : src.TextArea;
            return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: styles.flexRow,
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
                className: styles.field,
                invalid: !!((_errors$annotations = errors.annotations) !== null && _errors$annotations !== void 0 && (_errors$annotations$i = _errors$annotations[index]) !== null && _errors$annotations$i !== void 0 && (_errors$annotations$i2 = _errors$annotations$i.key) !== null && _errors$annotations$i2 !== void 0 && _errors$annotations$i2.message),
                error: (_errors$annotations2 = errors.annotations) === null || _errors$annotations2 === void 0 ? void 0 : (_errors$annotations2$ = _errors$annotations2[index]) === null || _errors$annotations2$ === void 0 ? void 0 : (_errors$annotations2$2 = _errors$annotations2$.key) === null || _errors$annotations2$2 === void 0 ? void 0 : _errors$annotations2$2.message,
                "data-testid": `annotation-key-${index}`,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(src.InputControl, {
                  name: `annotations[${index}].key`,
                  render: _ref3 => {
                    let {} = _ref3,
                        field = AnnotationsField_objectWithoutPropertiesLoose(_ref3.field, AnnotationsField_excluded);

                    return /*#__PURE__*/(0,jsx_runtime.jsx)(AnnotationKeyInput, Object.assign({}, field, {
                      "aria-label": `Annotation detail ${index + 1}`,
                      existingKeys: existingKeys(index),
                      width: 18
                    }));
                  },
                  control: control,
                  rules: {
                    required: {
                      value: !!((_annotations$index2 = annotations[index]) !== null && _annotations$index2 !== void 0 && _annotations$index2.value),
                      message: 'Required.'
                    }
                  }
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Field, {
                className: (0,emotion_css_esm.cx)(styles.flexRowItemMargin, styles.field),
                invalid: !!((_errors$annotations3 = errors.annotations) !== null && _errors$annotations3 !== void 0 && (_errors$annotations3$ = _errors$annotations3[index]) !== null && _errors$annotations3$ !== void 0 && (_errors$annotations3$2 = _errors$annotations3$.value) !== null && _errors$annotations3$2 !== void 0 && _errors$annotations3$2.message),
                error: (_errors$annotations4 = errors.annotations) === null || _errors$annotations4 === void 0 ? void 0 : (_errors$annotations4$ = _errors$annotations4[index]) === null || _errors$annotations4$ === void 0 ? void 0 : (_errors$annotations4$2 = _errors$annotations4$.value) === null || _errors$annotations4$2 === void 0 ? void 0 : _errors$annotations4$2.message,
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(ValueInputComponent, Object.assign({
                  "data-testid": `annotation-value-${index}`,
                  className: (0,emotion_css_esm.cx)(styles.annotationValueInput, {
                    [styles.textarea]: !isUrl
                  })
                }, register(`annotations[${index}].value`), {
                  placeholder: isUrl ? 'https://' : `Text`,
                  defaultValue: field.value
                }))
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
                type: "button",
                className: styles.flexRowItemMargin,
                "aria-label": "delete annotation",
                icon: "trash-alt",
                variant: "secondary",
                onClick: () => remove(index)
              })]
            }, field.id);
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(src.Button, {
            className: styles.addAnnotationsButton,
            icon: "plus-circle",
            type: "button",
            variant: "secondary",
            onClick: () => {
              append({
                key: '',
                value: ''
              });
            },
            children: "Add info"
          })]
        });
      }
    })]
  });
};

const getStyles = theme => ({
  annotationValueInput: emotion_css_esm.css`
    width: 426px;
  `,
  textarea: emotion_css_esm.css`
    height: 76px;
  `,
  addAnnotationsButton: emotion_css_esm.css`
    flex-grow: 0;
    align-self: flex-start;
    margin-left: 148px;
  `,
  flexColumn: emotion_css_esm.css`
    display: flex;
    flex-direction: column;
  `,
  field: emotion_css_esm.css`
    margin-bottom: ${theme.spacing.xs};
  `,
  flexRow: emotion_css_esm.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `,
  flexRowItemMargin: emotion_css_esm.css`
    margin-left: ${theme.spacing.xs};
  `
});

/* harmony default export */ const rule_editor_AnnotationsField = (AnnotationsField);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/LabelsField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/__virtual__/react-hook-form-virtual-92b6119fd4/0/cache/react-hook-form-npm-7.5.3-f9cc466c62-fbfaa3b664.zip/node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _Label, _InlineLabel;









const LabelsField = _ref => {
  let {
    className
  } = _ref;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles)(getStyles);
  const {
    register,
    control,
    watch,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__/* .useFormContext */ .Gc)();
  const labels = watch('labels');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(className, styles.wrapper),
    children: [_Label || (_Label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Label, {
      children: "Custom Labels"
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldArray, {
      control: control,
      name: "labels",
      children: _ref2 => {
        let {
          fields,
          append,
          remove
        } = _ref2;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: styles.flexRow,
            children: [_InlineLabel || (_InlineLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
              width: 18,
              children: "Labels"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: styles.flexColumn,
              children: [fields.map((field, index) => {
                var _errors$labels, _errors$labels$index, _errors$labels$index$, _errors$labels2, _errors$labels2$index, _errors$labels2$index2, _labels$index, _errors$labels3, _errors$labels3$index, _errors$labels3$index2, _errors$labels4, _errors$labels4$index, _errors$labels4$index2, _labels$index2;

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(styles.flexRow, styles.centerAlignRow),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      className: styles.labelInput,
                      invalid: !!((_errors$labels = errors.labels) !== null && _errors$labels !== void 0 && (_errors$labels$index = _errors$labels[index]) !== null && _errors$labels$index !== void 0 && (_errors$labels$index$ = _errors$labels$index.key) !== null && _errors$labels$index$ !== void 0 && _errors$labels$index$.message),
                      error: (_errors$labels2 = errors.labels) === null || _errors$labels2 === void 0 ? void 0 : (_errors$labels2$index = _errors$labels2[index]) === null || _errors$labels2$index === void 0 ? void 0 : (_errors$labels2$index2 = _errors$labels2$index.key) === null || _errors$labels2$index2 === void 0 ? void 0 : _errors$labels2$index2.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`labels[${index}].key`, {
                        required: {
                          value: !!((_labels$index = labels[index]) !== null && _labels$index !== void 0 && _labels$index.value),
                          message: 'Required.'
                        }
                      }), {
                        placeholder: "key",
                        "data-testid": `label-key-${index}`,
                        defaultValue: field.key
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineLabel, {
                      className: styles.equalSign,
                      children: "="
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Field, {
                      className: styles.labelInput,
                      invalid: !!((_errors$labels3 = errors.labels) !== null && _errors$labels3 !== void 0 && (_errors$labels3$index = _errors$labels3[index]) !== null && _errors$labels3$index !== void 0 && (_errors$labels3$index2 = _errors$labels3$index.value) !== null && _errors$labels3$index2 !== void 0 && _errors$labels3$index2.message),
                      error: (_errors$labels4 = errors.labels) === null || _errors$labels4 === void 0 ? void 0 : (_errors$labels4$index = _errors$labels4[index]) === null || _errors$labels4$index === void 0 ? void 0 : (_errors$labels4$index2 = _errors$labels4$index.value) === null || _errors$labels4$index2 === void 0 ? void 0 : _errors$labels4$index2.message,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, Object.assign({}, register(`labels[${index}].value`, {
                        required: {
                          value: !!((_labels$index2 = labels[index]) !== null && _labels$index2 !== void 0 && _labels$index2.key),
                          message: 'Required.'
                        }
                      }), {
                        placeholder: "value",
                        "data-testid": `label-value-${index}`,
                        defaultValue: field.value
                      }))
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                      className: styles.deleteLabelButton,
                      "aria-label": "delete label",
                      icon: "trash-alt",
                      variant: "secondary",
                      onClick: () => {
                        remove(index);
                      }
                    })]
                  })
                }, field.id);
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
                className: styles.addLabelButton,
                icon: "plus-circle",
                type: "button",
                variant: "secondary",
                onClick: () => {
                  append({});
                },
                children: "Add label"
              })]
            })]
          })
        });
      }
    })]
  });
};

const getStyles = theme => {
  return {
    wrapper: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-top: ${theme.spacing.md};
    `,
    flexColumn: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: column;
    `,
    flexRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      & + button {
        margin-left: ${theme.spacing.xs};
      }
    `,
    deleteLabelButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      margin-left: ${theme.spacing.xs};
      align-self: flex-start;
    `,
    addLabelButton: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      flex-grow: 0;
      align-self: flex-start;
    `,
    centerAlignRow: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-items: baseline;
    `,
    equalSign: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      align-self: flex-start;
      width: 28px;
      justify-content: center;
      margin-left: ${theme.spacing.xs};
    `,
    labelInput: _emotion_css__WEBPACK_IMPORTED_MODULE_0__.css`
      width: 183px;
      margin-bottom: ${theme.spacing.sm};
      & + & {
        margin-left: ${theme.spacing.sm};
      }
    `
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelsField);

/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/SelectWIthAdd.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ SelectWithAdd)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");



const SelectWithAdd = _ref => {
  let {
    value,
    onChange,
    options,
    className,
    placeholder,
    width,
    custom,
    onCustomChange,
    disabled = false,
    addLabel = '+ Add new',
    'aria-label': ariaLabel
  } = _ref;
  const [isCustom, setIsCustom] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(custom);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (custom) {
      setIsCustom(custom);
    }
  }, [custom]);

  const _options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [...options, {
    value: '__add__',
    label: addLabel
  }], [options, addLabel]);

  if (isCustom) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Input, {
      "aria-label": ariaLabel,
      width: width,
      autoFocus: !custom,
      value: value || '',
      placeholder: placeholder,
      className: className,
      disabled: disabled,
      onChange: e => onChange(e.target.value)
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Select, {
      "aria-label": ariaLabel,
      width: width,
      options: _options,
      value: value,
      className: className,
      placeholder: placeholder,
      disabled: disabled,
      onChange: val => {
        const value = val === null || val === void 0 ? void 0 : val.value;

        if (value === '__add__') {
          setIsCustom(true);

          if (onCustomChange) {
            onCustomChange(true);
          }

          onChange('');
        } else {
          onChange(value);
        }
      }
    });
  }
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