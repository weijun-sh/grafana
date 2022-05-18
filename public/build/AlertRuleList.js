"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertRuleList"],{

/***/ "./public/app/features/alerting/AlertHowToModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertHowToModal": () => (/* binding */ AlertHowToModal)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _VerticalGroup;





function AlertHowToModal({
  onDismiss
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    title: "Adding an Alert",
    isOpen: true,
    onDismiss: onDismiss,
    onClickBackdrop: onDismiss,
    children: _VerticalGroup || (_VerticalGroup = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.VerticalGroup, {
      spacing: "sm",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: "public/img/alert_howto_new.png",
        alt: "link to how to alert image"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        children: "Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        children: "Remember to save the dashboard to persist your alert rule changes."
      })]
    }))
  });
}

/***/ }),

/***/ "./public/app/features/alerting/AlertRuleItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-highlight-words-virtual-d2265e757c/0/cache/react-highlight-words-npm-0.17.0-880b4a18ed-41b3d0e451.zip/node_modules/react-highlight-words/dist/main.js");
/* harmony import */ var react_highlight_words__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highlight_words__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
 // @ts-ignore






const AlertRuleItem = ({
  rule,
  search,
  onTogglePause
}) => {
  const ruleUrl = `${rule.url}?editPanel=${rule.panelId}&tab=alert`;
  const renderText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(text => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((react_highlight_words__WEBPACK_IMPORTED_MODULE_1___default()), {
    highlightClassName: "highlight-search-match",
    textToHighlight: text,
    searchWords: [search]
  }, text), [search]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Heading, {
      children: renderText(rule.name)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Figure, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        size: "xl",
        name: rule.stateIcon,
        className: `alert-rule-item__icon ${rule.stateClass}`
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
          className: `${rule.stateClass}`,
          children: [renderText(rule.stateText), ' ']
        }, "text"), "for ", rule.stateAge]
      }, "state"), rule.info ? renderText(rule.info) : null]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Card.Actions, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "secondary",
        icon: rule.state === 'paused' ? 'play' : 'pause',
        onClick: onTogglePause,
        children: rule.state === 'paused' ? 'Resume' : 'Pause'
      }, "play"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, {
        variant: "secondary",
        href: ruleUrl,
        icon: "cog",
        children: "Edit alert"
      }, "edit")]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertRuleItem);

/***/ }),

/***/ "./public/app/features/alerting/AlertRuleList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertRuleListUnconnected": () => (/* binding */ AlertRuleListUnconnected),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var _types_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/events.ts");
/* harmony import */ var _AlertHowToModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/AlertHowToModal.tsx");
/* harmony import */ var _AlertRuleItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/AlertRuleItem.tsx");
/* harmony import */ var _components_UnifiedAlertingPromotion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/components/UnifiedAlertingPromotion.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/state/actions.ts");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/state/reducers.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/state/selectors.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _label, _div, _LinkButton, _UnifiedAlertingPromo;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function mapStateToProps(state) {
  return {
    navModel: (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_6__.getNavModel)(state.navIndex, 'alert-list'),
    alertRules: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getAlertRuleItems)(state),
    search: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getSearchQuery)(state.alertRules),
    isLoading: state.alertRules.isLoading
  };
}

const mapDispatchToProps = {
  getAlertRulesAsync: _state_actions__WEBPACK_IMPORTED_MODULE_11__.getAlertRulesAsync,
  setSearchQuery: _state_reducers__WEBPACK_IMPORTED_MODULE_12__.setSearchQuery,
  togglePauseAlertRule: _state_actions__WEBPACK_IMPORTED_MODULE_11__.togglePauseAlertRule
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
class AlertRuleListUnconnected extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "stateFilters", [{
      label: 'All',
      value: 'all'
    }, {
      label: 'OK',
      value: 'ok'
    }, {
      label: 'Not OK',
      value: 'not_ok'
    }, {
      label: 'Alerting',
      value: 'alerting'
    }, {
      label: 'No data',
      value: 'no_data'
    }, {
      label: 'Paused',
      value: 'paused'
    }, {
      label: 'Pending',
      value: 'pending'
    }]);

    _defineProperty(this, "onStateFilterChanged", option => {
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.locationService.partial({
        state: option.value
      });
    });

    _defineProperty(this, "onOpenHowTo", () => {
      app_core_app_events__WEBPACK_IMPORTED_MODULE_4__["default"].publish(new _types_events__WEBPACK_IMPORTED_MODULE_7__.ShowModalReactEvent({
        component: _AlertHowToModal__WEBPACK_IMPORTED_MODULE_8__.AlertHowToModal
      }));
    });

    _defineProperty(this, "onSearchQueryChange", value => {
      this.props.setSearchQuery(value);
    });

    _defineProperty(this, "onTogglePause", rule => {
      this.props.togglePauseAlertRule(rule.id, {
        paused: rule.state !== 'paused'
      });
    });

    _defineProperty(this, "alertStateFilterOption", ({
      text,
      value
    }) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("option", {
        value: value,
        children: text
      }, value);
    });
  }

  componentDidMount() {
    this.fetchRules();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.queryParams.state !== this.props.queryParams.state) {
      this.fetchRules();
    }
  }

  async fetchRules() {
    await this.props.getAlertRulesAsync({
      state: this.getStateFilter()
    });
  }

  getStateFilter() {
    var _this$props$queryPara;

    return (_this$props$queryPara = this.props.queryParams.state) !== null && _this$props$queryPara !== void 0 ? _this$props$queryPara : 'all';
  }

  render() {
    const {
      navModel,
      alertRules,
      search,
      isLoading
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], {
      navModel: navModel,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, {
        isLoading: isLoading,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "page-action-bar",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "gf-form gf-form--grow",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FilterInput, {
              placeholder: "Search alerts",
              value: search,
              onChange: this.onSearchQueryChange
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: "gf-form",
            children: [_label || (_label = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("label", {
              className: "gf-form-label",
              htmlFor: "alert-state-filter",
              children: "States"
            })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
              className: "width-13",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, {
                inputId: 'alert-state-filter',
                options: this.stateFilters,
                onChange: this.onStateFilterChanged,
                value: this.getStateFilter()
              })
            })]
          }), _div || (_div = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "page-action-bar__spacer"
          })), _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.unifiedAlertingEnabled && (_LinkButton || (_LinkButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, {
            variant: "primary",
            href: "alerting/ng/new",
            children: "Add NG Alert"
          }))), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: "secondary",
            onClick: this.onOpenHowTo,
            children: "How to add an alert"
          })]
        }), _UnifiedAlertingPromo || (_UnifiedAlertingPromo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_UnifiedAlertingPromotion__WEBPACK_IMPORTED_MODULE_10__.UnifiedAlertingPromotion, {})), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.VerticalGroup, {
          spacing: "none",
          children: alertRules.map(rule => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_AlertRuleItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
              rule: rule,
              search: search,
              onTogglePause: () => this.onTogglePause(rule)
            }, rule.id);
          })
        })]
      })
    });
  }

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(AlertRuleListUnconnected));

/***/ }),

/***/ "./public/app/features/alerting/components/UnifiedAlertingPromotion.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCAL_STORAGE_KEY": () => (/* binding */ LOCAL_STORAGE_KEY),
/* harmony export */   "UnifiedAlertingPromotion": () => (/* binding */ UnifiedAlertingPromotion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useLocalStorage.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");
var _p, _p2;






const LOCAL_STORAGE_KEY = 'grafana.legacyalerting.unifiedalertingpromo';

const UnifiedAlertingPromotion = () => {
  const [showUnifiedAlertingPromotion, setShowUnifiedAlertingPromotion] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(LOCAL_STORAGE_KEY, true);

  if (!showUnifiedAlertingPromotion) {
    return null;
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, {
    severity: "info",
    title: "Try out the Grafana 8 alerting!",
    onRemove: () => setShowUnifiedAlertingPromotion(false),
    children: [_p || (_p = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      children: ["You are using the legacy Grafana alerting.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), "While we have no plans of deprecating it any time soon, we invite you to give the improved Grafana 8 alerting a try."]
    })), _p2 || (_p2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      children: ["See", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        href: "https://grafana.com/docs/grafana/latest/alerting/unified-alerting/difference-old-new/",
        children: "What\u2019s New with Grafana 8 alerting"
      }), ' ', "to learn more about what\u2018s new in Grafana 8 alerting or learn", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        href: "https://grafana.com/docs/grafana/latest/alerting/unified-alerting/opt-in/",
        children: "how to enable the new Grafana 8 alerting feature"
      }), "."]
    }))]
  });
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

/***/ "./public/app/features/alerting/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAlertRuleItems": () => (/* binding */ getAlertRuleItems),
/* harmony export */   "getNotificationChannel": () => (/* binding */ getNotificationChannel),
/* harmony export */   "getSearchQuery": () => (/* binding */ getSearchQuery)
/* harmony export */ });
const getSearchQuery = state => state.searchQuery;
const getAlertRuleItems = state => {
  const regex = new RegExp(state.alertRules.searchQuery, 'i');
  return state.alertRules.items.filter(item => {
    return regex.test(item.name) || regex.test(item.stateText) || regex.test(item.info);
  });
};
const getNotificationChannel = (state, channelId) => {
  if (state.notificationChannel.id === channelId) {
    return state.notificationChannel;
  }

  return null;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQm9FLEtBQWpCLENBQXVCQyxNQUF2QixDQUErQkMsSUFBRCxJQUFVO0FBQzdDLFdBQU9KLEtBQUssQ0FBQ0ssSUFBTixDQUFXRCxJQUFJLENBQUNoRyxJQUFoQixLQUF5QjRGLEtBQUssQ0FBQ0ssSUFBTixDQUFXRCxJQUFJLENBQUM3RixTQUFoQixDQUF6QixJQUF1RHlGLEtBQUssQ0FBQ0ssSUFBTixDQUFXRCxJQUFJLENBQUMzRixJQUFoQixDQUE5RDtBQUNELEdBRk0sQ0FBUDtBQUdELENBTk07QUFRQSxNQUFNNkYsc0JBQXNCLEdBQUcsQ0FBQzVGLEtBQUQsRUFBa0M2RixTQUFsQyxLQUF3RDtBQUM1RixNQUFJN0YsS0FBSyxDQUFDNkUsbUJBQU4sQ0FBMEI3QyxFQUExQixLQUFpQzZELFNBQXJDLEVBQWdEO0FBQzlDLFdBQU83RixLQUFLLENBQUM2RSxtQkFBYjtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNELENBTk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9BbGVydEhvd1RvTW9kYWwudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL0FsZXJ0UnVsZUl0ZW0udHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL0FsZXJ0UnVsZUxpc3QudHN4Iiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL2NvbXBvbmVudHMvVW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uLnRzeCIsIndlYnBhY2s6Ly9ncmFmYW5hLy4vcHVibGljL2FwcC9mZWF0dXJlcy9hbGVydGluZy9zdGF0ZS9hY3Rpb25zLnRzIiwid2VicGFjazovL2dyYWZhbmEvLi9wdWJsaWMvYXBwL2ZlYXR1cmVzL2FsZXJ0aW5nL3N0YXRlL3NlbGVjdG9ycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBNb2RhbCwgVmVydGljYWxHcm91cCB9IGZyb20gJ0BncmFmYW5hL3VpJztcblxuZXhwb3J0IGludGVyZmFjZSBBbGVydEhvd1RvTW9kYWxQcm9wcyB7XG4gIG9uRGlzbWlzczogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFsZXJ0SG93VG9Nb2RhbCh7IG9uRGlzbWlzcyB9OiBBbGVydEhvd1RvTW9kYWxQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgdGl0bGU9XCJBZGRpbmcgYW4gQWxlcnRcIiBpc09wZW4gb25EaXNtaXNzPXtvbkRpc21pc3N9IG9uQ2xpY2tCYWNrZHJvcD17b25EaXNtaXNzfT5cbiAgICAgIDxWZXJ0aWNhbEdyb3VwIHNwYWNpbmc9XCJzbVwiPlxuICAgICAgICA8aW1nIHNyYz1cInB1YmxpYy9pbWcvYWxlcnRfaG93dG9fbmV3LnBuZ1wiIGFsdD1cImxpbmsgdG8gaG93IHRvIGFsZXJ0IGltYWdlXCIgLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQWxlcnRzIGFyZSBhZGRlZCBhbmQgY29uZmlndXJlZCBpbiB0aGUgQWxlcnQgdGFiIG9mIGFueSBkYXNoYm9hcmQgZ3JhcGggcGFuZWwsIGxldHRpbmcgeW91IGJ1aWxkIGFuZCB2aXN1YWxpemVcbiAgICAgICAgICBhbiBhbGVydCB1c2luZyBleGlzdGluZyBxdWVyaWVzLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlJlbWVtYmVyIHRvIHNhdmUgdGhlIGRhc2hib2FyZCB0byBwZXJzaXN0IHlvdXIgYWxlcnQgcnVsZSBjaGFuZ2VzLjwvcD5cbiAgICAgIDwvVmVydGljYWxHcm91cD5cbiAgICA8L01vZGFsPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IEhpZ2hsaWdodGVyIGZyb20gJ3JlYWN0LWhpZ2hsaWdodC13b3Jkcyc7XG5cbmltcG9ydCB7IEljb24sIEljb25OYW1lLCBCdXR0b24sIExpbmtCdXR0b24sIENhcmQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmltcG9ydCB7IEFsZXJ0UnVsZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIHJ1bGU6IEFsZXJ0UnVsZTtcbiAgc2VhcmNoOiBzdHJpbmc7XG4gIG9uVG9nZ2xlUGF1c2U6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEFsZXJ0UnVsZUl0ZW0gPSAoeyBydWxlLCBzZWFyY2gsIG9uVG9nZ2xlUGF1c2UgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgcnVsZVVybCA9IGAke3J1bGUudXJsfT9lZGl0UGFuZWw9JHtydWxlLnBhbmVsSWR9JnRhYj1hbGVydGA7XG4gIGNvbnN0IHJlbmRlclRleHQgPSB1c2VDYWxsYmFjayhcbiAgICAodGV4dCkgPT4gKFxuICAgICAgPEhpZ2hsaWdodGVyXG4gICAgICAgIGtleT17dGV4dH1cbiAgICAgICAgaGlnaGxpZ2h0Q2xhc3NOYW1lPVwiaGlnaGxpZ2h0LXNlYXJjaC1tYXRjaFwiXG4gICAgICAgIHRleHRUb0hpZ2hsaWdodD17dGV4dH1cbiAgICAgICAgc2VhcmNoV29yZHM9e1tzZWFyY2hdfVxuICAgICAgLz5cbiAgICApLFxuICAgIFtzZWFyY2hdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZD5cbiAgICAgIDxDYXJkLkhlYWRpbmc+e3JlbmRlclRleHQocnVsZS5uYW1lKX08L0NhcmQuSGVhZGluZz5cbiAgICAgIDxDYXJkLkZpZ3VyZT5cbiAgICAgICAgPEljb24gc2l6ZT1cInhsXCIgbmFtZT17cnVsZS5zdGF0ZUljb24gYXMgSWNvbk5hbWV9IGNsYXNzTmFtZT17YGFsZXJ0LXJ1bGUtaXRlbV9faWNvbiAke3J1bGUuc3RhdGVDbGFzc31gfSAvPlxuICAgICAgPC9DYXJkLkZpZ3VyZT5cbiAgICAgIDxDYXJkLk1ldGE+XG4gICAgICAgIDxzcGFuIGtleT1cInN0YXRlXCI+XG4gICAgICAgICAgPHNwYW4ga2V5PVwidGV4dFwiIGNsYXNzTmFtZT17YCR7cnVsZS5zdGF0ZUNsYXNzfWB9PlxuICAgICAgICAgICAge3JlbmRlclRleHQocnVsZS5zdGF0ZVRleHQpfXsnICd9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIGZvciB7cnVsZS5zdGF0ZUFnZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7cnVsZS5pbmZvID8gcmVuZGVyVGV4dChydWxlLmluZm8pIDogbnVsbH1cbiAgICAgIDwvQ2FyZC5NZXRhPlxuICAgICAgPENhcmQuQWN0aW9ucz5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGtleT1cInBsYXlcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIGljb249e3J1bGUuc3RhdGUgPT09ICdwYXVzZWQnID8gJ3BsYXknIDogJ3BhdXNlJ31cbiAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZVBhdXNlfVxuICAgICAgICA+XG4gICAgICAgICAge3J1bGUuc3RhdGUgPT09ICdwYXVzZWQnID8gJ1Jlc3VtZScgOiAnUGF1c2UnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPExpbmtCdXR0b24ga2V5PVwiZWRpdFwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBocmVmPXtydWxlVXJsfSBpY29uPVwiY29nXCI+XG4gICAgICAgICAgRWRpdCBhbGVydFxuICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICA8L0NhcmQuQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGVydFJ1bGVJdGVtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBDb25uZWN0ZWRQcm9wcyB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgU2VsZWN0YWJsZVZhbHVlIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBjb25maWcsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgQnV0dG9uLCBGaWx0ZXJJbnB1dCwgTGlua0J1dHRvbiwgU2VsZWN0LCBWZXJ0aWNhbEdyb3VwIH0gZnJvbSAnQGdyYWZhbmEvdWknO1xuaW1wb3J0IGFwcEV2ZW50cyBmcm9tICdhcHAvY29yZS9hcHBfZXZlbnRzJztcbmltcG9ydCBQYWdlIGZyb20gJ2FwcC9jb3JlL2NvbXBvbmVudHMvUGFnZS9QYWdlJztcbmltcG9ydCB7IEdyYWZhbmFSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnYXBwL2NvcmUvbmF2aWdhdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBnZXROYXZNb2RlbCB9IGZyb20gJ2FwcC9jb3JlL3NlbGVjdG9ycy9uYXZNb2RlbCc7XG5pbXBvcnQgeyBBbGVydFJ1bGUsIFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5pbXBvcnQgeyBTaG93TW9kYWxSZWFjdEV2ZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMvZXZlbnRzJztcblxuaW1wb3J0IHsgQWxlcnRIb3dUb01vZGFsIH0gZnJvbSAnLi9BbGVydEhvd1RvTW9kYWwnO1xuaW1wb3J0IEFsZXJ0UnVsZUl0ZW0gZnJvbSAnLi9BbGVydFJ1bGVJdGVtJztcbmltcG9ydCB7IFVuaWZpZWRBbGVydGluZ1Byb21vdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9VbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24nO1xuaW1wb3J0IHsgZ2V0QWxlcnRSdWxlc0FzeW5jLCB0b2dnbGVQYXVzZUFsZXJ0UnVsZSB9IGZyb20gJy4vc3RhdGUvYWN0aW9ucyc7XG5pbXBvcnQgeyBzZXRTZWFyY2hRdWVyeSB9IGZyb20gJy4vc3RhdGUvcmVkdWNlcnMnO1xuaW1wb3J0IHsgZ2V0QWxlcnRSdWxlSXRlbXMsIGdldFNlYXJjaFF1ZXJ5IH0gZnJvbSAnLi9zdGF0ZS9zZWxlY3RvcnMnO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGU6IFN0b3JlU3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBuYXZNb2RlbDogZ2V0TmF2TW9kZWwoc3RhdGUubmF2SW5kZXgsICdhbGVydC1saXN0JyksXG4gICAgYWxlcnRSdWxlczogZ2V0QWxlcnRSdWxlSXRlbXMoc3RhdGUpLFxuICAgIHNlYXJjaDogZ2V0U2VhcmNoUXVlcnkoc3RhdGUuYWxlcnRSdWxlcyksXG4gICAgaXNMb2FkaW5nOiBzdGF0ZS5hbGVydFJ1bGVzLmlzTG9hZGluZyxcbiAgfTtcbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBnZXRBbGVydFJ1bGVzQXN5bmMsXG4gIHNldFNlYXJjaFF1ZXJ5LFxuICB0b2dnbGVQYXVzZUFsZXJ0UnVsZSxcbn07XG5cbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpO1xuXG5pbnRlcmZhY2UgT3duUHJvcHMgZXh0ZW5kcyBHcmFmYW5hUm91dGVDb21wb25lbnRQcm9wczx7fSwgeyBzdGF0ZTogc3RyaW5nIH0+IHt9XG5cbmV4cG9ydCB0eXBlIFByb3BzID0gT3duUHJvcHMgJiBDb25uZWN0ZWRQcm9wczx0eXBlb2YgY29ubmVjdG9yPjtcblxuZXhwb3J0IGNsYXNzIEFsZXJ0UnVsZUxpc3RVbmNvbm5lY3RlZCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgc3RhdGVGaWx0ZXJzID0gW1xuICAgIHsgbGFiZWw6ICdBbGwnLCB2YWx1ZTogJ2FsbCcgfSxcbiAgICB7IGxhYmVsOiAnT0snLCB2YWx1ZTogJ29rJyB9LFxuICAgIHsgbGFiZWw6ICdOb3QgT0snLCB2YWx1ZTogJ25vdF9vaycgfSxcbiAgICB7IGxhYmVsOiAnQWxlcnRpbmcnLCB2YWx1ZTogJ2FsZXJ0aW5nJyB9LFxuICAgIHsgbGFiZWw6ICdObyBkYXRhJywgdmFsdWU6ICdub19kYXRhJyB9LFxuICAgIHsgbGFiZWw6ICdQYXVzZWQnLCB2YWx1ZTogJ3BhdXNlZCcgfSxcbiAgICB7IGxhYmVsOiAnUGVuZGluZycsIHZhbHVlOiAncGVuZGluZycgfSxcbiAgXTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoUnVsZXMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5xdWVyeVBhcmFtcy5zdGF0ZSAhPT0gdGhpcy5wcm9wcy5xdWVyeVBhcmFtcy5zdGF0ZSkge1xuICAgICAgdGhpcy5mZXRjaFJ1bGVzKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hSdWxlcygpIHtcbiAgICBhd2FpdCB0aGlzLnByb3BzLmdldEFsZXJ0UnVsZXNBc3luYyh7IHN0YXRlOiB0aGlzLmdldFN0YXRlRmlsdGVyKCkgfSk7XG4gIH1cblxuICBnZXRTdGF0ZUZpbHRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnF1ZXJ5UGFyYW1zLnN0YXRlID8/ICdhbGwnO1xuICB9XG5cbiAgb25TdGF0ZUZpbHRlckNoYW5nZWQgPSAob3B0aW9uOiBTZWxlY3RhYmxlVmFsdWUpID0+IHtcbiAgICBsb2NhdGlvblNlcnZpY2UucGFydGlhbCh7IHN0YXRlOiBvcHRpb24udmFsdWUgfSk7XG4gIH07XG5cbiAgb25PcGVuSG93VG8gPSAoKSA9PiB7XG4gICAgYXBwRXZlbnRzLnB1Ymxpc2gobmV3IFNob3dNb2RhbFJlYWN0RXZlbnQoeyBjb21wb25lbnQ6IEFsZXJ0SG93VG9Nb2RhbCB9KSk7XG4gIH07XG5cbiAgb25TZWFyY2hRdWVyeUNoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZXRTZWFyY2hRdWVyeSh2YWx1ZSk7XG4gIH07XG5cbiAgb25Ub2dnbGVQYXVzZSA9IChydWxlOiBBbGVydFJ1bGUpID0+IHtcbiAgICB0aGlzLnByb3BzLnRvZ2dsZVBhdXNlQWxlcnRSdWxlKHJ1bGUuaWQsIHsgcGF1c2VkOiBydWxlLnN0YXRlICE9PSAncGF1c2VkJyB9KTtcbiAgfTtcblxuICBhbGVydFN0YXRlRmlsdGVyT3B0aW9uID0gKHsgdGV4dCwgdmFsdWUgfTogeyB0ZXh0OiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8b3B0aW9uIGtleT17dmFsdWV9IHZhbHVlPXt2YWx1ZX0+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9vcHRpb24+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYXZNb2RlbCwgYWxlcnRSdWxlcywgc2VhcmNoLCBpc0xvYWRpbmcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2UgbmF2TW9kZWw9e25hdk1vZGVsfT5cbiAgICAgICAgPFBhZ2UuQ29udGVudHMgaXNMb2FkaW5nPXtpc0xvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1hY3Rpb24tYmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdmLWZvcm0gZ2YtZm9ybS0tZ3Jvd1wiPlxuICAgICAgICAgICAgICA8RmlsdGVySW5wdXQgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYWxlcnRzXCIgdmFsdWU9e3NlYXJjaH0gb25DaGFuZ2U9e3RoaXMub25TZWFyY2hRdWVyeUNoYW5nZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZi1mb3JtXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJnZi1mb3JtLWxhYmVsXCIgaHRtbEZvcj1cImFsZXJ0LXN0YXRlLWZpbHRlclwiPlxuICAgICAgICAgICAgICAgIFN0YXRlc1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkdGgtMTNcIj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBpbnB1dElkPXsnYWxlcnQtc3RhdGUtZmlsdGVyJ31cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMuc3RhdGVGaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25TdGF0ZUZpbHRlckNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRTdGF0ZUZpbHRlcigpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtYWN0aW9uLWJhcl9fc3BhY2VyXCIgLz5cbiAgICAgICAgICAgIHtjb25maWcudW5pZmllZEFsZXJ0aW5nRW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgIDxMaW5rQnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgaHJlZj1cImFsZXJ0aW5nL25nL25ld1wiPlxuICAgICAgICAgICAgICAgIEFkZCBORyBBbGVydFxuICAgICAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5vbk9wZW5Ib3dUb30+XG4gICAgICAgICAgICAgIEhvdyB0byBhZGQgYW4gYWxlcnRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24gLz5cbiAgICAgICAgICA8VmVydGljYWxHcm91cCBzcGFjaW5nPVwibm9uZVwiPlxuICAgICAgICAgICAge2FsZXJ0UnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEFsZXJ0UnVsZUl0ZW1cbiAgICAgICAgICAgICAgICAgIHJ1bGU9e3J1bGUgYXMgQWxlcnRSdWxlfVxuICAgICAgICAgICAgICAgICAga2V5PXtydWxlLmlkfVxuICAgICAgICAgICAgICAgICAgc2VhcmNoPXtzZWFyY2h9XG4gICAgICAgICAgICAgICAgICBvblRvZ2dsZVBhdXNlPXsoKSA9PiB0aGlzLm9uVG9nZ2xlUGF1c2UocnVsZSBhcyBBbGVydFJ1bGUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1ZlcnRpY2FsR3JvdXA+XG4gICAgICAgIDwvUGFnZS5Db250ZW50cz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RvcihBbGVydFJ1bGVMaXN0VW5jb25uZWN0ZWQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlIH0gZnJvbSAncmVhY3QtdXNlJztcblxuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICdAZ3JhZmFuYS91aSc7XG5cbmV4cG9ydCBjb25zdCBMT0NBTF9TVE9SQUdFX0tFWSA9ICdncmFmYW5hLmxlZ2FjeWFsZXJ0aW5nLnVuaWZpZWRhbGVydGluZ3Byb21vJztcblxuY29uc3QgVW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uOiBGQzx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93VW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uLCBzZXRTaG93VW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uXSA9IHVzZUxvY2FsU3RvcmFnZTxib29sZWFuPihcbiAgICBMT0NBTF9TVE9SQUdFX0tFWSxcbiAgICB0cnVlXG4gICk7XG5cbiAgaWYgKCFzaG93VW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBbGVydFxuICAgICAgc2V2ZXJpdHk9XCJpbmZvXCJcbiAgICAgIHRpdGxlPVwiVHJ5IG91dCB0aGUgR3JhZmFuYSA4IGFsZXJ0aW5nIVwiXG4gICAgICBvblJlbW92ZT17KCkgPT4gc2V0U2hvd1VuaWZpZWRBbGVydGluZ1Byb21vdGlvbihmYWxzZSl9XG4gICAgPlxuICAgICAgPHA+XG4gICAgICAgIFlvdSBhcmUgdXNpbmcgdGhlIGxlZ2FjeSBHcmFmYW5hIGFsZXJ0aW5nLlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgV2hpbGUgd2UgaGF2ZSBubyBwbGFucyBvZiBkZXByZWNhdGluZyBpdCBhbnkgdGltZSBzb29uLCB3ZSBpbnZpdGUgeW91IHRvIGdpdmUgdGhlIGltcHJvdmVkIEdyYWZhbmEgOCBhbGVydGluZyBhXG4gICAgICAgIHRyeS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBTZWV7JyAnfVxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ncmFmYW5hLmNvbS9kb2NzL2dyYWZhbmEvbGF0ZXN0L2FsZXJ0aW5nL3VuaWZpZWQtYWxlcnRpbmcvZGlmZmVyZW5jZS1vbGQtbmV3L1wiPlxuICAgICAgICAgIFdoYXTigJlzIE5ldyB3aXRoIEdyYWZhbmEgOCBhbGVydGluZ1xuICAgICAgICA8L2E+eycgJ31cbiAgICAgICAgdG8gbGVhcm4gbW9yZSBhYm91dCB3aGF0JmxzcXVvO3MgbmV3IGluIEdyYWZhbmEgOCBhbGVydGluZyBvciBsZWFybnsnICd9XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dyYWZhbmEuY29tL2RvY3MvZ3JhZmFuYS9sYXRlc3QvYWxlcnRpbmcvdW5pZmllZC1hbGVydGluZy9vcHQtaW4vXCI+XG4gICAgICAgICAgaG93IHRvIGVuYWJsZSB0aGUgbmV3IEdyYWZhbmEgOCBhbGVydGluZyBmZWF0dXJlXG4gICAgICAgIDwvYT5cbiAgICAgICAgLlxuICAgICAgPC9wPlxuICAgIDwvQWxlcnQ+XG4gICk7XG59O1xuXG5leHBvcnQgeyBVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24gfTtcbiIsImltcG9ydCB7IGdldEJhY2tlbmRTcnYsIGxvY2F0aW9uU2VydmljZSB9IGZyb20gJ0BncmFmYW5hL3J1bnRpbWUnO1xuaW1wb3J0IHsgbm90aWZ5QXBwIH0gZnJvbSAnYXBwL2NvcmUvYWN0aW9ucyc7XG5pbXBvcnQgeyBjcmVhdGVFcnJvck5vdGlmaWNhdGlvbiwgY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiB9IGZyb20gJ2FwcC9jb3JlL2NvcHkvYXBwTm90aWZpY2F0aW9uJztcbmltcG9ydCB7IEFsZXJ0UnVsZURUTywgTm90aWZpZXJEVE8sIFRodW5rUmVzdWx0IH0gZnJvbSAnYXBwL3R5cGVzJztcblxuaW1wb3J0IHsgbG9hZEFsZXJ0UnVsZXMsIGxvYWRlZEFsZXJ0UnVsZXMsIG5vdGlmaWNhdGlvbkNoYW5uZWxMb2FkZWQsIHNldE5vdGlmaWNhdGlvbkNoYW5uZWxzIH0gZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGVydFJ1bGVzQXN5bmMob3B0aW9uczogeyBzdGF0ZTogc3RyaW5nIH0pOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChsb2FkQWxlcnRSdWxlcygpKTtcbiAgICBjb25zdCBydWxlczogQWxlcnRSdWxlRFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KCcvYXBpL2FsZXJ0cycsIG9wdGlvbnMpO1xuICAgIGRpc3BhdGNoKGxvYWRlZEFsZXJ0UnVsZXMocnVsZXMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVBhdXNlQWxlcnRSdWxlKGlkOiBudW1iZXIsIG9wdGlvbnM6IHsgcGF1c2VkOiBib29sZWFuIH0pOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS9hbGVydHMvJHtpZH0vcGF1c2VgLCBvcHRpb25zKTtcbiAgICBjb25zdCBzdGF0ZUZpbHRlciA9IGxvY2F0aW9uU2VydmljZS5nZXRTZWFyY2hPYmplY3QoKS5zdGF0ZSB8fCAnYWxsJztcbiAgICBkaXNwYXRjaChnZXRBbGVydFJ1bGVzQXN5bmMoeyBzdGF0ZTogc3RhdGVGaWx0ZXIudG9TdHJpbmcoKSB9KSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsKGRhdGE6IGFueSk6IFRodW5rUmVzdWx0PFByb21pc2U8dm9pZD4+IHtcbiAgcmV0dXJuIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnZXRCYWNrZW5kU3J2KCkucG9zdChgL2FwaS9hbGVydC1ub3RpZmljYXRpb25zYCwgZGF0YSk7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbignTm90aWZpY2F0aW9uIGNyZWF0ZWQnKSkpO1xuICAgICAgbG9jYXRpb25TZXJ2aWNlLnB1c2goJy9hbGVydGluZy9ub3RpZmljYXRpb25zJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKG5vdGlmeUFwcChjcmVhdGVFcnJvck5vdGlmaWNhdGlvbihlcnJvci5kYXRhLmVycm9yKSkpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwoZGF0YTogYW55KTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wdXQoYC9hcGkvYWxlcnQtbm90aWZpY2F0aW9ucy8ke2RhdGEuaWR9YCwgZGF0YSk7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbignTm90aWZpY2F0aW9uIHVwZGF0ZWQnKSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaChub3RpZnlBcHAoY3JlYXRlRXJyb3JOb3RpZmljYXRpb24oZXJyb3IuZGF0YS5lcnJvcikpKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbChkYXRhOiBhbnkpOiBUaHVua1Jlc3VsdDx2b2lkPiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgY29uc3QgY2hhbm5lbCA9IGdldFN0YXRlKCkubm90aWZpY2F0aW9uQ2hhbm5lbC5ub3RpZmljYXRpb25DaGFubmVsO1xuICAgIGF3YWl0IGdldEJhY2tlbmRTcnYoKS5wb3N0KCcvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvdGVzdCcsIHsgaWQ6IGNoYW5uZWwuaWQsIC4uLmRhdGEgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTm90aWZpY2F0aW9uVHlwZXMoKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgY29uc3QgYWxlcnROb3RpZmllcnM6IE5vdGlmaWVyRFRPW10gPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL2FsZXJ0LW5vdGlmaWVyc2ApO1xuXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uVHlwZXMgPSBhbGVydE5vdGlmaWVycy5zb3J0KChvMSwgbzIpID0+IHtcbiAgICAgIGlmIChvMS5uYW1lID4gbzIubmFtZSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgICB9KTtcblxuICAgIGRpc3BhdGNoKHNldE5vdGlmaWNhdGlvbkNoYW5uZWxzKG5vdGlmaWNhdGlvblR5cGVzKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbChpZDogbnVtYmVyKTogVGh1bmtSZXN1bHQ8dm9pZD4ge1xuICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgYXdhaXQgZGlzcGF0Y2gobG9hZE5vdGlmaWNhdGlvblR5cGVzKCkpO1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbkNoYW5uZWwgPSBhd2FpdCBnZXRCYWNrZW5kU3J2KCkuZ2V0KGAvYXBpL2FsZXJ0LW5vdGlmaWNhdGlvbnMvJHtpZH1gKTtcbiAgICBkaXNwYXRjaChub3RpZmljYXRpb25DaGFubmVsTG9hZGVkKG5vdGlmaWNhdGlvbkNoYW5uZWwpKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IEFsZXJ0UnVsZSwgQWxlcnRSdWxlc1N0YXRlLCBOb3RpZmljYXRpb25DaGFubmVsU3RhdGUsIFN0b3JlU3RhdGUgfSBmcm9tICdhcHAvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VhcmNoUXVlcnkgPSAoc3RhdGU6IEFsZXJ0UnVsZXNTdGF0ZSkgPT4gc3RhdGUuc2VhcmNoUXVlcnk7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGVydFJ1bGVJdGVtcyA9IChzdGF0ZTogU3RvcmVTdGF0ZSk6IEFsZXJ0UnVsZVtdID0+IHtcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHN0YXRlLmFsZXJ0UnVsZXMuc2VhcmNoUXVlcnksICdpJyk7XG5cbiAgcmV0dXJuIHN0YXRlLmFsZXJ0UnVsZXMuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QoaXRlbS5uYW1lKSB8fCByZWdleC50ZXN0KGl0ZW0uc3RhdGVUZXh0KSB8fCByZWdleC50ZXN0KGl0ZW0uaW5mbyEpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXROb3RpZmljYXRpb25DaGFubmVsID0gKHN0YXRlOiBOb3RpZmljYXRpb25DaGFubmVsU3RhdGUsIGNoYW5uZWxJZDogbnVtYmVyKSA9PiB7XG4gIGlmIChzdGF0ZS5ub3RpZmljYXRpb25DaGFubmVsLmlkID09PSBjaGFubmVsSWQpIHtcbiAgICByZXR1cm4gc3RhdGUubm90aWZpY2F0aW9uQ2hhbm5lbDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1vZGFsIiwiVmVydGljYWxHcm91cCIsIkFsZXJ0SG93VG9Nb2RhbCIsIm9uRGlzbWlzcyIsInVzZUNhbGxiYWNrIiwiSGlnaGxpZ2h0ZXIiLCJJY29uIiwiQnV0dG9uIiwiTGlua0J1dHRvbiIsIkNhcmQiLCJBbGVydFJ1bGVJdGVtIiwicnVsZSIsInNlYXJjaCIsIm9uVG9nZ2xlUGF1c2UiLCJydWxlVXJsIiwidXJsIiwicGFuZWxJZCIsInJlbmRlclRleHQiLCJ0ZXh0IiwibmFtZSIsInN0YXRlSWNvbiIsInN0YXRlQ2xhc3MiLCJzdGF0ZVRleHQiLCJzdGF0ZUFnZSIsImluZm8iLCJzdGF0ZSIsIlB1cmVDb21wb25lbnQiLCJjb25uZWN0IiwiY29uZmlnIiwibG9jYXRpb25TZXJ2aWNlIiwiRmlsdGVySW5wdXQiLCJTZWxlY3QiLCJhcHBFdmVudHMiLCJQYWdlIiwiZ2V0TmF2TW9kZWwiLCJTaG93TW9kYWxSZWFjdEV2ZW50IiwiVW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uIiwiZ2V0QWxlcnRSdWxlc0FzeW5jIiwidG9nZ2xlUGF1c2VBbGVydFJ1bGUiLCJzZXRTZWFyY2hRdWVyeSIsImdldEFsZXJ0UnVsZUl0ZW1zIiwiZ2V0U2VhcmNoUXVlcnkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJuYXZNb2RlbCIsIm5hdkluZGV4IiwiYWxlcnRSdWxlcyIsImlzTG9hZGluZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3RvciIsIkFsZXJ0UnVsZUxpc3RVbmNvbm5lY3RlZCIsImxhYmVsIiwidmFsdWUiLCJvcHRpb24iLCJwYXJ0aWFsIiwicHVibGlzaCIsImNvbXBvbmVudCIsInByb3BzIiwiaWQiLCJwYXVzZWQiLCJjb21wb25lbnREaWRNb3VudCIsImZldGNoUnVsZXMiLCJjb21wb25lbnREaWRVcGRhdGUiLCJwcmV2UHJvcHMiLCJxdWVyeVBhcmFtcyIsImdldFN0YXRlRmlsdGVyIiwicmVuZGVyIiwib25TZWFyY2hRdWVyeUNoYW5nZSIsInN0YXRlRmlsdGVycyIsIm9uU3RhdGVGaWx0ZXJDaGFuZ2VkIiwidW5pZmllZEFsZXJ0aW5nRW5hYmxlZCIsIm9uT3Blbkhvd1RvIiwibWFwIiwidXNlTG9jYWxTdG9yYWdlIiwiQWxlcnQiLCJMT0NBTF9TVE9SQUdFX0tFWSIsInNob3dVbmlmaWVkQWxlcnRpbmdQcm9tb3Rpb24iLCJzZXRTaG93VW5pZmllZEFsZXJ0aW5nUHJvbW90aW9uIiwiZ2V0QmFja2VuZFNydiIsIm5vdGlmeUFwcCIsImNyZWF0ZUVycm9yTm90aWZpY2F0aW9uIiwiY3JlYXRlU3VjY2Vzc05vdGlmaWNhdGlvbiIsImxvYWRBbGVydFJ1bGVzIiwibG9hZGVkQWxlcnRSdWxlcyIsIm5vdGlmaWNhdGlvbkNoYW5uZWxMb2FkZWQiLCJzZXROb3RpZmljYXRpb25DaGFubmVscyIsIm9wdGlvbnMiLCJkaXNwYXRjaCIsInJ1bGVzIiwiZ2V0IiwicG9zdCIsInN0YXRlRmlsdGVyIiwiZ2V0U2VhcmNoT2JqZWN0IiwidG9TdHJpbmciLCJjcmVhdGVOb3RpZmljYXRpb25DaGFubmVsIiwiZGF0YSIsInB1c2giLCJlcnJvciIsInVwZGF0ZU5vdGlmaWNhdGlvbkNoYW5uZWwiLCJwdXQiLCJ0ZXN0Tm90aWZpY2F0aW9uQ2hhbm5lbCIsImdldFN0YXRlIiwiY2hhbm5lbCIsIm5vdGlmaWNhdGlvbkNoYW5uZWwiLCJsb2FkTm90aWZpY2F0aW9uVHlwZXMiLCJhbGVydE5vdGlmaWVycyIsIm5vdGlmaWNhdGlvblR5cGVzIiwic29ydCIsIm8xIiwibzIiLCJsb2FkTm90aWZpY2F0aW9uQ2hhbm5lbCIsInNlYXJjaFF1ZXJ5IiwicmVnZXgiLCJSZWdFeHAiLCJpdGVtcyIsImZpbHRlciIsIml0ZW0iLCJ0ZXN0IiwiZ2V0Tm90aWZpY2F0aW9uQ2hhbm5lbCIsImNoYW5uZWxJZCJdLCJzb3VyY2VSb290IjoiIn0=